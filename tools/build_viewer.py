#!/usr/bin/env python3
"""Parse a game's ZIL sources and emit world.js into its game folder —
a JSON snapshot of rooms, objects, routines, globals, grammar and
vocabulary consumed by the shared viewer/index.html.

Usage:  python3 tools/build_viewer.py [game-dir]
        (default game-dir: sources/leathergoddesses-gold)
"""

import glob
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GAME_DIR = (sys.argv[1].strip("/") if len(sys.argv) > 1
            else os.path.join("sources", "leathergoddesses-gold"))

# fallback; overridden by the game's own <DIRECTIONS ...> form when found
DIRECTIONS = ["NORTH", "NE", "EAST", "SE", "SOUTH", "SW", "WEST", "NW",
              "UP", "DOWN", "IN", "OUT"]


def game_files():
    """An explicit "zilFiles" list in game.json wins; else every *.zil
    in the game folder."""
    meta_path = os.path.join(ROOT, GAME_DIR, "game.json")
    if os.path.isfile(meta_path):
        try:
            with open(meta_path, encoding="utf-8") as f:
                files = json.load(f).get("zilFiles")
            if files:
                return files
        except ValueError:
            pass
    return sorted(os.path.basename(p)
                  for p in glob.glob(os.path.join(ROOT, GAME_DIR, "*.zil")))


# ---------------------------------------------------------------- tokenizer

class Tok:
    def __init__(self, kind, value, line):
        self.kind = kind      # 'open' '<', 'close' '>', 'lparen', 'rparen',
                              # 'string', 'atom', 'comment-marker'
        self.value = value
        self.line = line

    def __repr__(self):
        return f"Tok({self.kind},{self.value!r},{self.line})"


def tokenize(text):
    toks = []
    i, n, line = 0, len(text), 1
    while i < n:
        c = text[i]
        if c == "\n":
            line += 1
            i += 1
        elif c in " \t\r\f":
            i += 1
        elif c == '"':
            j = i + 1
            buf = []
            while j < n:
                ch = text[j]
                if ch == "\\" and j + 1 < n:
                    buf.append(text[j + 1])
                    j += 2
                elif ch == '"':
                    break
                else:
                    if ch == "\n":
                        line += 1
                    buf.append(ch)
                    j += 1
            toks.append(Tok("string", "".join(buf), line))
            i = j + 1
        elif c == "<":
            toks.append(Tok("open", "<", line))
            i += 1
        elif c == ">":
            toks.append(Tok("close", ">", line))
            i += 1
        elif c == "(":
            toks.append(Tok("lparen", "(", line))
            i += 1
        elif c == ")":
            toks.append(Tok("rparen", ")", line))
            i += 1
        elif c == ";":
            toks.append(Tok("comment-marker", ";", line))
            i += 1
        elif c == "!" and i + 1 < n and text[i + 1] == "\\":
            # character literal like !\" or !\a
            ch = text[i + 2] if i + 2 < n else ""
            toks.append(Tok("atom", "!\\" + ch, line))
            i += 3
        else:
            # atom: read until delimiter; backslash escapes the next char
            # (e.g. \" \. \, \#RANDOM in syntax.zil)
            j = i
            buf = []
            while j < n:
                ch = text[j]
                if ch == "\\" and j + 1 < n:
                    buf.append(text[j + 1])
                    j += 2
                    continue
                if ch in ' \t\r\n\f<>();"':
                    break
                buf.append(ch)
                j += 1
            toks.append(Tok("atom", "".join(buf), line))
            i = j
    return toks


# ------------------------------------------------------------------ parser

class Node:
    """kind: 'form' (<...>), 'list' ((...)), 'atom', 'string'"""

    def __init__(self, kind, value, line):
        self.kind = kind
        self.value = value    # list of Nodes, or str
        self.line = line
        self.end_line = line

    def atom(self):
        return self.value if self.kind == "atom" else None


def parse_tokens(toks):
    """Return list of top-level nodes."""
    pos = [0]

    def peek():
        return toks[pos[0]] if pos[0] < len(toks) else None

    def advance():
        t = toks[pos[0]]
        pos[0] += 1
        return t

    def parse_one():
        t = peek()
        if t is None:
            return None
        if t.kind == "comment-marker":
            advance()
            inner = parse_one()          # the commented-out element
            node = Node("comment", inner, t.line)
            if inner is not None:
                node.end_line = inner.end_line
            return node
        if t.kind == "string":
            advance()
            return Node("string", t.value, t.line)
        if t.kind == "atom":
            advance()
            return Node("atom", t.value, t.line)
        if t.kind == "open":
            advance()
            kids = []
            while True:
                nxt = peek()
                if nxt is None:
                    break
                if nxt.kind == "close":
                    endt = advance()
                    break
                kid = parse_one()
                if kid is None:
                    break
                kids.append(kid)
            node = Node("form", kids, t.line)
            node.end_line = endt.line if nxt and nxt.kind == "close" else t.line
            return node
        if t.kind == "lparen":
            advance()
            kids = []
            while True:
                nxt = peek()
                if nxt is None:
                    break
                if nxt.kind == "rparen":
                    endt = advance()
                    break
                kid = parse_one()
                if kid is None:
                    break
                kids.append(kid)
            node = Node("list", kids, t.line)
            node.end_line = endt.line if nxt and nxt.kind == "rparen" else t.line
            return node
        # stray close/rparen: skip
        advance()
        return parse_one()

    out = []
    while pos[0] < len(toks):
        node = parse_one()
        if node is not None:
            out.append(node)
    return out


# ------------------------------------------------------------- extraction

def node_repr(node):
    """Compact readable rendering of a node."""
    if node is None:
        return ""
    if node.kind == "atom":
        return node.value
    if node.kind == "string":
        return '"%s"' % node.value
    if node.kind == "comment":
        return ";" + node_repr(node.value)
    inner = " ".join(node_repr(k) for k in node.value)
    if node.kind == "form":
        return "<%s>" % inner
    return "(%s)" % inner


def real_kids(node):
    return [k for k in node.value if k.kind != "comment"]


def parse_exit(prop_kids):
    """prop_kids: nodes after the direction atom. Return exit dict."""
    ex = {"to": None, "kind": "unconditional", "condition": None,
          "else": None, "per": None, "message": None}
    atoms = [(k.kind, k.value) for k in prop_kids]
    i = 0
    while i < len(prop_kids):
        k = prop_kids[i]
        if k.kind == "string":
            ex["message"] = k.value
            if ex["kind"] == "unconditional":
                ex["kind"] = "blocked"
            i += 1
        elif k.kind == "atom":
            w = k.value.upper()
            if w == "TO" and i + 1 < len(prop_kids):
                ex["to"] = prop_kids[i + 1].value
                i += 2
            elif w == "PER" and i + 1 < len(prop_kids):
                ex["per"] = prop_kids[i + 1].value
                ex["kind"] = "routine"
                i += 2
            elif w == "SORRY" and i + 1 < len(prop_kids):
                ex["kind"] = "blocked"
                ex["message"] = prop_kids[i + 1].value
                i += 2
            elif w == "IF":
                cond = []
                i += 1
                while i < len(prop_kids):
                    kk = prop_kids[i]
                    if kk.kind == "atom" and kk.value.upper() == "ELSE":
                        i += 1
                        if i < len(prop_kids):
                            ex["else"] = node_repr(prop_kids[i])
                            i += 1
                        break
                    cond.append(node_repr(kk))
                    i += 1
                ex["condition"] = " ".join(cond)
                ex["kind"] = "conditional"
            else:
                i += 1
        else:
            i += 1
    return ex


def extract_props(node):
    """For a ROOM/OBJECT form, return (name, props dict, exits list)."""
    kids = real_kids(node)
    name = kids[0].value if kids and kids[0].kind == "atom" else "?"
    props = {}
    exits = []
    for prop in kids[1:]:
        if prop.kind != "list":
            continue
        pkids = real_kids(prop)
        if not pkids or pkids[0].kind != "atom":
            continue
        pname = pkids[0].value.upper()
        rest = pkids[1:]
        if pname == "IN" and len(rest) == 1 and rest[0].kind == "atom":
            # old-style location: (IN ROOMS) means LOC, not an exit
            props.setdefault("LOC", []).append(rest[0].value)
        elif pname in DIRECTIONS:
            ex = parse_exit(rest)
            ex["dir"] = pname
            exits.append(ex)
        else:
            vals = [k.value if k.kind in ("atom", "string") else node_repr(k)
                    for k in rest]
            props.setdefault(pname, []).extend(vals)
    return name, props, exits


def first(props, key):
    v = props.get(key)
    return v[0] if v else None


def main():
    rooms = {}
    objects = {}
    routines = {}
    globals_ = {}
    syntax = {}          # VERB -> {verb, synonyms, productions}
    word_syns = []       # <SYNONYM CANON S1 S2 ...>
    prep_syns = []       # <PREP-SYNONYM CANON S1 ...>
    buzzwords = []       # <BUZZ ...>
    voc_extra = []       # <VOC "WORD" PART>
    file_sources = {}

    files = game_files()
    if not files:
        print(f"no .zil files found in {GAME_DIR}", file=sys.stderr)
        sys.exit(1)

    parsed = {}
    for fname in files:
        path = os.path.join(ROOT, GAME_DIR, fname)
        with open(path, encoding="latin-1") as f:
            text = f.read()
        file_sources[fname] = text.split("\n")
        try:
            parsed[fname] = parse_tokens(tokenize(text))
        except Exception as e:
            print(f"parse error in {fname}: {e}", file=sys.stderr)

    # honor the game's own direction set (e.g. Zork adds LAND)
    global DIRECTIONS
    for top in parsed.values():
        for node in top:
            if node.kind != "form":
                continue
            kids = real_kids(node)
            if kids and kids[0].kind == "atom" \
                    and kids[0].value.upper() == "DIRECTIONS":
                dirs = [k.value.upper() for k in kids[1:] if k.kind == "atom"]
                if dirs:
                    DIRECTIONS = dirs

    for fname, top in parsed.items():
        for node in top:
            if node.kind != "form" or not node.value:
                continue
            kids = real_kids(node)
            if not kids or kids[0].kind != "atom":
                continue
            head = kids[0].value.upper()

            if head in ("ROOM", "OBJECT"):
                name, props, exits = extract_props(Node("form", kids[1:],
                                                        node.line))
                entry = {
                    "name": name,
                    "file": fname,
                    "line": node.line,
                    "endLine": node.end_line,
                    "desc": first(props, "DESC"),
                    "ldesc": first(props, "LDESC"),
                    "fdesc": first(props, "FDESC"),
                    "loc": first(props, "LOC"),
                    "flags": props.get("FLAGS", []),
                    "synonyms": props.get("SYNONYM", []),
                    "adjectives": props.get("ADJECTIVE", []),
                    "action": first(props, "ACTION"),
                    "descfcn": first(props, "DESCFCN"),
                    "contfcn": first(props, "CONTFCN"),
                    "globals": props.get("GLOBAL", []),
                    "pseudo": props.get("THINGS", []) + props.get("PSEUDO", []),
                    "otherProps": {k: v for k, v in props.items()
                                   if k not in ("DESC", "LDESC", "FDESC",
                                                "LOC", "FLAGS", "SYNONYM",
                                                "ADJECTIVE", "ACTION",
                                                "DESCFCN", "CONTFCN",
                                                "GLOBAL", "THINGS",
                                                "PSEUDO")},
                }
                if head == "ROOM" or entry["loc"] == "ROOMS":
                    entry["exits"] = exits
                    rooms[name] = entry
                else:
                    objects[name] = entry

            elif head == "ROUTINE" and len(kids) >= 2:
                name = kids[1].value
                src = "\n".join(file_sources[fname]
                                [node.line - 1: node.end_line])
                routines[name] = {
                    "name": name,
                    "file": fname,
                    "line": node.line,
                    "endLine": node.end_line,
                    "source": src,
                }

            elif head in ("GLOBAL", "CONSTANT") and len(kids) >= 2 \
                    and kids[1].kind == "atom":
                name = kids[1].value
                val = node_repr(kids[2]) if len(kids) > 2 else ""
                globals_[name] = {
                    "name": name,
                    "kind": head.lower(),
                    "file": fname,
                    "line": node.line,
                    "value": val,
                }

            elif head == "SYNTAX" and len(kids) >= 2:
                # <SYNTAX VERB [words/OBJECT/(constraints)]* = ACTION [PRE]>
                parts, actions = [], []
                seen_eq = False
                for k in kids[1:]:
                    if k.kind == "atom" and k.value == "=":
                        seen_eq = True
                    elif seen_eq:
                        actions.append(k.value if k.kind == "atom"
                                       else node_repr(k))
                    else:
                        parts.append(k)
                if not parts or parts[0].kind != "atom":
                    continue
                verb = parts[0].value
                pattern = " ".join(node_repr(p) for p in parts)
                particles = [p.value for p in parts[1:]
                             if p.kind == "atom" and p.value != "OBJECT"]
                entry = syntax.setdefault(verb, {"verb": verb, "synonyms": [],
                                                 "productions": []})
                entry["productions"].append({
                    "pattern": pattern,
                    "objects": sum(1 for p in parts
                                   if p.kind == "atom" and p.value == "OBJECT"),
                    "particles": particles,
                    "action": actions[0] if actions else None,
                    "preaction": actions[1] if len(actions) > 1 else None,
                    "file": fname,
                    "line": node.line,
                })

            elif head == "VERB-SYNONYM" and len(kids) >= 3:
                verb = kids[1].value
                syns = [k.value for k in kids[2:] if k.kind == "atom"]
                syntax.setdefault(verb, {"verb": verb, "synonyms": [],
                                         "productions": []}
                                  )["synonyms"].extend(syns)

            elif head == "SYNONYM" and len(kids) >= 3:
                word_syns.append([k.value for k in kids[1:]
                                  if k.kind == "atom"])

            elif head == "PREP-SYNONYM" and len(kids) >= 3:
                prep_syns.append([k.value for k in kids[1:]
                                  if k.kind == "atom"])

            elif head == "BUZZ":
                buzzwords.extend(k.value for k in kids[1:]
                                 if k.kind == "atom")

            elif head == "VOC" and len(kids) >= 2:
                word = kids[1].value
                part = kids[2].value if len(kids) > 2 else ""
                voc_extra.append([word, part])

    # containment: children of each room/object
    for name, ent in list(rooms.items()) + list(objects.items()):
        ent["contents"] = []
    for name, obj in objects.items():
        loc = obj["loc"]
        if loc in rooms:
            rooms[loc]["contents"].append(name)
        elif loc in objects:
            objects[loc]["contents"].append(name)

    # raw source snippets for rooms/objects too
    for ent in list(rooms.values()) + list(objects.values()):
        lines = file_sources[ent["file"]]
        ent["source"] = "\n".join(lines[ent["line"] - 1: ent["endLine"]])

    # reverse references: which routines mention each room/object name
    all_names = set(rooms) | set(objects)
    name_re = {n: re.compile(r"(?<![A-Z0-9?\-])" + re.escape(n) +
                             r"(?![A-Z0-9?\-])") for n in all_names}
    for ent in list(rooms.values()) + list(objects.values()):
        ent["referencedBy"] = []
    for rname, rt in routines.items():
        src = rt["source"]
        for n, rx in name_re.items():
            if rx.search(src):
                target = rooms.get(n) or objects.get(n)
                target["referencedBy"].append(rname)

    # unified vocabulary: every word the game knows, with its role(s)
    vocab = {}

    def add_role(word, kind, of=None):
        if not word:
            return
        w = word.upper()
        entry = vocab.setdefault(w, {"word": w, "roles": []})
        role = {"kind": kind, "of": of}
        if role not in entry["roles"]:
            entry["roles"].append(role)

    for verb, ent in syntax.items():
        add_role(verb, "verb")
        for s in ent["synonyms"]:
            add_role(s, "verb-synonym", verb)
        for prod in ent["productions"]:
            for p in prod["particles"]:
                add_role(p, "particle", verb)
    for group in word_syns:
        kind = "direction" if group[0] in DIRECTIONS else "word"
        add_role(group[0], kind)
        for s in group[1:]:
            add_role(s, kind + "-synonym", group[0])
    for d in DIRECTIONS:
        add_role(d, "direction")
    for group in prep_syns:
        add_role(group[0], "preposition")
        for s in group[1:]:
            add_role(s, "prep-synonym", group[0])
    for w in buzzwords:
        add_role(w, "buzzword")
    for w, part in voc_extra:
        add_role(w, "voc-" + part.lower() if part else "voc")
    for name, obj in objects.items():
        for s in obj["synonyms"]:
            add_role(s, "noun", name)
        for a in obj["adjectives"]:
            add_role(a, "adjective", name)

    world = {
        "game": "Leather Goddesses of Phobos (X1)",
        "directions": DIRECTIONS,
        "rooms": rooms,
        "objects": objects,
        "routines": routines,
        "globals": globals_,
        "syntax": syntax,
        "vocab": vocab,
        "files": files,
    }

    out_path = os.path.join(ROOT, GAME_DIR, "world.js")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("window.WORLD = ")
        json.dump(world, f, indent=1)
        f.write(";\n")

    print(f"rooms: {len(rooms)}  objects: {len(objects)}  "
          f"routines: {len(routines)}  globals: {len(globals_)}  "
          f"verbs: {len(syntax)}  words: {len(vocab)}")
    print(f"wrote {out_path}")


if __name__ == "__main__":
    main()
