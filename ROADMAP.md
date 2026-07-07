# Roadmap

The arc: turn a 1988 Infocom game from an opaque artifact into a fully
inspectable, verifiable, live-editable, English-speaking system — without
ever needing to trust or replicate the dead ZILCH compiler. The compiled
blob is only ever an *oracle*; the source plus a source-level interpreter
is the deliverable.

## Stage 0 — Explore & play (DONE)

- [x] ZIL parser → world model (`tools/build_viewer.py` → `viewer/world.js`)
- [x] Browser atlas: map graph, rooms/objects/routines/globals, cross-linked
      highlighted source, search (`viewer/index.html`)
- [x] One-process backend: static files + dfrotz sessions over a JSON API
      (`tools/server.py`, port 8083)
- [x] Play tab wired to the backend
- [x] Live room tracking: transcript room-title lines matched against room
      DESCs; location chip + Rooms tab follows the player
- [x] `tools/start.sh` (dependency checks, rebuild-if-missing, --background)
      and RUNNING.md

## Stage 1 — Deeper introspection (near-term, each item independent)

- [ ] Map tab lights up during play: current room glowing, visited trail
- [ ] Parse `x1dat.zap` and cross-check the source-derived world model
      against the compiler's actual object/flag/property tables
- [ ] Parse Quetzal save files from `saves/` + the `x1dat.zap` symbol map
      → named snapshots of the real game's globals/flags/object tree
- [ ] Inventory tracking (parse INVENTORY responses like room titles)
- [ ] "Why did that happen?" — jump from a game response to the VERB?
      clause that produced it

## Stage 2 — Source-level interpreter (the glass box)

Tree-walk the parsed ZIL directly; no compilation.

- [ ] 2a. Evaluator for the routine subset (COND, FSET?/FSET/FCLEAR, EQUAL?,
      VERB?, PRSO/PRSI, MOVE/REMOVE/IN?, TELL, SETG, tables, RANDOM…) with
      a state dict: run any room/object routine against manual state
- [ ] 2b. Import real state from Quetzal snapshots (Stage 1) so routines
      run against the live game's actual situation
- [ ] 2c. Run the ORIGINAL parser: parser.zil's algorithm (disambiguation,
      orphaning, pronouns, GWIM) is itself ZIL routines the evaluator can
      tree-walk. Only its substrate needs emulating: the READ-opcode lexer
      (tokenize input against the dictionary) and the compiler-generated
      vocabulary/syntax tables — reconstructable from syntax.zil AND
      readable from x1dat.zap (cross-check the two). Fallback if this
      stalls: reimplement from the syntax tables directly.
- [ ] 2d. PERFORM dispatch order + daemon/fuse clock (from globals.zil)
      → fully playable source-side

## Stage 3 — Differential verification (frotz as referee)

- [ ] Tandem sessions: identical inputs to frotz and the interpreter,
      diff normalized outputs per turn; divergence badge in the Play tab
- [ ] RNG parity: implement dfrotz's seeded PRNG in the interpreter
- [ ] Walkthrough corpus (InvisiClues / CASA solutions) as certified-valid
      regression suite; every agreeing turn locks in
- [ ] Grammar-aware fuzzing from syntax.zil + mutation of walkthrough lines
- [ ] Coverage accounting: which routines/branches/productions never fired
- [ ] Replay same walkthrough at TAME/SUGGESTIVE/LEWD: prose may differ,
      puzzle state must not

## Stage 4 — Live editing (the IDE)

State lives outside code, so routines hot-swap safely mid-game.

- [ ] Edit a routine in the viewer, apply, re-run the same turn in place
- [ ] Snapshot every turn → rewind N turns, apply fix, deterministically
      replay the same commands (seeded RNG)
- [ ] Edits maintained as reviewable patch sets against the 1988 source

## Stage 5 — Source certification & archaeology

- [x] Oracle identified: COMPILED/x1.z5 IS the official Solid Gold release
      (Release 4 / Serial 880405, verified via in-game VERSION; pristine
      since the 2019 historicalsource import). Optional: match its md5
      against community-cataloged checksums for 880405
- [ ] Each divergence = interpreter bug (systemic, fix interpreter) or
      source-vs-release drift (local, fix source = a recovered 1988 patch)
- [ ] Tiebreaker on ambiguity: txd/infodump disassembly of that one routine
- [ ] Result: a behaviorally *verified* source port; byte-for-byte compile
      parity explicitly a non-goal (would require replicating ZILCH)

## Stage 6 — English translation layer (the babel fish)

Grammar + vocab + live state make this constrained selection, not generation.

- [ ] Per-room candidate enumeration: grammar productions × visible objects
- [ ] `/api/suggest`: rank candidates against free-form user input (small
      local model; embeddings may suffice as a first cut)
- [ ] Visible translation (`↪ WRAP BLANKET AROUND ME`) with user veto —
      translate phrasing, NEVER intent (don't solve puzzles for the player)
- [ ] Parser-rejection recovery: explain why + nearest legal command
- [ ] Spoiler-graded hints paraphrased from hints.zil (the canonical tree)
- [ ] Synthetic paraphrase pairs from walkthroughs if fine-tuning is needed

## Stage 7 — Voice (the radio serial)

- [ ] Web Speech API in the Play tab: push-to-talk STT, half-duplex
- [ ] Spoken echo of the translated command (confirmation + teaches the
      player fluent Zork), then TTS reads the game's reply
- [ ] Disambiguation questions become literal conversation
- [ ] Eyes-free play: completes the genre's screen-reader accessibility
      lineage; LGOP's pulp-radio-serial homage arrives at its source

## Standing principles

1. One server, one port; RUNNING.md is the source of truth.
2. Never guess about the game — extract what the source declares.
3. frotz-mode stays the reference; interpreter-mode is the lab bench.
   Disagreement between them is a unit test, not a nuisance.
4. Refund fake difficulty (phrasing), preserve real difficulty (puzzles).
