window.WORLD = {
 "game": "Leather Goddesses of Phobos (X1)",
 "directions": [
  "NORTH",
  "EAST",
  "WEST",
  "SOUTH",
  "NE",
  "NW",
  "SE",
  "SW",
  "UP",
  "DOWN",
  "IN",
  "OUT",
  "LAND",
  "CROSS"
 ],
 "rooms": {
  "TIGHT-SQUEEZE": {
   "name": "TIGHT-SQUEEZE",
   "file": "tm.zil",
   "line": 13,
   "endLine": 20,
   "desc": "Tight Squeeze",
   "ldesc": "This is a very low and narrow passage leading east to west.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "CREEPY-CRAWL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "ROCKY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM TIGHT-SQUEEZE\n      (IN ROOMS)\n      (DESC \"Tight Squeeze\")\n      (LDESC\n\"This is a very low and narrow passage leading east to west.\")\n      (WEST TO CREEPY-CRAWL)\n      (EAST TO ROCKY-ROOM)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "ROCKY-ROOM": {
   "name": "ROCKY-ROOM",
   "file": "tm.zil",
   "line": 22,
   "endLine": 34,
   "desc": "Crystal Grotto",
   "ldesc": "This is a chamber of breathtaking beauty. Mighty stalagmites form\ncrystalline-encrusted rock formations. Phosphorescent mosses, fed by\na trickle of water from above, make the crystals glow and sparkle with\nevery color of the rainbow. There is an opening to the west, and a\nman-made passage heads south.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MOSS",
    "CRYSTALS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "WIDE-HALL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "TIGHT-SQUEEZE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "CRYSTALS"
   ],
   "source": "<ROOM ROCKY-ROOM\n      (IN ROOMS)\n      (DESC \"Crystal Grotto\")\n      (LDESC\n\"This is a chamber of breathtaking beauty. Mighty stalagmites form\ncrystalline-encrusted rock formations. Phosphorescent mosses, fed by\na trickle of water from above, make the crystals glow and sparkle with\nevery color of the rainbow. There is an opening to the west, and a\nman-made passage heads south.\")\n      (SOUTH TO WIDE-HALL)\n      (WEST TO TIGHT-SQUEEZE)\n      (GLOBAL MOSS CRYSTALS)\n      (FLAGS ONBIT RLANDBIT)>",
   "referencedBy": []
  },
  "WIDE-HALL": {
   "name": "WIDE-HALL",
   "file": "tm.zil",
   "line": 42,
   "endLine": 52,
   "desc": "Royal Hall",
   "ldesc": "This is the north end of a large hall with a vaulted ceiling. A long, tiled\nhallway leads north through a tall arch. Although the purpose of\nthis room is unclear, there is a large rendering of the Royal Seal of Lord\nDimwit Flathead carved on the wall.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "ROCKY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MUSEUM-ANTE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "ROYAL-SEAL"
   ],
   "source": "<ROOM WIDE-HALL\n      (IN ROOMS)\n      (DESC \"Royal Hall\")\n      (LDESC\n\"This is the north end of a large hall with a vaulted ceiling. A long, tiled\nhallway leads north through a tall arch. Although the purpose of\nthis room is unclear, there is a large rendering of the Royal Seal of Lord\nDimwit Flathead carved on the wall.\")\n      (NORTH TO ROCKY-ROOM)\n      (SOUTH TO MUSEUM-ANTE)\n      (FLAGS RLANDBIT)>     ",
   "referencedBy": []
  },
  "MUSEUM-ANTE": {
   "name": "MUSEUM-ANTE",
   "file": "tm.zil",
   "line": 65,
   "endLine": 73,
   "desc": "Great Door",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MUSEUM-ANTE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "IRON-DOOR",
    "CLEFT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "WIDE-HALL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MUSEUM-ENTRANCE",
     "kind": "conditional",
     "condition": "CLEFT-FLAG",
     "else": "\"The great iron door is rusted shut.\"",
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM MUSEUM-ANTE\n      (IN ROOMS)\n      (DESC \"Great Door\")\n      (NORTH TO WIDE-HALL)\n      (EAST TO MUSEUM-ENTRANCE\n       \t    IF CLEFT-FLAG ELSE \"The great iron door is rusted shut.\")\n      (FLAGS RLANDBIT)\n      (ACTION MUSEUM-ANTE-F)\n      (GLOBAL IRON-DOOR CLEFT)>",
   "referencedBy": [
    "I-CLEFT",
    "TIME-MACHINE-F"
   ]
  },
  "MUSEUM-ENTRANCE": {
   "name": "MUSEUM-ENTRANCE",
   "file": "tm.zil",
   "line": 75,
   "endLine": 85,
   "desc": "Museum Entrance",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MUSEUM-ENTRANCE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "IRON-DOOR",
    "JEWEL-DOOR",
    "WOODEN-DOOR",
    "STAIRS",
    "CLEFT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "JEWEL-ROOM",
     "kind": "conditional",
     "condition": "JEWEL-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MUSEUM-ANTE",
     "kind": "conditional",
     "condition": "CLEFT-FLAG",
     "else": "\"The iron door is rusted shut.\"",
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "CP-ANTE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "CP-ANTE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "TECH-MUSEUM",
     "kind": "conditional",
     "condition": "WOODEN-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM MUSEUM-ENTRANCE\n      (IN ROOMS)\n      (DESC \"Museum Entrance\")\n      (EAST TO JEWEL-ROOM IF JEWEL-DOOR IS OPEN)\n      (WEST TO MUSEUM-ANTE IF CLEFT-FLAG ELSE \"The iron door is rusted shut.\")\n      (SOUTH TO CP-ANTE)\n      (DOWN TO CP-ANTE)\n      (NORTH TO TECH-MUSEUM IF WOODEN-DOOR IS OPEN)\n      (FLAGS ONBIT RLANDBIT)\n      (ACTION MUSEUM-ENTRANCE-F)\n      (GLOBAL IRON-DOOR JEWEL-DOOR WOODEN-DOOR STAIRS CLEFT)>",
   "referencedBy": [
    "TM-BUTTON-F",
    "HAPPY-NEW-YEAR"
   ]
  },
  "JEWEL-ROOM": {
   "name": "JEWEL-ROOM",
   "file": "tm.zil",
   "line": 94,
   "endLine": 101,
   "desc": "Jewel Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "JEWEL-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "JEWEL-DOOR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "MUSEUM-ENTRANCE",
     "kind": "conditional",
     "condition": "JEWEL-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MUSEUM-ENTRANCE",
     "kind": "conditional",
     "condition": "JEWEL-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "PEDESTAL",
    "CAGE"
   ],
   "source": "<ROOM JEWEL-ROOM\n      (IN ROOMS)\n      (DESC \"Jewel Room\")\n      (WEST TO MUSEUM-ENTRANCE IF JEWEL-DOOR IS OPEN)\n      (OUT TO MUSEUM-ENTRANCE IF JEWEL-DOOR IS OPEN)\n      (FLAGS ONBIT RLANDBIT)\n      (ACTION JEWEL-ROOM-F)\n      (GLOBAL JEWEL-DOOR)>",
   "referencedBy": [
    "TM-BUTTON-F",
    "HAPPY-NEW-YEAR",
    "MOVE-JEWELS",
    "TGOTO"
   ]
  },
  "TECH-MUSEUM": {
   "name": "TECH-MUSEUM",
   "file": "tm.zil",
   "line": 103,
   "endLine": 110,
   "desc": "Technology Museum",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "TECH-MUSEUM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WOODEN-DOOR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "MUSEUM-ENTRANCE",
     "kind": "conditional",
     "condition": "WOODEN-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "MUSEUM-ENTRANCE",
     "kind": "conditional",
     "condition": "WOODEN-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "TIME-MACHINE",
    "PRESSURIZER",
    "SPINNER",
    "TECH-PLAQUE"
   ],
   "source": "<ROOM TECH-MUSEUM\n      (IN ROOMS)\n      (DESC \"Technology Museum\")\n      (SOUTH TO MUSEUM-ENTRANCE IF WOODEN-DOOR IS OPEN)\n      (OUT TO MUSEUM-ENTRANCE IF WOODEN-DOOR IS OPEN)\n      (FLAGS RLANDBIT ONBIT)\n      (ACTION TECH-MUSEUM-F)\n      (GLOBAL WOODEN-DOOR)>",
   "referencedBy": [
    "TM-BUTTON-F",
    "HAPPY-NEW-YEAR",
    "TGOTO",
    "JEWEL-ROOM-F"
   ]
  },
  "MID-CP-ANTE": {
   "name": "MID-CP-ANTE",
   "file": "tm.zil",
   "line": 112,
   "endLine": 121,
   "desc": "Royal Puzzle Entrance",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CPANT-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "MID-CP-OUT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MID-MUSEUM-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MID-MUSEUM-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "CPENTER",
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM MID-CP-ANTE\n      (IN ROOMS)\n      (DESC \"Royal Puzzle Entrance\")\n      (WEST TO MID-CP-OUT)\n      (NORTH TO MID-MUSEUM-ENTRANCE)\n      (UP TO MID-MUSEUM-ENTRANCE)\n      (DOWN PER CPENTER)\n      (FLAGS RLANDBIT ONBIT)\n      (ACTION CPANT-ROOM)\n      (GLOBAL STAIRS)>",
   "referencedBy": [
    "TIME-MACHINE-F"
   ]
  },
  "MID-CP-OUT": {
   "name": "MID-CP-OUT",
   "file": "tm.zil",
   "line": 123,
   "endLine": 130,
   "desc": "Side Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CPOUT-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CPDOOR",
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "MID-CP-ANTE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The steel door is closed.",
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM MID-CP-OUT\n      (IN ROOMS)\n      (DESC \"Side Room\")\n      (NORTH TO MID-CP-ANTE)\n      (EAST \"The steel door is closed.\")\n      (FLAGS RLANDBIT ONBIT)\n      (ACTION CPOUT-ROOM)\n      (GLOBAL CPDOOR STAIRS)>",
   "referencedBy": []
  },
  "MID-MUSEUM-ENTRANCE": {
   "name": "MID-MUSEUM-ENTRANCE",
   "file": "tm.zil",
   "line": 132,
   "endLine": 142,
   "desc": "Museum Entrance",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MUSEUM-ENTRANCE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "IRON-DOOR",
    "JEWEL-DOOR",
    "WOODEN-DOOR",
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "MID-JEWEL-ROOM",
     "kind": "conditional",
     "condition": "JEWEL-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The iron door is rusted shut.",
     "dir": "WEST"
    },
    {
     "to": "MID-CP-ANTE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "MID-CP-ANTE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "MID-TECH-MUSEUM",
     "kind": "conditional",
     "condition": "WOODEN-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM MID-MUSEUM-ENTRANCE\n      (IN ROOMS)\n      (DESC \"Museum Entrance\")\n      (EAST TO MID-JEWEL-ROOM IF JEWEL-DOOR IS OPEN)\n      (WEST \"The iron door is rusted shut.\")\n      (SOUTH TO MID-CP-ANTE)\n      (DOWN TO MID-CP-ANTE)\n      (NORTH TO MID-TECH-MUSEUM IF WOODEN-DOOR IS OPEN)\n      (FLAGS ONBIT RLANDBIT)\n      (ACTION MUSEUM-ENTRANCE-F)\n      (GLOBAL IRON-DOOR JEWEL-DOOR WOODEN-DOOR STAIRS)>",
   "referencedBy": [
    "TM-BUTTON-F",
    "HAPPY-NEW-YEAR"
   ]
  },
  "MID-JEWEL-ROOM": {
   "name": "MID-JEWEL-ROOM",
   "file": "tm.zil",
   "line": 144,
   "endLine": 151,
   "desc": "Jewel Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "JEWEL-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "JEWEL-DOOR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "MID-MUSEUM-ENTRANCE",
     "kind": "conditional",
     "condition": "JEWEL-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MID-MUSEUM-ENTRANCE",
     "kind": "conditional",
     "condition": "JEWEL-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM MID-JEWEL-ROOM\n      (IN ROOMS)\n      (DESC \"Jewel Room\")\n      (WEST TO MID-MUSEUM-ENTRANCE IF JEWEL-DOOR IS OPEN)\n      (OUT TO MID-MUSEUM-ENTRANCE IF JEWEL-DOOR IS OPEN)\n      (FLAGS ONBIT RLANDBIT)\n      (ACTION JEWEL-ROOM-F)\n      (GLOBAL JEWEL-DOOR)>",
   "referencedBy": [
    "TM-BUTTON-F",
    "HAPPY-NEW-YEAR",
    "MOVE-JEWELS",
    "TGOTO"
   ]
  },
  "MID-TECH-MUSEUM": {
   "name": "MID-TECH-MUSEUM",
   "file": "tm.zil",
   "line": 153,
   "endLine": 160,
   "desc": "Technology Museum",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "TECH-MUSEUM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WOODEN-DOOR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "MID-MUSEUM-ENTRANCE",
     "kind": "conditional",
     "condition": "WOODEN-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "MID-MUSEUM-ENTRANCE",
     "kind": "conditional",
     "condition": "WOODEN-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM MID-TECH-MUSEUM\n      (IN ROOMS)\n      (DESC \"Technology Museum\")\n      (SOUTH TO MID-MUSEUM-ENTRANCE IF WOODEN-DOOR IS OPEN)\n      (OUT TO MID-MUSEUM-ENTRANCE IF WOODEN-DOOR IS OPEN)\n      (FLAGS RLANDBIT ONBIT)\n      (ACTION TECH-MUSEUM-F)\n      (GLOBAL WOODEN-DOOR)>",
   "referencedBy": [
    "TM-BUTTON-F",
    "HAPPY-NEW-YEAR",
    "TGOTO"
   ]
  },
  "OLD-TECH-MUSEUM": {
   "name": "OLD-TECH-MUSEUM",
   "file": "tm.zil",
   "line": 162,
   "endLine": 169,
   "desc": "Technology Museum",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "OLD-TECH-MUSEUM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WOODEN-DOOR",
    "ROBOT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "OLD-MUSEUM-ENTRANCE",
     "kind": "conditional",
     "condition": "WOODEN-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "OLD-MUSEUM-ENTRANCE",
     "kind": "conditional",
     "condition": "WOODEN-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM OLD-TECH-MUSEUM\n      (IN ROOMS)\n      (DESC \"Technology Museum\")\n      (FLAGS ONBIT RLANDBIT)\n      (ACTION OLD-TECH-MUSEUM-F)\n      (SOUTH TO OLD-MUSEUM-ENTRANCE IF WOODEN-DOOR IS OPEN)\n      (OUT TO OLD-MUSEUM-ENTRANCE IF WOODEN-DOOR IS OPEN)\n      (GLOBAL WOODEN-DOOR ROBOT)>",
   "referencedBy": [
    "TM-BUTTON-F",
    "HAPPY-NEW-YEAR",
    "TGOTO",
    "OLD-TECH-MUSEUM-F"
   ]
  },
  "OLD-JEWEL-ROOM": {
   "name": "OLD-JEWEL-ROOM",
   "file": "tm.zil",
   "line": 171,
   "endLine": 178,
   "desc": "Jewel Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "OLD-TECH-MUSEUM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "JEWEL-DOOR",
    "ROBOT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "OLD-MUSEUM-ENTRANCE",
     "kind": "conditional",
     "condition": "JEWEL-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "OLD-MUSEUM-ENTRANCE",
     "kind": "conditional",
     "condition": "JEWEL-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM OLD-JEWEL-ROOM\n      (IN ROOMS)\n      (DESC \"Jewel Room\")\n      (FLAGS ONBIT RLANDBIT)\n      (ACTION OLD-TECH-MUSEUM-F)\n      (WEST TO OLD-MUSEUM-ENTRANCE IF JEWEL-DOOR IS OPEN)\n      (OUT TO OLD-MUSEUM-ENTRANCE IF JEWEL-DOOR IS OPEN)\n      (GLOBAL JEWEL-DOOR ROBOT)>",
   "referencedBy": [
    "TM-BUTTON-F",
    "HAPPY-NEW-YEAR",
    "MOVE-JEWELS",
    "OLD-TECH-MUSEUM-F"
   ]
  },
  "OLD-MUSEUM-ENTRANCE": {
   "name": "OLD-MUSEUM-ENTRANCE",
   "file": "tm.zil",
   "line": 180,
   "endLine": 189,
   "desc": "Museum Entrance",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "OLD-TECH-MUSEUM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WOODEN-DOOR",
    "JEWEL-DOOR",
    "IRON-DOOR",
    "ROBOT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "OLD-JEWEL-ROOM",
     "kind": "conditional",
     "condition": "JEWEL-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The guards locked the iron door behind them.",
     "dir": "WEST"
    },
    {
     "to": "OLD-TECH-MUSEUM",
     "kind": "conditional",
     "condition": "WOODEN-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The stairs end blindly to the south.",
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM OLD-MUSEUM-ENTRANCE\n      (IN ROOMS)\n      (DESC \"Museum Entrance\")\n      (FLAGS ONBIT RLANDBIT)\n      (ACTION OLD-TECH-MUSEUM-F)\n      (EAST TO OLD-JEWEL-ROOM IF JEWEL-DOOR IS OPEN)\n      (WEST \"The guards locked the iron door behind them.\")\n      (NORTH TO OLD-TECH-MUSEUM IF WOODEN-DOOR IS OPEN)\n      (SOUTH \"The stairs end blindly to the south.\")\n      (GLOBAL WOODEN-DOOR JEWEL-DOOR IRON-DOOR ROBOT)>",
   "referencedBy": [
    "TM-BUTTON-F",
    "JEWEL-DOOR-F"
   ]
  },
  "CREEPY-CRAWL": {
   "name": "CREEPY-CRAWL",
   "file": "shadow.zil",
   "line": 7,
   "endLine": 18,
   "desc": "Creepy Crawl",
   "ldesc": "You are in a dark and quite creepy crawlway with passages leaving to the\nnorth, east, south, and southwest.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CREEPY-CRAWL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "JUNCTION",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "FOGGY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "SHADOW-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "TIGHT-SQUEEZE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM CREEPY-CRAWL\n      (IN ROOMS)\n      (DESC \"Creepy Crawl\")\n      (LDESC\n\"You are in a dark and quite creepy crawlway with passages leaving to the\nnorth, east, south, and southwest.\")\n      (FLAGS RLANDBIT)\n      (NORTH TO JUNCTION)\n      (SOUTH TO FOGGY-ROOM)\n      (SW TO SHADOW-1)\n      (EAST TO TIGHT-SQUEEZE)\n      (ACTION CREEPY-CRAWL-F)>",
   "referencedBy": []
  },
  "SHADOW-1": {
   "name": "SHADOW-1",
   "file": "shadow.zil",
   "line": 20,
   "endLine": 35,
   "desc": "Land of Shadow",
   "ldesc": "You are at the eastern end of a dark, featureless landscape of shallow\nhills. Paths to the east and southeast re-enter the rock.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "SHADOW-ROOMS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Towering walls of rock bar your way.",
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Towering walls of rock bar your way.",
     "dir": "NORTH"
    },
    {
     "to": "SHADOW-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "CREEPY-CRAWL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "SHADOW-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "SHADOW-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SHADOW-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "FOGGY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [],
   "source": "<ROOM SHADOW-1\n      (IN ROOMS)\n      (DESC \"Land of Shadow\")\n      (LDESC\n\"You are at the eastern end of a dark, featureless landscape of shallow\nhills. Paths to the east and southeast re-enter the rock.\")\n      (FLAGS RLANDBIT)\n      (ACTION SHADOW-ROOMS)\n      (NE \"Towering walls of rock bar your way.\")\n      (NORTH \"Towering walls of rock bar your way.\")\n      (SOUTH TO SHADOW-5)\n      (EAST TO CREEPY-CRAWL)\n      (NW TO SHADOW-2)\n      (WEST TO SHADOW-3)\n      (SW TO SHADOW-4)\n      (SE TO FOGGY-ROOM)>",
   "referencedBy": []
  },
  "SHADOW-2": {
   "name": "SHADOW-2",
   "file": "shadow.zil",
   "line": 37,
   "endLine": 55,
   "desc": "Land of Shadow",
   "ldesc": "You are in a shadowy land of low, rolling hills stretching out to the west\nand south. The land is bordered to the north by a massive stone wall.\nAncient and weathered, the wall has crumbled enough at one point to permit\npassage.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "SHADOW-ROOMS",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "RUBBLE",
    "STONE-WALL"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "A stone wall blocks the way.",
     "dir": "NE"
    },
    {
     "to": "CLEARING",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "A stone wall blocks the way.",
     "dir": "NW"
    },
    {
     "to": "SHADOW-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "SHADOW-7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "SHADOW-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "SHADOW-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SHADOW-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM SHADOW-2\n      (IN ROOMS)\n      (DESC \"Land of Shadow\")\n      (LDESC\n\"You are in a shadowy land of low, rolling hills stretching out to the west\nand south. The land is bordered to the north by a massive stone wall.\nAncient and weathered, the wall has crumbled enough at one point to permit\npassage.\")\n      (FLAGS RLANDBIT)\n      (ACTION SHADOW-ROOMS)\n      (NE \"A stone wall blocks the way.\")\n      (NORTH TO CLEARING)\n      (NW \"A stone wall blocks the way.\")\n      (SE TO SHADOW-1)\n      (SW TO SHADOW-7)\n      (SOUTH TO SHADOW-3)\n      (WEST TO SHADOW-8)\n      (EAST TO SHADOW-1)\n      (GLOBAL RUBBLE STONE-WALL)>",
   "referencedBy": []
  },
  "SHADOW-3": {
   "name": "SHADOW-3",
   "file": "shadow.zil",
   "line": 57,
   "endLine": 74,
   "desc": "Land of Shadow",
   "ldesc": "You are in a dark and shadowy land. All around you are gentle hills and\neerie shadows. Far above, shrouded in mist, you can barely make out the\nceiling of the enormous cavern that spans this entire land.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "SHADOW-ROOMS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "MIST",
    "MIST-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "SHADOW-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "SHADOW-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "SHADOW-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "SHADOW-6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "SHADOW-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SHADOW-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "SHADOW-7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SHADOW-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM SHADOW-3\n      (IN ROOMS)\n      (DESC \"Land of Shadow\")\n      (LDESC\n\"You are in a dark and shadowy land. All around you are gentle hills and\neerie shadows. Far above, shrouded in mist, you can barely make out the\nceiling of the enormous cavern that spans this entire land.\")\n      (FLAGS RLANDBIT)\n      (ACTION SHADOW-ROOMS)\n      (PSEUDO \"MIST\" MIST-PSEUDO)\n      (NW TO SHADOW-8)\n      (NE TO SHADOW-1)\n      (SE TO SHADOW-1)\n      (SW TO SHADOW-6)\n      (NORTH TO SHADOW-2)\n      (SOUTH TO SHADOW-4)\n      (WEST TO SHADOW-7)\n      (EAST TO SHADOW-1)>",
   "referencedBy": []
  },
  "SHADOW-4": {
   "name": "SHADOW-4",
   "file": "shadow.zil",
   "line": 76,
   "endLine": 91,
   "desc": "Land of Shadow",
   "ldesc": "You are in an ominously dark land of rolling hills. The ground becomes\nsofter to the south.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "SHADOW-ROOMS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "SHADOW-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SHADOW-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "SHADOW-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "SHADOW-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "SHADOW-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The ground becomes too soft to walk on in that direction.",
     "dir": "SW"
    },
    {
     "to": "SHADOW-6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SHADOW-7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM SHADOW-4\n      (IN ROOMS)\n      (DESC \"Land of Shadow\")\n      (LDESC\n\"You are in an ominously dark land of rolling hills. The ground becomes\nsofter to the south.\")\n      (FLAGS RLANDBIT)\n      (ACTION SHADOW-ROOMS)\n      (NORTH TO SHADOW-3)\n      (EAST TO SHADOW-1)\n      (NE TO SHADOW-1)\n      (SE TO SHADOW-5)\n      (SOUTH TO SHADOW-5)\n      (SW \"The ground becomes too soft to walk on in that direction.\")\n      (WEST TO SHADOW-6)\n      (NW TO SHADOW-7)>",
   "referencedBy": []
  },
  "SHADOW-5": {
   "name": "SHADOW-5",
   "file": "shadow.zil",
   "line": 93,
   "endLine": 110,
   "desc": "Land of Shadow",
   "ldesc": "You are at the southern end of a shadowy land. The ground here is quite\nsoft, and the area is surrounded by quicksand on most sides. North of here\nis a terrain of shallow hills.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "SHADOW-ROOMS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "QUICKS",
    "QUICKSAND-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "SHADOW-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SHADOW-6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "SHADOW-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The quicksand prevents movement in that direction.",
     "dir": "SE"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The quicksand prevents movement in that direction.",
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The quicksand prevents movement in that direction.",
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The quicksand prevents movement in that direction.",
     "dir": "SW"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The quicksand prevents movement in that direction.",
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM SHADOW-5\n      (IN ROOMS)\n      (DESC \"Land of Shadow\")\n      (LDESC\n\"You are at the southern end of a shadowy land. The ground here is quite\nsoft, and the area is surrounded by quicksand on most sides. North of here\nis a terrain of shallow hills.\")\n      (FLAGS RLANDBIT)\n      (ACTION SHADOW-ROOMS)\n      (PSEUDO \"QUICKS\" QUICKSAND-PSEUDO)\n      (NORTH TO SHADOW-4)\n      (NW TO SHADOW-6)\n      (NE TO SHADOW-1)\n      (SE \"The quicksand prevents movement in that direction.\")\n      (WEST \"The quicksand prevents movement in that direction.\")\n      (SOUTH \"The quicksand prevents movement in that direction.\")\n      (SW \"The quicksand prevents movement in that direction.\")\n      (EAST \"The quicksand prevents movement in that direction.\")>",
   "referencedBy": []
  },
  "SHADOW-6": {
   "name": "SHADOW-6",
   "file": "shadow.zil",
   "line": 112,
   "endLine": 131,
   "desc": "Land of Shadow",
   "ldesc": "You are near the southern end of the land of shadow. The ground here is\nsoft and spongy, and it becomes quicksand to the south. North and east of here\nare gentle, rolling hills. A gentle sea breeze wafts over a steeply sloping\npath to the west.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "SHADOW-ROOMS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "QUICKS",
    "QUICKSAND-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "SHADOW-7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "FLATHEAD-OCEAN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "FLATHEAD-OCEAN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "FLATHEAD-OCEAN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "SHADOW-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "SHADOW-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "SHADOW-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The quicksand prevents movement in that direction.",
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The quicksand prevents movement in that direction.",
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM SHADOW-6\n      (IN ROOMS)\n      (DESC \"Land of Shadow\")\n      (LDESC\n\"You are near the southern end of the land of shadow. The ground here is\nsoft and spongy, and it becomes quicksand to the south. North and east of here\nare gentle, rolling hills. A gentle sea breeze wafts over a steeply sloping\npath to the west.\")\n      (FLAGS RLANDBIT)\n      (ACTION SHADOW-ROOMS)\n      (NORTH TO SHADOW-7)\n      (NW TO FLATHEAD-OCEAN)\n      (WEST TO FLATHEAD-OCEAN)\n      (DOWN TO FLATHEAD-OCEAN)\n      (SE TO SHADOW-5)\n      (EAST TO SHADOW-4)\n      (NE TO SHADOW-3)\n      (SOUTH \"The quicksand prevents movement in that direction.\")\n      (SW \"The quicksand prevents movement in that direction.\")\n      (PSEUDO \"QUICKS\" QUICKSAND-PSEUDO)>",
   "referencedBy": []
  },
  "SHADOW-7": {
   "name": "SHADOW-7",
   "file": "shadow.zil",
   "line": 133,
   "endLine": 149,
   "desc": "Land of Shadow",
   "ldesc": "You are in a land of dark shadows and shallow hills, which stretch out in all\ndirections. To the west, the land dips sharply.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "SHADOW-ROOMS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "SHADOW-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "SHADOW-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "SHADOW-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "SHADOW-6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "SHADOW-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "FLATHEAD-OCEAN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "FLATHEAD-OCEAN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "FLATHEAD-OCEAN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "FLATHEAD-OCEAN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM SHADOW-7\n      (IN ROOMS)\n      (DESC \"Land of Shadow\")\n      (LDESC\n\"You are in a land of dark shadows and shallow hills, which stretch out in all\ndirections. To the west, the land dips sharply.\")\n      (FLAGS RLANDBIT)\n      (ACTION SHADOW-ROOMS)\n      (NE TO SHADOW-2)\n      (EAST TO SHADOW-3)\n      (SE TO SHADOW-4)\n      (SOUTH TO SHADOW-6)\n      (NORTH TO SHADOW-8)\n      (DOWN TO FLATHEAD-OCEAN)\n      (NW TO FLATHEAD-OCEAN)\n      (WEST TO FLATHEAD-OCEAN)\n      (SW TO FLATHEAD-OCEAN)>",
   "referencedBy": []
  },
  "SHADOW-8": {
   "name": "SHADOW-8",
   "file": "shadow.zil",
   "line": 151,
   "endLine": 173,
   "desc": "Land of Shadow",
   "ldesc": "You are standing atop a steep cliff, looking west over a vast ocean.\nFar below, the surf pounds at a sandy beach. To the south and east are\nrolling hills filled with eerie shadows. A path cut into the face of the\ncliff descends toward the beach. To the north is a tall stone wall,\nwhich ends at the cliff edge. It was obviously built long ago, and\ndirectly north is a spot where you could climb over the rubble of the\ndecaying wall.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "SHADOW-ROOMS",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "RUBBLE",
    "STONE-WALL"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "SHADOW-7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "SHADOW-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "SHADOW-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "FLATHEAD-OCEAN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "FLATHEAD-OCEAN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "A stone wall blocks the way.",
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "A stone wall blocks the way.",
     "dir": "NW"
    },
    {
     "to": "FLATHEAD-OCEAN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "CLIFF",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM SHADOW-8\n      (IN ROOMS)\n      (DESC \"Land of Shadow\")\n      (LDESC\n\"You are standing atop a steep cliff, looking west over a vast ocean.\nFar below, the surf pounds at a sandy beach. To the south and east are\nrolling hills filled with eerie shadows. A path cut into the face of the\ncliff descends toward the beach. To the north is a tall stone wall,\nwhich ends at the cliff edge. It was obviously built long ago, and\ndirectly north is a spot where you could climb over the rubble of the\ndecaying wall.\")\n      (FLAGS RLANDBIT)\n      (ACTION SHADOW-ROOMS)\n      (SOUTH TO SHADOW-7)\n      (EAST TO SHADOW-2)\n      (SE TO SHADOW-3)\n      (SW TO FLATHEAD-OCEAN)\n      (WEST TO FLATHEAD-OCEAN)\n      (NE \"A stone wall blocks the way.\")\n      (NW \"A stone wall blocks the way.\")\n      (DOWN TO FLATHEAD-OCEAN)\n      (NORTH TO CLIFF)\n      (GLOBAL RUBBLE STONE-WALL)>",
   "referencedBy": []
  },
  "FLATHEAD-OCEAN": {
   "name": "FLATHEAD-OCEAN",
   "file": "shadow.zil",
   "line": 175,
   "endLine": 189,
   "desc": "Flathead Ocean",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "FLATHEAD-OCEAN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "QUICKS",
    "QUICKSAND-PSEUDO",
    "MIST",
    "MIST-PSEUDO"
   ],
   "otherProps": {
    "ENTER": [
     "Between the rocks, wind, and waves, you wouldn't last a minute."
    ]
   },
   "exits": [
    {
     "to": "CLIFF-BASE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Between the rocks, wind, and waves, you wouldn't last a minute.",
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Between the rocks, wind, and waves, you wouldn't last a minute.",
     "dir": "SW"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Between the rocks, wind, and waves, you wouldn't last a minute.",
     "dir": "NW"
    },
    {
     "to": "SHADOW-6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "SHADOW-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "SHADOW-7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The quicksand prevents movement here.",
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "VIKING-SHIP"
   ],
   "source": "<ROOM FLATHEAD-OCEAN\n      (IN ROOMS)\n      (DESC \"Flathead Ocean\")\n      (FLAGS RLANDBIT ONBIT)\n      (NORTH TO CLIFF-BASE)\n      (ENTER\"Between the rocks, wind, and waves, you wouldn't last a minute.\")\n      (WEST \"Between the rocks, wind, and waves, you wouldn't last a minute.\")\n      (SW \"Between the rocks, wind, and waves, you wouldn't last a minute.\")\n      (NW \"Between the rocks, wind, and waves, you wouldn't last a minute.\")\n      (ACTION FLATHEAD-OCEAN-F)\n      (SE TO SHADOW-6)\n      (NE TO SHADOW-8)\n      (EAST TO SHADOW-7)\n      (SOUTH \"The quicksand prevents movement here.\")\n      (PSEUDO \"QUICKS\" QUICKSAND-PSEUDO \"MIST\" MIST-PSEUDO)>",
   "referencedBy": [
    "I-BOAT-DISAPPEAR",
    "OCEAN-F",
    "SAILOR-FCN",
    "V-SWIM"
   ]
  },
  "ZORK2-STAIR": {
   "name": "ZORK2-STAIR",
   "file": "shadow.zil",
   "line": 473,
   "endLine": 485,
   "desc": "Endless Stair",
   "ldesc": "You are at the bottom of a seemingly endless stair, winding its way\nupward beyond your vision. An eerie light, coming from all around you,\ncasts strange shadows on the walls. To the south is a dark and winding\ntrail.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The stairs are endless.",
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The stairs are endless.",
     "dir": "UP"
    },
    {
     "to": "JUNCTION",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM ZORK2-STAIR\n      (IN ROOMS)\n      (DESC \"Endless Stair\")\n      (LDESC\n\"You are at the bottom of a seemingly endless stair, winding its way\nupward beyond your vision. An eerie light, coming from all around you,\ncasts strange shadows on the walls. To the south is a dark and winding\ntrail.\")\n      (FLAGS ONBIT RLANDBIT)\n      (NORTH \"The stairs are endless.\")\n      (UP \"The stairs are endless.\")\n      (SOUTH TO JUNCTION)\n      (GLOBAL STAIRS)>",
   "referencedBy": [
    "JIGS-UP",
    "GO"
   ]
  },
  "JUNCTION": {
   "name": "JUNCTION",
   "file": "shadow.zil",
   "line": 487,
   "endLine": 499,
   "desc": "Junction",
   "ldesc": "You are at the junction of a north-south passage and an east-west\npassage. To the north, you can make out the bottom of a stairway. The\nways to the east and south are relatively cramped, but a wider trail\nleads to the west.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "CLEARING",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "ZORK2-STAIR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "CREEPY-CRAWL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "DAMP-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "STONE"
   ],
   "source": "<ROOM JUNCTION\n      (IN ROOMS)\n      (DESC \"Junction\")\n      (LDESC\n\"You are at the junction of a north-south passage and an east-west\npassage. To the north, you can make out the bottom of a stairway. The\nways to the east and south are relatively cramped, but a wider trail\nleads to the west.\")\n      (FLAGS RLANDBIT)\n      (WEST TO CLEARING)\n      (NORTH TO ZORK2-STAIR)\n      (SOUTH TO CREEPY-CRAWL)\n      (EAST TO DAMP-PASSAGE)>",
   "referencedBy": []
  },
  "CLEARING": {
   "name": "CLEARING",
   "file": "shadow.zil",
   "line": 501,
   "endLine": 519,
   "desc": "Barren Area",
   "ldesc": "You are west of the junction, where the rock-bound passage widens out\ninto a large, flat area. Although the land here is barren, you can see\nvegetation to the west. South of here is a mighty wall of stone, ancient\nand crumbling. To the southwest the wall has decayed enough to form an\nopening, through which seeps a thin mist. A trail dips sharply into\nrocky terrain to the northwest.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "RUBBLE",
    "STONE-WALL"
   ],
   "pseudo": [
    "MIST",
    "MIST-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "SHADOW-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "SLOPE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "A stone wall blocks your way.",
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "A stone wall blocks your way.",
     "dir": "SE"
    },
    {
     "to": "CLIFF",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "JUNCTION",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM CLEARING\n      (IN ROOMS)\n      (DESC \"Barren Area\")\n      (LDESC\n\"You are west of the junction, where the rock-bound passage widens out\ninto a large, flat area. Although the land here is barren, you can see\nvegetation to the west. South of here is a mighty wall of stone, ancient\nand crumbling. To the southwest the wall has decayed enough to form an\nopening, through which seeps a thin mist. A trail dips sharply into\nrocky terrain to the northwest.\")\n      (FLAGS RLANDBIT)\n      (SW TO SHADOW-2)\n      (NW TO SLOPE)\n      (SOUTH \"A stone wall blocks your way.\")\n      (SE \"A stone wall blocks your way.\")\n      (WEST TO CLIFF)\n      (EAST TO JUNCTION)\n      (GLOBAL RUBBLE STONE-WALL)\n      (PSEUDO \"MIST\" MIST-PSEUDO)>",
   "referencedBy": []
  },
  "SLOPE": {
   "name": "SLOPE",
   "file": "shadow.zil",
   "line": 521,
   "endLine": 534,
   "desc": "Hairpin Loop",
   "ldesc": "You are at a sharp turn on a narrow and steeply sloping path, strewn\nwith boulders of various sizes. The path climbs sharply toward a\ndesolate plain to the southeast. Southwest of here the path winds down\nto the base of a cliff.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "RUBBLE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "CLEARING",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "CLEARING",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "CLIFF-BASE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "CLIFF-BASE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM SLOPE\n      (IN ROOMS)\n      (DESC \"Hairpin Loop\")\n      (LDESC\n\"You are at a sharp turn on a narrow and steeply sloping path, strewn\nwith boulders of various sizes. The path climbs sharply toward a\ndesolate plain to the southeast. Southwest of here the path winds down\nto the base of a cliff.\")\n      (SE TO CLEARING)\n      (UP TO CLEARING)\n      (SW TO CLIFF-BASE)\n      (DOWN TO CLIFF-BASE)\n      (GLOBAL RUBBLE)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "CLIFF-BASE": {
   "name": "CLIFF-BASE",
   "file": "shadow.zil",
   "line": 536,
   "endLine": 548,
   "desc": "Cliff Base",
   "ldesc": "You are at the base of a steep cliff. Directly above you is a wide\nledge and far above that some natural sunlight can be seen. To the\nnortheast is a steeply climbing path and the ground becomes sandy toward\nthe south.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LEDGE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You can't get up the rock face.",
     "dir": "UP"
    },
    {
     "to": "FLATHEAD-OCEAN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "SLOPE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    }
   ],
   "contents": [],
   "source": "<ROOM CLIFF-BASE\n      (IN ROOMS)\n      (DESC \"Cliff Base\")\n      (LDESC\n\"You are at the base of a steep cliff. Directly above you is a wide\nledge and far above that some natural sunlight can be seen. To the\nnortheast is a steeply climbing path and the ground becomes sandy toward\nthe south.\")\n      (FLAGS ONBIT RLANDBIT)\n      (UP \"You can't get up the rock face.\")\n      (SOUTH TO FLATHEAD-OCEAN)\n      (NE TO SLOPE)\n      (GLOBAL LEDGE)>",
   "referencedBy": [
    "LEDGE-F"
   ]
  },
  "CLIFF": {
   "name": "CLIFF",
   "file": "shadow.zil",
   "line": 550,
   "endLine": 560,
   "desc": "Cliff",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CLIFF-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-MAN",
    "RUBBLE",
    "STONE-WALL",
    "CLIFF-OBJECT"
   ],
   "pseudo": [
    "MIST",
    "MIST-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "CLIFF-LEDGE",
     "kind": "conditional",
     "condition": "ROPE-FLAG",
     "else": "\"The drop would kill you.\"",
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "There's no tree here suitable for climbing.",
     "dir": "UP"
    },
    {
     "to": "SHADOW-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "CLEARING",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "WAYBREAD",
    "ROPE",
    "TREE"
   ],
   "source": "<ROOM CLIFF\n      (IN ROOMS)\n      (DESC \"Cliff\")\n      (FLAGS ONBIT RLANDBIT)\n      (DOWN TO CLIFF-LEDGE IF ROPE-FLAG ELSE \"The drop would kill you.\")\n      (UP \"There's no tree here suitable for climbing.\")\n      (SW TO SHADOW-8)\n      (EAST TO CLEARING)\n      (ACTION CLIFF-F)\n      (GLOBAL GLOBAL-MAN RUBBLE STONE-WALL CLIFF-OBJECT)\n      (PSEUDO \"MIST\" MIST-PSEUDO)>",
   "referencedBy": [
    "I-SWORD",
    "I-MAN-LIFT",
    "I-MAN-LEAVES",
    "VALUABLES-F",
    "GLOBAL-MAN-F",
    "CLIFF-OBJECT-F"
   ]
  },
  "CLIFF-LEDGE": {
   "name": "CLIFF-LEDGE",
   "file": "shadow.zil",
   "line": 562,
   "endLine": 569,
   "desc": "Cliff Ledge",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CLIFF-LEDGE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "RUBBLE",
    "GLOBAL-ROPE",
    "GLOBAL-MAN",
    "LEDGE",
    "CLIFF-OBJECT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You attempt the climb but slide back down.",
     "dir": "UP"
    },
    {
     "to": "CLIFF-BASE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "CHEST"
   ],
   "source": "<ROOM CLIFF-LEDGE\n      (IN ROOMS)\n      (DESC \"Cliff Ledge\")\n      (FLAGS ONBIT RLANDBIT)\n      (UP \"You attempt the climb but slide back down.\")\n      (DOWN TO CLIFF-BASE)\n      (ACTION CLIFF-LEDGE-F)\n      (GLOBAL RUBBLE GLOBAL-ROPE GLOBAL-MAN LEDGE CLIFF-OBJECT)>",
   "referencedBy": [
    "I-SWORD",
    "LEDGE-F",
    "I-MAN-APPEARS",
    "I-MAN-PRESENT",
    "CLIFF-F",
    "I-MAN-RETURNS",
    "I-MAN-LIFT",
    "CLIFF-OBJECT-F"
   ]
  },
  "FOGGY-ROOM": {
   "name": "FOGGY-ROOM",
   "file": "shadow.zil",
   "line": 571,
   "endLine": 581,
   "desc": "Foggy Room",
   "ldesc": "You are in a dank passage filled with a wispy fog. A spooky passageway\nleads north and a wider path heads off to the south. To the west, the\npath leaves the rock and enters an eerie, shadowy land.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "CREEPY-CRAWL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "LAKE-SHORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "SHADOW-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM FOGGY-ROOM\n      (IN ROOMS)\n      (DESC \"Foggy Room\")\n      (LDESC\n\"You are in a dank passage filled with a wispy fog. A spooky passageway\nleads north and a wider path heads off to the south. To the west, the\npath leaves the rock and enters an eerie, shadowy land.\")\n      (NORTH TO CREEPY-CRAWL)\n      (SOUTH TO LAKE-SHORE)\n      (WEST TO SHADOW-1)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "LAKE-SHORE": {
   "name": "LAKE-SHORE",
   "file": "shadow.zil",
   "line": 583,
   "endLine": 598,
   "desc": "Lake Shore",
   "ldesc": "You are in a wide cavern on the north shore of a small lake. Some\npolished stone steps lead to the southeast and a sheer rock face\nprevents any movement around the lake to the southwest. The cavern is\ndimly lit from above.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LAKE",
    "STAIRS"
   ],
   "pseudo": [
    "SHORE",
    "SHORE-PSEUDO",
    "BEACH",
    "SHORE-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "AQ-VIEW",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "AQ-VIEW",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "If you really want to enter the lake, you should say so.",
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The sheer rock face prevents movement along the lake shore.",
     "dir": "SW"
    },
    {
     "to": "FOGGY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM LAKE-SHORE\n      (IN ROOMS)\n      (DESC \"Lake Shore\")\n      (LDESC\n\"You are in a wide cavern on the north shore of a small lake. Some\npolished stone steps lead to the southeast and a sheer rock face\nprevents any movement around the lake to the southwest. The cavern is\ndimly lit from above.\")\n      (SE TO AQ-VIEW)\n      (DOWN TO AQ-VIEW)\n      (SOUTH \"If you really want to enter the lake, you should say so.\")\n      (SW \"The sheer rock face prevents movement along the lake shore.\")\n      (NORTH TO FOGGY-ROOM)\n      (FLAGS ONBIT RLANDBIT)\n      (GLOBAL LAKE STAIRS)\n      (PSEUDO \"SHORE\" SHORE-PSEUDO \"BEACH\" SHORE-PSEUDO)>",
   "referencedBy": [
    "LAKE-F"
   ]
  },
  "AQ-VIEW": {
   "name": "AQ-VIEW",
   "file": "shadow.zil",
   "line": 600,
   "endLine": 614,
   "desc": "Aqueduct View",
   "ldesc": "This is a small balcony carved into a near-vertical cliff. To the east,\nstretching from north to south, stands a monumental aqueduct supported by\nmighty stone pillars, some of which are starting to crumble from age. You\nfeel a sense of loss and sadness as you ponder this once-proud structure and\nthe failure of the Empire which created this and other engineering marvels.\nSome stone steps lead up to the northwest.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AQUEDUCT",
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "LAKE-SHORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "LAKE-SHORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The drop would be fatal.",
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM AQ-VIEW\n      (IN ROOMS)\n      (DESC \"Aqueduct View\")\n      (LDESC\n\"This is a small balcony carved into a near-vertical cliff. To the east,\nstretching from north to south, stands a monumental aqueduct supported by\nmighty stone pillars, some of which are starting to crumble from age. You\nfeel a sense of loss and sadness as you ponder this once-proud structure and\nthe failure of the Empire which created this and other engineering marvels.\nSome stone steps lead up to the northwest.\")\n      (NW TO LAKE-SHORE)\n      (UP TO LAKE-SHORE)\n      (DOWN \"The drop would be fatal.\")\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL AQUEDUCT STAIRS)>",
   "referencedBy": [
    "I-CLEFT"
   ]
  },
  "ON-LAKE": {
   "name": "ON-LAKE",
   "file": "shadow.zil",
   "line": 616,
   "endLine": 637,
   "desc": "On the Lake",
   "ldesc": "You are floating on the surface of the lake. The water is ice cold and\nyour ability to survive here for long is very questionable. A swim north\nputs you at your starting point. Conditions to the east are poor where\nthe lake turns into swamp. The west and south shores are suitable for\nwalking, however.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ON-LAKE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LAKE",
    "FISH"
   ],
   "pseudo": [
    "SWAMP",
    "SWAMP-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "LAKE-SHORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SOUTH-SHORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The swamp is impassable.",
     "dir": "SE"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The swamp is impassable.",
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The swamp is impassable.",
     "dir": "NE"
    },
    {
     "to": "FAR-SHORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "FAR-SHORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "SOUTH-SHORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "IN-LAKE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM ON-LAKE\n      (IN ROOMS)\n      (DESC \"On the Lake\")\n      (LDESC\n\"You are floating on the surface of the lake. The water is ice cold and\nyour ability to survive here for long is very questionable. A swim north\nputs you at your starting point. Conditions to the east are poor where\nthe lake turns into swamp. The west and south shores are suitable for\nwalking, however.\")\n      (NORTH TO LAKE-SHORE)\n      (SOUTH TO SOUTH-SHORE)\n      (PSEUDO \"SWAMP\" SWAMP-PSEUDO)\n      (SE \"The swamp is impassable.\")\n      (EAST \"The swamp is impassable.\")\n      (NE \"The swamp is impassable.\")\n      (WEST TO FAR-SHORE)\n      (NW TO FAR-SHORE)\n      (SW TO SOUTH-SHORE)\n      (DOWN TO IN-LAKE)\n      (FLAGS RLANDBIT ONBIT)\n      (ACTION ON-LAKE-F)\n      (GLOBAL LAKE FISH)>",
   "referencedBy": [
    "LAKE-F",
    "I-IN-LAKE",
    "GO-ON-LAKE",
    "I-ON-LAKE",
    "I-ROC",
    "SHAKE-LOOP",
    "V-SWIM"
   ]
  },
  "IN-LAKE": {
   "name": "IN-LAKE",
   "file": "shadow.zil",
   "line": 639,
   "endLine": 659,
   "desc": "Underwater",
   "ldesc": "You are below the surface of the lake. It turns out that the lake is quite\nshallow and the bottom is only a few feet below you. Considering the frigid\ntemperature of the water, you should probably not plan an extended stay.\nThe lake bottom is sandy and a few hearty plants and algae live there.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "IN-LAKE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LAKE",
    "FISH"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "ON-LAKE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You are already at the bottom of the lake.",
     "dir": "DOWN"
    },
    {
     "to": "IN-LAKE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "IN-LAKE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "IN-LAKE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "IN-LAKE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "IN-LAKE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "IN-LAKE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "IN-LAKE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "IN-LAKE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [
    "SAND",
    "ALGAE",
    "SHINY-OBJECT"
   ],
   "source": "<ROOM IN-LAKE\n      (IN ROOMS)\n      (DESC \"Underwater\")\n      (LDESC\n\"You are below the surface of the lake. It turns out that the lake is quite\nshallow and the bottom is only a few feet below you. Considering the frigid\ntemperature of the water, you should probably not plan an extended stay.\nThe lake bottom is sandy and a few hearty plants and algae live there.\")\n      (UP TO ON-LAKE)\n      (DOWN \"You are already at the bottom of the lake.\")\n      (NORTH TO IN-LAKE)\n      (SOUTH TO IN-LAKE)\n      (EAST TO IN-LAKE)\n      (WEST TO IN-LAKE)\n      (NE TO IN-LAKE)\n      (NW TO IN-LAKE)\n      (SE TO IN-LAKE)\n      (SW TO IN-LAKE)\n      (FLAGS RLANDBIT ONBIT)\n      (ACTION IN-LAKE-F)\n      (GLOBAL LAKE FISH)>",
   "referencedBy": [
    "LAKE-F",
    "I-IN-LAKE",
    "GO-ON-LAKE",
    "I-ON-LAKE",
    "SHAKE-LOOP",
    "V-SWIM"
   ]
  },
  "FAR-SHORE": {
   "name": "FAR-SHORE",
   "file": "shadow.zil",
   "line": 661,
   "endLine": 672,
   "desc": "Western Shore",
   "ldesc": "You are on the western shore of the lake. The ground here is quite\nhard, but a few sickly reeds manage to grow near the water's edge. The\nonly path leads into the rock to the south.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LAKE"
   ],
   "pseudo": [
    "SHORE",
    "SHORE-PSEUDO",
    "BEACH",
    "SHORE-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "If you want to enter the lake, you should say so.",
     "dir": "EAST"
    },
    {
     "to": "VIEW-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "REEDS"
   ],
   "source": "<ROOM FAR-SHORE\n      (IN ROOMS)\n      (DESC \"Western Shore\")\n      (LDESC\n\"You are on the western shore of the lake. The ground here is quite\nhard, but a few sickly reeds manage to grow near the water's edge. The\nonly path leads into the rock to the south.\")\n      (EAST \"If you want to enter the lake, you should say so.\")\n      (SOUTH TO VIEW-ROOM)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL LAKE)\n      (PSEUDO \"SHORE\" SHORE-PSEUDO \"BEACH\" SHORE-PSEUDO)>",
   "referencedBy": [
    "LAKE-F"
   ]
  },
  "VIEW-ROOM": {
   "name": "VIEW-ROOM",
   "file": "shadow.zil",
   "line": 681,
   "endLine": 687,
   "desc": "Scenic Vista",
   "ldesc": "",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "VIEW-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "FAR-SHORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "VIEWING-TABLE",
    "TORCH",
    "VIEW-INDICATOR"
   ],
   "source": "<ROOM VIEW-ROOM\n      (IN ROOMS)\n      (DESC \"Scenic Vista\")\n      (LDESC \"\")\n      (FLAGS ONBIT RLANDBIT)\n      (NORTH TO FAR-SHORE)\n      (ACTION VIEW-ROOM-F)>",
   "referencedBy": [
    "I-VIEW-SNAP",
    "I-VIEW-CHANGE"
   ]
  },
  "LADDER-TOP": {
   "name": "LADDER-TOP",
   "file": "shadow.zil",
   "line": 1587,
   "endLine": 1596,
   "desc": "Ladder Top",
   "ldesc": "This is a very small room. In the corner is a rickety wooden\nladder, leading downward. It might be safe to descend. There is\nalso a staircase leading upward.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LADDER",
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "LADDER-BOTTOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM LADDER-TOP\t;\"was TLADD\"\n      (IN ROOMS)\n      (LDESC\n\"This is a very small room. In the corner is a rickety wooden\nladder, leading downward. It might be safe to descend. There is\nalso a staircase leading upward.\")\n      (DESC \"Ladder Top\")\n      (DOWN TO LADDER-BOTTOM)\n      (FLAGS RLANDBIT)\n      (GLOBAL LADDER STAIRS)>",
   "referencedBy": [
    "I-CLEFT"
   ]
  },
  "LADDER-BOTTOM": {
   "name": "LADDER-BOTTOM",
   "file": "shadow.zil",
   "line": 1605,
   "endLine": 1616,
   "desc": "Ladder Bottom",
   "ldesc": "This is a rather wide room. On one side is the bottom of a\nnarrow wooden ladder. To the west and the south are passages\nleaving the room.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LADDER"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DEAD-END-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "TIMBER-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "LADDER-TOP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM LADDER-BOTTOM\t;\"was BLADD\"\n      (IN ROOMS)\n      (LDESC\n\"This is a rather wide room. On one side is the bottom of a\nnarrow wooden ladder. To the west and the south are passages\nleaving the room.\")\n      (DESC \"Ladder Bottom\")\n      (SOUTH TO DEAD-END-5)\n      (WEST TO TIMBER-ROOM)\n      (UP TO LADDER-TOP)\n      (FLAGS RLANDBIT)\n      (GLOBAL LADDER)>",
   "referencedBy": [
    "I-CLEFT"
   ]
  },
  "DEAD-END-5": {
   "name": "DEAD-END-5",
   "file": "shadow.zil",
   "line": 1618,
   "endLine": 1624,
   "desc": "Dead End",
   "ldesc": "You have come to a dead end in the mine.|\nThere is a small pile of coal here.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "LADDER-BOTTOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM DEAD-END-5\t;\"was DEAD7\"\n      (IN ROOMS)\n      (DESC \"Dead End\")\n      (LDESC \"You have come to a dead end in the mine.|\nThere is a small pile of coal here.\")\n      (NORTH TO LADDER-BOTTOM)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "TIMBER-ROOM": {
   "name": "TIMBER-ROOM",
   "file": "shadow.zil",
   "line": 1626,
   "endLine": 1639,
   "desc": "Timber Room",
   "ldesc": "This is a long and narrow passage, which is cluttered with broken\ntimbers. A wide passage comes from the east and turns at the\nwest end of the room into a very narrow passageway. From the west\ncomes a strong draft.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "NO-OBJS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "LADDER-BOTTOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "LOWER-SHAFT",
     "kind": "conditional",
     "condition": "EMPTY-HANDED",
     "else": "\"You cannot fit through this passage with that load.\"",
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "TIMBERS"
   ],
   "source": "<ROOM TIMBER-ROOM\t;\"was TIMBE\"\n      (IN ROOMS)\n      (LDESC\n\"This is a long and narrow passage, which is cluttered with broken\ntimbers. A wide passage comes from the east and turns at the\nwest end of the room into a very narrow passageway. From the west\ncomes a strong draft.\")\n      (DESC \"Timber Room\")\n      (EAST TO LADDER-BOTTOM)\n      (WEST TO LOWER-SHAFT\n       IF EMPTY-HANDED\n       ELSE \"You cannot fit through this passage with that load.\")\n      (ACTION NO-OBJS)\n      (FLAGS RLANDBIT)>",
   "referencedBy": [
    "I-CLEFT"
   ]
  },
  "LOWER-SHAFT": {
   "name": "LOWER-SHAFT",
   "file": "shadow.zil",
   "line": 1641,
   "endLine": 1648,
   "desc": "Drafty Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "NO-OBJS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "MACHINE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "TIMBER-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "TIMBER-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM LOWER-SHAFT\t;\"was BSHAF\"\n      (IN ROOMS)\n      (DESC \"Drafty Room\")\n      (SOUTH TO MACHINE-ROOM)\n      (OUT TO TIMBER-ROOM)\n      (EAST TO TIMBER-ROOM)\n      (ACTION NO-OBJS)\n      (FLAGS RLANDBIT)>",
   "referencedBy": [
    "I-CLEFT"
   ]
  },
  "MACHINE-ROOM": {
   "name": "MACHINE-ROOM",
   "file": "shadow.zil",
   "line": 1650,
   "endLine": 1653,
   "desc": "Machine Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [],
   "contents": [],
   "source": "<ROOM MACHINE-ROOM\n      (IN ROOMS)\n      (DESC \"Machine Room\")\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "ROOM-8": {
   "name": "ROOM-8",
   "file": "shadow.zil",
   "line": 1671,
   "endLine": 1680,
   "desc": "Room 8",
   "ldesc": "This is a small chamber carved out of the rock at the end of a short crawl.\nOn the wall is crudely chiseled the number \"8\". The only apparent exit,\nto the east, seems to be a blur and a loud, whirring sound resounds through\nthe rock.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You are repelled from the exit by a fierce wind.",
     "dir": "EAST"
    }
   ],
   "contents": [
    "REPELLENT"
   ],
   "source": "<ROOM ROOM-8\n      (IN ROOMS)\n      (LDESC\n\"This is a small chamber carved out of the rock at the end of a short crawl.\nOn the wall is crudely chiseled the number \\\"8\\\". The only apparent exit,\nto the east, seems to be a blur and a loud, whirring sound resounds through\nthe rock.\")\n      (DESC \"Room 8\")\n      (FLAGS RLANDBIT)\n      (EAST \"You are repelled from the exit by a fierce wind.\")>",
   "referencedBy": [
    "I-CLEFT"
   ]
  },
  "ZORK-IV": {
   "name": "ZORK-IV",
   "file": "shadow.zil",
   "line": 1732,
   "endLine": 1736,
   "desc": "Sacrificial Altar",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ZORK-IV-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [],
   "contents": [],
   "source": "<ROOM ZORK-IV\n      (IN ROOMS)\n      (DESC \"Sacrificial Altar\")\n      (FLAGS ONBIT RLANDBIT)\n      (ACTION ZORK-IV-F)>",
   "referencedBy": [
    "I-CLEFT"
   ]
  },
  "SOUTH-SHORE": {
   "name": "SOUTH-SHORE",
   "file": "shadow.zil",
   "line": 1757,
   "endLine": 1772,
   "desc": "Southern Shore",
   "ldesc": "You are on the south shore of the lake. Rock formations prevent\nmovement to the west and thickening swamp to the east makes the going\nall but impossible. To the south, where the beach meets a rock\nformation, you can make out a dark passage sloping steeply upward into the\nrock.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LAKE"
   ],
   "pseudo": [
    "BEACH",
    "SHORE-PSEUDO",
    "SWAMP",
    "SWAMP-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The swamp is too thick.",
     "dir": "EAST"
    },
    {
     "to": "DARK-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "If you want to go into the lake, you should say so.",
     "dir": "NORTH"
    },
    {
     "to": "DARK-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM SOUTH-SHORE\n      (IN ROOMS)\n      (DESC \"Southern Shore\")\n      (LDESC\n\"You are on the south shore of the lake. Rock formations prevent\nmovement to the west and thickening swamp to the east makes the going\nall but impossible. To the south, where the beach meets a rock\nformation, you can make out a dark passage sloping steeply upward into the\nrock.\")\n      (EAST \"The swamp is too thick.\")\n      (UP TO DARK-1)\n      (NORTH \"If you want to go into the lake, you should say so.\")\n      (SOUTH TO DARK-1)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL LAKE)\n      (PSEUDO \"BEACH\" SHORE-PSEUDO \"SWAMP\" SWAMP-PSEUDO)>",
   "referencedBy": [
    "LAKE-F"
   ]
  },
  "DARK-1": {
   "name": "DARK-1",
   "file": "shadow.zil",
   "line": 1774,
   "endLine": 1781,
   "desc": "Dark Place",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "SOUTH-SHORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "DARK-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "DARK-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "SOUTH-SHORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM DARK-1\n      (IN ROOMS)\n      (DESC \"Dark Place\")\n      (NORTH TO SOUTH-SHORE)\n      (SOUTH TO DARK-2)\n      (UP TO DARK-2)\n      (DOWN TO SOUTH-SHORE)\n      (FLAGS RLANDBIT)>",
   "referencedBy": [
    "JIGS-UP",
    "V-WALK",
    "GOTO"
   ]
  },
  "DARK-2": {
   "name": "DARK-2",
   "file": "shadow.zil",
   "line": 1783,
   "endLine": 1790,
   "desc": "Dark Place",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DARK-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "KEY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "KEY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "DARK-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM DARK-2\n      (IN ROOMS)\n      (DESC \"Dark Place\")\n      (NORTH TO DARK-1)\n      (EAST TO KEY-ROOM)\n      (UP TO KEY-ROOM)\n      (DOWN TO DARK-1)\n      (FLAGS RLANDBIT)>",
   "referencedBy": [
    "JIGS-UP",
    "V-WALK",
    "DESCRIBE-ROOM",
    "GOTO"
   ]
  },
  "KEY-ROOM": {
   "name": "KEY-ROOM",
   "file": "shadow.zil",
   "line": 1792,
   "endLine": 1799,
   "desc": "Key Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "KEY-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DARK-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "AQ-1",
     "kind": "conditional",
     "condition": "COVER-MOVED",
     "else": "\"You can't walk through a piece of metal.\"",
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "COVER",
    "KEY"
   ],
   "source": "<ROOM KEY-ROOM\n      (IN ROOMS)\n      (DESC \"Key Room\")\n      (WEST TO DARK-2)\n      (DOWN TO AQ-1 IF COVER-MOVED\n       \t\t    ELSE \"You can't walk through a piece of metal.\")\n      (ACTION KEY-ROOM-F)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": [
    "JIGS-UP"
   ]
  },
  "AQ-1": {
   "name": "AQ-1",
   "file": "shadow.zil",
   "line": 1801,
   "endLine": 1814,
   "desc": "Aqueduct",
   "ldesc": "You are in a wide stone channel, part of the water supply system for the\nGreat Underground Empire. The source of water was a waterfall to the south,\nwhich has long since dried up. Water flowed along the aqueduct to the north.\nThis region is lit from above, although the source of light is not apparent.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AQUEDUCT",
    "WATER-CHANNEL",
    "MOSS"
   ],
   "pseudo": [
    "WATERF",
    "WATERFALL-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The hole is too far above your head.",
     "dir": "UP"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You can't climb the dried-up waterfall.",
     "dir": "SOUTH"
    },
    {
     "to": "AQ-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM AQ-1\n      (IN ROOMS)\n      (DESC \"Aqueduct\")\n      (UP \"The hole is too far above your head.\")\n      (LDESC\n\"You are in a wide stone channel, part of the water supply system for the\nGreat Underground Empire. The source of water was a waterfall to the south,\nwhich has long since dried up. Water flowed along the aqueduct to the north.\nThis region is lit from above, although the source of light is not apparent.\")\n      (SOUTH \"You can't climb the dried-up waterfall.\")\n      (NORTH TO AQ-2)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL AQUEDUCT WATER-CHANNEL MOSS)\n      (PSEUDO \"WATERF\" WATERFALL-PSEUDO)>",
   "referencedBy": [
    "JIGS-UP"
   ]
  },
  "AQ-2": {
   "name": "AQ-2",
   "file": "shadow.zil",
   "line": 1816,
   "endLine": 1825,
   "desc": "High Arch",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "AQ-2-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AQUEDUCT",
    "WATER-CHANNEL",
    "MOSS"
   ],
   "pseudo": [
    "ARCH",
    "ARCH-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "AQ-3",
     "kind": "conditional",
     "condition": "AQ-FLAG",
     "else": "\"The arch before you is broken.\"",
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "AQ-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "It's a long way down....",
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM AQ-2\n      (IN ROOMS)\n      (DESC \"High Arch\")\n      (NORTH TO AQ-3 IF AQ-FLAG ELSE \"The arch before you is broken.\")\n      (SOUTH TO AQ-1)\n      (DOWN \"It's a long way down....\")\n      (FLAGS RLANDBIT ONBIT)\n      (ACTION AQ-2-F)\n      (GLOBAL AQUEDUCT WATER-CHANNEL MOSS)\n      (PSEUDO \"ARCH\" ARCH-PSEUDO)>",
   "referencedBy": [
    "JIGS-UP",
    "I-CLEFT"
   ]
  },
  "AQ-3": {
   "name": "AQ-3",
   "file": "shadow.zil",
   "line": 1827,
   "endLine": 1836,
   "desc": "Water Slide",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "AQ-3-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AQUEDUCT",
    "WATER-CHANNEL",
    "MOSS"
   ],
   "pseudo": [
    "ARCH",
    "ARCH-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "DAMP-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "DAMP-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "AQ-2",
     "kind": "conditional",
     "condition": "AQ-FLAG",
     "else": "\"The arch to the south is broken.\"",
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM AQ-3\n      (IN ROOMS)\n      (DESC \"Water Slide\")\n      (NORTH TO DAMP-PASSAGE)\n      (DOWN TO DAMP-PASSAGE)\n      (SOUTH TO AQ-2 IF AQ-FLAG ELSE \"The arch to the south is broken.\")\n      (FLAGS RLANDBIT ONBIT)\n      (ACTION AQ-3-F)\n      (GLOBAL AQUEDUCT WATER-CHANNEL MOSS)\n      (PSEUDO \"ARCH\" ARCH-PSEUDO)>",
   "referencedBy": [
    "I-CLEFT"
   ]
  },
  "CP-ANTE": {
   "name": "CP-ANTE",
   "file": "dungeon.zil",
   "line": 107,
   "endLine": 116,
   "desc": "Royal Puzzle Entrance",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CPANT-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "CP-OUT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MUSEUM-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MUSEUM-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "CPENTER",
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "LAMP",
    "WARNING-NOTE",
    "CP-HOLE"
   ],
   "source": "<ROOM CP-ANTE\n      (IN ROOMS)\n      (DESC \"Royal Puzzle Entrance\")\n      (WEST TO CP-OUT)\n      (NORTH TO MUSEUM-ENTRANCE)\n      (UP TO MUSEUM-ENTRANCE)\n      (DOWN PER CPENTER)\n      (FLAGS RLANDBIT ONBIT)\n      (ACTION CPANT-ROOM)\n      (GLOBAL STAIRS)>",
   "referencedBy": [
    "CPEXIT",
    "CPLADDER-JUNK",
    "TIME-MACHINE-F"
   ]
  },
  "CP-OUT": {
   "name": "CP-OUT",
   "file": "dungeon.zil",
   "line": 118,
   "endLine": 126,
   "desc": "Side Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CPOUT-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CPDOOR",
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "CP-ANTE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "CP-ANTE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "CP",
     "kind": "conditional",
     "condition": "CP-FLAG",
     "else": "\"The steel door is closed.\"",
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM CP-OUT\n      (IN ROOMS)\n      (DESC \"Side Room\")\n      (NORTH TO CP-ANTE)\n      (UP TO CP-ANTE)\n      (EAST TO CP IF CP-FLAG ELSE \"The steel door is closed.\")\n      (FLAGS RLANDBIT ONBIT)\n      (ACTION CPOUT-ROOM)\n      (GLOBAL CPDOOR STAIRS)>",
   "referencedBy": [
    "CPEXIT",
    "CPWALL-OBJECT"
   ]
  },
  "CP": {
   "name": "CP",
   "file": "dungeon.zil",
   "line": 128,
   "endLine": 142,
   "desc": "Room in a Puzzle",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CP-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CPLADDER",
    "CPDOOR",
    "CPEWL",
    "CPWWL",
    "CPNWL",
    "CPSWL"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "CPEXIT",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "CPEXIT",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "CPEXIT",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "CPEXIT",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "CPEXIT",
     "message": null,
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "CPEXIT",
     "message": null,
     "dir": "NW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "CPEXIT",
     "message": null,
     "dir": "SE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "CPEXIT",
     "message": null,
     "dir": "UP"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "CPEXIT",
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM CP\n      (IN ROOMS)\n      (DESC \"Room in a Puzzle\")\n      (NORTH PER CPEXIT)\n      (SOUTH PER CPEXIT)\n      (EAST PER CPEXIT)\n      (WEST PER CPEXIT)\n      (NE PER CPEXIT)\n      (NW PER CPEXIT)\n      (SE PER CPEXIT)\n      (UP PER CPEXIT)\n      (SW PER CPEXIT)\n      (ACTION CP-ROOM)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL CPLADDER CPDOOR CPEWL CPWWL CPNWL CPSWL)>",
   "referencedBy": [
    "CPEXIT",
    "CPENTER",
    "CPGOTO",
    "CPDOOR-F",
    "BUFFER-PRINT",
    "V-WALK"
   ]
  },
  "MRD": {
   "name": "MRD",
   "file": "dungeon.zil",
   "line": 292,
   "endLine": 304,
   "desc": "Hallway",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MRDF",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "ROSE",
    "CHANNEL",
    "GUARDIAN",
    "WOODEN-WALL"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "FRONT-DOOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "FRONT-DOOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "FRONT-DOOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "SE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM MRD\n      (IN ROOMS)\n      (DESC \"Hallway\")\n      (LDESC \" \")\n      (NORTH TO FRONT-DOOR)\n      (NE TO FRONT-DOOR)\n      (NW TO FRONT-DOOR)\n      (SOUTH PER MRGO)\n      (SE PER MRGO)\n      (SW PER MRGO)\n      (ACTION MRDF)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL ROSE CHANNEL GUARDIAN WOODEN-WALL)>",
   "referencedBy": [
    "LOOK-TO",
    "GUARDIANS",
    "MIRNS",
    "MENDS",
    "FRONT-DOOR-F"
   ]
  },
  "MRG": {
   "name": "MRG",
   "file": "dungeon.zil",
   "line": 306,
   "endLine": 319,
   "desc": "Hallway",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "GUARDIANS",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GUARDIAN"
   ],
   "pseudo": [],
   "otherProps": {
    "ENTER": [
     "PER",
     "MIRIN"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "NW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "SW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [],
   "source": "<ROOM MRG\n      (IN ROOMS)\n      (DESC \"Hallway\")\n      (LDESC \" \")\n      (NORTH PER MRGO)\n      (NW PER MRGO)\n      (NE PER MRGO)\n      (ENTER PER MIRIN)\n      (SOUTH PER MRGO)\n      (SW PER MRGO)\n      (SE PER MRGO)\n      (ACTION GUARDIANS)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL GUARDIAN)>",
   "referencedBy": [
    "LOOK-TO",
    "MRDF",
    "MRCF",
    "GUARDIANS",
    "MPANELS",
    "MENDS",
    "MIRMOVE",
    "I-VISIBLE",
    "EG-INFESTED?"
   ]
  },
  "MRC": {
   "name": "MRC",
   "file": "dungeon.zil",
   "line": 321,
   "endLine": 334,
   "desc": "Hallway",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MRCF",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MIRROR",
    "PANEL",
    "ROSE",
    "CHANNEL",
    "GUARDIAN",
    "WOODEN-WALL"
   ],
   "pseudo": [],
   "otherProps": {
    "ENTER": [
     "PER",
     "MIRIN"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "NW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "SW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [],
   "source": "<ROOM MRC\n      (IN ROOMS)\n      (DESC \"Hallway\")\n      (LDESC \" \")\n      (NORTH PER MRGO)\n      (NW PER MRGO)\n      (NE PER MRGO)\n      (ENTER PER MIRIN)\n      (SOUTH PER MRGO)\n      (SW PER MRGO)\n      (SE PER MRGO)\n      (ACTION MRCF)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL MIRROR PANEL ROSE CHANNEL GUARDIAN WOODEN-WALL)>",
   "referencedBy": [
    "LOOK-TO",
    "MRBF",
    "GUARDIANS",
    "MENDS"
   ]
  },
  "MRB": {
   "name": "MRB",
   "file": "dungeon.zil",
   "line": 336,
   "endLine": 349,
   "desc": "Hallway",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MRBF",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MIRROR",
    "PANEL",
    "ROSE",
    "CHANNEL",
    "WOODEN-WALL"
   ],
   "pseudo": [],
   "otherProps": {
    "ENTER": [
     "PER",
     "MIRIN"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "NW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "SW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [],
   "source": "<ROOM MRB\n      (IN ROOMS)\n      (DESC \"Hallway\")\n      (LDESC \" \")\n      (NORTH PER MRGO)\n      (NW PER MRGO)\n      (NE PER MRGO)\n      (ENTER PER MIRIN)\n      (SOUTH PER MRGO)\n      (SW PER MRGO)\n      (SE PER MRGO)\n      (ACTION MRBF)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL MIRROR PANEL ROSE CHANNEL WOODEN-WALL)>",
   "referencedBy": [
    "MRCF",
    "MRAF",
    "MAGIC-MIRROR",
    "SHORT-POLE-F",
    "GO"
   ]
  },
  "MRA": {
   "name": "MRA",
   "file": "dungeon.zil",
   "line": 351,
   "endLine": 362,
   "desc": "Hallway",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MRAF",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MIRROR",
    "PANEL",
    "ROSE",
    "CHANNEL",
    "WOODEN-WALL"
   ],
   "pseudo": [],
   "otherProps": {
    "ENTER": [
     "PER",
     "MIRIN"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "NW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "NE"
    },
    {
     "to": "MREYE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM MRA\n      (IN ROOMS)\n      (DESC \"Hallway\")\n      (LDESC \" \")\n      (NORTH PER MRGO)\n      (NW PER MRGO)\n      (NE PER MRGO)\n      (ENTER PER MIRIN)\n      (SOUTH TO MREYE)\n      (ACTION MRAF)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL MIRROR PANEL ROSE CHANNEL WOODEN-WALL)>",
   "referencedBy": [
    "LOOK-TO",
    "MRBF",
    "MIRNS",
    "MREYE-ROOM",
    "BEAM-FUNCTION",
    "MRSWITCH"
   ]
  },
  "MRDE": {
   "name": "MRDE",
   "file": "dungeon.zil",
   "line": 364,
   "endLine": 374,
   "desc": "Narrow Room",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MRDEW",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MIRROR",
    "PANEL",
    "GUARDIAN"
   ],
   "pseudo": [],
   "otherProps": {
    "ENTER": [
     "PER",
     "MIRIN"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MIRIN",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "FRONT-DOOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MRG",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM MRDE\n      (IN ROOMS)\n      (DESC \"Narrow Room\")\n      (LDESC \" \")\n      (ENTER PER MIRIN)\n      (WEST PER MIRIN)\n      (NORTH TO FRONT-DOOR)\n      (SOUTH TO MRG)\n      (ACTION MRDEW)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL MIRROR PANEL GUARDIAN)>",
   "referencedBy": [
    "MIRROR-HERE?"
   ]
  },
  "MRDW": {
   "name": "MRDW",
   "file": "dungeon.zil",
   "line": 376,
   "endLine": 386,
   "desc": "Narrow Room",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MRDEW",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MIRROR",
    "PANEL",
    "GUARDIAN"
   ],
   "pseudo": [],
   "otherProps": {
    "ENTER": [
     "PER",
     "MIRIN"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MIRIN",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "FRONT-DOOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MRG",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM MRDW\n      (IN ROOMS)\n      (DESC \"Narrow Room\")\n      (LDESC \" \")\n      (ENTER PER MIRIN)\n      (WEST PER MIRIN)\n      (NORTH TO FRONT-DOOR)\n      (SOUTH TO MRG)\n      (ACTION MRDEW)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL MIRROR PANEL GUARDIAN)>",
   "referencedBy": [
    "MIRROR-HERE?"
   ]
  },
  "MRGE": {
   "name": "MRGE",
   "file": "dungeon.zil",
   "line": 388,
   "endLine": 398,
   "desc": "Narrow Room",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "GUARDIANS",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MIRROR",
    "PANEL",
    "GUARDIAN"
   ],
   "pseudo": [],
   "otherProps": {
    "ENTER": [
     "PER",
     "MIRIN"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MIRIN",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MRD",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MRC",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM MRGE\n      (IN ROOMS)\n      (DESC \"Narrow Room\")\n      (LDESC \" \")\n      (ENTER PER MIRIN)\n      (WEST PER MIRIN)\n      (NORTH TO MRD)\n      (SOUTH TO MRC)\n      (ACTION GUARDIANS)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL MIRROR PANEL GUARDIAN)>",
   "referencedBy": [
    "EWTELL",
    "MIRROR-HERE?",
    "I-VISIBLE",
    "EG-INFESTED?"
   ]
  },
  "MRGW": {
   "name": "MRGW",
   "file": "dungeon.zil",
   "line": 400,
   "endLine": 410,
   "desc": "Narrow Room",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "GUARDIANS",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MIRROR",
    "PANEL",
    "GUARDIAN"
   ],
   "pseudo": [],
   "otherProps": {
    "ENTER": [
     "PER",
     "MIRIN"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MIRIN",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MRD",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MRC",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM MRGW\n      (IN ROOMS)\n      (DESC \"Narrow Room\")\n      (LDESC \" \")\n      (ENTER PER MIRIN)\n      (EAST PER MIRIN)\n      (NORTH TO MRD)\n      (SOUTH TO MRC)\n      (ACTION GUARDIANS)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL MIRROR PANEL GUARDIAN)>",
   "referencedBy": [
    "MIRROR-HERE?",
    "I-VISIBLE",
    "EG-INFESTED?"
   ]
  },
  "MRCE": {
   "name": "MRCE",
   "file": "dungeon.zil",
   "line": 412,
   "endLine": 422,
   "desc": "Narrow Room",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MRCEW",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MIRROR",
    "PANEL",
    "GUARDIAN"
   ],
   "pseudo": [],
   "otherProps": {
    "ENTER": [
     "PER",
     "MIRIN"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MIRIN",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MRG",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MRB",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM MRCE\n      (IN ROOMS)\n      (DESC \"Narrow Room\")\n      (LDESC \" \")\n      (ENTER PER MIRIN)\n      (WEST PER MIRIN)\n      (NORTH TO MRG)\n      (SOUTH TO MRB)\n      (ACTION MRCEW)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL MIRROR PANEL GUARDIAN)>",
   "referencedBy": [
    "EWTELL",
    "MIRROR-HERE?"
   ]
  },
  "MRCW": {
   "name": "MRCW",
   "file": "dungeon.zil",
   "line": 424,
   "endLine": 434,
   "desc": "Narrow Room",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MRCEW",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MIRROR",
    "PANEL",
    "GUARDIAN"
   ],
   "pseudo": [],
   "otherProps": {
    "ENTER": [
     "PER",
     "MIRIN"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MIRIN",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MRG",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MRB",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM MRCW\n      (IN ROOMS)\n      (DESC \"Narrow Room\")\n      (LDESC \" \")\n      (ENTER PER MIRIN)\n      (EAST PER MIRIN)\n      (NORTH TO MRG)\n      (SOUTH TO MRB)\n      (ACTION MRCEW)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL MIRROR PANEL GUARDIAN)>",
   "referencedBy": [
    "MIRROR-HERE?"
   ]
  },
  "MRBE": {
   "name": "MRBE",
   "file": "dungeon.zil",
   "line": 436,
   "endLine": 446,
   "desc": "Narrow Room",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MRBEW",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MIRROR",
    "PANEL",
    "GUARDIAN"
   ],
   "pseudo": [],
   "otherProps": {
    "ENTER": [
     "PER",
     "MIRIN"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MIRIN",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MRC",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MRA",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM MRBE\n      (IN ROOMS)\n      (DESC \"Narrow Room\")\n      (LDESC \" \")\n      (ENTER PER MIRIN)\n      (WEST PER MIRIN)\n      (NORTH TO MRC)\n      (SOUTH TO MRA)\n      (ACTION MRBEW)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL MIRROR PANEL GUARDIAN)>",
   "referencedBy": [
    "EWTELL",
    "MIRROR-HERE?"
   ]
  },
  "MRBW": {
   "name": "MRBW",
   "file": "dungeon.zil",
   "line": 448,
   "endLine": 458,
   "desc": "Narrow Room",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MRBEW",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MIRROR",
    "PANEL",
    "GUARDIAN"
   ],
   "pseudo": [],
   "otherProps": {
    "ENTER": [
     "PER",
     "MIRIN"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MIRIN",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MRC",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MRA",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM MRBW\n      (IN ROOMS)\n      (DESC \"Narrow Room\")\n      (LDESC \" \")\n      (ENTER PER MIRIN)\n      (EAST PER MIRIN)\n      (NORTH TO MRC)\n      (SOUTH TO MRA)\n      (ACTION MRBEW)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL MIRROR PANEL GUARDIAN)>",
   "referencedBy": [
    "MIRROR-HERE?"
   ]
  },
  "MRAE": {
   "name": "MRAE",
   "file": "dungeon.zil",
   "line": 460,
   "endLine": 470,
   "desc": "Narrow Room",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MRAEW",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MIRROR",
    "PANEL",
    "GUARDIAN"
   ],
   "pseudo": [],
   "otherProps": {
    "ENTER": [
     "PER",
     "MIRIN"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MIRIN",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MRB",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MREYE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM MRAE\n      (IN ROOMS)\n      (DESC \"Narrow Room\")\n      (LDESC \" \")\n      (ENTER PER MIRIN)\n      (WEST PER MIRIN)\n      (NORTH TO MRB)\n      (SOUTH TO MREYE)\n      (ACTION MRAEW)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL MIRROR PANEL GUARDIAN)>",
   "referencedBy": [
    "EWTELL",
    "MIRROR-HERE?"
   ]
  },
  "MRAW": {
   "name": "MRAW",
   "file": "dungeon.zil",
   "line": 472,
   "endLine": 482,
   "desc": "Narrow Room",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MRAEW",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MIRROR",
    "PANEL",
    "GUARDIAN"
   ],
   "pseudo": [],
   "otherProps": {
    "ENTER": [
     "PER",
     "MIRIN"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MIRIN",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MRB",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MREYE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM MRAW\n      (IN ROOMS)\n      (DESC \"Narrow Room\")\n      (LDESC \" \")\n      (ENTER PER MIRIN)\n      (EAST PER MIRIN)\n      (NORTH TO MRB)\n      (SOUTH TO MREYE)\n      (ACTION MRAEW)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL MIRROR PANEL GUARDIAN)>",
   "referencedBy": [
    "MIRROR-HERE?"
   ]
  },
  "IN-MIRROR": {
   "name": "IN-MIRROR",
   "file": "dungeon.zil",
   "line": 484,
   "endLine": 499,
   "desc": "Inside Mirror",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MAGIC-MIRROR",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "ROSE",
    "CHANNEL",
    "GUARDIAN"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MIROUT",
     "message": null,
     "dir": "OUT"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MIROUT",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MIROUT",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MIROUT",
     "message": null,
     "dir": "NW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MIROUT",
     "message": null,
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MIROUT",
     "message": null,
     "dir": "SE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MIROUT",
     "message": null,
     "dir": "SW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MIROUT",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MIROUT",
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "T-BAR",
    "BLACK-PANEL",
    "COMPASS-ARROW",
    "LONG-POLE",
    "MAHOGANY-PANEL",
    "PINE-PANEL",
    "RED-PANEL",
    "SHORT-POLE",
    "YELLOW-PANEL",
    "WHITE-PANEL",
    "WOODEN-BAR"
   ],
   "source": "<ROOM IN-MIRROR\n      (IN ROOMS)\n      (DESC \"Inside Mirror\")\n      (LDESC \" \")\n      (OUT PER MIROUT)\n      (NORTH PER MIROUT)\n      (SOUTH PER MIROUT)\n      (NW PER MIROUT)\n      (NE PER MIROUT)\n      (SE PER MIROUT)\n      (SW PER MIROUT)\n      (WEST PER MIROUT)\n      (EAST PER MIROUT)\n      (ACTION MAGIC-MIRROR)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL ROSE CHANNEL GUARDIAN)>",
   "referencedBy": [
    "MRGO",
    "GUARDIANS",
    "MIRIN",
    "I-MRINT",
    "MIRMOVE",
    "RANDOM-WALL",
    "EG-INFESTED?"
   ]
  },
  "MR-ANTE": {
   "name": "MR-ANTE",
   "file": "dungeon.zil",
   "line": 501,
   "endLine": 513,
   "desc": "Button Room",
   "ldesc": "You are at the southern end of a long hall. To the south, stairs ascend\ninto darkness. To the north the corridor is illuminated by torches set\nhigh in the walls, out of reach. On one wall is a red button.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "SECRET-DOOR",
    "STAIRS"
   ],
   "pseudo": [
    "TORCH",
    "TORCH-PSEUDO",
    "TORCHE",
    "TORCH-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "MSTAIRS",
     "kind": "conditional",
     "condition": "SECRET-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "MSTAIRS",
     "kind": "conditional",
     "condition": "SECRET-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "MREYE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "RED-BUTTON"
   ],
   "source": "<ROOM MR-ANTE\n      (IN ROOMS)\n      (DESC \"Button Room\")\n      (LDESC\n\"You are at the southern end of a long hall. To the south, stairs ascend\ninto darkness. To the north the corridor is illuminated by torches set\nhigh in the walls, out of reach. On one wall is a red button.\")\n       (SOUTH TO MSTAIRS IF SECRET-DOOR IS OPEN)\n       (UP TO MSTAIRS IF SECRET-DOOR IS OPEN)\n       (NORTH TO MREYE)\n       (FLAGS RLANDBIT ONBIT)\n       (GLOBAL SECRET-DOOR STAIRS)\n       (PSEUDO \"TORCH\" TORCH-PSEUDO \"TORCHE\" TORCH-PSEUDO)>",
   "referencedBy": [
    "I-MRINT",
    "DUNGEON-DOOR-F"
   ]
  },
  "MREYE": {
   "name": "MREYE",
   "file": "dungeon.zil",
   "line": 515,
   "endLine": 524,
   "desc": "Beam Room",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MREYE-ROOM",
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
     "per": "MRGO",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "NW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "NE"
    },
    {
     "to": "MR-ANTE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "BEAM"
   ],
   "source": "<ROOM MREYE\n      (IN ROOMS)\n      (DESC \"Beam Room\")\n      (LDESC \" \")\n      (NORTH PER MRGO)\n      (NW PER MRGO)\n      (NE PER MRGO)\n      (SOUTH TO MR-ANTE)\n      (ACTION MREYE-ROOM)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": [
    "LOOK-TO",
    "BEAM-STOPPED?"
   ]
  },
  "MSTAIRS": {
   "name": "MSTAIRS",
   "file": "dungeon.zil",
   "line": 526,
   "endLine": 535,
   "desc": "Engravings Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MSTAIRS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "SECRET-DOOR",
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "MR-ANTE",
     "kind": "conditional",
     "condition": "SECRET-DOOR IS OPEN",
     "else": "\"You can't go that way.\"",
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MR-ANTE",
     "kind": "conditional",
     "condition": "SECRET-DOOR IS OPEN",
     "else": "\"You can't go that way.\"",
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "DAMP-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "DEAD-END",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [
    "RUNES"
   ],
   "source": "<ROOM MSTAIRS\n      (IN ROOMS)\n      (DESC \"Engravings Room\")\n      (NORTH TO MR-ANTE IF SECRET-DOOR IS OPEN ELSE \"You can't go that way.\")\n      (DOWN TO MR-ANTE IF SECRET-DOOR IS OPEN ELSE \"You can't go that way.\")\n      (SW TO DAMP-PASSAGE)\n      (SE TO DEAD-END)\n      (FLAGS RLANDBIT)\n      (ACTION MSTAIRS-F)\n      (GLOBAL SECRET-DOOR STAIRS)>",
   "referencedBy": [
    "V-SAY"
   ]
  },
  "DEAD-END": {
   "name": "DEAD-END",
   "file": "dungeon.zil",
   "line": 537,
   "endLine": 545,
   "desc": "Dead End",
   "ldesc": "You have come to the end of two adjoining passages to the west and the\nnorthwest.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DAMP-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MSTAIRS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM DEAD-END\n      (IN ROOMS)\n      (DESC \"Dead End\")\n      (LDESC\n\"You have come to the end of two adjoining passages to the west and the\nnorthwest.\")\n      (WEST TO DAMP-PASSAGE)\n      (NW TO MSTAIRS)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "DAMP-PASSAGE": {
   "name": "DAMP-PASSAGE",
   "file": "dungeon.zil",
   "line": 547,
   "endLine": 563,
   "desc": "Damp Passage",
   "ldesc": "This is a particularly damp spot even by dungeon standards. You can see\nthe junction to the west, and two similar passages to the east and northeast.\nA wide stone channel steeply descends into the room from the south. It is\ncovered with slippery moss and lichen. The channel crosses the room, but the\nopening where it once continued north is now blocked by rubble.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MOSS",
    "RUBBLE",
    "WATER-CHANNEL"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "JUNCTION",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "DEAD-END",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MSTAIRS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The opening is blocked by tons of debris.",
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The channel is too steep and the moss too slippery.",
     "dir": "UP"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The channel is too steep and the moss too slippery.",
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM DAMP-PASSAGE\n      (IN ROOMS)\n      (DESC \"Damp Passage\")\n      (LDESC\n\"This is a particularly damp spot even by dungeon standards. You can see\nthe junction to the west, and two similar passages to the east and northeast.\nA wide stone channel steeply descends into the room from the south. It is\ncovered with slippery moss and lichen. The channel crosses the room, but the\nopening where it once continued north is now blocked by rubble.\")\n      (WEST TO JUNCTION)\n      (EAST TO DEAD-END)\n      (NE TO MSTAIRS)\n      (NORTH \"The opening is blocked by tons of debris.\")\n      (UP \"The channel is too steep and the moss too slippery.\")\n      (SOUTH \"The channel is too steep and the moss too slippery.\")\n      (FLAGS RLANDBIT)\n      (GLOBAL MOSS RUBBLE WATER-CHANNEL)>",
   "referencedBy": [
    "WATER-CHANNEL-F"
   ]
  },
  "EAST-CORRIDOR": {
   "name": "EAST-CORRIDOR",
   "file": "dungeon.zil",
   "line": 565,
   "endLine": 573,
   "desc": "East Corridor",
   "ldesc": "This is a hall with polished marble walls. It widens slightly as it turns\nwest at its northern and southern ends.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "NORTH-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SOUTH-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM EAST-CORRIDOR\n      (IN ROOMS)\n      (DESC \"East Corridor\")\n      (LDESC\n\"This is a hall with polished marble walls. It widens slightly as it turns\nwest at its northern and southern ends.\")\n      (NORTH TO NORTH-CORRIDOR)\n      (SOUTH TO SOUTH-CORRIDOR)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": []
  },
  "WEST-CORRIDOR": {
   "name": "WEST-CORRIDOR",
   "file": "dungeon.zil",
   "line": 575,
   "endLine": 583,
   "desc": "West Corridor",
   "ldesc": "This is a hall with polished marble walls. It widens slightly as it turns\neast at its northern and southern ends.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "NORTH-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SOUTH-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM WEST-CORRIDOR\n      (IN ROOMS)\n      (DESC \"West Corridor\")\n      (LDESC\n\"This is a hall with polished marble walls. It widens slightly as it turns\neast at its northern and southern ends.\")\n      (NORTH TO NORTH-CORRIDOR)\n      (SOUTH TO SOUTH-CORRIDOR)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": []
  },
  "SOUTH-CORRIDOR": {
   "name": "SOUTH-CORRIDOR",
   "file": "dungeon.zil",
   "line": 585,
   "endLine": 594,
   "desc": "South Corridor",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "SOUTH-CORRIDOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BRONZE-DOOR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "EAST-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "WEST-CORRIDOR",
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
     "per": "BRONZE-DOOR-EXIT",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BEHIND-DOOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM SOUTH-CORRIDOR\n      (IN ROOMS)\n      (DESC \"South Corridor\")\n      (EAST TO EAST-CORRIDOR)\n      (WEST TO WEST-CORRIDOR)\n      (NORTH PER BRONZE-DOOR-EXIT)\n      (SOUTH TO BEHIND-DOOR)\n      (ACTION SOUTH-CORRIDOR-F)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL BRONZE-DOOR)>",
   "referencedBy": [
    "DUNGEON-MASTER-F"
   ]
  },
  "BEHIND-DOOR": {
   "name": "BEHIND-DOOR",
   "file": "dungeon.zil",
   "line": 596,
   "endLine": 603,
   "desc": "Narrow Corridor",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "BEHIND-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DUNGEON-DOOR",
    "DUNGEON-PANEL"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "SOUTH-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "FRONT-DOOR",
     "kind": "conditional",
     "condition": "DUNGEON-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "DUNGEON-MASTER"
   ],
   "source": "<ROOM BEHIND-DOOR\n      (IN ROOMS)\n      (DESC \"Narrow Corridor\")\n      (NORTH TO SOUTH-CORRIDOR)\n      (SOUTH TO FRONT-DOOR IF DUNGEON-DOOR IS OPEN)\n      (ACTION BEHIND-DOOR-F)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL DUNGEON-DOOR DUNGEON-PANEL)>",
   "referencedBy": [
    "DUNGEON-DOOR-F"
   ]
  },
  "FRONT-DOOR": {
   "name": "FRONT-DOOR",
   "file": "dungeon.zil",
   "line": 605,
   "endLine": 616,
   "desc": "Dungeon Entrance",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "FRONT-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MASTER",
    "DUNGEON-DOOR",
    "DUNGEON-PANEL",
    "WOODEN-WALL"
   ],
   "pseudo": [],
   "otherProps": {
    "ENTER": [
     "TO",
     "BEHIND-DOOR",
     "IF",
     "DUNGEON-DOOR",
     "IS",
     "OPEN"
    ]
   },
   "exits": [
    {
     "to": "BEHIND-DOOR",
     "kind": "conditional",
     "condition": "DUNGEON-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MRGO",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "MRDE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "MRDW",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM FRONT-DOOR\n      (IN ROOMS)\n      (DESC \"Dungeon Entrance\")\n      (LDESC \" \")\n      (NORTH TO BEHIND-DOOR IF DUNGEON-DOOR IS OPEN)\n      (ENTER TO BEHIND-DOOR IF DUNGEON-DOOR IS OPEN)\n      (SOUTH PER MRGO)\n      (SE TO MRDE)\n      (SW TO MRDW)\n      (ACTION FRONT-DOOR-F)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL MASTER DUNGEON-DOOR DUNGEON-PANEL WOODEN-WALL)>",
   "referencedBy": [
    "LOOK-TO",
    "MRDF",
    "DUNGEON-DOOR-F",
    "V-SAY"
   ]
  },
  "NORTH-CORRIDOR": {
   "name": "NORTH-CORRIDOR",
   "file": "dungeon.zil",
   "line": 625,
   "endLine": 636,
   "desc": "North Corridor",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "NORTH-CORRIDOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MASTER",
    "CELL-DOOR",
    "PARAPET-OBJ",
    "FLAMING-PIT"
   ],
   "pseudo": [],
   "otherProps": {
    "ENTER": [
     "TO",
     "CELL",
     "IF",
     "CELL-DOOR",
     "IS",
     "OPEN"
    ]
   },
   "exits": [
    {
     "to": "EAST-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "WEST-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "PARAPET",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "CELL",
     "kind": "conditional",
     "condition": "CELL-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM NORTH-CORRIDOR\n      (IN ROOMS)\n      (DESC \"North Corridor\")\n      (LDESC \" \")\n      (EAST TO EAST-CORRIDOR)\n      (WEST TO WEST-CORRIDOR)\n      (NORTH TO PARAPET)\n      (SOUTH TO CELL IF CELL-DOOR IS OPEN)\n      (ENTER TO CELL IF CELL-DOOR IS OPEN)\n      (ACTION NORTH-CORRIDOR-F)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL MASTER CELL-DOOR PARAPET-OBJ FLAMING-PIT)>",
   "referencedBy": [
    "DUNGEON-MASTER-F",
    "MASTER-F",
    "FLAMING-PIT-F",
    "PARAPET-OBJ-F"
   ]
  },
  "PARAPET": {
   "name": "PARAPET",
   "file": "dungeon.zil",
   "line": 638,
   "endLine": 646,
   "desc": "Parapet",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "PARAPET-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MASTER",
    "PARAPET-OBJ",
    "FLAMING-PIT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "NORTH-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You would be burned to a crisp in no time.",
     "dir": "NORTH"
    }
   ],
   "contents": [
    "DIAL-BUTTON",
    "SUNDIAL"
   ],
   "source": "<ROOM PARAPET\n      (IN ROOMS)\n      (DESC \"Parapet\")\n      (LDESC \" \")\n      (SOUTH TO NORTH-CORRIDOR)\n      (NORTH \"You would be burned to a crisp in no time.\")\n      (ACTION PARAPET-F)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL MASTER PARAPET-OBJ FLAMING-PIT)>",
   "referencedBy": [
    "DUNGEON-MASTER-F",
    "MASTER-F",
    "CELL-ROOM",
    "FLAMING-PIT-F",
    "PARAPET-OBJ-F"
   ]
  },
  "CELL": {
   "name": "CELL",
   "file": "dungeon.zil",
   "line": 648,
   "endLine": 656,
   "desc": "Prison Cell",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CELL-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MASTER",
    "BRONZE-DOOR",
    "CELL-DOOR",
    "PARAPET-OBJ",
    "FLAMING-PIT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "NORTH-CORRIDOR",
     "kind": "conditional",
     "condition": "CELL-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "NORTH-CORRIDOR",
     "kind": "conditional",
     "condition": "CELL-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM CELL\n      (IN ROOMS)\n      (DESC \"Prison Cell\")\n      (LDESC \" \")\n      (OUT TO NORTH-CORRIDOR IF CELL-DOOR IS OPEN)\n      (NORTH TO NORTH-CORRIDOR IF CELL-DOOR IS OPEN)\n      (ACTION CELL-ROOM)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL MASTER BRONZE-DOOR CELL-DOOR PARAPET-OBJ FLAMING-PIT)>",
   "referencedBy": [
    "MASTER-F",
    "I-FOLIN",
    "MOVE-CELL-OBJECTS",
    "CELL-MOVE",
    "DIALBUTTON",
    "BRONZE-DOOR-EXIT",
    "PARAPET-OBJ-F",
    "CELL-DOOR-F"
   ]
  },
  "PRISON-CELL": {
   "name": "PRISON-CELL",
   "file": "dungeon.zil",
   "line": 658,
   "endLine": 666,
   "desc": "Prison Cell",
   "ldesc": "You are in a bare prison cell. Its wooden door is securely fastened, and\nyou can see only flames and smoke through its small window.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LOCKED-DOOR",
    "MASTER",
    "FLAMING-PIT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The door is securely fastened.",
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM PRISON-CELL\n      (IN ROOMS)\n      (DESC \"Prison Cell\")\n      (LDESC\n\"You are in a bare prison cell. Its wooden door is securely fastened, and\nyou can see only flames and smoke through its small window.\")\n      (OUT \"The door is securely fastened.\")\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL LOCKED-DOOR MASTER FLAMING-PIT)>",
   "referencedBy": [
    "MASTER-F",
    "I-FOLIN",
    "CELL-MOVE"
   ]
  },
  "GOOD-CELL": {
   "name": "GOOD-CELL",
   "file": "dungeon.zil",
   "line": 668,
   "endLine": 676,
   "desc": "Prison Cell",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "NCELL-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GOOD-LOCKED-DOOR",
    "MASTER",
    "BRONZE-DOOR",
    "FLAMING-PIT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "NIRVANA",
     "kind": "conditional",
     "condition": "BRONZE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "NIRVANA",
     "kind": "conditional",
     "condition": "BRONZE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM GOOD-CELL\n      (IN ROOMS)\n      (DESC \"Prison Cell\")\n      (LDESC \" \")\n      (OUT TO NIRVANA IF BRONZE-DOOR IS OPEN)\n      (SOUTH TO NIRVANA IF BRONZE-DOOR IS OPEN)\n      (ACTION NCELL-ROOM)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL GOOD-LOCKED-DOOR MASTER BRONZE-DOOR FLAMING-PIT)>",
   "referencedBy": [
    "MASTER-F",
    "CELL-MOVE",
    "BRONZE-DOOR-F",
    "KEY-F"
   ]
  },
  "NIRVANA": {
   "name": "NIRVANA",
   "file": "dungeon.zil",
   "line": 678,
   "endLine": 698,
   "desc": "Treasury of Zork",
   "ldesc": "This is a large room, richly appointed in a style that bespeaks exquisite\ntaste. To judge from its contents, it is the ultimate storehouse of the\nwealth of the Great Underground Empire.|\n|\nThere are chests containing precious jewels, mountains of\nzorkmids, rare paintings, ancient statuary, and beguiling curios.|\n|\nOn one wall is an annotated map of the Empire, showing the locations of\nvarious troves of treasure, and of many superior scenic views.|\n|\nOn a desk at the far end of the room are stock certificates\nrepresenting a controlling interest in FrobozzCo International, the\nmultinational conglomerate and parent company of\nthe Frobozz Magic Boat Co., etc.|\n",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "NIRVANA-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [],
   "contents": [],
   "source": "<ROOM NIRVANA\n      (IN ROOMS)\n      (DESC \"Treasury of Zork\")\n      (LDESC\n\"This is a large room, richly appointed in a style that bespeaks exquisite\ntaste. To judge from its contents, it is the ultimate storehouse of the\nwealth of the Great Underground Empire.|\n|\nThere are chests containing precious jewels, mountains of\nzorkmids, rare paintings, ancient statuary, and beguiling curios.|\n|\nOn one wall is an annotated map of the Empire, showing the locations of\nvarious troves of treasure, and of many superior scenic views.|\n|\nOn a desk at the far end of the room are stock certificates\nrepresenting a controlling interest in FrobozzCo International, the\nmultinational conglomerate and parent company of\nthe Frobozz Magic Boat Co., etc.|\n\")\n      (ACTION NIRVANA-F)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": []
  }
 },
 "objects": {
  "VOICES": {
   "name": "VOICES",
   "file": "tm.zil",
   "line": 5,
   "endLine": 11,
   "desc": "voices",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "VOICE",
    "VOICES",
    "GUARDS",
    "OFFICI"
   ],
   "adjectives": [
    "ARMED"
   ],
   "action": "VOICES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT VOICES\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"voices\")\n\t(SYNONYM VOICE VOICES GUARDS OFFICI)\n\t(ADJECTIVE ARMED)\n\t(FLAGS NDESCBIT)\n\t(ACTION VOICES-F)>",
   "referencedBy": [
    "WOODEN-DOOR-F"
   ]
  },
  "CRYSTALS": {
   "name": "CRYSTALS",
   "file": "tm.zil",
   "line": 36,
   "endLine": 40,
   "desc": "rock structure",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROCKY-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "CRYSTAL",
    "STALAG"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CRYSTALS\n\t(IN ROCKY-ROOM)\n\t(DESC \"rock structure\")\n\t(SYNONYM CRYSTAL STALAG)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "ROYAL-SEAL": {
   "name": "ROYAL-SEAL",
   "file": "tm.zil",
   "line": 54,
   "endLine": 63,
   "desc": "Royal Seal of Dimwit Flathead",
   "ldesc": null,
   "fdesc": null,
   "loc": "WIDE-HALL",
   "flags": [
    "NDESCBIT",
    "READBIT"
   ],
   "synonyms": [
    "SEAL",
    "CARVIN",
    "RENDER"
   ],
   "adjectives": [
    "LARGE",
    "ROYAL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The Seal is vintage Flathead, with signs of excess nearly everywhere.\nIt shows a curiously flat-headed figure wearing a gaudy crown,\nsurrounded by the Crown Jewels of the Empire."
    ]
   },
   "contents": [],
   "source": "<OBJECT ROYAL-SEAL\n\t(IN WIDE-HALL)\n\t(DESC \"Royal Seal of Dimwit Flathead\")\n\t(SYNONYM SEAL CARVIN RENDER)\n\t(ADJECTIVE LARGE ROYAL)\n\t(FLAGS NDESCBIT READBIT)\n\t(TEXT\n\"The Seal is vintage Flathead, with signs of excess nearly everywhere.\nIt shows a curiously flat-headed figure wearing a gaudy crown,\nsurrounded by the Crown Jewels of the Empire.\")> ",
   "referencedBy": []
  },
  "CLEFT": {
   "name": "CLEFT",
   "file": "tm.zil",
   "line": 87,
   "endLine": 92,
   "desc": "cleft",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "OPENBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "CLEFT"
   ],
   "adjectives": [],
   "action": "CLEFT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CLEFT\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"cleft\")\n\t(SYNONYM CLEFT)\n\t(ACTION CLEFT-F)\n\t(FLAGS DOORBIT OPENBIT INVISIBLE)>",
   "referencedBy": [
    "I-CLEFT"
   ]
  },
  "TIME-MACHINE": {
   "name": "TIME-MACHINE",
   "file": "tm.zil",
   "line": 191,
   "endLine": 199,
   "desc": "gold machine",
   "ldesc": null,
   "fdesc": null,
   "loc": "TECH-MUSEUM",
   "flags": [
    "VEHBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "MACHINE",
    "TEMPORIZER"
   ],
   "adjectives": [
    "TIME",
    "GOLD",
    "GOLDEN"
   ],
   "action": "TIME-MACHINE-F",
   "descfcn": "TIME-MACHINE-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "100"
    ]
   },
   "contents": [
    "TM-BUTTON",
    "TM-HOLLOW",
    "TM-SEAT",
    "TM-DIAL"
   ],
   "source": "<OBJECT TIME-MACHINE\n\t(IN TECH-MUSEUM)\n\t(DESC \"gold machine\")\n\t(SYNONYM MACHINE TEMPORIZER)\n\t(ADJECTIVE TIME GOLD GOLDEN)\n\t(FLAGS VEHBIT OPENBIT CONTBIT)\n\t(CAPACITY 100)\n\t(DESCFCN TIME-MACHINE-F)\n\t(ACTION TIME-MACHINE-F)>",
   "referencedBy": [
    "TIME-MACHINE-F",
    "TM-SEAT-F",
    "TM-BUTTON-F",
    "TGOTO",
    "MOVE-TM-OBJECTS",
    "JEWEL-ROOM-F"
   ]
  },
  "PRESSURIZER": {
   "name": "PRESSURIZER",
   "file": "tm.zil",
   "line": 201,
   "endLine": 207,
   "desc": "grey machine",
   "ldesc": null,
   "fdesc": null,
   "loc": "TECH-MUSEUM",
   "flags": [],
   "synonyms": [
    "MACHINE",
    "DRYER",
    "PRESSURIZER"
   ],
   "adjectives": [
    "GRAY",
    "GREY",
    "WASHING"
   ],
   "action": "MUSEUM-PIECES",
   "descfcn": "MUSEUM-PIECES",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PRESSURIZER\n\t(IN TECH-MUSEUM)\n\t(DESC \"grey machine\")\n\t(SYNONYM MACHINE DRYER PRESSURIZER)\n\t(ADJECTIVE GRAY GREY WASHING)\n\t(ACTION MUSEUM-PIECES)\n\t(DESCFCN MUSEUM-PIECES)>",
   "referencedBy": [
    "TGOTO",
    "MUSEUM-PIECES"
   ]
  },
  "SPINNER": {
   "name": "SPINNER",
   "file": "tm.zil",
   "line": 209,
   "endLine": 215,
   "desc": "black machine",
   "ldesc": null,
   "fdesc": null,
   "loc": "TECH-MUSEUM",
   "flags": [],
   "synonyms": [
    "MACHINE",
    "PIPES",
    "WIRES",
    "MOTORS"
   ],
   "adjectives": [
    "BLACK"
   ],
   "action": "MUSEUM-PIECES",
   "descfcn": "MUSEUM-PIECES",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SPINNER\n\t(IN TECH-MUSEUM)\n\t(DESC \"black machine\")\n\t(SYNONYM MACHINE PIPES WIRES MOTORS)\n\t(ADJECTIVE BLACK)\n\t(DESCFCN MUSEUM-PIECES)\n\t(ACTION MUSEUM-PIECES)>",
   "referencedBy": [
    "TGOTO",
    "MUSEUM-PIECES"
   ]
  },
  "TM-BUTTON": {
   "name": "TM-BUTTON",
   "file": "tm.zil",
   "line": 217,
   "endLine": 222,
   "desc": "button",
   "ldesc": null,
   "fdesc": null,
   "loc": "TIME-MACHINE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [],
   "action": "TM-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TM-BUTTON\n\t(IN TIME-MACHINE)\n\t(DESC \"button\")\n\t(SYNONYM BUTTON)\n\t(FLAGS NDESCBIT)\n\t(ACTION TM-BUTTON-F)>",
   "referencedBy": [
    "MOVE-TM-OBJECTS"
   ]
  },
  "TM-HOLLOW": {
   "name": "TM-HOLLOW",
   "file": "3actions.zil",
   "line": 2302,
   "endLine": 2309,
   "desc": "seat",
   "ldesc": null,
   "fdesc": null,
   "loc": "TIME-MACHINE",
   "flags": [
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "AREA"
   ],
   "adjectives": [
    "SMALL",
    "HOLLOW"
   ],
   "action": "TM-HOLLOW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "20"
    ]
   },
   "contents": [],
   "source": "<OBJECT TM-HOLLOW\n\t(IN TIME-MACHINE)\n\t(DESC \"seat\")\n\t(SYNONYM AREA)\n\t(ADJECTIVE SMALL HOLLOW)\n\t(FLAGS NDESCBIT OPENBIT CONTBIT)\n\t(CAPACITY 20)\n\t(ACTION TM-HOLLOW-F)>",
   "referencedBy": [
    "TM-HOLLOW-F"
   ]
  },
  "TM-SEAT": {
   "name": "TM-SEAT",
   "file": "tm.zil",
   "line": 224,
   "endLine": 230,
   "desc": "seat",
   "ldesc": null,
   "fdesc": null,
   "loc": "TIME-MACHINE",
   "flags": [
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT",
    "SURFACEBIT",
    "VEHBIT"
   ],
   "synonyms": [
    "SEAT",
    "CHAIR"
   ],
   "adjectives": [],
   "action": "TM-SEAT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "20"
    ]
   },
   "contents": [],
   "source": "<OBJECT TM-SEAT\n\t(IN TIME-MACHINE)\n\t(DESC \"seat\")\n\t(SYNONYM SEAT CHAIR)\n\t(FLAGS NDESCBIT OPENBIT CONTBIT SURFACEBIT VEHBIT)\n\t(CAPACITY 20)\n\t(ACTION TM-SEAT-F)>",
   "referencedBy": [
    "TM-HOLLOW-F",
    "TIME-MACHINE-F",
    "TM-SEAT-F",
    "MOVE-TM-OBJECTS"
   ]
  },
  "TM-DIAL": {
   "name": "TM-DIAL",
   "file": "tm.zil",
   "line": 232,
   "endLine": 237,
   "desc": "dial",
   "ldesc": null,
   "fdesc": null,
   "loc": "TIME-MACHINE",
   "flags": [
    "NDESCBIT",
    "TURNBIT"
   ],
   "synonyms": [
    "DIAL",
    "CONSOLE",
    "DISPLAY"
   ],
   "adjectives": [],
   "action": "TM-DIAL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TM-DIAL\n\t(IN TIME-MACHINE)\n\t(DESC \"dial\")\n\t(SYNONYM DIAL CONSOLE DISPLAY)\n\t(FLAGS NDESCBIT TURNBIT)\n\t(ACTION TM-DIAL-F)>",
   "referencedBy": [
    "MOVE-TM-OBJECTS"
   ]
  },
  "IRON-DOOR": {
   "name": "IRON-DOOR",
   "file": "tm.zil",
   "line": 239,
   "endLine": 245,
   "desc": "iron door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "IRON"
   ],
   "action": "IRON-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT IRON-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"iron door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE IRON)\n\t(FLAGS DOORBIT CONTBIT)\n\t(ACTION IRON-DOOR-F)>",
   "referencedBy": [
    "TGOTO"
   ]
  },
  "JEWEL-DOOR": {
   "name": "JEWEL-DOOR",
   "file": "tm.zil",
   "line": 247,
   "endLine": 253,
   "desc": "stone door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "STONE",
    "EAST"
   ],
   "action": "JEWEL-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT JEWEL-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"stone door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE STONE EAST)\n\t(ACTION JEWEL-DOOR-F)\n\t(FLAGS DOORBIT CONTBIT)>",
   "referencedBy": [
    "TGOTO",
    "OLD-TECH-MUSEUM-F",
    "JEWEL-ROOM-F",
    "JEWEL-DOOR-F"
   ]
  },
  "WOODEN-DOOR": {
   "name": "WOODEN-DOOR",
   "file": "tm.zil",
   "line": 255,
   "endLine": 261,
   "desc": "wooden door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "WOODEN",
    "WOOD",
    "NORTH"
   ],
   "action": "WOODEN-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WOODEN-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"wooden door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE WOODEN WOOD NORTH)\n\t(FLAGS DOORBIT CONTBIT OPENBIT)\n\t(ACTION WOODEN-DOOR-F)>",
   "referencedBy": [
    "MUSEUM-ENTRANCE-F",
    "TGOTO",
    "OLD-TECH-MUSEUM-F",
    "JEWEL-ROOM-F",
    "TECH-MUSEUM-F",
    "JEWEL-DOOR-F"
   ]
  },
  "SCEPTRE": {
   "name": "SCEPTRE",
   "file": "tm.zil",
   "line": 263,
   "endLine": 270,
   "desc": "sceptre",
   "ldesc": null,
   "fdesc": null,
   "loc": "PEDESTAL",
   "flags": [
    "TAKEBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "SCEPTRE",
    "JEWELS"
   ],
   "adjectives": [
    "CROWN"
   ],
   "action": "CROWN-JEWELS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "30"
    ]
   },
   "contents": [],
   "source": "<OBJECT SCEPTRE\n\t(IN PEDESTAL)\n\t(DESC \"sceptre\")\n\t(SYNONYM SCEPTRE JEWELS)\n\t(ADJECTIVE CROWN)\n\t(FLAGS TAKEBIT NDESCBIT)\n\t(SIZE 30)\n\t(ACTION CROWN-JEWELS-F)>",
   "referencedBy": [
    "MOVE-JEWELS",
    "TGOTO",
    "OLD-TECH-MUSEUM-F"
   ]
  },
  "JEWELLED-KNIFE": {
   "name": "JEWELLED-KNIFE",
   "file": "tm.zil",
   "line": 272,
   "endLine": 279,
   "desc": "jewelled knife",
   "ldesc": null,
   "fdesc": null,
   "loc": "PEDESTAL",
   "flags": [
    "TAKEBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "KNIFE",
    "JEWELS"
   ],
   "adjectives": [
    "JEWELLED",
    "CROWN"
   ],
   "action": "CROWN-JEWELS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "20"
    ]
   },
   "contents": [],
   "source": "<OBJECT JEWELLED-KNIFE\n\t(IN PEDESTAL)\n\t(DESC \"jewelled knife\")\n\t(SYNONYM KNIFE JEWELS)\n\t(ADJECTIVE JEWELLED CROWN)\n\t(FLAGS TAKEBIT NDESCBIT)\n\t(SIZE 20)\n\t(ACTION CROWN-JEWELS-F)>",
   "referencedBy": [
    "MOVE-JEWELS",
    "TGOTO",
    "OLD-TECH-MUSEUM-F"
   ]
  },
  "RING": {
   "name": "RING",
   "file": "tm.zil",
   "line": 281,
   "endLine": 288,
   "desc": "golden ring",
   "ldesc": null,
   "fdesc": null,
   "loc": "PEDESTAL",
   "flags": [
    "TAKEBIT",
    "NDESCBIT",
    "WEARBIT"
   ],
   "synonyms": [
    "RING",
    "JEWELS"
   ],
   "adjectives": [
    "GOLDEN",
    "CROWN"
   ],
   "action": "CROWN-JEWELS-F",
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
   "source": "<OBJECT RING\n\t(IN PEDESTAL)\n\t(DESC \"golden ring\")\n\t(SYNONYM RING JEWELS)\n\t(ADJECTIVE GOLDEN CROWN)\n\t(FLAGS TAKEBIT NDESCBIT WEARBIT)\n\t(SIZE 5)\n\t(ACTION CROWN-JEWELS-F)>",
   "referencedBy": [
    "LOOK-LIKE-DM?",
    "DMISH",
    "TM-SEAT-F",
    "MOVE-JEWELS",
    "TGOTO",
    "OLD-TECH-MUSEUM-F"
   ]
  },
  "PEDESTAL": {
   "name": "PEDESTAL",
   "file": "tm.zil",
   "line": 290,
   "endLine": 296,
   "desc": "pedestal",
   "ldesc": null,
   "fdesc": null,
   "loc": "JEWEL-ROOM",
   "flags": [
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT",
    "SURFACEBIT"
   ],
   "synonyms": [
    "PEDESTAL"
   ],
   "adjectives": [],
   "action": "PEDESTAL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "50"
    ]
   },
   "contents": [
    "SCEPTRE",
    "JEWELLED-KNIFE",
    "RING"
   ],
   "source": "<OBJECT PEDESTAL\n\t(IN JEWEL-ROOM)\n\t(DESC \"pedestal\")\n\t(SYNONYM PEDESTAL)\n\t(FLAGS NDESCBIT OPENBIT CONTBIT SURFACEBIT)\n\t(CAPACITY 50)\n\t(ACTION PEDESTAL-F)>",
   "referencedBy": [
    "MOVE-JEWELS",
    "TGOTO",
    "OLD-TECH-MUSEUM-F",
    "CROWN-JEWELS-F",
    "PEDESTAL-F"
   ]
  },
  "CAGE": {
   "name": "CAGE",
   "file": "tm.zil",
   "line": 298,
   "endLine": 305,
   "desc": "steel cage",
   "ldesc": null,
   "fdesc": null,
   "loc": "JEWEL-ROOM",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT",
    "SURFACEBIT"
   ],
   "synonyms": [
    "CAGE"
   ],
   "adjectives": [
    "STEEL"
   ],
   "action": "CAGE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "5"
    ]
   },
   "contents": [
    "PLAQUE"
   ],
   "source": "<OBJECT CAGE\n\t(IN JEWEL-ROOM)\n\t(DESC \"steel cage\")\n\t(SYNONYM CAGE)\n\t(ADJECTIVE STEEL)\n\t(FLAGS NDESCBIT CONTBIT OPENBIT SURFACEBIT)\n\t(CAPACITY 5)\n\t(ACTION CAGE-F)>",
   "referencedBy": [
    "MUSEUM-ENTRANCE-F",
    "TGOTO",
    "JEWEL-ROOM-F",
    "CROWN-JEWELS-F",
    "TECH-MUSEUM-F",
    "PEDESTAL-F"
   ]
  },
  "TECH-PLAQUE": {
   "name": "TECH-PLAQUE",
   "file": "tm.zil",
   "line": 307,
   "endLine": 312,
   "desc": "plaque",
   "ldesc": null,
   "fdesc": null,
   "loc": "TECH-MUSEUM",
   "flags": [
    "NDESCBIT",
    "READBIT"
   ],
   "synonyms": [
    "PLAQUE",
    "TEXT"
   ],
   "adjectives": [],
   "action": "TECH-PLAQUE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TECH-PLAQUE\n\t(IN TECH-MUSEUM)\n\t(DESC \"plaque\")\n\t(SYNONYM PLAQUE TEXT)\n\t(FLAGS NDESCBIT READBIT)\n\t(ACTION TECH-PLAQUE-F)>",
   "referencedBy": [
    "TGOTO"
   ]
  },
  "PLAQUE": {
   "name": "PLAQUE",
   "file": "tm.zil",
   "line": 314,
   "endLine": 320,
   "desc": "bronze plaque",
   "ldesc": null,
   "fdesc": null,
   "loc": "CAGE",
   "flags": [
    "NDESCBIT",
    "READBIT"
   ],
   "synonyms": [
    "PLAQUE",
    "TEXT"
   ],
   "adjectives": [
    "BRONZE"
   ],
   "action": "PLAQUE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PLAQUE\n\t(IN CAGE)\n\t(DESC \"bronze plaque\")\n\t(SYNONYM PLAQUE TEXT)\n\t(ADJECTIVE BRONZE)\n\t(FLAGS NDESCBIT READBIT)\n\t(ACTION PLAQUE-F)>",
   "referencedBy": []
  },
  "ROBOT": {
   "name": "ROBOT",
   "file": "tm.zil",
   "line": 856,
   "endLine": 860,
   "desc": "robot",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "ROBOT",
    "DEVICE"
   ],
   "adjectives": [],
   "action": "ROBOT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ROBOT\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"robot\")\n\t(SYNONYM ROBOT DEVICE)\n\t(ACTION ROBOT-F)>",
   "referencedBy": []
  },
  "SHADOW": {
   "name": "SHADOW",
   "file": "shadow.zil",
   "line": 191,
   "endLine": 197,
   "desc": "hooded figure",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "ACTORBIT",
    "TRANSBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "SHADOW",
    "FIGURE",
    "MAN",
    "WOMAN"
   ],
   "adjectives": [
    "HOODED",
    "CLOAKED"
   ],
   "action": "SHADOW-F",
   "descfcn": "SHADOW-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "HOOD",
    "CLOAK"
   ],
   "source": "<OBJECT SHADOW\n\t(DESC \"hooded figure\")\n\t(SYNONYM SHADOW FIGURE MAN WOMAN)\n\t(ADJECTIVE HOODED CLOAKED)\n\t(FLAGS ACTORBIT TRANSBIT CONTBIT OPENBIT)\n\t(ACTION SHADOW-F)\n\t(DESCFCN SHADOW-F)>",
   "referencedBy": [
    "SHADOW-F",
    "I-SHADOW-REPLY",
    "SHADOW-DIES",
    "HOOD-F",
    "CLOAK-F",
    "SHADOW-ROOMS",
    "SHADOW-ARRIVAL"
   ]
  },
  "HOOD": {
   "name": "HOOD",
   "file": "shadow.zil",
   "line": 199,
   "endLine": 204,
   "desc": "hood",
   "ldesc": null,
   "fdesc": null,
   "loc": "SHADOW",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT",
    "TAKEBIT",
    "WEARBIT"
   ],
   "synonyms": [
    "HOOD"
   ],
   "adjectives": [],
   "action": "HOOD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HOOD\n\t(IN SHADOW)\n\t(DESC \"hood\")\n\t(SYNONYM HOOD)\n\t(FLAGS NDESCBIT TRYTAKEBIT TAKEBIT WEARBIT)\n\t(ACTION HOOD-F)>",
   "referencedBy": [
    "LOOK-LIKE-DM?",
    "DMISH",
    "HOOD-F"
   ]
  },
  "CLOAK": {
   "name": "CLOAK",
   "file": "shadow.zil",
   "line": 206,
   "endLine": 211,
   "desc": "cloak",
   "ldesc": null,
   "fdesc": null,
   "loc": "SHADOW",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT",
    "TAKEBIT",
    "WEARBIT"
   ],
   "synonyms": [
    "CLOAK"
   ],
   "adjectives": [],
   "action": "CLOAK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CLOAK\n\t(IN SHADOW)\n\t(DESC \"cloak\")\n\t(SYNONYM CLOAK)\n\t(FLAGS NDESCBIT TRYTAKEBIT TAKEBIT WEARBIT)\n\t(ACTION CLOAK-F)>",
   "referencedBy": [
    "LOOK-LIKE-DM?",
    "DMISH",
    "HOOD-F",
    "CLOAK-F"
   ]
  },
  "REEDS": {
   "name": "REEDS",
   "file": "shadow.zil",
   "line": 674,
   "endLine": 679,
   "desc": "reeds",
   "ldesc": null,
   "fdesc": null,
   "loc": "FAR-SHORE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "REEDS"
   ],
   "adjectives": [
    "SICKLY"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT REEDS\n      (IN FAR-SHORE)\n      (SYNONYM REEDS)\n      (ADJECTIVE SICKLY)\n      (DESC \"reeds\")\n      (FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "VIEWING-TABLE": {
   "name": "VIEWING-TABLE",
   "file": "shadow.zil",
   "line": 689,
   "endLine": 695,
   "desc": "viewing table",
   "ldesc": null,
   "fdesc": null,
   "loc": "VIEW-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "TABLE",
    "SURFACE"
   ],
   "adjectives": [
    "VIEWING"
   ],
   "action": "VIEWING-TABLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT VIEWING-TABLE\n\t(IN VIEW-ROOM)\n\t(DESC \"viewing table\")\n\t(SYNONYM TABLE SURFACE)\n\t(ADJECTIVE VIEWING)\n\t(FLAGS NDESCBIT)\n\t(ACTION VIEWING-TABLE-F)>",
   "referencedBy": []
  },
  "TORCH": {
   "name": "TORCH",
   "file": "shadow.zil",
   "line": 697,
   "endLine": 705,
   "desc": "torch",
   "ldesc": null,
   "fdesc": "Mounted on one wall is a flaming torch, which fills the room with a flickering\nlight.",
   "loc": "VIEW-ROOM",
   "flags": [
    "LIGHTBIT",
    "TAKEBIT",
    "ONBIT",
    "FLAMEBIT"
   ],
   "synonyms": [
    "TORCH"
   ],
   "adjectives": [],
   "action": "TORCH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TORCH\n\t(IN VIEW-ROOM)\n\t(DESC \"torch\")\n\t(FDESC\n\"Mounted on one wall is a flaming torch, which fills the room with a flickering\nlight.\")\n\t(SYNONYM TORCH)\n\t(FLAGS LIGHTBIT TAKEBIT ONBIT FLAMEBIT)\n\t(ACTION TORCH-F)>",
   "referencedBy": [
    "STAFF-F",
    "CHEST-F",
    "GO-ON-LAKE",
    "TORCH-F"
   ]
  },
  "FRIED-TORCH": {
   "name": "FRIED-TORCH",
   "file": "shadow.zil",
   "line": 707,
   "endLine": 712,
   "desc": "burned-out torch",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "TORCH"
   ],
   "adjectives": [
    "BURNED",
    "DEAD"
   ],
   "action": "FRIED-TORCH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FRIED-TORCH\n\t(DESC \"burned-out torch\")\n\t(SYNONYM TORCH)\n\t(ADJECTIVE BURNED DEAD)\n\t(FLAGS TAKEBIT)\n\t(ACTION FRIED-TORCH-F)>",
   "referencedBy": [
    "GO-ON-LAKE"
   ]
  },
  "CLIFF-OBJECT": {
   "name": "CLIFF-OBJECT",
   "file": "shadow.zil",
   "line": 714,
   "endLine": 718,
   "desc": "cliff",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "CLIFF"
   ],
   "adjectives": [],
   "action": "CLIFF-OBJECT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CLIFF-OBJECT\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"cliff\")\n\t(SYNONYM CLIFF)\n\t(ACTION CLIFF-OBJECT-F)>",
   "referencedBy": [
    "CLIFF-OBJECT-F"
   ]
  },
  "STONE-WALL": {
   "name": "STONE-WALL",
   "file": "shadow.zil",
   "line": 720,
   "endLine": 725,
   "desc": "stone wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WALL"
   ],
   "adjectives": [
    "STONE",
    "MASSIVE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT STONE-WALL\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"stone wall\")\n\t(SYNONYM WALL)\n\t(ADJECTIVE STONE MASSIVE)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "LAKE": {
   "name": "LAKE",
   "file": "shadow.zil",
   "line": 727,
   "endLine": 731,
   "desc": "lake",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "LAKE",
    "WATER",
    "SURFACE"
   ],
   "adjectives": [],
   "action": "LAKE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LAKE\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"lake\")\n\t(SYNONYM LAKE WATER SURFACE)\n\t(ACTION LAKE-F)>",
   "referencedBy": []
  },
  "AMULET": {
   "name": "AMULET",
   "file": "shadow.zil",
   "line": 733,
   "endLine": 737,
   "desc": "golden amulet",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "WEARBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "AMULET",
    "OBJECT"
   ],
   "adjectives": [
    "GOLD",
    "GOLDEN",
    "SHINY"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT AMULET\n\t(DESC \"golden amulet\")\n\t(SYNONYM AMULET OBJECT)\n\t(ADJECTIVE GOLD GOLDEN SHINY)\n\t(FLAGS TAKEBIT WEARBIT NDESCBIT)>",
   "referencedBy": [
    "LOOK-LIKE-DM?",
    "DMISH",
    "SHINY-OBJECT-F"
   ]
  },
  "SAND": {
   "name": "SAND",
   "file": "shadow.zil",
   "line": 739,
   "endLine": 744,
   "desc": "sand",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-LAKE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "SAND",
    "FLOOR",
    "BOTTOM"
   ],
   "adjectives": [],
   "action": "SAND-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SAND\n\t(IN IN-LAKE)\n\t(DESC \"sand\")\n\t(SYNONYM SAND FLOOR BOTTOM)\n\t(FLAGS NDESCBIT)\n\t(ACTION SAND-F)>",
   "referencedBy": []
  },
  "FRIED-LAMP": {
   "name": "FRIED-LAMP",
   "file": "shadow.zil",
   "line": 746,
   "endLine": 752,
   "desc": "lamp",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "LAMP",
    "LANTERN"
   ],
   "adjectives": [
    "BRASS"
   ],
   "action": "FRIED-LAMP-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT FRIED-LAMP\n\t(DESC \"lamp\")\n\t(SYNONYM LAMP LANTERN)\n\t(ADJECTIVE BRASS)\n\t(FLAGS TAKEBIT)\n\t(SIZE 10)\n\t(ACTION FRIED-LAMP-F)>",
   "referencedBy": [
    "GO-ON-LAKE"
   ]
  },
  "ALGAE": {
   "name": "ALGAE",
   "file": "shadow.zil",
   "line": 754,
   "endLine": 759,
   "desc": "plants and algae",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-LAKE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PLANT",
    "PLANTS",
    "ALGAE"
   ],
   "adjectives": [],
   "action": "ALGAE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ALGAE\n\t(IN IN-LAKE)\n\t(DESC \"plants and algae\")\n\t(SYNONYM PLANT PLANTS ALGAE)\n\t(FLAGS NDESCBIT)\n\t(ACTION ALGAE-F)>",
   "referencedBy": []
  },
  "SHINY-OBJECT": {
   "name": "SHINY-OBJECT",
   "file": "shadow.zil",
   "line": 761,
   "endLine": 767,
   "desc": "shiny object",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-LAKE",
   "flags": [
    "TRYTAKEBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "OBJECT",
    "AMULET"
   ],
   "adjectives": [
    "SHINY"
   ],
   "action": "SHINY-OBJECT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SHINY-OBJECT\n\t(IN IN-LAKE)\n\t(DESC \"shiny object\")\n\t(SYNONYM OBJECT AMULET)\n\t(ADJECTIVE SHINY)\n\t(FLAGS TRYTAKEBIT NDESCBIT)\n\t(ACTION SHINY-OBJECT-F)>",
   "referencedBy": [
    "IN-LAKE-F",
    "SHINY-OBJECT-F"
   ]
  },
  "LEDGE": {
   "name": "LEDGE",
   "file": "shadow.zil",
   "line": 769,
   "endLine": 775,
   "desc": "ledge",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "LEDGE"
   ],
   "adjectives": [
    "WIDE"
   ],
   "action": "LEDGE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LEDGE\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"ledge\")\n\t(SYNONYM LEDGE)\n\t(ADJECTIVE WIDE)\n\t(FLAGS NDESCBIT)\n\t(ACTION LEDGE-F)>",
   "referencedBy": [
    "LEDGE-F"
   ]
  },
  "WAYBREAD": {
   "name": "WAYBREAD",
   "file": "shadow.zil",
   "line": 788,
   "endLine": 799,
   "desc": "piece of waybread",
   "ldesc": "A piece of bread is on the ground here.",
   "fdesc": "It seems as if somebody has been here recently, as there is some fresh\nbread lying beneath one of the other trees.",
   "loc": "CLIFF",
   "flags": [
    "TAKEBIT",
    "FOODBIT"
   ],
   "synonyms": [
    "BREAD",
    "WAYBREAD",
    "PIECE"
   ],
   "adjectives": [
    "WAY",
    "FRESH"
   ],
   "action": "WAYBREAD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ]
   },
   "contents": [],
   "source": "<OBJECT WAYBREAD\n\t(IN CLIFF)\n\t(DESC \"piece of waybread\")\n\t(LDESC \"A piece of bread is on the ground here.\")\n\t(FDESC\n\"It seems as if somebody has been here recently, as there is some fresh\nbread lying beneath one of the other trees.\")\n\t(SYNONYM BREAD WAYBREAD PIECE)\n\t(ADJECTIVE WAY FRESH)\n\t(FLAGS TAKEBIT FOODBIT)\n\t(SIZE 3)\n\t(ACTION WAYBREAD-F)>",
   "referencedBy": [
    "OLD-MAN-F",
    "WAYBREAD-F",
    "GO-ON-LAKE"
   ]
  },
  "ROPE": {
   "name": "ROPE",
   "file": "shadow.zil",
   "line": 808,
   "endLine": 814,
   "desc": "rope",
   "ldesc": null,
   "fdesc": null,
   "loc": "CLIFF",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "ROPE"
   ],
   "adjectives": [
    "LONG"
   ],
   "action": "ROPE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ROPE\n\t(IN CLIFF)\n\t(DESC \"rope\")\n\t(SYNONYM ROPE)\n\t(ADJECTIVE LONG)\n\t(FLAGS NDESCBIT TRYTAKEBIT)\n\t(ACTION ROPE-F)>",
   "referencedBy": [
    "CHEST-F",
    "CLIFF-OBJECT-F",
    "V-CLIMB-FOO"
   ]
  },
  "GLOBAL-ROPE": {
   "name": "GLOBAL-ROPE",
   "file": "shadow.zil",
   "line": 816,
   "endLine": 821,
   "desc": "rope",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "ROPE"
   ],
   "adjectives": [
    "DANGLING"
   ],
   "action": "GLOBAL-ROPE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-ROPE\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"rope\")\n\t(SYNONYM ROPE)\n\t(ADJECTIVE DANGLING)\n\t(ACTION GLOBAL-ROPE-F)>",
   "referencedBy": [
    "V-CLIMB-FOO"
   ]
  },
  "TREE": {
   "name": "TREE",
   "file": "shadow.zil",
   "line": 823,
   "endLine": 829,
   "desc": "tree",
   "ldesc": null,
   "fdesc": null,
   "loc": "CLIFF",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "TREE",
    "TREES"
   ],
   "adjectives": [
    "LARGE",
    "TALL"
   ],
   "action": "TREE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TREE\n\t(IN CLIFF)\n\t(DESC \"tree\")\n\t(SYNONYM TREE TREES)\n\t(ADJECTIVE LARGE TALL)\n\t(FLAGS NDESCBIT)\n\t(ACTION TREE-F)>",
   "referencedBy": []
  },
  "STAFF": {
   "name": "STAFF",
   "file": "shadow.zil",
   "line": 831,
   "endLine": 837,
   "desc": "wooden staff",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "STAFF"
   ],
   "adjectives": [
    "WOODEN"
   ],
   "action": "STAFF-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT STAFF\n\t(DESC \"wooden staff\")\n\t(SYNONYM STAFF)\n\t(ADJECTIVE WOODEN)\n\t(FLAGS TAKEBIT)\n\t(SIZE 10)\n\t(ACTION STAFF-F)>",
   "referencedBy": [
    "LOOK-LIKE-DM?",
    "DMISH",
    "I-MAN-LIFT",
    "CHEST-F",
    "MAN-F",
    "CLIFF-OBJECT-F"
   ]
  },
  "BROKEN-STAFF": {
   "name": "BROKEN-STAFF",
   "file": "shadow.zil",
   "line": 839,
   "endLine": 845,
   "desc": "broken staff",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "STAFF"
   ],
   "adjectives": [
    "BROKEN"
   ],
   "action": "STAFF-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT BROKEN-STAFF\n\t(DESC \"broken staff\")\n\t(SYNONYM STAFF)\n\t(ADJECTIVE BROKEN)\n\t(FLAGS TAKEBIT)\n\t(SIZE 10)\n\t(ACTION STAFF-F)>",
   "referencedBy": [
    "MAN-F",
    "CLIFF-OBJECT-F"
   ]
  },
  "CHEST": {
   "name": "CHEST",
   "file": "shadow.zil",
   "line": 853,
   "endLine": 863,
   "desc": "chest",
   "ldesc": null,
   "fdesc": "A large chest, closed and locked, is lying among the boulders.",
   "loc": "CLIFF-LEDGE",
   "flags": [
    "TAKEBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "CHEST"
   ],
   "adjectives": [
    "LOCKED"
   ],
   "action": "CHEST-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "40"
    ],
    "CAPACITY": [
     "20"
    ]
   },
   "contents": [],
   "source": "<OBJECT CHEST\n\t(IN CLIFF-LEDGE)\n\t(DESC \"chest\")\n\t(FDESC\n\"A large chest, closed and locked, is lying among the boulders.\")\n\t(SYNONYM CHEST)\n\t(ADJECTIVE LOCKED)\n\t(FLAGS TAKEBIT CONTBIT)\n\t(SIZE 40)\n\t(CAPACITY 20)\n\t(ACTION CHEST-F)>",
   "referencedBy": [
    "I-MAN-APPEARS",
    "I-MAN-PRESENT",
    "CLIFF-LEDGE-F",
    "CLIFF-F",
    "GLOBAL-ROPE-F",
    "I-MAN-LIFT",
    "KEY-F"
   ]
  },
  "GLOBAL-MAN": {
   "name": "GLOBAL-MAN",
   "file": "shadow.zil",
   "line": 865,
   "endLine": 870,
   "desc": "man",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "ACTORBIT"
   ],
   "synonyms": [
    "MAN",
    "FRIEND"
   ],
   "adjectives": [],
   "action": "GLOBAL-MAN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-MAN\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"man\")\n\t(SYNONYM MAN FRIEND)\n\t(FLAGS ACTORBIT)\n\t(ACTION GLOBAL-MAN-F)>",
   "referencedBy": [
    "GLOBAL-MAN-F"
   ]
  },
  "VALUABLES": {
   "name": "VALUABLES",
   "file": "shadow.zil",
   "line": 872,
   "endLine": 878,
   "desc": "pile of assorted valuables",
   "ldesc": null,
   "fdesc": null,
   "loc": "MAN",
   "flags": [
    "NDESCBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "VALUABLES",
    "TREASURE",
    "PILE"
   ],
   "adjectives": [
    "ASSORTED"
   ],
   "action": "VALUABLES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT VALUABLES\n\t(IN MAN)\n\t(DESC \"pile of assorted valuables\")\n       \t(SYNONYM VALUABLES TREASURE PILE)\n\t(ADJECTIVE ASSORTED)\n\t(FLAGS NDESCBIT TAKEBIT)\n\t(ACTION VALUABLES-F)>",
   "referencedBy": [
    "MAN-F"
   ]
  },
  "MAN": {
   "name": "MAN",
   "file": "shadow.zil",
   "line": 880,
   "endLine": 884,
   "desc": "man",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "ACTORBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "MAN",
    "FRIEND"
   ],
   "adjectives": [],
   "action": "MAN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "VALUABLES"
   ],
   "source": "<OBJECT MAN\n\t(SYNONYM MAN FRIEND)\n\t(DESC \"man\")\n\t(FLAGS ACTORBIT OPENBIT CONTBIT)\n\t(ACTION MAN-F)>",
   "referencedBy": [
    "I-MAN-APPEARS",
    "I-MAN-PRESENT",
    "CLIFF-F",
    "GLOBAL-ROPE-F",
    "I-MAN-LIFT",
    "I-MAN-LEAVES",
    "MAN-F",
    "VALUABLES-F"
   ]
  },
  "TIMBERS": {
   "name": "TIMBERS",
   "file": "shadow.zil",
   "line": 1579,
   "endLine": 1585,
   "desc": "broken timber",
   "ldesc": null,
   "fdesc": null,
   "loc": "TIMBER-ROOM",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "TIMBERS",
    "PILE"
   ],
   "adjectives": [
    "WOODEN",
    "BROKEN"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "50"
    ]
   },
   "contents": [],
   "source": "<OBJECT TIMBERS\t;\"was OTIMB\"\n\t(IN TIMBER-ROOM)\n\t(SYNONYM TIMBERS PILE)\n\t(ADJECTIVE WOODEN BROKEN)\n\t(DESC \"broken timber\")\n\t(FLAGS TAKEBIT)\n\t(SIZE 50)>",
   "referencedBy": []
  },
  "LADDER": {
   "name": "LADDER",
   "file": "shadow.zil",
   "line": 1598,
   "endLine": 1603,
   "desc": "wooden ladder",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "CLIMBBIT"
   ],
   "synonyms": [
    "LADDER"
   ],
   "adjectives": [
    "WOODEN",
    "RICKETY",
    "NARROW"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LADDER\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM LADDER)\n\t(ADJECTIVE WOODEN RICKETY NARROW)\n\t(DESC \"wooden ladder\")\n\t(FLAGS NDESCBIT CLIMBBIT)>",
   "referencedBy": []
  },
  "REPELLENT": {
   "name": "REPELLENT",
   "file": "shadow.zil",
   "line": 1682,
   "endLine": 1698,
   "desc": "Frobozz Magic Grue Repellent",
   "ldesc": null,
   "fdesc": "A spray can is in the corner. In large type is the legend \"Frobozz Magic\nGrue Repellent.\"",
   "loc": "ROOM-8",
   "flags": [
    "TAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "REPELLENT",
    "CAN"
   ],
   "adjectives": [
    "GRUE",
    "MAGIC"
   ],
   "action": "REPELLENT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "!!! FROBOZZ MAGIC GRUE REPELLENT !!!|\n|\nInstructions for use: Apply liberally to creature to be protected.\nDuration of effect is unpredictable. Use only in place of death!|\n|\n(No warranty expressed or implied)"
    ]
   },
   "contents": [],
   "source": "<OBJECT REPELLENT\n\t(IN ROOM-8)\n\t(SYNONYM REPELLENT CAN)\n\t(ADJECTIVE GRUE MAGIC)\n\t(DESC \"Frobozz Magic Grue Repellent\")\n\t(FLAGS TAKEBIT READBIT)\n\t(ACTION REPELLENT-FCN)\n\t(FDESC\n\"A spray can is in the corner. In large type is the legend \\\"Frobozz Magic\nGrue Repellent.\\\"\")\n\t(TEXT\n\"!!! FROBOZZ MAGIC GRUE REPELLENT !!!|\n|\nInstructions for use: Apply liberally to creature to be protected.\nDuration of effect is unpredictable. Use only in place of death!|\n|\n(No warranty expressed or implied)\")>",
   "referencedBy": [
    "REPELLENT-FCN"
   ]
  },
  "AQUEDUCT": {
   "name": "AQUEDUCT",
   "file": "shadow.zil",
   "line": 1838,
   "endLine": 1843,
   "desc": "aqueduct",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "AQUEDUCT",
    "DUCT",
    "CHASM"
   ],
   "adjectives": [
    "STONE"
   ],
   "action": "AQUEDUCT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT AQUEDUCT\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"aqueduct\")\n\t(SYNONYM AQUEDUCT DUCT CHASM)\n\t(ADJECTIVE STONE)\n\t(ACTION AQUEDUCT-F)>",
   "referencedBy": []
  },
  "WATER-CHANNEL": {
   "name": "WATER-CHANNEL",
   "file": "shadow.zil",
   "line": 1845,
   "endLine": 1850,
   "desc": "channel",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "CHANNEL"
   ],
   "adjectives": [
    "WATER"
   ],
   "action": "WATER-CHANNEL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WATER-CHANNEL\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"channel\")\n\t(SYNONYM CHANNEL)\n\t(ADJECTIVE WATER)\n\t(ACTION WATER-CHANNEL-F)>",
   "referencedBy": [
    "PRE-BOARD"
   ]
  },
  "MOSS": {
   "name": "MOSS",
   "file": "shadow.zil",
   "line": 1852,
   "endLine": 1856,
   "desc": "moss and lichen",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "MOSS",
    "LICHEN"
   ],
   "adjectives": [],
   "action": "MOSS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MOSS\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"moss and lichen\")\n\t(SYNONYM MOSS LICHEN)\n\t(ACTION MOSS-F)>",
   "referencedBy": []
  },
  "COVER": {
   "name": "COVER",
   "file": "shadow.zil",
   "line": 1915,
   "endLine": 1921,
   "desc": "manhole cover",
   "ldesc": null,
   "fdesc": null,
   "loc": "KEY-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "COVER"
   ],
   "adjectives": [
    "MANHOLE",
    "LARGE"
   ],
   "action": "COVER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT COVER\n\t(IN KEY-ROOM)\n\t(DESC \"manhole cover\")\n\t(SYNONYM COVER)\n\t(ADJECTIVE MANHOLE LARGE)\n\t(FLAGS NDESCBIT)\n\t(ACTION COVER-F)>",
   "referencedBy": []
  },
  "KEY": {
   "name": "KEY",
   "file": "shadow.zil",
   "line": 1945,
   "endLine": 1955,
   "desc": "strange key",
   "ldesc": null,
   "fdesc": "The light from above seems to be focused in the center of the room, where\na single key is lying in the dust.",
   "loc": "KEY-ROOM",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "KEY"
   ],
   "adjectives": [
    "STRANGE",
    "RUSTY",
    "LONG",
    "SHORT",
    "HEAVY",
    "THIN",
    "SHARP",
    "POINTED"
   ],
   "action": "KEY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT KEY\n\t(IN KEY-ROOM)\n\t(DESC \"strange key\")\n\t(FDESC\n\"The light from above seems to be focused in the center of the room, where\na single key is lying in the dust.\")\n\t(SYNONYM KEY)\n\t(ADJECTIVE STRANGE RUSTY LONG SHORT HEAVY THIN SHARP POINTED)\n\t(FLAGS TAKEBIT)\n\t(SIZE 10)\n\t(ACTION KEY-F)>",
   "referencedBy": [
    "LOOK-LIKE-DM?",
    "DMISH",
    "JIGS-UP",
    "KEY-F"
   ]
  },
  "VIEW-INDICATOR": {
   "name": "VIEW-INDICATOR",
   "file": "shadow.zil",
   "line": 1987,
   "endLine": 1992,
   "desc": "indicator",
   "ldesc": null,
   "fdesc": null,
   "loc": "VIEW-ROOM",
   "flags": [
    "NDESCBIT",
    "READBIT"
   ],
   "synonyms": [
    "INDICATOR",
    "DIAL"
   ],
   "adjectives": [],
   "action": "VIEW-INDICATOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT VIEW-INDICATOR\n\t(IN VIEW-ROOM)\n\t(DESC \"indicator\")\n\t(SYNONYM INDICATOR DIAL)\n\t(FLAGS NDESCBIT READBIT)\n\t(ACTION VIEW-INDICATOR-F)>",
   "referencedBy": []
  },
  "VIKING-SHIP": {
   "name": "VIKING-SHIP",
   "file": "shadow.zil",
   "line": 2037,
   "endLine": 2042,
   "desc": "Viking Ship",
   "ldesc": null,
   "fdesc": null,
   "loc": "FLATHEAD-OCEAN",
   "flags": [
    "NDESCBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "BOAT",
    "SHIP",
    "CRAFT"
   ],
   "adjectives": [
    "VIKING"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT VIKING-SHIP\n\t(IN FLATHEAD-OCEAN)\n\t(DESC \"Viking Ship\")\n\t(FLAGS NDESCBIT INVISIBLE)\n\t(ADJECTIVE VIKING)\n\t(SYNONYM BOAT SHIP CRAFT)>",
   "referencedBy": [
    "FLATHEAD-OCEAN-F",
    "I-BOAT-DISAPPEAR",
    "SAILOR-FCN"
   ]
  },
  "VIAL": {
   "name": "VIAL",
   "file": "shadow.zil",
   "line": 2044,
   "endLine": 2050,
   "desc": "vial",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "VIAL",
    "ODOR",
    "GIFT"
   ],
   "adjectives": [],
   "action": "VIAL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ],
    "CAPACITY": [
     "3"
    ]
   },
   "contents": [
    "POTION"
   ],
   "source": "<OBJECT VIAL\n\t(DESC \"vial\")\n\t(SYNONYM VIAL ODOR GIFT)\n\t(FLAGS TAKEBIT CONTBIT)\n\t(SIZE 3)\n\t(CAPACITY 3)\n\t(ACTION VIAL-F)>",
   "referencedBy": [
    "VIAL-F",
    "SAILOR-FCN"
   ]
  },
  "POTION": {
   "name": "POTION",
   "file": "shadow.zil",
   "line": 2052,
   "endLine": 2059,
   "desc": "heavy but invisible liquid",
   "ldesc": null,
   "fdesc": null,
   "loc": "VIAL",
   "flags": [],
   "synonyms": [
    "POTION",
    "LIQUID",
    "CONTENTS",
    "FLUID"
   ],
   "adjectives": [
    "HEAVY",
    "SWEET",
    "INVISIBLE",
    "SMELLING"
   ],
   "action": "POTION-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "2"
    ]
   },
   "contents": [],
   "source": "<OBJECT POTION\n\t(IN VIAL)\n\t(DESC \"heavy but invisible liquid\")\n\t(SYNONYM POTION LIQUID CONTENTS FLUID)\n\t(ADJECTIVE HEAVY SWEET INVISIBLE SMELLING)\n\t(SIZE 2)\n\t(FLAGS)\n\t(ACTION POTION-F)>",
   "referencedBy": [
    "POTION-F",
    "VIAL-F"
   ]
  },
  "OCEAN": {
   "name": "OCEAN",
   "file": "shadow.zil",
   "line": 2125,
   "endLine": 2131,
   "desc": "Flathead Ocean",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "OCEAN",
    "WATER"
   ],
   "adjectives": [
    "FLATHEAD"
   ],
   "action": "OCEAN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT OCEAN\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Flathead Ocean\")\n\t(SYNONYM OCEAN WATER)\n\t(ADJECTIVE FLATHEAD)\n\t(FLAGS NDESCBIT)\n\t(ACTION OCEAN-F)>",
   "referencedBy": [
    "OCEAN-F"
   ]
  },
  "STONE": {
   "name": "STONE",
   "file": "shadow.zil",
   "line": 2143,
   "endLine": 2151,
   "desc": "great rock",
   "ldesc": null,
   "fdesc": null,
   "loc": "JUNCTION",
   "flags": [
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "ROCK",
    "STONE"
   ],
   "adjectives": [
    "GREAT"
   ],
   "action": "STONE-F",
   "descfcn": "STONE-DESC",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "30"
    ]
   },
   "contents": [
    "SWORD"
   ],
   "source": "<OBJECT STONE\n\t(DESC \"great rock\")\n\t(SYNONYM ROCK STONE)\n\t(ADJECTIVE GREAT)\n\t(IN JUNCTION)\n\t(DESCFCN STONE-DESC)\n\t(FLAGS CONTBIT OPENBIT)\n\t(CAPACITY 30)\n\t(ACTION STONE-F)>",
   "referencedBy": [
    "STONE-F"
   ]
  },
  "FISH": {
   "name": "FISH",
   "file": "shadow.zil",
   "line": 2174,
   "endLine": 2179,
   "desc": "fish",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "FISH"
   ],
   "adjectives": [],
   "action": "FISH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FISH\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"fish\")\n\t(SYNONYM FISH)\n\t(FLAGS NDESCBIT)\n\t(ACTION FISH-F)>",
   "referencedBy": []
  },
  "RUBBLE": {
   "name": "RUBBLE",
   "file": "dungeon.zil",
   "line": 11,
   "endLine": 15,
   "desc": "rubble",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "ROCK",
    "ROCKS",
    "BOULDER",
    "RUBBLE"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RUBBLE\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM ROCK ROCKS BOULDER RUBBLE)\n\t(DESC \"rubble\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "DEBRIS": {
   "name": "DEBRIS",
   "file": "dungeon.zil",
   "line": 17,
   "endLine": 21,
   "desc": "dust and debris",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "DUST",
    "DEBRIS"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DEBRIS\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM DUST DEBRIS)\n\t(DESC \"dust and debris\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "CHASM": {
   "name": "CHASM",
   "file": "dungeon.zil",
   "line": 23,
   "endLine": 29,
   "desc": "chasm",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "CHASM",
    "GORGE",
    "RAVINE"
   ],
   "adjectives": [
    "ROCKY",
    "DEEP"
   ],
   "action": "CHASM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CHASM\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM CHASM GORGE RAVINE)\n\t(ADJECTIVE ROCKY DEEP)\n\t(DESC \"chasm\")\n\t(ACTION CHASM-FCN)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "TUNNEL": {
   "name": "TUNNEL",
   "file": "dungeon.zil",
   "line": 31,
   "endLine": 37,
   "desc": "tunnel",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PASSAGE",
    "CRAWLWAY"
   ],
   "adjectives": [
    "DARK",
    "SMOKY"
   ],
   "action": "TUNNEL-OBJECT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TUNNEL\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM PASSAGE CRAWLWAY)\n        (ADJECTIVE DARK SMOKY)\n\t(DESC \"tunnel\")\n\t(FLAGS NDESCBIT)\n\t(ACTION TUNNEL-OBJECT)>",
   "referencedBy": []
  },
  "EAST-WALL": {
   "name": "EAST-WALL",
   "file": "dungeon.zil",
   "line": 39,
   "endLine": 45,
   "desc": "eastern wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WALL"
   ],
   "adjectives": [
    "EAST",
    "EASTERN"
   ],
   "action": "RANDOM-WALL",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT EAST-WALL\t;\"was EAST-WALL\"\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM WALL)\n\t(ADJECTIVE EAST EASTERN)\n\t(DESC \"eastern wall\")\n\t(FLAGS NDESCBIT)\n\t(ACTION RANDOM-WALL)>",
   "referencedBy": []
  },
  "SOUTH-WALL": {
   "name": "SOUTH-WALL",
   "file": "dungeon.zil",
   "line": 47,
   "endLine": 53,
   "desc": "southern wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WALL"
   ],
   "adjectives": [
    "SOUTH",
    "SOUTHE"
   ],
   "action": "RANDOM-WALL",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SOUTH-WALL\t;\"was SOUTH-WALL\"\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM WALL)\n\t(ADJECTIVE SOUTH SOUTHE) ;\"only 6 chars count and southeast exists\"\n\t(DESC \"southern wall\")\n\t(FLAGS NDESCBIT)\n\t(ACTION RANDOM-WALL)>",
   "referencedBy": []
  },
  "WEST-WALL": {
   "name": "WEST-WALL",
   "file": "dungeon.zil",
   "line": 55,
   "endLine": 61,
   "desc": "western wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WALL"
   ],
   "adjectives": [
    "WEST",
    "WESTERN"
   ],
   "action": "RANDOM-WALL",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WEST-WALL\t;\"was WEST-WALL\"\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM WALL)\n\t(ADJECTIVE WEST WESTERN)\n\t(DESC \"western wall\")\n\t(FLAGS NDESCBIT)\n\t(ACTION RANDOM-WALL)>",
   "referencedBy": []
  },
  "NORTH-WALL": {
   "name": "NORTH-WALL",
   "file": "dungeon.zil",
   "line": 63,
   "endLine": 69,
   "desc": "northern wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WALL"
   ],
   "adjectives": [
    "NORTH",
    "NORTHE"
   ],
   "action": "RANDOM-WALL",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT NORTH-WALL\t;\"was NORTH-WALL\"\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM WALL)\n\t(ADJECTIVE NORTH NORTHE)\t;\"only six chars used...\"\n\t(DESC \"northern wall\")\n\t(FLAGS NDESCBIT)\n\t(ACTION RANDOM-WALL)>",
   "referencedBy": []
  },
  "GLOBAL-WATER": {
   "name": "GLOBAL-WATER",
   "file": "dungeon.zil",
   "line": 71,
   "endLine": 76,
   "desc": "water",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DRINKBIT"
   ],
   "synonyms": [
    "WATER",
    "QUANTITY"
   ],
   "adjectives": [],
   "action": "WATER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-WATER\t;\"was GLOBAL-WATER\"\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM WATER QUANTITY)\n\t(DESC \"water\")\n\t(FLAGS DRINKBIT)\n\t(ACTION WATER-FCN)>",
   "referencedBy": [
    "WATER-FCN",
    "HIT-SPOT",
    "PRE-FILL",
    "V-FILL"
   ]
  },
  "WATER": {
   "name": "WATER",
   "file": "3dungeon.zil",
   "line": 78,
   "endLine": 84,
   "desc": "quantity of water",
   "ldesc": "There is some water here.",
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "DRINKBIT"
   ],
   "synonyms": [
    "WATER",
    "QUANTITY",
    "LIQUID",
    "H2O"
   ],
   "adjectives": [],
   "action": "WATER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "4"
    ]
   },
   "contents": [],
   "source": "<OBJECT WATER\n\t(SYNONYM WATER QUANTITY LIQUID H2O)\n\t(DESC \"quantity of water\")\n\t(FLAGS TAKEBIT DRINKBIT)\n\t(ACTION WATER-FCN)\n\t(LDESC \"There is some water here.\")\n\t(SIZE 4)>",
   "referencedBy": [
    "HIT-SPOT",
    "SHAKE-LOOP"
   ]
  },
  "BROKEN-LAMP": {
   "name": "BROKEN-LAMP",
   "file": "dungeon.zil",
   "line": 78,
   "endLine": 83,
   "desc": "broken lantern",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "LAMP",
    "LANTERN"
   ],
   "adjectives": [
    "BROKEN",
    "BRASS"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "15"
    ]
   },
   "contents": [],
   "source": "<OBJECT BROKEN-LAMP\t;\"was BLAMP\"\n\t(SYNONYM LAMP LANTERN)\n\t(ADJECTIVE BROKEN BRASS)\n\t(DESC \"broken lantern\")\n\t(FLAGS TAKEBIT)\n\t(SIZE 15)>",
   "referencedBy": [
    "LANTERN",
    "CLIFF-OBJECT-F"
   ]
  },
  "LAMP": {
   "name": "LAMP",
   "file": "dungeon.zil",
   "line": 85,
   "endLine": 93,
   "desc": "lamp",
   "ldesc": null,
   "fdesc": "Your old friend, the brass lantern, is at your feet.",
   "loc": "CP-ANTE",
   "flags": [
    "TAKEBIT",
    "LIGHTBIT"
   ],
   "synonyms": [
    "LAMP",
    "LANTERN"
   ],
   "adjectives": [
    "BRASS"
   ],
   "action": "LANTERN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "15"
    ]
   },
   "contents": [],
   "source": "<OBJECT LAMP\t;\"was LAMP\"\n\t(IN CP-ANTE)\n\t(SYNONYM LAMP LANTERN)\n\t(ADJECTIVE BRASS)\n\t(DESC \"lamp\")\n\t(FLAGS TAKEBIT LIGHTBIT)\n\t(FDESC \"Your old friend, the brass lantern, is at your feet.\")\n\t(ACTION LANTERN)\n\t(SIZE 15)>",
   "referencedBy": [
    "LANTERN",
    "I-LANTERN",
    "CHEST-F",
    "GO-ON-LAKE",
    "CLIFF-OBJECT-F",
    "GO"
   ]
  },
  "SWORD": {
   "name": "SWORD",
   "file": "dungeon.zil",
   "line": 95,
   "endLine": 103,
   "desc": "sword",
   "ldesc": null,
   "fdesc": null,
   "loc": "STONE",
   "flags": [
    "TAKEBIT",
    "WEAPONBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "SWORD",
    "ORCRIST",
    "GLAMDRING",
    "BLADE"
   ],
   "adjectives": [
    "ELVISH",
    "OLD",
    "ANTIQUE"
   ],
   "action": "SWORD-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "25"
    ],
    "VALUE": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT SWORD\t;\"was SWORD\"\n\t(IN STONE)\n\t(SYNONYM SWORD ORCRIST GLAMDRING BLADE)\n\t(ADJECTIVE ELVISH OLD ANTIQUE)\n\t(DESC \"sword\")\n\t(FLAGS TAKEBIT WEAPONBIT TRYTAKEBIT)\n\t(ACTION SWORD-FCN)\n\t(SIZE 25)\n\t(VALUE 0)>",
   "referencedBy": [
    "I-SWORD",
    "FIND-WEAPON",
    "SHADOW-F",
    "SHADOW-ARRIVAL",
    "WAYBREAD-F",
    "MAN-F",
    "ROPE-F"
   ]
  },
  "WARNING-NOTE": {
   "name": "WARNING-NOTE",
   "file": "dungeon.zil",
   "line": 146,
   "endLine": 159,
   "desc": "warning note",
   "ldesc": null,
   "fdesc": "Lying on the ground is a small note of some kind.",
   "loc": "CP-ANTE",
   "flags": [
    "TAKEBIT",
    "READBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "NOTE",
    "WARNING",
    "TEXT"
   ],
   "adjectives": [
    "WARNING",
    "SMALL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "2"
    ],
    "TEXT": [
     "Warning:|\n    The Royal Puzzle is dangerous and it is possible to become\ntrapped within its confines. Please do not enter the puzzle after hours\nwhen museum personnel are not present.|\n              The Management|"
    ]
   },
   "contents": [],
   "source": "<OBJECT WARNING-NOTE\n\t(IN CP-ANTE)\n\t(DESC \"warning note\")\n\t(SYNONYM NOTE WARNING TEXT)\n\t(ADJECTIVE WARNING SMALL)\n\t(FDESC \"Lying on the ground is a small note of some kind.\")\n\t(FLAGS TAKEBIT READBIT BURNBIT)\n\t(SIZE 2)\n\t(TEXT\n\"Warning:|\n    The Royal Puzzle is dangerous and it is possible to become\ntrapped within its confines. Please do not enter the puzzle after hours\nwhen museum personnel are not present.|\n              The Management|\")>",
   "referencedBy": []
  },
  "CP-SLOT": {
   "name": "CP-SLOT",
   "file": "dungeon.zil",
   "line": 161,
   "endLine": 167,
   "desc": "small slot",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "CPSLT",
    "SLIT",
    "SLOT"
   ],
   "adjectives": [
    "SMALL"
   ],
   "action": "CP-SLOT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "4"
    ]
   },
   "contents": [],
   "source": "<OBJECT CP-SLOT\n\t(SYNONYM CPSLT SLIT SLOT)\n\t(ADJECTIVE SMALL)\n\t(DESC \"small slot\")\n\t(FLAGS NDESCBIT OPENBIT)\n\t(ACTION CP-SLOT-FCN)\n\t(CAPACITY 4)>",
   "referencedBy": [
    "GO"
   ]
  },
  "CPDOOR": {
   "name": "CPDOOR",
   "file": "dungeon.zil",
   "line": 169,
   "endLine": 175,
   "desc": "steel door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "STEEL",
    "METAL"
   ],
   "action": "CPDOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CPDOOR\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM DOOR)\n\t(ADJECTIVE STEEL METAL)\n\t(DESC \"steel door\")\n\t(FLAGS NDESCBIT)\n\t(ACTION CPDOOR-F)>",
   "referencedBy": []
  },
  "LORE-BOOK": {
   "name": "LORE-BOOK",
   "file": "dungeon.zil",
   "line": 177,
   "endLine": 192,
   "desc": "very ancient book",
   "ldesc": "There is an old book here.",
   "fdesc": "Nestled inside the niche is an old and dusty book.",
   "loc": null,
   "flags": [
    "TAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "BOOK",
    "LORE",
    "TEXT"
   ],
   "adjectives": [
    "LORE",
    "OLD",
    "STRANGE"
   ],
   "action": "LORE-BOOK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The book is written in a strong and elegant hand and is full of strange,\nwondrous pictures. The text, penned in many colours, is in a tongue unknown\nto you. The words seem to change colour as you read them.\nThe book itself is very old and the pages dry and brittle."
    ],
    "SIZE": [
     "4"
    ]
   },
   "contents": [],
   "source": "<OBJECT LORE-BOOK\n\t(SYNONYM BOOK LORE TEXT)\n\t(ADJECTIVE LORE OLD STRANGE)\n\t(DESC \"very ancient book\")\n\t(FLAGS TAKEBIT READBIT)\n\t(LDESC\n\t \"There is an old book here.\")\n\t(FDESC\n\t \"Nestled inside the niche is an old and dusty book.\")\n\t(TEXT\n\"The book is written in a strong and elegant hand and is full of strange,\nwondrous pictures. The text, penned in many colours, is in a tongue unknown\nto you. The words seem to change colour as you read them.\nThe book itself is very old and the pages dry and brittle.\")\n\t(SIZE 4)\n\t(ACTION LORE-BOOK-F)>",
   "referencedBy": [
    "CP-SLOT-FCN",
    "LOOK-LIKE-DM?",
    "DMISH",
    "LORE-BOOK-F",
    "GO"
   ]
  },
  "CPEWL": {
   "name": "CPEWL",
   "file": "dungeon.zil",
   "line": 196,
   "endLine": 202,
   "desc": "eastern wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WALL"
   ],
   "adjectives": [
    "EAST",
    "EASTERN"
   ],
   "action": "CPWALL-OBJECT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CPEWL\t\t;\"defined CPWALL\"\n        (IN LOCAL-GLOBALS)\n\t(SYNONYM WALL)\n\t(ADJECTIVE EAST EASTERN)\n\t(DESC \"eastern wall\")\n\t(FLAGS NDESCBIT)\n\t(ACTION CPWALL-OBJECT)>",
   "referencedBy": []
  },
  "CPWWL": {
   "name": "CPWWL",
   "file": "dungeon.zil",
   "line": 204,
   "endLine": 210,
   "desc": "western wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WALL"
   ],
   "adjectives": [
    "WEST",
    "WESTERN"
   ],
   "action": "CPWALL-OBJECT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CPWWL\t\t;\"defined CPWALL\"\n        (IN LOCAL-GLOBALS)\n\t(SYNONYM WALL)\n\t(ADJECTIVE WEST WESTERN)\n\t(DESC \"western wall\")\n\t(FLAGS NDESCBIT)\n\t(ACTION CPWALL-OBJECT)>",
   "referencedBy": []
  },
  "CPSWL": {
   "name": "CPSWL",
   "file": "dungeon.zil",
   "line": 212,
   "endLine": 218,
   "desc": "southern wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WALL"
   ],
   "adjectives": [
    "SOUTH"
   ],
   "action": "CPWALL-OBJECT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CPSWL\t\t;\"defined CPWALL\"\n        (IN LOCAL-GLOBALS)\n\t(SYNONYM WALL)\n\t(ADJECTIVE SOUTH)\n\t(DESC \"southern wall\")\n\t(FLAGS NDESCBIT)\n\t(ACTION CPWALL-OBJECT)>",
   "referencedBy": []
  },
  "CPNWL": {
   "name": "CPNWL",
   "file": "dungeon.zil",
   "line": 220,
   "endLine": 226,
   "desc": "northern wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WALL"
   ],
   "adjectives": [
    "NORTH"
   ],
   "action": "CPWALL-OBJECT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CPNWL\t\t;\"defined CPWALL\"\n        (IN LOCAL-GLOBALS)\n\t(SYNONYM WALL)\n\t(ADJECTIVE NORTH)\n\t(DESC \"northern wall\")\n\t(FLAGS NDESCBIT)\n\t(ACTION CPWALL-OBJECT)>",
   "referencedBy": []
  },
  "CPLADDER": {
   "name": "CPLADDER",
   "file": "dungeon.zil",
   "line": 228,
   "endLine": 232,
   "desc": "ladder",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "LADDER"
   ],
   "adjectives": [],
   "action": "CPLADDER-OBJECT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CPLADDER\t\t;\"defined CPLADDER\"\n        (IN GLOBAL-OBJECTS)\n\t(SYNONYM LADDER)\n\t(DESC \"ladder\")\n\t(ACTION CPLADDER-OBJECT)>",
   "referencedBy": []
  },
  "INTDIR": {
   "name": "INTDIR",
   "file": "dungeon.zil",
   "line": 236,
   "endLine": 240,
   "desc": "direction",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "TOOLBIT"
   ],
   "synonyms": [
    "INTDIR"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT INTDIR\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM INTDIR)\n\t(FLAGS TOOLBIT)\n\t(DESC \"direction\")>",
   "referencedBy": [
    "GET-OBJECT"
   ]
  },
  "GUARDIAN": {
   "name": "GUARDIAN",
   "file": "dungeon.zil",
   "line": 242,
   "endLine": 247,
   "desc": "Guardians of Zork",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "ACTORBIT"
   ],
   "synonyms": [
    "STATUE",
    "GUARDIAN",
    "GUARD",
    "GUARDS"
   ],
   "adjectives": [],
   "action": "GUARDIANS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GUARDIAN\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"Guardians of Zork\")\n\t(SYNONYM STATUE GUARDIAN GUARD GUARDS)\n\t(FLAGS ACTORBIT)\n\t(ACTION GUARDIANS)>",
   "referencedBy": [
    "GUARDIANS"
   ]
  },
  "ROSE": {
   "name": "ROSE",
   "file": "dungeon.zil",
   "line": 249,
   "endLine": 254,
   "desc": "compass rose",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "ROSE"
   ],
   "adjectives": [
    "COMPASS"
   ],
   "action": "ROSE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ROSE\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"compass rose\")\n\t(SYNONYM ROSE)\n\t(ADJECTIVE COMPASS)\n\t(ACTION ROSE-F)>",
   "referencedBy": []
  },
  "MASTER": {
   "name": "MASTER",
   "file": "dungeon.zil",
   "line": 256,
   "endLine": 262,
   "desc": "dungeon master",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "ACTORBIT"
   ],
   "synonyms": [
    "MASTER"
   ],
   "adjectives": [
    "DUNGEON"
   ],
   "action": "MASTER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MASTER\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"dungeon master\")\n\t(SYNONYM MASTER)\n\t(ADJECTIVE DUNGEON)\n\t(FLAGS ACTORBIT)\n\t(ACTION MASTER-F)>",
   "referencedBy": [
    "MASTER-F"
   ]
  },
  "DUNGEON-MASTER": {
   "name": "DUNGEON-MASTER",
   "file": "dungeon.zil",
   "line": 264,
   "endLine": 272,
   "desc": "dungeon master",
   "ldesc": "The dungeon master is quietly leaning on his staff here.",
   "fdesc": null,
   "loc": "BEHIND-DOOR",
   "flags": [
    "ACTORBIT"
   ],
   "synonyms": [
    "MASTER",
    "DUNGEON"
   ],
   "adjectives": [
    "DUNGEON"
   ],
   "action": "DUNGEON-MASTER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DUNGEON-MASTER\n\t(IN BEHIND-DOOR)\n\t(DESC \"dungeon master\")\n\t(LDESC\n\"The dungeon master is quietly leaning on his staff here.\")\n\t(SYNONYM MASTER DUNGEON)\n\t(ADJECTIVE DUNGEON)\n\t(FLAGS ACTORBIT)\n\t(ACTION DUNGEON-MASTER-F)>",
   "referencedBy": [
    "DUNGEON-MASTER-F",
    "MASTER-F",
    "I-FOLIN",
    "CELL-ROOM",
    "PARAPET-OBJ-F"
   ]
  },
  "MIRROR": {
   "name": "MIRROR",
   "file": "dungeon.zil",
   "line": 274,
   "endLine": 278,
   "desc": "mirror",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "MIRROR",
    "STRUCTURE"
   ],
   "adjectives": [],
   "action": "MIRROR-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MIRROR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"mirror\")\n\t(SYNONYM MIRROR STRUCTURE)\n\t(ACTION MIRROR-FUNCTION)>",
   "referencedBy": [
    "MIRROR-FUNCTION",
    "PANEL-FUNCTION"
   ]
  },
  "PANEL": {
   "name": "PANEL",
   "file": "dungeon.zil",
   "line": 280,
   "endLine": 284,
   "desc": "panel",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "PANEL"
   ],
   "adjectives": [],
   "action": "PANEL-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PANEL\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"panel\")\n\t(SYNONYM PANEL)\n\t(ACTION PANEL-FUNCTION)>",
   "referencedBy": []
  },
  "CHANNEL": {
   "name": "CHANNEL",
   "file": "dungeon.zil",
   "line": 286,
   "endLine": 290,
   "desc": "stone channel",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "CHANNEL",
    "HOLE"
   ],
   "adjectives": [
    "STONE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CHANNEL\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"stone channel\")\n\t(SYNONYM CHANNEL HOLE)\n\t(ADJECTIVE STONE)>",
   "referencedBy": [
    "SHORT-POLE-F"
   ]
  },
  "WOODEN-WALL": {
   "name": "WOODEN-WALL",
   "file": "dungeon.zil",
   "line": 618,
   "endLine": 623,
   "desc": "wooden wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "WALL"
   ],
   "adjectives": [
    "WOOD",
    "WOODEN"
   ],
   "action": "WOODEN-WALL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WOODEN-WALL\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"wooden wall\")\n\t(SYNONYM WALL)\n\t(ADJECTIVE WOOD WOODEN)\n\t(ACTION WOODEN-WALL-F)>",
   "referencedBy": []
  },
  "RUNES": {
   "name": "RUNES",
   "file": "dungeon.zil",
   "line": 702,
   "endLine": 708,
   "desc": "runes",
   "ldesc": null,
   "fdesc": null,
   "loc": "MSTAIRS",
   "flags": [
    "NDESCBIT",
    "READBIT"
   ],
   "synonyms": [
    "ENGRAV",
    "TEXT",
    "WALL",
    "RUNES"
   ],
   "adjectives": [
    "CARVED"
   ],
   "action": "RUNES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RUNES\n\t(IN MSTAIRS)\n\t(DESC \"runes\")\n\t(SYNONYM ENGRAV TEXT WALL RUNES)\n\t(ADJECTIVE CARVED)\n\t(FLAGS NDESCBIT READBIT)\n\t(ACTION RUNES-F)>",
   "referencedBy": []
  },
  "T-BAR": {
   "name": "T-BAR",
   "file": "dungeon.zil",
   "line": 710,
   "endLine": 715,
   "desc": "T-bar",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-MIRROR",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "T-BAR",
    "BAR"
   ],
   "adjectives": [],
   "action": "T-BAR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT T-BAR\n\t(IN IN-MIRROR)\n\t(DESC \"T-bar\")\n\t(SYNONYM T-BAR BAR)\n\t(FLAGS NDESCBIT)\n\t(ACTION T-BAR-F)>",
   "referencedBy": []
  },
  "BLACK-PANEL": {
   "name": "BLACK-PANEL",
   "file": "dungeon.zil",
   "line": 717,
   "endLine": 723,
   "desc": "black panel",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-MIRROR",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WALL",
    "PANEL"
   ],
   "adjectives": [
    "BLACK"
   ],
   "action": "MPANELS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BLACK-PANEL\n\t(IN IN-MIRROR)\n\t(DESC \"black panel\")\n\t(SYNONYM WALL PANEL)\n\t(ADJECTIVE BLACK)\n\t(FLAGS NDESCBIT)\n\t(ACTION MPANELS)>",
   "referencedBy": []
  },
  "BRONZE-DOOR": {
   "name": "BRONZE-DOOR",
   "file": "dungeon.zil",
   "line": 725,
   "endLine": 731,
   "desc": "bronze door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "CONTBIT",
    "DOORBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "BRONZE"
   ],
   "action": "BRONZE-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BRONZE-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"bronze door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE BRONZE)\n\t(FLAGS CONTBIT DOORBIT INVISIBLE)\n\t(ACTION BRONZE-DOOR-F)>",
   "referencedBy": [
    "CELL-MOVE",
    "CELL-ROOM",
    "NCELL-ROOM",
    "SOUTH-CORRIDOR-F",
    "BRONZE-DOOR-F",
    "BRONZE-DOOR-EXIT",
    "KEY-F"
   ]
  },
  "CELL-DOOR": {
   "name": "CELL-DOOR",
   "file": "dungeon.zil",
   "line": 733,
   "endLine": 739,
   "desc": "cell door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "CONTBIT",
    "DOORBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "WOOD",
    "WOODEN",
    "CELL"
   ],
   "action": "CELL-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CELL-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"cell door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE WOOD WOODEN CELL)\n\t(FLAGS CONTBIT DOORBIT)\n\t(ACTION CELL-DOOR-F)>",
   "referencedBy": [
    "CELL-MOVE",
    "DIALBUTTON",
    "CELL-ROOM",
    "NORTH-CORRIDOR-F",
    "CELL-DOOR-F"
   ]
  },
  "COMPASS-ARROW": {
   "name": "COMPASS-ARROW",
   "file": "dungeon.zil",
   "line": 741,
   "endLine": 746,
   "desc": "compass arrow",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-MIRROR",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "ARROW"
   ],
   "adjectives": [
    "COMPASS"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT COMPASS-ARROW\n\t(IN IN-MIRROR)\n\t(DESC \"compass arrow\")\n\t(SYNONYM ARROW)\n\t(ADJECTIVE COMPASS)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "DIAL-BUTTON": {
   "name": "DIAL-BUTTON",
   "file": "dungeon.zil",
   "line": 748,
   "endLine": 754,
   "desc": "large button",
   "ldesc": null,
   "fdesc": null,
   "loc": "PARAPET",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "LARGE"
   ],
   "action": "DIALBUTTON",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DIAL-BUTTON\n\t(IN PARAPET)\n\t(DESC \"large button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE LARGE)\n\t(FLAGS NDESCBIT)\n\t(ACTION DIALBUTTON)>",
   "referencedBy": []
  },
  "GOOD-LOCKED-DOOR": {
   "name": "GOOD-LOCKED-DOOR",
   "file": "dungeon.zil",
   "line": 756,
   "endLine": 762,
   "desc": "cell door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "LOCKED",
    "WOOD",
    "WOODEN",
    "CELL"
   ],
   "action": "LOCKED-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GOOD-LOCKED-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"cell door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE LOCKED WOOD WOODEN CELL)\n\t(FLAGS NDESCBIT)\n\t(ACTION LOCKED-DOOR-F)>",
   "referencedBy": []
  },
  "LOCKED-DOOR": {
   "name": "LOCKED-DOOR",
   "file": "dungeon.zil",
   "line": 764,
   "endLine": 770,
   "desc": "cell door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "LOCKED",
    "WOOD",
    "WOODEN",
    "CELL"
   ],
   "action": "LOCKED-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LOCKED-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"cell door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE LOCKED WOOD WOODEN CELL)\n\t(FLAGS NDESCBIT)\n\t(ACTION LOCKED-DOOR-F)>",
   "referencedBy": []
  },
  "LONG-POLE": {
   "name": "LONG-POLE",
   "file": "dungeon.zil",
   "line": 772,
   "endLine": 777,
   "desc": "long pole",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-MIRROR",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "POLE"
   ],
   "adjectives": [
    "LONG",
    "CENTER"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LONG-POLE\n\t(IN IN-MIRROR)\n\t(DESC \"long pole\")\n\t(SYNONYM POLE)\n\t(ADJECTIVE LONG CENTER)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "MAHOGANY-PANEL": {
   "name": "MAHOGANY-PANEL",
   "file": "dungeon.zil",
   "line": 779,
   "endLine": 785,
   "desc": "mahogany panel",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-MIRROR",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WALL",
    "PANEL"
   ],
   "adjectives": [
    "MAHOGANY"
   ],
   "action": "MENDS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MAHOGANY-PANEL\n\t(IN IN-MIRROR)\n\t(DESC \"mahogany panel\")\n\t(SYNONYM WALL PANEL)\n\t(ADJECTIVE MAHOGANY)\n\t(FLAGS NDESCBIT)\n\t(ACTION MENDS)>",
   "referencedBy": [
    "MENDS"
   ]
  },
  "FLAMING-PIT": {
   "name": "FLAMING-PIT",
   "file": "dungeon.zil",
   "line": 787,
   "endLine": 793,
   "desc": "flaming pit",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PIT",
    "ABYSS"
   ],
   "adjectives": [
    "FIERY",
    "FLAMING"
   ],
   "action": "FLAMING-PIT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FLAMING-PIT\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"flaming pit\")\n\t(SYNONYM PIT ABYSS)\n\t(ADJECTIVE FIERY FLAMING)\n\t(FLAGS NDESCBIT)\n\t(ACTION FLAMING-PIT-F)>",
   "referencedBy": [
    "FLAMING-PIT-F"
   ]
  },
  "PARAPET-OBJ": {
   "name": "PARAPET-OBJ",
   "file": "dungeon.zil",
   "line": 795,
   "endLine": 800,
   "desc": "parapet",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PARAPET"
   ],
   "adjectives": [],
   "action": "PARAPET-OBJ-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PARAPET-OBJ\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"parapet\")\n\t(SYNONYM PARAPET)\n\t(FLAGS NDESCBIT)\n\t(ACTION PARAPET-OBJ-F)>",
   "referencedBy": [
    "DUNGEON-MASTER-F"
   ]
  },
  "PINE-PANEL": {
   "name": "PINE-PANEL",
   "file": "dungeon.zil",
   "line": 802,
   "endLine": 808,
   "desc": "pine panel",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-MIRROR",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PANEL",
    "WALL"
   ],
   "adjectives": [
    "PINE"
   ],
   "action": "MENDS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PINE-PANEL\n\t(IN IN-MIRROR)\n\t(DESC \"pine panel\")\n\t(SYNONYM PANEL WALL)\n\t(ADJECTIVE PINE)\n\t(FLAGS NDESCBIT)\n\t(ACTION MENDS)>",
   "referencedBy": [
    "MENDS"
   ]
  },
  "BEAM": {
   "name": "BEAM",
   "file": "dungeon.zil",
   "line": 810,
   "endLine": 817,
   "desc": "red beam of light",
   "ldesc": null,
   "fdesc": null,
   "loc": "MREYE",
   "flags": [
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "BEAM",
    "LIGHT"
   ],
   "adjectives": [
    "RED"
   ],
   "action": "BEAM-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "100"
    ]
   },
   "contents": [],
   "source": "<OBJECT BEAM\n\t(IN MREYE)\n\t(DESC \"red beam of light\")\n\t(SYNONYM BEAM LIGHT)\n\t(ADJECTIVE RED)\n\t(FLAGS NDESCBIT OPENBIT CONTBIT)\n\t(CAPACITY 100)\n\t(ACTION BEAM-FUNCTION)>",
   "referencedBy": [
    "BEAM-STOPPED?",
    "BEAM-FUNCTION",
    "PRE-MUNG"
   ]
  },
  "RED-BUTTON": {
   "name": "RED-BUTTON",
   "file": "dungeon.zil",
   "line": 819,
   "endLine": 825,
   "desc": "red button",
   "ldesc": null,
   "fdesc": null,
   "loc": "MR-ANTE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "RED"
   ],
   "action": "MRSWITCH",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RED-BUTTON\n\t(IN MR-ANTE)\n\t(DESC \"red button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE RED)\n\t(FLAGS NDESCBIT)\n\t(ACTION MRSWITCH)>",
   "referencedBy": []
  },
  "RED-PANEL": {
   "name": "RED-PANEL",
   "file": "dungeon.zil",
   "line": 827,
   "endLine": 833,
   "desc": "red panel",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-MIRROR",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PANEL",
    "WALL"
   ],
   "adjectives": [
    "RED"
   ],
   "action": "MPANELS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RED-PANEL\n\t(IN IN-MIRROR)\n\t(DESC \"red panel\")\n\t(SYNONYM PANEL WALL)\n\t(ADJECTIVE RED)\n\t(FLAGS NDESCBIT)\n\t(ACTION MPANELS)>",
   "referencedBy": [
    "MPANELS"
   ]
  },
  "SHORT-POLE": {
   "name": "SHORT-POLE",
   "file": "dungeon.zil",
   "line": 835,
   "endLine": 841,
   "desc": "short pole",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-MIRROR",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "POLE",
    "POST",
    "HANDGRIP",
    "GRIP"
   ],
   "adjectives": [
    "SHORT",
    "SMALL",
    "HAND"
   ],
   "action": "SHORT-POLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SHORT-POLE\n\t(IN IN-MIRROR)\n\t(DESC \"short pole\")\n\t(SYNONYM POLE POST HANDGRIP GRIP)\n\t(ADJECTIVE SHORT SMALL HAND)\n\t(FLAGS NDESCBIT)\n\t(ACTION SHORT-POLE-F)>",
   "referencedBy": [
    "PRE-PUT"
   ]
  },
  "SUNDIAL": {
   "name": "SUNDIAL",
   "file": "dungeon.zil",
   "line": 843,
   "endLine": 849,
   "desc": "sundial",
   "ldesc": null,
   "fdesc": null,
   "loc": "PARAPET",
   "flags": [
    "NDESCBIT",
    "TURNBIT"
   ],
   "synonyms": [
    "DIAL",
    "INDICATOR",
    "ARROW",
    "SUNDIAL"
   ],
   "adjectives": [
    "INDICATOR",
    "SUN"
   ],
   "action": "DIAL",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SUNDIAL\n\t(IN PARAPET)\n\t(DESC \"sundial\")\n\t(SYNONYM DIAL INDICATOR ARROW SUNDIAL)\n\t(ADJECTIVE INDICATOR SUN)\n\t(FLAGS NDESCBIT TURNBIT)\n\t(ACTION DIAL)>",
   "referencedBy": []
  },
  "YELLOW-PANEL": {
   "name": "YELLOW-PANEL",
   "file": "dungeon.zil",
   "line": 851,
   "endLine": 857,
   "desc": "yellow panel",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-MIRROR",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PANEL",
    "WALL"
   ],
   "adjectives": [
    "YELLOW"
   ],
   "action": "MPANELS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT YELLOW-PANEL\n\t(IN IN-MIRROR)\n\t(DESC \"yellow panel\")\n\t(SYNONYM PANEL WALL)\n\t(ADJECTIVE YELLOW)\n\t(FLAGS NDESCBIT)\n\t(ACTION MPANELS)>",
   "referencedBy": [
    "MPANELS"
   ]
  },
  "WHITE-PANEL": {
   "name": "WHITE-PANEL",
   "file": "dungeon.zil",
   "line": 859,
   "endLine": 865,
   "desc": "white panel",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-MIRROR",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PANEL",
    "WALL"
   ],
   "adjectives": [
    "WHITE"
   ],
   "action": "MPANELS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WHITE-PANEL\n\t(IN IN-MIRROR)\n\t(DESC \"white panel\")\n\t(SYNONYM PANEL WALL)\n\t(ADJECTIVE WHITE)\n\t(FLAGS NDESCBIT)\n\t(ACTION MPANELS)>",
   "referencedBy": []
  },
  "WOODEN-BAR": {
   "name": "WOODEN-BAR",
   "file": "dungeon.zil",
   "line": 867,
   "endLine": 872,
   "desc": "wooden bar",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-MIRROR",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BAR"
   ],
   "adjectives": [
    "WOOD",
    "WOODEN"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WOODEN-BAR\n\t(IN IN-MIRROR)\n\t(DESC \"wooden bar\")\n\t(SYNONYM BAR)\n\t(ADJECTIVE WOOD WOODEN)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "DUNGEON-PANEL": {
   "name": "DUNGEON-PANEL",
   "file": "dungeon.zil",
   "line": 874,
   "endLine": 879,
   "desc": "panel",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PANEL"
   ],
   "adjectives": [],
   "action": "DUNGEON-PANEL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DUNGEON-PANEL\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"panel\")\n\t(SYNONYM PANEL)\n\t(FLAGS NDESCBIT)\n\t(ACTION DUNGEON-PANEL-F)>",
   "referencedBy": []
  },
  "DUNGEON-DOOR": {
   "name": "DUNGEON-DOOR",
   "file": "dungeon.zil",
   "line": 881,
   "endLine": 887,
   "desc": "wooden door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "DOORBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "WOOD",
    "WOODEN"
   ],
   "action": "DUNGEON-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DUNGEON-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"wooden door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE WOOD WOODEN)\n\t(FLAGS NDESCBIT DOORBIT CONTBIT)\n\t(ACTION DUNGEON-DOOR-F)>",
   "referencedBy": [
    "DUNGEON-MASTER-F",
    "BEHIND-DOOR-F",
    "FRONT-DOOR-F"
   ]
  },
  "SECRET-DOOR": {
   "name": "SECRET-DOOR",
   "file": "dungeon.zil",
   "line": 889,
   "endLine": 895,
   "desc": "secret door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "CONTBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "SECRET"
   ],
   "action": "SECRET-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SECRET-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"secret door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE SECRET)\n\t(FLAGS DOORBIT CONTBIT INVISIBLE)\n\t(ACTION SECRET-DOOR-F)>",
   "referencedBy": [
    "SECRET-DOOR-F",
    "MSTAIRS-F",
    "OLD-MAN-F"
   ]
  },
  "OLD-MAN": {
   "name": "OLD-MAN",
   "file": "dungeon.zil",
   "line": 897,
   "endLine": 903,
   "desc": "old man",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "ACTORBIT"
   ],
   "synonyms": [
    "MAN"
   ],
   "adjectives": [
    "OLD"
   ],
   "action": "OLD-MAN-F",
   "descfcn": "OLD-MAN-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT OLD-MAN\n\t(DESC \"old man\")\n\t(SYNONYM MAN)\n\t(ADJECTIVE OLD)\n\t(FLAGS ACTORBIT)\n\t(ACTION OLD-MAN-F)\n\t(DESCFCN OLD-MAN-F)>",
   "referencedBy": [
    "MSTAIRS-F",
    "OLD-MAN-F",
    "I-OLD-MAN-SLEEPS"
   ]
  },
  "CP-HOLE": {
   "name": "CP-HOLE",
   "file": "dungeon.zil",
   "line": 905,
   "endLine": 911,
   "desc": "hole",
   "ldesc": null,
   "fdesc": null,
   "loc": "CP-ANTE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "HOLE"
   ],
   "adjectives": [
    "ROUND"
   ],
   "action": "CP-HOLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CP-HOLE\n\t(IN CP-ANTE)\n\t(DESC \"hole\")\n\t(SYNONYM HOLE)\n\t(ADJECTIVE ROUND)\n\t(FLAGS NDESCBIT)\n\t(ACTION CP-HOLE-F)>",
   "referencedBy": []
  },
  "GLOBAL-OBJECTS": {
   "name": "GLOBAL-OBJECTS",
   "file": "gglobals.zil",
   "line": 7,
   "endLine": 10,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "RMUNGBIT",
    "INVISIBLE",
    "TOUCHBIT",
    "SURFACEBIT",
    "TRYTAKEBIT",
    "OPENBIT",
    "SEARCHBIT",
    "TRANSBIT",
    "ONBIT",
    "RLANDBIT",
    "FIGHTBIT",
    "STAGGERED",
    "WEARBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "VOICES",
    "OCEAN",
    "DEBRIS",
    "TUNNEL",
    "EAST-WALL",
    "SOUTH-WALL",
    "WEST-WALL",
    "NORTH-WALL",
    "CPLADDER",
    "INTDIR",
    "LOCAL-GLOBALS",
    "INTNUM",
    "IT",
    "BLESSINGS",
    "SAILOR",
    "GROUND",
    "GRUE",
    "LUNGS",
    "ME",
    "PATHOBJ",
    "ZORKMID",
    "HANDS"
   ],
   "source": "<OBJECT GLOBAL-OBJECTS\n\t(FLAGS RMUNGBIT INVISIBLE TOUCHBIT SURFACEBIT TRYTAKEBIT\n\t       OPENBIT SEARCHBIT TRANSBIT ONBIT RLANDBIT FIGHTBIT\n\t       STAGGERED WEARBIT)>",
   "referencedBy": [
    "GLOBAL-CHECK",
    "ACCESSIBLE?",
    "META-LOC",
    "V-EAT",
    "V-FIND",
    "PRE-PUT",
    "HACK-HACK",
    "HELD?"
   ]
  },
  "LOCAL-GLOBALS": {
   "name": "LOCAL-GLOBALS",
   "file": "gglobals.zil",
   "line": 12,
   "endLine": 24,
   "desc": null,
   "ldesc": "F",
   "fdesc": "F",
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "ZZMGCK"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": "PATH-OBJECT",
   "contfcn": "0",
   "globals": [
    "GLOBAL-OBJECTS"
   ],
   "pseudo": [
    "FOOBAR",
    "V-WALK"
   ],
   "otherProps": {
    "ADVFCN": [
     "0"
    ],
    "VTYPE": [
     "1"
    ],
    "SIZE": [
     "0"
    ],
    "CAPACITY": [
     "0"
    ]
   },
   "contents": [
    "CLEFT",
    "IRON-DOOR",
    "JEWEL-DOOR",
    "WOODEN-DOOR",
    "ROBOT",
    "CLIFF-OBJECT",
    "STONE-WALL",
    "LAKE",
    "LEDGE",
    "GLOBAL-ROPE",
    "GLOBAL-MAN",
    "LADDER",
    "AQUEDUCT",
    "WATER-CHANNEL",
    "MOSS",
    "FISH",
    "RUBBLE",
    "CHASM",
    "GLOBAL-WATER",
    "CPDOOR",
    "CPEWL",
    "CPWWL",
    "CPSWL",
    "CPNWL",
    "GUARDIAN",
    "ROSE",
    "MASTER",
    "MIRROR",
    "PANEL",
    "CHANNEL",
    "WOODEN-WALL",
    "BRONZE-DOOR",
    "CELL-DOOR",
    "GOOD-LOCKED-DOOR",
    "LOCKED-DOOR",
    "FLAMING-PIT",
    "PARAPET-OBJ",
    "DUNGEON-PANEL",
    "DUNGEON-DOOR",
    "SECRET-DOOR",
    "PSEUDO-OBJECT",
    "STAIRS"
   ],
   "source": "<OBJECT LOCAL-GLOBALS\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ZZMGCK)\n\t(DESCFCN PATH-OBJECT)\n        (GLOBAL GLOBAL-OBJECTS)\n\t(ADVFCN 0)\n\t(FDESC \"F\")\n\t(LDESC \"F\")\n\t(PSEUDO \"FOOBAR\" V-WALK)\n\t(CONTFCN 0)\n\t(VTYPE 1)\n\t(SIZE 0)\n\t(CAPACITY 0)>",
   "referencedBy": [
    "GO-ON-LAKE",
    "ACCESSIBLE?"
   ]
  },
  "ROOMS": {
   "name": "ROOMS",
   "file": "gglobals.zil",
   "line": 28,
   "endLine": 29,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ROOMS\n\t(IN TO ROOMS)>",
   "referencedBy": [
    "GWIM",
    "GLOBAL-CHECK",
    "META-LOC",
    "DESCRIBE-ROOM",
    "FIRSTER",
    "HELD?"
   ]
  },
  "INTNUM": {
   "name": "INTNUM",
   "file": "gglobals.zil",
   "line": 31,
   "endLine": 35,
   "desc": "number",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "TOOLBIT"
   ],
   "synonyms": [
    "INTNUM"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT INTNUM\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM INTNUM)\n\t(FLAGS TOOLBIT)\n\t(DESC \"number\")>",
   "referencedBy": [
    "DIAL",
    "TM-DIAL-F",
    "V-RANDOM",
    "V-$WAIT"
   ]
  },
  "PSEUDO-OBJECT": {
   "name": "PSEUDO-OBJECT",
   "file": "gglobals.zil",
   "line": 37,
   "endLine": 40,
   "desc": "pseudo",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": "CRETIN-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PSEUDO-OBJECT\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"pseudo\")\n\t(ACTION CRETIN-FCN)>",
   "referencedBy": [
    "CHASM-FCN",
    "GLOBAL-CHECK",
    "ACCESSIBLE?",
    "V-FIND",
    "SHAKE-LOOP"
   ]
  },
  "IT": {
   "name": "IT",
   "file": "gglobals.zil",
   "line": 42,
   "endLine": 46,
   "desc": "random object",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "IT",
    "THEM",
    "HER",
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
   "source": "<OBJECT IT\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM IT THEM HER HIM)\n\t(DESC \"random object\")\n\t(FLAGS NDESCBIT TOUCHBIT)>",
   "referencedBy": [
    "MAIN-LOOP-1",
    "ITAKE-CHECK",
    "PERFORM"
   ]
  },
  "NOT-HERE-OBJECT": {
   "name": "NOT-HERE-OBJECT",
   "file": "gglobals.zil",
   "line": 48,
   "endLine": 50,
   "desc": "such thing",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": "NOT-HERE-OBJECT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT NOT-HERE-OBJECT\n\t(DESC \"such thing\" ;\"[not here]\")\n\t(ACTION NOT-HERE-OBJECT-F)>",
   "referencedBy": [
    "NOT-HERE-OBJECT-F",
    "MAIN-LOOP-1"
   ]
  },
  "BLESSINGS": {
   "name": "BLESSINGS",
   "file": "gglobals.zil",
   "line": 129,
   "endLine": 133,
   "desc": "blessings",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BLESSINGS",
    "GRACES"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BLESSINGS\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM BLESSINGS GRACES)\n\t(DESC \"blessings\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "V-COUNT"
   ]
  },
  "STAIRS": {
   "name": "STAIRS",
   "file": "gglobals.zil",
   "line": 135,
   "endLine": 141,
   "desc": "stairs",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "CLIMBBIT"
   ],
   "synonyms": [
    "STAIRS",
    "STEPS",
    "STAIRCASE",
    "STAIRWAY"
   ],
   "adjectives": [
    "STONE",
    "DARK",
    "MARBLE",
    "FORBIDDING",
    "STEEP"
   ],
   "action": "STAIRS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT STAIRS\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM STAIRS STEPS STAIRCASE STAIRWAY)\n\t(ADJECTIVE STONE DARK MARBLE FORBIDDING STEEP)\n\t(DESC \"stairs\")\n\t(FLAGS NDESCBIT CLIMBBIT)\n\t(ACTION STAIRS-F)>",
   "referencedBy": []
  },
  "SAILOR": {
   "name": "SAILOR",
   "file": "gglobals.zil",
   "line": 148,
   "endLine": 153,
   "desc": "sailor",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "SAILOR",
    "FOOTPAD",
    "AVIATOR"
   ],
   "adjectives": [],
   "action": "SAILOR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SAILOR\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM SAILOR FOOTPAD AVIATOR)\n\t(DESC \"sailor\")\n\t(FLAGS NDESCBIT)\n\t(ACTION SAILOR-FCN)>",
   "referencedBy": []
  },
  "GROUND": {
   "name": "GROUND",
   "file": "gglobals.zil",
   "line": 197,
   "endLine": 201,
   "desc": "ground",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "GROUND",
    "SAND",
    "DIRT",
    "FLOOR"
   ],
   "adjectives": [],
   "action": "GROUND-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GROUND\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM GROUND SAND DIRT FLOOR)\n\t(DESC \"ground\")\n\t(ACTION GROUND-FUNCTION)>",
   "referencedBy": [
    "GROUND-FUNCTION"
   ]
  },
  "GRUE": {
   "name": "GRUE",
   "file": "gglobals.zil",
   "line": 217,
   "endLine": 222,
   "desc": "lurking grue",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "GRUE"
   ],
   "adjectives": [
    "LURKING",
    "SINISTER",
    "HUNGRY",
    "SILENT"
   ],
   "action": "GRUE-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GRUE\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM GRUE)\n\t(ADJECTIVE LURKING SINISTER HUNGRY SILENT)\n\t(DESC \"lurking grue\")\n\t(ACTION GRUE-FUNCTION)>",
   "referencedBy": []
  },
  "LUNGS": {
   "name": "LUNGS",
   "file": "gglobals.zil",
   "line": 241,
   "endLine": 245,
   "desc": "blast of air",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "LUNGS",
    "AIR",
    "MOUTH",
    "BREATH"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LUNGS\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM LUNGS AIR MOUTH BREATH)\n\t(DESC \"blast of air\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "V-BREATHE"
   ]
  },
  "ME": {
   "name": "ME",
   "file": "gglobals.zil",
   "line": 247,
   "endLine": 252,
   "desc": "you",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "ACTORBIT"
   ],
   "synonyms": [
    "ME",
    "MYSELF",
    "SELF",
    "CRETIN"
   ],
   "adjectives": [],
   "action": "CRETIN-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ME\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ME MYSELF SELF CRETIN)\n\t(DESC \"you\")\n\t(FLAGS ACTORBIT)\n\t(ACTION CRETIN-FCN)>",
   "referencedBy": [
    "CHASM-FCN",
    "GUARDIANS",
    "FLAMING-PIT-F",
    "GLOBAL-ROPE-F",
    "REPELLENT-FCN",
    "CRETIN-FCN",
    "V-FIND"
   ]
  },
  "ADVENTURER": {
   "name": "ADVENTURER",
   "file": "gglobals.zil",
   "line": 300,
   "endLine": 305,
   "desc": "cretin",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT",
    "INVISIBLE",
    "SACREDBIT",
    "ACTORBIT"
   ],
   "synonyms": [
    "ADVENTURER"
   ],
   "adjectives": [],
   "action": "0",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "STRENGTH": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT ADVENTURER\n\t(SYNONYM ADVENTURER)\n\t(DESC \"cretin\")\n\t(FLAGS NDESCBIT INVISIBLE SACREDBIT ACTORBIT)\n\t(STRENGTH 0)\n\t(ACTION 0)>",
   "referencedBy": [
    "I-SWORD",
    "SWORD-FCN",
    "CPGOTO",
    "JIGS-UP",
    "GO",
    "PRINT-CONT",
    "GOTO"
   ]
  },
  "PATHOBJ": {
   "name": "PATHOBJ",
   "file": "gglobals.zil",
   "line": 307,
   "endLine": 313,
   "desc": "passage",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "TRAIL",
    "PATH"
   ],
   "adjectives": [
    "FOREST",
    "NARROW",
    "LONG",
    "WINDING"
   ],
   "action": "PATH-OBJECT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PATHOBJ\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM TRAIL PATH)\n        (ADJECTIVE FOREST NARROW LONG WINDING)\n\t(DESC \"passage\")\n\t(FLAGS NDESCBIT)\n\t(ACTION PATH-OBJECT)>",
   "referencedBy": []
  },
  "ZORKMID": {
   "name": "ZORKMID",
   "file": "gglobals.zil",
   "line": 323,
   "endLine": 327,
   "desc": "zorkmid",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "ZORKMID"
   ],
   "adjectives": [],
   "action": "ZORKMID-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ZORKMID\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ZORKMID)\n\t(DESC \"zorkmid\")\n\t(ACTION ZORKMID-FUNCTION)>",
   "referencedBy": []
  },
  "HANDS": {
   "name": "HANDS",
   "file": "gglobals.zil",
   "line": 337,
   "endLine": 342,
   "desc": "pair of hands",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT",
    "TOOLBIT"
   ],
   "synonyms": [
    "PAIR",
    "HANDS",
    "HAND"
   ],
   "adjectives": [
    "BARE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HANDS\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM PAIR HANDS HAND)\n\t(ADJECTIVE BARE)\n\t(DESC \"pair of hands\")\n\t(FLAGS NDESCBIT TOOLBIT)>",
   "referencedBy": [
    "BEAM-FUNCTION",
    "GWIM",
    "V-FIND",
    "IKILL",
    "PRE-DIG"
   ]
  }
 },
 "routines": {
  "I-SWORD": {
   "name": "I-SWORD",
   "file": "demons.zil",
   "line": 9,
   "endLine": 36,
   "source": "<ROUTINE I-SWORD (\"AUX\" (DEM <INT I-SWORD>) (NG 0) P T L)\n\t <COND (<IN? ,SWORD ,ADVENTURER>\n\t\t<COND (<AND <==? ,HERE ,CLIFF> <NOT ,MAN-GONE>> <SET NG 1>)\n\t\t      (<AND <==? ,HERE ,CLIFF-LEDGE> ,MAN-FLAG> <SET NG 1>)\n\t\t      (<INFESTED? ,HERE> <SET NG 2>)\n\t\t      (ELSE\n\t\t       <SET P 0>\n\t\t       <REPEAT ()\n\t\t\t       <COND (<0? <SET P <NEXTP ,HERE .P>>>\n\t\t\t\t      <RETURN>)\n\t\t\t\t     (<NOT <L? .P ,LOW-DIRECTION>>\n\t\t\t\t      <SET T <GETPT ,HERE .P>>\n\t\t\t\t      <SET L <PTSIZE .T>>\n\t\t\t\t      <COND (<EQUAL? .L ,UEXIT ,CEXIT ,DEXIT>\n\t\t\t\t\t     <COND (<INFESTED? <GETB .T 0>>\n\t\t\t\t\t\t    <SET NG 1>\n\t\t\t\t\t\t    <RETURN>)>)>)>>)>\n\t\t<COND (<==? .NG ,SWORD-STATE> <RFALSE>)\n\t\t      (<==? .NG 2>\n\t\t       <TELL \"Your sword has begun to glow very brightly.\" CR>)\n\t\t      (<1? .NG>\n\t\t       <TELL \"Your sword is glowing with a faint blue glow.\"\n\t\t\t     CR>)\n\t\t      (<0? .NG>\n\t\t       <TELL \"Your sword is no longer glowing.\" CR>)>\n\t\t<SETG SWORD-STATE .NG>\n\t\t<RTRUE>)\n\t       (ELSE <DISABLE .DEM> <RFALSE>)>>"
  },
  "INFESTED?": {
   "name": "INFESTED?",
   "file": "demons.zil",
   "line": 40,
   "endLine": 45,
   "source": "<ROUTINE INFESTED? (R \"AUX\" (F <FIRST? .R>)) \n\t <REPEAT ()\n\t\t <COND (<NOT .F> <RETURN <>>)\n\t\t       (<AND <FSET? .F ,ACTORBIT> <NOT <FSET? .F ,INVISIBLE>>>\n\t\t\t<RETURN .F>)\n\t\t       (<NOT <SET F <NEXT? .F>>> <RETURN <>>)>>>"
  },
  "FIND-WEAPON": {
   "name": "FIND-WEAPON",
   "file": "actions.zil",
   "line": 14,
   "endLine": 21,
   "source": "<ROUTINE FIND-WEAPON (O \"AUX\" W)\n\t <SET W <FIRST? .O>>\n\t <COND (<NOT .W>\n\t\t<RFALSE>)>\n\t <REPEAT ()\n\t\t <COND (<EQUAL? .W ,SWORD>\n\t\t\t<RETURN .W>)\n\t\t       (<NOT <SET W <NEXT? .W>>> <RFALSE>)>>>"
  },
  "SWORD-FCN": {
   "name": "SWORD-FCN",
   "file": "actions.zil",
   "line": 23,
   "endLine": 33,
   "source": "<ROUTINE SWORD-FCN ()\n\t <COND (,SWORD-IN-STONE?\n\t\t<COND (<VERB? TAKE MOVE>\n\t\t       <COND (<PROB 10>\n\t\t\t      <TELL\n\"Who do you think you are? Arthur?\" CR>)\n\t\t\t     (T <TELL\n\"The sword is deeply imbedded in the rock. You can't budge it.\" CR>)>)>)\n\t       (<AND <VERB? TAKE> <==? ,WINNER ,ADVENTURER>>\n\t\t<ENABLE <QUEUE I-SWORD -1>>\n\t\t<>)>>"
  },
  "LANTERN": {
   "name": "LANTERN",
   "file": "actions.zil",
   "line": 44,
   "endLine": 70,
   "source": "<ROUTINE LANTERN ()\n\t <COND (<VERB? THROW>\n\t\t<TELL \"The lamp smashes. The light is now out.\" CR>\n\t\t<DISABLE <INT I-LANTERN>>\n\t\t<REMOVE ,LAMP>\n\t\t<SETG CURRENT-LAMP ,BROKEN-LAMP>\n\t\t<MOVE ,BROKEN-LAMP ,HERE>)\n\t       (<VERB? LAMP-ON>\n\t\t<COND (<NOT <FSET? ,LAMP ,LIGHTBIT>>\n\t\t       <TELL \"A burned-out lamp won't light.\" CR>)\n\t\t      (ELSE\n\t\t       <ENABLE <INT I-LANTERN>>\n\t\t       <>)>)\n\t       (<VERB? LAMP-OFF>\n\t\t<COND (<NOT <FSET? ,LAMP ,LIGHTBIT>>\n\t\t       <TELL \"The lamp has already burned out.\" CR>)\n\t\t      (ELSE\n\t\t       <DISABLE <INT I-LANTERN>>\n\t\t       <>)>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (<NOT <FSET? ,LAMP ,LIGHTBIT>>\n\t\t       <TELL \"The lamp has burned out.\">)\n\t\t      (<FSET? ,LAMP ,ONBIT>\n\t\t       <TELL \"The lamp is on.\">)\n\t\t      (ELSE\n\t\t       <TELL \"The lamp is turned off.\">)>\n\t\t<CRLF>)>>"
  },
  "LIGHT-INT": {
   "name": "LIGHT-INT",
   "file": "actions.zil",
   "line": 72,
   "endLine": 81,
   "source": "<ROUTINE LIGHT-INT (OBJ TBL TICK)\n\t <COND (<0? .TICK>\n\t\t<FCLEAR .OBJ ,ONBIT>\n\t\t<FSET .OBJ ,RMUNGBIT>)>\n\t <COND (<OR <HELD? .OBJ> <IN? .OBJ ,HERE>>\n\t\t<COND (<0? .TICK>\n\t\t       <TELL\n\"You'd better have more light than from the \" D .OBJ \".\" CR>)\n\t\t      (T\n\t\t       <TELL <GET .TBL 1> CR>)>)>>"
  },
  "I-LANTERN": {
   "name": "I-LANTERN",
   "file": "actions.zil",
   "line": 83,
   "endLine": 87,
   "source": "<ROUTINE I-LANTERN (\"AUX\" TICK (TBL <VALUE LAMP-TABLE>))\n\t <ENABLE <QUEUE I-LANTERN <SET TICK <GET .TBL 0>>>>\n\t <LIGHT-INT ,LAMP .TBL .TICK>\n\t <COND (<NOT <0? .TICK>>\n\t\t<SETG LAMP-TABLE <REST .TBL 4>>)>>"
  },
  "CHASM-FCN": {
   "name": "CHASM-FCN",
   "file": "actions.zil",
   "line": 105,
   "endLine": 115,
   "source": "<ROUTINE CHASM-FCN ()\n\t <COND (<OR <VERB? LEAP>\n\t\t    <AND <VERB? PUT> <==? ,PRSO ,ME>>>\n\t\t<TELL\n\"You look before leaping and realize you would never survive.\" CR>)\n\t       (<VERB? CROSS>\n\t\t<TELL \"You'll have to find a bridge.\" CR>)\n\t       (<AND <VERB? PUT> <==? ,PRSI ,PSEUDO-OBJECT>>\n\t\t<TELL\n\"The \" D ,PRSO \" drops out of sight into the chasm.\" CR>\n\t\t<REMOVE ,PRSO>)>>"
  },
  "TUNNEL-OBJECT": {
   "name": "TUNNEL-OBJECT",
   "file": "actions.zil",
   "line": 117,
   "endLine": 121,
   "source": "<ROUTINE TUNNEL-OBJECT ()\n\t <COND (<AND <VERB? THROUGH> <GETP ,HERE ,P?IN>>\n\t\t<DO-WALK ,P?IN>\n\t\t<RTRUE>)\n\t       (T <PATH-OBJECT>)>>"
  },
  "CPEXIT": {
   "name": "CPEXIT",
   "file": "actions.zil",
   "line": 196,
   "endLine": 245,
   "source": "<ROUTINE CPEXIT (\"AUX\" FX NFX)\n\t#DECL ((FX NFX) FIX)\n\t<SETG CP-MOVED <>>\n\t<COND (<==? ,PRSO ,P?UP>\n\t       <COND (<==? ,CPHERE 1>\n\t\t      <COND (<==? <GET ,CPTABLE 2> -2>\n\t\t\t     <TELL\n\"With the help of the ladder, you exit the puzzle.\" CR>\n\t\t\t     ,CP-ANTE)\n\t\t\t    (T\n\t\t\t     <TELL\n\t\t\t      \"The exit is too far above your head.\" CR>\n\t\t\t     <RFALSE>)>)\n\t\t     (T\n\t\t      <TELL \"There is no way up.\" CR>\n\t\t      <RFALSE>)>)\n\t      (<AND <==? ,CPHERE 33>\n\t\t    <==? ,PRSO ,P?WEST>\n\t\t    ,CP-FLAG>\n\t       <FCLEAR ,CP ,TOUCHBIT>\n\t       ,CP-OUT)\n\t      (<==? ,PRSO ,P?DOWN>\n\t       <TELL \"There's no way down here.\" CR>\n\t       <RFALSE>)\n\t      (<AND <==? ,CPHERE 33>\n\t\t    <==? ,PRSO ,P?WEST>>\n\t       <TELL \"The metal door bars the way.\" CR>\n\t       <RFALSE>)\n\t      (T\n\t       <SET FX <LKP ,PRSO ,CPEXITS>>\n\t       <COND (<OR <G? <SET NFX <+ .FX ,CPHERE>> 36>\n\t\t\t  <L? .NFX 0>\n\t\t\t  <ILLCP ,CPHERE .FX>>\n\t\t      <TELL \"There is a wall there.\" CR>\n\t\t      <RFALSE>)\n\t\t     (<EQUAL? <ABS .FX> 1 6>\n\t\t      <CPMOVE .FX>)\n\t\t     (<AND <G? .FX 0> ; \"SW AND SE\"\n\t\t\t   <EQUAL? 0\n\t\t\t\t   <GET ,CPTABLE <+ ,CPHERE 6>>\n\t\t\t\t   <GET ,CPTABLE <+ ,CPHERE <- .FX 6>>>>>\n\t\t      <CPMOVE .FX>)\n\t\t     (<AND <L? .FX 0>\n\t\t\t   <EQUAL? 0\n\t\t\t\t   <GET ,CPTABLE <- ,CPHERE 6>>\n\t\t\t\t   <GET ,CPTABLE <+ <+ ,CPHERE 6> .FX>>>>\n\t\t      <CPMOVE .FX>)\n\t\t     (T\n\t\t      <TELL \"There is a wall there.\" CR>)>\n\t       <RFALSE>)>>"
  },
  "ILLCP": {
   "name": "ILLCP",
   "file": "actions.zil",
   "line": 252,
   "endLine": 258,
   "source": "<ROUTINE ILLCP (ONE TWO)\n\t <COND (<AND <==? <MOD .ONE 6> 0>\n\t\t     <EQUAL? .TWO ,MINUS-FIVE 1 7>> <RTRUE>)\n\t       (<AND <==? <MOD .ONE 6> 1>\n\t\t     <EQUAL? .TWO ,MINUS-SEVEN ,MINUS-ONE 5>> <RTRUE>)\n\t       (<AND <L? .ONE 7> <L? .TWO ,MINUS-FOUR>> <RTRUE>)\n\t       (<AND <G? .ONE 30> <G? .TWO 4>> <RTRUE>)>>"
  },
  "CPMOVE": {
   "name": "CPMOVE",
   "file": "actions.zil",
   "line": 260,
   "endLine": 264,
   "source": "<ROUTINE CPMOVE (FX)\n\t <COND (<0? <GET ,CPTABLE <SET FX <+ ,CPHERE .FX>>>>\n\t        <CPGOTO .FX>)\n\t       (T\n\t        <TELL \"There is a wall there.\" CR>)>>"
  },
  "CPENTER": {
   "name": "CPENTER",
   "file": "actions.zil",
   "line": 266,
   "endLine": 272,
   "source": "<ROUTINE CPENTER ()\n\t<COND (<OR <NOT <==? ,YEAR ,YEAR-PRESENT>> ,CPBLOCK-FLAG>\n\t       <TELL \"The hole is blocked by sandstone.\" CR>\n\t       <RFALSE>)\n\t      (T\n\t       <SETG CPHERE 1>\n\t       ,CP)>>"
  },
  "CPANT-ROOM": {
   "name": "CPANT-ROOM",
   "file": "actions.zil",
   "line": 274,
   "endLine": 286,
   "source": "<ROUTINE CPANT-ROOM (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a small square room, in the middle of which is a round hole\">\n\t\t<COND (<OR ,CPBLOCK-FLAG <NOT <==? ,YEAR ,YEAR-PRESENT>>>\n\t\t       <TELL\n\t\t\t\" which is blocked by smooth sandstone.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\" through which you can discern the floor some ten feet below.\nThe area under the hole is dark, but it appears to be completely enclosed\nin rock. In any event, it doesn't seem likely that you could climb back up.\nExits are west and, up a few steps, north.\" CR>)>)>>"
  },
  "CPLADDER-OBJECT": {
   "name": "CPLADDER-OBJECT",
   "file": "actions.zil",
   "line": 292,
   "endLine": 297,
   "source": "<ROUTINE CPLADDER-OBJECT ()\n\t <COND (<==? <GET ,CPTABLE <- ,CPHERE 1>> -3>\n\t\t<CPLADDER-JUNK <>>)\n\t       (<==? <GET ,CPTABLE <+ ,CPHERE 1>> -2>\n\t\t<CPLADDER-JUNK T>)\n\t       (T <TELL \"I can't see any ladder here.\" CR>)>>"
  },
  "CPLADDER-JUNK": {
   "name": "CPLADDER-JUNK",
   "file": "actions.zil",
   "line": 299,
   "endLine": 307,
   "source": "<ROUTINE CPLADDER-JUNK (FLG)\n\t <COND (<VERB? CLIMB-UP CLIMB-FOO>\n\t\t<COND (<AND .FLG <==? ,CPHERE 1>>\n\t\t       <SETG CPSOLVE-FLAG T>\n\t\t       <GOTO ,CP-ANTE>)\n\t\t      (T\n\t\t       <TELL\n\"You hit your head on the ceiling and fall off the ladder.\" CR>)>)\n\t       (T <TELL \"Come, come!\" CR>)>> "
  },
  "CPWALL-OBJECT": {
   "name": "CPWALL-OBJECT",
   "file": "actions.zil",
   "line": 309,
   "endLine": 367,
   "source": "<ROUTINE CPWALL-OBJECT (\"AUX\" WL NWL NXT NNXT CNT TOP (SNAP <>))\n\t#DECL ((NXT WL NNXT NWL) FIX (UVEC) <UVECTOR [REST FIX]>)\n\t<COND (<VERB? MOVE> <TELL \"You can't grab the wall to pull it.\" CR>)\n\t      (<VERB? PUSH>\n\t       <SET NXT <CPNEXT ,CPHERE ,PRSO>>\n\t       <COND (<0? .NXT>\n\t\t      <TELL \"The wall doesn't budge.\" CR>\n\t\t      <RTRUE>)>\n\t       <SET WL <GET ,CPTABLE .NXT>>\n\t       <COND (<0? .WL>\n\t\t      <TELL \"There is only a passage in that direction.\" CR>)\n\t\t     (<1? .WL>\n\t\t      <TELL \"The wall doesn't budge.\" CR>)\n\t\t     (<0? <SET NNXT <CPNEXT .NXT ,PRSO>>>\n\t\t      <TELL \"The wall barely gives.\" CR>)\n\t\t     (<NOT <0? <SET NWL <GET ,CPTABLE .NNXT>>>>\n\t\t      <TELL \"The wall barely gives.\" CR>)\n\t\t     (T\n\t\t      <TELL\n\"The wall slides forward and you follow it\">\n\t   \t      <COND (,CPPUSH-FLAG <TELL \" to this position:\" CR>)\n\t\t\t    (T\n\t\t\t     <SETG SCORE <+ ,SCORE 1>>\n\t\t\t     <TELL\n\"....|\nThe architecture of this region is getting complex, so that further\ndescriptions will be diagrams of the immediate vicinity in a 3x3\ngrid. The walls here are rock, but of two different types - sandstone\nand marble. The following notations will be used:|\n\">\n\t\t\t     <FIXED-FONT-ON>\n\t\t\t     <TELL\n\"|\n  ..  = your position (middle of grid)|\n  MM  = marble wall|\n  SS  = sandstone wall|\n  ??  = unknown (blocked by walls)|\n|\n\">\n\t\t\t     <FIXED-FONT-OFF>)>\n\t\t      <SETG CPPUSH-FLAG T>\n\t\t      <PUT ,CPTABLE .NXT 0>\n\t\t      <PUT ,CPTABLE .NNXT .WL>\n\t\t      <COND (<NOT <EQUAL? .NNXT 0>>\n\t\t\t     <SET TOP <* 8 <- .NNXT 1>>>\n\t\t\t     <SET CNT <GET ,CPOBJS .TOP>>\n\t\t\t     <REPEAT ()\n\t\t\t\t     <COND (<0? .CNT> <RETURN>)\n\t\t\t\t\t   (T\n\t\t\t\t\t    <SET TOP <+ .TOP 1>>\n\t\t\t\t\t    <MOVE <GET ,CPOBJS .TOP> ,CP-OUT>\n\t\t\t\t\t    <COND (<NOT .SNAP>\n\t\t\t\t\t\t   <SET SNAP T>\n\t\t\t\t\t\t   <TELL\n\"You hear a soft \\\"snap\\\" from behind the wall you were pushing.\" CR>)>\n\t\t\t\t\t    <SET CNT <- .CNT 1>>)>>)>\n\t\t      <COND (<==? .NNXT 1>\n\t\t\t     <SETG CPBLOCK-FLAG T>)>\n\t\t      <CPGOTO .NXT>)>)>>"
  },
  "FIXED-FONT-ON": {
   "name": "FIXED-FONT-ON",
   "file": "actions.zil",
   "line": 369,
   "endLine": 369,
   "source": "<ROUTINE FIXED-FONT-ON () <PUT 0 8 <BOR <GET 0 8> 2>>>"
  },
  "FIXED-FONT-OFF": {
   "name": "FIXED-FONT-OFF",
   "file": "actions.zil",
   "line": 371,
   "endLine": 371,
   "source": "<ROUTINE FIXED-FONT-OFF() <PUT 0 8 <BAND <GET 0 8> -3>>>"
  },
  "CPGOTO": {
   "name": "CPGOTO",
   "file": "actions.zil",
   "line": 379,
   "endLine": 407,
   "source": "<ROUTINE CPGOTO (FX \"AUX\" F X CNT TOP)\n\t#DECL ((FX CNT TOP) FIX (F X) <OR FALSE OBJECT>)\n\t<SETG CP-MOVED T>\n\t<FCLEAR ,HERE ,TOUCHBIT>\n\t<SET TOP <* 8 <- ,CPHERE 1>>>\n\t<SET CNT <+ .TOP 1>>\n\t<SET F <FIRST? ,CP>>\n\t<REPEAT ()\n\t\t<SET X <NEXT? .F>>\n\t\t<COND (<NOT .F> <RETURN>)\n\t\t      (<==? .F ,ADVENTURER> T)\n\t\t      (T\n\t\t       <PUT ,CPOBJS .CNT .F>\n\t\t       <REMOVE .F>\n\t\t       <SET CNT <+ .CNT 1>>)>\n\t\t<COND (<NOT .X> <RETURN>)\n\t\t      (T <SET F .X>)>>\n\t<PUT ,CPOBJS .TOP <- <- .CNT .TOP> 1>>\n\t<SETG CPHERE .FX>\n\t<SET TOP <* 8 <- ,CPHERE 1>>>\n\t<SET CNT <GET ,CPOBJS .TOP>>\n\t<REPEAT ()\n\t\t<COND (<0? .CNT> <RETURN>)\n\t\t      (T\n\t\t       <SET TOP <+ .TOP 1>>\n\t\t       <MOVE <GET ,CPOBJS .TOP> ,CP>\n\t\t       <SET CNT <- .CNT 1>>)>>\n\t<PERFORM ,V?LOOK>\n\t<RTRUE>> "
  },
  "CPNEXT": {
   "name": "CPNEXT",
   "file": "actions.zil",
   "line": 409,
   "endLine": 413,
   "source": "<ROUTINE CPNEXT (RM OBJ \"AUX\" FX)\n\t#DECL ((RM) FIX (OBJ) OBJECT)\n\t<SET FX <LKP .OBJ ,CPWALLS>>\n\t<COND (<ILLCP .RM .FX> 0)\n\t      (T <+ .RM .FX>)>>"
  },
  "CPDOOR-F": {
   "name": "CPDOOR-F",
   "file": "actions.zil",
   "line": 415,
   "endLine": 430,
   "source": "<ROUTINE CPDOOR-F ()\n\t <COND (<AND <==? ,HERE ,CP> <NOT <==? ,CPHERE 33>>>\n\t\t<TELL \"I can't see any steel door here.\" CR>)\n\t       (<VERB? OPEN>\n\t\t<COND (,CP-FLAG <TELL \"The steel door has already opened.\" CR>)\n\t\t      (T <TELL \"You can't force it open.\" CR>)>)\n\t       (<VERB? CLOSE>\n\t\t<COND (,CP-FLAG <TELL\n\"There doesn't seem to be any way to close it.\" CR>)\n\t\t      (T <TELL \"Do you think it isn't already?\" CR>)>)\n\t       (<VERB? MUNG>\n\t\t<TELL\n\"The door is, to a first approximation, indestructible.\" CR>)\n\t       (<VERB? KNOCK>\n\t\t<TELL\n\"Besides a great amount of reverberation, nothing happens.\" CR>)>>"
  },
  "CP-ROOM": {
   "name": "CP-ROOM",
   "file": "actions.zil",
   "line": 432,
   "endLine": 442,
   "source": "<ROUTINE CP-ROOM (RARG)\n\t<COND (<==? .RARG ,M-ENTER>\n\t       <SETG CPHERE\n\t\t     <COND (<==? ,PRSO ,P?DOWN> 1)\n\t\t     \t   (T 33)>>)\n\t      (<==? .RARG ,M-LOOK>\n\t       <COND (,CPPUSH-FLAG <CPWHERE>)\n\t\t     (T\n\t\t      <TELL\n\"You are in a small square room bounded to the north and west with\nmarble walls and to the east and south with sandstone walls.\" CR>)>)>>   "
  },
  "CPNS": {
   "name": "CPNS",
   "file": "actions.zil",
   "line": 444,
   "endLine": 447,
   "source": "<ROUTINE CPNS (NUM)\n\t #DECL ((NUM) FIX)\n\t <COND (<OR <G? .NUM 36> <L? .NUM 1>> 1)\n\t       (T <GET ,CPTABLE .NUM>)>>"
  },
  "CPEW": {
   "name": "CPEW",
   "file": "actions.zil",
   "line": 449,
   "endLine": 452,
   "source": "<ROUTINE CPEW (NUM FOO)\n\t #DECL ((NUM FOO) FIX)\n\t <COND (<==? <MOD .NUM 6> .FOO> 1)\n\t       (T <GET ,CPTABLE .NUM>)>>"
  },
  "CPWHERE": {
   "name": "CPWHERE",
   "file": "actions.zil",
   "line": 454,
   "endLine": 499,
   "source": "<ROUTINE CPWHERE (\"AUX\"  (N <CPNS <+ ,CPHERE -6>>)\n\t\t\t (S <CPNS <+ ,CPHERE 6>>)\n\t\t\t (E <CPEW <+ ,CPHERE 1> 1>)\n\t\t\t (W <CPEW <+ ,CPHERE -1> 0>))\n\t#DECL ((N S E W) FIX)\n\t<FIXED-FONT-ON>\n\t<TELL \"      +\">\t\t\t      ;\"Top Row\"\n\t<CP-CORNER ,MINUS-SEVEN .N .W>\n\t<TELL \" \">\n\t<CP-ORTHO .N>\n\t<TELL \" \">\n\t<CP-CORNER ,MINUS-FIVE .N .E>\n\t<TELL \"+\" CR>\n\t<TELL \"West  +\">\t\t\t   ;\"Middle Row\"\n\t<CP-ORTHO .W>\n\t<TELL \" .. \">\n\t<CP-ORTHO .E>\n\t<TELL \"+  East\" CR>\n\t<TELL \"      +\">\t\t\t   ;\"Bottom Row\"\n\t<CP-CORNER 5 .S .W>\n\t<TELL \" \">\n\t<CP-ORTHO .S>\n\t<TELL \" \">\n\t<CP-CORNER 7 .S .E>\n\t<TELL \"+\" CR>\n\t<FIXED-FONT-OFF>\n\t<COND (<==? ,CPHERE 1>\n\t       <TELL\n\"In the ceiling above you is a large circular opening.\" CR>)\n\t      (<==? ,CPHERE 22>\n\t       <TELL\n\"The center of the floor here is noticeably depressed.\" CR>)\n\t      (<==? ,CPHERE 33>\n\t       <TELL\n\"In the center of the west wall is a steel door which is \">\n\t       <COND (,CP-FLAG <TELL \"open\">)\n\t\t     (T <TELL \"closed\">)>\n\t       <TELL\n\".\nOn one side of the door is a narrow slot.\" CR>)>\n\t<COND (<==? .E -2>\n\t       <TELL\n\"There is a ladder here, firmly attached to the east wall.\" CR>)>\n\t<COND (<==? .W -3>\n\t       <TELL\n\"There is a ladder here, firmly attached to the west wall.\" CR>)>>"
  },
  "CP-ORTHO": {
   "name": "CP-ORTHO",
   "file": "actions.zil",
   "line": 503,
   "endLine": 507,
   "source": "<ROUTINE CP-ORTHO (CONTENTS)\n\t#DECL ((CONTENTS) FIX)\n\t<COND (<0? .CONTENTS> <TELL \"  \">)\n\t      (<1? .CONTENTS> <TELL \"MM\">)\n\t      (T <TELL \"SS\">)>>"
  },
  "CP-CORNER": {
   "name": "CP-CORNER",
   "file": "actions.zil",
   "line": 511,
   "endLine": 521,
   "source": "<ROUTINE CP-CORNER (DIR COL ROW \"AUX\" LOCN)\n\t#DECL ((DIR COL ROW) FIX)\n\t<SET LOCN <+ ,CPHERE .DIR>>\n\t<COND (<AND <NOT <==? .COL 0>> <NOT <==? .ROW 0>>> <TELL \"??\">)\n\t      (<ILLCP ,CPHERE .DIR> <TELL \"MM\">)\n\t      (<0? <SET COL\n\t\t\t<COND (<OR <L? .LOCN 1> <G? .LOCN 36>> 1)\n\t\t\t      (T <GET ,CPTABLE .LOCN>)>>>\n\t       <TELL \"  \">)\n\t      (<1? .COL> <TELL \"MM\">)\n\t      (T <TELL \"SS\">)>>"
  },
  "CP-SLOT-FCN": {
   "name": "CP-SLOT-FCN",
   "file": "actions.zil",
   "line": 523,
   "endLine": 542,
   "source": "<ROUTINE CP-SLOT-FCN ()\n\t<COND (<VERB? PUT>\n\t       <COND (<G? <GETP ,PRSO ,P?SIZE> 10>\n\t\t      <TELL \"It doesn't fit.\" CR>\n\t\t      <RTRUE>)>\n\t       <REMOVE ,PRSO>\n\t       <COND (<==? ,PRSO ,LORE-BOOK>\n\t       \t      <SETG CP-FLAG T>\n\t              <TELL\n\"The book drops into the slot and vanishes. The metal door slides\nopen, revealing a passageway to the west, and a sign flashes:|\n    \\\"Royal Puzzle Exit Fee Paid|\n          Item Confiscated\\\"\" CR>)\n\t\t     (<FSET? ,PRSO ,ACTORBIT>\n\t\t      <TELL <RANDOM-ELEMENT ,YUKS> CR>)\n\t\t     (T\n\t\t      <TELL\n\"The item vanishes into the slot. A moment later, a previously\nunseen sign flashes \\\"Garbage In, Garbage Out\\\" and spews out\nthe \" D ,PRSO \" (now atomized).\" CR>)>)>>"
  },
  "CPOUT-ROOM": {
   "name": "CPOUT-ROOM",
   "file": "actions.zil",
   "line": 544,
   "endLine": 551,
   "source": "<ROUTINE CPOUT-ROOM (RARG)\n\t<COND (<==? .RARG ,M-LOOK>\n\t       <TELL\n\"You are in a narrow room, lit from above. A flight of steps leads up\nto the north, and a \">\n\t       <COND (,CP-FLAG <TELL \"passage\">)\n\t\t     (T <TELL \"metal door\">)>\n\t       <TELL \" leads to the east.\" CR>)>>"
  },
  "MRGO": {
   "name": "MRGO",
   "file": "actions.zil",
   "line": 572,
   "endLine": 588,
   "source": "<ROUTINE MRGO (\"AUX\" TORM)\n\t <COND (<EQUAL? ,PRSO ,P?NORTH ,P?NW ,P?NE>\n\t\t<SET TORM <LKP ,HERE ,R-NORTHS>>)\n\t       (T <SET TORM <LKP ,HERE ,R-SOUTHS>>)>\n\t <COND (<EQUAL? ,PRSO ,P?NORTH ,P?SOUTH>\n\t        <COND (<==? ,MLOC .TORM>\n\t\t       <COND (<0? <MOD ,MDIR 180>>\n\t\t\t      <TELL\n \"There is a wooden wall blocking your way.\" CR>\n\t\t\t      <RFALSE>)\n\t\t\t     (<MIRIN <>> ,IN-MIRROR)\n\t\t\t     (T <MIRBLOCK> <RFALSE>)>)\n\t\t     (T .TORM)>)\n\t       (<==? ,MLOC .TORM>\n\t        <COND (<0? <MOD ,MDIR 180>> <GO-E-W .TORM>)\n\t\t      (T <MIRBLOCK> <RFALSE>)>)\n\t       (T .TORM)>>"
  },
  "MIRBLOCK": {
   "name": "MIRBLOCK",
   "file": "actions.zil",
   "line": 590,
   "endLine": 598,
   "source": "<ROUTINE MIRBLOCK (\"AUX\" MD)\n\t <SET MD ,MDIR>\n\t <COND (<==? ,PRSO ,P?SOUTH>\n\t        <SET MD <MOD <+ ,MDIR 180> 360>>)>\n\t <COND (<OR <AND <==? .MD 270> <NOT ,MR1-FLAG>>\n\t\t    <AND <==? .MD 90> <NOT ,MR2-FLAG>>>\n\t        <TELL \"There is a large broken mirror blocking your way.\" CR>)\n\t       (T\n\t        <TELL \"There is a large mirror blocking your way.\" CR>)>>"
  },
  "GO-E-W": {
   "name": "GO-E-W",
   "file": "actions.zil",
   "line": 600,
   "endLine": 603,
   "source": "<ROUTINE GO-E-W (RM)\n\t<COND (<EQUAL? ,PRSO ,P?NE ,P?SE>\n\t       <LKP .RM ,R-EASTS>)\n\t      (T <LKP .RM ,R-WESTS>)>>"
  },
  "EWTELL": {
   "name": "EWTELL",
   "file": "actions.zil",
   "line": 612,
   "endLine": 631,
   "source": "<ROUTINE EWTELL (RM \"AUX\" (EAST? <>) (M1? <>) MWIN)\n\t <COND (<OR <EQUAL? .RM ,MRAE ,MRBE ,MRCE>\n\t\t    <EQUAL? .RM ,MRGE ,MRCE>>\n\t\t<SET EAST? T>)>\n\t <COND (<==? <+ ,MDIR <COND (.EAST? 0) (T 180)>> 180>\n\t\t<SET M1? T>)>\n\t <COND (.M1? <SET MWIN ,MR1-FLAG>) (T <SET MWIN ,MR2-FLAG>)>\n\t <TELL \"You are in a narrow room, whose \"\n\t       <COND (.EAST? \"west\") (T \"east\")>\n\t       \" wall is a large \"\n\t       <COND (.MWIN \"mirror.\")\n\t\t     (T \"wooden panel\nwhich once contained a mirror.\")>\n\t       CR>\n\t <COND (<AND .M1? ,MIRROR-OPEN-FLAG>\n\t\t<TELL <COND (.MWIN\n\"The mirror is mounted on a panel which has been opened outward.\")\n\t\t\t    (T \"The panel has been opened outward.\")>\n\t\t      CR>)>\n\t <TELL \"The opposite wall is solid rock.\" CR>>"
  },
  "MRDEW": {
   "name": "MRDEW",
   "file": "actions.zil",
   "line": 635,
   "endLine": 639,
   "source": "<ROUTINE MRDEW (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-LOOK>\n\t        <EWTELL ,HERE>\n\t        <SETG GUARDIANS-SEEN T>\n\t\t<TELL \"Somewhat to the south\" ,GUARDSTR CR>)>>"
  },
  "MRCEW": {
   "name": "MRCEW",
   "file": "actions.zil",
   "line": 641,
   "endLine": 645,
   "source": "<ROUTINE MRCEW (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-LOOK>\n\t        <EWTELL ,HERE>\n\t        <SETG GUARDIANS-SEEN T>\n\t\t<TELL \"Somewhat to the north\" ,GUARDSTR CR>)>>"
  },
  "MRBEW": {
   "name": "MRBEW",
   "file": "actions.zil",
   "line": 647,
   "endLine": 650,
   "source": "<ROUTINE MRBEW (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-LOOK>\n\t        <EWTELL ,HERE>\n\t        <TELL \"To the north and south are large hallways.\" CR>)>>"
  },
  "MRAEW": {
   "name": "MRAEW",
   "file": "actions.zil",
   "line": 652,
   "endLine": 655,
   "source": "<ROUTINE MRAEW (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-LOOK>\n\t        <EWTELL ,HERE>\n\t        <TELL \"To the north is a large hallway.\" CR>)>>"
  },
  "LOOK-TO": {
   "name": "LOOK-TO",
   "file": "actions.zil",
   "line": 663,
   "endLine": 731,
   "source": "<ROUTINE LOOK-TO (RMN RMS \"AUX\" (NORTH? <>) (NTELL <>) (STELL <>)\n\t\t  \t\tMIR? (M1? <>) DIR)\n\t <COND (<NOT <EQUAL? ,HERE ,MREYE ,FRONT-DOOR>>\n\t\t<TELL\n\"This is a part of the long hallway. The east and west walls are\ndressed stone. In the center of the hall is a shallow stone channel.\nIn the center of the room the channel widens into a large hole around\nwhich is engraved a compass rose.\" CR>)>\n\t <COND (<==? ,HERE ,MRG>\n\t\t<SETG GUARDIANS-SEEN T>\n\t\t<TELL\n\"On either side of you are identical stone statues holding bludgeons. They\nappear ready to strike, though, for the moment, they remain impassive.\" CR>)\n\t       (<==? ,HERE ,MRC>\n\t        <SETG GUARDIANS-SEEN T>\n\t\t<TELL \"Somewhat to the north\" ,GUARDSTR CR>\n\t\t<SET NTELL T>)\n\t       (<==? ,HERE ,FRONT-DOOR>\n\t\t<TELL\n\"You are in a north-south hallway which ends, to the north, at a large wooden\ndoor.\" CR>\n\t\t<SET NTELL T>)\n\t       (<==? ,HERE ,MRD>\n\t        <SETG GUARDIANS-SEEN T>\n\t\t<TELL \"Somewhat to the south\" ,GUARDSTR CR>\n\t\t<SET STELL T>)\n\t       (<==? ,HERE ,MRA>\n\t\t<TELL \"The hallway continues to the south.\" CR>\n\t\t<SET STELL T>)>\n\t <COND (<EQUAL? ,MLOC .RMN .RMS>\n\t        <COND (<==? ,MLOC .RMN>\n\t\t       <SET NORTH? T>\n\t\t       <SET NTELL T>\n\t\t       <SET DIR \"nor\">)\n\t\t      (T\n\t\t       <SET STELL T>\n\t\t       <SET DIR \"sou\">)>\n\t        <SET MIR?\n\t\t    <COND (<AND .NORTH? <G? ,MDIR 180> <L? ,MDIR 359>>\n\t\t\t   <SET M1? T>\n\t\t\t   ,MR1-FLAG)\n\t\t\t  (<AND <NOT .NORTH?> <G? ,MDIR 0> <L? ,MDIR 179>>\n\t\t\t   <SET M1? T>\n\t\t\t   ,MR1-FLAG)\n\t\t\t  (T ,MR2-FLAG)>>\n\t        <COND (<0? <MOD ,MDIR 180>>\n\t\t       <TELL \"The \"\n\t\t\t     .DIR\n\"th side of the room is divided by a wooden wall into small\nhallways to the \">\n\t\t       <TELL .DIR \"theast and \">\n\t\t       <TELL .DIR \"thwest.\" CR>)\n\t\t      (T\n\t\t       <TELL <COND (.MIR? \"A large mirror fills the \")\n\t\t\t\t   (T \"A large panel fills the \")>\n\t\t\t     .DIR\n\t\t\t     \"th side of the hallway.\" CR>\n\t\t       <COND (<AND .M1? ,MIRROR-OPEN-FLAG>\n\t\t\t      <TELL <COND (.MIR?\n\"The mirror is mounted on a panel which has been opened outward.\")\n\t\t\t\t\t  (T\n\"The panel has been opened outward.\")> CR>)>)>)>\n\t <COND (<AND <NOT .NTELL> <NOT .STELL>>\n\t\t<TELL \"The corridor continues north and south.\" CR>)\n\t       (<NOT .NTELL>\n\t\t<TELL \"The corridor continues north.\" CR>)\n\t       (<NOT .STELL>\n\t\t<TELL \"The corridor continues south.\" CR>)>\n\t <RTRUE>>"
  },
  "MRDF": {
   "name": "MRDF",
   "file": "actions.zil",
   "line": 733,
   "endLine": 735,
   "source": "<ROUTINE MRDF (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-LOOK>\n\t        <LOOK-TO ,FRONT-DOOR ,MRG>)>>"
  },
  "MRCF": {
   "name": "MRCF",
   "file": "actions.zil",
   "line": 737,
   "endLine": 739,
   "source": "<ROUTINE MRCF (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-LOOK>\n\t        <LOOK-TO ,MRG ,MRB>)>>"
  },
  "MRBF": {
   "name": "MRBF",
   "file": "actions.zil",
   "line": 741,
   "endLine": 743,
   "source": "<ROUTINE MRBF (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-LOOK>\n\t        <LOOK-TO ,MRC ,MRA>)>>"
  },
  "MRAF": {
   "name": "MRAF",
   "file": "actions.zil",
   "line": 745,
   "endLine": 747,
   "source": "<ROUTINE MRAF (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-LOOK>\n\t        <LOOK-TO ,MRB <>>)>>"
  },
  "GUARDIANS": {
   "name": "GUARDIANS",
   "file": "actions.zil",
   "line": 755,
   "endLine": 793,
   "source": "<ROUTINE GUARDIANS (\"OPTIONAL\" (RARG <>))\n   \t <COND (<==? .RARG ,M-LOOK>\n\t\t<COND (<==? ,HERE ,MRG>\n\t\t       <LOOK-TO ,MRD ,MRC>)\n\t\t      (T\n\t\t       <EWTELL ,HERE>\n\t\t       <TELL\n\"To the east and west are the Guardians of Zork, in perfect symmetry.\nFrom here, it's hard to tell which of the two is a reflection!\" CR>)>)\n\t       (<AND <==? .RARG ,M-ENTER> <NOT ,INVIS>>\n\t        <JIGS-UP\n\"The Guardians awake, and in perfect unison, pulverize you with\ntheir bludgeons. Satisfied, they resume their posts.\">)\n\t       (<NOT <==? .RARG ,M-END>> <RFALSE>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (<==? ,HERE ,IN-MIRROR>\n\t\t       <TELL \"You can't see them from here.\" CR>)\n\t\t      (T <TELL\n\"The Guardians are quite impressive. I wouldn't get in their way if\nI were you!\" CR>)>)\n\t       (<AND <VERB? THROW> <==? ,PRSI ,GUARDIAN>>\n\t\t<COND (<EQUAL? ,PRSO ,ME>\n\t\t       <TELL \"You step\">)\n\t\t      (T\n\t\t       <TELL \"The \" D ,PRSO \" falls\">\n\t\t       <REMOVE ,PRSO>)>\n\t\t<TELL\n\" in front of the Guardians, who \">\n\t\t<COND (<EQUAL? ,PRSO ,ME>\n\t\t       <TELL \"decimate you\">)\n\t\t      (T <TELL \"destroy it\">)>\n\t\t<TELL \" in perfect\nunison. Satisfied, they resume their posts.\" CR>)\n\t       (<VERB? ATTACK>\n\t        <TELL\n\"You aren't close enough, and even if you were, the fight\nwould be a bit one-sided.\" CR>)\n\t       (<VERB? HELLO>\n\t        <TELL \"The statues are impassive.\" CR>)>>"
  },
  "MIRROR-DIR?": {
   "name": "MIRROR-DIR?",
   "file": "actions.zil",
   "line": 795,
   "endLine": 807,
   "source": "<ROUTINE MIRROR-DIR? (DIR RM \"AUX\" TBL)\n         <SET TBL <COND (<==? .DIR ,P?NORTH> ,R-NORTHS) (T ,R-SOUTHS)>>\n\t <COND (<AND <GETPT .RM .DIR>\n\t\t     <==? ,MLOC <LKP .RM .TBL>>>\n\t\t<COND (<AND <==? .DIR ,P?NORTH>\n\t\t\t    <G? ,MDIR 180>\n\t\t\t    <L? ,MDIR 360>>\n\t\t       1)\n\t\t      (<AND <==? .DIR ,P?SOUTH>\n\t\t\t    <G? ,MDIR 0>\n\t\t\t    <L? ,MDIR 180>>\n\t\t       1)\n\t\t      (T 2)>)>>"
  },
  "WOODEN-WALL-F": {
   "name": "WOODEN-WALL-F",
   "file": "actions.zil",
   "line": 809,
   "endLine": 815,
   "source": "<ROUTINE WOODEN-WALL-F ()\n\t <COND (<AND <0? <MOD ,MDIR 180>>\n\t\t     <OR <MIRROR-DIR? ,P?NORTH ,HERE>\n\t\t\t <MIRROR-DIR? ,P?SOUTH ,HERE>>>\n\t\t<COND (<VERB? PUSH>\n\t\t       <TELL \"The structure won't budge.\" CR>)>)\n\t       (T <TELL \"I can't see any wooden wall here.\" CR>)>>"
  },
  "MIRROR-HERE?": {
   "name": "MIRROR-HERE?",
   "file": "actions.zil",
   "line": 817,
   "endLine": 831,
   "source": "<ROUTINE MIRROR-HERE? (RM \"AUX\" TMP)\n\t <COND (<OR <EQUAL? ,HERE ,MRAE ,MRAW ,MRBE>\n\t\t    <EQUAL? ,HERE ,MRBW ,MRCE ,MRCW>\n\t\t    <EQUAL? ,HERE ,MRGE ,MRGW ,MRDE>\n\t\t    <EQUAL? ,HERE ,MRDW>>\n\t\t<COND (<==? 180\n\t\t\t    <+ ,MDIR <COND (<OR <EQUAL? .RM ,MRAE ,MRBE ,MRCE>\n\t\t\t\t\t\t<EQUAL? .RM ,MRGE ,MRDE>> 0)\n\t\t\t\t\t   (T 180)>>>\n\t\t       1)\n\t\t      (T 2)>)\n\t       (<0? <MOD ,MDIR 180>> <RFALSE>)\n\t       (<SET TMP <MIRROR-DIR? ,P?NORTH .RM>> .TMP)\n\t       (<SET TMP <MIRROR-DIR? ,P?SOUTH .RM>> .TMP)\n\t       (T <RFALSE>)>>"
  },
  "MIRROR-FUNCTION": {
   "name": "MIRROR-FUNCTION",
   "file": "actions.zil",
   "line": 833,
   "endLine": 873,
   "source": "<ROUTINE MIRROR-FUNCTION (\"AUX\" MIRROR)\n \t <COND (<NOT <SET MIRROR <MIRROR-HERE? ,HERE>>>\n\t        <TELL \"I can't see any mirror here.\" CR>)\n\t       (<VERB? OPEN MOVE>\n\t        <TELL\n\"I don't see a way to open the mirror here.\" CR>)\n\t       (<VERB? LOOK-INSIDE>\n\t        <COND (<OR <AND <==? .MIRROR 1> ,MR1-FLAG> ,MR2-FLAG>\n\t\t       <COND (,INVIS\n\t\t\t      <TELL\n\"Amazingly, you have no reflection!\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"A disheveled adventurer stares back at you.\" CR>)>)\n\t\t      (T\n\t\t       <TELL\n\"You have destroyed the mirror, or have you forgotten?\" CR>)>)\n\t       (<VERB? MUNG>\n\t        <COND (<1? .MIRROR>\n\t\t       <COND (,MR1-FLAG\n\t\t\t      <SETG MR1-FLAG <>>\n\t\t\t      <TELL\n\"The mirror breaks, revealing a wooden panel behind it. The glistening\nfragments of mirror quietly sparkle into nonexistance.\" CR>)\n\t\t\t     (T <TELL \"The mirror has already been broken.\"\n\t\t\t\t      CR>)>)\n\t\t      (,MR2-FLAG\n\t\t       <SETG MR2-FLAG <>>\n\t\t       <TELL\n\"The mirror breaks, revealing a wooden panel behind it. The glistening\nfragments of mirror quietly sparkle into nonexistance.\" CR>)\n\t\t      (T <TELL \"The mirror has already been broken.\" CR>)>)\n\t       (<OR <AND <==? .MIRROR 1> <NOT ,MR1-FLAG>> <NOT ,MR2-FLAG>>\n\t        <TELL\n\"There's no mirror left.\" CR>)\n\t       (<VERB? PUSH>\n\t        <TELL <COND (<==? .MIRROR 1>\n\"The mirror is mounted on a wooden panel which moves slightly inward\nas you push, and back out when you let go. It feels fragile.\")\n\t\t\t    (T\n\"The mirror is unyielding, but seems fragile.\")> CR>)>>"
  },
  "PANEL-FUNCTION": {
   "name": "PANEL-FUNCTION",
   "file": "actions.zil",
   "line": 875,
   "endLine": 894,
   "source": "<ROUTINE PANEL-FUNCTION (\"AUX\" MIRROR)\n \t <COND (<NOT <SET MIRROR <MIRROR-HERE? ,HERE>>>\n\t        <TELL \"I can't see any panel here.\" CR>)\n\t       (<VERB? OPEN MOVE>\n\t        <TELL \"I don't see a way to open the panel here.\" CR>)\n\t       (<VERB? MUNG>\n\t        <COND (<==? .MIRROR 1>\n\t\t       <COND (,MR1-FLAG\n\t\t\t      <TELL ,MIRROR-FIRST CR>)\n\t\t\t     (T <TELL\n\"The panel is not that easily destroyed.\" CR>)>)\n\t\t      (,MR2-FLAG\n\t\t       <TELL ,MIRROR-FIRST CR>)\n\t\t      (T <TELL \"The panel is not that easily destroyed.\" CR>)>)\n\t       (<VERB? PUSH>\n\t        <TELL <COND (<==? .MIRROR 1>\n\"The wooden panel moves slightly inward as you push, and back out\nwhen you let go.\")\n\t\t\t    (T\n\"The panel is unyielding.\")> CR>)>>"
  },
  "MIROUT": {
   "name": "MIROUT",
   "file": "actions.zil",
   "line": 902,
   "endLine": 930,
   "source": "<ROUTINE MIROUT (\"AUX\" DIR RM)\n\t <COND (<==? ,PRSO ,P?OUT> <SET DIR 1>)\n\t       (T <SET DIR <LKP ,PRSO ,DIRVEC>>)>\n\t <COND (,MIRROR-OPEN-FLAG\n\t        <COND (<OR <==? .DIR 1>\n\t\t\t   <==? <MOD <+ ,MDIR 270> 360> .DIR>>\n\t\t       <COND (<0? <MOD ,MDIR 180>>\n\t\t\t      <MIREW>)\n\t\t\t     (T <MIRNS <L? ,MDIR 180> T>)>)\n\t\t      (T\n\t\t       <TELL \"There's a wall there.\">\n\t\t       <RFALSE>)>)\n\t       (,WOOD-OPEN-FLAG\n\t        <COND (<OR <==? .DIR 1>\n\t\t\t   <==? <MOD <+ ,MDIR 180> 360> .DIR>>\n\t\t       <COND (<0? ,MDIR> <SET RM <>>) (T <SET RM T>)>\n\t\t       <COND (<SET RM <MIRNS .RM T>>\n\t\t              <TELL \"As you leave, the door swings shut.\" CR>\n\t\t\t      <SETG WOOD-OPEN-FLAG <>>\n\t\t\t      .RM)\n\t\t\t     (T\n\t\t\t      <TELL \"You can't go that way.\" CR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T\n\t\t       <TELL \"You would hit one of the panels.\" CR>\n\t\t       <RFALSE>)>)\n\t       (T\n\t\t<TELL \"You are inside a closed box!\" CR>\n\t\t<RFALSE>)>>"
  },
  "MIRNS": {
   "name": "MIRNS",
   "file": "actions.zil",
   "line": 936,
   "endLine": 949,
   "source": "<ROUTINE MIRNS (NORTH? \"OPTIONAL\" (EXIT? <>) \"AUX\" S T)\n\t <COND (<NOT .EXIT?>\n\t\t<COND (<AND .NORTH? <==? ,MLOC ,MRD>>\n\t               <RFALSE>)\n\t\t      (<AND <NOT .NORTH?> <==? ,MLOC ,MRA>>\n\t\t       <RFALSE>)>)>\n\t <COND (<SET T <GETPT ,MLOC <COND (.NORTH? ,P?NORTH)\n\t\t\t\t\t  (T ,P?SOUTH)>>>\n\t\t<COND (<==? <SET S <PTSIZE .T>> ,UEXIT>\n\t\t       <GETB .T 0>)\n\t\t      (.NORTH?\n\t\t       <LKP ,MLOC ,R-NORTHS>)\n\t\t      (T\n\t\t       <LKP ,MLOC ,R-SOUTHS>)>)>>"
  },
  "MIREW": {
   "name": "MIREW",
   "file": "actions.zil",
   "line": 951,
   "endLine": 953,
   "source": "<ROUTINE MIREW ()\n    \t <COND (<0? ,MDIR> <LKP ,MLOC ,R-WESTS>)\n\t       (T <LKP ,MLOC ,R-EASTS>)>>"
  },
  "MIRIN": {
   "name": "MIRIN",
   "file": "actions.zil",
   "line": 955,
   "endLine": 964,
   "source": "<ROUTINE MIRIN (\"OPTIONAL\" (VRB T))\n         <COND (<AND <==? <MIRROR-HERE? ,HERE> 1> ,MIRROR-OPEN-FLAG>\n\t\t,IN-MIRROR)\n\t       (<NOT .VRB> <RFALSE>)\n\t       (<==? <MIRROR-HERE? ,HERE> 1>\n\t        <COND (<AND <NOT ,MIRROR-OPENED> ,MR1-FLAG>\n\t\t       <TELL \"A mirror blocks your way.\" CR>\n\t\t       <RFALSE>)\n\t\t      (T <TELL \"The panel is closed.\" CR> <RFALSE>)>)\n\t       (T <TELL \"The structure blocks your way.\" CR> <RFALSE>)>>"
  },
  "MREYE-ROOM": {
   "name": "MREYE-ROOM",
   "file": "actions.zil",
   "line": 966,
   "endLine": 983,
   "source": "<ROUTINE MREYE-ROOM (\"OPTIONAL\" (RARG <>) \"AUX\" O)\n         <COND (<AND <==? .RARG ,M-BEG>\n\t\t     <VERB? DROP>\n\t\t     <IN? ,PRSO ,WINNER>\n\t\t     <NOT <BEAM-STOPPED?>>>\n\t\t<MOVE ,PRSO ,HERE>\n\t\t<TELL\n\"You conveniently drop the \" D ,PRSO \" in position to block the\nbeam of light.\" CR>)\n\t       (<==? .RARG ,M-LOOK>\n\t        <TELL\n\"You are in the middle of a long north-south corridor whose walls are\npolished stone. A narrow red beam of light crosses the room at the north\nend, inches above the floor.\" CR>\n\t        <COND (<SET O <BEAM-STOPPED?>>\n\t\t       <TELL\n\"The beam is blocked by a \" D .O \" lying on the floor.\" CR>)>\n\t\t<LOOK-TO ,MRA <>>)>>"
  },
  "BEAM-STOPPED?": {
   "name": "BEAM-STOPPED?",
   "file": "actions.zil",
   "line": 985,
   "endLine": 991,
   "source": "<ROUTINE BEAM-STOPPED? (\"AUX\" N)\n\t <SET N <FIRST? ,MREYE>>\n\t <REPEAT ()\n\t\t <COND (<NOT <EQUAL? .N ,PLAYER ,BEAM>>\n\t\t\t<SETG BEAM-BREAKER .N>\n\t\t\t<RETURN .N>)\n\t\t       (<NOT <SET N <NEXT? .N>>> <RFALSE>)>>>"
  },
  "BEAM-FUNCTION": {
   "name": "BEAM-FUNCTION",
   "file": "actions.zil",
   "line": 997,
   "endLine": 1038,
   "source": "<ROUTINE BEAM-FUNCTION (\"AUX\" PRO PRI)\n\t <COND (<VERB? LEAP>\n\t\t<TELL\n\"You jump over the beam and into the hallway.\" CR>\n\t\t<GOTO ,MRA>\n\t\t<RTRUE>)\n\t       (<VERB? FOLLOW>\n\t\t<TELL \n\"It simply crosses the northern end of the room, so there's nowhere to\nfollow it.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"The red beam of light crosses the north end of the room only an inch or so\nabove the floor.\">\n\t\t<COND (<BEAM-STOPPED?>\n\t\t       <TELL \" The beam is broken by a \" D ,BEAM-BREAKER\n\t\t\t     \" lying on the ground.\">)>\n\t\t<CRLF>)\n\t       (<VERB? PUT MUNG>\n\t        <COND (<VERB? PUT>\n\t\t       <SET PRI ,PRSO>\n\t\t       <SET PRO ,PRSI>)\n\t\t      (T\n\t\t       <SET PRI ,PRSI>\n\t\t       <SET PRO ,PRSO>)>\n\t        <COND (<OR <NOT .PRI> <NOT <==? .PRO ,BEAM>>> <RFALSE>)\n\t\t      (<IN? .PRI ,WINNER>\n\t\t       <MOVE .PRI ,HERE>\n\t\t       <SETG BEAM-BREAKER .PRI>\n\t\t       <TELL\n\"The beam is now interrupted by a \" D .PRI \" lying on the floor.\" CR>)\n\t\t      (<IN? .PRI ,HERE>\n\t\t       <TELL\n\"The \" D .PRI \" already breaks the beam.\" CR>)\n\t\t      (<==? .PRI ,HANDS>\n\t\t       <TELL\n\"The beam is broken briefly as it passes through.\" CR>)\n\t\t      (T <TELL\n\"You're not holding the \" D .PRI \".\" CR>)>)\n\t       (<AND <VERB? TAKE> <==? ,PRSO ,BEAM>>\n\t        <TELL\n\"No doubt you have a bottle of moonbeams as well.\" CR>)>>"
  },
  "MRSWITCH": {
   "name": "MRSWITCH",
   "file": "actions.zil",
   "line": 1042,
   "endLine": 1054,
   "source": "<ROUTINE MRSWITCH ()\n\t <COND (<VERB? PUSH>\n\t        <COND (,MRSWPUSH-FLAG\n\t\t       <TELL \"Click.\" CR>)\n\t\t      (T\n\t\t       <COND (<BEAM-STOPPED?>\n\t\t\t      <TELL \"Click. Snap!\" CR>\n\t\t\t      <ENABLE <QUEUE I-MRINT 7>>\n\t\t\t      <SETG MRSWPUSH-FLAG T>\n\t\t\t      <SETG MIRROR-OPEN-FLAG T>\n\t\t\t      <SETG MIRROR-OPENED T>\n\t\t\t      <FCLEAR ,MRA ,TOUCHBIT>)\n\t\t\t     (T <TELL \"Click.\" CR>)>)>)>>"
  },
  "I-MRINT": {
   "name": "I-MRINT",
   "file": "actions.zil",
   "line": 1056,
   "endLine": 1063,
   "source": "<ROUTINE I-MRINT ()\n\t <SETG MRSWPUSH-FLAG <>>\n\t <SETG MIRROR-OPEN-FLAG <>>\n\t <COND (<OR <==? <MIRROR-HERE? ,HERE> 1>\n\t\t    <==? ,HERE ,IN-MIRROR>>\n\t\t<TELL \"The mirror quietly swings shut.\" CR>)\n\t       (<==? ,HERE ,MR-ANTE>\n\t\t<TELL \"The button pops back to its original position.\" CR>)>>"
  },
  "MAGIC-MIRROR": {
   "name": "MAGIC-MIRROR",
   "file": "actions.zil",
   "line": 1073,
   "endLine": 1136,
   "source": "<ROUTINE MAGIC-MIRROR (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-LOOK>\n\t        <TELL\n\"You are inside a rectangular box of wood whose structure is rather\ncomplicated. Four sides and the roof are filled in, and the floor is\nopen.|\n|\nAs you face the side opposite the entrance, two short sides of\ncarved and polished wood are to your left and right. The left panel\nis mahogany, the right pine. The wall you face is red on its left\nhalf and black on its right. On the entrance side, the wall is white\nopposite the red part of the wall it faces, and yellow opposite the\nblack section. The painted walls are at least twice the length of\nthe unpainted ones. The ceiling is painted blue.|\n|\nIn the floor is a stone channel about six inches wide and a foot\ndeep. The channel is oriented in a north-south direction. In the\nexact center of the room the channel widens into a circular\ndepression perhaps two feet wide. Incised in the stone around this\narea is a compass rose.|\n|\nRunning from one short wall to the other at about waist height\nis a wooden bar, carefully carved and drilled. This bar is pierced\nin two places. The first hole is in the center of the bar (and thus\nthe center of the room). The second is at the left end of the room\n(as you face opposite the entrance). Through each hole runs a wooden\npole.|\n|\nThe pole at the left end of the bar is short, extending about a foot\nabove the bar, and ends in a hand grip. The pole \">\n\t        <COND (<AND <==? ,MLOC ,MRB> <==? ,MDIR 270>>\n\t\t       <COND (<NOT <0? ,POLEUP-FLAG>>\n\t\t\t      <TELL\n\"has been lifted out\nof a hole carved in the stone floor. There is evidently enough\nfriction to keep the pole from dropping back down.\">)\n\t\t\t     (T\n\t\t\t      <TELL \"has been dropped\ninto a hole carved in the stone floor.\">)>)\n\t\t      (<EQUAL? ,MDIR 0 180>\n\t\t       <COND (<NOT <0? ,POLEUP-FLAG>>\n\t\t\t      <TELL \"is positioned above\nthe stone channel in the floor.\">)\n\t\t\t     (T\n\t\t\t      <TELL \"has been dropped\ninto the stone channel incised in the floor.\">)>)\n\t\t      (T\n\t\t       <TELL \"is resting on the\nstone floor.\">)>\n\t       <TELL\n\"|\n|\nThe long pole at the center of the bar extends from the ceiling\nthrough the bar to the circular area in the stone channel. This\nbottom end of the pole has a T-bar a bit less than two feet long\nattached to it, and on the T-bar is carved an arrow. The arrow and\nT-bar are pointing \"\n\t\t     <GET ,LONGDIRS </ ,MDIR 45>>\n\t\t     \".\">\n\t       <COND (,WOOD-OPEN-FLAG\n\t\t      <TELL\n\"|\nThe pine panel has been opened outward.\">)>\n\t       <CRLF>)>>"
  },
  "MPANELS": {
   "name": "MPANELS",
   "file": "actions.zil",
   "line": 1143,
   "endLine": 1176,
   "source": "<ROUTINE MPANELS (\"AUX\" MD)\n         <COND (<VERB? PUSH>\n\t        <COND (<NOT <0? ,POLEUP-FLAG>>\n\t\t       <COND (<==? ,MLOC ,MRG>\n\t\t\t      <COND (,GUARDIANS-SEEN\n\t\t\t\t     <JIGS-UP\n\"The Guardians awake, and in perfect unison, utterly destroy you with\ntheir stone bludgeons. Satisfied, they resume their posts.\">\n\t\t\t\t     <RTRUE>)\n\t\t\t\t    (T\n\t\t\t\t     <JIGS-UP\n\"All at once, two immense stone bludgeons come through the top of the\nstructure, crushing you.\">\n\t\t\t\t     <RTRUE>)>)>\n\t\t       <COND (<EQUAL? ,PRSO ,RED-PANEL ,YELLOW-PANEL>\n\t\t\t      <SET MD <MOD <+ ,MDIR 45> 360>>\n\t\t\t      <TELL \"The structure rotates clockwise.\" CR>)\n\t\t\t     (T\n\t\t\t      <SET MD <MOD <+ ,MDIR 315> 360>>\n\t\t\t      <TELL\n\"The structure rotates counterclockwise.\" CR>)>\n\t\t       <TELL \"The arrow on the compass rose now indicates \"\n\t\t\t     <GET ,LONGDIRS </ .MD 45>>\n\t\t\t     \".\" CR>\n\t\t       <COND (,WOOD-OPEN-FLAG\n\t\t\t      <SETG WOOD-OPEN-FLAG <>>\n\t\t\t      <TELL \"The pine wall closes quietly.\" CR>)>\n\t\t       <SETG MDIR .MD>)\n\t\t      (<0? <MOD ,MDIR 180>>\n\t\t       <TELL\n \"The short pole prevents the structure from rotating.\" CR>)\n\t\t      (T\n\t\t       <TELL\n \"The structure shakes slightly but doesn't move.\" CR>)>)>>"
  },
  "MENDS": {
   "name": "MENDS",
   "file": "actions.zil",
   "line": 1178,
   "endLine": 1211,
   "source": "<ROUTINE MENDS (\"AUX\" RM)\n\t <COND (<VERB? CLOSE> <TELL \"You can't do that to the panel.\" CR>)\n\t       (<OR <VERB? PUSH>\n\t\t    <AND <VERB? OPEN> <==? ,PRSO ,PINE-PANEL>>>\n\t        <COND (<NOT <0? <MOD ,MDIR 180>>>\n\t\t       <TELL\n\"The structure rocks back and forth slightly but doesn't move.\" CR>)\n\t\t      (<==? ,PRSO ,MAHOGANY-PANEL>\n\t\t       <COND (<SET RM <MIRNS <L? ,MDIR 180>>>\n\t\t\t      <MIRMOVE <0? ,MDIR> .RM>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"The structure has reached the end of the stone channel and won't\nbudge.\" CR>)>)\n\t\t      (T\n\t\t       <TELL \"The pine wall swings open.\" CR>\n\t\t       <COND (<OR <AND <==? ,MLOC ,MRD>\n\t\t\t\t       <==? ,MDIR 0>>\n\t\t\t\t  <AND <==? ,MLOC ,MRC>\n\t\t\t\t       <==? ,MDIR 180>>\n\t\t\t\t  <==? ,MLOC ,MRG>>\n\t\t\t      <COND (,GUARDIANS-SEEN\n\t\t\t\t     <TELL\n\"The pine door opens into the field of view of the Guardians.\" CR>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL\n\"The pine door opens into the field of view of the Guardians of\nZork, represented by two identical stone statues carrying bludgeons.\" CR>)>\n\t\t\t      <JIGS-UP\n\"The Guardians awake, and in perfect unison, utterly destroy you with\ntheir stone bludgeons. Satisfied, they resume their posts.\">\n\t\t\t      <RTRUE>)>\n\t\t       <SETG WOOD-OPEN-FLAG T>\n\t\t       <ENABLE <QUEUE I-PININ 5>>)>)>>"
  },
  "I-PININ": {
   "name": "I-PININ",
   "file": "actions.zil",
   "line": 1213,
   "endLine": 1216,
   "source": "<ROUTINE I-PININ ()\n\t <COND (,WOOD-OPEN-FLAG\n\t\t<SETG WOOD-OPEN-FLAG <>>\n\t\t<TELL \"The pine wall closes quietly.\" CR>)>>"
  },
  "MIRMOVE": {
   "name": "MIRMOVE",
   "file": "actions.zil",
   "line": 1218,
   "endLine": 1244,
   "source": "<ROUTINE MIRMOVE (NORTH? RM \"AUX\" (PU? <>) (LOSE <>))\n\t <COND (<NOT <0? ,POLEUP-FLAG>> <SET PU? T>)>\n\t <TELL <COND (.PU? \"The structure sways unsteadily \")\n\t\t     (T \"The structure slides \")>\n\t       <COND (.NORTH? \"north\") (T \"south\")>\n\t       \" and stops over another compass rose.\" CR>\n\t <SETG MLOC .RM>\n\t <COND (<AND <==? .RM ,MRG> <==? ,HERE ,IN-MIRROR>>\n\t        <COND (.PU?\n\t\t       <SET LOSE T>)\n\t\t      (<OR <NOT ,MR1-FLAG> <NOT ,MR2-FLAG>>\n\t\t       <SET LOSE T>)\n\t\t      (<OR ,MIRROR-OPEN-FLAG ,WOOD-OPEN-FLAG>\n\t\t       <SET LOSE T>)>\n\t        <COND (.LOSE\n\t\t       <COND (,GUARDIANS-SEEN\n\t\t\t      <JIGS-UP\n\"Suddenly the Guardians realize someone is trying to sneak by them in\nthe structure. They awake and, in perfect unison, hammer the contents\nof the box (in other words you) to pulp. They then resume their posts,\nsatisfied.\">)\n\t\t\t     (T\n\t\t\t      <JIGS-UP\n\"Suddenly, two identical stone bludgeons come through the roof and\nhammer the contents of the box to pulp. That includes you.\">)>)>\n\t\t<RTRUE>)>\n\t T>\t"
  },
  "SHORT-POLE-F": {
   "name": "SHORT-POLE-F",
   "file": "actions.zil",
   "line": 1246,
   "endLine": 1268,
   "source": "<ROUTINE SHORT-POLE-F ()\n         <COND (<VERB? RAISE MOVE>\n\t        <COND (<==? ,POLEUP-FLAG 2>\n\t\t       <TELL \"The pole cannot be raised further.\" CR>)\n\t\t      (T\n\t\t       <SETG POLEUP-FLAG 2>\n\t\t       <TELL \"The pole is now slightly above the floor.\" CR>)>)\n\t       (<OR <AND <VERB? PUT> <==? ,PRSI ,CHANNEL>>\n\t\t    <VERB? PUSH LOWER>>\n\t        <COND (<0? ,POLEUP-FLAG>\n\t\t       <TELL \"The pole cannot be lowered further.\" CR>)\n\t\t      (<0? <MOD ,MDIR 180>>\n\t\t       <TELL \"The pole is lowered into the channel.\" CR>\n\t\t       <SETG POLEUP-FLAG 0>\n\t\t       T)\n\t\t      (<AND <==? ,MDIR 270> <==? ,MLOC ,MRB>>\n\t\t       <SETG POLEUP-FLAG 0>\n\t\t       <TELL \"The pole is lowered into the stone hole.\" CR>)\n\t\t      (<==? ,POLEUP-FLAG 1>\n\t\t       <TELL \"The pole is already resting on the floor.\" CR>)\n\t\t      (T\n\t\t       <SETG POLEUP-FLAG 1>\n\t\t       <TELL \"The pole now rests on the stone floor.\" CR>)>)>>"
  },
  "DUNGEON-MASTER-F": {
   "name": "DUNGEON-MASTER-F",
   "file": "actions.zil",
   "line": 1272,
   "endLine": 1339,
   "source": "<ROUTINE DUNGEON-MASTER-F (\"OPTIONAL\" (RARG <>)) \n\t <COND (<==? .RARG ,M-OBJDESC> <RFALSE>)\n\t       (<==? ,WINNER ,DUNGEON-MASTER>\n\t\t<COND (<VERB? FOLLOW>\n\t\t       <COND (<IN? ,DUNGEON-MASTER ,HERE>\n\t\t\t      <ENABLE <QUEUE I-FOLIN -1>>\n\t\t\t      <TELL\n\"The dungeon master answers, \\\"I will follow.\\\"\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"The dungeon master's voice replies, \\\"You must come here first!\\\"\" CR>)>)\n\t\t      (<VERB? STAY WAIT>\n\t\t       <QUEUE I-FOLIN 0>\n\t\t       <TELL\n\"The dungeon master answers, \\\"I will stay.\\\"\" CR>)\n\t\t      (<VERB? WALK>\n\t\t       <COND (<AND <EQUAL? ,PRSO ,P?SOUTH ,P?ENTER>\n\t\t\t\t   <==? ,HERE ,NORTH-CORRIDOR>>\n\t\t\t      <TELL\n\"\\\"I am not permitted to enter the prison cell.\\\"\" CR>)\n\t\t\t     (<AND <==? ,PRSO ,P?NORTH>\n\t\t\t\t   <==? ,HERE ,NORTH-CORRIDOR>>\n\t\t\t      <MOVE ,DUNGEON-MASTER ,PARAPET>\n\t\t\t      <TELL\n\"\\\"Very well. I am at the parapet!\\\"\" CR>\n\t\t\t      <QUEUE I-FOLIN 0>)\n\t\t\t     (<AND <EQUAL? ,PRSO ,P?NORTH ,P?ENTER>\n\t\t\t\t   <==? ,HERE ,SOUTH-CORRIDOR>>\n\t\t\t      <TELL\n\"\\\"I am not permitted to enter the prison cell.\\\"\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"\\\"I prefer to stay where I am, thank you.\\\"\" CR>)>)\n\t\t      (<AND <VERB? WALK-TO> <==? ,PRSO ,PARAPET-OBJ>>\n\t\t       <MOVE ,DUNGEON-MASTER ,PARAPET>\n\t\t       <QUEUE I-FOLIN 0>\n\t\t       <TELL\n\"\\\"Very well!\\\"\" CR>)\n\t\t      (<VERB? TAKE>\n\t\t       <TELL\n\"\\\"I will have no use for that, I am afraid.\\\"\" CR>)\n\t\t      (<AND <VERB? OPEN> <==? ,PRSO ,DUNGEON-DOOR>>\n\t\t       <TELL\n\"The dungeon master appears angered. \\\"Do not run from your quest: you are\nnearing the end!\\\"\" CR>)\n\t\t      (<VERB? PUSH TURN SPIN FOLLOW STAY OPEN CLOSE WAIT\n\t\t\t      ATTACK WALK-TO>\n\t\t       <COND (<VERB? STAY FOLLOW WAIT> T)\n\t\t\t     (T <TELL \"\\\"If you wish,\\\" he replies.\" CR>)>\n\t\t       <RFALSE>)\n\t\t      (T <TELL\n\"\\\"Do not be foolish! Consider the end of your quest!\\\"\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"He is dressed simply in a hood and cloak, wearing an amulet and ring,\ncarrying an old book under one arm, and leaning on a wooden staff. A single\nkey, as if to a prison cell, hangs from his belt.\" CR>)\n\t       (<VERB? ATTACK MUNG>\n\t\t<REALLY-DEAD\n\"The dungeon master is taken by surprise. He dodges your blow, and\nwith a disappointed expression on his face, traces a complicated\npattern in the air with his staff. You crumble into dust.\">)\n\t       (<VERB? TAKE>\n\t\t<TELL\n\"\\\"I'm willing to accompany you, but not ride in your pocket!\\\"\" CR>)\n\t       (<AND <VERB? GIVE> <==? ,PRSI ,DUNGEON-MASTER>>\n\t\t<TELL\n\"\\\"I have no need for those things.\\\"\" CR>)>>"
  },
  "MASTER-F": {
   "name": "MASTER-F",
   "file": "actions.zil",
   "line": 1341,
   "endLine": 1354,
   "source": "<ROUTINE MASTER-F () \n\t <COND (<EQUAL? ,HERE ,PRISON-CELL ,GOOD-CELL>\n\t\t<COND (<HELLO? ,MASTER>\n\t\t       <TELL \"He can't hear you.\" CR>)\n\t\t      (T <TELL \"He is not here.\" CR>)>)\n\t       (<VERB? TELL> <SETG PRSO ,DUNGEON-MASTER> <RFALSE>)\n\t       (<AND <VERB? GIVE SGIVE> <IN? ,DUNGEON-MASTER ,HERE>>\n\t\t<TELL\n\"He politely refuses your offer.\" CR>)\n\t       (<AND <VERB? EXAMINE>\n\t\t     <EQUAL? ,HERE ,CELL ,NORTH-CORRIDOR>\n\t\t     <IN? ,DUNGEON-MASTER ,PARAPET>>\n\t\t<TELL \"The dungeon master is standing on the parapet.\" CR>)\n\t       (T <TELL \"The dungeon master isn't here.\" CR>)>>"
  },
  "BEHIND-DOOR-F": {
   "name": "BEHIND-DOOR-F",
   "file": "actions.zil",
   "line": 1358,
   "endLine": 1366,
   "source": "<ROUTINE BEHIND-DOOR-F (\"OPTIONAL\" (RARG <>))\n         <COND (<AND <==? .RARG ,M-ENTER> <NOT ,DM-SEEN>>\n\t\t<ENABLE <QUEUE I-FOLIN -1>>\n\t\t<SETG DM-SEEN T>)\n\t       (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are in a narrow north-south corridor. At the south end is a door\nand at the north end is an east-west corridor. The door is \">\n\t\t<DPR ,DUNGEON-DOOR>)>>"
  },
  "FRONT-DOOR-F": {
   "name": "FRONT-DOOR-F",
   "file": "actions.zil",
   "line": 1368,
   "endLine": 1376,
   "source": "<ROUTINE FRONT-DOOR-F (\"OPTIONAL\" (RARG <>))\n    \t <COND (<==? .RARG ,M-ENTER>\n\t\t<QUEUE I-FOLIN 0>)\n\t       (<==? .RARG ,M-LOOK>\n\t\t<LOOK-TO <> ,MRD>\n\t\t<TELL\n\"The wooden door has a barred panel in it at about head height. The\ndoor itself is \">\n\t        <DPR ,DUNGEON-DOOR>)>>"
  },
  "LOOK-LIKE-DM?": {
   "name": "LOOK-LIKE-DM?",
   "file": "actions.zil",
   "line": 1378,
   "endLine": 1385,
   "source": "<ROUTINE LOOK-LIKE-DM? ()\n\t <AND <IN? ,CLOAK ,WINNER>\n\t      <IN? ,HOOD ,WINNER>\n\t      <IN? ,AMULET ,WINNER>\n\t      <IN? ,STAFF ,WINNER>\n\t      <IN? ,RING ,WINNER>\n\t      <IN? ,LORE-BOOK ,WINNER>\n\t      <IN? ,KEY ,WINNER>>>"
  },
  "DUNGEON-PANEL-F": {
   "name": "DUNGEON-PANEL-F",
   "file": "actions.zil",
   "line": 1387,
   "endLine": 1391,
   "source": "<ROUTINE DUNGEON-PANEL-F ()\n\t <COND (<VERB? OPEN>\n\t\t<TELL \"You can't open the panel. It's set into the door.\" CR>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<TELL \"There's not much to be seen.\" CR>)>>"
  },
  "DUNGEON-DOOR-F": {
   "name": "DUNGEON-DOOR-F",
   "file": "actions.zil",
   "line": 1393,
   "endLine": 1431,
   "source": "<ROUTINE DUNGEON-DOOR-F ()\n    \t <COND (<VERB? OPEN CLOSE>\n\t\t<TELL \"The door won't budge.\" CR>)\n\t       (<AND <VERB? KNOCK> <EQUAL? ,HERE ,FRONT-DOOR>>\n\t\t<TELL\n\"The knock reverberates along the hall. For a time it seems there\nwill be no answer. Then you hear someone unlatching the small\npanel. Through the bars of the great door, the wrinkled\nface of an old man appears.\">\n\t\t<COND (,INVIS\n\t\t       <TELL \" He seems not to notice you\nfor a brief moment, then recovers.\">)>\n\t\t<COND (<LOOK-LIKE-DM?>\n\t\t       <TELL \" He starts to smile broadly and opens the\nmassive door without a sound. The old man motions and you feel yourself\ndrawn toward him.|\n\\\"I am the Master of the Dungeon!\\\" he booms. \\\"I have been watching\nyou closely during your journey through the Great Underground Empire.\nYes!,\\\" he says, as if recalling some almost forgotten time, \\\"we have\nmet before, although I may not appear as I did then.\\\" You look\nclosely into his deeply lined face and see the faces of the old man by the\nsecret door, your \\\"friend\\\" at the cliff, and the hooded figure. \\\"You have\nshown kindness to the old man, and compassion toward the hooded one. You\ndisplayed patience in the puzzle and trust at the cliff. You have\ndemonstrated strength, ingenuity, and valor. However, one final test awaits\nyou. Now! Command me as you will, and complete your quest!\\\"|\" CR>\n\t\t       <GOTO ,BEHIND-DOOR>\n\t\t       <SETG IN-DUNGEON T>)\n\t\t      (T\n\t\t       <TELL \" He looks you over with a piercing gaze\nand then speaks gravely. \\\"I have been waiting a long time for you, \">\n\t\t       <TELL <GET ,DM-REASONS <DMISH>>>\n\t\t       <TELL \"\nI will remain here. When you feel you are ready, go to the\nsecret door and 'SAY \\\"FROTZ OZMOO\\\"'! Go, now!\\\" He wags his finger\nin warning. \\\"Do not forget the double\nquotes!\\\" A moment later, you find yourself in the Button Room.\" CR>\n\t\t       <GOTO ,MR-ANTE <>>\n\t\t       <RTRUE>)>)>>"
  },
  "DMISH": {
   "name": "DMISH",
   "file": "actions.zil",
   "line": 1444,
   "endLine": 1452,
   "source": "<ROUTINE DMISH (\"AUX\" (CNT 0))\n\t <COND (<IN? ,AMULET ,WINNER> <SET CNT <+ .CNT 1>>)>\n\t <COND (<IN? ,LORE-BOOK ,WINNER> <SET CNT <+ .CNT 1>>)>\n\t <COND (<IN? ,HOOD ,WINNER> <SET CNT <+ .CNT 1>>)>\n\t <COND (<IN? ,CLOAK ,WINNER> <SET CNT <+ .CNT 1>>)>\n\t <COND (<IN? ,RING ,WINNER> <SET CNT <+ .CNT 1>>)>\n\t <COND (<IN? ,KEY ,WINNER> <SET CNT <+ .CNT 1>>)>\n\t <COND (<IN? ,STAFF ,WINNER> <SET CNT <+ .CNT 1>>)>\n\t .CNT>"
  },
  "I-FOLIN": {
   "name": "I-FOLIN",
   "file": "actions.zil",
   "line": 1456,
   "endLine": 1472,
   "source": "<ROUTINE I-FOLIN ()\n\t <COND (<IN? ,DUNGEON-MASTER ,HERE> <RFALSE>)\n\t       (<AND <EQUAL? ,HERE ,PRISON-CELL ,CELL> ,FOLFLAG>\n\t\t<TELL\n\"You notice that the dungeon master doesn't follow you.\" CR>\n\t\t<SETG FOLFLAG <>>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,HERE ,PRISON-CELL ,CELL> <RFALSE>)\n\t       (<NOT ,FOLFLAG>\n\t\t<SETG FOLFLAG T>\n\t\t<TELL \"The dungeon master rejoins you.\" CR>\n\t\t<MOVE ,DUNGEON-MASTER ,HERE>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"The dungeon master follows you.\" CR>\n\t\t<MOVE ,DUNGEON-MASTER ,HERE>\n\t\t<RTRUE>)>>"
  },
  "MOVE-CELL-OBJECTS": {
   "name": "MOVE-CELL-OBJECTS",
   "file": "actions.zil",
   "line": 1485,
   "endLine": 1507,
   "source": "<ROUTINE MOVE-CELL-OBJECTS (\"AUX\" TOP CNT F X)\n\t <SET TOP <* 8 <- ,LCELL 1>>>\n\t <SET CNT <+ .TOP 1>>\n\t <SET F <FIRST? ,CELL>>\n\t <COND (.F\n\t\t<REPEAT ()\n\t\t\t<SET X <NEXT? .F>>\n\t\t\t<COND (<NOT .F> <RETURN>)\n\t\t\t      (T\n\t\t\t       <PUT ,CELLOBJS .CNT .F>\n\t\t\t       <REMOVE .F>\n\t\t\t       <SET CNT <+ .CNT 1>>)>\n\t\t\t<COND (<NOT .X> <RETURN>)\n\t\t\t      (T <SET F .X>)>>)>\n\t <PUT ,CELLOBJS .TOP <- <- .CNT .TOP> 1>>\n\t <SET TOP <* 8 <- ,PNUMB 1>>>\n\t <SET CNT <GET ,CELLOBJS .TOP>>\n\t <REPEAT ()\n\t\t <COND (<0? .CNT> <RETURN>)\n\t\t       (T\n\t\t\t<SET TOP <+ .TOP 1>>\n\t\t\t<MOVE <GET ,CELLOBJS .TOP> ,CELL>\n\t\t\t<SET CNT <- .CNT 1>>)>>>"
  },
  "CELL-MOVE": {
   "name": "CELL-MOVE",
   "file": "actions.zil",
   "line": 1509,
   "endLine": 1532,
   "source": "<ROUTINE CELL-MOVE (\"AUX\" F X)\n\t <FCLEAR ,CELL-DOOR ,OPENBIT>\n\t <FCLEAR ,BRONZE-DOOR ,OPENBIT>\n\t <COND (<NOT <==? ,PNUMB ,LCELL>>\n\t        <COND (<==? ,PNUMB 4> <FCLEAR ,BRONZE-DOOR ,INVISIBLE>)\n\t\t      (ELSE <FSET ,BRONZE-DOOR ,INVISIBLE>)>\n\t        <COND (<IN? ,PLAYER ,CELL>\n\t\t       <SETG WINNER ,PLAYER>\n\t\t       <FCLEAR ,GOOD-CELL ,TOUCHBIT>\n\t\t       <FCLEAR ,PRISON-CELL ,TOUCHBIT>\n\t\t       <GOTO <COND (<==? ,LCELL 4>\n\t\t\t\t    <FCLEAR ,BRONZE-DOOR ,INVISIBLE>\n\t\t\t\t    ,GOOD-CELL)\n\t\t\t\t   (ELSE ,PRISON-CELL)>>\n\t\t       <SET F <FIRST? ,CELL>>\n\t\t       <COND (.F\n\t\t\t      <REPEAT ()\n\t\t\t\t      <SET X <NEXT? .F>>\n\t\t\t\t      <COND (<NOT .F> <RETURN>)\n\t\t\t\t\t    (T <MOVE .F ,HERE>)>\n\t\t\t\t      <COND (<NOT .X> <RETURN>)\n\t\t\t\t\t    (T <SET F .X>)>>)>)\n\t\t      (T <MOVE-CELL-OBJECTS>)>\n\t        <SETG LCELL ,PNUMB>)>>"
  },
  "PARAPET-F": {
   "name": "PARAPET-F",
   "file": "actions.zil",
   "line": 1534,
   "endLine": 1548,
   "source": "<ROUTINE PARAPET-F (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t        <TELL\n\"You are standing behind a stone retaining wall which rims a parapet\noverlooking a fiery pit. It is difficult to see through the\nsmoke and flame which fills the pit, but it seems to be bottomless.\nThe pit itself is circular, about two hundred feet in diameter,\nand is fashioned of roughly hewn stone. The flames generate considerable\nheat, so it is rather uncomfortable standing here.|\nThere is an object here which looks like a sundial. On it are an\nindicator arrow surrounding a large button. On the face of\nthe dial are numbers 1 through 8. The indicator points to the number \"\nN ,PNUMB \".\" CR>\n\t\t<TELL\n\"To the south, across a narrow corridor, is a prison cell.\" CR>)>>"
  },
  "DIAL": {
   "name": "DIAL",
   "file": "actions.zil",
   "line": 1550,
   "endLine": 1572,
   "source": "<ROUTINE DIAL (\"AUX\" N)\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"The dial points to \" N ,PNUMB \".\" CR>)\n\t       (<VERB? TURN>\n\t        <COND (<==? ,PRSI ,INTNUM>\n\t\t       <COND (<OR <0? ,P-NUMBER>\n\t\t\t\t  <G? ,P-NUMBER 8>>\n\t\t\t      <TELL \"There is no such setting.\" CR>\n\t\t\t      <RTRUE>)>\n\t\t       <SETG PNUMB ,P-NUMBER>\n\t\t       <COND (<==? ,WINNER ,PLAYER>\n\t\t\t      <TELL\n\"The dial now points to \" N ,PNUMB \".\" CR>)>\n\t\t       <RTRUE>)\n\t\t      (<NOT ,PRSI>\n\t\t       <TELL \"You must specify what to set the dial to.\" CR>)\n\t\t      (T <TELL \"The dial face only contains numbers.\" CR>)>)\n\t       (<VERB? SPIN>\n\t        <SETG PNUMB <RANDOM 8>>\n\t        <COND (<==? ,WINNER ,PLAYER>\n\t\t       <TELL\n\"The dial spins and comes to a stop pointing at \" N ,PNUMB \".\">)>\n\t\t<RTRUE>)>>"
  },
  "DIALBUTTON": {
   "name": "DIALBUTTON",
   "file": "actions.zil",
   "line": 1574,
   "endLine": 1584,
   "source": "<ROUTINE DIALBUTTON (\"AUX\" C)\n\t <SET C <FSET? ,CELL-DOOR ,OPENBIT>>\n\t <FCLEAR ,CELL ,TOUCHBIT>\n\t <COND (<VERB? PUSH>\n\t        <COND (<==? ,WINNER ,PLAYER>\n\t\t       <TELL\n\"The button depresses with a slight click, and pops back.\" CR>)>\n\t\t<CELL-MOVE>\n\t\t<COND (.C <TELL\n\"You notice that the cell door is now closed.\" CR>)>\n\t\t<RTRUE>)>>"
  },
  "CELL-ROOM": {
   "name": "CELL-ROOM",
   "file": "actions.zil",
   "line": 1586,
   "endLine": 1607,
   "source": "<ROUTINE CELL-ROOM (RARG)\n         <COND (<==? .RARG ,M-LOOK>\n\t        <TELL\n\"You are in a featureless prison cell. You can see \">\n\t\t<COND (<FSET? ,CELL-DOOR ,OPENBIT>\n\t\t       <TELL \"an east-west\ncorridor outside the cell door. Your view also takes in the parapet and\na large, fiery pit.\" CR>)\n\t\t      (T\n\t\t       <TELL \"through the small window\nin the closed door the parapet, and, behind that,\nsmoke and flames rising from a fiery pit.\" CR>)>\n\t\t<COND (<IN? ,DUNGEON-MASTER ,PARAPET>\n\t\t       <TELL\n\"The dungeon master is at the parapet, leaning on his\nstaff. His keen gaze is fixed on you and he looks tense,\nas if waiting for something to happen.\" CR>)> \n\t        <COND (<==? ,LCELL 4>\n\t\t       <TELL\n\"Behind you, to the south, is a bronze door which is \">\n\t\t       <DPR ,BRONZE-DOOR>)>\n\t\t<RTRUE>)>>"
  },
  "NCELL-ROOM": {
   "name": "NCELL-ROOM",
   "file": "actions.zil",
   "line": 1609,
   "endLine": 1615,
   "source": "<ROUTINE NCELL-ROOM (RARG)\n         <COND (<==? .RARG ,M-LOOK>\n\t        <TELL\n\"You are in a bare prison cell. Its wooden door is securely fastened,\nand you can see only flames and smoke through its small window. On the\nsouth wall is a bronze door which seems to be \">\n\t        <DPR ,BRONZE-DOOR>)>>"
  },
  "DPR": {
   "name": "DPR",
   "file": "actions.zil",
   "line": 1617,
   "endLine": 1619,
   "source": "<ROUTINE DPR (OBJ)\n\t <COND (<FSET? .OBJ ,OPENBIT> <TELL \"open.\" CR>)\n\t       (T <TELL \"closed.\" CR>)>>"
  },
  "NORTH-CORRIDOR-F": {
   "name": "NORTH-CORRIDOR-F",
   "file": "actions.zil",
   "line": 1621,
   "endLine": 1629,
   "source": "<ROUTINE NORTH-CORRIDOR-F (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t        <TELL\n\"This is a wide east-west corridor which opens onto a northern\nparapet at its center. You can see flames and smoke as you peer\ntowards the parapet. The corridor turns south at either end, and in\nthe center of the south wall is a heavy wooden door with a small\nbarred window. The door is \">\n\t\t<DPR ,CELL-DOOR>)>>"
  },
  "SOUTH-CORRIDOR-F": {
   "name": "SOUTH-CORRIDOR-F",
   "file": "actions.zil",
   "line": 1631,
   "endLine": 1641,
   "source": "<ROUTINE SOUTH-CORRIDOR-F (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t        <TELL\n\"You are in an east-west corridor which turns north at its eastern\nand western ends. The walls are made of the finest marble. Another\nhall leads south at the center of the corridor.\" CR>\n\t       <COND (<==? ,LCELL 4>\n\t\t      <TELL\n\"In the center of the north wall is a bronze door which is \">\n\t\t      <DPR ,BRONZE-DOOR>)>\n\t       <RTRUE>)>>"
  },
  "BRONZE-DOOR-F": {
   "name": "BRONZE-DOOR-F",
   "file": "actions.zil",
   "line": 1645,
   "endLine": 1656,
   "source": "<ROUTINE BRONZE-DOOR-F ()\n\t <COND (<AND <VERB? OPEN>\n\t\t     <NOT <FSET? ,BRONZE-DOOR ,OPENBIT>>\n\t\t     <==? ,HERE ,GOOD-CELL>\n\t\t     <NOT ,BRONZE-DOOR-LOCKED>>\n\t\t<TELL\n\"On the other side of the bronze door is a narrow passage which opens out\ninto a larger area.\" CR>\n\t\t<FSET ,BRONZE-DOOR ,OPENBIT>)\n\t       (<AND <VERB? OPEN> ,BRONZE-DOOR-LOCKED>\n\t\t<TELL\n\"The bronze door is locked.\" CR>)>>"
  },
  "LOCKED-DOOR-F": {
   "name": "LOCKED-DOOR-F",
   "file": "actions.zil",
   "line": 1658,
   "endLine": 1660,
   "source": "<ROUTINE LOCKED-DOOR-F ()\n\t <COND (<VERB? OPEN UNLOCK>\n\t        <TELL \"The door is securely fastened.\" CR>)>>"
  },
  "NIRVANA-F": {
   "name": "NIRVANA-F",
   "file": "actions.zil",
   "line": 1666,
   "endLine": 1684,
   "source": "<ROUTINE NIRVANA-F (RARG)\n\t <COND (<==? .RARG ,M-END>\n\t        <TELL\n\"As you examine your new-found riches, the Dungeon Master\nmaterializes beside you, and says, \\\"Now that you have solved all the\nmysteries of the Dungeon, it is time for you to assume your rightly-earned\nplace in the scheme of things. Long have I waited for one capable of\nreleasing me from my burden!\\\" He taps you lightly on the head with his\nstaff, mumbling a few well-chosen spells, and you feel yourself changing,\ngrowing older and more stooped. For a moment there are two identical mages\nstanding among the treasure, then your counterpart dissolves into a\nmist and disappears, a sardonic grin on his face.|\n|\nFor a moment you are relieved, safe in the knowledge that you have\nat last completed your quest in ZORK. You begin to feel the vast powers\nand lore at your command and thirst for an opportunity to use them.|\n|\n\">\n\t       <FINISH>)>>"
  },
  "BRONZE-DOOR-EXIT": {
   "name": "BRONZE-DOOR-EXIT",
   "file": "actions.zil",
   "line": 1686,
   "endLine": 1694,
   "source": "<ROUTINE BRONZE-DOOR-EXIT ()\n\t <COND (<FSET? ,BRONZE-DOOR ,INVISIBLE>\n\t\t<TELL \"You can't go that way.\" CR>\n\t\t<RFALSE>)\n\t       (<FSET? ,BRONZE-DOOR ,OPENBIT>\n\t\t,CELL)\n\t       (T\n\t\t<TELL \"The bronze door is closed.\" CR>\n\t\t<RFALSE>)>>"
  },
  "SECRET-DOOR-F": {
   "name": "SECRET-DOOR-F",
   "file": "actions.zil",
   "line": 1707,
   "endLine": 1711,
   "source": "<ROUTINE SECRET-DOOR-F ()\n\t <COND (<AND <VERB? OPEN> <NOT <FSET? ,SECRET-DOOR ,OPENBIT>>>\n\t\t<TELL \"The massive stone door opens noiselessly. \"\n\t\t      ,SECRET-DOOR-DESC CR>\n\t\t<FSET ,SECRET-DOOR ,OPENBIT>)>>"
  },
  "MSTAIRS-F": {
   "name": "MSTAIRS-F",
   "file": "actions.zil",
   "line": 1713,
   "endLine": 1728,
   "source": "<ROUTINE MSTAIRS-F (RARG)\n\t <COND (<AND <==? .RARG ,M-ENTER>\n\t\t     <PROB 30>\n\t\t     <NOT ,OLD-MAN-FED>\n\t\t     <NOT ,OLD-MAN-GONE>>\n\t\t<MOVE ,OLD-MAN ,HERE>)\n\t       (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are in a room with passages heading southwest and southeast. The\nnorth wall is ornately carved, filled with strange runes and writing in\nan unfamiliar language.\" CR>\n\t\t<COND (<FSET? ,SECRET-DOOR ,OPENBIT>\n\t\t       <TELL ,SECRET-DOOR-DESC CR>)\n\t\t      (<NOT <FSET? ,SECRET-DOOR ,INVISIBLE>>\n\t\t       <TELL\n\"The outline of a door is barely visible among the runes.\" CR>)>)>>"
  },
  "HELLO?": {
   "name": "HELLO?",
   "file": "actions.zil",
   "line": 1730,
   "endLine": 1736,
   "source": "<ROUTINE HELLO? (WHO)\n\t <COND (<OR <==? ,WINNER .WHO>\n\t\t    <VERB? TELL ANSWER REPLY SAY HELLO INCANT>>\n\t\t<COND (<VERB? TELL ANSWER SAY INCANT REPLY>\n\t\t       <SETG P-CONT <>>\n\t\t       <SETG QUOTE-FLAG <>>)>\n\t\t<RTRUE>)>>"
  },
  "OLD-MAN-F": {
   "name": "OLD-MAN-F",
   "file": "actions.zil",
   "line": 1738,
   "endLine": 1804,
   "source": "<ROUTINE OLD-MAN-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-OBJDESC>\n\t\t<COND (,OLD-MAN-AWAKE\n\t\t       <TELL\n\"There is an old man huddled in the corner, eyeing you cautiously.\nHe looks weak and tired.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"An old and wizened man is huddled, asleep, in the corner. He is snoring\nloudly, and looks quite weak and frail.\" CR>)>)\n\t       (<AND <VERB? GIVE> <==? ,PRSI ,OLD-MAN>>\n\t\t<COND (,OLD-MAN-AWAKE\n\t\t       <COND (<==? ,PRSO ,WAYBREAD>\n\t\t\t      <REMOVE ,WAYBREAD>\n\t\t\t      <TELL\n\"He looks up at you and takes the waybread. Slowly, he eats the\nbread and pauses when he is finished. He starts to speak: \\\"Perhaps what you\nseek is through there!\\\" He points at the carved wall to the north, where you\nnow notice the bare outline of a secret door. When you turn back, the old\nman is gone!\" CR>\n\t\t\t      <FCLEAR ,SECRET-DOOR ,INVISIBLE>\n\t\t\t      <SETG OLD-MAN-GONE T>\n\t\t\t      <REMOVE ,OLD-MAN>)\n\t\t\t     (<IN? ,WAYBREAD ,WINNER>\n\t\t\t      <TELL\n\"He refuses your offer but motions with his arm to the waybread in your\nhand.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"The old man refuses the \" D ,PRSO \" with a wave of his hand.\" CR>)>)\n\t\t      (T <TELL \"He is asleep!\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (,OLD-MAN-AWAKE\n\t\t       <TELL\n\"The old man is barely awake and appears to nod off every few moments.\nHe has bright eyes, which appear to see right through your body.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"The man is very, very old and wizened. He has a long, stringy\nbeard and is snoring quite loudly.\" CR>)>)\n\t       (<VERB? LISTEN>\n\t\t<COND (,OLD-MAN-AWAKE <TELL \"He isn't talking.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"He is snoring like a buzz saw.\" CR>)>)\n\t       (<HELLO? ,OLD-MAN>\n\t\t<COND (,OLD-MAN-AWAKE\n\t\t       <TELL\n\"He nods at you without seeming to have understood.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"He is sleeping soundly and does not respond.\" CR>)>)\n\t       (<VERB? SHAKE ALARM>\n\t\t<TELL\n\"The old man is roused to consciousness. He peers at you through eyes which\nappear much younger and stronger than his frail body and waits, as if expecting\nsomething to happen.\" CR>\n\t\t<SETG OLD-MAN-AWAKE T>\n\t\t<ENABLE <QUEUE I-OLD-MAN-SLEEPS 3>>)\n\t       (<VERB? ATTACK MUNG>\n\t\t<TELL\n\"The attack seems to have left the old man unharmed! You watch in awe as he\nrises to his feet and seems to tower above you. He peers down menacingly,\nthen sadly and wearily. \\\"Not yet,\\\" he mourns, and vanishes in a puff of\nsmoke.\" CR>\n\t\t<SETG OLD-MAN-GONE T>\n\t\t<REMOVE ,OLD-MAN>)>>"
  },
  "I-OLD-MAN-SLEEPS": {
   "name": "I-OLD-MAN-SLEEPS",
   "file": "actions.zil",
   "line": 1808,
   "endLine": 1811,
   "source": "<ROUTINE I-OLD-MAN-SLEEPS ()\n\t <SETG OLD-MAN-AWAKE <>>\n\t <COND (<IN? ,OLD-MAN ,HERE>\n\t\t<TELL \"You notice that the old man has fallen asleep.\" CR>)>>"
  },
  "RUNES-F": {
   "name": "RUNES-F",
   "file": "actions.zil",
   "line": 1813,
   "endLine": 1817,
   "source": "<ROUTINE RUNES-F ()\n\t <COND (<VERB? EXAMINE READ>\n\t\t<TELL\n\"The runes are in an ancient language. Some pictures among the runes depict\nflames, stone statues, and an old man.\" CR>)>>"
  },
  "T-BAR-F": {
   "name": "T-BAR-F",
   "file": "actions.zil",
   "line": 1819,
   "endLine": 1823,
   "source": "<ROUTINE T-BAR-F ()\n\t <COND (<VERB? TURN>\n\t\t<TELL\n\"You don't have enough leverage to turn the T-bar. You might be able\nto turn the whole structure, however.\" CR>)>>"
  },
  "FLAMING-PIT-F": {
   "name": "FLAMING-PIT-F",
   "file": "actions.zil",
   "line": 1825,
   "endLine": 1839,
   "source": "<ROUTINE FLAMING-PIT-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The flaming pit is a seemingly bottomless abyss filled with smoke and\nflame.\" CR>)\n\t       (<AND <VERB? PUT> <==? ,PRSI ,FLAMING-PIT>>\n\t\t<COND (<EQUAL? ,HERE ,PARAPET ,NORTH-CORRIDOR>\n\t\t       <COND (<==? ,PRSO ,ME>\n\t\t\t      <TELL\n\"It would be a pity to end your life so near the end of your quest!\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"You cast the \" D ,PRSO \" into the pit, where it is lost forever.\" CR>\n\t\t\t      <REMOVE ,PRSO>)>)\n\t\t      (T <TELL \"You're not close enough.\" CR>)>)>>"
  },
  "PARAPET-OBJ-F": {
   "name": "PARAPET-OBJ-F",
   "file": "actions.zil",
   "line": 1841,
   "endLine": 1850,
   "source": "<ROUTINE PARAPET-OBJ-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<COND (<EQUAL? ,HERE ,CELL ,NORTH-CORRIDOR>\n\t\t       <TELL\n\"You can see the parapet and sundial from here.\">\n\t\t       <COND (<IN? ,DUNGEON-MASTER ,PARAPET>\n\t\t\t      <TELL \" The dungeon master is there\nalso, leaning on his staff.\">)>\n\t\t       <CRLF>)\n\t\t      (T <V-LOOK>)>)>>"
  },
  "ROSE-F": {
   "name": "ROSE-F",
   "file": "actions.zil",
   "line": 1852,
   "endLine": 1856,
   "source": "<ROUTINE ROSE-F ()\n\t  <COND (<VERB? TURN MOVE>\n\t\t <TELL\n\"The compass rose is made of stone and is imbedded in the ground.\nYou could not possibly turn it or move it.\" CR>)>>"
  },
  "CELL-DOOR-F": {
   "name": "CELL-DOOR-F",
   "file": "actions.zil",
   "line": 1858,
   "endLine": 1866,
   "source": "<ROUTINE CELL-DOOR-F ()\n\t <COND (<AND <VERB? PUT> <==? ,PRSI ,CELL-DOOR>>\n\t\t<TELL \"You will have to enter the cell first.\" CR>)\n\t       (<VERB? THROUGH>\n\t\t<COND (<==? ,HERE ,CELL>\n\t\t       <TELL \"Look around.\" CR>)\n\t\t      (T\n\t\t       <DO-WALK ,P?SOUTH>\n\t\t       <RTRUE>)>)>>"
  },
  "LORE-BOOK-F": {
   "name": "LORE-BOOK-F",
   "file": "actions.zil",
   "line": 1868,
   "endLine": 1882,
   "source": "<ROUTINE LORE-BOOK-F ()\n\t <COND (<AND <VERB? BURN> <NOT <IN? ,LORE-BOOK ,WINNER>>>\n\t\t<TELL\n\"The book is consumed in a dazzling display of color.\" CR>\n\t\t<REMOVE ,PRSO>\n\t\t<RTRUE>)\n\t       (<AND ,IN-DUNGEON <VERB? OPEN EXAMINE READ>>\n\t\t<TELL\n\"The book seems to will itself open to a specific page. It shows a picture of\neight small rooms located around a great circle of flame. All are identical\nsave one, which has a bronze door leading to a room bathed in golden light.\nA legend beneath the picture says \\\"The Dungeon and Treasury of Zork.\\\"\" CR>)\n\t       (<VERB? OPEN>\n\t\t<TELL\n\"The book can be perused but not left open.\" CR>)>>"
  },
  "CP-HOLE-F": {
   "name": "CP-HOLE-F",
   "file": "actions.zil",
   "line": 1884,
   "endLine": 1887,
   "source": "<ROUTINE CP-HOLE-F ()\n\t <COND (<VERB? THROUGH>\n\t\t<DO-WALK ,P?DOWN>\n\t\t<RTRUE>)>>"
  },
  "TORCH-PSEUDO": {
   "name": "TORCH-PSEUDO",
   "file": "actions.zil",
   "line": 1889,
   "endLine": 1890,
   "source": "<ROUTINE TORCH-PSEUDO ()\n\t <TELL \"The torches are out of reach.\" CR>>"
  },
  "WATER-FCN": {
   "name": "WATER-FCN",
   "file": "actions.zil",
   "line": 1892,
   "endLine": 1913,
   "source": "<ROUTINE WATER-FCN (\"AUX\" AV PI?)\n\t #DECL ((AV) <OR OBJECT FALSE> (PI?) <OR ATOM FALSE>)\n\t <COND (<VERB? SGIVE> <RFALSE>)\n\t       (<VERB? THROUGH>\n\t\t<PERFORM ,V?SWIM ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? FILL>\t;\"fill bottle with water =>\"\n\t\t<SETG PRSA ,V?PUT>\n\t\t<SETG PRSI ,PRSO>\n\t\t<SETG PRSO ,GLOBAL-WATER>\n\t\t<SET PI? <>>)\n\t       (<EQUAL? ,PRSO ,GLOBAL-WATER>\n\t\t<SET PI? <>>)\n\t       (,PRSI\n\t\t<SET PI? T>)>\n\t <COND (.PI? <SETG PRSI ,GLOBAL-WATER>)\n\t       (T <SETG PRSO ,GLOBAL-WATER>)>\n\t <COND (<AND <VERB? TAKE PUT> <NOT .PI?>>\n\t\t<TELL \"The water slips through your fingers.\" CR>)\n\t       (.PI? <TELL \"You can't do that.\" CR>)\n\t       (<VERB? DROP GIVE THROW>\n\t\t<TELL \"You don't have any water.\" CR>)>>"
  },
  "RANDOM-WALL": {
   "name": "RANDOM-WALL",
   "file": "actions.zil",
   "line": 1915,
   "endLine": 1921,
   "source": "<ROUTINE RANDOM-WALL ()\n\t <COND (<VERB? PUSH>\n\t\t<COND (<==? ,HERE ,IN-MIRROR>\n\t\t       <TELL\n\"You should specify which panel you want to push.\" CR>)\n\t\t      (T <TELL\n\"You can't budge it; at least from here.\" CR>)>)>>"
  },
  "V-DIAGNOSE": {
   "name": "V-DIAGNOSE",
   "file": "actions.zil",
   "line": 1929,
   "endLine": 1930,
   "source": "<ROUTINE V-DIAGNOSE ()\n\t <TELL <GET ,DIAG ,P-STRENGTH> CR>>"
  },
  "JIGS-UP": {
   "name": "JIGS-UP",
   "file": "verbs.zil",
   "line": 275,
   "endLine": 330,
   "source": "<ROUTINE JIGS-UP (DESC \"OPTIONAL\" (PLAYER? <>))\n \t #DECL ((DESC) STRING (PLAYER?) <OR ATOM FALSE>)\n \t <SETG SWORD-STATE 0>\n\t <SETG P-STRENGTH 5>\n\t <SETG S-STRENGTH 5>\n\t <TELL .DESC CR>\n\t <COND (<NOT <==? ,YEAR ,YEAR-PRESENT>> <QUIT>)>\n\t <COND (<NOT <==? ,ADVENTURER ,WINNER>>\n\t\t<TELL \"\n|    ****  The \" D ,WINNER \" has died  ****\n|\n|\">\n\t\t<REMOVE ,WINNER>\n\t\t<SETG WINNER ,ADVENTURER>\n\t\t<SETG HERE <LOC ,WINNER>>\n\t\t<RFATAL>)>\n\t <TELL \"\n|    ****  You have died  ****\n|\n|\">\n\t <COND (<G? <SETG DEATHS <+ ,DEATHS 1>> 3>\n\t\t<TELL\n\"You feel yourself disembodied in a deep blackness. A voice from the void\nspeaks:  \\\"I have waited a long age for you, my friend, but perhaps it has been\nanother that I have been seeking. Good night, oh worthy adventurer!\\\" It is\nthe last you hear.\" CR>\n\t\t<QUIT>)\n\t       (T\n\t\t<TELL\n\"You find yourself deep within the earth in a barren prison cell.\nOutside the iron-barred window, you can see a great, fiery pit. Flames\nleap up and very nearly sear your flesh. After a while, footfalls can\nbe heard in the distance, then closer and closer.... The door swings\nopen, and in walks an old man.|\n|\nHe is dressed simply in a hood and cloak,\nwearing a few simple jewels, carrying something under one arm, and\nleaning on a wooden staff. A single key, as if to a massive prison cell,\nhangs from his belt.|\n|\nHe raises the staff toward you and you hear\nhim speak, as if in a dream: \\\"I await you, though your journey be long\nand full of peril. Go then, and let me not wait long!\\\" You feel some\ngreat power well up inside you and you fall to the floor. The next\nmoment, you are awakening, as if from a deep slumber.\" CR>)>\n\t <MOVE ,CURRENT-LAMP ,ZORK2-STAIR>\n\t <COND (<AND <IN? ,KEY ,WINNER>\n\t\t     <OR <EQUAL? ,HERE ,DARK-1 ,DARK-2 ,KEY-ROOM>\n\t\t\t <EQUAL? ,HERE ,AQ-1 ,AQ-2>>>\n\t\t<MOVE ,KEY ,KEY-ROOM>)>\n\t <CRLF>\n\t <GOTO ,ZORK2-STAIR>\n\t <SETG P-CONT <>>\n\t <RANDOMIZE-OBJECTS>\n\t <KILL-INTERRUPTS>\n\t <RFATAL>>"
  },
  "RANDOMIZE-OBJECTS": {
   "name": "RANDOMIZE-OBJECTS",
   "file": "verbs.zil",
   "line": 332,
   "endLine": 338,
   "source": "<ROUTINE RANDOMIZE-OBJECTS (\"AUX\" (R <>) F N L)\n\t <SET N <FIRST? ,WINNER>>\n\t <REPEAT ()\n\t\t <SET F .N>\n\t\t <COND (<NOT .F> <RETURN>)>\n\t\t <SET N <NEXT? .F>>\n\t\t <MOVE .F <PICK-ONE ,DEAD-OBJ-LOCS>>>>"
  },
  "KILL-INTERRUPTS": {
   "name": "KILL-INTERRUPTS",
   "file": "verbs.zil",
   "line": 344,
   "endLine": 349,
   "source": "<ROUTINE KILL-INTERRUPTS ()\n\t <DISABLE <INT I-MAN-LEAVES>>\n\t <DISABLE <INT I-MAN-RETURNS>>\n\t <DISABLE <INT I-VIEW-SNAP>>\n\t <DISABLE <INT I-FOLIN>>\n\t <RTRUE>>"
  },
  "V-SCORE": {
   "name": "V-SCORE",
   "file": "verbs.zil",
   "line": 200,
   "endLine": 207,
   "source": "<ROUTINE V-SCORE (\"OPTIONAL\" (ASK? T))\n\t #DECL ((ASK?) <OR ATOM FALSE>)\n\t <TELL \"Your potential is \" N ,SCORE>\n\t <TELL \" of a possible \" N ,SCORE-MAX \", in \">\n\t <TELL N ,MOVES>\n\t <COND (<1? ,MOVES> <TELL \" move.\">) (ELSE <TELL \" moves.\">)>\n\t <CRLF>\n\t ,SCORE>"
  },
  "TM-HOLLOW-F": {
   "name": "TM-HOLLOW-F",
   "file": "3actions.zil",
   "line": 2311,
   "endLine": 2324,
   "source": "<ROUTINE TM-HOLLOW-F ()\n\t <COND (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSI ,TM-HOLLOW>>\n\t\t<PERFORM ,V?PUT-UNDER ,PRSO ,TM-SEAT>\n\t\t<RTRUE>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<PERFORM ,V?LOOK-UNDER ,TM-SEAT>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSO ,TM-HOLLOW>\n\t\t<PERFORM ,PRSA ,TM-SEAT ,PRSI>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSI ,TM-HOLLOW>\n\t\t<PERFORM ,PRSA ,PRSO ,TM-SEAT>\n\t\t<RTRUE>)>>"
  },
  "IRON-DOOR-F": {
   "name": "IRON-DOOR-F",
   "file": "tm.zil",
   "line": 338,
   "endLine": 345,
   "source": "<ROUTINE IRON-DOOR-F ()\n\t <COND (<VERB? OPEN UNLOCK THROUGH>\n\t        <COND (<L? ,YEAR ,YEAR-PRESENT>\n\t\t       <TELL\n\"The iron door is locked from the outside.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"The iron door is rusted shut and cannot be opened.\" CR>)>)>>"
  },
  "I-CLEFT": {
   "name": "I-CLEFT",
   "file": "tm.zil",
   "line": 349,
   "endLine": 375,
   "source": "<ROUTINE I-CLEFT ()\n\t <COND (<OR <EQUAL? ,HERE ,ZORK-IV ,ROOM-8 ,TIMBER-ROOM>\n\t\t    <EQUAL? ,HERE ,LOWER-SHAFT ,LADDER-BOTTOM ,LADDER-TOP>>\n\t\t<TELL\n\"You feel a mild tremor from within the earth which passes quickly.\" CR>)\n\t       (T\n\t\t<TELL\n\"There is a great tremor from within the earth. The entire dungeon shakes\nviolently and loose debris falls from above you.\" CR>)>\n\t <COND (<==? ,HERE ,MUSEUM-ANTE>\n\t\t<TELL\n\"To the east, next to the great iron door, a cleft opens up,\nrevealing an open area behind!\" CR>)\n\t       (<==? ,HERE ,AQ-VIEW>\n\t\t<TELL\n\"One of the giant pillars supporting the aqueduct collapses in a pile\nof smoke and rubble!\" CR>)\n\t       (<EQUAL? ,HERE ,AQ-2 ,AQ-3>\n\t\t<TELL\n\"The channel beneath your feet trembles. Then the channel just to the \">\n\t\t<COND (<==? ,HERE ,AQ-2> <TELL \"north\">)\n\t\t      (T <TELL \"south\">)>\n\t\t<TELL \" collapses and falls into the chasm!\" CR>)>\n\t <SETG CLEFT-FLAG T>\n\t <FCLEAR ,CLEFT ,INVISIBLE>\n\t <SETG AQ-FLAG <>>\n\t <RTRUE>>"
  },
  "CLEFT-F": {
   "name": "CLEFT-F",
   "file": "tm.zil",
   "line": 377,
   "endLine": 379,
   "source": "<ROUTINE CLEFT-F ()\n\t <COND (<NOT <==? ,YEAR ,YEAR-PRESENT>>\n\t\t<TELL \"There is no cleft here.\" CR>)>>"
  },
  "MUSEUM-ANTE-F": {
   "name": "MUSEUM-ANTE-F",
   "file": "tm.zil",
   "line": 381,
   "endLine": 391,
   "source": "<ROUTINE MUSEUM-ANTE-F (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<COND (,CLEFT-FLAG\n\t\t       <TELL\n\"This is the south end of a monumental hall, full of debris from\na recent earthquake. To the east is a great iron door, rusted shut. To its\nright, however, is a gaping cleft in the rock and behind, a cleared area.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"You are in the southern half of a monumental hall. To the east lies\na tremendous iron door which appears to be rusted shut.\" CR>)>)>>"
  },
  "DDESC": {
   "name": "DDESC",
   "file": "tm.zil",
   "line": 393,
   "endLine": 398,
   "source": "<ROUTINE DDESC (STR1 DOOR STR2)\n\t #DECL ((STR1) STRING (DOOR) OBJECT (STR2) <OR FALSE STRING>)\n\t <TELL .STR1>\n\t <COND (<FSET? .DOOR ,OPENBIT> <TELL \"open\">)\n\t       (T <TELL \"closed\">)>\n\t <TELL .STR2 CR>>"
  },
  "MUSEUM-ENTRANCE-F": {
   "name": "MUSEUM-ENTRANCE-F",
   "file": "tm.zil",
   "line": 400,
   "endLine": 426,
   "source": "<ROUTINE MUSEUM-ENTRANCE-F (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<COND (<FSET? ,CAGE ,INVISIBLE>\n\t\t       <TELL\n\"This is an entrance hall of some sort, judging by the grand iron\ndoor to the west, and the ornate stone and wooden doors which lead to the east\nand north, respectively. A few wide steps lead south.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"This is the entrance to the Royal Museum, the finest and grandest in the\nGreat Underground Empire. To the south, down a few steps, is the entrance\nto the Royal Puzzle and to the east, through a stone door, is the Royal\nJewel Collection. A wooden door to the north is \">\n\t\t      <TELL <COND (<FSET? ,WOODEN-DOOR ,OPENBIT> \"open\")\n\t\t                  (T \"closed\")> \"\nand leads to the Museum of Technology. \">\n\t\t      <COND (<==? ,YEAR ,YEAR-PRESENT>\n\t\t\t     <TELL\n\"To the west is a great iron door, rusted shut. To its left, however, is a\ncleft in the rock providing an exit from the museum.\" CR>)\n\t\t\t    (<L? ,YEAR ,YEAR-PRESENT>\n\t\t\t     <TELL\n\"To the west is a great iron door, rusted shut.\" CR>)\n\t\t\t    (T\n\t\t\t     <TELL\n\"To the west is a great iron door, rusted shut. The cleft in the rock,\npresent when you started, has filled in with rubble.\" CR>)>)>)>>"
  },
  "TIME-MACHINE-F": {
   "name": "TIME-MACHINE-F",
   "file": "tm.zil",
   "line": 430,
   "endLine": 483,
   "source": "<ROUTINE TIME-MACHINE-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-OBJDESC>\n\t\t<TELL\n\"Directly in front of you is a large golden machine, which has a seat with a\nconsole in front. On the console is a single button and a dial connected to\na three-digit display which reads \" N ,TM-YEAR\n\". The machine is suprisingly shiny and shows few signs of age.\" CR>)\n\t       (<AND <==? .RARG ,M-END> <VERB? PUT> <==? ,PRSI ,TIME-MACHINE>>\n\t\t<TELL\n\"You can't put anything on or inside the machine itself.\" CR>)\n\t       (<AND <==? .RARG ,M-BEG> <VERB? MOVE>>\n\t\t<TELL\n\"You might be able to move the machine by pushing it.\" CR>)\n\t       (<AND <==? .RARG ,M-BEG>\n\t\t     <VERB? PUSH-TO>\n\t\t     <==? ,PRSO ,TIME-MACHINE>>\n\t\t<TELL \"That would be a good trick from inside it.\" CR>)\n\t       (<AND <==? .RARG ,M-END> <==? ,PRSO ,TIME-MACHINE>>\n\t\t<COND (<VERB? OPEN CLOSE>\n\t\t       <TELL \"This is a machine, not a box.\" CR>)\n\t\t      (<VERB? EXAMINE>\n\t\t       <TELL\n\"The machine consists of a seat and a console containing one small button\nand a dial connected to a display which reads \" N ,TM-YEAR \".\" CR>)\n\t\t      (<AND <VERB? BOARD> <FIRST? ,TM-SEAT>>\n\t\t       <TELL \"That will be somewhat uncomfortable!\" CR>)\n\t\t      (<VERB? TAKE RAISE>\n\t\t       <TELL\n\"The machine must weigh hundreds of pounds and cannot be carried.\" CR>)\n\t\t      (<VERB? PUSH>\n\t\t       <TELL\n\"You should specify in which direction to push the machine.\" CR>)\n\t\t      (<VERB? PUSH-TO>\n\t\t       <COND (<NOT <==? <DO-WALK ,P-DIRECTION> ,M-FATAL>>\n\t\t\t      <TELL\n\"With some effort, you push the machine into the room with you.\" CR>\n\t\t\t      <COND (<EQUAL? ,HERE ,CP-ANTE ,MID-CP-ANTE>\n\t\t\t\t     <TELL\n\"However, the machine seems to have sustained some damage as a result\nof going over the stairs.\" CR>\n\t\t\t\t     <SETG MACHINE-DAMAGED T>)\n\t\t\t\t    (<==? ,HERE ,MUSEUM-ANTE>\n\t\t\t\t     <TELL\n\"Pushing the machine through the cleft seems to have damaged it.\" CR>\n\t\t\t\t     <SETG MACHINE-DAMAGED T>)>\n\t\t\t      <MOVE ,TIME-MACHINE ,HERE>)>\n\t\t       <RTRUE>)>)\n\t       (<NOT <==? .RARG ,M-BEG>> <RFALSE>)\n\t       (<VERB? WALK>\n\t\t<TELL \"You're not going anywhere in this heap.\" CR>)\n\t       (<AND <VERB? TAKE PUT MOVE PUSH OPEN CLOSE>\n\t\t     <NOT <HELD? ,PRSO>>\n\t\t     <NOT <IN? ,PRSO ,TIME-MACHINE>>>\n\t\t<TELL \"You can't do that from inside the machine.\" CR>)>>"
  },
  "TM-SEAT-F": {
   "name": "TM-SEAT-F",
   "file": "tm.zil",
   "line": 487,
   "endLine": 509,
   "source": "<ROUTINE TM-SEAT-F ()\n\t <COND (<VERB? CLIMB-ON BOARD>\n\t\t<PERFORM ,V?BOARD ,TIME-MACHINE>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUT-UNDER PUT-BEHIND> <==? ,PRSI ,TM-SEAT>>\n\t\t<COND (<==? ,PRSO ,RING>\n\t\t       <TELL \"The ring is concealed underneath the seat.\" CR>\n\t\t       <SETG RING-CONCEALED T>\n\t\t       <REMOVE ,RING>)\n\t\t      (T\n\t\t       <TELL\n\"It's too big to hide under the seat.\" CR>)>)\n\t       (<VERB? RUB>\n\t\t<TELL \"There's nothing odd about the feel of the seat.\" CR>)\n\t       (<VERB? LOOK-UNDER RAISE MOVE>\n\t\t<COND (,RING-CONCEALED\n\t\t       <TELL\n\"You find the ring under the seat and put it on your finger.\" CR>\n\t\t       <MOVE ,RING ,WINNER>\n\t\t       <SETG RING-CONCEALED <>>\n\t\t       <RTRUE>)\n\t\t      (T <TELL\n\"You notice a small hollow area under the seat.\" CR>)>)>>"
  },
  "TM-DIAL-F": {
   "name": "TM-DIAL-F",
   "file": "tm.zil",
   "line": 511,
   "endLine": 523,
   "source": "<ROUTINE TM-DIAL-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"The dial is set to \" N ,TM-YEAR \".\" CR>)\n\t       (<VERB? TURN>\n\t\t<COND (<==? ,PRSI ,INTNUM>\n\t\t       <COND (<G? ,P-NUMBER 999>\n\t\t\t      <TELL \"You can't set it beyond 999.\" CR>)\n\t\t\t     (T\n\t\t\t      <SETG TM-YEAR ,P-NUMBER>\n\t\t\t      <TELL \"The dial is set to \" N ,TM-YEAR \".\" CR>)>)\n\t\t      (<NOT ,PRSI>\n\t\t       <TELL \"You have to say what to turn it to!\" CR>)\n\t\t      (T <TELL \"You can't do that!\" CR>)>)>>"
  },
  "TM-BUTTON-F": {
   "name": "TM-BUTTON-F",
   "file": "tm.zil",
   "line": 527,
   "endLine": 579,
   "source": "<ROUTINE TM-BUTTON-F ()\n\t <COND (<VERB? PUSH>\n\t\t<COND (<AND <==? ,TM-YEAR ,YEAR-BUILT> <NOT ,TM-POINT>>\n\t\t       <SETG SCORE <+ ,SCORE 1>>\n\t\t       <SETG TM-POINT T>)>\n\t\t<COND (<OR ,MACHINE-DAMAGED\n\t\t           <NOT <IN? ,WINNER ,TIME-MACHINE>>>\n\t\t       <TELL \"Nothing seems to have happened.\" CR>)\n\t\t      (<L? ,TM-YEAR ,YEAR-BUILT>\n\t\t       <REALLY-DEAD\n\"You experience a period of disorientation. The area around you seems\nto be solidifying! Rock formations close in on you and you become\nengulfed in stone!\">)\n\t\t      (<==? ,YEAR ,TM-YEAR>\n\t\t       <TELL \"Nothing seems to have happened.\" CR>)\n\t\t      (<L? ,TM-YEAR ,YEAR-CLOSED>\n\t\t       <TELL\n\"You experience a brief period of disorientation. When your vision returns,\">\n\t\t       <COND (<EQUAL? ,HERE ,MUSEUM-ENTRANCE\n\t\t\t\t      ,MID-MUSEUM-ENTRANCE\n\t\t\t\t      ,OLD-MUSEUM-ENTRANCE>\n\t\t\t      <COND (<==? ,TM-YEAR ,YEAR-CAGED>\n\t\t\t\t     <TELL \"\nyou are surrounded by a number of heavily armed guards, the dress and\nspeech of which seem strange and unfamiliar. A commotion starts at a door\nto the east and a person with a flat head, wearing a gaudy crown and a purple\nrobe, bursts into the room.\" CR>\n\t\t\t\t     <FLATHEAD-SENTENCE>)\n\t\t\t\t    (T\n\t\t\t\t     <GUARDS-KILL>)>)\n\t\t\t     (<EQUAL? ,HERE ,JEWEL-ROOM ,MID-JEWEL-ROOM\n\t\t\t\t            ,OLD-JEWEL-ROOM>\n\t\t\t      <COND (<==? ,TM-YEAR ,YEAR-CAGED>\n\t\t\t\t     <TELL \"\nyou find yourself in the middle of some kind of ceremony, with a strange\nflat-headed man wearing royal vestments about to break a bottle on the bars\nof an iron cage containing magnificent jewels. He appears pleased\nby your presence. \">\n\t\t\t\t     <FLATHEAD-SENTENCE>)\n\t\t\t\t    (<G? ,TM-YEAR ,YEAR-CAGED>\n\t\t\t\t     <GUARDS-KILL>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL ,SURROUNDINGS-CHANGED CR>\n\t\t\t\t     <TGOTO ,OLD-JEWEL-ROOM>)>)\n\t\t\t     (<EQUAL? ,HERE ,TECH-MUSEUM ,MID-TECH-MUSEUM\n\t\t\t\t            ,OLD-TECH-MUSEUM>\n\t\t\t      <COND (<NOT <==? ,TM-YEAR ,YEAR-BUILT>>\n\t\t\t\t     <GUARDS-KILL>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL ,SURROUNDINGS-CHANGED CR>\n\t\t\t\t     <TGOTO ,OLD-TECH-MUSEUM>)>)>)\n\t\t      (T\n\t\t       <HAPPY-NEW-YEAR>)>)>>"
  },
  "HAPPY-NEW-YEAR": {
   "name": "HAPPY-NEW-YEAR",
   "file": "tm.zil",
   "line": 585,
   "endLine": 597,
   "source": "<ROUTINE HAPPY-NEW-YEAR ()\n\t <TELL\n\"You experience a brief period of disorientation. When your vision returns,\nyour surroundings appear somewhat altered.\" CR>\n\t <COND (<EQUAL? ,HERE ,OLD-JEWEL-ROOM ,MID-JEWEL-ROOM ,JEWEL-ROOM>\n\t\t<COND (<L? ,TM-YEAR ,YEAR-PRESENT> <TGOTO ,MID-JEWEL-ROOM>)\n\t\t      (T <TGOTO ,JEWEL-ROOM>)>)\n\t       (<EQUAL? ,HERE ,OLD-TECH-MUSEUM ,MID-TECH-MUSEUM\n\t\t\t      ,TECH-MUSEUM>\n\t\t<COND (<L? ,TM-YEAR ,YEAR-PRESENT> <TGOTO ,MID-TECH-MUSEUM>)\n\t\t      (T <TGOTO ,TECH-MUSEUM>)>)\n\t       (<L? ,TM-YEAR ,YEAR-PRESENT> <TGOTO ,MID-MUSEUM-ENTRANCE>)\n\t       (T <TGOTO ,MUSEUM-ENTRANCE>)>>"
  },
  "I-SNAP": {
   "name": "I-SNAP",
   "file": "tm.zil",
   "line": 601,
   "endLine": 608,
   "source": "<ROUTINE I-SNAP ()\n\t <COND (<==? ,YEAR ,YEAR-PRESENT>\n\t\t<RFALSE>)>\n\t <SETG TM-YEAR ,YEAR-PRESENT>\n\t <TELL\n\"You start to feel light-headed and quickly become completely disoriented.\nWhen your head clears, you realize that your surroundings have changed.\" CR>\n\t <TGOTO ,SNAP-LOC T>>"
  },
  "MOVE-JEWELS": {
   "name": "MOVE-JEWELS",
   "file": "tm.zil",
   "line": 610,
   "endLine": 623,
   "source": "<ROUTINE MOVE-JEWELS ()\n\t <COND (,RING-STOLEN <RTRUE>)>\n\t <COND (<==? ,TM-YEAR ,YEAR-BUILT>\n\t\t<MOVE ,PEDESTAL ,OLD-JEWEL-ROOM>)\n\t       (<L? ,TM-YEAR ,YEAR-PRESENT>\n\t\t<MOVE ,PEDESTAL ,MID-JEWEL-ROOM>)\n\t       (T <MOVE ,PEDESTAL ,JEWEL-ROOM>)>\n\t <MOVE ,SCEPTRE ,PEDESTAL>\n\t <FSET ,SCEPTRE ,NDESCBIT>\n\t <MOVE ,JEWELLED-KNIFE ,PEDESTAL>\n\t <FSET ,JEWELLED-KNIFE ,NDESCBIT>\n\t <COND (<NOT ,RING-CONCEALED>\n\t\t<MOVE ,RING ,PEDESTAL>\n\t\t<FSET ,RING ,NDESCBIT>)>>"
  },
  "TGOTO": {
   "name": "TGOTO",
   "file": "tm.zil",
   "line": 625,
   "endLine": 693,
   "source": "<ROUTINE TGOTO (\"OPTIONAL\" (RM <>) (SNAP <>))\n\t <SETG MOVES <+ ,MOVES 1>>\n\t <QUEUE I-GUARDS-LEAVE 0>\n\t <SETG INVIS <>>\n\t <COND (<G? ,YEAR ,YEAR-BUILT>\n\t\t<SETG GUARDS-PRESENT T>)>\n\t <COND (<==? ,YEAR ,YEAR-PRESENT>\n\t\t<SETG SNAP-LOC ,HERE>\n\t\t<ENABLE <QUEUE I-SNAP 40>>)>\n\t <COND (<==? ,TM-YEAR ,YEAR-PRESENT>\n\t\t<SETG CLEFT-FLAG T>)\n\t       (T <SETG CLEFT-FLAG <>>)>\n\t <FCLEAR ,JEWEL-DOOR ,OPENBIT>\n\t <FCLEAR ,WOODEN-DOOR ,OPENBIT>\n\t <FCLEAR ,IRON-DOOR ,OPENBIT>\n\t <COND (<==? ,YEAR ,YEAR-BUILT>\n\t\t<COND (<AND ,RING-CONCEALED\n\t\t\t    <IN? ,TIME-MACHINE ,OLD-TECH-MUSEUM>\n\t\t\t    <IN? ,SCEPTRE ,PEDESTAL>\n\t\t\t    <IN? ,JEWELLED-KNIFE ,PEDESTAL>>\n\t\t       <SETG RING-STOLEN T>\n\t\t       <FSET ,CAGE ,INVISIBLE>\n\t\t       <FSET ,PEDESTAL ,INVISIBLE>\n\t\t       <REMOVE ,SCEPTRE>\n\t\t       <REMOVE ,JEWELLED-KNIFE>)\n\t\t      (<OR <NOT <IN? ,TIME-MACHINE ,OLD-TECH-MUSEUM>>\n\t\t\t   ,RING-CONCEALED>\n\t\t       <SETG CLUMSY-ROBBERY T>\n\t\t       <REMOVE ,TIME-MACHINE>)\n\t\t      (<OR <NOT <IN? ,RING ,PEDESTAL>>\n\t\t\t   <NOT <IN? ,SCEPTRE ,PEDESTAL>>\n\t\t\t   <NOT <IN? ,JEWELLED-KNIFE ,PEDESTAL>>>\n\t\t       <SETG MYSTERY T>)>)>\n\t <COND (<==? ,TM-YEAR ,YEAR-BUILT>\n\t\t<SETG MYSTERY <>>\n\t\t<SETG CLUMSY-ROBBERY <>>)>\n\t <SETG YEAR ,TM-YEAR>\n\t <MOVE-TM-OBJECTS>\n\t <MOVE-JEWELS>\n\t <MOVE ,WINNER ,HERE>\n\t <GOTO .RM <>>\n\t <COND (<==? ,YEAR ,YEAR-BUILT>\n\t\t<MOVE ,TIME-MACHINE ,OLD-TECH-MUSEUM>\n\t\t<MOVE ,SPINNER ,OLD-TECH-MUSEUM>\n\t\t<MOVE ,PRESSURIZER ,OLD-TECH-MUSEUM>\n\t\t<MOVE ,TECH-PLAQUE ,OLD-TECH-MUSEUM>)\n\t       (<L? ,YEAR ,YEAR-PRESENT>\n\t\t<COND (<NOT ,CLUMSY-ROBBERY>\n\t\t       <MOVE ,TIME-MACHINE ,MID-TECH-MUSEUM>)>\n\t\t<MOVE ,SPINNER ,MID-TECH-MUSEUM>\n\t\t<MOVE ,PRESSURIZER ,MID-TECH-MUSEUM>\n\t\t<MOVE ,TECH-PLAQUE ,MID-TECH-MUSEUM>\n\t\t<MOVE ,CAGE ,MID-JEWEL-ROOM>)\n\t       (T\n\t\t<MOVE ,TIME-MACHINE ,TECH-MUSEUM>\n\t\t<MOVE ,SPINNER ,TECH-MUSEUM>\n\t\t<MOVE ,PRESSURIZER ,TECH-MUSEUM>\n\t\t<MOVE ,TECH-PLAQUE ,TECH-MUSEUM>\n\t\t<MOVE ,CAGE ,JEWEL-ROOM>)>\n\t <COND (<OR ,CLUMSY-ROBBERY\n\t\t    <NOT <EQUAL? ,HERE ,TECH-MUSEUM\n\t\t\t\t ,MID-TECH-MUSEUM\n\t\t\t\t ,OLD-TECH-MUSEUM>>>\n\t\t<COND (<NOT .SNAP>\n\t\t       <TELL\n\"You notice that the golden machine has disappeared!\" CR>)>)\n\t       (T <MOVE ,WINNER ,TIME-MACHINE>)>\n\t <COND (,CLUMSY-ROBBERY <REMOVE ,TIME-MACHINE>)>\n\t <RTRUE>>"
  },
  "MOVE-TM-OBJECTS": {
   "name": "MOVE-TM-OBJECTS",
   "file": "tm.zil",
   "line": 695,
   "endLine": 724,
   "source": "<ROUTINE MOVE-TM-OBJECTS (\"AUX\" F (MFLG <>) (WFLG <>) N)\n\t <SET F <FIRST? ,TIME-MACHINE>>\n\t <COND (.F\n\t        <REPEAT ()\n\t\t\t<COND (<OR <EQUAL? .F ,TM-DIAL ,TM-SEAT ,TM-BUTTON>\n\t\t\t\t   <EQUAL? .F ,PLAYER>> T)\n\t\t\t      (<NOT .MFLG>\n\t\t\t       <SET MFLG T>\n\t\t\t       <TELL\n\"You notice that everything in the machine is gone\">)>\n\t\t\t<SET N <NEXT? .F>>\n\t\t\t<COND (<NOT <EQUAL? .F ,TM-DIAL ,TM-SEAT ,TM-BUTTON>>\n\t\t\t       <MOVE .F ,HERE>)>\n\t\t\t<SET F .N>\n\t\t\t<COND (<NOT .F> <RETURN>)>>)>\n\t <SET F <FIRST? ,WINNER>>\n\t <COND (.F\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT .WFLG>\n\t\t\t       <SET WFLG T>\n\t\t\t       <COND (.MFLG\n\t\t\t\t      <TELL \": come to mention\nit, everything you were holding has vanished too\">)\n\t\t\t\t     (T <TELL\n\"You notice that everything you were holding is gone\">)>)>\n\t\t\t<SET N <NEXT? .F>>\n\t\t\t<MOVE .F ,HERE>\n\t\t\t<SET F .N>\n\t\t\t<COND (<NOT .F> <RETURN>)>>)>\n\t <COND (<OR .MFLG .WFLG> <TELL \"!\" CR>)>>"
  },
  "GUARDS-KILL": {
   "name": "GUARDS-KILL",
   "file": "tm.zil",
   "line": 726,
   "endLine": 728,
   "source": "<ROUTINE GUARDS-KILL ()\n\t <TELL <RANDOM-ELEMENT ,GUARD-KILLERS> CR>\n\t <REALLY-DEAD \" \">>"
  },
  "FLATHEAD-SENTENCE": {
   "name": "FLATHEAD-SENTENCE",
   "file": "tm.zil",
   "line": 746,
   "endLine": 758,
   "source": "<ROUTINE FLATHEAD-SENTENCE ()\n\t <REALLY-DEAD \"He speaks loudly, nearly deafening the poor civil\nservant whose duty it is to see that his wishes are carried out. \\\"Aha! A\nthief! Didn't I tell you that we needed more security! But, no! You all\nsaid my idea to build the museum under two miles of mountain and surrounded\nby five hundred feet of steel was impractical! Now, what to do with this ...\nintruder? I have it! We'll build a tremendous fortress on the highest mountain\npeak, with one narrow ladder stretching thousands of feet to the pinnacle.\nThere he will stay for the rest of his life!\\\" His brow-beaten assistant\nhesitates. \\\"Don't you think, Your Lordship, that your plan is a bit, well,\na bit much?\\\" Flathead gives it a second's thought. \\\"No, not really.\\\" he\nsays, and you are led away. A few years later, your prison is finished. You\nare taken there, and spend the rest of your life in misery.\">>"
  },
  "REALLY-DEAD": {
   "name": "REALLY-DEAD",
   "file": "tm.zil",
   "line": 760,
   "endLine": 766,
   "source": "<ROUTINE REALLY-DEAD (STR)\n\t <TELL .STR CR \"||\n\n  **  You have died  **||\n\n\">\n\t <QUIT>>"
  },
  "HEAR-FLATHEAD": {
   "name": "HEAR-FLATHEAD",
   "file": "tm.zil",
   "line": 776,
   "endLine": 786,
   "source": "<ROUTINE HEAR-FLATHEAD ()\n\t <SETG FLATHEAD-HEARD T>\n\t <TELL\n\"One particularly loud and grating voice can be heard above the\nothers outside the room. \\\"Very nice! Very nice! Not enough security, but\nvery nice! Now, Lord Feepness, pay attention! I've been thinking that what\nwe need is a dam, a tremendous dam to control the Frigid River, with\nthousands of gates. We shall call it ... Flood Control Dam #2. No, not\nquite right. Aha! Flood Control Dam #3.\\\" \\\"Pardon me, my Lord, but wouldn't\nthat be just a tad excessive?\\\" \\\"Nonsense! Now, let me tell you my idea for\nhollowing out volcanoes...\\\" With that, the voices trail out nothingness.\" CR>>"
  },
  "OLD-TECH-MUSEUM-F": {
   "name": "OLD-TECH-MUSEUM-F",
   "file": "tm.zil",
   "line": 788,
   "endLine": 837,
   "source": "<ROUTINE OLD-TECH-MUSEUM-F (RARG)\n\t <COND (<AND <==? .RARG ,M-LOOK> <==? ,HERE ,OLD-JEWEL-ROOM>>\n\t\t<TELL\n\"You are in a high-ceilinged chamber, in the center of which\nis a pedestal which \">\n\t\t<COND (<NOT ,RING-STOLEN>\n\t\t       <TELL \"is the intended home of the Crown\nJewels of the Great Underground Empire: a jewelled knife, a golden ring, and\nthe royal sceptre.\">\n\t\t       <COND (<OR <NOT <IN? ,SCEPTRE ,PEDESTAL>>\n\t\t\t\t  <NOT <IN? ,RING ,PEDESTAL>>\n\t\t\t\t  <NOT <IN? ,JEWELLED-KNIFE ,PEDESTAL>>>\n\t\t\t      <TELL\n\" Not all of the jewels are in place, however.\">)>)\n\t\t      (T <TELL \"is bare.\">)>\n\t\t<TELL \"\nThe room is, by appearances, unfinished.\" CR>\n\t\t<COND (,GUARDS-PRESENT\n\t\t       <TELL ,HEAR-VOICES CR>)>\n\t\t<RTRUE>)\n\t       (<==? .RARG ,M-LOOK>\n\t\t<COND (<==? ,HERE ,OLD-TECH-MUSEUM>\n\t\t       <TELL\n\"You are in a large, unfinished room, probably intended to be a\npart of the Royal Museum.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"This appears to be an unfinished entranceway to the Royal Museum. There are\ndoors to the east and north, and a blind stairway to the south. A heavy iron\ndoor to the west is closed and locked.\" CR>)>\n\t\t<COND (,GUARDS-PRESENT\n\t\t       <TELL ,HEAR-VOICES CR>)>\n\t\t<RTRUE>)\n\t       (<AND <==? .RARG ,M-END>\n\t\t     <NOT ,FLATHEAD-HEARD>\n\t\t     ,GUARDS-PRESENT\n\t\t     <PROB 6>>\n\t\t<HEAR-FLATHEAD>)\n\t       (<AND <==? .RARG ,M-ENTER> ,GUARDS-PRESENT>\n\t\t<ENABLE <QUEUE I-GUARDS-LEAVE <+ 3 <RANDOM 12>>>>)\n\t       (<AND <==? .RARG ,M-BEG>\n\t\t     <VERB? OPEN>\n\t\t     <EQUAL? ,PRSO ,WOODEN-DOOR ,JEWEL-DOOR>\n\t\t     ,GUARDS-PRESENT>\n\t\t<TELL\n\"You open the door ever so slightly and see dozens of armed officials.\nYou shut the door quickly, realizing that you would be killed\nin an instant if you left the room.\" CR>)\n\t       (<AND <==? .RARG ,M-BEG> ,GUARDS-PRESENT <PROB 3>>\n\t\t<GUARD-CAUGHT>)>>"
  },
  "I-GUARDS-LEAVE": {
   "name": "I-GUARDS-LEAVE",
   "file": "tm.zil",
   "line": 843,
   "endLine": 848,
   "source": "<ROUTINE I-GUARDS-LEAVE ()\n\t <SETG GUARDS-PRESENT <>>\n\t <TELL\n\"You hear, from outside the door, guards marching away, their voices fading.\nAfter a few moments, a booming crash signals the close of what must be a\ntremendous door. Then there is silence.\" CR>>"
  },
  "GUARD-CAUGHT": {
   "name": "GUARD-CAUGHT",
   "file": "tm.zil",
   "line": 850,
   "endLine": 854,
   "source": "<ROUTINE GUARD-CAUGHT ()\n\t <REALLY-DEAD\n\"A particularly vicious-looking guard enters the room and sees you.\nHe grinds his teeth unpleasantly, pulls a waffle out of his\ngarment, and vaporizes you with a flick of his finger.\">>"
  },
  "ROBOT-F": {
   "name": "ROBOT-F",
   "file": "tm.zil",
   "line": 862,
   "endLine": 865,
   "source": "<ROUTINE ROBOT-F ()\n\t <COND (<VERB? FOLLOW>\n\t\t<TELL \"It moved quickly and left the door closed.\" CR>)\n\t       (T <TELL \"There is no robot here.\" CR>)>>"
  },
  "JEWEL-ROOM-F": {
   "name": "JEWEL-ROOM-F",
   "file": "tm.zil",
   "line": 867,
   "endLine": 893,
   "source": "<ROUTINE JEWEL-ROOM-F (RARG)\n\t <COND (<AND <==? .RARG ,M-END>\n\t\t     <IN? ,TIME-MACHINE ,HERE>\n\t\t     <PROB 4>>\n\t\t<TELL\n\"An odd robot-like device glides in, dusting the floor as it moves. Its\nhead gyrates briefly as it scans the machine. \\\"Shame. Shame,\\\"\nit says, rather tinnily. \\\"Someone has been tampering with the machines\nagain.\\\" Six beady mechanical eyes focus on you as the robot picks up the\ngold machine. \\\"Hands off, adventurer!\\\" it says as it leaves the\nroom, closing the door behind it.\" CR>\n\t\t<FCLEAR ,JEWEL-DOOR ,OPENBIT>\n\t\t<FCLEAR ,WOODEN-DOOR ,OPENBIT>\n\t\t<MOVE ,TIME-MACHINE ,TECH-MUSEUM>)\n\t       (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are in a high-ceilinged chamber\">\n\t\t<COND (<NOT <FSET? ,CAGE ,INVISIBLE>>\n\t\t       <TELL \" in the middle of which\nsits a tall, round steel cage, which is securely locked. In the\nmiddle of the cage is a pedestal on which sit the Crown Jewels\nof the Great Underground Empire: a sceptre, a jewelled knife, and a golden\nring. A small bronze plaque, now tarnished, is on the cage.\" CR>)\n\t\t      (T\n\t\t       <TELL \" in the middle of which is a bare\npedestal. The room is unfinished with no\nindication of its purpose. A small plaque is fastened to a wall.\" CR>)>)>>"
  },
  "CROWN-JEWELS-F": {
   "name": "CROWN-JEWELS-F",
   "file": "tm.zil",
   "line": 898,
   "endLine": 916,
   "source": "<ROUTINE CROWN-JEWELS-F ()\n\t <COND (<VERB? TAKE>\n\t\t<COND (<HELD? ,PRSO> <RFALSE>)\n\t\t      (<OR <==? ,YEAR ,YEAR-BUILT>\n\t\t\t   <FSET? ,CAGE ,INVISIBLE>>\n\t\t       <FCLEAR ,PRSO ,NDESCBIT>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <TELL\n\"The jewels are inside a locked cage.\" CR>)>)\n\t       (<AND <VERB? PUT>\n\t\t     <==? ,PRSI ,PEDESTAL>\n\t\t     <IN? ,PRSO ,WINNER>>\n\t\t<TELL \"The \" D ,PRSO \" is now resting on the pedestal.\" CR>\n\t\t<MOVE ,PRSO ,PEDESTAL>\n\t\t<FSET ,PRSO ,NDESCBIT>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUT> <NOT <HELD? ,PRSO>>>\n\t\t<TELL \"You don't have the \" D ,PRSO \".\" CR>)>>"
  },
  "TECH-MUSEUM-F": {
   "name": "TECH-MUSEUM-F",
   "file": "tm.zil",
   "line": 918,
   "endLine": 928,
   "source": "<ROUTINE TECH-MUSEUM-F (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<COND (<FSET? ,CAGE ,INVISIBLE>\n\t\t       <DDESC\n\"This is an exhibit of Empire technology. A wooden door to the\nsouth is \" ,WOODEN-DOOR \".\">)\n\t\t      (T\n\t\t       <DDESC\n\"This is a large hall which hosted the technological exhibits of the\nGreat Underground Empire. A door to the south is \"\n,WOODEN-DOOR \".\">)>)>>"
  },
  "PLAQUE-F": {
   "name": "PLAQUE-F",
   "file": "tm.zil",
   "line": 930,
   "endLine": 971,
   "source": "<ROUTINE PLAQUE-F ()\n\t <COND (<VERB? EXAMINE READ>\n\t\t<COND (,RING-STOLEN\n\t\t       <TELL\n\"The plaque explains that this room was to be the home of the Crown Jewels\nof the Empire. However, following the unexplained disappearance of a\npriceless ring during the final stages of construction, Lord Flathead\ndecided to place the remaining jewels in a safer location.\nInterestingly, he placed his most prized possesion, an incredibly gaudy\ncrown, in a locked safe in a volcano specifically hollowed out for that\npurpose.\" CR>\n\t\t       <RTRUE>)>\n\t\t<FIXED-FONT-ON>\n\t\t<TELL\n\"|\n         Crown Jewels|\n|\n  Presented To The Royal Museum|\n      By His Gracious Lord|\n|\n        DIMWIT FLATHEAD|\n|\n|\n          Dedicated|\n         * 777 GUE *|\n|\">\n\t\t<FIXED-FONT-OFF>\n\t\t<COND (,CLUMSY-ROBBERY\n\t\t       <TELL\n\"Underneath the plaque, in small lettering, is a description of a clumsy\nattempt to steal the jewels using a time machine from the Technological\nMuseum which the curators were surprised to discover was not a non-working\nmodel. After the attempt, the machine was removed from the exhibit.\" CR>)\n\t\t      (,MYSTERY\n\t\t       <TELL\n\"Underneath the plaque, in small lettering, is a description of\na mysterious happening during the final stages of construction of\nthe Museum, in which some of the crown jewels were found displaced\nfrom their proper positions. Fortunately, nothing was missing.\nThe mystery was never solved and the museum was opened despite the objections\nof Lord Flathead that security was too lax.\" CR>)>\n\t\t<RTRUE>)>>"
  },
  "WOODEN-DOOR-F": {
   "name": "WOODEN-DOOR-F",
   "file": "tm.zil",
   "line": 973,
   "endLine": 979,
   "source": "<ROUTINE WOODEN-DOOR-F ()\n\t <COND (<AND <VERB? LISTEN> ,GUARDS-PRESENT>\n\t\t<PERFORM ,V?LISTEN ,VOICES>\n\t\t<RTRUE>)\n\t       (<AND <VERB? KNOCK> ,GUARDS-PRESENT>\n\t\t<TELL\n\"You realize that calling attention to yourself would be fatal.\" CR>)>>"
  },
  "JEWEL-DOOR-F": {
   "name": "JEWEL-DOOR-F",
   "file": "tm.zil",
   "line": 981,
   "endLine": 994,
   "source": "<ROUTINE JEWEL-DOOR-F ()\n\t <COND (<AND <VERB? KNOCK> ,GUARDS-PRESENT>\n\t        <PERFORM ,V?KNOCK ,WOODEN-DOOR>\n\t\t<RTRUE>)\n\t       (<VERB? OPEN UNLOCK>\n\t\t<COND (<FSET? ,JEWEL-DOOR ,OPENBIT>\n\t\t       <TELL \"It is already open.\" CR>)\n\t\t      (<AND <==? ,YEAR ,YEAR-BUILT>\n\t\t\t    <==? ,HERE ,OLD-MUSEUM-ENTRANCE>>\n\t\t       <TELL\n\"The door is locked, probably by the guards on their way out.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The door is now open.\" CR>\n\t\t       <FSET ,JEWEL-DOOR ,OPENBIT>)>)>>"
  },
  "CAGE-F": {
   "name": "CAGE-F",
   "file": "tm.zil",
   "line": 997,
   "endLine": 999,
   "source": "<ROUTINE CAGE-F ()\n\t <COND (<VERB? OPEN> <TELL \"The cage is locked.\" CR>)\n\t       (<VERB? CLOSE> <TELL \"The cage is already closed.\" CR>)>>"
  },
  "VOICES-F": {
   "name": "VOICES-F",
   "file": "tm.zil",
   "line": 1001,
   "endLine": 1008,
   "source": "<ROUTINE VOICES-F ()\n\t <COND (<AND ,GUARDS-PRESENT <==? ,YEAR ,YEAR-BUILT>>\n\t\t<TELL\n\"The voices are muffled by the door which (fortunately for you) separates\nyou. They seem to be in heated debate on the topic of\n\">\n\t\t<TELL <RANDOM-ELEMENT ,BLATHER> \".\" CR>)\n\t       (T <TELL \"Are you hearing things now?\" CR>)>>"
  },
  "MUSEUM-PIECES": {
   "name": "MUSEUM-PIECES",
   "file": "tm.zil",
   "line": 1018,
   "endLine": 1046,
   "source": "<ROUTINE MUSEUM-PIECES (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-OBJDESC>\n\t\t<COND (<==? ,DESC-OBJECT ,SPINNER>\n\t\t       <RTRUE>)>\n\t\t<TELL\n\"A strange grey machine, shaped somewhat like a clothes dryer, is on one side\nof the room. On the other side of the hall is a powerful-looking black\nmachine, a tight tangle of wires, pipes, and motors.|\nA plaque is mounted near the door.\">\n\t\t<COND (<L? ,YEAR ,YEAR-CLOSED>\n\t\t       <TELL\n\" The grey machine, it turns out, is a Frobozz\nMagic Pressurizer, used in the coal mines of the Empire. The black machine is\na Frobozz Magic Room Spinner. The golden machine is referred to as a\nTemporizer. All are non-working models donated by Frobozzco president John\nD. Flathead.\" CR>)\n\t\t      (T <TELL\n\" The writing is faded, however, and cannot be\nmade out clearly. The two machines seem to be in bad shape, rusting in many\nspots.\" CR>)>)\n\t       (<VERB? TAKE MOVE>\n\t\t<TELL \"It's massive and cannot even be moved.\" CR>)\n\t       (<VERB? PUSH PUSH-TO>\n\t\t<TELL \"It's too heavy to be pushed.\" CR>)\n\t       (<VERB? MUNG>\n\t\t<TELL \"It seems quite indestructible.\" CR>)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSI ,SPINNER ,PRESSURIZER>>\n\t\t<TELL \"There's no good place to put anything there.\" CR>)>>"
  },
  "TECH-PLAQUE-F": {
   "name": "TECH-PLAQUE-F",
   "file": "tm.zil",
   "line": 1048,
   "endLine": 1056,
   "source": "<ROUTINE TECH-PLAQUE-F ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL \"It's bolted to the wall.\" CR>)\n\t       (<VERB? EXAMINE READ>\n\t\t<COND (<L? ,YEAR ,YEAR-CLOSED>\n\t\t       <TELL\n\"The plaque merely identifies the machines and names their donor. They are\nnon-working models of existing state-of-the-art machinery.\" CR>)\n\t\t      (T <TELL \"The words cannot be made out.\" CR>)>)>>"
  },
  "PEDESTAL-F": {
   "name": "PEDESTAL-F",
   "file": "tm.zil",
   "line": 1058,
   "endLine": 1064,
   "source": "<ROUTINE PEDESTAL-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<COND (<FIRST? ,PEDESTAL>\n\t\t       <TELL\n\"The Royal Jewels are on the pedestal.\" CR>)>)\n\t       (<AND <VERB? PUT PUT-ON TAKE> <NOT <FSET? ,CAGE ,INVISIBLE>>>\n\t\t<TELL \"You can't reach it through the cage.\" CR>)>>"
  },
  "PICK-DIRECTION": {
   "name": "PICK-DIRECTION",
   "file": "shadow.zil",
   "line": 220,
   "endLine": 229,
   "source": "<ROUTINE PICK-DIRECTION (RM \"AUX\" (NXT 0) (CNT 0) (OFFS 0))\n\t <REPEAT ()\n\t\t <COND (<==? <SET NXT <NEXTP .RM .NXT>> 0>\n\t\t\t<RETURN>)\n\t\t       (<NOT <L? .NXT ,LOW-DIRECTION>>\n\t\t\t<COND (<NOT <EQUAL? .NXT ,P?UP ,P?DOWN>>\n\t\t\t       <SET OFFS <+ .OFFS 1>>\n\t\t\t       <PUT ,DIR-TBL .OFFS .NXT>\n\t\t\t       <SET CNT <+ .CNT 1>>)>)>>\n\t <GET ,DIR-TBL <RANDOM .CNT>>>"
  },
  "SHADOW-F": {
   "name": "SHADOW-F",
   "file": "shadow.zil",
   "line": 231,
   "endLine": 260,
   "source": "<ROUTINE SHADOW-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-OBJDESC>\n\t\t<COND (<NOT ,BLOCKED-DIR>\n\t\t       <SETG BLOCKED-DIR <PICK-DIRECTION ,HERE>>)>\n\t\t<TELL\n\"A cloaked and hooded person, carrying a sword not unlike your own,\">\n\t\t<COND (<G? ,S-STRENGTH 3>\n\t\t       <TELL \"\nis standing blocking the way to the \">\n\t\t       <TELL <LKP ,BLOCKED-DIR ,DIRS> \".\" CR>)\n\t\t      (T <TELL \"\nis here.\" CR>)>\n\t\t<TELL \"The hooded figure\" <GET ,SHADOW-DIAG ,S-STRENGTH> CR>)\n\t       (<AND <VERB? GIVE> <==? ,PRSI ,SHADOW>>\n\t\t<TELL\n\"The hooded figure isn't interested in your gifts.\" CR>)\n\t       (<HELLO? ,SHADOW>\n\t\t<TELL\n\"The hooded figure does not respond to your words.\" CR>)\n\t       (<AND <VERB? ATTACK> <==? ,PRSI ,SWORD>>\n\t\t<COND (<NOT ,SHADOW-POINT-2>\n\t\t       <SETG SCORE <+ ,SCORE 1>>\n\t\t       <SETG SHADOW-POINT-2 T>)>\n\t\t<SHADOW-ATTACK>)\n\t       (<VERB? ATTACK>\n\t\t<TELL\n\"The hooded figure ignores your feeble attack.\" CR>\n\t\t<SETG ATTACK-MODE T>\n\t\t<ENABLE <QUEUE I-CURE 10>>\n\t\t<ENABLE <QUEUE I-SHADOW-REPLY -1>>)>>"
  },
  "I-CURE": {
   "name": "I-CURE",
   "file": "shadow.zil",
   "line": 277,
   "endLine": 284,
   "source": "<ROUTINE I-CURE ()\n\t <COND (<NOT <==? ,P-STRENGTH 5>>\n\t\t<SETG P-STRENGTH <+ ,P-STRENGTH 1>>)>\n\t <COND (<NOT <==? ,S-STRENGTH 5>>\n\t\t<SETG S-STRENGTH <+ ,S-STRENGTH 1>>)>\n\t <COND (<NOT <==? <+ ,P-STRENGTH ,S-STRENGTH> 10>>\n\t\t<QUEUE I-CURE 10>)>\n\t <RFALSE>>"
  },
  "SHADOW-ATTACK": {
   "name": "SHADOW-ATTACK",
   "file": "shadow.zil",
   "line": 286,
   "endLine": 312,
   "source": "<ROUTINE SHADOW-ATTACK ()\n\t <COND (<NOT ,ATTACK-MODE>\n\t\t<ENABLE <QUEUE I-CURE 10>>\n\t\t<SETG ATTACK-MODE T>\n\t\t<ENABLE <QUEUE I-SHADOW-REPLY -1>>)>\n\t <COND (<PROB <+ <* ,P-STRENGTH 10> 10>>\n\t\t<COND (<PROB 85>\n\t\t       <SETG S-STRENGTH <- ,S-STRENGTH 1>>\n\t\t       <COND (<0? ,S-STRENGTH>\n\t\t\t      <SHADOW-DIES>\n\t\t\t      <RTRUE>)>\n\t\t       <TELL <RANDOM-ELEMENT ,P-HITS> CR>\n\t\t       <TELL \"The figure\" <GET ,SHADOW-DIAG ,S-STRENGTH> CR>)\n\t\t      (T\n\t\t       <SETG S-STRENGTH <- ,S-STRENGTH 2>>\n\t\t       <COND (<0? ,S-STRENGTH> <SETG S-STRENGTH 1>)\n\t\t\t     (<L? ,S-STRENGTH 1>\n\t\t\t      <SHADOW-DIES>\n\t\t\t      <RTRUE>)>\n\t\t       <TELL\n\"A sharp thrust and the hooded figure is badly wounded!\" CR>\n\t\t       <TELL \"The figure\" <GET ,SHADOW-DIAG ,S-STRENGTH> CR>)>)\n\t       (T\n\t\t<COND (<L? ,S-STRENGTH 2>\n\t\t       <TELL\n\"Your opponent blocks your attack with its sword.\" CR>)\n\t\t      (T <TELL <RANDOM-ELEMENT ,P-MISSES> CR>)>)>>"
  },
  "I-SHADOW-REPLY": {
   "name": "I-SHADOW-REPLY",
   "file": "shadow.zil",
   "line": 332,
   "endLine": 362,
   "source": "<ROUTINE I-SHADOW-REPLY ()\n\t <COND (<OR <NOT ,ATTACK-MODE> <NOT <IN? ,SHADOW ,HERE>>>\n                <QUEUE I-SHADOW-REPLY 0>\n\t\t<SETG ATTACK-MODE <>>\n\t\t<RFALSE>)>\n\t <COND (<AND <PROB <+ <* ,S-STRENGTH 10> 10>> <G? ,S-STRENGTH 1>>\n\t\t<COND (<PROB 90>\n\t\t       <COND (<L? <SETG P-STRENGTH <- ,P-STRENGTH 1>> 1>\n\t\t\t      <SETG P-STRENGTH 1>\n\t\t\t      <TELL\n\"The hooded figure swings its sword and sends yours flying to the ground.\nAlthough you are defenseless, the figure reaches for your sword and hands it\nback to you, nodding grimly.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL <RANDOM-ELEMENT ,S-HITS> CR>)>)\n\t\t      (T\n\t\t       <COND (<L? <SETG P-STRENGTH <- ,P-STRENGTH 2>> 1>\n\t\t\t      <JIGS-UP\n\"In your wounded state, you cannot defend yourself against your still-quick\nopponent. Slowly and carefully, the figure starts to remove its hood as you\nfall to the ground, dead.\">)\n\t\t\t     (T\n\t\t\t      <TELL\n\"A brilliant feint puts you off guard, and the hooded figure slips its\nsword between your ribs. You are hurt very badly.\" CR>)>)>)\n\t       (<L? ,S-STRENGTH 3>\n\t\t<TELL\n\"The hooded figure attempts a thrust, but its weakened state prevents\nhitting you.\" CR>)\n\t       (T\n\t\t<TELL <RANDOM-ELEMENT ,S-MISSES> CR>)>>"
  },
  "SHADOW-DIES": {
   "name": "SHADOW-DIES",
   "file": "shadow.zil",
   "line": 371,
   "endLine": 378,
   "source": "<ROUTINE SHADOW-DIES ()\n\t <TELL\n\"The hooded figure, fatally wounded, slumps to the ground. It gazes up at\nyou once, and you catch a brief glimpse of deep and sorrowful eyes. Before\nyou can react, the figure vanishes in a cloud of fetid vapor.\" CR>\n\t <REMOVE ,SHADOW>\n\t <SETG SHADOW-GONE T>\n\t <SETG BLOCKED-DIR <>>>"
  },
  "HOOD-F": {
   "name": "HOOD-F",
   "file": "shadow.zil",
   "line": 380,
   "endLine": 405,
   "source": "<ROUTINE HOOD-F ()\n\t <COND (<AND <VERB? LOOK-UNDER> <IN? ,HOOD ,SHADOW>>\n\t\t<TELL\n\"The figure's hood casts a dark shadow over its face. There is no way from\nwhere you stand to look beneath it.\" CR>)\n\t       (<AND <VERB? TAKE PUT> <IN? ,HOOD ,SHADOW>>\n\t\t<COND (<==? ,S-STRENGTH 1>\n\t\t       <TELL\n\"You slowly remove the hood from your badly wounded opponent and recoil\nin horror at the sight of your own face, weary and wounded. A faint\nsmile comes to the lips and then the face starts to change, very slowly,\ninto that of an old, wizened person. The image fades and with it the body\nof your hooded opponent. The cloak remains on the ground.\" CR>\n\t\t       <REMOVE ,SHADOW>\n\t\t       <SETG SHADOW-GONE T>\n\t\t       <MOVE ,HOOD ,WINNER>\n\t\t       <FCLEAR ,HOOD ,NDESCBIT>\n\t\t       <MOVE ,CLOAK ,HERE>\n\t\t       <FCLEAR ,CLOAK ,NDESCBIT>)\n\t\t      (<==? ,S-STRENGTH 2>\n\t\t       <TELL\n\"The hooded figure, though recovering from wounds, is strong enough to\nforce you back.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"You cannot get close enough to the hooded figure to remove the hood.\" CR>)>)>>"
  },
  "CLOAK-F": {
   "name": "CLOAK-F",
   "file": "shadow.zil",
   "line": 407,
   "endLine": 414,
   "source": "<ROUTINE CLOAK-F ()\n\t <COND (<AND <VERB? LOOK-UNDER> <IN? ,CLOAK ,SHADOW>>\n\t\t<TELL\n\"You cannot get close enough to look underneath the cloak.\" CR>)\n\t       (<AND <VERB? TAKE> <IN? ,CLOAK ,SHADOW>>\n\t\t<TELL\n\"The cloak is fastened around the neck of the hooded figure. It would be\ndifficult to remove.\" CR>)>>"
  },
  "SHADOW-ROOMS": {
   "name": "SHADOW-ROOMS",
   "file": "shadow.zil",
   "line": 418,
   "endLine": 445,
   "source": "<ROUTINE SHADOW-ROOMS (RARG)\n\t <COND (<AND <==? .RARG ,M-BEG>\n\t\t     <VERB? WALK>\n\t\t     <==? ,PRSO ,BLOCKED-DIR>>\n\t\t<TELL \"Your way is blocked by the hooded figure.\" CR>)\n\t       (<==? .RARG ,M-END>\n\t\t<COND (<NOT <IN? ,SHADOW ,HERE>>\n\t\t       <SETG BLOCKED-DIR <>>\n\t\t       <REMOVE ,SHADOW>)>\n\t\t<COND (,SHADOW-GONE <RFALSE>)\n\t\t      (<IN? ,SHADOW ,HERE>\n\t\t       <COND (<AND <PROB 30> <NOT ,ATTACK-MODE>>\n\t\t\t      <SETG ATTACK-MODE T>\n\t\t\t      <ENABLE <QUEUE I-CURE 10>>\n\t\t\t      <ENABLE <QUEUE I-SHADOW-REPLY -1>>)>)\n\t\t      (<PROB 30>\n\t\t       <TELL\n\"You can hear quiet footsteps nearby.\" CR>)\n\t\t      (<AND <PROB 30> ,LIT <G? ,S-STRENGTH 3>>\n\t\t       <SETG BLOCKED-DIR <PICK-DIRECTION ,HERE>>\n\t\t       <TELL\n\"Through the shadows, a cloaked and hooded figure appears before you,\nblocking the \">\n\t\t       <TELL <LKP ,BLOCKED-DIR ,DIRS>\n\t\t\t     \"ern exit from the room and carrying a\nbrightly glowing sword.\" CR>\n\t\t       <SHADOW-ARRIVAL>\n\t\t       <RTRUE>)>)>>"
  },
  "SHADOW-ARRIVAL": {
   "name": "SHADOW-ARRIVAL",
   "file": "shadow.zil",
   "line": 447,
   "endLine": 461,
   "source": "<ROUTINE SHADOW-ARRIVAL ()\n\t <MOVE ,SHADOW ,HERE>\n\t <COND (<NOT ,SHADOW-POINT-1>\n\t\t<SETG SCORE <+ ,SCORE 1>>\n\t\t<SETG SHADOW-POINT-1 T>)>\n\t <COND (<NOT <IN? ,SWORD ,WINNER>>\n\t\t<MOVE ,SWORD ,WINNER>\n\t\t<COND (,SWORD-IN-STONE?\n\t\t       <TELL\n\"From nowhere, the sword from the junction appears in your hand, wildly\nglowing!\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"Your sword, glowing wildly, appears in your hand!\" CR>)>\n\t\t<SETG SWORD-IN-STONE? <>>)>>"
  },
  "CREEPY-CRAWL-F": {
   "name": "CREEPY-CRAWL-F",
   "file": "shadow.zil",
   "line": 466,
   "endLine": 469,
   "source": "<ROUTINE CREEPY-CRAWL-F (RARG)\n\t <COND (<==? .RARG ,M-END>\n\t\t<SETG BLOCKED-DIR <>>\n\t\t<RTRUE>)>>"
  },
  "LEDGE-F": {
   "name": "LEDGE-F",
   "file": "shadow.zil",
   "line": 777,
   "endLine": 786,
   "source": "<ROUTINE LEDGE-F ()\n\t <COND (<AND <==? ,HERE ,CLIFF-LEDGE>\n\t\t     <VERB? THROW-OFF>\n\t\t     <==? ,PRSI ,LEDGE>>\n\t\t<COND (<NOT <IN? ,PRSO ,WINNER>>\n\t\t       <TELL \"You're not holding that!\" CR>\n\t\t       <RTRUE>)>\n\t\t<MOVE ,PRSO ,CLIFF-BASE>\n\t\t<TELL\n\"The \" D ,PRSO \" falls to the base of the cliff below.\" CR>)>> "
  },
  "WAYBREAD-F": {
   "name": "WAYBREAD-F",
   "file": "shadow.zil",
   "line": 801,
   "endLine": 806,
   "source": "<ROUTINE WAYBREAD-F ()\n\t <COND (<AND <VERB? CUT> <==? ,PRSI ,SWORD>>\n\t\t<TELL\n\"The bread is crushed rather than cut by your sword, and the crumbs scatter to\nthe wind.\" CR>\n\t\t<REMOVE ,WAYBREAD>)>>"
  },
  "STAFF-F": {
   "name": "STAFF-F",
   "file": "shadow.zil",
   "line": 847,
   "endLine": 851,
   "source": "<ROUTINE STAFF-F ()\n\t <COND (<AND <VERB? BURN> <==? ,PRSI ,TORCH>>\n\t\t<REMOVE ,PRSO>\n\t\t<JIGS-UP\n\"The staff is instantly consumed in a ball of flame. You along with it.\">)>>"
  },
  "I-MAN-APPEARS": {
   "name": "I-MAN-APPEARS",
   "file": "shadow.zil",
   "line": 888,
   "endLine": 916,
   "source": "<ROUTINE I-MAN-APPEARS ()\n\t <COND (<OR <NOT <==? ,HERE ,CLIFF-LEDGE>>\n\t\t    <NOT <EQUAL? <LOC ,CHEST> ,CLIFF-LEDGE ,WINNER>>>\n\t\t<RFALSE>)\n\t       (,CHEST-TIED\n\t\t<SETG MAN-SEEN T>\n\t\t<TELL\n\"All at once, the chest is lifted from you. Looking up, you see a\nman at the top of the cliff, pulling intently at the rope. \\\"That is\nuncommonly good of you, I do say!\\\" He chuckles unpleasantly. \\\"Oh,\nyou are stuck, aren't you. Well, I'll be right back to get you!\\\"\nHe leaves your sight.\" CR>\n\t\t<SETG CHEST-LIFTED T>\n\t\t<MOVE ,CHEST ,MAN>\n\t\t<FSET ,CHEST ,TOUCHBIT>\n\t\t<SETG ROPE-FLAG <>>\n\t\t<SETG CHEST-TIED <>>\n\t\t<ENABLE <QUEUE I-MAN-RETURNS 10>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL\n\"At the edge of the cliff above you, a man appears. He looks down at\nyou and speaks. \\\"Hello, down there! You seem to have a problem. Maybe I\ncan help you.\\\" He chuckles in an unsettling sort of way. \\\"Perhaps if you\ntied that chest to the end of the rope I might be able to drag it up for you.\nThen, I'll be more than happy to help you up!\\\" He laughs again.\" CR>\n\t\t<SETG MAN-FLAG T>\n\t\t<SETG MAN-SEEN T>\n\t\t<ENABLE <QUEUE I-MAN-PRESENT -1>>)>>"
  },
  "I-MAN-PRESENT": {
   "name": "I-MAN-PRESENT",
   "file": "shadow.zil",
   "line": 920,
   "endLine": 934,
   "source": "<ROUTINE I-MAN-PRESENT ()\n\t <COND (<OR <NOT <==? ,HERE ,CLIFF-LEDGE>>\n\t\t    <NOT ,MAN-FLAG>\n\t\t    <IN? ,CHEST ,MAN>>\n\t\t<QUEUE I-MAN-PRESENT 0>\n\t\t<SETG MAN-FLAG <>>\n\t\t<RFALSE>)\n\t       (<G? <SETG MAN-WAITING <+ ,MAN-WAITING 1>> 10>\n\t\t<TELL\n\"The man looks quite displeased. \\\"All right, then. I guess someone else\ncan always help me! See you around, sport!\\\" He disappears.\" CR>\n\t\t<QUEUE I-MAN-PRESENT 0>\n\t\t<SETG MAN-FLAG <>>\n\t\t<RTRUE>)\n\t       (T <TELL <RANDOM-ELEMENT ,MAN-WAITS> CR>)>>"
  },
  "CLIFF-BASE-F": {
   "name": "CLIFF-BASE-F",
   "file": "shadow.zil",
   "line": 936,
   "endLine": 941,
   "source": "<ROUTINE CLIFF-BASE-F (RARG)\n\t <COND (<AND <==? .RARG ,M-ENTER>\n\t\t     ,CHEST-TIED>\n\t\t<SETG CHEST-TIED <>>\n\t\t<SETG ROPE-FLAG <>>\n\t\t<QUEUE I-MAN-APPEARS 0>)>>"
  },
  "CLIFF-LEDGE-F": {
   "name": "CLIFF-LEDGE-F",
   "file": "shadow.zil",
   "line": 960,
   "endLine": 985,
   "source": "<ROUTINE CLIFF-LEDGE-F (RARG)\n\t <COND (<AND <==? .RARG ,M-BEG>\n\t\t     <VERB? WALK>\n\t\t     <IN? ,CHEST ,WINNER>\n\t\t     ,CHEST-TIED>\n\t\t<TELL\n\"You can't go anywhere holding that chest. The rope is tied around it!\" CR>)\n\t       (<AND <==? .RARG ,M-ENTER>\n\t\t     <NOT ,MAN-SEEN>\n\t\t     <NOT ,MAN-FLAG>\n\t\t     <NOT ,MAN-GONE>>\n\t\t<COND (<NOT ,MAN-POINT>\n\t\t       <SETG SCORE <+ ,SCORE 1>>\n\t\t       <SETG MAN-POINT T>)>\n\t\t<ENABLE <QUEUE I-MAN-APPEARS 5>>)\n\t       (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a rock-strewn ledge near the base of a tall cliff. The bottom of the\ncliff is another fifteen feet below. You have little hope of climbing up the\ncliff face, but you might be able to scramble down from here (though it's\ndoubtful you could return).\" CR>\n\t\t<COND (,ROPE-FLAG\n\t\t       <TELL\n\"A long piece of rope is dangling down from the top of the cliff and\nis within your reach.\" CR>)>\n\t\t<RTRUE>)>>"
  },
  "CLIFF-F": {
   "name": "CLIFF-F",
   "file": "shadow.zil",
   "line": 987,
   "endLine": 1021,
   "source": "<ROUTINE CLIFF-F (RARG)\n\t <COND (<AND <==? .RARG ,M-ENTER> <IN? ,CHEST ,MAN>>\n\t\t<QUEUE I-MAN-RETURNS 0>\n\t\t<MOVE ,CHEST ,HERE>\n\t\t<FSET ,CHEST ,OPENBIT>\n\t\t<SETG ROPE-FLAG T>\n\t\t<SETG CHEST-TIED <>>\n\t\t<SETG CHEST-OPENED T>\n\t\t<RFALSE>)\n\t       (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a remarkable spot in the dungeon. Perhaps two hundred feet above\nyou is a gaping hole in the earth's surface through which pours bright\nsunshine! A few seedlings from the world above, nurtured by the sunlight\nand occasional rains, have grown into giant trees, making this a virtual oasis\nin the desert of the Underground Empire. To the west is a sheer precipice,\ndropping nearly fifty feet to jagged rocks below. The way south is barred by\na forbidding stone wall, crumbling from age. There is a jagged opening in the\nwall to the southwest, through which leaks a fine mist. The land to the east\nlooks lifeless and barren.\" CR>\n\t\t<COND (,ROPE-FLAG\n\t\t       <TELL\n\"A rope is tied to one of the large trees here and is dangling over\nthe side of the cliff, reaching down to the shelf below.\" CR>)>\n\t\t<RTRUE>)\n\t       (<AND <==? .RARG ,M-END>\n\t\t     <PROB 15>\n\t\t     <NOT <FSET? ,CLIFF-LEDGE ,TOUCHBIT>>>\n\t\t<TELL\n\"You catch, out of the corner of your eye, some movement among the\ntrees.\" CR>)\n\t       (<AND <==? .RARG ,M-END>\n\t\t     <PROB 20>>\n\t\t<TELL\n\"You seem to hear, from the southwest, the sounds of the sea.\" CR>)>>"
  },
  "GLOBAL-ROPE-F": {
   "name": "GLOBAL-ROPE-F",
   "file": "shadow.zil",
   "line": 1023,
   "endLine": 1085,
   "source": "<ROUTINE GLOBAL-ROPE-F ()\n\t <COND (<NOT ,ROPE-FLAG>\n\t\t<TELL \"You can't see any rope here.\" CR>)\n\t       (<VERB? CLIMB-FOO>\n\t\t<V-CLIMB-UP ,P?DOWN T>)\n\t       (<VERB? TAKE MOVE CLIMB-ON>\n\t\t<COND (<NOT ,MAN-FLAG>\n\t\t       <TELL\n\"A short tug on the rope convinces you that it is securely fastened\nfrom above.\" CR>)\n\t\t      (<IN? ,CHEST ,MAN>\n\t\t       <SETG HOLDING-ROPE T>\n\t\t       <TELL\n\"You grab securely on to the rope.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"The man scowls. \\\"I may help you up, but not before I have that chest.\\\" He\npoints to the chest near you on the ledge.\" CR>)>)\n\t       (<VERB? CLIMB-UP>\n\t\t<TELL\n\"You try to climb the rope, but you cannot reach the top even with your best\neffort.\" CR>)\n\t       (<VERB? TIE>\n\t\t<COND (<EQUAL? ,CHEST ,PRSO ,PRSI>\n\t\t       <TELL\n\"The chest is now tied to the rope.\" CR>\n\t\t       <SETG CHEST-TIED T>\n\t\t       <COND (<AND ,MAN-FLAG <NOT ,MAN-GONE>>\n\t\t\t      <TELL\n\"The man above you looks pleased. \\\"Now there's a good friend! Thank\nyou very much, indeed!\\\" He pulls on the rope and the chest is lifted\nto the top of the cliff and out of sight. With a short laugh, he\ndisappears. \\\"I'll be back in a short while!\\\" are his last words.\" CR>\n\t\t\t      <MOVE ,CHEST ,MAN>\n\t\t\t      <FSET ,CHEST ,TOUCHBIT>\n\t\t\t      <SETG CHEST-TIED <>>\n\t\t\t      <SETG ROPE-FLAG <>>\n\t\t\t      <ENABLE <QUEUE I-MAN-RETURNS 10>>\n\t\t\t      <SETG MAN-FLAG <>>\n\t\t\t      <RTRUE>)>\n\t\t       <RTRUE>)\n\t\t      (<EQUAL? ,ME ,PRSI ,PRSO>\n\t\t       <COND (<AND ,MAN-FLAG <IN? ,CHEST ,MAN>>\n\t\t\t      <TELL\n\"\\\"Just grab onto it!\\\", the man bellows.\" CR>)\n\t\t\t     (,MAN-FLAG\n\t\t\t      <TELL\n\"The man looks cross. \\\"I want the chest, not you!\\\" he snaps. \\\"Now stop\nfooling around and pass it up!\\\"\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"You're unable to tie the rope around yourself.\" CR>)>)\n\t\t      (T\n\t\t       <TELL\n\"You're unable to tie the rope to that.\" CR>)>)\n\t       (<VERB? UNTIE>\n\t\t<COND (,CHEST-TIED\n\t\t       <SETG CHEST-TIED <>>\n\t\t       <TELL\n\"The chest is now disconnected from the rope.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"The rope isn't tied to anything.\" CR>)>)>>"
  },
  "I-MAN-RETURNS": {
   "name": "I-MAN-RETURNS",
   "file": "shadow.zil",
   "line": 1090,
   "endLine": 1099,
   "source": "<ROUTINE I-MAN-RETURNS ()\n\t <SETG ROPE-FLAG T>\n\t <COND (<==? ,HERE ,CLIFF-LEDGE>\n\t\t<TELL\n\"A familiar voice calls down to you. \\\"Are you still there?\\\" he bellows with a\ncoarse laugh. \\\"Well, then, grab onto the rope and we'll see what we can do.\\\"\nThe rope drops to within your reach.\" CR>\n\t\t<SETG MAN-FLAG T>\n\t\t<ENABLE <QUEUE I-MAN-LIFT -1>>\n\t\t<RTRUE>)>>"
  },
  "I-MAN-LIFT": {
   "name": "I-MAN-LIFT",
   "file": "shadow.zil",
   "line": 1103,
   "endLine": 1143,
   "source": "<ROUTINE I-MAN-LIFT ()\n\t <COND (<NOT <==? ,HERE ,CLIFF-LEDGE>>\n\t\t<QUEUE I-MAN-LIFT 0>\n\t\t<MOVE ,CHEST ,CLIFF>\n\t\t<FSET ,CHEST ,OPENBIT>\n\t\t<SETG CHEST-OPENED T>\n\t\t<REMOVE ,MAN>\n\t\t<RFALSE>)\n\t       (,HOLDING-ROPE\n\t\t<TELL\n\"The man starts to heave on the rope and within a few moments you arrive at\nthe top of the cliff. The man removes the last few valuables from the chest\nand prepares to leave. \\\"You've been a good sport! Here, take this, for\nwhatever good it is! I can't see that I'll be needing one!\\\" He hands you a\nplain wooden staff from the bottom of the chest and begins examining his\nvaluables.\" CR>\n\t\t<QUEUE I-MAN-LIFT 0>\n\t\t<MOVE ,STAFF ,WINNER>\n\t\t<SETG HOLDING-ROPE <>>\n\t\t<SETG ROPE-FLAG T>\n\t\t<MOVE ,WINNER ,CLIFF>\n\t\t<MOVE ,CHEST ,CLIFF>\n\t\t<FSET ,CHEST ,OPENBIT>\n\t\t<TELL\n\"The chest, open and empty, is at your feet.\" CR>\n\t\t<SETG CHEST-OPENED T>\n\t\t<MOVE ,MAN ,CLIFF>\n\t\t<ENABLE <QUEUE I-MAN-LEAVES -1>>\n\t\t<RTRUE>)\n\t       (<G? <SETG LIFT-WAIT <+ ,LIFT-WAIT 1>> 4>\n\t\t<TELL\n\"\\\"Well, I don't have all day. See you around sometime.\\\" Showering you with\ngravel, he disappears from sight.\" CR>\n\t\t<SETG MAN-FLAG <>>\n\t\t<MOVE ,CHEST ,CLIFF>\n\t\t<FSET ,CHEST ,OPENBIT>\n\t\t<SETG CHEST-OPENED T>\n\t\t<QUEUE I-MAN-LIFT 0>)\n\t       (T\n\t\t<TELL\n\"The man appears impatient. \\\"Are you coming up then, or not?\\\"\" CR>)>>"
  },
  "CHEST-F": {
   "name": "CHEST-F",
   "file": "shadow.zil",
   "line": 1147,
   "endLine": 1165,
   "source": "<ROUTINE CHEST-F ()\n\t <COND (,CHEST-OPENED\n\t\t<COND (<AND <VERB? TIE> <==? ,ROPE ,PRSO ,PRSI>>\n\t\t       <TELL \"What's the point?\" CR>)\n\t\t      (<AND <VERB? PUT> <EQUAL? ,PRSO ,STAFF ,LAMP ,TORCH>>\n\t\t       <TELL \"It doesn't fit.\">\n\t\t       <COND (<EQUAL? ,PRSO ,STAFF>\n\t\t\t      <TELL\n\" Awfully peculiar, though, since it's where the staff came from.\">)>\n\t\t       <CRLF>)\n\t\t      (T <RFALSE>)>)\n\t       (<VERB? OPEN UNLOCK>\n\t\t<COND (,MAN-FLAG\n\t\t       <TELL\n\"The man calls down to you. \\\"Is this what you're looking for?\\\" he cackles,\nwaving a small key over his head. You try to open the chest, but it is\nlocked.\" CR>)\n\t\t      (T <TELL\n\"The chest is locked and cannot be opened.\" CR>)>)>>"
  },
  "I-MAN-LEAVES": {
   "name": "I-MAN-LEAVES",
   "file": "shadow.zil",
   "line": 1169,
   "endLine": 1189,
   "source": "<ROUTINE I-MAN-LEAVES ()\n\t <COND (<NOT <==? ,HERE ,CLIFF>>\n\t\t<REMOVE ,MAN>\n\t\t<SETG MAN-GONE T>\n\t\t<SETG MAN-FLAG <>>\n\t\t<SETG ROPE-FLAG T>\n\t\t<QUEUE I-MAN-LEAVES 0>\n\t\t<RFALSE>)\n\t       (<PROB 40>\n\t\t<TELL\n\"Your \\\"friend\\\", moving quickly, dodges behind some trees and is lost from\nsight.\" CR>\n\t\t<REMOVE ,MAN>\n\t\t<SETG MAN-FLAG <>>\n\t\t<SETG MAN-GONE T>\n\t\t<SETG ROPE-FLAG T>\n\t\t<QUEUE I-MAN-LEAVES 0>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL\n\"Your \\\"friend\\\" examines his valuables with great pride.\" CR>)>>"
  },
  "MAN-F": {
   "name": "MAN-F",
   "file": "shadow.zil",
   "line": 1191,
   "endLine": 1222,
   "source": "<ROUTINE MAN-F ()\n\t <COND (<VERB? HELLO>\n\t\t<TELL\n\"He responds cheerfully. \\\"It is a wonderful day, isn't it?\\\"\" CR>)\n\t       (<HELLO? ,MAN>\n\t\t<TELL\n\"The man is thoroughly engrossed in the examination of his booty and\ndoesn't seem to hear you.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"The man is stocky and of medium height, with several days' growth of stubble\non his face. He is carrying a number of valuables under his arm, presumably\nfrom the now-open chest.\" CR>)\n\t       (<VERB? ATTACK>\n\t\t<COND (<==? ,PRSI ,SWORD>\n\t\t       <TELL\n\"The man is taken by surprise and is hit with the sword. He grabs you\nand throws you to the ground\">\n\t\t       <COND (<EQUAL? <LOC ,STAFF> ,WINNER ,HERE>\n\t\t\t      <TELL \", breaking the staff in the process\">\n\t\t\t      <REMOVE ,STAFF>\n\t\t\t      <MOVE ,BROKEN-STAFF ,HERE>)>\n\t\t       <TELL \", but you\nfinish him off with a quick thrust to the chest. He dies, and disappears\nwithout ceremony in the usual style of the Great Underground Empire.\nHis assorted valuables remain behind.\" CR>\n\t\t       <REMOVE ,MAN>\n\t\t       <MOVE ,VALUABLES ,HERE>\n\t\t       <FCLEAR ,VALUABLES ,NDESCBIT>\n\t\t       <QUEUE I-MAN-LEAVES 0>\n\t\t       <SETG MAN-GONE T>)\n\t\t      (T <TELL \"You wouldn't hurt him with that!\" CR>)>)>>"
  },
  "VALUABLES-F": {
   "name": "VALUABLES-F",
   "file": "shadow.zil",
   "line": 1224,
   "endLine": 1229,
   "source": "<ROUTINE VALUABLES-F ()\n\t <COND (<AND <VERB? TAKE PUT MOVE> <IN? ,MAN ,CLIFF>>\n\t\t<TELL\n\"The man recoils sharply. \\\"These here things are mine. It's my chest and\nthey're my valuables. You've a lot of nerve trying to take them from me\nafter me saving you like that!\\\"\" CR>)>>"
  },
  "ROPE-F": {
   "name": "ROPE-F",
   "file": "shadow.zil",
   "line": 1231,
   "endLine": 1246,
   "source": "<ROUTINE ROPE-F ()\n\t <COND (<VERB? TAKE MOVE>\n\t\t<COND (,ROPE-FLAG\n\t\t       <TELL\n\"The rope is tied to a tree.\" CR>)>)\n\t       (<VERB? CLIMB-FOO>\n\t\t<V-CLIMB-UP ,P?DOWN T>)\n\t       (<VERB? BURN>\n\t\t<TELL\n\"The rope won't catch fire.\" CR>)\n\t       (<VERB? UNTIE>\n\t\t<TELL\n\"The rope is very securely tied and cannot be undone.\" CR>)\n\t       (<AND <VERB? CUT> <==? ,PRSI ,SWORD>>\n\t\t<TELL\n\"The rope is made of pretty tough stuff and won't cut.\" CR>)>>"
  },
  "GLOBAL-MAN-F": {
   "name": "GLOBAL-MAN-F",
   "file": "shadow.zil",
   "line": 1248,
   "endLine": 1282,
   "source": "<ROUTINE GLOBAL-MAN-F ()\n\t <COND (<==? ,HERE ,CLIFF>\n\t\t<COND (,MAN-GONE\n\t\t       <TELL\n\"You've lost him among the trees.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"You can't see any man here.\" CR>)>)\n\t       (<NOT ,MAN-FLAG>\n\t\t<TELL\n\"You can't see any man here.\" CR>)\n\t       (<VERB? GIVE>\n\t\t<TELL\n\"You aren't even close to him!\" CR>)\n\t       (<VERB? HELLO>\n\t\t<TELL\n\"The man waves back in a friendly way.\" CR>)\n\t       (<HELLO? ,GLOBAL-MAN>\n\t\t<TELL\n\"He yells back, \\\"What's that you say? I can't hear you very well.\">\n\t\t<COND (<NOT ,CHEST-LIFTED>\n\t\t       <TELL\n\" Just tie the rope to the chest and we can chat afterwards!\\\" He smiles\nbroadly.\">)\n\t\t      (T <TELL \"\\\"\">)>\n\t\t<CRLF>)\n\t       (<VERB? ATTACK MUNG>\n\t\t<TELL\n\"I don't think you'll succeed at this distance.\" CR>)\n\t       (<AND <VERB? THROW> <==? ,PRSI ,GLOBAL-MAN> <IN? ,PRSO ,WINNER>>\n\t\t<TELL\n\"The \" D ,PRSO \" flies upward, but not nearly far enough to hit the man. It\ndoes seem to amuse him, however, especially as it passes within inches of\nyour head. \\\"We're wasting time now. Be a good fellow and tie the rope!\\\"\" CR>\n\t\t<MOVE ,PRSO ,HERE>)>>"
  },
  "LAKE-F": {
   "name": "LAKE-F",
   "file": "shadow.zil",
   "line": 1284,
   "endLine": 1297,
   "source": "<ROUTINE LAKE-F ()\n\t <COND (<VERB? THROUGH LEAP>\n\t\t<COND (<EQUAL? ,HERE ,LAKE-SHORE ,FAR-SHORE ,SOUTH-SHORE>\n\t\t       <GO-ON-LAKE>)\n\t\t      (<==? ,HERE ,ON-LAKE>\n\t\t       <GOTO ,IN-LAKE>)\n\t\t      (T\n\t\t       <TELL \"Just where do you think you are?\" CR>)>)\n\t       (<VERB? LOOK-UNDER>\n\t\t<COND (<==? ,HERE ,ON-LAKE>\n\t\t       <TELL\n\"You can't quite make out the bottom of the lake from here...\" CR>)\n\t\t      (T <TELL\n\"You can't see under the surface from here.\" CR>)>)>>"
  },
  "IN-LAKE-F": {
   "name": "IN-LAKE-F",
   "file": "shadow.zil",
   "line": 1299,
   "endLine": 1333,
   "source": "<ROUTINE IN-LAKE-F (RARG)\n\t <COND (<==? .RARG ,M-ENTER>\n\t\t<ENABLE <QUEUE I-IN-LAKE 3>>)\n\t       (<AND <==? .RARG ,M-BEG>\n\t\t     <VERB? TAKE>\n\t\t     <NOT <EQUAL? ,PRSO ,SHINY-OBJECT>>>\n\t\t<COND (<G? <WEIGHT ,WINNER> 25>\n\t\t       <TELL \"You can't carry that much underwater.\" CR>)\n\t\t      (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t\t       <TELL \"You can't take that!\" CR>)\n\t\t      (<PROB 30>\n\t\t       <TELL \"The \" D ,PRSO\n\" is yours for a moment, but drops from your grasp.\" CR>)>)\n\t       (<==? .RARG ,M-END>\n\t\t<COND (<PROB 10>\n\t\t       <TELL\n\"A large and hungry-looking fish is swimming in the neighborhood.\" CR>)\n\t\t      (<AND <PROB 4> <NOT ,INVIS>>\n\t\t       <QUEUE I-ROC 0>\n\t\t       <QUEUE I-ON-LAKE 0>\n\t\t       <JIGS-UP\n\"Oh, no! A tremendous fish just swallowed you whole!\">)\n\t\t      (<IN? ,SHINY-OBJECT ,HERE>\n\t\t       <COND (<==? ,MOVES ,LAST-MOVES> <RTRUE>)\n\t\t\t     (<PROB 40>\n\t\t\t      <TELL\n\"Out of the corner of your eye, a small, shiny object appears in the\nsand. A moment later, it is gone!\" CR>)\n\t\t\t     (<PROB 70>\n\t\t\t      <TELL\n\"You catch a brief glimpse of something shiny in the sand.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"Something sparkling in the sand catches your eye for a moment.\" CR>)>\n\t\t       <SETG LAST-MOVES ,MOVES>)>)>>"
  },
  "I-IN-LAKE": {
   "name": "I-IN-LAKE",
   "file": "shadow.zil",
   "line": 1337,
   "endLine": 1341,
   "source": "<ROUTINE I-IN-LAKE ()\n\t <COND (<==? ,HERE ,IN-LAKE>\n\t\t<TELL\n\"You run out of air and return to the surface.\" CR>\n\t\t<GOTO ,ON-LAKE>)>>"
  },
  "ON-LAKE-F": {
   "name": "ON-LAKE-F",
   "file": "shadow.zil",
   "line": 1345,
   "endLine": 1353,
   "source": "<ROUTINE ON-LAKE-F (RARG)\n\t <COND (<==? .RARG ,M-ENTER>\n\t\t<QUEUE I-IN-LAKE 0>\n\t\t<COND (<NOT ,LAKE-POINT>\n\t\t       <SETG SCORE <+ ,SCORE 1>>\n\t\t       <SETG LAKE-POINT T>)>)\n\t       (<AND <==? .RARG ,M-BEG> <VERB? LEAP> <NOT ,PRSO>>\n\t\t<DO-WALK ,P?DOWN>\n\t\t<RTRUE>)>>"
  },
  "GO-ON-LAKE": {
   "name": "GO-ON-LAKE",
   "file": "shadow.zil",
   "line": 1357,
   "endLine": 1386,
   "source": "<ROUTINE GO-ON-LAKE (\"AUX\" F N (TOLD <>))\n\t <COND (<SET F <FIRST? ,WINNER>>\n\t\t<REPEAT ()\n\t\t\t<SET N <NEXT? .F>>\n\t\t\t<COND (<NOT <FSET? .F ,WEARBIT>>\n\t\t\t       <MOVE .F ,IN-LAKE>\n\t\t\t       <COND (<==? .F ,TORCH>\n\t\t\t\t      <REMOVE ,TORCH>\n\t\t\t\t      <MOVE ,FRIED-TORCH ,IN-LAKE>)\n\t\t\t\t     (<EQUAL? .F ,LAMP>\n\t\t\t\t      <MOVE ,LAMP ,LOCAL-GLOBALS>\n\t\t\t\t      <MOVE ,FRIED-LAMP ,IN-LAKE>\n\t\t\t\t      <SETG CURRENT-LAMP ,FRIED-LAMP>)\n\t\t\t\t     (<==? .F ,WAYBREAD>\n\t\t\t\t      <REMOVE ,WAYBREAD>)>\n\t\t\t       <COND (<NOT .TOLD>\n\t\t\t\t      <SET TOLD T>\n\t\t\t\t      <TELL\n\"The shock of entering the frigid water has made you drop all your\npossessions into the lake!\" CR>)>)>\n\t\t\t<COND (<NOT .N> <RETURN>)\n\t\t\t      (T <SET F .N>)>>)>\n\t <COND (<NOT .TOLD>\n\t\t<TELL\n\"You are nearly paralyzed by the icy waters as you swim into the\ncenter of the lake.\" CR>)>\n\t <CRLF>\n\t <GOTO ,ON-LAKE>\n\t <SETG LAKE-TIME 0>\n\t <ENABLE <QUEUE I-ON-LAKE -1>>>"
  },
  "I-ON-LAKE": {
   "name": "I-ON-LAKE",
   "file": "shadow.zil",
   "line": 1390,
   "endLine": 1415,
   "source": "<ROUTINE I-ON-LAKE ()\n\t <SETG LAKE-TIME <+ ,LAKE-TIME 1>>\n\t <COND (<AND <PROB 10> <==? ,HERE ,ON-LAKE> <NOT ,INVIS>>\n\t\t<TELL\n\"A giant roc, previously hidden among the rocks, is heading right toward you,\nits mouth gaping wide!\" CR>\n\t\t<ENABLE <QUEUE I-ROC 2>>)\n\t       (<NOT <EQUAL? ,HERE ,ON-LAKE ,IN-LAKE>>\n\t\t<QUEUE I-ON-LAKE 0>\n\t\t<QUEUE I-IN-LAKE 0>\n\t\t<QUEUE I-ROC 0>\n\t\t<RFALSE>)\n\t       (<==? ,LAKE-TIME 4>\n\t\t<TELL\n\"The icy waters are taking their toll. You will not be able to hold out\nmuch longer.\" CR>)\n\t       (<==? ,LAKE-TIME 6>\n\t\t<TELL\n\"You are becoming very weak. You had better leave the water before you\ndrown!\" CR>)\n\t       (<==? ,LAKE-TIME 8>\n\t\t<QUEUE I-ON-LAKE 0>\n\t\t<QUEUE I-IN-LAKE 0>\n\t\t<QUEUE I-ROC 0>\n\t\t<JIGS-UP\n\"Your strength gives out, and you drown in the frigid waters.\">)>>"
  },
  "I-ROC": {
   "name": "I-ROC",
   "file": "shadow.zil",
   "line": 1417,
   "endLine": 1422,
   "source": "<ROUTINE I-ROC ()\n\t <COND (<AND <==? ,HERE ,ON-LAKE> <NOT ,INVIS>>\n\t\t<QUEUE I-ON-LAKE 0>\n\t\t<QUEUE I-IN-LAKE 0>\n\t\t<JIGS-UP\n\"The roc snatches you in its jaws and has you for lunch.\">)>>"
  },
  "SHINY-OBJECT-F": {
   "name": "SHINY-OBJECT-F",
   "file": "shadow.zil",
   "line": 1424,
   "endLine": 1436,
   "source": "<ROUTINE SHINY-OBJECT-F ()\n\t <COND (<AND <VERB? TAKE FIND> <NOT <IN? ,AMULET ,WINNER>>>\n\t\t<COND (<PROB 50>\n\t\t       <REMOVE ,SHINY-OBJECT>\n\t\t       <MOVE ,AMULET ,WINNER>\n\t\t       <THIS-IS-IT ,AMULET>\n\t\t       <FCLEAR ,AMULET ,NDESCBIT>\n\t\t       <TELL\n\"You reach the shiny object. It is a simple golden amulet!\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"The shiny object slips from your grasp and back onto the floor of\nthe lake, where it is covered in sand.\" CR>)>)>>"
  },
  "SAND-F": {
   "name": "SAND-F",
   "file": "shadow.zil",
   "line": 1438,
   "endLine": 1446,
   "source": "<ROUTINE SAND-F ()\n\t <COND (<VERB? DIG>\n\t\t<TELL \"You don't come across anything unusual.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"There is nothing notable on the floor of the lake, except some plants\nand algae.\" CR>)\n\t       (<VERB? TAKE>\n\t\t<TELL \"It slips through your fingers.\" CR>)>>"
  },
  "ALGAE-F": {
   "name": "ALGAE-F",
   "file": "shadow.zil",
   "line": 1448,
   "endLine": 1449,
   "source": "<ROUTINE ALGAE-F ()\n\t <COND (<VERB? EAT> <TELL \"Yeecchhhh!\" CR>)>>"
  },
  "FRIED-LAMP-F": {
   "name": "FRIED-LAMP-F",
   "file": "shadow.zil",
   "line": 1451,
   "endLine": 1454,
   "source": "<ROUTINE FRIED-LAMP-F ()\n\t <COND (<VERB? LAMP-ON>\n\t\t<TELL\n\"The lamp isn't functioning (probably from having gotten wet).\" CR>)>>"
  },
  "I-VIEW-SNAP": {
   "name": "I-VIEW-SNAP",
   "file": "shadow.zil",
   "line": 1458,
   "endLine": 1461,
   "source": "<ROUTINE I-VIEW-SNAP ()\n\t <TELL \"You suddenly find yourself back in the viewing room!\" CR>\n\t <GOTO ,VIEW-ROOM <>>\n\t <RTRUE>>"
  },
  "VIEWING-TABLE-F": {
   "name": "VIEWING-TABLE-F",
   "file": "shadow.zil",
   "line": 1463,
   "endLine": 1478,
   "source": "<ROUTINE VIEWING-TABLE-F (\"AUX\" L)\n\t <COND (<VERB? RUB>\n\t\t<SETG SCORE <+ ,SCORE ,VIEW-POINT>>\n\t\t<SETG VIEW-POINT 0>\n\t\t<TELL\n\"You touch the table and are instantly transported to another place!\" CR>\n\t\t<CRLF>\n\t\t<ENABLE <QUEUE I-VIEW-SNAP 3>>\n\t\t<GOTO <GET ,VIEW-ROOMS ,ACTIVE-VIEW>>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<TELL\n\"The surface is pale and featureless, but slowly, an image takes shape!\" CR>\n\t        <TELL <GET ,VIEWS ,ACTIVE-VIEW> CR>\n\t\t<TELL\n\"The image slowly fades.\" CR>)>>"
  },
  "I-VIEW-CHANGE": {
   "name": "I-VIEW-CHANGE",
   "file": "shadow.zil",
   "line": 1480,
   "endLine": 1487,
   "source": "<ROUTINE I-VIEW-CHANGE ()\n\t <SETG ACTIVE-VIEW <+ ,ACTIVE-VIEW 1>>\n\t <COND (<==? ,ACTIVE-VIEW 5> <SETG ACTIVE-VIEW 1>)>\n\t <QUEUE I-VIEW-CHANGE 4>\n\t <COND (<==? ,HERE ,VIEW-ROOM>\n\t\t<TELL\n\"The indicator above the table flickers briefly, then changes to \\\"\">\n\t\t<TELL <GET ,VIEW-ROMANS ,ACTIVE-VIEW> \"\\\".\" CR>)>>"
  },
  "VIEW-ROOM-F": {
   "name": "VIEW-ROOM-F",
   "file": "shadow.zil",
   "line": 1489,
   "endLine": 1499,
   "source": "<ROUTINE VIEW-ROOM-F (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are in a small chamber carved in the rock, with the sole exit to the\nnorth. Mounted on one wall is a table labelled \\\"Scenic Vista,\\\" whose\nfeatureless surface is angled toward you. One might believe that the table\nwas used to indicate points of interest in the view from this spot, like those\nfound in many parks. On the other hand, your surroundings are far from\nspacious and by no stretch of the imagination could this spot be considered\nscenic. An indicator above the table reads \\\"\">\n\t\t<TELL <GET ,VIEW-ROMANS ,ACTIVE-VIEW> \"\\\".\" CR>)>>"
  },
  "CLIFF-OBJECT-F": {
   "name": "CLIFF-OBJECT-F",
   "file": "shadow.zil",
   "line": 1519,
   "endLine": 1551,
   "source": "<ROUTINE CLIFF-OBJECT-F ()\n\t <COND (<==? ,HERE ,CLIFF>\n\t\t<COND (<VERB? LEAP>\n\t\t       <JIGS-UP\n\"You should have looked before you leaped.\">)\n\t\t      (<VERB? CLIMB-DOWN>\n\t\t       <COND (,ROPE-FLAG\n\t\t\t      <GOTO ,CLIFF-LEDGE>\n\t\t\t      <RTRUE>)\n\t\t\t     (T <TELL \"The fall would kill you.\" CR>)>)\n\t\t      (<AND <VERB? THROW-OFF> <==? ,PRSI ,CLIFF-OBJECT>>\n\t\t       <COND (<==? ,PRSO ,ROPE>\n\t\t\t      <TELL\n\"The rope is dangling over the side of the cliff already.\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (<NOT <IN? ,PRSO ,WINNER>>\n\t\t\t      <TELL\n\"You aren't holding the \" D ,PRSO \".\" CR>\n\t\t\t      <RTRUE>)>\n\t\t       <MOVE ,PRSO ,CLIFF-LEDGE>\n\t\t       <TELL\n\"The \" D ,PRSO \" goes over the cliff and lands among the rocks below.\" CR>\n\t\t       <COND (<==? ,PRSO ,LAMP>\n\t\t\t      <REMOVE ,PRSO>\n\t\t\t      <MOVE ,BROKEN-LAMP ,CLIFF-LEDGE>\n\t\t\t      <SETG CURRENT-LAMP ,BROKEN-LAMP>)\n\t\t\t     (<==? ,PRSO ,STAFF>\n\t\t\t      <REMOVE ,PRSO>\n\t\t\t      <MOVE ,BROKEN-STAFF ,CLIFF-LEDGE>)>\n\t\t       <RTRUE>)>)\n\t       (<VERB? CLIMB-UP>\n\t\t<TELL \"You haven't enough strength to climb the cliff.\" CR>)\n\t       (T <TELL \"The cliff is above you!\" CR>)>>"
  },
  "TREE-F": {
   "name": "TREE-F",
   "file": "shadow.zil",
   "line": 1553,
   "endLine": 1561,
   "source": "<ROUTINE TREE-F ()\n\t <COND (<VERB? CLIMB-UP CLIMB-FOO>\n\t\t<TELL \"The trunks are too large for you to climb them.\" CR>)\n\t       (<AND <VERB? EXAMINE LOOK-INSIDE> <NOT ,MAN-SEEN>>\n\t\t<TELL\n\"There seems to be nobody there, but it's hard to tell.\" CR>)\n\t       (<VERB? BURN>\n\t\t<JIGS-UP\n\"Smokey the Bear puts out both the fire and you.\">)>>"
  },
  "FRIED-TORCH-F": {
   "name": "FRIED-TORCH-F",
   "file": "shadow.zil",
   "line": 1563,
   "endLine": 1565,
   "source": "<ROUTINE FRIED-TORCH-F ()\n\t <COND (<VERB? LAMP-ON>\n\t\t<TELL \"It's hopeless. The torch is wet.\" CR>)>>"
  },
  "TORCH-F": {
   "name": "TORCH-F",
   "file": "shadow.zil",
   "line": 1567,
   "endLine": 1575,
   "source": "<ROUTINE TORCH-F ()\n\t <COND (<VERB? LAMP-ON>\n\t\t<COND (<FSET? ,TORCH ,ONBIT> <TELL \"It's already lit.\" CR>)\n\t\t      (T <TELL \"You have nothing to light it with.\" CR>)>)\n\t       (<VERB? LAMP-OFF>\n\t\t<COND (<FSET? ,TORCH ,ONBIT>\n\t\t       <TELL \"You manage to extinguish the flame.\" CR>\n\t\t       <FCLEAR ,TORCH ,ONBIT>)\n\t\t      (T <TELL \"It has already been extinguished.\" CR>)>)>>"
  },
  "NO-OBJS": {
   "name": "NO-OBJS",
   "file": "shadow.zil",
   "line": 1657,
   "endLine": 1667,
   "source": "<ROUTINE NO-OBJS (RARG \"AUX\" F)\n\t <COND (<==? .RARG ,M-BEG>\n\t\t<SET F <FIRST? ,WINNER>>\n\t\t<SETG EMPTY-HANDED T>\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT .F> <RETURN>)\n\t\t\t      (<G? <WEIGHT .F> 4>\n\t\t\t       <SETG EMPTY-HANDED <>>\n\t\t\t       <RETURN>)>\n\t\t\t<SET F <NEXT? .F>>>\n\t\t<RFALSE>)>>"
  },
  "REPELLENT-FCN": {
   "name": "REPELLENT-FCN",
   "file": "shadow.zil",
   "line": 1700,
   "endLine": 1722,
   "source": "<ROUTINE REPELLENT-FCN ()\n\t <COND (<VERB? SHAKE>\n\t\t<COND (,SPRAY-USED? <TELL \"The can seems empty.\" CR>)\n\t\t      (T <TELL \"There is a sloshing sound from inside.\" CR>)>)\n\t       (<VERB? BURN>\n\t\t<JIGS-UP\n\"The can explodes and you die a horribly smelly death.\">)\n\t       (<AND <VERB? SPRAY PUT> <==? ,PRSO ,REPELLENT>>\n\t\t<COND (,SPRAY-USED?\n\t\t       <TELL\n\"The repellent is all gone.\" CR>)\n\t\t      (<NOT ,PRSI>\n\t\t       <SETG SPRAY-USED? T>\n\t\t       <TELL\n\"The spray stinks amazingly for a few moments, then drifts away.\" CR>)\n\t\t      (ELSE\n\t\t       <COND (<==? ,PRSI ,ME>\n\t\t\t      <ENABLE <QUEUE I-SPRAY 5>>\n\t\t\t      <SETG SPRAYED? T>)>\n\t\t       <SETG SPRAY-USED? T>\n\t\t       <TELL\n\"The spray smells like a mixture of old socks and burning rubber. If\nI were a grue I'd sure stay clear!\" CR>)>)>>"
  },
  "I-SPRAY": {
   "name": "I-SPRAY",
   "file": "shadow.zil",
   "line": 1726,
   "endLine": 1728,
   "source": "<ROUTINE I-SPRAY ()\n\t <SETG SPRAYED? <>>\n\t <TELL \"That horrible smell is much less pungent now.\" CR>>"
  },
  "ZORK-IV-F": {
   "name": "ZORK-IV-F",
   "file": "shadow.zil",
   "line": 1738,
   "endLine": 1753,
   "source": "<ROUTINE ZORK-IV-F (RARG)\n\t <COND (<==? .RARG ,M-ENTER>\n\t\t<JIGS-UP\n\"Sacrificial Altar|\nThis is the interior of a huge temple of primitive construction. A few\nflickering torches cast a sallow illumination over the altar, which is\nstill drenched with the blood of human sacrifice. Behind the altar is an\nenormous statue of a demon which seems to reach towards you with\ndripping fangs and razor-sharp talons. A low noise begins behind you,\nand you turn to see hundreds of hunched and hairy shapes. A guttural\nchant issues from their throats. Near you stands a figure draped in a\nrobe of deepest black, brandishing a huge sword. The chant grows louder\nas the robed figure approaches the altar. The large figure spots you and\napproaches menacingly. It reaches into its cloak and pulls out a great,\nglowing dagger. It pulls you onto the altar and, with a murmur of\napproval from the throng, slices you neatly across your abdomen.\">)>>"
  },
  "AQUEDUCT-F": {
   "name": "AQUEDUCT-F",
   "file": "shadow.zil",
   "line": 1858,
   "endLine": 1865,
   "source": "<ROUTINE AQUEDUCT-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The aqueduct is large and impressive. It was probably the major method\nof water transport in the Empire.\" CR>)\n\t       (<VERB? LEAP>\n\t\t<JIGS-UP\n\"You execute a perfect swan dive into the rocks below!\">)>>"
  },
  "WATER-CHANNEL-F": {
   "name": "WATER-CHANNEL-F",
   "file": "shadow.zil",
   "line": 1867,
   "endLine": 1878,
   "source": "<ROUTINE WATER-CHANNEL-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The channel is a few feet deep and ten feet wide, rounded on the bottom.\" CR>)\n\t       (<VERB? BOARD>\n\t\t<COND (<==? ,HERE ,DAMP-PASSAGE>\n\t\t       <TELL\n\"Getting into the channel wouldn't be of much use.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"You're standing in it. Otherwise, you would be floating in midair above some\nvery nasty rocks.\" CR>)>)>>"
  },
  "MOSS-F": {
   "name": "MOSS-F",
   "file": "shadow.zil",
   "line": 1880,
   "endLine": 1882,
   "source": "<ROUTINE MOSS-F ()\n\t <COND (<VERB? TAKE MOVE>\n\t\t<TELL \"Don't be silly.\" CR>)>>"
  },
  "AQ-2-F": {
   "name": "AQ-2-F",
   "file": "shadow.zil",
   "line": 1884,
   "endLine": 1896,
   "source": "<ROUTINE AQ-2-F (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are now on one of the tallest arches of the aqueduct, hundreds of feet\nabove a rocky chasm. The immensity of the aqueduct project is apparent from\nhere. Stone supports rise from the rock floor to form massive arches, which\ntraverse the region from north to south. The water-carrying channel here is\nwide and deep. To the west and far below, you can make out a balcony which\nmust command a wide view of the aqueduct.\" CR>\n\t\t<COND (<NOT ,AQ-FLAG>\n\t\t       <TELL\n\"The channel ends abruptly to your north where a supporting pillar has\ncrumbled, casting the arch into the chasm.\" CR>)>)>> "
  },
  "AQ-3-F": {
   "name": "AQ-3-F",
   "file": "shadow.zil",
   "line": 1898,
   "endLine": 1909,
   "source": "<ROUTINE AQ-3-F (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are near the northern end of this segment of the aqueduct system. To the\nsouth and slightly uphill, the bulk of the aqueduct looms ominously, towering\nabove a gorge. To the north, the water channel drops precipitously and enters\na rocky hole. The damp moss and lichen would certainly make that a one-way\ntrip.\" CR>\n\t\t<COND (<NOT ,AQ-FLAG>\n\t\t       <TELL\n\"The southern part of the aqueduct system is inaccessable due to the\ncollapse of one of the water-bearing arches.\" CR>)>)>>"
  },
  "COVER-F": {
   "name": "COVER-F",
   "file": "shadow.zil",
   "line": 1923,
   "endLine": 1931,
   "source": "<ROUTINE COVER-F ()\n\t <COND (<VERB? MOVE RAISE OPEN>\n\t\t<TELL\n\"The cover is moved a bit to one side, revealing a small hole leading into\ndarkness.\" CR>\n\t\t<SETG COVER-MOVED T>)\n\t       (<VERB? TAKE>\n\t\t<TELL\n\"The cover is far too heavy to take.\" CR>)>>"
  },
  "KEY-ROOM-F": {
   "name": "KEY-ROOM-F",
   "file": "shadow.zil",
   "line": 1933,
   "endLine": 1943,
   "source": "<ROUTINE KEY-ROOM-F (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are between some rock and a dark place. The room is lit dimly from\nabove, revealing a lone, dark path sloping down to the west.\" CR>\n\t\t<COND (,COVER-MOVED\n\t\t       <TELL\n\"A heavy manhole cover has been moved to reveal a dark passage below.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"To one side of the room is a large manhole cover.\" CR>)>)>>"
  },
  "KEY-F": {
   "name": "KEY-F",
   "file": "shadow.zil",
   "line": 1957,
   "endLine": 1978,
   "source": "<ROUTINE KEY-F ()\n\t <COND (<AND <VERB? UNLOCK> <==? ,PRSI ,KEY>>\n\t\t<COND (<AND <==? ,PRSO ,BRONZE-DOOR> <==? ,HERE ,GOOD-CELL>>\n\t\t       <COND (,BRONZE-DOOR-LOCKED\n\t\t\t      <TELL\n\"The key seems to mold itself to the shape of the lock. With a mere\ntwist of your hand, the massive bolt gives way.\" CR>)\n\t\t\t     (T <TELL \"It already is.\" CR>)>\n\t\t       <SETG BRONZE-DOOR-LOCKED <>>\n\t\t       <RTRUE>)\n\t\t      (<==? ,PRSO ,BRONZE-DOOR>\n\t\t       <TELL\n\"The key molds itself to the lock but will not turn.\" CR>)\n\t\t      (<OR <EQUAL? ,PRSO ,CHEST>\n\t\t\t   <FSET? ,PRSO ,DOORBIT>>\n\t\t       <TELL\n\"The key, which initially seemed certain to fit the lock, seems to change\nshape and will not enter the keyhole.\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL <RANDOM-ELEMENT ,KEY-DESCS> CR>\n\t\t<TELL\n\"Strange, though. The key seems to change shape constantly.\" CR>)>>"
  },
  "VIEW-INDICATOR-F": {
   "name": "VIEW-INDICATOR-F",
   "file": "shadow.zil",
   "line": 1994,
   "endLine": 1998,
   "source": "<ROUTINE VIEW-INDICATOR-F ()\n\t <COND (<VERB? EXAMINE READ>\n\t\t<TELL \"The indicator reads \\\"\"\n\t\t      <GET ,VIEW-ROMANS ,ACTIVE-VIEW>\n\t\t      \"\\\".\" CR>)>>"
  },
  "FLATHEAD-OCEAN-F": {
   "name": "FLATHEAD-OCEAN-F",
   "file": "shadow.zil",
   "line": 2002,
   "endLine": 2026,
   "source": "<ROUTINE FLATHEAD-OCEAN-F (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are at the shore of an amazing underground sea, the topic of many a\nlegend among adventurers. Few were known to have arrived at this spot, and\nfewer to return. There is a heavy surf and a breeze is blowing on-shore.\nThe land rises steeply to the east and quicksand prevents movement to the\nsouth. A thick mist covers the ocean and extends over the hills to the east.\nA path heads north along the beach.\" CR>\n\t\t<COND (<NOT <FSET? ,VIKING-SHIP ,INVISIBLE>>\n\t\t       <TELL\n\"An ancient Viking ship is passing along the shore, an old and crusty\nsailor at the helm.\" CR>)>\n\t\t<RTRUE>)\n\t       (<AND <==? .RARG ,M-END>\n\t\t     <PROB 20>\n\t\t     <NOT ,BOAT-SEEN>\n\t\t     ,LIT>\n\t\t<SETG BOAT-SEEN T>\n\t\t<ENABLE <QUEUE I-BOAT-DISAPPEAR 2>>\n\t\t<TELL\n\"Passing alongside the shore now is an old boat, reminiscent of an ancient\nViking ship. Standing on the prow of the ship is an old and crusty sailor,\npeering out over the misty ocean.\" CR>\n\t\t<FCLEAR ,VIKING-SHIP ,INVISIBLE>)>>"
  },
  "I-BOAT-DISAPPEAR": {
   "name": "I-BOAT-DISAPPEAR",
   "file": "shadow.zil",
   "line": 2030,
   "endLine": 2035,
   "source": "<ROUTINE I-BOAT-DISAPPEAR ()\n\t <FSET ,VIKING-SHIP ,INVISIBLE>\n\t <SETG SHIP-GONE T>\n\t <COND (<==? ,HERE ,FLATHEAD-OCEAN>\n\t\t<TELL\n\"The boat sails silently through the mist and out of sight.\" CR>)>>"
  },
  "I-VISIBLE": {
   "name": "I-VISIBLE",
   "file": "shadow.zil",
   "line": 2061,
   "endLine": 2067,
   "source": "<ROUTINE I-VISIBLE ()\n\t <SETG INVIS <>>\n\t <COND (<EQUAL? ,HERE ,MRG ,MRGE ,MRGW>\n\t\t<JIGS-UP\n\"One of the stone figures (or maybe both, it's hard to tell) suddenly springs\nto life and crushes you with his stone bludgeon.\">)>\n\t <RFALSE>>"
  },
  "POTION-F": {
   "name": "POTION-F",
   "file": "shadow.zil",
   "line": 2069,
   "endLine": 2091,
   "source": "<ROUTINE POTION-F ()\n\t <COND (<VERB? DRINK>\n\t\t<REMOVE ,POTION>\n\t\t<SETG INVIS T>\n\t\t<ENABLE <QUEUE I-VISIBLE 3>>\n\t\t<TELL\n\"You \\\"drink\\\" the contents in one gulp, but nothing unusual seems to have\nhappened as a result.\" CR>)\n\t       (<AND <VERB? POUR-ON> <==? ,PRSO ,POTION>>\n\t\t<REMOVE ,POTION>\n\t\t<TELL \"It spills onto the \" D ,PRSI \" and vanishes.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"It feels like there's something inside, but you can't see anything even\nthough the vial is transparent.\" CR>)\n\t       (<VERB? SMELL>\n\t\t<TELL\n\"The vial (or something in it) smells sweet.\" CR>)\n\t       (<VERB? DROP TAKE>\n\t\t<TELL\n\"Nothing seems to come out, although the sweet smell disappears from\nthe vial, seeming to permeate the air briefly before fading entirely.\" CR>\n\t\t<REMOVE ,POTION>)>>"
  },
  "VIAL-F": {
   "name": "VIAL-F",
   "file": "shadow.zil",
   "line": 2095,
   "endLine": 2123,
   "source": "<ROUTINE VIAL-F ()\n\t <COND (<VERB? FILL> <TELL \"You can't seem to put anything in it.\" CR>)\n\t       (<AND <VERB? DRINK-FROM> <IN? ,POTION ,VIAL>>\n\t\t<PERFORM ,V?DRINK ,POTION>\n\t\t<RTRUE>)\n\t       (<AND <VERB? SMELL> <IN? ,POTION ,VIAL>>\n\t\t<PERFORM ,V?SMELL ,POTION>\n\t\t<RTRUE>)\n\t       (<AND <VERB? SHAKE> <IN? ,POTION ,VIAL> <FSET? ,VIAL ,OPENBIT>>\n\t\t<TELL\n\"Nothing seems to come out, although the vial is lighter now.\" CR>\n\t\t<REMOVE ,POTION>)\n\t       (<VERB? OPEN>\n\t\t<FSET ,VIAL ,OPENBIT>\n\t\t<TELL\n\"The vial is open.\">\n\t\t<COND (<IN? ,POTION ,VIAL>\n\t\t       <TELL\n\" There is a sweet odor from within the vial, apparently coming from a heavy\nbut invisible liquid.\">)>\n\t\t<CRLF>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"It is a small, transparent vial \">\n\t\t<COND (<IN? ,POTION ,VIAL>\n\t\t       <TELL\n\"which looks empty but is strangely heavy.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"which is light and empty.\" CR>)>)>>"
  },
  "OCEAN-F": {
   "name": "OCEAN-F",
   "file": "shadow.zil",
   "line": 2133,
   "endLine": 2141,
   "source": "<ROUTINE OCEAN-F ()\n\t <COND (<NOT <==? ,HERE ,FLATHEAD-OCEAN>>\n\t\t<TELL \"There is no ocean here.\" CR>)\n\t       (<VERB? THROUGH BOARD>\n\t\t<TELL \"You would be killed by the pounding surf!\" CR>)\n\t       (<AND <VERB? PUT THROW> <==? ,PRSI ,OCEAN>>\n\t\t<TELL\n\"The \" D ,PRSO \" falls into the ocean and is lost forever.\" CR>\n\t\t<REMOVE ,PRSO>)>>"
  },
  "STONE-DESC": {
   "name": "STONE-DESC",
   "file": "shadow.zil",
   "line": 2155,
   "endLine": 2160,
   "source": "<ROUTINE STONE-DESC (FOO)\n\t <TELL\n\"Standing before you is a great rock.\">\n\t <COND (,SWORD-IN-STONE?\n\t\t<TELL \" Imbedded within it is an Elvish sword.\">)>\n\t <CRLF>>"
  },
  "STONE-F": {
   "name": "STONE-F",
   "file": "shadow.zil",
   "line": 2162,
   "endLine": 2172,
   "source": "<ROUTINE STONE-F ()\n\t <COND (<VERB? OPEN CLOSE>\n\t\t<TELL \"You can't be serious.\" CR>)\n\t       (<AND <VERB? PUT> <==? ,PRSI ,STONE>>\n\t\t<TELL \"You can't force anything into the stone.\" CR>)\n\t       (<AND <VERB? MOVE TAKE PUSH> <==? ,PRSO ,STONE>>\n\t\t<TELL\n\"The stone is far too massive to be moved.\" CR>)\n\t       (<VERB? LOOK-UNDER>\n\t\t<TELL\n\"Since it can't be moved, it's hard to know what's there.\" CR>)>>"
  },
  "FISH-F": {
   "name": "FISH-F",
   "file": "shadow.zil",
   "line": 2181,
   "endLine": 2182,
   "source": "<ROUTINE FISH-F ()\n\t <TELL \"There is no fish visible now.\" CR>>"
  },
  "QUICKSAND-PSEUDO": {
   "name": "QUICKSAND-PSEUDO",
   "file": "shadow.zil",
   "line": 2184,
   "endLine": 2191,
   "source": "<ROUTINE QUICKSAND-PSEUDO ()\n\t <COND (<VERB? THROUGH LEAP>\n\t\t<JIGS-UP\n\"You enter the quicksand and slowly sink to a new low in adventuring.\">)\n\t       (<VERB? RUB>\n\t\t<TELL \"It's quicksand all right!\" CR>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<TELL \"It's hard to tell what's in there.\" CR>)>>"
  },
  "SWAMP-PSEUDO": {
   "name": "SWAMP-PSEUDO",
   "file": "shadow.zil",
   "line": 2193,
   "endLine": 2195,
   "source": "<ROUTINE SWAMP-PSEUDO ()\n\t <COND (<VERB? THROUGH>\n\t\t<TELL \"Yucko.\" CR>)>>"
  },
  "MIST-PSEUDO": {
   "name": "MIST-PSEUDO",
   "file": "shadow.zil",
   "line": 2197,
   "endLine": 2201,
   "source": "<ROUTINE MIST-PSEUDO ()\n\t <COND (<VERB? LOOK-INSIDE>\n\t\t<TELL \"You can't make anything out through the mist.\" CR>)\n\t       (<VERB? SMELL>\n\t\t<TELL \"It smells vaguely salty.\" CR>)>>"
  },
  "SHORE-PSEUDO": {
   "name": "SHORE-PSEUDO",
   "file": "shadow.zil",
   "line": 2203,
   "endLine": 2205,
   "source": "<ROUTINE SHORE-PSEUDO ()\n\t <COND (<VERB? DIG>\n\t\t<TELL \"There's nothing there.\" CR>)>>"
  },
  "WATERFALL-PSEUDO": {
   "name": "WATERFALL-PSEUDO",
   "file": "shadow.zil",
   "line": 2208,
   "endLine": 2210,
   "source": "<ROUTINE WATERFALL-PSEUDO ()\n\t <COND (<VERB? CLIMB-UP>\n\t\t<TELL \"It's much too slippery.\" CR>)>>"
  },
  "ARCH-PSEUDO": {
   "name": "ARCH-PSEUDO",
   "file": "shadow.zil",
   "line": 2212,
   "endLine": 2219,
   "source": "<ROUTINE ARCH-PSEUDO ()\n\t <COND (<VERB? EXAMINE>\n\t\t<COND (,AQ-FLAG\n\t\t       <TELL\n\"The arches all show some signs of decay.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"The arch before you is broken. The others show signs of decay.\" CR>)>)>>"
  },
  "GO": {
   "name": "GO",
   "file": "dungeon.zil",
   "line": 913,
   "endLine": 951,
   "source": "<ROUTINE GO () \n\t <PUTB ,P-LEXV 0 59>\n;\"put interrupts on clock chain\"\n\t <QUEUE I-LANTERN 200>\n;\"clean up junk compiler can't do\"\n\t <SETG CURRENT-LAMP ,LAMP>\n\t <PUT ,CPOBJS <* 8 21> 1>\n\t <PUT ,CPOBJS <+ <* 8 21> 1> ,LORE-BOOK>\n\t <PUT ,CPOBJS <* 8 32> 1>\n\t <PUT ,CPOBJS <+ <* 8 32> 1> ,CP-SLOT>\n ;\"set up and go\"\n\t <SETG LIT T>\n\t <SETG WINNER ,ADVENTURER>\n\t <SETG PLAYER ,WINNER>\n\t <SETG MLOC ,MRB>\n\t <SETG HERE ,ZORK2-STAIR>\n\t <MOVE ,WINNER ,HERE>\n\t <ENABLE <QUEUE I-CLEFT <+ 70 <RANDOM 70>>>>\n\t <ENABLE <QUEUE I-VIEW-CHANGE 4>>\n\t <SETG P-IT-OBJECT <>>\n\t <COND (<NOT <FSET? ,HERE ,TOUCHBIT>>\n\t\t<TELL\n\"As in a dream, you see yourself tumbling down a great, dark staircase.\nAll about you are shadowy images of struggles against fierce opponents\nand diabolical traps. These give way to another round of images: of\nimposing stone figures, a cool, clear lake, and, now, of an old, yet\noddly youthful man. He turns toward you slowly, his long, silver hair\ndancing about him in a fresh breeze. \\\"You have reached the final test,\nmy friend! You are proved clever and powerful, but this is not yet\nenough! Seek me when you feel yourself worthy!\\\" The dream dissolves\naround you as his last words echo through the void....\" CR>\n\t\t<CRLF>\n\t\t<V-VERSION>\n\t\t<CRLF>)>\n\t <MOVE ,WINNER ,HERE>\n\t <MOVE ,LAMP ,HERE>\n\t <V-LOOK>\n\t <MAIN-LOOP>\n\t <AGAIN>>"
  },
  "EG-INFESTED?": {
   "name": "EG-INFESTED?",
   "file": "actions.zil",
   "line": 751,
   "endLine": 753,
   "source": "<ROUTINE EG-INFESTED? (R)\n\t <OR <AND <==? ,MLOC ,MRG> <==? .R ,IN-MIRROR>>\n\t     <EQUAL? .R ,MRGE ,MRG ,MRGW>>>"
  },
  "DEMON": {
   "name": "DEMON",
   "file": "clock.zil",
   "line": 23,
   "endLine": 26,
   "source": "<ROUTINE DEMON (RTN TICK \"AUX\" CINT)\n\t #DECL ((RTN) ATOM (TICK) FIX (CINT) <PRIMTYPE VECTOR>)\n\t <PUT <SET CINT <INT .RTN T>> ,C-TICK .TICK>\n\t .CINT>"
  },
  "QUEUE": {
   "name": "QUEUE",
   "file": "gclock.zil",
   "line": 21,
   "endLine": 24,
   "source": "<ROUTINE QUEUE (RTN TICK \"AUX\" CINT)\n\t #DECL ((RTN) ATOM (TICK) FIX (CINT) <PRIMTYPE VECTOR>)\n\t <PUT <SET CINT <INT .RTN>> ,C-TICK .TICK>\n\t .CINT>"
  },
  "INT": {
   "name": "INT",
   "file": "gclock.zil",
   "line": 26,
   "endLine": 39,
   "source": "<ROUTINE INT (RTN \"OPTIONAL\" (DEMON <>) E C INT)\n\t #DECL ((RTN) ATOM (DEMON) <OR ATOM FALSE> (E C INT) <PRIMTYPE\n\t\t\t\t\t\t\t      VECTOR>)\n\t <SET E <REST ,C-TABLE ,C-TABLELEN>>\n\t <SET C <REST ,C-TABLE ,C-INTS>>\n\t <REPEAT ()\n\t\t <COND (<==? .C .E>\n\t\t\t<SETG C-INTS <- ,C-INTS ,C-INTLEN>>\n\t\t\t<AND .DEMON <SETG C-DEMONS <- ,C-DEMONS ,C-INTLEN>>>\n\t\t\t<SET INT <REST ,C-TABLE ,C-INTS>>\n\t\t\t<PUT .INT ,C-RTN .RTN>\n\t\t\t<RETURN .INT>)\n\t\t       (<EQUAL? <GET .C ,C-RTN> .RTN> <RETURN .C>)>\n\t\t <SET C <REST .C ,C-INTLEN>>>>"
  },
  "CLOCKER": {
   "name": "CLOCKER",
   "file": "gclock.zil",
   "line": 43,
   "endLine": 60,
   "source": "<ROUTINE CLOCKER (\"AUX\" C E TICK (FLG <>))\n\t #DECL ((C E) <PRIMTYPE VECTOR> (TICK) FIX (FLG) <OR FALSE ATOM>)\n\t <COND (,CLOCK-WAIT <SETG CLOCK-WAIT <>> <RFALSE>)>\n\t <SET C <REST ,C-TABLE <COND (,P-WON ,C-INTS) (T ,C-DEMONS)>>>\n\t <SET E <REST ,C-TABLE ,C-TABLELEN>>\n\t <REPEAT ()\n\t\t <COND (<==? .C .E>\n\t\t\t<SETG MOVES <+ ,MOVES 1>>\n\t\t\t<RETURN .FLG>)\n\t\t       (<NOT <0? <GET .C ,C-ENABLED?>>>\n\t\t\t<SET TICK <GET .C ,C-TICK>>\n\t\t\t<COND (<0? .TICK>)\n\t\t\t      (T\n\t\t\t       <PUT .C ,C-TICK <- .TICK 1>>\n\t\t\t       <COND (<AND <NOT <G? .TICK 1>>\n\t\t\t\t\t   <APPLY <GET .C ,C-RTN>>>\n\t\t\t\t      <SET FLG T>)>)>)>\n\t\t <SET C <REST .C ,C-INTLEN>>>>"
  },
  "NOT-HERE-OBJECT-F": {
   "name": "NOT-HERE-OBJECT-F",
   "file": "gglobals.zil",
   "line": 52,
   "endLine": 74,
   "source": "<ROUTINE NOT-HERE-OBJECT-F (\"AUX\" TBL (PRSO? T) OBJ)\n\t ;\"This COND is game independent (except the TELL)\"\n\t <COND (<AND <EQUAL? ,PRSO ,NOT-HERE-OBJECT>\n\t\t     <EQUAL? ,PRSI ,NOT-HERE-OBJECT>>\n\t\t<TELL \"Those things aren't here!\" CR>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSO ,NOT-HERE-OBJECT>\n\t\t<SET TBL ,P-PRSO>)\n\t       (T\n\t\t<SET TBL ,P-PRSI>\n\t\t<SET PRSO? <>>)>\n\t ;\"Here is the default 'cant see any' printer\"\n\t <SETG P-CONT <>>\n\t <SETG QUOTE-FLAG <>>\n\t <COND (<EQUAL? ,WINNER ,PLAYER>\n\t\t<TELL \"You can't see any \">\n\t\t<NOT-HERE-PRINT .PRSO?>\n\t\t<TELL \" here!\" CR>)\n\t       (T\n\t\t<TELL \"The \" D ,WINNER \" seems confused. \\\"I don't see any \">\n\t\t<NOT-HERE-PRINT .PRSO?>\n\t\t<TELL \" here!\\\"\" CR>)>\n\t <RTRUE>>"
  },
  "NOT-HERE-PRINT": {
   "name": "NOT-HERE-PRINT",
   "file": "gglobals.zil",
   "line": 109,
   "endLine": 116,
   "source": "<ROUTINE NOT-HERE-PRINT (PRSO?)\n <COND (,P-OFLAG\n\t<COND (,P-XADJ <PRINTB ,P-XADJN>)>\n\t<COND (,P-XNAM <PRINTB ,P-XNAM>)>)\n       (.PRSO?\n\t<BUFFER-PRINT <GET ,P-ITBL ,P-NC1> <GET ,P-ITBL ,P-NC1L> <>>)\n       (T\n\t<BUFFER-PRINT <GET ,P-ITBL ,P-NC2> <GET ,P-ITBL ,P-NC2L> <>>)>>"
  },
  "NULL-F": {
   "name": "NULL-F",
   "file": "gglobals.zil",
   "line": 118,
   "endLine": 119,
   "source": "<ROUTINE NULL-F (\"OPTIONAL\" A1 A2)\n\t <RFALSE>>"
  },
  "STAIRS-F": {
   "name": "STAIRS-F",
   "file": "gglobals.zil",
   "line": 143,
   "endLine": 146,
   "source": "<ROUTINE STAIRS-F ()\n\t <COND (<VERB? THROUGH>\n\t\t<TELL\n\"You should say whether you want to go up or down.\" CR>)>>"
  },
  "SAILOR-FCN": {
   "name": "SAILOR-FCN",
   "file": "gglobals.zil",
   "line": 155,
   "endLine": 195,
   "source": "<ROUTINE SAILOR-FCN ()\n\t  <COND (<VERB? TELL>\n\t\t <SETG P-CONT <>>\n\t\t <SETG QUOTE-FLAG <>>\n\t\t <TELL \"You can't talk to the sailor that way.\" CR>)\n\t\t(<VERB? EXAMINE>\n\t\t %<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t '<COND (<NOT <FSET? ,VIKING-SHIP ,INVISIBLE>>\n\t\t\t\t <TELL\n\"He looks like a sailor.\" CR>\n\t\t\t\t <RTRUE>)>)\n\t\t\t(ELSE T)>\n\t\t <TELL\n\"There is no sailor to be seen.\" CR>)\n\t\t(<VERB? HELLO>\n\t\t <SETG HS <+ ,HS 1>>\n\t\t %<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t '<COND (<NOT <FSET? ,VIKING-SHIP ,INVISIBLE>>\n\t\t                 <TELL\n\"The seaman looks up and maneuvers the boat toward shore. He cries out \\\"I\nhave waited three ages for someone to say those words and save me from\nsailing this endless ocean. Please accept this gift. You may find it\nuseful!\\\" He throws something which falls near you in the sand, then sails\noff toward the west, singing a lively, but somewhat uncouth, sailor song.\" CR>\n\t\t                 <FSET ,VIKING-SHIP ,INVISIBLE>\n\t\t                 <MOVE ,VIAL ,HERE>)\n\t\t                (<==? ,HERE ,FLATHEAD-OCEAN>\n\t\t                 <COND (,SHIP-GONE\n\t\t\t                <TELL \"Nothing happens anymore.\" CR>)\n\t\t\t               (T\n\t\t\t\t        <TELL \"Nothing happens yet.\" CR>)>)\n\t\t\t\t(T <TELL \"Nothing happens here.\" CR>)>)\n\t\t\t(T\n\t\t\t '<COND (<0? <MOD ,HS 20>>\n\t\t\t\t <TELL\n\"You seem to be repeating yourself.\" CR>)\n\t\t\t\t(<0? <MOD ,HS 10>>\n\t\t\t\t <TELL\n\"I think that phrase is getting a bit worn out.\" CR>)\n\t\t\t\t(T\n\t\t\t\t <TELL \"Nothing happens here.\" CR>)>)>)>>"
  },
  "GROUND-FUNCTION": {
   "name": "GROUND-FUNCTION",
   "file": "gglobals.zil",
   "line": 203,
   "endLine": 215,
   "source": "<ROUTINE GROUND-FUNCTION ()\n\t <COND (<AND <VERB? PUT PUT-ON>\n\t\t     <EQUAL? ,PRSI ,GROUND>>\n\t\t<PERFORM ,V?DROP ,PRSO>\n\t\t<RTRUE>)\n\t       %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<EQUAL? ,HERE ,SANDY-CAVE>\n\t\t\t <SAND-FUNCTION>))\n\t\t      (T\n\t\t       '(<NULL-F>\n\t\t\t <RFALSE>))>\n\t       (<VERB? DIG>\n\t\t<TELL \"The ground is too hard for digging here.\" CR>)>>"
  },
  "GRUE-FUNCTION": {
   "name": "GRUE-FUNCTION",
   "file": "gglobals.zil",
   "line": 224,
   "endLine": 239,
   "source": "<ROUTINE GRUE-FUNCTION ()\n    <COND (<VERB? EXAMINE>\n\t   <TELL\n\"The grue is a sinister, lurking presence in the dark places of the\nearth. Its favorite diet is adventurers, but its insatiable\nappetite is tempered by its fear of light. No grue has ever been\nseen by the light of day, and few have survived its fearsome jaws\nto tell the tale.\" CR>)\n\t  (<VERB? FIND>\n\t   <TELL\n\"There is no grue here, but I'm sure there is at least one lurking\nin the darkness nearby. I wouldn't let my light go out if I were\nyou!\" CR>)\n\t  (<VERB? LISTEN>\n\t   <TELL\n\"It makes no sound but is always lurking in the darkness nearby.\" CR>)>>"
  },
  "CRETIN-FCN": {
   "name": "CRETIN-FCN",
   "file": "gglobals.zil",
   "line": 254,
   "endLine": 298,
   "source": "<ROUTINE CRETIN-FCN ()\n\t <COND (<VERB? TELL>\n\t\t<SETG P-CONT <>>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<TELL\n\"Talking to yourself is said to be a sign of impending mental collapse.\" CR>)\n\t       (<AND <VERB? GIVE>\n\t\t     <EQUAL? ,PRSI ,ME>>\n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? MAKE>\n\t\t<TELL \"Only you can do that.\" CR>)\n\t       (<VERB? DISEMBARK>\n\t\t<TELL \"You'll have to do that on your own.\" CR>)\n\t       (<VERB? EAT>\n\t\t<TELL \"Auto-cannibalism is not the answer.\" CR>)\n\t       (<VERB? ATTACK MUNG>\n\t\t<COND (<AND ,PRSI <FSET? ,PRSI ,WEAPONBIT>>\n\t\t       <JIGS-UP \"If you insist.... Poof, you're dead!\">)\n\t\t      (T\n\t\t       <TELL \"Suicide is not the answer.\" CR>)>)\n\t       (<VERB? THROW>\n\t\t<COND (<==? ,PRSO ,ME>\n\t\t       <TELL\n\"Why don't you just walk like normal people?\" CR>)>)\n\t       (<VERB? TAKE>\n\t\t<TELL \"How romantic!\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<COND %<COND (<==? ,ZORK-NUMBER 1>\n\t\t\t      '(<EQUAL? ,HERE <LOC ,MIRROR-1> <LOC ,MIRROR-2>>\n\t\t                <TELL\n\"Your image in the mirror looks tired.\" CR>))\n\t\t\t     (<==? ,ZORK-NUMBER 3>\n\t\t\t      '(,INVIS\n\t\t\t\t<TELL\n\"A good trick, as you are currently invisible.\" CR>))\n\t\t\t     (T\n\t\t\t      '(<NULL-F> <RTRUE>))>\n\t\t      (T\n\t\t       %<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t       '<TELL\n\"What you can see looks pretty much as usual, sorry to say.\" CR>)\n\t\t\t      (ELSE\n\t\t\t       '<TELL\n\"That's difficult unless your eyes are prehensile.\" CR>)>)>)>>"
  },
  "PATH-OBJECT": {
   "name": "PATH-OBJECT",
   "file": "gglobals.zil",
   "line": 315,
   "endLine": 321,
   "source": "<ROUTINE PATH-OBJECT ()\n\t <COND (<VERB? TAKE FOLLOW>\n\t\t<TELL \"You must specify a direction to go.\" CR>)\n\t       (<VERB? FIND>\n\t\t<TELL \"I can't help you there....\" CR>)\n\t       (<VERB? DIG>\n\t\t<TELL \"Not a chance.\" CR>)>>"
  },
  "ZORKMID-FUNCTION": {
   "name": "ZORKMID-FUNCTION",
   "file": "gglobals.zil",
   "line": 329,
   "endLine": 335,
   "source": "<ROUTINE ZORKMID-FUNCTION ()\n    <COND (<VERB? EXAMINE>\n\t   <TELL\n\"The zorkmid is the unit of currency of the Great Underground Empire.\" CR>)\n\t  (<VERB? FIND>\n\t   <TELL\n\"The best way to find zorkmids is to go out and look for them.\" CR>)>>"
  },
  "ZPROB": {
   "name": "ZPROB",
   "file": "macros.zil",
   "line": 74,
   "endLine": 77,
   "source": "<ROUTINE ZPROB\n\t (BASE)\n\t <COND (,LUCKY <G? .BASE <RANDOM 100>>)\n\t       (ELSE <G? .BASE <RANDOM 300>>)>>"
  },
  "RANDOM-ELEMENT": {
   "name": "RANDOM-ELEMENT",
   "file": "gmacros.zil",
   "line": 127,
   "endLine": 128,
   "source": "<ROUTINE RANDOM-ELEMENT (FROB)\n\t <GET .FROB <RANDOM <GET .FROB 0>>>>"
  },
  "PICK-ONE": {
   "name": "PICK-ONE",
   "file": "macros.zil",
   "line": 79,
   "endLine": 80,
   "source": "<ROUTINE PICK-ONE (FROB)\n\t <GET .FROB <RANDOM <GET .FROB 0>>>>"
  },
  "MAIN-LOOP": {
   "name": "MAIN-LOOP",
   "file": "main.zil",
   "line": 29,
   "endLine": 93,
   "source": "<ROUTINE MAIN-LOOP (\"AUX\" ICNT OCNT NUM CNT OBJ TBL V PTBL OBJ1 TMP) \n   #DECL ((CNT OCNT ICNT NUM) FIX (V) <OR 'T FIX FALSE> (OBJ) <OR FALSE OBJECT>\n\t  (OBJ1) OBJECT (TBL) TABLE (PTBL) <OR FALSE ATOM>)\n   <REPEAT ()\n     <SET CNT 0>\n     <SET OBJ <>>\n     <SET PTBL T>\n     <COND (<SETG P-WON <PARSER>>\n\t    <SET ICNT <GET ,P-PRSI ,P-MATCHLEN>>\n\t    <SET NUM\n\t\t <COND (<0? <SET OCNT <GET ,P-PRSO ,P-MATCHLEN>>> .OCNT)\n\t\t       (<G? .OCNT 1>\n\t\t\t<SET TBL ,P-PRSO>\n\t\t\t<COND (<0? .ICNT> <SET OBJ <>>)\n\t\t\t      (T <SET OBJ <GET ,P-PRSI 1>>)>\n\t\t\t.OCNT)\n\t\t       (<G? .ICNT 1>\n\t\t\t<SET PTBL <>>\n\t\t\t<SET TBL ,P-PRSI>\n\t\t\t<SET OBJ <GET ,P-PRSO 1>>\n\t\t\t.ICNT)\n\t\t       (T 1)>>\n\t    <COND (<AND <NOT .OBJ> <1? .ICNT>> <SET OBJ <GET ,P-PRSI 1>>)>\n\t    <COND (<==? ,PRSA ,V?WALK> <SET V <PERFORM ,PRSA ,PRSO>>)\n\t\t  (<0? .NUM>\n\t\t   <COND (<0? <BAND <GETB ,P-SYNTAX ,P-SBITS> ,P-SONUMS>>\n\t\t\t  <SET V <PERFORM ,PRSA>>\n\t\t\t  <SETG PRSO <>>)\n\t\t\t (<NOT ,LIT>\n\t\t\t  <TELL \"It's too dark to see.\" CR>)\n\t\t\t (T\n\t\t\t  <TELL \"There isn't anything to \">\n\t\t\t  <SET TMP <GET ,P-ITBL ,P-VERBN>>\n\t\t\t  <COND (,P-OFLAG\n\t\t\t\t <PRINTB <GET .TMP 0>>)\n\t\t\t\t(T\n\t\t\t\t <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>)>\n\t\t\t  <TELL \"!\" CR>\n\t\t\t  <SET V <>>)>)\n\t\t  (T\n\t\t   <REPEAT ()\n\t\t\t   <COND (<G? <SET CNT <+ .CNT 1>> .NUM> <RETURN>)\n\t\t\t\t (T\n\t\t\t\t  <COND (.PTBL <SET OBJ1 <GET ,P-PRSO .CNT>>)\n\t\t\t\t\t(T <SET OBJ1 <GET ,P-PRSI .CNT>>)>\n\t\t\t\t  <COND (<G? .NUM 1>\n\t\t\t\t\t <PRINTD .OBJ1>\n\t\t\t\t\t <TELL \": \">)>\n\t\t\t\t  <SETG PRSO <COND (.PTBL .OBJ1) (T .OBJ)>>\n\t\t\t\t  <SETG PRSI <COND (.PTBL .OBJ) (T .OBJ1)>>\n\t\t\t\t  <SET V <PERFORM ,PRSA ,PRSO ,PRSI>>\n\t\t\t\t  <COND (<==? .V ,M-FATAL> <RETURN>)>)>>)>\n\t    <COND (<VERB? AGAIN WALK SAVE RESTORE SCORE VERSION WAIT> T)\n\t\t  (T\n\t\t   <SETG L-PRSA ,PRSA>\n\t\t   <SETG L-PRSO ,PRSO>\n\t\t   <SETG L-PRSI ,PRSI>)>\n\t    <SETG MOVES <+ ,MOVES 1>>\n\t    <COND (<==? .V ,M-FATAL> <SETG P-CONT <>>)>)\n\t   (T\n\t    <SETG P-CONT <>>)>\n     <COND (,P-WON\n\t    <COND (<VERB? TELL BRIEF SUPER-BRIEF VERBOSE SAVE VERSION\n\t\t\t  QUIT RESTART SCORE SCRIPT UNSCRIPT RESTORE> T)\n\t\t  (T <SET V <CLOCKER>>)>)>>>"
  },
  "MAIN-LOOP-1": {
   "name": "MAIN-LOOP-1",
   "file": "gmain.zil",
   "line": 38,
   "endLine": 172,
   "source": "<ROUTINE MAIN-LOOP-1 (\"AUX\" ICNT OCNT NUM CNT OBJ TBL V PTBL OBJ1 TMP O I) \n     <SET CNT 0>\n     <SET OBJ <>>\n     <SET PTBL T>\n     <COND (<SETG P-WON <PARSER>>\n\t    <SET ICNT <GET ,P-PRSI ,P-MATCHLEN>>\n\t    <SET OCNT <GET ,P-PRSO ,P-MATCHLEN>>\n\t    <COND (<AND ,P-IT-OBJECT <ACCESSIBLE? ,P-IT-OBJECT>>\n\t\t   <SET TMP <>>\n\t\t   <REPEAT ()\n\t\t\t   <COND (<G? <SET CNT <+ .CNT 1>> .ICNT>\n\t\t\t\t  <RETURN>)\n\t\t\t\t (T\n\t\t\t\t  <COND (<EQUAL? <GET ,P-PRSI .CNT> ,IT>\n\t\t\t\t\t <PUT ,P-PRSI .CNT ,P-IT-OBJECT>\n\t\t\t\t\t <SET TMP T>\n\t\t\t\t\t <RETURN>)>)>>\n\t\t   <COND (<NOT .TMP>\n\t\t\t  <SET CNT 0>\n\t\t\t  <REPEAT ()\n\t\t\t   <COND (<G? <SET CNT <+ .CNT 1>> .OCNT>\n\t\t\t\t  <RETURN>)\n\t\t\t\t (T\n\t\t\t\t  <COND (<EQUAL? <GET ,P-PRSO .CNT> ,IT>\n\t\t\t\t\t <PUT ,P-PRSO .CNT ,P-IT-OBJECT>\n\t\t\t\t\t <RETURN>)>)>>)>\n\t\t   <SET CNT 0>)>\n\t    <SET NUM\n\t\t <COND (<0? .OCNT> .OCNT)\n\t\t       (<G? .OCNT 1>\n\t\t\t<SET TBL ,P-PRSO>\n\t\t\t<COND (<0? .ICNT> <SET OBJ <>>)\n\t\t\t      (T <SET OBJ <GET ,P-PRSI 1>>)>\n\t\t\t.OCNT)\n\t\t       (<G? .ICNT 1>\n\t\t\t<SET PTBL <>>\n\t\t\t<SET TBL ,P-PRSI>\n\t\t\t<SET OBJ <GET ,P-PRSO 1>>\n\t\t\t.ICNT)\n\t\t       (T 1)>>\n\t    <COND (<AND <NOT .OBJ> <1? .ICNT>> <SET OBJ <GET ,P-PRSI 1>>)>\n\t    <COND (<AND <==? ,PRSA ,V?WALK>\n\t\t\t<NOT <ZERO? ,P-WALK-DIR>>>\n\t\t   <SET V <PERFORM ,PRSA ,PRSO>>)\n\t\t  (<0? .NUM>\n\t\t   <COND (<0? <BAND <GETB ,P-SYNTAX ,P-SBITS> ,P-SONUMS>>\n\t\t\t  <SET V <PERFORM ,PRSA>>\n\t\t\t  <SETG PRSO <>>)\n\t\t\t (<NOT ,LIT>\n\t\t\t  <TELL \"It's too dark to see.\" CR>)\n\t\t\t (T\n\t\t\t  <TELL \"It's not clear what you're referring to.\" CR>\n\t\t\t  <SET V <>>)>)\n\t\t  (T\n\t\t   <SETG P-NOT-HERE 0>\n\t\t   <SETG P-MULT <>>\n\t\t   <COND (<G? .NUM 1> <SETG P-MULT T>)>\n\t\t   <SET TMP <>>\n\t\t   <REPEAT ()\n\t\t\t   <COND (<G? <SET CNT <+ .CNT 1>> .NUM>\n\t\t\t\t  <COND (<G? ,P-NOT-HERE 0>\n\t\t\t\t\t <TELL \"The \">\n\t\t\t\t\t <COND (<NOT <EQUAL? ,P-NOT-HERE .NUM>>\n\t\t\t\t\t\t<TELL \"other \">)>\n\t\t\t\t\t <TELL \"object\">\n\t\t\t\t\t <COND (<NOT <EQUAL? ,P-NOT-HERE 1>>\n\t\t\t\t\t\t<TELL \"s\">)>\n\t\t\t\t\t <TELL \" that you mentioned \">\n\t\t\t\t\t <COND (<NOT <EQUAL? ,P-NOT-HERE 1>>\n\t\t\t\t\t\t<TELL \"are\">)\n\t\t\t\t\t       (T <TELL \"is\">)>\n\t\t\t\t\t <TELL \"n't here.\" CR>)\n\t\t\t\t\t(<NOT .TMP>\n\t\t\t\t\t <TELL\n\"There's nothing here you can take.\" CR>)>\n\t\t\t\t  <RETURN>)\n\t\t\t\t (T\n\t\t\t\t  <COND (.PTBL <SET OBJ1 <GET ,P-PRSO .CNT>>)\n\t\t\t\t\t(T <SET OBJ1 <GET ,P-PRSI .CNT>>)>\n\t\t\t\t  <SET O <COND (.PTBL .OBJ1) (T .OBJ)>>\n\t\t\t\t  <SET I <COND (.PTBL .OBJ) (T .OBJ1)>>\n\n;\"multiple exceptions\"\n<COND (<OR <G? .NUM 1>\n\t   <EQUAL? <GET <GET ,P-ITBL ,P-NC1> 0> ,W?ALL>>\n       <SET V <LOC ,WINNER>>\n       <COND (<EQUAL? .O ,NOT-HERE-OBJECT>\n\t      <SETG P-NOT-HERE <+ ,P-NOT-HERE 1>>\n\t      <AGAIN>)\n\t     (<AND <VERB? TAKE>\n\t\t   .I\n\t\t   <EQUAL? <GET <GET ,P-ITBL ,P-NC1> 0> ,W?ALL>\n\t\t   <NOT <IN? .O .I>>>\n\t      <AGAIN>)\n\t     (<AND <EQUAL? ,P-GETFLAGS ,P-ALL>\n\t\t   <VERB? TAKE>\n\t\t   <OR <AND <NOT <EQUAL? <LOC .O> ,WINNER ,HERE .V>>\n\t\t\t    <NOT <EQUAL? <LOC .O> .I>>\n\t\t\t    <NOT <FSET? <LOC .O> ,SURFACEBIT>>>\n\t\t       <NOT <OR <FSET? .O ,TAKEBIT>\n\t\t\t\t<FSET? .O ,TRYTAKEBIT>>>>>\n\t      <AGAIN>)\n\t     (ELSE\n\t      <COND (<EQUAL? .OBJ1 ,IT>\n\t\t     <PRINTD ,P-IT-OBJECT>)\n\t\t    (T <PRINTD .OBJ1>)>\n\t      <TELL \": \">)>)>\n;\"end multiple exceptions\"\n\t\t\t\t  <SETG PRSO .O>\n\t\t\t\t  <SETG PRSI .I>\n\t\t\t\t  <SET TMP T>\n\t\t\t\t  <SET V <PERFORM ,PRSA ,PRSO ,PRSI>>\n\t\t\t\t  <COND (<==? .V ,M-FATAL> <RETURN>)>)>>)>\n\t    <COND (<NOT <==? .V ,M-FATAL>>\n\t\t   ;<COND (<==? <LOC ,WINNER> ,PRSO>\n\t\t\t  <SETG PRSO <>>)>\n\t\t   <SET V <APPLY <GETP <LOC ,WINNER> ,P?ACTION> ,M-END>>)>\n\t    ;<COND (<VERB? ;AGAIN ;\"WALK -- why was this here?\"\n\t\t\t  SAVE RESTORE ;SCORE ;VERSION ;WAIT> T)\n\t\t  (T\n\t\t   <SETG L-PRSA ,PRSA>\n\t\t   <SETG L-PRSO ,PRSO>\n\t\t   <SETG L-PRSI ,PRSI>)>\n\t    <COND (<==? .V ,M-FATAL> <SETG P-CONT <>>)>)\n\t   (T\n\t    <SETG P-CONT <>>)>\n     %<COND (<==? ,ZORK-NUMBER 3>\n\t     '<COND (<NOT ,CLEFT-QUEUED?>\n\t\t     <ENABLE <QUEUE I-CLEFT <+ 70 <RANDOM 70>>>>\n\t\t     <SETG CLEFT-QUEUED? T>)>)\n\t    (ELSE '<NULL-F>)>\n     <COND (,P-WON\n\t    <COND (<VERB? TELL BRIEF SUPER-BRIEF VERBOSE SAVE VERSION\n\t\t\t  QUIT RESTART SCORE SCRIPT UNSCRIPT RESTORE> T)\n\t\t  (T <SET V <CLOCKER>>)>)>>"
  },
  "PARSER": {
   "name": "PARSER",
   "file": "parser.zil",
   "line": 125,
   "endLine": 281,
   "source": "<ROUTINE PARSER (\"AUX\" (PTR ,P-LEXSTART) WRD (VAL 0) (VERB <>)\n\t\t       LEN (DIR <>) (NW 0) (LW 0) NUM SCNT (CNT -1)) \n\t<REPEAT ()\n\t\t<COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN> <RETURN>)\n\t\t      (T <PUT ,P-ITBL .CNT 0>)>>\n\t<SETG P-ADVERB <>>\n\t<SETG P-MERGED <>>\n\t<PUT ,P-PRSO ,P-MATCHLEN 0>\n\t<PUT ,P-PRSI ,P-MATCHLEN 0>\n\t<PUT ,P-BUTS ,P-MATCHLEN 0>\n\t<COND (<AND <NOT ,QUOTE-FLAG> <N==? ,WINNER ,PLAYER>>\n\t       <SETG WINNER ,PLAYER>\n\t       <COND (<NOT <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t      <SETG HERE <LOC ,WINNER>>)>)>\n\t<COND (,P-CONT\n\t       <SET PTR ,P-CONT>\n\t       <COND (<AND <NOT ,SUPER-BRIEF> <==? ,PLAYER ,WINNER>>\n\t\t      <CRLF>)>\n\t       <SETG P-CONT <>>)\n\t      (T\n\t       <SETG WINNER ,PLAYER>\n\t       <SETG QUOTE-FLAG <>>\n\t       <COND (<NOT <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t      <SETG HERE <LOC ,WINNER>>)>\n\t       <COND (<NOT ,SUPER-BRIEF> <CRLF>)>\n\t       <TELL \">\">\n\t       <READ ,P-INBUF ,P-LEXV>)>\n\t<SETG P-LEN <GETB ,P-LEXV ,P-LEXWORDS>>\n\t<COND (<0? ,P-LEN> <TELL \"I beg your pardon?\" CR> <RFALSE>)>\n\t<SET LEN ,P-LEN>\n\t<SETG P-DIR <>>\n\t<SETG P-NCN 0>\n\t<SETG P-GETFLAGS 0>\n\t<REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <SETG QUOTE-FLAG <>>\n\t\t       <RETURN>)\n\t\t      (<OR <SET WRD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WRD <NUMBER? .PTR>>>\n\t\t       <COND (<AND <==? .WRD ,W?TO>\n\t\t\t\t   <EQUAL? .VERB ,ACT?TELL ;,ACT?ASK>>\n\t\t\t      <SET WRD ,W?QUOTE>)\n\t\t\t     (<AND <==? .WRD ,W?THEN>\n\t\t\t\t   <NOT .VERB>>\n\t\t\t      <PUT ,P-ITBL ,P-VERB ,ACT?TELL>\n\t\t\t      <PUT ,P-ITBL ,P-VERBN 0>\n\t\t\t      <SET WRD ,W?QUOTE>)>\n\t\t       <COND ;(<AND <EQUAL? .WRD ,W?.>\n\t\t\t\t   <EQUAL? .LW ,W?MRS ,W?MR ,W?MS>>\n\t\t\t      <SET LW 0>)\n\t\t\t     (<OR <EQUAL? .WRD ,W?THEN ,W?.>\n\t\t\t\t  <EQUAL? .WRD ,W?QUOTE>> \n\t\t\t      <COND (<EQUAL? .WRD ,W?QUOTE>\n\t\t\t\t     <COND (,QUOTE-FLAG\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>)\n\t\t\t\t\t   (T <SETG QUOTE-FLAG T>)>)>\n\t\t\t      <OR <0? ,P-LEN>\n\t\t\t\t  <SETG P-CONT <+ .PTR ,P-LEXELEN>>>\n\t\t\t      <PUTB ,P-LEXV ,P-LEXWORDS ,P-LEN>\n\t\t\t      <RETURN>)\n\t\t\t     (<AND <SET VAL\n\t\t\t\t\t<WT? .WRD\n\t\t\t\t\t     ,PS?DIRECTION\n\t\t\t\t\t     ,P1?DIRECTION>>\n\t\t\t\t   <EQUAL? .VERB <> ,ACT?WALK>\n\t\t\t\t   <OR <==? .LEN 1>\n\t\t\t\t       <AND <==? .LEN 2> <==? .VERB ,ACT?WALK>>\n\t\t\t\t       <AND <EQUAL? <SET NW\n\t\t\t\t\t\t     <GET ,P-LEXV\n\t\t\t\t\t\t\t  <+ .PTR ,P-LEXELEN>>>\n\t\t\t\t\t            ,W?THEN\n\t\t\t\t\t            ,W?.\n\t\t\t\t\t            ,W?QUOTE>\n\t\t\t\t\t    <NOT <L? .LEN 2>>>\n\t\t\t\t       <AND ,QUOTE-FLAG\n\t\t\t\t\t    <==? .LEN 2>\n\t\t\t\t\t    <EQUAL? .NW ,W?QUOTE>>\n\t\t\t\t       <AND <G? .LEN 2>\n\t\t\t\t\t    <EQUAL? .NW ,W?COMMA ,W?AND>>>>\n\t\t\t      <SET DIR .VAL>\n\t\t\t      <COND (<EQUAL? .NW ,W?COMMA ,W?AND>\n\t\t\t\t     <PUT ,P-LEXV\n\t\t\t\t\t  <+ .PTR ,P-LEXELEN>\n\t\t\t\t\t  ,W?THEN>)>\n\t\t\t      <COND (<NOT <G? .LEN 2>>\n\t\t\t\t     <SETG QUOTE-FLAG <>>\n\t\t\t\t     <RETURN>)>)\n\t\t\t     (<AND <SET VAL <WT? .WRD ,PS?VERB ,P1?VERB>>\n\t\t\t\t   <NOT .VERB> ;<OR <NOT .VERB>\n\t\t\t\t       <EQUAL? .VERB ,ACT?WHAT>>>\n\t\t\t      <SET VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERBN ,P-VTBL>\n\t\t\t      <PUT ,P-VTBL 0 .WRD>\n\t\t\t      <PUTB ,P-VTBL 2 <GETB ,P-LEXV\n\t\t\t\t\t\t    <SET NUM\n\t\t\t\t\t\t\t <+ <* .PTR 2> 2>>>>\n\t\t\t      <PUTB ,P-VTBL 3 <GETB ,P-LEXV <+ .NUM 1>>>)\n\t\t\t     (<OR <SET VAL <WT? .WRD ,PS?PREPOSITION 0>>\n\t\t\t\t  <AND <OR <EQUAL? .WRD ,W?ALL ,W?ONE ,W?A>\n\t\t\t\t\t   <WT? .WRD ,PS?ADJECTIVE>\n\t\t\t\t\t   <WT? .WRD ,PS?OBJECT>>\n\t\t\t\t       <SET VAL 0>>>\n\t\t\t      <COND (<AND <G? ,P-LEN 0>\n\t\t\t\t\t  <==? <GET ,P-LEXV\n\t\t\t\t\t\t    <+ .PTR ,P-LEXELEN>>\n\t\t\t\t\t       ,W?OF>\n\t\t\t\t\t  ;<NOT <EQUAL? .VERB ,ACT?ACCUSE>>\n\t\t\t\t\t  <0? .VAL>\n\t\t\t\t\t  <NOT\n\t\t\t\t\t   <EQUAL? .WRD ,W?ALL ,W?ONE ,W?A>>>)\n\t\t\t\t    (<AND <NOT <0? .VAL>>\n\t\t\t\t          <OR <0? ,P-LEN>\n\t\t\t\t\t      <EQUAL? <GET ,P-LEXV <+ .PTR 2>>\n\t\t\t\t\t\t      ,W?THEN ,W?.>>>\n\t\t\t\t     <COND (<L? ,P-NCN 2>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1 .VAL>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1N .WRD>)>)\n\t\t\t\t    (<==? ,P-NCN 2>\n\t\t\t\t     <TELL\n\"There were too many nouns in that sentence.\" CR>\n\t\t\t\t     <RFALSE>)\n\t\t\t\t    (T\n\t\t\t\t     <SETG P-NCN <+ ,P-NCN 1>>\n\t\t\t\t     <OR <SET PTR <CLAUSE .PTR .VAL .WRD>>\n\t\t\t\t\t <RFALSE>>\n\t\t\t\t     <COND (<L? .PTR 0>\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>\n\t\t\t\t\t    <RETURN>)>)>)\n\t\t\t     ;(<OR <EQUAL? .WRD ,W?CAREFULLY ,W?QUIETLY>\n\t\t\t\t  <EQUAL? .WRD ,W?SLOWLY ,W?QUICKLY\n\t\t\t\t\t        ,W?BRIEFLY>>\n\t\t\t      <SETG P-ADVERB .WRD>)\n\t\t\t     (<WT? .WRD ,PS?BUZZ-WORD>)\n\t\t\t     (<AND <EQUAL? .VERB ,ACT?TELL>\n\t\t\t\t   <WT? .WRD ,PS?VERB ,P1?VERB>>\n\t\t\t      <TELL\n\"Please consult your manual for the correct way to talk to other people\nor creatures.\" CR>)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T\n\t\t       <UNKNOWN-WORD .PTR>\n\t\t       <RFALSE>)>\n\t\t<SET LW .WRD>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>\n\t<COND (.DIR\n\t       <SETG PRSA ,V?WALK>\n\t       <SETG PRSO .DIR>\n\t       <SETG P-WALK-DIR .DIR>\n\t       <RETURN T>)>\n\t<SETG P-WALK-DIR <>>\n\t<COND (,P-OFLAG <ORPHAN-MERGE>)>\n\t;<COND (<==? <GET ,P-ITBL ,P-VERB> 0> <PUT ,P-ITBL ,P-VERB ,ACT?CALL>)>\n\t<COND (<AND <SYNTAX-CHECK> <SNARF-OBJECTS> <TAKE-CHECK> <MANY-CHECK>>\n\t       T)>>"
  },
  "STUFF": {
   "name": "STUFF",
   "file": "gparser.zil",
   "line": 387,
   "endLine": 399,
   "source": "<ROUTINE STUFF (SRC DEST \"OPTIONAL\" (MAX 29) \"AUX\" (PTR ,P-LEXSTART) (CTR 1)\n\t\t\t\t\t\t   BPTR)\n\t <PUTB .DEST 0 <GETB .SRC 0>>\n\t <PUTB .DEST 1 <GETB .SRC 1>>\n\t <REPEAT ()\n\t  <PUT .DEST .PTR <GET .SRC .PTR>>\n\t  <SET BPTR <+ <* .PTR 2> 2>>\n\t  <PUTB .DEST .BPTR <GETB .SRC .BPTR>>\n\t  <SET BPTR <+ <* .PTR 2> 3>>\n\t  <PUTB .DEST .BPTR <GETB .SRC .BPTR>>\n\t  <SET PTR <+ .PTR ,P-LEXELEN>>\n\t  <COND (<IGRTR? CTR .MAX>\n\t\t <RETURN>)>>>"
  },
  "INBUF-STUFF": {
   "name": "INBUF-STUFF",
   "file": "gparser.zil",
   "line": 402,
   "endLine": 406,
   "source": "<ROUTINE INBUF-STUFF (SRC DEST \"AUX\" CNT)\n\t <SET CNT <- <GETB .SRC 0> 1>>\n\t <REPEAT ()\n\t\t <PUTB .DEST .CNT <GETB .SRC .CNT>>\n\t\t <COND (<DLESS? CNT 0> <RETURN>)>>>"
  },
  "INBUF-ADD": {
   "name": "INBUF-ADD",
   "file": "gparser.zil",
   "line": 410,
   "endLine": 423,
   "source": "<ROUTINE INBUF-ADD (LEN BEG SLOT \"AUX\" DBEG (CTR 0) TMP)\n\t <COND (<SET TMP <GET ,OOPS-TABLE ,O-END>>\n\t\t<SET DBEG .TMP>)\n\t       (T\n\t\t<SET DBEG <+ <GETB ,AGAIN-LEXV\n\t\t\t\t   <SET TMP <GET ,OOPS-TABLE ,O-LENGTH>>>\n\t\t\t     <GETB ,AGAIN-LEXV <+ .TMP 1>>>>)>\n\t <PUT ,OOPS-TABLE ,O-END <+ .DBEG .LEN>>\n\t <REPEAT ()\n\t  <PUTB ,OOPS-INBUF <+ .DBEG .CTR> <GETB ,P-INBUF <+ .BEG .CTR>>>\n\t  <SET CTR <+ .CTR 1>>\n\t  <COND (<EQUAL? .CTR .LEN> <RETURN>)>>\n\t <PUTB ,AGAIN-LEXV .SLOT .DBEG>\n\t <PUTB ,AGAIN-LEXV <- .SLOT 1> .LEN>>"
  },
  "WT?": {
   "name": "WT?",
   "file": "parser.zil",
   "line": 291,
   "endLine": 297,
   "source": "<ROUTINE WT? (PTR BIT \"OPTIONAL\" (B1 5) \"AUX\" (OFFS ,P-P1OFF) TYP) \n\t<COND (<BTST <SET TYP <GETB .PTR ,P-PSOFF>> .BIT>\n\t       <COND (<G? .B1 4> <RTRUE>)\n\t\t     (T\n\t\t      <SET TYP <BAND .TYP ,P-P1BITS>>\n\t\t      <COND (<NOT <==? .TYP .B1>> <SET OFFS <+ .OFFS 1>>)>\n\t\t      <GETB .PTR .OFFS>)>)>>"
  },
  "CLAUSE": {
   "name": "CLAUSE",
   "file": "parser.zil",
   "line": 300,
   "endLine": 370,
   "source": "<ROUTINE CLAUSE (PTR VAL WRD \"AUX\" OFF NUM (ANDFLG <>) (FIRST?? T) NW (LW 0)) \n\t#DECL ((PTR VAL OFF NUM) FIX (WRD NW) <OR FALSE FIX TABLE>\n\t       (ANDFLG FIRST??) <OR ATOM FALSE>)\n\t<SET OFF <* <- ,P-NCN 1> 2>>\n\t<COND (<NOT <==? .VAL 0>>\n\t       <PUT ,P-ITBL <SET NUM <+ ,P-PREP1 .OFF>> .VAL>\n\t       <PUT ,P-ITBL <+ .NUM 1> .WRD>\n\t       <SET PTR <+ .PTR ,P-LEXELEN>>)\n\t      (T <SETG P-LEN <+ ,P-LEN 1>>)>\n\t<COND (<0? ,P-LEN> <SETG P-NCN <- ,P-NCN 1>> <RETURN -1>)>\n\t<PUT ,P-ITBL <SET NUM <+ ,P-NC1 .OFF>> <REST ,P-LEXV <* .PTR 2>>>\n\t<COND (<EQUAL? <GET ,P-LEXV .PTR> ,W?THE ,W?A ,W?AN>\n\t       <PUT ,P-ITBL .NUM <REST <GET ,P-ITBL .NUM> 4>>)>\n\t<REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <PUT ,P-ITBL <+ .NUM 1> <REST ,P-LEXV <* .PTR 2>>>\n\t\t       <RETURN -1>)>\n\t\t<COND (<OR <SET WRD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WRD <NUMBER? .PTR>>>\n\t\t       <COND (<0? ,P-LEN> <SET NW 0>)\n\t\t\t     (T <SET NW <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>>)>\n\t\t       ;<COND (<AND <==? .WRD ,W?OF>\n\t\t\t\t   <==? <GET ,P-ITBL ,P-VERB> ,ACT?ACCUSE>>\n\t\t\t      <PUT ,P-LEXV .PTR ,W?WITH>\n\t\t\t      <SET WRD ,W?WITH>)>\n\t\t       <COND ;(<AND <EQUAL? .WRD ,W?.>\n\t\t\t\t   <EQUAL? .LW ,W?MRS ,W?MR ,W?MS>>\n\t\t\t      <SET LW 0>)\n\t\t\t     (<EQUAL? .WRD ,W?AND ,W?COMMA> <SET ANDFLG T>)\n\t\t\t     (<EQUAL? .WRD ,W?ALL ,W?ONE>\n\t\t\t      <COND (<==? .NW ,W?OF>\n\t\t\t\t     <SETG P-LEN <- ,P-LEN 1>>\n\t\t\t\t     <SET PTR <+ .PTR ,P-LEXELEN>>)>)\n\t\t\t     (<OR <EQUAL? .WRD ,W?THEN ,W?.>\n\t\t\t\t  <AND <WT? .WRD ,PS?PREPOSITION>\n\t\t\t\t       <NOT .FIRST??>>>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 1>>\n\t\t\t      <PUT ,P-ITBL\n\t\t\t\t   <+ .NUM 1>\n\t\t\t\t   <REST ,P-LEXV <* .PTR 2>>>\n\t\t\t      <RETURN <- .PTR ,P-LEXELEN>>)\n\t\t\t     (<WT? .WRD ,PS?OBJECT>\n\t\t\t      <COND (<AND <WT? .WRD\n\t\t\t\t\t       ,PS?ADJECTIVE\n\t\t\t\t\t       ,P1?ADJECTIVE>\n\t\t\t\t\t  <NOT <==? .NW 0>>\n\t\t\t\t\t  <WT? .NW ,PS?OBJECT>>)\n\t\t\t\t    (<AND <NOT .ANDFLG>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?BUT ,W?EXCEPT>>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t\t     <PUT ,P-ITBL\n\t\t\t\t\t  <+ .NUM 1>\n\t\t\t\t\t  <REST ,P-LEXV <* <+ .PTR 2> 2>>>\n\t\t\t\t     <RETURN .PTR>)\n\t\t\t\t    (T <SET ANDFLG <>>)>)\n\t\t\t     (<OR <WT? .WRD ,PS?ADJECTIVE>\n\t\t\t\t  <WT? .WRD ,PS?BUZZ-WORD>>)\n\t\t\t     (<AND .ANDFLG\n\t\t\t\t   <OR <WT? .WRD ,PS?DIRECTION>\n\t\t\t\t       <WT? .WRD ,PS?VERB>>>\n\t\t\t      <SET PTR <- .PTR 4>>\n\t\t\t      <PUT ,P-LEXV <+ .PTR 2> ,W?THEN>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 2>>)\n\t\t\t     (<WT? .WRD ,PS?PREPOSITION> T)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T <UNKNOWN-WORD .PTR> <RFALSE>)>\n\t\t<SET LW .WRD>\n\t\t<SET FIRST?? <>>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>> "
  },
  "NUMBER?": {
   "name": "NUMBER?",
   "file": "parser.zil",
   "line": 372,
   "endLine": 394,
   "source": "<ROUTINE NUMBER? (PTR \"AUX\" CNT BPTR CHR (SUM 0) (TIM <>))\n\t <SET CNT <GETB <REST ,P-LEXV <* .PTR 2>> 2>>\n\t <SET BPTR <GETB <REST ,P-LEXV <* .PTR 2>> 3>>\n\t <REPEAT ()\n\t\t <COND (<L? <SET CNT <- .CNT 1>> 0> <RETURN>)\n\t\t       (T\n\t\t\t<SET CHR <GETB ,P-INBUF .BPTR>>\n\t\t\t<COND (<==? .CHR 58>\n\t\t\t       <SET TIM .SUM>\n\t\t\t       <SET SUM 0>)\n\t\t\t      (<G? .SUM 10000> <RFALSE>)\n\t\t\t      (<AND <L? .CHR 58> <G? .CHR 47>>\n\t\t\t       <SET SUM <+ <* .SUM 10> <- .CHR 48>>>)\n\t\t\t      (T <RFALSE>)>\n\t\t\t<SET BPTR <+ .BPTR 1>>)>>\n\t <PUT ,P-LEXV .PTR ,W?INTNUM>\n\t <COND (<G? .SUM 1000> <RFALSE>)\n\t       (.TIM\n\t\t<COND (<L? .TIM 8> <SET TIM <+ .TIM 12>>)\n\t\t      (<G? .TIM 23> <RFALSE>)>\n\t\t<SET SUM <+ .SUM <* .TIM 60>>>)>\n\t <SETG P-NUMBER .SUM>\n\t ,W?INTNUM>"
  },
  "ORPHAN-MERGE": {
   "name": "ORPHAN-MERGE",
   "file": "parser.zil",
   "line": 400,
   "endLine": 452,
   "source": "<ROUTINE ORPHAN-MERGE (\"AUX\" (CNT -1) TEMP VERB BEG END (ADJ <>) WRD) \n   #DECL ((CNT TEMP VERB) FIX (BEG END) <PRIMTYPE VECTOR> (WRD) TABLE)\n   <SETG P-OFLAG <>>\n   <COND\n    (<AND <NOT <0? <SET VERB <GET ,P-ITBL ,P-VERB>>>>\n\t  <NOT <==? .VERB <GET ,P-OTBL ,P-VERB>>>>\n     <RFALSE>)\n    (<==? ,P-NCN 2>\n     <RFALSE>)\n    (<==? <GET ,P-OTBL ,P-NC1> 1>\n     <COND (<OR <==? <SET TEMP <GET ,P-ITBL ,P-PREP1>> <GET ,P-OTBL ,P-PREP1>>\n\t\t<0? .TEMP>>\n\t    <PUT ,P-OTBL ,P-NC1 <GET ,P-ITBL ,P-NC1>>\n\t    <PUT ,P-OTBL ,P-NC1L <GET ,P-ITBL ,P-NC1L>>)\n\t   (T <RFALSE>)>)\n    (<==? <GET ,P-OTBL ,P-NC2> 1>\n     <COND (<OR <==? <SET TEMP <GET ,P-ITBL ,P-PREP1>> <GET ,P-OTBL ,P-PREP2>>\n\t\t<0? .TEMP>>\n\t    <PUT ,P-OTBL ,P-NC2 <GET ,P-ITBL ,P-NC1>>\n\t    <PUT ,P-OTBL ,P-NC2L <GET ,P-ITBL ,P-NC1L>>\n\t    <SETG P-NCN 2>)\n\t   (T <RFALSE>)>)\n    (,P-ACLAUSE\n     <COND\n      (<NOT <==? ,P-NCN 1>> <SETG P-ACLAUSE <>> <RFALSE>)\n      (T\n       <SET BEG <GET ,P-ITBL ,P-NC1>>\n       <SET END <GET ,P-ITBL ,P-NC1L>>\n       <REPEAT ()\n\t       <COND (<==? .BEG .END>\n\t\t      <COND (.ADJ\n\t\t\t     <ACLAUSE-WIN .ADJ>\n\t\t\t     <RETURN>)\n\t\t\t    (T\n\t\t\t     <SETG P-ACLAUSE <>>\n\t\t\t     <RFALSE>)>)\n\t\t     (<AND <NOT .ADJ>\n\t\t\t   <BTST <GETB <SET WRD <GET .BEG 0>> ,P-PSOFF>\n\t\t\t         ,PS?ADJECTIVE>>\n\t\t      <SET ADJ .WRD>)\n\t\t     (<OR <BTST <GETB .WRD ,P-PSOFF> ,PS?OBJECT>\n\t\t\t  <==? .WRD ,W?ONE>>\n\t\t      <COND (<NOT <EQUAL? .WRD ,P-ANAM ,W?ONE>> <RFALSE>)\n\t\t\t    (T\n\t\t\t     <ACLAUSE-WIN .ADJ>\n\t\t\t     <RETURN>)>)>\n\t       <SET BEG <REST .BEG ,P-WORDLEN>>>)>)>\n   <REPEAT ()\n\t   <COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN>\n\t\t  <SETG P-MERGED T>\n\t\t  <RTRUE>)\n\t\t (T <PUT ,P-ITBL .CNT <GET ,P-OTBL .CNT>>)>>\n   T>"
  },
  "ACLAUSE-WIN": {
   "name": "ACLAUSE-WIN",
   "file": "parser.zil",
   "line": 454,
   "endLine": 460,
   "source": "<ROUTINE ACLAUSE-WIN (ADJ)\n\t <SETG P-CCSRC ,P-OTBL>\n\t <CLAUSE-COPY ,P-ACLAUSE <+ ,P-ACLAUSE 1> .ADJ>\n\t <AND <NOT <==? <GET ,P-OTBL ,P-NC2> 0>>\n\t      <SETG P-NCN 2>>\n\t <SETG P-ACLAUSE <>>\n\t <RTRUE>>"
  },
  "NCLAUSE-WIN": {
   "name": "NCLAUSE-WIN",
   "file": "gparser.zil",
   "line": 645,
   "endLine": 653,
   "source": "<ROUTINE NCLAUSE-WIN ()\n        <PUT ,P-CCTBL ,CC-SBPTR ,P-NC1>\n\t<PUT ,P-CCTBL ,CC-SEPTR ,P-NC1L>\n\t<PUT ,P-CCTBL ,CC-DBPTR ,P-ACLAUSE>\n\t<PUT ,P-CCTBL ,CC-DEPTR <+ ,P-ACLAUSE 1>>\n\t<CLAUSE-COPY ,P-ITBL ,P-OTBL>\n\t<AND <NOT <EQUAL? <GET ,P-OTBL ,P-NC2> 0>> <SETG P-NCN 2>>\n\t<SETG P-ACLAUSE <>>\n\t<RTRUE>>"
  },
  "WORD-PRINT": {
   "name": "WORD-PRINT",
   "file": "parser.zil",
   "line": 465,
   "endLine": 470,
   "source": "<ROUTINE WORD-PRINT (CNT BUF)\n\t <REPEAT ()\n\t\t <COND (<DLESS? CNT 0> <RETURN>)\n\t\t       (ELSE\n\t\t\t<PRINTC <GETB ,P-INBUF .BUF>>\n\t\t\t<SET BUF <+ .BUF 1>>)>>>"
  },
  "UNKNOWN-WORD": {
   "name": "UNKNOWN-WORD",
   "file": "parser.zil",
   "line": 472,
   "endLine": 479,
   "source": "<ROUTINE UNKNOWN-WORD (PTR \"AUX\" BUF) \n\t#DECL ((PTR BUF) FIX)\n\t<TELL \"I don't know the word \\\"\">\n\t<WORD-PRINT <GETB <REST ,P-LEXV <SET BUF <* .PTR 2>>> 2>\n\t\t    <GETB <REST ,P-LEXV .BUF> 3>>\n\t<TELL \"\\\".\" CR>\n\t<SETG QUOTE-FLAG <>>\n\t<SETG P-OFLAG <>>>"
  },
  "CANT-USE": {
   "name": "CANT-USE",
   "file": "parser.zil",
   "line": 481,
   "endLine": 488,
   "source": "<ROUTINE CANT-USE (PTR \"AUX\" BUF) \n\t#DECL ((PTR BUF) FIX)\n\t<TELL \"You used the word \\\"\">\n\t<WORD-PRINT <GETB <REST ,P-LEXV <SET BUF <* .PTR 2>>> 2>\n\t\t    <GETB <REST ,P-LEXV .BUF> 3>>\n\t<TELL \"\\\" in a way that I don't understand.\" CR>\n\t<SETG QUOTE-FLAG <>>\n\t<SETG P-OFLAG <>>>"
  },
  "SYNTAX-CHECK": {
   "name": "SYNTAX-CHECK",
   "file": "parser.zil",
   "line": 517,
   "endLine": 582,
   "source": "<ROUTINE SYNTAX-CHECK (\"AUX\" SYN LEN NUM OBJ (DRIVE1 <>) (DRIVE2 <>) PREP VERB TMP) \n\t#DECL ((DRIVE1 DRIVE2) <OR FALSE <PRIMTYPE VECTOR>>\n\t       (SYN) <PRIMTYPE VECTOR> (LEN NUM VERB PREP) FIX\n\t       (OBJ) <OR FALSE OBJECT>)\n\t<COND (<0? <SET VERB <GET ,P-ITBL ,P-VERB>>>\n\t       <TELL \"There was no verb in that sentence!\" CR>\n\t       <RFALSE>)>\n\t<SET SYN <GET ,VERBS <- 255 .VERB>>>\n\t<SET LEN <GETB .SYN 0>>\n\t<SET SYN <REST .SYN>>\n\t<REPEAT ()\n\t\t<SET NUM <BAND <GETB .SYN ,P-SBITS> ,P-SONUMS>>\n\t\t<COND (<AND <NOT <L? .NUM 1>>\n\t\t\t    <0? ,P-NCN>\n\t\t\t    <OR <0? <SET PREP <GET ,P-ITBL ,P-PREP1>>>\n\t\t\t\t<==? .PREP <GETB .SYN ,P-SPREP1>>>>\n\t\t       <SET DRIVE1 .SYN>)\n\t\t      (<==? <GETB .SYN ,P-SPREP1> <GET ,P-ITBL ,P-PREP1>>\n\t\t       <COND (<AND <==? .NUM 2> <==? ,P-NCN 1>>\n\t\t\t      <SET DRIVE2 .SYN>)\n\t\t\t     (<==? <GETB .SYN ,P-SPREP2> <GET ,P-ITBL ,P-PREP2>>\n\t\t\t      <SYNTAX-FOUND .SYN>\n\t\t\t      <RTRUE>)>)>\n\t\t<COND (<DLESS? LEN 1>\n\t\t       <COND (<OR .DRIVE1 .DRIVE2> <RETURN>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"That sentence isn't one I recognize.\" CR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T <SET SYN <REST .SYN ,P-SYNLEN>>)>>\n\t<COND (<AND .DRIVE1\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE1 ,P-SFWIM1>\n\t\t\t       <GETB .DRIVE1 ,P-SLOC1>\n\t\t\t       <GETB .DRIVE1 ,P-SPREP1>>>>\n\t       <PUT ,P-PRSO ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSO 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE1>)\n\t      (<AND .DRIVE2\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE2 ,P-SFWIM2>\n\t\t\t       <GETB .DRIVE2 ,P-SLOC2>\n\t\t\t       <GETB .DRIVE2 ,P-SPREP2>>>>\n\t       <PUT ,P-PRSI ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSI 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE2>)\n\t      (<EQUAL? .VERB ,ACT?FIND ;,ACT?WHAT>\n\t       <TELL \"That question can't be answered.\" CR>\n\t       <RFALSE>)\n\t      (T\n\t       <ORPHAN .DRIVE1 .DRIVE2>\n\t       <TELL \"What do you want to \">\n\t       <SET TMP <GET ,P-OTBL ,P-VERBN>>\n\t       <COND (<==? .TMP 0> <TELL \"tell\">)\n\t\t     (<0? <GETB ,P-VTBL 2>>\n\t\t      <PRINTB <GET .TMP 0>>)\n\t\t     (T\n\t\t      <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>\n\t\t      <PUTB ,P-VTBL 2 0>)>\n\t       <COND (.DRIVE2\n\t\t      <CLAUSE-PRINT ,P-NC1 ,P-NC1L>)>\n\t       <SETG P-OFLAG T>\n\t       <PREP-PRINT <COND (.DRIVE1 <GETB .DRIVE1 ,P-SPREP1>)\n\t\t\t\t (T <GETB .DRIVE2 ,P-SPREP2>)>>\n\t       <TELL \"?\" CR>\n\t       <RFALSE>)>> "
  },
  "CANT-ORPHAN": {
   "name": "CANT-ORPHAN",
   "file": "gparser.zil",
   "line": 777,
   "endLine": 779,
   "source": "<ROUTINE CANT-ORPHAN ()\n\t <TELL \"\\\"I don't understand! What are you referring to?\\\"\" CR>\n\t <RFALSE>>"
  },
  "ORPHAN": {
   "name": "ORPHAN",
   "file": "parser.zil",
   "line": 584,
   "endLine": 598,
   "source": "<ROUTINE ORPHAN (D1 D2 \"AUX\" (CNT -1)) \n\t#DECL ((D1 D2) <OR FALSE <PRIMTYPE VECTOR>>)\n\t<PUT ,P-OCLAUSE ,P-MATCHLEN 0>\n\t<SETG P-CCSRC ,P-ITBL>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT ,P-ITBLLEN> <RETURN>)\n\t\t      (T <PUT ,P-OTBL .CNT <GET ,P-ITBL .CNT>>)>>\n\t<COND (<==? ,P-NCN 2> <CLAUSE-COPY ,P-NC2 ,P-NC2L>)>\n\t<COND (<NOT <L? ,P-NCN 1>> <CLAUSE-COPY ,P-NC1 ,P-NC1L>)>\n\t<COND (.D1\n\t       <PUT ,P-OTBL ,P-PREP1 <GETB .D1 ,P-SPREP1>>\n\t       <PUT ,P-OTBL ,P-NC1 1>)\n\t      (.D2\n\t       <PUT ,P-OTBL ,P-PREP2 <GETB .D2 ,P-SPREP2>>\n\t       <PUT ,P-OTBL ,P-NC2 1>)>> "
  },
  "THING-PRINT": {
   "name": "THING-PRINT",
   "file": "gparser.zil",
   "line": 813,
   "endLine": 820,
   "source": "<ROUTINE THING-PRINT (PRSO? \"OPTIONAL\" (THE? <>) \"AUX\" BEG END)\n\t <COND (.PRSO?\n\t\t<SET BEG <GET ,P-ITBL ,P-NC1>>\n\t\t<SET END <GET ,P-ITBL ,P-NC1L>>)\n\t       (ELSE\n\t\t<SET BEG <GET ,P-ITBL ,P-NC2>>\n\t\t<SET END <GET ,P-ITBL ,P-NC2L>>)>\n\t <BUFFER-PRINT .BEG .END .THE?>>"
  },
  "BUFFER-PRINT": {
   "name": "BUFFER-PRINT",
   "file": "parser.zil",
   "line": 603,
   "endLine": 622,
   "source": "<ROUTINE BUFFER-PRINT (BEG END CP \"AUX\" (NOSP <>) WRD (FIRST?? T) (PN <>))\n\t #DECL ((BEG END) <PRIMTYPE VECTOR> (CP) <OR FALSE ATOM>)\n\t <REPEAT ()\n\t\t<COND (<==? .BEG .END> <RETURN>)\n\t\t      (T\n\t\t       <COND (.NOSP <SET NOSP <>>)\n\t\t\t     (T <TELL \" \">)>\n\t\t       <COND (<==? <SET WRD <GET .BEG 0>> ,W?.> <SET NOSP T>)\n\t\t\t     (T\n\t\t\t      <COND (<AND .FIRST?? <NOT .PN> .CP>\n\t\t\t\t     <TELL \"the \">)>\n\t\t\t      <COND (,P-OFLAG <PRINTB .WRD>)\n\t\t\t\t    (<AND <==? .WRD ,W?IT>\n\t\t\t\t\t  <==? ,P-IT-LOC ,HERE>>\n\t\t\t\t     <PRINTD ,P-IT-OBJECT>)\n\t\t\t\t    (T\n\t\t\t\t     <WORD-PRINT <GETB .BEG 2>\n\t\t\t\t\t\t <GETB .BEG 3>>)>\n\t\t\t      <SET FIRST?? <>>)>)>\n\t\t<SET BEG <REST .BEG ,P-WORDLEN>>>>"
  },
  "PREP-PRINT": {
   "name": "PREP-PRINT",
   "file": "parser.zil",
   "line": 628,
   "endLine": 633,
   "source": "<ROUTINE PREP-PRINT (PREP \"AUX\" WRD) \n\t#DECL ((PREP) FIX)\n\t<COND (<NOT <0? .PREP>>\n\t       <TELL \" \">\n\t       <SET WRD <PREP-FIND .PREP>>\n\t       <PRINTB .WRD>)>>    "
  },
  "CLAUSE-COPY": {
   "name": "CLAUSE-COPY",
   "file": "parser.zil",
   "line": 635,
   "endLine": 656,
   "source": "<ROUTINE CLAUSE-COPY (BPTR EPTR \"OPTIONAL\" (INSRT <>) \"AUX\" BEG END) \n\t#DECL ((BPTR EPTR) FIX (BEG END) <PRIMTYPE VECTOR>\n\t       (INSRT) <OR FALSE TABLE>)\n\t<SET BEG <GET ,P-CCSRC .BPTR>>\n\t<SET END <GET ,P-CCSRC .EPTR>>\n\t<PUT ,P-OTBL\n\t     .BPTR\n\t     <REST ,P-OCLAUSE\n\t\t   <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN> 2>>>\n\t<REPEAT ()\n\t\t<COND (<==? .BEG .END>\n\t\t       <PUT ,P-OTBL\n\t\t\t    .EPTR\n\t\t\t    <REST ,P-OCLAUSE\n\t\t\t\t  <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN>\n\t\t\t\t     2>>>\n\t\t       <RETURN>)\n\t\t      (T\n\t\t       <COND (<AND .INSRT <==? ,P-ANAM <GET .BEG 0>>>\n\t\t\t      <CLAUSE-ADD .INSRT>)>\n\t\t       <CLAUSE-ADD <GET .BEG 0>>)>\n\t\t<SET BEG <REST .BEG ,P-WORDLEN>>>>  "
  },
  "CLAUSE-ADD": {
   "name": "CLAUSE-ADD",
   "file": "parser.zil",
   "line": 659,
   "endLine": 664,
   "source": "<ROUTINE CLAUSE-ADD (WRD \"AUX\" PTR) \n\t#DECL ((WRD) TABLE (PTR) FIX)\n\t<SET PTR <+ <GET ,P-OCLAUSE ,P-MATCHLEN> 2>>\n\t<PUT ,P-OCLAUSE <- .PTR 1> .WRD>\n\t<PUT ,P-OCLAUSE .PTR 0>\n\t<PUT ,P-OCLAUSE ,P-MATCHLEN .PTR>>   "
  },
  "PREP-FIND": {
   "name": "PREP-FIND",
   "file": "parser.zil",
   "line": 666,
   "endLine": 672,
   "source": "<ROUTINE PREP-FIND (PREP \"AUX\" (CNT 0) SIZE) \n\t#DECL ((PREP CNT SIZE) FIX)\n\t<SET SIZE <* <GET ,PREPOSITIONS 0> 2>>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT .SIZE> <RFALSE>)\n\t\t      (<==? <GET ,PREPOSITIONS .CNT> .PREP>\n\t\t       <RETURN <GET ,PREPOSITIONS <- .CNT 1>>>)>>>  "
  },
  "SYNTAX-FOUND": {
   "name": "SYNTAX-FOUND",
   "file": "parser.zil",
   "line": 674,
   "endLine": 677,
   "source": "<ROUTINE SYNTAX-FOUND (SYN) \n\t#DECL ((SYN) <PRIMTYPE VECTOR>)\n\t<SETG P-SYNTAX .SYN>\n\t<SETG PRSA <GETB .SYN ,P-SACTION>>>   "
  },
  "GWIM": {
   "name": "GWIM",
   "file": "parser.zil",
   "line": 681,
   "endLine": 701,
   "source": "<ROUTINE GWIM (GBIT LBIT PREP \"AUX\" OBJ) \n\t#DECL ((GBIT LBIT) FIX (OBJ) OBJECT)\n\t<COND (<==? .GBIT ,RMUNGBIT>\n\t       <RETURN ,ROOMS>)>\n\t<SETG P-GWIMBIT .GBIT>\n\t<SETG P-SLOCBITS .LBIT>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<COND (<GET-OBJECT ,P-MERGE <>>\n\t       <SETG P-GWIMBIT 0>\n\t       <COND (<==? <GET ,P-MERGE ,P-MATCHLEN> 1>\n\t\t      <SET OBJ <GET ,P-MERGE 1>>\n\t\t      <TELL \"(\">\n\t\t      <COND (<NOT <0? .PREP>>\n\t\t\t     <PRINTB <PREP-FIND .PREP>>\n\t\t\t     <COND ;(<==? .OBJ ,HANDS>\n\t\t\t\t    <TELL \" your hands)\" CR>)\n\t\t\t\t   (T\n\t\t\t\t    <TELL \" the \">)>)>\n\t\t      <TELL D .OBJ \")\" CR>\n\t\t      .OBJ)>)\n\t      (T <SETG P-GWIMBIT 0> <RFALSE>)>>   "
  },
  "SNARF-OBJECTS": {
   "name": "SNARF-OBJECTS",
   "file": "parser.zil",
   "line": 703,
   "endLine": 717,
   "source": "<ROUTINE SNARF-OBJECTS (\"AUX\" PTR) \n\t#DECL ((PTR) <OR FIX <PRIMTYPE VECTOR>>)\n\t<COND (<NOT <==? <SET PTR <GET ,P-ITBL ,P-NC1>> 0>>\n\t       <SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC1>>\n\t       <OR <SNARFEM .PTR <GET ,P-ITBL ,P-NC1L> ,P-PRSO> <RFALSE>>\n\t       <OR <0? <GET ,P-BUTS ,P-MATCHLEN>>\n\t\t   <SETG P-PRSO <BUT-MERGE ,P-PRSO>>>)>\n\t<COND (<NOT <==? <SET PTR <GET ,P-ITBL ,P-NC2>> 0>>\n\t       <SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC2>>\n\t       <OR <SNARFEM .PTR <GET ,P-ITBL ,P-NC2L> ,P-PRSI> <RFALSE>>\n\t       <COND (<NOT <0? <GET ,P-BUTS ,P-MATCHLEN>>>\n\t\t      <COND (<==? <GET ,P-PRSI ,P-MATCHLEN> 1>\n\t\t\t     <SETG P-PRSO <BUT-MERGE ,P-PRSO>>)\n\t\t\t    (T <SETG P-PRSI <BUT-MERGE ,P-PRSI>>)>)>)>\n\t<RTRUE>>  "
  },
  "BUT-MERGE": {
   "name": "BUT-MERGE",
   "file": "parser.zil",
   "line": 719,
   "endLine": 733,
   "source": "<ROUTINE BUT-MERGE (TBL \"AUX\" LEN BUTLEN (CNT 1) (MATCHES 0) OBJ NTBL) \n\t#DECL ((TBL NTBL) TABLE (LEN BUTLEN MATCHES) FIX (OBJ) OBJECT)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<REPEAT ()\n\t\t<COND (<DLESS? LEN 0> <RETURN>)\n\t\t      (<ZMEMQ <SET OBJ <GET .TBL .CNT>> ,P-BUTS>)\n\t\t      (T\n\t\t       <PUT ,P-MERGE <+ .MATCHES 1> .OBJ>\n\t\t       <SET MATCHES <+ .MATCHES 1>>)>\n\t\t<SET CNT <+ .CNT 1>>>\n\t<PUT ,P-MERGE ,P-MATCHLEN .MATCHES>\n\t<SET NTBL ,P-MERGE>\n\t<SETG P-MERGE .TBL>\n\t.NTBL>    "
  },
  "SNARFEM": {
   "name": "SNARFEM",
   "file": "parser.zil",
   "line": 766,
   "endLine": 814,
   "source": "<ROUTINE SNARFEM (PTR EPTR TBL \"AUX\" (BUT <>) LEN WV WRD NW) \n   #DECL ((TBL) TABLE (PTR EPTR) <PRIMTYPE VECTOR>\n\t  (BUT) <OR FALSE TABLE> (WV) <OR FALSE FIX>)\n   <SETG P-GETFLAGS 0>\n   <SETG P-CSPTR .PTR>\n   <SETG P-CEPTR .EPTR>\n   <PUT ,P-BUTS ,P-MATCHLEN 0>\n   <PUT .TBL ,P-MATCHLEN 0>\n   <SET WRD <GET .PTR 0>>\n   <REPEAT ()\n\t   <COND (<==? .PTR .EPTR> <RETURN <GET-OBJECT <OR .BUT .TBL>>>)\n\t\t (T\n\t\t  <SET NW <GET .PTR ,P-LEXELEN>>\n\t\t  <COND (<==? .WRD ,W?ALL>\n\t\t\t <SETG P-GETFLAGS ,P-ALL>\n\t\t\t <COND (<==? .NW ,W?OF>\n\t\t\t\t<SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t(<EQUAL? .WRD ,W?BUT ,W?EXCEPT>\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t <SET BUT ,P-BUTS>\n\t\t\t <PUT .BUT ,P-MATCHLEN 0>)\n\t\t\t(<EQUAL? .WRD ,W?A ,W?ONE>\n\t\t\t <COND (<NOT ,P-ADJ>\n\t\t\t\t<SETG P-GETFLAGS ,P-ONE>\n\t\t\t\t<COND (<==? .NW ,W?OF>\n\t\t\t\t       <SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t       (T\n\t\t\t\t<SETG P-NAM ,P-ONEOBJ>\n\t\t\t\t<OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t\t<AND <0? .NW> <RTRUE>>)>)\n\t\t\t(<AND <EQUAL? .WRD ,W?AND ,W?COMMA>\n\t\t\t      <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t T)\n\t\t\t(<WT? .WRD ,PS?BUZZ-WORD>)\n\t\t\t(<EQUAL? .WRD ,W?AND ,W?COMMA>)\n\t\t\t(<==? .WRD ,W?OF>\n\t\t\t <COND (<0? ,P-GETFLAGS>\n\t\t\t\t<SETG P-GETFLAGS ,P-INHIBIT>)>)\n\t\t\t(<AND <SET WV <WT? .WRD ,PS?ADJECTIVE ,P1?ADJECTIVE>>\n\t\t\t      <NOT ,P-ADJ>>\n\t\t\t <SETG P-ADJ .WV>\n\t\t\t <SETG P-ADJN .WRD>)\n\t\t\t(<WT? .WRD ,PS?OBJECT ,P1?OBJECT>\n\t\t\t <SETG P-NAM .WRD>\n\t\t\t <SETG P-ONEOBJ .WRD>)>)>\n\t   <COND (<NOT <==? .PTR .EPTR>>\n\t\t  <SET PTR <REST .PTR ,P-WORDLEN>>\n\t\t  <SET WRD .NW>)>>>   "
  },
  "GET-OBJECT": {
   "name": "GET-OBJECT",
   "file": "parser.zil",
   "line": 830,
   "endLine": 930,
   "source": "<ROUTINE GET-OBJECT (TBL\n\t\t    \"OPTIONAL\" (VRB T)\n\t\t    \"AUX\" BTS LEN XBITS TLEN (GCHECK <>) (OLEN 0))\n\t#DECL ((TBL) TABLE (XBTS BTS TLEN LEN) FIX (GWIM) <OR FALSE FIX>\n\t       (VRB GCHECK) <OR ATOM FALSE>)\n\t<SET XBITS ,P-SLOCBITS>\n\t<SET TLEN <GET .TBL ,P-MATCHLEN>>\n\t<COND (<BTST ,P-GETFLAGS ,P-INHIBIT> <RTRUE>)>\n\t<COND (<AND <NOT ,P-NAM> ,P-ADJ>\n\t       <COND (<WT? ,P-ADJN ,PS?OBJECT ,P1?OBJECT>\n\t\t      <SETG P-NAM ,P-ADJN>\n\t\t      <SETG P-ADJ <>>)\n\t\t     (<SET BTS <WT? ,P-ADJN ,PS?DIRECTION ,P1?DIRECTION>>\n\t\t      <SETG P-ADJ <>>\n\t\t      <PUT .TBL ,P-MATCHLEN 1>\n\t\t      <PUT .TBL 1 ,INTDIR>\n\t\t      <SETG P-DIRECTION .BTS>\n\t\t      <RTRUE>)>)>\n\t<COND (<AND <NOT ,P-NAM>\n\t\t    <NOT ,P-ADJ>\n\t\t    <NOT <==? ,P-GETFLAGS ,P-ALL>>\n\t\t    <0? ,P-GWIMBIT>>\n\t       <COND (.VRB\n\t\t      <TELL \n\"There seems to be a noun missing in that sentence!\"  CR>)>\n\t       <RFALSE>)>\n\t<COND (<OR <NOT <==? ,P-GETFLAGS ,P-ALL>> <0? ,P-SLOCBITS>>\n\t       <SETG P-SLOCBITS -1>)>\n\t<SETG P-TABLE .TBL>\n\t<PROG ()\n\t      <COND (.GCHECK <GLOBAL-CHECK .TBL>)\n\t\t    (T\n\t\t     <COND (,LIT <DO-SL ,HERE ,SOG ,SIR>)>\n\t\t     <DO-SL ,WINNER ,SH ,SC>\n\t\t     <COND (<NOT <EQUAL? ,WINNER ,PLAYER>>\n\t\t\t    <DO-SL ,PLAYER ,SH ,SC>)>)>\n\t      <SET LEN <- <GET .TBL ,P-MATCHLEN> .TLEN>>\n\t      <COND (<BTST ,P-GETFLAGS ,P-ALL>)\n\t\t    (<AND <BTST ,P-GETFLAGS ,P-ONE>\n\t\t\t  <NOT <0? .LEN>>>\n\t\t     <COND (<NOT <==? .LEN 1>>\n\t\t\t    <PUT .TBL 1 <GET .TBL <RANDOM .LEN>>>\n\t\t\t    <TELL \"(How about the \">\n\t\t\t    <PRINTD <GET .TBL 1>>\n\t\t\t    <TELL \"?)\" CR>)>\n\t\t     <PUT .TBL ,P-MATCHLEN 1>)\n\t\t    (<OR <G? .LEN 1>\n\t\t\t <AND <0? .LEN> <NOT <==? ,P-SLOCBITS -1>>>>\n\t\t     <COND (<==? ,P-SLOCBITS -1>\n\t\t\t    <SETG P-SLOCBITS .XBITS>\n\t\t\t    <SET OLEN .LEN>\n\t\t\t    <PUT .TBL\n\t\t\t\t ,P-MATCHLEN\n\t\t\t\t <- <GET .TBL ,P-MATCHLEN> .LEN>>\n\t\t\t    <AGAIN>)\n\t\t\t   (T\n\t\t\t    <COND (<0? .LEN> <SET LEN .OLEN>)>\n\t\t\t    <COND (<AND .VRB ,P-NAM>\n\t\t\t\t   <WHICH-PRINT .TLEN .LEN .TBL>\n\t\t\t\t   <SETG P-ACLAUSE\n\t\t\t\t\t <COND (<==? .TBL ,P-PRSO> ,P-NC1)\n\t\t\t\t\t       (T ,P-NC2)>>\n\t\t\t\t   <SETG P-AADJ ,P-ADJ>\n\t\t\t\t   <SETG P-ANAM ,P-NAM>\n\t\t\t\t   <ORPHAN <> <>>\n\t\t\t\t   <SETG P-OFLAG T>)\n\t\t\t\t  (.VRB\n\t\t\t\t   <TELL\n\"There seems to be a verb missing in that sentence.\" CR>)>\n\t\t\t    <SETG P-NAM <>>\n\t\t\t    <SETG P-ADJ <>>\n\t\t\t    <RFALSE>)>)\n\t\t    (<AND <0? .LEN> .GCHECK>\n\t\t     <COND (.VRB\n\t\t\t    <COND (<NOT <==? ,WINNER ,PLAYER>>\n\t\t\t\t   <TELL\n\"\\\"I can't see that here!\\\"\" CR>)\n\t\t\t\t  (,LIT\n\t\t\t\t   <TELL \"You can't see any\">\n\t\t\t\t   <COND (,P-OFLAG\n\t\t\t\t\t  <COND (,P-ADJ\n\t\t\t\t\t\t <TELL \" \">\n\t\t\t\t\t\t <PRINTB ,P-ADJN>)>\n\t\t\t\t\t  <COND (,P-NAM\n\t\t\t\t\t\t <TELL \" \">\n\t\t\t\t\t\t <PRINTB ,P-NAM>)>)\n\t\t\t\t\t (T\n\t\t\t\t\t  <BUFFER-PRINT ,P-CSPTR\n\t\t\t\t\t\t\t,P-CEPTR\n\t\t\t\t\t\t\t<>>)>\n\t\t\t\t   <TELL \" here.\" CR>)\n\t\t\t\t  (T\n\t\t\t\t   <TELL \"It's too dark to see.\" CR>)>)>\n\t\t     <SETG P-NAM <>>\n\t\t     <SETG P-ADJ <>>\n\t\t     <RFALSE>)\n\t\t    (<0? .LEN> <SET GCHECK T> <AGAIN>)>\n\t      <SETG P-ADJ <>>\n\t      <SETG P-NAM <>>\n\t      <SETG P-SLOCBITS .XBITS>\n\t      <RTRUE>>>   "
  },
  "WHICH-PRINT": {
   "name": "WHICH-PRINT",
   "file": "parser.zil",
   "line": 932,
   "endLine": 947,
   "source": "<ROUTINE WHICH-PRINT (TLEN LEN TBL \"AUX\" OBJ RLEN)\n\t <SET RLEN .LEN>\n\t <TELL \"Which \">\n         <PRINTB ,P-NAM>\n\t <TELL \" do you mean, \">\n\t <REPEAT ()\n\t\t <SET TLEN <+ .TLEN 1>>\n\t\t <SET OBJ <GET .TBL .TLEN>>\n\t\t <TELL \"the \" D .OBJ>\n\t\t <COND (<==? .LEN 2>\n\t\t        <COND (<NOT <==? .RLEN 2>> <TELL \",\">)>\n\t\t        <TELL \" or \">)\n\t\t       (<G? .LEN 2> <TELL \", \">)>\n\t\t <COND (<L? <SET LEN <- .LEN 1>> 1>\n\t\t        <TELL \"?\" CR>\n\t\t        <RETURN>)>>>"
  },
  "GLOBAL-CHECK": {
   "name": "GLOBAL-CHECK",
   "file": "parser.zil",
   "line": 950,
   "endLine": 982,
   "source": "<ROUTINE GLOBAL-CHECK (TBL \"AUX\" LEN RMG RMGL (CNT 0) OBJ OBITS FOO) \n\t#DECL ((TBL) TABLE (RMG) <OR FALSE TABLE> (RMGL CNT) FIX (OBJ) OBJECT)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<SET OBITS ,P-SLOCBITS>\n\t<COND (<SET RMG <GETPT ,HERE ,P?GLOBAL>>\n\t       <SET RMGL <- <PTSIZE .RMG> 1>>\n\t       <REPEAT ()\n\t\t       <COND (<THIS-IT? <SET OBJ <GETB .RMG .CNT>> .TBL>\n\t\t\t      <OBJ-FOUND .OBJ .TBL>)>\n\t\t       <COND (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<SET RMG <GETPT ,HERE ,P?PSEUDO>>\n\t       <SET RMGL <- </ <PTSIZE .RMG> 4> 1>>\n\t       <SET CNT 0>\n\t       <REPEAT ()\n\t\t       <COND (<==? ,P-NAM <GET .RMG <* .CNT 2>>>\n\t\t\t      <PUTP ,PSEUDO-OBJECT\n\t\t\t\t    ,P?ACTION\n\t\t\t\t    <GET .RMG <+ <* .CNT 2> 1>>>\n\t\t\t      <SET FOO\n\t\t\t\t   <BACK <GETPT ,PSEUDO-OBJECT ,P?ACTION> 5>>\n\t\t\t      <PUT .FOO 0 <GET ,P-NAM 0>>\n\t\t\t      <PUT .FOO 1 <GET ,P-NAM 1>>\n\t\t\t      <OBJ-FOUND ,PSEUDO-OBJECT .TBL>\n\t\t\t      <RETURN>)\n\t\t             (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<==? <GET .TBL ,P-MATCHLEN> .LEN>\n\t       <SETG P-SLOCBITS -1>\n\t       <SETG P-TABLE .TBL>\n\t       <DO-SL ,GLOBAL-OBJECTS 1 1>\n\t       <SETG P-SLOCBITS .OBITS>\n\t       <COND (<AND <0? <GET .TBL ,P-MATCHLEN>>\n\t\t\t   <EQUAL? ,PRSA ,V?LOOK-INSIDE ,V?SEARCH ,V?EXAMINE>>\n\t\t      <DO-SL ,ROOMS 1 1>)>)>>"
  },
  "DO-SL": {
   "name": "DO-SL",
   "file": "parser.zil",
   "line": 984,
   "endLine": 993,
   "source": "<ROUTINE DO-SL (OBJ BIT1 BIT2 \"AUX\" BTS) \n\t#DECL ((OBJ) OBJECT (BIT1 BIT2 BTS) FIX)\n\t<COND (<BTST ,P-SLOCBITS <+ .BIT1 .BIT2>>\n\t       <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCALL>)\n\t      (T\n\t       <COND (<BTST ,P-SLOCBITS .BIT1>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCTOP>)\n\t\t     (<BTST ,P-SLOCBITS .BIT2>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCBOT>)\n\t\t     (T <RTRUE>)>)>>  "
  },
  "SEARCH-LIST": {
   "name": "SEARCH-LIST",
   "file": "parser.zil",
   "line": 1001,
   "endLine": 1023,
   "source": "<ROUTINE SEARCH-LIST (OBJ TBL LVL \"AUX\" FLS NOBJ) \n\t#DECL ((OBJ NOBJ) <OR FALSE OBJECT> (TBL) TABLE (LVL) FIX (FLS) ANY)\n\t<COND (<SET OBJ <FIRST? .OBJ>>\n\t       <REPEAT ()\n\t\t       <COND (<AND <NOT <==? .LVL ,P-SRCBOT>>\n\t\t\t\t   <GETPT .OBJ ,P?SYNONYM>\n\t\t\t\t   <THIS-IT? .OBJ .TBL>>\n\t\t\t      <OBJ-FOUND .OBJ .TBL>)>\n\t\t       <COND (<AND <OR <NOT <==? .LVL ,P-SRCTOP>>\n\t\t\t\t       <FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t       <FSET? .OBJ ,SURFACEBIT>>\n\t\t\t\t   <SET NOBJ <FIRST? .OBJ>>\n\t\t\t\t   <OR <FSET? .OBJ ,OPENBIT>\n\t\t\t\t       <FSET? .OBJ ,TRANSBIT>>>\n\t\t\t      <SET FLS\n\t\t\t\t   <SEARCH-LIST .OBJ\n\t\t\t\t\t\t.TBL\n\t\t\t\t\t\t<COND (<FSET? .OBJ ,SURFACEBIT>\n\t\t\t\t\t\t       ,P-SRCALL)\n\t\t\t\t\t\t      (<FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t\t\t       ,P-SRCALL)\n\t\t\t\t\t\t      (T ,P-SRCTOP)>>>)>\n\t\t       <COND (<SET OBJ <NEXT? .OBJ>>) (T <RETURN>)>>)>> "
  },
  "OBJ-FOUND": {
   "name": "OBJ-FOUND",
   "file": "parser.zil",
   "line": 1025,
   "endLine": 1029,
   "source": "<ROUTINE OBJ-FOUND (OBJ TBL \"AUX\" PTR) \n\t#DECL ((OBJ) OBJECT (TBL) TABLE (PTR) FIX)\n\t<SET PTR <GET .TBL ,P-MATCHLEN>>\n\t<PUT .TBL <+ .PTR 1> .OBJ>\n\t<PUT .TBL ,P-MATCHLEN <+ .PTR 1>>> "
  },
  "TAKE-CHECK": {
   "name": "TAKE-CHECK",
   "file": "parser.zil",
   "line": 1031,
   "endLine": 1033,
   "source": "<ROUTINE TAKE-CHECK () \n\t<AND <ITAKE-CHECK ,P-PRSO <GETB ,P-SYNTAX ,P-SLOC1>>\n\t     <ITAKE-CHECK ,P-PRSI <GETB ,P-SYNTAX ,P-SLOC2>>>> "
  },
  "ITAKE-CHECK": {
   "name": "ITAKE-CHECK",
   "file": "parser.zil",
   "line": 1035,
   "endLine": 1058,
   "source": "<ROUTINE ITAKE-CHECK (TBL BTS \"AUX\" PTR OBJ TAKEN) \n\t #DECL ((TBL) TABLE (BTS PTR) FIX (OBJ) OBJECT\n\t\t(TAKEN) <OR FALSE FIX ATOM>)\n\t <COND (<AND <SET PTR <GET .TBL ,P-MATCHLEN>> <BTST .BTS ,STAKE>>\n\t\t<REPEAT ()\n\t\t\t<COND (<L? <SET PTR <- .PTR 1>> 0> <RETURN>)\n\t\t\t      (T\n\t\t\t       <SET OBJ <GET .TBL <+ .PTR 1>>>\n\t\t\t       <COND (<==? .OBJ ,IT> <SET OBJ ,P-IT-OBJECT>)>\n\t\t\t       <COND (<NOT <IN? .OBJ ,WINNER>>\n\t\t\t\t      <SETG PRSO .OBJ>\n\t\t\t\t      <COND (<FSET? .OBJ ,TRYTAKEBIT>\n\t\t\t\t\t     <SET TAKEN T>)\n\t\t\t\t\t    (<==? <ITAKE <>> T>\n\t\t\t\t\t     <SET TAKEN <>>)\n\t\t\t\t\t    (T <SET TAKEN T>)>\n\t\t\t\t      <COND (<AND .TAKEN <BTST .BTS ,SHAVE>>\n\t\t\t\t\t     <TELL \"You don't have the \">\n\t\t\t\t\t     <PRINTD .OBJ>\n\t\t\t\t\t     <TELL \".\" CR>\n\t\t\t\t\t     <RFALSE>)\n\t\t\t\t\t    (<NOT .TAKEN>\n\t\t\t\t\t     <TELL \"(Taken)\" CR>)>)>)>>)\n\t       (T)>>  "
  },
  "MANY-CHECK": {
   "name": "MANY-CHECK",
   "file": "parser.zil",
   "line": 1060,
   "endLine": 1080,
   "source": "<ROUTINE MANY-CHECK (\"AUX\" (LOSS <>) TMP) \n\t#DECL ((LOSS) <OR FALSE FIX>)\n\t<COND (<AND <G? <GET ,P-PRSO ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC1> ,SMANY>>>\n\t       <SET LOSS 1>)\n\t      (<AND <G? <GET ,P-PRSI ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC2> ,SMANY>>>\n\t       <SET LOSS 2>)>\n\t<COND (.LOSS\n\t       <TELL \"I can't use multiple \">\n\t       <COND (<==? .LOSS 2> <TELL \"in\">)>\n\t       <TELL \"direct objects with '\">\n\t       <SET TMP <GET ,P-ITBL ,P-VERBN>>\n\t       <COND (<0? .TMP> <TELL \"tell\">)\n\t\t     (,P-OFLAG\n\t\t      <PRINTB <GET .TMP 0>>)\n\t\t     (T\n\t\t      <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>)>\n\t       <TELL \"'.\" CR>\n\t       <RFALSE>)\n\t      (T)>>  "
  },
  "ZMEMQ": {
   "name": "ZMEMQ",
   "file": "parser.zil",
   "line": 1082,
   "endLine": 1088,
   "source": "<ROUTINE ZMEMQ (ITM TBL \"OPTIONAL\" (SIZE -1) \"AUX\" (CNT 1)) \n\t<COND (<NOT .TBL> <RFALSE>)>\n\t<COND (<NOT <L? .SIZE 0>> <SET CNT 0>)\n\t      (ELSE <SET SIZE <GET .TBL 0>>)>\n\t<REPEAT ()\n\t\t<COND (<==? .ITM <GET .TBL .CNT>> <RTRUE>)\n\t\t      (<IGRTR? CNT .SIZE> <RFALSE>)>>>    "
  },
  "ZMEMQB": {
   "name": "ZMEMQB",
   "file": "parser.zil",
   "line": 1090,
   "endLine": 1094,
   "source": "<ROUTINE ZMEMQB (ITM TBL SIZE \"AUX\" (CNT 0)) \n\t#DECL ((ITM) ANY (TBL) TABLE (SIZE CNT) FIX)\n\t<REPEAT ()\n\t\t<COND (<==? .ITM <GETB .TBL .CNT>> <RTRUE>)\n\t\t      (<IGRTR? CNT .SIZE> <RFALSE>)>>>  "
  },
  "LIT?": {
   "name": "LIT?",
   "file": "parser.zil",
   "line": 1096,
   "endLine": 1111,
   "source": "<ROUTINE LIT? (RM \"AUX\" OHERE (LIT <>)) \n\t#DECL ((RM OHERE) OBJECT (LIT) <OR ATOM FALSE>)\n\t<SETG P-GWIMBIT ,ONBIT>\n\t<SET OHERE ,HERE>\n\t<SETG HERE .RM>\n\t<COND (<FSET? .RM ,ONBIT> <SET LIT T>)\n\t      (T\n\t       <PUT ,P-MERGE ,P-MATCHLEN 0>\n\t       <SETG P-TABLE ,P-MERGE>\n\t       <SETG P-SLOCBITS -1>\n\t       <COND (<==? .OHERE .RM> <DO-SL ,WINNER 1 1>)>\n\t       <DO-SL .RM 1 1>\n\t       <COND (<G? <GET ,P-TABLE ,P-MATCHLEN> 0> <SET LIT T>)>)>\n\t<SETG HERE .OHERE>\n\t<SETG P-GWIMBIT 0>\n\t.LIT> "
  },
  "THIS-IT?": {
   "name": "THIS-IT?",
   "file": "gparser.zil",
   "line": 1396,
   "endLine": 1409,
   "source": "<ROUTINE THIS-IT? (OBJ TBL \"AUX\" SYNS)\n <COND (<FSET? .OBJ ,INVISIBLE> <RFALSE>)\n       (<AND ,P-NAM\n\t     <NOT <ZMEMQ ,P-NAM\n\t\t\t <SET SYNS <GETPT .OBJ ,P?SYNONYM>>\n\t\t\t <- </ <PTSIZE .SYNS> 2> 1>>>>\n\t<RFALSE>)\n       (<AND ,P-ADJ\n\t     <OR <NOT <SET SYNS <GETPT .OBJ ,P?ADJECTIVE>>>\n\t\t <NOT <ZMEMQB ,P-ADJ .SYNS <- <PTSIZE .SYNS> 1>>>>>\n\t<RFALSE>)\n       (<AND <NOT <ZERO? ,P-GWIMBIT>> <NOT <FSET? .OBJ ,P-GWIMBIT>>>\n\t<RFALSE>)>\n <RTRUE>>"
  },
  "ACCESSIBLE?": {
   "name": "ACCESSIBLE?",
   "file": "gparser.zil",
   "line": 1411,
   "endLine": 1435,
   "source": "<ROUTINE ACCESSIBLE? (OBJ \"AUX\" (L <LOC .OBJ>)) ;\"can player TOUCH object?\"\n\t ;\"revised 5/2/84 by SEM and SWG\"\n\t <COND (<FSET? .OBJ ,INVISIBLE>\n\t\t<RFALSE>)\n\t       ;(<EQUAL? .OBJ ,PSEUDO-OBJECT>\n\t\t<COND (<EQUAL? ,LAST-PSEUDO-LOC ,HERE>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <RFALSE>)>)\n\t       (<NOT .L>\n\t\t<RFALSE>)\n\t       (<EQUAL? .L ,GLOBAL-OBJECTS>\n\t\t<RTRUE>)\n\t       (<AND <EQUAL? .L ,LOCAL-GLOBALS>\n\t\t     <GLOBAL-IN? .OBJ ,HERE>>\n\t\t<RTRUE>)\n\t       (<NOT <EQUAL? <META-LOC .OBJ> ,HERE <LOC ,WINNER>>>\n\t\t<RFALSE>)\n\t       (<EQUAL? .L ,WINNER ,HERE <LOC ,WINNER>>\n\t\t<RTRUE>)\n\t       (<AND <FSET? .L ,OPENBIT>\n\t\t     <ACCESSIBLE? .L>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "META-LOC": {
   "name": "META-LOC",
   "file": "gparser.zil",
   "line": 1437,
   "endLine": 1446,
   "source": "<ROUTINE META-LOC (OBJ)\n\t <REPEAT ()\n\t\t <COND (<NOT .OBJ>\n\t\t\t<RFALSE>)\n\t\t       (<IN? .OBJ ,GLOBAL-OBJECTS>\n\t\t\t<RETURN ,GLOBAL-OBJECTS>)>\n\t\t <COND (<IN? .OBJ ,ROOMS>\n\t\t\t<RETURN .OBJ>)\n\t\t       (T\n\t\t\t<SET OBJ <LOC .OBJ>>)>>>"
  },
  "V-VERBOSE": {
   "name": "V-VERBOSE",
   "file": "verbs.zil",
   "line": 14,
   "endLine": 17,
   "source": "<ROUTINE V-VERBOSE ()\n\t <SETG VERBOSE T>\n\t <SETG SUPER-BRIEF <>>\n\t <TELL \"Maximum verbosity.\" CR>>"
  },
  "V-BRIEF": {
   "name": "V-BRIEF",
   "file": "verbs.zil",
   "line": 19,
   "endLine": 22,
   "source": "<ROUTINE V-BRIEF ()\n\t <SETG VERBOSE <>>\n\t <SETG SUPER-BRIEF <>>\n\t <TELL \"Brief descriptions.\" CR>>"
  },
  "V-SUPER-BRIEF": {
   "name": "V-SUPER-BRIEF",
   "file": "verbs.zil",
   "line": 24,
   "endLine": 26,
   "source": "<ROUTINE V-SUPER-BRIEF ()\n\t <SETG SUPER-BRIEF T>\n\t <TELL \"Super-brief descriptions.\" CR>>"
  },
  "V-INVENTORY": {
   "name": "V-INVENTORY",
   "file": "verbs.zil",
   "line": 466,
   "endLine": 468,
   "source": "<ROUTINE V-INVENTORY ()\n\t <COND (<FIRST? ,WINNER> <PRINT-CONT ,WINNER>)\n\t       (T <TELL \"You are empty-handed.\" CR>)>>"
  },
  "FINISH": {
   "name": "FINISH",
   "file": "verbs.zil",
   "line": 209,
   "endLine": 211,
   "source": "<ROUTINE FINISH ()\n\t <V-SCORE>\n\t <QUIT>>"
  },
  "V-QUIT": {
   "name": "V-QUIT",
   "file": "verbs.zil",
   "line": 213,
   "endLine": 222,
   "source": "<ROUTINE V-QUIT (\"OPTIONAL\" (ASK? T) \"AUX\" SCOR)\n\t #DECL ((ASK?) <OR ATOM <PRIMTYPE LIST>> (SCOR) FIX)\n\t <V-SCORE>\n\t <COND (<OR <AND .ASK?\n\t\t\t <TELL\n\"Do you wish to leave the game? (Y is affirmative): \">\n\t\t\t <YES?>>\n\t\t    <NOT .ASK?>>\n\t\t<QUIT>)\n\t       (ELSE <TELL \"Ok.\" CR>)>>"
  },
  "V-RESTART": {
   "name": "V-RESTART",
   "file": "verbs.zil",
   "line": 364,
   "endLine": 370,
   "source": "<ROUTINE V-RESTART ()\n\t <V-SCORE T>\n\t <TELL \"Do you wish to restart? (Y is affirmative): \">\n\t <COND (<YES?>\n\t\t<TELL \"Restarting.\" CR>\n\t\t<RESTART>\n\t\t<TELL \"Failed.\" CR>)>>"
  },
  "V-RESTORE": {
   "name": "V-RESTORE",
   "file": "verbs.zil",
   "line": 351,
   "endLine": 356,
   "source": "<ROUTINE V-RESTORE ()\n\t <COND (<RESTORE>\n\t\t<TELL \"Ok.\" CR>\n\t\t<V-FIRST-LOOK>)\n\t       (T\n\t\t<TELL \"Failed.\" CR>)>>"
  },
  "V-SAVE": {
   "name": "V-SAVE",
   "file": "verbs.zil",
   "line": 358,
   "endLine": 362,
   "source": "<ROUTINE V-SAVE ()\n\t <COND (<SAVE>\n\t        <TELL \"Ok.\" CR>)\n\t       (T\n\t\t<TELL \"Failed.\" CR>)>>"
  },
  "V-SCRIPT": {
   "name": "V-SCRIPT",
   "file": "verbs.zil",
   "line": 713,
   "endLine": 715,
   "source": "<ROUTINE V-SCRIPT ()\n\t<PUT 0 8 <BOR <GET 0 8> 1>>\n\t<TELL \"Here begins\" ,COPR-NOTICE CR>>"
  },
  "V-UNSCRIPT": {
   "name": "V-UNSCRIPT",
   "file": "verbs.zil",
   "line": 717,
   "endLine": 720,
   "source": "<ROUTINE V-UNSCRIPT ()\n\t<TELL \"Here ends\" ,COPR-NOTICE CR>\n\t<PUT 0 8 <BAND <GET 0 8> -2>>\n\t<RTRUE>>"
  },
  "V-VERSION": {
   "name": "V-VERSION",
   "file": "verbs.zil",
   "line": 232,
   "endLine": 246,
   "source": "<ROUTINE V-VERSION (\"AUX\" (CNT 17))\n\t <TELL\n\"ZORK III: The Dungeon Master|\nInfocom interactive fiction - a fantasy story|\nCopyright 1982, 1983, 1984 by Infocom, Inc.  All rights reserved.|\nZORK is a registered trademark of Infocom, Inc.|\nRelease \">\n\t <PRINTN <BAND <GET 0 1> *3777*>>\n\t <TELL \" / Serial number \">\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> 23>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<PRINTC <GETB 0 .CNT>>)>>\n\t <CRLF>>"
  },
  "V-VERIFY": {
   "name": "V-VERIFY",
   "file": "gverbs.zil",
   "line": 123,
   "endLine": 128,
   "source": "<ROUTINE V-VERIFY ()\n\t <TELL \"Verifying disk...\" CR>\n\t <COND (<VERIFY>\n\t\t<TELL \"The disk is correct.\" CR>)\n\t       (T\n\t\t<TELL CR \"** Disk Failure **\" CR>)>>"
  },
  "V-COMMAND-FILE": {
   "name": "V-COMMAND-FILE",
   "file": "gverbs.zil",
   "line": 130,
   "endLine": 132,
   "source": "<ROUTINE V-COMMAND-FILE ()\n\t <DIRIN 1>\n\t <RTRUE>>"
  },
  "V-RANDOM": {
   "name": "V-RANDOM",
   "file": "gverbs.zil",
   "line": 134,
   "endLine": 139,
   "source": "<ROUTINE V-RANDOM ()\n\t <COND (<NOT <EQUAL? ,PRSO ,INTNUM>>\n\t\t<TELL \"Illegal call to #RND.\" CR>)\n\t       (T\n\t\t<RANDOM <- 0 ,P-NUMBER>>\n\t\t<RTRUE>)>>"
  },
  "V-RECORD": {
   "name": "V-RECORD",
   "file": "gverbs.zil",
   "line": 141,
   "endLine": 143,
   "source": "<ROUTINE V-RECORD ()\n\t <DIROUT 4>\n\t <RTRUE>>"
  },
  "V-UNRECORD": {
   "name": "V-UNRECORD",
   "file": "gverbs.zil",
   "line": 145,
   "endLine": 147,
   "source": "<ROUTINE V-UNRECORD ()\n\t <DIROUT -4>\n\t <RTRUE>>"
  },
  "V-ADVENT": {
   "name": "V-ADVENT",
   "file": "verbs.zil",
   "line": 905,
   "endLine": 905,
   "source": "<ROUTINE V-ADVENT () <TELL \"A hollow voice says \\\"Fool.\\\"\" CR>>"
  },
  "V-ALARM": {
   "name": "V-ALARM",
   "file": "verbs.zil",
   "line": 1294,
   "endLine": 1298,
   "source": "<ROUTINE V-ALARM ()\n\t <COND (<FSET? ,PRSO ,VILLAIN>\n\t\t<TELL \"He's wide awake, or haven't you noticed...\" CR>)\n\t       (ELSE\n\t\t<TELL \"The \" D ,PRSO \" isn't sleeping.\" CR>)>>"
  },
  "V-ANSWER": {
   "name": "V-ANSWER",
   "file": "verbs.zil",
   "line": 1417,
   "endLine": 1421,
   "source": "<ROUTINE V-ANSWER ()\n\t <TELL \"Nobody seems to be awaiting your answer.\" CR>\n\t <SETG P-CONT <>>\n\t <SETG QUOTE-FLAG <>>\n\t <RTRUE>>"
  },
  "V-ATTACK": {
   "name": "V-ATTACK",
   "file": "verbs.zil",
   "line": 1152,
   "endLine": 1152,
   "source": "<ROUTINE V-ATTACK () <IKILL \"attack\">>"
  },
  "V-BACK": {
   "name": "V-BACK",
   "file": "verbs.zil",
   "line": 858,
   "endLine": 861,
   "source": "<ROUTINE V-BACK\n\t ()\n\t <TELL\n\"Sorry, my memory is poor. Please give a direction.\" CR>>"
  },
  "V-BLAST": {
   "name": "V-BLAST",
   "file": "verbs.zil",
   "line": 810,
   "endLine": 811,
   "source": "<ROUTINE V-BLAST ()\n\t <TELL \"You can't blast anything by using words.\" CR>>"
  },
  "PRE-BOARD": {
   "name": "PRE-BOARD",
   "file": "verbs.zil",
   "line": 774,
   "endLine": 787,
   "source": "<ROUTINE PRE-BOARD\n\t (\"AUX\" AV)\n\t <SET AV <LOC ,WINNER>>\n\t <COND (<==? ,PRSO ,WATER-CHANNEL> <RFALSE>)\n\t       (<FSET? ,PRSO ,VEHBIT>\n\t\t<COND (<FSET? .AV ,VEHBIT>\n\t\t       <TELL \"You are already in the \" D .AV \"!\" CR>)\n\t\t      (T <RFALSE>)>)\n\t       (T\n\t\t<TELL \"I suppose you have a theory on boarding a \"\n\t\t      D\n\t\t      ,PRSO\n\t\t      \".\" CR>)>\n\t <RFATAL>>"
  },
  "V-BOARD": {
   "name": "V-BOARD",
   "file": "verbs.zil",
   "line": 789,
   "endLine": 795,
   "source": "<ROUTINE V-BOARD\n\t (\"AUX\" AV)\n\t #DECL ((AV) OBJECT)\n\t <TELL \"You are now in the \" D ,PRSO \".\" CR>\n\t <MOVE ,WINNER ,PRSO>\n\t <APPLY <GETP ,PRSO ,P?ACTION> ,M-ENTER>\n\t <RTRUE>>"
  },
  "V-BREATHE": {
   "name": "V-BREATHE",
   "file": "gverbs.zil",
   "line": 249,
   "endLine": 250,
   "source": "<ROUTINE V-BREATHE ()\n\t <PERFORM ,V?INFLATE ,PRSO ,LUNGS>>"
  },
  "V-BRUSH": {
   "name": "V-BRUSH",
   "file": "gverbs.zil",
   "line": 252,
   "endLine": 253,
   "source": "<ROUTINE V-BRUSH ()\n\t <TELL \"If you wish, but heaven only knows why.\" CR>>"
  },
  "V-BUG": {
   "name": "V-BUG",
   "file": "verbs.zil",
   "line": 703,
   "endLine": 706,
   "source": "<ROUTINE V-BUG ()\n\t <TELL\n\"If there is a problem here, it is unintentional. You may report\nyour problem to the address provided in your documentation.\" CR>>"
  },
  "TELL-NO-PRSI": {
   "name": "TELL-NO-PRSI",
   "file": "gverbs.zil",
   "line": 259,
   "endLine": 260,
   "source": "<ROUTINE TELL-NO-PRSI ()\n\t <TELL \"You didn't say with what!\" CR>>"
  },
  "PRE-BURN": {
   "name": "PRE-BURN",
   "file": "verbs.zil",
   "line": 1062,
   "endLine": 1064,
   "source": "<ROUTINE PRE-BURN ()\n\t <COND (<FLAMING? ,PRSI> <RFALSE>)\n\t       (T <TELL \"With a \" D ,PRSI \"??!?\" CR>)>>"
  },
  "V-BURN": {
   "name": "V-BURN",
   "file": "verbs.zil",
   "line": 1066,
   "endLine": 1078,
   "source": "<ROUTINE V-BURN ()\n\t <COND (<FSET? ,PRSO ,BURNBIT>\n\t\t<COND (<IN? ,PRSO ,WINNER>\n\t\t       <REMOVE ,PRSO>\n\t\t       <TELL \"The \" D ,PRSO \" catches fire.\" CR>\n\t\t       <JIGS-UP\n\"Unfortunately, you were holding it at the time.\">)\n\t\t      (T\n\t\t       <REMOVE ,PRSO>\n\t\t       <TELL \"The \" D ,PRSO\n\" catches fire and is consumed.\" CR>)\n\t\t      (ELSE <TELL \"You don't have that.\" CR>)>)\n\t       (T <TELL \"I don't think you can burn a \" D ,PRSO \".\" CR>)>>"
  },
  "V-CHOMP": {
   "name": "V-CHOMP",
   "file": "verbs.zil",
   "line": 1219,
   "endLine": 1220,
   "source": "<ROUTINE V-CHOMP ()\n\t <TELL \"I don't know how to do that. I win in all cases!\" CR>>"
  },
  "V-CLIMB-DOWN": {
   "name": "V-CLIMB-DOWN",
   "file": "verbs.zil",
   "line": 1338,
   "endLine": 1338,
   "source": "<ROUTINE V-CLIMB-DOWN () <V-CLIMB-UP ,P?DOWN>>"
  },
  "V-CLIMB-FOO": {
   "name": "V-CLIMB-FOO",
   "file": "verbs.zil",
   "line": 1321,
   "endLine": 1323,
   "source": "<ROUTINE V-CLIMB-FOO ()\n\t <V-CLIMB-UP <COND (<EQUAL? ,PRSO ,ROPE ,GLOBAL-ROPE> ,P?DOWN)\n\t\t\t   (T ,P?UP)> T>>"
  },
  "V-CLIMB-ON": {
   "name": "V-CLIMB-ON",
   "file": "verbs.zil",
   "line": 1315,
   "endLine": 1319,
   "source": "<ROUTINE V-CLIMB-ON ()\n\t <COND (<FSET? ,PRSO ,VEHBIT>\n\t\t<V-CLIMB-UP ,P?UP T>)\n\t       (T\n\t\t<TELL \"You can't climb onto the \" D ,PRSO \".\" CR>)>>"
  },
  "V-CLIMB-UP": {
   "name": "V-CLIMB-UP",
   "file": "verbs.zil",
   "line": 1325,
   "endLine": 1336,
   "source": "<ROUTINE V-CLIMB-UP (\"OPTIONAL\" (DIR ,P?UP) (OBJ <>) \"AUX\" X)\n\t #DECL ((DIR) FIX (OBJ) <OR ATOM FALSE> (X) TABLE)\n\t <COND (<GETPT ,HERE .DIR>\n\t\t<DO-WALK .DIR>\n\t\t<RTRUE>)\n\t       (<NOT .OBJ>\n\t\t<TELL \"You can't go that way.\" CR>)\n\t       (<AND .OBJ\n\t\t     <ZMEMQ ,W?WALL\n\t\t\t    <SET X <GETPT ,PRSO ,P?SYNONYM>> <PTSIZE .X>>>\n\t\t<TELL \"Climbing the walls is to no avail.\" CR>)\n\t       (ELSE <TELL \"Bizarre!\" CR>)>>"
  },
  "V-CLOSE": {
   "name": "V-CLOSE",
   "file": "verbs.zil",
   "line": 664,
   "endLine": 679,
   "source": "<ROUTINE V-CLOSE ()\n\t <COND (<NOT <FSET? ,PRSO ,CONTBIT>>\n\t\t<TELL \"You must tell me how to do that to a \" D ,PRSO \".\" CR>)\n\t       (<AND <NOT <FSET? ,PRSO ,SURFACEBIT>>\n\t\t     <NOT <==? <GETP ,PRSO ,P?CAPACITY> 0>>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <FCLEAR ,PRSO ,OPENBIT>\n\t\t       <TELL \"Closed.\" CR>)\n\t\t      (T <TELL \"It is already closed.\" CR>)>)\n\t       (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"The \" D ,PRSO \" is now closed.\" CR>\n\t\t       <FCLEAR ,PRSO ,OPENBIT>)\n\t\t      (T <TELL \"It is already closed.\" CR>)>)\n\t       (ELSE\n\t\t<TELL \"You cannot close that.\" CR>)>>"
  },
  "V-COMMAND": {
   "name": "V-COMMAND",
   "file": "verbs.zil",
   "line": 1309,
   "endLine": 1313,
   "source": "<ROUTINE V-COMMAND ()\n\t <COND (<FSET? ,PRSO ,VICBIT>\n\t\t<TELL \"The \" D ,PRSO \" pays no attention.\" CR>)\n\t       (ELSE\n\t\t<TELL \"You cannot talk to that!\" CR>)>>"
  },
  "V-COUNT": {
   "name": "V-COUNT",
   "file": "verbs.zil",
   "line": 1348,
   "endLine": 1353,
   "source": "<ROUTINE V-COUNT (\"AUX\" OBJS CNT)\n    #DECL ((CNT) FIX)\n    <COND (<==? ,PRSO ,BLESSINGS>\n\t   <TELL \"Well, for one, you are playing ZORK...\" CR>)\n\t  (T\n\t   <TELL \"You have lost your mind.\" CR>)>>"
  },
  "V-CROSS": {
   "name": "V-CROSS",
   "file": "verbs.zil",
   "line": 1375,
   "endLine": 1376,
   "source": "<ROUTINE V-CROSS ()\n\t <TELL \"You can't cross that!\" CR>>"
  },
  "V-CURSES": {
   "name": "V-CURSES",
   "file": "verbs.zil",
   "line": 935,
   "endLine": 943,
   "source": "<ROUTINE V-CURSES ()\n\t <COND (,PRSO\n\t\t<COND (<FSET? ,PRSO ,VILLAIN>\n\t\t       <TELL \"Insults of this nature won't help you.\" CR>)\n\t\t      (T\n\t\t       <TELL \"What a loony!\" CR>)>)\n\t       (T\n\t\t<TELL\n\"Such language in a high-class establishment like this!\" CR>)>>"
  },
  "V-CUT": {
   "name": "V-CUT",
   "file": "verbs.zil",
   "line": 1099,
   "endLine": 1117,
   "source": "<ROUTINE V-CUT ()\n\t <COND (<FSET? ,PRSO ,VILLAIN>\n\t\t<PERFORM ,V?KILL ,PRSO ,PRSI>)\n\t       (<AND <FSET? ,PRSO ,BURNBIT>\n\t\t     <FSET? ,PRSI ,WEAPONBIT>>\n\t\t<REMOVE ,PRSO>\n\t\t<TELL \"Your skillful \"\n\t\t      D\n\t\t      ,PRSI\n\t\t      \"smanship slices the \"\n\t\t      D\n\t\t      ,PRSO\n\t\t      \" into innumerable slivers which blow away.\"\n\t\t      CR>)\n\t       (<NOT <FSET? ,PRSI ,WEAPONBIT>>\n\t\t<TELL\n\"I doubt that the \\\"cutting edge\\\" of a \" D ,PRSI \" is adequate.\" CR>)\n\t       (T\n\t\t<TELL \"Strange concept, cutting the \" D ,PRSO \"....\" CR>)>>"
  },
  "V-DEFLATE": {
   "name": "V-DEFLATE",
   "file": "verbs.zil",
   "line": 1091,
   "endLine": 1091,
   "source": "<ROUTINE V-DEFLATE () <TELL \"Come on, now!\" CR>>"
  },
  "V-DIG": {
   "name": "V-DIG",
   "file": "verbs.zil",
   "line": 1260,
   "endLine": 1260,
   "source": "<ROUTINE V-DIG () <TELL \"The ground is too hard here.\" CR>>"
  },
  "V-DISEMBARK": {
   "name": "V-DISEMBARK",
   "file": "verbs.zil",
   "line": 797,
   "endLine": 808,
   "source": "<ROUTINE V-DISEMBARK\n\t ()\n\t <COND (<NOT <==? <LOC ,WINNER> ,PRSO>>\n\t\t<TELL \"You're not in that!\" CR>\n\t\t<RFATAL>)\n\t       (<FSET? ,HERE ,RLANDBIT>\n\t\t<TELL \"You are on your own feet again.\" CR>\n\t\t<MOVE ,WINNER ,HERE>)\n\t       (T\n\t\t<TELL\n\"You realize that getting out here would be fatal.\" CR>\n\t\t<RFATAL>)>>"
  },
  "V-DISENCHANT": {
   "name": "V-DISENCHANT",
   "file": "gverbs.zil",
   "line": 453,
   "endLine": 485,
   "source": "<ROUTINE V-DISENCHANT ()\n\t %<COND (<==? ,ZORK-NUMBER 2>\n\t\t '<COND (<NOT <IN? ,PRSO ,HERE>>\n\t\t         <RTRUE>)\n\t                (<OR <EQUAL? ,SPELL-USED ,W?FEEBLE ,W?FUMBLE ,W?FEAR>\n\t\t          <EQUAL? ,SPELL-USED ,W?FREEZE ,W?FALL ,W?FERMENT>\n\t\t          <EQUAL? ,SPELL-USED ,W?FIERCE ,W?FENCE ,W?FANTASIZE>>\n\t\t          <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t                 <COND (<EQUAL? ,SPELL-USED ,W?FEEBLE>\n\t\t\t                <TELL\n\"The \" D ,PRSO \" seems stronger now.\" CR>)\n\t\t\t               (<EQUAL? ,SPELL-USED ,W?FUMBLE>\n\t\t\t                <TELL\n\"The \" D ,PRSO \" no longer appears clumsy.\" CR>)\n\t\t\t               (<EQUAL? ,SPELL-USED ,W?FEAR>\n\t\t\t                <TELL\n\"The \" D ,PRSO \" no longer appears afraid.\" CR>)\n\t\t\t               (<EQUAL? ,SPELL-USED ,W?FREEZE>\n\t\t\t                <TELL\n\"The \" D ,PRSO \" moves again.\" CR>)\n\t\t\t               (<EQUAL? ,SPELL-USED ,W?FERMENT>\n\t\t\t                <TELL\n\"The \" D ,PRSO \" stops swaying.\" CR>)\n\t\t\t               (<EQUAL? ,SPELL-USED ,W?FIERCE>\n\t\t\t                <TELL\n\"The \" D ,PRSO \" appears more peaceful.\" CR>)>)>)\n\t                        (<EQUAL? ,SPELL-USED ,W?FLOAT>\n\t\t                 <TELL\n\"The \" D ,PRSO \" sinks to the ground.\" CR>)\n\t                        (<EQUAL? ,SPELL-USED ,W?FUDGE>\n\t\t                 <TELL \"The sweet smell has dispersed.\" CR>)>)\n\t\t(T\n\t\t '<TELL \"Nothing happens.\" CR>)>>"
  },
  "V-DRINK": {
   "name": "V-DRINK",
   "file": "verbs.zil",
   "line": 907,
   "endLine": 908,
   "source": "<ROUTINE V-DRINK ()\n\t <V-EAT>>"
  },
  "V-DRINK-FROM": {
   "name": "V-DRINK-FROM",
   "file": "verbs.zil",
   "line": 1542,
   "endLine": 1543,
   "source": "<ROUTINE V-DRINK-FROM ()\n\t <TELL \"How peculiar!\" CR>>"
  },
  "PRE-DROP": {
   "name": "PRE-DROP",
   "file": "verbs.zil",
   "line": 577,
   "endLine": 580,
   "source": "<ROUTINE PRE-DROP ()\n\t <COND (<==? ,PRSO <LOC ,WINNER>>\n\t\t<PERFORM ,V?DISEMBARK ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-DROP": {
   "name": "V-DROP",
   "file": "verbs.zil",
   "line": 606,
   "endLine": 606,
   "source": "<ROUTINE V-DROP () <COND (<IDROP> <TELL \"Dropped.\" CR>)>>"
  },
  "V-EAT": {
   "name": "V-EAT",
   "file": "verbs.zil",
   "line": 910,
   "endLine": 933,
   "source": "<ROUTINE V-EAT (\"AUX\" (EAT? <>) (DRINK? <>) (NOBJ <>))\n\t #DECL ((NOBJ) <OR OBJECT FALSE> (EAT? DRINK?) <OR ATOM FALSE>)\n\t <COND (<AND <SET EAT? <FSET? ,PRSO ,FOODBIT>> <IN? ,PRSO ,WINNER>>\n\t\t<COND (<VERB? DRINK> <TELL \"How can I drink that?\">)\n\t\t      (ELSE\n\t\t       <TELL \"Thank you very much. It really hit the spot.\">\n\t\t       <REMOVE ,PRSO>)>\n\t\t<CRLF>)\n\t       (<SET DRINK? <FSET? ,PRSO ,DRINKBIT>>\n\t\t<COND (<OR <IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t\t   <AND <SET NOBJ <LOC ,PRSO>>\n\t\t\t\t<IN? .NOBJ ,WINNER>\n\t\t\t\t<FSET? .NOBJ ,OPENBIT>>>\n\t\t       <TELL\n\"Thank you very much. I was rather thirsty (from all this talking,\nprobably).\" CR>\n\t\t       <REMOVE ,PRSO>)\n\t\t      (T <TELL \n\"I'd like to, but it's in a closed container.\" CR>)>)\n\t       (<NOT <OR .EAT? .DRINK?>>\n\t\t<TELL \"I don't think that the \"\n\t\t      D\n\t\t      ,PRSO\n\t\t      \" would agree with you.\" CR>)>>"
  },
  "HIT-SPOT": {
   "name": "HIT-SPOT",
   "file": "gverbs.zil",
   "line": 537,
   "endLine": 543,
   "source": "<ROUTINE HIT-SPOT ()\n\t <COND (<AND <EQUAL? ,PRSO ,WATER>\n\t\t     <NOT <GLOBAL-IN? ,GLOBAL-WATER ,HERE>>>\n\t\t<REMOVE-CAREFULLY ,PRSO>)>\n\t <TELL\n\"Thank you very much. I was rather thirsty (from all this talking,\nprobably).\" CR>>"
  },
  "V-ECHO": {
   "name": "V-ECHO",
   "file": "gverbs.zil",
   "line": 545,
   "endLine": 567,
   "source": "<ROUTINE V-ECHO (\"AUX\" LST MAX (ECH 0) CNT) \n\t #DECL ((LST) <PRIMTYPE VECTOR> (MAX CNT ECH) FIX)\n\t %<COND (<==? ,ZORK-NUMBER 1>\n\t\t '<COND (<G? <GETB ,P-LEXV ,P-LEXWORDS> 0>\n\t                 <SET LST <REST \n\t\t\t\t   ,P-LEXV\n\t\t\t\t   <* <GETB ,P-LEXV ,P-LEXWORDS> ,P-WORDLEN>>>\n\t                 <SET MAX <- <+ <GETB .LST 0> <GETB .LST 1>> 1>>\n\t                 <REPEAT ()\n\t\t            <COND (<G? <SET ECH <+ .ECH 1>> 2>\n\t\t\t           <TELL \"...\" CR>\n\t\t\t\t   <RETURN>)\n\t\t\t          (T\n\t\t\t           <SET CNT <- <GETB .LST 1> 1>>\n\t\t\t           <REPEAT ()\n\t\t\t\t      <COND (<G? <SET CNT <+ .CNT 1>> .MAX>\n\t\t\t\t\t     <RETURN>)\n\t\t\t\t\t    (T\n\t\t\t\t\t     <PRINTC <GETB ,P-INBUF .CNT>>)>>\n\t\t\t           <TELL \" \">)>>)\n\t\t\t(T <TELL \"echo echo ...\" CR>)>)\n\t\t(T\n\t\t '<TELL \"echo echo ...\" CR>)>>"
  },
  "V-ENCHANT": {
   "name": "V-ENCHANT",
   "file": "gverbs.zil",
   "line": 569,
   "endLine": 627,
   "source": "<ROUTINE V-ENCHANT ()\n%<COND (<==? ,ZORK-NUMBER 2>\n\t'<COND (,WAND-ON <SETG SPELL-VICTIM ,WAND-ON>)>)\n       (T\n\t'<NULL-F>)>\n%<COND (<==? ,ZORK-NUMBER 2>\n\t'<COND (,SPELL-VICTIM\n\t\t<COND (<NOT ,SPELL-USED>\n\t\t       <TELL \"You must be more specific.\" CR>\n\t\t       <RTRUE>)>\n\t\t<COND (<OR <EQUAL? ,SPELL-USED ,W?FEEBLE ,W?FUMBLE ,W?FEAR>\n\t\t\t   <EQUAL? ,SPELL-USED ,W?FREEZE ,W?FALL ,W?FERMENT>\n\t\t\t   <EQUAL? ,SPELL-USED ,W?FIERCE ,W?FENCE ,W?FANTASIZE>>\n\t\t       <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t\t      <TELL\n\"The wand stops glowing, but there is no other obvious effect.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"That might have done something, but it's hard to tell with a \" D ,PRSO \".\" CR>)>)\n\t\t      ;(<EQUAL? ,SPELL-USED ,W?FIREPROOF>\n\t\t       <RTRUE>)\n\t\t      (<EQUAL? ,SPELL-USED ,W?FUDGE>\n\t\t       <TELL\n\"A strong odor of chocolate permeates the room.\" CR>)\n\t\t      (<EQUAL? ,SPELL-USED ,W?FLUORESCE>\n\t\t       <FSET ,PRSO ,LIGHTBIT>\n\t\t       <FSET ,PRSO ,ONBIT>\n\t\t       <SETG LIT T>\n\t\t       <TELL\n\"The \" D ,PRSO \" begins to glow.\" CR>)\n\t\t      (<EQUAL? ,SPELL-USED ,W?FILCH>\n\t\t       <SETG SPELL-HANDLED? T>\n\t\t       <COND (<FSET? ,PRSO ,TAKEBIT>\n\t\t\t      <MOVE ,PRSO ,WINNER>\n\t\t\t      <SCORE-OBJ ,PRSO>\n\t\t\t      <TELL \"Filched!\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL \"You can't filch the \" D ,PRSO \"!\" CR>)>)\n\t\t      (<AND <EQUAL? ,SPELL-USED ,W?FLOAT>\n\t\t\t    <FSET? ,PRSO ,TAKEBIT>>\n\t\t       <COND (<AND <EQUAL? ,SPELL-VICTIM ,COLLAR>\n\t\t\t\t   <IN? ,COLLAR ,CERBERUS>>\n\t\t\t      <SETG SPELL-VICTIM ,CERBERUS>)>\n\t\t       <TELL\n\"The \" D ,PRSO \" floats serenely in midair.\" CR>)\n\t\t      (<AND <EQUAL? ,SPELL-USED ,W?FRY>\n\t\t\t    <FSET? ,PRSO ,TAKEBIT>>\n\t\t       <SETG SPELL-HANDLED? T>\n\t\t       <REMOVE-CAREFULLY ,PRSO>\n\t\t       <TELL \"The \" D ,PRSO \" goes up in a puff of smoke.\" CR>)\n\t\t      (ELSE\n\t\t       <SETG SPELL-VICTIM <>>\n\t\t       <TELL\n\"The wand stops glowing, but there is no other apparent effect.\" CR>)>)\n\t       (ELSE\n\t\t<SETG SPELL-VICTIM <>>\n\t\t<TELL \"Nothing happens.\" CR>)>)\n       (T\n\t'<V-DISENCHANT>)>>"
  },
  "REMOVE-CAREFULLY": {
   "name": "REMOVE-CAREFULLY",
   "file": "gverbs.zil",
   "line": 629,
   "endLine": 637,
   "source": "<ROUTINE REMOVE-CAREFULLY (OBJ \"AUX\" OLIT)\n\t <COND (<EQUAL? .OBJ ,P-IT-OBJECT>\n\t\t<SETG P-IT-OBJECT <>>)>\n\t <SET OLIT ,LIT>\n\t <REMOVE .OBJ>\n\t <SETG LIT <LIT? ,HERE>>\n\t <COND (<AND .OLIT <NOT <EQUAL? .OLIT ,LIT>>>\n\t\t<TELL \"You are left in the dark...\" CR>)>\n\t T>"
  },
  "V-ENTER": {
   "name": "V-ENTER",
   "file": "verbs.zil",
   "line": 1369,
   "endLine": 1370,
   "source": "<ROUTINE V-ENTER ()\n\t <DO-WALK ,P?IN>>"
  },
  "V-EXAMINE": {
   "name": "V-EXAMINE",
   "file": "verbs.zil",
   "line": 49,
   "endLine": 57,
   "source": "<ROUTINE V-EXAMINE ()\n\t <COND (<GETP ,PRSO ,P?TEXT>\n\t\t<TELL <GETP ,PRSO ,P?TEXT> CR>)\n\t       (<OR <FSET? ,PRSO ,CONTBIT>\n\t\t    <FSET? ,PRSO ,DOORBIT>>\n\t\t<V-LOOK-INSIDE>)\n\t       (ELSE\n\t\t<TELL \"I see nothing special about the \"\n\t\t      D ,PRSO \".\" CR>)>>"
  },
  "V-EXIT": {
   "name": "V-EXIT",
   "file": "verbs.zil",
   "line": 1372,
   "endLine": 1373,
   "source": "<ROUTINE V-EXIT ()\n\t <DO-WALK ,P?OUT>>"
  },
  "V-EXORCISE": {
   "name": "V-EXORCISE",
   "file": "verbs.zil",
   "line": 1233,
   "endLine": 1233,
   "source": "<ROUTINE V-EXORCISE () <TELL \"What a bizarre concept!\" CR>>"
  },
  "PRE-FILL": {
   "name": "PRE-FILL",
   "file": "verbs.zil",
   "line": 883,
   "endLine": 895,
   "source": "<ROUTINE PRE-FILL\n\t (\"AUX\" T)\n\t #DECL ((T) <OR FALSE TABLE>)\n\t <COND (<AND <NOT ,PRSI> <SET T <GETPT ,HERE ,P?GLOBAL>>>\n\t\t<COND (<ZMEMQB ,GLOBAL-WATER .T <PTSIZE .T>>\n\t\t       <SETG PRSI ,GLOBAL-WATER>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <TELL \"There is nothing to fill it with.\" CR>\n\t\t       <RTRUE>)>)>\n\t <COND (<NOT <EQUAL? ,PRSI ,GLOBAL-WATER>>\n\t\t<PERFORM ,V?PUT ,PRSI ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-FILL": {
   "name": "V-FILL",
   "file": "verbs.zil",
   "line": 897,
   "endLine": 903,
   "source": "<ROUTINE V-FILL ()\n\t <COND (<NOT ,PRSI>\n\t\t<COND (<GLOBAL-IN? ,GLOBAL-WATER ,HERE>\n\t\t       <PERFORM ,V?FILL ,PRSO ,GLOBAL-WATER>)\n\t\t      (T\n\t\t       <TELL \"There's nothing to fill it with.\" CR>)>)\n\t       (T <TELL \"You may know how to do that, but I don't.\" CR>)>>"
  },
  "V-FIND": {
   "name": "V-FIND",
   "file": "verbs.zil",
   "line": 1381,
   "endLine": 1400,
   "source": "<ROUTINE V-FIND (\"AUX\" (L <LOC ,PRSO>))\n\t <COND (<EQUAL? ,PRSO ,HANDS>\n\t\t<TELL\n\"Within six feet of your head, assuming you haven't left that\nsomewhere.\" CR>)\n\t       (<==? ,PRSO ,ME>\n\t\t<TELL \"You're around here somewhere...\" CR>)\n\t       (<EQUAL? .L ,GLOBAL-OBJECTS>\n\t\t<TELL \"You find it.\" CR>)\n\t       (<IN? ,PRSO ,WINNER>\n\t\t<TELL \"You have it.\" CR>)\n\t       (<OR <IN? ,PRSO ,HERE>\n\t\t    <==? ,PRSO ,PSEUDO-OBJECT>>\n\t\t<TELL \"It's right here.\" CR>)\n\t       (<FSET? .L ,VILLAIN>\n\t\t<TELL \"The \" D .L \" has it.\" CR>)\n\t       (<FSET? .L ,CONTBIT>\n\t\t<TELL \"It's in the \" D .L \".\" CR>)\n\t       (ELSE\n\t\t<TELL \"Beats me.\" CR>)>>"
  },
  "V-FOLLOW": {
   "name": "V-FOLLOW",
   "file": "verbs.zil",
   "line": 948,
   "endLine": 949,
   "source": "<ROUTINE V-FOLLOW ()\n\t <TELL \"You're nuts!\" CR>>"
  },
  "V-FROBOZZ": {
   "name": "V-FROBOZZ",
   "file": "verbs.zil",
   "line": 1222,
   "endLine": 1225,
   "source": "<ROUTINE V-FROBOZZ\n\t ()\n\t <TELL\n\"The FROBOZZ Corporation created, owns, and operates this dungeon.\" CR>>"
  },
  "PRE-GIVE": {
   "name": "PRE-GIVE",
   "file": "verbs.zil",
   "line": 582,
   "endLine": 585,
   "source": "<ROUTINE PRE-GIVE ()\n\t <COND (<NOT <HELD? ,PRSO>>\n\t\t<TELL \n\"That's easy for you to say since you don't even have it.\" CR>)>>"
  },
  "V-GIVE": {
   "name": "V-GIVE",
   "file": "verbs.zil",
   "line": 598,
   "endLine": 601,
   "source": "<ROUTINE V-GIVE ()\n\t <COND (<NOT <FSET? ,PRSI ,VICBIT>>\n\t\t<TELL \"You can't give a \" D ,PRSO \" to a \" D ,PRSI \"!\" CR>)\n\t       (T <TELL \"The \" D ,PRSI \" refuses it politely.\" CR>)>>"
  },
  "V-HATCH": {
   "name": "V-HATCH",
   "file": "gverbs.zil",
   "line": 752,
   "endLine": 753,
   "source": "<ROUTINE V-HATCH ()\n\t <TELL \"Bizarre!\" CR>>"
  },
  "V-HELLO": {
   "name": "V-HELLO",
   "file": "verbs.zil",
   "line": 986,
   "endLine": 1000,
   "source": "<ROUTINE V-HELLO\n\t ()\n\t <COND (,PRSO\n\t\t<COND (<FSET? ,PRSO ,VILLAIN>\n\t\t       <TELL \"The \"\n\t\t\t     D\n\t\t\t     ,PRSO\n\t\t\t     \" bows his head to you in greeting.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"I think that only schizophrenics say \\\"Hello\\\" to a \"\n\t\t\t     D\n\t\t\t     ,PRSO\n\t\t\t     \".\" CR>)>)\n\t       (ELSE <TELL <PICK-ONE ,HELLOS> CR>)>>"
  },
  "V-INCANT": {
   "name": "V-INCANT",
   "file": "verbs.zil",
   "line": 1472,
   "endLine": 1477,
   "source": "<ROUTINE V-INCANT ()\n\t <TELL\n\"The incantation echoes back faintly, but nothing else happens.\" CR>\n\t <SETG QUOTE-FLAG <>>\n\t <SETG P-CONT <>>\n\t <RTRUE>>"
  },
  "V-INFLATE": {
   "name": "V-INFLATE",
   "file": "verbs.zil",
   "line": 1089,
   "endLine": 1089,
   "source": "<ROUTINE V-INFLATE () <TELL \"How can you inflate that?\" CR>>"
  },
  "V-KICK": {
   "name": "V-KICK",
   "file": "verbs.zil",
   "line": 1159,
   "endLine": 1159,
   "source": "<ROUTINE V-KICK () <HACK-HACK \"Kicking the \">>"
  },
  "V-KISS": {
   "name": "V-KISS",
   "file": "verbs.zil",
   "line": 1438,
   "endLine": 1439,
   "source": "<ROUTINE V-KISS ()\n\t <TELL \"I'd sooner kiss a pig.\" CR>>"
  },
  "V-KNOCK": {
   "name": "V-KNOCK",
   "file": "verbs.zil",
   "line": 1213,
   "endLine": 1217,
   "source": "<ROUTINE V-KNOCK\n\t ()\n\t <COND (<WORD-TYPE ,PRSO ,W?DOOR>\n\t\t<TELL \"I don't think that anybody's home.\" CR>)\n\t       (ELSE <TELL \"Why knock on a \" D ,PRSO \"?\" CR>)>>"
  },
  "V-LAMP-OFF": {
   "name": "V-LAMP-OFF",
   "file": "verbs.zil",
   "line": 746,
   "endLine": 759,
   "source": "<ROUTINE V-LAMP-OFF\n\t ()\n\t <COND (<FSET? ,PRSO ,LIGHTBIT>\n\t\t<COND (<NOT <FSET? ,PRSO ,ONBIT>>\n\t\t       <TELL \"It is already off.\" CR>)\n\t\t      (ELSE\n\t\t       <FCLEAR ,PRSO ,ONBIT>\n\t\t       <COND (,LIT\n\t\t\t      <SETG LIT <LIT? ,HERE>>)>\n\t\t       <TELL \"The \" D ,PRSO \" is now off.\" CR>\n\t\t       <COND (<NOT <SETG LIT <LIT? ,HERE>>>\n\t\t\t      <TELL \"It is now pitch black.\" CR>)>)>)\n\t       (ELSE <TELL \"You can't turn that off.\" CR>)>\n\t <RTRUE>>"
  },
  "V-LAMP-ON": {
   "name": "V-LAMP-ON",
   "file": "verbs.zil",
   "line": 731,
   "endLine": 744,
   "source": "<ROUTINE V-LAMP-ON\n\t ()\n\t <COND (<FSET? ,PRSO ,LIGHTBIT>\n\t\t<COND (<FSET? ,PRSO ,ONBIT> <TELL \"It is already on.\" CR>)\n\t\t      (ELSE\n\t\t       <FSET ,PRSO ,ONBIT>\n\t\t       <TELL \"The \" D ,PRSO \" is now on.\" CR>\n\t\t       <COND (<NOT ,LIT>\n\t\t\t      <SETG LIT <LIT? ,HERE>>\n\t\t\t      <CRLF>\n\t\t\t      <V-LOOK>)>)>)\n\t       (T\n\t\t<TELL \"You can't turn that on.\" CR>)>\n\t <RTRUE>>"
  },
  "V-LAUNCH": {
   "name": "V-LAUNCH",
   "file": "verbs.zil",
   "line": 389,
   "endLine": 392,
   "source": "<ROUTINE V-LAUNCH ()\n\t <COND (<FSET? ,PRSO ,VEHBIT>\n\t\t<TELL \"You can't launch that by saying \\\"launch\\\"!\" CR>)\n\t       (T <TELL \"How in blazes does one launch that?\" CR>)>>"
  },
  "V-LEAN-ON": {
   "name": "V-LEAN-ON",
   "file": "verbs.zil",
   "line": 1545,
   "endLine": 1546,
   "source": "<ROUTINE V-LEAN-ON ()\n\t <TELL \"Are you so tired?\" CR>>"
  },
  "V-LEAP": {
   "name": "V-LEAP",
   "file": "verbs.zil",
   "line": 957,
   "endLine": 978,
   "source": "<ROUTINE V-LEAP\n\t (\"AUX\" T S)\n\t #DECL ((T) <OR FALSE TABLE>)\n\t <COND (,PRSO\n\t\t<COND (<IN? ,PRSO ,HERE>\n\t\t       <COND (<FSET? ,PRSO ,VILLAIN>\n\t\t\t      <TELL \"The \"\n\t\t\t\t    D\n\t\t\t\t    ,PRSO\n\t\t\t\t    \" is too big to jump over.\" CR>)\n\t\t\t     (T <V-SKIP>)>)\n\t\t      (T <TELL \"That would be a good trick.\" CR>)>)\n\t       (<SET T <GETPT ,HERE ,P?DOWN>>\n\t\t<SET S <PTSIZE .T>>\n\t\t<COND (<OR <==? .S 2>\t\t\t\t\t ;NEXIT\n\t\t\t   <AND <==? .S 4>\t\t\t\t ;CEXIT\n\t\t\t\t<NOT <VALUE <GETB .T 1>>>>>\n\t\t       <TELL\n\"This was not a very safe place to try jumping.\" CR>\n\t\t       <JIGS-UP <PICK-ONE ,JUMPLOSS>>)\n\t\t      (T <V-SKIP>)>)\n\t       (ELSE <V-SKIP>)>>"
  },
  "V-LEAVE": {
   "name": "V-LEAVE",
   "file": "verbs.zil",
   "line": 982,
   "endLine": 982,
   "source": "<ROUTINE V-LEAVE () <DO-WALK ,P?OUT>>"
  },
  "V-LISTEN": {
   "name": "V-LISTEN",
   "file": "verbs.zil",
   "line": 945,
   "endLine": 946,
   "source": "<ROUTINE V-LISTEN ()\n\t <TELL \"The \" D ,PRSO \" makes no sound.\" CR>>"
  },
  "V-LOCK": {
   "name": "V-LOCK",
   "file": "verbs.zil",
   "line": 1093,
   "endLine": 1093,
   "source": "<ROUTINE V-LOCK () <TELL \"It doesn't seem to work.\" CR>>"
  },
  "V-LOOK": {
   "name": "V-LOOK",
   "file": "verbs.zil",
   "line": 41,
   "endLine": 43,
   "source": "<ROUTINE V-LOOK ()\n\t <COND (<DESCRIBE-ROOM T>\n\t\t<DESCRIBE-OBJECTS T>)>>"
  },
  "V-LOOK-BEHIND": {
   "name": "V-LOOK-BEHIND",
   "file": "verbs.zil",
   "line": 1031,
   "endLine": 1031,
   "source": "<ROUTINE V-LOOK-BEHIND () <TELL \"There is nothing behind the \" D ,PRSO \".\" CR>>"
  },
  "V-LOOK-INSIDE": {
   "name": "V-LOOK-INSIDE",
   "file": "verbs.zil",
   "line": 1033,
   "endLine": 1054,
   "source": "<ROUTINE V-LOOK-INSIDE\n\t ()\n\t <COND (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"The \"\n\t\t\t     D\n\t\t\t     ,PRSO\n\t\t\t     \" is open.\">)\n\t\t      (ELSE <TELL \"The \" D ,PRSO \" is closed.\">)>\n\t\t<CRLF>)\n\t       (<FSET? ,PRSO ,CONTBIT>\n\t\t<COND (<FSET? ,PRSO ,VICBIT>\n\t\t       <TELL \"There is nothing special to be seen.\" CR>)\n\t\t      (<SEE-INSIDE? ,PRSO>\n\t\t       <COND (<AND <FIRST? ,PRSO> <PRINT-CONT ,PRSO>>\n\t\t\t      <RTRUE>)\n\t\t\t     (<FSET? ,PRSO ,SURFACEBIT>\n\t\t\t      <TELL \"There is nothing on the \" D ,PRSO \".\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"The \" D ,PRSO \" is empty.\" CR>)>)\n\t\t      (ELSE <TELL \"The \" D ,PRSO \" is closed.\" CR>)>)\n\t       (ELSE <TELL \"I don't know how to look inside a \" D ,PRSO \".\" CR>)>>"
  },
  "V-LOOK-ON": {
   "name": "V-LOOK-ON",
   "file": "gverbs.zil",
   "line": 936,
   "endLine": 941,
   "source": "<ROUTINE V-LOOK-ON ()\n\t <COND (<FSET? ,PRSO ,SURFACEBIT>\n\t\t<PERFORM ,V?LOOK-INSIDE ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"Look on a \" D ,PRSO \"???\" CR>)>>"
  },
  "V-LOOK-UNDER": {
   "name": "V-LOOK-UNDER",
   "file": "verbs.zil",
   "line": 1029,
   "endLine": 1029,
   "source": "<ROUTINE V-LOOK-UNDER () <TELL \"There is nothing but dust there.\" CR>>"
  },
  "V-LOWER": {
   "name": "V-LOWER",
   "file": "verbs.zil",
   "line": 1165,
   "endLine": 1165,
   "source": "<ROUTINE V-LOWER () <HACK-HACK \"Playing in this way with the \">>"
  },
  "V-MAKE": {
   "name": "V-MAKE",
   "file": "verbs.zil",
   "line": 1366,
   "endLine": 1367,
   "source": "<ROUTINE V-MAKE ()\n    \t<TELL \"You can't do that.\" CR>>"
  },
  "V-MELT": {
   "name": "V-MELT",
   "file": "verbs.zil",
   "line": 1288,
   "endLine": 1288,
   "source": "<ROUTINE V-MELT () <TELL \"I'm not sure that a \" D ,PRSO \" can be melted.\" CR>>"
  },
  "PRE-MOVE": {
   "name": "PRE-MOVE",
   "file": "verbs.zil",
   "line": 722,
   "endLine": 724,
   "source": "<ROUTINE PRE-MOVE\n\t ()\n\t <COND (<HELD? ,PRSO> <TELL \"I don't juggle objects!\" CR>)>>"
  },
  "V-MOVE": {
   "name": "V-MOVE",
   "file": "verbs.zil",
   "line": 726,
   "endLine": 729,
   "source": "<ROUTINE V-MOVE ()\n\t <COND (<FSET? ,PRSO ,TAKEBIT>\n\t\t<TELL \"Moving the \" D ,PRSO \" reveals nothing.\" CR>)\n\t       (T <TELL \"You can't move the \" D ,PRSO \".\" CR>)>>"
  },
  "V-MUMBLE": {
   "name": "V-MUMBLE",
   "file": "verbs.zil",
   "line": 1290,
   "endLine": 1292,
   "source": "<ROUTINE V-MUMBLE\n\t ()\n\t <TELL \"You'll have to speak up if you expect me to hear you!\" CR>>"
  },
  "PRE-MUNG": {
   "name": "PRE-MUNG",
   "file": "verbs.zil",
   "line": 1173,
   "endLine": 1189,
   "source": "<ROUTINE PRE-MUNG ()\n\t <COND (<==? ,PRSO ,BEAM> <RFALSE>)\n\t       (<NOT <FSET? ,PRSO ,VICBIT>>\n\t\t<HACK-HACK \"Trying to destroy the \">)\n\t       (<NOT ,PRSI>\n\t\t<TELL \"Trying to destroy the \"\n\t\t      D\n\t\t      ,PRSO\n\t\t      \" with your bare hands is suicidal.\" CR>)\n\t       (<NOT <FSET? ,PRSI ,WEAPONBIT>>\n\t\t<TELL \"Trying to destroy the \"\n\t\t      D\n\t\t      ,PRSO\n\t\t      \" with a \"\n\t\t      D\n\t\t      ,PRSI\n\t\t      \" is quite self-destructive.\" CR>)>>"
  },
  "V-MUNG": {
   "name": "V-MUNG",
   "file": "verbs.zil",
   "line": 1191,
   "endLine": 1191,
   "source": "<ROUTINE V-MUNG () <TELL \"You can't.\" CR>>"
  },
  "V-ODYSSEUS": {
   "name": "V-ODYSSEUS",
   "file": "gverbs.zil",
   "line": 989,
   "endLine": 1005,
   "source": "<ROUTINE V-ODYSSEUS ()\n\t <COND %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<AND <EQUAL? ,HERE ,CYCLOPS-ROOM>\n\t\t\t      <IN? ,CYCLOPS ,HERE>\n\t\t\t      <NOT ,CYCLOPS-FLAG>>\n\t\t         <DISABLE <INT I-CYCLOPS>>\n\t\t         <SETG CYCLOPS-FLAG T>\n\t\t         <TELL \n\"The cyclops, hearing the name of his father's deadly nemesis, flees the room\nby knocking down the wall on the east of the room.\" CR>\n\t\t        <SETG MAGIC-FLAG T>\n\t\t        <FCLEAR ,CYCLOPS ,FIGHTBIT>\n\t\t        <REMOVE-CAREFULLY ,CYCLOPS>))\n\t\t      (T\n\t\t       '(<NULL-F> T))>\n\t       (T\n\t\t<TELL \"Wasn't he a sailor?\" CR>)>>"
  },
  "V-OIL": {
   "name": "V-OIL",
   "file": "verbs.zil",
   "line": 881,
   "endLine": 881,
   "source": "<ROUTINE V-OIL () <TELL \"That's not very useful.\" CR>>"
  },
  "V-OPEN": {
   "name": "V-OPEN",
   "file": "verbs.zil",
   "line": 625,
   "endLine": 649,
   "source": "<ROUTINE V-OPEN (\"AUX\" F STR)\n\t <COND (<NOT <FSET? ,PRSO ,CONTBIT>>\n\t\t<TELL \"You must tell me how to do that to a \" D ,PRSO \".\" CR>)\n\t       (<NOT <==? <GETP ,PRSO ,P?CAPACITY> 0>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT> <TELL \"It is already open.\" CR>)\n\t\t      (T\n\t\t       <FSET ,PRSO ,OPENBIT>\n\t\t       <COND (<OR <NOT <FIRST? ,PRSO>> <FSET? ,PRSO ,TRANSBIT>>\n\t\t\t      <TELL \"Opened.\" CR>)\n\t\t\t     (<AND <SET F <FIRST? ,PRSO>>\n\t\t\t\t   <NOT <NEXT? .F>>\n\t\t\t\t   <SET STR <GETP .F ,P?FDESC>>>\n\t\t\t      <TELL \"The \" D ,PRSO \" opens.\" CR>\n\t\t\t      <TELL .STR CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"Opening the \" D ,PRSO \" reveals \">\n\t\t\t      <PRINT-CONTENTS ,PRSO>\n\t\t\t      <TELL \".\" CR>)>)>)\n\t       (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"It is already open.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The \" D ,PRSO \" opens.\" CR>\n\t\t       <FSET ,PRSO ,OPENBIT>)>)\n\t       (T <TELL \"The \" D ,PRSO \" fails to open.\" CR>)>>"
  },
  "V-OVERBOARD": {
   "name": "V-OVERBOARD",
   "file": "gverbs.zil",
   "line": 1040,
   "endLine": 1053,
   "source": "<ROUTINE V-OVERBOARD (\"AUX\" LOCN)\n\t <COND %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<EQUAL? ,PRSI ,TEETH>\n\t\t\t <COND (<FSET? <SET LOCN <LOC ,WINNER>> ,VEHBIT>\n\t\t\t\t<MOVE ,PRSO <LOC .LOCN>>\n\t\t\t\t<TELL \"Ahoy -- \" D ,PRSO \" overboard!\" CR>)\n\t\t\t       (T\n\t\t\t\t<TELL \"You're not in anything!\" CR>)>))\n\t\t      (T '(<NULL-F> T))>\n\t       (<FSET? <LOC ,WINNER> ,VEHBIT>\n\t\t<PERFORM ,V?THROW ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"Huh?\" CR>)>>"
  },
  "V-PICK": {
   "name": "V-PICK",
   "file": "verbs.zil",
   "line": 1095,
   "endLine": 1095,
   "source": "<ROUTINE V-PICK () <TELL \"You can't pick that.\" CR>>"
  },
  "V-PLAY": {
   "name": "V-PLAY",
   "file": "verbs.zil",
   "line": 1358,
   "endLine": 1364,
   "source": "<ROUTINE V-PLAY ()\n         <COND (<FSET? ,PRSO ,VILLAIN>\n\t        <TELL\n\"You are so engrossed in the role of the \" D ,PRSO \" that\nyou kill yourself, just as he would have done!\" CR>\n\t        <JIGS-UP \"\">)\n\t       (T <TELL \"How peculiar!\" CR>)>>"
  },
  "V-PLUG": {
   "name": "V-PLUG",
   "file": "verbs.zil",
   "line": 1231,
   "endLine": 1231,
   "source": "<ROUTINE V-PLUG () <TELL \"This has no effect.\" CR>>"
  },
  "V-POUR-ON": {
   "name": "V-POUR-ON",
   "file": "verbs.zil",
   "line": 866,
   "endLine": 866,
   "source": "<ROUTINE V-POUR-ON () <TELL \"Foo!\" CR>>"
  },
  "V-PRAY": {
   "name": "V-PRAY",
   "file": "verbs.zil",
   "line": 954,
   "endLine": 955,
   "source": "<ROUTINE V-PRAY ()\n\t <TELL \"If you pray enough, your prayers may be answered.\" CR>>"
  },
  "V-PUMP": {
   "name": "V-PUMP",
   "file": "verbs.zil",
   "line": 1086,
   "endLine": 1087,
   "source": "<ROUTINE V-PUMP ()\n\t <TELL \"I really don't see how.\" CR>>"
  },
  "V-PUSH": {
   "name": "V-PUSH",
   "file": "verbs.zil",
   "line": 1169,
   "endLine": 1169,
   "source": "<ROUTINE V-PUSH () <HACK-HACK \"Pushing the \">>"
  },
  "V-PUSH-TO": {
   "name": "V-PUSH-TO",
   "file": "verbs.zil",
   "line": 1171,
   "endLine": 1171,
   "source": "<ROUTINE V-PUSH-TO () <TELL \"You can't push things to that.\" CR>>"
  },
  "PRE-PUT": {
   "name": "PRE-PUT",
   "file": "verbs.zil",
   "line": 546,
   "endLine": 550,
   "source": "<ROUTINE PRE-PUT ()\n\t <COND (<==? ,PRSO ,SHORT-POLE> <RFALSE>)\n\t       (<OR <IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t    <NOT <FSET? ,PRSO ,TAKEBIT>>>\n\t\t<TELL \"Nice try.\" CR>)>>"
  },
  "V-PUT": {
   "name": "V-PUT",
   "file": "verbs.zil",
   "line": 552,
   "endLine": 575,
   "source": "<ROUTINE V-PUT ()\n\t <COND (<OR <FSET? ,PRSI ,OPENBIT>\n\t\t    <OPENABLE? ,PRSI>\n\t\t    <FSET? ,PRSI ,VEHBIT>>)\n\t       (T\n\t\t<TELL \"I can't do that.\" CR>\n\t\t<RTRUE>)>\n\t <COND (<NOT <FSET? ,PRSI ,OPENBIT>>\n\t\t<TELL \"The \" D ,PRSI \" isn't open.\" CR>)\n\t       (<==? ,PRSI ,PRSO>\n\t\t<TELL \"How can you do that?\" CR>)\n\t       (<IN? ,PRSO ,PRSI>\n\t\t<TELL \"The \" D ,PRSO \" is already in the \" D ,PRSI \".\" CR>)\n\t       (<G? <- <+ <WEIGHT ,PRSI> <WEIGHT ,PRSO>>\n\t\t       <GETP ,PRSI ,P?SIZE>>\n\t\t    <GETP ,PRSI ,P?CAPACITY>>\n\t\t<TELL \"There's no room.\" CR>)\n\t       (<AND <NOT <HELD? ,PRSO>>\n\t\t     <NOT <ITAKE>>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<MOVE ,PRSO ,PRSI>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<TELL \"Done.\" CR>)>>"
  },
  "V-PUT-BEHIND": {
   "name": "V-PUT-BEHIND",
   "file": "verbs.zil",
   "line": 1517,
   "endLine": 1518,
   "source": "<ROUTINE V-PUT-BEHIND ()\n\t <TELL \"That hiding place is too obvious.\" CR>>"
  },
  "V-PUT-ON": {
   "name": "V-PUT-ON",
   "file": "verbs.zil",
   "line": 541,
   "endLine": 544,
   "source": "<ROUTINE V-PUT-ON ()\n\t <COND (<FSET? ,PRSI ,SURFACEBIT>\n\t\t<V-PUT>)\n\t       (T <TELL \"There's no good surface on the \" D ,PRSI \".\" CR>)>>"
  },
  "V-PUT-UNDER": {
   "name": "V-PUT-UNDER",
   "file": "verbs.zil",
   "line": 1355,
   "endLine": 1356,
   "source": "<ROUTINE V-PUT-UNDER ()\n         <TELL \"You can't do that.\" CR>>"
  },
  "V-RAISE": {
   "name": "V-RAISE",
   "file": "verbs.zil",
   "line": 1163,
   "endLine": 1163,
   "source": "<ROUTINE V-RAISE () <HACK-HACK \"Playing in this way with the \">>"
  },
  "V-RAPE": {
   "name": "V-RAPE",
   "file": "verbs.zil",
   "line": 1441,
   "endLine": 1442,
   "source": "<ROUTINE V-RAPE ()\n\t <TELL \"What a (ahem!) strange idea.\" CR>>"
  },
  "PRE-READ": {
   "name": "PRE-READ",
   "file": "verbs.zil",
   "line": 1019,
   "endLine": 1022,
   "source": "<ROUTINE PRE-READ ()\n\t <COND (<NOT ,LIT> <TELL \"It is impossible to read in the dark.\" CR>)\n\t       (<AND ,PRSI <NOT <FSET? ,PRSI ,TRANSBIT>>>\n\t\t<TELL \"How does one look through a \" D ,PRSI \"?\" CR>)>>"
  },
  "V-READ": {
   "name": "V-READ",
   "file": "verbs.zil",
   "line": 1024,
   "endLine": 1027,
   "source": "<ROUTINE V-READ ()\n\t <COND (<NOT <FSET? ,PRSO ,READBIT>>\n\t\t<TELL \"How can I read a \" D ,PRSO \"?\" CR>)\n\t       (ELSE <TELL <GETP ,PRSO ,P?TEXT> CR>)>>"
  },
  "V-READ-PAGE": {
   "name": "V-READ-PAGE",
   "file": "gverbs.zil",
   "line": 1193,
   "endLine": 1195,
   "source": "<ROUTINE V-READ-PAGE ()\n\t <PERFORM ,V?READ ,PRSO>\n\t <RTRUE>>"
  },
  "V-REPENT": {
   "name": "V-REPENT",
   "file": "verbs.zil",
   "line": 1060,
   "endLine": 1060,
   "source": "<ROUTINE V-REPENT () <TELL \"It could very well be too late!\" CR>>"
  },
  "V-REPLY": {
   "name": "V-REPLY",
   "file": "verbs.zil",
   "line": 1423,
   "endLine": 1427,
   "source": "<ROUTINE V-REPLY ()\n\t <TELL \"It is hardly likely that the \" D ,PRSO \" is interested.\" CR>\n\t <SETG P-CONT <>>\n\t <SETG QUOTE-FLAG <>>\n\t <RTRUE>>"
  },
  "V-RING": {
   "name": "V-RING",
   "file": "gverbs.zil",
   "line": 1206,
   "endLine": 1207,
   "source": "<ROUTINE V-RING ()\n\t <TELL \"How, exactly, can you ring that?\" CR>>"
  },
  "V-RUB": {
   "name": "V-RUB",
   "file": "verbs.zil",
   "line": 1167,
   "endLine": 1167,
   "source": "<ROUTINE V-RUB () <HACK-HACK \"Fiddling with the \">>"
  },
  "V-SAY": {
   "name": "V-SAY",
   "file": "verbs.zil",
   "line": 1451,
   "endLine": 1470,
   "source": "<ROUTINE V-SAY (\"AUX\" V)\n\t <COND (<AND <FSET? ,FRONT-DOOR ,TOUCHBIT>\n\t\t     <==? <GET ,P-LEXV ,P-CONT> ,W?FROTZ>\n\t\t     <==? <GET ,P-LEXV <+ ,P-CONT 2>> ,W?OZMOO>>\n\t\t<SETG P-CONT <>>\n\t\t<COND (<==? ,HERE ,MSTAIRS>\n\t\t       <CRLF>\n\t\t       <GOTO ,FRONT-DOOR>)\n\t\t      (T\n\t\t       <TELL \"Nothing happens.\" CR>)>)\n\t       (<SET V <FIND-IN ,HERE ,ACTORBIT>>\n\t\t<TELL \"You must address the \" D .V \" directly.\" CR>)\n\t       (<==? <GET ,P-LEXV ,P-CONT> ,W?HELLO>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<SETG P-CONT <>>\n\t\t<TELL\n\"Talking to yourself is a sign of impending mental collapse.\" CR>)>>"
  },
  "V-SEARCH": {
   "name": "V-SEARCH",
   "file": "verbs.zil",
   "line": 1378,
   "endLine": 1379,
   "source": "<ROUTINE V-SEARCH ()\n\t <TELL \"You find nothing unusual.\" CR>>"
  },
  "V-SEND": {
   "name": "V-SEND",
   "file": "verbs.zil",
   "line": 1340,
   "endLine": 1343,
   "source": "<ROUTINE V-SEND ()\n\t <COND (<FSET? ,PRSO ,VILLAIN>\n\t\t<TELL \"Why would you send for the \" D ,PRSO \"?\" CR>)\n\t       (ELSE <TELL \"That doesn't make sends.\" CR>)>>"
  },
  "PRE-SGIVE": {
   "name": "PRE-SGIVE",
   "file": "verbs.zil",
   "line": 587,
   "endLine": 589,
   "source": "<ROUTINE PRE-SGIVE ()\n\t <PERFORM ,V?GIVE ,PRSI ,PRSO>\n\t <RTRUE>>"
  },
  "V-SGIVE": {
   "name": "V-SGIVE",
   "file": "verbs.zil",
   "line": 603,
   "endLine": 604,
   "source": "<ROUTINE V-SGIVE ()\n\t <TELL \"Foo!\" CR>>"
  },
  "V-SHAKE": {
   "name": "V-SHAKE",
   "file": "verbs.zil",
   "line": 1237,
   "endLine": 1251,
   "source": "<ROUTINE V-SHAKE (\"AUX\" X)\n\t <COND (<FSET? ,PRSO ,VILLAIN>\n\t\t<TELL \"This seems to have no effect.\" CR>)\n\t       (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t\t<TELL \"You can't take it; thus, you can't shake it!\" CR>)\n\t       (<AND <NOT <FSET? ,PRSO ,OPENBIT>>\n\t\t     <FIRST? ,PRSO>>\n\t\t<TELL \"It sounds like there is something inside the \"\n\t\t      D\n\t\t      ,PRSO\n\t\t      \".\"\n\t\t      CR>)\n\t       (<AND <FSET? ,PRSO ,OPENBIT> <FIRST? ,PRSO>>\n\t\t<TELL \"Shaking the \" D ,PRSO \" isn't very useful.\" CR>)\n\t       (T <TELL \"Shaking the \" D ,PRSO \" proves uninteresting.\" CR>)>>"
  },
  "SHAKE-LOOP": {
   "name": "SHAKE-LOOP",
   "file": "gverbs.zil",
   "line": 1286,
   "endLine": 1311,
   "source": "<ROUTINE SHAKE-LOOP (\"AUX\" X)\n\t <REPEAT ()\n\t\t <COND (<SET X <FIRST? ,PRSO>>\n\t\t\t<FSET .X ,TOUCHBIT>\n\t\t\t<MOVE .X\n\t\t\t      %<COND (<==? ,ZORK-NUMBER 1>\n\t\t\t\t      '<COND (<EQUAL? ,HERE ,UP-A-TREE>\n\t\t\t\t              ,PATH)\n\t\t\t\t             (<NOT <FSET? ,HERE ,RLANDBIT>>\n\t\t\t\t              ,PSEUDO-OBJECT)\n\t\t\t\t             (T\n\t\t\t\t              ,HERE)>)\n\t\t\t\t     (<==? ,ZORK-NUMBER 2>\n\t\t\t\t      '<COND (<EQUAL? .X ,WATER>\n\t\t\t\t              ,PSEUDO-OBJECT)\n\t\t\t\t             (<NOT <FSET? ,HERE ,RLANDBIT>>\n\t\t\t\t              ,PSEUDO-OBJECT)\n\t\t\t\t             (T\n\t\t\t\t              ,HERE)>)\n\t\t\t\t     (T\n\t\t\t\t      '<COND (<EQUAL? ,HERE ,ON-LAKE>\n\t\t\t\t\t      ,IN-LAKE)\n\t\t\t\t\t     (T\n\t\t\t\t\t      ,HERE)>)>>)\n\t\t       (T\n\t\t\t<RETURN>)>>>"
  },
  "V-SKIP": {
   "name": "V-SKIP",
   "file": "verbs.zil",
   "line": 980,
   "endLine": 980,
   "source": "<ROUTINE V-SKIP () <TELL <PICK-ONE ,WHEEEEE> CR>>"
  },
  "V-SMELL": {
   "name": "V-SMELL",
   "file": "verbs.zil",
   "line": 1262,
   "endLine": 1262,
   "source": "<ROUTINE V-SMELL () <TELL \"It smells just like a \" D ,PRSO \".\" CR>>"
  },
  "V-SPIN": {
   "name": "V-SPIN",
   "file": "verbs.zil",
   "line": 1479,
   "endLine": 1480,
   "source": "<ROUTINE V-SPIN ()\n\t <TELL \"You can't spin that!\" CR>>"
  },
  "V-SPRAY": {
   "name": "V-SPRAY",
   "file": "verbs.zil",
   "line": 868,
   "endLine": 868,
   "source": "<ROUTINE V-SPRAY () <V-SQUEEZE>>"
  },
  "V-SQUEEZE": {
   "name": "V-SQUEEZE",
   "file": "verbs.zil",
   "line": 871,
   "endLine": 876,
   "source": "<ROUTINE V-SQUEEZE\n\t ()\n\t <COND (<FSET? ,PRSO ,VILLAIN>\n\t\t<TELL \"The \" D ,PRSO \" does not understand this.\">)\n\t       (ELSE <TELL \"How singularly useless.\">)>\n\t <CRLF>>"
  },
  "V-SSPRAY": {
   "name": "V-SSPRAY",
   "file": "verbs.zil",
   "line": 869,
   "endLine": 869,
   "source": "<ROUTINE V-SSPRAY () <PERFORM ,V?SPRAY ,PRSI ,PRSO>>"
  },
  "V-STAB": {
   "name": "V-STAB",
   "file": "gverbs.zil",
   "line": 1341,
   "endLine": 1347,
   "source": "<ROUTINE V-STAB (\"AUX\" W)\n\t <COND (<SET W <FIND-WEAPON ,WINNER>>\n\t\t<PERFORM ,V?ATTACK ,PRSO .W>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL\n\"No doubt you propose to stab the \" D ,PRSO \" with your pinky?\" CR>)>>"
  },
  "V-STAND": {
   "name": "V-STAND",
   "file": "verbs.zil",
   "line": 1510,
   "endLine": 1515,
   "source": "<ROUTINE V-STAND ()\n\t <COND (<FSET? <LOC ,WINNER> ,VEHBIT>\n\t\t<PERFORM ,V?DISEMBARK <LOC ,WINNER>>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<TELL \"You are already standing, I think.\" CR>)>>"
  },
  "V-STAY": {
   "name": "V-STAY",
   "file": "verbs.zil",
   "line": 951,
   "endLine": 952,
   "source": "<ROUTINE V-STAY ()\n\t <TELL \"You will be lost without me!\" CR>>"
  },
  "V-STRIKE": {
   "name": "V-STRIKE",
   "file": "gverbs.zil",
   "line": 1359,
   "endLine": 1366,
   "source": "<ROUTINE V-STRIKE ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL\n\"Since you aren't versed in hand-to-hand combat, you'd better attack the \"\nD ,PRSO \" with a weapon.\" CR>)\n\t       (T\n\t\t<PERFORM ,V?LAMP-ON ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-SWIM": {
   "name": "V-SWIM",
   "file": "verbs.zil",
   "line": 1269,
   "endLine": 1275,
   "source": "<ROUTINE V-SWIM ()\n\t <COND (<EQUAL? ,HERE ,ON-LAKE ,IN-LAKE>\n\t\t<TELL \"What do you think you're doing?\" CR>)\n\t       (<==? ,HERE ,FLATHEAD-OCEAN>\n\t\t<TELL\n\"Between the rocks and waves, you wouldn't last a minute!\" CR>)\n\t       (T <TELL \"Go jump in a lake!\" CR>)>>"
  },
  "V-SWING": {
   "name": "V-SWING",
   "file": "verbs.zil",
   "line": 1154,
   "endLine": 1157,
   "source": "<ROUTINE V-SWING ()\n\t <COND (<NOT ,PRSI>\n\t\t<TELL \"Whoosh!\" CR>)\n\t       (T <PERFORM ,V?ATTACK ,PRSI ,PRSO>)>>"
  },
  "PRE-TAKE": {
   "name": "PRE-TAKE",
   "file": "verbs.zil",
   "line": 480,
   "endLine": 495,
   "source": "<ROUTINE PRE-TAKE ()\n\t <COND (<IN? ,PRSO ,WINNER>\n\t\t<COND (<FSET? ,PRSO ,WEARBIT>\n\t\t       <TELL \"You are already wearing it.\" CR>)\n\t\t      (T <TELL \"You already have it.\" CR>)>)\n\t       (<AND <FSET? <LOC ,PRSO> ,CONTBIT>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<TELL \"You can't reach that.\" CR>\n\t\t<RTRUE>)\n\t       (,PRSI\n\t\t<COND (<NOT <==? ,PRSI <LOC ,PRSO>>>\n\t\t       <TELL \"The \" D ,PRSO \" isn't in the \" D ,PRSI \".\" CR>)\n\t\t      (T\n\t\t       <SETG PRSI <>>\n\t\t       <RFALSE>)>)\n\t       (<==? ,PRSO <LOC ,WINNER>> <TELL \"You are in it, loser!\" CR>)>>"
  },
  "V-TAKE": {
   "name": "V-TAKE",
   "file": "verbs.zil",
   "line": 497,
   "endLine": 501,
   "source": "<ROUTINE V-TAKE ()\n\t <COND (<==? <ITAKE> T>\n\t\t<COND (<FSET? ,PRSO ,WEARBIT>\n\t\t       <TELL \"You are now wearing the \" D ,PRSO \".\" CR>)\n\t\t      (T <TELL \"Taken.\" CR>)>)>>"
  },
  "V-TELL": {
   "name": "V-TELL",
   "file": "verbs.zil",
   "line": 1402,
   "endLine": 1415,
   "source": "<ROUTINE V-TELL ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<COND (,P-CONT\n\t\t       <SETG WINNER ,PRSO>\n\t\t       <SETG HERE <LOC ,WINNER>>)\n\t\t      (T\n\t\t       <TELL \"The \" D ,PRSO\n\" pauses for a moment, perhaps thinking that you should re-read\nthe manual.\" CR>)>)\n\t       (T\n\t\t<TELL \"You can't talk to the \" D ,PRSO \"!\" CR>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<SETG P-CONT <>>\n\t\t<RFATAL>)>>"
  },
  "V-THROUGH": {
   "name": "V-THROUGH",
   "file": "verbs.zil",
   "line": 1482,
   "endLine": 1495,
   "source": "<ROUTINE V-THROUGH (\"AUX\" M)\n\t<COND (<FSET? ,PRSO ,DOORBIT>\n\t       <DO-WALK <OTHER-SIDE ,PRSO>>\n\t       <RTRUE>)\n\t      (<FSET? ,PRSO ,VEHBIT>\n\t       <PERFORM ,V?BOARD ,PRSO>\n\t       <RTRUE>)\n\t      (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t       <TELL \"You hit your head against the \"\n\t\t\t    D ,PRSO\n\t\t\t    \" as you attempt this feat.\" CR>)\n\t      (<IN? ,PRSO ,WINNER>\n\t       <TELL \"That would involve quite a contortion!\" CR>)\n\t      (ELSE <TELL <PICK-ONE ,YUKS> CR>)>>"
  },
  "V-THROW": {
   "name": "V-THROW",
   "file": "verbs.zil",
   "line": 608,
   "endLine": 608,
   "source": "<ROUTINE V-THROW () <COND (<IDROP> <TELL \"Thrown.\" CR>)>>"
  },
  "V-THROW-OFF": {
   "name": "V-THROW-OFF",
   "file": "verbs.zil",
   "line": 1502,
   "endLine": 1503,
   "source": "<ROUTINE V-THROW-OFF ()\n\t <TELL \"You can't throw anything off of that!\" CR>>"
  },
  "V-TIE": {
   "name": "V-TIE",
   "file": "verbs.zil",
   "line": 1284,
   "endLine": 1284,
   "source": "<ROUTINE V-TIE () <TELL \"You can't tie the \" D ,PRSO \" to that.\" CR>>"
  },
  "V-TIE-UP": {
   "name": "V-TIE-UP",
   "file": "verbs.zil",
   "line": 1286,
   "endLine": 1286,
   "source": "<ROUTINE V-TIE-UP () <TELL \"You could certainly never tie it with that!\" CR>>"
  },
  "V-TREASURE": {
   "name": "V-TREASURE",
   "file": "gverbs.zil",
   "line": 1518,
   "endLine": 1530,
   "source": "<ROUTINE V-TREASURE ()\n\t <COND %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<EQUAL? ,HERE ,NORTH-TEMPLE>\n\t\t         <GOTO ,TREASURE-ROOM>))\n\t\t      (T\n\t\t       '(<NULL-F> <RTRUE>))>\n\t       %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<EQUAL? ,HERE ,TREASURE-ROOM>\n\t\t         <GOTO ,NORTH-TEMPLE>))\n\t\t      (T\n\t\t       '(<NULL-F> <RTRUE>))>\n\t       (T\n\t\t<TELL \"Nothing happens.\" CR>)>>"
  },
  "PRE-TURN": {
   "name": "PRE-TURN",
   "file": "verbs.zil",
   "line": 1080,
   "endLine": 1082,
   "source": "<ROUTINE PRE-TURN ()\n\t <COND (<NOT <FSET? ,PRSO ,TURNBIT>>\n\t\t<TELL \"You can't turn that!\" CR>)>>"
  },
  "V-TURN": {
   "name": "V-TURN",
   "file": "verbs.zil",
   "line": 1084,
   "endLine": 1084,
   "source": "<ROUTINE V-TURN () <TELL \"This has no effect.\" CR>>"
  },
  "V-UNLOCK": {
   "name": "V-UNLOCK",
   "file": "verbs.zil",
   "line": 1097,
   "endLine": 1097,
   "source": "<ROUTINE V-UNLOCK () <V-LOCK>>"
  },
  "V-UNTIE": {
   "name": "V-UNTIE",
   "file": "verbs.zil",
   "line": 1277,
   "endLine": 1277,
   "source": "<ROUTINE V-UNTIE () <TELL \"This cannot be tied, so it cannot be untied!\" CR>>"
  },
  "V-WAIT": {
   "name": "V-WAIT",
   "file": "verbs.zil",
   "line": 765,
   "endLine": 772,
   "source": "<ROUTINE V-WAIT (\"OPTIONAL\" (NUM 3))\n\t #DECL ((NUM) FIX)\n\t <TELL \"Time passes...\" CR>\n\t <REPEAT ()\n\t\t <COND (<L? <SET NUM <- .NUM 1>> 0> <RETURN>)\n\t\t       (<CLOCKER> <RETURN>)>\n\t\t <SETG MOVES <+ ,MOVES 1>>>\n\t <SETG CLOCK-WAIT T>>"
  },
  "V-WALK": {
   "name": "V-WALK",
   "file": "verbs.zil",
   "line": 409,
   "endLine": 460,
   "source": "<ROUTINE V-WALK (\"AUX\" PT PTS STR OBJ RM)\n\t #DECL ((PT) <OR FALSE TABLE> (PTS) FIX (STR) <OR STRING FALSE>\n\t\t(OBJ) OBJECT (RM) <OR FALSE OBJECT>)\n\t <COND (<NOT ,P-WALK-DIR>\n\t\t<PERFORM ,V?WALK-TO ,PRSO>\n\t\t<RTRUE>)\n\t       (<SET PT <GETPT ,HERE ,PRSO>>\n\t\t<COND (<==? <SET PTS <PTSIZE .PT>> ,UEXIT>\n\t\t       <GOTO <GETB .PT ,REXIT>>)\n\t\t      (<==? .PTS ,NEXIT>\n\t\t       <TELL <GET .PT ,NEXITSTR> CR>\n\t\t       <RFATAL>)\n\t\t      (<==? .PTS ,FEXIT>\n\t\t       <COND (<SET RM <APPLY <GET .PT ,FEXITFCN>>>\n\t\t\t      <GOTO .RM>)\n\t\t\t     (<AND <==? ,HERE ,CP> ,CP-MOVED> <RTRUE>)\n\t\t\t     (T\n\t\t\t      <RFATAL>)>)\n\t\t      (<==? .PTS ,CEXIT>\n\t\t       <COND (<VALUE <GETB .PT ,CEXITFLAG>>\n\t\t\t      <GOTO <GETB .PT ,REXIT>>)\n\t\t\t     (<SET STR <GET .PT ,CEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <TELL \"You can't go that way.\" CR>\n\t\t\t      <RFATAL>)>)\n\t\t      (<==? .PTS ,DEXIT>\n\t\t       <COND (<FSET? <SET OBJ <GETB .PT ,DEXITOBJ>> ,OPENBIT>\n\t\t\t      <GOTO <GETB .PT ,REXIT>>)\n\t\t\t     (<SET STR <GET .PT ,DEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <TELL \"The \" D .OBJ \" is closed.\" CR>\n\t\t\t      <THIS-IS-IT .OBJ>\n\t\t\t      <RFATAL>)>)>)\n\t       (<AND <NOT ,LIT> <PROB 90>>\n\t\t<COND (,SPRAYED?\n\t\t       <TELL\n\"There are odd noises in the darkness, and there is no exit in that\ndirection.\" CR>\n\t\t       <RFATAL>)\n\t\t      (<EQUAL? ,HERE ,DARK-1 ,DARK-2>\n\t\t       <JIGS-UP\n\"Oh, no! You have walked into a den of hungry grues and it's dinner time!\">)\n\t\t      (T\n\t\t       <JIGS-UP\n\"Oh, no! You have walked into the slavering fangs of a lurking grue!\">)>)\n\t       (T\n\t\t<TELL \"You can't go that way.\" CR>\n\t\t<RFATAL>)>>"
  },
  "V-WALK-AROUND": {
   "name": "V-WALK-AROUND",
   "file": "verbs.zil",
   "line": 386,
   "endLine": 387,
   "source": "<ROUTINE V-WALK-AROUND ()\n\t <TELL \"Use directions for movement here.\" CR>>"
  },
  "V-WALK-TO": {
   "name": "V-WALK-TO",
   "file": "verbs.zil",
   "line": 1524,
   "endLine": 1528,
   "source": "<ROUTINE V-WALK-TO ()\n\t <COND (<OR <IN? ,PRSO ,HERE>\n\t\t    <GLOBAL-IN? ,PRSO ,HERE>>\n\t\t<TELL \"It's here!\" CR>)\n\t       (T <TELL \"You should supply a direction!\" CR>)>>"
  },
  "V-WAVE": {
   "name": "V-WAVE",
   "file": "verbs.zil",
   "line": 1161,
   "endLine": 1161,
   "source": "<ROUTINE V-WAVE () <HACK-HACK \"Waving the \">>"
  },
  "V-WEAR": {
   "name": "V-WEAR",
   "file": "verbs.zil",
   "line": 1497,
   "endLine": 1500,
   "source": "<ROUTINE V-WEAR ()\n\t <COND (<NOT <FSET? ,PRSO ,WEARBIT>>\n\t\t<TELL \"You can't wear the \" D ,PRSO \".\" CR>)\n\t       (T <PERFORM ,V?TAKE ,PRSO> <RTRUE>)>>"
  },
  "V-WIN": {
   "name": "V-WIN",
   "file": "verbs.zil",
   "line": 1227,
   "endLine": 1227,
   "source": "<ROUTINE V-WIN () <TELL \"Naturally!\" CR>>"
  },
  "V-WIND": {
   "name": "V-WIND",
   "file": "verbs.zil",
   "line": 1345,
   "endLine": 1346,
   "source": "<ROUTINE V-WIND ()\n\t <TELL \"You cannot wind up a \" D ,PRSO \".\" CR>>"
  },
  "V-WISH": {
   "name": "V-WISH",
   "file": "gverbs.zil",
   "line": 1654,
   "endLine": 1658,
   "source": "<ROUTINE V-WISH ()\n\t %<COND (<==? ,ZORK-NUMBER 2>\n\t\t '<PERFORM ,V?MAKE ,WISH>)\n\t\t(T\n\t\t '<TELL \"With luck, your wish will come true.\" CR>)>>"
  },
  "V-YELL": {
   "name": "V-YELL",
   "file": "verbs.zil",
   "line": 1229,
   "endLine": 1229,
   "source": "<ROUTINE V-YELL () <TELL \"Aarrrrrgggggghhhhhhhhh!\" CR>>"
  },
  "V-ZORK": {
   "name": "V-ZORK",
   "file": "verbs.zil",
   "line": 1300,
   "endLine": 1300,
   "source": "<ROUTINE V-ZORK () <TELL \"At your service!\" CR>>"
  },
  "V-FIRST-LOOK": {
   "name": "V-FIRST-LOOK",
   "file": "verbs.zil",
   "line": 45,
   "endLine": 47,
   "source": "<ROUTINE V-FIRST-LOOK ()\n\t <COND (<DESCRIBE-ROOM>\n\t\t<COND (<NOT ,SUPER-BRIEF> <DESCRIBE-OBJECTS>)>)>>"
  },
  "DESCRIBE-ROOM": {
   "name": "DESCRIBE-ROOM",
   "file": "verbs.zil",
   "line": 61,
   "endLine": 89,
   "source": "<ROUTINE DESCRIBE-ROOM (\"OPTIONAL\" (LOOK? <>) \"AUX\" V? STR AV)\n\t <SET V? <OR .LOOK? ,VERBOSE>>\n\t <COND (<NOT ,LIT>\n\t\t<TELL\n\"It is pitch black.\">\n\t\t<COND (<NOT ,SPRAYED?>\n\t\t       <TELL \" You are likely to be eaten by a grue.\">)>\n\t\t<CRLF>\n\t\t<COND (<==? ,HERE ,DARK-2>\n\t\t       <TELL\n\"The ground continues to slope upwards away from the lake. You can barely\ndetect a dim light from the east.\" CR>)>\n\t\t<RETURN <>>)>\n\t <COND (<NOT <FSET? ,HERE ,TOUCHBIT>>\n\t\t<FSET ,HERE ,TOUCHBIT>\n\t\t<SET V? T>)>\n\t <COND (<IN? ,HERE ,ROOMS> <TELL D ,HERE CR>)>\n\t <COND (<OR .LOOK? <NOT ,SUPER-BRIEF>>\n\t\t<SET AV <LOC ,WINNER>>\n\t\t<COND (<FSET? .AV ,VEHBIT>\n\t\t       <TELL \"(You are in the \" D .AV \".)\" CR>)>\n\t\t<COND (<AND .V? <APPLY <GETP ,HERE ,P?ACTION> ,M-LOOK>>\n\t\t       <RTRUE>)\n\t\t      (<AND .V? <SET STR <GETP ,HERE ,P?LDESC>>>\n\t\t       <TELL .STR CR>)\n\t\t      (T <APPLY <GETP ,HERE ,P?ACTION> ,M-FLASH>)>\n\t\t<COND (<AND <NOT <==? ,HERE .AV>> <FSET .AV ,VEHBIT>>\n\t\t       <APPLY <GETP .AV ,P?ACTION> ,M-LOOK>)>)>\n\t T>"
  },
  "DESCRIBE-OBJECTS": {
   "name": "DESCRIBE-OBJECTS",
   "file": "verbs.zil",
   "line": 91,
   "endLine": 96,
   "source": "<ROUTINE DESCRIBE-OBJECTS (\"OPTIONAL\" (V? <>))\n\t <COND (,LIT\n\t\t<COND (<FIRST? ,HERE>\n\t\t       <PRINT-CONT ,HERE <SET V? <OR .V? ,VERBOSE>> -1>)>)\n\t       (ELSE\n\t\t<TELL \"I can't see anything in the dark.\" CR>)>>"
  },
  "DESCRIBE-OBJECT": {
   "name": "DESCRIBE-OBJECT",
   "file": "verbs.zil",
   "line": 103,
   "endLine": 125,
   "source": "<ROUTINE DESCRIBE-OBJECT (OBJ V? LEVEL \"AUX\" (STR <>) AV)\n\t <SETG DESC-OBJECT .OBJ>\n\t <COND (<AND <0? .LEVEL>\n\t\t     <APPLY <GETP .OBJ ,P?DESCFCN> ,M-OBJDESC>>\n\t\t<RTRUE>)\n\t       (<AND <0? .LEVEL>\n\t\t     <OR <AND <NOT <FSET? .OBJ ,TOUCHBIT>>\n\t\t\t      <SET STR <GETP .OBJ ,P?FDESC>>>\n\t\t\t <SET STR <GETP .OBJ ,P?LDESC>>>>\n\t\t<TELL .STR>)\n\t       (<0? .LEVEL>\n\t\t<TELL \"There is a \" D .OBJ \" here.\">)\n\t       (ELSE\n\t\t<TELL <GET ,INDENTS .LEVEL>>\n\t\t<TELL \"A \" D .OBJ>\n\t\t<COND (<FSET? .OBJ ,WEARBIT> <TELL \" (being worn)\">)>)>\n\t <COND (<AND <0? .LEVEL>\n\t\t     <SET AV <LOC ,WINNER>>\n\t\t     <FSET? .AV ,VEHBIT>>\n\t\t<TELL \" (outside the \" D .AV \")\">)>\n\t <CRLF>\n\t <COND (<AND <SEE-INSIDE? .OBJ> <FIRST? .OBJ>>\n\t\t<PRINT-CONT .OBJ .V? .LEVEL>)>>"
  },
  "PRINT-CONTENTS": {
   "name": "PRINT-CONTENTS",
   "file": "verbs.zil",
   "line": 651,
   "endLine": 662,
   "source": "<ROUTINE PRINT-CONTENTS (OBJ \"AUX\" F N (1ST? T))\n\t #DECL ((OBJ) OBJECT (F N) <OR FALSE OBJECT>)\n\t <COND (<SET F <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<SET N <NEXT? .F>>\n\t\t\t<COND (.1ST? <SET 1ST? <>>)\n\t\t\t      (ELSE\n\t\t\t       <TELL \", \">\n\t\t\t       <COND (<NOT .N> <TELL \"and \">)>)>\n\t\t\t<TELL \"a \" D .F>\n\t\t\t<SET F .N>\n\t\t\t<COND (<NOT .F> <RETURN>)>>)>>"
  },
  "PRINT-CONT": {
   "name": "PRINT-CONT",
   "file": "verbs.zil",
   "line": 127,
   "endLine": 173,
   "source": "<ROUTINE PRINT-CONT (OBJ \"OPTIONAL\" (V? <>) (LEVEL 0)\n\t\t     \"AUX\" Y 1ST? AV STR (PV? <>) (INV? <>))\n\t #DECL ((OBJ) OBJECT (LEVEL) FIX)\n\t <COND (<NOT <SET Y <FIRST? .OBJ>>> <RTRUE>)>\n\t <COND (<AND <SET AV <LOC ,WINNER>> <FSET? .AV ,VEHBIT>>\n\t\tT)\n\t       (ELSE <SET AV <>>)>\n\t <SET 1ST? T>\n\t <COND (<EQUAL? ,WINNER .OBJ <LOC .OBJ>>\n\t\t<SET INV? T>)\n\t       (ELSE\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT .Y> <RETURN <NOT .1ST?>>)\n\t\t\t      (<==? .Y .AV> <SET PV? T>)\n\t\t\t      (<==? .Y ,WINNER>)\n\t\t\t      (<AND <NOT <FSET? .Y ,INVISIBLE>>\n\t\t\t\t    <NOT <FSET? .Y ,TOUCHBIT>>\n\t\t\t\t    <SET STR <GETP .Y ,P?FDESC>>>\n\t\t\t       <COND (<NOT <FSET? .Y ,NDESCBIT>>\n\t\t\t\t      <TELL .STR CR>)>\n\t\t\t       <COND (<AND <SEE-INSIDE? .Y>\n\t\t\t\t\t   <NOT <GETP <LOC .Y> ,P?DESCFCN>>\n\t\t\t\t\t   <FIRST? .Y>>\n\t\t\t\t      <PRINT-CONT .Y .V? 0>)>)>\n\t\t\t<SET Y <NEXT? .Y>>>)>\n\t <SET Y <FIRST? .OBJ>>\n\t <REPEAT ()\n\t\t <COND (<NOT .Y>\n\t\t\t<COND (<AND .PV? .AV <FIRST? .AV>>\n\t\t\t       <PRINT-CONT .AV .V? .LEVEL>)>\n\t\t\t<RETURN <NOT .1ST?>>)\n\t\t       (<EQUAL? .Y .AV ,ADVENTURER>)\n\t\t       (<AND <NOT <FSET? .Y ,INVISIBLE>>\n\t\t\t     <OR .INV?\n\t\t\t\t <FSET? .Y ,TOUCHBIT>\n\t\t\t\t <NOT <GETP .Y ,P?FDESC>>>>\n\t\t\t<COND (<NOT <FSET? .Y ,NDESCBIT>>\n\t\t\t       <COND (.1ST?\n\t\t\t\t      <COND (<FIRSTER .OBJ .LEVEL>\n\t\t\t\t\t     <COND (<L? .LEVEL 0>\n\t\t\t\t\t\t    <SET LEVEL 0>)>)>\n\t\t\t\t      <SET LEVEL <+ 1 .LEVEL>>\n\t\t\t\t      <SET 1ST? <>>)>\n\t\t\t       <DESCRIBE-OBJECT .Y .V? .LEVEL>)\n\t\t\t      (<AND <FIRST? .Y> <SEE-INSIDE? .Y>>\n\t\t\t       <PRINT-CONT .Y .V? .LEVEL>)>)>\n\t\t <SET Y <NEXT? .Y>>>>"
  },
  "FIRSTER": {
   "name": "FIRSTER",
   "file": "verbs.zil",
   "line": 175,
   "endLine": 186,
   "source": "<ROUTINE FIRSTER (OBJ LEVEL)\n\t <COND (<==? .OBJ ,WINNER>\n\t\t<TELL \"You are carrying:\" CR>)\n\t       (<NOT <IN? .OBJ ,ROOMS>>\n\t\t<COND (<G? .LEVEL 0>\n\t\t       <TELL <GET ,INDENTS .LEVEL>>)>\n\t\t<COND (<FSET? .OBJ ,SURFACEBIT>\n\t\t       <TELL \"Sitting on the \" D .OBJ\n\t\t\t     \" is:\" CR>)\n\t\t      (ELSE\n\t\t       <TELL \"The \" D .OBJ\n\t\t\t     \" contains:\" CR>)>)>>"
  },
  "SEE-INSIDE?": {
   "name": "SEE-INSIDE?",
   "file": "verbs.zil",
   "line": 1056,
   "endLine": 1058,
   "source": "<ROUTINE SEE-INSIDE? (OBJ)\n\t <AND <NOT <FSET? .OBJ ,INVISIBLE>>\n\t      <OR <FSET? .OBJ ,TRANSBIT> <FSET? .OBJ ,OPENBIT>>>>"
  },
  "SCORE-UPD": {
   "name": "SCORE-UPD",
   "file": "gverbs.zil",
   "line": 1895,
   "endLine": 1909,
   "source": "<ROUTINE SCORE-UPD (NUM)\n\t <SETG BASE-SCORE <+ ,BASE-SCORE .NUM>>\n\t <SETG SCORE <+ ,SCORE .NUM>>\n\t %<COND (<==? ,ZORK-NUMBER 1>\n\t\t '<COND (<AND <EQUAL? ,SCORE 350>\n\t\t              <NOT ,WON-FLAG>>\n\t\t         <SETG WON-FLAG T>\n\t\t         <FCLEAR ,MAP ,INVISIBLE>\n\t\t         <FCLEAR ,WEST-OF-HOUSE ,TOUCHBIT>\n\t\t         <TELL\n\"An almost inaudible voice whispers in your ear, \\\"Look to your treasures\nfor the final secret.\\\"\" CR>)>)\n\t\t(T\n\t\t '<NULL-F>)>\n\t T>"
  },
  "SCORE-OBJ": {
   "name": "SCORE-OBJ",
   "file": "gverbs.zil",
   "line": 1911,
   "endLine": 1914,
   "source": "<ROUTINE SCORE-OBJ (OBJ \"AUX\" TEMP)\n\t <COND (<G? <SET TEMP <GETP .OBJ ,P?VALUE>> 0>\n\t\t<SCORE-UPD .TEMP>\n\t\t<PUTP .OBJ ,P?VALUE 0>)>>"
  },
  "YES?": {
   "name": "YES?",
   "file": "verbs.zil",
   "line": 224,
   "endLine": 230,
   "source": "<ROUTINE YES? ()\n\t <PRINTI \">\">\n\t <READ ,P-INBUF ,P-LEXV>\n\t <COND (<EQUAL? <GET ,P-LEXV 1> ,W?YES ,W?Y>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "ITAKE": {
   "name": "ITAKE",
   "file": "verbs.zil",
   "line": 506,
   "endLine": 539,
   "source": "<ROUTINE ITAKE (\"OPTIONAL\" (VB T) \"AUX\" CNT OBJ)\n\t #DECL ((VB) <OR ATOM FALSE> (CNT) FIX (OBJ) OBJECT)\n\t <COND (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t\t<COND (.VB\n\t\t       <TELL <PICK-ONE ,YUKS> CR>)>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? <LOC ,PRSO> ,WINNER>>\n\t\t     <G? <+ <WEIGHT ,PRSO> <WEIGHT ,WINNER>> ,LOAD-ALLOWED>>\n\t\t<COND (.VB\n\t\t       <TELL \"Your load is too heavy\">\n\t\t       <COND (<L? ,LOAD-ALLOWED ,LOAD-MAX>\n\t\t\t      <TELL\n\", especially in light of your condition.\">)\n\t\t\t     (ELSE <TELL \".\">)>\n\t\t       <CRLF>)>\n\t\t<RFATAL>)\n\t       (<AND <G? <SET CNT <CCOUNT ,WINNER>> ,FUMBLE-NUMBER>\n\t\t     <PROB <* .CNT ,FUMBLE-PROB>>>\n\t\t<SET OBJ <FIRST? ,WINNER>>\n\t\t<REPEAT ()\n\t\t\t<SET OBJ <NEXT? .OBJ>>\n\t\t\t<COND (<NOT <FSET? .OBJ ,WEARBIT>>\n\t\t\t       <RETURN>)>>\n\t\t;\"This must go!  Chomping compiler strikes again\"\n\t\t<TELL \"Oh, no. The \" D .OBJ\n\t\t      \" slips from your arms while taking the \"\n\t\t      D ,PRSO \"\nand both tumble to the ground.\" CR>\n\t\t<PERFORM ,V?DROP .OBJ>\n\t\t<RFATAL>)\n\t       (T\n\t\t<MOVE ,PRSO ,WINNER>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<RTRUE>)>>"
  },
  "IDROP": {
   "name": "IDROP",
   "file": "verbs.zil",
   "line": 610,
   "endLine": 621,
   "source": "<ROUTINE IDROP\n\t ()\n\t <COND (<AND <NOT <IN? ,PRSO ,WINNER>> <NOT <IN? <LOC ,PRSO> ,WINNER>>>\n\t\t<TELL \"You're not carrying the \" D ,PRSO \".\" CR>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? ,PRSO ,WINNER>>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<TELL \"The \" D ,PRSO \" is closed.\" CR>\n\t\t<RFALSE>)\n\t       (T\n\t\t<MOVE ,PRSO <LOC ,WINNER>>\n\t\t<RTRUE>)>>"
  },
  "CCOUNT": {
   "name": "CCOUNT",
   "file": "verbs.zil",
   "line": 681,
   "endLine": 688,
   "source": "<ROUTINE CCOUNT (OBJ \"AUX\" (CNT 0) X)\n\t <COND (<SET X <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT <FSET? .X ,WEARBIT>>\n\t\t\t       <SET CNT <+ .CNT 1>>)>\n\t\t\t<COND (<NOT <SET X <NEXT? .X>>>\n\t\t\t       <RETURN>)>>)>\n\t .CNT>"
  },
  "WEIGHT": {
   "name": "WEIGHT",
   "file": "verbs.zil",
   "line": 692,
   "endLine": 701,
   "source": "<ROUTINE WEIGHT\n\t (OBJ \"AUX\" CONT (WT 0))\n\t #DECL ((OBJ) OBJECT (CONT) <OR FALSE OBJECT> (WT) FIX)\n\t <COND (<SET CONT <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<COND (<AND <==? .OBJ ,PLAYER> <FSET? .CONT ,WEARBIT>>\n\t\t\t       <SET WT <+ .WT 1>>)\n\t\t\t      (T <SET WT <+ .WT <WEIGHT .CONT>>>)>\n\t\t\t<COND (<NOT <SET CONT <NEXT? .CONT>>> <RETURN>)>>)>\n\t <+ .WT <GETP .OBJ ,P?SIZE>>>"
  },
  "HACK-HACK": {
   "name": "HACK-HACK",
   "file": "verbs.zil",
   "line": 1193,
   "endLine": 1198,
   "source": "<ROUTINE HACK-HACK\n\t (STR)\n\t #DECL ((STR) STRING)\n\t <COND (<AND <IN? ,PRSO ,GLOBAL-OBJECTS> <VERB? WAVE RAISE LOWER>>\n\t\t<TELL \"The \" D ,PRSO \" isn't here!\" CR>)\n\t       (T <TELL .STR D ,PRSO <PICK-ONE ,HO-HUM> CR>)>>"
  },
  "NO-GO-TELL": {
   "name": "NO-GO-TELL",
   "file": "gverbs.zil",
   "line": 2082,
   "endLine": 2087,
   "source": "<ROUTINE NO-GO-TELL (AV WLOC)\n\t <COND (.AV\n\t\t<TELL \"You can't go there in a \" D .WLOC \".\">)\n\t       (T\n\t\t<TELL \"You can't go there without a vehicle.\">)>\n\t <CRLF>>"
  },
  "GOTO": {
   "name": "GOTO",
   "file": "verbs.zil",
   "line": 813,
   "endLine": 856,
   "source": "<ROUTINE GOTO (RM \"OPTIONAL\" (V? T)\n\t       \"AUX\" (LB <FSET? .RM ,RLANDBIT>) (WLOC <LOC ,WINNER>)\n\t             (AV <>) OLIT)\n\t #DECL ((RM WLOC) OBJECT (LB) <OR ATOM FALSE> (AV) <OR FALSE FIX>)\n\t <SET OLIT ,LIT>\n\t <COND (<FSET? .WLOC ,VEHBIT>\n\t\t<SET AV <GETP .WLOC ,P?VTYPE>>)>\n\t <COND (<OR <AND <NOT .LB> <OR <NOT .AV> <NOT <FSET? .RM .AV>>>>\n\t\t    <AND <FSET? ,HERE ,RLANDBIT>\n\t\t\t .LB\n\t\t\t .AV\n\t\t\t <NOT <==? .AV ,RLANDBIT>>\n\t\t\t <NOT <FSET? .RM .AV>>>>\n\t\t<COND (.AV <TELL \"You can't go there in a \" D .WLOC \".\">)\n\t\t      (T <TELL \"You can't go there without a vehicle.\">)>\n\t\t<CRLF>\n\t\t<RFALSE>)\n\t       (<FSET? .RM ,RMUNGBIT> <TELL <GETP .RM ,P?LDESC> CR> <RFALSE>)\n\t       (T\n\t\t<COND (.AV <MOVE .WLOC .RM>)\n\t\t      (T\n\t\t       <MOVE ,WINNER .RM>)>\n\t\t<SETG HERE .RM>\n\t\t<SETG LIT <LIT? ,HERE>>\n\t\t<COND (<AND <NOT .OLIT>\n\t\t\t    <NOT ,LIT>\n\t\t\t    <PROB 85>>\n\t\t       <COND (,SPRAYED?\n\t\t\t      <TELL\n\"There are sinister gurgling noises in the darkness all around you!\" CR>)\n\t\t\t     (<EQUAL? ,HERE ,DARK-1 ,DARK-2>\n\t\t\t      <JIGS-UP\n\"Oh, no! Dozens of lurking grues attack and devour you! You must have\nstumbled into an authentic grue lair!\">)\n\t\t\t     (ELSE\n\t\t\t      <JIGS-UP\n\"Oh, no! A lurking grue slithered into the room and devoured you!\">\n\t\t\t      <RTRUE>)>)>\n\t\t<APPLY <GETP ,HERE ,P?ACTION> ,M-ENTER>\n\t\t<COND (<NOT <==? ,HERE .RM>> <RTRUE>)\n\t\t      (<NOT <==? ,ADVENTURER ,WINNER>>\n\t\t       <TELL \"The \" D ,WINNER \" leaves the room.\" CR>)\n\t\t      (.V? <V-FIRST-LOOK>)>\n\t\t<RTRUE>)>>"
  },
  "LKP": {
   "name": "LKP",
   "file": "verbs.zil",
   "line": 399,
   "endLine": 407,
   "source": "<ROUTINE LKP (ITM TBL \"AUX\" (CNT 0) (LEN <GET .TBL 0>))\n\t #DECL ((ITM) ANY (TBL) TABLE (CNT LEN) FIX)\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> .LEN>\n\t\t\t<RFALSE>)\n\t\t       (<==? <GET .TBL .CNT> .ITM>\n\t\t\t<COND (<==? .CNT .LEN> <RFALSE>)\n\t\t\t      (T\n\t\t\t       <RETURN <GET .TBL <+ .CNT 1>>>)>)>>>"
  },
  "DO-WALK": {
   "name": "DO-WALK",
   "file": "verbs.zil",
   "line": 1520,
   "endLine": 1522,
   "source": "<ROUTINE DO-WALK (DIR)\n\t <SETG P-WALK-DIR .DIR>\n\t <PERFORM ,V?WALK .DIR>>"
  },
  "GLOBAL-IN?": {
   "name": "GLOBAL-IN?",
   "file": "verbs.zil",
   "line": 1264,
   "endLine": 1267,
   "source": "<ROUTINE GLOBAL-IN? (OBJ1 OBJ2 \"AUX\" T)\n\t #DECL ((OBJ1 OBJ2) OBJECT (T) <OR FALSE TABLE>)\n\t <COND (<SET T <GETPT .OBJ2 ,P?GLOBAL>>\n\t\t<ZMEMQB .OBJ1 .T <- <PTSIZE .T> 1>>)>>"
  },
  "FIND-IN": {
   "name": "FIND-IN",
   "file": "verbs.zil",
   "line": 1444,
   "endLine": 1449,
   "source": "<ROUTINE FIND-IN (WHERE WHAT \"AUX\" W)\n\t <SET W <FIRST? .WHERE>>\n\t <COND (<NOT .W> <RFALSE>)>\n\t <REPEAT ()\n\t\t <COND (<FSET? .W .WHAT> <RETURN .W>)\n\t\t       (<NOT <SET W <NEXT? .W>>> <RETURN <>>)>>>"
  },
  "HELD?": {
   "name": "HELD?",
   "file": "verbs.zil",
   "line": 591,
   "endLine": 596,
   "source": "<ROUTINE HELD? (OBJ)\n\t <COND (<IN? .OBJ ,WINNER> <RTRUE>)\n\t       (<IN? .OBJ ,ROOMS> <RFALSE>)\n\t       (<IN? .OBJ ,GLOBAL-OBJECTS> <RFALSE>)\n\t       (<EQUAL? .OBJ 0> <RFALSE>)\n\t       (T <HELD? <LOC .OBJ>>)>>"
  },
  "OTHER-SIDE": {
   "name": "OTHER-SIDE",
   "file": "verbs.zil",
   "line": 1532,
   "endLine": 1540,
   "source": "<ROUTINE OTHER-SIDE (DOBJ \"AUX\" (P 0) T)\n\t <REPEAT ()\n\t\t <COND (<L? <SET P <NEXTP ,HERE .P>> ,LOW-DIRECTION>\n\t\t\t<RETURN <>>)\n\t\t       (ELSE\n\t\t\t<SET T <GETPT ,HERE .P>>\n\t\t\t<COND (<AND <EQUAL? <PTSIZE .T> ,DEXIT>\n\t\t\t\t    <EQUAL? <GETB .T ,DEXITOBJ> .DOBJ>>\n\t\t\t       <RETURN .P>)>)>>>"
  },
  "MUNG-ROOM": {
   "name": "MUNG-ROOM",
   "file": "verbs.zil",
   "line": 1304,
   "endLine": 1307,
   "source": "<ROUTINE MUNG-ROOM (RM STR)\n\t #DECL ((STR) STRING)\n\t <FSET .RM ,RMUNGBIT>\n\t <PUTP .RM ,P?LDESC .STR>>"
  },
  "THIS-IS-IT": {
   "name": "THIS-IS-IT",
   "file": "verbs.zil",
   "line": 462,
   "endLine": 464,
   "source": "<ROUTINE THIS-IS-IT (OBJ)\n\t <SETG P-IT-OBJECT .OBJ>\n\t <SETG P-IT-LOC ,HERE>>"
  },
  "PERFORM": {
   "name": "PERFORM",
   "file": "main.zil",
   "line": 101,
   "endLine": 134,
   "source": "<ROUTINE PERFORM (A \"OPTIONAL\" (O <>) (I <>) \"AUX\" V OA OO OI) \n\t#DECL ((A) FIX (O) <OR FALSE OBJECT FIX> (I) <OR FALSE OBJECT> (V) ANY)\n\t<SET OA ,PRSA>\n\t<SET OO ,PRSO>\n\t<SET OI ,PRSI>\n\t<COND (<AND <EQUAL? ,IT .I .O>\n\t\t    <NOT <EQUAL? ,P-IT-LOC ,HERE>>>\n\t       <TELL \"I don't see what you are referring to.\" CR>\n\t       <RFATAL>)>\n\t<COND (<==? .O ,IT> <SET O ,P-IT-OBJECT>)>\n\t<COND (<==? .I ,IT> <SET I ,P-IT-OBJECT>)>\n\t<SETG PRSA .A>\n\t<SETG PRSO .O>\n\t<COND (<AND ,PRSO <NOT <VERB? WALK>>>\n\t       <SETG P-IT-OBJECT ,PRSO>\n\t       <SETG P-IT-LOC ,HERE>)>\n\t<SETG PRSI .I>\n\t<COND (<SET V <APPLY <GETP ,WINNER ,P?ACTION>>> .V)\n\t      (<SET V <APPLY <GETP <LOC ,WINNER> ,P?ACTION> ,M-BEG>> .V)\n\t      (<SET V <APPLY <GET ,PREACTIONS .A>>> .V)\n\t      (<AND .I <SET V <APPLY <GETP .I ,P?ACTION>>>> .V)\n\t      (<AND .O\n\t\t    <NOT <==? .A ,V?WALK>>\n\t\t    <SET V <APPLY <GETP .O ,P?ACTION>>>>\n\t       .V)\n\t      (<SET V <APPLY <GET ,ACTIONS .A>>> .V)>\n\t<COND (<NOT <==? .V ,M-FATAL>>\n\t       <COND (<==? <LOC ,WINNER> ,PRSO>\n\t\t      <SETG PRSO <>>)>\n\t       <SET V <APPLY <GETP <LOC ,WINNER> ,P?ACTION> ,M-END>>)>\n\t<SETG PRSA .OA>\n\t<SETG PRSO .OO>\n\t<SETG PRSI .OI>\n\t.V>  "
  },
  "CLAUSE-PRINT": {
   "name": "CLAUSE-PRINT",
   "file": "parser.zil",
   "line": 600,
   "endLine": 601,
   "source": "<ROUTINE CLAUSE-PRINT (BPTR EPTR) \n\t<BUFFER-PRINT <GET ,P-ITBL .BPTR> <GET ,P-ITBL .EPTR> T>>    "
  },
  "CAPITALIZE": {
   "name": "CAPITALIZE",
   "file": "parser.zil",
   "line": 624,
   "endLine": 626,
   "source": "<ROUTINE CAPITALIZE (PTR)\n\t <PRINTC <- <GETB ,P-INBUF <GETB .PTR 3>> 32>>\n\t <WORD-PRINT <- <GETB .PTR 2> 1> <+ <GETB .PTR 3> 1>>>"
  },
  "PRSO-PRINT": {
   "name": "PRSO-PRINT",
   "file": "parser.zil",
   "line": 1113,
   "endLine": 1117,
   "source": "<ROUTINE PRSO-PRINT (\"AUX\" PTR)\n\t <COND (<OR ,P-MERGED\n\t\t    <==? <GET <SET PTR <GET ,P-ITBL ,P-NC1>> 0> ,W?IT>>\n\t\t<TELL \" \" D ,PRSO>)\n\t       (T <BUFFER-PRINT .PTR <GET ,P-ITBL ,P-NC1L> <>>)>>"
  },
  "PRSI-PRINT": {
   "name": "PRSI-PRINT",
   "file": "parser.zil",
   "line": 1119,
   "endLine": 1123,
   "source": "<ROUTINE PRSI-PRINT (\"AUX\" PTR)\n\t <COND (<OR ,P-MERGED\n\t\t    <==? <GET <SET PTR <GET ,P-ITBL ,P-NC2>> 0> ,W?IT>>\n\t\t<TELL \" \" D ,PRSO>)\n\t       (T <BUFFER-PRINT .PTR <GET ,P-ITBL ,P-NC2L> <>>)>>"
  },
  "IN-HERE?": {
   "name": "IN-HERE?",
   "file": "verbs.zil",
   "line": 248,
   "endLine": 250,
   "source": "<ROUTINE IN-HERE? (OBJ)\n\t <OR <IN? .OBJ ,HERE>\n\t     <GLOBAL-IN? .OBJ ,HERE>>>"
  },
  "V-AGAIN": {
   "name": "V-AGAIN",
   "file": "verbs.zil",
   "line": 252,
   "endLine": 265,
   "source": "<ROUTINE V-AGAIN (\"AUX\" OBJ)\n\t <COND (<==? ,L-PRSA ,V?WALK>\n\t\t<PERFORM ,L-PRSA ,L-PRSO>)\n\t       (T\n\t\t<SET OBJ\n\t\t     <COND (<AND ,L-PRSO <NOT <LOC ,L-PRSO>>>\n\t\t\t    ,L-PRSO)\n\t\t\t   (<AND ,L-PRSI <NOT <LOC ,L-PRSO>>>\n\t\t\t    ,L-PRSI)>>\n\t\t<COND (.OBJ\n\t\t       <TELL \"I can't see the \" D .OBJ \" anymore.\" CR>\n\t\t       <RFATAL>)\n\t\t      (T\n\t\t       <PERFORM ,L-PRSA ,L-PRSO ,L-PRSI>)>)>>"
  },
  "GO-NEXT": {
   "name": "GO-NEXT",
   "file": "verbs.zil",
   "line": 394,
   "endLine": 397,
   "source": "<ROUTINE GO-NEXT (TBL \"AUX\" VAL)\n\t #DECL ((TBL) TABLE (VAL) ANY)\n\t <COND (<SET VAL <LKP ,HERE .TBL>>\n\t\t<GOTO .VAL>)>>"
  },
  "V-$WAIT": {
   "name": "V-$WAIT",
   "file": "verbs.zil",
   "line": 761,
   "endLine": 763,
   "source": "<ROUTINE V-$WAIT ()\n\t <COND (<==? ,PRSO ,INTNUM> <V-WAIT <- ,P-NUMBER 1>>)\n\t       (T <TELL \"No.\" CR>)>>"
  },
  "PRE-POUR-ON": {
   "name": "PRE-POUR-ON",
   "file": "verbs.zil",
   "line": 863,
   "endLine": 864,
   "source": "<ROUTINE PRE-POUR-ON ()\n\t <TELL \"You can't pour that on anything.\" CR>>"
  },
  "PRE-OIL": {
   "name": "PRE-OIL",
   "file": "verbs.zil",
   "line": 878,
   "endLine": 879,
   "source": "<ROUTINE PRE-OIL ()\n\t <TELL \"You probably put spinach in your gas tank, too.\" CR>>"
  },
  "V-KILL": {
   "name": "V-KILL",
   "file": "verbs.zil",
   "line": 1119,
   "endLine": 1120,
   "source": "<ROUTINE V-KILL ()\n\t <IKILL \"kill\">>"
  },
  "IKILL": {
   "name": "IKILL",
   "file": "verbs.zil",
   "line": 1122,
   "endLine": 1150,
   "source": "<ROUTINE IKILL (STR)\n\t #DECL ((STR) STRING)\n\t <COND (<NOT ,PRSO> <TELL \"There is nothing here to \" .STR \".\" CR>)\n\t       (<AND <NOT <FSET? ,PRSO ,VILLAIN>>\n\t\t     <NOT <FSET? ,PRSO ,VICBIT>>>\n\t\t<TELL \"I've known strange people, but fighting a \"\n\t\t      D\n\t\t      ,PRSO\n\t\t      \"?\" CR>)\n\t       (<OR <NOT ,PRSI> <==? ,PRSI ,HANDS>>\n\t\t<TELL \"Trying to \"\n\t\t      .STR\n\t\t      \" a \"\n\t\t      D\n\t\t      ,PRSO\n\t\t      \" with your bare hands is suicidal.\" CR>)\n\t       (<NOT <IN? ,PRSI ,WINNER>>\n\t\t<TELL \"You aren't even holding the \" D ,PRSI \".\" CR>)\n\t       (<NOT <FSET? ,PRSI ,WEAPONBIT>>\n\t\t<TELL \"Trying to \"\n\t\t      .STR\n\t\t      \" the \"\n\t\t      D\n\t\t      ,PRSO\n\t\t      \" with a \"\n\t\t      D\n\t\t      ,PRSI\n\t\t      \" is suicidal.\" CR>)\n\t       (ELSE <TELL \"You can't.\" CR>)>>"
  },
  "WORD-TYPE": {
   "name": "WORD-TYPE",
   "file": "verbs.zil",
   "line": 1206,
   "endLine": 1211,
   "source": "<ROUTINE WORD-TYPE\n\t (OBJ WORD \"AUX\" SYNS)\n\t #DECL ((OBJ) OBJECT (WORD SYNS) TABLE)\n\t <ZMEMQ .WORD\n\t\t<SET SYNS <GETPT .OBJ ,P?SYNONYM>>\n\t\t<- </ <PTSIZE .SYNS> 2> 1>>>"
  },
  "PRE-DIG": {
   "name": "PRE-DIG",
   "file": "verbs.zil",
   "line": 1253,
   "endLine": 1258,
   "source": "<ROUTINE PRE-DIG\n\t ()\n\t <COND (<NOT ,PRSI> <SETG PRSI ,HANDS>)>\n\t <COND (<FSET? ,PRSI ,TOOLBIT> <RFALSE>)\n\t       (ELSE\n\t\t<TELL \"Digging with the \" D ,PRSI \" is very silly.\" CR>)>>"
  },
  "PRE-TIE": {
   "name": "PRE-TIE",
   "file": "verbs.zil",
   "line": 1279,
   "endLine": 1282,
   "source": "<ROUTINE PRE-TIE\n\t ()\n\t <COND (<==? ,PRSI ,WINNER>\n\t\t<TELL \"You can't tie it to yourself.\" CR>)>>"
  },
  "V-IS-IN": {
   "name": "V-IS-IN",
   "file": "verbs.zil",
   "line": 1429,
   "endLine": 1436,
   "source": "<ROUTINE V-IS-IN ()\n\t <COND (<IN? ,PRSO ,PRSI>\n\t\t<TELL \"Yes, it is \">\n\t\t<COND (<FSET? ,PRSI ,SURFACEBIT>\n\t\t       <TELL \"on\">)\n\t\t      (T <TELL \"in\">)>\n\t\t<TELL \" the \" D ,PRSI \".\" CR>)\n\t       (T <TELL \"No, it isn't.\" CR>)>>"
  },
  "V-$VERIFY": {
   "name": "V-$VERIFY",
   "file": "verbs.zil",
   "line": 1505,
   "endLine": 1508,
   "source": "<ROUTINE V-$VERIFY ()\n\t <TELL \"Verifying game...\" CR>\n\t <COND (<VERIFY> <TELL \"Game correct.\" CR>)\n\t       (T <TELL CR \"** Game File Failure **\" CR>)>>"
  }
 },
 "globals": {
  "SWORD-STATE": {
   "name": "SWORD-STATE",
   "kind": "global",
   "file": "demons.zil",
   "line": 38,
   "value": "0"
  },
  "YUKS": {
   "name": "YUKS",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 2258,
   "value": "<LTABLE 0 \"A valiant attempt.\" \"You can't be serious.\" ;\"Not bloody likely.\" \"An interesting idea...\" \"What a concept!\">"
  },
  "LAMP-TABLE": {
   "name": "LAMP-TABLE",
   "kind": "global",
   "file": "actions.zil",
   "line": 35,
   "value": "<TABLE 300 \"The lamp appears a bit dimmer.\" 100 \"The lamp is definitely dimmer now.\" 50 \"The lamp is nearly out.\" 0>"
  },
  "CPHERE": {
   "name": "CPHERE",
   "kind": "global",
   "file": "actions.zil",
   "line": 127,
   "value": "1"
  },
  "CPOBJS": {
   "name": "CPOBJS",
   "kind": "global",
   "file": "actions.zil",
   "line": 129,
   "value": "<ITABLE NONE <* 8 2 36>>"
  },
  "CPTABLE": {
   "name": "CPTABLE",
   "kind": "global",
   "file": "actions.zil",
   "line": 131,
   "value": "<TABLE 1 0 -1 0 0 -1 0 -1 0 1 0 -2 0 0 0 0 0 1 0 -3 0 0 -1 -1 0 0 0 -1 0 0 0 1 1 0 0 0 1>"
  },
  "CPWALLS": {
   "name": "CPWALLS",
   "kind": "global",
   "file": "actions.zil",
   "line": 174,
   "value": "<LTABLE CPSWL 6 CPNWL -6 CPEWL 1 CPWWL -1>"
  },
  "CPEXITS": {
   "name": "CPEXITS",
   "kind": "global",
   "file": "actions.zil",
   "line": 176,
   "value": "<LTABLE P?NORTH -6 P?SOUTH 6 P?EAST 1 P?WEST -1 P?NE -5 P?NW -7 P?SE 7 P?SW 5>"
  },
  "CP-MOVED": {
   "name": "CP-MOVED",
   "kind": "global",
   "file": "actions.zil",
   "line": 194,
   "value": "<>"
  },
  "MINUS-SEVEN": {
   "name": "MINUS-SEVEN",
   "kind": "global",
   "file": "actions.zil",
   "line": 247,
   "value": "-7"
  },
  "MINUS-FIVE": {
   "name": "MINUS-FIVE",
   "kind": "global",
   "file": "actions.zil",
   "line": 248,
   "value": "-5"
  },
  "MINUS-FOUR": {
   "name": "MINUS-FOUR",
   "kind": "global",
   "file": "actions.zil",
   "line": 249,
   "value": "-4"
  },
  "MINUS-ONE": {
   "name": "MINUS-ONE",
   "kind": "global",
   "file": "actions.zil",
   "line": 250,
   "value": "-1"
  },
  "CPPUSH-FLAG": {
   "name": "CPPUSH-FLAG",
   "kind": "global",
   "file": "actions.zil",
   "line": 288,
   "value": "<>"
  },
  "CPSOLVE-FLAG": {
   "name": "CPSOLVE-FLAG",
   "kind": "global",
   "file": "actions.zil",
   "line": 290,
   "value": "<>"
  },
  "CPBLOCK-FLAG": {
   "name": "CPBLOCK-FLAG",
   "kind": "global",
   "file": "actions.zil",
   "line": 375,
   "value": "<>"
  },
  "GCARDLOC": {
   "name": "GCARDLOC",
   "kind": "constant",
   "file": "actions.zil",
   "line": 377,
   "value": "168"
  },
  "MLOC": {
   "name": "MLOC",
   "kind": "global",
   "file": "actions.zil",
   "line": 557,
   "value": "<>"
  },
  "MR1-FLAG": {
   "name": "MR1-FLAG",
   "kind": "global",
   "file": "actions.zil",
   "line": 559,
   "value": "T"
  },
  "MR2-FLAG": {
   "name": "MR2-FLAG",
   "kind": "global",
   "file": "actions.zil",
   "line": 561,
   "value": "T"
  },
  "MIRROR-OPEN-FLAG": {
   "name": "MIRROR-OPEN-FLAG",
   "kind": "global",
   "file": "actions.zil",
   "line": 563,
   "value": "<>"
  },
  "WOOD-OPEN-FLAG": {
   "name": "WOOD-OPEN-FLAG",
   "kind": "global",
   "file": "actions.zil",
   "line": 565,
   "value": "<>"
  },
  "MRSWPUSH-FLAG": {
   "name": "MRSWPUSH-FLAG",
   "kind": "global",
   "file": "actions.zil",
   "line": 567,
   "value": "<>"
  },
  "R-SOUTHS": {
   "name": "R-SOUTHS",
   "kind": "global",
   "file": "actions.zil",
   "line": 569,
   "value": "<LTABLE FRONT-DOOR MRD MRG MRC MRB MRA MREYE>"
  },
  "R-NORTHS": {
   "name": "R-NORTHS",
   "kind": "global",
   "file": "actions.zil",
   "line": 570,
   "value": "<LTABLE MREYE MRA MRB MRC MRG MRD>"
  },
  "R-EASTS": {
   "name": "R-EASTS",
   "kind": "global",
   "file": "actions.zil",
   "line": 605,
   "value": "<LTABLE MRA MRAE MRB MRBE MRC MRCE MRG MRGE MRD MRDE>"
  },
  "R-WESTS": {
   "name": "R-WESTS",
   "kind": "global",
   "file": "actions.zil",
   "line": 606,
   "value": "<LTABLE MRA MRAW MRB MRBW MRC MRCW MRG MRGW MRD MRDW>"
  },
  "GUARDIANS-SEEN": {
   "name": "GUARDIANS-SEEN",
   "kind": "global",
   "file": "actions.zil",
   "line": 633,
   "value": "<>"
  },
  "GUARDSTR": {
   "name": "GUARDSTR",
   "kind": "global",
   "file": "actions.zil",
   "line": 657,
   "value": "\", identical stone statues face each other from\npedestals on opposite sides of the corridor. The statues represent\nGuardians of Zork, a military order of ancient lineage. They are\nportrayed as heavily armored warriors clasping formidable bludgeons.\""
  },
  "MIRROR-FIRST": {
   "name": "MIRROR-FIRST",
   "kind": "global",
   "file": "actions.zil",
   "line": 896,
   "value": "\"To break the panel you would have to break the mirror first.\""
  },
  "DIRVEC": {
   "name": "DIRVEC",
   "kind": "global",
   "file": "actions.zil",
   "line": 899,
   "value": "<LTABLE P?NORTH 0 P?NE 45 P?EAST 90 P?SE 135 P?SOUTH 180 P?SW 225 P?WEST 270 P?NW 315>"
  },
  "BEAM-BREAKER": {
   "name": "BEAM-BREAKER",
   "kind": "global",
   "file": "actions.zil",
   "line": 995,
   "value": "<>"
  },
  "MIRROR-OPENED": {
   "name": "MIRROR-OPENED",
   "kind": "global",
   "file": "actions.zil",
   "line": 1040,
   "value": "<>"
  },
  "MDIR": {
   "name": "MDIR",
   "kind": "global",
   "file": "actions.zil",
   "line": 1065,
   "value": "270"
  },
  "POLEUP-FLAG": {
   "name": "POLEUP-FLAG",
   "kind": "global",
   "file": "actions.zil",
   "line": 1069,
   "value": "0"
  },
  "LONGDIRS": {
   "name": "LONGDIRS",
   "kind": "global",
   "file": "actions.zil",
   "line": 1138,
   "value": "<TABLE \"north\" \"northeast\" \"east\" \"southeast\" \"south\" \"southwest\" \"west\" \"northwest\">"
  },
  "DM-SEEN": {
   "name": "DM-SEEN",
   "kind": "global",
   "file": "actions.zil",
   "line": 1356,
   "value": "<>"
  },
  "IN-DUNGEON": {
   "name": "IN-DUNGEON",
   "kind": "global",
   "file": "actions.zil",
   "line": 1433,
   "value": "<>"
  },
  "DM-REASONS": {
   "name": "DM-REASONS",
   "kind": "global",
   "file": "actions.zil",
   "line": 1435,
   "value": "<TABLE \"but I fear my waiting may be in vain.\" \"but you have far to go before you are ready.\" \"and you seem to have made slight some progress.\" \"and your journey is half complete. Be of good cheer!\" \"and you are nearing the end of your long quest!\" \"and it will not be long before you are ready!\" \"and you are nearly ready for the last test!\">"
  },
  "FOLFLAG": {
   "name": "FOLFLAG",
   "kind": "global",
   "file": "actions.zil",
   "line": 1454,
   "value": "T"
  },
  "LCELL": {
   "name": "LCELL",
   "kind": "global",
   "file": "actions.zil",
   "line": 1479,
   "value": "1"
  },
  "PNUMB": {
   "name": "PNUMB",
   "kind": "global",
   "file": "actions.zil",
   "line": 1481,
   "value": "1"
  },
  "CELLOBJS": {
   "name": "CELLOBJS",
   "kind": "global",
   "file": "actions.zil",
   "line": 1483,
   "value": "<ITABLE NONE <* 8 2 8>>"
  },
  "BRONZE-DOOR-LOCKED": {
   "name": "BRONZE-DOOR-LOCKED",
   "kind": "global",
   "file": "actions.zil",
   "line": 1643,
   "value": "T"
  },
  "OLD-MAN-GONE": {
   "name": "OLD-MAN-GONE",
   "kind": "global",
   "file": "actions.zil",
   "line": 1700,
   "value": "<>"
  },
  "OLD-MAN-FED": {
   "name": "OLD-MAN-FED",
   "kind": "global",
   "file": "actions.zil",
   "line": 1701,
   "value": "<>"
  },
  "SECRET-DOOR-DESC": {
   "name": "SECRET-DOOR-DESC",
   "kind": "global",
   "file": "actions.zil",
   "line": 1703,
   "value": "\"Beyond the secret door are dark, forbidding stairs leading down to\na passage below. Flickering torchlight illuminates the passage.\""
  },
  "OLD-MAN-AWAKE": {
   "name": "OLD-MAN-AWAKE",
   "kind": "global",
   "file": "actions.zil",
   "line": 1806,
   "value": "<>"
  },
  "DIAG": {
   "name": "DIAG",
   "kind": "global",
   "file": "actions.zil",
   "line": 1932,
   "value": "<TABLE \"You are dead.\" \"You are very seriously wounded. One more wound would very likely do you in.\" \"You are hurt quite badly. One major wound would probably kill you.\" \"You have a few wounds, which do not seriously impair your strength.\" \"You are wounded lightly. You have a good deal of strength in reserve.\" \"You are in perfect health.\">"
  },
  "DEAD-OBJ-LOCS": {
   "name": "DEAD-OBJ-LOCS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 340,
   "value": "<LTABLE JUNCTION CLEARING DAMP-PASSAGE CREEPY-CRAWL TIGHT-SQUEEZE FOGGY-ROOM DEAD-END>"
  },
  "SCORE-MAX": {
   "name": "SCORE-MAX",
   "kind": "global",
   "file": "verbs.zil",
   "line": 198,
   "value": "7"
  },
  "MACHINE-DAMAGED": {
   "name": "MACHINE-DAMAGED",
   "kind": "global",
   "file": "tm.zil",
   "line": 324,
   "value": "<>"
  },
  "YEAR": {
   "name": "YEAR",
   "kind": "global",
   "file": "tm.zil",
   "line": 326,
   "value": "948"
  },
  "YEAR-BUILT": {
   "name": "YEAR-BUILT",
   "kind": "constant",
   "file": "tm.zil",
   "line": 328,
   "value": "776"
  },
  "YEAR-CAGED": {
   "name": "YEAR-CAGED",
   "kind": "constant",
   "file": "tm.zil",
   "line": 330,
   "value": "777"
  },
  "YEAR-CLOSED": {
   "name": "YEAR-CLOSED",
   "kind": "global",
   "file": "tm.zil",
   "line": 332,
   "value": "883"
  },
  "REAL-YEAR-CLOSED": {
   "name": "REAL-YEAR-CLOSED",
   "kind": "constant",
   "file": "tm.zil",
   "line": 334,
   "value": "883"
  },
  "YEAR-PRESENT": {
   "name": "YEAR-PRESENT",
   "kind": "constant",
   "file": "tm.zil",
   "line": 336,
   "value": "948"
  },
  "CLEFT-FLAG": {
   "name": "CLEFT-FLAG",
   "kind": "global",
   "file": "tm.zil",
   "line": 347,
   "value": "<>"
  },
  "TM-YEAR": {
   "name": "TM-YEAR",
   "kind": "global",
   "file": "tm.zil",
   "line": 428,
   "value": "948"
  },
  "RING-CONCEALED": {
   "name": "RING-CONCEALED",
   "kind": "global",
   "file": "tm.zil",
   "line": 485,
   "value": "<>"
  },
  "TM-POINT": {
   "name": "TM-POINT",
   "kind": "global",
   "file": "tm.zil",
   "line": 525,
   "value": "<>"
  },
  "SURROUNDINGS-CHANGED": {
   "name": "SURROUNDINGS-CHANGED",
   "kind": "global",
   "file": "tm.zil",
   "line": 581,
   "value": "\"your surroundings appear to have changed. From outside the door\nyou hear the sounds of guards talking.\""
  },
  "SNAP-LOC": {
   "name": "SNAP-LOC",
   "kind": "global",
   "file": "tm.zil",
   "line": 599,
   "value": "<>"
  },
  "GUARD-KILLERS": {
   "name": "GUARD-KILLERS",
   "kind": "global",
   "file": "tm.zil",
   "line": 730,
   "value": "<LTABLE \"\nyou are surrounded by heavily armed guards who seem awed by your presence.\nOne, whose IQ might be 15, aims a strange waffle-like\ninstrument in your direction and all goes black.\" \"\nyou are confronted with many particularly stupid-looking\npeople dressed in peculiar uniforms and pointing waffle-like objects in\nyour direction. One twists his waffle and you slump\nto the ground, dead.\" \"\nyou see a row of military people who, if appearances do not\ndeceive, have the cumulative intelligence of an unripe grapefruit. One\nof them aims a waffle-shaped implement in your direction and you become numb\nand then paralyzed and then dead.\">"
  },
  "FLATHEAD-HEARD": {
   "name": "FLATHEAD-HEARD",
   "kind": "global",
   "file": "tm.zil",
   "line": 768,
   "value": "<>"
  },
  "RING-STOLEN": {
   "name": "RING-STOLEN",
   "kind": "global",
   "file": "tm.zil",
   "line": 770,
   "value": "<>"
  },
  "CLUMSY-ROBBERY": {
   "name": "CLUMSY-ROBBERY",
   "kind": "global",
   "file": "tm.zil",
   "line": 771,
   "value": "<>"
  },
  "MYSTERY": {
   "name": "MYSTERY",
   "kind": "global",
   "file": "tm.zil",
   "line": 772,
   "value": "<>"
  },
  "GUARDS-PRESENT": {
   "name": "GUARDS-PRESENT",
   "kind": "global",
   "file": "tm.zil",
   "line": 774,
   "value": "T"
  },
  "HEAR-VOICES": {
   "name": "HEAR-VOICES",
   "kind": "global",
   "file": "tm.zil",
   "line": 839,
   "value": "\"Through the door you can hear voices which, from their\nsound, belong to military or police personnel.\""
  },
  "BLATHER": {
   "name": "BLATHER",
   "kind": "global",
   "file": "tm.zil",
   "line": 1010,
   "value": "<LTABLE \"wage scales for guards\" \"the excessive nature of the Royal Government\" \"the soon to be constructed Royal Puzzle\" \"the proper way to execute trespassers\" \"torturing thieves\" \"the banishment of the Wizard of Frobozz\">"
  },
  "DIRS": {
   "name": "DIRS",
   "kind": "global",
   "file": "shadow.zil",
   "line": 213,
   "value": "<LTABLE P?NORTH \"north\" P?SOUTH \"south\" P?EAST \"east\" P?WEST \"west\" P?NW \"northwest\" P?NE \"northeast\" P?SE \"southeast\" P?SW \"southwest\" P?UP \"stairs\" P?DOWN \"stairs\">"
  },
  "DIR-TBL": {
   "name": "DIR-TBL",
   "kind": "global",
   "file": "shadow.zil",
   "line": 218,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0 0 0>"
  },
  "SHADOW-DIAG": {
   "name": "SHADOW-DIAG",
   "kind": "global",
   "file": "shadow.zil",
   "line": 262,
   "value": "<TABLE \"?\" \" appears to be badly hurt and defenseless.\" \" is hurt, and its strength appears to be fading.\" \" has some wounds and is probably not capable of hindering your movement.\" \" has a light wound which hasn't affected its seemingly great strength.\" \" has a great deal of strength, perhaps matching your own.\">"
  },
  "P-STRENGTH": {
   "name": "P-STRENGTH",
   "kind": "global",
   "file": "shadow.zil",
   "line": 271,
   "value": "5"
  },
  "S-STRENGTH": {
   "name": "S-STRENGTH",
   "kind": "global",
   "file": "shadow.zil",
   "line": 272,
   "value": "5"
  },
  "ATTACK-MODE": {
   "name": "ATTACK-MODE",
   "kind": "global",
   "file": "shadow.zil",
   "line": 274,
   "value": "<>"
  },
  "SHADOW-GONE": {
   "name": "SHADOW-GONE",
   "kind": "global",
   "file": "shadow.zil",
   "line": 275,
   "value": "<>"
  },
  "P-HITS": {
   "name": "P-HITS",
   "kind": "global",
   "file": "shadow.zil",
   "line": 314,
   "value": "<LTABLE \"A good parry! Your sword wounds the hooded figure!\" \"A quick stroke catches the hooded figure off guard! Blood trickles\ndown the figure's arm!\" \"The hooded figure is hit with a quick slash!\">"
  },
  "P-MISSES": {
   "name": "P-MISSES",
   "kind": "global",
   "file": "shadow.zil",
   "line": 320,
   "value": "<LTABLE \"Your move was not quick enough and misses the mark.\" \"A quick stroke, but the hooded figure is on guard.\" \"A good stroke, but it's too slow.\" \"A good slash, but it misses by a mile.\" \"You charge, but the hooded figure jumps nimbly aside.\">"
  },
  "S-HITS": {
   "name": "S-HITS",
   "kind": "global",
   "file": "shadow.zil",
   "line": 327,
   "value": "<LTABLE \"The hooded figure catches you off guard and wounds you!\" \"You are wounded by a lightning thrust!\" \"Your quick reflexes cannot stop the hooded figure's stroke! You are hit!\">"
  },
  "S-MISSES": {
   "name": "S-MISSES",
   "kind": "global",
   "file": "shadow.zil",
   "line": 364,
   "value": "<LTABLE \"The hooded figure stabs nonchalantly with its sword and misses.\" \"You dodge as the hooded figure comes in low.\" \"The hooded figure tries to sneak past your guard, but you twist away.\" \"The hooded figure thrusts, but you fight back and send it\nflying to the ground!\">"
  },
  "BLOCKED-DIR": {
   "name": "BLOCKED-DIR",
   "kind": "global",
   "file": "shadow.zil",
   "line": 416,
   "value": "<>"
  },
  "SHADOW-POINT-1": {
   "name": "SHADOW-POINT-1",
   "kind": "global",
   "file": "shadow.zil",
   "line": 463,
   "value": "<>"
  },
  "SHADOW-POINT-2": {
   "name": "SHADOW-POINT-2",
   "kind": "global",
   "file": "shadow.zil",
   "line": 464,
   "value": "<>"
  },
  "CHEST-LIFTED": {
   "name": "CHEST-LIFTED",
   "kind": "global",
   "file": "shadow.zil",
   "line": 886,
   "value": "<>"
  },
  "MAN-SEEN": {
   "name": "MAN-SEEN",
   "kind": "global",
   "file": "shadow.zil",
   "line": 918,
   "value": "<>"
  },
  "MAN-WAITS": {
   "name": "MAN-WAITS",
   "kind": "global",
   "file": "shadow.zil",
   "line": 943,
   "value": "<LTABLE \"The man appears to be getting somewhat impatient.\" \"Your friend at the cliff top has started pacing nervously around.\" \"\"Yoo hoo!\" calls the man at the brink of the cliff. \"Remember me?\"\" \"The man on the cliff waves at you. \"It would just take a moment to tie that\nrope to the chest. I'd be much obliged, and there might even be something in\nit for you!\"\" \"A few small stones fall near your feet. You look up and see your friend\nwaving. \"I haven't got all day, fella. Be a pal and pass up the chest!\"\" \"The man on the cliff clears his throat loudly. \"I don't mean to be rushing\nyou, but I do have some pressing engagements....\"\">"
  },
  "MAN-WAITING": {
   "name": "MAN-WAITING",
   "kind": "global",
   "file": "shadow.zil",
   "line": 955,
   "value": "0"
  },
  "MAN-FLAG": {
   "name": "MAN-FLAG",
   "kind": "global",
   "file": "shadow.zil",
   "line": 956,
   "value": "<>"
  },
  "MAN-POINT": {
   "name": "MAN-POINT",
   "kind": "global",
   "file": "shadow.zil",
   "line": 957,
   "value": "<>"
  },
  "MAN-GONE": {
   "name": "MAN-GONE",
   "kind": "global",
   "file": "shadow.zil",
   "line": 958,
   "value": "<>"
  },
  "CHEST-TIED": {
   "name": "CHEST-TIED",
   "kind": "global",
   "file": "shadow.zil",
   "line": 1087,
   "value": "<>"
  },
  "HOLDING-ROPE": {
   "name": "HOLDING-ROPE",
   "kind": "global",
   "file": "shadow.zil",
   "line": 1088,
   "value": "<>"
  },
  "LIFT-WAIT": {
   "name": "LIFT-WAIT",
   "kind": "global",
   "file": "shadow.zil",
   "line": 1101,
   "value": "0"
  },
  "CHEST-OPENED": {
   "name": "CHEST-OPENED",
   "kind": "global",
   "file": "shadow.zil",
   "line": 1145,
   "value": "<>"
  },
  "ROPE-FLAG": {
   "name": "ROPE-FLAG",
   "kind": "global",
   "file": "shadow.zil",
   "line": 1167,
   "value": "T"
  },
  "LAST-MOVES": {
   "name": "LAST-MOVES",
   "kind": "global",
   "file": "shadow.zil",
   "line": 1335,
   "value": "0"
  },
  "LAKE-POINT": {
   "name": "LAKE-POINT",
   "kind": "global",
   "file": "shadow.zil",
   "line": 1343,
   "value": "<>"
  },
  "CURRENT-LAMP": {
   "name": "CURRENT-LAMP",
   "kind": "global",
   "file": "shadow.zil",
   "line": 1355,
   "value": "LAMP"
  },
  "LAKE-TIME": {
   "name": "LAKE-TIME",
   "kind": "global",
   "file": "shadow.zil",
   "line": 1388,
   "value": "<>"
  },
  "VIEW-POINT": {
   "name": "VIEW-POINT",
   "kind": "global",
   "file": "shadow.zil",
   "line": 1456,
   "value": "1"
  },
  "VIEW-ROMANS": {
   "name": "VIEW-ROMANS",
   "kind": "global",
   "file": "shadow.zil",
   "line": 1501,
   "value": "<TABLE 0 \"I\" \"II\" \"III\" \"IV\">"
  },
  "ACTIVE-VIEW": {
   "name": "ACTIVE-VIEW",
   "kind": "global",
   "file": "shadow.zil",
   "line": 1503,
   "value": "1"
  },
  "VIEW-ROOMS": {
   "name": "VIEW-ROOMS",
   "kind": "global",
   "file": "shadow.zil",
   "line": 1505,
   "value": "<LTABLE TIMBER-ROOM ROOM-8 DAMP-PASSAGE ZORK-IV>"
  },
  "VIEWS": {
   "name": "VIEWS",
   "kind": "global",
   "file": "shadow.zil",
   "line": 1507,
   "value": "<LTABLE \"You see a passage cluttered with broken timbers. An extremely narrow opening\ncan be seen at the end of the room.\" \"You see a tiny room with rough walls. Chiseled crudely on one wall is the\nnumber \"8\". The only apparent exit seems to be a blur.\" \"You see a wide room with two nearly identical passages leading east and\nnortheast. A wide channel descends steeply into the room and seems to be\nblocked by rubble.\" \"You see the interior of a huge temple rudely constructed of basalt blocks.\nFlickering torches cast a sallow illumination over an altar still wet with the\nblood of human sacrifice, its velvet covers stained and encrusted with gore.\">"
  },
  "EMPTY-HANDED": {
   "name": "EMPTY-HANDED",
   "kind": "global",
   "file": "shadow.zil",
   "line": 1655,
   "value": "<>"
  },
  "SPRAY-USED?": {
   "name": "SPRAY-USED?",
   "kind": "global",
   "file": "shadow.zil",
   "line": 1724,
   "value": "<>"
  },
  "AQ-FLAG": {
   "name": "AQ-FLAG",
   "kind": "global",
   "file": "shadow.zil",
   "line": 1911,
   "value": "T"
  },
  "COVER-MOVED": {
   "name": "COVER-MOVED",
   "kind": "global",
   "file": "shadow.zil",
   "line": 1913,
   "value": "<>"
  },
  "KEY-DESCS": {
   "name": "KEY-DESCS",
   "kind": "global",
   "file": "shadow.zil",
   "line": 1980,
   "value": "<LTABLE \"The key is a long and heavy skeleton key.\" \"The key is short and stubby, shaped like no lock you have ever seen.\" \"The key is round and thin, more like a pencil than a key.\" \"The key is shiny with many prongs.\" \"The key is sharp as an awl, and rusted badly.\">"
  },
  "BOAT-SEEN": {
   "name": "BOAT-SEEN",
   "kind": "global",
   "file": "shadow.zil",
   "line": 2000,
   "value": "<>"
  },
  "SHIP-GONE": {
   "name": "SHIP-GONE",
   "kind": "global",
   "file": "shadow.zil",
   "line": 2028,
   "value": "<>"
  },
  "INVIS": {
   "name": "INVIS",
   "kind": "global",
   "file": "shadow.zil",
   "line": 2093,
   "value": "<>"
  },
  "SWORD-IN-STONE?": {
   "name": "SWORD-IN-STONE?",
   "kind": "global",
   "file": "shadow.zil",
   "line": 2153,
   "value": "T"
  },
  "CP-FLAG": {
   "name": "CP-FLAG",
   "kind": "global",
   "file": "dungeon.zil",
   "line": 194,
   "value": "<>"
  },
  "CLEFT-QUEUED?": {
   "name": "CLEFT-QUEUED?",
   "kind": "global",
   "file": "3dungeon.zil",
   "line": 960,
   "value": "<>"
  },
  "C-TABLELEN": {
   "name": "C-TABLELEN",
   "kind": "constant",
   "file": "gclock.zil",
   "line": 5,
   "value": "180"
  },
  "C-TABLE": {
   "name": "C-TABLE",
   "kind": "global",
   "file": "gclock.zil",
   "line": 7,
   "value": "<ITABLE NONE 180>"
  },
  "C-DEMONS": {
   "name": "C-DEMONS",
   "kind": "global",
   "file": "gclock.zil",
   "line": 9,
   "value": "180"
  },
  "C-INTS": {
   "name": "C-INTS",
   "kind": "global",
   "file": "gclock.zil",
   "line": 11,
   "value": "180"
  },
  "C-INTLEN": {
   "name": "C-INTLEN",
   "kind": "constant",
   "file": "gclock.zil",
   "line": 13,
   "value": "6"
  },
  "C-ENABLED?": {
   "name": "C-ENABLED?",
   "kind": "constant",
   "file": "gclock.zil",
   "line": 15,
   "value": "0"
  },
  "C-TICK": {
   "name": "C-TICK",
   "kind": "constant",
   "file": "gclock.zil",
   "line": 17,
   "value": "1"
  },
  "C-RTN": {
   "name": "C-RTN",
   "kind": "constant",
   "file": "gclock.zil",
   "line": 19,
   "value": "2"
  },
  "CLOCK-WAIT": {
   "name": "CLOCK-WAIT",
   "kind": "global",
   "file": "gclock.zil",
   "line": 41,
   "value": "<>"
  },
  "LOAD-MAX": {
   "name": "LOAD-MAX",
   "kind": "global",
   "file": "gglobals.zil",
   "line": 125,
   "value": "100"
  },
  "LOAD-ALLOWED": {
   "name": "LOAD-ALLOWED",
   "kind": "global",
   "file": "gglobals.zil",
   "line": 127,
   "value": "100"
  },
  "SERIAL": {
   "name": "SERIAL",
   "kind": "constant",
   "file": "gmain.zil",
   "line": 5,
   "value": "0"
  },
  "PLAYER": {
   "name": "PLAYER",
   "kind": "global",
   "file": "main.zil",
   "line": 6,
   "value": "<>"
  },
  "P-WON": {
   "name": "P-WON",
   "kind": "global",
   "file": "main.zil",
   "line": 8,
   "value": "<>"
  },
  "M-FATAL": {
   "name": "M-FATAL",
   "kind": "constant",
   "file": "main.zil",
   "line": 10,
   "value": "2"
  },
  "M-HANDLED": {
   "name": "M-HANDLED",
   "kind": "constant",
   "file": "main.zil",
   "line": 12,
   "value": "1"
  },
  "M-NOT-HANDLED": {
   "name": "M-NOT-HANDLED",
   "kind": "constant",
   "file": "main.zil",
   "line": 14,
   "value": "<>"
  },
  "M-OBJECT": {
   "name": "M-OBJECT",
   "kind": "constant",
   "file": "gmain.zil",
   "line": 17,
   "value": "<>"
  },
  "M-BEG": {
   "name": "M-BEG",
   "kind": "constant",
   "file": "main.zil",
   "line": 16,
   "value": "1"
  },
  "M-END": {
   "name": "M-END",
   "kind": "constant",
   "file": "main.zil",
   "line": 18,
   "value": "<>"
  },
  "M-ENTER": {
   "name": "M-ENTER",
   "kind": "constant",
   "file": "main.zil",
   "line": 20,
   "value": "2"
  },
  "M-LOOK": {
   "name": "M-LOOK",
   "kind": "constant",
   "file": "main.zil",
   "line": 22,
   "value": "3"
  },
  "M-FLASH": {
   "name": "M-FLASH",
   "kind": "constant",
   "file": "main.zil",
   "line": 24,
   "value": "4"
  },
  "M-OBJDESC": {
   "name": "M-OBJDESC",
   "kind": "constant",
   "file": "main.zil",
   "line": 26,
   "value": "5"
  },
  "P-MULT": {
   "name": "P-MULT",
   "kind": "global",
   "file": "gmain.zil",
   "line": 174,
   "value": "<>"
  },
  "P-NOT-HERE": {
   "name": "P-NOT-HERE",
   "kind": "global",
   "file": "gmain.zil",
   "line": 176,
   "value": "0"
  },
  "PRSA": {
   "name": "PRSA",
   "kind": "global",
   "file": "parser.zil",
   "line": 16,
   "value": "0"
  },
  "PRSI": {
   "name": "PRSI",
   "kind": "global",
   "file": "parser.zil",
   "line": 18,
   "value": "0"
  },
  "PRSO": {
   "name": "PRSO",
   "kind": "global",
   "file": "parser.zil",
   "line": 20,
   "value": "0"
  },
  "P-TABLE": {
   "name": "P-TABLE",
   "kind": "global",
   "file": "parser.zil",
   "line": 22,
   "value": "0"
  },
  "P-ONEOBJ": {
   "name": "P-ONEOBJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 24,
   "value": "0"
  },
  "P-SYNTAX": {
   "name": "P-SYNTAX",
   "kind": "global",
   "file": "parser.zil",
   "line": 26,
   "value": "0"
  },
  "P-CCTBL": {
   "name": "P-CCTBL",
   "kind": "global",
   "file": "gparser.zil",
   "line": 22,
   "value": "<TABLE 0 0 0 0>"
  },
  "CC-SBPTR": {
   "name": "CC-SBPTR",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 24,
   "value": "0"
  },
  "CC-SEPTR": {
   "name": "CC-SEPTR",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 25,
   "value": "1"
  },
  "CC-DBPTR": {
   "name": "CC-DBPTR",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 26,
   "value": "2"
  },
  "CC-DEPTR": {
   "name": "CC-DEPTR",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 27,
   "value": "3"
  },
  "P-LEN": {
   "name": "P-LEN",
   "kind": "global",
   "file": "parser.zil",
   "line": 30,
   "value": "0"
  },
  "P-DIR": {
   "name": "P-DIR",
   "kind": "global",
   "file": "parser.zil",
   "line": 32,
   "value": "0"
  },
  "HERE": {
   "name": "HERE",
   "kind": "global",
   "file": "parser.zil",
   "line": 34,
   "value": "0"
  },
  "WINNER": {
   "name": "WINNER",
   "kind": "global",
   "file": "parser.zil",
   "line": 36,
   "value": "0"
  },
  "P-LEXV": {
   "name": "P-LEXV",
   "kind": "global",
   "file": "parser.zil",
   "line": 38,
   "value": "<ITABLE BYTE 120>"
  },
  "AGAIN-LEXV": {
   "name": "AGAIN-LEXV",
   "kind": "global",
   "file": "gparser.zil",
   "line": 36,
   "value": "<ITABLE 59 (LEXV) 0 #BYTE 0 #BYTE 0>"
  },
  "RESERVE-LEXV": {
   "name": "RESERVE-LEXV",
   "kind": "global",
   "file": "gparser.zil",
   "line": 38,
   "value": "<ITABLE 59 (LEXV) 0 #BYTE 0 #BYTE 0>"
  },
  "RESERVE-PTR": {
   "name": "RESERVE-PTR",
   "kind": "global",
   "file": "gparser.zil",
   "line": 40,
   "value": "<>"
  },
  "P-INBUF": {
   "name": "P-INBUF",
   "kind": "global",
   "file": "parser.zil",
   "line": 41,
   "value": "<ITABLE BYTE 100>"
  },
  "OOPS-INBUF": {
   "name": "OOPS-INBUF",
   "kind": "global",
   "file": "gparser.zil",
   "line": 47,
   "value": "<ITABLE 120 (BYTE LENGTH) 0>"
  },
  "OOPS-TABLE": {
   "name": "OOPS-TABLE",
   "kind": "global",
   "file": "gparser.zil",
   "line": 50,
   "value": "<TABLE <> <> <> <>>"
  },
  "O-PTR": {
   "name": "O-PTR",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 51,
   "value": "0"
  },
  "O-START": {
   "name": "O-START",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 52,
   "value": "1"
  },
  "O-LENGTH": {
   "name": "O-LENGTH",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 53,
   "value": "2"
  },
  "O-END": {
   "name": "O-END",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 54,
   "value": "3"
  },
  "P-CONT": {
   "name": "P-CONT",
   "kind": "global",
   "file": "parser.zil",
   "line": 44,
   "value": "<>"
  },
  "P-IT-OBJECT": {
   "name": "P-IT-OBJECT",
   "kind": "global",
   "file": "parser.zil",
   "line": 46,
   "value": "<>"
  },
  "P-OFLAG": {
   "name": "P-OFLAG",
   "kind": "global",
   "file": "parser.zil",
   "line": 51,
   "value": "<>"
  },
  "P-MERGED": {
   "name": "P-MERGED",
   "kind": "global",
   "file": "parser.zil",
   "line": 53,
   "value": "<>"
  },
  "P-ACLAUSE": {
   "name": "P-ACLAUSE",
   "kind": "global",
   "file": "parser.zil",
   "line": 55,
   "value": "<>"
  },
  "P-ANAM": {
   "name": "P-ANAM",
   "kind": "global",
   "file": "parser.zil",
   "line": 57,
   "value": "<>"
  },
  "P-AADJ": {
   "name": "P-AADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 59,
   "value": "<>"
  },
  "P-LEXWORDS": {
   "name": "P-LEXWORDS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 69,
   "value": "1"
  },
  "P-LEXSTART": {
   "name": "P-LEXSTART",
   "kind": "constant",
   "file": "parser.zil",
   "line": 72,
   "value": "1"
  },
  "P-LEXELEN": {
   "name": "P-LEXELEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 75,
   "value": "2"
  },
  "P-WORDLEN": {
   "name": "P-WORDLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 77,
   "value": "4"
  },
  "P-PSOFF": {
   "name": "P-PSOFF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 80,
   "value": "4"
  },
  "P-P1OFF": {
   "name": "P-P1OFF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 83,
   "value": "5"
  },
  "P-P1BITS": {
   "name": "P-P1BITS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 86,
   "value": "3"
  },
  "P-ITBLLEN": {
   "name": "P-ITBLLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 88,
   "value": "9"
  },
  "P-ITBL": {
   "name": "P-ITBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 90,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-OTBL": {
   "name": "P-OTBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 92,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-VTBL": {
   "name": "P-VTBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 94,
   "value": "<TABLE 0 0 0 0>"
  },
  "P-OVTBL": {
   "name": "P-OVTBL",
   "kind": "global",
   "file": "gparser.zil",
   "line": 86,
   "value": "<TABLE 0 #BYTE 0 #BYTE 0>"
  },
  "P-NCN": {
   "name": "P-NCN",
   "kind": "global",
   "file": "parser.zil",
   "line": 96,
   "value": "0"
  },
  "P-VERB": {
   "name": "P-VERB",
   "kind": "constant",
   "file": "parser.zil",
   "line": 98,
   "value": "0"
  },
  "P-VERBN": {
   "name": "P-VERBN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 100,
   "value": "1"
  },
  "P-PREP1": {
   "name": "P-PREP1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 102,
   "value": "2"
  },
  "P-PREP1N": {
   "name": "P-PREP1N",
   "kind": "constant",
   "file": "parser.zil",
   "line": 104,
   "value": "3"
  },
  "P-PREP2": {
   "name": "P-PREP2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 106,
   "value": "4"
  },
  "P-PREP2N": {
   "name": "P-PREP2N",
   "kind": "constant",
   "file": "parser.zil",
   "line": 108,
   "value": "5"
  },
  "P-NC1": {
   "name": "P-NC1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 110,
   "value": "6"
  },
  "P-NC1L": {
   "name": "P-NC1L",
   "kind": "constant",
   "file": "parser.zil",
   "line": 112,
   "value": "7"
  },
  "P-NC2": {
   "name": "P-NC2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 114,
   "value": "8"
  },
  "P-NC2L": {
   "name": "P-NC2L",
   "kind": "constant",
   "file": "parser.zil",
   "line": 116,
   "value": "9"
  },
  "QUOTE-FLAG": {
   "name": "QUOTE-FLAG",
   "kind": "global",
   "file": "parser.zil",
   "line": 118,
   "value": "<>"
  },
  "P-END-ON-PREP": {
   "name": "P-END-ON-PREP",
   "kind": "global",
   "file": "gparser.zil",
   "line": 102,
   "value": "<>"
  },
  "P-ACT": {
   "name": "P-ACT",
   "kind": "global",
   "file": "gparser.zil",
   "line": 382,
   "value": "<>"
  },
  "P-WALK-DIR": {
   "name": "P-WALK-DIR",
   "kind": "global",
   "file": "parser.zil",
   "line": 284,
   "value": "<>"
  },
  "AGAIN-DIR": {
   "name": "AGAIN-DIR",
   "kind": "global",
   "file": "gparser.zil",
   "line": 384,
   "value": "<>"
  },
  "P-NUMBER": {
   "name": "P-NUMBER",
   "kind": "global",
   "file": "parser.zil",
   "line": 396,
   "value": "0"
  },
  "P-DIRECTION": {
   "name": "P-DIRECTION",
   "kind": "global",
   "file": "parser.zil",
   "line": 397,
   "value": "0"
  },
  "P-SLOCBITS": {
   "name": "P-SLOCBITS",
   "kind": "global",
   "file": "parser.zil",
   "line": 495,
   "value": "0"
  },
  "P-SYNLEN": {
   "name": "P-SYNLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 497,
   "value": "8"
  },
  "P-SBITS": {
   "name": "P-SBITS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 499,
   "value": "0"
  },
  "P-SPREP1": {
   "name": "P-SPREP1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 501,
   "value": "1"
  },
  "P-SPREP2": {
   "name": "P-SPREP2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 503,
   "value": "2"
  },
  "P-SFWIM1": {
   "name": "P-SFWIM1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 505,
   "value": "3"
  },
  "P-SFWIM2": {
   "name": "P-SFWIM2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 507,
   "value": "4"
  },
  "P-SLOC1": {
   "name": "P-SLOC1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 509,
   "value": "5"
  },
  "P-SLOC2": {
   "name": "P-SLOC2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 511,
   "value": "6"
  },
  "P-SACTION": {
   "name": "P-SACTION",
   "kind": "constant",
   "file": "parser.zil",
   "line": 513,
   "value": "7"
  },
  "P-SONUMS": {
   "name": "P-SONUMS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 515,
   "value": "3"
  },
  "P-GWIMBIT": {
   "name": "P-GWIMBIT",
   "kind": "global",
   "file": "parser.zil",
   "line": 679,
   "value": "0"
  },
  "P-NAM": {
   "name": "P-NAM",
   "kind": "global",
   "file": "parser.zil",
   "line": 735,
   "value": "<>"
  },
  "P-ADJ": {
   "name": "P-ADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 737,
   "value": "<>"
  },
  "P-ADVERB": {
   "name": "P-ADVERB",
   "kind": "global",
   "file": "parser.zil",
   "line": 739,
   "value": "<>"
  },
  "P-ADJN": {
   "name": "P-ADJN",
   "kind": "global",
   "file": "parser.zil",
   "line": 741,
   "value": "<>"
  },
  "P-PRSO": {
   "name": "P-PRSO",
   "kind": "global",
   "file": "parser.zil",
   "line": 743,
   "value": "<ITABLE NONE 50>"
  },
  "P-PRSI": {
   "name": "P-PRSI",
   "kind": "global",
   "file": "parser.zil",
   "line": 745,
   "value": "<ITABLE NONE 50>"
  },
  "P-BUTS": {
   "name": "P-BUTS",
   "kind": "global",
   "file": "parser.zil",
   "line": 747,
   "value": "<ITABLE NONE 50>"
  },
  "P-MERGE": {
   "name": "P-MERGE",
   "kind": "global",
   "file": "parser.zil",
   "line": 749,
   "value": "<ITABLE NONE 50>"
  },
  "P-OCLAUSE": {
   "name": "P-OCLAUSE",
   "kind": "global",
   "file": "parser.zil",
   "line": 751,
   "value": "<ITABLE NONE 50>"
  },
  "P-MATCHLEN": {
   "name": "P-MATCHLEN",
   "kind": "global",
   "file": "parser.zil",
   "line": 753,
   "value": "0"
  },
  "P-GETFLAGS": {
   "name": "P-GETFLAGS",
   "kind": "global",
   "file": "parser.zil",
   "line": 755,
   "value": "0"
  },
  "P-ALL": {
   "name": "P-ALL",
   "kind": "constant",
   "file": "parser.zil",
   "line": 757,
   "value": "1"
  },
  "P-ONE": {
   "name": "P-ONE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 759,
   "value": "2"
  },
  "P-INHIBIT": {
   "name": "P-INHIBIT",
   "kind": "constant",
   "file": "parser.zil",
   "line": 761,
   "value": "4"
  },
  "P-AND": {
   "name": "P-AND",
   "kind": "global",
   "file": "gparser.zil",
   "line": 979,
   "value": "<>"
  },
  "SH": {
   "name": "SH",
   "kind": "constant",
   "file": "parser.zil",
   "line": 816,
   "value": "128"
  },
  "SC": {
   "name": "SC",
   "kind": "constant",
   "file": "parser.zil",
   "line": 818,
   "value": "64"
  },
  "SIR": {
   "name": "SIR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 820,
   "value": "32"
  },
  "SOG": {
   "name": "SOG",
   "kind": "constant",
   "file": "parser.zil",
   "line": 822,
   "value": "16"
  },
  "STAKE": {
   "name": "STAKE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 824,
   "value": "8"
  },
  "SMANY": {
   "name": "SMANY",
   "kind": "constant",
   "file": "parser.zil",
   "line": 826,
   "value": "4"
  },
  "SHAVE": {
   "name": "SHAVE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 828,
   "value": "2"
  },
  "P-XNAM": {
   "name": "P-XNAM",
   "kind": "global",
   "file": "gparser.zil",
   "line": 1167,
   "value": "<>"
  },
  "P-XADJ": {
   "name": "P-XADJ",
   "kind": "global",
   "file": "gparser.zil",
   "line": 1168,
   "value": "<>"
  },
  "P-XADJN": {
   "name": "P-XADJN",
   "kind": "global",
   "file": "gparser.zil",
   "line": 1169,
   "value": "<>"
  },
  "P-SRCBOT": {
   "name": "P-SRCBOT",
   "kind": "constant",
   "file": "parser.zil",
   "line": 995,
   "value": "2"
  },
  "P-SRCTOP": {
   "name": "P-SRCTOP",
   "kind": "constant",
   "file": "parser.zil",
   "line": 997,
   "value": "0"
  },
  "P-SRCALL": {
   "name": "P-SRCALL",
   "kind": "constant",
   "file": "parser.zil",
   "line": 999,
   "value": "1"
  },
  "ALWAYS-LIT": {
   "name": "ALWAYS-LIT",
   "kind": "global",
   "file": "gparser.zil",
   "line": 1356,
   "value": "<>"
  },
  "VERBOSE": {
   "name": "VERBOSE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 10,
   "value": "<>"
  },
  "SUPER-BRIEF": {
   "name": "SUPER-BRIEF",
   "kind": "global",
   "file": "verbs.zil",
   "line": 11,
   "value": "<>"
  },
  "HS": {
   "name": "HS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 984,
   "value": "0"
  },
  "JUMPLOSS": {
   "name": "JUMPLOSS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1013,
   "value": "<LTABLE \"You should have looked before you leaped.\" \"I'm afraid that leap was a bit much for your weak frame.\" \"In the movies, your life would be passing before your eyes.\" \"Geronimo...\">"
  },
  "WHEEEEE": {
   "name": "WHEEEEE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1007,
   "value": "<LTABLE \"Very good. Now you can go to the second grade.\" \"Are you enjoying yourself?\" \"Wheeeeeeeeee!!!!!\" \"Do you expect me to applaud?\">"
  },
  "LIT": {
   "name": "LIT",
   "kind": "global",
   "file": "verbs.zil",
   "line": 59,
   "value": "<>"
  },
  "SPRAYED?": {
   "name": "SPRAYED?",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1672,
   "value": "<>"
  },
  "DESC-OBJECT": {
   "name": "DESC-OBJECT",
   "kind": "global",
   "file": "verbs.zil",
   "line": 101,
   "value": "<>"
  },
  "MOVES": {
   "name": "MOVES",
   "kind": "global",
   "file": "verbs.zil",
   "line": 192,
   "value": "0"
  },
  "SCORE": {
   "name": "SCORE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 193,
   "value": "0"
  },
  "BASE-SCORE": {
   "name": "BASE-SCORE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 194,
   "value": "0"
  },
  "WON-FLAG": {
   "name": "WON-FLAG",
   "kind": "global",
   "file": "verbs.zil",
   "line": 196,
   "value": "<>"
  },
  "DEAD": {
   "name": "DEAD",
   "kind": "global",
   "file": "verbs.zil",
   "line": 271,
   "value": "<>"
  },
  "DEATHS": {
   "name": "DEATHS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 272,
   "value": "0"
  },
  "LUCKY": {
   "name": "LUCKY",
   "kind": "global",
   "file": "verbs.zil",
   "line": 273,
   "value": "1"
  },
  "FUMBLE-NUMBER": {
   "name": "FUMBLE-NUMBER",
   "kind": "global",
   "file": "verbs.zil",
   "line": 503,
   "value": "7"
  },
  "FUMBLE-PROB": {
   "name": "FUMBLE-PROB",
   "kind": "global",
   "file": "verbs.zil",
   "line": 504,
   "value": "8"
  },
  "REXIT": {
   "name": "REXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 372,
   "value": "0"
  },
  "UEXIT": {
   "name": "UEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 373,
   "value": "1"
  },
  "NEXIT": {
   "name": "NEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 374,
   "value": "2"
  },
  "FEXIT": {
   "name": "FEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 375,
   "value": "3"
  },
  "CEXIT": {
   "name": "CEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 376,
   "value": "4"
  },
  "DEXIT": {
   "name": "DEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 377,
   "value": "5"
  },
  "NEXITSTR": {
   "name": "NEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 379,
   "value": "0"
  },
  "FEXITFCN": {
   "name": "FEXITFCN",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 380,
   "value": "0"
  },
  "CEXITFLAG": {
   "name": "CEXITFLAG",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 381,
   "value": "1"
  },
  "CEXITSTR": {
   "name": "CEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 382,
   "value": "1"
  },
  "DEXITOBJ": {
   "name": "DEXITOBJ",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 383,
   "value": "1"
  },
  "DEXITSTR": {
   "name": "DEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 384,
   "value": "1"
  },
  "INDENTS": {
   "name": "INDENTS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 470,
   "value": "<TABLE \"\" \"  \" \"    \" \"      \" \"        \" \"          \">"
  },
  "HO-HUM": {
   "name": "HO-HUM",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1200,
   "value": "<LTABLE \" doesn't seem to work.\" \" isn't notably helpful.\" \" has no effect.\">"
  },
  "HELLOS": {
   "name": "HELLOS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1002,
   "value": "<LTABLE \"Hello.\" \"Nice weather we've been having lately.\" \"Goodbye.\">"
  },
  "DUMMY": {
   "name": "DUMMY",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 2267,
   "value": "<LTABLE 0 \"Look around.\" \"Too late for that.\" \"Have your eyes checked.\">"
  },
  "L-PRSA": {
   "name": "L-PRSA",
   "kind": "global",
   "file": "main.zil",
   "line": 95,
   "value": "<>"
  },
  "L-PRSO": {
   "name": "L-PRSO",
   "kind": "global",
   "file": "main.zil",
   "line": 97,
   "value": "<>"
  },
  "L-PRSI": {
   "name": "L-PRSI",
   "kind": "global",
   "file": "main.zil",
   "line": 99,
   "value": "<>"
  },
  "GWIM-DISABLE": {
   "name": "GWIM-DISABLE",
   "kind": "global",
   "file": "parser.zil",
   "line": 14,
   "value": "<>"
  },
  "P-CCSRC": {
   "name": "P-CCSRC",
   "kind": "global",
   "file": "parser.zil",
   "line": 28,
   "value": "0"
  },
  "P-IT-LOC": {
   "name": "P-IT-LOC",
   "kind": "global",
   "file": "parser.zil",
   "line": 47,
   "value": "<>"
  },
  "P-PHRLEN": {
   "name": "P-PHRLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 62,
   "value": "3"
  },
  "P-ORPHLEN": {
   "name": "P-ORPHLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 64,
   "value": "7"
  },
  "P-RTLEN": {
   "name": "P-RTLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 66,
   "value": "3"
  },
  "P-CSPTR": {
   "name": "P-CSPTR",
   "kind": "global",
   "file": "parser.zil",
   "line": 763,
   "value": "<>"
  },
  "P-CEPTR": {
   "name": "P-CEPTR",
   "kind": "global",
   "file": "parser.zil",
   "line": 764,
   "value": "<>"
  },
  "COPR-NOTICE": {
   "name": "COPR-NOTICE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 708,
   "value": "\" a transcript of interaction with ZORK III.|\nZORK is a trademark of Infocom, Inc.|\nCopyright (c) 1982 Infocom, Inc. All rights reserved.|\""
  }
 },
 "syntax": {
  "VERBOSE": {
   "verb": "VERBOSE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "VERBOSE",
     "objects": 0,
     "particles": [],
     "action": "V-VERBOSE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 40
    },
    {
     "pattern": "VERBOSE",
     "objects": 0,
     "particles": [],
     "action": "V-VERBOSE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 57
    }
   ]
  },
  "BRIEF": {
   "verb": "BRIEF",
   "synonyms": [],
   "productions": [
    {
     "pattern": "BRIEF",
     "objects": 0,
     "particles": [],
     "action": "V-BRIEF",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 42
    },
    {
     "pattern": "BRIEF",
     "objects": 0,
     "particles": [],
     "action": "V-BRIEF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 32
    }
   ]
  },
  "SUPER": {
   "verb": "SUPER",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SUPER",
     "objects": 0,
     "particles": [],
     "action": "V-SUPER-BRIEF",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 44
    },
    {
     "pattern": "SUPER",
     "objects": 0,
     "particles": [],
     "action": "V-SUPER-BRIEF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 34
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
     "file": "gsyntax.zil",
     "line": 47
    },
    {
     "pattern": "DIAGNOSE",
     "objects": 0,
     "particles": [],
     "action": "V-DIAGNOSE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 37
    }
   ]
  },
  "INVENTORY": {
   "verb": "INVENTORY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "INVENTORY",
     "objects": 0,
     "particles": [],
     "action": "V-INVENTORY",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 49
    },
    {
     "pattern": "INVENTORY",
     "objects": 0,
     "particles": [],
     "action": "V-INVENTORY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 39
    }
   ]
  },
  "QUIT": {
   "verb": "QUIT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "QUIT",
     "objects": 0,
     "particles": [],
     "action": "V-QUIT",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 52
    },
    {
     "pattern": "QUIT",
     "objects": 0,
     "particles": [],
     "action": "V-QUIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 42
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
     "file": "gsyntax.zil",
     "line": 55
    },
    {
     "pattern": "RESTART",
     "objects": 0,
     "particles": [],
     "action": "V-RESTART",
     "preaction": null,
     "file": "syntax.zil",
     "line": 45
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
     "file": "gsyntax.zil",
     "line": 57
    },
    {
     "pattern": "RESTORE",
     "objects": 0,
     "particles": [],
     "action": "V-RESTORE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 47
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
     "file": "gsyntax.zil",
     "line": 59
    },
    {
     "pattern": "SAVE",
     "objects": 0,
     "particles": [],
     "action": "V-SAVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 49
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
     "file": "gsyntax.zil",
     "line": 61
    },
    {
     "pattern": "SCORE",
     "objects": 0,
     "particles": [],
     "action": "V-SCORE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 51
    }
   ]
  },
  "SCRIPT": {
   "verb": "SCRIPT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SCRIPT",
     "objects": 0,
     "particles": [],
     "action": "V-SCRIPT",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 63
    },
    {
     "pattern": "SCRIPT",
     "objects": 0,
     "particles": [],
     "action": "V-SCRIPT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 421
    }
   ]
  },
  "UNSCRIPT": {
   "verb": "UNSCRIPT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "UNSCRIPT",
     "objects": 0,
     "particles": [],
     "action": "V-UNSCRIPT",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 65
    },
    {
     "pattern": "UNSCRIPT",
     "objects": 0,
     "particles": [],
     "action": "V-UNSCRIPT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 422
    }
   ]
  },
  "VERSION": {
   "verb": "VERSION",
   "synonyms": [],
   "productions": [
    {
     "pattern": "VERSION",
     "objects": 0,
     "particles": [],
     "action": "V-VERSION",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 67
    },
    {
     "pattern": "VERSION",
     "objects": 0,
     "particles": [],
     "action": "V-VERSION",
     "preaction": null,
     "file": "syntax.zil",
     "line": 55
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
     "file": "gsyntax.zil",
     "line": 69
    },
    {
     "pattern": "$VERIFY",
     "objects": 0,
     "particles": [],
     "action": "V-$VERIFY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 53
    }
   ]
  },
  "#RANDOM": {
   "verb": "#RANDOM",
   "synonyms": [],
   "productions": [
    {
     "pattern": "#RANDOM OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-RANDOM",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 71
    }
   ]
  },
  "#COMMAND": {
   "verb": "#COMMAND",
   "synonyms": [],
   "productions": [
    {
     "pattern": "#COMMAND",
     "objects": 0,
     "particles": [],
     "action": "V-COMMAND-FILE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 73
    }
   ]
  },
  "#RECORD": {
   "verb": "#RECORD",
   "synonyms": [],
   "productions": [
    {
     "pattern": "#RECORD",
     "objects": 0,
     "particles": [],
     "action": "V-RECORD",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 75
    }
   ]
  },
  "#UNRECORD": {
   "verb": "#UNRECORD",
   "synonyms": [],
   "productions": [
    {
     "pattern": "#UNRECORD",
     "objects": 0,
     "particles": [],
     "action": "V-UNRECORD",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 77
    }
   ]
  },
  "ACTIVATE": {
   "verb": "ACTIVATE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ACTIVATE OBJECT (FIND LIGHTBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 85
    }
   ]
  },
  "ANSWER": {
   "verb": "ANSWER",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ANSWER",
     "objects": 0,
     "particles": [],
     "action": "V-ANSWER",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 91
    },
    {
     "pattern": "ANSWER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-REPLY",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 92
    },
    {
     "pattern": "ANSWER",
     "objects": 0,
     "particles": [],
     "action": "V-ANSWER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 66
    },
    {
     "pattern": "ANSWER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-REPLY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 67
    }
   ]
  },
  "APPLY": {
   "verb": "APPLY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "APPLY OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "gsyntax.zil",
     "line": 95
    },
    {
     "pattern": "APPLY OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 70
    }
   ]
  },
  "ATTACK": {
   "verb": "ATTACK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ATTACK OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 101
    },
    {
     "pattern": "ATTACK OBJECT (FIND VILLAIN) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 72
    }
   ]
  },
  "BACK": {
   "verb": "BACK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "BACK",
     "objects": 0,
     "particles": [],
     "action": "V-BACK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 105
    },
    {
     "pattern": "BACK",
     "objects": 0,
     "particles": [],
     "action": "V-BACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 79
    }
   ]
  },
  "BLAST": {
   "verb": "BLAST",
   "synonyms": [],
   "productions": [
    {
     "pattern": "BLAST",
     "objects": 0,
     "particles": [],
     "action": "V-BLAST",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 107
    },
    {
     "pattern": "BLAST",
     "objects": 0,
     "particles": [],
     "action": "V-BLAST",
     "preaction": null,
     "file": "syntax.zil",
     "line": 81
    }
   ]
  },
  "BLOW": {
   "verb": "BLOW",
   "synonyms": [],
   "productions": [
    {
     "pattern": "BLOW OUT OBJECT",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 109
    },
    {
     "pattern": "BLOW UP OBJECT WITH OBJECT (FIND TOOLBIT) (ON-GROUND IN-ROOM HELD CARRIED)",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-INFLATE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 110
    },
    {
     "pattern": "BLOW UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-BLAST",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 112
    },
    {
     "pattern": "BLOW IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-BREATHE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 113
    },
    {
     "pattern": "BLOW OUT OBJECT",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 219
    },
    {
     "pattern": "BLOW UP OBJECT WITH OBJECT (FIND TOOLBIT) (ON-GROUND IN-ROOM HELD CARRIED)",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-INFLATE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 220
    },
    {
     "pattern": "BLOW UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-BLAST",
     "preaction": null,
     "file": "syntax.zil",
     "line": 225
    }
   ]
  },
  "BOARD": {
   "verb": "BOARD",
   "synonyms": [],
   "productions": [
    {
     "pattern": "BOARD OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-BOARD",
     "preaction": "PRE-BOARD",
     "file": "gsyntax.zil",
     "line": 115
    },
    {
     "pattern": "BOARD OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-BOARD",
     "preaction": "PRE-BOARD",
     "file": "syntax.zil",
     "line": 83
    }
   ]
  },
  "BRUSH": {
   "verb": "BRUSH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "BRUSH OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-BRUSH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 117
    },
    {
     "pattern": "BRUSH OBJECT (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-BRUSH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 118
    }
   ]
  },
  "BUG": {
   "verb": "BUG",
   "synonyms": [],
   "productions": [
    {
     "pattern": "BUG",
     "objects": 0,
     "particles": [],
     "action": "V-BUG",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 122
    },
    {
     "pattern": "BUG",
     "objects": 0,
     "particles": [],
     "action": "V-BUG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 86
    }
   ]
  },
  "BURN": {
   "verb": "BURN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "BURN OBJECT (FIND BURNBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (FIND FLAMEBIT) (HELD CARRIED ON-GROUND IN-ROOM HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-BURN",
     "preaction": "PRE-BURN",
     "file": "gsyntax.zil",
     "line": 124
    },
    {
     "pattern": "BURN DOWN OBJECT (FIND BURNBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (FIND FLAMEBIT) (HELD CARRIED ON-GROUND IN-ROOM HAVE)",
     "objects": 2,
     "particles": [
      "DOWN",
      "WITH"
     ],
     "action": "V-BURN",
     "preaction": "PRE-BURN",
     "file": "gsyntax.zil",
     "line": 127
    },
    {
     "pattern": "BURN OBJECT (FIND BURNBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (FIND FLAMEBIT) (HELD CARRIED ON-GROUND IN-ROOM HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-BURN",
     "preaction": "PRE-BURN",
     "file": "syntax.zil",
     "line": 88
    },
    {
     "pattern": "BURN DOWN OBJECT (FIND BURNBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (FIND FLAMEBIT) (HELD CARRIED ON-GROUND IN-ROOM HAVE)",
     "objects": 2,
     "particles": [
      "DOWN",
      "WITH"
     ],
     "action": "V-BURN",
     "preaction": "PRE-BURN",
     "file": "syntax.zil",
     "line": 93
    }
   ]
  },
  "CHOMP": {
   "verb": "CHOMP",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CHOMP",
     "objects": 0,
     "particles": [],
     "action": "V-CHOMP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 132
    },
    {
     "pattern": "CHOMP",
     "objects": 0,
     "particles": [],
     "action": "V-CHOMP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 101
    }
   ]
  },
  "CLIMB": {
   "verb": "CLIMB",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CLIMB UP OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-CLIMB-UP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 135
    },
    {
     "pattern": "CLIMB UP OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-CLIMB-UP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 136
    },
    {
     "pattern": "CLIMB DOWN OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 137
    },
    {
     "pattern": "CLIMB DOWN OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 138
    },
    {
     "pattern": "CLIMB OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLIMB-FOO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 139
    },
    {
     "pattern": "CLIMB IN OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-BOARD",
     "preaction": "PRE-BOARD",
     "file": "gsyntax.zil",
     "line": 140
    },
    {
     "pattern": "CLIMB ON OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-CLIMB-ON",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 141
    },
    {
     "pattern": "CLIMB WITH OBJECT",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 142
    },
    {
     "pattern": "CLIMB UP OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-CLIMB-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 104
    },
    {
     "pattern": "CLIMB DOWN OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 105
    },
    {
     "pattern": "CLIMB OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLIMB-FOO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 106
    },
    {
     "pattern": "CLIMB IN OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-BOARD",
     "preaction": "PRE-BOARD",
     "file": "syntax.zil",
     "line": 107
    },
    {
     "pattern": "CLIMB ON OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-CLIMB-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 108
    }
   ]
  },
  "CLOSE": {
   "verb": "CLOSE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CLOSE OBJECT (FIND DOORBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLOSE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 145
    },
    {
     "pattern": "CLOSE OBJECT (FIND DOORBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLOSE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 111
    }
   ]
  },
  "COMMAND": {
   "verb": "COMMAND",
   "synonyms": [],
   "productions": [
    {
     "pattern": "COMMAND OBJECT (FIND ACTORBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-COMMAND",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 147
    }
   ]
  },
  "COUNT": {
   "verb": "COUNT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "COUNT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-COUNT",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 149
    },
    {
     "pattern": "COUNT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-COUNT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 115
    }
   ]
  },
  "CROSS": {
   "verb": "CROSS",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CROSS OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-CROSS",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 151
    },
    {
     "pattern": "CROSS OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-CROSS",
     "preaction": null,
     "file": "syntax.zil",
     "line": 118
    }
   ]
  },
  "CUT": {
   "verb": "CUT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CUT OBJECT WITH OBJECT (FIND WEAPONBIT) (CARRIED HELD)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-CUT",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 154
    },
    {
     "pattern": "CUT OBJECT WITH OBJECT (FIND WEAPONBIT) (CARRIED HELD)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-CUT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 121
    }
   ]
  },
  "CURSE": {
   "verb": "CURSE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CURSE",
     "objects": 0,
     "particles": [],
     "action": "V-CURSES",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 157
    },
    {
     "pattern": "CURSE OBJECT (FIND ACTORBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-CURSES",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 158
    },
    {
     "pattern": "CURSE",
     "objects": 0,
     "particles": [],
     "action": "V-CURSES",
     "preaction": null,
     "file": "syntax.zil",
     "line": 124
    },
    {
     "pattern": "CURSE OBJECT (FIND VILLAIN)",
     "objects": 1,
     "particles": [],
     "action": "V-CURSES",
     "preaction": null,
     "file": "syntax.zil",
     "line": 125
    }
   ]
  },
  "DEFLATE": {
   "verb": "DEFLATE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DEFLATE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-DEFLATE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 161
    },
    {
     "pattern": "DEFLATE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-DEFLATE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 128
    }
   ]
  },
  "DESTROY": {
   "verb": "DESTROY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DESTROY OBJECT (ON-GROUND IN-ROOM HELD CARRIED) WITH OBJECT (HELD CARRIED TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": "PRE-MUNG",
     "file": "gsyntax.zil",
     "line": 163
    },
    {
     "pattern": "DESTROY DOWN OBJECT (ON-GROUND IN-ROOM HELD CARRIED) WITH OBJECT (HELD CARRIED TAKE)",
     "objects": 2,
     "particles": [
      "DOWN",
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": "PRE-MUNG",
     "file": "gsyntax.zil",
     "line": 165
    },
    {
     "pattern": "DESTROY IN OBJECT (ON-GROUND IN-ROOM HELD CARRIED)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-OPEN",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 167
    },
    {
     "pattern": "DESTROY OBJECT (ON-GROUND IN-ROOM HELD CARRIED) WITH OBJECT (HELD CARRIED TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": "PRE-MUNG",
     "file": "syntax.zil",
     "line": 322
    },
    {
     "pattern": "DESTROY DOWN OBJECT (ON-GROUND IN-ROOM HELD CARRIED) WITH OBJECT (HELD CARRIED TAKE)",
     "objects": 2,
     "particles": [
      "DOWN",
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": "PRE-MUNG",
     "file": "syntax.zil",
     "line": 327
    }
   ]
  },
  "DIG": {
   "verb": "DIG",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DIG IN OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-DIG",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 170
    },
    {
     "pattern": "DIG IN OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "IN",
      "WITH"
     ],
     "action": "V-DIG",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 171
    },
    {
     "pattern": "DIG OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-DIG",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 173
    },
    {
     "pattern": "DIG IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-DIG",
     "preaction": "PRE-DIG",
     "file": "syntax.zil",
     "line": 130
    },
    {
     "pattern": "DIG OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-DIG",
     "preaction": "PRE-DIG",
     "file": "syntax.zil",
     "line": 131
    },
    {
     "pattern": "DIG IN OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "IN",
      "WITH"
     ],
     "action": "V-DIG",
     "preaction": "PRE-DIG",
     "file": "syntax.zil",
     "line": 136
    }
   ]
  },
  "DISEMBARK": {
   "verb": "DISEMBARK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DISEMBARK OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-DISEMBARK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 176
    },
    {
     "pattern": "DISEMBARK OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-DISEMBARK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 143
    }
   ]
  },
  "DISENCHANT": {
   "verb": "DISENCHANT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DISENCHANT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-DISENCHANT",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 179
    }
   ]
  },
  "DRINK": {
   "verb": "DRINK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DRINK OBJECT (FIND DRINKBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-DRINK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 181
    },
    {
     "pattern": "DRINK FROM OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [
      "FROM"
     ],
     "action": "V-DRINK-FROM",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 183
    },
    {
     "pattern": "DRINK OBJECT (FIND DRINKBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-DRINK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 146
    },
    {
     "pattern": "DRINK FROM OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [
      "FROM"
     ],
     "action": "V-DRINK-FROM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 149
    }
   ]
  },
  "DROP": {
   "verb": "DROP",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DROP OBJECT (HELD MANY HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-DROP",
     "preaction": "PRE-DROP",
     "file": "gsyntax.zil",
     "line": 186
    },
    {
     "pattern": "DROP OBJECT (HELD MANY HAVE) DOWN OBJECT",
     "objects": 2,
     "particles": [
      "DOWN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "gsyntax.zil",
     "line": 187
    },
    {
     "pattern": "DROP OBJECT (HELD MANY HAVE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "gsyntax.zil",
     "line": 188
    },
    {
     "pattern": "DROP OBJECT (HELD MANY HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT",
     "file": "gsyntax.zil",
     "line": 189
    },
    {
     "pattern": "DROP OBJECT (HELD MANY HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-DROP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 152
    },
    {
     "pattern": "DROP OBJECT (HELD MANY HAVE) DOWN OBJECT",
     "objects": 2,
     "particles": [
      "DOWN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 153
    },
    {
     "pattern": "DROP OBJECT (HELD MANY HAVE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 154
    },
    {
     "pattern": "DROP OBJECT (HELD MANY HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 155
    }
   ]
  },
  "EAT": {
   "verb": "EAT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EAT OBJECT (FIND FOODBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE)",
     "objects": 1,
     "particles": [],
     "action": "V-EAT",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 192
    },
    {
     "pattern": "EAT OBJECT (FIND FOODBIT) (HELD CARRIED ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-EAT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 160
    }
   ]
  },
  "ECHO": {
   "verb": "ECHO",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ECHO",
     "objects": 0,
     "particles": [],
     "action": "V-ECHO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 196
    }
   ]
  },
  "ENCHANT": {
   "verb": "ENCHANT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ENCHANT OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-ENCHANT",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 198
    }
   ]
  },
  "ENTER": {
   "verb": "ENTER",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ENTER",
     "objects": 0,
     "particles": [],
     "action": "V-ENTER",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 200
    },
    {
     "pattern": "ENTER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 201
    },
    {
     "pattern": "ENTER",
     "objects": 0,
     "particles": [],
     "action": "V-ENTER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 165
    },
    {
     "pattern": "ENTER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 166
    }
   ]
  },
  "EXIT": {
   "verb": "EXIT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EXIT",
     "objects": 0,
     "particles": [],
     "action": "V-EXIT",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 202
    },
    {
     "pattern": "EXIT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-EXIT",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 203
    },
    {
     "pattern": "EXIT",
     "objects": 0,
     "particles": [],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 167
    },
    {
     "pattern": "EXIT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 168
    }
   ]
  },
  "EXAMINE": {
   "verb": "EXAMINE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EXAMINE OBJECT (MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-EXAMINE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 205
    },
    {
     "pattern": "EXAMINE IN OBJECT (HELD CARRIED IN-ROOM ON-GROUND MANY)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 206
    },
    {
     "pattern": "EXAMINE ON OBJECT (HELD CARRIED IN-ROOM ON-GROUND MANY)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 208
    },
    {
     "pattern": "EXAMINE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-EXAMINE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 170
    },
    {
     "pattern": "EXAMINE IN OBJECT (HELD CARRIED IN-ROOM ON-GROUND MANY)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 171
    },
    {
     "pattern": "EXAMINE ON OBJECT (HELD CARRIED IN-ROOM ON-GROUND MANY)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 173
    }
   ]
  },
  "EXORCISE": {
   "verb": "EXORCISE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EXORCISE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-EXORCISE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 212
    },
    {
     "pattern": "EXORCISE OUT OBJECT (FIND ACTORBIT)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-EXORCISE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 213
    },
    {
     "pattern": "EXORCISE AWAY OBJECT (FIND ACTORBIT)",
     "objects": 1,
     "particles": [
      "AWAY"
     ],
     "action": "V-EXORCISE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 214
    },
    {
     "pattern": "EXORCISE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-EXORCISE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 177
    },
    {
     "pattern": "EXORCISE OUT OBJECT (FIND VILLAIN)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-EXORCISE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 178
    },
    {
     "pattern": "EXORCISE AWAY OBJECT (FIND VILLAIN)",
     "objects": 1,
     "particles": [
      "AWAY"
     ],
     "action": "V-EXORCISE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 179
    }
   ]
  },
  "EXTINGUISH": {
   "verb": "EXTINGUISH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EXTINGUISH OBJECT (FIND ONBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 217
    },
    {
     "pattern": "EXTINGUISH OBJECT (FIND LIGHTBIT) (MANY HELD CARRIED ON-GROUND IN-ROOM TAKE HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 182
    }
   ]
  },
  "FILL": {
   "verb": "FILL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FILL OBJECT (FIND CONTBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-FILL",
     "preaction": "PRE-FILL",
     "file": "gsyntax.zil",
     "line": 221
    },
    {
     "pattern": "FILL OBJECT (FIND CONTBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-FILL",
     "preaction": "PRE-FILL",
     "file": "gsyntax.zil",
     "line": 223
    },
    {
     "pattern": "FILL OBJECT (FIND CONTBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-FILL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 187
    },
    {
     "pattern": "FILL OBJECT (FIND CONTBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-FILL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 192
    }
   ]
  },
  "FIND": {
   "verb": "FIND",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FIND OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FIND",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 226
    },
    {
     "pattern": "FIND OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FIND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 196
    }
   ]
  },
  "FOLLOW": {
   "verb": "FOLLOW",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FOLLOW",
     "objects": 0,
     "particles": [],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 229
    },
    {
     "pattern": "FOLLOW OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 230
    },
    {
     "pattern": "FOLLOW",
     "objects": 0,
     "particles": [],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 200
    },
    {
     "pattern": "FOLLOW OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 201
    }
   ]
  },
  "FROBOZZ": {
   "verb": "FROBOZZ",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FROBOZZ",
     "objects": 0,
     "particles": [],
     "action": "V-FROBOZZ",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 233
    }
   ]
  },
  "GIVE": {
   "verb": "GIVE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "GIVE OBJECT (MANY HELD HAVE) TO OBJECT (FIND ACTORBIT) (ON-GROUND)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-GIVE",
     "preaction": "PRE-GIVE",
     "file": "gsyntax.zil",
     "line": 235
    },
    {
     "pattern": "GIVE OBJECT (FIND ACTORBIT) (ON-GROUND) OBJECT (MANY HELD HAVE)",
     "objects": 2,
     "particles": [],
     "action": "V-SGIVE",
     "preaction": "PRE-SGIVE",
     "file": "gsyntax.zil",
     "line": 237
    },
    {
     "pattern": "GIVE OBJECT (MANY HELD HAVE ;CARRIED ;ON-GROUND ;IN-ROOM) TO OBJECT (FIND VICBIT) (ON-GROUND)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-GIVE",
     "preaction": "PRE-GIVE",
     "file": "syntax.zil",
     "line": 204
    },
    {
     "pattern": "GIVE OBJECT (FIND VICBIT) (ON-GROUND) OBJECT (MANY HELD HAVE)",
     "objects": 2,
     "particles": [],
     "action": "V-SGIVE",
     "preaction": "PRE-SGIVE",
     "file": "syntax.zil",
     "line": 209
    }
   ]
  },
  "HATCH": {
   "verb": "HATCH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "HATCH OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-HATCH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 243
    }
   ]
  },
  "HELLO": {
   "verb": "HELLO",
   "synonyms": [],
   "productions": [
    {
     "pattern": "HELLO",
     "objects": 0,
     "particles": [],
     "action": "V-HELLO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 245
    },
    {
     "pattern": "HELLO OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-HELLO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 246
    },
    {
     "pattern": "HELLO",
     "objects": 0,
     "particles": [],
     "action": "V-HELLO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 215
    },
    {
     "pattern": "HELLO OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-HELLO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 216
    }
   ]
  },
  "INCANT": {
   "verb": "INCANT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "INCANT",
     "objects": 0,
     "particles": [],
     "action": "V-INCANT",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 249
    },
    {
     "pattern": "INCANT",
     "objects": 0,
     "particles": [],
     "action": "V-INCANT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 508
    }
   ]
  },
  "INFLAT": {
   "verb": "INFLAT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "INFLAT OBJECT WITH OBJECT (FIND TOOLBIT) (ON-GROUND IN-ROOM HELD CARRIED)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-INFLATE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 252
    },
    {
     "pattern": "INFLAT OBJECT WITH OBJECT (FIND TOOLBIT) (ON-GROUND IN-ROOM HELD CARRIED)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-INFLATE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 227
    }
   ]
  },
  "JUMP": {
   "verb": "JUMP",
   "synonyms": [],
   "productions": [
    {
     "pattern": "JUMP",
     "objects": 0,
     "particles": [],
     "action": "V-LEAP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 258
    },
    {
     "pattern": "JUMP OVER OBJECT",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 259
    },
    {
     "pattern": "JUMP ACROSS OBJECT",
     "objects": 1,
     "particles": [
      "ACROSS"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 260
    },
    {
     "pattern": "JUMP IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 261
    },
    {
     "pattern": "JUMP FROM OBJECT",
     "objects": 1,
     "particles": [
      "FROM"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 262
    },
    {
     "pattern": "JUMP OFF OBJECT",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 263
    },
    {
     "pattern": "JUMP",
     "objects": 0,
     "particles": [],
     "action": "V-LEAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 233
    },
    {
     "pattern": "JUMP OVER OBJECT",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 234
    },
    {
     "pattern": "JUMP ACROSS OBJECT",
     "objects": 1,
     "particles": [
      "ACROSS"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 235
    },
    {
     "pattern": "JUMP IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 236
    },
    {
     "pattern": "JUMP FROM OBJECT",
     "objects": 1,
     "particles": [
      "FROM"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 237
    },
    {
     "pattern": "JUMP OFF OBJECT",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 238
    }
   ]
  },
  "KICK": {
   "verb": "KICK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "KICK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-KICK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 266
    },
    {
     "pattern": "KICK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-KICK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 241
    }
   ]
  },
  "KILL": {
   "verb": "KILL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "KILL OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 273
    },
    {
     "pattern": "KILL OBJECT (FIND VILLAIN) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-KILL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 244
    }
   ]
  },
  "STAB": {
   "verb": "STAB",
   "synonyms": [],
   "productions": [
    {
     "pattern": "STAB OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-STAB",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 277
    },
    {
     "pattern": "STAB OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 278
    }
   ]
  },
  "KISS": {
   "verb": "KISS",
   "synonyms": [],
   "productions": [
    {
     "pattern": "KISS OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-KISS",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 281
    },
    {
     "pattern": "KISS OBJECT (FIND VILLAIN) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-KISS",
     "preaction": null,
     "file": "syntax.zil",
     "line": 251
    }
   ]
  },
  "KNOCK": {
   "verb": "KNOCK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "KNOCK AT OBJECT",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-KNOCK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 283
    },
    {
     "pattern": "KNOCK ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-KNOCK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 284
    },
    {
     "pattern": "KNOCK DOWN OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 285
    },
    {
     "pattern": "KNOCK AT OBJECT",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-KNOCK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 253
    },
    {
     "pattern": "KNOCK ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-KNOCK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 254
    },
    {
     "pattern": "KNOCK DOWN OBJECT (FIND VICBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 255
    }
   ]
  },
  "LAUNCH": {
   "verb": "LAUNCH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LAUNCH OBJECT (FIND VEHBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-LAUNCH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 288
    },
    {
     "pattern": "LAUNCH OBJECT (FIND VEHBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-LAUNCH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 258
    }
   ]
  },
  "LEAN": {
   "verb": "LEAN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LEAN ON OBJECT (HELD HAVE)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LEAN-ON",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 290
    },
    {
     "pattern": "LEAN ON OBJECT (HELD HAVE)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LEAN-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 158
    }
   ]
  },
  "LEAVE": {
   "verb": "LEAVE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LEAVE",
     "objects": 0,
     "particles": [],
     "action": "V-LEAVE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 292
    },
    {
     "pattern": "LEAVE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-DROP",
     "preaction": "PRE-DROP",
     "file": "gsyntax.zil",
     "line": 293
    },
    {
     "pattern": "LEAVE",
     "objects": 0,
     "particles": [],
     "action": "V-LEAVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 260
    },
    {
     "pattern": "LEAVE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-DROP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 261
    }
   ]
  },
  "LIGHT": {
   "verb": "LIGHT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LIGHT OBJECT (FIND LIGHTBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 295
    },
    {
     "pattern": "LIGHT OBJECT (FIND LIGHTBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (FIND FLAMEBIT) (HELD CARRIED TAKE HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-BURN",
     "preaction": "PRE-BURN",
     "file": "gsyntax.zil",
     "line": 297
    },
    {
     "pattern": "LIGHT OBJECT (FIND LIGHTBIT) (HELD CARRIED ON-GROUND IN-ROOM HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 263
    },
    {
     "pattern": "LIGHT OBJECT (FIND LIGHTBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (FIND FLAMEBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-BURN",
     "preaction": "PRE-BURN",
     "file": "syntax.zil",
     "line": 267
    }
   ]
  },
  "LISTEN": {
   "verb": "LISTEN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LISTEN TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-LISTEN",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 300
    },
    {
     "pattern": "LISTEN FOR OBJECT",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-LISTEN",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 301
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
     "line": 273
    },
    {
     "pattern": "LISTEN FOR OBJECT",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-LISTEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 274
    }
   ]
  },
  "LOCK": {
   "verb": "LOCK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LOCK OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-LOCK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 303
    },
    {
     "pattern": "LOCK OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-LOCK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 276
    }
   ]
  },
  "LOOK": {
   "verb": "LOOK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LOOK",
     "objects": 0,
     "particles": [],
     "action": "V-LOOK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 306
    },
    {
     "pattern": "LOOK AROUND OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "AROUND"
     ],
     "action": "V-LOOK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 307
    },
    {
     "pattern": "LOOK UP OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-LOOK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 308
    },
    {
     "pattern": "LOOK DOWN OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-LOOK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 309
    },
    {
     "pattern": "LOOK AT OBJECT (HELD CARRIED ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-EXAMINE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 310
    },
    {
     "pattern": "LOOK ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LOOK-ON",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 311
    },
    {
     "pattern": "LOOK WITH OBJECT (HELD CARRIED ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 312
    },
    {
     "pattern": "LOOK UNDER OBJECT",
     "objects": 1,
     "particles": [
      "UNDER"
     ],
     "action": "V-LOOK-UNDER",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 313
    },
    {
     "pattern": "LOOK BEHIND OBJECT",
     "objects": 1,
     "particles": [
      "BEHIND"
     ],
     "action": "V-LOOK-BEHIND",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 314
    },
    {
     "pattern": "LOOK IN OBJECT (HELD CARRIED ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 315
    },
    {
     "pattern": "LOOK AT OBJECT (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT",
     "objects": 2,
     "particles": [
      "AT",
      "WITH"
     ],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "gsyntax.zil",
     "line": 316
    },
    {
     "pattern": "LOOK FOR OBJECT",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-FIND",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 318
    },
    {
     "pattern": "LOOK",
     "objects": 0,
     "particles": [],
     "action": "V-LOOK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 282
    },
    {
     "pattern": "LOOK AROUND OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "AROUND"
     ],
     "action": "V-LOOK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 283
    },
    {
     "pattern": "LOOK AT OBJECT (HELD CARRIED ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-EXAMINE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 284
    },
    {
     "pattern": "LOOK WITH OBJECT",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 285
    },
    {
     "pattern": "LOOK THROUGH OBJECT",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 286
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
     "line": 287
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
     "line": 288
    },
    {
     "pattern": "LOOK IN OBJECT (HELD CARRIED ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 289
    },
    {
     "pattern": "LOOK AT OBJECT (HELD CARRIED ON-GROUND IN-ROOM MANY) WITH OBJECT",
     "objects": 2,
     "particles": [
      "AT",
      "WITH"
     ],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "syntax.zil",
     "line": 290
    },
    {
     "pattern": "LOOK FOR OBJECT",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-FIND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 291
    }
   ]
  },
  "LOWER": {
   "verb": "LOWER",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LOWER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-LOWER",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 321
    },
    {
     "pattern": "LOWER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-LOWER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 298
    }
   ]
  },
  "LUBRICATE": {
   "verb": "LUBRICATE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LUBRICATE OBJECT WITH OBJECT (HELD CARRIED)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-OIL",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 323
    },
    {
     "pattern": "LUBRICATE OBJECT WITH OBJECT (HELD CARRIED)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-OIL",
     "preaction": "PRE-OIL",
     "file": "syntax.zil",
     "line": 335
    }
   ]
  },
  "MAKE": {
   "verb": "MAKE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "MAKE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-MAKE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 326
    },
    {
     "pattern": "MAKE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-MAKE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 300
    }
   ]
  },
  "MELT": {
   "verb": "MELT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "MELT OBJECT WITH OBJECT (FIND FLAMEBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-MELT",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 328
    },
    {
     "pattern": "MELT OBJECT WITH OBJECT (FIND FLAMEBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-MELT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 302
    }
   ]
  },
  "MOVE": {
   "verb": "MOVE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "MOVE OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-MOVE",
     "preaction": "PRE-MOVE",
     "file": "gsyntax.zil",
     "line": 332
    },
    {
     "pattern": "MOVE OBJECT (ON-GROUND IN-ROOM) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 333
    },
    {
     "pattern": "MOVE OBJECT (ON-GROUND IN-ROOM) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 334
    },
    {
     "pattern": "MOVE OBJECT (HELD MANY HAVE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "gsyntax.zil",
     "line": 335
    },
    {
     "pattern": "MOVE OBJECT WITH OBJECT (FIND TOOLBIT)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TURN",
     "preaction": "PRE-TURN",
     "file": "gsyntax.zil",
     "line": 336
    },
    {
     "pattern": "MOVE OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-MOVE",
     "preaction": "PRE-MOVE",
     "file": "syntax.zil",
     "line": 309
    }
   ]
  },
  "ROLL": {
   "verb": "ROLL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ROLL UP OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-MOVE",
     "preaction": "PRE-MOVE",
     "file": "gsyntax.zil",
     "line": 337
    },
    {
     "pattern": "ROLL OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-MOVE",
     "preaction": "PRE-MOVE",
     "file": "gsyntax.zil",
     "line": 338
    },
    {
     "pattern": "ROLL UP OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-MOVE",
     "preaction": "PRE-MOVE",
     "file": "syntax.zil",
     "line": 310
    }
   ]
  },
  "MUMBLE": {
   "verb": "MUMBLE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "MUMBLE",
     "objects": 0,
     "particles": [],
     "action": "V-MUMBLE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 340
    },
    {
     "pattern": "MUMBLE",
     "objects": 0,
     "particles": [],
     "action": "V-MUMBLE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 319
    }
   ]
  },
  "ODYSSEUS": {
   "verb": "ODYSSEUS",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ODYSSEUS",
     "objects": 0,
     "particles": [],
     "action": "V-ODYSSEUS",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 343
    }
   ]
  },
  "OPEN": {
   "verb": "OPEN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "OPEN OBJECT (FIND DOORBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-OPEN",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 346
    },
    {
     "pattern": "OPEN UP OBJECT (FIND DOORBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-OPEN",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 347
    },
    {
     "pattern": "OPEN OBJECT (FIND DOORBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (ON-GROUND IN-ROOM HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-OPEN",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 349
    },
    {
     "pattern": "OPEN OBJECT (FIND DOORBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-OPEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 338
    },
    {
     "pattern": "OPEN UP OBJECT (FIND DOORBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-OPEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 341
    },
    {
     "pattern": "OPEN OBJECT (FIND DOORBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (ON-GROUND IN-ROOM HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-OPEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 345
    }
   ]
  },
  "PICK": {
   "verb": "PICK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PICK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-PICK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 352
    },
    {
     "pattern": "PICK OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-PICK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 353
    },
    {
     "pattern": "PICK UP OBJECT (FIND TAKEBIT) (ON-GROUND MANY)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "gsyntax.zil",
     "line": 354
    },
    {
     "pattern": "PICK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-PICK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 351
    },
    {
     "pattern": "PICK OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-PICK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 352
    },
    {
     "pattern": "PICK UP OBJECT (FIND TAKEBIT) (ON-GROUND MANY)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 354
    }
   ]
  },
  "PLAY": {
   "verb": "PLAY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PLAY OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-PLAY",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 356
    },
    {
     "pattern": "PLAY OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-PLAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 312
    }
   ]
  },
  "PLUG": {
   "verb": "PLUG",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PLUG OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-PLUG",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 358
    },
    {
     "pattern": "PLUG OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-PLUG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 359
    }
   ]
  },
  "PLUGH": {
   "verb": "PLUGH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PLUGH",
     "objects": 0,
     "particles": [],
     "action": "V-ADVENT",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 361
    },
    {
     "pattern": "PLUGH",
     "objects": 0,
     "particles": [],
     "action": "V-ADVENT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 362
    }
   ]
  },
  "POKE": {
   "verb": "POKE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "POKE OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": "PRE-MUNG",
     "file": "gsyntax.zil",
     "line": 364
    },
    {
     "pattern": "POKE OBJECT (FIND VILLAIN) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": "PRE-MUNG",
     "file": "syntax.zil",
     "line": 365
    }
   ]
  },
  "PUNCTURE": {
   "verb": "PUNCTURE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PUNCTURE OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": "PRE-MUNG",
     "file": "gsyntax.zil",
     "line": 366
    }
   ]
  },
  "POUR": {
   "verb": "POUR",
   "synonyms": [],
   "productions": [
    {
     "pattern": "POUR OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-DROP",
     "preaction": "PRE-DROP",
     "file": "gsyntax.zil",
     "line": 369
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-DROP",
     "preaction": "PRE-DROP",
     "file": "gsyntax.zil",
     "line": 370
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-POUR-ON",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 371
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-DROP",
     "preaction": "PRE-DROP",
     "file": "gsyntax.zil",
     "line": 372
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-DROP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 372
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-DROP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 373
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-POUR-ON",
     "preaction": "PRE-POUR-ON",
     "file": "syntax.zil",
     "line": 374
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-DROP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 375
    }
   ]
  },
  "PRAY": {
   "verb": "PRAY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PRAY",
     "objects": 0,
     "particles": [],
     "action": "V-PRAY",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 375
    },
    {
     "pattern": "PRAY",
     "objects": 0,
     "particles": [],
     "action": "V-PRAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 378
    }
   ]
  },
  "PULL": {
   "verb": "PULL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PULL OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-MOVE",
     "preaction": "PRE-MOVE",
     "file": "gsyntax.zil",
     "line": 377
    },
    {
     "pattern": "PULL ON OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-MOVE",
     "preaction": "PRE-MOVE",
     "file": "gsyntax.zil",
     "line": 378
    },
    {
     "pattern": "PULL UP OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-MOVE",
     "preaction": "PRE-MOVE",
     "file": "gsyntax.zil",
     "line": 379
    },
    {
     "pattern": "PULL OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-MOVE",
     "preaction": "PRE-MOVE",
     "file": "syntax.zil",
     "line": 314
    },
    {
     "pattern": "PULL ON OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-MOVE",
     "preaction": "PRE-MOVE",
     "file": "syntax.zil",
     "line": 315
    },
    {
     "pattern": "PULL OBJECT (ON-GROUND IN-ROOM) OUT OBJECT",
     "objects": 2,
     "particles": [
      "OUT"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 316
    }
   ]
  },
  "PUMP": {
   "verb": "PUMP",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PUMP UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-PUMP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 382
    },
    {
     "pattern": "PUMP UP OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-PUMP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 383
    },
    {
     "pattern": "PUMP UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-PUMP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 380
    },
    {
     "pattern": "PUMP UP OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-PUMP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 381
    }
   ]
  },
  "PUSH": {
   "verb": "PUSH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PUSH OBJECT (IN-ROOM ON-GROUND) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 385
    },
    {
     "pattern": "PUSH OBJECT (IN-ROOM ON-GROUND) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 386
    },
    {
     "pattern": "PUSH OBJECT (IN-ROOM ON-GROUND MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-PUSH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 387
    },
    {
     "pattern": "PUSH ON OBJECT (IN-ROOM ON-GROUND MANY)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-PUSH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 388
    },
    {
     "pattern": "PUSH OBJECT WITH OBJECT (FIND TOOLBIT)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TURN",
     "preaction": "PRE-TURN",
     "file": "gsyntax.zil",
     "line": 389
    },
    {
     "pattern": "PUSH OBJECT UNDER OBJECT",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 390
    },
    {
     "pattern": "PUSH OBJECT (IN-ROOM ON-GROUND MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-PUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 383
    },
    {
     "pattern": "PUSH ON OBJECT (IN-ROOM ON-GROUND MANY)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-PUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 384
    },
    {
     "pattern": "PUSH OBJECT (IN-ROOM ON-GROUND) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 385
    },
    {
     "pattern": "PUSH OBJECT (IN-ROOM ON-GROUND) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 386
    },
    {
     "pattern": "PUSH OBJECT UNDER OBJECT",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 387
    }
   ]
  },
  "PUT": {
   "verb": "PUT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PUT OBJECT (HELD MANY HAVE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "gsyntax.zil",
     "line": 393
    },
    {
     "pattern": "PUT OBJECT (HELD MANY HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT",
     "file": "gsyntax.zil",
     "line": 394
    },
    {
     "pattern": "PUT DOWN OBJECT (HELD MANY)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-DROP",
     "preaction": "PRE-DROP",
     "file": "gsyntax.zil",
     "line": 395
    },
    {
     "pattern": "PUT OBJECT (HELD HAVE) UNDER OBJECT",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 396
    },
    {
     "pattern": "PUT OUT OBJECT (FIND ONBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE HAVE)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 397
    },
    {
     "pattern": "PUT ON OBJECT (IN-ROOM ON-GROUND CARRIED MANY)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-WEAR",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 399
    },
    {
     "pattern": "PUT OBJECT (HELD MANY HAVE) BEHIND OBJECT",
     "objects": 2,
     "particles": [
      "BEHIND"
     ],
     "action": "V-PUT-BEHIND",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 400
    },
    {
     "pattern": "PUT OBJECT (HELD MANY HAVE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 390
    },
    {
     "pattern": "PUT OBJECT (HELD MANY HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 391
    },
    {
     "pattern": "PUT DOWN OBJECT (HELD MANY)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-DROP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 392
    },
    {
     "pattern": "PUT OBJECT (HELD MANY HAVE) UNDER OBJECT",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 393
    },
    {
     "pattern": "PUT ON OBJECT (IN-ROOM ON-GROUND CARRIED MANY)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-WEAR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 394
    },
    {
     "pattern": "PUT OBJECT (HELD MANY HAVE) BEHIND OBJECT",
     "objects": 2,
     "particles": [
      "BEHIND"
     ],
     "action": "V-PUT-BEHIND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 395
    }
   ]
  },
  "RAISE": {
   "verb": "RAISE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "RAISE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-RAISE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 403
    },
    {
     "pattern": "RAISE UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-RAISE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 404
    },
    {
     "pattern": "RAISE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-RAISE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 398
    },
    {
     "pattern": "RAISE UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-RAISE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 399
    }
   ]
  },
  "RAPE": {
   "verb": "RAPE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "RAPE OBJECT (FIND ACTORBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-RAPE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 407
    },
    {
     "pattern": "RAPE OBJECT (FIND VICBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-RAPE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 402
    }
   ]
  },
  "READ": {
   "verb": "READ",
   "synonyms": [],
   "productions": [
    {
     "pattern": "READ OBJECT (FIND READBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE)",
     "objects": 1,
     "particles": [],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "gsyntax.zil",
     "line": 410
    },
    {
     "pattern": "READ FROM OBJECT (FIND READBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE)",
     "objects": 1,
     "particles": [
      "FROM"
     ],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "gsyntax.zil",
     "line": 412
    },
    {
     "pattern": "READ OBJECT (FIND READBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "gsyntax.zil",
     "line": 414
    },
    {
     "pattern": "READ OBJECT (FIND READBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-READ-PAGE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 416
    },
    {
     "pattern": "READ OBJECT (FIND READBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "syntax.zil",
     "line": 405
    },
    {
     "pattern": "READ OBJECT (FIND READBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "syntax.zil",
     "line": 408
    }
   ]
  },
  "REPENT": {
   "verb": "REPENT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "REPENT",
     "objects": 0,
     "particles": [],
     "action": "V-REPENT",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 420
    },
    {
     "pattern": "REPENT",
     "objects": 0,
     "particles": [],
     "action": "V-REPENT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 415
    }
   ]
  },
  "RING": {
   "verb": "RING",
   "synonyms": [],
   "productions": [
    {
     "pattern": "RING OBJECT (TAKE)",
     "objects": 1,
     "particles": [],
     "action": "V-RING",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 422
    },
    {
     "pattern": "RING OBJECT (TAKE) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-RING",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 423
    }
   ]
  },
  "RUB": {
   "verb": "RUB",
   "synonyms": [],
   "productions": [
    {
     "pattern": "RUB OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-RUB",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 426
    },
    {
     "pattern": "RUB OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-RUB",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 427
    },
    {
     "pattern": "RUB OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-RUB",
     "preaction": null,
     "file": "syntax.zil",
     "line": 417
    },
    {
     "pattern": "RUB OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-RUB",
     "preaction": null,
     "file": "syntax.zil",
     "line": 418
    }
   ]
  },
  "TALK": {
   "verb": "TALK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TALK TO OBJECT (FIND ACTORBIT) (IN-ROOM)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-TELL",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 430
    }
   ]
  },
  "SAY": {
   "verb": "SAY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SAY",
     "objects": 0,
     "particles": [],
     "action": "V-SAY",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 431
    },
    {
     "pattern": "SAY TO OBJECT (FIND VICBIT) (IN-ROOM)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-TELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 504
    },
    {
     "pattern": "SAY",
     "objects": 0,
     "particles": [],
     "action": "V-SAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 505
    }
   ]
  },
  "SEARCH": {
   "verb": "SEARCH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SEARCH OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SEARCH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 433
    },
    {
     "pattern": "SEARCH IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-SEARCH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 434
    },
    {
     "pattern": "SEARCH FOR OBJECT",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-FIND",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 435
    },
    {
     "pattern": "SEARCH OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SEARCH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 294
    },
    {
     "pattern": "SEARCH IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-SEARCH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 295
    },
    {
     "pattern": "SEARCH FOR OBJECT",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-FIND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 296
    }
   ]
  },
  "SEND": {
   "verb": "SEND",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SEND FOR OBJECT",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-SEND",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 437
    },
    {
     "pattern": "SEND FOR OBJECT",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-SEND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 424
    }
   ]
  },
  "SHAKE": {
   "verb": "SHAKE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SHAKE OBJECT (HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-SHAKE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 439
    },
    {
     "pattern": "SHAKE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SHAKE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 426
    }
   ]
  },
  "SKIP": {
   "verb": "SKIP",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SKIP",
     "objects": 0,
     "particles": [],
     "action": "V-SKIP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 441
    },
    {
     "pattern": "SKIP",
     "objects": 0,
     "particles": [],
     "action": "V-SKIP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 433
    }
   ]
  },
  "SLIDE": {
   "verb": "SLIDE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SLIDE OBJECT UNDER OBJECT",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 445
    },
    {
     "pattern": "SLIDE OBJECT (IN-ROOM ON-GROUND) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 446
    },
    {
     "pattern": "SLIDE OBJECT (IN-ROOM ON-GROUND) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 447
    },
    {
     "pattern": "SLIDE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-PUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 428
    },
    {
     "pattern": "SLIDE OBJECT UNDER OBJECT",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 429
    },
    {
     "pattern": "SLIDE OBJECT (IN-ROOM ON-GROUND) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 430
    },
    {
     "pattern": "SLIDE OBJECT (IN-ROOM ON-GROUND) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 431
    }
   ]
  },
  "SMELL": {
   "verb": "SMELL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SMELL OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SMELL",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 449
    },
    {
     "pattern": "SMELL OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SMELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 436
    }
   ]
  },
  "SPIN": {
   "verb": "SPIN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SPIN OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SPIN",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 452
    },
    {
     "pattern": "SPIN OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SPIN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 439
    }
   ]
  },
  "SPRAY": {
   "verb": "SPRAY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SPRAY OBJECT ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-SPRAY",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 454
    },
    {
     "pattern": "SPRAY OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-SSPRAY",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 455
    },
    {
     "pattern": "SPRAY OBJECT ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-SPRAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 441
    },
    {
     "pattern": "SPRAY OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-SSPRAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 442
    }
   ]
  },
  "SQUEEZE": {
   "verb": "SQUEEZE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SQUEEZE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SQUEEZE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 457
    },
    {
     "pattern": "SQUEEZE OBJECT ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "gsyntax.zil",
     "line": 458
    },
    {
     "pattern": "SQUEEZE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SQUEEZE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 444
    },
    {
     "pattern": "SQUEEZE OBJECT ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 445
    }
   ]
  },
  "STAND": {
   "verb": "STAND",
   "synonyms": [],
   "productions": [
    {
     "pattern": "STAND",
     "objects": 0,
     "particles": [],
     "action": "V-STAND",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 460
    },
    {
     "pattern": "STAND UP OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-STAND",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 461
    },
    {
     "pattern": "STAND",
     "objects": 0,
     "particles": [],
     "action": "V-STAND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 447
    },
    {
     "pattern": "STAND UP OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-STAND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 448
    }
   ]
  },
  "STAY": {
   "verb": "STAY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "STAY",
     "objects": 0,
     "particles": [],
     "action": "V-STAY",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 463
    },
    {
     "pattern": "STAY",
     "objects": 0,
     "particles": [],
     "action": "V-STAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 450
    }
   ]
  },
  "STRIKE": {
   "verb": "STRIKE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "STRIKE OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED ON-GROUND IN-ROOM HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 465
    },
    {
     "pattern": "STRIKE OBJECT (ON-GROUND IN-ROOM HELD CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-STRIKE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 467
    },
    {
     "pattern": "STRIKE OBJECT (FIND VICBIT) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED ON-GROUND IN-ROOM HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 452
    },
    {
     "pattern": "STRIKE OBJECT (FIND VICBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 457
    },
    {
     "pattern": "STRIKE OBJECT (ON-GROUND IN-ROOM HELD CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 460
    }
   ]
  },
  "SWIM": {
   "verb": "SWIM",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SWIM",
     "objects": 0,
     "particles": [],
     "action": "V-SWIM",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 469
    },
    {
     "pattern": "SWIM IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-SWIM",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 470
    },
    {
     "pattern": "SWIM ACROSS OBJECT",
     "objects": 1,
     "particles": [
      "ACROSS"
     ],
     "action": "V-SWIM",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 471
    },
    {
     "pattern": "SWIM",
     "objects": 0,
     "particles": [],
     "action": "V-SWIM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 462
    },
    {
     "pattern": "SWIM IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-SWIM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 463
    }
   ]
  },
  "SWING": {
   "verb": "SWING",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SWING OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-SWING",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 474
    },
    {
     "pattern": "SWING OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE) AT OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-SWING",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 475
    },
    {
     "pattern": "SWING OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-SWING",
     "preaction": null,
     "file": "syntax.zil",
     "line": 466
    },
    {
     "pattern": "SWING OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE) AT OBJECT (FIND VILLAIN) (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-SWING",
     "preaction": null,
     "file": "syntax.zil",
     "line": 469
    }
   ]
  },
  "TAKE": {
   "verb": "TAKE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TAKE OBJECT (FIND TAKEBIT) (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "gsyntax.zil",
     "line": 479
    },
    {
     "pattern": "TAKE IN OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-BOARD",
     "preaction": "PRE-BOARD",
     "file": "gsyntax.zil",
     "line": 480
    },
    {
     "pattern": "TAKE OUT OBJECT (FIND RMUNGBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-DISEMBARK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 481
    },
    {
     "pattern": "TAKE ON OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-CLIMB-ON",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 482
    },
    {
     "pattern": "TAKE UP OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-STAND",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 483
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEBIT) (CARRIED IN-ROOM MANY) OUT OBJECT",
     "objects": 2,
     "particles": [
      "OUT"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "gsyntax.zil",
     "line": 484
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEBIT) (CARRIED IN-ROOM MANY) OFF OBJECT",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "gsyntax.zil",
     "line": 486
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEBIT) (IN-ROOM CARRIED MANY) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "gsyntax.zil",
     "line": 488
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEBIT) (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 476
    },
    {
     "pattern": "TAKE IN OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-BOARD",
     "preaction": "PRE-BOARD",
     "file": "syntax.zil",
     "line": 480
    },
    {
     "pattern": "TAKE OUT OBJECT (FIND VEHBIT) (ON-GROUND)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-DISEMBARK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 481
    },
    {
     "pattern": "TAKE ON OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-CLIMB-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 482
    },
    {
     "pattern": "TAKE UP OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-STAND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 483
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEBIT) (CARRIED IN-ROOM MANY) OUT OBJECT",
     "objects": 2,
     "particles": [
      "OUT"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 484
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEBIT) (CARRIED IN-ROOM MANY) OFF OBJECT",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 489
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEBIT) (IN-ROOM CARRIED MANY) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 494
    }
   ]
  },
  "TELL": {
   "verb": "TELL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TELL OBJECT (FIND ACTORBIT) (IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-TELL",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 492
    },
    {
     "pattern": "TELL OBJECT (FIND ACTORBIT) (IN-ROOM) ABOUT OBJECT",
     "objects": 2,
     "particles": [
      "ABOUT"
     ],
     "action": "V-TELL",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 493
    },
    {
     "pattern": "TELL OBJECT (FIND VICBIT) (IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-TELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 501
    }
   ]
  },
  "THROW": {
   "verb": "THROW",
   "synonyms": [],
   "productions": [
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) AT OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-THROW",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 496
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) WITH OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-THROW",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 498
    },
    {
     "pattern": "THROW OBJECT OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-OVERBOARD",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 500
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "gsyntax.zil",
     "line": 501
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT",
     "file": "gsyntax.zil",
     "line": 502
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) OFF OBJECT",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-THROW-OFF",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 503
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-THROW-OFF",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 504
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) OFF OBJECT",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-THROW-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 511
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-THROW-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 512
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) AT OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-THROW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 513
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) WITH OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-THROW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 518
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 524
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 525
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
     "action": "V-TIE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 507
    },
    {
     "pattern": "TIE UP OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (ON-GROUND IN-ROOM HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-TIE-UP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 508
    },
    {
     "pattern": "TIE OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-TIE",
     "preaction": "PRE-TIE",
     "file": "syntax.zil",
     "line": 528
    },
    {
     "pattern": "TIE UP OBJECT (FIND VICBIT) (ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (ON-GROUND IN-ROOM HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-TIE-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 529
    }
   ]
  },
  "TREASURE": {
   "verb": "TREASURE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TREASURE",
     "objects": 0,
     "particles": [],
     "action": "V-TREASURE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 512
    }
   ]
  },
  "TURN": {
   "verb": "TURN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TURN OBJECT (FIND TURNBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (FIND RMUNGBIT)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TURN",
     "preaction": "PRE-TURN",
     "file": "gsyntax.zil",
     "line": 515
    },
    {
     "pattern": "TURN ON OBJECT (FIND LIGHTBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 517
    },
    {
     "pattern": "TURN ON OBJECT WITH OBJECT (HAVE)",
     "objects": 2,
     "particles": [
      "ON",
      "WITH"
     ],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 519
    },
    {
     "pattern": "TURN OFF OBJECT (FIND ONBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE HAVE)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 520
    },
    {
     "pattern": "TURN OBJECT (FIND TURNBIT) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-TURN",
     "preaction": "PRE-TURN",
     "file": "gsyntax.zil",
     "line": 522
    },
    {
     "pattern": "TURN OBJECT (FIND TURNBIT) FOR OBJECT",
     "objects": 2,
     "particles": [
      "FOR"
     ],
     "action": "V-TURN",
     "preaction": "PRE-TURN",
     "file": "gsyntax.zil",
     "line": 523
    },
    {
     "pattern": "TURN OBJECT (FIND TURNBIT) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-TURN",
     "preaction": "PRE-TURN",
     "file": "syntax.zil",
     "line": 536
    },
    {
     "pattern": "TURN OBJECT (FIND TURNBIT) FOR OBJECT",
     "objects": 2,
     "particles": [
      "FOR"
     ],
     "action": "V-TURN",
     "preaction": "PRE-TURN",
     "file": "syntax.zil",
     "line": 537
    },
    {
     "pattern": "TURN OBJECT (FIND TURNBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-TURN",
     "preaction": "PRE-TURN",
     "file": "syntax.zil",
     "line": 538
    },
    {
     "pattern": "TURN OBJECT (FIND TURNBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (ON-GROUND IN-ROOM HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TURN",
     "preaction": "PRE-TURN",
     "file": "syntax.zil",
     "line": 539
    },
    {
     "pattern": "TURN ON OBJECT (FIND LIGHTBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 544
    },
    {
     "pattern": "TURN OFF OBJECT (FIND LIGHTBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 547
    }
   ]
  },
  "UNLOCK": {
   "verb": "UNLOCK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "UNLOCK OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-UNLOCK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 527
    },
    {
     "pattern": "UNLOCK OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-UNLOCK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 552
    }
   ]
  },
  "UNTIE": {
   "verb": "UNTIE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "UNTIE OBJECT (ON-GROUND IN-ROOM HELD CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-UNTIE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 530
    },
    {
     "pattern": "UNTIE OBJECT (ON-GROUND IN-ROOM HELD CARRIED) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-UNTIE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 531
    },
    {
     "pattern": "UNTIE OBJECT (ON-GROUND IN-ROOM HELD CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-UNTIE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 558
    },
    {
     "pattern": "UNTIE OBJECT (ON-GROUND IN-ROOM HELD CARRIED) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-UNTIE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 561
    }
   ]
  },
  "WAIT": {
   "verb": "WAIT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WAIT",
     "objects": 0,
     "particles": [],
     "action": "V-WAIT",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 535
    },
    {
     "pattern": "WAIT",
     "objects": 0,
     "particles": [],
     "action": "V-WAIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 568
    }
   ]
  },
  "WAKE": {
   "verb": "WAKE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WAKE OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-ALARM",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 538
    },
    {
     "pattern": "WAKE UP OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-ALARM",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 539
    },
    {
     "pattern": "WAKE OBJECT (FIND VICBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-ALARM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 573
    },
    {
     "pattern": "WAKE UP OBJECT (FIND VICBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-ALARM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 574
    }
   ]
  },
  "WALK": {
   "verb": "WALK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WALK",
     "objects": 0,
     "particles": [],
     "action": "V-WALK-AROUND",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 542
    },
    {
     "pattern": "WALK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WALK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 543
    },
    {
     "pattern": "WALK AWAY OBJECT",
     "objects": 1,
     "particles": [
      "AWAY"
     ],
     "action": "V-WALK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 544
    },
    {
     "pattern": "WALK IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 545
    },
    {
     "pattern": "WALK WITH OBJECT",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 546
    },
    {
     "pattern": "WALK ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 547
    },
    {
     "pattern": "WALK OVER OBJECT",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 548
    },
    {
     "pattern": "WALK TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-WALK-TO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 549
    },
    {
     "pattern": "WALK AROUND OBJECT",
     "objects": 1,
     "particles": [
      "AROUND"
     ],
     "action": "V-WALK-AROUND",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 550
    },
    {
     "pattern": "WALK UP OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-CLIMB-UP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 551
    },
    {
     "pattern": "WALK DOWN OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 552
    },
    {
     "pattern": "WALK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WALK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 577
    },
    {
     "pattern": "WALK IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 578
    },
    {
     "pattern": "WALK ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 579
    },
    {
     "pattern": "WALK OVER OBJECT",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 580
    },
    {
     "pattern": "WALK WITH OBJECT",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 581
    },
    {
     "pattern": "WALK AROUND OBJECT",
     "objects": 1,
     "particles": [
      "AROUND"
     ],
     "action": "V-WALK-AROUND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 582
    },
    {
     "pattern": "WALK UP OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-CLIMB-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 583
    },
    {
     "pattern": "WALK DOWN OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 584
    },
    {
     "pattern": "WALK TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-WALK-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 585
    }
   ]
  },
  "WAVE": {
   "verb": "WAVE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WAVE OBJECT (HELD CARRIED TAKE HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-WAVE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 555
    },
    {
     "pattern": "WAVE OBJECT (HELD CARRIED TAKE HAVE) AT OBJECT",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-WAVE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 556
    },
    {
     "pattern": "WAVE AT OBJECT",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-WAVE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 557
    },
    {
     "pattern": "WAVE OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-WAVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 588
    },
    {
     "pattern": "WAVE OBJECT (HELD CARRIED) AT OBJECT",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-WAVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 589
    }
   ]
  },
  "WEAR": {
   "verb": "WEAR",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WEAR OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WEAR",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 560
    },
    {
     "pattern": "WEAR OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WEAR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 592
    }
   ]
  },
  "WIN": {
   "verb": "WIN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WIN",
     "objects": 0,
     "particles": [],
     "action": "V-WIN",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 562
    },
    {
     "pattern": "WIN",
     "objects": 0,
     "particles": [],
     "action": "V-WIN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 594
    }
   ]
  },
  "WIND": {
   "verb": "WIND",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WIND OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WIND",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 565
    },
    {
     "pattern": "WIND UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-WIND",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 566
    },
    {
     "pattern": "WIND OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WIND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 597
    },
    {
     "pattern": "WIND UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-WIND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 598
    }
   ]
  },
  "WISH": {
   "verb": "WISH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WISH",
     "objects": 0,
     "particles": [],
     "action": "V-WISH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 568
    }
   ]
  },
  "YELL": {
   "verb": "YELL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "YELL",
     "objects": 0,
     "particles": [],
     "action": "V-YELL",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 570
    },
    {
     "pattern": "YELL",
     "objects": 0,
     "particles": [],
     "action": "V-YELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 600
    }
   ]
  },
  "ZORK": {
   "verb": "ZORK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ZORK",
     "objects": 0,
     "particles": [],
     "action": "V-ZORK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 573
    },
    {
     "pattern": "ZORK",
     "objects": 0,
     "particles": [],
     "action": "V-ZORK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 603
    }
   ]
  },
  "AGAIN": {
   "verb": "AGAIN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "AGAIN",
     "objects": 0,
     "particles": [],
     "action": "V-AGAIN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 63
    }
   ]
  },
  "$WAIT": {
   "verb": "$WAIT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$WAIT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-$WAIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 571
    }
   ]
  },
  "IS": {
   "verb": "IS",
   "synonyms": [],
   "productions": [
    {
     "pattern": "IS OBJECT IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-IS-IN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 611
    },
    {
     "pattern": "IS OBJECT ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-IS-IN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 612
    }
   ]
  }
 },
 "vocab": {
  "VERBOSE": {
   "word": "VERBOSE",
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
  "SUPER": {
   "word": "SUPER",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
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
  "INVENTORY": {
   "word": "INVENTORY",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "QUIT": {
   "word": "QUIT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
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
  "SCORE": {
   "word": "SCORE",
   "roles": [
    {
     "kind": "verb",
     "of": null
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
  "$VERIFY": {
   "word": "$VERIFY",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "#RANDOM": {
   "word": "#RANDOM",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "#COMMAND": {
   "word": "#COMMAND",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "#RECORD": {
   "word": "#RECORD",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "#UNRECORD": {
   "word": "#UNRECORD",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "ACTIVATE": {
   "word": "ACTIVATE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "ANSWER": {
   "word": "ANSWER",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "APPLY": {
   "word": "APPLY",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "TO": {
   "word": "TO",
   "roles": [
    {
     "kind": "particle",
     "of": "APPLY"
    },
    {
     "kind": "particle",
     "of": "GIVE"
    },
    {
     "kind": "particle",
     "of": "LISTEN"
    },
    {
     "kind": "particle",
     "of": "MOVE"
    },
    {
     "kind": "particle",
     "of": "PUSH"
    },
    {
     "kind": "particle",
     "of": "TALK"
    },
    {
     "kind": "particle",
     "of": "SAY"
    },
    {
     "kind": "particle",
     "of": "SLIDE"
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
    }
   ]
  },
  "ATTACK": {
   "word": "ATTACK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "WITH": {
   "word": "WITH",
   "roles": [
    {
     "kind": "particle",
     "of": "ATTACK"
    },
    {
     "kind": "particle",
     "of": "BLOW"
    },
    {
     "kind": "particle",
     "of": "BRUSH"
    },
    {
     "kind": "particle",
     "of": "BURN"
    },
    {
     "kind": "particle",
     "of": "CLIMB"
    },
    {
     "kind": "particle",
     "of": "CUT"
    },
    {
     "kind": "particle",
     "of": "DESTROY"
    },
    {
     "kind": "particle",
     "of": "DIG"
    },
    {
     "kind": "particle",
     "of": "FILL"
    },
    {
     "kind": "particle",
     "of": "INFLAT"
    },
    {
     "kind": "particle",
     "of": "KILL"
    },
    {
     "kind": "particle",
     "of": "STAB"
    },
    {
     "kind": "particle",
     "of": "LIGHT"
    },
    {
     "kind": "particle",
     "of": "LOCK"
    },
    {
     "kind": "particle",
     "of": "LOOK"
    },
    {
     "kind": "particle",
     "of": "LUBRICATE"
    },
    {
     "kind": "particle",
     "of": "MELT"
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
     "of": "PICK"
    },
    {
     "kind": "particle",
     "of": "PLUG"
    },
    {
     "kind": "particle",
     "of": "POKE"
    },
    {
     "kind": "particle",
     "of": "PUNCTURE"
    },
    {
     "kind": "particle",
     "of": "PUMP"
    },
    {
     "kind": "particle",
     "of": "PUSH"
    },
    {
     "kind": "particle",
     "of": "READ"
    },
    {
     "kind": "particle",
     "of": "RING"
    },
    {
     "kind": "particle",
     "of": "RUB"
    },
    {
     "kind": "particle",
     "of": "SPRAY"
    },
    {
     "kind": "particle",
     "of": "STRIKE"
    },
    {
     "kind": "particle",
     "of": "THROW"
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
     "of": "UNLOCK"
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
  "BACK": {
   "word": "BACK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "BLAST": {
   "word": "BLAST",
   "roles": [
    {
     "kind": "verb",
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
  "OUT": {
   "word": "OUT",
   "roles": [
    {
     "kind": "particle",
     "of": "BLOW"
    },
    {
     "kind": "particle",
     "of": "EXORCISE"
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
  "UP": {
   "word": "UP",
   "roles": [
    {
     "kind": "particle",
     "of": "BLOW"
    },
    {
     "kind": "particle",
     "of": "CLIMB"
    },
    {
     "kind": "particle",
     "of": "LOOK"
    },
    {
     "kind": "particle",
     "of": "ROLL"
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
     "of": "PULL"
    },
    {
     "kind": "particle",
     "of": "PUMP"
    },
    {
     "kind": "particle",
     "of": "RAISE"
    },
    {
     "kind": "particle",
     "of": "STAND"
    },
    {
     "kind": "particle",
     "of": "TAKE"
    },
    {
     "kind": "particle",
     "of": "TIE"
    },
    {
     "kind": "particle",
     "of": "WAKE"
    },
    {
     "kind": "particle",
     "of": "WALK"
    },
    {
     "kind": "particle",
     "of": "WIND"
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
     "of": "BLOW"
    },
    {
     "kind": "particle",
     "of": "CLIMB"
    },
    {
     "kind": "particle",
     "of": "DESTROY"
    },
    {
     "kind": "particle",
     "of": "DIG"
    },
    {
     "kind": "particle",
     "of": "DROP"
    },
    {
     "kind": "particle",
     "of": "EXAMINE"
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
     "of": "MOVE"
    },
    {
     "kind": "particle",
     "of": "POUR"
    },
    {
     "kind": "particle",
     "of": "PUT"
    },
    {
     "kind": "particle",
     "of": "SEARCH"
    },
    {
     "kind": "particle",
     "of": "SWIM"
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
     "kind": "particle",
     "of": "IS"
    },
    {
     "kind": "direction",
     "of": null
    }
   ]
  },
  "BOARD": {
   "word": "BOARD",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "BRUSH": {
   "word": "BRUSH",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "BUG": {
   "word": "BUG",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "BURN": {
   "word": "BURN",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "DOWN": {
   "word": "DOWN",
   "roles": [
    {
     "kind": "particle",
     "of": "BURN"
    },
    {
     "kind": "particle",
     "of": "CLIMB"
    },
    {
     "kind": "particle",
     "of": "DESTROY"
    },
    {
     "kind": "particle",
     "of": "DROP"
    },
    {
     "kind": "particle",
     "of": "KNOCK"
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
     "of": "WALK"
    },
    {
     "kind": "direction",
     "of": null
    }
   ]
  },
  "CHOMP": {
   "word": "CHOMP",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "CLIMB": {
   "word": "CLIMB",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "ON": {
   "word": "ON",
   "roles": [
    {
     "kind": "particle",
     "of": "CLIMB"
    },
    {
     "kind": "particle",
     "of": "DROP"
    },
    {
     "kind": "particle",
     "of": "EXAMINE"
    },
    {
     "kind": "particle",
     "of": "KNOCK"
    },
    {
     "kind": "particle",
     "of": "LEAN"
    },
    {
     "kind": "particle",
     "of": "LOOK"
    },
    {
     "kind": "particle",
     "of": "POUR"
    },
    {
     "kind": "particle",
     "of": "PULL"
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
     "of": "SPRAY"
    },
    {
     "kind": "particle",
     "of": "SQUEEZE"
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
     "kind": "particle",
     "of": "WALK"
    },
    {
     "kind": "particle",
     "of": "IS"
    },
    {
     "kind": "word",
     "of": null
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
  "COMMAND": {
   "word": "COMMAND",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "COUNT": {
   "word": "COUNT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "CROSS": {
   "word": "CROSS",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "direction",
     "of": null
    }
   ]
  },
  "CUT": {
   "word": "CUT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "CURSE": {
   "word": "CURSE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "DEFLATE": {
   "word": "DEFLATE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "DESTROY": {
   "word": "DESTROY",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "DIG": {
   "word": "DIG",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "DISEMBARK": {
   "word": "DISEMBARK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "DISENCHANT": {
   "word": "DISENCHANT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "DRINK": {
   "word": "DRINK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "FROM": {
   "word": "FROM",
   "roles": [
    {
     "kind": "particle",
     "of": "DRINK"
    },
    {
     "kind": "particle",
     "of": "JUMP"
    },
    {
     "kind": "particle",
     "of": "POUR"
    },
    {
     "kind": "particle",
     "of": "READ"
    },
    {
     "kind": "particle",
     "of": "TAKE"
    },
    {
     "kind": "particle",
     "of": "UNTIE"
    }
   ]
  },
  "DROP": {
   "word": "DROP",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "EAT": {
   "word": "EAT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "ECHO": {
   "word": "ECHO",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "ENCHANT": {
   "word": "ENCHANT",
   "roles": [
    {
     "kind": "verb",
     "of": null
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
  "EXIT": {
   "word": "EXIT",
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
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "EXORCISE": {
   "word": "EXORCISE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "AWAY": {
   "word": "AWAY",
   "roles": [
    {
     "kind": "particle",
     "of": "EXORCISE"
    },
    {
     "kind": "particle",
     "of": "WALK"
    }
   ]
  },
  "EXTINGUISH": {
   "word": "EXTINGUISH",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "FILL": {
   "word": "FILL",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "FIND": {
   "word": "FIND",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
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
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "FROBOZZ": {
   "word": "FROBOZZ",
   "roles": [
    {
     "kind": "verb",
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
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "HATCH": {
   "word": "HATCH",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "HELLO": {
   "word": "HELLO",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "INCANT": {
   "word": "INCANT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "INFLAT": {
   "word": "INFLAT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "JUMP": {
   "word": "JUMP",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "OVER": {
   "word": "OVER",
   "roles": [
    {
     "kind": "particle",
     "of": "JUMP"
    },
    {
     "kind": "particle",
     "of": "THROW"
    },
    {
     "kind": "particle",
     "of": "WALK"
    }
   ]
  },
  "ACROSS": {
   "word": "ACROSS",
   "roles": [
    {
     "kind": "particle",
     "of": "JUMP"
    },
    {
     "kind": "particle",
     "of": "SWIM"
    }
   ]
  },
  "OFF": {
   "word": "OFF",
   "roles": [
    {
     "kind": "particle",
     "of": "JUMP"
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
    }
   ]
  },
  "KICK": {
   "word": "KICK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "KILL": {
   "word": "KILL",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "STAB": {
   "word": "STAB",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word-synonym",
     "of": "KILL"
    }
   ]
  },
  "KISS": {
   "word": "KISS",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "KNOCK": {
   "word": "KNOCK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "AT": {
   "word": "AT",
   "roles": [
    {
     "kind": "particle",
     "of": "KNOCK"
    },
    {
     "kind": "particle",
     "of": "LOOK"
    },
    {
     "kind": "particle",
     "of": "SWING"
    },
    {
     "kind": "particle",
     "of": "THROW"
    },
    {
     "kind": "particle",
     "of": "WAVE"
    }
   ]
  },
  "LAUNCH": {
   "word": "LAUNCH",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "LEAN": {
   "word": "LEAN",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "LEAVE": {
   "word": "LEAVE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "LIGHT": {
   "word": "LIGHT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "BEAM"
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
  "FOR": {
   "word": "FOR",
   "roles": [
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
     "of": "SEARCH"
    },
    {
     "kind": "particle",
     "of": "SEND"
    },
    {
     "kind": "particle",
     "of": "TURN"
    }
   ]
  },
  "LOCK": {
   "word": "LOCK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "LOOK": {
   "word": "LOOK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
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
     "of": "WALK"
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
     "of": "PUSH"
    },
    {
     "kind": "particle",
     "of": "PUT"
    },
    {
     "kind": "particle",
     "of": "SLIDE"
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
     "of": "PUT"
    }
   ]
  },
  "THROUGH": {
   "word": "THROUGH",
   "roles": [
    {
     "kind": "particle",
     "of": "LOOK"
    },
    {
     "kind": "word-synonym",
     "of": "WITH"
    }
   ]
  },
  "LOWER": {
   "word": "LOWER",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "LUBRICATE": {
   "word": "LUBRICATE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "MAKE": {
   "word": "MAKE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "MELT": {
   "word": "MELT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
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
  "ROLL": {
   "word": "ROLL",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "MUMBLE": {
   "word": "MUMBLE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "ODYSSEUS": {
   "word": "ODYSSEUS",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
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
  "PLAY": {
   "word": "PLAY",
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
     "kind": "word",
     "of": null
    }
   ]
  },
  "PLUGH": {
   "word": "PLUGH",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "POKE": {
   "word": "POKE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "PUNCTURE": {
   "word": "PUNCTURE",
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
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "PRAY": {
   "word": "PRAY",
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
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "PUMP": {
   "word": "PUMP",
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
    },
    {
     "kind": "word",
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
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "RAISE": {
   "word": "RAISE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "RAPE": {
   "word": "RAPE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
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
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "REPENT": {
   "word": "REPENT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "RING": {
   "word": "RING",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    },
    {
     "kind": "noun",
     "of": "RING"
    }
   ]
  },
  "RUB": {
   "word": "RUB",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
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
    },
    {
     "kind": "word-synonym",
     "of": "SAY"
    }
   ]
  },
  "SAY": {
   "word": "SAY",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "SEARCH": {
   "word": "SEARCH",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SEND": {
   "word": "SEND",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SHAKE": {
   "word": "SHAKE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SKIP": {
   "word": "SKIP",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
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
  "SMELL": {
   "word": "SMELL",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "SPIN": {
   "word": "SPIN",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SPRAY": {
   "word": "SPRAY",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SQUEEZE": {
   "word": "SQUEEZE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "STAND": {
   "word": "STAND",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "STAY": {
   "word": "STAY",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "STRIKE": {
   "word": "STRIKE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SWIM": {
   "word": "SWIM",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "SWING": {
   "word": "SWING",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "TAKE": {
   "word": "TAKE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "TELL": {
   "word": "TELL",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "ABOUT": {
   "word": "ABOUT",
   "roles": [
    {
     "kind": "particle",
     "of": "TELL"
    }
   ]
  },
  "THROW": {
   "word": "THROW",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
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
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "TREASURE": {
   "word": "TREASURE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    },
    {
     "kind": "noun",
     "of": "VALUABLES"
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
     "kind": "word",
     "of": null
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
  "UNTIE": {
   "word": "UNTIE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
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
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "WAKE": {
   "word": "WAKE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "WALK": {
   "word": "WALK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "WAVE": {
   "word": "WAVE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
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
  "WIN": {
   "word": "WIN",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "WIND": {
   "word": "WIND",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "WISH": {
   "word": "WISH",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "YELL": {
   "word": "YELL",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "ZORK": {
   "word": "ZORK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "AGAIN": {
   "word": "AGAIN",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    },
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "$WAIT": {
   "word": "$WAIT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "IS": {
   "word": "IS",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "buzzword",
     "of": null
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
  "THRU": {
   "word": "THRU",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WITH"
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
  "INTO": {
   "word": "INTO",
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
  "UNDERNEATH": {
   "word": "UNDERNEATH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "UNDER"
    }
   ]
  },
  "BENEATH": {
   "word": "BENEATH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "UNDER"
    }
   ]
  },
  "BELOW": {
   "word": "BELOW",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "UNDER"
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
     "kind": "adjective",
     "of": "WOODEN-DOOR"
    },
    {
     "kind": "adjective",
     "of": "NORTH-WALL"
    },
    {
     "kind": "adjective",
     "of": "CPNWL"
    }
   ]
  },
  "N": {
   "word": "N",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "NORTH"
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
     "kind": "adjective",
     "of": "SOUTH-WALL"
    },
    {
     "kind": "adjective",
     "of": "CPSWL"
    }
   ]
  },
  "S": {
   "word": "S",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "SOUTH"
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
     "kind": "adjective",
     "of": "JEWEL-DOOR"
    },
    {
     "kind": "adjective",
     "of": "EAST-WALL"
    },
    {
     "kind": "adjective",
     "of": "CPEWL"
    }
   ]
  },
  "E": {
   "word": "E",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "EAST"
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
     "kind": "adjective",
     "of": "WEST-WALL"
    },
    {
     "kind": "adjective",
     "of": "CPWWL"
    }
   ]
  },
  "W": {
   "word": "W",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "WEST"
    }
   ]
  },
  "D": {
   "word": "D",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "DOWN"
    }
   ]
  },
  "U": {
   "word": "U",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "UP"
    }
   ]
  },
  "NW": {
   "word": "NW",
   "roles": [
    {
     "kind": "direction",
     "of": null
    }
   ]
  },
  "NORTHWEST": {
   "word": "NORTHWEST",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "NW"
    }
   ]
  },
  "NE": {
   "word": "NE",
   "roles": [
    {
     "kind": "direction",
     "of": null
    }
   ]
  },
  "NORTHE": {
   "word": "NORTHE",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "NE"
    },
    {
     "kind": "adjective",
     "of": "NORTH-WALL"
    }
   ]
  },
  "SW": {
   "word": "SW",
   "roles": [
    {
     "kind": "direction",
     "of": null
    }
   ]
  },
  "SOUTHWEST": {
   "word": "SOUTHWEST",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "SW"
    }
   ]
  },
  "SE": {
   "word": "SE",
   "roles": [
    {
     "kind": "direction",
     "of": null
    }
   ]
  },
  "SOUTHE": {
   "word": "SOUTHE",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "SE"
    },
    {
     "kind": "adjective",
     "of": "SOUTH-WALL"
    }
   ]
  },
  "SUPERBRIEF": {
   "word": "SUPERBRIEF",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SUPER"
    }
   ]
  },
  "I": {
   "word": "I",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "INVENTORY"
    }
   ]
  },
  "Q": {
   "word": "Q",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "QUIT"
    }
   ]
  },
  "REPLY": {
   "word": "REPLY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ANSWER"
    }
   ]
  },
  "FIGHT": {
   "word": "FIGHT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ATTACK"
    }
   ]
  },
  "HURT": {
   "word": "HURT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ATTACK"
    }
   ]
  },
  "INJURE": {
   "word": "INJURE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ATTACK"
    }
   ]
  },
  "HIT": {
   "word": "HIT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ATTACK"
    }
   ]
  },
  "CLEAN": {
   "word": "CLEAN",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "BRUSH"
    }
   ]
  },
  "INCINERATE": {
   "word": "INCINERATE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "BURN"
    }
   ]
  },
  "IGNITE": {
   "word": "IGNITE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "BURN"
    }
   ]
  },
  "LOSE": {
   "word": "LOSE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CHOMP"
    }
   ]
  },
  "BARF": {
   "word": "BARF",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CHOMP"
    }
   ]
  },
  "SIT": {
   "word": "SIT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CLIMB"
    }
   ]
  },
  "FORD": {
   "word": "FORD",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "CROSS"
    }
   ]
  },
  "SLICE": {
   "word": "SLICE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CUT"
    }
   ]
  },
  "PIERCE": {
   "word": "PIERCE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CUT"
    }
   ]
  },
  "SHIT": {
   "word": "SHIT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CURSE"
    }
   ]
  },
  "FUCK": {
   "word": "FUCK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CURSE"
    }
   ]
  },
  "DAMN": {
   "word": "DAMN",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CURSE"
    }
   ]
  },
  "DAMAGE": {
   "word": "DAMAGE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "DESTROY"
    }
   ]
  },
  "BREAK": {
   "word": "BREAK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "DESTROY"
    }
   ]
  },
  "BLOCK": {
   "word": "BLOCK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "DESTROY"
    }
   ]
  },
  "SMASH": {
   "word": "SMASH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "DESTROY"
    }
   ]
  },
  "IMBIBE": {
   "word": "IMBIBE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "DRINK"
    }
   ]
  },
  "SWALLOW": {
   "word": "SWALLOW",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "DRINK"
    }
   ]
  },
  "CONSUME": {
   "word": "CONSUME",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EAT"
    }
   ]
  },
  "TASTE": {
   "word": "TASTE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EAT"
    }
   ]
  },
  "BITE": {
   "word": "BITE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EAT"
    },
    {
     "kind": "word-synonym",
     "of": "KICK"
    }
   ]
  },
  "DESCRIBE": {
   "word": "DESCRIBE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EXAMINE"
    }
   ]
  },
  "WHAT": {
   "word": "WHAT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EXAMINE"
    }
   ]
  },
  "WHATS": {
   "word": "WHATS",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EXAMINE"
    }
   ]
  },
  "BANISH": {
   "word": "BANISH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EXORCISE"
    }
   ]
  },
  "CAST": {
   "word": "CAST",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EXORCISE"
    }
   ]
  },
  "DRIVE": {
   "word": "DRIVE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EXORCISE"
    }
   ]
  },
  "BEGONE": {
   "word": "BEGONE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EXORCISE"
    }
   ]
  },
  "DOUSE": {
   "word": "DOUSE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EXTINGUISH"
    }
   ]
  },
  "WHERE": {
   "word": "WHERE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "FIND"
    }
   ]
  },
  "SEEK": {
   "word": "SEEK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "FIND"
    }
   ]
  },
  "SEE": {
   "word": "SEE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "FIND"
    }
   ]
  },
  "PURSUE": {
   "word": "PURSUE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "FOLLOW"
    }
   ]
  },
  "CHASE": {
   "word": "CHASE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "FOLLOW"
    }
   ]
  },
  "COME": {
   "word": "COME",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "FOLLOW"
    }
   ]
  },
  "DONATE": {
   "word": "DONATE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "GIVE"
    }
   ]
  },
  "OFFER": {
   "word": "OFFER",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "GIVE"
    }
   ]
  },
  "FEED": {
   "word": "FEED",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "GIVE"
    }
   ]
  },
  "HI": {
   "word": "HI",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "HELLO"
    }
   ]
  },
  "CHANT": {
   "word": "CHANT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "INCANT"
    }
   ]
  },
  "LEAP": {
   "word": "LEAP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "JUMP"
    }
   ]
  },
  "DIVE": {
   "word": "DIVE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "JUMP"
    }
   ]
  },
  "TAUNT": {
   "word": "TAUNT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "KICK"
    }
   ]
  },
  "MURDER": {
   "word": "MURDER",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "KILL"
    }
   ]
  },
  "SLAY": {
   "word": "SLAY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "KILL"
    }
   ]
  },
  "DISPATCH": {
   "word": "DISPATCH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "KILL"
    }
   ]
  },
  "RAP": {
   "word": "RAP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "KNOCK"
    }
   ]
  },
  "L": {
   "word": "L",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "LOOK"
    }
   ]
  },
  "STARE": {
   "word": "STARE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "LOOK"
    }
   ]
  },
  "GAZE": {
   "word": "GAZE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "LOOK"
    }
   ]
  },
  "OIL": {
   "word": "OIL",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "LUBRICATE"
    }
   ]
  },
  "GREASE": {
   "word": "GREASE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "LUBRICATE"
    }
   ]
  },
  "LIQUIFY": {
   "word": "LIQUIFY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "MELT"
    }
   ]
  },
  "SIGH": {
   "word": "SIGH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "MUMBLE"
    }
   ]
  },
  "ULYSSES": {
   "word": "ULYSSES",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ODYSSEUS"
    }
   ]
  },
  "GLUE": {
   "word": "GLUE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "PLUG"
    }
   ]
  },
  "PATCH": {
   "word": "PATCH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "PLUG"
    }
   ]
  },
  "REPAIR": {
   "word": "REPAIR",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "PLUG"
    }
   ]
  },
  "FIX": {
   "word": "FIX",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "PLUG"
    }
   ]
  },
  "XYZZY": {
   "word": "XYZZY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "PLUGH"
    }
   ]
  },
  "SPILL": {
   "word": "SPILL",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "POUR"
    }
   ]
  },
  "TUG": {
   "word": "TUG",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "PULL"
    }
   ]
  },
  "YANK": {
   "word": "YANK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "PULL"
    }
   ]
  },
  "PRESS": {
   "word": "PRESS",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "PUSH"
    }
   ]
  },
  "STUFF": {
   "word": "STUFF",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "PUT"
    }
   ]
  },
  "INSERT": {
   "word": "INSERT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "PUT"
    }
   ]
  },
  "PLACE": {
   "word": "PLACE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "PUT"
    }
   ]
  },
  "HIDE": {
   "word": "HIDE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "PUT"
    }
   ]
  },
  "LIFT": {
   "word": "LIFT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "RAISE"
    }
   ]
  },
  "MOLEST": {
   "word": "MOLEST",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "RAPE"
    }
   ]
  },
  "SKIM": {
   "word": "SKIM",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "READ"
    }
   ]
  },
  "PEAL": {
   "word": "PEAL",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "RING"
    }
   ]
  },
  "TOUCH": {
   "word": "TOUCH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "RUB"
    }
   ]
  },
  "FEEL": {
   "word": "FEEL",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "RUB"
    }
   ]
  },
  "PAT": {
   "word": "PAT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "RUB"
    }
   ]
  },
  "PET": {
   "word": "PET",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "RUB"
    }
   ]
  },
  "HOP": {
   "word": "HOP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SKIP"
    }
   ]
  },
  "SNIFF": {
   "word": "SNIFF",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SMELL"
    }
   ]
  },
  "BATHE": {
   "word": "BATHE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SWIM"
    }
   ]
  },
  "WADE": {
   "word": "WADE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SWIM"
    }
   ]
  },
  "THRUST": {
   "word": "THRUST",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SWING"
    }
   ]
  },
  "GET": {
   "word": "GET",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TAKE"
    }
   ]
  },
  "HOLD": {
   "word": "HOLD",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TAKE"
    }
   ]
  },
  "CARRY": {
   "word": "CARRY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TAKE"
    }
   ]
  },
  "REMOVE": {
   "word": "REMOVE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TAKE"
    }
   ]
  },
  "GRAB": {
   "word": "GRAB",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TAKE"
    }
   ]
  },
  "CATCH": {
   "word": "CATCH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TAKE"
    }
   ]
  },
  "ASK": {
   "word": "ASK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TELL"
    }
   ]
  },
  "HURL": {
   "word": "HURL",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "THROW"
    }
   ]
  },
  "CHUCK": {
   "word": "CHUCK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "THROW"
    }
   ]
  },
  "TOSS": {
   "word": "TOSS",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "THROW"
    }
   ]
  },
  "FASTEN": {
   "word": "FASTEN",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TIE"
    }
   ]
  },
  "SECURE": {
   "word": "SECURE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TIE"
    }
   ]
  },
  "ATTACH": {
   "word": "ATTACH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TIE"
    }
   ]
  },
  "TEMPLE": {
   "word": "TEMPLE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TREASURE"
    }
   ]
  },
  "SET": {
   "word": "SET",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TURN"
    }
   ]
  },
  "FLIP": {
   "word": "FLIP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TURN"
    }
   ]
  },
  "SHUT": {
   "word": "SHUT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TURN"
    }
   ]
  },
  "FREE": {
   "word": "FREE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "UNTIE"
    }
   ]
  },
  "RELEASE": {
   "word": "RELEASE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "UNTIE"
    },
    {
     "kind": "word-synonym",
     "of": "DROP"
    }
   ]
  },
  "UNFASTEN": {
   "word": "UNFASTEN",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "UNTIE"
    }
   ]
  },
  "UNATTACH": {
   "word": "UNATTACH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "UNTIE"
    }
   ]
  },
  "UNHOOK": {
   "word": "UNHOOK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "UNTIE"
    }
   ]
  },
  "Z": {
   "word": "Z",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WAIT"
    }
   ]
  },
  "AWAKE": {
   "word": "AWAKE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WAKE"
    }
   ]
  },
  "SURPRISE": {
   "word": "SURPRISE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WAKE"
    }
   ]
  },
  "STARTLE": {
   "word": "STARTLE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WAKE"
    }
   ]
  },
  "GO": {
   "word": "GO",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WALK"
    }
   ]
  },
  "RUN": {
   "word": "RUN",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WALK"
    }
   ]
  },
  "PROCEED": {
   "word": "PROCEED",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WALK"
    }
   ]
  },
  "STEP": {
   "word": "STEP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WALK"
    }
   ]
  },
  "BRANDISH": {
   "word": "BRANDISH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WAVE"
    }
   ]
  },
  "WINNAGE": {
   "word": "WINNAGE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WIN"
    }
   ]
  },
  "SCREAM": {
   "word": "SCREAM",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "YELL"
    }
   ]
  },
  "SHOUT": {
   "word": "SHOUT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "YELL"
    }
   ]
  },
  "G": {
   "word": "G",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "AGAIN"
    },
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "HAND": {
   "word": "HAND",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "GIVE"
    },
    {
     "kind": "adjective",
     "of": "SHORT-POLE"
    },
    {
     "kind": "noun",
     "of": "HANDS"
    }
   ]
  },
  "JAB": {
   "word": "JAB",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "POKE"
    }
   ]
  },
  "BLIND": {
   "word": "BLIND",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "POKE"
    }
   ]
  },
  "LAND": {
   "word": "LAND",
   "roles": [
    {
     "kind": "direction",
     "of": null
    }
   ]
  },
  "OOPS": {
   "word": "OOPS",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "A": {
   "word": "A",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "AN": {
   "word": "AN",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "THE": {
   "word": "THE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "AND": {
   "word": "AND",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "OF": {
   "word": "OF",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "THEN": {
   "word": "THEN",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "ALL": {
   "word": "ALL",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "ONE": {
   "word": "ONE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "BUT": {
   "word": "BUT",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "EXCEPT": {
   "word": "EXCEPT",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  ".": {
   "word": ".",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  ",": {
   "word": ",",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "\"": {
   "word": "\"",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "YES": {
   "word": "YES",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "NO": {
   "word": "NO",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "Y": {
   "word": "Y",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "HERE": {
   "word": "HERE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "FROTZ": {
   "word": "FROTZ",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "OZMOO": {
   "word": "OZMOO",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "VOICE": {
   "word": "VOICE",
   "roles": [
    {
     "kind": "noun",
     "of": "VOICES"
    }
   ]
  },
  "VOICES": {
   "word": "VOICES",
   "roles": [
    {
     "kind": "noun",
     "of": "VOICES"
    }
   ]
  },
  "GUARDS": {
   "word": "GUARDS",
   "roles": [
    {
     "kind": "noun",
     "of": "VOICES"
    },
    {
     "kind": "noun",
     "of": "GUARDIAN"
    }
   ]
  },
  "OFFICI": {
   "word": "OFFICI",
   "roles": [
    {
     "kind": "noun",
     "of": "VOICES"
    }
   ]
  },
  "ARMED": {
   "word": "ARMED",
   "roles": [
    {
     "kind": "adjective",
     "of": "VOICES"
    }
   ]
  },
  "CRYSTAL": {
   "word": "CRYSTAL",
   "roles": [
    {
     "kind": "noun",
     "of": "CRYSTALS"
    }
   ]
  },
  "STALAG": {
   "word": "STALAG",
   "roles": [
    {
     "kind": "noun",
     "of": "CRYSTALS"
    }
   ]
  },
  "SEAL": {
   "word": "SEAL",
   "roles": [
    {
     "kind": "noun",
     "of": "ROYAL-SEAL"
    }
   ]
  },
  "CARVIN": {
   "word": "CARVIN",
   "roles": [
    {
     "kind": "noun",
     "of": "ROYAL-SEAL"
    }
   ]
  },
  "RENDER": {
   "word": "RENDER",
   "roles": [
    {
     "kind": "noun",
     "of": "ROYAL-SEAL"
    }
   ]
  },
  "LARGE": {
   "word": "LARGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "ROYAL-SEAL"
    },
    {
     "kind": "adjective",
     "of": "TREE"
    },
    {
     "kind": "adjective",
     "of": "COVER"
    },
    {
     "kind": "adjective",
     "of": "DIAL-BUTTON"
    }
   ]
  },
  "ROYAL": {
   "word": "ROYAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "ROYAL-SEAL"
    }
   ]
  },
  "CLEFT": {
   "word": "CLEFT",
   "roles": [
    {
     "kind": "noun",
     "of": "CLEFT"
    }
   ]
  },
  "MACHINE": {
   "word": "MACHINE",
   "roles": [
    {
     "kind": "noun",
     "of": "TIME-MACHINE"
    },
    {
     "kind": "noun",
     "of": "PRESSURIZER"
    },
    {
     "kind": "noun",
     "of": "SPINNER"
    }
   ]
  },
  "TEMPORIZER": {
   "word": "TEMPORIZER",
   "roles": [
    {
     "kind": "noun",
     "of": "TIME-MACHINE"
    }
   ]
  },
  "TIME": {
   "word": "TIME",
   "roles": [
    {
     "kind": "adjective",
     "of": "TIME-MACHINE"
    }
   ]
  },
  "GOLD": {
   "word": "GOLD",
   "roles": [
    {
     "kind": "adjective",
     "of": "TIME-MACHINE"
    },
    {
     "kind": "adjective",
     "of": "AMULET"
    }
   ]
  },
  "GOLDEN": {
   "word": "GOLDEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "TIME-MACHINE"
    },
    {
     "kind": "adjective",
     "of": "RING"
    },
    {
     "kind": "adjective",
     "of": "AMULET"
    }
   ]
  },
  "DRYER": {
   "word": "DRYER",
   "roles": [
    {
     "kind": "noun",
     "of": "PRESSURIZER"
    }
   ]
  },
  "PRESSURIZER": {
   "word": "PRESSURIZER",
   "roles": [
    {
     "kind": "noun",
     "of": "PRESSURIZER"
    }
   ]
  },
  "GRAY": {
   "word": "GRAY",
   "roles": [
    {
     "kind": "adjective",
     "of": "PRESSURIZER"
    }
   ]
  },
  "GREY": {
   "word": "GREY",
   "roles": [
    {
     "kind": "adjective",
     "of": "PRESSURIZER"
    }
   ]
  },
  "WASHING": {
   "word": "WASHING",
   "roles": [
    {
     "kind": "adjective",
     "of": "PRESSURIZER"
    }
   ]
  },
  "PIPES": {
   "word": "PIPES",
   "roles": [
    {
     "kind": "noun",
     "of": "SPINNER"
    }
   ]
  },
  "WIRES": {
   "word": "WIRES",
   "roles": [
    {
     "kind": "noun",
     "of": "SPINNER"
    }
   ]
  },
  "MOTORS": {
   "word": "MOTORS",
   "roles": [
    {
     "kind": "noun",
     "of": "SPINNER"
    }
   ]
  },
  "BLACK": {
   "word": "BLACK",
   "roles": [
    {
     "kind": "adjective",
     "of": "SPINNER"
    },
    {
     "kind": "adjective",
     "of": "BLACK-PANEL"
    }
   ]
  },
  "BUTTON": {
   "word": "BUTTON",
   "roles": [
    {
     "kind": "noun",
     "of": "TM-BUTTON"
    },
    {
     "kind": "noun",
     "of": "DIAL-BUTTON"
    },
    {
     "kind": "noun",
     "of": "RED-BUTTON"
    }
   ]
  },
  "AREA": {
   "word": "AREA",
   "roles": [
    {
     "kind": "noun",
     "of": "TM-HOLLOW"
    }
   ]
  },
  "SMALL": {
   "word": "SMALL",
   "roles": [
    {
     "kind": "adjective",
     "of": "TM-HOLLOW"
    },
    {
     "kind": "adjective",
     "of": "WARNING-NOTE"
    },
    {
     "kind": "adjective",
     "of": "CP-SLOT"
    },
    {
     "kind": "adjective",
     "of": "SHORT-POLE"
    }
   ]
  },
  "HOLLOW": {
   "word": "HOLLOW",
   "roles": [
    {
     "kind": "adjective",
     "of": "TM-HOLLOW"
    }
   ]
  },
  "SEAT": {
   "word": "SEAT",
   "roles": [
    {
     "kind": "noun",
     "of": "TM-SEAT"
    }
   ]
  },
  "CHAIR": {
   "word": "CHAIR",
   "roles": [
    {
     "kind": "noun",
     "of": "TM-SEAT"
    }
   ]
  },
  "DIAL": {
   "word": "DIAL",
   "roles": [
    {
     "kind": "noun",
     "of": "TM-DIAL"
    },
    {
     "kind": "noun",
     "of": "VIEW-INDICATOR"
    },
    {
     "kind": "noun",
     "of": "SUNDIAL"
    }
   ]
  },
  "CONSOLE": {
   "word": "CONSOLE",
   "roles": [
    {
     "kind": "noun",
     "of": "TM-DIAL"
    }
   ]
  },
  "DISPLAY": {
   "word": "DISPLAY",
   "roles": [
    {
     "kind": "noun",
     "of": "TM-DIAL"
    }
   ]
  },
  "DOOR": {
   "word": "DOOR",
   "roles": [
    {
     "kind": "noun",
     "of": "IRON-DOOR"
    },
    {
     "kind": "noun",
     "of": "JEWEL-DOOR"
    },
    {
     "kind": "noun",
     "of": "WOODEN-DOOR"
    },
    {
     "kind": "noun",
     "of": "CPDOOR"
    },
    {
     "kind": "noun",
     "of": "BRONZE-DOOR"
    },
    {
     "kind": "noun",
     "of": "CELL-DOOR"
    },
    {
     "kind": "noun",
     "of": "GOOD-LOCKED-DOOR"
    },
    {
     "kind": "noun",
     "of": "LOCKED-DOOR"
    },
    {
     "kind": "noun",
     "of": "DUNGEON-DOOR"
    },
    {
     "kind": "noun",
     "of": "SECRET-DOOR"
    }
   ]
  },
  "IRON": {
   "word": "IRON",
   "roles": [
    {
     "kind": "adjective",
     "of": "IRON-DOOR"
    }
   ]
  },
  "STONE": {
   "word": "STONE",
   "roles": [
    {
     "kind": "adjective",
     "of": "JEWEL-DOOR"
    },
    {
     "kind": "adjective",
     "of": "STONE-WALL"
    },
    {
     "kind": "adjective",
     "of": "AQUEDUCT"
    },
    {
     "kind": "noun",
     "of": "STONE"
    },
    {
     "kind": "adjective",
     "of": "CHANNEL"
    },
    {
     "kind": "adjective",
     "of": "STAIRS"
    }
   ]
  },
  "WOODEN": {
   "word": "WOODEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "WOODEN-DOOR"
    },
    {
     "kind": "adjective",
     "of": "STAFF"
    },
    {
     "kind": "adjective",
     "of": "TIMBERS"
    },
    {
     "kind": "adjective",
     "of": "LADDER"
    },
    {
     "kind": "adjective",
     "of": "WOODEN-WALL"
    },
    {
     "kind": "adjective",
     "of": "CELL-DOOR"
    },
    {
     "kind": "adjective",
     "of": "GOOD-LOCKED-DOOR"
    },
    {
     "kind": "adjective",
     "of": "LOCKED-DOOR"
    },
    {
     "kind": "adjective",
     "of": "WOODEN-BAR"
    },
    {
     "kind": "adjective",
     "of": "DUNGEON-DOOR"
    }
   ]
  },
  "WOOD": {
   "word": "WOOD",
   "roles": [
    {
     "kind": "adjective",
     "of": "WOODEN-DOOR"
    },
    {
     "kind": "adjective",
     "of": "WOODEN-WALL"
    },
    {
     "kind": "adjective",
     "of": "CELL-DOOR"
    },
    {
     "kind": "adjective",
     "of": "GOOD-LOCKED-DOOR"
    },
    {
     "kind": "adjective",
     "of": "LOCKED-DOOR"
    },
    {
     "kind": "adjective",
     "of": "WOODEN-BAR"
    },
    {
     "kind": "adjective",
     "of": "DUNGEON-DOOR"
    }
   ]
  },
  "SCEPTRE": {
   "word": "SCEPTRE",
   "roles": [
    {
     "kind": "noun",
     "of": "SCEPTRE"
    }
   ]
  },
  "JEWELS": {
   "word": "JEWELS",
   "roles": [
    {
     "kind": "noun",
     "of": "SCEPTRE"
    },
    {
     "kind": "noun",
     "of": "JEWELLED-KNIFE"
    },
    {
     "kind": "noun",
     "of": "RING"
    }
   ]
  },
  "CROWN": {
   "word": "CROWN",
   "roles": [
    {
     "kind": "adjective",
     "of": "SCEPTRE"
    },
    {
     "kind": "adjective",
     "of": "JEWELLED-KNIFE"
    },
    {
     "kind": "adjective",
     "of": "RING"
    }
   ]
  },
  "KNIFE": {
   "word": "KNIFE",
   "roles": [
    {
     "kind": "noun",
     "of": "JEWELLED-KNIFE"
    }
   ]
  },
  "JEWELLED": {
   "word": "JEWELLED",
   "roles": [
    {
     "kind": "adjective",
     "of": "JEWELLED-KNIFE"
    }
   ]
  },
  "PEDESTAL": {
   "word": "PEDESTAL",
   "roles": [
    {
     "kind": "noun",
     "of": "PEDESTAL"
    }
   ]
  },
  "CAGE": {
   "word": "CAGE",
   "roles": [
    {
     "kind": "noun",
     "of": "CAGE"
    }
   ]
  },
  "STEEL": {
   "word": "STEEL",
   "roles": [
    {
     "kind": "adjective",
     "of": "CAGE"
    },
    {
     "kind": "adjective",
     "of": "CPDOOR"
    }
   ]
  },
  "PLAQUE": {
   "word": "PLAQUE",
   "roles": [
    {
     "kind": "noun",
     "of": "TECH-PLAQUE"
    },
    {
     "kind": "noun",
     "of": "PLAQUE"
    }
   ]
  },
  "TEXT": {
   "word": "TEXT",
   "roles": [
    {
     "kind": "noun",
     "of": "TECH-PLAQUE"
    },
    {
     "kind": "noun",
     "of": "PLAQUE"
    },
    {
     "kind": "noun",
     "of": "WARNING-NOTE"
    },
    {
     "kind": "noun",
     "of": "LORE-BOOK"
    },
    {
     "kind": "noun",
     "of": "RUNES"
    }
   ]
  },
  "BRONZE": {
   "word": "BRONZE",
   "roles": [
    {
     "kind": "adjective",
     "of": "PLAQUE"
    },
    {
     "kind": "adjective",
     "of": "BRONZE-DOOR"
    }
   ]
  },
  "ROBOT": {
   "word": "ROBOT",
   "roles": [
    {
     "kind": "noun",
     "of": "ROBOT"
    }
   ]
  },
  "DEVICE": {
   "word": "DEVICE",
   "roles": [
    {
     "kind": "noun",
     "of": "ROBOT"
    }
   ]
  },
  "SHADOW": {
   "word": "SHADOW",
   "roles": [
    {
     "kind": "noun",
     "of": "SHADOW"
    }
   ]
  },
  "FIGURE": {
   "word": "FIGURE",
   "roles": [
    {
     "kind": "noun",
     "of": "SHADOW"
    }
   ]
  },
  "MAN": {
   "word": "MAN",
   "roles": [
    {
     "kind": "noun",
     "of": "SHADOW"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-MAN"
    },
    {
     "kind": "noun",
     "of": "MAN"
    },
    {
     "kind": "noun",
     "of": "OLD-MAN"
    }
   ]
  },
  "WOMAN": {
   "word": "WOMAN",
   "roles": [
    {
     "kind": "noun",
     "of": "SHADOW"
    }
   ]
  },
  "HOODED": {
   "word": "HOODED",
   "roles": [
    {
     "kind": "adjective",
     "of": "SHADOW"
    }
   ]
  },
  "CLOAKED": {
   "word": "CLOAKED",
   "roles": [
    {
     "kind": "adjective",
     "of": "SHADOW"
    }
   ]
  },
  "HOOD": {
   "word": "HOOD",
   "roles": [
    {
     "kind": "noun",
     "of": "HOOD"
    }
   ]
  },
  "CLOAK": {
   "word": "CLOAK",
   "roles": [
    {
     "kind": "noun",
     "of": "CLOAK"
    }
   ]
  },
  "REEDS": {
   "word": "REEDS",
   "roles": [
    {
     "kind": "noun",
     "of": "REEDS"
    }
   ]
  },
  "SICKLY": {
   "word": "SICKLY",
   "roles": [
    {
     "kind": "adjective",
     "of": "REEDS"
    }
   ]
  },
  "TABLE": {
   "word": "TABLE",
   "roles": [
    {
     "kind": "noun",
     "of": "VIEWING-TABLE"
    }
   ]
  },
  "SURFACE": {
   "word": "SURFACE",
   "roles": [
    {
     "kind": "noun",
     "of": "VIEWING-TABLE"
    },
    {
     "kind": "noun",
     "of": "LAKE"
    }
   ]
  },
  "VIEWING": {
   "word": "VIEWING",
   "roles": [
    {
     "kind": "adjective",
     "of": "VIEWING-TABLE"
    }
   ]
  },
  "TORCH": {
   "word": "TORCH",
   "roles": [
    {
     "kind": "noun",
     "of": "TORCH"
    },
    {
     "kind": "noun",
     "of": "FRIED-TORCH"
    }
   ]
  },
  "BURNED": {
   "word": "BURNED",
   "roles": [
    {
     "kind": "adjective",
     "of": "FRIED-TORCH"
    }
   ]
  },
  "DEAD": {
   "word": "DEAD",
   "roles": [
    {
     "kind": "adjective",
     "of": "FRIED-TORCH"
    }
   ]
  },
  "CLIFF": {
   "word": "CLIFF",
   "roles": [
    {
     "kind": "noun",
     "of": "CLIFF-OBJECT"
    }
   ]
  },
  "WALL": {
   "word": "WALL",
   "roles": [
    {
     "kind": "noun",
     "of": "STONE-WALL"
    },
    {
     "kind": "noun",
     "of": "EAST-WALL"
    },
    {
     "kind": "noun",
     "of": "SOUTH-WALL"
    },
    {
     "kind": "noun",
     "of": "WEST-WALL"
    },
    {
     "kind": "noun",
     "of": "NORTH-WALL"
    },
    {
     "kind": "noun",
     "of": "CPEWL"
    },
    {
     "kind": "noun",
     "of": "CPWWL"
    },
    {
     "kind": "noun",
     "of": "CPSWL"
    },
    {
     "kind": "noun",
     "of": "CPNWL"
    },
    {
     "kind": "noun",
     "of": "WOODEN-WALL"
    },
    {
     "kind": "noun",
     "of": "RUNES"
    },
    {
     "kind": "noun",
     "of": "BLACK-PANEL"
    },
    {
     "kind": "noun",
     "of": "MAHOGANY-PANEL"
    },
    {
     "kind": "noun",
     "of": "PINE-PANEL"
    },
    {
     "kind": "noun",
     "of": "RED-PANEL"
    },
    {
     "kind": "noun",
     "of": "YELLOW-PANEL"
    },
    {
     "kind": "noun",
     "of": "WHITE-PANEL"
    }
   ]
  },
  "MASSIVE": {
   "word": "MASSIVE",
   "roles": [
    {
     "kind": "adjective",
     "of": "STONE-WALL"
    }
   ]
  },
  "LAKE": {
   "word": "LAKE",
   "roles": [
    {
     "kind": "noun",
     "of": "LAKE"
    }
   ]
  },
  "WATER": {
   "word": "WATER",
   "roles": [
    {
     "kind": "noun",
     "of": "LAKE"
    },
    {
     "kind": "adjective",
     "of": "WATER-CHANNEL"
    },
    {
     "kind": "noun",
     "of": "OCEAN"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-WATER"
    },
    {
     "kind": "noun",
     "of": "WATER"
    }
   ]
  },
  "AMULET": {
   "word": "AMULET",
   "roles": [
    {
     "kind": "noun",
     "of": "AMULET"
    },
    {
     "kind": "noun",
     "of": "SHINY-OBJECT"
    }
   ]
  },
  "OBJECT": {
   "word": "OBJECT",
   "roles": [
    {
     "kind": "noun",
     "of": "AMULET"
    },
    {
     "kind": "noun",
     "of": "SHINY-OBJECT"
    }
   ]
  },
  "SHINY": {
   "word": "SHINY",
   "roles": [
    {
     "kind": "adjective",
     "of": "AMULET"
    },
    {
     "kind": "adjective",
     "of": "SHINY-OBJECT"
    }
   ]
  },
  "SAND": {
   "word": "SAND",
   "roles": [
    {
     "kind": "noun",
     "of": "SAND"
    },
    {
     "kind": "noun",
     "of": "GROUND"
    }
   ]
  },
  "FLOOR": {
   "word": "FLOOR",
   "roles": [
    {
     "kind": "noun",
     "of": "SAND"
    },
    {
     "kind": "noun",
     "of": "GROUND"
    }
   ]
  },
  "BOTTOM": {
   "word": "BOTTOM",
   "roles": [
    {
     "kind": "noun",
     "of": "SAND"
    }
   ]
  },
  "LAMP": {
   "word": "LAMP",
   "roles": [
    {
     "kind": "noun",
     "of": "FRIED-LAMP"
    },
    {
     "kind": "noun",
     "of": "BROKEN-LAMP"
    },
    {
     "kind": "noun",
     "of": "LAMP"
    }
   ]
  },
  "LANTERN": {
   "word": "LANTERN",
   "roles": [
    {
     "kind": "noun",
     "of": "FRIED-LAMP"
    },
    {
     "kind": "noun",
     "of": "BROKEN-LAMP"
    },
    {
     "kind": "noun",
     "of": "LAMP"
    }
   ]
  },
  "BRASS": {
   "word": "BRASS",
   "roles": [
    {
     "kind": "adjective",
     "of": "FRIED-LAMP"
    },
    {
     "kind": "adjective",
     "of": "BROKEN-LAMP"
    },
    {
     "kind": "adjective",
     "of": "LAMP"
    }
   ]
  },
  "PLANT": {
   "word": "PLANT",
   "roles": [
    {
     "kind": "noun",
     "of": "ALGAE"
    }
   ]
  },
  "PLANTS": {
   "word": "PLANTS",
   "roles": [
    {
     "kind": "noun",
     "of": "ALGAE"
    }
   ]
  },
  "ALGAE": {
   "word": "ALGAE",
   "roles": [
    {
     "kind": "noun",
     "of": "ALGAE"
    }
   ]
  },
  "LEDGE": {
   "word": "LEDGE",
   "roles": [
    {
     "kind": "noun",
     "of": "LEDGE"
    }
   ]
  },
  "WIDE": {
   "word": "WIDE",
   "roles": [
    {
     "kind": "adjective",
     "of": "LEDGE"
    }
   ]
  },
  "BREAD": {
   "word": "BREAD",
   "roles": [
    {
     "kind": "noun",
     "of": "WAYBREAD"
    }
   ]
  },
  "WAYBREAD": {
   "word": "WAYBREAD",
   "roles": [
    {
     "kind": "noun",
     "of": "WAYBREAD"
    }
   ]
  },
  "PIECE": {
   "word": "PIECE",
   "roles": [
    {
     "kind": "noun",
     "of": "WAYBREAD"
    }
   ]
  },
  "WAY": {
   "word": "WAY",
   "roles": [
    {
     "kind": "adjective",
     "of": "WAYBREAD"
    }
   ]
  },
  "FRESH": {
   "word": "FRESH",
   "roles": [
    {
     "kind": "adjective",
     "of": "WAYBREAD"
    }
   ]
  },
  "ROPE": {
   "word": "ROPE",
   "roles": [
    {
     "kind": "noun",
     "of": "ROPE"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-ROPE"
    }
   ]
  },
  "LONG": {
   "word": "LONG",
   "roles": [
    {
     "kind": "adjective",
     "of": "ROPE"
    },
    {
     "kind": "adjective",
     "of": "KEY"
    },
    {
     "kind": "adjective",
     "of": "LONG-POLE"
    },
    {
     "kind": "adjective",
     "of": "PATHOBJ"
    }
   ]
  },
  "DANGLING": {
   "word": "DANGLING",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-ROPE"
    }
   ]
  },
  "TREE": {
   "word": "TREE",
   "roles": [
    {
     "kind": "noun",
     "of": "TREE"
    }
   ]
  },
  "TREES": {
   "word": "TREES",
   "roles": [
    {
     "kind": "noun",
     "of": "TREE"
    }
   ]
  },
  "TALL": {
   "word": "TALL",
   "roles": [
    {
     "kind": "adjective",
     "of": "TREE"
    }
   ]
  },
  "STAFF": {
   "word": "STAFF",
   "roles": [
    {
     "kind": "noun",
     "of": "STAFF"
    },
    {
     "kind": "noun",
     "of": "BROKEN-STAFF"
    }
   ]
  },
  "BROKEN": {
   "word": "BROKEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "BROKEN-STAFF"
    },
    {
     "kind": "adjective",
     "of": "TIMBERS"
    },
    {
     "kind": "adjective",
     "of": "BROKEN-LAMP"
    }
   ]
  },
  "CHEST": {
   "word": "CHEST",
   "roles": [
    {
     "kind": "noun",
     "of": "CHEST"
    }
   ]
  },
  "LOCKED": {
   "word": "LOCKED",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHEST"
    },
    {
     "kind": "adjective",
     "of": "GOOD-LOCKED-DOOR"
    },
    {
     "kind": "adjective",
     "of": "LOCKED-DOOR"
    }
   ]
  },
  "FRIEND": {
   "word": "FRIEND",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-MAN"
    },
    {
     "kind": "noun",
     "of": "MAN"
    }
   ]
  },
  "VALUABLES": {
   "word": "VALUABLES",
   "roles": [
    {
     "kind": "noun",
     "of": "VALUABLES"
    }
   ]
  },
  "PILE": {
   "word": "PILE",
   "roles": [
    {
     "kind": "noun",
     "of": "VALUABLES"
    },
    {
     "kind": "noun",
     "of": "TIMBERS"
    }
   ]
  },
  "ASSORTED": {
   "word": "ASSORTED",
   "roles": [
    {
     "kind": "adjective",
     "of": "VALUABLES"
    }
   ]
  },
  "TIMBERS": {
   "word": "TIMBERS",
   "roles": [
    {
     "kind": "noun",
     "of": "TIMBERS"
    }
   ]
  },
  "LADDER": {
   "word": "LADDER",
   "roles": [
    {
     "kind": "noun",
     "of": "LADDER"
    },
    {
     "kind": "noun",
     "of": "CPLADDER"
    }
   ]
  },
  "RICKETY": {
   "word": "RICKETY",
   "roles": [
    {
     "kind": "adjective",
     "of": "LADDER"
    }
   ]
  },
  "NARROW": {
   "word": "NARROW",
   "roles": [
    {
     "kind": "adjective",
     "of": "LADDER"
    },
    {
     "kind": "adjective",
     "of": "PATHOBJ"
    }
   ]
  },
  "REPELLENT": {
   "word": "REPELLENT",
   "roles": [
    {
     "kind": "noun",
     "of": "REPELLENT"
    }
   ]
  },
  "CAN": {
   "word": "CAN",
   "roles": [
    {
     "kind": "noun",
     "of": "REPELLENT"
    }
   ]
  },
  "GRUE": {
   "word": "GRUE",
   "roles": [
    {
     "kind": "adjective",
     "of": "REPELLENT"
    },
    {
     "kind": "noun",
     "of": "GRUE"
    }
   ]
  },
  "MAGIC": {
   "word": "MAGIC",
   "roles": [
    {
     "kind": "adjective",
     "of": "REPELLENT"
    }
   ]
  },
  "AQUEDUCT": {
   "word": "AQUEDUCT",
   "roles": [
    {
     "kind": "noun",
     "of": "AQUEDUCT"
    }
   ]
  },
  "DUCT": {
   "word": "DUCT",
   "roles": [
    {
     "kind": "noun",
     "of": "AQUEDUCT"
    }
   ]
  },
  "CHASM": {
   "word": "CHASM",
   "roles": [
    {
     "kind": "noun",
     "of": "AQUEDUCT"
    },
    {
     "kind": "noun",
     "of": "CHASM"
    }
   ]
  },
  "CHANNEL": {
   "word": "CHANNEL",
   "roles": [
    {
     "kind": "noun",
     "of": "WATER-CHANNEL"
    },
    {
     "kind": "noun",
     "of": "CHANNEL"
    }
   ]
  },
  "MOSS": {
   "word": "MOSS",
   "roles": [
    {
     "kind": "noun",
     "of": "MOSS"
    }
   ]
  },
  "LICHEN": {
   "word": "LICHEN",
   "roles": [
    {
     "kind": "noun",
     "of": "MOSS"
    }
   ]
  },
  "COVER": {
   "word": "COVER",
   "roles": [
    {
     "kind": "noun",
     "of": "COVER"
    }
   ]
  },
  "MANHOLE": {
   "word": "MANHOLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "COVER"
    }
   ]
  },
  "KEY": {
   "word": "KEY",
   "roles": [
    {
     "kind": "noun",
     "of": "KEY"
    }
   ]
  },
  "STRANGE": {
   "word": "STRANGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "KEY"
    },
    {
     "kind": "adjective",
     "of": "LORE-BOOK"
    }
   ]
  },
  "RUSTY": {
   "word": "RUSTY",
   "roles": [
    {
     "kind": "adjective",
     "of": "KEY"
    }
   ]
  },
  "SHORT": {
   "word": "SHORT",
   "roles": [
    {
     "kind": "adjective",
     "of": "KEY"
    },
    {
     "kind": "adjective",
     "of": "SHORT-POLE"
    }
   ]
  },
  "HEAVY": {
   "word": "HEAVY",
   "roles": [
    {
     "kind": "adjective",
     "of": "KEY"
    },
    {
     "kind": "adjective",
     "of": "POTION"
    }
   ]
  },
  "THIN": {
   "word": "THIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "KEY"
    }
   ]
  },
  "SHARP": {
   "word": "SHARP",
   "roles": [
    {
     "kind": "adjective",
     "of": "KEY"
    }
   ]
  },
  "POINTED": {
   "word": "POINTED",
   "roles": [
    {
     "kind": "adjective",
     "of": "KEY"
    }
   ]
  },
  "INDICATOR": {
   "word": "INDICATOR",
   "roles": [
    {
     "kind": "noun",
     "of": "VIEW-INDICATOR"
    },
    {
     "kind": "noun",
     "of": "SUNDIAL"
    },
    {
     "kind": "adjective",
     "of": "SUNDIAL"
    }
   ]
  },
  "BOAT": {
   "word": "BOAT",
   "roles": [
    {
     "kind": "noun",
     "of": "VIKING-SHIP"
    }
   ]
  },
  "SHIP": {
   "word": "SHIP",
   "roles": [
    {
     "kind": "noun",
     "of": "VIKING-SHIP"
    }
   ]
  },
  "CRAFT": {
   "word": "CRAFT",
   "roles": [
    {
     "kind": "noun",
     "of": "VIKING-SHIP"
    }
   ]
  },
  "VIKING": {
   "word": "VIKING",
   "roles": [
    {
     "kind": "adjective",
     "of": "VIKING-SHIP"
    }
   ]
  },
  "VIAL": {
   "word": "VIAL",
   "roles": [
    {
     "kind": "noun",
     "of": "VIAL"
    }
   ]
  },
  "ODOR": {
   "word": "ODOR",
   "roles": [
    {
     "kind": "noun",
     "of": "VIAL"
    }
   ]
  },
  "GIFT": {
   "word": "GIFT",
   "roles": [
    {
     "kind": "noun",
     "of": "VIAL"
    }
   ]
  },
  "POTION": {
   "word": "POTION",
   "roles": [
    {
     "kind": "noun",
     "of": "POTION"
    }
   ]
  },
  "LIQUID": {
   "word": "LIQUID",
   "roles": [
    {
     "kind": "noun",
     "of": "POTION"
    },
    {
     "kind": "noun",
     "of": "WATER"
    }
   ]
  },
  "CONTENTS": {
   "word": "CONTENTS",
   "roles": [
    {
     "kind": "noun",
     "of": "POTION"
    }
   ]
  },
  "FLUID": {
   "word": "FLUID",
   "roles": [
    {
     "kind": "noun",
     "of": "POTION"
    }
   ]
  },
  "SWEET": {
   "word": "SWEET",
   "roles": [
    {
     "kind": "adjective",
     "of": "POTION"
    }
   ]
  },
  "INVISIBLE": {
   "word": "INVISIBLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "POTION"
    }
   ]
  },
  "SMELLING": {
   "word": "SMELLING",
   "roles": [
    {
     "kind": "adjective",
     "of": "POTION"
    }
   ]
  },
  "OCEAN": {
   "word": "OCEAN",
   "roles": [
    {
     "kind": "noun",
     "of": "OCEAN"
    }
   ]
  },
  "FLATHEAD": {
   "word": "FLATHEAD",
   "roles": [
    {
     "kind": "adjective",
     "of": "OCEAN"
    }
   ]
  },
  "ROCK": {
   "word": "ROCK",
   "roles": [
    {
     "kind": "noun",
     "of": "STONE"
    },
    {
     "kind": "noun",
     "of": "RUBBLE"
    }
   ]
  },
  "GREAT": {
   "word": "GREAT",
   "roles": [
    {
     "kind": "adjective",
     "of": "STONE"
    }
   ]
  },
  "FISH": {
   "word": "FISH",
   "roles": [
    {
     "kind": "noun",
     "of": "FISH"
    }
   ]
  },
  "ROCKS": {
   "word": "ROCKS",
   "roles": [
    {
     "kind": "noun",
     "of": "RUBBLE"
    }
   ]
  },
  "BOULDER": {
   "word": "BOULDER",
   "roles": [
    {
     "kind": "noun",
     "of": "RUBBLE"
    }
   ]
  },
  "RUBBLE": {
   "word": "RUBBLE",
   "roles": [
    {
     "kind": "noun",
     "of": "RUBBLE"
    }
   ]
  },
  "DUST": {
   "word": "DUST",
   "roles": [
    {
     "kind": "noun",
     "of": "DEBRIS"
    }
   ]
  },
  "DEBRIS": {
   "word": "DEBRIS",
   "roles": [
    {
     "kind": "noun",
     "of": "DEBRIS"
    }
   ]
  },
  "GORGE": {
   "word": "GORGE",
   "roles": [
    {
     "kind": "noun",
     "of": "CHASM"
    }
   ]
  },
  "RAVINE": {
   "word": "RAVINE",
   "roles": [
    {
     "kind": "noun",
     "of": "CHASM"
    }
   ]
  },
  "ROCKY": {
   "word": "ROCKY",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHASM"
    }
   ]
  },
  "DEEP": {
   "word": "DEEP",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHASM"
    }
   ]
  },
  "PASSAGE": {
   "word": "PASSAGE",
   "roles": [
    {
     "kind": "noun",
     "of": "TUNNEL"
    }
   ]
  },
  "CRAWLWAY": {
   "word": "CRAWLWAY",
   "roles": [
    {
     "kind": "noun",
     "of": "TUNNEL"
    }
   ]
  },
  "DARK": {
   "word": "DARK",
   "roles": [
    {
     "kind": "adjective",
     "of": "TUNNEL"
    },
    {
     "kind": "adjective",
     "of": "STAIRS"
    }
   ]
  },
  "SMOKY": {
   "word": "SMOKY",
   "roles": [
    {
     "kind": "adjective",
     "of": "TUNNEL"
    }
   ]
  },
  "EASTERN": {
   "word": "EASTERN",
   "roles": [
    {
     "kind": "adjective",
     "of": "EAST-WALL"
    },
    {
     "kind": "adjective",
     "of": "CPEWL"
    }
   ]
  },
  "WESTERN": {
   "word": "WESTERN",
   "roles": [
    {
     "kind": "adjective",
     "of": "WEST-WALL"
    },
    {
     "kind": "adjective",
     "of": "CPWWL"
    }
   ]
  },
  "QUANTITY": {
   "word": "QUANTITY",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-WATER"
    },
    {
     "kind": "noun",
     "of": "WATER"
    }
   ]
  },
  "H2O": {
   "word": "H2O",
   "roles": [
    {
     "kind": "noun",
     "of": "WATER"
    }
   ]
  },
  "SWORD": {
   "word": "SWORD",
   "roles": [
    {
     "kind": "noun",
     "of": "SWORD"
    }
   ]
  },
  "ORCRIST": {
   "word": "ORCRIST",
   "roles": [
    {
     "kind": "noun",
     "of": "SWORD"
    }
   ]
  },
  "GLAMDRING": {
   "word": "GLAMDRING",
   "roles": [
    {
     "kind": "noun",
     "of": "SWORD"
    }
   ]
  },
  "BLADE": {
   "word": "BLADE",
   "roles": [
    {
     "kind": "noun",
     "of": "SWORD"
    }
   ]
  },
  "ELVISH": {
   "word": "ELVISH",
   "roles": [
    {
     "kind": "adjective",
     "of": "SWORD"
    }
   ]
  },
  "OLD": {
   "word": "OLD",
   "roles": [
    {
     "kind": "adjective",
     "of": "SWORD"
    },
    {
     "kind": "adjective",
     "of": "LORE-BOOK"
    },
    {
     "kind": "adjective",
     "of": "OLD-MAN"
    }
   ]
  },
  "ANTIQUE": {
   "word": "ANTIQUE",
   "roles": [
    {
     "kind": "adjective",
     "of": "SWORD"
    }
   ]
  },
  "NOTE": {
   "word": "NOTE",
   "roles": [
    {
     "kind": "noun",
     "of": "WARNING-NOTE"
    }
   ]
  },
  "WARNING": {
   "word": "WARNING",
   "roles": [
    {
     "kind": "noun",
     "of": "WARNING-NOTE"
    },
    {
     "kind": "adjective",
     "of": "WARNING-NOTE"
    }
   ]
  },
  "CPSLT": {
   "word": "CPSLT",
   "roles": [
    {
     "kind": "noun",
     "of": "CP-SLOT"
    }
   ]
  },
  "SLIT": {
   "word": "SLIT",
   "roles": [
    {
     "kind": "noun",
     "of": "CP-SLOT"
    }
   ]
  },
  "SLOT": {
   "word": "SLOT",
   "roles": [
    {
     "kind": "noun",
     "of": "CP-SLOT"
    }
   ]
  },
  "METAL": {
   "word": "METAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "CPDOOR"
    }
   ]
  },
  "BOOK": {
   "word": "BOOK",
   "roles": [
    {
     "kind": "noun",
     "of": "LORE-BOOK"
    }
   ]
  },
  "LORE": {
   "word": "LORE",
   "roles": [
    {
     "kind": "noun",
     "of": "LORE-BOOK"
    },
    {
     "kind": "adjective",
     "of": "LORE-BOOK"
    }
   ]
  },
  "INTDIR": {
   "word": "INTDIR",
   "roles": [
    {
     "kind": "noun",
     "of": "INTDIR"
    }
   ]
  },
  "STATUE": {
   "word": "STATUE",
   "roles": [
    {
     "kind": "noun",
     "of": "GUARDIAN"
    }
   ]
  },
  "GUARDIAN": {
   "word": "GUARDIAN",
   "roles": [
    {
     "kind": "noun",
     "of": "GUARDIAN"
    }
   ]
  },
  "GUARD": {
   "word": "GUARD",
   "roles": [
    {
     "kind": "noun",
     "of": "GUARDIAN"
    }
   ]
  },
  "ROSE": {
   "word": "ROSE",
   "roles": [
    {
     "kind": "noun",
     "of": "ROSE"
    }
   ]
  },
  "COMPASS": {
   "word": "COMPASS",
   "roles": [
    {
     "kind": "adjective",
     "of": "ROSE"
    },
    {
     "kind": "adjective",
     "of": "COMPASS-ARROW"
    }
   ]
  },
  "MASTER": {
   "word": "MASTER",
   "roles": [
    {
     "kind": "noun",
     "of": "MASTER"
    },
    {
     "kind": "noun",
     "of": "DUNGEON-MASTER"
    }
   ]
  },
  "DUNGEON": {
   "word": "DUNGEON",
   "roles": [
    {
     "kind": "adjective",
     "of": "MASTER"
    },
    {
     "kind": "noun",
     "of": "DUNGEON-MASTER"
    },
    {
     "kind": "adjective",
     "of": "DUNGEON-MASTER"
    }
   ]
  },
  "MIRROR": {
   "word": "MIRROR",
   "roles": [
    {
     "kind": "noun",
     "of": "MIRROR"
    }
   ]
  },
  "STRUCTURE": {
   "word": "STRUCTURE",
   "roles": [
    {
     "kind": "noun",
     "of": "MIRROR"
    }
   ]
  },
  "PANEL": {
   "word": "PANEL",
   "roles": [
    {
     "kind": "noun",
     "of": "PANEL"
    },
    {
     "kind": "noun",
     "of": "BLACK-PANEL"
    },
    {
     "kind": "noun",
     "of": "MAHOGANY-PANEL"
    },
    {
     "kind": "noun",
     "of": "PINE-PANEL"
    },
    {
     "kind": "noun",
     "of": "RED-PANEL"
    },
    {
     "kind": "noun",
     "of": "YELLOW-PANEL"
    },
    {
     "kind": "noun",
     "of": "WHITE-PANEL"
    },
    {
     "kind": "noun",
     "of": "DUNGEON-PANEL"
    }
   ]
  },
  "HOLE": {
   "word": "HOLE",
   "roles": [
    {
     "kind": "noun",
     "of": "CHANNEL"
    },
    {
     "kind": "noun",
     "of": "CP-HOLE"
    }
   ]
  },
  "ENGRAV": {
   "word": "ENGRAV",
   "roles": [
    {
     "kind": "noun",
     "of": "RUNES"
    }
   ]
  },
  "RUNES": {
   "word": "RUNES",
   "roles": [
    {
     "kind": "noun",
     "of": "RUNES"
    }
   ]
  },
  "CARVED": {
   "word": "CARVED",
   "roles": [
    {
     "kind": "adjective",
     "of": "RUNES"
    }
   ]
  },
  "T-BAR": {
   "word": "T-BAR",
   "roles": [
    {
     "kind": "noun",
     "of": "T-BAR"
    }
   ]
  },
  "BAR": {
   "word": "BAR",
   "roles": [
    {
     "kind": "noun",
     "of": "T-BAR"
    },
    {
     "kind": "noun",
     "of": "WOODEN-BAR"
    }
   ]
  },
  "CELL": {
   "word": "CELL",
   "roles": [
    {
     "kind": "adjective",
     "of": "CELL-DOOR"
    },
    {
     "kind": "adjective",
     "of": "GOOD-LOCKED-DOOR"
    },
    {
     "kind": "adjective",
     "of": "LOCKED-DOOR"
    }
   ]
  },
  "ARROW": {
   "word": "ARROW",
   "roles": [
    {
     "kind": "noun",
     "of": "COMPASS-ARROW"
    },
    {
     "kind": "noun",
     "of": "SUNDIAL"
    }
   ]
  },
  "POLE": {
   "word": "POLE",
   "roles": [
    {
     "kind": "noun",
     "of": "LONG-POLE"
    },
    {
     "kind": "noun",
     "of": "SHORT-POLE"
    }
   ]
  },
  "CENTER": {
   "word": "CENTER",
   "roles": [
    {
     "kind": "adjective",
     "of": "LONG-POLE"
    }
   ]
  },
  "MAHOGANY": {
   "word": "MAHOGANY",
   "roles": [
    {
     "kind": "adjective",
     "of": "MAHOGANY-PANEL"
    }
   ]
  },
  "PIT": {
   "word": "PIT",
   "roles": [
    {
     "kind": "noun",
     "of": "FLAMING-PIT"
    }
   ]
  },
  "ABYSS": {
   "word": "ABYSS",
   "roles": [
    {
     "kind": "noun",
     "of": "FLAMING-PIT"
    }
   ]
  },
  "FIERY": {
   "word": "FIERY",
   "roles": [
    {
     "kind": "adjective",
     "of": "FLAMING-PIT"
    }
   ]
  },
  "FLAMING": {
   "word": "FLAMING",
   "roles": [
    {
     "kind": "adjective",
     "of": "FLAMING-PIT"
    }
   ]
  },
  "PARAPET": {
   "word": "PARAPET",
   "roles": [
    {
     "kind": "noun",
     "of": "PARAPET-OBJ"
    }
   ]
  },
  "PINE": {
   "word": "PINE",
   "roles": [
    {
     "kind": "adjective",
     "of": "PINE-PANEL"
    }
   ]
  },
  "BEAM": {
   "word": "BEAM",
   "roles": [
    {
     "kind": "noun",
     "of": "BEAM"
    }
   ]
  },
  "RED": {
   "word": "RED",
   "roles": [
    {
     "kind": "adjective",
     "of": "BEAM"
    },
    {
     "kind": "adjective",
     "of": "RED-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "RED-PANEL"
    }
   ]
  },
  "POST": {
   "word": "POST",
   "roles": [
    {
     "kind": "noun",
     "of": "SHORT-POLE"
    }
   ]
  },
  "HANDGRIP": {
   "word": "HANDGRIP",
   "roles": [
    {
     "kind": "noun",
     "of": "SHORT-POLE"
    }
   ]
  },
  "GRIP": {
   "word": "GRIP",
   "roles": [
    {
     "kind": "noun",
     "of": "SHORT-POLE"
    }
   ]
  },
  "SUNDIAL": {
   "word": "SUNDIAL",
   "roles": [
    {
     "kind": "noun",
     "of": "SUNDIAL"
    }
   ]
  },
  "SUN": {
   "word": "SUN",
   "roles": [
    {
     "kind": "adjective",
     "of": "SUNDIAL"
    }
   ]
  },
  "YELLOW": {
   "word": "YELLOW",
   "roles": [
    {
     "kind": "adjective",
     "of": "YELLOW-PANEL"
    }
   ]
  },
  "WHITE": {
   "word": "WHITE",
   "roles": [
    {
     "kind": "adjective",
     "of": "WHITE-PANEL"
    }
   ]
  },
  "SECRET": {
   "word": "SECRET",
   "roles": [
    {
     "kind": "adjective",
     "of": "SECRET-DOOR"
    }
   ]
  },
  "ROUND": {
   "word": "ROUND",
   "roles": [
    {
     "kind": "adjective",
     "of": "CP-HOLE"
    }
   ]
  },
  "ZZMGCK": {
   "word": "ZZMGCK",
   "roles": [
    {
     "kind": "noun",
     "of": "LOCAL-GLOBALS"
    }
   ]
  },
  "INTNUM": {
   "word": "INTNUM",
   "roles": [
    {
     "kind": "noun",
     "of": "INTNUM"
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
  "THEM": {
   "word": "THEM",
   "roles": [
    {
     "kind": "noun",
     "of": "IT"
    }
   ]
  },
  "HER": {
   "word": "HER",
   "roles": [
    {
     "kind": "noun",
     "of": "IT"
    }
   ]
  },
  "HIM": {
   "word": "HIM",
   "roles": [
    {
     "kind": "noun",
     "of": "IT"
    }
   ]
  },
  "BLESSINGS": {
   "word": "BLESSINGS",
   "roles": [
    {
     "kind": "noun",
     "of": "BLESSINGS"
    }
   ]
  },
  "GRACES": {
   "word": "GRACES",
   "roles": [
    {
     "kind": "noun",
     "of": "BLESSINGS"
    }
   ]
  },
  "STAIRS": {
   "word": "STAIRS",
   "roles": [
    {
     "kind": "noun",
     "of": "STAIRS"
    }
   ]
  },
  "STEPS": {
   "word": "STEPS",
   "roles": [
    {
     "kind": "noun",
     "of": "STAIRS"
    }
   ]
  },
  "STAIRCASE": {
   "word": "STAIRCASE",
   "roles": [
    {
     "kind": "noun",
     "of": "STAIRS"
    }
   ]
  },
  "STAIRWAY": {
   "word": "STAIRWAY",
   "roles": [
    {
     "kind": "noun",
     "of": "STAIRS"
    }
   ]
  },
  "MARBLE": {
   "word": "MARBLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "STAIRS"
    }
   ]
  },
  "FORBIDDING": {
   "word": "FORBIDDING",
   "roles": [
    {
     "kind": "adjective",
     "of": "STAIRS"
    }
   ]
  },
  "STEEP": {
   "word": "STEEP",
   "roles": [
    {
     "kind": "adjective",
     "of": "STAIRS"
    }
   ]
  },
  "SAILOR": {
   "word": "SAILOR",
   "roles": [
    {
     "kind": "noun",
     "of": "SAILOR"
    }
   ]
  },
  "FOOTPAD": {
   "word": "FOOTPAD",
   "roles": [
    {
     "kind": "noun",
     "of": "SAILOR"
    }
   ]
  },
  "AVIATOR": {
   "word": "AVIATOR",
   "roles": [
    {
     "kind": "noun",
     "of": "SAILOR"
    }
   ]
  },
  "GROUND": {
   "word": "GROUND",
   "roles": [
    {
     "kind": "noun",
     "of": "GROUND"
    }
   ]
  },
  "DIRT": {
   "word": "DIRT",
   "roles": [
    {
     "kind": "noun",
     "of": "GROUND"
    }
   ]
  },
  "LURKING": {
   "word": "LURKING",
   "roles": [
    {
     "kind": "adjective",
     "of": "GRUE"
    }
   ]
  },
  "SINISTER": {
   "word": "SINISTER",
   "roles": [
    {
     "kind": "adjective",
     "of": "GRUE"
    }
   ]
  },
  "HUNGRY": {
   "word": "HUNGRY",
   "roles": [
    {
     "kind": "adjective",
     "of": "GRUE"
    }
   ]
  },
  "SILENT": {
   "word": "SILENT",
   "roles": [
    {
     "kind": "adjective",
     "of": "GRUE"
    }
   ]
  },
  "LUNGS": {
   "word": "LUNGS",
   "roles": [
    {
     "kind": "noun",
     "of": "LUNGS"
    }
   ]
  },
  "AIR": {
   "word": "AIR",
   "roles": [
    {
     "kind": "noun",
     "of": "LUNGS"
    }
   ]
  },
  "MOUTH": {
   "word": "MOUTH",
   "roles": [
    {
     "kind": "noun",
     "of": "LUNGS"
    }
   ]
  },
  "BREATH": {
   "word": "BREATH",
   "roles": [
    {
     "kind": "noun",
     "of": "LUNGS"
    }
   ]
  },
  "ME": {
   "word": "ME",
   "roles": [
    {
     "kind": "noun",
     "of": "ME"
    }
   ]
  },
  "MYSELF": {
   "word": "MYSELF",
   "roles": [
    {
     "kind": "noun",
     "of": "ME"
    }
   ]
  },
  "SELF": {
   "word": "SELF",
   "roles": [
    {
     "kind": "noun",
     "of": "ME"
    }
   ]
  },
  "CRETIN": {
   "word": "CRETIN",
   "roles": [
    {
     "kind": "noun",
     "of": "ME"
    }
   ]
  },
  "ADVENTURER": {
   "word": "ADVENTURER",
   "roles": [
    {
     "kind": "noun",
     "of": "ADVENTURER"
    }
   ]
  },
  "TRAIL": {
   "word": "TRAIL",
   "roles": [
    {
     "kind": "noun",
     "of": "PATHOBJ"
    }
   ]
  },
  "PATH": {
   "word": "PATH",
   "roles": [
    {
     "kind": "noun",
     "of": "PATHOBJ"
    }
   ]
  },
  "FOREST": {
   "word": "FOREST",
   "roles": [
    {
     "kind": "adjective",
     "of": "PATHOBJ"
    }
   ]
  },
  "WINDING": {
   "word": "WINDING",
   "roles": [
    {
     "kind": "adjective",
     "of": "PATHOBJ"
    }
   ]
  },
  "ZORKMID": {
   "word": "ZORKMID",
   "roles": [
    {
     "kind": "noun",
     "of": "ZORKMID"
    }
   ]
  },
  "PAIR": {
   "word": "PAIR",
   "roles": [
    {
     "kind": "noun",
     "of": "HANDS"
    }
   ]
  },
  "HANDS": {
   "word": "HANDS",
   "roles": [
    {
     "kind": "noun",
     "of": "HANDS"
    }
   ]
  },
  "BARE": {
   "word": "BARE",
   "roles": [
    {
     "kind": "adjective",
     "of": "HANDS"
    }
   ]
  }
 },
 "files": [
  "3actions.zil",
  "3dungeon.zil",
  "actions.zil",
  "clock.zil",
  "demons.zil",
  "dungeon.zil",
  "gclock.zil",
  "gglobals.zil",
  "gmacros.zil",
  "gmain.zil",
  "gparser.zil",
  "gsyntax.zil",
  "gverbs.zil",
  "macros.zil",
  "main.zil",
  "parser.zil",
  "shadow.zil",
  "syntax.zil",
  "tm.zil",
  "verbs.zil",
  "zork3.zil"
 ]
};
