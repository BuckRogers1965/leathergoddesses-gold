# How to run this — single source of truth

There is ONE server. It serves the web page AND runs the game (frotz).

```
python3 tools/server.py
```

Then browse to:  http://<server-ip>:8083/

That's it. Do NOT use `python3 -m http.server` — that was an early
instruction before the game backend existed and it cannot run the game.

## Optional

- `bash tools/start.sh` — same server, but first checks dfrotz is
  installed and rebuilds the story file if missing. `--background` to
  daemonize (writes server.pid / server.log).
- `python3 tools/server.py --port 9000 --bind 127.0.0.1` — change port/bind.
- `python3 tools/build_viewer.py [game-dir]` — regenerate a game's
  world.js after editing its .zil sources (default game-dir:
  sources/leathergoddesses-gold).

## Layout

Games live in `sources/<game>/` — ZIL source, compiled story file,
generated world.js, and a `game.json` ({"name", "story"}) per game.
The server discovers every game folder containing a world.js and the
web page offers a picker. One shared viewer/index.html for all games;
no per-game index files.

## One-time setup (Debian)

```
sudo apt install frotz        # provides /usr/games/dfrotz for the Play tab
```
