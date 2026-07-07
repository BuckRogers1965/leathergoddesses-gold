# CLAUDE.md

## What this repo is

Source code for **Leather Goddesses of Phobos (Solid Gold Edition)** — Steve
Meretzky, Infocom, 1988 — written in ZIL (Zork Implementation Language, a
LISP/MDL dialect), plus modern tooling built around it: a browser-based
world explorer and a game server. See ROADMAP.md for where this is headed.

## Working conventions

- **Never execute code, scripts, or servers.** The user runs everything
  themselves. Provide exact commands instead.
- The web/game server deploys on a **Debian** box (no Homebrew; game
  binaries live in `/usr/games`). The working copy is on macOS.
- **RUNNING.md is the single source of truth for how to start things.**
  If a previously-given command becomes obsolete, lead the reply with
  "COMMAND CHANGED: old → new" and update RUNNING.md.

## Layout

| Path | What it is |
|---|---|
| `*.zil` | Game source. `x1.zil` is the main file (`INSERT-FILE` order + `<DIRECTIONS ...>`). Regions: earth, mars, venus, cleveland, spaceship, phobos. Engine: parser, syntax, verbs, globals, misc. `hints.zil` = Solid Gold in-game InvisiClues. |
| `*.zap` | **Original Infocom ZILCH compiler intermediates** (came with the 2019 historicalsource archive import, i.e. off the Infocom drive): `x1dat.zap` object/property/vocab tables, `x1str.zap` string pool, `x1freq.zap` abbreviations, `x1pur.zap` pure data. The top-level `x1.zap` (routine code) is absent. NOT ZILF output. |
| `COMPILED/x1.z5` | Z-machine v5 story file (`<VERSION XZIP>`) — **the official Solid Gold release: Release 4 / Serial 880405** (verified in-game via VERSION, 2026-07). Came off the Infocom drive with the 2019 historicalsource import (their commit renamed Infocom's `x1.zip` extension). Same byte size as top-level `x1.zip`. An authentic ZILCH build = first-class differential-testing oracle. No modern from-source build has ever been verified. |
| `tools/build_viewer.py` | Parses all ZIL into `viewer/world.js` (rooms, objects, exits, routines with source text, globals, containment, reverse references). Rerun after editing `.zil` files. |
| `tools/server.py` | THE server (stdlib only): serves `viewer/` + JSON API (`/api/new`, `/api/send`, `/api/health`) that runs the game through `dfrotz` subprocesses, one per browser session. Saves land in `saves/`. |
| `tools/start.sh` | Wrapper: checks dfrotz, rebuilds the .z5 via `zilf`/`zapf` if missing, starts the server. `--background` daemonizes (server.pid/server.log). |
| `viewer/index.html` | Self-contained GUI: Map (force graph), Rooms/Objects/Routines/Globals browsers with cross-linked syntax-highlighted source, Syntax tab (verb grammar from SYNTAX/VERB-SYNONYM forms), Vocab tab (every dictionary word with its roles), Play tab (terminal to the backend). Tracks the current room by matching transcript lines against room DESCs. |

## Key facts

- 75 rooms, 192 objects, 783 routines, 166 globals.
- Directions (defined in x1.zil, order matters): NORTH NE EAST SE SOUTH SW
  WEST NW UP DOWN IN OUT.
- Exit forms: `(DIR TO ROOM)`, `(DIR TO ROOM IF FLAG [IS OPEN] [ELSE "msg"])`,
  `(DIR PER ROUTINE)`, `(DIR SORRY "msg")`, `(DIR "msg")`.
- The game has TAME/SUGGESTIVE/LEWD modes (NAUGHTY-LEVEL) that change prose.
- The modern ZILF toolchain (`zilf` + `zapf`) *should* compile this source,
  but no from-source build has ever been verified by the user or Claude.
  Do not claim "it compiles" as established fact.
- The tracked tree is byte-pristine vs the 2019 archive (verified 2026-07:
  `git diff --stat` showed content changes only in README.md; the other
  "modified" flags are permission bits from the volume).
- ZIL comment syntax: `;` comments out the next element (`;"..."`, `;<...>`).
  Strings escape quotes with `\"`. `!\c` is a char literal. `,X` global ref,
  `.X` local ref.

## Run / build

See RUNNING.md. Short version: `python3 tools/server.py` → port 8083.
Debian setup: `sudo apt install frotz` (provides `/usr/games/dfrotz`).
Regenerate viewer data: `python3 tools/build_viewer.py`.
