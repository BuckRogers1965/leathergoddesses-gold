#!/usr/bin/env python3
"""Viewer + play server for Leather Goddesses of Phobos.

Serves the static world browser from viewer/ and runs the compiled game
(COMPILED/x1.z5) through dfrotz subprocesses, one per browser session,
exposed as a small JSON API:

    POST /api/new              -> {"id": ..., "output": intro text}
    POST /api/send {id, cmd}   -> {"output": ..., "dead": bool}
    GET  /api/health           -> {"dfrotz": path or null, "story": bool}

Requires dfrotz (dumb frotz), part of the frotz package:
    Debian/Ubuntu:  sudo apt install frotz
    macOS:          brew install frotz
or set the DFROTZ environment variable to the binary's path.

Usage:  python3 tools/server.py [--port 8083] [--bind 0.0.0.0]
"""

import argparse
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
VIEWER_DIR = os.path.join(ROOT, "viewer")
STORY = os.path.join(ROOT, "COMPILED", "x1.z5")
SAVE_DIR = os.path.join(ROOT, "saves")
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


def spawn_game():
    os.makedirs(SAVE_DIR, exist_ok=True)
    proc = subprocess.Popen(
        [DFROTZ, "-m", "-p", "-w", "80", STORY],
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        cwd=SAVE_DIR,                # SAVE/RESTORE files land in saves/
    )
    return proc


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

    def do_OPTIONS(self):
        # CORS preflight, so the Play tab works even when the page was
        # opened from a different origin (file://, preview panel, etc.)
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def _body(self):
        length = int(self.headers.get("Content-Length") or 0)
        if not length:
            return {}
        try:
            return json.loads(self.rfile.read(length))
        except (ValueError, UnicodeDecodeError):
            return {}

    def do_GET(self):
        if self.path == "/api/health":
            self._json({"dfrotz": DFROTZ, "story": os.path.isfile(STORY)})
            return
        super().do_GET()

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
                        "'brew install frotz' or set DFROTZ=/path/to/dfrotz "
                        "and restart the server."}, 500)
            return
        if not os.path.isfile(STORY):
            self._json({"error": f"story file missing: {STORY}"}, 500)
            return
        # replace this browser's previous session, if any
        old = self._body().get("id")
        if old:
            with SESSIONS_LOCK:
                s = SESSIONS.pop(old, None)
            if s:
                try:
                    s.proc.kill()
                except OSError:
                    pass
        try:
            proc = spawn_game()
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
        print("         Install with 'brew install frotz' or set DFROTZ=...")
    print(f"story:  {STORY} ({'ok' if os.path.isfile(STORY) else 'MISSING'})")
    print(f"saves:  {SAVE_DIR}")
    print(f"serving http://{args.bind}:{args.port}/ from {VIEWER_DIR}")

    handler = partial(Handler, directory=VIEWER_DIR)
    ThreadingHTTPServer((args.bind, args.port), handler).serve_forever()


if __name__ == "__main__":
    main()
