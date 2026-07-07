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
  installed and rebuilds COMPILED/x1.z5 if missing. `--background` to
  daemonize (writes server.pid / server.log).
- `python3 tools/server.py --port 9000 --bind 127.0.0.1` — change port/bind.
- `python3 tools/build_viewer.py` — regenerate viewer/world.js after
  editing the .zil sources.

## One-time setup (Debian)

```
sudo apt install frotz        # provides /usr/games/dfrotz for the Play tab
```
