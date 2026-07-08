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
  "LAND"
 ],
 "rooms": {
  "WEST-OF-HOUSE": {
   "name": "WEST-OF-HOUSE",
   "file": "1dungeon.zil",
   "line": 1239,
   "endLine": 1252,
   "desc": "West of House",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "WEST-HOUSE",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WHITE-HOUSE",
    "BOARD",
    "FOREST"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "NORTH-OF-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SOUTH-OF-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "NORTH-OF-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "SOUTH-OF-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "FOREST-1",
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
     "message": "The door is boarded and you can't remove the boards.",
     "dir": "EAST"
    },
    {
     "to": "STONE-BARROW",
     "kind": "conditional",
     "condition": "WON-FLAG",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "STONE-BARROW",
     "kind": "conditional",
     "condition": "WON-FLAG",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [
    "FRONT-DOOR",
    "MAILBOX"
   ],
   "source": "<ROOM WEST-OF-HOUSE\n      (IN ROOMS)\n      (DESC \"West of House\")\n      (NORTH TO NORTH-OF-HOUSE)\n      (SOUTH TO SOUTH-OF-HOUSE)\n      (NE TO NORTH-OF-HOUSE)\n      (SE TO SOUTH-OF-HOUSE)\n      (WEST TO FOREST-1)\n      (EAST \"The door is boarded and you can't remove the boards.\")\n      (SW TO STONE-BARROW IF WON-FLAG)\n      (IN TO STONE-BARROW IF WON-FLAG)\n      (ACTION WEST-HOUSE)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL WHITE-HOUSE BOARD FOREST)>",
   "referencedBy": [
    "WHITE-HOUSE-F",
    "FOREST-F",
    "GO",
    "SCORE-UPD"
   ]
  },
  "STONE-BARROW": {
   "name": "STONE-BARROW",
   "file": "1dungeon.zil",
   "line": 1254,
   "endLine": 1262,
   "desc": "Stone Barrow",
   "ldesc": "You are standing in front of a massive barrow of stone. In the east face\nis a huge stone door which is open. You cannot see into the dark of the tomb.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "STONE-BARROW-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "WEST-OF-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    }
   ],
   "contents": [
    "BARROW-DOOR",
    "BARROW"
   ],
   "source": "<ROOM STONE-BARROW\n      (IN ROOMS)\n      (LDESC\n\"You are standing in front of a massive barrow of stone. In the east face\nis a huge stone door which is open. You cannot see into the dark of the tomb.\")\n      (DESC \"Stone Barrow\")\n      (NE TO WEST-OF-HOUSE)\n      (ACTION STONE-BARROW-FCN)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)>",
   "referencedBy": []
  },
  "NORTH-OF-HOUSE": {
   "name": "NORTH-OF-HOUSE",
   "file": "1dungeon.zil",
   "line": 1264,
   "endLine": 1278,
   "desc": "North of House",
   "ldesc": "You are facing the north side of a white house. There is no door here,\nand all the windows are boarded up. To the north a narrow path winds through\nthe trees.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BOARDED-WINDOW",
    "BOARD",
    "WHITE-HOUSE",
    "FOREST"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "WEST-OF-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "EAST-OF-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "WEST-OF-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "EAST-OF-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "PATH",
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
     "message": "The windows are all boarded.",
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM NORTH-OF-HOUSE\n      (IN ROOMS)\n      (LDESC\n\"You are facing the north side of a white house. There is no door here,\nand all the windows are boarded up. To the north a narrow path winds through\nthe trees.\")\n      (DESC \"North of House\")\n      (SW TO WEST-OF-HOUSE)\n      (SE TO EAST-OF-HOUSE)\n      (WEST TO WEST-OF-HOUSE)\n      (EAST TO EAST-OF-HOUSE)\n      (NORTH TO PATH)\n      (SOUTH \"The windows are all boarded.\")\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL BOARDED-WINDOW BOARD WHITE-HOUSE FOREST)>",
   "referencedBy": [
    "WHITE-HOUSE-F",
    "FOREST-F"
   ]
  },
  "SOUTH-OF-HOUSE": {
   "name": "SOUTH-OF-HOUSE",
   "file": "1dungeon.zil",
   "line": 1280,
   "endLine": 1293,
   "desc": "South of House",
   "ldesc": "You are facing the south side of a white house. There is no door here,\nand all the windows are boarded.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BOARDED-WINDOW",
    "BOARD",
    "WHITE-HOUSE",
    "FOREST"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "WEST-OF-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "EAST-OF-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "EAST-OF-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "WEST-OF-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "FOREST-3",
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
     "message": "The windows are all boarded.",
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM SOUTH-OF-HOUSE\n      (IN ROOMS)\n      (LDESC\n\"You are facing the south side of a white house. There is no door here,\nand all the windows are boarded.\")\n      (DESC \"South of House\")\n      (WEST TO WEST-OF-HOUSE)\n      (EAST TO EAST-OF-HOUSE)\n      (NE TO EAST-OF-HOUSE)\n      (NW TO WEST-OF-HOUSE)\n      (SOUTH TO FOREST-3)\n      (NORTH \"The windows are all boarded.\")\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL BOARDED-WINDOW BOARD WHITE-HOUSE FOREST)>",
   "referencedBy": [
    "WHITE-HOUSE-F",
    "FOREST-F"
   ]
  },
  "EAST-OF-HOUSE": {
   "name": "EAST-OF-HOUSE",
   "file": "1dungeon.zil",
   "line": 1295,
   "endLine": 1307,
   "desc": "Behind House",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "EAST-HOUSE",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WHITE-HOUSE",
    "KITCHEN-WINDOW",
    "FOREST"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "NORTH-OF-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SOUTH-OF-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "SOUTH-OF-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "NORTH-OF-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "CLEARING",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "KITCHEN",
     "kind": "conditional",
     "condition": "KITCHEN-WINDOW IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "KITCHEN",
     "kind": "conditional",
     "condition": "KITCHEN-WINDOW IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [],
   "source": "<ROOM EAST-OF-HOUSE\n      (IN ROOMS)\n      (DESC \"Behind House\")\n      (NORTH TO NORTH-OF-HOUSE)\n      (SOUTH TO SOUTH-OF-HOUSE)\n      (SW TO SOUTH-OF-HOUSE)\n      (NW TO NORTH-OF-HOUSE)\n      (EAST TO CLEARING)\n      (WEST TO KITCHEN IF KITCHEN-WINDOW IS OPEN)\n      (IN TO KITCHEN IF KITCHEN-WINDOW IS OPEN)\n      (ACTION EAST-HOUSE)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL WHITE-HOUSE KITCHEN-WINDOW FOREST)>",
   "referencedBy": [
    "WHITE-HOUSE-F",
    "FOREST-F"
   ]
  },
  "FOREST-1": {
   "name": "FOREST-1",
   "file": "1dungeon.zil",
   "line": 1309,
   "endLine": 1322,
   "desc": "Forest",
   "ldesc": "This is a forest, with trees in all directions. To the east,\nthere appears to be sunlight.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "FOREST-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TREE",
    "SONGBIRD",
    "WHITE-HOUSE",
    "FOREST"
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
     "message": "There is no tree here suitable for climbing.",
     "dir": "UP"
    },
    {
     "to": "GRATING-CLEARING",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "PATH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "FOREST-3",
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
     "message": "You would need a machete to go further west.",
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM FOREST-1\n      (IN ROOMS)\n      (LDESC\n\"This is a forest, with trees in all directions. To the east,\nthere appears to be sunlight.\")\n      (DESC \"Forest\")\n      (UP \"There is no tree here suitable for climbing.\")\n      (NORTH TO GRATING-CLEARING)\n      (EAST TO PATH)\n      (SOUTH TO FOREST-3)\n      (WEST \"You would need a machete to go further west.\")\n      (ACTION FOREST-ROOM)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL TREE SONGBIRD WHITE-HOUSE FOREST)>",
   "referencedBy": [
    "FOREST-ROOM?",
    "DEAD-FUNCTION",
    "JIGS-UP",
    "V-PRAY"
   ]
  },
  "FOREST-2": {
   "name": "FOREST-2",
   "file": "1dungeon.zil",
   "line": 1324,
   "endLine": 1335,
   "desc": "Forest",
   "ldesc": "This is a dimly lit forest, with large trees all around.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "FOREST-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TREE",
    "SONGBIRD",
    "WHITE-HOUSE",
    "FOREST"
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
     "message": "There is no tree here suitable for climbing.",
     "dir": "UP"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The forest becomes impenetrable to the north.",
     "dir": "NORTH"
    },
    {
     "to": "MOUNTAINS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "CLEARING",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "PATH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM FOREST-2\n      (IN ROOMS)\n      (LDESC \"This is a dimly lit forest, with large trees all around.\")\n      (DESC \"Forest\")\n      (UP \"There is no tree here suitable for climbing.\")\n      (NORTH \"The forest becomes impenetrable to the north.\")\n      (EAST TO MOUNTAINS)\n      (SOUTH TO CLEARING)\n      (WEST TO PATH)\n      (ACTION FOREST-ROOM)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL TREE SONGBIRD WHITE-HOUSE FOREST)>",
   "referencedBy": [
    "FOREST-ROOM?"
   ]
  },
  "MOUNTAINS": {
   "name": "MOUNTAINS",
   "file": "1dungeon.zil",
   "line": 1337,
   "endLine": 1347,
   "desc": "Forest",
   "ldesc": "The forest thins out, revealing impassable mountains.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TREE",
    "WHITE-HOUSE"
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
     "message": "The mountains are impassable.",
     "dir": "UP"
    },
    {
     "to": "FOREST-2",
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
     "message": "The mountains are impassable.",
     "dir": "EAST"
    },
    {
     "to": "FOREST-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "FOREST-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "MOUNTAIN-RANGE"
   ],
   "source": "<ROOM MOUNTAINS\n      (IN ROOMS)\n      (LDESC \"The forest thins out, revealing impassable mountains.\")\n      (DESC \"Forest\")\n      (UP \"The mountains are impassable.\")\n      (NORTH TO FOREST-2)\n      (EAST \"The mountains are impassable.\")\n      (SOUTH TO FOREST-2)\n      (WEST TO FOREST-2)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL TREE WHITE-HOUSE)>",
   "referencedBy": []
  },
  "FOREST-3": {
   "name": "FOREST-3",
   "file": "1dungeon.zil",
   "line": 1349,
   "endLine": 1361,
   "desc": "Forest",
   "ldesc": "This is a dimly lit forest, with large trees all around.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "FOREST-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TREE",
    "SONGBIRD",
    "WHITE-HOUSE",
    "FOREST"
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
     "message": "There is no tree here suitable for climbing.",
     "dir": "UP"
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
     "message": "The rank undergrowth prevents eastward movement.",
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Storm-tossed trees block your way.",
     "dir": "SOUTH"
    },
    {
     "to": "FOREST-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SOUTH-OF-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM FOREST-3\n      (IN ROOMS)\n      (LDESC \"This is a dimly lit forest, with large trees all around.\")\n      (DESC \"Forest\")\n      (UP \"There is no tree here suitable for climbing.\")\n      (NORTH TO CLEARING)\n      (EAST \"The rank undergrowth prevents eastward movement.\")\n      (SOUTH \"Storm-tossed trees block your way.\")\n      (WEST TO FOREST-1)\n      (NW TO SOUTH-OF-HOUSE)\n      (ACTION FOREST-ROOM)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL TREE SONGBIRD WHITE-HOUSE FOREST)>",
   "referencedBy": [
    "FOREST-ROOM?"
   ]
  },
  "PATH": {
   "name": "PATH",
   "file": "1dungeon.zil",
   "line": 1363,
   "endLine": 1377,
   "desc": "Forest Path",
   "ldesc": "This is a path winding through a dimly lit forest. The path heads\nnorth-south here. One particularly large tree with some low branches\nstands at the edge of the path.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "FOREST-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TREE",
    "SONGBIRD",
    "WHITE-HOUSE",
    "FOREST"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "UP-A-TREE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "GRATING-CLEARING",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "FOREST-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "NORTH-OF-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "FOREST-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM PATH\n      (IN ROOMS)\n      (LDESC\n\"This is a path winding through a dimly lit forest. The path heads\nnorth-south here. One particularly large tree with some low branches\nstands at the edge of the path.\")\n      (DESC \"Forest Path\")\n      (UP TO UP-A-TREE)\n      (NORTH TO GRATING-CLEARING)\n      (EAST TO FOREST-2)\n      (SOUTH TO NORTH-OF-HOUSE)\n      (WEST TO FOREST-1)\n      (ACTION FOREST-ROOM)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL TREE SONGBIRD WHITE-HOUSE FOREST)>",
   "referencedBy": [
    "TREE-ROOM",
    "CANARY-OBJECT",
    "FOREST-ROOM?",
    "V-CLIMB-UP",
    "SHAKE-LOOP"
   ]
  },
  "UP-A-TREE": {
   "name": "UP-A-TREE",
   "file": "1dungeon.zil",
   "line": 1379,
   "endLine": 1386,
   "desc": "Up a Tree",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "TREE-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TREE",
    "FOREST",
    "SONGBIRD",
    "WHITE-HOUSE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "PATH",
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
     "message": "You cannot climb any higher.",
     "dir": "UP"
    }
   ],
   "contents": [
    "NEST"
   ],
   "source": "<ROOM UP-A-TREE\n      (IN ROOMS)\n      (DESC \"Up a Tree\")\n      (DOWN TO PATH)\n      (UP \"You cannot climb any higher.\")\n      (ACTION TREE-ROOM)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL TREE FOREST SONGBIRD WHITE-HOUSE)>",
   "referencedBy": [
    "CANARY-OBJECT",
    "FOREST-ROOM?",
    "V-LEAP",
    "SHAKE-LOOP"
   ]
  },
  "GRATING-CLEARING": {
   "name": "GRATING-CLEARING",
   "file": "1dungeon.zil",
   "line": 1388,
   "endLine": 1398,
   "desc": "Clearing",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CLEARING-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WHITE-HOUSE",
    "GRATE"
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
     "message": "The forest becomes impenetrable to the north.",
     "dir": "NORTH"
    },
    {
     "to": "FOREST-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "FOREST-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "PATH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GRATING-EXIT",
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "LEAVES"
   ],
   "source": "<ROOM GRATING-CLEARING\n      (IN ROOMS)\n      (DESC \"Clearing\")\n      (NORTH \"The forest becomes impenetrable to the north.\")\n      (EAST TO FOREST-2)\n      (WEST TO FOREST-1)\n      (SOUTH TO PATH)\n      (DOWN PER GRATING-EXIT)\n      (ACTION CLEARING-FCN)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL WHITE-HOUSE GRATE)>",
   "referencedBy": [
    "GRATE-FUNCTION"
   ]
  },
  "CLEARING": {
   "name": "CLEARING",
   "file": "1dungeon.zil",
   "line": 1410,
   "endLine": 1423,
   "desc": "Clearing",
   "ldesc": "You are in a small clearing in a well marked forest path that\nextends to the east and west.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "FOREST-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TREE",
    "SONGBIRD",
    "WHITE-HOUSE",
    "FOREST"
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
     "message": "There is no tree here suitable for climbing.",
     "dir": "UP"
    },
    {
     "to": "CANYON-VIEW",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "FOREST-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "FOREST-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "EAST-OF-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM CLEARING\n      (IN ROOMS)\n      (LDESC\n\"You are in a small clearing in a well marked forest path that\nextends to the east and west.\")\n      (DESC \"Clearing\")\n      (UP \"There is no tree here suitable for climbing.\")\n      (EAST TO CANYON-VIEW)\n      (NORTH TO FOREST-2)\n      (SOUTH TO FOREST-3)\n      (WEST TO EAST-OF-HOUSE)\n      (ACTION FOREST-ROOM)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL TREE SONGBIRD WHITE-HOUSE FOREST)>",
   "referencedBy": [
    "WHITE-HOUSE-F",
    "GRATE-FUNCTION"
   ]
  },
  "KITCHEN": {
   "name": "KITCHEN",
   "file": "1dungeon.zil",
   "line": 1429,
   "endLine": 1441,
   "desc": "Kitchen",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "KITCHEN-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "KITCHEN-WINDOW",
    "CHIMNEY",
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "10"
    ]
   },
   "exits": [
    {
     "to": "EAST-OF-HOUSE",
     "kind": "conditional",
     "condition": "KITCHEN-WINDOW IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "LIVING-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "EAST-OF-HOUSE",
     "kind": "conditional",
     "condition": "KITCHEN-WINDOW IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "ATTIC",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "STUDIO",
     "kind": "conditional",
     "condition": "FALSE-FLAG",
     "else": "\"Only Santa Claus climbs down chimneys.\"",
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "KITCHEN-TABLE"
   ],
   "source": "<ROOM KITCHEN\n      (IN ROOMS)\n      (DESC \"Kitchen\")\n      (EAST TO EAST-OF-HOUSE IF KITCHEN-WINDOW IS OPEN)\n      (WEST TO LIVING-ROOM)\n      (OUT TO EAST-OF-HOUSE IF KITCHEN-WINDOW IS OPEN)\n      (UP TO ATTIC)\n      (DOWN TO STUDIO IF FALSE-FLAG ELSE\n\t \"Only Santa Claus climbs down chimneys.\")\n      (ACTION KITCHEN-FCN)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (VALUE 10)\n      (GLOBAL KITCHEN-WINDOW CHIMNEY STAIRS)>",
   "referencedBy": [
    "WHITE-HOUSE-F",
    "KITCHEN-WINDOW-F",
    "CHIMNEY-F",
    "UP-CHIMNEY-FUNCTION"
   ]
  },
  "ATTIC": {
   "name": "ATTIC",
   "file": "1dungeon.zil",
   "line": 1443,
   "endLine": 1449,
   "desc": "Attic",
   "ldesc": "This is the attic. The only exit is a stairway leading down.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "SACREDBIT"
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
     "to": "KITCHEN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "ATTIC-TABLE",
    "ROPE"
   ],
   "source": "<ROOM ATTIC\n      (IN ROOMS)\n      (LDESC \"This is the attic. The only exit is a stairway leading down.\")\n      (DESC \"Attic\")\n      (DOWN TO KITCHEN)\n      (FLAGS RLANDBIT SACREDBIT)\n      (GLOBAL STAIRS)>",
   "referencedBy": [
    "WHITE-HOUSE-F"
   ]
  },
  "LIVING-ROOM": {
   "name": "LIVING-ROOM",
   "file": "1dungeon.zil",
   "line": 1451,
   "endLine": 1460,
   "desc": "Living Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "LIVING-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIRS"
   ],
   "pseudo": [
    "NAILS",
    "NAILS-PSEUDO",
    "NAIL",
    "NAILS-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "KITCHEN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "STRANGE-PASSAGE",
     "kind": "conditional",
     "condition": "MAGIC-FLAG",
     "else": "\"The door is nailed shut.\"",
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "TRAP-DOOR-EXIT",
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "TROPHY-CASE",
    "RUG",
    "TRAP-DOOR",
    "LAMP",
    "WOODEN-DOOR",
    "SWORD"
   ],
   "source": "<ROOM LIVING-ROOM\n      (IN ROOMS)\n      (DESC \"Living Room\")\n      (EAST TO KITCHEN)\n      (WEST TO STRANGE-PASSAGE IF MAGIC-FLAG ELSE \"The door is nailed shut.\")\n      (DOWN PER TRAP-DOOR-EXIT)\n      (ACTION LIVING-ROOM-FCN)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL STAIRS)\n      (PSEUDO \"NAILS\" NAILS-PSEUDO \"NAIL\" NAILS-PSEUDO)>",
   "referencedBy": [
    "WHITE-HOUSE-F",
    "TRAP-DOOR-FCN",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "CELLAR": {
   "name": "CELLAR",
   "file": "1dungeon.zil",
   "line": 1466,
   "endLine": 1477,
   "desc": "Cellar",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CELLAR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TRAP-DOOR",
    "SLIDE",
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "25"
    ]
   },
   "exits": [
    {
     "to": "TROLL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "EAST-OF-CHASM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "LIVING-ROOM",
     "kind": "conditional",
     "condition": "TRAP-DOOR IS OPEN",
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
     "message": "You try to ascend the ramp, but it is impossible, and you slide back down.",
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM CELLAR\n      (IN ROOMS)\n      (DESC \"Cellar\")\n      (NORTH TO TROLL-ROOM)\n      (SOUTH TO EAST-OF-CHASM)\n      (UP TO LIVING-ROOM IF TRAP-DOOR IS OPEN)\n      (WEST\n\"You try to ascend the ramp, but it is impossible, and you slide back down.\")\n      (ACTION CELLAR-FCN)\n      (FLAGS RLANDBIT)\n      (VALUE 25)\n      (GLOBAL TRAP-DOOR SLIDE STAIRS)>",
   "referencedBy": [
    "TRAP-DOOR-FCN",
    "TRAP-DOOR-EXIT",
    "SLIDE-FUNCTION",
    "SLIDER"
   ]
  },
  "TROLL-ROOM": {
   "name": "TROLL-ROOM",
   "file": "1dungeon.zil",
   "line": 1479,
   "endLine": 1492,
   "desc": "The Troll Room",
   "ldesc": "This is a small room with passages to the east and south and a\nforbidding hole leading west. Bloodstains and deep scratches\n(perhaps made by an axe) mar the walls.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "TROLL-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "CELLAR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "EW-PASSAGE",
     "kind": "conditional",
     "condition": "TROLL-FLAG",
     "else": "\"The troll fends you off with a menacing gesture.\"",
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MAZE-1",
     "kind": "conditional",
     "condition": "TROLL-FLAG",
     "else": "\"The troll fends you off with a menacing gesture.\"",
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "TROLL"
   ],
   "source": "<ROOM TROLL-ROOM\n      (IN ROOMS)\n      (LDESC\n\"This is a small room with passages to the east and south and a\nforbidding hole leading west. Bloodstains and deep scratches\n(perhaps made by an axe) mar the walls.\")\n      (DESC \"The Troll Room\")\n      (SOUTH TO CELLAR)\n      (EAST TO EW-PASSAGE\n       IF TROLL-FLAG ELSE \"The troll fends you off with a menacing gesture.\")\n      (WEST TO MAZE-1\n       IF TROLL-FLAG ELSE \"The troll fends you off with a menacing gesture.\")\n      (FLAGS RLANDBIT)\n      (ACTION TROLL-ROOM-F)>",
   "referencedBy": [
    "TROLL-FCN",
    "DEAD-FUNCTION"
   ]
  },
  "EAST-OF-CHASM": {
   "name": "EAST-OF-CHASM",
   "file": "1dungeon.zil",
   "line": 1494,
   "endLine": 1505,
   "desc": "East of Chasm",
   "ldesc": "You are on the east edge of a chasm, the bottom of which cannot be\nseen. A narrow passage goes north, and the path you are on continues\nto the east.",
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
   "pseudo": [
    "CHASM",
    "CHASM-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "CELLAR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "GALLERY",
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
     "message": "The chasm probably leads straight to the infernal regions.",
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM EAST-OF-CHASM\n      (IN ROOMS)\n      (LDESC\n\"You are on the east edge of a chasm, the bottom of which cannot be\nseen. A narrow passage goes north, and the path you are on continues\nto the east.\")\n      (DESC \"East of Chasm\")\n      (NORTH TO CELLAR)\n      (EAST TO GALLERY)\n      (DOWN \"The chasm probably leads straight to the infernal regions.\")\n      (FLAGS RLANDBIT)\n      (PSEUDO \"CHASM\" CHASM-PSEUDO)>",
   "referencedBy": []
  },
  "GALLERY": {
   "name": "GALLERY",
   "file": "1dungeon.zil",
   "line": 1507,
   "endLine": 1516,
   "desc": "Gallery",
   "ldesc": "This is an art gallery. Most of the paintings have been stolen by\nvandals with exceptional taste. The vandals left through either the\nnorth or west exits.",
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
     "to": "EAST-OF-CHASM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "STUDIO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "PAINTING"
   ],
   "source": "<ROOM GALLERY\n      (IN ROOMS)\n      (LDESC\n\"This is an art gallery. Most of the paintings have been stolen by\nvandals with exceptional taste. The vandals left through either the\nnorth or west exits.\")\n      (DESC \"Gallery\")\n      (WEST TO EAST-OF-CHASM)\n      (NORTH TO STUDIO)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": []
  },
  "STUDIO": {
   "name": "STUDIO",
   "file": "1dungeon.zil",
   "line": 1518,
   "endLine": 1532,
   "desc": "Studio",
   "ldesc": "This appears to have been an artist's studio. The walls and floors are\nsplattered with paints of 69 different colors. Strangely enough, nothing\nof value is hanging here. At the south end of the room is an open door\n(also covered with paint). A dark and narrow chimney leads up from a\nfireplace; although you might be able to get up it, it seems unlikely\nyou could get back down.",
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
    "CHIMNEY"
   ],
   "pseudo": [
    "DOOR",
    "DOOR-PSEUDO",
    "PAINT",
    "PAINT-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "GALLERY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "UP-CHIMNEY-FUNCTION",
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [
    "OWNERS-MANUAL"
   ],
   "source": "<ROOM STUDIO\n      (IN ROOMS)\n      (LDESC\n\"This appears to have been an artist's studio. The walls and floors are\nsplattered with paints of 69 different colors. Strangely enough, nothing\nof value is hanging here. At the south end of the room is an open door\n(also covered with paint). A dark and narrow chimney leads up from a\nfireplace; although you might be able to get up it, it seems unlikely\nyou could get back down.\")\n      (DESC \"Studio\")\n      (SOUTH TO GALLERY)\n      (UP PER UP-CHIMNEY-FUNCTION)\n      (FLAGS RLANDBIT)\n      (GLOBAL CHIMNEY)\n      (PSEUDO \"DOOR\" DOOR-PSEUDO \"PAINT\" PAINT-PSEUDO)>",
   "referencedBy": []
  },
  "MAZE-1": {
   "name": "MAZE-1",
   "file": "1dungeon.zil",
   "line": 1538,
   "endLine": 1546,
   "desc": "Maze",
   "ldesc": "This is part of a maze of twisty little passages, all alike.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "MAZEBIT"
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
     "to": "TROLL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MAZE-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MAZE-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "MAZE-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM MAZE-1\n      (IN ROOMS)\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (DESC \"Maze\")\n      (EAST TO TROLL-ROOM)\n      (NORTH TO MAZE-1)\n      (SOUTH TO MAZE-2)\n      (WEST TO MAZE-4)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": []
  },
  "MAZE-2": {
   "name": "MAZE-2",
   "file": "1dungeon.zil",
   "line": 1548,
   "endLine": 1555,
   "desc": "Maze",
   "ldesc": "This is part of a maze of twisty little passages, all alike.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "MAZEBIT"
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
     "to": "MAZE-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MAZE-DIODES",
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "MAZE-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM MAZE-2\n      (IN ROOMS)\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (DESC \"Maze\")\n      (SOUTH TO MAZE-1)\n      (DOWN PER MAZE-DIODES) ;\"to MAZE-4\"\n      (EAST TO MAZE-3)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": [
    "MAZE-DIODES"
   ]
  },
  "MAZE-3": {
   "name": "MAZE-3",
   "file": "1dungeon.zil",
   "line": 1557,
   "endLine": 1564,
   "desc": "Maze",
   "ldesc": "This is part of a maze of twisty little passages, all alike.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "MAZEBIT"
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
     "to": "MAZE-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MAZE-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MAZE-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM MAZE-3\n      (IN ROOMS)\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (DESC \"Maze\")\n      (WEST TO MAZE-2)\n      (NORTH TO MAZE-4)\n      (UP TO MAZE-5)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": []
  },
  "MAZE-4": {
   "name": "MAZE-4",
   "file": "1dungeon.zil",
   "line": 1566,
   "endLine": 1573,
   "desc": "Maze",
   "ldesc": "This is part of a maze of twisty little passages, all alike.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "MAZEBIT"
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
     "to": "MAZE-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MAZE-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "DEAD-END-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM MAZE-4\n      (IN ROOMS)\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (DESC \"Maze\")\n      (WEST TO MAZE-3)\n      (NORTH TO MAZE-1)\n      (EAST TO DEAD-END-1)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": [
    "MAZE-DIODES"
   ]
  },
  "DEAD-END-1": {
   "name": "DEAD-END-1",
   "file": "1dungeon.zil",
   "line": 1575,
   "endLine": 1580,
   "desc": "Dead End",
   "ldesc": "You have come to a dead end in the maze.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "MAZEBIT"
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
     "to": "MAZE-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM DEAD-END-1\n      (IN ROOMS)\n      (DESC \"Dead End\")\n      (LDESC \"You have come to a dead end in the maze.\")\n      (SOUTH TO MAZE-4)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": [
    "MAZE-DIODES"
   ]
  },
  "MAZE-5": {
   "name": "MAZE-5",
   "file": "1dungeon.zil",
   "line": 1582,
   "endLine": 1590,
   "desc": "Maze",
   "ldesc": "This is part of a maze of twisty little passages, all alike.\nA skeleton, probably the remains of a luckless adventurer, lies here.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "MAZEBIT"
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
     "to": "DEAD-END-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MAZE-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MAZE-6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [
    "BONES",
    "BURNED-OUT-LANTERN",
    "BAG-OF-COINS",
    "RUSTY-KNIFE",
    "KEYS"
   ],
   "source": "<ROOM MAZE-5\n      (IN ROOMS)\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\nA skeleton, probably the remains of a luckless adventurer, lies here.\")\n      (DESC \"Maze\")\n      (EAST TO DEAD-END-2)\n      (NORTH TO MAZE-3)\n      (SW TO MAZE-6)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": [
    "MAZE-DIODES"
   ]
  },
  "DEAD-END-2": {
   "name": "DEAD-END-2",
   "file": "1dungeon.zil",
   "line": 1592,
   "endLine": 1597,
   "desc": "Dead End",
   "ldesc": "You have come to a dead end in the maze.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "MAZEBIT"
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
     "to": "MAZE-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM DEAD-END-2\n      (IN ROOMS)\n      (DESC \"Dead End\")\n      (LDESC \"You have come to a dead end in the maze.\")\n      (WEST TO MAZE-5)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": []
  },
  "MAZE-6": {
   "name": "MAZE-6",
   "file": "1dungeon.zil",
   "line": 1599,
   "endLine": 1607,
   "desc": "Maze",
   "ldesc": "This is part of a maze of twisty little passages, all alike.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "MAZEBIT"
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
     "to": "MAZE-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "MAZE-7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MAZE-6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MAZE-9",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM MAZE-6\n      (IN ROOMS)\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (DESC \"Maze\")\n      (DOWN TO MAZE-5)\n      (EAST TO MAZE-7)\n      (WEST TO MAZE-6)\n      (UP TO MAZE-9)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": []
  },
  "MAZE-7": {
   "name": "MAZE-7",
   "file": "1dungeon.zil",
   "line": 1609,
   "endLine": 1618,
   "desc": "Maze",
   "ldesc": "This is part of a maze of twisty little passages, all alike.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "MAZEBIT"
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
     "to": "MAZE-14",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "MAZE-6",
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
     "per": "MAZE-DIODES",
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "MAZE-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MAZE-15",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM MAZE-7\n      (IN ROOMS)\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (DESC \"Maze\")\n      (UP TO MAZE-14)\n      (WEST TO MAZE-6)\n      (DOWN PER MAZE-DIODES) ;\"to DEAD-END-1\"\n      (EAST TO MAZE-8)\n      (SOUTH TO MAZE-15)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": [
    "MAZE-DIODES"
   ]
  },
  "MAZE-8": {
   "name": "MAZE-8",
   "file": "1dungeon.zil",
   "line": 1620,
   "endLine": 1627,
   "desc": "Maze",
   "ldesc": "This is part of a maze of twisty little passages, all alike.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "MAZEBIT"
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
     "to": "MAZE-7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "MAZE-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "DEAD-END-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [],
   "source": "<ROOM MAZE-8\n      (IN ROOMS)\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (DESC \"Maze\")\n      (NE TO MAZE-7)\n      (WEST TO MAZE-8)\n      (SE TO DEAD-END-3)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": []
  },
  "DEAD-END-3": {
   "name": "DEAD-END-3",
   "file": "1dungeon.zil",
   "line": 1629,
   "endLine": 1634,
   "desc": "Dead End",
   "ldesc": "You have come to a dead end in the maze.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "MAZEBIT"
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
     "to": "MAZE-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM DEAD-END-3\n      (IN ROOMS)\n      (DESC \"Dead End\")\n      (LDESC \"You have come to a dead end in the maze.\")\n      (NORTH TO MAZE-8)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": []
  },
  "MAZE-9": {
   "name": "MAZE-9",
   "file": "1dungeon.zil",
   "line": 1636,
   "endLine": 1646,
   "desc": "Maze",
   "ldesc": "This is part of a maze of twisty little passages, all alike.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "MAZEBIT"
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
     "to": "MAZE-6",
     "kind": "unconditional",
     "condition": null,
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
     "per": "MAZE-DIODES",
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "MAZE-10",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MAZE-13",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "MAZE-12",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MAZE-9",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM MAZE-9\n      (IN ROOMS)\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (DESC \"Maze\")\n      (NORTH TO MAZE-6)\n      (DOWN PER MAZE-DIODES) ;\"to MAZE-11\"\n      (EAST TO MAZE-10)\n      (SOUTH TO MAZE-13)\n      (WEST TO MAZE-12)\n      (NW TO MAZE-9)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": [
    "MAZE-DIODES"
   ]
  },
  "MAZE-10": {
   "name": "MAZE-10",
   "file": "1dungeon.zil",
   "line": 1648,
   "endLine": 1655,
   "desc": "Maze",
   "ldesc": "This is part of a maze of twisty little passages, all alike.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "MAZEBIT"
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
     "to": "MAZE-9",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MAZE-13",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MAZE-11",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM MAZE-10\n      (IN ROOMS)\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (DESC \"Maze\")\n      (EAST TO MAZE-9)\n      (WEST TO MAZE-13)\n      (UP TO MAZE-11)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": []
  },
  "MAZE-11": {
   "name": "MAZE-11",
   "file": "1dungeon.zil",
   "line": 1657,
   "endLine": 1665,
   "desc": "Maze",
   "ldesc": "This is part of a maze of twisty little passages, all alike.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "MAZEBIT"
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
     "to": "GRATING-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "MAZE-10",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "MAZE-13",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "MAZE-12",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM MAZE-11\n      (IN ROOMS)\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (DESC \"Maze\")\n       (NE TO GRATING-ROOM)\n      (DOWN TO MAZE-10)\n      (NW TO MAZE-13)\n      (SW TO MAZE-12)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": [
    "MAZE-DIODES"
   ]
  },
  "GRATING-ROOM": {
   "name": "GRATING-ROOM",
   "file": "1dungeon.zil",
   "line": 1667,
   "endLine": 1675,
   "desc": "Grating Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MAZE-11-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GRATE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "MAZE-11",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "GRATING-CLEARING",
     "kind": "conditional",
     "condition": "GRATE IS OPEN",
     "else": "\"The grating is closed.\"",
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM GRATING-ROOM\n      (IN ROOMS)\n      (DESC \"Grating Room\")\n      (SW TO MAZE-11)\n      (UP TO GRATING-CLEARING\n       IF GRATE IS OPEN ELSE \"The grating is closed.\")\n      (ACTION MAZE-11-FCN)\n      (GLOBAL GRATE)\n      (FLAGS RLANDBIT)>",
   "referencedBy": [
    "GRATE-FUNCTION",
    "GRATING-EXIT"
   ]
  },
  "MAZE-12": {
   "name": "MAZE-12",
   "file": "1dungeon.zil",
   "line": 1677,
   "endLine": 1686,
   "desc": "Maze",
   "ldesc": "This is part of a maze of twisty little passages, all alike.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "MAZEBIT"
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
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MAZE-DIODES",
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "MAZE-11",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "MAZE-13",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MAZE-9",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "DEAD-END-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM MAZE-12\n      (IN ROOMS)\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (DESC \"Maze\")\n      (DOWN PER MAZE-DIODES) ;\"to MAZE-5\"\n      (SW TO MAZE-11)\n      (EAST TO MAZE-13)\n      (UP TO MAZE-9)\n      (NORTH TO DEAD-END-4)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": [
    "MAZE-DIODES"
   ]
  },
  "DEAD-END-4": {
   "name": "DEAD-END-4",
   "file": "1dungeon.zil",
   "line": 1688,
   "endLine": 1693,
   "desc": "Dead End",
   "ldesc": "You have come to a dead end in the maze.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "MAZEBIT"
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
     "to": "MAZE-12",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM DEAD-END-4\n      (IN ROOMS)\n      (DESC \"Dead End\")\n      (LDESC \"You have come to a dead end in the maze.\")\n      (SOUTH TO MAZE-12)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": []
  },
  "MAZE-13": {
   "name": "MAZE-13",
   "file": "1dungeon.zil",
   "line": 1695,
   "endLine": 1703,
   "desc": "Maze",
   "ldesc": "This is part of a maze of twisty little passages, all alike.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "MAZEBIT"
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
     "to": "MAZE-9",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MAZE-12",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "MAZE-10",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "MAZE-11",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM MAZE-13\n      (IN ROOMS)\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (DESC \"Maze\")\n      (EAST TO MAZE-9)\n      (DOWN TO MAZE-12)\n      (SOUTH TO MAZE-10)\n      (WEST TO MAZE-11)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": []
  },
  "MAZE-14": {
   "name": "MAZE-14",
   "file": "1dungeon.zil",
   "line": 1705,
   "endLine": 1713,
   "desc": "Maze",
   "ldesc": "This is part of a maze of twisty little passages, all alike.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "MAZEBIT"
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
     "to": "MAZE-15",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MAZE-14",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "MAZE-7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "MAZE-7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM MAZE-14\n      (IN ROOMS)\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (DESC \"Maze\")\n       (WEST TO MAZE-15)\n      (NW TO MAZE-14)\n      (NE TO MAZE-7)\n      (SOUTH TO MAZE-7)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": []
  },
  "MAZE-15": {
   "name": "MAZE-15",
   "file": "1dungeon.zil",
   "line": 1715,
   "endLine": 1722,
   "desc": "Maze",
   "ldesc": "This is part of a maze of twisty little passages, all alike.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "MAZEBIT"
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
     "to": "MAZE-14",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MAZE-7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "CYCLOPS-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [],
   "source": "<ROOM MAZE-15\n      (IN ROOMS)\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (DESC \"Maze\")\n      (WEST TO MAZE-14)\n      (SOUTH TO MAZE-7)\n      (SE TO CYCLOPS-ROOM)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": []
  },
  "CYCLOPS-ROOM": {
   "name": "CYCLOPS-ROOM",
   "file": "1dungeon.zil",
   "line": 1728,
   "endLine": 1738,
   "desc": "Cyclops Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CYCLOPS-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "MAZE-15",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "STRANGE-PASSAGE",
     "kind": "conditional",
     "condition": "MAGIC-FLAG",
     "else": "\"The east wall is solid rock.\"",
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "TREASURE-ROOM",
     "kind": "conditional",
     "condition": "CYCLOPS-FLAG",
     "else": "\"The cyclops doesn't look like he'll let you past.\"",
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [
    "CYCLOPS"
   ],
   "source": "<ROOM CYCLOPS-ROOM\n      (IN ROOMS)\n      (DESC \"Cyclops Room\")\n      (NW TO MAZE-15)\n      (EAST TO STRANGE-PASSAGE\n       IF MAGIC-FLAG ELSE \"The east wall is solid rock.\")\n      (UP TO TREASURE-ROOM IF CYCLOPS-FLAG\n        ELSE \"The cyclops doesn't look like he'll let you past.\")\n      (ACTION CYCLOPS-ROOM-FCN)\n      (FLAGS RLANDBIT)\n      (GLOBAL STAIRS)>",
   "referencedBy": [
    "I-CYCLOPS",
    "V-ODYSSEUS"
   ]
  },
  "STRANGE-PASSAGE": {
   "name": "STRANGE-PASSAGE",
   "file": "1dungeon.zil",
   "line": 1740,
   "endLine": 1750,
   "desc": "Strange Passage",
   "ldesc": "This is a long passage. To the west is one entrance. On the\neast there is an old wooden door, with a large opening in it (about\ncyclops sized).",
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
     "to": "CYCLOPS-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "CYCLOPS-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "LIVING-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM STRANGE-PASSAGE\n      (IN ROOMS)\n      (LDESC\n\"This is a long passage. To the west is one entrance. On the\neast there is an old wooden door, with a large opening in it (about\ncyclops sized).\")\n      (DESC \"Strange Passage\")\n      (WEST TO CYCLOPS-ROOM)\n      (IN TO CYCLOPS-ROOM)\n      (EAST TO LIVING-ROOM)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "TREASURE-ROOM": {
   "name": "TREASURE-ROOM",
   "file": "1dungeon.zil",
   "line": 1752,
   "endLine": 1763,
   "desc": "Treasure Room",
   "ldesc": "This is a large room, whose east wall is solid granite. A number\nof discarded bags, which crumble at your touch, are scattered about\non the floor. There is an exit down a staircase.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "TREASURE-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "25"
    ]
   },
   "exits": [
    {
     "to": "CYCLOPS-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "CHALICE"
   ],
   "source": "<ROOM TREASURE-ROOM\n      (IN ROOMS)\n      (LDESC\n\"This is a large room, whose east wall is solid granite. A number\nof discarded bags, which crumble at your touch, are scattered about\non the floor. There is an exit down a staircase.\")\n      (DESC \"Treasure Room\")\n      (DOWN TO CYCLOPS-ROOM)\n      (ACTION TREASURE-ROOM-FCN)\n      (FLAGS RLANDBIT ;\"CANT-HAVE-ONBIT\")\n      (VALUE 25)\n      (GLOBAL STAIRS)>",
   "referencedBy": [
    "GRANITE-WALL-F",
    "THIEF-VS-ADVENTURER",
    "HACK-TREASURES",
    "ROBBER-FUNCTION",
    "CHALICE-FCN",
    "I-THIEF",
    "V-TREASURE"
   ]
  },
  "RESERVOIR-SOUTH": {
   "name": "RESERVOIR-SOUTH",
   "file": "1dungeon.zil",
   "line": 1769,
   "endLine": 1781,
   "desc": "Reservoir South",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "RESERVOIR-SOUTH-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-WATER"
   ],
   "pseudo": [
    "LAKE",
    "LAKE-PSEUDO",
    "CHASM",
    "CHASM-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "DEEP-CANYON",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "CHASM-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "DAM-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "STREAM-VIEW",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "RESERVOIR",
     "kind": "conditional",
     "condition": "LOW-TIDE",
     "else": "\"You would drown.\"",
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM RESERVOIR-SOUTH\n      (IN ROOMS)\n      (DESC \"Reservoir South\")\n      (SE TO DEEP-CANYON)\n      (SW TO CHASM-ROOM)\n      (EAST TO DAM-ROOM)\n      (WEST TO STREAM-VIEW)\n      (NORTH TO RESERVOIR\n       IF LOW-TIDE ELSE \"You would drown.\")\n      (ACTION RESERVOIR-SOUTH-FCN)\n      (FLAGS RLANDBIT)\n      (GLOBAL GLOBAL-WATER)\n      (PSEUDO \"LAKE\" LAKE-PSEUDO \"CHASM\" CHASM-PSEUDO)>",
   "referencedBy": [
    "BOLT-F",
    "I-RFILL",
    "I-REMPTY"
   ]
  },
  "RESERVOIR": {
   "name": "RESERVOIR",
   "file": "1dungeon.zil",
   "line": 1783,
   "endLine": 1794,
   "desc": "Reservoir",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "NONLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "RESERVOIR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-WATER"
   ],
   "pseudo": [
    "STREAM",
    "STREAM-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "RESERVOIR-NORTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "RESERVOIR-SOUTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "IN-STREAM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "IN-STREAM",
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
     "message": "The dam blocks your way.",
     "dir": "DOWN"
    }
   ],
   "contents": [
    "TRUNK"
   ],
   "source": "<ROOM RESERVOIR\n      (IN ROOMS)\n      (DESC \"Reservoir\")\n      (NORTH TO RESERVOIR-NORTH)\n      (SOUTH TO RESERVOIR-SOUTH)\n      (UP TO IN-STREAM)\n      (WEST TO IN-STREAM)\n      (DOWN \"The dam blocks your way.\")\n      (ACTION RESERVOIR-FCN)\n      (FLAGS NONLANDBIT )\n      (PSEUDO \"STREAM\" STREAM-PSEUDO)\n      (GLOBAL GLOBAL-WATER)>",
   "referencedBy": [
    "I-RFILL",
    "I-REMPTY",
    "RBOAT-FUNCTION"
   ]
  },
  "RESERVOIR-NORTH": {
   "name": "RESERVOIR-NORTH",
   "file": "1dungeon.zil",
   "line": 1796,
   "endLine": 1805,
   "desc": "Reservoir North",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "RESERVOIR-NORTH-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-WATER",
    "STAIRS"
   ],
   "pseudo": [
    "LAKE",
    "LAKE-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "ATLANTIS-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "RESERVOIR",
     "kind": "conditional",
     "condition": "LOW-TIDE",
     "else": "\"You would drown.\"",
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "PUMP"
   ],
   "source": "<ROOM RESERVOIR-NORTH\n      (IN ROOMS)\n      (DESC \"Reservoir North\")\n      (NORTH TO ATLANTIS-ROOM)\n      (SOUTH TO RESERVOIR\n       IF LOW-TIDE ELSE \"You would drown.\")\n      (ACTION RESERVOIR-NORTH-FCN)\n      (FLAGS RLANDBIT)\n      (GLOBAL GLOBAL-WATER STAIRS)\n      (PSEUDO \"LAKE\" LAKE-PSEUDO)>",
   "referencedBy": [
    "I-RFILL",
    "I-REMPTY"
   ]
  },
  "STREAM-VIEW": {
   "name": "STREAM-VIEW",
   "file": "1dungeon.zil",
   "line": 1807,
   "endLine": 1817,
   "desc": "Stream View",
   "ldesc": "You are standing on a path beside a gently flowing stream. The path\nfollows the stream, which flows from west to east.",
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
    "GLOBAL-WATER"
   ],
   "pseudo": [
    "STREAM",
    "STREAM-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "RESERVOIR-SOUTH",
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
     "message": "The stream emerges from a spot too small for you to enter.",
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM STREAM-VIEW\n      (IN ROOMS)\n      (LDESC\n\"You are standing on a path beside a gently flowing stream. The path\nfollows the stream, which flows from west to east.\")\n      (DESC \"Stream View\")\n      (EAST TO RESERVOIR-SOUTH)\n      (WEST \"The stream emerges from a spot too small for you to enter.\")\n      (FLAGS RLANDBIT)\n      (GLOBAL GLOBAL-WATER)\n      (PSEUDO \"STREAM\" STREAM-PSEUDO)>",
   "referencedBy": []
  },
  "IN-STREAM": {
   "name": "IN-STREAM",
   "file": "1dungeon.zil",
   "line": 1819,
   "endLine": 1833,
   "desc": "Stream",
   "ldesc": "You are on the gently flowing stream. The upstream route is too narrow\nto navigate, and the downstream route is invisible due to twisting\nwalls. There is a narrow beach to land on.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "NONLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-WATER"
   ],
   "pseudo": [
    "STREAM",
    "STREAM-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The channel is too narrow.",
     "dir": "UP"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The channel is too narrow.",
     "dir": "WEST"
    },
    {
     "to": "STREAM-VIEW",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "LAND"
    },
    {
     "to": "RESERVOIR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "RESERVOIR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM IN-STREAM\n      (IN ROOMS)\n      (LDESC\n\"You are on the gently flowing stream. The upstream route is too narrow\nto navigate, and the downstream route is invisible due to twisting\nwalls. There is a narrow beach to land on.\")\n      (DESC \"Stream\")\n      (UP \"The channel is too narrow.\")\n      (WEST \"The channel is too narrow.\")\n      (LAND TO STREAM-VIEW)\n      (DOWN TO RESERVOIR)\n      (EAST TO RESERVOIR)\n      (FLAGS NONLANDBIT )\n      (GLOBAL GLOBAL-WATER)\n      (PSEUDO \"STREAM\" STREAM-PSEUDO)>",
   "referencedBy": [
    "RBOAT-FUNCTION"
   ]
  },
  "MIRROR-ROOM-1": {
   "name": "MIRROR-ROOM-1",
   "file": "1dungeon.zil",
   "line": 1839,
   "endLine": 1846,
   "desc": "Mirror Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MIRROR-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "COLD-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "TWISTING-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SMALL-CAVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "MIRROR-1"
   ],
   "source": "<ROOM MIRROR-ROOM-1\n      (IN ROOMS)\n      (DESC \"Mirror Room\")\n      (NORTH TO COLD-PASSAGE)\n      (WEST TO TWISTING-PASSAGE)\n      (EAST TO SMALL-CAVE)\n      (ACTION MIRROR-ROOM)\n      (FLAGS RLANDBIT)>",
   "referencedBy": [
    "MIRROR-MIRROR"
   ]
  },
  "MIRROR-ROOM-2": {
   "name": "MIRROR-ROOM-2",
   "file": "1dungeon.zil",
   "line": 1848,
   "endLine": 1855,
   "desc": "Mirror Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MIRROR-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "WINDING-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "NARROW-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "TINY-CAVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "MIRROR-2"
   ],
   "source": "<ROOM MIRROR-ROOM-2\n      (IN ROOMS)\n      (DESC \"Mirror Room\")\n      (WEST TO WINDING-PASSAGE)\n      (NORTH TO NARROW-PASSAGE)\n      (EAST TO TINY-CAVE)\n      (ACTION MIRROR-ROOM)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": [
    "MIRROR-MIRROR"
   ]
  },
  "SMALL-CAVE": {
   "name": "SMALL-CAVE",
   "file": "1dungeon.zil",
   "line": 1857,
   "endLine": 1868,
   "desc": "Cave",
   "ldesc": "This is a tiny cave with entrances west and north, and a staircase\nleading down.",
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
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "MIRROR-ROOM-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "ATLANTIS-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "ATLANTIS-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "TWISTING-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM SMALL-CAVE\n      (IN ROOMS)\n      (LDESC\n\"This is a tiny cave with entrances west and north, and a staircase\nleading down.\")\n      (DESC \"Cave\")\n      (NORTH TO MIRROR-ROOM-1)\n      (DOWN TO ATLANTIS-ROOM)\n      (SOUTH TO ATLANTIS-ROOM)\n      (WEST TO TWISTING-PASSAGE)\n      (FLAGS RLANDBIT)\n      (GLOBAL STAIRS)>",
   "referencedBy": []
  },
  "TINY-CAVE": {
   "name": "TINY-CAVE",
   "file": "1dungeon.zil",
   "line": 1870,
   "endLine": 1881,
   "desc": "Cave",
   "ldesc": "This is a tiny cave with entrances west and north, and a dark,\nforbidding staircase leading down.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CAVE2-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "MIRROR-ROOM-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "WINDING-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "ENTRANCE-TO-HADES",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM TINY-CAVE\n      (IN ROOMS)\n      (LDESC\n\"This is a tiny cave with entrances west and north, and a dark,\nforbidding staircase leading down.\")\n      (DESC \"Cave\")\n      (NORTH TO MIRROR-ROOM-2)\n      (WEST TO WINDING-PASSAGE)\n      (DOWN TO ENTRANCE-TO-HADES)\n      (ACTION CAVE2-ROOM)\n      (FLAGS RLANDBIT)\n      (GLOBAL STAIRS)>",
   "referencedBy": []
  },
  "COLD-PASSAGE": {
   "name": "COLD-PASSAGE",
   "file": "1dungeon.zil",
   "line": 1883,
   "endLine": 1891,
   "desc": "Cold Passage",
   "ldesc": "This is a cold and damp corridor where a long east-west passageway\nturns into a southward path.",
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
     "to": "MIRROR-ROOM-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "SLIDE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM COLD-PASSAGE\n      (IN ROOMS)\n      (LDESC\n\"This is a cold and damp corridor where a long east-west passageway\nturns into a southward path.\")\n      (DESC \"Cold Passage\")\n      (SOUTH TO MIRROR-ROOM-1)\n      (WEST TO SLIDE-ROOM)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "NARROW-PASSAGE": {
   "name": "NARROW-PASSAGE",
   "file": "1dungeon.zil",
   "line": 1893,
   "endLine": 1901,
   "desc": "Narrow Passage",
   "ldesc": "This is a long and narrow corridor where a long north-south passageway\nbriefly narrows even further.",
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
     "to": "ROUND-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MIRROR-ROOM-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM NARROW-PASSAGE\n      (IN ROOMS)\n      (LDESC\n\"This is a long and narrow corridor where a long north-south passageway\nbriefly narrows even further.\")\n      (DESC \"Narrow Passage\")\n      (NORTH TO ROUND-ROOM)\n      (SOUTH TO MIRROR-ROOM-2)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "WINDING-PASSAGE": {
   "name": "WINDING-PASSAGE",
   "file": "1dungeon.zil",
   "line": 1903,
   "endLine": 1911,
   "desc": "Winding Passage",
   "ldesc": "This is a winding passage. It seems that there are only exits\non the east and north.",
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
     "to": "MIRROR-ROOM-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "TINY-CAVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM WINDING-PASSAGE\n      (IN ROOMS)\n      (LDESC\n\"This is a winding passage. It seems that there are only exits\non the east and north.\")\n      (DESC \"Winding Passage\")\n      (NORTH TO MIRROR-ROOM-2)\n      (EAST TO TINY-CAVE)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "TWISTING-PASSAGE": {
   "name": "TWISTING-PASSAGE",
   "file": "1dungeon.zil",
   "line": 1913,
   "endLine": 1921,
   "desc": "Twisting Passage",
   "ldesc": "This is a winding passage. It seems that there are only exits\non the east and north.",
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
     "to": "MIRROR-ROOM-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SMALL-CAVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM TWISTING-PASSAGE\n      (IN ROOMS)\n      (LDESC\n\"This is a winding passage. It seems that there are only exits\non the east and north.\")\n      (DESC \"Twisting Passage\")\n      (NORTH TO MIRROR-ROOM-1)\n      (EAST TO SMALL-CAVE)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "ATLANTIS-ROOM": {
   "name": "ATLANTIS-ROOM",
   "file": "1dungeon.zil",
   "line": 1923,
   "endLine": 1932,
   "desc": "Atlantis Room",
   "ldesc": "This is an ancient room, long under water. There is an exit to\nthe south and a staircase leading up.",
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
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "SMALL-CAVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "RESERVOIR-NORTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "TRIDENT"
   ],
   "source": "<ROOM ATLANTIS-ROOM\n      (IN ROOMS)\n      (LDESC\n\"This is an ancient room, long under water. There is an exit to\nthe south and a staircase leading up.\")\n      (DESC \"Atlantis Room\")\n      (UP TO SMALL-CAVE)\n      (SOUTH TO RESERVOIR-NORTH)\n      (FLAGS RLANDBIT)\n      (GLOBAL STAIRS)>",
   "referencedBy": []
  },
  "EW-PASSAGE": {
   "name": "EW-PASSAGE",
   "file": "1dungeon.zil",
   "line": 1938,
   "endLine": 1950,
   "desc": "East-West Passage",
   "ldesc": "This is a narrow east-west passageway. There is a narrow stairway\nleading down at the north end of the room.",
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
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "5"
    ]
   },
   "exits": [
    {
     "to": "ROUND-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "TROLL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "CHASM-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "CHASM-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM EW-PASSAGE\n      (IN ROOMS)\n      (LDESC\n\"This is a narrow east-west passageway. There is a narrow stairway\nleading down at the north end of the room.\")\n      (DESC \"East-West Passage\")\n      (EAST TO ROUND-ROOM)\n      (WEST TO TROLL-ROOM)\n      (DOWN TO CHASM-ROOM)\n      (NORTH TO CHASM-ROOM)\n      (FLAGS RLANDBIT)\n      (VALUE 5)\n      (GLOBAL STAIRS)>",
   "referencedBy": []
  },
  "ROUND-ROOM": {
   "name": "ROUND-ROOM",
   "file": "1dungeon.zil",
   "line": 1952,
   "endLine": 1963,
   "desc": "Round Room",
   "ldesc": "This is a circular stone room with passages in all directions. Several\nof them have unfortunately been blocked by cave-ins.",
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
     "to": "LOUD-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "EW-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "NS-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "NARROW-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "ENGRAVINGS-CAVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [
    "THIEF"
   ],
   "source": "<ROOM ROUND-ROOM\n      (IN ROOMS)\n      (LDESC\n\"This is a circular stone room with passages in all directions. Several\nof them have unfortunately been blocked by cave-ins.\")\n      (DESC \"Round Room\")\n      (EAST TO LOUD-ROOM)\n      (WEST TO EW-PASSAGE)\n      (NORTH TO NS-PASSAGE)\n      (SOUTH TO NARROW-PASSAGE)\n      (SE TO ENGRAVINGS-CAVE)\n      (FLAGS RLANDBIT)>",
   "referencedBy": [
    "LOUD-ROOM-FCN"
   ]
  },
  "DEEP-CANYON": {
   "name": "DEEP-CANYON",
   "file": "1dungeon.zil",
   "line": 1965,
   "endLine": 1974,
   "desc": "Deep Canyon",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DEEP-CANYON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RESERVOIR-SOUTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "DAM-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "NS-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "LOUD-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM DEEP-CANYON\n      (IN ROOMS)\n      (DESC \"Deep Canyon\")\n      (NW TO RESERVOIR-SOUTH) ;COFFIN-CURE\n      (EAST TO DAM-ROOM)\n      (SW TO NS-PASSAGE)\n      (DOWN TO LOUD-ROOM)\n      (FLAGS RLANDBIT)\n      (ACTION DEEP-CANYON-F)\n      (GLOBAL STAIRS)>",
   "referencedBy": [
    "I-RFILL",
    "I-REMPTY",
    "LOUD-ROOM-FCN"
   ]
  },
  "DAMP-CAVE": {
   "name": "DAMP-CAVE",
   "file": "1dungeon.zil",
   "line": 1976,
   "endLine": 1986,
   "desc": "Damp Cave",
   "ldesc": "This cave has exits to the west and east, and narrows to a crack toward\nthe south. The earth is particularly damp here.",
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
    "CRACK"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "LOUD-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "WHITE-CLIFFS-NORTH",
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
     "message": "It is too narrow for most insects.",
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM DAMP-CAVE\n      (IN ROOMS)\n      (LDESC\n\"This cave has exits to the west and east, and narrows to a crack toward\nthe south. The earth is particularly damp here.\")\n      (DESC \"Damp Cave\")\n      (WEST TO LOUD-ROOM)\n      (EAST TO WHITE-CLIFFS-NORTH)\n      (SOUTH \"It is too narrow for most insects.\")\n      (FLAGS RLANDBIT)\n      (GLOBAL CRACK)>",
   "referencedBy": [
    "LOUD-ROOM-FCN"
   ]
  },
  "LOUD-ROOM": {
   "name": "LOUD-ROOM",
   "file": "1dungeon.zil",
   "line": 1988,
   "endLine": 1996,
   "desc": "Loud Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "LOUD-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DAMP-CAVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "ROUND-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "DEEP-CANYON",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [
    "BAR"
   ],
   "source": "<ROOM LOUD-ROOM\n      (IN ROOMS)\n      (DESC \"Loud Room\")\n      (EAST TO DAMP-CAVE)\n      (WEST TO ROUND-ROOM)\n      (UP TO DEEP-CANYON)\n      (ACTION LOUD-ROOM-FCN)\n      (FLAGS RLANDBIT)\n      (GLOBAL STAIRS)>",
   "referencedBy": [
    "BOLT-F",
    "I-RFILL",
    "I-REMPTY"
   ]
  },
  "NS-PASSAGE": {
   "name": "NS-PASSAGE",
   "file": "1dungeon.zil",
   "line": 1998,
   "endLine": 2006,
   "desc": "North-South Passage",
   "ldesc": "This is a high north-south passage, which forks to the northeast.",
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
     "to": "CHASM-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "DEEP-CANYON",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "ROUND-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM NS-PASSAGE\n      (IN ROOMS)\n      (LDESC\n\"This is a high north-south passage, which forks to the northeast.\")\n      (DESC \"North-South Passage\")\n      (NORTH TO CHASM-ROOM)\n      (NE TO DEEP-CANYON)\n      (SOUTH TO ROUND-ROOM)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "CHASM-ROOM": {
   "name": "CHASM-ROOM",
   "file": "1dungeon.zil",
   "line": 2008,
   "endLine": 2021,
   "desc": "Chasm",
   "ldesc": "A chasm runs southwest to northeast and the path follows it. You are\non the south side of the chasm, where a crack opens into a passage.",
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
    "CRACK",
    "STAIRS"
   ],
   "pseudo": [
    "CHASM",
    "CHASM-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "RESERVOIR-SOUTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "EW-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "EW-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "NS-PASSAGE",
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
     "message": "Are you out of your mind?",
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM CHASM-ROOM\n      (IN ROOMS)\n      (LDESC\n\"A chasm runs southwest to northeast and the path follows it. You are\non the south side of the chasm, where a crack opens into a passage.\")\n      (DESC \"Chasm\")\n      (NE TO RESERVOIR-SOUTH)\n      (SW TO EW-PASSAGE)\n      (UP TO EW-PASSAGE)\n      (SOUTH TO NS-PASSAGE)\n      (DOWN \"Are you out of your mind?\")\n      (FLAGS RLANDBIT)\n      (GLOBAL CRACK STAIRS)\n      (PSEUDO \"CHASM\" CHASM-PSEUDO)>",
   "referencedBy": []
  },
  "ENTRANCE-TO-HADES": {
   "name": "ENTRANCE-TO-HADES",
   "file": "1dungeon.zil",
   "line": 2027,
   "endLine": 2038,
   "desc": "Entrance to Hades",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "LLD-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BODIES"
   ],
   "pseudo": [
    "GATE",
    "GATE-PSEUDO",
    "GATES",
    "GATE-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "TINY-CAVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "LAND-OF-LIVING-DEAD",
     "kind": "conditional",
     "condition": "LLD-FLAG",
     "else": "\"Some invisible force prevents you from passing through the gate.\"",
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "LAND-OF-LIVING-DEAD",
     "kind": "conditional",
     "condition": "LLD-FLAG",
     "else": "\"Some invisible force prevents you from passing through the gate.\"",
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "GHOSTS"
   ],
   "source": "<ROOM ENTRANCE-TO-HADES\n      (IN ROOMS)\n      (DESC \"Entrance to Hades\")\n      (UP TO TINY-CAVE)\n      (IN TO LAND-OF-LIVING-DEAD IF LLD-FLAG\n       ELSE \"Some invisible force prevents you from passing through the gate.\")\n      (SOUTH TO LAND-OF-LIVING-DEAD IF LLD-FLAG\n       ELSE \"Some invisible force prevents you from passing through the gate.\")\n      (ACTION LLD-ROOM)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL BODIES)\n      (PSEUDO \"GATE\" GATE-PSEUDO \"GATES\" GATE-PSEUDO)>",
   "referencedBy": [
    "FLY-ME",
    "I-XB",
    "I-XBH",
    "JIGS-UP",
    "GOTO"
   ]
  },
  "LAND-OF-LIVING-DEAD": {
   "name": "LAND-OF-LIVING-DEAD",
   "file": "1dungeon.zil",
   "line": 2040,
   "endLine": 2051,
   "desc": "Land of the Dead",
   "ldesc": "You have entered the Land of the Living Dead. Thousands of lost souls\ncan be heard weeping and moaning. In the corner are stacked the remains\nof dozens of previous adventurers less fortunate than yourself.\nA passage exits to the north.",
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
    "BODIES"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "ENTRANCE-TO-HADES",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "ENTRANCE-TO-HADES",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "SKULL"
   ],
   "source": "<ROOM LAND-OF-LIVING-DEAD\n      (IN ROOMS)\n      (LDESC\n\"You have entered the Land of the Living Dead. Thousands of lost souls\ncan be heard weeping and moaning. In the corner are stacked the remains\nof dozens of previous adventurers less fortunate than yourself.\nA passage exits to the north.\")\n      (DESC \"Land of the Dead\")\n      (OUT TO ENTRANCE-TO-HADES)\n      (NORTH TO ENTRANCE-TO-HADES)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL BODIES)>",
   "referencedBy": [
    "SKELETON"
   ]
  },
  "ENGRAVINGS-CAVE": {
   "name": "ENGRAVINGS-CAVE",
   "file": "1dungeon.zil",
   "line": 2057,
   "endLine": 2064,
   "desc": "Engravings Cave",
   "ldesc": "You have entered a low cave with passages leading northwest and east.",
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
     "to": "ROUND-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "DOME-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "ENGRAVINGS"
   ],
   "source": "<ROOM ENGRAVINGS-CAVE\t;\"was CAVE4\"\n      (IN ROOMS)\n      (LDESC\n\"You have entered a low cave with passages leading northwest and east.\")\n      (DESC \"Engravings Cave\")\n      (NW TO ROUND-ROOM)\n      (EAST TO DOME-ROOM)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "EGYPT-ROOM": {
   "name": "EGYPT-ROOM",
   "file": "1dungeon.zil",
   "line": 2066,
   "endLine": 2075,
   "desc": "Egyptian Room",
   "ldesc": "This is a room which looks like an Egyptian tomb. There is an\nascending staircase to the west.",
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
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "NORTH-TEMPLE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "NORTH-TEMPLE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [
    "COFFIN"
   ],
   "source": "<ROOM EGYPT-ROOM\t;\"was EGYPT\"\n      (IN ROOMS)\n      (LDESC\n\"This is a room which looks like an Egyptian tomb. There is an\nascending staircase to the west.\")\n      (DESC \"Egyptian Room\")\n      (WEST TO NORTH-TEMPLE)\n      (UP TO NORTH-TEMPLE)\n      (FLAGS RLANDBIT)\n      (GLOBAL STAIRS)>",
   "referencedBy": [
    "RANDOMIZE-OBJECTS"
   ]
  },
  "DOME-ROOM": {
   "name": "DOME-ROOM",
   "file": "1dungeon.zil",
   "line": 2077,
   "endLine": 2085,
   "desc": "Dome Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DOME-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "DOME",
    "DOME-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "ENGRAVINGS-CAVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "TORCH-ROOM",
     "kind": "conditional",
     "condition": "DOME-FLAG",
     "else": "\"You cannot go down without fracturing many bones.\"",
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "RAILING"
   ],
   "source": "<ROOM DOME-ROOM\t;\"was DOME\"\n      (IN ROOMS)\n      (DESC \"Dome Room\")\n      (WEST TO ENGRAVINGS-CAVE)\n      (DOWN TO TORCH-ROOM\n       IF DOME-FLAG ELSE \"You cannot go down without fracturing many bones.\")\n      (ACTION DOME-ROOM-FCN)\n      (FLAGS RLANDBIT)\n      (PSEUDO \"DOME\" DOME-PSEUDO)>",
   "referencedBy": [
    "ROPE-FUNCTION"
   ]
  },
  "TORCH-ROOM": {
   "name": "TORCH-ROOM",
   "file": "1dungeon.zil",
   "line": 2087,
   "endLine": 2096,
   "desc": "Torch Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "TORCH-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIRS"
   ],
   "pseudo": [
    "DOME",
    "DOME-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You cannot reach the rope.",
     "dir": "UP"
    },
    {
     "to": "NORTH-TEMPLE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "NORTH-TEMPLE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "PEDESTAL"
   ],
   "source": "<ROOM TORCH-ROOM\n      (IN ROOMS)\n      (DESC \"Torch Room\")\n      (UP \"You cannot reach the rope.\")\n      (SOUTH TO NORTH-TEMPLE)\n      (DOWN TO NORTH-TEMPLE)\n      (ACTION TORCH-ROOM-FCN)\n      (FLAGS RLANDBIT)\n      (GLOBAL STAIRS)\n      (PSEUDO \"DOME\" DOME-PSEUDO)>",
   "referencedBy": [
    "DOME-ROOM-FCN",
    "ROPE-FUNCTION"
   ]
  },
  "NORTH-TEMPLE": {
   "name": "NORTH-TEMPLE",
   "file": "1dungeon.zil",
   "line": 2098,
   "endLine": 2114,
   "desc": "Temple",
   "ldesc": "This is the north end of a large temple. On the east wall is an\nancient inscription, probably a prayer in a long-forgotten language.\nBelow the prayer is a staircase leading down. The west wall is solid\ngranite. The exit to the north end of the room is through huge\nmarble pillars.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
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
     "to": "EGYPT-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "EGYPT-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "TORCH-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "TORCH-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "TORCH-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "SOUTH-TEMPLE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "BELL",
    "PRAYER"
   ],
   "source": "<ROOM NORTH-TEMPLE\t;\"was TEMP1\"\n      (IN ROOMS)\n      (LDESC\n\"This is the north end of a large temple. On the east wall is an\nancient inscription, probably a prayer in a long-forgotten language.\nBelow the prayer is a staircase leading down. The west wall is solid\ngranite. The exit to the north end of the room is through huge\nmarble pillars.\")\n      (DESC \"Temple\")\n      (DOWN TO EGYPT-ROOM)\n      (EAST TO EGYPT-ROOM)\n      (NORTH TO TORCH-ROOM)\n      (OUT TO TORCH-ROOM)\n      (UP TO TORCH-ROOM)\n      (SOUTH TO SOUTH-TEMPLE)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL STAIRS)>",
   "referencedBy": [
    "GRANITE-WALL-F",
    "V-TREASURE"
   ]
  },
  "SOUTH-TEMPLE": {
   "name": "SOUTH-TEMPLE",
   "file": "1dungeon.zil",
   "line": 2116,
   "endLine": 2129,
   "desc": "Altar",
   "ldesc": "This is the south end of a large temple. In front of you is what\nappears to be an altar. In one corner is a small hole in the floor\nwhich leads into darkness. You probably could not get back up it.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "SOUTH-TEMPLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "NORTH-TEMPLE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "TINY-CAVE",
     "kind": "conditional",
     "condition": "COFFIN-CURE",
     "else": "\"You haven't a prayer of getting the coffin down there.\"",
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "ALTAR",
    "CANDLES"
   ],
   "source": "<ROOM SOUTH-TEMPLE\t;\"was TEMP2\"\n      (IN ROOMS)\n      (LDESC\n\n\"This is the south end of a large temple. In front of you is what\nappears to be an altar. In one corner is a small hole in the floor\nwhich leads into darkness. You probably could not get back up it.\")\n      (DESC \"Altar\")\n      (NORTH TO NORTH-TEMPLE)\n      (DOWN TO TINY-CAVE\n       IF COFFIN-CURE\n       ELSE \"You haven't a prayer of getting the coffin down there.\")\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (ACTION SOUTH-TEMPLE-FCN)>",
   "referencedBy": [
    "DEAD-FUNCTION",
    "JIGS-UP",
    "V-PRAY"
   ]
  },
  "DAM-ROOM": {
   "name": "DAM-ROOM",
   "file": "1dungeon.zil",
   "line": 2135,
   "endLine": 2145,
   "desc": "Dam",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DAM-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-WATER"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DEEP-CANYON",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "DAM-BASE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "DAM-BASE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "DAM-LOBBY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "RESERVOIR-SOUTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "BOLT",
    "BUBBLE",
    "DAM",
    "CONTROL-PANEL"
   ],
   "source": "<ROOM DAM-ROOM\t;\"was DAM\"\n      (IN ROOMS)\n      (DESC \"Dam\")\n      (SOUTH TO DEEP-CANYON)\n      (DOWN TO DAM-BASE)\n      (EAST TO DAM-BASE)\n      (NORTH TO DAM-LOBBY)\n      (WEST TO RESERVOIR-SOUTH)\n      (ACTION DAM-ROOM-FCN)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL GLOBAL-WATER)>",
   "referencedBy": [
    "BUTTON-F",
    "I-MAINT-ROOM"
   ]
  },
  "DAM-LOBBY": {
   "name": "DAM-LOBBY",
   "file": "1dungeon.zil",
   "line": 2147,
   "endLine": 2157,
   "desc": "Dam Lobby",
   "ldesc": "This room appears to have been the waiting room for groups touring\nthe dam. There are open doorways here to the north and east marked\n\"Private\", and there is a path leading south over the top of the dam.",
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
     "to": "DAM-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "MAINTENANCE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MAINTENANCE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "MATCH",
    "GUIDE"
   ],
   "source": "<ROOM DAM-LOBBY\t;\"was LOBBY\"\n      (IN ROOMS)\n      (LDESC\n\"This room appears to have been the waiting room for groups touring\nthe dam. There are open doorways here to the north and east marked\n\\\"Private\\\", and there is a path leading south over the top of the dam.\")\n      (DESC \"Dam Lobby\")\n      (SOUTH TO DAM-ROOM)\n      (NORTH TO MAINTENANCE-ROOM)\n      (EAST TO MAINTENANCE-ROOM)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": [
    "I-MAINT-ROOM"
   ]
  },
  "MAINTENANCE-ROOM": {
   "name": "MAINTENANCE-ROOM",
   "file": "1dungeon.zil",
   "line": 2159,
   "endLine": 2170,
   "desc": "Maintenance Room",
   "ldesc": "This is what appears to have been the maintenance room for Flood\nControl Dam #3. Apparently, this room has been ransacked recently, for\nmost of the valuable equipment is gone. On the wall in front of you is a\ngroup of buttons colored blue, yellow, brown, and red. There are doorways to\nthe west and south.",
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
     "to": "DAM-LOBBY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "DAM-LOBBY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "TOOL-CHEST",
    "YELLOW-BUTTON",
    "BROWN-BUTTON",
    "RED-BUTTON",
    "BLUE-BUTTON",
    "LEAK",
    "SCREWDRIVER",
    "TUBE",
    "WRENCH"
   ],
   "source": "<ROOM MAINTENANCE-ROOM\t;\"was MAINT\"\n      (IN ROOMS)\n      (LDESC\n\"This is what appears to have been the maintenance room for Flood\nControl Dam #3. Apparently, this room has been ransacked recently, for\nmost of the valuable equipment is gone. On the wall in front of you is a\ngroup of buttons colored blue, yellow, brown, and red. There are doorways to\nthe west and south.\")\n      (DESC \"Maintenance Room\")\n      (SOUTH TO DAM-LOBBY)\n      (WEST TO DAM-LOBBY)\n      (FLAGS RLANDBIT)>",
   "referencedBy": [
    "I-MAINT-ROOM"
   ]
  },
  "DAM-BASE": {
   "name": "DAM-BASE",
   "file": "1dungeon.zil",
   "line": 2176,
   "endLine": 2188,
   "desc": "Dam Base",
   "ldesc": "You are at the base of Flood Control Dam #3, which looms above you\nand to the north. The river Frigid is flowing by here. Along the\nriver are the White Cliffs which seem to form giant walls stretching\nfrom north to south along the shores of the river as it winds its\nway downstream.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-WATER",
    "RIVER"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DAM-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "DAM-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [
    "INFLATABLE-BOAT"
   ],
   "source": "<ROOM DAM-BASE\t;\"was DOCK\"\n      (IN ROOMS)\n      (LDESC\n\"You are at the base of Flood Control Dam #3, which looms above you\nand to the north. The river Frigid is flowing by here. Along the\nriver are the White Cliffs which seem to form giant walls stretching\nfrom north to south along the shores of the river as it winds its\nway downstream.\")\n      (DESC \"Dam Base\")\n      (NORTH TO DAM-ROOM)\n      (UP TO DAM-ROOM)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL GLOBAL-WATER RIVER)>",
   "referencedBy": []
  },
  "RIVER-1": {
   "name": "RIVER-1",
   "file": "1dungeon.zil",
   "line": 2190,
   "endLine": 2202,
   "desc": "Frigid River",
   "ldesc": "You are on the Frigid River in the vicinity of the Dam. The river\nflows quietly here. There is a landing on the west shore.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "NONLANDBIT",
    "SACREDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-WATER",
    "RIVER"
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
     "message": "You cannot go upstream due to strong currents.",
     "dir": "UP"
    },
    {
     "to": "DAM-BASE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "DAM-BASE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "LAND"
    },
    {
     "to": "RIVER-2",
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
     "message": "The White Cliffs prevent your landing here.",
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM RIVER-1\t;\"was RIVR1\"\n      (IN ROOMS)\n      (LDESC\n\"You are on the Frigid River in the vicinity of the Dam. The river\nflows quietly here. There is a landing on the west shore.\")\n      (DESC \"Frigid River\")\n      (UP \"You cannot go upstream due to strong currents.\")\n      (WEST TO DAM-BASE)\n      (LAND TO DAM-BASE)\n      (DOWN TO RIVER-2)\n      (EAST \"The White Cliffs prevent your landing here.\")\n      (FLAGS NONLANDBIT SACREDBIT ONBIT)\n      (GLOBAL GLOBAL-WATER RIVER)>",
   "referencedBy": [
    "I-RIVER",
    "RBOAT-FUNCTION"
   ]
  },
  "RIVER-2": {
   "name": "RIVER-2",
   "file": "1dungeon.zil",
   "line": 2204,
   "endLine": 2217,
   "desc": "Frigid River",
   "ldesc": "The river turns a corner here making it impossible to see the\nDam. The White Cliffs loom on the east bank and large rocks prevent\nlanding on the west.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "NONLANDBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-WATER",
    "RIVER"
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
     "message": "You cannot go upstream due to strong currents.",
     "dir": "UP"
    },
    {
     "to": "RIVER-3",
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
     "message": "There is no safe landing spot here.",
     "dir": "LAND"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The White Cliffs prevent your landing here.",
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Just in time you steer away from the rocks.",
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM RIVER-2\t;\"was RIVR2\"\n      (IN ROOMS)\n      (LDESC\n\"The river turns a corner here making it impossible to see the\nDam. The White Cliffs loom on the east bank and large rocks prevent\nlanding on the west.\")\n      (DESC \"Frigid River\")\n      (UP \"You cannot go upstream due to strong currents.\")\n      (DOWN TO RIVER-3)\n      (LAND \"There is no safe landing spot here.\")\n      (EAST \"The White Cliffs prevent your landing here.\")\n      (WEST \"Just in time you steer away from the rocks.\")\n      (FLAGS NONLANDBIT SACREDBIT)\n      (GLOBAL GLOBAL-WATER RIVER)>",
   "referencedBy": [
    "I-RIVER",
    "RBOAT-FUNCTION"
   ]
  },
  "RIVER-3": {
   "name": "RIVER-3",
   "file": "1dungeon.zil",
   "line": 2219,
   "endLine": 2231,
   "desc": "Frigid River",
   "ldesc": "The river descends here into a valley. There is a narrow beach on the\nwest shore below the cliffs. In the distance a faint rumbling can be\nheard.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "NONLANDBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-WATER",
    "RIVER"
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
     "message": "You cannot go upstream due to strong currents.",
     "dir": "UP"
    },
    {
     "to": "RIVER-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "WHITE-CLIFFS-NORTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "LAND"
    },
    {
     "to": "WHITE-CLIFFS-NORTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM RIVER-3\t;\"was RIVR3\"\n      (IN ROOMS)\n      (LDESC\n\"The river descends here into a valley. There is a narrow beach on the\nwest shore below the cliffs. In the distance a faint rumbling can be\nheard.\")\n      (DESC \"Frigid River\")\n      (UP \"You cannot go upstream due to strong currents.\")\n      (DOWN TO RIVER-4)\n      (LAND TO WHITE-CLIFFS-NORTH)\n      (WEST TO WHITE-CLIFFS-NORTH)\n      (FLAGS NONLANDBIT SACREDBIT)\n      (GLOBAL GLOBAL-WATER RIVER)>",
   "referencedBy": [
    "I-RIVER",
    "RBOAT-FUNCTION"
   ]
  },
  "WHITE-CLIFFS-NORTH": {
   "name": "WHITE-CLIFFS-NORTH",
   "file": "1dungeon.zil",
   "line": 2233,
   "endLine": 2244,
   "desc": "White Cliffs Beach",
   "ldesc": "You are on a narrow strip of beach which runs along the base of the\nWhite Cliffs. There is a narrow path heading south along the Cliffs\nand a tight passage leading west into the cliffs themselves.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "WHITE-CLIFFS-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-WATER",
    "WHITE-CLIFF",
    "RIVER"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "WHITE-CLIFFS-SOUTH",
     "kind": "conditional",
     "condition": "DEFLATE",
     "else": "\"The path is too narrow.\"",
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "DAMP-CAVE",
     "kind": "conditional",
     "condition": "DEFLATE",
     "else": "\"The path is too narrow.\"",
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM WHITE-CLIFFS-NORTH\t;\"was WCLF1\"\n      (IN ROOMS)\n      (LDESC\n\"You are on a narrow strip of beach which runs along the base of the\nWhite Cliffs. There is a narrow path heading south along the Cliffs\nand a tight passage leading west into the cliffs themselves.\")\n      (DESC \"White Cliffs Beach\")\n      (SOUTH TO WHITE-CLIFFS-SOUTH IF DEFLATE ELSE \"The path is too narrow.\")\n      (WEST TO DAMP-CAVE IF DEFLATE ELSE \"The path is too narrow.\")\n      (ACTION WHITE-CLIFFS-FUNCTION)\n      (FLAGS RLANDBIT SACREDBIT)\n      (GLOBAL GLOBAL-WATER WHITE-CLIFF RIVER)>",
   "referencedBy": []
  },
  "WHITE-CLIFFS-SOUTH": {
   "name": "WHITE-CLIFFS-SOUTH",
   "file": "1dungeon.zil",
   "line": 2246,
   "endLine": 2256,
   "desc": "White Cliffs Beach",
   "ldesc": "You are on a rocky, narrow strip of beach beside the Cliffs. A\nnarrow path leads north along the shore.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "WHITE-CLIFFS-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-WATER",
    "WHITE-CLIFF",
    "RIVER"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "WHITE-CLIFFS-NORTH",
     "kind": "conditional",
     "condition": "DEFLATE",
     "else": "\"The path is too narrow.\"",
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM WHITE-CLIFFS-SOUTH\t;\"was WCLF2\"\n      (IN ROOMS)\n      (LDESC\n\"You are on a rocky, narrow strip of beach beside the Cliffs. A\nnarrow path leads north along the shore.\")\n      (DESC \"White Cliffs Beach\")\n      (NORTH TO WHITE-CLIFFS-NORTH\n       IF DEFLATE ELSE \"The path is too narrow.\")\n      (ACTION WHITE-CLIFFS-FUNCTION)\n      (FLAGS RLANDBIT SACREDBIT)\n      (GLOBAL GLOBAL-WATER WHITE-CLIFF RIVER)>",
   "referencedBy": []
  },
  "RIVER-4": {
   "name": "RIVER-4",
   "file": "1dungeon.zil",
   "line": 2258,
   "endLine": 2272,
   "desc": "Frigid River",
   "ldesc": "The river is running faster here and the sound ahead appears to be\nthat of rushing water. On the east shore is a sandy beach. A small\narea of beach can also be seen below the cliffs on the west shore.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "NONLANDBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "RIVR4-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-WATER",
    "RIVER"
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
     "message": "You cannot go upstream due to strong currents.",
     "dir": "UP"
    },
    {
     "to": "RIVER-5",
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
     "message": "You can land either to the east or the west.",
     "dir": "LAND"
    },
    {
     "to": "WHITE-CLIFFS-SOUTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SANDY-BEACH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "BUOY"
   ],
   "source": "<ROOM RIVER-4\t;\"was RIVR4\"\n      (IN ROOMS)\n      (LDESC\n\"The river is running faster here and the sound ahead appears to be\nthat of rushing water. On the east shore is a sandy beach. A small\narea of beach can also be seen below the cliffs on the west shore.\")\n      (DESC \"Frigid River\")\n      (UP \"You cannot go upstream due to strong currents.\")\n      (DOWN TO RIVER-5)\n      (LAND \"You can land either to the east or the west.\")\n      (WEST TO WHITE-CLIFFS-SOUTH)\n      (EAST TO SANDY-BEACH)\n      (ACTION RIVR4-ROOM)\n      (FLAGS NONLANDBIT SACREDBIT)\n      (GLOBAL GLOBAL-WATER RIVER)>",
   "referencedBy": [
    "I-RIVER",
    "RBOAT-FUNCTION"
   ]
  },
  "RIVER-5": {
   "name": "RIVER-5",
   "file": "1dungeon.zil",
   "line": 2274,
   "endLine": 2284,
   "desc": "Frigid River",
   "ldesc": "The sound of rushing water is nearly unbearable here. On the east\nshore is a large landing area.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "NONLANDBIT",
    "SACREDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-WATER",
    "RIVER"
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
     "message": "You cannot go upstream due to strong currents.",
     "dir": "UP"
    },
    {
     "to": "SHORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "SHORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "LAND"
    }
   ],
   "contents": [],
   "source": "<ROOM RIVER-5\t;\"was RIVR5\"\n      (IN ROOMS)\n      (LDESC\n\"The sound of rushing water is nearly unbearable here. On the east\nshore is a large landing area.\")\n      (DESC \"Frigid River\")\n      (UP \"You cannot go upstream due to strong currents.\")\n      (EAST TO SHORE)\n      (LAND TO SHORE)\n      (FLAGS NONLANDBIT SACREDBIT ONBIT)\n      (GLOBAL GLOBAL-WATER RIVER)>",
   "referencedBy": [
    "I-RIVER"
   ]
  },
  "SHORE": {
   "name": "SHORE",
   "file": "1dungeon.zil",
   "line": 2286,
   "endLine": 2296,
   "desc": "Shore",
   "ldesc": "You are on the east shore of the river. The water here seems somewhat\ntreacherous. A path travels from north to south here, the south end\nquickly turning around a sharp corner.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "SACREDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-WATER",
    "RIVER"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "SANDY-BEACH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "ARAGAIN-FALLS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM SHORE\t;\"was FANTE\"\n      (IN ROOMS)\n      (LDESC\n\"You are on the east shore of the river. The water here seems somewhat\ntreacherous. A path travels from north to south here, the south end\nquickly turning around a sharp corner.\")\n      (DESC \"Shore\")\n      (NORTH TO SANDY-BEACH)\n      (SOUTH TO ARAGAIN-FALLS)\n      (FLAGS RLANDBIT SACREDBIT ONBIT)\n      (GLOBAL GLOBAL-WATER RIVER)>",
   "referencedBy": []
  },
  "SANDY-BEACH": {
   "name": "SANDY-BEACH",
   "file": "1dungeon.zil",
   "line": 2298,
   "endLine": 2309,
   "desc": "Sandy Beach",
   "ldesc": "You are on a large sandy beach on the east shore of the river, which is\nflowing quickly by. A path runs beside the river to the south here, and\na passage is partially buried in sand to the northeast.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-WATER",
    "RIVER"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "SANDY-CAVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "SHORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "SHOVEL"
   ],
   "source": "<ROOM SANDY-BEACH\t;\"was BEACH\"\n      (IN ROOMS)\n      (LDESC\n\n\"You are on a large sandy beach on the east shore of the river, which is\nflowing quickly by. A path runs beside the river to the south here, and\na passage is partially buried in sand to the northeast.\")\n      (DESC \"Sandy Beach\")\n      (NE TO SANDY-CAVE)\n      (SOUTH TO SHORE)\n      (FLAGS RLANDBIT SACREDBIT)\n      (GLOBAL GLOBAL-WATER RIVER)>",
   "referencedBy": []
  },
  "SANDY-CAVE": {
   "name": "SANDY-CAVE",
   "file": "1dungeon.zil",
   "line": 2311,
   "endLine": 2317,
   "desc": "Sandy Cave",
   "ldesc": "This is a sand-filled cave whose exit is to the southwest.",
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
     "to": "SANDY-BEACH",
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
    "SCARAB"
   ],
   "source": "<ROOM SANDY-CAVE\t;\"was TCAVE\"\n      (IN ROOMS)\n      (LDESC\n\"This is a sand-filled cave whose exit is to the southwest.\")\n      (DESC \"Sandy Cave\")\n      (SW TO SANDY-BEACH)\n      (FLAGS RLANDBIT)>",
   "referencedBy": [
    "GROUND-FUNCTION"
   ]
  },
  "ARAGAIN-FALLS": {
   "name": "ARAGAIN-FALLS",
   "file": "1dungeon.zil",
   "line": 2319,
   "endLine": 2328,
   "desc": "Aragain Falls",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "SACREDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "FALLS-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-WATER",
    "RIVER",
    "RAINBOW"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "ON-RAINBOW",
     "kind": "conditional",
     "condition": "RAINBOW-FLAG",
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
     "message": "It's a long way...",
     "dir": "DOWN"
    },
    {
     "to": "SHORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "ON-RAINBOW",
     "kind": "conditional",
     "condition": "RAINBOW-FLAG",
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM ARAGAIN-FALLS\t;\"was FALLS\"\n      (IN ROOMS)\n      (DESC \"Aragain Falls\")\n      (WEST TO ON-RAINBOW IF RAINBOW-FLAG)\n      (DOWN \"It's a long way...\")\n      (NORTH TO SHORE)\n      (UP TO ON-RAINBOW IF RAINBOW-FLAG)\n      (ACTION FALLS-ROOM)\n      (FLAGS RLANDBIT SACREDBIT ONBIT)\n      (GLOBAL GLOBAL-WATER RIVER RAINBOW)>",
   "referencedBy": [
    "SCEPTRE-FUNCTION",
    "RAINBOW-FCN"
   ]
  },
  "ON-RAINBOW": {
   "name": "ON-RAINBOW",
   "file": "1dungeon.zil",
   "line": 2330,
   "endLine": 2340,
   "desc": "On the Rainbow",
   "ldesc": "You are on top of a rainbow (I bet you never thought you would walk\non a rainbow), with a magnificent view of the Falls. The rainbow\ntravels east-west here.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "RAINBOW"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "END-OF-RAINBOW",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "ARAGAIN-FALLS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM ON-RAINBOW\t;\"was RAINB\"\n      (IN ROOMS)\n      (LDESC\n\"You are on top of a rainbow (I bet you never thought you would walk\non a rainbow), with a magnificent view of the Falls. The rainbow\ntravels east-west here.\")\n      (DESC \"On the Rainbow\")\n      (WEST TO END-OF-RAINBOW)\n      (EAST TO ARAGAIN-FALLS)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL RAINBOW)>",
   "referencedBy": [
    "SCEPTRE-FUNCTION"
   ]
  },
  "END-OF-RAINBOW": {
   "name": "END-OF-RAINBOW",
   "file": "1dungeon.zil",
   "line": 2342,
   "endLine": 2356,
   "desc": "End of Rainbow",
   "ldesc": "You are on a small, rocky beach on the continuation of the Frigid\nRiver past the Falls. The beach is narrow due to the presence of the\nWhite Cliffs. The river canyon opens here and sunlight shines in\nfrom above. A rainbow crosses over the falls to the east and a narrow\npath continues to the southwest.",
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
    "GLOBAL-WATER",
    "RAINBOW",
    "RIVER"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "ON-RAINBOW",
     "kind": "conditional",
     "condition": "RAINBOW-FLAG",
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "ON-RAINBOW",
     "kind": "conditional",
     "condition": "RAINBOW-FLAG",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "ON-RAINBOW",
     "kind": "conditional",
     "condition": "RAINBOW-FLAG",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "CANYON-BOTTOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [
    "POT-OF-GOLD"
   ],
   "source": "<ROOM END-OF-RAINBOW\t;\"was POG\"\n      (IN ROOMS)\n      (LDESC\n\"You are on a small, rocky beach on the continuation of the Frigid\nRiver past the Falls. The beach is narrow due to the presence of the\nWhite Cliffs. The river canyon opens here and sunlight shines in\nfrom above. A rainbow crosses over the falls to the east and a narrow\npath continues to the southwest.\")\n      (DESC \"End of Rainbow\")\n      (UP TO ON-RAINBOW IF RAINBOW-FLAG)\n      (NE TO ON-RAINBOW IF RAINBOW-FLAG)\n      (EAST TO ON-RAINBOW IF RAINBOW-FLAG)\n      (SW TO CANYON-BOTTOM)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL GLOBAL-WATER RAINBOW RIVER)>",
   "referencedBy": [
    "SCEPTRE-FUNCTION",
    "RAINBOW-FCN"
   ]
  },
  "CANYON-BOTTOM": {
   "name": "CANYON-BOTTOM",
   "file": "1dungeon.zil",
   "line": 2358,
   "endLine": 2368,
   "desc": "Canyon Bottom",
   "ldesc": "You are beneath the walls of the river canyon which may be climbable\nhere. The lesser part of the runoff of Aragain Falls flows by below.\nTo the north is a narrow path.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-WATER",
    "CLIMBABLE-CLIFF",
    "RIVER"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "CLIFF-MIDDLE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "END-OF-RAINBOW",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM CANYON-BOTTOM\t;\"was CLBOT\"\n      (IN ROOMS)\n      (LDESC\n\"You are beneath the walls of the river canyon which may be climbable\nhere. The lesser part of the runoff of Aragain Falls flows by below.\nTo the north is a narrow path.\")\n      (DESC \"Canyon Bottom\")\n      (UP TO CLIFF-MIDDLE)\n      (NORTH TO END-OF-RAINBOW)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL GLOBAL-WATER CLIMBABLE-CLIFF RIVER)>",
   "referencedBy": []
  },
  "CLIFF-MIDDLE": {
   "name": "CLIFF-MIDDLE",
   "file": "1dungeon.zil",
   "line": 2370,
   "endLine": 2382,
   "desc": "Rocky Ledge",
   "ldesc": "You are on a ledge about halfway up the wall of the river canyon.\nYou can see from here that the main flow from Aragain Falls twists\nalong a passage which it is impossible for you to enter. Below you is the\ncanyon bottom. Above you is more cliff, which appears\nclimbable.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CLIMBABLE-CLIFF",
    "RIVER"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "CANYON-VIEW",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "CANYON-BOTTOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM CLIFF-MIDDLE\t;\"was CLMID\"\n      (IN ROOMS)\n      (LDESC\n\"You are on a ledge about halfway up the wall of the river canyon.\nYou can see from here that the main flow from Aragain Falls twists\nalong a passage which it is impossible for you to enter. Below you is the\ncanyon bottom. Above you is more cliff, which appears\nclimbable.\")\n      (DESC \"Rocky Ledge\")\n      (UP TO CANYON-VIEW)\n      (DOWN TO CANYON-BOTTOM)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL CLIMBABLE-CLIFF RIVER)>",
   "referencedBy": []
  },
  "CANYON-VIEW": {
   "name": "CANYON-VIEW",
   "file": "1dungeon.zil",
   "line": 2384,
   "endLine": 2404,
   "desc": "Canyon View",
   "ldesc": "You are at the top of the Great Canyon on its west wall. From here\nthere is a marvelous view of the canyon and parts of the Frigid River\nupstream. Across the canyon, the walls of the White Cliffs join the\nmighty ramparts of the Flathead Mountains to the east. Following the\nCanyon upstream to the north, Aragain Falls may be seen, complete with\nrainbow. The mighty Frigid River flows out from a great dark cavern. To\nthe west and south can be seen an immense forest, stretching for miles\naround. A path leads northwest. It is possible to climb down into\nthe canyon from here.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CANYON-VIEW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CLIMBABLE-CLIFF",
    "RIVER",
    "RAINBOW"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "CLIFF-MIDDLE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "CLIFF-MIDDLE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "CLEARING",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "FOREST-3",
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
     "message": "Storm-tossed trees block your way.",
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM CANYON-VIEW\t;\"was CLTOP\"\n      (IN ROOMS)\n      (LDESC\n\"You are at the top of the Great Canyon on its west wall. From here\nthere is a marvelous view of the canyon and parts of the Frigid River\nupstream. Across the canyon, the walls of the White Cliffs join the\nmighty ramparts of the Flathead Mountains to the east. Following the\nCanyon upstream to the north, Aragain Falls may be seen, complete with\nrainbow. The mighty Frigid River flows out from a great dark cavern. To\nthe west and south can be seen an immense forest, stretching for miles\naround. A path leads northwest. It is possible to climb down into\nthe canyon from here.\")\n      (DESC \"Canyon View\")\n      (EAST TO CLIFF-MIDDLE)\n      (DOWN TO CLIFF-MIDDLE)\n      (NW TO CLEARING)\n      (WEST TO FOREST-3)\n      (SOUTH \"Storm-tossed trees block your way.\")\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL CLIMBABLE-CLIFF RIVER RAINBOW)\n      (ACTION CANYON-VIEW-F)>",
   "referencedBy": [
    "RAINBOW-FCN"
   ]
  },
  "MINE-ENTRANCE": {
   "name": "MINE-ENTRANCE",
   "file": "1dungeon.zil",
   "line": 2418,
   "endLine": 2429,
   "desc": "Mine Entrance",
   "ldesc": "You are standing at the entrance of what might have been a coal mine.\nThe shaft enters the west wall, and there is another exit on the south\nend of the room.",
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
     "to": "SLIDE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "SQUEEKY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "SQUEEKY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM MINE-ENTRANCE\t;\"was ENTRA\"\n      (IN ROOMS)\n      (LDESC\n\n\"You are standing at the entrance of what might have been a coal mine.\nThe shaft enters the west wall, and there is another exit on the south\nend of the room.\")\n      (DESC \"Mine Entrance\")\n      (SOUTH TO SLIDE-ROOM)\n      (IN TO SQUEEKY-ROOM)\n      (WEST TO SQUEEKY-ROOM)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "SQUEEKY-ROOM": {
   "name": "SQUEEKY-ROOM",
   "file": "1dungeon.zil",
   "line": 2431,
   "endLine": 2439,
   "desc": "Squeaky Room",
   "ldesc": "You are in a small room. Strange squeaky sounds may be heard coming\nfrom the passage at the north end. You may also escape to the east.",
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
     "to": "BAT-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MINE-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM SQUEEKY-ROOM\t;\"was SQUEE\"\n      (IN ROOMS)\n      (LDESC\n\"You are in a small room. Strange squeaky sounds may be heard coming\nfrom the passage at the north end. You may also escape to the east.\")\n      (DESC \"Squeaky Room\")\n      (NORTH TO BAT-ROOM)\n      (EAST TO MINE-ENTRANCE)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "BAT-ROOM": {
   "name": "BAT-ROOM",
   "file": "1dungeon.zil",
   "line": 2441,
   "endLine": 2447,
   "desc": "Bat Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "BATS-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "SQUEEKY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "SHAFT-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "BAT",
    "JADE"
   ],
   "source": "<ROOM BAT-ROOM\t;\"was BATS\"\n      (IN ROOMS)\n      (DESC \"Bat Room\")\n      (SOUTH TO SQUEEKY-ROOM)\n      (EAST TO SHAFT-ROOM)\n      (ACTION BATS-ROOM)\n      (FLAGS RLANDBIT SACREDBIT)>",
   "referencedBy": []
  },
  "SHAFT-ROOM": {
   "name": "SHAFT-ROOM",
   "file": "1dungeon.zil",
   "line": 2449,
   "endLine": 2461,
   "desc": "Shaft Room",
   "ldesc": "This is a large room, in the middle of which is a small shaft\ndescending through the floor into darkness below. To the west and\nthe north are exits from this room. Constructed over the top of the\nshaft is a metal framework to which a heavy iron chain is attached.",
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
   "pseudo": [
    "CHAIN",
    "CHAIN-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You wouldn't fit and would die if you could.",
     "dir": "DOWN"
    },
    {
     "to": "BAT-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SMELLY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "RAISED-BASKET"
   ],
   "source": "<ROOM SHAFT-ROOM\t;\"was TSHAF\"\n      (IN ROOMS)\n      (LDESC\n\"This is a large room, in the middle of which is a small shaft\ndescending through the floor into darkness below. To the west and\nthe north are exits from this room. Constructed over the top of the\nshaft is a metal framework to which a heavy iron chain is attached.\")\n      (DESC \"Shaft Room\")\n      (DOWN \"You wouldn't fit and would die if you could.\")\n      (WEST TO BAT-ROOM)\n      (NORTH TO SMELLY-ROOM)\n      (FLAGS RLANDBIT)\n      (PSEUDO \"CHAIN\" CHAIN-PSEUDO)>",
   "referencedBy": [
    "BASKET-F"
   ]
  },
  "SMELLY-ROOM": {
   "name": "SMELLY-ROOM",
   "file": "1dungeon.zil",
   "line": 2463,
   "endLine": 2474,
   "desc": "Smelly Room",
   "ldesc": "This is a small nondescript room. However, from the direction\nof a small descending staircase a foul odor can be detected. To the\nsouth is a narrow tunnel.",
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
    "STAIRS"
   ],
   "pseudo": [
    "ODOR",
    "GAS-PSEUDO",
    "GAS",
    "GAS-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "GAS-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "SHAFT-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM SMELLY-ROOM\t;\"was SMELL\"\n      (IN ROOMS)\n      (LDESC\n\"This is a small nondescript room. However, from the direction\nof a small descending staircase a foul odor can be detected. To the\nsouth is a narrow tunnel.\")\n      (DESC \"Smelly Room\")\n      (DOWN TO GAS-ROOM)\n      (SOUTH TO SHAFT-ROOM)\n      (FLAGS RLANDBIT)\n      (GLOBAL STAIRS)\n      (PSEUDO \"ODOR\" GAS-PSEUDO \"GAS\" GAS-PSEUDO)>",
   "referencedBy": []
  },
  "GAS-ROOM": {
   "name": "GAS-ROOM",
   "file": "1dungeon.zil",
   "line": 2476,
   "endLine": 2487,
   "desc": "Gas Room",
   "ldesc": "This is a small room which smells strongly of coal gas. There is a\nshort climb up some stairs and a narrow tunnel leading east.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "BOOM-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIRS"
   ],
   "pseudo": [
    "GAS",
    "GAS-PSEUDO",
    "ODOR",
    "GAS-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "SMELLY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "MINE-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "BRACELET"
   ],
   "source": "<ROOM GAS-ROOM\t;\"was BOOM\"\n      (IN ROOMS)\n      (LDESC\n\"This is a small room which smells strongly of coal gas. There is a\nshort climb up some stairs and a narrow tunnel leading east.\")\n      (DESC \"Gas Room\")\n      (UP TO SMELLY-ROOM)\n      (EAST TO MINE-1)\n      (ACTION BOOM-ROOM)\n      (FLAGS RLANDBIT SACREDBIT)\n      (GLOBAL STAIRS)\n      (PSEUDO \"GAS\" GAS-PSEUDO \"ODOR\" GAS-PSEUDO)>",
   "referencedBy": []
  },
  "LADDER-TOP": {
   "name": "LADDER-TOP",
   "file": "1dungeon.zil",
   "line": 2489,
   "endLine": 2499,
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
    },
    {
     "to": "MINE-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM LADDER-TOP\t;\"was TLADD\"\n      (IN ROOMS)\n      (LDESC\n\"This is a very small room. In the corner is a rickety wooden\nladder, leading downward. It might be safe to descend. There is\nalso a staircase leading upward.\")\n      (DESC \"Ladder Top\")\n      (DOWN TO LADDER-BOTTOM)\n      (UP TO MINE-4)\n      (FLAGS RLANDBIT)\n      (GLOBAL LADDER STAIRS)>",
   "referencedBy": []
  },
  "LADDER-BOTTOM": {
   "name": "LADDER-BOTTOM",
   "file": "1dungeon.zil",
   "line": 2501,
   "endLine": 2512,
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
   "referencedBy": []
  },
  "DEAD-END-5": {
   "name": "DEAD-END-5",
   "file": "1dungeon.zil",
   "line": 2514,
   "endLine": 2519,
   "desc": "Dead End",
   "ldesc": "You have come to a dead end in the mine.",
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
   "contents": [
    "COAL"
   ],
   "source": "<ROOM DEAD-END-5\t;\"was DEAD7\"\n      (IN ROOMS)\n      (DESC \"Dead End\")\n      (LDESC \"You have come to a dead end in the mine.\")\n      (NORTH TO LADDER-BOTTOM)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "TIMBER-ROOM": {
   "name": "TIMBER-ROOM",
   "file": "1dungeon.zil",
   "line": 2521,
   "endLine": 2534,
   "desc": "Timber Room",
   "ldesc": "This is a long and narrow passage, which is cluttered with broken\ntimbers. A wide passage comes from the east and turns at the\nwest end of the room into a very narrow passageway. From the west\ncomes a strong draft.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "SACREDBIT"
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
   "source": "<ROOM TIMBER-ROOM\t;\"was TIMBE\"\n      (IN ROOMS)\n      (LDESC\n\"This is a long and narrow passage, which is cluttered with broken\ntimbers. A wide passage comes from the east and turns at the\nwest end of the room into a very narrow passageway. From the west\ncomes a strong draft.\")\n      (DESC \"Timber Room\")\n      (EAST TO LADDER-BOTTOM)\n      (WEST TO LOWER-SHAFT\n       IF EMPTY-HANDED\n       ELSE \"You cannot fit through this passage with that load.\")\n      (ACTION NO-OBJS)\n      (FLAGS RLANDBIT SACREDBIT)>",
   "referencedBy": [
    "MATCH-FUNCTION",
    "DEAD-FUNCTION"
   ]
  },
  "LOWER-SHAFT": {
   "name": "LOWER-SHAFT",
   "file": "1dungeon.zil",
   "line": 2536,
   "endLine": 2552,
   "desc": "Drafty Room",
   "ldesc": "This is a small drafty room in which is the bottom of a long\nshaft. To the south is a passageway and to the east a very narrow\npassage. In the shaft can be seen a heavy iron chain.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "NO-OBJS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "CHAIN",
    "CHAIN-PSEUDO"
   ],
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
     "kind": "conditional",
     "condition": "EMPTY-HANDED",
     "else": "\"You cannot fit through this passage with that load.\"",
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "TIMBER-ROOM",
     "kind": "conditional",
     "condition": "EMPTY-HANDED",
     "else": "\"You cannot fit through this passage with that load.\"",
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "LOWERED-BASKET"
   ],
   "source": "<ROOM LOWER-SHAFT\t;\"was BSHAF\"\n      (IN ROOMS)\n      (LDESC\n\"This is a small drafty room in which is the bottom of a long\nshaft. To the south is a passageway and to the east a very narrow\npassage. In the shaft can be seen a heavy iron chain.\")\n      (DESC \"Drafty Room\")\n      (SOUTH TO MACHINE-ROOM)\n      (OUT TO TIMBER-ROOM\n       IF EMPTY-HANDED\n       ELSE \"You cannot fit through this passage with that load.\")\n      (EAST TO TIMBER-ROOM\n       IF EMPTY-HANDED\n       ELSE \"You cannot fit through this passage with that load.\")\n      (ACTION NO-OBJS)\n      (FLAGS RLANDBIT SACREDBIT)\n      (PSEUDO \"CHAIN\" CHAIN-PSEUDO)>",
   "referencedBy": [
    "BASKET-F",
    "MATCH-FUNCTION",
    "NO-OBJS"
   ]
  },
  "MACHINE-ROOM": {
   "name": "MACHINE-ROOM",
   "file": "1dungeon.zil",
   "line": 2554,
   "endLine": 2559,
   "desc": "Machine Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MACHINE-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "LOWER-SHAFT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "MACHINE",
    "MACHINE-SWITCH"
   ],
   "source": "<ROOM MACHINE-ROOM\t;\"was MACHI\"\n      (IN ROOMS)\n      (DESC \"Machine Room\")\n      (NORTH TO LOWER-SHAFT)\n      (ACTION MACHINE-ROOM-FCN)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "MINE-1": {
   "name": "MINE-1",
   "file": "1dungeon.zil",
   "line": 2565,
   "endLine": 2572,
   "desc": "Coal Mine",
   "ldesc": "This is a nondescript part of a coal mine.",
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
     "to": "GAS-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MINE-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MINE-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    }
   ],
   "contents": [],
   "source": "<ROOM MINE-1\t;\"was MINE1\"\n      (IN ROOMS)\n      (LDESC \"This is a nondescript part of a coal mine.\")\n      (DESC \"Coal Mine\")\n      (NORTH TO GAS-ROOM)\n      (EAST TO MINE-1)\n      (NE TO MINE-2)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "MINE-2": {
   "name": "MINE-2",
   "file": "1dungeon.zil",
   "line": 2574,
   "endLine": 2581,
   "desc": "Coal Mine",
   "ldesc": "This is a nondescript part of a coal mine.",
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
     "to": "MINE-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MINE-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "MINE-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [],
   "source": "<ROOM MINE-2\t;\"was MINE2\"\n      (IN ROOMS)\n      (LDESC \"This is a nondescript part of a coal mine.\")\n      (DESC \"Coal Mine\")\n      (NORTH TO MINE-2)\n      (SOUTH TO MINE-1)\n      (SE TO MINE-3)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "MINE-3": {
   "name": "MINE-3",
   "file": "1dungeon.zil",
   "line": 2583,
   "endLine": 2590,
   "desc": "Coal Mine",
   "ldesc": "This is a nondescript part of a coal mine.",
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
     "to": "MINE-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "MINE-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "MINE-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM MINE-3\t;\"was MINE3\"\n      (IN ROOMS)\n      (LDESC \"This is a nondescript part of a coal mine.\")\n      (DESC \"Coal Mine\")\n      (SOUTH TO MINE-3)\n      (SW TO MINE-4)\n      (EAST TO MINE-2)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "MINE-4": {
   "name": "MINE-4",
   "file": "1dungeon.zil",
   "line": 2592,
   "endLine": 2599,
   "desc": "Coal Mine",
   "ldesc": "This is a nondescript part of a coal mine.",
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
     "to": "MINE-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MINE-4",
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
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM MINE-4\t;\"was MINE4\"\n      (IN ROOMS)\n      (LDESC \"This is a nondescript part of a coal mine.\")\n      (DESC \"Coal Mine\")\n      (NORTH TO MINE-3)\n      (WEST TO MINE-4)\n      (DOWN TO LADDER-TOP)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "SLIDE-ROOM": {
   "name": "SLIDE-ROOM",
   "file": "1dungeon.zil",
   "line": 2601,
   "endLine": 2614,
   "desc": "Slide Room",
   "ldesc": "This is a small chamber, which appears to have been part of a\ncoal mine. On the south wall of the chamber the letters \"Granite\nWall\" are etched in the rock. To the east is a long passage, and\nthere is a steep metal slide twisting downward. To the north is\na small opening.",
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
    "SLIDE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "COLD-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MINE-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "CELLAR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM SLIDE-ROOM\t;\"was SLIDE\"\n      (IN ROOMS)\n      (LDESC\n\"This is a small chamber, which appears to have been part of a\ncoal mine. On the south wall of the chamber the letters \\\"Granite\nWall\\\" are etched in the rock. To the east is a long passage, and\nthere is a steep metal slide twisting downward. To the north is\na small opening.\")\n      (DESC \"Slide Room\")\n      (EAST TO COLD-PASSAGE)\n      (NORTH TO MINE-ENTRANCE)\n      (DOWN TO CELLAR)\n      (FLAGS RLANDBIT)\n      (GLOBAL SLIDE)>",
   "referencedBy": [
    "GRANITE-WALL-F"
   ]
  }
 },
 "objects": {
  "BOARD": {
   "name": "BOARD",
   "file": "1dungeon.zil",
   "line": 13,
   "endLine": 18,
   "desc": "board",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BOARDS",
    "BOARD"
   ],
   "adjectives": [],
   "action": "BOARD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BOARD\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM BOARDS BOARD)\n\t(DESC \"board\")\n\t(FLAGS NDESCBIT)\n\t(ACTION BOARD-F)>",
   "referencedBy": [
    "WATER-F",
    "KITCHEN-WINDOW-F",
    "RBOAT-FUNCTION"
   ]
  },
  "TEETH": {
   "name": "TEETH",
   "file": "1dungeon.zil",
   "line": 20,
   "endLine": 25,
   "desc": "set of teeth",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "OVERBOARD",
    "TEETH"
   ],
   "adjectives": [],
   "action": "TEETH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TEETH\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM OVERBOARD TEETH)\n\t(DESC \"set of teeth\")\n\t(FLAGS NDESCBIT)\n\t(ACTION TEETH-F)>",
   "referencedBy": [
    "TEETH-F",
    "V-OVERBOARD"
   ]
  },
  "WALL": {
   "name": "WALL",
   "file": "1dungeon.zil",
   "line": 27,
   "endLine": 31,
   "desc": "surrounding wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "WALL",
    "WALLS"
   ],
   "adjectives": [
    "SURROUNDING"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WALL\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM WALL WALLS)\n\t(ADJECTIVE SURROUNDING)\n\t(DESC \"surrounding wall\")>",
   "referencedBy": [
    "SCEPTRE-FUNCTION"
   ]
  },
  "GRANITE-WALL": {
   "name": "GRANITE-WALL",
   "file": "1dungeon.zil",
   "line": 33,
   "endLine": 38,
   "desc": "granite wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "WALL"
   ],
   "adjectives": [
    "GRANITE"
   ],
   "action": "GRANITE-WALL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GRANITE-WALL\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM WALL)\n\t(ADJECTIVE GRANITE)\n\t(DESC \"granite wall\")\n\t(ACTION GRANITE-WALL-F)>",
   "referencedBy": []
  },
  "SONGBIRD": {
   "name": "SONGBIRD",
   "file": "1dungeon.zil",
   "line": 40,
   "endLine": 46,
   "desc": "songbird",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BIRD",
    "SONGBIRD"
   ],
   "adjectives": [
    "SONG"
   ],
   "action": "SONGBIRD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SONGBIRD\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM BIRD SONGBIRD)\n\t(ADJECTIVE SONG)\n\t(DESC \"songbird\")\n\t(FLAGS NDESCBIT)\n\t(ACTION SONGBIRD-F)>",
   "referencedBy": []
  },
  "WHITE-HOUSE": {
   "name": "WHITE-HOUSE",
   "file": "1dungeon.zil",
   "line": 48,
   "endLine": 54,
   "desc": "white house",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "HOUSE"
   ],
   "adjectives": [
    "WHITE",
    "BEAUTI",
    "COLONI"
   ],
   "action": "WHITE-HOUSE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WHITE-HOUSE\t\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM HOUSE)\n\t(ADJECTIVE WHITE BEAUTI COLONI)\n\t(DESC \"white house\")\n\t(FLAGS NDESCBIT)\n\t(ACTION WHITE-HOUSE-F)>",
   "referencedBy": []
  },
  "FOREST": {
   "name": "FOREST",
   "file": "1dungeon.zil",
   "line": 56,
   "endLine": 61,
   "desc": "forest",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "FOREST",
    "TREES",
    "PINES",
    "HEMLOCKS"
   ],
   "adjectives": [],
   "action": "FOREST-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FOREST\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM FOREST TREES PINES HEMLOCKS)\n\t(DESC \"forest\")\n\t(FLAGS NDESCBIT)\n\t(ACTION FOREST-F)>",
   "referencedBy": []
  },
  "TREE": {
   "name": "TREE",
   "file": "1dungeon.zil",
   "line": 63,
   "endLine": 68,
   "desc": "tree",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "CLIMBBIT"
   ],
   "synonyms": [
    "TREE",
    "BRANCH"
   ],
   "adjectives": [
    "LARGE",
    "STORM"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TREE\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM TREE BRANCH)\n\t(ADJECTIVE LARGE STORM ;\"-TOSSED\")\n\t(DESC \"tree\")\n\t(FLAGS NDESCBIT CLIMBBIT)>",
   "referencedBy": [
    "TREE-ROOM",
    "FOREST-ROOM",
    "V-CLIMB-UP"
   ]
  },
  "MOUNTAIN-RANGE": {
   "name": "MOUNTAIN-RANGE",
   "file": "1dungeon.zil",
   "line": 70,
   "endLine": 76,
   "desc": "mountain range",
   "ldesc": null,
   "fdesc": null,
   "loc": "MOUNTAINS",
   "flags": [
    "NDESCBIT",
    "CLIMBBIT"
   ],
   "synonyms": [
    "MOUNTAIN",
    "RANGE"
   ],
   "adjectives": [
    "IMPASSABLE",
    "FLATHEAD"
   ],
   "action": "MOUNTAIN-RANGE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MOUNTAIN-RANGE\n\t(IN MOUNTAINS)\n\t(DESC \"mountain range\")\n\t(SYNONYM MOUNTAIN RANGE)\n\t(ADJECTIVE IMPASSABLE FLATHEAD)\n\t(FLAGS NDESCBIT CLIMBBIT)\n\t(ACTION MOUNTAIN-RANGE-F)>",
   "referencedBy": []
  },
  "GLOBAL-WATER": {
   "name": "GLOBAL-WATER",
   "file": "1dungeon.zil",
   "line": 78,
   "endLine": 83,
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
   "action": "WATER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-WATER\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM WATER QUANTITY)\n\t(DESC \"water\")\n\t(FLAGS DRINKBIT)\n\t(ACTION WATER-F)>",
   "referencedBy": [
    "WATER-F",
    "PRE-BOARD",
    "V-EAT",
    "HIT-SPOT",
    "PRE-FILL",
    "V-FILL",
    "V-SWIM"
   ]
  },
  "WATER": {
   "name": "WATER",
   "file": "1dungeon.zil",
   "line": 85,
   "endLine": 91,
   "desc": "quantity of water",
   "ldesc": null,
   "fdesc": null,
   "loc": "BOTTLE",
   "flags": [
    "TRYTAKEBIT",
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
   "action": "WATER-F",
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
   "source": "<OBJECT WATER\n\t(IN BOTTLE)\n\t(SYNONYM WATER QUANTITY LIQUID H2O)\n\t(DESC \"quantity of water\")\n\t(FLAGS TRYTAKEBIT TAKEBIT DRINKBIT)\n\t(ACTION WATER-F)\n\t(SIZE 4)>",
   "referencedBy": [
    "WATER-F",
    "BOTTLE-FUNCTION",
    "CYCLOPS-FCN",
    "SLIDER",
    "PRE-BOARD",
    "HIT-SPOT",
    "PRE-FILL",
    "V-FILL",
    "V-POUR-ON",
    "SHAKE-LOOP",
    "V-SWIM"
   ]
  },
  "KITCHEN-WINDOW": {
   "name": "KITCHEN-WINDOW",
   "file": "1dungeon.zil",
   "line": 93,
   "endLine": 99,
   "desc": "kitchen window",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "WINDOW"
   ],
   "adjectives": [
    "KITCHEN",
    "SMALL"
   ],
   "action": "KITCHEN-WINDOW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT\tKITCHEN-WINDOW\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM WINDOW)\n\t(ADJECTIVE KITCHEN SMALL)\n\t(DESC \"kitchen window\")\n\t(FLAGS DOORBIT NDESCBIT)\n\t(ACTION KITCHEN-WINDOW-F)>",
   "referencedBy": [
    "EAST-HOUSE",
    "WHITE-HOUSE-F",
    "KITCHEN-WINDOW-F",
    "KITCHEN-FCN"
   ]
  },
  "CHIMNEY": {
   "name": "CHIMNEY",
   "file": "1dungeon.zil",
   "line": 101,
   "endLine": 107,
   "desc": "chimney",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "CLIMBBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "CHIMNEY"
   ],
   "adjectives": [
    "DARK",
    "NARROW"
   ],
   "action": "CHIMNEY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CHIMNEY\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM CHIMNEY)\n\t(ADJECTIVE DARK NARROW)\n\t(DESC \"chimney\")\n\t(ACTION CHIMNEY-F)\n\t(FLAGS CLIMBBIT NDESCBIT)>",
   "referencedBy": []
  },
  "GHOSTS": {
   "name": "GHOSTS",
   "file": "1dungeon.zil",
   "line": 109,
   "endLine": 115,
   "desc": "number of ghosts",
   "ldesc": null,
   "fdesc": null,
   "loc": "ENTRANCE-TO-HADES",
   "flags": [
    "ACTORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "GHOSTS",
    "SPIRITS",
    "FIENDS",
    "FORCE"
   ],
   "adjectives": [
    "INVISIBLE",
    "EVIL"
   ],
   "action": "GHOSTS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GHOSTS\n\t(IN ENTRANCE-TO-HADES)\n\t(SYNONYM GHOSTS SPIRITS FIENDS FORCE)\n\t(ADJECTIVE INVISIBLE EVIL)\n\t(DESC \"number of ghosts\")\n\t(FLAGS ACTORBIT NDESCBIT)\n\t(ACTION GHOSTS-F)>",
   "referencedBy": [
    "GHOSTS-F",
    "LLD-ROOM"
   ]
  },
  "SKULL": {
   "name": "SKULL",
   "file": "1dungeon.zil",
   "line": 117,
   "endLine": 127,
   "desc": "crystal skull",
   "ldesc": null,
   "fdesc": "Lying in one corner of the room is a beautifully carved crystal skull.\nIt appears to be grinning at you rather nastily.",
   "loc": "LAND-OF-LIVING-DEAD",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "SKULL",
    "HEAD",
    "TREASURE"
   ],
   "adjectives": [
    "CRYSTAL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "10"
    ],
    "TVALUE": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT SKULL\n\t(IN LAND-OF-LIVING-DEAD)\n\t(SYNONYM SKULL HEAD TREASURE)\n\t(ADJECTIVE CRYSTAL)\n\t(DESC \"crystal skull\")\n\t(FDESC\n\"Lying in one corner of the room is a beautifully carved crystal skull.\nIt appears to be grinning at you rather nastily.\")\n\t(FLAGS TAKEBIT)\n\t(VALUE 10)\n\t(TVALUE 10)>",
   "referencedBy": []
  },
  "LOWERED-BASKET": {
   "name": "LOWERED-BASKET",
   "file": "1dungeon.zil",
   "line": 129,
   "endLine": 136,
   "desc": "basket",
   "ldesc": "From the chain is suspended a basket.",
   "fdesc": null,
   "loc": "LOWER-SHAFT",
   "flags": [
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "CAGE",
    "DUMBWAITER",
    "BASKET"
   ],
   "adjectives": [
    "LOWERED"
   ],
   "action": "BASKET-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LOWERED-BASKET\n\t(IN LOWER-SHAFT)\n\t(SYNONYM CAGE DUMBWAITER BASKET)\n\t(ADJECTIVE LOWERED)\n\t(LDESC \"From the chain is suspended a basket.\")\n\t(DESC \"basket\")\n\t(FLAGS TRYTAKEBIT)\n\t(ACTION BASKET-F)>",
   "referencedBy": [
    "BASKET-F"
   ]
  },
  "RAISED-BASKET": {
   "name": "RAISED-BASKET",
   "file": "1dungeon.zil",
   "line": 138,
   "endLine": 145,
   "desc": "basket",
   "ldesc": "At the end of the chain is a basket.",
   "fdesc": null,
   "loc": "SHAFT-ROOM",
   "flags": [
    "TRANSBIT",
    "TRYTAKEBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "CAGE",
    "DUMBWAITER",
    "BASKET"
   ],
   "adjectives": [],
   "action": "BASKET-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "50"
    ]
   },
   "contents": [],
   "source": "<OBJECT RAISED-BASKET\n\t(IN SHAFT-ROOM)\n\t(SYNONYM CAGE DUMBWAITER BASKET)\n\t(DESC \"basket\")\n\t(FLAGS TRANSBIT TRYTAKEBIT CONTBIT OPENBIT)\n\t(ACTION BASKET-F)\n\t(LDESC \"At the end of the chain is a basket.\")\n\t(CAPACITY 50)>",
   "referencedBy": [
    "BASKET-F"
   ]
  },
  "LUNCH": {
   "name": "LUNCH",
   "file": "1dungeon.zil",
   "line": 147,
   "endLine": 153,
   "desc": "lunch",
   "ldesc": "A hot pepper sandwich is here.",
   "fdesc": null,
   "loc": "SANDWICH-BAG",
   "flags": [
    "TAKEBIT",
    "FOODBIT"
   ],
   "synonyms": [
    "FOOD",
    "SANDWICH",
    "LUNCH",
    "DINNER"
   ],
   "adjectives": [
    "HOT",
    "PEPPER"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LUNCH\n\t(IN SANDWICH-BAG)\n\t(SYNONYM FOOD SANDWICH LUNCH DINNER)\n\t(ADJECTIVE HOT PEPPER)\n\t(DESC \"lunch\")\n\t(FLAGS TAKEBIT FOODBIT)\n\t(LDESC \"A hot pepper sandwich is here.\")>",
   "referencedBy": [
    "CYCLOPS-FCN",
    "SANDWICH-BAG-FCN"
   ]
  },
  "BAT": {
   "name": "BAT",
   "file": "1dungeon.zil",
   "line": 155,
   "endLine": 162,
   "desc": "bat",
   "ldesc": null,
   "fdesc": null,
   "loc": "BAT-ROOM",
   "flags": [
    "ACTORBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "BAT",
    "VAMPIRE"
   ],
   "adjectives": [
    "VAMPIRE",
    "DERANGED"
   ],
   "action": "BAT-F",
   "descfcn": "BAT-D",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BAT\n\t(IN BAT-ROOM)\n\t(SYNONYM BAT VAMPIRE)\n\t(ADJECTIVE VAMPIRE DERANGED)\n\t(DESC \"bat\")\n\t(FLAGS ACTORBIT TRYTAKEBIT)\n\t(DESCFCN BAT-D)\n\t(ACTION BAT-F)>",
   "referencedBy": []
  },
  "BELL": {
   "name": "BELL",
   "file": "1dungeon.zil",
   "line": 164,
   "endLine": 170,
   "desc": "brass bell",
   "ldesc": null,
   "fdesc": null,
   "loc": "NORTH-TEMPLE",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "BELL"
   ],
   "adjectives": [
    "SMALL",
    "BRASS"
   ],
   "action": "BELL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BELL\n\t(IN NORTH-TEMPLE)\n\t(SYNONYM BELL)\n\t(ADJECTIVE SMALL BRASS)\n\t(DESC \"brass bell\")\n\t(FLAGS TAKEBIT)\n\t(ACTION BELL-F)>",
   "referencedBy": [
    "LLD-ROOM",
    "I-XBH"
   ]
  },
  "HOT-BELL": {
   "name": "HOT-BELL",
   "file": "1dungeon.zil",
   "line": 172,
   "endLine": 178,
   "desc": "red hot brass bell",
   "ldesc": "On the ground is a red hot bell.",
   "fdesc": null,
   "loc": null,
   "flags": [
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "BELL"
   ],
   "adjectives": [
    "BRASS",
    "HOT",
    "RED",
    "SMALL"
   ],
   "action": "HOT-BELL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HOT-BELL\n\t(SYNONYM BELL)\n\t(ADJECTIVE BRASS HOT RED SMALL)\n\t(DESC \"red hot brass bell\")\n\t(FLAGS TRYTAKEBIT)\n\t(ACTION HOT-BELL-F)\n\t(LDESC \"On the ground is a red hot bell.\")>",
   "referencedBy": [
    "LLD-ROOM",
    "I-XBH"
   ]
  },
  "AXE": {
   "name": "AXE",
   "file": "1dungeon.zil",
   "line": 180,
   "endLine": 187,
   "desc": "bloody axe",
   "ldesc": null,
   "fdesc": null,
   "loc": "TROLL",
   "flags": [
    "WEAPONBIT",
    "TRYTAKEBIT",
    "TAKEBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "AXE",
    "AX"
   ],
   "adjectives": [
    "BLOODY"
   ],
   "action": "AXE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "25"
    ]
   },
   "contents": [],
   "source": "<OBJECT AXE\n\t(IN TROLL)\n\t(SYNONYM AXE AX)\n\t(ADJECTIVE BLOODY)\n\t(DESC \"bloody axe\")\n\t(FLAGS WEAPONBIT TRYTAKEBIT TAKEBIT NDESCBIT)\n\t(ACTION AXE-F)\n\t(SIZE 25)>",
   "referencedBy": [
    "AXE-F",
    "TROLL-FCN",
    "RBOAT-FUNCTION",
    "FIND-WEAPON"
   ]
  },
  "BOLT": {
   "name": "BOLT",
   "file": "1dungeon.zil",
   "line": 189,
   "endLine": 195,
   "desc": "bolt",
   "ldesc": null,
   "fdesc": null,
   "loc": "DAM-ROOM",
   "flags": [
    "NDESCBIT",
    "TURNBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "BOLT",
    "NUT"
   ],
   "adjectives": [
    "METAL",
    "LARGE"
   ],
   "action": "BOLT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BOLT\n\t(IN DAM-ROOM)\n\t(SYNONYM BOLT NUT)\n\t(ADJECTIVE METAL LARGE)\n\t(DESC \"bolt\")\n\t(FLAGS NDESCBIT TURNBIT TRYTAKEBIT)\n\t(ACTION BOLT-F)>",
   "referencedBy": []
  },
  "BUBBLE": {
   "name": "BUBBLE",
   "file": "1dungeon.zil",
   "line": 197,
   "endLine": 203,
   "desc": "green bubble",
   "ldesc": null,
   "fdesc": null,
   "loc": "DAM-ROOM",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "BUBBLE"
   ],
   "adjectives": [
    "SMALL",
    "GREEN",
    "PLASTIC"
   ],
   "action": "BUBBLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BUBBLE\n\t(IN DAM-ROOM)\n\t(SYNONYM BUBBLE)\n\t(ADJECTIVE SMALL GREEN PLASTIC)\n\t(DESC \"green bubble\")\n\t(FLAGS NDESCBIT TRYTAKEBIT)\n\t(ACTION BUBBLE-F)>",
   "referencedBy": []
  },
  "ALTAR": {
   "name": "ALTAR",
   "file": "1dungeon.zil",
   "line": 205,
   "endLine": 210,
   "desc": "altar",
   "ldesc": null,
   "fdesc": null,
   "loc": "SOUTH-TEMPLE",
   "flags": [
    "NDESCBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "ALTAR"
   ],
   "adjectives": [],
   "action": null,
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
    "BOOK"
   ],
   "source": "<OBJECT ALTAR\n\t(IN SOUTH-TEMPLE)\n\t(SYNONYM ALTAR)\n\t(DESC \"altar\")\n\t(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT)\n\t(CAPACITY 50)>",
   "referencedBy": []
  },
  "BOOK": {
   "name": "BOOK",
   "file": "1dungeon.zil",
   "line": 212,
   "endLine": 231,
   "desc": "black book",
   "ldesc": null,
   "fdesc": "On the altar is a large black book, open to page 569.",
   "loc": "ALTAR",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "CONTBIT",
    "BURNBIT",
    "TURNBIT"
   ],
   "synonyms": [
    "BOOK",
    "PRAYER",
    "PAGE",
    "BOOKS"
   ],
   "adjectives": [
    "LARGE",
    "BLACK"
   ],
   "action": "BLACK-BOOK",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "10"
    ],
    "TEXT": [
     "Commandment #12592|\n|\nOh ye who go about saying unto each:  \"Hello sailor\":|\nDost thou know the magnitude of thy sin before the gods?|\nYea, verily, thou shalt be ground between two stones.|\nShall the angry gods cast thy body into the whirlpool?|\nSurely, thy eye shall be put out with a sharp stick!|\nEven unto the ends of the earth shalt thou wander and|\nUnto the land of the dead shalt thou be sent at last.|\nSurely thou shalt repent of thy cunning."
    ]
   },
   "contents": [],
   "source": "<OBJECT BOOK\n\t(IN ALTAR)\n\t(SYNONYM BOOK PRAYER PAGE BOOKS)\n\t(ADJECTIVE LARGE BLACK)\n\t(DESC \"black book\")\n\t(FLAGS READBIT TAKEBIT CONTBIT BURNBIT TURNBIT)\n\t(ACTION BLACK-BOOK)\n\t(FDESC \"On the altar is a large black book, open to page 569.\")\n\t(SIZE 10)\n\t(TEXT\n\"Commandment #12592|\n|\nOh ye who go about saying unto each:  \\\"Hello sailor\\\":|\nDost thou know the magnitude of thy sin before the gods?|\nYea, verily, thou shalt be ground between two stones.|\nShall the angry gods cast thy body into the whirlpool?|\nSurely, thy eye shall be put out with a sharp stick!|\nEven unto the ends of the earth shalt thou wander and|\nUnto the land of the dead shalt thou be sent at last.|\nSurely thou shalt repent of thy cunning.\" )>",
   "referencedBy": [
    "LLD-ROOM",
    "PRE-TURN"
   ]
  },
  "BROKEN-LAMP": {
   "name": "BROKEN-LAMP",
   "file": "1dungeon.zil",
   "line": 233,
   "endLine": 237,
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
    "BROKEN"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BROKEN-LAMP\n\t(SYNONYM LAMP LANTERN)\n\t(ADJECTIVE BROKEN)\n\t(DESC \"broken lantern\")\n\t(FLAGS TAKEBIT)>",
   "referencedBy": [
    "LANTERN"
   ]
  },
  "SCEPTRE": {
   "name": "SCEPTRE",
   "file": "1dungeon.zil",
   "line": 239,
   "endLine": 253,
   "desc": "sceptre",
   "ldesc": "An ornamented sceptre, tapering to a sharp point, is here.",
   "fdesc": "A sceptre, possibly that of ancient Egypt itself, is in the coffin. The\nsceptre is ornamented with colored enamel, and tapers to a sharp point.",
   "loc": "COFFIN",
   "flags": [
    "TAKEBIT",
    "WEAPONBIT"
   ],
   "synonyms": [
    "SCEPTRE",
    "SCEPTER",
    "TREASURE"
   ],
   "adjectives": [
    "SHARP",
    "EGYPTIAN",
    "ANCIENT",
    "ENAMELED"
   ],
   "action": "SCEPTRE-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ],
    "VALUE": [
     "4"
    ],
    "TVALUE": [
     "6"
    ]
   },
   "contents": [],
   "source": "<OBJECT SCEPTRE\n\t(IN COFFIN)\n\t(SYNONYM SCEPTRE SCEPTER TREASURE)\n\t(ADJECTIVE SHARP EGYPTIAN ANCIENT ENAMELED)\n\t(DESC \"sceptre\")\n\t(FLAGS TAKEBIT WEAPONBIT)\n\t(ACTION SCEPTRE-FUNCTION)\n\t(LDESC\n\"An ornamented sceptre, tapering to a sharp point, is here.\")\n\t(FDESC\n\"A sceptre, possibly that of ancient Egypt itself, is in the coffin. The\nsceptre is ornamented with colored enamel, and tapers to a sharp point.\")\n\t(SIZE 3)\n\t(VALUE 4)\n\t(TVALUE 6)>",
   "referencedBy": [
    "RBOAT-FUNCTION"
   ]
  },
  "TIMBERS": {
   "name": "TIMBERS",
   "file": "1dungeon.zil",
   "line": 255,
   "endLine": 261,
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
   "source": "<OBJECT TIMBERS\n\t(IN TIMBER-ROOM)\n\t(SYNONYM TIMBERS PILE)\n\t(ADJECTIVE WOODEN BROKEN)\n\t(DESC \"broken timber\")\n\t(FLAGS TAKEBIT)\n\t(SIZE 50)>",
   "referencedBy": []
  },
  "SLIDE": {
   "name": "SLIDE",
   "file": "1dungeon.zil",
   "line": 263,
   "endLine": 269,
   "desc": "chute",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "CLIMBBIT"
   ],
   "synonyms": [
    "CHUTE",
    "RAMP",
    "SLIDE"
   ],
   "adjectives": [
    "STEEP",
    "METAL",
    "TWISTING"
   ],
   "action": "SLIDE-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT\tSLIDE\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM CHUTE RAMP SLIDE)\n\t(ADJECTIVE STEEP METAL TWISTING)\n\t(DESC \"chute\")\n\t(FLAGS CLIMBBIT)\n\t(ACTION SLIDE-FUNCTION)>",
   "referencedBy": []
  },
  "KITCHEN-TABLE": {
   "name": "KITCHEN-TABLE",
   "file": "1dungeon.zil",
   "line": 271,
   "endLine": 277,
   "desc": "kitchen table",
   "ldesc": null,
   "fdesc": null,
   "loc": "KITCHEN",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT",
    "SURFACEBIT"
   ],
   "synonyms": [
    "TABLE"
   ],
   "adjectives": [
    "KITCHEN"
   ],
   "action": null,
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
    "SANDWICH-BAG",
    "BOTTLE"
   ],
   "source": "<OBJECT KITCHEN-TABLE\n\t(IN KITCHEN)\n\t(SYNONYM TABLE)\n\t(ADJECTIVE KITCHEN)\n\t(DESC \"kitchen table\")\n\t(FLAGS NDESCBIT CONTBIT OPENBIT SURFACEBIT)\n\t(CAPACITY 50)>",
   "referencedBy": []
  },
  "ATTIC-TABLE": {
   "name": "ATTIC-TABLE",
   "file": "1dungeon.zil",
   "line": 279,
   "endLine": 284,
   "desc": "table",
   "ldesc": null,
   "fdesc": null,
   "loc": "ATTIC",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT",
    "SURFACEBIT"
   ],
   "synonyms": [
    "TABLE"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "40"
    ]
   },
   "contents": [
    "KNIFE"
   ],
   "source": "<OBJECT ATTIC-TABLE\n\t(IN ATTIC)\n\t(SYNONYM TABLE)\n\t(DESC \"table\")\n\t(FLAGS NDESCBIT CONTBIT OPENBIT SURFACEBIT)\n\t(CAPACITY 40)>",
   "referencedBy": [
    "KNIFE-F"
   ]
  },
  "SANDWICH-BAG": {
   "name": "SANDWICH-BAG",
   "file": "1dungeon.zil",
   "line": 286,
   "endLine": 296,
   "desc": "brown sack",
   "ldesc": null,
   "fdesc": "On the table is an elongated brown sack, smelling of hot peppers.",
   "loc": "KITCHEN-TABLE",
   "flags": [
    "TAKEBIT",
    "CONTBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "BAG",
    "SACK"
   ],
   "adjectives": [
    "BROWN",
    "ELONGATED",
    "SMELLY"
   ],
   "action": "SANDWICH-BAG-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "9"
    ],
    "SIZE": [
     "9"
    ]
   },
   "contents": [
    "LUNCH",
    "GARLIC"
   ],
   "source": "<OBJECT SANDWICH-BAG\n\t(IN KITCHEN-TABLE)\n\t(SYNONYM BAG SACK)\n\t(ADJECTIVE BROWN ELONGATED SMELLY)\n\t(DESC \"brown sack\")\n\t(FLAGS TAKEBIT CONTBIT BURNBIT)\n\t(FDESC\n\"On the table is an elongated brown sack, smelling of hot peppers.\")\n\t(CAPACITY 9)\n\t(SIZE 9)\n\t(ACTION SANDWICH-BAG-FCN)>",
   "referencedBy": []
  },
  "TOOL-CHEST": {
   "name": "TOOL-CHEST",
   "file": "1dungeon.zil",
   "line": 298,
   "endLine": 304,
   "desc": "group of tool chests",
   "ldesc": null,
   "fdesc": null,
   "loc": "MAINTENANCE-ROOM",
   "flags": [
    "CONTBIT",
    "OPENBIT",
    "TRYTAKEBIT",
    "SACREDBIT"
   ],
   "synonyms": [
    "CHEST",
    "CHESTS",
    "GROUP",
    "TOOLCHESTS"
   ],
   "adjectives": [
    "TOOL"
   ],
   "action": "TOOL-CHEST-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TOOL-CHEST\n\t(IN MAINTENANCE-ROOM)\n\t(SYNONYM CHEST CHESTS GROUP TOOLCHESTS)\n\t(ADJECTIVE TOOL)\n\t(DESC \"group of tool chests\")\n\t(FLAGS CONTBIT OPENBIT TRYTAKEBIT SACREDBIT)\n\t(ACTION TOOL-CHEST-FCN)>",
   "referencedBy": [
    "TOOL-CHEST-FCN"
   ]
  },
  "YELLOW-BUTTON": {
   "name": "YELLOW-BUTTON",
   "file": "1dungeon.zil",
   "line": 306,
   "endLine": 312,
   "desc": "yellow button",
   "ldesc": null,
   "fdesc": null,
   "loc": "MAINTENANCE-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON",
    "SWITCH"
   ],
   "adjectives": [
    "YELLOW"
   ],
   "action": "BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT YELLOW-BUTTON\n\t(IN MAINTENANCE-ROOM)\n\t(SYNONYM BUTTON SWITCH)\n\t(ADJECTIVE YELLOW)\n\t(DESC \"yellow button\")\n\t(FLAGS NDESCBIT)\n\t(ACTION BUTTON-F)>",
   "referencedBy": [
    "BUTTON-F"
   ]
  },
  "BROWN-BUTTON": {
   "name": "BROWN-BUTTON",
   "file": "1dungeon.zil",
   "line": 314,
   "endLine": 320,
   "desc": "brown button",
   "ldesc": null,
   "fdesc": null,
   "loc": "MAINTENANCE-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON",
    "SWITCH"
   ],
   "adjectives": [
    "BROWN"
   ],
   "action": "BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BROWN-BUTTON\n\t(IN MAINTENANCE-ROOM)\n\t(SYNONYM BUTTON SWITCH)\n\t(ADJECTIVE BROWN)\n\t(DESC \"brown button\")\n\t(FLAGS NDESCBIT)\n\t(ACTION BUTTON-F)>",
   "referencedBy": [
    "BUTTON-F"
   ]
  },
  "RED-BUTTON": {
   "name": "RED-BUTTON",
   "file": "1dungeon.zil",
   "line": 322,
   "endLine": 328,
   "desc": "red button",
   "ldesc": null,
   "fdesc": null,
   "loc": "MAINTENANCE-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON",
    "SWITCH"
   ],
   "adjectives": [
    "RED"
   ],
   "action": "BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RED-BUTTON\n\t(IN MAINTENANCE-ROOM)\n\t(SYNONYM BUTTON SWITCH)\n\t(ADJECTIVE RED)\n\t(DESC \"red button\")\n\t(FLAGS NDESCBIT)\n\t(ACTION BUTTON-F)>",
   "referencedBy": [
    "BUTTON-F"
   ]
  },
  "BLUE-BUTTON": {
   "name": "BLUE-BUTTON",
   "file": "1dungeon.zil",
   "line": 330,
   "endLine": 336,
   "desc": "blue button",
   "ldesc": null,
   "fdesc": null,
   "loc": "MAINTENANCE-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON",
    "SWITCH"
   ],
   "adjectives": [
    "BLUE"
   ],
   "action": "BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BLUE-BUTTON\n\t(IN MAINTENANCE-ROOM)\n\t(SYNONYM BUTTON SWITCH)\n\t(ADJECTIVE BLUE)\n\t(DESC \"blue button\")\n\t(FLAGS NDESCBIT)\n\t(ACTION BUTTON-F)>",
   "referencedBy": [
    "BUTTON-F"
   ]
  },
  "TROPHY-CASE": {
   "name": "TROPHY-CASE",
   "file": "1dungeon.zil",
   "line": 338,
   "endLine": 345,
   "desc": "trophy case",
   "ldesc": null,
   "fdesc": null,
   "loc": "LIVING-ROOM",
   "flags": [
    "TRANSBIT",
    "CONTBIT",
    "NDESCBIT",
    "TRYTAKEBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "CASE"
   ],
   "adjectives": [
    "TROPHY"
   ],
   "action": "TROPHY-CASE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "10000"
    ]
   },
   "contents": [
    "MAP"
   ],
   "source": "<OBJECT TROPHY-CASE\t;\"first obj so L.R. desc looks right.\"\n\t(IN LIVING-ROOM)\n\t(SYNONYM CASE)\n\t(ADJECTIVE TROPHY)\n\t(DESC \"trophy case\")\n\t(FLAGS TRANSBIT CONTBIT NDESCBIT TRYTAKEBIT SEARCHBIT)\n\t(ACTION TROPHY-CASE-FCN)\n\t(CAPACITY 10000)>",
   "referencedBy": [
    "TROPHY-CASE-FCN",
    "LIVING-ROOM-FCN",
    "OTVAL-FROB",
    "FIRSTER"
   ]
  },
  "RUG": {
   "name": "RUG",
   "file": "1dungeon.zil",
   "line": 347,
   "endLine": 353,
   "desc": "carpet",
   "ldesc": null,
   "fdesc": null,
   "loc": "LIVING-ROOM",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "RUG",
    "CARPET"
   ],
   "adjectives": [
    "LARGE",
    "ORIENTAL"
   ],
   "action": "RUG-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RUG\n\t(IN LIVING-ROOM)\n\t(SYNONYM RUG CARPET)\n\t(ADJECTIVE LARGE ORIENTAL)\n\t(DESC \"carpet\")\n\t(FLAGS NDESCBIT TRYTAKEBIT)\n\t(ACTION RUG-FCN)>",
   "referencedBy": []
  },
  "CHALICE": {
   "name": "CHALICE",
   "file": "1dungeon.zil",
   "line": 355,
   "endLine": 366,
   "desc": "chalice",
   "ldesc": "There is a silver chalice, intricately engraved, here.",
   "fdesc": null,
   "loc": "TREASURE-ROOM",
   "flags": [
    "TAKEBIT",
    "TRYTAKEBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "CHALICE",
    "CUP",
    "SILVER",
    "TREASURE"
   ],
   "adjectives": [
    "SILVER",
    "ENGRAVINGS"
   ],
   "action": "CHALICE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "5"
    ],
    "SIZE": [
     "10"
    ],
    "VALUE": [
     "10"
    ],
    "TVALUE": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT CHALICE\n\t(IN TREASURE-ROOM)\n\t(SYNONYM CHALICE CUP SILVER TREASURE)\n\t(ADJECTIVE SILVER ENGRAVINGS) ;\"engravings exists...\"\n\t(DESC \"chalice\")\n\t(FLAGS TAKEBIT TRYTAKEBIT CONTBIT)\n\t(ACTION CHALICE-FCN)\n\t(LDESC \"There is a silver chalice, intricately engraved, here.\")\n\t(CAPACITY 5)\n\t(SIZE 10)\n\t(VALUE 10)\n\t(TVALUE 5)>",
   "referencedBy": [
    "ROBBER-FUNCTION",
    "CHALICE-FCN",
    "THIEF-IN-TREASURE"
   ]
  },
  "GARLIC": {
   "name": "GARLIC",
   "file": "1dungeon.zil",
   "line": 368,
   "endLine": 374,
   "desc": "clove of garlic",
   "ldesc": null,
   "fdesc": null,
   "loc": "SANDWICH-BAG",
   "flags": [
    "TAKEBIT",
    "FOODBIT"
   ],
   "synonyms": [
    "GARLIC",
    "CLOVE"
   ],
   "adjectives": [],
   "action": "GARLIC-F",
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
   "source": "<OBJECT GARLIC\n\t(IN SANDWICH-BAG)\n\t(SYNONYM GARLIC CLOVE)\n\t(DESC \"clove of garlic\")\n\t(FLAGS TAKEBIT FOODBIT)\n\t(ACTION GARLIC-F)\n\t(SIZE 4)>",
   "referencedBy": [
    "BAT-F",
    "CYCLOPS-FCN",
    "BAT-D",
    "BATS-ROOM"
   ]
  },
  "TRIDENT": {
   "name": "TRIDENT",
   "file": "1dungeon.zil",
   "line": 376,
   "endLine": 385,
   "desc": "crystal trident",
   "ldesc": null,
   "fdesc": "On the shore lies Poseidon's own crystal trident.",
   "loc": "ATLANTIS-ROOM",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "TRIDENT",
    "FORK",
    "TREASURE"
   ],
   "adjectives": [
    "POSEIDON",
    "OWN",
    "CRYSTAL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "20"
    ],
    "VALUE": [
     "4"
    ],
    "TVALUE": [
     "11"
    ]
   },
   "contents": [],
   "source": "<OBJECT TRIDENT\n\t(IN ATLANTIS-ROOM)\n\t(SYNONYM TRIDENT FORK TREASURE)\n\t(ADJECTIVE POSEIDON OWN CRYSTAL)\n\t(DESC \"crystal trident\")\n\t(FLAGS TAKEBIT)\n\t(FDESC \"On the shore lies Poseidon's own crystal trident.\")\n\t(SIZE 20)\n\t(VALUE 4)\n\t(TVALUE 11)>",
   "referencedBy": []
  },
  "CYCLOPS": {
   "name": "CYCLOPS",
   "file": "1dungeon.zil",
   "line": 387,
   "endLine": 394,
   "desc": "cyclops",
   "ldesc": null,
   "fdesc": null,
   "loc": "CYCLOPS-ROOM",
   "flags": [
    "ACTORBIT",
    "NDESCBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "CYCLOPS",
    "MONSTER",
    "EYE"
   ],
   "adjectives": [
    "HUNGRY",
    "GIANT"
   ],
   "action": "CYCLOPS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "STRENGTH": [
     "10000"
    ]
   },
   "contents": [],
   "source": "<OBJECT CYCLOPS\n\t(IN CYCLOPS-ROOM)\n\t(SYNONYM CYCLOPS MONSTER EYE)\n\t(ADJECTIVE HUNGRY GIANT)\n\t(DESC \"cyclops\")\n\t(FLAGS ACTORBIT NDESCBIT TRYTAKEBIT)\n\t(ACTION CYCLOPS-FCN)\n\t(STRENGTH 10000)>",
   "referencedBy": [
    "CYCLOPS-FCN",
    "V-ODYSSEUS"
   ]
  },
  "DAM": {
   "name": "DAM",
   "file": "1dungeon.zil",
   "line": 396,
   "endLine": 401,
   "desc": "dam",
   "ldesc": null,
   "fdesc": null,
   "loc": "DAM-ROOM",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "DAM",
    "GATE",
    "GATES",
    "FCD#3"
   ],
   "adjectives": [],
   "action": "DAM-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DAM\n\t(IN DAM-ROOM)\n\t(SYNONYM DAM GATE GATES FCD\\#3)\n\t(DESC \"dam\")\n\t(FLAGS NDESCBIT TRYTAKEBIT)\n\t(ACTION DAM-FUNCTION)>",
   "referencedBy": []
  },
  "TRAP-DOOR": {
   "name": "TRAP-DOOR",
   "file": "1dungeon.zil",
   "line": 403,
   "endLine": 409,
   "desc": "trap door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LIVING-ROOM",
   "flags": [
    "DOORBIT",
    "NDESCBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "DOOR",
    "TRAPDOOR",
    "TRAP-DOOR",
    "COVER"
   ],
   "adjectives": [
    "TRAP",
    "DUSTY"
   ],
   "action": "TRAP-DOOR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TRAP-DOOR\n\t(IN LIVING-ROOM)\n\t(SYNONYM DOOR TRAPDOOR TRAP-DOOR COVER)\n\t(ADJECTIVE TRAP DUSTY)\n\t(DESC \"trap door\")\n\t(FLAGS DOORBIT NDESCBIT INVISIBLE)\n\t(ACTION TRAP-DOOR-FCN)>",
   "referencedBy": [
    "LIVING-ROOM-FCN",
    "TRAP-DOOR-FCN",
    "CELLAR-FCN",
    "UP-CHIMNEY-FUNCTION",
    "TRAP-DOOR-EXIT",
    "RUG-FCN",
    "JIGS-UP"
   ]
  },
  "BOARDED-WINDOW": {
   "name": "BOARDED-WINDOW",
   "file": "1dungeon.zil",
   "line": 411,
   "endLine": 417,
   "desc": "boarded window",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WINDOW"
   ],
   "adjectives": [
    "BOARDED"
   ],
   "action": "BOARDED-WINDOW-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BOARDED-WINDOW\n\t(IN LOCAL-GLOBALS)\n        (SYNONYM WINDOW)\n\t(ADJECTIVE BOARDED)\n\t(DESC \"boarded window\")\n\t(FLAGS NDESCBIT)\n\t(ACTION BOARDED-WINDOW-FCN)>",
   "referencedBy": []
  },
  "FRONT-DOOR": {
   "name": "FRONT-DOOR",
   "file": "1dungeon.zil",
   "line": 419,
   "endLine": 425,
   "desc": "door",
   "ldesc": null,
   "fdesc": null,
   "loc": "WEST-OF-HOUSE",
   "flags": [
    "DOORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "FRONT",
    "BOARDED"
   ],
   "action": "FRONT-DOOR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FRONT-DOOR\n\t(IN WEST-OF-HOUSE)\n\t(SYNONYM DOOR)\n\t(ADJECTIVE FRONT BOARDED)\n\t(DESC \"door\")\n\t(FLAGS DOORBIT NDESCBIT)\n\t(ACTION FRONT-DOOR-FCN)>",
   "referencedBy": [
    "V-SAY"
   ]
  },
  "BARROW-DOOR": {
   "name": "BARROW-DOOR",
   "file": "1dungeon.zil",
   "line": 427,
   "endLine": 433,
   "desc": "stone door",
   "ldesc": null,
   "fdesc": null,
   "loc": "STONE-BARROW",
   "flags": [
    "DOORBIT",
    "NDESCBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "HUGE",
    "STONE"
   ],
   "action": "BARROW-DOOR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BARROW-DOOR\t\n\t(IN STONE-BARROW)\n\t(SYNONYM DOOR)\n\t(ADJECTIVE HUGE STONE)\n\t(DESC \"stone door\")\n\t(FLAGS DOORBIT NDESCBIT OPENBIT)\n\t(ACTION BARROW-DOOR-FCN)>",
   "referencedBy": []
  },
  "BARROW": {
   "name": "BARROW",
   "file": "1dungeon.zil",
   "line": 435,
   "endLine": 441,
   "desc": "stone barrow",
   "ldesc": null,
   "fdesc": null,
   "loc": "STONE-BARROW",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BARROW",
    "TOMB"
   ],
   "adjectives": [
    "MASSIVE",
    "STONE"
   ],
   "action": "BARROW-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BARROW\n\t(IN STONE-BARROW)\n\t(SYNONYM BARROW TOMB)\n\t(ADJECTIVE MASSIVE STONE)\n\t(DESC \"stone barrow\")\n\t(FLAGS NDESCBIT)\n\t(ACTION BARROW-FCN)>",
   "referencedBy": [
    "STONE-BARROW-FCN"
   ]
  },
  "BOTTLE": {
   "name": "BOTTLE",
   "file": "1dungeon.zil",
   "line": 443,
   "endLine": 451,
   "desc": "glass bottle",
   "ldesc": null,
   "fdesc": "A bottle is sitting on the table.",
   "loc": "KITCHEN-TABLE",
   "flags": [
    "TAKEBIT",
    "TRANSBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "BOTTLE",
    "CONTAINER"
   ],
   "adjectives": [
    "CLEAR",
    "GLASS"
   ],
   "action": "BOTTLE-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "4"
    ]
   },
   "contents": [
    "WATER"
   ],
   "source": "<OBJECT BOTTLE\n\t(IN KITCHEN-TABLE)\n\t(SYNONYM BOTTLE CONTAINER)\n\t(ADJECTIVE CLEAR GLASS)\n\t(DESC \"glass bottle\")\n\t(FLAGS TAKEBIT TRANSBIT CONTBIT)\n\t(ACTION BOTTLE-FUNCTION)\n\t(FDESC \"A bottle is sitting on the table.\")\n\t(CAPACITY 4)>",
   "referencedBy": [
    "WATER-F",
    "BOTTLE-FUNCTION",
    "CYCLOPS-FCN"
   ]
  },
  "CRACK": {
   "name": "CRACK",
   "file": "1dungeon.zil",
   "line": 453,
   "endLine": 459,
   "desc": "crack",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "CRACK"
   ],
   "adjectives": [
    "NARROW"
   ],
   "action": "CRACK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CRACK\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM CRACK)\n\t(ADJECTIVE NARROW)\n\t(DESC \"crack\")\n\t(FLAGS NDESCBIT)\n\t(ACTION CRACK-FCN)>",
   "referencedBy": []
  },
  "COFFIN": {
   "name": "COFFIN",
   "file": "1dungeon.zil",
   "line": 461,
   "endLine": 472,
   "desc": "gold coffin",
   "ldesc": "The solid-gold coffin used for the burial of Ramses II is here.",
   "fdesc": null,
   "loc": "EGYPT-ROOM",
   "flags": [
    "TAKEBIT",
    "CONTBIT",
    "SACREDBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "COFFIN",
    "CASKET",
    "TREASURE"
   ],
   "adjectives": [
    "SOLID",
    "GOLD"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "35"
    ],
    "SIZE": [
     "55"
    ],
    "VALUE": [
     "10"
    ],
    "TVALUE": [
     "15"
    ]
   },
   "contents": [
    "SCEPTRE"
   ],
   "source": "<OBJECT COFFIN\n\t(IN EGYPT-ROOM)\n\t(SYNONYM COFFIN CASKET TREASURE)\n\t(ADJECTIVE SOLID GOLD)\n\t(DESC \"gold coffin\")\n\t(FLAGS TAKEBIT CONTBIT SACREDBIT SEARCHBIT)\n\t(LDESC\n\"The solid-gold coffin used for the burial of Ramses II is here.\")\n\t(CAPACITY 35)\n\t(SIZE 55)\n\t(VALUE 10)\n\t(TVALUE 15)>",
   "referencedBy": [
    "SOUTH-TEMPLE-FCN",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "GRATE": {
   "name": "GRATE",
   "file": "1dungeon.zil",
   "line": 474,
   "endLine": 479,
   "desc": "grating",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "NDESCBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "GRATE",
    "GRATING"
   ],
   "adjectives": [],
   "action": "GRATE-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GRATE\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM GRATE GRATING)\n\t(DESC \"grating\")\n\t(FLAGS DOORBIT NDESCBIT INVISIBLE)\n\t(ACTION GRATE-FUNCTION)>",
   "referencedBy": [
    "LEAVES-APPEAR",
    "CLEARING-FCN",
    "MAZE-11-FCN",
    "GRATE-FUNCTION",
    "GRATING-EXIT"
   ]
  },
  "PUMP": {
   "name": "PUMP",
   "file": "1dungeon.zil",
   "line": 481,
   "endLine": 486,
   "desc": "hand-held air pump",
   "ldesc": null,
   "fdesc": null,
   "loc": "RESERVOIR-NORTH",
   "flags": [
    "TAKEBIT",
    "TOOLBIT"
   ],
   "synonyms": [
    "PUMP",
    "AIR-PUMP",
    "TOOL",
    "TOOLS"
   ],
   "adjectives": [
    "SMALL",
    "HAND-HELD"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PUMP\n\t(IN RESERVOIR-NORTH)\n\t(SYNONYM PUMP AIR-PUMP TOOL TOOLS)\n\t(ADJECTIVE SMALL HAND-HELD)\n\t(DESC \"hand-held air pump\")\n\t(FLAGS TAKEBIT TOOLBIT)>",
   "referencedBy": [
    "IBOAT-FUNCTION",
    "V-PUMP"
   ]
  },
  "DIAMOND": {
   "name": "DIAMOND",
   "file": "1dungeon.zil",
   "line": 488,
   "endLine": 495,
   "desc": "huge diamond",
   "ldesc": "There is an enormous diamond (perfectly cut) here.",
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "DIAMOND",
    "TREASURE"
   ],
   "adjectives": [
    "HUGE",
    "ENORMOUS"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "10"
    ],
    "TVALUE": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT DIAMOND\n\t(SYNONYM DIAMOND TREASURE)\n\t(ADJECTIVE HUGE ENORMOUS)\n\t(DESC \"huge diamond\")\n\t(FLAGS TAKEBIT)\n\t(LDESC \"There is an enormous diamond (perfectly cut) here.\")\n\t(VALUE 10)\n\t(TVALUE 10)>",
   "referencedBy": [
    "MSWITCH-FUNCTION"
   ]
  },
  "JADE": {
   "name": "JADE",
   "file": "1dungeon.zil",
   "line": 497,
   "endLine": 506,
   "desc": "jade figurine",
   "ldesc": "There is an exquisite jade figurine here.",
   "fdesc": null,
   "loc": "BAT-ROOM",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "FIGURINE",
    "TREASURE"
   ],
   "adjectives": [
    "EXQUISITE",
    "JADE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "10"
    ],
    "VALUE": [
     "5"
    ],
    "TVALUE": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT JADE\n\t(IN BAT-ROOM)\n\t(SYNONYM FIGURINE TREASURE)\n\t(ADJECTIVE EXQUISITE JADE)\n\t(DESC \"jade figurine\")\n\t(FLAGS TAKEBIT)\n\t(LDESC \"There is an exquisite jade figurine here.\")\n\t(SIZE 10)\n\t(VALUE 5)\n\t(TVALUE 5)>",
   "referencedBy": []
  },
  "KNIFE": {
   "name": "KNIFE",
   "file": "1dungeon.zil",
   "line": 508,
   "endLine": 515,
   "desc": "nasty knife",
   "ldesc": null,
   "fdesc": "On a table is a nasty-looking knife.",
   "loc": "ATTIC-TABLE",
   "flags": [
    "TAKEBIT",
    "WEAPONBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "KNIVES",
    "KNIFE",
    "BLADE"
   ],
   "adjectives": [
    "NASTY",
    "UNRUSTY"
   ],
   "action": "KNIFE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT KNIFE\n\t(IN ATTIC-TABLE)\n\t(SYNONYM KNIVES KNIFE BLADE)\n\t(ADJECTIVE NASTY UNRUSTY)\n\t(DESC \"nasty knife\")\n\t(FLAGS TAKEBIT WEAPONBIT TRYTAKEBIT)\n\t(FDESC \"On a table is a nasty-looking knife.\")\n\t(ACTION KNIFE-F)>",
   "referencedBy": [
    "TROLL-FCN",
    "ROBBER-FUNCTION",
    "RBOAT-FUNCTION",
    "FIND-WEAPON"
   ]
  },
  "BONES": {
   "name": "BONES",
   "file": "1dungeon.zil",
   "line": 517,
   "endLine": 522,
   "desc": "skeleton",
   "ldesc": null,
   "fdesc": null,
   "loc": "MAZE-5",
   "flags": [
    "TRYTAKEBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "BONES",
    "SKELETON",
    "BODY"
   ],
   "adjectives": [],
   "action": "SKELETON",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BONES\n\t(IN MAZE-5)\n\t(SYNONYM BONES SKELETON BODY)\n\t(DESC \"skeleton\")\n\t(FLAGS TRYTAKEBIT NDESCBIT)\n\t(ACTION SKELETON)>",
   "referencedBy": []
  },
  "BURNED-OUT-LANTERN": {
   "name": "BURNED-OUT-LANTERN",
   "file": "1dungeon.zil",
   "line": 524,
   "endLine": 531,
   "desc": "burned-out lantern",
   "ldesc": null,
   "fdesc": "The deceased adventurer's useless lantern is here.",
   "loc": "MAZE-5",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "LANTERN",
    "LAMP"
   ],
   "adjectives": [
    "RUSTY",
    "BURNED",
    "DEAD",
    "USELESS"
   ],
   "action": null,
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
   "source": "<OBJECT BURNED-OUT-LANTERN\n\t(IN MAZE-5)\n\t(SYNONYM LANTERN LAMP)\n\t(ADJECTIVE RUSTY BURNED DEAD USELESS)\n\t(DESC \"burned-out lantern\")\n\t(FLAGS TAKEBIT)\n\t(FDESC \"The deceased adventurer's useless lantern is here.\")\n\t(SIZE 20)>",
   "referencedBy": []
  },
  "BAG-OF-COINS": {
   "name": "BAG-OF-COINS",
   "file": "1dungeon.zil",
   "line": 533,
   "endLine": 543,
   "desc": "leather bag of coins",
   "ldesc": "An old leather bag, bulging with coins, is here.",
   "fdesc": null,
   "loc": "MAZE-5",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "BAG",
    "COINS",
    "TREASURE"
   ],
   "adjectives": [
    "OLD",
    "LEATHER"
   ],
   "action": "BAG-OF-COINS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "15"
    ],
    "VALUE": [
     "10"
    ],
    "TVALUE": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT BAG-OF-COINS\n\t(IN MAZE-5)\n\t(SYNONYM BAG COINS TREASURE)\n\t(ADJECTIVE OLD LEATHER)\n\t(DESC \"leather bag of coins\")\n\t(FLAGS TAKEBIT)\n\t(LDESC \"An old leather bag, bulging with coins, is here.\")\n\t(ACTION BAG-OF-COINS-F)\n\t(SIZE 15)\n\t(VALUE 10)\n\t(TVALUE 5)>",
   "referencedBy": [
    "BAG-OF-COINS-F"
   ]
  },
  "LAMP": {
   "name": "LAMP",
   "file": "1dungeon.zil",
   "line": 545,
   "endLine": 554,
   "desc": "brass lantern",
   "ldesc": "There is a brass lantern (battery-powered) here.",
   "fdesc": "A battery-powered brass lantern is on the trophy case.",
   "loc": "LIVING-ROOM",
   "flags": [
    "TAKEBIT",
    "LIGHTBIT"
   ],
   "synonyms": [
    "LAMP",
    "LANTERN",
    "LIGHT"
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
   "source": "<OBJECT LAMP\n\t(IN LIVING-ROOM)\n\t(SYNONYM LAMP LANTERN LIGHT)\n\t(ADJECTIVE BRASS)\n\t(DESC \"brass lantern\")\n\t(FLAGS TAKEBIT LIGHTBIT)\n\t(ACTION LANTERN)\n\t(FDESC \"A battery-powered brass lantern is on the trophy case.\")\n\t(LDESC \"There is a brass lantern (battery-powered) here.\")\n\t(SIZE 15)>",
   "referencedBy": [
    "UP-CHIMNEY-FUNCTION",
    "LANTERN",
    "I-LANTERN",
    "DEAD-FUNCTION",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "EMERALD": {
   "name": "EMERALD",
   "file": "1dungeon.zil",
   "line": 556,
   "endLine": 563,
   "desc": "large emerald",
   "ldesc": null,
   "fdesc": null,
   "loc": "BUOY",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "EMERALD",
    "TREASURE"
   ],
   "adjectives": [
    "LARGE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "5"
    ],
    "TVALUE": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT EMERALD\n\t(IN BUOY)\n\t(SYNONYM EMERALD TREASURE)\n\t(ADJECTIVE LARGE)\n\t(DESC \"large emerald\")\n\t(FLAGS TAKEBIT)\n\t(VALUE 5)\n\t(TVALUE 10)>",
   "referencedBy": [
    "TREASURE-INSIDE"
   ]
  },
  "ADVERTISEMENT": {
   "name": "ADVERTISEMENT",
   "file": "1dungeon.zil",
   "line": 565,
   "endLine": 578,
   "desc": "leaflet",
   "ldesc": "A small leaflet is on the ground.",
   "fdesc": null,
   "loc": "MAILBOX",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "ADVERTISEMENT",
    "LEAFLET",
    "BOOKLET",
    "MAIL"
   ],
   "adjectives": [
    "SMALL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "\"WELCOME TO ZORK!|\n|\nZORK is a game of adventure, danger, and low cunning. In it you\nwill explore some of the most amazing territory ever seen by mortals.\nNo computer should be without one!\""
    ],
    "SIZE": [
     "2"
    ]
   },
   "contents": [],
   "source": "<OBJECT ADVERTISEMENT\n\t(IN MAILBOX)\n\t(SYNONYM ADVERTISEMENT LEAFLET BOOKLET MAIL)\n\t(ADJECTIVE SMALL)\n\t(DESC \"leaflet\")\n\t(FLAGS READBIT TAKEBIT BURNBIT)\n\t(LDESC \"A small leaflet is on the ground.\")\n\t(TEXT\n\"\\\"WELCOME TO ZORK!|\n|\nZORK is a game of adventure, danger, and low cunning. In it you\nwill explore some of the most amazing territory ever seen by mortals.\nNo computer should be without one!\\\"\")\n\t(SIZE 2)>",
   "referencedBy": []
  },
  "LEAK": {
   "name": "LEAK",
   "file": "1dungeon.zil",
   "line": 580,
   "endLine": 585,
   "desc": "leak",
   "ldesc": null,
   "fdesc": null,
   "loc": "MAINTENANCE-ROOM",
   "flags": [
    "NDESCBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "LEAK",
    "DRIP",
    "PIPE"
   ],
   "adjectives": [],
   "action": "LEAK-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LEAK\n\t(IN MAINTENANCE-ROOM)\n\t(SYNONYM LEAK DRIP PIPE)\n\t(DESC \"leak\")\n\t(FLAGS NDESCBIT INVISIBLE)\n\t(ACTION LEAK-FUNCTION)>",
   "referencedBy": [
    "BUTTON-F"
   ]
  },
  "MACHINE": {
   "name": "MACHINE",
   "file": "1dungeon.zil",
   "line": 587,
   "endLine": 593,
   "desc": "machine",
   "ldesc": null,
   "fdesc": null,
   "loc": "MACHINE-ROOM",
   "flags": [
    "CONTBIT",
    "NDESCBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "MACHINE",
    "PDP10",
    "DRYER",
    "LID"
   ],
   "adjectives": [],
   "action": "MACHINE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "50"
    ]
   },
   "contents": [],
   "source": "<OBJECT MACHINE\n\t(IN MACHINE-ROOM)\n\t(SYNONYM MACHINE PDP10 DRYER LID)\n\t(DESC \"machine\")\n\t(FLAGS CONTBIT NDESCBIT TRYTAKEBIT)\n\t(ACTION MACHINE-F)\n\t(CAPACITY 50)>",
   "referencedBy": [
    "MACHINE-ROOM-FCN",
    "MACHINE-F",
    "MSWITCH-FUNCTION"
   ]
  },
  "INFLATED-BOAT": {
   "name": "INFLATED-BOAT",
   "file": "1dungeon.zil",
   "line": 595,
   "endLine": 603,
   "desc": "magic boat",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "BURNBIT",
    "VEHBIT",
    "OPENBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "BOAT",
    "RAFT"
   ],
   "adjectives": [
    "INFLAT",
    "MAGIC",
    "PLASTIC",
    "SEAWORTHY"
   ],
   "action": "RBOAT-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "100"
    ],
    "SIZE": [
     "20"
    ],
    "VTYPE": [
     "NONLANDBIT"
    ]
   },
   "contents": [
    "BOAT-LABEL"
   ],
   "source": "<OBJECT INFLATED-BOAT\n\t(SYNONYM BOAT RAFT)\n\t(ADJECTIVE INFLAT MAGIC PLASTIC SEAWORTHY)\n\t(DESC \"magic boat\")\n\t(FLAGS TAKEBIT BURNBIT VEHBIT OPENBIT SEARCHBIT)\n\t(ACTION RBOAT-FUNCTION)\n\t(CAPACITY 100)\n\t(SIZE 20)\n\t(VTYPE NONLANDBIT)>",
   "referencedBy": [
    "I-MAINT-ROOM",
    "WHITE-CLIFFS-FUNCTION",
    "RIVER-FUNCTION",
    "RBOAT-FUNCTION",
    "IBOAT-FUNCTION",
    "GO"
   ]
  },
  "MAILBOX": {
   "name": "MAILBOX",
   "file": "1dungeon.zil",
   "line": 605,
   "endLine": 612,
   "desc": "small mailbox",
   "ldesc": null,
   "fdesc": null,
   "loc": "WEST-OF-HOUSE",
   "flags": [
    "CONTBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "MAILBOX",
    "BOX"
   ],
   "adjectives": [
    "SMALL"
   ],
   "action": "MAILBOX-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "10"
    ]
   },
   "contents": [
    "ADVERTISEMENT"
   ],
   "source": "<OBJECT MAILBOX\n\t(IN WEST-OF-HOUSE)\n\t(SYNONYM MAILBOX BOX)\n\t(ADJECTIVE SMALL)\n\t(DESC \"small mailbox\")\n\t(FLAGS CONTBIT TRYTAKEBIT)\n\t(CAPACITY 10)\n\t(ACTION MAILBOX-F)>",
   "referencedBy": [
    "MAILBOX-F",
    "GO"
   ]
  },
  "MATCH": {
   "name": "MATCH",
   "file": "1dungeon.zil",
   "line": 614,
   "endLine": 639,
   "desc": "matchbook",
   "ldesc": "There is a matchbook whose cover says \"Visit Beautiful FCD#3\" here.",
   "fdesc": null,
   "loc": "DAM-LOBBY",
   "flags": [
    "READBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "MATCH",
    "MATCHES",
    "MATCHBOOK"
   ],
   "adjectives": [
    "MATCH"
   ],
   "action": "MATCH-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "2"
    ],
    "TEXT": [
     "|\n(Close cover before striking)|\n|\nYOU too can make BIG MONEY in the exciting field of PAPER SHUFFLING!|\n|\nMr. Anderson of Muddle, Mass. says: \"Before I took this course I\nwas a lowly bit twiddler. Now with what I learned at GUE Tech\nI feel really important and can obfuscate and confuse with the best.\"|\n|\nDr. Blank had this to say: \"Ten short days ago all I could look\nforward to was a dead-end job as a doctor. Now I have a promising\nfuture and make really big Zorkmids.\"|\n|\nGUE Tech can't promise these fantastic results to everyone. But when\nyou earn your degree from GUE Tech, your future will be brighter."
    ]
   },
   "contents": [],
   "source": "<OBJECT MATCH\n\t(IN DAM-LOBBY)\n\t(SYNONYM MATCH MATCHES MATCHBOOK)\n\t(ADJECTIVE MATCH)\n\t(DESC \"matchbook\")\n\t(FLAGS READBIT TAKEBIT)\n\t(ACTION MATCH-FUNCTION)\n\t(LDESC\n\"There is a matchbook whose cover says \\\"Visit Beautiful FCD#3\\\" here.\")\n\t(SIZE 2)\n\t(TEXT\n\"|\n(Close cover before striking)|\n|\nYOU too can make BIG MONEY in the exciting field of PAPER SHUFFLING!|\n|\nMr. Anderson of Muddle, Mass. says: \\\"Before I took this course I\nwas a lowly bit twiddler. Now with what I learned at GUE Tech\nI feel really important and can obfuscate and confuse with the best.\\\"|\n|\nDr. Blank had this to say: \\\"Ten short days ago all I could look\nforward to was a dead-end job as a doctor. Now I have a promising\nfuture and make really big Zorkmids.\\\"|\n|\nGUE Tech can't promise these fantastic results to everyone. But when\nyou earn your degree from GUE Tech, your future will be brighter.\" )>",
   "referencedBy": [
    "MATCH-FUNCTION",
    "I-MATCH",
    "CANDLES-FCN",
    "BOOM-ROOM",
    "KILL-INTERRUPTS"
   ]
  },
  "MIRROR-2": {
   "name": "MIRROR-2",
   "file": "1dungeon.zil",
   "line": 641,
   "endLine": 646,
   "desc": "mirror",
   "ldesc": null,
   "fdesc": null,
   "loc": "MIRROR-ROOM-2",
   "flags": [
    "TRYTAKEBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "REFLECTION",
    "MIRROR",
    "ENORMOUS"
   ],
   "adjectives": [],
   "action": "MIRROR-MIRROR",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MIRROR-2\n\t(IN MIRROR-ROOM-2)\n\t(SYNONYM REFLECTION MIRROR ENORMOUS)\n\t(DESC \"mirror\")\n\t(FLAGS TRYTAKEBIT NDESCBIT)\n\t(ACTION MIRROR-MIRROR)>",
   "referencedBy": [
    "CRETIN-FCN"
   ]
  },
  "MIRROR-1": {
   "name": "MIRROR-1",
   "file": "1dungeon.zil",
   "line": 648,
   "endLine": 653,
   "desc": "mirror",
   "ldesc": null,
   "fdesc": null,
   "loc": "MIRROR-ROOM-1",
   "flags": [
    "TRYTAKEBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "REFLECTION",
    "MIRROR",
    "ENORMOUS"
   ],
   "adjectives": [],
   "action": "MIRROR-MIRROR",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MIRROR-1\n\t(IN MIRROR-ROOM-1)\n\t(SYNONYM REFLECTION MIRROR ENORMOUS)\n\t(DESC \"mirror\")\n\t(FLAGS TRYTAKEBIT NDESCBIT)\n\t(ACTION MIRROR-MIRROR)>",
   "referencedBy": [
    "CRETIN-FCN"
   ]
  },
  "PAINTING": {
   "name": "PAINTING",
   "file": "1dungeon.zil",
   "line": 655,
   "endLine": 668,
   "desc": "painting",
   "ldesc": "A painting by a neglected genius is here.",
   "fdesc": "Fortunately, there is still one chance for you to be a vandal, for on\nthe far wall is a painting of unparalleled beauty.",
   "loc": "GALLERY",
   "flags": [
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "PAINTING",
    "ART",
    "CANVAS",
    "TREASURE"
   ],
   "adjectives": [
    "BEAUTI"
   ],
   "action": "PAINTING-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "15"
    ],
    "VALUE": [
     "4"
    ],
    "TVALUE": [
     "6"
    ]
   },
   "contents": [],
   "source": "<OBJECT PAINTING\n\t(IN GALLERY)\n\t(SYNONYM PAINTING ART CANVAS TREASURE)\n\t(ADJECTIVE BEAUTI)\n\t(DESC \"painting\")\n\t(FLAGS TAKEBIT BURNBIT)\n\t(ACTION PAINTING-FCN)\n\t(FDESC\n\"Fortunately, there is still one chance for you to be a vandal, for on\nthe far wall is a painting of unparalleled beauty.\")\n\t(LDESC \"A painting by a neglected genius is here.\")\n\t(SIZE 15)\n\t(VALUE 4)\n\t(TVALUE 6)>",
   "referencedBy": []
  },
  "CANDLES": {
   "name": "CANDLES",
   "file": "1dungeon.zil",
   "line": 670,
   "endLine": 678,
   "desc": "pair of candles",
   "ldesc": null,
   "fdesc": "On the two ends of the altar are burning candles.",
   "loc": "SOUTH-TEMPLE",
   "flags": [
    "TAKEBIT",
    "FLAMEBIT",
    "ONBIT",
    "LIGHTBIT"
   ],
   "synonyms": [
    "CANDLES",
    "PAIR"
   ],
   "adjectives": [
    "BURNING"
   ],
   "action": "CANDLES-FCN",
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
   "source": "<OBJECT CANDLES\n\t(IN SOUTH-TEMPLE)\n\t(SYNONYM CANDLES PAIR)\n\t(ADJECTIVE BURNING)\n\t(DESC \"pair of candles\")\n\t(FLAGS TAKEBIT FLAMEBIT ONBIT LIGHTBIT)\n\t(ACTION CANDLES-FCN)\n\t(FDESC \"On the two ends of the altar are burning candles.\")\n\t(SIZE 10)>",
   "referencedBy": [
    "LLD-ROOM",
    "I-CANDLES",
    "CANDLES-FCN",
    "CAVE2-ROOM",
    "BOOM-ROOM"
   ]
  },
  "GUNK": {
   "name": "GUNK",
   "file": "1dungeon.zil",
   "line": 680,
   "endLine": 686,
   "desc": "small piece of vitreous slag",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "GUNK",
    "PIECE",
    "SLAG"
   ],
   "adjectives": [
    "SMALL",
    "VITREOUS"
   ],
   "action": "GUNK-FUNCTION",
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
   "source": "<OBJECT GUNK\n\t(SYNONYM GUNK PIECE SLAG)\n\t(ADJECTIVE SMALL VITREOUS)\n\t(DESC \"small piece of vitreous slag\")\n\t(FLAGS TAKEBIT TRYTAKEBIT)\n\t(ACTION GUNK-FUNCTION)\n\t(SIZE 10)>",
   "referencedBy": [
    "MSWITCH-FUNCTION",
    "GUNK-FUNCTION"
   ]
  },
  "BODIES": {
   "name": "BODIES",
   "file": "1dungeon.zil",
   "line": 688,
   "endLine": 694,
   "desc": "pile of bodies",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "BODIES",
    "BODY",
    "REMAINS",
    "PILE"
   ],
   "adjectives": [
    "MANGLED"
   ],
   "action": "BODY-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BODIES\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM BODIES BODY REMAINS PILE)\n\t(ADJECTIVE MANGLED)\n\t(DESC \"pile of bodies\")\n\t(FLAGS NDESCBIT TRYTAKEBIT)\n\t(ACTION BODY-FUNCTION)>",
   "referencedBy": []
  },
  "LEAVES": {
   "name": "LEAVES",
   "file": "1dungeon.zil",
   "line": 696,
   "endLine": 703,
   "desc": "pile of leaves",
   "ldesc": "On the ground is a pile of leaves.",
   "fdesc": null,
   "loc": "GRATING-CLEARING",
   "flags": [
    "TAKEBIT",
    "BURNBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "LEAVES",
    "LEAF",
    "PILE"
   ],
   "adjectives": [],
   "action": "LEAF-PILE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "25"
    ]
   },
   "contents": [],
   "source": "<OBJECT LEAVES\n\t(IN GRATING-CLEARING)\n\t(SYNONYM LEAVES LEAF PILE)\n\t(DESC \"pile of leaves\")\n\t(FLAGS TAKEBIT BURNBIT TRYTAKEBIT)\n\t(ACTION LEAF-PILE)\n\t(LDESC \"On the ground is a pile of leaves.\")\n\t(SIZE 25)>",
   "referencedBy": [
    "GRATE-FUNCTION"
   ]
  },
  "PUNCTURED-BOAT": {
   "name": "PUNCTURED-BOAT",
   "file": "1dungeon.zil",
   "line": 705,
   "endLine": 711,
   "desc": "punctured boat",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "BOAT",
    "PILE",
    "PLASTIC"
   ],
   "adjectives": [
    "PLASTIC",
    "PUNCTURE",
    "LARGE"
   ],
   "action": "DBOAT-FUNCTION",
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
   "source": "<OBJECT PUNCTURED-BOAT\n\t(SYNONYM BOAT PILE PLASTIC)\n\t(ADJECTIVE PLASTIC PUNCTURE LARGE)\n\t(DESC \"punctured boat\")\n\t(FLAGS TAKEBIT BURNBIT)\n\t(ACTION DBOAT-FUNCTION)\n\t(SIZE 20)>",
   "referencedBy": [
    "FIX-BOAT",
    "RBOAT-FUNCTION"
   ]
  },
  "INFLATABLE-BOAT": {
   "name": "INFLATABLE-BOAT",
   "file": "1dungeon.zil",
   "line": 713,
   "endLine": 723,
   "desc": "pile of plastic",
   "ldesc": "There is a folded pile of plastic here which has a small valve\nattached.",
   "fdesc": null,
   "loc": "DAM-BASE",
   "flags": [
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "BOAT",
    "PILE",
    "PLASTIC",
    "VALVE"
   ],
   "adjectives": [
    "PLASTIC",
    "INFLAT"
   ],
   "action": "IBOAT-FUNCTION",
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
   "source": "<OBJECT INFLATABLE-BOAT\n\t(IN DAM-BASE)\n\t(SYNONYM BOAT PILE PLASTIC VALVE)\n\t(ADJECTIVE PLASTIC INFLAT)\n\t(DESC \"pile of plastic\")\n\t(FLAGS TAKEBIT BURNBIT)\n\t(ACTION IBOAT-FUNCTION)\n\t(LDESC\n\"There is a folded pile of plastic here which has a small valve\nattached.\")\n\t(SIZE 20)>",
   "referencedBy": [
    "FIX-BOAT",
    "RBOAT-FUNCTION",
    "IBOAT-FUNCTION"
   ]
  },
  "BAR": {
   "name": "BAR",
   "file": "1dungeon.zil",
   "line": 725,
   "endLine": 734,
   "desc": "platinum bar",
   "ldesc": "On the ground is a large platinum bar.",
   "fdesc": null,
   "loc": "LOUD-ROOM",
   "flags": [
    "TAKEBIT",
    "SACREDBIT"
   ],
   "synonyms": [
    "BAR",
    "PLATINUM",
    "TREASURE"
   ],
   "adjectives": [
    "PLATINUM",
    "LARGE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "20"
    ],
    "VALUE": [
     "10"
    ],
    "TVALUE": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT BAR\n\t(IN LOUD-ROOM)\n\t(SYNONYM BAR PLATINUM TREASURE)\n\t(ADJECTIVE PLATINUM LARGE)\n\t(DESC \"platinum bar\")\n\t(FLAGS TAKEBIT SACREDBIT)\n\t(LDESC \"On the ground is a large platinum bar.\")\n\t(SIZE 20)\n\t(VALUE 10)\n\t(TVALUE 5)>",
   "referencedBy": [
    "LOUD-ROOM-FCN"
   ]
  },
  "POT-OF-GOLD": {
   "name": "POT-OF-GOLD",
   "file": "1dungeon.zil",
   "line": 736,
   "endLine": 745,
   "desc": "pot of gold",
   "ldesc": null,
   "fdesc": "At the end of the rainbow is a pot of gold.",
   "loc": "END-OF-RAINBOW",
   "flags": [
    "TAKEBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "POT",
    "GOLD",
    "TREASURE"
   ],
   "adjectives": [
    "GOLD"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "15"
    ],
    "VALUE": [
     "10"
    ],
    "TVALUE": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT POT-OF-GOLD\n\t(IN END-OF-RAINBOW)\n\t(SYNONYM POT GOLD TREASURE)\n\t(ADJECTIVE GOLD)\n\t(DESC \"pot of gold\")\n\t(FLAGS TAKEBIT INVISIBLE)\n\t(FDESC \"At the end of the rainbow is a pot of gold.\")\n\t(SIZE 15)\n\t(VALUE 10)\n\t(TVALUE 10)>",
   "referencedBy": [
    "SCEPTRE-FUNCTION"
   ]
  },
  "PRAYER": {
   "name": "PRAYER",
   "file": "1dungeon.zil",
   "line": 747,
   "endLine": 758,
   "desc": "prayer",
   "ldesc": null,
   "fdesc": null,
   "loc": "NORTH-TEMPLE",
   "flags": [
    "READBIT",
    "SACREDBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "PRAYER",
    "INSCRIPTION"
   ],
   "adjectives": [
    "ANCIENT",
    "OLD"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The prayer is inscribed in an ancient script, rarely used today. It seems\nto be a philippic against small insects, absent-mindedness, and the picking\nup and dropping of small objects. The final verse consigns trespassers to\nthe land of the dead. All evidence indicates that the beliefs of the ancient\nZorkers were obscure."
    ]
   },
   "contents": [],
   "source": "<OBJECT PRAYER\n\t(IN NORTH-TEMPLE)\n\t(SYNONYM PRAYER INSCRIPTION)\n\t(ADJECTIVE ANCIENT OLD)\n\t(DESC \"prayer\")\n\t(FLAGS READBIT SACREDBIT NDESCBIT)\n\t(TEXT\n\"The prayer is inscribed in an ancient script, rarely used today. It seems\nto be a philippic against small insects, absent-mindedness, and the picking\nup and dropping of small objects. The final verse consigns trespassers to\nthe land of the dead. All evidence indicates that the beliefs of the ancient\nZorkers were obscure.\" )>",
   "referencedBy": []
  },
  "RAILING": {
   "name": "RAILING",
   "file": "1dungeon.zil",
   "line": 760,
   "endLine": 765,
   "desc": "wooden railing",
   "ldesc": null,
   "fdesc": null,
   "loc": "DOME-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "RAILING",
    "RAIL"
   ],
   "adjectives": [
    "WOODEN"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RAILING\n\t(IN DOME-ROOM)\n\t(SYNONYM RAILING RAIL)\n\t(ADJECTIVE WOODEN)\n\t(DESC \"wooden railing\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "ROPE-FUNCTION",
    "UNTIE-FROM"
   ]
  },
  "RAINBOW": {
   "name": "RAINBOW",
   "file": "1dungeon.zil",
   "line": 767,
   "endLine": 772,
   "desc": "rainbow",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "CLIMBBIT"
   ],
   "synonyms": [
    "RAINBOW"
   ],
   "adjectives": [],
   "action": "RAINBOW-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RAINBOW\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM RAINBOW)\n\t(DESC \"rainbow\")\n\t(FLAGS NDESCBIT CLIMBBIT)\n\t(ACTION RAINBOW-FCN)>",
   "referencedBy": []
  },
  "RIVER": {
   "name": "RIVER",
   "file": "1dungeon.zil",
   "line": 774,
   "endLine": 780,
   "desc": "river",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "RIVER"
   ],
   "adjectives": [
    "FRIGID"
   ],
   "action": "RIVER-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RIVER\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"river\")\n\t(SYNONYM RIVER)\n\t(ADJECTIVE FRIGID)\n\t(ACTION RIVER-FUNCTION)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "WATER-F",
    "RIVER-FUNCTION"
   ]
  },
  "BUOY": {
   "name": "BUOY",
   "file": "1dungeon.zil",
   "line": 782,
   "endLine": 791,
   "desc": "red buoy",
   "ldesc": null,
   "fdesc": "There is a red buoy here (probably a warning).",
   "loc": "RIVER-4",
   "flags": [
    "TAKEBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "BUOY"
   ],
   "adjectives": [
    "RED"
   ],
   "action": "TREASURE-INSIDE",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "20"
    ],
    "SIZE": [
     "10"
    ]
   },
   "contents": [
    "EMERALD"
   ],
   "source": "<OBJECT BUOY\n\t(IN RIVER-4)\n\t(SYNONYM BUOY)\n\t(ADJECTIVE RED)\n\t(DESC \"red buoy\")\n\t(FLAGS TAKEBIT CONTBIT)\n\t(FDESC \"There is a red buoy here (probably a warning).\")\n\t(CAPACITY 20)\n\t(SIZE 10)\n\t(ACTION TREASURE-INSIDE)>",
   "referencedBy": [
    "RIVR4-ROOM"
   ]
  },
  "ROPE": {
   "name": "ROPE",
   "file": "1dungeon.zil",
   "line": 797,
   "endLine": 805,
   "desc": "rope",
   "ldesc": null,
   "fdesc": "A large coil of rope is lying in the corner.",
   "loc": "ATTIC",
   "flags": [
    "TAKEBIT",
    "SACREDBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "ROPE",
    "HEMP",
    "COIL"
   ],
   "adjectives": [
    "LARGE"
   ],
   "action": "ROPE-FUNCTION",
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
   "source": "<OBJECT ROPE\n\t(IN ATTIC)\n\t(SYNONYM ROPE HEMP COIL)\n\t(ADJECTIVE LARGE)\n\t(DESC \"rope\")\n\t(FLAGS TAKEBIT SACREDBIT TRYTAKEBIT)\n\t(ACTION ROPE-FUNCTION)\n\t(FDESC \"A large coil of rope is lying in the corner.\")\n\t(SIZE 10)>",
   "referencedBy": [
    "ROPE-FUNCTION",
    "UNTIE-FROM",
    "STEAL-JUNK",
    "V-CLIMB-FOO"
   ]
  },
  "RUSTY-KNIFE": {
   "name": "RUSTY-KNIFE",
   "file": "1dungeon.zil",
   "line": 807,
   "endLine": 815,
   "desc": "rusty knife",
   "ldesc": null,
   "fdesc": "Beside the skeleton is a rusty knife.",
   "loc": "MAZE-5",
   "flags": [
    "TAKEBIT",
    "TRYTAKEBIT",
    "WEAPONBIT",
    "TOOLBIT"
   ],
   "synonyms": [
    "KNIVES",
    "KNIFE"
   ],
   "adjectives": [
    "RUSTY"
   ],
   "action": "RUSTY-KNIFE-FCN",
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
   "source": "<OBJECT RUSTY-KNIFE\n\t(IN MAZE-5)\n\t(SYNONYM KNIVES KNIFE)\n\t(ADJECTIVE RUSTY)\n\t(DESC \"rusty knife\")\n\t(FLAGS TAKEBIT TRYTAKEBIT WEAPONBIT TOOLBIT)\n\t(ACTION RUSTY-KNIFE-FCN)\n\t(FDESC \"Beside the skeleton is a rusty knife.\")\n\t(SIZE 20)>",
   "referencedBy": [
    "RUSTY-KNIFE-FCN",
    "RBOAT-FUNCTION",
    "FIND-WEAPON"
   ]
  },
  "SAND": {
   "name": "SAND",
   "file": "1dungeon.zil",
   "line": 817,
   "endLine": 822,
   "desc": "sand",
   "ldesc": null,
   "fdesc": null,
   "loc": "SANDY-CAVE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "SAND"
   ],
   "adjectives": [],
   "action": "SAND-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SAND\n\t(IN SANDY-CAVE)\n\t(SYNONYM SAND)\n\t(DESC \"sand\")\n\t(FLAGS NDESCBIT)\n\t(ACTION SAND-FUNCTION)>",
   "referencedBy": []
  },
  "BRACELET": {
   "name": "BRACELET",
   "file": "1dungeon.zil",
   "line": 824,
   "endLine": 832,
   "desc": "sapphire-encrusted bracelet",
   "ldesc": null,
   "fdesc": null,
   "loc": "GAS-ROOM",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "BRACELET",
    "JEWEL",
    "SAPPHIRE",
    "TREASURE"
   ],
   "adjectives": [
    "SAPPHIRE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "10"
    ],
    "VALUE": [
     "5"
    ],
    "TVALUE": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT BRACELET\n\t(IN GAS-ROOM)\n\t(SYNONYM BRACELET JEWEL SAPPHIRE TREASURE)\n\t(ADJECTIVE SAPPHIRE)\n\t(DESC \"sapphire-encrusted bracelet\")\n\t(FLAGS TAKEBIT)\n\t(SIZE 10)\n\t(VALUE 5)\n\t(TVALUE 5)>",
   "referencedBy": []
  },
  "SCREWDRIVER": {
   "name": "SCREWDRIVER",
   "file": "1dungeon.zil",
   "line": 834,
   "endLine": 839,
   "desc": "screwdriver",
   "ldesc": null,
   "fdesc": null,
   "loc": "MAINTENANCE-ROOM",
   "flags": [
    "TAKEBIT",
    "TOOLBIT"
   ],
   "synonyms": [
    "SCREWDRIVER",
    "TOOL",
    "TOOLS",
    "DRIVER"
   ],
   "adjectives": [
    "SCREW"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SCREWDRIVER\n\t(IN MAINTENANCE-ROOM)\n\t(SYNONYM SCREWDRIVER TOOL TOOLS DRIVER)\n\t(ADJECTIVE SCREW)\n\t(DESC \"screwdriver\")\n\t(FLAGS TAKEBIT TOOLBIT)>",
   "referencedBy": [
    "MSWITCH-FUNCTION"
   ]
  },
  "KEYS": {
   "name": "KEYS",
   "file": "1dungeon.zil",
   "line": 841,
   "endLine": 847,
   "desc": "skeleton key",
   "ldesc": null,
   "fdesc": null,
   "loc": "MAZE-5",
   "flags": [
    "TAKEBIT",
    "TOOLBIT"
   ],
   "synonyms": [
    "KEY"
   ],
   "adjectives": [
    "SKELETON"
   ],
   "action": null,
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
   "source": "<OBJECT KEYS\n\t(IN MAZE-5)\n\t(SYNONYM KEY)\n\t(ADJECTIVE SKELETON)\n\t(DESC \"skeleton key\")\n\t(FLAGS TAKEBIT TOOLBIT)\n\t(SIZE 10)>",
   "referencedBy": [
    "GRATE-FUNCTION"
   ]
  },
  "SHOVEL": {
   "name": "SHOVEL",
   "file": "1dungeon.zil",
   "line": 849,
   "endLine": 854,
   "desc": "shovel",
   "ldesc": null,
   "fdesc": null,
   "loc": "SANDY-BEACH",
   "flags": [
    "TAKEBIT",
    "TOOLBIT"
   ],
   "synonyms": [
    "SHOVEL",
    "TOOL",
    "TOOLS"
   ],
   "adjectives": [],
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
   "source": "<OBJECT SHOVEL\n\t(IN SANDY-BEACH)\n\t(SYNONYM SHOVEL TOOL TOOLS)\n\t(DESC \"shovel\")\n\t(FLAGS TAKEBIT TOOLBIT)\n\t(SIZE 15)>",
   "referencedBy": [
    "SAND-FUNCTION",
    "V-DIG"
   ]
  },
  "COAL": {
   "name": "COAL",
   "file": "1dungeon.zil",
   "line": 856,
   "endLine": 862,
   "desc": "small pile of coal",
   "ldesc": null,
   "fdesc": null,
   "loc": "DEAD-END-5",
   "flags": [
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "COAL",
    "PILE",
    "HEAP"
   ],
   "adjectives": [
    "SMALL"
   ],
   "action": null,
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
   "source": "<OBJECT COAL\n\t(IN DEAD-END-5)\n\t(SYNONYM COAL PILE HEAP)\n\t(ADJECTIVE SMALL)\n\t(DESC \"small pile of coal\")\n\t(FLAGS TAKEBIT BURNBIT)\n\t(SIZE 20)>",
   "referencedBy": [
    "MSWITCH-FUNCTION"
   ]
  },
  "LADDER": {
   "name": "LADDER",
   "file": "1dungeon.zil",
   "line": 864,
   "endLine": 869,
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
  "SCARAB": {
   "name": "SCARAB",
   "file": "1dungeon.zil",
   "line": 871,
   "endLine": 879,
   "desc": "beautiful jeweled scarab",
   "ldesc": null,
   "fdesc": null,
   "loc": "SANDY-CAVE",
   "flags": [
    "TAKEBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "SCARAB",
    "BUG",
    "BEETLE",
    "TREASURE"
   ],
   "adjectives": [
    "BEAUTI",
    "CARVED",
    "JEWELED"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "8"
    ],
    "VALUE": [
     "5"
    ],
    "TVALUE": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT SCARAB\n\t(IN SANDY-CAVE)\n\t(SYNONYM SCARAB BUG BEETLE TREASURE)\n\t(ADJECTIVE BEAUTI CARVED JEWELED)\n\t(DESC \"beautiful jeweled scarab\")\n\t(FLAGS TAKEBIT INVISIBLE)\n\t(SIZE 8)\n\t(VALUE 5)\n\t(TVALUE 5)>",
   "referencedBy": [
    "SAND-FUNCTION"
   ]
  },
  "LARGE-BAG": {
   "name": "LARGE-BAG",
   "file": "1dungeon.zil",
   "line": 881,
   "endLine": 887,
   "desc": "large bag",
   "ldesc": null,
   "fdesc": null,
   "loc": "THIEF",
   "flags": [
    "TRYTAKEBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "BAG"
   ],
   "adjectives": [
    "LARGE",
    "THIEFS"
   ],
   "action": "LARGE-BAG-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LARGE-BAG\n\t(IN THIEF)\n\t(SYNONYM BAG)\n\t(ADJECTIVE LARGE THIEFS)\n\t(DESC \"large bag\")\n\t(ACTION LARGE-BAG-F)\n\t(FLAGS TRYTAKEBIT NDESCBIT)>  ",
   "referencedBy": [
    "DEPOSIT-BOOTY",
    "ROBBER-FUNCTION",
    "LARGE-BAG-F",
    "DROP-JUNK"
   ]
  },
  "STILETTO": {
   "name": "STILETTO",
   "file": "1dungeon.zil",
   "line": 889,
   "endLine": 896,
   "desc": "stiletto",
   "ldesc": null,
   "fdesc": null,
   "loc": "THIEF",
   "flags": [
    "WEAPONBIT",
    "TRYTAKEBIT",
    "TAKEBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "STILETTO"
   ],
   "adjectives": [
    "VICIOUS"
   ],
   "action": "STILETTO-FUNCTION",
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
   "source": "<OBJECT STILETTO\n\t(IN THIEF)\n\t(SYNONYM STILETTO)\n\t(ADJECTIVE VICIOUS)\n\t(DESC \"stiletto\")\n\t(ACTION STILETTO-FUNCTION)\n\t(FLAGS WEAPONBIT TRYTAKEBIT TAKEBIT NDESCBIT)\n\t(SIZE 10)>",
   "referencedBy": [
    "STILETTO-FUNCTION",
    "THIEF-VS-ADVENTURER",
    "DEPOSIT-BOOTY",
    "ROBBER-FUNCTION",
    "RBOAT-FUNCTION",
    "FIND-WEAPON",
    "DROP-JUNK",
    "RECOVER-STILETTO",
    "STEAL-JUNK"
   ]
  },
  "MACHINE-SWITCH": {
   "name": "MACHINE-SWITCH",
   "file": "1dungeon.zil",
   "line": 898,
   "endLine": 903,
   "desc": "switch",
   "ldesc": null,
   "fdesc": null,
   "loc": "MACHINE-ROOM",
   "flags": [
    "NDESCBIT",
    "TURNBIT"
   ],
   "synonyms": [
    "SWITCH"
   ],
   "adjectives": [],
   "action": "MSWITCH-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MACHINE-SWITCH\n\t(IN MACHINE-ROOM)\n\t(SYNONYM SWITCH)\n\t(DESC \"switch\")\n\t(FLAGS NDESCBIT TURNBIT)\n\t(ACTION MSWITCH-FUNCTION)>",
   "referencedBy": [
    "MACHINE-F"
   ]
  },
  "WOODEN-DOOR": {
   "name": "WOODEN-DOOR",
   "file": "1dungeon.zil",
   "line": 905,
   "endLine": 913,
   "desc": "wooden door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LIVING-ROOM",
   "flags": [
    "READBIT",
    "DOORBIT",
    "NDESCBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "DOOR",
    "LETTERING",
    "WRITING"
   ],
   "adjectives": [
    "WOODEN",
    "GOTHIC",
    "STRANGE",
    "WEST"
   ],
   "action": "FRONT-DOOR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The engravings translate to \"This space intentionally left blank.\""
    ]
   },
   "contents": [],
   "source": "<OBJECT WOODEN-DOOR\n\t(IN LIVING-ROOM)\n\t(SYNONYM DOOR LETTERING WRITING)\n\t(ADJECTIVE WOODEN GOTHIC STRANGE WEST)\n\t(DESC \"wooden door\")\n\t(FLAGS READBIT DOORBIT NDESCBIT TRANSBIT)\n\t(ACTION FRONT-DOOR-FCN)\n\t(TEXT\n\"The engravings translate to \\\"This space intentionally left blank.\\\"\")>",
   "referencedBy": []
  },
  "SWORD": {
   "name": "SWORD",
   "file": "1dungeon.zil",
   "line": 915,
   "endLine": 925,
   "desc": "sword",
   "ldesc": null,
   "fdesc": "Above the trophy case hangs an elvish sword of great antiquity.",
   "loc": "LIVING-ROOM",
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
     "30"
    ],
    "TVALUE": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT SWORD\n\t(IN LIVING-ROOM)\n\t(SYNONYM SWORD ORCRIST GLAMDRING BLADE)\n\t(ADJECTIVE ELVISH OLD ANTIQUE)\n\t(DESC \"sword\")\n\t(FLAGS TAKEBIT WEAPONBIT TRYTAKEBIT)\n\t(ACTION SWORD-FCN)\n\t(FDESC\n\"Above the trophy case hangs an elvish sword of great antiquity.\")\n\t(SIZE 30)\n\t(TVALUE 0)>",
   "referencedBy": [
    "TROLL-FCN",
    "RUSTY-KNIFE-FCN",
    "SWORD-FCN",
    "RBOAT-FUNCTION",
    "FIND-WEAPON",
    "I-SWORD",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "MAP": {
   "name": "MAP",
   "file": "1dungeon.zil",
   "line": 927,
   "endLine": 939,
   "desc": "ancient map",
   "ldesc": null,
   "fdesc": "In the trophy case is an ancient parchment which appears to be a map.",
   "loc": "TROPHY-CASE",
   "flags": [
    "INVISIBLE",
    "READBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "PARCHMENT",
    "MAP"
   ],
   "adjectives": [
    "ANTIQUE",
    "OLD",
    "ANCIENT"
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
     "The map shows a forest with three clearings. The largest clearing contains\na house. Three paths leave the large clearing. One of these paths, leading\nsouthwest, is marked \"To Stone Barrow\"."
    ]
   },
   "contents": [],
   "source": "<OBJECT MAP\n\t(IN TROPHY-CASE)\n\t(SYNONYM PARCHMENT MAP)\n\t(ADJECTIVE ANTIQUE OLD ANCIENT)\n\t(DESC \"ancient map\")\n\t(FLAGS INVISIBLE READBIT TAKEBIT)\n\t(FDESC\n\"In the trophy case is an ancient parchment which appears to be a map.\")\n\t(SIZE 2)\n\t(TEXT\n\"The map shows a forest with three clearings. The largest clearing contains\na house. Three paths leave the large clearing. One of these paths, leading\nsouthwest, is marked \\\"To Stone Barrow\\\".\")>",
   "referencedBy": [
    "SCORE-UPD"
   ]
  },
  "BOAT-LABEL": {
   "name": "BOAT-LABEL",
   "file": "1dungeon.zil",
   "line": 941,
   "endLine": 966,
   "desc": "tan label",
   "ldesc": null,
   "fdesc": null,
   "loc": "INFLATED-BOAT",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "LABEL",
    "FINEPRINT",
    "PRINT"
   ],
   "adjectives": [
    "TAN",
    "FINE"
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
     "  !!!!FROBOZZ MAGIC BOAT COMPANY!!!!|\n|\nHello, Sailor!|\n|\nInstructions for use:|\n|\n   To get into a body of water, say \"Launch\".|\n   To get to shore, say \"Land\" or the direction in which you want\nto maneuver the boat.|\n|\nWarranty:|\n|\n  This boat is guaranteed against all defects for a period of 76\nmilliseconds from date of purchase or until first used, whichever comes first.|\n|\nWarning:|\n   This boat is made of thin plastic.|\n   Good Luck!"
    ]
   },
   "contents": [],
   "source": "<OBJECT BOAT-LABEL\n\t(IN INFLATED-BOAT)\n\t(SYNONYM LABEL FINEPRINT PRINT)\n\t(ADJECTIVE TAN FINE)\n\t(DESC \"tan label\")\n\t(FLAGS READBIT TAKEBIT BURNBIT)\n\t(SIZE 2)\n\t(TEXT\n\"  !!!!FROBOZZ MAGIC BOAT COMPANY!!!!|\n|\nHello, Sailor!|\n|\nInstructions for use:|\n|\n   To get into a body of water, say \\\"Launch\\\".|\n   To get to shore, say \\\"Land\\\" or the direction in which you want\nto maneuver the boat.|\n|\nWarranty:|\n|\n  This boat is guaranteed against all defects for a period of 76\nmilliseconds from date of purchase or until first used, whichever comes first.|\n|\nWarning:|\n   This boat is made of thin plastic.|\n   Good Luck!\" )>",
   "referencedBy": [
    "IBOAT-FUNCTION"
   ]
  },
  "THIEF": {
   "name": "THIEF",
   "file": "1dungeon.zil",
   "line": 968,
   "endLine": 978,
   "desc": "thief",
   "ldesc": "There is a suspicious-looking individual, holding a large bag, leaning\nagainst one wall. He is armed with a deadly stiletto.",
   "fdesc": null,
   "loc": "ROUND-ROOM",
   "flags": [
    "ACTORBIT",
    "INVISIBLE",
    "CONTBIT",
    "OPENBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "THIEF",
    "ROBBER",
    "MAN",
    "PERSON"
   ],
   "adjectives": [
    "SHADY",
    "SUSPICIOUS",
    "SEEDY"
   ],
   "action": "ROBBER-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "STRENGTH": [
     "5"
    ]
   },
   "contents": [
    "LARGE-BAG",
    "STILETTO"
   ],
   "source": "<OBJECT THIEF\n\t(IN ROUND-ROOM)\n\t(SYNONYM THIEF ROBBER MAN PERSON)\n\t(ADJECTIVE SHADY SUSPICIOUS SEEDY)\n\t(DESC \"thief\")\n\t(FLAGS ACTORBIT INVISIBLE CONTBIT OPENBIT TRYTAKEBIT)\n\t(ACTION ROBBER-FUNCTION)\n\t(LDESC\n\"There is a suspicious-looking individual, holding a large bag, leaning\nagainst one wall. He is armed with a deadly stiletto.\")\n\t(STRENGTH 5)>",
   "referencedBy": [
    "STILETTO-FUNCTION",
    "THIEF-VS-ADVENTURER",
    "HACK-TREASURES",
    "DEPOSIT-BOOTY",
    "ROB-MAZE",
    "ROBBER-FUNCTION",
    "LARGE-BAG-F",
    "CHALICE-FCN",
    "TREASURE-ROOM-FCN",
    "THIEF-IN-TREASURE",
    "VILLAIN-STRENGTH",
    "I-FIGHT",
    "I-THIEF",
    "DROP-JUNK",
    "RECOVER-STILETTO",
    "STEAL-JUNK",
    "ROB"
   ]
  },
  "PEDESTAL": {
   "name": "PEDESTAL",
   "file": "1dungeon.zil",
   "line": 980,
   "endLine": 987,
   "desc": "pedestal",
   "ldesc": null,
   "fdesc": null,
   "loc": "TORCH-ROOM",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT",
    "SURFACEBIT"
   ],
   "synonyms": [
    "PEDESTAL"
   ],
   "adjectives": [
    "WHITE",
    "MARBLE"
   ],
   "action": "DUMB-CONTAINER",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "30"
    ]
   },
   "contents": [
    "TORCH"
   ],
   "source": "<OBJECT PEDESTAL\n\t(IN TORCH-ROOM)\n\t(SYNONYM PEDESTAL)\n\t(ADJECTIVE WHITE MARBLE)\n\t(DESC \"pedestal\")\n\t(FLAGS NDESCBIT CONTBIT OPENBIT SURFACEBIT)\n\t(ACTION DUMB-CONTAINER)\n\t(CAPACITY 30)>",
   "referencedBy": []
  },
  "TORCH": {
   "name": "TORCH",
   "file": "1dungeon.zil",
   "line": 989,
   "endLine": 999,
   "desc": "torch",
   "ldesc": null,
   "fdesc": "Sitting on the pedestal is a flaming torch, made of ivory.",
   "loc": "PEDESTAL",
   "flags": [
    "TAKEBIT",
    "FLAMEBIT",
    "ONBIT",
    "LIGHTBIT"
   ],
   "synonyms": [
    "TORCH",
    "IVORY",
    "TREASURE"
   ],
   "adjectives": [
    "FLAMING",
    "IVORY"
   ],
   "action": "TORCH-OBJECT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "20"
    ],
    "VALUE": [
     "14"
    ],
    "TVALUE": [
     "6"
    ]
   },
   "contents": [],
   "source": "<OBJECT TORCH\n\t(IN PEDESTAL)\n\t(SYNONYM TORCH IVORY TREASURE)\n\t(ADJECTIVE FLAMING IVORY)\n\t(DESC \"torch\")\n\t(FLAGS TAKEBIT FLAMEBIT ONBIT LIGHTBIT)\n\t(ACTION TORCH-OBJECT)\n\t(FDESC \"Sitting on the pedestal is a flaming torch, made of ivory.\")\n\t(SIZE 20)\n\t(VALUE 14)\n\t(TVALUE 6)>",
   "referencedBy": [
    "TORCH-OBJECT",
    "CANDLES-FCN",
    "BOOM-ROOM"
   ]
  },
  "GUIDE": {
   "name": "GUIDE",
   "file": "1dungeon.zil",
   "line": 1001,
   "endLine": 1034,
   "desc": "tour guidebook",
   "ldesc": null,
   "fdesc": "Some guidebooks entitled \"Flood Control Dam #3\" are on the reception\ndesk.",
   "loc": "DAM-LOBBY",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "GUIDE",
    "BOOK",
    "BOOKS",
    "GUIDEBOOKS"
   ],
   "adjectives": [
    "TOUR",
    "GUIDE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "\"\tFlood Control Dam #3|\n|\nFCD#3 was constructed in year 783 of the Great Underground Empire to\nharness the mighty Frigid River. This work was supported by a grant of\n37 million zorkmids from your omnipotent local tyrant Lord Dimwit\nFlathead the Excessive. This impressive structure is composed of\n370,000 cubic feet of concrete, is 256 feet tall at the center, and 193\nfeet wide at the top. The lake created behind the dam has a volume\nof 1.7 billion cubic feet, an area of 12 million square feet, and a\nshore line of 36 thousand feet.|\n|\nThe construction of FCD#3 took 112 days from ground breaking to\nthe dedication. It required a work force of 384 slaves, 34 slave\ndrivers, 12 engineers, 2 turtle doves, and a partridge in a pear\ntree. The work was managed by a command team composed of 2345\nbureaucrats, 2347 secretaries (at least two of whom could type),\n12,256 paper shufflers, 52,469 rubber stampers, 245,193 red tape\nprocessors, and nearly one million dead trees.|\n|\nWe will now point out some of the more interesting features\nof FCD#3 as we conduct you on a guided tour of the facilities:|\n|\n        1) You start your tour here in the Dam Lobby. You will notice\non your right that...."
    ]
   },
   "contents": [],
   "source": "<OBJECT GUIDE\n\t(IN DAM-LOBBY)\n\t(SYNONYM GUIDE BOOK BOOKS GUIDEBOOKS)\n\t(ADJECTIVE TOUR GUIDE)\n\t(DESC \"tour guidebook\")\n\t(FLAGS READBIT TAKEBIT BURNBIT)\n\t(FDESC\n\"Some guidebooks entitled \\\"Flood Control Dam #3\\\" are on the reception\ndesk.\")\n\t(TEXT\n\"\\\"\tFlood Control Dam #3|\n|\nFCD#3 was constructed in year 783 of the Great Underground Empire to\nharness the mighty Frigid River. This work was supported by a grant of\n37 million zorkmids from your omnipotent local tyrant Lord Dimwit\nFlathead the Excessive. This impressive structure is composed of\n370,000 cubic feet of concrete, is 256 feet tall at the center, and 193\nfeet wide at the top. The lake created behind the dam has a volume\nof 1.7 billion cubic feet, an area of 12 million square feet, and a\nshore line of 36 thousand feet.|\n|\nThe construction of FCD#3 took 112 days from ground breaking to\nthe dedication. It required a work force of 384 slaves, 34 slave\ndrivers, 12 engineers, 2 turtle doves, and a partridge in a pear\ntree. The work was managed by a command team composed of 2345\nbureaucrats, 2347 secretaries (at least two of whom could type),\n12,256 paper shufflers, 52,469 rubber stampers, 245,193 red tape\nprocessors, and nearly one million dead trees.|\n|\nWe will now point out some of the more interesting features\nof FCD#3 as we conduct you on a guided tour of the facilities:|\n|\n        1) You start your tour here in the Dam Lobby. You will notice\non your right that....\" )>",
   "referencedBy": []
  },
  "TROLL": {
   "name": "TROLL",
   "file": "1dungeon.zil",
   "line": 1036,
   "endLine": 1046,
   "desc": "troll",
   "ldesc": "A nasty-looking troll, brandishing a bloody axe, blocks all passages\nout of the room.",
   "fdesc": null,
   "loc": "TROLL-ROOM",
   "flags": [
    "ACTORBIT",
    "OPENBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "TROLL"
   ],
   "adjectives": [
    "NASTY"
   ],
   "action": "TROLL-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "STRENGTH": [
     "2"
    ]
   },
   "contents": [
    "AXE"
   ],
   "source": "<OBJECT TROLL\n\t(IN TROLL-ROOM)\n\t(SYNONYM TROLL)\n\t(ADJECTIVE NASTY)\n\t(DESC \"troll\")\n\t(FLAGS ACTORBIT OPENBIT TRYTAKEBIT)\n\t(ACTION TROLL-FCN)\n\t(LDESC\n\"A nasty-looking troll, brandishing a bloody axe, blocks all passages\nout of the room.\")\n\t(STRENGTH 2)>",
   "referencedBy": [
    "AXE-F",
    "TROLL-FCN",
    "DEAD-FUNCTION",
    "I-THIEF",
    "TROLL-ROOM-F"
   ]
  },
  "TRUNK": {
   "name": "TRUNK",
   "file": "1dungeon.zil",
   "line": 1048,
   "endLine": 1060,
   "desc": "trunk of jewels",
   "ldesc": "There is an old trunk here, bulging with assorted jewels.",
   "fdesc": "Lying half buried in the mud is an old trunk, bulging with jewels.",
   "loc": "RESERVOIR",
   "flags": [
    "TAKEBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "TRUNK",
    "CHEST",
    "JEWELS",
    "TREASURE"
   ],
   "adjectives": [
    "OLD"
   ],
   "action": "TRUNK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "35"
    ],
    "VALUE": [
     "15"
    ],
    "TVALUE": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT TRUNK\n\t(IN RESERVOIR)\n\t(SYNONYM TRUNK CHEST JEWELS TREASURE)\n\t(ADJECTIVE OLD)\n\t(DESC \"trunk of jewels\")\n\t(FLAGS TAKEBIT INVISIBLE)\n\t(FDESC\n\"Lying half buried in the mud is an old trunk, bulging with jewels.\")\n\t(LDESC \"There is an old trunk here, bulging with assorted jewels.\")\n\t(ACTION TRUNK-F)\n\t(SIZE 35)\n\t(VALUE 15)\n\t(TVALUE 5)>",
   "referencedBy": [
    "I-RFILL",
    "I-REMPTY",
    "TRUNK-F"
   ]
  },
  "TUBE": {
   "name": "TUBE",
   "file": "1dungeon.zil",
   "line": 1062,
   "endLine": 1074,
   "desc": "tube",
   "ldesc": "There is an object which looks like a tube of toothpaste here.",
   "fdesc": null,
   "loc": "MAINTENANCE-ROOM",
   "flags": [
    "TAKEBIT",
    "CONTBIT",
    "READBIT"
   ],
   "synonyms": [
    "TUBE",
    "TOOTH",
    "PASTE"
   ],
   "adjectives": [],
   "action": "TUBE-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "7"
    ],
    "SIZE": [
     "5"
    ],
    "TEXT": [
     "---> Frobozz Magic Gunk Company <---|\n\t  All-Purpose Gunk"
    ]
   },
   "contents": [
    "PUTTY"
   ],
   "source": "<OBJECT TUBE\n\t(IN MAINTENANCE-ROOM)\n\t(SYNONYM TUBE TOOTH PASTE)\n\t(DESC \"tube\")\n\t(FLAGS TAKEBIT CONTBIT READBIT)\n\t(ACTION TUBE-FUNCTION)\n\t(LDESC\n\t \"There is an object which looks like a tube of toothpaste here.\")\n\t(CAPACITY 7)\n\t(SIZE 5)\n\t(TEXT\n\"---> Frobozz Magic Gunk Company <---|\n\t  All-Purpose Gunk\")>",
   "referencedBy": [
    "TUBE-FUNCTION"
   ]
  },
  "PUTTY": {
   "name": "PUTTY",
   "file": "1dungeon.zil",
   "line": 1076,
   "endLine": 1083,
   "desc": "viscous material",
   "ldesc": null,
   "fdesc": null,
   "loc": "TUBE",
   "flags": [
    "TAKEBIT",
    "TOOLBIT"
   ],
   "synonyms": [
    "MATERIAL",
    "GUNK"
   ],
   "adjectives": [
    "VISCOUS"
   ],
   "action": "PUTTY-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "6"
    ]
   },
   "contents": [],
   "source": "<OBJECT PUTTY\n\t(IN TUBE)\n\t(SYNONYM MATERIAL GUNK)\n\t(ADJECTIVE VISCOUS)\n\t(DESC \"viscous material\")\n\t(FLAGS TAKEBIT TOOLBIT)\n\t(SIZE 6)\n\t(ACTION PUTTY-FCN)>",
   "referencedBy": [
    "TEETH-F",
    "LEAK-FUNCTION",
    "PUTTY-FCN",
    "TUBE-FUNCTION",
    "DBOAT-FUNCTION",
    "V-POUR-ON"
   ]
  },
  "ENGRAVINGS": {
   "name": "ENGRAVINGS",
   "file": "1dungeon.zil",
   "line": 1085,
   "endLine": 1098,
   "desc": "wall with engravings",
   "ldesc": "There are old engravings on the walls here.",
   "fdesc": null,
   "loc": "ENGRAVINGS-CAVE",
   "flags": [
    "READBIT",
    "SACREDBIT"
   ],
   "synonyms": [
    "WALL",
    "ENGRAVINGS",
    "INSCRIPTION"
   ],
   "adjectives": [
    "OLD",
    "ANCIENT"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The engravings were incised in the living rock of the cave wall by\nan unknown hand. They depict, in symbolic form, the beliefs of the\nancient Zorkers. Skillfully interwoven with the bas reliefs are excerpts\nillustrating the major religious tenets of that time. Unfortunately, a\nlater age seems to have considered them blasphemous and just as skillfully\nexcised them."
    ]
   },
   "contents": [],
   "source": "<OBJECT ENGRAVINGS\n\t(IN ENGRAVINGS-CAVE)\n\t(SYNONYM WALL ENGRAVINGS INSCRIPTION)\n\t(ADJECTIVE OLD ANCIENT)\n\t(DESC \"wall with engravings\")\n\t(FLAGS READBIT SACREDBIT)\n\t(LDESC \"There are old engravings on the walls here.\")\n\t(TEXT\n\"The engravings were incised in the living rock of the cave wall by\nan unknown hand. They depict, in symbolic form, the beliefs of the\nancient Zorkers. Skillfully interwoven with the bas reliefs are excerpts\nillustrating the major religious tenets of that time. Unfortunately, a\nlater age seems to have considered them blasphemous and just as skillfully\nexcised them.\")>",
   "referencedBy": []
  },
  "OWNERS-MANUAL": {
   "name": "OWNERS-MANUAL",
   "file": "1dungeon.zil",
   "line": 1100,
   "endLine": 1113,
   "desc": "ZORK owner's manual",
   "ldesc": null,
   "fdesc": "Loosely attached to a wall is a small piece of paper.",
   "loc": "STUDIO",
   "flags": [
    "READBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "MANUAL",
    "PIECE",
    "PAPER"
   ],
   "adjectives": [
    "ZORK",
    "OWNERS",
    "SMALL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "Congratulations!|\n|\nYou are the privileged owner of ZORK I: The Great Underground Empire,\na self-contained and self-maintaining universe. If used and maintained\nin accordance with normal operating practices for small universes, ZORK\nwill provide many months of trouble-free operation."
    ]
   },
   "contents": [],
   "source": "<OBJECT OWNERS-MANUAL\n\t(IN STUDIO)\n\t(SYNONYM MANUAL PIECE PAPER)\n\t(ADJECTIVE ZORK OWNERS SMALL)\n\t(DESC \"ZORK owner's manual\")\n\t(FLAGS READBIT TAKEBIT)\n\t(FDESC \"Loosely attached to a wall is a small piece of paper.\")\n\t(TEXT\n\"Congratulations!|\n|\nYou are the privileged owner of ZORK I: The Great Underground Empire,\na self-contained and self-maintaining universe. If used and maintained\nin accordance with normal operating practices for small universes, ZORK\nwill provide many months of trouble-free operation.\")>",
   "referencedBy": []
  },
  "CLIMBABLE-CLIFF": {
   "name": "CLIMBABLE-CLIFF",
   "file": "1dungeon.zil",
   "line": 1115,
   "endLine": 1121,
   "desc": "cliff",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "CLIMBBIT"
   ],
   "synonyms": [
    "WALL",
    "CLIFF",
    "WALLS",
    "LEDGE"
   ],
   "adjectives": [
    "ROCKY",
    "SHEER"
   ],
   "action": "CLIFF-OBJECT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CLIMBABLE-CLIFF\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM WALL CLIFF WALLS LEDGE)\n\t(ADJECTIVE ROCKY SHEER)\n\t(DESC \"cliff\")\n\t(ACTION CLIFF-OBJECT)\n\t(FLAGS NDESCBIT CLIMBBIT)>",
   "referencedBy": [
    "CLIFF-OBJECT"
   ]
  },
  "WHITE-CLIFF": {
   "name": "WHITE-CLIFF",
   "file": "1dungeon.zil",
   "line": 1123,
   "endLine": 1129,
   "desc": "white cliffs",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "CLIMBBIT"
   ],
   "synonyms": [
    "CLIFF",
    "CLIFFS"
   ],
   "adjectives": [
    "WHITE"
   ],
   "action": "WCLIF-OBJECT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WHITE-CLIFF\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM CLIFF CLIFFS)\n\t(ADJECTIVE WHITE)\n\t(DESC \"white cliffs\")\n\t(FLAGS NDESCBIT CLIMBBIT)\n\t(ACTION WCLIF-OBJECT)>",
   "referencedBy": []
  },
  "WRENCH": {
   "name": "WRENCH",
   "file": "1dungeon.zil",
   "line": 1131,
   "endLine": 1136,
   "desc": "wrench",
   "ldesc": null,
   "fdesc": null,
   "loc": "MAINTENANCE-ROOM",
   "flags": [
    "TAKEBIT",
    "TOOLBIT"
   ],
   "synonyms": [
    "WRENCH",
    "TOOL",
    "TOOLS"
   ],
   "adjectives": [],
   "action": null,
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
   "source": "<OBJECT WRENCH\n\t(IN MAINTENANCE-ROOM)\n\t(SYNONYM WRENCH TOOL TOOLS)\n\t(DESC \"wrench\")\n\t(FLAGS TAKEBIT TOOLBIT)\n\t(SIZE 10)>",
   "referencedBy": [
    "BOLT-F"
   ]
  },
  "CONTROL-PANEL": {
   "name": "CONTROL-PANEL",
   "file": "1dungeon.zil",
   "line": 1138,
   "endLine": 1143,
   "desc": "control panel",
   "ldesc": null,
   "fdesc": null,
   "loc": "DAM-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PANEL"
   ],
   "adjectives": [
    "CONTROL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CONTROL-PANEL\n\t(IN DAM-ROOM)\n\t(SYNONYM PANEL)\n\t(ADJECTIVE CONTROL)\n\t(DESC \"control panel\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "NEST": {
   "name": "NEST",
   "file": "1dungeon.zil",
   "line": 1145,
   "endLine": 1152,
   "desc": "bird's nest",
   "ldesc": null,
   "fdesc": "Beside you on the branch is a small bird's nest.",
   "loc": "UP-A-TREE",
   "flags": [
    "TAKEBIT",
    "BURNBIT",
    "CONTBIT",
    "OPENBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "NEST"
   ],
   "adjectives": [
    "BIRDS"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "20"
    ]
   },
   "contents": [
    "EGG"
   ],
   "source": "<OBJECT NEST\n\t(IN UP-A-TREE)\n\t(SYNONYM NEST)\n\t(ADJECTIVE BIRDS)\n\t(DESC \"bird's nest\")\n\t(FLAGS TAKEBIT BURNBIT CONTBIT OPENBIT SEARCHBIT)\n\t(FDESC \"Beside you on the branch is a small bird's nest.\")\n\t(CAPACITY 20)>",
   "referencedBy": [
    "TREE-ROOM"
   ]
  },
  "EGG": {
   "name": "EGG",
   "file": "1dungeon.zil",
   "line": 1154,
   "endLine": 1169,
   "desc": "jewel-encrusted egg",
   "ldesc": null,
   "fdesc": "In the bird's nest is a large egg encrusted with precious jewels,\napparently scavenged by a childless songbird. The egg is covered with\nfine gold inlay, and ornamented in lapis lazuli and mother-of-pearl.\nUnlike most eggs, this one is hinged and closed with a delicate looking\nclasp. The egg appears extremely fragile.",
   "loc": "NEST",
   "flags": [
    "TAKEBIT",
    "CONTBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "EGG",
    "TREASURE"
   ],
   "adjectives": [
    "BIRDS",
    "ENCRUSTED",
    "JEWELED"
   ],
   "action": "EGG-OBJECT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "5"
    ],
    "TVALUE": [
     "5"
    ],
    "CAPACITY": [
     "6"
    ]
   },
   "contents": [
    "CANARY"
   ],
   "source": "<OBJECT EGG\n\t(IN NEST)\n\t(SYNONYM EGG TREASURE)\n\t(ADJECTIVE BIRDS ENCRUSTED JEWELED)\n\t(DESC \"jewel-encrusted egg\")\n\t(FLAGS TAKEBIT CONTBIT SEARCHBIT)\n\t(ACTION EGG-OBJECT)\n\t(VALUE 5)\n\t(TVALUE 5)\n\t(CAPACITY 6)\n\t(FDESC\n\"In the bird's nest is a large egg encrusted with precious jewels,\napparently scavenged by a childless songbird. The egg is covered with\nfine gold inlay, and ornamented in lapis lazuli and mother-of-pearl.\nUnlike most eggs, this one is hinged and closed with a delicate looking\nclasp. The egg appears extremely fragile.\")>",
   "referencedBy": [
    "DEPOSIT-BOOTY",
    "TREE-ROOM",
    "EGG-OBJECT",
    "BAD-EGG"
   ]
  },
  "BROKEN-EGG": {
   "name": "BROKEN-EGG",
   "file": "1dungeon.zil",
   "line": 1171,
   "endLine": 1178,
   "desc": "broken jewel-encrusted egg",
   "ldesc": "There is a somewhat ruined egg here.",
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "EGG",
    "TREASURE"
   ],
   "adjectives": [
    "BROKEN",
    "BIRDS",
    "ENCRUSTED",
    "JEWEL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "6"
    ],
    "TVALUE": [
     "2"
    ]
   },
   "contents": [
    "BROKEN-CANARY"
   ],
   "source": "<OBJECT BROKEN-EGG\n\t(SYNONYM EGG TREASURE)\n\t(ADJECTIVE BROKEN BIRDS ENCRUSTED JEWEL)\n\t(DESC \"broken jewel-encrusted egg\")\n\t(FLAGS TAKEBIT CONTBIT OPENBIT)\n\t(CAPACITY 6)\n\t(TVALUE 2)\n\t(LDESC \"There is a somewhat ruined egg here.\")>",
   "referencedBy": [
    "TREE-ROOM",
    "BAD-EGG"
   ]
  },
  "BAUBLE": {
   "name": "BAUBLE",
   "file": "1dungeon.zil",
   "line": 1180,
   "endLine": 1186,
   "desc": "beautiful brass bauble",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "BAUBLE",
    "TREASURE"
   ],
   "adjectives": [
    "BRASS",
    "BEAUTI"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "1"
    ],
    "TVALUE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT BAUBLE\n\t(SYNONYM BAUBLE TREASURE)\n\t(ADJECTIVE BRASS BEAUTI)\n\t(DESC \"beautiful brass bauble\")\n\t(FLAGS TAKEBIT)\n\t(VALUE 1)\n\t(TVALUE 1)>",
   "referencedBy": [
    "CANARY-OBJECT"
   ]
  },
  "CANARY": {
   "name": "CANARY",
   "file": "1dungeon.zil",
   "line": 1188,
   "endLine": 1201,
   "desc": "golden clockwork canary",
   "ldesc": null,
   "fdesc": "There is a golden clockwork canary nestled in the egg. It has ruby\neyes and a silver beak. Through a crystal window below its left\nwing you can see intricate machinery inside. It appears to have\nwound down.",
   "loc": "EGG",
   "flags": [
    "TAKEBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "CANARY",
    "TREASURE"
   ],
   "adjectives": [
    "CLOCKWORK",
    "GOLD",
    "GOLDEN"
   ],
   "action": "CANARY-OBJECT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "6"
    ],
    "TVALUE": [
     "4"
    ]
   },
   "contents": [],
   "source": "<OBJECT CANARY\n\t(IN EGG)\n\t(SYNONYM CANARY TREASURE)\n\t(ADJECTIVE CLOCKWORK GOLD GOLDEN)\n\t(DESC \"golden clockwork canary\")\n\t(FLAGS TAKEBIT SEARCHBIT)\n\t(ACTION CANARY-OBJECT)\n\t(VALUE 6)\n\t(TVALUE 4)\n\t(FDESC\n\"There is a golden clockwork canary nestled in the egg. It has ruby\neyes and a silver beak. Through a crystal window below its left\nwing you can see intricate machinery inside. It appears to have\nwound down.\")>",
   "referencedBy": [
    "BAD-EGG",
    "CANARY-OBJECT"
   ]
  },
  "BROKEN-CANARY": {
   "name": "BROKEN-CANARY",
   "file": "1dungeon.zil",
   "line": 1203,
   "endLine": 1217,
   "desc": "broken clockwork canary",
   "ldesc": null,
   "fdesc": "There is a golden clockwork canary nestled in the egg. It seems to\nhave recently had a bad experience. The mountings for its jewel-like\neyes are empty, and its silver beak is crumpled. Through a cracked\ncrystal window below its left wing you can see the remains of\nintricate machinery. It is not clear what result winding it would\nhave, as the mainspring seems sprung.",
   "loc": "BROKEN-EGG",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "CANARY",
    "TREASURE"
   ],
   "adjectives": [
    "BROKEN",
    "CLOCKWORK",
    "GOLD",
    "GOLDEN"
   ],
   "action": "CANARY-OBJECT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TVALUE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT BROKEN-CANARY\n\t(IN BROKEN-EGG)\n\t(SYNONYM CANARY TREASURE)\n\t(ADJECTIVE BROKEN CLOCKWORK GOLD GOLDEN)\n\t(DESC \"broken clockwork canary\")\n\t(FLAGS TAKEBIT)\n\t(ACTION CANARY-OBJECT)\n\t(TVALUE 1)\n\t(FDESC\n\"There is a golden clockwork canary nestled in the egg. It seems to\nhave recently had a bad experience. The mountings for its jewel-like\neyes are empty, and its silver beak is crumpled. Through a cracked\ncrystal window below its left wing you can see the remains of\nintricate machinery. It is not clear what result winding it would\nhave, as the mainspring seems sprung.\")>",
   "referencedBy": [
    "BAD-EGG"
   ]
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
    "TEETH",
    "WALL",
    "GRANITE-WALL",
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
    "HACK-HACK"
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
    "BOARD",
    "SONGBIRD",
    "WHITE-HOUSE",
    "FOREST",
    "TREE",
    "GLOBAL-WATER",
    "KITCHEN-WINDOW",
    "CHIMNEY",
    "SLIDE",
    "BOARDED-WINDOW",
    "CRACK",
    "GRATE",
    "BODIES",
    "RAINBOW",
    "RIVER",
    "LADDER",
    "CLIMBABLE-CLIFF",
    "WHITE-CLIFF",
    "PSEUDO-OBJECT",
    "STAIRS"
   ],
   "source": "<OBJECT LOCAL-GLOBALS\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ZZMGCK)\n\t(DESCFCN PATH-OBJECT)\n        (GLOBAL GLOBAL-OBJECTS)\n\t(ADVFCN 0)\n\t(FDESC \"F\")\n\t(LDESC \"F\")\n\t(PSEUDO \"FOOBAR\" V-WALK)\n\t(CONTFCN 0)\n\t(VTYPE 1)\n\t(SIZE 0)\n\t(CAPACITY 0)>",
   "referencedBy": [
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
    "TREE-ROOM",
    "ROPE-FUNCTION",
    "I-THIEF",
    "RANDOMIZE-OBJECTS",
    "GWIM",
    "GLOBAL-CHECK",
    "META-LOC",
    "V-CLIMB-UP",
    "V-DISEMBARK",
    "V-EXIT",
    "PRE-TURN",
    "DESCRIBE-ROOM",
    "FIRSTER"
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
    "BLACK-BOOK",
    "V-RANDOM"
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
    "CHASM-PSEUDO",
    "GLOBAL-CHECK",
    "ACCESSIBLE?",
    "V-EAT",
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
    "ITAKE-CHECK"
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
    "MAIN-LOOP-1",
    "GET-OBJECT",
    "ITAKE-CHECK"
   ]
  },
  "BLESSINGS": {
   "name": "BLESSINGS",
   "file": "gglobals.zil",
   "line": 96,
   "endLine": 100,
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
   "line": 102,
   "endLine": 108,
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
   "referencedBy": [
    "KITCHEN-FCN",
    "V-CLIMB-UP"
   ]
  },
  "SAILOR": {
   "name": "SAILOR",
   "file": "gglobals.zil",
   "line": 115,
   "endLine": 120,
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
   "line": 164,
   "endLine": 168,
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
    "GROUND-FUNCTION",
    "V-PUT-ON",
    "PRE-TAKE"
   ]
  },
  "GRUE": {
   "name": "GRUE",
   "file": "gglobals.zil",
   "line": 184,
   "endLine": 189,
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
   "line": 208,
   "endLine": 212,
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
    "BREATHE",
    "IBOAT-FUNCTION",
    "V-BREATHE",
    "V-FIND"
   ]
  },
  "ME": {
   "name": "ME",
   "file": "gglobals.zil",
   "line": 214,
   "endLine": 219,
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
    "RIVER-FUNCTION",
    "CLIFF-OBJECT",
    "SLIDE-FUNCTION",
    "CHASM-PSEUDO",
    "CRETIN-FCN",
    "BUFFER-PRINT",
    "ITAKE-CHECK",
    "V-FIND",
    "V-THROW"
   ]
  },
  "ADVENTURER": {
   "name": "ADVENTURER",
   "file": "gglobals.zil",
   "line": 267,
   "endLine": 272,
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
    "SKELETON",
    "CYCLOPS-FCN",
    "ROBBER-FUNCTION",
    "SWORD-FCN",
    "I-SWORD",
    "JIGS-UP",
    "GO",
    "ITAKE-CHECK",
    "V-WALK",
    "PRINT-CONT",
    "GOTO",
    "FIND-IN"
   ]
  },
  "PATHOBJ": {
   "name": "PATHOBJ",
   "file": "gglobals.zil",
   "line": 274,
   "endLine": 280,
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
   "line": 290,
   "endLine": 294,
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
   "line": 304,
   "endLine": 309,
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
    "HOT-BELL-F",
    "MIRROR-MIRROR",
    "DAM-FUNCTION",
    "EGG-OBJECT",
    "GWIM",
    "ITAKE-CHECK",
    "V-ATTACK",
    "V-DIG",
    "V-FIND"
   ]
  }
 },
 "routines": {
  "WEST-HOUSE": {
   "name": "WEST-HOUSE",
   "file": "1actions.zil",
   "line": 7,
   "endLine": 15,
   "source": "<ROUTINE WEST-HOUSE (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are standing in an open field west of a white house, with a boarded\nfront door.\">\n\t\t<COND (,WON-FLAG\n\t\t       <TELL\n\" A secret path leads southwest into the forest.\">)>\n\t\t<CRLF>)>>"
  },
  "EAST-HOUSE": {
   "name": "EAST-HOUSE",
   "file": "1actions.zil",
   "line": 17,
   "endLine": 26,
   "source": "<ROUTINE EAST-HOUSE (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are behind the white house. A path leads into the forest\nto the east. In one corner of the house there is a small window\nwhich is \">\n\t\t<COND (<FSET? ,KITCHEN-WINDOW ,OPENBIT>\n\t\t       <TELL \"open.\">)\n\t\t      (T <TELL \"slightly ajar.\">)>\n\t\t<CRLF>)>>"
  },
  "OPEN-CLOSE": {
   "name": "OPEN-CLOSE",
   "file": "1actions.zil",
   "line": 28,
   "endLine": 42,
   "source": "<ROUTINE OPEN-CLOSE (OBJ STROPN STRCLS)\n\t <COND (<VERB? OPEN>\n\t\t<COND (<FSET? .OBJ ,OPENBIT>\n\t\t       <TELL <PICK-ONE ,DUMMY>>)\n\t\t      (T\n\t\t       <TELL .STROPN>\n\t\t       <FSET .OBJ ,OPENBIT>)>\n\t\t<CRLF>)\n\t       (<VERB? CLOSE>\n\t\t<COND (<FSET? .OBJ ,OPENBIT>\n\t\t       <TELL .STRCLS>\n\t\t       <FCLEAR .OBJ ,OPENBIT>\n\t\t       T)\n\t\t      (T <TELL <PICK-ONE ,DUMMY>>)>\n\t\t<CRLF>)>>"
  },
  "BOARD-F": {
   "name": "BOARD-F",
   "file": "1actions.zil",
   "line": 44,
   "endLine": 46,
   "source": "<ROUTINE BOARD-F ()\n\t <COND (<VERB? TAKE EXAMINE>\n\t\t<TELL \"The boards are securely fastened.\" CR>)>>"
  },
  "TEETH-F": {
   "name": "TEETH-F",
   "file": "1actions.zil",
   "line": 48,
   "endLine": 62,
   "source": "<ROUTINE TEETH-F ()\n\t <COND (<AND <VERB? BRUSH>\n\t\t     <EQUAL? ,PRSO ,TEETH>>\n\t\t<COND (<AND <EQUAL? ,PRSI ,PUTTY>\n\t\t\t    <IN? ,PRSI ,WINNER>>\n\t\t       <JIGS-UP\n\"Well, you seem to have been brushing your teeth with some sort of\nglue. As a result, your mouth gets glued together (with your nose)\nand you die of respiratory failure.\">)\n\t\t      (<NOT ,PRSI>\n\t\t       <TELL\n\"Dental hygiene is highly recommended, but I'm not sure what you want\nto brush them with.\" CR>)\n\t\t      (T\n\t\t       <TELL \"A nice idea, but with a \" D ,PRSI \"?\" CR>)>)>>"
  },
  "GRANITE-WALL-F": {
   "name": "GRANITE-WALL-F",
   "file": "1actions.zil",
   "line": 64,
   "endLine": 80,
   "source": "<ROUTINE GRANITE-WALL-F ()\n\t <COND (<EQUAL? ,HERE ,NORTH-TEMPLE>\n\t\t<COND (<VERB? FIND>\n\t\t       <TELL \"The west wall is solid granite here.\" CR>)\n\t\t      (<VERB? TAKE RAISE LOWER>\n\t\t       <TELL \"It's solid granite.\" CR>)>)\n\t       (<EQUAL? ,HERE ,TREASURE-ROOM>\n\t\t<COND (<VERB? FIND>\n\t\t       <TELL \"The east wall is solid granite here.\" CR>)\n\t\t      (<VERB? TAKE RAISE LOWER>\n\t\t       <TELL \"It's solid granite.\" CR>)>)\n\t       (<EQUAL? ,HERE ,SLIDE-ROOM>\n\t\t<COND (<VERB? FIND READ>\n\t\t       <TELL \"It only SAYS \\\"Granite Wall\\\".\" CR>)\n\t\t      (T <TELL \"The wall isn't granite.\" CR>)>)\n\t       (T\n\t\t<TELL \"There is no granite wall here.\" CR>)>>"
  },
  "SONGBIRD-F": {
   "name": "SONGBIRD-F",
   "file": "1actions.zil",
   "line": 82,
   "endLine": 90,
   "source": "<ROUTINE SONGBIRD-F ()\n\t <COND (<VERB? FIND TAKE>\n\t\t<TELL \"The songbird is not here but is probably nearby.\" CR>)\n\t       (<VERB? LISTEN>\n\t\t<TELL \"You can't hear the songbird now.\" CR>)\n\t       (<VERB? FOLLOW>\n\t\t<TELL \"It can't be followed.\" CR>)\n\t       (T\n\t\t<TELL \"You can't see any songbird here.\" CR>)>>"
  },
  "WHITE-HOUSE-F": {
   "name": "WHITE-HOUSE-F",
   "file": "1actions.zil",
   "line": 92,
   "endLine": 127,
   "source": "<ROUTINE WHITE-HOUSE-F ()\n    <COND (<EQUAL? ,HERE ,KITCHEN ,LIVING-ROOM ,ATTIC>\n\t   <COND (<VERB? FIND>\n\t\t  <TELL \"Why not find your brains?\" CR>)\n\t\t (<VERB? WALK-AROUND>\n\t\t  <GO-NEXT ,IN-HOUSE-AROUND>\n\t\t  T)>)\n\t  (<NOT <OR <EQUAL? ,HERE ,EAST-OF-HOUSE ,WEST-OF-HOUSE>\n\t\t    <EQUAL? ,HERE ,NORTH-OF-HOUSE ,SOUTH-OF-HOUSE>>>\n\t   <COND (<VERB? FIND>\n\t\t  <COND (<EQUAL? ,HERE ,CLEARING>\n\t\t\t <TELL \"It seems to be to the west.\" CR>)\n\t\t\t(T\n\t\t\t <TELL \"It was here just a minute ago....\" CR>)>)\n\t\t (T <TELL \"You're not at the house.\" CR>)>)\n\t  (<VERB? FIND>\n\t   <TELL\n\"It's right here! Are you blind or something?\" CR>)\n\t  (<VERB? WALK-AROUND>\n\t   <GO-NEXT ,HOUSE-AROUND>\n\t   T)\n\t  (<VERB? EXAMINE>\n\t   <TELL\n\"The house is a beautiful colonial house which is painted white.\nIt is clear that the owners must have been extremely wealthy.\" CR>)\n\t  (<VERB? THROUGH OPEN>\n\t   <COND (<EQUAL? ,HERE ,EAST-OF-HOUSE>\n\t\t  <COND (<FSET? ,KITCHEN-WINDOW ,OPENBIT>\n\t\t\t <GOTO ,KITCHEN>)\n\t\t\t(T\n\t\t\t <TELL \"The window is closed.\" CR>\n\t\t\t <THIS-IS-IT ,KITCHEN-WINDOW>)>)\n\t\t (T\n\t\t  <TELL \"I can't see how to get in from here.\" CR>)>)\n\t  (<VERB? BURN>\n\t   <TELL \"You must be joking.\" CR>)>>"
  },
  "GO-NEXT": {
   "name": "GO-NEXT",
   "file": "1actions.zil",
   "line": 131,
   "endLine": 134,
   "source": "<ROUTINE GO-NEXT (TBL \"AUX\" VAL)\n\t <COND (<SET VAL <LKP ,HERE .TBL>>\n\t\t<COND (<NOT <GOTO .VAL>> 2)\n\t\t      (T 1)>)>>"
  },
  "FOREST-F": {
   "name": "FOREST-F",
   "file": "1actions.zil",
   "line": 136,
   "endLine": 150,
   "source": "<ROUTINE FOREST-F ()\n\t <COND (<VERB? WALK-AROUND>\n\t\t<COND (<OR <EQUAL? ,HERE\n\t\t\t       ,WEST-OF-HOUSE ,NORTH-OF-HOUSE\n\t\t\t       ,SOUTH-OF-HOUSE>\n\t\t\t   <EQUAL? ,HERE ,EAST-OF-HOUSE>>\n\t\t       <TELL \"You aren't even in the forest.\" CR>)>\n\t\t<GO-NEXT ,FOREST-AROUND>)\n\t       (<VERB? DISEMBARK>\n\t\t<TELL \"You will have to specify a direction.\" CR>)\n\t       (<VERB? FIND>\n\t\t<TELL \"You cannot see the forest for the trees.\" CR>)\n\t       (<VERB? LISTEN>\n\t\t<TELL \"The pines and the hemlocks seem to be murmuring.\"\n\t\t      CR>)>>"
  },
  "MOUNTAIN-RANGE-F": {
   "name": "MOUNTAIN-RANGE-F",
   "file": "1actions.zil",
   "line": 152,
   "endLine": 155,
   "source": "<ROUTINE MOUNTAIN-RANGE-F ()\n\t <COND (<VERB? CLIMB-UP CLIMB-DOWN CLIMB-FOO>\n\t\t<TELL \"Don't you believe me? The mountains are impassable!\"\n\t\t      CR>)>>"
  },
  "WATER-F": {
   "name": "WATER-F",
   "file": "1actions.zil",
   "line": 157,
   "endLine": 237,
   "source": "<ROUTINE WATER-F (\"AUX\" AV W PI?)\n\t <COND (<VERB? SGIVE> <RFALSE>)\n\t       (<VERB? THROUGH BOARD>\n\t\t<TELL <PICK-ONE ,SWIMYUKS> CR>\n\t\t<RTRUE>)\n\t       (<VERB? FILL>\t;\"fill bottle with water =>\"\n\t\t<SET W ,PRSI>\t   ;\"put water in bottle\"\n\t\t<SETG PRSA ,V?PUT>\n\t\t<SETG PRSI ,PRSO>\n\t\t<SETG PRSO .W>\n\t\t<SET PI? <>>)\n\t       (<OR <EQUAL? ,PRSO ,GLOBAL-WATER>\n\t\t    <EQUAL? ,PRSO ,WATER>>\n\t\t<SET W ,PRSO>\n\t\t<SET PI? <>>)\n\t       (ELSE\n\t\t<SET W ,PRSI>\n\t\t<COND (.W <SET PI? T>)>)>\n\t <COND (<EQUAL? .W ,GLOBAL-WATER>\n\t\t<SET W ,WATER>\n\t\t<COND (<VERB? TAKE PUT> <REMOVE-CAREFULLY .W>)>)>\n\t <COND (.PI? <SETG PRSI .W>)\n\t       (T <SETG PRSO .W>)>\n\t <SET AV <LOC ,WINNER>>\n\t <COND (<NOT <FSET? .AV ,VEHBIT>> <SET AV <>>)>\n\t <COND (<AND <VERB? TAKE PUT> <NOT .PI?>>\n\t\t<COND (<AND .AV\n\t\t\t    <OR <EQUAL? .AV ,PRSI>\n\t\t\t\t<AND <NOT ,PRSI>\n\t\t\t\t     <NOT <IN? .W .AV>>>>>\n\t\t       <TELL \"There is now a puddle in the bottom of the \"\n\t\t\t     D .AV \".\" CR>\n\t\t       <REMOVE-CAREFULLY ,PRSO>\n\t\t       <MOVE ,PRSO .AV>)\n\t\t      (<AND ,PRSI <NOT <EQUAL? ,PRSI ,BOTTLE>>>\n\t\t       <TELL \"The water leaks out of the \" D ,PRSI\n\t\t\t     \" and evaporates immediately.\" CR>\n\t\t       <REMOVE-CAREFULLY .W>)\n\t\t      (<IN? ,BOTTLE ,WINNER>\n\t\t       <COND (<NOT <FSET? ,BOTTLE ,OPENBIT>>\n\t\t\t      <TELL \"The bottle is closed.\" CR>\n\t\t\t      <THIS-IS-IT ,BOTTLE>)\n\t\t\t     (<NOT <FIRST? ,BOTTLE>>\n\t\t\t      <MOVE ,WATER ,BOTTLE>\n\t\t\t      <TELL \"The bottle is now full of water.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"The water slips through your fingers.\" CR>\n\t\t\t      <RTRUE>)>)\n\t\t      (<AND <IN? ,PRSO ,BOTTLE>\n\t\t\t    <VERB? TAKE>\n\t\t\t    <NOT ,PRSI>>\n\t\t       <TELL\n\"It's in the bottle. Perhaps you should take that instead.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The water slips through your fingers.\" CR>)>)\n\t       (.PI?\n\t\t<COND (<AND <VERB? PUT>\n\t\t\t    <GLOBAL-IN? ,RIVER ,HERE>>\n\t\t       <PERFORM ,V?PUT ,PRSO ,RIVER>)\n\t\t      (ELSE\n\t\t       <TELL \"Nice try.\" CR>)>\n\t\t<RTRUE>)\n\t       (<VERB? DROP GIVE>\n\t\t<COND (<AND <VERB? DROP>\n\t\t\t    <IN? ,WATER ,BOTTLE>\n\t\t\t    <NOT <FSET? ,BOTTLE ,OPENBIT>>>\n\t\t       <TELL \"The bottle is closed.\" CR>\n\t\t       <RTRUE>)>\n\t\t<REMOVE-CAREFULLY ,WATER>\n\t\t<COND (.AV\n\t\t       <TELL \"There is now a puddle in the bottom of the \"\n\t\t\t     D .AV \".\" CR>\n\t\t       <MOVE ,WATER .AV>)\n\t\t      (T\n\t\t       <TELL\n\"The water spills to the floor and evaporates immediately.\" CR>\n\t\t       <REMOVE-CAREFULLY ,WATER>)>)\n\t       (<VERB? THROW>\n\t\t<TELL\n\"The water splashes on the walls and evaporates immediately.\" CR>\n\t\t<REMOVE-CAREFULLY ,WATER>)>>"
  },
  "KITCHEN-WINDOW-F": {
   "name": "KITCHEN-WINDOW-F",
   "file": "1actions.zil",
   "line": 241,
   "endLine": 262,
   "source": "<ROUTINE KITCHEN-WINDOW-F ()\n\t <COND (<VERB? OPEN CLOSE>\n\t\t<SETG KITCHEN-WINDOW-FLAG T>\n\t\t<OPEN-CLOSE ,KITCHEN-WINDOW\n\"With great effort, you open the window far enough to allow entry.\"\n\"The window closes (more easily than it opened).\">)\n\t       (<AND <VERB? EXAMINE>\n\t\t     <NOT ,KITCHEN-WINDOW-FLAG>>\n\t\t<TELL\n\"The window is slightly ajar, but not enough to allow entry.\" CR>)\n\t       (<VERB? WALK BOARD THROUGH>\n\t\t<COND (<EQUAL? ,HERE ,KITCHEN>\n\t\t       <DO-WALK ,P?EAST>)\n\t\t      (T\n\t\t       <DO-WALK ,P?WEST>)>\n\t\t<RTRUE>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<TELL \"You can see \">\n\t\t<COND (<EQUAL? ,HERE ,KITCHEN>\n\t\t       <TELL \"a clear area leading towards a forest.\" CR>)\n\t\t      (T\n\t\t       <TELL \"what appears to be a kitchen.\" CR>)>)>>"
  },
  "GHOSTS-F": {
   "name": "GHOSTS-F",
   "file": "1actions.zil",
   "line": 264,
   "endLine": 273,
   "source": "<ROUTINE GHOSTS-F ()\n\t <COND (<VERB? TELL>\n\t\t<TELL \"The spirits jeer loudly and ignore you.\" CR>\n\t\t<SETG P-CONT <>>)\n\t       (<VERB? EXORCISE>\n\t\t<TELL \"Only the ceremony itself has any effect.\" CR>)\n\t       (<AND <VERB? ATTACK MUNG> <EQUAL? ,PRSO ,GHOSTS>>\n\t\t<TELL \"How can you attack a spirit with material objects?\" CR>)\n\t       (T\n\t\t<TELL \"You seem unable to interact with these spirits.\" CR>)>>"
  },
  "BASKET-F": {
   "name": "BASKET-F",
   "file": "1actions.zil",
   "line": 277,
   "endLine": 306,
   "source": "<ROUTINE BASKET-F ()\n\t <COND (<VERB? RAISE>\n\t\t<COND (,CAGE-TOP\n\t\t       <TELL <PICK-ONE ,DUMMY> CR>)\n\t\t      (T\n\t\t       <MOVE ,RAISED-BASKET ,SHAFT-ROOM>\n\t\t       <MOVE ,LOWERED-BASKET ,LOWER-SHAFT>\n\t\t       <SETG CAGE-TOP T>\n\t\t       <THIS-IS-IT ,RAISED-BASKET>\n\t\t       <TELL\n\"The basket is raised to the top of the shaft.\" CR>)>)\n\t       (<VERB? LOWER>\n\t\t<COND (<NOT ,CAGE-TOP>\n\t\t       <TELL <PICK-ONE ,DUMMY> CR>)\n\t\t      (T\n\t\t       <MOVE ,RAISED-BASKET ,LOWER-SHAFT>\n\t\t       <MOVE ,LOWERED-BASKET ,SHAFT-ROOM>\n\t\t       <THIS-IS-IT ,LOWERED-BASKET>\n\t\t       <TELL\n\"The basket is lowered to the bottom of the shaft.\" CR>\n\t\t       <SETG CAGE-TOP <>>\n\t\t       <COND (<AND ,LIT <NOT <SETG LIT <LIT? ,HERE>>>>\n\t\t\t      <TELL \"It is now pitch black.\" CR>)>\n\t\t       T)>)\n\t       (<OR <EQUAL? ,PRSO ,LOWERED-BASKET>\n\t\t    <EQUAL? ,PRSI ,LOWERED-BASKET>>\n\t\t<TELL \"The basket is at the other end of the chain.\" CR>)\n\t       (<AND <VERB? TAKE>\n\t\t     <EQUAL? ,PRSO ,RAISED-BASKET ,LOWERED-BASKET>>\n\t\t<TELL \"The cage is securely fastened to the iron chain.\" CR>)>>"
  },
  "BAT-F": {
   "name": "BAT-F",
   "file": "1actions.zil",
   "line": 308,
   "endLine": 315,
   "source": "<ROUTINE BAT-F ()\n\t <COND (<VERB? TELL>\n\t\t<FWEEP 6>\n\t\t<SETG P-CONT <>>)\n\t       (<VERB? TAKE ATTACK MUNG>\n\t\t<COND (<EQUAL? <LOC ,GARLIC> ,WINNER ,HERE>\n\t\t       <TELL \"You can't reach him; he's on the ceiling.\" CR>)\n\t\t      (T <FLY-ME>)>)>>"
  },
  "FLY-ME": {
   "name": "FLY-ME",
   "file": "1actions.zil",
   "line": 317,
   "endLine": 324,
   "source": "<ROUTINE FLY-ME ()\n\t <FWEEP 4>\n\t <TELL\n\"The bat grabs you by the scruff of your neck and lifts you away....\" CR CR>\n\t <GOTO <PICK-ONE ,BAT-DROPS> <>>\n\t <COND (<NOT <EQUAL? ,HERE ,ENTRANCE-TO-HADES>>\n\t\t<V-FIRST-LOOK>)>\n\t T>"
  },
  "FWEEP": {
   "name": "FWEEP",
   "file": "1actions.zil",
   "line": 326,
   "endLine": 330,
   "source": "<ROUTINE FWEEP (N)\n\t <REPEAT ()\n\t\t <COND (<L? <SET N <- .N 1>> 1> <RETURN>)\n\t\t       (T <TELL \"    Fweep!\" CR>)>>\n\t <CRLF>>"
  },
  "BELL-F": {
   "name": "BELL-F",
   "file": "1actions.zil",
   "line": 343,
   "endLine": 349,
   "source": "<ROUTINE BELL-F ()\n\t <COND (<VERB? RING>\n\t\t<COND (<AND <EQUAL? ,HERE ,LLD-ROOM>\n\t\t\t    <NOT ,LLD-FLAG>>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <TELL \"Ding, dong.\" CR>)>)>>"
  },
  "HOT-BELL-F": {
   "name": "HOT-BELL-F",
   "file": "1actions.zil",
   "line": 351,
   "endLine": 368,
   "source": "<ROUTINE HOT-BELL-F ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL \"The bell is very hot and cannot be taken.\" CR>)\n\t       (<OR <VERB? RUB> <AND <VERB? RING> ,PRSI>>\n\t\t<COND (<FSET? ,PRSI ,BURNBIT>\n\t\t       <TELL \"The \" D ,PRSI \" burns and is consumed.\" CR>\n\t\t       <REMOVE-CAREFULLY ,PRSI>)\n\t\t      (<EQUAL? ,PRSI ,HANDS>\n\t\t       <TELL \"The bell is too hot to touch.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The heat from the bell is too intense.\" CR>)>)\n\t       (<VERB? POUR-ON>\n\t\t<REMOVE-CAREFULLY ,PRSO>\n\t\t<TELL \"The water cools the bell and is evaporated.\" CR>\n\t\t<QUEUE I-XBH 0>\n\t\t<I-XBH>)\n\t       (<VERB? RING>\n\t\t<TELL \"The bell is too hot to reach.\" CR>)>>"
  },
  "BOARDED-WINDOW-FCN": {
   "name": "BOARDED-WINDOW-FCN",
   "file": "1actions.zil",
   "line": 370,
   "endLine": 374,
   "source": "<ROUTINE BOARDED-WINDOW-FCN ()\n\t <COND (<VERB? OPEN>\n\t\t<TELL \"The windows are boarded and can't be opened.\" CR>)\n\t       (<VERB? MUNG>\n\t\t<TELL \"You can't break the windows open.\" CR>)>>"
  },
  "NAILS-PSEUDO": {
   "name": "NAILS-PSEUDO",
   "file": "1actions.zil",
   "line": 376,
   "endLine": 379,
   "source": "<ROUTINE NAILS-PSEUDO ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL\n\"The nails, deeply imbedded in the door, cannot be removed.\" CR>)>>"
  },
  "CRACK-FCN": {
   "name": "CRACK-FCN",
   "file": "1actions.zil",
   "line": 381,
   "endLine": 383,
   "source": "<ROUTINE CRACK-FCN ()\n\t <COND (<VERB? THROUGH>\n\t\t<TELL \"You can't fit through the crack.\" CR>)>>"
  },
  "KITCHEN-FCN": {
   "name": "KITCHEN-FCN",
   "file": "1actions.zil",
   "line": 385,
   "endLine": 401,
   "source": "<ROUTINE KITCHEN-FCN (RARG)\n\t<COND (<EQUAL? .RARG ,M-LOOK>\n\t       <TELL\n\"You are in the kitchen of the white house. A table seems to\nhave been used recently for the preparation of food. A passage\nleads to the west and a dark staircase can be seen leading\nupward. A dark chimney leads down and to the east is a small\nwindow which is \">\n\t       <COND (<FSET? ,KITCHEN-WINDOW ,OPENBIT>\n\t\t      <TELL \"open.\" CR>)\n\t\t     (T\n\t\t      <TELL \"slightly ajar.\" CR>)>)\n\t      (<==? .RARG ,M-BEG>\n\t       <COND (<AND <VERB? CLIMB-UP> <EQUAL? ,PRSO ,STAIRS>>\n\t\t      <DO-WALK ,P?UP>)\n\t\t     (<AND <VERB? CLIMB-UP> <EQUAL? ,PRSO ,STAIRS>>\n\t\t      <TELL \"There are no stairs leading down.\" CR>)>)>>"
  },
  "STONE-BARROW-FCN": {
   "name": "STONE-BARROW-FCN",
   "file": "1actions.zil",
   "line": 403,
   "endLine": 430,
   "source": "<ROUTINE STONE-BARROW-FCN (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-BEG>\n\t\t     <OR <VERB? ENTER>\n\t\t\t <AND <VERB? WALK>\n\t\t\t      <EQUAL? ,PRSO ,P?WEST ,P?IN>>\n\t\t\t <AND <VERB? THROUGH>\n\t\t\t      <EQUAL? ,PRSO ,BARROW>>>>\n\t\t<TELL\n\"Inside the Barrow|\nAs you enter the barrow, the door closes inexorably behind you. Around\nyou it is dark, but ahead is an enormous cavern, brightly lit. Through\nits center runs a wide stream. Spanning the stream is a small wooden\nfootbridge, and beyond a path leads into a dark tunnel. Above the\nbridge, floating in the air, is a large sign. It reads:  All ye who\nstand before this bridge have completed a great and perilous adventure\nwhich has tested your wit and courage. You have mastered\">\n\t\t<COND (<EQUAL? <BAND <GETB 0 1> 8> 0>\n\t\t       <TELL \"\nthe first part of the ZORK trilogy. Those who pass over this bridge must be\nprepared to undertake an even greater adventure that will severely test your\nskill and bravery!|\n|\nThe ZORK trilogy continues with \\\"ZORK II: The Wizard of Frobozz\\\" and\nis completed in \\\"ZORK III: The Dungeon Master.\\\"\" CR>)\n\t\t      (T\n\t\t       <TELL \"\nZORK: The Great Underground Empire.|\" CR>)>\n\t\t<FINISH>)>>"
  },
  "BARROW-DOOR-FCN": {
   "name": "BARROW-DOOR-FCN",
   "file": "1actions.zil",
   "line": 432,
   "endLine": 434,
   "source": "<ROUTINE BARROW-DOOR-FCN ()\n\t <COND (<VERB? OPEN CLOSE>\n\t\t<TELL \"The door is too heavy.\" CR>)>>"
  },
  "BARROW-FCN": {
   "name": "BARROW-FCN",
   "file": "1actions.zil",
   "line": 436,
   "endLine": 438,
   "source": "<ROUTINE BARROW-FCN ()\n\t <COND (<VERB? THROUGH>\n\t\t<DO-WALK ,P?WEST>)>>"
  },
  "TROPHY-CASE-FCN": {
   "name": "TROPHY-CASE-FCN",
   "file": "1actions.zil",
   "line": 442,
   "endLine": 445,
   "source": "<ROUTINE TROPHY-CASE-FCN ()\n    <COND (<AND <VERB? TAKE> <EQUAL? ,PRSO ,TROPHY-CASE>>\n\t   <TELL\n\"The trophy case is securely fastened to the wall.\" CR>)>>"
  },
  "LIVING-ROOM-FCN": {
   "name": "LIVING-ROOM-FCN",
   "file": "1actions.zil",
   "line": 449,
   "endLine": 485,
   "source": "<ROUTINE LIVING-ROOM-FCN (RARG \"AUX\" RUG? TC)\n\t<COND (<EQUAL? .RARG ,M-LOOK>\n\t       <TELL\n\"You are in the living room. There is a doorway to the east\">\n\t       <COND (,MAGIC-FLAG\n\t\t      <TELL\n\". To the\nwest is a cyclops-shaped opening in an old wooden door, above which is\nsome strange gothic lettering, \">)\n\t\t     (T\n\t\t      <TELL\n\", a wooden\ndoor with strange gothic lettering to the west, which appears to be\nnailed shut, \">)>\n\t       <TELL \"a trophy case, \">\n\t       <SET RUG? ,RUG-MOVED>\n\t       <COND (<AND .RUG? <FSET? ,TRAP-DOOR ,OPENBIT>>\n\t\t      <TELL\n\t\t       \"and a rug lying beside an open trap door.\">)\n\t\t     (.RUG?\n\t\t      <TELL \"and a closed trap door at your feet.\">)\n\t\t     (<FSET? ,TRAP-DOOR ,OPENBIT>\n\t\t      <TELL \"and an open trap door at your feet.\">)\n\t\t     (T\n\t\t      <TELL\n\t\t       \"and a large oriental rug in the center of the room.\">)>\n\t       <CRLF>\n\t       T)\n\t      (<EQUAL? .RARG ,M-END>\n\t       <COND (<OR <VERB? TAKE>\n\t\t\t  <AND <VERB? PUT>\n\t\t\t       <EQUAL? ,PRSI ,TROPHY-CASE>>>\n\t\t      <COND (<IN? ,PRSO ,TROPHY-CASE>\n\t\t\t     <TOUCH-ALL ,PRSO>)>\n\t\t      <SETG SCORE <+ ,BASE-SCORE <OTVAL-FROB>>>\n\t\t      <SCORE-UPD 0>\n\t\t      <RFALSE>)>)>>"
  },
  "TOUCH-ALL": {
   "name": "TOUCH-ALL",
   "file": "1actions.zil",
   "line": 487,
   "endLine": 494,
   "source": "<ROUTINE TOUCH-ALL (OBJ \"AUX\" F)\n\t <SET F <FIRST? .OBJ>>\n\t <REPEAT ()\n\t\t <COND (<NOT .F> <RETURN>)\n\t\t       (T\n\t\t\t<FSET .F ,TOUCHBIT>\n\t\t\t<COND (<FIRST? .F> <TOUCH-ALL .F>)>)>\n\t\t <SET F <NEXT? .F>>>>"
  },
  "OTVAL-FROB": {
   "name": "OTVAL-FROB",
   "file": "1actions.zil",
   "line": 496,
   "endLine": 502,
   "source": "<ROUTINE OTVAL-FROB (\"OPTIONAL\" (O ,TROPHY-CASE) \"AUX\" F (SCORE 0))\n\t <SET F <FIRST? .O>>\n\t <REPEAT ()\n\t\t <COND (<NOT .F> <RETURN .SCORE>)>\n\t\t <SET SCORE <+ .SCORE <GETP .F ,P?TVALUE>>>\n\t\t <COND (<FIRST? .F> <OTVAL-FROB .F>)>\n\t\t <SET F <NEXT? .F>>>>"
  },
  "TRAP-DOOR-FCN": {
   "name": "TRAP-DOOR-FCN",
   "file": "1actions.zil",
   "line": 504,
   "endLine": 529,
   "source": "<ROUTINE TRAP-DOOR-FCN ()\n    <COND (<VERB? RAISE>\n\t   <PERFORM ,V?OPEN ,TRAP-DOOR>\n\t   <RTRUE>)\n\t  (<AND <VERB? OPEN CLOSE>\n\t\t<EQUAL? ,HERE ,LIVING-ROOM>>\n\t   <OPEN-CLOSE ,PRSO\n\"The door reluctantly opens to reveal a rickety staircase descending into\ndarkness.\"\n\"The door swings shut and closes.\">)\n\t  (<AND <VERB? LOOK-UNDER> <EQUAL? ,HERE LIVING-ROOM>>\n\t   <COND (<FSET? ,TRAP-DOOR ,OPENBIT>\n\t\t  <TELL\n\"You see a rickety staircase descending into darkness.\" CR>)\n\t\t (T <TELL \"It's closed.\" CR>)>)\n\t  (<EQUAL? ,HERE ,CELLAR>\n\t   <COND (<AND <VERB? OPEN UNLOCK>\n\t\t       <NOT <FSET? ,TRAP-DOOR ,OPENBIT>>>\n\t\t  <TELL\n\"The door is locked from above.\" CR>)\n\t\t (<AND <VERB? CLOSE> <NOT <FSET? ,TRAP-DOOR ,OPENBIT>>>\n\t\t  <FCLEAR ,TRAP-DOOR ,TOUCHBIT>\n\t\t  <FCLEAR ,TRAP-DOOR ,OPENBIT>\n\t\t  <TELL \"The door closes and locks.\" CR>)\n\t\t (<VERB? OPEN CLOSE>\n\t\t  <TELL <PICK-ONE ,DUMMY> CR>)>)>>"
  },
  "CELLAR-FCN": {
   "name": "CELLAR-FCN",
   "file": "1actions.zil",
   "line": 531,
   "endLine": 543,
   "source": "<ROUTINE CELLAR-FCN (RARG)\n  <COND (<EQUAL? .RARG ,M-LOOK>\n\t <TELL\n\"You are in a dark and damp cellar with a narrow passageway leading\nnorth, and a crawlway to the south. On the west is the bottom of a\nsteep metal ramp which is unclimbable.\" CR>)\n\t(<EQUAL? .RARG ,M-ENTER>\n\t <COND (<AND <FSET? ,TRAP-DOOR ,OPENBIT>\n\t\t     <NOT <FSET? ,TRAP-DOOR ,TOUCHBIT>>>\n\t\t<FCLEAR ,TRAP-DOOR ,OPENBIT>\n\t\t<FSET ,TRAP-DOOR ,TOUCHBIT>\n\t\t<TELL\n\"The trap door crashes shut, and you hear someone barring it.\" CR CR>)>)>>"
  },
  "CHIMNEY-F": {
   "name": "CHIMNEY-F",
   "file": "1actions.zil",
   "line": 545,
   "endLine": 551,
   "source": "<ROUTINE CHIMNEY-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"The chimney leads \">\n\t\t<COND (<==? ,HERE ,KITCHEN>\n\t\t       <TELL \"down\">)\n\t\t      (T <TELL \"up\">)>\n\t\t<TELL \"ward, and looks climbable.\" CR>)>>"
  },
  "UP-CHIMNEY-FUNCTION": {
   "name": "UP-CHIMNEY-FUNCTION",
   "file": "1actions.zil",
   "line": 553,
   "endLine": 565,
   "source": "<ROUTINE UP-CHIMNEY-FUNCTION (\"AUX\" F)\n  <COND (<NOT <SET F <FIRST? ,WINNER>>>\n\t <TELL \"Going up empty-handed is a bad idea.\" CR>\n\t <RFALSE>)\n\t(<AND <OR <NOT <SET F <NEXT? .F>>>\n\t\t  <NOT <NEXT? .F>>>\n\t      <IN? ,LAMP ,WINNER>>\n\t <COND (<NOT <FSET? ,TRAP-DOOR ,OPENBIT>>\n\t\t<FCLEAR ,TRAP-DOOR ,TOUCHBIT>)>\n\t <RETURN ,KITCHEN>)\n\t(T\n\t <TELL \"You can't get up there with what you're carrying.\" CR>\n\t <RFALSE>)>>"
  },
  "TRAP-DOOR-EXIT": {
   "name": "TRAP-DOOR-EXIT",
   "file": "1actions.zil",
   "line": 567,
   "endLine": 577,
   "source": "<ROUTINE TRAP-DOOR-EXIT ()\n\t <COND (,RUG-MOVED\n\t\t<COND (<FSET? ,TRAP-DOOR ,OPENBIT>\n\t\t       <RETURN ,CELLAR>)\n\t\t      (T\n\t\t       <TELL \"The trap door is closed.\" CR>\n\t\t       <THIS-IS-IT ,TRAP-DOOR>\n\t\t       <RFALSE>)>)\n\t       (T\n\t\t<TELL \"You can't go that way.\" CR>\n\t\t<RFALSE>)>>"
  },
  "RUG-FCN": {
   "name": "RUG-FCN",
   "file": "1actions.zil",
   "line": 579,
   "endLine": 616,
   "source": "<ROUTINE RUG-FCN ()\n   <COND (<VERB? RAISE>\n\t  <TELL \"The rug is too heavy to lift\">\n\t  <COND (,RUG-MOVED\n\t\t <TELL \".\" CR>)\n\t\t(T\n\t\t <TELL\n\", but in trying to take it you have\nnoticed an irregularity beneath it.\" CR>)>)\n\t (<VERB? MOVE PUSH>\n\t  <COND (,RUG-MOVED\n\t\t <TELL\n\"Having moved the carpet previously, you find it impossible to move\nit again.\" CR>)\n\t\t(T\n\t\t <TELL\n\"With a great effort, the rug is moved to one side of the room, revealing\nthe dusty cover of a closed trap door.\" CR>\n\t\t <FCLEAR ,TRAP-DOOR ,INVISIBLE>\n\t\t <THIS-IS-IT ,TRAP-DOOR>\n\t\t <SETG RUG-MOVED T>)>)\n\t (<VERB? TAKE>\n\t  <TELL\n\"The rug is extremely heavy and cannot be carried.\" CR>)\n\t (<AND <VERB? LOOK-UNDER>\n\t       <NOT ,RUG-MOVED>\n\t       <NOT <FSET? ,TRAP-DOOR ,OPENBIT>>>\n\t  <TELL\n\"Underneath the rug is a closed trap door. As you drop the corner of the\nrug, the trap door is once again concealed from view.\" CR>)\n\t (<VERB? CLIMB-ON>\n\t  <COND (<AND <NOT ,RUG-MOVED>\n\t\t      <NOT <FSET? ,TRAP-DOOR ,OPENBIT>>>\n\t\t <TELL\n\"As you sit, you notice an irregularity underneath it. Rather than be\nuncomfortable, you stand up again.\" CR>)\n\t\t(ELSE\n\t\t <TELL \"I suppose you think it's a magic carpet?\" CR>)>)>>"
  },
  "AXE-F": {
   "name": "AXE-F",
   "file": "1actions.zil",
   "line": 622,
   "endLine": 624,
   "source": "<ROUTINE AXE-F ()\n\t <COND (,TROLL-FLAG <>)\n\t       (T <WEAPON-FUNCTION ,AXE ,TROLL>)>>"
  },
  "STILETTO-FUNCTION": {
   "name": "STILETTO-FUNCTION",
   "file": "1actions.zil",
   "line": 626,
   "endLine": 627,
   "source": "<ROUTINE STILETTO-FUNCTION ()\n\t <WEAPON-FUNCTION ,STILETTO ,THIEF>>"
  },
  "WEAPON-FUNCTION": {
   "name": "WEAPON-FUNCTION",
   "file": "1actions.zil",
   "line": 629,
   "endLine": 638,
   "source": "<ROUTINE WEAPON-FUNCTION (W V)\n\t<COND (<NOT <IN? .V ,HERE>> <RFALSE>)\n\t      (<VERB? TAKE>\n\t       <COND (<IN? .W .V>\n\t\t      <TELL\n\"The \" D .V \" swings it out of your reach.\" CR>)\n\t\t     (T\n\t\t      <TELL\n\"The \" D .W \" seems white-hot. You can't hold on to it.\" CR>)>\n\t       T)>>"
  },
  "TROLL-FCN": {
   "name": "TROLL-FCN",
   "file": "1actions.zil",
   "line": 640,
   "endLine": 764,
   "source": "<ROUTINE TROLL-FCN (\"OPTIONAL\" (MODE <>))\n\t <COND (<VERB? TELL>\n\t\t<SETG P-CONT <>>\n\t\t<TELL \"The troll isn't much of a conversationalist.\" CR>)\n\t       (<EQUAL? .MODE ,F-BUSY?>\n\t\t<COND (<IN? ,AXE ,TROLL> <>)\n\t\t      (<AND <IN? ,AXE ,HERE> <PROB 75 90>>\n\t\t       <FSET ,AXE ,NDESCBIT>\n\t\t       <FCLEAR ,AXE ,WEAPONBIT>\n\t\t       <MOVE ,AXE ,TROLL>\n\t\t       <PUTP ,TROLL ,P?LDESC\n\"A nasty-looking troll, brandishing a bloody axe, blocks all passages out\nof the room.\">\n\t\t       <AND <IN? ,TROLL ,HERE>\n\t\t\t    <TELL\n\"The troll, angered and humiliated, recovers his weapon. He appears to have\nan axe to grind with you.\" CR>>\n\t\t      T)\n\t\t     (<IN? ,TROLL ,HERE>\n\t\t      <PUTP ,TROLL ,P?LDESC\n\"A pathetically babbling troll is here.\">\n\t\t      <TELL\n\"The troll, disarmed, cowers in terror, pleading for his life in\nthe guttural tongue of the trolls.\" CR>\n\t\t      T)>)\n\t      (<EQUAL? .MODE ,F-DEAD>\n\t       <COND (<IN? ,AXE ,TROLL>\n\t\t      <MOVE ,AXE ,HERE>\n\t\t      <FCLEAR ,AXE ,NDESCBIT>\n\t\t      <FSET ,AXE ,WEAPONBIT>)>\n\t       <SETG TROLL-FLAG T>)\n\t      (<EQUAL? .MODE ,F-UNCONSCIOUS>\n\t       <FCLEAR ,TROLL ,FIGHTBIT>\n\t       <COND (<IN? ,AXE ,TROLL>\n\t\t      <MOVE ,AXE ,HERE>\n\t\t      <FCLEAR ,AXE ,NDESCBIT>\n\t\t      <FSET ,AXE ,WEAPONBIT>)>\n\t       <PUTP ,TROLL ,P?LDESC\n\"An unconscious troll is sprawled on the floor. All passages\nout of the room are open.\">\n\t       <SETG TROLL-FLAG T>)\n\t      (<EQUAL? .MODE ,F-CONSCIOUS>\n\t       <COND (<IN? ,TROLL ,HERE>\n\t\t      <FSET ,TROLL ,FIGHTBIT>\n\t\t      <TELL\n\"The troll stirs, quickly resuming a fighting stance.\" CR>)>\n\t       <COND (<IN? ,AXE ,TROLL>\n\t\t      <PUTP ,TROLL ,P?LDESC\n\"A nasty-looking troll, brandishing a bloody axe, blocks\nall passages out of the room.\">)\n\t\t     (<IN? ,AXE ,TROLL-ROOM>\n\t\t      <FSET ,AXE ,NDESCBIT>\n\t\t      <FCLEAR ,AXE ,WEAPONBIT>\n\t\t      <MOVE ,AXE ,TROLL>\n\t\t      <PUTP ,TROLL ,P?LDESC\n\"A nasty-looking troll, brandishing a bloody axe, blocks\nall passages out of the room.\">)\n\t\t     (T\n\t\t      <PUTP ,TROLL ,P?LDESC\n\"A troll is here.\">)>\n\t       <SETG TROLL-FLAG <>>)\n\t      (<EQUAL? .MODE ,F-FIRST?>\n\t       <COND (<PROB 33>\n\t\t      <FSET ,TROLL ,FIGHTBIT>\n\t\t      <SETG P-CONT <>>\n\t\t      T)>)\n\t      (<NOT .MODE>\n\t       <COND (<VERB? EXAMINE>\n\t\t      <TELL <GETP ,TROLL ,P?LDESC> CR>)\n\t\t     (<OR <AND <VERB? THROW GIVE>\n\t\t\t       ,PRSO\n\t\t\t       <EQUAL? ,PRSI ,TROLL>>\n\t\t\t  <VERB? TAKE MOVE MUNG>>\n\t\t      <AWAKEN ,TROLL>\n\t\t      <COND (<VERB? THROW GIVE>\n\t\t\t     <COND (<AND <EQUAL? ,PRSO ,AXE>\n\t\t\t\t\t <IN? ,AXE ,WINNER>>\n\t\t\t\t    <TELL\n\"The troll scratches his head in confusion, then takes the axe.\" CR>\n\t\t\t\t    <FSET ,TROLL ,FIGHTBIT>\n\t\t\t\t    <MOVE ,AXE ,TROLL>\n\t\t\t\t    <RTRUE>)\n\t\t\t\t   (<EQUAL? ,PRSO ,TROLL ,AXE>\n\t\t\t\t    <TELL\n\"You would have to get the \" D ,PRSO \" first, and that seems unlikely.\" CR>\n\t\t\t\t    <RTRUE>)>\n\t\t\t     <COND (<VERB? THROW>\n\t\t\t\t    <TELL\n\"The troll, who is remarkably coordinated, catches the \" D ,PRSO>)\n\t\t\t\t   (T\n\t\t\t\t    <TELL\n\"The troll, who is not overly proud, graciously accepts the gift\">)>\n\t\t\t     <COND (<AND <PROB 20>\n\t\t\t\t\t <EQUAL? ,PRSO ,KNIFE ,SWORD ,AXE>>\n\t\t\t\t    <REMOVE-CAREFULLY ,PRSO>\n\t\t\t\t    <TELL\n\" and eats it hungrily. Poor troll, he dies from an internal hemorrhage\nand his carcass disappears in a sinister black fog.\" CR>\n\t\t\t\t    <REMOVE-CAREFULLY ,TROLL>\n\t\t\t\t    <APPLY <GETP ,TROLL ,P?ACTION> ,F-DEAD>\n\t\t\t\t    <SETG TROLL-FLAG T>)\n\t\t\t\t   (<EQUAL? ,PRSO ,KNIFE ,SWORD ,AXE>\n\t\t\t\t    <MOVE ,PRSO ,HERE>\n\t\t\t\t    <TELL\n\" and, being for the moment sated, throws it back. Fortunately, the\ntroll has poor control, and the \" D ,PRSO \" falls to the floor. He does\nnot look pleased.\" CR>\n\t\t\t\t    <FSET ,TROLL ,FIGHTBIT>)\n\t\t\t\t   (T\n\t\t\t\t    <TELL\n\" and not having the most discriminating tastes, gleefully eats it.\" CR>\n\t\t\t\t    <REMOVE-CAREFULLY ,PRSO>)>)\n\t\t\t    (<VERB? TAKE MOVE>\n\t\t\t     <TELL\n\"The troll spits in your face, grunting \\\"Better luck next time\\\" in a\nrather barbarous accent.\" CR>)\n\t\t\t    (<VERB? MUNG>\n\t\t\t     <TELL\n\"The troll laughs at your puny gesture.\" CR>)>)\n\t\t     (<VERB? LISTEN>\n\t\t      <TELL\n\"Every so often the troll says something, probably uncomplimentary, in\nhis guttural tongue.\" CR>)\n\t\t     (<AND ,TROLL-FLAG <VERB? HELLO>>\n\t\t      <TELL \"Unfortunately, the troll can't hear you.\" CR>)>)>>"
  },
  "LEAVES-APPEAR": {
   "name": "LEAVES-APPEAR",
   "file": "1actions.zil",
   "line": 774,
   "endLine": 784,
   "source": "<ROUTINE LEAVES-APPEAR ()\n\t<COND (<AND <NOT <FSET? ,GRATE ,OPENBIT>>\n\t            <NOT ,GRATE-REVEALED>>\n\t       <COND (<VERB? MOVE TAKE>\n\t\t      <TELL\n\"In disturbing the pile of leaves, a grating is revealed.\" CR>)\n\t\t     (T <TELL\n\"With the leaves moved, a grating is revealed.\" CR>)>\n\t       <FCLEAR ,GRATE ,INVISIBLE>\n\t       <SETG GRATE-REVEALED T>)>\n\t<>>"
  },
  "LEAF-PILE": {
   "name": "LEAF-PILE",
   "file": "1actions.zil",
   "line": 786,
   "endLine": 813,
   "source": "<ROUTINE LEAF-PILE ()\n\t<COND (<VERB? COUNT>\n\t       <TELL \"There are 69,105 leaves here.\" CR>)\n\t      (<VERB? BURN>\n\t       <LEAVES-APPEAR>\n\t       <REMOVE-CAREFULLY ,PRSO>\n\t       <COND (<IN? ,PRSO ,HERE>\n\t\t      <TELL\n\"The leaves burn.\" CR>)\n\t\t     (T\n\t\t      <JIGS-UP\n\"The leaves burn, and so do you.\">)>)\n\t      (<VERB? CUT>\n\t       <TELL \"You rustle the leaves around, making quite a mess.\" CR>\n\t       <LEAVES-APPEAR>\n\t       <RTRUE>)\n\t      (<VERB? MOVE TAKE>\n\t       <COND (<VERB? MOVE>\n\t\t      <TELL \"Done.\" CR>)>\n\t       <COND (,GRATE-REVEALED <RFALSE>)>\n\t       <LEAVES-APPEAR>\n\t       <COND (<VERB? TAKE> <RFALSE>)\n\t\t     (T <RTRUE>)>)\n\t      (<AND <VERB? LOOK-UNDER>\n\t\t    <NOT ,GRATE-REVEALED>>\n\t       <TELL\n\"Underneath the pile of leaves is a grating. As you release the leaves,\nthe grating is once again concealed from view.\" CR>)>>"
  },
  "CLEARING-FCN": {
   "name": "CLEARING-FCN",
   "file": "1actions.zil",
   "line": 815,
   "endLine": 831,
   "source": "<ROUTINE CLEARING-FCN (RARG)\n  \t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<COND (<NOT ,GRATE-REVEALED>\n\t\t       <FSET ,GRATE ,INVISIBLE>)>)\n\t       (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are in a clearing, with a forest surrounding you on all sides. A\npath leads south.\">\n\t\t<COND (<FSET? ,GRATE ,OPENBIT>\n\t\t       <CRLF>\n\t\t       <TELL\n\"There is an open grating, descending into darkness.\">)\n\t\t      (,GRATE-REVEALED\n\t\t       <CRLF>\n\t\t       <TELL\n\"There is a grating securely fastened into the ground.\">)>\n\t\t<CRLF>)>>"
  },
  "MAZE-11-FCN": {
   "name": "MAZE-11-FCN",
   "file": "1actions.zil",
   "line": 833,
   "endLine": 848,
   "source": "<ROUTINE MAZE-11-FCN (RARG)\n  \t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<FCLEAR ,GRATE ,INVISIBLE>)\n\t       (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are in a small room near the maze. There are twisty passages\nin the immediate vicinity.\" CR>\n\t\t<COND (<FSET? ,GRATE ,OPENBIT>\n\t\t       <TELL\n \"Above you is an open grating with sunlight pouring in.\">)\n\t\t      (,GRUNLOCK\n\t\t       <TELL \"Above you is a grating.\">)\n\t\t      (T\n\t\t       <TELL\n \"Above you is a grating locked with a skull-and-crossbones lock.\">)>\n\t\t<CRLF>)>>"
  },
  "GRATE-FUNCTION": {
   "name": "GRATE-FUNCTION",
   "file": "1actions.zil",
   "line": 850,
   "endLine": 896,
   "source": "<ROUTINE GRATE-FUNCTION ()\n    \t <COND (<AND <VERB? OPEN> <EQUAL? ,PRSI ,KEYS>>\n\t\t<PERFORM ,V?UNLOCK ,GRATE ,KEYS>\n\t\t<RTRUE>)\n\t       (<VERB? LOCK>\n\t\t<COND (<EQUAL? ,HERE ,GRATING-ROOM>\n\t\t       <SETG GRUNLOCK <>>\n\t\t       <TELL \"The grate is locked.\" CR>)\n\t              (<EQUAL? ,HERE ,GRATING-CLEARING>\n\t\t       <TELL \"You can't lock it from this side.\" CR>)>)\n\t       (<AND <VERB? UNLOCK> <EQUAL? ,PRSO ,GRATE>>\n\t\t<COND (<AND <EQUAL? ,HERE ,GRATING-ROOM> <EQUAL? ,PRSI ,KEYS>>\n\t\t       <SETG GRUNLOCK T>\n\t\t       <TELL \"The grate is unlocked.\" CR>)\n\t\t      (<AND <EQUAL? ,HERE ,GRATING-CLEARING>\n\t\t\t    <EQUAL? ,PRSI ,KEYS>>\n\t\t       <TELL \"You can't reach the lock from here.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"Can you unlock a grating with a \" D ,PRSI \"?\" CR>)>)\n               (<VERB? PICK>\n\t\t<TELL \"You can't pick the lock.\" CR>)\n               (<VERB? OPEN CLOSE>\n\t\t<COND (,GRUNLOCK\n\t\t       <OPEN-CLOSE ,GRATE\n\t\t\t\t   <COND (<EQUAL? ,HERE ,CLEARING>\n\t\t\t\t\t  \"The grating opens.\")\n\t\t\t\t\t (T\n\"The grating opens to reveal trees above you.\")>\n\t\t\t\t   \"The grating is closed.\">\n\t\t       <COND (<FSET? ,GRATE ,OPENBIT>\n\t\t\t      <COND (<AND <NOT <EQUAL? ,HERE ,CLEARING>>\n\t\t\t\t\t  <NOT ,GRATE-REVEALED>>\n\t\t\t\t     <TELL\n\"A pile of leaves falls onto your head and to the ground.\" CR>\n\t\t\t\t     <SETG GRATE-REVEALED T>\n\t\t\t\t     <MOVE ,LEAVES ,HERE>)>\n\t\t\t      <FSET ,GRATING-ROOM ,ONBIT>)\n\t\t\t     (T <FCLEAR ,GRATING-ROOM ,ONBIT>)>)\n\t\t      (T <TELL \"The grating is locked.\" CR>)>)\n\t       (<AND <VERB? PUT> <EQUAL? ,PRSI ,GRATE>>\n\t\t<COND (<G? <GETP ,PRSO ,P?SIZE> 20>\n\t\t       <TELL \"It won't fit through the grating.\" CR>)\n\t\t      (T\n\t\t       <MOVE ,PRSO ,GRATING-ROOM>\n\t\t       <TELL\n\"The \" D ,PRSO \" goes through the grating into the darkness below.\" CR>)>)>>"
  },
  "MAZE-DIODES": {
   "name": "MAZE-DIODES",
   "file": "1actions.zil",
   "line": 898,
   "endLine": 905,
   "source": "<ROUTINE MAZE-DIODES ()\n\t <TELL\n\"You won't be able to get back up to the tunnel you are going through\nwhen it gets to the next room.\" CR CR>\n\t <COND (<EQUAL? ,HERE ,MAZE-2> ,MAZE-4)\n\t       (<EQUAL? ,HERE ,MAZE-7> ,DEAD-END-1)\n\t       (<EQUAL? ,HERE ,MAZE-9> ,MAZE-11)\n\t       (<EQUAL? ,HERE ,MAZE-12> ,MAZE-5)>>"
  },
  "RUSTY-KNIFE-FCN": {
   "name": "RUSTY-KNIFE-FCN",
   "file": "1actions.zil",
   "line": 907,
   "endLine": 924,
   "source": "<ROUTINE RUSTY-KNIFE-FCN ()\n\t<COND (<VERB? TAKE>\n\t       <AND <IN? ,SWORD ,WINNER>\n\t\t    <TELL\n\"As you touch the rusty knife, your sword gives a single pulse of blinding\nblue light.\" CR>>\n\t       <>)\n\t      (<OR <AND <EQUAL? ,PRSI ,RUSTY-KNIFE>\n\t\t\t<VERB? ATTACK>>\n\t\t   <AND <VERB? SWING>\n\t\t\t<EQUAL? ,PRSO ,RUSTY-KNIFE>\n\t\t\t,PRSI>>\n\t       <REMOVE-CAREFULLY ,RUSTY-KNIFE>\n\t       <JIGS-UP\n\"As the knife approaches its victim, your mind is submerged by an\novermastering will. Slowly, your hand turns, until the rusty blade\nis an inch from your neck. The knife seems to sing as it savagely\nslits your throat.\">)>>"
  },
  "KNIFE-F": {
   "name": "KNIFE-F",
   "file": "1actions.zil",
   "line": 926,
   "endLine": 929,
   "source": "<ROUTINE KNIFE-F ()\n\t <COND (<VERB? TAKE>\n\t\t<FCLEAR ,ATTIC-TABLE ,NDESCBIT>\n\t\t<RFALSE>)>>"
  },
  "SKELETON": {
   "name": "SKELETON",
   "file": "1actions.zil",
   "line": 931,
   "endLine": 940,
   "source": "<ROUTINE SKELETON ()\n\t <COND (<VERB? TAKE RUB MOVE PUSH RAISE LOWER ATTACK KICK KISS>\n\t\t<TELL\n\"A ghost appears in the room and is appalled at your desecration of\nthe remains of a fellow adventurer. He casts a curse on your valuables\nand banishes them to the Land of the Living Dead. The ghost leaves,\nmuttering obscenities.\" CR>\n\t \t<ROB ,HERE ,LAND-OF-LIVING-DEAD 100>\n\t \t<ROB ,ADVENTURER ,LAND-OF-LIVING-DEAD>\n\t \tT)>>"
  },
  "TORCH-OBJECT": {
   "name": "TORCH-OBJECT",
   "file": "1actions.zil",
   "line": 944,
   "endLine": 952,
   "source": "<ROUTINE TORCH-OBJECT ()\n    <COND (<VERB? EXAMINE>\n\t   <TELL \"The torch is burning.\" CR>)\n\t  (<AND <VERB? POUR-ON>\n\t\t<EQUAL? ,PRSI ,TORCH>>\n\t   <TELL \"The water evaporates before it gets close.\" CR>)\n\t  (<AND <VERB? LAMP-OFF> <FSET? ,PRSO ,ONBIT>>\n\t   <TELL\n\"You nearly burn your hand trying to extinguish the flame.\" CR>)>>"
  },
  "MIRROR-ROOM": {
   "name": "MIRROR-ROOM",
   "file": "1actions.zil",
   "line": 958,
   "endLine": 966,
   "source": "<ROUTINE MIRROR-ROOM (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t        <TELL\n\"You are in a large square room with tall ceilings. On the south wall\nis an enormous mirror which fills the entire wall. There are exits\non the other three sides of the room.\" CR>\n\t\t<COND (,MIRROR-MUNG\n\t\t       <TELL\n\"Unfortunately, the mirror has been destroyed by your recklessness.\" CR>)>)>>"
  },
  "MIRROR-MIRROR": {
   "name": "MIRROR-MIRROR",
   "file": "1actions.zil",
   "line": 971,
   "endLine": 1012,
   "source": "<ROUTINE MIRROR-MIRROR (\"AUX\" (RM2 ,MIRROR-ROOM-2) L1 L2 N)\n\t<COND (<AND <NOT ,MIRROR-MUNG> <VERB? RUB>>\n\t       <COND (<AND ,PRSI <NOT <EQUAL? ,PRSI ,HANDS>>>\n\t\t      <TELL\n\"You feel a faint tingling transmitted through the \" D ,PRSI \".\" CR>\n\t\t      <RTRUE>)>\n\t       <COND (<EQUAL? ,HERE .RM2>\n\t\t      <SET RM2 ,MIRROR-ROOM-1>)>\n\t       <SET L1 <FIRST? ,HERE>>\n\t       <SET L2 <FIRST? .RM2>>\n\t       <REPEAT ()\n\t\t       <COND (<NOT .L1> <RETURN>)>\n\t\t       <SET N <NEXT? .L1>>\n\t\t       <MOVE .L1 .RM2>\n\t\t       <SET L1 .N>>\n\t       <REPEAT ()\n\t\t       <COND (<NOT .L2> <RETURN>)>\n\t\t       <SET N <NEXT? .L2>>\n\t\t       <MOVE .L2 ,HERE>\n\t\t       <SET L2 .N>>\n\t       <GOTO .RM2 <>>\n\t       <TELL\n\"There is a rumble from deep within the earth and the room shakes.\" CR>)\n\t      (<VERB? LOOK-INSIDE EXAMINE>\n\t       <COND (,MIRROR-MUNG\n\t\t      <TELL \"The mirror is broken into many pieces.\">)\n\t\t     (T\n\t\t      <TELL \"There is an ugly person staring back at you.\">)>\n\t       <CRLF>)\n\t      (<VERB? TAKE>\n\t       <TELL\n\"The mirror is many times your size. Give up.\" CR>)\n\t      (<VERB? MUNG THROW ATTACK>\n\t       <COND (,MIRROR-MUNG\n\t\t      <TELL\n\"Haven't you done enough damage already?\" CR>)\n\t\t     (T\n\t\t      <SETG MIRROR-MUNG T>\n\t\t      <SETG LUCKY <>>\n\t\t      <TELL\n\"You have broken the mirror. I hope you have a seven years' supply of\ngood luck handy.\" CR>)>)>>"
  },
  "TORCH-ROOM-FCN": {
   "name": "TORCH-ROOM-FCN",
   "file": "1actions.zil",
   "line": 1018,
   "endLine": 1028,
   "source": "<ROUTINE TORCH-ROOM-FCN (RARG)\n \t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a large room with a prominent doorway leading to a down\nstaircase. Above you is a large dome. Up around the edge of the\ndome (20 feet up) is a wooden railing. In the center of the room\nsits a white marble pedestal.\" CR>\n\t\t<COND (,DOME-FLAG\n\t\t       <TELL\n\"A piece of rope descends from the railing above, ending some\nfive feet above your head.\" CR>)>)>>"
  },
  "DOME-ROOM-FCN": {
   "name": "DOME-ROOM-FCN",
   "file": "1actions.zil",
   "line": 1030,
   "endLine": 1050,
   "source": "<ROUTINE DOME-ROOM-FCN (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are at the periphery of a large dome, which forms the ceiling\nof another room below. Protecting you from a precipitous drop is a\nwooden railing which circles the dome.\" CR>\n\t\t<COND (,DOME-FLAG\n\t\t       <TELL\n\"Hanging down from the railing is a rope which ends about ten feet\nfrom the floor below.\" CR>)>)\n\t       (<EQUAL? .RARG ,M-ENTER>\n\t\t<COND (,DEAD\n\t\t       <TELL\n\"As you enter the dome you feel a strong pull as if from a wind\ndrawing you over the railing and down.\" CR>\n\t\t       <MOVE ,WINNER ,TORCH-ROOM>\n\t\t       <SETG HERE ,TORCH-ROOM>\n\t\t       <RTRUE>)\n\t\t      (<VERB? LEAP>\n\t\t       <JIGS-UP\n\"I'm afraid that the leap you attempted has done you in.\">)>)>>"
  },
  "LLD-ROOM": {
   "name": "LLD-ROOM",
   "file": "1actions.zil",
   "line": 1058,
   "endLine": 1125,
   "source": "<ROUTINE LLD-ROOM (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are outside a large gateway, on which is inscribed||\n  Abandon every hope\nall ye who enter here!||\nThe gate is open; through it you can see a desolation, with a pile of\nmangled bodies in one corner. Thousands of voices, lamenting some\nhideous fate, can be heard.\" CR>\n\t\t<COND (<AND <NOT ,LLD-FLAG> <NOT ,DEAD>>\n\t\t       <TELL\n\"The way through the gate is barred by evil spirits, who jeer at your\nattempts to pass.\" CR>)>)\n\t       (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<VERB? EXORCISE>\n\t\t       <COND (<NOT ,LLD-FLAG>\n\t\t\t      <COND (<AND <IN? ,BELL ,WINNER>\n\t\t\t\t\t  <IN? ,BOOK ,WINNER>\n\t\t\t\t\t  <IN? ,CANDLES ,WINNER>>\n\t\t\t\t     <TELL\n\"You must perform the ceremony.\" CR>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL\n\"You aren't equipped for an exorcism.\" CR>)>)>)\n\t\t      (<AND <NOT ,LLD-FLAG>\n\t\t\t    <VERB? RING>\n\t\t\t    <EQUAL? ,PRSO ,BELL>>\n\t\t       <SETG XB T>\n\t\t       <REMOVE-CAREFULLY ,BELL>\n\t\t       <THIS-IS-IT ,HOT-BELL>\n\t\t       <MOVE ,HOT-BELL ,HERE>\n\t\t       <TELL\n\"The bell suddenly becomes red hot and falls to the ground. The\nwraiths, as if paralyzed, stop their jeering and slowly turn to face\nyou. On their ashen faces, the expression of a long-forgotten terror\ntakes shape.\" CR>\n\t\t       <COND (<IN? ,CANDLES ,WINNER>\n\t\t\t      <TELL\n\"In your confusion, the candles drop to the ground (and they are out).\" CR>\n\t\t\t      <MOVE ,CANDLES ,HERE>\n\t\t\t      <FCLEAR ,CANDLES ,ONBIT>\n\t\t\t      <DISABLE <INT I-CANDLES>>)>\n\t\t       <ENABLE <QUEUE I-XB 6>>\n\t\t       <ENABLE <QUEUE I-XBH 20>>)\n\t\t      (<AND ,XC\n\t\t\t    <VERB? READ>\n\t\t\t    <EQUAL? ,PRSO ,BOOK>\n\t\t\t    <NOT ,LLD-FLAG>>\n\t\t       <TELL\n\"Each word of the prayer reverberates through the hall in a deafening\nconfusion. As the last word fades, a voice, loud and commanding,\nspeaks: \\\"Begone, fiends!\\\" A heart-stopping scream fills the cavern,\nand the spirits, sensing a greater power, flee through the walls.\" CR>\n\t\t       <REMOVE-CAREFULLY ,GHOSTS>\n\t\t       <SETG LLD-FLAG T>\n\t\t       <DISABLE <INT I-XC>>)>)\n\t       (<EQUAL? .RARG ,M-END>\n\t\t<COND (<AND ,XB\n\t\t\t    <IN? ,CANDLES ,WINNER>\n\t\t\t    <FSET? ,CANDLES ,ONBIT>\n\t\t\t    <NOT ,XC>>\n\t\t       <SETG XC T>\n\t\t       <TELL\n\"The flames flicker wildly and appear to dance. The earth beneath\nyour feet trembles, and your legs nearly buckle beneath you.\nThe spirits cower at your unearthly power.\" CR>\n\t\t       <DISABLE <INT I-XB>>\n\t\t       <ENABLE <QUEUE I-XC 3>>)>)>>"
  },
  "I-XB": {
   "name": "I-XB",
   "file": "1actions.zil",
   "line": 1131,
   "endLine": 1137,
   "source": "<ROUTINE I-XB ()\n\t <OR ,XC\n\t     <AND <EQUAL? ,HERE ,ENTRANCE-TO-HADES>\n\t\t  <TELL\n\"The tension of this ceremony is broken, and the wraiths, amused but\nshaken at your clumsy attempt, resume their hideous jeering.\" CR>>>\n\t <SETG XB <>>>"
  },
  "I-XC": {
   "name": "I-XC",
   "file": "1actions.zil",
   "line": 1139,
   "endLine": 1141,
   "source": "<ROUTINE I-XC ()\n\t <SETG XC <>>\n\t <I-XB>>"
  },
  "I-XBH": {
   "name": "I-XBH",
   "file": "1actions.zil",
   "line": 1143,
   "endLine": 1147,
   "source": "<ROUTINE I-XBH ()\n\t <REMOVE-CAREFULLY ,HOT-BELL>\n\t <MOVE ,BELL ,ENTRANCE-TO-HADES>\n\t <COND (<EQUAL? ,HERE ,ENTRANCE-TO-HADES>\n\t\t<TELL \"The bell appears to have cooled down.\" CR>)>>"
  },
  "DAM-ROOM-FCN": {
   "name": "DAM-ROOM-FCN",
   "file": "1actions.zil",
   "line": 1156,
   "endLine": 1185,
   "source": "<ROUTINE DAM-ROOM-FCN (RARG)\n   \t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are standing on the top of the Flood Control Dam #3, which was\nquite a tourist attraction in times far distant. There are paths to\nthe north, south, and west, and a scramble down.\" CR>\n\t\t<COND (<AND ,LOW-TIDE ,GATES-OPEN>\n\t\t       <TELL\n\"The water level behind the dam is low: The sluice gates have been\nopened. Water rushes through the dam and downstream.\" CR>)\n\t\t      (,GATES-OPEN\n\t\t       <TELL\n\"The sluice gates are open, and water rushes through the dam. The\nwater level behind the dam is still high.\" CR>)\n\t\t      (,LOW-TIDE\n\t\t       <TELL\n\"The sluice gates are closed. The water level in the reservoir is\nquite low, but the level is rising quickly.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"The sluice gates on the dam are closed. Behind the dam, there can be\nseen a wide reservoir. Water is pouring over the top of the now\nabandoned dam.\" CR>)>\n\t\t<TELL\n\"There is a control panel here, on which a large metal bolt is mounted.\nDirectly above the bolt is a small green plastic bubble\">\n\t\t<COND (,GATE-FLAG\n\t\t       <TELL \" which is\nglowing serenely\">)>\n\t\t<TELL \".\" CR>)>>"
  },
  "BOLT-F": {
   "name": "BOLT-F",
   "file": "1actions.zil",
   "line": 1187,
   "endLine": 1217,
   "source": "<ROUTINE BOLT-F ()\n\t<COND (<VERB? TURN>\n\t       <COND (<EQUAL? ,PRSI ,WRENCH>\n\t\t      <COND (,GATE-FLAG\n\t\t\t     <FCLEAR ,RESERVOIR-SOUTH ,TOUCHBIT>\n\t\t\t     <COND (,GATES-OPEN\n\t\t\t\t    <SETG GATES-OPEN <>>\n\t\t\t\t    <FCLEAR ,LOUD-ROOM ,TOUCHBIT>\n\t\t\t\t    <TELL\n\"The sluice gates close and water starts to collect behind the dam.\" CR>\n\t\t\t\t    <ENABLE <QUEUE I-RFILL 8>>\n\t\t\t\t    <QUEUE I-REMPTY 0>\n\t\t\t\t    T)\n\t\t\t\t   (T\n\t\t\t\t    <SETG GATES-OPEN T>\n\t\t\t\t    <TELL\n\"The sluice gates open and water pours through the dam.\" CR>\n\t\t\t\t    <ENABLE <QUEUE I-REMPTY 8>>\n\t\t\t\t    <QUEUE I-RFILL 0>\n\t\t\t\t    T)>)\n\t\t\t    (T <TELL\n\"The bolt won't turn with your best effort.\" CR>)>)\n\t\t     (ELSE\n\t\t      <TELL\n\"The bolt won't turn using the \" D ,PRSI \".\" CR>)>)\n\t      (<VERB? TAKE>\n\t       <INTEGRAL-PART>)\n\t      (<VERB? OIL>\n\t       <TELL\n\"Hmm. It appears the tube contained glue, not oil. Turning the bolt\nwon't get any easier....\" CR>)>>"
  },
  "BUBBLE-F": {
   "name": "BUBBLE-F",
   "file": "1actions.zil",
   "line": 1219,
   "endLine": 1221,
   "source": "<ROUTINE BUBBLE-F ()\n\t <COND (<VERB? TAKE>\n\t\t<INTEGRAL-PART>)>>"
  },
  "INTEGRAL-PART": {
   "name": "INTEGRAL-PART",
   "file": "1actions.zil",
   "line": 1223,
   "endLine": 1224,
   "source": "<ROUTINE INTEGRAL-PART ()\n\t <TELL \"It is an integral part of the control panel.\" CR>>"
  },
  "I-RFILL": {
   "name": "I-RFILL",
   "file": "1actions.zil",
   "line": 1226,
   "endLine": 1259,
   "source": "<ROUTINE I-RFILL ()\n\t <FSET ,RESERVOIR ,NONLANDBIT>\n\t <FCLEAR ,RESERVOIR ,RLANDBIT>\n\t <FCLEAR ,DEEP-CANYON ,TOUCHBIT>\n\t <FCLEAR ,LOUD-ROOM ,TOUCHBIT>\n\t <AND <IN? ,TRUNK ,RESERVOIR>\n\t      <FSET ,TRUNK ,INVISIBLE>>\n\t <SETG LOW-TIDE <>>\n\t <COND (<EQUAL? ,HERE ,RESERVOIR>\n\t\t<COND (<FSET? <LOC ,WINNER> ,VEHBIT>\n\t\t       <TELL\n\"The boat lifts gently out of the mud and is now floating on\nthe reservoir.\" CR>)\n\t\t      (T\n\t\t       <JIGS-UP\n\"You are lifted up by the rising river! You try to swim, but the\ncurrents are too strong. You come closer, closer to the awesome\nstructure of Flood Control Dam #3. The dam beckons to you.\nThe roar of the water nearly deafens you, but you remain conscious\nas you tumble over the dam toward your certain doom among the rocks\nat its base.\">)>)\n\t       (<EQUAL? ,HERE ,DEEP-CANYON>\n\t\t<TELL\n\"A sound, like that of flowing water, starts to come from below.\" CR>)\n\t       (<EQUAL? ,HERE ,LOUD-ROOM>\n\t\t<TELL\n\"All of a sudden, an alarmingly loud roaring sound fills the room.\nFilled with fear, you scramble away.\" CR>\n\t\t<GOTO <PICK-ONE ,LOUD-RUNS>>)\n\t       (<EQUAL? ,HERE ,RESERVOIR-NORTH ,RESERVOIR-SOUTH>\n\t\t<TELL\n\"You notice that the water level has risen to the point that it\nis impossible to cross.\" CR>)>\n\t T>"
  },
  "I-REMPTY": {
   "name": "I-REMPTY",
   "file": "1actions.zil",
   "line": 1263,
   "endLine": 1282,
   "source": "<ROUTINE I-REMPTY ()\n\t <FSET ,RESERVOIR ,RLANDBIT>\n\t <FCLEAR ,RESERVOIR ,NONLANDBIT>\n\t <FCLEAR ,DEEP-CANYON ,TOUCHBIT>\n\t <FCLEAR ,LOUD-ROOM ,TOUCHBIT>\n\t <FCLEAR ,TRUNK ,INVISIBLE>\n\t <SETG LOW-TIDE T>\n\t <COND (<AND <EQUAL? ,HERE ,RESERVOIR>\n\t\t     <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t<TELL\n\"The water level has dropped to the point at which the boat can no\nlonger stay afloat. It sinks into the mud.\" CR>)\n\t       (<EQUAL? ,HERE ,DEEP-CANYON>\n\t\t<TELL\n\"The roar of rushing water is quieter now.\" CR>)\n\t       (<EQUAL? ,HERE ,RESERVOIR-NORTH ,RESERVOIR-SOUTH>\n\t\t<TELL\n\"The water level is now quite low here and you could easily cross over\nto the other side.\" CR>)>\n\t T>"
  },
  "BUTTON-F": {
   "name": "BUTTON-F",
   "file": "1actions.zil",
   "line": 1298,
   "endLine": 1330,
   "source": "<ROUTINE BUTTON-F ()\n\t <COND (<VERB? READ>\n\t\t<TELL \"They're greek to you.\" CR>)\n\t       (<VERB? PUSH>\n\t\t<COND (<EQUAL? ,PRSO ,BLUE-BUTTON>\n\t\t       <COND (<0? ,WATER-LEVEL>\n\t\t\t      <FCLEAR ,LEAK ,INVISIBLE>\n\t\t\t      <TELL\n\"There is a rumbling sound and a stream of water appears to burst\nfrom the east wall of the room (apparently, a leak has occurred in a\npipe).\" CR>\n\t\t\t      <SETG WATER-LEVEL 1>\n\t\t\t      <ENABLE <QUEUE I-MAINT-ROOM -1>>\n\t\t\t      T)\n\t\t\t     (T\n\t\t\t      <TELL\n\t\t\t        \"The blue button appears to be jammed.\" CR>)>)\n\t\t      (<EQUAL? ,PRSO ,RED-BUTTON>\n\t\t       <TELL \"The lights within the room \">\n\t\t       <COND (<FSET? ,HERE ,ONBIT>\n\t\t\t      <FCLEAR ,HERE ,ONBIT>\n\t\t\t      <TELL \"shut off.\" CR>)\n\t\t\t     (T\n\t\t\t      <FSET ,HERE ,ONBIT>\n\t\t\t      <TELL \"come on.\" CR>)>)\n\t\t      (<EQUAL? ,PRSO ,BROWN-BUTTON>\n\t\t       <FCLEAR ,DAM-ROOM ,TOUCHBIT>\n\t\t       <SETG GATE-FLAG <>>\n\t\t       <TELL \"Click.\" CR>)\n\t\t      (<EQUAL? ,PRSO ,YELLOW-BUTTON>\n\t\t       <FCLEAR ,DAM-ROOM ,TOUCHBIT>\n\t\t       <SETG GATE-FLAG T>\n\t\t       <TELL \"Click.\" CR>)>)>>"
  },
  "TOOL-CHEST-FCN": {
   "name": "TOOL-CHEST-FCN",
   "file": "1actions.zil",
   "line": 1332,
   "endLine": 1341,
   "source": "<ROUTINE TOOL-CHEST-FCN ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"The chests are all empty.\" CR>)\n\t       (<VERB? TAKE OPEN PUT>\n\t\t<REMOVE-CAREFULLY ,TOOL-CHEST>\n<TELL\n\"The chests are so rusty and corroded that they crumble when you\ntouch them.\" CR>)\n\t       (<VERB? OPEN>\n\t\t<TELL \"The chests are already open.\" CR>)>>"
  },
  "I-MAINT-ROOM": {
   "name": "I-MAINT-ROOM",
   "file": "1actions.zil",
   "line": 1343,
   "endLine": 1360,
   "source": "<ROUTINE I-MAINT-ROOM (\"AUX\" HERE?)\n\t <SET HERE? <EQUAL? ,HERE ,MAINTENANCE-ROOM>>\n\t <COND (.HERE? <TELL \"The water level here is now \"> <TELL <GET\n\t\t,DROWNINGS </ ,WATER-LEVEL 2>>> <CRLF>)>\n\t <SETG WATER-LEVEL <+ 1 ,WATER-LEVEL>>\n\t <COND (<NOT <L? ,WATER-LEVEL 14>>\n\t\t<MUNG-ROOM ,MAINTENANCE-ROOM\n\"The room is full of water and cannot be entered.\">\n\t\t<QUEUE I-MAINT-ROOM 0>\n\t\t<COND (.HERE?\n\t\t     <JIGS-UP\n\"I'm afraid you have done drowned yourself.\">)>)\n\t       (<AND <IN? ,WINNER ,INFLATED-BOAT>\n\t\t     <EQUAL? ,HERE ,MAINTENANCE-ROOM ,DAM-ROOM ,DAM-LOBBY>>\n\t\t<JIGS-UP\n\"The rising water carries the boat over the dam, down the river, and over\nthe falls. Tsk, tsk.\">)>\n\t <RTRUE>>"
  },
  "LEAK-FUNCTION": {
   "name": "LEAK-FUNCTION",
   "file": "1actions.zil",
   "line": 1362,
   "endLine": 1370,
   "source": "<ROUTINE LEAK-FUNCTION ()\n\t<COND (<G? ,WATER-LEVEL 0>\n\t       <COND (<AND <VERB? PUT PUT-ON>\n\t\t\t   <EQUAL? ,PRSO ,PUTTY>>\n\t\t      <FIX-MAINT-LEAK>)\n\t\t     (<VERB? PLUG>\n\t\t      <COND (<EQUAL? ,PRSI ,PUTTY>\n\t\t\t     <FIX-MAINT-LEAK>)\n\t\t\t    (T <WITH-TELL ,PRSI>)>)>)>>"
  },
  "FIX-MAINT-LEAK": {
   "name": "FIX-MAINT-LEAK",
   "file": "1actions.zil",
   "line": 1372,
   "endLine": 1377,
   "source": "<ROUTINE FIX-MAINT-LEAK ()\n\t <SETG WATER-LEVEL -1>\n\t <QUEUE I-MAINT-ROOM 0>\n\t <TELL\n\"By some miracle of Zorkian technology, you have managed to stop the\nleak in the dam.\" CR>>"
  },
  "PUTTY-FCN": {
   "name": "PUTTY-FCN",
   "file": "1actions.zil",
   "line": 1379,
   "endLine": 1384,
   "source": "<ROUTINE PUTTY-FCN ()\n\t <COND (<OR <AND <VERB? OIL>\n\t\t\t <EQUAL? ,PRSI ,PUTTY>>\n\t\t    <AND <VERB? PUT>\n\t\t\t <EQUAL? ,PRSO ,PUTTY>>>\n\t\t<TELL \"The all-purpose gunk isn't a lubricant.\" CR>)>>"
  },
  "TUBE-FUNCTION": {
   "name": "TUBE-FUNCTION",
   "file": "1actions.zil",
   "line": 1386,
   "endLine": 1398,
   "source": "<ROUTINE TUBE-FUNCTION ()\n\t <COND (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSI ,TUBE>>\n\t\t<TELL \"The tube refuses to accept anything.\" CR>)\n\t       (<VERB? SQUEEZE>\n\t\t<COND (<AND <FSET? ,PRSO ,OPENBIT>\n\t\t\t    <IN? ,PUTTY ,PRSO>>\n\t\t       <MOVE ,PUTTY ,WINNER>\n\t\t       <TELL \"The viscous material oozes into your hand.\" CR>)\n\t\t      (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"The tube is apparently empty.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The tube is closed.\" CR>)>)>>"
  },
  "DAM-FUNCTION": {
   "name": "DAM-FUNCTION",
   "file": "1actions.zil",
   "line": 1400,
   "endLine": 1410,
   "source": "<ROUTINE DAM-FUNCTION ()\n\t <COND (<VERB? OPEN CLOSE>\n\t\t<TELL \"Sounds reasonable, but this isn't how.\" CR>)\n\t       (<VERB? PLUG>\n\t\t<COND (<EQUAL? ,PRSI ,HANDS>\n\t\t       <TELL\n\"Are you the little Dutch boy, then? Sorry, this is a big dam.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"With a \" D ,PRSI \"? Do you know how big this dam is? You could only\nstop a tiny leak with that.\" CR>)>)>>"
  },
  "WITH-TELL": {
   "name": "WITH-TELL",
   "file": "1actions.zil",
   "line": 1412,
   "endLine": 1413,
   "source": "<ROUTINE WITH-TELL (OBJ)\n\t <TELL \"With a \" D .OBJ \"?\" CR>>"
  },
  "RESERVOIR-SOUTH-FCN": {
   "name": "RESERVOIR-SOUTH-FCN",
   "file": "1actions.zil",
   "line": 1415,
   "endLine": 1442,
   "source": "<ROUTINE RESERVOIR-SOUTH-FCN (RARG)\n\t<COND (<EQUAL? .RARG ,M-LOOK>\n\t       <COND (<AND ,LOW-TIDE ,GATES-OPEN>\n\t\t      <TELL\n\"You are in a long room, to the north of which was formerly a lake.\nHowever, with the water level lowered, there is merely a wide stream\nrunning through the center of the room.\">)\n\t\t     (,GATES-OPEN\n\t\t      <TELL\n\"You are in a long room. To the north is a large lake, too deep\nto cross. You notice, however, that the water level appears to be\ndropping at a rapid rate. Before long, it might be possible to cross\nto the other side from here.\">)\n\t\t     (,LOW-TIDE\n\t\t      <TELL\n\"You are in a long room, to the north of which is a wide area which\nwas formerly a reservoir, but now is merely a stream. You notice,\nhowever, that the level of the stream is rising quickly and that\nbefore long it will be impossible to cross here.\">)\n\t\t     (T\n\t\t      <TELL\n\"You are in a long room on the south shore of a large lake, far\ntoo deep and wide for crossing.\">)>\n\t       <CRLF>\n\t       <TELL\n\"There is a path along the stream to the east or west, a steep pathway\nclimbing southwest along the edge of a chasm, and a path leading into a\ncanyon to the southeast.\" CR>)>>"
  },
  "RESERVOIR-FCN": {
   "name": "RESERVOIR-FCN",
   "file": "1actions.zil",
   "line": 1444,
   "endLine": 1462,
   "source": "<ROUTINE RESERVOIR-FCN (RARG)\n   \t<COND (<AND <EQUAL? .RARG ,M-END>\n\t\t    <NOT <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t    <NOT ,GATES-OPEN>\n\t\t    ,LOW-TIDE>\n\t       <TELL\n\"You notice that the water level here is rising rapidly. The currents\nare also becoming stronger. Staying here seems quite perilous!\" CR>)\n\t      (<EQUAL? .RARG ,M-LOOK>\n\t       <COND (,LOW-TIDE\n\t\t      <TELL\n\"You are on what used to be a large lake, but which is now a large\nmud pile. There are \\\"shores\\\" to the north and south.\">)\n\t\t     (T\n\t\t      <TELL\n\"You are on the lake. Beaches can be seen north and south.\nUpstream a small stream enters the lake through a narrow cleft\nin the rocks. The dam can be seen downstream.\">)>\n\t       <CRLF>)>>"
  },
  "RESERVOIR-NORTH-FCN": {
   "name": "RESERVOIR-NORTH-FCN",
   "file": "1actions.zil",
   "line": 1464,
   "endLine": 1485,
   "source": "<ROUTINE RESERVOIR-NORTH-FCN (RARG)\n\t<COND (<EQUAL? .RARG ,M-LOOK>\n\t       <COND (<AND ,LOW-TIDE ,GATES-OPEN>\n\t\t      <TELL\n\"You are in a large cavernous room, the south of which was formerly\na lake. However, with the water level lowered, there is merely\na wide stream running through there.\">)\n\t\t     (,GATES-OPEN\n\t\t      <TELL\n\"You are in a large cavernous area. To the south is a wide lake,\nwhose water level appears to be falling rapidly.\">)\n\t\t     (,LOW-TIDE\n\t\t      <TELL\n\"You are in a cavernous area, to the south of which is a very wide\nstream. The level of the stream is rising rapidly, and it appears\nthat before long it will be impossible to cross to the other side.\">)\n\t\t     (T\n\t\t      <TELL\n\"You are in a large cavernous room, north of a large lake.\">)>\n\t       <CRLF>\n\t       <TELL\n\"There is a slimy stairway leaving the room to the north.\" CR>)>>"
  },
  "BOTTLE-FUNCTION": {
   "name": "BOTTLE-FUNCTION",
   "file": "1actions.zil",
   "line": 1491,
   "endLine": 1507,
   "source": "<ROUTINE BOTTLE-FUNCTION (\"AUX\" (E? <>))\n  <COND (<AND <VERB? THROW> <==? ,PRSO ,BOTTLE>>\n\t <REMOVE-CAREFULLY ,PRSO>\n\t <SET E? T>\n\t <TELL \"The bottle hits the far wall and shatters.\" CR>)\n\t(<VERB? MUNG>\n\t <SET E? T>\n\t <REMOVE-CAREFULLY ,PRSO>\n\t <TELL \"A brilliant maneuver destroys the bottle.\" CR>)\n\t(<VERB? SHAKE>\n\t <COND (<AND <FSET? ,PRSO ,OPENBIT> <IN? ,WATER ,PRSO>>\n\t\t<SET E? T>)>)>\n  <COND (<AND .E? <IN? ,WATER ,PRSO>>\n\t <TELL \"The water spills to the floor and evaporates.\" CR>\n\t <REMOVE-CAREFULLY ,WATER>\n\t T)\n\t(.E? <RTRUE>)>>"
  },
  "CYCLOPS-FCN": {
   "name": "CYCLOPS-FCN",
   "file": "1actions.zil",
   "line": 1515,
   "endLine": 1594,
   "source": "<ROUTINE CYCLOPS-FCN (\"AUX\" COUNT)\n\t<SET COUNT ,CYCLOWRATH>\n\t<COND (<EQUAL? ,WINNER ,CYCLOPS>\n\t       <COND (,CYCLOPS-FLAG\n\t\t      <TELL \"No use talking to him. He's fast asleep.\" CR>)\n\t\t     (<VERB? ODYSSEUS>\n\t\t      <SETG WINNER ,ADVENTURER>\n\t\t      <PERFORM ,V?ODYSSEUS>\n\t\t      <RTRUE>)\n\t\t     (ELSE\n\t\t      <TELL\n\"The cyclops prefers eating to making conversation.\" CR>)>)\n\t      (,CYCLOPS-FLAG\n\t       <COND (<VERB? EXAMINE>\n\t\t      <TELL\n\"The cyclops is sleeping like a baby, albeit a very ugly one.\" CR>)\n\t\t     (<VERB? ALARM KICK ATTACK BURN MUNG>\n\t\t      <TELL\n\"The cyclops yawns and stares at the thing that woke him up.\" CR>\n\t\t      <SETG CYCLOPS-FLAG <>>\n\t\t      <FSET ,CYCLOPS ,FIGHTBIT>\n\t\t      <COND (<L? .COUNT 0>\n\t\t\t     <SETG CYCLOWRATH <- .COUNT>>)\n\t\t\t    (T\n\t\t\t     <SETG CYCLOWRATH .COUNT>)>)>)\n\t      (<VERB? EXAMINE>\n\t       <TELL\n\"A hungry cyclops is standing at the foot of the stairs.\" CR>)\n\t      (<AND <VERB? GIVE> <EQUAL? ,PRSI ,CYCLOPS>>\n\t       <COND (<EQUAL? ,PRSO ,LUNCH>\n\t\t      <COND (<NOT <L? .COUNT 0>>\n\t\t\t     <REMOVE-CAREFULLY ,LUNCH>\n\t\t\t     <TELL\n\"The cyclops says \\\"Mmm Mmm. I love hot peppers! But oh, could I use\na drink. Perhaps I could drink the blood of that thing.\\\"  From the\ngleam in his eye, it could be surmised that you are \\\"that thing\\\".\" CR>\n\t\t\t     <SETG CYCLOWRATH <MIN -1 <- .COUNT>>>)>\n\t\t      <ENABLE <QUEUE I-CYCLOPS -1>>)\n\t\t     (<OR <EQUAL? ,PRSO ,WATER>\n\t\t\t  <AND <EQUAL? ,PRSO ,BOTTLE>\n\t\t\t       <IN? ,WATER ,BOTTLE>>>\n\t\t      <COND (<L? .COUNT 0>\n\t\t\t     <REMOVE-CAREFULLY ,WATER>\n\t\t\t     <MOVE ,BOTTLE ,HERE>\n\t\t\t     <FSET ,BOTTLE ,OPENBIT>\n\t\t\t     <FCLEAR ,CYCLOPS ,FIGHTBIT>\n\t\t\t     <TELL\n\"The cyclops takes the bottle, checks that it's open, and drinks the water.\nA moment later, he lets out a yawn that nearly blows you over, and then\nfalls fast asleep (what did you put in that drink, anyway?).\" CR>\n\t\t\t     <SETG CYCLOPS-FLAG T>)\n\t\t\t    (T\n\t\t\t     <TELL\n\"The cyclops apparently is not thirsty and refuses your generous offer.\" CR>)>)\n\t\t     (<EQUAL? ,PRSO ,GARLIC>\n\t\t      <TELL\n\"The cyclops may be hungry, but there is a limit.\" CR>)\n\t\t     (T\n\t\t      <TELL\n\"The cyclops is not so stupid as to eat THAT!\" CR>)>)\n\t      (<VERB? THROW ATTACK MUNG>\n\t       <ENABLE <QUEUE I-CYCLOPS -1>>\n\t       <COND (<VERB? MUNG>\n\t\t      <TELL\n\"\\\"Do you think I'm as stupid as my father was?\\\", he says, dodging.\" CR>)\n\t\t     (T\n\t\t      <TELL\n\"The cyclops shrugs but otherwise ignores your pitiful attempt.\" CR>\n\t\t      <COND (<VERB? THROW>\n\t\t\t     <MOVE ,PRSO ,HERE>)>\n\t\t      <RTRUE>)>)\n\t      (<VERB? TAKE>\n\t       <TELL\n\"The cyclops doesn't take kindly to being grabbed.\" CR>)\n\t      (<VERB? TIE>\n\t       <TELL\n\"You cannot tie the cyclops, though he is fit to be tied.\" CR>)\n\t      (<VERB? LISTEN>\n\t       <TELL\n\"You can hear his stomach rumbling.\" CR>)>>"
  },
  "I-CYCLOPS": {
   "name": "I-CYCLOPS",
   "file": "1actions.zil",
   "line": 1596,
   "endLine": 1614,
   "source": "<ROUTINE I-CYCLOPS ()\n\t <COND (<OR ,CYCLOPS-FLAG ,DEAD> <RTRUE>)\n\t       (<NOT <EQUAL? ,HERE ,CYCLOPS-ROOM>>\n\t\t<DISABLE <INT I-CYCLOPS>>)\n\t       (T\n\t\t<COND (<G? <ABS ,CYCLOWRATH> 5>\n\t\t       <DISABLE <INT I-CYCLOPS>>\n\t\t       <JIGS-UP\n\"The cyclops, tired of all of your games and trickery, grabs you firmly.\nAs he licks his chops, he says \\\"Mmm. Just like Mom used to make 'em.\\\"\nIt's nice to be appreciated.\">)\n\t\t      (T\n\t\t       <COND (<L? ,CYCLOWRATH 0>\n\t\t\t      <SETG CYCLOWRATH <- ,CYCLOWRATH 1>>)\n\t\t\t     (T\n\t\t\t      <SETG CYCLOWRATH <+ ,CYCLOWRATH 1>>)>\n\t\t       <COND (<NOT ,CYCLOPS-FLAG>\n\t\t\t      <TELL <NTH ,CYCLOMAD <- <ABS ,CYCLOWRATH> 1>>\n\t\t\t\t    CR>)>)>)>>"
  },
  "CYCLOPS-ROOM-FCN": {
   "name": "CYCLOPS-ROOM-FCN",
   "file": "1actions.zil",
   "line": 1616,
   "endLine": 1642,
   "source": "<ROUTINE CYCLOPS-ROOM-FCN (RARG)\n\t<COND (<EQUAL? .RARG ,M-LOOK>\n\t       <TELL\n\"This room has an exit on the northwest, and a staircase leading up.\" CR>\n\t       <COND (<AND ,CYCLOPS-FLAG <NOT ,MAGIC-FLAG>>\n\t\t      <TELL\n\"The cyclops is sleeping blissfully at the foot of the stairs.\" CR>)\n\t\t     (,MAGIC-FLAG\n\t\t      <TELL\n\"The east wall, previously solid, now has a cyclops-sized opening in it.\" CR>)\n\t\t     (<0? ,CYCLOWRATH>\n\t\t      <TELL\n\"A cyclops, who looks prepared to eat horses (much less mere\nadventurers), blocks the staircase. From his state of health, and\nthe bloodstains on the walls, you gather that he is not very\nfriendly, though he likes people.\" CR>)\n\t\t     (<G? ,CYCLOWRATH 0>\n\t\t      <TELL\n\"The cyclops is standing in the corner, eyeing you closely. I don't\nthink he likes you very much. He looks extremely hungry, even for a\ncyclops.\" CR>)\n\t\t     (<L? ,CYCLOWRATH 0>\n\t\t      <TELL\n\"The cyclops, having eaten the hot peppers, appears to be gasping.\nHis enflamed tongue protrudes from his man-sized mouth.\" CR>)>)\n\t      (<EQUAL? .RARG ,M-ENTER>\n\t       <OR <0? ,CYCLOWRATH> <ENABLE <INT I-CYCLOPS>>>)>>"
  },
  "LOUD-ROOM-FCN": {
   "name": "LOUD-ROOM-FCN",
   "file": "1actions.zil",
   "line": 1660,
   "endLine": 1728,
   "source": "<ROUTINE LOUD-ROOM-FCN (RARG \"AUX\" WRD)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a large room with a ceiling which cannot be detected from\nthe ground. There is a narrow passage from east to west and a stone\nstairway leading upward.\">\n\t\t<COND (<OR ,LOUD-FLAG\n\t\t\t   <AND <NOT ,GATES-OPEN> ,LOW-TIDE>>\n\t\t       <TELL \" The room is eerie in its quietness.\">)\n\t\t      (T\n\t\t       <TELL \" The room is deafeningly loud with an\nundetermined rushing sound. The sound seems to reverberate from all\nof the walls, making it difficult even to think.\">)>\n\t\t<CRLF>)\n\t       (<AND <EQUAL? .RARG ,M-END> ,GATES-OPEN <NOT ,LOW-TIDE>>\n\t\t<TELL\n\"It is unbearably loud here, with an ear-splitting roar seeming to\ncome from all around you. There is a pounding in your head which won't\nstop. With a tremendous effort, you scramble out of the room.\" CR CR>\n\t\t<GOTO <PICK-ONE ,LOUD-RUNS>>\n\t\t<RFALSE>)\t\t\n\t       (<EQUAL? .RARG ,M-ENTER>\n\t\t<COND (<OR ,LOUD-FLAG\n\t\t\t   <AND <NOT ,GATES-OPEN> ,LOW-TIDE>>\n\t\t       <RFALSE>)\n\t\t      (<AND ,GATES-OPEN <NOT ,LOW-TIDE>>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <V-FIRST-LOOK>\n\t\t       <COND (,P-CONT\n\t\t\t      <TELL\n\"The rest of your commands have been lost in the noise.\" CR>\n\t\t\t      <SETG P-CONT <>>)>\n\t\t       <REPEAT ()\n\t\t\t       <COND (<NOT ,SUPER-BRIEF> <CRLF>)>\n\t\t\t       <TELL \">\">\n\t\t\t       <READ ,P-INBUF ,P-LEXV>\n\t\t\t       <COND (<0? <GETB ,P-LEXV ,P-LEXWORDS>>\n\t\t\t              <TELL \"I beg your pardon?\" CR>\n\t\t\t\t      <AGAIN>)>\n\t\t\t       <SET WRD <GET ,P-LEXV 1>>\n\t\t\t       <COND (<EQUAL? .WRD ,W?GO ,W?WALK ,W?RUN>\n\t\t\t\t      <SET WRD <GET ,P-LEXV 3>>)\n\t\t\t\t     (<EQUAL? .WRD ,W?SAY>\n\t\t\t\t      <SET WRD <GET ,P-LEXV 5>>)>\n\t\t\t       <COND (<EQUAL? .WRD ,W?SAVE>\n\t\t\t\t      <V-SAVE>)\n\t\t\t\t     (<EQUAL? .WRD ,W?RESTORE>\n\t\t\t\t      <V-RESTORE>)\n\t\t\t\t     (<EQUAL? .WRD ,W?Q ,W?QUIT>\n\t\t\t\t      <V-QUIT>)\n\t\t\t\t     (<EQUAL? .WRD ,W?W ,W?WEST>\n\t\t\t\t      <RETURN <GOTO ,ROUND-ROOM>>)\n\t\t\t\t     (<EQUAL? .WRD ,W?E ,W?EAST>\n\t\t\t\t      <RETURN <GOTO ,DAMP-CAVE>>)\n\t\t\t\t     (<EQUAL? .WRD ,W?U ,W?UP>\n\t\t\t\t      <RETURN <GOTO ,DEEP-CANYON>>)\n\t\t\t\t     (<EQUAL? .WRD ,W?BUG>\n\t\t\t\t      <TELL \"That's only your opinion.\" CR>)\n\t\t\t\t     (<EQUAL? .WRD ,W?ECHO>\n\t\t\t\t      <SETG LOUD-FLAG T>\n\t\t\t\t      <FCLEAR ,BAR ,SACREDBIT>\n\t\t\t\t      <TELL\n\"The acoustics of the room change subtly.\" CR>\n\t\t\t\t      <COND (<NOT ,SUPER-BRIEF> <CRLF>)>\n\t\t\t\t      <RETURN>)\n\t\t\t\t     ;(,DEAD <CRLF>)\n\t\t\t\t     (T\n\t\t\t\t      <V-ECHO>)>>)>)>>"
  },
  "DEEP-CANYON-F": {
   "name": "DEEP-CANYON-F",
   "file": "1actions.zil",
   "line": 1730,
   "endLine": 1745,
   "source": "<ROUTINE DEEP-CANYON-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are on the south edge of a deep canyon. Passages lead off to the\neast, northwest and southwest. A stairway leads down.\">\n\t\t<COND (<AND ,GATES-OPEN <NOT ,LOW-TIDE>>\n\t\t       <TELL\n\" You can hear a loud roaring sound, like that of rushing water, from\nbelow.\">)\n\t\t      (<AND <NOT ,GATES-OPEN> ,LOW-TIDE>\n\t\t       <CRLF>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL\n\" You can hear the sound of flowing water from below.\">)>\n\t\t<CRLF>)>>"
  },
  "THIEF-VS-ADVENTURER": {
   "name": "THIEF-VS-ADVENTURER",
   "file": "1actions.zil",
   "line": 1764,
   "endLine": 1873,
   "source": "<ROUTINE THIEF-VS-ADVENTURER (HERE? \"AUX\" ROBBED? (WINNER-ROBBED? <>))\n  <COND (<AND <NOT ,DEAD> <EQUAL? ,HERE ,TREASURE-ROOM>>)\n        (<NOT ,THIEF-HERE>\n         <COND (<AND <NOT ,DEAD> <NOT .HERE?> <PROB 30>>\n\t        <COND (<IN? ,STILETTO ,THIEF>\n\t\t       <FCLEAR ,THIEF ,INVISIBLE>\n\t\t       <TELL\n\"Someone carrying a large bag is casually leaning against one of the\nwalls here. He does not speak, but it is clear from his aspect that\nthe bag will be taken only over his dead body.\" CR>\n\t\t       <SETG THIEF-HERE T>\n\t\t       <RTRUE>)\n\t\t      ;(<IN? ,STILETTO ,WINNER>\n\t\t       <MOVE ,STILETTO ,THIEF>\n\t\t       <FSET ,STILETTO ,NDESCBIT>\n\t\t       <FCLEAR ,THIEF ,INVISIBLE>\n\t\t       <TELL\n\"You feel a light finger-touch, and turning, notice a grinning figure\nholding a large bag in one hand and a stiletto in the other.\">\n\t\t       <SETG THIEF-HERE T>\n\t\t       <RTRUE>)>)\n\t       (<AND .HERE?\n\t\t     <FSET? ,THIEF ,FIGHTBIT>\n\t\t     <NOT <WINNING? ,THIEF>>>\n\t\t<TELL\n\"Your opponent, determining discretion to be the better part of\nvalor, decides to terminate this little contretemps. With a rueful\nnod of his head, he steps backward into the gloom and disappears.\" CR>\n\t\t<FSET ,THIEF ,INVISIBLE>\n\t\t<FCLEAR ,THIEF ,FIGHTBIT>\n\t\t<RECOVER-STILETTO>\n\t\t<RTRUE>)\n\t       (<AND .HERE? <FSET? ,THIEF ,FIGHTBIT> <PROB 90>>\n\t\t<RFALSE>)\n\t       (<AND .HERE? <PROB 30>>\n\t        <TELL\n\"The holder of the large bag just left, looking disgusted.\nFortunately, he took nothing.\" CR>\n\t\t<FSET ,THIEF ,INVISIBLE>\n\t\t<RECOVER-STILETTO>\n\t        <RTRUE>)\n\t       (<PROB 70> <RFALSE>)\n\t       (<NOT ,DEAD>\n\t\t<COND (<ROB ,HERE ,THIEF 100>\n\t\t       <SET ROBBED? ,HERE>)\n\t\t      (<ROB ,WINNER ,THIEF>\n\t\t       <SET ROBBED? ,PLAYER>)>\n\t\t<SETG THIEF-HERE T>\n\t        <COND (<AND .ROBBED? <NOT .HERE?>>\n\t\t       <TELL\n\"A seedy-looking individual with a large bag just wandered through\nthe room. On the way through, he quietly abstracted some valuables from \">\n\t\t       <COND (<EQUAL? .ROBBED? ,HERE>\n\t\t\t      <TELL \"the room\">)\n\t\t\t     (ELSE\n\t\t\t      <TELL \"your possession\">)>\n\t\t       <TELL \", mumbling something about\n\\\"Doing unto others before...\\\"\" CR>\n\t\t       <STOLE-LIGHT?>)\n\t\t      (.HERE?\n\t\t       <RECOVER-STILETTO>\n\t\t       <COND (.ROBBED?\n\t\t\t      <TELL\n\"The thief just left, still carrying his large bag. You may\nnot have noticed that he \">\n\t\t\t      <COND (<EQUAL? .ROBBED? ,PLAYER>\n\t\t\t\t     <TELL\n\"robbed you blind first.\">)\n\t\t\t\t    (T\n\t\t\t\t     <TELL\n\"appropriated the valuables in the room.\">)>\n\t\t\t      <CRLF>\n\t\t\t      <STOLE-LIGHT?>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"The thief, finding nothing of value, left disgusted.\" CR>)>\n\t\t       <FSET ,THIEF ,INVISIBLE>\n\t\t       <SET HERE? <>>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL\n\"A \\\"lean and hungry\\\" gentleman just wandered through, carrying a\nlarge bag. Finding nothing of value, he left disgruntled.\" CR>\n\t\t       <RTRUE>)>)>)\n\t(T\n\t <COND (.HERE?\t\t\t;\"Here, already announced.\"\n\t\t<COND (<PROB 30>\n\t\t       <COND (<ROB ,HERE ,THIEF 100>\n\t\t\t      <SET ROBBED? ,HERE>)\n\t\t\t     (<ROB ,WINNER ,THIEF>\n\t\t\t      <SET ROBBED? ,PLAYER>)>\n\t\t       <COND (.ROBBED?\n\t\t\t      <TELL\n\"The thief just left, still carrying his large bag. You may\nnot have noticed that he \">\n\t\t\t      <COND (<EQUAL? .ROBBED? ,PLAYER>\n\t\t\t\t     <TELL\n\"robbed you blind first.\">)\n\t\t\t\t    (T\n\t\t\t\t     <TELL\n\"appropriated the valuables in the room.\">)>\n\t\t\t      <CRLF>\n\t\t\t      <STOLE-LIGHT?>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"The thief, finding nothing of value, left disgusted.\" CR>)>\n\t\t       <FSET ,THIEF ,INVISIBLE>\n\t\t       <SET HERE? <>>\n\t\t       <RECOVER-STILETTO>)>)>)>\n       <RFALSE>>"
  },
  "STOLE-LIGHT?": {
   "name": "STOLE-LIGHT?",
   "file": "1actions.zil",
   "line": 1875,
   "endLine": 1880,
   "source": "<ROUTINE STOLE-LIGHT? (\"AUX\" OLD-LIT)\n\t <SET OLD-LIT ,LIT>\n\t <SETG LIT <LIT? ,HERE>>\n\t <COND (<AND <NOT ,LIT> .OLD-LIT>\n\t\t<TELL \"The thief seems to have left you in the dark.\" CR>)>\n\t <RTRUE>>"
  },
  "HACK-TREASURES": {
   "name": "HACK-TREASURES",
   "file": "1actions.zil",
   "line": 1888,
   "endLine": 1895,
   "source": "<ROUTINE HACK-TREASURES (\"AUX\" X)\n\t <RECOVER-STILETTO>\n\t <FSET ,THIEF ,INVISIBLE>\n\t <SET X <FIRST? ,TREASURE-ROOM>>\n\t <REPEAT ()\n\t\t <COND (<NOT .X> <RETURN>)\n\t\t       (T <FCLEAR .X ,INVISIBLE>)>\n\t\t <SET X <NEXT? .X>>>>"
  },
  "DEPOSIT-BOOTY": {
   "name": "DEPOSIT-BOOTY",
   "file": "1actions.zil",
   "line": 1897,
   "endLine": 1909,
   "source": "<ROUTINE DEPOSIT-BOOTY (RM \"AUX\" X N (FLG <>))\n\t <SET X <FIRST? ,THIEF>>\n\t <REPEAT ()\n\t\t <COND (<NOT .X> <RETURN .FLG>)>\n\t\t <SET N <NEXT? .X>>\n\t\t <COND (<EQUAL? .X ,STILETTO ,LARGE-BAG>)\n\t\t       (<G? <GETP .X ,P?TVALUE> 0>\n\t\t\t<MOVE .X .RM>\n\t\t\t<SET FLG T>\n\t\t\t<COND (<EQUAL? .X ,EGG>\n\t\t\t       <SETG EGG-SOLVE T>\n\t\t\t       <FSET ,EGG ,OPENBIT>)>)>\n\t\t <SET X .N>>>"
  },
  "ROB-MAZE": {
   "name": "ROB-MAZE",
   "file": "1actions.zil",
   "line": 1917,
   "endLine": 1933,
   "source": "<ROUTINE ROB-MAZE (RM \"AUX\" X N)\n\t <SET X <FIRST? .RM>>\n\t <REPEAT ()\n\t\t <COND (<NOT .X> <RFALSE>)>\n\t\t <SET N <NEXT? .X>>\n\t\t <COND (<AND <FSET? .X ,TAKEBIT>\n\t\t\t     <NOT <FSET? .X ,INVISIBLE>>\n\t\t\t     <PROB 40>>\n\t\t\t<TELL\n\"You hear, off in the distance, someone saying \\\"My, I wonder what\nthis fine \" D .X \" is doing here.\\\"\" CR>\n\t\t\t<COND (<PROB 60 80>\n\t\t\t       <MOVE .X ,THIEF>\n\t\t\t       <FSET .X ,TOUCHBIT>\n\t\t\t       <FSET .X ,INVISIBLE>)>\n\t\t\t<RETURN>)>\n\t\t <SET X .N>>>"
  },
  "ROBBER-FUNCTION": {
   "name": "ROBBER-FUNCTION",
   "file": "1actions.zil",
   "line": 1947,
   "endLine": 2084,
   "source": "<ROUTINE ROBBER-FUNCTION (\"OPTIONAL\" (MODE <>) \"AUX\" (FLG <>) X N)\n\t <COND (<VERB? TELL>\n\t\t<TELL \"The thief is a strong, silent type.\" CR>\n\t\t<SETG P-CONT <>>)\n\t       (<NOT .MODE>\n\t\t<COND (<AND <VERB? HELLO>\n\t\t\t    <EQUAL? <GETP ,THIEF ,P?LDESC> ,ROBBER-U-DESC>>\n\t\t       <TELL\n\"The thief, being temporarily incapacitated, is unable to acknowledge\nyour greeting with his usual graciousness.\" CR>)\n\t\t      (<AND <EQUAL? ,PRSO ,KNIFE>\n\t\t\t    <VERB? THROW>\n\t\t\t    <NOT <FSET? ,THIEF ,FIGHTBIT>>>\n\t\t       <MOVE ,PRSO ,HERE>\n\t\t       <COND (<PROB 10 0>\n\t\t\t      <TELL\n\"You evidently frightened the robber, though you didn't hit him. He\nflees\">\n\t\t\t      <REMOVE ,LARGE-BAG>\n\t\t\t      <SET X <>>\n\t\t\t      <COND (<IN? ,STILETTO ,THIEF>\n\t\t\t\t     <REMOVE ,STILETTO>\n\t\t\t\t     <SET X T>)>\n\t\t\t      <COND (<FIRST? ,THIEF>\n\t\t\t\t     <MOVE-ALL ,THIEF ,HERE>\n\t\t\t\t     <TELL\n\", but the contents of his bag fall on the floor.\">)\n\t\t\t\t    (T\n\t\t\t\t     <TELL \".\">)>\n\t\t\t      <MOVE ,LARGE-BAG ,THIEF>\n\t\t\t      <COND (.X <MOVE ,STILETTO ,THIEF>)>\n\t\t\t      <CRLF>\n\t\t\t      <FSET ,THIEF ,INVISIBLE>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"You missed. The thief makes no attempt to take the knife, though it\nwould be a fine addition to the collection in his bag. He does seem\nangered by your attempt.\" CR>\n\t\t\t      <FSET ,THIEF ,FIGHTBIT>)>)\n\t\t      (<AND <VERB? THROW GIVE>\n\t\t\t    ,PRSO\n\t\t\t    <NOT <EQUAL? ,PRSO ,THIEF>>\n\t\t\t    <EQUAL? ,PRSI ,THIEF>>\n\t\t       <COND (<L? <GETP ,THIEF ,P?STRENGTH> 0>\n\t\t\t      <PUTP ,THIEF\n\t\t\t\t    ,P?STRENGTH\n\t\t\t\t    <- <GETP ,THIEF ,P?STRENGTH>>>\n\t\t\t      <ENABLE <INT I-THIEF>>\n\t\t\t      <RECOVER-STILETTO>\n\t\t\t      <PUTP ,THIEF ,P?LDESC ,ROBBER-C-DESC>\n\t\t\t      <TELL\n\"Your proposed victim suddenly recovers consciousness.\" CR>)>\n\t\t       <MOVE ,PRSO ,THIEF>\n\t\t       <COND ;(<EQUAL? ,PRSO ,STILETTO>\n\t\t\t      <TELL\n\"The thief takes his stiletto and salutes you with a small nod of\nhis head.\" CR>)\n\t\t\t     (<G? <GETP ,PRSO ,P?TVALUE> 0>\n\t\t\t      <SETG THIEF-ENGROSSED T>\n\t\t\t      <TELL\n\"The thief is taken aback by your unexpected generosity, but accepts\nthe \" D ,PRSO \" and stops to admire its beauty.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"The thief places the \" D ,PRSO \" in his bag and thanks\nyou politely.\" CR>)>)\n\t\t      (<VERB? TAKE>\n\t\t       <TELL\n\"Once you got him, what would you do with him?\" CR>)\n\t\t      (<VERB? EXAMINE LOOK-INSIDE>\n\t\t       <TELL\n\"The thief is a slippery character with beady eyes that flit back\nand forth. He carries, along with an unmistakable arrogance, a large bag\nover his shoulder and a vicious stiletto, whose blade is aimed\nmenacingly in your direction. I'd watch out if I were you.\" CR>)\n\t\t      (<VERB? LISTEN>\n\t\t       <TELL\n\"The thief says nothing, as you have not been formally introduced.\" CR>)>)\n\t       (<EQUAL? .MODE ,F-BUSY?>\n\t\t<COND (<IN? ,STILETTO ,THIEF> <>)\n\t\t      (<IN? ,STILETTO <LOC ,THIEF>>\n\t\t       <MOVE ,STILETTO ,THIEF>\n\t\t       <FSET ,STILETTO ,NDESCBIT>\n\t\t       <COND (<IN? ,THIEF ,HERE>\n\t\t\t      <TELL\n\"The robber, somewhat surprised at this turn of events, nimbly\nretrieves his stiletto.\" CR>)>\n\t\t       T)>)\n\t       (<EQUAL? .MODE ,F-DEAD>\n\t\t<MOVE ,STILETTO ,HERE>\n\t\t<FCLEAR ,STILETTO ,NDESCBIT>\n\t\t<SET X <DEPOSIT-BOOTY ,HERE>>\n\t\t<COND (<EQUAL? ,HERE ,TREASURE-ROOM>\n\t\t       <SET X <FIRST? ,HERE>>\n\t\t       <REPEAT ()\n\t\t\t       <COND\n\t\t\t\t(<NOT .X>\n\t\t\t\t <TELL \"The chalice is now safe to take.\" CR>\n\t\t\t\t <RETURN>)\n\t\t\t\t(<NOT <EQUAL? .X ,CHALICE ,THIEF ,ADVENTURER>>\n\t\t\t\t <FCLEAR .X ,INVISIBLE>\n\t\t\t\t <COND (<NOT .FLG>\n\t\t\t\t\t<SET FLG T>\n\t\t\t\t\t<TELL\n\"As the thief dies, the power of his magic decreases, and his\ntreasures reappear:\" CR>)>\n\t\t\t\t <TELL \"  A \" D .X>\n\t\t\t\t <COND (<AND <FIRST? .X>\n\t\t\t\t\t     <SEE-INSIDE? .X>>\n\t\t\t\t\t<TELL \", with \">\n\t\t\t\t\t<PRINT-CONTENTS .X>)>\n\t\t\t\t <CRLF>)>\n\t\t\t       <SET X <NEXT? .X>>>)\n\t\t      (.X\n\t\t       <TELL \"His booty remains.\" CR>)>\n\t\t<DISABLE <INT I-THIEF>>)\n\t       (<EQUAL? .MODE ,F-FIRST?>\n\t\t<COND (<AND ,THIEF-HERE\n\t\t\t    <NOT <FSET? ,THIEF ,INVISIBLE>>\n\t\t\t    <PROB 20>>\n\t\t       <FSET ,THIEF ,FIGHTBIT>\n\t\t       <SETG P-CONT <>>\n\t\t       T)>)\n\t       (<EQUAL? .MODE ,F-UNCONSCIOUS>\n\t\t<DISABLE <INT I-THIEF>>\n\t\t<FCLEAR ,THIEF ,FIGHTBIT>\n\t\t<MOVE ,STILETTO ,HERE>\n\t\t<FCLEAR ,STILETTO ,NDESCBIT>\n\t\t<PUTP ,THIEF ,P?LDESC ,ROBBER-U-DESC>)\n\t       (<EQUAL? .MODE ,F-CONSCIOUS>\n\t\t<COND (<EQUAL? <LOC ,THIEF> ,HERE>\n\t\t       <FSET ,THIEF ,FIGHTBIT>\n\t\t       <TELL\n\"The robber revives, briefly feigning continued unconsciousness, and,\nwhen he sees his moment, scrambles away from you.\" CR>)>\n\t\t<ENABLE <INT I-THIEF>>\n\t\t<PUTP ,THIEF ,P?LDESC ,ROBBER-C-DESC>\n\t\t<RECOVER-STILETTO>)>>"
  },
  "LARGE-BAG-F": {
   "name": "LARGE-BAG-F",
   "file": "1actions.zil",
   "line": 2094,
   "endLine": 2112,
   "source": "<ROUTINE LARGE-BAG-F ()\n\t <COND (<VERB? TAKE>\n\t\t<COND (<EQUAL? <GETP ,THIEF ,P?LDESC> ,ROBBER-U-DESC>\n\t\t       <TELL\n\"Sadly for you, the robber collapsed on top of the bag. Trying to take\nit would wake him.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"The bag will be taken over his dead body.\" CR>)>)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSI ,LARGE-BAG>>\n\t\t<TELL \"It would be a good trick.\" CR>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<TELL\n\"Getting close enough would be a good trick.\" CR>)\n\t       (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<TELL\n\"The bag is underneath the thief, so one can't say what, if anything, is\ninside.\" CR>)>>"
  },
  "MOVE-ALL": {
   "name": "MOVE-ALL",
   "file": "1actions.zil",
   "line": 2114,
   "endLine": 2121,
   "source": "<ROUTINE MOVE-ALL (FROM TO \"AUX\" X N)\n\t <COND (<SET X <FIRST? .FROM>>\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT .X> <RETURN>)>\n\t\t\t<SET N <NEXT? .X>>\n\t\t\t<FCLEAR .X ,INVISIBLE>\n\t\t\t<MOVE .X .TO>\n\t\t\t<SET X .N>>)>>"
  },
  "CHALICE-FCN": {
   "name": "CHALICE-FCN",
   "file": "1actions.zil",
   "line": 2123,
   "endLine": 2136,
   "source": "<ROUTINE CHALICE-FCN ()\n\t <COND (<VERB? TAKE>\n\t\t<COND (<AND <IN? ,PRSO ,TREASURE-ROOM>\n\t\t\t    <IN? ,THIEF ,TREASURE-ROOM>\n\t\t\t    <FSET? ,THIEF ,FIGHTBIT>\n\t\t\t    <NOT <FSET? ,THIEF ,INVISIBLE>>\n\t\t\t    <NOT <EQUAL? <GETP ,THIEF ,P?LDESC>\n\t\t\t\t\t ,ROBBER-U-DESC>>>\n\t\t       <TELL\n\"You'd be stabbed in the back first.\" CR>)>)\n\t       (<AND <VERB? PUT> <EQUAL? ,PRSI ,CHALICE>>\n\t\t<TELL\n\"You can't. It's not a very good chalice, is it?\" CR>)\n\t       (T <DUMB-CONTAINER>)>>"
  },
  "TREASURE-ROOM-FCN": {
   "name": "TREASURE-ROOM-FCN",
   "file": "1actions.zil",
   "line": 2138,
   "endLine": 2149,
   "source": "<ROUTINE TREASURE-ROOM-FCN (RARG \"AUX\" TL)\n\t <COND (<AND <EQUAL? .RARG ,M-ENTER>\n\t\t     <1? <GET <INT I-THIEF> ,C-ENABLED?>>\n\t\t     <NOT ,DEAD>>\n\t\t<COND (<NOT <IN? ,THIEF ,HERE>>\n\t\t       <TELL\n\"You hear a scream of anguish as you violate the robber's hideaway.\nUsing passages unknown to you, he rushes to its defense.\" CR>\n\t\t       <MOVE ,THIEF ,HERE>)>\n\t\t<FSET ,THIEF ,FIGHTBIT>\n\t\t<FCLEAR ,THIEF ,INVISIBLE>\n\t\t<THIEF-IN-TREASURE>)>>"
  },
  "THIEF-IN-TREASURE": {
   "name": "THIEF-IN-TREASURE",
   "file": "1actions.zil",
   "line": 2151,
   "endLine": 2161,
   "source": "<ROUTINE THIEF-IN-TREASURE (\"AUX\" F N)\n\t <SET F <FIRST? ,HERE>>\n\t <COND (<AND .F <NEXT? .F>>\n\t\t<TELL\n\"The thief gestures mysteriously, and the treasures in the room\nsuddenly vanish.\" CR CR>)>\n\t <REPEAT ()\n\t\t <COND (<NOT .F> <RETURN>)\n\t\t       (<NOT <EQUAL? .F ,CHALICE ,THIEF>>\n\t\t\t<FSET .F ,INVISIBLE>)>\n\t\t <SET F <NEXT? .F>>>>"
  },
  "FRONT-DOOR-FCN": {
   "name": "FRONT-DOOR-FCN",
   "file": "1actions.zil",
   "line": 2163,
   "endLine": 2172,
   "source": "<ROUTINE FRONT-DOOR-FCN ()\n\t <COND (<VERB? OPEN>\n\t\t<TELL \"The door cannot be opened.\" CR>)\n\t       (<VERB? BURN>\n\t\t<TELL\n\t\t \"You cannot burn this door.\" CR>)\n\t       (<VERB? MUNG>\n\t\t<TELL \"You can't seem to damage the door.\" CR>)\n\t       (<VERB? LOOK-BEHIND>\n\t\t<TELL \"It won't open.\" CR>)>>"
  },
  "BODY-FUNCTION": {
   "name": "BODY-FUNCTION",
   "file": "1actions.zil",
   "line": 2178,
   "endLine": 2185,
   "source": "<ROUTINE BODY-FUNCTION ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL \"A force keeps you from taking the bodies.\" CR>)\n\t       (<VERB? MUNG BURN>\n\t\t<JIGS-UP\n\"The voice of the guardian of the dungeon booms out from the darkness,\n\\\"Your disrespect costs you your life!\\\" and places your head on a sharp\npole.\">)>>"
  },
  "BLACK-BOOK": {
   "name": "BLACK-BOOK",
   "file": "1actions.zil",
   "line": 2187,
   "endLine": 2205,
   "source": "<ROUTINE BLACK-BOOK ()\n\t <COND (<VERB? OPEN>\n\t\t<TELL \"The book is already open to page 569.\" CR>)\n\t       (<VERB? CLOSE>\n\t\t<TELL \"As hard as you try, the book cannot be closed.\" CR>)\n\t       (<OR <VERB? TURN>\n\t\t    <AND <VERB? READ-PAGE>\n\t\t\t <EQUAL? ,PRSI ,INTNUM>\n\t\t\t <NOT <EQUAL? ,P-NUMBER 569>>>>\n\t\t<TELL\n\"Beside page 569, there is only one other page with any legible printing on\nit. Most of it is unreadable, but the subject seems to be the banishment of\nevil. Apparently, certain noises, lights, and prayers are efficacious in this\nregard.\" CR>)\n\t       (<VERB? BURN>\n\t\t<REMOVE-CAREFULLY ,PRSO>\n\t\t<JIGS-UP\n\"A booming voice says \\\"Wrong, cretin!\\\" and you notice that you have\nturned into a pile of dust. How, I can't imagine.\">)>>"
  },
  "PAINTING-FCN": {
   "name": "PAINTING-FCN",
   "file": "1actions.zil",
   "line": 2207,
   "endLine": 2214,
   "source": "<ROUTINE PAINTING-FCN ()\n\t <COND (<VERB? MUNG>\n\t\t<PUTP ,PRSO ,P?TVALUE 0>\n\t\t<PUTP ,PRSO ,P?LDESC\n\"There is a worthless piece of canvas here.\">\n\t\t<TELL\n\"Congratulations! Unlike the other vandals, who merely stole the\nartist's masterpieces, you have destroyed one.\" CR>)>>"
  },
  "LANTERN": {
   "name": "LANTERN",
   "file": "1actions.zil",
   "line": 2230,
   "endLine": 2257,
   "source": "<ROUTINE LANTERN ()\n\t <COND (<VERB? THROW>\n\t\t<TELL\n\"The lamp has smashed into the floor, and the light has gone out.\" CR>\n\t\t<DISABLE <INT I-LANTERN>>\n\t\t<REMOVE-CAREFULLY ,LAMP>\n\t\t<MOVE ,BROKEN-LAMP ,HERE>)\n\t       (<VERB? LAMP-ON>\n\t\t<COND (<FSET? ,LAMP ,RMUNGBIT>\n\t\t       <TELL \"A burned-out lamp won't light.\" CR>)\n\t\t      (T\n\t\t       <ENABLE <INT I-LANTERN>>\n\t\t       <>)>)\n\t       (<VERB? LAMP-OFF>\n\t\t<COND (<FSET? ,LAMP ,RMUNGBIT>\n\t\t       <TELL \"The lamp has already burned out.\" CR>)\n\t\t      (T\n\t\t       <DISABLE <INT I-LANTERN>>\n\t\t       <>)>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"The lamp \">\n\t\t<COND (<FSET? ,LAMP ,RMUNGBIT>\n\t\t       <TELL \"has burned out.\">)\n\t\t      (<FSET? ,LAMP ,ONBIT>\n\t\t       <TELL \"is on.\">)\n\t\t      (T\n\t\t       <TELL \"is turned off.\">)>\n\t\t<CRLF>)>>"
  },
  "MAILBOX-F": {
   "name": "MAILBOX-F",
   "file": "1actions.zil",
   "line": 2259,
   "endLine": 2261,
   "source": "<ROUTINE MAILBOX-F ()\n\t <COND (<AND <VERB? TAKE> <EQUAL? ,PRSO ,MAILBOX>>\n\t\t<TELL \"It is securely anchored.\" CR>)>>"
  },
  "MATCH-FUNCTION": {
   "name": "MATCH-FUNCTION",
   "file": "1actions.zil",
   "line": 2265,
   "endLine": 2306,
   "source": "<ROUTINE MATCH-FUNCTION (\"AUX\" CNT)\n\t <COND (<AND <VERB? LAMP-ON BURN> <EQUAL? ,PRSO ,MATCH>>\n\t\t<COND (<G? ,MATCH-COUNT 0>\n\t\t       <SETG MATCH-COUNT <- ,MATCH-COUNT 1>>)>\n\t\t<COND (<NOT <G? ,MATCH-COUNT 0>>\n\t\t       <TELL\n\t\t\t\"I'm afraid that you have run out of matches.\" CR>)\n\t\t      (<EQUAL? ,HERE ,LOWER-SHAFT ,TIMBER-ROOM>\n\t\t       <TELL\n\"This room is drafty, and the match goes out instantly.\" CR>)\n\t\t      (T\n\t\t       <FSET ,MATCH ,FLAMEBIT>\n\t\t       <FSET ,MATCH ,ONBIT>\n\t\t       <ENABLE <QUEUE I-MATCH 2>>\n\t\t       <TELL \"One of the matches starts to burn.\" CR>\n\t\t       <COND (<NOT ,LIT>\n\t\t\t      <SETG LIT T>\n\t\t\t      <V-LOOK>)>\n\t\t       <RTRUE>)>)\n\t       (<AND <VERB? LAMP-OFF> <FSET? ,MATCH ,FLAMEBIT>>\n\t\t<TELL \"The match is out.\" CR>\n\t\t<FCLEAR ,MATCH ,FLAMEBIT>\n\t\t<FCLEAR ,MATCH ,ONBIT>\n\t\t<SETG LIT <LIT? ,HERE>>\n\t\t<COND (<NOT ,LIT> <TELL \"It's pitch black in here!\" CR>)>\n\t\t<QUEUE I-MATCH 0>\n\t\t<RTRUE>)\n\t       (<VERB? COUNT OPEN>\n\t\t<TELL \"You have \">\n\t        <SET CNT <- ,MATCH-COUNT 1>>\n\t\t<COND (<NOT <G? .CNT 0>> <TELL \"no\">)\n\t\t      (T <TELL N .CNT>)>\n\t\t<TELL \" match\">\n\t\t<COND (<NOT <1? .CNT>> <TELL \"es.\">) (T <TELL \".\">)>\n\t\t<CRLF>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (<FSET? ,MATCH ,ONBIT>\n\t\t       <TELL \"The match is burning.\">)\n\t\t      (T\n\t\t       <TELL\n\"The matchbook isn't very interesting, except for what's written on it.\">)>\n\t\t<CRLF>)>>"
  },
  "I-MATCH": {
   "name": "I-MATCH",
   "file": "1actions.zil",
   "line": 2308,
   "endLine": 2313,
   "source": "<ROUTINE I-MATCH ()\n\t <TELL \"The match has gone out.\" CR>\n\t <FCLEAR ,MATCH ,FLAMEBIT>\n\t <FCLEAR ,MATCH ,ONBIT>\n\t <SETG LIT <LIT? ,HERE>>\n\t <RTRUE>>"
  },
  "I-LANTERN": {
   "name": "I-LANTERN",
   "file": "1actions.zil",
   "line": 2315,
   "endLine": 2319,
   "source": "<ROUTINE I-LANTERN (\"AUX\" TICK (TBL <VALUE LAMP-TABLE>))\n\t <ENABLE <QUEUE I-LANTERN <SET TICK <GET .TBL 0>>>>\n\t <LIGHT-INT ,LAMP .TBL .TICK>\n\t <COND (<NOT <0? .TICK>>\n\t\t<SETG LAMP-TABLE <REST .TBL 4>>)>>"
  },
  "I-CANDLES": {
   "name": "I-CANDLES",
   "file": "1actions.zil",
   "line": 2321,
   "endLine": 2326,
   "source": "<ROUTINE I-CANDLES (\"AUX\" TICK (TBL <VALUE CANDLE-TABLE>))\n\t <FSET ,CANDLES ,TOUCHBIT>\n\t <ENABLE <QUEUE I-CANDLES <SET TICK <GET .TBL 0>>>>\n\t <LIGHT-INT ,CANDLES .TBL .TICK>\n\t <COND (<NOT <0? .TICK>>\n\t\t<SETG CANDLE-TABLE <REST .TBL 4>>)>>"
  },
  "LIGHT-INT": {
   "name": "LIGHT-INT",
   "file": "1actions.zil",
   "line": 2328,
   "endLine": 2337,
   "source": "<ROUTINE LIGHT-INT (OBJ TBL TICK)\n\t <COND (<0? .TICK>\n\t\t<FCLEAR .OBJ ,ONBIT>\n\t\t<FSET .OBJ ,RMUNGBIT>)>\n\t <COND (<OR <HELD? .OBJ> <IN? .OBJ ,HERE>>\n\t\t<COND (<0? .TICK>\n\t\t       <TELL\n\"You'd better have more light than from the \" D .OBJ \".\" CR>)\n\t\t      (T\n\t\t       <TELL <GET .TBL 1> CR>)>)>>"
  },
  "MIN": {
   "name": "MIN",
   "file": "1actions.zil",
   "line": 2339,
   "endLine": 2341,
   "source": "<ROUTINE MIN (N1 N2)\n\t <COND (<L? .N1 .N2> .N1)\n\t       (T .N2)>>"
  },
  "CANDLES-FCN": {
   "name": "CANDLES-FCN",
   "file": "1actions.zil",
   "line": 2343,
   "endLine": 2404,
   "source": "<ROUTINE CANDLES-FCN ()\n\t <COND (<NOT <FSET? ,CANDLES ,TOUCHBIT>>\n\t\t<ENABLE <INT I-CANDLES>>)>\n\t <COND (<EQUAL? ,CANDLES ,PRSI> <RFALSE>)\n\t       (T\n\t\t<COND (<VERB? LAMP-ON BURN>\n\t\t       <COND (<FSET? ,CANDLES ,RMUNGBIT>\n\t\t\t      <TELL\n\"Alas, there's not much left of the candles. Certainly not enough to\nburn.\" CR>)\n\t\t\t     (<NOT ,PRSI>\n\t\t\t      <COND (<FSET? ,MATCH ,FLAMEBIT>\n\t\t\t\t     <TELL \"(with the match)\" CR>\n\t\t\t\t     <PERFORM ,V?LAMP-ON ,CANDLES ,MATCH>\n\t\t\t\t     <RTRUE>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL\n\"You should say what to light them with.\" CR>\n\t\t\t\t     <RFATAL>)>)\n\t\t\t     (<AND <EQUAL? ,PRSI ,MATCH>\n\t\t\t\t   <FSET? ,MATCH ,ONBIT>>\n\t\t\t      <TELL \"The candles are \">\n\t\t\t      <COND (<FSET? ,CANDLES ,ONBIT>\n\t\t\t\t     <TELL \"already lit.\" CR>)\n\t\t\t\t    (T\n\t\t\t\t     <FSET ,CANDLES ,ONBIT>\n\t\t\t\t     <TELL \"lit.\" CR>\n\t\t\t\t     <ENABLE <INT I-CANDLES>>)>)\n\t\t\t     (<EQUAL? ,PRSI ,TORCH>\n\t\t\t      <COND (<FSET? ,CANDLES ,ONBIT>\n\t\t\t\t     <TELL\n\"You realize, just in time, that the candles are already lighted.\" CR>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL\n\"The heat from the torch is so intense that the candles are vaporized.\" CR>\n\t\t\t\t     <REMOVE-CAREFULLY ,CANDLES>)>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"You have to light them with something that's burning, you know.\" CR>)>)\n\t\t      (<VERB? COUNT>\n\t\t       <TELL\n\"Let's see, how many objects in a pair? Don't tell me, I'll get it.\" CR>)\n\t\t      (<VERB? LAMP-OFF>\n\t\t       <DISABLE <INT I-CANDLES>>\n\t\t       <COND (<FSET? ,CANDLES ,ONBIT>\n\t\t\t      <TELL \"The flame is extinguished.\">\n\t\t\t      <FCLEAR ,CANDLES ,ONBIT>\n\t\t\t      <FSET ,CANDLES ,TOUCHBIT>\n\t\t\t      <SETG LIT <LIT? ,HERE>>\n\t\t\t      <COND (<NOT ,LIT>\n\t\t\t\t     <TELL \" It's really dark in here....\">)>\n\t\t\t      <CRLF>\n\t\t\t      <RTRUE>)\n\t\t\t     (T <TELL \"The candles are not lighted.\" CR>)>)\n\t\t      (<AND <VERB? PUT> <FSET? ,PRSI ,BURNBIT>>\n\t\t       <TELL \"That wouldn't be smart.\" CR>)\n\t\t      (<VERB? EXAMINE>\n\t\t       <TELL \"The candles are \">\n\t\t       <COND (<FSET? ,CANDLES ,ONBIT>\n\t\t\t      <TELL \"burning.\">)\n\t\t\t     (T <TELL \"out.\">)>\n\t\t       <CRLF>)>)>>"
  },
  "CAVE2-ROOM": {
   "name": "CAVE2-ROOM",
   "file": "1actions.zil",
   "line": 2416,
   "endLine": 2426,
   "source": "<ROUTINE CAVE2-ROOM (RARG)\n  <COND (<EQUAL? .RARG ,M-END>\n\t <COND (<AND <IN? ,CANDLES ,WINNER>\n\t\t     <PROB 50 80>\n\t\t     <FSET? ,CANDLES ,ONBIT>>\n\t\t<DISABLE <INT I-CANDLES>>\n\t\t<FCLEAR ,CANDLES ,ONBIT>\n\t\t<TELL\n\"A gust of wind blows out your candles!\" CR>\n\t\t<COND (<NOT <SETG LIT <LIT? ,HERE>>>\n\t\t       <TELL \"It is now completely dark.\" CR>)>)>)>>"
  },
  "SWORD-FCN": {
   "name": "SWORD-FCN",
   "file": "1actions.zil",
   "line": 2432,
   "endLine": 2442,
   "source": "<ROUTINE SWORD-FCN (\"AUX\" G)\n\t <COND (<AND <VERB? TAKE> <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t<ENABLE <QUEUE I-SWORD -1>>\n\t\t<>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (<EQUAL? <SET G <GETP ,SWORD ,P?TVALUE>> 1>\n\t\t       <TELL\n\"Your sword is glowing with a faint blue glow.\" CR>)\n\t\t      (<EQUAL? .G 2>\n\t\t       <TELL\n\"Your sword is glowing very brightly.\" CR>)>)>>"
  },
  "BOOM-ROOM": {
   "name": "BOOM-ROOM",
   "file": "1actions.zil",
   "line": 2446,
   "endLine": 2467,
   "source": "<ROUTINE BOOM-ROOM (RARG \"AUX\" (DUMMY? <>) FLAME)\n         <COND (<EQUAL? .RARG ,M-END>\n\t\t<COND (<AND <EQUAL? .RARG ,M-END>\n\t\t\t    <VERB? LAMP-ON BURN>\n\t\t\t    <EQUAL? ,PRSO ,CANDLES ,TORCH ,MATCH>>\n\t\t       <SET DUMMY? T>)>\n\t\t<COND (<OR <AND <HELD? ,CANDLES>\n\t\t\t\t<FSET? ,CANDLES ,ONBIT>>\n\t\t\t   <AND <HELD? ,TORCH>\n\t\t\t\t<FSET? ,TORCH ,ONBIT>>\n\t\t\t   <AND <HELD? ,MATCH>\n\t\t\t\t<FSET? ,MATCH ,ONBIT>>>\n\t\t       <COND (.DUMMY?\n\t\t\t      <TELL\n\"How sad for an aspiring adventurer to light a \" D ,PRSO \" in a room which\nreeks of gas. Fortunately, there is justice in the world.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"Oh dear. It appears that the smell coming from this room was coal gas.\nI would have thought twice about carrying flaming objects in here.\" CR>)>\n\t\t       <JIGS-UP \"|\n      ** BOOOOOOOOOOOM **\">)>)>> "
  },
  "BAT-D": {
   "name": "BAT-D",
   "file": "1actions.zil",
   "line": 2469,
   "endLine": 2476,
   "source": "<ROUTINE BAT-D (\"OPTIONAL\" FOO)\n\t <COND (<EQUAL? <LOC ,GARLIC> ,WINNER ,HERE>\n\t\t<TELL\n\"In the corner of the room on the ceiling is a large vampire bat who\nis obviously deranged and holding his nose.\" CR>)\n\t       (T\n\t\t<TELL\n\"A large vampire bat, hanging from the ceiling, swoops down at you!\" CR>)>>"
  },
  "BATS-ROOM": {
   "name": "BATS-ROOM",
   "file": "1actions.zil",
   "line": 2478,
   "endLine": 2486,
   "source": "<ROUTINE BATS-ROOM (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are in a small room which has doors only to the east and south.\" CR>)\n\t       (<AND <EQUAL? .RARG ,M-ENTER> <NOT ,DEAD>>\n\t\t<COND (<NOT <EQUAL? <LOC ,GARLIC> ,WINNER ,HERE>>\n\t\t       <V-LOOK>\n\t\t       <CRLF>\n\t\t       <FLY-ME>)>)>>"
  },
  "MACHINE-ROOM-FCN": {
   "name": "MACHINE-ROOM-FCN",
   "file": "1actions.zil",
   "line": 2488,
   "endLine": 2500,
   "source": "<ROUTINE MACHINE-ROOM-FCN (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a large, cold room whose sole exit is to the north. In one\ncorner there is a machine which is reminiscent of a clothes\ndryer. On its face is a switch which is labelled \\\"START\\\".\nThe switch does not appear to be manipulable by any human hand (unless the\nfingers are about 1/16 by 1/4 inch). On the front of the machine is a large\nlid, which is \">\n\t\t<COND (<FSET? ,MACHINE ,OPENBIT>\n\t\t       <TELL \"open.\">)\n\t\t      (T <TELL \"closed.\">)>\n\t\t<CRLF>)>>"
  },
  "MACHINE-F": {
   "name": "MACHINE-F",
   "file": "1actions.zil",
   "line": 2502,
   "endLine": 2529,
   "source": "<ROUTINE MACHINE-F ()\n\t <COND (<AND <VERB? TAKE> <EQUAL? ,PRSO ,MACHINE>>\n\t\t<TELL \"It is far too large to carry.\" CR>)\n\t       (<VERB? OPEN>\n\t        <COND (<FSET? ,MACHINE ,OPENBIT>\n\t\t       <TELL <PICK-ONE ,DUMMY> CR>)\n\t\t      (<FIRST? ,MACHINE>\n\t\t       <TELL \"The lid opens, revealing \">\n\t\t       <PRINT-CONTENTS ,MACHINE>\n\t\t       <TELL \".\" CR>\n\t\t       <FSET ,MACHINE ,OPENBIT>)\n\t\t      (T\n\t\t       <TELL \"The lid opens.\" CR>\n\t\t       <FSET ,MACHINE ,OPENBIT>)>)\n\t       (<VERB? CLOSE>\n\t        <COND (<FSET? ,MACHINE ,OPENBIT>\n\t\t       <TELL \"The lid closes.\" CR>\n\t\t       <FCLEAR ,MACHINE ,OPENBIT>\n\t\t       T)\n\t\t      (T\n\t\t       <TELL <PICK-ONE ,DUMMY> CR>)>)\n\t       (<VERB? LAMP-ON>\n\t\t<COND (<NOT ,PRSI>\n\t\t       <TELL\n\"It's not clear how to turn it on with your bare hands.\" CR>)\n\t\t      (T\n\t\t       <PERFORM ,V?TURN ,MACHINE-SWITCH ,PRSI>\n\t\t       <RTRUE>)>)>>"
  },
  "MSWITCH-FUNCTION": {
   "name": "MSWITCH-FUNCTION",
   "file": "1actions.zil",
   "line": 2531,
   "endLine": 2551,
   "source": "<ROUTINE MSWITCH-FUNCTION (\"AUX\" O)\n\t <COND (<VERB? TURN>\n\t\t<COND (<EQUAL? ,PRSI ,SCREWDRIVER>\n\t\t       <COND (<FSET? ,MACHINE ,OPENBIT>\n\t\t\t      <TELL\n\"The machine doesn't seem to want to do anything.\" CR>)\n\t\t\t     (T <TELL\n\"The machine comes to life (figuratively) with a dazzling display of\ncolored lights and bizarre noises. After a few moments, the\nexcitement abates.\" CR>\n\t\t\t      <COND (<IN? ,COAL ,MACHINE>\n\t\t\t\t     <REMOVE-CAREFULLY ,COAL>\n\t\t\t\t     <MOVE ,DIAMOND ,MACHINE>)\n\t\t\t\t    (T\n\t\t\t\t     <REPEAT ()\n\t\t\t\t\t     <COND (<SET O <FIRST? ,MACHINE>>\n\t\t\t\t\t\t    <REMOVE-CAREFULLY .O>)\n\t\t\t\t\t\t   (T <RETURN>)>>\n\t\t\t\t     <MOVE ,GUNK ,MACHINE>)>)>)\n\t\t      (T\n\t\t       <TELL \"It seems that a \" D ,PRSI \" won't do.\" CR>)>)>>"
  },
  "GUNK-FUNCTION": {
   "name": "GUNK-FUNCTION",
   "file": "1actions.zil",
   "line": 2553,
   "endLine": 2556,
   "source": "<ROUTINE GUNK-FUNCTION ()\n\t <REMOVE-CAREFULLY ,GUNK>\n\t <TELL\n\"The slag was rather insubstantial, and crumbles into dust at your touch.\" CR>>"
  },
  "NO-OBJS": {
   "name": "NO-OBJS",
   "file": "1actions.zil",
   "line": 2558,
   "endLine": 2571,
   "source": "<ROUTINE NO-OBJS (RARG \"AUX\" F)\n\t <COND (<EQUAL? .RARG ,M-BEG>\n\t\t<SET F <FIRST? ,WINNER>>\n\t\t<SETG EMPTY-HANDED T>\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT .F> <RETURN>)\n\t\t\t      (<G? <WEIGHT .F> 4>\n\t\t\t       <SETG EMPTY-HANDED <>>\n\t\t\t       <RETURN>)>\n\t\t\t<SET F <NEXT? .F>>>\n\t\t<COND (<AND <EQUAL? ,HERE ,LOWER-SHAFT> ,LIT>\n\t\t       <SCORE-UPD ,LIGHT-SHAFT>\n\t\t       <SETG LIGHT-SHAFT 0>)>\n\t\t<RFALSE>)>>"
  },
  "SOUTH-TEMPLE-FCN": {
   "name": "SOUTH-TEMPLE-FCN",
   "file": "1actions.zil",
   "line": 2573,
   "endLine": 2576,
   "source": "<ROUTINE SOUTH-TEMPLE-FCN (RARG)\n\t <COND (<EQUAL? .RARG ,M-BEG>\n\t\t<SETG COFFIN-CURE <NOT <IN? ,COFFIN ,WINNER>>>\n\t\t<RFALSE>)>>"
  },
  "WHITE-CLIFFS-FUNCTION": {
   "name": "WHITE-CLIFFS-FUNCTION",
   "file": "1actions.zil",
   "line": 2585,
   "endLine": 2590,
   "source": "<ROUTINE WHITE-CLIFFS-FUNCTION (RARG)\n\t <COND (<EQUAL? .RARG ,M-END>\n\t\t<COND (<IN? ,INFLATED-BOAT ,WINNER>\n\t\t       <SETG DEFLATE <>>)\n\t       \t      (T\n\t\t       <SETG DEFLATE T>)>)>>"
  },
  "SCEPTRE-FUNCTION": {
   "name": "SCEPTRE-FUNCTION",
   "file": "1actions.zil",
   "line": 2592,
   "endLine": 2619,
   "source": "<ROUTINE SCEPTRE-FUNCTION ()\n\t <COND (<VERB? WAVE RAISE>\n\t\t<COND (<OR <EQUAL? ,HERE ,ARAGAIN-FALLS>\n\t\t\t   <EQUAL? ,HERE ,END-OF-RAINBOW>>\n\t\t       <COND (<NOT ,RAINBOW-FLAG>\n\t\t\t      <FCLEAR ,POT-OF-GOLD ,INVISIBLE>\n\t\t\t      <TELL\n\"Suddenly, the rainbow appears to become solid and, I venture,\nwalkable (I think the giveaway was the stairs and bannister).\" CR>\n\t\t\t      <COND (<AND <EQUAL? ,HERE ,END-OF-RAINBOW>\n\t\t\t\t\t  <IN? ,POT-OF-GOLD ,END-OF-RAINBOW>>\n\t\t\t\t     <TELL\n\"A shimmering pot of gold appears at the end of the rainbow.\" CR>)>\n\t\t\t      <SETG RAINBOW-FLAG T>)\n\t\t\t     (T\n\t\t\t      <ROB ,ON-RAINBOW ,WALL>\n\t\t\t      <TELL\n\"The rainbow seems to have become somewhat run-of-the-mill.\" CR>\n\t\t\t      <SETG RAINBOW-FLAG <>>\n\t\t\t      <RTRUE>)>)\n\t\t      (<EQUAL? ,HERE ,ON-RAINBOW>\n\t\t       <SETG RAINBOW-FLAG <>>\n\t\t       <JIGS-UP\n\"The structural integrity of the rainbow is severely compromised,\nleaving you hanging in midair, supported only by water vapor. Bye.\">)\n\t\t      (T\n\t\t       <TELL\n\"A dazzling display of color briefly emanates from the sceptre.\" CR>)>)>>"
  },
  "FALLS-ROOM": {
   "name": "FALLS-ROOM",
   "file": "1actions.zil",
   "line": 2621,
   "endLine": 2632,
   "source": "<ROUTINE FALLS-ROOM (RARG)\n    <COND (<EQUAL? .RARG ,M-LOOK>\n\t   <TELL\n\"You are at the top of Aragain Falls, an enormous waterfall with a\ndrop of about 450 feet. The only path here is on the north end.\" CR>\n\t   <COND (,RAINBOW-FLAG\n\t\t  <TELL\n\"A solid rainbow spans the falls.\">)\n\t\t (T\n\t\t  <TELL\n\"A beautiful rainbow can be seen over the falls and to the west.\">)>\n\t   <CRLF>)>>"
  },
  "RAINBOW-FCN": {
   "name": "RAINBOW-FCN",
   "file": "1actions.zil",
   "line": 2634,
   "endLine": 2650,
   "source": "<ROUTINE RAINBOW-FCN ()\n\t <COND (<VERB? CROSS THROUGH>\n\t\t<COND (<EQUAL? ,HERE ,CANYON-VIEW>\n\t\t       <TELL \"From here?!?\" CR>\n\t\t       <RTRUE>)>\n\t\t<COND (,RAINBOW-FLAG\n\t\t       <COND (<EQUAL? ,HERE ,ARAGAIN-FALLS>\n\t\t\t      <GOTO ,END-OF-RAINBOW>)\n\t\t\t     (<EQUAL? ,HERE ,END-OF-RAINBOW>\n\t\t\t      <GOTO ,ARAGAIN-FALLS>)\n\t\t\t     (T\n\t\t\t      <TELL \"You'll have to say which way...\" CR>)>)\n\t\t      (T\n\t\t       <TELL \"Can you walk on water vapor?\"\n\t\t\t     CR>)>)\n\t       (<VERB? LOOK-UNDER>\n\t\t<TELL \"The Frigid River flows under the rainbow.\" CR>)>>"
  },
  "DBOAT-FUNCTION": {
   "name": "DBOAT-FUNCTION",
   "file": "1actions.zil",
   "line": 2652,
   "endLine": 2662,
   "source": "<ROUTINE DBOAT-FUNCTION (\"AUX\")\n\t <COND (<AND <VERB? PUT PUT-ON>\n\t\t     <EQUAL? ,PRSO ,PUTTY>>\n\t\t<FIX-BOAT>)\n\t       (<VERB? INFLATE FILL>\n\t\t<TELL\n\"No chance. Some moron punctured it.\" CR>)\n\t       (<VERB? PLUG>\n\t\t<COND (<EQUAL? ,PRSI ,PUTTY>\n\t\t       <FIX-BOAT>)\n\t\t      (T <WITH-TELL ,PRSI>)>)>>"
  },
  "FIX-BOAT": {
   "name": "FIX-BOAT",
   "file": "1actions.zil",
   "line": 2664,
   "endLine": 2667,
   "source": "<ROUTINE FIX-BOAT ()\n\t <TELL \"Well done. The boat is repaired.\" CR>\n\t <MOVE ,INFLATABLE-BOAT <LOC ,PUNCTURED-BOAT>>\n\t <REMOVE-CAREFULLY ,PUNCTURED-BOAT>>"
  },
  "RIVER-FUNCTION": {
   "name": "RIVER-FUNCTION",
   "file": "1actions.zil",
   "line": 2669,
   "endLine": 2690,
   "source": "<ROUTINE RIVER-FUNCTION ()\n\t <COND (<VERB? PUT>\n\t\t<COND (<EQUAL? ,PRSI ,RIVER>\n\t\t       <COND (<EQUAL? ,PRSO ,ME>\n\t\t\t      <JIGS-UP\n\"You splash around for a while, fighting the current, then you drown.\">)\n\t\t\t     (<EQUAL? ,PRSO ,INFLATED-BOAT>\n\t\t\t      <TELL\n\"You should get in the boat then launch it.\" CR>)\n\t\t\t     (<FSET? ,PRSO ,BURNBIT>\n\t\t\t      <REMOVE-CAREFULLY ,PRSO>\n\t\t\t      <TELL\n\"The \" D ,PRSO \" floats for a moment, then sinks.\" CR>)\n\t\t\t     (T\n\t\t\t      <REMOVE-CAREFULLY ,PRSO>\n\t\t\t      <TELL\n\"The \" D ,PRSO \" splashes into the water and is gone forever.\" CR>)>)>)\n\t       (<VERB? LEAP THROUGH>\n\t\t<TELL\n\"A look before leaping reveals that the river is wide and dangerous,\nwith swift currents and large, half-hidden rocks. You decide to forgo your\nswim.\" CR>)>>"
  },
  "I-RIVER": {
   "name": "I-RIVER",
   "file": "1actions.zil",
   "line": 2708,
   "endLine": 2720,
   "source": "<ROUTINE I-RIVER (\"AUX\" RM)\n\t <COND (<AND <NOT <EQUAL? ,HERE ,RIVER-1 ,RIVER-2 ,RIVER-3>>\n\t\t     <NOT <EQUAL? ,HERE ,RIVER-4 ,RIVER-5>>>\n\t\t<DISABLE <INT I-RIVER>>)\n\t       (<SET RM <LKP ,HERE ,RIVER-NEXT>>\n\t\t<TELL \"The flow of the river carries you downstream.\" CR CR>\n\t\t<GOTO .RM>\n\t\t<ENABLE <QUEUE I-RIVER <LKP ,HERE ,RIVER-SPEEDS>>>)\n\t       (T\n\t\t<JIGS-UP\n\"Unfortunately, the magic boat doesn't provide protection from\nthe rocks and boulders one meets at the bottom of waterfalls.\nIncluding this one.\">)>>"
  },
  "RBOAT-FUNCTION": {
   "name": "RBOAT-FUNCTION",
   "file": "1actions.zil",
   "line": 2722,
   "endLine": 2815,
   "source": "<ROUTINE RBOAT-FUNCTION (\"OPTIONAL\" (RARG <>) \"AUX\" TMP)\n    <COND (<EQUAL? .RARG ,M-ENTER ,M-END ,M-LOOK> <>)\t\n\t  (<EQUAL? .RARG ,M-BEG>\n\t   <COND (<VERB? WALK>\n\t\t  <COND (<EQUAL? ,PRSO ,P?LAND ,P?EAST ,P?WEST>\n\t\t\t <RFALSE>)\n\t\t\t(<AND <EQUAL? ,HERE ,RESERVOIR>\n\t\t\t      <EQUAL? ,PRSO ,P?NORTH ,P?SOUTH>>\n\t\t\t <RFALSE>)\n\t\t\t(<AND <EQUAL? ,HERE ,IN-STREAM>\n\t\t\t      <EQUAL? ,PRSO ,P?SOUTH>>\n\t\t\t <RFALSE>)\n\t\t\t(T\n\t\t\t <TELL\n\"Read the label for the boat's instructions.\" CR>\n\t\t\t <RTRUE>)>)\n\t\t (<VERB? LAUNCH>\n\t\t  <COND (<OR <EQUAL? ,HERE ,RIVER-1 ,RIVER-2 ,RIVER-3>\n\t\t\t     <EQUAL? ,HERE ,RIVER-4 ,RESERVOIR ,IN-STREAM>>\n\t\t\t <TELL\n\"You are on the \">\n\t\t\t <COND (<EQUAL? ,HERE ,RESERVOIR>\n\t\t\t\t<TELL \"reservoir\">)\n\t\t\t       (<EQUAL? ,HERE ,IN-STREAM>\n\t\t\t\t<TELL \"stream\">)\n\t\t\t       (T <TELL \"river\">)>\n\t\t\t <TELL \", or have you forgotten?\" CR>)\n\t\t\t(<EQUAL? <SET TMP <GO-NEXT ,RIVER-LAUNCH>> 1>\n\t\t\t <ENABLE <QUEUE I-RIVER <LKP ,HERE ,RIVER-SPEEDS>>>\n\t\t\t <RTRUE>)\n\t\t\t(<NOT <EQUAL? .TMP 2>>\n\t\t\t <TELL \"You can't launch it here.\" CR>\n\t\t\t <RTRUE>)\n\t\t\t(T <RTRUE>)>)\n\t\t (<OR <AND <VERB? DROP>\n\t\t\t   <FSET? ,PRSO ,WEAPONBIT>>\n\t\t      <AND <VERB? PUT>\n\t\t\t   <FSET? ,PRSO ,WEAPONBIT>\n\t\t\t   <EQUAL? ,PRSI ,INFLATED-BOAT>>\n\t\t      <AND <VERB? ATTACK MUNG>\n\t\t\t   <FSET? ,PRSI ,WEAPONBIT>>>\n\t\t  <REMOVE-CAREFULLY ,INFLATED-BOAT>\n\t\t  <MOVE ,PUNCTURED-BOAT ,HERE>\n\t\t  <ROB ,INFLATED-BOAT ,HERE>\n\t\t  <MOVE ,WINNER ,HERE>\n\t\t  <TELL\n\"It seems that the \">\n\t\t  <COND (<VERB? DROP PUT> <TELL D ,PRSO>)\n\t\t\t(T <TELL D ,PRSI>)>\n\t\t  <TELL \" didn't agree with the boat, as evidenced\nby the loud hissing noise issuing therefrom. With a pathetic sputter, the\nboat deflates, leaving you without.\" CR>\n\t\t  <COND (<FSET? ,HERE ,NONLANDBIT>\n\t\t\t <CRLF>\n\t\t\t <COND (<==? ,HERE ,RESERVOIR ,IN-STREAM>\n\t\t\t\t<JIGS-UP\n\"Another pathetic sputter, this time from you, heralds your drowning.\">)\n\t\t\t       (T\n\t\t\t\t<JIGS-UP\n\"In other words, fighting the fierce currents of the Frigid River. You\nmanage to hold your own for a bit, but then you are carried over a\nwaterfall and into some nasty rocks. Ouch!\">)>)>\n\t\t  <RTRUE>)\n\t\t (<VERB? LAUNCH>\n\t  \t   <TELL \"You're not in the boat!\" CR>)>)\n\t  (<VERB? BOARD>\n\t   <COND (<OR <IN? ,SCEPTRE ,WINNER>\n\t\t      <IN? ,KNIFE ,WINNER>\n\t\t      <IN? ,SWORD ,WINNER>\n\t\t      <IN? ,RUSTY-KNIFE ,WINNER>\n\t\t      <IN? ,AXE ,WINNER>\n\t\t      <IN? ,STILETTO ,WINNER>>\n\t\t  <TELL\n\"Oops! Something sharp seems to have slipped and punctured the boat.\nThe boat deflates to the sounds of hissing, sputtering, and cursing.\" CR>\n\t\t  <REMOVE-CAREFULLY ,INFLATED-BOAT>\n\t\t  <MOVE ,PUNCTURED-BOAT ,HERE>\n\t\t  <THIS-IS-IT ,PUNCTURED-BOAT>\n\t\t  T)>)\n\t  (<VERB? INFLATE FILL>\n\t   <TELL \"Inflating it further would probably burst it.\" CR>)\n\t  (<VERB? DEFLATE>\n\t   <COND (<EQUAL? <LOC ,WINNER> ,INFLATED-BOAT>\n\t\t  <TELL\n\"You can't deflate the boat while you're in it.\" CR>)\n\t\t (<NOT <IN? ,INFLATED-BOAT ,HERE>>\n\t\t  <TELL\n\"The boat must be on the ground to be deflated.\" CR>)\n\t\t (T <TELL\n\"The boat deflates.\" CR>\n\t\t  <SETG DEFLATE T>\n\t\t  <REMOVE-CAREFULLY ,INFLATED-BOAT>\n\t\t  <MOVE ,INFLATABLE-BOAT ,HERE>\n\t\t  <THIS-IS-IT ,INFLATABLE-BOAT>)>)>>"
  },
  "BREATHE": {
   "name": "BREATHE",
   "file": "1actions.zil",
   "line": 2817,
   "endLine": 2818,
   "source": "<ROUTINE BREATHE ()\n\t <PERFORM ,V?INFLATE ,PRSO ,LUNGS>>"
  },
  "IBOAT-FUNCTION": {
   "name": "IBOAT-FUNCTION",
   "file": "1actions.zil",
   "line": 2820,
   "endLine": 2840,
   "source": "<ROUTINE IBOAT-FUNCTION ()\n\t <COND (<VERB? INFLATE FILL>\n\t\t<COND (<NOT <IN? ,INFLATABLE-BOAT ,HERE>>\n\t\t       <TELL\n\"The boat must be on the ground to be inflated.\" CR>)\n\t\t      (<EQUAL? ,PRSI ,PUMP>\n\t\t       <TELL\n\"The boat inflates and appears seaworthy.\" CR>\n\t\t       <COND (<NOT <FSET? ,BOAT-LABEL ,TOUCHBIT>>\n\t\t\t      <TELL\n\"A tan label is lying inside the boat.\" CR>)>\n\t\t       <SETG DEFLATE <>>\n\t\t       <REMOVE-CAREFULLY ,INFLATABLE-BOAT>\n\t\t       <MOVE ,INFLATED-BOAT ,HERE>\n\t\t       <THIS-IS-IT ,INFLATED-BOAT>)\n\t\t      (<EQUAL? ,PRSI ,LUNGS>\n\t\t       <TELL\n\"You don't have enough lung power to inflate it.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"With a \" D ,PRSI \"? Surely you jest!\" CR>)>)>>"
  },
  "RIVR4-ROOM": {
   "name": "RIVR4-ROOM",
   "file": "1actions.zil",
   "line": 2844,
   "endLine": 2849,
   "source": "<ROUTINE RIVR4-ROOM (RARG)\n\t <COND (<EQUAL? .RARG ,M-END>\n\t\t<COND (<AND <IN? ,BUOY ,WINNER> ,BUOY-FLAG>\n\t      \t       <TELL\n\"You notice something funny about the feel of the buoy.\" CR>\n\t\t       <SETG BUOY-FLAG <>>)>)>>"
  },
  "SAND-FUNCTION": {
   "name": "SAND-FUNCTION",
   "file": "1actions.zil",
   "line": 2855,
   "endLine": 2869,
   "source": "<ROUTINE SAND-FUNCTION ()\n\t <COND (<AND <VERB? DIG> <==? ,PRSI ,SHOVEL>>\n\t\t<SETG BEACH-DIG <+ 1 ,BEACH-DIG>>\n\t\t<COND (<G? ,BEACH-DIG 3>\n\t\t       <SETG BEACH-DIG -1>\n\t\t       <AND <IN? ,SCARAB ,HERE> <FSET ,SCARAB ,INVISIBLE>>\n\t\t       <JIGS-UP \"The hole collapses, smothering you.\">)\n\t\t      (<EQUAL? ,BEACH-DIG 3>\n\t\t       <COND (<FSET? ,SCARAB ,INVISIBLE>\n\t\t\t      <TELL\n\"You can see a scarab here in the sand.\" CR>\n\t\t\t      <THIS-IS-IT ,SCARAB>\n\t\t\t      <FCLEAR ,SCARAB ,INVISIBLE>)>)\n\t\t      (T\n\t\t       <TELL <GET ,BDIGS ,BEACH-DIG> CR>)>)>>"
  },
  "TREE-ROOM": {
   "name": "TREE-ROOM",
   "file": "1actions.zil",
   "line": 2880,
   "endLine": 2917,
   "source": "<ROUTINE TREE-ROOM (RARG \"AUX\" F)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are about 10 feet above the ground nestled among some large\nbranches. The nearest branch above you is above your reach.\" CR>\n\t\t<COND (<AND <SET F <FIRST? ,PATH>>\n\t\t\t    <NEXT? .F>>\n\t\t       <TELL \"On the ground below you can see:  \">\n\t\t       <PRINT-CONTENTS ,PATH>\n\t\t       <TELL \".\" CR>)>)\n\t       (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<AND <VERB? CLIMB-DOWN> <EQUAL? ,PRSO ,TREE ,ROOMS>>\n\t\t       <DO-WALK ,P?DOWN>)\n\t\t      (<AND <VERB? CLIMB-UP CLIMB-FOO>\n\t\t\t    <EQUAL? ,PRSO ,TREE>>\n\t\t       <DO-WALK ,P?UP>)\n\t\t      (<VERB? DROP>\n\t\t       <COND (<NOT <IDROP>> <RTRUE>)\n\t\t\t     (<AND <EQUAL? ,PRSO ,NEST> <IN? ,EGG ,NEST>>\n\t\t\t      <TELL\n\"The nest falls to the ground, and the egg spills out of it, seriously\ndamaged.\" CR>\n\t\t\t      <REMOVE-CAREFULLY ,EGG>\n\t\t\t      <MOVE ,BROKEN-EGG ,PATH>)\n\t\t\t     (<EQUAL? ,PRSO ,EGG>\n\t\t\t      <TELL\n\"The egg falls to the ground and springs open, seriously damaged.\">\n\t\t\t      <MOVE ,EGG ,PATH>\n\t\t\t      <BAD-EGG>\n\t\t\t      <CRLF>)\n\t\t\t     (<NOT <EQUAL? ,PRSO ,WINNER ,TREE>>\n\t\t\t      <MOVE ,PRSO ,PATH>\n\t\t\t      <TELL\n\"The \" D ,PRSO \" falls to the ground.\" CR>)\n\t\t\t     (<VERB? LEAP>\n\t\t\t      <JIGS-UP\n\t\t\t        \"That was just a bit too far down.\">)>)>)\n\t       (<EQUAL? .RARG ,M-ENTER> <ENABLE <QUEUE I-FOREST-ROOM -1>>)>>"
  },
  "EGG-OBJECT": {
   "name": "EGG-OBJECT",
   "file": "1actions.zil",
   "line": 2919,
   "endLine": 2958,
   "source": "<ROUTINE EGG-OBJECT ()\n\t <COND (<AND <VERB? OPEN MUNG> <EQUAL? ,PRSO ,EGG>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"The egg is already open.\" CR>)\n\t\t      (<NOT ,PRSI>\n\t\t       <TELL \"You have neither the tools nor the expertise.\"\n\t\t\t     CR>)\n\t\t      (<EQUAL? ,PRSI ,HANDS>\n\t\t       <TELL \"I doubt you could do that without damaging it.\"\n\t\t\t     CR>)\n\t\t      (<OR <FSET? ,PRSI ,WEAPONBIT>\n\t\t\t   <FSET? ,PRSI ,TOOLBIT>\n\t\t\t   <VERB? MUNG>>\n\t\t       <TELL\n\"The egg is now open, but the clumsiness of your attempt has seriously\ncompromised its esthetic appeal.\">\n\t\t       <BAD-EGG>\n\t\t       <CRLF>)\n\t\t      (<FSET? ,PRSO ,FIGHTBIT>\n\t\t       <TELL \"Not to say that using the \"\n\t\t\t     D ,PRSI\n\t\t\t     \" isn't original too...\" CR>)\n\t\t      (T\n\t\t       <TELL \"The concept of using a \"\n\t\t\t     D ,PRSI\n\t\t\t     \" is certainly original.\" CR>\n\t\t       <FSET ,PRSO ,FIGHTBIT>)>)\n\t       (<VERB? CLIMB-ON HATCH>\n\t\t<TELL\n\"There is a noticeable crunch from beneath you, and inspection reveals\nthat the egg is lying open, badly damaged.\">\n\t\t<BAD-EGG>\n\t\t<CRLF>)\n\t       (<VERB? OPEN MUNG THROW>\n\t\t<COND (<VERB? THROW> <MOVE ,PRSO ,HERE>)>\n\t\t<TELL\n\"Your rather indelicate handling of the egg has caused it some damage,\nalthough you have succeeded in opening it.\">\n\t\t<BAD-EGG>\n\t\t<CRLF>)>>"
  },
  "BAD-EGG": {
   "name": "BAD-EGG",
   "file": "1actions.zil",
   "line": 2960,
   "endLine": 2966,
   "source": "<ROUTINE BAD-EGG (\"AUX\" L)\n\t <COND (<IN? ,CANARY ,EGG>\n\t\t<TELL \" \" <GETP ,BROKEN-CANARY ,P?FDESC>>)\n\t       (T <REMOVE-CAREFULLY ,BROKEN-CANARY>)>\n\t <MOVE ,BROKEN-EGG <LOC ,EGG>>\n\t <REMOVE-CAREFULLY ,EGG>\n\t <RTRUE>>"
  },
  "CANARY-OBJECT": {
   "name": "CANARY-OBJECT",
   "file": "1actions.zil",
   "line": 2970,
   "endLine": 2990,
   "source": "<ROUTINE CANARY-OBJECT ()\n\t <COND (<VERB? WIND>\n\t\t<COND (<EQUAL? ,PRSO ,CANARY>\n\t\t       <COND (<AND <NOT ,SING-SONG> <FOREST-ROOM?>>\n\t\t\t      <TELL\n\"The canary chirps, slightly off-key, an aria from a forgotten opera.\nFrom out of the greenery flies a lovely songbird. It perches on a\nlimb just over your head and opens its beak to sing. As it does so\na beautiful brass bauble drops from its mouth, bounces off the top of\nyour head, and lands glimmering in the grass. As the canary winds\ndown, the songbird flies away.\" CR>\n\t\t\t     <SETG SING-SONG T>\n\t\t\t     <MOVE ,BAUBLE\n\t\t\t\t   <COND (<EQUAL? ,HERE ,UP-A-TREE> ,PATH)\n\t\t\t\t\t (T ,HERE)>>)\n\t\t\t    (T\n\t\t\t     <TELL\n\"The canary chirps blithely, if somewhat tinnily, for a short time.\" CR>)>)\n\t\t     (T\n\t\t      <TELL\n\"There is an unpleasant grinding noise from inside the canary.\" CR>)>)>>"
  },
  "FOREST-ROOM?": {
   "name": "FOREST-ROOM?",
   "file": "1actions.zil",
   "line": 2992,
   "endLine": 2994,
   "source": "<ROUTINE FOREST-ROOM? ()\n\t <OR <EQUAL? ,HERE ,FOREST-1 ,FOREST-2 ,FOREST-3>\n\t     <EQUAL? ,HERE ,PATH ,UP-A-TREE>>>"
  },
  "I-FOREST-ROOM": {
   "name": "I-FOREST-ROOM",
   "file": "1actions.zil",
   "line": 2996,
   "endLine": 3002,
   "source": "<ROUTINE I-FOREST-ROOM ()\n\t <COND (<NOT <FOREST-ROOM?>>\n\t\t<DISABLE <INT I-FOREST-ROOM>>\n\t\t<RFALSE>)\n\t       (<PROB 15>\n\t\t<TELL\n\"You hear in the distance the chirping of a song bird.\" CR>)>>"
  },
  "FOREST-ROOM": {
   "name": "FOREST-ROOM",
   "file": "1actions.zil",
   "line": 3004,
   "endLine": 3009,
   "source": "<ROUTINE FOREST-ROOM (RARG)\n\t <COND (<EQUAL? .RARG ,M-ENTER> <ENABLE <QUEUE I-FOREST-ROOM -1>>)\n\t       (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<AND <VERB? CLIMB-FOO CLIMB-UP>\n\t\t\t    <EQUAL? ,PRSO ,TREE>>\n\t\t       <DO-WALK ,P?UP>)>)>>"
  },
  "WCLIF-OBJECT": {
   "name": "WCLIF-OBJECT",
   "file": "1actions.zil",
   "line": 3011,
   "endLine": 3013,
   "source": "<ROUTINE WCLIF-OBJECT ()\n\t <COND (<VERB? CLIMB-UP CLIMB-DOWN CLIMB-FOO>\n\t\t<TELL \"The cliff is too steep for climbing.\" CR>)>>"
  },
  "CLIFF-OBJECT": {
   "name": "CLIFF-OBJECT",
   "file": "1actions.zil",
   "line": 3015,
   "endLine": 3024,
   "source": "<ROUTINE CLIFF-OBJECT ()\n\t <COND (<OR <VERB? LEAP>\n\t\t    <AND <VERB? PUT> <EQUAL? ,PRSO ,ME>>>\n\t\t<TELL\n\t\t \"That would be very unwise. Perhaps even fatal.\" CR>)\n\t       (<EQUAL? ,PRSI ,CLIMBABLE-CLIFF>\n\t\t<COND (<VERB? PUT THROW-OFF>\n\t\t       <TELL\n\"The \" D ,PRSO \" tumbles into the river and is seen no more.\" CR>\n\t\t       <REMOVE-CAREFULLY ,PRSO>)>)>>"
  },
  "ROPE-FUNCTION": {
   "name": "ROPE-FUNCTION",
   "file": "1actions.zil",
   "line": 3030,
   "endLine": 3078,
   "source": "<ROUTINE ROPE-FUNCTION (\"AUX\" RLOC)\n\t <COND (<NOT <EQUAL? ,HERE ,DOME-ROOM>>\n\t\t<SETG DOME-FLAG <>>\n\t\t<COND (<VERB? TIE>\n\t\t       <TELL \"You can't tie the rope to that.\" CR>)>)\n\t       (<VERB? TIE>\n\t\t<COND (<EQUAL? ,PRSI ,RAILING>\n\t\t       <COND (,DOME-FLAG\n\t\t\t      <TELL\n\t\t\t       \"The rope is already tied to it.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"The rope drops over the side and comes within ten feet of the floor.\" CR>\n\t\t\t      <SETG DOME-FLAG T>\n\t\t\t      <FSET ,ROPE ,NDESCBIT>\n\t\t\t      <SET RLOC <LOC ,ROPE>>\n\t\t\t      <COND (<OR <NOT .RLOC>\n\t\t\t\t\t <NOT <IN? .RLOC ,ROOMS>>>\n\t\t\t\t     <MOVE ,ROPE ,HERE>)>\n\t\t\t      T)>)>)\n\t       (<AND <VERB? CLIMB-DOWN> <EQUAL? ,PRSO ,ROPE ,ROOMS> ,DOME-FLAG>\n\t\t<DO-WALK ,P?DOWN>)\n\t       (<AND <VERB? TIE-UP>\n\t\t     <EQUAL? ,ROPE ,PRSI>>\n\t\t<COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t       <COND (<L? <GETP ,PRSO ,P?STRENGTH> 0>\n\t\t\t      <TELL\n\"Your attempt to tie up the \" D ,PRSO \" awakens him.\">\n\t\t\t      <AWAKEN ,PRSO>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"The \" D ,PRSO \" struggles and you cannot tie him up.\" CR>)>)\n\t\t      (T\n\t\t       <TELL \"Why would you tie up a \" D ,PRSO \"?\" CR>)>)\n\t       (<VERB? UNTIE>\n\t\t<COND (,DOME-FLAG\n\t\t       <SETG DOME-FLAG <>>\n\t\t       <FCLEAR ,ROPE ,NDESCBIT>\n\t\t       <TELL \"The rope is now untied.\" CR>)\n\t\t      (T\n\t\t       <TELL \"It is not tied to anything.\" CR>)>)\n\t       (<AND <VERB? DROP>\n\t\t     <EQUAL? ,HERE ,DOME-ROOM>\n\t\t     <NOT ,DOME-FLAG>>\n\t\t<MOVE ,ROPE ,TORCH-ROOM>\n\t\t<TELL \"The rope drops gently to the floor below.\" CR>)\n\t       (<VERB? TAKE>\n\t\t<COND (,DOME-FLAG\n\t\t       <TELL \"The rope is tied to the railing.\" CR>)>)>>"
  },
  "UNTIE-FROM": {
   "name": "UNTIE-FROM",
   "file": "1actions.zil",
   "line": 3080,
   "endLine": 3084,
   "source": "<ROUTINE UNTIE-FROM ()\n    <COND (<AND <EQUAL? ,PRSO ,ROPE>\n\t\t<AND ,DOME-FLAG <EQUAL? ,PRSI ,RAILING>>>\n\t   <PERFORM ,V?UNTIE ,PRSO>)\n\t  (T <TELL \"It's not attached to that!\" CR>)>>"
  },
  "SLIDE-FUNCTION": {
   "name": "SLIDE-FUNCTION",
   "file": "1actions.zil",
   "line": 3086,
   "endLine": 3096,
   "source": "<ROUTINE SLIDE-FUNCTION ()\n\t <COND (<OR <VERB? THROUGH CLIMB-UP CLIMB-DOWN CLIMB-FOO>\n\t\t    <AND <VERB? PUT> <EQUAL? ,PRSO ,ME>>>\n\t\t<COND (<EQUAL? ,HERE ,CELLAR>\n\t\t       <DO-WALK ,P?WEST>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"You tumble down the slide....\" CR>\n\t\t       <GOTO ,CELLAR>)>)\n\t       (<VERB? PUT>\n\t\t<SLIDER ,PRSO>)>>"
  },
  "SLIDER": {
   "name": "SLIDER",
   "file": "1actions.zil",
   "line": 3098,
   "endLine": 3104,
   "source": "<ROUTINE SLIDER (OBJ)\n\t <COND (<FSET? .OBJ ,TAKEBIT>\n\t\t<TELL \"The \" D .OBJ \" falls into the slide and is gone.\" CR>\n\t\t<COND (<EQUAL? .OBJ ,WATER> <REMOVE-CAREFULLY .OBJ>)\n\t\t      (T\n\t\t       <MOVE .OBJ ,CELLAR>)>)\n\t       (T <TELL <PICK-ONE ,YUKS> CR>)>>"
  },
  "SANDWICH-BAG-FCN": {
   "name": "SANDWICH-BAG-FCN",
   "file": "1actions.zil",
   "line": 3106,
   "endLine": 3109,
   "source": "<ROUTINE SANDWICH-BAG-FCN ()\n\t <COND (<AND <VERB? SMELL>\n\t\t     <IN? ,LUNCH ,PRSO>>\n\t\t<TELL \"It smells of hot peppers.\" CR>)>>"
  },
  "DEAD-FUNCTION": {
   "name": "DEAD-FUNCTION",
   "file": "1actions.zil",
   "line": 3113,
   "endLine": 3173,
   "source": "<ROUTINE DEAD-FUNCTION (\"OPTIONAL\" (FOO <>) \"AUX\" M)\n\t <COND (<VERB? WALK>\n\t\t<COND (<AND <EQUAL? ,HERE ,TIMBER-ROOM>\n\t\t\t    <EQUAL? ,PRSO ,P?WEST>>\n\t\t       <TELL \"You cannot enter in your condition.\" CR>)>)\n\t       (<VERB? BRIEF VERBOSE SUPER-BRIEF\n\t\t       VERSION ;AGAIN SAVE RESTORE QUIT RESTART>\n\t\t<>)\n\t       (<VERB? ATTACK MUNG ALARM SWING>\n\t\t<TELL \"All such attacks are vain in your condition.\" CR>)\n\t       (<VERB? OPEN CLOSE EAT DRINK\n\t\t       INFLATE DEFLATE TURN BURN\n\t\t       TIE UNTIE RUB>\n\t\t<TELL\n\"Even such an action is beyond your capabilities.\" CR>)\n\t       (<VERB? WAIT>\n\t\t<TELL \"Might as well. You've got an eternity.\" CR>)\n\t       (<VERB? LAMP-ON>\n\t\t<TELL \"You need no light to guide you.\" CR>)\n\t       (<VERB? SCORE>\n\t\t<TELL \"You're dead! How can you think of your score?\" CR>)\n\t       (<VERB? TAKE RUB>\n\t\t<TELL \"Your hand passes through its object.\" CR>)\n\t       (<VERB? DROP THROW INVENTORY>\n\t\t<TELL \"You have no possessions.\" CR>)\n\t       (<VERB? DIAGNOSE>\n\t\t<TELL \"You are dead.\" CR>)\n\t       (<VERB? LOOK>\n\t\t<TELL \"The room looks strange and unearthly\">\n\t\t<COND (<NOT <FIRST? ,HERE>>\n\t\t       <TELL \".\">)\n\t\t      (T\n\t\t       <TELL \" and objects appear indistinct.\">)>\n\t\t<CRLF>\n\t\t<COND (<NOT <FSET? ,HERE ,ONBIT>>\n\t\t       <TELL\n\"Although there is no light, the room seems dimly illuminated.\" CR>)>\n\t\t<CRLF>\n\t\t<>)\n\t       (<VERB? PRAY>\n\t\t<COND (<EQUAL? ,HERE ,SOUTH-TEMPLE>\n\t\t       <FCLEAR ,LAMP ,INVISIBLE>\n\t\t       <PUTP ,WINNER ,P?ACTION 0>\n\t\t       ;<SETG GWIM-DISABLE <>>\n\t\t       <SETG ALWAYS-LIT <>>\n\t\t       <SETG DEAD <>>\n\t\t       <COND (<IN? ,TROLL ,TROLL-ROOM>\n\t\t\t      <SETG TROLL-FLAG <>>)>\n\t\t       <TELL\n\"From the distance the sound of a lone trumpet is heard. The room\nbecomes very bright and you feel disembodied. In a moment, the\nbrightness fades and you find yourself rising as if from a long\nsleep, deep in the woods. In the distance you can faintly hear a\nsongbird and the sounds of the forest.\" CR CR>\n\t\t       <GOTO ,FOREST-1>)\n\t\t      (T\n\t\t       <TELL \"Your prayers are not heard.\" CR>)>)\n\t       (T\n\t\t<TELL \"You can't even do that.\" CR>\n\t\t<SETG P-CONT <>>\n\t\t<RFATAL>)>>"
  },
  "LAKE-PSEUDO": {
   "name": "LAKE-PSEUDO",
   "file": "1actions.zil",
   "line": 3177,
   "endLine": 3183,
   "source": "<ROUTINE LAKE-PSEUDO ()\n\t <COND (,LOW-TIDE\n\t\t<TELL \"There's not much lake left....\" CR>)\n\t       (<VERB? CROSS>\n\t\t<TELL \"It's too wide to cross.\" CR>)\n\t       (<VERB? THROUGH>\n\t\t<TELL \"You can't swim in this lake.\" CR>)>>"
  },
  "STREAM-PSEUDO": {
   "name": "STREAM-PSEUDO",
   "file": "1actions.zil",
   "line": 3185,
   "endLine": 3189,
   "source": "<ROUTINE STREAM-PSEUDO ()\n\t <COND (<VERB? SWIM THROUGH>\n\t\t<TELL \"You can't swim in the stream.\" CR>)\n\t       (<VERB? CROSS>\n\t\t<TELL \"The other side is a sheer rock cliff.\" CR>)>>"
  },
  "CHASM-PSEUDO": {
   "name": "CHASM-PSEUDO",
   "file": "1actions.zil",
   "line": 3191,
   "endLine": 3201,
   "source": "<ROUTINE CHASM-PSEUDO ()\n\t <COND (<OR <VERB? LEAP>\n\t\t    <AND <VERB? PUT> <EQUAL? ,PRSO ,ME>>>\n\t\t<TELL\n\"You look before leaping, and realize that you would never survive.\" CR>)\n\t       (<VERB? CROSS>\n\t\t<TELL \"It's too far to jump, and there's no bridge.\" CR>)\n\t       (<AND <VERB? PUT THROW-OFF> <EQUAL? ,PRSI ,PSEUDO-OBJECT>>\n\t\t<TELL\n\"The \" D ,PRSO \" drops out of sight into the chasm.\" CR>\n\t\t<REMOVE-CAREFULLY ,PRSO>)>>"
  },
  "DOME-PSEUDO": {
   "name": "DOME-PSEUDO",
   "file": "1actions.zil",
   "line": 3203,
   "endLine": 3205,
   "source": "<ROUTINE DOME-PSEUDO ()\n\t <COND (<VERB? KISS>\n\t\t<TELL \"No.\" CR>)>>"
  },
  "GATE-PSEUDO": {
   "name": "GATE-PSEUDO",
   "file": "1actions.zil",
   "line": 3207,
   "endLine": 3214,
   "source": "<ROUTINE GATE-PSEUDO ()\n\t <COND (<VERB? THROUGH>\n\t\t<DO-WALK ,P?IN>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL\n\"The gate is protected by an invisible force. It makes your\nteeth ache to touch it.\" CR>)>>"
  },
  "DOOR-PSEUDO": {
   "name": "DOOR-PSEUDO",
   "file": "1actions.zil",
   "line": 3216,
   "endLine": 3220,
   "source": "<ROUTINE DOOR-PSEUDO () ;\"in Studio\"\n\t <COND (<VERB? OPEN CLOSE>\n\t\t<TELL \"The door won't budge.\" CR>)\n\t       (<VERB? THROUGH>\n\t\t<DO-WALK ,P?SOUTH>)>>"
  },
  "PAINT-PSEUDO": {
   "name": "PAINT-PSEUDO",
   "file": "1actions.zil",
   "line": 3222,
   "endLine": 3224,
   "source": "<ROUTINE PAINT-PSEUDO ()\n\t <COND (<VERB? MUNG>\n\t\t<TELL \"Some paint chips away, revealing more paint.\" CR>)>>"
  },
  "GAS-PSEUDO": {
   "name": "GAS-PSEUDO",
   "file": "1actions.zil",
   "line": 3226,
   "endLine": 3230,
   "source": "<ROUTINE GAS-PSEUDO ()\n\t <COND (<VERB? BREATHE>\t;\"REALLY BLOW\"\n\t\t<TELL \"There is too much gas to blow away.\" CR>)\n\t       (<VERB? SMELL>\n\t\t<TELL \"It smells like coal gas in here.\" CR>)>>"
  },
  "DO-FIGHT": {
   "name": "DO-FIGHT",
   "file": "1actions.zil",
   "line": 3331,
   "endLine": 3357,
   "source": "<ROUTINE DO-FIGHT (LEN \"AUX\" CNT RES O OO (OUT <>))\n\t<REPEAT ()\n\t      <SET CNT 0>\n\t      <REPEAT ()\n\t\t      <SET CNT <+ .CNT 1>>\n\t\t      <COND (<EQUAL? .CNT .LEN>\n\t\t\t     <SET RES T>\n\t\t\t     <RETURN T>)>\n\t\t      <SET OO <GET ,VILLAINS .CNT>>\n\t\t      <SET O <GET .OO ,V-VILLAIN>>\n\t\t      <COND (<NOT <FSET? .O ,FIGHTBIT>>)\n\t\t\t    (<APPLY <GETP .O ,P?ACTION>\n\t\t\t\t    ,F-BUSY?>)\n\t\t\t    (<NOT <SET RES\n\t\t\t\t       <VILLAIN-BLOW\n\t\t\t\t\t.OO\n\t\t\t\t\t.OUT>>>\n\t\t\t     <SET RES <>>\n\t\t\t     <RETURN>)\n\t\t\t    (<EQUAL? .RES ,UNCONSCIOUS>\n\t\t\t     <SET OUT <+ 1 <RANDOM 3>>>)>>\n\t      <COND (.RES\n\t\t     <COND (<NOT .OUT> <RETURN>)\n\t\t\t   (T\n\t\t\t    <SET OUT <- .OUT 1>>\n\t\t\t    <COND (<0? .OUT> <RETURN>)>)>)\n\t\t    (T <RETURN>)>>>"
  },
  "REMARK": {
   "name": "REMARK",
   "file": "1actions.zil",
   "line": 3363,
   "endLine": 3370,
   "source": "<ROUTINE REMARK (REMARK D W \"AUX\" (LEN <GET .REMARK 0>) (CNT 0) STR)\n\t <REPEAT ()\n\t         <COND (<G? <SET CNT <+ .CNT 1>> .LEN> <RETURN>)>\n\t\t <SET STR <GET .REMARK .CNT>>\n\t\t <COND (<EQUAL? .STR ,F-WEP> <PRINTD .W>)\n\t\t       (<EQUAL? .STR ,F-DEF> <PRINTD .D>)\n\t\t       (T <PRINT .STR>)>>\n\t <CRLF>>"
  },
  "FIGHT-STRENGTH": {
   "name": "FIGHT-STRENGTH",
   "file": "1actions.zil",
   "line": 3375,
   "endLine": 3381,
   "source": "<ROUTINE FIGHT-STRENGTH (\"OPTIONAL\" (ADJUST? T) \"AUX\" S)\n\t <SET S\n\t      <+ ,STRENGTH-MIN\n\t\t </ ,SCORE\n\t\t    </ ,SCORE-MAX\n\t\t       <- ,STRENGTH-MAX ,STRENGTH-MIN>>>>>\n\t <COND (.ADJUST? <+ .S <GETP ,WINNER ,P?STRENGTH>>)(T .S)>>"
  },
  "VILLAIN-STRENGTH": {
   "name": "VILLAIN-STRENGTH",
   "file": "1actions.zil",
   "line": 3383,
   "endLine": 3397,
   "source": "<ROUTINE VILLAIN-STRENGTH (OO\n\t\t\t   \"AUX\" (VILLAIN <GET .OO ,V-VILLAIN>)\n\t\t\t   OD TMP)\n\t <SET OD <GETP .VILLAIN ,P?STRENGTH>>\n\t <COND (<NOT <L? .OD 0>>\n\t\t<COND (<AND <EQUAL? .VILLAIN ,THIEF> ,THIEF-ENGROSSED>\n\t\t       <COND (<G? .OD 2> <SET OD 2>)>\n\t\t       <SETG THIEF-ENGROSSED <>>)>\n\t\t<COND (<AND ,PRSI\n\t\t\t    <FSET? ,PRSI ,WEAPONBIT>\n\t\t\t    <EQUAL? <GET .OO ,V-BEST> ,PRSI>>\n\t\t       <SET TMP <- .OD <GET .OO ,V-BEST-ADV>>>\n\t\t       <COND (<L? .TMP 1> <SET TMP 1>)>\n\t\t       <SET OD .TMP>)>)>\n\t .OD>"
  },
  "FIND-WEAPON": {
   "name": "FIND-WEAPON",
   "file": "1actions.zil",
   "line": 3401,
   "endLine": 3409,
   "source": "<ROUTINE FIND-WEAPON (O \"AUX\" W)\n\t <SET W <FIRST? .O>>\n\t <COND (<NOT .W>\n\t\t<RFALSE>)>\n\t <REPEAT ()\n\t\t <COND (<OR <EQUAL? .W ,STILETTO ,AXE ,SWORD>\n\t\t\t    <EQUAL? .W ,KNIFE ,RUSTY-KNIFE>>\n\t\t\t<RETURN .W>)\n\t\t       (<NOT <SET W <NEXT? .W>>> <RFALSE>)>>>"
  },
  "VILLAIN-BLOW": {
   "name": "VILLAIN-BLOW",
   "file": "1actions.zil",
   "line": 3413,
   "endLine": 3474,
   "source": "<ROUTINE VILLAIN-BLOW (OO OUT?\n\t\t       \"AUX\" (VILLAIN <GET .OO ,V-VILLAIN>)\n\t\t       (REMARKS <GET .OO ,V-MSGS>)\n\t\t       DWEAPON ATT DEF OA OD TBL RES NWEAPON)\n\t <FCLEAR ,WINNER ,STAGGERED>\n\t <COND (<FSET? .VILLAIN ,STAGGERED>\n\t\t<TELL \"The \" D .VILLAIN\n\t\t      \" slowly regains his feet.\" CR>\n\t\t<FCLEAR .VILLAIN ,STAGGERED>\n\t\t<RTRUE>)>\n\t <SET OA <SET ATT <VILLAIN-STRENGTH .OO>>>\n\t <COND (<NOT <G? <SET DEF <FIGHT-STRENGTH>> 0>> <RTRUE>)>\n\t <SET OD <FIGHT-STRENGTH <>>>\n\t <SET DWEAPON <FIND-WEAPON ,WINNER>>\n\t <COND (<L? .DEF 0> <SET RES ,KILLED>)\n\t       (T\n\t\t<COND (<1? .DEF>\n\t\t       <COND (<G? .ATT 2> <SET ATT 3>)>\n\t\t       <SET TBL <GET ,DEF1-RES <- .ATT 1>>>)\n\t\t      (<EQUAL? .DEF 2>\n\t\t       <COND (<G? .ATT 3> <SET ATT 4>)>\n\t\t       <SET TBL <GET ,DEF2-RES <- .ATT 1>>>)\n\t\t      (<G? .DEF 2>\n\t\t       <SET ATT <- .ATT .DEF>>\n\t\t       <COND (<L? .ATT -1> <SET ATT -2>)\n\t\t\t     (<G? .ATT 1> <SET ATT 2>)>\n\t\t       <SET TBL <GET ,DEF3-RES <+ .ATT 2>>>)>\n\t\t<SET RES <GET .TBL <- <RANDOM 9> 1>>>\n\t\t<COND (.OUT?\n\t\t       <COND (<EQUAL? .RES ,STAGGER> <SET RES ,HESITATE>)\n\t\t\t     (T <SET RES ,SITTING-DUCK>)>)>\n\t\t<COND (<AND <EQUAL? .RES ,STAGGER>\n\t\t\t    .DWEAPON\n\t\t\t    <PROB 25 <COND (.HERO? 10)(T 50)>>>\n\t\t       <SET RES ,LOSE-WEAPON>)>\n\t\t<REMARK\n\t\t  <RANDOM-ELEMENT <GET .REMARKS <- .RES 1>>>\n\t\t  ,WINNER\n\t\t  .DWEAPON>)>\n\t <COND (<OR <EQUAL? .RES ,MISSED> <EQUAL? .RES ,HESITATE>>)\n\t       (<EQUAL? .RES ,UNCONSCIOUS>)\n\t       (<OR <EQUAL? .RES ,KILLED>\n\t\t    <EQUAL? .RES ,SITTING-DUCK>>\n\t\t<SET DEF 0>)\n\t       (<EQUAL? .RES ,LIGHT-WOUND>\n\t\t<SET DEF <- .DEF 1>>\n\t\t<COND (<L? .DEF 0> <SET DEF 0>)>\n\t\t<COND (<G? ,LOAD-ALLOWED 50>\n\t\t       <SETG LOAD-ALLOWED <- ,LOAD-ALLOWED 10>>)>)\n\t       (<EQUAL? .RES ,SERIOUS-WOUND>\n\t\t<SET DEF <- .DEF 2>>\n\t\t<COND (<L? .DEF 0> <SET DEF 0>)>\n\t\t<COND (<G? ,LOAD-ALLOWED 50>\n\t\t       <SETG LOAD-ALLOWED <- ,LOAD-ALLOWED 20>>)>)\n\t       (<EQUAL? .RES ,STAGGER> <FSET ,WINNER ,STAGGERED>)\n\t       (T\n\t\t;<AND <EQUAL? .RES ,LOSE-WEAPON> .DWEAPON>\n\t\t<MOVE .DWEAPON ,HERE>\n\t\t<COND (<SET NWEAPON <FIND-WEAPON ,WINNER>>\n\t\t       <TELL\n\"Fortunately, you still have a \" D .NWEAPON \".\" CR>)>)>\n\t <WINNER-RESULT .DEF .RES .OD>>"
  },
  "HERO-BLOW": {
   "name": "HERO-BLOW",
   "file": "1actions.zil",
   "line": 3476,
   "endLine": 3548,
   "source": "<ROUTINE HERO-BLOW (\"AUX\" OO VILLAIN (OUT? <>) DWEAPON ATT DEF (CNT 0)\n\t\t    OA OD TBL RES NWEAPON (LEN <GET ,VILLAINS 0>))\n\t <REPEAT ()\n\t\t <SET CNT <+ .CNT 1>>\n\t\t <COND (<EQUAL? .CNT .LEN> <RETURN>)>\n\t\t <SET OO <GET ,VILLAINS .CNT>>\n\t\t <COND (<EQUAL? <GET .OO ,V-VILLAIN> ,PRSO>\n\t\t\t<RETURN>)>>\n\t <FSET ,PRSO ,FIGHTBIT>\n\t <COND (<FSET? ,WINNER ,STAGGERED>\n\t\t<TELL\n\"You are still recovering from that last blow, so your attack is\nineffective.\" CR>\n\t\t<FCLEAR ,WINNER ,STAGGERED>\n\t\t<RTRUE>)>\n\t <SET ATT <FIGHT-STRENGTH>>\n\t <COND (<L? .ATT 1> <SET ATT 1>)>\n\t <SET OA .ATT>\n\t <SET VILLAIN <GET .OO ,V-VILLAIN>>\n\t <COND (<0? <SET OD <SET DEF <VILLAIN-STRENGTH .OO>>>>\n\t\t<COND (<EQUAL? ,PRSO ,WINNER>\n\t\t       <RETURN <JIGS-UP\n\"Well, you really did it that time. Is suicide painless?\">>)>\n\t\t<TELL \"Attacking the \" D .VILLAIN \" is pointless.\" CR>\n\t\t<RTRUE>)>\n\t <SET DWEAPON <FIND-WEAPON .VILLAIN>>\n\t <COND (<OR <NOT .DWEAPON> <L? .DEF 0>>\n\t\t<TELL \"The \">\n\t\t<COND (<L? .DEF 0> <TELL \"unconscious\">)\n\t\t      (T <TELL \"unarmed\">)>\n\t\t<TELL \" \" D .VILLAIN\n\t\t      \" cannot defend himself: He dies.\" CR>\n\t\t<SET RES ,KILLED>)\n\t       (T\n\t\t<COND (<1? .DEF>\n\t\t       <COND (<G? .ATT 2> <SET ATT 3>)>\n\t\t       <SET TBL <GET ,DEF1-RES <- .ATT 1>>>)\n\t\t      (<EQUAL? .DEF 2>\n\t\t       <COND (<G? .ATT 3> <SET ATT 4>)>\n\t\t       <SET TBL <GET ,DEF2-RES <- .ATT 1>>>)\n\t\t      (<G? .DEF 2>\n\t\t       <SET ATT <- .ATT .DEF>>\n\t\t       <COND (<L? .ATT -1> <SET ATT -2>)\n\t\t\t     (<G? .ATT 1> <SET ATT 2>)>\n\t\t       <SET TBL <GET ,DEF3-RES <+ .ATT 2>>>)>\n\t\t<SET RES <GET .TBL <- <RANDOM 9> 1>>>\n\t\t<COND (.OUT?\n\t\t       <COND (<EQUAL? .RES ,STAGGER> <SET RES ,HESITATE>)\n\t\t\t     (T <SET RES ,SITTING-DUCK>)>)>\n\t\t<COND (<AND <EQUAL? .RES ,STAGGER> .DWEAPON <PROB 25>>\n\t\t       <SET RES ,LOSE-WEAPON>)>\n\t\t<REMARK\n\t\t  <RANDOM-ELEMENT <GET ,HERO-MELEE <- .RES 1>>>\n\t\t  ,PRSO\n\t\t  ,PRSI>)>\n\t <COND (<OR <EQUAL? .RES ,MISSED> <EQUAL? .RES ,HESITATE>>)\n\t       (<EQUAL? .RES ,UNCONSCIOUS> <SET DEF <- .DEF>>)\n\t       (<OR <EQUAL? .RES ,KILLED> <EQUAL? .RES ,SITTING-DUCK>>\n\t\t<SET DEF 0>)\n\t       (<EQUAL? .RES ,LIGHT-WOUND>\n\t\t<SET DEF <- .DEF 1>>\n\t\t<COND (<L? .DEF 0> <SET DEF 0>)>)\n\t       (<EQUAL? .RES ,SERIOUS-WOUND>\n\t\t<SET DEF <- .DEF 2>>\n\t\t<COND (<L? .DEF 0> <SET DEF 0>)>)\n\t       (<EQUAL? .RES ,STAGGER> <FSET ,PRSO ,STAGGERED>)\n\t       (T\n\t\t;<AND <EQUAL? .RES ,LOSE-WEAPON> .DWEAPON>\n\t\t<FCLEAR .DWEAPON ,NDESCBIT>\n\t\t<FSET .DWEAPON ,WEAPONBIT>\n\t\t<MOVE .DWEAPON ,HERE>\n\t\t<THIS-IS-IT .DWEAPON>)>\n\t <VILLAIN-RESULT ,PRSO .DEF .RES>>"
  },
  "WINNER-RESULT": {
   "name": "WINNER-RESULT",
   "file": "1actions.zil",
   "line": 3552,
   "endLine": 3564,
   "source": "<ROUTINE WINNER-RESULT (DEF RES OD)\n\t <PUTP ,WINNER\n\t       ,P?STRENGTH\n\t       <COND (<0? .DEF> -10000)(T <- .DEF .OD>)>>\n\t <COND (<L? <- .DEF .OD> 0>\n\t\t<ENABLE <QUEUE I-CURE ,CURE-WAIT>>)>\n\t <COND (<NOT <G? <FIGHT-STRENGTH> 0>>\n\t\t<PUTP ,WINNER ,P?STRENGTH <+ 1 <- <FIGHT-STRENGTH <>>>>>\n\t\t<JIGS-UP\n\"It appears that that last blow was too much for you. I'm afraid you\nare dead.\">\n\t\t<>)\n\t       (T .RES)>>"
  },
  "VILLAIN-RESULT": {
   "name": "VILLAIN-RESULT",
   "file": "1actions.zil",
   "line": 3566,
   "endLine": 3580,
   "source": "<ROUTINE VILLAIN-RESULT (VILLAIN DEF RES)\n\t <PUTP .VILLAIN ,P?STRENGTH .DEF>\n\t <COND (<0? .DEF>\n\t\t<FCLEAR .VILLAIN ,FIGHTBIT>\n\t\t<TELL\n\"Almost as soon as the \" D .VILLAIN \" breathes his last breath, a cloud\nof sinister black fog envelops him, and when the fog lifts, the\ncarcass has disappeared.\" CR>\n\t\t<REMOVE-CAREFULLY .VILLAIN>\n\t\t<APPLY <GETP .VILLAIN ,P?ACTION> ,F-DEAD>\n\t\t.RES)\n\t       (<EQUAL? .RES ,UNCONSCIOUS>\n\t\t<APPLY <GETP .VILLAIN ,P?ACTION> ,F-UNCONSCIOUS>\n\t\t.RES)\n\t       (T .RES)>>"
  },
  "WINNING?": {
   "name": "WINNING?",
   "file": "1actions.zil",
   "line": 3584,
   "endLine": 3591,
   "source": "<ROUTINE WINNING? (V \"AUX\" VS PS)\n\t <SET VS <GETP .V ,P?STRENGTH>>\n\t <SET PS <- .VS <FIGHT-STRENGTH>>>\n\t <COND (<G? .PS 3> <PROB 90>)\n\t       (<G? .PS 0> <PROB 75>)\n\t       (<0? .PS> <PROB 50>)\n\t       (<G? .VS 1> <PROB 25>)\n\t       (T <PROB 10>)>>"
  },
  "I-CURE": {
   "name": "I-CURE",
   "file": "1actions.zil",
   "line": 3593,
   "endLine": 3602,
   "source": "<ROUTINE I-CURE (\"AUX\" (S <GETP ,WINNER ,P?STRENGTH>))\n\t <COND (<G? .S 0> <SET S 0> <PUTP ,WINNER ,P?STRENGTH .S>)\n\t       (<L? .S 0> <SET S <+ .S 1>> <PUTP ,WINNER ,P?STRENGTH .S>)>\n\t <COND (<L? .S 0>\n\t\t<COND (<L? ,LOAD-ALLOWED ,LOAD-MAX>\n\t\t       <SETG LOAD-ALLOWED <+ ,LOAD-ALLOWED 10>>)>\n\t\t<ENABLE <QUEUE I-CURE ,CURE-WAIT>>)\n\t       (T\n\t\t<SETG LOAD-ALLOWED ,LOAD-MAX>\n\t\t<DISABLE <INT I-CURE>>)>>"
  },
  "I-FIGHT": {
   "name": "I-FIGHT",
   "file": "1actions.zil",
   "line": 3810,
   "endLine": 3841,
   "source": "<ROUTINE I-FIGHT (\"AUX\" (FIGHT? <>) (LEN <GET ,VILLAINS 0>)\n\t\t  CNT OO O P)\n      <COND (,DEAD <RFALSE>)>\n      <SET CNT 0>\n      <REPEAT ()\n\t      <SET CNT <+ .CNT 1>>\n\t      <COND (<EQUAL? .CNT .LEN> <RETURN>)>\n\t      <SET OO <GET ,VILLAINS .CNT>>\n\t      <COND (<AND <IN? <SET O <GET .OO ,V-VILLAIN>> ,HERE>\n\t\t\t  <NOT <FSET? .O ,INVISIBLE>>>\n\t\t     <COND (<AND <EQUAL? .O ,THIEF> ,THIEF-ENGROSSED>\n\t\t\t    <SETG THIEF-ENGROSSED <>>)\n\t\t\t   (<L? <GETP .O ,P?STRENGTH> 0>\n\t\t\t    <SET P <GET .OO ,V-PROB>>\n\t\t\t    <COND (<AND <NOT <0? .P>> <PROB .P>>\n\t\t\t\t   <PUT .OO ,V-PROB 0>\n\t\t\t\t   <AWAKEN .O>)\n\t\t\t\t  (T\n\t\t\t\t   <PUT .OO ,V-PROB <+ .P 25>>)>)\n\t\t\t   (<OR <FSET? .O ,FIGHTBIT>\n\t\t\t\t<APPLY <GETP .O ,P?ACTION> ,F-FIRST?>>\n\t\t\t    <SET FIGHT? T>)>)\n\t\t    (T\n\t\t     <COND (<FSET? .O ,FIGHTBIT>\n\t\t\t    <APPLY <GETP .O ,P?ACTION> ,F-BUSY?>)>\n\t\t     <COND (<EQUAL? .O ,THIEF> <SETG THIEF-ENGROSSED <>>)>\n\t\t     <FCLEAR ,WINNER ,STAGGERED>\n\t\t     <FCLEAR .O ,STAGGERED>\n\t\t     <FCLEAR .O ,FIGHTBIT>\n\t\t     <AWAKEN .O>)>>\n      <COND (<NOT .FIGHT?> <RFALSE>)>\n      <DO-FIGHT .LEN>>"
  },
  "AWAKEN": {
   "name": "AWAKEN",
   "file": "1actions.zil",
   "line": 3843,
   "endLine": 3847,
   "source": "<ROUTINE AWAKEN (O \"AUX\" (S <GETP .O ,P?STRENGTH>))\n\t <COND (<L? .S 0>\n\t\t<PUTP .O ,P?STRENGTH <- 0 .S>>\n\t\t<APPLY <GETP .O ,P?ACTION> ,F-CONSCIOUS>)>\n\t T>"
  },
  "I-SWORD": {
   "name": "I-SWORD",
   "file": "1actions.zil",
   "line": 3851,
   "endLine": 3879,
   "source": "<ROUTINE I-SWORD (\"AUX\" (DEM <INT I-SWORD>) (G <GETP ,SWORD ,P?TVALUE>)\n\t\t        (NG 0) P T L)\n\t <COND (<IN? ,SWORD ,ADVENTURER>\n\t\t<COND (<INFESTED? ,HERE> <SET NG 2>)\n\t\t      (T\n\t\t       <SET P 0>\n\t\t       <REPEAT ()\n\t\t\t       <COND (<0? <SET P <NEXTP ,HERE .P>>>\n\t\t\t\t      <RETURN>)\n\t\t\t\t     (<NOT <L? .P ,LOW-DIRECTION>>\n\t\t\t\t      <SET T <GETPT ,HERE .P>>\n\t\t\t\t      <SET L <PTSIZE .T>>\n\t\t\t\t      <COND (<EQUAL? .L ,UEXIT ,CEXIT ,DEXIT>\n\t\t\t\t\t     <COND (<INFESTED? <GETB .T 0>>\n\t\t\t\t\t\t    <SET NG 1>\n\t\t\t\t\t\t    <RETURN>)>)>)>>)>\n\t\t<COND (<EQUAL? .NG .G> <RFALSE>)\n\t\t      (<EQUAL? .NG 2>\n\t\t       <TELL \"Your sword has begun to glow very brightly.\" CR>)\n\t\t      (<1? .NG>\n\t\t       <TELL \"Your sword is glowing with a faint blue glow.\"\n\t\t\t     CR>)\n\t\t      (<0? .NG>\n\t\t       <TELL \"Your sword is no longer glowing.\" CR>)>\n\t\t<PUTP ,SWORD ,P?TVALUE .NG>\n\t\t<RTRUE>)\n\t       (T\n\t\t<PUT .DEM ,C-ENABLED? 0>\n\t\t<RFALSE>)>>"
  },
  "INFESTED?": {
   "name": "INFESTED?",
   "file": "1actions.zil",
   "line": 3881,
   "endLine": 3886,
   "source": "<ROUTINE INFESTED? (R \"AUX\" (F <FIRST? .R>))\n\t <REPEAT ()\n\t\t <COND (<NOT .F> <RFALSE>)\n\t\t       (<AND <FSET? .F ,ACTORBIT> <NOT <FSET? .F ,INVISIBLE>>>\n\t\t\t<RTRUE>)\n\t\t       (<NOT <SET F <NEXT? .F>>> <RFALSE>)>>>"
  },
  "I-THIEF": {
   "name": "I-THIEF",
   "file": "1actions.zil",
   "line": 3890,
   "endLine": 3931,
   "source": "<ROUTINE I-THIEF (\"AUX\" (RM <LOC ,THIEF>) ROBJ HERE? (ONCE <>) (FLG <>))\n   <PROG ()\n     <COND (<SET HERE? <NOT <FSET? ,THIEF ,INVISIBLE>>>\n\t    <SET RM <LOC ,THIEF>>)>\n     <COND\n      (<AND <EQUAL? .RM ,TREASURE-ROOM> <NOT <EQUAL? .RM ,HERE>>>\n       <COND (.HERE? <HACK-TREASURES> <SET HERE? <>>)>\n       <DEPOSIT-BOOTY ,TREASURE-ROOM> ;\"silent\")\n      (<AND <EQUAL? .RM ,HERE>\n\t    <NOT <FSET? .RM ,ONBIT>>\n\t    <NOT <IN? ,TROLL ,HERE>>>\n       <COND (<THIEF-VS-ADVENTURER .HERE?> <RTRUE>)>\n       <COND (<FSET? ,THIEF ,INVISIBLE> <SET HERE? <>>)>)\n      (T\n       <COND (<AND <IN? ,THIEF .RM>\n\t\t   <NOT <FSET? ,THIEF ,INVISIBLE>>> ;\"Leave if victim left\"\n\t      <FSET ,THIEF ,INVISIBLE>\n\t      <SET HERE? <>>)>\n       <COND (<FSET? .RM ,TOUCHBIT>     ;\"Hack the adventurer's belongings\"\n\t      <ROB .RM ,THIEF 75>\n\t      <SET FLG\n\t\t   <COND (<AND <FSET? .RM ,MAZEBIT>\n\t\t\t       <FSET? ,HERE ,MAZEBIT>>\n\t\t\t  <ROB-MAZE .RM>)\n\t\t\t (T <STEAL-JUNK .RM>)>>)>)>\n     <COND (<AND <SET ONCE <NOT .ONCE>> <NOT .HERE?>>\n\t\t\t\t\t   ;\"Move to next room, and hack.\"\n\t    <RECOVER-STILETTO>\n\t    <REPEAT ()\n\t\t    <COND (<AND .RM <SET RM <NEXT? .RM>>>)\n\t\t\t  (T <SET RM <FIRST? ,ROOMS>>)>\n\t\t    <COND (<AND <NOT <FSET? .RM ,SACREDBIT>>\n\t\t\t\t<FSET? .RM ,RLANDBIT>>\n\t\t\t   <MOVE ,THIEF .RM>\n\t\t\t   <FCLEAR ,THIEF ,FIGHTBIT>\n\t\t\t   <FSET ,THIEF ,INVISIBLE>\n\t\t\t   <SETG THIEF-HERE <>>\n\t\t\t   <RETURN>)>>\n\t    <AGAIN>)>>\n   <COND (<NOT <EQUAL? .RM ,TREASURE-ROOM>>\n\t  <DROP-JUNK .RM>)>\n   .FLG>"
  },
  "DROP-JUNK": {
   "name": "DROP-JUNK",
   "file": "1actions.zil",
   "line": 3933,
   "endLine": 3947,
   "source": "<ROUTINE DROP-JUNK (RM \"AUX\" X N (FLG <>))\n\t <SET X <FIRST? ,THIEF>>\n\t <REPEAT ()\n\t\t <COND (<NOT .X> <RETURN .FLG>)>\n\t\t <SET N <NEXT? .X>>\n\t\t <COND (<EQUAL? .X ,STILETTO ,LARGE-BAG>)\n\t\t       (<AND <0? <GETP .X ,P?TVALUE>> <PROB 30 T>>\n\t\t\t<FCLEAR .X ,INVISIBLE>\n\t\t\t<MOVE .X .RM>\n\t\t\t<COND (<AND <NOT .FLG> <EQUAL? .RM ,HERE>>\n\t\t\t       <TELL\n\"The robber, rummaging through his bag, dropped a few items he found\nvalueless.\" CR>\n\t\t\t       <SET FLG T>)>)>\n\t\t <SET X .N>>>"
  },
  "RECOVER-STILETTO": {
   "name": "RECOVER-STILETTO",
   "file": "1actions.zil",
   "line": 3949,
   "endLine": 3952,
   "source": "<ROUTINE RECOVER-STILETTO ()\n\t <COND (<IN? ,STILETTO <LOC ,THIEF>>\n\t\t<FSET ,STILETTO ,NDESCBIT>\n\t\t<MOVE ,STILETTO ,THIEF>)>>"
  },
  "STEAL-JUNK": {
   "name": "STEAL-JUNK",
   "file": "1actions.zil",
   "line": 3954,
   "endLine": 3974,
   "source": "<ROUTINE STEAL-JUNK (RM \"AUX\" X N)\n\t <SET X <FIRST? .RM>>\n\t <REPEAT ()\n\t\t <COND (<NOT .X> <RFALSE>)>\n\t\t <SET N <NEXT? .X>>\n\t\t <COND (<AND <0? <GETP .X ,P?TVALUE>>\n\t\t\t     <FSET? .X ,TAKEBIT>\n\t\t\t     <NOT <FSET? .X ,SACREDBIT>>\n\t\t\t     <NOT <FSET? .X ,INVISIBLE>>\n\t\t\t     <OR <EQUAL? .X ,STILETTO>\n\t\t\t\t <PROB 10 T>>>\n\t\t\t<MOVE .X ,THIEF>\n\t\t\t<FSET .X ,TOUCHBIT>\n\t\t\t<FSET .X ,INVISIBLE>\n\t\t\t<COND (<EQUAL? .X ,ROPE> <SETG DOME-FLAG <>>)>\n\t\t\t<COND (<EQUAL? .RM ,HERE>\n\t\t\t       <TELL \"You suddenly notice that the \"\n\t\t\t\t     D .X \" vanished.\" CR>\n\t\t\t       <RTRUE>)\n\t\t\t      (ELSE <RFALSE>)>)>\n\t\t <SET X .N>>>"
  },
  "ROB": {
   "name": "ROB",
   "file": "1actions.zil",
   "line": 3976,
   "endLine": 3989,
   "source": "<ROUTINE ROB (WHAT WHERE \"OPTIONAL\" (PROB <>) \"AUX\" N X (ROBBED? <>))\n\t <SET X <FIRST? .WHAT>>\n\t <REPEAT ()\n\t\t <COND (<NOT .X> <RETURN .ROBBED?>)>\n\t\t <SET N <NEXT? .X>>\n\t\t <COND (<AND <NOT <FSET? .X ,INVISIBLE>>\n\t\t\t     <NOT <FSET? .X ,SACREDBIT>>\n\t\t\t     <G? <GETP .X ,P?TVALUE> 0>\n\t\t\t     <OR <NOT .PROB> <PROB .PROB>>>\n\t\t\t<MOVE .X .WHERE>\n\t\t\t<FSET .X ,TOUCHBIT>\n\t\t\t<COND (<EQUAL? .WHERE ,THIEF> <FSET .X ,INVISIBLE>)>\n\t\t\t<SET ROBBED? T>)>\n\t\t <SET X .N>>>"
  },
  "V-DIAGNOSE": {
   "name": "V-DIAGNOSE",
   "file": "1actions.zil",
   "line": 3993,
   "endLine": 4024,
   "source": "<ROUTINE V-DIAGNOSE (\"AUX\" (MS <FIGHT-STRENGTH <>>)\n\t\t     (WD <GETP ,WINNER ,P?STRENGTH>) (RS <+ .MS .WD>))\n\t #DECL ((MS WD RS) FIX)\n\t <COND (<0? <GET <INT I-CURE> ,C-ENABLED?>> <SET WD 0>)\n\t       (ELSE <SET WD <- .WD>>)>\n\t <COND (<0? .WD> <TELL \"You are in perfect health.\">)\n\t       (T\n\t\t<TELL \"You have \">\n\t\t<COND (<1? .WD> <TELL \"a light wound,\">)\n\t\t      (<EQUAL? .WD 2> <TELL \"a serious wound,\">)\n\t\t      (<EQUAL? .WD 3> <TELL \"several wounds,\">)\n\t\t      (<G? .WD 3> <TELL \"serious wounds,\">)>)>\n\t <COND (<NOT <0? .WD>>\n\t\t<TELL \" which will be cured after \">\n\t\t<PRINTN\n\t\t <+ <* ,CURE-WAIT <- .WD 1>>\n\t\t    <GET <INT I-CURE> ,C-TICK>>>\n\t\t<TELL \" moves.\">)>\n\t <CRLF>\n\t <TELL \"You can \">\n\t <COND (<0? .RS> <TELL \"expect death soon\">)\n\t       (<1? .RS> <TELL \"be killed by one more light wound\">)\n\t       (<EQUAL? .RS 2> <TELL \"be killed by a serious wound\">)\n\t       (<EQUAL? .RS 3> <TELL \"survive one serious wound\">)\n\t       (<G? .RS 3>\n\t\t<TELL \"survive several wounds\">)>\n\t <TELL \".\" CR>\n\t <COND (<NOT <0? ,DEATHS>>\n\t\t<TELL \"You have been killed \">\n\t\t<COND (<1? ,DEATHS> <TELL \"once\">)\n\t\t      (T <TELL \"twice\">)>\n\t\t<TELL \".\" CR>)>>"
  },
  "V-SCORE": {
   "name": "V-SCORE",
   "file": "1actions.zil",
   "line": 4026,
   "endLine": 4044,
   "source": "<ROUTINE V-SCORE (\"OPTIONAL\" (ASK? T))\n\t #DECL ((ASK?) <OR ATOM FALSE>)\n\t <TELL \"Your score is \">\n\t <TELL N ,SCORE>\n\t <TELL \" (total of 350 points), in \">\n\t <TELL N ,MOVES>\n\t <COND (<1? ,MOVES> <TELL \" move.\">) (ELSE <TELL \" moves.\">)>\n\t <CRLF>\n\t <TELL \"This gives you the rank of \">\n\t <COND (<EQUAL? ,SCORE 350> <TELL \"Master Adventurer\">)\n\t       (<G? ,SCORE 330> <TELL \"Wizard\">)\n\t       (<G? ,SCORE 300> <TELL \"Master\">)\n\t       (<G? ,SCORE 200> <TELL \"Adventurer\">)\n\t       (<G? ,SCORE 100> <TELL \"Junior Adventurer\">)\n\t       (<G? ,SCORE 50> <TELL \"Novice Adventurer\">)\n\t       (<G? ,SCORE 25> <TELL \"Amateur Adventurer\">)\n\t       (T <TELL \"Beginner\">)>\n\t <TELL \".\" CR>\n\t ,SCORE>"
  },
  "JIGS-UP": {
   "name": "JIGS-UP",
   "file": "1actions.zil",
   "line": 4046,
   "endLine": 4099,
   "source": "<ROUTINE JIGS-UP (DESC \"OPTIONAL\" (PLAYER? <>))\n \t <SETG WINNER ,ADVENTURER>\n\t <COND (,DEAD\n\t\t<TELL \"|\nIt takes a talented person to be killed while already dead. YOU are such\na talent. Unfortunately, it takes a talented person to deal with it.\nI am not such a talent. Sorry.\" CR>\n\t\t<FINISH>)>\n\t <TELL .DESC CR>\n\t <COND (<NOT ,LUCKY>\n\t\t<TELL \"Bad luck, huh?\" CR>)>\n\t <PROG ()\n\t       <SCORE-UPD -10>\n\t       <TELL \"\n|    ****  You have died  ****\n|\n|\">\n\t       <COND (<FSET? <LOC ,WINNER> ,VEHBIT>\n\t\t      <MOVE ,WINNER ,HERE>)>\n\t       <COND\n\t\t(<NOT <L? ,DEATHS 2>>\n\t\t <TELL\n\"You clearly are a suicidal maniac.  We don't allow psychotics in the\ncave, since they may harm other adventurers.  Your remains will be\ninstalled in the Land of the Living Dead, where your fellow\nadventurers may gloat over them.\" CR>\n\t\t <FINISH>)\n\t\t(T\n\t\t <SETG DEATHS <+ ,DEATHS 1>>\n\t\t <MOVE ,WINNER ,HERE>\n\t\t <COND (<FSET? ,SOUTH-TEMPLE ,TOUCHBIT>\n\t\t\t<TELL\n\"As you take your last breath, you feel relieved of your burdens. The\nfeeling passes as you find yourself before the gates of Hell, where\nthe spirits jeer at you and deny you entry.  Your senses are\ndisturbed.  The objects in the dungeon appear indistinct, bleached of\ncolor, even unreal.\" CR CR>\n\t\t\t<SETG DEAD T>\n\t\t\t<SETG TROLL-FLAG T>\n\t\t\t;<SETG GWIM-DISABLE T>\n\t\t\t<SETG ALWAYS-LIT T>\n\t\t\t<PUTP ,WINNER ,P?ACTION DEAD-FUNCTION>\n\t\t\t<GOTO ,ENTRANCE-TO-HADES>)\n\t\t       (T\n\t\t\t<TELL\n\"Now, let's take a look here...\nWell, you probably deserve another chance.  I can't quite fix you\nup completely, but you can't have everything.\" CR CR>\n\t\t\t<GOTO ,FOREST-1>)>\n\t\t <FCLEAR ,TRAP-DOOR ,TOUCHBIT>\n\t\t <SETG P-CONT <>>\n\t\t <RANDOMIZE-OBJECTS>\n\t\t <KILL-INTERRUPTS>\n\t\t <RFATAL>)>>>"
  },
  "RANDOMIZE-OBJECTS": {
   "name": "RANDOMIZE-OBJECTS",
   "file": "1actions.zil",
   "line": 4101,
   "endLine": 4123,
   "source": "<ROUTINE RANDOMIZE-OBJECTS (\"AUX\" (R <>) F N L)\n\t <COND (<IN? ,LAMP ,WINNER>\n\t\t<MOVE ,LAMP ,LIVING-ROOM>)>\n\t <COND (<IN? ,COFFIN ,WINNER>\n\t\t<MOVE ,COFFIN ,EGYPT-ROOM>)>\n\t <PUTP ,SWORD ,P?TVALUE 0>\n\t <SET N <FIRST? ,WINNER>>\n\t <SET L <GET ,ABOVE-GROUND 0>>\n\t <REPEAT ()\n\t\t <SET F .N>\n\t\t <COND (<NOT .F> <RETURN>)>\n\t\t <SET N <NEXT? .F>>\n\t\t <COND (<G? <GETP .F ,P?TVALUE> 0>\n\t\t\t<REPEAT ()\n\t\t\t\t<COND (<NOT .R> <SET R <FIRST? ,ROOMS>>)>\n\t\t\t\t<COND (<AND <FSET? .R ,RLANDBIT>\n\t\t\t\t\t    <NOT <FSET? .R ,ONBIT>>\n\t\t\t\t\t    <PROB 50>>\n\t\t\t\t       <MOVE .F .R>\n\t\t\t\t       <RETURN>)\n\t\t\t\t      (ELSE <SET R <NEXT? .R>>)>>)\n\t\t       (ELSE\n\t\t\t<MOVE .F <GET ,ABOVE-GROUND <RANDOM .L>>>)>>>"
  },
  "KILL-INTERRUPTS": {
   "name": "KILL-INTERRUPTS",
   "file": "1actions.zil",
   "line": 4125,
   "endLine": 4135,
   "source": "<ROUTINE KILL-INTERRUPTS ()\n\t <DISABLE <INT I-XB>>\n\t <DISABLE <INT I-XC>>\n\t <DISABLE <INT I-CYCLOPS>>\n\t <DISABLE <INT I-LANTERN>>\n\t <DISABLE <INT I-CANDLES>>\n\t <DISABLE <INT I-SWORD>>\n\t <DISABLE <INT I-FOREST-ROOM>>\n\t <DISABLE <INT I-MATCH>>\n\t <FCLEAR ,MATCH ,ONBIT>\n\t <RTRUE>>"
  },
  "BAG-OF-COINS-F": {
   "name": "BAG-OF-COINS-F",
   "file": "1actions.zil",
   "line": 4137,
   "endLine": 4138,
   "source": "<ROUTINE BAG-OF-COINS-F ()\n\t <STUPID-CONTAINER ,BAG-OF-COINS \"coins\">>"
  },
  "TRUNK-F": {
   "name": "TRUNK-F",
   "file": "1actions.zil",
   "line": 4140,
   "endLine": 4141,
   "source": "<ROUTINE TRUNK-F ()\n\t <STUPID-CONTAINER ,TRUNK \"jewels\">>"
  },
  "STUPID-CONTAINER": {
   "name": "STUPID-CONTAINER",
   "file": "1actions.zil",
   "line": 4143,
   "endLine": 4152,
   "source": "<ROUTINE STUPID-CONTAINER (OBJ STR)\n\t <COND (<VERB? OPEN CLOSE>\n\t\t<TELL\n\"The \" .STR \" are safely inside; there's no need to do that.\" CR>)\n\t       (<VERB? LOOK-INSIDE EXAMINE>\n\t\t<TELL\n\"There are lots of \" .STR \" in there.\" CR>)\n\t       (<AND <VERB? PUT> <EQUAL? ,PRSI .OBJ>>\n\t\t<TELL\n\"Don't be silly. It wouldn't be a \" D .OBJ \" anymore.\" CR>)>>"
  },
  "DUMB-CONTAINER": {
   "name": "DUMB-CONTAINER",
   "file": "1actions.zil",
   "line": 4154,
   "endLine": 4158,
   "source": "<ROUTINE DUMB-CONTAINER ()\n\t <COND (<VERB? OPEN CLOSE LOOK-INSIDE>\n\t\t<TELL \"You can't do that.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"It looks pretty much like a \" D ,PRSO \".\" CR>)>>"
  },
  "GARLIC-F": {
   "name": "GARLIC-F",
   "file": "1actions.zil",
   "line": 4160,
   "endLine": 4165,
   "source": "<ROUTINE GARLIC-F ()\n\t <COND (<VERB? EAT>\n\t\t<REMOVE-CAREFULLY ,PRSO>\n\t\t<TELL\n\"What the heck! You won't make friends this way, but nobody around\nhere is too friendly anyhow. Gulp!\" CR>)>>"
  },
  "CHAIN-PSEUDO": {
   "name": "CHAIN-PSEUDO",
   "file": "1actions.zil",
   "line": 4167,
   "endLine": 4173,
   "source": "<ROUTINE CHAIN-PSEUDO ()\n\t <COND (<VERB? TAKE MOVE>\n\t\t<TELL \"The chain is secure.\" CR>)\n\t       (<VERB? RAISE LOWER>\n\t\t<TELL \"Perhaps you should do that to the basket.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"The chain secures a basket within the shaft.\" CR>)>> "
  },
  "TROLL-ROOM-F": {
   "name": "TROLL-ROOM-F",
   "file": "1actions.zil",
   "line": 4175,
   "endLine": 4178,
   "source": "<ROUTINE TROLL-ROOM-F (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-ENTER>\n\t\t     <IN? ,TROLL ,HERE>>\n\t\t<THIS-IS-IT ,TROLL>)>>"
  },
  "TREASURE-INSIDE": {
   "name": "TREASURE-INSIDE",
   "file": "1dungeon.zil",
   "line": 793,
   "endLine": 796,
   "source": "<ROUTINE TREASURE-INSIDE ()\n\t <COND (<VERB? OPEN>\n\t\t<SCORE-OBJ ,EMERALD>\n\t\t<RFALSE>)>>"
  },
  "GRATING-EXIT": {
   "name": "GRATING-EXIT",
   "file": "1dungeon.zil",
   "line": 1400,
   "endLine": 1408,
   "source": "<ROUTINE GRATING-EXIT ()\n\t <COND (,GRATE-REVEALED\n\t\t<COND (<FSET? ,GRATE ,OPENBIT>\n\t\t       ,GRATING-ROOM)\n\t\t      (T\n\t\t       <TELL \"The grating is closed!\" CR>\n\t\t       <THIS-IS-IT ,GRATE>\n\t\t       <RFALSE>)>)\n\t       (T <TELL \"You can't go that way.\" CR> <RFALSE>)>>"
  },
  "CANYON-VIEW-F": {
   "name": "CANYON-VIEW-F",
   "file": "1dungeon.zil",
   "line": 2406,
   "endLine": 2411,
   "source": "<ROUTINE CANYON-VIEW-F (RARG)\n\t <COND (<AND <==? .RARG ,M-BEG>\n\t\t     <VERB? LEAP>\n\t\t     <NOT ,PRSO>>\n\t\t<JIGS-UP \"Nice view, lousy place to jump.\">\n\t\t<RTRUE>)>>"
  },
  "GO": {
   "name": "GO",
   "file": "1dungeon.zil",
   "line": 2637,
   "endLine": 2661,
   "source": "<ROUTINE GO ()\n\t<ENABLE <QUEUE I-FIGHT -1>>\n\t<QUEUE I-SWORD -1>\n\t<ENABLE <QUEUE I-THIEF -1>>\n\t<QUEUE I-CANDLES 40>\n\t<QUEUE I-LANTERN 200>\n\t<PUTP ,INFLATED-BOAT ,P?VTYPE ,NONLANDBIT>\n\t<PUT ,DEF1-RES 1 <REST ,DEF1 2>>\n\t<PUT ,DEF1-RES 2 <REST ,DEF1 4>>\n\t<PUT ,DEF2-RES 2 <REST ,DEF2B 2>>\n\t<PUT ,DEF2-RES 3 <REST ,DEF2B 4>>\n\t<PUT ,DEF3-RES 1 <REST ,DEF3A 2>>\n\t<PUT ,DEF3-RES 3 <REST ,DEF3B 2>>\n\t<SETG HERE ,WEST-OF-HOUSE>\n\t<THIS-IS-IT ,MAILBOX>\n\t<COND (<NOT <FSET? ,HERE ,TOUCHBIT>>\n\t       <V-VERSION>\n\t       <CRLF>)>\n\t<SETG LIT T>\n\t<SETG WINNER ,ADVENTURER>\n\t<SETG PLAYER ,WINNER>\n\t<MOVE ,WINNER ,HERE>\n\t<V-LOOK>\n\t<MAIN-LOOP>\n\t<AGAIN>>"
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
   "line": 76,
   "endLine": 83,
   "source": "<ROUTINE NOT-HERE-PRINT (PRSO?)\n <COND (,P-OFLAG\n\t<COND (,P-XADJ <PRINTB ,P-XADJN>)>\n\t<COND (,P-XNAM <PRINTB ,P-XNAM>)>)\n       (.PRSO?\n\t<BUFFER-PRINT <GET ,P-ITBL ,P-NC1> <GET ,P-ITBL ,P-NC1L> <>>)\n       (T\n\t<BUFFER-PRINT <GET ,P-ITBL ,P-NC2> <GET ,P-ITBL ,P-NC2L> <>>)>>"
  },
  "NULL-F": {
   "name": "NULL-F",
   "file": "gglobals.zil",
   "line": 85,
   "endLine": 86,
   "source": "<ROUTINE NULL-F (\"OPTIONAL\" A1 A2)\n\t <RFALSE>>"
  },
  "STAIRS-F": {
   "name": "STAIRS-F",
   "file": "gglobals.zil",
   "line": 110,
   "endLine": 113,
   "source": "<ROUTINE STAIRS-F ()\n\t <COND (<VERB? THROUGH>\n\t\t<TELL\n\"You should say whether you want to go up or down.\" CR>)>>"
  },
  "SAILOR-FCN": {
   "name": "SAILOR-FCN",
   "file": "gglobals.zil",
   "line": 122,
   "endLine": 162,
   "source": "<ROUTINE SAILOR-FCN ()\n\t  <COND (<VERB? TELL>\n\t\t <SETG P-CONT <>>\n\t\t <SETG QUOTE-FLAG <>>\n\t\t <TELL \"You can't talk to the sailor that way.\" CR>)\n\t\t(<VERB? EXAMINE>\n\t\t %<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t '<COND (<NOT <FSET? ,VIKING-SHIP ,INVISIBLE>>\n\t\t\t\t <TELL\n\"He looks like a sailor.\" CR>\n\t\t\t\t <RTRUE>)>)\n\t\t\t(ELSE T)>\n\t\t <TELL\n\"There is no sailor to be seen.\" CR>)\n\t\t(<VERB? HELLO>\n\t\t <SETG HS <+ ,HS 1>>\n\t\t %<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t '<COND (<NOT <FSET? ,VIKING-SHIP ,INVISIBLE>>\n\t\t                 <TELL\n\"The seaman looks up and maneuvers the boat toward shore. He cries out \\\"I\nhave waited three ages for someone to say those words and save me from\nsailing this endless ocean. Please accept this gift. You may find it\nuseful!\\\" He throws something which falls near you in the sand, then sails\noff toward the west, singing a lively, but somewhat uncouth, sailor song.\" CR>\n\t\t                 <FSET ,VIKING-SHIP ,INVISIBLE>\n\t\t                 <MOVE ,VIAL ,HERE>)\n\t\t                (<==? ,HERE ,FLATHEAD-OCEAN>\n\t\t                 <COND (,SHIP-GONE\n\t\t\t                <TELL \"Nothing happens anymore.\" CR>)\n\t\t\t               (T\n\t\t\t\t        <TELL \"Nothing happens yet.\" CR>)>)\n\t\t\t\t(T <TELL \"Nothing happens here.\" CR>)>)\n\t\t\t(T\n\t\t\t '<COND (<0? <MOD ,HS 20>>\n\t\t\t\t <TELL\n\"You seem to be repeating yourself.\" CR>)\n\t\t\t\t(<0? <MOD ,HS 10>>\n\t\t\t\t <TELL\n\"I think that phrase is getting a bit worn out.\" CR>)\n\t\t\t\t(T\n\t\t\t\t <TELL \"Nothing happens here.\" CR>)>)>)>>"
  },
  "GROUND-FUNCTION": {
   "name": "GROUND-FUNCTION",
   "file": "gglobals.zil",
   "line": 170,
   "endLine": 182,
   "source": "<ROUTINE GROUND-FUNCTION ()\n\t <COND (<AND <VERB? PUT PUT-ON>\n\t\t     <EQUAL? ,PRSI ,GROUND>>\n\t\t<PERFORM ,V?DROP ,PRSO>\n\t\t<RTRUE>)\n\t       %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<EQUAL? ,HERE ,SANDY-CAVE>\n\t\t\t <SAND-FUNCTION>))\n\t\t      (T\n\t\t       '(<NULL-F>\n\t\t\t <RFALSE>))>\n\t       (<VERB? DIG>\n\t\t<TELL \"The ground is too hard for digging here.\" CR>)>>"
  },
  "GRUE-FUNCTION": {
   "name": "GRUE-FUNCTION",
   "file": "gglobals.zil",
   "line": 191,
   "endLine": 206,
   "source": "<ROUTINE GRUE-FUNCTION ()\n    <COND (<VERB? EXAMINE>\n\t   <TELL\n\"The grue is a sinister, lurking presence in the dark places of the\nearth. Its favorite diet is adventurers, but its insatiable\nappetite is tempered by its fear of light. No grue has ever been\nseen by the light of day, and few have survived its fearsome jaws\nto tell the tale.\" CR>)\n\t  (<VERB? FIND>\n\t   <TELL\n\"There is no grue here, but I'm sure there is at least one lurking\nin the darkness nearby. I wouldn't let my light go out if I were\nyou!\" CR>)\n\t  (<VERB? LISTEN>\n\t   <TELL\n\"It makes no sound but is always lurking in the darkness nearby.\" CR>)>>"
  },
  "CRETIN-FCN": {
   "name": "CRETIN-FCN",
   "file": "gglobals.zil",
   "line": 221,
   "endLine": 265,
   "source": "<ROUTINE CRETIN-FCN ()\n\t <COND (<VERB? TELL>\n\t\t<SETG P-CONT <>>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<TELL\n\"Talking to yourself is said to be a sign of impending mental collapse.\" CR>)\n\t       (<AND <VERB? GIVE>\n\t\t     <EQUAL? ,PRSI ,ME>>\n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? MAKE>\n\t\t<TELL \"Only you can do that.\" CR>)\n\t       (<VERB? DISEMBARK>\n\t\t<TELL \"You'll have to do that on your own.\" CR>)\n\t       (<VERB? EAT>\n\t\t<TELL \"Auto-cannibalism is not the answer.\" CR>)\n\t       (<VERB? ATTACK MUNG>\n\t\t<COND (<AND ,PRSI <FSET? ,PRSI ,WEAPONBIT>>\n\t\t       <JIGS-UP \"If you insist.... Poof, you're dead!\">)\n\t\t      (T\n\t\t       <TELL \"Suicide is not the answer.\" CR>)>)\n\t       (<VERB? THROW>\n\t\t<COND (<==? ,PRSO ,ME>\n\t\t       <TELL\n\"Why don't you just walk like normal people?\" CR>)>)\n\t       (<VERB? TAKE>\n\t\t<TELL \"How romantic!\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<COND %<COND (<==? ,ZORK-NUMBER 1>\n\t\t\t      '(<EQUAL? ,HERE <LOC ,MIRROR-1> <LOC ,MIRROR-2>>\n\t\t                <TELL\n\"Your image in the mirror looks tired.\" CR>))\n\t\t\t     (<==? ,ZORK-NUMBER 3>\n\t\t\t      '(,INVIS\n\t\t\t\t<TELL\n\"A good trick, as you are currently invisible.\" CR>))\n\t\t\t     (T\n\t\t\t      '(<NULL-F> <RTRUE>))>\n\t\t      (T\n\t\t       %<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t       '<TELL\n\"What you can see looks pretty much as usual, sorry to say.\" CR>)\n\t\t\t      (ELSE\n\t\t\t       '<TELL\n\"That's difficult unless your eyes are prehensile.\" CR>)>)>)>>"
  },
  "PATH-OBJECT": {
   "name": "PATH-OBJECT",
   "file": "gglobals.zil",
   "line": 282,
   "endLine": 288,
   "source": "<ROUTINE PATH-OBJECT ()\n\t <COND (<VERB? TAKE FOLLOW>\n\t\t<TELL \"You must specify a direction to go.\" CR>)\n\t       (<VERB? FIND>\n\t\t<TELL \"I can't help you there....\" CR>)\n\t       (<VERB? DIG>\n\t\t<TELL \"Not a chance.\" CR>)>>"
  },
  "ZORKMID-FUNCTION": {
   "name": "ZORKMID-FUNCTION",
   "file": "gglobals.zil",
   "line": 296,
   "endLine": 302,
   "source": "<ROUTINE ZORKMID-FUNCTION ()\n    <COND (<VERB? EXAMINE>\n\t   <TELL\n\"The zorkmid is the unit of currency of the Great Underground Empire.\" CR>)\n\t  (<VERB? FIND>\n\t   <TELL\n\"The best way to find zorkmids is to go out and look for them.\" CR>)>>"
  },
  "ZPROB": {
   "name": "ZPROB",
   "file": "gmacros.zil",
   "line": 119,
   "endLine": 122,
   "source": "<ROUTINE ZPROB\n\t (BASE)\n\t <COND (,LUCKY <G? .BASE <RANDOM 100>>)\n\t       (ELSE <G? .BASE <RANDOM 300>>)>>"
  },
  "RANDOM-ELEMENT": {
   "name": "RANDOM-ELEMENT",
   "file": "gmacros.zil",
   "line": 124,
   "endLine": 125,
   "source": "<ROUTINE RANDOM-ELEMENT (FROB)\n\t <GET .FROB <RANDOM <GET .FROB 0>>>>"
  },
  "PICK-ONE": {
   "name": "PICK-ONE",
   "file": "gmacros.zil",
   "line": 127,
   "endLine": 139,
   "source": "<ROUTINE PICK-ONE (FROB\n\t\t   \"AUX\" (L <GET .FROB 0>) (CNT <GET .FROB 1>) RND MSG RFROB)\n\t <SET L <- .L 1>>\n\t <SET FROB <REST .FROB 2>>\n\t <SET RFROB <REST .FROB <* .CNT 2>>>\n\t <SET RND <RANDOM <- .L .CNT>>>\n\t <SET MSG <GET .RFROB .RND>>\n\t <PUT .RFROB .RND <GET .RFROB 1>>\n\t <PUT .RFROB 1 .MSG>\n\t <SET CNT <+ .CNT 1>>\n\t <COND (<==? .CNT .L> <SET CNT 0>)>\n\t <PUT .FROB 0 .CNT>\n\t .MSG>"
  },
  "MAIN-LOOP": {
   "name": "MAIN-LOOP",
   "file": "gmain.zil",
   "line": 34,
   "endLine": 36,
   "source": "<ROUTINE MAIN-LOOP (\"AUX\" TRASH)\n\t <REPEAT ()\n\t\t <SET TRASH <MAIN-LOOP-1>>>>"
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
   "file": "gparser.zil",
   "line": 109,
   "endLine": 380,
   "source": "<ROUTINE PARSER (\"AUX\" (PTR ,P-LEXSTART) WRD (VAL 0) (VERB <>) (OF-FLAG <>)\n\t\t       OWINNER OMERGED LEN (DIR <>) (NW 0) (LW 0) (CNT -1))\n\t<REPEAT ()\n\t\t<COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN> <RETURN>)\n\t\t      (T\n\t\t       <COND (<NOT ,P-OFLAG>\n\t\t\t      <PUT ,P-OTBL .CNT <GET ,P-ITBL .CNT>>)>\n\t\t       <PUT ,P-ITBL .CNT 0>)>>\n\t<SET OWINNER ,WINNER>\n\t<SET OMERGED ,P-MERGED>\n\t<SETG P-ADVERB <>>\n\t<SETG P-MERGED <>>\n\t<SETG P-END-ON-PREP <>>\n\t<PUT ,P-PRSO ,P-MATCHLEN 0>\n\t<PUT ,P-PRSI ,P-MATCHLEN 0>\n\t<PUT ,P-BUTS ,P-MATCHLEN 0>\n\t<COND (<AND <NOT ,QUOTE-FLAG> <N==? ,WINNER ,PLAYER>>\n\t       <SETG WINNER ,PLAYER>\n\t       <SETG HERE <META-LOC ,PLAYER>>\n\t       ;<COND (<NOT <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t      <SETG HERE <LOC ,WINNER>>)>\n\t       <SETG LIT <LIT? ,HERE>>)>\n\t<COND (,RESERVE-PTR\n\t       <SET PTR ,RESERVE-PTR>\n\t       <STUFF ,RESERVE-LEXV ,P-LEXV>\n\t       <COND (<AND <NOT ,SUPER-BRIEF> <EQUAL? ,PLAYER ,WINNER>>\n\t\t      <CRLF>)>\n\t       <SETG RESERVE-PTR <>>\n\t       <SETG P-CONT <>>)\n\t      (,P-CONT\n\t       <SET PTR ,P-CONT>\n\t       <COND (<AND <NOT ,SUPER-BRIEF>\n\t\t\t   <EQUAL? ,PLAYER ,WINNER>\n\t\t\t   <NOT <VERB? SAY>>>\n\t\t      <CRLF>)>\n\t       <SETG P-CONT <>>)\n\t      (T\n\t       <SETG WINNER ,PLAYER>\n\t       <SETG QUOTE-FLAG <>>\n\t       <COND (<NOT <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t      <SETG HERE <LOC ,WINNER>>)>\n\t       <SETG LIT <LIT? ,HERE>>\n\t       <COND (<NOT ,SUPER-BRIEF> <CRLF>)>\n\t       <TELL \">\">\n\t       <READ ,P-INBUF ,P-LEXV>)>\n\t<SETG P-LEN <GETB ,P-LEXV ,P-LEXWORDS>>\n\t<COND (<ZERO? ,P-LEN> <TELL \"I beg your pardon?\" CR> <RFALSE>)>\n\t<COND (<EQUAL? <SET WRD <GET ,P-LEXV .PTR>> ,W?OOPS>\n\t       <COND (<EQUAL? <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>\n\t\t\t      ,W?PERIOD ,W?COMMA>\n\t\t      <SET PTR <+ .PTR ,P-LEXELEN>>\n\t\t      <SETG P-LEN <- ,P-LEN 1>>)>\n\t       <COND (<NOT <G? ,P-LEN 1>>\n\t\t      <TELL \"I can't help your clumsiness.\" CR>\n\t\t      <RFALSE>)\n\t\t     (<GET ,OOPS-TABLE ,O-PTR>\n\t\t      <COND (<AND <G? ,P-LEN 2>\n\t\t\t\t  <EQUAL? <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>\n\t\t\t\t\t  ,W?QUOTE>>\n\t\t\t     <TELL\n\"Sorry, you can't correct mistakes in quoted text.\" CR>\n\t\t\t     <RFALSE>)\n\t\t\t    (<G? ,P-LEN 2>\n\t\t\t     <TELL\n\"Warning: only the first word after OOPS is used.\" CR>)>\n\t\t      <PUT ,AGAIN-LEXV <GET ,OOPS-TABLE ,O-PTR>\n\t\t\t   <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>>\n\t\t      <SETG WINNER .OWINNER> ;\"maybe fix oops vs. chars.?\"\n\t\t      <INBUF-ADD <GETB ,P-LEXV <+ <* .PTR ,P-LEXELEN> 6>>\n\t\t\t\t <GETB ,P-LEXV <+ <* .PTR ,P-LEXELEN> 7>>\n\t\t\t\t <+ <* <GET ,OOPS-TABLE ,O-PTR> ,P-LEXELEN> 3>>\n\t\t      <STUFF ,AGAIN-LEXV ,P-LEXV>\n\t\t      <SETG P-LEN <GETB ,P-LEXV ,P-LEXWORDS>>\n\t\t      <SET PTR <GET ,OOPS-TABLE ,O-START>>\n\t\t      <INBUF-STUFF ,OOPS-INBUF ,P-INBUF>)\n\t\t     (T\n\t\t      <PUT ,OOPS-TABLE ,O-END <>>\n\t\t      <TELL \"There was no word to replace!\" CR>\n\t\t      <RFALSE>)>)\n\t      (T\n\t       <COND (<NOT <EQUAL? .WRD ,W?AGAIN ,W?G>>\n\t\t      <SETG P-NUMBER 0>)>\n\t       <PUT ,OOPS-TABLE ,O-END <>>)>\n\t<COND (<EQUAL? <GET ,P-LEXV .PTR> ,W?AGAIN ,W?G>\n\t       <COND (<ZERO? <GETB ,OOPS-INBUF 1>>\n\t\t      <TELL \"Beg pardon?\" CR>\n\t\t      <RFALSE>)\n\t\t     (,P-OFLAG\n\t\t      <TELL \"It's difficult to repeat fragments.\" CR>\n\t\t      <RFALSE>)\n\t\t     (<NOT ,P-WON>\n\t\t      <TELL \"That would just repeat a mistake.\" CR>\n\t\t      <RFALSE>)\n\t\t     (<G? ,P-LEN 1>\n\t\t      <COND (<OR <EQUAL? <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>\n\t\t\t\t\t,W?PERIOD ,W?COMMA ,W?THEN>\n\t\t\t\t <EQUAL? <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>\n\t\t\t\t\t,W?AND>>\n\t\t\t     <SET PTR <+ .PTR <* 2 ,P-LEXELEN>>>\n\t\t\t     <PUTB ,P-LEXV ,P-LEXWORDS\n\t\t\t\t   <- <GETB ,P-LEXV ,P-LEXWORDS> 2>>)\n\t\t\t    (T\n\t\t\t     <TELL \"I couldn't understand that sentence.\" CR>\n\t\t\t     <RFALSE>)>)\n\t\t     (T\n\t\t      <SET PTR <+ .PTR ,P-LEXELEN>>\n\t\t      <PUTB ,P-LEXV ,P-LEXWORDS\n\t\t\t    <- <GETB ,P-LEXV ,P-LEXWORDS> 1>>)>\n\t       <COND (<G? <GETB ,P-LEXV ,P-LEXWORDS> 0>\n\t\t      <STUFF ,P-LEXV ,RESERVE-LEXV>\n\t\t      <SETG RESERVE-PTR .PTR>)\n\t\t     (T\n\t\t      <SETG RESERVE-PTR <>>)>\n\t       ;<SETG P-LEN <GETB ,AGAIN-LEXV ,P-LEXWORDS>>\n\t       <SETG WINNER .OWINNER>\n\t       <SETG P-MERGED .OMERGED>\n\t       <INBUF-STUFF ,OOPS-INBUF ,P-INBUF>\n\t       <STUFF ,AGAIN-LEXV ,P-LEXV>\n\t       <SET CNT -1>\n\t       <SET DIR ,AGAIN-DIR>\n\t       <REPEAT ()\n\t\t<COND (<IGRTR? CNT ,P-ITBLLEN> <RETURN>)\n\t\t      (T <PUT ,P-ITBL .CNT <GET ,P-OTBL .CNT>>)>>)\n\t      (T\n\t       <STUFF ,P-LEXV ,AGAIN-LEXV>\n\t       <INBUF-STUFF ,P-INBUF ,OOPS-INBUF>\n\t       <PUT ,OOPS-TABLE ,O-START .PTR>\n\t       <PUT ,OOPS-TABLE ,O-LENGTH <* 4 ,P-LEN>>\n\t       <SET LEN\n\t\t    <* 2 <+ .PTR <* ,P-LEXELEN <GETB ,P-LEXV ,P-LEXWORDS>>>>>\n\t       <PUT ,OOPS-TABLE ,O-END <+ <GETB ,P-LEXV <- .LEN 1>>\n\t\t\t\t\t  <GETB ,P-LEXV <- .LEN 2>>>>\n\t       <SETG RESERVE-PTR <>>\n\t       <SET LEN ,P-LEN>\n\t       <SETG P-DIR <>>\n\t       <SETG P-NCN 0>\n\t       <SETG P-GETFLAGS 0>\n\t       <REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <SETG QUOTE-FLAG <>>\n\t\t       <RETURN>)\n\t\t      (<OR <SET WRD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WRD <NUMBER? .PTR>>>\n\t\t       <COND (<ZERO? ,P-LEN> <SET NW 0>)\n\t\t\t     (T <SET NW <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>>)>\n\t\t       <COND (<AND <EQUAL? .WRD ,W?TO>\n\t\t\t\t   <EQUAL? .VERB ,ACT?TELL ;,ACT?ASK>>\n\t\t\t      <SET WRD ,W?QUOTE>)\n\t\t\t     (<AND <EQUAL? .WRD ,W?THEN>\n\t\t\t\t   <G? ,P-LEN 0>\n\t\t\t\t   <NOT .VERB>\n\t\t\t\t   <NOT ,QUOTE-FLAG> ;\"Last NOT added 7/3\">\n\t\t\t      <COND (<EQUAL? .LW 0 ,W?PERIOD>\n\t\t\t\t     <SET WRD ,W?THE>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <PUT ,P-ITBL ,P-VERB ,ACT?TELL>\n\t\t\t\t     <PUT ,P-ITBL ,P-VERBN 0>\n\t\t\t\t     <SET WRD ,W?QUOTE>)>)>\n\t\t       <COND (<EQUAL? .WRD ,W?THEN ,W?PERIOD ,W?QUOTE>\n\t\t\t      <COND (<EQUAL? .WRD ,W?QUOTE>\n\t\t\t\t     <COND (,QUOTE-FLAG\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>)\n\t\t\t\t\t   (T <SETG QUOTE-FLAG T>)>)>\n\t\t\t      <OR <ZERO? ,P-LEN>\n\t\t\t\t  <SETG P-CONT <+ .PTR ,P-LEXELEN>>>\n\t\t\t      <PUTB ,P-LEXV ,P-LEXWORDS ,P-LEN>\n\t\t\t      <RETURN>)\n\t\t\t     (<AND <SET VAL\n\t\t\t\t\t<WT? .WRD\n\t\t\t\t\t     ,PS?DIRECTION\n\t\t\t\t\t     ,P1?DIRECTION>>\n\t\t\t\t   <EQUAL? .VERB <> ,ACT?WALK>\n\t\t\t\t   <OR <EQUAL? .LEN 1>\n\t\t\t\t       <AND <EQUAL? .LEN 2>\n\t\t\t\t\t    <EQUAL? .VERB ,ACT?WALK>>\n\t\t\t\t       <AND <EQUAL? .NW\n\t\t\t\t\t            ,W?THEN\n\t\t\t\t\t            ,W?PERIOD\n\t\t\t\t\t            ,W?QUOTE>\n\t\t\t\t\t    <NOT <L? .LEN 2>>>\n\t\t\t\t       <AND ,QUOTE-FLAG\n\t\t\t\t\t    <EQUAL? .LEN 2>\n\t\t\t\t\t    <EQUAL? .NW ,W?QUOTE>>\n\t\t\t\t       <AND <G? .LEN 2>\n\t\t\t\t\t    <EQUAL? .NW ,W?COMMA ,W?AND>>>>\n\t\t\t      <SET DIR .VAL>\n\t\t\t      <COND (<EQUAL? .NW ,W?COMMA ,W?AND>\n\t\t\t\t     <PUT ,P-LEXV\n\t\t\t\t\t  <+ .PTR ,P-LEXELEN>\n\t\t\t\t\t  ,W?THEN>)>\n\t\t\t      <COND (<NOT <G? .LEN 2>>\n\t\t\t\t     <SETG QUOTE-FLAG <>>\n\t\t\t\t     <RETURN>)>)\n\t\t\t     (<AND <SET VAL <WT? .WRD ,PS?VERB ,P1?VERB>>\n\t\t\t\t   <NOT .VERB>>\n\t\t\t      <SET VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERBN ,P-VTBL>\n\t\t\t      <PUT ,P-VTBL 0 .WRD>\n\t\t\t      <PUTB ,P-VTBL 2 <GETB ,P-LEXV\n\t\t\t\t\t\t    <SET CNT\n\t\t\t\t\t\t\t <+ <* .PTR 2> 2>>>>\n\t\t\t      <PUTB ,P-VTBL 3 <GETB ,P-LEXV <+ .CNT 1>>>)\n\t\t\t     (<OR <SET VAL <WT? .WRD ,PS?PREPOSITION 0>>\n\t\t\t\t  <EQUAL? .WRD ,W?ALL ,W?ONE ;,W?BOTH>\n\t\t\t\t  <WT? .WRD ,PS?ADJECTIVE>\n\t\t\t\t  <WT? .WRD ,PS?OBJECT>>\n\t\t\t      <COND (<AND <G? ,P-LEN 1>\n\t\t\t\t\t  <EQUAL? .NW ,W?OF>\n\t\t\t\t\t  <ZERO? .VAL>\n\t\t\t\t\t  <NOT <EQUAL? .WRD\n\t\t\t\t\t\t       ,W?ALL ,W?ONE ,W?A>>\n\t\t\t\t\t  ;<NOT <EQUAL? .WRD ,W?BOTH>>>\n\t\t\t\t     <SET OF-FLAG T>)\n\t\t\t\t    (<AND <NOT <ZERO? .VAL>>\n\t\t\t\t          <OR <ZERO? ,P-LEN>\n\t\t\t\t\t      <EQUAL? .NW ,W?THEN ,W?PERIOD>>>\n\t\t\t\t     <SETG P-END-ON-PREP T>\n\t\t\t\t     <COND (<L? ,P-NCN 2>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1 .VAL>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1N .WRD>)>)\n\t\t\t\t    (<EQUAL? ,P-NCN 2>\n\t\t\t\t     <TELL\n\"There were too many nouns in that sentence.\" CR>\n\t\t\t\t     <RFALSE>)\n\t\t\t\t    (T\n\t\t\t\t     <SETG P-NCN <+ ,P-NCN 1>>\n\t\t\t\t     <SETG P-ACT .VERB>\n\t\t\t\t     <OR <SET PTR <CLAUSE .PTR .VAL .WRD>>\n\t\t\t\t\t <RFALSE>>\n\t\t\t\t     <COND (<L? .PTR 0>\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>\n\t\t\t\t\t    <RETURN>)>)>)\n\t\t\t     (<EQUAL? .WRD ,W?OF>\n\t\t\t      <COND (<OR <NOT .OF-FLAG>\n\t\t\t\t\t <EQUAL? .NW ,W?PERIOD ,W?THEN>>\n\t\t\t\t     <CANT-USE .PTR>\n\t\t\t\t     <RFALSE>)\n\t\t\t\t    (T\n\t\t\t\t     <SET OF-FLAG <>>)>)\n\t\t\t     (<WT? .WRD ,PS?BUZZ-WORD>)\n\t\t\t     (<AND <EQUAL? .VERB ,ACT?TELL>\n\t\t\t\t   <WT? .WRD ,PS?VERB ,P1?VERB>\n\t\t\t\t   <EQUAL? ,WINNER ,PLAYER>>\n\t\t\t      <TELL\n\"Please consult your manual for the correct way to talk to other people\nor creatures.\" CR>\n\t\t\t      <RFALSE>)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T\n\t\t       <UNKNOWN-WORD .PTR>\n\t\t       <RFALSE>)>\n\t\t<SET LW .WRD>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>)>\n\t<PUT ,OOPS-TABLE ,O-PTR <>>\n\t<COND (.DIR\n\t       <SETG PRSA ,V?WALK>\n\t       <SETG PRSO .DIR>\n\t       <SETG P-OFLAG <>>\n\t       <SETG P-WALK-DIR .DIR>\n\t       <SETG AGAIN-DIR .DIR>)\n\t      (ELSE\n\t       <COND (,P-OFLAG <ORPHAN-MERGE>)>\n\t       <SETG P-WALK-DIR <>>\n\t       <SETG AGAIN-DIR <>>\n\t       <COND (<AND <SYNTAX-CHECK>\n\t\t\t   <SNARF-OBJECTS>\n\t\t\t   <MANY-CHECK>\n\t\t\t   <TAKE-CHECK>>\n\t\t      T)>)>>"
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
   "file": "gparser.zil",
   "line": 430,
   "endLine": 436,
   "source": "<ROUTINE WT? (PTR BIT \"OPTIONAL\" (B1 5) \"AUX\" (OFFS ,P-P1OFF) TYP)\n\t<COND (<BTST <SET TYP <GETB .PTR ,P-PSOFF>> .BIT>\n\t       <COND (<G? .B1 4> <RTRUE>)\n\t\t     (T\n\t\t      <SET TYP <BAND .TYP ,P-P1BITS>>\n\t\t      <COND (<NOT <EQUAL? .TYP .B1>> <SET OFFS <+ .OFFS 1>>)>\n\t\t      <GETB .PTR .OFFS>)>)>>"
  },
  "CLAUSE": {
   "name": "CLAUSE",
   "file": "gparser.zil",
   "line": 440,
   "endLine": 510,
   "source": "<ROUTINE CLAUSE (PTR VAL WRD \"AUX\" OFF NUM (ANDFLG <>) (FIRST?? T) NW (LW 0))\n\t<SET OFF <* <- ,P-NCN 1> 2>>\n\t<COND (<NOT <EQUAL? .VAL 0>>\n\t       <PUT ,P-ITBL <SET NUM <+ ,P-PREP1 .OFF>> .VAL>\n\t       <PUT ,P-ITBL <+ .NUM 1> .WRD>\n\t       <SET PTR <+ .PTR ,P-LEXELEN>>)\n\t      (T <SETG P-LEN <+ ,P-LEN 1>>)>\n\t<COND (<ZERO? ,P-LEN> <SETG P-NCN <- ,P-NCN 1>> <RETURN -1>)>\n\t<PUT ,P-ITBL <SET NUM <+ ,P-NC1 .OFF>> <REST ,P-LEXV <* .PTR 2>>>\n\t<COND (<EQUAL? <GET ,P-LEXV .PTR> ,W?THE ,W?A ,W?AN>\n\t       <PUT ,P-ITBL .NUM <REST <GET ,P-ITBL .NUM> 4>>)>\n\t<REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <PUT ,P-ITBL <+ .NUM 1> <REST ,P-LEXV <* .PTR 2>>>\n\t\t       <RETURN -1>)>\n\t\t<COND (<OR <SET WRD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WRD <NUMBER? .PTR>>>\n\t\t       <COND (<ZERO? ,P-LEN> <SET NW 0>)\n\t\t\t     (T <SET NW <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>>)>\n\t\t       <COND (<EQUAL? .WRD ,W?AND ,W?COMMA> <SET ANDFLG T>)\n\t\t\t     (<EQUAL? .WRD ,W?ALL ,W?ONE ;,W?BOTH>\n\t\t\t      <COND (<EQUAL? .NW ,W?OF>\n\t\t\t\t     <SETG P-LEN <- ,P-LEN 1>>\n\t\t\t\t     <SET PTR <+ .PTR ,P-LEXELEN>>)>)\n\t\t\t     (<OR <EQUAL? .WRD ,W?THEN ,W?PERIOD>\n\t\t\t\t  <AND <WT? .WRD ,PS?PREPOSITION>\n\t\t\t\t       <GET ,P-ITBL ,P-VERB>\n\t\t\t\t          ;\"ADDED 4/27 FOR TURTLE,UP\"\n\t\t\t\t       <NOT .FIRST??>>>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 1>>\n\t\t\t      <PUT ,P-ITBL\n\t\t\t\t   <+ .NUM 1>\n\t\t\t\t   <REST ,P-LEXV <* .PTR 2>>>\n\t\t\t      <RETURN <- .PTR ,P-LEXELEN>>)\n\t\t\t     (<WT? .WRD ,PS?OBJECT>\n\t\t\t      <COND (<AND <G? ,P-LEN 0>\n\t\t\t\t\t  <EQUAL? .NW ,W?OF>\n\t\t\t\t\t  <NOT <EQUAL? .WRD ,W?ALL ,W?ONE>>>\n\t\t\t\t     T)\n\t\t\t\t    (<AND <WT? .WRD\n\t\t\t\t\t       ,PS?ADJECTIVE\n\t\t\t\t\t       ,P1?ADJECTIVE>\n\t\t\t\t\t  <NOT <EQUAL? .NW 0>>\n\t\t\t\t\t  <WT? .NW ,PS?OBJECT>>)\n\t\t\t\t    (<AND <NOT .ANDFLG>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?BUT ,W?EXCEPT>>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t\t     <PUT ,P-ITBL\n\t\t\t\t\t  <+ .NUM 1>\n\t\t\t\t\t  <REST ,P-LEXV <* <+ .PTR 2> 2>>>\n\t\t\t\t     <RETURN .PTR>)\n\t\t\t\t    (T <SET ANDFLG <>>)>)\n\t\t\t     (<AND <OR ,P-MERGED\n\t\t\t\t       ,P-OFLAG\n\t\t\t\t       <NOT <EQUAL? <GET ,P-ITBL ,P-VERB> 0>>>\n\t\t\t\t   <OR <WT? .WRD ,PS?ADJECTIVE>\n\t\t\t\t       <WT? .WRD ,PS?BUZZ-WORD>>>)\n\t\t\t     (<AND .ANDFLG\n\t\t\t\t   <OR <WT? .WRD ,PS?DIRECTION>\n\t\t\t\t       <WT? .WRD ,PS?VERB>>>\n\t\t\t      <SET PTR <- .PTR 4>>\n\t\t\t      <PUT ,P-LEXV <+ .PTR 2> ,W?THEN>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 2>>)\n\t\t\t     (<WT? .WRD ,PS?PREPOSITION> T)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T <UNKNOWN-WORD .PTR> <RFALSE>)>\n\t\t<SET LW .WRD>\n\t\t<SET FIRST?? <>>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>>"
  },
  "NUMBER?": {
   "name": "NUMBER?",
   "file": "gparser.zil",
   "line": 512,
   "endLine": 534,
   "source": "<ROUTINE NUMBER? (PTR \"AUX\" CNT BPTR CHR (SUM 0) (TIM <>))\n\t <SET CNT <GETB <REST ,P-LEXV <* .PTR 2>> 2>>\n\t <SET BPTR <GETB <REST ,P-LEXV <* .PTR 2>> 3>>\n\t <REPEAT ()\n\t\t <COND (<L? <SET CNT <- .CNT 1>> 0> <RETURN>)\n\t\t       (T\n\t\t\t<SET CHR <GETB ,P-INBUF .BPTR>>\n\t\t\t<COND (<EQUAL? .CHR 58>\n\t\t\t       <SET TIM .SUM>\n\t\t\t       <SET SUM 0>)\n\t\t\t      (<G? .SUM 10000> <RFALSE>)\n\t\t\t      (<AND <L? .CHR 58> <G? .CHR 47>>\n\t\t\t       <SET SUM <+ <* .SUM 10> <- .CHR 48>>>)\n\t\t\t      (T <RFALSE>)>\n\t\t\t<SET BPTR <+ .BPTR 1>>)>>\n\t <PUT ,P-LEXV .PTR ,W?INTNUM>\n\t <COND (<G? .SUM 1000> <RFALSE>)\n\t       (.TIM\n\t\t<COND (<L? .TIM 8> <SET TIM <+ .TIM 12>>)\n\t\t      (<G? .TIM 23> <RFALSE>)>\n\t\t<SET SUM <+ .SUM <* .TIM 60>>>)>\n\t <SETG P-NUMBER .SUM>\n\t ,W?INTNUM>"
  },
  "ORPHAN-MERGE": {
   "name": "ORPHAN-MERGE",
   "file": "gparser.zil",
   "line": 543,
   "endLine": 630,
   "source": "<ROUTINE ORPHAN-MERGE (\"AUX\" (CNT -1) TEMP VERB BEG END (ADJ <>) WRD)\n   <SETG P-OFLAG <>>\n   <COND (<OR <EQUAL? <WT? <SET WRD <GET <GET ,P-ITBL ,P-VERBN> 0>>\n\t\t\t   ,PS?VERB ,P1?VERB>\n\t\t      <GET ,P-OTBL ,P-VERB>>\n\t      <NOT <ZERO? <WT? .WRD ,PS?ADJECTIVE>>>>\n\t  <SET ADJ T>)\n\t (<AND <NOT <ZERO? <WT? .WRD ,PS?OBJECT ,P1?OBJECT>>>\n\t       <EQUAL? ,P-NCN 0>>\n\t  <PUT ,P-ITBL ,P-VERB 0>\n\t  <PUT ,P-ITBL ,P-VERBN 0>\n\t  <PUT ,P-ITBL ,P-NC1 <REST ,P-LEXV 2>>\n\t  <PUT ,P-ITBL ,P-NC1L <REST ,P-LEXV 6>>\n\t  <SETG P-NCN 1>)>\n   <COND (<AND <NOT <ZERO? <SET VERB <GET ,P-ITBL ,P-VERB>>>>\n\t       <NOT .ADJ>\n\t       <NOT <EQUAL? .VERB <GET ,P-OTBL ,P-VERB>>>>\n\t  <RFALSE>)\n\t (<EQUAL? ,P-NCN 2> <RFALSE>)\n\t (<EQUAL? <GET ,P-OTBL ,P-NC1> 1>\n\t  <COND (<OR <EQUAL? <SET TEMP <GET ,P-ITBL ,P-PREP1>>\n\t\t\t  <GET ,P-OTBL ,P-PREP1>>\n\t\t     <ZERO? .TEMP>>\n\t\t <COND (.ADJ\n\t\t\t<PUT ,P-OTBL ,P-NC1 <REST ,P-LEXV 2>>\n\t\t\t<COND (<ZERO? <GET ,P-ITBL ,P-NC1L>>\n\t\t\t       <PUT ,P-ITBL ,P-NC1L <REST ,P-LEXV 6>>)>\n\t\t\t<COND (<ZERO? ,P-NCN> <SETG P-NCN 1>)>)\n\t\t       (T\n\t\t\t<PUT ,P-OTBL ,P-NC1 <GET ,P-ITBL ,P-NC1>>)>\n\t\t <PUT ,P-OTBL ,P-NC1L <GET ,P-ITBL ,P-NC1L>>)\n\t\t(T <RFALSE>)>)\n\t (<EQUAL? <GET ,P-OTBL ,P-NC2> 1>\n\t  <COND (<OR <EQUAL? <SET TEMP <GET ,P-ITBL ,P-PREP1>>\n\t\t\t  <GET ,P-OTBL ,P-PREP2>>\n\t\t     <ZERO? .TEMP>>\n\t\t <COND (.ADJ\n\t\t\t<PUT ,P-ITBL ,P-NC1 <REST ,P-LEXV 2>>\n\t\t\t<COND (<ZERO? <GET ,P-ITBL ,P-NC1L>>\n\t\t\t       <PUT ,P-ITBL ,P-NC1L <REST ,P-LEXV 6>>)>)>\n\t\t <PUT ,P-OTBL ,P-NC2 <GET ,P-ITBL ,P-NC1>>\n\t\t <PUT ,P-OTBL ,P-NC2L <GET ,P-ITBL ,P-NC1L>>\n\t\t <SETG P-NCN 2>)\n\t\t(T <RFALSE>)>)\n\t (<NOT <ZERO? ,P-ACLAUSE>>\n\t  <COND (<AND <NOT <EQUAL? ,P-NCN 1>> <NOT .ADJ>>\n\t\t <SETG P-ACLAUSE <>>\n\t\t <RFALSE>)\n\t\t(T\n\t\t <SET BEG <GET ,P-ITBL ,P-NC1>>\n\t\t <COND (.ADJ <SET BEG <REST ,P-LEXV 2>> <SET ADJ <>>)>\n\t\t <SET END <GET ,P-ITBL ,P-NC1L>>\n\t\t <REPEAT ()\n\t\t\t <SET WRD <GET .BEG 0>>\n\t\t\t <COND (<EQUAL? .BEG .END>\n\t\t\t\t<COND (.ADJ <ACLAUSE-WIN .ADJ> <RETURN>)\n\t\t\t\t      (T <SETG P-ACLAUSE <>> <RFALSE>)>)\n\t\t\t       (<AND <NOT .ADJ>\n\t\t\t\t     <OR <BTST <GETB .WRD ,P-PSOFF>\n\t\t\t\t\t       ,PS?ADJECTIVE>\n\t\t\t\t\t <EQUAL? .WRD ,W?ALL ,W?ONE>>>\n\t\t\t\t<SET ADJ .WRD>)\n\t\t\t       (<EQUAL? .WRD ,W?ONE>\n\t\t\t\t<ACLAUSE-WIN .ADJ>\n\t\t\t\t<RETURN>)\n\t\t\t       (<BTST <GETB .WRD ,P-PSOFF> ,PS?OBJECT>\n\t\t\t\t<COND (<EQUAL? .WRD ,P-ANAM>\n\t\t\t\t       <ACLAUSE-WIN .ADJ>)\n\t\t\t\t      (T\n\t\t\t\t       <NCLAUSE-WIN>)>\n\t\t\t\t<RETURN>)>\n\t\t\t <SET BEG <REST .BEG ,P-WORDLEN>>\n\t\t\t <COND (<EQUAL? .END 0>\n\t\t\t\t<SET END .BEG>\n\t\t\t\t<SETG P-NCN 1>\n\t\t\t\t<PUT ,P-ITBL ,P-NC1 <BACK .BEG 4>>\n\t\t\t\t<PUT ,P-ITBL ,P-NC1L .BEG>)>>)>)>\n   <PUT ,P-VTBL 0 <GET ,P-OVTBL 0>>\n   <PUTB ,P-VTBL 2 <GETB ,P-OVTBL 2>>\n   <PUTB ,P-VTBL 3 <GETB ,P-OVTBL 3>>\n   <PUT ,P-OTBL ,P-VERBN ,P-VTBL>\n   <PUTB ,P-VTBL 2 0>\n   <REPEAT ()\n\t   <COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN>\n\t\t  <SETG P-MERGED T>\n\t\t  <RTRUE>)\n\t\t (T <PUT ,P-ITBL .CNT <GET ,P-OTBL .CNT>>)>>\n   T>"
  },
  "ACLAUSE-WIN": {
   "name": "ACLAUSE-WIN",
   "file": "gparser.zil",
   "line": 634,
   "endLine": 643,
   "source": "<ROUTINE ACLAUSE-WIN (ADJ)\n\t<PUT ,P-ITBL ,P-VERB <GET ,P-OTBL ,P-VERB>>\n\t<PUT ,P-CCTBL ,CC-SBPTR ,P-ACLAUSE>\n\t<PUT ,P-CCTBL ,CC-SEPTR <+ ,P-ACLAUSE 1>>\n\t<PUT ,P-CCTBL ,CC-DBPTR ,P-ACLAUSE>\n\t<PUT ,P-CCTBL ,CC-DEPTR <+ ,P-ACLAUSE 1>>\n\t<CLAUSE-COPY ,P-OTBL ,P-OTBL .ADJ>\n\t<AND <NOT <EQUAL? <GET ,P-OTBL ,P-NC2> 0>> <SETG P-NCN 2>>\n\t<SETG P-ACLAUSE <>>\n\t<RTRUE>>"
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
   "file": "gparser.zil",
   "line": 658,
   "endLine": 663,
   "source": "<ROUTINE WORD-PRINT (CNT BUF)\n\t <REPEAT ()\n\t\t <COND (<DLESS? CNT 0> <RETURN>)\n\t\t       (ELSE\n\t\t\t<PRINTC <GETB ,P-INBUF .BUF>>\n\t\t\t<SET BUF <+ .BUF 1>>)>>>"
  },
  "UNKNOWN-WORD": {
   "name": "UNKNOWN-WORD",
   "file": "gparser.zil",
   "line": 665,
   "endLine": 675,
   "source": "<ROUTINE UNKNOWN-WORD (PTR \"AUX\" BUF)\n\t<PUT ,OOPS-TABLE ,O-PTR .PTR>\n\t<COND (<VERB? SAY>\n\t       <TELL \"Nothing happens.\" CR>\n\t       <RFALSE>)>\n\t<TELL \"I don't know the word \\\"\">\n\t<WORD-PRINT <GETB <REST ,P-LEXV <SET BUF <* .PTR 2>>> 2>\n\t\t    <GETB <REST ,P-LEXV .BUF> 3>>\n\t<TELL \"\\\".\" CR>\n\t<SETG QUOTE-FLAG <>>\n\t<SETG P-OFLAG <>>>"
  },
  "CANT-USE": {
   "name": "CANT-USE",
   "file": "gparser.zil",
   "line": 677,
   "endLine": 686,
   "source": "<ROUTINE CANT-USE (PTR \"AUX\" BUF)\n\t<COND (<VERB? SAY>\n\t       <TELL \"Nothing happens.\" CR>\n\t       <RFALSE>)>\n\t<TELL \"You used the word \\\"\">\n\t<WORD-PRINT <GETB <REST ,P-LEXV <SET BUF <* .PTR 2>>> 2>\n\t\t    <GETB <REST ,P-LEXV .BUF> 3>>\n\t<TELL \"\\\" in a way that I don't understand.\" CR>\n\t<SETG QUOTE-FLAG <>>\n\t<SETG P-OFLAG <>>>"
  },
  "SYNTAX-CHECK": {
   "name": "SYNTAX-CHECK",
   "file": "gparser.zil",
   "line": 707,
   "endLine": 775,
   "source": "<ROUTINE SYNTAX-CHECK (\"AUX\" SYN LEN NUM OBJ\n\t\t       \t    (DRIVE1 <>) (DRIVE2 <>) PREP VERB TMP)\n\t<COND (<ZERO? <SET VERB <GET ,P-ITBL ,P-VERB>>>\n\t       <TELL \"There was no verb in that sentence!\" CR>\n\t       <RFALSE>)>\n\t<SET SYN <GET ,VERBS <- 255 .VERB>>>\n\t<SET LEN <GETB .SYN 0>>\n\t<SET SYN <REST .SYN>>\n\t<REPEAT ()\n\t\t<SET NUM <BAND <GETB .SYN ,P-SBITS> ,P-SONUMS>>\n\t\t<COND (<G? ,P-NCN .NUM> T)\n\t\t      (<AND <NOT <L? .NUM 1>>\n\t\t\t    <ZERO? ,P-NCN>\n\t\t\t    <OR <ZERO? <SET PREP <GET ,P-ITBL ,P-PREP1>>>\n\t\t\t\t<EQUAL? .PREP <GETB .SYN ,P-SPREP1>>>>\n\t\t       <SET DRIVE1 .SYN>)\n\t\t      (<EQUAL? <GETB .SYN ,P-SPREP1> <GET ,P-ITBL ,P-PREP1>>\n\t\t       <COND (<AND <EQUAL? .NUM 2> <EQUAL? ,P-NCN 1>>\n\t\t\t      <SET DRIVE2 .SYN>)\n\t\t\t     (<EQUAL? <GETB .SYN ,P-SPREP2>\n\t\t\t\t   <GET ,P-ITBL ,P-PREP2>>\n\t\t\t      <SYNTAX-FOUND .SYN>\n\t\t\t      <RTRUE>)>)>\n\t\t<COND (<DLESS? LEN 1>\n\t\t       <COND (<OR .DRIVE1 .DRIVE2> <RETURN>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"That sentence isn't one I recognize.\" CR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T <SET SYN <REST .SYN ,P-SYNLEN>>)>>\n\t<COND (<AND .DRIVE1\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE1 ,P-SFWIM1>\n\t\t\t       <GETB .DRIVE1 ,P-SLOC1>\n\t\t\t       <GETB .DRIVE1 ,P-SPREP1>>>>\n\t       <PUT ,P-PRSO ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSO 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE1>)\n\t      (<AND .DRIVE2\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE2 ,P-SFWIM2>\n\t\t\t       <GETB .DRIVE2 ,P-SLOC2>\n\t\t\t       <GETB .DRIVE2 ,P-SPREP2>>>>\n\t       <PUT ,P-PRSI ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSI 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE2>)\n\t      (<EQUAL? .VERB ,ACT?FIND>\n\t       <TELL \"That question can't be answered.\" CR>\n\t       <RFALSE>)\n\t      (<NOT <EQUAL? ,WINNER ,PLAYER>>\n\t       <CANT-ORPHAN>)\n\t      (T\n\t       <ORPHAN .DRIVE1 .DRIVE2>\n\t       <TELL \"What do you want to \">\n\t       <SET TMP <GET ,P-OTBL ,P-VERBN>>\n\t       <COND (<EQUAL? .TMP 0> <TELL \"tell\">)\n\t\t     (<ZERO? <GETB ,P-VTBL 2>>\n\t\t      <PRINTB <GET .TMP 0>>)\n\t\t     (T\n\t\t      <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>\n\t\t      <PUTB ,P-VTBL 2 0>)>\n\t       <COND (.DRIVE2\n\t\t      <TELL \" \">\n\t\t      <THING-PRINT T T>)>\n\t       <SETG P-OFLAG T>\n\t       <PREP-PRINT <COND (.DRIVE1 <GETB .DRIVE1 ,P-SPREP1>)\n\t\t\t\t (T <GETB .DRIVE2 ,P-SPREP2>)>>\n\t       <TELL \"?\" CR>\n\t       <RFALSE>)>>"
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
   "file": "gparser.zil",
   "line": 782,
   "endLine": 808,
   "source": "<ROUTINE ORPHAN (D1 D2 \"AUX\" (CNT -1))\n\t<COND (<NOT ,P-MERGED>\n\t       <PUT ,P-OCLAUSE ,P-MATCHLEN 0>)>\n\t<PUT ,P-OVTBL 0 <GET ,P-VTBL 0>>\n\t<PUTB ,P-OVTBL 2 <GETB ,P-VTBL 2>>\n\t<PUTB ,P-OVTBL 3 <GETB ,P-VTBL 3>>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT ,P-ITBLLEN> <RETURN>)\n\t\t      (T <PUT ,P-OTBL .CNT <GET ,P-ITBL .CNT>>)>>\n\t<COND (<EQUAL? ,P-NCN 2>\n\t       <PUT ,P-CCTBL ,CC-SBPTR ,P-NC2>\n\t       <PUT ,P-CCTBL ,CC-SEPTR ,P-NC2L>\n\t       <PUT ,P-CCTBL ,CC-DBPTR ,P-NC2>\n\t       <PUT ,P-CCTBL ,CC-DEPTR ,P-NC2L>\n\t       <CLAUSE-COPY ,P-ITBL ,P-OTBL>)>\n\t<COND (<NOT <L? ,P-NCN 1>>\n\t       <PUT ,P-CCTBL ,CC-SBPTR ,P-NC1>\n\t       <PUT ,P-CCTBL ,CC-SEPTR ,P-NC1L>\n\t       <PUT ,P-CCTBL ,CC-DBPTR ,P-NC1>\n\t       <PUT ,P-CCTBL ,CC-DEPTR ,P-NC1L>\n\t       <CLAUSE-COPY ,P-ITBL ,P-OTBL>)>\n\t<COND (.D1\n\t       <PUT ,P-OTBL ,P-PREP1 <GETB .D1 ,P-SPREP1>>\n\t       <PUT ,P-OTBL ,P-NC1 1>)\n\t      (.D2\n\t       <PUT ,P-OTBL ,P-PREP2 <GETB .D2 ,P-SPREP2>>\n\t       <PUT ,P-OTBL ,P-NC2 1>)>>"
  },
  "THING-PRINT": {
   "name": "THING-PRINT",
   "file": "gparser.zil",
   "line": 810,
   "endLine": 817,
   "source": "<ROUTINE THING-PRINT (PRSO? \"OPTIONAL\" (THE? <>) \"AUX\" BEG END)\n\t <COND (.PRSO?\n\t\t<SET BEG <GET ,P-ITBL ,P-NC1>>\n\t\t<SET END <GET ,P-ITBL ,P-NC1L>>)\n\t       (ELSE\n\t\t<SET BEG <GET ,P-ITBL ,P-NC2>>\n\t\t<SET END <GET ,P-ITBL ,P-NC2L>>)>\n\t <BUFFER-PRINT .BEG .END .THE?>>"
  },
  "BUFFER-PRINT": {
   "name": "BUFFER-PRINT",
   "file": "gparser.zil",
   "line": 819,
   "endLine": 849,
   "source": "<ROUTINE BUFFER-PRINT (BEG END CP\n\t\t       \"AUX\" (NOSP T) WRD (FIRST?? T) (PN <>) (Q? <>))\n\t <REPEAT ()\n\t\t<COND (<EQUAL? .BEG .END> <RETURN>)\n\t\t      (T\n\t\t       <SET WRD <GET .BEG 0>>\n\t\t       <COND ;(<EQUAL? .WRD ,W?$BUZZ> T)\n\t\t\t     (<EQUAL? .WRD ,W?COMMA>\n\t\t\t      <TELL \", \">)\n\t\t\t     (.NOSP <SET NOSP <>>)\n\t\t\t     (ELSE <TELL \" \">)>\n\t\t       <COND (<EQUAL? .WRD ,W?PERIOD ,W?COMMA>\n\t\t\t      <SET NOSP T>)\n\t\t\t     (<EQUAL? .WRD ,W?ME>\n\t\t\t      <PRINTD ,ME>\n\t\t\t      <SET PN T>)\n\t\t\t     (<EQUAL? .WRD ,W?INTNUM>\n\t\t\t      <PRINTN ,P-NUMBER>\n\t\t\t      <SET PN T>)\n\t\t\t     (T\n\t\t\t      <COND (<AND .FIRST?? <NOT .PN> .CP>\n\t\t\t\t     <TELL \"the \">)>\n\t\t\t      <COND (<OR ,P-OFLAG ,P-MERGED> <PRINTB .WRD>)\n\t\t\t\t    (<AND <EQUAL? .WRD ,W?IT>\n\t\t\t\t\t  <ACCESSIBLE? ,P-IT-OBJECT>>\n\t\t\t\t     <PRINTD ,P-IT-OBJECT>)\n\t\t\t\t    (T\n\t\t\t\t     <WORD-PRINT <GETB .BEG 2>\n\t\t\t\t\t\t <GETB .BEG 3>>)>\n\t\t\t      <SET FIRST?? <>>)>)>\n\t\t<SET BEG <REST .BEG ,P-WORDLEN>>>>"
  },
  "PREP-PRINT": {
   "name": "PREP-PRINT",
   "file": "gparser.zil",
   "line": 851,
   "endLine": 858,
   "source": "<ROUTINE PREP-PRINT (PREP \"AUX\" WRD)\n\t<COND (<NOT <ZERO? .PREP>>\n\t       <TELL \" \">\n\t       <COND ;(<EQUAL? .PREP ,PR?THROUGH>\n\t\t      <TELL \"through\">)\n\t\t     (T\n\t\t      <SET WRD <PREP-FIND .PREP>>\n\t\t      <PRINTB .WRD>)>)>>"
  },
  "CLAUSE-COPY": {
   "name": "CLAUSE-COPY",
   "file": "gparser.zil",
   "line": 860,
   "endLine": 879,
   "source": "<ROUTINE CLAUSE-COPY (SRC DEST \"OPTIONAL\" (INSRT <>) \"AUX\" BEG END)\n\t<SET BEG <GET .SRC <GET ,P-CCTBL ,CC-SBPTR>>>\n\t<SET END <GET .SRC <GET ,P-CCTBL ,CC-SEPTR>>>\n\t<PUT .DEST\n\t     <GET ,P-CCTBL ,CC-DBPTR>\n\t     <REST ,P-OCLAUSE\n\t\t   <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN> 2>>>\n\t<REPEAT ()\n\t\t<COND (<EQUAL? .BEG .END>\n\t\t       <PUT .DEST\n\t\t\t    <GET ,P-CCTBL ,CC-DEPTR>\n\t\t\t    <REST ,P-OCLAUSE\n\t\t\t\t  <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN>\n\t\t\t\t     2>>>\n\t\t       <RETURN>)\n\t\t      (T\n\t\t       <COND (<AND .INSRT <EQUAL? ,P-ANAM <GET .BEG 0>>>\n\t\t\t      <CLAUSE-ADD .INSRT>)>\n\t\t       <CLAUSE-ADD <GET .BEG 0>>)>\n\t\t<SET BEG <REST .BEG ,P-WORDLEN>>>>"
  },
  "CLAUSE-ADD": {
   "name": "CLAUSE-ADD",
   "file": "gparser.zil",
   "line": 882,
   "endLine": 886,
   "source": "<ROUTINE CLAUSE-ADD (WRD \"AUX\" PTR)\n\t<SET PTR <+ <GET ,P-OCLAUSE ,P-MATCHLEN> 2>>\n\t<PUT ,P-OCLAUSE <- .PTR 1> .WRD>\n\t<PUT ,P-OCLAUSE .PTR 0>\n\t<PUT ,P-OCLAUSE ,P-MATCHLEN .PTR>>"
  },
  "PREP-FIND": {
   "name": "PREP-FIND",
   "file": "gparser.zil",
   "line": 888,
   "endLine": 893,
   "source": "<ROUTINE PREP-FIND (PREP \"AUX\" (CNT 0) SIZE)\n\t<SET SIZE <* <GET ,PREPOSITIONS 0> 2>>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT .SIZE> <RFALSE>)\n\t\t      (<EQUAL? <GET ,PREPOSITIONS .CNT> .PREP>\n\t\t       <RETURN <GET ,PREPOSITIONS <- .CNT 1>>>)>>>"
  },
  "SYNTAX-FOUND": {
   "name": "SYNTAX-FOUND",
   "file": "gparser.zil",
   "line": 895,
   "endLine": 897,
   "source": "<ROUTINE SYNTAX-FOUND (SYN)\n\t<SETG P-SYNTAX .SYN>\n\t<SETG PRSA <GETB .SYN ,P-SACTION>>>"
  },
  "GWIM": {
   "name": "GWIM",
   "file": "gparser.zil",
   "line": 901,
   "endLine": 926,
   "source": "<ROUTINE GWIM (GBIT LBIT PREP \"AUX\" OBJ)\n\t<COND (<EQUAL? .GBIT ,RMUNGBIT>\n\t       <RETURN ,ROOMS>)>\n\t<SETG P-GWIMBIT .GBIT>\n\t<SETG P-SLOCBITS .LBIT>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<COND (<GET-OBJECT ,P-MERGE <>>\n\t       <SETG P-GWIMBIT 0>\n\t       <COND (<EQUAL? <GET ,P-MERGE ,P-MATCHLEN> 1>\n\t\t      <SET OBJ <GET ,P-MERGE 1>>\n\t\t      <TELL \"(\">\n\t\t      <COND (<AND <NOT <ZERO? .PREP>>\n\t\t\t\t  <NOT ,P-END-ON-PREP>>\n\t\t\t     <PRINTB <SET PREP <PREP-FIND .PREP>>>\n\t\t\t     <COND (<EQUAL? .PREP ,W?OUT>\n\t\t\t\t    <TELL \" of\">)>\n\t\t\t     <TELL \" \">\n\t\t\t     <COND (<EQUAL? .OBJ ,HANDS>\n\t\t\t\t    <TELL \"your hands\">)\n\t\t\t\t   (T\n\t\t\t\t    <TELL \"the \" D .OBJ>)>\n\t\t\t     <TELL \")\" CR>)\n\t\t\t    (ELSE\n\t\t\t     <TELL D .OBJ \")\" CR>)>\n\t\t      .OBJ)>)\n\t      (T <SETG P-GWIMBIT 0> <RFALSE>)>>"
  },
  "SNARF-OBJECTS": {
   "name": "SNARF-OBJECTS",
   "file": "gparser.zil",
   "line": 928,
   "endLine": 943,
   "source": "<ROUTINE SNARF-OBJECTS (\"AUX\" OPTR IPTR L)\n\t <PUT ,P-BUTS ,P-MATCHLEN 0>\n\t <COND (<NOT <EQUAL? <SET IPTR <GET ,P-ITBL ,P-NC2>> 0>>\n\t\t<SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC2>>\n\t\t<OR <SNARFEM .IPTR <GET ,P-ITBL ,P-NC2L> ,P-PRSI> <RFALSE>>)>\n\t <COND (<NOT <EQUAL? <SET OPTR <GET ,P-ITBL ,P-NC1>> 0>>\n\t\t<SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC1>>\n\t\t<OR <SNARFEM .OPTR <GET ,P-ITBL ,P-NC1L> ,P-PRSO> <RFALSE>>)>\n\t <COND (<NOT <ZERO? <GET ,P-BUTS ,P-MATCHLEN>>>\n\t\t<SET L <GET ,P-PRSO ,P-MATCHLEN>>\n\t\t<COND (.OPTR <SETG P-PRSO <BUT-MERGE ,P-PRSO>>)>\n\t\t<COND (<AND .IPTR\n\t\t\t    <OR <NOT .OPTR>\n\t\t\t\t<EQUAL? .L <GET ,P-PRSO ,P-MATCHLEN>>>>\n\t\t       <SETG P-PRSI <BUT-MERGE ,P-PRSI>>)>)>\n\t <RTRUE>>"
  },
  "BUT-MERGE": {
   "name": "BUT-MERGE",
   "file": "gparser.zil",
   "line": 945,
   "endLine": 958,
   "source": "<ROUTINE BUT-MERGE (TBL \"AUX\" LEN BUTLEN (CNT 1) (MATCHES 0) OBJ NTBL)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<REPEAT ()\n\t\t<COND (<DLESS? LEN 0> <RETURN>)\n\t\t      (<ZMEMQ <SET OBJ <GET .TBL .CNT>> ,P-BUTS>)\n\t\t      (T\n\t\t       <PUT ,P-MERGE <+ .MATCHES 1> .OBJ>\n\t\t       <SET MATCHES <+ .MATCHES 1>>)>\n\t\t<SET CNT <+ .CNT 1>>>\n\t<PUT ,P-MERGE ,P-MATCHLEN .MATCHES>\n\t<SET NTBL ,P-MERGE>\n\t<SETG P-MERGE .TBL>\n\t.NTBL>"
  },
  "SNARFEM": {
   "name": "SNARFEM",
   "file": "gparser.zil",
   "line": 978,
   "endLine": 1030,
   "source": "<ROUTINE SNARFEM (PTR EPTR TBL \"AUX\" (BUT <>) LEN WV WRD NW (WAS-ALL <>))\n   <SETG P-AND <>>\n   <COND (<EQUAL? ,P-GETFLAGS ,P-ALL>\n\t  <SET WAS-ALL T>)>\n   <SETG P-GETFLAGS 0>\n   <PUT .TBL ,P-MATCHLEN 0>\n   <SET WRD <GET .PTR 0>>\n   <REPEAT ()\n\t   <COND (<EQUAL? .PTR .EPTR>\n\t\t  <SET WV <GET-OBJECT <OR .BUT .TBL>>>\n\t\t  <COND (.WAS-ALL <SETG P-GETFLAGS ,P-ALL>)>\n\t\t  <RETURN .WV>)\n\t\t (T\n\t\t  <COND (<==? .EPTR <REST .PTR ,P-WORDLEN>>\n\t\t\t <SET NW 0>)\n\t\t\t(T <SET NW <GET .PTR ,P-LEXELEN>>)>\n\t\t  <COND (<EQUAL? .WRD ,W?ALL ;,W?BOTH>\n\t\t\t <SETG P-GETFLAGS ,P-ALL>\n\t\t\t <COND (<EQUAL? .NW ,W?OF>\n\t\t\t\t<SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t(<EQUAL? .WRD ,W?BUT ,W?EXCEPT>\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t <SET BUT ,P-BUTS>\n\t\t\t <PUT .BUT ,P-MATCHLEN 0>)\n\t\t\t(<EQUAL? .WRD ,W?A ,W?ONE>\n\t\t\t <COND (<NOT ,P-ADJ>\n\t\t\t\t<SETG P-GETFLAGS ,P-ONE>\n\t\t\t\t<COND (<EQUAL? .NW ,W?OF>\n\t\t\t\t       <SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t       (T\n\t\t\t\t<SETG P-NAM ,P-ONEOBJ>\n\t\t\t\t<OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t\t<AND <ZERO? .NW> <RTRUE>>)>)\n\t\t\t(<AND <EQUAL? .WRD ,W?AND ,W?COMMA>\n\t\t\t      <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t <SETG P-AND T>\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t T)\n\t\t\t(<WT? .WRD ,PS?BUZZ-WORD>)\n\t\t\t(<EQUAL? .WRD ,W?AND ,W?COMMA>)\n\t\t\t(<EQUAL? .WRD ,W?OF>\n\t\t\t <COND (<ZERO? ,P-GETFLAGS>\n\t\t\t\t<SETG P-GETFLAGS ,P-INHIBIT>)>)\n\t\t\t(<AND <SET WV <WT? .WRD ,PS?ADJECTIVE ,P1?ADJECTIVE>>\n\t\t\t      <NOT ,P-ADJ>>\n\t\t\t <SETG P-ADJ .WV>\n\t\t\t <SETG P-ADJN .WRD>)\n\t\t\t(<WT? .WRD ,PS?OBJECT ,P1?OBJECT>\n\t\t\t <SETG P-NAM .WRD>\n\t\t\t <SETG P-ONEOBJ .WRD>)>)>\n\t   <COND (<NOT <EQUAL? .PTR .EPTR>>\n\t\t  <SET PTR <REST .PTR ,P-WORDLEN>>\n\t\t  <SET WRD .NW>)>>>"
  },
  "GET-OBJECT": {
   "name": "GET-OBJECT",
   "file": "gparser.zil",
   "line": 1040,
   "endLine": 1140,
   "source": "<ROUTINE GET-OBJECT (TBL\n\t\t     \"OPTIONAL\" (VRB T)\n\t\t     \"AUX\" BITS LEN XBITS TLEN (GCHECK <>) (OLEN 0) OBJ)\n\t <SET XBITS ,P-SLOCBITS>\n\t <SET TLEN <GET .TBL ,P-MATCHLEN>>\n\t <COND (<BTST ,P-GETFLAGS ,P-INHIBIT> <RTRUE>)>\n\t <COND (<AND <NOT ,P-NAM> ,P-ADJ>\n\t\t<COND (<WT? ,P-ADJN ,PS?OBJECT ,P1?OBJECT>\n\t\t       <SETG P-NAM ,P-ADJN>\n\t\t       <SETG P-ADJ <>>)\n\t\t      %<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t      '(<SET BITS\n\t\t\t\t     <WT? ,P-ADJN\n\t\t\t\t\t  ,PS?DIRECTION ,P1?DIRECTION>>\n\t\t\t\t<SETG P-ADJ <>>\n\t\t\t\t<PUT .TBL ,P-MATCHLEN 1>\n\t\t\t\t<PUT .TBL 1 ,INTDIR>\n\t\t\t\t<SETG P-DIRECTION .BITS>\n\t\t\t\t<RTRUE>))\n\t\t\t     (ELSE '(<NULL-F> T))>>)>\n\t <COND (<AND <NOT ,P-NAM>\n\t\t     <NOT ,P-ADJ>\n\t\t     <NOT <EQUAL? ,P-GETFLAGS ,P-ALL>>\n\t\t     <ZERO? ,P-GWIMBIT>>\n\t\t<COND (.VRB\n\t\t       <TELL\n\"There seems to be a noun missing in that sentence!\" CR>)>\n\t\t<RFALSE>)>\n\t <COND (<OR <NOT <EQUAL? ,P-GETFLAGS ,P-ALL>> <ZERO? ,P-SLOCBITS>>\n\t\t<SETG P-SLOCBITS -1>)>\n\t <SETG P-TABLE .TBL>\n\t <PROG ()\n\t       <COND (.GCHECK <GLOBAL-CHECK .TBL>)\n\t\t     (T\n\t\t      <COND (,LIT\n\t\t\t     <FCLEAR ,PLAYER ,TRANSBIT>\n\t\t\t     <DO-SL ,HERE ,SOG ,SIR>\n\t\t\t     <FSET ,PLAYER ,TRANSBIT>)>\n\t\t      <DO-SL ,PLAYER ,SH ,SC>)>\n\t       <SET LEN <- <GET .TBL ,P-MATCHLEN> .TLEN>>\n\t       <COND (<BTST ,P-GETFLAGS ,P-ALL>)\n\t\t     (<AND <BTST ,P-GETFLAGS ,P-ONE>\n\t\t\t   <NOT <ZERO? .LEN>>>\n\t\t      <COND (<NOT <EQUAL? .LEN 1>>\n\t\t\t     <PUT .TBL 1 <GET .TBL <RANDOM .LEN>>>\n\t\t\t     <TELL \"(How about the \">\n\t\t\t     <PRINTD <GET .TBL 1>>\n\t\t\t     <TELL \"?)\" CR>)>\n\t\t      <PUT .TBL ,P-MATCHLEN 1>)\n\t\t     (<OR <G? .LEN 1>\n\t\t\t  <AND <ZERO? .LEN> <NOT <EQUAL? ,P-SLOCBITS -1>>>>\n\t\t      <COND (<EQUAL? ,P-SLOCBITS -1>\n\t\t\t     <SETG P-SLOCBITS .XBITS>\n\t\t\t     <SET OLEN .LEN>\n\t\t\t     <PUT .TBL\n\t\t\t\t  ,P-MATCHLEN\n\t\t\t\t  <- <GET .TBL ,P-MATCHLEN> .LEN>>\n\t\t\t     <AGAIN>)\n\t\t\t    (T\n\t\t\t     <COND (<ZERO? .LEN> <SET LEN .OLEN>)>\n\t\t\t     <COND (<NOT <EQUAL? ,WINNER ,PLAYER>>\n\t\t\t\t    <CANT-ORPHAN>\n\t\t\t\t    <RFALSE>)\n\t\t\t\t   (<AND .VRB ,P-NAM>\n\t\t\t\t    <WHICH-PRINT .TLEN .LEN .TBL>\n\t\t\t\t    <SETG P-ACLAUSE\n\t\t\t\t\t  <COND (<EQUAL? .TBL ,P-PRSO> ,P-NC1)\n\t\t\t\t\t\t(T ,P-NC2)>>\n\t\t\t\t    <SETG P-AADJ ,P-ADJ>\n\t\t\t\t    <SETG P-ANAM ,P-NAM>\n\t\t\t\t    <ORPHAN <> <>>\n\t\t\t\t    <SETG P-OFLAG T>)\n\t\t\t\t   (.VRB\n\t\t\t\t    <TELL\n\"There seems to be a noun missing in that sentence!\" CR>)>\n\t\t\t     <SETG P-NAM <>>\n\t\t\t     <SETG P-ADJ <>>\n\t\t\t     <RFALSE>)>)>\n\t       <COND (<AND <ZERO? .LEN> .GCHECK>\n\t\t      <COND (.VRB\n\t\t\t     ;\"next added 1/2/85 by JW\"\n\t\t\t     <SETG P-SLOCBITS .XBITS>\n\t\t\t     <COND (<OR ,LIT <VERB? TELL ;WHERE ;WHAT ;WHO>>\n\t\t\t\t    ;\"Changed 6/10/83 - MARC\"\n\t\t\t\t    <OBJ-FOUND ,NOT-HERE-OBJECT .TBL>\n\t\t\t\t    <SETG P-XNAM ,P-NAM>\n\t\t\t\t    <SETG P-XADJ ,P-ADJ>\n\t\t\t\t    <SETG P-XADJN ,P-ADJN>\n\t\t\t\t    <SETG P-NAM <>>\n\t\t\t\t    <SETG P-ADJ <>>\n\t\t\t\t    <SETG P-ADJN <>>\n\t\t\t\t    <RTRUE>)\n\t\t\t\t   (T <TELL \"It's too dark to see!\" CR>)>)>\n\t\t      <SETG P-NAM <>>\n\t\t      <SETG P-ADJ <>>\n\t\t      <RFALSE>)\n\t\t     (<ZERO? .LEN> <SET GCHECK T> <AGAIN>)>\n\t       <SETG P-SLOCBITS .XBITS>\n\t       <SETG P-NAM <>>\n\t       <SETG P-ADJ <>>\n\t       <RTRUE>>>"
  },
  "WHICH-PRINT": {
   "name": "WHICH-PRINT",
   "file": "gparser.zil",
   "line": 1146,
   "endLine": 1166,
   "source": "<ROUTINE WHICH-PRINT (TLEN LEN TBL \"AUX\" OBJ RLEN)\n\t <SET RLEN .LEN>\n\t <TELL \"Which \">\n         <COND (<OR ,P-OFLAG ,P-MERGED ,P-AND>\n\t\t<PRINTB <COND (,P-NAM ,P-NAM)\n\t\t\t      (,P-ADJ ,P-ADJN)\n\t\t\t      (ELSE ,W?ONE)>>)\n\t       (ELSE\n\t\t<THING-PRINT <EQUAL? .TBL ,P-PRSO>>)>\n\t <TELL \" do you mean, \">\n\t <REPEAT ()\n\t\t <SET TLEN <+ .TLEN 1>>\n\t\t <SET OBJ <GET .TBL .TLEN>>\n\t\t <TELL \"the \" D .OBJ>\n\t\t <COND (<EQUAL? .LEN 2>\n\t\t        <COND (<NOT <EQUAL? .RLEN 2>> <TELL \",\">)>\n\t\t        <TELL \" or \">)\n\t\t       (<G? .LEN 2> <TELL \", \">)>\n\t\t <COND (<L? <SET LEN <- .LEN 1>> 1>\n\t\t        <TELL \"?\" CR>\n\t\t        <RETURN>)>>>"
  },
  "GLOBAL-CHECK": {
   "name": "GLOBAL-CHECK",
   "file": "gparser.zil",
   "line": 1169,
   "endLine": 1200,
   "source": "<ROUTINE GLOBAL-CHECK (TBL \"AUX\" LEN RMG RMGL (CNT 0) OBJ OBITS FOO)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<SET OBITS ,P-SLOCBITS>\n\t<COND (<SET RMG <GETPT ,HERE ,P?GLOBAL>>\n\t       <SET RMGL <- <PTSIZE .RMG> 1>>\n\t       <REPEAT ()\n\t\t       <COND (<THIS-IT? <SET OBJ <GETB .RMG .CNT>> .TBL>\n\t\t\t      <OBJ-FOUND .OBJ .TBL>)>\n\t\t       <COND (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<SET RMG <GETPT ,HERE ,P?PSEUDO>>\n\t       <SET RMGL <- </ <PTSIZE .RMG> 4> 1>>\n\t       <SET CNT 0>\n\t       <REPEAT ()\n\t\t       <COND (<EQUAL? ,P-NAM <GET .RMG <* .CNT 2>>>\n\t\t\t      <PUTP ,PSEUDO-OBJECT\n\t\t\t\t    ,P?ACTION\n\t\t\t\t    <GET .RMG <+ <* .CNT 2> 1>>>\n\t\t\t      <SET FOO\n\t\t\t\t   <BACK <GETPT ,PSEUDO-OBJECT ,P?ACTION> 5>>\n\t\t\t      <PUT .FOO 0 <GET ,P-NAM 0>>\n\t\t\t      <PUT .FOO 1 <GET ,P-NAM 1>>\n\t\t\t      <OBJ-FOUND ,PSEUDO-OBJECT .TBL>\n\t\t\t      <RETURN>)\n\t\t             (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<EQUAL? <GET .TBL ,P-MATCHLEN> .LEN>\n\t       <SETG P-SLOCBITS -1>\n\t       <SETG P-TABLE .TBL>\n\t       <DO-SL ,GLOBAL-OBJECTS 1 1>\n\t       <SETG P-SLOCBITS .OBITS>\n\t       <COND (<AND <ZERO? <GET .TBL ,P-MATCHLEN>>\n\t\t\t   <EQUAL? ,PRSA ,V?LOOK-INSIDE ,V?SEARCH ,V?EXAMINE>>\n\t\t      <DO-SL ,ROOMS 1 1>)>)>>"
  },
  "DO-SL": {
   "name": "DO-SL",
   "file": "gparser.zil",
   "line": 1202,
   "endLine": 1210,
   "source": "<ROUTINE DO-SL (OBJ BIT1 BIT2 \"AUX\" BTS)\n\t<COND (<BTST ,P-SLOCBITS <+ .BIT1 .BIT2>>\n\t       <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCALL>)\n\t      (T\n\t       <COND (<BTST ,P-SLOCBITS .BIT1>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCTOP>)\n\t\t     (<BTST ,P-SLOCBITS .BIT2>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCBOT>)\n\t\t     (T <RTRUE>)>)>>"
  },
  "SEARCH-LIST": {
   "name": "SEARCH-LIST",
   "file": "gparser.zil",
   "line": 1216,
   "endLine": 1237,
   "source": "<ROUTINE SEARCH-LIST (OBJ TBL LVL \"AUX\" FLS NOBJ)\n\t<COND (<SET OBJ <FIRST? .OBJ>>\n\t       <REPEAT ()\n\t\t       <COND (<AND <NOT <EQUAL? .LVL ,P-SRCBOT>>\n\t\t\t\t   <GETPT .OBJ ,P?SYNONYM>\n\t\t\t\t   <THIS-IT? .OBJ .TBL>>\n\t\t\t      <OBJ-FOUND .OBJ .TBL>)>\n\t\t       <COND (<AND <OR <NOT <EQUAL? .LVL ,P-SRCTOP>>\n\t\t\t\t       <FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t       <FSET? .OBJ ,SURFACEBIT>>\n\t\t\t\t   <SET NOBJ <FIRST? .OBJ>>\n\t\t\t\t   <OR <FSET? .OBJ ,OPENBIT>\n\t\t\t\t       <FSET? .OBJ ,TRANSBIT>>>\n\t\t\t      <SET FLS\n\t\t\t\t   <SEARCH-LIST .OBJ\n\t\t\t\t\t\t.TBL\n\t\t\t\t\t\t<COND (<FSET? .OBJ ,SURFACEBIT>\n\t\t\t\t\t\t       ,P-SRCALL)\n\t\t\t\t\t\t      (<FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t\t\t       ,P-SRCALL)\n\t\t\t\t\t\t      (T ,P-SRCTOP)>>>)>\n\t\t       <COND (<SET OBJ <NEXT? .OBJ>>) (T <RETURN>)>>)>>"
  },
  "OBJ-FOUND": {
   "name": "OBJ-FOUND",
   "file": "gparser.zil",
   "line": 1239,
   "endLine": 1242,
   "source": "<ROUTINE OBJ-FOUND (OBJ TBL \"AUX\" PTR)\n\t<SET PTR <GET .TBL ,P-MATCHLEN>>\n\t<PUT .TBL <+ .PTR 1> .OBJ>\n\t<PUT .TBL ,P-MATCHLEN <+ .PTR 1>>>"
  },
  "TAKE-CHECK": {
   "name": "TAKE-CHECK",
   "file": "gparser.zil",
   "line": 1244,
   "endLine": 1246,
   "source": "<ROUTINE TAKE-CHECK ()\n\t<AND <ITAKE-CHECK ,P-PRSO <GETB ,P-SYNTAX ,P-SLOC1>>\n\t     <ITAKE-CHECK ,P-PRSI <GETB ,P-SYNTAX ,P-SLOC2>>>>"
  },
  "ITAKE-CHECK": {
   "name": "ITAKE-CHECK",
   "file": "gparser.zil",
   "line": 1248,
   "endLine": 1292,
   "source": "<ROUTINE ITAKE-CHECK (TBL IBITS \"AUX\" PTR OBJ TAKEN)\n\t #DECL ((TBL) TABLE (IBITS PTR) FIX (OBJ) OBJECT\n\t\t(TAKEN) <OR FALSE FIX ATOM>)\n\t <COND (<AND <SET PTR <GET .TBL ,P-MATCHLEN>>\n\t\t     <OR <BTST .IBITS ,SHAVE>\n\t\t\t <BTST .IBITS ,STAKE>>>\n\t\t<REPEAT ()\n\t\t\t<COND (<L? <SET PTR <- .PTR 1>> 0> <RETURN>)\n\t\t\t      (T\n\t\t\t       <SET OBJ <GET .TBL <+ .PTR 1>>>\n\t\t\t       <COND (<EQUAL? .OBJ ,IT>\n\t\t\t\t      <COND (<NOT <ACCESSIBLE? ,P-IT-OBJECT>>\n\t\t\t\t\t     <TELL\n\"I don't see what you're referring to.\" CR>\n\t\t\t\t\t     <RFALSE>)\n\t\t\t\t\t    (T\n\t\t\t\t\t     <SET OBJ ,P-IT-OBJECT>)>)>\n\t\t\t       <COND (<AND <NOT <HELD? .OBJ>>\n\t\t\t\t\t   <NOT <EQUAL? .OBJ ,HANDS ,ME>>>\n\t\t\t\t      <SETG PRSO .OBJ>\n\t\t\t\t      <COND (<FSET? .OBJ ,TRYTAKEBIT>\n\t\t\t\t\t     <SET TAKEN T>)\n\t\t\t\t\t    (<NOT <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t\t\t\t     <SET TAKEN <>>)\n\t\t\t\t\t    (<AND <BTST .IBITS ,STAKE>\n\t\t\t\t\t\t  <EQUAL? <ITAKE <>> T>>\n\t\t\t\t\t     <SET TAKEN <>>)\n\t\t\t\t\t    (T <SET TAKEN T>)>\n\t\t\t\t      <COND (<AND .TAKEN\n\t\t\t\t\t\t  <BTST .IBITS ,SHAVE>\n\t\t\t\t\t\t  <EQUAL? ,WINNER\n\t\t\t\t\t\t\t  ,ADVENTURER>>\n\t\t\t\t\t     <COND (<EQUAL? .OBJ\n\t\t\t\t\t\t\t    ,NOT-HERE-OBJECT>\n\t\t\t\t\t\t    <TELL\n\"You don't have that!\" CR>\n\t\t\t\t\t\t    <RFALSE>)>\n\t\t\t\t\t     <TELL \"You don't have the \">\n\t\t\t\t\t     <PRINTD .OBJ>\n\t\t\t\t\t     <TELL \".\" CR>\n\t\t\t\t\t     <RFALSE>)\n\t\t\t\t\t    (<AND <NOT .TAKEN>\n\t\t\t\t\t\t  <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t\t\t\t     <TELL \"(Taken)\" CR>)>)>)>>)\n\t       (T)>>"
  },
  "MANY-CHECK": {
   "name": "MANY-CHECK",
   "file": "gparser.zil",
   "line": 1294,
   "endLine": 1313,
   "source": "<ROUTINE MANY-CHECK (\"AUX\" (LOSS <>) TMP)\n\t<COND (<AND <G? <GET ,P-PRSO ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC1> ,SMANY>>>\n\t       <SET LOSS 1>)\n\t      (<AND <G? <GET ,P-PRSI ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC2> ,SMANY>>>\n\t       <SET LOSS 2>)>\n\t<COND (.LOSS\n\t       <TELL \"You can't use multiple \">\n\t       <COND (<EQUAL? .LOSS 2> <TELL \"in\">)>\n\t       <TELL \"direct objects with \\\"\">\n\t       <SET TMP <GET ,P-ITBL ,P-VERBN>>\n\t       <COND (<ZERO? .TMP> <TELL \"tell\">)\n\t\t     (<OR ,P-OFLAG ,P-MERGED>\n\t\t      <PRINTB <GET .TMP 0>>)\n\t\t     (T\n\t\t      <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>)>\n\t       <TELL \"\\\".\" CR>\n\t       <RFALSE>)\n\t      (T)>>"
  },
  "ZMEMQ": {
   "name": "ZMEMQ",
   "file": "gparser.zil",
   "line": 1315,
   "endLine": 1322,
   "source": "<ROUTINE ZMEMQ (ITM TBL \"OPTIONAL\" (SIZE -1) \"AUX\" (CNT 1))\n\t<COND (<NOT .TBL> <RFALSE>)>\n\t<COND (<NOT <L? .SIZE 0>> <SET CNT 0>)\n\t      (ELSE <SET SIZE <GET .TBL 0>>)>\n\t<REPEAT ()\n\t\t<COND (<EQUAL? .ITM <GET .TBL .CNT>>\n\t\t       <RETURN <REST .TBL <* .CNT 2>>>)\n\t\t      (<IGRTR? CNT .SIZE> <RFALSE>)>>>"
  },
  "ZMEMQB": {
   "name": "ZMEMQB",
   "file": "gparser.zil",
   "line": 1324,
   "endLine": 1329,
   "source": "<ROUTINE ZMEMQB (ITM TBL SIZE \"AUX\" (CNT 0))\n\t<REPEAT ()\n\t\t<COND (<EQUAL? .ITM <GETB .TBL .CNT>>\n\t\t       <RTRUE>)\n\t\t      (<IGRTR? CNT .SIZE>\n\t\t       <RFALSE>)>>>"
  },
  "LIT?": {
   "name": "LIT?",
   "file": "gparser.zil",
   "line": 1333,
   "endLine": 1355,
   "source": "<ROUTINE LIT? (RM \"OPTIONAL\" (RMBIT T) \"AUX\" OHERE (LIT <>))\n\t<COND (<AND ,ALWAYS-LIT <EQUAL? ,WINNER ,PLAYER>>\n\t       <RTRUE>)>\n\t<SETG P-GWIMBIT ,ONBIT>\n\t<SET OHERE ,HERE>\n\t<SETG HERE .RM>\n\t<COND (<AND .RMBIT\n\t\t    <FSET? .RM ,ONBIT>>\n\t       <SET LIT T>)\n\t      (T\n\t       <PUT ,P-MERGE ,P-MATCHLEN 0>\n\t       <SETG P-TABLE ,P-MERGE>\n\t       <SETG P-SLOCBITS -1>\n\t       <COND (<EQUAL? .OHERE .RM>\n\t\t      <DO-SL ,WINNER 1 1>\n\t\t      <COND (<AND <NOT <EQUAL? ,WINNER ,PLAYER>>\n\t\t\t\t  <IN? ,PLAYER .RM>>\n\t\t\t     <DO-SL ,PLAYER 1 1>)>)>\n\t       <DO-SL .RM 1 1>\n\t       <COND (<G? <GET ,P-TABLE ,P-MATCHLEN> 0> <SET LIT T>)>)>\n\t<SETG HERE .OHERE>\n\t<SETG P-GWIMBIT 0>\n\t.LIT>"
  },
  "THIS-IT?": {
   "name": "THIS-IT?",
   "file": "gparser.zil",
   "line": 1357,
   "endLine": 1370,
   "source": "<ROUTINE THIS-IT? (OBJ TBL \"AUX\" SYNS)\n <COND (<FSET? .OBJ ,INVISIBLE> <RFALSE>)\n       (<AND ,P-NAM\n\t     <NOT <ZMEMQ ,P-NAM\n\t\t\t <SET SYNS <GETPT .OBJ ,P?SYNONYM>>\n\t\t\t <- </ <PTSIZE .SYNS> 2> 1>>>>\n\t<RFALSE>)\n       (<AND ,P-ADJ\n\t     <OR <NOT <SET SYNS <GETPT .OBJ ,P?ADJECTIVE>>>\n\t\t <NOT <ZMEMQB ,P-ADJ .SYNS <- <PTSIZE .SYNS> 1>>>>>\n\t<RFALSE>)\n       (<AND <NOT <ZERO? ,P-GWIMBIT>> <NOT <FSET? .OBJ ,P-GWIMBIT>>>\n\t<RFALSE>)>\n <RTRUE>>"
  },
  "ACCESSIBLE?": {
   "name": "ACCESSIBLE?",
   "file": "gparser.zil",
   "line": 1372,
   "endLine": 1396,
   "source": "<ROUTINE ACCESSIBLE? (OBJ \"AUX\" (L <LOC .OBJ>)) ;\"can player TOUCH object?\"\n\t ;\"revised 5/2/84 by SEM and SWG\"\n\t <COND (<FSET? .OBJ ,INVISIBLE>\n\t\t<RFALSE>)\n\t       ;(<EQUAL? .OBJ ,PSEUDO-OBJECT>\n\t\t<COND (<EQUAL? ,LAST-PSEUDO-LOC ,HERE>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <RFALSE>)>)\n\t       (<NOT .L>\n\t\t<RFALSE>)\n\t       (<EQUAL? .L ,GLOBAL-OBJECTS>\n\t\t<RTRUE>)\n\t       (<AND <EQUAL? .L ,LOCAL-GLOBALS>\n\t\t     <GLOBAL-IN? .OBJ ,HERE>>\n\t\t<RTRUE>)\n\t       (<NOT <EQUAL? <META-LOC .OBJ> ,HERE <LOC ,WINNER>>>\n\t\t<RFALSE>)\n\t       (<EQUAL? .L ,WINNER ,HERE <LOC ,WINNER>>\n\t\t<RTRUE>)\n\t       (<AND <FSET? .L ,OPENBIT>\n\t\t     <ACCESSIBLE? .L>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "META-LOC": {
   "name": "META-LOC",
   "file": "gparser.zil",
   "line": 1398,
   "endLine": 1407,
   "source": "<ROUTINE META-LOC (OBJ)\n\t <REPEAT ()\n\t\t <COND (<NOT .OBJ>\n\t\t\t<RFALSE>)\n\t\t       (<IN? .OBJ ,GLOBAL-OBJECTS>\n\t\t\t<RETURN ,GLOBAL-OBJECTS>)>\n\t\t <COND (<IN? .OBJ ,ROOMS>\n\t\t\t<RETURN .OBJ>)\n\t\t       (T\n\t\t\t<SET OBJ <LOC .OBJ>>)>>>"
  },
  "V-VERBOSE": {
   "name": "V-VERBOSE",
   "file": "gverbs.zil",
   "line": 13,
   "endLine": 16,
   "source": "<ROUTINE V-VERBOSE ()\n\t <SETG VERBOSE T>\n\t <SETG SUPER-BRIEF <>>\n\t <TELL \"Maximum verbosity.\" CR>>"
  },
  "V-BRIEF": {
   "name": "V-BRIEF",
   "file": "gverbs.zil",
   "line": 18,
   "endLine": 21,
   "source": "<ROUTINE V-BRIEF ()\n\t <SETG VERBOSE <>>\n\t <SETG SUPER-BRIEF <>>\n\t <TELL \"Brief descriptions.\" CR>>"
  },
  "V-SUPER-BRIEF": {
   "name": "V-SUPER-BRIEF",
   "file": "gverbs.zil",
   "line": 23,
   "endLine": 25,
   "source": "<ROUTINE V-SUPER-BRIEF ()\n\t <SETG SUPER-BRIEF T>\n\t <TELL \"Superbrief descriptions.\" CR>>"
  },
  "V-INVENTORY": {
   "name": "V-INVENTORY",
   "file": "gverbs.zil",
   "line": 29,
   "endLine": 31,
   "source": "<ROUTINE V-INVENTORY ()\n\t <COND (<FIRST? ,WINNER> <PRINT-CONT ,WINNER>)\n\t       (T <TELL \"You are empty-handed.\" CR>)>>"
  },
  "FINISH": {
   "name": "FINISH",
   "file": "gverbs.zil",
   "line": 33,
   "endLine": 53,
   "source": "<ROUTINE FINISH (\"AUX\" WRD)\n\t <V-SCORE>\n\t <REPEAT ()\n\t\t <CRLF>\n\t\t <TELL\n\"Would you like to restart the game from the beginning, restore a saved\ngame position, or end this session of the game?|\n(Type RESTART, RESTORE, or QUIT):|\n>\">\n\t\t <READ ,P-INBUF ,P-LEXV>\n\t\t <SET WRD <GET ,P-LEXV 1>>\n\t\t <COND (<EQUAL? .WRD ,W?RESTART>\n\t\t\t<RESTART>\n\t\t\t<TELL \"Failed.\" CR>)\n\t\t       (<EQUAL? .WRD ,W?RESTORE>\n\t\t\t<COND (<RESTORE>\n\t\t\t       <TELL \"Ok.\" CR>)\n\t\t\t      (T\n\t\t\t       <TELL \"Failed.\" CR>)>)\n\t\t       (<EQUAL? .WRD ,W?QUIT ,W?Q>\n\t\t\t<QUIT>)>>>"
  },
  "V-QUIT": {
   "name": "V-QUIT",
   "file": "gverbs.zil",
   "line": 55,
   "endLine": 61,
   "source": "<ROUTINE V-QUIT (\"AUX\" SCOR)\n\t <V-SCORE>\n\t <TELL \n\"Do you wish to leave the game? (Y is affirmative): \">\n\t <COND (<YES?>\n\t\t<QUIT>)\n\t       (ELSE <TELL \"Ok.\" CR>)>>"
  },
  "V-RESTART": {
   "name": "V-RESTART",
   "file": "gverbs.zil",
   "line": 63,
   "endLine": 69,
   "source": "<ROUTINE V-RESTART ()\n\t <V-SCORE T>\n\t <TELL \"Do you wish to restart? (Y is affirmative): \">\n\t <COND (<YES?>\n\t\t<TELL \"Restarting.\" CR>\n\t\t<RESTART>\n\t\t<TELL \"Failed.\" CR>)>>"
  },
  "V-RESTORE": {
   "name": "V-RESTORE",
   "file": "gverbs.zil",
   "line": 71,
   "endLine": 76,
   "source": "<ROUTINE V-RESTORE ()\n\t <COND (<RESTORE>\n\t\t<TELL \"Ok.\" CR>\n\t\t<V-FIRST-LOOK>)\n\t       (T\n\t\t<TELL \"Failed.\" CR>)>>"
  },
  "V-SAVE": {
   "name": "V-SAVE",
   "file": "gverbs.zil",
   "line": 78,
   "endLine": 82,
   "source": "<ROUTINE V-SAVE ()\n\t <COND (<SAVE>\n\t        <TELL \"Ok.\" CR>)\n\t       (T\n\t\t<TELL \"Failed.\" CR>)>>"
  },
  "V-SCRIPT": {
   "name": "V-SCRIPT",
   "file": "gverbs.zil",
   "line": 86,
   "endLine": 90,
   "source": "<ROUTINE V-SCRIPT ()\n\t<PUT 0 8 <BOR <GET 0 8> 1>>\n\t<TELL \"Here begins a transcript of interaction with\" CR>\n\t<V-VERSION>\n\t<RTRUE>>"
  },
  "V-UNSCRIPT": {
   "name": "V-UNSCRIPT",
   "file": "gverbs.zil",
   "line": 92,
   "endLine": 96,
   "source": "<ROUTINE V-UNSCRIPT ()\n\t<TELL \"Here ends a transcript of interaction with\" CR>\n\t<V-VERSION>\n\t<PUT 0 8 <BAND <GET 0 8> -2>>\n\t<RTRUE>>"
  },
  "V-VERSION": {
   "name": "V-VERSION",
   "file": "gverbs.zil",
   "line": 98,
   "endLine": 121,
   "source": "<ROUTINE V-VERSION (\"AUX\" (CNT 17))\n\t%<COND (<==? ,ZORK-NUMBER 1>\n\t\t'<TELL \"ZORK I: The Great Underground Empire|\nInfocom interactive fiction - a fantasy story|\nCopyright (c) 1981, 1982, 1983, 1984, 1985, 1986\">)\n\t       (<==? ,ZORK-NUMBER 2>\n\t\t'<TELL \"ZORK II: The Wizard of Frobozz|\nInfocom interactive fiction - a fantasy story|\nCopyright (c) 1981, 1982, 1983, 1986\">)\n\t       (<==? ,ZORK-NUMBER 3>\n\t\t'<TELL \"ZORK III: The Dungeon Master|\nInfocom interactive fiction - a fantasy story|\nCopyright 1982, 1983, 1984, 1986\">)>\n\t<TELL \" Infocom, Inc. All rights reserved.\" CR>\n\t<TELL \"ZORK is a registered trademark of Infocom, Inc.|\nRelease \">\n\t<PRINTN <BAND <GET 0 1> *3777*>>\n\t<TELL \" / Serial number \">\n\t<REPEAT ()\n\t\t<COND (<G? <SET CNT <+ .CNT 1>> 23>\n\t\t       <RETURN>)\n\t\t      (T\n\t\t       <PRINTC <GETB 0 .CNT>>)>>\n\t<CRLF>>"
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
   "file": "gverbs.zil",
   "line": 153,
   "endLine": 154,
   "source": "<ROUTINE V-ADVENT ()\n\t <TELL \"A hollow voice says \\\"Fool.\\\"\" CR>>"
  },
  "V-ALARM": {
   "name": "V-ALARM",
   "file": "gverbs.zil",
   "line": 156,
   "endLine": 168,
   "source": "<ROUTINE V-ALARM ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<COND %<COND (<==? ,ZORK-NUMBER 1>\n\t\t\t      '(<L? <GETP ,PRSO ,P?STRENGTH> 0>\n\t\t                <TELL \"The \" D ,PRSO \" is rudely awakened.\" CR>\n\t\t                <AWAKEN ,PRSO>))\n\t\t\t     (T\n\t\t\t      '(<NULL-F> <RTRUE>))>\n\t\t      (T\n\t\t       <TELL\n\"He's wide awake, or haven't you noticed...\" CR>)>)\n\t       (T\n\t\t<TELL \"The \" D ,PRSO \" isn't sleeping.\" CR>)>>"
  },
  "V-ANSWER": {
   "name": "V-ANSWER",
   "file": "gverbs.zil",
   "line": 170,
   "endLine": 174,
   "source": "<ROUTINE V-ANSWER ()\n\t <TELL \"Nobody seems to be awaiting your answer.\" CR>\n\t <SETG P-CONT <>>\n\t <SETG QUOTE-FLAG <>>\n\t <RTRUE>>"
  },
  "V-ATTACK": {
   "name": "V-ATTACK",
   "file": "gverbs.zil",
   "line": 176,
   "endLine": 193,
   "source": "<ROUTINE V-ATTACK ()\n\t <COND (<NOT <FSET? ,PRSO ,ACTORBIT>>\n\t\t<TELL\n\"I've known strange people, but fighting a \" D ,PRSO \"?\" CR>)\n\t       (<OR <NOT ,PRSI>\n\t\t    <EQUAL? ,PRSI ,HANDS>>\n\t\t<TELL\n\"Trying to attack a \" D ,PRSO \" with your bare hands is suicidal.\" CR>)\n\t       (<NOT <IN? ,PRSI ,WINNER>>\n\t\t<TELL \"You aren't even holding the \" D ,PRSI \".\" CR>)\n\t       (<NOT <FSET? ,PRSI ,WEAPONBIT>>\n\t\t<TELL\n\"Trying to attack the \" D ,PRSO \" with a \" D ,PRSI \" is suicidal.\" CR>)\n\t       (T\n\t        %<COND (<==? ,ZORK-NUMBER 1>\n\t\t\t'<HERO-BLOW>)\n\t\t       (T\n\t\t\t'<TELL \"You can't.\" CR>)>)>>"
  },
  "V-BACK": {
   "name": "V-BACK",
   "file": "gverbs.zil",
   "line": 195,
   "endLine": 196,
   "source": "<ROUTINE V-BACK ()\n\t <TELL \"Sorry, my memory is poor. Please give a direction.\" CR>>"
  },
  "V-BLAST": {
   "name": "V-BLAST",
   "file": "gverbs.zil",
   "line": 198,
   "endLine": 199,
   "source": "<ROUTINE V-BLAST ()\n\t <TELL \"You can't blast anything by using words.\" CR>>"
  },
  "PRE-BOARD": {
   "name": "PRE-BOARD",
   "file": "gverbs.zil",
   "line": 201,
   "endLine": 222,
   "source": "<ROUTINE PRE-BOARD (\"AUX\" AV)\n\t <SET AV <LOC ,WINNER>>\n\t <COND %<COND (<==? ,ZORK-NUMBER 3>\n\t\t       '(<EQUAL? ,PRSO ,WATER-CHANNEL ,TM-SEAT ,LAKE>\n\t\t         <RFALSE>))\n\t\t      (T\n\t\t       '(<NULL-F> <RTRUE>))>\n\t       (<FSET? ,PRSO ,VEHBIT>\n\t\t<COND (<NOT <IN? ,PRSO ,HERE>>\n\t\t       <TELL\n\"The \" D ,PRSO \" must be on the ground to be boarded.\" CR>)\n\t\t      (<FSET? .AV ,VEHBIT>\n\t\t       <TELL \"You are already in the \" D .AV \"!\" CR>)\n\t\t      (T\n\t\t       <RFALSE>)>)\n\t       (<EQUAL? ,PRSO ,WATER ,GLOBAL-WATER>\n\t\t<PERFORM ,V?SWIM ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL\n\"You have a theory on how to board a \" D ,PRSO \", perhaps?\" CR>)>\n\t <RFATAL>>"
  },
  "V-BOARD": {
   "name": "V-BOARD",
   "file": "gverbs.zil",
   "line": 224,
   "endLine": 228,
   "source": "<ROUTINE V-BOARD (\"AUX\" AV)\n\t <TELL \"You are now in the \" D ,PRSO \".\" CR>\n\t <MOVE ,WINNER ,PRSO>\n\t <APPLY <GETP ,PRSO ,P?ACTION> ,M-ENTER>\n\t <RTRUE>>"
  },
  "V-BREATHE": {
   "name": "V-BREATHE",
   "file": "gverbs.zil",
   "line": 230,
   "endLine": 231,
   "source": "<ROUTINE V-BREATHE ()\n\t <PERFORM ,V?INFLATE ,PRSO ,LUNGS>>"
  },
  "V-BRUSH": {
   "name": "V-BRUSH",
   "file": "gverbs.zil",
   "line": 233,
   "endLine": 234,
   "source": "<ROUTINE V-BRUSH ()\n\t <TELL \"If you wish, but heaven only knows why.\" CR>>"
  },
  "V-BUG": {
   "name": "V-BUG",
   "file": "gverbs.zil",
   "line": 236,
   "endLine": 238,
   "source": "<ROUTINE V-BUG ()\n\t <TELL\n\"Bug? Not in a flawless program like this! (Cough, cough).\" CR>>"
  },
  "TELL-NO-PRSI": {
   "name": "TELL-NO-PRSI",
   "file": "gverbs.zil",
   "line": 240,
   "endLine": 241,
   "source": "<ROUTINE TELL-NO-PRSI ()\n\t <TELL \"You didn't say with what!\" CR>>"
  },
  "PRE-BURN": {
   "name": "PRE-BURN",
   "file": "gverbs.zil",
   "line": 243,
   "endLine": 249,
   "source": "<ROUTINE PRE-BURN ()\n\t <COND (<NOT ,PRSI>\n\t\t<TELL-NO-PRSI>)\n\t       (<FLAMING? ,PRSI>\n\t        <RFALSE>)\n\t       (T\n\t        <TELL \"With a \" D ,PRSI \"??!?\" CR>)>>"
  },
  "V-BURN": {
   "name": "V-BURN",
   "file": "gverbs.zil",
   "line": 251,
   "endLine": 274,
   "source": "<ROUTINE V-BURN ()\n\t <COND %<COND (<==? ,ZORK-NUMBER 2>\n\t\t       '(<EQUAL? <LOC ,PRSO> ,RECEPTACLE>\n\t\t         <BALLOON-BURN>\n\t\t         <RTRUE>))\n\t\t      (T\n\t\t       '(<NULL-F> <RFALSE>))>\n\t       (<FSET? ,PRSO ,BURNBIT>\n\t\t<COND (<OR <IN? ,PRSO ,WINNER>\n\t\t\t   <IN? ,WINNER ,PRSO>>\n\t\t       <REMOVE-CAREFULLY ,PRSO>\n\t\t       <TELL \"The \" D ,PRSO>\n\t\t       <TELL\n\" catches fire. Unfortunately, you were \">\n\t\t       <COND (<IN? ,WINNER ,PRSO>\n\t\t\t      <TELL \"in\">)\n\t\t\t     (T <TELL \"holding\">)>\n\t\t       <JIGS-UP \" it at the time.\">)\n\t\t      (T\n\t\t       <REMOVE-CAREFULLY ,PRSO>\n\t\t       <TELL\n\"The \" D ,PRSO \" catches fire and is consumed.\" CR>)>)\n\t       (T\n\t\t<TELL \"You can't burn a \" D ,PRSO \".\" CR>)>>"
  },
  "V-CHOMP": {
   "name": "V-CHOMP",
   "file": "gverbs.zil",
   "line": 276,
   "endLine": 277,
   "source": "<ROUTINE V-CHOMP ()\n\t <TELL \"Preposterous!\" CR>>"
  },
  "V-CLIMB-DOWN": {
   "name": "V-CLIMB-DOWN",
   "file": "gverbs.zil",
   "line": 279,
   "endLine": 279,
   "source": "<ROUTINE V-CLIMB-DOWN () <V-CLIMB-UP ,P?DOWN ,PRSO>>"
  },
  "V-CLIMB-FOO": {
   "name": "V-CLIMB-FOO",
   "file": "gverbs.zil",
   "line": 281,
   "endLine": 288,
   "source": "<ROUTINE V-CLIMB-FOO ()\n\t %<COND (<==? ,ZORK-NUMBER 3>\n\t\t '<V-CLIMB-UP <COND (<EQUAL? ,PRSO ,ROPE ,GLOBAL-ROPE>\n\t\t\t\t     ,P?DOWN)\n\t\t\t\t    (T ,P?UP)>\n\t\t\t      T>)\n\t\t(ELSE\n\t\t '<V-CLIMB-UP ,P?UP ,PRSO>)>>"
  },
  "V-CLIMB-ON": {
   "name": "V-CLIMB-ON",
   "file": "gverbs.zil",
   "line": 290,
   "endLine": 298,
   "source": "<ROUTINE V-CLIMB-ON ()\n\t <COND (<FSET? ,PRSO ,VEHBIT>\n\t\t%<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t'<V-CLIMB-UP ,P?UP T>)\n\t\t       (ELSE\n\t\t\t'<PERFORM ,V?BOARD ,PRSO>)>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"You can't climb onto the \" D ,PRSO \".\" CR>)>>"
  },
  "V-CLIMB-UP": {
   "name": "V-CLIMB-UP",
   "file": "gverbs.zil",
   "line": 300,
   "endLine": 334,
   "source": "<ROUTINE V-CLIMB-UP (\"OPTIONAL\" (DIR ,P?UP) (OBJ <>) \"AUX\" X TX)\n\t <COND (<AND .OBJ <NOT <EQUAL? ,PRSO ,ROOMS>>>\n\t\t<SET OBJ ,PRSO>)>\n\t <COND (<SET TX <GETPT ,HERE .DIR>>\n\t\t<COND (.OBJ\n\t\t       <SET X <PTSIZE .TX>>\n\t\t       <COND (<OR <EQUAL? .X ,NEXIT>\n\t\t\t\t  <AND <EQUAL? .X ,CEXIT ,DEXIT ,UEXIT>\n\t\t\t\t       <NOT <GLOBAL-IN? ,PRSO <GETB .TX 0>>>>>\n\t\t\t      <TELL \"The \" D .OBJ \" do\">\n\t\t\t      <COND (<NOT <EQUAL? .OBJ ,STAIRS>>\n\t\t\t\t     <TELL \"es\">)>\n\t\t\t      <TELL \"n't lead \">\n\t\t\t      <COND (<==? .DIR ,P?UP>\n\t\t\t\t     <TELL \"up\">)\n\t\t\t\t    (T <TELL \"down\">)>\n\t\t\t      <TELL \"ward.\" CR>\n\t\t\t      <RTRUE>)>)>\n\t\t<DO-WALK .DIR>\n\t\t<RTRUE>)\n\t       (<AND .OBJ\n\t\t     <ZMEMQ ,W?WALL\n\t\t\t    <SET X <GETPT ,PRSO ,P?SYNONYM>> <PTSIZE .X>>>\n\t\t<TELL \"Climbing the walls is to no avail.\" CR>)\n\t       (%<COND (<==? ,ZORK-NUMBER 1>\n\t\t\t'<AND <NOT <EQUAL? ,HERE ,PATH>>\n\t\t\t      <EQUAL? .OBJ <> ,TREE>\n\t\t\t      <GLOBAL-IN? ,TREE ,HERE>>)\n\t\t       (ELSE '<NULL-F>)>\n\t\t<TELL \"There are no climbable trees here.\" CR>\n\t\t<RTRUE>)\n\t       (<EQUAL? .OBJ <> ,ROOMS>\n\t\t<TELL \"You can't go that way.\" CR>)\n\t       (T\n\t        <TELL \"You can't do that!\" CR>)>>"
  },
  "V-CLOSE": {
   "name": "V-CLOSE",
   "file": "gverbs.zil",
   "line": 336,
   "endLine": 357,
   "source": "<ROUTINE V-CLOSE ()\n\t <COND (<AND <NOT <FSET? ,PRSO ,CONTBIT>>\n\t\t     <NOT <FSET? ,PRSO ,DOORBIT>>>\n\t\t<TELL \"You must tell me how to do that to a \" D ,PRSO \".\" CR>)\n\t       (<AND <NOT <FSET? ,PRSO ,SURFACEBIT>>\n\t\t     <NOT <EQUAL? <GETP ,PRSO ,P?CAPACITY> 0>>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <FCLEAR ,PRSO ,OPENBIT>\n\t\t       <TELL \"Closed.\" CR>\n\t\t       <COND (<AND ,LIT <NOT <SETG LIT <LIT? ,HERE>>>>\n\t\t\t      <TELL \"It is now pitch black.\" CR>)>\n\t\t       <RTRUE>)\n\t\t      (T\n\t \t       <TELL \"It is already closed.\" CR>)>)\n\t       (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <FCLEAR ,PRSO ,OPENBIT>\n\t\t       <TELL \"The \" D ,PRSO \" is now closed.\" CR>)\n\t\t      (T\n\t \t       <TELL \"It is already closed.\" CR>)>)\n\t       (T\n\t\t<TELL \"You cannot close that.\" CR>)>>"
  },
  "V-COMMAND": {
   "name": "V-COMMAND",
   "file": "gverbs.zil",
   "line": 359,
   "endLine": 363,
   "source": "<ROUTINE V-COMMAND ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL \"The \" D ,PRSO \" pays no attention.\" CR>)\n\t       (T\n\t\t<TELL \"You cannot talk to that!\" CR>)>>"
  },
  "V-COUNT": {
   "name": "V-COUNT",
   "file": "gverbs.zil",
   "line": 365,
   "endLine": 369,
   "source": "<ROUTINE V-COUNT ()\n\t <COND (<EQUAL? ,PRSO ,BLESSINGS>\n\t \t<TELL \"Well, for one, you are playing Zork...\" CR>)\n\t       (T\n\t\t<TELL \"You have lost your mind.\" CR>)>>"
  },
  "V-CROSS": {
   "name": "V-CROSS",
   "file": "gverbs.zil",
   "line": 371,
   "endLine": 372,
   "source": "<ROUTINE V-CROSS ()\n\t <TELL \"You can't cross that!\" CR>>"
  },
  "V-CURSES": {
   "name": "V-CURSES",
   "file": "gverbs.zil",
   "line": 374,
   "endLine": 382,
   "source": "<ROUTINE V-CURSES ()\n\t <COND (,PRSO\n\t\t<COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t       <TELL \"Insults of this nature won't help you.\" CR>)\n\t\t      (T\n\t\t       <TELL \"What a loony!\" CR>)>)\n\t       (T\n\t\t<TELL\n\"Such language in a high-class establishment like this!\" CR>)>>"
  },
  "V-CUT": {
   "name": "V-CUT",
   "file": "gverbs.zil",
   "line": 384,
   "endLine": 400,
   "source": "<ROUTINE V-CUT ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<PERFORM ,V?ATTACK ,PRSO ,PRSI>)\n\t       (<AND <FSET? ,PRSO ,BURNBIT>\n\t\t     <FSET? ,PRSI ,WEAPONBIT>>\n\t\t<COND (<IN? ,WINNER ,PRSO>\n\t\t       <TELL\n\"Not a bright idea, especially since you're in it.\" CR>\n\t\t       <RTRUE>)>\n\t\t<REMOVE-CAREFULLY ,PRSO>\n\t\t<TELL \"Your skillful \" D ,PRSI \"smanship slices the \" D ,PRSO\n\" into innumerable slivers which blow away.\" CR>)\n\t       (<NOT <FSET? ,PRSI ,WEAPONBIT>>\n\t\t<TELL\n\"The \\\"cutting edge\\\" of a \" D ,PRSI \" is hardly adequate.\" CR>)\n\t       (T\n\t\t<TELL \"Strange concept, cutting the \" D ,PRSO \"....\" CR>)>>"
  },
  "V-DEFLATE": {
   "name": "V-DEFLATE",
   "file": "gverbs.zil",
   "line": 402,
   "endLine": 403,
   "source": "<ROUTINE V-DEFLATE ()\n\t <TELL \"Come on, now!\" CR>>"
  },
  "V-DIG": {
   "name": "V-DIG",
   "file": "gverbs.zil",
   "line": 405,
   "endLine": 416,
   "source": "<ROUTINE V-DIG ()\n\t <COND (<NOT ,PRSI>\n\t\t<SETG PRSI ,HANDS>)>\n\t %<COND (<==? ,ZORK-NUMBER 1>\n\t\t '<COND (<EQUAL? ,PRSI ,SHOVEL>\n\t\t\t <TELL \"There's no reason to be digging here.\" CR>\n\t\t\t <RTRUE>)>)\n\t\t(ELSE T)>\n\t <COND (<FSET? ,PRSI ,TOOLBIT>\n\t\t<TELL \"Digging with the \" D ,PRSI \" is slow and tedious.\" CR>)\n\t       (T\n\t\t<TELL \"Digging with a \" D ,PRSI \" is silly.\" CR>)>>"
  },
  "V-DISEMBARK": {
   "name": "V-DISEMBARK",
   "file": "gverbs.zil",
   "line": 418,
   "endLine": 432,
   "source": "<ROUTINE V-DISEMBARK ()\n\t <COND (<AND <EQUAL? ,PRSO ,ROOMS>\n\t\t     <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t<PERFORM ,V?DISEMBARK <LOC ,WINNER>>\n\t\t<RTRUE>)\n\t       (<NOT <EQUAL? <LOC ,WINNER> ,PRSO>>\n\t\t<TELL \"You're not in that!\" CR>\n\t\t<RFATAL>)\n\t       (<FSET? ,HERE ,RLANDBIT>\n\t\t<TELL \"You are on your own feet again.\" CR>\n\t\t<MOVE ,WINNER ,HERE>)\n\t       (T\n\t\t<TELL\n\"You realize that getting out here would be fatal.\" CR>\n\t\t<RFATAL>)>>"
  },
  "V-DISENCHANT": {
   "name": "V-DISENCHANT",
   "file": "gverbs.zil",
   "line": 434,
   "endLine": 466,
   "source": "<ROUTINE V-DISENCHANT ()\n\t %<COND (<==? ,ZORK-NUMBER 2>\n\t\t '<COND (<NOT <IN? ,PRSO ,HERE>>\n\t\t         <RTRUE>)\n\t                (<OR <EQUAL? ,SPELL-USED ,W?FEEBLE ,W?FUMBLE ,W?FEAR>\n\t\t          <EQUAL? ,SPELL-USED ,W?FREEZE ,W?FALL ,W?FERMENT>\n\t\t          <EQUAL? ,SPELL-USED ,W?FIERCE ,W?FENCE ,W?FANTASIZE>>\n\t\t          <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t                 <COND (<EQUAL? ,SPELL-USED ,W?FEEBLE>\n\t\t\t                <TELL\n\"The \" D ,PRSO \" seems stronger now.\" CR>)\n\t\t\t               (<EQUAL? ,SPELL-USED ,W?FUMBLE>\n\t\t\t                <TELL\n\"The \" D ,PRSO \" no longer appears clumsy.\" CR>)\n\t\t\t               (<EQUAL? ,SPELL-USED ,W?FEAR>\n\t\t\t                <TELL\n\"The \" D ,PRSO \" no longer appears afraid.\" CR>)\n\t\t\t               (<EQUAL? ,SPELL-USED ,W?FREEZE>\n\t\t\t                <TELL\n\"The \" D ,PRSO \" moves again.\" CR>)\n\t\t\t               (<EQUAL? ,SPELL-USED ,W?FERMENT>\n\t\t\t                <TELL\n\"The \" D ,PRSO \" stops swaying.\" CR>)\n\t\t\t               (<EQUAL? ,SPELL-USED ,W?FIERCE>\n\t\t\t                <TELL\n\"The \" D ,PRSO \" appears more peaceful.\" CR>)>)>)\n\t                        (<EQUAL? ,SPELL-USED ,W?FLOAT>\n\t\t                 <TELL\n\"The \" D ,PRSO \" sinks to the ground.\" CR>)\n\t                        (<EQUAL? ,SPELL-USED ,W?FUDGE>\n\t\t                 <TELL \"The sweet smell has dispersed.\" CR>)>)\n\t\t(T\n\t\t '<TELL \"Nothing happens.\" CR>)>>"
  },
  "V-DRINK": {
   "name": "V-DRINK",
   "file": "gverbs.zil",
   "line": 468,
   "endLine": 469,
   "source": "<ROUTINE V-DRINK ()\n\t <V-EAT>>"
  },
  "V-DRINK-FROM": {
   "name": "V-DRINK-FROM",
   "file": "gverbs.zil",
   "line": 471,
   "endLine": 472,
   "source": "<ROUTINE V-DRINK-FROM ()\n\t <TELL \"How peculiar!\" CR>>"
  },
  "PRE-DROP": {
   "name": "PRE-DROP",
   "file": "gverbs.zil",
   "line": 474,
   "endLine": 477,
   "source": "<ROUTINE PRE-DROP ()\n\t <COND (<EQUAL? ,PRSO <LOC ,WINNER>>\n\t\t<PERFORM ,V?DISEMBARK ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-DROP": {
   "name": "V-DROP",
   "file": "gverbs.zil",
   "line": 479,
   "endLine": 481,
   "source": "<ROUTINE V-DROP ()\n\t <COND (<IDROP>\n\t\t<TELL \"Dropped.\" CR>)>>"
  },
  "V-EAT": {
   "name": "V-EAT",
   "file": "gverbs.zil",
   "line": 483,
   "endLine": 516,
   "source": "<ROUTINE V-EAT (\"AUX\" (EAT? <>) (DRINK? <>) (NOBJ <>))\n\t <COND (<SET EAT? <FSET? ,PRSO ,FOODBIT>>\n\t\t<COND (<AND <NOT <IN? ,PRSO ,WINNER>>\n\t\t\t    <NOT <IN? <LOC ,PRSO> ,WINNER>>>\n\t\t       <TELL \"You're not holding that.\" CR>)\n\t\t      (<VERB? DRINK>\n\t\t       <TELL \"How can you drink that?\">)\n\t\t      (T\n\t\t       <TELL \"Thank you very much. It really hit the spot.\">\n\t\t       <REMOVE-CAREFULLY ,PRSO>)>\n\t\t<CRLF>)\n\t       (<FSET? ,PRSO ,DRINKBIT>\n\t\t<SET DRINK? T>\n\t\t<SET NOBJ <LOC ,PRSO>>\n\t\t<COND (<OR <IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t\t   <GLOBAL-IN? ,GLOBAL-WATER ,HERE>\n\t\t\t   <EQUAL? ,PRSO ,PSEUDO-OBJECT>>\n\t\t       <HIT-SPOT>)\n\t\t      (<OR <NOT .NOBJ>\n\t\t\t   <NOT <ACCESSIBLE? .NOBJ>>>\n\t\t       <TELL\n\"There isn't any water here.\" CR>)\n\t\t      (<AND <ACCESSIBLE? .NOBJ>\n\t\t\t    <NOT <IN? .NOBJ ,WINNER>>>\n\t\t       <TELL\n\"You have to be holding the \" D .NOBJ \" first.\" CR>)\n\t\t      (<NOT <FSET? .NOBJ ,OPENBIT>>\n\t\t       <TELL\n\"You'll have to open the \" D .NOBJ \" first.\" CR>)\n\t\t      (T\n\t\t       <HIT-SPOT>)>)\n\t       (<NOT <OR .EAT? .DRINK?>>\n\t\t<TELL\n\"I don't think that the \" D ,PRSO \" would agree with you.\" CR>)>>"
  },
  "HIT-SPOT": {
   "name": "HIT-SPOT",
   "file": "gverbs.zil",
   "line": 518,
   "endLine": 524,
   "source": "<ROUTINE HIT-SPOT ()\n\t <COND (<AND <EQUAL? ,PRSO ,WATER>\n\t\t     <NOT <GLOBAL-IN? ,GLOBAL-WATER ,HERE>>>\n\t\t<REMOVE-CAREFULLY ,PRSO>)>\n\t <TELL\n\"Thank you very much. I was rather thirsty (from all this talking,\nprobably).\" CR>>"
  },
  "V-ECHO": {
   "name": "V-ECHO",
   "file": "gverbs.zil",
   "line": 526,
   "endLine": 548,
   "source": "<ROUTINE V-ECHO (\"AUX\" LST MAX (ECH 0) CNT) \n\t #DECL ((LST) <PRIMTYPE VECTOR> (MAX CNT ECH) FIX)\n\t %<COND (<==? ,ZORK-NUMBER 1>\n\t\t '<COND (<G? <GETB ,P-LEXV ,P-LEXWORDS> 0>\n\t                 <SET LST <REST \n\t\t\t\t   ,P-LEXV\n\t\t\t\t   <* <GETB ,P-LEXV ,P-LEXWORDS> ,P-WORDLEN>>>\n\t                 <SET MAX <- <+ <GETB .LST 0> <GETB .LST 1>> 1>>\n\t                 <REPEAT ()\n\t\t            <COND (<G? <SET ECH <+ .ECH 1>> 2>\n\t\t\t           <TELL \"...\" CR>\n\t\t\t\t   <RETURN>)\n\t\t\t          (T\n\t\t\t           <SET CNT <- <GETB .LST 1> 1>>\n\t\t\t           <REPEAT ()\n\t\t\t\t      <COND (<G? <SET CNT <+ .CNT 1>> .MAX>\n\t\t\t\t\t     <RETURN>)\n\t\t\t\t\t    (T\n\t\t\t\t\t     <PRINTC <GETB ,P-INBUF .CNT>>)>>\n\t\t\t           <TELL \" \">)>>)\n\t\t\t(T <TELL \"echo echo ...\" CR>)>)\n\t\t(T\n\t\t '<TELL \"echo echo ...\" CR>)>>"
  },
  "V-ENCHANT": {
   "name": "V-ENCHANT",
   "file": "gverbs.zil",
   "line": 550,
   "endLine": 608,
   "source": "<ROUTINE V-ENCHANT ()\n%<COND (<==? ,ZORK-NUMBER 2>\n\t'<COND (,WAND-ON <SETG SPELL-VICTIM ,WAND-ON>)>)\n       (T\n\t'<NULL-F>)>\n%<COND (<==? ,ZORK-NUMBER 2>\n\t'<COND (,SPELL-VICTIM\n\t\t<COND (<NOT ,SPELL-USED>\n\t\t       <TELL \"You must be more specific.\" CR>\n\t\t       <RTRUE>)>\n\t\t<COND (<OR <EQUAL? ,SPELL-USED ,W?FEEBLE ,W?FUMBLE ,W?FEAR>\n\t\t\t   <EQUAL? ,SPELL-USED ,W?FREEZE ,W?FALL ,W?FERMENT>\n\t\t\t   <EQUAL? ,SPELL-USED ,W?FIERCE ,W?FENCE ,W?FANTASIZE>>\n\t\t       <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t\t      <TELL\n\"The wand stops glowing, but there is no other obvious effect.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"That might have done something, but it's hard to tell with a \" D ,PRSO \".\" CR>)>)\n\t\t      ;(<EQUAL? ,SPELL-USED ,W?FIREPROOF>\n\t\t       <RTRUE>)\n\t\t      (<EQUAL? ,SPELL-USED ,W?FUDGE>\n\t\t       <TELL\n\"A strong odor of chocolate permeates the room.\" CR>)\n\t\t      (<EQUAL? ,SPELL-USED ,W?FLUORESCE>\n\t\t       <FSET ,PRSO ,LIGHTBIT>\n\t\t       <FSET ,PRSO ,ONBIT>\n\t\t       <SETG LIT T>\n\t\t       <TELL\n\"The \" D ,PRSO \" begins to glow.\" CR>)\n\t\t      (<EQUAL? ,SPELL-USED ,W?FILCH>\n\t\t       <SETG SPELL-HANDLED? T>\n\t\t       <COND (<FSET? ,PRSO ,TAKEBIT>\n\t\t\t      <MOVE ,PRSO ,WINNER>\n\t\t\t      <SCORE-OBJ ,PRSO>\n\t\t\t      <TELL \"Filched!\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL \"You can't filch the \" D ,PRSO \"!\" CR>)>)\n\t\t      (<AND <EQUAL? ,SPELL-USED ,W?FLOAT>\n\t\t\t    <FSET? ,PRSO ,TAKEBIT>>\n\t\t       <COND (<AND <EQUAL? ,SPELL-VICTIM ,COLLAR>\n\t\t\t\t   <IN? ,COLLAR ,CERBERUS>>\n\t\t\t      <SETG SPELL-VICTIM ,CERBERUS>)>\n\t\t       <TELL\n\"The \" D ,PRSO \" floats serenely in midair.\" CR>)\n\t\t      (<AND <EQUAL? ,SPELL-USED ,W?FRY>\n\t\t\t    <FSET? ,PRSO ,TAKEBIT>>\n\t\t       <SETG SPELL-HANDLED? T>\n\t\t       <REMOVE-CAREFULLY ,PRSO>\n\t\t       <TELL \"The \" D ,PRSO \" goes up in a puff of smoke.\" CR>)\n\t\t      (ELSE\n\t\t       <SETG SPELL-VICTIM <>>\n\t\t       <TELL\n\"The wand stops glowing, but there is no other apparent effect.\" CR>)>)\n\t       (ELSE\n\t\t<SETG SPELL-VICTIM <>>\n\t\t<TELL \"Nothing happens.\" CR>)>)\n       (T\n\t'<V-DISENCHANT>)>>"
  },
  "REMOVE-CAREFULLY": {
   "name": "REMOVE-CAREFULLY",
   "file": "gverbs.zil",
   "line": 610,
   "endLine": 618,
   "source": "<ROUTINE REMOVE-CAREFULLY (OBJ \"AUX\" OLIT)\n\t <COND (<EQUAL? .OBJ ,P-IT-OBJECT>\n\t\t<SETG P-IT-OBJECT <>>)>\n\t <SET OLIT ,LIT>\n\t <REMOVE .OBJ>\n\t <SETG LIT <LIT? ,HERE>>\n\t <COND (<AND .OLIT <NOT <EQUAL? .OLIT ,LIT>>>\n\t\t<TELL \"You are left in the dark...\" CR>)>\n\t T>"
  },
  "V-ENTER": {
   "name": "V-ENTER",
   "file": "gverbs.zil",
   "line": 620,
   "endLine": 621,
   "source": "<ROUTINE V-ENTER ()\n\t<DO-WALK ,P?IN>>"
  },
  "V-EXAMINE": {
   "name": "V-EXAMINE",
   "file": "gverbs.zil",
   "line": 623,
   "endLine": 630,
   "source": "<ROUTINE V-EXAMINE ()\n\t <COND (<GETP ,PRSO ,P?TEXT>\n\t\t<TELL <GETP ,PRSO ,P?TEXT> CR>)\n\t       (<OR <FSET? ,PRSO ,CONTBIT>\n\t\t    <FSET? ,PRSO ,DOORBIT>>\n\t\t<V-LOOK-INSIDE>)\n\t       (T\n\t\t<TELL \"There's nothing special about the \" D ,PRSO \".\" CR>)>>"
  },
  "V-EXIT": {
   "name": "V-EXIT",
   "file": "gverbs.zil",
   "line": 632,
   "endLine": 641,
   "source": "<ROUTINE V-EXIT ()\n\t <COND (<AND <EQUAL? ,PRSO <> ,ROOMS>\n\t\t     <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t<PERFORM ,V?DISEMBARK <LOC ,WINNER>>\n\t\t<RTRUE>)\n\t       (<AND ,PRSO <IN? ,WINNER ,PRSO>>\n\t\t<PERFORM ,V?DISEMBARK ,PRSO>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<DO-WALK ,P?OUT>)>>"
  },
  "V-EXORCISE": {
   "name": "V-EXORCISE",
   "file": "gverbs.zil",
   "line": 643,
   "endLine": 644,
   "source": "<ROUTINE V-EXORCISE ()\n\t <TELL \"What a bizarre concept!\" CR>>"
  },
  "PRE-FILL": {
   "name": "PRE-FILL",
   "file": "gverbs.zil",
   "line": 646,
   "endLine": 662,
   "source": "<ROUTINE PRE-FILL (\"AUX\" TX)\n\t <COND (<NOT ,PRSI>\n\t\t<SET TX <GETPT ,HERE ,P?GLOBAL>>\n\t\t<COND (<AND .TX <ZMEMQB ,GLOBAL-WATER .TX <- <PTSIZE .TX> 1>>>\n\t\t       <PERFORM ,V?FILL ,PRSO ,GLOBAL-WATER>\n\t\t       <RTRUE>)\n\t\t      (<IN? ,WATER <LOC ,WINNER>>\n\t\t       <PERFORM ,V?FILL ,PRSO ,WATER>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"There is nothing to fill it with.\" CR>\n\t\t       <RTRUE>)>)>\n\t <COND (<EQUAL? ,PRSI ,WATER>\n\t\t<RFALSE>)\n\t       (<NOT <EQUAL? ,PRSI ,GLOBAL-WATER>>\n\t\t<PERFORM ,V?PUT ,PRSI ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-FILL": {
   "name": "V-FILL",
   "file": "gverbs.zil",
   "line": 664,
   "endLine": 675,
   "source": "<ROUTINE V-FILL ()\n\t <COND (<NOT ,PRSI>\n\t\t<COND (<GLOBAL-IN? ,GLOBAL-WATER ,HERE>\n\t\t       <PERFORM ,V?FILL ,PRSO ,GLOBAL-WATER>\n\t\t       <RTRUE>)\n\t\t      (<IN? ,WATER <LOC ,WINNER>>\n\t\t       <PERFORM ,V?FILL ,PRSO ,WATER>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"There's nothing to fill it with.\" CR>)>)\n\t       (T\n\t\t<TELL \"You may know how to do that, but I don't.\" CR>)>>"
  },
  "V-FIND": {
   "name": "V-FIND",
   "file": "gverbs.zil",
   "line": 677,
   "endLine": 699,
   "source": "<ROUTINE V-FIND (\"AUX\" (L <LOC ,PRSO>))\n\t <COND (<EQUAL? ,PRSO ,HANDS ,LUNGS>\n\t\t<TELL\n\"Within six feet of your head, assuming you haven't left that\nsomewhere.\" CR>)\n\t       (<EQUAL? ,PRSO ,ME>\n\t\t<TELL \"You're around here somewhere...\" CR>)\n\t       (<EQUAL? .L ,GLOBAL-OBJECTS>\n\t\t<TELL \"You find it.\" CR>)\n\t       (<IN? ,PRSO ,WINNER>\n\t\t<TELL \"You have it.\" CR>)\n\t       (<OR <IN? ,PRSO ,HERE>\n\t\t    <GLOBAL-IN? ,PRSO ,HERE>\n\t\t    <EQUAL? ,PRSO ,PSEUDO-OBJECT>>\n\t\t<TELL \"It's right here.\" CR>)\n\t       (<FSET? .L ,ACTORBIT>\n\t\t<TELL \"The \" D .L \" has it.\" CR>)\n\t       (<FSET? .L ,SURFACEBIT>\n\t\t<TELL \"It's on the \" D .L \".\" CR>)\n\t       (<FSET? .L ,CONTBIT>\n\t\t<TELL \"It's in the \" D .L \".\" CR>)\n\t       (T\n\t\t<TELL \"Beats me.\" CR>)>>"
  },
  "V-FOLLOW": {
   "name": "V-FOLLOW",
   "file": "gverbs.zil",
   "line": 701,
   "endLine": 702,
   "source": "<ROUTINE V-FOLLOW ()\n\t <TELL \"You're nuts!\" CR>>"
  },
  "V-FROBOZZ": {
   "name": "V-FROBOZZ",
   "file": "gverbs.zil",
   "line": 704,
   "endLine": 706,
   "source": "<ROUTINE V-FROBOZZ ()\n\t <TELL\n\"The FROBOZZ Corporation created, owns, and operates this dungeon.\" CR>>"
  },
  "PRE-GIVE": {
   "name": "PRE-GIVE",
   "file": "gverbs.zil",
   "line": 708,
   "endLine": 711,
   "source": "<ROUTINE PRE-GIVE ()\n\t <COND (<NOT <HELD? ,PRSO>>\n\t\t<TELL \n\"That's easy for you to say since you don't even have the \" D ,PRSO \".\" CR>)>>"
  },
  "V-GIVE": {
   "name": "V-GIVE",
   "file": "gverbs.zil",
   "line": 713,
   "endLine": 717,
   "source": "<ROUTINE V-GIVE ()\n\t <COND (<NOT <FSET? ,PRSI ,ACTORBIT>>\n\t\t<TELL \"You can't give a \" D ,PRSO \" to a \" D ,PRSI \"!\" CR>)\n\t       (T\n\t\t<TELL \"The \" D ,PRSI \" refuses it politely.\" CR>)>>"
  },
  "V-HATCH": {
   "name": "V-HATCH",
   "file": "gverbs.zil",
   "line": 719,
   "endLine": 720,
   "source": "<ROUTINE V-HATCH ()\n\t <TELL \"Bizarre!\" CR>>"
  },
  "V-HELLO": {
   "name": "V-HELLO",
   "file": "gverbs.zil",
   "line": 724,
   "endLine": 734,
   "source": "<ROUTINE V-HELLO ()\n\t <COND (,PRSO\n\t\t<COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t       <TELL\n\"The \" D ,PRSO \" bows his head to you in greeting.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"It's a well known fact that only schizophrenics say \\\"Hello\\\" to a \"\nD ,PRSO \".\" CR>)>)\n\t       (T\n\t\t<TELL <PICK-ONE ,HELLOS> CR>)>>"
  },
  "V-INCANT": {
   "name": "V-INCANT",
   "file": "gverbs.zil",
   "line": 736,
   "endLine": 755,
   "source": "<ROUTINE V-INCANT ()\n%<COND (<==? ,ZORK-NUMBER 2>\n\t'<COND (,SPELL-USED\n\t\t<TELL \"Nothing happens.\" CR>)\n\t       (,WAND-ON\n\t\t<SETG SPELL-VICTIM ,WAND-ON>\n\t\t<SETG SPELL-USED <GET ,P-LEXV ,P-CONT>>\n\t\t<TELL \"The wand glows very brightly for a moment.\" CR>\n\t\t<ENABLE <QUEUE I-SPELL <+ 10 <RANDOM 10>>>>\n\t\t<SETG WAND-ON <>>\n\t\t<PERFORM ,V?ENCHANT ,SPELL-VICTIM>)\n\t       (T\n\t\t<TELL\n\"The incantation echoes back faintly, but nothing else happens.\" CR>)>)\n       (T\n\t'<TELL\n\"The incantation echoes back faintly, but nothing else happens.\" CR>)>\n\t <SETG QUOTE-FLAG <>>\n\t <SETG P-CONT <>>\n\t <RTRUE>>"
  },
  "V-INFLATE": {
   "name": "V-INFLATE",
   "file": "gverbs.zil",
   "line": 757,
   "endLine": 758,
   "source": "<ROUTINE V-INFLATE ()\n\t <TELL \"How can you inflate that?\" CR>>"
  },
  "V-KICK": {
   "name": "V-KICK",
   "file": "gverbs.zil",
   "line": 760,
   "endLine": 760,
   "source": "<ROUTINE V-KICK () <HACK-HACK \"Kicking the \">>"
  },
  "V-KISS": {
   "name": "V-KISS",
   "file": "gverbs.zil",
   "line": 762,
   "endLine": 763,
   "source": "<ROUTINE V-KISS ()\n\t <TELL \"I'd sooner kiss a pig.\" CR>>"
  },
  "V-KNOCK": {
   "name": "V-KNOCK",
   "file": "gverbs.zil",
   "line": 765,
   "endLine": 769,
   "source": "<ROUTINE V-KNOCK ()\n\t <COND (<FSET? ,PRSO ,DOORBIT>\n\t\t<TELL \"Nobody's home.\" CR>)\n\t       (T\n\t\t<TELL \"Why knock on a \" D ,PRSO \"?\" CR>)>>"
  },
  "V-LAMP-OFF": {
   "name": "V-LAMP-OFF",
   "file": "gverbs.zil",
   "line": 771,
   "endLine": 784,
   "source": "<ROUTINE V-LAMP-OFF ()\n\t <COND (<FSET? ,PRSO ,LIGHTBIT>\n\t\t<COND (<NOT <FSET? ,PRSO ,ONBIT>>\n\t\t       <TELL \"It is already off.\" CR>)\n\t\t      (T\n\t\t       <FCLEAR ,PRSO ,ONBIT>\n\t\t       <COND (,LIT\n\t\t\t      <SETG LIT <LIT? ,HERE>>)>\n\t\t       <TELL \"The \" D ,PRSO \" is now off.\" CR>\n\t\t       <COND (<NOT ,LIT>\n\t\t\t      <TELL \"It is now pitch black.\" CR>)>)>)\n\t       (T\n\t\t<TELL \"You can't turn that off.\" CR>)>\n\t <RTRUE>>"
  },
  "V-LAMP-ON": {
   "name": "V-LAMP-ON",
   "file": "gverbs.zil",
   "line": 786,
   "endLine": 802,
   "source": "<ROUTINE V-LAMP-ON ()\n\t <COND (<FSET? ,PRSO ,LIGHTBIT>\n\t\t<COND (<FSET? ,PRSO ,ONBIT>\n\t\t       <TELL \"It is already on.\" CR>)\n\t\t      (T\n\t\t       <FSET ,PRSO ,ONBIT>\n\t\t       <TELL \"The \" D ,PRSO \" is now on.\" CR>\n\t\t       <COND (<NOT ,LIT>\n\t\t\t      <SETG LIT <LIT? ,HERE>>\n\t\t\t      <CRLF>\n\t\t\t      <V-LOOK>)>)>)\n\t       (<FSET? ,PRSO ,BURNBIT>\n\t\t<TELL\n\"If you wish to burn the \" D ,PRSO \", you should say so.\" CR>)\n\t       (T\n\t\t<TELL \"You can't turn that on.\" CR>)>\n\t <RTRUE>>"
  },
  "V-LAUNCH": {
   "name": "V-LAUNCH",
   "file": "gverbs.zil",
   "line": 804,
   "endLine": 808,
   "source": "<ROUTINE V-LAUNCH ()\n\t <COND (<FSET? ,PRSO ,VEHBIT>\n\t\t<TELL \"You can't launch that by saying \\\"launch\\\"!\" CR>)\n\t       (T\n\t\t<TELL \"That's pretty weird.\" CR>)>>"
  },
  "V-LEAN-ON": {
   "name": "V-LEAN-ON",
   "file": "gverbs.zil",
   "line": 810,
   "endLine": 811,
   "source": "<ROUTINE V-LEAN-ON ()\n\t <TELL \"Getting tired?\" CR>>"
  },
  "V-LEAP": {
   "name": "V-LEAP",
   "file": "gverbs.zil",
   "line": 813,
   "endLine": 842,
   "source": "<ROUTINE V-LEAP (\"AUX\" TX S)\n\t <COND (,PRSO\n\t\t<COND (<IN? ,PRSO ,HERE>\n\t\t       <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t\t      <TELL\n\"The \" D ,PRSO \" is too big to jump over.\" CR>)\n\t\t\t     (T\n\t\t\t      <V-SKIP>)>)\n\t\t      (T\n\t\t       <TELL \"That would be a good trick.\" CR>)>)\n\t       (<SET TX <GETPT ,HERE ,P?DOWN>>\n\t\t<SET S <PTSIZE .TX>>\n\t\t<COND (<OR <EQUAL? .S 2> ;NEXIT\n       \t\t\t   <AND <EQUAL? .S 4> ;CEXIT\n\t\t\t\t<NOT <VALUE <GETB .TX 1>>>>>\n\t\t       <TELL\n\"This was not a very safe place to try jumping.\" CR>\n\t\t       <JIGS-UP <PICK-ONE ,JUMPLOSS>>)\n\t\t      %<COND (<==? ,ZORK-NUMBER 1>\n\t\t\t      '(<EQUAL? ,HERE ,UP-A-TREE>\n\t\t                <TELL\n\"In a feat of unaccustomed daring, you manage to land on your feet without\nkilling yourself.\" CR CR>\n\t\t                <DO-WALK ,P?DOWN>\n\t\t                <RTRUE>))\n\t\t\t     (T '(<NULL-F> T))>\n\t\t      (T\n\t\t       <V-SKIP>)>)\n\t       (T\n\t\t<V-SKIP>)>>"
  },
  "V-LEAVE": {
   "name": "V-LEAVE",
   "file": "gverbs.zil",
   "line": 850,
   "endLine": 850,
   "source": "<ROUTINE V-LEAVE () <DO-WALK ,P?OUT>>"
  },
  "V-LISTEN": {
   "name": "V-LISTEN",
   "file": "gverbs.zil",
   "line": 852,
   "endLine": 853,
   "source": "<ROUTINE V-LISTEN ()\n\t <TELL \"The \" D ,PRSO \" makes no sound.\" CR>>"
  },
  "V-LOCK": {
   "name": "V-LOCK",
   "file": "gverbs.zil",
   "line": 855,
   "endLine": 856,
   "source": "<ROUTINE V-LOCK ()\n\t <TELL \"It doesn't seem to work.\" CR>>"
  },
  "V-LOOK": {
   "name": "V-LOOK",
   "file": "gverbs.zil",
   "line": 858,
   "endLine": 860,
   "source": "<ROUTINE V-LOOK ()\n\t <COND (<DESCRIBE-ROOM T>\n\t\t<DESCRIBE-OBJECTS T>)>>"
  },
  "V-LOOK-BEHIND": {
   "name": "V-LOOK-BEHIND",
   "file": "gverbs.zil",
   "line": 862,
   "endLine": 863,
   "source": "<ROUTINE V-LOOK-BEHIND ()\n\t <TELL \"There is nothing behind the \" D ,PRSO \".\" CR>>"
  },
  "V-LOOK-INSIDE": {
   "name": "V-LOOK-INSIDE",
   "file": "gverbs.zil",
   "line": 865,
   "endLine": 890,
   "source": "<ROUTINE V-LOOK-INSIDE ()\n\t <COND (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL\n\"The \" D ,PRSO \" is open, but I can't tell what's beyond it.\">)\n\t\t      (T\n\t\t       <TELL \"The \" D ,PRSO \" is closed.\">)>\n\t\t<CRLF>)\n\t       (<FSET? ,PRSO ,CONTBIT>\n\t\t<COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t       <TELL \"There is nothing special to be seen.\" CR>)\n\t\t      (<SEE-INSIDE? ,PRSO>\n\t\t       <COND (<AND <FIRST? ,PRSO>\n\t\t\t\t   <PRINT-CONT ,PRSO>>\n\t\t\t      <RTRUE>)\n\t\t\t     %<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t\t     '(<FSET? ,PRSO ,SURFACEBIT>\n\t\t\t\t       <TELL\n\"There is nothing on the \" D ,PRSO \".\" CR>))\n\t\t\t\t    (ELSE '(<NULL-F> <RTRUE>))>\n\t\t\t     (T\n\t\t\t      <TELL \"The \" D ,PRSO \" is empty.\" CR>)>)\n\t\t      (T\n\t\t       <TELL \"The \" D ,PRSO \" is closed.\" CR>)>)\n\t       (T\n\t\t<TELL \"You can't look inside a \" D ,PRSO \".\" CR>)>>"
  },
  "V-LOOK-ON": {
   "name": "V-LOOK-ON",
   "file": "gverbs.zil",
   "line": 892,
   "endLine": 897,
   "source": "<ROUTINE V-LOOK-ON ()\n\t <COND (<FSET? ,PRSO ,SURFACEBIT>\n\t\t<PERFORM ,V?LOOK-INSIDE ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"Look on a \" D ,PRSO \"???\" CR>)>>"
  },
  "V-LOOK-UNDER": {
   "name": "V-LOOK-UNDER",
   "file": "gverbs.zil",
   "line": 899,
   "endLine": 900,
   "source": "<ROUTINE V-LOOK-UNDER ()\n\t <TELL \"There is nothing but dust there.\" CR>>"
  },
  "V-LOWER": {
   "name": "V-LOWER",
   "file": "gverbs.zil",
   "line": 902,
   "endLine": 902,
   "source": "<ROUTINE V-LOWER () <HACK-HACK \"Playing in this way with the \">>"
  },
  "V-MAKE": {
   "name": "V-MAKE",
   "file": "gverbs.zil",
   "line": 904,
   "endLine": 905,
   "source": "<ROUTINE V-MAKE ()\n    \t<TELL \"You can't do that.\" CR>>"
  },
  "V-MELT": {
   "name": "V-MELT",
   "file": "gverbs.zil",
   "line": 907,
   "endLine": 908,
   "source": "<ROUTINE V-MELT ()\n\t <TELL \"It's not clear that a \" D ,PRSO \" can be melted.\" CR>>"
  },
  "PRE-MOVE": {
   "name": "PRE-MOVE",
   "file": "gverbs.zil",
   "line": 910,
   "endLine": 912,
   "source": "<ROUTINE PRE-MOVE ()\n\t <COND (<HELD? ,PRSO>\n\t\t<TELL \"You aren't an accomplished enough juggler.\" CR>)>>"
  },
  "V-MOVE": {
   "name": "V-MOVE",
   "file": "gverbs.zil",
   "line": 914,
   "endLine": 918,
   "source": "<ROUTINE V-MOVE ()\n\t <COND (<FSET? ,PRSO ,TAKEBIT>\n\t\t<TELL \"Moving the \" D ,PRSO \" reveals nothing.\" CR>)\n\t       (T\n\t\t<TELL \"You can't move the \" D ,PRSO \".\" CR>)>>"
  },
  "V-MUMBLE": {
   "name": "V-MUMBLE",
   "file": "gverbs.zil",
   "line": 920,
   "endLine": 921,
   "source": "<ROUTINE V-MUMBLE ()\n\t <TELL \"You'll have to speak up if you expect me to hear you!\" CR>>"
  },
  "PRE-MUNG": {
   "name": "PRE-MUNG",
   "file": "gverbs.zil",
   "line": 923,
   "endLine": 936,
   "source": "<ROUTINE PRE-MUNG ()\n\t <COND %<COND (<==? ,ZORK-NUMBER 3>\n\t\t       '(<EQUAL? ,PRSO ,BEAM>\n\t\t         <RFALSE>))\n\t\t      (T\n\t\t       '(<NULL-F> <RTRUE>))>\n\t       (<OR <NOT ,PRSI>\n\t\t    <NOT <FSET? ,PRSI ,WEAPONBIT>>>\n\t\t<TELL \"Trying to destroy the \" D ,PRSO \" with \">\n\t\t<COND (<NOT ,PRSI>\n\t\t       <TELL \"your bare hands\">)\n\t\t      (T\n\t\t       <TELL \"a \" D ,PRSI>)>\n\t\t<TELL \" is futile.\" CR>)>>"
  },
  "V-MUNG": {
   "name": "V-MUNG",
   "file": "gverbs.zil",
   "line": 938,
   "endLine": 943,
   "source": "<ROUTINE V-MUNG ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<PERFORM ,V?ATTACK ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"Nice try.\" CR>)>>"
  },
  "V-ODYSSEUS": {
   "name": "V-ODYSSEUS",
   "file": "gverbs.zil",
   "line": 945,
   "endLine": 961,
   "source": "<ROUTINE V-ODYSSEUS ()\n\t <COND %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<AND <EQUAL? ,HERE ,CYCLOPS-ROOM>\n\t\t\t      <IN? ,CYCLOPS ,HERE>\n\t\t\t      <NOT ,CYCLOPS-FLAG>>\n\t\t         <DISABLE <INT I-CYCLOPS>>\n\t\t         <SETG CYCLOPS-FLAG T>\n\t\t         <TELL \n\"The cyclops, hearing the name of his father's deadly nemesis, flees the room\nby knocking down the wall on the east of the room.\" CR>\n\t\t        <SETG MAGIC-FLAG T>\n\t\t        <FCLEAR ,CYCLOPS ,FIGHTBIT>\n\t\t        <REMOVE-CAREFULLY ,CYCLOPS>))\n\t\t      (T\n\t\t       '(<NULL-F> T))>\n\t       (T\n\t\t<TELL \"Wasn't he a sailor?\" CR>)>>"
  },
  "V-OIL": {
   "name": "V-OIL",
   "file": "gverbs.zil",
   "line": 963,
   "endLine": 964,
   "source": "<ROUTINE V-OIL ()\n\t <TELL \"You probably put spinach in your gas tank, too.\" CR>>"
  },
  "V-OPEN": {
   "name": "V-OPEN",
   "file": "gverbs.zil",
   "line": 966,
   "endLine": 994,
   "source": "<ROUTINE V-OPEN (\"AUX\" F STR)\n\t <COND (<AND <FSET? ,PRSO ,CONTBIT>\n\t\t     <NOT <EQUAL? <GETP ,PRSO ,P?CAPACITY> 0>>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"It is already open.\" CR>)\n\t\t      (T\n\t\t       <FSET ,PRSO ,OPENBIT>\n\t\t       <FSET ,PRSO ,TOUCHBIT>\n\t\t       <COND (<OR <NOT <FIRST? ,PRSO>> <FSET? ,PRSO ,TRANSBIT>>\n\t\t\t      <TELL \"Opened.\" CR>)\n\t\t\t     (<AND <SET F <FIRST? ,PRSO>>\n\t\t\t\t   <NOT <NEXT? .F>>\n\t\t\t\t   <NOT <FSET? .F ,TOUCHBIT>>\n\t\t\t\t   <SET STR <GETP .F ,P?FDESC>>>\n\t\t\t      <TELL \"The \" D ,PRSO \" opens.\" CR>\n\t\t\t      <TELL .STR CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"Opening the \" D ,PRSO \" reveals \">\n\t\t\t      <PRINT-CONTENTS ,PRSO>\n\t\t\t      <TELL \".\" CR>)>)>)\n\t       (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"It is already open.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The \" D ,PRSO \" opens.\" CR>\n\t\t       <FSET ,PRSO ,OPENBIT>)>)\n\t       (T\n\t\t<TELL\n\"You must tell me how to do that to a \" D ,PRSO \".\" CR>)>>"
  },
  "V-OVERBOARD": {
   "name": "V-OVERBOARD",
   "file": "gverbs.zil",
   "line": 996,
   "endLine": 1009,
   "source": "<ROUTINE V-OVERBOARD (\"AUX\" LOCN)\n\t <COND %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<EQUAL? ,PRSI ,TEETH>\n\t\t\t <COND (<FSET? <SET LOCN <LOC ,WINNER>> ,VEHBIT>\n\t\t\t\t<MOVE ,PRSO <LOC .LOCN>>\n\t\t\t\t<TELL \"Ahoy -- \" D ,PRSO \" overboard!\" CR>)\n\t\t\t       (T\n\t\t\t\t<TELL \"You're not in anything!\" CR>)>))\n\t\t      (T '(<NULL-F> T))>\n\t       (<FSET? <LOC ,WINNER> ,VEHBIT>\n\t\t<PERFORM ,V?THROW ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"Huh?\" CR>)>>"
  },
  "V-PICK": {
   "name": "V-PICK",
   "file": "gverbs.zil",
   "line": 1011,
   "endLine": 1011,
   "source": "<ROUTINE V-PICK () <TELL \"You can't pick that.\" CR>>"
  },
  "V-PLAY": {
   "name": "V-PLAY",
   "file": "gverbs.zil",
   "line": 1013,
   "endLine": 1019,
   "source": "<ROUTINE V-PLAY ()\n    <COND (<FSET? ,PRSO ,ACTORBIT>\n\t   <TELL\n\"You become so engrossed in the role of the \" D ,PRSO \" that\nyou kill yourself, just as he might have done!\" CR>\n\t   <JIGS-UP \"\">)\n\t  (ELSE <TELL \"That's silly!\" CR>)>>"
  },
  "V-PLUG": {
   "name": "V-PLUG",
   "file": "gverbs.zil",
   "line": 1021,
   "endLine": 1022,
   "source": "<ROUTINE V-PLUG ()\n\t <TELL \"This has no effect.\" CR>>"
  },
  "V-POUR-ON": {
   "name": "V-POUR-ON",
   "file": "gverbs.zil",
   "line": 1024,
   "endLine": 1044,
   "source": "<ROUTINE V-POUR-ON ()\n\t <COND (<EQUAL? ,PRSO ,WATER>\n\t\t<REMOVE-CAREFULLY ,PRSO>\n\t        <COND (<FLAMING? ,PRSI>\n\t\t       <TELL \"The \" D ,PRSI \" is extinguished.\" CR>\n\t\t       %<COND (<==? ,ZORK-NUMBER 2>\n\t\t\t       '<COND (<EQUAL? ,PRSI ,BINF-FLAG>\n\t\t\t\t       <SETG BINF-FLAG <>>)>)\n\t\t\t      (ELSE '<NULL-F>)>\n\t\t       <FCLEAR ,PRSI ,ONBIT>\n\t\t       <FCLEAR ,PRSI ,FLAMEBIT>)\n\t              (T\n\t\t       <TELL\n\"The water spills over the \" D ,PRSI \", to the floor, and evaporates.\" CR>)>)\n\t       %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<EQUAL? ,PRSO ,PUTTY>\n\t\t\t <PERFORM ,V?PUT ,PUTTY ,PRSI>))\n\t\t      (T\n\t\t       '(<NULL-F> <RTRUE>))>\n\t       (T\n\t\t<TELL \"You can't pour that.\" CR>)>>"
  },
  "V-PRAY": {
   "name": "V-PRAY",
   "file": "gverbs.zil",
   "line": 1046,
   "endLine": 1054,
   "source": "<ROUTINE V-PRAY ()\n\t <COND %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<EQUAL? ,HERE ,SOUTH-TEMPLE>\n\t\t         <GOTO ,FOREST-1>))\n\t\t      (T\n\t\t       '(<NULL-F> <RTRUE>))>\n\t       (T\n\t\t<TELL\n\"If you pray enough, your prayers may be answered.\" CR>)>>"
  },
  "V-PUMP": {
   "name": "V-PUMP",
   "file": "gverbs.zil",
   "line": 1056,
   "endLine": 1068,
   "source": "<ROUTINE V-PUMP ()\n\t <COND %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<AND ,PRSI <NOT <EQUAL? ,PRSI ,PUMP>>>\n\t\t         <TELL \"Pump it up with a \" D ,PRSI \"?\" CR>))\n\t\t      (T\n\t\t       '(<NULL-F> <RTRUE>))>\n\t       %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<IN? ,PUMP ,WINNER>\n\t\t         <PERFORM ,V?INFLATE ,PRSO ,PUMP>))\n\t\t      (T\n\t\t       '(<NULL-F> <RTRUE>))>\n\t       (T\n\t\t<TELL \"It's really not clear how.\" CR>)>>"
  },
  "V-PUSH": {
   "name": "V-PUSH",
   "file": "gverbs.zil",
   "line": 1070,
   "endLine": 1070,
   "source": "<ROUTINE V-PUSH () <HACK-HACK \"Pushing the \">>"
  },
  "V-PUSH-TO": {
   "name": "V-PUSH-TO",
   "file": "gverbs.zil",
   "line": 1072,
   "endLine": 1073,
   "source": "<ROUTINE V-PUSH-TO ()\n\t <TELL \"You can't push things to that.\" CR>>"
  },
  "PRE-PUT": {
   "name": "PRE-PUT",
   "file": "gverbs.zil",
   "line": 1075,
   "endLine": 1083,
   "source": "<ROUTINE PRE-PUT ()\n\t <COND %<COND (<==? ,ZORK-NUMBER 3>\n\t\t       '(<EQUAL? ,PRSO ,SHORT-POLE>\n\t\t         <RFALSE>))\n\t\t      (T\n\t\t       '(<NULL-F>\n\t\t\t <RFALSE>))>\n\t       (T\n\t\t<PRE-GIVE>)>> ;\"That's easy for you to say...\""
  },
  "V-PUT": {
   "name": "V-PUT",
   "file": "gverbs.zil",
   "line": 1085,
   "endLine": 1114,
   "source": "<ROUTINE V-PUT ()\n\t <COND (<OR <FSET? ,PRSI ,OPENBIT>\n\t\t    <OPENABLE? ,PRSI>\n\t\t    <FSET? ,PRSI ,VEHBIT>>)\n\t       (T\n\t\t<TELL \"You can't do that.\" CR>\n\t\t<RTRUE>)>\n\t <COND (<NOT <FSET? ,PRSI ,OPENBIT>>\n\t\t<TELL \"The \" D ,PRSI \" isn't open.\" CR>\n\t\t<THIS-IS-IT ,PRSI>)\n\t       (<EQUAL? ,PRSI ,PRSO>\n\t\t<TELL \"How can you do that?\" CR>)\n\t       (<IN? ,PRSO ,PRSI>\n\t\t<TELL \"The \" D ,PRSO \" is already in the \" D ,PRSI \".\" CR>)\n\t       (<G? <- <+ <WEIGHT ,PRSI> <WEIGHT ,PRSO>>\n\t\t       <GETP ,PRSI ,P?SIZE>>\n\t\t    <GETP ,PRSI ,P?CAPACITY>>\n\t\t<TELL \"There's no room.\" CR>)\n\t       (<AND <NOT <HELD? ,PRSO>>\n\t\t     <FSET? ,PRSO ,TRYTAKEBIT>>\n\t\t<TELL \"You don't have the \" D ,PRSO \".\" CR>\n\t\t<RTRUE>)\n\t       (<AND <NOT <HELD? ,PRSO>>\n\t\t     <NOT <ITAKE>>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<MOVE ,PRSO ,PRSI>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<SCORE-OBJ ,PRSO>\n\t\t<TELL \"Done.\" CR>)>>"
  },
  "V-PUT-BEHIND": {
   "name": "V-PUT-BEHIND",
   "file": "gverbs.zil",
   "line": 1116,
   "endLine": 1117,
   "source": "<ROUTINE V-PUT-BEHIND ()\n\t <TELL \"That hiding place is too obvious.\" CR>>"
  },
  "V-PUT-ON": {
   "name": "V-PUT-ON",
   "file": "gverbs.zil",
   "line": 1119,
   "endLine": 1126,
   "source": "<ROUTINE V-PUT-ON ()\n\t <COND (<EQUAL? ,PRSI ,GROUND>\n\t\t<PERFORM ,V?DROP ,PRSO>\n\t\t<RTRUE>)\n\t       (<FSET? ,PRSI ,SURFACEBIT>\n\t\t<V-PUT>)\n\t       (T\n\t\t<TELL \"There's no good surface on the \" D ,PRSI \".\" CR>)>>"
  },
  "V-PUT-UNDER": {
   "name": "V-PUT-UNDER",
   "file": "gverbs.zil",
   "line": 1128,
   "endLine": 1129,
   "source": "<ROUTINE V-PUT-UNDER ()\n\t <TELL \"You can't do that.\" CR>>"
  },
  "V-RAISE": {
   "name": "V-RAISE",
   "file": "gverbs.zil",
   "line": 1131,
   "endLine": 1132,
   "source": "<ROUTINE V-RAISE ()\n\t <V-LOWER>>"
  },
  "V-RAPE": {
   "name": "V-RAPE",
   "file": "gverbs.zil",
   "line": 1134,
   "endLine": 1135,
   "source": "<ROUTINE V-RAPE ()\n\t <TELL \"What a (ahem!) strange idea.\" CR>>"
  },
  "PRE-READ": {
   "name": "PRE-READ",
   "file": "gverbs.zil",
   "line": 1137,
   "endLine": 1141,
   "source": "<ROUTINE PRE-READ ()\n\t <COND (<NOT ,LIT>\n\t\t<TELL \"It is impossible to read in the dark.\" CR>)\n\t       (<AND ,PRSI <NOT <FSET? ,PRSI ,TRANSBIT>>>\n\t\t<TELL \"How does one look through a \" D ,PRSI \"?\" CR>)>>"
  },
  "V-READ": {
   "name": "V-READ",
   "file": "gverbs.zil",
   "line": 1143,
   "endLine": 1147,
   "source": "<ROUTINE V-READ ()\n\t <COND (<NOT <FSET? ,PRSO ,READBIT>>\n\t\t<TELL \"How does one read a \" D ,PRSO \"?\" CR>)\n\t       (T\n\t\t<TELL <GETP ,PRSO ,P?TEXT> CR>)>>"
  },
  "V-READ-PAGE": {
   "name": "V-READ-PAGE",
   "file": "gverbs.zil",
   "line": 1149,
   "endLine": 1151,
   "source": "<ROUTINE V-READ-PAGE ()\n\t <PERFORM ,V?READ ,PRSO>\n\t <RTRUE>>"
  },
  "V-REPENT": {
   "name": "V-REPENT",
   "file": "gverbs.zil",
   "line": 1153,
   "endLine": 1154,
   "source": "<ROUTINE V-REPENT ()\n\t <TELL \"It could very well be too late!\" CR>>"
  },
  "V-REPLY": {
   "name": "V-REPLY",
   "file": "gverbs.zil",
   "line": 1156,
   "endLine": 1160,
   "source": "<ROUTINE V-REPLY ()\n\t <TELL \"It is hardly likely that the \" D ,PRSO \" is interested.\" CR>\n\t <SETG P-CONT <>>\n\t <SETG QUOTE-FLAG <>>\n\t <RTRUE>>"
  },
  "V-RING": {
   "name": "V-RING",
   "file": "gverbs.zil",
   "line": 1162,
   "endLine": 1163,
   "source": "<ROUTINE V-RING ()\n\t <TELL \"How, exactly, can you ring that?\" CR>>"
  },
  "V-RUB": {
   "name": "V-RUB",
   "file": "gverbs.zil",
   "line": 1165,
   "endLine": 1165,
   "source": "<ROUTINE V-RUB () <HACK-HACK \"Fiddling with the \">>"
  },
  "V-SAY": {
   "name": "V-SAY",
   "file": "gverbs.zil",
   "line": 1167,
   "endLine": 1195,
   "source": "<ROUTINE V-SAY (\"AUX\" V)\n\t %<COND (<==? ,ZORK-NUMBER 2>\n\t\t '<COND (<OR ,SPELL-USED ,WAND-ON>\n\t\t         <PERFORM ,V?INCANT>\n\t\t         <RTRUE>)>)\n\t\t(<==? ,ZORK-NUMBER 3>\n\t\t '<COND (<AND <FSET? ,FRONT-DOOR ,TOUCHBIT>\n\t\t              <EQUAL? <GET ,P-LEXV ,P-CONT> ,W?FROTZ>\n\t\t              <EQUAL? <GET ,P-LEXV <+ ,P-CONT 2>> ,W?OZMOO>>\n\t\t         <SETG P-CONT <>>\n\t\t         <COND (<EQUAL? ,HERE ,MSTAIRS>\n\t\t                <CRLF>\n\t\t                <GOTO ,FRONT-DOOR>)\n\t\t               (T\n\t\t                <TELL \"Nothing happens.\" CR>)>\n\t\t                <RTRUE>)>)\n\t\t(T\n\t\t '<COND (<NOT ,P-CONT>\n\t\t\t <TELL \"Say what?\" CR>\n\t\t\t <RTRUE>)>)>\n\t <SETG QUOTE-FLAG <>>\n\t <COND (<SET V <FIND-IN ,HERE ,ACTORBIT>>\n\t\t<TELL \"You must address the \" D .V \" directly.\" CR>\n\t\t<SETG P-CONT <>>)\n\t       (<NOT <EQUAL? <GET ,P-LEXV ,P-CONT> ,W?HELLO>>\n\t        <SETG P-CONT <>>\n\t\t<TELL\n\"Talking to yourself is a sign of impending mental collapse.\" CR>)>\n\t <RTRUE>>"
  },
  "V-SEARCH": {
   "name": "V-SEARCH",
   "file": "gverbs.zil",
   "line": 1197,
   "endLine": 1198,
   "source": "<ROUTINE V-SEARCH ()\n\t <TELL \"You find nothing unusual.\" CR>>"
  },
  "V-SEND": {
   "name": "V-SEND",
   "file": "gverbs.zil",
   "line": 1200,
   "endLine": 1204,
   "source": "<ROUTINE V-SEND ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL \"Why would you send for the \" D ,PRSO \"?\" CR>)\n\t       (T\n\t\t<TELL \"That doesn't make sends.\" CR>)>>"
  },
  "PRE-SGIVE": {
   "name": "PRE-SGIVE",
   "file": "gverbs.zil",
   "line": 1206,
   "endLine": 1208,
   "source": "<ROUTINE PRE-SGIVE ()\n\t <PERFORM ,V?GIVE ,PRSI ,PRSO>\n\t <RTRUE>>"
  },
  "V-SGIVE": {
   "name": "V-SGIVE",
   "file": "gverbs.zil",
   "line": 1210,
   "endLine": 1211,
   "source": "<ROUTINE V-SGIVE ()\n\t <TELL \"Foo!\" CR>>"
  },
  "V-SHAKE": {
   "name": "V-SHAKE",
   "file": "gverbs.zil",
   "line": 1213,
   "endLine": 1240,
   "source": "<ROUTINE V-SHAKE ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL \"This seems to have no effect.\" CR>)\n\t       (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t\t<TELL \"You can't take it; thus, you can't shake it!\" CR>)\n\t       (<FSET? ,PRSO ,CONTBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <COND (<FIRST? ,PRSO>\n\t\t\t      <SHAKE-LOOP>\n\t\t\t      <TELL \"The contents of the \" D, PRSO \" spill \">\n\t                      <COND (%<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t\t\t     '<FSET? ,HERE ,NONLANDBIT>)\n\t\t\t\t\t    (ELSE\n\t\t\t\t\t     '<NOT <FSET? ,HERE ,RLANDBIT>>)>\n\t\t                     <TELL \"out and disappears\">)\n\t                            (T\n\t\t                     <TELL \"to the ground\">)>\n\t                      <TELL \".\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"Shaken.\" CR>)>)\n\t\t      (T\n\t\t       <COND (<FIRST? ,PRSO>\n\t\t\t      <TELL\n\"It sounds like there is something inside the \" D ,PRSO \".\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"The \" D, PRSO \" sounds empty.\" CR>)>)>)\n\t       (T\n\t\t<TELL \"Shaken.\" CR>)>>"
  },
  "SHAKE-LOOP": {
   "name": "SHAKE-LOOP",
   "file": "gverbs.zil",
   "line": 1242,
   "endLine": 1267,
   "source": "<ROUTINE SHAKE-LOOP (\"AUX\" X)\n\t <REPEAT ()\n\t\t <COND (<SET X <FIRST? ,PRSO>>\n\t\t\t<FSET .X ,TOUCHBIT>\n\t\t\t<MOVE .X\n\t\t\t      %<COND (<==? ,ZORK-NUMBER 1>\n\t\t\t\t      '<COND (<EQUAL? ,HERE ,UP-A-TREE>\n\t\t\t\t              ,PATH)\n\t\t\t\t             (<NOT <FSET? ,HERE ,RLANDBIT>>\n\t\t\t\t              ,PSEUDO-OBJECT)\n\t\t\t\t             (T\n\t\t\t\t              ,HERE)>)\n\t\t\t\t     (<==? ,ZORK-NUMBER 2>\n\t\t\t\t      '<COND (<EQUAL? .X ,WATER>\n\t\t\t\t              ,PSEUDO-OBJECT)\n\t\t\t\t             (<NOT <FSET? ,HERE ,RLANDBIT>>\n\t\t\t\t              ,PSEUDO-OBJECT)\n\t\t\t\t             (T\n\t\t\t\t              ,HERE)>)\n\t\t\t\t     (T\n\t\t\t\t      '<COND (<EQUAL? ,HERE ,ON-LAKE>\n\t\t\t\t\t      ,IN-LAKE)\n\t\t\t\t\t     (T\n\t\t\t\t\t      ,HERE)>)>>)\n\t\t       (T\n\t\t\t<RETURN>)>>>"
  },
  "V-SKIP": {
   "name": "V-SKIP",
   "file": "gverbs.zil",
   "line": 1269,
   "endLine": 1270,
   "source": "<ROUTINE V-SKIP ()\n\t <TELL <PICK-ONE ,WHEEEEE> CR>>"
  },
  "V-SMELL": {
   "name": "V-SMELL",
   "file": "gverbs.zil",
   "line": 1278,
   "endLine": 1279,
   "source": "<ROUTINE V-SMELL ()\n\t <TELL \"It smells like a \" D ,PRSO \".\" CR>>"
  },
  "V-SPIN": {
   "name": "V-SPIN",
   "file": "gverbs.zil",
   "line": 1281,
   "endLine": 1282,
   "source": "<ROUTINE V-SPIN ()\n\t <TELL \"You can't spin that!\" CR>>"
  },
  "V-SPRAY": {
   "name": "V-SPRAY",
   "file": "gverbs.zil",
   "line": 1284,
   "endLine": 1285,
   "source": "<ROUTINE V-SPRAY ()\n\t <V-SQUEEZE>>"
  },
  "V-SQUEEZE": {
   "name": "V-SQUEEZE",
   "file": "gverbs.zil",
   "line": 1287,
   "endLine": 1292,
   "source": "<ROUTINE V-SQUEEZE ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL \"The \" D ,PRSO \" does not understand this.\">)\n\t       (T\n\t\t<TELL \"How singularly useless.\">)>\n\t <CRLF>>"
  },
  "V-SSPRAY": {
   "name": "V-SSPRAY",
   "file": "gverbs.zil",
   "line": 1294,
   "endLine": 1295,
   "source": "<ROUTINE V-SSPRAY ()\n\t <PERFORM ,V?SPRAY ,PRSI ,PRSO>>"
  },
  "V-STAB": {
   "name": "V-STAB",
   "file": "gverbs.zil",
   "line": 1297,
   "endLine": 1303,
   "source": "<ROUTINE V-STAB (\"AUX\" W)\n\t <COND (<SET W <FIND-WEAPON ,WINNER>>\n\t\t<PERFORM ,V?ATTACK ,PRSO .W>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL\n\"No doubt you propose to stab the \" D ,PRSO \" with your pinky?\" CR>)>>"
  },
  "V-STAND": {
   "name": "V-STAND",
   "file": "gverbs.zil",
   "line": 1305,
   "endLine": 1310,
   "source": "<ROUTINE V-STAND ()\n\t <COND (<FSET? <LOC ,WINNER> ,VEHBIT>\n\t\t<PERFORM ,V?DISEMBARK <LOC ,WINNER>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"You are already standing, I think.\" CR>)>>"
  },
  "V-STAY": {
   "name": "V-STAY",
   "file": "gverbs.zil",
   "line": 1312,
   "endLine": 1313,
   "source": "<ROUTINE V-STAY ()\n\t <TELL \"You will be lost without me!\" CR>>"
  },
  "V-STRIKE": {
   "name": "V-STRIKE",
   "file": "gverbs.zil",
   "line": 1315,
   "endLine": 1322,
   "source": "<ROUTINE V-STRIKE ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL\n\"Since you aren't versed in hand-to-hand combat, you'd better attack the \"\nD ,PRSO \" with a weapon.\" CR>)\n\t       (T\n\t\t<PERFORM ,V?LAMP-ON ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-SWIM": {
   "name": "V-SWIM",
   "file": "gverbs.zil",
   "line": 1324,
   "endLine": 1345,
   "source": "<ROUTINE V-SWIM ()\n\t <COND %<COND (<OR <==? ,ZORK-NUMBER 1>\n\t\t\t   <==? ,ZORK-NUMBER 2>>\n\t\t       '(<GLOBAL-IN? ,GLOBAL-WATER ,HERE>\n\t\t         <TELL \"Swimming isn't usually allowed in the \">\n\t\t         <COND (<NOT <EQUAL? ,PRSO ,WATER ,GLOBAL-WATER>>\n\t                        <TELL D ,PRSO \".\">)\n\t\t               (T\n\t\t                <TELL \"dungeon.\">)>\n\t\t         <CRLF>))\n\t\t      (T\n\t\t       '(<EQUAL? ,HERE ,ON-LAKE ,IN-LAKE>\n\t\t         <TELL \"What do you think you're doing?\" CR>))>\n\t       %<COND (<==? ,ZORK-NUMBER 3>\n\t\t       '(<EQUAL? ,HERE ,FLATHEAD-OCEAN>\n\t\t         <TELL\n\"Between the rocks and waves, you wouldn't last a minute!\" CR>))\n\t\t      (T\n\t\t       '(<NULL-F>\n\t\t\t <RFALSE>))>\n\t       (T\n\t\t<TELL \"Go jump in a lake!\" CR>)>>"
  },
  "V-SWING": {
   "name": "V-SWING",
   "file": "gverbs.zil",
   "line": 1347,
   "endLine": 1351,
   "source": "<ROUTINE V-SWING ()\n\t <COND (<NOT ,PRSI>\n\t\t<TELL \"Whoosh!\" CR>)\n\t       (T\n\t\t<PERFORM ,V?ATTACK ,PRSI ,PRSO>)>>"
  },
  "PRE-TAKE": {
   "name": "PRE-TAKE",
   "file": "gverbs.zil",
   "line": 1353,
   "endLine": 1380,
   "source": "<ROUTINE PRE-TAKE ()\n\t <COND (<IN? ,PRSO ,WINNER>\n\t\t<COND (<FSET? ,PRSO ,WEARBIT>\n\t\t       <TELL \"You are already wearing it.\" CR>)\n\t\t      (T\n\t\t       <TELL \"You already have that!\" CR>)>)\n\t       (<AND <FSET? <LOC ,PRSO> ,CONTBIT>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<TELL\n\"You can't reach something that's inside a closed container.\" CR>\n\t\t<RTRUE>)\n\t       (,PRSI\n\t\t<COND (<EQUAL? ,PRSI ,GROUND>\n\t\t       <SETG PRSI <>>\n\t\t       <RFALSE>)>\n\t\t%<COND (<==? ,ZORK-NUMBER 2>\n\t\t\t'<COND (<EQUAL? ,PRSO ,DOOR-KEEPER>\n\t\t\t\t<SETG PRSI <>>\n\t\t\t\t<RFALSE>)>)\n\t\t       (ELSE\n\t\t\t'<NULL-F>)>\n\t\t<COND (<NOT <EQUAL? ,PRSI <LOC ,PRSO>>>\n\t\t       <TELL \"The \" D ,PRSO \" isn't in the \" D ,PRSI \".\" CR>)\n\t\t      (T\n\t\t       <SETG PRSI <>>\n\t\t       <RFALSE>)>)\n\t       (<EQUAL? ,PRSO <LOC ,WINNER>>\n\t\t<TELL \"You're inside of it!\" CR>)>>"
  },
  "V-TAKE": {
   "name": "V-TAKE",
   "file": "gverbs.zil",
   "line": 1382,
   "endLine": 1387,
   "source": "<ROUTINE V-TAKE ()\n\t <COND (<EQUAL? <ITAKE> T>\n\t\t<COND (<FSET? ,PRSO ,WEARBIT>\n\t\t       <TELL \"You are now wearing the \" D ,PRSO \".\" CR>)\n\t\t      (T\n\t\t       <TELL \"Taken.\" CR>)>)>>"
  },
  "V-TELL": {
   "name": "V-TELL",
   "file": "gverbs.zil",
   "line": 1389,
   "endLine": 1402,
   "source": "<ROUTINE V-TELL ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<COND (,P-CONT\n\t\t       <SETG WINNER ,PRSO>\n\t\t       <SETG HERE <LOC ,WINNER>>)\n\t\t      (T\n\t\t       <TELL \"The \" D ,PRSO\n\" pauses for a moment, perhaps thinking that you should reread\nthe manual.\" CR>)>)\n\t       (T\n\t\t<TELL \"You can't talk to the \" D ,PRSO \"!\" CR>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<SETG P-CONT <>>\n\t\t<RFATAL>)>>"
  },
  "V-THROUGH": {
   "name": "V-THROUGH",
   "file": "gverbs.zil",
   "line": 1404,
   "endLine": 1443,
   "source": "<ROUTINE V-THROUGH (\"OPTIONAL\" (OBJ <>) \"AUX\" M)\n\t#DECL ((OBJ) <OR OBJECT FALSE> (M) <PRIMTYPE VECTOR>)\n\t<COND (<AND <FSET? ,PRSO ,DOORBIT>\n\t\t    <SET M <OTHER-SIDE ,PRSO>>>\n\t       <DO-WALK .M>\n\t       <RTRUE>)\n\t      (<AND <NOT .OBJ> <FSET? ,PRSO ,VEHBIT>>\n\t       <PERFORM ,V?BOARD ,PRSO>\n\t       <RTRUE>)\n\t      (<OR .OBJ <NOT <FSET? ,PRSO ,TAKEBIT>>>\n\t       %<COND (<==? ,ZORK-NUMBER 2>\n\t\t       '<COND (<AND ,SCOL-ROOM\n\t\t\t\t   <OR .OBJ <EQUAL? ,PRSO ,CURTAIN>>>\n\t\t\t      <SCOL-GO .OBJ>\n\t\t\t      <RTRUE>)\n\t\t\t     (<AND <EQUAL? ,HERE ,DEPOSITORY>\n\t\t\t\t   <EQUAL? ,PRSO ,SNWL>\n\t\t\t\t   ,SCOL-ROOM>\n\t\t\t      <SCOL-GO .OBJ>\n\t\t\t      <RTRUE>)\n\t\t\t     (<AND <EQUAL? ,HERE ,SCOL-ACTIVE>\n\t\t\t\t   <EQUAL? ,PRSO \n\t\t\t\t\t   <GET <SET M <GET-WALL ,HERE>> 1>>>\n\t\t\t      <SETG SCOL-ROOM <GET .M 2>>\n\t\t\t      <SETG PRSO <GETP ,PRSO ,P?SIZE>>\n\t\t\t      <COND (.OBJ <SCOL-OBJ .OBJ 0 ,DEPOSITORY>)\n\t\t\t\t    (T\n\t\t\t\t     <SCOL-THROUGH 0 ,DEPOSITORY>)>\n\t\t\t      <RTRUE>)\n\t\t\t     (<EQUAL? ,PRSO ,CURTAIN>\n\t\t\t      <TELL\n\"You can't go more than part way through the curtain.\" CR>\n\t\t\t      <RTRUE>)>)\n\t\t      (ELSE '<NULL-F>)>\n\t       <TELL\n\"You hit your head against the \" D ,PRSO \" as you attempt this feat.\" CR>)\n\t      (<IN? ,PRSO ,WINNER>\n\t       <TELL \"That would involve quite a contortion!\" CR>)\n\t      (T\n\t       <TELL <PICK-ONE ,YUKS> CR>)>>"
  },
  "V-THROW": {
   "name": "V-THROW",
   "file": "gverbs.zil",
   "line": 1445,
   "endLine": 1460,
   "source": "<ROUTINE V-THROW ()\n\t <COND (<IDROP>\n\t\t<COND (<EQUAL? ,PRSI ,ME>\n\t\t       <TELL\n\"A terrific throw! The \" D ,PRSO>\n\t\t       <SETG WINNER ,PLAYER>\n\t\t       <JIGS-UP \" hits you squarely in the head. Normally,\nthis wouldn't do much damage, but by incredible mischance, you fall over\nbackwards trying to duck, and break your neck, justice being swift and\nmerciful in the Great Underground Empire.\">)\n\t\t      (<AND ,PRSI <FSET? ,PRSI ,ACTORBIT>>\n\t\t       <TELL\n\"The \" D ,PRSI \" ducks as the \" D ,PRSO \" flies by and crashes to the ground.\"\nCR>)\n\t\t      (T <TELL \"Thrown.\" CR>)>)\n\t       (ELSE <TELL \"Huh?\" CR>)>>"
  },
  "V-THROW-OFF": {
   "name": "V-THROW-OFF",
   "file": "gverbs.zil",
   "line": 1462,
   "endLine": 1463,
   "source": "<ROUTINE V-THROW-OFF ()\n\t <TELL \"You can't throw anything off of that!\" CR>>"
  },
  "V-TIE": {
   "name": "V-TIE",
   "file": "gverbs.zil",
   "line": 1465,
   "endLine": 1469,
   "source": "<ROUTINE V-TIE ()\n\t <COND (<EQUAL? ,PRSI ,WINNER>\n\t\t<TELL \"You can't tie anything to yourself.\" CR>)\n\t       (T\n\t\t<TELL \"You can't tie the \" D ,PRSO \" to that.\" CR>)>>"
  },
  "V-TIE-UP": {
   "name": "V-TIE-UP",
   "file": "gverbs.zil",
   "line": 1471,
   "endLine": 1472,
   "source": "<ROUTINE V-TIE-UP ()\n\t <TELL \"You could certainly never tie it with that!\" CR>>"
  },
  "V-TREASURE": {
   "name": "V-TREASURE",
   "file": "gverbs.zil",
   "line": 1474,
   "endLine": 1486,
   "source": "<ROUTINE V-TREASURE ()\n\t <COND %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<EQUAL? ,HERE ,NORTH-TEMPLE>\n\t\t         <GOTO ,TREASURE-ROOM>))\n\t\t      (T\n\t\t       '(<NULL-F> <RTRUE>))>\n\t       %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<EQUAL? ,HERE ,TREASURE-ROOM>\n\t\t         <GOTO ,NORTH-TEMPLE>))\n\t\t      (T\n\t\t       '(<NULL-F> <RTRUE>))>\n\t       (T\n\t\t<TELL \"Nothing happens.\" CR>)>>"
  },
  "PRE-TURN": {
   "name": "PRE-TURN",
   "file": "gverbs.zil",
   "line": 1488,
   "endLine": 1503,
   "source": "<ROUTINE PRE-TURN ()\n\t %<COND (<==? ,ZORK-NUMBER 3>\n\t\t '<COND (<AND <EQUAL? ,PRSI <> ,ROOMS>\n\t\t\t      <EQUAL? ,PRSO ,DIAL ,TM-DIAL ,T-BAR>>\n\t\t\t <TELL\n\"You should turn the \" D ,PRSO \" to something.\" CR>\n\t\t\t <RTRUE>)>)\n\t\t(ELSE T)>\n\t <COND (%<COND (<==? ,ZORK-NUMBER 1>\n\t\t\t'<AND <EQUAL? ,PRSI <> ,ROOMS>\n\t\t\t      <NOT <EQUAL? ,PRSO ,BOOK>>>)\n\t\t       (ELSE\n\t\t\t'<EQUAL? ,PRSI <> ,ROOMS>)>\n\t\t<TELL \"Your bare hands don't appear to be enough.\" CR>)\n\t       (<NOT <FSET? ,PRSO ,TURNBIT>>\n\t\t<TELL \"You can't turn that!\" CR>)>>"
  },
  "V-TURN": {
   "name": "V-TURN",
   "file": "gverbs.zil",
   "line": 1505,
   "endLine": 1506,
   "source": "<ROUTINE V-TURN ()\n\t <TELL \"This has no effect.\" CR>>"
  },
  "V-UNLOCK": {
   "name": "V-UNLOCK",
   "file": "gverbs.zil",
   "line": 1508,
   "endLine": 1509,
   "source": "<ROUTINE V-UNLOCK ()\n\t <V-LOCK>>"
  },
  "V-UNTIE": {
   "name": "V-UNTIE",
   "file": "gverbs.zil",
   "line": 1511,
   "endLine": 1512,
   "source": "<ROUTINE V-UNTIE ()\n\t <TELL \"This cannot be tied, so it cannot be untied!\" CR>>"
  },
  "V-WAIT": {
   "name": "V-WAIT",
   "file": "gverbs.zil",
   "line": 1514,
   "endLine": 1519,
   "source": "<ROUTINE V-WAIT (\"OPTIONAL\" (NUM 3))\n\t <TELL \"Time passes...\" CR>\n\t <REPEAT ()\n\t\t <COND (<L? <SET NUM <- .NUM 1>> 0> <RETURN>)\n\t\t       (<CLOCKER> <RETURN>)>>\n\t <SETG CLOCK-WAIT T>>"
  },
  "V-WALK": {
   "name": "V-WALK",
   "file": "gverbs.zil",
   "line": 1521,
   "endLine": 1581,
   "source": "<ROUTINE V-WALK (\"AUX\" PT PTS STR OBJ RM)\n\t <COND (<NOT ,P-WALK-DIR>\n\t\t<PERFORM ,V?WALK-TO ,PRSO>\n\t\t<RTRUE>)\n\t       (<SET PT <GETPT ,HERE ,PRSO>>\n\t\t<COND (<EQUAL? <SET PTS <PTSIZE .PT>> ,UEXIT>\n\t\t       <GOTO <GETB .PT ,REXIT>>)\n\t\t      (<EQUAL? .PTS ,NEXIT>\n\t\t       <TELL <GET .PT ,NEXITSTR> CR>\n\t\t       <RFATAL>)\n\t\t      (<EQUAL? .PTS ,FEXIT>\n\t\t       <COND (<SET RM <APPLY <GET .PT ,FEXITFCN>>>\n\t\t\t      <GOTO .RM>)\n\t\t\t     %<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t\t     '(<AND <EQUAL? ,HERE ,CP> ,CP-MOVED>\n\t\t                       <RTRUE>))\n\t\t\t\t    (T\n\t\t\t\t     '(<NULL-F> <RFALSE>))>\n\t\t\t     (T\n\t\t\t      <RFATAL>)>)\n\t\t      (<EQUAL? .PTS ,CEXIT>\n\t\t       <COND (<VALUE <GETB .PT ,CEXITFLAG>>\n\t\t\t      <GOTO <GETB .PT ,REXIT>>)\n\t\t\t     (<SET STR <GET .PT ,CEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <TELL \"You can't go that way.\" CR>\n\t\t\t      <RFATAL>)>)\n\t\t      (<EQUAL? .PTS ,DEXIT>\n\t\t       <COND (<FSET? <SET OBJ <GETB .PT ,DEXITOBJ>> ,OPENBIT>\n\t\t\t      <GOTO <GETB .PT ,REXIT>>)\n\t\t\t     (<SET STR <GET .PT ,DEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <TELL \"The \" D .OBJ \" is closed.\" CR>\n\t\t\t      <THIS-IS-IT .OBJ>\n\t\t\t      <RFATAL>)>)>)\n\t       (<AND <NOT ,LIT>\n\t\t     <PROB 80>\n\t\t     <EQUAL? ,WINNER ,ADVENTURER>\n\t\t     <NOT <FSET? ,HERE ,NONLANDBIT>>>\n\t\t<COND (,SPRAYED?\n\t\t       <TELL\n\"There are odd noises in the darkness, and there is no exit in that\ndirection.\" CR>\n\t\t       <RFATAL>)\n\t\t      %<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t      '(<EQUAL? ,HERE ,DARK-1 ,DARK-2>\n\t\t                <JIGS-UP\n\"Oh, no! You have walked into a den of hungry grues and it's dinner time!\">))\n\t\t\t     (T\n\t\t\t      '(<NULL-F>\n\t\t\t\t<RFALSE>))>\n\t\t      (T\n\t\t       <JIGS-UP\n\"Oh, no! You have walked into the slavering fangs of a lurking grue!\">)>)\n\t       (T\n\t\t<TELL \"You can't go that way.\" CR>\n\t\t<RFATAL>)>>"
  },
  "V-WALK-AROUND": {
   "name": "V-WALK-AROUND",
   "file": "gverbs.zil",
   "line": 1583,
   "endLine": 1584,
   "source": "<ROUTINE V-WALK-AROUND ()\n\t <TELL \"Use compass directions for movement.\" CR>>"
  },
  "V-WALK-TO": {
   "name": "V-WALK-TO",
   "file": "gverbs.zil",
   "line": 1586,
   "endLine": 1592,
   "source": "<ROUTINE V-WALK-TO ()\n\t <COND (<AND ,PRSO\n\t\t     <OR <IN? ,PRSO ,HERE>\n\t\t\t <GLOBAL-IN? ,PRSO ,HERE>>>\n\t\t<TELL \"It's here!\" CR>)\n\t       (T\n\t\t<TELL \"You should supply a direction!\" CR>)>>"
  },
  "V-WAVE": {
   "name": "V-WAVE",
   "file": "gverbs.zil",
   "line": 1594,
   "endLine": 1595,
   "source": "<ROUTINE V-WAVE ()\n\t <HACK-HACK \"Waving the \">>"
  },
  "V-WEAR": {
   "name": "V-WEAR",
   "file": "gverbs.zil",
   "line": 1597,
   "endLine": 1602,
   "source": "<ROUTINE V-WEAR ()\n\t <COND (<NOT <FSET? ,PRSO ,WEARBIT>>\n\t\t<TELL \"You can't wear the \" D ,PRSO \".\" CR>)\n\t       (T\n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-WIN": {
   "name": "V-WIN",
   "file": "gverbs.zil",
   "line": 1604,
   "endLine": 1605,
   "source": "<ROUTINE V-WIN ()\n\t <TELL \"Naturally!\" CR>>"
  },
  "V-WIND": {
   "name": "V-WIND",
   "file": "gverbs.zil",
   "line": 1607,
   "endLine": 1608,
   "source": "<ROUTINE V-WIND ()\n\t <TELL \"You cannot wind up a \" D ,PRSO \".\" CR>>"
  },
  "V-WISH": {
   "name": "V-WISH",
   "file": "gverbs.zil",
   "line": 1610,
   "endLine": 1614,
   "source": "<ROUTINE V-WISH ()\n\t %<COND (<==? ,ZORK-NUMBER 2>\n\t\t '<PERFORM ,V?MAKE ,WISH>)\n\t\t(T\n\t\t '<TELL \"With luck, your wish will come true.\" CR>)>>"
  },
  "V-YELL": {
   "name": "V-YELL",
   "file": "gverbs.zil",
   "line": 1616,
   "endLine": 1616,
   "source": "<ROUTINE V-YELL () <TELL \"Aaaarrrrgggghhhh!\" CR>>"
  },
  "V-ZORK": {
   "name": "V-ZORK",
   "file": "gverbs.zil",
   "line": 1618,
   "endLine": 1618,
   "source": "<ROUTINE V-ZORK () <TELL \"At your service!\" CR>>"
  },
  "V-FIRST-LOOK": {
   "name": "V-FIRST-LOOK",
   "file": "gverbs.zil",
   "line": 1630,
   "endLine": 1633,
   "source": "<ROUTINE V-FIRST-LOOK ()\n\t <COND (<DESCRIBE-ROOM>\n\t\t<COND (<NOT ,SUPER-BRIEF>\n\t\t       <DESCRIBE-OBJECTS>)>)>>"
  },
  "DESCRIBE-ROOM": {
   "name": "DESCRIBE-ROOM",
   "file": "gverbs.zil",
   "line": 1635,
   "endLine": 1679,
   "source": "<ROUTINE DESCRIBE-ROOM (\"OPTIONAL\" (LOOK? <>) \"AUX\" V? STR AV)\n\t <SET V? <OR .LOOK? ,VERBOSE>>\n\t <COND (<NOT ,LIT>\n\t\t<TELL \"It is pitch black.\">\n\t\t<COND (<NOT ,SPRAYED?>\n\t\t       <TELL \" You are likely to be eaten by a grue.\">)>\n\t\t<CRLF>\n\t\t%<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t'<COND (<EQUAL? ,HERE ,DARK-2>\n\t\t                <TELL\n\"The ground continues to slope upwards away from the lake. You can barely\ndetect a dim light from the east.\" CR>)>)\n\t\t       (T\n\t\t\t'<NULL-F>)>\n\t\t<RFALSE>)>\n\t <COND (<NOT <FSET? ,HERE ,TOUCHBIT>>\n\t\t<FSET ,HERE ,TOUCHBIT>\n\t\t<SET V? T>)>\n\t %<COND (<==? ,ZORK-NUMBER 1>\n\t\t '<COND (<FSET? ,HERE ,MAZEBIT>\n\t\t         <FCLEAR ,HERE ,TOUCHBIT>)>)\n\t\t(T\n\t\t '<NULL-F>)>\n\t <COND (<IN? ,HERE ,ROOMS>\n\t\t;\"Was <TELL D ,HERE CR>\"\n\t\t<TELL D ,HERE>\n\t\t<COND (<FSET? <SET AV <LOC ,WINNER>> ,VEHBIT>\n\t\t       <TELL \", in the \" D .AV>)>\n\t\t<CRLF>)>\n\t <COND (%<COND (<==? ,ZORK-NUMBER 2>\n\t\t\t'<OR .LOOK? <NOT ,SUPER-BRIEF> <EQUAL? ,HERE ,ZORK3>>)\n\t\t       (ELSE\n\t\t\t'<OR .LOOK? <NOT ,SUPER-BRIEF>>)>\n\t\t<SET AV <LOC ,WINNER>>\n\t\t;<COND (<FSET? .AV ,VEHBIT>\n\t\t       <TELL \"(You are in the \" D .AV \".)\" CR>)>\n\t\t<COND (<AND .V? <APPLY <GETP ,HERE ,P?ACTION> ,M-LOOK>>\n\t\t       <RTRUE>)\n\t\t      (<AND .V? <SET STR <GETP ,HERE ,P?LDESC>>>\n\t\t       <TELL .STR CR>)\n\t\t      (T\n\t\t       <APPLY <GETP ,HERE ,P?ACTION> ,M-FLASH>)>\n\t\t<COND (<AND <NOT <EQUAL? ,HERE .AV>> <FSET? .AV ,VEHBIT>>\n\t\t       <APPLY <GETP .AV ,P?ACTION> ,M-LOOK>)>)>\n\t T>"
  },
  "DESCRIBE-OBJECTS": {
   "name": "DESCRIBE-OBJECTS",
   "file": "gverbs.zil",
   "line": 1681,
   "endLine": 1686,
   "source": "<ROUTINE DESCRIBE-OBJECTS (\"OPTIONAL\" (V? <>))\n\t <COND (,LIT\n\t\t<COND (<FIRST? ,HERE>\n\t\t       <PRINT-CONT ,HERE <SET V? <OR .V? ,VERBOSE>> -1>)>)\n\t       (T\n\t\t<TELL \"Only bats can see in the dark. And you're not one.\" CR>)>>"
  },
  "DESCRIBE-OBJECT": {
   "name": "DESCRIBE-OBJECT",
   "file": "gverbs.zil",
   "line": 1693,
   "endLine": 1728,
   "source": "<ROUTINE DESCRIBE-OBJECT (OBJ V? LEVEL \"AUX\" (STR <>) AV)\n\t <SETG DESC-OBJECT .OBJ>\n\t <COND (<AND <0? .LEVEL>\n\t\t     <APPLY <GETP .OBJ ,P?DESCFCN> ,M-OBJDESC>>\n\t\t<RTRUE>)\n\t       (<AND <0? .LEVEL>\n\t\t     <OR <AND <NOT <FSET? .OBJ ,TOUCHBIT>>\n\t\t\t      <SET STR <GETP .OBJ ,P?FDESC>>>\n\t\t\t <SET STR <GETP .OBJ ,P?LDESC>>>>\n\t\t<TELL .STR>)\n\t       (<0? .LEVEL>\n\t\t<TELL \"There is a \" D .OBJ \" here\">\n\t\t<COND (<FSET? .OBJ ,ONBIT>\n\t\t       <TELL \" (providing light)\">)>\n\t\t<TELL \".\">)\n\t       (T\n\t\t<TELL <GET ,INDENTS .LEVEL>>\n\t\t<TELL \"A \" D .OBJ>\n\t\t<COND (<FSET? .OBJ ,ONBIT>\n\t\t       <TELL \" (providing light)\">)\n\t\t      (<AND <FSET? .OBJ ,WEARBIT>\n\t\t\t    <IN? .OBJ ,WINNER>>\n\t\t       <TELL \" (being worn)\">)>)>\n\t %<COND (<==? ,ZORK-NUMBER 2>\n\t\t '<COND (<AND <EQUAL? .OBJ ,SPELL-VICTIM>\n\t\t              <EQUAL? ,SPELL-USED ,W?FLOAT>>\n\t\t         <TELL \" (floating in midair)\">)>)\n\t\t(T\n\t\t '<NULL-F>)>\n\t <COND (<AND <0? .LEVEL>\n\t\t     <SET AV <LOC ,WINNER>>\n\t\t     <FSET? .AV ,VEHBIT>>\n\t\t<TELL \" (outside the \" D .AV \")\">)>\n\t <CRLF>\n\t <COND (<AND <SEE-INSIDE? .OBJ> <FIRST? .OBJ>>\n\t\t<PRINT-CONT .OBJ .V? .LEVEL>)>>"
  },
  "PRINT-CONTENTS": {
   "name": "PRINT-CONTENTS",
   "file": "gverbs.zil",
   "line": 1730,
   "endLine": 1748,
   "source": "<ROUTINE PRINT-CONTENTS (OBJ \"AUX\" F N (1ST? T) (IT? <>) (TWO? <>))\n\t <COND (<SET F <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<SET N <NEXT? .F>>\n\t\t\t<COND (.1ST? <SET 1ST? <>>)\n\t\t\t      (ELSE\n\t\t\t       <TELL \", \">\n\t\t\t       <COND (<NOT .N> <TELL \"and \">)>)>\n\t\t\t<TELL \"a \" D .F>\n\t\t\t<COND (<AND <NOT .IT?> <NOT .TWO?>>\n\t\t\t       <SET IT? .F>)\n\t\t\t      (ELSE\n\t\t\t       <SET TWO? T>\n\t\t\t       <SET IT? <>>)>\n\t\t\t<SET F .N>\n\t\t\t<COND (<NOT .F>\n\t\t\t       <COND (<AND .IT? <NOT .TWO?>>\n\t\t\t\t      <THIS-IS-IT .IT?>)>\n\t\t\t       <RTRUE>)>>)>>"
  },
  "PRINT-CONT": {
   "name": "PRINT-CONT",
   "file": "gverbs.zil",
   "line": 1750,
   "endLine": 1816,
   "source": "<ROUTINE PRINT-CONT (OBJ \"OPTIONAL\" (V? <>) (LEVEL 0)\n\t\t     \"AUX\" Y 1ST? SHIT AV STR (PV? <>) (INV? <>))\n\t <COND (<NOT <SET Y <FIRST? .OBJ>>> <RTRUE>)>\n\t <COND (<AND <SET AV <LOC ,WINNER>> <FSET? .AV ,VEHBIT>>\n\t\tT)\n\t       (ELSE <SET AV <>>)>\n\t <SET 1ST? T>\n\t <SET SHIT T>\n\t <COND (<EQUAL? ,WINNER .OBJ <LOC .OBJ>>\n\t\t<SET INV? T>)\n\t       (ELSE\n\t\t<REPEAT ()\n\t\t\t<COND %<COND (<==? ,ZORK-NUMBER 2>\n\t\t\t\t      '(<NOT .Y>\n\t\t\t\t\t<COND (<AND <0? .LEVEL>\n\t\t\t\t\t\t    <==? ,SPELL? ,S-FANTASIZE>\n\t\t\t\t\t\t    <PROB 20>>\n\t\t\t\t\t       <TELL \"There is a \"\n\t\t\t\t\t\t     <PICK-ONE ,FANTASIES>\n\t\t\t\t\t\t     \" here.\" CR>\n\t\t\t\t\t       <SET 1ST? <>>)>\n\t\t\t\t\t<RETURN>))\n\t\t\t\t     (ELSE\n\t\t\t\t      '(<NOT .Y>\n\t\t\t\t\t<RETURN>))>\n\t\t\t      (<EQUAL? .Y .AV> <SET PV? T>)\n\t\t\t      (<EQUAL? .Y ,WINNER>)\n\t\t\t      (<AND <NOT <FSET? .Y ,INVISIBLE>>\n\t\t\t\t    <NOT <FSET? .Y ,TOUCHBIT>>\n\t\t\t\t    <SET STR <GETP .Y ,P?FDESC>>>\n\t\t\t       <COND (<NOT <FSET? .Y ,NDESCBIT>>\n\t\t\t\t      <TELL .STR CR>\n\t\t\t\t      <SET SHIT <>>\n\t\t\t\t      ;<SET 1ST? <>>)>\n\t\t\t       <COND (<AND <SEE-INSIDE? .Y>\n\t\t\t\t\t   <NOT <GETP <LOC .Y> ,P?DESCFCN>>\n\t\t\t\t\t   <FIRST? .Y>>\n\t\t\t\t      <COND (<PRINT-CONT .Y .V? 0>\n\t\t\t\t\t     <SET 1ST? <>>)>)>)>\n\t\t\t<SET Y <NEXT? .Y>>>)>\n\t <SET Y <FIRST? .OBJ>>\n\t <REPEAT ()\n\t\t <COND (<NOT .Y>\n\t\t\t<COND (<AND .PV? .AV <FIRST? .AV>>\n\t\t\t       <SET LEVEL <+ .LEVEL 1>> ;\"not in Zork III\"\n\t\t\t       <PRINT-CONT .AV .V? .LEVEL>)>\n\t\t\t<RETURN>)\n\t\t       (<EQUAL? .Y .AV ,ADVENTURER>)\n\t\t       (<AND <NOT <FSET? .Y ,INVISIBLE>>\n\t\t\t     <OR .INV?\n\t\t\t\t <FSET? .Y ,TOUCHBIT>\n\t\t\t\t <NOT <GETP .Y ,P?FDESC>>>>\n\t\t\t<COND (<NOT <FSET? .Y ,NDESCBIT>>\n\t\t\t       <COND (.1ST?\n\t\t\t\t      <COND (<FIRSTER .OBJ .LEVEL>\n\t\t\t\t\t     <COND (<L? .LEVEL 0>\n\t\t\t\t\t\t    <SET LEVEL 0>)>)>\n\t\t\t\t      <SET LEVEL <+ 1 .LEVEL>>\n\t\t\t\t      <SET 1ST? <>>)>\n\t\t\t       <COND (<L? .LEVEL 0> <SET LEVEL 0>)>\n\t\t\t       <DESCRIBE-OBJECT .Y .V? .LEVEL>)\n\t\t\t      (<AND <FIRST? .Y> <SEE-INSIDE? .Y>>\n\t\t\t       <SET LEVEL <+ .LEVEL 1>> ;\"not in Zork III\"\n\t\t\t       <PRINT-CONT .Y .V? .LEVEL>\n\t\t\t       <SET LEVEL <- .LEVEL 1>> ;\"not in Zork III\")>)>\n\t\t <SET Y <NEXT? .Y>>>\n\t <COND (<AND .1ST? .SHIT> <RFALSE>) (T <RTRUE>)>>"
  },
  "FIRSTER": {
   "name": "FIRSTER",
   "file": "gverbs.zil",
   "line": 1818,
   "endLine": 1835,
   "source": "<ROUTINE FIRSTER (OBJ LEVEL)\n\t <COND %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<EQUAL? .OBJ ,TROPHY-CASE>\n\t\t         <TELL\n\"Your collection of treasures consists of:\" CR>))\n\t\t      (T\n\t\t       '(<NULL-F> <RTRUE>))>\n\t       (<EQUAL? .OBJ ,WINNER>\n\t\t<TELL \"You are carrying:\" CR>)\n\t       (<NOT <IN? .OBJ ,ROOMS>>\n\t\t<COND (<G? .LEVEL 0>\n\t\t       <TELL <GET ,INDENTS .LEVEL>>)>\n\t\t<COND (<FSET? .OBJ ,SURFACEBIT>\n\t\t       <TELL \"Sitting on the \" D .OBJ \" is: \" CR>)\n\t\t      (<FSET? .OBJ ,ACTORBIT>\n\t\t       <TELL \"The \" D .OBJ \" is holding: \" CR>)\n\t\t      (T\n\t\t       <TELL \"The \" D .OBJ \" contains:\" CR>)>)>>"
  },
  "SEE-INSIDE?": {
   "name": "SEE-INSIDE?",
   "file": "gverbs.zil",
   "line": 1837,
   "endLine": 1839,
   "source": "<ROUTINE SEE-INSIDE? (OBJ)\n\t <AND <NOT <FSET? .OBJ ,INVISIBLE>>\n\t      <OR <FSET? .OBJ ,TRANSBIT> <FSET? .OBJ ,OPENBIT>>>>"
  },
  "SCORE-UPD": {
   "name": "SCORE-UPD",
   "file": "gverbs.zil",
   "line": 1851,
   "endLine": 1865,
   "source": "<ROUTINE SCORE-UPD (NUM)\n\t <SETG BASE-SCORE <+ ,BASE-SCORE .NUM>>\n\t <SETG SCORE <+ ,SCORE .NUM>>\n\t %<COND (<==? ,ZORK-NUMBER 1>\n\t\t '<COND (<AND <EQUAL? ,SCORE 350>\n\t\t              <NOT ,WON-FLAG>>\n\t\t         <SETG WON-FLAG T>\n\t\t         <FCLEAR ,MAP ,INVISIBLE>\n\t\t         <FCLEAR ,WEST-OF-HOUSE ,TOUCHBIT>\n\t\t         <TELL\n\"An almost inaudible voice whispers in your ear, \\\"Look to your treasures\nfor the final secret.\\\"\" CR>)>)\n\t\t(T\n\t\t '<NULL-F>)>\n\t T>"
  },
  "SCORE-OBJ": {
   "name": "SCORE-OBJ",
   "file": "gverbs.zil",
   "line": 1867,
   "endLine": 1870,
   "source": "<ROUTINE SCORE-OBJ (OBJ \"AUX\" TEMP)\n\t <COND (<G? <SET TEMP <GETP .OBJ ,P?VALUE>> 0>\n\t\t<SCORE-UPD .TEMP>\n\t\t<PUTP .OBJ ,P?VALUE 0>)>>"
  },
  "YES?": {
   "name": "YES?",
   "file": "gverbs.zil",
   "line": 1872,
   "endLine": 1878,
   "source": "<ROUTINE YES? ()\n\t <PRINTI \">\">\n\t <READ ,P-INBUF ,P-LEXV>\n\t <COND (<EQUAL? <GET ,P-LEXV 1> ,W?YES ,W?Y>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "ITAKE": {
   "name": "ITAKE",
   "file": "gverbs.zil",
   "line": 1900,
   "endLine": 1964,
   "source": "<ROUTINE ITAKE (\"OPTIONAL\" (VB T) \"AUX\" CNT OBJ)\n\t #DECL ((VB) <OR ATOM FALSE> (CNT) FIX (OBJ) OBJECT)\n\t <COND %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(,DEAD\n\t\t         <COND (.VB\n\t\t\t\t<TELL\n\"Your hand passes through its object.\" CR>)>\n\t\t         <RFALSE>))\n\t\t      (T\n\t\t       '(<NULL-F>\n\t\t\t <RFALSE>))>\n\t       (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t\t<COND (.VB\n\t\t       <TELL <PICK-ONE ,YUKS> CR>)>\n\t\t<RFALSE>)\n\t       %<COND (<==? ,ZORK-NUMBER 2>\n\t\t       '(<AND <EQUAL? ,PRSO ,SPELL-VICTIM>\n\t\t              <EQUAL? ,SPELL-USED ,W?FLOAT ,W?FREEZE>>\n\t\t         <COND (<EQUAL? ,SPELL-USED ,W?FLOAT>\n\t\t                <TELL\n\"You can't reach that. It's floating above your head.\" CR>)\n\t\t               (T\n\t\t                <TELL \"It seems rooted to the spot.\" CR>)>\n\t\t         <RFALSE>))\n\t\t      (T\n\t\t       '(<NULL-F>\n\t\t\t <RFALSE>))>\n\t       (<AND <FSET? <LOC ,PRSO> ,CONTBIT>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t;\"Kludge for parser calling itake\"\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? <LOC ,PRSO> ,WINNER>>\n\t\t     <G? <+ <WEIGHT ,PRSO> <WEIGHT ,WINNER>> ,LOAD-ALLOWED>>\n\t\t<COND (.VB\n\t\t       <TELL \"Your load is too heavy\">\n\t\t       <COND (<L? ,LOAD-ALLOWED ,LOAD-MAX>\n\t\t\t      <TELL\", especially in light of your condition.\">)\n\t\t\t     (T\n\t\t\t      <TELL \".\">)>\n\t\t       <CRLF>)>\n\t\t<RFATAL>)\n\t       (<AND <VERB? TAKE>\n\t\t     <G? <SET CNT <CCOUNT ,WINNER>> ,FUMBLE-NUMBER>\n\t\t     <PROB <* .CNT ,FUMBLE-PROB>>>\n\t\t<TELL\n\"You're holding too many things already!\" CR>\n\t\t<RFALSE>)\n\t       (T\n\t\t<MOVE ,PRSO ,WINNER>\n\t\t<FCLEAR ,PRSO ,NDESCBIT>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t%<COND (<==? ,ZORK-NUMBER 2>\n\t\t\t'<COND (<EQUAL? ,SPELL? ,S-FILCH>\n\t\t                <COND (<RIPOFF ,PRSO ,WIZARD-CASE>\n\t\t\t               <TELL\n\"When you touch the \" D ,PRSO \" it immediately disappears!\" CR>\n\t\t\t               <RFALSE>)>)>)\n\t\t       (T\n\t\t\t'<NULL-F>)>\n\t\t%<COND (<OR <==? ,ZORK-NUMBER 1>\n\t\t\t    <==? ,ZORK-NUMBER 2>>\n\t\t\t'<SCORE-OBJ ,PRSO>)\n\t\t       (T\n\t\t\t'<NULL-F>)>\n\t\t<RTRUE>)>>"
  },
  "IDROP": {
   "name": "IDROP",
   "file": "gverbs.zil",
   "line": 1966,
   "endLine": 1977,
   "source": "<ROUTINE IDROP ()\n\t <COND (<AND <NOT <IN? ,PRSO ,WINNER>>\n\t\t     <NOT <IN? <LOC ,PRSO> ,WINNER>>>\n\t\t<TELL \"You're not carrying the \" D ,PRSO \".\" CR>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? ,PRSO ,WINNER>>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<TELL \"The \" D ,PRSO \" is closed.\" CR>\n\t\t<RFALSE>)\n\t       (T\n\t\t<MOVE ,PRSO <LOC ,WINNER>>\n\t\t<RTRUE>)>>"
  },
  "CCOUNT": {
   "name": "CCOUNT",
   "file": "gverbs.zil",
   "line": 1979,
   "endLine": 1986,
   "source": "<ROUTINE CCOUNT (OBJ \"AUX\" (CNT 0) X)\n\t <COND (<SET X <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT <FSET? .X ,WEARBIT>>\n\t\t\t       <SET CNT <+ .CNT 1>>)>\n\t\t\t<COND (<NOT <SET X <NEXT? .X>>>\n\t\t\t       <RETURN>)>>)>\n\t .CNT>"
  },
  "WEIGHT": {
   "name": "WEIGHT",
   "file": "gverbs.zil",
   "line": 1988,
   "endLine": 1997,
   "source": "<ROUTINE WEIGHT (OBJ \"AUX\" CONT (WT 0))\n\t <COND (<SET CONT <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<COND (<AND <EQUAL? .OBJ ,PLAYER>\n\t\t\t\t    <FSET? .CONT ,WEARBIT>>\n\t\t\t       <SET WT <+ .WT 1>>)\n\t\t\t      (T\n\t\t\t       <SET WT <+ .WT <WEIGHT .CONT>>>)>\n\t\t\t<COND (<NOT <SET CONT <NEXT? .CONT>>> <RETURN>)>>)>\n\t <+ .WT <GETP .OBJ ,P?SIZE>>>"
  },
  "HACK-HACK": {
   "name": "HACK-HACK",
   "file": "gverbs.zil",
   "line": 2024,
   "endLine": 2029,
   "source": "<ROUTINE HACK-HACK (STR)\n\t <COND (<AND <IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t     <VERB? WAVE RAISE LOWER>>\n\t\t<TELL \"The \" D ,PRSO \" isn't here!\" CR>)\n\t       (T\n\t\t<TELL .STR D ,PRSO <PICK-ONE ,HO-HUM> CR>)>>"
  },
  "NO-GO-TELL": {
   "name": "NO-GO-TELL",
   "file": "gverbs.zil",
   "line": 2038,
   "endLine": 2043,
   "source": "<ROUTINE NO-GO-TELL (AV WLOC)\n\t <COND (.AV\n\t\t<TELL \"You can't go there in a \" D .WLOC \".\">)\n\t       (T\n\t\t<TELL \"You can't go there without a vehicle.\">)>\n\t <CRLF>>"
  },
  "GOTO": {
   "name": "GOTO",
   "file": "gverbs.zil",
   "line": 2045,
   "endLine": 2137,
   "source": "<ROUTINE GOTO (RM \"OPTIONAL\" (V? T)\n\t       \"AUX\" (LB <FSET? .RM ,RLANDBIT>) (WLOC <LOC ,WINNER>)\n\t             (AV <>) OLIT OHERE)\n\t <SET OLIT ,LIT>\n\t <SET OHERE ,HERE>\n\t <COND (<FSET? .WLOC ,VEHBIT>\n\t\t<SET AV <GETP .WLOC ,P?VTYPE>>)>\n\t <COND (<AND <NOT .LB>\n\t\t     <NOT .AV>>\n\t\t<NO-GO-TELL .AV .WLOC>\n\t\t<RFALSE>)\n\t       (<AND <NOT .LB>\n\t\t     <NOT <FSET? .RM .AV>>>\n\t\t<NO-GO-TELL .AV .WLOC>\n\t\t<RFALSE>)\n\t       (<AND <FSET? ,HERE ,RLANDBIT>\n\t\t     .LB\n\t\t     .AV\n\t\t     <NOT <EQUAL? .AV ,RLANDBIT>>\n\t\t     <NOT <FSET? .RM .AV>>>\n\t\t<NO-GO-TELL .AV .WLOC>\n\t\t<RFALSE>)\n\t       (<FSET? .RM ,RMUNGBIT>\n\t\t<TELL <GETP .RM ,P?LDESC> CR>\n\t\t<RFALSE>)\n\t       (T\n\t\t<COND (<AND .LB\n\t\t\t    <NOT <FSET? ,HERE ,RLANDBIT>>\n\t\t\t    <NOT ,DEAD>\n\t\t\t    <FSET? .WLOC ,VEHBIT>>\n\t\t       %<COND (<==? ,ZORK-NUMBER 1>\n\t\t\t       '<TELL\n\"The \" D .WLOC \" comes to a rest on the shore.\" CR CR>)\n\t\t\t      (<==? ,ZORK-NUMBER 2>\n\t\t\t       '<COND (<EQUAL? .WLOC ,BALLOON>\n\t\t\t\t       <TELL\n\"The balloon lands.\" CR>)\n\t\t\t\t      (<FSET? .WLOC ,VEHBIT>\n\t\t\t\t       <TELL\n\"The \" D .WLOC \" comes to a stop.\" CR CR>)>)\n\t\t\t      (<==? ,ZORK-NUMBER 3>\n\t\t\t       '<COND (<FSET? .WLOC ,VEHBIT>\n\t\t\t\t       <TELL\n\"The \" D .WLOC \" comes to a stop.\" CR CR>)>)>)>\n\t\t<COND (.AV\n\t\t       <MOVE .WLOC .RM>)\n\t\t      (T\n\t\t       <MOVE ,WINNER .RM>)>\n\t\t<SETG HERE .RM>\n\t\t<SETG LIT <LIT? ,HERE>>\n\t\t<COND (<AND <NOT .OLIT>\n\t\t\t    <NOT ,LIT>\n\t\t\t    <PROB 80>>\n\t\t       <COND (,SPRAYED?\n\t\t\t      <TELL\n\"There are sinister gurgling noises in the darkness all around you!\" CR>)\n\t\t\t     %<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t\t     '(<EQUAL? ,HERE ,DARK-1 ,DARK-2>\n\t\t                       <JIGS-UP\n\"Oh, no! Dozen of lurking grues attack and devour you! You must have\nstumbled into an authentic grue lair!\">))\n\t\t\t\t    (T\n\t\t\t\t     '(<NULL-F>\n\t\t\t\t       <RFALSE>))>\n\t\t\t     (T\n\t\t\t      <TELL\n\"Oh, no! A lurking grue slithered into the \">\n\t\t\t      <COND (<FSET? <LOC ,WINNER> ,VEHBIT>\n\t\t\t\t     <TELL D <LOC ,WINNER>>)\n\t\t\t\t    (T <TELL \"room\">)>\n\t\t\t      <JIGS-UP \" and devoured you!\">\n\t\t\t      <RTRUE>)>)>\n\t\t<COND (<AND <NOT ,LIT>\n\t\t\t    <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t       <TELL \"You have moved into a dark place.\" CR>\n\t\t       <SETG P-CONT <>>)>\n\t\t<APPLY <GETP ,HERE ,P?ACTION> ,M-ENTER>\n\t\t<SCORE-OBJ .RM>\n\t\t<COND (<NOT <EQUAL? ,HERE .RM>> <RTRUE>)\n\t\t      (<AND <NOT <EQUAL? ,ADVENTURER ,WINNER>>\n\t\t\t    <IN? ,ADVENTURER .OHERE>>\n\t\t       <TELL \"The \" D ,WINNER \" leaves the room.\" CR>)\n\t\t      %<COND (<==? ,ZORK-NUMBER 1>\n\t\t\t      '(<AND <EQUAL? ,HERE .OHERE>\n\t\t\t\t      ;\"no double description\"\n\t\t\t\t     <EQUAL? ,HERE ,ENTRANCE-TO-HADES>>\n\t\t\t\t<RTRUE>))\n\t\t\t     (ELSE\n\t\t\t      '(<NULL-F> <RTRUE>))>\n\t\t      (<AND .V?\n\t\t\t    <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t       <V-FIRST-LOOK>)>\n\t\t<RTRUE>)>>"
  },
  "LKP": {
   "name": "LKP",
   "file": "gverbs.zil",
   "line": 2139,
   "endLine": 2146,
   "source": "<ROUTINE LKP (ITM TBL \"AUX\" (CNT 0) (LEN <GET .TBL 0>))\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> .LEN>\n\t\t\t<RFALSE>)\n\t\t       (<EQUAL? <GET .TBL .CNT> .ITM>\n\t\t\t<COND (<EQUAL? .CNT .LEN> <RFALSE>)\n\t\t\t      (T\n\t\t\t       <RETURN <GET .TBL <+ .CNT 1>>>)>)>>>"
  },
  "DO-WALK": {
   "name": "DO-WALK",
   "file": "gverbs.zil",
   "line": 2148,
   "endLine": 2150,
   "source": "<ROUTINE DO-WALK (DIR)\n\t <SETG P-WALK-DIR .DIR>\n\t <PERFORM ,V?WALK .DIR>>"
  },
  "GLOBAL-IN?": {
   "name": "GLOBAL-IN?",
   "file": "gverbs.zil",
   "line": 2152,
   "endLine": 2154,
   "source": "<ROUTINE GLOBAL-IN? (OBJ1 OBJ2 \"AUX\" TX)\n\t <COND (<SET TX <GETPT .OBJ2 ,P?GLOBAL>>\n\t\t<ZMEMQB .OBJ1 .TX <- <PTSIZE .TX> 1>>)>> "
  },
  "FIND-IN": {
   "name": "FIND-IN",
   "file": "gverbs.zil",
   "line": 2156,
   "endLine": 2165,
   "source": "<ROUTINE FIND-IN (WHERE WHAT \"AUX\" W)\n\t <SET W <FIRST? .WHERE>>\n\t <COND (<NOT .W>\n\t\t<RFALSE>)>\n\t <REPEAT ()\n\t\t <COND (<AND <FSET? .W .WHAT>\n\t\t\t     <NOT <EQUAL? .W ,ADVENTURER>>>\n\t\t\t<RETURN .W>)\n\t\t       (<NOT <SET W <NEXT? .W>>>\n\t\t\t<RETURN <>>)>>>"
  },
  "HELD?": {
   "name": "HELD?",
   "file": "gverbs.zil",
   "line": 2167,
   "endLine": 2171,
   "source": "<ROUTINE HELD? (CAN)\n\t <REPEAT ()\n\t\t <SET CAN <LOC .CAN>>\n\t\t <COND (<NOT .CAN> <RFALSE>)\n\t\t       (<EQUAL? .CAN ,WINNER> <RTRUE>)>>>"
  },
  "OTHER-SIDE": {
   "name": "OTHER-SIDE",
   "file": "gverbs.zil",
   "line": 2173,
   "endLine": 2181,
   "source": "<ROUTINE OTHER-SIDE (DOBJ \"AUX\" (P 0) TX) ;\"finds room beyond given door\"\n\t <REPEAT ()\n\t\t <COND (<L? <SET P <NEXTP ,HERE .P>> ,LOW-DIRECTION>\n\t\t\t<RETURN <>>)\n\t\t       (ELSE\n\t\t\t<SET TX <GETPT ,HERE .P>>\n\t\t\t<COND (<AND <EQUAL? <PTSIZE .TX> ,DEXIT>\n\t\t\t\t    <EQUAL? <GETB .TX ,DEXITOBJ> .DOBJ>>\n\t\t\t       <RETURN .P>)>)>>>"
  },
  "MUNG-ROOM": {
   "name": "MUNG-ROOM",
   "file": "gverbs.zil",
   "line": 2183,
   "endLine": 2189,
   "source": "<ROUTINE MUNG-ROOM (RM STR)\n\t %<COND (<==? ,ZORK-NUMBER 2>\n\t\t '<COND (<EQUAL? .RM ,INSIDE-BARROW>\n\t\t\t <RFALSE>)>)\n\t\t(ELSE T)>\n\t <FSET .RM ,RMUNGBIT>\n\t <PUTP .RM ,P?LDESC .STR>>"
  },
  "THIS-IS-IT": {
   "name": "THIS-IS-IT",
   "file": "gverbs.zil",
   "line": 2191,
   "endLine": 2192,
   "source": "<ROUTINE THIS-IS-IT (OBJ)\n\t <SETG P-IT-OBJECT .OBJ>>"
  }
 },
 "globals": {
  "KITCHEN-WINDOW-FLAG": {
   "name": "KITCHEN-WINDOW-FLAG",
   "kind": "global",
   "file": "1actions.zil",
   "line": 239,
   "value": "<>"
  },
  "CAGE-TOP": {
   "name": "CAGE-TOP",
   "kind": "global",
   "file": "1actions.zil",
   "line": 275,
   "value": "T"
  },
  "BAT-DROPS": {
   "name": "BAT-DROPS",
   "kind": "global",
   "file": "1actions.zil",
   "line": 332,
   "value": "<LTABLE 0 MINE-1 MINE-2 MINE-3 MINE-4 LADDER-TOP LADDER-BOTTOM SQUEEKY-ROOM MINE-ENTRANCE>"
  },
  "RUG-MOVED": {
   "name": "RUG-MOVED",
   "kind": "global",
   "file": "1actions.zil",
   "line": 447,
   "value": "<>"
  },
  "GRATE-REVEALED": {
   "name": "GRATE-REVEALED",
   "kind": "global",
   "file": "1actions.zil",
   "line": 771,
   "value": "<>"
  },
  "GRUNLOCK": {
   "name": "GRUNLOCK",
   "kind": "global",
   "file": "1actions.zil",
   "line": 772,
   "value": "<>"
  },
  "MIRROR-MUNG": {
   "name": "MIRROR-MUNG",
   "kind": "global",
   "file": "1actions.zil",
   "line": 968,
   "value": "<>"
  },
  "LUCKY": {
   "name": "LUCKY",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1886,
   "value": "1"
  },
  "XB": {
   "name": "XB",
   "kind": "global",
   "file": "1actions.zil",
   "line": 1127,
   "value": "<>"
  },
  "XC": {
   "name": "XC",
   "kind": "global",
   "file": "1actions.zil",
   "line": 1129,
   "value": "<>"
  },
  "GATE-FLAG": {
   "name": "GATE-FLAG",
   "kind": "global",
   "file": "1actions.zil",
   "line": 1153,
   "value": "<>"
  },
  "GATES-OPEN": {
   "name": "GATES-OPEN",
   "kind": "global",
   "file": "1actions.zil",
   "line": 1154,
   "value": "<>"
  },
  "LOUD-RUNS": {
   "name": "LOUD-RUNS",
   "kind": "global",
   "file": "1actions.zil",
   "line": 1261,
   "value": "<LTABLE 0 DAMP-CAVE ROUND-ROOM DEEP-CANYON>"
  },
  "DROWNINGS": {
   "name": "DROWNINGS",
   "kind": "global",
   "file": "1actions.zil",
   "line": 1284,
   "value": "<TABLE (PURE) \"up to your ankles.\" \"up to your shin.\" \"up to your knees.\" \"up to your hips.\" \"up to your waist.\" \"up to your chest.\" \"up to your neck.\" \"over your head.\" \"high in your lungs.\">"
  },
  "WATER-LEVEL": {
   "name": "WATER-LEVEL",
   "kind": "global",
   "file": "1actions.zil",
   "line": 1295,
   "value": "0"
  },
  "CYCLOWRATH": {
   "name": "CYCLOWRATH",
   "kind": "global",
   "file": "1actions.zil",
   "line": 1513,
   "value": "0"
  },
  "CYCLOMAD": {
   "name": "CYCLOMAD",
   "kind": "global",
   "file": "1actions.zil",
   "line": 1644,
   "value": "<TABLE (PURE) \"The cyclops seems somewhat agitated.\" \"The cyclops appears to be getting more agitated.\" \"The cyclops is moving about the room, looking for something.\" \"The cyclops was looking for salt and pepper. No doubt they are\ncondiments for his upcoming snack.\" \"The cyclops is moving toward you in an unfriendly manner.\" \"You have two choices: 1. Leave  2. Become dinner.\">"
  },
  "LOUD-FLAG": {
   "name": "LOUD-FLAG",
   "kind": "global",
   "file": "1actions.zil",
   "line": 1658,
   "value": "<>"
  },
  "EGG-SOLVE": {
   "name": "EGG-SOLVE",
   "kind": "global",
   "file": "1actions.zil",
   "line": 1748,
   "value": "<>"
  },
  "THIEF-HERE": {
   "name": "THIEF-HERE",
   "kind": "global",
   "file": "1actions.zil",
   "line": 1754,
   "value": "<>"
  },
  "THIEF-ENGROSSED": {
   "name": "THIEF-ENGROSSED",
   "kind": "global",
   "file": "1actions.zil",
   "line": 1945,
   "value": "<>"
  },
  "ROBBER-C-DESC": {
   "name": "ROBBER-C-DESC",
   "kind": "global",
   "file": "1actions.zil",
   "line": 2086,
   "value": "\"There is a suspicious-looking individual, holding a bag, leaning\nagainst one wall. He is armed with a vicious-looking stiletto.\""
  },
  "ROBBER-U-DESC": {
   "name": "ROBBER-U-DESC",
   "kind": "global",
   "file": "1actions.zil",
   "line": 2090,
   "value": "\"There is a suspicious-looking individual lying unconscious on the\nground.\""
  },
  "LAMP-TABLE": {
   "name": "LAMP-TABLE",
   "kind": "global",
   "file": "1actions.zil",
   "line": 2220,
   "value": "<TABLE (PURE) 100 \"The lamp appears a bit dimmer.\" 70 \"The lamp is definitely dimmer now.\" 15 \"The lamp is nearly out.\" 0>"
  },
  "MATCH-COUNT": {
   "name": "MATCH-COUNT",
   "kind": "global",
   "file": "1actions.zil",
   "line": 2263,
   "value": "6"
  },
  "CANDLE-TABLE": {
   "name": "CANDLE-TABLE",
   "kind": "global",
   "file": "1actions.zil",
   "line": 2406,
   "value": "<TABLE (PURE) 20 \"The candles grow shorter.\" 10 \"The candles are becoming quite short.\" 5 \"The candles won't last long now.\" 0>"
  },
  "LIGHT-SHAFT": {
   "name": "LIGHT-SHAFT",
   "kind": "global",
   "file": "1actions.zil",
   "line": 2578,
   "value": "13"
  },
  "RIVER-SPEEDS": {
   "name": "RIVER-SPEEDS",
   "kind": "global",
   "file": "1actions.zil",
   "line": 2692,
   "value": "<LTABLE (PURE) RIVER-1 4 RIVER-2 4 RIVER-3 3 RIVER-4 2 RIVER-5 1>"
  },
  "RIVER-NEXT": {
   "name": "RIVER-NEXT",
   "kind": "global",
   "file": "1actions.zil",
   "line": 2695,
   "value": "<LTABLE (PURE) RIVER-1 RIVER-2 RIVER-3 RIVER-4 RIVER-5>"
  },
  "RIVER-LAUNCH": {
   "name": "RIVER-LAUNCH",
   "kind": "global",
   "file": "1actions.zil",
   "line": 2698,
   "value": "<LTABLE (PURE) DAM-BASE RIVER-1 WHITE-CLIFFS-NORTH RIVER-3 WHITE-CLIFFS-SOUTH RIVER-4 SHORE RIVER-5 SANDY-BEACH RIVER-4 RESERVOIR-SOUTH RESERVOIR RESERVOIR-NORTH RESERVOIR STREAM-VIEW IN-STREAM>"
  },
  "BUOY-FLAG": {
   "name": "BUOY-FLAG",
   "kind": "global",
   "file": "1actions.zil",
   "line": 2842,
   "value": "T"
  },
  "BEACH-DIG": {
   "name": "BEACH-DIG",
   "kind": "global",
   "file": "1actions.zil",
   "line": 2851,
   "value": "-1"
  },
  "BDIGS": {
   "name": "BDIGS",
   "kind": "global",
   "file": "1actions.zil",
   "line": 2871,
   "value": "<TABLE (PURE) \"You seem to be digging a hole here.\" \"The hole is getting deeper, but that's about it.\" \"You are surrounded by a wall of sand on all sides.\">"
  },
  "SING-SONG": {
   "name": "SING-SONG",
   "kind": "global",
   "file": "1actions.zil",
   "line": 2968,
   "value": "<>"
  },
  "F-BUSY?": {
   "name": "F-BUSY?",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3236,
   "value": "1"
  },
  "F-DEAD": {
   "name": "F-DEAD",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3237,
   "value": "2"
  },
  "F-UNCONSCIOUS": {
   "name": "F-UNCONSCIOUS",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3238,
   "value": "3"
  },
  "F-CONSCIOUS": {
   "name": "F-CONSCIOUS",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3239,
   "value": "4"
  },
  "F-FIRST?": {
   "name": "F-FIRST?",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3240,
   "value": "5"
  },
  "MISSED": {
   "name": "MISSED",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3246,
   "value": "1"
  },
  "UNCONSCIOUS": {
   "name": "UNCONSCIOUS",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3247,
   "value": "2"
  },
  "KILLED": {
   "name": "KILLED",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3248,
   "value": "3"
  },
  "LIGHT-WOUND": {
   "name": "LIGHT-WOUND",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3249,
   "value": "4"
  },
  "SERIOUS-WOUND": {
   "name": "SERIOUS-WOUND",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3250,
   "value": "5"
  },
  "STAGGER": {
   "name": "STAGGER",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3251,
   "value": "6"
  },
  "LOSE-WEAPON": {
   "name": "LOSE-WEAPON",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3252,
   "value": "7"
  },
  "HESITATE": {
   "name": "HESITATE",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3253,
   "value": "8"
  },
  "SITTING-DUCK": {
   "name": "SITTING-DUCK",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3254,
   "value": "9"
  },
  "DEF1": {
   "name": "DEF1",
   "kind": "global",
   "file": "1actions.zil",
   "line": 3258,
   "value": "<TABLE (PURE) MISSED MISSED MISSED MISSED STAGGER STAGGER UNCONSCIOUS UNCONSCIOUS KILLED KILLED KILLED KILLED KILLED>"
  },
  "DEF2A": {
   "name": "DEF2A",
   "kind": "global",
   "file": "1actions.zil",
   "line": 3265,
   "value": "<TABLE (PURE) MISSED MISSED MISSED MISSED MISSED STAGGER STAGGER LIGHT-WOUND LIGHT-WOUND UNCONSCIOUS>"
  },
  "DEF2B": {
   "name": "DEF2B",
   "kind": "global",
   "file": "1actions.zil",
   "line": 3272,
   "value": "<TABLE (PURE) MISSED MISSED MISSED STAGGER STAGGER LIGHT-WOUND LIGHT-WOUND LIGHT-WOUND UNCONSCIOUS KILLED KILLED KILLED>"
  },
  "DEF3A": {
   "name": "DEF3A",
   "kind": "global",
   "file": "1actions.zil",
   "line": 3280,
   "value": "<TABLE (PURE) MISSED MISSED MISSED MISSED MISSED STAGGER STAGGER LIGHT-WOUND LIGHT-WOUND SERIOUS-WOUND SERIOUS-WOUND>"
  },
  "DEF3B": {
   "name": "DEF3B",
   "kind": "global",
   "file": "1actions.zil",
   "line": 3287,
   "value": "<TABLE (PURE) MISSED MISSED MISSED STAGGER STAGGER LIGHT-WOUND LIGHT-WOUND LIGHT-WOUND SERIOUS-WOUND SERIOUS-WOUND SERIOUS-WOUND>"
  },
  "DEF3C": {
   "name": "DEF3C",
   "kind": "global",
   "file": "1actions.zil",
   "line": 3294,
   "value": "<TABLE (PURE) MISSED STAGGER STAGGER LIGHT-WOUND LIGHT-WOUND LIGHT-WOUND LIGHT-WOUND SERIOUS-WOUND SERIOUS-WOUND SERIOUS-WOUND>"
  },
  "DEF1-RES": {
   "name": "DEF1-RES",
   "kind": "global",
   "file": "1actions.zil",
   "line": 3301,
   "value": "<TABLE DEF1 0 ;<REST ,DEF1 2> 0 ;<REST ,DEF1 4>>"
  },
  "DEF2-RES": {
   "name": "DEF2-RES",
   "kind": "global",
   "file": "1actions.zil",
   "line": 3306,
   "value": "<TABLE DEF2A DEF2B 0 ;<REST ,DEF2B 2> 0 ;<REST ,DEF2B 4>>"
  },
  "DEF3-RES": {
   "name": "DEF3-RES",
   "kind": "global",
   "file": "1actions.zil",
   "line": 3312,
   "value": "<TABLE DEF3A 0 ;<REST ,DEF3A 2> DEF3B 0 ;<REST ,DEF3B 2> DEF3C>"
  },
  "STRENGTH-MAX": {
   "name": "STRENGTH-MAX",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3323,
   "value": "7"
  },
  "STRENGTH-MIN": {
   "name": "STRENGTH-MIN",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3324,
   "value": "2"
  },
  "CURE-WAIT": {
   "name": "CURE-WAIT",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3325,
   "value": "30"
  },
  "F-WEP": {
   "name": "F-WEP",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3608,
   "value": "0"
  },
  "F-DEF": {
   "name": "F-DEF",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3609,
   "value": "1"
  },
  "HERO-MELEE": {
   "name": "HERO-MELEE",
   "kind": "global",
   "file": "1actions.zil",
   "line": 3611,
   "value": "<TABLE (PURE) <LTABLE (PURE) <LTABLE (PURE) \"Your \" F-WEP \" misses the \" F-DEF \" by an inch.\"> <LTABLE (PURE) \"A good slash, but it misses the \" F-DEF \" by a mile.\"> <LTABLE (PURE) \"You charge, but the \" F-DEF \" jumps nimbly aside.\"> <LTABLE (PURE) \"Clang! Crash! The \" F-DEF \" parries.\"> <LTABLE (PURE) \"A quick stroke, but the \" F-DEF \" is on guard.\"> <LTABLE (PURE) \"A good stroke, but it's too slow; the \" F-DEF \" dodges.\">> <LTABLE (PURE) <LTABLE (PURE) \"Your \" F-WEP \" crashes down, knocking the \" F-DEF \" into dreamland.\"> <LTABLE (PURE) \"The \" F-DEF \" is battered into unconsciousness.\"> <LTABLE (PURE) \"A furious exchange, and the \" F-DEF \" is knocked out!\"> <LTABLE (PURE) \"The haft of your \" F-WEP \" knocks out the \" F-DEF \".\"> <LTABLE (PURE) \"The \" F-DEF \" is knocked out!\">> <LTABLE (PURE) <LTABLE (PURE) \"It's curtains for the \" F-DEF \" as your \" F-WEP \" removes his head.\"> <LTABLE (PURE) \"The fatal blow strikes the \" F-DEF \" square in the heart: He dies.\"> <LTABLE (PURE) \"The \" F-DEF \" takes a fatal blow and slumps to the floor dead.\">> <LTABLE (PURE) <LTABLE (PURE) \"The \" F-DEF \" is struck on the arm; blood begins to trickle down.\"> <LTABLE (PURE) \"Your \" F-WEP \" pinks the \" F-DEF \" on the wrist, but it's not serious.\"> <LTABLE (PURE) \"Your stroke lands, but it was only the flat of the blade.\"> <LTABLE (PURE) \"The blow lands, making a shallow gash in the \" F-DEF \"'s arm!\">> <LTABLE (PURE) <LTABLE (PURE) \"The \" F-DEF \" receives a deep gash in his side.\"> <LTABLE (PURE) \"A savage blow on the thigh! The \" F-DEF \" is stunned but can still fight!\"> <LTABLE (PURE) \"Slash! Your blow lands! That one hit an artery, it could be serious!\"> <LTABLE (PURE) \"Slash! Your stroke connects! This could be serious!\">> <LTABLE (PURE) <LTABLE (PURE) \"The \" F-DEF \" is staggered, and drops to his knees.\"> <LTABLE (PURE) \"The \" F-DEF \" is momentarily disoriented and can't fight back.\"> <LTABLE (PURE) \"The force of your blow knocks the \" F-DEF \" back, stunned.\"> <LTABLE (PURE) \"The \" F-DEF \" is confused and can't fight back.\"> <LTABLE (PURE) \"The quickness of your thrust knocks the \" F-DEF \" back, stunned.\">> <LTABLE (PURE) <LTABLE (PURE) \"The \" F-DEF \"'s weapon is knocked to the floor, leaving him unarmed.\"> <LTABLE (PURE) \"The \" F-DEF \" is disarmed by a subtle feint past his guard.\">>>"
  },
  "CYCLOPS-MELEE": {
   "name": "CYCLOPS-MELEE",
   "kind": "global",
   "file": "1actions.zil",
   "line": 3654,
   "value": "<TABLE (PURE) <LTABLE (PURE) <LTABLE (PURE) \"The Cyclops misses, but the backwash almost knocks you over.\"> <LTABLE (PURE) \"The Cyclops rushes you, but runs into the wall.\">> <LTABLE (PURE) <LTABLE (PURE) \"The Cyclops sends you crashing to the floor, unconscious.\">> <LTABLE (PURE) <LTABLE (PURE) \"The Cyclops breaks your neck with a massive smash.\">> <LTABLE (PURE) <LTABLE (PURE) \"A quick punch, but it was only a glancing blow.\"> <LTABLE (PURE) \"A glancing blow from the Cyclops' fist.\">> <LTABLE (PURE) <LTABLE (PURE) \"The monster smashes his huge fist into your chest, breaking several\nribs.\"> <LTABLE (PURE) \"The Cyclops almost knocks the wind out of you with a quick punch.\">> <LTABLE (PURE) <LTABLE (PURE) \"The Cyclops lands a punch that knocks the wind out of you.\"> <LTABLE (PURE) \"Heedless of your weapons, the Cyclops tosses you against the rock\nwall of the room.\">> <LTABLE (PURE) <LTABLE (PURE) \"The Cyclops grabs your \" F-WEP \", tastes it, and throws it to the\nground in disgust.\"> <LTABLE (PURE) \"The monster grabs you on the wrist, squeezes, and you drop your\n\" F-WEP \" in pain.\">> <LTABLE (PURE) <LTABLE (PURE) \"The Cyclops seems unable to decide whether to broil or stew his\ndinner.\">> <LTABLE (PURE) <LTABLE (PURE) \"The Cyclops, no sportsman, dispatches his unconscious victim.\">>>"
  },
  "TROLL-MELEE": {
   "name": "TROLL-MELEE",
   "kind": "global",
   "file": "1actions.zil",
   "line": 3689,
   "value": "<TABLE (PURE) <LTABLE (PURE) <LTABLE (PURE) \"The troll swings his axe, but it misses.\"> <LTABLE (PURE) \"The troll's axe barely misses your ear.\"> <LTABLE (PURE) \"The axe sweeps past as you jump aside.\"> <LTABLE (PURE) \"The axe crashes against the rock, throwing sparks!\">> <LTABLE (PURE) <LTABLE (PURE) \"The flat of the troll's axe hits you delicately on the head, knocking\nyou out.\">> <LTABLE (PURE) <LTABLE (PURE) \"The troll neatly removes your head.\"> <LTABLE (PURE) \"The troll's axe stroke cleaves you from the nave to the chops.\"> <LTABLE (PURE) \"The troll's axe removes your head.\">> <LTABLE (PURE) <LTABLE (PURE) \"The axe gets you right in the side. Ouch!\"> <LTABLE (PURE) \"The flat of the troll's axe skins across your forearm.\"> <LTABLE (PURE) \"The troll's swing almost knocks you over as you barely parry\nin time.\"> <LTABLE (PURE) \"The troll swings his axe, and it nicks your arm as you dodge.\">> <LTABLE (PURE) <LTABLE (PURE) \"The troll charges, and his axe slashes you on your \" F-WEP \" arm.\"> <LTABLE (PURE) \"An axe stroke makes a deep wound in your leg.\"> <LTABLE (PURE) \"The troll's axe swings down, gashing your shoulder.\">> <LTABLE (PURE) <LTABLE (PURE) \"The troll hits you with a glancing blow, and you are momentarily\nstunned.\"> <LTABLE (PURE) \"The troll swings; the blade turns on your armor but crashes\nbroadside into your head.\"> <LTABLE (PURE) \"You stagger back under a hail of axe strokes.\"> <LTABLE (PURE) \"The troll's mighty blow drops you to your knees.\">> <LTABLE (PURE) <LTABLE (PURE) \"The axe hits your \" F-WEP \" and knocks it spinning.\"> <LTABLE (PURE) \"The troll swings, you parry, but the force of his blow knocks your \" F-WEP \" away.\"> <LTABLE (PURE) \"The axe knocks your \" F-WEP \" out of your hand. It falls to the floor.\">> <LTABLE (PURE) <LTABLE (PURE) \"The troll hesitates, fingering his axe.\"> <LTABLE (PURE) \"The troll scratches his head ruminatively:  Might you be magically\nprotected, he wonders?\">> <LTABLE (PURE) <LTABLE (PURE) \"Conquering his fears, the troll puts you to death.\">>>"
  },
  "THIEF-MELEE": {
   "name": "THIEF-MELEE",
   "kind": "global",
   "file": "1actions.zil",
   "line": 3735,
   "value": "<TABLE (PURE) <LTABLE (PURE) <LTABLE (PURE) \"The thief stabs nonchalantly with his stiletto and misses.\"> <LTABLE (PURE) \"You dodge as the thief comes in low.\"> <LTABLE (PURE) \"You parry a lightning thrust, and the thief salutes you with\na grim nod.\"> <LTABLE (PURE) \"The thief tries to sneak past your guard, but you twist away.\">> <LTABLE (PURE) <LTABLE (PURE) \"Shifting in the midst of a thrust, the thief knocks you unconscious\nwith the haft of his stiletto.\"> <LTABLE (PURE) \"The thief knocks you out.\">> <LTABLE (PURE) <LTABLE (PURE) \"Finishing you off, the thief inserts his blade into your heart.\"> <LTABLE (PURE) \"The thief comes in from the side, feints, and inserts the blade\ninto your ribs.\"> <LTABLE (PURE) \"The thief bows formally, raises his stiletto, and with a wry grin,\nends the battle and your life.\">> <LTABLE (PURE) <LTABLE (PURE) \"A quick thrust pinks your left arm, and blood starts to\ntrickle down.\"> <LTABLE (PURE) \"The thief draws blood, raking his stiletto across your arm.\"> <LTABLE (PURE) \"The stiletto flashes faster than you can follow, and blood wells\nfrom your leg.\"> <LTABLE (PURE) \"The thief slowly approaches, strikes like a snake, and leaves\nyou wounded.\">> <LTABLE (PURE) <LTABLE (PURE) \"The thief strikes like a snake! The resulting wound is serious.\"> <LTABLE (PURE) \"The thief stabs a deep cut in your upper arm.\"> <LTABLE (PURE) \"The stiletto touches your forehead, and the blood obscures your\nvision.\"> <LTABLE (PURE) \"The thief strikes at your wrist, and suddenly your grip is slippery\nwith blood.\">> <LTABLE (PURE) <LTABLE (PURE) \"The butt of his stiletto cracks you on the skull, and you stagger\nback.\"> <LTABLE (PURE) \"The thief rams the haft of his blade into your stomach, leaving\nyou out of breath.\"> <LTABLE (PURE) \"The thief attacks, and you fall back desperately.\">> <LTABLE (PURE) <LTABLE (PURE) \"A long, theatrical slash. You catch it on your \" F-WEP \", but the\nthief twists his knife, and the \" F-WEP \" goes flying.\"> <LTABLE (PURE) \"The thief neatly flips your \" F-WEP \" out of your hands, and it drops\nto the floor.\"> <LTABLE (PURE) \"You parry a low thrust, and your \" F-WEP \" slips out of your hand.\">> <LTABLE (PURE) <LTABLE (PURE) \"The thief, a man of superior breeding, pauses for a moment to consider the propriety of finishing you off.\"> <LTABLE (PURE) \"The thief amuses himself by searching your pockets.\"> <LTABLE (PURE) \"The thief entertains himself by rifling your pack.\">> <LTABLE (PURE) <LTABLE (PURE) \"The thief, forgetting his essentially genteel upbringing, cuts your\nthroat.\"> <LTABLE (PURE) \"The thief, a pragmatist, dispatches you as a threat to his\nlivelihood.\">>>"
  },
  "V-VILLAIN": {
   "name": "V-VILLAIN",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3793,
   "value": "0"
  },
  "V-BEST": {
   "name": "V-BEST",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3794,
   "value": "1"
  },
  "V-BEST-ADV": {
   "name": "V-BEST-ADV",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3795,
   "value": "2"
  },
  "V-PROB": {
   "name": "V-PROB",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3796,
   "value": "3"
  },
  "V-MSGS": {
   "name": "V-MSGS",
   "kind": "constant",
   "file": "1actions.zil",
   "line": 3797,
   "value": "4"
  },
  "VILLAINS": {
   "name": "VILLAINS",
   "kind": "global",
   "file": "1actions.zil",
   "line": 3801,
   "value": "<LTABLE <TABLE TROLL SWORD 1 0 TROLL-MELEE> <TABLE THIEF KNIFE 1 0 THIEF-MELEE> <TABLE CYCLOPS <> 0 0 CYCLOPS-MELEE>>"
  },
  "SCORE-MAX": {
   "name": "SCORE-MAX",
   "kind": "global",
   "file": "1dungeon.zil",
   "line": 7,
   "value": "350"
  },
  "FALSE-FLAG": {
   "name": "FALSE-FLAG",
   "kind": "global",
   "file": "1dungeon.zil",
   "line": 9,
   "value": "<>"
  },
  "CYCLOPS-FLAG": {
   "name": "CYCLOPS-FLAG",
   "kind": "global",
   "file": "1dungeon.zil",
   "line": 1225,
   "value": "<>"
  },
  "DEFLATE": {
   "name": "DEFLATE",
   "kind": "global",
   "file": "1dungeon.zil",
   "line": 1226,
   "value": "<>"
  },
  "DOME-FLAG": {
   "name": "DOME-FLAG",
   "kind": "global",
   "file": "1dungeon.zil",
   "line": 1227,
   "value": "<>"
  },
  "EMPTY-HANDED": {
   "name": "EMPTY-HANDED",
   "kind": "global",
   "file": "1dungeon.zil",
   "line": 1228,
   "value": "<>"
  },
  "LLD-FLAG": {
   "name": "LLD-FLAG",
   "kind": "global",
   "file": "1dungeon.zil",
   "line": 1229,
   "value": "<>"
  },
  "LOW-TIDE": {
   "name": "LOW-TIDE",
   "kind": "global",
   "file": "1dungeon.zil",
   "line": 1230,
   "value": "<>"
  },
  "MAGIC-FLAG": {
   "name": "MAGIC-FLAG",
   "kind": "global",
   "file": "1dungeon.zil",
   "line": 1231,
   "value": "<>"
  },
  "RAINBOW-FLAG": {
   "name": "RAINBOW-FLAG",
   "kind": "global",
   "file": "1dungeon.zil",
   "line": 1232,
   "value": "<>"
  },
  "TROLL-FLAG": {
   "name": "TROLL-FLAG",
   "kind": "global",
   "file": "1dungeon.zil",
   "line": 1233,
   "value": "<>"
  },
  "WON-FLAG": {
   "name": "WON-FLAG",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1849,
   "value": "<>"
  },
  "COFFIN-CURE": {
   "name": "COFFIN-CURE",
   "kind": "global",
   "file": "1dungeon.zil",
   "line": 1235,
   "value": "<>"
  },
  "HOUSE-AROUND": {
   "name": "HOUSE-AROUND",
   "kind": "global",
   "file": "1dungeon.zil",
   "line": 2620,
   "value": "<LTABLE (PURE) WEST-OF-HOUSE NORTH-OF-HOUSE EAST-OF-HOUSE SOUTH-OF-HOUSE WEST-OF-HOUSE>"
  },
  "FOREST-AROUND": {
   "name": "FOREST-AROUND",
   "kind": "global",
   "file": "1dungeon.zil",
   "line": 2624,
   "value": "<LTABLE (PURE) FOREST-1 FOREST-2 FOREST-3 PATH CLEARING FOREST-1>"
  },
  "IN-HOUSE-AROUND": {
   "name": "IN-HOUSE-AROUND",
   "kind": "global",
   "file": "1dungeon.zil",
   "line": 2627,
   "value": "<LTABLE (PURE) LIVING-ROOM KITCHEN ATTIC KITCHEN>"
  },
  "ABOVE-GROUND": {
   "name": "ABOVE-GROUND",
   "kind": "global",
   "file": "1dungeon.zil",
   "line": 2630,
   "value": "<LTABLE (PURE) WEST-OF-HOUSE NORTH-OF-HOUSE EAST-OF-HOUSE SOUTH-OF-HOUSE FOREST-1 FOREST-2 FOREST-3 PATH CLEARING GRATING-CLEARING CANYON-VIEW>"
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
   "line": 92,
   "value": "100"
  },
  "LOAD-ALLOWED": {
   "name": "LOAD-ALLOWED",
   "kind": "global",
   "file": "gglobals.zil",
   "line": 94,
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
   "file": "gmain.zil",
   "line": 7,
   "value": "<>"
  },
  "P-WON": {
   "name": "P-WON",
   "kind": "global",
   "file": "gmain.zil",
   "line": 9,
   "value": "<>"
  },
  "M-FATAL": {
   "name": "M-FATAL",
   "kind": "constant",
   "file": "gmain.zil",
   "line": 11,
   "value": "2"
  },
  "M-HANDLED": {
   "name": "M-HANDLED",
   "kind": "constant",
   "file": "gmain.zil",
   "line": 13,
   "value": "1"
  },
  "M-NOT-HANDLED": {
   "name": "M-NOT-HANDLED",
   "kind": "constant",
   "file": "gmain.zil",
   "line": 15,
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
   "file": "gmain.zil",
   "line": 19,
   "value": "1"
  },
  "M-END": {
   "name": "M-END",
   "kind": "constant",
   "file": "gmain.zil",
   "line": 21,
   "value": "6"
  },
  "M-ENTER": {
   "name": "M-ENTER",
   "kind": "constant",
   "file": "gmain.zil",
   "line": 23,
   "value": "2"
  },
  "M-LOOK": {
   "name": "M-LOOK",
   "kind": "constant",
   "file": "gmain.zil",
   "line": 25,
   "value": "3"
  },
  "M-FLASH": {
   "name": "M-FLASH",
   "kind": "constant",
   "file": "gmain.zil",
   "line": 27,
   "value": "4"
  },
  "M-OBJDESC": {
   "name": "M-OBJDESC",
   "kind": "constant",
   "file": "gmain.zil",
   "line": 29,
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
   "file": "gparser.zil",
   "line": 14,
   "value": "<>"
  },
  "PRSI": {
   "name": "PRSI",
   "kind": "global",
   "file": "gparser.zil",
   "line": 15,
   "value": "<>"
  },
  "PRSO": {
   "name": "PRSO",
   "kind": "global",
   "file": "gparser.zil",
   "line": 16,
   "value": "<>"
  },
  "P-TABLE": {
   "name": "P-TABLE",
   "kind": "global",
   "file": "gparser.zil",
   "line": 18,
   "value": "0"
  },
  "P-ONEOBJ": {
   "name": "P-ONEOBJ",
   "kind": "global",
   "file": "gparser.zil",
   "line": 19,
   "value": "0"
  },
  "P-SYNTAX": {
   "name": "P-SYNTAX",
   "kind": "global",
   "file": "gparser.zil",
   "line": 20,
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
   "file": "gparser.zil",
   "line": 29,
   "value": "0"
  },
  "P-DIR": {
   "name": "P-DIR",
   "kind": "global",
   "file": "gparser.zil",
   "line": 30,
   "value": "0"
  },
  "HERE": {
   "name": "HERE",
   "kind": "global",
   "file": "gparser.zil",
   "line": 31,
   "value": "0"
  },
  "WINNER": {
   "name": "WINNER",
   "kind": "global",
   "file": "gparser.zil",
   "line": 32,
   "value": "0"
  },
  "P-LEXV": {
   "name": "P-LEXV",
   "kind": "global",
   "file": "gparser.zil",
   "line": 34,
   "value": "<ITABLE 59 (LEXV) 0 #BYTE 0 #BYTE 0>"
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
   "file": "gparser.zil",
   "line": 44,
   "value": "<ITABLE 120 (BYTE LENGTH) 0>"
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
   "file": "gparser.zil",
   "line": 58,
   "value": "<>"
  },
  "P-IT-OBJECT": {
   "name": "P-IT-OBJECT",
   "kind": "global",
   "file": "gparser.zil",
   "line": 59,
   "value": "<>"
  },
  "P-OFLAG": {
   "name": "P-OFLAG",
   "kind": "global",
   "file": "gparser.zil",
   "line": 64,
   "value": "<>"
  },
  "P-MERGED": {
   "name": "P-MERGED",
   "kind": "global",
   "file": "gparser.zil",
   "line": 65,
   "value": "<>"
  },
  "P-ACLAUSE": {
   "name": "P-ACLAUSE",
   "kind": "global",
   "file": "gparser.zil",
   "line": 66,
   "value": "<>"
  },
  "P-ANAM": {
   "name": "P-ANAM",
   "kind": "global",
   "file": "gparser.zil",
   "line": 67,
   "value": "<>"
  },
  "P-AADJ": {
   "name": "P-AADJ",
   "kind": "global",
   "file": "gparser.zil",
   "line": 68,
   "value": "<>"
  },
  "P-LEXWORDS": {
   "name": "P-LEXWORDS",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 73,
   "value": "1"
  },
  "P-LEXSTART": {
   "name": "P-LEXSTART",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 74,
   "value": "1"
  },
  "P-LEXELEN": {
   "name": "P-LEXELEN",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 75,
   "value": "2"
  },
  "P-WORDLEN": {
   "name": "P-WORDLEN",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 76,
   "value": "4"
  },
  "P-PSOFF": {
   "name": "P-PSOFF",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 78,
   "value": "4"
  },
  "P-P1OFF": {
   "name": "P-P1OFF",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 79,
   "value": "5"
  },
  "P-P1BITS": {
   "name": "P-P1BITS",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 80,
   "value": "3"
  },
  "P-ITBLLEN": {
   "name": "P-ITBLLEN",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 82,
   "value": "9"
  },
  "P-ITBL": {
   "name": "P-ITBL",
   "kind": "global",
   "file": "gparser.zil",
   "line": 83,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-OTBL": {
   "name": "P-OTBL",
   "kind": "global",
   "file": "gparser.zil",
   "line": 84,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-VTBL": {
   "name": "P-VTBL",
   "kind": "global",
   "file": "gparser.zil",
   "line": 85,
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
   "file": "gparser.zil",
   "line": 88,
   "value": "0"
  },
  "P-VERB": {
   "name": "P-VERB",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 90,
   "value": "0"
  },
  "P-VERBN": {
   "name": "P-VERBN",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 91,
   "value": "1"
  },
  "P-PREP1": {
   "name": "P-PREP1",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 92,
   "value": "2"
  },
  "P-PREP1N": {
   "name": "P-PREP1N",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 93,
   "value": "3"
  },
  "P-PREP2": {
   "name": "P-PREP2",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 94,
   "value": "4"
  },
  "P-PREP2N": {
   "name": "P-PREP2N",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 95,
   "value": "5"
  },
  "P-NC1": {
   "name": "P-NC1",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 96,
   "value": "6"
  },
  "P-NC1L": {
   "name": "P-NC1L",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 97,
   "value": "7"
  },
  "P-NC2": {
   "name": "P-NC2",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 98,
   "value": "8"
  },
  "P-NC2L": {
   "name": "P-NC2L",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 99,
   "value": "9"
  },
  "QUOTE-FLAG": {
   "name": "QUOTE-FLAG",
   "kind": "global",
   "file": "gparser.zil",
   "line": 101,
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
   "file": "gparser.zil",
   "line": 383,
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
   "file": "gparser.zil",
   "line": 536,
   "value": "0"
  },
  "P-DIRECTION": {
   "name": "P-DIRECTION",
   "kind": "global",
   "file": "gparser.zil",
   "line": 538,
   "value": "0"
  },
  "P-SLOCBITS": {
   "name": "P-SLOCBITS",
   "kind": "global",
   "file": "gparser.zil",
   "line": 693,
   "value": "0"
  },
  "P-SYNLEN": {
   "name": "P-SYNLEN",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 695,
   "value": "8"
  },
  "P-SBITS": {
   "name": "P-SBITS",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 697,
   "value": "0"
  },
  "P-SPREP1": {
   "name": "P-SPREP1",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 698,
   "value": "1"
  },
  "P-SPREP2": {
   "name": "P-SPREP2",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 699,
   "value": "2"
  },
  "P-SFWIM1": {
   "name": "P-SFWIM1",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 700,
   "value": "3"
  },
  "P-SFWIM2": {
   "name": "P-SFWIM2",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 701,
   "value": "4"
  },
  "P-SLOC1": {
   "name": "P-SLOC1",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 702,
   "value": "5"
  },
  "P-SLOC2": {
   "name": "P-SLOC2",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 703,
   "value": "6"
  },
  "P-SACTION": {
   "name": "P-SACTION",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 704,
   "value": "7"
  },
  "P-SONUMS": {
   "name": "P-SONUMS",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 705,
   "value": "3"
  },
  "P-GWIMBIT": {
   "name": "P-GWIMBIT",
   "kind": "global",
   "file": "gparser.zil",
   "line": 899,
   "value": "0"
  },
  "P-NAM": {
   "name": "P-NAM",
   "kind": "global",
   "file": "gparser.zil",
   "line": 960,
   "value": "<>"
  },
  "P-ADJ": {
   "name": "P-ADJ",
   "kind": "global",
   "file": "gparser.zil",
   "line": 961,
   "value": "<>"
  },
  "P-ADVERB": {
   "name": "P-ADVERB",
   "kind": "global",
   "file": "gparser.zil",
   "line": 962,
   "value": "<>"
  },
  "P-ADJN": {
   "name": "P-ADJN",
   "kind": "global",
   "file": "gparser.zil",
   "line": 963,
   "value": "<>"
  },
  "P-PRSO": {
   "name": "P-PRSO",
   "kind": "global",
   "file": "gparser.zil",
   "line": 964,
   "value": "<ITABLE NONE 50>"
  },
  "P-PRSI": {
   "name": "P-PRSI",
   "kind": "global",
   "file": "gparser.zil",
   "line": 965,
   "value": "<ITABLE NONE 50>"
  },
  "P-BUTS": {
   "name": "P-BUTS",
   "kind": "global",
   "file": "gparser.zil",
   "line": 966,
   "value": "<ITABLE NONE 50>"
  },
  "P-MERGE": {
   "name": "P-MERGE",
   "kind": "global",
   "file": "gparser.zil",
   "line": 967,
   "value": "<ITABLE NONE 50>"
  },
  "P-OCLAUSE": {
   "name": "P-OCLAUSE",
   "kind": "global",
   "file": "gparser.zil",
   "line": 968,
   "value": "<ITABLE NONE 100>"
  },
  "P-MATCHLEN": {
   "name": "P-MATCHLEN",
   "kind": "global",
   "file": "gparser.zil",
   "line": 969,
   "value": "0"
  },
  "P-GETFLAGS": {
   "name": "P-GETFLAGS",
   "kind": "global",
   "file": "gparser.zil",
   "line": 970,
   "value": "0"
  },
  "P-ALL": {
   "name": "P-ALL",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 971,
   "value": "1"
  },
  "P-ONE": {
   "name": "P-ONE",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 972,
   "value": "2"
  },
  "P-INHIBIT": {
   "name": "P-INHIBIT",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 973,
   "value": "4"
  },
  "P-AND": {
   "name": "P-AND",
   "kind": "global",
   "file": "gparser.zil",
   "line": 976,
   "value": "<>"
  },
  "SH": {
   "name": "SH",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 1032,
   "value": "128"
  },
  "SC": {
   "name": "SC",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 1033,
   "value": "64"
  },
  "SIR": {
   "name": "SIR",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 1034,
   "value": "32"
  },
  "SOG": {
   "name": "SOG",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 1035,
   "value": "16"
  },
  "STAKE": {
   "name": "STAKE",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 1036,
   "value": "8"
  },
  "SMANY": {
   "name": "SMANY",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 1037,
   "value": "4"
  },
  "SHAVE": {
   "name": "SHAVE",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 1038,
   "value": "2"
  },
  "P-XNAM": {
   "name": "P-XNAM",
   "kind": "global",
   "file": "gparser.zil",
   "line": 1142,
   "value": "<>"
  },
  "P-XADJ": {
   "name": "P-XADJ",
   "kind": "global",
   "file": "gparser.zil",
   "line": 1143,
   "value": "<>"
  },
  "P-XADJN": {
   "name": "P-XADJN",
   "kind": "global",
   "file": "gparser.zil",
   "line": 1144,
   "value": "<>"
  },
  "P-SRCBOT": {
   "name": "P-SRCBOT",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 1212,
   "value": "2"
  },
  "P-SRCTOP": {
   "name": "P-SRCTOP",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 1213,
   "value": "0"
  },
  "P-SRCALL": {
   "name": "P-SRCALL",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 1214,
   "value": "1"
  },
  "ALWAYS-LIT": {
   "name": "ALWAYS-LIT",
   "kind": "global",
   "file": "gparser.zil",
   "line": 1331,
   "value": "<>"
  },
  "VERBOSE": {
   "name": "VERBOSE",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 9,
   "value": "<>"
  },
  "SUPER-BRIEF": {
   "name": "SUPER-BRIEF",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 10,
   "value": "<>"
  },
  "HS": {
   "name": "HS",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 722,
   "value": "0"
  },
  "JUMPLOSS": {
   "name": "JUMPLOSS",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 844,
   "value": "<LTABLE 0 \"You should have looked before you leaped.\" \"In the movies, your life would be passing before your eyes.\" \"Geronimo...\">"
  },
  "WHEEEEE": {
   "name": "WHEEEEE",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1272,
   "value": "<LTABLE 0 \"Very good. Now you can go to the second grade.\" \"Are you enjoying yourself?\" \"Wheeeeeeeeee!!!!!\" \"Do you expect me to applaud?\">"
  },
  "LIT": {
   "name": "LIT",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1626,
   "value": "<>"
  },
  "SPRAYED?": {
   "name": "SPRAYED?",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1628,
   "value": "<>"
  },
  "DESC-OBJECT": {
   "name": "DESC-OBJECT",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1691,
   "value": "<>"
  },
  "MOVES": {
   "name": "MOVES",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1843,
   "value": "0"
  },
  "SCORE": {
   "name": "SCORE",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1845,
   "value": "0"
  },
  "BASE-SCORE": {
   "name": "BASE-SCORE",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1847,
   "value": "0"
  },
  "DEAD": {
   "name": "DEAD",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1882,
   "value": "<>"
  },
  "DEATHS": {
   "name": "DEATHS",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1884,
   "value": "0"
  },
  "FUMBLE-NUMBER": {
   "name": "FUMBLE-NUMBER",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1896,
   "value": "7"
  },
  "FUMBLE-PROB": {
   "name": "FUMBLE-PROB",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1898,
   "value": "8"
  },
  "REXIT": {
   "name": "REXIT",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2001,
   "value": "0"
  },
  "UEXIT": {
   "name": "UEXIT",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2002,
   "value": "1"
  },
  "NEXIT": {
   "name": "NEXIT",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2003,
   "value": "2"
  },
  "FEXIT": {
   "name": "FEXIT",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2004,
   "value": "3"
  },
  "CEXIT": {
   "name": "CEXIT",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2005,
   "value": "4"
  },
  "DEXIT": {
   "name": "DEXIT",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2006,
   "value": "5"
  },
  "NEXITSTR": {
   "name": "NEXITSTR",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2008,
   "value": "0"
  },
  "FEXITFCN": {
   "name": "FEXITFCN",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2009,
   "value": "0"
  },
  "CEXITFLAG": {
   "name": "CEXITFLAG",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2010,
   "value": "1"
  },
  "CEXITSTR": {
   "name": "CEXITSTR",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2011,
   "value": "1"
  },
  "DEXITOBJ": {
   "name": "DEXITOBJ",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2012,
   "value": "1"
  },
  "DEXITSTR": {
   "name": "DEXITSTR",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2013,
   "value": "1"
  },
  "INDENTS": {
   "name": "INDENTS",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 2015,
   "value": "<TABLE (PURE) \"\" \"  \" \"    \" \"      \" \"        \" \"          \">"
  },
  "HO-HUM": {
   "name": "HO-HUM",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 2031,
   "value": "<LTABLE 0 \" doesn't seem to work.\" \" isn't notably helpful.\" \" has no effect.\">"
  },
  "HELLOS": {
   "name": "HELLOS",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 2198,
   "value": "<LTABLE 0 \"Hello.\" \"Good day.\" \"Nice weather we've been having lately.\" \"Goodbye.\">"
  },
  "YUKS": {
   "name": "YUKS",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 2204,
   "value": "<LTABLE 0 \"A valiant attempt.\" \"You can't be serious.\" ;\"Not bloody likely.\" \"An interesting idea...\" \"What a concept!\">"
  },
  "DUMMY": {
   "name": "DUMMY",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 2213,
   "value": "<LTABLE 0 \"Look around.\" \"Too late for that.\" \"Have your eyes checked.\">"
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
     "line": 83
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
     "line": 86
    },
    {
     "pattern": "ANSWER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-REPLY",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 87
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
     "line": 90
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
     "line": 96
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
     "line": 100
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
     "line": 102
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
     "line": 104
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
     "line": 105
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
     "line": 107
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
     "line": 108
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
     "line": 110
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
     "line": 112
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
     "line": 113
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
     "line": 117
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
     "line": 119
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
     "line": 122
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
     "line": 127
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
     "line": 130
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
     "line": 131
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
     "line": 132
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
     "line": 133
    },
    {
     "pattern": "CLIMB OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLIMB-FOO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 134
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
     "line": 135
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
     "line": 136
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
     "line": 137
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
     "line": 140
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
     "line": 142
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
     "line": 144
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
     "line": 146
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
     "line": 149
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
     "line": 152
    },
    {
     "pattern": "CURSE OBJECT (FIND ACTORBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-CURSES",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 153
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
     "line": 156
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
     "line": 158
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
     "line": 160
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
     "line": 162
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
     "line": 165
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
     "line": 166
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
     "line": 168
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
     "line": 171
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
     "line": 174
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
     "line": 176
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
     "line": 178
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
     "line": 181
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
     "line": 182
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
     "line": 183
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
     "line": 184
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
     "line": 186
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
     "line": 190
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
     "line": 192
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
     "line": 194
    },
    {
     "pattern": "ENTER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 195
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
     "line": 196
    },
    {
     "pattern": "EXIT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-EXIT",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 197
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
     "line": 199
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
     "line": 200
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
     "line": 202
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
     "line": 206
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
     "line": 207
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
     "line": 208
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
     "line": 211
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
     "line": 215
    },
    {
     "pattern": "FILL OBJECT (FIND CONTBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-FILL",
     "preaction": "PRE-FILL",
     "file": "gsyntax.zil",
     "line": 217
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
     "line": 220
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
     "line": 223
    },
    {
     "pattern": "FOLLOW OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 224
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
     "line": 227
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
     "line": 229
    },
    {
     "pattern": "GIVE OBJECT (FIND ACTORBIT) (ON-GROUND) OBJECT (MANY HELD HAVE)",
     "objects": 2,
     "particles": [],
     "action": "V-SGIVE",
     "preaction": "PRE-SGIVE",
     "file": "gsyntax.zil",
     "line": 231
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
     "line": 237
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
     "line": 239
    },
    {
     "pattern": "HELLO OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-HELLO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 240
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
     "line": 243
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
     "line": 246
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
     "line": 249
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
     "line": 250
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
     "line": 251
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
     "line": 252
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
     "line": 253
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
     "line": 254
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
     "line": 257
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
     "line": 264
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
     "line": 268
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
     "line": 269
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
     "line": 272
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
     "line": 274
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
     "line": 275
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
     "line": 276
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
     "line": 279
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
     "line": 281
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
     "line": 283
    },
    {
     "pattern": "LEAVE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-DROP",
     "preaction": "PRE-DROP",
     "file": "gsyntax.zil",
     "line": 284
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
     "line": 286
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
     "line": 288
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
     "line": 291
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
     "line": 292
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
     "line": 294
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
     "line": 297
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
     "line": 298
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
     "line": 299
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
     "line": 300
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
     "line": 301
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
     "line": 302
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
     "line": 303
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
     "line": 304
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
     "line": 305
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
     "line": 306
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
     "line": 307
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
     "line": 309
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
     "line": 312
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
     "line": 314
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
     "line": 317
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
     "line": 319
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
     "line": 323
    },
    {
     "pattern": "MOVE OBJECT (ON-GROUND IN-ROOM) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 324
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
     "line": 325
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
     "line": 326
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
     "line": 327
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
     "line": 328
    },
    {
     "pattern": "ROLL OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-MOVE",
     "preaction": "PRE-MOVE",
     "file": "gsyntax.zil",
     "line": 329
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
     "line": 331
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
     "line": 334
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
     "line": 337
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
     "line": 338
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
     "line": 340
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
     "line": 343
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
     "line": 344
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
     "line": 345
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
     "line": 347
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
     "line": 349
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
     "line": 352
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
     "line": 355
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
     "line": 357
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
     "line": 360
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
     "line": 361
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
     "line": 362
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
     "line": 363
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
     "line": 366
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
     "line": 368
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
     "line": 369
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
     "line": 370
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
     "line": 373
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
     "line": 374
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
     "line": 376
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
     "line": 377
    },
    {
     "pattern": "PUSH OBJECT (IN-ROOM ON-GROUND MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-PUSH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 378
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
     "line": 379
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
     "line": 380
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
     "line": 381
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
     "line": 384
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
     "line": 385
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
     "line": 386
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
     "line": 387
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
     "line": 388
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
     "line": 390
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
     "line": 391
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
     "line": 394
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
     "line": 395
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
     "line": 398
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
     "line": 401
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
     "line": 403
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
     "line": 405
    },
    {
     "pattern": "READ OBJECT (FIND READBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-READ-PAGE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 407
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
     "line": 411
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
     "line": 413
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
     "line": 414
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
     "file": "gsyntax.zil",
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
     "line": 421
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
     "line": 422
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
     "line": 424
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
     "line": 425
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
     "line": 426
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
     "line": 428
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
     "line": 430
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
     "line": 432
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
     "line": 435
    },
    {
     "pattern": "SLIDE OBJECT (IN-ROOM ON-GROUND) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 436
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
     "line": 437
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
     "line": 439
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
     "line": 442
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
     "line": 444
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
     "line": 445
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
     "line": 447
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
     "line": 448
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
     "line": 450
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
     "line": 451
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
     "line": 453
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
     "line": 455
    },
    {
     "pattern": "STRIKE OBJECT (ON-GROUND IN-ROOM HELD CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-STRIKE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 457
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
     "line": 459
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
     "line": 460
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
     "line": 461
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
     "line": 464
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
     "line": 465
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
     "line": 469
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
     "line": 470
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
     "line": 471
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
     "line": 472
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
     "line": 473
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
     "line": 474
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
     "line": 476
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
     "line": 478
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
     "line": 482
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
     "line": 483
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
     "line": 486
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
     "line": 488
    },
    {
     "pattern": "THROW OBJECT OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-OVERBOARD",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 490
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
     "line": 491
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
     "line": 492
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
     "line": 493
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
     "line": 494
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
     "line": 497
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
     "line": 498
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
     "line": 502
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
     "line": 505
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
     "line": 507
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
     "line": 509
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
     "line": 510
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
     "line": 512
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
     "line": 513
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
     "line": 516
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
     "line": 519
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
     "line": 520
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
     "line": 524
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
     "line": 527
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
     "line": 528
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
     "line": 531
    },
    {
     "pattern": "WALK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WALK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 532
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
     "line": 533
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
     "line": 534
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
     "line": 535
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
     "line": 536
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
     "line": 537
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
     "line": 538
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
     "line": 539
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
     "line": 540
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
     "line": 541
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
     "line": 544
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
     "line": 545
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
     "line": 546
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
     "line": 549
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
     "line": 551
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
     "line": 554
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
     "line": 555
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
     "line": 557
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
     "line": 559
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
     "line": 562
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
    },
    {
     "kind": "noun",
     "of": "BOARD"
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
    },
    {
     "kind": "noun",
     "of": "SCARAB"
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
     "kind": "word",
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
    },
    {
     "kind": "adjective",
     "of": "INFLATED-BOAT"
    },
    {
     "kind": "adjective",
     "of": "INFLATABLE-BOAT"
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
     "of": "LAMP"
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
    }
   ]
  },
  "PUNCTURE": {
   "word": "PUNCTURE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "PUNCTURED-BOAT"
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
    },
    {
     "kind": "noun",
     "of": "PUMP"
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
    }
   ]
  },
  "SAY": {
   "word": "SAY",
   "roles": [
    {
     "kind": "verb",
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
    },
    {
     "kind": "noun",
     "of": "SLIDE"
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
     "of": "SKULL"
    },
    {
     "kind": "noun",
     "of": "SCEPTRE"
    },
    {
     "kind": "noun",
     "of": "CHALICE"
    },
    {
     "kind": "noun",
     "of": "TRIDENT"
    },
    {
     "kind": "noun",
     "of": "COFFIN"
    },
    {
     "kind": "noun",
     "of": "DIAMOND"
    },
    {
     "kind": "noun",
     "of": "JADE"
    },
    {
     "kind": "noun",
     "of": "BAG-OF-COINS"
    },
    {
     "kind": "noun",
     "of": "EMERALD"
    },
    {
     "kind": "noun",
     "of": "PAINTING"
    },
    {
     "kind": "noun",
     "of": "BAR"
    },
    {
     "kind": "noun",
     "of": "POT-OF-GOLD"
    },
    {
     "kind": "noun",
     "of": "BRACELET"
    },
    {
     "kind": "noun",
     "of": "SCARAB"
    },
    {
     "kind": "noun",
     "of": "TORCH"
    },
    {
     "kind": "noun",
     "of": "TRUNK"
    },
    {
     "kind": "noun",
     "of": "EGG"
    },
    {
     "kind": "noun",
     "of": "BROKEN-EGG"
    },
    {
     "kind": "noun",
     "of": "BAUBLE"
    },
    {
     "kind": "noun",
     "of": "CANARY"
    },
    {
     "kind": "noun",
     "of": "BROKEN-CANARY"
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
    },
    {
     "kind": "adjective",
     "of": "OWNERS-MANUAL"
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
  "THROUGH": {
   "word": "THROUGH",
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
     "of": "WOODEN-DOOR"
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
     "kind": "word-synonym",
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
  "LAND": {
   "word": "LAND",
   "roles": [
    {
     "kind": "direction",
     "of": null
    }
   ]
  },
  "AGAIN": {
   "word": "AGAIN",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "G": {
   "word": "G",
   "roles": [
    {
     "kind": "buzzword",
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
  "IS": {
   "word": "IS",
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
  "BOARDS": {
   "word": "BOARDS",
   "roles": [
    {
     "kind": "noun",
     "of": "BOARD"
    }
   ]
  },
  "OVERBOARD": {
   "word": "OVERBOARD",
   "roles": [
    {
     "kind": "noun",
     "of": "TEETH"
    }
   ]
  },
  "TEETH": {
   "word": "TEETH",
   "roles": [
    {
     "kind": "noun",
     "of": "TEETH"
    }
   ]
  },
  "WALL": {
   "word": "WALL",
   "roles": [
    {
     "kind": "noun",
     "of": "WALL"
    },
    {
     "kind": "noun",
     "of": "GRANITE-WALL"
    },
    {
     "kind": "noun",
     "of": "ENGRAVINGS"
    },
    {
     "kind": "noun",
     "of": "CLIMBABLE-CLIFF"
    }
   ]
  },
  "WALLS": {
   "word": "WALLS",
   "roles": [
    {
     "kind": "noun",
     "of": "WALL"
    },
    {
     "kind": "noun",
     "of": "CLIMBABLE-CLIFF"
    }
   ]
  },
  "SURROUNDING": {
   "word": "SURROUNDING",
   "roles": [
    {
     "kind": "adjective",
     "of": "WALL"
    }
   ]
  },
  "GRANITE": {
   "word": "GRANITE",
   "roles": [
    {
     "kind": "adjective",
     "of": "GRANITE-WALL"
    }
   ]
  },
  "BIRD": {
   "word": "BIRD",
   "roles": [
    {
     "kind": "noun",
     "of": "SONGBIRD"
    }
   ]
  },
  "SONGBIRD": {
   "word": "SONGBIRD",
   "roles": [
    {
     "kind": "noun",
     "of": "SONGBIRD"
    }
   ]
  },
  "SONG": {
   "word": "SONG",
   "roles": [
    {
     "kind": "adjective",
     "of": "SONGBIRD"
    }
   ]
  },
  "HOUSE": {
   "word": "HOUSE",
   "roles": [
    {
     "kind": "noun",
     "of": "WHITE-HOUSE"
    }
   ]
  },
  "WHITE": {
   "word": "WHITE",
   "roles": [
    {
     "kind": "adjective",
     "of": "WHITE-HOUSE"
    },
    {
     "kind": "adjective",
     "of": "PEDESTAL"
    },
    {
     "kind": "adjective",
     "of": "WHITE-CLIFF"
    }
   ]
  },
  "BEAUTI": {
   "word": "BEAUTI",
   "roles": [
    {
     "kind": "adjective",
     "of": "WHITE-HOUSE"
    },
    {
     "kind": "adjective",
     "of": "PAINTING"
    },
    {
     "kind": "adjective",
     "of": "SCARAB"
    },
    {
     "kind": "adjective",
     "of": "BAUBLE"
    }
   ]
  },
  "COLONI": {
   "word": "COLONI",
   "roles": [
    {
     "kind": "adjective",
     "of": "WHITE-HOUSE"
    }
   ]
  },
  "FOREST": {
   "word": "FOREST",
   "roles": [
    {
     "kind": "noun",
     "of": "FOREST"
    },
    {
     "kind": "adjective",
     "of": "PATHOBJ"
    }
   ]
  },
  "TREES": {
   "word": "TREES",
   "roles": [
    {
     "kind": "noun",
     "of": "FOREST"
    }
   ]
  },
  "PINES": {
   "word": "PINES",
   "roles": [
    {
     "kind": "noun",
     "of": "FOREST"
    }
   ]
  },
  "HEMLOCKS": {
   "word": "HEMLOCKS",
   "roles": [
    {
     "kind": "noun",
     "of": "FOREST"
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
  "BRANCH": {
   "word": "BRANCH",
   "roles": [
    {
     "kind": "noun",
     "of": "TREE"
    }
   ]
  },
  "LARGE": {
   "word": "LARGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "TREE"
    },
    {
     "kind": "adjective",
     "of": "BOLT"
    },
    {
     "kind": "adjective",
     "of": "BOOK"
    },
    {
     "kind": "adjective",
     "of": "RUG"
    },
    {
     "kind": "adjective",
     "of": "EMERALD"
    },
    {
     "kind": "adjective",
     "of": "PUNCTURED-BOAT"
    },
    {
     "kind": "adjective",
     "of": "BAR"
    },
    {
     "kind": "adjective",
     "of": "ROPE"
    },
    {
     "kind": "adjective",
     "of": "LARGE-BAG"
    }
   ]
  },
  "STORM": {
   "word": "STORM",
   "roles": [
    {
     "kind": "adjective",
     "of": "TREE"
    }
   ]
  },
  "MOUNTAIN": {
   "word": "MOUNTAIN",
   "roles": [
    {
     "kind": "noun",
     "of": "MOUNTAIN-RANGE"
    }
   ]
  },
  "RANGE": {
   "word": "RANGE",
   "roles": [
    {
     "kind": "noun",
     "of": "MOUNTAIN-RANGE"
    }
   ]
  },
  "IMPASSABLE": {
   "word": "IMPASSABLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "MOUNTAIN-RANGE"
    }
   ]
  },
  "FLATHEAD": {
   "word": "FLATHEAD",
   "roles": [
    {
     "kind": "adjective",
     "of": "MOUNTAIN-RANGE"
    }
   ]
  },
  "WATER": {
   "word": "WATER",
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
  "LIQUID": {
   "word": "LIQUID",
   "roles": [
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
  "WINDOW": {
   "word": "WINDOW",
   "roles": [
    {
     "kind": "noun",
     "of": "KITCHEN-WINDOW"
    },
    {
     "kind": "noun",
     "of": "BOARDED-WINDOW"
    }
   ]
  },
  "KITCHEN": {
   "word": "KITCHEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "KITCHEN-WINDOW"
    },
    {
     "kind": "adjective",
     "of": "KITCHEN-TABLE"
    }
   ]
  },
  "SMALL": {
   "word": "SMALL",
   "roles": [
    {
     "kind": "adjective",
     "of": "KITCHEN-WINDOW"
    },
    {
     "kind": "adjective",
     "of": "BELL"
    },
    {
     "kind": "adjective",
     "of": "HOT-BELL"
    },
    {
     "kind": "adjective",
     "of": "BUBBLE"
    },
    {
     "kind": "adjective",
     "of": "PUMP"
    },
    {
     "kind": "adjective",
     "of": "ADVERTISEMENT"
    },
    {
     "kind": "adjective",
     "of": "MAILBOX"
    },
    {
     "kind": "adjective",
     "of": "GUNK"
    },
    {
     "kind": "adjective",
     "of": "COAL"
    },
    {
     "kind": "adjective",
     "of": "OWNERS-MANUAL"
    }
   ]
  },
  "CHIMNEY": {
   "word": "CHIMNEY",
   "roles": [
    {
     "kind": "noun",
     "of": "CHIMNEY"
    }
   ]
  },
  "DARK": {
   "word": "DARK",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHIMNEY"
    },
    {
     "kind": "adjective",
     "of": "STAIRS"
    }
   ]
  },
  "NARROW": {
   "word": "NARROW",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHIMNEY"
    },
    {
     "kind": "adjective",
     "of": "CRACK"
    },
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
  "GHOSTS": {
   "word": "GHOSTS",
   "roles": [
    {
     "kind": "noun",
     "of": "GHOSTS"
    }
   ]
  },
  "SPIRITS": {
   "word": "SPIRITS",
   "roles": [
    {
     "kind": "noun",
     "of": "GHOSTS"
    }
   ]
  },
  "FIENDS": {
   "word": "FIENDS",
   "roles": [
    {
     "kind": "noun",
     "of": "GHOSTS"
    }
   ]
  },
  "FORCE": {
   "word": "FORCE",
   "roles": [
    {
     "kind": "noun",
     "of": "GHOSTS"
    }
   ]
  },
  "INVISIBLE": {
   "word": "INVISIBLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "GHOSTS"
    }
   ]
  },
  "EVIL": {
   "word": "EVIL",
   "roles": [
    {
     "kind": "adjective",
     "of": "GHOSTS"
    }
   ]
  },
  "SKULL": {
   "word": "SKULL",
   "roles": [
    {
     "kind": "noun",
     "of": "SKULL"
    }
   ]
  },
  "HEAD": {
   "word": "HEAD",
   "roles": [
    {
     "kind": "noun",
     "of": "SKULL"
    }
   ]
  },
  "CRYSTAL": {
   "word": "CRYSTAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "SKULL"
    },
    {
     "kind": "adjective",
     "of": "TRIDENT"
    }
   ]
  },
  "CAGE": {
   "word": "CAGE",
   "roles": [
    {
     "kind": "noun",
     "of": "LOWERED-BASKET"
    },
    {
     "kind": "noun",
     "of": "RAISED-BASKET"
    }
   ]
  },
  "DUMBWAITER": {
   "word": "DUMBWAITER",
   "roles": [
    {
     "kind": "noun",
     "of": "LOWERED-BASKET"
    },
    {
     "kind": "noun",
     "of": "RAISED-BASKET"
    }
   ]
  },
  "BASKET": {
   "word": "BASKET",
   "roles": [
    {
     "kind": "noun",
     "of": "LOWERED-BASKET"
    },
    {
     "kind": "noun",
     "of": "RAISED-BASKET"
    }
   ]
  },
  "LOWERED": {
   "word": "LOWERED",
   "roles": [
    {
     "kind": "adjective",
     "of": "LOWERED-BASKET"
    }
   ]
  },
  "FOOD": {
   "word": "FOOD",
   "roles": [
    {
     "kind": "noun",
     "of": "LUNCH"
    }
   ]
  },
  "SANDWICH": {
   "word": "SANDWICH",
   "roles": [
    {
     "kind": "noun",
     "of": "LUNCH"
    }
   ]
  },
  "LUNCH": {
   "word": "LUNCH",
   "roles": [
    {
     "kind": "noun",
     "of": "LUNCH"
    }
   ]
  },
  "DINNER": {
   "word": "DINNER",
   "roles": [
    {
     "kind": "noun",
     "of": "LUNCH"
    }
   ]
  },
  "HOT": {
   "word": "HOT",
   "roles": [
    {
     "kind": "adjective",
     "of": "LUNCH"
    },
    {
     "kind": "adjective",
     "of": "HOT-BELL"
    }
   ]
  },
  "PEPPER": {
   "word": "PEPPER",
   "roles": [
    {
     "kind": "adjective",
     "of": "LUNCH"
    }
   ]
  },
  "BAT": {
   "word": "BAT",
   "roles": [
    {
     "kind": "noun",
     "of": "BAT"
    }
   ]
  },
  "VAMPIRE": {
   "word": "VAMPIRE",
   "roles": [
    {
     "kind": "noun",
     "of": "BAT"
    },
    {
     "kind": "adjective",
     "of": "BAT"
    }
   ]
  },
  "DERANGED": {
   "word": "DERANGED",
   "roles": [
    {
     "kind": "adjective",
     "of": "BAT"
    }
   ]
  },
  "BELL": {
   "word": "BELL",
   "roles": [
    {
     "kind": "noun",
     "of": "BELL"
    },
    {
     "kind": "noun",
     "of": "HOT-BELL"
    }
   ]
  },
  "BRASS": {
   "word": "BRASS",
   "roles": [
    {
     "kind": "adjective",
     "of": "BELL"
    },
    {
     "kind": "adjective",
     "of": "HOT-BELL"
    },
    {
     "kind": "adjective",
     "of": "LAMP"
    },
    {
     "kind": "adjective",
     "of": "BAUBLE"
    }
   ]
  },
  "RED": {
   "word": "RED",
   "roles": [
    {
     "kind": "adjective",
     "of": "HOT-BELL"
    },
    {
     "kind": "adjective",
     "of": "RED-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "BUOY"
    }
   ]
  },
  "AXE": {
   "word": "AXE",
   "roles": [
    {
     "kind": "noun",
     "of": "AXE"
    }
   ]
  },
  "AX": {
   "word": "AX",
   "roles": [
    {
     "kind": "noun",
     "of": "AXE"
    }
   ]
  },
  "BLOODY": {
   "word": "BLOODY",
   "roles": [
    {
     "kind": "adjective",
     "of": "AXE"
    }
   ]
  },
  "BOLT": {
   "word": "BOLT",
   "roles": [
    {
     "kind": "noun",
     "of": "BOLT"
    }
   ]
  },
  "NUT": {
   "word": "NUT",
   "roles": [
    {
     "kind": "noun",
     "of": "BOLT"
    }
   ]
  },
  "METAL": {
   "word": "METAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "BOLT"
    },
    {
     "kind": "adjective",
     "of": "SLIDE"
    }
   ]
  },
  "BUBBLE": {
   "word": "BUBBLE",
   "roles": [
    {
     "kind": "noun",
     "of": "BUBBLE"
    }
   ]
  },
  "GREEN": {
   "word": "GREEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "BUBBLE"
    }
   ]
  },
  "PLASTIC": {
   "word": "PLASTIC",
   "roles": [
    {
     "kind": "adjective",
     "of": "BUBBLE"
    },
    {
     "kind": "adjective",
     "of": "INFLATED-BOAT"
    },
    {
     "kind": "noun",
     "of": "PUNCTURED-BOAT"
    },
    {
     "kind": "adjective",
     "of": "PUNCTURED-BOAT"
    },
    {
     "kind": "noun",
     "of": "INFLATABLE-BOAT"
    },
    {
     "kind": "adjective",
     "of": "INFLATABLE-BOAT"
    }
   ]
  },
  "ALTAR": {
   "word": "ALTAR",
   "roles": [
    {
     "kind": "noun",
     "of": "ALTAR"
    }
   ]
  },
  "BOOK": {
   "word": "BOOK",
   "roles": [
    {
     "kind": "noun",
     "of": "BOOK"
    },
    {
     "kind": "noun",
     "of": "GUIDE"
    }
   ]
  },
  "PRAYER": {
   "word": "PRAYER",
   "roles": [
    {
     "kind": "noun",
     "of": "BOOK"
    },
    {
     "kind": "noun",
     "of": "PRAYER"
    }
   ]
  },
  "PAGE": {
   "word": "PAGE",
   "roles": [
    {
     "kind": "noun",
     "of": "BOOK"
    }
   ]
  },
  "BOOKS": {
   "word": "BOOKS",
   "roles": [
    {
     "kind": "noun",
     "of": "BOOK"
    },
    {
     "kind": "noun",
     "of": "GUIDE"
    }
   ]
  },
  "BLACK": {
   "word": "BLACK",
   "roles": [
    {
     "kind": "adjective",
     "of": "BOOK"
    }
   ]
  },
  "LAMP": {
   "word": "LAMP",
   "roles": [
    {
     "kind": "noun",
     "of": "BROKEN-LAMP"
    },
    {
     "kind": "noun",
     "of": "BURNED-OUT-LANTERN"
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
     "of": "BROKEN-LAMP"
    },
    {
     "kind": "noun",
     "of": "BURNED-OUT-LANTERN"
    },
    {
     "kind": "noun",
     "of": "LAMP"
    }
   ]
  },
  "BROKEN": {
   "word": "BROKEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "BROKEN-LAMP"
    },
    {
     "kind": "adjective",
     "of": "TIMBERS"
    },
    {
     "kind": "adjective",
     "of": "BROKEN-EGG"
    },
    {
     "kind": "adjective",
     "of": "BROKEN-CANARY"
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
  "SCEPTER": {
   "word": "SCEPTER",
   "roles": [
    {
     "kind": "noun",
     "of": "SCEPTRE"
    }
   ]
  },
  "SHARP": {
   "word": "SHARP",
   "roles": [
    {
     "kind": "adjective",
     "of": "SCEPTRE"
    }
   ]
  },
  "EGYPTIAN": {
   "word": "EGYPTIAN",
   "roles": [
    {
     "kind": "adjective",
     "of": "SCEPTRE"
    }
   ]
  },
  "ANCIENT": {
   "word": "ANCIENT",
   "roles": [
    {
     "kind": "adjective",
     "of": "SCEPTRE"
    },
    {
     "kind": "adjective",
     "of": "PRAYER"
    },
    {
     "kind": "adjective",
     "of": "MAP"
    },
    {
     "kind": "adjective",
     "of": "ENGRAVINGS"
    }
   ]
  },
  "ENAMELED": {
   "word": "ENAMELED",
   "roles": [
    {
     "kind": "adjective",
     "of": "SCEPTRE"
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
  "PILE": {
   "word": "PILE",
   "roles": [
    {
     "kind": "noun",
     "of": "TIMBERS"
    },
    {
     "kind": "noun",
     "of": "BODIES"
    },
    {
     "kind": "noun",
     "of": "LEAVES"
    },
    {
     "kind": "noun",
     "of": "PUNCTURED-BOAT"
    },
    {
     "kind": "noun",
     "of": "INFLATABLE-BOAT"
    },
    {
     "kind": "noun",
     "of": "COAL"
    }
   ]
  },
  "WOODEN": {
   "word": "WOODEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "TIMBERS"
    },
    {
     "kind": "adjective",
     "of": "RAILING"
    },
    {
     "kind": "adjective",
     "of": "LADDER"
    },
    {
     "kind": "adjective",
     "of": "WOODEN-DOOR"
    }
   ]
  },
  "CHUTE": {
   "word": "CHUTE",
   "roles": [
    {
     "kind": "noun",
     "of": "SLIDE"
    }
   ]
  },
  "RAMP": {
   "word": "RAMP",
   "roles": [
    {
     "kind": "noun",
     "of": "SLIDE"
    }
   ]
  },
  "STEEP": {
   "word": "STEEP",
   "roles": [
    {
     "kind": "adjective",
     "of": "SLIDE"
    },
    {
     "kind": "adjective",
     "of": "STAIRS"
    }
   ]
  },
  "TWISTING": {
   "word": "TWISTING",
   "roles": [
    {
     "kind": "adjective",
     "of": "SLIDE"
    }
   ]
  },
  "TABLE": {
   "word": "TABLE",
   "roles": [
    {
     "kind": "noun",
     "of": "KITCHEN-TABLE"
    },
    {
     "kind": "noun",
     "of": "ATTIC-TABLE"
    }
   ]
  },
  "BAG": {
   "word": "BAG",
   "roles": [
    {
     "kind": "noun",
     "of": "SANDWICH-BAG"
    },
    {
     "kind": "noun",
     "of": "BAG-OF-COINS"
    },
    {
     "kind": "noun",
     "of": "LARGE-BAG"
    }
   ]
  },
  "SACK": {
   "word": "SACK",
   "roles": [
    {
     "kind": "noun",
     "of": "SANDWICH-BAG"
    }
   ]
  },
  "BROWN": {
   "word": "BROWN",
   "roles": [
    {
     "kind": "adjective",
     "of": "SANDWICH-BAG"
    },
    {
     "kind": "adjective",
     "of": "BROWN-BUTTON"
    }
   ]
  },
  "ELONGATED": {
   "word": "ELONGATED",
   "roles": [
    {
     "kind": "adjective",
     "of": "SANDWICH-BAG"
    }
   ]
  },
  "SMELLY": {
   "word": "SMELLY",
   "roles": [
    {
     "kind": "adjective",
     "of": "SANDWICH-BAG"
    }
   ]
  },
  "CHEST": {
   "word": "CHEST",
   "roles": [
    {
     "kind": "noun",
     "of": "TOOL-CHEST"
    },
    {
     "kind": "noun",
     "of": "TRUNK"
    }
   ]
  },
  "CHESTS": {
   "word": "CHESTS",
   "roles": [
    {
     "kind": "noun",
     "of": "TOOL-CHEST"
    }
   ]
  },
  "GROUP": {
   "word": "GROUP",
   "roles": [
    {
     "kind": "noun",
     "of": "TOOL-CHEST"
    }
   ]
  },
  "TOOLCHESTS": {
   "word": "TOOLCHESTS",
   "roles": [
    {
     "kind": "noun",
     "of": "TOOL-CHEST"
    }
   ]
  },
  "TOOL": {
   "word": "TOOL",
   "roles": [
    {
     "kind": "adjective",
     "of": "TOOL-CHEST"
    },
    {
     "kind": "noun",
     "of": "PUMP"
    },
    {
     "kind": "noun",
     "of": "SCREWDRIVER"
    },
    {
     "kind": "noun",
     "of": "SHOVEL"
    },
    {
     "kind": "noun",
     "of": "WRENCH"
    }
   ]
  },
  "BUTTON": {
   "word": "BUTTON",
   "roles": [
    {
     "kind": "noun",
     "of": "YELLOW-BUTTON"
    },
    {
     "kind": "noun",
     "of": "BROWN-BUTTON"
    },
    {
     "kind": "noun",
     "of": "RED-BUTTON"
    },
    {
     "kind": "noun",
     "of": "BLUE-BUTTON"
    }
   ]
  },
  "SWITCH": {
   "word": "SWITCH",
   "roles": [
    {
     "kind": "noun",
     "of": "YELLOW-BUTTON"
    },
    {
     "kind": "noun",
     "of": "BROWN-BUTTON"
    },
    {
     "kind": "noun",
     "of": "RED-BUTTON"
    },
    {
     "kind": "noun",
     "of": "BLUE-BUTTON"
    },
    {
     "kind": "noun",
     "of": "MACHINE-SWITCH"
    }
   ]
  },
  "YELLOW": {
   "word": "YELLOW",
   "roles": [
    {
     "kind": "adjective",
     "of": "YELLOW-BUTTON"
    }
   ]
  },
  "BLUE": {
   "word": "BLUE",
   "roles": [
    {
     "kind": "adjective",
     "of": "BLUE-BUTTON"
    }
   ]
  },
  "CASE": {
   "word": "CASE",
   "roles": [
    {
     "kind": "noun",
     "of": "TROPHY-CASE"
    }
   ]
  },
  "TROPHY": {
   "word": "TROPHY",
   "roles": [
    {
     "kind": "adjective",
     "of": "TROPHY-CASE"
    }
   ]
  },
  "RUG": {
   "word": "RUG",
   "roles": [
    {
     "kind": "noun",
     "of": "RUG"
    }
   ]
  },
  "CARPET": {
   "word": "CARPET",
   "roles": [
    {
     "kind": "noun",
     "of": "RUG"
    }
   ]
  },
  "ORIENTAL": {
   "word": "ORIENTAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "RUG"
    }
   ]
  },
  "CHALICE": {
   "word": "CHALICE",
   "roles": [
    {
     "kind": "noun",
     "of": "CHALICE"
    }
   ]
  },
  "CUP": {
   "word": "CUP",
   "roles": [
    {
     "kind": "noun",
     "of": "CHALICE"
    }
   ]
  },
  "SILVER": {
   "word": "SILVER",
   "roles": [
    {
     "kind": "noun",
     "of": "CHALICE"
    },
    {
     "kind": "adjective",
     "of": "CHALICE"
    }
   ]
  },
  "ENGRAVINGS": {
   "word": "ENGRAVINGS",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHALICE"
    },
    {
     "kind": "noun",
     "of": "ENGRAVINGS"
    }
   ]
  },
  "GARLIC": {
   "word": "GARLIC",
   "roles": [
    {
     "kind": "noun",
     "of": "GARLIC"
    }
   ]
  },
  "CLOVE": {
   "word": "CLOVE",
   "roles": [
    {
     "kind": "noun",
     "of": "GARLIC"
    }
   ]
  },
  "TRIDENT": {
   "word": "TRIDENT",
   "roles": [
    {
     "kind": "noun",
     "of": "TRIDENT"
    }
   ]
  },
  "FORK": {
   "word": "FORK",
   "roles": [
    {
     "kind": "noun",
     "of": "TRIDENT"
    }
   ]
  },
  "POSEIDON": {
   "word": "POSEIDON",
   "roles": [
    {
     "kind": "adjective",
     "of": "TRIDENT"
    }
   ]
  },
  "OWN": {
   "word": "OWN",
   "roles": [
    {
     "kind": "adjective",
     "of": "TRIDENT"
    }
   ]
  },
  "CYCLOPS": {
   "word": "CYCLOPS",
   "roles": [
    {
     "kind": "noun",
     "of": "CYCLOPS"
    }
   ]
  },
  "MONSTER": {
   "word": "MONSTER",
   "roles": [
    {
     "kind": "noun",
     "of": "CYCLOPS"
    }
   ]
  },
  "EYE": {
   "word": "EYE",
   "roles": [
    {
     "kind": "noun",
     "of": "CYCLOPS"
    }
   ]
  },
  "HUNGRY": {
   "word": "HUNGRY",
   "roles": [
    {
     "kind": "adjective",
     "of": "CYCLOPS"
    },
    {
     "kind": "adjective",
     "of": "GRUE"
    }
   ]
  },
  "GIANT": {
   "word": "GIANT",
   "roles": [
    {
     "kind": "adjective",
     "of": "CYCLOPS"
    }
   ]
  },
  "DAM": {
   "word": "DAM",
   "roles": [
    {
     "kind": "noun",
     "of": "DAM"
    }
   ]
  },
  "GATE": {
   "word": "GATE",
   "roles": [
    {
     "kind": "noun",
     "of": "DAM"
    }
   ]
  },
  "GATES": {
   "word": "GATES",
   "roles": [
    {
     "kind": "noun",
     "of": "DAM"
    }
   ]
  },
  "FCD#3": {
   "word": "FCD#3",
   "roles": [
    {
     "kind": "noun",
     "of": "DAM"
    }
   ]
  },
  "DOOR": {
   "word": "DOOR",
   "roles": [
    {
     "kind": "noun",
     "of": "TRAP-DOOR"
    },
    {
     "kind": "noun",
     "of": "FRONT-DOOR"
    },
    {
     "kind": "noun",
     "of": "BARROW-DOOR"
    },
    {
     "kind": "noun",
     "of": "WOODEN-DOOR"
    }
   ]
  },
  "TRAPDOOR": {
   "word": "TRAPDOOR",
   "roles": [
    {
     "kind": "noun",
     "of": "TRAP-DOOR"
    }
   ]
  },
  "TRAP-DOOR": {
   "word": "TRAP-DOOR",
   "roles": [
    {
     "kind": "noun",
     "of": "TRAP-DOOR"
    }
   ]
  },
  "COVER": {
   "word": "COVER",
   "roles": [
    {
     "kind": "noun",
     "of": "TRAP-DOOR"
    }
   ]
  },
  "TRAP": {
   "word": "TRAP",
   "roles": [
    {
     "kind": "adjective",
     "of": "TRAP-DOOR"
    }
   ]
  },
  "DUSTY": {
   "word": "DUSTY",
   "roles": [
    {
     "kind": "adjective",
     "of": "TRAP-DOOR"
    }
   ]
  },
  "BOARDED": {
   "word": "BOARDED",
   "roles": [
    {
     "kind": "adjective",
     "of": "BOARDED-WINDOW"
    },
    {
     "kind": "adjective",
     "of": "FRONT-DOOR"
    }
   ]
  },
  "FRONT": {
   "word": "FRONT",
   "roles": [
    {
     "kind": "adjective",
     "of": "FRONT-DOOR"
    }
   ]
  },
  "HUGE": {
   "word": "HUGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "BARROW-DOOR"
    },
    {
     "kind": "adjective",
     "of": "DIAMOND"
    }
   ]
  },
  "STONE": {
   "word": "STONE",
   "roles": [
    {
     "kind": "adjective",
     "of": "BARROW-DOOR"
    },
    {
     "kind": "adjective",
     "of": "BARROW"
    },
    {
     "kind": "adjective",
     "of": "STAIRS"
    }
   ]
  },
  "BARROW": {
   "word": "BARROW",
   "roles": [
    {
     "kind": "noun",
     "of": "BARROW"
    }
   ]
  },
  "TOMB": {
   "word": "TOMB",
   "roles": [
    {
     "kind": "noun",
     "of": "BARROW"
    }
   ]
  },
  "MASSIVE": {
   "word": "MASSIVE",
   "roles": [
    {
     "kind": "adjective",
     "of": "BARROW"
    }
   ]
  },
  "BOTTLE": {
   "word": "BOTTLE",
   "roles": [
    {
     "kind": "noun",
     "of": "BOTTLE"
    }
   ]
  },
  "CONTAINER": {
   "word": "CONTAINER",
   "roles": [
    {
     "kind": "noun",
     "of": "BOTTLE"
    }
   ]
  },
  "CLEAR": {
   "word": "CLEAR",
   "roles": [
    {
     "kind": "adjective",
     "of": "BOTTLE"
    }
   ]
  },
  "GLASS": {
   "word": "GLASS",
   "roles": [
    {
     "kind": "adjective",
     "of": "BOTTLE"
    }
   ]
  },
  "CRACK": {
   "word": "CRACK",
   "roles": [
    {
     "kind": "noun",
     "of": "CRACK"
    }
   ]
  },
  "COFFIN": {
   "word": "COFFIN",
   "roles": [
    {
     "kind": "noun",
     "of": "COFFIN"
    }
   ]
  },
  "CASKET": {
   "word": "CASKET",
   "roles": [
    {
     "kind": "noun",
     "of": "COFFIN"
    }
   ]
  },
  "SOLID": {
   "word": "SOLID",
   "roles": [
    {
     "kind": "adjective",
     "of": "COFFIN"
    }
   ]
  },
  "GOLD": {
   "word": "GOLD",
   "roles": [
    {
     "kind": "adjective",
     "of": "COFFIN"
    },
    {
     "kind": "noun",
     "of": "POT-OF-GOLD"
    },
    {
     "kind": "adjective",
     "of": "POT-OF-GOLD"
    },
    {
     "kind": "adjective",
     "of": "CANARY"
    },
    {
     "kind": "adjective",
     "of": "BROKEN-CANARY"
    }
   ]
  },
  "GRATE": {
   "word": "GRATE",
   "roles": [
    {
     "kind": "noun",
     "of": "GRATE"
    }
   ]
  },
  "GRATING": {
   "word": "GRATING",
   "roles": [
    {
     "kind": "noun",
     "of": "GRATE"
    }
   ]
  },
  "AIR-PUMP": {
   "word": "AIR-PUMP",
   "roles": [
    {
     "kind": "noun",
     "of": "PUMP"
    }
   ]
  },
  "TOOLS": {
   "word": "TOOLS",
   "roles": [
    {
     "kind": "noun",
     "of": "PUMP"
    },
    {
     "kind": "noun",
     "of": "SCREWDRIVER"
    },
    {
     "kind": "noun",
     "of": "SHOVEL"
    },
    {
     "kind": "noun",
     "of": "WRENCH"
    }
   ]
  },
  "HAND-HELD": {
   "word": "HAND-HELD",
   "roles": [
    {
     "kind": "adjective",
     "of": "PUMP"
    }
   ]
  },
  "DIAMOND": {
   "word": "DIAMOND",
   "roles": [
    {
     "kind": "noun",
     "of": "DIAMOND"
    }
   ]
  },
  "ENORMOUS": {
   "word": "ENORMOUS",
   "roles": [
    {
     "kind": "adjective",
     "of": "DIAMOND"
    },
    {
     "kind": "noun",
     "of": "MIRROR-2"
    },
    {
     "kind": "noun",
     "of": "MIRROR-1"
    }
   ]
  },
  "FIGURINE": {
   "word": "FIGURINE",
   "roles": [
    {
     "kind": "noun",
     "of": "JADE"
    }
   ]
  },
  "EXQUISITE": {
   "word": "EXQUISITE",
   "roles": [
    {
     "kind": "adjective",
     "of": "JADE"
    }
   ]
  },
  "JADE": {
   "word": "JADE",
   "roles": [
    {
     "kind": "adjective",
     "of": "JADE"
    }
   ]
  },
  "KNIVES": {
   "word": "KNIVES",
   "roles": [
    {
     "kind": "noun",
     "of": "KNIFE"
    },
    {
     "kind": "noun",
     "of": "RUSTY-KNIFE"
    }
   ]
  },
  "KNIFE": {
   "word": "KNIFE",
   "roles": [
    {
     "kind": "noun",
     "of": "KNIFE"
    },
    {
     "kind": "noun",
     "of": "RUSTY-KNIFE"
    }
   ]
  },
  "BLADE": {
   "word": "BLADE",
   "roles": [
    {
     "kind": "noun",
     "of": "KNIFE"
    },
    {
     "kind": "noun",
     "of": "SWORD"
    }
   ]
  },
  "NASTY": {
   "word": "NASTY",
   "roles": [
    {
     "kind": "adjective",
     "of": "KNIFE"
    },
    {
     "kind": "adjective",
     "of": "TROLL"
    }
   ]
  },
  "UNRUSTY": {
   "word": "UNRUSTY",
   "roles": [
    {
     "kind": "adjective",
     "of": "KNIFE"
    }
   ]
  },
  "BONES": {
   "word": "BONES",
   "roles": [
    {
     "kind": "noun",
     "of": "BONES"
    }
   ]
  },
  "SKELETON": {
   "word": "SKELETON",
   "roles": [
    {
     "kind": "noun",
     "of": "BONES"
    },
    {
     "kind": "adjective",
     "of": "KEYS"
    }
   ]
  },
  "BODY": {
   "word": "BODY",
   "roles": [
    {
     "kind": "noun",
     "of": "BONES"
    },
    {
     "kind": "noun",
     "of": "BODIES"
    }
   ]
  },
  "RUSTY": {
   "word": "RUSTY",
   "roles": [
    {
     "kind": "adjective",
     "of": "BURNED-OUT-LANTERN"
    },
    {
     "kind": "adjective",
     "of": "RUSTY-KNIFE"
    }
   ]
  },
  "BURNED": {
   "word": "BURNED",
   "roles": [
    {
     "kind": "adjective",
     "of": "BURNED-OUT-LANTERN"
    }
   ]
  },
  "DEAD": {
   "word": "DEAD",
   "roles": [
    {
     "kind": "adjective",
     "of": "BURNED-OUT-LANTERN"
    }
   ]
  },
  "USELESS": {
   "word": "USELESS",
   "roles": [
    {
     "kind": "adjective",
     "of": "BURNED-OUT-LANTERN"
    }
   ]
  },
  "COINS": {
   "word": "COINS",
   "roles": [
    {
     "kind": "noun",
     "of": "BAG-OF-COINS"
    }
   ]
  },
  "OLD": {
   "word": "OLD",
   "roles": [
    {
     "kind": "adjective",
     "of": "BAG-OF-COINS"
    },
    {
     "kind": "adjective",
     "of": "PRAYER"
    },
    {
     "kind": "adjective",
     "of": "SWORD"
    },
    {
     "kind": "adjective",
     "of": "MAP"
    },
    {
     "kind": "adjective",
     "of": "TRUNK"
    },
    {
     "kind": "adjective",
     "of": "ENGRAVINGS"
    }
   ]
  },
  "LEATHER": {
   "word": "LEATHER",
   "roles": [
    {
     "kind": "adjective",
     "of": "BAG-OF-COINS"
    }
   ]
  },
  "EMERALD": {
   "word": "EMERALD",
   "roles": [
    {
     "kind": "noun",
     "of": "EMERALD"
    }
   ]
  },
  "ADVERTISEMENT": {
   "word": "ADVERTISEMENT",
   "roles": [
    {
     "kind": "noun",
     "of": "ADVERTISEMENT"
    }
   ]
  },
  "LEAFLET": {
   "word": "LEAFLET",
   "roles": [
    {
     "kind": "noun",
     "of": "ADVERTISEMENT"
    }
   ]
  },
  "BOOKLET": {
   "word": "BOOKLET",
   "roles": [
    {
     "kind": "noun",
     "of": "ADVERTISEMENT"
    }
   ]
  },
  "MAIL": {
   "word": "MAIL",
   "roles": [
    {
     "kind": "noun",
     "of": "ADVERTISEMENT"
    }
   ]
  },
  "LEAK": {
   "word": "LEAK",
   "roles": [
    {
     "kind": "noun",
     "of": "LEAK"
    }
   ]
  },
  "DRIP": {
   "word": "DRIP",
   "roles": [
    {
     "kind": "noun",
     "of": "LEAK"
    }
   ]
  },
  "PIPE": {
   "word": "PIPE",
   "roles": [
    {
     "kind": "noun",
     "of": "LEAK"
    }
   ]
  },
  "MACHINE": {
   "word": "MACHINE",
   "roles": [
    {
     "kind": "noun",
     "of": "MACHINE"
    }
   ]
  },
  "PDP10": {
   "word": "PDP10",
   "roles": [
    {
     "kind": "noun",
     "of": "MACHINE"
    }
   ]
  },
  "DRYER": {
   "word": "DRYER",
   "roles": [
    {
     "kind": "noun",
     "of": "MACHINE"
    }
   ]
  },
  "LID": {
   "word": "LID",
   "roles": [
    {
     "kind": "noun",
     "of": "MACHINE"
    }
   ]
  },
  "BOAT": {
   "word": "BOAT",
   "roles": [
    {
     "kind": "noun",
     "of": "INFLATED-BOAT"
    },
    {
     "kind": "noun",
     "of": "PUNCTURED-BOAT"
    },
    {
     "kind": "noun",
     "of": "INFLATABLE-BOAT"
    }
   ]
  },
  "RAFT": {
   "word": "RAFT",
   "roles": [
    {
     "kind": "noun",
     "of": "INFLATED-BOAT"
    }
   ]
  },
  "MAGIC": {
   "word": "MAGIC",
   "roles": [
    {
     "kind": "adjective",
     "of": "INFLATED-BOAT"
    }
   ]
  },
  "SEAWORTHY": {
   "word": "SEAWORTHY",
   "roles": [
    {
     "kind": "adjective",
     "of": "INFLATED-BOAT"
    }
   ]
  },
  "MAILBOX": {
   "word": "MAILBOX",
   "roles": [
    {
     "kind": "noun",
     "of": "MAILBOX"
    }
   ]
  },
  "BOX": {
   "word": "BOX",
   "roles": [
    {
     "kind": "noun",
     "of": "MAILBOX"
    }
   ]
  },
  "MATCH": {
   "word": "MATCH",
   "roles": [
    {
     "kind": "noun",
     "of": "MATCH"
    },
    {
     "kind": "adjective",
     "of": "MATCH"
    }
   ]
  },
  "MATCHES": {
   "word": "MATCHES",
   "roles": [
    {
     "kind": "noun",
     "of": "MATCH"
    }
   ]
  },
  "MATCHBOOK": {
   "word": "MATCHBOOK",
   "roles": [
    {
     "kind": "noun",
     "of": "MATCH"
    }
   ]
  },
  "REFLECTION": {
   "word": "REFLECTION",
   "roles": [
    {
     "kind": "noun",
     "of": "MIRROR-2"
    },
    {
     "kind": "noun",
     "of": "MIRROR-1"
    }
   ]
  },
  "MIRROR": {
   "word": "MIRROR",
   "roles": [
    {
     "kind": "noun",
     "of": "MIRROR-2"
    },
    {
     "kind": "noun",
     "of": "MIRROR-1"
    }
   ]
  },
  "PAINTING": {
   "word": "PAINTING",
   "roles": [
    {
     "kind": "noun",
     "of": "PAINTING"
    }
   ]
  },
  "ART": {
   "word": "ART",
   "roles": [
    {
     "kind": "noun",
     "of": "PAINTING"
    }
   ]
  },
  "CANVAS": {
   "word": "CANVAS",
   "roles": [
    {
     "kind": "noun",
     "of": "PAINTING"
    }
   ]
  },
  "CANDLES": {
   "word": "CANDLES",
   "roles": [
    {
     "kind": "noun",
     "of": "CANDLES"
    }
   ]
  },
  "PAIR": {
   "word": "PAIR",
   "roles": [
    {
     "kind": "noun",
     "of": "CANDLES"
    },
    {
     "kind": "noun",
     "of": "HANDS"
    }
   ]
  },
  "BURNING": {
   "word": "BURNING",
   "roles": [
    {
     "kind": "adjective",
     "of": "CANDLES"
    }
   ]
  },
  "GUNK": {
   "word": "GUNK",
   "roles": [
    {
     "kind": "noun",
     "of": "GUNK"
    },
    {
     "kind": "noun",
     "of": "PUTTY"
    }
   ]
  },
  "PIECE": {
   "word": "PIECE",
   "roles": [
    {
     "kind": "noun",
     "of": "GUNK"
    },
    {
     "kind": "noun",
     "of": "OWNERS-MANUAL"
    }
   ]
  },
  "SLAG": {
   "word": "SLAG",
   "roles": [
    {
     "kind": "noun",
     "of": "GUNK"
    }
   ]
  },
  "VITREOUS": {
   "word": "VITREOUS",
   "roles": [
    {
     "kind": "adjective",
     "of": "GUNK"
    }
   ]
  },
  "BODIES": {
   "word": "BODIES",
   "roles": [
    {
     "kind": "noun",
     "of": "BODIES"
    }
   ]
  },
  "REMAINS": {
   "word": "REMAINS",
   "roles": [
    {
     "kind": "noun",
     "of": "BODIES"
    }
   ]
  },
  "MANGLED": {
   "word": "MANGLED",
   "roles": [
    {
     "kind": "adjective",
     "of": "BODIES"
    }
   ]
  },
  "LEAVES": {
   "word": "LEAVES",
   "roles": [
    {
     "kind": "noun",
     "of": "LEAVES"
    }
   ]
  },
  "LEAF": {
   "word": "LEAF",
   "roles": [
    {
     "kind": "noun",
     "of": "LEAVES"
    }
   ]
  },
  "VALVE": {
   "word": "VALVE",
   "roles": [
    {
     "kind": "noun",
     "of": "INFLATABLE-BOAT"
    }
   ]
  },
  "BAR": {
   "word": "BAR",
   "roles": [
    {
     "kind": "noun",
     "of": "BAR"
    }
   ]
  },
  "PLATINUM": {
   "word": "PLATINUM",
   "roles": [
    {
     "kind": "noun",
     "of": "BAR"
    },
    {
     "kind": "adjective",
     "of": "BAR"
    }
   ]
  },
  "POT": {
   "word": "POT",
   "roles": [
    {
     "kind": "noun",
     "of": "POT-OF-GOLD"
    }
   ]
  },
  "INSCRIPTION": {
   "word": "INSCRIPTION",
   "roles": [
    {
     "kind": "noun",
     "of": "PRAYER"
    },
    {
     "kind": "noun",
     "of": "ENGRAVINGS"
    }
   ]
  },
  "RAILING": {
   "word": "RAILING",
   "roles": [
    {
     "kind": "noun",
     "of": "RAILING"
    }
   ]
  },
  "RAIL": {
   "word": "RAIL",
   "roles": [
    {
     "kind": "noun",
     "of": "RAILING"
    }
   ]
  },
  "RAINBOW": {
   "word": "RAINBOW",
   "roles": [
    {
     "kind": "noun",
     "of": "RAINBOW"
    }
   ]
  },
  "RIVER": {
   "word": "RIVER",
   "roles": [
    {
     "kind": "noun",
     "of": "RIVER"
    }
   ]
  },
  "FRIGID": {
   "word": "FRIGID",
   "roles": [
    {
     "kind": "adjective",
     "of": "RIVER"
    }
   ]
  },
  "BUOY": {
   "word": "BUOY",
   "roles": [
    {
     "kind": "noun",
     "of": "BUOY"
    }
   ]
  },
  "ROPE": {
   "word": "ROPE",
   "roles": [
    {
     "kind": "noun",
     "of": "ROPE"
    }
   ]
  },
  "HEMP": {
   "word": "HEMP",
   "roles": [
    {
     "kind": "noun",
     "of": "ROPE"
    }
   ]
  },
  "COIL": {
   "word": "COIL",
   "roles": [
    {
     "kind": "noun",
     "of": "ROPE"
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
  "BRACELET": {
   "word": "BRACELET",
   "roles": [
    {
     "kind": "noun",
     "of": "BRACELET"
    }
   ]
  },
  "JEWEL": {
   "word": "JEWEL",
   "roles": [
    {
     "kind": "noun",
     "of": "BRACELET"
    },
    {
     "kind": "adjective",
     "of": "BROKEN-EGG"
    }
   ]
  },
  "SAPPHIRE": {
   "word": "SAPPHIRE",
   "roles": [
    {
     "kind": "noun",
     "of": "BRACELET"
    },
    {
     "kind": "adjective",
     "of": "BRACELET"
    }
   ]
  },
  "SCREWDRIVER": {
   "word": "SCREWDRIVER",
   "roles": [
    {
     "kind": "noun",
     "of": "SCREWDRIVER"
    }
   ]
  },
  "DRIVER": {
   "word": "DRIVER",
   "roles": [
    {
     "kind": "noun",
     "of": "SCREWDRIVER"
    }
   ]
  },
  "SCREW": {
   "word": "SCREW",
   "roles": [
    {
     "kind": "adjective",
     "of": "SCREWDRIVER"
    }
   ]
  },
  "KEY": {
   "word": "KEY",
   "roles": [
    {
     "kind": "noun",
     "of": "KEYS"
    }
   ]
  },
  "SHOVEL": {
   "word": "SHOVEL",
   "roles": [
    {
     "kind": "noun",
     "of": "SHOVEL"
    }
   ]
  },
  "COAL": {
   "word": "COAL",
   "roles": [
    {
     "kind": "noun",
     "of": "COAL"
    }
   ]
  },
  "HEAP": {
   "word": "HEAP",
   "roles": [
    {
     "kind": "noun",
     "of": "COAL"
    }
   ]
  },
  "LADDER": {
   "word": "LADDER",
   "roles": [
    {
     "kind": "noun",
     "of": "LADDER"
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
  "SCARAB": {
   "word": "SCARAB",
   "roles": [
    {
     "kind": "noun",
     "of": "SCARAB"
    }
   ]
  },
  "BEETLE": {
   "word": "BEETLE",
   "roles": [
    {
     "kind": "noun",
     "of": "SCARAB"
    }
   ]
  },
  "CARVED": {
   "word": "CARVED",
   "roles": [
    {
     "kind": "adjective",
     "of": "SCARAB"
    }
   ]
  },
  "JEWELED": {
   "word": "JEWELED",
   "roles": [
    {
     "kind": "adjective",
     "of": "SCARAB"
    },
    {
     "kind": "adjective",
     "of": "EGG"
    }
   ]
  },
  "THIEFS": {
   "word": "THIEFS",
   "roles": [
    {
     "kind": "adjective",
     "of": "LARGE-BAG"
    }
   ]
  },
  "STILETTO": {
   "word": "STILETTO",
   "roles": [
    {
     "kind": "noun",
     "of": "STILETTO"
    }
   ]
  },
  "VICIOUS": {
   "word": "VICIOUS",
   "roles": [
    {
     "kind": "adjective",
     "of": "STILETTO"
    }
   ]
  },
  "LETTERING": {
   "word": "LETTERING",
   "roles": [
    {
     "kind": "noun",
     "of": "WOODEN-DOOR"
    }
   ]
  },
  "WRITING": {
   "word": "WRITING",
   "roles": [
    {
     "kind": "noun",
     "of": "WOODEN-DOOR"
    }
   ]
  },
  "GOTHIC": {
   "word": "GOTHIC",
   "roles": [
    {
     "kind": "adjective",
     "of": "WOODEN-DOOR"
    }
   ]
  },
  "STRANGE": {
   "word": "STRANGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "WOODEN-DOOR"
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
  "ELVISH": {
   "word": "ELVISH",
   "roles": [
    {
     "kind": "adjective",
     "of": "SWORD"
    }
   ]
  },
  "ANTIQUE": {
   "word": "ANTIQUE",
   "roles": [
    {
     "kind": "adjective",
     "of": "SWORD"
    },
    {
     "kind": "adjective",
     "of": "MAP"
    }
   ]
  },
  "PARCHMENT": {
   "word": "PARCHMENT",
   "roles": [
    {
     "kind": "noun",
     "of": "MAP"
    }
   ]
  },
  "MAP": {
   "word": "MAP",
   "roles": [
    {
     "kind": "noun",
     "of": "MAP"
    }
   ]
  },
  "LABEL": {
   "word": "LABEL",
   "roles": [
    {
     "kind": "noun",
     "of": "BOAT-LABEL"
    }
   ]
  },
  "FINEPRINT": {
   "word": "FINEPRINT",
   "roles": [
    {
     "kind": "noun",
     "of": "BOAT-LABEL"
    }
   ]
  },
  "PRINT": {
   "word": "PRINT",
   "roles": [
    {
     "kind": "noun",
     "of": "BOAT-LABEL"
    }
   ]
  },
  "TAN": {
   "word": "TAN",
   "roles": [
    {
     "kind": "adjective",
     "of": "BOAT-LABEL"
    }
   ]
  },
  "FINE": {
   "word": "FINE",
   "roles": [
    {
     "kind": "adjective",
     "of": "BOAT-LABEL"
    }
   ]
  },
  "THIEF": {
   "word": "THIEF",
   "roles": [
    {
     "kind": "noun",
     "of": "THIEF"
    }
   ]
  },
  "ROBBER": {
   "word": "ROBBER",
   "roles": [
    {
     "kind": "noun",
     "of": "THIEF"
    }
   ]
  },
  "MAN": {
   "word": "MAN",
   "roles": [
    {
     "kind": "noun",
     "of": "THIEF"
    }
   ]
  },
  "PERSON": {
   "word": "PERSON",
   "roles": [
    {
     "kind": "noun",
     "of": "THIEF"
    }
   ]
  },
  "SHADY": {
   "word": "SHADY",
   "roles": [
    {
     "kind": "adjective",
     "of": "THIEF"
    }
   ]
  },
  "SUSPICIOUS": {
   "word": "SUSPICIOUS",
   "roles": [
    {
     "kind": "adjective",
     "of": "THIEF"
    }
   ]
  },
  "SEEDY": {
   "word": "SEEDY",
   "roles": [
    {
     "kind": "adjective",
     "of": "THIEF"
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
  "MARBLE": {
   "word": "MARBLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "PEDESTAL"
    },
    {
     "kind": "adjective",
     "of": "STAIRS"
    }
   ]
  },
  "TORCH": {
   "word": "TORCH",
   "roles": [
    {
     "kind": "noun",
     "of": "TORCH"
    }
   ]
  },
  "IVORY": {
   "word": "IVORY",
   "roles": [
    {
     "kind": "noun",
     "of": "TORCH"
    },
    {
     "kind": "adjective",
     "of": "TORCH"
    }
   ]
  },
  "FLAMING": {
   "word": "FLAMING",
   "roles": [
    {
     "kind": "adjective",
     "of": "TORCH"
    }
   ]
  },
  "GUIDE": {
   "word": "GUIDE",
   "roles": [
    {
     "kind": "noun",
     "of": "GUIDE"
    },
    {
     "kind": "adjective",
     "of": "GUIDE"
    }
   ]
  },
  "GUIDEBOOKS": {
   "word": "GUIDEBOOKS",
   "roles": [
    {
     "kind": "noun",
     "of": "GUIDE"
    }
   ]
  },
  "TOUR": {
   "word": "TOUR",
   "roles": [
    {
     "kind": "adjective",
     "of": "GUIDE"
    }
   ]
  },
  "TROLL": {
   "word": "TROLL",
   "roles": [
    {
     "kind": "noun",
     "of": "TROLL"
    }
   ]
  },
  "TRUNK": {
   "word": "TRUNK",
   "roles": [
    {
     "kind": "noun",
     "of": "TRUNK"
    }
   ]
  },
  "JEWELS": {
   "word": "JEWELS",
   "roles": [
    {
     "kind": "noun",
     "of": "TRUNK"
    }
   ]
  },
  "TUBE": {
   "word": "TUBE",
   "roles": [
    {
     "kind": "noun",
     "of": "TUBE"
    }
   ]
  },
  "TOOTH": {
   "word": "TOOTH",
   "roles": [
    {
     "kind": "noun",
     "of": "TUBE"
    }
   ]
  },
  "PASTE": {
   "word": "PASTE",
   "roles": [
    {
     "kind": "noun",
     "of": "TUBE"
    }
   ]
  },
  "MATERIAL": {
   "word": "MATERIAL",
   "roles": [
    {
     "kind": "noun",
     "of": "PUTTY"
    }
   ]
  },
  "VISCOUS": {
   "word": "VISCOUS",
   "roles": [
    {
     "kind": "adjective",
     "of": "PUTTY"
    }
   ]
  },
  "MANUAL": {
   "word": "MANUAL",
   "roles": [
    {
     "kind": "noun",
     "of": "OWNERS-MANUAL"
    }
   ]
  },
  "PAPER": {
   "word": "PAPER",
   "roles": [
    {
     "kind": "noun",
     "of": "OWNERS-MANUAL"
    }
   ]
  },
  "OWNERS": {
   "word": "OWNERS",
   "roles": [
    {
     "kind": "adjective",
     "of": "OWNERS-MANUAL"
    }
   ]
  },
  "CLIFF": {
   "word": "CLIFF",
   "roles": [
    {
     "kind": "noun",
     "of": "CLIMBABLE-CLIFF"
    },
    {
     "kind": "noun",
     "of": "WHITE-CLIFF"
    }
   ]
  },
  "LEDGE": {
   "word": "LEDGE",
   "roles": [
    {
     "kind": "noun",
     "of": "CLIMBABLE-CLIFF"
    }
   ]
  },
  "ROCKY": {
   "word": "ROCKY",
   "roles": [
    {
     "kind": "adjective",
     "of": "CLIMBABLE-CLIFF"
    }
   ]
  },
  "SHEER": {
   "word": "SHEER",
   "roles": [
    {
     "kind": "adjective",
     "of": "CLIMBABLE-CLIFF"
    }
   ]
  },
  "CLIFFS": {
   "word": "CLIFFS",
   "roles": [
    {
     "kind": "noun",
     "of": "WHITE-CLIFF"
    }
   ]
  },
  "WRENCH": {
   "word": "WRENCH",
   "roles": [
    {
     "kind": "noun",
     "of": "WRENCH"
    }
   ]
  },
  "PANEL": {
   "word": "PANEL",
   "roles": [
    {
     "kind": "noun",
     "of": "CONTROL-PANEL"
    }
   ]
  },
  "CONTROL": {
   "word": "CONTROL",
   "roles": [
    {
     "kind": "adjective",
     "of": "CONTROL-PANEL"
    }
   ]
  },
  "NEST": {
   "word": "NEST",
   "roles": [
    {
     "kind": "noun",
     "of": "NEST"
    }
   ]
  },
  "BIRDS": {
   "word": "BIRDS",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEST"
    },
    {
     "kind": "adjective",
     "of": "EGG"
    },
    {
     "kind": "adjective",
     "of": "BROKEN-EGG"
    }
   ]
  },
  "EGG": {
   "word": "EGG",
   "roles": [
    {
     "kind": "noun",
     "of": "EGG"
    },
    {
     "kind": "noun",
     "of": "BROKEN-EGG"
    }
   ]
  },
  "ENCRUSTED": {
   "word": "ENCRUSTED",
   "roles": [
    {
     "kind": "adjective",
     "of": "EGG"
    },
    {
     "kind": "adjective",
     "of": "BROKEN-EGG"
    }
   ]
  },
  "BAUBLE": {
   "word": "BAUBLE",
   "roles": [
    {
     "kind": "noun",
     "of": "BAUBLE"
    }
   ]
  },
  "CANARY": {
   "word": "CANARY",
   "roles": [
    {
     "kind": "noun",
     "of": "CANARY"
    },
    {
     "kind": "noun",
     "of": "BROKEN-CANARY"
    }
   ]
  },
  "CLOCKWORK": {
   "word": "CLOCKWORK",
   "roles": [
    {
     "kind": "adjective",
     "of": "CANARY"
    },
    {
     "kind": "adjective",
     "of": "BROKEN-CANARY"
    }
   ]
  },
  "GOLDEN": {
   "word": "GOLDEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "CANARY"
    },
    {
     "kind": "adjective",
     "of": "BROKEN-CANARY"
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
  "FORBIDDING": {
   "word": "FORBIDDING",
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
  "FLOOR": {
   "word": "FLOOR",
   "roles": [
    {
     "kind": "noun",
     "of": "GROUND"
    }
   ]
  },
  "GRUE": {
   "word": "GRUE",
   "roles": [
    {
     "kind": "noun",
     "of": "GRUE"
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
  "LONG": {
   "word": "LONG",
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
  "HANDS": {
   "word": "HANDS",
   "roles": [
    {
     "kind": "noun",
     "of": "HANDS"
    }
   ]
  },
  "HAND": {
   "word": "HAND",
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
  "1actions.zil",
  "1dungeon.zil",
  "gclock.zil",
  "gglobals.zil",
  "gmacros.zil",
  "gmain.zil",
  "gparser.zil",
  "gsyntax.zil",
  "gverbs.zil",
  "zork1.zil"
 ]
};
