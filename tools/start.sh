#!/usr/bin/env bash
# start.sh — launch the LGOP world-browser / game server.
#
#   bash tools/start.sh [--port 8083] [--bind 0.0.0.0] [--background]
#
# Steps:
#   1. Check that dfrotz is available. (There is no frotz daemon to start:
#      tools/server.py spawns one dfrotz per browser play-session, on demand.
#      This step only verifies the Play tab will work.)
#   2. Check COMPILED/x1.z5 exists; if not, try to rebuild it from the ZIL
#      source with the ZILF toolchain (zilf + zapf).
#   3. Start the webserver regardless — the world browser works without the
#      game — printing instructions for anything that failed above.
#
# --background runs the server with nohup, logging to server.log and writing
# server.pid; stop it later with:  kill "$(cat server.pid)"

set -u

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
GAME_DIR="$ROOT/sources/leathergoddesses-gold"
STORY="$GAME_DIR/COMPILED/x1.z5"
PORT=8083
BIND=0.0.0.0
BACKGROUND=0

while [ $# -gt 0 ]; do
    case "$1" in
        --port) PORT="$2"; shift 2 ;;
        --bind) BIND="$2"; shift 2 ;;
        --background|-b) BACKGROUND=1; shift ;;
        -h|--help) grep '^#' "$0" | sed 's/^# \{0,1\}//'; exit 0 ;;
        *) echo "unknown option: $1 (try --help)"; exit 2 ;;
    esac
done

PLAY_OK=1
STORY_OK=1

# --------------------------------------------------------- 1. dfrotz check
find_dfrotz() {
    if [ -n "${DFROTZ:-}" ] && [ -x "$DFROTZ" ]; then
        echo "$DFROTZ"; return 0
    fi
    command -v dfrotz 2>/dev/null && return 0
    for p in /usr/games/dfrotz /usr/local/games/dfrotz \
             /usr/bin/dfrotz /usr/local/bin/dfrotz /opt/homebrew/bin/dfrotz; do
        [ -x "$p" ] && { echo "$p"; return 0; }
    done
    return 1
}

if DFROTZ_BIN="$(find_dfrotz)"; then
    echo "[1/3] dfrotz found: $DFROTZ_BIN"
    echo "      (no daemon needed — the server starts one per play session)"
else
    PLAY_OK=0
    echo "[1/3] WARNING: dfrotz not found."
    echo "      The Play tab will not work until you install it:"
    echo "          sudo apt install frotz        (Debian/Ubuntu)"
    echo "      Debian installs it as /usr/games/dfrotz, which this script"
    echo "      and the server both check. If it lives elsewhere, run with:"
    echo "          DFROTZ=/path/to/dfrotz bash tools/start.sh"
fi

# ----------------------------------------------------- 2. story file check
if [ -f "$STORY" ]; then
    echo "[2/3] story file present: $STORY"
elif command -v zilf >/dev/null 2>&1 && command -v zapf >/dev/null 2>&1; then
    echo "[2/3] $STORY missing — rebuilding from ZIL source with zilf/zapf..."
    (
        cd "$GAME_DIR" || exit 1
        zilf x1.zil && zapf x1.zap
    )
    # zapf names its output x1.z5 (or x1.zip with older versions)
    BUILT=""
    for f in "$GAME_DIR/x1.z5" "$GAME_DIR/x1.zip"; do
        [ -f "$f" ] && [ "$f" -nt "$GAME_DIR/x1.zil" ] && BUILT="$f" && break
    done
    if [ -n "$BUILT" ]; then
        mkdir -p "$GAME_DIR/COMPILED"
        cp "$BUILT" "$STORY"
        echo "      built and installed: $STORY (from $BUILT)"
    else
        STORY_OK=0
        echo "      ERROR: compile did not produce x1.z5/x1.zip."
        echo "      Check the zilf/zapf output above for errors."
    fi
else
    STORY_OK=0
    echo "[2/3] WARNING: $STORY is missing and the ZILF toolchain isn't"
    echo "      installed, so it can't be rebuilt from source."
    echo "      To fix, either:"
    echo "        - install ZILF (zilf + zapf, needs the .NET runtime) from"
    echo "          https://foss.heptapod.net/zilf/zilf and put both on PATH,"
    echo "          then re-run this script; or"
    echo "        - copy a known-good x1.z5 into $ROOT/COMPILED/"
    echo "      The Play tab will not work until then."
fi

# ---------------------------------------------------------- 3. web server
# refuse to start if something already owns the port (e.g. an old
# "python3 -m http.server" still running — it serves the pages but has no
# game API, which shows up as "Backend not reachable" in the Play tab)
if (exec 3<>"/dev/tcp/127.0.0.1/$PORT") 2>/dev/null; then
    exec 3>&- 3<&-
    echo "[3/3] ERROR: port $PORT is already in use — probably an older"
    echo "      server (plain http.server?) still running. Find and stop it:"
    echo "          ss -ltnp | grep :$PORT      (or: lsof -i :$PORT)"
    echo "          kill <pid>"
    echo "      then re-run this script. Or pick another port with --port."
    exit 1
fi

if ! command -v python3 >/dev/null 2>&1; then
    echo "[3/3] ERROR: python3 not found — cannot start the webserver."
    echo "      Install it with:  sudo apt install python3"
    exit 1
fi

if [ "$PLAY_OK" -eq 1 ] && [ "$STORY_OK" -eq 1 ]; then
    echo "[3/3] all checks passed — starting webserver on $BIND:$PORT"
else
    echo "[3/3] starting webserver anyway on $BIND:$PORT — the world browser"
    echo "      works, but the Play tab is disabled until the warnings above"
    echo "      are fixed (then restart this script)."
fi

if [ "$BACKGROUND" -eq 1 ]; then
    nohup python3 "$ROOT/tools/server.py" --port "$PORT" --bind "$BIND" \
        > "$ROOT/server.log" 2>&1 &
    echo $! > "$ROOT/server.pid"
    sleep 1
    if ! kill -0 "$(cat "$ROOT/server.pid")" 2>/dev/null; then
        echo "      ERROR: server exited immediately. Last log lines:"
        tail -5 "$ROOT/server.log" | sed 's/^/      | /'
        rm -f "$ROOT/server.pid"
        exit 1
    fi
    echo "      running in background: pid $(cat "$ROOT/server.pid"),"
    echo "      log: $ROOT/server.log"
    echo "      stop with:  kill \"\$(cat $ROOT/server.pid)\""
else
    exec python3 "$ROOT/tools/server.py" --port "$PORT" --bind "$BIND"
fi
