#!/usr/bin/env python3
"""Multi-game viewer + play server.

Layout: each game lives in <publisher>/<game>/ (e.g.
sources/leathergoddesses-gold/) holding its ZIL source, the generated
world.js, the compiled story file, and an optional game.json:

    {"name": "Display Name", "story": "COMPILED/x1.z5"}

The shared GUI is viewer/index.html; it lists the available games and
loads the selected game's world.js. Games are discovered by scanning
the publisher directories for folders containing a world.js.

API:
    GET  /api/games            -> {"games": [{"id", "name", "story"}]}
    POST /api/new  {game, id?} -> {"id", "output", "dead"}
    POST /api/send {id, cmd}   -> {"output", "dead"}
    GET  /api/health           -> {"dfrotz": path|null, "games": n}

Requires dfrotz (dumb frotz), part of the frotz package:
    Debian/Ubuntu:  sudo apt install frotz
    macOS:          brew install frotz
or set the DFROTZ environment variable to the binary's path.

Usage:  python3 tools/server.py [--port 8083] [--bind 0.0.0.0]
"""

import argparse
import glob
import json
import os
import select
import shutil
import subprocess
import threading
import time
import uuid
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLISHERS = ["sources"]
SAVE_ROOT = os.path.join(ROOT, "saves")
SESSION_IDLE_LIMIT = 30 * 60          # reap sessions idle > 30 min


def find_dfrotz():
    cand = os.environ.get("DFROTZ")
    if cand and os.path.isfile(cand):
        return cand
    path = shutil.which("dfrotz")
    if path:
        return path
    for p in ("/usr/games/dfrotz", "/usr/local/games/dfrotz",
              "/usr/bin/dfrotz", "/usr/local/bin/dfrotz",
              "/opt/homebrew/bin/dfrotz"):
        if os.path.isfile(p):
            return p
    return None


DFROTZ = find_dfrotz()


def list_games():
    """Scan publisher dirs for game folders (anything with a world.js)."""
    games = {}
    for pub in PUBLISHERS:
        base = os.path.join(ROOT, pub)
        if not os.path.isdir(base):
            continue
        for name in sorted(os.listdir(base)):
            gdir = os.path.join(base, name)
            if not os.path.isfile(os.path.join(gdir, "game.json")):
                continue            # no game.json = not part of the project
            gid = f"{pub}/{name}"
            meta = {}
            mpath = os.path.join(gdir, "game.json")
            if os.path.isfile(mpath):
                try:
                    with open(mpath, encoding="utf-8") as f:
                        meta = json.load(f)
                except ValueError:
                    meta = {}
            story = meta.get("story")
            if story:
                story = os.path.join(gdir, story)
            games[gid] = {
                "id": gid,
                "name": meta.get("name", name),
                "dir": gdir,
                "story": story,
            }
    return games


class Session:
    def __init__(self, proc):
        self.proc = proc
        self.last_used = time.time()
        self.lock = threading.Lock()


SESSIONS = {}
SESSIONS_LOCK = threading.Lock()


def read_output(proc, quiet=0.35, overall=6.0):
    """Read from proc.stdout until it goes quiet (the game is waiting
    for input) or the overall deadline passes."""
    fd = proc.stdout.fileno()
    chunks = []
    deadline = time.time() + overall
    last_data = time.time()
    while time.time() < deadline:
        ready, _, _ = select.select([fd], [], [], 0.1)
        if ready:
            try:
                chunk = os.read(fd, 65536)
            except OSError:
                break
            if not chunk:                       # EOF: process exited
                break
            chunks.append(chunk.decode("latin-1", "replace"))
            last_data = time.time()
        else:
            if proc.poll() is not None and not ready:
                break
            if chunks and time.time() - last_data >= quiet:
                break
    return "".join(chunks)


def spawn_game(story, save_dir):
    os.makedirs(save_dir, exist_ok=True)
    return subprocess.Popen(
        [DFROTZ, "-m", "-p", "-w", "80", story],
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        cwd=save_dir,                # SAVE/RESTORE files land per game
    )


def reap_idle():
    now = time.time()
    with SESSIONS_LOCK:
        for sid in list(SESSIONS):
            s = SESSIONS[sid]
            if now - s.last_used > SESSION_IDLE_LIMIT or s.proc.poll() is not None:
                try:
                    s.proc.kill()
                except OSError:
                    pass
                del SESSIONS[sid]


class Handler(SimpleHTTPRequestHandler):
    def _json(self, obj, code=200):
        body = json.dumps(obj).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(body)

    def _body(self):
        length = int(self.headers.get("Content-Length") or 0)
        if not length:
            return {}
        try:
            return json.loads(self.rfile.read(length))
        except (ValueError, UnicodeDecodeError):
            return {}

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self):
        path = self.path.split("?", 1)[0]      # ignore the query string
        if path == "/api/health":
            self._json({"dfrotz": DFROTZ, "games": len(list_games())})
            return
        if path == "/api/games":
            self._json({"games": [
                {"id": g["id"], "name": g["name"], "story": bool(g["story"])}
                for g in list_games().values()]})
            return
        if path in ("/", "/index.html"):
            self.path = "/viewer/index.html"
        if path.startswith("/.git") or path.startswith("/saves"):
            self.send_error(404)
            return
        super().do_GET()

    def list_directory(self, path):
        self.send_error(404)                   # no browsable listings
        return None

    def do_POST(self):
        reap_idle()
        if self.path == "/api/new":
            self.api_new()
        elif self.path == "/api/send":
            self.api_send()
        else:
            self._json({"error": "unknown endpoint"}, 404)

    def api_new(self):
        if not DFROTZ:
            self._json({"error": "dfrotz not found. Install with "
                        "'sudo apt install frotz' or set DFROTZ=/path/to/"
                        "dfrotz and restart the server."}, 500)
            return
        data = self._body()
        games = list_games()
        gid = data.get("game")
        game = games.get(gid) or (next(iter(games.values())) if games else None)
        if game is None:
            self._json({"error": "no games found under "
                        + "/".join(PUBLISHERS)}, 500)
            return
        if not game["story"]:
            self._json({"error": f"no story file for {game['id']} — "
                        "add one (see game.json) or rebuild it."}, 500)
            return
        old = data.get("id")
        if old:                       # replace this browser's old session
            with SESSIONS_LOCK:
                s = SESSIONS.pop(old, None)
            if s:
                try:
                    s.proc.kill()
                except OSError:
                    pass
        save_dir = os.path.join(SAVE_ROOT, game["id"].replace("/", "_"))
        try:
            proc = spawn_game(game["story"], save_dir)
        except OSError as e:
            self._json({"error": f"failed to start dfrotz: {e}"}, 500)
            return
        intro = read_output(proc, overall=8.0)
        sid = uuid.uuid4().hex
        with SESSIONS_LOCK:
            SESSIONS[sid] = Session(proc)
        self._json({"id": sid, "output": intro,
                    "dead": proc.poll() is not None})

    def api_send(self):
        data = self._body()
        sid, cmd = data.get("id"), data.get("cmd", "")
        with SESSIONS_LOCK:
            session = SESSIONS.get(sid)
        if session is None:
            self._json({"error": "no such session", "dead": True}, 410)
            return
        with session.lock:
            session.last_used = time.time()
            proc = session.proc
            if proc.poll() is not None:
                self._json({"output": "", "dead": True})
                return
            try:
                proc.stdin.write((cmd + "\n").encode("latin-1", "replace"))
                proc.stdin.flush()
            except (BrokenPipeError, OSError):
                self._json({"output": "", "dead": True})
                return
            out = read_output(proc)
            self._json({"output": out, "dead": proc.poll() is not None})

    def log_message(self, fmt, *args):
        if not self.path.startswith("/api/"):
            return                    # keep static-file noise down
        super().log_message(fmt, *args)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--port", type=int, default=8083)
    ap.add_argument("--bind", default="0.0.0.0")
    args = ap.parse_args()

    if DFROTZ:
        print(f"dfrotz: {DFROTZ}")
    else:
        print("WARNING: dfrotz not found — the Play tab will not work.")
        print("         Install with 'sudo apt install frotz' or set DFROTZ=")
    games = list_games()
    print(f"games:  {len(games)}")
    for g in games.values():
        print(f"  - {g['id']}: {g['name']} "
              f"({'story ok' if g['story'] else 'NO STORY FILE'})")
    print(f"saves:  {SAVE_ROOT}")
    print(f"serving http://{args.bind}:{args.port}/ from {ROOT}")

    handler = partial(Handler, directory=ROOT)
    ThreadingHTTPServer((args.bind, args.port), handler).serve_forever()


if __name__ == "__main__":
    main()
