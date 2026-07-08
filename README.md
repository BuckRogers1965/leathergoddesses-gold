# Infocom Source Explorer

A browser-based study tool for the Infocom source code archive: some thirty
games' worth of original ZIL source — Zork to Trinity to Leather Goddesses
of Phobos — organized into one repository, parsed into a navigable world
model, and served by a single small server. Browse every room, object,
routine, grammar rule, and dictionary word; follow cross-references through
the code; and run the shipped builds side-by-side with their source for
verification.

<p align="center">
  <img src="screenshots/map.png"    width="49%" alt="Map tab — force-directed graph of a game's rooms, colored by source file">
  <img src="screenshots/room.png"   width="49%" alt="Room browser — exits, objects, and syntax-highlighted ZIL source">
</p>
<p align="center">
  <img src="screenshots/syntax.png" width="49%" alt="Syntax tab — the verb grammar with actions and pre-actions">
  <img src="screenshots/play.png"   width="49%" alt="Play tab — the shipped build running in dfrotz, with live room tracking">
</p>

## What this is

This began as a fork of `historicalsource/leathergoddesses-gold` (the
repository keeps that name) and grew into an organized mirror of the
sibling archives: each game's source lives unmodified in
`sources/<game>/`, exactly as published in the individual historicalsource
repositories since 2019. Everything else — the parser, the viewer, the
server — is original tooling built around that material.

The **Play tab** exists as the verification instrument for the source
viewer: it runs a game's shipped story file (present in the archives)
through the stock `dfrotz` interpreter, so the source on screen can be
checked against the behavior that actually shipped — release stamps,
room-by-room correspondence, and eventually full differential testing
(see ROADMAP.md).

## Requirements

- **python3** (3.7+, standard library only — no pip installs, no venv)
- **dfrotz** — the "dumb terminal" build of Frotz; needed only for the
  Play tab (everything else works without it)
  - Debian/Ubuntu: `sudo apt install frotz` (installs `/usr/games/dfrotz`)
  - macOS: `brew install frotz`
  - elsewhere: set `DFROTZ=/path/to/dfrotz` in the environment
- optional: the [ZILF](https://foss.heptapod.net/zilf/zilf) toolchain, only
  for experiments in recompiling ZIL from source

## Running it

**Step 1 — build a game's world model** (parses its ZIL into `world.js`):

```
python3 tools/build_viewer.py sources/zork1
```

or all games at once:

```
for d in sources/*/; do python3 tools/build_viewer.py "${d%/}"; done
```

**Step 2 — start the server:**

```
python3 tools/server.py
```

**Step 3 —** browse to `http://<server-ip>:8083/` and pick a game.

By default the server binds **0.0.0.0:8083** (reachable on your network);
use `--bind 127.0.0.1` for localhost-only or `--port` to move it.
`bash tools/start.sh` wraps the same server with dependency checks and a
`--background` daemon mode. **RUNNING.md** is the always-current authority.

## The browser

| Tab | What it shows |
|---|---|
| **Map** | Force-directed graph of the selected game's rooms, colored by source file. Conditional exits are dashed. Pan, zoom, hover for room descriptions, click through to source. A debug toggle exposes the layout's live diagnostics. |
| **Rooms** | Every room: description, exit table (destinations, conditions, blocking messages), objects present, flags, and the room's syntax-highlighted ZIL action routine. |
| **Objects** | Every object: location, synonyms/adjectives, flags, containment, action routines. |
| **Routines** | All routines with cross-linked source — every known name in any listing is clickable, and each entity lists which routines reference it. |
| **Globals** | Globals and constants with their values. |
| **Syntax** | The verb grammar: every `<SYNTAX>` production with its action and pre-action routines. |
| **Vocab** | Every word the game's parser knows, with all of its roles. |
| **Play** | The shipped build running in `dfrotz` on the server, one session per browser. A live location chip tracks the current room; the map highlights where you are, what you've visited, and your route. |

## How it works

```
browser ── HTTP :8083 ──> tools/server.py ── pipes ──> dfrotz ── <game story file>
                              │
                              ├── serves viewer/index.html (shared, all games)
                              └── /api/games: every folder with a game.json

<game>/*.zil ──> tools/build_viewer.py ──> <game>/world.js   (parsed world model)
```

- `sources/<game>/game.json` is the contract: `{"name": ..., "story": ...}`.
  A folder without one is not part of the project; nothing is auto-detected.
- `tools/build_viewer.py` — a ZIL parser (Python, stdlib only) covering both
  Infocom house styles: classic `<ROOM>` forms and the post-1985
  `<OBJECT ... (LOC ROOMS)>` idiom, with each game's own `<DIRECTIONS>` set.
- `tools/server.py` — one server: static files plus a JSON API driving
  per-session `dfrotz` subprocesses. Saves land in `saves/<game>/`.
- `viewer/index.html` — the whole GUI, one self-contained file, no
  frameworks, no build step.

## Adding a game

1. Put its source in `sources/<name>/` (with its story file, if any)
2. Write `sources/<name>/game.json` — `{"name": "Title", "story": "path"}`
3. `python3 tools/build_viewer.py sources/<name>`
4. Restart the server; it appears in the picker

## A provenance note

The archive's story files are, in at least one verified case, the genuine
shipped article: Leather Goddesses of Phobos's build identifies as
**Release 4 / Serial 880405** — the official Solid Gold master, present on
the Infocom drive at shutdown and byte-pristine since the 2019 archive
import. Where that holds, the shipped binary can serve as a first-class
oracle for verifying the source (and any future translation of it) by
behavior. See ROADMAP.md for where that leads: source-level interpretation,
in-browser editing, and cross-compilation of ZIL into modern engines.

## Provenance & license

The game sources are mirrored from the anonymously-contributed snapshot of
Infocom's development systems, as published in the individual
`historicalsource` repositories — canonical but not necessarily identical
to any shipped release. They are preserved here for education, discussion,
and historical research, and are **not under an open license**; the games
are © Infocom, Inc. (Activision).

The tooling — everything under `tools/` and `viewer/` — is original work
of this repository and is **MIT licensed** (see `tools/LICENSE` and
`viewer/LICENSE`). Generated `world.js` files contain game text and data
extracted from the sources; the MIT grant covers the extraction and viewer
code, not that content. There is deliberately no LICENSE file at the repo
root, so nobody mistakes the games themselves for open-source.

Further reading:
[The Infocom source archives](https://github.com/historicalsource) ·
[IFWiki](http://www.ifwiki.org/index.php/Infocom) ·
[The Interactive Fiction Database](https://ifdb.tads.org/)
