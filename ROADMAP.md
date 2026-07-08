# Roadmap

The arc: turn the Infocom source archive from a set of inert folders into
an explorable, verifiable, **editable**, and eventually **translatable**
corpus. The shipped binaries are never the deliverable — they are the
*oracles*: black-box referees that certify whatever we do to the source.
The end state is the games living as maintained, modern source (their own
ZIL, and translations of it) whose fidelity to the originals is measured,
not assumed.

## Stage 0 — One-game explorer (DONE, on LGOP)

- [x] ZIL parser → world model (`tools/build_viewer.py` → `world.js`)
- [x] Browser atlas: map graph, rooms/objects/routines/globals, verb
      grammar, vocabulary, cross-linked highlighted source, search
- [x] One-process backend: static files + dfrotz sessions over a JSON API
- [x] Play tab with live room tracking; map shows current room, visited
      set, and route; zoom-on-location
- [x] Provenance verified: LGOP's story file is the official Solid Gold
      release (Release 4 / Serial 880405), pristine since the 2019 import

## Stage 0.5 — The whole catalog (DONE)

- [x] Games reorganized under `sources/<game>/`; game picker; game list
      landing page; one shared viewer, no per-game files
- [x] `game.json` as the membership contract — no auto-detection anywhere
- [x] Parser generalized: per-game `<DIRECTIONS>`, classic `<ROOM>` and
      post-1985 `<OBJECT (LOC ROOMS)>` styles, `(IN ROOMS)` location idiom
- [x] Map layout stabilized (linear spring — the quadratic force diverged
      on every dense single-cluster game); pan fixed; on-page debug panel
      that diagnosed all of the above
- [ ] Conditional GET (304) so rebuilt world.js files are picked up
      without cache fights (staged, awaiting go)
- [ ] On-page error bar for uncaught viewer exceptions (staged)

## Stage 1 — Deeper introspection

- [ ] Cross-check source-derived world models against the compiler's own
      output (`x1dat.zap`-style object/property tables, where present)
- [ ] Quetzal save-file parsing + symbol maps → named snapshots of live
      game state (globals, flags, object tree)
- [ ] Inventory tracking; "why did that happen?" — jump from a game
      response to the VERB? clause that produced it

## Stage 2 — Source-level interpreter (the glass box)

Tree-walk the parsed ZIL directly; no compiler.

- [ ] 2a. Evaluator for the routine subset (COND, FSET?, VERB?, MOVE,
      TELL, tables, RANDOM…) against a state dict
- [ ] 2b. Import real state from Quetzal snapshots
- [ ] 2c. Run the ORIGINAL parser.zil algorithm; emulate only the lexer
      and the compiler-generated vocabulary/syntax tables
- [ ] 2d. PERFORM dispatch + daemon/fuse clock → fully playable source-side

## Stage 3 — Differential verification (binaries as referees)

- [ ] Tandem sessions: identical inputs to dfrotz and the interpreter,
      diff normalized outputs per turn; divergence badge in the Play tab
- [ ] RNG parity with dfrotz's seeded generator
- [ ] Walkthrough corpora as certified regression suites; grammar-aware
      fuzzing from each game's syntax tables; coverage accounting
- [ ] Per-game oracles: each game's shipped build referees its own source

## Stage 4 — The editor

The goal state: this is an *editor* of these games, not just a viewer.

- [ ] Edit routines/rooms/objects in the browser; parse + apply to the
      interpreter live (state survives, same turn re-runnable)
- [ ] Turn-level snapshots → rewind, fix, deterministic replay
- [ ] Edits maintained as reviewable patch sets against the archive source
- [ ] Write-back to .zil files on disk (the repo remains the artifact)

## Stage 5 — Certification & archaeology

- [ ] Verify each game's source against its shipped release via the
      Stage 3 rig; divergences are either interpreter bugs (systemic) or
      recovered patch history (local, documented as diffs)
- [ ] Byte-for-byte recompilation stays a non-goal (would require
      replicating ZILCH); behavioral certification is the standard

## Stage 6 — Beyond ZIL: other engines

- [ ] Games from other engines join `sources/` under the same game.json
      contract
- [ ] Parser plugins per source language — starting with Inform 6/7,
      which has a large open-source corpus and a living toolchain
- [ ] The viewer stays engine-agnostic: rooms, objects, routines,
      grammar, vocabulary as the common model

## Stage 7 — Cross-compilation (ZIL → Inform)

Rewrite the sources; black-box the binaries.

- [ ] Mechanical translation of the declarative layer: rooms, objects,
      properties, flags, containment, grammar → Inform source
- [ ] Routine translation (ZIL forms → Inform 6 code), hardest last:
      parser interop, daemons, tables
- [ ] The original shipped z-code becomes purely an oracle: the translated
      game must pass the same walkthrough + fuzz corpus in tandem against
      it before a translation is accepted
- [ ] Payoff: the games retargeted through a modern maintained compiler
      to modern formats (Glulx, web) — old formats escaped without ever
      trusting an untestable port

## Stage 8 — Interfaces (unchanged from the original plan)

- [ ] English→game-dialect translation layer: per-room candidate
      enumeration from grammar × visible objects; small local model ranks;
      translate phrasing, never intent; spoiler-graded hints from the
      games' own hint trees
- [ ] Voice: push-to-talk in, spoken echo of the translated command,
      TTS performance of replies

## Standing principles

1. One server, one port; RUNNING.md is the source of truth.
2. `game.json` is the contract. No scanning, no guessing, no fallbacks.
3. Never guess what the source declares — extract it.
4. Shipped binaries are reference implementations; disagreement with them
   is a unit test, not a nuisance.
5. Diagnose before fixing: instrument in the product, evidence before
   edits, minimal diffs.
6. Refund fake difficulty (phrasing), preserve real difficulty (puzzles).
