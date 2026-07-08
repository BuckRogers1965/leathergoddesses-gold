window.WORLD = {
 "game": "Leather Goddesses of Phobos (X1)",
 "directions": [
  "FORE",
  "STARBOARD",
  "AFT",
  "PORT",
  "NORTH",
  "SOUTH",
  "EAST",
  "WEST",
  "UP",
  "DOWN",
  "IN",
  "OUT"
 ],
 "rooms": {
  "RM-TRENCH-BOTTOM": {
   "name": "RM-TRENCH-BOTTOM",
   "file": "alien.zil",
   "line": 17,
   "endLine": 26,
   "desc": "bottom of trench",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-WATER",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "TRENCH",
    "BOTTOM"
   ],
   "adjectives": [
    "FOOT",
    "TRENCH"
   ],
   "action": "RT-RM-TRENCH-BOTTOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-ALIEN-CHAMBER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "RM-MIDSHIP-HATCH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [
    "TH-ALIEN-SHIP"
   ],
   "source": "<ROOM RM-TRENCH-BOTTOM\n\t(LOC ROOMS)\n\t(DESC \"bottom of trench\")\n\t(FLAGS FL-WATER FL-LIGHTED)\n\t(SYNONYM TRENCH BOTTOM)\n\t(ADJECTIVE FOOT TRENCH)\n\t(IN TO RM-ALIEN-CHAMBER)\n\t(UP TO RM-MIDSHIP-HATCH)\n\t(ACTION RT-RM-TRENCH-BOTTOM)\n>",
   "referencedBy": [
    "RT-TO-TRENCH-BOTTOM"
   ]
  },
  "RM-ALIEN-CHAMBER": {
   "name": "RM-ALIEN-CHAMBER",
   "file": "alien.zil",
   "line": 114,
   "endLine": 121,
   "desc": "alien chamber",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-WATER",
    "FL-INSIDE",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "CHAMBER"
   ],
   "adjectives": [
    "ALIEN"
   ],
   "action": "RT-RM-ALIEN-CHAMBER",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [],
   "contents": [
    "TH-FUSCHIA-BUTTON",
    "CH-ALIEN"
   ],
   "source": "<ROOM RM-ALIEN-CHAMBER\n\t(LOC ROOMS)\n\t(DESC \"alien chamber\")\n\t(FLAGS FL-WATER FL-INSIDE FL-LIGHTED)\n\t(SYNONYM CHAMBER)\n\t(ADJECTIVE ALIEN)\n\t(ACTION RT-RM-ALIEN-CHAMBER)\n>",
   "referencedBy": [
    "RT-TH-PURPLE-BUTTON",
    "RT-TH-CAB-HOOKAH"
   ]
  },
  "RM-COMMAND-MODULE": {
   "name": "RM-COMMAND-MODULE",
   "file": "command.zil",
   "line": 17,
   "endLine": 26,
   "desc": "command module",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "MODULE"
   ],
   "adjectives": [
    "COMMAND"
   ],
   "action": "RT-RM-COMMAND-MODULE",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-CORRIDOR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [
    "TH-MONITORS",
    "TH-COMMAND-CHAIR",
    "CH-PLAYER",
    "CH-LINDSEY",
    "CH-CATFISH"
   ],
   "source": "<ROOM RM-COMMAND-MODULE\n\t(LOC ROOMS)\n\t(DESC \"command module\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM MODULE)\n\t(ADJECTIVE COMMAND)\n\t(AFT TO RM-CORRIDOR)\n\t(GLOBAL LG-WALL RM-CORRIDOR)\n\t(ACTION RT-RM-COMMAND-MODULE)\n>",
   "referencedBy": [
    "RT-RM-COMMAND-MODULE",
    "RT-I-CRANE-1",
    "RT-I-CRANE-4",
    "RT-I-CRANE-5"
   ]
  },
  "RM-PT-BATTERY-ROOM": {
   "name": "RM-PT-BATTERY-ROOM",
   "file": "crane.zil",
   "line": 291,
   "endLine": 301,
   "desc": "port battery room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "ROOM"
   ],
   "adjectives": [
    "PORT",
    "BATTERY"
   ],
   "action": "RT-RM-PT-BATTERY-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-LADDER-A1"
   ],
   "pseudo": [],
   "otherProps": {
    "MENU": [
     "battery room"
    ]
   },
   "exits": [
    {
     "to": "RM-LADDER-A1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [
    "TH-POWERCEL"
   ],
   "source": "<ROOM RM-PT-BATTERY-ROOM\n\t(LOC ROOMS)\n\t(DESC \"port battery room\")\n\t(MENU \"battery room\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM ROOM)\n\t(ADJECTIVE PORT BATTERY)\n\t(AFT TO RM-LADDER-A1)\n\t(GLOBAL LG-WALL RM-LADDER-A1)\n\t(ACTION RT-RM-PT-BATTERY-ROOM)\n>",
   "referencedBy": [
    "RT-I-BATTERY-LEAK"
   ]
  },
  "RM-PT-OBS-DECK": {
   "name": "RM-PT-OBS-DECK",
   "file": "crane.zil",
   "line": 407,
   "endLine": 416,
   "desc": "port observation deck",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "DECK"
   ],
   "adjectives": [
    "PORT",
    "OBSERVATION"
   ],
   "action": "RT-RM-PT-OBS-DECK",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-LADDER-A3"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-LADDER-A3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-PT-OBS-DECK\n\t(LOC ROOMS)\n\t(DESC \"port observation deck\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM DECK)\n\t(ADJECTIVE PORT OBSERVATION)\n\t(AFT TO RM-LADDER-A3)\n\t(GLOBAL LG-WALL RM-LADDER-A3)\n\t(ACTION RT-RM-PT-OBS-DECK)\n>",
   "referencedBy": [
    "RT-I-CRANE-5"
   ]
  },
  "RM-LADDER-D2": {
   "name": "RM-LADDER-D2",
   "file": "crane.zil",
   "line": 742,
   "endLine": 753,
   "desc": "ladderwell D",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "WELL",
    "LADDERWELL"
   ],
   "adjectives": [
    "LADDER",
    "LADDERWELL"
   ],
   "action": "RT-RM-LADDER-D2",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-PANTRY",
    "RM-LADDER-D3",
    "RM-LADDER-D1"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-PANTRY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-LADDER-D3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "RM-LADDER-D1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "TH-PT-BILGE-BUTTON"
   ],
   "source": "<ROOM RM-LADDER-D2\n\t(LOC ROOMS)\n\t(DESC \"ladderwell D\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM WELL LADDERWELL)\n\t(ADJECTIVE LADDER LADDERWELL)\n\t(FORE TO RM-PANTRY)\n\t(UP TO RM-LADDER-D3)\n\t(DOWN TO RM-LADDER-D1)\n\t(GLOBAL LG-WALL RM-PANTRY RM-LADDER-D3 RM-LADDER-D1)\n\t(ACTION RT-RM-LADDER-D2)\n>",
   "referencedBy": []
  },
  "RM-DIVE-GEAR-STORAGE": {
   "name": "RM-DIVE-GEAR-STORAGE",
   "file": "crane.zil",
   "line": 874,
   "endLine": 884,
   "desc": "dive gear storage",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "STORAGE"
   ],
   "adjectives": [
    "DIVE",
    "GEAR"
   ],
   "action": "RT-RM-DIVE-GEAR-STORAGE",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-DGS-DOOR",
    "LG-WALL",
    "RM-LADDER-B2"
   ],
   "pseudo": [],
   "otherProps": {
    "MENU": [
     "gear storage"
    ]
   },
   "exits": [
    {
     "to": "RM-LADDER-B2",
     "kind": "conditional",
     "condition": "LG-DGS-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [
    "TH-BUD-GEAR-LOCKER",
    "TH-BIG-LOCKER"
   ],
   "source": "<ROOM RM-DIVE-GEAR-STORAGE\n\t(LOC ROOMS)\n\t(DESC \"dive gear storage\")\n\t(MENU \"gear storage\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM STORAGE)\n\t(ADJECTIVE DIVE GEAR)\n\t(AFT TO RM-LADDER-B2 IF LG-DGS-DOOR IS OPEN)\n\t(GLOBAL LG-DGS-DOOR LG-WALL RM-LADDER-B2)\n\t(ACTION RT-RM-DIVE-GEAR-STORAGE)\n>",
   "referencedBy": [
    "RT-I-CRANE-5",
    "RT-I-CATFISH-TRAPPED",
    "RT-GN-LOCKER",
    "RT-LG-DGS-DOOR"
   ]
  },
  "RM-RECREATION-ROOM": {
   "name": "RM-RECREATION-ROOM",
   "file": "crane.zil",
   "line": 1033,
   "endLine": 1043,
   "desc": "recreation room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "ROOM"
   ],
   "adjectives": [
    "RECREATION",
    "REC"
   ],
   "action": "RT-RM-RECREATION-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-LADDER-B2"
   ],
   "pseudo": [],
   "otherProps": {
    "MENU": [
     "rec room"
    ]
   },
   "exits": [
    {
     "to": "RM-LADDER-B2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "PORT"
    }
   ],
   "contents": [
    "TH-BARBELL",
    "TH-LIFT-BENCH",
    "TH-TREADMILL",
    "TH-CYCLE"
   ],
   "source": "<ROOM RM-RECREATION-ROOM\n\t(LOC ROOMS)\n\t(DESC \"recreation room\")\n\t(MENU \"rec room\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM ROOM)\n\t(ADJECTIVE RECREATION REC)\n\t(PORT TO RM-LADDER-B2)\n\t(GLOBAL LG-WALL RM-LADDER-B2)\n\t(ACTION RT-RM-RECREATION-ROOM)\n>",
   "referencedBy": []
  },
  "RM-LADDER-B2": {
   "name": "RM-LADDER-B2",
   "file": "crane.zil",
   "line": 1181,
   "endLine": 1198,
   "desc": "ladderwell B",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "WELL",
    "LADDERWELL"
   ],
   "adjectives": [
    "LADDER",
    "LADDERWELL"
   ],
   "action": "RT-RM-LADDER-B2",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-FLOOD-DOOR",
    "LG-DGS-DOOR",
    "LG-WALL",
    "RM-DIVE-GEAR-STORAGE",
    "RM-WALDORF",
    "RM-RECREATION-ROOM",
    "RM-CORRIDOR",
    "RM-LADDER-B3",
    "RM-LADDER-B1"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-DIVE-GEAR-STORAGE",
     "kind": "conditional",
     "condition": "LG-DGS-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-WALDORF",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    },
    {
     "to": "RM-RECREATION-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "STARBOARD"
    },
    {
     "to": "RM-CORRIDOR",
     "kind": "conditional",
     "condition": "LG-FLOOD-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "PORT"
    },
    {
     "to": "RM-LADDER-B3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "RM-LADDER-B1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "TH-HYDRAULIC-HOSE"
   ],
   "source": "<ROOM RM-LADDER-B2\n\t(LOC ROOMS)\n\t(DESC \"ladderwell B\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM WELL LADDERWELL)\n\t(ADJECTIVE LADDER LADDERWELL)\n\t(FORE TO RM-DIVE-GEAR-STORAGE IF LG-DGS-DOOR IS OPEN)\n\t(AFT TO RM-WALDORF)\n\t(STARBOARD TO RM-RECREATION-ROOM)\n\t(PORT TO RM-CORRIDOR IF LG-FLOOD-DOOR IS OPEN)\n\t(UP TO RM-LADDER-B3)\n\t(DOWN TO RM-LADDER-B1)\n\t(GLOBAL\n\t\tLG-FLOOD-DOOR LG-DGS-DOOR LG-WALL RM-DIVE-GEAR-STORAGE RM-WALDORF\n\t\tRM-RECREATION-ROOM RM-CORRIDOR RM-LADDER-B3 RM-LADDER-B1\n\t)\n\t(ACTION RT-RM-LADDER-B2)\n>",
   "referencedBy": [
    "RT-I-CRANE-3",
    "RT-RM-LADDER-B2"
   ]
  },
  "RM-MIDSHIP-HATCH": {
   "name": "RM-MIDSHIP-HATCH",
   "file": "montana.zil",
   "line": 17,
   "endLine": 32,
   "desc": "midship hatch",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-LIGHTED",
    "FL-WATER"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "RT-RM-MIDSHIP-HATCH",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-MIDSHIP-HATCH",
    "LG-MONTANA",
    "LG-TROUGH",
    "RM-ATTACK-CENTER"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-TROUGH-LIP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "RM-TROUGH-LIP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "RM-MISSILE-HATCH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-MISSILE-HATCH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "RM-ATTACK-CENTER",
     "kind": "conditional",
     "condition": "LG-MIDSHIP-HATCH IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "RM-ATTACK-CENTER",
     "kind": "conditional",
     "condition": "LG-MIDSHIP-HATCH IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "RT-TO-TRENCH-BOTTOM",
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-MIDSHIP-HATCH\n\t(LOC ROOMS)\n\t(DESC \"midship hatch\")\n\t(FLAGS FL-LIGHTED FL-WATER)\n;\t(SYNONYM )\n;\t(ADJECTIVE )\n\t(UP TO RM-TROUGH-LIP)\n\t(EAST TO RM-TROUGH-LIP)\n\t(FORE TO RM-MISSILE-HATCH)\n\t(NORTH TO RM-MISSILE-HATCH)\n\t(WEST TO RM-ATTACK-CENTER IF LG-MIDSHIP-HATCH IS OPEN)\n\t(IN TO RM-ATTACK-CENTER IF LG-MIDSHIP-HATCH IS OPEN)\n\t(DOWN PER RT-TO-TRENCH-BOTTOM)\n\t(GLOBAL LG-MIDSHIP-HATCH LG-MONTANA LG-TROUGH RM-ATTACK-CENTER)\n\t(ACTION RT-RM-MIDSHIP-HATCH)\n>",
   "referencedBy": [
    "RT-RM-ATTACK-CENTER"
   ]
  },
  "RM-MISSILE-HATCH": {
   "name": "RM-MISSILE-HATCH",
   "file": "montana.zil",
   "line": 129,
   "endLine": 139,
   "desc": "missile hatch",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-LIGHTED",
    "FL-WATER"
   ],
   "synonyms": [
    "HATCH"
   ],
   "adjectives": [
    "MISSILE"
   ],
   "action": "RT-RM-MISSILE-HATCH",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-MONTANA",
    "LG-TROUGH",
    "RM-MISSILE-ROOM"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-BOW",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-MIDSHIP-HATCH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [
    "TH-MISSILE"
   ],
   "source": "<ROOM RM-MISSILE-HATCH\n\t(LOC ROOMS)\n\t(DESC \"missile hatch\")\n\t(FLAGS FL-LIGHTED FL-WATER)\n\t(SYNONYM HATCH)\n\t(ADJECTIVE MISSILE)\n\t(FORE TO RM-BOW)\n\t(AFT TO RM-MIDSHIP-HATCH)\n\t(GLOBAL ;LG-MISSILE-HATCH LG-MONTANA LG-TROUGH RM-MISSILE-ROOM)\n\t(ACTION RT-RM-MISSILE-HATCH)\n>",
   "referencedBy": [
    "RT-RM-CAB-THREE"
   ]
  },
  "RM-BOW": {
   "name": "RM-BOW",
   "file": "montana.zil",
   "line": 583,
   "endLine": 593,
   "desc": "bow",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-LIGHTED",
    "FL-WATER"
   ],
   "synonyms": [
    "BOW"
   ],
   "adjectives": [],
   "action": "RT-RM-BOW",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-MONTANA",
    "LG-TROUGH",
    "RM-MISSILE-HATCH"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-MISSILE-HATCH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    },
    {
     "to": "RM-TORPEDO-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "RM-TORPEDO-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-BOW\n\t(LOC ROOMS)\n\t(DESC \"bow\")\n\t(FLAGS FL-LIGHTED FL-WATER)\n\t(SYNONYM BOW)\n\t(AFT TO RM-MISSILE-HATCH)\n\t(WEST TO RM-TORPEDO-ROOM)\n\t(IN TO RM-TORPEDO-ROOM)\n\t(GLOBAL LG-MONTANA LG-TROUGH RM-MISSILE-HATCH)\n\t(ACTION RT-RM-BOW)\n>",
   "referencedBy": []
  },
  "RM-TORPEDO-ROOM": {
   "name": "RM-TORPEDO-ROOM",
   "file": "montana.zil",
   "line": 624,
   "endLine": 635,
   "desc": "torpedo room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED",
    "FL-WATER"
   ],
   "synonyms": [
    "ROOM"
   ],
   "adjectives": [
    "TORPEDO"
   ],
   "action": "RT-RM-TORPEDO-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "LG-MONTANA",
    "RM-BOW",
    "RM-ENGINE-ROOM"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-BOW",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "RM-BOW",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "RM-ENGINE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-TORPEDO-ROOM\n\t(LOC ROOMS)\n\t(DESC \"torpedo room\")\n\t(FLAGS FL-INDOORS FL-LIGHTED FL-WATER)\n\t(SYNONYM ROOM)\n\t(ADJECTIVE TORPEDO)\n\t(EAST TO RM-BOW)\n\t(OUT TO RM-BOW)\n\t(AFT TO RM-ENGINE-ROOM)\n\t(GLOBAL LG-WALL LG-MONTANA RM-BOW RM-ENGINE-ROOM)\n\t(ACTION RT-RM-TORPEDO-ROOM)\n>",
   "referencedBy": []
  },
  "RM-ENGINE-ROOM": {
   "name": "RM-ENGINE-ROOM",
   "file": "montana.zil",
   "line": 665,
   "endLine": 675,
   "desc": "engine room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED",
    "FL-WATER"
   ],
   "synonyms": [
    "ROOM"
   ],
   "adjectives": [
    "ENGINE"
   ],
   "action": "RT-RM-ENGINE-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "LG-MONTANA",
    "RM-TORPEDO-ROOM",
    "RM-MISSILE-ROOM"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-TORPEDO-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-MISSILE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-ENGINE-ROOM\n\t(LOC ROOMS)\n\t(DESC \"engine room\")\n\t(FLAGS FL-INDOORS FL-LIGHTED FL-WATER)\n\t(SYNONYM ROOM)\n\t(ADJECTIVE ENGINE)\n\t(FORE TO RM-TORPEDO-ROOM)\n\t(AFT TO RM-MISSILE-ROOM)\n\t(GLOBAL LG-WALL LG-MONTANA RM-TORPEDO-ROOM RM-MISSILE-ROOM)\n\t(ACTION RT-RM-ENGINE-ROOM)\n>",
   "referencedBy": []
  },
  "RM-MISSILE-ROOM": {
   "name": "RM-MISSILE-ROOM",
   "file": "montana.zil",
   "line": 705,
   "endLine": 714,
   "desc": "missile launching room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED",
    "FL-WATER"
   ],
   "synonyms": [
    "ROOM"
   ],
   "adjectives": [
    "MISSILE",
    "LAUNCHING"
   ],
   "action": "RT-RM-MISSILE-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "LG-MONTANA",
    "RM-ENGINE-ROOM"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-ENGINE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    }
   ],
   "contents": [
    "TH-MISSILE-ACCESS-KEY"
   ],
   "source": "<ROOM RM-MISSILE-ROOM\n\t(LOC ROOMS)\n\t(DESC \"missile launching room\")\n\t(FLAGS FL-INDOORS FL-LIGHTED FL-WATER)\n\t(SYNONYM ROOM)\n\t(ADJECTIVE MISSILE LAUNCHING)\n\t(FORE TO RM-ENGINE-ROOM)\n\t(GLOBAL LG-WALL LG-MONTANA RM-ENGINE-ROOM)\n\t(ACTION RT-RM-MISSILE-ROOM)\n>",
   "referencedBy": []
  },
  "RM-ATTACK-CENTER": {
   "name": "RM-ATTACK-CENTER",
   "file": "montana.zil",
   "line": 756,
   "endLine": 767,
   "desc": "attack center",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED",
    "FL-WATER"
   ],
   "synonyms": [
    "CENTER"
   ],
   "adjectives": [
    "ATTACK"
   ],
   "action": "RT-RM-ATTACK-CENTER",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-MIDSHIP-HATCH",
    "LG-WALL",
    "LG-MONTANA",
    "RM-SONAR-ROOM"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-MIDSHIP-HATCH",
     "kind": "conditional",
     "condition": "LG-MIDSHIP-HATCH IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "RM-MIDSHIP-HATCH",
     "kind": "conditional",
     "condition": "LG-MIDSHIP-HATCH IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "RM-SONAR-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-ATTACK-CENTER\n\t(LOC ROOMS)\n\t(DESC \"attack center\")\n\t(FLAGS FL-INDOORS FL-LIGHTED FL-WATER)\n\t(SYNONYM CENTER)\n\t(ADJECTIVE ATTACK)\n\t(EAST TO RM-MIDSHIP-HATCH IF LG-MIDSHIP-HATCH IS OPEN)\n\t(OUT TO RM-MIDSHIP-HATCH IF LG-MIDSHIP-HATCH IS OPEN)\n\t(AFT TO RM-SONAR-ROOM)\n\t(GLOBAL LG-MIDSHIP-HATCH LG-WALL LG-MONTANA RM-SONAR-ROOM)\n\t(ACTION RT-RM-ATTACK-CENTER)\n>",
   "referencedBy": []
  },
  "RM-SONAR-ROOM": {
   "name": "RM-SONAR-ROOM",
   "file": "montana.zil",
   "line": 813,
   "endLine": 823,
   "desc": "sonar room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED",
    "FL-WATER"
   ],
   "synonyms": [
    "SHACK"
   ],
   "adjectives": [
    "SONAR"
   ],
   "action": "RT-RM-SONAR-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "LG-MONTANA",
    "RM-ATTACK-CENTER",
    "RM-COMM-ROOM"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-ATTACK-CENTER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-COMM-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-SONAR-ROOM\n\t(LOC ROOMS)\n\t(DESC \"sonar room\")\n\t(FLAGS FL-INDOORS FL-LIGHTED FL-WATER)\n\t(SYNONYM SHACK)\n\t(ADJECTIVE SONAR)\n\t(FORE TO RM-ATTACK-CENTER)\n\t(AFT TO RM-COMM-ROOM)\n\t(GLOBAL LG-WALL LG-MONTANA RM-ATTACK-CENTER RM-COMM-ROOM)\n\t(ACTION RT-RM-SONAR-ROOM)\n>",
   "referencedBy": []
  },
  "RM-COMM-ROOM": {
   "name": "RM-COMM-ROOM",
   "file": "montana.zil",
   "line": 858,
   "endLine": 868,
   "desc": "comm room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED",
    "FL-WATER"
   ],
   "synonyms": [
    "ROOM"
   ],
   "adjectives": [
    "COMM",
    "COMMUNICATIONS"
   ],
   "action": "RT-RM-COMM-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-BUCKLED-DOOR",
    "LG-WALL",
    "LG-MONTANA",
    "RM-SONAR-ROOM",
    "RM-SUB-CORRIDOR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-SONAR-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "RT-THRU-BUCKLED-DOOR",
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-COMM-ROOM\n\t(LOC ROOMS)\n\t(DESC \"comm room\")\n\t(FLAGS FL-INDOORS FL-LIGHTED FL-WATER)\n\t(SYNONYM ROOM)\n\t(ADJECTIVE COMM COMMUNICATIONS)\n\t(FORE TO RM-SONAR-ROOM)\n\t(AFT PER RT-THRU-BUCKLED-DOOR)\n\t(GLOBAL LG-BUCKLED-DOOR LG-WALL LG-MONTANA RM-SONAR-ROOM RM-SUB-CORRIDOR)\n\t(ACTION RT-RM-COMM-ROOM)\n>",
   "referencedBy": [
    "RT-I-DETONATOR"
   ]
  },
  "RM-SUB-CORRIDOR": {
   "name": "RM-SUB-CORRIDOR",
   "file": "montana.zil",
   "line": 957,
   "endLine": 966,
   "desc": "corridor",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED",
    "FL-WATER"
   ],
   "synonyms": [
    "CORRIDOR"
   ],
   "adjectives": [],
   "action": "RT-RM-SUB-CORRIDOR",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "LG-MONTANA",
    "RM-COMM-ROOM",
    "RM-CAPTAINS-ROOM"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-COMM-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-CAPTAINS-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-SUB-CORRIDOR\n\t(LOC ROOMS)\n\t(DESC \"corridor\")\n\t(FLAGS FL-INDOORS FL-LIGHTED FL-WATER)\n\t(SYNONYM CORRIDOR)\n\t(FORE TO RM-COMM-ROOM)\n\t(DOWN TO RM-CAPTAINS-ROOM)\n\t(GLOBAL LG-WALL LG-MONTANA RM-COMM-ROOM RM-CAPTAINS-ROOM)\n\t(ACTION RT-RM-SUB-CORRIDOR)\n>",
   "referencedBy": [
    "RT-THRU-BUCKLED-DOOR"
   ]
  },
  "RM-CAPTAINS-ROOM": {
   "name": "RM-CAPTAINS-ROOM",
   "file": "montana.zil",
   "line": 1005,
   "endLine": 1014,
   "desc": "captain's quarters",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED",
    "FL-WATER"
   ],
   "synonyms": [
    "QUARTERS",
    "ROOM",
    "STATEROOM"
   ],
   "adjectives": [
    "CAPTAIN",
    "STATE"
   ],
   "action": "RT-RM-CAPTAINS-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "LG-MONTANA",
    "RM-SUB-CORRIDOR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-SUB-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [
    "TH-PHOTOGRAPH",
    "TH-SAFE"
   ],
   "source": "<ROOM RM-CAPTAINS-ROOM\n\t(LOC ROOMS)\n\t(DESC \"captain's quarters\")\n\t(FLAGS FL-INDOORS FL-LIGHTED FL-WATER)\n\t(SYNONYM QUARTERS ROOM STATEROOM)\n\t(ADJECTIVE CAPTAIN STATE)\n\t(UP TO RM-SUB-CORRIDOR)\n\t(GLOBAL LG-WALL LG-MONTANA RM-SUB-CORRIDOR)\n\t(ACTION RT-RM-CAPTAINS-ROOM)\n>",
   "referencedBy": [
    "RT-TH-PHOTOGRAPH"
   ]
  },
  "RM-UNDER-MOONPOOL": {
   "name": "RM-UNDER-MOONPOOL",
   "file": "ocean.zil",
   "line": 17,
   "endLine": 30,
   "desc": "under moonpool",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-LIGHTED",
    "FL-SURFACE",
    "FL-WATER"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "RT-RM-UNDER-MOONPOOL",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TH-MOON-POOL",
    "LG-DEEPCORE",
    "RM-SUB-BAY"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-SUB-BAY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "RM-SUB-BAY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "RM-OCEAN-NORTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "RM-OCEAN-WEST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "RM-OCEAN-SOUTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-UNDER-MOONPOOL\n\t(LOC ROOMS)\n\t(DESC \"under moonpool\")\n\t(FLAGS FL-LIGHTED FL-SURFACE FL-WATER)\n;\t(SYNONYM MOONPOOL)\n;\t(ADJECTIVE UNDER)\n\t(UP TO RM-SUB-BAY)\n\t(IN TO RM-SUB-BAY)\n\t(NORTH TO RM-OCEAN-NORTH)\n\t(WEST TO RM-OCEAN-WEST)\n\t(SOUTH TO RM-OCEAN-SOUTH)\n\t(GLOBAL TH-MOON-POOL LG-DEEPCORE RM-SUB-BAY)\n\t(ACTION RT-RM-UNDER-MOONPOOL)\n>",
   "referencedBy": [
    "RT-TH-MOON-POOL",
    "RT-TH-RED-BUTTON"
   ]
  },
  "RM-OCEAN-NORTH": {
   "name": "RM-OCEAN-NORTH",
   "file": "ocean.zil",
   "line": 57,
   "endLine": 66,
   "desc": "ocean floor",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-LIGHTED",
    "FL-SURFACE",
    "FL-WATER"
   ],
   "synonyms": [
    "FLOOR",
    "OCEAN"
   ],
   "adjectives": [
    "OCEAN"
   ],
   "action": "RT-RM-OCEAN-NORTH",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-DEEPCORE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-UNDER-MOONPOOL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-OCEAN-NORTH\n\t(LOC ROOMS)\n\t(DESC \"ocean floor\")\n\t(FLAGS FL-LIGHTED FL-SURFACE FL-WATER)\n\t(SYNONYM FLOOR OCEAN)\n\t(ADJECTIVE OCEAN)\n\t(SOUTH TO RM-UNDER-MOONPOOL)\n\t(GLOBAL LG-DEEPCORE)\n\t(ACTION RT-RM-OCEAN-NORTH)\n>",
   "referencedBy": []
  },
  "RM-OCEAN-SOUTH": {
   "name": "RM-OCEAN-SOUTH",
   "file": "ocean.zil",
   "line": 93,
   "endLine": 102,
   "desc": "ocean floor",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-LIGHTED",
    "FL-SURFACE",
    "FL-WATER"
   ],
   "synonyms": [
    "FLOOR",
    "OCEAN"
   ],
   "adjectives": [
    "OCEAN"
   ],
   "action": "RT-RM-OCEAN-SOUTH",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-DEEPCORE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-UNDER-MOONPOOL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-OCEAN-SOUTH\n\t(LOC ROOMS)\n\t(DESC \"ocean floor\")\n\t(FLAGS FL-LIGHTED FL-SURFACE FL-WATER)\n\t(SYNONYM FLOOR OCEAN)\n\t(ADJECTIVE OCEAN)\n\t(NORTH TO RM-UNDER-MOONPOOL)\n\t(GLOBAL LG-DEEPCORE)\n\t(ACTION RT-RM-OCEAN-SOUTH)\n>",
   "referencedBy": []
  },
  "RM-OCEAN-WEST": {
   "name": "RM-OCEAN-WEST",
   "file": "ocean.zil",
   "line": 129,
   "endLine": 139,
   "desc": "ocean floor",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-LIGHTED",
    "FL-SURFACE",
    "FL-WATER"
   ],
   "synonyms": [
    "FLOOR",
    "OCEAN"
   ],
   "adjectives": [
    "OCEAN"
   ],
   "action": "RT-RM-OCEAN-WEST",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-DEEPCORE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-UNDER-MOONPOOL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "RT-SWIM-TO-FROM-TRENCH",
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-OCEAN-WEST\n\t(LOC ROOMS)\n\t(DESC \"ocean floor\")\n\t(FLAGS FL-LIGHTED FL-SURFACE FL-WATER)\n\t(SYNONYM FLOOR OCEAN)\n\t(ADJECTIVE OCEAN)\n\t(EAST TO RM-UNDER-MOONPOOL)\n\t(WEST PER RT-SWIM-TO-FROM-TRENCH)\n\t(GLOBAL LG-DEEPCORE)\n\t(ACTION RT-RM-OCEAN-WEST)\n>",
   "referencedBy": [
    "RT-SWIM-TO-FROM-TRENCH",
    "RT-RM-TROUGH-LIP"
   ]
  },
  "RM-TROUGH-LIP": {
   "name": "RM-TROUGH-LIP",
   "file": "ocean.zil",
   "line": 200,
   "endLine": 211,
   "desc": "trough lip",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-LIGHTED",
    "FL-WATER"
   ],
   "synonyms": [
    "LIP"
   ],
   "adjectives": [
    "TROUGH"
   ],
   "action": "RT-RM-TROUGH-LIP",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-TROUGH",
    "LG-MONTANA",
    "LG-DEEPCORE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-MIDSHIP-HATCH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "RM-MIDSHIP-HATCH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "RT-SWIM-TO-FROM-TRENCH",
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-TROUGH-LIP\n\t(LOC ROOMS)\n\t(DESC \"trough lip\")\n\t(FLAGS FL-LIGHTED FL-WATER)\n\t(SYNONYM LIP)\n\t(ADJECTIVE TROUGH)\n\t(DOWN TO RM-MIDSHIP-HATCH)\n\t(WEST TO RM-MIDSHIP-HATCH)\n\t(EAST PER RT-SWIM-TO-FROM-TRENCH)\n\t(GLOBAL LG-TROUGH LG-MONTANA LG-DEEPCORE)\n\t(ACTION RT-RM-TROUGH-LIP)\n>",
   "referencedBy": [
    "RT-SWIM-TO-FROM-TRENCH"
   ]
  },
  "RM-TRI-MIX-STORAGE": {
   "name": "RM-TRI-MIX-STORAGE",
   "file": "stopper.zil",
   "line": 21,
   "endLine": 31,
   "desc": "tri-mix storage",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "STORAGE"
   ],
   "adjectives": [
    "TRI",
    "MIX",
    "TRI-MIX"
   ],
   "action": "RT-RM-TRI-MIX-STORAGE",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-COMPRESSOR-ROOM",
    "RM-LADDER-D1"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-COMPRESSOR-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-LADDER-D1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [
    "TH-NITROGEN-TANK",
    "TH-NIT-STOPPER",
    "TH-OXYGEN-TANK",
    "TH-HELIUM-TANK"
   ],
   "source": "<ROOM RM-TRI-MIX-STORAGE\n\t(LOC ROOMS)\n\t(DESC \"tri-mix storage\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM STORAGE)\n\t(ADJECTIVE TRI MIX TRI-MIX)\n\t(FORE TO RM-COMPRESSOR-ROOM)\n\t(AFT TO RM-LADDER-D1)\n\t(GLOBAL LG-WALL RM-COMPRESSOR-ROOM RM-LADDER-D1)\n\t(ACTION RT-RM-TRI-MIX-STORAGE)\n>",
   "referencedBy": []
  },
  "RM-TOOL-ROOM": {
   "name": "RM-TOOL-ROOM",
   "file": "stopper.zil",
   "line": 517,
   "endLine": 527,
   "desc": "tool room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "ROOM"
   ],
   "adjectives": [
    "TOOL"
   ],
   "action": "RT-RM-TOOL-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-DRILL-ROOM",
    "RM-TOOL-PUSHER-OFFICE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-DRILL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "STARBOARD"
    },
    {
     "to": "RM-TOOL-PUSHER-OFFICE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "PORT"
    }
   ],
   "contents": [
    "TH-BIN"
   ],
   "source": "<ROOM RM-TOOL-ROOM\n\t(LOC ROOMS)\n\t(DESC \"tool room\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM ROOM)\n\t(ADJECTIVE TOOL)\n\t(STARBOARD TO RM-DRILL-ROOM)\n\t(PORT TO RM-TOOL-PUSHER-OFFICE)\n\t(GLOBAL LG-WALL RM-DRILL-ROOM RM-TOOL-PUSHER-OFFICE)\n\t(ACTION RT-RM-TOOL-ROOM)\n>",
   "referencedBy": []
  },
  "RM-SUB-BAY": {
   "name": "RM-SUB-BAY",
   "file": "sub-bay.zil",
   "line": 17,
   "endLine": 29,
   "desc": "sub bay",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "BAY"
   ],
   "adjectives": [
    "SUB"
   ],
   "action": "RT-RM-SUB-BAY",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-UNDER-MOONPOOL",
    "RM-CORRIDOR",
    "RM-GAS-MIX-ROOM"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-UNDER-MOONPOOL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "RM-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-GAS-MIX-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [
    "TH-DIVE-LOCKER",
    "TH-MOON-POOL",
    "TH-WATER-HOSE",
    "TH-OXYGEN-CYLINDER",
    "TH-HOOK-1"
   ],
   "source": "<ROOM RM-SUB-BAY\n\t(LOC ROOMS)\n\t(DESC \"sub bay\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM BAY)\n\t(ADJECTIVE SUB)\n\t(DOWN TO RM-UNDER-MOONPOOL)\n\t(FORE TO RM-CORRIDOR)\n\t(AFT TO RM-GAS-MIX-ROOM)\n;\t(PORT TO RM-SHOWER-ROOM)\n\t(GLOBAL LG-WALL RM-UNDER-MOONPOOL RM-CORRIDOR RM-GAS-MIX-ROOM ;RM-SHOWER-ROOM)\n\t(ACTION RT-RM-SUB-BAY)\n>",
   "referencedBy": [
    "RT-TH-FUSCHIA-BUTTON",
    "RT-I-CRANE-5",
    "RT-I-OUT-OF-AIR-2",
    "RT-RM-SUB-BAY",
    "RT-TH-MOON-POOL",
    "RT-I-FIRE-1",
    "RT-CH-COFFEY",
    "RT-RM-COMPRESSION-CHAMBER",
    "RT-I-LEAVE-1",
    "RT-I-LEAVE-2",
    "RT-I-UFO-MESSAGE"
   ]
  },
  "RM-COMPRESSION-CHAMBER": {
   "name": "RM-COMPRESSION-CHAMBER",
   "file": "sub-bay.zil",
   "line": 902,
   "endLine": 914,
   "desc": "compression chamber",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "CHAMBER"
   ],
   "adjectives": [
    "COMPRESSION"
   ],
   "action": "RT-RM-COMPRESSION-CHAMBER",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-GAS-MIX-ROOM",
    "LG-CHAMBER-DOOR",
    "LG-CHAMBER-HATCH"
   ],
   "pseudo": [],
   "otherProps": {
    "MENU": [
     "chamber"
    ],
    "ADJACENT": [
     "<TABLE (BYTE PURE) RM-GAS-MIX-ROOM T>"
    ]
   },
   "exits": [
    {
     "to": "RM-GAS-MIX-ROOM",
     "kind": "conditional",
     "condition": "LG-CHAMBER-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-CAB-THREE",
     "kind": "conditional",
     "condition": "LG-CHAMBER-HATCH IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [
    "TH-WINDOW-BENCH"
   ],
   "source": "<ROOM RM-COMPRESSION-CHAMBER\n\t(LOC ROOMS)\n\t(DESC \"compression chamber\")\n\t(MENU \"chamber\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM CHAMBER)\n\t(ADJECTIVE COMPRESSION)\n\t(FORE TO RM-GAS-MIX-ROOM IF LG-CHAMBER-DOOR IS OPEN)\n\t(UP TO RM-CAB-THREE IF LG-CHAMBER-HATCH IS OPEN)\n\t(GLOBAL LG-WALL RM-GAS-MIX-ROOM LG-CHAMBER-DOOR LG-CHAMBER-HATCH)\n\t(ADJACENT <TABLE (BYTE PURE) RM-GAS-MIX-ROOM T>)\n\t(ACTION RT-RM-COMPRESSION-CHAMBER)\n>",
   "referencedBy": [
    "RT-CH-COFFEY",
    "RT-RM-COMPRESSION-CHAMBER",
    "RT-LG-CHAMBER-HATCH",
    "RT-I-LEAVE-3",
    "RT-I-LEAVE-4",
    "RT-OUT-CAB"
   ]
  },
  "RM-CAB-THREE": {
   "name": "RM-CAB-THREE",
   "file": "sub-bay.zil",
   "line": 1179,
   "endLine": 1188,
   "desc": "Cab three",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-CONTAINER",
    "FL-LIGHTED",
    "FL-NO-ARTICLE",
    "FL-OPEN",
    "FL-SEARCH",
    "FL-VEHICLE"
   ],
   "synonyms": [
    "CAB",
    "THREE"
   ],
   "adjectives": [
    "CAB"
   ],
   "action": "RT-RM-CAB-THREE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "RT-OUT-CAB",
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "RT-OUT-CAB",
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "TH-CAB-HOOKAH"
   ],
   "source": "<ROOM RM-CAB-THREE\n\t(LOC ROOMS)\n\t(DESC \"Cab three\")\n\t(FLAGS FL-CONTAINER FL-LIGHTED FL-NO-ARTICLE FL-OPEN FL-SEARCH FL-VEHICLE)\n\t(SYNONYM CAB THREE)\n\t(ADJECTIVE CAB)\n\t(DOWN PER RT-OUT-CAB)\n\t(OUT PER RT-OUT-CAB)\n\t(ACTION RT-RM-CAB-THREE)\n>",
   "referencedBy": [
    "RT-LG-CHAMBER-HATCH",
    "RT-I-LEAVE-2",
    "RT-I-LEAVE-4",
    "RT-I-RETURN-1",
    "RT-RM-CAB-THREE",
    "RT-OUT-CAB",
    "RT-I-CAB-FIXED",
    "RT-TH-CAB-HOOKAH"
   ]
  },
  "RM-GAS-MIX-ROOM": {
   "name": "RM-GAS-MIX-ROOM",
   "file": "sub-bay.zil",
   "line": 1324,
   "endLine": 1335,
   "desc": "gas mix room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "ROOM"
   ],
   "adjectives": [
    "GAS",
    "MIX"
   ],
   "action": "RT-RM-GAS-MIX-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-SUB-BAY",
    "RM-COMPRESSION-CHAMBER",
    "LG-CHAMBER-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "ADJACENT": [
     "<TABLE (BYTE PURE) RM-COMPRESSION-CHAMBER T>"
    ]
   },
   "exits": [
    {
     "to": "RM-SUB-BAY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-COMPRESSION-CHAMBER",
     "kind": "conditional",
     "condition": "LG-CHAMBER-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-GAS-MIX-ROOM\n\t(LOC ROOMS)\n\t(DESC \"gas mix room\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM ROOM)\n\t(ADJECTIVE GAS MIX)\n\t(FORE TO RM-SUB-BAY)\n\t(AFT TO RM-COMPRESSION-CHAMBER IF LG-CHAMBER-DOOR IS OPEN)\n\t(GLOBAL LG-WALL RM-SUB-BAY RM-COMPRESSION-CHAMBER LG-CHAMBER-DOOR)\n\t(ADJACENT <TABLE (BYTE PURE) RM-COMPRESSION-CHAMBER T>)\n\t(ACTION RT-RM-GAS-MIX-ROOM)\n>",
   "referencedBy": [
    "V-$NITROGEN",
    "RT-CH-COFFEY",
    "RT-I-LEAVE-2",
    "RT-I-LEAVE-3",
    "RT-I-LEAVE-4"
   ]
  },
  "RM-CORRIDOR": {
   "name": "RM-CORRIDOR",
   "file": "sub-bay.zil",
   "line": 1416,
   "endLine": 1430,
   "desc": "corridor",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "CORRIDOR"
   ],
   "adjectives": [],
   "action": "RT-RM-CORRIDOR",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-FLOOD-DOOR",
    "LG-WALL",
    "RM-COMMAND-MODULE",
    "RM-SUB-BAY",
    "RM-LADDER-A2",
    "RM-LADDER-B2"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-COMMAND-MODULE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-SUB-BAY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    },
    {
     "to": "RM-LADDER-B2",
     "kind": "conditional",
     "condition": "LG-FLOOD-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "STARBOARD"
    },
    {
     "to": "RM-LADDER-A2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "PORT"
    }
   ],
   "contents": [
    "CH-COFFEY",
    "CH-ONE-NIGHT",
    "CH-HIPPY",
    "TH-PANEL"
   ],
   "source": "<ROOM RM-CORRIDOR\n\t(LOC ROOMS)\n\t(DESC \"corridor\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM CORRIDOR)\n\t(FORE TO RM-COMMAND-MODULE)\n\t(AFT TO RM-SUB-BAY)\n\t(STARBOARD TO RM-LADDER-B2 IF LG-FLOOD-DOOR IS OPEN)\n\t(PORT TO RM-LADDER-A2)\n\t(GLOBAL\n\t\tLG-FLOOD-DOOR LG-WALL RM-COMMAND-MODULE RM-SUB-BAY RM-LADDER-A2\n\t\tRM-LADDER-B2\n\t)\n\t(ACTION RT-RM-CORRIDOR)\n>",
   "referencedBy": [
    "RT-I-CRANE-1",
    "RT-I-LEAVE-1",
    "RT-RM-CORRIDOR"
   ]
  },
  "RM-LADDER-A2": {
   "name": "RM-LADDER-A2",
   "file": "sub-bay.zil",
   "line": 1480,
   "endLine": 1498,
   "desc": "ladderwell A",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "WELL",
    "LADDERWELL"
   ],
   "adjectives": [
    "LADDER",
    "PORT",
    "LADDERWELL"
   ],
   "action": "RT-RM-LADDER-A2",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-LOUNGE",
    "RM-MESS-HALL",
    "RM-CORRIDOR",
    "RM-ELECTRONICS-SHOP",
    "RM-LADDER-A1",
    "RM-LADDER-A3"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-LOUNGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-MESS-HALL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    },
    {
     "to": "RM-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "STARBOARD"
    },
    {
     "to": "RM-ELECTRONICS-SHOP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "PORT"
    },
    {
     "to": "RM-LADDER-A3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "RM-LADDER-A1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-LADDER-A2\n\t(LOC ROOMS)\n\t(DESC \"ladderwell A\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n;\"Duane - Can we have the letter 'a' as a synonym?\"\n\t(SYNONYM WELL LADDERWELL)\n\t(ADJECTIVE LADDER PORT LADDERWELL)\n\t(FORE TO RM-LOUNGE)\n\t(AFT TO RM-MESS-HALL)\n\t(STARBOARD TO RM-CORRIDOR)\n\t(PORT TO RM-ELECTRONICS-SHOP)\n\t(UP TO RM-LADDER-A3)\n\t(DOWN TO RM-LADDER-A1)\n\t(GLOBAL\n\t\tLG-WALL RM-LOUNGE RM-MESS-HALL RM-CORRIDOR RM-ELECTRONICS-SHOP\n\t\tRM-LADDER-A1 RM-LADDER-A3\n\t)\n\t(ACTION RT-RM-LADDER-A2)\n>",
   "referencedBy": []
  },
  "RM-LOUNGE": {
   "name": "RM-LOUNGE",
   "file": "sub-bay.zil",
   "line": 1529,
   "endLine": 1537,
   "desc": "lounge",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "LOUNGE"
   ],
   "adjectives": [],
   "action": "RT-RM-LOUNGE",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-LADDER-A2"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-LADDER-A2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-LOUNGE\n\t(LOC ROOMS)\n\t(DESC \"lounge\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM LOUNGE)\n\t(AFT TO RM-LADDER-A2)\n\t(GLOBAL LG-WALL RM-LADDER-A2)\n\t(ACTION RT-RM-LOUNGE)\n>",
   "referencedBy": []
  },
  "RM-INFIRMARY": {
   "name": "RM-INFIRMARY",
   "file": "sub-bay.zil",
   "line": 1577,
   "endLine": 1585,
   "desc": "infirmary",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "INFIRMARY"
   ],
   "adjectives": [],
   "action": "RT-RM-INFIRMARY",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-LADDER-B3"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-LADDER-B3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "PORT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-INFIRMARY\n\t(LOC ROOMS)\n\t(DESC \"infirmary\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM INFIRMARY)\n\t(PORT TO RM-LADDER-B3)\n\t(GLOBAL LG-WALL RM-LADDER-B3)\n\t(ACTION RT-RM-INFIRMARY)\n>",
   "referencedBy": []
  },
  "RM-MESS-HALL": {
   "name": "RM-MESS-HALL",
   "file": "sub-bay.zil",
   "line": 1613,
   "endLine": 1623,
   "desc": "mess hall",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "HALL"
   ],
   "adjectives": [
    "MESS"
   ],
   "action": "RT-RM-MESS-HALL",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-LADDER-A2",
    "RM-GALLEY"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-LADDER-A2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-GALLEY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-MESS-HALL\n\t(LOC ROOMS)\n\t(DESC \"mess hall\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM HALL)\n\t(ADJECTIVE MESS)\n\t(FORE TO RM-LADDER-A2)\n\t(AFT TO RM-GALLEY)\n\t(GLOBAL LG-WALL RM-LADDER-A2 RM-GALLEY)\n\t(ACTION RT-RM-MESS-HALL)\n>",
   "referencedBy": [
    "RT-RM-SUB-BAY",
    "RT-RM-MESS-HALL"
   ]
  },
  "RM-GALLEY": {
   "name": "RM-GALLEY",
   "file": "sub-bay.zil",
   "line": 1669,
   "endLine": 1678,
   "desc": "Stu's galley",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "GALLEY"
   ],
   "adjectives": [],
   "action": "RT-RM-GALLEY",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-MESS-HALL",
    "RM-PANTRY"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-MESS-HALL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-PANTRY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-GALLEY\n\t(LOC ROOMS)\n\t(DESC \"Stu's galley\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM GALLEY)\n\t(FORE TO RM-MESS-HALL)\n\t(AFT TO RM-PANTRY)\n\t(GLOBAL LG-WALL RM-MESS-HALL RM-PANTRY)\n\t(ACTION RT-RM-GALLEY)\n>",
   "referencedBy": []
  },
  "RM-PANTRY": {
   "name": "RM-PANTRY",
   "file": "sub-bay.zil",
   "line": 1700,
   "endLine": 1709,
   "desc": "pantry",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "PANTRY"
   ],
   "adjectives": [],
   "action": "RT-RM-PANTRY",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-GALLEY",
    "RM-LADDER-D2"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-GALLEY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-LADDER-D2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [
    "TH-HOOK-2"
   ],
   "source": "<ROOM RM-PANTRY\n\t(LOC ROOMS)\n\t(DESC \"pantry\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM PANTRY)\n\t(FORE TO RM-GALLEY)\n\t(AFT TO RM-LADDER-D2)\n\t(GLOBAL LG-WALL RM-GALLEY RM-LADDER-D2)\n\t(ACTION RT-RM-PANTRY)\n>",
   "referencedBy": []
  },
  "RM-WALDORF": {
   "name": "RM-WALDORF",
   "file": "sub-bay.zil",
   "line": 1769,
   "endLine": 1778,
   "desc": "The Waldorf",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED",
    "FL-NO-ARTICLE"
   ],
   "synonyms": [
    "WALDORF"
   ],
   "adjectives": [],
   "action": "RT-RM-WALDORF",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-LADDER-B2",
    "RM-PERSONAL-STORAGE-1"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-LADDER-B2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-PERSONAL-STORAGE-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-WALDORF\n\t(LOC ROOMS)\n\t(DESC \"The Waldorf\")\n\t(FLAGS FL-INDOORS FL-LIGHTED FL-NO-ARTICLE)\n\t(SYNONYM WALDORF)\n\t(FORE TO RM-LADDER-B2)\n\t(AFT TO RM-PERSONAL-STORAGE-1)\n\t(GLOBAL LG-WALL RM-LADDER-B2 RM-PERSONAL-STORAGE-1)\n\t(ACTION RT-RM-WALDORF)\n>",
   "referencedBy": []
  },
  "RM-PERSONAL-STORAGE-1": {
   "name": "RM-PERSONAL-STORAGE-1",
   "file": "sub-bay.zil",
   "line": 1812,
   "endLine": 1822,
   "desc": "personal storage",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "STORAGE"
   ],
   "adjectives": [
    "PERSONAL"
   ],
   "action": "RT-RM-PERSONAL-STORAGE-1",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-WALDORF",
    "RM-ZOOTOWN"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-WALDORF",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-ZOOTOWN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-PERSONAL-STORAGE-1\n\t(LOC ROOMS)\n\t(DESC \"personal storage\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM STORAGE)\n\t(ADJECTIVE PERSONAL)\n\t(FORE TO RM-WALDORF)\n\t(AFT TO RM-ZOOTOWN)\n\t(GLOBAL LG-WALL RM-WALDORF RM-ZOOTOWN)\n\t(ACTION RT-RM-PERSONAL-STORAGE-1)\n>",
   "referencedBy": []
  },
  "RM-ZOOTOWN": {
   "name": "RM-ZOOTOWN",
   "file": "sub-bay.zil",
   "line": 1844,
   "endLine": 1853,
   "desc": "Zootown",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "ZOOTOWN"
   ],
   "adjectives": [],
   "action": "RT-RM-ZOOTOWN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-PERSONAL-STORAGE-1",
    "RM-LADDER-C2"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-PERSONAL-STORAGE-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-LADDER-C2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-ZOOTOWN\n\t(LOC ROOMS)\n\t(DESC \"Zootown\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM ZOOTOWN)\n\t(FORE TO RM-PERSONAL-STORAGE-1)\n\t(AFT TO RM-LADDER-C2)\n\t(GLOBAL LG-WALL RM-PERSONAL-STORAGE-1 RM-LADDER-C2)\n\t(ACTION RT-RM-ZOOTOWN)\n>",
   "referencedBy": []
  },
  "RM-LADDER-C2": {
   "name": "RM-LADDER-C2",
   "file": "sub-bay.zil",
   "line": 1885,
   "endLine": 1896,
   "desc": "ladderwell C",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "WELL",
    "LADDERWELL"
   ],
   "adjectives": [
    "LADDER",
    "LADDERWELL"
   ],
   "action": "RT-RM-LADDER-C2",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-ZOOTOWN",
    "RM-LADDER-C3",
    "RM-LADDER-C1"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-ZOOTOWN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-LADDER-C3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "RM-LADDER-C1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "TH-SB-BILGE-BUTTON"
   ],
   "source": "<ROOM RM-LADDER-C2\n\t(LOC ROOMS)\n\t(DESC \"ladderwell C\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM WELL LADDERWELL)\n\t(ADJECTIVE LADDER LADDERWELL)\n\t(FORE TO RM-ZOOTOWN)\n\t(UP TO RM-LADDER-C3)\n\t(DOWN TO RM-LADDER-C1)\n\t(GLOBAL LG-WALL RM-ZOOTOWN RM-LADDER-C3 RM-LADDER-C1)\n\t(ACTION RT-RM-LADDER-C2)\n>",
   "referencedBy": []
  },
  "RM-LADDER-A1": {
   "name": "RM-LADDER-A1",
   "file": "sub-bay.zil",
   "line": 1942,
   "endLine": 1954,
   "desc": "ladder well A",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "WELL",
    "LADDERWELL"
   ],
   "adjectives": [
    "LADDER",
    "LADDERWELL"
   ],
   "action": "RT-RM-LADDER-A1",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-PT-BATTERY-ROOM",
    "RM-PT-LIFE-SUPPORT",
    "RM-LAUNDRY",
    "RM-LADDER-A2"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-PT-BATTERY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-PT-LIFE-SUPPORT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    },
    {
     "to": "RM-LAUNDRY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "PORT"
    },
    {
     "to": "RM-LADDER-A2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-LADDER-A1\n\t(LOC ROOMS)\n\t(DESC \"ladder well A\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM WELL LADDERWELL)\n\t(ADJECTIVE LADDER LADDERWELL)\n\t(FORE TO RM-PT-BATTERY-ROOM)\n\t(AFT TO RM-PT-LIFE-SUPPORT)\n\t(PORT TO RM-LAUNDRY)\n\t(UP TO RM-LADDER-A2)\n\t(GLOBAL LG-WALL RM-PT-BATTERY-ROOM RM-PT-LIFE-SUPPORT RM-LAUNDRY RM-LADDER-A2)\n\t(ACTION RT-RM-LADDER-A1)\n>",
   "referencedBy": []
  },
  "RM-LAUNDRY": {
   "name": "RM-LAUNDRY",
   "file": "sub-bay.zil",
   "line": 1985,
   "endLine": 1993,
   "desc": "laundry",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "LAUNDRY"
   ],
   "adjectives": [],
   "action": "RT-RM-LAUNDRY",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-LADDER-A1"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-LADDER-A1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "STARBOARD"
    }
   ],
   "contents": [
    "TH-DRYER"
   ],
   "source": "<ROOM RM-LAUNDRY\n\t(LOC ROOMS)\n\t(DESC \"laundry\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM LAUNDRY)\n\t(STARBOARD TO RM-LADDER-A1)\n\t(GLOBAL LG-WALL RM-LADDER-A1)\n\t(ACTION RT-RM-LAUNDRY)\n>",
   "referencedBy": [
    "RT-TH-DRYER"
   ]
  },
  "RM-PT-LIFE-SUPPORT": {
   "name": "RM-PT-LIFE-SUPPORT",
   "file": "sub-bay.zil",
   "line": 2023,
   "endLine": 2034,
   "desc": "port life support",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "SUPPORT"
   ],
   "adjectives": [
    "PORT",
    "LIFE"
   ],
   "action": "RT-RM-PT-LIFE-SUPPORT",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-LADDER-A1",
    "RM-COMPRESSOR-ROOM"
   ],
   "pseudo": [],
   "otherProps": {
    "MENU": [
     "life support"
    ]
   },
   "exits": [
    {
     "to": "RM-LADDER-A1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-COMPRESSOR-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-PT-LIFE-SUPPORT\n\t(LOC ROOMS)\n\t(DESC \"port life support\")\n\t(MENU \"life support\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM SUPPORT)\n\t(ADJECTIVE PORT LIFE)\n\t(FORE TO RM-LADDER-A1)\n\t(AFT TO RM-COMPRESSOR-ROOM)\n\t(GLOBAL LG-WALL RM-LADDER-A1 RM-COMPRESSOR-ROOM)\n\t(ACTION RT-RM-PT-LIFE-SUPPORT)\n>",
   "referencedBy": []
  },
  "RM-COMPRESSOR-ROOM": {
   "name": "RM-COMPRESSOR-ROOM",
   "file": "sub-bay.zil",
   "line": 2067,
   "endLine": 2077,
   "desc": "compressor room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "ROOM"
   ],
   "adjectives": [
    "COMPRESSOR"
   ],
   "action": "RT-RM-COMPRESSOR-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-PT-LIFE-SUPPORT",
    "RM-TRI-MIX-STORAGE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-PT-LIFE-SUPPORT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-TRI-MIX-STORAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [
    "TH-COMPRESSOR"
   ],
   "source": "<ROOM RM-COMPRESSOR-ROOM\n\t(LOC ROOMS)\n\t(DESC \"compressor room\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM ROOM)\n\t(ADJECTIVE COMPRESSOR)\n\t(FORE TO RM-PT-LIFE-SUPPORT)\n\t(AFT TO RM-TRI-MIX-STORAGE)\n\t(GLOBAL LG-WALL RM-PT-LIFE-SUPPORT RM-TRI-MIX-STORAGE)\n\t(ACTION RT-RM-COMPRESSOR-ROOM)\n>",
   "referencedBy": []
  },
  "RM-LADDER-D1": {
   "name": "RM-LADDER-D1",
   "file": "sub-bay.zil",
   "line": 2141,
   "endLine": 2152,
   "desc": "ladderwell D",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "WELL",
    "LADDERWELL"
   ],
   "adjectives": [
    "LADDER",
    "LADDERWELL"
   ],
   "action": "RT-RM-LADDER-D1",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-TRI-MIX-STORAGE",
    "RM-TOOL-PUSHER-OFFICE",
    "RM-LADDER-D2"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-TRI-MIX-STORAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-TOOL-PUSHER-OFFICE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    },
    {
     "to": "RM-LADDER-D2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-LADDER-D1\n\t(LOC ROOMS)\n\t(DESC \"ladderwell D\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM WELL LADDERWELL)\n\t(ADJECTIVE LADDER LADDERWELL)\n\t(FORE TO RM-TRI-MIX-STORAGE)\n\t(AFT TO RM-TOOL-PUSHER-OFFICE)\n\t(UP TO RM-LADDER-D2)\n\t(GLOBAL LG-WALL RM-TRI-MIX-STORAGE RM-TOOL-PUSHER-OFFICE RM-LADDER-D2)\n\t(ACTION RT-RM-LADDER-D1)\n>",
   "referencedBy": []
  },
  "RM-TOOL-PUSHER-OFFICE": {
   "name": "RM-TOOL-PUSHER-OFFICE",
   "file": "sub-bay.zil",
   "line": 2182,
   "endLine": 2192,
   "desc": "tool pusher's office",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "OFFICE"
   ],
   "adjectives": [
    "TOOL",
    "PUSHER"
   ],
   "action": "RT-RM-TOOL-PUSHER-OFFICE",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-LADDER-D1",
    "RM-TOOL-ROOM"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-LADDER-D1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-TOOL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "STARBOARD"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-TOOL-PUSHER-OFFICE\n\t(LOC ROOMS)\n\t(DESC \"tool pusher's office\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM OFFICE)\n\t(ADJECTIVE TOOL PUSHER)\n\t(FORE TO RM-LADDER-D1)\n\t(STARBOARD TO RM-TOOL-ROOM)\n\t(GLOBAL LG-WALL RM-LADDER-D1 RM-TOOL-ROOM)\n\t(ACTION RT-RM-TOOL-PUSHER-OFFICE)\n>",
   "referencedBy": []
  },
  "RM-DRILL-ROOM": {
   "name": "RM-DRILL-ROOM",
   "file": "sub-bay.zil",
   "line": 2223,
   "endLine": 2232,
   "desc": "drill room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "ROOM"
   ],
   "adjectives": [
    "DRILL"
   ],
   "action": "RT-RM-DRILL-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-TOOL-ROOM"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-TOOL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "PORT"
    }
   ],
   "contents": [
    "TH-PLASTIQUE",
    "TH-DETONATOR"
   ],
   "source": "<ROOM RM-DRILL-ROOM\n\t(LOC ROOMS)\n\t(DESC \"drill room\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM ROOM)\n\t(ADJECTIVE DRILL)\n\t(PORT TO RM-TOOL-ROOM)\n\t(GLOBAL LG-WALL RM-TOOL-ROOM)\n\t(ACTION RT-RM-DRILL-ROOM)\n>",
   "referencedBy": []
  },
  "RM-LADDER-B1": {
   "name": "RM-LADDER-B1",
   "file": "sub-bay.zil",
   "line": 2266,
   "endLine": 2278,
   "desc": "ladderwell B",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "WELL",
    "LADDERWELL"
   ],
   "adjectives": [
    "LADDER",
    "LADDERWELL"
   ],
   "action": "RT-RM-LADDER-B1",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-SB-BATTERY-ROOM",
    "RM-SB-LIFE-SUPPORT",
    "RM-SB-HEAD",
    "RM-LADDER-B2"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-SB-BATTERY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-SB-LIFE-SUPPORT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    },
    {
     "to": "RM-SB-HEAD",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "STARBOARD"
    },
    {
     "to": "RM-LADDER-B2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-LADDER-B1\n\t(LOC ROOMS)\n\t(DESC \"ladderwell B\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM WELL LADDERWELL)\n\t(ADJECTIVE LADDER LADDERWELL)\n\t(FORE TO RM-SB-BATTERY-ROOM)\n\t(AFT TO RM-SB-LIFE-SUPPORT)\n\t(STARBOARD TO RM-SB-HEAD)\n\t(UP TO RM-LADDER-B2)\n\t(GLOBAL LG-WALL RM-SB-BATTERY-ROOM RM-SB-LIFE-SUPPORT RM-SB-HEAD RM-LADDER-B2)\n\t(ACTION RT-RM-LADDER-B1)\n>",
   "referencedBy": []
  },
  "RM-SB-BATTERY-ROOM": {
   "name": "RM-SB-BATTERY-ROOM",
   "file": "sub-bay.zil",
   "line": 2309,
   "endLine": 2318,
   "desc": "starboard battery room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "ROOM"
   ],
   "adjectives": [
    "STARBOARD",
    "BATTERY"
   ],
   "action": "RT-RM-SB-BATTERY-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-LADDER-B1"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-LADDER-B1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-SB-BATTERY-ROOM\n\t(LOC ROOMS)\n\t(DESC \"starboard battery room\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM ROOM)\n\t(ADJECTIVE STARBOARD BATTERY)\n\t(AFT TO RM-LADDER-B1)\n\t(GLOBAL LG-WALL RM-LADDER-B1)\n\t(ACTION RT-RM-SB-BATTERY-ROOM)\n>",
   "referencedBy": []
  },
  "RM-SB-HEAD": {
   "name": "RM-SB-HEAD",
   "file": "sub-bay.zil",
   "line": 2342,
   "endLine": 2351,
   "desc": "starboard head",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "HEAD"
   ],
   "adjectives": [
    "STARBOARD"
   ],
   "action": "RT-RM-SB-HEAD",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-LADDER-B1"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-LADDER-B1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "PORT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-SB-HEAD\n\t(LOC ROOMS)\n\t(DESC \"starboard head\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM HEAD)\n\t(ADJECTIVE STARBOARD)\n\t(PORT TO RM-LADDER-B1)\n\t(GLOBAL LG-WALL RM-LADDER-B1)\n\t(ACTION RT-RM-SB-HEAD)\n>",
   "referencedBy": []
  },
  "RM-SB-LIFE-SUPPORT": {
   "name": "RM-SB-LIFE-SUPPORT",
   "file": "sub-bay.zil",
   "line": 2381,
   "endLine": 2391,
   "desc": "starboard life support",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "SUPPORT"
   ],
   "adjectives": [
    "STARBOARD",
    "LIFE"
   ],
   "action": "RT-RM-SB-LIFE-SUPPORT",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-LADDER-B1",
    "RM-PUMP-ROOM"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-LADDER-B1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-PUMP-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-SB-LIFE-SUPPORT\n\t(LOC ROOMS)\n\t(DESC \"starboard life support\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM SUPPORT)\n\t(ADJECTIVE STARBOARD LIFE)\n\t(FORE TO RM-LADDER-B1)\n\t(AFT TO RM-PUMP-ROOM)\n\t(GLOBAL LG-WALL RM-LADDER-B1 RM-PUMP-ROOM)\n\t(ACTION RT-RM-SB-LIFE-SUPPORT)\n>",
   "referencedBy": []
  },
  "RM-PUMP-ROOM": {
   "name": "RM-PUMP-ROOM",
   "file": "sub-bay.zil",
   "line": 2423,
   "endLine": 2433,
   "desc": "pump room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "ROOM"
   ],
   "adjectives": [
    "PUMP"
   ],
   "action": "RT-RM-PUMP-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-SB-LIFE-SUPPORT",
    "RM-FRESH-WATER-STORAGE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-SB-LIFE-SUPPORT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-FRESH-WATER-STORAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-PUMP-ROOM\n\t(LOC ROOMS)\n\t(DESC \"pump room\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM ROOM)\n\t(ADJECTIVE PUMP)\n\t(FORE TO RM-SB-LIFE-SUPPORT)\n\t(AFT TO RM-FRESH-WATER-STORAGE)\n\t(GLOBAL LG-WALL RM-SB-LIFE-SUPPORT RM-FRESH-WATER-STORAGE)\n\t(ACTION RT-RM-PUMP-ROOM)\n>",
   "referencedBy": []
  },
  "RM-FRESH-WATER-STORAGE": {
   "name": "RM-FRESH-WATER-STORAGE",
   "file": "sub-bay.zil",
   "line": 2463,
   "endLine": 2473,
   "desc": "fresh water storage",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "STORAGE"
   ],
   "adjectives": [
    "FRESH",
    "WATER"
   ],
   "action": "RT-RM-FRESH-WATER-STORAGE",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-PUMP-ROOM",
    "RM-LADDER-C1"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-PUMP-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-LADDER-C1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-FRESH-WATER-STORAGE\n\t(LOC ROOMS)\n\t(DESC \"fresh water storage\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM STORAGE)\n\t(ADJECTIVE FRESH WATER)\n\t(FORE TO RM-PUMP-ROOM)\n\t(AFT TO RM-LADDER-C1)\n\t(GLOBAL LG-WALL RM-PUMP-ROOM RM-LADDER-C1)\n\t(ACTION RT-RM-FRESH-WATER-STORAGE)\n>",
   "referencedBy": [
    "RT-I-CRANE-5"
   ]
  },
  "RM-LADDER-C1": {
   "name": "RM-LADDER-C1",
   "file": "sub-bay.zil",
   "line": 2503,
   "endLine": 2513,
   "desc": "ladderwell C",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "WELL",
    "LADDERWELL"
   ],
   "adjectives": [
    "LADDER",
    "LADDERWELL"
   ],
   "action": "RT-RM-LADDER-C1",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-FRESH-WATER-STORAGE",
    "RM-LADDER-C2"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-FRESH-WATER-STORAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-LADDER-C2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-LADDER-C1\n\t(LOC ROOMS)\n\t(DESC \"ladderwell C\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM WELL LADDERWELL)\n\t(ADJECTIVE LADDER LADDERWELL)\n\t(FORE TO RM-FRESH-WATER-STORAGE)\n\t(UP TO RM-LADDER-C2)\n\t(GLOBAL LG-WALL RM-FRESH-WATER-STORAGE RM-LADDER-C2)\n\t(ACTION RT-RM-LADDER-C1)\n>",
   "referencedBy": []
  },
  "RM-LADDER-A3": {
   "name": "RM-LADDER-A3",
   "file": "sub-bay.zil",
   "line": 2543,
   "endLine": 2555,
   "desc": "ladderwell A",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "WELL",
    "LADDERWELL"
   ],
   "adjectives": [
    "LADDER",
    "LADDERWELL"
   ],
   "action": "RT-RM-LADDER-A3",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-PT-OBS-DECK",
    "RM-MOTEL-QUICK",
    "RM-PT-HEAD",
    "RM-LADDER-A2"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-PT-OBS-DECK",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-MOTEL-QUICK",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    },
    {
     "to": "RM-PT-HEAD",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "PORT"
    },
    {
     "to": "RM-LADDER-A2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-LADDER-A3\n\t(LOC ROOMS)\n\t(DESC \"ladderwell A\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM WELL LADDERWELL)\n\t(ADJECTIVE LADDER LADDERWELL)\n\t(FORE TO RM-PT-OBS-DECK)\n\t(AFT TO RM-MOTEL-QUICK)\n\t(PORT TO RM-PT-HEAD)\n\t(DOWN TO RM-LADDER-A2)\n\t(GLOBAL LG-WALL RM-PT-OBS-DECK RM-MOTEL-QUICK RM-PT-HEAD RM-LADDER-A2)\n\t(ACTION RT-RM-LADDER-A3)\n>",
   "referencedBy": []
  },
  "RM-PT-HEAD": {
   "name": "RM-PT-HEAD",
   "file": "sub-bay.zil",
   "line": 2586,
   "endLine": 2595,
   "desc": "port head",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "HEAD"
   ],
   "adjectives": [
    "PORT"
   ],
   "action": "RT-RM-PT-HEAD",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-LADDER-A3"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-LADDER-A3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "STARBOARD"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-PT-HEAD\n\t(LOC ROOMS)\n\t(DESC \"port head\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM HEAD)\n\t(ADJECTIVE PORT)\n\t(STARBOARD TO RM-LADDER-A3)\n\t(GLOBAL LG-WALL RM-LADDER-A3)\n\t(ACTION RT-RM-PT-HEAD)\n>",
   "referencedBy": []
  },
  "RM-MOTEL-QUICK": {
   "name": "RM-MOTEL-QUICK",
   "file": "sub-bay.zil",
   "line": 2625,
   "endLine": 2635,
   "desc": "motel Quick",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "QUICK"
   ],
   "adjectives": [
    "MOTEL"
   ],
   "action": "RT-RM-MOTEL-QUICK",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-LADDER-A3",
    "RM-PERSONAL-STORAGE-2"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-LADDER-A3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-PERSONAL-STORAGE-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-MOTEL-QUICK\n\t(LOC ROOMS)\n\t(DESC \"motel Quick\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM QUICK)\n\t(ADJECTIVE MOTEL)\n\t(FORE TO RM-LADDER-A3)\n\t(AFT TO RM-PERSONAL-STORAGE-2)\n\t(GLOBAL LG-WALL RM-LADDER-A3 RM-PERSONAL-STORAGE-2)\n\t(ACTION RT-RM-MOTEL-QUICK)\n>",
   "referencedBy": []
  },
  "RM-PERSONAL-STORAGE-2": {
   "name": "RM-PERSONAL-STORAGE-2",
   "file": "sub-bay.zil",
   "line": 2665,
   "endLine": 2675,
   "desc": "personal storage",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "STORAGE"
   ],
   "adjectives": [
    "PERSONAL"
   ],
   "action": "RT-RM-PERSONAL-STORAGE-2",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-MOTEL-QUICK",
    "RM-SWAMP"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-MOTEL-QUICK",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-SWAMP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [
    "TH-CATFISH-LOCKER"
   ],
   "source": "<ROOM RM-PERSONAL-STORAGE-2\n\t(LOC ROOMS)\n\t(DESC \"personal storage\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM STORAGE)\n\t(ADJECTIVE PERSONAL)\n\t(FORE TO RM-MOTEL-QUICK)\n\t(AFT TO RM-SWAMP)\n\t(GLOBAL LG-WALL RM-MOTEL-QUICK RM-SWAMP)\n\t(ACTION RT-RM-PERSONAL-STORAGE-2)\n>",
   "referencedBy": []
  },
  "RM-SWAMP": {
   "name": "RM-SWAMP",
   "file": "sub-bay.zil",
   "line": 2697,
   "endLine": 2706,
   "desc": "the Swamp",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "SWAMP"
   ],
   "adjectives": [],
   "action": "RT-RM-SWAMP",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-PERSONAL-STORAGE-2",
    "RM-LADDER-D3"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-PERSONAL-STORAGE-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-LADDER-D3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-SWAMP\n\t(LOC ROOMS)\n\t(DESC \"the Swamp\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM SWAMP)\n\t(FORE TO RM-PERSONAL-STORAGE-2)\n\t(AFT TO RM-LADDER-D3)\n\t(GLOBAL LG-WALL RM-PERSONAL-STORAGE-2 RM-LADDER-D3)\n\t(ACTION RT-RM-SWAMP)\n>",
   "referencedBy": []
  },
  "RM-LADDER-D3": {
   "name": "RM-LADDER-D3",
   "file": "sub-bay.zil",
   "line": 2737,
   "endLine": 2747,
   "desc": "ladderwell D",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "WELL",
    "LADDERWELL"
   ],
   "adjectives": [
    "LADDERWELL",
    "LADDER"
   ],
   "action": "RT-RM-LADDER-D3",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-SWAMP",
    "RM-LADDER-D2"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-SWAMP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-LADDER-D2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-LADDER-D3\n\t(LOC ROOMS)\n\t(DESC \"ladderwell D\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM WELL LADDERWELL)\n\t(ADJECTIVE LADDERWELL LADDER)\n\t(FORE TO RM-SWAMP)\n\t(DOWN TO RM-LADDER-D2)\n\t(GLOBAL LG-WALL RM-SWAMP RM-LADDER-D2)\n\t(ACTION RT-RM-LADDER-D3)\n>",
   "referencedBy": []
  },
  "RM-LADDER-B3": {
   "name": "RM-LADDER-B3",
   "file": "sub-bay.zil",
   "line": 2777,
   "endLine": 2789,
   "desc": "ladderwell B",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "WELL",
    "LADDERWELL"
   ],
   "adjectives": [
    "LADDER",
    "LADDERWELL"
   ],
   "action": "RT-RM-LADDER-B3",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-SB-OBS-DECK",
    "RM-COMPUTER-CENTER",
    "RM-INFIRMARY",
    "RM-LADDER-B2"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-SB-OBS-DECK",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-COMPUTER-CENTER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    },
    {
     "to": "RM-INFIRMARY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "STARBOARD"
    },
    {
     "to": "RM-LADDER-B2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-LADDER-B3\n\t(LOC ROOMS)\n\t(DESC \"ladderwell B\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM WELL LADDERWELL)\n\t(ADJECTIVE LADDER LADDERWELL)\n\t(FORE TO RM-SB-OBS-DECK)\n\t(AFT TO RM-COMPUTER-CENTER)\n\t(STARBOARD TO RM-INFIRMARY)\n\t(DOWN TO RM-LADDER-B2)\n\t(GLOBAL LG-WALL RM-SB-OBS-DECK RM-COMPUTER-CENTER RM-INFIRMARY RM-LADDER-B2)\n\t(ACTION RT-RM-LADDER-B3)\n>",
   "referencedBy": []
  },
  "RM-SB-OBS-DECK": {
   "name": "RM-SB-OBS-DECK",
   "file": "sub-bay.zil",
   "line": 2820,
   "endLine": 2829,
   "desc": "starboard observation deck",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "DECK"
   ],
   "adjectives": [
    "STARBOARD",
    "OBSERVATION"
   ],
   "action": "RT-RM-SB-OBS-DECK",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-LADDER-B3"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-LADDER-B3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-SB-OBS-DECK\n\t(LOC ROOMS)\n\t(DESC \"starboard observation deck\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM DECK)\n\t(ADJECTIVE STARBOARD OBSERVATION)\n\t(AFT TO RM-LADDER-B3)\n\t(GLOBAL LG-WALL RM-LADDER-B3)\n\t(ACTION RT-RM-SB-OBS-DECK)\n>",
   "referencedBy": []
  },
  "RM-COMPUTER-CENTER": {
   "name": "RM-COMPUTER-CENTER",
   "file": "sub-bay.zil",
   "line": 2860,
   "endLine": 2870,
   "desc": "computer center",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "CENTER"
   ],
   "adjectives": [
    "COMPUTER"
   ],
   "action": "RT-RM-COMPUTER-CENTER",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-LADDER-B3",
    "RM-LAB"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-LADDER-B3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-LAB",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-COMPUTER-CENTER\n\t(LOC ROOMS)\n\t(DESC \"computer center\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM CENTER)\n\t(ADJECTIVE COMPUTER)\n\t(FORE TO RM-LADDER-B3)\n\t(AFT TO RM-LAB)\n\t(GLOBAL LG-WALL RM-LADDER-B3 RM-LAB)\n\t(ACTION RT-RM-COMPUTER-CENTER)\n>",
   "referencedBy": []
  },
  "RM-ELECTRONICS-SHOP": {
   "name": "RM-ELECTRONICS-SHOP",
   "file": "sub-bay.zil",
   "line": 2892,
   "endLine": 2901,
   "desc": "electronics shop",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "SHOP"
   ],
   "adjectives": [
    "ELECTRONIC"
   ],
   "action": "RT-RM-ELECTRONICS-SHOP",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-LADDER-A2"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-LADDER-A2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "STARBOARD"
    }
   ],
   "contents": [
    "TH-ELEC-SHOP-DRAWER"
   ],
   "source": "<ROOM RM-ELECTRONICS-SHOP\n\t(LOC ROOMS)\n\t(DESC \"electronics shop\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM SHOP)\n\t(ADJECTIVE ELECTRONIC)\n\t(STARBOARD TO RM-LADDER-A2)\n\t(GLOBAL LG-WALL RM-LADDER-A2)\n\t(ACTION RT-RM-ELECTRONICS-SHOP)\n>",
   "referencedBy": []
  },
  "RM-LAB": {
   "name": "RM-LAB",
   "file": "sub-bay.zil",
   "line": 2947,
   "endLine": 2956,
   "desc": "lab",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "LAB",
    "LABORATORY"
   ],
   "adjectives": [],
   "action": "RT-RM-LAB",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-COMPUTER-CENTER",
    "RM-TAPE-LIBRARY"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-COMPUTER-CENTER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-TAPE-LIBRARY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-LAB\n\t(LOC ROOMS)\n\t(DESC \"lab\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM LAB LABORATORY)\n\t(FORE TO RM-COMPUTER-CENTER)\n\t(AFT TO RM-TAPE-LIBRARY)\n\t(GLOBAL LG-WALL RM-COMPUTER-CENTER RM-TAPE-LIBRARY)\n\t(ACTION RT-RM-LAB)\n>",
   "referencedBy": []
  },
  "RM-TAPE-LIBRARY": {
   "name": "RM-TAPE-LIBRARY",
   "file": "sub-bay.zil",
   "line": 2978,
   "endLine": 2988,
   "desc": "tape library",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "LIBRARY"
   ],
   "adjectives": [
    "TAPE"
   ],
   "action": "RT-RM-TAPE-LIBRARY",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-LAB",
    "RM-LADDER-C3"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-LAB",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-LADDER-C3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "AFT"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-TAPE-LIBRARY\n\t(LOC ROOMS)\n\t(DESC \"tape library\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM LIBRARY)\n\t(ADJECTIVE TAPE)\n\t(FORE TO RM-LAB)\n\t(AFT TO RM-LADDER-C3)\n\t(GLOBAL LG-WALL RM-LAB RM-LADDER-C3)\n\t(ACTION RT-RM-TAPE-LIBRARY)\n>",
   "referencedBy": []
  },
  "RM-LADDER-C3": {
   "name": "RM-LADDER-C3",
   "file": "sub-bay.zil",
   "line": 3019,
   "endLine": 3029,
   "desc": "ladderwell C",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FL-INDOORS",
    "FL-LIGHTED"
   ],
   "synonyms": [
    "WELL",
    "LADDERWELL"
   ],
   "adjectives": [
    "LADDER",
    "LADDERWELL"
   ],
   "action": "RT-RM-LADDER-C3",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LG-WALL",
    "RM-TAPE-LIBRARY",
    "RM-LADDER-C2"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RM-TAPE-LIBRARY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "FORE"
    },
    {
     "to": "RM-LADDER-C2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM RM-LADDER-C3\n\t(LOC ROOMS)\n\t(DESC \"ladderwell C\")\n\t(FLAGS FL-INDOORS FL-LIGHTED)\n\t(SYNONYM WELL LADDERWELL)\n\t(ADJECTIVE LADDER LADDERWELL)\n\t(FORE TO RM-TAPE-LIBRARY)\n\t(DOWN TO RM-LADDER-C2)\n\t(GLOBAL LG-WALL RM-TAPE-LIBRARY RM-LADDER-C2)\n\t(ACTION RT-RM-LADDER-C3)\n>",
   "referencedBy": []
  }
 },
 "objects": {
  "TH-PURPLE-BUTTON": {
   "name": "TH-PURPLE-BUTTON",
   "file": "alien.zil",
   "line": 60,
   "endLine": 67,
   "desc": "purple button",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-ALIEN-SHIP",
   "flags": [
    "FL-NO-DESC"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "PURPLE"
   ],
   "action": "RT-TH-PURPLE-BUTTON",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-PURPLE-BUTTON\n\t(LOC TH-ALIEN-SHIP)\n\t(DESC \"purple button\")\n\t(FLAGS FL-NO-DESC)\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE PURPLE)\n\t(ACTION RT-TH-PURPLE-BUTTON)\n>",
   "referencedBy": []
  },
  "TH-ALIEN-SHIP": {
   "name": "TH-ALIEN-SHIP",
   "file": "alien.zil",
   "line": 102,
   "endLine": 108,
   "desc": "alien ship",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-TRENCH-BOTTOM",
   "flags": [
    "FL-SEARCH",
    "FL-SURFACE"
   ],
   "synonyms": [
    "SHIP"
   ],
   "adjectives": [
    "ALIEN"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "TH-PURPLE-BUTTON"
   ],
   "source": "<OBJECT TH-ALIEN-SHIP\n\t(LOC RM-TRENCH-BOTTOM)\n\t(DESC \"alien ship\")\n\t(FLAGS FL-SEARCH FL-SURFACE)\n\t(SYNONYM SHIP)\n\t(ADJECTIVE ALIEN)\n>",
   "referencedBy": []
  },
  "TH-FUSCHIA-BUTTON": {
   "name": "TH-FUSCHIA-BUTTON",
   "file": "alien.zil",
   "line": 148,
   "endLine": 155,
   "desc": "fuschia button",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-ALIEN-CHAMBER",
   "flags": [
    "FL-NO-DESC"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "FUSCHIA"
   ],
   "action": "RT-TH-FUSCHIA-BUTTON",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-FUSCHIA-BUTTON\n\t(LOC RM-ALIEN-CHAMBER)\n\t(DESC \"fuschia button\")\n\t(FLAGS FL-NO-DESC)\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE FUSCHIA)\n\t(ACTION RT-TH-FUSCHIA-BUTTON)\n>",
   "referencedBy": []
  },
  "CH-ALIEN": {
   "name": "CH-ALIEN",
   "file": "alien.zil",
   "line": 177,
   "endLine": 182,
   "desc": "alien",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-ALIEN-CHAMBER",
   "flags": [
    "FL-ALIVE",
    "FL-OPEN",
    "FL-PERSON",
    "FL-SEARCH"
   ],
   "synonyms": [
    "ALIEN"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CH-ALIEN\n\t(LOC RM-ALIEN-CHAMBER)\n\t(DESC \"alien\")\n\t(FLAGS FL-ALIVE FL-OPEN FL-PERSON FL-SEARCH)\n\t(SYNONYM ALIEN)\n>",
   "referencedBy": [
    "RT-TH-FUSCHIA-BUTTON",
    "RT-TH-RED-LEVER"
   ]
  },
  "TH-MONITORS": {
   "name": "TH-MONITORS",
   "file": "command.zil",
   "line": 66,
   "endLine": 72,
   "desc": "monitors",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-COMMAND-MODULE",
   "flags": [
    "FL-NO-DESC"
   ],
   "synonyms": [
    "MONITOR",
    "MONITORS"
   ],
   "adjectives": [],
   "action": "RT-TH-MONITORS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-MONITORS\n\t(LOC RM-COMMAND-MODULE)\n\t(DESC \"monitors\")\n\t(FLAGS FL-NO-DESC)\n\t(SYNONYM MONITOR MONITORS)\n\t(ACTION RT-TH-MONITORS)\n>",
   "referencedBy": []
  },
  "TH-COMMAND-CHAIR": {
   "name": "TH-COMMAND-CHAIR",
   "file": "command.zil",
   "line": 94,
   "endLine": 101,
   "desc": "chair",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-COMMAND-MODULE",
   "flags": [
    "FL-NO-DESC"
   ],
   "synonyms": [
    "CHAIR"
   ],
   "adjectives": [
    "COMMAND"
   ],
   "action": "RT-TH-COMMAND-CHAIR",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-COMMAND-CHAIR\n\t(LOC RM-COMMAND-MODULE)\n\t(DESC \"chair\")\n\t(FLAGS FL-NO-DESC)\n\t(SYNONYM CHAIR)\n\t(ADJECTIVE COMMAND)\n\t(ACTION RT-TH-COMMAND-CHAIR)\n>",
   "referencedBy": []
  },
  "TH-DESCRAMBLER-CONTROL-BOX": {
   "name": "TH-DESCRAMBLER-CONTROL-BOX",
   "file": "command.zil",
   "line": 759,
   "endLine": 766,
   "desc": "descrambler control box",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-BIN",
   "flags": [],
   "synonyms": [
    "DESCRAMBLER",
    "BOX"
   ],
   "adjectives": [
    "CONTROL",
    "DESCRAMBLER"
   ],
   "action": "RT-TH-DESCRAMBLER-CONTROL-BOX",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "MENU": [
     "control box"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-DESCRAMBLER-CONTROL-BOX\n\t(LOC TH-BIN)\n\t(DESC \"descrambler control box\")\n\t(MENU \"control box\")\n\t(SYNONYM DESCRAMBLER BOX)\n\t(ADJECTIVE CONTROL DESCRAMBLER)\n\t(ACTION RT-TH-DESCRAMBLER-CONTROL-BOX)\n>",
   "referencedBy": []
  },
  "TH-POWERCEL": {
   "name": "TH-POWERCEL",
   "file": "crane.zil",
   "line": 375,
   "endLine": 381,
   "desc": "fuel cell",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-PT-BATTERY-ROOM",
   "flags": [],
   "synonyms": [
    "POWERCEL",
    "CELL"
   ],
   "adjectives": [
    "FUEL",
    "POWER"
   ],
   "action": "RT-TH-POWERCEL",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-POWERCEL\n\t(LOC RM-PT-BATTERY-ROOM)\n\t(DESC \"fuel cell\")\n\t(SYNONYM POWERCEL CELL)\n\t(ADJECTIVE FUEL POWER)\n\t(ACTION RT-TH-POWERCEL)\n>",
   "referencedBy": []
  },
  "TH-POOL-OF-WATER": {
   "name": "TH-POOL-OF-WATER",
   "file": "crane.zil",
   "line": 391,
   "endLine": 397,
   "desc": "pool",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [
    "POOL",
    "WATER"
   ],
   "adjectives": [
    "WATER"
   ],
   "action": "RT-TH-POOL-OF-WATER",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-POOL-OF-WATER\n;\t(LOC RM-PT-BATTERY-ROOM)\n\t(DESC \"pool\")\n\t(SYNONYM POOL WATER)\n\t(ADJECTIVE WATER)\n\t(ACTION RT-TH-POOL-OF-WATER)\n>",
   "referencedBy": []
  },
  "TH-CRACK": {
   "name": "TH-CRACK",
   "file": "crane.zil",
   "line": 455,
   "endLine": 459,
   "desc": "crack",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [
    "CRACK"
   ],
   "adjectives": [],
   "action": "RT-TH-CRACK",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-CRACK\n\t(DESC \"crack\")\n\t(SYNONYM CRACK)\n\t(ACTION RT-TH-CRACK)\n>",
   "referencedBy": [
    "RT-I-CRANE-5",
    "RT-WELD-CRACK"
   ]
  },
  "TH-ARC-WELDER": {
   "name": "TH-ARC-WELDER",
   "file": "crane.zil",
   "line": 522,
   "endLine": 529,
   "desc": "arc welder",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "FL-SEARCH",
    "FL-SURFACE",
    "FL-TAKEABLE"
   ],
   "synonyms": [
    "WELDER",
    "ARC-WELDER"
   ],
   "adjectives": [
    "ARC"
   ],
   "action": "RT-TH-ARC-WELDER",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "TH-RED-CABLE",
    "TH-BLACK-CABLE",
    "TH-WELDER-SWITCH",
    "TH-WELDER-CORD"
   ],
   "source": "<OBJECT TH-ARC-WELDER\n;\t(LOC RM-PT-BATTERY-ROOM)\n\t(DESC \"arc welder\")\n\t(FLAGS FL-SEARCH FL-SURFACE FL-TAKEABLE)\n\t(SYNONYM WELDER ARC-WELDER)\n\t(ADJECTIVE ARC)\n\t(ACTION RT-TH-ARC-WELDER)\n>",
   "referencedBy": [
    "RT-WELD-CRACK",
    "RT-TH-ARC-WELDER",
    "RT-RM-LADDER-B2"
   ]
  },
  "TH-WELDING-ROD": {
   "name": "TH-WELDING-ROD",
   "file": "crane.zil",
   "line": 584,
   "endLine": 591,
   "desc": "welding rod",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "FL-TAKEABLE"
   ],
   "synonyms": [
    "ROD"
   ],
   "adjectives": [
    "ARC",
    "WELDING"
   ],
   "action": "RT-TH-WELDING-ROD",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-WELDING-ROD\n;\t(LOC RM-PT-BATTERY-ROOM)\n\t(DESC \"welding rod\")\n\t(FLAGS FL-TAKEABLE)\n\t(SYNONYM ROD)\n\t(ADJECTIVE ARC WELDING)\n\t(ACTION RT-TH-WELDING-ROD)\n>",
   "referencedBy": [
    "RT-TH-CRACK",
    "RT-WELD-CRACK",
    "RT-TH-RED-CABLE",
    "RT-RM-LADDER-B2"
   ]
  },
  "TH-RED-CABLE": {
   "name": "TH-RED-CABLE",
   "file": "crane.zil",
   "line": 604,
   "endLine": 611,
   "desc": "red cable",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-ARC-WELDER",
   "flags": [
    "FL-CONTAINER",
    "FL-NO-DESC",
    "FL-OPEN",
    "FL-SEARCH"
   ],
   "synonyms": [
    "CABLE",
    "CLAMP"
   ],
   "adjectives": [
    "RED",
    "RUBBER"
   ],
   "action": "RT-TH-RED-CABLE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-RED-CABLE\n\t(LOC TH-ARC-WELDER)\n\t(DESC \"red cable\")\n\t(FLAGS FL-CONTAINER FL-NO-DESC FL-OPEN FL-SEARCH)\n\t(SYNONYM CABLE CLAMP)\n\t(ADJECTIVE RED RUBBER)\n\t(ACTION RT-TH-RED-CABLE)\n>",
   "referencedBy": [
    "RT-WELD-CRACK",
    "RT-TH-RED-CABLE"
   ]
  },
  "TH-BLACK-CABLE": {
   "name": "TH-BLACK-CABLE",
   "file": "crane.zil",
   "line": 647,
   "endLine": 655,
   "desc": "black cable",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-ARC-WELDER",
   "flags": [
    "FL-NO-DESC"
   ],
   "synonyms": [
    "CABLE",
    "CUP",
    "ELECTRODE"
   ],
   "adjectives": [
    "BLACK",
    "RUBBER",
    "SUCTION"
   ],
   "action": "RT-TH-BLACK-CABLE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OWNER": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-BLACK-CABLE\n\t(LOC TH-ARC-WELDER)\n\t(DESC \"black cable\")\n\t(FLAGS FL-NO-DESC)\n\t(SYNONYM CABLE CUP ELECTRODE)\n\t(ADJECTIVE BLACK RUBBER SUCTION)\n\t(OWNER 0)\t;\"What electrode is attached to\"\n\t(ACTION RT-TH-BLACK-CABLE)\n>",
   "referencedBy": [
    "RT-WELD-CRACK",
    "RT-TH-BLACK-CABLE"
   ]
  },
  "TH-WELDER-SWITCH": {
   "name": "TH-WELDER-SWITCH",
   "file": "crane.zil",
   "line": 681,
   "endLine": 688,
   "desc": "power switch",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-ARC-WELDER",
   "flags": [
    "FL-NO-DESC"
   ],
   "synonyms": [
    "SWITCH",
    "PLUG"
   ],
   "adjectives": [
    "POWER"
   ],
   "action": "RT-TH-WELDER-SWITCH",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-WELDER-SWITCH\n\t(LOC TH-ARC-WELDER)\n\t(DESC \"power switch\")\n\t(FLAGS FL-NO-DESC)\n\t(SYNONYM SWITCH PLUG)\n\t(ADJECTIVE POWER)\n\t(ACTION RT-TH-WELDER-SWITCH)\n>",
   "referencedBy": []
  },
  "TH-WELDER-CORD": {
   "name": "TH-WELDER-CORD",
   "file": "crane.zil",
   "line": 704,
   "endLine": 711,
   "desc": "power cord",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-ARC-WELDER",
   "flags": [
    "FL-NO-DESC"
   ],
   "synonyms": [
    "CORD"
   ],
   "adjectives": [
    "POWER"
   ],
   "action": "RT-TH-WELDER-CORD",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-WELDER-CORD\n\t(LOC TH-ARC-WELDER)\n\t(DESC \"power cord\")\n\t(FLAGS FL-NO-DESC)\n\t(SYNONYM CORD)\n\t(ADJECTIVE POWER)\n\t(ACTION RT-TH-WELDER-CORD)\n>",
   "referencedBy": [
    "RT-TH-ARC-WELDER",
    "RT-TH-WELDER-CORD"
   ]
  },
  "TH-PT-BILGE-BUTTON": {
   "name": "TH-PT-BILGE-BUTTON",
   "file": "crane.zil",
   "line": 783,
   "endLine": 789,
   "desc": "button",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-LADDER-D2",
   "flags": [],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "YELLOW"
   ],
   "action": "RT-TH-PT-BILGE-BUTTON",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-PT-BILGE-BUTTON\n\t(LOC RM-LADDER-D2)\n\t(DESC \"button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE YELLOW)\n\t(ACTION RT-TH-PT-BILGE-BUTTON)\n>",
   "referencedBy": [
    "RT-I-BATTERY-LEAK",
    "RT-RM-PT-BATTERY-ROOM",
    "RT-WELD-CRACK",
    "RT-TH-PT-BILGE-BUTTON"
   ]
  },
  "TH-SB-BILGE-BUTTON": {
   "name": "TH-SB-BILGE-BUTTON",
   "file": "crane.zil",
   "line": 826,
   "endLine": 832,
   "desc": "button",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-LADDER-C2",
   "flags": [],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "YELLOW"
   ],
   "action": "RT-TH-SB-BILGE-BUTTON",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-SB-BILGE-BUTTON\n\t(LOC RM-LADDER-C2)\n\t(DESC \"button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE YELLOW)\n\t(ACTION RT-TH-SB-BILGE-BUTTON)\n>",
   "referencedBy": []
  },
  "TH-BUD-GEAR-LOCKER": {
   "name": "TH-BUD-GEAR-LOCKER",
   "file": "crane.zil",
   "line": 911,
   "endLine": 921,
   "desc": "gear locker",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-DIVE-GEAR-STORAGE",
   "flags": [
    "FL-CONTAINER",
    "FL-OPENABLE",
    "FL-SEARCH",
    "FL-YOUR"
   ],
   "synonyms": [
    "LOCKER"
   ],
   "adjectives": [
    "BUD",
    "GEAR"
   ],
   "action": "RT-TH-BUD-GEAR-LOCKER",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OWNER": [
     "CH-PLAYER"
    ],
    "SIZE": [
     "5"
    ],
    "GENERIC": [
     "RT-GN-LOCKER"
    ]
   },
   "contents": [
    "TH-DRY-SUIT"
   ],
   "source": "<OBJECT TH-BUD-GEAR-LOCKER\n\t(LOC RM-DIVE-GEAR-STORAGE)\n\t(DESC \"gear locker\")\n\t(FLAGS FL-CONTAINER FL-OPENABLE FL-SEARCH FL-YOUR)\n\t(SYNONYM LOCKER)\n\t(ADJECTIVE BUD GEAR)\n\t(OWNER CH-PLAYER)\n\t(SIZE 5)\n\t(GENERIC RT-GN-LOCKER)\n\t(ACTION RT-TH-BUD-GEAR-LOCKER)\n>",
   "referencedBy": []
  },
  "TH-BIG-LOCKER": {
   "name": "TH-BIG-LOCKER",
   "file": "crane.zil",
   "line": 927,
   "endLine": 936,
   "desc": "big locker",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-DIVE-GEAR-STORAGE",
   "flags": [
    "FL-CONTAINER",
    "FL-OPENABLE",
    "FL-SEARCH"
   ],
   "synonyms": [
    "LOCKER"
   ],
   "adjectives": [
    "BIG",
    "DIVE",
    "GEAR"
   ],
   "action": "RT-TH-BIG-LOCKER",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "5"
    ],
    "GENERIC": [
     "RT-GN-LOCKER"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-BIG-LOCKER\n\t(LOC RM-DIVE-GEAR-STORAGE)\n\t(DESC \"big locker\")\n\t(FLAGS FL-CONTAINER FL-OPENABLE FL-SEARCH)\n\t(SYNONYM LOCKER)\n\t(ADJECTIVE BIG DIVE GEAR)\n\t(SIZE 5)\n\t(GENERIC RT-GN-LOCKER)\n\t(ACTION RT-TH-BIG-LOCKER)\n>",
   "referencedBy": [
    "RT-GN-LOCKER"
   ]
  },
  "LG-DGS-DOOR": {
   "name": "LG-DGS-DOOR",
   "file": "crane.zil",
   "line": 985,
   "endLine": 992,
   "desc": "fore door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "FL-DOOR",
    "FL-OPEN",
    "FL-OPENABLE"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "FORE",
    "DIVE",
    "GEAR",
    "STORAGE"
   ],
   "action": "RT-LG-DGS-DOOR",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LG-DGS-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"fore door\")\n\t(FLAGS FL-DOOR FL-OPEN FL-OPENABLE)\n\t(SYNONYM DOOR)\n\t(ADJECTIVE FORE DIVE GEAR STORAGE)\n\t(ACTION RT-LG-DGS-DOOR)\n>",
   "referencedBy": [
    "RT-I-CRANE-5",
    "RT-LG-DGS-DOOR"
   ]
  },
  "TH-BARBELL": {
   "name": "TH-BARBELL",
   "file": "crane.zil",
   "line": 1074,
   "endLine": 1080,
   "desc": "barbell",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-RECREATION-ROOM",
   "flags": [
    "FL-SURFACE",
    "FL-TAKEABLE"
   ],
   "synonyms": [
    "BARBELL",
    "BAR"
   ],
   "adjectives": [],
   "action": "RT-TH-BARBELL",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "TH-WEIGHTS"
   ],
   "source": "<OBJECT TH-BARBELL\n\t(LOC RM-RECREATION-ROOM)\n\t(DESC \"barbell\")\n\t(FLAGS FL-SURFACE FL-TAKEABLE)\n\t(SYNONYM BARBELL BAR)\n\t(ACTION RT-TH-BARBELL)\n>",
   "referencedBy": [
    "RT-TH-BIG-LOCKER",
    "RT-TH-BARBELL",
    "RT-TH-WEIGHTS"
   ]
  },
  "TH-WEIGHTS": {
   "name": "TH-WEIGHTS",
   "file": "crane.zil",
   "line": 1101,
   "endLine": 1107,
   "desc": "weights",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-BARBELL",
   "flags": [
    "FL-TAKEABLE"
   ],
   "synonyms": [
    "WEIGHTS"
   ],
   "adjectives": [],
   "action": "RT-TH-WEIGHTS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-WEIGHTS\n\t(LOC TH-BARBELL)\n\t(DESC \"weights\")\n\t(FLAGS FL-TAKEABLE)\n\t(SYNONYM WEIGHTS)\n\t(ACTION RT-TH-WEIGHTS)\n>",
   "referencedBy": [
    "RT-TH-BARBELL",
    "RT-TH-WEIGHTS"
   ]
  },
  "TH-LIFT-BENCH": {
   "name": "TH-LIFT-BENCH",
   "file": "crane.zil",
   "line": 1131,
   "endLine": 1138,
   "desc": "bench",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-RECREATION-ROOM",
   "flags": [
    "FL-SURFACE"
   ],
   "synonyms": [
    "BENCH"
   ],
   "adjectives": [
    "LIFT"
   ],
   "action": "RT-TH-LIFT-BENCH",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-LIFT-BENCH\n\t(LOC RM-RECREATION-ROOM)\n\t(DESC \"bench\")\n\t(FLAGS FL-SURFACE)\n\t(SYNONYM BENCH)\n\t(ADJECTIVE LIFT)\n\t(ACTION RT-TH-LIFT-BENCH)\n>",
   "referencedBy": []
  },
  "TH-TREADMILL": {
   "name": "TH-TREADMILL",
   "file": "crane.zil",
   "line": 1148,
   "endLine": 1154,
   "desc": "treadmill",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-RECREATION-ROOM",
   "flags": [
    "FL-SURFACE"
   ],
   "synonyms": [
    "TREADMILL"
   ],
   "adjectives": [],
   "action": "RT-TH-TREADMILL",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-TREADMILL\n\t(LOC RM-RECREATION-ROOM)\n\t(DESC \"treadmill\")\n\t(FLAGS FL-SURFACE)\n\t(SYNONYM TREADMILL)\n\t(ACTION RT-TH-TREADMILL)\n>",
   "referencedBy": []
  },
  "TH-CYCLE": {
   "name": "TH-CYCLE",
   "file": "crane.zil",
   "line": 1164,
   "endLine": 1171,
   "desc": "cycle",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-RECREATION-ROOM",
   "flags": [
    "FL-SURFACE"
   ],
   "synonyms": [
    "CYCLE",
    "BICYCLE"
   ],
   "adjectives": [
    "STATIONARY",
    "EXERCISE"
   ],
   "action": "RT-TH-CYCLE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-CYCLE\n\t(LOC RM-RECREATION-ROOM)\n\t(DESC \"cycle\")\n\t(FLAGS FL-SURFACE)\n\t(SYNONYM CYCLE BICYCLE)\n\t(ADJECTIVE STATIONARY EXERCISE)\n\t(ACTION RT-TH-CYCLE)\n>",
   "referencedBy": []
  },
  "TH-HYDRAULIC-HOSE": {
   "name": "TH-HYDRAULIC-HOSE",
   "file": "crane.zil",
   "line": 1245,
   "endLine": 1252,
   "desc": "hydraulic hose",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-LADDER-B2",
   "flags": [],
   "synonyms": [
    "HOSE"
   ],
   "adjectives": [
    "HYDRAULIC"
   ],
   "action": "RT-TH-HYDRAULIC-HOSE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "MENU": [
     "hose"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-HYDRAULIC-HOSE\n\t(LOC RM-LADDER-B2)\n\t(DESC \"hydraulic hose\")\n\t(MENU \"hose\")\n\t(SYNONYM HOSE)\n\t(ADJECTIVE HYDRAULIC)\n\t(ACTION RT-TH-HYDRAULIC-HOSE)\n>",
   "referencedBy": [
    "RT-TH-HYDRAULIC-HOSE",
    "RT-LG-FLOOD-DOOR"
   ]
  },
  "TH-HYDRAULIC-FLUID": {
   "name": "TH-HYDRAULIC-FLUID",
   "file": "crane.zil",
   "line": 1283,
   "endLine": 1289,
   "desc": "hydraulic fluid",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [
    "FLUID"
   ],
   "adjectives": [
    "HYDRAULIC",
    "RED",
    "STICKY"
   ],
   "action": "RT-TH-HYDRAULIC-FLUID",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "MENU": [
     "fluid"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-HYDRAULIC-FLUID\n\t(DESC \"hydraulic fluid\")\n\t(MENU \"fluid\")\n\t(SYNONYM FLUID)\n\t(ADJECTIVE HYDRAULIC RED STICKY)\n\t(ACTION RT-TH-HYDRAULIC-FLUID)\n>",
   "referencedBy": [
    "RT-TH-HYDRAULIC-HOSE"
   ]
  },
  "LG-FLOOD-DOOR": {
   "name": "LG-FLOOD-DOOR",
   "file": "crane.zil",
   "line": 1299,
   "endLine": 1306,
   "desc": "flood door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "FL-DOOR",
    "FL-OPEN",
    "FL-OPENABLE"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "AUTOMATIC",
    "FLOOD",
    "CONTROL"
   ],
   "action": "RT-LG-FLOOD-DOOR",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LG-FLOOD-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"flood door\")\n\t(FLAGS FL-DOOR FL-OPEN FL-OPENABLE)\n\t(SYNONYM DOOR)\n\t(ADJECTIVE AUTOMATIC FLOOD CONTROL)\n\t(ACTION RT-LG-FLOOD-DOOR)\n>",
   "referencedBy": [
    "RT-LG-DGS-DOOR",
    "RT-LG-FLOOD-DOOR"
   ]
  },
  "TH-KNIFE": {
   "name": "TH-KNIFE",
   "file": "crane.zil",
   "line": 1329,
   "endLine": 1336,
   "desc": "dive knife",
   "ldesc": null,
   "fdesc": null,
   "loc": "CH-PLAYER",
   "flags": [
    "FL-KNIFE",
    "FL-TAKEABLE"
   ],
   "synonyms": [
    "KNIFE"
   ],
   "adjectives": [
    "DIVE"
   ],
   "action": "RT-TH-KNIFE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-KNIFE\n\t(LOC CH-PLAYER)\n\t(DESC \"dive knife\")\n\t(FLAGS FL-KNIFE FL-TAKEABLE)\n\t(SYNONYM KNIFE)\n\t(ADJECTIVE DIVE)\n\t(ACTION RT-TH-KNIFE)\n>",
   "referencedBy": [
    "RT-TH-HYDRAULIC-HOSE",
    "RT-TH-WIRE",
    "RT-TH-LIFT-BAG",
    "RT-TH-CAB-HOOKAH"
   ]
  },
  "INTDIR": {
   "name": "INTDIR",
   "file": "defs.zil",
   "line": 2131,
   "endLine": 2135,
   "desc": "direction",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "FORE",
    "STARBOARD",
    "AFT",
    "PORT",
    "NORTH",
    "SOUTH",
    "EAST",
    "WEST"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT INTDIR\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"direction\")\n\t(SYNONYM FORE STARBOARD AFT PORT NORTH SOUTH EAST WEST)\n>",
   "referencedBy": [
    "THIS-IS-IT",
    "NO-NEED",
    "RT-YOU-CANT-MSG",
    "V-EXAMINE"
   ]
  },
  "TH-WINDOW-BENCH": {
   "name": "TH-WINDOW-BENCH",
   "file": "endgame.zil",
   "line": 17,
   "endLine": 24,
   "desc": "bench",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-COMPRESSION-CHAMBER",
   "flags": [
    "FL-CONTAINER",
    "FL-OPENABLE",
    "FL-SEARCH"
   ],
   "synonyms": [
    "BENCH",
    "SEAT"
   ],
   "adjectives": [
    "WINDOW"
   ],
   "action": "RT-TH-WINDOW-BENCH",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "TH-RED-LEVER"
   ],
   "source": "<OBJECT TH-WINDOW-BENCH\n\t(LOC RM-COMPRESSION-CHAMBER)\n\t(DESC \"bench\")\n\t(FLAGS FL-CONTAINER FL-OPENABLE FL-SEARCH)\n\t(SYNONYM BENCH SEAT)\n\t(ADJECTIVE WINDOW)\n\t(ACTION RT-TH-WINDOW-BENCH)\n>",
   "referencedBy": [
    "RT-TH-WINDOW-BENCH"
   ]
  },
  "TH-RED-LEVER": {
   "name": "TH-RED-LEVER",
   "file": "endgame.zil",
   "line": 42,
   "endLine": 48,
   "desc": "lever",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-WINDOW-BENCH",
   "flags": [],
   "synonyms": [
    "LEVER"
   ],
   "adjectives": [
    "RED"
   ],
   "action": "RT-TH-RED-LEVER",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-RED-LEVER\n\t(LOC TH-WINDOW-BENCH)\n\t(DESC \"lever\")\n\t(SYNONYM LEVER)\n\t(ADJECTIVE RED)\n\t(ACTION RT-TH-RED-LEVER)\n>",
   "referencedBy": []
  },
  "TH-THERMOMETER": {
   "name": "TH-THERMOMETER",
   "file": "gas-mix.zil",
   "line": 624,
   "endLine": 630,
   "desc": "thermometer",
   "ldesc": null,
   "fdesc": null,
   "loc": "CH-PLAYER",
   "flags": [
    "FL-READABLE",
    "FL-TAKEABLE"
   ],
   "synonyms": [
    "THERMOMETER"
   ],
   "adjectives": [],
   "action": "RT-TH-THERMOMETER",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-THERMOMETER\n\t(LOC CH-PLAYER)\n\t(DESC \"thermometer\")\n\t(FLAGS FL-READABLE FL-TAKEABLE)\n\t(SYNONYM THERMOMETER)\n\t(ACTION RT-TH-THERMOMETER)\n>",
   "referencedBy": []
  },
  "ROOMS": {
   "name": "ROOMS",
   "file": "global.zil",
   "line": 16,
   "endLine": 19,
   "desc": "that",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "FL-NO-ARTICLE"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ROOMS\n\t(DESC \"that\")\n\t(FLAGS FL-NO-ARTICLE)\n>",
   "referencedBy": [
    "V-BE",
    "IS-HERE?",
    "RT-RM-COMMAND-MODULE",
    "RT-TH-BIG-LOCKER",
    "CLOSED?",
    "ACCESSIBLE?",
    "THIS-IS-IT",
    "RT-RM-TRI-MIX-STORAGE",
    "RT-TH-NITROGEN-TANK",
    "RT-FIRST-YOU-MSG",
    "RT-SEE-INSIDE?",
    "RT-NO-RESPONSE-MSG",
    "RT-FOOLISH-TO-TALK?",
    "RT-DESCRIBE-OBJECTS",
    "HELD?",
    "PRE-EMPTY",
    "RT-EMPTY-MSG",
    "V-ENTER",
    "V-EXIT",
    "V-LISTEN",
    "V-LOOK-IN",
    "RT-CHECK-MOVE-MSG?",
    "V-SIT",
    "V-TAKE"
   ]
  },
  "GLOBAL-OBJECTS": {
   "name": "GLOBAL-OBJECTS",
   "file": "global.zil",
   "line": 21,
   "endLine": 81,
   "desc": "GO",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "FL-ALIVE",
    "FL-ASLEEP",
    "FL-AUTO-ENTER",
    "FL-AUTO-OPEN",
    "FL-BODY-PART",
    "FL-BROKEN",
    "FL-BURNABLE",
    "FL-BY-HAND",
    "FL-CLOTHING",
    "FL-COLLECTIVE",
    "FL-CONTAINER",
    "FL-DOOR",
    "FL-FEMALE",
    "FL-HAS-LDESC",
    "FL-HAS-SDESC",
    "FL-INDOORS",
    "FL-INVISIBLE",
    "FL-KEY",
    "FL-KNIFE",
    "FL-LAMP",
    "FL-LIGHTED",
    "FL-LOCKED",
    "FL-NO-ALL",
    "FL-NO-ARTICLE",
    "FL-NO-DESC",
    "FL-ON",
    "FL-OPEN",
    "FL-OPENABLE",
    "FL-PERSON",
    "FL-PLURAL",
    "FL-READABLE",
    "FL-SEARCH",
    "FL-SEEN",
    "FL-SURFACE",
    "FL-TAKEABLE",
    "FL-TOOL",
    "FL-TOUCHED",
    "FL-TRANSPARENT",
    "FL-TRY-TAKE",
    "FL-VEHICLE",
    "FL-VOWEL",
    "FL-WATER",
    "FL-WEAPON",
    "FL-WORN",
    "FL-YOUR"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "0"
   ],
   "pseudo": [
    "0"
   ],
   "otherProps": {
    "GENERIC": [
     "0"
    ],
    "OWNER": [
     "0"
    ],
    "CAPACITY": [
     "0"
    ],
    "SCORE": [
     "0"
    ]
   },
   "contents": [
    "INTDIR",
    "LOCAL-GLOBALS",
    "GLOBAL-HERE",
    "IT",
    "THEM",
    "INTNUM",
    "YOU",
    "HER",
    "HIM",
    "TH-HUMAN-BODY",
    "TH-PLAYER-BODY",
    "TH-HEAD",
    "TH-HANDS",
    "TH-GROUND",
    "TH-SKY"
   ],
   "source": "<OBJECT GLOBAL-OBJECTS\n\t(DESC \"GO\")\n;\t(FDESC 0)\n\t(GENERIC 0)\n\t(GLOBAL 0)\n\t(OWNER 0)\n;\t(TEXT 0)\n\t(THINGS 0)\n\t(CAPACITY 0)\n\t(SCORE 0)\n\t(FLAGS\n\t\tFL-ALIVE\t\t\t\t;  1\n\t\tFL-ASLEEP\t\t\t;  2\n\t\tFL-AUTO-ENTER\t\t;  3\n\t\tFL-AUTO-OPEN\t\t;  4\n\t\tFL-BODY-PART\t\t;  5\n\t\tFL-BROKEN\t\t\t;  6\n\t\tFL-BURNABLE\t\t\t;  7\n\t\tFL-BY-HAND\t\t\t;  8\n\t\tFL-CLOTHING\t\t\t;  9\n\t\tFL-COLLECTIVE\t\t; 10\n\t\tFL-CONTAINER\t\t; 11\n\t\tFL-DOOR\t\t\t\t; 12\n\t\tFL-FEMALE\t\t\t; 13\n\t\tFL-HAS-LDESC\t\t; 14\n\t\tFL-HAS-SDESC\t\t; 15\n\t\tFL-INDOORS\t\t\t; 16\n\t\tFL-INVISIBLE\t\t; 17\n\t\tFL-KEY\t\t\t\t; 18\n\t\tFL-KNIFE\t\t\t\t; 19\n\t\tFL-LAMP\t\t\t\t; 20\n\t\tFL-LIGHTED\t\t\t; 21\n\t\tFL-LOCKED\t\t\t; 22\n\t\tFL-NO-ALL\t\t\t; 23\n\t\tFL-NO-ARTICLE\t\t; 24\n\t\tFL-NO-DESC\t\t\t; 25\n\t\tFL-ON\t\t\t\t\t; 26\n\t\tFL-OPEN\t\t\t\t; 27\n\t\tFL-OPENABLE\t\t\t; 28\n\t\tFL-PERSON\t\t\t; 29\n\t\tFL-PLURAL\t\t\t; 30\n\t\tFL-READABLE\t\t\t; 31\n\t;\tFL-ROOMS\t\t\t\t; 32\n\t\tFL-SEARCH\t\t\t; 33\n\t\tFL-SEEN\t\t\t\t; 34\n\t\tFL-SURFACE\t\t\t; 35\n\t\tFL-TAKEABLE\t\t\t; 36\n\t\tFL-TOOL\t\t\t\t; 37\n\t\tFL-TOUCHED\t\t\t; 38\n\t\tFL-TRANSPARENT\t\t; 39\n\t\tFL-TRY-TAKE\t\t\t; 40\n\t\tFL-VEHICLE\t\t\t; 41\n\t\tFL-VOWEL\t\t\t\t; 42\n\t\tFL-WATER\t\t\t\t; 43\n\t\tFL-WEAPON\t\t\t; 44\n\t\tFL-WORN\t\t\t\t; 45\n\t\tFL-YOUR\t\t\t\t; 46\n\t;\tFL-FLAG-47\t\t\t; 47\n\t;\tFL-FLAG-48\t\t\t; 48\n\t)\n>",
   "referencedBy": [
    "V-BE",
    "IS-HERE?",
    "ACCESSIBLE?",
    "RT-TH-LIFT-BAG",
    "HELD?",
    "PRE-PUT",
    "RT-CHECK-MOVE-MSG?",
    "PRE-TAKE",
    "PRE-TAKE-WITH",
    "V-TAKE"
   ]
  },
  "LOCAL-GLOBALS": {
   "name": "LOCAL-GLOBALS",
   "file": "global.zil",
   "line": 83,
   "endLine": 88,
   "desc": "LG",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "FL-NO-ARTICLE"
   ],
   "synonyms": [
    "L.G"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "LG-DGS-DOOR",
    "LG-FLOOD-DOOR",
    "LG-WALL",
    "LG-DEEPCORE",
    "LG-TROUGH",
    "LG-MONTANA",
    "LG-OUTLET",
    "LG-MIDSHIP-HATCH",
    "LG-BUCKLED-DOOR",
    "LG-CHAMBER-HATCH",
    "LG-CHAMBER-DOOR"
   ],
   "source": "<OBJECT LOCAL-GLOBALS\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"LG\")\n\t(SYNONYM L.G)\n\t(FLAGS FL-NO-ARTICLE)\n>",
   "referencedBy": [
    "V-BE",
    "IS-HERE?",
    "ACCESSIBLE?",
    "RT-TH-LIFT-BAG",
    "RT-CHECK-MOVE-MSG?",
    "V-TAKE"
   ]
  },
  "GLOBAL-HERE": {
   "name": "GLOBAL-HERE",
   "file": "global.zil",
   "line": 90,
   "endLine": 96,
   "desc": "here",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "FL-NO-ARTICLE"
   ],
   "synonyms": [
    "HERE",
    "PLACE",
    "ROOM",
    "AREA"
   ],
   "adjectives": [],
   "action": "RT-GLOBAL-HERE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-HERE\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"here\")\n\t(FLAGS FL-NO-ARTICLE)\n\t(SYNONYM HERE PLACE ROOM AREA)\n\t(ACTION RT-GLOBAL-HERE)\n>",
   "referencedBy": [
    "THIS-IS-IT",
    "RT-EMPTY-MSG",
    "V-ENTER",
    "V-EXIT",
    "V-EXAMINE",
    "PRE-PUT"
   ]
  },
  "IT": {
   "name": "IT",
   "file": "global.zil",
   "line": 110,
   "endLine": 115,
   "desc": "it",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "FL-NO-ARTICLE",
    "FL-VOWEL"
   ],
   "synonyms": [
    "IT",
    "THIS"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT IT\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"it\")\n\t(SYNONYM IT THIS)\n\t(FLAGS FL-NO-ARTICLE FL-VOWEL)\n>",
   "referencedBy": [
    "THIS-IS-IT"
   ]
  },
  "THEM": {
   "name": "THEM",
   "file": "global.zil",
   "line": 117,
   "endLine": 122,
   "desc": "them",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "FL-NO-ARTICLE",
    "FL-PLURAL"
   ],
   "synonyms": [
    "THEM"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT THEM\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"them\")\n\t(SYNONYM THEM)\n\t(FLAGS FL-NO-ARTICLE FL-PLURAL)\n>",
   "referencedBy": [
    "THIS-IS-IT"
   ]
  },
  "INTNUM": {
   "name": "INTNUM",
   "file": "global.zil",
   "line": 124,
   "endLine": 128,
   "desc": "number",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "INT.NUM"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT INTNUM\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"number\")\n\t(SYNONYM INT.NUM)\n>",
   "referencedBy": [
    "RT-TH-SAFE",
    "RT-TH-DETONATOR",
    "V-VERIFY",
    "V-WAIT"
   ]
  },
  "YOU": {
   "name": "YOU",
   "file": "global.zil",
   "line": 130,
   "endLine": 135,
   "desc": "you",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "YOU",
    "YOURSELF"
   ],
   "adjectives": [],
   "action": "RT-YOU",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT YOU\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"you\")\n\t(SYNONYM YOU YOURSELF)\n\t(ACTION RT-YOU)\n>",
   "referencedBy": [
    "PRE-TAKE",
    "PRE-TAKE-WITH"
   ]
  },
  "HER": {
   "name": "HER",
   "file": "global.zil",
   "line": 151,
   "endLine": 156,
   "desc": "her",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "FL-NO-ARTICLE"
   ],
   "synonyms": [
    "HER"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HER\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"her\")\n\t(SYNONYM HER)\n\t(FLAGS FL-NO-ARTICLE)\n>",
   "referencedBy": [
    "THIS-IS-IT",
    "RT-TH-CLUE-PAPER"
   ]
  },
  "HIM": {
   "name": "HIM",
   "file": "global.zil",
   "line": 158,
   "endLine": 163,
   "desc": "him",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "FL-NO-ARTICLE"
   ],
   "synonyms": [
    "HIM"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HIM\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"him\")\n\t(SYNONYM HIM)\n\t(FLAGS FL-NO-ARTICLE)\n>",
   "referencedBy": [
    "THIS-IS-IT"
   ]
  },
  "TH-HUMAN-BODY": {
   "name": "TH-HUMAN-BODY",
   "file": "global.zil",
   "line": 169,
   "endLine": 200,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "FL-HAS-SDESC",
    "FL-NO-ARTICLE"
   ],
   "synonyms": [
    "BODY",
    "SKIN",
    "ARM",
    "ARMS",
    "HAND",
    "HANDS",
    "LEG",
    "LEGS",
    "ANKLE",
    "ANKLES",
    "FOOT",
    "FEET",
    "HEAD",
    "HAIR",
    "EYE",
    "EYES",
    "EAR",
    "EARS",
    "NOSE",
    "FACE",
    "CHEEK",
    "CHEEKS",
    "LIP",
    "LIPS",
    "MOUTH",
    "NECK",
    "SHOULDER",
    "SHOULDERS",
    "CHEST",
    "TORSO",
    "BACK",
    "WAIST"
   ],
   "adjectives": [
    "LEFT",
    "RIGHT"
   ],
   "action": "RT-TH-HUMAN-BODY",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OWNER": [
     "K-BODY-OWNER-TBL"
    ],
    "GENERIC": [
     "RT-GN-BODY"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-HUMAN-BODY\n\t(LOC GLOBAL-OBJECTS)\n\t(FLAGS FL-HAS-SDESC FL-NO-ARTICLE)\n\t(SYNONYM\n\t\tBODY\n\t\tSKIN\n\t\tARM ARMS\n\t\tHAND HANDS\n\t\tLEG LEGS\n\t\tANKLE ANKLES\n\t\tFOOT FEET\n\t\tHEAD\n\t\tHAIR\n\t\tEYE EYES\n\t\tEAR EARS\n\t\tNOSE\n\t\tFACE\n\t\tCHEEK CHEEKS\n\t\tLIP LIPS\n\t\tMOUTH\n\t\tNECK\n\t\tSHOULDER SHOULDERS\n\t\tCHEST\n\t\tTORSO\n\t\tBACK\n\t\tWAIST\n\t)\n\t(ADJECTIVE LEFT RIGHT)\n\t(OWNER K-BODY-OWNER-TBL)\n\t(GENERIC RT-GN-BODY)\n\t(ACTION RT-TH-HUMAN-BODY)\n>",
   "referencedBy": [
    "RT-GN-BODY"
   ]
  },
  "TH-PLAYER-BODY": {
   "name": "TH-PLAYER-BODY",
   "file": "global.zil",
   "line": 294,
   "endLine": 323,
   "desc": "body",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "FL-BODY-PART",
    "FL-YOUR"
   ],
   "synonyms": [
    "BODY",
    "SKIN",
    "ARM",
    "ARMS",
    "ANKLE",
    "ANKLES",
    "FOOT",
    "FEET",
    "HAIR",
    "EYE",
    "EYES",
    "EAR",
    "EARS",
    "NOSE",
    "FACE",
    "CHEEK",
    "CHEEKS",
    "LIP",
    "LIPS",
    "TONGUE",
    "NECK",
    "SHOULDER",
    "SHOULDERS",
    "CHEST",
    "TORSO",
    "BACK",
    "WAIST"
   ],
   "adjectives": [
    "LEFT",
    "RIGHT"
   ],
   "action": "RT-TH-PLAYER-BODY",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OWNER": [
     "CH-PLAYER"
    ],
    "GENERIC": [
     "RT-GN-BODY"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-PLAYER-BODY\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"body\")\n\t(FLAGS FL-BODY-PART FL-YOUR)\n\t(SYNONYM\n\t\tBODY\n\t\tSKIN\n\t\tARM ARMS\n\t\tANKLE ANKLES\n\t\tFOOT FEET\n\t\tHAIR\n\t\tEYE EYES\n\t\tEAR EARS\n\t\tNOSE\n\t\tFACE\n\t\tCHEEK CHEEKS\n\t\tLIP LIPS\n\t\tTONGUE\n\t\tNECK\n\t\tSHOULDER SHOULDERS\n\t\tCHEST\n\t\tTORSO\n\t\tBACK\n\t\tWAIST\n\t)\n\t(ADJECTIVE LEFT RIGHT)\n\t(OWNER CH-PLAYER)\n\t(GENERIC RT-GN-BODY)\n\t(ACTION RT-TH-PLAYER-BODY)\n>",
   "referencedBy": [
    "RT-GN-BODY"
   ]
  },
  "TH-HEAD": {
   "name": "TH-HEAD",
   "file": "global.zil",
   "line": 341,
   "endLine": 348,
   "desc": "head",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "FL-BODY-PART",
    "FL-YOUR"
   ],
   "synonyms": [
    "HEAD"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OWNER": [
     "CH-PLAYER"
    ],
    "GENERIC": [
     "RT-GN-BODY"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-HEAD\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"head\")\n\t(FLAGS FL-BODY-PART FL-YOUR)\n\t(SYNONYM HEAD)\n\t(OWNER CH-PLAYER)\n\t(GENERIC RT-GN-BODY)\n>",
   "referencedBy": [
    "HELD?"
   ]
  },
  "TH-HANDS": {
   "name": "TH-HANDS",
   "file": "global.zil",
   "line": 354,
   "endLine": 362,
   "desc": "hands",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "FL-BODY-PART",
    "FL-BY-HAND",
    "FL-PLURAL",
    "FL-TOOL",
    "FL-WEAPON",
    "FL-YOUR"
   ],
   "synonyms": [
    "HAND",
    "HANDS"
   ],
   "adjectives": [
    "LEFT",
    "RIGHT"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OWNER": [
     "CH-PLAYER"
    ],
    "GENERIC": [
     "RT-GN-BODY"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-HANDS\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"hands\")\n\t(FLAGS FL-BODY-PART FL-BY-HAND FL-PLURAL FL-TOOL FL-WEAPON FL-YOUR)\n\t(SYNONYM HAND HANDS)\n\t(ADJECTIVE LEFT RIGHT)\n\t(OWNER CH-PLAYER)\n\t(GENERIC RT-GN-BODY)\n>",
   "referencedBy": [
    "RT-TH-BIG-LOCKER",
    "RT-TH-NITROGEN-TANK",
    "HELD?",
    "PRE-EMPTY",
    "RT-EMPTY-MSG",
    "PRE-PUT-IN",
    "PRE-TAKE"
   ]
  },
  "TH-GROUND": {
   "name": "TH-GROUND",
   "file": "global.zil",
   "line": 368,
   "endLine": 373,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "FL-HAS-SDESC",
    "FL-SEARCH",
    "FL-SURFACE"
   ],
   "synonyms": [
    "GROUND",
    "FLOOR"
   ],
   "adjectives": [],
   "action": "RT-TH-GROUND",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-GROUND\n\t(LOC GLOBAL-OBJECTS)\n\t(SYNONYM GROUND FLOOR)\n\t(FLAGS FL-HAS-SDESC FL-SEARCH FL-SURFACE)\n\t(ACTION RT-TH-GROUND)\n>",
   "referencedBy": [
    "RT-TH-GROUND",
    "RT-EMPTY-MSG",
    "PRE-PUT",
    "V-SIT",
    "ITAKE"
   ]
  },
  "TH-SKY": {
   "name": "TH-SKY",
   "file": "global.zil",
   "line": 420,
   "endLine": 425,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "FL-HAS-SDESC"
   ],
   "synonyms": [
    "SKY",
    "CEILING"
   ],
   "adjectives": [],
   "action": "RT-TH-SKY",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-SKY\n\t(LOC GLOBAL-OBJECTS)\n\t(SYNONYM SKY CEILING)\n\t(FLAGS FL-HAS-SDESC)\n\t(ACTION RT-TH-SKY)\n>",
   "referencedBy": [
    "RT-TH-SKY"
   ]
  },
  "TH-TIME": {
   "name": "TH-TIME",
   "file": "global.zil",
   "line": 481,
   "endLine": 486,
   "desc": "time",
   "ldesc": null,
   "fdesc": null,
   "loc": "GENERIC-OBJECTS",
   "flags": [],
   "synonyms": [
    "TURN",
    "TURNS",
    "MINUTE",
    "MINUTES",
    "MIN",
    "HOUR",
    "HOURS"
   ],
   "adjectives": [
    "INT.NUM"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-TIME\n\t(LOC GENERIC-OBJECTS)\n\t(DESC \"time\")\n\t(SYNONYM TURN TURNS MINUTE MINUTES MIN HOUR HOURS)\n\t(ADJECTIVE INT.NUM)\n>",
   "referencedBy": [
    "V-WAIT"
   ]
  },
  "LG-WALL": {
   "name": "LG-WALL",
   "file": "global.zil",
   "line": 492,
   "endLine": 497,
   "desc": "wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "WALL",
    "WALLS",
    "BULKHEAD"
   ],
   "adjectives": [
    "FORE",
    "AFT",
    "PORT",
    "STARBOARD"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LG-WALL\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"wall\")\n\t(SYNONYM WALL WALLS BULKHEAD)\n\t(ADJECTIVE FORE AFT PORT STARBOARD)\n>",
   "referencedBy": [
    "RT-WELD-CRACK"
   ]
  },
  "TH-FLATBED": {
   "name": "TH-FLATBED",
   "file": "global.zil",
   "line": 503,
   "endLine": 508,
   "desc": "Flatbed",
   "ldesc": null,
   "fdesc": null,
   "loc": "GENERIC-OBJECTS",
   "flags": [
    "FL-NO-ARTICLE"
   ],
   "synonyms": [
    "FLATBED"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-FLATBED\n\t(LOC GENERIC-OBJECTS)\n\t(DESC \"Flatbed\")\n\t(FLAGS FL-NO-ARTICLE)\n\t(SYNONYM FLATBED)\n>",
   "referencedBy": [
    "RT-CH-COFFEY"
   ]
  },
  "TH-UFO": {
   "name": "TH-UFO",
   "file": "global.zil",
   "line": 514,
   "endLine": 518,
   "desc": "UFO",
   "ldesc": null,
   "fdesc": null,
   "loc": "GENERIC-OBJECTS",
   "flags": [],
   "synonyms": [
    "UFO"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-UFO\n\t(LOC GENERIC-OBJECTS)\n\t(DESC \"UFO\")\n\t(SYNONYM UFO)\n>",
   "referencedBy": [
    "RT-CH-ONE-NIGHT"
   ]
  },
  "LG-DEEPCORE": {
   "name": "LG-DEEPCORE",
   "file": "global.zil",
   "line": 524,
   "endLine": 529,
   "desc": "Deepcore",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "DEEPCORE"
   ],
   "adjectives": [],
   "action": "RT-LG-DEEPCORE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LG-DEEPCORE\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"Deepcore\")\n\t(SYNONYM DEEPCORE)\n\t(ACTION RT-LG-DEEPCORE)\n>",
   "referencedBy": [
    "RT-RM-TROUGH-LIP"
   ]
  },
  "LG-TROUGH": {
   "name": "LG-TROUGH",
   "file": "global.zil",
   "line": 546,
   "endLine": 551,
   "desc": "Cayman trough",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "TROUGH"
   ],
   "adjectives": [],
   "action": "RT-LG-TROUGH",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LG-TROUGH\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"Cayman trough\")\n\t(SYNONYM TROUGH)\n\t(ACTION RT-LG-TROUGH)\n>",
   "referencedBy": []
  },
  "LG-MONTANA": {
   "name": "LG-MONTANA",
   "file": "global.zil",
   "line": 568,
   "endLine": 574,
   "desc": "Montana",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "MONTANA",
    "SUBMARINE",
    "SUB"
   ],
   "adjectives": [
    "NAVY",
    "USS",
    "OHIO",
    "CLASS"
   ],
   "action": "RT-LG-MONTANA",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LG-MONTANA\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"Montana\")\n\t(SYNONYM MONTANA SUBMARINE SUB)\n\t(ADJECTIVE NAVY USS OHIO CLASS)\n\t(ACTION RT-LG-MONTANA)\n>",
   "referencedBy": [
    "RT-I-DETONATOR",
    "RT-RM-OCEAN-WEST",
    "RT-CH-COFFEY",
    "RT-RM-CAB-THREE"
   ]
  },
  "LG-OUTLET": {
   "name": "LG-OUTLET",
   "file": "global.zil",
   "line": 591,
   "endLine": 596,
   "desc": "outlet",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "OUTLET",
    "SOCKET"
   ],
   "adjectives": [
    "WALL",
    "ELECTRICAL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LG-OUTLET\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"outlet\")\n\t(SYNONYM OUTLET SOCKET)\n\t(ADJECTIVE WALL ELECTRICAL)\n>",
   "referencedBy": []
  },
  "CH-PLAYER": {
   "name": "CH-PLAYER",
   "file": "misc.zil",
   "line": 17,
   "endLine": 27,
   "desc": "yourself",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-COMMAND-MODULE",
   "flags": [
    "FL-ALIVE",
    "FL-NO-DESC",
    "FL-NO-ARTICLE",
    "FL-OPEN",
    "FL-PERSON",
    "FL-SEARCH",
    "FL-SEEN",
    "FL-TOUCHED"
   ],
   "synonyms": [
    "ME",
    "MYSELF",
    "SELF",
    "BUD",
    "BRIGMAN"
   ],
   "adjectives": [
    "BUD"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "MENU": [
     "me"
    ]
   },
   "contents": [
    "TH-KNIFE",
    "TH-THERMOMETER"
   ],
   "source": "<OBJECT CH-PLAYER\n\t(LOC RM-COMMAND-MODULE)\n\t(DESC \"yourself\")\n\t(MENU \"me\")\n\t(SYNONYM ME MYSELF SELF BUD BRIGMAN)\n\t(ADJECTIVE BUD)\n\t(FLAGS\n\t\tFL-ALIVE FL-NO-DESC FL-NO-ARTICLE FL-OPEN FL-PERSON FL-SEARCH FL-SEEN\n\t\tFL-TOUCHED\n\t)\n>",
   "referencedBy": [
    "RT-TH-PURPLE-BUTTON",
    "RT-TH-FUSCHIA-BUTTON",
    "RT-LG-DGS-DOOR",
    "RT-I-TEMP",
    "RT-PRINT-ARTICLE",
    "RT-PRINT-OBJ",
    "RT-PRINT-VERB",
    "THIS-IS-IT",
    "CLOCKER",
    "RT-TO-TRENCH-BOTTOM",
    "RT-I-OUT-OF-AIR-2",
    "RT-CH-COFFEY",
    "RT-TH-DRY-SUIT",
    "RT-TH-LIFT-BAG",
    "RT-TH-RED-BUTTON",
    "RT-NO-RESPONSE-MSG",
    "RT-FOOLISH-TO-TALK?",
    "RT-DESCRIBE-ROOM",
    "RT-EMPTY-MSG",
    "V-TELL-ABOUT",
    "V-THANK"
   ]
  },
  "LG-MIDSHIP-HATCH": {
   "name": "LG-MIDSHIP-HATCH",
   "file": "montana.zil",
   "line": 60,
   "endLine": 67,
   "desc": "midship hatch",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "FL-DOOR"
   ],
   "synonyms": [
    "HATCH"
   ],
   "adjectives": [
    "MIDSHIP"
   ],
   "action": "RT-LG-MIDSHIP-HATCH",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LG-MIDSHIP-HATCH\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"midship hatch\")\n\t(FLAGS FL-DOOR)\n\t(SYNONYM HATCH)\n\t(ADJECTIVE MIDSHIP)\n\t(ACTION RT-LG-MIDSHIP-HATCH)\n>",
   "referencedBy": [
    "RT-LG-MIDSHIP-HATCH",
    "RT-TH-LIFT-BAG",
    "RT-TH-RED-BUTTON"
   ]
  },
  "TH-MISSILE": {
   "name": "TH-MISSILE",
   "file": "montana.zil",
   "line": 173,
   "endLine": 179,
   "desc": "missile",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-MISSILE-HATCH",
   "flags": [
    "FL-NO-DESC",
    "FL-SURFACE",
    "FL-SEARCH"
   ],
   "synonyms": [
    "MISSILE"
   ],
   "adjectives": [],
   "action": "RT-TH-MISSILE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "TH-MISSILE-TIMER",
    "TH-MISSILE-PANEL"
   ],
   "source": "<OBJECT TH-MISSILE\n\t(LOC RM-MISSILE-HATCH)\n\t(DESC \"missile\")\n\t(FLAGS FL-NO-DESC FL-SURFACE FL-SEARCH)\n\t(SYNONYM MISSILE)\n\t(ACTION RT-TH-MISSILE)\n>",
   "referencedBy": []
  },
  "TH-MISSILE-TIMER": {
   "name": "TH-MISSILE-TIMER",
   "file": "montana.zil",
   "line": 185,
   "endLine": 192,
   "desc": "timer",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-MISSILE",
   "flags": [
    "FL-NO-DESC"
   ],
   "synonyms": [
    "TIMER"
   ],
   "adjectives": [
    "MISSILE"
   ],
   "action": "RT-TH-MISSILE-TIMER",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-MISSILE-TIMER\n\t(LOC TH-MISSILE)\n\t(DESC \"timer\")\n\t(FLAGS FL-NO-DESC)\n\t(SYNONYM TIMER)\n\t(ADJECTIVE MISSILE)\n\t(ACTION RT-TH-MISSILE-TIMER)\n>",
   "referencedBy": [
    "RT-CH-COFFEY"
   ]
  },
  "TH-MISSILE-PANEL": {
   "name": "TH-MISSILE-PANEL",
   "file": "montana.zil",
   "line": 198,
   "endLine": 205,
   "desc": "access panel",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-MISSILE",
   "flags": [
    "FL-CONTAINER",
    "FL-LOCKED",
    "FL-OPENABLE",
    "FL-SEARCH"
   ],
   "synonyms": [
    "PANEL",
    "HATCH",
    "PLATE"
   ],
   "adjectives": [
    "MISSILE",
    "ACCESS",
    "COVER"
   ],
   "action": "RT-TH-MISSILE-PANEL",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "TH-WIRES",
    "TH-RED-WIRE",
    "TH-BLUE-WIRE",
    "TH-GREEN-WIRE",
    "TH-YELLOW-WIRE",
    "TH-ORANGE-WIRE",
    "TH-WHITE-WIRE"
   ],
   "source": "<OBJECT TH-MISSILE-PANEL\n\t(LOC TH-MISSILE)\n\t(DESC \"access panel\")\n\t(FLAGS FL-CONTAINER FL-LOCKED FL-OPENABLE FL-SEARCH)\n\t(SYNONYM PANEL HATCH PLATE)\n\t(ADJECTIVE MISSILE ACCESS COVER)\n\t(ACTION RT-TH-MISSILE-PANEL)\n>",
   "referencedBy": [
    "RT-MATCH-KEY"
   ]
  },
  "TH-WIRES": {
   "name": "TH-WIRES",
   "file": "montana.zil",
   "line": 216,
   "endLine": 222,
   "desc": "wires",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-MISSILE-PANEL",
   "flags": [
    "FL-NO-DESC"
   ],
   "synonyms": [
    "WIRES"
   ],
   "adjectives": [],
   "action": "RT-TH-WIRES",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-WIRES\n\t(LOC TH-MISSILE-PANEL)\n\t(DESC \"wires\")\n\t(FLAGS FL-NO-DESC)\n\t(SYNONYM WIRES)\n\t(ACTION RT-TH-WIRES)\n>",
   "referencedBy": []
  },
  "TH-RED-WIRE": {
   "name": "TH-RED-WIRE",
   "file": "montana.zil",
   "line": 241,
   "endLine": 247,
   "desc": "red wire",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-MISSILE-PANEL",
   "flags": [],
   "synonyms": [
    "WIRE"
   ],
   "adjectives": [
    "RED"
   ],
   "action": "RT-TH-WIRE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-RED-WIRE\n\t(LOC TH-MISSILE-PANEL)\n\t(DESC \"red wire\")\n\t(SYNONYM WIRE)\n\t(ADJECTIVE RED)\n\t(ACTION RT-TH-WIRE)\n>",
   "referencedBy": [
    "RT-CORRECT-WIRE?"
   ]
  },
  "TH-BLUE-WIRE": {
   "name": "TH-BLUE-WIRE",
   "file": "montana.zil",
   "line": 249,
   "endLine": 255,
   "desc": "blue wire",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-MISSILE-PANEL",
   "flags": [],
   "synonyms": [
    "WIRE"
   ],
   "adjectives": [
    "BLUE"
   ],
   "action": "RT-TH-WIRE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-BLUE-WIRE\n\t(LOC TH-MISSILE-PANEL)\n\t(DESC \"blue wire\")\n\t(SYNONYM WIRE)\n\t(ADJECTIVE BLUE)\n\t(ACTION RT-TH-WIRE)\n>",
   "referencedBy": [
    "RT-CORRECT-WIRE?"
   ]
  },
  "TH-GREEN-WIRE": {
   "name": "TH-GREEN-WIRE",
   "file": "montana.zil",
   "line": 257,
   "endLine": 263,
   "desc": "green wire",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-MISSILE-PANEL",
   "flags": [],
   "synonyms": [
    "WIRE"
   ],
   "adjectives": [
    "GREEN"
   ],
   "action": "RT-TH-WIRE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-GREEN-WIRE\n\t(LOC TH-MISSILE-PANEL)\n\t(DESC \"green wire\")\n\t(SYNONYM WIRE)\n\t(ADJECTIVE GREEN)\n\t(ACTION RT-TH-WIRE)\n>",
   "referencedBy": [
    "RT-CORRECT-WIRE?"
   ]
  },
  "TH-YELLOW-WIRE": {
   "name": "TH-YELLOW-WIRE",
   "file": "montana.zil",
   "line": 265,
   "endLine": 271,
   "desc": "yellow wire",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-MISSILE-PANEL",
   "flags": [],
   "synonyms": [
    "WIRE"
   ],
   "adjectives": [
    "YELLOW"
   ],
   "action": "RT-TH-WIRE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-YELLOW-WIRE\n\t(LOC TH-MISSILE-PANEL)\n\t(DESC \"yellow wire\")\n\t(SYNONYM WIRE)\n\t(ADJECTIVE YELLOW)\n\t(ACTION RT-TH-WIRE)\n>",
   "referencedBy": [
    "RT-CORRECT-WIRE?"
   ]
  },
  "TH-ORANGE-WIRE": {
   "name": "TH-ORANGE-WIRE",
   "file": "montana.zil",
   "line": 273,
   "endLine": 279,
   "desc": "orange wire",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-MISSILE-PANEL",
   "flags": [],
   "synonyms": [
    "WIRE"
   ],
   "adjectives": [
    "ORANGE"
   ],
   "action": "RT-TH-WIRE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-ORANGE-WIRE\n\t(LOC TH-MISSILE-PANEL)\n\t(DESC \"orange wire\")\n\t(SYNONYM WIRE)\n\t(ADJECTIVE ORANGE)\n\t(ACTION RT-TH-WIRE)\n>",
   "referencedBy": [
    "RT-CORRECT-WIRE?"
   ]
  },
  "TH-WHITE-WIRE": {
   "name": "TH-WHITE-WIRE",
   "file": "montana.zil",
   "line": 281,
   "endLine": 287,
   "desc": "white wire",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-MISSILE-PANEL",
   "flags": [],
   "synonyms": [
    "WIRE"
   ],
   "adjectives": [
    "WHITE"
   ],
   "action": "RT-TH-WIRE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-WHITE-WIRE\n\t(LOC TH-MISSILE-PANEL)\n\t(DESC \"white wire\")\n\t(SYNONYM WIRE)\n\t(ADJECTIVE WHITE)\n\t(ACTION RT-TH-WIRE)\n>",
   "referencedBy": [
    "RT-CORRECT-WIRE?"
   ]
  },
  "TH-WIRE-CUTTERS": {
   "name": "TH-WIRE-CUTTERS",
   "file": "montana.zil",
   "line": 508,
   "endLine": 515,
   "desc": "wire cutters",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-ELEC-SHOP-DRAWER",
   "flags": [
    "FL-TAKEABLE",
    "FL-KNIFE"
   ],
   "synonyms": [
    "CUTTERS"
   ],
   "adjectives": [
    "WIRE"
   ],
   "action": "RT-TH-WIRE-CUTTERS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-WIRE-CUTTERS\n\t(LOC TH-ELEC-SHOP-DRAWER)\n\t(DESC \"wire cutters\")\n\t(FLAGS FL-TAKEABLE FL-KNIFE)\n\t(SYNONYM CUTTERS)\n\t(ADJECTIVE WIRE)\n\t(ACTION RT-TH-WIRE-CUTTERS)\n>",
   "referencedBy": [
    "RT-TH-WIRE"
   ]
  },
  "TH-MISSILE-ACCESS-KEY": {
   "name": "TH-MISSILE-ACCESS-KEY",
   "file": "montana.zil",
   "line": 739,
   "endLine": 746,
   "desc": "access key",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-MISSILE-ROOM",
   "flags": [
    "FL-KEY",
    "FL-TAKEABLE"
   ],
   "synonyms": [
    "KEY"
   ],
   "adjectives": [
    "MISSILE",
    "ACCESS"
   ],
   "action": "RT-TH-MISSILE-ACCESS-KEY",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-MISSILE-ACCESS-KEY\n\t(LOC RM-MISSILE-ROOM)\n\t(DESC \"access key\")\n\t(FLAGS FL-KEY FL-TAKEABLE)\n\t(SYNONYM KEY)\n\t(ADJECTIVE MISSILE ACCESS)\n\t(ACTION RT-TH-MISSILE-ACCESS-KEY)\n>",
   "referencedBy": [
    "RT-CH-COFFEY",
    "RT-MATCH-KEY"
   ]
  },
  "LG-BUCKLED-DOOR": {
   "name": "LG-BUCKLED-DOOR",
   "file": "montana.zil",
   "line": 924,
   "endLine": 931,
   "desc": "door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "FL-DOOR",
    "FL-OPENABLE"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "BUCKLED",
    "JAMMED"
   ],
   "action": "RT-LG-BUCKLED-DOOR",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LG-BUCKLED-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"door\")\n\t(FLAGS FL-DOOR FL-OPENABLE)\n\t(SYNONYM DOOR)\n\t(ADJECTIVE BUCKLED JAMMED)\n\t(ACTION RT-LG-BUCKLED-DOOR)\n>",
   "referencedBy": [
    "RT-THRU-BUCKLED-DOOR",
    "RT-TH-PLASTIQUE",
    "RT-I-DETONATOR",
    "RT-RM-SUB-BAY"
   ]
  },
  "TH-PHOTOGRAPH": {
   "name": "TH-PHOTOGRAPH",
   "file": "montana.zil",
   "line": 1051,
   "endLine": 1058,
   "desc": "photograph",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-CAPTAINS-ROOM",
   "flags": [
    "FL-NO-DESC"
   ],
   "synonyms": [
    "PHOTOGRAPH",
    "PICTURE",
    "FRAME"
   ],
   "adjectives": [
    "FRAMED"
   ],
   "action": "RT-TH-PHOTOGRAPH",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-PHOTOGRAPH\n\t(LOC RM-CAPTAINS-ROOM)\n\t(DESC \"photograph\")\n\t(FLAGS FL-NO-DESC)\n\t(SYNONYM PHOTOGRAPH PICTURE FRAME)\n\t(ADJECTIVE FRAMED)\n\t(ACTION RT-TH-PHOTOGRAPH)\n>",
   "referencedBy": [
    "RT-TH-PHOTOGRAPH"
   ]
  },
  "TH-SAFE": {
   "name": "TH-SAFE",
   "file": "montana.zil",
   "line": 1096,
   "endLine": 1103,
   "desc": "safe",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-CAPTAINS-ROOM",
   "flags": [
    "FL-CONTAINER",
    "FL-LOCKED",
    "FL-NO-DESC",
    "FL-OPENABLE",
    "FL-SEARCH"
   ],
   "synonyms": [
    "SAFE",
    "DIAL"
   ],
   "adjectives": [
    "WALL"
   ],
   "action": "RT-TH-SAFE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "TH-PLASTIC-CARD"
   ],
   "source": "<OBJECT TH-SAFE\n\t(LOC RM-CAPTAINS-ROOM)\n\t(DESC \"safe\")\n\t(FLAGS FL-CONTAINER FL-LOCKED FL-NO-DESC FL-OPENABLE FL-SEARCH)\n\t(SYNONYM SAFE DIAL)\n\t(ADJECTIVE WALL)\n\t(ACTION RT-TH-SAFE)\n>",
   "referencedBy": [
    "RT-TH-PHOTOGRAPH",
    "RT-TH-SAFE",
    "RT-CH-COFFEY"
   ]
  },
  "TH-PLASTIC-CARD": {
   "name": "TH-PLASTIC-CARD",
   "file": "montana.zil",
   "line": 1201,
   "endLine": 1208,
   "desc": "plastic card",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-SAFE",
   "flags": [
    "FL-READABLE",
    "FL-TAKEABLE"
   ],
   "synonyms": [
    "CARD",
    "CODE",
    "CODES"
   ],
   "adjectives": [
    "PLASTIC",
    "WIRING"
   ],
   "action": "RT-TH-PLASTIC-CARD",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-PLASTIC-CARD\n\t(LOC TH-SAFE)\n\t(DESC \"plastic card\")\n\t(FLAGS FL-READABLE FL-TAKEABLE)\n\t(SYNONYM CARD CODE CODES)\n\t(ADJECTIVE PLASTIC WIRING)\n\t(ACTION RT-TH-PLASTIC-CARD)\n>",
   "referencedBy": [
    "RT-RM-SUB-BAY",
    "RT-CH-COFFEY"
   ]
  },
  "TH-PLASTIQUE": {
   "name": "TH-PLASTIQUE",
   "file": "montana.zil",
   "line": 1227,
   "endLine": 1235,
   "desc": "plastique",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-DRILL-ROOM",
   "flags": [
    "FL-SURFACE",
    "FL-TAKEABLE",
    "FL-SEARCH"
   ],
   "synonyms": [
    "PLASTIQUE",
    "EXPLOSIVE",
    "TAPE"
   ],
   "adjectives": [
    "PLASTIC"
   ],
   "action": "RT-TH-PLASTIQUE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OWNER": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-PLASTIQUE\n\t(LOC RM-DRILL-ROOM)\n\t(DESC \"plastique\")\n\t(FLAGS FL-SURFACE FL-TAKEABLE FL-SEARCH)\n\t(SYNONYM PLASTIQUE EXPLOSIVE TAPE)\n\t(ADJECTIVE PLASTIC)\n\t(OWNER 0)\n\t(ACTION RT-TH-PLASTIQUE)\n>",
   "referencedBy": [
    "RT-TH-PLASTIQUE",
    "RT-TH-DETONATOR",
    "RT-I-DETONATOR"
   ]
  },
  "TH-DETONATOR": {
   "name": "TH-DETONATOR",
   "file": "montana.zil",
   "line": 1289,
   "endLine": 1295,
   "desc": "detonator",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-DRILL-ROOM",
   "flags": [
    "FL-TAKEABLE"
   ],
   "synonyms": [
    "DETONATOR",
    "TIMER",
    "DIAL",
    "SWITCH"
   ],
   "adjectives": [],
   "action": "RT-TH-DETONATOR",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-DETONATOR\n\t(LOC RM-DRILL-ROOM)\n\t(DESC \"detonator\")\n\t(FLAGS FL-TAKEABLE)\n\t(SYNONYM DETONATOR TIMER DIAL SWITCH)\n\t(ACTION RT-TH-DETONATOR)\n>",
   "referencedBy": [
    "RT-TH-PLASTIQUE",
    "RT-TH-DETONATOR",
    "RT-I-DETONATOR"
   ]
  },
  "TH-CATFISH-LOCKER": {
   "name": "TH-CATFISH-LOCKER",
   "file": "return1.zil",
   "line": 15,
   "endLine": 23,
   "desc": "locker",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-PERSONAL-STORAGE-2",
   "flags": [
    "FL-SEARCH",
    "FL-TAKEABLE",
    "FL-CONTAINER",
    "FL-OPENABLE"
   ],
   "synonyms": [
    "LOCKER"
   ],
   "adjectives": [
    "CATFISH"
   ],
   "action": "RT-TH-CATFISH-LOCKER",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "5"
    ]
   },
   "contents": [
    "TH-STEEL-BOX",
    "TH-CLUE-PAPER"
   ],
   "source": "<OBJECT TH-CATFISH-LOCKER\n\t(LOC RM-PERSONAL-STORAGE-2)\n\t(DESC \"locker\")\n\t(FLAGS FL-SEARCH FL-TAKEABLE FL-CONTAINER FL-OPENABLE)\n\t(SYNONYM LOCKER)\n\t(ADJECTIVE CATFISH)\n\t(SIZE 5)\n\t(ACTION RT-TH-CATFISH-LOCKER)\n>",
   "referencedBy": []
  },
  "TH-STEEL-BOX": {
   "name": "TH-STEEL-BOX",
   "file": "return1.zil",
   "line": 29,
   "endLine": 37,
   "desc": "box",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-CATFISH-LOCKER",
   "flags": [
    "FL-SEARCH",
    "FL-TAKEABLE",
    "FL-CONTAINER",
    "FL-OPENABLE",
    "FL-LOCKED"
   ],
   "synonyms": [
    "BOX"
   ],
   "adjectives": [
    "STEEL",
    "CATFISH"
   ],
   "action": "RT-TH-STEEL-BOX",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "5"
    ]
   },
   "contents": [
    "TH-PASSPORT",
    "TH-DISCHARGE"
   ],
   "source": "<OBJECT TH-STEEL-BOX\n\t(LOC TH-CATFISH-LOCKER)\n\t(DESC \"box\")\n\t(FLAGS FL-SEARCH FL-TAKEABLE FL-CONTAINER FL-OPENABLE FL-LOCKED)\n\t(SYNONYM BOX)\n\t(ADJECTIVE STEEL CATFISH)\n\t(SIZE 5)\n\t(ACTION RT-TH-STEEL-BOX)\n>",
   "referencedBy": [
    "RT-MATCH-KEY"
   ]
  },
  "TH-CLUE-PAPER": {
   "name": "TH-CLUE-PAPER",
   "file": "return1.zil",
   "line": 43,
   "endLine": 50,
   "desc": "paper",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-CATFISH-LOCKER",
   "flags": [
    "FL-TAKEABLE",
    "FL-READABLE"
   ],
   "synonyms": [
    "PAPER"
   ],
   "adjectives": [],
   "action": "RT-TH-CLUE-PAPER",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-CLUE-PAPER\n\t(LOC TH-CATFISH-LOCKER ;TH-STEEL-BOX)\n\t(DESC \"paper\")\n\t(FLAGS FL-TAKEABLE FL-READABLE)\n\t(SYNONYM PAPER)\n\t(SIZE 5)\n\t(ACTION RT-TH-CLUE-PAPER)\n>",
   "referencedBy": []
  },
  "TH-STEEL-KEY": {
   "name": "TH-STEEL-KEY",
   "file": "return1.zil",
   "line": 60,
   "endLine": 68,
   "desc": "steel key",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "FL-KEY",
    "FL-SEARCH",
    "FL-TAKEABLE"
   ],
   "synonyms": [
    "KEY"
   ],
   "adjectives": [
    "STEEL"
   ],
   "action": "RT-TH-STEEL-KEY",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OWNER": [
     "TH-DRYER"
    ],
    "SIZE": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-STEEL-KEY\n\t(DESC \"steel key\")\n\t(FLAGS FL-KEY FL-SEARCH FL-TAKEABLE)\n\t(SYNONYM KEY)\n\t(ADJECTIVE STEEL)\n\t(OWNER TH-DRYER)\n\t(SIZE 5)\n\t(ACTION RT-TH-STEEL-KEY)\n>",
   "referencedBy": [
    "RT-TH-STEEL-KEY",
    "RT-TH-DRYER",
    "RT-MATCH-KEY"
   ]
  },
  "TH-DRYER": {
   "name": "TH-DRYER",
   "file": "return1.zil",
   "line": 94,
   "endLine": 101,
   "desc": "dryer",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-LAUNDRY",
   "flags": [
    "FL-CONTAINER",
    "FL-OPENABLE",
    "FL-SEARCH",
    "FL-TAKEABLE"
   ],
   "synonyms": [
    "DRYER"
   ],
   "adjectives": [],
   "action": "RT-TH-DRYER",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-DRYER\n\t(LOC RM-LAUNDRY)\n\t(DESC \"dryer\")\n\t(FLAGS FL-CONTAINER FL-OPENABLE FL-SEARCH FL-TAKEABLE)\n\t(SYNONYM DRYER)\n\t(SIZE 5)\n\t(ACTION RT-TH-DRYER)\n>",
   "referencedBy": [
    "RT-TH-STEEL-KEY",
    "RT-TH-DRYER"
   ]
  },
  "TH-PASSPORT": {
   "name": "TH-PASSPORT",
   "file": "return1.zil",
   "line": 118,
   "endLine": 126,
   "desc": "passport",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-STEEL-BOX",
   "flags": [
    "FL-SEARCH",
    "FL-TAKEABLE"
   ],
   "synonyms": [
    "PASSPORT"
   ],
   "adjectives": [
    "CATFISH"
   ],
   "action": "RT-TH-PASSPORT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-PASSPORT\n\t(LOC TH-STEEL-BOX)\n\t(DESC \"passport\")\n\t(FLAGS FL-SEARCH FL-TAKEABLE)\n\t(SYNONYM PASSPORT)\n\t(ADJECTIVE CATFISH)\n\t(SIZE 5)\n\t(ACTION RT-TH-PASSPORT)\n>",
   "referencedBy": []
  },
  "TH-DISCHARGE": {
   "name": "TH-DISCHARGE",
   "file": "return1.zil",
   "line": 142,
   "endLine": 151,
   "desc": "discharge",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-STEEL-BOX",
   "flags": [
    "FL-SEARCH",
    "FL-TAKEABLE"
   ],
   "synonyms": [
    "DISCHARGE"
   ],
   "adjectives": [
    "CATFISH",
    "MILITARY",
    "MARINE",
    "MARINES",
    "HONORABLE",
    "PAPERS"
   ],
   "action": "RT-TH-DISCHARGE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OWNER": [
     "CH-CATFISH"
    ],
    "SIZE": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-DISCHARGE\n\t(LOC TH-STEEL-BOX)\n\t(DESC \"discharge\")\n\t(FLAGS FL-SEARCH FL-TAKEABLE)\n\t(SYNONYM DISCHARGE)\n\t(ADJECTIVE CATFISH MILITARY MARINE MARINES HONORABLE PAPERS)\n\t(OWNER CH-CATFISH)\n\t(SIZE 5)\n\t(ACTION RT-TH-DISCHARGE)\n>",
   "referencedBy": []
  },
  "TH-GUN": {
   "name": "TH-GUN",
   "file": "return2.zil",
   "line": 16,
   "endLine": 24,
   "desc": "gun",
   "ldesc": null,
   "fdesc": null,
   "loc": "CH-COFFEY",
   "flags": [
    "FL-TAKEABLE"
   ],
   "synonyms": [
    "GUN",
    "PISTOL"
   ],
   "adjectives": [],
   "action": "RT-TH-GUN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OWNER": [
     "CH-COFFEY"
    ],
    "SIZE": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-GUN\n\t(LOC CH-COFFEY)\n\t(DESC \"gun\")\n\t(FLAGS FL-TAKEABLE)\n\t(SYNONYM GUN PISTOL)\n\t(OWNER CH-COFFEY)\n\t(SIZE 5)\n\t(ACTION RT-TH-GUN)\n>",
   "referencedBy": [
    "RT-CH-COFFEY"
   ]
  },
  "TH-FBS-SUIT": {
   "name": "TH-FBS-SUIT",
   "file": "return2.zil",
   "line": 30,
   "endLine": 38,
   "desc": "FBS suit",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-DIVE-LOCKER",
   "flags": [
    "FL-CLOTHING",
    "FL-TAKEABLE"
   ],
   "synonyms": [
    "SUIT"
   ],
   "adjectives": [
    "FBS",
    "FLUID",
    "BREATHING",
    "SYSTEM"
   ],
   "action": "RT-TH-FBS-SUIT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-FBS-SUIT\n\t(LOC TH-DIVE-LOCKER)\n\t(DESC \"FBS suit\")\n\t(FLAGS FL-CLOTHING FL-TAKEABLE)\n\t(SYNONYM SUIT)\n\t(ADJECTIVE FBS FLUID BREATHING SYSTEM)\n\t(SIZE 5)\n\t(ACTION RT-TH-FBS-SUIT)\n>",
   "referencedBy": [
    "RT-I-TEMP",
    "RT-TO-TRENCH-BOTTOM"
   ]
  },
  "TH-DIVE-LOCKER": {
   "name": "TH-DIVE-LOCKER",
   "file": "return2.zil",
   "line": 44,
   "endLine": 52,
   "desc": "dive locker",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-SUB-BAY",
   "flags": [
    "FL-CONTAINER",
    "FL-LOCKED",
    "FL-OPENABLE",
    "FL-SEARCH",
    "FL-TRY-TAKE"
   ],
   "synonyms": [
    "LOCKER"
   ],
   "adjectives": [
    "DIVE"
   ],
   "action": "RT-TH-DIVE-LOCKER",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "5"
    ]
   },
   "contents": [
    "TH-FBS-SUIT",
    "TH-ELECTRONIC-LOCK"
   ],
   "source": "<OBJECT TH-DIVE-LOCKER\n\t(LOC RM-SUB-BAY)\n\t(DESC \"dive locker\")\n\t(FLAGS FL-CONTAINER FL-LOCKED FL-OPENABLE FL-SEARCH FL-TRY-TAKE)\n\t(SYNONYM LOCKER)\n\t(ADJECTIVE DIVE)\n\t(SIZE 5)\n\t(ACTION RT-TH-DIVE-LOCKER)\n>",
   "referencedBy": [
    "RT-I-OUT-OF-AIR-2"
   ]
  },
  "TH-ELECTRONIC-LOCK": {
   "name": "TH-ELECTRONIC-LOCK",
   "file": "return2.zil",
   "line": 65,
   "endLine": 72,
   "desc": "lock",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-DIVE-LOCKER",
   "flags": [],
   "synonyms": [
    "LOCK"
   ],
   "adjectives": [
    "ELECTRONIC"
   ],
   "action": "RT-TH-ELECTRONIC-LOCK",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-ELECTRONIC-LOCK\n\t(LOC TH-DIVE-LOCKER)\n\t(DESC \"lock\")\n\t(SYNONYM LOCK)\n\t(ADJECTIVE ELECTRONIC)\n\t(SIZE 5)\n\t(ACTION RT-TH-ELECTRONIC-LOCK)\n>",
   "referencedBy": []
  },
  "TH-DEVICE": {
   "name": "TH-DEVICE",
   "file": "return2.zil",
   "line": 78,
   "endLine": 86,
   "desc": "device",
   "ldesc": null,
   "fdesc": null,
   "loc": "CH-HIPPY",
   "flags": [],
   "synonyms": [
    "DEVICE"
   ],
   "adjectives": [
    "REMOTE",
    "ELECTRONIC"
   ],
   "action": "RT-TH-DEVICE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OWNER": [
     "CH-HIPPY"
    ],
    "SIZE": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-DEVICE\n\t(LOC CH-HIPPY)\n\t(DESC \"device\")\n\t(SYNONYM DEVICE)\n\t(ADJECTIVE REMOTE ELECTRONIC)\n\t(OWNER CH-HIPPY)\n\t(SIZE 5)\n\t(ACTION RT-TH-DEVICE)\n>",
   "referencedBy": []
  },
  "TH-NITROGEN-TANK": {
   "name": "TH-NITROGEN-TANK",
   "file": "stopper.zil",
   "line": 94,
   "endLine": 102,
   "desc": "nitrogen tank",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-TRI-MIX-STORAGE",
   "flags": [
    "FL-NO-DESC",
    "FL-SURFACE",
    "FL-SEARCH"
   ],
   "synonyms": [
    "TANK",
    "BASE"
   ],
   "adjectives": [
    "NITROGEN",
    "STORAGE"
   ],
   "action": "RT-TH-NITROGEN-TANK",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "RT-GN-TANK"
    ]
   },
   "contents": [
    "TH-NIT-VALVE"
   ],
   "source": "<OBJECT TH-NITROGEN-TANK\n\t(LOC RM-TRI-MIX-STORAGE)\n\t(DESC \"nitrogen tank\")\n\t(FLAGS FL-NO-DESC FL-SURFACE FL-SEARCH)\n\t(SYNONYM TANK BASE)\n\t(ADJECTIVE NITROGEN STORAGE)\n\t(GENERIC RT-GN-TANK)\n\t(ACTION RT-TH-NITROGEN-TANK)\n>",
   "referencedBy": [
    "RT-TH-NITROGEN-TANK",
    "RT-TH-NIT-STOPPER",
    "RT-GN-TANK"
   ]
  },
  "TH-NIT-VALVE": {
   "name": "TH-NIT-VALVE",
   "file": "stopper.zil",
   "line": 165,
   "endLine": 173,
   "desc": "nitrogen valve",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-NITROGEN-TANK",
   "flags": [
    "FL-CONTAINER",
    "FL-NO-DESC",
    "FL-ON",
    "FL-OPEN",
    "FL-SEARCH"
   ],
   "synonyms": [
    "VALVE",
    "K-VALVE"
   ],
   "adjectives": [
    "NITROGEN",
    "K"
   ],
   "action": "RT-TH-NIT-VALVE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "RT-GN-VALVE"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-NIT-VALVE\n\t(LOC TH-NITROGEN-TANK)\n\t(DESC \"nitrogen valve\")\n\t(FLAGS FL-CONTAINER FL-NO-DESC FL-ON FL-OPEN FL-SEARCH)\n\t(SYNONYM VALVE K-VALVE)\n\t(ADJECTIVE NITROGEN K)\n\t(GENERIC RT-GN-VALVE)\n\t(ACTION RT-TH-NIT-VALVE)\n>",
   "referencedBy": [
    "RT-TH-NIT-VALVE",
    "RT-GN-VALVE"
   ]
  },
  "TH-NIT-STOPPER": {
   "name": "TH-NIT-STOPPER",
   "file": "stopper.zil",
   "line": 259,
   "endLine": 268,
   "desc": "nitrogen stopper",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-TRI-MIX-STORAGE",
   "flags": [
    "FL-INVISIBLE",
    "FL-NO-DESC",
    "FL-TAKEABLE"
   ],
   "synonyms": [
    "STOPPER"
   ],
   "adjectives": [
    "NITROGEN"
   ],
   "action": "RT-TH-NIT-STOPPER",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OWNER": [
     "TH-NITROGEN-TANK"
    ],
    "GENERIC": [
     "RT-GN-STOPPER"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-NIT-STOPPER\n\t(LOC RM-TRI-MIX-STORAGE)\n\t(DESC \"nitrogen stopper\")\n\t(FLAGS FL-INVISIBLE FL-NO-DESC FL-TAKEABLE)\n\t(SYNONYM STOPPER)\n\t(ADJECTIVE NITROGEN)\n\t(OWNER TH-NITROGEN-TANK)\t;\"Under nitrogen tank\"\n\t(GENERIC RT-GN-STOPPER)\n\t(ACTION RT-TH-NIT-STOPPER)\n>",
   "referencedBy": [
    "RT-TH-NITROGEN-TANK",
    "RT-TH-NIT-VALVE",
    "RT-TH-NIT-STOPPER",
    "RT-GET-STOPPER",
    "RT-GN-STOPPER"
   ]
  },
  "TH-OXYGEN-TANK": {
   "name": "TH-OXYGEN-TANK",
   "file": "stopper.zil",
   "line": 354,
   "endLine": 362,
   "desc": "oxygen tank",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-TRI-MIX-STORAGE",
   "flags": [
    "FL-NO-DESC",
    "FL-SURFACE",
    "FL-SEARCH"
   ],
   "synonyms": [
    "TANK",
    "BASE"
   ],
   "adjectives": [
    "OXYGEN",
    "STORAGE"
   ],
   "action": "RT-TH-OXYGEN-TANK",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "RT-GN-TANK"
    ]
   },
   "contents": [
    "TH-OXY-VALVE"
   ],
   "source": "<OBJECT TH-OXYGEN-TANK\n\t(LOC RM-TRI-MIX-STORAGE)\n\t(DESC \"oxygen tank\")\n\t(FLAGS FL-NO-DESC FL-SURFACE FL-SEARCH)\n\t(SYNONYM TANK BASE)\n\t(ADJECTIVE OXYGEN STORAGE)\n\t(GENERIC RT-GN-TANK)\n\t(ACTION RT-TH-OXYGEN-TANK)\n>",
   "referencedBy": []
  },
  "TH-OXY-VALVE": {
   "name": "TH-OXY-VALVE",
   "file": "stopper.zil",
   "line": 375,
   "endLine": 383,
   "desc": "oxygen valve",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-OXYGEN-TANK",
   "flags": [
    "FL-CONTAINER",
    "FL-NO-DESC",
    "FL-OPEN",
    "FL-SEARCH"
   ],
   "synonyms": [
    "VALVE",
    "K-VALVE"
   ],
   "adjectives": [
    "OXYGEN",
    "K"
   ],
   "action": "RT-TH-OXY-VALVE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "RT-GN-VALVE"
    ]
   },
   "contents": [
    "TH-OXY-STOPPER"
   ],
   "source": "<OBJECT TH-OXY-VALVE\n\t(LOC TH-OXYGEN-TANK)\n\t(DESC \"oxygen valve\")\n\t(FLAGS FL-CONTAINER FL-NO-DESC FL-OPEN FL-SEARCH)\n\t(SYNONYM VALVE K-VALVE)\n\t(ADJECTIVE OXYGEN K)\n\t(GENERIC RT-GN-VALVE)\n\t(ACTION RT-TH-OXY-VALVE)\n>",
   "referencedBy": []
  },
  "TH-OXY-STOPPER": {
   "name": "TH-OXY-STOPPER",
   "file": "stopper.zil",
   "line": 389,
   "endLine": 397,
   "desc": "oxygen stopper",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-OXY-VALVE",
   "flags": [
    "FL-NO-DESC",
    "FL-TRY-TAKE"
   ],
   "synonyms": [
    "STOPPER"
   ],
   "adjectives": [
    "OXYGEN"
   ],
   "action": "RT-TH-OXY-STOPPER",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "RT-GN-STOPPER"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-OXY-STOPPER\n\t(LOC TH-OXY-VALVE)\n\t(DESC \"oxygen stopper\")\n\t(FLAGS FL-NO-DESC FL-TRY-TAKE)\n\t(SYNONYM STOPPER)\n\t(ADJECTIVE OXYGEN)\n\t(GENERIC RT-GN-STOPPER)\n\t(ACTION RT-TH-OXY-STOPPER)\n>",
   "referencedBy": []
  },
  "TH-HELIUM-TANK": {
   "name": "TH-HELIUM-TANK",
   "file": "stopper.zil",
   "line": 419,
   "endLine": 427,
   "desc": "helium tank",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-TRI-MIX-STORAGE",
   "flags": [
    "FL-NO-DESC",
    "FL-SURFACE",
    "FL-SEARCH"
   ],
   "synonyms": [
    "TANK",
    "BASE"
   ],
   "adjectives": [
    "HELIUM",
    "STORAGE"
   ],
   "action": "RT-TH-HELIUM-TANK",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "RT-GN-TANK"
    ]
   },
   "contents": [
    "TH-HEL-VALVE"
   ],
   "source": "<OBJECT TH-HELIUM-TANK\n\t(LOC RM-TRI-MIX-STORAGE)\n\t(DESC \"helium tank\")\n\t(FLAGS FL-NO-DESC FL-SURFACE FL-SEARCH)\n\t(SYNONYM TANK BASE)\n\t(ADJECTIVE HELIUM STORAGE)\n\t(GENERIC RT-GN-TANK)\n\t(ACTION RT-TH-HELIUM-TANK)\n>",
   "referencedBy": []
  },
  "TH-HEL-VALVE": {
   "name": "TH-HEL-VALVE",
   "file": "stopper.zil",
   "line": 440,
   "endLine": 448,
   "desc": "helium valve",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-HELIUM-TANK",
   "flags": [
    "FL-CONTAINER",
    "FL-NO-DESC",
    "FL-OPEN",
    "FL-SEARCH"
   ],
   "synonyms": [
    "VALVE",
    "K-VALVE"
   ],
   "adjectives": [
    "HELIUM",
    "K"
   ],
   "action": "RT-TH-HEL-VALVE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "RT-GN-VALVE"
    ]
   },
   "contents": [
    "TH-HEL-STOPPER"
   ],
   "source": "<OBJECT TH-HEL-VALVE\n\t(LOC TH-HELIUM-TANK)\n\t(DESC \"helium valve\")\n\t(FLAGS FL-CONTAINER FL-NO-DESC FL-OPEN FL-SEARCH)\n\t(SYNONYM VALVE K-VALVE)\n\t(ADJECTIVE HELIUM K)\n\t(GENERIC RT-GN-VALVE)\n\t(ACTION RT-TH-HEL-VALVE)\n>",
   "referencedBy": []
  },
  "TH-HEL-STOPPER": {
   "name": "TH-HEL-STOPPER",
   "file": "stopper.zil",
   "line": 454,
   "endLine": 462,
   "desc": "helium stopper",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-HEL-VALVE",
   "flags": [
    "FL-NO-DESC",
    "FL-TRY-TAKE"
   ],
   "synonyms": [
    "STOPPER"
   ],
   "adjectives": [
    "HELIUM"
   ],
   "action": "RT-TH-HEL-STOPPER",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "RT-GN-STOPPER"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-HEL-STOPPER\n\t(LOC TH-HEL-VALVE)\n\t(DESC \"helium stopper\")\n\t(FLAGS FL-NO-DESC FL-TRY-TAKE)\n\t(SYNONYM STOPPER)\n\t(ADJECTIVE HELIUM)\n\t(GENERIC RT-GN-STOPPER)\n\t(ACTION RT-TH-HEL-STOPPER)\n>",
   "referencedBy": []
  },
  "TH-BIN": {
   "name": "TH-BIN",
   "file": "stopper.zil",
   "line": 558,
   "endLine": 565,
   "desc": "bin",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-TOOL-ROOM",
   "flags": [
    "FL-CONTAINER",
    "FL-NO-DESC",
    "FL-OPENABLE",
    "FL-SEARCH"
   ],
   "synonyms": [
    "BIN",
    "BINS"
   ],
   "adjectives": [],
   "action": "RT-TH-BIN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "5",
     "CAPACITY",
     "5"
    ]
   },
   "contents": [
    "TH-DESCRAMBLER-CONTROL-BOX",
    "TH-MAGNET"
   ],
   "source": "<OBJECT TH-BIN\n\t(LOC RM-TOOL-ROOM)\n\t(DESC \"bin\")\n\t(SYNONYM BIN BINS)\n\t(FLAGS FL-CONTAINER FL-NO-DESC FL-OPENABLE FL-SEARCH)\n\t(SIZE 5 CAPACITY 5)\n\t(ACTION RT-TH-BIN)\n>",
   "referencedBy": []
  },
  "TH-MAGNET": {
   "name": "TH-MAGNET",
   "file": "stopper.zil",
   "line": 575,
   "endLine": 582,
   "desc": "probe",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-BIN",
   "flags": [
    "FL-SURFACE",
    "FL-SEARCH",
    "FL-TAKEABLE"
   ],
   "synonyms": [
    "MAGNET",
    "PROBE"
   ],
   "adjectives": [
    "MAGNETIC"
   ],
   "action": "RT-TH-MAGNET",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-MAGNET\n\t(LOC TH-BIN)\n\t(DESC \"probe\")\n\t(FLAGS FL-SURFACE FL-SEARCH FL-TAKEABLE)\n\t(SYNONYM MAGNET PROBE)\n\t(ADJECTIVE MAGNETIC)\n\t(ACTION RT-TH-MAGNET)\n>",
   "referencedBy": [
    "RT-TH-NITROGEN-TANK",
    "RT-TH-NIT-STOPPER",
    "RT-GET-STOPPER"
   ]
  },
  "TH-MOON-POOL": {
   "name": "TH-MOON-POOL",
   "file": "sub-bay.zil",
   "line": 145,
   "endLine": 152,
   "desc": "moon pool",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-SUB-BAY",
   "flags": [
    "FL-CONTAINER",
    "FL-OPEN",
    "FL-SEARCH",
    "FL-WATER"
   ],
   "synonyms": [
    "POOL"
   ],
   "adjectives": [
    "MOON"
   ],
   "action": "RT-TH-MOON-POOL",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-MOON-POOL\n\t(LOC RM-SUB-BAY)\n\t(DESC \"moon pool\")\n\t(FLAGS FL-CONTAINER FL-OPEN FL-SEARCH FL-WATER)\n\t(SYNONYM POOL)\n\t(ADJECTIVE MOON)\n\t(ACTION RT-TH-MOON-POOL)\n>",
   "referencedBy": [
    "RT-TH-LIFT-BAG"
   ]
  },
  "TH-FIRE": {
   "name": "TH-FIRE",
   "file": "sub-bay.zil",
   "line": 176,
   "endLine": 182,
   "desc": "fire",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "FL-CONTAINER",
    "FL-OPEN",
    "FL-SEARCH"
   ],
   "synonyms": [
    "FIRE"
   ],
   "adjectives": [],
   "action": "RT-TH-FIRE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-FIRE\n;\t(LOC RM-SUB-BAY)\n\t(DESC \"fire\")\n\t(FLAGS FL-CONTAINER FL-OPEN FL-SEARCH)\n\t(SYNONYM FIRE)\n\t(ACTION RT-TH-FIRE)\n>",
   "referencedBy": [
    "RT-I-CRANE-5",
    "RT-TH-FIRE"
   ]
  },
  "TH-WATER-HOSE": {
   "name": "TH-WATER-HOSE",
   "file": "sub-bay.zil",
   "line": 232,
   "endLine": 239,
   "desc": "hose",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-SUB-BAY",
   "flags": [
    "FL-CONTAINER",
    "FL-OPEN",
    "FL-SEARCH",
    "FL-TAKEABLE"
   ],
   "synonyms": [
    "HOSE"
   ],
   "adjectives": [
    "FRESH",
    "WATER"
   ],
   "action": "RT-TH-WATER-HOSE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "TH-NOZZLE"
   ],
   "source": "<OBJECT TH-WATER-HOSE\n\t(LOC RM-SUB-BAY)\n\t(DESC \"hose\")\n\t(FLAGS FL-CONTAINER FL-OPEN FL-SEARCH FL-TAKEABLE)\n\t(SYNONYM HOSE)\n\t(ADJECTIVE FRESH WATER)\n\t(ACTION RT-TH-WATER-HOSE)\n>",
   "referencedBy": [
    "RT-TH-FIRE",
    "RT-TH-NOZZLE"
   ]
  },
  "TH-NOZZLE": {
   "name": "TH-NOZZLE",
   "file": "sub-bay.zil",
   "line": 252,
   "endLine": 258,
   "desc": "nozzle",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-WATER-HOSE",
   "flags": [],
   "synonyms": [
    "NOZZLE"
   ],
   "adjectives": [
    "HOSE"
   ],
   "action": "RT-TH-NOZZLE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-NOZZLE\n\t(LOC TH-WATER-HOSE)\n\t(DESC \"nozzle\")\n\t(SYNONYM NOZZLE)\n\t(ADJECTIVE HOSE)\n\t(ACTION RT-TH-NOZZLE)\n>",
   "referencedBy": []
  },
  "TH-OXYGEN-CYLINDER": {
   "name": "TH-OXYGEN-CYLINDER",
   "file": "sub-bay.zil",
   "line": 279,
   "endLine": 286,
   "desc": "oxygen cylinder",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-SUB-BAY",
   "flags": [
    "FL-NO-DESC"
   ],
   "synonyms": [
    "CYLINDER"
   ],
   "adjectives": [
    "OXYGEN"
   ],
   "action": "RT-TH-OXYGEN-CYLINDER",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-OXYGEN-CYLINDER\n\t(LOC RM-SUB-BAY)\n\t(DESC \"oxygen cylinder\")\n\t(FLAGS FL-NO-DESC)\n\t(SYNONYM CYLINDER)\n\t(ADJECTIVE OXYGEN)\n\t(ACTION RT-TH-OXYGEN-CYLINDER)\n>",
   "referencedBy": []
  },
  "CH-LINDSEY": {
   "name": "CH-LINDSEY",
   "file": "sub-bay.zil",
   "line": 296,
   "endLine": 301,
   "desc": "Lindsey",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-COMMAND-MODULE",
   "flags": [
    "FL-ALIVE",
    "FL-FEMALE",
    "FL-NO-ARTICLE",
    "FL-OPEN",
    "FL-PERSON",
    "FL-SEARCH"
   ],
   "synonyms": [
    "LINDSEY",
    "WOMAN",
    "PERSON"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CH-LINDSEY\n\t(LOC RM-COMMAND-MODULE)\n\t(DESC \"Lindsey\")\n\t(FLAGS FL-ALIVE FL-FEMALE FL-NO-ARTICLE FL-OPEN FL-PERSON FL-SEARCH)\n\t(SYNONYM LINDSEY WOMAN PERSON)\n>",
   "referencedBy": [
    "RT-TH-FUSCHIA-BUTTON",
    "RT-RM-SUB-BAY",
    "RT-RM-CAB-THREE",
    "RT-I-CAB-FIXED",
    "RT-TH-CAB-HOOKAH"
   ]
  },
  "CH-COFFEY": {
   "name": "CH-COFFEY",
   "file": "sub-bay.zil",
   "line": 303,
   "endLine": 310,
   "desc": "Coffey",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-CORRIDOR",
   "flags": [
    "FL-ALIVE",
    "FL-NO-ARTICLE",
    "FL-NO-DESC",
    "FL-OPEN",
    "FL-PERSON",
    "FL-SEARCH"
   ],
   "synonyms": [
    "COFFEY",
    "DIVER",
    "MAN",
    "PERSON"
   ],
   "adjectives": [
    "NAVY"
   ],
   "action": "RT-CH-COFFEY",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "TH-GUN"
   ],
   "source": "<OBJECT CH-COFFEY\n\t(LOC RM-CORRIDOR)\n\t(DESC \"Coffey\")\n\t(FLAGS FL-ALIVE FL-NO-ARTICLE FL-NO-DESC FL-OPEN FL-PERSON FL-SEARCH)\n\t(SYNONYM COFFEY DIVER MAN PERSON)\n\t(ADJECTIVE NAVY)\n\t(ACTION RT-CH-COFFEY)\n>",
   "referencedBy": [
    "RT-I-CRANE-5",
    "RT-TH-PASSPORT",
    "RT-TH-DISCHARGE",
    "RT-RM-SUB-BAY",
    "RT-CH-COFFEY",
    "RT-RM-COMPRESSION-CHAMBER",
    "RT-LG-CHAMBER-HATCH",
    "RT-I-LEAVE-1",
    "RT-I-LEAVE-2",
    "RT-I-LEAVE-3",
    "RT-I-LEAVE-4",
    "RT-I-RETURN-4",
    "RT-I-UFO-MESSAGE",
    "RT-RM-CAB-THREE",
    "RT-RM-MESS-HALL"
   ]
  },
  "CH-ONE-NIGHT": {
   "name": "CH-ONE-NIGHT",
   "file": "sub-bay.zil",
   "line": 456,
   "endLine": 463,
   "desc": "One-night",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-CORRIDOR",
   "flags": [
    "FL-ALIVE",
    "FL-FEMALE",
    "FL-NO-ARTICLE",
    "FL-NO-DESC",
    "FL-OPEN",
    "FL-PERSON",
    "FL-SEARCH"
   ],
   "synonyms": [
    "NIGHT",
    "ONE-NIGHT",
    "WOMAN",
    "PERSON"
   ],
   "adjectives": [
    "ONE"
   ],
   "action": "RT-CH-ONE-NIGHT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CH-ONE-NIGHT\n\t(LOC RM-CORRIDOR)\n\t(DESC \"One-night\")\n\t(FLAGS FL-ALIVE FL-FEMALE FL-NO-ARTICLE FL-NO-DESC FL-OPEN FL-PERSON FL-SEARCH)\n\t(SYNONYM NIGHT ONE-NIGHT WOMAN PERSON)\n\t(ADJECTIVE ONE)\n\t(ACTION RT-CH-ONE-NIGHT)\n>",
   "referencedBy": [
    "RT-LG-CHAMBER-HATCH",
    "RT-I-LEAVE-1",
    "RT-I-LEAVE-2",
    "RT-I-RETURN-4"
   ]
  },
  "CH-HIPPY": {
   "name": "CH-HIPPY",
   "file": "sub-bay.zil",
   "line": 486,
   "endLine": 491,
   "desc": "Hippy",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-CORRIDOR",
   "flags": [
    "FL-ALIVE",
    "FL-NO-ARTICLE",
    "FL-NO-DESC",
    "FL-OPEN",
    "FL-PERSON",
    "FL-SEARCH"
   ],
   "synonyms": [
    "HIPPY",
    "MAN",
    "PERSON"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "TH-DEVICE"
   ],
   "source": "<OBJECT CH-HIPPY\n\t(LOC RM-CORRIDOR)\n\t(DESC \"Hippy\")\n\t(FLAGS FL-ALIVE FL-NO-ARTICLE FL-NO-DESC FL-OPEN FL-PERSON FL-SEARCH)\n\t(SYNONYM HIPPY MAN PERSON)\n>",
   "referencedBy": [
    "RT-I-CRANE-5",
    "RT-I-HIPPY-RETURN",
    "RT-I-OUT-OF-AIR-2",
    "RT-RM-COMPRESSION-CHAMBER",
    "RT-LG-CHAMBER-HATCH",
    "RT-I-LEAVE-1",
    "RT-I-LEAVE-2",
    "RT-I-LEAVE-3",
    "RT-I-LEAVE-4",
    "RT-I-RETURN-4",
    "RT-I-UFO-MESSAGE"
   ]
  },
  "CH-CATFISH": {
   "name": "CH-CATFISH",
   "file": "sub-bay.zil",
   "line": 493,
   "endLine": 499,
   "desc": "Catfish",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-COMMAND-MODULE",
   "flags": [
    "FL-ALIVE",
    "FL-NO-ARTICLE",
    "FL-OPEN",
    "FL-PERSON",
    "FL-SEARCH"
   ],
   "synonyms": [
    "CATFISH",
    "DEVRIES",
    "FISH",
    "MAN",
    "PERSON"
   ],
   "adjectives": [
    "CAT"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CH-CATFISH\n\t(LOC RM-COMMAND-MODULE)\n\t(DESC \"Catfish\")\n\t(FLAGS FL-ALIVE FL-NO-ARTICLE FL-OPEN FL-PERSON FL-SEARCH)\n\t(SYNONYM CATFISH DEVRIES FISH MAN PERSON)\n\t(ADJECTIVE CAT)\n>",
   "referencedBy": [
    "RT-I-CRANE-1",
    "RT-I-CRANE-3",
    "RT-I-CRANE-5",
    "RT-TH-BIG-LOCKER",
    "RT-GN-LOCKER",
    "RT-LG-DGS-DOOR",
    "RT-RM-LADDER-B2",
    "RT-I-OUT-OF-AIR-2",
    "RT-TH-PASSPORT",
    "RT-TH-DISCHARGE",
    "RT-RM-SUB-BAY",
    "RT-RM-CORRIDOR",
    "RT-RM-MESS-HALL"
   ]
  },
  "CH-SEALS": {
   "name": "CH-SEALS",
   "file": "sub-bay.zil",
   "line": 501,
   "endLine": 508,
   "desc": "SEALs",
   "ldesc": null,
   "fdesc": null,
   "loc": "GENERIC-OBJECTS",
   "flags": [],
   "synonyms": [
    "WILLHITE",
    "SCHOENICK",
    "MONK",
    "SEAL",
    "SEALS",
    "DIVER",
    "DIVERS",
    "MAN",
    "MEN",
    "PERSON",
    "PEOPLE"
   ],
   "adjectives": [
    "NAVY"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CH-SEALS\n\t(LOC GENERIC-OBJECTS)\n\t(DESC \"SEALs\")\n\t(SYNONYM\n\t\tWILLHITE SCHOENICK MONK SEAL SEALS DIVER DIVERS MAN MEN PERSON PEOPLE\n\t)\n\t(ADJECTIVE NAVY)\n>",
   "referencedBy": [
    "RT-CH-COFFEY"
   ]
  },
  "TH-DRY-SUIT": {
   "name": "TH-DRY-SUIT",
   "file": "sub-bay.zil",
   "line": 521,
   "endLine": 529,
   "desc": "dry suit",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-BUD-GEAR-LOCKER",
   "flags": [
    "FL-CLOTHING",
    "FL-CONTAINER",
    "FL-OPEN",
    "FL-SEARCH",
    "FL-TAKEABLE"
   ],
   "synonyms": [
    "SUIT"
   ],
   "adjectives": [
    "DRY"
   ],
   "action": "RT-TH-DRY-SUIT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "5"
    ]
   },
   "contents": [
    "TH-FACEPLATE",
    "TH-HELMET"
   ],
   "source": "<OBJECT TH-DRY-SUIT\n\t(LOC TH-BUD-GEAR-LOCKER)\n\t(DESC \"dry suit\")\n\t(FLAGS FL-CLOTHING FL-CONTAINER FL-OPEN FL-SEARCH FL-TAKEABLE)\n\t(SYNONYM SUIT)\n\t(ADJECTIVE DRY)\n\t(SIZE 5)\n\t(ACTION RT-TH-DRY-SUIT)\n>",
   "referencedBy": [
    "RT-I-TEMP",
    "RT-I-OUT-OF-AIR-2",
    "RT-RM-SUB-BAY",
    "RT-TH-DRY-SUIT"
   ]
  },
  "TH-FACEPLATE": {
   "name": "TH-FACEPLATE",
   "file": "sub-bay.zil",
   "line": 569,
   "endLine": 576,
   "desc": "faceplate",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-DRY-SUIT",
   "flags": [
    "FL-NO-DESC",
    "FL-OPEN",
    "FL-OPENABLE",
    "FL-TRANSPARENT"
   ],
   "synonyms": [
    "FACEPLATE",
    "PLATE"
   ],
   "adjectives": [
    "FACE"
   ],
   "action": "RT-TH-FACEPLATE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-FACEPLATE\n\t(LOC TH-DRY-SUIT)\n\t(DESC \"faceplate\")\n\t(FLAGS FL-NO-DESC FL-OPEN FL-OPENABLE FL-TRANSPARENT)\n\t(SYNONYM FACEPLATE PLATE)\n\t(ADJECTIVE FACE)\n\t(ACTION RT-TH-FACEPLATE)\n>",
   "referencedBy": [
    "RT-TH-DRY-SUIT",
    "RT-TH-FACEPLATE",
    "RT-TH-HELMET"
   ]
  },
  "TH-HELMET": {
   "name": "TH-HELMET",
   "file": "sub-bay.zil",
   "line": 593,
   "endLine": 600,
   "desc": "helmet",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-DRY-SUIT",
   "flags": [
    "FL-CONTAINER",
    "FL-NO-DESC",
    "FL-OPEN",
    "FL-SEARCH"
   ],
   "synonyms": [
    "HELMET"
   ],
   "adjectives": [
    "DRY",
    "SUIT"
   ],
   "action": "RT-TH-HELMET",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-HELMET\n\t(LOC TH-DRY-SUIT)\n\t(DESC \"helmet\")\n\t(FLAGS FL-CONTAINER FL-NO-DESC FL-OPEN FL-SEARCH)\n\t(SYNONYM HELMET)\n\t(ADJECTIVE DRY SUIT)\n\t(ACTION RT-TH-HELMET)\n>",
   "referencedBy": []
  },
  "TH-HOOK-1": {
   "name": "TH-HOOK-1",
   "file": "sub-bay.zil",
   "line": 616,
   "endLine": 622,
   "desc": "hook",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-SUB-BAY",
   "flags": [
    "FL-SURFACE"
   ],
   "synonyms": [
    "HOOK"
   ],
   "adjectives": [],
   "action": "RT-TH-HOOK-1",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "TH-LIFT-BAG"
   ],
   "source": "<OBJECT TH-HOOK-1\n\t(LOC RM-SUB-BAY)\n\t(DESC \"hook\")\n\t(FLAGS FL-SURFACE)\n\t(SYNONYM HOOK)\n\t(ACTION RT-TH-HOOK-1)\n>",
   "referencedBy": []
  },
  "TH-LIFT-BAG": {
   "name": "TH-LIFT-BAG",
   "file": "sub-bay.zil",
   "line": 632,
   "endLine": 640,
   "desc": "lift bag",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-HOOK-1",
   "flags": [
    "FL-SURFACE",
    "FL-SEARCH",
    "FL-TAKEABLE"
   ],
   "synonyms": [
    "BAG"
   ],
   "adjectives": [
    "LIFT"
   ],
   "action": "RT-TH-LIFT-BAG",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "5"
    ]
   },
   "contents": [
    "TH-CO2-CANNISTER"
   ],
   "source": "<OBJECT TH-LIFT-BAG\n\t(LOC TH-HOOK-1)\n\t(DESC \"lift bag\")\n\t(FLAGS FL-SURFACE FL-SEARCH FL-TAKEABLE)\n\t(SYNONYM BAG)\n\t(ADJECTIVE LIFT)\n\t(SIZE 5)\n\t(ACTION RT-TH-LIFT-BAG)\n>",
   "referencedBy": [
    "RT-TH-LIFT-BAG",
    "RT-TH-RED-BUTTON"
   ]
  },
  "TH-CO2-CANNISTER": {
   "name": "TH-CO2-CANNISTER",
   "file": "sub-bay.zil",
   "line": 759,
   "endLine": 767,
   "desc": "CO2 cannister",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-LIFT-BAG",
   "flags": [
    "FL-NO-DESC",
    "FL-SURFACE",
    "FL-SEARCH"
   ],
   "synonyms": [
    "CANNISTER"
   ],
   "adjectives": [
    "CO2",
    "CARBON",
    "DIOXIDE"
   ],
   "action": "RT-TH-CO2-CANNISTER",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "5"
    ]
   },
   "contents": [
    "TH-RED-BUTTON"
   ],
   "source": "<OBJECT TH-CO2-CANNISTER\n\t(LOC TH-LIFT-BAG)\n\t(DESC \"CO2 cannister\")\n\t(FLAGS FL-NO-DESC FL-SURFACE FL-SEARCH)\n\t(SYNONYM CANNISTER)\n\t(ADJECTIVE CO2 CARBON DIOXIDE)\n\t(SIZE 5)\n\t(ACTION RT-TH-CO2-CANNISTER)\n>",
   "referencedBy": [
    "RT-TH-RED-BUTTON"
   ]
  },
  "TH-RED-BUTTON": {
   "name": "TH-RED-BUTTON",
   "file": "sub-bay.zil",
   "line": 787,
   "endLine": 794,
   "desc": "red button",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-CO2-CANNISTER",
   "flags": [
    "FL-NO-DESC"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "RED"
   ],
   "action": "RT-TH-RED-BUTTON",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-RED-BUTTON\n\t(LOC TH-CO2-CANNISTER)\n\t(DESC \"red button\")\n\t(FLAGS FL-NO-DESC)\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE RED)\n\t(ACTION RT-TH-RED-BUTTON)\n>",
   "referencedBy": []
  },
  "LG-CHAMBER-HATCH": {
   "name": "LG-CHAMBER-HATCH",
   "file": "sub-bay.zil",
   "line": 956,
   "endLine": 964,
   "desc": "compression chamber hatch",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "FL-DOOR",
    "FL-OPENABLE"
   ],
   "synonyms": [
    "HATCH"
   ],
   "adjectives": [
    "COMPRESSION",
    "CHAMBER"
   ],
   "action": "RT-LG-CHAMBER-HATCH",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "MENU": [
     "hatch"
    ]
   },
   "contents": [],
   "source": "<OBJECT LG-CHAMBER-HATCH\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"compression chamber hatch\")\n\t(MENU \"hatch\")\n\t(FLAGS FL-DOOR FL-OPENABLE)\n\t(SYNONYM HATCH)\n\t(ADJECTIVE COMPRESSION CHAMBER)\n\t(ACTION RT-LG-CHAMBER-HATCH)\n>",
   "referencedBy": [
    "RT-LG-CHAMBER-HATCH",
    "RT-OUT-CAB"
   ]
  },
  "TH-CAB-HOOKAH": {
   "name": "TH-CAB-HOOKAH",
   "file": "sub-bay.zil",
   "line": 1284,
   "endLine": 1289,
   "desc": "hookah",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-CAB-THREE",
   "flags": [],
   "synonyms": [
    "HOOKAH"
   ],
   "adjectives": [],
   "action": "RT-TH-CAB-HOOKAH",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-CAB-HOOKAH\n\t(LOC RM-CAB-THREE)\n\t(DESC \"hookah\")\n\t(SYNONYM HOOKAH)\n\t(ACTION RT-TH-CAB-HOOKAH)\n>",
   "referencedBy": []
  },
  "LG-CHAMBER-DOOR": {
   "name": "LG-CHAMBER-DOOR",
   "file": "sub-bay.zil",
   "line": 1363,
   "endLine": 1371,
   "desc": "compression chamber door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "FL-DOOR",
    "FL-OPEN",
    "FL-OPENABLE"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "COMPRESSION",
    "CHAMBER"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "MENU": [
     "door"
    ]
   },
   "contents": [],
   "source": "<OBJECT LG-CHAMBER-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"compression chamber door\")\n\t(MENU \"door\")\n\t(FLAGS FL-DOOR FL-OPEN FL-OPENABLE)\n\t(SYNONYM DOOR)\n\t(ADJECTIVE COMPRESSION CHAMBER)\n;\t(ACTION RT-LG-CHAMBER-DOOR)\n>",
   "referencedBy": [
    "RT-TH-RED-LEVER",
    "V-$NITROGEN",
    "RT-I-LEAVE-4",
    "RT-RM-GAS-MIX-ROOM"
   ]
  },
  "TH-PANEL": {
   "name": "TH-PANEL",
   "file": "sub-bay.zil",
   "line": 1464,
   "endLine": 1470,
   "desc": "panel",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-CORRIDOR",
   "flags": [
    "FL-SURFACE",
    "FL-OPENABLE"
   ],
   "synonyms": [
    "PANEL"
   ],
   "adjectives": [],
   "action": "RT-TH-PANEL",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-PANEL\n\t(LOC RM-CORRIDOR)\n\t(DESC \"panel\")\n\t(FLAGS FL-SURFACE FL-OPENABLE)\n\t(SYNONYM PANEL)\n\t(ACTION RT-TH-PANEL)\n>",
   "referencedBy": []
  },
  "TH-HOOK-2": {
   "name": "TH-HOOK-2",
   "file": "sub-bay.zil",
   "line": 1735,
   "endLine": 1741,
   "desc": "hook",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-PANTRY",
   "flags": [
    "FL-SURFACE"
   ],
   "synonyms": [
    "HOOK"
   ],
   "adjectives": [],
   "action": "RT-TH-HOOK-2",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "TH-GAME-BAG"
   ],
   "source": "<OBJECT TH-HOOK-2\n\t(LOC RM-PANTRY)\n\t(DESC \"hook\")\n\t(FLAGS FL-SURFACE)\n\t(SYNONYM HOOK)\n\t(ACTION RT-TH-HOOK-2)\n>",
   "referencedBy": []
  },
  "TH-GAME-BAG": {
   "name": "TH-GAME-BAG",
   "file": "sub-bay.zil",
   "line": 1751,
   "endLine": 1759,
   "desc": "game bag",
   "ldesc": null,
   "fdesc": null,
   "loc": "TH-HOOK-2",
   "flags": [
    "FL-SURFACE",
    "FL-SEARCH",
    "FL-TAKEABLE",
    "FL-CONTAINER"
   ],
   "synonyms": [
    "BAG"
   ],
   "adjectives": [
    "GAME"
   ],
   "action": "RT-TH-GAME-BAG",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT TH-GAME-BAG\n\t(LOC TH-HOOK-2)\n\t(DESC \"game bag\")\n\t(FLAGS FL-SURFACE FL-SEARCH FL-TAKEABLE FL-CONTAINER)\n\t(SYNONYM BAG)\n\t(ADJECTIVE GAME)\n\t(SIZE 5)\n\t(ACTION RT-TH-GAME-BAG)\n>",
   "referencedBy": []
  },
  "TH-S-BILGE-BUTT": {
   "name": "TH-S-BILGE-BUTT",
   "file": "sub-bay.zil",
   "line": 1927,
   "endLine": 1932,
   "desc": "button",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "YELLOW"
   ],
   "action": "RT-TH-S-BILGE-BUTT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-S-BILGE-BUTT\n\t(DESC \"button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE YELLOW)\n\t(ACTION RT-TH-S-BILGE-BUTT)\n>",
   "referencedBy": []
  },
  "TH-COMPRESSOR": {
   "name": "TH-COMPRESSOR",
   "file": "sub-bay.zil",
   "line": 2121,
   "endLine": 2127,
   "desc": "compressor",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-COMPRESSOR-ROOM",
   "flags": [
    "FL-ON"
   ],
   "synonyms": [
    "COMPRESSOR"
   ],
   "adjectives": [],
   "action": "RT-TH-COMPRESSOR",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TH-COMPRESSOR\n\t(LOC RM-COMPRESSOR-ROOM)\n\t(DESC \"compressor\")\n\t(FLAGS FL-ON)\n\t(SYNONYM COMPRESSOR)\n\t(ACTION RT-TH-COMPRESSOR)\n>",
   "referencedBy": [
    "RT-CH-COFFEY",
    "RT-RM-COMPRESSOR-ROOM"
   ]
  },
  "TH-ELEC-SHOP-DRAWER": {
   "name": "TH-ELEC-SHOP-DRAWER",
   "file": "sub-bay.zil",
   "line": 2930,
   "endLine": 2937,
   "desc": "center drawer",
   "ldesc": null,
   "fdesc": null,
   "loc": "RM-ELECTRONICS-SHOP",
   "flags": [
    "FL-CONTAINER",
    "FL-OPENABLE",
    "FL-SEARCH"
   ],
   "synonyms": [
    "DRAWER"
   ],
   "adjectives": [
    "CENTER"
   ],
   "action": "RT-TH-ELEC-SHOP-DRAWER",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "TH-WIRE-CUTTERS"
   ],
   "source": "<OBJECT TH-ELEC-SHOP-DRAWER\n\t(LOC RM-ELECTRONICS-SHOP)\n\t(DESC \"center drawer\")\n\t(FLAGS FL-CONTAINER FL-OPENABLE FL-SEARCH)\n\t(SYNONYM DRAWER)\n\t(ADJECTIVE CENTER)\n\t(ACTION RT-TH-ELEC-SHOP-DRAWER)\n>",
   "referencedBy": []
  }
 },
 "routines": {
  "RT-RM-TRENCH-BOTTOM": {
   "name": "RT-RM-TRENCH-BOTTOM",
   "file": "alien.zil",
   "line": 28,
   "endLine": 53,
   "source": "<ROUTINE RT-RM-TRENCH-BOTTOM (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"arrive at\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the bottom of the trench. You are next to a huge alien ship that will be\nmuch more vividly described in later versions of this game. Once we hook up\nthe graphics, on the side of the ship you will see a picture of a panel with\na series of dots on it. For now, let's just say there's a purple button that\nyou have to push in order to get inside the ship.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-PURPLE-BUTTON": {
   "name": "RT-TH-PURPLE-BUTTON",
   "file": "alien.zil",
   "line": 69,
   "endLine": 100,
   "source": "<ROUTINE RT-TH-PURPLE-BUTTON (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL \"\tPretty normal-looking button, considering it's purple.\" CR>\n\t\t)\n\t\t(<VERB? PUSH>\n\t\t\t<MOVE ,CH-PLAYER ,RM-ALIEN-CHAMBER>\n\t\t\t<TELL\n\"\tThe door swings open and you enter the Alien ship. You walk down a long,\nluminescent corridor and eventually come to a large room. Lindsey is sitting\nin the middle of the floor, her tear-stained face looking up at some large TV\nscreens on the wall. You walk toward her. She silently stretches out her hand\nto take yours, and then motions you to look at the screens. You do so and\nquickly realize why she's been crying.|\n\tUp on the screen you see pictures of incredible destruction. Major cities\nall over the world are being inundated by water. In some places, the flooding\nis complete. In others it has just begun. But all over the planet, water is\nrising up to wipe out humanity in the flood that Noah was promised would\nnever come.|\n\tOne of the Alien creatures materializes at your side and explains why they\nare doing what they are doing. He bears a strong resemblance to Don Rubin.\n\\\"Soon there will be a puzzle here,\\\" he says. \\\"Otherwise, Bob will write it\nwhen he gets back from vacation. Until that time, simply push the fuschia\nbutton over there on the wall. Doing so will save the world and return you to\nDeepcore. Not a bad deal, if you ask me.\\\"\" CR\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-RM-ALIEN-CHAMBER": {
   "name": "RT-RM-ALIEN-CHAMBER",
   "file": "alien.zil",
   "line": 123,
   "endLine": 142,
   "source": "<ROUTINE RT-RM-ALIEN-CHAMBER (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"arrive at\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL \" the alien chamber. There is a fuschia button on the wall.|\">\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-FUSCHIA-BUTTON": {
   "name": "RT-TH-FUSCHIA-BUTTON",
   "file": "alien.zil",
   "line": 157,
   "endLine": 175,
   "source": "<ROUTINE RT-TH-FUSCHIA-BUTTON (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL \"\tPretty normal-looking button, considering it's fuschia.\" CR>\n\t\t)\n\t\t(<VERB? PUSH>\n\t\t\t<MOVE ,CH-PLAYER ,RM-SUB-BAY>\n\t\t\t<MOVE ,CH-LINDSEY ,RM-SUB-BAY>\n\t\t\t<FSET ,CH-ALIEN ,FL-BROKEN>\n\t\t\t<TELL\n\"\tA flash of lighting. A clap of thunder. And suddenly you and Lindsey are\nback in the Sub-bay.\" CR\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "V-STATEMENT": {
   "name": "V-STATEMENT",
   "file": "be.zil",
   "line": 84,
   "endLine": 86,
   "source": "<ROUTINE V-STATEMENT ()\n\t<V-DO?>\n>"
  },
  "V-BE": {
   "name": "V-BE",
   "file": "be.zil",
   "line": 88,
   "endLine": 258,
   "source": "<ROUTINE V-BE (\"AUX\" TMP NOT? ADJ? LOC? OBJ PREP)\n\t<SET NOT? <ANDB ,PARSE-NOT <PARSE-FLAGS ,PARSE-RESULT>>>\n\t<SET ADJ? <PARSE-ADJ ,PARSE-RESULT>>\n\t<SET LOC? <PARSE-LOC ,PARSE-RESULT>>\n\t<COND\n\t\t(<VERB? BE? WHO WHAT WHERE WHY WHEN HOW>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? ,PRSI ,INTADJ>\n\t\t\t\t\t<TELL The+verb ,PRSO \"are\">\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<NOT <IS-PRSO-ADJ? .ADJ?>>\n\t\t\t\t\t\t\t<TELL \"n't\">\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<TELL !\\ >\n\t\t\t\t\t<PRINTB .ADJ?>\n\t\t\t\t\t<TELL !\\. CR>\n\t\t\t\t)\n\t\t\t\t(<EQUAL? ,PRSI ,INTPP>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<AND <SET PREP <P-PP-PREP>>\n\t\t\t\t\t\t\t\t<SET OBJ <P-PP-OBJ>>\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(<VERB? BE?>\n\t\t\t\t\t\t\t\t\t<TELL The+verb ,PRSO \"are\">\n\t\t\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t\t\t(<NOT <RIGHT-PREP? .PREP ,PRSO .OBJ>>\n\t\t\t\t\t\t\t\t\t\t\t<TELL \"n't\">\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<TELL !\\ >\n\t\t\t\t\t\t\t\t\t<PRINTB .PREP>\n\t\t\t\t\t\t\t\t\t<TELL the .OBJ !\\. CR>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t\t<TELL \"You want to know \">\n\t\t\t\t\t\t\t\t\t<TELL-Q-WORD>\n\t\t\t\t\t\t\t\t\t<PRSO-IS .NOT?>\n\t\t\t\t\t\t\t\t\t<TELL !\\ >\n\t\t\t\t\t\t\t\t\t<PRINTB .PREP>\n\t\t\t\t\t\t\t\t\t<TELL the .OBJ !\\. CR>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL \"You want to know \">\n\t\t\t\t\t\t\t<TELL-Q-WORD>\n\t\t\t\t\t\t\t<PRSO-IS .NOT?>\n\t\t\t\t\t\t\t<TELL !\\ >\n\t\t\t\t\t\t\t<PRINTB <PP-PREP .LOC?>>\n\t\t\t\t\t\t\t<TELL !\\ >\n\t\t\t\t\t\t\t<NP-PRINT <PP-NOUN .LOC?>>\n\t\t\t\t\t\t\t<TELL !\\. CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<AND <NOT ,PRSI>\n\t\t\t\t\t\t<VERB? WHERE>\n\t\t\t\t\t>\n\t\t\t\t\t<SET LOC? <LOC ,PRSO>>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<IN? ,PRSO ,HERE>\n\t\t\t\t\t\t\t<PRSO-IS <> T>\n\t\t\t\t\t\t\t<TELL \" here.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<EQUAL? .LOC? ,GLOBAL-OBJECTS>\n\t\t\t\t\t\t\t<TELL \"No doubt\" the ,PRSO verb ,PRSO \"are\" \" around here somewhere.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<AND <EQUAL? .LOC? ,LOCAL-GLOBALS>\n\t\t\t\t\t\t\t\t<GLOBAL-IN? ,PRSO ,HERE>\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<TELL The+verb ,PRSO \"are\" \" nearby.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<FSET? .LOC? ,FL-PERSON>\n\t\t\t\t\t\t\t<TELL The+verb .LOC? \"has\" the ,PRSO !\\. CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<EQUAL? <META-LOC ,PRSO> ,HERE>\n\t\t\t\t\t\t\t<TELL The+verb ,PRSO \"are\" in .LOC? the .LOC? !\\. CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<IN? .LOC? ,ROOMS>\n\t\t\t\t\t\t\t<TELL The ,PRSO \" is probably \">\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(<FSET? ,PRSO ,TOUCHBIT>\n\t\t\t\t\t\t\t\t\t<TELL \"still in\" the .LOC? !\\. CR>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t\t<TELL \"lying around somewhere.\" CR>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL \"That's an excellent question. Just where\" verb ,PRSO \"are\" the ,PRSO !\\? CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"You want to know \">\n\t\t\t\t\t<TELL-Q-WORD>\n\t\t\t\t\t<PRSO-IS .NOT?>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(,PRSI\n\t\t\t\t\t\t\t<TELL a ,PRSI>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<TELL !\\? CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(T\n\t\t\t<COND\n\t\t\t\t(<EQUAL? ,PRSI ,INTADJ>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<IS-PRSO-ADJ? .ADJ?>\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(.NOT?\n\t\t\t\t\t\t\t\t\t<TELL \"Wrong,\">\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t\t<TELL \"Right,\">\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<PRSO-IS <>>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(.NOT?\n\t\t\t\t\t\t\t\t\t<TELL \"Right,\">\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t\t<TELL \"Wrong,\">\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<PRSO-IS T>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<TELL !\\ >\n\t\t\t\t\t<PRINTB .ADJ?>\n\t\t\t\t\t<TELL !\\. CR>\n\t\t\t\t)\n\t\t\t\t(<EQUAL? ,PRSI ,INTPP>\n\t\t\t\t\t<TELL \"So, you say\">\n\t\t\t\t\t<PRSO-IS .NOT?>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<AND <SET PREP <P-PP-PREP>>\n\t\t\t\t\t\t\t\t<SET OBJ <P-PP-OBJ>>\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<PRINTB .PREP>\n\t\t\t\t\t\t\t<TELL the .OBJ>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<PRINTB <PP-PREP .LOC?>>\n\t\t\t\t\t\t\t<TELL the <NP-PRINT <PP-NOUN .LOC?>>>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<TELL !\\. CR>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"So you think\">\n\t\t\t\t\t<PRSO-IS .NOT?>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(,PRSI\n\t\t\t\t\t\t\t<TELL a ,PRSI>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<TELL !\\? CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "TELL-Q-WORD": {
   "name": "TELL-Q-WORD",
   "file": "be.zil",
   "line": 264,
   "endLine": 291,
   "source": "<ROUTINE TELL-Q-WORD ()\n\t<COND\n\t\t(<VERB? BE?>\n\t\t\t<TELL \"if\">\n\t\t)\n\t\t(<VERB? WHY>\n\t\t\t<TELL \"why\">\n\t\t)\n\t\t(<VERB? WHO>\n\t\t\t<TELL \"who\">\n\t\t)\n\t\t(<VERB? WHAT>\n\t\t\t<TELL \"what\">\n\t\t)\n\t\t(<VERB? WHERE>\n\t\t\t<TELL \"where\">\n\t\t)\n\t\t(<VERB? WHEN>\n\t\t\t<TELL \"when\">\n\t\t)\n\t\t(<VERB? HOW>\n\t\t\t<TELL \"how\">\n\t\t)\n\t\t(T\n\t\t\t<PRINTB ,P-PRSA-WORD>\n\t\t)\n\t>\n>"
  },
  "RIGHT-PREP?": {
   "name": "RIGHT-PREP?",
   "file": "be.zil",
   "line": 293,
   "endLine": 314,
   "source": "<ROUTINE RIGHT-PREP? (PREP OBJ CONT)\n\t<COND\n\t\t(<NOT <IN? .OBJ .CONT>>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<EQUAL? .PREP ,W?IN ,W?INSIDE>\n\t\t\t<COND\n\t\t\t\t(<RT-SEE-INSIDE? .CONT>\n\t\t\t\t\t<RTRUE>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<RFALSE>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<AND <EQUAL? .PREP ,W?ON>\n\t\t\t\t<FSET? .CONT ,FL-SURFACE>\n\t\t\t>\n\t\t\t<RTRUE>\n\t\t)\n\t>\n>"
  },
  "IS-QUIET?": {
   "name": "IS-QUIET?",
   "file": "be.zil",
   "line": 341,
   "endLine": 343,
   "source": "<ROUTINE IS-QUIET? (OBJ)\n\t<RTRUE>\n>"
  },
  "IS-OUTSIDE?": {
   "name": "IS-OUTSIDE?",
   "file": "be.zil",
   "line": 345,
   "endLine": 347,
   "source": "<ROUTINE IS-OUTSIDE? (OBJ)\n\t<NOT <FSET? ,HERE ,FL-INDOORS>>\n>"
  },
  "IS-OPEN?": {
   "name": "IS-OPEN?",
   "file": "be.zil",
   "line": 353,
   "endLine": 358,
   "source": "<ROUTINE IS-OPEN? (OBJ)\n\t<AND\n\t\t<FSET? .OBJ ,FL-OPENABLE>\n\t\t<FSET? .OBJ ,FL-OPEN>\n\t>\n>"
  },
  "IS-CLOSED?": {
   "name": "IS-CLOSED?",
   "file": "be.zil",
   "line": 360,
   "endLine": 365,
   "source": "<ROUTINE IS-CLOSED? (OBJ)\n\t<AND\n\t\t<FSET? .OBJ ,FL-OPENABLE>\n\t\t<NOT <FSET? .OBJ ,FL-OPEN>>\n\t>\n>"
  },
  "IS-LOCKED?": {
   "name": "IS-LOCKED?",
   "file": "be.zil",
   "line": 367,
   "endLine": 372,
   "source": "<ROUTINE IS-LOCKED? (OBJ)\n\t<AND\n\t\t<FSET? .OBJ ,FL-OPENABLE>\n\t\t<FSET? .OBJ ,FL-LOCKED>\n\t>\n>"
  },
  "IS-UNLOCKED?": {
   "name": "IS-UNLOCKED?",
   "file": "be.zil",
   "line": 374,
   "endLine": 379,
   "source": "<ROUTINE IS-UNLOCKED? (OBJ)\n\t<AND\n\t\t<FSET? .OBJ ,FL-OPENABLE>\n\t\t<NOT <FSET? .OBJ ,FL-LOCKED>>\n\t>\n>"
  },
  "IS-DEAD?": {
   "name": "IS-DEAD?",
   "file": "be.zil",
   "line": 381,
   "endLine": 386,
   "source": "<ROUTINE IS-DEAD? (OBJ)\n\t<AND\n\t\t<FSET? .OBJ ,FL-PERSON>\n\t\t<NOT <FSET? .OBJ ,FL-ALIVE>>\n\t>\n>"
  },
  "IS-ALIVE?": {
   "name": "IS-ALIVE?",
   "file": "be.zil",
   "line": 388,
   "endLine": 393,
   "source": "<ROUTINE IS-ALIVE? (OBJ)\n\t<AND\n\t\t<FSET? .OBJ ,FL-PERSON>\n\t\t<FSET? .OBJ ,FL-ALIVE>\n\t>\n>"
  },
  "IS-HERE?": {
   "name": "IS-HERE?",
   "file": "be.zil",
   "line": 395,
   "endLine": 412,
   "source": "<ROUTINE IS-HERE? (OBJ \"AUX\" L)\n\t<SET L <LOC .OBJ>>\n\t<REPEAT ()\n\t\t<COND\n\t\t\t(<OR\t<ZERO? .L>\n\t\t\t\t\t<EQUAL? .L ,GLOBAL-OBJECTS ,LOCAL-GLOBALS ,ROOMS>\n\t\t\t\t>\n\t\t\t\t<RFALSE>\n\t\t\t)\n\t\t\t(<EQUAL? .L ,HERE>\n\t\t\t\t<RTRUE>\n\t\t\t)\n\t\t\t(T\n\t\t\t\t<SET L <LOC .L>>\n\t\t\t)\n\t\t>\n\t>\n>"
  },
  "PRSO-IS": {
   "name": "PRSO-IS",
   "file": "be.zil",
   "line": 414,
   "endLine": 429,
   "source": "<ROUTINE PRSO-IS (NOT? \"OPT\" (CAP? <>))\n\t<COND\n\t\t(.CAP?\n\t\t\t<TELL The ,PRSO>\n\t\t)\n\t\t(T\n\t\t\t<TELL the ,PRSO>\n\t\t)\n\t>\n\t<TELL verb ,PRSO \"are\">\n\t<COND\n\t\t(.NOT?\n\t\t\t<TELL \"n't\">\n\t\t)\n\t>\n>"
  },
  "IS-PRSO-ADJ?": {
   "name": "IS-PRSO-ADJ?",
   "file": "be.zil",
   "line": 431,
   "endLine": 444,
   "source": "<ROUTINE IS-PRSO-ADJ? (ADJ \"AUX\" TMP)\n\t<COND\n\t\t(<AND <SET TMP <GETPT ,PRSO ,P?ADJECTIVE>>\n\t\t\t\t<INTBL? .ADJ .TMP </ <PTSIZE .TMP> 2>>\n\t\t\t>\n\t\t\t<RTRUE>\n\t\t)\n\t\t(<AND <SET TMP <INTBL? .ADJ ,ADJ-TABLE <GET ,ADJ-TABLE 0>>>\n\t\t\t\t<APPLY <GET .TMP 1> ,PRSO>\n\t\t\t>\n\t\t\t<RTRUE>\n\t\t)\n\t>\n>"
  },
  "YES-BUT?": {
   "name": "YES-BUT?",
   "file": "be.zil",
   "line": 471,
   "endLine": 477,
   "source": "<ROUTINE YES-BUT? (STR1 STR2)\n\t<COND\n\t\t(<NOT <PARSE-QW ,PARSE-RESULT>>\n\t\t\t<TELL The ,PRSO !\\  .STR1 \", but \" .STR2 he ,PRSO !\\? CR>\n\t\t)\n\t>\n>"
  },
  "V-CAN?": {
   "name": "V-CAN?",
   "file": "be.zil",
   "line": 479,
   "endLine": 481,
   "source": "<ROUTINE V-CAN? ()\n\t<YES-BUT? \"can\" \"may\">\n>"
  },
  "V-MAY?": {
   "name": "V-MAY?",
   "file": "be.zil",
   "line": 483,
   "endLine": 485,
   "source": "<ROUTINE V-MAY? ()\n\t<YES-BUT? \"may\" \"can\">\n>"
  },
  "V-DO?": {
   "name": "V-DO?",
   "file": "be.zil",
   "line": 487,
   "endLine": 493,
   "source": "<ROUTINE V-DO? ()\n\t<COND\n\t\t(<NOT <PARSE-QW ,PARSE-RESULT>>\n\t\t\t<TELL The+verb ,PRSO \"do\" \", but why?\" CR>\n\t\t)\n\t>\n>"
  },
  "V-COULD?": {
   "name": "V-COULD?",
   "file": "be.zil",
   "line": 495,
   "endLine": 497,
   "source": "<ROUTINE V-COULD? ()\n\t<YES-BUT? \"could\" \"would\">\n>"
  },
  "V-WOULD?": {
   "name": "V-WOULD?",
   "file": "be.zil",
   "line": 499,
   "endLine": 501,
   "source": "<ROUTINE V-WOULD? ()\n\t<YES-BUT? \"would\" \"could\">\n>"
  },
  "V-SHOULD?": {
   "name": "V-SHOULD?",
   "file": "be.zil",
   "line": 503,
   "endLine": 505,
   "source": "<ROUTINE V-SHOULD? ()\n\t<YES-BUT? \"should\" \"will\">\n>"
  },
  "V-MIGHT?": {
   "name": "V-MIGHT?",
   "file": "be.zil",
   "line": 507,
   "endLine": 509,
   "source": "<ROUTINE V-MIGHT? ()\n\t<YES-BUT? \"might\" \"will\">\n>"
  },
  "V-WILL?": {
   "name": "V-WILL?",
   "file": "be.zil",
   "line": 511,
   "endLine": 513,
   "source": "<ROUTINE V-WILL? ()\n\t<YES-BUT? \"will\" \"should\">\n>"
  },
  "V-MUST?": {
   "name": "V-MUST?",
   "file": "be.zil",
   "line": 515,
   "endLine": 517,
   "source": "<ROUTINE V-MUST? ()\n\t<YES-BUT? \"must\" \"can\">\n>"
  },
  "V-BE?": {
   "name": "V-BE?",
   "file": "be.zil",
   "line": 519,
   "endLine": 521,
   "source": "<ROUTINE V-BE? ()\n\t<V-BE>\n>"
  },
  "V-WHO": {
   "name": "V-WHO",
   "file": "be.zil",
   "line": 523,
   "endLine": 525,
   "source": "<ROUTINE V-WHO ()\n\t<V-BE>\n>"
  },
  "V-WHAT": {
   "name": "V-WHAT",
   "file": "be.zil",
   "line": 527,
   "endLine": 529,
   "source": "<ROUTINE V-WHAT ()\n\t<V-BE>\n>"
  },
  "V-WHEN": {
   "name": "V-WHEN",
   "file": "be.zil",
   "line": 531,
   "endLine": 533,
   "source": "<ROUTINE V-WHEN ()\n\t<V-BE>\n>"
  },
  "V-WHERE": {
   "name": "V-WHERE",
   "file": "be.zil",
   "line": 535,
   "endLine": 537,
   "source": "<ROUTINE V-WHERE ()\n\t<V-BE>\n>"
  },
  "V-WHY": {
   "name": "V-WHY",
   "file": "be.zil",
   "line": 539,
   "endLine": 541,
   "source": "<ROUTINE V-WHY ()\n\t<V-BE>\n>"
  },
  "V-HOW": {
   "name": "V-HOW",
   "file": "be.zil",
   "line": 543,
   "endLine": 545,
   "source": "<ROUTINE V-HOW ()\n\t<V-BE>\n>"
  },
  "RT-RM-COMMAND-MODULE": {
   "name": "RT-RM-COMMAND-MODULE",
   "file": "command.zil",
   "line": 28,
   "endLine": 60,
   "source": "<ROUTINE RT-RM-COMMAND-MODULE (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL TAB \"You \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\nthe ,RM-COMMAND-MODULE \", a long narrow cabin like the inside of a Winnebago\npacked with instrumentation. At the far end, a chair sits in front of a bank\nof monitors. The only exit is in the aft wall.\" CR\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<MC-CONTEXT? ,M-BEG>\n\t\t\t<COND\n\t\t\t\t(<AND <VERB? SIT>\n\t\t\t\t\t\t<MC-PRSO? ,ROOMS>\n\t\t\t\t\t>\n\t\t\t\t\t<RT-COMMAND-MENU>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-MONITORS": {
   "name": "RT-TH-MONITORS",
   "file": "command.zil",
   "line": 74,
   "endLine": 88,
   "source": "<ROUTINE RT-TH-MONITORS (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL\nTAB \"The monitors glow with data gathered from all over Deepcore.\" CR\n\t\t\t>\n\t\t)\n\t\t(<VERB? SIT>\n\t\t\t<RT-COMMAND-MENU>\n\t\t)\n\t>\n>"
  },
  "RT-TH-COMMAND-CHAIR": {
   "name": "RT-TH-COMMAND-CHAIR",
   "file": "command.zil",
   "line": 103,
   "endLine": 117,
   "source": "<ROUTINE RT-TH-COMMAND-CHAIR (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL\nTAB \"The chair is right in front of the main control panel.\" CR\n\t\t\t>\n\t\t)\n\t\t(<VERB? SIT ENTER>\n\t\t\t<RT-COMMAND-MENU>\n\t\t)\n\t>\n>"
  },
  "RT-COMMAND-MENU": {
   "name": "RT-COMMAND-MENU",
   "file": "command.zil",
   "line": 119,
   "endLine": 293,
   "source": "<ROUTINE RT-COMMAND-MENU (\"AUX\" C L (ON? <>) X1 Y1 X2 Y2)\n\t<SET X1 1>\n\t<SET Y1 <L-PIXELS 4>>\n\t<SET X2 <C-PIXELS 16>>\n\t<SET Y2 <L-PIXELS 12>>\n \n\t<MOUSE-LIMIT -1>\n \n\t<CLEAR -1>\n \n\t; \"Text window\"\n\t<WINPOS 0 <+ 1 <- <LOWCORE VWRD> <* 6 ,GL-FONT-Y>>> 1>\n\t<WINSIZE 0 <* 6 ,GL-FONT-Y> <LOWCORE HWRD>>\n \n\t; \"Status line -- Already defined.\"\n;\t<WINPOS 1 1 1>\n;\t<WINSIZE 1 ,GL-FONT-Y <LOWCORE HWRD>>\n \n\t; \"Menu window\"\n\t<WINPOS 2 <+ ,GL-FONT-Y 1> 1>\n\t<WINSIZE 2 <- <LOWCORE VWRD> <* 7 ,GL-FONT-Y>> <LOWCORE HWRD>>\n \n\t<WINPOS 7 1 1>\n\t<WINSIZE 7 <LOWCORE VWRD> <LOWCORE HWRD>>\n \n\t<SETG GL-SL-HERE <>>\n \n\t<REPEAT ()\n\t\t<CLEAR 2>\n\t\t<UPDATE-STATUS-LINE>\n\t\t<SCREEN 2>\n\t\t<CURSET 1 1>\n\t\t<TELL \"Main menu\">\n \n\t\t<CCURSET 4 1>\n\t\t<TELL \"Emergency\">\n\t\t<CCURSET 4 15>\n\t\t<TELL \"E\">\n\t\t<CCURSET 5 1>\n\t\t<TELL \"ROV\">\n\t\t<CCURSET 5 15>\n\t\t<TELL \"R\">\n\t\t<CCURSET 6 1>\n\t\t<TELL \"Air\">\n\t\t<CCURSET 6 15>\n\t\t<TELL \"A\">\n\t\t<CCURSET 7 1>\n\t\t<TELL \"Power\">\n\t\t<CCURSET 7 15>\n\t\t<TELL \"P\">\n\t\t<CCURSET 8 1>\n\t\t<TELL \"Lights\">\n\t\t<CCURSET 8 15>\n\t\t<TELL \"L\">\n\t\t<CCURSET 9 1>\n\t\t<TELL \"Life Support\">\n\t\t<CCURSET 9 15>\n\t\t<TELL \"S\">\n\t\t<CCURSET 10 1>\n\t\t<TELL \"Pump\">\n\t\t<CCURSET 10 15>\n\t\t<TELL \"M\">\n\t\t<CCURSET 11 1>\n\t\t<TELL \"Exit\">\n\t\t<CCURSET 11 15>\n\t\t<TELL \"X\">\n \n\t\t<REPEAT ()\n\t\t\t<SCREEN 0>\n\t\t\t<SETG GL-INPUT-TIMEOUT <>>\n\t\t\t<SET C <INPUT 1 3 ,RT-STOP-READ>>\n\t\t\t<COND\n\t\t\t\t(<NOT ,GL-INPUT-TIMEOUT>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<EQUAL? .C ,K-CLICK1 ,K-CLICK2>\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(<MOUSE-INPUT? 2 .X1 .Y1 .X2 .Y2>\n\t\t\t\t\t\t\t\t\t<SET L <PIXELS-L ,GL-MOUSE-Y>>\n\t\t\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t\t\t(<EQUAL? .L 1>\n\t\t\t\t\t\t\t\t\t\t\t<SET C !\\e>\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t(<EQUAL? .L 2>\n\t\t\t\t\t\t\t\t\t\t\t<SET C !\\r>\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t(<EQUAL? .L 3>\n\t\t\t\t\t\t\t\t\t\t\t<SET C !\\a>\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t(<EQUAL? .L 4>\n\t\t\t\t\t\t\t\t\t\t\t<SET C !\\p>\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t(<EQUAL? .L 5>\n\t\t\t\t\t\t\t\t\t\t\t<SET C !\\l>\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t(<EQUAL? .L 6>\n\t\t\t\t\t\t\t\t\t\t\t<SET C !\\s>\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t(<EQUAL? .L 7>\n\t\t\t\t\t\t\t\t\t\t\t<SET C !\\m>\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t\t\t\t<SET C !\\x>\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t\t<SOUND ,S-BEEP>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(<AND <G=? .C !\\A>\n\t\t\t\t\t\t\t\t\t\t<L=? .C !\\Z>\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<SET C <+ .C 32>>\t\t; \"Change to lower case\"\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(<EQUAL? .C !\\e !\\r !\\a !\\p !\\l !\\s !\\m !\\x>\n\t\t\t\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t\t<SOUND ,S-BEEP>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<SCREEN 2>\n\t\t\t\t\t<CCURSET 4 1>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<SET ON? <NOT .ON?>>\n\t\t\t\t\t\t\t<HLIGHT ,K-H-INV>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<TELL \"Emergency\">\n\t\t\t\t\t<HLIGHT ,K-H-NRM>\n\t\t\t\t)\n\t\t\t>\n\t\t>\n\t\t<COND\n\t\t\t(<EQUAL? .C !\\e>\n\t\t\t\t<RT-EMERGENCY-MENU>\n\t\t\t)\n\t\t\t(<EQUAL? .C !\\r>\n\t\t\t\t<RT-ROV-MENU>\n\t\t\t)\n\t\t\t(<EQUAL? .C !\\a>\n\t\t\t\t<RT-AIR-MENU>\n\t\t\t)\n\t\t\t(<EQUAL? .C !\\p>\n\t\t\t\t<RT-POWER-MENU>\n\t\t\t)\n\t\t\t(<EQUAL? .C !\\l>\n\t\t\t\t<RT-LIGHT-MENU>\n\t\t\t)\n\t\t\t(<EQUAL? .C !\\s>\n\t\t\t\t<RT-SUPPORT-MENU>\n\t\t\t)\n\t\t\t(<EQUAL? .C !\\m>\n\t\t\t\t<RT-PUMP-MENU>\n\t\t\t)\n\t\t\t(<EQUAL? .C !\\x>\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t>\n\t>\n\t<CLEAR -1>\n\t<INIT-STATUS-LINE>\n\t<SCREEN 0>\n\t<TELL TAB \"You get up from the command chair.\" CR>\n>"
  },
  "RT-EMERGENCY-MENU": {
   "name": "RT-EMERGENCY-MENU",
   "file": "command.zil",
   "line": 295,
   "endLine": 380,
   "source": "<ROUTINE RT-EMERGENCY-MENU (\"AUX\" X1 Y1 X2 Y2)\n\t<SET X1 1>\n\t<SET Y1 <L-PIXELS 4>>\n\t<SET X2 <C-PIXELS 25>>\n\t<SET Y2 <L-PIXELS 6>>\n \n\t<CLEAR 2>\n\t<UPDATE-STATUS-LINE>\n\t<SCREEN 2>\n\t<CURSET 1 1>\n\t<TELL \"Emergency menu\">\n \n\t<CCURSET 4 1>\n\t<HLIGHT ,K-H-INV>\n\t<COND\n\t\t(,GL-KLAXON-ON\n\t\t\t<TELL \"ON \">\n\t\t)\n\t\t(T\n\t\t\t<TELL \"OFF\">\n\t\t)\n\t>\n\t<HLIGHT ,K-H-NRM>\n\t<CCURSET 4 4>\n\t<TELL \"Emergency klaxons\">\n\t<CCURSET 4 24>\n\t<TELL \"K\">\n \n\t<HLIGHT ,K-H-NRM>\n\t<CCURSET 5 4>\n\t<TELL \"Exit\">\n\t<CCURSET 5 24>\n\t<TELL \"X\">\n \n\t<REPEAT ()\n\t\t<SCREEN 0>\n\t\t<SET C <INPUT 1>>\n\t\t<COND\n\t\t\t(<EQUAL? .C ,K-CLICK1 ,K-CLICK2>\n\t\t\t\t<COND\n\t\t\t\t\t(<MOUSE-INPUT? 2 .X1 .Y1 .X2 .Y2>\n\t\t\t\t\t\t<SET L <PIXELS-L ,GL-MOUSE-Y>>\n\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t(<EQUAL? .L 1>\n\t\t\t\t\t\t\t\t<SET C !\\k>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t<SET C !\\x>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t)\n\t\t\t(<AND <G=? .C !\\A>\n\t\t\t\t\t<L=? .C !\\Z>\n\t\t\t\t>\n\t\t\t\t<SET C <+ .C 32>>\t\t; \"Change to lower case\"\n\t\t\t)\n\t\t>\n\t\t<COND\n\t\t\t(<EQUAL? .C !\\k>\n\t\t\t\t<SCREEN 2>\n\t\t\t\t<CCURSET 4 1>\n\t\t\t\t<HLIGHT ,K-H-INV>\n\t\t\t\t<COND\n\t\t\t\t\t(<SETG GL-KLAXON-ON <NOT ,GL-KLAXON-ON>>\n\t\t\t\t\t\t<RT-QUEUE ,RT-I-KLAXON <+ ,GL-MOVES 1>>\n\t\t\t\t\t\t<TELL \"ON \">\n\t\t\t\t\t)\n\t\t\t\t\t(T\n\t\t\t\t\t\t<RT-DEQUEUE ,RT-I-KLAXON>\n\t\t\t\t\t\t<TELL \"OFF\">\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<HLIGHT ,K-H-NRM>\n\t\t\t)\n\t\t\t(<EQUAL? .C !\\x>\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t\t(T\n\t\t\t\t<SOUND ,S-BEEP>\n\t\t\t)\n\t\t>\n\t>\n\t<RTRUE>\n>"
  },
  "RT-ROV-MENU": {
   "name": "RT-ROV-MENU",
   "file": "command.zil",
   "line": 382,
   "endLine": 391,
   "source": "<ROUTINE RT-ROV-MENU ()\n\t<CLEAR 2>\n\t<UPDATE-STATUS-LINE>\n\t<SCREEN 2>\n\t<CURSET 1 1>\n\t<TELL \"R.O.V. menu\">\n\t<SCREEN 0>\n\t<INPUT 1>\n\t<RTRUE>\n>"
  },
  "RT-AIR-MENU": {
   "name": "RT-AIR-MENU",
   "file": "command.zil",
   "line": 393,
   "endLine": 420,
   "source": "<ROUTINE RT-AIR-MENU ()\n\t<CLEAR 2>\n\t<UPDATE-STATUS-LINE>\n\t<SCREEN 2>\n\t<CURSET 1 1>\n\t<TELL \"Breathing Mix menu\">\n \n\t<CCURSET 4 1>\n\t<TELL \"Oxygen: \">\n\t<RT-PRINT-FLOAT ,GL-OXYGEN-QTY ,K-OXYGEN-FACTOR>\n\t<TELL \"% - \">\n\t<RT-GAS-LEVEL-MSG ,GL-OXYGEN-QTY ,K-OXY-LOW-1 ,K-OXY-HIGH-1 ,K-OXY-NOM>\n\t<TELL \"|Carbon dioxide: \">\n\t<RT-PRINT-FLOAT ,GL-CO2-QTY ,K-CO2-FACTOR>\n\t<TELL \"% - \">\n\t<RT-GAS-LEVEL-MSG ,GL-CO2-QTY -1 ,K-CO2-HIGH-1 ,K-CO2-NOM>\n\t<TELL \"|Nitrogen: \">\n\t<RT-PRINT-FLOAT ,GL-NITROGEN-QTY ,K-NITROGEN-FACTOR>\n\t<TELL \"% - \">\n\t<RT-GAS-LEVEL-MSG ,GL-NITROGEN-QTY ,K-NIT-LOW-1 ,K-NIT-HIGH-1 ,K-NIT-NOM>\n\t<TELL \"|Helium: \">\n\t<RT-PRINT-FLOAT ,GL-HELIUM-QTY ,K-HELIUM-FACTOR>\n\t<TELL \"%|\">\n \n\t<SCREEN 0>\n\t<INPUT 1>\n\t<RTRUE>\n>"
  },
  "RT-GAS-LEVEL-MSG": {
   "name": "RT-GAS-LEVEL-MSG",
   "file": "command.zil",
   "line": 422,
   "endLine": 440,
   "source": "<ROUTINE RT-GAS-LEVEL-MSG (QTY LOW HIGH NOM)\n\t<COND\n\t\t(<L=? .QTY .LOW>\n\t\t\t<TELL \"low\">\n\t\t)\n\t\t(<G=? .QTY .HIGH>\n\t\t\t<TELL \"high\">\n\t\t)\n\t\t(<EQUAL? .QTY .NOM>\n\t\t\t<TELL \"nominal\">\n\t\t)\n\t\t(<L? .QTY .NOM>\n\t\t\t<TELL \"less than nominal\">\n\t\t)\n\t\t(T\n\t\t\t<TELL \"more than nominal\">\n\t\t)\n\t>\n>"
  },
  "RT-POWER-MENU": {
   "name": "RT-POWER-MENU",
   "file": "command.zil",
   "line": 442,
   "endLine": 451,
   "source": "<ROUTINE RT-POWER-MENU ()\n\t<CLEAR 2>\n\t<UPDATE-STATUS-LINE>\n\t<SCREEN 2>\n\t<CURSET 1 1>\n\t<TELL \"Power menu\">\n\t<SCREEN 0>\n\t<INPUT 1>\n\t<RTRUE>\n>"
  },
  "RT-LIGHT-MENU": {
   "name": "RT-LIGHT-MENU",
   "file": "command.zil",
   "line": 453,
   "endLine": 462,
   "source": "<ROUTINE RT-LIGHT-MENU ()\n\t<CLEAR 2>\n\t<UPDATE-STATUS-LINE>\n\t<SCREEN 2>\n\t<CURSET 1 1>\n\t<TELL \"Lighting menu\">\n\t<SCREEN 0>\n\t<INPUT 1>\n\t<RTRUE>\n>"
  },
  "RT-SUPPORT-MENU": {
   "name": "RT-SUPPORT-MENU",
   "file": "command.zil",
   "line": 464,
   "endLine": 614,
   "source": "<ROUTINE RT-SUPPORT-MENU (\"AUX\" X1 Y1 X2 Y2)\n\t<SET X1 1>\n\t<SET Y1 <L-PIXELS 4>>\n\t<SET X2 <C-PIXELS 28>>\n\t<SET Y2 <L-PIXELS 9>>\n \n\t<CLEAR 2>\n\t<UPDATE-STATUS-LINE>\n\t<SCREEN 2>\n\t<CURSET 1 1>\n\t<TELL \"Life support menu\">\n \n\t<CCURSET 4 1>\n\t<HLIGHT ,K-H-INV>\n\t<COND\n\t\t(,GL-SCRUBBERS-ON\n\t\t\t<TELL \"ON \">\n\t\t)\n\t\t(T\n\t\t\t<TELL \"OFF\">\n\t\t)\n\t>\n\t<HLIGHT ,K-H-NRM>\n\t<CCURSET 4 4>\n\t<TELL \"CO2 scrubbers\">\n\t<CCURSET 4 27>\n\t<TELL \"S\">\n \n\t<CCURSET 5 1>\n\t<HLIGHT ,K-H-INV>\n\t<COND\n\t\t(,GL-HEATERS-ON\n\t\t\t<TELL \"ON \">\n\t\t)\n\t\t(T\n\t\t\t<TELL \"OFF\">\n\t\t)\n\t>\n\t<HLIGHT ,K-H-NRM>\n\t<CCURSET 5 4>\n\t<TELL \"Heaters\">\n\t<CCURSET 5 27>\n\t<TELL \"H\">\n \n\t<CCURSET 6 1>\n\t<HLIGHT ,K-H-INV>\n\t<TELL \"ON \">\n\t<HLIGHT ,K-H-NRM>\n\t<CCURSET 6 4>\n\t<TELL \"Helium de-scramblers\">\n\t<CCURSET 6 27>\n\t<TELL \"D\">\n \n\t<CCURSET 7 1>\n\t<HLIGHT ,K-H-INV>\n\t<TELL \"ON \">\n\t<HLIGHT ,K-H-NRM>\n\t<CCURSET 7 4>\n\t<TELL \"De-humidifiers\">\n\t<CCURSET 7 27>\n\t<TELL \"M\">\n \n\t<HLIGHT ,K-H-NRM>\n\t<CCURSET 8 4>\n\t<TELL \"Exit\">\n\t<CCURSET 8 27>\n\t<TELL \"X\">\n \n\t<CCURSET 4 50>\n\t<TELL \"Interior temp:\">\n\t<CCURSET 5 50>\n\t<RT-PRINT-FLOAT ,GL-DEEPCORE-TEMP ,K-TEMP-FACTOR>\n\t<TELL \" deg. F\">\n \n\t<REPEAT ()\n\t\t<SCREEN 0>\n\t\t<SET C <INPUT 1>>\n\t\t<COND\n\t\t\t(<EQUAL? .C ,K-CLICK1 ,K-CLICK2>\n\t\t\t\t<COND\n\t\t\t\t\t(<MOUSE-INPUT? 2 .X1 .Y1 .X2 .Y2>\n\t\t\t\t\t\t<SET L <PIXELS-L ,GL-MOUSE-Y>>\n\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t(<EQUAL? .L 1>\n\t\t\t\t\t\t\t\t<SET C !\\s>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t(<EQUAL? .L 2>\n\t\t\t\t\t\t\t\t<SET C !\\h>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t(<EQUAL? .L 3>\n\t\t\t\t\t\t\t\t<SET C !\\d>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t(<EQUAL? .L 4>\n\t\t\t\t\t\t\t\t<SET C !\\m>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t<SET C !\\x>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t)\n\t\t\t(<AND <G=? .C !\\A>\n\t\t\t\t\t<L=? .C !\\Z>\n\t\t\t\t>\n\t\t\t\t<SET C <+ .C 32>>\t\t; \"Change to lower case\"\n\t\t\t)\n\t\t>\n\t\t<COND\n\t\t\t(<EQUAL? .C !\\s>\n\t\t\t\t<SETG GL-SCRUBBERS-ON <NOT ,GL-SCRUBBERS-ON>>\n\t\t\t\t<SCREEN 2>\n\t\t\t\t<CCURSET 4 1>\n\t\t\t\t<HLIGHT ,K-H-INV>\n\t\t\t\t<COND\n\t\t\t\t\t(,GL-SCRUBBERS-ON\n\t\t\t\t\t\t<TELL \"ON \">\n\t\t\t\t\t)\n\t\t\t\t\t(T\n\t\t\t\t\t\t<TELL \"OFF\">\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<HLIGHT ,K-H-NRM>\n\t\t\t)\n\t\t\t(<EQUAL? .C !\\h>\n\t\t\t\t<SETG GL-HEATERS-ON <NOT ,GL-HEATERS-ON>>\n\t\t\t\t<SCREEN 2>\n\t\t\t\t<CCURSET 5 1>\n\t\t\t\t<HLIGHT ,K-H-INV>\n\t\t\t\t<COND\n\t\t\t\t\t(,GL-HEATERS-ON\n\t\t\t\t\t\t<TELL \"ON \">\n\t\t\t\t\t)\n\t\t\t\t\t(T\n\t\t\t\t\t\t<TELL \"OFF\">\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<HLIGHT ,K-H-NRM>\n\t\t\t)\n\t\t\t(<EQUAL? .C !\\d>)\n\t\t\t(<EQUAL? .C !\\m>)\n\t\t\t(<EQUAL? .C !\\x>\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t\t(T\n\t\t\t\t<SOUND ,S-BEEP>\n\t\t\t)\n\t\t>\n\t>\n\t<RTRUE>\n>"
  },
  "RT-PUMP-MENU": {
   "name": "RT-PUMP-MENU",
   "file": "command.zil",
   "line": 620,
   "endLine": 752,
   "source": "<ROUTINE RT-PUMP-MENU (\"AUX\" X1 Y1 X2 Y2)\n\t<SET X1 1>\n\t<SET Y1 <L-PIXELS 4>>\n\t<SET X2 <C-PIXELS 24>>\n\t<SET Y2 <L-PIXELS 6>>\n \n\t<CLEAR 2>\n\t<UPDATE-STATUS-LINE>\n\t<SCREEN 2>\n\t<CURSET 1 1>\n\t<TELL \"Pump and compressor menu\">\n \n\t<CCURSET 4 1>\n\t<HLIGHT ,K-H-INV>\n\t<COND\n\t\t(,GL-WATER-PUMP-ON\n\t\t\t<TELL \"ON \">\n\t\t)\n\t\t(T\n\t\t\t<TELL \"OFF\">\n\t\t)\n\t>\n\t<HLIGHT ,K-H-NRM>\n\t<CCURSET 4 4>\n\t<TELL \"Fresh water pumps\">\n\t<CCURSET 4 23>\n\t<TELL \"P\">\n \n;\t<CCURSET 4 1>\n;\t<HLIGHT ,K-H-INV>\n;\t<COND\n\t\t(,GL-PT-BILGE-ON\n\t\t\t<TELL \"ON \">\n\t\t)\n\t\t(T\n\t\t\t<TELL \"OFF\">\n\t\t)\n\t>\n;\t<HLIGHT ,K-H-NRM>\n;\t<CCURSET 4 4>\n;\t<TELL \"Port bilge pumps\">\n;\t<CCURSET 4 27>\n;\t<TELL \"P\">\n \n;\t<CCURSET 5 1>\n;\t<HLIGHT ,K-H-INV>\n;\t<COND\n\t\t(,GL-SB-BILGE-ON\n\t\t\t<TELL \"ON \">\n\t\t)\n\t\t(T\n\t\t\t<TELL \"OFF\">\n\t\t)\n\t>\n;\t<HLIGHT ,K-H-NRM>\n;\t<CCURSET 5 4>\n;\t<TELL \"Starboard bilge pumps\">\n;\t<CCURSET 5 27>\n;\t<TELL \"S\">\n \n\t<HLIGHT ,K-H-NRM>\n\t<CCURSET 5 4>\n\t<TELL \"Exit\">\n\t<CCURSET 5 23>\n\t<TELL \"X\">\n \n\t<REPEAT ()\n\t\t<SCREEN 0>\n\t\t<SET C <INPUT 1>>\n\t\t<COND\n\t\t\t(<EQUAL? .C ,K-CLICK1 ,K-CLICK2>\n\t\t\t\t<COND\n\t\t\t\t\t(<MOUSE-INPUT? 2 .X1 .Y1 .X2 .Y2>\n\t\t\t\t\t\t<SET L <PIXELS-L ,GL-MOUSE-Y>>\n\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t(<EQUAL? .L 1>\n\t\t\t\t\t\t\t\t<SET C !\\p>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t;\t(<EQUAL? .L 2>\n\t\t\t\t\t\t\t\t<SET C !\\s>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t<SET C !\\x>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t)\n\t\t\t(<AND <G=? .C !\\A>\n\t\t\t\t\t<L=? .C !\\Z>\n\t\t\t\t>\n\t\t\t\t<SET C <+ .C 32>>\t\t; \"Change to lower case\"\n\t\t\t)\n\t\t>\n\t\t<COND\n\t\t\t(<EQUAL? .C !\\p>\n\t\t\t\t<SCREEN 2>\n\t\t\t\t<CCURSET 4 1>\n\t\t\t\t<HLIGHT ,K-H-INV>\n\t\t\t\t<COND\n\t\t\t\t\t(<SETG GL-WATER-PUMP-ON <NOT ,GL-WATER-PUMP-ON>>\n\t\t\t\t\t\t<TELL \"ON \">\n\t\t\t\t\t)\n\t\t\t\t\t(T\n\t\t\t\t\t\t<TELL \"OFF\">\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<HLIGHT ,K-H-NRM>\n\t\t\t)\n\t\t;\t(<EQUAL? .C !\\s>\n\t\t\t\t<SCREEN 2>\n\t\t\t\t<CCURSET 5 1>\n\t\t\t\t<HLIGHT ,K-H-INV>\n\t\t\t\t<COND\n\t\t\t\t\t(<SETG GL-SB-BILGE-ON <NOT ,GL-SB-BILGE-ON>>\n\t\t\t\t\t\t<TELL \"ON \">\n\t\t\t\t\t)\n\t\t\t\t\t(T\n\t\t\t\t\t\t<TELL \"OFF\">\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<HLIGHT ,K-H-NRM>\n\t\t\t)\n\t\t\t(<EQUAL? .C !\\x>\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t\t(T\n\t\t\t\t<SOUND ,S-BEEP>\n\t\t\t)\n\t\t>\n\t>\n\t<RTRUE>\n>"
  },
  "RT-TH-DESCRAMBLER-CONTROL-BOX": {
   "name": "RT-TH-DESCRAMBLER-CONTROL-BOX",
   "file": "command.zil",
   "line": 768,
   "endLine": 770,
   "source": "<ROUTINE RT-TH-DESCRAMBLER-CONTROL-BOX (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-I-CRANE-1": {
   "name": "RT-I-CRANE-1",
   "file": "crane.zil",
   "line": 20,
   "endLine": 61,
   "source": "<ROUTINE RT-I-CRANE-1 ()\n\t<RT-QUEUE ,RT-I-CRANE-2 <+ ,GL-MOVES 1>>\n\t<SETG GL-CRANE-FALLING? T>\n\t<RT-QUEUE ,RT-I-KLAXON <+ ,GL-MOVES 1>>\n\t<SETG GL-KLAXON-ON T>\n\t; \"Automatic temperature control fails.\"\n\t<RT-QUEUE ,RT-I-DEEPCORE-TEMP <+ ,GL-MOVES 1>>\n \n\t<TELL\n\"\tSuddenly the lights go out and emergency klaxons start blaring. \"\n\t>\n\t<COND\n\t\t(<MC-HERE? ,RM-COMMAND-MODULE>\n\t\t\t<TELL\n\"The control panel starts flashing wildly. Lindsey takes one look out of the\nfront viewport, slaps the intercom button, and screams,\"\n\t\t\t>\n\t\t)\n\t\t(T\n\t\t\t<TELL \"A second later Lindsey's voice screams over the intercom,\">\n\t\t)\n\t>\n\t<TELL\n\" \\\"Emergency! The umbilicus is falling on top of us. It's coiling up on top\nof the starboard cylinders. God help us if it's still hooked to the crane.\nWe've got two minutes before whatever's attached to the other end hits us.\nEverybody get the hell out of the starboard cylinders. Repeat. Evacuate the\nstarboard cylinders immediately.\\\" Emergency lights flicker on.|\"\n\t>\n\t<COND\n\t\t(<MC-HERE? ,RM-COMMAND-MODULE>\n\t\t\t<MOVE ,CH-CATFISH ,RM-CORRIDOR>\n\t\t;\t<RT-QUEUE ,RT-I-CATFISH <+ ,GL-MOVES 1>>\n\t\t\t<TELL\n\"\tCatfish says, \\\"Shit! The arc-welding kit's in one of the starboard\ncylinders. If that crane hits us, we're gonna need it for damage control.\\\"\nHe tears out of the cylinder.\" CR\n\t\t\t>\n\t\t)\n\t>\n\t<RTRUE>\n>"
  },
  "RT-I-CRANE-2": {
   "name": "RT-I-CRANE-2",
   "file": "crane.zil",
   "line": 63,
   "endLine": 69,
   "source": "<ROUTINE RT-I-CRANE-2 ()\n\t<RT-QUEUE ,RT-I-CRANE-3 <+ ,GL-MOVES 1>>\n\t<TELL\n\"\tA rasping sound grates against your ears as loops of the umbilicus hit\nDeepcore and strafe the starboard cylinders.\" CR\n\t>\n>"
  },
  "RT-I-CRANE-3": {
   "name": "RT-I-CRANE-3",
   "file": "crane.zil",
   "line": 71,
   "endLine": 78,
   "source": "<ROUTINE RT-I-CRANE-3 ()\n\t<RT-QUEUE ,RT-I-CRANE-4 <+ ,GL-MOVES 1>>\n\t<MOVE ,CH-CATFISH ,RM-LADDER-B2>\n\t<TELL\n\"\tA grinding crash of metal reverberates throughout Deepcore as some huge\npiece of equipment strikes one of the cylinders and bounces off.\" CR\n\t>\n>"
  },
  "RT-I-CRANE-4": {
   "name": "RT-I-CRANE-4",
   "file": "crane.zil",
   "line": 80,
   "endLine": 92,
   "source": "<ROUTINE RT-I-CRANE-4 ()\n\t<RT-QUEUE ,RT-I-CRANE-5 <+ ,GL-MOVES 1>>\n\t<TELL \"\tLindsey\">\n\t<COND\n\t\t(<MC-HERE? ,RM-COMMAND-MODULE>\n\t\t\t<TELL \" hits the intercom button again and screams,\">\n\t\t)\n\t\t(T\n\t\t\t<TELL \"'s voice shrieks over the intercom.\">\n\t\t)\n\t>\n\t<TELL \" \\\"Here it comes! All hands rig for impact!\\\"\" CR>\n>"
  },
  "RT-I-CRANE-5": {
   "name": "RT-I-CRANE-5",
   "file": "crane.zil",
   "line": 94,
   "endLine": 170,
   "source": "<ROUTINE RT-I-CRANE-5 ()\n\t<SETG GL-CRANE-FALLING? <>>\n\t<SETG GL-CRANE-DOWN? T>\n \n\t; \"Start fire in sub-bay\"\n\t<MOVE ,TH-FIRE ,RM-SUB-BAY>\n\t<RT-QUEUE ,RT-I-FIRE-1 <+ ,GL-MOVES 14>>\n \n\t; \"Start leak into port battery room\"\n\t<SETG GL-BATTERY-LEAK T>\n\t<MOVE ,TH-CRACK ,RM-PT-OBS-DECK> ; \"rab\"\n; \"Duane - we may not need gl-battery-leak.  We can test for the loc of\n\tcrack instead.\"\n\t<RT-QUEUE ,RT-I-BATTERY-LEAK <+ ,GL-MOVES 1>>\n \n\t<MOVE ,CH-COFFEY ,RM-COMMAND-MODULE>\n\t<MOVE ,CH-CATFISH ,RM-DIVE-GEAR-STORAGE>\n\t<FSET ,CH-CATFISH ,FL-LOCKED>\n\t<FCLEAR ,LG-DGS-DOOR ,FL-OPEN>\n\t<MOVE ,CH-HIPPY ,RM-FRESH-WATER-STORAGE>\n\t<RT-QUEUE ,RT-I-HIPPY-RETURN <+ ,GL-MOVES 30>>\n\t<COND\n\t\t(<MC-HERE? ,RM-DIVE-GEAR-STORAGE>\n\t\t\t<TELL\n\"\tCatfish rushes in, slamming the door behind him. He starts rummaging\naround in his locker. \\\"I've got to find the arc-welder,\\\" he yells.|\"\n\t\t\t>\n\t\t)\n\t\t(T\n\t\t\t<RT-QUEUE ,RT-I-CATFISH-TRAPPED <+ ,GL-MOVES 4>>\n\t\t)\n\t>\n\t<TELL\n\"\tThe inside of your head explodes as the crane slams into Deepcore with\nthe impact of a hundred sticks of dynamite. The crane crashes into the\nstarboard cylinders at an angle, toppling Deepcore almost over onto its side.\nYou collide with the starboard bulkhead as the floor tilts crazily below your\nfeet. Then you're thrown to the deck as the crane shears off the top of two\naft cylinders and the rest of the rig crashes back onto the ocean floor with\na shuddering jolt.|\"\n\t>\n\t<COND\n\t\t(<MC-HERE? ,RM-COMMAND-MODULE>\n\t\t\t<TELL\n\"\tCoffey saunters into the command module, looking unconcerned about the\nchaos that surrounds him. Lindsey looks up at you and says, \\\"I know we have\nour differences, Bud. But you're the one in command here, and I'll do\nwhatever you tell me to.\\\"\" CR\n\t\t\t>\n\t\t)\n\t\t(<MC-HERE? ,RM-DIVE-GEAR-STORAGE>\n\t\t\t<TELL\n\"\tWhen your head clears you look around and take stock of your situation.\nA locker has fallen over, pinning Catfish to the floor. Water is cascading\ndown into the room from the ceiling above.\" CR\n\t\t\t>\n\t\t)\n\t\t(<MC-HERE? ,RM-SUB-BAY>\n\t\t\t<TELL\n\"\tA reserve oxygen cylinder has been knocked loose of its mooring and lies\non the floor. You can hear the hiss of the pure oxygen as it escapes into the\nbreathing mix. Suddenly, an exposed wire along the wall begins to spark. The\ninsulation nearby catches fire and the flames start to work their way towards\nthe wooden dive locker.\" CR\n\t\t\t>\n\t\t)\n\t;\t(<PLAYER-IN-SQUASHED-CYLINDER?>\n\t\t\t<TELL\n\"\tBefore you can react, a solid wall of water engulfs you, slamming you up\nagainst the steel wall and knocking you unconscious. Seconds later, you\ndrown.|\"\n\t\t\t>\n\t\t\t<RT-END-OF-GAME>\n\t\t)\n\t>\n\t<RTRUE>\n>"
  },
  "RT-I-HIPPY-RETURN": {
   "name": "RT-I-HIPPY-RETURN",
   "file": "crane.zil",
   "line": 172,
   "endLine": 184,
   "source": "<ROUTINE RT-I-HIPPY-RETURN ()\n\t<MOVE ,CH-HIPPY ,HERE>\n\t<TELL\n\"\tHippy stumbles into the room, sopping wet and gasping for air. \\\"I got\ntrapped down in Fresh Water Storage,\\\" he gasps. \\\"The doors buckled and the\nonly way out was through the emergency escape hatch in the bottom of the\ncylinder. But the wheel was jammed and I couldn't turn it. I had just given\nmyself up for dead, when suddenly the wheel started turning all by itself! I\nwas pretty spooked, but I didn't sit around to figure it out. I opened the\nhatch and swam over to the MoonPool. But just as I came out of the cylinder,\nI saw this...shape...disappear off towards the trench.\\\"\" CR\n\t>\n>"
  },
  "RT-I-KLAXON": {
   "name": "RT-I-KLAXON",
   "file": "crane.zil",
   "line": 192,
   "endLine": 199,
   "source": "<ROUTINE RT-I-KLAXON ()\n\t<RT-QUEUE ,RT-I-KLAXON <+ ,GL-MOVES 1>>\n\t<COND\n\t\t(<NOT <FSET? ,HERE ,FL-WATER>>\n\t\t\t<TELL \"\tThe klaxons continue to blare in your ears.\" CR>\n\t\t)\n\t>\n>"
  },
  "RT-I-BATTERY-LEAK": {
   "name": "RT-I-BATTERY-LEAK",
   "file": "crane.zil",
   "line": 209,
   "endLine": 285,
   "source": "<ROUTINE RT-I-BATTERY-LEAK ()\n\t<RT-QUEUE ,RT-I-BATTERY-LEAK <+ ,GL-MOVES 1>>\n\t<COND\n\t\t(<FSET? ,TH-PT-BILGE-BUTTON ,FL-ON>\t;,GL-PT-BILGE-ON\n\t\t\t<COND\n\t\t\t\t(<G? ,GL-WATER-LEVEL 0>\n\t\t\t\t\t<DEC GL-WATER-LEVEL>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<IGRTR? GL-WATER-LEVEL 19>\n\t\t\t<COND\n\t\t\t\t(<MC-HERE? ,RM-PT-BATTERY-ROOM>\n\t\t\t\t\t<TELL\n\"\tSlowly, the water level rises until it encases the base of the huge\npowercels. Suddenly, everything goes dark and you hear all Deepcore's\nmachinery grind to a halt. You see a few blue flashes below the water level,\nand then everything becomes very still. With\"\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<FSET? ,HERE ,FL-WATER>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<NOT <FSET? ,HERE ,FL-INDOORS>>\n\t\t\t\t\t\t\t<TELL\n\"\tYou glance back at Deepcore and see all the lights flicker out. You\nrealize immediately that something has shorted out the powercels in the\nbattery room. You swim back to investigate, emerge into the MoonPool, and try\nto make your way down to the battery room. But with\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL\n\"\tSuddenly, everything goes dark and you hear all of Deepcore's machinery\ngrind to a halt. In the eerie silence that follows, you realize that\nsomething has shorted out the powercels in the battery room. With\"\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" no power to maintain the temperature and the air supply, the end comes much\nmore quickly than you would have expected.|\"\n\t\t\t>\n\t\t\t<RT-END-OF-GAME>\n\t\t)\n\t\t(<MC-HERE? ,RM-PT-BATTERY-ROOM>\n\t\t\t; \"These message need to denote action or change of state, not\n\t\t\t\tdescription of current state.\"\n\t\t\t<TELL \"\tThe pool of water\">\n\t\t\t<COND\n\t\t\t\t(<G? ,GL-WATER-LEVEL 17>\n\t\t\t\t\t<TELL\n\" will reach the battery cases within seconds. If it does, all will be lost.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<G? ,GL-WATER-LEVEL 10>\n\t\t\t\t\t<TELL\n\" is rising rapidly, and will soon short out the batteries.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<G? ,GL-WATER-LEVEL 5>\n\t\t\t\t\t<TELL\n\", if it rises much further, will reach the battery cases and short out\nDeepcore's sole remaining source of emergency power.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL\n\" is approaching the base of the battery cases.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-RM-PT-BATTERY-ROOM": {
   "name": "RT-RM-PT-BATTERY-ROOM",
   "file": "crane.zil",
   "line": 303,
   "endLine": 369,
   "source": "<ROUTINE RT-RM-PT-BATTERY-ROOM (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL\n\"\tThis is one of the rooms that contain the huge fuelcells that power\nDeepcore. The powercels are surrounded by a wire cage that is festooned with\nsigns that warn of the dangers of electricity. The fuelcells are humming\nominously - as usual - and an acrid, ozone smell fills the air. The only\nexit is through the hatch in the aft bulkhead.|\"\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(,GL-BATTERY-LEAK\n\t\t\t\t\t<TELL\n\"\tA stream of water is flowing down the wall from the ceiling \"\n\t\t\t\t\t>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,TH-PT-BILGE-BUTTON ,FL-ON>\t;,GL-PT-BILGE-ON\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(<ZERO? ,GL-WATER-LEVEL>\n\t\t\t\t\t\t\t\t\t<TELL\n\"but it is sucked up by the pump as soon as it hits the floor.\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t\t<TELL\n\"into the pool of water on the floor. The pool looks like it is getting\nsmaller.\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<L? ,GL-WATER-LEVEL 6>\n\t\t\t\t\t\t\t<TELL\n\"into a pool of water on the floor. As the water rises, it approaches the\nbase of the battery cases.\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<L? ,GL-WATER-LEVEL 11>\n\t\t\t\t\t\t\t<TELL\n\"into the pool of water. If the water rises much further, it will reach the\nbattery cases and short out Deepcore's sole remaining source of emergency\npower.\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<L? ,GL-WATER-LEVEL 18>\n\t\t\t\t\t\t\t<TELL \"into the rapidly rising water.\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<L? ,GL-WATER-LEVEL 20>\n\t\t\t\t\t\t\t<TELL\n\"into the pool of water. The water will reach the battery cases within\nseconds. If it does, all will be lost.\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL \"into the rapidly rising water below.\">\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<CRLF>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-POWERCEL": {
   "name": "RT-TH-POWERCEL",
   "file": "crane.zil",
   "line": 383,
   "endLine": 385,
   "source": "<ROUTINE RT-TH-POWERCEL (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-TH-POOL-OF-WATER": {
   "name": "RT-TH-POOL-OF-WATER",
   "file": "crane.zil",
   "line": 399,
   "endLine": 401,
   "source": "<ROUTINE RT-TH-POOL-OF-WATER (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-RM-PT-OBS-DECK": {
   "name": "RT-RM-PT-OBS-DECK",
   "file": "crane.zil",
   "line": 418,
   "endLine": 449,
   "source": "<ROUTINE RT-RM-PT-OBS-DECK (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the port observation deck, which has a huge domed plexiglass window where\nthe forward bulkhead should be. The only exit is in the aft bulkhead.|\"\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(,GL-BATTERY-LEAK\n\t\t\t\t\t<TELL\n\"\tThere is a fair-sized crack in the starboard bulkhead, up near the\nceiling. Water is pouring in through the crack, running down the wall,\nand disappearing into the room below.|\"\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-CRACK": {
   "name": "RT-TH-CRACK",
   "file": "crane.zil",
   "line": 461,
   "endLine": 481,
   "source": "<ROUTINE RT-TH-CRACK (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(,NOW-PRSI\n\t\t\t<COND\n\t\t\t\t(<VERB? PUT>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<MC-PRSO? ,TH-WELDING-ROD>\n\t\t\t\t\t\t\t<RT-WELD-CRACK>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? WELD>\n\t\t\t<RT-WELD-CRACK>\n\t\t)\n\t>\n>"
  },
  "RT-WELD-CRACK": {
   "name": "RT-WELD-CRACK",
   "file": "crane.zil",
   "line": 483,
   "endLine": 520,
   "source": "<ROUTINE RT-WELD-CRACK ()\n\t<COND\n\t\t(<AND <RT-META-IN? ,TH-ARC-WELDER ,HERE>\n\t\t\t\t<IN? ,TH-WELDING-ROD ,TH-RED-CABLE>\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(<AND <FSET? ,TH-ARC-WELDER ,FL-ON>\n\t\t\t\t\t\t<EQUAL? <GETP ,TH-BLACK-CABLE ,P?OWNER> ,LG-WALL>\n\t\t\t\t\t>\n\t\t\t\t\t<REMOVE ,TH-CRACK>\n\t\t\t\t\t<SETG GL-BATTERY-LEAK <>>\n\t\t\t\t\t<SETG GL-WATER-LEVEL 0>\n\t\t\t\t\t<RT-DEQUEUE RT-I-BATTERY-LEAK>\n\t\t\t\t\t<FCLEAR ,TH-PT-BILGE-BUTTON ,FL-ON>\n\t\t\t\t\t<TELL\n\"\tYou hold the rod up to the crack. Sparks immediately start to fly from the\ntip of the rod and the end starts to glow. Soon, the softened metal begins to\nmelt into the crack, and the stream of water gradually disappears.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL\n\"\tYou hold the rod up next to the crack, but nothing happens.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? WELD>\n\t\t\t<TELL ,K-HOW-INTEND-MSG CR>\n\t\t\t<RFATAL>\n\t\t)\n\t\t(T\n\t\t\t<TELL\n\"\tYou hold the rod up next to the crack, but nothing happens.\" CR\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-ARC-WELDER": {
   "name": "RT-TH-ARC-WELDER",
   "file": "crane.zil",
   "line": 531,
   "endLine": 582,
   "source": "<ROUTINE RT-TH-ARC-WELDER (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL\n\"\tThe arc welder is a sturdy black box with red and black cables coming out\nof it. The red cable looks like a jumper cable, except that the clamp at the\nend is wrapped with thick rubber insulation. The black cable ends in an\nsuction cup that has an exposed electrode in the center. In addition, it has\nan on/off switch and a power cord.\" CR\n\t\t\t>\n\t\t)\n\t\t(<VERB? TURN-ON>\n\t\t\t<COND\n\t\t\t\t(<FSET? ,TH-ARC-WELDER ,FL-ON>\n\t\t\t\t\t<RT-ALREADY-MSG \"on\">\n\t\t\t\t)\n\t\t\t\t(<FSET? ,TH-WELDER-CORD ,FL-ON>\t;\"Is welder plugged in?\"\n\t\t\t\t\t<FSET ,TH-ARC-WELDER ,FL-ON>\n\t\t\t\t\t<TELL \"\tThe machine begins to hum.\" CR>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"\tThe welder isn't plugged in.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? TURN-OFF>\n\t\t\t<COND\n\t\t\t\t(<NOT <FSET? ,TH-ARC-WELDER ,FL-ON>>\n\t\t\t\t\t<RT-ALREADY-MSG \"off\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<FCLEAR ,TH-ARC-WELDER ,FL-ON>\n\t\t\t\t\t<TELL \"\tThe machine stops humming.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? PLUG-IN>\n\t\t\t<COND\n\t\t\t\t(<FSET? ,TH-WELDER-CORD ,FL-ON>\n\t\t\t\t\t<RT-ALREADY-MSG \"plugged in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<FSET ,TH-WELDER-CORD ,FL-ON>\n\t\t\t\t\t<TELL \"\tYou plug the power cord into the wall outlet.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-WELDING-ROD": {
   "name": "RT-TH-WELDING-ROD",
   "file": "crane.zil",
   "line": 593,
   "endLine": 602,
   "source": "<ROUTINE RT-TH-WELDING-ROD (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL \"\tIt's a stiff metal rod, about 14 inches long.\" CR>\n\t\t)\n\t>\n>"
  },
  "RT-TH-RED-CABLE": {
   "name": "RT-TH-RED-CABLE",
   "file": "crane.zil",
   "line": 613,
   "endLine": 645,
   "source": "<ROUTINE RT-TH-RED-CABLE (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(,NOW-PRSI\n\t\t\t<COND\n\t\t\t\t(<VERB? TAKE-WITH ATTACH PUT-IN>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<MC-PRSO? ,TH-WELDING-ROD>\n\t\t\t\t\t\t\t<MOVE ,TH-WELDING-ROD ,TH-RED-CABLE>\n\t\t\t\t\t\t\t<TELL \"\tYou put the welding rod into the clamp.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL\n\"\tThe red cable looks like a jumper cable, ending in a large insulated\nclamp with sharp steel teeth.\" CR\n\t\t\t>\n\t\t)\n\t\t(<VERB? ATTACH>\n\t\t\t<COND\n\t\t\t\t(<MC-PRSI? ,TH-WELDING-ROD>\n\t\t\t\t\t<MOVE ,TH-WELDING-ROD ,TH-RED-CABLE>\n\t\t\t\t\t<TELL \"\tYou put the welding rod into the clamp.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-BLACK-CABLE": {
   "name": "RT-TH-BLACK-CABLE",
   "file": "crane.zil",
   "line": 657,
   "endLine": 679,
   "source": "<ROUTINE RT-TH-BLACK-CABLE (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(,NOW-PRSI\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL\n\"\tThe black cable ends in an suction cup that has an exposed electrode in\nthe center.\" CR\n\t\t\t>\n\t\t)\n\t\t(<VERB? ATTACH>\n\t\t\t<PUTP ,TH-BLACK-CABLE ,P?OWNER ,PRSI>\n\t\t\t<TELL\n\"\tYou put the suction cup on\" the ,PRSI \", pressing hard to ensure a good\ncontact for the electrode.\" CR\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-WELDER-SWITCH": {
   "name": "RT-TH-WELDER-SWITCH",
   "file": "crane.zil",
   "line": 690,
   "endLine": 702,
   "source": "<ROUTINE RT-TH-WELDER-SWITCH (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL \"\tThe power switch is labelled 'ON' and 'OFF'.\" CR>\n\t\t)\n\t\t(<VERB? TURN-ON TURN-OFF>\n\t\t\t<RT-TH-ARC-WELDER>\n\t\t)\n\t>\n>"
  },
  "RT-TH-WELDER-CORD": {
   "name": "RT-TH-WELDER-CORD",
   "file": "crane.zil",
   "line": 716,
   "endLine": 736,
   "source": "<ROUTINE RT-TH-WELDER-CORD (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL \"\tThe power cord will plug into any wall outlet.\" CR>\n\t\t)\n\t\t(<VERB? PLUG-IN>\n\t\t\t<COND\n\t\t\t\t(<FSET? ,TH-WELDER-CORD ,FL-ON>\n\t\t\t\t\t<RT-ALREADY-MSG \"plugged in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<FSET ,TH-WELDER-CORD ,FL-ON>\n\t\t\t\t\t<TELL \"\tYou plug the power cord into the wall outlet.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-RM-LADDER-D2": {
   "name": "RT-RM-LADDER-D2",
   "file": "crane.zil",
   "line": 755,
   "endLine": 777,
   "source": "<ROUTINE RT-RM-LADDER-D2 (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the middle level of ladderwell D. A hatch in the forward bulkhead opens\nonto the pantry. There is a yellow button here, with a sign underneath it.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-PT-BILGE-BUTTON": {
   "name": "RT-TH-PT-BILGE-BUTTON",
   "file": "crane.zil",
   "line": 791,
   "endLine": 820,
   "source": "<ROUTINE RT-TH-PT-BILGE-BUTTON (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? READ>\n\t\t\t<TELL \"It says, \\\"Port Bilge Pumps.\\\"\" CR>\n\t\t)\n\t\t(<VERB? PUSH HIT>\n\t\t\t<TELL \"\tYou press the button and \">\n\t\t\t<COND\n\t\t\t\t(<FSET? ,TH-PT-BILGE-BUTTON ,FL-ON>\n\t\t\t\t\t<FCLEAR ,TH-PT-BILGE-BUTTON ,FL-ON>\n\t\t\t\t\t<TELL \"the whirring stops.\" CR>\n\t\t\t\t)\n\t\t\t\t(<G? ,GL-WATER-LEVEL 0>\n\t\t\t\t\t<FSET ,TH-PT-BILGE-BUTTON ,FL-ON>\n\t\t\t\t\t<TELL \"hear a distant whirring.\" CR>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<FCLEAR ,TH-PT-BILGE-BUTTON ,FL-ON>\n\t\t\t\t\t<TELL\n\"hear a distant whirring which stops soon after it starts. There must not be\nany water in the port bilge.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-SB-BILGE-BUTTON": {
   "name": "RT-TH-SB-BILGE-BUTTON",
   "file": "crane.zil",
   "line": 834,
   "endLine": 849,
   "source": "<ROUTINE RT-TH-SB-BILGE-BUTTON (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? READ>\n\t\t\t<TELL \"It says, \\\"Starboard Bilge Pumps.\\\"\" CR>\n\t\t)\n\t\t(<VERB? PUSH HIT>\n\t\t\t<TELL\n\"\tYou press the button and hear a distant whirring which stops soon after it\nstarts. There must not be any water in the starboard bilge.\" CR\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-I-CATFISH-TRAPPED": {
   "name": "RT-I-CATFISH-TRAPPED",
   "file": "crane.zil",
   "line": 855,
   "endLine": 868,
   "source": "<ROUTINE RT-I-CATFISH-TRAPPED ()\n\t<COND\n\t;\t(<MC-HERE? ,RM-DIVE-GEAR-STORAGE>\n\t\t)\n\t\t(T\n\t\t\t<TELL\n\"\tThe intercom buzzes. Then you hear a weak voice. \\\"This is Catfish. I'm\ntrapped under a locker in Dive Gear Storage. The water in here is rising\nfaster than the Johnstown flood. If one of y'all don't get down here pronto,\nI'm gonnna be singin' with the angels.\\\"\" CR\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-RM-DIVE-GEAR-STORAGE": {
   "name": "RT-RM-DIVE-GEAR-STORAGE",
   "file": "crane.zil",
   "line": 886,
   "endLine": 909,
   "source": "<ROUTINE RT-RM-DIVE-GEAR-STORAGE (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" a room that looks like the locker room at the local health club. The walls\nare lined with floor-to-ceiling lockers, one for each crew member. Your\nlocker is the one next to the exit in the aft bulkhead.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-BUD-GEAR-LOCKER": {
   "name": "RT-TH-BUD-GEAR-LOCKER",
   "file": "crane.zil",
   "line": 923,
   "endLine": 925,
   "source": "<ROUTINE RT-TH-BUD-GEAR-LOCKER (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-TH-BIG-LOCKER": {
   "name": "RT-TH-BIG-LOCKER",
   "file": "crane.zil",
   "line": 938,
   "endLine": 969,
   "source": "<ROUTINE RT-TH-BIG-LOCKER (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? MOVE LIFT PUSH PULL>\n\t\t\t<COND\n\t\t\t\t(<MC-PRSI? <> ,ROOMS ,TH-HANDS>\n\t\t\t\t\t<TELL\n\"\tYou strain at the locker, but you just don't have enough leverage to move\nit.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<MC-PRSI? ,TH-BARBELL>\n\t\t\t\t\t<FCLEAR ,CH-CATFISH ,FL-LOCKED>\n\t\t\t\t\t<RT-SET-PUPPY ,CH-CATFISH>\n\t\t\t\t\t<TELL\n\"\tUsing the bar as a lever, you strain against the weight of the dive\nlocker. Slowly, it inches up. Just when you realize that the bar is starting\nto slip from your grasp, Catfish manages to squirm free and roll out of the\nway. The locker crashes back to the floor. Catfish drags himself unsteadily\nto his feet and says, \\\"Thanks a lot, Chief. Nothing seems to be broken.\nLet's get the hell out of here.\\\"\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? OPEN>\n\t\t\t<TELL \"\tThe doors are jammed shut.\" CR>\n\t\t)\n\t>\n>"
  },
  "RT-GN-LOCKER": {
   "name": "RT-GN-LOCKER",
   "file": "crane.zil",
   "line": 971,
   "endLine": 983,
   "source": "<ROUTINE RT-GN-LOCKER (TBL FINDER \"AUX\" PTR N)\n\t<SET PTR <REST-TO-SLOT .TBL FIND-RES-OBJ1>>\n\t<SET N <FIND-RES-COUNT .TBL>>\n\t<COND\n\t\t(<AND <MC-HERE? ,RM-DIVE-GEAR-STORAGE>\n\t\t\t\t<IN? ,CH-CATFISH ,RM-DIVE-GEAR-STORAGE>\n\t\t\t\t<INTBL? ,TH-BIG-LOCKER .PTR .N>\n\t\t\t>\n\t\t\t<TELL \"[the big locker]|\">\n\t\t\t<RETURN ,TH-BIG-LOCKER>\n\t\t)\n\t>\n>"
  },
  "RT-LG-DGS-DOOR": {
   "name": "RT-LG-DGS-DOOR",
   "file": "crane.zil",
   "line": 994,
   "endLine": 1027,
   "source": "<ROUTINE RT-LG-DGS-DOOR (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? OPEN>\n\t\t\t<COND\n\t\t\t\t(<AND <NOT <FSET? ,LG-DGS-DOOR ,FL-OPEN>>\n\t\t\t\t\t\t<FSET? ,CH-CATFISH ,FL-LOCKED>\t;\"Catfish trapped\"\n\t\t\t\t\t>\n\t\t\t\t\t<FSET ,LG-DGS-DOOR ,FL-OPEN>\n\t\t\t\t\t<FCLEAR ,LG-FLOOD-DOOR ,FL-OPEN>\n\t\t\t\t\t<SETG OHERE ,HERE>\n\t\t\t\t\t<SETG HERE ,RM-DIVE-GEAR-STORAGE>\n\t\t\t\t\t<MOVE ,CH-PLAYER ,RM-DIVE-GEAR-STORAGE>\n\t\t\t\t\t<TELL\n\"\tYou open the door to the cylinder. Inside is a jumbled chaos. Water is\nstreaming down from the ceiling into an ever-rising pool on the floor.\nCatfish is sitting with his back to the wall, up to his chest in water. His\nlegs are pinned by a huge locker that has fallen over on top of him, and he\nis turning blue from the cold.|\n\tWater gushes out of the chamber when you open the door. It falls to the\nlevel below, triggering the automated flood control door that seals the\nstarboard side of Deepcore off from the central core. The hydraulic hose\nstiffens and the door swings shut.|\n\tYou step into the chamber. The frigid water comes up to your knees.\nCatfish looks up at you and grins weakly. \\\"Howdy, pardner.\\\"\" CR\n\t\t\t\t\t>\n\t\t\t\t;\t<RT-DO-WALK ,P?FORE>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-RM-RECREATION-ROOM": {
   "name": "RT-RM-RECREATION-ROOM",
   "file": "crane.zil",
   "line": 1045,
   "endLine": 1068,
   "source": "<ROUTINE RT-RM-RECREATION-ROOM (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"step into\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the recreation and exercise room. Against the wall is a stationary bicycle.\nNext to it is a treadmill. In the middle of the room is a lift bench with a\nbarbell resting on the stand. The only exit is to port.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-BARBELL": {
   "name": "RT-TH-BARBELL",
   "file": "crane.zil",
   "line": 1082,
   "endLine": 1095,
   "source": "<ROUTINE RT-TH-BARBELL (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? TAKE LIFT>\n\t\t\t<COND\n\t\t\t\t(<IN? ,TH-WEIGHTS ,TH-BARBELL>\n\t\t\t\t\t<TELL \"\tThe barbell is too heavy to lift.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-WEIGHTS": {
   "name": "RT-TH-WEIGHTS",
   "file": "crane.zil",
   "line": 1109,
   "endLine": 1125,
   "source": "<ROUTINE RT-TH-WEIGHTS (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? UNWEAR TAKE>\n\t\t\t<COND\n\t\t\t\t(<IN? ,TH-WEIGHTS ,TH-BARBELL>\n\t\t\t\t\t<MOVE ,TH-WEIGHTS ,HERE>\n\t\t\t\t\t<TELL\n\"\tYou remove the weights from the barbell and lay them on the floor.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-LIFT-BENCH": {
   "name": "RT-TH-LIFT-BENCH",
   "file": "crane.zil",
   "line": 1140,
   "endLine": 1142,
   "source": "<ROUTINE RT-TH-LIFT-BENCH (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-TH-TREADMILL": {
   "name": "RT-TH-TREADMILL",
   "file": "crane.zil",
   "line": 1156,
   "endLine": 1158,
   "source": "<ROUTINE RT-TH-TREADMILL (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-TH-CYCLE": {
   "name": "RT-TH-CYCLE",
   "file": "crane.zil",
   "line": 1173,
   "endLine": 1175,
   "source": "<ROUTINE RT-TH-CYCLE (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-RM-LADDER-B2": {
   "name": "RT-RM-LADDER-B2",
   "file": "crane.zil",
   "line": 1200,
   "endLine": 1239,
   "source": "<ROUTINE RT-RM-LADDER-B2 (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the middle level of ladderwell B. A corridor leads to the port side of\nDeepcore. A hatch in the starboard bulkhead opens onto the recreation room.\nDive gear storage is forward, and aft is the entrance to your own living\nquarters.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<MC-CONTEXT? ,M-ENTERED>\n\t\t\t<COND\n\t\t\t\t(<AND <EQUAL? ,GL-PUPPY ,CH-CATFISH>\n\t\t\t\t\t\t<NOT <LOC ,TH-ARC-WELDER>>\n\t\t\t\t\t>\n\t\t\t\t;\t<MOVE ,CH-CATFISH ,RM-LADDER-B2>\n\t\t\t\t\t<MOVE ,TH-ARC-WELDER ,CH-CATFISH>\n\t\t\t\t\t<MOVE ,TH-WELDING-ROD ,CH-CATFISH>\n\t\t\t\t\t<TELL\n\"\tCatfish follows you out, holding up the arc-welder triumphantly. \\\"Dry as\na bone, Boss. It was stowed on a shelf the water hadn't reached yet.\\\"\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-HYDRAULIC-HOSE": {
   "name": "RT-TH-HYDRAULIC-HOSE",
   "file": "crane.zil",
   "line": 1257,
   "endLine": 1281,
   "source": "<ROUTINE RT-TH-HYDRAULIC-HOSE (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? CUT>\n\t\t\t<COND\n\t\t\t\t(<MC-PRSI? ,TH-KNIFE>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,TH-HYDRAULIC-HOSE ,FL-BROKEN>\n\t\t\t\t\t\t\t<RT-ALREADY-MSG \"cut\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<FSET ,TH-HYDRAULIC-HOSE ,FL-BROKEN>\n\t\t\t\t\t\t\t<MOVE ,TH-HYDRAULIC-FLUID ,HERE>\n\t\t\t\t\t\t\t<TELL\n\"\tYou cut the hose with the knife. Red fluid pours out onto the floor.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-HYDRAULIC-FLUID": {
   "name": "RT-TH-HYDRAULIC-FLUID",
   "file": "crane.zil",
   "line": 1291,
   "endLine": 1293,
   "source": "<ROUTINE RT-TH-HYDRAULIC-FLUID (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-LG-FLOOD-DOOR": {
   "name": "RT-LG-FLOOD-DOOR",
   "file": "crane.zil",
   "line": 1308,
   "endLine": 1323,
   "source": "<ROUTINE RT-LG-FLOOD-DOOR (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? OPEN>\n\t\t\t<COND\n\t\t\t\t(<AND <NOT <FSET? ,LG-FLOOD-DOOR ,FL-OPEN>>\n\t\t\t\t\t\t<NOT <FSET? ,TH-HYDRAULIC-HOSE ,FL-BROKEN>>\n\t\t\t\t\t>\n\t\t\t\t\t<TELL \"\tThe door refuses to budge.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-KNIFE": {
   "name": "RT-TH-KNIFE",
   "file": "crane.zil",
   "line": 1338,
   "endLine": 1340,
   "source": "<ROUTINE RT-TH-KNIFE (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-TH-WINDOW-BENCH": {
   "name": "RT-TH-WINDOW-BENCH",
   "file": "endgame.zil",
   "line": 26,
   "endLine": 36,
   "source": "<ROUTINE RT-TH-WINDOW-BENCH (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? LIFT OPEN>\n\t\t\t<FSET ,TH-WINDOW-BENCH ,FL-OPEN>\n\t\t\t<TELL \"\tYou lift the seat to reveal the red lever underneath.\" CR>\n\t\t)\n\t>\n>"
  },
  "RT-TH-RED-LEVER": {
   "name": "RT-TH-RED-LEVER",
   "file": "endgame.zil",
   "line": 50,
   "endLine": 87,
   "source": "<ROUTINE RT-TH-RED-LEVER (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? PULL>\n\t\t\t<COND\n\t\t\t\t(<AND <NOT <FSET? ,LG-CHAMBER-DOOR ,FL-OPEN>>\n\t\t\t\t\t\t<FSET? ,CH-ALIEN ,FL-BROKEN>\n\t\t\t\t\t>\n\t\t\t\t\t<TELL\n\"\tYou pull the lever and feel an immediate jolt as the compression chamber\npulls away from Deepcore. Through the porthole, you get a glimpse of\nthe crippled Deepcore as you slowly rise through the water.||\n \n\t[GRAPHIC #22]||\n \n\tFor a long time after that you have no sensation of motion, but then the\nwater through the porthole starts to get lighter as you near the surface.|\n\tSuddenly chamber burst through the surface and sunlight floods through\nthe porthole. You feel the motion of the waves for the first time in weeks\nas the chamber gently rises and falls. Through the porthole you see the\nBenthic Explorer steaming towards you.|\n\tTrumpets sound. Fair young maidens cluster round to look at you admiringly.\nYou have won the game.\" CR\n\t\t\t\t\t>\n\t\t\t\t\t<RT-END-OF-GAME T>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"\tNothing happens.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL \"It looks an awful lot like a red lever.\" CR>\n\t\t)\n\t>\n>"
  },
  "V-$SCRUB": {
   "name": "V-$SCRUB",
   "file": "gas-mix.zil",
   "line": 56,
   "endLine": 68,
   "source": "<ROUTINE V-$SCRUB ()\n\t<TELL \"[CO2 scrubbers \">\n\t<COND\n\t\t(<SETG GL-SCRUBBERS-ON <NOT ,GL-SCRUBBERS-ON>>\n\t\t\t<TELL \"on\">\n\t\t)\n\t\t(T\n\t\t\t<TELL \"off\">\n\t\t)\n\t>\n\t<TELL \".]|\">\n\t<RFATAL>\n>"
  },
  "V-$AIR": {
   "name": "V-$AIR",
   "file": "gas-mix.zil",
   "line": 72,
   "endLine": 82,
   "source": "<ROUTINE V-$AIR ()\n\t<SETG GL-OXYGEN-QTY ,K-OXY-NOM>\n\t<SETG GL-OXYGEN-MSG ,K-OXY-NOM>\n\t<SETG GL-CO2-QTY ,K-CO2-NOM>\n\t<SETG GL-CO2-MSG ,K-CO2-NOM>\n\t<SETG GL-NITROGEN-QTY ,K-NIT-NOM>\n\t<SETG GL-NITROGEN-MSG ,K-NIT-NOM>\n\t<SETG GL-HELIUM-QTY ,K-HEL-NOM>\n\t<TELL \"[Breathing mix returned to nominal.]|\">\n\t<RFATAL>\n>"
  },
  "RT-NUM-DIGITS": {
   "name": "RT-NUM-DIGITS",
   "file": "gas-mix.zil",
   "line": 84,
   "endLine": 103,
   "source": "<ROUTINE RT-NUM-DIGITS (N)\n\t<SET N <ABS .N>>\n\t<COND\n\t\t(<L? .N 10>\n\t\t\t<RETURN 1>\n\t\t)\n\t\t(<L? .N 100>\n\t\t\t<RETURN 2>\n\t\t)\n\t\t(<L? .N 1000>\n\t\t\t<RETURN 3>\n\t\t)\n\t\t(<L? .N 10000>\n\t\t\t<RETURN 4>\n\t\t)\n\t\t(T\n\t\t\t<RETURN 5>\n\t\t)\n\t>\n>"
  },
  "RT-PRINT-FLOAT": {
   "name": "RT-PRINT-FLOAT",
   "file": "gas-mix.zil",
   "line": 105,
   "endLine": 177,
   "source": "<ROUTINE RT-PRINT-FLOAT (F E \"OPT\" (D -1) \"AUX\" N M)\n\t<COND\n\t\t(<L? .E 0>\n\t\t\t<SET N <- <RT-NUM-DIGITS .F>>>\n\t\t\t<COND\n\t\t\t\t(<L=? .E .N>\n\t\t\t\t\t<TELL \"0.\">\n\t\t\t\t\t<REPEAT ()\n\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t(<L? .E .N>\n\t\t\t\t\t\t\t\t<TELL !\\0>\n\t\t\t\t\t\t\t\t<INC E>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t>\n\t\t\t\t\t>\n\t\t\t\t\t<TELL N .F>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<EQUAL? <- .N> 5>\n\t\t\t\t\t\t\t<SET M 10000>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<EQUAL? <- .N> 4>\n\t\t\t\t\t\t\t<SET M 1000>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<EQUAL? <- .N> 3>\n\t\t\t\t\t\t\t<SET M 100>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<EQUAL? <- .N> 2>\n\t\t\t\t\t\t\t<SET M 10>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<SET M 1>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<REPEAT ()\n\t\t\t\t\t\t<TELL N <MOD </ .F .M> 10>>\n\t\t\t\t\t\t<INC N>\n\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t(<EQUAL? .E .N>\n\t\t\t\t\t\t\t\t<TELL !\\.>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<SET M </ .M 10>>\n\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t(<EQUAL? .M 0>\n\t\t\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t>\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(T\n\t\t\t<TELL N .F>\n\t\t\t<SET N 0>\n\t\t\t<REPEAT ()\n\t\t\t\t<COND\n\t\t\t\t\t(<L? .N .E>\n\t\t\t\t\t\t<TELL !\\0>\n\t\t\t\t\t\t<INC N>\n\t\t\t\t\t)\n\t\t\t\t\t(T\n\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-NITROGEN-MSG": {
   "name": "RT-NITROGEN-MSG",
   "file": "gas-mix.zil",
   "line": 179,
   "endLine": 328,
   "source": "<ROUTINE RT-NITROGEN-MSG ()\n\t<COND\n\t\t(<G? ,GL-NITROGEN-QTY ,GL-NITROGEN-MSG>\n\t\t\t; \"Nitrogen going up\"\n\t\t\t<COND\n\t\t\t\t(<G=? ,GL-NITROGEN-QTY ,K-NIT-HIGH-4>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(T ;<L? ,GL-NITROGEN-MSG ,K-NIT-HIGH-4>\n\t\t\t\t\t\t\t<SETG GL-NITROGEN-MSG ,GL-NITROGEN-QTY>\n\t\t\t\t\t\t\t<TELL\n\"\tThe high nitrogen level finally overcomes you and you fall to the floor,\nunconscious.|\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<RT-END-OF-GAME>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<G=? ,GL-NITROGEN-QTY ,K-NIT-HIGH-3>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L? ,GL-NITROGEN-MSG ,K-NIT-HIGH-3>\n\t\t\t\t\t\t\t<SETG GL-NITROGEN-MSG ,GL-NITROGEN-QTY>\n\t\t\t\t\t\t\t<TELL \"\tYou are beginning to hallucinate.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<G=? ,GL-NITROGEN-QTY ,K-NIT-HIGH-2>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L? ,GL-NITROGEN-MSG ,K-NIT-HIGH-2>\n\t\t\t\t\t\t\t<SETG GL-NITROGEN-MSG ,GL-NITROGEN-QTY>\n\t\t\t\t\t\t\t<TELL \"\tYour head is beginning to spin.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<G=? ,GL-NITROGEN-QTY ,K-NIT-HIGH-1>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L? ,GL-NITROGEN-MSG ,K-NIT-HIGH-1>\n\t\t\t\t\t\t\t<SETG GL-NITROGEN-MSG ,GL-NITROGEN-QTY>\n\t\t\t\t\t\t\t<TELL \"\tYou are beginning to feel light-headed.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<G? ,GL-NITROGEN-QTY ,K-NIT-LOW-1>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L=? ,GL-NITROGEN-MSG ,K-NIT-LOW-1>\n\t\t\t\t\t\t\t<SETG GL-NITROGEN-MSG ,GL-NITROGEN-QTY>\n\t\t\t\t\t\t\t<TELL\n\"\tYour hands stop trembling. The nitrogen level must be back to normal.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<G? ,GL-NITROGEN-QTY ,K-NIT-LOW-2>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L=? ,GL-NITROGEN-MSG ,K-NIT-LOW-2 ;317>\n\t\t\t\t\t\t\t<SETG GL-NITROGEN-MSG ,GL-NITROGEN-QTY>\n\t\t\t\t\t\t\t<TELL\n\"\tMost of the trembling in your hands has disappeared.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<G? ,GL-NITROGEN-QTY ,K-NIT-LOW-3>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L=? ,GL-NITROGEN-MSG ,K-NIT-LOW-3 ;253>\n\t\t\t\t\t\t\t<SETG GL-NITROGEN-MSG ,GL-NITROGEN-QTY>\n\t\t\t\t\t\t\t<TELL\n\"\tThe flashes of irritibility cease, but your fingertips are still\ntrembling.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<L? ,GL-NITROGEN-QTY ,GL-NITROGEN-MSG>\n\t\t\t; \"Nitrogen going down\"\n\t\t\t<COND\n\t\t\t\t(<L=? ,GL-NITROGEN-QTY ,K-NIT-LOW-4>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(T ;<G? ,GL-NITROGEN-MSG ,K-NIT-LOW-4>\n\t\t\t\t\t\t\t<SETG GL-NITROGEN-MSG ,GL-NITROGEN-QTY>\n\t\t\t\t\t\t\t<TELL\n\"\tYou slump to the floor, a victim of High Pressure Nervous Syndrome.|\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<RT-END-OF-GAME>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<L=? ,GL-NITROGEN-QTY ,K-NIT-LOW-3>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<G? ,GL-NITROGEN-MSG ,K-NIT-LOW-3>\n\t\t\t\t\t\t\t<SETG GL-NITROGEN-MSG ,GL-NITROGEN-QTY>\n\t\t\t\t\t\t\t<TELL\n\"\tYou begin to have flashes of sudden irritibility.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<L=? ,GL-NITROGEN-QTY ,K-NIT-LOW-2>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<G? ,GL-NITROGEN-MSG ,K-NIT-LOW-2>\n\t\t\t\t\t\t\t<SETG GL-NITROGEN-MSG ,GL-NITROGEN-QTY>\n\t\t\t\t\t\t\t<TELL\n\"\tThe trembling in your fingertips gets worse.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<L=? ,GL-NITROGEN-QTY ,K-NIT-LOW-1>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<G? ,GL-NITROGEN-MSG ,K-NIT-LOW-1>\n\t\t\t\t\t\t\t<SETG GL-NITROGEN-MSG ,GL-NITROGEN-QTY>\n\t\t\t\t\t\t\t<TELL \"\tYour hands begin to tremble.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<L? ,GL-NITROGEN-QTY ,K-NIT-HIGH-1>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<G=? ,GL-NITROGEN-MSG ,K-NIT-HIGH-1>\n\t\t\t\t\t\t\t<SETG GL-NITROGEN-MSG ,GL-NITROGEN-QTY>\n\t\t\t\t\t\t\t<TELL\n\"\tYou no longer feel dizzy. The nitrogen level must be back to normal.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<L? ,GL-NITROGEN-QTY ,K-NIT-HIGH-2>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<G=? ,GL-NITROGEN-MSG ,K-NIT-HIGH-2>\n\t\t\t\t\t\t\t<SETG GL-NITROGEN-MSG ,GL-NITROGEN-QTY>\n\t\t\t\t\t\t\t<TELL\n\"\tYour head stops spinning, but you still feel dizzy.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<L? ,GL-NITROGEN-QTY ,K-NIT-HIGH-3>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<G=? ,GL-NITROGEN-MSG ,K-NIT-HIGH-3>\n\t\t\t\t\t\t\t<SETG GL-NITROGEN-MSG ,GL-NITROGEN-QTY>\n\t\t\t\t\t\t\t<TELL\n\"\tThe hallucinations fade, but your head is still spinning.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-OXYGEN-MSG": {
   "name": "RT-OXYGEN-MSG",
   "file": "gas-mix.zil",
   "line": 330,
   "endLine": 476,
   "source": "<ROUTINE RT-OXYGEN-MSG ()\n\t<COND\n\t\t(<G? ,GL-OXYGEN-QTY ,GL-OXYGEN-MSG>\n\t\t\t; \"Oxygen going up\"\n\t\t\t<COND\n\t\t\t\t(<G=? ,GL-OXYGEN-QTY ,K-OXY-HIGH-4>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(T ;<L? ,GL-OXYGEN-MSG ,K-OXY-HIGH-4>\n\t\t\t\t\t\t\t<SETG GL-OXYGEN-MSG ,GL-OXYGEN-QTY>\n\t\t\t\t\t\t\t<TELL\n\"\tThe high oxygen level finally overcomes you. You go into convulsions, fall\nto the floor, and pass out.|\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<RT-END-OF-GAME>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<G=? ,GL-OXYGEN-QTY ,K-OXY-HIGH-3>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L? ,GL-OXYGEN-MSG ,K-OXY-HIGH-3>\n\t\t\t\t\t\t\t<SETG GL-OXYGEN-MSG ,GL-OXYGEN-QTY>\n\t\t\t\t\t\t\t<TELL\n\"\tSuddenly, your stomach muscles tighten up and you fight off the urge to\nvomit.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<G=? ,GL-OXYGEN-QTY ,K-OXY-HIGH-2>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L? ,GL-OXYGEN-MSG ,K-OXY-HIGH-2>\n\t\t\t\t\t\t\t<SETG GL-OXYGEN-MSG ,GL-OXYGEN-QTY>\n\t\t\t\t\t\t\t<TELL \"\tYou begin to feel nauseous.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<G=? ,GL-OXYGEN-QTY ,K-OXY-HIGH-1>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L? ,GL-OXYGEN-MSG ,K-OXY-HIGH-1>\n\t\t\t\t\t\t\t<SETG GL-OXYGEN-MSG ,GL-OXYGEN-QTY>\n\t\t\t\t\t\t\t<TELL \"\tSuddenly, you feel a twitch in your lower lip.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<G? ,GL-OXYGEN-QTY ,K-OXY-LOW-1>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L=? ,GL-OXYGEN-MSG ,K-OXY-LOW-1>\n\t\t\t\t\t\t\t<SETG GL-OXYGEN-MSG ,GL-OXYGEN-QTY>\n\t\t\t\t\t\t\t<TELL\n\"\tYour headache disappears. The oxygen level must be back to normal.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<G? ,GL-OXYGEN-QTY ,K-OXY-LOW-2>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L=? ,GL-OXYGEN-MSG ,K-OXY-LOW-2>\n\t\t\t\t\t\t\t<SETG GL-OXYGEN-MSG ,GL-OXYGEN-QTY>\n\t\t\t\t\t\t\t<TELL\n\"\tYou begin to see colors again, but you still have a mild headache.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<G? ,GL-OXYGEN-QTY ,K-OXY-LOW-3>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L=? ,GL-OXYGEN-MSG ,K-OXY-LOW-3>\n\t\t\t\t\t\t\t<SETG GL-OXYGEN-MSG ,GL-OXYGEN-QTY>\n\t\t\t\t\t\t\t<TELL \"\tYour tunnel vision begins to fade.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<L? ,GL-OXYGEN-QTY ,GL-OXYGEN-MSG>\n\t\t\t; \"Oxygen going down\"\n\t\t\t<COND\n\t\t\t\t(<L=? ,GL-OXYGEN-QTY ,K-OXY-LOW-4>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(T ;<G? ,GL-OXYGEN-MSG ,K-OXY-LOW-4>\n\t\t\t\t\t\t\t<SETG GL-OXYGEN-MSG ,GL-OXYGEN-QTY>\n\t\t\t\t\t\t\t<TELL \"\tYou collapse, a victim of oxygen starvation.|\">\n\t\t\t\t\t\t\t<RT-END-OF-GAME>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<L=? ,GL-OXYGEN-QTY ,K-OXY-LOW-3>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<G? ,GL-OXYGEN-MSG ,K-OXY-LOW-3>\n\t\t\t\t\t\t\t<SETG GL-OXYGEN-MSG ,GL-OXYGEN-QTY>\n\t\t\t\t\t\t\t<TELL\n\"\tYou notice that your peripheral vision is beginning to disappear.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<L=? ,GL-OXYGEN-QTY ,K-OXY-LOW-2>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<G? ,GL-OXYGEN-MSG ,K-OXY-LOW-2>\n\t\t\t\t\t\t\t<SETG GL-OXYGEN-MSG ,GL-OXYGEN-QTY>\n\t\t\t\t\t\t\t<TELL \"\tThe colors around you seem to fade.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<L=? ,GL-OXYGEN-QTY ,K-OXY-LOW-1>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<G? ,GL-OXYGEN-MSG ,K-OXY-LOW-1>\n\t\t\t\t\t\t\t<SETG GL-OXYGEN-MSG ,GL-OXYGEN-QTY>\n\t\t\t\t\t\t\t<TELL \"\tYour head begins to ache.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<L? ,GL-OXYGEN-QTY ,K-OXY-HIGH-1>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<G=? ,GL-OXYGEN-MSG ,K-OXY-HIGH-1>\n\t\t\t\t\t\t\t<SETG GL-OXYGEN-MSG ,GL-OXYGEN-QTY>\n\t\t\t\t\t\t\t<TELL\n\"\tYou lip stops twitching. The oxygen level must be back to normal.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<L? ,GL-OXYGEN-QTY ,K-OXY-HIGH-2>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<G=? ,GL-OXYGEN-MSG ,K-OXY-HIGH-2>\n\t\t\t\t\t\t\t<SETG GL-OXYGEN-MSG ,GL-OXYGEN-QTY>\n\t\t\t\t\t\t\t<TELL\n\"\tYou no longer feel nauseous, but your lip still twitches occasionally.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<L? ,GL-OXYGEN-QTY ,K-OXY-HIGH-3>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<G=? ,GL-OXYGEN-MSG ,K-OXY-HIGH-3>\n\t\t\t\t\t\t\t<SETG GL-OXYGEN-MSG ,GL-OXYGEN-QTY>\n\t\t\t\t\t\t\t<TELL\n\"\tThe tension in your stomach disappears, but you still feel slightly\nnauseous.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-CO2-MSG": {
   "name": "RT-CO2-MSG",
   "file": "gas-mix.zil",
   "line": 478,
   "endLine": 557,
   "source": "<ROUTINE RT-CO2-MSG ()\n\t<COND\n\t\t(<G? ,GL-CO2-QTY ,GL-CO2-MSG>\n\t\t\t; \"Carbon Dioxide going up\"\n\t\t\t<COND\n\t\t\t\t(<G=? ,GL-CO2-QTY ,K-CO2-HIGH-4>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(T ;<L? ,GL-CO2-MSG ,K-CO2-HIGH-4>\n\t\t\t\t\t\t\t<SETG GL-CO2-MSG ,GL-CO2-QTY>\n\t\t\t\t\t\t\t<TELL \"\tYou pass out from carbon dioxide poisoning.|\">\n\t\t\t\t\t\t\t<RT-END-OF-GAME>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<G=? ,GL-CO2-QTY ,K-CO2-HIGH-3>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L? ,GL-CO2-MSG ,K-CO2-HIGH-3>\n\t\t\t\t\t\t\t<SETG GL-CO2-MSG ,GL-CO2-QTY>\n\t\t\t\t\t\t\t<TELL\n\"\tSuddenly the muscles in your arm begin to spasm.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<G=? ,GL-CO2-QTY ,K-CO2-HIGH-2>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L? ,GL-CO2-MSG ,K-CO2-HIGH-2>\n\t\t\t\t\t\t\t<SETG GL-CO2-MSG ,GL-CO2-QTY>\n\t\t\t\t\t\t\t<TELL \"\tYour chest muscles are beginning to ache.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<G=? ,GL-CO2-QTY ,K-CO2-HIGH-1>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L? ,GL-CO2-MSG ,K-CO2-HIGH-1>\n\t\t\t\t\t\t\t<SETG GL-CO2-MSG ,GL-CO2-QTY>\n\t\t\t\t\t\t\t<TELL \"\tYou begin to feel a little short of breath.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<L? ,GL-CO2-QTY ,GL-CO2-MSG>\n\t\t\t; \"Carbon Dioxide going down\"\n\t\t\t<COND\n\t\t\t\t(<L? ,GL-CO2-QTY ,K-CO2-HIGH-1>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<G=? ,GL-CO2-MSG ,K-CO2-HIGH-1>\n\t\t\t\t\t\t\t<SETG GL-CO2-MSG ,GL-CO2-QTY>\n\t\t\t\t\t\t\t<TELL\n\"\tYou begin to breathe more easily. The carbon dioxide level must have\nreturned to normal.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<L? ,GL-CO2-QTY ,K-CO2-HIGH-2>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<G=? ,GL-CO2-MSG ,K-CO2-HIGH-2>\n\t\t\t\t\t\t\t<SETG GL-CO2-MSG ,GL-CO2-QTY>\n\t\t\t\t\t\t\t<TELL\n\"\tYour chest muscles feel better, but you are still short of breath.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<L? ,GL-CO2-QTY ,K-CO2-HIGH-3>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<G=? ,GL-CO2-MSG ,K-CO2-HIGH-3>\n\t\t\t\t\t\t\t<SETG GL-CO2-MSG ,GL-CO2-QTY>\n\t\t\t\t\t\t\t<TELL\n\"\tThe spasms in your arm have stopped, but your chest muscles still ache.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-I-GAS-MIX": {
   "name": "RT-I-GAS-MIX",
   "file": "gas-mix.zil",
   "line": 559,
   "endLine": 587,
   "source": "<ROUTINE RT-I-GAS-MIX ()\n\t<RT-QUEUE ,RT-I-GAS-MIX <+ ,GL-MOVES 1>>\n\t<SETG GL-OXYGEN-QTY <- ,GL-OXYGEN-QTY 4>>\n\t<COND\n\t\t(<L? ,GL-OXYGEN-QTY 0>\n\t\t\t<SETG GL-OXYGEN-QTY 0>\n\t\t)\n\t>\n\t<COND\n\t\t(,GL-SCRUBBERS-ON\n\t\t\t<SETG GL-CO2-QTY <- ,GL-CO2-QTY 340>>\n\t\t\t<COND\n\t\t\t\t(<L? ,GL-CO2-QTY 0>\n\t\t\t\t\t<SETG GL-CO2-QTY 0>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(T\n\t\t\t<SETG GL-CO2-QTY <+ ,GL-CO2-QTY 340>>\n\t\t)\n\t>\n\t<COND\n\t\t(<OR\t<RT-OXYGEN-MSG>\n\t\t\t\t<RT-CO2-MSG>\n\t\t\t>\n\t\t\t<RTRUE>\n\t\t)\n\t>\n>"
  },
  "V-$HEAT": {
   "name": "V-$HEAT",
   "file": "gas-mix.zil",
   "line": 593,
   "endLine": 605,
   "source": "<ROUTINE V-$HEAT ()\n\t<TELL \"[Heaters \">\n\t<COND\n\t\t(<SETG GL-HEATERS-ON <NOT ,GL-HEATERS-ON>>\n\t\t\t<TELL \"on\">\n\t\t)\n\t\t(T\n\t\t\t<TELL \"off\">\n\t\t)\n\t>\n\t<TELL \".]|\">\n\t<RFATAL>\n>"
  },
  "RT-TH-THERMOMETER": {
   "name": "RT-TH-THERMOMETER",
   "file": "gas-mix.zil",
   "line": 632,
   "endLine": 643,
   "source": "<ROUTINE RT-TH-THERMOMETER (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? READ EXAMINE>\n\t\t\t<TELL \"\tThe thermometer says your core temperature is \">\n\t\t\t<RT-PRINT-FLOAT ,GL-PLAYER-TEMP ,K-TEMP-FACTOR>\n\t\t\t<TELL \" degrees Fahrenheit.\" CR>\n\t\t)\n\t>\n>"
  },
  "RT-TEMP-MSG": {
   "name": "RT-TEMP-MSG",
   "file": "gas-mix.zil",
   "line": 645,
   "endLine": 784,
   "source": "<ROUTINE RT-TEMP-MSG ()\n\t<COND\n\t\t(<L? ,GL-PLAYER-TEMP ,GL-TEMP-MSG>\n\t\t\t; \"Temperature going down.\"\n\t\t\t<COND\n\t\t\t\t(<L=? ,GL-PLAYER-TEMP ,K-TEMP-LOW-4>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(T ;<G? ,GL-TEMP-MSG ,K-TEMP-LOW-4>\n\t\t\t\t\t\t\t<SETG GL-TEMP-MSG ,GL-PLAYER-TEMP>\n\t\t\t\t\t\t\t<TELL \"\tThe cold finally overpowers you and you pass out.|\">\n\t\t\t\t\t\t\t<RT-END-OF-GAME>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<L=? ,GL-PLAYER-TEMP ,K-TEMP-LOW-3>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<G? ,GL-TEMP-MSG ,K-TEMP-LOW-3>\n\t\t\t\t\t\t\t<SETG GL-TEMP-MSG ,GL-PLAYER-TEMP>\n\t\t\t\t\t\t\t<TELL \"\tYou're so cold you can hardly move.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<L=? ,GL-PLAYER-TEMP ,K-TEMP-LOW-2>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<G? ,GL-TEMP-MSG ,K-TEMP-LOW-2>\n\t\t\t\t\t\t\t<SETG GL-TEMP-MSG ,GL-PLAYER-TEMP>\n\t\t\t\t\t\t\t<TELL \"\tThe cold begins to creep into your bones.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<L=? ,GL-PLAYER-TEMP ,K-TEMP-LOW-1>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<G? ,GL-TEMP-MSG ,K-TEMP-LOW-1>\n\t\t\t\t\t\t\t<SETG GL-TEMP-MSG ,GL-PLAYER-TEMP>\n\t\t\t\t\t\t\t<TELL \"\tYou begin to shiver.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<L? ,GL-PLAYER-TEMP ,K-TEMP-HIGH-1>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<G=? ,GL-TEMP-MSG ,K-TEMP-HIGH-1>\n\t\t\t\t\t\t\t<SETG GL-TEMP-MSG ,GL-PLAYER-TEMP>\n\t\t\t\t\t\t\t<TELL\n\"\tYou stop sweating. Your body temperature must have returned to normal.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<L? ,GL-PLAYER-TEMP ,K-TEMP-HIGH-2>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<G=? ,GL-TEMP-MSG ,K-TEMP-HIGH-2>\n\t\t\t\t\t\t\t<SETG GL-TEMP-MSG ,GL-PLAYER-TEMP>\n\t\t\t\t\t\t\t<TELL\n\"\tYour face is no longer flushed, but you are still sweating.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<L? ,GL-PLAYER-TEMP ,K-TEMP-HIGH-3>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<G=? ,GL-TEMP-MSG ,K-TEMP-HIGH-3>\n\t\t\t\t\t\t\t<SETG GL-TEMP-MSG ,GL-PLAYER-TEMP>\n\t\t\t\t\t\t\t<TELL\n\"\tYour breathing returns to normal, but your face is still red.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<G? ,GL-PLAYER-TEMP ,GL-TEMP-MSG>\n\t\t\t; \"Temperature going up.\"\n\t\t\t<COND\n\t\t\t\t(<G=? ,GL-PLAYER-TEMP ,K-TEMP-HIGH-4>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(T ;<L? ,GL-TEMP-MSG ,K-TEMP-HIGH-4>\n\t\t\t\t\t\t\t<SETG GL-TEMP-MSG ,GL-PLAYER-TEMP>\n\t\t\t\t\t\t\t<TELL \"\tThe heat becomes overpowering and you collapse.|\">\n\t\t\t\t\t\t\t<RT-END-OF-GAME>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<G=? ,GL-PLAYER-TEMP ,K-TEMP-HIGH-3>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L? ,GL-TEMP-MSG ,K-TEMP-HIGH-3>\n\t\t\t\t\t\t\t<SETG GL-TEMP-MSG ,GL-PLAYER-TEMP>\n\t\t\t\t\t\t\t<TELL\n\"\tYou're so hot you can hardly move. Your breathing speeds up dangerously.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<G=? ,GL-PLAYER-TEMP ,K-TEMP-HIGH-2>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L? ,GL-TEMP-MSG ,K-TEMP-HIGH-2>\n\t\t\t\t\t\t\t<SETG GL-TEMP-MSG ,GL-PLAYER-TEMP>\n\t\t\t\t\t\t\t<TELL \"\tYour face turns red from the heat.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<G=? ,GL-PLAYER-TEMP ,K-TEMP-HIGH-1>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L? ,GL-TEMP-MSG ,K-TEMP-HIGH-1>\n\t\t\t\t\t\t\t<SETG GL-TEMP-MSG ,GL-PLAYER-TEMP>\n\t\t\t\t\t\t\t<TELL \"\tYou feel uncomfortably hot and begin to sweat.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<G? ,GL-PLAYER-TEMP ,K-TEMP-LOW-1>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L=? ,GL-TEMP-MSG ,K-TEMP-LOW-1>\n\t\t\t\t\t\t\t<SETG GL-TEMP-MSG ,GL-PLAYER-TEMP>\n\t\t\t\t\t\t\t<TELL\n\"\tYou stop shivering. Your body temperature must be back to normal.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<G? ,GL-PLAYER-TEMP ,K-TEMP-LOW-2>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L=? ,GL-TEMP-MSG ,K-TEMP-LOW-2>\n\t\t\t\t\t\t\t<SETG GL-TEMP-MSG ,GL-PLAYER-TEMP>\n\t\t\t\t\t\t\t<TELL\n\"\tYour hands and feet tingle as they begin to warm up.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<G? ,GL-PLAYER-TEMP ,K-TEMP-LOW-3>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L=? ,GL-TEMP-MSG ,K-TEMP-LOW-3>\n\t\t\t\t\t\t\t<SETG GL-TEMP-MSG ,GL-PLAYER-TEMP>\n\t\t\t\t\t\t\t<TELL \"\tYou're beginning to thaw out.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-I-DEEPCORE-TEMP": {
   "name": "RT-I-DEEPCORE-TEMP",
   "file": "gas-mix.zil",
   "line": 786,
   "endLine": 797,
   "source": "<ROUTINE RT-I-DEEPCORE-TEMP ()\n\t<RT-QUEUE ,RT-I-DEEPCORE-TEMP <+ ,GL-MOVES 1>>\n\t<COND\n\t\t(,GL-HEATERS-ON\n\t\t\t<SETG GL-DEEPCORE-TEMP <+ ,GL-DEEPCORE-TEMP 5>>\n\t\t)\n\t\t(T\n\t\t\t<SETG GL-DEEPCORE-TEMP <- ,GL-DEEPCORE-TEMP 5>>\n\t\t)\n\t>\n\t<RFALSE>\n>"
  },
  "RT-I-TEMP": {
   "name": "RT-I-TEMP",
   "file": "gas-mix.zil",
   "line": 799,
   "endLine": 867,
   "source": "<ROUTINE RT-I-TEMP (\"AUX\" L D1 D2)\n\t<SET L <LOC ,CH-PLAYER>>\n\t<RT-QUEUE ,RT-I-TEMP <+ ,GL-MOVES 1>>\n\t<COND\n\t\t(<FSET? .L ,FL-WATER>\n\t\t\t<COND\n\t\t\t\t(<OR\t<AND\n\t\t\t\t\t\t\t<IN? ,TH-FBS-SUIT ,CH-PLAYER>\n\t\t\t\t\t\t\t<FSET? ,TH-FBS-SUIT ,FL-WORN>\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<AND\n\t\t\t\t\t\t\t<IN? ,TH-DRY-SUIT ,CH-PLAYER>\n\t\t\t\t\t\t\t<FSET? ,TH-DRY-SUIT ,FL-WORN>\n\t\t\t\t\t\t>\n\t\t\t\t\t>\n\t\t\t\t\t<SETG GL-PLAYER-TEMP <- ,GL-PLAYER-TEMP 10>>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<SETG GL-PLAYER-TEMP <- ,GL-PLAYER-TEMP 500>>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<AND <L? ,GL-PLAYER-TEMP ,K-TEMP-NOM>\n\t\t\t\t<G? ,GL-DEEPCORE-TEMP <- ,GL-PLAYER-TEMP 860>>\n\t\t\t>\n\t\t\t<SET D1 <- ,GL-DEEPCORE-TEMP <- ,GL-PLAYER-TEMP 860>>>\n\t\t\t<SET D2 <- ,K-TEMP-NOM ,GL-PLAYER-TEMP>>\n\t\t\t<COND\n\t\t\t\t(<AND <L=? .D2 .D1>\n\t\t\t\t\t\t<L=? .D2 5>\n\t\t\t\t\t>\n\t\t\t\t\t<SETG GL-PLAYER-TEMP ,K-TEMP-NOM>\n\t\t\t\t)\n\t\t\t\t(<G=? .D1 5>\n\t\t\t\t\t<SETG GL-PLAYER-TEMP <+ ,GL-PLAYER-TEMP 5>>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<SETG GL-PLAYER-TEMP <+ ,GL-PLAYER-TEMP .D1>>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<AND <G? ,GL-PLAYER-TEMP ,K-TEMP-NOM>\n\t\t\t\t<L? ,GL-DEEPCORE-TEMP <- ,GL-PLAYER-TEMP 860>>\n\t\t\t>\n\t\t\t<SET D1 <- <- ,GL-PLAYER-TEMP 860> ,GL-DEEPCORE-TEMP>>\n\t\t\t<SET D2 <- ,GL-PLAYER-TEMP ,K-TEMP-NOM>>\n\t\t\t<COND\n\t\t\t\t(<AND <L=? .D2 .D1>\n\t\t\t\t\t\t<L=? .D2 5>\n\t\t\t\t\t>\n\t\t\t\t\t<SETG GL-PLAYER-TEMP ,K-TEMP-NOM>\n\t\t\t\t)\n\t\t\t\t(<G=? .D1 5>\n\t\t\t\t\t<SETG GL-PLAYER-TEMP <- ,GL-PLAYER-TEMP 5>>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<SETG GL-PLAYER-TEMP <- ,GL-PLAYER-TEMP .D1>>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<G? ,GL-DEEPCORE-TEMP <+ ,GL-PLAYER-TEMP 600>>\t\t;\"+6 deg.\"\n\t\t\t<SETG GL-PLAYER-TEMP <+ ,GL-PLAYER-TEMP 5>>\n\t\t)\n\t\t(<L? ,GL-DEEPCORE-TEMP <- ,GL-PLAYER-TEMP 1200>>\t;\"-12 deg.\"\n\t\t\t<SETG GL-PLAYER-TEMP <- ,GL-PLAYER-TEMP 5>>\n\t\t)\n\t>\n\t<RT-TEMP-MSG>\n>"
  },
  "RT-GLOBAL-HERE": {
   "name": "RT-GLOBAL-HERE",
   "file": "global.zil",
   "line": 98,
   "endLine": 108,
   "source": "<ROUTINE RT-GLOBAL-HERE (\"OPT\" (CONTEXT <>) \"AUX\" P)\n\t<COND\n\t\t(,HERE\n\t\t\t<COND\n\t\t\t\t(<SET P <GETP ,HERE ,P?ACTION>>\n\t\t\t\t\t<APPLY .P .CONTEXT>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-YOU": {
   "name": "RT-YOU",
   "file": "global.zil",
   "line": 137,
   "endLine": 149,
   "source": "<ROUTINE RT-YOU (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(,NOW-PRSI\n\t\t\t<PERFORM ,PRSA ,PRSO ,WINNER>\n\t\t)\n\t\t(T\n\t\t\t<PERFORM ,PRSA ,WINNER ,PRSI>\n\t\t)\n\t>\n>"
  },
  "RT-TH-HUMAN-BODY": {
   "name": "RT-TH-HUMAN-BODY",
   "file": "global.zil",
   "line": 211,
   "endLine": 263,
   "source": "<ROUTINE RT-TH-HUMAN-BODY (\"OPT\" (CONTEXT <>) \"AUX\" TMP (PERSON <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-OBJDESC>\n\t\t\t<TELL \"their body\">\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(T\n\t\t\t<COND\n\t\t\t\t(<SET TMP <NP-ADJS <GET-NP>>>\n\t\t\t\t\t<SET PERSON <ADJS-POSS .TMP>>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(<AND .PERSON\n\t\t\t\t\t\t<NOT <VISIBLE? .PERSON>>\n\t\t\t\t\t>\n\t\t\t\t\t<NP-CANT-SEE>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL ,K-NO-REFER-MSG>\n\t\t\t\t\t<COND\n\t\t\t\t\t;\t(<EQUAL? .PERSON>\n\t\t\t\t\t\t\t<TELL \"that\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL \"any\">\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<TELL \" part of\">\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(.PERSON\n\t\t\t\t\t\t\t<TELL the .PERSON !\\'>\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(<OR\t<NOT <FSET? .PERSON ,FL-PLURAL>>\n\t\t\t\t\t\t\t\t\t\t<FSET? .PERSON ,FL-COLLECTIVE>\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<TELL !\\s>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL \" their\">\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<TELL \" body.]\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<RFATAL>\n\t\t)\n\t>\n>"
  },
  "RT-GN-BODY": {
   "name": "RT-GN-BODY",
   "file": "global.zil",
   "line": 265,
   "endLine": 288,
   "source": "<ROUTINE RT-GN-BODY (TBL FINDER \"AUX\" (PART <>))\n\t<REPEAT (\n\t\t\t(PTR <REST-TO-SLOT .TBL FIND-RES-OBJ1>)\n\t\t\t(N <FIND-RES-COUNT .TBL>)\n\t\t)\n\t\t<COND\n\t\t\t(<DLESS? N 0>\n\t\t\t\t<RFALSE>\n\t\t\t)\n\t\t\t(<NOT <SET PART <ZGET .PTR 0>>>)\n\t\t\t(<FSET? .PART ,FL-YOUR>\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t\t(<EQUAL? .PART ,TH-PLAYER-BODY>\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t\t(<NOT <EQUAL? .PART ,TH-HUMAN-BODY>>\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t>\n\t\t<SET PTR <ZREST .PTR 2>>\n\t>\n\t<RETURN .PART>\n>"
  },
  "RT-TH-PLAYER-BODY": {
   "name": "RT-TH-PLAYER-BODY",
   "file": "global.zil",
   "line": 325,
   "endLine": 335,
   "source": "<ROUTINE RT-TH-PLAYER-BODY (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(T\n\t\t\t<TELL ,K-NO-REFER-MSG \"that part of your body.]\" CR>\n\t\t\t<RFATAL>\n\t\t)\n\t>\n>"
  },
  "RT-TH-GROUND": {
   "name": "RT-TH-GROUND",
   "file": "global.zil",
   "line": 375,
   "endLine": 414,
   "source": "<ROUTINE RT-TH-GROUND (\"OPT\" (CONTEXT <>) (ART <>) (CAP? <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-OBJDESC>\n\t\t\t<COND\n\t\t\t\t(.ART\n\t\t\t\t\t<RT-PRINT-ARTICLE ,TH-GROUND .ART .CAP?>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? .ART <> ,K-ART-THE ,K-ART-A ,K-ART-ANY>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(.ART\n\t\t\t\t\t\t\t<TELL !\\ >\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,HERE ,FL-INDOORS>\n\t\t\t\t\t\t\t<TELL \"floor\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL \"ground\">\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE LOOK-ON>\n\t\t\t<COND\n\t\t\t\t(<RT-SEE-ANYTHING-IN? ,HERE>\n\t\t\t\t\t<TELL \"You see\">\n\t\t\t\t\t<RT-PRINT-CONTENTS ,HERE>\n\t\t\t\t\t<TELL \" on\" the ,TH-GROUND !\\. CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-SKY": {
   "name": "RT-TH-SKY",
   "file": "global.zil",
   "line": 427,
   "endLine": 475,
   "source": "<ROUTINE RT-TH-SKY (\"OPT\" (CONTEXT <>) (ART <>) (CAP? <>) \"AUX\" RM)\n\t<COND\n\t\t(<MC-CONTEXT? ,M-OBJDESC>\n\t\t\t<COND\n\t\t\t\t(.ART\n\t\t\t\t\t<RT-PRINT-ARTICLE ,TH-SKY .ART .CAP?>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? .ART <> ,K-ART-THE ,K-ART-A ,K-ART-ANY>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(.ART\n\t\t\t\t\t\t\t<TELL !\\ >\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,HERE ,FL-INDOORS>\n\t\t\t\t\t\t\t<TELL \"ceiling\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL \"sky\">\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<NOT <EVERYWHERE-VERB? <COND (,NOW-PRSI 2) (T 1)>>>\n\t\t\t<COND\n\t\t\t\t(<FSET? ,HERE ,FL-INDOORS>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<NOUN-USED? ,TH-SKY ,W?SKY>\n\t\t\t\t\t\t\t<NP-CANT-SEE>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<NOUN-USED? ,TH-SKY ,W?CEILING>\n\t\t\t\t\t\t\t<NP-CANT-SEE>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-LG-DEEPCORE": {
   "name": "RT-LG-DEEPCORE",
   "file": "global.zil",
   "line": 531,
   "endLine": 540,
   "source": "<ROUTINE RT-LG-DEEPCORE (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL \"It looks like Deepcore.\" CR>\n\t\t)\n\t>\n>"
  },
  "RT-LG-TROUGH": {
   "name": "RT-LG-TROUGH",
   "file": "global.zil",
   "line": 553,
   "endLine": 562,
   "source": "<ROUTINE RT-LG-TROUGH (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL \"It looks like the Cayman trough.\" CR>\n\t\t)\n\t>\n>"
  },
  "RT-LG-MONTANA": {
   "name": "RT-LG-MONTANA",
   "file": "global.zil",
   "line": 576,
   "endLine": 585,
   "source": "<ROUTINE RT-LG-MONTANA (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL \"It looks like the Montana.\" CR>\n\t\t)\n\t>\n>"
  },
  "VISIBLE?": {
   "name": "VISIBLE?",
   "file": "misc.zil",
   "line": 39,
   "endLine": 41,
   "source": "<ROUTINE VISIBLE? (OBJ)\n\t<ACCESSIBLE? .OBJ T>\n>"
  },
  "CLOSED?": {
   "name": "CLOSED?",
   "file": "misc.zil",
   "line": 43,
   "endLine": 79,
   "source": "<ROUTINE CLOSED? (OBJ \"OPT\" (VIS? <>) ;(ON? <>))\n\t<COND\n\t\t(<NOT .OBJ>\n\t\t\t<RTRUE>\n\t\t)\n\t\t(<IN? .OBJ ,ROOMS>\n\t\t\t<RFALSE>\n\t\t)\n\t;\t(<AND <FSET? .OBJ ,FL-SURFACE>\n\t\t\t\t<FSET? .OBJ ,FL-CONTAINER>\n\t\t\t\t.ON?\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<FSET? .OBJ ,FL-CONTAINER>\n\t\t\t<COND\n\t\t\t\t(<FSET? .OBJ ,FL-OPEN>\n\t\t\t\t\t<RFALSE>\n\t\t\t\t)\n\t\t\t\t(.VIS?\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? .OBJ ,FL-TRANSPARENT>\n\t\t\t\t\t\t\t<RFALSE>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<OR\t<FSET? .OBJ ,FL-SURFACE>\n\t\t\t\t<FSET? .OBJ ,FL-ALIVE>\n\t\t\t\t<FSET? .OBJ ,FL-PERSON>\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t>\n\t<RTRUE>\n>"
  },
  "ACCESSIBLE?": {
   "name": "ACCESSIBLE?",
   "file": "misc.zil",
   "line": 81,
   "endLine": 237,
   "source": "<ROUTINE ACCESSIBLE? (OBJ \"OPTIONAL\" (VIS? <>) \"AUX\" WLOC OLOC (CLSD-PTR <>) PTR (CNT 0) ;(ON? <>) TBL END)\n\t<COND\n\t\t(<NOT .OBJ>\n\t\t;\t<SETG GL-CLOSED-OBJECT <>>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<EQUAL? .OBJ ,ROOMS>\n\t\t\t<RTRUE>\n\t\t)\n\t>\n\t<SET PTR ,GL-LOC-TRAIL>\n\t<SET OLOC .OBJ>\n\t<REPEAT ()\n\t\t<PUT .PTR 0 .OLOC>\n\t\t<INC CNT>\n\t\t<COND\n\t\t\t(<OR\t<NOT .OLOC>\n\t\t\t\t\t<EQUAL? .OLOC ,WINNER>\n\t\t\t\t\t<IN? .OLOC ,ROOMS>\n\t\t\t\t\t<IN? .OLOC ,LOCAL-GLOBALS>\n\t\t\t\t\t<IN? .OLOC ,GLOBAL-OBJECTS>\n\t\t\t\t\t<IN? .OLOC ,GENERIC-OBJECTS>\n\t\t\t\t>\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t>\n\t;\t<SET ON? <FSET? .OLOC ,FL-ON>>\n\t\t<SET OLOC <LOC .OLOC>>\n\t\t<SET PTR <REST .PTR 2>>\n\t\t<COND\n\t\t\t(.OLOC\n\t\t\t\t<COND\n\t\t\t\t\t(<CLOSED? .OLOC .VIS? ;.ON?>\n\t\t\t\t\t;\t<COND\n\t\t\t\t\t\t\t(<NOT .VIS?>\n\t\t\t\t\t\t\t\t<SETG GL-CLOSED-OBJECT .OLOC>\n\t\t\t\t\t\t\t\t<SETG GL-IN-OUT T>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t(<NOT .CLSD-PTR>\n\t\t\t\t\t\t\t\t<SET CLSD-PTR .PTR>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t)\n\t\t>\n\t>\n \n\t<SET PTR <>>\n\t<SET WLOC ,WINNER>\n\t<REPEAT ()\n\t\t<COND\n\t\t\t(<NOT .WLOC>\n\t\t\t;\t<COND\n\t\t\t\t\t(<NOT .VIS?>\n\t\t\t\t\t\t<SETG GL-CLOSED-OBJECT <>>\n\t\t\t\t\t\t<SETG GL-IN-OUT <>>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<RFALSE>\n\t\t\t)\n\t\t\t(<SET PTR <INTBL? .WLOC ,GL-LOC-TRAIL .CNT>>\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t\t(<IN? .WLOC ,ROOMS>\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t>\n\t\t<SET WLOC <LOC .WLOC>>\n\t\t<COND\n\t\t\t(.WLOC\n\t\t\t\t<COND\n\t\t\t\t\t(<CLOSED? .WLOC .VIS?>\n\t\t\t\t\t;\t<COND\n\t\t\t\t\t\t\t(<NOT .VIS?>\n\t\t\t\t\t\t\t\t<SETG GL-CLOSED-OBJECT .WLOC>\n\t\t\t\t\t\t\t\t<SETG GL-IN-OUT <>>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<RFALSE>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t)\n\t\t>\n\t>\n \n\t<COND\n\t\t(.WLOC\n\t\t\t<COND\n\t\t\t\t(<IN? .WLOC ,ROOMS>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<NOT .PTR>\n\t\t\t\t\t\t\t<SET TBL <GETPT .WLOC ,P?GLOBAL>>\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(.TBL\n\t\t\t\t\t\t\t\t\t<SET END <REST .TBL <PTSIZE .TBL>>>\n\t\t\t\t\t\t\t\t\t<REPEAT ()\n\t\t\t\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t\t\t\t(<G=? .TBL .END>\n\t\t\t\t\t\t\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t(<SET PTR <INTBL? <GET .TBL 0> ,GL-LOC-TRAIL .CNT>>\n\t\t\t\t\t\t\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t<SET TBL <REST .TBL 2>>\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n \n\t<COND\n\t\t(.WLOC\n\t\t\t<COND\n\t\t\t\t(<IN? .WLOC ,ROOMS>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<NOT .PTR>\n\t\t\t\t\t\t\t<SET TBL <FIRST? ,GLOBAL-OBJECTS>>\n\t\t\t\t\t\t\t<REPEAT ()\n\t\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t\t(<NOT .TBL>\n\t\t\t\t\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t(<SET PTR <INTBL? .TBL ,GL-LOC-TRAIL .CNT>>\n\t\t\t\t\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<SET TBL <NEXT? .TBL>>\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n \n\t<COND\n\t\t(<NOT .PTR>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<AND .CLSD-PTR\n\t\t\t\t<G? .PTR .CLSD-PTR>\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(T\n\t\t\t<RTRUE>\n\t\t)\n\t>\n>"
  },
  "RT-PRINT-DESC": {
   "name": "RT-PRINT-DESC",
   "file": "misc.zil",
   "line": 250,
   "endLine": 259,
   "source": "<ROUTINE RT-PRINT-DESC (OBJ)\n\t<COND\n\t\t(<FSET? .OBJ ,FL-HAS-SDESC>\n\t\t\t<APPLY <GETP .OBJ ,P?ACTION> ,M-OBJDESC>\n\t\t)\n\t\t(T\n\t\t\t<PRINTD .OBJ>\n\t\t)\n\t>\n>"
  },
  "RT-PRINT-ARTICLE": {
   "name": "RT-PRINT-ARTICLE",
   "file": "misc.zil",
   "line": 261,
   "endLine": 364,
   "source": "<ROUTINE RT-PRINT-ARTICLE (OBJ ART CAP? \"AUX\" (MASK 0))\n\t<COND\n\t\t(<NOT .CAP?>\n\t\t\t<TELL !\\ >\n\t\t\t<SET MASK 32>\n\t\t)\n\t>\n\t<COND\n\t\t(<EQUAL? .ART ,K-ART-A>\n\t\t\t<COND\n\t\t\t\t(<FSET? .OBJ ,FL-YOUR>\n\t\t\t\t\t<TELL C <BOR !\\Y .MASK> \"our\">\n\t\t\t\t)\n\t\t\t\t(<FSET? .OBJ ,FL-PLURAL>\n\t\t\t\t\t<TELL C <BOR !\\S .MASK> \"ome\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL C <BOR !\\A .MASK>>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? .OBJ ,FL-VOWEL>\n\t\t\t\t\t\t\t<TELL !\\n>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<EQUAL? .ART ,K-ART-THE>\n\t\t\t<COND\n\t\t\t\t(<FSET? .OBJ ,FL-YOUR>\n\t\t\t\t\t<TELL C <BOR !\\Y .MASK> \"our\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL C <BOR !\\T .MASK> \"he\">\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<EQUAL? .ART ,K-ART-ANY>\n\t\t\t<TELL C <BOR !\\A .MASK> \"ny\">\n\t\t)\n\t\t(<EQUAL? .ART ,K-ART-HE>\n\t\t\t<COND\n\t\t\t\t(<AND <FSET? .OBJ ,FL-PLURAL>\n\t\t\t\t\t\t<NOT <FSET? .OBJ ,FL-COLLECTIVE>>\n\t\t\t\t\t>\n\t\t\t\t\t<TELL C <BOR !\\T .MASK> \"hey\">\n\t\t\t\t)\n\t\t\t\t(<NOT <FSET? .OBJ ,FL-PERSON>>\n\t\t\t\t\t<TELL C <BOR !\\I .MASK> !\\t>\n\t\t\t\t)\n\t\t\t\t(<EQUAL? .OBJ ,CH-PLAYER>\n\t\t\t\t\t<TELL C <BOR !\\Y .MASK> \"ou\">\n\t\t\t\t)\n\t\t\t\t(<FSET? .OBJ ,FL-FEMALE>\n\t\t\t\t\t<TELL C <BOR !\\S .MASK> \"he\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL C <BOR !\\H .MASK> !\\e>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<EQUAL? .ART ,K-ART-HIM>\n\t\t\t<COND\n\t\t\t\t(<AND <FSET? .OBJ ,FL-PLURAL>\n\t\t\t\t\t\t<NOT <FSET? .OBJ ,FL-COLLECTIVE>>\n\t\t\t\t\t>\n\t\t\t\t\t<TELL C <BOR !\\T .MASK> \"hem\">\n\t\t\t\t)\n\t\t\t\t(<NOT <FSET? .OBJ ,FL-PERSON>>\n\t\t\t\t\t<TELL C <BOR !\\I .MASK> !\\t>\n\t\t\t\t)\n\t\t\t\t(<EQUAL? .OBJ ,CH-PLAYER>\n\t\t\t\t\t<TELL C <BOR !\\Y .MASK> \"ou\">\n\t\t\t\t)\n\t\t\t\t(<FSET? .OBJ ,FL-FEMALE>\n\t\t\t\t\t<TELL C <BOR !\\H .MASK> \"er\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL C <BOR !\\H .MASK> \"im\">\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<EQUAL? .ART ,K-ART-HIS>\n\t\t\t<COND\n\t\t\t\t(<AND <FSET? .OBJ ,FL-PLURAL>\n\t\t\t\t\t\t<NOT <FSET? .OBJ ,FL-COLLECTIVE>>\n\t\t\t\t\t>\n\t\t\t\t\t<TELL C <BOR !\\T .MASK> \"heir\">\n\t\t\t\t)\n\t\t\t\t(<NOT <FSET? .OBJ ,FL-PERSON>>\n\t\t\t\t\t<TELL C <BOR !\\I .MASK> \"ts\">\n\t\t\t\t)\n\t\t\t\t(<EQUAL? .OBJ ,CH-PLAYER>\n\t\t\t\t\t<TELL C <BOR !\\Y .MASK> \"our\">\n\t\t\t\t)\n\t\t\t\t(<FSET? .OBJ ,FL-FEMALE>\n\t\t\t\t\t<TELL C <BOR !\\H .MASK> \"er\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL C <BOR !\\H .MASK> \"is\">\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-PRINT-OBJ": {
   "name": "RT-PRINT-OBJ",
   "file": "misc.zil",
   "line": 366,
   "endLine": 408,
   "source": "<ROUTINE RT-PRINT-OBJ (\"OPT\" (O <>) (ART ,K-ART-THE) (CAP? <>) (VERB <>) \"AUX\" (MASK 0))\n\t<COND\n\t\t(<NOT .O>\n\t\t\t<SET O ,PRSO>\n\t\t)\n\t>\n;\t<THIS-IS-IT .O>\n\t<COND\n\t\t(<FSET? .O ,FL-HAS-SDESC>\n\t\t\t<APPLY <GETP .O ,P?ACTION> ,M-OBJDESC .ART .CAP?>\n\t\t)\n\t\t(<EQUAL? .ART ,K-ART-HE ,K-ART-HIM ,K-ART-HIS>\n\t\t\t<FSET .O ,FL-SEEN>\n\t\t\t<RT-PRINT-ARTICLE .O .ART .CAP?>\n\t\t)\n\t\t(<NOT <FSET? .O ,FL-NO-ARTICLE>>\n\t\t\t<FSET .O ,FL-SEEN>\n\t\t\t<RT-PRINT-ARTICLE .O .ART .CAP?>\n\t\t\t<TELL !\\  D .O>\n\t\t)\n\t\t(T\n\t\t\t<COND\n\t\t\t\t(<NOT .CAP?>\n\t\t\t\t\t<TELL !\\ >\n\t\t\t\t\t<SET MASK 32>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? .O ,CH-PLAYER>\n\t\t\t\t\t<TELL C <BOR !\\Y .MASK> \"ou\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL D .O>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n\t<COND\n\t\t(.VERB\n\t\t\t<RT-PRINT-VERB .O .VERB>\n\t\t)\n\t>\n>"
  },
  "RT-PRINT-VERB": {
   "name": "RT-PRINT-VERB",
   "file": "misc.zil",
   "line": 410,
   "endLine": 453,
   "source": "<ROUTINE RT-PRINT-VERB (OBJ VERB)\n\t<TELL !\\ >\n\t<COND\n\t\t(<OR\t<EQUAL? .OBJ ,CH-PLAYER>\n\t\t\t\t<AND\n\t\t\t\t\t<FSET? .OBJ ,FL-PLURAL>\n\t\t\t\t\t<NOT <FSET? .OBJ ,FL-COLLECTIVE>>\n\t\t\t\t>\n\t\t\t>\n\t\t\t<TELL .VERB>\n\t\t)\n\t\t(T\n\t\t\t<COND\n\t\t\t\t(<=? .VERB \"are\">\n\t\t\t\t\t<TELL \"is\">\n\t\t\t\t)\n\t\t\t\t(<=? .VERB \"have\">\n\t\t\t\t\t<TELL \"has\">\n\t\t\t\t)\n\t\t\t\t(<=? .VERB \"try\">\n\t\t\t\t\t<TELL \"tries\">\n\t\t\t\t)\n\t\t\t\t(<=? .VERB \"empty\">\n\t\t\t\t\t<TELL \"empties\">\n\t\t\t\t)\n\t\t\t\t(<=? .VERB \"fly\">\n\t\t\t\t\t<TELL \"flies\">\n\t\t\t\t)\n\t\t\t\t(<=? .VERB \"dry\">\n\t\t\t\t\t<TELL \"dries\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL .VERB>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<EQUAL? .VERB \"do\" \"kiss\" \"push\" \"miss\" \"pass\" \"toss\" \"touch\">\n\t\t\t\t\t\t\t<TELL !\\e>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<TELL !\\s>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "THIS-IS-IT": {
   "name": "THIS-IS-IT",
   "file": "misc.zil",
   "line": 465,
   "endLine": 501,
   "source": "<ROUTINE THIS-IS-IT (OBJ)\n\t<COND\n\t\t(<EQUAL? .OBJ <> ,ROOMS ,NOT-HERE-OBJECT ,CH-PLAYER ,INTDIR ,GLOBAL-HERE>\n\t\t\t<RTRUE>\n\t\t)\n\t\t(<AND <DIR-VERB?>\n\t\t\t\t<==? .OBJ ,PRSO>\n\t\t\t>\n\t\t\t<RTRUE>\n\t\t)\n\t>\n\t<COND\n\t\t(<FSET? .OBJ ,FL-PERSON>\n\t\t\t<COND\n\t\t\t\t(<FSET? .OBJ ,FL-FEMALE>\n\t\t\t\t\t<FSET ,HER ,FL-TOUCHED>\n\t\t\t\t\t<SETG P-HER-OBJECT .OBJ>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<FSET ,HIM ,FL-TOUCHED>\n\t\t\t\t\t<SETG P-HIM-OBJECT .OBJ>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<AND <FSET? .OBJ ,FL-PLURAL>\n\t\t\t\t<NOT <FSET? .OBJ ,FL-COLLECTIVE>>\n\t\t\t>\n\t\t\t<FSET ,THEM ,FL-TOUCHED>\n\t\t\t<SETG P-THEM-OBJECT .OBJ>\n\t\t)\n\t\t(T\n\t\t\t<FSET ,IT ,FL-TOUCHED>\t;\"to cause pronoun 'it' in output\"\n\t\t\t<SETG P-IT-OBJECT .OBJ>\n\t\t)\n\t>\n\t<RTRUE>\n>"
  },
  "RT-IN-ON-MSG": {
   "name": "RT-IN-ON-MSG",
   "file": "misc.zil",
   "line": 606,
   "endLine": 622,
   "source": "<ROUTINE RT-IN-ON-MSG (OBJ \"OPT\" (CAP? <>) \"AUX\" (MASK 0))\n\t<COND\n\t\t(<NOT .CAP?>\n\t\t\t<TELL !\\ >\n\t\t\t<SET MASK 32>\n\t\t)\n\t>\n\t<COND\n\t\t(<FSET? .OBJ ,FL-SURFACE>\n\t\t\t<TELL C <BOR !\\O .MASK>>\n\t\t)\n\t\t(T\n\t\t\t<TELL C <BOR !\\I .MASK>>\n\t\t)\n\t>\n\t<TELL !\\n>\n>"
  },
  "RT-OUT-OFF-MSG": {
   "name": "RT-OUT-OFF-MSG",
   "file": "misc.zil",
   "line": 624,
   "endLine": 647,
   "source": "<ROUTINE RT-OUT-OFF-MSG (OBJ \"OPT\" (CAP? <>))\n\t<COND\n\t\t(<OR\t<FSET? .OBJ ,FL-SURFACE>\n\t\t\t\t<FSET? .OBJ ,FL-CONTAINER>\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(<NOT .CAP?>\n\t\t\t\t\t<TELL \" o\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL !\\O>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(<FSET? .OBJ ,FL-SURFACE>\n\t\t\t\t\t<TELL \"ff\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"ut\">\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-OPEN-MSG": {
   "name": "RT-OPEN-MSG",
   "file": "misc.zil",
   "line": 649,
   "endLine": 664,
   "source": "<ROUTINE RT-OPEN-MSG (\"OPT\" (OBJ <>))\n\t<COND\n\t\t(<NOT .OBJ>\n\t\t\t<SET OBJ ,PRSO>\n\t\t)\n\t>\n\t<TELL !\\ >\n\t<COND\n\t\t(<FSET? .OBJ ,FL-OPEN>\n\t\t\t<TELL \"open\">\n\t\t)\n\t\t(T\n\t\t\t<TELL \"closed\">\n\t\t)\n\t>\n>"
  },
  "TOUCH-VERB?": {
   "name": "TOUCH-VERB?",
   "file": "misc.zil",
   "line": 666,
   "endLine": 700,
   "source": "<ROUTINE TOUCH-VERB? ()\n\t<VERB?\n\t;\tATTACK\n\t;\tBREAK\n\t\tCLOSE\n\t;\tCLIMB-DOWN\n\t;\tCLIMB-ON\n\t;\tCLIMB-OVER\n\t;\tCLIMB-UP\n\t;\tCUT\n\t;\tDIG\n\t;\tDRINK\n\t;\tDRINK-FROM\n\t\tDROP\n\t;\tEAT\n\t;\tEMPTY\n\t;\tEMPTY-FROM\n\t;\tFILL\n\t;\tGIVE\n\t;\tKNOCK\n\t;\tLOCK\n\t;\tMOVE\n\t\tOPEN\n\t\tPUT\n\t\tPUT-IN\n\t;\tRAISE\n\t;\tRELEASE\n\t;\tRUB\n\t\tTAKE\n\t;\tUNLOCK\n\t\tWEAR\n\t;\tUNDRESS\n\t\tUNWEAR\n\t>\n>"
  },
  "CLOCKER": {
   "name": "CLOCKER",
   "file": "misc.zil",
   "line": 718,
   "endLine": 832,
   "source": "<ROUTINE CLOCKER (\"AUX\" NT)\n \n;\t<SETG GL-DROP-HERE <>>\t; \"Reset this every turn.\"\n \n;\t<COND\n\t\t(<EQUAL? ,GL-QUESTION 1>\n\t\t\t<INC GL-QUESTION>\n\t\t)\n\t\t(<EQUAL? ,GL-QUESTION 2>\n\t\t\t<SETG GL-QUESTION 0>\n\t\t)\n\t>\n \n\t<COND\n\t\t(,CLOCK-WAIT\n\t\t\t<SETG CLOCK-WAIT <>>\n\t\t\t<RFALSE>\n\t\t)\n\t>\n\t<SET NT ,GL-MOVES>\n\t<SETG GL-NEW-TIME .NT>\n\t<REPEAT (RTN TIME ANY? MULT? DIF N (VAL <>))\n\t\t<SET RTN <>>\n\t\t<SET TIME .NT>\n\t\t<SET ANY? <>>\n\t\t<SET MULT? <>>\n\t\t<REPEAT ((I 0) Z1 Z2)\n\t\t\t<SET Z1 <ZGET ,GL-Q-TBL .I>>\n\t\t\t<SET Z2 <ZGET ,GL-Q-TBL <+ .I 1>>>\n\t\t\t<COND\n\t\t\t\t(<AND .Z1\n\t\t\t\t\t\t<L=? .Z2 .TIME>\n\t\t\t\t\t>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<AND .RTN\n\t\t\t\t\t\t\t\t<EQUAL? .Z2 .TIME>\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<SET MULT? T>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<SET RTN .Z1>\n\t\t\t\t\t<SET TIME .Z2>\n\t\t\t\t\t<SET N .I>\n\t\t\t\t\t<SET ANY? T>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<SET I <+ .I 2>>\n\t\t\t<COND\n\t\t\t\t(<OR\t<G=? .I ,K-Q-SIZE>\n\t\t\t\t\t\t<G=? .I ,GL-Q-MAX>\n\t\t\t\t\t>\n\t\t\t\t\t<RETURN>\n\t\t\t\t)\n\t\t\t>\n\t\t>\n\t\t<COND\n\t\t\t(.ANY?\n\t\t\t\t<SETG GL-MOVES .TIME>\n\t\t\t\t<COND\n\t\t\t\t\t(<NOT <FSET? ,CH-PLAYER ,FL-ASLEEP>>\n\t\t\t\t\t\t<UPDATE-STATUS-LINE>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<SET DIF <L? .TIME .NT>>\n\t\t\t\t<PUT ,GL-Q-TBL .N 0>\n\t\t\t\t<PUT ,GL-Q-TBL <+ .N 1> 0>\n\t\t\t\t<COND\n\t\t\t\t\t(<EQUAL? <+ .N 2> ,GL-Q-MAX>\n\t\t\t\t\t\t<SETG GL-Q-MAX <- ,GL-Q-MAX 2>>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<SETG GL-CLK-RUN T>\n\t\t\t\t<COND\n\t\t\t\t\t(<APPLY .RTN>\n\t\t\t\t\t\t<SET VAL T>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<SETG GL-CLK-RUN <>>\n\t\t\t\t<COND\n\t\t\t\t\t(<G? ,GL-MOVES .NT>\n\t\t\t\t\t\t<SETG GL-NEW-TIME ,GL-MOVES>\n\t\t\t\t\t\t<SET NT ,GL-MOVES>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<COND\n\t\t\t\t\t(<AND .VAL\n\t\t\t\t\t\t\t<NOT .MULT?>\n\t\t\t\t\t\t\t.DIF\n\t\t\t\t\t\t\t<VERB? WAIT>\n\t\t\t\t\t\t\t<NOT <FSET? ,CH-PLAYER ,FL-ASLEEP>>\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<SET VAL <>>\n\t\t\t\t\t\t<TELL CR \"Do you want to continue waiting\">\n\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t(<NOT <YES?>>\t; \"No -- Stop waiting\"\n\t\t\t\t\t\t\t\t<SET NT .TIME>\n\t\t\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t<TELL ,K-TIME-PASSES-MSG>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t)\n\t\t\t(T\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t>\n\t>\n\t<SETG GL-MOVES .NT>\n\t<INC GL-MOVES>\n \n\t<RFALSE>\n>"
  },
  "RT-QUEUE": {
   "name": "RT-QUEUE",
   "file": "misc.zil",
   "line": 834,
   "endLine": 859,
   "source": "<ROUTINE RT-QUEUE (RTN TIME \"OPT\" (ABS? <>))\n;\t<COND\n\t\t(<AND <NOT ,GL-CLK-RUN>\n\t\t\t\t<NOT .ABS?>\n\t\t\t>\n\t\t\t<INC TIME>\n\t\t)\n\t>\n\t<REPEAT ((I 0))\n\t\t<COND\n\t\t\t(<ZERO? <GET ,GL-Q-TBL .I>>\n\t\t\t\t<PUT ,GL-Q-TBL .I .RTN>\n\t\t\t\t<PUT ,GL-Q-TBL <+ .I 1> .TIME>\n\t\t\t\t<COND\n\t\t\t\t\t(<G? <+ .I 2> ,GL-Q-MAX>\n\t\t\t\t\t\t<SETG GL-Q-MAX <+ .I 2>>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<RTRUE>\n\t\t\t)\n\t\t\t(<G=? <SET I <+ .I 2>> ,K-Q-SIZE>\n\t\t\t\t<RFALSE>\n\t\t\t)\n\t\t>\n\t>\n>"
  },
  "RT-DEQUEUE": {
   "name": "RT-DEQUEUE",
   "file": "misc.zil",
   "line": 861,
   "endLine": 881,
   "source": "<ROUTINE RT-DEQUEUE (RTN)\n\t<REPEAT ((I 0))\n\t\t<COND\n\t\t\t(<EQUAL? <GET ,GL-Q-TBL .I> .RTN>\n\t\t\t\t<PUT ,GL-Q-TBL .I 0>\n\t\t\t\t<PUT ,GL-Q-TBL <+ .I 1> 0>\n\t\t\t\t<COND\n\t\t\t\t\t(<EQUAL? <+ .I 2> ,GL-Q-MAX>\n\t\t\t\t\t\t<SETG GL-Q-MAX <- ,GL-Q-MAX 2>>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<RTRUE>\n\t\t\t)\n\t\t\t(<OR\t<G=? <SET I <+ .I 2>> ,K-Q-SIZE>\n\t\t\t\t\t<G=? .I ,GL-Q-MAX>\n\t\t\t\t>\n\t\t\t\t<RFALSE>\n\t\t\t)\n\t\t>\n\t>\n>"
  },
  "RT-IS-QUEUED?": {
   "name": "RT-IS-QUEUED?",
   "file": "misc.zil",
   "line": 883,
   "endLine": 898,
   "source": "<ROUTINE RT-IS-QUEUED? (RTN \"AUX\" (TIME 0))\n\t<REPEAT ((I 0))\n\t\t<COND\n\t\t\t(<EQUAL? <ZGET ,GL-Q-TBL .I> .RTN>\n\t\t\t\t<SET TIME <ZGET ,GL-Q-TBL <+ .I 1>>>\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t\t(<OR\t<G=? <SET I <+ .I 2>> ,K-Q-SIZE>\n\t\t\t\t\t<G=? .I ,GL-Q-MAX>\n\t\t\t\t>\n\t\t\t\t<RFALSE>\n\t\t\t)\n\t\t>\n\t>\n\t<RETURN .TIME>\n>"
  },
  "GO": {
   "name": "GO",
   "file": "misc.zil",
   "line": 979,
   "endLine": 1064,
   "source": "<ROUTINE GO ()\n\t<SETG GL-SCR-WID <LOWCORE SCRH>>\n\t<COND\n\t\t(<L? ,GL-SCR-WID 64>\n\t\t\t<TELL \"[The screen is too narrow.]\" CR>\n\t\t\t<QUIT>\n\t\t)\n\t>\n\t<SETG GL-FONT-Y <SHIFT <WINGET 0 ,WFSIZE> -8>>\n\t<SETG GL-FONT-X <ANDB <WINGET 0 ,WFSIZE> 255>>\n \n\t; \"Determine width of space in pixels.\"\n\t<DIROUT ,K-D-TBL-ON ,K-DIROUT-TBL>\n\t<TELL \" \">\n\t<DIROUT ,K-D-TBL-OFF>\n\t<SETG GL-SPACE-WIDTH <LOWCORE TWID>>\n\t<COND\n\t\t(<ZERO? ,GL-SPACE-WIDTH>\n\t\t\t<SETG GL-SPACE-WIDTH <LOWCORE HWRD>>\n\t\t\t<SETG GL-SPACE-WIDTH </ ,GL-SPACE-WIDTH <LOWCORE SCRH>>>\n\t\t)\n\t>\n \n\t<MOUSE-LIMIT -1>\n\t<CLEAR -1>\n\t<INIT-STATUS-LINE <>>\n\t<UPDATE-STATUS-LINE>\n\t<RT-QUEUE ,RT-I-GAS-MIX ,GL-MOVES>\n\t<RT-QUEUE ,RT-I-LEAVE-1 ,GL-MOVES>\n\t<RT-QUEUE ,RT-I-RETURN-1 <+ ,GL-MOVES 90>>\n\t<RT-QUEUE ,RT-I-CRANE-1 <+ ,GL-MOVES 120>>\n\t<RT-QUEUE ,RT-I-NITROGEN-LEAK <+ ,GL-MOVES 3>>\n;\t<RT-QUEUE ,RT-I-RUSSIAN <+ ,GL-MOVES 3>>\n\t<RT-QUEUE ,RT-I-TEMP ,GL-MOVES>\n\t<RT-QUEUE ,RT-I-CAB-FIXED <+ ,GL-MOVES 1320>>\t; \"11 hours later.\"\n\t<V-VERSION>\n\t<TELL CR\n\"\t'Catfish' DeVries runs his eye over the gauges on the wall of Deepcore's\ngas-mix room. \\\"They're done, Bud,\\\" he says, \\\"Cooked to a turn.\\\" He spins\nthe wheel in the steel door to the compression chamber, and it eases open\nwith a sigh.|\n\tA man with a military haircut quickly steps through the door, apparently\nundisturbed by the six claustrophobic hours of compression that will enable\nhim to survive the atmosphere 2,000 feet below the sea's surface. He is\nfollowed by three other men and one very pretty woman.|\n\t\\\"Brigman?\\\" he says to you. \\\"Coffey. Team leader.\\\" He gestures to\nthe others. \\\"Willhite, Schoenick, Monk. I gather you already know the little\nlady.\\\"|\n\tLindsey glares at him. \\\"Listen, Tarzan,\\\" she snaps, \\\"Let's get one\nthing straight...\\\"|\n\tA nervous voice over the intercom interrupts her. \\\"Bud? It's Hippy.\nI'm in the Control Module and I got something here on the screen you should\ntake a look at. Pronto.\\\"|\n\tYou run out through the sub-bay with the others close on your heels.\nWhen you arrive in the Command Module, Hippy is pointing to the ROV screen.\nCoffey and the others crowd around behind you, looking over your shoulder.|\n\t\\\"It's a small submersible over by the Montana,\\\" Hippy says. \\\"I can't\nmake it out real well, but I saw some divers leaving her just a minute\nago.\\\"||\"\n\t>\n\t<MARGIN 50 50>\n\t<TELL\n\"[GRAPHIC: A close-up of the ROV screen, with a hint of the controls that\nsurround it. On the screen is a murky picture of a submersible.]||\"\n\t>\n\t<MARGIN 0 0>\n\t<TELL\n\"\t\\\"Shit!\\\" Coffey shouts. \\\"We've got to secure that boat! Monk, take\nWillhite and Schoenick and that big rig we saw in the MoonPool. I'll go in\nthe submersible we came down on. Brigman, I need some drivers.\\\"|\n\tOne-Night cuts him off. \\\"I decide who drives what around here, mister.\nI'll take your boys over in Flatbed. Hippy will drive you in Cab Three. We\nleave in two minutes.\\\"|\n\tOne-Night and Hippy leave the Command Module, followed by the SEALs.\nYou are left alone with Lindsey and Catfish.|\"\n\t>\n\t; \"Is there a elegant way to force the interpreter to do a 'more'?\"\n\t<TELL \"[MORE]\">\n\t<INPUT 1>\n\t<CRLF>\n\t<INIT-STATUS-LINE>\n\t<CLEAR 6>\n\t<CURSET <- <WINGET 0 ,K-W-YSIZE> ,GL-FONT-Y> 1>\n\t<MAIN-LOOP>\n\t<AGAIN>\n>"
  },
  "RT-RM-MIDSHIP-HATCH": {
   "name": "RT-RM-MIDSHIP-HATCH",
   "file": "montana.zil",
   "line": 34,
   "endLine": 58,
   "source": "<ROUTINE RT-RM-MIDSHIP-HATCH (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t;\t(<MC-CONTEXT? ,M-F-LOOK>\n\t\t)\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are at\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"come to\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the midship hatch of the Montana. The trough wall rises sharply to the east\nand the missile hatch is to the fore. Through the hatch is the attack center.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-LG-MIDSHIP-HATCH": {
   "name": "RT-LG-MIDSHIP-HATCH",
   "file": "montana.zil",
   "line": 69,
   "endLine": 106,
   "source": "<ROUTINE RT-LG-MIDSHIP-HATCH (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL\n\"\tThe hatch is a heavy, circular lid with a handle in the middle. Because\nthe sub is resting on its side, the hinges are at the top.\" CR\n\t\t\t>\n\t\t)\n\t\t(<VERB? OPEN>\n\t\t\t<COND\n\t\t\t\t(<FSET? ,LG-MIDSHIP-HATCH ,FL-OPEN>\n\t\t\t\t\t<RT-ALREADY-MSG ,PRSO \"open\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL\n\"\tYou grab the handle and try to lift the hatch, but only succeed in\npushing yourself down in the water.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? CLOSE>\n\t\t\t<COND\n\t\t\t\t(<NOT <FSET? ,LG-MIDSHIP-HATCH ,FL-OPEN>>\n\t\t\t\t\t<RT-ALREADY-MSG ,PRSO \"closed\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL\n\"\tYou can't close the hatch against the buoyancy of the lift bag.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TO-TRENCH-BOTTOM": {
   "name": "RT-TO-TRENCH-BOTTOM",
   "file": "montana.zil",
   "line": 108,
   "endLine": 123,
   "source": "<ROUTINE RT-TO-TRENCH-BOTTOM (\"AUX\" (QUIET <>))\n\t<COND\n\t\t(.QUIET\n\t\t\t<RETURN ,RM-TRENCH-BOTTOM>\n\t\t)\n\t\t(<OR\t<NOT <IN? ,TH-FBS-SUIT ,CH-PLAYER>>\n\t\t\t\t<NOT <FSET? ,TH-FBS-SUIT ,FL-WORN>>\n\t\t\t>\n\t\t\t<TELL \"\tYou can't go down that deep with a regular dry suit.|\">\n\t\t\t<RFALSE>\n\t\t)\n\t\t(T\n\t\t\t<RETURN ,RM-TRENCH-BOTTOM>\n\t\t)\n\t>\n>"
  },
  "RT-RM-MISSILE-HATCH": {
   "name": "RT-RM-MISSILE-HATCH",
   "file": "montana.zil",
   "line": 141,
   "endLine": 163,
   "source": "<ROUTINE RT-RM-MISSILE-HATCH (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are at\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"come to\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the missile hatch of the Montana. To the aft is the midship hatch, and the\nbow lies foreward.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-MISSILE": {
   "name": "RT-TH-MISSILE",
   "file": "montana.zil",
   "line": 181,
   "endLine": 183,
   "source": "<ROUTINE RT-TH-MISSILE (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-TH-MISSILE-TIMER": {
   "name": "RT-TH-MISSILE-TIMER",
   "file": "montana.zil",
   "line": 194,
   "endLine": 196,
   "source": "<ROUTINE RT-TH-MISSILE-TIMER (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-TH-MISSILE-PANEL": {
   "name": "RT-TH-MISSILE-PANEL",
   "file": "montana.zil",
   "line": 207,
   "endLine": 209,
   "source": "<ROUTINE RT-TH-MISSILE-PANEL (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-TH-WIRES": {
   "name": "RT-TH-WIRES",
   "file": "montana.zil",
   "line": 224,
   "endLine": 239,
   "source": "<ROUTINE RT-TH-WIRES (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL\n\"\tThe wires are red, green, orange, yellow, blue, and white.\" CR\n\t\t\t>\n\t\t)\n\t\t(<VERB? CUT>\n\t\t\t<TELL \"[You must specify which wire you want to cut.]|\">\n\t\t\t<RFATAL>\n\t\t)\n\t>\n>"
  },
  "RT-TH-WIRE": {
   "name": "RT-TH-WIRE",
   "file": "montana.zil",
   "line": 289,
   "endLine": 341,
   "source": "<ROUTINE RT-TH-WIRE (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? CUT>\n\t\t\t<COND\n\t\t\t\t(<MC-PRSI? ,TH-KNIFE>\n\t\t\t\t\t<TELL\n\"The wires are too close together to get the large blade of your knife\nbetween them.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<MC-PRSI? ,TH-WIRE-CUTTERS>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,PRSO ,FL-BROKEN>\n\t\t\t\t\t\t\t<RT-ALREADY-MSG \"cut\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<RT-CORRECT-WIRE? ,PRSO>\n\t\t\t\t\t\t\t<FSET ,PRSO ,FL-BROKEN>\n\t\t\t\t\t\t\t<SETG GL-WIRES-CUT <+ ,GL-WIRES-CUT 1>>\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(<EQUAL? ,GL-WIRES-CUT 6>\n\t\t\t\t\t\t\t\t\t<SETG GL-FALLING-INTO-TRENCH? T>\n\t\t\t\t\t\t\t\t\t<RT-QUEUE ,RT-I-INTO-TRENCH-1 <+ ,GL-MOVES 1>>\n\t\t\t\t\t\t\t\t\t<TELL\n\"\tYou hold your breath and cut the last wire. Nothing happens. Lindsey\nsmiles at you and gives you a big thumbs up.|\n\tLindsey pats you on the back and then starts to climb back into the Cab.\nThe sudden imbalance makes it wobble precariously. Suddenly you realize that\nit is slipping off the curved side of the sub! Desperately, you make a lunge\nfor the hatch to try to scramble inside, but it's too late. The Cab is\nfalling into the trench, and you are going to be dragged along with it.\" CR\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t\t<TELL \"\tYou cut\" the ,PRSO \".\" CR>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL\n\"\tThe explosion is so instantaneous and so massive that you have no\nsensation of dying. You simply cease to be.|\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<RT-END-OF-GAME>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-CORRECT-WIRE?": {
   "name": "RT-CORRECT-WIRE?",
   "file": "montana.zil",
   "line": 348,
   "endLine": 506,
   "source": "<ROUTINE RT-CORRECT-WIRE? (WIRE)\n\t<COND\n\t\t(<ZERO? ,GL-WIRE-SEQUENCE>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<MC-PRSO? ,TH-RED-WIRE>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? ,GL-WIRE-SEQUENCE 1 4>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,TH-ORANGE-WIRE ,FL-BROKEN>\n\t\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<EQUAL? ,GL-WIRE-SEQUENCE 2>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,TH-YELLOW-WIRE ,FL-BROKEN>\n\t\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<EQUAL? ,GL-WIRE-SEQUENCE 3>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,TH-GREEN-WIRE ,FL-BROKEN>\n\t\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<MC-PRSO? ,TH-BLUE-WIRE>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? ,GL-WIRE-SEQUENCE 1 2>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,TH-GREEN-WIRE ,FL-BROKEN>\n\t\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<EQUAL? ,GL-WIRE-SEQUENCE 3>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,TH-WHITE-WIRE ,FL-BROKEN>\n\t\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<EQUAL? ,GL-WIRE-SEQUENCE 4>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,TH-YELLOW-WIRE ,FL-BROKEN>\n\t\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<MC-PRSO? ,TH-GREEN-WIRE>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? ,GL-WIRE-SEQUENCE 1>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,TH-RED-WIRE ,FL-BROKEN>\n\t\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<EQUAL? ,GL-WIRE-SEQUENCE 2>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,TH-ORANGE-WIRE ,FL-BROKEN>\n\t\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<RTRUE>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<MC-PRSO? ,TH-YELLOW-WIRE>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? ,GL-WIRE-SEQUENCE 1 4>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,TH-WHITE-WIRE ,FL-BROKEN>\n\t\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<EQUAL? ,GL-WIRE-SEQUENCE 2>\n\t\t\t\t\t<RTRUE>\n\t\t\t\t)\n\t\t\t\t(<EQUAL? ,GL-WIRE-SEQUENCE 3>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,TH-ORANGE-WIRE ,FL-BROKEN>\n\t\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<MC-PRSO? ,TH-ORANGE-WIRE>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? ,GL-WIRE-SEQUENCE 1>\n\t\t\t\t\t<RTRUE>\n\t\t\t\t)\n\t\t\t\t(<EQUAL? ,GL-WIRE-SEQUENCE 2>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,TH-WHITE-WIRE ,FL-BROKEN>\n\t\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<EQUAL? ,GL-WIRE-SEQUENCE 3>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,TH-RED-WIRE ,FL-BROKEN>\n\t\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<EQUAL? ,GL-WIRE-SEQUENCE 4>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,TH-BLUE-WIRE ,FL-BROKEN>\n\t\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<MC-PRSO? ,TH-WHITE-WIRE>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? ,GL-WIRE-SEQUENCE 1>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,TH-BLUE-WIRE ,FL-BROKEN>\n\t\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<EQUAL? ,GL-WIRE-SEQUENCE 2>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,TH-RED-WIRE ,FL-BROKEN>\n\t\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<EQUAL? ,GL-WIRE-SEQUENCE 3>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,TH-YELLOW-WIRE ,FL-BROKEN>\n\t\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<EQUAL? ,GL-WIRE-SEQUENCE 4>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,TH-GREEN-WIRE ,FL-BROKEN>\n\t\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-WIRE-CUTTERS": {
   "name": "RT-TH-WIRE-CUTTERS",
   "file": "montana.zil",
   "line": 517,
   "endLine": 519,
   "source": "<ROUTINE RT-TH-WIRE-CUTTERS (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-I-INTO-TRENCH-1": {
   "name": "RT-I-INTO-TRENCH-1",
   "file": "montana.zil",
   "line": 523,
   "endLine": 531,
   "source": "<ROUTINE RT-I-INTO-TRENCH-1 ()\n\t<RT-QUEUE ,RT-I-INTO-TRENCH-2 <+ ,GL-MOVES 1>>\n\t<TELL\n\"\tThe hookah line goes taut and drags you down after the sub. A quick glance\nto your right reveals that Lindsey's hookah has caught on the Cab's open\nhatch and she is being dragged down too. Your chest begins to tighten under\nthe additional pressure. If you don't do something quickly, you will die.\" CR\n\t>\n>"
  },
  "RT-I-INTO-TRENCH-2": {
   "name": "RT-I-INTO-TRENCH-2",
   "file": "montana.zil",
   "line": 533,
   "endLine": 540,
   "source": "<ROUTINE RT-I-INTO-TRENCH-2 ()\n\t<TELL\n\"\tThe cab pulls you deeper and deeper. Suddenly you feel a massive pain in\nyour chest and you black out. The last thing you see before dying is\nLindsey's hand reaching toward you for help.|\"\n\t>\n\t<RT-END-OF-GAME>\n>"
  },
  "RT-I-OUT-OF-AIR-1": {
   "name": "RT-I-OUT-OF-AIR-1",
   "file": "montana.zil",
   "line": 542,
   "endLine": 545,
   "source": "<ROUTINE RT-I-OUT-OF-AIR-1 ()\n\t<RT-QUEUE ,RT-I-OUT-OF-AIR-2 <+ ,GL-MOVES 1>>\n\t<TELL \"\tYou can't hold your breath much longer.\" CR>\n>"
  },
  "RT-I-OUT-OF-AIR-2": {
   "name": "RT-I-OUT-OF-AIR-2",
   "file": "montana.zil",
   "line": 547,
   "endLine": 577,
   "source": "<ROUTINE RT-I-OUT-OF-AIR-2 ()\n\t<MOVE ,CH-PLAYER ,RM-SUB-BAY>\n\t<MOVE ,TH-DRY-SUIT ,RM-SUB-BAY>\n\t<FCLEAR ,TH-DRY-SUIT ,FL-WORN>\n\t<FCLEAR ,TH-DIVE-LOCKER ,FL-LOCKED>\n\t<FSET ,TH-DIVE-LOCKER ,FL-OPEN>\n\t<MOVE ,CH-HIPPY ,RM-SUB-BAY>\n\t<MOVE ,CH-CATFISH ,RM-SUB-BAY>\n\t<TELL\n\"\tYou realize that you can't hold your breath any longer and that you are\ngoing to die. Your chest aches, and you see bright lights dancing before your\neyes. But all you can think of is Lindsey's face as she disappeared into the\ntrough. Just when you think you are going to pass out, you notice that the\nlights seem to be clustering around you, pushing you gently back towards\nDeepcore. Unable to hold the air any longer, you expel it and expect to\ninhale a mouthful of water. Instead you discover that you can breathe quite\nnormally.|\n\tYou reach out to touch the lights, but your hand passes right through\nthem. After a few moments, you relax and enjoy the ride. Soon you find\nyourself approaching Deepcore. The lights stay with you until you surface\ninside the MoonPool, and then they streak away back toward the trench.|\n\tCatfish grabs your hand and hoists you to firm ground as easily as if you\nwere a child. He helps you out of your dive suit and into dry clothes. He\nsays that he thinks that there is some kind of benevolent alien at the bottom\nof the Trench, and that Lindsey's monitoring system shows she is still alive,\ndown near the bottom of the trench.|\n\tHippy comes in and says, \\\"I think I can open this locker now.\\\" He holds\nan electronic device near the lock, and the locker pops open. Inside it is\nthe fluid breathing system suit.\" CR\n\t>\n>"
  },
  "RT-RM-BOW": {
   "name": "RT-RM-BOW",
   "file": "montana.zil",
   "line": 595,
   "endLine": 618,
   "source": "<ROUTINE RT-RM-BOW (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are at\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"come to\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the bow of the Montana. The missile hatch is aft of here.  You see the huge\ngash that was the Montana's death wound. When we get graphics into the game\nyou will only be able to fly the ROV in here. But for now, come on in!|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-TORPEDO-ROOM": {
   "name": "RT-RM-TORPEDO-ROOM",
   "file": "montana.zil",
   "line": 637,
   "endLine": 659,
   "source": "<ROUTINE RT-RM-TORPEDO-ROOM (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the Montana's torpedo room. Foreward lies the gash in the hull and aft is\nthe engine room.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-ENGINE-ROOM": {
   "name": "RT-RM-ENGINE-ROOM",
   "file": "montana.zil",
   "line": 677,
   "endLine": 699,
   "source": "<ROUTINE RT-RM-ENGINE-ROOM (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the engine room of the Montana. The torpedo room is foreward, and aft is\nthe missile launching room.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-MISSILE-ROOM": {
   "name": "RT-RM-MISSILE-ROOM",
   "file": "montana.zil",
   "line": 716,
   "endLine": 737,
   "source": "<ROUTINE RT-RM-MISSILE-ROOM (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the missile launching room. On the wall hangs the missile access key.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-MISSILE-ACCESS-KEY": {
   "name": "RT-TH-MISSILE-ACCESS-KEY",
   "file": "montana.zil",
   "line": 748,
   "endLine": 750,
   "source": "<ROUTINE RT-TH-MISSILE-ACCESS-KEY (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-RM-ATTACK-CENTER": {
   "name": "RT-RM-ATTACK-CENTER",
   "file": "montana.zil",
   "line": 769,
   "endLine": 807,
   "source": "<ROUTINE RT-RM-ATTACK-CENTER (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK>\n\t\t\t<TELL\n\"\tCautiously, you swim through the hatch. You pull yourself along by the\nrungs on the ladder, and then find yourself in the attack center. Your helmet\nlight reveals an eerie scene of floating debris and lop-sided high-tech\nwreckage. You fight off the disorientation caused by everything being on its\nside, and then locate the body of the captain and confirm that the missile\naccess key has been removed from his neck. Fighting the urge to vomit, you\nturn away and see a companionway leading aft.\" CR\n\t\t\t>\n\t\t)\n\t\t(<MC-CONTEXT? ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(<EQUAL? ,OHERE ,RM-MIDSHIP-HATCH>\n\t\t\t\t\t<TELL\n\"swim through the hatch to the attack center. Aft, you see a companionway\nleading into the darkness.|\"\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL\n\"enter the attack center. Above you is the midship hatch and the sonar shack\nlies aft.|\"\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-SONAR-ROOM": {
   "name": "RT-RM-SONAR-ROOM",
   "file": "montana.zil",
   "line": 825,
   "endLine": 852,
   "source": "<ROUTINE RT-RM-SONAR-ROOM (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK>\n\t\t\t<TELL\n\"\tSlowly, you swim through the doorway and come to the sonar room. The\nsonarman is slewed sideways, still strapped into his chair. He stares at the\nbroken screen through blank eyes.|\n\tDoors here lead fore and aft.\" CR\n\t\t\t>\n\t\t)\n\t\t(<MC-CONTEXT? ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL \" the sonar room. Doors here lead fore and aft.|\">\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-COMM-ROOM": {
   "name": "RT-RM-COMM-ROOM",
   "file": "montana.zil",
   "line": 870,
   "endLine": 899,
   "source": "<ROUTINE RT-RM-COMM-ROOM (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK>\n\t\t\t<TELL\n\"\tYou swim into the communications room, which was stacked floor to\nceiling with high-tech equipment. The door in the aft bulkhead has buckled\nand looks as if it is jammed shut.\" CR\n\t\t\t>\n\t\t)\n\t\t(<MC-CONTEXT? ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the communications room. The sonar shack is to the fore and aft lies a\ncorridor.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-THRU-BUCKLED-DOOR": {
   "name": "RT-THRU-BUCKLED-DOOR",
   "file": "montana.zil",
   "line": 901,
   "endLine": 918,
   "source": "<ROUTINE RT-THRU-BUCKLED-DOOR (\"OPT\" (QUIET <>))\n\t<COND\n\t\t(<FSET? ,LG-BUCKLED-DOOR ,FL-OPEN>\n\t\t\t<RETURN ,RM-SUB-CORRIDOR>\n\t\t)\n\t\t(T\n\t\t\t<COND\n\t\t\t\t(<NOT .QUIET>\n\t\t\t\t\t<TELL\n\"\tYou push up against the door. It gives a little, and then refuses to\nbudge.|\"\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-LG-BUCKLED-DOOR": {
   "name": "RT-LG-BUCKLED-DOOR",
   "file": "montana.zil",
   "line": 933,
   "endLine": 951,
   "source": "<ROUTINE RT-LG-BUCKLED-DOOR (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL\n\"\tThe door in the aft bulkhead has buckled and looks as if it is jammed\nshut.\" CR\n\t\t\t>\n\t\t)\n\t\t(<VERB? OPEN PUSH>\n\t\t\t<TELL\n\"\tYou push up against the door. It gives a little, and then refuses to\nbudge.|\"\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-RM-SUB-CORRIDOR": {
   "name": "RT-RM-SUB-CORRIDOR",
   "file": "montana.zil",
   "line": 970,
   "endLine": 999,
   "source": "<ROUTINE RT-RM-SUB-CORRIDOR (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK>\n\t\t\t<TELL\n\"\tYou enter a corridor that leads into the heart of the submarine. Below\nyou is an open door leading into a stateroom. Only a few feet beyond the\ndoor, the floor starts to pinch in to meet the ceiling where the corridor has\nbeen crushed like the end of a paper towel roll.\" CR\n\t\t\t>\n\t\t)\n\t\t(<MC-CONTEXT? ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" a corridor. The comm room is foreward and below you is the captain's\nquarters.|\">\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-CAPTAINS-ROOM": {
   "name": "RT-RM-CAPTAINS-ROOM",
   "file": "montana.zil",
   "line": 1016,
   "endLine": 1045,
   "source": "<ROUTINE RT-RM-CAPTAINS-ROOM (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK>\n\t\t\t<TELL\n\"\tYou swim down into the room below you, which turns out to be the\ncaptain's stateroom. The room is curiously untouched by the disaster. Except\nfor the fact that everything has rotated ninety degrees, it is as neat and\ntidy as if it were awaiting an admiral's inspection. The bunk is made.\nInterestingly enough, the framed photograph on the wall doesn't seem to have\nshifted position, even though the sub is lying on its side.\" CR\n\t\t\t>\n\t\t)\n\t\t(<MC-CONTEXT? ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL \" the captain's stateroom. Above you is a corridor.|\">\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-PHOTOGRAPH": {
   "name": "RT-TH-PHOTOGRAPH",
   "file": "montana.zil",
   "line": 1060,
   "endLine": 1090,
   "source": "<ROUTINE RT-TH-PHOTOGRAPH (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<FSET ,TH-PHOTOGRAPH ,FL-SEEN>\n\t\t\t<TELL\n\"\tThe picture is of the same man whose body you saw in the control room.\nHe is standing with his arm around a woman, and they are both smiling into\nthe camera. At the bottom is scrawled, \\\"Twenty years before the mast. June\n30, 1989. Love, Helen.\\\"\" CR\n\t\t\t>\n\t\t)\n\t\t(<VERB? LOOK-BEHIND>\n\t\t\t<COND\n\t\t\t\t(<FSET? ,TH-SAFE ,FL-SEEN>\n\t\t\t\t\t<TELL \"\tBehind the picture is the wall safe.\" CR>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<FSET ,TH-SAFE ,FL-SEEN>\n\t\t\t\t;\t<FCLEAR ,TH-SAFE ,FL-INVISIBLE>\n\t\t\t\t\t<MOVE ,TH-SAFE ,RM-CAPTAINS-ROOM>\n\t\t\t\t\t<TELL\n\"\tYou push aside the picture and discover a wall safe.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-SAFE": {
   "name": "RT-TH-SAFE",
   "file": "montana.zil",
   "line": 1107,
   "endLine": 1199,
   "source": "<ROUTINE RT-TH-SAFE (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t;\t(<AND <NOT <FSET? ,TH-SAFE ,FL-SEEN>>\n\t\t\t\t<NOT <EVERYWHERE-VERB? <COND (,NOW-PRSI 2) (T 1)>>>\n\t\t\t>\n\t\t\t<NP-CANT-SEE>\n\t\t)\n\t\t(<NOUN-USED? ,TH-SAFE ,W?DIAL>\n\t\t\t<COND\n\t\t\t\t(<VERB? EXAMINE>\n\t\t\t\t\t<TELL \"\tThe dial is turned to \" N ,GL-SAFE-NUM \".\" CR>\n\t\t\t\t)\n\t\t\t\t(<VERB? TURN>\n\t\t\t\t\t<SETG GL-SAFE-NUM <- <RANDOM 101> 1>>\n\t\t\t\t\t<TELL \"\tYou spin the dial.\" CR>\n\t\t\t\t)\n\t\t\t\t(<VERB? TURN-TO>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<MC-PRSI? ,INTNUM>\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(<OR\t<L? ,P-NUMBER 0>\n\t\t\t\t\t\t\t\t\t\t<G? ,P-NUMBER 100>\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<TELL\n\"\tThe dial can only be turned to numbers between 0 and 100, inclusive.\" CR\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t\t<TELL \"\tYou turn the dial to \" N ,P-NUMBER \".\">\n\t\t\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t\t\t(<FSET? ,TH-SAFE ,FL-OPEN>)\n\t\t\t\t\t\t\t\t\t\t(<EQUAL? ,P-NUMBER 30>\n\t\t\t\t\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t\t\t\t\t(<EQUAL? ,GL-SAFE-NUM 6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<FSET ,TH-SAFE ,FL-ON>\n\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t\t\t\t\t\t<FCLEAR ,TH-SAFE ,FL-ON>\n\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t(<EQUAL? ,P-NUMBER 69>\n\t\t\t\t\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t\t\t\t\t(<AND <EQUAL? ,GL-SAFE-NUM 30>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<FSET? ,TH-SAFE ,FL-ON>\n\t\t\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<FCLEAR ,TH-SAFE ,FL-ON>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<FCLEAR ,TH-SAFE ,FL-LOCKED>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<FSET ,TH-SAFE ,FL-OPEN>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<TELL \" The safe door opens.\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(<RT-SEE-ANYTHING-IN? ,TH-SAFE>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TELL \" Inside you see\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<RT-PRINT-CONTENTS ,TH-SAFE>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TELL \".\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t\t\t\t\t\t<FCLEAR ,TH-SAFE ,FL-ON>\n\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<SETG GL-SAFE-NUM ,P-NUMBER>\n\t\t\t\t\t\t\t\t\t<CRLF>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? CLOSE>\n\t\t\t<COND\n\t\t\t\t(<FSET? ,TH-SAFE ,FL-OPEN>\n\t\t\t\t\t<FCLEAR ,TH-SAFE ,FL-OPEN>\n\t\t\t\t\t<FSET ,TH-SAFE ,FL-LOCKED>\n\t\t\t\t\t<SETG GL-SAFE-NUM <- <RANDOM 101> 1>>\n\t\t\t\t\t<TELL \"\tYou close the safe and spin the dial.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL\n\"\tThe safe is a combination safe with numbers on the dial from 0 to 100.\" CR\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-PLASTIC-CARD": {
   "name": "RT-TH-PLASTIC-CARD",
   "file": "montana.zil",
   "line": 1210,
   "endLine": 1221,
   "source": "<ROUTINE RT-TH-PLASTIC-CARD (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE READ>\n\t\t\t<TELL\n\"\tThe card has row after row of meaningless numbers written on it.\" CR\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-PLASTIQUE": {
   "name": "RT-TH-PLASTIQUE",
   "file": "montana.zil",
   "line": 1237,
   "endLine": 1283,
   "source": "<ROUTINE RT-TH-PLASTIQUE (\"OPT\" (CONTEXT <>) \"AUX\" OBJ V)\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(,NOW-PRSI\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL\n\"\tThe plastique is a flat package with some sticky, two-sided tape on the\nbottom.\"\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(<IN? ,TH-DETONATOR ,TH-PLASTIQUE>\n\t\t\t\t\t<TELL \" There is a detonator attached to it.\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<CRLF>\n\t\t)\n\t\t(<VERB? ATTACH PUT>\n\t\t\t<COND\n\t\t\t\t(<MC-PRSI? ,LG-BUCKLED-DOOR>\n\t\t\t\t\t<MOVE ,TH-PLASTIQUE ,HERE>\n\t\t\t\t\t<PUTP ,TH-PLASTIQUE ,P?OWNER ,LG-BUCKLED-DOOR>\n\t\t\t\t\t<TELL \"\tYou stick the plastique to the door.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? TAKE>\n\t\t\t<COND\n\t\t\t\t(<SET OBJ <GETP ,TH-PLASTIQUE ,P?OWNER>>\n\t\t\t\t\t<SET V <ITAKE>>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<EQUAL? .V ,M-FATAL>\n\t\t\t\t\t\t\t<RFATAL>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(.V\n\t\t\t\t\t\t\t<PUTP ,TH-PLASTIQUE ,P?OWNER <>>\n\t\t\t\t\t\t\t<TELL \"\tYou remove the plastique from\" the .OBJ \".\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-DETONATOR": {
   "name": "RT-TH-DETONATOR",
   "file": "montana.zil",
   "line": 1299,
   "endLine": 1396,
   "source": "<ROUTINE RT-TH-DETONATOR (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<COND\n\t\t\t\t(<NOUN-USED? ,TH-DETONATOR ,W?DIAL ,W?TIMER>\n\t\t\t\t\t<TELL \"\tThe dial is set to \" N ,GL-DETONATOR-TIME \".\" CR>\n\t\t\t\t)\n\t\t\t\t(<NOUN-USED? ,TH-DETONATOR ,W?SWITCH>\n\t\t\t\t\t<TELL \"\tThe switch is \">\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,TH-DETONATOR ,FL-ON>\n\t\t\t\t\t\t\t<TELL \"on\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL \"off\">\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<TELL \".\" CR>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL\n\"\tThe detonator is deceptively innocent looking. It has a timer that is\ncalibrated in units of 5 from 10 to 60. Below the face of the timer is a\nsingle switch.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? ATTACH PUT-IN PUT>\n\t\t\t<COND\n\t\t\t\t(<AND <MC-PRSO? ,TH-DETONATOR>\n\t\t\t\t\t\t<MC-PRSI? ,TH-PLASTIQUE>\n\t\t\t\t\t>\n\t\t\t\t\t<MOVE ,TH-DETONATOR ,TH-PLASTIQUE>\n\t\t\t\t\t<TELL\n\"\tYou firmly imbed the prongs of the detonator into the plastique.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? TURN-TO>\n\t\t\t<COND\n\t\t\t\t(<OR\t<NOT <MC-PRSI? ,INTNUM>>\n\t\t\t\t\t\t<L? ,P-NUMBER 10>\n\t\t\t\t\t\t<G? ,P-NUMBER 60>\n\t\t\t\t\t\t<NOT <ZERO? <MOD ,P-NUMBER 5>>>\n\t\t\t\t\t>\n\t\t\t\t\t<TELL\n\"\tThe timer can only be set in increments of 5 between the numbers of 10\nand 60, inclusive.|\"\n\t\t\t\t\t>\n\t\t\t\t\t<RFATAL>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<SETG GL-DETONATOR-TIME ,P-NUMBER>\n\t\t\t\t\t<TELL \"\tYou set the dial to \" N ,P-NUMBER \".\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? LISTEN>\n\t\t\t<COND\n\t\t\t\t(<FSET? ,TH-DETONATOR ,FL-ON>\n\t\t\t\t\t<TELL \"\tYou hear a faint whirring.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? TURN-ON>\n\t\t\t<COND\n\t\t\t\t(<FSET? ,TH-DETONATOR ,FL-ON>\n\t\t\t\t\t<RT-ALREADY-MSG \"armed\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<FSET ,TH-DETONATOR ,FL-ON>\n\t\t\t\t\t<RT-QUEUE ,RT-I-DETONATOR <+ ,GL-MOVES <* ,GL-DETONATOR-TIME 2>>>\n\t\t\t\t\t<TELL \"\tYou turn the switch and hear a faint whirr.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? TURN-OFF>\n\t\t\t<COND\n\t\t\t\t(<NOT <FSET? ,TH-DETONATOR ,FL-ON>>\n\t\t\t\t\t<RT-ALREADY-MSG \"disarmed\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<FCLEAR ,TH-DETONATOR ,FL-ON>\n\t\t\t\t\t<RT-DEQUEUE ,RT-I-DETONATOR>\n\t\t\t\t\t<SETG GL-DETONATOR-TIME 10>\n\t\t\t\t\t<TELL\n\"\tYou turn off the detonator. The timer resets itself to ten minutes.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-I-DETONATOR": {
   "name": "RT-I-DETONATOR",
   "file": "montana.zil",
   "line": 1398,
   "endLine": 1503,
   "source": "<ROUTINE RT-I-DETONATOR (\"OPT\" (CONTEXT <>) \"AUX\" L M)\n\t<SET L <LOC ,TH-PLASTIQUE>>\n\t<SET M <META-LOC ,TH-PLASTIQUE>>\n\t<COND\n\t\t(<IN? ,TH-DETONATOR ,TH-PLASTIQUE>\n\t\t\t<REMOVE ,TH-PLASTIQUE>\n\t\t\t<COND\n\t\t\t\t(<AND <FSET? .M ,FL-WATER>\n\t\t\t\t\t\t<FSET? .M ,FL-INDOORS>\n\t\t\t\t\t\t<FSET? ,HERE ,FL-WATER>\n\t\t\t\t\t\t<FSET? ,HERE ,FL-INDOORS>\n\t\t\t\t\t>\n\t\t\t\t\t; \"Both plastique and player in Montana.\"\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<MC-HERE? .M>\n\t\t\t\t\t\t\t<TELL\n\"\tSuddenly you see a bright flash. An enormous shock wave slams into you\nand instantly kills you.|\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL\n\"\tSuddenly you hear a muffled explosion. Seconds later an enormous shock\nwave slams you up against a bulkhead and kills you.|\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<RT-END-OF-GAME>\n\t\t\t\t)\n\t\t\t\t(<AND <EQUAL? .L ,RM-COMM-ROOM>\n\t\t\t\t\t\t<EQUAL? <GETP ,TH-PLASTIQUE ,P?OWNER> ,LG-BUCKLED-DOOR>\n\t\t\t\t\t>\n\t\t\t\t\t<FSET ,LG-BUCKLED-DOOR ,FL-OPEN>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<GLOBAL-IN? ,LG-MONTANA ,HERE>\t;\"Montana visible?\"\n\t\t\t\t\t\t\t<TELL\n\"\tSuddenly you hear a muffled explosion. The Montana seems to rock for a\nmoment, and then settle back into its former position on the ledge.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL\n\"\tFrom far away, you hear a muffled thud. The plastique must have gone off\ninside the Montana.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<FSET? .M ,FL-WATER>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? .M ,FL-INDOORS>\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(<GLOBAL-IN? ,LG-MONTANA ,HERE>\t;\"Montana visible?\"\n\t\t\t\t\t\t\t\t\t<TELL\n\"\tSuddenly you hear a muffled explosion. The Montana seems to rock for a\nmoment, and then it slides off the ledge and plummets into the chasm!\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t\t<TELL\n\"\tFrom far away, you hear a muffled thud. The plastique must have gone off\ninside the Montana. Unbeknownst to you, the blast jars loose the submarine,\nand it falls into the chasm.\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<TELL\n\" Seconds later, the sub slams against the wall of the chasm, ripping off\nthe timing device, and igniting the nuclear warhead. Everything nearby is\ninstantly vaporized, including you.|\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<RT-END-OF-GAME>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL\n\"\tThe plastique goes \\\"BOOM\\\" in the water.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(T\t\t;\"Plastique in Deepcore\"\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<NOT <FSET? ,HERE ,FL-WATER>>\n\t\t\t\t\t\t\t<TELL\n\"\tSuddenly, a huge explosion rips through Deepcore, killing you before you\neven have time to figure out what caused it.|\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL\n\"\tSuddenly, a huge explosion rips through Deepcore, causing you to lose the\nwill to live.|\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<RT-END-OF-GAME>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<ACCESSIBLE? ,TH-DETONATOR>\n\t\t\t<FCLEAR ,TH-DETONATOR ,FL-ON>\n\t\t\t<SETG ,GL-DETONATOR-TIME 10>\n\t\t\t<TELL \"\tThe detonator makes a faint 'click'.\" CR>\n\t\t)\n\t>\n>"
  },
  "RT-RM-UNDER-MOONPOOL": {
   "name": "RT-RM-UNDER-MOONPOOL",
   "file": "ocean.zil",
   "line": 32,
   "endLine": 51,
   "source": "<ROUTINE RT-RM-UNDER-MOONPOOL (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL TAB \"You \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"arrive\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL \" under the moonpool.|\">\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-OCEAN-NORTH": {
   "name": "RT-RM-OCEAN-NORTH",
   "file": "ocean.zil",
   "line": 68,
   "endLine": 87,
   "source": "<ROUTINE RT-RM-OCEAN-NORTH (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL TAB \"You \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are on\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"proceed along\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL \" the ocean floor. Deepcore is to the south.|\">\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-OCEAN-SOUTH": {
   "name": "RT-RM-OCEAN-SOUTH",
   "file": "ocean.zil",
   "line": 104,
   "endLine": 123,
   "source": "<ROUTINE RT-RM-OCEAN-SOUTH (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL TAB \"You \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are on\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"proceed along\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL \" the ocean floor. Deepcore is to the north.|\">\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-OCEAN-WEST": {
   "name": "RT-RM-OCEAN-WEST",
   "file": "ocean.zil",
   "line": 141,
   "endLine": 173,
   "source": "<ROUTINE RT-RM-OCEAN-WEST (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL TAB \"You \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are on\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"proceed along\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the ocean floor. Looking east, you see Deepcore, an island of light\nin the vast blackness.  The crane, now only a mass of twisted metal, hangs\ncrookedly off the starboard cylinders.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<MC-CONTEXT? ,M-BEG>\n\t\t\t<COND\n\t\t\t\t(<AND <VERB? WALK-TO>\n\t\t\t\t\t\t<MC-PRSO? ,LG-MONTANA>\n\t\t\t\t\t>\n\t\t\t\t\t<RT-DO-WALK ,P?WEST>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-SWIM-TO-FROM-TRENCH": {
   "name": "RT-SWIM-TO-FROM-TRENCH",
   "file": "ocean.zil",
   "line": 175,
   "endLine": 194,
   "source": "<ROUTINE RT-SWIM-TO-FROM-TRENCH (\"OPT\" (QUIET <>) \"AUX\" N)\n\t<COND\n\t\t(<NOT .QUIET>\n\t\t\t<TELL\nTAB \"You swim along the ocean floor, pausing every few moments to take your\nbearings and consult your compass.|\"\n\t\t\t>\n\t\t\t<SETG GL-MOVES <+ ,GL-MOVES 43>>\t; \"44 moves (22 min) minus one\"\n\t\t\t<CLOCKER>\n\t\t)\n\t>\n\t<COND\n\t\t(<MC-HERE? ,RM-OCEAN-WEST>\n\t\t\t<RETURN ,RM-TROUGH-LIP>\n\t\t)\n\t\t(T\n\t\t\t<RETURN ,RM-OCEAN-WEST>\n\t\t)\n\t>\n>"
  },
  "RT-RM-TROUGH-LIP": {
   "name": "RT-RM-TROUGH-LIP",
   "file": "ocean.zil",
   "line": 213,
   "endLine": 295,
   "source": "<ROUTINE RT-RM-TROUGH-LIP (\"OPTIONAL\" (CONTEXT <>) \"AUX\" N)\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL TAB>\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"You are at\">\n\t\t\t\t)\n\t\t\t\t(<EQUAL? ,OHERE ,RM-OCEAN-WEST>\n\t\t\t\t\t<TELL\n\"Eventually, you come to the jagged edge of a chasm that extends to the north\nand south. Looking down, you see the murky outline of the Montana, perched on\na ledge below you.|\"\n\t\t\t\t\t>\n\t\t\t\t\t<RFALSE>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"You come to\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the lip of the Cayman trough. Just below, you can see the Montana. Deepcore\nlies east of here.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<MC-CONTEXT? ,M-ENTERED>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? ,OHERE ,RM-OCEAN-WEST>\n\t\t\t\t\t<TELL\nTAB \"Automatically, you glance at your watch. The journey over from Deepcore\ntook about twenty two minutes and you have\"\n\t\t\t\t\t>\n\t\t\t\t\t<SET N </ <- ,GL-PLAYER-TEMP ,K-TEMP-LOW-4> 20>>\n\t\t\t\t\t<TELL wn .N>\n\t\t\t\t\t<TELL \" minute\">\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<NOT <EQUAL? .N 1>>\n\t\t\t\t\t\t\t<TELL \"s\">\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<TELL\n\" left before hypothermia sets in. A quick calculation reveals that you have \"\n\t\t\t\t\t>\n\t\t\t\t\t<SET N <- .N 22>>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L? .N 0>\n\t\t\t\t\t\t\t<TELL \"insufficient time to make it back to Deepcore.|\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(<ZERO? .N>\n\t\t\t\t\t\t\t\t\t<TELL \"no time\">\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t\t<TELL \"only\" wn .N \" minute\">\n\t\t\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t\t\t(<NOT <EQUAL? .N 1>>\n\t\t\t\t\t\t\t\t\t\t\t<TELL \"s\">\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<TELL \" to explore the Montana before you must start back.|\">\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<MC-CONTEXT? ,M-BEG>\n\t\t\t<COND\n\t\t\t\t(<AND <VERB? WALK-TO>\n\t\t\t\t\t\t<MC-PRSO? ,LG-DEEPCORE>\n\t\t\t\t\t>\n\t\t\t\t\t<RT-DO-WALK ,P?EAST>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-CATFISH-LOCKER": {
   "name": "RT-TH-CATFISH-LOCKER",
   "file": "return1.zil",
   "line": 25,
   "endLine": 27,
   "source": "<ROUTINE RT-TH-CATFISH-LOCKER (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-TH-STEEL-BOX": {
   "name": "RT-TH-STEEL-BOX",
   "file": "return1.zil",
   "line": 39,
   "endLine": 41,
   "source": "<ROUTINE RT-TH-STEEL-BOX (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-TH-CLUE-PAPER": {
   "name": "RT-TH-CLUE-PAPER",
   "file": "return1.zil",
   "line": 52,
   "endLine": 58,
   "source": "<ROUTINE RT-TH-CLUE-PAPER (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(<VERB? READ>\n\t\t\t<TELL \"On the paper are written the words, \\\"IN HER DRY BED.\\\"\" CR>\n\t\t)\n\t>\n>"
  },
  "RT-TH-STEEL-KEY": {
   "name": "RT-TH-STEEL-KEY",
   "file": "return1.zil",
   "line": 70,
   "endLine": 92,
   "source": "<ROUTINE RT-TH-STEEL-KEY (\"OPT\" (CONTEXT <>) \"AUX\" V)\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? TAKE>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? <GETP ,TH-STEEL-KEY ,P?OWNER> ,TH-DRYER>\n\t\t\t\t\t<SET V <ITAKE>>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<EQUAL? .V ,M-FATAL>\n\t\t\t\t\t\t\t<RFATAL>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(.V\n\t\t\t\t\t\t\t<PUTP ,TH-STEEL-KEY ,P?OWNER <>>\n\t\t\t\t\t\t\t<TELL \"\tYou peel the key off the back of the dryer.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-DRYER": {
   "name": "RT-TH-DRYER",
   "file": "return1.zil",
   "line": 103,
   "endLine": 116,
   "source": "<ROUTINE RT-TH-DRYER (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(<VERB? LOOK-BEHIND REACH-BEHIND>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? <GETP ,TH-STEEL-KEY ,P?OWNER> ,TH-DRYER>\n\t\t\t\t;\t<FCLEAR ,TH-STEEL-KEY ,FL-INVISIBLE>\n\t\t\t\t\t<MOVE ,TH-STEEL-KEY ,RM-LAUNDRY>\n\t\t\t\t\t<THIS-IS-IT ,TH-STEEL-KEY>\n\t\t\t\t\t<TELL \"\tTaped to the back of the dryer is a small steel key.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-PASSPORT": {
   "name": "RT-TH-PASSPORT",
   "file": "return1.zil",
   "line": 128,
   "endLine": 140,
   "source": "<ROUTINE RT-TH-PASSPORT (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(<AND <VERB? SHOW>\n\t\t\t\t<MC-PRSI? ,CH-COFFEY>\n\t\t\t\t<FSET? ,CH-CATFISH ,FL-ASLEEP>\n\t\t\t>\n\t\t\t<TELL\n\"\tCoffey glances at the passport and shrugs with contempt. \\\"Big deal.\nThese things are a dime a dozen. Any spy would have one.\\\"\" CR\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-DISCHARGE": {
   "name": "RT-TH-DISCHARGE",
   "file": "return1.zil",
   "line": 153,
   "endLine": 178,
   "source": "<ROUTINE RT-TH-DISCHARGE (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL\n\"\tIt's an honorable discharge from the United States Marine Corps.\" CR\n\t\t\t>\n\t\t)\n\t\t(<AND <VERB? SHOW>\n\t\t\t\t<MC-PRSI? ,CH-COFFEY>\n\t\t\t\t<FSET? ,CH-CATFISH ,FL-ASLEEP>\n\t\t\t>\n\t\t\t<FCLEAR ,CH-CATFISH ,FL-ASLEEP>\n\t\t\t<TELL\n\"\tCoffey peers at the document carefully. \\\"This thing's an original, and\nI know the forms are kept locked up tighter than Fort Knox. It's even\nsigned by Commander McMahon himself. I suppose it could have been\nforged, but I guess I was wrong all along.\\\"|\n\tHe turns Catfish over and slaps him on the face a couple of times to\nbring him around. When Catfish has regained a semblence of consciousness,\nCoffey says, \\\"I'm sorry, fella. I guess I got carried away.\\\"|\n\tCatfish drags himself to his feet and says groggily, \\\"Don't mention it.\nMaybe I can do the same for you some day.\\\"\" CR\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-GUN": {
   "name": "RT-TH-GUN",
   "file": "return2.zil",
   "line": 26,
   "endLine": 28,
   "source": "<ROUTINE RT-TH-GUN (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-TH-FBS-SUIT": {
   "name": "RT-TH-FBS-SUIT",
   "file": "return2.zil",
   "line": 40,
   "endLine": 42,
   "source": "<ROUTINE RT-TH-FBS-SUIT (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-TH-DIVE-LOCKER": {
   "name": "RT-TH-DIVE-LOCKER",
   "file": "return2.zil",
   "line": 54,
   "endLine": 63,
   "source": "<ROUTINE RT-TH-DIVE-LOCKER (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? TAKE MOVE PUSH PULL LIFT>\n\t\t\t<TELL \"\tThe dive locker is securely anchored to the floor.\" CR>\n\t\t)\n\t>\n>"
  },
  "RT-TH-ELECTRONIC-LOCK": {
   "name": "RT-TH-ELECTRONIC-LOCK",
   "file": "return2.zil",
   "line": 74,
   "endLine": 76,
   "source": "<ROUTINE RT-TH-ELECTRONIC-LOCK (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-TH-DEVICE": {
   "name": "RT-TH-DEVICE",
   "file": "return2.zil",
   "line": 88,
   "endLine": 90,
   "source": "<ROUTINE RT-TH-DEVICE (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "V-$NITROGEN": {
   "name": "V-$NITROGEN",
   "file": "return2.zil",
   "line": 94,
   "endLine": 133,
   "source": "<ROUTINE V-$NITROGEN ()\n\t<COND\n\t\t(<MC-HERE? ,RM-GAS-MIX-ROOM>\n\t\t\t<COND\n\t\t\t\t(<FSET? ,LG-CHAMBER-DOOR ,FL-OPEN>\n\t\t\t\t\t<TELL \"[The compression chamber door must be closed.]|\">\n\t\t\t\t\t<RFATAL>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<ZERO? ,GL-WIRE-SEQUENCE>\n\t\t\t\t\t\t\t<SETG GL-WIRE-SEQUENCE <RANDOM 4>>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<TELL\n\"\tCoffey begins to babble incoherently. You can hear him say, \\\"\"\n\t\t\t\t\t>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<EQUAL? ,GL-WIRE-SEQUENCE 1>\n\t\t\t\t\t\t\t<TELL \"Oxford rows great big wide yachts.\\\"\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<EQUAL? ,GL-WIRE-SEQUENCE 2>\n\t\t\t\t\t\t\t<TELL \"Yankees rarely win over Green Bay.\\\"\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<EQUAL? ,GL-WIRE-SEQUENCE 3>\n\t\t\t\t\t\t\t<TELL \"Get rid of your wet bananas.\\\"\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<EQUAL? ,GL-WIRE-SEQUENCE 4>\n\t\t\t\t\t\t\t<TELL \"Go west, young boy, or rot.\\\"\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(T\n\t\t\t<TELL \"[You must be in the gas mix room to use $NITROGEN.]|\">\n\t\t\t<RFATAL>\n\t\t)\n\t>\n>"
  },
  "RT-RM-TRI-MIX-STORAGE": {
   "name": "RT-RM-TRI-MIX-STORAGE",
   "file": "stopper.zil",
   "line": 36,
   "endLine": 77,
   "source": "<ROUTINE RT-RM-TRI-MIX-STORAGE (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the tri-mix storage room. There are three huge steel tanks here, each\nwelded to a sturdy base that sits about an inch off the floor.  The tanks\nlook like giant beer kegs and this similarity is heightened by the k-valves\non the front that look like beer taps. Exits here lead fore and aft.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<MC-CONTEXT? ,M-ENTERED>\n\t\t\t<COND\n\t\t\t\t(,GL-NITROGEN-LEAK?\n\t\t\t\t\t<TELL ,K-HISS-MSG>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<MC-CONTEXT? ,M-BEG>\n\t\t\t<COND\n\t\t\t\t(<AND <VERB? LISTEN>\n\t\t\t\t\t\t<MC-PRSO? ,ROOMS>\n\t\t\t\t\t\t,GL-NITROGEN-LEAK?\n\t\t\t\t\t>\n\t\t\t\t\t<TELL ,K-HISS-MSG>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-NITROGEN-TANK": {
   "name": "RT-TH-NITROGEN-TANK",
   "file": "stopper.zil",
   "line": 104,
   "endLine": 163,
   "source": "<ROUTINE RT-TH-NITROGEN-TANK (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? LISTEN>\n\t\t\t<COND\n\t\t\t\t(,GL-NITROGEN-LEAK?\n\t\t\t\t\t<TELL ,K-HISS-MSG>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"You don't hear anything unusual.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<COND\n\t\t\t\t(<NOUN-USED? ,TH-NITROGEN-TANK ,W?BASE>\n\t\t\t\t\t<TELL \"The base is raised up off the floor by about an inch.\" CR>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL ,K-GAS-TANK-MSG>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(,GL-NITROGEN-LEAK?\n\t\t\t\t\t\t\t<TELL \" The hissing sound seems to be coming from here.\">\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<CRLF>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? LOOK-UNDER>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? <GETP ,TH-NIT-STOPPER ,P?OWNER> ,TH-NITROGEN-TANK>\n\t\t\t\t\t<FSET ,TH-NIT-STOPPER ,FL-SEEN>\n\t\t\t\t\t<FCLEAR ,TH-NIT-STOPPER ,FL-INVISIBLE>\n\t\t\t\t\t<TELL\n\"\tYou lie down on the floor and peer under the base of the tank. Back out of\nreach you see the steel gleam of the stopper. It must have rolled there after\nworking itself loose from the k-valve.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? REACH-UNDER>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? <GETP ,TH-NIT-STOPPER ,P?OWNER> ,TH-NITROGEN-TANK>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<MC-PRSI? ,TH-MAGNET>\n\t\t\t\t\t\t\t<RT-GET-STOPPER>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<MC-PRSI? <> ,ROOMS ,TH-HANDS>\n\t\t\t\t\t\t\t<TELL \"\tYou can't quite reach the stopper.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-NIT-VALVE": {
   "name": "RT-TH-NIT-VALVE",
   "file": "stopper.zil",
   "line": 178,
   "endLine": 257,
   "source": "<ROUTINE RT-TH-NIT-VALVE (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(,NOW-PRSI\n\t\t\t<COND\n\t\t\t\t(<VERB? PUT-IN ATTACH>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<MC-PRSO? ,TH-NIT-STOPPER>\n\t\t\t\t\t\t\t<MOVE ,TH-NIT-STOPPER ,TH-NIT-VALVE>\n\t\t\t\t\t\t\t<TELL\n\"\tYou screw the stopper into the k-valve. The valve is still hissing.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? LISTEN>\n\t\t\t<COND\n\t\t\t\t(<NOT <IN? ,TH-NIT-STOPPER ,TH-NIT-VALVE>>\n\t\t\t\t\t<TELL ,K-HISS-MSG>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"\tYou don't hear anything unusual.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL\n\"\tThe k-valve is a small device that controls the flow of the nitrogen.\"\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(<NOT <IN? ,TH-NIT-STOPPER ,TH-NIT-VALVE>>\n\t\t\t\t\t<TELL \" The valve's stopper seems to be missing\">\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(,GL-NITROGEN-LEAK?\n\t\t\t\t\t\t\t<TELL\n\", and the hissing sound is definitely coming from here\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL \".\" CR>\n\t\t)\n\t\t(<VERB? OPEN>\n\t\t\t<COND\n\t\t\t\t(<FSET? ,TH-NIT-VALVE ,FL-ON>\n\t\t\t\t\t<RT-ALREADY-MSG \"open\">\n\t\t\t\t)\n\t\t\t\t(<IN? ,TH-NIT-STOPPER ,TH-NIT-VALVE>\n\t\t\t\t\t<TELL\n\"\tYou decide not to open the valve, since that might cause problems.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"\tThe stopper is missing, so the valve can't be opened.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? CLOSE>\n\t\t\t<COND\n\t\t\t\t(<NOT <FSET? ,TH-NIT-VALVE ,FL-ON>>\n\t\t\t\t\t<RT-ALREADY-MSG \"closed\">\n\t\t\t\t)\n\t\t\t\t(<IN? ,TH-NIT-STOPPER ,TH-NIT-VALVE>\n\t\t\t\t\t<FCLEAR ,TH-NIT-VALVE ,FL-ON>\n\t\t\t\t\t<SETG GL-NITROGEN-LEAK? <>>\n\t\t\t\t\t<RT-DEQUEUE ,RT-I-NITROGEN-LEAK>\n\t\t\t\t\t<TELL \"\tYou close the k-valve. The hissing stops.\" CR>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"\tThe stopper is missing, so the valve can't be closed.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-NIT-STOPPER": {
   "name": "RT-TH-NIT-STOPPER",
   "file": "stopper.zil",
   "line": 273,
   "endLine": 302,
   "source": "<ROUTINE RT-TH-NIT-STOPPER (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t;\t(<AND <NOT <FSET? ,TH-NIT-STOPPER ,FL-SEEN>>\n\t\t\t\t<NOT <EVERYWHERE-VERB? <COND (,NOW-PRSI 2) (T 1)>>>\n\t\t\t>\n\t\t\t<NP-CANT-SEE>\n\t\t)\n\t\t(<VERB? TAKE>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? <GETP ,TH-NIT-STOPPER ,P?OWNER> ,TH-NITROGEN-TANK>\n\t\t\t\t\t<TELL \"\tYou can't quite reach the stopper.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? TAKE-WITH>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? <GETP ,TH-NIT-STOPPER ,P?OWNER> ,TH-NITROGEN-TANK>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<MC-PRSI? ,TH-MAGNET>\n\t\t\t\t\t\t\t<RT-GET-STOPPER>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-GET-STOPPER": {
   "name": "RT-GET-STOPPER",
   "file": "stopper.zil",
   "line": 304,
   "endLine": 311,
   "source": "<ROUTINE RT-GET-STOPPER ()\n\t<MOVE ,TH-NIT-STOPPER ,TH-MAGNET>\n\t<PUTP ,TH-NIT-STOPPER ,P?OWNER <>>\n\t<TELL\n\"\tYou slide the magnet under the base and hear a satisfying 'click.' When\nyou pull it out again, the stopper is stuck to the end.\" CR\n\t>\n>"
  },
  "RT-I-NITROGEN-LEAK": {
   "name": "RT-I-NITROGEN-LEAK",
   "file": "stopper.zil",
   "line": 315,
   "endLine": 336,
   "source": "<ROUTINE RT-I-NITROGEN-LEAK ()\n\t<COND\n\t\t(T\t;<NOT <IGRTR? GL-N-LOOP 82>>\n\t\t\t<SETG GL-NITROGEN-LEAK? T>\n\t\t\t<RT-QUEUE ,RT-I-NITROGEN-LEAK <+ ,GL-MOVES 1>>\n\t\t\t<COND\n\t\t\t\t(<L? ,GL-NITROGEN-QTY ,K-NIT-HIGH-1>\n\t\t\t\t\t<SETG GL-NITROGEN-QTY ,K-NIT-HIGH-1>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<SETG GL-NITROGEN-QTY <+ ,GL-NITROGEN-QTY 47>>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<RT-NITROGEN-MSG>\n\t\t)\n\t;\t(T\n\t\t\t<SETG GL-NITROGEN-QTY ,K-NIT-NOM>\n\t\t\t<SETG GL-NITROGEN-LEAK? <>>\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-NIT-BASE": {
   "name": "RT-TH-NIT-BASE",
   "file": "stopper.zil",
   "line": 346,
   "endLine": 348,
   "source": "<ROUTINE RT-TH-NIT-BASE (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-TH-OXYGEN-TANK": {
   "name": "RT-TH-OXYGEN-TANK",
   "file": "stopper.zil",
   "line": 364,
   "endLine": 373,
   "source": "<ROUTINE RT-TH-OXYGEN-TANK (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL ,K-GAS-TANK-MSG CR>\n\t\t)\n\t>\n>"
  },
  "RT-TH-OXY-VALVE": {
   "name": "RT-TH-OXY-VALVE",
   "file": "stopper.zil",
   "line": 385,
   "endLine": 387,
   "source": "<ROUTINE RT-TH-OXY-VALVE (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-TH-OXY-STOPPER": {
   "name": "RT-TH-OXY-STOPPER",
   "file": "stopper.zil",
   "line": 399,
   "endLine": 401,
   "source": "<ROUTINE RT-TH-OXY-STOPPER (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-TH-OXY-BASE": {
   "name": "RT-TH-OXY-BASE",
   "file": "stopper.zil",
   "line": 411,
   "endLine": 413,
   "source": "<ROUTINE RT-TH-OXY-BASE (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-TH-HELIUM-TANK": {
   "name": "RT-TH-HELIUM-TANK",
   "file": "stopper.zil",
   "line": 429,
   "endLine": 438,
   "source": "<ROUTINE RT-TH-HELIUM-TANK (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL ,K-GAS-TANK-MSG CR>\n\t\t)\n\t>\n>"
  },
  "RT-TH-HEL-VALVE": {
   "name": "RT-TH-HEL-VALVE",
   "file": "stopper.zil",
   "line": 450,
   "endLine": 452,
   "source": "<ROUTINE RT-TH-HEL-VALVE (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-TH-HEL-STOPPER": {
   "name": "RT-TH-HEL-STOPPER",
   "file": "stopper.zil",
   "line": 464,
   "endLine": 466,
   "source": "<ROUTINE RT-TH-HEL-STOPPER (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-TH-HEL-BASE": {
   "name": "RT-TH-HEL-BASE",
   "file": "stopper.zil",
   "line": 476,
   "endLine": 478,
   "source": "<ROUTINE RT-TH-HEL-BASE (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-GN-TANK": {
   "name": "RT-GN-TANK",
   "file": "stopper.zil",
   "line": 480,
   "endLine": 489,
   "source": "<ROUTINE RT-GN-TANK (TBL FINDER \"AUX\" PTR N)\n\t<SET PTR <REST-TO-SLOT .TBL FIND-RES-OBJ1>>\n\t<SET N <FIND-RES-COUNT .TBL>>\n\t<COND\n\t\t(<INTBL? ,TH-NITROGEN-TANK .PTR .N>\n\t\t\t<TELL \"[the nitrogen tank]|\">\n\t\t\t<RETURN ,TH-NITROGEN-TANK>\n\t\t)\n\t>\n>"
  },
  "RT-GN-VALVE": {
   "name": "RT-GN-VALVE",
   "file": "stopper.zil",
   "line": 491,
   "endLine": 500,
   "source": "<ROUTINE RT-GN-VALVE (TBL FINDER \"AUX\" PTR N)\n\t<SET PTR <REST-TO-SLOT .TBL FIND-RES-OBJ1>>\n\t<SET N <FIND-RES-COUNT .TBL>>\n\t<COND\n\t\t(<INTBL? ,TH-NIT-VALVE .PTR .N>\n\t\t\t<TELL \"[the nitrogen k-valve]|\">\n\t\t\t<RETURN ,TH-NIT-VALVE>\n\t\t)\n\t>\n>"
  },
  "RT-GN-STOPPER": {
   "name": "RT-GN-STOPPER",
   "file": "stopper.zil",
   "line": 502,
   "endLine": 511,
   "source": "<ROUTINE RT-GN-STOPPER (TBL FINDER \"AUX\" PTR N)\n\t<SET PTR <REST-TO-SLOT .TBL FIND-RES-OBJ1>>\n\t<SET N <FIND-RES-COUNT .TBL>>\n\t<COND\n\t\t(<INTBL? ,TH-NIT-STOPPER .PTR .N>\n\t\t\t<TELL \"[the nitrogen stopper]|\">\n\t\t\t<RETURN ,TH-NIT-STOPPER>\n\t\t)\n\t>\n>"
  },
  "RT-RM-TOOL-ROOM": {
   "name": "RT-RM-TOOL-ROOM",
   "file": "stopper.zil",
   "line": 529,
   "endLine": 552,
   "source": "<ROUTINE RT-RM-TOOL-ROOM (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the tool room, which lies between your office on the port side and the\ndrill room to starboard. Bins here contain the various specialized tools\nof your trade.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-BIN": {
   "name": "RT-TH-BIN",
   "file": "stopper.zil",
   "line": 567,
   "endLine": 569,
   "source": "<ROUTINE RT-TH-BIN (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-TH-MAGNET": {
   "name": "RT-TH-MAGNET",
   "file": "stopper.zil",
   "line": 584,
   "endLine": 586,
   "source": "<ROUTINE RT-TH-MAGNET (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-RM-SUB-BAY": {
   "name": "RT-RM-SUB-BAY",
   "file": "sub-bay.zil",
   "line": 31,
   "endLine": 143,
   "source": "<ROUTINE RT-RM-SUB-BAY (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\nthe ,RM-SUB-BAY \", which seems cavernous compared to the other cramped\ncompartments aboard Deepcore. It is dominated by the MoonPool, which looks\njust like a huge swimming pool, except that it is open to the sea below.|\n\tAlong one edge of the MoonPool is a large dive locker. A door in the port\nbulkhead leads to the shower room. Aft is the gas-mix room, and in the fore\nwall is the doorway that leads to the corridor.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<MC-CONTEXT? ,M-BEG>\n\t\t\t<COND\n\t\t\t\t(<FSET? ,TH-PLASTIC-CARD ,FL-SEEN>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,CH-COFFEY ,FL-BROKEN>\n\t\t\t\t\t\t\t<RFALSE>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<OR\t<GAME-VERB?>\n\t\t\t\t\t\t\t\t<VERB? GIVE-SWP>\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<RFALSE>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<OR\t<NOT <VERB? GIVE>>\n\t\t\t\t\t\t\t\t<NOT <MC-PRSO? ,TH-PLASTIC-CARD>>\n\t\t\t\t\t\t\t\t<NOT <MC-PRSI? ,CH-COFFEY>>\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(<ZERO? ,GL-COFFEY-SHOOT>\n\t\t\t\t\t\t\t\t\t<SETG GL-COFFEY-SHOOT <+ ,GL-COFFEY-SHOOT 1>>\n\t\t\t\t\t\t\t\t\t<TELL\n\"\tCoffey fires a bullet just past your head. \\\"Next one's for you, drill\nboy.\\\"\" CR\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t\t<TELL\n\"\tCoffey raises his aim until the gun is pointed right between your eyes.\n\\\"Bye, bye, Mr Chips.\\\" He starts to squeeze the trigger. The last thing you\nnotice before you die is how perfectly round the end of a gun's barrel is.|\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<RT-END-OF-GAME>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<MC-CONTEXT? ,M-ENTERED>\n\t\t\t<COND\n\t\t\t\t(<FSET? ,TH-PLASTIC-CARD ,FL-SEEN>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<NOT ,GL-RETURN2-DONE?>\n\t\t\t\t\t\t\t; \"Return #2 puzzle.\"\n\t\t\t\t\t\t\t<MOVE ,TH-DRY-SUIT ,HERE>\n\t\t\t\t\t\t\t<FCLEAR ,TH-DRY-SUIT ,FL-WORN>\n\t\t\t\t\t\t\t<MOVE ,CH-CATFISH ,RM-SUB-BAY>\n\t\t\t\t\t\t\t<MOVE ,CH-COFFEY ,RM-SUB-BAY>\n\t\t\t\t\t\t\t<SETG GL-RETURN2-DONE? T>\n\t\t\t\t\t\t\t<TELL\n\"\tYou surface in the MoonPool. Catfish grabs your hand and hoists you to\nfirm ground as easily as if you were a child. He helps you out of your dive\nsuit and into dry clothes.|\n\tSuddenly Coffey comes into the room and levels his gun at your chest.\n\\\"I'll take those codes,\\\" he announces.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<FSET? ,LG-BUCKLED-DOOR ,FL-OPEN>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<NOT ,GL-RETURN1-DONE?>\n\t\t\t\t\t\t\t; \"Return #1 puzzle.\"\n\t\t\t\t\t\t\t<MOVE ,TH-DRY-SUIT ,HERE>\n\t\t\t\t\t\t\t<FCLEAR ,TH-DRY-SUIT ,FL-WORN>\n\t\t\t\t\t\t\t<MOVE ,CH-LINDSEY ,RM-SUB-BAY>\n\t\t\t\t\t\t\t<MOVE ,CH-COFFEY ,RM-MESS-HALL>\n\t\t\t\t\t\t\t<MOVE ,CH-CATFISH ,RM-MESS-HALL>\n\t\t\t\t\t\t\t<FSET ,CH-CATFISH ,FL-ASLEEP>\n\t\t\t\t\t\t\t<SETG GL-RETURN1-DONE? T>\n\t\t\t\t\t\t\t<TELL\n\"\tYou surface in the MoonPool. Lindsey pulls you out of the water. She\nstrips you of the cumbersome dive suit, towels you off, and helps you into\ndry clothes.|\n\tThen she says, \\\"Bud we've got a problem. Coffey caught Catfish trying to\nbreak into the dive locker in the Sub-bay. The asshole knocked Catfish over\nthe head with the butt of his gun and then dragged him to the mess hall. Now\nhe's standing over him in the mess hall and claiming that Cat's a Russian\nspy. He says as soon at Catfish comes around, he's going to give him a\nsummary court martial, find him guilty, and shoot him on the spot!\\\"\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-MOON-POOL": {
   "name": "RT-TH-MOON-POOL",
   "file": "sub-bay.zil",
   "line": 154,
   "endLine": 170,
   "source": "<ROUTINE RT-TH-MOON-POOL (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? ENTER>\n\t\t\t<COND\n\t\t\t\t(<MC-HERE? ,RM-SUB-BAY>\n\t\t\t\t\t<RT-DO-WALK ,P?DOWN>\n\t\t\t\t)\n\t\t\t\t(<MC-HERE? ,RM-UNDER-MOONPOOL>\n\t\t\t\t\t<RT-DO-WALK ,P?UP>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-FIRE": {
   "name": "RT-TH-FIRE",
   "file": "sub-bay.zil",
   "line": 184,
   "endLine": 210,
   "source": "<ROUTINE RT-TH-FIRE (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXTINGUISH>\n\t\t\t<COND\n\t\t\t\t(<AND <IN? ,TH-WATER-HOSE ,WINNER>\n\t\t\t\t\t\t<FSET? ,TH-WATER-HOSE ,FL-ON>\n\t\t\t\t\t>\n\t\t\t\t\t<REMOVE ,TH-FIRE>\n\t\t\t\t\t<RT-DEQUEUE ,RT-I-FIRE-1>\n\t\t\t\t\t<RT-DEQUEUE ,RT-I-FIRE-2>\n\t\t\t\t\t<TELL\n\"\tThe water hisses into the wall of flame without appearing to have any\neffect. Then, slowly, the intensity of the fire seems to lessen. After a few\nmoments, the flames die back, and all that remains of the fire are charred\nbits of smouldering embers.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL ,K-HOW-INTEND-MSG CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-I-FIRE-1": {
   "name": "RT-I-FIRE-1",
   "file": "sub-bay.zil",
   "line": 212,
   "endLine": 221,
   "source": "<ROUTINE RT-I-FIRE-1 ()\n\t<RT-QUEUE ,RT-I-FIRE-2 <+ ,GL-MOVES 6>>\n\t<COND\n\t\t(<MC-HERE? ,RM-SUB-BAY>\n\t\t\t<TELL\n\"\tThe flames reach the wooden locker, and it starts to burn.\" CR\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-I-FIRE-2": {
   "name": "RT-I-FIRE-2",
   "file": "sub-bay.zil",
   "line": 223,
   "endLine": 230,
   "source": "<ROUTINE RT-I-FIRE-2 ()\n\t<TELL\n\"\tSuddenly the dive locker explodes with tremendous fury, ripping a gaping\nhole in the roof of the Sub-bay. Seconds later you are engulfed by a wall of\nwater and you drown.|\"\n\t>\n\t<RT-END-OF-GAME>\n>"
  },
  "RT-TH-WATER-HOSE": {
   "name": "RT-TH-WATER-HOSE",
   "file": "sub-bay.zil",
   "line": 241,
   "endLine": 250,
   "source": "<ROUTINE RT-TH-WATER-HOSE (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? TURN-ON>\n\t\t\t<RT-TH-NOZZLE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-NOZZLE": {
   "name": "RT-TH-NOZZLE",
   "file": "sub-bay.zil",
   "line": 260,
   "endLine": 277,
   "source": "<ROUTINE RT-TH-NOZZLE (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? TURN TURN-ON OPEN>\n\t\t\t<COND\n\t\t\t\t(,GL-WATER-PUMP-ON\n\t\t\t\t\t<FSET ,TH-WATER-HOSE ,FL-ON>\n\t\t\t\t\t<TELL \"\tA stream of water leaps from the nozzle.\" CR>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"\tNothing happens.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-OXYGEN-CYLINDER": {
   "name": "RT-TH-OXYGEN-CYLINDER",
   "file": "sub-bay.zil",
   "line": 288,
   "endLine": 290,
   "source": "<ROUTINE RT-TH-OXYGEN-CYLINDER (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-CH-COFFEY": {
   "name": "RT-CH-COFFEY",
   "file": "sub-bay.zil",
   "line": 312,
   "endLine": 454,
   "source": "<ROUTINE RT-CH-COFFEY (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(,NOW-PRSI\n\t\t\t<COND\n\t\t\t\t(<VERB? GIVE>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<AND <IN? ,CH-COFFEY ,RM-SUB-BAY>\n\t\t\t\t\t\t\t\t<FSET? ,TH-PLASTIC-CARD ,FL-SEEN>\n\t\t\t\t\t\t\t\t<MC-PRSO? ,TH-PLASTIC-CARD>\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<MOVE ,TH-PLASTIC-CARD ,CH-COFFEY>\n\t\t\t\t\t\t\t<REMOVE ,TH-GUN>\n\t\t\t\t\t\t\t<FSET ,CH-COFFEY ,FL-BROKEN>\n\t\t\t\t\t\t\t<FSET ,TH-COMPRESSOR ,FL-BROKEN>\n\t\t\t\t\t\t\t<MOVE ,CH-COFFEY ,RM-COMPRESSION-CHAMBER>\n\t\t\t\t\t\t\t<SETG OHERE ,HERE>\n\t\t\t\t\t\t\t<SETG HERE ,RM-GAS-MIX-ROOM>\n\t\t\t\t\t\t\t<MOVE ,CH-PLAYER ,RM-GAS-MIX-ROOM>\n\t\t\t\t\t\t\t<TELL\n\"\tCoffey bends over the wiring codes, glancing up occasionally to make sure\nyou don't try to attack him.|\n\tSuddenly you notice a strange phenomenon in the MoonPool behind him. Some\nwater is slowly forming into a shining column and rising above the surrounding\nsurface. After a few moments, a sort of three-fingered hand forms at the end\nof the column. As you stare at in fascination, it slowly, silently, creeps up\nbehind Coffey, who remains oblivious to its presence.||\n \n\t[GRAPHIC]||\n \n\tSuddenly the pseudopod reaches out and snatches the gun from Coffey. He\nwhips around in time to see the column disappear below the surface of the\nwater, carrying his gun with it.|\n\tSomething inside Coffey seems to snap. He looks at you wildly and shouts,\n\\\"I know you're behind this, Brigman. I don't know what you want from that\nsub, but I'm gonna make sure you never see it again.\\\" He turns and runs from\nthe room.|\n\tYou follow Coffey. When he reaches the compressor room, Coffey brandishes\na tool over the compressor. As he sees you enter, he thrusts the tool deep\ninto the workings of the machine. It screams to a halt with an ear-piercing\nshriek. Coffey yells over the noise, \\\"Up yours, Brigman!\\\" and dashes out of\nthe cylinder.|\n\tHe then runs into the compression chamber. Through the open door to the\ncompression chamber, you can see Coffey tugging at the hatch that leads up to\nCab Three. He is unable to open it because Lindsey has locked it from the\nother side.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? ASK-ABOUT>\n\t\t\t<COND\n\t\t\t\t(<MC-PRSI? ,CH-SEALS ;,CH-RUSSIANS>\n\t\t\t\t\t<TELL \"\t\\\"Goddam bitch killed some of my best men.\\\"\" CR>\n\t\t\t\t)\n\t\t\t\t(<MC-PRSI? ,LG-MONTANA>\n\t\t\t\t\t<TELL\n\"\t\\\"I took a quick look at her before I had to come back. They closed the\nmid-ships hatch, but it's clear that some of the interior bulkheads are\nbuckled. We're probably going to need some explosives to move around in there.\nThere's a gash in her side up near the bow, but the opening isn't big enough\nfor a man to fit through.\\\"\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<MC-PRSI? ,TH-SAFE>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<NOT <FSET? ,TH-SAFE ,FL-SEEN>>\n\t\t\t\t\t\t\t<TELL\n\"\tIt'll be in his cabin, just forward of the attack center.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\t;<NOT <FSET? ,TH-SAFE ,FL-OPENED>>\n\t\t\t\t\t\t\t<TELL\n\"\tI don't know how to open it. Each captain sets his own combination.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t;\t(T\n\t\t\t\t\t\t\t; \"Bob\"\n\t\t\t\t\t\t\t<TELL\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<MC-PRSI? ,TH-PLASTIC-CARD ;,TH-WIRING-CODES>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<NOT <FSET? ,CH-COFFEY ,FL-BROKEN>>\t;\"Not crazy?\"\n\t\t\t\t\t\t\t<TELL\n\"\t\\\"Different missiles have different wiring diagrams. When you want to\ndisarm one, you need the wiring codes to tell you the order to cut the\nwires.\\\"\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<FSET? ,CH-COFFEY ,FL-ASLEEP>\t;\"Under nitrogen narcosis\"\n\t\t\t\t\t\t\t<TELL\n\"\tOne of mnemonic series:|\nOxford rows great big wide yachts.|\nYankees rarely win over Green Bay.|\nGet rid of your wet bananas.|\nGo west, young boy, or rot.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL \"\t\\\"I ain't tellin you nothing, pinko.\\\"\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<MC-PRSI? ,TH-FLATBED>\n\t\t\t\t\t<TELL\n\"\t\\\"The goddam bitch just rode it into the trench. I'll get even with her\nyet.\\\"\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<MC-PRSI? ,TH-MISSILE-TIMER>\n\t\t\t\t\t<TELL\n\"\t\\\"They set it for 12 hours so they'd have enough time to get away and\nsave their skins. It may be booby-trapped, so we can't risk trying to disable\nit. Our only hope is to disarm the MIRV.\\\"\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<MC-PRSI? ,TH-MISSILE-ACCESS-KEY>\n\t\t\t\t\t<TELL\n\"\t\\\"There's always a duplicate access key on board somewhere. Usually the\nexecutive officer has it, but it's not as important as the missile firing\nkey, so sometimes he just hangs it on the wall in the maintenance room so the\ntechnicians can get to it if they need it.\\\"\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<FSET? ,CH-COFFEY ,FL-BROKEN>\t;\"Crazy?\"\n\t\t\t\t\t<TELL\n\"\t\\\"Coffey, James G.; Lieutenant U.S. Navy; Serial Number 5894256\\\"\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"\t\\\"I don't know about that.\\\"\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-CH-ONE-NIGHT": {
   "name": "RT-CH-ONE-NIGHT",
   "file": "sub-bay.zil",
   "line": 465,
   "endLine": 484,
   "source": "<ROUTINE RT-CH-ONE-NIGHT (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(,NOW-PRSI\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? ASK-ABOUT>\n\t\t\t<COND\n\t\t\t\t(<MC-PRSI? ,TH-UFO>\n\t\t\t\t\t<TELL\n\"\t\\\"I only saw it for a moment. It was big and shiny. But until it started\npulling us into the trench it somehow seemed, well, sort of friendly.\\\"\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-DRY-SUIT": {
   "name": "RT-TH-DRY-SUIT",
   "file": "sub-bay.zil",
   "line": 531,
   "endLine": 563,
   "source": "<ROUTINE RT-TH-DRY-SUIT (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL\n\"\tIt is a custom-made, one-piece dry suit that was designed especially for\nyou. It zips up the front and includes flippers, a weight belt, and a helmet.\nThe helmet has two threaded sockets on the side, and the faceplate is\"\nopen ,TH-FACEPLATE \".\" CR\n\t\t\t>\n\t\t)\n\t\t(<VERB? WEAR>\n\t\t\t<COND\n\t\t\t\t(<MC-WINNER? ,CH-PLAYER>\n\t\t\t\t\t<RT-MOVE-ALL ,CH-PLAYER ,HERE>\t ;\"RT-MOVE-ALL clears FL-WORN.\"\n\t\t\t\t\t<MOVE ,TH-DRY-SUIT ,CH-PLAYER>\n\t\t\t\t\t<FSET ,TH-DRY-SUIT ,FL-WORN>\n\t\t\t\t\t<TELL\n\"\tYou drop everything you were carrying, strip down to your bathing suit,\nand step into the dry suit. You pull up the zipper and adjust the weight\nbelt.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t; \"Bob\"\n\t\t\t\t\t<TELL \"\tThe dry suit won't fit\" the ,WINNER \".\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-FACEPLATE": {
   "name": "RT-TH-FACEPLATE",
   "file": "sub-bay.zil",
   "line": 578,
   "endLine": 587,
   "source": "<ROUTINE RT-TH-FACEPLATE (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL \"\tThe faceplate is\" open ,TH-FACEPLATE \".\" CR>\n\t\t)\n\t>\n>"
  },
  "RT-TH-HELMET": {
   "name": "RT-TH-HELMET",
   "file": "sub-bay.zil",
   "line": 602,
   "endLine": 614,
   "source": "<ROUTINE RT-TH-HELMET (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL\n\"\tThe helmet has two threaded sockets on the side, and the faceplate is\"\nopen ,TH-FACEPLATE \".\" CR\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-TH-HOOK-1": {
   "name": "RT-TH-HOOK-1",
   "file": "sub-bay.zil",
   "line": 624,
   "endLine": 626,
   "source": "<ROUTINE RT-TH-HOOK-1 (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-TH-LIFT-BAG": {
   "name": "RT-TH-LIFT-BAG",
   "file": "sub-bay.zil",
   "line": 648,
   "endLine": 753,
   "source": "<ROUTINE RT-TH-LIFT-BAG (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<AND <VERB? TAKE>\n\t\t\t\t,GL-LIFT-OBJ\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(<FSET? ,GL-LIFT-OBJ ,FL-TAKEABLE>\n\t\t\t\t\t; \"Pick up lift bag and ,GL-LIFT-OBJ\"\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"\tThe lift bag is tied to\" the ,GL-LIFT-OBJ \".\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<AND <VERB? TIE-TO ATTACH>\n\t\t\t\t<MC-PRSO? ,TH-LIFT-BAG>\n\t\t\t>\n\t\t\t<SETG GL-LIFT-OBJ ,PRSI>\n\t\t\t<SET L <LOC ,PRSI>>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? .L ,LOCAL-GLOBALS ,GLOBAL-OBJECTS>\n\t\t\t\t\t<SET L ,HERE>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<MOVE ,TH-LIFT-BAG .L>\n\t\t\t<TELL \"\tYou tie the lift bag to\" the ,GL-LIFT-OBJ \".\" CR>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<COND\n\t\t\t\t(,GL-LIFT-OBJ\n\t\t\t\t\t<TELL \"\tThe lift bag is tied to\" the ,GL-LIFT-OBJ \".\" CR>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"\tThe lift bag is a\">\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,TH-LIFT-BAG ,FL-LOCKED>\n\t\t\t\t\t\t\t<TELL \"n inflated\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL \" collapsed\">\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<TELL \" watertight sack \">\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,TH-LIFT-BAG ,FL-BROKEN>\n\t\t\t\t\t\t\t<TELL \"that has been sliced open.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL\n\"with a small nylon loop at the top and two loose ropes hanging down from the\nbottom. Attached to the bag is a CO2 cannister that has a red button on it.\" CR\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<VERB? INFLATE>\n\t\t\t<TELL ,K-HOW-INTEND-MSG CR>\n\t\t)\n\t\t(<AND <VERB? CUT>\n\t\t\t\t<MC-PRSI? ,TH-KNIFE>\n\t\t\t>\n\t\t\t<FSET ,TH-LIFT-BAG ,FL-BROKEN>\n\t\t\t<TELL \"\tYou slice the fabric with your knife,\">\n\t\t\t<COND\n\t\t\t\t(<FSET? ,TH-LIFT-BAG ,FL-LOCKED>\n\t\t\t\t\t<TELL \" releasing the gas\">\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,HERE ,FL-WATER>\n\t\t\t\t\t\t\t<TELL \" in a huge bubble and\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL \" and\">\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL \" rendering the bag completely useless.|\">\n\t\t\t<COND\n\t\t\t\t(<AND <FSET? ,TH-LIFT-BAG ,FL-LOCKED>\n\t\t\t\t\t\t<EQUAL? ,LG-MIDSHIP-HATCH ,GL-LIFT-OBJ>\n\t\t\t\t\t>\n\t\t\t\t\t<FCLEAR ,LG-MIDSHIP-HATCH ,FL-OPEN>\n\t\t\t\t\t<TELL \"\tThe hatch slams shut.\" CR>\n\t\t\t\t)\n\t\t\t\t(<IN? ,TH-LIFT-BAG ,CH-PLAYER>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<AND <FSET? ,HERE ,FL-WATER>\n\t\t\t\t\t\t\t\t<FSET? ,HERE ,FL-INDOORS>\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<TELL \"\tThe bag no longer contrains your movements.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t;\t(<IN? ,CH-PLAYER ,TH-MOON-POOL>\n\t\t\t\t\t\t\t<TELL \"\tYou sink below the surface of the water.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<RTRUE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-CO2-CANNISTER": {
   "name": "RT-TH-CO2-CANNISTER",
   "file": "sub-bay.zil",
   "line": 772,
   "endLine": 781,
   "source": "<ROUTINE RT-TH-CO2-CANNISTER (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE LOOK-ON>\n\t\t\t<TELL \"\tThe cannister has a red button on it.\" CR>\n\t\t)\n\t>\n>"
  },
  "RT-TH-RED-BUTTON": {
   "name": "RT-TH-RED-BUTTON",
   "file": "sub-bay.zil",
   "line": 798,
   "endLine": 892,
   "source": "<ROUTINE RT-TH-RED-BUTTON (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? EXAMINE>\n\t\t\t<TELL \"\tPretty normal-looking red button.\" CR>\n\t\t)\n\t\t(<VERB? PUSH>\n\t\t\t<COND\n\t\t\t\t(<FSET? ,TH-CO2-CANNISTER ,FL-BROKEN>\n\t\t\t\t\t<TELL \"\tNothing happens.\" CR>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<FSET ,TH-CO2-CANNISTER, FL-BROKEN>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,TH-LIFT-BAG ,FL-BROKEN>\n\t\t\t\t\t\t\t<TELL\n\"\tThe gas rushes into the lift bag and out the gash in the fabric\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(<FSET? ,HERE ,FL-WATER>\n\t\t\t\t\t\t\t\t\t<TELL\n\", rising quickly out of sight in a large bubble\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<TELL \".\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<FSET ,TH-LIFT-BAG ,FL-LOCKED>\n\t\t\t\t\t\t\t<TELL \"\tThe bag inflates like a hot air balloon\">\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(<IN? ,TH-LIFT-BAG ,CH-PLAYER>\n\t\t\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t\t\t(<FSET? ,HERE ,FL-WATER>\n\t\t\t\t\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t\t\t\t\t(<MC-HERE? ,RM-UNDER-MOONPOOL>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<TELL\n\", pulling you up to the surface of the MoonPool.\" CR\n\t\t\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t;\t<MOVE ,CH-PLAYER ,RM-MOONPOOL>\n; \"DUANE - Prevent the player from swimming down into the water until he\ndrops the lift bag or cuts it open. 'You sink below the surface of the water.\nOn the bulkhead nearby you see the hookah nozzles protrude from their housing.\"\n\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t\t(<FSET? ,HERE ,FL-INDOORS>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<TELL\n\", pulling you up until you hit the ceiling.\" CR\n\t\t\t\t\t\t\t\t\t\t\t\t\t>\n; \"DUANE - Prevent the player from doing anything until he drops the lift bag\nor cuts it with his knife. If he cuts the bag, give him the gas escaping msg\nand then 'The bag no longer contrains your movements.'\"\n\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t\t\t\t\t\t<TELL\n\". Before you know what's happening, the extra lift starts to pull you\nrapidly toward the surface. Your ears pop and you feel excruciating pain\nin your elbows and knees. Mercifully, you pass out before suffering the\ngruesome death of sudden decompression.|\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<RT-END-OF-GAME>\n\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t\t\t\t<TELL \".\" CR>\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t(<EQUAL? ,GL-LIFT-OBJ ,LG-MIDSHIP-HATCH>\n\t\t\t\t\t\t\t\t\t<FSET ,LG-MIDSHIP-HATCH ,FL-OPEN>\n\t\t\t\t\t\t\t\t\t<TELL \". The hatch slowly swings open.\" CR>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t(<FSET? ,HERE ,FL-WATER>\n\t\t\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t\t\t(<MC-HERE? ,RM-UNDER-MOONPOOL>\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t(<FSET? ,HERE ,FL-INDOORS>\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t\t<TELL \".\" CR>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-RM-COMPRESSION-CHAMBER": {
   "name": "RT-RM-COMPRESSION-CHAMBER",
   "file": "sub-bay.zil",
   "line": 916,
   "endLine": 954,
   "source": "<ROUTINE RT-RM-COMPRESSION-CHAMBER (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\nthe ,RM-COMPRESSION-CHAMBER \". This is a tiny cylinder constructed from HY-150\nSteel, designed to withstand pressures of up to 300 atmospheres, or 10,000\nfeet below sea-level. Along one wall is a bench that is built like a window\nseat. There is a hatch in the ceiling. A door in the fore bulkhead leads out\nto the gas-mix room.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<MC-CONTEXT? ,M-EXIT>\n\t\t\t<COND\n\t\t\t\t(<RT-IS-QUEUED? ,RT-I-UFO-MESSAGE>\n\t\t\t\t\t<RT-DEQUEUE ,RT-I-UFO-MESSAGE>\n\t\t\t\t\t<MOVE ,CH-COFFEY ,RM-SUB-BAY>\n\t\t\t\t\t<MOVE ,CH-HIPPY ,RM-SUB-BAY>\n\t\t\t\t\t<TELL\n\"\tYou start to leave, but One-Night plucks at your sleeve and holds you\nback. \" ,K-UFO-MSG\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-LG-CHAMBER-HATCH": {
   "name": "RT-LG-CHAMBER-HATCH",
   "file": "sub-bay.zil",
   "line": 966,
   "endLine": 1045,
   "source": "<ROUTINE RT-LG-CHAMBER-HATCH (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? OPEN>\n\t\t\t<COND\n\t\t\t\t(<FSET? ,LG-CHAMBER-HATCH ,FL-OPEN>\n\t\t\t\t\t<RFALSE>\n\t\t\t\t)\n\t\t\t\t(<NOT ,GL-CAB-DOCKED?>\n\t\t\t\t\t<TELL\n\"\tSince a cab is not docked, the hatch refuses to open.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<AND <IN? ,CH-COFFEY ,RM-CAB-THREE>\n\t\t\t\t\t\t<FSET? ,CH-COFFEY ,FL-ALIVE>\n\t\t\t\t\t>\n\t\t\t\t\t<FSET ,LG-CHAMBER-HATCH ,FL-OPEN>\n\t\t\t\t\t<RT-DEQUEUE ,RT-I-RETURN-2>\n\t\t\t\t\t<RT-DEQUEUE ,RT-I-RETURN-3>\n\t\t\t\t\t<RT-DEQUEUE ,RT-I-RETURN-4>\n\t\t\t\t\t<RT-QUEUE ,RT-I-UFO-MESSAGE <+ ,GL-MOVES 1>>\n\t\t\t\t\t<MOVE ,CH-COFFEY ,RM-COMPRESSION-CHAMBER>\n\t\t\t\t\t<MOVE ,CH-HIPPY ,RM-COMPRESSION-CHAMBER>\n\t\t\t\t\t<MOVE ,CH-ONE-NIGHT ,RM-COMPRESSION-CHAMBER>\n\t\t\t\t\t<TELL\n\"\tYou open the hatch and an exhausted Coffey drops into the chamber. He no\nlonger looks crisp and military. His uniform is ragged and there is a gash in\nhis right shoulder. He slumps onto the bench. Hippy is next through the hatch.\nHe hangs briefly by one arm and then lets go. Another pair of legs dangles\nfrom the ceiling, and then One-Night falls to the floor with a loud groan. Her\nclothes are soaked, and she is shivering from the cold.||\"\n\t\t\t\t\t>\n\t\t\t\t\t<MARGIN 50 50>\n\t\t\t\t\t<TELL\n\"[GRAPHIC #4: Shot in the compression chamber of the three of them - beat up\nand exhausted.]||\"\n\t\t\t\t\t>\n\t\t\t\t\t<MARGIN 0 0>\n\t\t\t\t\t<TELL\n\"\tYou wait a moment, expecting the other SEALS to come through the hatch,\nbut no one does. Coffey looks at you angrily. \\\"Dead,\\\" he says. They're all\ndead.\\\" He points accusingly at One-Night, \\\"And it's all \"\n\t\t\t\t\t>\n\t\t\t\t\t<HLIGHT ,K-H-BLD>\n\t\t\t\t\t<TELL \"her\">\n\t\t\t\t\t<HLIGHT ,K-H-NRM>\n\t\t\t\t\t<TELL\n\" fault.\\\" You look at One-Night, but she just shakes her head.|\n\tCoffey wipes his face with his sleeve. \\\"By the time we got over to the\nMontana, the other submersible had already cleared out. I ordered Flatbed to\ncheck out the stern of the ship while I reconnoitered the bow. But when I\nreturned to the rendezvous point, no one was there. Then I saw \"\n\t\t\t\t\t>\n\t\t\t\t\t<HLIGHT ,K-H-BLD>\n\t\t\t\t\t<TELL \"Miss\">\n\t\t\t\t\t<HLIGHT ,K-H-NRM>\n\t\t\t\t\t<TELL\n\" Standing free-swimming towards the Cab. We brought her in through the hatch,\nand she told us some bullshit story about being sucked into the trench in the\nwake of a glowing ship and then crashing Flatbed into a wall.\\\"|\n\t\\\"I don't know what really happened, but I do know that this bitch has\nkilled three of my best men and that she's going to pay for it.\\\"|\n\t\\\"But wait, it gets better. Whoever those bastards in the submersible\nwere, they've armed one of the MIRVs and attached a timer to it that's set to\ngo off in 12 hours.\\\"|\n\t\\\"They must have taken the access key from the sub captain's body and\nthen used it to open up the MIRV. I took a look at that timer. No way we can\ndisable it safely. Our only hope is to find the duplicate access key. Then we\ngotta break into the captain's safe, get the missile wiring codes, and cut the\nwires.\\\"|\n\tThe three of them struggle to their feet and start to leave, but\nOne-Night catches your eye and signals you to wait.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-I-LEAVE-1": {
   "name": "RT-I-LEAVE-1",
   "file": "sub-bay.zil",
   "line": 1047,
   "endLine": 1059,
   "source": "<ROUTINE RT-I-LEAVE-1 ()\n\t<RT-QUEUE ,RT-I-LEAVE-2 <+ ,GL-MOVES 1>>\n\t<MOVE ,CH-ONE-NIGHT ,RM-SUB-BAY>\n\t<MOVE ,CH-HIPPY ,RM-SUB-BAY>\n\t<MOVE ,CH-COFFEY ,RM-SUB-BAY>\n\t<COND\n\t\t(<MC-HERE? ,RM-CORRIDOR>\n\t\t\t<TELL\n\"\tOne-Night, Hippy, and the SEALs disappear aft into the sub-bay.\" CR\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-I-LEAVE-2": {
   "name": "RT-I-LEAVE-2",
   "file": "sub-bay.zil",
   "line": 1061,
   "endLine": 1078,
   "source": "<ROUTINE RT-I-LEAVE-2 ()\n\t<RT-QUEUE ,RT-I-LEAVE-3 <+ ,GL-MOVES 1>>\n\t<FCLEAR ,CH-ONE-NIGHT ,FL-NO-DESC>\n\t<MOVE ,CH-ONE-NIGHT ,RM-CAB-THREE>\n\t<MOVE ,CH-HIPPY ,RM-GAS-MIX-ROOM>\n\t<MOVE ,CH-COFFEY ,RM-GAS-MIX-ROOM>\n\t<COND\n\t\t(<MC-HERE? ,RM-SUB-BAY>\n\t\t\t<TELL\n\"\tOne-Night drops through Flatbed's hatch. Monk and Willhite gather up\ntheir dive gear and follow her, pulling the hatch shut behind them. The big\nsubmersible sinks into the MoonPool and then disappears from sight. Coffey\npicks up a case marked \\\"FSB -- MARK IV,\\\" puts it in the dive locker, and\npockets the key. Then he follows Hippy and Schoenick into the gas-mix room.\" CR\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-I-LEAVE-3": {
   "name": "RT-I-LEAVE-3",
   "file": "sub-bay.zil",
   "line": 1080,
   "endLine": 1091,
   "source": "<ROUTINE RT-I-LEAVE-3 ()\n\t<RT-QUEUE ,RT-I-LEAVE-4 <+ ,GL-MOVES 1>>\n\t<MOVE ,CH-HIPPY ,RM-COMPRESSION-CHAMBER>\n\t<MOVE ,CH-COFFEY ,RM-COMPRESSION-CHAMBER>\n\t<COND\n\t\t(<MC-HERE? ,RM-GAS-MIX-ROOM>\n\t\t\t<TELL\n\"\tHippy, Coffey, and Schoenick enter the compression chamber.\" CR\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-I-LEAVE-4": {
   "name": "RT-I-LEAVE-4",
   "file": "sub-bay.zil",
   "line": 1093,
   "endLine": 1122,
   "source": "<ROUTINE RT-I-LEAVE-4 ()\n\t<FCLEAR ,CH-HIPPY ,FL-NO-DESC>\n\t<FCLEAR ,CH-COFFEY ,FL-NO-DESC>\n\t<MOVE ,CH-HIPPY ,RM-CAB-THREE>\n\t<MOVE ,CH-COFFEY ,RM-CAB-THREE>\n\t<COND\n\t\t(<MC-HERE? ,RM-GAS-MIX-ROOM ,RM-COMPRESSION-CHAMBER>\n\t\t\t<TELL TAB>\n\t\t\t<COND\n\t\t\t\t(<MC-HERE? ,RM-GAS-MIX-ROOM>\n\t\t\t\t\t<TELL \"Through the \">\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,LG-CHAMBER-DOOR ,FL-OPEN>\n\t\t\t\t\t\t\t<TELL \"door\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL \"window\">\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<TELL \" you see \">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\"Hippy and the two SEALs climb up into Cab Three and pull the hatch shut\nbehind them. Moments later you hear a 'clank' as Cab Three pulls away from\nDeepcore's hull.\" CR\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-I-RETURN-1": {
   "name": "RT-I-RETURN-1",
   "file": "sub-bay.zil",
   "line": 1124,
   "endLine": 1133,
   "source": "<ROUTINE RT-I-RETURN-1 ()\n\t<RT-QUEUE ,RT-I-RETURN-2 <+ ,GL-MOVES 10>>\n\t<SETG GL-CAB-DOCKED? T>\n\t<FSET ,RM-CAB-THREE ,FL-BROKEN>\n\t<TELL\n\"\tThe intercom buzzes and you hear One-Night's voice: \\\"This is Cab Three\ndocking over the compression chamber, boss. The heater's busted and we've got\nwounded. Come open the hatch before we freeze to death.\\\"\" CR\n\t>\n>"
  },
  "RT-I-RETURN-2": {
   "name": "RT-I-RETURN-2",
   "file": "sub-bay.zil",
   "line": 1135,
   "endLine": 1141,
   "source": "<ROUTINE RT-I-RETURN-2 ()\n\t<RT-QUEUE ,RT-I-RETURN-3 <+ ,GL-MOVES 10>>\n\t<TELL\n\"\tThe intercom buzzes and you hear One-Night again. \\\"Better hurry, boss.\nI don't know if we're all gonna make it.\\\"\" CR\n\t>\n>"
  },
  "RT-I-RETURN-3": {
   "name": "RT-I-RETURN-3",
   "file": "sub-bay.zil",
   "line": 1143,
   "endLine": 1148,
   "source": "<ROUTINE RT-I-RETURN-3 ()\n\t<RT-QUEUE ,RT-I-RETURN-4 <+ ,GL-MOVES 5>>\n\t<TELL\n\"\tThe intercom buzzes for a moment, and then trails off into silence.\" CR\n\t>\n>"
  },
  "RT-I-RETURN-4": {
   "name": "RT-I-RETURN-4",
   "file": "sub-bay.zil",
   "line": 1150,
   "endLine": 1156,
   "source": "<ROUTINE RT-I-RETURN-4 ()\n\t; \"Kill everyone in the cab\"\n\t<FCLEAR ,CH-COFFEY ,FL-ALIVE>\n\t<FCLEAR ,CH-HIPPY ,FL-ALIVE>\n\t<FCLEAR ,CH-ONE-NIGHT ,FL-ALIVE>\n\t<RFALSE>\n>"
  },
  "RT-I-UFO-MESSAGE": {
   "name": "RT-I-UFO-MESSAGE",
   "file": "sub-bay.zil",
   "line": 1166,
   "endLine": 1173,
   "source": "<ROUTINE RT-I-UFO-MESSAGE ()\n\t<MOVE ,CH-COFFEY ,RM-SUB-BAY>\n\t<MOVE ,CH-HIPPY ,RM-SUB-BAY>\n\t<TELL\n\"\tWhen Coffey and Hippy have left, One-Night plucks your sleeve and says,\"\n,K-UFO-MSG\n\t>\n>"
  },
  "RT-RM-CAB-THREE": {
   "name": "RT-RM-CAB-THREE",
   "file": "sub-bay.zil",
   "line": 1192,
   "endLine": 1253,
   "source": "<ROUTINE RT-RM-CAB-THREE (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"climb up into\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" Cab Three. It is a small submersible which was designed to shuttle\npassengers between the surface and Deepcore.  There is a chair for the pilot\nup front, and four jump seats in the back. The only exit is through the hatch\nin the floor.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<MC-CONTEXT? ,M-ENTERED>\n\t\t\t<COND\n\t\t\t\t(<AND <IN? ,CH-COFFEY ,RM-CAB-THREE>\n\t\t\t\t\t\t<NOT <FSET? ,CH-COFFEY ,FL-ALIVE>>\n\t\t\t\t\t>\n\t\t\t\t\t<TELL\n\"\tThe lifeless bodies of Coffey, One-Night and Hippy gaze at you\naccusingly with the wide-eyed stare of the dead.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<MC-CONTEXT? ,M-BEG>\n\t\t\t<COND\n\t\t\t\t(<AND <NOT <FSET? ,RM-CAB-THREE ,FL-BROKEN>>\n\t\t\t\t\t\t<IN? ,CH-LINDSEY ,RM-CAB-THREE>\n\t\t\t\t\t\t<VERB? WALK-TO>\n\t\t\t\t\t\t<MC-PRSO? ,LG-MONTANA>\n\t\t\t\t\t>\n\t\t\t\t\t<SETG GL-CAB-DOCKED? <>>\n\t\t\t\t\t<TELL\n\"\\\"Right-o.\\\" Lindsey starts flicking levers and pushing buttons. You feel a\njerk as the cab separates itself from Deepcore, and then watch out the front\nviewport as Lindsey maneuvers the Cab along the ocean floor toward the\nsubmarine.|\"\n\t\t\t\t\t>\n\t\t\t\t\t<SETG GL-MOVES <+ ,GL-MOVES 19>>\n\t\t\t\t\t<CLOCKER>\n\t\t\t\t\t<MOVE ,RM-CAB-THREE ,RM-MISSILE-HATCH>\n\t\t\t\t\t<TELL\n\"\tAfter ten minutes or so, Cab Three passes over the lip of the chasm and\nsinks slowly towards the submarine. The submersible settles precariously onto\nthe curved wall of the Montana.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-OUT-CAB": {
   "name": "RT-OUT-CAB",
   "file": "sub-bay.zil",
   "line": 1255,
   "endLine": 1273,
   "source": "<ROUTINE RT-OUT-CAB (\"OPT\" (QUIET <>))\n\t<COND\n\t\t(,GL-CAB-DOCKED?\n\t\t\t<COND\n\t\t\t\t(<OR\t.QUIET\n\t\t\t\t\t\t<FSET? ,LG-CHAMBER-HATCH ,FL-OPEN>\n\t\t\t\t\t>\n\t\t\t\t\t<RETURN ,RM-COMPRESSION-CHAMBER>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"\tThe hatch isn't open.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(T\n\t\t\t<RETURN <LOC ,RM-CAB-THREE>>\n\t\t)\n\t>\n>"
  },
  "RT-I-CAB-FIXED": {
   "name": "RT-I-CAB-FIXED",
   "file": "sub-bay.zil",
   "line": 1275,
   "endLine": 1282,
   "source": "<ROUTINE RT-I-CAB-FIXED ()\n\t<FCLEAR ,RM-CAB-THREE ,FL-BROKEN>\n\t<MOVE ,CH-LINDSEY ,RM-CAB-THREE>\n\t<TELL\n\"The intercom buzzes. \\\"This is Lindsey. I'm pleased to report that Cab Three\nis ready for action.\\\"\" CR\n\t>\n>"
  },
  "RT-TH-CAB-HOOKAH": {
   "name": "RT-TH-CAB-HOOKAH",
   "file": "sub-bay.zil",
   "line": 1291,
   "endLine": 1318,
   "source": "<ROUTINE RT-TH-CAB-HOOKAH (\"OPT\" (CONTEXT <>))\n\t<COND\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<VERB? CUT>\n\t\t\t<COND\n\t\t\t\t(<AND <MC-PRSI? ,TH-KNIFE>\n\t\t\t\t\t\t,GL-FALLING-INTO-TRENCH?\n\t\t\t\t\t>\n\t\t\t\t\t<RT-DEQUEUE ,RT-I-INTO-TRENCH-1>\n\t\t\t\t\t<RT-DEQUEUE ,RT-I-INTO-TRENCH-2>\n\t\t\t\t\t<RT-QUEUE ,RT-I-OUT-OF-AIR-1 <+ ,GL-MOVES 1>>\n\t\t\t\t\t<REMOVE ,RM-CAB-THREE>\n\t\t\t\t\t<MOVE ,CH-LINDSEY ,RM-ALIEN-CHAMBER>\n\t\t\t\t\t<TELL\n\"\tYou take a deep breath, reach up, and sever the hookah. You begin to rise\nback up to the level of the Montana. Glancing down, you see the Cab\ndisappearing into the inky blackness of the trench. Lindsey hasn't been able\nto free herself. She looks up at you as she is being dragged down. She\nreaches her hand toward you and her eyes send you a silent plea for help.\nThen she disappears into the darkness.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-RM-GAS-MIX-ROOM": {
   "name": "RT-RM-GAS-MIX-ROOM",
   "file": "sub-bay.zil",
   "line": 1337,
   "endLine": 1361,
   "source": "<ROUTINE RT-RM-GAS-MIX-ROOM (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" a small antechamber between the sub-bay and the compression chamber, which\nare fore and aft respectively. On the wall is a small video screen with\na black button below it. The door to the compression chamber is\"\nopen ,LG-CHAMBER-DOOR \".|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-CORRIDOR": {
   "name": "RT-RM-CORRIDOR",
   "file": "sub-bay.zil",
   "line": 1432,
   "endLine": 1462,
   "source": "<ROUTINE RT-RM-CORRIDOR (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"step out into\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\nthe ,RM-CORRIDOR \" that connects Deepcore's port and starboard sides. Towards\nthe bow is a door that leads to the command module. Aft is the entrance to\nthe sub-bay. There is a small panel set into the floor below your feet.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<MC-CONTEXT? ,M-ENTERED>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? ,GL-PUPPY ,CH-CATFISH>\n\t\t\t\t\t<RT-CLEAR-PUPPY>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-PANEL": {
   "name": "RT-TH-PANEL",
   "file": "sub-bay.zil",
   "line": 1472,
   "endLine": 1474,
   "source": "<ROUTINE RT-TH-PANEL (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-RM-LADDER-A2": {
   "name": "RT-RM-LADDER-A2",
   "file": "sub-bay.zil",
   "line": 1500,
   "endLine": 1523,
   "source": "<ROUTINE RT-RM-LADDER-A2 (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the middle level of ladderwell A. A corridor leads to the starboard side\nof Deepcore. A hatch in the port bulkhead opens onto the electronics room.\nThe lounge is forward, and aft is the mess hall.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-LOUNGE": {
   "name": "RT-RM-LOUNGE",
   "file": "sub-bay.zil",
   "line": 1539,
   "endLine": 1571,
   "source": "<ROUTINE RT-RM-LOUNGE (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the lounge, which is where most crew members congregate during their time\noff. A couch with a curved back fits along the starboard cylinder wall. It\nfaces a small television that is hooked up to a VCR. The only exit is through\nthe aft hatchway.|\"\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(,GL-BATTERY-LEAK\n\t\t\t\t\t<TELL\n\"\tYou see a stream of water coming from the ceiling. It pours down the\nwall and disappears in the room below.|\"\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-INFIRMARY": {
   "name": "RT-RM-INFIRMARY",
   "file": "sub-bay.zil",
   "line": 1587,
   "endLine": 1606,
   "source": "<ROUTINE RT-RM-INFIRMARY (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL \" the infirmary. The only exit is the door in the port wall.|\">\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-MESS-HALL": {
   "name": "RT-RM-MESS-HALL",
   "file": "sub-bay.zil",
   "line": 1627,
   "endLine": 1663,
   "source": "<ROUTINE RT-RM-MESS-HALL (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL\n\"\tThis is Deepcore's mess hall. There is a circular table in the middle\nof the room and a few chairs have been stacked against the wall. The forward\nexit leads to ladderwell A. The aft exit opens onto the galley.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<MC-CONTEXT? ,M-ENTERED>\n\t\t\t<COND\n\t\t\t\t(<AND <IN? ,CH-COFFEY ,RM-MESS-HALL>\n\t\t\t\t\t\t<IN? ,CH-CATFISH ,RM-MESS-HALL>\n\t\t\t\t\t\t<FSET? ,CH-CATFISH ,FL-ASLEEP>\n\t\t\t\t\t\t<NOT ,GL-CATFISH-SPY-MSG?>\n\t\t\t\t\t>\n\t\t\t\t\t<SETG GL-CATFISH-SPY-MSG? T>\n\t\t\t\t\t<TELL\n\"\tCoffey looks up as you enter. \\\"Oh, there you are Brigman. I'll bet you\ndidn't know that your favorite boy here is a Russkie, didja?\\\" He gestures to\nCatfish with his gun, and you see that his hand is trembling. \\\"I caught him\nred-handed. And when he wakes up, he's gonna find out how it feels to be both\nRed \"\n\t\t\t\t\t>\n\t\t\t\t\t<HLIGHT ,K-H-BLD>\n\t\t\t\t\t<TELL \"and\">\n\t\t\t\t\t<HLIGHT ,K-H-NRM>\n\t\t\t\t\t<TELL \" dead.\\\"\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-GALLEY": {
   "name": "RT-RM-GALLEY",
   "file": "sub-bay.zil",
   "line": 1680,
   "endLine": 1694,
   "source": "<ROUTINE RT-RM-GALLEY (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL\n\"\tThis is a fully equipped galley that has everything including the kitchen\nsink. You see a microwave, refrigerator, sink, and even a garbage compactor.\nYou can go both fore and aft from here.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-PANTRY": {
   "name": "RT-RM-PANTRY",
   "file": "sub-bay.zil",
   "line": 1711,
   "endLine": 1733,
   "source": "<ROUTINE RT-RM-PANTRY (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the pantry. The food supplies are stored in the cupboards that line the\nwalls. There are exits both fore and aft.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-HOOK-2": {
   "name": "RT-TH-HOOK-2",
   "file": "sub-bay.zil",
   "line": 1743,
   "endLine": 1745,
   "source": "<ROUTINE RT-TH-HOOK-2 (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-TH-GAME-BAG": {
   "name": "RT-TH-GAME-BAG",
   "file": "sub-bay.zil",
   "line": 1761,
   "endLine": 1763,
   "source": "<ROUTINE RT-TH-GAME-BAG (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-RM-WALDORF": {
   "name": "RT-RM-WALDORF",
   "file": "sub-bay.zil",
   "line": 1780,
   "endLine": 1805,
   "source": "<ROUTINE RT-RM-WALDORF (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" The Waldorf, which is what the crew irreverently calls your living\nquarters because it is the only stateroom aboard Deepcore that has its own\nsink. Rank hath its privileges. The room is in its usual state of chaos.\nYour bunk is situated with the head near the forward hatch and the foot next\nto the hatch in the aft bulkhead.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-PERSONAL-STORAGE-1": {
   "name": "RT-RM-PERSONAL-STORAGE-1",
   "file": "sub-bay.zil",
   "line": 1824,
   "endLine": 1838,
   "source": "<ROUTINE RT-RM-PERSONAL-STORAGE-1 (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL\n\"\tThis is a storage room for personal effects. Your locker is on the wall\nnear the hatch leading forward to your stateroom. The locker belonging to\nHippy is next to the door in the aft bulkhead.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-ZOOTOWN": {
   "name": "RT-RM-ZOOTOWN",
   "file": "sub-bay.zil",
   "line": 1855,
   "endLine": 1878,
   "source": "<ROUTINE RT-RM-ZOOTOWN (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"step into\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" Hippy's living quarters, known to the crew as 'Zootown' because of the\nsuccession of unusual pets he has brought aboard Deepcore. Hatches here lead\nfore and aft.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-LADDER-C2": {
   "name": "RT-RM-LADDER-C2",
   "file": "sub-bay.zil",
   "line": 1898,
   "endLine": 1921,
   "source": "<ROUTINE RT-RM-LADDER-C2 (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the middle level of ladderwell C. A hatch in the forward bulkhead opens\ninto Hippy's living quarters. There is a yellow button here, with a sign\nunderneath it.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-S-BILGE-BUTT": {
   "name": "RT-TH-S-BILGE-BUTT",
   "file": "sub-bay.zil",
   "line": 1934,
   "endLine": 1936,
   "source": "<ROUTINE RT-TH-S-BILGE-BUTT (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-RM-LADDER-A1": {
   "name": "RT-RM-LADDER-A1",
   "file": "sub-bay.zil",
   "line": 1956,
   "endLine": 1979,
   "source": "<ROUTINE RT-RM-LADDER-A1 (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the lowest level of ladderwell A. A hatch in the port bulkhead opens onto\nthe laundry room. The Port Battery room is just forward of here, and aft is\nPort Life Support.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-LAUNDRY": {
   "name": "RT-RM-LAUNDRY",
   "file": "sub-bay.zil",
   "line": 1995,
   "endLine": 2017,
   "source": "<ROUTINE RT-RM-LAUNDRY (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the laundry room. The washer and dryer flank a shelf that contains laundry\nsupplies. The only exit is the door in the starboard wall.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-PT-LIFE-SUPPORT": {
   "name": "RT-RM-PT-LIFE-SUPPORT",
   "file": "sub-bay.zil",
   "line": 2036,
   "endLine": 2060,
   "source": "<ROUTINE RT-RM-PT-LIFE-SUPPORT (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the port life support room. All around you is a jungle of fittings, gauges,\nand circuit boards. They control the CO2 scrubbers, dehumidifiers, heaters\nand other devices that make life possible 2,000 feet below the surface. Exits\nhere lead fore and aft.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-COMPRESSOR-ROOM": {
   "name": "RT-RM-COMPRESSOR-ROOM",
   "file": "sub-bay.zil",
   "line": 2079,
   "endLine": 2119,
   "source": "<ROUTINE RT-RM-COMPRESSOR-ROOM (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the compressor room. You see a dark labyrinth of pipes emanating from\nthe huge compressor that supplies air to the hookahs. \"\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(<OR  <FSET? ,TH-COMPRESSOR ,FL-BROKEN>\n\t\t\t\t\t\t<NOT <FSET? ,TH-COMPRESSOR ,FL-ON>>\n\t\t\t\t\t>\n\t\t\t\t\t<TELL\n\"The eerie silence makes an unsettling contrast to the normal cacophany in\nthe cylinder.\"\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL\n\"It's hard to hear yourself think over the roar of the machinery.\"\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" There are hatchways leading out of both the forward and aft bulkheads.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-COMPRESSOR": {
   "name": "RT-TH-COMPRESSOR",
   "file": "sub-bay.zil",
   "line": 2133,
   "endLine": 2135,
   "source": "<ROUTINE RT-TH-COMPRESSOR (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-RM-LADDER-D1": {
   "name": "RT-RM-LADDER-D1",
   "file": "sub-bay.zil",
   "line": 2154,
   "endLine": 2176,
   "source": "<ROUTINE RT-RM-LADDER-D1 (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the lowest level of ladderwell D. A hatch in the forward bulkhead leads to\ntri-mix storage, and another leads aft to your office.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-TOOL-PUSHER-OFFICE": {
   "name": "RT-RM-TOOL-PUSHER-OFFICE",
   "file": "sub-bay.zil",
   "line": 2194,
   "endLine": 2217,
   "source": "<ROUTINE RT-RM-TOOL-PUSHER-OFFICE (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"step into\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" your office, a tiny cubicle with stacks of paperwork, tech manuals and\nwaterstained centerfolds. The hatch in the forward bulkhead leads to\nladderwell D, and the starboard hatch opens onto the tool room.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-DRILL-ROOM": {
   "name": "RT-RM-DRILL-ROOM",
   "file": "sub-bay.zil",
   "line": 2234,
   "endLine": 2259,
   "source": "<ROUTINE RT-RM-DRILL-ROOM (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the drill room, the working heart of Deepcore. In the center of the room\nis the massive turntable that spins the drill string when the rig is\noperating. Everything in the room is coated with the pungent, greasy chemical\ncompound called 'drilling mud.' The only exit is through the hatch in the port\nbulkhead.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-LADDER-B1": {
   "name": "RT-RM-LADDER-B1",
   "file": "sub-bay.zil",
   "line": 2280,
   "endLine": 2303,
   "source": "<ROUTINE RT-RM-LADDER-B1 (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the lowest level of ladderwell B. A hatch in the starboard bulkhead opens onto the\nstarboard head. The starboard battery room is just forward of here, and aft is\nstarboard life support.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-SB-BATTERY-ROOM": {
   "name": "RT-RM-SB-BATTERY-ROOM",
   "file": "sub-bay.zil",
   "line": 2320,
   "endLine": 2336,
   "source": "<ROUTINE RT-RM-SB-BATTERY-ROOM (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL\n\"\tThis is one of the rooms that contain the huge fuelcells that power\nDeepcore. The powercels are surrounded by a wire cage that is festooned with\nsigns that warn of the dangers of electricity. The fuelcells are humming\nominously - as usual - and an acrid, ozone smell fills the air. The only\nexit is through the hatch in the aft bulkhead.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-SB-HEAD": {
   "name": "RT-RM-SB-HEAD",
   "file": "sub-bay.zil",
   "line": 2353,
   "endLine": 2375,
   "source": "<ROUTINE RT-RM-SB-HEAD (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the starboard head. It is sparingly furnished with a shower, sink, and\nchemical toilet. The only exit is in the port bulkhead.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-SB-LIFE-SUPPORT": {
   "name": "RT-RM-SB-LIFE-SUPPORT",
   "file": "sub-bay.zil",
   "line": 2393,
   "endLine": 2417,
   "source": "<ROUTINE RT-RM-SB-LIFE-SUPPORT (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the starboard life support room. All around you is a jungle of fittings,\ngauges, and circuit boards. They control the CO2 scrubbers, dehumidifiers,\nheaters and other devices that make life possible 2,000 feet below the\nsurface. Exits here lead fore and aft.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-PUMP-ROOM": {
   "name": "RT-RM-PUMP-ROOM",
   "file": "sub-bay.zil",
   "line": 2435,
   "endLine": 2457,
   "source": "<ROUTINE RT-RM-PUMP-ROOM (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the pump room. The machinery here controls the fresh water supply all over\nDeepcore. You can exit either fore or aft.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-FRESH-WATER-STORAGE": {
   "name": "RT-RM-FRESH-WATER-STORAGE",
   "file": "sub-bay.zil",
   "line": 2475,
   "endLine": 2497,
   "source": "<ROUTINE RT-RM-FRESH-WATER-STORAGE (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" fresh water storage, where Deepcore's entire water supply is kept in one\nhuge tank. There are doors in both the forward and aft walls.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-LADDER-C1": {
   "name": "RT-RM-LADDER-C1",
   "file": "sub-bay.zil",
   "line": 2515,
   "endLine": 2537,
   "source": "<ROUTINE RT-RM-LADDER-C1 (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the lowest level of ladderwell C. The only exits are the ladder leading\nup and the hatch in the forward wall.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-LADDER-A3": {
   "name": "RT-RM-LADDER-A3",
   "file": "sub-bay.zil",
   "line": 2557,
   "endLine": 2580,
   "source": "<ROUTINE RT-RM-LADDER-A3 (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the uppermost level of ladderwell A. Forward from here is the port\nobservation deck. The female living quarters are aft. A hatch in the port\nbulkhead leads to the port head.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-PT-HEAD": {
   "name": "RT-RM-PT-HEAD",
   "file": "sub-bay.zil",
   "line": 2597,
   "endLine": 2619,
   "source": "<ROUTINE RT-RM-PT-HEAD (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the port head. It is sparingly furnished with a shower, sink, and\nchemical toilet. The only exit is in the starboard bulkhead.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-MOTEL-QUICK": {
   "name": "RT-RM-MOTEL-QUICK",
   "file": "sub-bay.zil",
   "line": 2637,
   "endLine": 2659,
   "source": "<ROUTINE RT-RM-MOTEL-QUICK (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the female living quarters, nicknamed \\\"Motel Quick\\\" by the crew. Exits\nhee lead both fore and aft.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-PERSONAL-STORAGE-2": {
   "name": "RT-RM-PERSONAL-STORAGE-2",
   "file": "sub-bay.zil",
   "line": 2677,
   "endLine": 2691,
   "source": "<ROUTINE RT-RM-PERSONAL-STORAGE-2 (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL\n\"\tThis is a storage room for personal effects. One-Night's locker is on the\nwall near the forward hatch leading to Motel Quick. The locker belonging to\nCatfish is next to the door in the aft bulkhead.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-SWAMP": {
   "name": "RT-RM-SWAMP",
   "file": "sub-bay.zil",
   "line": 2708,
   "endLine": 2731,
   "source": "<ROUTINE RT-RM-SWAMP (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the drill crew's living quarters, appropriately nicknamed \\\"The Swamp.\\\" The\nhatch to ladderwell D is in the aft bulkhead, and there is a door in the\nforward bulkhead as well.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-LADDER-D3": {
   "name": "RT-RM-LADDER-D3",
   "file": "sub-bay.zil",
   "line": 2749,
   "endLine": 2771,
   "source": "<ROUTINE RT-RM-LADDER-D3 (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the highest level of ladderwell D. The only exits are the ladder leading\ndown and the hatch in the forward bulkhead.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-LADDER-B3": {
   "name": "RT-RM-LADDER-B3",
   "file": "sub-bay.zil",
   "line": 2791,
   "endLine": 2814,
   "source": "<ROUTINE RT-RM-LADDER-B3 (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the uppermost level of ladderwell B. Hatchways fore, aft, and starboard\nlead to the starboard observation deck, the computer center, and the\ninfirmary, respectively.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-SB-OBS-DECK": {
   "name": "RT-RM-SB-OBS-DECK",
   "file": "sub-bay.zil",
   "line": 2831,
   "endLine": 2854,
   "source": "<ROUTINE RT-RM-SB-OBS-DECK (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the starboard observation deck, which has a huge domed plexiglass window\nthat lets you look out onto the ocean floor. The only exit is in the aft\nbulkhead.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-COMPUTER-CENTER": {
   "name": "RT-RM-COMPUTER-CENTER",
   "file": "sub-bay.zil",
   "line": 2872,
   "endLine": 2886,
   "source": "<ROUTINE RT-RM-COMPUTER-CENTER (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL\n\"\tThis is Deepcore's computer center. On the desk is a dumb terminal to\nthe mainframe aboard the Benthic Explorer on the surface. There is some text\non the screen. Exits here lead fore and aft.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-ELECTRONICS-SHOP": {
   "name": "RT-RM-ELECTRONICS-SHOP",
   "file": "sub-bay.zil",
   "line": 2903,
   "endLine": 2928,
   "source": "<ROUTINE RT-RM-ELECTRONICS-SHOP (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"step into\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the electronics shop, which has become Hippy's personal domain. His\nworkbench backs onto a storage unit that contains hundreds of clear plastic\ndrawers, which in turn contain thousands of connectors, pins, and other\nspare parts. The workbench also has one large central drawer above the\nkneehole. The only exit is in the starboard bulkhead.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-TH-ELEC-SHOP-DRAWER": {
   "name": "RT-TH-ELEC-SHOP-DRAWER",
   "file": "sub-bay.zil",
   "line": 2939,
   "endLine": 2941,
   "source": "<ROUTINE RT-TH-ELEC-SHOP-DRAWER (\"OPT\" (CONTEXT <>))\n\t<RFALSE>\n>"
  },
  "RT-RM-LAB": {
   "name": "RT-RM-LAB",
   "file": "sub-bay.zil",
   "line": 2958,
   "endLine": 2972,
   "source": "<ROUTINE RT-RM-LAB (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL\n\"\tThis is Deepcore's biomedical lab. The room is cleaner than most of the\nother rooms aboard the habitat, but it has a curious, fishy odor to it. Exits\nlead fore and aft.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-TAPE-LIBRARY": {
   "name": "RT-RM-TAPE-LIBRARY",
   "file": "sub-bay.zil",
   "line": 2990,
   "endLine": 3013,
   "source": "<ROUTINE RT-RM-TAPE-LIBRARY (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" Deepcore's tape library. The walls are covered with videotapes that range\nin subject matter from the serious to the scatological. You can exit either\nforward or aft.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-RM-LADDER-C3": {
   "name": "RT-RM-LADDER-C3",
   "file": "sub-bay.zil",
   "line": 3031,
   "endLine": 3053,
   "source": "<ROUTINE RT-RM-LADDER-C3 (\"OPTIONAL\" (CONTEXT <>))\n\t<COND\n\t\t(<MC-CONTEXT? ,M-F-LOOK ,M-V-LOOK ,M-LOOK>\n\t\t\t<TELL \"\tYou \">\n\t\t\t<COND\n\t\t\t\t(<MC-CONTEXT? ,M-LOOK>\n\t\t\t\t\t<TELL \"are in\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"enter\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL\n\" the highest level of ladderwell C. You see a hatch in the forward bulkhead\nand a ladder leading down.|\"\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(.CONTEXT\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "V-VERSION": {
   "name": "V-VERSION",
   "file": "util.zil",
   "line": 173,
   "endLine": 185,
   "source": "<ROUTINE V-VERSION ()\n\t<HLIGHT ,K-H-BLD>\n\t<TELL\n\"The Abyss|\nCopyright (c) 1989 Infocom, Inc. All rights reserved.|\"\n<GET ,K-MACHINE-NAME-TBL <LOWCORE INTID>> \" Interpreter version \"\nN <LOWCORE (ZVERSION 0)> \".\" N <LOWCORE INTVR> CR\n\"Release \" N <BAND <LOWCORE ZORKID> *3777*> \" / Serial Number \"\n\t>\n\t<LOWCORE-TABLE SERIAL 6 PRINTC>\n\t<CRLF>\n\t<HLIGHT ,K-H-NRM>\n>"
  },
  "V-COLOR": {
   "name": "V-COLOR",
   "file": "util.zil",
   "line": 209,
   "endLine": 296,
   "source": "<ROUTINE V-COLOR (\"AUX\" S)\n\t<COND\n\t\t(<NOT ,GL-COLOR-NOTE>\n\t\t\t<SETG GL-COLOR-NOTE T>\n\t\t\t<TELL\nTAB \"Aesthetically, we recommend not changing the standard setting\"\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? <LOWCORE INTID> ,MACINTOSH>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<MAC-II?>\t; \"Color?\"\n\t\t\t\t\t\t\t<TELL\n\", and if your Mac II displays only 16 colors, you probably won't get\nthe color you ask for\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL\n\", and you can have only black on white or white on black\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL \". Do you still want to go ahead?|\">\n\t\t\t<COND\n\t\t\t\t(<NOT <Y?>>\n\t\t\t\t\t<RTRUE>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n\t<CRLF>\n\t<REPEAT ()\n\t\t<RT-DO-COLOR>\n\t\t<TELL\nTAB \"You should now get \" <GET ,K-COLOR-TABLE ,GL-F-COLOR> \" text on a \"\n<GET ,K-COLOR-TABLE ,GL-B-COLOR> \" background. Is that what you want?|\"\n\t\t>\n\t\t<COND\n\t\t\t(<Y?>\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t>\n\t\t<COND\n\t\t\t(<AND <EQUAL? <LOWCORE INTID> ,MACINTOSH>\n\t\t\t\t\t<NOT <MAC-II?>>\t; \"Not color?\"\n\t\t\t\t>\n\t\t\t\t<COND\n\t\t\t\t\t(<EQUAL? ,GL-B-COLOR 2>\n\t\t\t\t\t\t<SETG GL-B-COLOR 9>\n\t\t\t\t\t\t<SETG GL-F-COLOR 2>\n\t\t\t\t\t)\n\t\t\t\t\t(T\n\t\t\t\t\t\t<SETG GL-B-COLOR 2>\n\t\t\t\t\t\t<SETG GL-F-COLOR 9>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t>\n\t\t<TELL\nTAB \"Do you want to pick again, or would you like to just go back to the\nstandard colors? (Type Y to pick again) >\"\n\t\t>\n\t\t<COND\n\t\t\t(<Y? <>>\n\t\t\t\t<CRLF>\n\t\t\t)\n\t\t\t(T\n\t\t\t\t<SETG GL-F-COLOR 1>\n\t\t\t\t<SETG GL-B-COLOR 1>\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t>\n\t>\n\t<SET S 0>\n\t<REPEAT ()\n\t\t<SCREEN .S>\n\t\t<COLOR ,GL-F-COLOR ,GL-B-COLOR>\n\t\t<COND\n\t\t\t(<IGRTR? S 7>\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t>\n\t>\n\t<V-$REFRESH>\n>"
  },
  "RT-DO-COLOR": {
   "name": "RT-DO-COLOR",
   "file": "util.zil",
   "line": 298,
   "endLine": 319,
   "source": "<ROUTINE RT-DO-COLOR ()\n\t<COND\n\t\t(<AND <EQUAL? <LOWCORE INTID> ,MACINTOSH>\n\t\t\t\t<NOT <MAC-II?>> ;\"b&w Mac\"\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? ,GL-B-COLOR 2>\n\t\t\t\t\t<SETG GL-B-COLOR 9>\n\t\t\t\t\t<SETG GL-F-COLOR 2>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<SETG GL-B-COLOR 2>\n\t\t\t\t\t<SETG GL-F-COLOR 9>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(T\n\t\t\t<SETG GL-F-COLOR <RT-PICK-COLOR ,GL-F-COLOR \"text\" T>>\n\t\t\t<SETG GL-B-COLOR <RT-PICK-COLOR ,GL-B-COLOR \"background\">>\n\t\t)\n\t>\n>"
  },
  "RT-PICK-COLOR": {
   "name": "RT-PICK-COLOR",
   "file": "util.zil",
   "line": 321,
   "endLine": 375,
   "source": "<ROUTINE RT-PICK-COLOR (WHICH STRING \"OPTIONAL\" (SETTING-FG <>) \"AUX\" CHAR)\n\t<TELL\n\"The current \" .STRING \" color is \" <GET ,K-COLOR-TABLE .WHICH> \".\" CR\n\t>\n\t<FONT 4>\n\t<TELL\n\"   1 --> WHITE   5 --> YELLOW\" CR\n\"   2 --> BLACK   6 --> BLUE\" CR\n\"   3 --> RED     7 --> MAGENTA\" CR\n\"   4 --> GREEN   8 --> CYAN\" CR\n\t>\n\t<FONT 1>\n\t<TELL\n\"Type a number to select the \" .STRING \" color you want. >\"\n\t>\n\t<REPEAT ()\n\t\t<COND\n\t\t;\t(,DEMO-VERSION?\n\t\t\t\t<SET CHAR <INPUT-DEMO 1>>\n\t\t\t)\n\t\t\t(T\n\t\t\t\t<SET CHAR <INPUT 1>>\n\t\t\t)\n\t\t>\n\t\t<SET CHAR <- .CHAR !\\0>> ; \"convert from ASCII\"\n\t\t<COND\n\t\t\t(<EQUAL? .CHAR 1> ; \"white is really 9, not 1\"\n\t\t\t\t<SET CHAR 9>\n\t\t\t)\n\t\t>\n\t\t<COND\n\t\t\t(<EQUAL? .CHAR 2 3 4 5 6 7 8 9>\n\t\t\t\t<COND\n\t\t\t\t\t(<AND <NOT .SETTING-FG>\n\t\t\t\t\t\t\t<EQUAL? .CHAR ,GL-F-COLOR>\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<TELL\nCR \"You can't make the background the same color as the text. Please pick\nanother color. >\"\n\t\t\t\t\t\t>\n\t\t\t\t\t)\n\t\t\t\t\t(T\n\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t)\n\t\t\t(T\n\t\t\t\t<TELL CR ,K-TYPE-NUMBER-MSG \"8. >\">\n\t\t\t)\n\t\t>\n\t>\n\t<CRLF>\n\t<CRLF>\n\t<RETURN .CHAR>\n>"
  },
  "MAC-II?": {
   "name": "MAC-II?",
   "file": "util.zil",
   "line": 394,
   "endLine": 401,
   "source": "<ROUTINE MAC-II? ()\n\t; \"Determine if color flag is set.\"\n\t<COND\n\t\t(<FLAG-ON? ,F-COLOR>\n\t\t\t<RTRUE>\n\t\t)\n\t>\n>"
  },
  "Y?": {
   "name": "Y?",
   "file": "util.zil",
   "line": 403,
   "endLine": 441,
   "source": "<ROUTINE Y? (\"OPT\" (P? T) \"AUX\" C (1ST? T))\n\t<REPEAT ()\n\t\t<COND\n\t\t\t(.P?\n\t\t\t\t<TELL \"Please press Y or N >\">\n\t\t\t)\n\t\t>\n\t\t<COND\n\t\t;\t(,DEMO-VERSION?\n\t\t\t\t<SET C <INPUT-DEMO 1>>\n\t\t\t)\n\t\t\t(T\n\t\t\t\t<SET C <INPUT 1>>\n\t\t\t)\n\t\t>\n\t\t<COND\n\t\t\t(<EQUAL? .C !\\Y !\\N !\\y !\\n>\n\t\t\t\t<PRINTC .C>\n\t\t\t\t<CRLF>\n\t\t\t\t<COND\n\t\t\t\t\t(<EQUAL? .C !\\Y !\\y>\n\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t)\n\t\t\t\t\t(T\n\t\t\t\t\t\t<RFALSE>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t)\n\t\t\t(T\n\t\t\t\t<SOUND ,S-BEEP>\n\t\t\t)\n\t\t>\n\t\t<COND\n\t\t\t(.P?\n\t\t\t\t<CRLF>\n\t\t\t)\n\t\t>\n\t>\n>"
  },
  "RT-CHECK-ADJ": {
   "name": "RT-CHECK-ADJ",
   "file": "util.zil",
   "line": 443,
   "endLine": 450,
   "source": "<ROUTINE RT-CHECK-ADJ (DOOR)\n\t<RFALSE>\n;\t<COND\n\t\t(<EQUAL? .DOOR ,LG-FRONT-DOOR>\n\t\t\t<RT-UPDATE-ADJ ,LG-FRONT-DOOR ,RM-FOYER ,RM-FRONT-PORCH>\n\t\t)\n\t>\n>"
  },
  "RT-UPDATE-ADJ": {
   "name": "RT-UPDATE-ADJ",
   "file": "util.zil",
   "line": 452,
   "endLine": 473,
   "source": "<ROUTINE RT-UPDATE-ADJ (DOOR RM1 RM2 \"AUX\" TMP1 TMP2)\n\t<SET TMP2 <GETP .RM1 ,P?ADJACENT>>\n\t<COND\n\t\t(.TMP2\n\t\t\t<COND\n\t\t\t\t(<SET TMP1 <INTBL? .RM2 <REST .TMP2 1> <GETB .TMP2 0> 1>>\n\t\t\t\t\t<PUTB .TMP1 1 <FSET? .DOOR ,FL-OPEN>>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n\t<SET TMP2 <GETP .RM2 ,P?ADJACENT>>\n\t<COND\n\t\t(.TMP2\n\t\t\t<COND\n\t\t\t\t(<SET TMP1 <INTBL? .RM1 <REST .TMP2 1> <GETB .TMP2 0> 1>>\n\t\t\t\t\t<PUTB .TMP1 1 <FSET? .DOOR ,FL-OPEN>>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-SCORE-MSG": {
   "name": "RT-SCORE-MSG",
   "file": "util.zil",
   "line": 475,
   "endLine": 510,
   "source": "<ROUTINE RT-SCORE-MSG (N \"OPT\" (NL? T))\n\t<COND\n\t\t(.N\n\t\t\t<SETG GL-SCORE <+ ,GL-SCORE .N>>\n\t\t\t<HLIGHT ,H-BOLD>\n\t\t\t<COND\n\t\t\t\t(.NL?\n\t\t\t\t\t<CRLF>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL \"[You have \">\n\t\t\t<COND\n\t\t\t\t(<G? .N 0>\n\t\t\t\t\t<TELL \"earned\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"lost\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL wn .N \" point\">\n\t\t\t<COND\n\t\t\t\t(<NOT <EQUAL? <ABS .N> 1>>\n\t\t\t\t\t<TELL \"s\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL \".]\">\n\t\t\t<COND\n\t\t\t\t(.NL?\n\t\t\t\t\t<CRLF>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<HLIGHT ,H-NORMAL>\n\t\t\t<RTRUE>\n\t\t)\n\t>\n>"
  },
  "RT-SCORE-OBJ": {
   "name": "RT-SCORE-OBJ",
   "file": "util.zil",
   "line": 512,
   "endLine": 520,
   "source": "<ROUTINE RT-SCORE-OBJ (OBJ \"OPT\" (NL? T) \"AUX\" SC)\n\t<COND\n\t\t(<SET SC <GETP .OBJ ,P?SCORE>>\n\t\t\t<RT-SCORE-MSG .SC .NL?>\n\t\t\t<PUTP .OBJ ,P?SCORE 0>\n\t\t\t<RTRUE>\n\t\t)\n\t>\n>"
  },
  "V-SCORE": {
   "name": "V-SCORE",
   "file": "util.zil",
   "line": 524,
   "endLine": 532,
   "source": "<ROUTINE V-SCORE ()\n\t<TELL \"You have\" wn ,GL-SCORE \" point\">\n\t<COND\n\t\t(<NOT <EQUAL? <ABS ,GL-SCORE> 1>>\n\t\t\t<TELL \"s\">\n\t\t)\n\t>\n\t<TELL \".\" CR>\n>"
  },
  "V-DIAGNOSE": {
   "name": "V-DIAGNOSE",
   "file": "util.zil",
   "line": 534,
   "endLine": 746,
   "source": "<ROUTINE V-DIAGNOSE (\"AUX\" (N 0) (1ST? T) TMP OXY CO2 NIT)\n\t; \"Add up the number of messages we need to give.\"\n\t<COND\n\t\t(<SET TMP\n\t\t\t\t<OR\n\t\t\t\t\t<L=? ,GL-PLAYER-TEMP ,K-TEMP-LOW-1>\n\t\t\t\t\t<G=? ,GL-PLAYER-TEMP ,K-TEMP-HIGH-1>\n\t\t\t\t>\n\t\t\t>\n\t\t\t<SET N <+ .N 1>>\n\t\t)\n\t>\n\t<COND\n\t\t(<SET OXY\n\t\t\t\t<OR\n\t\t\t\t\t<L=? ,GL-OXYGEN-QTY ,K-OXY-LOW-1>\n\t\t\t\t\t<G=? ,GL-OXYGEN-QTY ,K-OXY-HIGH-1>\n\t\t\t\t>\n\t\t\t>\n\t\t\t<SET N <+ .N 1>>\n\t\t)\n\t>\n\t<COND\n\t\t(<SET CO2 <G=? ,GL-CO2-QTY ,K-CO2-HIGH-1>>\n\t\t\t<SET N <+ .N 1>>\n\t\t)\n\t>\n\t<COND\n\t\t(<SET NIT\n\t\t\t\t<OR\n\t\t\t\t\t<L=? ,GL-NITROGEN-QTY ,K-NIT-LOW-1>\n\t\t\t\t\t<G=? ,GL-NITROGEN-QTY ,K-NIT-HIGH-1>\n\t\t\t\t>\n\t\t\t>\n\t\t\t<SET N <+ .N 1>>\n\t\t)\n\t>\n \n\t<TELL TAB>\n\t<COND\n\t\t(<ZERO? .N>\n\t\t\t<TELL \"You feel fine\">\n\t\t)\n\t\t(T\n\t\t\t<COND\n\t\t\t\t(.TMP\n\t\t\t\t\t<SET N <- .N 1>>\n\t\t\t\t\t<COND\n; \"Checking for first phrase not needed since, if we're printing this one,\n\tit must be first.\"\n\t\t\t\t\t;\t(<NOT .1ST?>\n\t\t\t\t\t\t\t<TELL \", \">\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(<ZERO? .N>\n\t\t\t\t\t\t\t\t\t<TELL \"and \">\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<SET M 32>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<SET 1ST? <>>\n\t\t\t\t\t\t;\t<SET M 0>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L=? ,GL-PLAYER-TEMP ,K-TEMP-LOW-3>\n\t\t\t\t\t\t;\t<TELL C <ORB !\\Y .M> \"ou're so cold you can hardly move\">\n\t\t\t\t\t\t\t<TELL \"You're so cold you can hardly move\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<L=? ,GL-PLAYER-TEMP ,K-TEMP-LOW-2>\n\t\t\t\t\t\t;\t<TELL C <ORB !\\T .M> \"he cold is creeping into your bones\">\n\t\t\t\t\t\t\t<TELL \"The cold is creeping into your bones\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<L=? ,GL-PLAYER-TEMP ,K-TEMP-LOW-1>\n\t\t\t\t\t\t;\t<TELL C <ORB !\\Y .M> \"ou are shivering\">\n\t\t\t\t\t\t\t<TELL \"You are shivering\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<G=? ,GL-PLAYER-TEMP ,K-TEMP-HIGH-3>\n\t\t\t\t\t\t;\t<TELL\nC <ORB !\\Y .M> \"ou're so hot you can hardly move and your breathing is\ndangerously fast\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<TELL\n\"You're so hot you can hardly move and your breathing is dangerously fast\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<G=? ,GL-PLAYER-TEMP ,K-TEMP-HIGH-2>\n\t\t\t\t\t\t\t<TELL \"Your face is red from the heat\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<G=? ,GL-PLAYER-TEMP ,K-TEMP-HIGH-1>\n\t\t\t\t\t\t;\t<TELL C <ORB !\\Y .M> \"ou are sweating\">\n\t\t\t\t\t\t\t<TELL \"You are sweating\">\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(.OXY\n\t\t\t\t\t<SET N <- .N 1>>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<NOT .1ST?>\n\t\t\t\t\t\t\t<TELL \", \">\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(<ZERO? .N>\n\t\t\t\t\t\t\t\t\t<TELL \"and \">\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<SET M 32>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<SET 1ST? <>>\n\t\t\t\t\t\t\t<SET M 0>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L=? ,GL-OXYGEN-QTY ,K-OXY-LOW-3>\n\t\t\t\t\t\t\t<TELL C <ORB !\\Y .M> \"our peripheral vision has disappeared\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<L=? ,GL-OXYGEN-QTY ,K-OXY-LOW-2>\n\t\t\t\t\t\t\t<TELL C <ORB !\\T .M> \"he colors around you seem faded\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<L=? ,GL-OXYGEN-QTY ,K-OXY-LOW-1>\n\t\t\t\t\t\t\t<TELL C <ORB !\\Y .M> \"ou have a headache\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<G=? ,GL-OXYGEN-QTY ,K-OXY-HIGH-3>\n\t\t\t\t\t\t\t<TELL\nC <ORB !\\Y .M> \"our stomach muscles are tight and you feel an urge to vomit\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<G=? ,GL-OXYGEN-QTY ,K-OXY-HIGH-2>\n\t\t\t\t\t\t\t<TELL C <ORB !\\Y .M> \"ou feel nauseous\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<G=? ,GL-OXYGEN-QTY ,K-OXY-HIGH-1>\n\t\t\t\t\t\t\t<TELL C <ORB !\\Y .M> \"ou have a twitch in your lower lip\">\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(.CO2\n\t\t\t\t\t<SET N <- .N 1>>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<NOT .1ST?>\n\t\t\t\t\t\t\t<TELL \", \">\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(<ZERO? .N>\n\t\t\t\t\t\t\t\t\t<TELL \"and \">\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<SET M 32>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<SET 1ST? <>>\n\t\t\t\t\t\t\t<SET M 0>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<G=? ,GL-CO2-QTY ,K-CO2-HIGH-3>\n\t\t\t\t\t\t\t<TELL C <ORB !\\T .M> \"he muscles in your arm are spasming\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<G=? ,GL-CO2-QTY ,K-CO2-HIGH-2>\n\t\t\t\t\t\t\t<TELL C <ORB !\\Y .M> \"our chest muscles ache\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<G=? ,GL-CO2-QTY ,K-CO2-HIGH-1>\n\t\t\t\t\t\t\t<TELL C <ORB !\\Y .M> \"ou feel a little short of breath\">\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(.NIT\n\t\t\t\t\t<SET N <- .N 1>>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<NOT .1ST?>\n\t\t\t\t\t\t\t<TELL \", \">\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(<ZERO? .N>\n\t\t\t\t\t\t\t\t\t<TELL \"and \">\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<TELL \"y\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<SET 1ST? <>>\n\t\t\t\t\t\t\t<TELL \"Y\">\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<L=? ,GL-NITROGEN-QTY ,K-NIT-LOW-3>\n\t\t\t\t\t\t\t<TELL \"ou have flashes of sudden irritibility\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<L=? ,GL-NITROGEN-QTY ,K-NIT-LOW-2>\n\t\t\t\t\t\t\t<TELL \"our fingertips are shaking badly\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<L=? ,GL-NITROGEN-QTY ,K-NIT-LOW-1>\n\t\t\t\t\t\t\t<TELL \"our hands are trembling\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<G=? ,GL-NITROGEN-QTY ,K-NIT-HIGH-3>\n\t\t\t\t\t\t\t<TELL \"ou are hallucinating\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<G=? ,GL-NITROGEN-QTY ,K-NIT-HIGH-2>\n\t\t\t\t\t\t\t<TELL \"our head is spinning\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<G=? ,GL-NITROGEN-QTY ,K-NIT-HIGH-1>\n\t\t\t\t\t\t\t<TELL \"ou feel light-headed\">\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n\t<TELL \".\" CR>\n>"
  },
  "RT-WORD-NUMBERS": {
   "name": "RT-WORD-NUMBERS",
   "file": "util.zil",
   "line": 748,
   "endLine": 816,
   "source": "<ROUTINE RT-WORD-NUMBERS (COUNT \"OPT\" (1ST? T) \"AUX\" N)\n\t<COND\n\t\t(.1ST?\n\t\t\t<TELL \" \">\n\t\t\t<COND\n\t\t\t\t(<L? .COUNT 0>\n\t\t\t\t\t<TELL \"negative \">\n\t\t\t\t\t<SET COUNT <- .COUNT>>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n\t<COND\n\t\t(<EQUAL? .COUNT  0> <TELL \"zero\">)\n\t\t(<EQUAL? .COUNT  1> <TELL \"one\">)\n\t\t(<EQUAL? .COUNT  2> <TELL \"two\">)\n\t\t(<EQUAL? .COUNT  3> <TELL \"three\">)\n\t\t(<EQUAL? .COUNT  4> <TELL \"four\">)\n\t\t(<EQUAL? .COUNT  5> <TELL \"five\">)\n\t\t(<EQUAL? .COUNT  6> <TELL \"six\">)\n\t\t(<EQUAL? .COUNT  7> <TELL \"seven\">)\n\t\t(<EQUAL? .COUNT  8> <TELL \"eight\">)\n\t\t(<EQUAL? .COUNT  9> <TELL \"nine\">)\n\t\t(<EQUAL? .COUNT 10> <TELL \"ten\">)\n\t\t(<EQUAL? .COUNT 11> <TELL \"eleven\">)\n\t\t(<EQUAL? .COUNT 12> <TELL \"twelve\">)\n\t\t(<EQUAL? .COUNT 13> <TELL \"thirteen\">)\n\t\t(<EQUAL? .COUNT 14> <TELL \"fourteen\">)\n\t\t(<EQUAL? .COUNT 15> <TELL \"fifteen\">)\n\t\t(<EQUAL? .COUNT 16> <TELL \"sixteen\">)\n\t\t(<EQUAL? .COUNT 17> <TELL \"seventeen\">)\n\t\t(<EQUAL? .COUNT 18> <TELL \"eighteen\">)\n\t\t(<EQUAL? .COUNT 19> <TELL \"nineteen\">)\n\t\t(<EQUAL? .COUNT 20> <TELL \"twenty\">)\n\t\t(<EQUAL? .COUNT 30> <TELL \"thirty\">)\n\t\t(<EQUAL? .COUNT 40> <TELL \"forty\">)\n\t\t(<EQUAL? .COUNT 50> <TELL \"fifty\">)\n\t\t(<EQUAL? .COUNT 60> <TELL \"sixty\">)\n\t\t(<EQUAL? .COUNT 70> <TELL \"seventy\">)\n\t\t(<EQUAL? .COUNT 80> <TELL \"eighty\">)\n\t\t(<EQUAL? .COUNT 90> <TELL \"ninety\">)\n\t\t(<L? .COUNT 100>\n\t\t\t<SET N <MOD .COUNT 10>>\n\t\t\t<RT-WORD-NUMBERS <- .COUNT .N> <>>\n\t\t\t<TELL \"-\">\n\t\t\t<RT-WORD-NUMBERS .N <>>\n\t\t)\n\t\t(<L? .COUNT 1000>\n\t\t\t<RT-WORD-NUMBERS </ .COUNT 100> <>>\n\t\t\t<TELL \" hundred\">\n\t\t\t<COND\n\t\t\t\t(<G? <MOD .COUNT 100> 0>\n\t\t\t\t\t<TELL \" and \">\n\t\t\t\t\t<RT-WORD-NUMBERS <MOD .COUNT 100> <>>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(T\n\t\t\t<RT-WORD-NUMBERS </ .COUNT 1000> <>>\n\t\t\t<TELL \" thousand\">\n\t\t\t<COND\n\t\t\t\t(<G? <MOD .COUNT 1000> 0>\n\t\t\t\t\t<TELL \", \">\n\t\t\t\t\t<RT-WORD-NUMBERS <MOD .COUNT 1000> <>>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-END-OF-GAME": {
   "name": "RT-END-OF-GAME",
   "file": "util.zil",
   "line": 818,
   "endLine": 907,
   "source": "<ROUTINE RT-END-OF-GAME (\"OPT\" (WIN? <>) (REPEAT <>) \"AUX\" VAL)\n\t<UPDATE-STATUS-LINE>\n\t<COND\n\t\t(<NOT .REPEAT>\n\t\t\t<TELL TAB \"Sorry, but the game is over. \">\n\t\t)\n\t>\n\t<REPEAT ()\n\t\t<COND\n\t\t\t(.REPEAT\n\t\t\t;\t<CRLF>\n\t\t\t\t<TELL TAB>\n\t\t\t)\n\t\t\t(T\n\t\t\t\t<SET REPEAT T>\n\t\t\t)\n\t\t>\n\t\t<TELL \"Do you want to \">\n\t\t<COND\n\t\t\t(,P-CAN-UNDO\n\t\t\t\t<TELL \"Undo, \">\n\t\t\t)\n\t\t>\n\t;\t<TELL \"Restore, Restart, Quit, or get a Hint ?\" CR>\n\t\t<TELL \"Restore, Restart, or Quit ?|\">\n\t\t<REPEAT ()\n\t\t\t<TELL \">\">\n\t\t\t<VERSION?\n\t\t\t\t(XZIP\n\t\t\t\t\t<PUTB ,P-INBUF 1 0>\n\t\t\t\t)\n\t\t\t\t(YZIP\n\t\t\t\t\t<PUTB ,P-INBUF 1 0>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<REPEAT ()\n\t\t\t\t<SET VAL <ZREAD ,P-INBUF ,P-LEXV>>\n\t\t\t\t<COND\n\t\t\t\t\t(<EQUAL? .VAL 10 13>\n\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t)\n\t\t\t\t;\t(T\n\t\t\t\t\t\t<RT-HOT-KEY .VAL>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t>\n\t\t\t<SET VAL <GET ,P-LEXV ,P-LEXSTART>>\n\t\t\t<COND\n\t\t\t\t(<AND ,P-CAN-UNDO\n\t\t\t\t\t\t<EQUAL? .VAL ,W?UNDO>\n\t\t\t\t\t>\n\t\t\t\t\t<V-UNDO>\n\t\t\t\t\t<RETURN>\n\t\t\t\t)\n\t\t\t\t(<EQUAL? .VAL ,W?RESTART>\n\t\t\t\t\t<RESTART>\n\t\t\t\t\t<RETURN>\n\t\t\t\t)\n\t\t\t\t(<EQUAL? .VAL ,W?RESTORE>\n\t\t\t\t\t<V-RESTORE>\n\t\t\t\t\t<RETURN>\n\t\t\t\t)\n\t\t\t\t(<EQUAL? .VAL ,W?QUIT ,W?Q>\n\t\t\t\t\t<TELL \"Are you sure you want to quit?\">\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<YES? T>\n\t\t\t\t\t\t\t<QUIT>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t;\t(<EQUAL? .VAL ,W?HINT>\n\t\t\t\t\t<V-HINT>\n\t\t\t\t\t<RETURN>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL TAB \"Please type \">\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(,P-CAN-UNDO\n\t\t\t\t\t\t\t<TELL \"UNDO, \">\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<TELL \"RESTORE, RESTART, QUIT, or HINT.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t>\n\t>\n>"
  },
  "RT-COMMA-MSG": {
   "name": "RT-COMMA-MSG",
   "file": "util.zil",
   "line": 909,
   "endLine": 918,
   "source": "<ROUTINE RT-COMMA-MSG (MORE?)\n\t<COND\n\t\t(.MORE?\n\t\t\t<TELL \",\">\n\t\t)\n\t\t(T\n\t\t\t<TELL \" and\">\n\t\t)\n\t>\n>"
  },
  "FIND-FLAG-LG": {
   "name": "FIND-FLAG-LG",
   "file": "util.zil",
   "line": 939,
   "endLine": 962,
   "source": "<ROUTINE FIND-FLAG-LG (RM FLAG \"OPTIONAL\" (FLAG2 0) \"AUX\" TBL OBJ (CNT 0) SIZE)\n\t<COND\n\t\t(<SET TBL <GETPT .RM ,P?GLOBAL>>\n\t\t\t<SET SIZE <RMGL-SIZE .TBL>>\n\t\t\t<REPEAT ()\n\t\t\t\t<SET OBJ <GET/B .TBL .CNT>>\n\t\t\t\t<COND\n\t\t\t\t\t(<AND <FSET? .OBJ .FLAG>\n\t\t\t\t\t\t\t<NOT <FSET? .OBJ ,FL-INVISIBLE>>\n\t\t\t\t\t\t\t<OR\n\t\t\t\t\t\t\t\t<0? .FLAG2>\n\t\t\t\t\t\t\t\t<FSET? .OBJ .FLAG2>\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<RETURN .OBJ>\n\t\t\t\t\t)\n\t\t\t\t\t(<IGRTR? CNT .SIZE>\n\t\t\t\t\t\t<RFALSE>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "FIND-FLAG": {
   "name": "FIND-FLAG",
   "file": "util.zil",
   "line": 964,
   "endLine": 982,
   "source": "<ROUTINE FIND-FLAG (RM FLAG \"OPTIONAL\" (NOT1 <>) (NOT2 <>) \"AUX\" OBJ)\n\t<SET OBJ <FIRST? .RM>>\n\t<REPEAT ()\n\t\t<COND\n\t\t\t(<NOT .OBJ>\n\t\t\t\t<RFALSE>\n\t\t\t)\n\t\t\t(<AND <FSET? .OBJ .FLAG>\n\t\t\t\t\t<NOT <FSET? .OBJ ,FL-INVISIBLE>>\n\t\t\t\t\t<NOT <EQUAL? .OBJ .NOT1 .NOT2>>\n\t\t\t\t>\n\t\t\t\t<RETURN .OBJ>\n\t\t\t)\n\t\t\t(T\n\t\t\t\t<SET OBJ <NEXT? .OBJ>>\n\t\t\t)\n\t\t>\n\t>\n>"
  },
  "RT-ALREADY-MSG": {
   "name": "RT-ALREADY-MSG",
   "file": "util.zil",
   "line": 984,
   "endLine": 993,
   "source": "<ROUTINE RT-ALREADY-MSG (OBJ \"OPTIONAL\" (STR <>))\n\t<SETG CLOCK-WAIT T>\n\t<TELL \"[\" The+verb .OBJ \"are\" \" already\">\n\t<COND\n\t\t(.STR\n\t\t\t<TELL \" \" .STR \".]\" CR>\n\t\t)\n\t>\n\t<RTRUE>\n>"
  },
  "RT-META-IN?": {
   "name": "RT-META-IN?",
   "file": "util.zil",
   "line": 995,
   "endLine": 1010,
   "source": "<ROUTINE RT-META-IN? (OBJ CONT \"AUX\" L)\n\t<SET L <LOC .OBJ>>\n\t<REPEAT ()\n\t\t<COND\n\t\t\t(<ZERO? .L>\n\t\t\t\t<RFALSE>\n\t\t\t)\n\t\t\t(<EQUAL? .L .CONT>\n\t\t\t\t<RTRUE>\n\t\t\t)\n\t\t\t(T\n\t\t\t\t<SET L <LOC .L>>\n\t\t\t)\n\t\t>\n\t>\n>"
  },
  "NO-NEED": {
   "name": "NO-NEED",
   "file": "util.zil",
   "line": 1012,
   "endLine": 1038,
   "source": "<ROUTINE NO-NEED (\"OPTIONAL\" (STR <>) (OBJ <>))\n\t<COND\n\t\t(<NOT .OBJ>\n\t\t\t<SET OBJ ,PRSO>\n\t\t)\n\t>\n\t<SETG CLOCK-WAIT T>\n\t<TELL \"[\" The+verb ,WINNER \"do\" \"n't need to \">\n\t<COND\n\t\t(.STR\n\t\t\t<TELL .STR>\n\t\t)\n\t\t(T\n\t\t;\t<VERB-PRINT>\n\t\t\t<PRINTB <PARSE-VERB ,PARSE-RESULT>>\n\t\t)\n\t>\n\t<COND\n\t\t(<EQUAL? .STR \"go\" ;\"drive\">\n\t\t\t<TELL \" in that \" D ,INTDIR>\n\t\t)\n\t\t(.OBJ\n\t\t\t<TELL the .OBJ>\n\t\t)\n\t>\n\t<TELL \".]\" CR>\n>"
  },
  "RT-YOU-CANT-MSG": {
   "name": "RT-YOU-CANT-MSG",
   "file": "util.zil",
   "line": 1040,
   "endLine": 1075,
   "source": "<ROUTINE RT-YOU-CANT-MSG (\"OPT\" (STR <>) (WHILE <>) (STR1 <>))\n\t<SETG CLOCK-WAIT T>\n\t<TELL \"[\" The ,WINNER \" can't \">\n\t<COND\n\t\t(<ZERO? .STR>\n\t\t;\t<VERB-PRINT>\n\t\t\t<PRINTB <PARSE-VERB ,PARSE-RESULT>>\n\t\t)\n\t\t(T\n\t\t\t<TELL .STR>\n\t\t)\n\t>\n\t<COND\n\t\t(<EQUAL? .STR \"go\" ;\"drive\">\n\t\t\t<TELL \" in that \" D ,INTDIR>\n\t\t)\n\t\t(T\n\t\t\t<TELL the ,PRSO>\n\t\t\t<COND\n\t\t\t\t(.STR1\n\t\t\t\t\t<TELL \" while\">\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(.WHILE\n\t\t\t\t\t\t\t<TELL he+verb .WHILE \"are\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL he+verb ,PRSO \"are\">\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<TELL \" \" .STR1>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n\t<TELL \".]\" CR>\n>"
  },
  "HAR-HAR": {
   "name": "HAR-HAR",
   "file": "util.zil",
   "line": 1077,
   "endLine": 1080,
   "source": "<ROUTINE HAR-HAR ()\n\t<SETG CLOCK-WAIT T>\n\t<TELL \"[You can't be serious.]\" CR>\n>"
  },
  "RT-IMPOSSIBLE-MSG": {
   "name": "RT-IMPOSSIBLE-MSG",
   "file": "util.zil",
   "line": 1082,
   "endLine": 1085,
   "source": "<ROUTINE RT-IMPOSSIBLE-MSG ()\n\t<SETG CLOCK-WAIT T>\n\t<TELL \"[That's impossible.]\" CR>\n>"
  },
  "WONT-HELP": {
   "name": "WONT-HELP",
   "file": "util.zil",
   "line": 1087,
   "endLine": 1090,
   "source": "<ROUTINE WONT-HELP ()\n\t<SETG CLOCK-WAIT T>\n\t<TELL \"[That would be a waste of time.]\" CR>\n>"
  },
  "PICK-ONE": {
   "name": "PICK-ONE",
   "file": "util.zil",
   "line": 1092,
   "endLine": 1094,
   "source": "<ROUTINE PICK-ONE (TBL)\n\t<GET .TBL <RANDOM <GET .TBL 0>>>\n>"
  },
  "GLOBAL-IN?": {
   "name": "GLOBAL-IN?",
   "file": "util.zil",
   "line": 1096,
   "endLine": 1105,
   "source": "<ROUTINE GLOBAL-IN? (OBJ1 OBJ2 \"AUX\" TBL)\n\t<COND\n\t\t(<EQUAL? .OBJ1 .OBJ2>\n\t\t\t<RTRUE>\n\t\t)\n\t\t(<SET TBL <GETPT .OBJ2 ,P?GLOBAL>>\n\t\t\t<INTBL? .OBJ1 .TBL </ <PTSIZE .TBL> 2>>\n\t\t)\n\t>\n>"
  },
  "RT-FIRST-YOU-MSG": {
   "name": "RT-FIRST-YOU-MSG",
   "file": "util.zil",
   "line": 1107,
   "endLine": 1123,
   "source": "<ROUTINE RT-FIRST-YOU-MSG (STR \"OPTIONAL\" (OBJ <>) (OBJ2 <>))\n\t<TELL \"[\">\n\t<RT-PRINT-OBJ ,WINNER ,K-ART-THE T .STR>\n\t<COND\n\t\t(.OBJ\n\t\t\t<TELL the .OBJ>\n\t\t\t<COND\n\t\t\t\t(<AND .OBJ2\n\t\t\t\t\t\t<NOT <IN? .OBJ2 ,ROOMS>>\n\t\t\t\t\t>\n\t\t\t\t\t<TELL \" from\" the .OBJ2>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n\t<TELL \" first.]\" CR>\n>"
  },
  "RT-SEE-INSIDE?": {
   "name": "RT-SEE-INSIDE?",
   "file": "util.zil",
   "line": 1125,
   "endLine": 1146,
   "source": "<ROUTINE RT-SEE-INSIDE? (OBJ \"OPT\" (ONLY-IN <>))\n\t<COND\n\t;\t(<FSET? .OBJ ,FL-INVISIBLE>\n\t\t\t<RFALSE>\t\t;\"for LIT? - PLAYER\"\n\t\t)\n\t\t(<IN? .OBJ ,ROOMS>\n\t\t\t<RTRUE>\n\t\t)\n\t\t(<FSET? .OBJ ,FL-TRANSPARENT>\n\t\t\t<RTRUE>\n\t\t)\n\t\t(<FSET? .OBJ ,FL-OPEN>\n\t\t\t<RTRUE>\n\t\t)\n\t\t(.ONLY-IN\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<FSET? .OBJ ,FL-SURFACE>\n\t\t\t<RTRUE>\n\t\t)\n\t>\n>"
  },
  "RT-SEE-ANYTHING-IN?": {
   "name": "RT-SEE-ANYTHING-IN?",
   "file": "util.zil",
   "line": 1148,
   "endLine": 1168,
   "source": "<ROUTINE RT-SEE-ANYTHING-IN? (CONT \"AUX\" OBJ)\n\t<SET OBJ <FIRST? .CONT>>\n\t<REPEAT ()\n\t\t<COND\n\t\t\t(.OBJ\n\t\t\t\t<COND\n\t\t\t\t\t(<AND <NOT <FSET? .OBJ ,FL-INVISIBLE>>\n\t\t\t\t\t\t\t<NOT <FSET? .OBJ ,FL-NO-DESC>>\n\t\t\t\t\t\t\t<NOT <EQUAL? .OBJ ,WINNER>>\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<SET OBJ <NEXT? .OBJ>>\n\t\t\t)\n\t\t\t(T\n\t\t\t\t<RFALSE>\n\t\t\t)\n\t\t>\n\t>\n>"
  },
  "RT-MOVE-ALL": {
   "name": "RT-MOVE-ALL",
   "file": "util.zil",
   "line": 1170,
   "endLine": 1194,
   "source": "<ROUTINE RT-MOVE-ALL (FROM \"OPT\" (TO <>) \"AUX\" NXT OBJ (CNT 0))\n\t<SET OBJ <FIRST? .FROM>>\n\t<REPEAT ()\n\t\t<COND\n\t\t\t(<NOT .OBJ>\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t\t(T\n\t\t\t\t<SET NXT <NEXT? .OBJ>>\n\t\t\t\t<FCLEAR .OBJ ,FL-WORN>\n\t\t\t\t<COND\n\t\t\t\t\t(.TO\n\t\t\t\t\t\t<MOVE .OBJ .TO>\n\t\t\t\t\t)\n\t\t\t\t\t(T\n\t\t\t\t\t\t<REMOVE .OBJ>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<INC CNT>\n\t\t\t\t<SET OBJ .NXT>\n\t\t\t)\n\t\t>\n\t>\n\t<RETURN .CNT>\n>"
  },
  "RT-MOVE-ALL-BUT-WORN": {
   "name": "RT-MOVE-ALL-BUT-WORN",
   "file": "util.zil",
   "line": 1196,
   "endLine": 1223,
   "source": "<ROUTINE RT-MOVE-ALL-BUT-WORN (FROM \"OPT\" (TO <>) \"AUX\" NXT OBJ (CNT 0))\n\t<SET OBJ <FIRST? .FROM>>\n\t<REPEAT ()\n\t\t<COND\n\t\t\t(<NOT .OBJ>\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t\t(T\n\t\t\t\t<SET NXT <NEXT? .OBJ>>\n\t\t\t\t<COND\n\t\t\t\t\t(<NOT <FSET? .OBJ ,FL-WORN>>\n\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t(.TO\n\t\t\t\t\t\t\t\t<MOVE .OBJ .TO>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t<REMOVE .OBJ>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<INC CNT>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<SET OBJ .NXT>\n\t\t\t)\n\t\t>\n\t>\n\t<RETURN .CNT>\n>"
  },
  "RT-MOVE-ALL-WORN": {
   "name": "RT-MOVE-ALL-WORN",
   "file": "util.zil",
   "line": 1225,
   "endLine": 1252,
   "source": "<ROUTINE RT-MOVE-ALL-WORN (FROM \"OPT\" (TO <>) \"AUX\" NXT OBJ (CNT 0))\n\t<SET OBJ <FIRST? .FROM>>\n\t<REPEAT ()\n\t\t<COND\n\t\t\t(<NOT .OBJ>\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t\t(T\n\t\t\t\t<SET NXT <NEXT? .OBJ>>\n\t\t\t\t<COND\n\t\t\t\t\t(<FSET? .OBJ ,FL-WORN>\n\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t(.TO\n\t\t\t\t\t\t\t\t<MOVE .OBJ .TO>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t<REMOVE .OBJ>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<INC CNT>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<SET OBJ .NXT>\n\t\t\t)\n\t\t>\n\t>\n\t<RETURN .CNT>\n>"
  },
  "RT-NOT-LIKELY-MSG": {
   "name": "RT-NOT-LIKELY-MSG",
   "file": "util.zil",
   "line": 1266,
   "endLine": 1270,
   "source": "<ROUTINE RT-NOT-LIKELY-MSG (OBJ STR)\n\t<TELL\n\"It \" <RT-PICK-NEXT ,K-NOT-LIKELY-TBL> \" that\" the .OBJ \" \" .STR \".\" CR\n\t>\n>"
  },
  "RT-NO-POINT-MSG": {
   "name": "RT-NO-POINT-MSG",
   "file": "util.zil",
   "line": 1286,
   "endLine": 1288,
   "source": "<ROUTINE RT-NO-POINT-MSG (STR OBJ)\n\t<TELL .STR the .OBJ \" would \" <RT-PICK-NEXT ,K-NO-POINT-TBL> \".\" CR>\n>"
  },
  "RT-PICK-NEXT": {
   "name": "RT-PICK-NEXT",
   "file": "util.zil",
   "line": 1304,
   "endLine": 1315,
   "source": "<ROUTINE RT-PICK-NEXT (TBL \"AUX\" CNT STR NT)\n\t<SET CNT <GETB .TBL 0>>\n\t<SET NT <ZGET <REST .TBL 1> 0>>\n\t<SET STR <ZGET .NT .CNT>>\n\t<COND\n\t\t(<G? <SET CNT <+ .CNT 1>> <GET .NT 0>>\n\t\t\t<SET CNT 1>\n\t\t)\n\t>\n\t<PUTB .TBL 0 .CNT>\n\t<RETURN .STR>\n>"
  },
  "RT-NO-RESPONSE-MSG": {
   "name": "RT-NO-RESPONSE-MSG",
   "file": "util.zil",
   "line": 1320,
   "endLine": 1344,
   "source": "<ROUTINE RT-NO-RESPONSE-MSG (\"OPT\" (OBJ <>))\n   <COND\n      (<NOT .OBJ>\n\t\t\t<SET OBJ ,PRSO>\n      )\n   >\n\t<COND\n\t\t(<EQUAL? .OBJ ,ROOMS>\n\t\t\t<SET OBJ ,WINNER>\n\t\t)\n\t>\n\t<COND\n\t\t(<AND <EQUAL? .OBJ ,CH-PLAYER>\n\t\t\t\t<NOT <SET OBJ <FIND-FLAG ,HERE ,FL-PERSON ,CH-PLAYER>>>\n\t\t\t>\n\t\t\t<TELL ,K-TALK-TO-SELF-MSG CR>\n\t\t)\n\t\t(<FSET? .OBJ ,FL-ASLEEP>\n\t\t\t<TELL The+verb .OBJ \"are\" \" in no condition to respond.\" CR>\n\t\t)\n\t\t(T\n\t\t\t<TELL The+verb .OBJ \"do\" \"n't respond.\" CR>\n\t\t)\n\t>\n>"
  },
  "RT-FOOLISH-TO-TALK?": {
   "name": "RT-FOOLISH-TO-TALK?",
   "file": "util.zil",
   "line": 1346,
   "endLine": 1362,
   "source": "<ROUTINE RT-FOOLISH-TO-TALK? ()\n\t<COND\n\t\t(<MC-PRSO? <> ,ROOMS>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<NOT <FSET? ,PRSO ,FL-ALIVE>>\n\t\t\t<RT-NO-RESPONSE-MSG>\n\t\t)\n\t\t(<MC-PRSO? ,CH-PLAYER ,PRSI ,WINNER>\n\t\t\t<RT-WASTE-OF-TIME-MSG>\n\t\t)\n\t\t(T\n\t\t\t<THIS-IS-IT ,PRSO>\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-WASTE-OF-TIME-MSG": {
   "name": "RT-WASTE-OF-TIME-MSG",
   "file": "util.zil",
   "line": 1364,
   "endLine": 1366,
   "source": "<ROUTINE RT-WASTE-OF-TIME-MSG ()\n\t<TELL \"[That would be a waste of time.]\" CR>\n>"
  },
  "RT-CENTER-PIC": {
   "name": "RT-CENTER-PIC",
   "file": "util.zil",
   "line": 1391,
   "endLine": 1397,
   "source": "<ROUTINE RT-CENTER-PIC (N \"AUX\" X Y)\n\t<PICINF .N ,K-WIN-TBL>\n\t<SET Y <+ </ <- <WINGET -3 ,K-W-YSIZE> <ZGET ,K-WIN-TBL 0>> 2> 1>>\n\t<SET X <+ </ <- <WINGET -3 ,K-W-XSIZE> <ZGET ,K-WIN-TBL 1>> 2> 1>>\n\t<DISPLAY .N .Y .X>\n\t<RTRUE>\n>"
  },
  "V-DESC-LEVEL": {
   "name": "V-DESC-LEVEL",
   "file": "verbs.zil",
   "line": 21,
   "endLine": 43,
   "source": "<ROUTINE V-DESC-LEVEL ()\n\t<TELL \"[\">\n\t<COND\n\t\t(<EQUAL? ,P-PRSA-WORD ,W?SUPER ,W?SUPERBRIEF>\n\t\t;\t<SETG VERBOSITY 0>\n\t\t\t<TELL \"Super brief is not supported\">\n\t\t)\n\t\t(T\n\t\t\t<COND\n\t\t\t\t(<EQUAL? ,P-PRSA-WORD ,W?BRIEF>\n\t\t\t\t\t<SETG VERBOSITY 1>\n\t\t\t\t\t<TELL \"Brief\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<SETG VERBOSITY 2>\n\t\t\t\t\t<TELL \"Verbose\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL \" descriptions\">\n\t\t)\n\t>\n\t<TELL \".]\" CR>\n>"
  },
  "V-SCRIPT": {
   "name": "V-SCRIPT",
   "file": "verbs.zil",
   "line": 45,
   "endLine": 57,
   "source": "<ROUTINE V-SCRIPT ()\n\t<COND\n\t\t(<EQUAL? ,P-PRSA-WORD ,W?SCRIPT>\n\t\t\t<DIROUT ,K-D-PRT-ON>\n\t\t\t<TELL \"Transcript: Begin\" CR>\n\t\t)\n\t\t(T\n\t\t\t<TELL \"Transcript: End\" CR>\n\t\t\t<DIROUT ,K-D-PRT-OFF>\n\t\t)\n\t>\n\t<RTRUE>\n>"
  },
  "V-VERIFY": {
   "name": "V-VERIFY",
   "file": "verbs.zil",
   "line": 59,
   "endLine": 87,
   "source": "<ROUTINE V-VERIFY ()\n\t<COND\n\t\t(,PRSO\n\t\t\t<COND\n\t\t\t\t(<AND <EQUAL? ,PRSO ,INTNUM>\n\t\t\t\t\t\t<EQUAL? ,P-NUMBER 105>\n\t\t\t\t\t>\n\t\t\t\t\t<TELL N ,SERIAL CR>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<DONT-UNDERSTAND>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(T\n\t\t\t<TELL \"[Verifying... \">\n\t\t\t<COND\n\t\t\t\t(<VERIFY>\n\t\t\t\t\t<TELL \"Correct\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"Error\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL \".]\" CR>\n\t\t\t<RFATAL>\n\t\t)\n\t>\n>"
  },
  "V-INVENTORY": {
   "name": "V-INVENTORY",
   "file": "verbs.zil",
   "line": 93,
   "endLine": 109,
   "source": "<ROUTINE V-INVENTORY ()\n\t<RT-MOVE-ALL-WORN ,WINNER ,PSEUDO-OBJECT>\n\t<TELL The+verb ,WINNER \"are\" \" holding\">\n\t<COND\n\t\t(<NOT <RT-PRINT-CONTENTS ,WINNER T>>\n\t\t\t<TELL \" nothing\">\n\t\t)\n\t>\n\t<COND\n\t\t(<RT-SEE-ANYTHING-IN? ,PSEUDO-OBJECT>\n\t\t\t<TELL \". \" He+verb ,WINNER \"are\" \" wearing\">\n\t\t\t<RT-PRINT-CONTENTS ,PSEUDO-OBJECT>\n\t\t\t<RT-MOVE-ALL-WORN ,PSEUDO-OBJECT ,WINNER>\n\t\t)\n\t>\n\t<TELL \".\" CR>\n>"
  },
  "V-QUIT": {
   "name": "V-QUIT",
   "file": "verbs.zil",
   "line": 111,
   "endLine": 128,
   "source": "<ROUTINE V-QUIT (\"OPT\" (ASK? T))\n\t<COND\n\t\t(.ASK?\n\t\t\t<TELL \"Are you sure you want to quit?|\">\n\t\t\t<COND\n\t\t\t\t(<Y?>\n\t\t\t\t\t<QUIT>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"Continuing...\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(T\n\t\t\t<QUIT>\n\t\t)\n\t>\n>"
  },
  "RT-FAILED-MSG": {
   "name": "RT-FAILED-MSG",
   "file": "verbs.zil",
   "line": 130,
   "endLine": 132,
   "source": "<ROUTINE RT-FAILED-MSG (STR)\n\t<TELL \"[\" .STR \" failed.]\" CR>\n>"
  },
  "V-RESTART": {
   "name": "V-RESTART",
   "file": "verbs.zil",
   "line": 134,
   "endLine": 137,
   "source": "<ROUTINE V-RESTART ()\n\t<RESTART>\n\t<RT-FAILED-MSG \"Restart\">\n>"
  },
  "V-SAVE": {
   "name": "V-SAVE",
   "file": "verbs.zil",
   "line": 139,
   "endLine": 160,
   "source": "<ROUTINE V-SAVE (\"AUX\" X)\n\t<PUTB ,G-INBUF 1 0>\n\t<SETG P-CONT <>> ; \"flush anything on input line after SAVE\"\n\t<SET X <SAVE>>\n\t<COND\n\t\t(<OR\t<EQUAL? .X 2>\n\t\t\t\t<FLAG-ON? ,F-REFRESH>\n\t\t\t>\n\t\t\t<COLOR ,GL-F-COLOR ,GL-B-COLOR>\n\t\t\t<V-$REFRESH <EQUAL? .X 2>>\n\t\t)\n\t>\n\t<COND\n\t\t(<ZERO? .X>\n\t\t\t<RT-FAILED-MSG \"Save\">\n\t\t)\n\t\t(T\n\t\t\t<TELL \"[Okay.]\" CR>\n\t\t)\n\t>\n\t<RFATAL>\n>"
  },
  "V-RESTORE": {
   "name": "V-RESTORE",
   "file": "verbs.zil",
   "line": 162,
   "endLine": 169,
   "source": "<ROUTINE V-RESTORE ()\n\t<COND\n\t\t(<NOT <RESTORE>>\n\t\t\t<RT-FAILED-MSG \"Restore\">\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-PRINT-CONTENTS": {
   "name": "RT-PRINT-CONTENTS",
   "file": "verbs.zil",
   "line": 173,
   "endLine": 241,
   "source": "<ROUTINE RT-PRINT-CONTENTS (CONT \"OPT\" (RECUR? <>) (CNT 0) \"AUX\" OBJ (1ST? T))\n\t<SET OBJ <FIRST? .CONT>>\n\t<COND\n\t\t(.OBJ\n\t\t\t<REPEAT ()\n\t\t\t\t<COND\n\t\t\t\t\t(<NOT .OBJ>\n\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t)\n\t\t\t\t\t(<OR\t<FSET? .OBJ ,FL-INVISIBLE>\n\t\t\t\t\t\t\t<FSET? .OBJ ,FL-NO-DESC>\n\t\t\t\t\t\t\t<EQUAL? .OBJ ,WINNER>\n\t\t\t\t\t\t>\n\t\t\t\t\t)\n\t\t\t\t\t(T\n\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t(.1ST?\n\t\t\t\t\t\t\t\t<INC CNT>\n\t\t\t\t\t\t\t\t<SET 1ST? <>>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t<TELL comma <NEXT? .OBJ>>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<TELL a .OBJ>\n\t\t\t\t\t\t<THIS-IS-IT .OBJ>\n\t\t\t\t\t\t<FSET .OBJ ,FL-SEEN>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<SET OBJ <NEXT? .OBJ>>\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(.RECUR?\n\t\t\t\t\t<SET OBJ <FIRST? .CONT>>\n\t\t\t\t\t<REPEAT ()\n\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t(<NOT .OBJ>\n\t\t\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t(<OR\t<FSET? .OBJ ,FL-INVISIBLE>\n\t\t\t\t\t\t\t\t\t<FSET? .OBJ ,FL-NO-DESC>\n\t\t\t\t\t\t\t\t\t<EQUAL? .OBJ ,WINNER>\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t(<OR\t<FSET? .OBJ ,FL-SURFACE>\n\t\t\t\t\t\t\t\t\t<AND\n\t\t\t\t\t\t\t\t\t\t<FSET? .OBJ ,FL-CONTAINER>\n\t\t\t\t\t\t\t\t\t\t<OR\n\t\t\t\t\t\t\t\t\t\t\t<FSET? .OBJ ,FL-OPEN>\n\t\t\t\t\t\t\t\t\t\t\t<FSET? .OBJ ,FL-TRANSPARENT>\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t\t(<RT-SEE-ANYTHING-IN? .OBJ>\n\t\t\t\t\t\t\t\t\t\t<TELL \". \" In .OBJ the .OBJ the+verb ,WINNER \"see\">\n\t\t\t\t\t\t\t\t\t\t<SET CNT <RT-PRINT-CONTENTS .OBJ T .CNT>>\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<SET OBJ <NEXT? .OBJ>>\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n\t.CNT\n>"
  },
  "RT-DESCRIBE-OBJECTS": {
   "name": "RT-DESCRIBE-OBJECTS",
   "file": "verbs.zil",
   "line": 243,
   "endLine": 434,
   "source": "<ROUTINE RT-DESCRIBE-OBJECTS (\"OPT\" (CONT ,HERE) (CNT 0) (LVL 0) \"AUX\" OBJ NXT (1ST? T) (P-CNT 0) (P-PL? <>))\n\t<SET OBJ <FIRST? .CONT>>\n\t<REPEAT ()\n\t\t<COND\n\t\t\t(<NOT .OBJ>\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t\t(<OR\t<FSET? .OBJ ,FL-NO-DESC>\n\t\t\t\t\t<FSET? .OBJ ,FL-INVISIBLE>\n\t\t\t\t>\n\t\t\t\t<SET OBJ <NEXT? .OBJ>>\n\t\t\t\t<AGAIN>\n\t\t\t)\n\t\t\t(<FSET? .OBJ ,FL-PERSON>\n\t\t\t\t<INC P-CNT>\n\t\t\t\t<SET OBJ <NEXT? .OBJ>>\n\t\t\t\t<AGAIN>\n\t\t\t)\n\t\t\t(.1ST?\n\t\t\t\t<COND\n\t\t\t\t\t(<G? .CNT 0>\n\t\t\t\t\t\t<TELL \" \">\n\t\t\t\t\t)\n\t\t\t\t\t(T\n\t\t\t\t\t;\t<CRLF>\n\t\t\t\t\t\t<TELL TAB>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<SET 1ST? <>>\n\t\t\t\t<COND\n\t\t\t\t\t(<IN? .CONT ,ROOMS>\n\t\t\t\t\t\t<TELL \"Y\">\n\t\t\t\t\t)\n\t\t\t\t\t(T\n\t\t\t\t\t\t<TELL In .CONT the .CONT \" y\">\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<TELL \"ou see\">\n\t\t\t)\n\t\t>\n\t\t<TELL a .OBJ>\n\t\t<THIS-IS-IT .OBJ>\n\t\t<FSET .OBJ ,FL-SEEN>\n\t\t<INC CNT>\n\t\t<SET OBJ <NEXT? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<COND\n\t\t\t\t(<NOT .OBJ>\n\t\t\t\t\t<RETURN>\n\t\t\t\t)\n\t\t\t\t(<FSET? .OBJ ,FL-NO-DESC>)\n\t\t\t\t(<FSET? .OBJ ,FL-INVISIBLE>)\n\t\t\t\t(<FSET? .OBJ ,FL-PERSON>\n\t\t\t\t\t<INC P-CNT>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<RETURN>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<SET OBJ <NEXT? .OBJ>>\n\t\t>\n\t\t<COND\n\t\t\t(.OBJ\n\t\t\t\t<SET NXT <NEXT? .OBJ>>\n\t\t\t\t<REPEAT ()\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<NOT .NXT>\n\t\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<AND <NOT <FSET? .NXT ,FL-NO-DESC>>\n\t\t\t\t\t\t\t\t<NOT <FSET? .NXT ,FL-INVISIBLE>>\n\t\t\t\t\t\t\t\t<NOT <FSET? .NXT ,FL-PERSON>>\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<SET NXT <NEXT? .NXT>>\n\t\t\t\t>\n\t\t\t\t<COND\n\t\t\t\t\t(<NOT .NXT>\n\t\t\t\t\t\t<TELL \" and\">\n\t\t\t\t\t)\n\t\t\t\t\t(T\n\t\t\t\t\t\t<TELL \",\">\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t)\n\t\t\t(T\n\t\t\t\t<COND\n\t\t\t\t\t(<IN? .CONT ,ROOMS>\n\t\t\t\t\t\t<TELL \" here\">\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<TELL \".\">\n\t\t\t)\n\t\t>\n\t>\n\t<COND\n\t\t(<G? .P-CNT 0>\n\t\t\t<COND\n\t\t\t\t(<G? .CNT 0>\n\t\t\t\t\t<TELL \" \">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t;\t<CRLF>\n\t\t\t\t\t<TELL TAB>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<SET CNT <+ .CNT .P-CNT>>\n\t\t\t<COND\n\t\t\t\t(<G? .P-CNT 1>\n\t\t\t\t\t<SET P-PL? T>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<SET OBJ <FIRST? .CONT>>\n\t\t\t<SET 1ST? T>\n\t\t\t<REPEAT ()\n\t\t\t\t<COND\n\t\t\t\t\t(<OR\t<FSET? .OBJ ,FL-NO-DESC>\n\t\t\t\t\t\t\t<FSET? .OBJ ,FL-INVISIBLE>\n\t\t\t\t\t\t>\n\t\t\t\t\t)\n\t\t\t\t\t(<FSET? .OBJ ,FL-PERSON>\n\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t(.1ST?\n\t\t\t\t\t\t\t\t<TELL A .OBJ>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t<TELL a .OBJ>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<SET 1ST? <>>\n\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t(<FSET? .OBJ ,FL-PLURAL>\n\t\t\t\t\t\t\t\t<SET P-PL? T>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t(<DLESS? P-CNT 1>\n\t\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t\t(.P-PL?\n\t\t\t\t\t\t\t\t\t\t<TELL \" are\">\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t\t\t<TELL \" is\">\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<TELL \" here.\">\n\t\t\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t(<EQUAL? .P-CNT 1>\n\t\t\t\t\t\t\t\t<TELL \" and\">\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t<TELL \",\">\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<SET OBJ <NEXT? .OBJ>>\n\t\t\t>\n\t\t)\n\t>\n\t<SET OBJ <FIRST? .CONT>>\n\t<REPEAT ()\n\t\t<COND\n\t\t\t(<NOT .OBJ>\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t\t(<FSET? .OBJ ,FL-INVISIBLE>)\n\t\t\t(<OR\t<FSET? .OBJ ,FL-SURFACE>\n\t\t\t\t\t<AND\n\t\t\t\t\t\t<FSET? .OBJ ,FL-CONTAINER>\n\t\t\t\t\t\t<FSET? .OBJ ,FL-TRANSPARENT>\n\t\t\t\t\t>\n\t\t\t\t>\n\t\t\t\t<SET CNT <RT-DESCRIBE-OBJECTS .OBJ .CNT <+ .LVL 1>>>\n\t\t\t)\n\t\t>\n\t\t<SET OBJ <NEXT? .OBJ>>\n\t>\n\t<COND\n\t\t(<ZERO? .LVL>\n\t\t\t<COND\n\t\t\t\t(<G? .CNT 0>\n\t\t\t\t\t<CRLF>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n\t<RETURN .CNT>\n>"
  },
  "RT-DESCRIBE-ROOM": {
   "name": "RT-DESCRIBE-ROOM",
   "file": "verbs.zil",
   "line": 436,
   "endLine": 468,
   "source": "<ROUTINE RT-DESCRIBE-ROOM (\"OPT\" (LOOK? <>) \"AUX\" VAL P)\n\t<COND\n\t\t(<ZERO? ,LIT>\n\t\t\t<TELL ,K-TOO-DARK-MSG CR>\n\t\t\t<FSET ,HERE ,FL-TOUCHED>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<NOT <EQUAL? ,LIT ,HERE ,CH-PLAYER>>\n\t\t\t<TELL TAB \"Light comes from\" the ,LIT \".|\">\n\t\t)\n\t>\n\t<COND\n\t\t(<SET P <GETP ,HERE ,P?ACTION>>\n\t\t\t<COND\n\t\t\t\t(.LOOK?\n\t\t\t\t\t<SET VAL <APPLY .P ,M-LOOK>>\n\t\t\t\t)\n\t\t\t\t(<NOT <FSET? ,HERE ,FL-TOUCHED>>\n\t\t\t\t\t<SET VAL <APPLY .P ,M-F-LOOK>>\n\t\t\t\t)\n\t\t\t\t(<EQUAL? ,VERBOSITY 2>\n\t\t\t\t\t<SET VAL <APPLY .P ,M-V-LOOK>>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<SET VAL <APPLY .P ,M-B-LOOK>>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n\t<FSET ,HERE ,FL-TOUCHED>\n\t<FSET ,HERE ,FL-SEEN>\n\t<RETURN <NOT .VAL>>\n>"
  },
  "NOT-HOLDING?": {
   "name": "NOT-HOLDING?",
   "file": "verbs.zil",
   "line": 490,
   "endLine": 501,
   "source": "<ROUTINE NOT-HOLDING? (OBJ)\n\t<COND\n\t\t(<AND <NOT <IN? .OBJ ,WINNER>>\n\t\t\t\t<NOT <IN? <LOC .OBJ> ,WINNER>>\n\t\t\t>\n\t\t\t<SETG CLOCK-WAIT T>\n\t\t\t<TELL\n\"[\" He+verb ,WINNER \"are\" \"n't holding\" him .OBJ \".]\" CR\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "HELD?": {
   "name": "HELD?",
   "file": "verbs.zil",
   "line": 503,
   "endLine": 536,
   "source": "<ROUTINE HELD? (OBJ \"OPT\" (CONT <>) \"AUX\" L)\n\t<COND\n\t\t(<ZERO? .CONT>\n\t\t\t<SET CONT ,PLAYER>\n\t\t)\n\t>\n\t<REPEAT ()\n\t\t<SET L <LOC .OBJ>>\n\t\t<COND\n\t\t\t(<NOT .L>\n\t\t\t\t<RFALSE>\n\t\t\t)\n\t\t\t(<EQUAL? .L .CONT>\n\t\t\t\t<RTRUE>\n\t\t\t)\n\t\t\t(<EQUAL? .CONT ,PLAYER ,WINNER>\n\t\t\t\t<COND\n\t\t\t\t;\t(<EQUAL? .OBJ ,TH-HANDS ,TH-HEAD ,TH-EYES>\n\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t)\n\t\t\t\t\t(T\n\t\t\t\t\t\t<SET OBJ .L>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t)\n\t\t\t(<EQUAL? .L ,ROOMS ,GLOBAL-OBJECTS>\n\t\t\t\t<RFALSE>\n\t\t\t)\n\t\t\t(T\n\t\t\t\t<SET OBJ .L>\n\t\t\t)\n\t\t>\n\t>\n>"
  },
  "TOO-DARK": {
   "name": "TOO-DARK",
   "file": "verbs.zil",
   "line": 566,
   "endLine": 568,
   "source": "<ROUTINE TOO-DARK ()\n\t<TELL \"It's too dark to see.\" CR>\n>"
  },
  "V-ASK-ABOUT": {
   "name": "V-ASK-ABOUT",
   "file": "verbs.zil",
   "line": 574,
   "endLine": 576,
   "source": "<ROUTINE V-ASK-ABOUT ()\n\t<RT-NO-RESPONSE-MSG>\n>"
  },
  "V-ATTACH": {
   "name": "V-ATTACH",
   "file": "verbs.zil",
   "line": 578,
   "endLine": 580,
   "source": "<ROUTINE V-ATTACH ()\n\t<TELL The ,WINNER \" can't attach\" the ,PRSO \" to\" the ,PRSI \".\" CR>\n>"
  },
  "V-CLOSE": {
   "name": "V-CLOSE",
   "file": "verbs.zil",
   "line": 586,
   "endLine": 616,
   "source": "<ROUTINE V-CLOSE ()\n\t<COND\n\t\t(<NOT <FSET? ,PRSO ,FL-OPENABLE>>\n\t\t\t<RT-YOU-CANT-MSG>\n\t\t)\n\t\t(T\n\t\t\t<COND\n\t\t\t\t(<FSET? ,PRSO ,FL-OPEN>\n\t\t\t\t\t<FCLEAR ,PRSO ,FL-OPEN>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,PRSO ,FL-DOOR>\n\t\t\t\t\t\t\t<RT-CHECK-ADJ ,PRSO>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<G? ,P-MULT 1>\n\t\t\t\t\t\t\t<TELL \"Closed\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL The+verb ,WINNER \"close\" the ,PRSO>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<TELL \".\" CR>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<RT-ALREADY-MSG ,PRSO \"closed\">\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "V-CUT": {
   "name": "V-CUT",
   "file": "verbs.zil",
   "line": 618,
   "endLine": 620,
   "source": "<ROUTINE V-CUT ()\n\t<TELL TAB The ,WINNER \" can't cut\" the ,PRSO \" with\" the ,PRSI \".\" CR>\n>"
  },
  "IDROP": {
   "name": "IDROP",
   "file": "verbs.zil",
   "line": 626,
   "endLine": 650,
   "source": "<ROUTINE IDROP ()\n\t<COND\n\t\t(<NOT-HOLDING? ,PRSO>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<AND <NOT <IN? ,PRSO ,WINNER>>\n\t\t\t\t<NOT <FSET? <LOC ,PRSO> ,FL-OPEN>>\n\t\t\t>\n\t\t\t<TELL The+verb <LOC ,PRSO> \"are\" \" closed.\" CR>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(T\n\t\t\t<COND\n\t\t\t\t(<FSET? ,PRSO ,FL-WORN>\n\t\t\t\t\t<RT-FIRST-YOU-MSG \"take off\" ,PRSO>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<MOVE ,PRSO ,HERE>\n\t\t\t<FCLEAR ,PRSO ,FL-WORN>\n\t\t\t<FCLEAR ,PRSO ,FL-NO-DESC>\n\t\t\t<FCLEAR ,PRSO ,FL-INVISIBLE>\n\t\t\t<RTRUE>\n\t\t)\n\t>\n>"
  },
  "V-DROP": {
   "name": "V-DROP",
   "file": "verbs.zil",
   "line": 652,
   "endLine": 672,
   "source": "<ROUTINE V-DROP (\"AUX\" L)\n\t<COND\n\t\t(<IDROP>\n\t\t\t<COND\n\t\t\t\t(<G? ,P-MULT 1>\n\t\t\t\t\t<TELL \"Dropped\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL The+verb ,WINNER \"drop\" the ,PRSO>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<SET L <FIND-FLAG ,HERE ,FL-VEHICLE ,PRSO>>\n\t\t\t\t\t\t\t<MOVE ,PRSO .L>\n\t\t\t\t\t\t\t<TELL in .L \"to\" the .L>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL \".\" CR>\n\t\t)\n\t>\n>"
  },
  "PRE-EMPTY": {
   "name": "PRE-EMPTY",
   "file": "verbs.zil",
   "line": 678,
   "endLine": 715,
   "source": "<ROUTINE PRE-EMPTY (\"AUX\" L)\n\t<COND\n\t\t(<AND <NOT <FSET? ,PRSO ,FL-SURFACE>>\n\t\t\t\t<NOT <FSET? ,PRSO ,FL-CONTAINER>>\n\t\t\t>\n\t\t\t<SET L <LOC ,PRSO>>\n\t\t\t<COND\n\t\t\t\t(<AND .L\n\t\t\t\t\t\t<OR\n\t\t\t\t\t\t\t<FSET? .L ,FL-SURFACE>\n\t\t\t\t\t\t\t<FSET? .L ,FL-CONTAINER>\n\t\t\t\t\t\t>\n\t\t\t\t\t>\n\t\t\t\t\t<PERFORM ,V?EMPTY .L ,PRSI>\n\t\t\t\t\t<RTRUE>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<RT-YOU-CANT-MSG>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<AND <FSET? ,PRSO ,FL-CONTAINER>\n\t\t\t\t<NOT <FSET? ,PRSO ,FL-OPEN>>\n\t\t\t\t<FSET? ,PRSO ,FL-OPENABLE>\n\t\t\t>\n\t\t\t<TELL The+verb ,PRSO \"are\" \"n't open.\" CR>\n\t\t)\n\t\t(<NOT <EQUAL? ,PRSI <> ,ROOMS ,TH-HANDS>>\n\t\t\t<COND\n\t\t\t\t(<AND <NOT <FSET? ,PRSI ,FL-SURFACE>>\n\t\t\t\t\t\t<NOT <FSET? ,PRSI ,FL-CONTAINER>>\n\t\t\t\t\t>\n\t\t\t\t\t<TELL The ,WINNER \" can't empty\" the ,PRSO \" into\" the ,PRSI \".\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "V-EMPTY": {
   "name": "V-EMPTY",
   "file": "verbs.zil",
   "line": 717,
   "endLine": 719,
   "source": "<ROUTINE V-EMPTY ()\n\t<RT-EMPTY-MSG ,PRSO ,PRSI>\n>"
  },
  "RT-EMPTY-MSG": {
   "name": "RT-EMPTY-MSG",
   "file": "verbs.zil",
   "line": 721,
   "endLine": 794,
   "source": "<ROUTINE RT-EMPTY-MSG (CONT \"OPT\" (DEST <>) \"AUX\" OBJ NXT X OM)\n\t<SET OM ,P-MULT>\n\t<SETG P-MULT 0>\n\t<SET OBJ <FIRST? .CONT>>\n\t<REPEAT ()\n\t\t<COND\n\t\t\t(<NOT .OBJ>\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t\t(<AND\t<NOT <FSET? .OBJ ,FL-INVISIBLE>>\n\t\t\t\t\t<FSET? .OBJ ,FL-TAKEABLE>\n\t\t\t\t>\n\t\t\t\t<INC P-MULT>\n\t\t\t)\n\t\t>\n\t\t<SET OBJ <NEXT? .OBJ>>\n\t>\n\t<COND\n\t\t(<ZERO? ,P-MULT>\n\t\t\t<TELL \"There is nothing\" in ,PRSO the ,PRSO \".\" CR>\n\t\t\t<SETG P-MULT .OM>\n\t\t\t<RTRUE>\n\t\t)\n\t>\n\t<SET OBJ <FIRST? .CONT>>\n\t<COND\n\t\t(<EQUAL? .DEST <> ,ROOMS ,TH-GROUND ,GLOBAL-HERE>\n\t\t\t<SET DEST ,HERE>\n\t\t)\n\t\t(<EQUAL? .DEST ,TH-HANDS>\n\t\t\t<SET DEST ,CH-PLAYER>\n\t\t)\n\t>\n\t<REPEAT ()\n\t\t<COND\n\t\t\t(<MC-F? .OBJ>\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t\t(<AND\t<NOT <FSET? .OBJ ,FL-INVISIBLE>>\n\t\t\t\t\t<FSET? .OBJ ,FL-TAKEABLE>\n\t\t\t\t>\n\t\t\t\t<TELL The .OBJ \": \">\n\t\t\t\t<SET NXT <NEXT? .OBJ>>\n\t\t\t\t<COND\n\t\t\t\t\t(<EQUAL? .DEST ,CH-PLAYER>\n\t\t\t\t\t\t<SET X <RT-PERFORM ,V?TAKE .OBJ ,PRSO>>\n\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t(<EQUAL? .X ,M-FATAL>\n\t\t\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t>\n\t\t\t\t\t)\n\t\t\t\t\t(<EQUAL? .DEST ,HERE>\n\t\t\t\t\t\t<MOVE .OBJ ,HERE>\n\t\t\t\t\t\t<TELL He+verb .OBJ \"land\" \" on\" the ,TH-GROUND \" nearby.\" CR>\n\t\t\t\t\t)\n\t\t\t\t\t(<RT-ROOM-IN-MSG? .OBJ .DEST>\n\t\t\t\t\t\tT\n\t\t\t\t\t)\n\t\t\t\t\t(<RT-CHECK-MOVE-MSG? .OBJ .DEST>\n\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t)\n\t\t\t\t\t(T\n\t\t\t\t\t\t<MOVE .OBJ .DEST>\n\t\t\t\t\t\t<TELL \"Done.\" CR>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<SET OBJ .NXT>\n\t\t\t)\n\t\t>\n\t>\n\t<SETG P-MULT .OM>\n\t<RTRUE>\n>"
  },
  "V-EMPTY-FROM": {
   "name": "V-EMPTY-FROM",
   "file": "verbs.zil",
   "line": 796,
   "endLine": 806,
   "source": "<ROUTINE V-EMPTY-FROM ()\n\t<COND\n\t\t(<NOT <IN? ,PRSO ,PRSI>>\n\t\t\t<TELL The+verb ,PRSO \"are\" \"n't\" in ,PRSI the ,PRSI \".\" CR>\n\t\t)\n\t\t(T\n\t\t\t<PERFORM ,V?EMPTY ,PRSI>\n\t\t\t<RTRUE>\n\t\t)\n\t>\n>"
  },
  "V-ENTER": {
   "name": "V-ENTER",
   "file": "verbs.zil",
   "line": 808,
   "endLine": 887,
   "source": "<ROUTINE V-ENTER (\"AUX\" VEH DIR RM)\n\t<COND\n\t\t(<MC-PRSO? ,ROOMS>\n\t\t\t<COND\n\t\t\t\t(<SET VEH <FIND-FLAG ,HERE ,FL-VEHICLE>>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<IN? ,WINNER .VEH>\n\t\t\t\t\t\t\t<RT-ALREADY-MSG ,WINNER>\n\t\t\t\t\t\t\t<TELL in .VEH the .VEH \".]\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<OR\t<FSET? .VEH ,FL-SURFACE>\n\t\t\t\t\t\t\t\t<FSET? .VEH ,FL-OPEN>\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<MOVE ,WINNER .VEH>\n\t\t\t\t\t\t\t<TELL The+verb ,WINNER \"get\" in .VEH the .VEH \".\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<FSET? .VEH ,FL-OPENABLE>\n\t\t\t\t\t\t\t<TELL The+verb .VEH \"are\" \" closed.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL The ,WINNER \" can't get\" in .VEH the .VEH \".\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<EQUAL? <RT-DO-WALK ,P?IN> <> ,M-FATAL>\n\t\t\t\t\t<SETG CLOCK-WAIT T>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<MC-PRSO? ,HERE ,GLOBAL-HERE>\n\t\t\t; \"Enter the room you're in\"\n\t\t\t<RT-ALREADY-MSG ,WINNER>\n\t\t\t<TELL in ,HERE the ,HERE \".]\" CR>\n\t\t)\n\t\t(<IN? ,PRSO ,ROOMS>\n\t\t\t<COND\n\t\t\t\t(<AND <SET DIR <RT-FIND-DIR ,PRSO>>\n\t\t\t\t\t\t<RT-DO-WALK .DIR>\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<FSET? ,PRSO ,FL-AUTO-ENTER>\n\t\t\t\t\t<RT-GOTO ,PRSO>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL The ,WINNER \" can't get there from here.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<FSET? ,PRSO ,FL-DOOR>\n\t\t\t<COND\n\t\t\t\t(<RT-OTHER-SIDE ,PRSO>\n\t\t\t\t\t<RT-DO-WALK ,GL-DOOR-DIR>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL The+verb ,PRSO \"do\" \"n't seem to go anywhere.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<FSET? ,PRSO ,FL-VEHICLE>\t\t; \"If it's a vehicle, move winner there.\"\n\t\t\t<COND\n\t\t\t\t(<OR\t<FSET? ,PRSO ,FL-SURFACE>\n\t\t\t\t\t\t<FSET? ,PRSO ,FL-OPEN>\n\t\t\t\t\t>\n\t\t\t\t\t<MOVE ,WINNER ,PRSO>\n\t\t\t\t\t<TELL The+verb ,WINNER \"get\" in ,PRSO the ,PRSO \".\" CR>\n\t\t\t\t)\n\t\t\t\t(<FSET? ,PRSO ,FL-OPENABLE>\n\t\t\t\t\t<TELL The+verb ,PRSO \"are\" \" closed.\" CR>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL The ,WINNER \" can't get\" in ,PRSO the ,PRSO \".\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(T\n\t\t\t<RT-IMPOSSIBLE-MSG>\n\t\t)\n\t>\n\t<RTRUE>\n>"
  },
  "V-EXIT": {
   "name": "V-EXIT",
   "file": "verbs.zil",
   "line": 889,
   "endLine": 972,
   "source": "<ROUTINE V-EXIT (\"AUX\" VEH L DIR)\n\t<COND\n\t\t(<MC-PRSO? ,ROOMS>\n\t\t\t<SET L <LOC ,WINNER>>\n\t\t\t<COND\n\t\t\t\t(<IN? .L ,ROOMS>\n\t\t\t\t\t<RT-DO-WALK ,P?OUT>\n\t\t\t\t)\n\t\t\t\t(<OR\t<FSET? .L ,FL-VEHICLE>\n\t\t\t\t\t\t<FSET? .L ,FL-SURFACE>\n\t\t\t\t\t\t<FSET? .L ,FL-CONTAINER>\n\t\t\t\t\t>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<OR\t<FSET? .L ,FL-SURFACE>\n\t\t\t\t\t\t\t\t<FSET? .L ,FL-OPEN>\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<MOVE ,WINNER <LOC .L>>\n\t\t\t\t\t\t\t<TELL The+verb ,WINNER \"get\" out .L \" of\" the .L \".\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<FSET? .L ,FL-OPENABLE>\n\t\t\t\t\t\t\t<TELL The+verb .L \"are\" \" closed.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL The ,WINNER \" can't get\" out .L \" of\" the .L \".\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<SET VEH <FIND-FLAG ,HERE ,FL-VEHICLE>>\n\t\t\t\t\t<TELL The+verb ,WINNER \"are\" \"n't\" in .VEH the .VEH \".\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<MC-PRSO? ,HERE ,GLOBAL-HERE>\n\t\t\t<RT-DO-WALK ,P?OUT>\n\t\t)\n\t\t(<IN? ,PRSO ,ROOMS>\n\t\t\t<RT-NOT-IN-ROOM-MSG>\n\t\t)\n\t\t(<FSET? ,PRSO ,FL-DOOR>\n\t\t\t<COND\n\t\t\t\t(<RT-OTHER-SIDE ,PRSO>\n\t\t\t\t\t<RT-DO-WALK ,GL-DOOR-DIR>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL The+verb ,PRSO \"do\" \"n't seem to go anywhere.\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<OR\t<FSET? ,PRSO ,FL-VEHICLE>\n\t\t\t\t<FSET? ,PRSO ,FL-CONTAINER>\n\t\t\t\t<FSET? ,PRSO ,FL-SURFACE>\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(<IN? ,WINNER ,PRSO>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<OR\t<FSET? ,PRSO ,FL-SURFACE>\n\t\t\t\t\t\t\t\t<FSET? ,PRSO ,FL-OPEN>\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<MOVE ,WINNER <LOC <LOC ,WINNER>>>\n\t\t\t\t\t\t\t<TELL The+verb ,WINNER \"get\" out ,PRSO \" of\" the ,PRSO \".\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<FSET? ,PRSO ,FL-OPENABLE>\n\t\t\t\t\t\t\t<TELL The+verb ,PRSO \"are\" \" closed.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL The ,WINNER \" can't get\" out ,PRSO \" of\" the ,PRSO \".\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL The+verb ,WINNER \"are\" \"n't\" in ,PRSO the ,PRSO \".\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<FSET? <SET L <LOC ,PRSO>> ,FL-CONTAINER>\n\t\t\t<TELL \"[from\" the .L \"]\" CR>\n\t\t\t<RT-PERFORM ,V?TAKE ,PRSO>\n\t\t)\n\t\t(T\n\t\t\t<RT-IMPOSSIBLE-MSG>\n\t\t)\n\t>\n\t<RTRUE>\n>"
  },
  "RT-NOT-IN-ROOM-MSG": {
   "name": "RT-NOT-IN-ROOM-MSG",
   "file": "verbs.zil",
   "line": 974,
   "endLine": 976,
   "source": "<ROUTINE RT-NOT-IN-ROOM-MSG ()\n\t<TELL The+verb ,WINNER \"are\" \"n't\" in ,PRSO the ,PRSO \".\" CR>\n>"
  },
  "RT-DO-WALK": {
   "name": "RT-DO-WALK",
   "file": "verbs.zil",
   "line": 978,
   "endLine": 998,
   "source": "<ROUTINE RT-DO-WALK (DIR1 \"OPT\" (DIR2 <>) (DIR3 <>) \"AUX\" X)\n\t<SETG P-WALK-DIR .DIR1>\n\t<SET X <PERFORM ,V?WALK .DIR1>>\n\t<COND\n\t\t(<AND .DIR2\n\t\t\t\t<NOT <EQUAL? .X <> ,M-FATAL>>\n\t\t\t>\n\t\t\t<SETG P-WALK-DIR .DIR2>\n\t\t\t<SET X <PERFORM ,V?WALK .DIR2>>\n\t\t\t<COND\n\t\t\t\t(<AND .DIR3\n\t\t\t\t\t\t<NOT <EQUAL? .X <> ,M-FATAL>>\n\t\t\t\t\t>\n\t\t\t\t\t<SETG P-WALK-DIR .DIR3>\n\t\t\t\t\t<SET X <PERFORM ,V?WALK .DIR3>>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n\t<RETURN .X>\n>"
  },
  "V-EXAMINE": {
   "name": "V-EXAMINE",
   "file": "verbs.zil",
   "line": 1004,
   "endLine": 1028,
   "source": "<ROUTINE V-EXAMINE ()\n\t<COND\n\t\t(<MC-PRSO? ,HERE ,GLOBAL-HERE>\n\t\t\t<PERFORM ,V?LOOK>\n\t\t)\n\t\t(<MC-PRSO? ,INTDIR>\n\t\t\t<SETG CLOCK-WAIT T>\n\t\t\t<TELL \"[If you want to see what's there, go there.]\" CR>\n\t\t)\n\t\t(<FSET? ,PRSO ,FL-DOOR>\n\t\t\t<FSET ,PRSO ,FL-SEEN>\n\t\t\t<TELL The+verb ,PRSO \"are\" open ,PRSO \".\" CR>\n\t\t)\n\t\t(<OR\t<FSET? ,PRSO ,FL-CONTAINER>\n\t\t\t\t<FSET? ,PRSO ,FL-SURFACE>\n\t\t\t>\n\t\t\t<FSET ,PRSO ,FL-SEEN>\n\t\t\t<V-LOOK-IN>\n\t\t)\n\t\t(T\n\t\t\t<FSET ,PRSO ,FL-SEEN>\n\t\t\t<RT-NOTHING-SPECIAL-MSG>\n\t\t)\n\t>\n>"
  },
  "RT-NOTHING-SPECIAL-MSG": {
   "name": "RT-NOTHING-SPECIAL-MSG",
   "file": "verbs.zil",
   "line": 1030,
   "endLine": 1034,
   "source": "<ROUTINE RT-NOTHING-SPECIAL-MSG ()\n\t<TELL\n\"You see nothing \" <RT-PICK-NEXT ,K-UNUSUAL-TBL> \" about\" the ,PRSO \".\" CR\n\t>\n>"
  },
  "V-EXTINGUISH": {
   "name": "V-EXTINGUISH",
   "file": "verbs.zil",
   "line": 1038,
   "endLine": 1041,
   "source": "<ROUTINE V-EXTINGUISH ()\n\t<TELL \"['Extinguish' currently has no default handling.]|\">\n\t<RFATAL>\n>"
  },
  "V-FOLLOW": {
   "name": "V-FOLLOW",
   "file": "verbs.zil",
   "line": 1047,
   "endLine": 1050,
   "source": "<ROUTINE V-FOLLOW ()\n\t<TELL \"['Follow' currently has no default handling.]|\">\n\t<RFATAL>\n>"
  },
  "V-GIVE": {
   "name": "V-GIVE",
   "file": "verbs.zil",
   "line": 1056,
   "endLine": 1058,
   "source": "<ROUTINE V-GIVE ()\n\t<TELL TAB The+verb ,PRSI \"do\" \"n't seem interested in\" the ,PRSO \".\" CR>\n>"
  },
  "V-GIVE-SWP": {
   "name": "V-GIVE-SWP",
   "file": "verbs.zil",
   "line": 1060,
   "endLine": 1063,
   "source": "<ROUTINE V-GIVE-SWP ()\n\t<PERFORM ,V?GIVE ,PRSI ,PRSO>\n\t<RTRUE>\n>"
  },
  "V-HIT": {
   "name": "V-HIT",
   "file": "verbs.zil",
   "line": 1069,
   "endLine": 1072,
   "source": "<ROUTINE V-HIT ()\n\t<TELL \"['Hit' currently has no default handling.]|\">\n\t<RFATAL>\n>"
  },
  "V-INFLATE": {
   "name": "V-INFLATE",
   "file": "verbs.zil",
   "line": 1078,
   "endLine": 1080,
   "source": "<ROUTINE V-INFLATE ()\n\t<TELL ,K-HOW-INTEND-MSG CR>\n>"
  },
  "V-LIFT": {
   "name": "V-LIFT",
   "file": "verbs.zil",
   "line": 1086,
   "endLine": 1089,
   "source": "<ROUTINE V-LIFT ()\n\t<TELL \"['Lift' currently has no default handling.]|\">\n\t<RFATAL>\n>"
  },
  "V-LISTEN": {
   "name": "V-LISTEN",
   "file": "verbs.zil",
   "line": 1091,
   "endLine": 1102,
   "source": "<ROUTINE V-LISTEN ()\n\t<COND\n\t\t(<MC-PRSO? <> ,ROOMS>\n\t\t\t<TELL\nThe+verb ,WINNER \"hear\" \"nothing \" <RT-PICK-NEXT ,K-UNUSUAL-TBL> \".\" CR\n\t\t\t>\n\t\t)\n\t\t(T\n\t\t\t<TELL The+verb ,PRSO \"are\" \" silent.\" CR>\n\t\t)\n\t>\n>"
  },
  "V-LOCK": {
   "name": "V-LOCK",
   "file": "verbs.zil",
   "line": 1104,
   "endLine": 1136,
   "source": "<ROUTINE V-LOCK ()\n\t<COND\n\t;\t(<EQUAL? ,P-PRSA-WORD ,W?BAR>\n\t\t\t<TELL The ,WINNER \" can't bar\" the ,PRSO !\\. CR>\n\t\t)\n\t\t(<FSET? ,PRSO ,FL-LOCKED>\n\t\t\t<RT-ALREADY-MSG ,PRSO \"locked\">\n\t\t)\n\t\t(<NOT <RT-MATCH-KEY ,PRSO ,PRSI>>\n\t\t\t<TELL The ,WINNER \" can't lock\" the ,PRSO \" with\" the ,PRSI !\\. CR>\n\t\t)\n\t\t(T\n\t\t\t<FSET ,PRSO ,FL-LOCKED>\n\t\t\t<COND\n\t\t\t\t(<FSET? ,PRSO ,FL-OPEN>\n\t\t\t\t\t<FCLEAR ,PRSO ,FL-OPEN>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,PRSO ,FL-DOOR>\n\t\t\t\t\t\t\t<RT-CHECK-ADJ ,PRSO>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<TELL\nThe+verb ,WINNER \"close\" the ,PRSO \" and\" verb ,WINNER \"lock\" him ,PRSO \".\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<RT-LOCK-MSG ,PRSO ,PRSI T>\n\t\t\t\t\t<TELL \".\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "V-LOOK": {
   "name": "V-LOOK",
   "file": "verbs.zil",
   "line": 1138,
   "endLine": 1145,
   "source": "<ROUTINE V-LOOK ()\n\t<COND\n\t\t(<RT-DESCRIBE-ROOM T>\n\t\t\t<RT-DESCRIBE-OBJECTS>\n\t\t)\n\t>\n\t<RTRUE>\n>"
  },
  "V-LOOK-BEHIND": {
   "name": "V-LOOK-BEHIND",
   "file": "verbs.zil",
   "line": 1147,
   "endLine": 1150,
   "source": "<ROUTINE V-LOOK-BEHIND ()\n\t; \"Bob\"\n\t<TELL TAB \"You don't see anything \" <RT-PICK-NEXT ,K-UNUSUAL-TBL> \".\" CR>\n>"
  },
  "V-LOOK-UNDER": {
   "name": "V-LOOK-UNDER",
   "file": "verbs.zil",
   "line": 1152,
   "endLine": 1155,
   "source": "<ROUTINE V-LOOK-UNDER ()\n\t; \"Bob\"\n\t<TELL TAB \"You don't see anything \" <RT-PICK-NEXT ,K-UNUSUAL-TBL> \".\" CR>\n>"
  },
  "V-LOOK-IN": {
   "name": "V-LOOK-IN",
   "file": "verbs.zil",
   "line": 1161,
   "endLine": 1224,
   "source": "<ROUTINE V-LOOK-IN (\"OPT\" (DIR ,P?IN) \"AUX\" RM)\n\t<COND\n\t\t(<MC-PRSO? ,ROOMS>\n\t\t\t<COND\n\t\t\t\t(<OR\t<FSET? <SET RM ,P-IT-OBJECT> ,FL-CONTAINER>\n\t\t\t\t\t\t<SET RM <FIND-FLAG-LG ,HERE ,FL-OPENABLE>>\n\t\t\t\t\t>\n\t\t\t\t\t<PERFORM ,PRSA .RM ,PRSI>\n\t\t\t\t\t<RTRUE>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n\t<COND\n\t;\t(<AND <IN? ,PRSO ,ROOMS>\n\t\t\t\t<OR\n\t\t\t\t\t<GLOBAL-IN? ,PRSO ,HERE>\n\t\t\t\t\t<SEE-INTO? ,PRSO <>>\n\t\t\t\t>\n\t\t\t>\n\t\t\t<ROOM-PEEK ,PRSO>\n\t\t)\n\t\t(<AND <NOT <FSET? ,PRSO ,FL-OPEN>>\n\t\t\t\t<FSET? ,PRSO ,FL-OPENABLE>\n\t\t\t>\n\t\t\t<TELL The+verb ,PRSO \"are\" \" closed.\" CR>\n\t\t)\n\t\t(<AND <OR\n\t\t\t\t\t<FSET? ,PRSO ,FL-CONTAINER>\n\t\t\t\t\t<FSET? ,PRSO ,FL-SURFACE>\n\t\t\t\t>\n\t\t\t\t<RT-SEE-INSIDE? ,PRSO>\n\t\t\t>\n\t\t;\t<COND\n\t\t\t\t(<NOT <RT-SEE-INSIDE? ,PRSO>>\n\t\t\t\t\t<RT-FIRST-YOU-MSG \"open\" ,PRSO>\n\t\t\t\t\t<FSET ,PRSO ,FL-OPEN>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(<FIRST? ,PRSO>\n\t\t\t\t\t<TELL \"You can see\">\n\t\t\t\t\t<RT-PRINT-CONTENTS ,PRSO>\n\t\t\t\t\t<TELL in ,PRSO>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<NOT <FSET? ,PRSO ,FL-SURFACE>>\n\t\t\t\t\t\t\t<TELL \"side\">\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<TELL the ,PRSO \".\" CR>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"There's nothing\" in ,PRSO the ,PRSO \".\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<==? .DIR ,P?IN>\n\t\t\t<RT-YOU-CANT-MSG \"look inside\">\n\t\t)\n\t\t(T\n\t\t\t<RT-YOU-CANT-MSG \"look outside\">\n\t\t)\n\t>\n>"
  },
  "TELL-CANT-FIND": {
   "name": "TELL-CANT-FIND",
   "file": "verbs.zil",
   "line": 1344,
   "endLine": 1347,
   "source": "<ROUTINE TELL-CANT-FIND ()\n\t<SETG CLOCK-WAIT T>\n\t<TELL \"[That place isn't close enough.]\" CR>\n>"
  },
  "V-LOOK-ON": {
   "name": "V-LOOK-ON",
   "file": "verbs.zil",
   "line": 1349,
   "endLine": 1358,
   "source": "<ROUTINE V-LOOK-ON ()\n\t<COND\n\t\t(<FSET? ,PRSO ,FL-SURFACE>\n\t\t\t<V-LOOK-IN>\n\t\t)\n\t\t(T\n\t\t\t<TELL \"There's no good surface on\" the ,PRSO \".\" CR>\n\t\t)\n\t>\n>"
  },
  "V-MOVE": {
   "name": "V-MOVE",
   "file": "verbs.zil",
   "line": 1364,
   "endLine": 1367,
   "source": "<ROUTINE V-MOVE ()\n\t<TELL \"['Move' currently has no default handling.]|\">\n\t<RFATAL>\n>"
  },
  "V-NO": {
   "name": "V-NO",
   "file": "verbs.zil",
   "line": 1373,
   "endLine": 1376,
   "source": "<ROUTINE V-NO ()\n\t<TELL \"[You seem sure of yourself.]\" CR>\n\t<RFATAL>\n>"
  },
  "RT-MATCH-KEY": {
   "name": "RT-MATCH-KEY",
   "file": "verbs.zil",
   "line": 1382,
   "endLine": 1399,
   "source": "<ROUTINE RT-MATCH-KEY (DOOR \"OPT\" (KEY <>))\n\t<COND\n\t\t(<EQUAL? .DOOR ,TH-STEEL-BOX>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? .KEY ,TH-STEEL-KEY>\n\t\t\t\t\t<RTRUE>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<EQUAL? .DOOR ,TH-MISSILE-PANEL>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? .KEY ,TH-MISSILE-ACCESS-KEY>\n\t\t\t\t\t<RTRUE>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "RT-OTHER-SIDE": {
   "name": "RT-OTHER-SIDE",
   "file": "verbs.zil",
   "line": 1403,
   "endLine": 1427,
   "source": "<ROUTINE RT-OTHER-SIDE (DOOR \"AUX\" (RM <>) L)\n\t<SET L <LOC ,WINNER>>\n\t<REPEAT ((P 0) OBJ PT PTS)\n\t\t<COND\n\t\t\t(<OR\t<ZERO? <SET P <NEXTP .L .P>>>\n\t\t\t\t\t<L? .P ,LOW-DIRECTION>\n\t\t\t\t>\n\t\t\t\t<RFALSE>\n\t\t\t)\n\t\t\t(<SET PT <GETPT .L .P>>\n\t\t\t\t<SET PTS <PTSIZE .PT>>\n\t\t\t\t<COND\n\t\t\t\t\t(<AND <==? .PTS ,DEXIT>\n\t\t\t\t\t\t\t<EQUAL? .DOOR <GET/B .PT ,DEXITOBJ>>\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<SETG GL-DOOR-DIR .P>\n\t\t\t\t\t\t<SET RM <GET/B .PT ,REXIT>>\n\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t)\n\t\t>\n\t>\n\t<RETURN .RM>\n>"
  },
  "RT-LOCK-MSG": {
   "name": "RT-LOCK-MSG",
   "file": "verbs.zil",
   "line": 1429,
   "endLine": 1443,
   "source": "<ROUTINE RT-LOCK-MSG (DOOR KEY LOCK?)\n\t<TELL\nThe+verb ,WINNER \"put\" the .KEY \" in the lock and\" verb ,WINNER \"give\" \" it a\nturn\"\n\t>\n\t<COND\n\t\t(.LOCK?\n\t\t\t<TELL \". \" The .DOOR \" locks with\">\n\t\t)\n\t\t(T\n\t\t\t<TELL \", and\" verb ,WINNER \"hear\">\n\t\t)\n\t>\n\t<TELL \" a satisfying click\">\n>"
  },
  "RT-OPEN-DOOR-MSG": {
   "name": "RT-OPEN-DOOR-MSG",
   "file": "verbs.zil",
   "line": 1445,
   "endLine": 1537,
   "source": "<ROUTINE RT-OPEN-DOOR-MSG (DOOR \"OPT\" (KEY <>) \"AUX\" RM (LOCK? <>) TMP1 TMP2)\n\t<COND\n\t\t(<FSET? .DOOR ,FL-LOCKED>\n\t\t\t<SET LOCK? T>\n\t\t\t<FCLEAR .DOOR ,FL-LOCKED>\n\t\t\t<RT-LOCK-MSG .DOOR .KEY <>>\n\t\t\t<COND\n\t\t\t\t(<OR\t<FSET? .DOOR ,FL-AUTO-OPEN>\n\t\t\t\t\t\t<VERB? OPEN>\n\t\t\t\t\t>\n\t\t\t\t\t<FSET .DOOR ,FL-OPEN>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? .DOOR ,FL-DOOR>\n\t\t\t\t\t\t\t<RT-CHECK-ADJ .DOOR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<TELL \". \" The+verb .DOOR \"swing\" \" open\">\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(T\n\t\t\t<FSET .DOOR ,FL-OPEN>\n\t\t\t<COND\n\t\t\t\t(<FSET? .DOOR ,FL-DOOR>\n\t\t\t\t\t<RT-CHECK-ADJ .DOOR>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL The+verb ,WINNER \"open\" the .DOOR>\n\t\t)\n\t>\n\t<COND\n\t\t(<FSET? .DOOR ,FL-OPEN>\n\t\t\t<COND\n\t\t\t\t(<FSET? .DOOR ,FL-DOOR>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<NOT <SET RM <RT-OTHER-SIDE .DOOR>>>)\n\t\t\t\t\t\t(<FSET? .DOOR ,FL-AUTO-ENTER>\n\t\t\t\t\t\t\t<TELL \" and\">\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(.LOCK?\n\t\t\t\t\t\t\t\t\t<TELL the ,WINNER>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<TELL verb ,WINNER \"step\" \" through.\" CR CR>\n\t\t\t\t\t\t\t<RT-GOTO .RM>\n\t\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<SET TMP2 <GETP ,HERE ,P?ADJACENT>>\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(<SET TMP1 <INTBL? .RM <REST .TMP2 1> <GETB .TMP2 0> 1>>\n\t\t\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t\t\t(<GETB .TMP1 1>\n\t\t\t\t\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t\t\t\t\t(<RT-SEE-ANYTHING-IN? .RM>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<TELL \" and\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t(.LOCK?\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<TELL the ,WINNER>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<TELL verb ,WINNER \"see\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<RT-PRINT-CONTENTS .RM>\n\t\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<NOT <FSET? .DOOR ,FL-TRANSPARENT>>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<RT-SEE-ANYTHING-IN? .DOOR>\n\t\t\t\t\t\t\t<TELL \". Inside you see\">\n\t\t\t\t\t\t\t<RT-PRINT-CONTENTS .DOOR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n\t<TELL \".\" CR>\n\t<COND\n\t\t(<NOT <FSET? .DOOR ,FL-TAKEABLE>>\n\t\t\t<COND\n\t\t\t\t(<FSET? .DOOR ,FL-OPEN>\n\t\t\t\t\t<RT-SCORE-OBJ .DOOR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "V-OPEN": {
   "name": "V-OPEN",
   "file": "verbs.zil",
   "line": 1539,
   "endLine": 1561,
   "source": "<ROUTINE V-OPEN (\"AUX\" F STR RM)\n\t<COND\n\t\t(<NOT <FSET? ,PRSO ,FL-OPENABLE>>\n\t\t\t<RT-YOU-CANT-MSG>\n\t\t)\n\t\t(<FSET? ,PRSO ,FL-OPEN>\n\t\t\t<RT-ALREADY-MSG ,PRSO \"open\">\n\t\t)\n\t\t(<AND <NOT ,PRSI>\n\t\t\t\t<FSET? ,PRSO ,FL-LOCKED>\n\t\t\t>\n\t\t\t<TELL The+verb ,PRSO \"are\" \" locked.\" CR>\n\t\t)\n\t\t(<AND ,PRSI\n\t\t\t\t<NOT <RT-MATCH-KEY ,PRSO ,PRSI>>\n\t\t\t>\n\t\t\t<TELL The ,WINNER \" can't open\" the ,PRSO \" with\" the ,PRSI \".\" CR>\n\t\t)\n\t\t(T\n\t\t\t<RT-OPEN-DOOR-MSG ,PRSO ,PRSI>\n\t\t)\n\t>\n>"
  },
  "V-PLUG-IN": {
   "name": "V-PLUG-IN",
   "file": "verbs.zil",
   "line": 1567,
   "endLine": 1569,
   "source": "<ROUTINE V-PLUG-IN ()\n\t<TELL TAB The ,WINNER \" can't plug in\" the ,PRSO \".\" CR>\n>"
  },
  "V-PULL": {
   "name": "V-PULL",
   "file": "verbs.zil",
   "line": 1571,
   "endLine": 1573,
   "source": "<ROUTINE V-PULL ()\n\t<TELL \"\tYou pull\" the ,PRSO \", but nothing happens.\" CR>\n>"
  },
  "V-PUSH": {
   "name": "V-PUSH",
   "file": "verbs.zil",
   "line": 1575,
   "endLine": 1577,
   "source": "<ROUTINE V-PUSH ()\n\t<TELL \"\tYou push\" the ,PRSO \", but nothing happens.\" CR>\n>"
  },
  "PRE-PUT": {
   "name": "PRE-PUT",
   "file": "verbs.zil",
   "line": 1579,
   "endLine": 1600,
   "source": "<ROUTINE PRE-PUT ()\n\t<COND\n\t;\t(<MC-PRSO? ,HEAD ,HANDS>\n\t\t\t<WONT-HELP>\n\t\t\t<RTRUE>\n\t\t)\n\t\t(<IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t\t<NOT-HERE ,PRSO>\n\t\t\t<RTRUE>\n\t\t)\n\t\t(<MC-PRSI? ,TH-GROUND ,GLOBAL-HERE <>>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<IN? ,PRSI ,GLOBAL-OBJECTS>\n\t\t\t<NOT-HERE ,PRSI>\n\t\t\t<RTRUE>\n\t\t)\n\t\t(<HELD? ,PRSI ,PRSO>\n\t\t\t<RT-YOU-CANT-MSG \"put\" ,PRSI \"in it\">\n\t\t)\n\t>\n>"
  },
  "V-PUT": {
   "name": "V-PUT",
   "file": "verbs.zil",
   "line": 1602,
   "endLine": 1616,
   "source": "<ROUTINE V-PUT ()\n\t<COND\n\t;\t(<FSET? ,PRSI ,FL-PERSON>\n\t\t\t<SETG WINNER ,PRSI>\n\t\t\t<PERFORM ,V?WEAR ,PRSO>\n\t\t\t<RTRUE>\n\t\t)\n\t\t(<NOT <FSET? ,PRSI ,FL-SURFACE>>\n\t\t\t<TELL \"There's no good surface on\" the ,PRSI \".\" CR>\n\t\t)\n\t\t(T\n\t\t\t<RT-PUT-ON-OR-IN>\n\t\t)\n\t>\n>"
  },
  "TELL-FIND-NONE": {
   "name": "TELL-FIND-NONE",
   "file": "verbs.zil",
   "line": 1618,
   "endLine": 1626,
   "source": "<ROUTINE TELL-FIND-NONE (STR \"OPT\" (OBJ <>))\n\t<TELL \"You search for \" .STR>\n\t<COND\n\t\t(.OBJ\n\t\t\t<TELL a .OBJ>\n\t\t)\n\t>\n\t<TELL \" but find none.\" CR>\n>"
  },
  "PRE-PUT-IN": {
   "name": "PRE-PUT-IN",
   "file": "verbs.zil",
   "line": 1628,
   "endLine": 1657,
   "source": "<ROUTINE PRE-PUT-IN ()\n\t<COND\n\t\t(<MC-PRSI? ,PSEUDO-OBJECT>\n\t\t\t<RETURN <PRE-PUT>>\n\t\t)\n\t;\t(<MC-PRSI? ,TH-EYES ,TH-HANDS>\n\t\t\t<WONT-HELP>\n\t\t\t<RFATAL>\n\t\t)\n\t\t(<FSET? ,PRSI ,FL-READABLE>\n\t\t\t<WONT-HELP>\n\t\t\t<RFATAL>\n\t\t)\n\t\t(<NOT <FSET? ,PRSI ,FL-CONTAINER>>\n\t\t\t<TELL-FIND-NONE \"an opening in\" ,PRSI>\n\t\t\t<RFATAL>\n\t\t)\n\t>\n\t<COND\n\t\t(<NOT <FSET? ,PRSI ,FL-OPEN>>\n\t\t\t<COND\n\t\t\t\t(<FSET? ,PRSI ,FL-OPENABLE>\n\t\t\t\t\t<RT-FIRST-YOU-MSG \"open\" ,PRSI>\n\t\t\t\t\t<FSET ,PRSI ,FL-OPEN>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n\t<PRE-PUT>\n>"
  },
  "V-PUT-IN": {
   "name": "V-PUT-IN",
   "file": "verbs.zil",
   "line": 1659,
   "endLine": 1676,
   "source": "<ROUTINE V-PUT-IN ()\n\t<COND\n\t\t(<NOT <FSET? ,PRSI ,FL-OPEN>>\n\t\t\t<COND\n\t\t\t\t(<FSET? ,PRSI ,FL-OPENABLE>\n\t\t\t\t\t<TELL The+verb ,PRSI \"are\" \" closed\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL The ,WINNER \" can't open\" the ,PRSI>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL \".\" CR>\n\t\t)\n\t\t(T\n\t\t\t<RT-PUT-ON-OR-IN>\n\t\t)\n\t>\n>"
  },
  "RT-PUT-ON-OR-IN": {
   "name": "RT-PUT-ON-OR-IN",
   "file": "verbs.zil",
   "line": 1680,
   "endLine": 1746,
   "source": "<ROUTINE RT-PUT-ON-OR-IN ()\n\t<COND\n\t\t(<ZERO? ,PRSI>\n\t\t\t<RT-YOU-CANT-MSG>\n\t\t)\n\t\t(<MC-PRSO? ,PRSI>\n\t\t\t<HAR-HAR>\n\t\t)\n\t\t(<IN? ,PRSO ,PRSI>\n\t\t\t<RT-ALREADY-MSG ,PRSO>\n\t\t\t<TELL in ,PRSI the ,PRSI \".]\" CR>\n\t\t)\n\t\t(<RT-ROOM-IN-MSG? ,PRSO ,PRSI>\n\t\t\t<RTRUE>\n\t\t)\n\t\t(<AND <NOT <HELD? ,PRSO>>\n\t\t\t\t<NOT <ITAKE>>\n\t\t\t>\n\t\t\t<RTRUE>\n\t\t)\n\t\t(T\n\t\t\t<COND\n\t\t\t\t(<FSET? ,PRSO ,FL-WORN>\n\t\t\t\t\t<FCLEAR ,PRSO ,FL-WORN>\n\t\t\t\t\t<RT-FIRST-YOU-MSG \"take off\" ,PRSO>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<MOVE ,PRSO ,PRSI>\n\t\t\t<FSET ,PRSO ,FL-TOUCHED>\n\t\t;\t<COND\n\t\t\t\t(<VERB? PUT>\n\t\t\t\t\t<FSET ,PRSO ,FL-ON>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<FCLEAR ,PRSO ,FL-ON>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(<AND <FSET? ,PRSI ,FL-PERSON>\n\t\t\t\t\t\t<FSET? ,PRSO ,FL-CLOTHING>\n\t\t\t\t\t>\n\t\t\t\t\t<FSET ,PRSO ,FL-WORN>\n\t\t\t\t\t<TELL The+verb ,WINNER \"put\" \" on\" the ,PRSO>\n\t\t\t\t)\n\t\t\t\t(<G? ,P-MULT 1>\n\t\t\t\t\t<TELL \"Done\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL The+verb ,WINNER \"put\" the ,PRSO \" \">\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<OR\t<FSET? ,PRSI ,FL-SURFACE>\n\t\t\t\t\t\t\t\t<FSET? ,PRSI ,FL-PERSON>\n\t\t\t\t\t\t\t;\t<FSET? ,PRSO ,FL-ON>\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<TELL \"o\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL \"i\">\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<TELL \"nto\" the ,PRSI>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL \".\" CR>\n\t\t)\n\t>\n>"
  },
  "RT-TOTAL-SIZE": {
   "name": "RT-TOTAL-SIZE",
   "file": "verbs.zil",
   "line": 1748,
   "endLine": 1764,
   "source": "<ROUTINE RT-TOTAL-SIZE (OBJ1 \"AUX\" OBJ (TOTSIZ 0))\n\t<SET OBJ <FIRST? .OBJ1>>\n\t<REPEAT ()\n\t\t<COND\n\t\t\t(<MC-F? .OBJ>\n\t\t\t\t<RETURN>\n\t\t\t)\n\t\t\t(<FSET? .OBJ ,FL-WORN>\n\t\t\t)\n\t\t\t(T\n\t\t\t\t<SET TOTSIZ <+ .TOTSIZ <GETB <GETPT .OBJ ,P?SIZE> ,K-SIZ-SIZ>>>\n\t\t\t)\n\t\t>\n\t\t<SET OBJ <NEXT? .OBJ>>\n\t>\n\t<RETURN .TOTSIZ>\n>"
  },
  "RT-OBJ-TOO-LARGE?": {
   "name": "RT-OBJ-TOO-LARGE?",
   "file": "verbs.zil",
   "line": 1766,
   "endLine": 1780,
   "source": "<ROUTINE RT-OBJ-TOO-LARGE? (OBJ1 OBJ2 \"AUX\" CAP)\n\t<SET CAP <GETB <GETPT .OBJ2 ,P?SIZE> ,K-SIZ-CAP>>\n\t<COND\n\t\t(<EQUAL? .CAP ,K-CAP-MAX>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<G?\t<+ <GETB <GETPT .OBJ1 ,P?SIZE> ,K-SIZ-SIZ>\t; \"Size\"\n\t\t\t\t\t<RT-TOTAL-SIZE .OBJ2>\n\t\t\t\t>\n\t\t\t\t.CAP\n\t\t\t>\n\t\t\t<RTRUE>\n\t\t)\n\t>\n>"
  },
  "RT-ROOM-IN-MSG?": {
   "name": "RT-ROOM-IN-MSG?",
   "file": "verbs.zil",
   "line": 1782,
   "endLine": 1788,
   "source": "<ROUTINE RT-ROOM-IN-MSG? (OBJ1 OBJ2)\n\t<COND\n\t\t(<RT-OBJ-TOO-LARGE? .OBJ1 .OBJ2>\n\t\t\t<TELL \"There is not enough room\" in .OBJ2 the .OBJ2 \".\" CR>\n\t\t)\n\t>\n>"
  },
  "RT-CHECK-MOVE-MSG?": {
   "name": "RT-CHECK-MOVE-MSG?",
   "file": "verbs.zil",
   "line": 1790,
   "endLine": 1826,
   "source": "<ROUTINE RT-CHECK-MOVE-MSG? (SRC DEST \"AUX\" PTR OLOC CNT)\n\t<COND\n\t\t(.DEST\n\t\t\t<SET PTR ,GL-LOC-TRAIL>\n\t\t\t<SET OLOC .DEST>\n\t\t\t<REPEAT ()\n\t\t\t\t<ZPUT .PTR 0 .OLOC>\n\t\t\t\t<INC CNT>\n\t\t\t\t<COND\n\t\t\t\t\t(<OR\t<MC-F? .OLOC>\n\t\t\t\t\t\t\t<IN? .OLOC ,ROOMS>\n\t\t\t\t\t\t\t<IN? .OLOC ,LOCAL-GLOBALS>\n\t\t\t\t\t\t\t<IN? .OLOC ,GLOBAL-OBJECTS>\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<SET OLOC <LOC .OLOC>>\n\t\t\t\t<SET PTR <ZREST .PTR 2>>\n\t\t\t\t<COND\n\t\t\t\t\t(<EQUAL? .OLOC .DEST>\n\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(<INTBL? .SRC ,GL-LOC-TRAIL .CNT>\n\t\t\t\t\t<TELL\nThe ,WINNER \" can't put\" the .SRC in .SRC him .SRC \"self, or\" in .SRC\n\"something that is already\" in .SRC him .SRC \".\" CR\n\t\t\t\t\t>\n\t\t\t\t\t<RTRUE>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n>"
  },
  "V-REACH-BEHIND": {
   "name": "V-REACH-BEHIND",
   "file": "verbs.zil",
   "line": 1832,
   "endLine": 1835,
   "source": "<ROUTINE V-REACH-BEHIND ()\n\t<TELL \"['Reach behind' currently has no default handling.]|\">\n\t<RFATAL>\n>"
  },
  "V-REACH-IN": {
   "name": "V-REACH-IN",
   "file": "verbs.zil",
   "line": 1837,
   "endLine": 1840,
   "source": "<ROUTINE V-REACH-IN ()\n\t<TELL \"['Reach in' currently has no default handling.]|\">\n\t<RFATAL>\n>"
  },
  "V-REACH-UNDER": {
   "name": "V-REACH-UNDER",
   "file": "verbs.zil",
   "line": 1842,
   "endLine": 1845,
   "source": "<ROUTINE V-REACH-UNDER ()\n\t<TELL \"['Reach under' currently has no default handling.]|\">\n\t<RFATAL>\n>"
  },
  "V-READ": {
   "name": "V-READ",
   "file": "verbs.zil",
   "line": 1847,
   "endLine": 1850,
   "source": "<ROUTINE V-READ ()\n\t<TELL \"['Read' currently has no default handling.]|\">\n\t<RFATAL>\n>"
  },
  "V-SHOW": {
   "name": "V-SHOW",
   "file": "verbs.zil",
   "line": 1856,
   "endLine": 1858,
   "source": "<ROUTINE V-SHOW ()\n\t<TELL The+verb ,PRSI \"seem\" \" unimpressed by\" the ,PRSO \".\" CR>\n>"
  },
  "V-SHOW-SWP": {
   "name": "V-SHOW-SWP",
   "file": "verbs.zil",
   "line": 1860,
   "endLine": 1862,
   "source": "<ROUTINE V-SHOW-SWP ()\n\t<PERFORM ,V?SHOW ,PRSI ,PRSO>\n>"
  },
  "V-SIT": {
   "name": "V-SIT",
   "file": "verbs.zil",
   "line": 1864,
   "endLine": 1871,
   "source": "<ROUTINE V-SIT (\"AUX\" (OBJ ,PRSO))\n\t<COND\n\t\t(<MC-PRSO? ,ROOMS>\n\t\t\t<SET OBJ ,TH-GROUND>\n\t\t)\n\t>\n\t<RT-NO-POINT-MSG \"Sitting on\" .OBJ>\n>"
  },
  "ITAKE": {
   "name": "ITAKE",
   "file": "verbs.zil",
   "line": 1877,
   "endLine": 1957,
   "source": "<ROUTINE ITAKE (\"OPT\" (OB <>) (V? T) \"AUX\" CNT OBJ L)\n\t<COND\n\t\t(<ZERO? .OB>\n\t\t\t<SET OB ,PRSO>\n\t\t)\n\t>\n\t<SET L <LOC .OB>>\n\t<COND\n\t\t(<OR\t<NOT <FSET? .OB ,FL-TAKEABLE>>\n\t\t\t;\t<NOT <ACCESSIBLE? .OB>>\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(.V?\n\t\t\t\t\t<RT-YOU-CANT-MSG \"take\">\n\t\t\t\t)\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<RT-OBJ-TOO-LARGE? .OB ,WINNER>\n\t\t\t<COND\n\t\t\t;\t(.FORCED?\n\t\t\t\t\t<TELL \"As\" the+verb ,WINNER \"reach\" \" for\" the .OB>\n\t\t\t\t\t<SET CNT 0>\n\t\t\t\t\t<REPEAT ((1ST? T))\n\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t(<NOT <RT-OBJ-TOO-LARGE? .OB ,WINNER>>\n\t\t\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t(<SET OBJ <FIND-FLAG-NOT ,WINNER ,FL-WORN>>\n\t\t\t\t\t\t\t\t<MOVE .OBJ ,HERE>\n\t\t\t\t\t\t\t\t<INC CNT>\n\t\t\t\t\t\t\t\t<TELL \",\" the .OBJ>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t>\n\t\t\t\t\t>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<EQUAL? .CNT 1>\n\t\t\t\t\t\t\t<TELL verb .OBJ \"slip\">\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL \" slip\">\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<TELL \" to\" the ,TH-GROUND \".\" CR>\n\t\t\t\t\t<RT-DO-TAKE .OB>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(.V?\n\t\t\t\t\t\t\t<TELL The+verb ,WINNER \"are\" \" holding too much.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<RFALSE>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t;\t(<AND <G? <SET CNT <CCOUNT ,WINNER>> ,FUMBLE-NUMBER>\n\t\t\t\t<PROB <* .CNT ,FUMBLE-PROB>>\n\t\t\t\t<SET OBJ <FIND-FLAG-NOT ,WINNER ,FL-WORN>>\n\t\t\t>\n\t\t\t<TELL\nThe .OBJ \" slips from\" his ,WINNER \" arms while\" he+verb ,WINNER \"are\"\n\" taking\" the .OB \", and both tumble to\" the ,TH-GROUND \". \"\nThe+verb ,WINNER \"are\" \" carrying too many things.\" CR\n\t\t\t>\n\t\t\t<MOVE .OBJ ,HERE>\n\t\t\t<MOVE .OB ,HERE>\n\t\t\t<RFATAL>\n\t\t)\n\t\t(T\n\t\t\t<COND\n\t\t\t\t(<AND <NOT <VERB? TAKE>>\n\t\t\t\t\t\t<NOT <EQUAL? .L ,WINNER>>\n\t\t\t\t\t>\n\t\t\t\t\t<RT-FIRST-YOU-MSG \"take\" .OB .L>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<RT-DO-TAKE .OB>\n\t\t)\n\t>\n>"
  },
  "RT-DO-TAKE": {
   "name": "RT-DO-TAKE",
   "file": "verbs.zil",
   "line": 1959,
   "endLine": 1968,
   "source": "<ROUTINE RT-DO-TAKE (OBJ \"OPT\" (FORCED? <>) \"AUX\" L)\n\t<SET L <LOC .OBJ>>\n\t<MOVE .OBJ ,WINNER>\n\t<FSET .OBJ ,FL-SEEN>\n\t<FSET .OBJ ,FL-TOUCHED>\n\t<FCLEAR .OBJ ,FL-NO-DESC>\n\t<FCLEAR .OBJ ,FL-INVISIBLE>\n\t<FCLEAR .OBJ ,FL-WORN>\n\t<RTRUE>\n>"
  },
  "PRE-TAKE": {
   "name": "PRE-TAKE",
   "file": "verbs.zil",
   "line": 1970,
   "endLine": 2029,
   "source": "<ROUTINE PRE-TAKE (\"AUX\" L)\n\t<COND\n\t\t(<MC-PRSO? ,TH-HANDS ,YOU>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<==? <SET L <LOC ,PRSO>> ,GLOBAL-OBJECTS>\n\t\t\t<NOT-HERE ,PRSO>\n\t\t)\n\t\t(<RT-META-IN? ,WINNER ,PRSO>\n\t\t\t<RT-ALREADY-MSG ,WINNER>\n\t\t\t<TELL in ,PRSO the ,PRSO \".]\" CR>\n\t\t)\n\t\t(<AND .L\n\t\t\t\t<OR\n\t\t\t\t\t<NOT <FSET? .L ,FL-SURFACE>>\n\t\t\t\t;\t<NOT <FSET? ,PRSO ,FL-ON>>\n\t\t\t\t>\n\t\t\t\t<FSET? .L ,FL-OPENABLE>\n\t\t\t\t<NOT <FSET? .L ,FL-OPEN>>\n\t\t\t>\n\t\t\t<TELL The+verb .L \"are\" \" closed.\" CR>\n\t\t\t<RTRUE>\n\t\t)\n\t\t(<VERB? TAKE-WITH>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(,PRSI\n\t\t\t<COND\n\t\t\t\t(<EQUAL? ,PRSI .L>\n\t\t\t\t\t<SETG PRSI <>>\n\t\t\t\t\t<RFALSE>\n\t\t\t\t)\n\t\t\t\t(<AND <OR\n\t\t\t\t\t\t\t<NOT <FSET? .L ,FL-SURFACE>>\n\t\t\t\t\t\t;\t<NOT <FSET? ,PRSO ,FL-ON>>\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<FSET? ,PRSI ,FL-OPENABLE>\n\t\t\t\t\t\t<NOT <FSET? ,PRSI ,FL-OPEN>>\n\t\t\t\t\t>\n\t\t\t\t\t<TELL The+verb ,PRSI \"are\" \" closed.\" CR>\n\t\t\t\t\t<RTRUE>\n\t\t\t\t)\n\t\t\t\t(<NOT <==? ,PRSI .L>>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<FSET? ,PRSI ,FL-PERSON>\n\t\t\t\t\t\t\t<TELL The+verb ,PRSI \"do\" \"n't have\" the ,PRSO>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL The+verb ,PRSO \"are\" \"n't\" in ,PRSI the ,PRSI>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t\t<TELL \".\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(T\n\t\t\t<PRE-TAKE-WITH>\n\t\t)\n\t>\n>"
  },
  "PRE-TAKE-WITH": {
   "name": "PRE-TAKE-WITH",
   "file": "verbs.zil",
   "line": 2031,
   "endLine": 2063,
   "source": "<ROUTINE PRE-TAKE-WITH (\"AUX\" X)\n\t<COND\n\t\t(<MC-PRSO? ,YOU>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(<EQUAL? <META-LOC ,PRSO> ,GLOBAL-OBJECTS>\n\t\t\t<COND\n\t\t\t\t(<AND <NOT <HELD? ,PRSO>>\n\t\t\t\t\t\t<NOT <FSET? ,PRSO ,FL-PERSON>>\n\t\t\t\t\t>\n\t\t\t\t\t<NOT-HERE ,PRSO>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<IN? ,PRSO ,WINNER>\n\t\t\t<RT-ALREADY-MSG ,PLAYER>\n\t\t\t<TELL \" holding\" the ,PRSO \".]\" CR>\n\t\t)\n\t\t(<AND <FSET? <LOC ,PRSO> ,FL-CONTAINER>\n\t\t\t\t<OR\n\t\t\t\t\t<NOT <FSET? <LOC ,PRSO> ,FL-SURFACE>>\n\t\t\t\t;\t<NOT <FSET? ,PRSO ,FL-ON>>\n\t\t\t\t>\n\t\t\t\t<NOT <FSET? <LOC ,PRSO> ,FL-OPEN>>\n\t\t\t>\n\t\t\t<RT-YOU-CANT-MSG \"reach\">\n\t\t)\n\t\t(<IN? ,WINNER ,PRSO>\n\t\t\t<SETG CLOCK-WAIT T>\n\t\t\t<TELL \"[\" The+verb ,WINNER \"are\" in ,PRSO the ,PRSO \".]\" CR>\n\t\t)\n\t>\n>"
  },
  "V-TAKE": {
   "name": "V-TAKE",
   "file": "verbs.zil",
   "line": 2065,
   "endLine": 2101,
   "source": "<ROUTINE V-TAKE (\"AUX\" L V)\n\t<SET L <LOC ,PRSO>>\n\t<SET V <ITAKE>>\n\t<COND\n\t\t(<EQUAL? .V ,M-FATAL>\n\t\t\t<RFATAL>\n\t\t)\n\t\t(.V\n\t\t\t<COND\n\t\t\t\t(<G? ,P-MULT 1>\n\t\t\t\t\t<TELL \"Taken\">\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL The+verb ,WINNER \"take\" the ,PRSO>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<AND <NOT <IN? .L ,ROOMS>>\n\t\t\t\t\t\t\t\t<NOT <EQUAL? .L ,GLOBAL-OBJECTS ,LOCAL-GLOBALS>>\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<TELL \" from\">\n\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t(<AND <EQUAL? .L ,PLAYER>\n\t\t\t\t\t\t\t\t\t\t<NOT <EQUAL? ,WINNER ,PLAYER>>\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<TELL \" you\">\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t\t\t<TELL the .L>\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<TELL \".\" CR>\n\t\t)\n\t>\n>"
  },
  "V-TAKE-WITH": {
   "name": "V-TAKE-WITH",
   "file": "verbs.zil",
   "line": 2103,
   "endLine": 2106,
   "source": "<ROUTINE V-TAKE-WITH ()\n\t<TELL \"['Take with' currently has no default handling.]|\">\n\t<RFATAL>\n>"
  },
  "V-TALK-TO": {
   "name": "V-TALK-TO",
   "file": "verbs.zil",
   "line": 2108,
   "endLine": 2111,
   "source": "<ROUTINE V-TALK-TO ()\n\t<TELL \"['Talk to' currently has no default handling.]|\">\n\t<RFATAL>\n>"
  },
  "V-TELL": {
   "name": "V-TELL",
   "file": "verbs.zil",
   "line": 2113,
   "endLine": 2159,
   "source": "<ROUTINE V-TELL ()\n\t<COND\n\t\t(<EQUAL? ,PRSO ,PLAYER>\n\t\t\t<COND\n\t\t\t\t(,QCONTEXT\n\t\t\t\t\t<SETG QCONTEXT <>>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(,P-CONT\n\t\t\t\t\t\t\t<SETG WINNER ,PLAYER>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL \"Okay, you're not talking to anyone else.\" CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<WONT-HELP-TO-TALK-TO ,PLAYER>\n\t\t\t\t;\t<SETG QUOTE-FLAG <>>\n\t\t\t\t\t<SETG P-CONT <>>\n\t\t\t\t\t<RFATAL>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<FSET? ,PRSO ,FL-ALIVE>\n\t\t\t<SETG QCONTEXT ,PRSO>\n\t\t\t<COND\n\t\t\t\t(,P-CONT\n\t\t\t\t\t<SETG CLOCK-WAIT T>\n\t\t\t\t\t<SETG WINNER ,PRSO>\n\t\t\t\t\t<RFALSE>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL\nThe+verb ,PRSO \"look\" \" at you expectantly, as if you seemed to be about to\ntalk.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(T\n\t\t\t<WONT-HELP-TO-TALK-TO ,PRSO>\n\t\t;\t<SETG QUOTE-FLAG <>>\n\t\t\t<SETG P-CONT <>>\n\t\t\t<RFATAL>\n\t\t)\n\t>\n>"
  },
  "WONT-HELP-TO-TALK-TO": {
   "name": "WONT-HELP-TO-TALK-TO",
   "file": "verbs.zil",
   "line": 2161,
   "endLine": 2163,
   "source": "<ROUTINE WONT-HELP-TO-TALK-TO (OBJ)\n\t<TELL \"Talking to\" the .OBJ \" won't help one bit.\" CR>\n>"
  },
  "V-TELL-ABOUT": {
   "name": "V-TELL-ABOUT",
   "file": "verbs.zil",
   "line": 2165,
   "endLine": 2202,
   "source": "<ROUTINE V-TELL-ABOUT (\"AUX\" PERSON)\n\t<COND\n\t\t(<MC-PRSO? ,CH-PLAYER>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? ,WINNER ,CH-PLAYER>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<OR\t<SET PERSON <FIND-FLAG ,HERE ,FL-PERSON ,CH-PLAYER>>\n\t\t\t\t\t\t\t\t<SET PERSON <FIND-FLAG ,HERE ,FL-ALIVE ,CH-PLAYER>>\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<PERFORM ,V?ASK-ABOUT .PERSON ,PRSI>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<TELL ,K-TALK-TO-SELF-MSG CR>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<SET PERSON ,WINNER>\n\t\t\t\t\t<SETG WINNER ,CH-PLAYER>\n\t\t\t\t\t<PERFORM ,V?ASK-ABOUT .PERSON ,PRSI>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<RTRUE>\n\t\t)\n\t\t(<NOT <FSET? ,PRSO ,FL-ALIVE>>\n\t\t\t<TELL The ,WINNER \"can't tell anything to\" the ,PRSO \".\" CR>\n\t\t)\n\t\t(<FSET? ,PRSO ,FL-ASLEEP>\n\t\t\t<TELL\n\"Talking to\" the ,PRSO \" in\" his ,PRSO \" current condition would be a waste\nof time.\" CR\n\t\t\t>\n\t\t)\n\t\t(T\n\t\t\t<TELL The+verb ,PRSO \"shrug\" \" indifferently.\" CR>\n\t\t)\n\t>\n>"
  },
  "V-THANK": {
   "name": "V-THANK",
   "file": "verbs.zil",
   "line": 2204,
   "endLine": 2226,
   "source": "<ROUTINE V-THANK ()\n\t<COND\n\t\t(<EQUAL? ,WINNER ,CH-PLAYER>\n\t\t\t<COND\n\t\t\t\t(<MC-PRSO? ,CH-PLAYER>\n\t\t\t\t\t<TELL \"Patting yourself on the back won't help.\" CR>\n\t\t\t\t)\n\t\t\t\t(<FSET? ,PRSO ,FL-ASLEEP>\n\t\t\t\t\t<TELL\nThe+verb ,PRSO \"is\" \"n't in any condition to accept your thanks.\" CR\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"\\\"You're welcome.\\\"\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(T\n\t\t\t<RT-FOOLISH-TO-TALK?>\n\t\t\t<RTRUE>\n\t\t)\n\t>\n>"
  },
  "V-TIE-TO": {
   "name": "V-TIE-TO",
   "file": "verbs.zil",
   "line": 2228,
   "endLine": 2230,
   "source": "<ROUTINE V-TIE-TO ()\n\t<TELL \"You can't tie\" the ,PRSO \" to\" the ,PRSI \".\" CR>\n>"
  },
  "V-TURN": {
   "name": "V-TURN",
   "file": "verbs.zil",
   "line": 2232,
   "endLine": 2235,
   "source": "<ROUTINE V-TURN ()\n\t<TELL \"['Turn' currently has no default handling.]|\">\n\t<RFATAL>\n>"
  },
  "V-TURN-OFF": {
   "name": "V-TURN-OFF",
   "file": "verbs.zil",
   "line": 2237,
   "endLine": 2240,
   "source": "<ROUTINE V-TURN-OFF ()\n\t<TELL \"['Turn off' currently has no default handling.]|\">\n\t<RFATAL>\n>"
  },
  "V-TURN-ON": {
   "name": "V-TURN-ON",
   "file": "verbs.zil",
   "line": 2242,
   "endLine": 2245,
   "source": "<ROUTINE V-TURN-ON ()\n\t<TELL \"['Turn on' currently has no default handling.]|\">\n\t<RFATAL>\n>"
  },
  "V-TURN-TO": {
   "name": "V-TURN-TO",
   "file": "verbs.zil",
   "line": 2247,
   "endLine": 2250,
   "source": "<ROUTINE V-TURN-TO ()\n\t<TELL \"['Turn to' currently has no default handling.]|\">\n\t<RFATAL>\n>"
  },
  "V-UNDO": {
   "name": "V-UNDO",
   "file": "verbs.zil",
   "line": 2256,
   "endLine": 2271,
   "source": "<ROUTINE V-UNDO ()\n\t<COND\n\t\t(,P-CAN-UNDO\n\t\t\t<SETG GL-SL-HERE <>>\n\t\t\t<COND\n\t\t\t\t(<ZERO? <IRESTORE>>\n\t\t\t\t\t<TELL \"[UNDO failed.]\" CR>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL \"[UNDO is not available.]\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<RTRUE>\n\t\t)\n\t>\n>"
  },
  "V-UNLOCK": {
   "name": "V-UNLOCK",
   "file": "verbs.zil",
   "line": 2273,
   "endLine": 2294,
   "source": "<ROUTINE V-UNLOCK ()\n\t<COND\n\t;\t(<EQUAL? ,P-PRSA-WORD ,W?UNBAR>\n\t\t\t<TELL The+verb ,PRSO \"are\" \"n't barred.\" CR>\n\t\t)\n\t\t(<NOT <FSET? ,PRSO ,FL-OPENABLE>>\n\t\t\t<RT-YOU-CANT-MSG>\n\t\t)\n\t\t(<FSET? ,PRSO ,FL-OPEN>\n\t\t\t<RT-ALREADY-MSG ,PRSO \"open\">\n\t\t)\n\t\t(<NOT <FSET? ,PRSO ,FL-LOCKED>>\n\t\t\t<RT-ALREADY-MSG ,PRSO \"unlocked\">\n\t\t)\n\t\t(<NOT <RT-MATCH-KEY ,PRSO ,PRSI>>\n\t\t\t<TELL The ,WINNER \" can't unlock\" the ,PRSO \" with\" the ,PRSI !\\. CR>\n\t\t)\n\t\t(T\n\t\t\t<RT-OPEN-DOOR-MSG ,PRSO ,PRSI>\n\t\t)\n\t>\n>"
  },
  "V-UNWEAR": {
   "name": "V-UNWEAR",
   "file": "verbs.zil",
   "line": 2296,
   "endLine": 2313,
   "source": "<ROUTINE V-UNWEAR ()\n\t<COND\n\t\t(<IN? ,PRSO ,WINNER>\n\t\t\t<COND\n\t\t\t\t(<FSET? ,PRSO ,FL-WORN>\n\t\t\t\t\t<FCLEAR ,PRSO ,FL-WORN>\n\t\t\t\t\t<TELL The+verb ,WINNER \"take\" \" off\" the ,PRSO \".\" CR>\n\t\t\t\t)\n\t\t\t\t(T\n\t\t\t\t\t<TELL The+verb ,WINNER \"are\" \"n't wearing\" the ,PRSO \".\" CR>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(T\n\t\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t)\n\t>\n>"
  },
  "V-WAIT": {
   "name": "V-WAIT",
   "file": "verbs.zil",
   "line": 2319,
   "endLine": 2390,
   "source": "<ROUTINE V-WAIT (\"AUX\" (N -1) (ABS? <>))\n\t<COND\n\t\t(<NOT ,PRSO>\n\t\t\t<SET N 20>\n\t\t)\n\t\t(<MC-PRSO? ,INTNUM>\n\t\t\t<COND\n\t\t\t\t(<G? ,P-NUMBER 0>\n\t\t\t\t\t<SET N <* ,P-NUMBER 2>>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<MC-PRSO? ,TH-TIME>\n\t\t\t<COND\n\t\t\t\t(<NOUN-USED? ,PRSO ,W?TURN ,W?TURNS>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<AND <ADJ-USED? ,PRSO ,W?INT.NUM>\n\t\t\t\t\t\t\t\t<G? ,P-NUMBER 0>\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<SET N ,P-NUMBER>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<SET N 1>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<NOUN-USED? ,PRSO ,W?MIN ,W?MINUTE ,W?MINUTES>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<AND <ADJ-USED? ,PRSO ,W?INT.NUM>\n\t\t\t\t\t\t\t\t<G? ,P-NUMBER 0>\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<SET N <* ,P-NUMBER 2>>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<SET N 2>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<NOUN-USED? ,PRSO ,W?HOUR ,W?HOURS>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<AND <ADJ-USED? ,PRSO ,W?INT.NUM>\n\t\t\t\t\t\t\t\t<G? ,P-NUMBER 0>\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<SET N <* ,P-NUMBER 120>>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<SET N 120>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(T\n\t\t\t<TELL \"[You can't wait for\" the ,PRSO \".]|\">\n\t\t\t<RFATAL>\n\t\t)\n\t>\n\t<COND\n\t\t(<G? .N 0>\n\t\t\t<SETG GL-MOVES <+ ,GL-MOVES <- .N 1>>>\n\t\t\t<TELL ,K-TIME-PASSES-MSG>\n\t\t)\n\t\t(.ABS?\n\t\t\t<TELL \"[That time has already passed.]|\">\n\t\t\t<RFATAL>\n\t\t)\n\t\t(T\n\t\t\t<TELL \"[You can't wait for that.]|\">\n\t\t\t<RFATAL>\n\t\t)\n\t>\n>"
  },
  "RT-FIND-DIR": {
   "name": "RT-FIND-DIR",
   "file": "verbs.zil",
   "line": 2392,
   "endLine": 2445,
   "source": "<ROUTINE RT-FIND-DIR (RM \"OPT\" (L <LOC ,WINNER>) \"AUX\" (P 0) OD)\n\t<SET OD ,P-WALK-DIR>\n\t<REPEAT (OBJ PT PTS)\n\t\t<COND\n\t\t\t(<OR\t<ZERO? <SET P <NEXTP .L .P>>>\n\t\t\t\t\t<L? .P ,LOW-DIRECTION>\n\t\t\t\t>\n\t\t\t\t<RFALSE>\n\t\t\t)\n\t\t>\n\t\t<SETG P-WALK-DIR .P>\n\t\t<COND\n\t\t\t(<SET PT <GETPT .L .P>>\n\t\t\t\t<SET PTS <PTSIZE .PT>>\n\t\t\t\t<COND\n\t\t\t\t\t(<EQUAL? .PTS ,UEXIT>\n\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t(<EQUAL? .RM <GET/B .PT ,REXIT>>\n\t\t\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t>\n\t\t\t\t\t)\n\t\t\t\t\t(<EQUAL? .PTS ,FEXIT>\n\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t(<EQUAL? .RM <APPLY <GET .PT ,FEXITFCN> T>>\n\t\t\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t>\n\t\t\t\t\t)\n\t\t\t\t\t(<EQUAL? .PTS ,CEXIT>\n\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t(<EQUAL? .RM <GET/B .PT ,REXIT>>\n\t\t\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t>\n\t\t\t\t\t)\n\t\t\t\t\t(<EQUAL? .PTS ,DEXIT>\n\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t(<EQUAL? .RM <GET/B .PT ,REXIT>>\n\t\t\t\t\t\t\t\t<COND\n\t\t\t\t\t\t\t\t\t(<SET OBJ <GET/B .PT ,DEXITOBJ>>\n\t\t\t\t\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t)\n\t\t>\n\t>\n\t<SETG P-WALK-DIR .OD>\n\t<RETURN .P>\n>"
  },
  "RT-FIND-ROOM": {
   "name": "RT-FIND-ROOM",
   "file": "verbs.zil",
   "line": 2447,
   "endLine": 2465,
   "source": "<ROUTINE RT-FIND-ROOM (DIR \"OPT\" (L <LOC ,WINNER>) \"AUX\" OD (RM <>) PT PTS)\n\t<COND\n\t\t(<SET PT <GETPT .L .DIR>>\n\t\t\t<SET PTS <PTSIZE .PT>>\n\t\t\t<COND\n\t\t\t\t(<EQUAL? .PTS ,UEXIT ,CEXIT ,DEXIT>\n\t\t\t\t\t<SET RM <GET/B .PT ,REXIT>>\n\t\t\t\t)\n\t\t\t\t(<EQUAL? .PTS ,FEXIT>\n\t\t\t\t\t<SET OD ,P-WALK-DIR>\n\t\t\t\t\t<SETG P-WALK-DIR .DIR>\n\t\t\t\t\t<SET RM <APPLY <GET .PT ,FEXITFCN> T>>\n\t\t\t\t\t<SETG P-WALK-DIR .OD>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n\t<RETURN .RM>\n>"
  },
  "RT-SET-PUPPY": {
   "name": "RT-SET-PUPPY",
   "file": "verbs.zil",
   "line": 2469,
   "endLine": 2477,
   "source": "<ROUTINE RT-SET-PUPPY (OBJ)\n\t<COND\n\t\t(,GL-PUPPY\n\t\t\t<FCLEAR ,GL-PUPPY ,FL-NO-DESC>\n\t\t)\n\t>\n\t<SETG GL-PUPPY .OBJ>\n\t<FSET ,GL-PUPPY ,FL-NO-DESC>\n>"
  },
  "RT-CLEAR-PUPPY": {
   "name": "RT-CLEAR-PUPPY",
   "file": "verbs.zil",
   "line": 2479,
   "endLine": 2487,
   "source": "<ROUTINE RT-CLEAR-PUPPY ()\n\t<COND\n\t\t(,GL-PUPPY\n\t\t\t<FCLEAR ,GL-PUPPY ,FL-NO-DESC>\n\t\t\t<SETG GL-PUPPY <>>\n\t\t)\n\t>\n\t<RTRUE>\n>"
  },
  "V-WALK": {
   "name": "V-WALK",
   "file": "verbs.zil",
   "line": 2489,
   "endLine": 2556,
   "source": "<ROUTINE V-WALK (\"AUX\" PT PTS STR RM)\n\t<COND\n\t\t(<ZERO? ,P-WALK-DIR>\n\t\t\t<V-WALK-AROUND>\n\t\t\t<RFATAL>\n\t\t)\n\t>\n\t<COND\n\t\t(<SET PT <GETPT <LOC ,WINNER> ,PRSO>>\n\t\t\t<COND\n\t\t\t\t(<==? <SET PTS <PTSIZE .PT>> ,UEXIT>\n\t\t\t\t\t<RT-GOTO <GET/B .PT ,REXIT>>\n\t\t\t\t\t<RTRUE>\n\t\t\t\t)\n\t\t\t\t(<==? .PTS ,NEXIT>\n\t\t\t\t\t<SETG CLOCK-WAIT T>\n\t\t\t\t\t<TELL <GET .PT ,NEXITSTR> CR>\n\t\t\t\t\t<RFATAL>\n\t\t\t\t)\n\t\t\t\t(<==? .PTS ,FEXIT>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<SET RM <APPLY <GET .PT ,FEXITFCN>>>\n\t\t\t\t\t\t\t<RT-GOTO .RM>\n\t\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<RFATAL>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<==? .PTS ,CEXIT>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<VALUE <GETB .PT ,CEXITFLAG>>\n\t\t\t\t\t\t\t<RT-GOTO <GET/B .PT ,REXIT>>\n\t\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(<SET STR <GET .PT ,CEXITSTR>>\n\t\t\t\t\t\t\t<TELL .STR CR>\n\t\t\t\t\t\t\t<RFATAL>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<RT-YOU-CANT-MSG \"go\">\n\t\t\t\t\t\t\t<RFATAL>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t\t(<==? .PTS ,DEXIT>\n\t\t\t\t\t<COND\n\t\t\t\t\t\t(<WALK-THRU-DOOR? .PT>\n\t\t\t\t\t\t\t<RT-GOTO <GET/B .PT ,REXIT>>\n\t\t\t\t\t\t\t<RTRUE>\n\t\t\t\t\t\t)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t\t<RFATAL>\n\t\t\t\t\t\t)\n\t\t\t\t\t>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t\t(<EQUAL? ,PRSO ,P?IN ,P?OUT>\n\t\t\t<V-WALK-AROUND>\n\t\t)\n\t\t(T\n\t\t\t<RT-YOU-CANT-MSG \"go\">\n\t\t\t<RFATAL>\n\t\t)\n\t>\n>"
  },
  "WALK-THRU-DOOR?": {
   "name": "WALK-THRU-DOOR?",
   "file": "verbs.zil",
   "line": 2558,
   "endLine": 2583,
   "source": "<ROUTINE WALK-THRU-DOOR? (PT \"OPT\" (OBJ 0) (TELL? T) \"AUX\" RM)\n\t<COND\n\t\t(<ZERO? .OBJ>\n\t\t\t<SET OBJ <GET/B .PT ,DEXITOBJ>>\n\t\t)\n\t>\n\t<COND\n\t\t(<FSET? .OBJ ,FL-OPEN>\n\t\t\t<RTRUE>\n\t\t)\n\t\t(<AND .PT\n\t\t\t\t<SET RM <GET .PT ,DEXITSTR>>\n\t\t\t>\n\t\t\t<COND\n\t\t\t\t(.TELL?\n\t\t\t\t\t<TELL .RM CR>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<RFALSE>\n\t\t)\n\t\t(T\n\t\t\t<TELL The+verb .OBJ \"are\" \"n't open.\" CR>\n\t\t\t<RFALSE>\n\t\t)\n\t>\n>"
  },
  "RT-GOTO": {
   "name": "RT-GOTO",
   "file": "verbs.zil",
   "line": 2585,
   "endLine": 2620,
   "source": "<ROUTINE RT-GOTO (RM \"OPT\" (FORCED? <>))\n\t<COND\n\t\t(<IN? ,WINNER .RM>\n\t\t\t<RT-WALK-WITHIN-ROOM-MSG>\n\t\t\t<RFALSE>\n\t\t)\n\t>\n\t<COND\n\t\t(<APPLY <GETP ,HERE ,P?ACTION> ,M-EXIT>\n\t\t\t<COND\n\t\t\t\t(<NOT .FORCED?>\n\t\t\t\t\t<RFALSE>\n\t\t\t\t)\n\t\t\t>\n\t\t)\n\t>\n\t<MOVE ,WINNER .RM>\n\t<COND\n\t\t(<==? ,WINNER ,PLAYER>\n\t\t\t<COND\n\t\t\t\t(,GL-PUPPY\n\t\t\t\t\t<MOVE ,GL-PUPPY .RM>\n\t\t\t\t)\n\t\t\t>\n\t\t\t<SETG OHERE ,HERE>\n\t\t\t<SETG HERE .RM>\n\t\t\t<RT-ENTER-ROOM>\n\t\t)\n\t>\n\t<COND\n\t\t(,GL-PUPPY\n\t\t\t<TELL TAB The+verb ,GL-PUPPY \"follow\" \" you.\" CR>\n\t\t)\n\t>\n\t<RTRUE>\n>"
  },
  "RT-ENTER-ROOM": {
   "name": "RT-ENTER-ROOM",
   "file": "verbs.zil",
   "line": 2622,
   "endLine": 2671,
   "source": "<ROUTINE RT-ENTER-ROOM (\"AUX\" VAL CNT TBL)\n\t<SETG LIT <LIT?>>\n\t<DIROUT ,D-TABLE-ON ,K-DIROUT-TBL>\n\t<RT-ROOM-NAME-MSG>\n\t<DIROUT ,D-TABLE-OFF>\n\t<SET TBL <ZREST ,K-DIROUT-TBL 2>>\n\t<SET CNT <ZGET ,K-DIROUT-TBL 0>>\n\t<COND\n\t\t(<G? .CNT 0>\n\t\t\t<REPEAT ((I 0) C)\n\t\t\t\t<COND\n\t\t\t\t\t(<AND <G=? <SET C <GETB .TBL .I>> !\\a>\n\t\t\t\t\t\t\t<L=? .C !\\z>\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<PUTB .TBL .I <- .C 32>>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t\t<COND\n\t\t\t\t\t(<IGRTR? I .CNT>\n\t\t\t\t\t\t<RETURN>\n\t\t\t\t\t)\n\t\t\t\t>\n\t\t\t>\n\t\t)\n\t>\n\t<HLIGHT ,H-BOLD>\n\t<PRINTT .TBL .CNT>\n\t<HLIGHT ,H-NORMAL>\n\t<CRLF>\n;\t<COND\n\t\t(<OR\t<EQUAL? ,VERBOSITY 2>\n\t\t\t\t<AND\n\t\t\t\t\t<EQUAL? ,VERBOSITY 1>\n\t\t\t\t\t<NOT <FSET? ,HERE ,FL-TOUCHED>>\n\t\t\t\t>\n\t\t\t>\n\t\t\t<CRLF>\n\t\t)\n\t>\n\t<APPLY <GETP ,HERE ,P?ACTION> ,M-ENTER>\n\t<SET VAL\n\t\t<COND\n\t\t\t(<RT-DESCRIBE-ROOM>\n\t\t\t\t<RT-DESCRIBE-OBJECTS>\n\t\t\t)\n\t\t>\n\t>\n\t<APPLY <GETP ,HERE ,P?ACTION> ,M-ENTERED>\n\t.VAL\n>"
  },
  "RT-ROOM-NAME-MSG": {
   "name": "RT-ROOM-NAME-MSG",
   "file": "verbs.zil",
   "line": 2673,
   "endLine": 2682,
   "source": "<ROUTINE RT-ROOM-NAME-MSG ()\n\t<COND\n\t\t(,LIT\n\t\t\t<TELL D ,HERE>\n\t\t)\n\t\t(T\n\t\t\t<TELL \"darkness\">\n\t\t)\n\t>\n>"
  },
  "V-WALK-AROUND": {
   "name": "V-WALK-AROUND",
   "file": "verbs.zil",
   "line": 2684,
   "endLine": 2688,
   "source": "<ROUTINE V-WALK-AROUND ()\n\t<SETG CLOCK-WAIT T>\n\t<TELL \"[\" ,K-WHICH-DIR-MSG \"]\" CR>\n\t<RFATAL>\n>"
  },
  "V-WALK-TO": {
   "name": "V-WALK-TO",
   "file": "verbs.zil",
   "line": 2690,
   "endLine": 2693,
   "source": "<ROUTINE V-WALK-TO ()\n\t<TELL \"['Walk to' currently has no default handling.]|\">\n\t<RFATAL>\n>"
  },
  "RT-WALK-WITHIN-ROOM-MSG": {
   "name": "RT-WALK-WITHIN-ROOM-MSG",
   "file": "verbs.zil",
   "line": 2697,
   "endLine": 2699,
   "source": "<ROUTINE RT-WALK-WITHIN-ROOM-MSG ()\n\t<NO-NEED \"move around within\" ,HERE>\n>"
  },
  "V-WEAR": {
   "name": "V-WEAR",
   "file": "verbs.zil",
   "line": 2701,
   "endLine": 2718,
   "source": "<ROUTINE V-WEAR ()\n\t<COND\n\t\t(<NOT <IN? ,PRSO ,WINNER>>\n\t\t\t<TELL The+verb ,WINNER \"do\" \"n't have\" the ,PRSO \".\" CR>\n\t\t)\n\t\t(<FSET? ,PRSO ,FL-WORN>\n\t\t\t<RT-ALREADY-MSG ,WINNER>\n\t\t\t<TELL \" wearing\" the ,PRSO \".]\" CR>\n\t\t)\n\t\t(<FSET? ,PRSO ,FL-CLOTHING>\n\t\t\t<FSET ,PRSO ,FL-WORN>\n\t\t\t<TELL The+verb ,WINNER \"put\" \" on\" the ,PRSO \".\" CR>\n\t\t)\n\t\t(T\n\t\t\t<RT-YOU-CANT-MSG \"put on\">\n\t\t)\n\t>\n>"
  },
  "V-WELD": {
   "name": "V-WELD",
   "file": "verbs.zil",
   "line": 2720,
   "endLine": 2723,
   "source": "<ROUTINE V-WELD ()\n\t<TELL \"['Weld' currently has no default handling.]|\">\n\t<RFATAL>\n>"
  },
  "V-YES": {
   "name": "V-YES",
   "file": "verbs.zil",
   "line": 2729,
   "endLine": 2732,
   "source": "<ROUTINE V-YES ()\n\t<TELL \"[You seem sure of yourself.]\" CR>\n\t<RFATAL>\n>"
  }
 },
 "globals": {
  "QACTIONS": {
   "name": "QACTIONS",
   "kind": "constant",
   "file": "be.zil",
   "line": 47,
   "value": "<PLTABLE V-BE V-BE? 0 ;\"V-DISEMBARK V-DISEMBARK? 0\n\t\tV-DROP V-DROP? PRE-DROP?\n\t\tV-TAKE V-TAKE? PRE-TAKE?\">"
  },
  "ADJ-TABLE": {
   "name": "ADJ-TABLE",
   "kind": "constant",
   "file": "be.zil",
   "line": 316,
   "value": "<LTABLE <VOC \"OUTSIDE\" ADJ> IS-OUTSIDE? ;<VOC \"INSIDE\" ADJ> ;IS-INSIDE? <VOC \"OPEN\" ADJ> IS-OPEN? <VOC \"CLOSED\" ADJ> IS-CLOSED? <VOC \"LOCKED\" ADJ> IS-LOCKED? <VOC \"UNLOCKED\" ADJ> IS-UNLOCKED? <VOC \"DEAD\" ADJ> IS-DEAD? <VOC \"ALIVE\" ADJ> IS-ALIVE? <VOC \"QUIET\" ADJ> IS-QUIET? <VOC \"HERE\" ADJ> IS-HERE?>"
  },
  "GL-WATER-PUMP-ON": {
   "name": "GL-WATER-PUMP-ON",
   "kind": "global",
   "file": "command.zil",
   "line": 618,
   "value": "<>"
  },
  "GL-CRANE-FALLING?": {
   "name": "GL-CRANE-FALLING?",
   "kind": "global",
   "file": "crane.zil",
   "line": 17,
   "value": "<>"
  },
  "GL-CRANE-DOWN?": {
   "name": "GL-CRANE-DOWN?",
   "kind": "global",
   "file": "crane.zil",
   "line": 18,
   "value": "<>"
  },
  "GL-KLAXON-ON": {
   "name": "GL-KLAXON-ON",
   "kind": "global",
   "file": "crane.zil",
   "line": 190,
   "value": "<>"
  },
  "GL-BATTERY-LEAK": {
   "name": "GL-BATTERY-LEAK",
   "kind": "global",
   "file": "crane.zil",
   "line": 205,
   "value": "<>"
  },
  "GL-WATER-LEVEL": {
   "name": "GL-WATER-LEVEL",
   "kind": "global",
   "file": "crane.zil",
   "line": 206,
   "value": "0"
  },
  "K-CAP-MAX": {
   "name": "K-CAP-MAX",
   "kind": "constant",
   "file": "defs.zil",
   "line": 65,
   "value": "255"
  },
  "K-UP": {
   "name": "K-UP",
   "kind": "constant",
   "file": "defs.zil",
   "line": 67,
   "value": "129"
  },
  "K-DOWN": {
   "name": "K-DOWN",
   "kind": "constant",
   "file": "defs.zil",
   "line": 68,
   "value": "130"
  },
  "K-LEFT": {
   "name": "K-LEFT",
   "kind": "constant",
   "file": "defs.zil",
   "line": 69,
   "value": "131"
  },
  "K-RIGHT": {
   "name": "K-RIGHT",
   "kind": "constant",
   "file": "defs.zil",
   "line": 70,
   "value": "132"
  },
  "K-F1": {
   "name": "K-F1",
   "kind": "constant",
   "file": "defs.zil",
   "line": 71,
   "value": "133"
  },
  "K-F2": {
   "name": "K-F2",
   "kind": "constant",
   "file": "defs.zil",
   "line": 72,
   "value": "134"
  },
  "K-F3": {
   "name": "K-F3",
   "kind": "constant",
   "file": "defs.zil",
   "line": 73,
   "value": "135"
  },
  "K-F4": {
   "name": "K-F4",
   "kind": "constant",
   "file": "defs.zil",
   "line": 74,
   "value": "136"
  },
  "K-F5": {
   "name": "K-F5",
   "kind": "constant",
   "file": "defs.zil",
   "line": 75,
   "value": "137"
  },
  "K-F6": {
   "name": "K-F6",
   "kind": "constant",
   "file": "defs.zil",
   "line": 76,
   "value": "138"
  },
  "K-F7": {
   "name": "K-F7",
   "kind": "constant",
   "file": "defs.zil",
   "line": 77,
   "value": "139"
  },
  "K-F8": {
   "name": "K-F8",
   "kind": "constant",
   "file": "defs.zil",
   "line": 78,
   "value": "140"
  },
  "K-F9": {
   "name": "K-F9",
   "kind": "constant",
   "file": "defs.zil",
   "line": 79,
   "value": "141"
  },
  "K-F10": {
   "name": "K-F10",
   "kind": "constant",
   "file": "defs.zil",
   "line": 80,
   "value": "142"
  },
  "K-F11": {
   "name": "K-F11",
   "kind": "constant",
   "file": "defs.zil",
   "line": 81,
   "value": "143"
  },
  "K-F12": {
   "name": "K-F12",
   "kind": "constant",
   "file": "defs.zil",
   "line": 82,
   "value": "144"
  },
  "K-CLICK1": {
   "name": "K-CLICK1",
   "kind": "constant",
   "file": "defs.zil",
   "line": 83,
   "value": "254"
  },
  "K-CLICK2": {
   "name": "K-CLICK2",
   "kind": "constant",
   "file": "defs.zil",
   "line": 84,
   "value": "253"
  },
  "TCHARS": {
   "name": "TCHARS",
   "kind": "constant",
   "file": "defs.zil",
   "line": 86,
   "value": "<TABLE (KERNEL BYTE) !\\  K-UP K-DOWN K-LEFT K-RIGHT K-F1 K-F2 K-F3 K-F4 K-F5 K-F6 K-F7 K-F8 K-F9 K-F10 K-F11 K-F12 K-CLICK1 K-CLICK2 0>"
  },
  "SEARCH-ADJACENT": {
   "name": "SEARCH-ADJACENT",
   "kind": "constant",
   "file": "defs2.zil",
   "line": 17,
   "value": "<ORB ,SEARCH-MUST-HAVE ,SEARCH-MOBY>"
  },
  "GL-OXYGEN-QTY": {
   "name": "GL-OXYGEN-QTY",
   "kind": "global",
   "file": "gas-mix.zil",
   "line": 13,
   "value": "3400"
  },
  "GL-OXYGEN-MSG": {
   "name": "GL-OXYGEN-MSG",
   "kind": "global",
   "file": "gas-mix.zil",
   "line": 14,
   "value": "3400"
  },
  "K-OXYGEN-FACTOR": {
   "name": "K-OXYGEN-FACTOR",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 15,
   "value": "-4"
  },
  "K-OXY-LOW-4": {
   "name": "K-OXY-LOW-4",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 16,
   "value": "850"
  },
  "K-OXY-LOW-3": {
   "name": "K-OXY-LOW-3",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 17,
   "value": "1133"
  },
  "K-OXY-LOW-2": {
   "name": "K-OXY-LOW-2",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 18,
   "value": "1417"
  },
  "K-OXY-LOW-1": {
   "name": "K-OXY-LOW-1",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 19,
   "value": "1700"
  },
  "K-OXY-NOM": {
   "name": "K-OXY-NOM",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 20,
   "value": "3400"
  },
  "K-OXY-HIGH-1": {
   "name": "K-OXY-HIGH-1",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 21,
   "value": "20400"
  },
  "K-OXY-HIGH-2": {
   "name": "K-OXY-HIGH-2",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 22,
   "value": "23800"
  },
  "K-OXY-HIGH-3": {
   "name": "K-OXY-HIGH-3",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 23,
   "value": "27200"
  },
  "K-OXY-HIGH-4": {
   "name": "K-OXY-HIGH-4",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 24,
   "value": "30600"
  },
  "GL-CO2-QTY": {
   "name": "GL-CO2-QTY",
   "kind": "global",
   "file": "gas-mix.zil",
   "line": 26,
   "value": "536"
  },
  "GL-CO2-MSG": {
   "name": "GL-CO2-MSG",
   "kind": "global",
   "file": "gas-mix.zil",
   "line": 27,
   "value": "536"
  },
  "K-CO2-FACTOR": {
   "name": "K-CO2-FACTOR",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 28,
   "value": "-6"
  },
  "K-CO2-NOM": {
   "name": "K-CO2-NOM",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 29,
   "value": "536"
  },
  "K-CO2-HIGH-1": {
   "name": "K-CO2-HIGH-1",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 30,
   "value": "22725"
  },
  "K-CO2-HIGH-2": {
   "name": "K-CO2-HIGH-2",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 31,
   "value": "25971"
  },
  "K-CO2-HIGH-3": {
   "name": "K-CO2-HIGH-3",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 32,
   "value": "29218"
  },
  "K-CO2-HIGH-4": {
   "name": "K-CO2-HIGH-4",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 33,
   "value": "32464"
  },
  "GL-NITROGEN-QTY": {
   "name": "GL-NITROGEN-QTY",
   "kind": "global",
   "file": "gas-mix.zil",
   "line": 35,
   "value": "1267"
  },
  "GL-NITROGEN-MSG": {
   "name": "GL-NITROGEN-MSG",
   "kind": "global",
   "file": "gas-mix.zil",
   "line": 36,
   "value": "1267"
  },
  "K-NITROGEN-FACTOR": {
   "name": "K-NITROGEN-FACTOR",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 37,
   "value": "-3"
  },
  "K-NIT-LOW-4": {
   "name": "K-NIT-LOW-4",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 38,
   "value": "211"
  },
  "K-NIT-LOW-3": {
   "name": "K-NIT-LOW-3",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 39,
   "value": "253"
  },
  "K-NIT-LOW-2": {
   "name": "K-NIT-LOW-2",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 40,
   "value": "317"
  },
  "K-NIT-LOW-1": {
   "name": "K-NIT-LOW-1",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 41,
   "value": "422"
  },
  "K-NIT-NOM": {
   "name": "K-NIT-NOM",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 42,
   "value": "1267"
  },
  "K-NIT-HIGH-1": {
   "name": "K-NIT-HIGH-1",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 43,
   "value": "3802"
  },
  "K-NIT-HIGH-2": {
   "name": "K-NIT-HIGH-2",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 44,
   "value": "5070"
  },
  "K-NIT-HIGH-3": {
   "name": "K-NIT-HIGH-3",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 45,
   "value": "6337"
  },
  "K-NIT-HIGH-4": {
   "name": "K-NIT-HIGH-4",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 46,
   "value": "7605"
  },
  "GL-HELIUM-QTY": {
   "name": "GL-HELIUM-QTY",
   "kind": "global",
   "file": "gas-mix.zil",
   "line": 48,
   "value": "9839"
  },
  "K-HELIUM-FACTOR": {
   "name": "K-HELIUM-FACTOR",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 49,
   "value": "-2"
  },
  "K-HEL-NOM": {
   "name": "K-HEL-NOM",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 50,
   "value": "9839"
  },
  "GL-SCRUBBERS-ON": {
   "name": "GL-SCRUBBERS-ON",
   "kind": "global",
   "file": "gas-mix.zil",
   "line": 52,
   "value": "<>"
  },
  "GL-HEATERS-ON": {
   "name": "GL-HEATERS-ON",
   "kind": "global",
   "file": "gas-mix.zil",
   "line": 589,
   "value": "<>"
  },
  "K-AMBIENT-TEMP": {
   "name": "K-AMBIENT-TEMP",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 607,
   "value": "3400"
  },
  "GL-DEEPCORE-TEMP": {
   "name": "GL-DEEPCORE-TEMP",
   "kind": "global",
   "file": "gas-mix.zil",
   "line": 609,
   "value": "9000"
  },
  "GL-PLAYER-TEMP": {
   "name": "GL-PLAYER-TEMP",
   "kind": "global",
   "file": "gas-mix.zil",
   "line": 611,
   "value": "9860"
  },
  "GL-TEMP-MSG": {
   "name": "GL-TEMP-MSG",
   "kind": "global",
   "file": "gas-mix.zil",
   "line": 612,
   "value": "9860"
  },
  "K-TEMP-FACTOR": {
   "name": "K-TEMP-FACTOR",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 613,
   "value": "-2"
  },
  "K-TEMP-LOW-4": {
   "name": "K-TEMP-LOW-4",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 614,
   "value": "8600"
  },
  "K-TEMP-LOW-3": {
   "name": "K-TEMP-LOW-3",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 615,
   "value": "9100"
  },
  "K-TEMP-LOW-2": {
   "name": "K-TEMP-LOW-2",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 616,
   "value": "9300"
  },
  "K-TEMP-LOW-1": {
   "name": "K-TEMP-LOW-1",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 617,
   "value": "9500"
  },
  "K-TEMP-NOM": {
   "name": "K-TEMP-NOM",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 618,
   "value": "9860"
  },
  "K-TEMP-HIGH-1": {
   "name": "K-TEMP-HIGH-1",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 619,
   "value": "10000"
  },
  "K-TEMP-HIGH-2": {
   "name": "K-TEMP-HIGH-2",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 620,
   "value": "10500"
  },
  "K-TEMP-HIGH-3": {
   "name": "K-TEMP-HIGH-3",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 621,
   "value": "11000"
  },
  "K-TEMP-HIGH-4": {
   "name": "K-TEMP-HIGH-4",
   "kind": "constant",
   "file": "gas-mix.zil",
   "line": 622,
   "value": "11500"
  },
  "HERE:OBJECT": {
   "name": "HERE:OBJECT",
   "kind": "global",
   "file": "global.zil",
   "line": 13,
   "value": "RM-SUB-BAY"
  },
  "OHERE:OBJECT": {
   "name": "OHERE:OBJECT",
   "kind": "global",
   "file": "global.zil",
   "line": 14,
   "value": "<>"
  },
  "K-BODY-OWNER-TBL": {
   "name": "K-BODY-OWNER-TBL",
   "kind": "constant",
   "file": "global.zil",
   "line": 202,
   "value": "<TABLE (PURE LENGTH) CH-COFFEY CH-LINDSEY>"
  },
  "K-NO-REFER-MSG": {
   "name": "K-NO-REFER-MSG",
   "kind": "constant",
   "file": "global.zil",
   "line": 209,
   "value": "\"[You don't need to refer to \""
  },
  "M-ENTERED": {
   "name": "M-ENTERED",
   "kind": "constant",
   "file": "macros.zil",
   "line": 13,
   "value": "42"
  },
  "M-F-LOOK": {
   "name": "M-F-LOOK",
   "kind": "constant",
   "file": "macros.zil",
   "line": 14,
   "value": "43"
  },
  "M-V-LOOK": {
   "name": "M-V-LOOK",
   "kind": "constant",
   "file": "macros.zil",
   "line": 15,
   "value": "44"
  },
  "M-B-LOOK": {
   "name": "M-B-LOOK",
   "kind": "constant",
   "file": "macros.zil",
   "line": 16,
   "value": "45"
  },
  "M-END-LOOK": {
   "name": "M-END-LOOK",
   "kind": "constant",
   "file": "macros.zil",
   "line": 17,
   "value": "46"
  },
  "K-W-YPOS": {
   "name": "K-W-YPOS",
   "kind": "constant",
   "file": "macros.zil",
   "line": 19,
   "value": "0"
  },
  "K-W-XPOS": {
   "name": "K-W-XPOS",
   "kind": "constant",
   "file": "macros.zil",
   "line": 20,
   "value": "1"
  },
  "K-W-YSIZE": {
   "name": "K-W-YSIZE",
   "kind": "constant",
   "file": "macros.zil",
   "line": 21,
   "value": "2"
  },
  "K-W-XSIZE": {
   "name": "K-W-XSIZE",
   "kind": "constant",
   "file": "macros.zil",
   "line": 22,
   "value": "3"
  },
  "K-W-YCURPOS": {
   "name": "K-W-YCURPOS",
   "kind": "constant",
   "file": "macros.zil",
   "line": 23,
   "value": "4"
  },
  "K-W-XCURPOS": {
   "name": "K-W-XCURPOS",
   "kind": "constant",
   "file": "macros.zil",
   "line": 24,
   "value": "5"
  },
  "K-W-LMARG": {
   "name": "K-W-LMARG",
   "kind": "constant",
   "file": "macros.zil",
   "line": 25,
   "value": "6"
  },
  "K-W-RMARG": {
   "name": "K-W-RMARG",
   "kind": "constant",
   "file": "macros.zil",
   "line": 26,
   "value": "7"
  },
  "K-W-CRFCN": {
   "name": "K-W-CRFCN",
   "kind": "constant",
   "file": "macros.zil",
   "line": 27,
   "value": "8"
  },
  "K-W-CRCNT": {
   "name": "K-W-CRCNT",
   "kind": "constant",
   "file": "macros.zil",
   "line": 28,
   "value": "9"
  },
  "K-W-HLIGHT": {
   "name": "K-W-HLIGHT",
   "kind": "constant",
   "file": "macros.zil",
   "line": 29,
   "value": "10"
  },
  "K-W-COLOR": {
   "name": "K-W-COLOR",
   "kind": "constant",
   "file": "macros.zil",
   "line": 30,
   "value": "11"
  },
  "K-W-FONT": {
   "name": "K-W-FONT",
   "kind": "constant",
   "file": "macros.zil",
   "line": 31,
   "value": "12"
  },
  "K-W-FONTSIZE": {
   "name": "K-W-FONTSIZE",
   "kind": "constant",
   "file": "macros.zil",
   "line": 32,
   "value": "13"
  },
  "K-W-ATTR": {
   "name": "K-W-ATTR",
   "kind": "constant",
   "file": "macros.zil",
   "line": 33,
   "value": "14"
  },
  "K-W-MORE": {
   "name": "K-W-MORE",
   "kind": "constant",
   "file": "macros.zil",
   "line": 34,
   "value": "15"
  },
  "TAB": {
   "name": "TAB",
   "kind": "constant",
   "file": "macros.zil",
   "line": 36,
   "value": "9"
  },
  "LF": {
   "name": "LF",
   "kind": "constant",
   "file": "macros.zil",
   "line": 37,
   "value": "10"
  },
  "CR": {
   "name": "CR",
   "kind": "constant",
   "file": "macros.zil",
   "line": 38,
   "value": "13"
  },
  "ESC": {
   "name": "ESC",
   "kind": "constant",
   "file": "macros.zil",
   "line": 39,
   "value": "27"
  },
  "ESCAPE": {
   "name": "ESCAPE",
   "kind": "constant",
   "file": "macros.zil",
   "line": 40,
   "value": "27"
  },
  "M-EXIT": {
   "name": "M-EXIT",
   "kind": "constant",
   "file": "macros.zil",
   "line": 42,
   "value": ",M-LEAVE"
  },
  "K-S-NOR": {
   "name": "K-S-NOR",
   "kind": "constant",
   "file": "macros.zil",
   "line": 44,
   "value": ",S-TEXT"
  },
  "K-S-WIN": {
   "name": "K-S-WIN",
   "kind": "constant",
   "file": "macros.zil",
   "line": 45,
   "value": ",S-WINDOW"
  },
  "K-H-NRM": {
   "name": "K-H-NRM",
   "kind": "constant",
   "file": "macros.zil",
   "line": 47,
   "value": ",H-NORMAL"
  },
  "K-H-INV": {
   "name": "K-H-INV",
   "kind": "constant",
   "file": "macros.zil",
   "line": 48,
   "value": ",H-INVERSE"
  },
  "K-H-BLD": {
   "name": "K-H-BLD",
   "kind": "constant",
   "file": "macros.zil",
   "line": 49,
   "value": ",H-BOLD"
  },
  "K-H-ITL": {
   "name": "K-H-ITL",
   "kind": "constant",
   "file": "macros.zil",
   "line": 50,
   "value": ",H-ITALIC"
  },
  "K-D-SCR-ON": {
   "name": "K-D-SCR-ON",
   "kind": "constant",
   "file": "macros.zil",
   "line": 52,
   "value": ",D-SCREEN-ON"
  },
  "K-D-SCR-OFF": {
   "name": "K-D-SCR-OFF",
   "kind": "constant",
   "file": "macros.zil",
   "line": 53,
   "value": ",D-SCREEN-OFF"
  },
  "K-D-PRT-ON": {
   "name": "K-D-PRT-ON",
   "kind": "constant",
   "file": "macros.zil",
   "line": 54,
   "value": ",D-PRINTER-ON"
  },
  "K-D-PRT-OFF": {
   "name": "K-D-PRT-OFF",
   "kind": "constant",
   "file": "macros.zil",
   "line": 55,
   "value": ",D-PRINTER-OFF"
  },
  "K-D-TBL-ON": {
   "name": "K-D-TBL-ON",
   "kind": "constant",
   "file": "macros.zil",
   "line": 56,
   "value": ",D-TABLE-ON"
  },
  "K-D-TBL-OFF": {
   "name": "K-D-TBL-OFF",
   "kind": "constant",
   "file": "macros.zil",
   "line": 57,
   "value": ",D-TABLE-OFF"
  },
  "K-D-REC-ON": {
   "name": "K-D-REC-ON",
   "kind": "constant",
   "file": "macros.zil",
   "line": 58,
   "value": ",D-RECORD-ON"
  },
  "K-D-REC-OFF": {
   "name": "K-D-REC-OFF",
   "kind": "constant",
   "file": "macros.zil",
   "line": 59,
   "value": ",D-RECORD-OFF"
  },
  "ME:OBJECT": {
   "name": "ME:OBJECT",
   "kind": "constant",
   "file": "misc.zil",
   "line": 29,
   "value": "CH-PLAYER"
  },
  "GL-LOC-TRAIL:TABLE": {
   "name": "GL-LOC-TRAIL:TABLE",
   "kind": "global",
   "file": "misc.zil",
   "line": 37,
   "value": "<ITABLE 8 0>"
  },
  "K-ART-A": {
   "name": "K-ART-A",
   "kind": "constant",
   "file": "misc.zil",
   "line": 243,
   "value": "1"
  },
  "K-ART-THE": {
   "name": "K-ART-THE",
   "kind": "constant",
   "file": "misc.zil",
   "line": 244,
   "value": "2"
  },
  "K-ART-ANY": {
   "name": "K-ART-ANY",
   "kind": "constant",
   "file": "misc.zil",
   "line": 245,
   "value": "3"
  },
  "K-ART-HE": {
   "name": "K-ART-HE",
   "kind": "constant",
   "file": "misc.zil",
   "line": 246,
   "value": "4"
  },
  "K-ART-HIM": {
   "name": "K-ART-HIM",
   "kind": "constant",
   "file": "misc.zil",
   "line": 247,
   "value": "5"
  },
  "K-ART-HIS": {
   "name": "K-ART-HIS",
   "kind": "constant",
   "file": "misc.zil",
   "line": 248,
   "value": "6"
  },
  "QCONTEXT:OBJECT": {
   "name": "QCONTEXT:OBJECT",
   "kind": "global",
   "file": "misc.zil",
   "line": 455,
   "value": "<>"
  },
  "LIT:OBJECT": {
   "name": "LIT:OBJECT",
   "kind": "global",
   "file": "misc.zil",
   "line": 456,
   "value": "<>"
  },
  "P-IT-OBJECT:OBJECT": {
   "name": "P-IT-OBJECT:OBJECT",
   "kind": "global",
   "file": "misc.zil",
   "line": 457,
   "value": "<>"
  },
  "P-THEM-OBJECT:OBJECT": {
   "name": "P-THEM-OBJECT:OBJECT",
   "kind": "global",
   "file": "misc.zil",
   "line": 458,
   "value": "<>"
  },
  "P-HER-OBJECT:OBJECT": {
   "name": "P-HER-OBJECT:OBJECT",
   "kind": "global",
   "file": "misc.zil",
   "line": 459,
   "value": "<>"
  },
  "P-HIM-OBJECT:OBJECT": {
   "name": "P-HIM-OBJECT:OBJECT",
   "kind": "global",
   "file": "misc.zil",
   "line": 460,
   "value": "<>"
  },
  "P-ONE-NOUN": {
   "name": "P-ONE-NOUN",
   "kind": "global",
   "file": "misc.zil",
   "line": 461,
   "value": "<>"
  },
  "K-DIROUT-TBL": {
   "name": "K-DIROUT-TBL",
   "kind": "constant",
   "file": "misc.zil",
   "line": 463,
   "value": "<ITABLE 255 (BYTE) 0>"
  },
  "CLOCK-WAIT:FLAG": {
   "name": "CLOCK-WAIT:FLAG",
   "kind": "global",
   "file": "misc.zil",
   "line": 706,
   "value": "<>"
  },
  "GL-CLK-RUN:FLAG": {
   "name": "GL-CLK-RUN:FLAG",
   "kind": "global",
   "file": "misc.zil",
   "line": 707,
   "value": "<>"
  },
  "GL-Q-MAX": {
   "name": "GL-Q-MAX",
   "kind": "global",
   "file": "misc.zil",
   "line": 708,
   "value": "0"
  },
  "K-Q-NUM": {
   "name": "K-Q-NUM",
   "kind": "constant",
   "file": "misc.zil",
   "line": 709,
   "value": "20"
  },
  "K-Q-SIZE": {
   "name": "K-Q-SIZE",
   "kind": "constant",
   "file": "misc.zil",
   "line": 710,
   "value": "<* ,K-Q-NUM 2>"
  },
  "GL-Q-TBL": {
   "name": "GL-Q-TBL",
   "kind": "global",
   "file": "misc.zil",
   "line": 711,
   "value": "<ITABLE ,K-Q-SIZE 0>"
  },
  "GL-MOVES": {
   "name": "GL-MOVES",
   "kind": "global",
   "file": "misc.zil",
   "line": 712,
   "value": "360"
  },
  "GL-NEW-TIME": {
   "name": "GL-NEW-TIME",
   "kind": "global",
   "file": "misc.zil",
   "line": 713,
   "value": "0"
  },
  "K-TIME-PASSES-MSG": {
   "name": "K-TIME-PASSES-MSG",
   "kind": "constant",
   "file": "misc.zil",
   "line": 716,
   "value": "\"Time passes...|\""
  },
  "GL-SCR-WID:NUMBER": {
   "name": "GL-SCR-WID:NUMBER",
   "kind": "global",
   "file": "misc.zil",
   "line": 973,
   "value": "79"
  },
  "K-WIN-TBL": {
   "name": "K-WIN-TBL",
   "kind": "constant",
   "file": "misc.zil",
   "line": 974,
   "value": "<TABLE 0 0 0>"
  },
  "GL-FONT-X": {
   "name": "GL-FONT-X",
   "kind": "global",
   "file": "misc.zil",
   "line": 975,
   "value": "7"
  },
  "GL-FONT-Y": {
   "name": "GL-FONT-Y",
   "kind": "global",
   "file": "misc.zil",
   "line": 976,
   "value": "10"
  },
  "GL-SPACE-WIDTH": {
   "name": "GL-SPACE-WIDTH",
   "kind": "global",
   "file": "misc.zil",
   "line": 977,
   "value": "0"
  },
  "GL-WIRE-SEQUENCE": {
   "name": "GL-WIRE-SEQUENCE",
   "kind": "global",
   "file": "montana.zil",
   "line": 213,
   "value": "0"
  },
  "GL-WIRES-CUT": {
   "name": "GL-WIRES-CUT",
   "kind": "global",
   "file": "montana.zil",
   "line": 214,
   "value": "0"
  },
  "GL-FALLING-INTO-TRENCH?": {
   "name": "GL-FALLING-INTO-TRENCH?",
   "kind": "global",
   "file": "montana.zil",
   "line": 521,
   "value": "<>"
  },
  "GL-CORRIDOR-BLOCKED?": {
   "name": "GL-CORRIDOR-BLOCKED?",
   "kind": "global",
   "file": "montana.zil",
   "line": 968,
   "value": "T"
  },
  "GL-SAFE-NUM": {
   "name": "GL-SAFE-NUM",
   "kind": "global",
   "file": "montana.zil",
   "line": 1105,
   "value": "0"
  },
  "GL-DETONATOR-TIME": {
   "name": "GL-DETONATOR-TIME",
   "kind": "global",
   "file": "montana.zil",
   "line": 1297,
   "value": "10"
  },
  "GL-RETURN1-DONE?": {
   "name": "GL-RETURN1-DONE?",
   "kind": "global",
   "file": "return1.zil",
   "line": 13,
   "value": "<>"
  },
  "GL-RETURN2-DONE?": {
   "name": "GL-RETURN2-DONE?",
   "kind": "global",
   "file": "return2.zil",
   "line": 13,
   "value": "<>"
  },
  "GL-COFFEY-SHOOT": {
   "name": "GL-COFFEY-SHOOT",
   "kind": "global",
   "file": "return2.zil",
   "line": 14,
   "value": "0"
  },
  "K-HISS-MSG": {
   "name": "K-HISS-MSG",
   "kind": "constant",
   "file": "stopper.zil",
   "line": 33,
   "value": "\"\tYou hear a loud hissing coming from somewhere in the room.|\""
  },
  "GL-NITROGEN-LEAK?": {
   "name": "GL-NITROGEN-LEAK?",
   "kind": "global",
   "file": "stopper.zil",
   "line": 81,
   "value": "<>"
  },
  "K-GAS-TANK-MSG": {
   "name": "K-GAS-TANK-MSG",
   "kind": "constant",
   "file": "stopper.zil",
   "line": 83,
   "value": "\"\tIt is a huge cylinder that looks like a giant capsule. It is supported\nby four legs that are welded to a steel base to provide stability. The base\nis raised up off the floor by about an inch.|\n\tOn the front of the tank is a k-valve that looks a little like a beer\ntap.\""
  },
  "GL-N-LOOP": {
   "name": "GL-N-LOOP",
   "kind": "global",
   "file": "stopper.zil",
   "line": 313,
   "value": "0"
  },
  "GL-LIFT-OBJ": {
   "name": "GL-LIFT-OBJ",
   "kind": "global",
   "file": "sub-bay.zil",
   "line": 646,
   "value": "<>"
  },
  "K-UFO-MSG": {
   "name": "K-UFO-MSG",
   "kind": "constant",
   "file": "sub-bay.zil",
   "line": 1158,
   "value": "\"\"I swear it's all true, Bud. I saw...something. It was right in front of us\nand then it dived into the trench, pulling us along after it. Then we hit the\nside of the trench and I blacked out for a second. When I came to, Flatbed was\nspinning out of control into the trench. None of the controls worked. I did\nthe only thing I could do. I bailed out. But I didn't kill those men...\" her\nvoice trails off, \"...there was nothing I could do...\"|\""
  },
  "GL-CAB-DOCKED?": {
   "name": "GL-CAB-DOCKED?",
   "kind": "global",
   "file": "sub-bay.zil",
   "line": 1190,
   "value": "<>"
  },
  "GL-CATFISH-SPY-MSG?": {
   "name": "GL-CATFISH-SPY-MSG?",
   "kind": "global",
   "file": "sub-bay.zil",
   "line": 1625,
   "value": "<>"
  },
  "K-MACHINE-NAME-TBL": {
   "name": "K-MACHINE-NAME-TBL",
   "kind": "constant",
   "file": "util.zil",
   "line": 187,
   "value": "<TABLE (PURE LENGTH) \"Debugging\" \"Apple IIe\" \"Macintosh\" \"Amiga\" \"Atari ST\" \"IBM\" \"Commodore 128\" \"Commodore 64\" \"Apple IIc\" \"Apple IIgs\">"
  },
  "GL-COLOR-NOTE": {
   "name": "GL-COLOR-NOTE",
   "kind": "global",
   "file": "util.zil",
   "line": 205,
   "value": "<>"
  },
  "GL-F-COLOR": {
   "name": "GL-F-COLOR",
   "kind": "global",
   "file": "util.zil",
   "line": 206,
   "value": "1"
  },
  "GL-B-COLOR": {
   "name": "GL-B-COLOR",
   "kind": "global",
   "file": "util.zil",
   "line": 207,
   "value": "1"
  },
  "K-TYPE-NUMBER-MSG": {
   "name": "K-TYPE-NUMBER-MSG",
   "kind": "constant",
   "file": "util.zil",
   "line": 377,
   "value": "\"Please press a number from 1 to \""
  },
  "K-COLOR-TABLE": {
   "name": "K-COLOR-TABLE",
   "kind": "constant",
   "file": "util.zil",
   "line": 379,
   "value": "<TABLE (PURE) ;0 \"no change\" ;1 \"the standard color\" ;2 \"black\" ;3 \"red\" ;4 \"green\" ;5 \"yellow\" ;6 \"blue\" ;7 \"magenta\" ;8 \"cyan\" ;9 \"white\">"
  },
  "GL-SCORE": {
   "name": "GL-SCORE",
   "kind": "global",
   "file": "util.zil",
   "line": 522,
   "value": "0"
  },
  "K-NOT-LIKELY-TBL": {
   "name": "K-NOT-LIKELY-TBL",
   "kind": "constant",
   "file": "util.zil",
   "line": 1254,
   "value": "<TABLE (PATTERN (BYTE WORD)) <BYTE 1> <TABLE (PURE LENGTH) \"isn't likely\" \"seems doubtful\" \"seems unlikely\" \"doesn't seem likely\">>"
  },
  "K-NO-POINT-TBL": {
   "name": "K-NO-POINT-TBL",
   "kind": "constant",
   "file": "util.zil",
   "line": 1272,
   "value": "<TABLE (PATTERN (BYTE WORD)) <BYTE 1> <TABLE (PURE LENGTH) \"not do anything useful\" \"accomplish nothing\" \"have no desirable effect\" \"not be very productive\" \"serve no purpose\" \"be pointless\">>"
  },
  "K-UNUSUAL-TBL": {
   "name": "K-UNUSUAL-TBL",
   "kind": "constant",
   "file": "util.zil",
   "line": 1290,
   "value": "<TABLE (PATTERN (BYTE WORD)) <BYTE 1> <TABLE (PURE LENGTH) \"unusual\" \"special\" \"interesting\" \"important\" \"of interest\" \"out of the ordinary\">>"
  },
  "K-TOO-DARK-MSG": {
   "name": "K-TOO-DARK-MSG",
   "kind": "constant",
   "file": "util.zil",
   "line": 1317,
   "value": "\"It's too dark to see.\""
  },
  "K-TALK-TO-SELF-MSG": {
   "name": "K-TALK-TO-SELF-MSG",
   "kind": "constant",
   "file": "util.zil",
   "line": 1318,
   "value": "\"[Talking to yourself is a bad sign.]\""
  },
  "K-HOW-INTEND-MSG": {
   "name": "K-HOW-INTEND-MSG",
   "kind": "constant",
   "file": "util.zil",
   "line": 1368,
   "value": "\"[How do you intend to do that?]\""
  },
  "VERBOSITY": {
   "name": "VERBOSITY",
   "kind": "global",
   "file": "verbs.zil",
   "line": 15,
   "value": "1"
  },
  "REXIT": {
   "name": "REXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 471,
   "value": "0"
  },
  "UEXIT": {
   "name": "UEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 472,
   "value": "<VERSION? (ZIP 1) (T 2)>"
  },
  "NEXIT": {
   "name": "NEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 474,
   "value": "<VERSION? (ZIP 2) (T 3)>"
  },
  "FEXIT": {
   "name": "FEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 476,
   "value": "<VERSION? (ZIP 3) (T 4)>"
  },
  "CEXIT": {
   "name": "CEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 478,
   "value": "<VERSION? (ZIP 4) (T 5)>"
  },
  "DEXIT": {
   "name": "DEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 480,
   "value": "<VERSION? (ZIP 5) (T 6)>"
  },
  "NEXITSTR": {
   "name": "NEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 483,
   "value": "0"
  },
  "FEXITFCN": {
   "name": "FEXITFCN",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 484,
   "value": "0"
  },
  "CEXITFLAG": {
   "name": "CEXITFLAG",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 485,
   "value": "<VERSION? (ZIP 1) (T 4)>"
  },
  "CEXITSTR": {
   "name": "CEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 486,
   "value": "1"
  },
  "DEXITOBJ": {
   "name": "DEXITOBJ",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 487,
   "value": "1"
  },
  "DEXITSTR": {
   "name": "DEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 488,
   "value": "<VERSION? (ZIP 1) (T 2)>"
  },
  "YOU-DIDNT-SAY-W": {
   "name": "YOU-DIDNT-SAY-W",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1036,
   "value": "\"[You didn't say w\""
  },
  "GL-DOOR-DIR": {
   "name": "GL-DOOR-DIR",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1401,
   "value": "<>"
  },
  "NOT-ENOUGH-ROOM": {
   "name": "NOT-ENOUGH-ROOM",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1678,
   "value": "\"There's not enough room.|\""
  },
  "GL-PUPPY:OBJECT": {
   "name": "GL-PUPPY:OBJECT",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2467,
   "value": "<>"
  },
  "K-WHICH-DIR-MSG": {
   "name": "K-WHICH-DIR-MSG",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 2695,
   "value": "\"Which direction do you want to go in?\""
  }
 },
 "syntax": {
  "BE": {
   "verb": "BE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "BE OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-BE",
     "preaction": null,
     "file": "be.zil",
     "line": 56
    },
    {
     "pattern": "BE OBJECT (EVERYWHERE) OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [],
     "action": "V-BE",
     "preaction": null,
     "file": "be.zil",
     "line": 57
    }
   ]
  },
  "BE?": {
   "verb": "BE?",
   "synonyms": [],
   "productions": [
    {
     "pattern": "BE? OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-BE?",
     "preaction": null,
     "file": "be.zil",
     "line": 59
    },
    {
     "pattern": "BE? OBJECT (EVERYWHERE) OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [],
     "action": "V-BE?",
     "preaction": null,
     "file": "be.zil",
     "line": 60
    }
   ]
  },
  "WHO": {
   "verb": "WHO",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WHO OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-WHO",
     "preaction": null,
     "file": "be.zil",
     "line": 61
    },
    {
     "pattern": "WHO OBJECT (EVERYWHERE) OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [],
     "action": "V-WHO",
     "preaction": null,
     "file": "be.zil",
     "line": 62
    }
   ]
  },
  "WHAT": {
   "verb": "WHAT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WHAT OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-WHAT",
     "preaction": null,
     "file": "be.zil",
     "line": 63
    },
    {
     "pattern": "WHAT OBJECT (EVERYWHERE) OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [],
     "action": "V-WHAT",
     "preaction": null,
     "file": "be.zil",
     "line": 64
    }
   ]
  },
  "WHERE": {
   "verb": "WHERE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WHERE OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-WHERE",
     "preaction": null,
     "file": "be.zil",
     "line": 65
    },
    {
     "pattern": "WHERE OBJECT (EVERYWHERE) OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [],
     "action": "V-WHERE",
     "preaction": null,
     "file": "be.zil",
     "line": 66
    }
   ]
  },
  "WHEN": {
   "verb": "WHEN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WHEN OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-WHEN",
     "preaction": null,
     "file": "be.zil",
     "line": 67
    },
    {
     "pattern": "WHEN OBJECT (EVERYWHERE) OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [],
     "action": "V-WHEN",
     "preaction": null,
     "file": "be.zil",
     "line": 68
    }
   ]
  },
  "WHY": {
   "verb": "WHY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WHY OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-WHY",
     "preaction": null,
     "file": "be.zil",
     "line": 69
    },
    {
     "pattern": "WHY OBJECT (EVERYWHERE) OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [],
     "action": "V-WHY",
     "preaction": null,
     "file": "be.zil",
     "line": 70
    }
   ]
  },
  "HOW": {
   "verb": "HOW",
   "synonyms": [],
   "productions": [
    {
     "pattern": "HOW OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-HOW",
     "preaction": null,
     "file": "be.zil",
     "line": 71
    },
    {
     "pattern": "HOW OBJECT (EVERYWHERE) OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [],
     "action": "V-HOW",
     "preaction": null,
     "file": "be.zil",
     "line": 72
    }
   ]
  },
  "CAN": {
   "verb": "CAN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CAN OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-CAN?",
     "preaction": null,
     "file": "be.zil",
     "line": 74
    }
   ]
  },
  "MAY": {
   "verb": "MAY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "MAY OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-MAY?",
     "preaction": null,
     "file": "be.zil",
     "line": 75
    }
   ]
  },
  "DO": {
   "verb": "DO",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DO OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-DO?",
     "preaction": null,
     "file": "be.zil",
     "line": 76
    }
   ]
  },
  "COULD": {
   "verb": "COULD",
   "synonyms": [],
   "productions": [
    {
     "pattern": "COULD OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-COULD?",
     "preaction": null,
     "file": "be.zil",
     "line": 77
    }
   ]
  },
  "WOULD": {
   "verb": "WOULD",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WOULD OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-WOULD?",
     "preaction": null,
     "file": "be.zil",
     "line": 78
    }
   ]
  },
  "SHOULD": {
   "verb": "SHOULD",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SHOULD OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-SHOULD?",
     "preaction": null,
     "file": "be.zil",
     "line": 79
    }
   ]
  },
  "MIGHT": {
   "verb": "MIGHT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "MIGHT OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-MIGHT?",
     "preaction": null,
     "file": "be.zil",
     "line": 80
    }
   ]
  },
  "WILL": {
   "verb": "WILL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WILL OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-WILL?",
     "preaction": null,
     "file": "be.zil",
     "line": 81
    }
   ]
  },
  "MUST": {
   "verb": "MUST",
   "synonyms": [],
   "productions": [
    {
     "pattern": "MUST OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-MUST?",
     "preaction": null,
     "file": "be.zil",
     "line": 82
    }
   ]
  },
  "$SCRUB": {
   "verb": "$SCRUB",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$SCRUB",
     "objects": 0,
     "particles": [],
     "action": "V-$SCRUB",
     "preaction": null,
     "file": "gas-mix.zil",
     "line": 54
    }
   ]
  },
  "$AIR": {
   "verb": "$AIR",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$AIR",
     "objects": 0,
     "particles": [],
     "action": "V-$AIR",
     "preaction": null,
     "file": "gas-mix.zil",
     "line": 70
    }
   ]
  },
  "$HEAT": {
   "verb": "$HEAT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$HEAT",
     "objects": 0,
     "particles": [],
     "action": "V-$HEAT",
     "preaction": null,
     "file": "gas-mix.zil",
     "line": 591
    }
   ]
  },
  "$NITROGEN": {
   "verb": "$NITROGEN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$NITROGEN",
     "objects": 0,
     "particles": [],
     "action": "V-$NITROGEN",
     "preaction": null,
     "file": "return2.zil",
     "line": 93
    }
   ]
  },
  "$REFRESH": {
   "verb": "$REFRESH",
   "synonyms": [
    "R"
   ],
   "productions": [
    {
     "pattern": "$REFRESH",
     "objects": 0,
     "particles": [],
     "action": "V-$REFRESH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 44
    }
   ]
  },
  "$VERIFY": {
   "verb": "$VERIFY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$VERIFY",
     "objects": 0,
     "particles": [],
     "action": "V-VERIFY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 46
    },
    {
     "pattern": "$VERIFY OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-VERIFY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 47
    }
   ]
  },
  "BRIEF": {
   "verb": "BRIEF",
   "synonyms": [
    "VERBOSE",
    "SUPER",
    "SUPERBRIEF"
   ],
   "productions": [
    {
     "pattern": "BRIEF",
     "objects": 0,
     "particles": [],
     "action": "V-DESC-LEVEL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 54
    }
   ]
  },
  "QUIT": {
   "verb": "QUIT",
   "synonyms": [
    "Q"
   ],
   "productions": [
    {
     "pattern": "QUIT",
     "objects": 0,
     "particles": [],
     "action": "V-QUIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 56
    }
   ]
  },
  "RESTART": {
   "verb": "RESTART",
   "synonyms": [],
   "productions": [
    {
     "pattern": "RESTART",
     "objects": 0,
     "particles": [],
     "action": "V-RESTART",
     "preaction": null,
     "file": "syntax.zil",
     "line": 57
    }
   ]
  },
  "RESTORE": {
   "verb": "RESTORE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "RESTORE",
     "objects": 0,
     "particles": [],
     "action": "V-RESTORE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 58
    }
   ]
  },
  "SAVE": {
   "verb": "SAVE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SAVE",
     "objects": 0,
     "particles": [],
     "action": "V-SAVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 59
    }
   ]
  },
  "START": {
   "verb": "START",
   "synonyms": [],
   "productions": [
    {
     "pattern": "START OVER OBJECT (FIND FL-ROOMS)",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-RESTART",
     "preaction": null,
     "file": "syntax.zil",
     "line": 60
    }
   ]
  },
  "SCRIPT": {
   "verb": "SCRIPT",
   "synonyms": [
    "UNSCRIPT"
   ],
   "productions": [
    {
     "pattern": "SCRIPT",
     "objects": 0,
     "particles": [],
     "action": "V-SCRIPT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 62
    }
   ]
  },
  "UNDO": {
   "verb": "UNDO",
   "synonyms": [],
   "productions": [
    {
     "pattern": "UNDO",
     "objects": 0,
     "particles": [],
     "action": "V-UNDO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 63
    }
   ]
  },
  "VERSION": {
   "verb": "VERSION",
   "synonyms": [
    "$VERSION"
   ],
   "productions": [
    {
     "pattern": "VERSION",
     "objects": 0,
     "particles": [],
     "action": "V-VERSION",
     "preaction": null,
     "file": "syntax.zil",
     "line": 65
    }
   ]
  },
  "SCORE": {
   "verb": "SCORE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SCORE",
     "objects": 0,
     "particles": [],
     "action": "V-SCORE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 66
    }
   ]
  },
  "DIAGNOSE": {
   "verb": "DIAGNOSE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DIAGNOSE",
     "objects": 0,
     "particles": [],
     "action": "V-DIAGNOSE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 67
    }
   ]
  },
  "ASK": {
   "verb": "ASK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ASK OBJECT (ON-GROUND IN-ROOM) ABOUT OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [
      "ABOUT"
     ],
     "action": "V-ASK-ABOUT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 73
    }
   ]
  },
  "ATTACH": {
   "verb": "ATTACH",
   "synonyms": [
    "CONNECT"
   ],
   "productions": [
    {
     "pattern": "ATTACH OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-ATTACH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 80
    }
   ]
  },
  "BLOW": {
   "verb": "BLOW",
   "synonyms": [],
   "productions": [
    {
     "pattern": "BLOW UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-INFLATE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 86
    }
   ]
  },
  "CLAMP": {
   "verb": "CLAMP",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CLAMP OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-ATTACH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 103
    }
   ]
  },
  "CLOSE": {
   "verb": "CLOSE",
   "synonyms": [
    "SHUT"
   ],
   "productions": [
    {
     "pattern": "CLOSE OBJECT (FIND FL-OPENABLE) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLOSE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 106
    }
   ]
  },
  "CUT": {
   "verb": "CUT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CUT OBJECT WITH OBJECT (HELD HAVE TAKE) (FIND FL-KNIFE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-CUT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 108
    }
   ]
  },
  "DROP": {
   "verb": "DROP",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DROP OBJECT (HELD CARRIED MANY HAVE TAKE)",
     "objects": 1,
     "particles": [],
     "action": "V-DROP",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 114
    },
    {
     "pattern": "DROP OBJECT (HELD CARRIED MANY HAVE TAKE) DOWN OBJECT",
     "objects": 2,
     "particles": [
      "DOWN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 115
    },
    {
     "pattern": "DROP OBJECT (HELD CARRIED MANY HAVE TAKE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT-IN",
     "preaction": "PRE-PUT-IN",
     "file": "syntax.zil",
     "line": 116
    },
    {
     "pattern": "DROP OBJECT (HELD CARRIED MANY HAVE TAKE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 117
    }
   ]
  },
  "EMPTY": {
   "verb": "EMPTY",
   "synonyms": [
    "POUR"
   ],
   "productions": [
    {
     "pattern": "EMPTY OBJECT IN OBJECT (FIND FL-ROOMS)",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-EMPTY",
     "preaction": "PRE-EMPTY",
     "file": "syntax.zil",
     "line": 124
    },
    {
     "pattern": "EMPTY OUT OBJECT IN OBJECT (FIND FL-ROOMS)",
     "objects": 2,
     "particles": [
      "OUT",
      "IN"
     ],
     "action": "V-EMPTY",
     "preaction": "PRE-EMPTY",
     "file": "syntax.zil",
     "line": 125
    },
    {
     "pattern": "EMPTY OBJECT ON OBJECT (FIND FL-ROOMS)",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-EMPTY",
     "preaction": "PRE-EMPTY",
     "file": "syntax.zil",
     "line": 126
    },
    {
     "pattern": "EMPTY OUT OBJECT ON OBJECT (FIND FL-ROOMS)",
     "objects": 2,
     "particles": [
      "OUT",
      "ON"
     ],
     "action": "V-EMPTY",
     "preaction": "PRE-EMPTY",
     "file": "syntax.zil",
     "line": 127
    },
    {
     "pattern": "EMPTY OBJECT FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-EMPTY-FROM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 128
    },
    {
     "pattern": "EMPTY OUT OBJECT FROM OBJECT",
     "objects": 2,
     "particles": [
      "OUT",
      "FROM"
     ],
     "action": "V-EMPTY-FROM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 129
    },
    {
     "pattern": "EMPTY OBJECT OUT OBJECT",
     "objects": 2,
     "particles": [
      "OUT"
     ],
     "action": "V-EMPTY-FROM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 130
    }
   ]
  },
  "ENTER": {
   "verb": "ENTER",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ENTER OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-ENTER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 132
    }
   ]
  },
  "EXAMINE": {
   "verb": "EXAMINE",
   "synonyms": [
    "X"
   ],
   "productions": [
    {
     "pattern": "EXAMINE OBJECT (HAVE EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-EXAMINE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 135
    }
   ]
  },
  "EXIT": {
   "verb": "EXIT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EXIT OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 137
    }
   ]
  },
  "EXTINGUISH": {
   "verb": "EXTINGUISH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EXTINGUISH OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-EXTINGUISH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 139
    }
   ]
  },
  "FOLLOW": {
   "verb": "FOLLOW",
   "synonyms": [
    "CHASE",
    "TAIL"
   ],
   "productions": [
    {
     "pattern": "FOLLOW OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 146
    },
    {
     "pattern": "FOLLOW AFTER OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "AFTER"
     ],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 147
    }
   ]
  },
  "GET": {
   "verb": "GET",
   "synonyms": [],
   "productions": [
    {
     "pattern": "GET OBJECT (FIND FL-TAKEABLE) (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 153
    },
    {
     "pattern": "GET OBJECT (IN-ROOM CARRIED MANY) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 154
    },
    {
     "pattern": "GET OBJECT (IN-ROOM CARRIED MANY) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 155
    },
    {
     "pattern": "GET OBJECT (CARRIED IN-ROOM MANY) OFF OBJECT",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 156
    },
    {
     "pattern": "GET OBJECT (CARRIED IN-ROOM MANY) OUT OBJECT",
     "objects": 2,
     "particles": [
      "OUT"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 157
    },
    {
     "pattern": "GET OBJECT WITH OBJECT (HELD)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TAKE-WITH",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 158
    },
    {
     "pattern": "GET RID OBJECT",
     "objects": 1,
     "particles": [
      "RID"
     ],
     "action": "V-DROP",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 159
    },
    {
     "pattern": "GET IN OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-ENTER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 160
    },
    {
     "pattern": "GET FROM OBJECT (FIND FL-ROOMS)",
     "objects": 1,
     "particles": [
      "FROM"
     ],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 161
    },
    {
     "pattern": "GET OUT OBJECT (FIND FL-ROOMS)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 162
    },
    {
     "pattern": "GET THROUGH OBJECT",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-ENTER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 163
    }
   ]
  },
  "GIVE": {
   "verb": "GIVE",
   "synonyms": [
    "HAND",
    "GRANT",
    "DELIVER",
    "OFFER",
    "LOAN",
    "LEND"
   ],
   "productions": [
    {
     "pattern": "GIVE OBJECT (HELD CARRIED HAVE TAKE MANY) TO OBJECT (FIND FL-PERSON) (IN-ROOM ON-GROUND)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-GIVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 166
    },
    {
     "pattern": "GIVE OBJECT (ON-GROUND IN-ROOM) OBJECT (HELD CARRIED HAVE TAKE MANY)",
     "objects": 2,
     "particles": [],
     "action": "V-GIVE-SWP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 167
    }
   ]
  },
  "HOLD": {
   "verb": "HOLD",
   "synonyms": [],
   "productions": [
    {
     "pattern": "HOLD OBJECT (FIND FL-TAKEABLE) (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 176
    }
   ]
  },
  "HIT": {
   "verb": "HIT",
   "synonyms": [
    "SLAP",
    "WHACK",
    "SWAT",
    "STRIKE",
    "PUNCH"
   ],
   "productions": [
    {
     "pattern": "HIT OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND FL-BY-HAND) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-HIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 179
    },
    {
     "pattern": "HIT AT OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND FL-BY-HAND) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "AT",
      "WITH"
     ],
     "action": "V-HIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 180
    }
   ]
  },
  "INFLATE": {
   "verb": "INFLATE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "INFLATE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-INFLATE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 186
    }
   ]
  },
  "INVENTORY": {
   "verb": "INVENTORY",
   "synonyms": [
    "I",
    "INVENT"
   ],
   "productions": [
    {
     "pattern": "INVENTORY",
     "objects": 0,
     "particles": [],
     "action": "V-INVENTORY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 189
    }
   ]
  },
  "JUMP": {
   "verb": "JUMP",
   "synonyms": [],
   "productions": [
    {
     "pattern": "JUMP FROM OBJECT",
     "objects": 1,
     "particles": [
      "FROM"
     ],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 195
    },
    {
     "pattern": "JUMP IN OBJECT (FIND FL-ROOMS)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-ENTER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 196
    },
    {
     "pattern": "JUMP OUT OBJECT (FIND FL-ROOMS)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 197
    },
    {
     "pattern": "JUMP TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-ENTER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 198
    },
    {
     "pattern": "JUMP THROUGH OBJECT",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-ENTER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 199
    }
   ]
  },
  "LET": {
   "verb": "LET",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LET GO OBJECT (HELD)",
     "objects": 1,
     "particles": [
      "GO"
     ],
     "action": "V-DROP",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 216
    }
   ]
  },
  "LIFT": {
   "verb": "LIFT",
   "synonyms": [
    "RAISE"
   ],
   "productions": [
    {
     "pattern": "LIFT OBJECT WITH OBJECT (HELD HAVE) (FIND FL-BY-HAND)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-LIFT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 222
    }
   ]
  },
  "LISTEN": {
   "verb": "LISTEN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LISTEN OBJECT (FIND FL-ROOMS)",
     "objects": 1,
     "particles": [],
     "action": "V-LISTEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 224
    },
    {
     "pattern": "LISTEN AT OBJECT",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-LISTEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 225
    },
    {
     "pattern": "LISTEN THROUGH OBJECT",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-LISTEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 226
    },
    {
     "pattern": "LISTEN TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-LISTEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 227
    }
   ]
  },
  "LOCK": {
   "verb": "LOCK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LOCK OBJECT WITH OBJECT (HELD HAVE TAKE) (FIND FL-KEY)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-LOCK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 229
    }
   ]
  },
  "LOOK": {
   "verb": "LOOK",
   "synonyms": [
    "L"
   ],
   "productions": [
    {
     "pattern": "LOOK",
     "objects": 0,
     "particles": [],
     "action": "V-LOOK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 232
    },
    {
     "pattern": "LOOK OBJECT (HAVE EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-EXAMINE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 233
    },
    {
     "pattern": "LOOK AROUND OBJECT (FIND FL-ROOMS)",
     "objects": 1,
     "particles": [
      "AROUND"
     ],
     "action": "V-LOOK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 234
    },
    {
     "pattern": "LOOK AT OBJECT (HAVE EVERYWHERE)",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-EXAMINE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 235
    },
    {
     "pattern": "LOOK IN OBJECT (HELD CARRIED ON-GROUND IN-ROOM) (FIND FL-ROOMS)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LOOK-IN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 236
    },
    {
     "pattern": "LOOK ON OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LOOK-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 237
    },
    {
     "pattern": "LOOK OVER OBJECT",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-EXAMINE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 238
    },
    {
     "pattern": "LOOK BEHIND OBJECT",
     "objects": 1,
     "particles": [
      "BEHIND"
     ],
     "action": "V-LOOK-BEHIND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 241
    },
    {
     "pattern": "LOOK UNDER OBJECT",
     "objects": 1,
     "particles": [
      "UNDER"
     ],
     "action": "V-LOOK-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 242
    }
   ]
  },
  "MOVE": {
   "verb": "MOVE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "MOVE OBJECT WITH OBJECT (HELD HAVE) (FIND FL-BY-HAND)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-MOVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 248
    }
   ]
  },
  "NO": {
   "verb": "NO",
   "synonyms": [],
   "productions": [
    {
     "pattern": "NO",
     "objects": 0,
     "particles": [],
     "action": "V-NO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 255
    }
   ]
  },
  "OPEN": {
   "verb": "OPEN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "OPEN OBJECT (FIND FL-OPENABLE)",
     "objects": 1,
     "particles": [],
     "action": "V-OPEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 261
    },
    {
     "pattern": "OPEN UP OBJECT (FIND FL-OPENABLE)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-OPEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 262
    },
    {
     "pattern": "OPEN OBJECT (FIND FL-OPENABLE) WITH OBJECT (FIND FL-KEY) (HAVE TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-OPEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 263
    }
   ]
  },
  "PICK": {
   "verb": "PICK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PICK OBJECT (FIND FL-TAKEABLE) (ON-GROUND MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 269
    },
    {
     "pattern": "PICK UP OBJECT (FIND FL-TAKEABLE) (ON-GROUND MANY)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 270
    }
   ]
  },
  "PLUG": {
   "verb": "PLUG",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PLUG IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-PLUG-IN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 272
    }
   ]
  },
  "PRESS": {
   "verb": "PRESS",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PRESS OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-PUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 276
    }
   ]
  },
  "PULL": {
   "verb": "PULL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PULL OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-PULL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 278
    },
    {
     "pattern": "PULL OBJECT (CARRIED IN-ROOM MANY) OFF OBJECT",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 280
    },
    {
     "pattern": "PULL OUT OBJECT (CARRIED IN-ROOM MANY)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 281
    },
    {
     "pattern": "PULL OBJECT (CARRIED IN-ROOM MANY) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 282
    },
    {
     "pattern": "PULL OBJECT (CARRIED IN-ROOM MANY) OUT OBJECT",
     "objects": 2,
     "particles": [
      "OUT"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 283
    }
   ]
  },
  "PUSH": {
   "verb": "PUSH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PUSH OBJECT (HELD CARRIED MANY HAVE TAKE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT-IN",
     "preaction": "PRE-PUT-IN",
     "file": "syntax.zil",
     "line": 285
    },
    {
     "pattern": "PUSH OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-PUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 286
    }
   ]
  },
  "PUT": {
   "verb": "PUT",
   "synonyms": [
    "PLACE"
   ],
   "productions": [
    {
     "pattern": "PUT OBJECT (HELD MANY HAVE TAKE) ON OBJECT (FIND FL-SURFACE)",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 289
    },
    {
     "pattern": "PUT OBJECT (HELD MANY HAVE TAKE) ACROSS OBJECT",
     "objects": 2,
     "particles": [
      "ACROSS"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 290
    },
    {
     "pattern": "PUT OBJECT (HELD MANY HAVE TAKE) AROUND OBJECT",
     "objects": 2,
     "particles": [
      "AROUND"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 291
    },
    {
     "pattern": "PUT OBJECT (HELD MANY HAVE TAKE) DOWN OBJECT",
     "objects": 2,
     "particles": [
      "DOWN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 292
    },
    {
     "pattern": "PUT OBJECT (HELD MANY HAVE TAKE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT-IN",
     "preaction": "PRE-PUT-IN",
     "file": "syntax.zil",
     "line": 293
    },
    {
     "pattern": "PUT OBJECT (HELD MANY HAVE TAKE) OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 294
    },
    {
     "pattern": "PUT AWAY OBJECT (HELD MANY HAVE TAKE) IN OBJECT",
     "objects": 2,
     "particles": [
      "AWAY",
      "IN"
     ],
     "action": "V-PUT-IN",
     "preaction": "PRE-PUT-IN",
     "file": "syntax.zil",
     "line": 295
    },
    {
     "pattern": "PUT DOWN OBJECT (HELD MANY HAVE)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-DROP",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 296
    },
    {
     "pattern": "PUT ON OBJECT (HELD HAVE TAKE)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-WEAR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 297
    },
    {
     "pattern": "PUT OUT OBJECT",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-EXTINGUISH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 298
    }
   ]
  },
  "REACH": {
   "verb": "REACH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "REACH IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-REACH-IN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 308
    },
    {
     "pattern": "REACH UNDER OBJECT WITH OBJECT (FIND FL-ROOMS) (HELD)",
     "objects": 2,
     "particles": [
      "UNDER",
      "WITH"
     ],
     "action": "V-REACH-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 309
    },
    {
     "pattern": "REACH BEHIND OBJECT",
     "objects": 1,
     "particles": [
      "BEHIND"
     ],
     "action": "V-REACH-BEHIND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 310
    }
   ]
  },
  "READ": {
   "verb": "READ",
   "synonyms": [
    "SKIM",
    "BROWSE",
    "LEAF"
   ],
   "productions": [
    {
     "pattern": "READ OBJECT (TAKE)",
     "objects": 1,
     "particles": [],
     "action": "V-READ",
     "preaction": null,
     "file": "syntax.zil",
     "line": 313
    },
    {
     "pattern": "READ THROUGH OBJECT (TAKE)",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-READ",
     "preaction": null,
     "file": "syntax.zil",
     "line": 314
    }
   ]
  },
  "REMOVE": {
   "verb": "REMOVE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "REMOVE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-UNWEAR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 316
    },
    {
     "pattern": "REMOVE OBJECT (IN-ROOM CARRIED MANY) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 317
    }
   ]
  },
  "SET": {
   "verb": "SET",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SET OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-TURN-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 325
    },
    {
     "pattern": "SET OBJECT (HELD MANY HAVE TAKE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 326
    },
    {
     "pattern": "SET OBJECT (HELD MANY HAVE TAKE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT-IN",
     "preaction": "PRE-PUT-IN",
     "file": "syntax.zil",
     "line": 327
    }
   ]
  },
  "SHOW": {
   "verb": "SHOW",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SHOW OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-SHOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 329
    },
    {
     "pattern": "SHOW OBJECT OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-SHOW-SWP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 330
    }
   ]
  },
  "SIT": {
   "verb": "SIT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SIT ON OBJECT (FIND FL-ROOMS) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-SIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 332
    },
    {
     "pattern": "SIT IN OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-ENTER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 333
    },
    {
     "pattern": "SIT DOWN OBJECT (FIND FL-ROOMS)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-SIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 334
    },
    {
     "pattern": "SIT AT OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-SIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 335
    }
   ]
  },
  "SLIDE": {
   "verb": "SLIDE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SLIDE OBJECT (HELD MANY HAVE TAKE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT-IN",
     "preaction": "PRE-PUT-IN",
     "file": "syntax.zil",
     "line": 337
    }
   ]
  },
  "STICK": {
   "verb": "STICK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "STICK OBJECT (HELD MANY HAVE TAKE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 340
    },
    {
     "pattern": "STICK OBJECT (HELD MANY HAVE TAKE) IN OBJECT (FIND FL-ROOMS)",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT-IN",
     "preaction": "PRE-PUT-IN",
     "file": "syntax.zil",
     "line": 341
    }
   ]
  },
  "SWITCH": {
   "verb": "SWITCH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SWITCH ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-TURN-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 343
    },
    {
     "pattern": "SWITCH OBJECT ON OBJECT (FIND FL-ROOMS)",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-TURN-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 344
    },
    {
     "pattern": "SWITCH OFF OBJECT",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-TURN-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 345
    },
    {
     "pattern": "SWITCH OBJECT OFF OBJECT (FIND FL-ROOMS)",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-TURN-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 346
    }
   ]
  },
  "TELL": {
   "verb": "TELL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TELL OBJECT (FIND FL-PERSON) (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-TELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 352
    },
    {
     "pattern": "TELL OBJECT (FIND FL-PERSON) (ON-GROUND IN-ROOM) ABOUT OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [
      "ABOUT"
     ],
     "action": "V-TELL-ABOUT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 353
    },
    {
     "pattern": "TELL OBJECT (FIND FL-PERSON) (ON-GROUND IN-ROOM) OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [],
     "action": "V-TELL-ABOUT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 354
    }
   ]
  },
  "TALK": {
   "verb": "TALK",
   "synonyms": [
    "SPEAK",
    "CONVERSE"
   ],
   "productions": [
    {
     "pattern": "TALK TO OBJECT (FIND FL-PERSON) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-TALK-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 357
    },
    {
     "pattern": "TALK WITH OBJECT (FIND FL-PERSON) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-TALK-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 358
    }
   ]
  },
  "TAKE": {
   "verb": "TAKE",
   "synonyms": [
    "CATCH",
    "GRAB",
    "PLUCK",
    "GRASP"
   ],
   "productions": [
    {
     "pattern": "TAKE OBJECT (FIND FL-TAKEABLE) (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 361
    },
    {
     "pattern": "TAKE OBJECT (CARRIED IN-ROOM MANY) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 362
    },
    {
     "pattern": "TAKE OBJECT (CARRIED IN-ROOM MANY) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 363
    },
    {
     "pattern": "TAKE OBJECT (CARRIED IN-ROOM MANY) OFF OBJECT",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 364
    },
    {
     "pattern": "TAKE OBJECT (CARRIED IN-ROOM MANY) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 365
    },
    {
     "pattern": "TAKE OBJECT (CARRIED IN-ROOM MANY) OUT OBJECT",
     "objects": 2,
     "particles": [
      "OUT"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 366
    },
    {
     "pattern": "TAKE OBJECT WITH OBJECT (HELD)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TAKE-WITH",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 367
    },
    {
     "pattern": "TAKE OUT OBJECT (CARRIED IN-ROOM MANY)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 368
    },
    {
     "pattern": "TAKE UP OBJECT (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 369
    },
    {
     "pattern": "TAKE OFF OBJECT (HELD HAVE)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-UNWEAR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 370
    }
   ]
  },
  "THANK": {
   "verb": "THANK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "THANK OBJECT (FIND FL-PERSON) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-THANK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 372
    }
   ]
  },
  "TIE": {
   "verb": "TIE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TIE OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-TIE-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 375
    }
   ]
  },
  "THROW": {
   "verb": "THROW",
   "synonyms": [],
   "productions": [
    {
     "pattern": "THROW AWAY OBJECT (HELD CARRIED HAVE)",
     "objects": 1,
     "particles": [
      "AWAY"
     ],
     "action": "V-DROP",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 377
    },
    {
     "pattern": "THROW OBJECT (HELD MANY HAVE TAKE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT-IN",
     "preaction": "PRE-PUT-IN",
     "file": "syntax.zil",
     "line": 378
    },
    {
     "pattern": "THROW OBJECT (HELD MANY HAVE TAKE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 379
    },
    {
     "pattern": "THROW OBJECT (HELD MANY HAVE TAKE) OVER OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 380
    }
   ]
  },
  "TURN": {
   "verb": "TURN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TURN OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-TURN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 383
    },
    {
     "pattern": "TURN OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-TURN-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 384
    },
    {
     "pattern": "TURN OBJECT OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-TURN-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 385
    },
    {
     "pattern": "TURN ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-TURN-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 386
    },
    {
     "pattern": "TURN OBJECT ON OBJECT (FIND FL-ROOMS)",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-TURN-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 387
    },
    {
     "pattern": "TURN OFF OBJECT",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-TURN-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 388
    },
    {
     "pattern": "TURN OBJECT OFF OBJECT (FIND FL-ROOMS)",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-TURN-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 389
    }
   ]
  },
  "UNLOCK": {
   "verb": "UNLOCK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "UNLOCK OBJECT WITH OBJECT (HELD HAVE TAKE) (FIND FL-KEY)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-UNLOCK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 395
    }
   ]
  },
  "WAIT": {
   "verb": "WAIT",
   "synonyms": [
    "Z"
   ],
   "productions": [
    {
     "pattern": "WAIT",
     "objects": 0,
     "particles": [],
     "action": "V-WAIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 406
    },
    {
     "pattern": "WAIT OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-WAIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 407
    },
    {
     "pattern": "WAIT FOR OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-WAIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 408
    }
   ]
  },
  "WALK": {
   "verb": "WALK",
   "synonyms": [
    "HEAD",
    "GO",
    "RUN",
    "PROCEED",
    "SWIM"
   ],
   "productions": [
    {
     "pattern": "WALK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WALK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 411
    },
    {
     "pattern": "WALK IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-ENTER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 412
    },
    {
     "pattern": "WALK THROUGH OBJECT",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-ENTER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 413
    },
    {
     "pattern": "WALK TO OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-WALK-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 414
    },
    {
     "pattern": "WALK AFTER OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "AFTER"
     ],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 415
    }
   ]
  },
  "WEAR": {
   "verb": "WEAR",
   "synonyms": [
    "DON"
   ],
   "productions": [
    {
     "pattern": "WEAR OBJECT (HELD ON-GROUND TAKE)",
     "objects": 1,
     "particles": [],
     "action": "V-WEAR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 418
    }
   ]
  },
  "WELD": {
   "verb": "WELD",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WELD OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WELD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 420
    }
   ]
  },
  "YES": {
   "verb": "YES",
   "synonyms": [
    "Y"
   ],
   "productions": [
    {
     "pattern": "YES",
     "objects": 0,
     "particles": [],
     "action": "V-YES",
     "preaction": null,
     "file": "syntax.zil",
     "line": 431
    }
   ]
  },
  "COLOR": {
   "verb": "COLOR",
   "synonyms": [
    "COLOUR"
   ],
   "productions": [
    {
     "pattern": "COLOR",
     "objects": 0,
     "particles": [],
     "action": "V-COLOR",
     "preaction": null,
     "file": "util.zil",
     "line": 203
    }
   ]
  }
 },
 "vocab": {
  "BE": {
   "word": "BE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "BE?": {
   "word": "BE?",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "WHO": {
   "word": "WHO",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "WHAT": {
   "word": "WHAT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "WHERE": {
   "word": "WHERE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "WHEN": {
   "word": "WHEN",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "WHY": {
   "word": "WHY",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "HOW": {
   "word": "HOW",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "CAN": {
   "word": "CAN",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "MAY": {
   "word": "MAY",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "DO": {
   "word": "DO",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "COULD": {
   "word": "COULD",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "WOULD": {
   "word": "WOULD",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SHOULD": {
   "word": "SHOULD",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "MIGHT": {
   "word": "MIGHT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "WILL": {
   "word": "WILL",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "MUST": {
   "word": "MUST",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "$SCRUB": {
   "word": "$SCRUB",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "$AIR": {
   "word": "$AIR",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "$HEAT": {
   "word": "$HEAT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "$NITROGEN": {
   "word": "$NITROGEN",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "$REFRESH": {
   "word": "$REFRESH",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "R": {
   "word": "R",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "$REFRESH"
    }
   ]
  },
  "$VERIFY": {
   "word": "$VERIFY",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "BRIEF": {
   "word": "BRIEF",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "VERBOSE": {
   "word": "VERBOSE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "BRIEF"
    }
   ]
  },
  "SUPER": {
   "word": "SUPER",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "BRIEF"
    }
   ]
  },
  "SUPERBRIEF": {
   "word": "SUPERBRIEF",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "BRIEF"
    }
   ]
  },
  "QUIT": {
   "word": "QUIT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "Q": {
   "word": "Q",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "QUIT"
    }
   ]
  },
  "RESTART": {
   "word": "RESTART",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "RESTORE": {
   "word": "RESTORE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SAVE": {
   "word": "SAVE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "START": {
   "word": "START",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "OVER": {
   "word": "OVER",
   "roles": [
    {
     "kind": "particle",
     "of": "START"
    },
    {
     "kind": "particle",
     "of": "LOOK"
    },
    {
     "kind": "particle",
     "of": "PUT"
    },
    {
     "kind": "particle",
     "of": "THROW"
    }
   ]
  },
  "SCRIPT": {
   "word": "SCRIPT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "UNSCRIPT": {
   "word": "UNSCRIPT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SCRIPT"
    }
   ]
  },
  "UNDO": {
   "word": "UNDO",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "VERSION": {
   "word": "VERSION",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "$VERSION": {
   "word": "$VERSION",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "VERSION"
    }
   ]
  },
  "SCORE": {
   "word": "SCORE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "DIAGNOSE": {
   "word": "DIAGNOSE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "ASK": {
   "word": "ASK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "ABOUT": {
   "word": "ABOUT",
   "roles": [
    {
     "kind": "particle",
     "of": "ASK"
    },
    {
     "kind": "particle",
     "of": "TELL"
    }
   ]
  },
  "ATTACH": {
   "word": "ATTACH",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "CONNECT": {
   "word": "CONNECT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "ATTACH"
    }
   ]
  },
  "TO": {
   "word": "TO",
   "roles": [
    {
     "kind": "particle",
     "of": "ATTACH"
    },
    {
     "kind": "particle",
     "of": "CLAMP"
    },
    {
     "kind": "particle",
     "of": "GIVE"
    },
    {
     "kind": "particle",
     "of": "JUMP"
    },
    {
     "kind": "particle",
     "of": "LISTEN"
    },
    {
     "kind": "particle",
     "of": "SET"
    },
    {
     "kind": "particle",
     "of": "SHOW"
    },
    {
     "kind": "particle",
     "of": "TALK"
    },
    {
     "kind": "particle",
     "of": "TIE"
    },
    {
     "kind": "particle",
     "of": "TURN"
    },
    {
     "kind": "particle",
     "of": "WALK"
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "BLOW": {
   "word": "BLOW",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "UP": {
   "word": "UP",
   "roles": [
    {
     "kind": "particle",
     "of": "BLOW"
    },
    {
     "kind": "particle",
     "of": "OPEN"
    },
    {
     "kind": "particle",
     "of": "PICK"
    },
    {
     "kind": "particle",
     "of": "TAKE"
    },
    {
     "kind": "direction",
     "of": null
    }
   ]
  },
  "CLAMP": {
   "word": "CLAMP",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "TH-RED-CABLE"
    }
   ]
  },
  "CLOSE": {
   "word": "CLOSE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SHUT": {
   "word": "SHUT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CLOSE"
    }
   ]
  },
  "CUT": {
   "word": "CUT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "WITH": {
   "word": "WITH",
   "roles": [
    {
     "kind": "particle",
     "of": "CUT"
    },
    {
     "kind": "particle",
     "of": "GET"
    },
    {
     "kind": "particle",
     "of": "HIT"
    },
    {
     "kind": "particle",
     "of": "LIFT"
    },
    {
     "kind": "particle",
     "of": "LOCK"
    },
    {
     "kind": "particle",
     "of": "MOVE"
    },
    {
     "kind": "particle",
     "of": "OPEN"
    },
    {
     "kind": "particle",
     "of": "REACH"
    },
    {
     "kind": "particle",
     "of": "TALK"
    },
    {
     "kind": "particle",
     "of": "TAKE"
    },
    {
     "kind": "particle",
     "of": "UNLOCK"
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "DROP": {
   "word": "DROP",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "DOWN": {
   "word": "DOWN",
   "roles": [
    {
     "kind": "particle",
     "of": "DROP"
    },
    {
     "kind": "particle",
     "of": "PUT"
    },
    {
     "kind": "particle",
     "of": "SIT"
    },
    {
     "kind": "direction",
     "of": null
    }
   ]
  },
  "IN": {
   "word": "IN",
   "roles": [
    {
     "kind": "particle",
     "of": "DROP"
    },
    {
     "kind": "particle",
     "of": "EMPTY"
    },
    {
     "kind": "particle",
     "of": "GET"
    },
    {
     "kind": "particle",
     "of": "JUMP"
    },
    {
     "kind": "particle",
     "of": "LOOK"
    },
    {
     "kind": "particle",
     "of": "PLUG"
    },
    {
     "kind": "particle",
     "of": "PUSH"
    },
    {
     "kind": "particle",
     "of": "PUT"
    },
    {
     "kind": "particle",
     "of": "REACH"
    },
    {
     "kind": "particle",
     "of": "SET"
    },
    {
     "kind": "particle",
     "of": "SIT"
    },
    {
     "kind": "particle",
     "of": "SLIDE"
    },
    {
     "kind": "particle",
     "of": "STICK"
    },
    {
     "kind": "particle",
     "of": "TAKE"
    },
    {
     "kind": "particle",
     "of": "THROW"
    },
    {
     "kind": "particle",
     "of": "WALK"
    },
    {
     "kind": "direction",
     "of": null
    }
   ]
  },
  "ON": {
   "word": "ON",
   "roles": [
    {
     "kind": "particle",
     "of": "DROP"
    },
    {
     "kind": "particle",
     "of": "EMPTY"
    },
    {
     "kind": "particle",
     "of": "LOOK"
    },
    {
     "kind": "particle",
     "of": "PUT"
    },
    {
     "kind": "particle",
     "of": "SET"
    },
    {
     "kind": "particle",
     "of": "SIT"
    },
    {
     "kind": "particle",
     "of": "STICK"
    },
    {
     "kind": "particle",
     "of": "SWITCH"
    },
    {
     "kind": "particle",
     "of": "TAKE"
    },
    {
     "kind": "particle",
     "of": "THROW"
    },
    {
     "kind": "particle",
     "of": "TURN"
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "EMPTY": {
   "word": "EMPTY",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "POUR": {
   "word": "POUR",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EMPTY"
    }
   ]
  },
  "OUT": {
   "word": "OUT",
   "roles": [
    {
     "kind": "particle",
     "of": "EMPTY"
    },
    {
     "kind": "particle",
     "of": "GET"
    },
    {
     "kind": "particle",
     "of": "JUMP"
    },
    {
     "kind": "particle",
     "of": "PULL"
    },
    {
     "kind": "particle",
     "of": "PUT"
    },
    {
     "kind": "particle",
     "of": "TAKE"
    },
    {
     "kind": "direction",
     "of": null
    }
   ]
  },
  "FROM": {
   "word": "FROM",
   "roles": [
    {
     "kind": "particle",
     "of": "EMPTY"
    },
    {
     "kind": "particle",
     "of": "GET"
    },
    {
     "kind": "particle",
     "of": "JUMP"
    },
    {
     "kind": "particle",
     "of": "PULL"
    },
    {
     "kind": "particle",
     "of": "REMOVE"
    },
    {
     "kind": "particle",
     "of": "TAKE"
    }
   ]
  },
  "ENTER": {
   "word": "ENTER",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "EXAMINE": {
   "word": "EXAMINE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "X": {
   "word": "X",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EXAMINE"
    }
   ]
  },
  "EXIT": {
   "word": "EXIT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "EXTINGUISH": {
   "word": "EXTINGUISH",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "FOLLOW": {
   "word": "FOLLOW",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "CHASE": {
   "word": "CHASE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "FOLLOW"
    }
   ]
  },
  "TAIL": {
   "word": "TAIL",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "FOLLOW"
    }
   ]
  },
  "AFTER": {
   "word": "AFTER",
   "roles": [
    {
     "kind": "particle",
     "of": "FOLLOW"
    },
    {
     "kind": "particle",
     "of": "WALK"
    }
   ]
  },
  "GET": {
   "word": "GET",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "OFF": {
   "word": "OFF",
   "roles": [
    {
     "kind": "particle",
     "of": "GET"
    },
    {
     "kind": "particle",
     "of": "PULL"
    },
    {
     "kind": "particle",
     "of": "SWITCH"
    },
    {
     "kind": "particle",
     "of": "TAKE"
    },
    {
     "kind": "particle",
     "of": "TURN"
    }
   ]
  },
  "RID": {
   "word": "RID",
   "roles": [
    {
     "kind": "particle",
     "of": "GET"
    }
   ]
  },
  "THROUGH": {
   "word": "THROUGH",
   "roles": [
    {
     "kind": "particle",
     "of": "GET"
    },
    {
     "kind": "particle",
     "of": "JUMP"
    },
    {
     "kind": "particle",
     "of": "LISTEN"
    },
    {
     "kind": "particle",
     "of": "READ"
    },
    {
     "kind": "particle",
     "of": "WALK"
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "GIVE": {
   "word": "GIVE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "HAND": {
   "word": "HAND",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "GIVE"
    },
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-HANDS"
    }
   ]
  },
  "GRANT": {
   "word": "GRANT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "GIVE"
    }
   ]
  },
  "DELIVER": {
   "word": "DELIVER",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "GIVE"
    }
   ]
  },
  "OFFER": {
   "word": "OFFER",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "GIVE"
    }
   ]
  },
  "LOAN": {
   "word": "LOAN",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "GIVE"
    }
   ]
  },
  "LEND": {
   "word": "LEND",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "GIVE"
    }
   ]
  },
  "HOLD": {
   "word": "HOLD",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "HIT": {
   "word": "HIT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SLAP": {
   "word": "SLAP",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HIT"
    }
   ]
  },
  "WHACK": {
   "word": "WHACK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HIT"
    }
   ]
  },
  "SWAT": {
   "word": "SWAT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HIT"
    }
   ]
  },
  "STRIKE": {
   "word": "STRIKE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HIT"
    }
   ]
  },
  "PUNCH": {
   "word": "PUNCH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HIT"
    }
   ]
  },
  "AT": {
   "word": "AT",
   "roles": [
    {
     "kind": "particle",
     "of": "HIT"
    },
    {
     "kind": "particle",
     "of": "LISTEN"
    },
    {
     "kind": "particle",
     "of": "LOOK"
    },
    {
     "kind": "particle",
     "of": "SIT"
    }
   ]
  },
  "INFLATE": {
   "word": "INFLATE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "INVENTORY": {
   "word": "INVENTORY",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "I": {
   "word": "I",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "INVENTORY"
    }
   ]
  },
  "INVENT": {
   "word": "INVENT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "INVENTORY"
    }
   ]
  },
  "JUMP": {
   "word": "JUMP",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "LET": {
   "word": "LET",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "GO": {
   "word": "GO",
   "roles": [
    {
     "kind": "particle",
     "of": "LET"
    },
    {
     "kind": "verb-synonym",
     "of": "WALK"
    }
   ]
  },
  "LIFT": {
   "word": "LIFT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "TH-LIFT-BENCH"
    },
    {
     "kind": "adjective",
     "of": "TH-LIFT-BAG"
    }
   ]
  },
  "RAISE": {
   "word": "RAISE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "LIFT"
    }
   ]
  },
  "LISTEN": {
   "word": "LISTEN",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "LOCK": {
   "word": "LOCK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "TH-ELECTRONIC-LOCK"
    }
   ]
  },
  "LOOK": {
   "word": "LOOK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "L": {
   "word": "L",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "LOOK"
    }
   ]
  },
  "AROUND": {
   "word": "AROUND",
   "roles": [
    {
     "kind": "particle",
     "of": "LOOK"
    },
    {
     "kind": "particle",
     "of": "PUT"
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "BEHIND": {
   "word": "BEHIND",
   "roles": [
    {
     "kind": "particle",
     "of": "LOOK"
    },
    {
     "kind": "particle",
     "of": "REACH"
    }
   ]
  },
  "UNDER": {
   "word": "UNDER",
   "roles": [
    {
     "kind": "particle",
     "of": "LOOK"
    },
    {
     "kind": "particle",
     "of": "REACH"
    }
   ]
  },
  "MOVE": {
   "word": "MOVE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "NO": {
   "word": "NO",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "OPEN": {
   "word": "OPEN",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "PICK": {
   "word": "PICK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "PLUG": {
   "word": "PLUG",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "TH-WELDER-SWITCH"
    }
   ]
  },
  "PRESS": {
   "word": "PRESS",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "PULL": {
   "word": "PULL",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "PUSH": {
   "word": "PUSH",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "PUT": {
   "word": "PUT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "PLACE": {
   "word": "PLACE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PUT"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-HERE"
    }
   ]
  },
  "ACROSS": {
   "word": "ACROSS",
   "roles": [
    {
     "kind": "particle",
     "of": "PUT"
    }
   ]
  },
  "AWAY": {
   "word": "AWAY",
   "roles": [
    {
     "kind": "particle",
     "of": "PUT"
    },
    {
     "kind": "particle",
     "of": "THROW"
    }
   ]
  },
  "REACH": {
   "word": "REACH",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "READ": {
   "word": "READ",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SKIM": {
   "word": "SKIM",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "READ"
    }
   ]
  },
  "BROWSE": {
   "word": "BROWSE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "READ"
    }
   ]
  },
  "LEAF": {
   "word": "LEAF",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "READ"
    }
   ]
  },
  "REMOVE": {
   "word": "REMOVE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SET": {
   "word": "SET",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SHOW": {
   "word": "SHOW",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SIT": {
   "word": "SIT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SLIDE": {
   "word": "SLIDE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "STICK": {
   "word": "STICK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SWITCH": {
   "word": "SWITCH",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "TH-WELDER-SWITCH"
    },
    {
     "kind": "noun",
     "of": "TH-DETONATOR"
    }
   ]
  },
  "TELL": {
   "word": "TELL",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "TALK": {
   "word": "TALK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SPEAK": {
   "word": "SPEAK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TALK"
    }
   ]
  },
  "CONVERSE": {
   "word": "CONVERSE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TALK"
    }
   ]
  },
  "TAKE": {
   "word": "TAKE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "CATCH": {
   "word": "CATCH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TAKE"
    }
   ]
  },
  "GRAB": {
   "word": "GRAB",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TAKE"
    }
   ]
  },
  "PLUCK": {
   "word": "PLUCK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TAKE"
    }
   ]
  },
  "GRASP": {
   "word": "GRASP",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TAKE"
    }
   ]
  },
  "THANK": {
   "word": "THANK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "TIE": {
   "word": "TIE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "THROW": {
   "word": "THROW",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "TURN": {
   "word": "TURN",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "TH-TIME"
    }
   ]
  },
  "UNLOCK": {
   "word": "UNLOCK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "WAIT": {
   "word": "WAIT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "Z": {
   "word": "Z",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WAIT"
    }
   ]
  },
  "FOR": {
   "word": "FOR",
   "roles": [
    {
     "kind": "particle",
     "of": "WAIT"
    }
   ]
  },
  "WALK": {
   "word": "WALK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "HEAD": {
   "word": "HEAD",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WALK"
    },
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-HEAD"
    }
   ]
  },
  "RUN": {
   "word": "RUN",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WALK"
    }
   ]
  },
  "PROCEED": {
   "word": "PROCEED",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WALK"
    }
   ]
  },
  "SWIM": {
   "word": "SWIM",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WALK"
    }
   ]
  },
  "WEAR": {
   "word": "WEAR",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "DON": {
   "word": "DON",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WEAR"
    }
   ]
  },
  "WELD": {
   "word": "WELD",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "YES": {
   "word": "YES",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "Y": {
   "word": "Y",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "YES"
    }
   ]
  },
  "COLOR": {
   "word": "COLOR",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "COLOUR": {
   "word": "COLOUR",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "COLOR"
    }
   ]
  },
  "USING": {
   "word": "USING",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WITH"
    }
   ]
  },
  "TOWARD": {
   "word": "TOWARD",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TO"
    }
   ]
  },
  "TOWARDS": {
   "word": "TOWARDS",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TO"
    }
   ]
  },
  "ALONG": {
   "word": "ALONG",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "AROUND"
    }
   ]
  },
  "ALL": {
   "word": "ALL",
   "roles": [
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "BOTH": {
   "word": "BOTH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ALL"
    }
   ]
  },
  "THRU": {
   "word": "THRU",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "THROUGH"
    }
   ]
  },
  "INTO": {
   "word": "INTO",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "IN"
    }
   ]
  },
  "INSIDE": {
   "word": "INSIDE",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "IN"
    }
   ]
  },
  "ONTO": {
   "word": "ONTO",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ON"
    }
   ]
  },
  "FORE": {
   "word": "FORE",
   "roles": [
    {
     "kind": "direction",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "LG-DGS-DOOR"
    },
    {
     "kind": "noun",
     "of": "INTDIR"
    },
    {
     "kind": "adjective",
     "of": "LG-WALL"
    }
   ]
  },
  "STARBOARD": {
   "word": "STARBOARD",
   "roles": [
    {
     "kind": "direction",
     "of": null
    },
    {
     "kind": "noun",
     "of": "INTDIR"
    },
    {
     "kind": "adjective",
     "of": "LG-WALL"
    }
   ]
  },
  "AFT": {
   "word": "AFT",
   "roles": [
    {
     "kind": "direction",
     "of": null
    },
    {
     "kind": "noun",
     "of": "INTDIR"
    },
    {
     "kind": "adjective",
     "of": "LG-WALL"
    }
   ]
  },
  "PORT": {
   "word": "PORT",
   "roles": [
    {
     "kind": "direction",
     "of": null
    },
    {
     "kind": "noun",
     "of": "INTDIR"
    },
    {
     "kind": "adjective",
     "of": "LG-WALL"
    }
   ]
  },
  "NORTH": {
   "word": "NORTH",
   "roles": [
    {
     "kind": "direction",
     "of": null
    },
    {
     "kind": "noun",
     "of": "INTDIR"
    }
   ]
  },
  "SOUTH": {
   "word": "SOUTH",
   "roles": [
    {
     "kind": "direction",
     "of": null
    },
    {
     "kind": "noun",
     "of": "INTDIR"
    }
   ]
  },
  "EAST": {
   "word": "EAST",
   "roles": [
    {
     "kind": "direction",
     "of": null
    },
    {
     "kind": "noun",
     "of": "INTDIR"
    }
   ]
  },
  "WEST": {
   "word": "WEST",
   "roles": [
    {
     "kind": "direction",
     "of": null
    },
    {
     "kind": "noun",
     "of": "INTDIR"
    }
   ]
  },
  "NOW": {
   "word": "NOW",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "SOON": {
   "word": "SOON",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "THERE": {
   "word": "THERE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "PLEASE": {
   "word": "PLEASE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "BACK": {
   "word": "BACK",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    },
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "ANYWAY": {
   "word": "ANYWAY",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "OH": {
   "word": "OH",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "LIE": {
   "word": "LIE",
   "roles": [
    {
     "kind": "voc",
     "of": null
    }
   ]
  },
  "SAY": {
   "word": "SAY",
   "roles": [
    {
     "kind": "voc",
     "of": null
    }
   ]
  },
  "BUTTON": {
   "word": "BUTTON",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-PURPLE-BUTTON"
    },
    {
     "kind": "noun",
     "of": "TH-FUSCHIA-BUTTON"
    },
    {
     "kind": "noun",
     "of": "TH-PT-BILGE-BUTTON"
    },
    {
     "kind": "noun",
     "of": "TH-SB-BILGE-BUTTON"
    },
    {
     "kind": "noun",
     "of": "TH-RED-BUTTON"
    },
    {
     "kind": "noun",
     "of": "TH-S-BILGE-BUTT"
    }
   ]
  },
  "PURPLE": {
   "word": "PURPLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-PURPLE-BUTTON"
    }
   ]
  },
  "SHIP": {
   "word": "SHIP",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-ALIEN-SHIP"
    }
   ]
  },
  "ALIEN": {
   "word": "ALIEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-ALIEN-SHIP"
    },
    {
     "kind": "noun",
     "of": "CH-ALIEN"
    }
   ]
  },
  "FUSCHIA": {
   "word": "FUSCHIA",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-FUSCHIA-BUTTON"
    }
   ]
  },
  "MONITOR": {
   "word": "MONITOR",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-MONITORS"
    }
   ]
  },
  "MONITORS": {
   "word": "MONITORS",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-MONITORS"
    }
   ]
  },
  "CHAIR": {
   "word": "CHAIR",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-COMMAND-CHAIR"
    }
   ]
  },
  "COMMAND": {
   "word": "COMMAND",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-COMMAND-CHAIR"
    }
   ]
  },
  "DESCRAMBLER": {
   "word": "DESCRAMBLER",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-DESCRAMBLER-CONTROL-BOX"
    },
    {
     "kind": "adjective",
     "of": "TH-DESCRAMBLER-CONTROL-BOX"
    }
   ]
  },
  "BOX": {
   "word": "BOX",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-DESCRAMBLER-CONTROL-BOX"
    },
    {
     "kind": "noun",
     "of": "TH-STEEL-BOX"
    }
   ]
  },
  "CONTROL": {
   "word": "CONTROL",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-DESCRAMBLER-CONTROL-BOX"
    },
    {
     "kind": "adjective",
     "of": "LG-FLOOD-DOOR"
    }
   ]
  },
  "POWERCEL": {
   "word": "POWERCEL",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-POWERCEL"
    }
   ]
  },
  "CELL": {
   "word": "CELL",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-POWERCEL"
    }
   ]
  },
  "FUEL": {
   "word": "FUEL",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-POWERCEL"
    }
   ]
  },
  "POWER": {
   "word": "POWER",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-POWERCEL"
    },
    {
     "kind": "adjective",
     "of": "TH-WELDER-SWITCH"
    },
    {
     "kind": "adjective",
     "of": "TH-WELDER-CORD"
    }
   ]
  },
  "POOL": {
   "word": "POOL",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-POOL-OF-WATER"
    },
    {
     "kind": "noun",
     "of": "TH-MOON-POOL"
    }
   ]
  },
  "WATER": {
   "word": "WATER",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-POOL-OF-WATER"
    },
    {
     "kind": "adjective",
     "of": "TH-POOL-OF-WATER"
    },
    {
     "kind": "adjective",
     "of": "TH-WATER-HOSE"
    }
   ]
  },
  "CRACK": {
   "word": "CRACK",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-CRACK"
    }
   ]
  },
  "WELDER": {
   "word": "WELDER",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-ARC-WELDER"
    }
   ]
  },
  "ARC-WELDER": {
   "word": "ARC-WELDER",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-ARC-WELDER"
    }
   ]
  },
  "ARC": {
   "word": "ARC",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-ARC-WELDER"
    },
    {
     "kind": "adjective",
     "of": "TH-WELDING-ROD"
    }
   ]
  },
  "ROD": {
   "word": "ROD",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-WELDING-ROD"
    }
   ]
  },
  "WELDING": {
   "word": "WELDING",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-WELDING-ROD"
    }
   ]
  },
  "CABLE": {
   "word": "CABLE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-RED-CABLE"
    },
    {
     "kind": "noun",
     "of": "TH-BLACK-CABLE"
    }
   ]
  },
  "RED": {
   "word": "RED",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-RED-CABLE"
    },
    {
     "kind": "adjective",
     "of": "TH-HYDRAULIC-FLUID"
    },
    {
     "kind": "adjective",
     "of": "TH-RED-LEVER"
    },
    {
     "kind": "adjective",
     "of": "TH-RED-WIRE"
    },
    {
     "kind": "adjective",
     "of": "TH-RED-BUTTON"
    }
   ]
  },
  "RUBBER": {
   "word": "RUBBER",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-RED-CABLE"
    },
    {
     "kind": "adjective",
     "of": "TH-BLACK-CABLE"
    }
   ]
  },
  "CUP": {
   "word": "CUP",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-BLACK-CABLE"
    }
   ]
  },
  "ELECTRODE": {
   "word": "ELECTRODE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-BLACK-CABLE"
    }
   ]
  },
  "BLACK": {
   "word": "BLACK",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-BLACK-CABLE"
    }
   ]
  },
  "SUCTION": {
   "word": "SUCTION",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-BLACK-CABLE"
    }
   ]
  },
  "CORD": {
   "word": "CORD",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-WELDER-CORD"
    }
   ]
  },
  "YELLOW": {
   "word": "YELLOW",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-PT-BILGE-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "TH-SB-BILGE-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "TH-YELLOW-WIRE"
    },
    {
     "kind": "adjective",
     "of": "TH-S-BILGE-BUTT"
    }
   ]
  },
  "LOCKER": {
   "word": "LOCKER",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-BUD-GEAR-LOCKER"
    },
    {
     "kind": "noun",
     "of": "TH-BIG-LOCKER"
    },
    {
     "kind": "noun",
     "of": "TH-CATFISH-LOCKER"
    },
    {
     "kind": "noun",
     "of": "TH-DIVE-LOCKER"
    }
   ]
  },
  "BUD": {
   "word": "BUD",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-BUD-GEAR-LOCKER"
    },
    {
     "kind": "noun",
     "of": "CH-PLAYER"
    },
    {
     "kind": "adjective",
     "of": "CH-PLAYER"
    }
   ]
  },
  "GEAR": {
   "word": "GEAR",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-BUD-GEAR-LOCKER"
    },
    {
     "kind": "adjective",
     "of": "TH-BIG-LOCKER"
    },
    {
     "kind": "adjective",
     "of": "LG-DGS-DOOR"
    }
   ]
  },
  "BIG": {
   "word": "BIG",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-BIG-LOCKER"
    }
   ]
  },
  "DIVE": {
   "word": "DIVE",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-BIG-LOCKER"
    },
    {
     "kind": "adjective",
     "of": "LG-DGS-DOOR"
    },
    {
     "kind": "adjective",
     "of": "TH-KNIFE"
    },
    {
     "kind": "adjective",
     "of": "TH-DIVE-LOCKER"
    }
   ]
  },
  "DOOR": {
   "word": "DOOR",
   "roles": [
    {
     "kind": "noun",
     "of": "LG-DGS-DOOR"
    },
    {
     "kind": "noun",
     "of": "LG-FLOOD-DOOR"
    },
    {
     "kind": "noun",
     "of": "LG-BUCKLED-DOOR"
    },
    {
     "kind": "noun",
     "of": "LG-CHAMBER-DOOR"
    }
   ]
  },
  "STORAGE": {
   "word": "STORAGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "LG-DGS-DOOR"
    },
    {
     "kind": "adjective",
     "of": "TH-NITROGEN-TANK"
    },
    {
     "kind": "adjective",
     "of": "TH-OXYGEN-TANK"
    },
    {
     "kind": "adjective",
     "of": "TH-HELIUM-TANK"
    }
   ]
  },
  "BARBELL": {
   "word": "BARBELL",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-BARBELL"
    }
   ]
  },
  "BAR": {
   "word": "BAR",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-BARBELL"
    }
   ]
  },
  "WEIGHTS": {
   "word": "WEIGHTS",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-WEIGHTS"
    }
   ]
  },
  "BENCH": {
   "word": "BENCH",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-LIFT-BENCH"
    },
    {
     "kind": "noun",
     "of": "TH-WINDOW-BENCH"
    }
   ]
  },
  "TREADMILL": {
   "word": "TREADMILL",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-TREADMILL"
    }
   ]
  },
  "CYCLE": {
   "word": "CYCLE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-CYCLE"
    }
   ]
  },
  "BICYCLE": {
   "word": "BICYCLE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-CYCLE"
    }
   ]
  },
  "STATIONARY": {
   "word": "STATIONARY",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-CYCLE"
    }
   ]
  },
  "EXERCISE": {
   "word": "EXERCISE",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-CYCLE"
    }
   ]
  },
  "HOSE": {
   "word": "HOSE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HYDRAULIC-HOSE"
    },
    {
     "kind": "noun",
     "of": "TH-WATER-HOSE"
    },
    {
     "kind": "adjective",
     "of": "TH-NOZZLE"
    }
   ]
  },
  "HYDRAULIC": {
   "word": "HYDRAULIC",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-HYDRAULIC-HOSE"
    },
    {
     "kind": "adjective",
     "of": "TH-HYDRAULIC-FLUID"
    }
   ]
  },
  "FLUID": {
   "word": "FLUID",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HYDRAULIC-FLUID"
    },
    {
     "kind": "adjective",
     "of": "TH-FBS-SUIT"
    }
   ]
  },
  "STICKY": {
   "word": "STICKY",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-HYDRAULIC-FLUID"
    }
   ]
  },
  "AUTOMATIC": {
   "word": "AUTOMATIC",
   "roles": [
    {
     "kind": "adjective",
     "of": "LG-FLOOD-DOOR"
    }
   ]
  },
  "FLOOD": {
   "word": "FLOOD",
   "roles": [
    {
     "kind": "adjective",
     "of": "LG-FLOOD-DOOR"
    }
   ]
  },
  "KNIFE": {
   "word": "KNIFE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-KNIFE"
    }
   ]
  },
  "SEAT": {
   "word": "SEAT",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-WINDOW-BENCH"
    }
   ]
  },
  "WINDOW": {
   "word": "WINDOW",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-WINDOW-BENCH"
    }
   ]
  },
  "LEVER": {
   "word": "LEVER",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-RED-LEVER"
    }
   ]
  },
  "THERMOMETER": {
   "word": "THERMOMETER",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-THERMOMETER"
    }
   ]
  },
  "L.G": {
   "word": "L.G",
   "roles": [
    {
     "kind": "noun",
     "of": "LOCAL-GLOBALS"
    }
   ]
  },
  "HERE": {
   "word": "HERE",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-HERE"
    }
   ]
  },
  "ROOM": {
   "word": "ROOM",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-HERE"
    }
   ]
  },
  "AREA": {
   "word": "AREA",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-HERE"
    }
   ]
  },
  "IT": {
   "word": "IT",
   "roles": [
    {
     "kind": "noun",
     "of": "IT"
    }
   ]
  },
  "THIS": {
   "word": "THIS",
   "roles": [
    {
     "kind": "noun",
     "of": "IT"
    }
   ]
  },
  "THEM": {
   "word": "THEM",
   "roles": [
    {
     "kind": "noun",
     "of": "THEM"
    }
   ]
  },
  "INT.NUM": {
   "word": "INT.NUM",
   "roles": [
    {
     "kind": "noun",
     "of": "INTNUM"
    },
    {
     "kind": "adjective",
     "of": "TH-TIME"
    }
   ]
  },
  "YOU": {
   "word": "YOU",
   "roles": [
    {
     "kind": "noun",
     "of": "YOU"
    }
   ]
  },
  "YOURSELF": {
   "word": "YOURSELF",
   "roles": [
    {
     "kind": "noun",
     "of": "YOU"
    }
   ]
  },
  "HER": {
   "word": "HER",
   "roles": [
    {
     "kind": "noun",
     "of": "HER"
    }
   ]
  },
  "HIM": {
   "word": "HIM",
   "roles": [
    {
     "kind": "noun",
     "of": "HIM"
    }
   ]
  },
  "BODY": {
   "word": "BODY",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "SKIN": {
   "word": "SKIN",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "ARM": {
   "word": "ARM",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "ARMS": {
   "word": "ARMS",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "HANDS": {
   "word": "HANDS",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-HANDS"
    }
   ]
  },
  "LEG": {
   "word": "LEG",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    }
   ]
  },
  "LEGS": {
   "word": "LEGS",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    }
   ]
  },
  "ANKLE": {
   "word": "ANKLE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "ANKLES": {
   "word": "ANKLES",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "FOOT": {
   "word": "FOOT",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "FEET": {
   "word": "FEET",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "HAIR": {
   "word": "HAIR",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "EYE": {
   "word": "EYE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "EYES": {
   "word": "EYES",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "EAR": {
   "word": "EAR",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "EARS": {
   "word": "EARS",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "NOSE": {
   "word": "NOSE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "FACE": {
   "word": "FACE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    },
    {
     "kind": "adjective",
     "of": "TH-FACEPLATE"
    }
   ]
  },
  "CHEEK": {
   "word": "CHEEK",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "CHEEKS": {
   "word": "CHEEKS",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "LIP": {
   "word": "LIP",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "LIPS": {
   "word": "LIPS",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "MOUTH": {
   "word": "MOUTH",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    }
   ]
  },
  "NECK": {
   "word": "NECK",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "SHOULDER": {
   "word": "SHOULDER",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "SHOULDERS": {
   "word": "SHOULDERS",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "CHEST": {
   "word": "CHEST",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "TORSO": {
   "word": "TORSO",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "WAIST": {
   "word": "WAIST",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "LEFT": {
   "word": "LEFT",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "adjective",
     "of": "TH-PLAYER-BODY"
    },
    {
     "kind": "adjective",
     "of": "TH-HANDS"
    }
   ]
  },
  "RIGHT": {
   "word": "RIGHT",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-HUMAN-BODY"
    },
    {
     "kind": "adjective",
     "of": "TH-PLAYER-BODY"
    },
    {
     "kind": "adjective",
     "of": "TH-HANDS"
    }
   ]
  },
  "TONGUE": {
   "word": "TONGUE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-PLAYER-BODY"
    }
   ]
  },
  "GROUND": {
   "word": "GROUND",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-GROUND"
    }
   ]
  },
  "FLOOR": {
   "word": "FLOOR",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-GROUND"
    }
   ]
  },
  "SKY": {
   "word": "SKY",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-SKY"
    }
   ]
  },
  "CEILING": {
   "word": "CEILING",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-SKY"
    }
   ]
  },
  "TURNS": {
   "word": "TURNS",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-TIME"
    }
   ]
  },
  "MINUTE": {
   "word": "MINUTE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-TIME"
    }
   ]
  },
  "MINUTES": {
   "word": "MINUTES",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-TIME"
    }
   ]
  },
  "MIN": {
   "word": "MIN",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-TIME"
    }
   ]
  },
  "HOUR": {
   "word": "HOUR",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-TIME"
    }
   ]
  },
  "HOURS": {
   "word": "HOURS",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-TIME"
    }
   ]
  },
  "WALL": {
   "word": "WALL",
   "roles": [
    {
     "kind": "noun",
     "of": "LG-WALL"
    },
    {
     "kind": "adjective",
     "of": "LG-OUTLET"
    },
    {
     "kind": "adjective",
     "of": "TH-SAFE"
    }
   ]
  },
  "WALLS": {
   "word": "WALLS",
   "roles": [
    {
     "kind": "noun",
     "of": "LG-WALL"
    }
   ]
  },
  "BULKHEAD": {
   "word": "BULKHEAD",
   "roles": [
    {
     "kind": "noun",
     "of": "LG-WALL"
    }
   ]
  },
  "FLATBED": {
   "word": "FLATBED",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-FLATBED"
    }
   ]
  },
  "UFO": {
   "word": "UFO",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-UFO"
    }
   ]
  },
  "DEEPCORE": {
   "word": "DEEPCORE",
   "roles": [
    {
     "kind": "noun",
     "of": "LG-DEEPCORE"
    }
   ]
  },
  "TROUGH": {
   "word": "TROUGH",
   "roles": [
    {
     "kind": "noun",
     "of": "LG-TROUGH"
    }
   ]
  },
  "MONTANA": {
   "word": "MONTANA",
   "roles": [
    {
     "kind": "noun",
     "of": "LG-MONTANA"
    }
   ]
  },
  "SUBMARINE": {
   "word": "SUBMARINE",
   "roles": [
    {
     "kind": "noun",
     "of": "LG-MONTANA"
    }
   ]
  },
  "SUB": {
   "word": "SUB",
   "roles": [
    {
     "kind": "noun",
     "of": "LG-MONTANA"
    }
   ]
  },
  "NAVY": {
   "word": "NAVY",
   "roles": [
    {
     "kind": "adjective",
     "of": "LG-MONTANA"
    },
    {
     "kind": "adjective",
     "of": "CH-COFFEY"
    },
    {
     "kind": "adjective",
     "of": "CH-SEALS"
    }
   ]
  },
  "USS": {
   "word": "USS",
   "roles": [
    {
     "kind": "adjective",
     "of": "LG-MONTANA"
    }
   ]
  },
  "OHIO": {
   "word": "OHIO",
   "roles": [
    {
     "kind": "adjective",
     "of": "LG-MONTANA"
    }
   ]
  },
  "CLASS": {
   "word": "CLASS",
   "roles": [
    {
     "kind": "adjective",
     "of": "LG-MONTANA"
    }
   ]
  },
  "OUTLET": {
   "word": "OUTLET",
   "roles": [
    {
     "kind": "noun",
     "of": "LG-OUTLET"
    }
   ]
  },
  "SOCKET": {
   "word": "SOCKET",
   "roles": [
    {
     "kind": "noun",
     "of": "LG-OUTLET"
    }
   ]
  },
  "ELECTRICAL": {
   "word": "ELECTRICAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "LG-OUTLET"
    }
   ]
  },
  "ME": {
   "word": "ME",
   "roles": [
    {
     "kind": "noun",
     "of": "CH-PLAYER"
    }
   ]
  },
  "MYSELF": {
   "word": "MYSELF",
   "roles": [
    {
     "kind": "noun",
     "of": "CH-PLAYER"
    }
   ]
  },
  "SELF": {
   "word": "SELF",
   "roles": [
    {
     "kind": "noun",
     "of": "CH-PLAYER"
    }
   ]
  },
  "BRIGMAN": {
   "word": "BRIGMAN",
   "roles": [
    {
     "kind": "noun",
     "of": "CH-PLAYER"
    }
   ]
  },
  "HATCH": {
   "word": "HATCH",
   "roles": [
    {
     "kind": "noun",
     "of": "LG-MIDSHIP-HATCH"
    },
    {
     "kind": "noun",
     "of": "TH-MISSILE-PANEL"
    },
    {
     "kind": "noun",
     "of": "LG-CHAMBER-HATCH"
    }
   ]
  },
  "MIDSHIP": {
   "word": "MIDSHIP",
   "roles": [
    {
     "kind": "adjective",
     "of": "LG-MIDSHIP-HATCH"
    }
   ]
  },
  "MISSILE": {
   "word": "MISSILE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-MISSILE"
    },
    {
     "kind": "adjective",
     "of": "TH-MISSILE-TIMER"
    },
    {
     "kind": "adjective",
     "of": "TH-MISSILE-PANEL"
    },
    {
     "kind": "adjective",
     "of": "TH-MISSILE-ACCESS-KEY"
    }
   ]
  },
  "TIMER": {
   "word": "TIMER",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-MISSILE-TIMER"
    },
    {
     "kind": "noun",
     "of": "TH-DETONATOR"
    }
   ]
  },
  "PANEL": {
   "word": "PANEL",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-MISSILE-PANEL"
    },
    {
     "kind": "noun",
     "of": "TH-PANEL"
    }
   ]
  },
  "PLATE": {
   "word": "PLATE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-MISSILE-PANEL"
    },
    {
     "kind": "noun",
     "of": "TH-FACEPLATE"
    }
   ]
  },
  "ACCESS": {
   "word": "ACCESS",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-MISSILE-PANEL"
    },
    {
     "kind": "adjective",
     "of": "TH-MISSILE-ACCESS-KEY"
    }
   ]
  },
  "COVER": {
   "word": "COVER",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-MISSILE-PANEL"
    }
   ]
  },
  "WIRES": {
   "word": "WIRES",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-WIRES"
    }
   ]
  },
  "WIRE": {
   "word": "WIRE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-RED-WIRE"
    },
    {
     "kind": "noun",
     "of": "TH-BLUE-WIRE"
    },
    {
     "kind": "noun",
     "of": "TH-GREEN-WIRE"
    },
    {
     "kind": "noun",
     "of": "TH-YELLOW-WIRE"
    },
    {
     "kind": "noun",
     "of": "TH-ORANGE-WIRE"
    },
    {
     "kind": "noun",
     "of": "TH-WHITE-WIRE"
    },
    {
     "kind": "adjective",
     "of": "TH-WIRE-CUTTERS"
    }
   ]
  },
  "BLUE": {
   "word": "BLUE",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-BLUE-WIRE"
    }
   ]
  },
  "GREEN": {
   "word": "GREEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-GREEN-WIRE"
    }
   ]
  },
  "ORANGE": {
   "word": "ORANGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-ORANGE-WIRE"
    }
   ]
  },
  "WHITE": {
   "word": "WHITE",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-WHITE-WIRE"
    }
   ]
  },
  "CUTTERS": {
   "word": "CUTTERS",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-WIRE-CUTTERS"
    }
   ]
  },
  "KEY": {
   "word": "KEY",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-MISSILE-ACCESS-KEY"
    },
    {
     "kind": "noun",
     "of": "TH-STEEL-KEY"
    }
   ]
  },
  "BUCKLED": {
   "word": "BUCKLED",
   "roles": [
    {
     "kind": "adjective",
     "of": "LG-BUCKLED-DOOR"
    }
   ]
  },
  "JAMMED": {
   "word": "JAMMED",
   "roles": [
    {
     "kind": "adjective",
     "of": "LG-BUCKLED-DOOR"
    }
   ]
  },
  "PHOTOGRAPH": {
   "word": "PHOTOGRAPH",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-PHOTOGRAPH"
    }
   ]
  },
  "PICTURE": {
   "word": "PICTURE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-PHOTOGRAPH"
    }
   ]
  },
  "FRAME": {
   "word": "FRAME",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-PHOTOGRAPH"
    }
   ]
  },
  "FRAMED": {
   "word": "FRAMED",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-PHOTOGRAPH"
    }
   ]
  },
  "SAFE": {
   "word": "SAFE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-SAFE"
    }
   ]
  },
  "DIAL": {
   "word": "DIAL",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-SAFE"
    },
    {
     "kind": "noun",
     "of": "TH-DETONATOR"
    }
   ]
  },
  "CARD": {
   "word": "CARD",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-PLASTIC-CARD"
    }
   ]
  },
  "CODE": {
   "word": "CODE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-PLASTIC-CARD"
    }
   ]
  },
  "CODES": {
   "word": "CODES",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-PLASTIC-CARD"
    }
   ]
  },
  "PLASTIC": {
   "word": "PLASTIC",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-PLASTIC-CARD"
    },
    {
     "kind": "adjective",
     "of": "TH-PLASTIQUE"
    }
   ]
  },
  "WIRING": {
   "word": "WIRING",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-PLASTIC-CARD"
    }
   ]
  },
  "PLASTIQUE": {
   "word": "PLASTIQUE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-PLASTIQUE"
    }
   ]
  },
  "EXPLOSIVE": {
   "word": "EXPLOSIVE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-PLASTIQUE"
    }
   ]
  },
  "TAPE": {
   "word": "TAPE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-PLASTIQUE"
    }
   ]
  },
  "DETONATOR": {
   "word": "DETONATOR",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-DETONATOR"
    }
   ]
  },
  "CATFISH": {
   "word": "CATFISH",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-CATFISH-LOCKER"
    },
    {
     "kind": "adjective",
     "of": "TH-STEEL-BOX"
    },
    {
     "kind": "adjective",
     "of": "TH-PASSPORT"
    },
    {
     "kind": "adjective",
     "of": "TH-DISCHARGE"
    },
    {
     "kind": "noun",
     "of": "CH-CATFISH"
    }
   ]
  },
  "STEEL": {
   "word": "STEEL",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-STEEL-BOX"
    },
    {
     "kind": "adjective",
     "of": "TH-STEEL-KEY"
    }
   ]
  },
  "PAPER": {
   "word": "PAPER",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-CLUE-PAPER"
    }
   ]
  },
  "DRYER": {
   "word": "DRYER",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-DRYER"
    }
   ]
  },
  "PASSPORT": {
   "word": "PASSPORT",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-PASSPORT"
    }
   ]
  },
  "DISCHARGE": {
   "word": "DISCHARGE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-DISCHARGE"
    }
   ]
  },
  "MILITARY": {
   "word": "MILITARY",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-DISCHARGE"
    }
   ]
  },
  "MARINE": {
   "word": "MARINE",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-DISCHARGE"
    }
   ]
  },
  "MARINES": {
   "word": "MARINES",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-DISCHARGE"
    }
   ]
  },
  "HONORABLE": {
   "word": "HONORABLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-DISCHARGE"
    }
   ]
  },
  "PAPERS": {
   "word": "PAPERS",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-DISCHARGE"
    }
   ]
  },
  "GUN": {
   "word": "GUN",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-GUN"
    }
   ]
  },
  "PISTOL": {
   "word": "PISTOL",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-GUN"
    }
   ]
  },
  "SUIT": {
   "word": "SUIT",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-FBS-SUIT"
    },
    {
     "kind": "noun",
     "of": "TH-DRY-SUIT"
    },
    {
     "kind": "adjective",
     "of": "TH-HELMET"
    }
   ]
  },
  "FBS": {
   "word": "FBS",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-FBS-SUIT"
    }
   ]
  },
  "BREATHING": {
   "word": "BREATHING",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-FBS-SUIT"
    }
   ]
  },
  "SYSTEM": {
   "word": "SYSTEM",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-FBS-SUIT"
    }
   ]
  },
  "ELECTRONIC": {
   "word": "ELECTRONIC",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-ELECTRONIC-LOCK"
    },
    {
     "kind": "adjective",
     "of": "TH-DEVICE"
    }
   ]
  },
  "DEVICE": {
   "word": "DEVICE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-DEVICE"
    }
   ]
  },
  "REMOTE": {
   "word": "REMOTE",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-DEVICE"
    }
   ]
  },
  "TANK": {
   "word": "TANK",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-NITROGEN-TANK"
    },
    {
     "kind": "noun",
     "of": "TH-OXYGEN-TANK"
    },
    {
     "kind": "noun",
     "of": "TH-HELIUM-TANK"
    }
   ]
  },
  "BASE": {
   "word": "BASE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-NITROGEN-TANK"
    },
    {
     "kind": "noun",
     "of": "TH-OXYGEN-TANK"
    },
    {
     "kind": "noun",
     "of": "TH-HELIUM-TANK"
    }
   ]
  },
  "NITROGEN": {
   "word": "NITROGEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-NITROGEN-TANK"
    },
    {
     "kind": "adjective",
     "of": "TH-NIT-VALVE"
    },
    {
     "kind": "adjective",
     "of": "TH-NIT-STOPPER"
    }
   ]
  },
  "VALVE": {
   "word": "VALVE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-NIT-VALVE"
    },
    {
     "kind": "noun",
     "of": "TH-OXY-VALVE"
    },
    {
     "kind": "noun",
     "of": "TH-HEL-VALVE"
    }
   ]
  },
  "K-VALVE": {
   "word": "K-VALVE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-NIT-VALVE"
    },
    {
     "kind": "noun",
     "of": "TH-OXY-VALVE"
    },
    {
     "kind": "noun",
     "of": "TH-HEL-VALVE"
    }
   ]
  },
  "K": {
   "word": "K",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-NIT-VALVE"
    },
    {
     "kind": "adjective",
     "of": "TH-OXY-VALVE"
    },
    {
     "kind": "adjective",
     "of": "TH-HEL-VALVE"
    }
   ]
  },
  "STOPPER": {
   "word": "STOPPER",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-NIT-STOPPER"
    },
    {
     "kind": "noun",
     "of": "TH-OXY-STOPPER"
    },
    {
     "kind": "noun",
     "of": "TH-HEL-STOPPER"
    }
   ]
  },
  "OXYGEN": {
   "word": "OXYGEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-OXYGEN-TANK"
    },
    {
     "kind": "adjective",
     "of": "TH-OXY-VALVE"
    },
    {
     "kind": "adjective",
     "of": "TH-OXY-STOPPER"
    },
    {
     "kind": "adjective",
     "of": "TH-OXYGEN-CYLINDER"
    }
   ]
  },
  "HELIUM": {
   "word": "HELIUM",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-HELIUM-TANK"
    },
    {
     "kind": "adjective",
     "of": "TH-HEL-VALVE"
    },
    {
     "kind": "adjective",
     "of": "TH-HEL-STOPPER"
    }
   ]
  },
  "BIN": {
   "word": "BIN",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-BIN"
    }
   ]
  },
  "BINS": {
   "word": "BINS",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-BIN"
    }
   ]
  },
  "MAGNET": {
   "word": "MAGNET",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-MAGNET"
    }
   ]
  },
  "PROBE": {
   "word": "PROBE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-MAGNET"
    }
   ]
  },
  "MAGNETIC": {
   "word": "MAGNETIC",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-MAGNET"
    }
   ]
  },
  "MOON": {
   "word": "MOON",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-MOON-POOL"
    }
   ]
  },
  "FIRE": {
   "word": "FIRE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-FIRE"
    }
   ]
  },
  "FRESH": {
   "word": "FRESH",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-WATER-HOSE"
    }
   ]
  },
  "NOZZLE": {
   "word": "NOZZLE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-NOZZLE"
    }
   ]
  },
  "CYLINDER": {
   "word": "CYLINDER",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-OXYGEN-CYLINDER"
    }
   ]
  },
  "LINDSEY": {
   "word": "LINDSEY",
   "roles": [
    {
     "kind": "noun",
     "of": "CH-LINDSEY"
    }
   ]
  },
  "WOMAN": {
   "word": "WOMAN",
   "roles": [
    {
     "kind": "noun",
     "of": "CH-LINDSEY"
    },
    {
     "kind": "noun",
     "of": "CH-ONE-NIGHT"
    }
   ]
  },
  "PERSON": {
   "word": "PERSON",
   "roles": [
    {
     "kind": "noun",
     "of": "CH-LINDSEY"
    },
    {
     "kind": "noun",
     "of": "CH-COFFEY"
    },
    {
     "kind": "noun",
     "of": "CH-ONE-NIGHT"
    },
    {
     "kind": "noun",
     "of": "CH-HIPPY"
    },
    {
     "kind": "noun",
     "of": "CH-CATFISH"
    },
    {
     "kind": "noun",
     "of": "CH-SEALS"
    }
   ]
  },
  "COFFEY": {
   "word": "COFFEY",
   "roles": [
    {
     "kind": "noun",
     "of": "CH-COFFEY"
    }
   ]
  },
  "DIVER": {
   "word": "DIVER",
   "roles": [
    {
     "kind": "noun",
     "of": "CH-COFFEY"
    },
    {
     "kind": "noun",
     "of": "CH-SEALS"
    }
   ]
  },
  "MAN": {
   "word": "MAN",
   "roles": [
    {
     "kind": "noun",
     "of": "CH-COFFEY"
    },
    {
     "kind": "noun",
     "of": "CH-HIPPY"
    },
    {
     "kind": "noun",
     "of": "CH-CATFISH"
    },
    {
     "kind": "noun",
     "of": "CH-SEALS"
    }
   ]
  },
  "NIGHT": {
   "word": "NIGHT",
   "roles": [
    {
     "kind": "noun",
     "of": "CH-ONE-NIGHT"
    }
   ]
  },
  "ONE-NIGHT": {
   "word": "ONE-NIGHT",
   "roles": [
    {
     "kind": "noun",
     "of": "CH-ONE-NIGHT"
    }
   ]
  },
  "ONE": {
   "word": "ONE",
   "roles": [
    {
     "kind": "adjective",
     "of": "CH-ONE-NIGHT"
    }
   ]
  },
  "HIPPY": {
   "word": "HIPPY",
   "roles": [
    {
     "kind": "noun",
     "of": "CH-HIPPY"
    }
   ]
  },
  "DEVRIES": {
   "word": "DEVRIES",
   "roles": [
    {
     "kind": "noun",
     "of": "CH-CATFISH"
    }
   ]
  },
  "FISH": {
   "word": "FISH",
   "roles": [
    {
     "kind": "noun",
     "of": "CH-CATFISH"
    }
   ]
  },
  "CAT": {
   "word": "CAT",
   "roles": [
    {
     "kind": "adjective",
     "of": "CH-CATFISH"
    }
   ]
  },
  "WILLHITE": {
   "word": "WILLHITE",
   "roles": [
    {
     "kind": "noun",
     "of": "CH-SEALS"
    }
   ]
  },
  "SCHOENICK": {
   "word": "SCHOENICK",
   "roles": [
    {
     "kind": "noun",
     "of": "CH-SEALS"
    }
   ]
  },
  "MONK": {
   "word": "MONK",
   "roles": [
    {
     "kind": "noun",
     "of": "CH-SEALS"
    }
   ]
  },
  "SEAL": {
   "word": "SEAL",
   "roles": [
    {
     "kind": "noun",
     "of": "CH-SEALS"
    }
   ]
  },
  "SEALS": {
   "word": "SEALS",
   "roles": [
    {
     "kind": "noun",
     "of": "CH-SEALS"
    }
   ]
  },
  "DIVERS": {
   "word": "DIVERS",
   "roles": [
    {
     "kind": "noun",
     "of": "CH-SEALS"
    }
   ]
  },
  "MEN": {
   "word": "MEN",
   "roles": [
    {
     "kind": "noun",
     "of": "CH-SEALS"
    }
   ]
  },
  "PEOPLE": {
   "word": "PEOPLE",
   "roles": [
    {
     "kind": "noun",
     "of": "CH-SEALS"
    }
   ]
  },
  "DRY": {
   "word": "DRY",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-DRY-SUIT"
    },
    {
     "kind": "adjective",
     "of": "TH-HELMET"
    }
   ]
  },
  "FACEPLATE": {
   "word": "FACEPLATE",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-FACEPLATE"
    }
   ]
  },
  "HELMET": {
   "word": "HELMET",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HELMET"
    }
   ]
  },
  "HOOK": {
   "word": "HOOK",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-HOOK-1"
    },
    {
     "kind": "noun",
     "of": "TH-HOOK-2"
    }
   ]
  },
  "BAG": {
   "word": "BAG",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-LIFT-BAG"
    },
    {
     "kind": "noun",
     "of": "TH-GAME-BAG"
    }
   ]
  },
  "CANNISTER": {
   "word": "CANNISTER",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-CO2-CANNISTER"
    }
   ]
  },
  "CO2": {
   "word": "CO2",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-CO2-CANNISTER"
    }
   ]
  },
  "CARBON": {
   "word": "CARBON",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-CO2-CANNISTER"
    }
   ]
  },
  "DIOXIDE": {
   "word": "DIOXIDE",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-CO2-CANNISTER"
    }
   ]
  },
  "COMPRESSION": {
   "word": "COMPRESSION",
   "roles": [
    {
     "kind": "adjective",
     "of": "LG-CHAMBER-HATCH"
    },
    {
     "kind": "adjective",
     "of": "LG-CHAMBER-DOOR"
    }
   ]
  },
  "CHAMBER": {
   "word": "CHAMBER",
   "roles": [
    {
     "kind": "adjective",
     "of": "LG-CHAMBER-HATCH"
    },
    {
     "kind": "adjective",
     "of": "LG-CHAMBER-DOOR"
    }
   ]
  },
  "HOOKAH": {
   "word": "HOOKAH",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-CAB-HOOKAH"
    }
   ]
  },
  "GAME": {
   "word": "GAME",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-GAME-BAG"
    }
   ]
  },
  "COMPRESSOR": {
   "word": "COMPRESSOR",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-COMPRESSOR"
    }
   ]
  },
  "DRAWER": {
   "word": "DRAWER",
   "roles": [
    {
     "kind": "noun",
     "of": "TH-ELEC-SHOP-DRAWER"
    }
   ]
  },
  "CENTER": {
   "word": "CENTER",
   "roles": [
    {
     "kind": "adjective",
     "of": "TH-ELEC-SHOP-DRAWER"
    }
   ]
  }
 },
 "files": [
  "abyss-pix.zil",
  "abyss.zil",
  "alien.zil",
  "be.zil",
  "command.zil",
  "crane.zil",
  "defs.zil",
  "defs2.zil",
  "endgame.zil",
  "gas-mix.zil",
  "global.zil",
  "macros.zil",
  "misc.zil",
  "montana.zil",
  "ocean.zil",
  "return1.zil",
  "return2.zil",
  "stopper.zil",
  "sub-bay.zil",
  "syntax.zil",
  "util.zil",
  "verbs.zil"
 ]
};
