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
   "file": "above-ground.zil",
   "line": 7,
   "endLine": 18,
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
   "action": "WEST-OF-HOUSE-F",
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
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The door is boarded and you can't remove the boards.",
     "dir": "EAST"
    },
    {
     "to": "INSIDE-THE-BARROW",
     "kind": "conditional",
     "condition": "WON-FLAG",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [
    "MAILBOX",
    "FRONT-DOOR"
   ],
   "source": "<ROOM WEST-OF-HOUSE\n      (IN ROOMS)\n      (DESC \"West of House\")\n      (NORTH TO NORTH-OF-HOUSE)\n      (SOUTH TO SOUTH-OF-HOUSE)\n      (NE TO NORTH-OF-HOUSE)\n      (SE TO SOUTH-OF-HOUSE)\n      (EAST \"The door is boarded and you can't remove the boards.\")\n      (SW TO INSIDE-THE-BARROW IF WON-FLAG)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL WHITE-HOUSE BOARD FOREST)\n      (ACTION WEST-OF-HOUSE-F)>",
   "referencedBy": [
    "LIVING-ROOM-F",
    "GO"
   ]
  },
  "INSIDE-THE-BARROW": {
   "name": "INSIDE-THE-BARROW",
   "file": "above-ground.zil",
   "line": 71,
   "endLine": 84,
   "desc": "Inside the Barrow",
   "ldesc": "You have entered a stone barrow. The door closes behind you, leaving you in\ndarkness, but ahead is a brightly-lit cavern. Floating in the cavern is a large\nsign: \"You have completed a great and perilous adventure which has tested\nyour wit and courage. You have mastered the first part of the ZORK trilogy.\nPrepare yourself for an even greater test!\"|\n|\nThe ZORK trilogy continues with \"ZORK II: The Wizard of Frobozz\" and\n\"ZORK III: The Dungeon Master.\"",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "INSIDE-THE-BARROW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [],
   "contents": [],
   "source": "<ROOM INSIDE-THE-BARROW\n      (IN ROOMS)\n      (DESC \"Inside the Barrow\")\n      (LDESC\n\"You have entered a stone barrow. The door closes behind you, leaving you in\ndarkness, but ahead is a brightly-lit cavern. Floating in the cavern is a large\nsign: \\\"You have completed a great and perilous adventure which has tested\nyour wit and courage. You have mastered the first part of the ZORK trilogy.\nPrepare yourself for an even greater test!\\\"|\n|\nThe ZORK trilogy continues with \\\"ZORK II: The Wizard of Frobozz\\\" and\n\\\"ZORK III: The Dungeon Master.\\\"\")\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (ACTION INSIDE-THE-BARROW-F)>",
   "referencedBy": []
  },
  "NORTH-OF-HOUSE": {
   "name": "NORTH-OF-HOUSE",
   "file": "above-ground.zil",
   "line": 90,
   "endLine": 103,
   "desc": "North of House",
   "ldesc": "You are facing the north side of a white house. There is no door here, and\nall the windows are boarded up. A narrow path winds north through the trees.",
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
     "to": "BEHIND-HOUSE",
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
     "to": "BEHIND-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "FOREST-PATH",
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
   "source": "<ROOM NORTH-OF-HOUSE\n      (IN ROOMS)\n      (LDESC\n\"You are facing the north side of a white house. There is no door here, and\nall the windows are boarded up. A narrow path winds north through the trees.\")\n      (DESC \"North of House\")\n      (SW TO WEST-OF-HOUSE)\n      (SE TO BEHIND-HOUSE)\n      (WEST TO WEST-OF-HOUSE)\n      (EAST TO BEHIND-HOUSE)\n      (NORTH TO FOREST-PATH)\n      (SOUTH \"The windows are all boarded.\")\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL BOARDED-WINDOW BOARD WHITE-HOUSE FOREST)>",
   "referencedBy": []
  },
  "SOUTH-OF-HOUSE": {
   "name": "SOUTH-OF-HOUSE",
   "file": "above-ground.zil",
   "line": 105,
   "endLine": 117,
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
     "to": "BEHIND-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BEHIND-HOUSE",
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
   "source": "<ROOM SOUTH-OF-HOUSE\n      (IN ROOMS)\n      (LDESC\n\"You are facing the south side of a white house. There is no door here,\nand all the windows are boarded.\")\n      (DESC \"South of House\")\n      (WEST TO WEST-OF-HOUSE)\n      (EAST TO BEHIND-HOUSE)\n      (NE TO BEHIND-HOUSE)\n      (NW TO WEST-OF-HOUSE)\n      (NORTH \"The windows are all boarded.\")\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL BOARDED-WINDOW BOARD WHITE-HOUSE FOREST)>",
   "referencedBy": []
  },
  "BEHIND-HOUSE": {
   "name": "BEHIND-HOUSE",
   "file": "above-ground.zil",
   "line": 119,
   "endLine": 132,
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
   "action": "BEHIND-HOUSE-F",
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
     "to": "FOREST-NORTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "FOREST-SOUTH",
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
   "source": "<ROOM BEHIND-HOUSE\n      (IN ROOMS)\n      (DESC \"Behind House\")\n      (NORTH TO NORTH-OF-HOUSE)\n      (SOUTH TO SOUTH-OF-HOUSE)\n      (SW TO SOUTH-OF-HOUSE)\n      (NW TO NORTH-OF-HOUSE)\n      (NE TO FOREST-NORTH)\n      (EAST TO FOREST-SOUTH)\n      (WEST TO KITCHEN IF KITCHEN-WINDOW IS OPEN)\n      (IN TO KITCHEN IF KITCHEN-WINDOW IS OPEN)\n      (ACTION BEHIND-HOUSE-F)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL WHITE-HOUSE KITCHEN-WINDOW FOREST)>",
   "referencedBy": []
  },
  "FOREST-NORTH": {
   "name": "FOREST-NORTH",
   "file": "above-ground.zil",
   "line": 216,
   "endLine": 226,
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
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TREE",
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
     "to": "FOREST-PATH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "BEHIND-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "FOREST-EDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "FOREST-SOUTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM FOREST-NORTH\n      (IN ROOMS)\n      (DESC \"Forest\")\n      (LDESC \"This is a dimly lit forest, with large trees all around.\")\n      (UP \"There is no tree here suitable for climbing.\")\n      (WEST TO FOREST-PATH)\n      (SW TO BEHIND-HOUSE)\n      (SE TO FOREST-EDGE)\n      (SOUTH TO FOREST-SOUTH)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL TREE FOREST)>",
   "referencedBy": []
  },
  "FOREST-SOUTH": {
   "name": "FOREST-SOUTH",
   "file": "above-ground.zil",
   "line": 228,
   "endLine": 237,
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
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TREE",
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
     "to": "FOREST-EDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BEHIND-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "FOREST-NORTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM FOREST-SOUTH\n      (IN ROOMS)\n      (DESC \"Forest\")\n      (LDESC \"This is a dimly lit forest, with large trees all around.\")\n      (UP \"There is no tree here suitable for climbing.\")\n      (EAST TO FOREST-EDGE)\n      (WEST TO BEHIND-HOUSE)\n      (NORTH TO FOREST-NORTH)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL TREE FOREST)>",
   "referencedBy": []
  },
  "FOREST-PATH": {
   "name": "FOREST-PATH",
   "file": "above-ground.zil",
   "line": 239,
   "endLine": 248,
   "desc": "Forest Path",
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
   "action": "FOREST-PATH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GRATE",
    "TREE",
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
     "to": "FOREST-NORTH",
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
   "source": "<ROOM FOREST-PATH\n      (IN ROOMS)\n      (DESC \"Forest Path\")\n      (UP TO UP-A-TREE)\n      (EAST TO FOREST-NORTH)\n      (SOUTH TO NORTH-OF-HOUSE)\n      (DOWN PER GRATING-EXIT)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL GRATE TREE FOREST)\n      (ACTION FOREST-PATH-F)>",
   "referencedBy": [
    "UP-A-TREE-F",
    "GRATE-F"
   ]
  },
  "UP-A-TREE": {
   "name": "UP-A-TREE",
   "file": "above-ground.zil",
   "line": 277,
   "endLine": 284,
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
   "action": "UP-A-TREE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TREE",
    "FOREST"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "FOREST-PATH",
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
   "source": "<ROOM UP-A-TREE\n      (IN ROOMS)\n      (DESC \"Up a Tree\")\n      (DOWN TO FOREST-PATH)\n      (UP \"You cannot climb any higher.\")\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL TREE FOREST)\n      (ACTION UP-A-TREE-F)>",
   "referencedBy": []
  },
  "FOREST-EDGE": {
   "name": "FOREST-EDGE",
   "file": "above-ground.zil",
   "line": 379,
   "endLine": 390,
   "desc": "Forest Edge",
   "ldesc": "Paths lead into the forest to the west and northwest. Also, a well-marked\npath extends east.",
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
     "to": "FOREST-NORTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "FOREST-SOUTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM FOREST-EDGE\n      (IN ROOMS)\n      (DESC \"Forest Edge\")\n      (LDESC\n\"Paths lead into the forest to the west and northwest. Also, a well-marked\npath extends east.\")\n      (UP \"There is no tree here suitable for climbing.\")\n      (EAST TO CANYON-VIEW)\n      (NW TO FOREST-NORTH)\n      (WEST TO FOREST-SOUTH)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL TREE FOREST)>",
   "referencedBy": [
    "V-PRAY",
    "JIGS-UP",
    "DEAD-FUNCTION"
   ]
  },
  "CANYON-VIEW": {
   "name": "CANYON-VIEW",
   "file": "above-ground.zil",
   "line": 392,
   "endLine": 407,
   "desc": "Canyon View",
   "ldesc": "You are atop the west wall of a great canyon, offering a marvelous view of the\nmighty Frigid River below. Across the canyon, the walls of the White Cliffs\njoin the mighty ramparts of the Flathead Mountains. To the north, Aragain\nFalls may be seen, complete with rainbow. Even further upstream, the river\nflows out of a great dark cavern. To the west is an immense forest, stretching\nfor miles. It seems possible to climb down into the canyon from here.",
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
     "to": "CANYON-BOTTOM",
     "kind": "unconditional",
     "condition": null,
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
     "dir": "DOWN"
    },
    {
     "to": "FOREST-EDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM CANYON-VIEW\n      (IN ROOMS)\n      (DESC \"Canyon View\")\n      (LDESC\n\"You are atop the west wall of a great canyon, offering a marvelous view of the\nmighty Frigid River below. Across the canyon, the walls of the White Cliffs\njoin the mighty ramparts of the Flathead Mountains. To the north, Aragain\nFalls may be seen, complete with rainbow. Even further upstream, the river\nflows out of a great dark cavern. To the west is an immense forest, stretching\nfor miles. It seems possible to climb down into the canyon from here.\")\n      (EAST TO CANYON-BOTTOM)\n      (DOWN TO CANYON-BOTTOM)\n      (WEST TO FOREST-EDGE)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL CLIMBABLE-CLIFF RIVER RAINBOW)\n      (ACTION CANYON-VIEW-F)>",
   "referencedBy": [
    "RAINBOW-F"
   ]
  },
  "CANYON-BOTTOM": {
   "name": "CANYON-BOTTOM",
   "file": "above-ground.zil",
   "line": 432,
   "endLine": 442,
   "desc": "Canyon Bottom",
   "ldesc": "The walls of the river canyon may be climbable here. To the northeast is a\nnarrow path.",
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
     "to": "CANYON-VIEW",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "CANYON-VIEW",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "END-OF-RAINBOW",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    }
   ],
   "contents": [],
   "source": "<ROOM CANYON-BOTTOM\n      (IN ROOMS)\n      (DESC \"Canyon Bottom\")\n      (LDESC\n\"The walls of the river canyon may be climbable here. To the northeast is a\nnarrow path.\")\n      (UP TO CANYON-VIEW)\n      (WEST TO CANYON-VIEW)\n      (NE TO END-OF-RAINBOW)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL GLOBAL-WATER CLIMBABLE-CLIFF RIVER)>",
   "referencedBy": []
  },
  "END-OF-RAINBOW": {
   "name": "END-OF-RAINBOW",
   "file": "above-ground.zil",
   "line": 444,
   "endLine": 457,
   "desc": "End of Rainbow",
   "ldesc": "You are on a small, rocky beach by the Frigid River, below the falls. A\nrainbow crosses over the falls to the east and a narrow path continues to\nthe southwest.",
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
    "STAIRS",
    "GLOBAL-WATER",
    "RAINBOW",
    "RIVER"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "ARAGAIN-FALLS",
     "kind": "conditional",
     "condition": "RAINBOW-FLAG",
     "else": "\"Can you walk on water vapor?\"",
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "ARAGAIN-FALLS",
     "kind": "conditional",
     "condition": "RAINBOW-FLAG",
     "else": "\"Can you walk on water vapor?\"",
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
   "source": "<ROOM END-OF-RAINBOW\n      (IN ROOMS)\n      (DESC \"End of Rainbow\")\n      (LDESC\n\"You are on a small, rocky beach by the Frigid River, below the falls. A\nrainbow crosses over the falls to the east and a narrow path continues to\nthe southwest.\")\n      (UP TO ARAGAIN-FALLS IF RAINBOW-FLAG ELSE\n       \"Can you walk on water vapor?\")\n      (EAST TO ARAGAIN-FALLS IF RAINBOW-FLAG ELSE\n       \"Can you walk on water vapor?\")\n      (SW TO CANYON-BOTTOM)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL STAIRS GLOBAL-WATER RAINBOW RIVER)>",
   "referencedBy": [
    "SCEPTRE-F"
   ]
  },
  "KITCHEN": {
   "name": "KITCHEN",
   "file": "above-ground.zil",
   "line": 516,
   "endLine": 527,
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
   "action": "KITCHEN-F",
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
     "to": "BEHIND-HOUSE",
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
     "to": "BEHIND-HOUSE",
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
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Only Santa Claus climbs down chimneys.",
     "dir": "DOWN"
    }
   ],
   "contents": [
    "KITCHEN-TABLE"
   ],
   "source": "<ROOM KITCHEN\n      (IN ROOMS)\n      (DESC \"Kitchen\")\n      (EAST TO BEHIND-HOUSE IF KITCHEN-WINDOW IS OPEN)\n      (WEST TO LIVING-ROOM)\n      (OUT TO BEHIND-HOUSE IF KITCHEN-WINDOW IS OPEN)\n      (UP TO ATTIC)\n      (DOWN \"Only Santa Claus climbs down chimneys.\")\n      (VALUE 10)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL KITCHEN-WINDOW CHIMNEY STAIRS)\n      (ACTION KITCHEN-F)>",
   "referencedBy": [
    "WHITE-HOUSE-F",
    "KITCHEN-WINDOW-F",
    "CHIMNEY-F",
    "UP-CHIMNEY-F"
   ]
  },
  "ATTIC": {
   "name": "ATTIC",
   "file": "above-ground.zil",
   "line": 665,
   "endLine": 671,
   "desc": "Attic",
   "ldesc": "This is the attic. The only exit is the stairway down.",
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
    "KNIFE",
    "ROPE"
   ],
   "source": "<ROOM ATTIC\n      (IN ROOMS)\n      (DESC \"Attic\")\n      (LDESC \"This is the attic. The only exit is the stairway down.\")\n      (DOWN TO KITCHEN)\n      (FLAGS RLANDBIT SACREDBIT)\n      (GLOBAL STAIRS)>",
   "referencedBy": [
    "WHITE-HOUSE-F"
   ]
  },
  "LIVING-ROOM": {
   "name": "LIVING-ROOM",
   "file": "above-ground.zil",
   "line": 722,
   "endLine": 731,
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
   "action": "LIVING-ROOM-F",
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
     "to": "CYCLOPS-ROOM",
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
    "SWORD",
    "LAMP",
    "WOODEN-DOOR",
    "RUG",
    "TRAP-DOOR"
   ],
   "source": "<ROOM LIVING-ROOM\n      (IN ROOMS)\n      (DESC \"Living Room\")\n      (EAST TO KITCHEN)\n      (WEST TO CYCLOPS-ROOM IF MAGIC-FLAG ELSE \"The door is nailed shut.\")\n      (DOWN PER TRAP-DOOR-EXIT)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL STAIRS)\n      (PSEUDO \"NAILS\" NAILS-PSEUDO \"NAIL\" NAILS-PSEUDO)\n      (ACTION LIVING-ROOM-F)>",
   "referencedBy": [
    "WHITE-HOUSE-F",
    "TRAP-DOOR-F",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "MAZE-1": {
   "name": "MAZE-1",
   "file": "maze.zil",
   "line": 5,
   "endLine": 13,
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
     "to": "MAZE-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MAZE-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "MAZE-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    }
   ],
   "contents": [],
   "source": "<ROOM MAZE-1\n      (IN ROOMS)\n      (DESC \"Maze\")\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (EAST TO TROLL-ROOM)\n      (WEST TO MAZE-3)\n      (NW TO MAZE-2)\n      (NE TO MAZE-1)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": []
  },
  "MAZE-2": {
   "name": "MAZE-2",
   "file": "maze.zil",
   "line": 15,
   "endLine": 23,
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
     "dir": "NORTH"
    },
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
     "to": "MAZE-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "MAZE-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM MAZE-2\n      (IN ROOMS)\n      (DESC \"Maze\")\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (NORTH TO MAZE-1)\n      (WEST TO MAZE-2)\n      (SE TO MAZE-3)\n      (DOWN TO MAZE-5)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": []
  },
  "MAZE-3": {
   "name": "MAZE-3",
   "file": "maze.zil",
   "line": 25,
   "endLine": 32,
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
     "to": "MAZE-1",
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
   "source": "<ROOM MAZE-3\n      (IN ROOMS)\n      (DESC \"Maze\")\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (WEST TO MAZE-2)\n      (NORTH TO MAZE-1)\n      (UP TO MAZE-5)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": []
  },
  "MAZE-4": {
   "name": "MAZE-4",
   "file": "maze.zil",
   "line": 34,
   "endLine": 43,
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
     "to": "MAZE-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
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
     "dir": "SE"
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
     "to": "MAZE-6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM MAZE-4\n      (IN ROOMS)\n      (DESC \"Maze\")\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (EAST TO MAZE-8)\n      (DOWN TO MAZE-5)\n      (SE TO MAZE-7)\n      (SOUTH TO MAZE-10)\n      (UP TO MAZE-6)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": []
  },
  "MAZE-5": {
   "name": "MAZE-5",
   "file": "maze.zil",
   "line": 45,
   "endLine": 52,
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
     "dir": "NORTH"
    },
    {
     "to": "MAZE-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "MAZE-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [
    "BURNED-OUT-LANTERN",
    "BAG-OF-COINS",
    "RUSTY-KNIFE",
    "KEYS",
    "SKELETON"
   ],
   "source": "<ROOM MAZE-5\n      (IN ROOMS)\n      (DESC \"Maze\")\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (NORTH TO MAZE-3)\n      (SW TO MAZE-4)\n      (NW TO MAZE-2)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": []
  },
  "MAZE-6": {
   "name": "MAZE-6",
   "file": "maze.zil",
   "line": 131,
   "endLine": 139,
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
     "dir": "DOWN"
    },
    {
     "to": "MAZE-6",
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
     "dir": "SE"
    },
    {
     "to": "GRATING-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    }
   ],
   "contents": [],
   "source": "<ROOM MAZE-6\n      (IN ROOMS)\n      (DESC \"Maze\")\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (DOWN TO MAZE-2)\n      (SOUTH TO MAZE-6)\n      (SE TO MAZE-4)\n      (NE TO GRATING-ROOM)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": []
  },
  "MAZE-7": {
   "name": "MAZE-7",
   "file": "maze.zil",
   "line": 141,
   "endLine": 149,
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
     "to": "MAZE-10",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "MAZE-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
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
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM MAZE-7\n      (IN ROOMS)\n      (DESC \"Maze\")\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (UP TO MAZE-10)\n      (WEST TO MAZE-4)\n      (DOWN TO MAZE-5)\n      (SW TO MAZE-7)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": []
  },
  "MAZE-8": {
   "name": "MAZE-8",
   "file": "maze.zil",
   "line": 151,
   "endLine": 159,
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
     "to": "MAZE-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
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
     "to": "MAZE-10",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "MAZE-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM MAZE-8\n      (IN ROOMS)\n      (DESC \"Maze\")\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (NORTH TO MAZE-8)\n      (EAST TO MAZE-9)\n      (SE TO MAZE-10)\n      (UP TO MAZE-4)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": []
  },
  "MAZE-9": {
   "name": "MAZE-9",
   "file": "maze.zil",
   "line": 161,
   "endLine": 168,
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
     "to": "MAZE-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
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
   "source": "<ROOM MAZE-9\n      (IN ROOMS)\n      (DESC \"Maze\")\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (NORTH TO MAZE-8)\n      (SOUTH TO MAZE-10)\n      (SE TO CYCLOPS-ROOM)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": []
  },
  "MAZE-10": {
   "name": "MAZE-10",
   "file": "maze.zil",
   "line": 170,
   "endLine": 178,
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
     "dir": "SOUTH"
    },
    {
     "to": "MAZE-8",
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
     "dir": "NW"
    },
    {
     "to": "MAZE-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM MAZE-10\n      (IN ROOMS)\n      (DESC \"Maze\")\n      (LDESC \"This is part of a maze of twisty little passages, all alike.\")\n      (SOUTH TO MAZE-9)\n      (NE TO MAZE-8)\n      (NW TO MAZE-7)\n      (SW TO MAZE-4)\n      (FLAGS RLANDBIT MAZEBIT)>",
   "referencedBy": []
  },
  "GRATING-ROOM": {
   "name": "GRATING-ROOM",
   "file": "maze.zil",
   "line": 180,
   "endLine": 187,
   "desc": "Grating Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "GRATING-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GRATE"
   ],
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
     "dir": "SW"
    },
    {
     "to": "FOREST-PATH",
     "kind": "conditional",
     "condition": "GRATE IS OPEN",
     "else": "\"The grating is closed.\"",
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM GRATING-ROOM\n      (IN ROOMS)\n      (DESC \"Grating Room\")\n      (SW TO MAZE-6)\n      (UP TO FOREST-PATH IF GRATE IS OPEN ELSE \"The grating is closed.\")\n      (GLOBAL GRATE)\n      (FLAGS RLANDBIT)\n      (ACTION GRATING-ROOM-F)>",
   "referencedBy": [
    "GRATING-EXIT",
    "GRATE-F"
   ]
  },
  "CYCLOPS-ROOM": {
   "name": "CYCLOPS-ROOM",
   "file": "maze.zil",
   "line": 256,
   "endLine": 265,
   "desc": "Cyclops Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CYCLOPS-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIRS"
   ],
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
     "dir": "NW"
    },
    {
     "to": "LIVING-ROOM",
     "kind": "conditional",
     "condition": "MAGIC-FLAG",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "THIEFS-LAIR",
     "kind": "conditional",
     "condition": "CYCLOPS-FLAG",
     "else": "\"The cyclops won't let you past.\"",
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [
    "CYCLOPS"
   ],
   "source": "<ROOM CYCLOPS-ROOM\n      (IN ROOMS)\n      (DESC \"Cyclops Room\")\n      (NW TO MAZE-9)\n      (EAST TO LIVING-ROOM IF MAGIC-FLAG)\n      (UP TO THIEFS-LAIR IF CYCLOPS-FLAG ELSE\n       \"The cyclops won't let you past.\")\n      (FLAGS RLANDBIT)\n      (GLOBAL STAIRS)\n      (ACTION CYCLOPS-ROOM-F)>",
   "referencedBy": [
    "I-CYCLOPS",
    "V-ODYSSEUS"
   ]
  },
  "THIEFS-LAIR": {
   "name": "THIEFS-LAIR",
   "file": "maze.zil",
   "line": 403,
   "endLine": 411,
   "desc": "Thief's Lair",
   "ldesc": "The only visible exit is down a staircase.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "THIEFS-LAIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "20"
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
   "source": "<ROOM THIEFS-LAIR\n      (IN ROOMS)\n      (DESC \"Thief's Lair\")\n      (LDESC \"The only visible exit is down a staircase.\")\n      (DOWN TO CYCLOPS-ROOM)\n      (FLAGS RLANDBIT ;\"can't have onbit\")\n      (VALUE 20)\n      (GLOBAL STAIRS)\n      (ACTION THIEFS-LAIR-F)>",
   "referencedBy": [
    "I-THIEF",
    "THIEF-VS-ADVENTURER",
    "KILL-VILLAIN",
    "ITAKE"
   ]
  },
  "RESERVOIR": {
   "name": "RESERVOIR",
   "file": "north-of-res.zil",
   "line": 5,
   "endLine": 15,
   "desc": "Reservoir",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "NONLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "RESERVOIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-WATER",
    "DAM-OBJECT"
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
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The dam blocks your way.",
     "dir": "DOWN"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The dam blocks your way.",
     "dir": "EAST"
    }
   ],
   "contents": [
    "TRUNK"
   ],
   "source": "<ROOM RESERVOIR\n      (IN ROOMS)\n      (DESC \"Reservoir\")\n      (NORTH TO RESERVOIR-NORTH)\n      (SOUTH TO RESERVOIR-SOUTH)\n      (DOWN \"The dam blocks your way.\")\n      (EAST \"The dam blocks your way.\")\n      (FLAGS NONLANDBIT)\n      (PSEUDO \"STREAM\" STREAM-PSEUDO)\n      (GLOBAL GLOBAL-WATER DAM-OBJECT)\n      (ACTION RESERVOIR-F)>",
   "referencedBy": [
    "GROUND-F",
    "BOLT-F",
    "INFLATED-BOAT-F"
   ]
  },
  "RESERVOIR-NORTH": {
   "name": "RESERVOIR-NORTH",
   "file": "north-of-res.zil",
   "line": 57,
   "endLine": 66,
   "desc": "Reservoir North",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "RESERVOIR-NORTH-F",
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
     "to": "DRAFTY-CAVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "DRAFTY-CAVE",
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
   "source": "<ROOM RESERVOIR-NORTH\n      (IN ROOMS)\n      (DESC \"Reservoir North\")\n      (UP TO DRAFTY-CAVE)\n      (NORTH TO DRAFTY-CAVE)\n      (SOUTH TO RESERVOIR IF LOW-TIDE ELSE \"You would drown.\")\n      (FLAGS RLANDBIT)\n      (GLOBAL GLOBAL-WATER STAIRS)\n      (PSEUDO \"LAKE\" LAKE-PSEUDO)\n      (ACTION RESERVOIR-NORTH-F)>",
   "referencedBy": []
  },
  "DRAFTY-CAVE": {
   "name": "DRAFTY-CAVE",
   "file": "north-of-res.zil",
   "line": 84,
   "endLine": 96,
   "desc": "Drafty Cave",
   "ldesc": "This is a tiny cave with entrances west and north, and a dark, forbidding\nstaircase leading down.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "WINDY-CAVE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIRS"
   ],
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
     "dir": "NORTH"
    },
    {
     "to": "MIRROR-ROOM-NORTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "RESERVOIR-NORTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
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
   "contents": [],
   "source": "<ROOM DRAFTY-CAVE\n      (IN ROOMS)\n      (DESC \"Drafty Cave\")\n      (LDESC\n\"This is a tiny cave with entrances west and north, and a dark, forbidding\nstaircase leading down.\")\n      (NORTH TO WINDING-PASSAGE)\n      (WEST TO MIRROR-ROOM-NORTH)\n      (DOWN TO RESERVOIR-NORTH)\n      (SOUTH TO RESERVOIR-NORTH)\n      (FLAGS RLANDBIT)\n      (GLOBAL STAIRS)\n      (ACTION WINDY-CAVE-F)>",
   "referencedBy": []
  },
  "MIRROR-ROOM-NORTH": {
   "name": "MIRROR-ROOM-NORTH",
   "file": "north-of-res.zil",
   "line": 98,
   "endLine": 105,
   "desc": "Mirror Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MIRROR-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MIRROR"
   ],
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
     "dir": "NE"
    },
    {
     "to": "DRAFTY-CAVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM MIRROR-ROOM-NORTH\n      (IN ROOMS)\n      (DESC \"Mirror Room\")\n      (NE TO WINDING-PASSAGE)\n      (EAST TO DRAFTY-CAVE)\n      (FLAGS RLANDBIT)\n      (GLOBAL MIRROR)\n      (ACTION MIRROR-ROOM-F)>",
   "referencedBy": [
    "ME-F",
    "MIRROR-F"
   ]
  },
  "WINDING-PASSAGE": {
   "name": "WINDING-PASSAGE",
   "file": "north-of-res.zil",
   "line": 107,
   "endLine": 116,
   "desc": "Winding Passage",
   "ldesc": "This is a crooked corridor from the north, with forks to the southwest\nand south.",
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
     "to": "DRAFTY-CAVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "MIRROR-ROOM-NORTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "SLIDE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM WINDING-PASSAGE\n      (IN ROOMS)\n      (DESC \"Winding Passage\")\n      (LDESC\n\"This is a crooked corridor from the north, with forks to the southwest\nand south.\")\n      (SOUTH TO DRAFTY-CAVE)\n      (SW TO MIRROR-ROOM-NORTH)\n      (NORTH TO SLIDE-ROOM)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "SLIDE-ROOM": {
   "name": "SLIDE-ROOM",
   "file": "north-of-res.zil",
   "line": 118,
   "endLine": 128,
   "desc": "Slide Room",
   "ldesc": "This small chamber appears to have been part of a coal mine. To the west\nand south are passages, and a steep metal slide twists downward.",
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
     "to": "MINE-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "CELLAR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "WINDING-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM SLIDE-ROOM\n      (IN ROOMS)\n      (DESC \"Slide Room\")\n      (LDESC\n\"This small chamber appears to have been part of a coal mine. To the west\nand south are passages, and a steep metal slide twists downward.\")\n      (WEST TO MINE-ENTRANCE)\n      (DOWN TO CELLAR)\n      (SOUTH TO WINDING-PASSAGE)\n      (FLAGS RLANDBIT)\n      (GLOBAL SLIDE)>",
   "referencedBy": []
  },
  "MINE-ENTRANCE": {
   "name": "MINE-ENTRANCE",
   "file": "north-of-res.zil",
   "line": 153,
   "endLine": 162,
   "desc": "Mine Entrance",
   "ldesc": "You are at the entrance of an abandoned coal mine. Strange squeaky sounds\ncome from the passage at the north end. You may also escape to the east.",
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
     "to": "BAT-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "SLIDE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM MINE-ENTRANCE\n      (IN ROOMS)\n      (DESC \"Mine Entrance\")\n      (LDESC\n\"You are at the entrance of an abandoned coal mine. Strange squeaky sounds\ncome from the passage at the north end. You may also escape to the east.\")\n      (NORTH TO BAT-ROOM)\n      (IN TO BAT-ROOM)\n      (EAST TO SLIDE-ROOM)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "BAT-ROOM": {
   "name": "BAT-ROOM",
   "file": "north-of-res.zil",
   "line": 164,
   "endLine": 170,
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
   "action": "BAT-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "MINE-ENTRANCE",
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
   "source": "<ROOM BAT-ROOM\n      (IN ROOMS)\n      (DESC \"Bat Room\")\n      (SOUTH TO MINE-ENTRANCE)\n      (EAST TO SHAFT-ROOM)\n      (FLAGS RLANDBIT SACREDBIT)\n      (ACTION BAT-ROOM-F)>",
   "referencedBy": []
  },
  "SHAFT-ROOM": {
   "name": "SHAFT-ROOM",
   "file": "north-of-res.zil",
   "line": 240,
   "endLine": 252,
   "desc": "Shaft Room",
   "ldesc": "In the middle this room a small shaft descends into darkness below. Above the\nshaft is a metal framework to which a heavy iron chain is attached. There are\nexits to the west and north. A foul odor can be detected from the latter\ndirection.",
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
     "message": "The shaft is too small for you.",
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
     "to": "GAS-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "BASKET"
   ],
   "source": "<ROOM SHAFT-ROOM\n      (IN ROOMS)\n      (DESC \"Shaft Room\")\n      (LDESC\n\"In the middle this room a small shaft descends into darkness below. Above the\nshaft is a metal framework to which a heavy iron chain is attached. There are\nexits to the west and north. A foul odor can be detected from the latter\ndirection.\")\n      (DOWN \"The shaft is too small for you.\")\n      (WEST TO BAT-ROOM)\n      (NORTH TO GAS-ROOM)\n      (FLAGS RLANDBIT)\n      (PSEUDO \"CHAIN\" CHAIN-PSEUDO)>",
   "referencedBy": [
    "BASKET-F"
   ]
  },
  "GAS-ROOM": {
   "name": "GAS-ROOM",
   "file": "north-of-res.zil",
   "line": 302,
   "endLine": 312,
   "desc": "Gas Room",
   "ldesc": "This room smells strongly of coal gas. Narrow tunnels lead lead\neast and south.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "GAS-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "GAS",
    "GAS-PSEUDO",
    "ODOR",
    "GAS-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "SHAFT-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "COAL-MINE-1",
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
   "source": "<ROOM GAS-ROOM\n      (IN ROOMS)\n      (DESC \"Gas Room\")\n      (LDESC\n\"This room smells strongly of coal gas. Narrow tunnels lead lead\neast and south.\")\n      (SOUTH TO SHAFT-ROOM)\n      (EAST TO COAL-MINE-1)\n      (FLAGS RLANDBIT SACREDBIT)\n      (PSEUDO \"GAS\" GAS-PSEUDO \"ODOR\" GAS-PSEUDO)\n      (ACTION GAS-ROOM-F)>",
   "referencedBy": []
  },
  "COAL-MINE-1": {
   "name": "COAL-MINE-1",
   "file": "north-of-res.zil",
   "line": 343,
   "endLine": 350,
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
     "dir": "WEST"
    },
    {
     "to": "COAL-MINE-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "COAL-MINE-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM COAL-MINE-1\n      (IN ROOMS)\n      (DESC \"Coal Mine\")\n      (LDESC \"This is a nondescript part of a coal mine.\")\n      (WEST TO GAS-ROOM)\n      (NORTH TO COAL-MINE-2)\n      (SOUTH TO COAL-MINE-1)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "COAL-MINE-2": {
   "name": "COAL-MINE-2",
   "file": "north-of-res.zil",
   "line": 352,
   "endLine": 360,
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
     "to": "COAL-MINE-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "COAL-MINE-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "COAL-MINE-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "COAL-MINE-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM COAL-MINE-2\n      (IN ROOMS)\n      (DESC \"Coal Mine\")\n      (LDESC \"This is a nondescript part of a coal mine.\")\n      (NE TO COAL-MINE-2)\n      (NW TO COAL-MINE-1)\n      (SOUTH TO COAL-MINE-3)\n      (UP TO COAL-MINE-2)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "COAL-MINE-3": {
   "name": "COAL-MINE-3",
   "file": "north-of-res.zil",
   "line": 362,
   "endLine": 369,
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
     "to": "COAL-MINE-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "COAL-MINE-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "LADDER-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM COAL-MINE-3\n      (IN ROOMS)\n      (DESC \"Coal Mine\")\n      (LDESC \"This is a nondescript part of a coal mine.\")\n      (EAST TO COAL-MINE-2)\n      (WEST TO COAL-MINE-3)\n      (DOWN TO LADDER-ROOM)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "LADDER-ROOM": {
   "name": "LADDER-ROOM",
   "file": "north-of-res.zil",
   "line": 371,
   "endLine": 382,
   "desc": "Ladder Room",
   "ldesc": "At the east end of this narrow passage, a ladder leads upward. There's a\nstrong draft from the west, where the passage narrows even further.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "NO-OBJECT-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "LADDER",
    "LADDER-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "COAL-MINE-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "DRAFTY-ROOM",
     "kind": "conditional",
     "condition": "EMPTY-HANDED",
     "else": "\"You can't fit through with that load.\"",
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "COAL"
   ],
   "source": "<ROOM LADDER-ROOM\n      (IN ROOMS)\n      (DESC \"Ladder Room\")\n      (LDESC\n\"At the east end of this narrow passage, a ladder leads upward. There's a\nstrong draft from the west, where the passage narrows even further.\")\n      (UP TO COAL-MINE-3)\n      (WEST TO DRAFTY-ROOM IF EMPTY-HANDED ELSE\n       \"You can't fit through with that load.\")\n      (FLAGS RLANDBIT SACREDBIT)\n      (ACTION NO-OBJECT-ROOM-F)\n      (PSEUDO \"LADDER\" LADDER-PSEUDO)>",
   "referencedBy": [
    "MATCH-F",
    "DEAD-FUNCTION"
   ]
  },
  "DRAFTY-ROOM": {
   "name": "DRAFTY-ROOM",
   "file": "north-of-res.zil",
   "line": 417,
   "endLine": 431,
   "desc": "Drafty Room",
   "ldesc": "This is a small room at the bottom of a long shaft. A heavy iron chain hangs\ndown the shaft. To the south is a passageway and to the east a very narrow\npassage.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "NO-OBJECT-ROOM-F",
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
     "to": "LADDER-ROOM",
     "kind": "conditional",
     "condition": "EMPTY-HANDED",
     "else": "\"You can't fit through with that load.\"",
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "LADDER-ROOM",
     "kind": "conditional",
     "condition": "EMPTY-HANDED",
     "else": "\"You can't fit through with that load.\"",
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM DRAFTY-ROOM\n      (IN ROOMS)\n      (DESC \"Drafty Room\")\n      (LDESC\n\"This is a small room at the bottom of a long shaft. A heavy iron chain hangs\ndown the shaft. To the south is a passageway and to the east a very narrow\npassage.\")\n      (SOUTH TO MACHINE-ROOM)\n      (OUT TO LADDER-ROOM IF EMPTY-HANDED ELSE\n       \"You can't fit through with that load.\")\n      (EAST TO LADDER-ROOM IF EMPTY-HANDED ELSE\n       \"You can't fit through with that load.\")\n      (FLAGS RLANDBIT SACREDBIT)\n      (PSEUDO \"CHAIN\" CHAIN-PSEUDO)\n      (ACTION NO-OBJECT-ROOM-F)>",
   "referencedBy": [
    "BASKET-F",
    "NO-OBJECT-ROOM-F",
    "MATCH-F"
   ]
  },
  "MACHINE-ROOM": {
   "name": "MACHINE-ROOM",
   "file": "north-of-res.zil",
   "line": 433,
   "endLine": 439,
   "desc": "Machine Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MACHINE-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DRAFTY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "DRAFTY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "MACHINE",
    "MACHINE-SWITCH"
   ],
   "source": "<ROOM MACHINE-ROOM\n      (IN ROOMS)\n      (DESC \"Machine Room\")\n      (NORTH TO DRAFTY-ROOM)\n      (OUT TO DRAFTY-ROOM)\n      (FLAGS RLANDBIT)\n      (ACTION MACHINE-ROOM-F)>",
   "referencedBy": []
  },
  "CELLAR": {
   "name": "CELLAR",
   "file": "south-of-res.zil",
   "line": 5,
   "endLine": 15,
   "desc": "Cellar",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CELLAR-F",
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
     "to": "STUDIO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
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
     "message": "You try to ascend the ramp, but slide back down.",
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM CELLAR\n      (IN ROOMS)\n      (DESC \"Cellar\")\n      (NORTH TO TROLL-ROOM)\n      (EAST TO STUDIO)\n      (UP TO LIVING-ROOM IF TRAP-DOOR IS OPEN)\n      (WEST \"You try to ascend the ramp, but slide back down.\")\n      (FLAGS RLANDBIT)\n      (VALUE 25)\n      (GLOBAL TRAP-DOOR SLIDE STAIRS)\n      (ACTION CELLAR-F)>",
   "referencedBy": [
    "TRAP-DOOR-EXIT",
    "TRAP-DOOR-F",
    "SLIDE-F"
   ]
  },
  "STUDIO": {
   "name": "STUDIO",
   "file": "south-of-res.zil",
   "line": 30,
   "endLine": 42,
   "desc": "Studio",
   "ldesc": "This was once an artist's studio. The walls are splattered with paints of\n69 different colors. To the west is a doorway (also covered with paint).\nA dark and narrow chimney leads up from a fireplace; although you might be\nable to get up it, it seems unlikely you could get back down.",
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
    "PAINT",
    "PAINT-PSEUDO"
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
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "UP-CHIMNEY-F",
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [
    "PAINTING"
   ],
   "source": "<ROOM STUDIO\n      (IN ROOMS)\n      (DESC \"Studio\")\n      (LDESC\n\"This was once an artist's studio. The walls are splattered with paints of\n69 different colors. To the west is a doorway (also covered with paint).\nA dark and narrow chimney leads up from a fireplace; although you might be\nable to get up it, it seems unlikely you could get back down.\")\n      (WEST TO CELLAR)\n      (UP PER UP-CHIMNEY-F)\n      (FLAGS RLANDBIT)\n      (GLOBAL CHIMNEY)\n      (PSEUDO \"PAINT\" PAINT-PSEUDO)>",
   "referencedBy": []
  },
  "TROLL-ROOM": {
   "name": "TROLL-ROOM",
   "file": "south-of-res.zil",
   "line": 73,
   "endLine": 88,
   "desc": "Troll Room",
   "ldesc": "This is a small room with passages to the east, northeast and south, and a\nforbidding hole leading west. Bloodstains and deep scratches (perhaps made by\nan axe) mar the walls.",
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
     "to": "ROUND-ROOM",
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
    },
    {
     "to": "RESERVOIR-SOUTH",
     "kind": "conditional",
     "condition": "TROLL-FLAG",
     "else": "\"The troll fends you off with a menacing gesture.\"",
     "per": null,
     "message": null,
     "dir": "NE"
    }
   ],
   "contents": [
    "TROLL"
   ],
   "source": "<ROOM TROLL-ROOM\n      (IN ROOMS)\n      (DESC \"Troll Room\")\n      (LDESC\n\"This is a small room with passages to the east, northeast and south, and a\nforbidding hole leading west. Bloodstains and deep scratches (perhaps made by\nan axe) mar the walls.\")\n      (SOUTH TO CELLAR)\n      (EAST TO ROUND-ROOM IF TROLL-FLAG ELSE\n       \"The troll fends you off with a menacing gesture.\")\n      (WEST TO MAZE-1 IF TROLL-FLAG ELSE\n       \"The troll fends you off with a menacing gesture.\")\n      (NE TO RESERVOIR-SOUTH IF TROLL-FLAG ELSE\n       \"The troll fends you off with a menacing gesture.\")\n      (FLAGS RLANDBIT)\n      (ACTION TROLL-ROOM-F)>",
   "referencedBy": [
    "DEAD-FUNCTION"
   ]
  },
  "ROUND-ROOM": {
   "name": "ROUND-ROOM",
   "file": "south-of-res.zil",
   "line": 132,
   "endLine": 143,
   "desc": "Round Room",
   "ldesc": "This is a circular room with passages in all directions. Several have\nunfortunately been blocked by cave-ins.",
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
     "to": "WHITE-CLIFFS-BEACH",
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
     "to": "RESERVOIR-SOUTH",
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
     "dir": "SOUTH"
    },
    {
     "to": "DOME-ROOM",
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
   "source": "<ROOM ROUND-ROOM\n      (IN ROOMS)\n      (DESC \"Round Room\")\n      (LDESC\n\"This is a circular room with passages in all directions. Several have\nunfortunately been blocked by cave-ins.\")\n      (EAST TO WHITE-CLIFFS-BEACH)\n      (WEST TO TROLL-ROOM)\n      (NORTH TO RESERVOIR-SOUTH)\n      (SOUTH TO TWISTING-PASSAGE)\n      (SE TO DOME-ROOM)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "RESERVOIR-SOUTH": {
   "name": "RESERVOIR-SOUTH",
   "file": "south-of-res.zil",
   "line": 145,
   "endLine": 155,
   "desc": "Reservoir South",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "RESERVOIR-SOUTH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-WATER"
   ],
   "pseudo": [
    "LAKE",
    "LAKE-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "TROLL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "DAM",
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
     "dir": "SOUTH"
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
   "source": "<ROOM RESERVOIR-SOUTH\n      (IN ROOMS)\n      (DESC \"Reservoir South\")\n      (SW TO TROLL-ROOM)\n      (EAST TO DAM)\n      (SOUTH TO ROUND-ROOM)\n      (NORTH TO RESERVOIR IF LOW-TIDE ELSE \"You would drown.\")\n      (FLAGS RLANDBIT)\n      (GLOBAL GLOBAL-WATER)\n      (PSEUDO \"LAKE\" LAKE-PSEUDO)\n      (ACTION RESERVOIR-SOUTH-F)>",
   "referencedBy": [
    "BOLT-F"
   ]
  },
  "DAM": {
   "name": "DAM",
   "file": "south-of-res.zil",
   "line": 166,
   "endLine": 174,
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
   "action": "DAM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-WATER",
    "DAM-OBJECT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
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
     "to": "MAINTENANCE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
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
    "MATCH",
    "GUIDE",
    "CONTROL-PANEL",
    "BOLT",
    "BUBBLE"
   ],
   "source": "<ROOM DAM\n      (IN ROOMS)\n      (DESC \"Dam\")\n      (DOWN TO DAM-BASE)\n      (NE TO MAINTENANCE-ROOM)\n      (WEST TO RESERVOIR-SOUTH)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL GLOBAL-WATER DAM-OBJECT)\n      (ACTION DAM-F)>",
   "referencedBy": [
    "BUTTON-F"
   ]
  },
  "MAINTENANCE-ROOM": {
   "name": "MAINTENANCE-ROOM",
   "file": "south-of-res.zil",
   "line": 345,
   "endLine": 355,
   "desc": "Maintenance Room",
   "ldesc": "This was the maintenance room for Flood Control Dam #3. Apparently, the room\nhas been ransacked, for most of the valuable equipment is gone. On one wall\nis a group of buttons colored yellow, brown, and red. The only doorway is\nsouthwest.",
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
     "to": "DAM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "DAM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "YELLOW-BUTTON",
    "BROWN-BUTTON",
    "RED-BUTTON",
    "SCREWDRIVER",
    "WRENCH"
   ],
   "source": "<ROOM MAINTENANCE-ROOM\n      (IN ROOMS)\n      (DESC \"Maintenance Room\")\n      (LDESC\n\"This was the maintenance room for Flood Control Dam #3. Apparently, the room\nhas been ransacked, for most of the valuable equipment is gone. On one wall\nis a group of buttons colored yellow, brown, and red. The only doorway is\nsouthwest.\")\n      (SW TO DAM)\n      (OUT TO DAM)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "DAM-BASE": {
   "name": "DAM-BASE",
   "file": "south-of-res.zil",
   "line": 414,
   "endLine": 423,
   "desc": "Dam Base",
   "ldesc": "You are at the base of the dam, which looms above you. The river Frigid\nbegins here. Across it, to the east, cliffs form giant walls stretching\nnorth-south along the shore.",
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
     "to": "DAM",
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
   "source": "<ROOM DAM-BASE\n      (IN ROOMS)\n      (DESC \"Dam Base\")\n      (LDESC\n\"You are at the base of the dam, which looms above you. The river Frigid\nbegins here. Across it, to the east, cliffs form giant walls stretching\nnorth-south along the shore.\")\n      (UP TO DAM)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL GLOBAL-WATER RIVER)>",
   "referencedBy": []
  },
  "WHITE-CLIFFS-BEACH": {
   "name": "WHITE-CLIFFS-BEACH",
   "file": "south-of-res.zil",
   "line": 521,
   "endLine": 529,
   "desc": "White Cliffs Beach",
   "ldesc": "You are on a narrow strip of beach between the White Cliffs and the Frigid\nRiver. A tiny passage leads west into the cliff.",
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
     "to": "ROUND-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "WHITE-CLIFF"
   ],
   "source": "<ROOM WHITE-CLIFFS-BEACH\n      (IN ROOMS)\n      (DESC \"White Cliffs Beach\")\n      (LDESC\n\"You are on a narrow strip of beach between the White Cliffs and the Frigid\nRiver. A tiny passage leads west into the cliff.\")\n      (WEST TO ROUND-ROOM)\n      (FLAGS RLANDBIT SACREDBIT)\n      (GLOBAL GLOBAL-WATER RIVER)>",
   "referencedBy": []
  },
  "DOME-ROOM": {
   "name": "DOME-ROOM",
   "file": "south-of-res.zil",
   "line": 543,
   "endLine": 550,
   "desc": "Dome Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DOME-ROOM-F",
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
     "to": "ROUND-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "TEMPLE",
     "kind": "conditional",
     "condition": "DOME-FLAG",
     "else": "\"You'd fracture many bones.\"",
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "RAILING"
   ],
   "source": "<ROOM DOME-ROOM\n      (IN ROOMS)\n      (DESC \"Dome Room\")\n      (NW TO ROUND-ROOM)\n      (DOWN TO TEMPLE IF DOME-FLAG ELSE \"You'd fracture many bones.\")\n      (FLAGS RLANDBIT)\n      (PSEUDO \"DOME\" DOME-PSEUDO)\n      (ACTION DOME-ROOM-F)>",
   "referencedBy": []
  },
  "TEMPLE": {
   "name": "TEMPLE",
   "file": "south-of-res.zil",
   "line": 583,
   "endLine": 593,
   "desc": "Temple",
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
   "action": "TEMPLE-F",
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
     "to": "EGYPTIAN-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "EGYPTIAN-ROOM",
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
     "message": "You cannot reach the rope.",
     "dir": "UP"
    },
    {
     "to": "ALTAR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "PEDESTAL",
    "BELL",
    "PRAYER"
   ],
   "source": "<ROOM TEMPLE\n      (IN ROOMS)\n      (DESC \"Temple\")\n      (DOWN TO EGYPTIAN-ROOM)\n      (EAST TO EGYPTIAN-ROOM)\n      (UP \"You cannot reach the rope.\")\n      (SOUTH TO ALTAR)\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (GLOBAL STAIRS)\n      (PSEUDO \"DOME\" DOME-PSEUDO)\n      (ACTION TEMPLE-F)>",
   "referencedBy": [
    "DOME-ROOM-F"
   ]
  },
  "EGYPTIAN-ROOM": {
   "name": "EGYPTIAN-ROOM",
   "file": "south-of-res.zil",
   "line": 663,
   "endLine": 670,
   "desc": "Egyptian Room",
   "ldesc": "This looks like an Egyptian tomb. A stair ascends to the west.",
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
     "to": "TEMPLE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "TEMPLE",
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
   "source": "<ROOM EGYPTIAN-ROOM\n      (IN ROOMS)\n      (DESC \"Egyptian Room\")\n      (LDESC \"This looks like an Egyptian tomb. A stair ascends to the west.\")\n      (WEST TO TEMPLE)\n      (UP TO TEMPLE)\n      (FLAGS RLANDBIT)\n      (GLOBAL STAIRS)>",
   "referencedBy": [
    "RANDOMIZE-OBJECTS"
   ]
  },
  "ALTAR": {
   "name": "ALTAR",
   "file": "south-of-res.zil",
   "line": 721,
   "endLine": 731,
   "desc": "Altar",
   "ldesc": "Standing by the temple's altar, you can see a small hole in the floor\nwhich leads into darkness. The rest of the temple is north of here.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SACREDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ALTAR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "TEMPLE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "WINDY-CAVE",
     "kind": "conditional",
     "condition": "COFFIN-CURE",
     "else": "\"You haven't a prayer of getting the coffin down there.\"",
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "ALTAR-OBJECT"
   ],
   "source": "<ROOM ALTAR\n      (IN ROOMS)\n      (DESC \"Altar\")\n      (LDESC\n\"Standing by the temple's altar, you can see a small hole in the floor\nwhich leads into darkness. The rest of the temple is north of here.\")\n      (NORTH TO TEMPLE)\n      (DOWN TO WINDY-CAVE IF COFFIN-CURE ELSE\n       \"You haven't a prayer of getting the coffin down there.\")\n      (FLAGS RLANDBIT ONBIT SACREDBIT)\n      (ACTION ALTAR-F)>",
   "referencedBy": [
    "V-PRAY",
    "JIGS-UP",
    "DEAD-FUNCTION"
   ]
  },
  "TWISTING-PASSAGE": {
   "name": "TWISTING-PASSAGE",
   "file": "south-of-res.zil",
   "line": 866,
   "endLine": 875,
   "desc": "Twisting Passage",
   "ldesc": "This is a crooked corridor from the north, with forks to the southwest\nand south.",
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
     "to": "WINDY-CAVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "MIRROR-ROOM-SOUTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM TWISTING-PASSAGE\n      (IN ROOMS)\n      (DESC \"Twisting Passage\")\n      (LDESC\n\"This is a crooked corridor from the north, with forks to the southwest\nand south.\")\n      (NORTH TO ROUND-ROOM)\n      (SOUTH TO WINDY-CAVE)\n      (SW TO MIRROR-ROOM-SOUTH)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "MIRROR-ROOM-SOUTH": {
   "name": "MIRROR-ROOM-SOUTH",
   "file": "south-of-res.zil",
   "line": 877,
   "endLine": 884,
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
   "action": "MIRROR-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MIRROR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "TWISTING-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "WINDY-CAVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM MIRROR-ROOM-SOUTH\n      (IN ROOMS)\n      (DESC \"Mirror Room\")\n      (NE TO TWISTING-PASSAGE)\n      (EAST TO WINDY-CAVE)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL MIRROR)\n      (ACTION MIRROR-ROOM-F)>",
   "referencedBy": [
    "ME-F",
    "MIRROR-F"
   ]
  },
  "WINDY-CAVE": {
   "name": "WINDY-CAVE",
   "file": "south-of-res.zil",
   "line": 886,
   "endLine": 897,
   "desc": "Windy Cave",
   "ldesc": "This is a tiny cave with entrances west and north, and a dark, forbidding\nstaircase leading down.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "WINDY-CAVE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "TWISTING-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MIRROR-ROOM-SOUTH",
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
   "source": "<ROOM WINDY-CAVE\n      (IN ROOMS)\n      (DESC \"Windy Cave\")\n      (LDESC\n\"This is a tiny cave with entrances west and north, and a dark, forbidding\nstaircase leading down.\")\n      (NORTH TO TWISTING-PASSAGE)\n      (WEST TO MIRROR-ROOM-SOUTH)\n      (DOWN TO ENTRANCE-TO-HADES)\n      (FLAGS RLANDBIT)\n      (GLOBAL STAIRS)\n      (ACTION WINDY-CAVE-F)>",
   "referencedBy": []
  },
  "ENTRANCE-TO-HADES": {
   "name": "ENTRANCE-TO-HADES",
   "file": "south-of-res.zil",
   "line": 899,
   "endLine": 910,
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
   "action": "ENTRANCE-TO-HADES-F",
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
     "to": "WINDY-CAVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "HADES",
     "kind": "conditional",
     "condition": "HADES-FLAG",
     "else": "\"The spirits block you from passing through the gate.\"",
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "HADES",
     "kind": "conditional",
     "condition": "HADES-FLAG",
     "else": "\"The spirits block you from passing through the gate.\"",
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "GHOSTS"
   ],
   "source": "<ROOM ENTRANCE-TO-HADES\n      (IN ROOMS)\n      (DESC \"Entrance to Hades\")\n      (UP TO WINDY-CAVE)\n      (IN TO HADES IF HADES-FLAG ELSE\n       \"The spirits block you from passing through the gate.\")\n      (SOUTH TO HADES IF HADES-FLAG ELSE\n       \"The spirits block you from passing through the gate.\")\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL BODIES)\n      (PSEUDO \"GATE\" GATE-PSEUDO \"GATES\" GATE-PSEUDO)\n      (ACTION ENTRANCE-TO-HADES-F)>",
   "referencedBy": [
    "I-XB",
    "JIGS-UP",
    "GOTO"
   ]
  },
  "HADES": {
   "name": "HADES",
   "file": "south-of-res.zil",
   "line": 1016,
   "endLine": 1026,
   "desc": "Hades",
   "ldesc": "You have entered the Land of the Living Dead. Thousands of lost souls can\nbe heard weeping and moaning. In a corner are the remains of previous\nadventurers less fortunate than yourself. A passage exits to the north.",
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
   "source": "<ROOM HADES\n      (IN ROOMS)\n      (DESC \"Hades\")\n      (LDESC\n\"You have entered the Land of the Living Dead. Thousands of lost souls can\nbe heard weeping and moaning. In a corner are the remains of previous\nadventurers less fortunate than yourself. A passage exits to the north.\")\n      (OUT TO ENTRANCE-TO-HADES)\n      (NORTH TO ENTRANCE-TO-HADES)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL BODIES)>",
   "referencedBy": [
    "SKELETON-F",
    "BELL-F"
   ]
  },
  "RIVER-1": {
   "name": "RIVER-1",
   "file": "south-of-res.zil",
   "line": 1054,
   "endLine": 1066,
   "desc": "Frigid River",
   "ldesc": "You are on the Frigid River just below the dam. The river flows quietly\nhere. There is a landing on the west shore.",
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
   "source": "<ROOM RIVER-1\n      (IN ROOMS)\n      (DESC \"Frigid River\")\n      (LDESC\n\"You are on the Frigid River just below the dam. The river flows quietly\nhere. There is a landing on the west shore.\")\n      (UP \"You cannot go upstream due to strong currents.\")\n      (WEST TO DAM-BASE)\n      (LAND TO DAM-BASE)\n      (DOWN TO RIVER-2)\n      (EAST \"The White Cliffs prevent your landing here.\")\n      (FLAGS NONLANDBIT SACREDBIT ONBIT)\n      (GLOBAL GLOBAL-WATER RIVER)>",
   "referencedBy": [
    "INFLATED-BOAT-F",
    "I-RIVER"
   ]
  },
  "RIVER-2": {
   "name": "RIVER-2",
   "file": "south-of-res.zil",
   "line": 1068,
   "endLine": 1078,
   "desc": "Frigid River",
   "ldesc": "The river descends here into a valley. The are no landings on either\nshore. In the distance a faint rumbling can be heard.",
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
     "message": "There are no landings here.",
     "dir": "LAND"
    }
   ],
   "contents": [],
   "source": "<ROOM RIVER-2\n      (IN ROOMS)\n      (DESC \"Frigid River\")\n      (LDESC\n\"The river descends here into a valley. The are no landings on either\nshore. In the distance a faint rumbling can be heard.\")\n      (UP \"You cannot go upstream due to strong currents.\")\n      (DOWN TO RIVER-3)\n      (LAND \"There are no landings here.\")\n      (FLAGS NONLANDBIT SACREDBIT)\n      (GLOBAL GLOBAL-WATER RIVER)>",
   "referencedBy": [
    "INFLATED-BOAT-F",
    "I-RIVER"
   ]
  },
  "RIVER-3": {
   "name": "RIVER-3",
   "file": "south-of-res.zil",
   "line": 1080,
   "endLine": 1091,
   "desc": "Frigid River",
   "ldesc": "The sound of rushing water is nearly unbearable here. On the both the\neast and west shores are beaches.",
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
     "to": "SANDY-BEACH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "WHITE-CLIFFS-BEACH",
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
     "message": "East or west?",
     "dir": "LAND"
    }
   ],
   "contents": [
    "BUOY"
   ],
   "source": "<ROOM RIVER-3\n      (IN ROOMS)\n      (DESC \"Frigid River\")\n      (LDESC\n\"The sound of rushing water is nearly unbearable here. On the both the\neast and west shores are beaches.\")\n      (UP \"You cannot go upstream due to strong currents.\")\n      (EAST TO SANDY-BEACH)\n      (WEST TO WHITE-CLIFFS-BEACH)\n      (LAND \"East or west?\")\n      (FLAGS NONLANDBIT SACREDBIT ONBIT)\n      (GLOBAL GLOBAL-WATER RIVER)>",
   "referencedBy": [
    "INFLATED-BOAT-F",
    "I-RIVER"
   ]
  },
  "SANDY-BEACH": {
   "name": "SANDY-BEACH",
   "file": "south-of-res.zil",
   "line": 1123,
   "endLine": 1133,
   "desc": "Sandy Beach",
   "ldesc": "You are on a large beach on the east shore of the river, which flows by\nquickly. A path runs south along the river, and a sand-filled passage leads\nnortheast.",
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
     "to": "ARAGAIN-FALLS",
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
   "source": "<ROOM SANDY-BEACH\n      (IN ROOMS)\n      (DESC \"Sandy Beach\")\n      (LDESC\n\"You are on a large beach on the east shore of the river, which flows by\nquickly. A path runs south along the river, and a sand-filled passage leads\nnortheast.\")\n      (NE TO SANDY-CAVE)\n      (SOUTH TO ARAGAIN-FALLS)\n      (FLAGS RLANDBIT SACREDBIT)\n      (GLOBAL GLOBAL-WATER RIVER)>",
   "referencedBy": []
  },
  "SANDY-CAVE": {
   "name": "SANDY-CAVE",
   "file": "south-of-res.zil",
   "line": 1142,
   "endLine": 1148,
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
    },
    {
     "to": "SANDY-BEACH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "SAND",
    "SCARAB"
   ],
   "source": "<ROOM SANDY-CAVE\n      (IN ROOMS)\n      (DESC \"Sandy Cave\")\n      (LDESC \"This is a sand-filled cave whose exit is to the southwest.\")\n      (SW TO SANDY-BEACH)\n      (OUT TO SANDY-BEACH)\n      (FLAGS RLANDBIT)>",
   "referencedBy": [
    "GROUND-F"
   ]
  },
  "ARAGAIN-FALLS": {
   "name": "ARAGAIN-FALLS",
   "file": "south-of-res.zil",
   "line": 1191,
   "endLine": 1202,
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
   "action": "ARAGAIN-FALLS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIRS",
    "GLOBAL-WATER",
    "RIVER",
    "RAINBOW"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "END-OF-RAINBOW",
     "kind": "conditional",
     "condition": "RAINBOW-FLAG",
     "else": "\"Can you walk on water vapor?\"",
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
     "to": "SANDY-BEACH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "END-OF-RAINBOW",
     "kind": "conditional",
     "condition": "RAINBOW-FLAG",
     "else": "\"Can you walk on water vapor?\"",
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM ARAGAIN-FALLS\n      (IN ROOMS)\n      (DESC \"Aragain Falls\")\n      (WEST TO END-OF-RAINBOW IF RAINBOW-FLAG ELSE\n       \"Can you walk on water vapor?\")\n      (DOWN \"It's a long way...\")\n      (NORTH TO SANDY-BEACH)\n      (UP TO END-OF-RAINBOW IF RAINBOW-FLAG ELSE\n       \"Can you walk on water vapor?\")\n      (FLAGS RLANDBIT SACREDBIT ONBIT)\n      (GLOBAL STAIRS GLOBAL-WATER RIVER RAINBOW)\n      (ACTION ARAGAIN-FALLS-F)>",
   "referencedBy": [
    "SCEPTRE-F"
   ]
  }
 },
 "objects": {
  "MAILBOX": {
   "name": "MAILBOX",
   "file": "above-ground.zil",
   "line": 30,
   "endLine": 37,
   "desc": "small mailbox",
   "ldesc": null,
   "fdesc": null,
   "loc": "WEST-OF-HOUSE",
   "flags": [
    "CONTBIT",
    "TRYTAKEBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "MAILBOX",
    "BOX"
   ],
   "adjectives": [
    "SMALL",
    "MAIL"
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
    "LEAFLET"
   ],
   "source": "<OBJECT MAILBOX\n\t(IN WEST-OF-HOUSE)\n\t(DESC \"small mailbox\")\n\t(SYNONYM MAILBOX BOX)\n\t(ADJECTIVE SMALL MAIL)\n\t(FLAGS CONTBIT TRYTAKEBIT SEARCHBIT)\n\t(CAPACITY 10)\n\t(ACTION MAILBOX-F)>",
   "referencedBy": [
    "MAILBOX-F",
    "GO"
   ]
  },
  "LEAFLET": {
   "name": "LEAFLET",
   "file": "above-ground.zil",
   "line": 44,
   "endLine": 50,
   "desc": "leaflet",
   "ldesc": null,
   "fdesc": null,
   "loc": "MAILBOX",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "LEAFLET",
    "MAIL"
   ],
   "adjectives": [],
   "action": "LEAFLET-F",
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
   "source": "<OBJECT LEAFLET\n\t(IN MAILBOX)\n\t(DESC \"leaflet\")\n\t(SYNONYM LEAFLET MAIL)\n\t(FLAGS READBIT TAKEBIT BURNBIT)\n\t(SIZE 2)\n\t(ACTION LEAFLET-F)>",
   "referencedBy": []
  },
  "FRONT-DOOR": {
   "name": "FRONT-DOOR",
   "file": "above-ground.zil",
   "line": 61,
   "endLine": 67,
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
   "action": "WOODEN-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FRONT-DOOR\n\t(IN WEST-OF-HOUSE)\n\t(SYNONYM DOOR)\n\t(ADJECTIVE FRONT BOARDED)\n\t(DESC \"door\")\n\t(FLAGS DOORBIT NDESCBIT)\n\t(ACTION WOODEN-DOOR-F)>",
   "referencedBy": []
  },
  "WHITE-HOUSE": {
   "name": "WHITE-HOUSE",
   "file": "above-ground.zil",
   "line": 148,
   "endLine": 154,
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
    "BEAUTI"
   ],
   "action": "WHITE-HOUSE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WHITE-HOUSE\t\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM HOUSE)\n\t(ADJECTIVE WHITE BEAUTI)\n\t(DESC \"white house\")\n\t(FLAGS NDESCBIT)\n\t(ACTION WHITE-HOUSE-F)>",
   "referencedBy": []
  },
  "BOARD": {
   "name": "BOARD",
   "file": "above-ground.zil",
   "line": 169,
   "endLine": 174,
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
   "source": "<OBJECT BOARD\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"board\")\n\t(SYNONYM BOARDS BOARD)\n\t(FLAGS NDESCBIT)\n\t(ACTION BOARD-F)>",
   "referencedBy": [
    "BOARD-F",
    "KITCHEN-WINDOW-F",
    "WATER-F"
   ]
  },
  "BOARDED-WINDOW": {
   "name": "BOARDED-WINDOW",
   "file": "above-ground.zil",
   "line": 180,
   "endLine": 186,
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
   "action": "BOARDED-WINDOW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BOARDED-WINDOW\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"boarded window\")\n        (SYNONYM WINDOW)\n\t(ADJECTIVE BOARDED)\n\t(FLAGS NDESCBIT)\n\t(ACTION BOARDED-WINDOW-F)>",
   "referencedBy": []
  },
  "FOREST": {
   "name": "FOREST",
   "file": "above-ground.zil",
   "line": 196,
   "endLine": 201,
   "desc": "forest",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "FOREST",
    "TREES"
   ],
   "adjectives": [],
   "action": "FOREST-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FOREST\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"forest\")\n\t(SYNONYM FOREST TREES)\n\t(FLAGS NDESCBIT)\n\t(ACTION FOREST-F)>",
   "referencedBy": []
  },
  "TREE": {
   "name": "TREE",
   "file": "above-ground.zil",
   "line": 209,
   "endLine": 214,
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
    "LARGE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TREE\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"tree\")\n\t(SYNONYM TREE BRANCH)\n\t(ADJECTIVE LARGE)\n\t(FLAGS NDESCBIT CLIMBBIT)>",
   "referencedBy": [
    "UP-A-TREE-F",
    "V-CLIMB",
    "V-CLIMB-DOWN"
   ]
  },
  "NEST": {
   "name": "NEST",
   "file": "above-ground.zil",
   "line": 304,
   "endLine": 312,
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
   "action": "NEST-F",
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
   "source": "<OBJECT NEST\n\t(IN UP-A-TREE)\n\t(DESC \"bird's nest\")\n\t(FDESC \"Beside you on the branch is a small bird's nest.\")\n\t(SYNONYM NEST)\n\t(ADJECTIVE BIRDS)\n\t(FLAGS TAKEBIT BURNBIT CONTBIT OPENBIT SEARCHBIT)\n\t(CAPACITY 20)\n\t(ACTION NEST-F)>",
   "referencedBy": []
  },
  "EGG": {
   "name": "EGG",
   "file": "above-ground.zil",
   "line": 319,
   "endLine": 329,
   "desc": "jeweled egg",
   "ldesc": null,
   "fdesc": "In the bird's nest is a large egg encrusted with precious jewels, apparently\nscavenged by a childless songbird.",
   "loc": "NEST",
   "flags": [
    "TREASUREBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "EGG",
    "TREASURE"
   ],
   "adjectives": [
    "JEWELED"
   ],
   "action": "EGG-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "6"
    ]
   },
   "contents": [],
   "source": "<OBJECT EGG\n\t(IN NEST)\n\t(DESC \"jeweled egg\")\n\t(FDESC\n\"In the bird's nest is a large egg encrusted with precious jewels, apparently\nscavenged by a childless songbird.\")\n\t(SYNONYM EGG TREASURE)\n\t(ADJECTIVE JEWELED)\n\t(FLAGS TREASUREBIT TAKEBIT)\n\t(VALUE 6)\n\t(ACTION EGG-F)>",
   "referencedBy": [
    "NEST-F",
    "EGG-F"
   ]
  },
  "LEAVES": {
   "name": "LEAVES",
   "file": "above-ground.zil",
   "line": 336,
   "endLine": 343,
   "desc": "pile of leaves",
   "ldesc": "On the ground is a pile of leaves.",
   "fdesc": null,
   "loc": "FOREST-PATH",
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
   "action": "LEAVES-F",
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
   "source": "<OBJECT LEAVES\n\t(IN FOREST-PATH)\n\t(DESC \"pile of leaves\")\n\t(LDESC \"On the ground is a pile of leaves.\")\n\t(SYNONYM LEAVES LEAF PILE)\n\t(FLAGS TAKEBIT BURNBIT TRYTAKEBIT)\n\t(SIZE 25)\n\t(ACTION LEAVES-F)>",
   "referencedBy": [
    "LEAVES-F",
    "GRATE-F"
   ]
  },
  "CLIMBABLE-CLIFF": {
   "name": "CLIMBABLE-CLIFF",
   "file": "above-ground.zil",
   "line": 415,
   "endLine": 420,
   "desc": "cliff",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "CLIMBBIT"
   ],
   "synonyms": [
    "CLIFF"
   ],
   "adjectives": [],
   "action": "CLIFF-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CLIMBABLE-CLIFF\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"cliff\")\n\t(SYNONYM CLIFF)\n\t(FLAGS NDESCBIT CLIMBBIT)\n\t(ACTION CLIFF-F)>",
   "referencedBy": [
    "CLIFF-F"
   ]
  },
  "RAINBOW": {
   "name": "RAINBOW",
   "file": "above-ground.zil",
   "line": 461,
   "endLine": 466,
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
   "action": "RAINBOW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RAINBOW\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"rainbow\")\n\t(SYNONYM RAINBOW)\n\t(FLAGS NDESCBIT CLIMBBIT)\n\t(ACTION RAINBOW-F)>",
   "referencedBy": []
  },
  "POT-OF-GOLD": {
   "name": "POT-OF-GOLD",
   "file": "above-ground.zil",
   "line": 477,
   "endLine": 485,
   "desc": "pot of gold",
   "ldesc": null,
   "fdesc": "At the end of the rainbow is a pot of gold.",
   "loc": "END-OF-RAINBOW",
   "flags": [
    "TREASUREBIT",
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
     "19"
    ]
   },
   "contents": [],
   "source": "<OBJECT POT-OF-GOLD\n\t(IN END-OF-RAINBOW)\n\t(DESC \"pot of gold\")\n\t(FDESC \"At the end of the rainbow is a pot of gold.\")\n\t(SYNONYM POT GOLD TREASURE)\n\t(ADJECTIVE GOLD)\n\t(FLAGS TREASUREBIT TAKEBIT INVISIBLE)\n\t(SIZE 15)\n\t(VALUE 19)>",
   "referencedBy": [
    "SCEPTRE-F"
   ]
  },
  "KITCHEN-WINDOW": {
   "name": "KITCHEN-WINDOW",
   "file": "above-ground.zil",
   "line": 489,
   "endLine": 495,
   "desc": "window",
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
    "SMALL"
   ],
   "action": "KITCHEN-WINDOW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT\tKITCHEN-WINDOW\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"window\")\n\t(SYNONYM WINDOW)\n\t(ADJECTIVE SMALL)\n\t(FLAGS DOORBIT NDESCBIT)\n\t(ACTION KITCHEN-WINDOW-F)>",
   "referencedBy": [
    "DESCRIBE-WINDOW",
    "KITCHEN-WINDOW-F"
   ]
  },
  "KITCHEN-TABLE": {
   "name": "KITCHEN-TABLE",
   "file": "above-ground.zil",
   "line": 537,
   "endLine": 542,
   "desc": "table",
   "ldesc": null,
   "fdesc": null,
   "loc": "KITCHEN",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "SEARCHBIT",
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
     "50"
    ]
   },
   "contents": [
    "SANDWICH-BAG",
    "BOTTLE"
   ],
   "source": "<OBJECT KITCHEN-TABLE\n\t(IN KITCHEN)\n\t(DESC \"table\")\n\t(SYNONYM TABLE)\n\t(FLAGS NDESCBIT CONTBIT SEARCHBIT OPENBIT SURFACEBIT)\n\t(CAPACITY 50)>",
   "referencedBy": []
  },
  "SANDWICH-BAG": {
   "name": "SANDWICH-BAG",
   "file": "above-ground.zil",
   "line": 544,
   "endLine": 554,
   "desc": "brown sack",
   "ldesc": null,
   "fdesc": "On the table is an elongated brown sack, smelling of hot peppers.",
   "loc": "KITCHEN-TABLE",
   "flags": [
    "TAKEBIT",
    "CONTBIT",
    "BURNBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "BAG",
    "SACK"
   ],
   "adjectives": [
    "BROWN"
   ],
   "action": "SANDWICH-BAG-F",
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
   "source": "<OBJECT SANDWICH-BAG\n\t(IN KITCHEN-TABLE)\n\t(DESC \"brown sack\")\n\t(SYNONYM BAG SACK)\n\t(ADJECTIVE BROWN)\n\t(FLAGS TAKEBIT CONTBIT BURNBIT SEARCHBIT)\n\t(FDESC\n\"On the table is an elongated brown sack, smelling of hot peppers.\")\n\t(CAPACITY 9)\n\t(SIZE 9)\n\t(ACTION SANDWICH-BAG-F)>",
   "referencedBy": []
  },
  "LUNCH": {
   "name": "LUNCH",
   "file": "above-ground.zil",
   "line": 561,
   "endLine": 567,
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
    "LUNCH"
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
   "source": "<OBJECT LUNCH\n\t(IN SANDWICH-BAG)\n\t(DESC \"lunch\")\n\t(LDESC \"A hot pepper sandwich is here.\")\n\t(SYNONYM FOOD SANDWICH LUNCH)\n\t(ADJECTIVE HOT PEPPER)\n\t(FLAGS TAKEBIT FOODBIT)>",
   "referencedBy": [
    "SANDWICH-BAG-F",
    "CYCLOPS-F"
   ]
  },
  "GARLIC": {
   "name": "GARLIC",
   "file": "above-ground.zil",
   "line": 569,
   "endLine": 575,
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
   "source": "<OBJECT GARLIC\n\t(IN SANDWICH-BAG)\n\t(DESC \"clove of garlic\")\n\t(SYNONYM GARLIC CLOVE)\n\t(FLAGS TAKEBIT FOODBIT)\n\t(SIZE 4)\n\t(ACTION GARLIC-F)>",
   "referencedBy": [
    "CYCLOPS-F",
    "BAT-ROOM-F",
    "BAT-D",
    "BAT-F"
   ]
  },
  "BOTTLE": {
   "name": "BOTTLE",
   "file": "above-ground.zil",
   "line": 584,
   "endLine": 592,
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
    "BOTTLE"
   ],
   "adjectives": [
    "GLASS"
   ],
   "action": "BOTTLE-F",
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
   "source": "<OBJECT BOTTLE\n\t(IN KITCHEN-TABLE)\n\t(DESC \"glass bottle\")\n\t(FDESC \"A bottle is sitting on the table.\")\n\t(SYNONYM BOTTLE)\n\t(ADJECTIVE GLASS)\n\t(CAPACITY 4)\n\t(FLAGS TAKEBIT TRANSBIT CONTBIT)\n\t(ACTION BOTTLE-F)>",
   "referencedBy": [
    "BOTTLE-F",
    "WATER-F",
    "CYCLOPS-F"
   ]
  },
  "WATER": {
   "name": "WATER",
   "file": "above-ground.zil",
   "line": 610,
   "endLine": 616,
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
    "QUANTITY"
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
   "source": "<OBJECT WATER\n\t(IN BOTTLE)\n\t(DESC \"quantity of water\")\n\t(SYNONYM WATER QUANTITY)\n\t(FLAGS TRYTAKEBIT TAKEBIT DRINKBIT)\n\t(SIZE 4)\n\t(ACTION WATER-F)>",
   "referencedBy": [
    "BOTTLE-F",
    "WATER-F",
    "CYCLOPS-F",
    "STREAM-PSEUDO",
    "LAKE-PSEUDO",
    "SLIDE-F",
    "TORCH-F",
    "PRE-BOARD",
    "HIT-SPOT",
    "PRE-FILL",
    "V-POUR-ON",
    "PRE-PUT",
    "V-SWIM"
   ]
  },
  "KNIFE": {
   "name": "KNIFE",
   "file": "above-ground.zil",
   "line": 673,
   "endLine": 678,
   "desc": "nasty knife",
   "ldesc": null,
   "fdesc": null,
   "loc": "ATTIC",
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
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT KNIFE\n\t(IN ATTIC)\n\t(DESC \"nasty knife\")\n\t(SYNONYM KNIVES KNIFE BLADE)\n\t(ADJECTIVE NASTY UNRUSTY)\n\t(FLAGS TAKEBIT WEAPONBIT TRYTAKEBIT)>",
   "referencedBy": []
  },
  "ROPE": {
   "name": "ROPE",
   "file": "above-ground.zil",
   "line": 680,
   "endLine": 688,
   "desc": "rope",
   "ldesc": null,
   "fdesc": "A large coil of rope is lying in the corner.",
   "loc": "ATTIC",
   "flags": [
    "TAKEBIT",
    "SACREDBIT"
   ],
   "synonyms": [
    "ROPE",
    "COIL"
   ],
   "adjectives": [
    "LARGE"
   ],
   "action": "ROPE-F",
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
   "source": "<OBJECT ROPE\n\t(IN ATTIC)\n\t(DESC \"rope\")\n\t(FDESC \"A large coil of rope is lying in the corner.\")\n\t(SYNONYM ROPE COIL)\n\t(ADJECTIVE LARGE)\n\t(FLAGS TAKEBIT SACREDBIT)\n\t(SIZE 10)\n\t(ACTION ROPE-F)>",
   "referencedBy": [
    "ROPE-F",
    "CYCLOPS-F",
    "STEAL-JUNK"
   ]
  },
  "TROPHY-CASE": {
   "name": "TROPHY-CASE",
   "file": "above-ground.zil",
   "line": 787,
   "endLine": 794,
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
   "action": "TROPHY-CASE-F",
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
   "source": "<OBJECT TROPHY-CASE ;\"first obj so L.R. desc looks right.\"\n\t(IN LIVING-ROOM)\n\t(DESC \"trophy case\")\n\t(SYNONYM CASE)\n\t(ADJECTIVE TROPHY)\n\t(FLAGS TRANSBIT CONTBIT NDESCBIT TRYTAKEBIT SEARCHBIT)\n\t(CAPACITY 10000)\n\t(ACTION TROPHY-CASE-F)>",
   "referencedBy": [
    "LIVING-ROOM-F",
    "TROPHY-CASE-F",
    "FIRSTER"
   ]
  },
  "MAP": {
   "name": "MAP",
   "file": "above-ground.zil",
   "line": 801,
   "endLine": 811,
   "desc": "parchment map",
   "ldesc": null,
   "fdesc": "In the trophy case is an ancient parchment map.",
   "loc": "TROPHY-CASE",
   "flags": [
    "INVISIBLE",
    "READBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "MAP"
   ],
   "adjectives": [
    "OLD",
    "PARCHMENT",
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
     "The map shows a house in a forest clearing. Several paths leave the\nclearing; one, leading southwest, is marked \"To Stone Barrow\"."
    ]
   },
   "contents": [],
   "source": "<OBJECT MAP\n\t(IN TROPHY-CASE)\n\t(DESC \"parchment map\")\n\t(FDESC \"In the trophy case is an ancient parchment map.\")\n\t(SYNONYM MAP)\n\t(ADJECTIVE OLD PARCHMENT ANCIENT)\n\t(FLAGS INVISIBLE READBIT TAKEBIT)\n\t(SIZE 2)\n\t(TEXT\n\"The map shows a house in a forest clearing. Several paths leave the\nclearing; one, leading southwest, is marked \\\"To Stone Barrow\\\".\")>",
   "referencedBy": [
    "LIVING-ROOM-F"
   ]
  },
  "SWORD": {
   "name": "SWORD",
   "file": "above-ground.zil",
   "line": 813,
   "endLine": 821,
   "desc": "sword",
   "ldesc": null,
   "fdesc": "Above the trophy case hangs an elvish sword of great antiquity.",
   "loc": "LIVING-ROOM",
   "flags": [
    "TAKEBIT",
    "WEAPONBIT"
   ],
   "synonyms": [
    "SWORD",
    "BLADE"
   ],
   "adjectives": [
    "ELVISH",
    "OLD"
   ],
   "action": null,
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
   "source": "<OBJECT SWORD\n\t(IN LIVING-ROOM)\n\t(DESC \"sword\")\n\t(FDESC\n\"Above the trophy case hangs an elvish sword of great antiquity.\")\n\t(SYNONYM SWORD BLADE)\n\t(ADJECTIVE ELVISH OLD)\n\t(FLAGS TAKEBIT WEAPONBIT)\n\t(SIZE 30)>",
   "referencedBy": [
    "RUSTY-KNIFE-F"
   ]
  },
  "LAMP": {
   "name": "LAMP",
   "file": "above-ground.zil",
   "line": 823,
   "endLine": 832,
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
   "action": "LAMP-F",
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
   "source": "<OBJECT LAMP\n\t(IN LIVING-ROOM)\n\t(DESC \"brass lantern\")\n\t(FDESC \"A battery-powered brass lantern is on the trophy case.\")\n\t(LDESC \"There is a brass lantern (battery-powered) here.\")\n\t(SYNONYM LAMP LANTERN LIGHT)\n\t(ADJECTIVE BRASS)\n\t(FLAGS TAKEBIT LIGHTBIT)\n\t(SIZE 15)\n\t(ACTION LAMP-F)>",
   "referencedBy": [
    "LAMP-F",
    "I-LANTERN",
    "RANDOMIZE-OBJECTS",
    "DEAD-FUNCTION"
   ]
  },
  "WOODEN-DOOR": {
   "name": "WOODEN-DOOR",
   "file": "above-ground.zil",
   "line": 866,
   "endLine": 874,
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
   "action": "WOODEN-DOOR-F",
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
   "source": "<OBJECT WOODEN-DOOR\n\t(IN LIVING-ROOM)\n\t(DESC \"wooden door\")\n\t(SYNONYM DOOR LETTERING WRITING)\n\t(ADJECTIVE WOODEN GOTHIC STRANGE WEST)\n\t(FLAGS READBIT DOORBIT NDESCBIT TRANSBIT)\n\t(TEXT\n\"The engravings translate to \\\"This space intentionally left blank.\\\"\")\n\t(ACTION WOODEN-DOOR-F)>",
   "referencedBy": []
  },
  "RUG": {
   "name": "RUG",
   "file": "above-ground.zil",
   "line": 884,
   "endLine": 890,
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
   "action": "RUG-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RUG\n\t(IN LIVING-ROOM)\n\t(DESC \"carpet\")\n\t(SYNONYM RUG CARPET)\n\t(ADJECTIVE LARGE ORIENTAL)\n\t(FLAGS NDESCBIT TRYTAKEBIT)\n\t(ACTION RUG-F)>",
   "referencedBy": [
    "RUG-F"
   ]
  },
  "TRAP-DOOR": {
   "name": "TRAP-DOOR",
   "file": "above-ground.zil",
   "line": 918,
   "endLine": 924,
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
    "TRAP-DOOR"
   ],
   "adjectives": [
    "TRAP",
    "DUSTY"
   ],
   "action": "TRAP-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TRAP-DOOR\n\t(IN LIVING-ROOM)\n\t(DESC \"trap door\")\n\t(SYNONYM DOOR TRAPDOOR TRAP-DOOR)\n\t(ADJECTIVE TRAP DUSTY)\n\t(FLAGS DOORBIT NDESCBIT INVISIBLE)\n\t(ACTION TRAP-DOOR-F)>",
   "referencedBy": [
    "TRAP-DOOR-EXIT",
    "LIVING-ROOM-F",
    "RUG-F",
    "TRAP-DOOR-F",
    "CELLAR-F",
    "UP-CHIMNEY-F",
    "JIGS-UP"
   ]
  },
  "GLOBAL-OBJECTS": {
   "name": "GLOBAL-OBJECTS",
   "file": "globals.zil",
   "line": 7,
   "endLine": 9,
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
   "contents": [
    "LOCAL-GLOBALS",
    "IT",
    "INTNUM",
    "WALL",
    "SAILOR",
    "GROUND",
    "GRUE",
    "LUNGS",
    "ME",
    "PATH-OBJECT",
    "HANDS"
   ],
   "source": "<OBJECT GLOBAL-OBJECTS\n        (FLAGS RMUNGBIT INVISIBLE TOUCHBIT SURFACEBIT TRYTAKEBIT OPENBIT\n\t       SEARCHBIT TRANSBIT ONBIT RLANDBIT)>",
   "referencedBy": [
    "ACCESSIBLE?",
    "META-LOC",
    "GLOBAL-CHECK",
    "V-EAT",
    "V-FIND"
   ]
  },
  "LOCAL-GLOBALS": {
   "name": "LOCAL-GLOBALS",
   "file": "globals.zil",
   "line": 11,
   "endLine": 13,
   "desc": "it",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "WHITE-HOUSE",
    "BOARD",
    "BOARDED-WINDOW",
    "FOREST",
    "TREE",
    "CLIMBABLE-CLIFF",
    "RAINBOW",
    "KITCHEN-WINDOW",
    "PSEUDO-OBJECT",
    "GLOBAL-WATER",
    "STAIRS",
    "MIRROR",
    "CHIMNEY",
    "GRATE",
    "SLIDE",
    "DAM-OBJECT",
    "BODIES",
    "RIVER"
   ],
   "source": "<OBJECT LOCAL-GLOBALS\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"it\")>",
   "referencedBy": [
    "ACCESSIBLE?"
   ]
  },
  "ROOMS": {
   "name": "ROOMS",
   "file": "globals.zil",
   "line": 15,
   "endLine": 16,
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
    "UP-A-TREE-F",
    "META-LOC",
    "GWIM",
    "GLOBAL-CHECK",
    "I-THIEF",
    "V-CLIMB",
    "V-CLIMB-DOWN",
    "V-EXIT",
    "PRE-TURN",
    "FIRSTER",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "PSEUDO-OBJECT": {
   "name": "PSEUDO-OBJECT",
   "file": "globals.zil",
   "line": 18,
   "endLine": 21,
   "desc": "pseudo",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": "ME-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PSEUDO-OBJECT\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"pseudo\")\n\t(ACTION ME-F)>",
   "referencedBy": [
    "GLOBAL-CHECK",
    "V-EAT",
    "V-FIND"
   ]
  },
  "IT": {
   "name": "IT",
   "file": "globals.zil",
   "line": 23,
   "endLine": 27,
   "desc": "thing",
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
   "source": "<OBJECT IT\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM IT THEM HER HIM)\n\t(DESC \"thing\")\n\t(FLAGS NDESCBIT TOUCHBIT)>",
   "referencedBy": [
    "MAIN-LOOP-1",
    "ITAKE-CHECK"
   ]
  },
  "INTNUM": {
   "name": "INTNUM",
   "file": "globals.zil",
   "line": 29,
   "endLine": 33,
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
   "source": "<OBJECT INTNUM\n\t(IN GLOBAL-OBJECTS)\n\t(FLAGS TOOLBIT)\n\t(SYNONYM INTNUM)\n\t(DESC \"number\")>",
   "referencedBy": [
    "BLACK-BOOK-F",
    "V-RANDOM"
   ]
  },
  "NOT-HERE-OBJECT": {
   "name": "NOT-HERE-OBJECT",
   "file": "globals.zil",
   "line": 35,
   "endLine": 37,
   "desc": "thing",
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
   "source": "<OBJECT NOT-HERE-OBJECT\n\t(DESC \"thing\")\n\t(ACTION NOT-HERE-OBJECT-F)>",
   "referencedBy": [
    "NOT-HERE-OBJECT-F",
    "MAIN-LOOP-1",
    "GET-OBJECT",
    "ITAKE-CHECK"
   ]
  },
  "GLOBAL-WATER": {
   "name": "GLOBAL-WATER",
   "file": "globals.zil",
   "line": 72,
   "endLine": 77,
   "desc": "water",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DRINKBIT"
   ],
   "synonyms": [
    "WATER"
   ],
   "adjectives": [],
   "action": "WATER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-WATER\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"water\")\n\t(SYNONYM WATER)\n\t(FLAGS DRINKBIT)\n\t(ACTION WATER-F)>",
   "referencedBy": [
    "WATER-F",
    "PRE-BOARD",
    "V-EAT",
    "HIT-SPOT",
    "PRE-FILL",
    "PRE-PUT",
    "V-SWIM"
   ]
  },
  "WALL": {
   "name": "WALL",
   "file": "globals.zil",
   "line": 79,
   "endLine": 82,
   "desc": "wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "WALL",
    "WALLS"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WALL\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"wall\")\n\t(SYNONYM WALL WALLS)>",
   "referencedBy": [
    "V-CLIMB"
   ]
  },
  "STAIRS": {
   "name": "STAIRS",
   "file": "globals.zil",
   "line": 84,
   "endLine": 90,
   "desc": "stairway",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "CLIMBBIT"
   ],
   "synonyms": [
    "STAIR",
    "STEPS",
    "STAIRCASE",
    "STAIRWAY"
   ],
   "adjectives": [
    "STONE",
    "DARK",
    "FORBIDDING"
   ],
   "action": "STAIRS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT STAIRS\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"stairway\")\n\t(SYNONYM STAIR STEPS STAIRCASE STAIRWAY)\n\t(ADJECTIVE STONE DARK FORBIDDING)\n\t(FLAGS NDESCBIT CLIMBBIT)\n\t(ACTION STAIRS-F)>",
   "referencedBy": []
  },
  "SAILOR": {
   "name": "SAILOR",
   "file": "globals.zil",
   "line": 96,
   "endLine": 101,
   "desc": "sailor",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "SAILOR"
   ],
   "adjectives": [],
   "action": "SAILOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SAILOR\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"sailor\")\n\t(SYNONYM SAILOR)\n\t(FLAGS NDESCBIT)\n\t(ACTION SAILOR-F)>",
   "referencedBy": []
  },
  "GROUND": {
   "name": "GROUND",
   "file": "globals.zil",
   "line": 119,
   "endLine": 123,
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
   "action": "GROUND-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GROUND\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"ground\")\n\t(SYNONYM GROUND SAND DIRT FLOOR)\n\t(ACTION GROUND-F)>",
   "referencedBy": [
    "GROUND-F",
    "V-PUT-ON",
    "PRE-TAKE"
   ]
  },
  "GRUE": {
   "name": "GRUE",
   "file": "globals.zil",
   "line": 140,
   "endLine": 145,
   "desc": "lurking grue",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "GRUE"
   ],
   "adjectives": [
    "LURKING"
   ],
   "action": "GRUE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GRUE\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"lurking grue\")\n\t(SYNONYM GRUE)\n\t(ADJECTIVE LURKING)\n\t(ACTION GRUE-F)>",
   "referencedBy": []
  },
  "LUNGS": {
   "name": "LUNGS",
   "file": "globals.zil",
   "line": 158,
   "endLine": 162,
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
   "source": "<OBJECT LUNGS\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"blast of air\")\n\t(SYNONYM LUNGS AIR MOUTH BREATH)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "INFLATABLE-BOAT-F",
    "V-BREATHE",
    "V-FIND"
   ]
  },
  "ME": {
   "name": "ME",
   "file": "globals.zil",
   "line": 164,
   "endLine": 170,
   "desc": "brave adventurer",
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
    "ADVENTURER"
   ],
   "adjectives": [
    "BRAVE"
   ],
   "action": "ME-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ME\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"brave adventurer\")\n\t(SYNONYM ME MYSELF SELF ADVENTURER)\n\t(ADJECTIVE BRAVE)\n\t(FLAGS ACTORBIT)\n\t(ACTION ME-F)>",
   "referencedBy": [
    "CLIFF-F",
    "ME-F",
    "SLIDE-F",
    "ITAKE-CHECK",
    "RIVER-F",
    "V-FIND",
    "V-THROW"
   ]
  },
  "ADVENTURER": {
   "name": "ADVENTURER",
   "file": "globals.zil",
   "line": 194,
   "endLine": 199,
   "desc": "you",
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
     "6"
    ]
   },
   "contents": [],
   "source": "<OBJECT ADVENTURER\n\t(DESC \"you\")\n\t(SYNONYM ADVENTURER)\n\t(FLAGS NDESCBIT INVISIBLE SACREDBIT ACTORBIT)\n\t(STRENGTH 6)\n\t(ACTION 0)>",
   "referencedBy": [
    "NOT-HERE-OBJECT-F",
    "FIND-IN",
    "SKELETON-F",
    "CYCLOPS-F",
    "GO",
    "PARSER",
    "SYNTAX-CHECK",
    "GET-OBJECT",
    "ITAKE-CHECK",
    "LIT?",
    "UP-CHIMNEY-F",
    "INFLATED-BOAT-F",
    "BUOY-F",
    "THIEF-VS-ADVENTURER",
    "THIEF-ROBBED-AND-LEFT",
    "I-FIGHT",
    "I-CURE",
    "V-DIAGNOSE",
    "PRE-BOARD",
    "PRE-DROP",
    "V-EXIT",
    "V-STAB",
    "PRE-TAKE",
    "V-WALK",
    "DESCRIBE-ROOM",
    "PRINT-CONT",
    "JIGS-UP",
    "ITAKE",
    "GOTO"
   ]
  },
  "PATH-OBJECT": {
   "name": "PATH-OBJECT",
   "file": "globals.zil",
   "line": 201,
   "endLine": 207,
   "desc": "passage",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "TRAIL",
    "PATH",
    "PASSAGE",
    "TUNNEL"
   ],
   "adjectives": [
    "FOREST",
    "NARROW",
    "LONG",
    "WINDING"
   ],
   "action": "PATH-OBJECT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PATH-OBJECT\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"passage\")\n\t(SYNONYM TRAIL PATH PASSAGE TUNNEL)\n        (ADJECTIVE FOREST NARROW LONG WINDING)\n\t(FLAGS NDESCBIT)\n\t(ACTION PATH-OBJECT-F)>",
   "referencedBy": []
  },
  "HANDS": {
   "name": "HANDS",
   "file": "globals.zil",
   "line": 215,
   "endLine": 220,
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
   "source": "<OBJECT HANDS\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"pair of hands\")\n\t(SYNONYM PAIR HANDS HAND)\n\t(ADJECTIVE BARE)\n\t(FLAGS NDESCBIT TOOLBIT)>",
   "referencedBy": [
    "WATER-F",
    "GWIM",
    "ITAKE-CHECK",
    "V-ATTACK",
    "V-DIG",
    "V-FIND"
   ]
  },
  "MIRROR": {
   "name": "MIRROR",
   "file": "globals.zil",
   "line": 234,
   "endLine": 239,
   "desc": "mirror",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "TRYTAKEBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "REFLECTION",
    "MIRROR"
   ],
   "adjectives": [],
   "action": "MIRROR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MIRROR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"mirror\")\n\t(SYNONYM REFLECTION MIRROR)\n\t(FLAGS TRYTAKEBIT NDESCBIT)\n\t(ACTION MIRROR-F)>",
   "referencedBy": [
    "MIRROR-ROOM-F",
    "MIRROR-F"
   ]
  },
  "CHIMNEY": {
   "name": "CHIMNEY",
   "file": "globals.zil",
   "line": 278,
   "endLine": 284,
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
   "source": "<OBJECT CHIMNEY\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"chimney\")\n\t(SYNONYM CHIMNEY)\n\t(ADJECTIVE DARK NARROW)\n\t(FLAGS CLIMBBIT NDESCBIT)\n\t(ACTION CHIMNEY-F)>",
   "referencedBy": []
  },
  "BURNED-OUT-LANTERN": {
   "name": "BURNED-OUT-LANTERN",
   "file": "maze.zil",
   "line": 54,
   "endLine": 61,
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
   "source": "<OBJECT BURNED-OUT-LANTERN\n\t(IN MAZE-5)\n\t(DESC \"burned-out lantern\")\n\t(FDESC \"The deceased adventurer's useless lantern is here.\")\n\t(SYNONYM LANTERN LAMP)\n\t(ADJECTIVE RUSTY BURNED DEAD USELESS)\n\t(FLAGS TAKEBIT)\n\t(SIZE 20)>",
   "referencedBy": []
  },
  "BAG-OF-COINS": {
   "name": "BAG-OF-COINS",
   "file": "maze.zil",
   "line": 63,
   "endLine": 72,
   "desc": "leather bag of coins",
   "ldesc": "An old leather bag, bulging with coins, is here.",
   "fdesc": null,
   "loc": "MAZE-5",
   "flags": [
    "TAKEBIT",
    "TREASUREBIT"
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
     "11"
    ]
   },
   "contents": [],
   "source": "<OBJECT BAG-OF-COINS\n\t(IN MAZE-5)\n\t(DESC \"leather bag of coins\")\n\t(LDESC \"An old leather bag, bulging with coins, is here.\")\n\t(SYNONYM BAG COINS TREASURE)\n\t(ADJECTIVE OLD LEATHER)\n\t(FLAGS TAKEBIT TREASUREBIT)\n\t(SIZE 15)\n\t(VALUE 11)\n\t(ACTION BAG-OF-COINS-F)>",
   "referencedBy": [
    "BAG-OF-COINS-F"
   ]
  },
  "RUSTY-KNIFE": {
   "name": "RUSTY-KNIFE",
   "file": "maze.zil",
   "line": 77,
   "endLine": 85,
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
   "action": "RUSTY-KNIFE-F",
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
   "source": "<OBJECT RUSTY-KNIFE\n\t(IN MAZE-5)\n\t(DESC \"rusty knife\")\n\t(FDESC \"Beside the skeleton is a rusty knife.\")\n\t(SYNONYM KNIVES KNIFE)\n\t(ADJECTIVE RUSTY)\n\t(FLAGS TAKEBIT TRYTAKEBIT WEAPONBIT TOOLBIT)\n\t(SIZE 20)\n\t(ACTION RUSTY-KNIFE-F)>",
   "referencedBy": [
    "RUSTY-KNIFE-F"
   ]
  },
  "KEYS": {
   "name": "KEYS",
   "file": "maze.zil",
   "line": 105,
   "endLine": 111,
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
   "source": "<OBJECT KEYS\n\t(IN MAZE-5)\n\t(DESC \"skeleton key\")\n\t(SYNONYM KEY)\n\t(ADJECTIVE SKELETON)\n\t(FLAGS TAKEBIT TOOLBIT)\n\t(SIZE 10)>",
   "referencedBy": [
    "GRATE-F"
   ]
  },
  "SKELETON": {
   "name": "SKELETON",
   "file": "maze.zil",
   "line": 113,
   "endLine": 120,
   "desc": "skeleton",
   "ldesc": "A skeleton, probably the remains of a luckless adventurer, lies here.",
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
   "action": "SKELETON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SKELETON\n\t(IN MAZE-5)\n\t(DESC \"skeleton\")\n\t(LDESC\n\"A skeleton, probably the remains of a luckless adventurer, lies here.\")\n\t(SYNONYM BONES SKELETON BODY)\n\t(FLAGS TRYTAKEBIT NDESCBIT)\n\t(ACTION SKELETON-F)>",
   "referencedBy": []
  },
  "GRATE": {
   "name": "GRATE",
   "file": "maze.zil",
   "line": 207,
   "endLine": 212,
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
   "action": "GRATE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GRATE\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"grating\")\n\t(SYNONYM GRATE GRATING)\n\t(FLAGS DOORBIT NDESCBIT INVISIBLE)\n\t(ACTION GRATE-F)>",
   "referencedBy": [
    "FOREST-PATH-F",
    "GRATING-EXIT",
    "LEAVES-F",
    "GRATING-APPEARS",
    "GRATING-ROOM-F",
    "GRATE-F"
   ]
  },
  "CYCLOPS": {
   "name": "CYCLOPS",
   "file": "maze.zil",
   "line": 281,
   "endLine": 287,
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
    "EYE"
   ],
   "adjectives": [
    "HUNGRY",
    "GIANT"
   ],
   "action": "CYCLOPS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CYCLOPS\n\t(IN CYCLOPS-ROOM)\n\t(DESC \"cyclops\")\n\t(SYNONYM CYCLOPS EYE)\n\t(ADJECTIVE HUNGRY GIANT)\n\t(FLAGS ACTORBIT NDESCBIT TRYTAKEBIT)\n\t(ACTION CYCLOPS-F)>",
   "referencedBy": [
    "CYCLOPS-F",
    "V-ODYSSEUS"
   ]
  },
  "CHALICE": {
   "name": "CHALICE",
   "file": "maze.zil",
   "line": 425,
   "endLine": 435,
   "desc": "chalice",
   "ldesc": "There is an intricate silver chalice here.",
   "fdesc": null,
   "loc": "THIEFS-LAIR",
   "flags": [
    "TREASUREBIT",
    "TAKEBIT",
    "TRYTAKEBIT",
    "CONTBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "CHALICE",
    "CUP",
    "TREASURE"
   ],
   "adjectives": [
    "SILVER",
    "INTRICATE"
   ],
   "action": "CHALICE-F",
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
     "20"
    ]
   },
   "contents": [],
   "source": "<OBJECT CHALICE\n\t(IN THIEFS-LAIR)\n\t(DESC \"chalice\")\n\t(LDESC \"There is an intricate silver chalice here.\")\n\t(SYNONYM CHALICE CUP TREASURE)\n\t(ADJECTIVE SILVER INTRICATE)\n\t(FLAGS TREASUREBIT TAKEBIT TRYTAKEBIT CONTBIT SEARCHBIT)\n\t(CAPACITY 5)\n\t(SIZE 10)\n\t(VALUE 20)\n\t(ACTION CHALICE-F)>",
   "referencedBy": [
    "V-EXAMINE"
   ]
  },
  "TRUNK": {
   "name": "TRUNK",
   "file": "north-of-res.zil",
   "line": 42,
   "endLine": 52,
   "desc": "trunk of jewels",
   "ldesc": "There is an old trunk here, bulging with assorted jewels.",
   "fdesc": "Half-buried in the mud is an old trunk, bulging with jewels.",
   "loc": "RESERVOIR",
   "flags": [
    "TREASUREBIT",
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
    ]
   },
   "contents": [],
   "source": "<OBJECT TRUNK\n\t(IN RESERVOIR)\n\t(DESC \"trunk of jewels\")\n\t(FDESC \"Half-buried in the mud is an old trunk, bulging with jewels.\")\n\t(LDESC \"There is an old trunk here, bulging with assorted jewels.\")\n\t(SYNONYM TRUNK CHEST JEWELS TREASURE)\n\t(ADJECTIVE OLD)\n\t(FLAGS TREASUREBIT TAKEBIT INVISIBLE)\n\t(SIZE 35)\n\t(VALUE 15)\n\t(ACTION TRUNK-F)>",
   "referencedBy": [
    "TRUNK-F",
    "BOLT-F"
   ]
  },
  "PUMP": {
   "name": "PUMP",
   "file": "north-of-res.zil",
   "line": 77,
   "endLine": 82,
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
    "AIR-PUMP"
   ],
   "adjectives": [
    "HAND-HELD",
    "AIR"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PUMP\n\t(IN RESERVOIR-NORTH)\n\t(SYNONYM PUMP AIR-PUMP)\n\t(ADJECTIVE HAND-HELD AIR)\n\t(DESC \"hand-held air pump\")\n\t(FLAGS TAKEBIT TOOLBIT)>",
   "referencedBy": [
    "INFLATABLE-BOAT-F",
    "V-PUMP"
   ]
  },
  "SLIDE": {
   "name": "SLIDE",
   "file": "north-of-res.zil",
   "line": 130,
   "endLine": 136,
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
   "action": "SLIDE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT\tSLIDE\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"chute\")\n\t(SYNONYM CHUTE RAMP SLIDE)\n\t(ADJECTIVE STEEP METAL TWISTING)\n\t(FLAGS CLIMBBIT)\n\t(ACTION SLIDE-F)>",
   "referencedBy": [
    "SLIDE-F"
   ]
  },
  "BAT": {
   "name": "BAT",
   "file": "north-of-res.zil",
   "line": 182,
   "endLine": 189,
   "desc": "bat",
   "ldesc": null,
   "fdesc": null,
   "loc": "BAT-ROOM",
   "flags": [
    "ACTORBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "BAT"
   ],
   "adjectives": [
    "VAMPIRE"
   ],
   "action": "BAT-F",
   "descfcn": "BAT-D",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BAT\n\t(IN BAT-ROOM)\n\t(DESC \"bat\")\n\t(SYNONYM BAT)\n\t(ADJECTIVE VAMPIRE)\n\t(FLAGS ACTORBIT TRYTAKEBIT)\n\t(DESCFCN BAT-D)\n\t(ACTION BAT-F)>",
   "referencedBy": []
  },
  "JADE": {
   "name": "JADE",
   "file": "north-of-res.zil",
   "line": 230,
   "endLine": 238,
   "desc": "jade figurine",
   "ldesc": "There is an exquisite jade figurine here.",
   "fdesc": null,
   "loc": "BAT-ROOM",
   "flags": [
    "TAKEBIT",
    "TREASUREBIT"
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
     "13"
    ]
   },
   "contents": [],
   "source": "<OBJECT JADE\n\t(IN BAT-ROOM)\n\t(DESC \"jade figurine\")\n\t(LDESC \"There is an exquisite jade figurine here.\")\n\t(SYNONYM FIGURINE TREASURE)\n\t(ADJECTIVE EXQUISITE JADE)\n\t(FLAGS TAKEBIT TREASUREBIT)\n\t(SIZE 10)\n\t(VALUE 13)>",
   "referencedBy": []
  },
  "BASKET": {
   "name": "BASKET",
   "file": "north-of-res.zil",
   "line": 254,
   "endLine": 261,
   "desc": "basket",
   "ldesc": "From the chain is suspended a basket.",
   "fdesc": null,
   "loc": "SHAFT-ROOM",
   "flags": [
    "TRYTAKEBIT",
    "CONTBIT",
    "OPENBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
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
   "source": "<OBJECT BASKET\n\t(IN SHAFT-ROOM)\n\t(DESC \"basket\")\n\t(LDESC \"From the chain is suspended a basket.\")\n\t(SYNONYM BASKET)\n\t(FLAGS TRYTAKEBIT CONTBIT OPENBIT SEARCHBIT)\n\t(CAPACITY 50)\n\t(ACTION BASKET-F)>",
   "referencedBy": [
    "BASKET-F",
    "CHAIN-PSEUDO"
   ]
  },
  "BRACELET": {
   "name": "BRACELET",
   "file": "north-of-res.zil",
   "line": 334,
   "endLine": 341,
   "desc": "sapphire-encrusted bracelet",
   "ldesc": null,
   "fdesc": null,
   "loc": "GAS-ROOM",
   "flags": [
    "TAKEBIT",
    "TREASUREBIT"
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
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT BRACELET\n\t(IN GAS-ROOM)\n\t(DESC \"sapphire-encrusted bracelet\")\n\t(SYNONYM BRACELET JEWEL SAPPHIRE TREASURE)\n\t(ADJECTIVE SAPPHIRE)\n\t(FLAGS TAKEBIT TREASUREBIT)\n\t(SIZE 10)\n\t(VALUE 10)>",
   "referencedBy": []
  },
  "COAL": {
   "name": "COAL",
   "file": "north-of-res.zil",
   "line": 384,
   "endLine": 390,
   "desc": "small pile of coal",
   "ldesc": null,
   "fdesc": null,
   "loc": "LADDER-ROOM",
   "flags": [
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "COAL",
    "PILE"
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
   "source": "<OBJECT COAL\n\t(IN LADDER-ROOM)\n\t(DESC \"small pile of coal\")\n\t(SYNONYM COAL PILE)\n\t(ADJECTIVE SMALL)\n\t(FLAGS TAKEBIT BURNBIT)\n\t(SIZE 20)>",
   "referencedBy": [
    "MACHINE-SWITCH-F"
   ]
  },
  "MACHINE": {
   "name": "MACHINE",
   "file": "north-of-res.zil",
   "line": 453,
   "endLine": 459,
   "desc": "machine",
   "ldesc": null,
   "fdesc": null,
   "loc": "MACHINE-ROOM",
   "flags": [
    "CONTBIT",
    "SEARCHBIT",
    "NDESCBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "MACHINE",
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
   "source": "<OBJECT MACHINE\n\t(IN MACHINE-ROOM)\n\t(DESC \"machine\")\n\t(SYNONYM MACHINE DRYER LID)\n\t(FLAGS CONTBIT SEARCHBIT NDESCBIT TRYTAKEBIT)\n\t(CAPACITY 50)\n\t(ACTION MACHINE-F)>",
   "referencedBy": [
    "MACHINE-ROOM-F",
    "MACHINE-SWITCH-F"
   ]
  },
  "MACHINE-SWITCH": {
   "name": "MACHINE-SWITCH",
   "file": "north-of-res.zil",
   "line": 469,
   "endLine": 474,
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
   "action": "MACHINE-SWITCH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MACHINE-SWITCH\n\t(IN MACHINE-ROOM)\n\t(DESC \"switch\")\n\t(SYNONYM SWITCH)\n\t(FLAGS NDESCBIT TURNBIT)\n\t(ACTION MACHINE-SWITCH-F)>",
   "referencedBy": [
    "MACHINE-F",
    "MACHINE-SWITCH-F"
   ]
  },
  "SLAG": {
   "name": "SLAG",
   "file": "north-of-res.zil",
   "line": 494,
   "endLine": 500,
   "desc": "small piece of vitreous slag",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "PIECE",
    "SLAG"
   ],
   "adjectives": [
    "SMALL",
    "VITREOUS"
   ],
   "action": "SLAG-F",
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
   "source": "<OBJECT SLAG\n\t(DESC \"small piece of vitreous slag\")\n\t(SYNONYM PIECE SLAG)\n\t(ADJECTIVE SMALL VITREOUS)\n\t(FLAGS TAKEBIT TRYTAKEBIT)\n\t(SIZE 10)\n\t(ACTION SLAG-F)>",
   "referencedBy": [
    "MACHINE-SWITCH-F",
    "SLAG-F"
   ]
  },
  "DIAMOND": {
   "name": "DIAMOND",
   "file": "north-of-res.zil",
   "line": 506,
   "endLine": 512,
   "desc": "huge diamond",
   "ldesc": "There is an enormous diamond (perfectly cut) here.",
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "TREASUREBIT"
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
     "25"
    ]
   },
   "contents": [],
   "source": "<OBJECT DIAMOND\n\t(DESC \"huge diamond\")\n\t(LDESC \"There is an enormous diamond (perfectly cut) here.\")\n\t(SYNONYM DIAMOND TREASURE)\n\t(ADJECTIVE HUGE ENORMOUS)\n\t(FLAGS TAKEBIT TREASUREBIT)\n\t(VALUE 25)>",
   "referencedBy": [
    "MACHINE-SWITCH-F"
   ]
  },
  "PAINTING": {
   "name": "PAINTING",
   "file": "south-of-res.zil",
   "line": 57,
   "endLine": 67,
   "desc": "painting",
   "ldesc": "A painting by a neglected genius is here.",
   "fdesc": "On the far wall is a painting of unparalleled beauty.",
   "loc": "STUDIO",
   "flags": [
    "TREASUREBIT",
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
    "BEAUTI",
    "MUTILATED"
   ],
   "action": "PAINTING-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "15"
    ],
    "VALUE": [
     "7"
    ]
   },
   "contents": [],
   "source": "<OBJECT PAINTING\n\t(IN STUDIO)\n\t(DESC \"painting\")\n\t(FDESC \"On the far wall is a painting of unparalleled beauty.\")\n\t(LDESC \"A painting by a neglected genius is here.\")\n\t(SYNONYM PAINTING ART CANVAS TREASURE)\n\t(ADJECTIVE BEAUTI MUTILATED)\n\t(FLAGS TREASUREBIT TAKEBIT BURNBIT)\n\t(SIZE 15)\n\t(VALUE 7)\n\t(ACTION PAINTING-F)>",
   "referencedBy": []
  },
  "TROLL": {
   "name": "TROLL",
   "file": "south-of-res.zil",
   "line": 98,
   "endLine": 106,
   "desc": "troll",
   "ldesc": "A troll, brandishing a bloody axe, blocks all passages out of the room.",
   "fdesc": null,
   "loc": "TROLL-ROOM",
   "flags": [
    "ACTORBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "TROLL"
   ],
   "adjectives": [],
   "action": "TROLL-F",
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
   "source": "<OBJECT TROLL\n\t(IN TROLL-ROOM)\n\t(DESC \"troll\")\n\t(LDESC\n\"A troll, brandishing a bloody axe, blocks all passages out of the room.\")\n\t(SYNONYM TROLL)\n\t(FLAGS ACTORBIT OPENBIT)\n\t(STRENGTH 2)\n\t(ACTION TROLL-F)>",
   "referencedBy": [
    "TROLL-ROOM-F",
    "TROLL-F",
    "I-THIEF",
    "HERO-BLOW",
    "KILL-VILLAIN",
    "I-FIGHT",
    "I-CURE",
    "DEAD-FUNCTION"
   ]
  },
  "AXE": {
   "name": "AXE",
   "file": "south-of-res.zil",
   "line": 124,
   "endLine": 130,
   "desc": "bloody axe",
   "ldesc": null,
   "fdesc": null,
   "loc": "TROLL",
   "flags": [
    "WEAPONBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "AXE",
    "AX"
   ],
   "adjectives": [
    "BLOODY"
   ],
   "action": null,
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
   "source": "<OBJECT AXE\n\t(IN TROLL)\n\t(DESC \"bloody axe\")\n\t(SYNONYM AXE AX)\n\t(ADJECTIVE BLOODY)\n\t(FLAGS WEAPONBIT NDESCBIT)\n\t(SIZE 25)>",
   "referencedBy": [
    "KILL-VILLAIN"
   ]
  },
  "MATCH": {
   "name": "MATCH",
   "file": "south-of-res.zil",
   "line": 198,
   "endLine": 208,
   "desc": "matchbook",
   "ldesc": "There is a matchbook whose cover says \"Visit Beautiful FCD#3\" here.",
   "fdesc": null,
   "loc": "DAM",
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
   "action": "MATCH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "2"
    ],
    "TEXT": [
     "(Close cover before striking.)"
    ]
   },
   "contents": [],
   "source": "<OBJECT MATCH\n\t(IN DAM)\n\t(DESC \"matchbook\")\n\t(LDESC\n\"There is a matchbook whose cover says \\\"Visit Beautiful FCD#3\\\" here.\")\n\t(SYNONYM MATCH MATCHES MATCHBOOK)\n\t(ADJECTIVE MATCH)\n\t(FLAGS READBIT TAKEBIT)\n\t(SIZE 2)\n\t(TEXT \"(Close cover before striking.)\")\n\t(ACTION MATCH-F)>",
   "referencedBy": [
    "GAS-ROOM-F",
    "MATCH-F",
    "I-MATCH",
    "CANDLES-F",
    "KILL-INTERRUPTS"
   ]
  },
  "GUIDE": {
   "name": "GUIDE",
   "file": "south-of-res.zil",
   "line": 263,
   "endLine": 282,
   "desc": "tour guidebook",
   "ldesc": null,
   "fdesc": "A guidebook entitled \"Flood Control Dam #3\" is on the ground.",
   "loc": "DAM",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "BOOK",
    "GUIDEBOOK"
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
     "\"Flood Control Dam #3 was constructed in 783 GUE with a grant of 37\nmillion zorkmids from Lord Dimwit Flathead the Excessive. This impressive\nstructure is composed of 370,000 cubic feet of concrete, is 256 feet tall\nand 193 feet wide.|\n|\nThe construction of FCD#3 took 112 days from ground breaking to dedication.\nIt required a work force of 384 slaves, 34 slave drivers, and 12 engineers,\n2345 bureaucrats, and nearly one million dead trees.|\n|\nAs you start your tour, notice the more interesting features of FCD#3. On\nyour right..."
    ]
   },
   "contents": [],
   "source": "<OBJECT GUIDE\n\t(IN DAM)\n\t(DESC \"tour guidebook\")\n\t(FDESC\n\"A guidebook entitled \\\"Flood Control Dam #3\\\" is on the ground.\")\n\t(SYNONYM BOOK GUIDEBOOK)\n\t(ADJECTIVE TOUR GUIDE)\n\t(FLAGS READBIT TAKEBIT BURNBIT)\n\t(TEXT\n\"\\\"Flood Control Dam #3 was constructed in 783 GUE with a grant of 37\nmillion zorkmids from Lord Dimwit Flathead the Excessive. This impressive\nstructure is composed of 370,000 cubic feet of concrete, is 256 feet tall\nand 193 feet wide.|\n|\nThe construction of FCD#3 took 112 days from ground breaking to dedication.\nIt required a work force of 384 slaves, 34 slave drivers, and 12 engineers,\n2345 bureaucrats, and nearly one million dead trees.|\n|\nAs you start your tour, notice the more interesting features of FCD#3. On\nyour right...\")>",
   "referencedBy": []
  },
  "CONTROL-PANEL": {
   "name": "CONTROL-PANEL",
   "file": "south-of-res.zil",
   "line": 284,
   "endLine": 289,
   "desc": "control panel",
   "ldesc": null,
   "fdesc": null,
   "loc": "DAM",
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
   "source": "<OBJECT CONTROL-PANEL\n\t(IN DAM)\n\t(DESC \"control panel\")\n\t(SYNONYM PANEL)\n\t(ADJECTIVE CONTROL)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "BOLT": {
   "name": "BOLT",
   "file": "south-of-res.zil",
   "line": 293,
   "endLine": 299,
   "desc": "bolt",
   "ldesc": null,
   "fdesc": null,
   "loc": "DAM",
   "flags": [
    "NDESCBIT",
    "TURNBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "BOLT"
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
   "source": "<OBJECT BOLT\n\t(IN DAM)\n\t(DESC \"bolt\")\n\t(SYNONYM BOLT)\n\t(ADJECTIVE METAL LARGE)\n\t(FLAGS NDESCBIT TURNBIT TRYTAKEBIT)\n\t(ACTION BOLT-F)>",
   "referencedBy": []
  },
  "BUBBLE": {
   "name": "BUBBLE",
   "file": "south-of-res.zil",
   "line": 322,
   "endLine": 328,
   "desc": "green bubble",
   "ldesc": null,
   "fdesc": null,
   "loc": "DAM",
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
   "source": "<OBJECT BUBBLE\n\t(IN DAM)\n\t(DESC \"green bubble\")\n\t(SYNONYM BUBBLE)\n\t(ADJECTIVE SMALL GREEN PLASTIC)\n\t(FLAGS NDESCBIT TRYTAKEBIT)\n\t(ACTION BUBBLE-F)>",
   "referencedBy": []
  },
  "DAM-OBJECT": {
   "name": "DAM-OBJECT",
   "file": "south-of-res.zil",
   "line": 334,
   "endLine": 339,
   "desc": "dam",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
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
   "action": "DAM-OBJECT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DAM-OBJECT\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"dam\")\n\t(SYNONYM DAM GATE GATES FCD\\#3)\n\t(FLAGS NDESCBIT TRYTAKEBIT)\n\t(ACTION DAM-OBJECT-F)>",
   "referencedBy": []
  },
  "YELLOW-BUTTON": {
   "name": "YELLOW-BUTTON",
   "file": "south-of-res.zil",
   "line": 357,
   "endLine": 363,
   "desc": "yellow button",
   "ldesc": null,
   "fdesc": null,
   "loc": "MAINTENANCE-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
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
   "source": "<OBJECT YELLOW-BUTTON\n\t(IN MAINTENANCE-ROOM)\n\t(DESC \"yellow button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE YELLOW)\n\t(FLAGS NDESCBIT)\n\t(ACTION BUTTON-F)>",
   "referencedBy": [
    "BUTTON-F"
   ]
  },
  "BROWN-BUTTON": {
   "name": "BROWN-BUTTON",
   "file": "south-of-res.zil",
   "line": 365,
   "endLine": 371,
   "desc": "brown button",
   "ldesc": null,
   "fdesc": null,
   "loc": "MAINTENANCE-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
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
   "source": "<OBJECT BROWN-BUTTON\n\t(IN MAINTENANCE-ROOM)\n\t(DESC \"brown button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE BROWN)\n\t(FLAGS NDESCBIT)\n\t(ACTION BUTTON-F)>",
   "referencedBy": [
    "BUTTON-F"
   ]
  },
  "RED-BUTTON": {
   "name": "RED-BUTTON",
   "file": "south-of-res.zil",
   "line": 373,
   "endLine": 379,
   "desc": "red button",
   "ldesc": null,
   "fdesc": null,
   "loc": "MAINTENANCE-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
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
   "source": "<OBJECT RED-BUTTON\n\t(IN MAINTENANCE-ROOM)\n\t(DESC \"red button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE RED)\n\t(FLAGS NDESCBIT)\n\t(ACTION BUTTON-F)>",
   "referencedBy": [
    "BUTTON-F"
   ]
  },
  "SCREWDRIVER": {
   "name": "SCREWDRIVER",
   "file": "south-of-res.zil",
   "line": 400,
   "endLine": 405,
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
   "source": "<OBJECT SCREWDRIVER\n\t(IN MAINTENANCE-ROOM)\n\t(DESC \"screwdriver\")\n\t(SYNONYM SCREWDRIVER DRIVER)\n\t(ADJECTIVE SCREW)\n\t(FLAGS TAKEBIT TOOLBIT)>",
   "referencedBy": [
    "MACHINE-SWITCH-F"
   ]
  },
  "WRENCH": {
   "name": "WRENCH",
   "file": "south-of-res.zil",
   "line": 407,
   "endLine": 412,
   "desc": "wrench",
   "ldesc": null,
   "fdesc": null,
   "loc": "MAINTENANCE-ROOM",
   "flags": [
    "TAKEBIT",
    "TOOLBIT"
   ],
   "synonyms": [
    "WRENCH"
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
   "source": "<OBJECT WRENCH\n\t(IN MAINTENANCE-ROOM)\n\t(DESC \"wrench\")\n\t(SYNONYM WRENCH)\n\t(FLAGS TAKEBIT TOOLBIT)\n\t(SIZE 10)>",
   "referencedBy": [
    "BOLT-F"
   ]
  },
  "INFLATABLE-BOAT": {
   "name": "INFLATABLE-BOAT",
   "file": "south-of-res.zil",
   "line": 425,
   "endLine": 434,
   "desc": "pile of plastic",
   "ldesc": "There is a folded pile of plastic here which has a small valve attached.",
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
   "action": "INFLATABLE-BOAT-F",
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
   "source": "<OBJECT INFLATABLE-BOAT\n\t(IN DAM-BASE)\n\t(DESC \"pile of plastic\")\n\t(LDESC\n\"There is a folded pile of plastic here which has a small valve attached.\")\n\t(SYNONYM BOAT PILE PLASTIC VALVE)\n\t(ADJECTIVE PLASTIC INFLAT)\n\t(FLAGS TAKEBIT BURNBIT)\n\t(SIZE 20)\n\t(ACTION INFLATABLE-BOAT-F)>",
   "referencedBy": [
    "INFLATABLE-BOAT-F",
    "INFLATED-BOAT-F"
   ]
  },
  "BOAT-LABEL": {
   "name": "BOAT-LABEL",
   "file": "south-of-res.zil",
   "line": 455,
   "endLine": 466,
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
    "LABEL"
   ],
   "adjectives": [
    "TAN"
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
     "Hello, Sailor! Instructions: To enter a body of water, say \"Launch\". To get\nto shore, say \"Land\" or the direction you want to go. FROBOZZ MAGIC BOAT\nCOMPANY Warranty: This boat is guaranteed for 9 seconds from date of purchase\nor until used, whichever comes first. Good Luck!"
    ]
   },
   "contents": [],
   "source": "<OBJECT BOAT-LABEL\n\t(IN INFLATED-BOAT)\n\t(DESC \"tan label\")\n\t(SYNONYM LABEL)\n\t(ADJECTIVE TAN)\n\t(FLAGS READBIT TAKEBIT BURNBIT)\n\t(SIZE 2)\n\t(TEXT\n\"Hello, Sailor! Instructions: To enter a body of water, say \\\"Launch\\\". To get\nto shore, say \\\"Land\\\" or the direction you want to go. FROBOZZ MAGIC BOAT\nCOMPANY Warranty: This boat is guaranteed for 9 seconds from date of purchase\nor until used, whichever comes first. Good Luck!\")>",
   "referencedBy": [
    "INFLATABLE-BOAT-F"
   ]
  },
  "INFLATED-BOAT": {
   "name": "INFLATED-BOAT",
   "file": "south-of-res.zil",
   "line": 468,
   "endLine": 475,
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
    "PLASTIC"
   ],
   "action": "INFLATED-BOAT-F",
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
    ]
   },
   "contents": [
    "BOAT-LABEL"
   ],
   "source": "<OBJECT INFLATED-BOAT\n\t(DESC \"magic boat\")\n\t(SYNONYM BOAT RAFT)\n\t(ADJECTIVE INFLAT PLASTIC)\n\t(FLAGS TAKEBIT BURNBIT VEHBIT OPENBIT SEARCHBIT)\n\t(CAPACITY 100)\n\t(SIZE 20)\n\t(ACTION INFLATED-BOAT-F)>",
   "referencedBy": [
    "PARSER",
    "INFLATABLE-BOAT-F",
    "INFLATED-BOAT-F",
    "RIVER-F",
    "PRE-BOARD",
    "V-EXIT",
    "DESCRIBE-ROOM",
    "PRINT-CONT",
    "GOTO"
   ]
  },
  "WHITE-CLIFF": {
   "name": "WHITE-CLIFF",
   "file": "south-of-res.zil",
   "line": 531,
   "endLine": 537,
   "desc": "White Cliffs",
   "ldesc": null,
   "fdesc": null,
   "loc": "WHITE-CLIFFS-BEACH",
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
   "action": "WHITE-CLIFF-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WHITE-CLIFF\n\t(IN WHITE-CLIFFS-BEACH)\n\t(DESC \"White Cliffs\")\n\t(SYNONYM CLIFF CLIFFS)\n\t(ADJECTIVE WHITE)\n\t(FLAGS NDESCBIT CLIMBBIT)\n\t(ACTION WHITE-CLIFF-F)>",
   "referencedBy": []
  },
  "RAILING": {
   "name": "RAILING",
   "file": "south-of-res.zil",
   "line": 576,
   "endLine": 581,
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
   "source": "<OBJECT RAILING\n\t(IN DOME-ROOM)\n\t(DESC \"wooden railing\")\n\t(SYNONYM RAILING RAIL)\n\t(ADJECTIVE WOODEN)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "ROPE-F"
   ]
  },
  "PEDESTAL": {
   "name": "PEDESTAL",
   "file": "south-of-res.zil",
   "line": 608,
   "endLine": 614,
   "desc": "pedestal",
   "ldesc": null,
   "fdesc": null,
   "loc": "TEMPLE",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "SEARCHBIT",
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
   "action": null,
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
   "source": "<OBJECT PEDESTAL\n\t(IN TEMPLE)\n\t(DESC \"pedestal\")\n\t(SYNONYM PEDESTAL)\n\t(ADJECTIVE WHITE MARBLE)\n\t(FLAGS NDESCBIT CONTBIT SEARCHBIT OPENBIT SURFACEBIT)\n\t(CAPACITY 30)>",
   "referencedBy": []
  },
  "TORCH": {
   "name": "TORCH",
   "file": "south-of-res.zil",
   "line": 616,
   "endLine": 625,
   "desc": "torch",
   "ldesc": null,
   "fdesc": "Sitting on the pedestal is a flaming torch, made of ivory.",
   "loc": "PEDESTAL",
   "flags": [
    "TREASUREBIT",
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
   "action": "TORCH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "20"
    ],
    "VALUE": [
     "12"
    ]
   },
   "contents": [],
   "source": "<OBJECT TORCH\n\t(IN PEDESTAL)\n\t(DESC \"torch\")\n\t(FDESC \"Sitting on the pedestal is a flaming torch, made of ivory.\")\n\t(SYNONYM TORCH IVORY TREASURE)\n\t(ADJECTIVE FLAMING IVORY)\n\t(FLAGS TREASUREBIT TAKEBIT FLAMEBIT ONBIT LIGHTBIT)\n\t(SIZE 20)\n\t(VALUE 12)\n\t(ACTION TORCH-F)>",
   "referencedBy": [
    "GAS-ROOM-F",
    "CANDLES-F"
   ]
  },
  "BELL": {
   "name": "BELL",
   "file": "south-of-res.zil",
   "line": 638,
   "endLine": 644,
   "desc": "brass bell",
   "ldesc": null,
   "fdesc": null,
   "loc": "TEMPLE",
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
   "source": "<OBJECT BELL\n\t(IN TEMPLE)\n\t(DESC \"brass bell\")\n\t(SYNONYM BELL)\n\t(ADJECTIVE SMALL BRASS)\n\t(FLAGS TAKEBIT)\n\t(ACTION BELL-F)>",
   "referencedBy": [
    "ENTRANCE-TO-HADES-F"
   ]
  },
  "PRAYER": {
   "name": "PRAYER",
   "file": "south-of-res.zil",
   "line": 652,
   "endLine": 661,
   "desc": "prayer",
   "ldesc": null,
   "fdesc": null,
   "loc": "TEMPLE",
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
     "The prayer is a philippic against small insects, absent-mindedness, and the\npicking up and dropping of small objects. All evidence indicates that the\nbeliefs of the ancient Zorkers were obscure."
    ]
   },
   "contents": [],
   "source": "<OBJECT PRAYER\n\t(IN TEMPLE)\n\t(DESC \"prayer\")\n\t(SYNONYM PRAYER INSCRIPTION)\n\t(ADJECTIVE ANCIENT OLD)\n\t(FLAGS READBIT SACREDBIT NDESCBIT)\n\t(TEXT\n\"The prayer is a philippic against small insects, absent-mindedness, and the\npicking up and dropping of small objects. All evidence indicates that the\nbeliefs of the ancient Zorkers were obscure.\")>",
   "referencedBy": []
  },
  "COFFIN": {
   "name": "COFFIN",
   "file": "south-of-res.zil",
   "line": 672,
   "endLine": 682,
   "desc": "gold coffin",
   "ldesc": "The solid-gold coffin used for the burial of Ramses II is here.",
   "fdesc": null,
   "loc": "EGYPTIAN-ROOM",
   "flags": [
    "TREASUREBIT",
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
     "13"
    ]
   },
   "contents": [
    "SCEPTRE"
   ],
   "source": "<OBJECT COFFIN\n\t(IN EGYPTIAN-ROOM)\n\t(DESC \"gold coffin\")\n\t(LDESC\n\"The solid-gold coffin used for the burial of Ramses II is here.\")\n\t(SYNONYM COFFIN CASKET TREASURE)\n\t(ADJECTIVE GOLD)\n\t(FLAGS TREASUREBIT TAKEBIT CONTBIT SACREDBIT SEARCHBIT)\n\t(CAPACITY 35)\n\t(SIZE 55)\n\t(VALUE 13)>",
   "referencedBy": [
    "ALTAR-F",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "SCEPTRE": {
   "name": "SCEPTRE",
   "file": "south-of-res.zil",
   "line": 684,
   "endLine": 695,
   "desc": "sceptre",
   "ldesc": null,
   "fdesc": "A sceptre, possibly that of ancient Egypt itself, is in the coffin. The\nsceptre is ornamented with jewels.",
   "loc": "COFFIN",
   "flags": [
    "TREASUREBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "SCEPTRE",
    "TREASURE"
   ],
   "adjectives": [
    "ANCIENT"
   ],
   "action": "SCEPTRE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ],
    "VALUE": [
     "9"
    ]
   },
   "contents": [],
   "source": "<OBJECT SCEPTRE\n\t(IN COFFIN)\n\t(DESC \"sceptre\")\n\t(FDESC\n\"A sceptre, possibly that of ancient Egypt itself, is in the coffin. The\nsceptre is ornamented with jewels.\")\n\t(SYNONYM SCEPTRE TREASURE)\n\t(ADJECTIVE ANCIENT)\n\t(FLAGS TREASUREBIT TAKEBIT)\n\t(SIZE 3)\n\t(VALUE 9)\n\t(ACTION SCEPTRE-F)>",
   "referencedBy": []
  },
  "ALTAR-OBJECT": {
   "name": "ALTAR-OBJECT",
   "file": "south-of-res.zil",
   "line": 740,
   "endLine": 745,
   "desc": "altar",
   "ldesc": null,
   "fdesc": null,
   "loc": "ALTAR",
   "flags": [
    "NDESCBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT",
    "SEARCHBIT"
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
    "BLACK-BOOK",
    "CANDLES"
   ],
   "source": "<OBJECT ALTAR-OBJECT\n\t(IN ALTAR)\n\t(DESC \"altar\")\n\t(SYNONYM ALTAR)\n\t(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT SEARCHBIT)\n\t(CAPACITY 50)>",
   "referencedBy": []
  },
  "BLACK-BOOK": {
   "name": "BLACK-BOOK",
   "file": "south-of-res.zil",
   "line": 747,
   "endLine": 766,
   "desc": "black book",
   "ldesc": null,
   "fdesc": "On the altar is a large black book, open to page 569.",
   "loc": "ALTAR-OBJECT",
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
   "action": "BLACK-BOOK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "10"
    ],
    "TEXT": [
     "Commandment #12592|\n|\nOh ye who say: \"Hello sailor\":|\nDost thou know thy sin?|\nYea, thou shalt be crushed by stones.|\nShall angry gods turn thee to dust?|\nShall they stab thy eye with a stick!|\nEven to eternity shalt thou roam and|\nUnto Hades shalt thou be sent at last.|\nSurely thou shalt then repent."
    ]
   },
   "contents": [],
   "source": "<OBJECT BLACK-BOOK\n\t(IN ALTAR-OBJECT)\n\t(DESC \"black book\")\n\t(FDESC \"On the altar is a large black book, open to page 569.\")\n\t(SYNONYM BOOK PRAYER PAGE BOOKS)\n\t(ADJECTIVE LARGE BLACK)\n\t(FLAGS READBIT TAKEBIT CONTBIT BURNBIT TURNBIT)\n\t(SIZE 10)\n\t(TEXT\n\"Commandment #12592|\n|\nOh ye who say: \\\"Hello sailor\\\":|\nDost thou know thy sin?|\nYea, thou shalt be crushed by stones.|\nShall angry gods turn thee to dust?|\nShall they stab thy eye with a stick!|\nEven to eternity shalt thou roam and|\nUnto Hades shalt thou be sent at last.|\nSurely thou shalt then repent.\")\n\t(ACTION BLACK-BOOK-F)>",
   "referencedBy": [
    "ENTRANCE-TO-HADES-F",
    "PRE-TURN"
   ]
  },
  "CANDLES": {
   "name": "CANDLES",
   "file": "south-of-res.zil",
   "line": 781,
   "endLine": 789,
   "desc": "pair of candles",
   "ldesc": null,
   "fdesc": "On the two ends of the altar are burning candles.",
   "loc": "ALTAR-OBJECT",
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
   "action": "CANDLES-F",
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
   "source": "<OBJECT CANDLES\n\t(IN ALTAR-OBJECT)\n\t(DESC \"pair of candles\")\n\t(FDESC \"On the two ends of the altar are burning candles.\")\n\t(SYNONYM CANDLES PAIR)\n\t(ADJECTIVE BURNING)\n\t(FLAGS TAKEBIT FLAMEBIT ONBIT LIGHTBIT)\n\t(SIZE 10)\n\t(ACTION CANDLES-F)>",
   "referencedBy": [
    "GAS-ROOM-F",
    "CANDLES-F",
    "WINDY-CAVE-F",
    "I-CANDLES",
    "ENTRANCE-TO-HADES-F"
   ]
  },
  "GHOSTS": {
   "name": "GHOSTS",
   "file": "south-of-res.zil",
   "line": 982,
   "endLine": 988,
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
   "source": "<OBJECT GHOSTS\n\t(IN ENTRANCE-TO-HADES)\n\t(DESC \"number of ghosts\")\n\t(SYNONYM GHOSTS SPIRITS FORCE)\n\t(ADJECTIVE INVISIBLE EVIL)\n\t(FLAGS ACTORBIT NDESCBIT)\n\t(ACTION GHOSTS-F)>",
   "referencedBy": [
    "ENTRANCE-TO-HADES-F",
    "GHOSTS-F"
   ]
  },
  "BODIES": {
   "name": "BODIES",
   "file": "south-of-res.zil",
   "line": 1028,
   "endLine": 1034,
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
   "action": "BODIES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BODIES\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"pile of bodies\")\n\t(SYNONYM BODIES BODY REMAINS PILE)\n\t(ADJECTIVE MANGLED)\n\t(FLAGS NDESCBIT TRYTAKEBIT)\n\t(ACTION BODIES-F)>",
   "referencedBy": []
  },
  "SKULL": {
   "name": "SKULL",
   "file": "south-of-res.zil",
   "line": 1043,
   "endLine": 1052,
   "desc": "crystal skull",
   "ldesc": null,
   "fdesc": "Lying in one corner is a beautifully carved crystal skull. It appears to\nbe grinning at you rather nastily.",
   "loc": "HADES",
   "flags": [
    "TREASUREBIT",
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
     "22"
    ]
   },
   "contents": [],
   "source": "<OBJECT SKULL\n\t(IN HADES)\n\t(DESC \"crystal skull\")\n\t(FDESC\n\"Lying in one corner is a beautifully carved crystal skull. It appears to\nbe grinning at you rather nastily.\")\n\t(SYNONYM SKULL HEAD TREASURE)\n\t(ADJECTIVE CRYSTAL)\n\t(FLAGS TREASUREBIT TAKEBIT)\n\t(VALUE 22)>",
   "referencedBy": []
  },
  "BUOY": {
   "name": "BUOY",
   "file": "south-of-res.zil",
   "line": 1093,
   "endLine": 1102,
   "desc": "red buoy",
   "ldesc": null,
   "fdesc": "There is a red buoy here (probably a warning).",
   "loc": "RIVER-3",
   "flags": [
    "TAKEBIT",
    "CONTBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "BUOY"
   ],
   "adjectives": [
    "RED"
   ],
   "action": "BUOY-F",
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
   "source": "<OBJECT BUOY\n\t(IN RIVER-3)\n\t(DESC \"red buoy\")\n\t(FDESC \"There is a red buoy here (probably a warning).\")\n\t(SYNONYM BUOY)\n\t(ADJECTIVE RED)\n\t(FLAGS TAKEBIT CONTBIT SEARCHBIT)\n\t(CAPACITY 20)\n\t(SIZE 10)\n\t(ACTION BUOY-F)>",
   "referencedBy": [
    "BUOY-F"
   ]
  },
  "EMERALD": {
   "name": "EMERALD",
   "file": "south-of-res.zil",
   "line": 1115,
   "endLine": 1121,
   "desc": "large emerald",
   "ldesc": null,
   "fdesc": null,
   "loc": "BUOY",
   "flags": [
    "TREASUREBIT",
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
     "18"
    ]
   },
   "contents": [],
   "source": "<OBJECT EMERALD\n\t(IN BUOY)\n\t(DESC \"large emerald\")\n\t(SYNONYM EMERALD TREASURE)\n\t(ADJECTIVE LARGE)\n\t(FLAGS TREASUREBIT TAKEBIT)\n\t(VALUE 18)>",
   "referencedBy": [
    "BUOY-F"
   ]
  },
  "SHOVEL": {
   "name": "SHOVEL",
   "file": "south-of-res.zil",
   "line": 1135,
   "endLine": 1140,
   "desc": "shovel",
   "ldesc": null,
   "fdesc": null,
   "loc": "SANDY-BEACH",
   "flags": [
    "TAKEBIT",
    "TOOLBIT"
   ],
   "synonyms": [
    "SHOVEL"
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
   "source": "<OBJECT SHOVEL\n\t(IN SANDY-BEACH)\n\t(DESC \"shovel\")\n\t(SYNONYM SHOVEL)\n\t(FLAGS TAKEBIT TOOLBIT)\n\t(SIZE 15)>",
   "referencedBy": [
    "SAND-F",
    "V-DIG"
   ]
  },
  "SAND": {
   "name": "SAND",
   "file": "south-of-res.zil",
   "line": 1150,
   "endLine": 1155,
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
   "action": "SAND-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SAND\n\t(IN SANDY-CAVE)\n\t(DESC \"sand\")\n\t(SYNONYM SAND)\n\t(FLAGS NDESCBIT)\n\t(ACTION SAND-F)>",
   "referencedBy": []
  },
  "SCARAB": {
   "name": "SCARAB",
   "file": "south-of-res.zil",
   "line": 1182,
   "endLine": 1189,
   "desc": "beautiful jeweled scarab",
   "ldesc": null,
   "fdesc": null,
   "loc": "SANDY-CAVE",
   "flags": [
    "TREASUREBIT",
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
     "15"
    ]
   },
   "contents": [],
   "source": "<OBJECT SCARAB\n\t(IN SANDY-CAVE)\n\t(DESC \"beautiful jeweled scarab\")\n\t(SYNONYM SCARAB BUG BEETLE TREASURE)\n\t(ADJECTIVE BEAUTI JEWELED)\n\t(FLAGS TREASUREBIT TAKEBIT INVISIBLE)\n\t(SIZE 8)\n\t(VALUE 15)>",
   "referencedBy": [
    "SAND-F"
   ]
  },
  "RIVER": {
   "name": "RIVER",
   "file": "south-of-res.zil",
   "line": 1214,
   "endLine": 1220,
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
   "action": "RIVER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RIVER\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"river\")\n\t(SYNONYM RIVER)\n\t(ADJECTIVE FRIGID)\n\t(FLAGS NDESCBIT)\n\t(ACTION RIVER-F)>",
   "referencedBy": [
    "WATER-F",
    "RIVER-F"
   ]
  },
  "THIEF": {
   "name": "THIEF",
   "file": "thief.zil",
   "line": 5,
   "endLine": 15,
   "desc": "thief",
   "ldesc": "There is a suspicious-looking individual, holding a large bag, leaning\nagainst one wall. He is armed with a deadly stiletto.",
   "fdesc": null,
   "loc": "ROUND-ROOM",
   "flags": [
    "ACTORBIT",
    "INVISIBLE",
    "CONTBIT",
    "SEARCHBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "THIEF",
    "ROBBER",
    "MAN",
    "PERSON"
   ],
   "adjectives": [
    "SUSPICIOUS"
   ],
   "action": "THIEF-F",
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
   "source": "<OBJECT THIEF\n\t(IN ROUND-ROOM)\n\t(DESC \"thief\")\n\t(LDESC\n\"There is a suspicious-looking individual, holding a large bag, leaning\nagainst one wall. He is armed with a deadly stiletto.\")\n\t(SYNONYM THIEF ROBBER MAN PERSON)\n\t(ADJECTIVE SUSPICIOUS)\n\t(FLAGS ACTORBIT INVISIBLE CONTBIT SEARCHBIT OPENBIT)\n\t(STRENGTH 5)\n\t(ACTION THIEF-F)>",
   "referencedBy": [
    "THIEFS-LAIR-F",
    "THIEF-F",
    "I-THIEF",
    "DROP-JUNK",
    "STEAL-JUNK",
    "ROB",
    "THIEF-VS-ADVENTURER",
    "DEPOSIT-BOOTY",
    "ROB-MAZE",
    "KILL-VILLAIN",
    "I-FIGHT",
    "I-CURE",
    "ITAKE"
   ]
  },
  "LARGE-BAG": {
   "name": "LARGE-BAG",
   "file": "thief.zil",
   "line": 158,
   "endLine": 164,
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
   "source": "<OBJECT LARGE-BAG\n\t(IN THIEF)\n\t(DESC \"large bag\")\n\t(SYNONYM BAG)\n\t(ADJECTIVE LARGE THIEFS)\n\t(FLAGS TRYTAKEBIT NDESCBIT)\n\t(ACTION LARGE-BAG-F)>",
   "referencedBy": [
    "DROP-JUNK",
    "LARGE-BAG-F"
   ]
  },
  "STILETTO": {
   "name": "STILETTO",
   "file": "thief.zil",
   "line": 175,
   "endLine": 181,
   "desc": "stiletto",
   "ldesc": null,
   "fdesc": null,
   "loc": "THIEF",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "STILETTO"
   ],
   "adjectives": [
    "VICIOUS"
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
   "source": "<OBJECT STILETTO\n\t(IN THIEF)\n\t(DESC \"stiletto\")\n\t(SYNONYM STILETTO)\n\t(ADJECTIVE VICIOUS)\n\t(FLAGS NDESCBIT)\n\t(SIZE 10)>",
   "referencedBy": [
    "DROP-JUNK",
    "KILL-VILLAIN"
   ]
  }
 },
 "routines": {
  "WEST-OF-HOUSE-F": {
   "name": "WEST-OF-HOUSE-F",
   "file": "above-ground.zil",
   "line": 20,
   "endLine": 28,
   "source": "<ROUTINE WEST-OF-HOUSE-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are standing in an open field west of a white house, with a\nboarded front door. \">\n\t\t<COND (,WON-FLAG\n\t\t       <TELL\n\"A secret path leads southwest into the forest. \">)>\n\t\t<TELL \"You could circle the house to the north or south.\">)>>"
  },
  "MAILBOX-F": {
   "name": "MAILBOX-F",
   "file": "above-ground.zil",
   "line": 39,
   "endLine": 42,
   "source": "<ROUTINE MAILBOX-F ()\n\t <COND (<AND <VERB? TAKE>\n\t\t     <PRSO? ,MAILBOX>>\n\t\t<FASTENED ,MAILBOX \"ground\">)>>"
  },
  "LEAFLET-F": {
   "name": "LEAFLET-F",
   "file": "above-ground.zil",
   "line": 52,
   "endLine": 59,
   "source": "<ROUTINE LEAFLET-F ()\n\t <COND (<VERB? READ>\n\t\t<TELL\n\"\\\"WELCOME TO ZORK, a game of adventure, danger, and low cunning. No computer\nshould be without one!\\\"|\n|\nNote: this \\\"mini-zork\\\" contains only a sub-set of the locations, puzzles,\nand descriptions found\" ,DISK-BASED>)>>"
  },
  "INSIDE-THE-BARROW-F": {
   "name": "INSIDE-THE-BARROW-F",
   "file": "above-ground.zil",
   "line": 86,
   "endLine": 88,
   "source": "<ROUTINE INSIDE-THE-BARROW-F (RARG) \n\t <COND (<EQUAL? .RARG ,M-END>\n\t\t<FINISH>)>>"
  },
  "BEHIND-HOUSE-F": {
   "name": "BEHIND-HOUSE-F",
   "file": "above-ground.zil",
   "line": 134,
   "endLine": 139,
   "source": "<ROUTINE BEHIND-HOUSE-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are behind the white house. Paths lead into the forest to the east and\nnortheast. In one corner of the house\">\n\t\t<DESCRIBE-WINDOW>)>>"
  },
  "DESCRIBE-WINDOW": {
   "name": "DESCRIBE-WINDOW",
   "file": "above-ground.zil",
   "line": 141,
   "endLine": 146,
   "source": "<ROUTINE DESCRIBE-WINDOW ()\n\t <TELL \" is a small window which is \">\n\t <COND (<FSET? ,KITCHEN-WINDOW ,OPENBIT>\n\t\t<TELL \"open.\">)\n\t       (T\n\t\t<TELL \"slightly ajar.\">)>>"
  },
  "WHITE-HOUSE-F": {
   "name": "WHITE-HOUSE-F",
   "file": "above-ground.zil",
   "line": 156,
   "endLine": 167,
   "source": "<ROUTINE WHITE-HOUSE-F ()\n\t <COND (<AND <EQUAL? ,HERE ,KITCHEN ,LIVING-ROOM ,ATTIC>\n\t\t     <VERB? FIND THROUGH>>\n\t\t<TELL ,LOOK-AROUND>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"The house is a beautiful white colonial. The owners must have been\nextremely wealthy.\" CR>)\n\t       (<VERB? THROUGH OPEN>\n\t\t<DO-WALK ,P?IN>)\n\t       (<VERB? BURN>\n\t\t<TELL \"You must be joking.\" CR>)>>"
  },
  "BOARD-F": {
   "name": "BOARD-F",
   "file": "above-ground.zil",
   "line": 176,
   "endLine": 178,
   "source": "<ROUTINE BOARD-F ()\n\t <COND (<VERB? TAKE EXAMINE>\n\t\t<FASTENED ,BOARD \"house\">)>>"
  },
  "BOARDED-WINDOW-F": {
   "name": "BOARDED-WINDOW-F",
   "file": "above-ground.zil",
   "line": 188,
   "endLine": 190,
   "source": "<ROUTINE BOARDED-WINDOW-F ()\n\t <COND (<VERB? OPEN MUNG>\n\t\t<TELL \"The windows are boarded!\" CR>)>>"
  },
  "NAILS-PSEUDO": {
   "name": "NAILS-PSEUDO",
   "file": "above-ground.zil",
   "line": 192,
   "endLine": 194,
   "source": "<ROUTINE NAILS-PSEUDO ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL \"The nails are too deeply imbedded.\" CR>)>>"
  },
  "FOREST-F": {
   "name": "FOREST-F",
   "file": "above-ground.zil",
   "line": 203,
   "endLine": 207,
   "source": "<ROUTINE FOREST-F ()\n\t <COND (<VERB? EXIT>\n\t\t<V-WALK-AROUND>)\n\t       (<VERB? FIND>\n\t\t<TELL ,LOOK-AROUND>)>>"
  },
  "FOREST-PATH-F": {
   "name": "FOREST-PATH-F",
   "file": "above-ground.zil",
   "line": 250,
   "endLine": 263,
   "source": "<ROUTINE FOREST-PATH-F (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-ENTER>\n\t\t     <NOT ,GRATE-REVEALED>>\n\t\t<FSET ,GRATE ,INVISIBLE>)\n\t       (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a path through a dimly lit forest, curving from south to east.\nA large tree with low branches stands by the edge of the path.\">\n\t\t<COND (<FSET? ,GRATE ,OPENBIT>\n\t\t       <TELL\n\" There is an open grating, descending into darkness.\">)\n\t\t      (,GRATE-REVEALED\n\t\t       <TELL\n\" There is a grating securely fastened into the ground.\">)>)>>"
  },
  "GRATING-EXIT": {
   "name": "GRATING-EXIT",
   "file": "above-ground.zil",
   "line": 265,
   "endLine": 275,
   "source": "<ROUTINE GRATING-EXIT ()\n\t <COND (,GRATE-REVEALED\n\t\t<COND (<FSET? ,GRATE ,OPENBIT>\n\t\t       ,GRATING-ROOM)\n\t\t      (T\n\t\t       <TELL \"The grating is closed!\" CR>\n\t\t       <SETG P-IT-OBJECT ,GRATE>\n\t\t       <RFALSE>)>)\n\t       (T\n\t\t<TELL ,CANT-GO>\n\t\t<RFALSE>)>>"
  },
  "UP-A-TREE-F": {
   "name": "UP-A-TREE-F",
   "file": "above-ground.zil",
   "line": 286,
   "endLine": 302,
   "source": "<ROUTINE UP-A-TREE-F (RARG \"AUX\" F)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are ten feet above the ground, nestled among large branches.\">)\n\t       (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<AND <VERB? CLIMB-DOWN>\n\t\t\t    <PRSO? ,TREE ,ROOMS>>\n\t\t       <DO-WALK ,P?DOWN>)\n\t\t      (<VERB? DROP>\n\t\t       <COND (<NOT <IDROP>>\n\t\t\t      <RTRUE>)\n\t\t\t     (<NOT <PRSO? ,WINNER ,TREE>>\n\t\t\t      <MOVE ,PRSO ,FOREST-PATH>\n\t\t\t      <TELL \"The \" D ,PRSO \" falls to the ground.\" CR>)\n\t\t\t     (<VERB? LEAP>\n\t\t\t      <JIGS-UP\n\"You should have looked before you leaped.\">)>)>)>> "
  },
  "NEST-F": {
   "name": "NEST-F",
   "file": "above-ground.zil",
   "line": 314,
   "endLine": 317,
   "source": "<ROUTINE NEST-F ()\n\t <COND (<VERB? TAKE>\n\t\t<SCORE-OBJ ,EGG>\n\t\t<RFALSE>)>>"
  },
  "EGG-F": {
   "name": "EGG-F",
   "file": "above-ground.zil",
   "line": 331,
   "endLine": 334,
   "source": "<ROUTINE EGG-F ()\n\t <COND (<AND <VERB? OPEN HATCH>\n\t\t     <PRSO? ,EGG>>\n\t\t<TELL \"This egg only opens\" ,DISK-BASED>)>>"
  },
  "LEAVES-F": {
   "name": "LEAVES-F",
   "file": "above-ground.zil",
   "line": 345,
   "endLine": 367,
   "source": "<ROUTINE LEAVES-F ()\n\t<COND (<VERB? COUNT>\n\t       <TELL \"69,105.\" CR>)\n\t      (<VERB? BURN>\n\t       <GRATING-APPEARS>\n\t       <TELL \"The leaves burn\">\n\t       <COND (<HELD? ,LEAVES>\n\t\t      <JIGS-UP \", and so do you.\">)\n\t\t     (T\n\t\t      <TELL ,PERIOD-CR>)>\n\t       <REMOVE-CAREFULLY ,PRSO>)\n\t      (<VERB? CUT>\n\t       <GRATING-APPEARS>\n\t       <TELL \"The leaves seem to be too soggy to cut.\" CR>)\n\t      (<AND <VERB? MOVE>\n\t       \t    <GRATING-APPEARS>>\n\t       <CRLF>)\n\t      (<VERB? TAKE>\n\t       <GRATING-APPEARS>\n\t       <RFALSE>)\n\t      (<AND <VERB? LOOK-UNDER>\n\t\t    <NOT ,GRATE-REVEALED>>\n\t       <PEEK-UNDER ,LEAVES ,GRATE>)>>"
  },
  "GRATING-APPEARS": {
   "name": "GRATING-APPEARS",
   "file": "above-ground.zil",
   "line": 369,
   "endLine": 377,
   "source": "<ROUTINE GRATING-APPEARS () \n\t<COND (<AND <NOT <FSET? ,GRATE ,OPENBIT>>\n\t            <NOT ,GRATE-REVEALED>>\n\t       <FCLEAR ,GRATE ,INVISIBLE>\n\t       <SETG GRATE-REVEALED T>\n\t       <TELL \"In disturbing the leaves, a grating is revealed. \">\n\t       <RTRUE>)\n\t      (T\n\t       <RFALSE>)>>"
  },
  "CANYON-VIEW-F": {
   "name": "CANYON-VIEW-F",
   "file": "above-ground.zil",
   "line": 409,
   "endLine": 413,
   "source": "<ROUTINE CANYON-VIEW-F (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-BEG>\n\t\t     <VERB? LEAP>\n\t\t     <NOT ,PRSO>>\n\t\t<JIGS-UP \"You should have looked before you leaped.\">)>>"
  },
  "CLIFF-F": {
   "name": "CLIFF-F",
   "file": "above-ground.zil",
   "line": 422,
   "endLine": 430,
   "source": "<ROUTINE CLIFF-F ()\n\t <COND (<OR <VERB? LEAP>\n\t\t    <AND <VERB? PUT>\n\t\t\t <PRSO? ,ME>>>\n\t\t<JIGS-UP \"You should have looked before you leaped.\">)\n\t       (<AND <VERB? PUT THROW-OFF>\n\t\t     <PRSI? ,CLIMBABLE-CLIFF>>\n\t        <TELL \"The \" D ,PRSO \" is now lost in the river.\" CR>\n\t\t<REMOVE-CAREFULLY ,PRSO>)>>"
  },
  "RAINBOW-F": {
   "name": "RAINBOW-F",
   "file": "above-ground.zil",
   "line": 468,
   "endLine": 475,
   "source": "<ROUTINE RAINBOW-F ()\n\t <COND (<VERB? CROSS THROUGH>\n\t\t<COND (<EQUAL? ,HERE ,CANYON-VIEW>\n\t\t       <V-WALK-AROUND>)\n\t\t      (T\n\t\t       <DO-WALK ,P?UP>)>)\n\t       (<VERB? LOOK-UNDER>\n\t\t<TELL \"The Frigid River flows under the rainbow.\" CR>)>>"
  },
  "KITCHEN-WINDOW-F": {
   "name": "KITCHEN-WINDOW-F",
   "file": "above-ground.zil",
   "line": 497,
   "endLine": 514,
   "source": "<ROUTINE KITCHEN-WINDOW-F ()\n\t <COND (<VERB? OPEN CLOSE>\n\t\t<OPEN-CLOSE ,KITCHEN-WINDOW\n\"With great effort, you open the window enough to allow entry.\"\n\"The window closes (more easily than it opened).\">)\n\t       (<AND <VERB? EXAMINE>\n\t\t     <NOT <FSET? ,KITCHEN ,OPENBIT>>>\n\t\t<TELL\n\"The window is slightly ajar, but not enough to allow entry.\" CR>)\n\t       (<VERB? WALK BOARD THROUGH>\n\t\t<DO-WALK <COND (<EQUAL? ,HERE ,KITCHEN> ,P?EAST)\n\t\t\t       (T ,P?WEST)>>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<TELL \"You can see a \">\n\t\t<COND (<EQUAL? ,HERE ,KITCHEN>\n\t\t       <TELL \"forest clearing.\" CR>)\n\t\t      (T\n\t\t       <TELL \"kitchen.\" CR>)>)>>"
  },
  "KITCHEN-F": {
   "name": "KITCHEN-F",
   "file": "above-ground.zil",
   "line": 529,
   "endLine": 535,
   "source": "<ROUTINE KITCHEN-F (RARG)\n\t<COND (<EQUAL? .RARG ,M-LOOK>\n\t       <TELL\n\"You are in the kitchen of the white house. A table has been used recently\nfor the preparation of food. A passage leads west and a dark staircase leads\nupward. A chimney leads down and to the east\">\n\t       <DESCRIBE-WINDOW>)>>"
  },
  "SANDWICH-BAG-F": {
   "name": "SANDWICH-BAG-F",
   "file": "above-ground.zil",
   "line": 556,
   "endLine": 559,
   "source": "<ROUTINE SANDWICH-BAG-F ()\n\t <COND (<AND <VERB? SMELL>\n\t\t     <IN? ,LUNCH ,PRSO>>\n\t\t<TELL \"Hot peppers!\" CR>)>>"
  },
  "GARLIC-F": {
   "name": "GARLIC-F",
   "file": "above-ground.zil",
   "line": 577,
   "endLine": 582,
   "source": "<ROUTINE GARLIC-F ()\n\t <COND (<VERB? EAT>\n\t\t<REMOVE ,PRSO>\n\t\t<TELL\n\"You won't make friends this way, but nobody around here is too friendly\nanyhow. Gulp!\" CR>)>>"
  },
  "BOTTLE-F": {
   "name": "BOTTLE-F",
   "file": "above-ground.zil",
   "line": 594,
   "endLine": 608,
   "source": "<ROUTINE BOTTLE-F ()\n\t <COND (<AND <VERB? THROW MUNG>\n\t\t     <PRSO? ,BOTTLE>>\n\t\t<TELL \"The bottle shatters.\">\n\t\t<COND (<IN? ,WATER ,PRSO>\n\t\t       <REMOVE-CAREFULLY ,WATER>\n\t\t       <TELL \" \" ,WATER-EVAPORATES>)\n\t\t      (T\n\t\t       <CRLF>)>\n\t\t<REMOVE-CAREFULLY ,PRSO>)\n\t       (<AND <VERB? SHAKE>\n\t\t     <FSET? ,PRSO ,OPENBIT>\n\t\t     <IN? ,WATER ,PRSO>>\n\t\t<REMOVE-CAREFULLY ,WATER>\n\t\t<TELL ,WATER-EVAPORATES>)>>"
  },
  "WATER-F": {
   "name": "WATER-F",
   "file": "above-ground.zil",
   "line": 618,
   "endLine": 663,
   "source": "<ROUTINE WATER-F ()\n\t <COND (<VERB? THROUGH BOARD>\n\t\t<TELL ,YOU-CANT \"swim in the dungeon.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? FILL>\n\t\t<PERFORM ,V?PUT ,PRSI ,PRSO>\n\t\t<RTRUE>)\n\t       (<AND <VERB? TAKE>\n\t\t     <IN? ,PRSO ,BOTTLE>\n\t\t     <NOT ,PRSI>>\n\t\t<PERFORM ,V?TAKE ,BOTTLE>\n\t\t<RTRUE>)\n\t       (<AND <VERB? TAKE PUT>\n\t\t     <PRSO? ,WATER ,GLOBAL-WATER>>\n\t\t<COND (<NOT ,PRSI>\n\t\t       <COND (<HELD? ,BOTTLE>\n\t\t\t      <SETG PRSI ,BOTTLE>)\n\t\t\t     (T\n\t\t\t      <SETG PRSI ,HANDS>)>)>\n\t\t<COND (<PRSI? ,HANDS>\n\t\t       <TELL \"The water slips through your fingers.\" CR>)\n\t\t      (<NOT <HELD? ,PRSI>>\n\t\t       <TELL ,YNH \"the \" D ,PRSI ,PERIOD-CR>)\n\t\t      (<NOT <PRSI? ,BOTTLE>>\n\t\t       <COND (<PRSO? ,WATER> ;\"might be GLOBAL-WATER\"\n\t\t       \t      <REMOVE-CAREFULLY ,WATER>)>\n\t\t       <TELL\n\"The water leaks out of the \" D ,PRSI \" and evaporates immediately.\" CR>)\n\t\t      (<NOT <FSET? ,BOTTLE ,OPENBIT>>\n\t\t       <SETG P-IT-OBJECT ,BOTTLE>\n\t\t       <TELL \"The bottle is closed.\" CR>)\n\t\t      (<NOT <FIRST? ,BOTTLE>>\n\t\t       <MOVE ,WATER ,BOTTLE>\n\t\t       <TELL \"The bottle is now full of water.\" CR>)>)\n\t       (<AND <VERB? PUT>\n\t\t     <PRSI? ,WATER ,GLOBAL-WATER>\n\t\t     <GLOBAL-IN? ,RIVER>>\n\t\t<PERFORM ,V?PUT ,PRSO ,RIVER>\n\t\t<RTRUE>)\n\t       (<AND <VERB? DROP GIVE THROW>\n\t\t     <IN? ,WATER ,BOTTLE>>\n\t\t<COND (<NOT <FSET? ,BOTTLE ,OPENBIT>>\n\t\t       <TELL \"The bottle is closed.\" CR>)\n\t\t      (T\n\t\t       <REMOVE-CAREFULLY ,WATER>\n\t\t       <TELL ,WATER-EVAPORATES>)>)>>"
  },
  "ROPE-F": {
   "name": "ROPE-F",
   "file": "above-ground.zil",
   "line": 690,
   "endLine": 720,
   "source": "<ROUTINE ROPE-F ()\n\t <COND (<VERB? TIE>\n\t\t<COND (<PRSI? ,RAILING>\n\t\t       <COND (,DOME-FLAG\n\t\t\t      <TELL ,ALREADY>)\n\t\t\t     (T\n\t\t\t      <SETG DOME-FLAG T>\n\t\t\t      <FSET ,ROPE ,NDESCBIT>\n\t\t\t      <FSET ,ROPE ,TRYTAKEBIT>\n\t\t\t      <FSET ,ROPE ,CLIMBBIT>\n\t\t\t      <MOVE ,ROPE ,HERE>\n\t\t\t      <TELL\n\"The rope drops over the side and comes within ten feet of the floor.\" CR>)>)\n\t\t      (T\n\t\t       <TELL ,YOU-CANT \"tie the rope to that.\" CR>)>)\n\t       (<AND <VERB? TIE-UP>\n\t\t     <PRSI? ,ROPE>>\n\t\t<TELL\n\"The \" D ,PRSO \" struggles and you cannot tie him up.\" CR>)\n\t       (<VERB? UNTIE>\n\t\t<COND (,DOME-FLAG\n\t\t       <SETG DOME-FLAG <>>\n\t\t       <FCLEAR ,ROPE ,NDESCBIT>\n\t\t       <FCLEAR ,ROPE ,TRYTAKEBIT>\n\t\t       <FCLEAR ,ROPE ,CLIMBBIT>\n\t\t       <TELL \"The rope is now untied.\" CR>)\n\t\t      (T\n\t\t       <TELL \"It is not tied to anything.\" CR>)>)\n\t       (<AND <VERB? TAKE>\n\t\t     ,DOME-FLAG>\n\t\t<TELL \"The rope is tied to the railing.\" CR>)>>"
  },
  "TRAP-DOOR-EXIT": {
   "name": "TRAP-DOOR-EXIT",
   "file": "above-ground.zil",
   "line": 733,
   "endLine": 743,
   "source": "<ROUTINE TRAP-DOOR-EXIT ()\n\t <COND (,RUG-MOVED\n\t\t<COND (<FSET? ,TRAP-DOOR ,OPENBIT>\n\t\t       <RETURN ,CELLAR>)\n\t\t      (T\n\t\t       <SETG P-IT-OBJECT ,TRAP-DOOR>\n\t\t       <TELL \"The trap door is closed.\" CR>\n\t\t       <RFALSE>)>)\n\t       (T\n\t\t<TELL ,CANT-GO>\n\t\t<RFALSE>)>>"
  },
  "LIVING-ROOM-F": {
   "name": "LIVING-ROOM-F",
   "file": "above-ground.zil",
   "line": 745,
   "endLine": 775,
   "source": "<ROUTINE LIVING-ROOM-F (RARG)\n\t<COND (<EQUAL? .RARG ,M-LOOK>\n\t       <TELL \"The living room opens to the east. To the west is a\">\n\t       <COND (,MAGIC-FLAG\n\t\t      <TELL \" cyclops-shaped opening in a\">)>\n\t       <TELL \" wooden door, above which is strange gothic lettering. \">\n\t       <COND (<NOT ,MAGIC-FLAG>\n\t\t      <TELL \"The door is nailed shut. \">)>\n\t       <TELL \"There is a trophy case here, and a\">\n\t       <COND (,RUG-MOVED\n\t\t      <TELL \" rug lying beside a\">\n\t\t      <COND (<FSET? ,TRAP-DOOR ,OPENBIT>\n\t\t\t     <TELL \"n open\">)\n\t\t\t    (T\n\t\t\t     <TELL \" closed\">)>\n\t\t      <TELL \" trap door\">)\n\t\t     (T\n\t\t      <TELL \" large oriental rug in the center of the room\">)>\n\t       <TELL \".\">)\n\t      (<AND <EQUAL? .RARG ,M-END>\n\t\t    <VERB? PUT>\n\t\t    <PRSI? ,TROPHY-CASE>\n\t\t    <EQUAL? <COUNT-TREASURES ,TROPHY-CASE> 15>\n\t\t    <EQUAL? ,SCORE 325>\n\t\t    <NOT ,WON-FLAG>>\n\t\t<SETG WON-FLAG T>\n\t\t<SETG SCORE 350>\n\t\t<FCLEAR ,MAP ,INVISIBLE>\n\t\t<FCLEAR ,WEST-OF-HOUSE ,TOUCHBIT>\n\t\t<TELL\n\"A voice whispers, \\\"Look to your treasures for the final secret.\\\"\" CR>)>>"
  },
  "COUNT-TREASURES": {
   "name": "COUNT-TREASURES",
   "file": "above-ground.zil",
   "line": 777,
   "endLine": 785,
   "source": "<ROUTINE COUNT-TREASURES (OBJ \"AUX\" (X <FIRST? .OBJ>) (CNT 0))\n\t <REPEAT ()\n\t\t <COND (<NOT .X>\n\t\t\t<RETURN>)>\n\t\t <COND (<FSET? .X ,TREASUREBIT>\n\t\t \t<SET CNT <+ .CNT 1>>)>\n\t\t <SET CNT <+ .CNT <COUNT-TREASURES .X>>>\n\t\t <SET X <NEXT? .X>>>\n\t .CNT>"
  },
  "TROPHY-CASE-F": {
   "name": "TROPHY-CASE-F",
   "file": "above-ground.zil",
   "line": 796,
   "endLine": 799,
   "source": "<ROUTINE TROPHY-CASE-F ()\n\t <COND (<AND <VERB? TAKE>\n\t\t     <PRSO? ,TROPHY-CASE>>\n\t\t<FASTENED ,TROPHY-CASE \"wall\">)>>"
  },
  "LAMP-F": {
   "name": "LAMP-F",
   "file": "above-ground.zil",
   "line": 834,
   "endLine": 852,
   "source": "<ROUTINE LAMP-F ()\n\t <COND (<VERB? THROW>\n\t\t<TELL \"You might break it!\" CR>)\n\t       (<AND <VERB? LAMP-ON LAMP-OFF EXAMINE>\n\t\t     <FSET? ,LAMP ,RMUNGBIT>>\n\t\t<TELL \"The lamp has burned out.\" CR>)\n\t       (<VERB? LAMP-ON>\n\t\t<ENABLE <INT I-LANTERN>>\n\t\t<RFALSE>)\n\t       (<VERB? LAMP-OFF>\n\t\t<DISABLE <INT I-LANTERN>>\n\t\t<RFALSE>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"The lamp is o\">\n\t\t<COND (<FSET? ,LAMP ,ONBIT>\n\t\t       <TELL \"n\">)\n\t\t      (T\n\t\t       <TELL \"ff\">)>\n\t\t<TELL ,PERIOD-CR>)>>"
  },
  "I-LANTERN": {
   "name": "I-LANTERN",
   "file": "above-ground.zil",
   "line": 854,
   "endLine": 858,
   "source": "<ROUTINE I-LANTERN (\"AUX\" TICK (TBL <VALUE LAMP-TABLE>))\n\t <ENABLE <QUEUE I-LANTERN <SET TICK <GET .TBL 0>>>>\n\t <LIGHT-INT ,LAMP .TBL .TICK>\n\t <COND (<NOT <0? .TICK>>\n\t\t<SETG LAMP-TABLE <REST .TBL 4>>)>>"
  },
  "WOODEN-DOOR-F": {
   "name": "WOODEN-DOOR-F",
   "file": "above-ground.zil",
   "line": 876,
   "endLine": 880,
   "source": "<ROUTINE WOODEN-DOOR-F ()\n\t <COND (<VERB? OPEN LOOK-BEHIND>\n\t\t<TELL \"It won't open.\" CR>)\n\t       (<VERB? BURN MUNG>\n\t\t<TELL \"Nice try.\" CR>)>>"
  },
  "RUG-F": {
   "name": "RUG-F",
   "file": "above-ground.zil",
   "line": 892,
   "endLine": 916,
   "source": "<ROUTINE RUG-F ()\n\t <COND (<VERB? RAISE TAKE>\n\t\t<TELL \"The rug is too heavy to lift\">\n\t\t<COND (<NOT ,RUG-MOVED>\n\t\t       <TELL \", but you noticed an irregularity beneath it\">)>\n\t\t<TELL ,PERIOD-CR>)\n\t       (<VERB? MOVE PUSH>\n\t\t<COND (,RUG-MOVED\n\t\t       <TELL ,ALREADY>)\n\t\t      (T\n\t\t       <FCLEAR ,TRAP-DOOR ,INVISIBLE>\n\t\t       <SETG P-IT-OBJECT ,TRAP-DOOR>\n\t\t       <SETG RUG-MOVED T>\n\t\t       <TELL\n\"You drag the rug to one side of the room, revealing a\nclosed trap door.\" CR>)>)\n\t       (<AND <VERB? LOOK-UNDER>\n\t\t     <NOT ,RUG-MOVED>>\n\t\t<PEEK-UNDER ,RUG ,TRAP-DOOR>)\n\t       (<VERB? CLIMB-ON>\n\t\t<COND (<NOT ,RUG-MOVED>\n\t\t       <TELL\n\"As you try to sit, you notice an irregularity beneath the rug.\" CR>)\n\t\t      (T\n\t\t       <TELL \"It's not a magic carpet.\" CR>)>)>>"
  },
  "TRAP-DOOR-F": {
   "name": "TRAP-DOOR-F",
   "file": "above-ground.zil",
   "line": 926,
   "endLine": 945,
   "source": "<ROUTINE TRAP-DOOR-F ()\n\t <COND (<OR <VERB? RAISE>\n\t\t    <AND <VERB? LOOK-UNDER>\n\t\t\t <EQUAL? ,HERE ,LIVING-ROOM>>>\n\t\t<PERFORM ,V?OPEN ,TRAP-DOOR>\n\t\t<RTRUE>)\n\t       (<AND <VERB? OPEN CLOSE>\n\t\t     <EQUAL? ,HERE ,LIVING-ROOM>>\n\t\t<OPEN-CLOSE ,PRSO\n\"The door reluctantly opens to reveal a rickety staircase descending into\ndarkness.\"\n\"The door swings shut.\">)\n\t       (<EQUAL? ,HERE ,CELLAR>\n\t\t<COND (<AND <VERB? OPEN UNLOCK>\n\t\t\t    <NOT <FSET? ,TRAP-DOOR ,OPENBIT>>>\n\t\t       <TELL \"It's latched from above.\" CR>)\n\t\t      (<AND <VERB? CLOSE>\n\t\t\t    <FSET? ,TRAP-DOOR ,OPENBIT>>\n\t\t       <FCLEAR ,TRAP-DOOR ,OPENBIT>\n\t\t       <TELL \"The door latches shut.\" CR>)>)>>"
  },
  "NOT-HERE-OBJECT-F": {
   "name": "NOT-HERE-OBJECT-F",
   "file": "globals.zil",
   "line": 39,
   "endLine": 59,
   "source": "<ROUTINE NOT-HERE-OBJECT-F (\"AUX\" TBL (PRSO? T) OBJ)\n\t <COND (<AND <EQUAL? ,PRSO ,NOT-HERE-OBJECT>\n\t\t     <EQUAL? ,PRSI ,NOT-HERE-OBJECT>>\n\t\t<TELL \"Those things aren't here!\" CR>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSO ,NOT-HERE-OBJECT>\n\t\t<SET TBL ,P-PRSO>)\n\t       (T\n\t\t<SET TBL ,P-PRSI>\n\t\t<SET PRSO? <>>)>\n\t <SETG P-CONT <>>\n\t <SETG QUOTE-FLAG <>>\n\t <COND (<EQUAL? ,WINNER ,ADVENTURER>\n\t\t<TELL ,YOU-CANT \"see any \">\n\t\t<NOT-HERE-PRINT .PRSO?>\n\t\t<TELL \" here!\" CR>)\n\t       (T\n\t\t<TELL \"The \" D ,WINNER \" seems confused. \\\"I don't see any \">\n\t\t<NOT-HERE-PRINT .PRSO?>\n\t\t<TELL \" here!\\\"\" CR>)>\n\t <RTRUE>>"
  },
  "NOT-HERE-PRINT": {
   "name": "NOT-HERE-PRINT",
   "file": "globals.zil",
   "line": 61,
   "endLine": 70,
   "source": "<ROUTINE NOT-HERE-PRINT (PRSO?)\n      <COND (,P-OFLAG\n\t     <COND (,P-XADJ\n\t\t    <PRINTB ,P-XADJN>)>\n\t     <COND (,P-XNAM\n\t\t    <PRINTB ,P-XNAM>)>)\n\t    (.PRSO?\n\t     <BUFFER-PRINT <GET ,P-ITBL ,P-NC1> <GET ,P-ITBL ,P-NC1L> <>>)\n\t    (T\n\t     <BUFFER-PRINT <GET ,P-ITBL ,P-NC2> <GET ,P-ITBL ,P-NC2L> <>>)>>"
  },
  "STAIRS-F": {
   "name": "STAIRS-F",
   "file": "globals.zil",
   "line": 92,
   "endLine": 94,
   "source": "<ROUTINE STAIRS-F ()\n\t <COND (<VERB? THROUGH>\n\t\t<TELL \"Up? Down?\" CR>)>>"
  },
  "SAILOR-F": {
   "name": "SAILOR-F",
   "file": "globals.zil",
   "line": 105,
   "endLine": 117,
   "source": "<ROUTINE SAILOR-F ()\n\t  <COND (<VERB? TELL>\n\t\t <SETG P-CONT <>>\n\t\t <SETG QUOTE-FLAG <>>\n\t\t <TELL ,YOU-CANT \"talk to the sailor that way.\" CR>)\n\t\t(<VERB? EXAMINE>\n  \t\t <TELL \"There is no sailor to be seen.\" CR>)\n\t\t(<VERB? HELLO>\n\t\t <SETG HS <+ ,HS 1>>\n\t\t <COND (<0? <MOD ,HS 12>>\n\t\t\t<TELL \"You seem to be repeating yourself.\" CR>)\n\t\t       (T\n\t\t\t<TELL \"Nothing happens here.\" CR>)>)>>"
  },
  "GROUND-F": {
   "name": "GROUND-F",
   "file": "globals.zil",
   "line": 125,
   "endLine": 138,
   "source": "<ROUTINE GROUND-F ()\n\t <COND (<AND <VERB? PUT PUT-ON>\n\t\t     <EQUAL? ,PRSI ,GROUND>>\n\t\t<PERFORM ,V?DROP ,PRSO>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,HERE ,SANDY-CAVE>\n\t\t<SAND-F>)\n\t       (<VERB? DIG>\n\t\t<TELL \"The ground is too \">\n\t\t<COND (<EQUAL? ,HERE ,RESERVOIR>\n\t\t       <TELL \"muddy\">)\n\t\t      (T\n\t\t       <TELL \"hard\">)>\n\t\t<TELL \" here.\" CR>)>>"
  },
  "GRUE-F": {
   "name": "GRUE-F",
   "file": "globals.zil",
   "line": 147,
   "endLine": 156,
   "source": "<ROUTINE GRUE-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The grue is a sinister, lurking presence in the dark places of the earth.\nIts favorite diet is adventurers, but its insatiable appetite is tempered\nby its fear of light.\" CR>)\n\t       (<VERB? FIND>\n\t\t<TELL\n\"One is probably lurking in the dark nearby. Don't let your light\ngo out!\" CR>)>>"
  },
  "ME-F": {
   "name": "ME-F",
   "file": "globals.zil",
   "line": 172,
   "endLine": 192,
   "source": "<ROUTINE ME-F ()\n\t <COND (<VERB? TELL>\n\t\t<SETG P-CONT <>>\n\t\t<SETG QUOTE-FLAG <>>\n\t        <TELL ,MENTAL-COLLAPSE>)\n\t       (<AND <VERB? GIVE>\n\t\t     <EQUAL? ,PRSI ,ME>>\n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? EAT>\n\t\t<TELL \"Auto-cannibalism is not the answer.\" CR>)\n\t       (<AND <VERB? ATTACK MUNG>\n\t\t     <PRSO? ,ME>>\n\t\t<JIGS-UP \"Poof, you're dead!\">)\n\t       (<VERB? TAKE>\n\t\t<TELL \"How romantic!\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (<EQUAL? ,HERE ,MIRROR-ROOM-NORTH ,MIRROR-ROOM-SOUTH>\n\t\t       <TELL \"Your image in the mirror looks tired.\" CR>)\n\t\t      (T\n\t\t       <TELL \"Are your eyes prehensile?\" CR>)>)>>"
  },
  "PATH-OBJECT-F": {
   "name": "PATH-OBJECT-F",
   "file": "globals.zil",
   "line": 209,
   "endLine": 213,
   "source": "<ROUTINE PATH-OBJECT-F ()\n\t <COND (<VERB? TAKE FOLLOW>\n\t\t<V-WALK-AROUND>)\n\t       (<VERB? DIG>\n\t\t<TELL \"Not a chance.\" CR>)>>"
  },
  "MIRROR-ROOM-F": {
   "name": "MIRROR-ROOM-F",
   "file": "globals.zil",
   "line": 224,
   "endLine": 232,
   "source": "<ROUTINE MIRROR-ROOM-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t        <TELL \"You are in a square room with tall ceilings. A \">\n\t\t<COND (<EQUAL? ,MIRROR-MUNG ,HERE ,MIRROR>\n\t\t       <TELL \"demolished\">)\n\t\t      (T\n\t\t       <TELL \"huge\">)>\n\t\t<TELL\n\" mirror fills the south wall. There are exits east and northeast.\">)>>"
  },
  "MIRROR-F": {
   "name": "MIRROR-F",
   "file": "globals.zil",
   "line": 245,
   "endLine": 276,
   "source": "<ROUTINE MIRROR-F (\"AUX\" OTHER-ROOM)\n\t<COND (<AND <VERB? RUB>\n\t\t    <NOT ,MIRROR-MUNG>>\n\t       <COND (<EQUAL? ,HERE ,MIRROR-ROOM-NORTH>\n\t\t      <SET OTHER-ROOM ,MIRROR-ROOM-SOUTH>)\n\t\t     (T\n\t\t      <SET OTHER-ROOM ,MIRROR-ROOM-NORTH>)>\n\t       <ROB ,HERE ,MIRROR <>>\n\t       <ROB .OTHER-ROOM ,HERE <>>\n\t       <ROB ,MIRROR .OTHER-ROOM <>>\n\t       <GOTO .OTHER-ROOM <>>\n\t       <TELL \"There is a rumble from deep within the earth.\" CR>)\n\t      (<VERB? LOOK-INSIDE EXAMINE>\n\t       <COND (<EQUAL? ,MIRROR-MUNG ,HERE ,MIRROR>\n\t\t      <TELL \"The mirror is shattered.\">)\n\t\t     (T\n\t\t      <TELL \"An ugly person stares back at you.\">)>\n\t       <CRLF>)\n\t      (<VERB? TAKE>\n\t       <FASTENED ,MIRROR \"wall\">)\n\t      (<VERB? MUNG THROW ATTACK>\n\t       <COND (<EQUAL? ,MIRROR-MUNG ,HERE ,MIRROR>\n\t\t      <TELL \"You've done enough damage already.\" CR>)\n\t\t     (T\n\t\t      <COND (,MIRROR-MUNG ;\"you've already broken the other\"\n\t\t\t     <SETG MIRROR-MUNG ,MIRROR>)\n\t\t\t    (T\n\t\t\t     <SETG MIRROR-MUNG ,HERE>)>\n\t\t      <SETG LUCKY <>>\n\t\t      <TELL\n\"The mirror breaks. I hope you have a seven year supply of good luck\nhandy.\" CR>)>)>>"
  },
  "CHIMNEY-F": {
   "name": "CHIMNEY-F",
   "file": "globals.zil",
   "line": 286,
   "endLine": 293,
   "source": "<ROUTINE CHIMNEY-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"The chimney leads \">\n\t\t<COND (<EQUAL? ,HERE ,KITCHEN>\n\t\t       <TELL \"down\">)\n\t\t      (T\n\t\t       <TELL \"up, and looks climbable\">)>\n\t\t<TELL ,PERIOD-CR>)>>"
  },
  "LIGHT-INT": {
   "name": "LIGHT-INT",
   "file": "globals.zil",
   "line": 297,
   "endLine": 307,
   "source": "<ROUTINE LIGHT-INT (OBJ TBL TICK)\n\t <COND (<0? .TICK>\n\t\t<FCLEAR .OBJ ,ONBIT>\n\t\t<FSET .OBJ ,RMUNGBIT>)>\n\t <COND (<OR <HELD? .OBJ>\n\t\t    <IN? .OBJ ,HERE>>\n\t\t<COND (<0? .TICK>\n\t\t       <TELL \"The \" D .OBJ \" fizzles and dies.\" CR>\n\t\t       <NOW-DARK?>)\n\t\t      (T\n\t\t       <TELL <GET .TBL 1> CR>)>)>>"
  },
  "GLOBAL-IN?": {
   "name": "GLOBAL-IN?",
   "file": "globals.zil",
   "line": 309,
   "endLine": 311,
   "source": "<ROUTINE GLOBAL-IN? (OBJ \"AUX\" TX)\n\t <COND (<SET TX <GETPT ,HERE ,P?GLOBAL>>\n\t\t<ZMEMQB .OBJ .TX <- <PTSIZE .TX> 1>>)>> "
  },
  "FIND-IN": {
   "name": "FIND-IN",
   "file": "globals.zil",
   "line": 313,
   "endLine": 322,
   "source": "<ROUTINE FIND-IN (WHERE WHAT \"AUX\" W)\n\t <SET W <FIRST? .WHERE>>\n\t <COND (<NOT .W>\n\t\t<RFALSE>)>\n\t <REPEAT ()\n\t\t <COND (<AND <FSET? .W .WHAT>\n\t\t\t     <NOT <EQUAL? .W ,ADVENTURER>>>\n\t\t\t<RETURN .W>)\n\t\t       (<NOT <SET W <NEXT? .W>>>\n\t\t\t<RETURN <>>)>>>"
  },
  "ACCESSIBLE?": {
   "name": "ACCESSIBLE?",
   "file": "globals.zil",
   "line": 324,
   "endLine": 342,
   "source": "<ROUTINE ACCESSIBLE? (OBJ \"AUX\" (L <LOC .OBJ>))\n\t <COND (<FSET? .OBJ ,INVISIBLE>\n\t\t<RFALSE>)\n\t       (<NOT .L>\n\t\t<RFALSE>)\n\t       (<EQUAL? .L ,GLOBAL-OBJECTS>\n\t\t<RTRUE>)\n\t       (<AND <EQUAL? .L ,LOCAL-GLOBALS>\n\t\t     <GLOBAL-IN? .OBJ>>\n\t\t<RTRUE>)\n\t       (<NOT <EQUAL? <META-LOC .OBJ> ,HERE <LOC ,WINNER>>>\n\t\t<RFALSE>)\n\t       (<EQUAL? .L ,WINNER ,HERE <LOC ,WINNER>>\n\t\t<RTRUE>)\n\t       (<AND <FSET? .L ,OPENBIT>\n\t\t     <ACCESSIBLE? .L>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "META-LOC": {
   "name": "META-LOC",
   "file": "globals.zil",
   "line": 344,
   "endLine": 353,
   "source": "<ROUTINE META-LOC (OBJ)\n\t <REPEAT ()\n\t\t <COND (<NOT .OBJ>\n\t\t\t<RFALSE>)\n\t\t       (<IN? .OBJ ,GLOBAL-OBJECTS>\n\t\t\t<RETURN ,GLOBAL-OBJECTS>)>\n\t\t <COND (<IN? .OBJ ,ROOMS>\n\t\t\t<RETURN .OBJ>)\n\t\t       (T\n\t\t\t<SET OBJ <LOC .OBJ>>)>>>"
  },
  "HELD?": {
   "name": "HELD?",
   "file": "globals.zil",
   "line": 355,
   "endLine": 361,
   "source": "<ROUTINE HELD? (CAN)\n\t <REPEAT ()\n\t\t <SET CAN <LOC .CAN>>\n\t\t <COND (<NOT .CAN>\n\t\t\t<RFALSE>)\n\t\t       (<EQUAL? .CAN ,WINNER>\n\t\t\t<RTRUE>)>>>"
  },
  "OTHER-SIDE": {
   "name": "OTHER-SIDE",
   "file": "globals.zil",
   "line": 363,
   "endLine": 371,
   "source": "<ROUTINE OTHER-SIDE (DOBJ \"AUX\" (P 0) TX) ;\"finds room beyond given door\"\n\t <REPEAT ()\n\t\t <COND (<L? <SET P <NEXTP ,HERE .P>> ,LOW-DIRECTION>\n\t\t\t<RETURN <>>)\n\t\t       (T\n\t\t\t<SET TX <GETPT ,HERE .P>>\n\t\t\t<COND (<AND <EQUAL? <PTSIZE .TX> ,DEXIT>\n\t\t\t\t    <EQUAL? <GETB .TX ,DEXITOBJ> .DOBJ>>\n\t\t\t       <RETURN .P>)>)>>>"
  },
  "REMOVE-CAREFULLY": {
   "name": "REMOVE-CAREFULLY",
   "file": "globals.zil",
   "line": 373,
   "endLine": 377,
   "source": "<ROUTINE REMOVE-CAREFULLY (OBJ)\n\t <COND (<EQUAL? .OBJ ,P-IT-OBJECT>\n\t\t<SETG P-IT-OBJECT <>>)>\n\t <REMOVE .OBJ>\n\t <NOW-DARK?>>"
  },
  "NOW-DARK?": {
   "name": "NOW-DARK?",
   "file": "globals.zil",
   "line": 379,
   "endLine": 384,
   "source": "<ROUTINE NOW-DARK? ()\n\t <COND (<AND ,LIT\n\t\t     <NOT <LIT? ,HERE>>>\n\t\t<SETG LIT <>>\n\t\t<TELL \"It is now pitch black.\" CR>)>\n\t <RTRUE>>"
  },
  "STUPID-CONTAINER": {
   "name": "STUPID-CONTAINER",
   "file": "globals.zil",
   "line": 386,
   "endLine": 393,
   "source": "<ROUTINE STUPID-CONTAINER (OBJ STR)\n\t <COND (<VERB? CLOSE>\n\t\t<TELL \"It is!\" CR>)\n\t       (<VERB? LOOK-INSIDE EXAMINE OPEN>\n\t\t<TELL \"Lots of \" .STR ,PERIOD-CR>)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSI .OBJ>>\n\t\t<TELL \"Then it wouldn't be a \" D .OBJ \" anymore!\" CR>)>>"
  },
  "PEEK-UNDER": {
   "name": "PEEK-UNDER",
   "file": "globals.zil",
   "line": 395,
   "endLine": 398,
   "source": "<ROUTINE PEEK-UNDER (OBJ1 OBJ2)\n\t <TELL\n\"Underneath the \" D .OBJ1 \" is a \" D .OBJ2 \". As you release the \" D .OBJ1\n\", the \" D .OBJ2 \" is once again concealed from view.\" CR>>"
  },
  "FASTENED": {
   "name": "FASTENED",
   "file": "globals.zil",
   "line": 400,
   "endLine": 402,
   "source": "<ROUTINE FASTENED (OBJ STRING)\n\t <TELL\n\"The \" D .OBJ \" is securely fastened to the \" .STRING ,PERIOD-CR>>"
  },
  "OPEN-CLOSE": {
   "name": "OPEN-CLOSE",
   "file": "globals.zil",
   "line": 404,
   "endLine": 416,
   "source": "<ROUTINE OPEN-CLOSE (OBJ STROPN STRCLS)\n\t <COND (<VERB? OPEN>\n\t\t<COND (<FSET? .OBJ ,OPENBIT>\n\t\t       <TELL ,LOOK-AROUND>)\n\t\t      (T\n\t\t       <FSET .OBJ ,OPENBIT>\n\t\t       <TELL .STROPN CR>)>)\n\t       (<VERB? CLOSE>\n\t\t<COND (<FSET? .OBJ ,OPENBIT>\n\t\t       <FCLEAR .OBJ ,OPENBIT>\n\t\t       <TELL .STRCLS CR>)\n\t\t      (T\n\t\t       <TELL ,LOOK-AROUND>)>)>>"
  },
  "HACK-HACK": {
   "name": "HACK-HACK",
   "file": "globals.zil",
   "line": 418,
   "endLine": 419,
   "source": "<ROUTINE HACK-HACK (STR)\n\t <TELL .STR D ,PRSO <PICK-ONE ,HO-HUM> ,PERIOD-CR>>"
  },
  "BAG-OF-COINS-F": {
   "name": "BAG-OF-COINS-F",
   "file": "maze.zil",
   "line": 74,
   "endLine": 75,
   "source": "<ROUTINE BAG-OF-COINS-F ()\n\t <STUPID-CONTAINER ,BAG-OF-COINS \"coins\">>"
  },
  "RUSTY-KNIFE-F": {
   "name": "RUSTY-KNIFE-F",
   "file": "maze.zil",
   "line": 87,
   "endLine": 103,
   "source": "<ROUTINE RUSTY-KNIFE-F ()\n\t<COND (<AND <VERB? TAKE>\n\t\t    <IN? ,SWORD ,WINNER>>\n\t       <TELL\n\"As you touch the rusty knife, your sword gives a single pulse of\nblinding blue light.\" CR>\n\t       <RFALSE>)\n\t      (<OR <AND <PRSI? ,RUSTY-KNIFE>\n\t\t\t<VERB? ATTACK>>\n\t\t   <AND <VERB? SWING>\n\t\t\t<PRSO? ,RUSTY-KNIFE>\n\t\t\t,PRSI>>\n\t       <REMOVE ,RUSTY-KNIFE>\n\t       <JIGS-UP\n\"The knife, moving with its own force, slowly turns your hand, until the\nblade is at your neck. The knife seems to sing as it savagely slits your\nthroat.\">)>>"
  },
  "SKELETON-F": {
   "name": "SKELETON-F",
   "file": "maze.zil",
   "line": 122,
   "endLine": 129,
   "source": "<ROUTINE SKELETON-F ()\n\t <COND (<VERB? TAKE RUB MOVE PUSH RAISE LOWER ATTACK KICK KISS>\n\t \t<ROB ,HERE ,HADES T>\n\t \t<ROB ,ADVENTURER ,HADES T>\n\t\t<TELL\n\"A ghost appears, appalled at your desecration of the remains of a fellow\nadventurer. He curses your valuables and banishes them to Hades. The ghost\nleaves, muttering obscenities.\" CR>)>>"
  },
  "GRATING-ROOM-F": {
   "name": "GRATING-ROOM-F",
   "file": "maze.zil",
   "line": 193,
   "endLine": 205,
   "source": "<ROUTINE GRATING-ROOM-F (RARG)\n  \t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<FCLEAR ,GRATE ,INVISIBLE>)\n\t       (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are in a room off the maze, which lies to the southwest. Above you is a\">\n\t\t<COND (<FSET? ,GRATE ,OPENBIT>\n\t\t       <TELL \"n open grating with sunlight pouring in.\">)\n\t\t      (,GRUNLOCK\n\t\t       <TELL \" grating.\">)\n\t\t      (T\n\t\t       <TELL\n\" grating locked with a skull-and-crossbones lock.\">)>)>>"
  },
  "GRATE-F": {
   "name": "GRATE-F",
   "file": "maze.zil",
   "line": 214,
   "endLine": 254,
   "source": "<ROUTINE GRATE-F ()\n    \t <COND (<AND <VERB? OPEN>\n\t\t     <PRSI? ,KEYS>>\n\t\t<PERFORM ,V?UNLOCK ,GRATE ,KEYS>\n\t\t<RTRUE>)\n\t       (<AND <VERB? LOCK UNLOCK>\n\t\t     <EQUAL? ,HERE ,FOREST-PATH>>\n\t\t<TELL ,YOU-CANT \"from this side.\" CR>)\n\t       (<VERB? LOCK>\n\t\t<SETG GRUNLOCK <>>\n\t\t<TELL \"Locked.\" CR>)\n\t       (<AND <VERB? UNLOCK>\n\t\t     <PRSO? ,GRATE>>\n\t\t<COND (<PRSI? ,KEYS>\n\t\t       <SETG GRUNLOCK T>\n\t\t       <TELL \"Unlocked.\" CR>)\n\t\t      (T\n\t\t       <TELL \"With a \" D ,PRSI \"!?!\" CR>)>)\n               (<VERB? PICK>\n\t\t<TELL \"You haven't the skill.\" CR>)\n               (<VERB? OPEN CLOSE>\n\t\t<COND (,GRUNLOCK\n\t\t       <OPEN-CLOSE ,GRATE \"The grating opens.\"\n\t\t\t\t          \"The grating closes.\">\n\t\t       <COND (<FSET? ,GRATE ,OPENBIT>\n\t\t\t      <FSET ,GRATING-ROOM ,ONBIT>\n\t\t\t      <COND (<AND <NOT <EQUAL? ,HERE ,FOREST-PATH>>\n\t\t\t\t\t  <NOT ,GRATE-REVEALED>>\n\t\t\t\t     \n\t\t\t\t     <SETG GRATE-REVEALED T>\n\t\t\t\t     <MOVE ,LEAVES ,HERE>\n\t\t\t\t     <TELL\n\"A pile of leaves falls onto your head and to the ground.\" CR>)>)\n\t\t\t     (T\n\t\t\t      <FCLEAR ,GRATING-ROOM ,ONBIT>)>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"The grating is locked.\" CR>)>)\n\t       (<AND <VERB? PUT>\n\t\t     <PRSI? ,GRATE>>\n\t\t<TELL \"It won't fit through the grating.\" CR>)>>"
  },
  "CYCLOPS-ROOM-F": {
   "name": "CYCLOPS-ROOM-F",
   "file": "maze.zil",
   "line": 273,
   "endLine": 279,
   "source": "<ROUTINE CYCLOPS-ROOM-F (RARG)\n\t<COND (<EQUAL? .RARG ,M-LOOK>\n\t       <TELL\n\"This room has a northwest exit and a staircase leading up. \">\n\t       <D-CYCLOPS>)\n\t      (<EQUAL? .RARG ,M-ENTER>\n\t       <OR <0? ,CYCLOWRATH> <ENABLE <INT I-CYCLOPS>>>)>>"
  },
  "CYCLOPS-F": {
   "name": "CYCLOPS-F",
   "file": "maze.zil",
   "line": 289,
   "endLine": 353,
   "source": "<ROUTINE CYCLOPS-F ()\n\t<COND (<EQUAL? ,WINNER ,CYCLOPS>\n\t       <COND (,CYCLOPS-FLAG\n\t\t      <TELL \"He's fast asleep.\" CR>)\n\t\t     (<VERB? ODYSSEUS>\n\t\t      <SETG WINNER ,ADVENTURER>\n\t\t      <PERFORM ,V?ODYSSEUS>\n\t\t      <RTRUE>)\n\t\t     (T\n\t\t      <TELL \"He's not much of a conversationalist.\" CR>)>)\n\t      (<VERB? EXAMINE>\n\t       <D-CYCLOPS>\n\t       <CRLF>)\n\t      (,CYCLOPS-FLAG\n\t       <COND (<OR <VERB? ALARM KICK ATTACK BURN MUNG>\n\t\t\t  <AND <VERB? TIE-UP>\n\t\t\t       <PRSI? ,ROPE>>>\n\t\t      <TELL\n\"The cyclops yawns and stares at the thing that woke him up.\" CR>\n\t\t      <SETG CYCLOPS-FLAG <>>\n\t\t      <COND (<L? ,CYCLOWRATH 0>\n\t\t\t     <SETG CYCLOWRATH <- ,CYCLOWRATH>>)>)>)\n\t      (<AND <VERB? GIVE>\n\t\t    <PRSI? ,CYCLOPS>>\n\t       <COND (<PRSO? ,LUNCH>\n\t\t      <ENABLE <QUEUE I-CYCLOPS -1>>\n\t\t      <COND (<G? ,CYCLOWRATH -1>\n\t\t\t     <REMOVE ,LUNCH>\n\t\t\t     <SETG CYCLOWRATH\n\t\t\t\t   <COND (<L? -1 <- ,CYCLOWRATH>> -1)\n\t\t\t\t\t (T <- ,CYCLOWRATH>)>>\n\t\t\t     <TELL\n\"The cyclops says, \\\"Yum, that made me thirsty. Perhaps I could drink the\nblood of that thing.\\\" It appears that YOU are \\\"that thing.\\\"\" CR>)>)\n\t\t     (<OR <PRSO? ,WATER>\n\t\t\t  <AND <PRSO? ,BOTTLE>\n\t\t\t       <IN? ,WATER ,BOTTLE>>>\n\t\t      <COND (<L? ,CYCLOWRATH 0>\n\t\t\t     <REMOVE-CAREFULLY ,WATER>\n\t\t\t     <MOVE ,BOTTLE ,HERE>\n\t\t\t     <FSET ,BOTTLE ,OPENBIT>\n\t\t\t     <SETG CYCLOPS-FLAG T>\n\t\t\t     <TELL\n\"The cyclops empties the bottle, yawns, and falls fast asleep. (What did\nyou put in that drink, anyway?)\" CR>)\n\t\t\t    (T\n\t\t\t     <TELL\n,CYCLOPS-IS \"n't thirsty and refuses your offer.\" CR>)>)\n\t\t     (<PRSO? ,GARLIC>\n\t\t      <TELL ,CYCLOPS-IS \"n't THAT hungry.\" CR>)\n\t\t     (T\n\t\t      <TELL \"The cyclops won't eat THAT!\" CR>)>)\n\t      (<VERB? THROW ATTACK MUNG>\n\t       <ENABLE <QUEUE I-CYCLOPS -1>>\n\t       <COND (<VERB? MUNG>\n\t\t      <TELL\n\"\\\"Do you think I'm as stupid as my father was?\\\", he says, dodging.\" CR>)\n\t\t     (T\n\t\t      <COND (<VERB? THROW>\n\t\t\t     <MOVE ,PRSO ,HERE>)>\n\t\t      <TELL \"The cyclops ignores your pitiful attempt.\" CR>)>)\n\t      (<VERB? TIE>\n\t       <TELL \"You cannot tie him, though he is fit to be tied.\" CR>)\n\t      (<VERB? LISTEN>\n\t       <TELL \"You can hear his stomach rumbling.\" CR>)>>"
  },
  "D-CYCLOPS": {
   "name": "D-CYCLOPS",
   "file": "maze.zil",
   "line": 355,
   "endLine": 372,
   "source": "<ROUTINE D-CYCLOPS ()\n\t <COND (,MAGIC-FLAG\n\t\t<TELL \"The east wall has a cyclops-sized opening in it.\">)\n\t       (,CYCLOPS-FLAG\n\t\t<TELL\n\"The cyclops sleeps blissfully at the foot of the stairs.\">)\n\t       (<0? ,CYCLOWRATH>\n\t\t<TELL\n\"A hungry cyclops blocks the staircase. From the bloodstains on the walls,\nyou gather that he is not very friendly, though he likes people.\">)\n\t       (<G? ,CYCLOWRATH 0>\n\t\t<TELL\n,CYCLOPS-IS \" eyeing you closely. I don't think he likes you very much.\nHe looks extremely hungry, even for a cyclops.\">)\n\t       (<L? ,CYCLOWRATH 0>\n\t\t<TELL\n\"The cyclops, having eaten the hot peppers, appears to be gasping.\nHis enflamed tongue protrudes from his man-sized mouth.\">)>>"
  },
  "I-CYCLOPS": {
   "name": "I-CYCLOPS",
   "file": "maze.zil",
   "line": 374,
   "endLine": 392,
   "source": "<ROUTINE I-CYCLOPS ()\n\t <COND (<OR ,CYCLOPS-FLAG\n\t\t    ,DEAD>\n\t\t<RTRUE>)\n\t       (<NOT <EQUAL? ,HERE ,CYCLOPS-ROOM>>\n\t\t<DISABLE <INT I-CYCLOPS>>)\n\t       (<G? <ABS ,CYCLOWRATH> 5>\n\t\t<DISABLE <INT I-CYCLOPS>>\n\t\t<JIGS-UP\n\"The cyclops, tired of your trickery, grabs you firmly. \\\"Mmm. Just like Mom\nused to make 'em.\\\"\">)\n\t       (T\n\t\t<COND (<L? ,CYCLOWRATH 0>\n\t\t       <SETG CYCLOWRATH <- ,CYCLOWRATH 1>>)\n\t\t      (T\n\t\t       <SETG CYCLOWRATH <+ ,CYCLOWRATH 1>>)>\n\t\t<COND (<NOT ,CYCLOPS-FLAG>\n\t\t       <TELL\n,CYCLOPS-IS <NTH ,CYCLOMAD <- <ABS ,CYCLOWRATH> 1>> CR>)>)>>"
  },
  "THIEFS-LAIR-F": {
   "name": "THIEFS-LAIR-F",
   "file": "maze.zil",
   "line": 413,
   "endLine": 423,
   "source": "<ROUTINE THIEFS-LAIR-F (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-ENTER>\n\t\t     <1? <GET <INT I-THIEF> ,C-ENABLED?>>\n\t\t     <NOT ,DEAD>>\n\t\t<FCLEAR ,THIEF ,INVISIBLE>\n\t\t<COND (<NOT <IN? ,THIEF ,HERE>>\n\t\t       <MOVE ,THIEF ,HERE>\n\t\t       <ENABLE <QUEUE I-FIGHT -1>>\n\t\t       <TELL\n\"You hear a scream of anguish as the robber rushes\nto defend his hideaway.\" CR>)>)>>"
  },
  "CHALICE-F": {
   "name": "CHALICE-F",
   "file": "maze.zil",
   "line": 437,
   "endLine": 439,
   "source": "<ROUTINE CHALICE-F ()\n\t <COND (<VERB? OPEN CLOSE>\n\t\t<TELL \"Huh?\" CR>)>>"
  },
  "ZPROB": {
   "name": "ZPROB",
   "file": "misc.zil",
   "line": 122,
   "endLine": 125,
   "source": "<ROUTINE ZPROB\n\t (BASE)\n\t <COND (,LUCKY <G? .BASE <RANDOM 100>>)\n\t       (ELSE <G? .BASE <RANDOM 300>>)>>"
  },
  "PICK-ONE": {
   "name": "PICK-ONE",
   "file": "misc.zil",
   "line": 127,
   "endLine": 139,
   "source": "<ROUTINE PICK-ONE (FROB\n\t\t   \"AUX\" (L <GET .FROB 0>) (CNT <GET .FROB 1>) RND MSG RFROB)\n\t <SET L <- .L 1>>\n\t <SET FROB <REST .FROB 2>>\n\t <SET RFROB <REST .FROB <* .CNT 2>>>\n\t <SET RND <RANDOM <- .L .CNT>>>\n\t <SET MSG <GET .RFROB .RND>>\n\t <PUT .RFROB .RND <GET .RFROB 1>>\n\t <PUT .RFROB 1 .MSG>\n\t <SET CNT <+ .CNT 1>>\n\t <COND (<==? .CNT .L> <SET CNT 0>)>\n\t <PUT .FROB 0 .CNT>\n\t .MSG>"
  },
  "GO": {
   "name": "GO",
   "file": "misc.zil",
   "line": 180,
   "endLine": 193,
   "source": "<ROUTINE GO ()\n\t<ENABLE <QUEUE I-THIEF -1>>\n\t<QUEUE I-CANDLES 40>\n\t<QUEUE I-LANTERN 150>\n\t<SETG HERE ,WEST-OF-HOUSE>\n\t<SETG P-IT-OBJECT ,MAILBOX>\n\t<SETG LIT T>\n\t<SETG WINNER ,ADVENTURER>\n\t<MOVE ,WINNER ,HERE>\n\t<V-VERSION>\n\t<CRLF>\n\t<V-LOOK>\n\t<MAIN-LOOP>\n\t<AGAIN>>"
  },
  "MAIN-LOOP": {
   "name": "MAIN-LOOP",
   "file": "misc.zil",
   "line": 195,
   "endLine": 197,
   "source": "<ROUTINE MAIN-LOOP (\"AUX\" TRASH)\n\t <REPEAT ()\n\t\t <SET TRASH <MAIN-LOOP-1>>>>"
  },
  "MAIN-LOOP-1": {
   "name": "MAIN-LOOP-1",
   "file": "misc.zil",
   "line": 199,
   "endLine": 329,
   "source": "<ROUTINE MAIN-LOOP-1 (\"AUX\" ICNT OCNT NUM CNT OBJ TBL V PTBL OBJ1 TMP O I) \n     <SET CNT 0>\n     <SET OBJ <>>\n     <SET PTBL T>\n     <COND (<SETG P-WON <PARSER>>\n\t    <SET ICNT <GET ,P-PRSI ,P-MATCHLEN>>\n\t    <SET OCNT <GET ,P-PRSO ,P-MATCHLEN>>\n\t    <COND (<AND ,P-IT-OBJECT <ACCESSIBLE? ,P-IT-OBJECT>>\n\t\t   <SET TMP <>>\n\t\t   <REPEAT ()\n\t\t\t   <COND (<G? <SET CNT <+ .CNT 1>> .ICNT>\n\t\t\t\t  <RETURN>)\n\t\t\t\t (T\n\t\t\t\t  <COND (<EQUAL? <GET ,P-PRSI .CNT> ,IT>\n\t\t\t\t\t <PUT ,P-PRSI .CNT ,P-IT-OBJECT>\n\t\t\t\t\t <SET TMP T>\n\t\t\t\t\t <RETURN>)>)>>\n\t\t   <COND (<NOT .TMP>\n\t\t\t  <SET CNT 0>\n\t\t\t  <REPEAT ()\n\t\t\t   <COND (<G? <SET CNT <+ .CNT 1>> .OCNT>\n\t\t\t\t  <RETURN>)\n\t\t\t\t (T\n\t\t\t\t  <COND (<EQUAL? <GET ,P-PRSO .CNT> ,IT>\n\t\t\t\t\t <PUT ,P-PRSO .CNT ,P-IT-OBJECT>\n\t\t\t\t\t <RETURN>)>)>>)>\n\t\t   <SET CNT 0>)>\n\t    <SET NUM\n\t\t <COND (<0? .OCNT> .OCNT)\n\t\t       (<G? .OCNT 1>\n\t\t\t<SET TBL ,P-PRSO>\n\t\t\t<COND (<0? .ICNT> <SET OBJ <>>)\n\t\t\t      (T <SET OBJ <GET ,P-PRSI 1>>)>\n\t\t\t.OCNT)\n\t\t       (<G? .ICNT 1>\n\t\t\t<SET PTBL <>>\n\t\t\t<SET TBL ,P-PRSI>\n\t\t\t<SET OBJ <GET ,P-PRSO 1>>\n\t\t\t.ICNT)\n\t\t       (T 1)>>\n\t    <COND (<AND <NOT .OBJ> <1? .ICNT>> <SET OBJ <GET ,P-PRSI 1>>)>\n\t    <COND (<AND <==? ,PRSA ,V?WALK>\n\t\t\t<NOT <ZERO? ,P-WALK-DIR>>>\n\t\t   <SET V <PERFORM ,PRSA ,PRSO>>)\n\t\t  (<0? .NUM>\n\t\t   <COND (<0? <P-SONUMS ,P-SYNTAX>\n\t\t\t      ;<BAND <GETB ,P-SYNTAX ,P-SBITS> ,P-SONUMS>>\n\t\t\t  <SET V <PERFORM ,PRSA>>\n\t\t\t  <SETG PRSO <>>)\n\t\t\t (<NOT ,LIT>\n\t\t\t  <TELL ,TOO-DARK>)\n\t\t\t (T\n\t\t\t  <TELL ,REFERRING>\n\t\t\t  <SET V <>>)>)\n\t\t  (T\n\t\t   <SETG P-NOT-HERE 0>\n\t\t   <SETG P-MULT <>>\n\t\t   <COND (<G? .NUM 1> <SETG P-MULT T>)>\n\t\t   <SET TMP <>>\n\t\t   <REPEAT ()\n\t\t\t   <COND (<G? <SET CNT <+ .CNT 1>> .NUM>\n\t\t\t\t  <COND (<G? ,P-NOT-HERE 0>\n\t\t\t\t\t <TELL \"The \">\n\t\t\t\t\t <COND (<NOT <EQUAL? ,P-NOT-HERE .NUM>>\n\t\t\t\t\t\t<TELL \"other \">)>\n\t\t\t\t\t <TELL \"object\">\n\t\t\t\t\t <COND (<NOT <EQUAL? ,P-NOT-HERE 1>>\n\t\t\t\t\t\t<TELL \"s\">)>\n\t\t\t\t\t <TELL \" that you mentioned \">\n\t\t\t\t\t <COND (<NOT <EQUAL? ,P-NOT-HERE 1>>\n\t\t\t\t\t\t<TELL \"are\">)\n\t\t\t\t\t       (T <TELL \"is\">)>\n\t\t\t\t\t <TELL \"n't here.\" CR>)\n\t\t\t\t\t(<NOT .TMP>\n\t\t\t\t\t <TELL\n,THERES-NOTHING \"here you can take.\" CR>)>\n\t\t\t\t  <RETURN>)\n\t\t\t\t (T\n\t\t\t\t  <COND (.PTBL <SET OBJ1 <GET ,P-PRSO .CNT>>)\n\t\t\t\t\t(T <SET OBJ1 <GET ,P-PRSI .CNT>>)>\n\t\t\t\t  <SET O <COND (.PTBL .OBJ1) (T .OBJ)>>\n\t\t\t\t  <SET I <COND (.PTBL .OBJ) (T .OBJ1)>>\n\n;\"multiple exceptions\"\n<COND (<OR <G? .NUM 1>\n\t   <EQUAL? <GET <GET ,P-ITBL ,P-NC1> 0> ,W?ALL>>\n       <SET V <LOC ,WINNER>>\n       <COND (<EQUAL? .O ,NOT-HERE-OBJECT>\n\t      <SETG P-NOT-HERE <+ ,P-NOT-HERE 1>>\n\t      <AGAIN>)\n\t     (<AND <VERB? TAKE>\n\t\t   .I\n\t\t   <EQUAL? <GET <GET ,P-ITBL ,P-NC1> 0> ,W?ALL>\n\t\t   <NOT <IN? .O .I>>>\n\t      <AGAIN>)\n\t     (<AND <EQUAL? ,P-GETFLAGS ,P-ALL>\n\t\t   <VERB? TAKE>\n\t\t   <OR <AND <NOT <EQUAL? <LOC .O> ,WINNER ,HERE .V>>\n\t\t\t    <NOT <EQUAL? <LOC .O> .I>>\n\t\t\t    <NOT <FSET? <LOC .O> ,SURFACEBIT>>>\n\t\t       <NOT <OR <FSET? .O ,TAKEBIT>\n\t\t\t\t<FSET? .O ,TRYTAKEBIT>>>>>\n\t      <AGAIN>)\n\t     (ELSE\n\t      <COND (<EQUAL? .OBJ1 ,IT>\n\t\t     <PRINTD ,P-IT-OBJECT>)\n\t\t    (T <PRINTD .OBJ1>)>\n\t      <TELL \": \">)>)>\n;\"end multiple exceptions\"\n\t\t\t\t  <SETG PRSO .O>\n\t\t\t\t  <SETG PRSI .I>\n\t\t\t\t  <SET TMP T>\n\t\t\t\t  <SET V <PERFORM ,PRSA ,PRSO ,PRSI>>\n\t\t\t\t  <COND (<==? .V ,M-FATAL> <RETURN>)>)>>)>\n\t    <COND (<NOT <==? .V ,M-FATAL>>\n\t\t   ;<COND (<==? <LOC ,WINNER> ,PRSO>\n\t\t\t  <SETG PRSO <>>)>\n\t\t   <SET V <APPLY <GETP <LOC ,WINNER> ,P?ACTION> ,M-END>>)>\n\t    ;<COND (<VERB? ;AGAIN ;\"WALK -- why was this here?\"\n\t\t\t  SAVE RESTORE ;SCORE ;VERSION ;WAIT> T)\n\t\t  (T\n\t\t   <SETG L-PRSA ,PRSA>\n\t\t   <SETG L-PRSO ,PRSO>\n\t\t   <SETG L-PRSI ,PRSI>)>\n\t    <COND (<==? .V ,M-FATAL> <SETG P-CONT <>>)>)\n\t   (T\n\t    <SETG P-CONT <>>)>\n     <COND (,P-WON\n\t    <COND (<VERB? TELL BRIEF SUPER-BRIEF VERBOSE SAVE VERSION\n\t\t\t  QUIT RESTART SCORE SCRIPT UNSCRIPT RESTORE> T)\n\t\t  (T <SET V <CLOCKER>>)>)>>"
  },
  "QUEUE": {
   "name": "QUEUE",
   "file": "misc.zil",
   "line": 475,
   "endLine": 477,
   "source": "<ROUTINE QUEUE (RTN TICK \"AUX\" CINT)\n\t <PUT <SET CINT <INT .RTN>> ,C-TICK .TICK>\n\t .CINT>"
  },
  "INT": {
   "name": "INT",
   "file": "misc.zil",
   "line": 479,
   "endLine": 490,
   "source": "<ROUTINE INT (RTN \"OPTIONAL\" (DEMON <>) E C INT)\n\t <SET E <REST ,C-TABLE ,C-TABLELEN>>\n\t <SET C <REST ,C-TABLE ,C-INTS>>\n\t <REPEAT ()\n\t\t <COND (<==? .C .E>\n\t\t\t<SETG C-INTS <- ,C-INTS ,C-INTLEN>>\n\t\t\t<AND .DEMON <SETG C-DEMONS <- ,C-DEMONS ,C-INTLEN>>>\n\t\t\t<SET INT <REST ,C-TABLE ,C-INTS>>\n\t\t\t<PUT .INT ,C-RTN .RTN>\n\t\t\t<RETURN .INT>)\n\t\t       (<EQUAL? <GET .C ,C-RTN> .RTN> <RETURN .C>)>\n\t\t <SET C <REST .C ,C-INTLEN>>>>"
  },
  "CLOCKER": {
   "name": "CLOCKER",
   "file": "misc.zil",
   "line": 494,
   "endLine": 510,
   "source": "<ROUTINE CLOCKER (\"AUX\" C E TICK (FLG <>))\n\t <COND (,CLOCK-WAIT <SETG CLOCK-WAIT <>> <RFALSE>)>\n\t <SET C <REST ,C-TABLE <COND (,P-WON ,C-INTS) (T ,C-DEMONS)>>>\n\t <SET E <REST ,C-TABLE ,C-TABLELEN>>\n\t <REPEAT ()\n\t\t <COND (<==? .C .E>\n\t\t\t<SETG MOVES <+ ,MOVES 1>>\n\t\t\t<RETURN .FLG>)\n\t\t       (<NOT <0? <GET .C ,C-ENABLED?>>>\n\t\t\t<SET TICK <GET .C ,C-TICK>>\n\t\t\t<COND (<0? .TICK>)\n\t\t\t      (T\n\t\t\t       <PUT .C ,C-TICK <- .TICK 1>>\n\t\t\t       <COND (<AND <NOT <G? .TICK 1>>\n\t\t\t\t\t   <APPLY <GET .C ,C-RTN>>>\n\t\t\t\t      <SET FLG T>)>)>)>\n\t\t <SET C <REST .C ,C-INTLEN>>>>"
  },
  "RESERVOIR-F": {
   "name": "RESERVOIR-F",
   "file": "north-of-res.zil",
   "line": 17,
   "endLine": 26,
   "source": "<ROUTINE RESERVOIR-F (RARG)\n   \t<COND (<EQUAL? .RARG ,M-LOOK>\n\t       <COND (,LOW-TIDE\n\t\t      <TELL\n\"You are on what used to be a large lake, but which is now a large\nmud pile. There are \\\"shores\\\" to the north and south.\">)\n\t\t     (T\n\t\t      <TELL\n\"You are on the lake with beaches to the north and south and\na dam to the east.\">)>)>>"
  },
  "STREAM-PSEUDO": {
   "name": "STREAM-PSEUDO",
   "file": "north-of-res.zil",
   "line": 28,
   "endLine": 33,
   "source": "<ROUTINE STREAM-PSEUDO ()\n\t <COND (<VERB? SWIM THROUGH>\n\t\t<PERFORM ,V?BOARD ,WATER>\n\t\t<RTRUE>)\n\t       (<VERB? CROSS>\n      \t\t<V-WALK-AROUND>)>>"
  },
  "LAKE-PSEUDO": {
   "name": "LAKE-PSEUDO",
   "file": "north-of-res.zil",
   "line": 35,
   "endLine": 40,
   "source": "<ROUTINE LAKE-PSEUDO ()\n\t <COND (,LOW-TIDE\n\t\t<TELL \"The lake's gone...\" CR>)\n\t       (<VERB? CROSS THROUGH>\n\t\t<PERFORM ,V?BOARD ,WATER>\n\t\t<RTRUE>)>>"
  },
  "TRUNK-F": {
   "name": "TRUNK-F",
   "file": "north-of-res.zil",
   "line": 54,
   "endLine": 55,
   "source": "<ROUTINE TRUNK-F ()\n\t <STUPID-CONTAINER ,TRUNK \"jewels\">>"
  },
  "RESERVOIR-NORTH-F": {
   "name": "RESERVOIR-NORTH-F",
   "file": "north-of-res.zil",
   "line": 68,
   "endLine": 75,
   "source": "<ROUTINE RESERVOIR-NORTH-F (RARG)\n\t<COND (<EQUAL? .RARG ,M-LOOK>\n\t       <TELL \"You are in cavern to the north of \">\n\t       <COND (,LOW-TIDE\n\t\t      <TELL ,FORMERLY-A-LAKE>)\n\t\t     (T\n\t\t      <TELL \"a large lake\">)>\n\t       <TELL \". A slimy stairway climbs to the north.\">)>>"
  },
  "SLIDE-F": {
   "name": "SLIDE-F",
   "file": "north-of-res.zil",
   "line": 138,
   "endLine": 151,
   "source": "<ROUTINE SLIDE-F ()\n\t <COND (<OR <VERB? THROUGH CLIMB-DOWN CLIMB>\n\t\t    <AND <VERB? PUT>\n\t\t\t <EQUAL? ,PRSO ,ME>>>\n\t\t<DO-WALK <COND (<EQUAL? ,HERE ,CELLAR> ,P?WEST)\n\t\t\t       (T ,P?DOWN)>>)\n\t       (<AND <VERB? PUT>\n\t\t     <PRSI? ,SLIDE>\n\t\t     <FSET? ,PRSO ,TAKEBIT>>\n\t\t<TELL \"The \" D ,PRSO \" disappears into the slide.\" CR>\n\t\t<COND (<EQUAL? ,PRSO ,WATER>\n\t\t       <REMOVE-CAREFULLY ,WATER>)\n\t\t      (T\n\t\t       <MOVE ,PRSO ,CELLAR>)>)>>"
  },
  "BAT-ROOM-F": {
   "name": "BAT-ROOM-F",
   "file": "north-of-res.zil",
   "line": 172,
   "endLine": 180,
   "source": "<ROUTINE BAT-ROOM-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are in a small room with exits to the east and south.\">)\n\t       (<AND <EQUAL? .RARG ,M-END>\n\t\t     <NOT ,DEAD>\n\t\t     <NOT <EQUAL? <LOC ,GARLIC> ,WINNER ,HERE>>>\n\t\t<CRLF>\n\t\t<FLY-ME>)>>"
  },
  "BAT-D": {
   "name": "BAT-D",
   "file": "north-of-res.zil",
   "line": 191,
   "endLine": 196,
   "source": "<ROUTINE BAT-D (\"OPTIONAL\" FOO)\n\t <COND (<EQUAL? <LOC ,GARLIC> ,WINNER ,HERE>\n\t\t<TELL\n\"In the corner of the ceiling, a large vampire bat is holding his nose.\" CR>)\n\t       (T\n\t\t<TELL \"A large vampire bat swoops down at you!\" CR>)>>"
  },
  "BAT-F": {
   "name": "BAT-F",
   "file": "north-of-res.zil",
   "line": 198,
   "endLine": 206,
   "source": "<ROUTINE BAT-F ()\n\t <COND (<VERB? TELL>\n\t\t<FWEEP 6>\n\t\t<SETG P-CONT <>>)\n\t       (<VERB? TAKE ATTACK MUNG>\n\t\t<COND (<EQUAL? <LOC ,GARLIC> ,WINNER ,HERE>\n\t\t       <TELL ,YOU-CANT \"reach him; he's on the ceiling.\" CR>)\n\t\t      (T\n\t\t       <FLY-ME>)>)>>"
  },
  "FLY-ME": {
   "name": "FLY-ME",
   "file": "north-of-res.zil",
   "line": 208,
   "endLine": 211,
   "source": "<ROUTINE FLY-ME ()\n\t <FWEEP 4>\n\t <TELL \"The bat grabs you and lifts you away...\" CR CR>\n\t <GOTO <PICK-ONE ,BAT-DROPS>>>"
  },
  "FWEEP": {
   "name": "FWEEP",
   "file": "north-of-res.zil",
   "line": 213,
   "endLine": 219,
   "source": "<ROUTINE FWEEP (N)\n\t <REPEAT ()\n\t\t <COND (<L? <SET N <- .N 1>> 1>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<TELL \"    Fweep!\" CR>)>>\n\t <CRLF>>"
  },
  "BASKET-F": {
   "name": "BASKET-F",
   "file": "north-of-res.zil",
   "line": 265,
   "endLine": 290,
   "source": "<ROUTINE BASKET-F ()\n\t <COND (<VERB? MOVE>\n\t\t<PERFORM <COND (,BASKET-RAISED ,V?LOWER)\n\t\t\t       (T ,V?RAISE)> ,BASKET>\n\t\t<RTRUE>)\n\t       (<VERB? RAISE>\n\t\t<COND (,BASKET-RAISED\n\t\t       <TELL ,LOOK-AROUND>)\n\t\t      (T\n\t\t       <MOVE ,BASKET ,SHAFT-ROOM>\n\t\t       <SETG BASKET-RAISED T>\n\t\t       <TELL\n\"The basket is raised to the top of the shaft.\" CR>\n\t\t       <NOW-DARK?>)>)\n\t       (<VERB? LOWER>\n\t\t<COND (<NOT ,BASKET-RAISED>\n\t\t       <TELL ,LOOK-AROUND>)\n\t\t      (T\n\t\t       <MOVE ,BASKET ,DRAFTY-ROOM>\n\t\t       <SETG BASKET-RAISED <>>\n\t\t       <TELL\n\"The basket is lowered to the bottom of the shaft.\" CR>\n\t\t       <NOW-DARK?>)>)\n\t       (<AND <VERB? TAKE>\n\t\t     <EQUAL? ,PRSO ,BASKET>>\n\t\t<FASTENED ,BASKET \"chain\">)>>"
  },
  "CHAIN-PSEUDO": {
   "name": "CHAIN-PSEUDO",
   "file": "north-of-res.zil",
   "line": 292,
   "endLine": 300,
   "source": "<ROUTINE CHAIN-PSEUDO ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL \"The chain is secure.\" CR>)\n\t       (<VERB? RAISE LOWER MOVE>\n\t\t<PERFORM ,PRSA ,BASKET>\n\t\t<RTRUE>)\n\t       (<AND <VERB? EXAMINE>\n\t\t     <IN? ,BASKET ,HERE>>\n\t\t<TELL <GETP ,BASKET ,P?LDESC> CR>)>>"
  },
  "GAS-ROOM-F": {
   "name": "GAS-ROOM-F",
   "file": "north-of-res.zil",
   "line": 314,
   "endLine": 326,
   "source": "<ROUTINE GAS-ROOM-F (RARG)\n         <COND (<EQUAL? .RARG ,M-END>\n\t\t<COND (<OR <AND <HELD? ,CANDLES>\n\t\t\t\t<FSET? ,CANDLES ,ONBIT>>\n\t\t\t   <AND <HELD? ,TORCH>\n\t\t\t\t<FSET? ,TORCH ,ONBIT>>\n\t\t\t   <AND <HELD? ,MATCH>\n\t\t\t\t<FSET? ,MATCH ,ONBIT>>>\n\t\t       <JIGS-UP\n\"Oh dear. That smell was coal gas. I would have thought twice about\ncarrying flaming objects in here.|\n|\nBooooooom!!!\">)>)>>"
  },
  "GAS-PSEUDO": {
   "name": "GAS-PSEUDO",
   "file": "north-of-res.zil",
   "line": 328,
   "endLine": 332,
   "source": "<ROUTINE GAS-PSEUDO ()\n\t <COND (<VERB? BREATHE>\t;\"REALLY BLOW\"\n\t\t<TELL \"There is too much gas to blow away.\" CR>)\n\t       (<VERB? SMELL>\n\t\t<TELL \"It smells like coal gas in here.\" CR>)>>"
  },
  "LADDER-PSEUDO": {
   "name": "LADDER-PSEUDO",
   "file": "north-of-res.zil",
   "line": 392,
   "endLine": 394,
   "source": "<ROUTINE LADDER-PSEUDO ()\n\t <COND (<VERB? CLIMB>\n\t\t<DO-WALK ,P?UP>)>>"
  },
  "NO-OBJECT-ROOM-F": {
   "name": "NO-OBJECT-ROOM-F",
   "file": "north-of-res.zil",
   "line": 398,
   "endLine": 413,
   "source": "<ROUTINE NO-OBJECT-ROOM-F (RARG \"AUX\" F)\n\t <COND (<EQUAL? .RARG ,M-BEG>\n\t\t<SET F <FIRST? ,WINNER>>\n\t\t<SETG EMPTY-HANDED T>\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT .F> <RETURN>)\n\t\t\t      (<G? <WEIGHT .F> 4>\n\t\t\t       <SETG EMPTY-HANDED <>>\n\t\t\t       <RETURN>)>\n\t\t\t<SET F <NEXT? .F>>>\n\t\t<COND (<AND <EQUAL? ,HERE ,DRAFTY-ROOM>\n\t\t\t    ,LIT\n\t\t\t    <NOT ,DRAFTY-ROOM-SCORE>>\n\t\t       <SETG DRAFTY-ROOM-SCORE T>\n\t\t       <SETG SCORE <+ ,SCORE 10>>)>\n\t\t<RFALSE>)>>"
  },
  "MACHINE-ROOM-F": {
   "name": "MACHINE-ROOM-F",
   "file": "north-of-res.zil",
   "line": 441,
   "endLine": 451,
   "source": "<ROUTINE MACHINE-ROOM-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a chilly room whose sole exit is to the north. In one corner is a\nmachine, reminiscent of a clothes dryer, with a switch labelled \\\"START\\\".\nThe switch does not appear to be manipulable by any human hand (unless the\nfingers are about 1/16 by 1/4 inch). The machine has a large lid, which is \">\n\t\t<COND (<FSET? ,MACHINE ,OPENBIT>\n\t\t       <TELL \"open.\">)\n\t\t      (T\n\t\t       <TELL \"closed.\">)>)>>"
  },
  "MACHINE-F": {
   "name": "MACHINE-F",
   "file": "north-of-res.zil",
   "line": 461,
   "endLine": 467,
   "source": "<ROUTINE MACHINE-F ()\n\t <COND (<VERB? LAMP-ON>\n\t\t<COND (<NOT ,PRSI>\n\t\t       <TELL ,YOU-CANT \"do it with your bare hands.\" CR>)\n\t\t      (T\n\t\t       <PERFORM ,V?TURN ,MACHINE-SWITCH ,PRSI>\n\t\t       <RTRUE>)>)>>"
  },
  "MACHINE-SWITCH-F": {
   "name": "MACHINE-SWITCH-F",
   "file": "north-of-res.zil",
   "line": 476,
   "endLine": 492,
   "source": "<ROUTINE MACHINE-SWITCH-F (\"AUX\" SLAG?)\n\t <COND (<VERB? TURN>\n\t\t<COND (<EQUAL? ,PRSI ,SCREWDRIVER>\n\t\t       <COND (<FSET? ,MACHINE ,OPENBIT>\n\t\t\t      <TELL ,NOTHING-HAPPENS>)\n\t\t\t     (T\n\t\t\t      <SET SLAG? <FIRST? ,MACHINE>>\n\t\t\t      <ROB ,MACHINE ,MACHINE-SWITCH <>>\n\t\t\t      <COND (<IN? ,COAL ,MACHINE-SWITCH>\n\t\t\t\t     <MOVE ,DIAMOND ,MACHINE>)\n\t\t\t\t    (.SLAG?\n\t\t\t\t     <MOVE ,SLAG ,MACHINE>)>\n\t\t\t      <TELL\n\"The machine produces a dazzling display of colored lights and\nbizarre noises. A moment later, the excitement abates.\" CR>)>)\n\t\t      (T\n\t\t       <TELL \"It seems that a \" D ,PRSI \" won't do.\" CR>)>)>>"
  },
  "SLAG-F": {
   "name": "SLAG-F",
   "file": "north-of-res.zil",
   "line": 502,
   "endLine": 504,
   "source": "<ROUTINE SLAG-F ()\n\t <REMOVE ,SLAG>\n\t <TELL \"The insubstantial slag crumbles at your touch.\" CR>>"
  },
  "PARSER": {
   "name": "PARSER",
   "file": "parser.zil",
   "line": 107,
   "endLine": 379,
   "source": "<ROUTINE PARSER (\"AUX\" (PTR ,P-LEXSTART) WRD (VAL 0) (VERB <>) (OF-FLAG <>)\n\t\t       OWINNER OMERGED LEN (DIR <>) (NW 0) (LW 0) (CNT -1))\n\t<REPEAT ()\n\t\t<COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN> <RETURN>)\n\t\t      (T\n\t\t       <COND (<NOT ,P-OFLAG>\n\t\t\t      <PUT ,P-OTBL .CNT <GET ,P-ITBL .CNT>>)>\n\t\t       <PUT ,P-ITBL .CNT 0>)>>\n\t<SET OWINNER ,WINNER>\n\t<SET OMERGED ,P-MERGED>\n\t<SETG P-ADVERB <>>\n\t<SETG P-MERGED <>>\n\t<SETG P-END-ON-PREP <>>\n\t<PUT ,P-PRSO ,P-MATCHLEN 0>\n\t<PUT ,P-PRSI ,P-MATCHLEN 0>\n\t<PUT ,P-BUTS ,P-MATCHLEN 0>\n\t<COND (<AND <NOT ,QUOTE-FLAG> <N==? ,WINNER ,ADVENTURER>>\n\t       <SETG WINNER ,ADVENTURER>\n\t       <SETG HERE <META-LOC ,ADVENTURER>>\n\t       <SETG LIT <LIT? ,HERE>>)>\n\t<COND (,RESERVE-PTR\n\t       <SET PTR ,RESERVE-PTR>\n\t       <STUFF ,RESERVE-LEXV ,P-LEXV>\n\t       <COND (<AND <G? ,VERBOSITY 0>\n\t\t\t   <EQUAL? ,ADVENTURER ,WINNER>>\n\t\t      <CRLF>)>\n\t       <SETG RESERVE-PTR <>>\n\t       <SETG P-CONT <>>)\n\t      (,P-CONT\n\t       <SET PTR ,P-CONT>\n\t       <COND (<AND <G? ,VERBOSITY 0>\n\t\t\t   <EQUAL? ,ADVENTURER ,WINNER>\n\t\t\t   <NOT <VERB? SAY>>>\n\t\t      <CRLF>)>\n\t       <SETG P-CONT <>>)\n\t      (T\n\t       <SETG WINNER ,ADVENTURER>\n\t       <SETG QUOTE-FLAG <>>\n\t       <COND (<NOT <IN? ,ADVENTURER ,INFLATED-BOAT>>\n\t\t      <SETG HERE <LOC ,WINNER>>)>\n\t       <SETG LIT <LIT? ,HERE>>\n\t       <COND (<G? ,VERBOSITY 0>\n\t\t      <CRLF>)>\n\t       <TELL \">\">\n\t       <READ ,P-INBUF ,P-LEXV>)>\n\t<SETG P-LEN <GETB ,P-LEXV ,P-LEXWORDS>>\n\t<COND (<ZERO? ,P-LEN>\n\t       <TELL ,BEG-PARDON>\n\t       <RFALSE>)>\n\t<COND (<EQUAL? <SET WRD <GET ,P-LEXV .PTR>> ,W?OOPS>\n\t       <COND (<EQUAL? <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>\n\t\t\t      ,W?PERIOD ,W?COMMA>\n\t\t      <SET PTR <+ .PTR ,P-LEXELEN>>\n\t\t      <SETG P-LEN <- ,P-LEN 1>>)>\n\t       <COND (<NOT <G? ,P-LEN 1>>\n\t\t      <TELL \"[I can't help your clumsiness.]\" CR>\n\t\t      <RFALSE>)\n\t\t     (<GET ,OOPS-TABLE ,O-PTR>\n\t\t      <COND (<AND <G? ,P-LEN 2>\n\t\t\t\t  <EQUAL? <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>\n\t\t\t\t\t  ,W?QUOTE>>\n\t\t\t     <TELL\n\"[You can't correct mistakes in quoted text.]\" CR>\n\t\t\t     <RFALSE>)\n\t\t\t    (<G? ,P-LEN 2>\n\t\t\t     <TELL\n\"[Warning: only the first word after OOPS is used.]\" CR>)>\n\t\t      <PUT ,AGAIN-LEXV <GET ,OOPS-TABLE ,O-PTR>\n\t\t\t   <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>>\n\t\t      <SETG WINNER .OWINNER> ;\"maybe fix oops vs. chars.?\"\n\t\t      <INBUF-ADD <GETB ,P-LEXV <+ <* .PTR ,P-LEXELEN> 6>>\n\t\t\t\t <GETB ,P-LEXV <+ <* .PTR ,P-LEXELEN> 7>>\n\t\t\t\t <+ <* <GET ,OOPS-TABLE ,O-PTR> ,P-LEXELEN> 3>>\n\t\t      <STUFF ,AGAIN-LEXV ,P-LEXV>\n\t\t      <SETG P-LEN <GETB ,P-LEXV ,P-LEXWORDS>>\n\t\t      <SET PTR <GET ,OOPS-TABLE ,O-START>>\n\t\t      <INBUF-STUFF ,OOPS-INBUF ,P-INBUF>)\n\t\t     (T\n\t\t      <PUT ,OOPS-TABLE ,O-END <>>\n\t\t      <TELL \"[There was no word to replace!]\" CR>\n\t\t      <RFALSE>)>)\n\t      (T\n\t       <COND (<NOT <EQUAL? .WRD ,W?AGAIN ,W?G>>\n\t\t      <SETG P-NUMBER 0>)>\n\t       <PUT ,OOPS-TABLE ,O-END <>>)>\n\t<COND (<EQUAL? <GET ,P-LEXV .PTR> ,W?AGAIN ,W?G>\n\t       <COND (<ZERO? <GETB ,OOPS-INBUF 1>>\n\t\t      <TELL ,BEG-PARDON>\n\t\t      <RFALSE>)\n\t\t     (,P-OFLAG\n\t\t      <TELL \"[It's difficult to repeat fragments.]\" CR>\n\t\t      <RFALSE>)\n\t\t     (<NOT ,P-WON>\n\t\t      <TELL \"[That would just repeat a mistake.]\" CR>\n\t\t      <RFALSE>)\n\t\t     (<G? ,P-LEN 1>\n\t\t      <COND (<OR <EQUAL? <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>\n\t\t\t\t\t,W?PERIOD ,W?COMMA ,W?THEN>\n\t\t\t\t <EQUAL? <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>\n\t\t\t\t\t,W?AND>>\n\t\t\t     <SET PTR <+ .PTR <* 2 ,P-LEXELEN>>>\n\t\t\t     <PUTB ,P-LEXV ,P-LEXWORDS\n\t\t\t\t   <- <GETB ,P-LEXV ,P-LEXWORDS> 2>>)\n\t\t\t    (T\n\t\t\t     <TELL \"[I don't understand that sentence.]\" CR>\n\t\t\t     <RFALSE>)>)\n\t\t     (T\n\t\t      <SET PTR <+ .PTR ,P-LEXELEN>>\n\t\t      <PUTB ,P-LEXV ,P-LEXWORDS\n\t\t\t    <- <GETB ,P-LEXV ,P-LEXWORDS> 1>>)>\n\t       <COND (<G? <GETB ,P-LEXV ,P-LEXWORDS> 0>\n\t\t      <STUFF ,P-LEXV ,RESERVE-LEXV>\n\t\t      <SETG RESERVE-PTR .PTR>)\n\t\t     (T\n\t\t      <SETG RESERVE-PTR <>>)>\n\t       ;<SETG P-LEN <GETB ,AGAIN-LEXV ,P-LEXWORDS>>\n\t       <SETG WINNER .OWINNER>\n\t       <SETG P-MERGED .OMERGED>\n\t       <INBUF-STUFF ,OOPS-INBUF ,P-INBUF>\n\t       <STUFF ,AGAIN-LEXV ,P-LEXV>\n\t       <SET CNT -1>\n\t       <SET DIR ,AGAIN-DIR>\n\t       <REPEAT ()\n\t\t<COND (<IGRTR? CNT ,P-ITBLLEN> <RETURN>)\n\t\t      (T <PUT ,P-ITBL .CNT <GET ,P-OTBL .CNT>>)>>)\n\t      (T\n\t       <STUFF ,P-LEXV ,AGAIN-LEXV>\n\t       <INBUF-STUFF ,P-INBUF ,OOPS-INBUF>\n\t       <PUT ,OOPS-TABLE ,O-START .PTR>\n\t       <PUT ,OOPS-TABLE ,O-LENGTH <* 4 ,P-LEN>>\n\t       <SET LEN\n\t\t    <* 2 <+ .PTR <* ,P-LEXELEN <GETB ,P-LEXV ,P-LEXWORDS>>>>>\n\t       <PUT ,OOPS-TABLE ,O-END <+ <GETB ,P-LEXV <- .LEN 1>>\n\t\t\t\t\t  <GETB ,P-LEXV <- .LEN 2>>>>\n\t       <SETG RESERVE-PTR <>>\n\t       <SET LEN ,P-LEN>\n\t       <SETG P-DIR <>>\n\t       <SETG P-NCN 0>\n\t       <SETG P-GETFLAGS 0>\n\t       <REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <SETG QUOTE-FLAG <>>\n\t\t       <RETURN>)\n\t\t      (<OR <SET WRD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WRD <NUMBER? .PTR>>>\n\t\t       <COND (<ZERO? ,P-LEN> <SET NW 0>)\n\t\t\t     (T <SET NW <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>>)>\n\t\t       <COND (<AND <EQUAL? .WRD ,W?TO>\n\t\t\t\t   <EQUAL? .VERB ,ACT?TELL ;,ACT?ASK>>\n\t\t\t      <SET WRD ,W?QUOTE>)\n\t\t\t     (<AND <EQUAL? .WRD ,W?THEN>\n\t\t\t\t   <G? ,P-LEN 0>\n\t\t\t\t   <NOT .VERB>\n\t\t\t\t   <NOT ,QUOTE-FLAG> ;\"Last NOT added 7/3\">\n\t\t\t      <COND (<EQUAL? .LW 0 ,W?PERIOD>\n\t\t\t\t     <SET WRD ,W?THE>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <PUT ,P-ITBL ,P-VERB ,ACT?TELL>\n\t\t\t\t     <PUT ,P-ITBL ,P-VERBN 0>\n\t\t\t\t     <SET WRD ,W?QUOTE>)>)>\n\t\t       <COND (<EQUAL? .WRD ,W?THEN ,W?PERIOD ,W?QUOTE>\n\t\t\t      <COND (<EQUAL? .WRD ,W?QUOTE>\n\t\t\t\t     <COND (,QUOTE-FLAG\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>)\n\t\t\t\t\t   (T <SETG QUOTE-FLAG T>)>)>\n\t\t\t      <OR <ZERO? ,P-LEN>\n\t\t\t\t  <SETG P-CONT <+ .PTR ,P-LEXELEN>>>\n\t\t\t      <PUTB ,P-LEXV ,P-LEXWORDS ,P-LEN>\n\t\t\t      <RETURN>)\n\t\t\t     (<AND <SET VAL\n\t\t\t\t\t<WT? .WRD\n\t\t\t\t\t     ,PS?DIRECTION\n\t\t\t\t\t     ,P1?DIRECTION>>\n\t\t\t\t   <EQUAL? .VERB <> ,ACT?WALK>\n\t\t\t\t   <OR <EQUAL? .LEN 1>\n\t\t\t\t       <AND <EQUAL? .LEN 2>\n\t\t\t\t\t    <EQUAL? .VERB ,ACT?WALK>>\n\t\t\t\t       <AND <EQUAL? .NW\n\t\t\t\t\t            ,W?THEN\n\t\t\t\t\t            ,W?PERIOD\n\t\t\t\t\t            ,W?QUOTE>\n\t\t\t\t\t    <NOT <L? .LEN 2>>>\n\t\t\t\t       <AND ,QUOTE-FLAG\n\t\t\t\t\t    <EQUAL? .LEN 2>\n\t\t\t\t\t    <EQUAL? .NW ,W?QUOTE>>\n\t\t\t\t       <AND <G? .LEN 2>\n\t\t\t\t\t    <EQUAL? .NW ,W?COMMA ,W?AND>>>>\n\t\t\t      <SET DIR .VAL>\n\t\t\t      <COND (<EQUAL? .NW ,W?COMMA ,W?AND>\n\t\t\t\t     <PUT ,P-LEXV\n\t\t\t\t\t  <+ .PTR ,P-LEXELEN>\n\t\t\t\t\t  ,W?THEN>)>\n\t\t\t      <COND (<NOT <G? .LEN 2>>\n\t\t\t\t     <SETG QUOTE-FLAG <>>\n\t\t\t\t     <RETURN>)>)\n\t\t\t     (<AND <SET VAL <WT? .WRD ,PS?VERB ,P1?VERB>>\n\t\t\t\t   <NOT .VERB>>\n\t\t\t      <SET VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERBN ,P-VTBL>\n\t\t\t      <PUT ,P-VTBL 0 .WRD>\n\t\t\t      <PUTB ,P-VTBL 2 <GETB ,P-LEXV\n\t\t\t\t\t\t    <SET CNT\n\t\t\t\t\t\t\t <+ <* .PTR 2> 2>>>>\n\t\t\t      <PUTB ,P-VTBL 3 <GETB ,P-LEXV <+ .CNT 1>>>)\n\t\t\t     (<OR <SET VAL <WT? .WRD ,PS?PREPOSITION 0>>\n\t\t\t\t  <EQUAL? .WRD ,W?ALL ,W?ONE ;,W?BOTH>\n\t\t\t\t  <WT? .WRD ,PS?ADJECTIVE>\n\t\t\t\t  <WT? .WRD ,PS?OBJECT>>\n\t\t\t      <COND (<AND <G? ,P-LEN 1>\n\t\t\t\t\t  <EQUAL? .NW ,W?OF>\n\t\t\t\t\t  <ZERO? .VAL>\n\t\t\t\t\t  <NOT <EQUAL? .WRD\n\t\t\t\t\t\t       ,W?ALL ,W?ONE ,W?A>>\n\t\t\t\t\t  ;<NOT <EQUAL? .WRD ,W?BOTH>>>\n\t\t\t\t     <SET OF-FLAG T>)\n\t\t\t\t    (<AND <NOT <ZERO? .VAL>>\n\t\t\t\t          <OR <ZERO? ,P-LEN>\n\t\t\t\t\t      <EQUAL? .NW ,W?THEN ,W?PERIOD>>>\n\t\t\t\t     <SETG P-END-ON-PREP T>\n\t\t\t\t     <COND (<L? ,P-NCN 2>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1 .VAL>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1N .WRD>)>)\n\t\t\t\t    (<EQUAL? ,P-NCN 2>\n\t\t\t\t     <TELL\n\"[There were too many nouns in that sentence.]\" CR>\n\t\t\t\t     <RFALSE>)\n\t\t\t\t    (T\n\t\t\t\t     <SETG P-NCN <+ ,P-NCN 1>>\n\t\t\t\t     <SETG P-ACT .VERB>\n\t\t\t\t     <OR <SET PTR <CLAUSE .PTR .VAL .WRD>>\n\t\t\t\t\t <RFALSE>>\n\t\t\t\t     <COND (<L? .PTR 0>\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>\n\t\t\t\t\t    <RETURN>)>)>)\n\t\t\t     (<EQUAL? .WRD ,W?OF>\n\t\t\t      <COND (<OR <NOT .OF-FLAG>\n\t\t\t\t\t <EQUAL? .NW ,W?PERIOD ,W?THEN>>\n\t\t\t\t     <CANT-USE .PTR>\n\t\t\t\t     <RFALSE>)\n\t\t\t\t    (T\n\t\t\t\t     <SET OF-FLAG <>>)>)\n\t\t\t     (<WT? .WRD ,PS?BUZZ-WORD>)\n\t\t\t     (<AND <EQUAL? .VERB ,ACT?TELL>\n\t\t\t\t   <WT? .WRD ,PS?VERB ,P1?VERB>\n\t\t\t\t   <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t\t      <TELL\n\"[Read the manual about talking to characters.]\" CR>\n\t\t\t      <RFALSE>)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T\n\t\t       <UNKNOWN-WORD .PTR>\n\t\t       <RFALSE>)>\n\t\t<SET LW .WRD>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>)>\n\t<PUT ,OOPS-TABLE ,O-PTR <>>\n\t<COND (.DIR\n\t       <SETG PRSA ,V?WALK>\n\t       <SETG PRSO .DIR>\n\t       <SETG P-OFLAG <>>\n\t       <SETG P-WALK-DIR .DIR>\n\t       <SETG AGAIN-DIR .DIR>)\n\t      (ELSE\n\t       <COND (,P-OFLAG <ORPHAN-MERGE>)>\n\t       <SETG P-WALK-DIR <>>\n\t       <SETG AGAIN-DIR <>>\n\t       <COND (<AND <SYNTAX-CHECK>\n\t\t\t   <SNARF-OBJECTS>\n\t\t\t   <MANY-CHECK>\n\t\t\t   <TAKE-CHECK>>\n\t\t      T)>)>>"
  },
  "STUFF": {
   "name": "STUFF",
   "file": "parser.zil",
   "line": 386,
   "endLine": 398,
   "source": "<ROUTINE STUFF (SRC DEST \"OPTIONAL\" (MAX 29) \"AUX\" (PTR ,P-LEXSTART) (CTR 1)\n\t\t\t\t\t\t   BPTR)\n\t <PUTB .DEST 0 <GETB .SRC 0>>\n\t <PUTB .DEST 1 <GETB .SRC 1>>\n\t <REPEAT ()\n\t  <PUT .DEST .PTR <GET .SRC .PTR>>\n\t  <SET BPTR <+ <* .PTR 2> 2>>\n\t  <PUTB .DEST .BPTR <GETB .SRC .BPTR>>\n\t  <SET BPTR <+ <* .PTR 2> 3>>\n\t  <PUTB .DEST .BPTR <GETB .SRC .BPTR>>\n\t  <SET PTR <+ .PTR ,P-LEXELEN>>\n\t  <COND (<IGRTR? CTR .MAX>\n\t\t <RETURN>)>>>"
  },
  "INBUF-STUFF": {
   "name": "INBUF-STUFF",
   "file": "parser.zil",
   "line": 401,
   "endLine": 405,
   "source": "<ROUTINE INBUF-STUFF (SRC DEST \"AUX\" CNT)\n\t <SET CNT <- <GETB .SRC 0> 1>>\n\t <REPEAT ()\n\t\t <PUTB .DEST .CNT <GETB .SRC .CNT>>\n\t\t <COND (<DLESS? CNT 0> <RETURN>)>>>"
  },
  "INBUF-ADD": {
   "name": "INBUF-ADD",
   "file": "parser.zil",
   "line": 409,
   "endLine": 422,
   "source": "<ROUTINE INBUF-ADD (LEN BEG SLOT \"AUX\" DBEG (CTR 0) TMP)\n\t <COND (<SET TMP <GET ,OOPS-TABLE ,O-END>>\n\t\t<SET DBEG .TMP>)\n\t       (T\n\t\t<SET DBEG <+ <GETB ,AGAIN-LEXV\n\t\t\t\t   <SET TMP <GET ,OOPS-TABLE ,O-LENGTH>>>\n\t\t\t     <GETB ,AGAIN-LEXV <+ .TMP 1>>>>)>\n\t <PUT ,OOPS-TABLE ,O-END <+ .DBEG .LEN>>\n\t <REPEAT ()\n\t  <PUTB ,OOPS-INBUF <+ .DBEG .CTR> <GETB ,P-INBUF <+ .BEG .CTR>>>\n\t  <SET CTR <+ .CTR 1>>\n\t  <COND (<EQUAL? .CTR .LEN> <RETURN>)>>\n\t <PUTB ,AGAIN-LEXV .SLOT .DBEG>\n\t <PUTB ,AGAIN-LEXV <- .SLOT 1> .LEN>>"
  },
  "WT?": {
   "name": "WT?",
   "file": "parser.zil",
   "line": 429,
   "endLine": 435,
   "source": "<ROUTINE WT? (PTR BIT \"OPTIONAL\" (B1 5) \"AUX\" (OFFS ,P-P1OFF) TYP)\n\t<COND (<BTST <SET TYP <GETB .PTR ,P-PSOFF>> .BIT>\n\t       <COND (<G? .B1 4> <RTRUE>)\n\t\t     (T\n\t\t      <SET TYP <BAND .TYP ,P-P1BITS>>\n\t\t      <COND (<NOT <EQUAL? .TYP .B1>> <SET OFFS <+ .OFFS 1>>)>\n\t\t      <GETB .PTR .OFFS>)>)>>"
  },
  "CLAUSE": {
   "name": "CLAUSE",
   "file": "parser.zil",
   "line": 439,
   "endLine": 509,
   "source": "<ROUTINE CLAUSE (PTR VAL WRD \"AUX\" OFF NUM (ANDFLG <>) (FIRST?? T) NW (LW 0))\n\t<SET OFF <* <- ,P-NCN 1> 2>>\n\t<COND (<NOT <EQUAL? .VAL 0>>\n\t       <PUT ,P-ITBL <SET NUM <+ ,P-PREP1 .OFF>> .VAL>\n\t       <PUT ,P-ITBL <+ .NUM 1> .WRD>\n\t       <SET PTR <+ .PTR ,P-LEXELEN>>)\n\t      (T <SETG P-LEN <+ ,P-LEN 1>>)>\n\t<COND (<ZERO? ,P-LEN> <SETG P-NCN <- ,P-NCN 1>> <RETURN -1>)>\n\t<PUT ,P-ITBL <SET NUM <+ ,P-NC1 .OFF>> <REST ,P-LEXV <* .PTR 2>>>\n\t<COND (<EQUAL? <GET ,P-LEXV .PTR> ,W?THE ,W?A ,W?AN>\n\t       <PUT ,P-ITBL .NUM <REST <GET ,P-ITBL .NUM> 4>>)>\n\t<REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <PUT ,P-ITBL <+ .NUM 1> <REST ,P-LEXV <* .PTR 2>>>\n\t\t       <RETURN -1>)>\n\t\t<COND (<OR <SET WRD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WRD <NUMBER? .PTR>>>\n\t\t       <COND (<ZERO? ,P-LEN> <SET NW 0>)\n\t\t\t     (T <SET NW <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>>)>\n\t\t       <COND (<EQUAL? .WRD ,W?AND ,W?COMMA> <SET ANDFLG T>)\n\t\t\t     (<EQUAL? .WRD ,W?ALL ,W?ONE ;,W?BOTH>\n\t\t\t      <COND (<EQUAL? .NW ,W?OF>\n\t\t\t\t     <SETG P-LEN <- ,P-LEN 1>>\n\t\t\t\t     <SET PTR <+ .PTR ,P-LEXELEN>>)>)\n\t\t\t     (<OR <EQUAL? .WRD ,W?THEN ,W?PERIOD>\n\t\t\t\t  <AND <WT? .WRD ,PS?PREPOSITION>\n\t\t\t\t       <GET ,P-ITBL ,P-VERB>\n\t\t\t\t          ;\"ADDED 4/27 FOR TURTLE,UP\"\n\t\t\t\t       <NOT .FIRST??>>>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 1>>\n\t\t\t      <PUT ,P-ITBL\n\t\t\t\t   <+ .NUM 1>\n\t\t\t\t   <REST ,P-LEXV <* .PTR 2>>>\n\t\t\t      <RETURN <- .PTR ,P-LEXELEN>>)\n\t\t\t     (<WT? .WRD ,PS?OBJECT>\n\t\t\t      <COND (<AND <G? ,P-LEN 0>\n\t\t\t\t\t  <EQUAL? .NW ,W?OF>\n\t\t\t\t\t  <NOT <EQUAL? .WRD ,W?ALL ,W?ONE>>>\n\t\t\t\t     T)\n\t\t\t\t    (<AND <WT? .WRD\n\t\t\t\t\t       ,PS?ADJECTIVE\n\t\t\t\t\t       ,P1?ADJECTIVE>\n\t\t\t\t\t  <NOT <EQUAL? .NW 0>>\n\t\t\t\t\t  <WT? .NW ,PS?OBJECT>>)\n\t\t\t\t    (<AND <NOT .ANDFLG>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?BUT ,W?EXCEPT>>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t\t     <PUT ,P-ITBL\n\t\t\t\t\t  <+ .NUM 1>\n\t\t\t\t\t  <REST ,P-LEXV <* <+ .PTR 2> 2>>>\n\t\t\t\t     <RETURN .PTR>)\n\t\t\t\t    (T <SET ANDFLG <>>)>)\n\t\t\t     (<AND <OR ,P-MERGED\n\t\t\t\t       ,P-OFLAG\n\t\t\t\t       <NOT <EQUAL? <GET ,P-ITBL ,P-VERB> 0>>>\n\t\t\t\t   <OR <WT? .WRD ,PS?ADJECTIVE>\n\t\t\t\t       <WT? .WRD ,PS?BUZZ-WORD>>>)\n\t\t\t     (<AND .ANDFLG\n\t\t\t\t   <OR <WT? .WRD ,PS?DIRECTION>\n\t\t\t\t       <WT? .WRD ,PS?VERB>>>\n\t\t\t      <SET PTR <- .PTR 4>>\n\t\t\t      <PUT ,P-LEXV <+ .PTR 2> ,W?THEN>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 2>>)\n\t\t\t     (<WT? .WRD ,PS?PREPOSITION> T)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T <UNKNOWN-WORD .PTR> <RFALSE>)>\n\t\t<SET LW .WRD>\n\t\t<SET FIRST?? <>>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>>"
  },
  "NUMBER?": {
   "name": "NUMBER?",
   "file": "parser.zil",
   "line": 511,
   "endLine": 533,
   "source": "<ROUTINE NUMBER? (PTR \"AUX\" CNT BPTR CHR (SUM 0) (TIM <>))\n\t <SET CNT <GETB <REST ,P-LEXV <* .PTR 2>> 2>>\n\t <SET BPTR <GETB <REST ,P-LEXV <* .PTR 2>> 3>>\n\t <REPEAT ()\n\t\t <COND (<L? <SET CNT <- .CNT 1>> 0> <RETURN>)\n\t\t       (T\n\t\t\t<SET CHR <GETB ,P-INBUF .BPTR>>\n\t\t\t<COND (<EQUAL? .CHR 58>\n\t\t\t       <SET TIM .SUM>\n\t\t\t       <SET SUM 0>)\n\t\t\t      (<G? .SUM 10000> <RFALSE>)\n\t\t\t      (<AND <L? .CHR 58> <G? .CHR 47>>\n\t\t\t       <SET SUM <+ <* .SUM 10> <- .CHR 48>>>)\n\t\t\t      (T <RFALSE>)>\n\t\t\t<SET BPTR <+ .BPTR 1>>)>>\n\t <PUT ,P-LEXV .PTR ,W?INTNUM>\n\t <COND (<G? .SUM 1000> <RFALSE>)\n\t       (.TIM\n\t\t<COND (<L? .TIM 8> <SET TIM <+ .TIM 12>>)\n\t\t      (<G? .TIM 23> <RFALSE>)>\n\t\t<SET SUM <+ .SUM <* .TIM 60>>>)>\n\t <SETG P-NUMBER .SUM>\n\t ,W?INTNUM>"
  },
  "ORPHAN-MERGE": {
   "name": "ORPHAN-MERGE",
   "file": "parser.zil",
   "line": 539,
   "endLine": 626,
   "source": "<ROUTINE ORPHAN-MERGE (\"AUX\" (CNT -1) TEMP VERB BEG END (ADJ <>) WRD)\n   <SETG P-OFLAG <>>\n   <COND (<OR <EQUAL? <WT? <SET WRD <GET <GET ,P-ITBL ,P-VERBN> 0>>\n\t\t\t   ,PS?VERB ,P1?VERB>\n\t\t      <GET ,P-OTBL ,P-VERB>>\n\t      <NOT <ZERO? <WT? .WRD ,PS?ADJECTIVE>>>>\n\t  <SET ADJ T>)\n\t (<AND <NOT <ZERO? <WT? .WRD ,PS?OBJECT ,P1?OBJECT>>>\n\t       <EQUAL? ,P-NCN 0>>\n\t  <PUT ,P-ITBL ,P-VERB 0>\n\t  <PUT ,P-ITBL ,P-VERBN 0>\n\t  <PUT ,P-ITBL ,P-NC1 <REST ,P-LEXV 2>>\n\t  <PUT ,P-ITBL ,P-NC1L <REST ,P-LEXV 6>>\n\t  <SETG P-NCN 1>)>\n   <COND (<AND <NOT <ZERO? <SET VERB <GET ,P-ITBL ,P-VERB>>>>\n\t       <NOT .ADJ>\n\t       <NOT <EQUAL? .VERB <GET ,P-OTBL ,P-VERB>>>>\n\t  <RFALSE>)\n\t (<EQUAL? ,P-NCN 2> <RFALSE>)\n\t (<EQUAL? <GET ,P-OTBL ,P-NC1> 1>\n\t  <COND (<OR <EQUAL? <SET TEMP <GET ,P-ITBL ,P-PREP1>>\n\t\t\t  <GET ,P-OTBL ,P-PREP1>>\n\t\t     <ZERO? .TEMP>>\n\t\t <COND (.ADJ\n\t\t\t<PUT ,P-OTBL ,P-NC1 <REST ,P-LEXV 2>>\n\t\t\t<COND (<ZERO? <GET ,P-ITBL ,P-NC1L>>\n\t\t\t       <PUT ,P-ITBL ,P-NC1L <REST ,P-LEXV 6>>)>\n\t\t\t<COND (<ZERO? ,P-NCN> <SETG P-NCN 1>)>)\n\t\t       (T\n\t\t\t<PUT ,P-OTBL ,P-NC1 <GET ,P-ITBL ,P-NC1>>)>\n\t\t <PUT ,P-OTBL ,P-NC1L <GET ,P-ITBL ,P-NC1L>>)\n\t\t(T <RFALSE>)>)\n\t (<EQUAL? <GET ,P-OTBL ,P-NC2> 1>\n\t  <COND (<OR <EQUAL? <SET TEMP <GET ,P-ITBL ,P-PREP1>>\n\t\t\t  <GET ,P-OTBL ,P-PREP2>>\n\t\t     <ZERO? .TEMP>>\n\t\t <COND (.ADJ\n\t\t\t<PUT ,P-ITBL ,P-NC1 <REST ,P-LEXV 2>>\n\t\t\t<COND (<ZERO? <GET ,P-ITBL ,P-NC1L>>\n\t\t\t       <PUT ,P-ITBL ,P-NC1L <REST ,P-LEXV 6>>)>)>\n\t\t <PUT ,P-OTBL ,P-NC2 <GET ,P-ITBL ,P-NC1>>\n\t\t <PUT ,P-OTBL ,P-NC2L <GET ,P-ITBL ,P-NC1L>>\n\t\t <SETG P-NCN 2>)\n\t\t(T <RFALSE>)>)\n\t (<NOT <ZERO? ,P-ACLAUSE>>\n\t  <COND (<AND <NOT <EQUAL? ,P-NCN 1>> <NOT .ADJ>>\n\t\t <SETG P-ACLAUSE <>>\n\t\t <RFALSE>)\n\t\t(T\n\t\t <SET BEG <GET ,P-ITBL ,P-NC1>>\n\t\t <COND (.ADJ <SET BEG <REST ,P-LEXV 2>> <SET ADJ <>>)>\n\t\t <SET END <GET ,P-ITBL ,P-NC1L>>\n\t\t <REPEAT ()\n\t\t\t <SET WRD <GET .BEG 0>>\n\t\t\t <COND (<EQUAL? .BEG .END>\n\t\t\t\t<COND (.ADJ <ACLAUSE-WIN .ADJ> <RETURN>)\n\t\t\t\t      (T <SETG P-ACLAUSE <>> <RFALSE>)>)\n\t\t\t       (<AND <NOT .ADJ>\n\t\t\t\t     <OR <BTST <GETB .WRD ,P-PSOFF>\n\t\t\t\t\t       ,PS?ADJECTIVE>\n\t\t\t\t\t <EQUAL? .WRD ,W?ALL ,W?ONE>>>\n\t\t\t\t<SET ADJ .WRD>)\n\t\t\t       (<EQUAL? .WRD ,W?ONE>\n\t\t\t\t<ACLAUSE-WIN .ADJ>\n\t\t\t\t<RETURN>)\n\t\t\t       (<BTST <GETB .WRD ,P-PSOFF> ,PS?OBJECT>\n\t\t\t\t<COND (<EQUAL? .WRD ,P-ANAM>\n\t\t\t\t       <ACLAUSE-WIN .ADJ>)\n\t\t\t\t      (T\n\t\t\t\t       <NCLAUSE-WIN>)>\n\t\t\t\t<RETURN>)>\n\t\t\t <SET BEG <REST .BEG ,P-WORDLEN>>\n\t\t\t <COND (<EQUAL? .END 0>\n\t\t\t\t<SET END .BEG>\n\t\t\t\t<SETG P-NCN 1>\n\t\t\t\t<PUT ,P-ITBL ,P-NC1 <BACK .BEG 4>>\n\t\t\t\t<PUT ,P-ITBL ,P-NC1L .BEG>)>>)>)>\n   <PUT ,P-VTBL 0 <GET ,P-OVTBL 0>>\n   <PUTB ,P-VTBL 2 <GETB ,P-OVTBL 2>>\n   <PUTB ,P-VTBL 3 <GETB ,P-OVTBL 3>>\n   <PUT ,P-OTBL ,P-VERBN ,P-VTBL>\n   <PUTB ,P-VTBL 2 0>\n   <REPEAT ()\n\t   <COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN>\n\t\t  <SETG P-MERGED T>\n\t\t  <RTRUE>)\n\t\t (T <PUT ,P-ITBL .CNT <GET ,P-OTBL .CNT>>)>>\n   T>"
  },
  "ACLAUSE-WIN": {
   "name": "ACLAUSE-WIN",
   "file": "parser.zil",
   "line": 630,
   "endLine": 639,
   "source": "<ROUTINE ACLAUSE-WIN (ADJ)\n\t<PUT ,P-ITBL ,P-VERB <GET ,P-OTBL ,P-VERB>>\n\t<PUT ,P-CCTBL ,CC-SBPTR ,P-ACLAUSE>\n\t<PUT ,P-CCTBL ,CC-SEPTR <+ ,P-ACLAUSE 1>>\n\t<PUT ,P-CCTBL ,CC-DBPTR ,P-ACLAUSE>\n\t<PUT ,P-CCTBL ,CC-DEPTR <+ ,P-ACLAUSE 1>>\n\t<CLAUSE-COPY ,P-OTBL ,P-OTBL .ADJ>\n\t<AND <NOT <EQUAL? <GET ,P-OTBL ,P-NC2> 0>> <SETG P-NCN 2>>\n\t<SETG P-ACLAUSE <>>\n\t<RTRUE>>"
  },
  "NCLAUSE-WIN": {
   "name": "NCLAUSE-WIN",
   "file": "parser.zil",
   "line": 641,
   "endLine": 649,
   "source": "<ROUTINE NCLAUSE-WIN ()\n        <PUT ,P-CCTBL ,CC-SBPTR ,P-NC1>\n\t<PUT ,P-CCTBL ,CC-SEPTR ,P-NC1L>\n\t<PUT ,P-CCTBL ,CC-DBPTR ,P-ACLAUSE>\n\t<PUT ,P-CCTBL ,CC-DEPTR <+ ,P-ACLAUSE 1>>\n\t<CLAUSE-COPY ,P-ITBL ,P-OTBL>\n\t<AND <NOT <EQUAL? <GET ,P-OTBL ,P-NC2> 0>> <SETG P-NCN 2>>\n\t<SETG P-ACLAUSE <>>\n\t<RTRUE>>"
  },
  "WORD-PRINT": {
   "name": "WORD-PRINT",
   "file": "parser.zil",
   "line": 654,
   "endLine": 659,
   "source": "<ROUTINE WORD-PRINT (CNT BUF)\n\t <REPEAT ()\n\t\t <COND (<DLESS? CNT 0> <RETURN>)\n\t\t       (ELSE\n\t\t\t<PRINTC <GETB ,P-INBUF .BUF>>\n\t\t\t<SET BUF <+ .BUF 1>>)>>>"
  },
  "UNKNOWN-WORD": {
   "name": "UNKNOWN-WORD",
   "file": "parser.zil",
   "line": 661,
   "endLine": 671,
   "source": "<ROUTINE UNKNOWN-WORD (PTR \"AUX\" BUF)\n\t<PUT ,OOPS-TABLE ,O-PTR .PTR>\n\t<COND (<VERB? SAY>\n\t       <TELL ,NOTHING-HAPPENS>\n\t       <RFALSE>)>\n\t<TELL \"[I don't know the word \\\"\">\n\t<WORD-PRINT <GETB <REST ,P-LEXV <SET BUF <* .PTR 2>>> 2>\n\t\t    <GETB <REST ,P-LEXV .BUF> 3>>\n\t<TELL \"\\\".]\" CR>\n\t<SETG QUOTE-FLAG <>>\n\t<SETG P-OFLAG <>>>"
  },
  "CANT-USE": {
   "name": "CANT-USE",
   "file": "parser.zil",
   "line": 673,
   "endLine": 682,
   "source": "<ROUTINE CANT-USE (PTR \"AUX\" BUF)\n\t<COND (<VERB? SAY>\n\t       <TELL ,NOTHING-HAPPENS>\n\t       <RFALSE>)>\n\t<TELL \"[You used the word \\\"\">\n\t<WORD-PRINT <GETB <REST ,P-LEXV <SET BUF <* .PTR 2>>> 2>\n\t\t    <GETB <REST ,P-LEXV .BUF> 3>>\n\t<TELL \"\\\" in a way that I don't understand.]\" CR>\n\t<SETG QUOTE-FLAG <>>\n\t<SETG P-OFLAG <>>>"
  },
  "GET-PREP": {
   "name": "GET-PREP",
   "file": "parser.zil",
   "line": 718,
   "endLine": 725,
   "source": "<ROUTINE GET-PREP (SYN WHICH \"AUX\" PREP)\n  <COND (<==? .WHICH 1>\n\t <SET PREP <GETB .SYN ,P-SPREP1>>)\n\t(T\n\t <SET PREP <GETB .SYN ,P-SPREP2>>)>\n  <COND (<0? <SET PREP <ANDB .PREP *77*>>> <>)\n\t(T\n\t <+ .PREP 192>)>>"
  },
  "SYNTAX-CHECK": {
   "name": "SYNTAX-CHECK",
   "file": "parser.zil",
   "line": 727,
   "endLine": 815,
   "source": "<ROUTINE SYNTAX-CHECK (\"AUX\" SYN LEN NUM OBJ\n\t\t       \t    (DRIVE1 <>) (DRIVE2 <>) PREP VERB TMP)\n\t<COND (<ZERO? <SET VERB <GET ,P-ITBL ,P-VERB>>>\n\t       <TELL \"[There was no verb in that sentence!]\" CR>\n\t       <RFALSE>)>\n\t<SET SYN <GET ,VERBS <- 255 .VERB>>>\n\t<SET LEN <GETB .SYN 0>>\n\t<SET SYN <REST .SYN>>\n\t<REPEAT ()\n\t\t<SET NUM <P-SONUMS .SYN>>\t;\"TAA\"\n\t\t;<SET NUM <BAND <GETB .SYN ,P-SBITS> ,P-SONUMS>>\n\t\t<COND (<G? ,P-NCN .NUM> T)\n\t\t      (<AND <G=? .NUM 1>\n\t\t\t    <ZERO? ,P-NCN>\n\t\t\t    <OR <ZERO? <SET PREP <GET ,P-ITBL ,P-PREP1>>>\n\t\t\t\t<EQUAL? .PREP <GET-PREP .SYN 1>\t; \"TAA\"\n\t\t\t\t\t      ;<GETB .SYN ,P-SPREP1>>>>\n\t\t       <SET DRIVE1 .SYN>)\n\t\t      (<EQUAL? <GET-PREP .SYN 1>\t;\"TAA\"\n\t\t\t       ;<GETB .SYN ,P-SPREP1>\n\t\t\t       <GET ,P-ITBL ,P-PREP1>>\n\t\t       <COND (<AND <EQUAL? .NUM 2> <EQUAL? ,P-NCN 1>>\n\t\t\t      <SET DRIVE2 .SYN>)\n\t\t\t     (<OR <L=? .NUM 1>\t;\"TAA\"\n\t\t\t\t  <EQUAL? <GET-PREP .SYN 2>\n\t\t\t\t\t  ;<GETB .SYN ,P-SPREP2>\n\t\t\t\t\t  <GET ,P-ITBL ,P-PREP2>>>\n\t\t\t      <SYNTAX-FOUND .SYN>\n\t\t\t      <RTRUE>)>)>\n\t\t<COND (<DLESS? LEN 1>\n\t\t       <COND (<OR .DRIVE1 .DRIVE2> <RETURN>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"[That sentence isn't one I recognize.]\" CR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T\n\t\t       <COND (<0? .NUM>\t\t;\"TAA\"\n\t\t\t      <SET SYN <REST .SYN ,P-SYNLEN-0>>)\n\t\t\t     (<1? .NUM>\n\t\t\t      <SET SYN <REST .SYN ,P-SYNLEN-1>>)\n\t\t\t     (T\n\t\t\t      <SET SYN <REST .SYN ,P-SYNLEN-2>>)>\n\t\t       ;<SET SYN <REST .SYN ,P-SYNLEN>>)>>\n\t<COND (<AND .DRIVE1\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE1 ,P-SFWIM1>\n\t\t\t       <GETB .DRIVE1 ,P-SLOC1>\n\t\t\t       <GET-PREP .DRIVE1 1>\t;\"TAA\"\n\t\t\t       ;<GETB .DRIVE1 ,P-SPREP1>>>>\n\t       <PUT ,P-PRSO ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSO 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE1>)\n\t      (<AND .DRIVE2\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE2 ,P-SFWIM2>\n\t\t\t       <GETB .DRIVE2 ,P-SLOC2>\n\t\t\t       <GET-PREP .DRIVE2 2>\n\t\t\t       ;<GETB .DRIVE2 ,P-SPREP2>>>>\n\t       <PUT ,P-PRSI ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSI 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE2>)\n\t      (<EQUAL? .VERB ,ACT?FIND>\n\t       <TELL \"[That question can't be answered.]\" CR>\n\t       <RFALSE>)\n\t      (<NOT <EQUAL? ,WINNER ,ADVENTURER>>\n\t       <CANT-ORPHAN>)\n\t      (T\n\t       <ORPHAN .DRIVE1 .DRIVE2>\n\t       <TELL \"[What do you want to \">\n\t       <SET TMP <GET ,P-OTBL ,P-VERBN>>\n\t       <COND (<EQUAL? .TMP 0>\n\t\t      <TELL \"tell\">)\n\t\t     (<ZERO? <GETB ,P-VTBL 2>>\n\t\t      <PRINTB <GET .TMP 0>>)\n\t\t     (T\n\t\t      <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>\n\t\t      <PUTB ,P-VTBL 2 0>)>\n\t       <COND (.DRIVE2\n\t\t      <TELL \" \">\n\t\t      <THING-PRINT T T>)>\n\t       <SETG P-OFLAG T>\n\t       <PREP-PRINT <COND (.DRIVE1\n\t\t\t\t  <GET-PREP .DRIVE1 1>\t;\"TAA\"\n\t\t\t\t  ;<GETB .DRIVE1 ,P-SPREP1>)\n\t\t\t\t (T\n\t\t\t\t  <GET-PREP .DRIVE2 2>\t;\"TAA\"\n\t\t\t\t  ;<GETB .DRIVE2 ,P-SPREP2>)>>\n\t       <TELL \"?]\" CR>\n\t       <RFALSE>)>>"
  },
  "CANT-ORPHAN": {
   "name": "CANT-ORPHAN",
   "file": "parser.zil",
   "line": 817,
   "endLine": 819,
   "source": "<ROUTINE CANT-ORPHAN ()\n\t <TELL \"\\\"I don't understand! What are you referring to?\\\"\" CR>\n\t <RFALSE>>"
  },
  "ORPHAN": {
   "name": "ORPHAN",
   "file": "parser.zil",
   "line": 821,
   "endLine": 849,
   "source": "<ROUTINE ORPHAN (D1 D2 \"AUX\" (CNT -1))\n\t<COND (<NOT ,P-MERGED>\n\t       <PUT ,P-OCLAUSE ,P-MATCHLEN 0>)>\n\t<PUT ,P-OVTBL 0 <GET ,P-VTBL 0>>\n\t<PUTB ,P-OVTBL 2 <GETB ,P-VTBL 2>>\n\t<PUTB ,P-OVTBL 3 <GETB ,P-VTBL 3>>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT ,P-ITBLLEN> <RETURN>)\n\t\t      (T <PUT ,P-OTBL .CNT <GET ,P-ITBL .CNT>>)>>\n\t<COND (<EQUAL? ,P-NCN 2>\n\t       <PUT ,P-CCTBL ,CC-SBPTR ,P-NC2>\n\t       <PUT ,P-CCTBL ,CC-SEPTR ,P-NC2L>\n\t       <PUT ,P-CCTBL ,CC-DBPTR ,P-NC2>\n\t       <PUT ,P-CCTBL ,CC-DEPTR ,P-NC2L>\n\t       <CLAUSE-COPY ,P-ITBL ,P-OTBL>)>\n\t<COND (<NOT <L? ,P-NCN 1>>\n\t       <PUT ,P-CCTBL ,CC-SBPTR ,P-NC1>\n\t       <PUT ,P-CCTBL ,CC-SEPTR ,P-NC1L>\n\t       <PUT ,P-CCTBL ,CC-DBPTR ,P-NC1>\n\t       <PUT ,P-CCTBL ,CC-DEPTR ,P-NC1L>\n\t       <CLAUSE-COPY ,P-ITBL ,P-OTBL>)>\n\t<COND (.D1\n\t       <PUT ,P-OTBL ,P-PREP1 <GET-PREP .D1 1>\t;\"TAA\"\n\t\t    ;<GETB .D1 ,P-SPREP1>>\n\t       <PUT ,P-OTBL ,P-NC1 1>)\n\t      (.D2\n\t       <PUT ,P-OTBL ,P-PREP2 <GET-PREP .D2 2>\t;\"TAA\"\n\t\t    ;<GETB .D2 ,P-SPREP2>>\n\t       <PUT ,P-OTBL ,P-NC2 1>)>>"
  },
  "THING-PRINT": {
   "name": "THING-PRINT",
   "file": "parser.zil",
   "line": 854,
   "endLine": 861,
   "source": "<ROUTINE THING-PRINT (PRSO? \"OPTIONAL\" (THE? <>) \"AUX\" BEG END)\n\t <COND (.PRSO?\n\t\t<SET BEG <GET ,P-ITBL ,P-NC1>>\n\t\t<SET END <GET ,P-ITBL ,P-NC1L>>)\n\t       (T\n\t\t<SET BEG <GET ,P-ITBL ,P-NC2>>\n\t\t<SET END <GET ,P-ITBL ,P-NC2L>>)>\n\t <BUFFER-PRINT .BEG .END .THE?>>"
  },
  "BUFFER-PRINT": {
   "name": "BUFFER-PRINT",
   "file": "parser.zil",
   "line": 863,
   "endLine": 897,
   "source": "<ROUTINE BUFFER-PRINT (BEG END CP\n\t\t       \"AUX\" (NOSP T) WRD (FIRST?? T) (PN <>) (Q? <>))\n\t <REPEAT ()\n\t\t<COND (<EQUAL? .BEG .END>\n\t\t       <RETURN>)\n\t\t      (T\n\t\t       <SET WRD <GET .BEG 0>>\n\t\t       <COND (<EQUAL? .WRD ,W?COMMA>\n\t\t\t      <TELL \", \">)\n\t\t\t     (.NOSP\n\t\t\t      <SET NOSP <>>)\n\t\t\t     (T\n\t\t\t      <TELL \" \">)>\n\t\t       <COND (<EQUAL? .WRD ,W?PERIOD ,W?COMMA>\n\t\t\t      <SET NOSP T>)\n\t\t\t     (<EQUAL? .WRD ,W?ME>\n\t\t\t      <TELL \"yourself\">\n\t\t\t      <SET PN T>)\n\t\t\t     (<EQUAL? .WRD ,W?INTNUM>\n\t\t\t      <PRINTN ,P-NUMBER>\n\t\t\t      <SET PN T>)\n\t\t\t     (T\n\t\t\t      <COND (<AND .FIRST??\n\t\t\t\t\t  <NOT .PN>\n\t\t\t\t\t  .CP>\n\t\t\t\t     <TELL \"the \">)>\n\t\t\t      <COND (<OR ,P-OFLAG ,P-MERGED>\n\t\t\t\t     <PRINTB .WRD>)\n\t\t\t\t    (<AND <EQUAL? .WRD ,W?IT>\n\t\t\t\t\t  <ACCESSIBLE? ,P-IT-OBJECT>>\n\t\t\t\t     <PRINTD ,P-IT-OBJECT>)\n\t\t\t\t    (T\n\t\t\t\t     <WORD-PRINT <GETB .BEG 2> <GETB .BEG 3>>)>\n\t\t\t      <SET FIRST?? <>>)>)>\n\t\t<SET BEG <REST .BEG ,P-WORDLEN>>>>"
  },
  "PREP-PRINT": {
   "name": "PREP-PRINT",
   "file": "parser.zil",
   "line": 899,
   "endLine": 906,
   "source": "<ROUTINE PREP-PRINT (PREP \"AUX\" WRD)\n\t<COND (<NOT <ZERO? .PREP>>\n\t       <TELL \" \">\n\t       <COND ;(<EQUAL? .PREP ,PR?THROUGH>\n\t\t      <TELL \"through\">)\n\t\t     (T\n\t\t      <SET WRD <PREP-FIND .PREP>>\n\t\t      <PRINTB .WRD>)>)>>"
  },
  "CLAUSE-COPY": {
   "name": "CLAUSE-COPY",
   "file": "parser.zil",
   "line": 908,
   "endLine": 927,
   "source": "<ROUTINE CLAUSE-COPY (SRC DEST \"OPTIONAL\" (INSRT <>) \"AUX\" BEG END)\n\t<SET BEG <GET .SRC <GET ,P-CCTBL ,CC-SBPTR>>>\n\t<SET END <GET .SRC <GET ,P-CCTBL ,CC-SEPTR>>>\n\t<PUT .DEST\n\t     <GET ,P-CCTBL ,CC-DBPTR>\n\t     <REST ,P-OCLAUSE\n\t\t   <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN> 2>>>\n\t<REPEAT ()\n\t\t<COND (<EQUAL? .BEG .END>\n\t\t       <PUT .DEST\n\t\t\t    <GET ,P-CCTBL ,CC-DEPTR>\n\t\t\t    <REST ,P-OCLAUSE\n\t\t\t\t  <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN>\n\t\t\t\t     2>>>\n\t\t       <RETURN>)\n\t\t      (T\n\t\t       <COND (<AND .INSRT <EQUAL? ,P-ANAM <GET .BEG 0>>>\n\t\t\t      <CLAUSE-ADD .INSRT>)>\n\t\t       <CLAUSE-ADD <GET .BEG 0>>)>\n\t\t<SET BEG <REST .BEG ,P-WORDLEN>>>>"
  },
  "CLAUSE-ADD": {
   "name": "CLAUSE-ADD",
   "file": "parser.zil",
   "line": 929,
   "endLine": 933,
   "source": "<ROUTINE CLAUSE-ADD (WRD \"AUX\" PTR)\n\t<SET PTR <+ <GET ,P-OCLAUSE ,P-MATCHLEN> 2>>\n\t<PUT ,P-OCLAUSE <- .PTR 1> .WRD>\n\t<PUT ,P-OCLAUSE .PTR 0>\n\t<PUT ,P-OCLAUSE ,P-MATCHLEN .PTR>>"
  },
  "PREP-FIND": {
   "name": "PREP-FIND",
   "file": "parser.zil",
   "line": 935,
   "endLine": 940,
   "source": "<ROUTINE PREP-FIND (PREP \"AUX\" (CNT 0) SIZE)\n\t<SET SIZE <* <GET ,PREPOSITIONS 0> 2>>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT .SIZE> <RFALSE>)\n\t\t      (<EQUAL? <GET ,PREPOSITIONS .CNT> .PREP>\n\t\t       <RETURN <GET ,PREPOSITIONS <- .CNT 1>>>)>>>"
  },
  "SYNTAX-FOUND": {
   "name": "SYNTAX-FOUND",
   "file": "parser.zil",
   "line": 942,
   "endLine": 944,
   "source": "<ROUTINE SYNTAX-FOUND (SYN)\n\t<SETG P-SYNTAX .SYN>\n\t<SETG PRSA <GETB .SYN ,P-SACTION>>>"
  },
  "GWIM": {
   "name": "GWIM",
   "file": "parser.zil",
   "line": 948,
   "endLine": 975,
   "source": "<ROUTINE GWIM (GBIT LBIT PREP \"AUX\" OBJ)\n\t<COND (<EQUAL? .GBIT ,RMUNGBIT>\n\t       <RETURN ,ROOMS>)>\n\t<SETG P-GWIMBIT .GBIT>\n\t<SETG P-SLOCBITS .LBIT>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<COND (<GET-OBJECT ,P-MERGE <>>\n\t       <SETG P-GWIMBIT 0>\n\t       <COND (<EQUAL? <GET ,P-MERGE ,P-MATCHLEN> 1>\n\t\t      <SET OBJ <GET ,P-MERGE 1>>\n\t\t      <TELL \"[\">\n\t\t      <COND (<AND <NOT <ZERO? .PREP>>\n\t\t\t\t  <NOT ,P-END-ON-PREP>>\n\t\t\t     <PRINTB <SET PREP <PREP-FIND .PREP>>>\n\t\t\t     <COND (<EQUAL? .PREP ,W?OUT>\n\t\t\t\t    <TELL \" of\">)>\n\t\t\t     <TELL \" \">\n\t\t\t     <COND (<EQUAL? .OBJ ,HANDS>\n\t\t\t\t    <TELL \"your hands\">)\n\t\t\t\t   (T\n\t\t\t\t    <TELL \"the \" D .OBJ>)>\n\t\t\t     <TELL \"]\" CR>)\n\t\t\t    (T\n\t\t\t     <TELL D .OBJ \"]\" CR>)>\n\t\t      .OBJ)>)\n\t      (T\n\t       <SETG P-GWIMBIT 0>\n\t       <RFALSE>)>>"
  },
  "SNARF-OBJECTS": {
   "name": "SNARF-OBJECTS",
   "file": "parser.zil",
   "line": 977,
   "endLine": 992,
   "source": "<ROUTINE SNARF-OBJECTS (\"AUX\" OPTR IPTR L)\n\t <PUT ,P-BUTS ,P-MATCHLEN 0>\n\t <COND (<NOT <EQUAL? <SET IPTR <GET ,P-ITBL ,P-NC2>> 0>>\n\t\t<SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC2>>\n\t\t<OR <SNARFEM .IPTR <GET ,P-ITBL ,P-NC2L> ,P-PRSI> <RFALSE>>)>\n\t <COND (<NOT <EQUAL? <SET OPTR <GET ,P-ITBL ,P-NC1>> 0>>\n\t\t<SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC1>>\n\t\t<OR <SNARFEM .OPTR <GET ,P-ITBL ,P-NC1L> ,P-PRSO> <RFALSE>>)>\n\t <COND (<NOT <ZERO? <GET ,P-BUTS ,P-MATCHLEN>>>\n\t\t<SET L <GET ,P-PRSO ,P-MATCHLEN>>\n\t\t<COND (.OPTR <SETG P-PRSO <BUT-MERGE ,P-PRSO>>)>\n\t\t<COND (<AND .IPTR\n\t\t\t    <OR <NOT .OPTR>\n\t\t\t\t<EQUAL? .L <GET ,P-PRSO ,P-MATCHLEN>>>>\n\t\t       <SETG P-PRSI <BUT-MERGE ,P-PRSI>>)>)>\n\t <RTRUE>>"
  },
  "BUT-MERGE": {
   "name": "BUT-MERGE",
   "file": "parser.zil",
   "line": 994,
   "endLine": 1007,
   "source": "<ROUTINE BUT-MERGE (TBL \"AUX\" LEN BUTLEN (CNT 1) (MATCHES 0) OBJ NTBL)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<REPEAT ()\n\t\t<COND (<DLESS? LEN 0> <RETURN>)\n\t\t      (<ZMEMQ <SET OBJ <GET .TBL .CNT>> ,P-BUTS>)\n\t\t      (T\n\t\t       <PUT ,P-MERGE <+ .MATCHES 1> .OBJ>\n\t\t       <SET MATCHES <+ .MATCHES 1>>)>\n\t\t<SET CNT <+ .CNT 1>>>\n\t<PUT ,P-MERGE ,P-MATCHLEN .MATCHES>\n\t<SET NTBL ,P-MERGE>\n\t<SETG P-MERGE .TBL>\n\t.NTBL>"
  },
  "SNARFEM": {
   "name": "SNARFEM",
   "file": "parser.zil",
   "line": 1026,
   "endLine": 1078,
   "source": "<ROUTINE SNARFEM (PTR EPTR TBL \"AUX\" (BUT <>) LEN WV WRD NW (WAS-ALL <>))\n   <SETG P-AND <>>\n   <COND (<EQUAL? ,P-GETFLAGS ,P-ALL>\n\t  <SET WAS-ALL T>)>\n   <SETG P-GETFLAGS 0>\n   <PUT .TBL ,P-MATCHLEN 0>\n   <SET WRD <GET .PTR 0>>\n   <REPEAT ()\n\t   <COND (<EQUAL? .PTR .EPTR>\n\t\t  <SET WV <GET-OBJECT <OR .BUT .TBL>>>\n\t\t  <COND (.WAS-ALL <SETG P-GETFLAGS ,P-ALL>)>\n\t\t  <RETURN .WV>)\n\t\t (T\n\t\t  <COND (<==? .EPTR <REST .PTR ,P-WORDLEN>>\n\t\t\t <SET NW 0>)\n\t\t\t(T <SET NW <GET .PTR ,P-LEXELEN>>)>\n\t\t  <COND (<EQUAL? .WRD ,W?ALL ;,W?BOTH>\n\t\t\t <SETG P-GETFLAGS ,P-ALL>\n\t\t\t <COND (<EQUAL? .NW ,W?OF>\n\t\t\t\t<SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t(<EQUAL? .WRD ,W?BUT ,W?EXCEPT>\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t <SET BUT ,P-BUTS>\n\t\t\t <PUT .BUT ,P-MATCHLEN 0>)\n\t\t\t(<EQUAL? .WRD ,W?A ,W?ONE>\n\t\t\t <COND (<NOT ,P-ADJ>\n\t\t\t\t<SETG P-GETFLAGS ,P-ONE>\n\t\t\t\t<COND (<EQUAL? .NW ,W?OF>\n\t\t\t\t       <SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t       (T\n\t\t\t\t<SETG P-NAM ,P-ONEOBJ>\n\t\t\t\t<OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t\t<AND <ZERO? .NW> <RTRUE>>)>)\n\t\t\t(<AND <EQUAL? .WRD ,W?AND ,W?COMMA>\n\t\t\t      <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t <SETG P-AND T>\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t T)\n\t\t\t(<WT? .WRD ,PS?BUZZ-WORD>)\n\t\t\t(<EQUAL? .WRD ,W?AND ,W?COMMA>)\n\t\t\t(<EQUAL? .WRD ,W?OF>\n\t\t\t <COND (<ZERO? ,P-GETFLAGS>\n\t\t\t\t<SETG P-GETFLAGS ,P-INHIBIT>)>)\n\t\t\t(<AND <SET WV <WT? .WRD ,PS?ADJECTIVE ,P1?ADJECTIVE>>\n\t\t\t      <NOT ,P-ADJ>>\n\t\t\t <SETG P-ADJ .WV>\n\t\t\t <SETG P-ADJN .WRD>)\n\t\t\t(<WT? .WRD ,PS?OBJECT ,P1?OBJECT>\n\t\t\t <SETG P-NAM .WRD>\n\t\t\t <SETG P-ONEOBJ .WRD>)>)>\n\t   <COND (<NOT <EQUAL? .PTR .EPTR>>\n\t\t  <SET PTR <REST .PTR ,P-WORDLEN>>\n\t\t  <SET WRD .NW>)>>>"
  },
  "GET-OBJECT": {
   "name": "GET-OBJECT",
   "file": "parser.zil",
   "line": 1088,
   "endLine": 1177,
   "source": "<ROUTINE GET-OBJECT (TBL\n\t\t     \"OPTIONAL\" (VRB T)\n\t\t     \"AUX\" BITS LEN XBITS TLEN (GCHECK <>) (OLEN 0) OBJ)\n\t <SET XBITS ,P-SLOCBITS>\n\t <SET TLEN <GET .TBL ,P-MATCHLEN>>\n\t <COND (<BTST ,P-GETFLAGS ,P-INHIBIT> <RTRUE>)>\n\t <COND (<AND <NOT ,P-NAM> ,P-ADJ>\n\t\t<COND (<WT? ,P-ADJN ,PS?OBJECT ,P1?OBJECT>\n\t\t       <SETG P-NAM ,P-ADJN>\n\t\t       <SETG P-ADJ <>>)>)>\n\t <COND (<AND <NOT ,P-NAM>\n\t\t     <NOT ,P-ADJ>\n\t\t     <NOT <EQUAL? ,P-GETFLAGS ,P-ALL>>\n\t\t     <ZERO? ,P-GWIMBIT>>\n\t\t<COND (.VRB\n\t\t       <TELL ,NOUN-MISSING>)>\n\t\t<RFALSE>)>\n\t <COND (<OR <NOT <EQUAL? ,P-GETFLAGS ,P-ALL>> <ZERO? ,P-SLOCBITS>>\n\t\t<SETG P-SLOCBITS -1>)>\n\t <SETG P-TABLE .TBL>\n\t <PROG ()\n\t       <COND (.GCHECK <GLOBAL-CHECK .TBL>)\n\t\t     (T\n\t\t      <COND (,LIT\n\t\t\t     <FCLEAR ,ADVENTURER ,TRANSBIT>\n\t\t\t     <DO-SL ,HERE ,SOG ,SIR>\n\t\t       \t     <FSET ,ADVENTURER ,TRANSBIT>)>\n\t\t      <DO-SL ,ADVENTURER ,SH ,SC>)>\n\t       <SET LEN <- <GET .TBL ,P-MATCHLEN> .TLEN>>\n\t       <COND (<BTST ,P-GETFLAGS ,P-ALL>)\n\t\t     (<AND <BTST ,P-GETFLAGS ,P-ONE>\n\t\t\t   <NOT <ZERO? .LEN>>>\n\t\t      <COND (<NOT <EQUAL? .LEN 1>>\n\t\t\t     <PUT .TBL 1 <GET .TBL <RANDOM .LEN>>>\n\t\t\t     <TELL \"[How about the \">\n\t\t\t     <PRINTD <GET .TBL 1>>\n\t\t\t     <TELL \"?]\" CR>)>\n\t\t      <PUT .TBL ,P-MATCHLEN 1>)\n\t\t     (<OR <G? .LEN 1>\n\t\t\t  <AND <ZERO? .LEN> <NOT <EQUAL? ,P-SLOCBITS -1>>>>\n\t\t      <COND (<EQUAL? ,P-SLOCBITS -1>\n\t\t\t     <SETG P-SLOCBITS .XBITS>\n\t\t\t     <SET OLEN .LEN>\n\t\t\t     <PUT .TBL\n\t\t\t\t  ,P-MATCHLEN\n\t\t\t\t  <- <GET .TBL ,P-MATCHLEN> .LEN>>\n\t\t\t     <AGAIN>)\n\t\t\t    (T\n\t\t\t     <COND (<ZERO? .LEN> <SET LEN .OLEN>)>\n\t\t\t     <COND (<NOT <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t\t\t    <CANT-ORPHAN>\n\t\t\t\t    <RFALSE>)\n\t\t\t\t   (<AND .VRB ,P-NAM>\n\t\t\t\t    <WHICH-PRINT .TLEN .LEN .TBL>\n\t\t\t\t    <SETG P-ACLAUSE\n\t\t\t\t\t  <COND (<EQUAL? .TBL ,P-PRSO> ,P-NC1)\n\t\t\t\t\t\t(T ,P-NC2)>>\n\t\t\t\t    <SETG P-AADJ ,P-ADJ>\n\t\t\t\t    <SETG P-ANAM ,P-NAM>\n\t\t\t\t    <ORPHAN <> <>>\n\t\t\t\t    <SETG P-OFLAG T>)\n\t\t\t\t   (.VRB\n\t\t\t\t    <TELL ,NOUN-MISSING>)>\n\t\t\t     <SETG P-NAM <>>\n\t\t\t     <SETG P-ADJ <>>\n\t\t\t     <RFALSE>)>)>\n\t       <COND (<AND <ZERO? .LEN> .GCHECK>\n\t\t      <COND (.VRB\n\t\t\t     ;\"next added 1/2/85 by JW\"\n\t\t\t     <SETG P-SLOCBITS .XBITS>\n\t\t\t     <COND (<OR ,LIT <VERB? TELL ;WHERE ;WHAT ;WHO>>\n\t\t\t\t    ;\"Changed 6/10/83 - MARC\"\n\t\t\t\t    <OBJ-FOUND ,NOT-HERE-OBJECT .TBL>\n\t\t\t\t    <SETG P-XNAM ,P-NAM>\n\t\t\t\t    <SETG P-XADJ ,P-ADJ>\n\t\t\t\t    <SETG P-XADJN ,P-ADJN>\n\t\t\t\t    <SETG P-NAM <>>\n\t\t\t\t    <SETG P-ADJ <>>\n\t\t\t\t    <SETG P-ADJN <>>\n\t\t\t\t    <RTRUE>)\n\t\t\t\t   (T\n\t\t\t\t    <TELL ,TOO-DARK>)>)>\n\t\t      <SETG P-NAM <>>\n\t\t      <SETG P-ADJ <>>\n\t\t      <RFALSE>)\n\t\t     (<ZERO? .LEN> <SET GCHECK T> <AGAIN>)>\n\t       <SETG P-SLOCBITS .XBITS>\n\t       <SETG P-NAM <>>\n\t       <SETG P-ADJ <>>\n\t       <RTRUE>>>"
  },
  "WHICH-PRINT": {
   "name": "WHICH-PRINT",
   "file": "parser.zil",
   "line": 1205,
   "endLine": 1228,
   "source": "<ROUTINE WHICH-PRINT (TLEN LEN TBL \"AUX\" OBJ RLEN)\n\t <SET RLEN .LEN>\n\t <TELL \"[Which \">\n         <COND (<OR ,P-OFLAG ,P-MERGED ,P-AND>\n\t\t<PRINTB <COND (,P-NAM\n\t\t\t       ,P-NAM)\n\t\t\t      (,P-ADJ\n\t\t\t       ,P-ADJN)\n\t\t\t      (T\n\t\t\t       ,W?ONE)>>)\n\t       (T\n\t\t<THING-PRINT <EQUAL? .TBL ,P-PRSO>>)>\n\t <TELL \" do you mean, \">\n\t <REPEAT ()\n\t\t <SET TLEN <+ .TLEN 1>>\n\t\t <SET OBJ <GET .TBL .TLEN>>\n\t\t <TELL \"the \" D .OBJ>\n\t\t <COND (<EQUAL? .LEN 2>\n\t\t        <COND (<NOT <EQUAL? .RLEN 2>> <TELL \",\">)>\n\t\t        <TELL \" or \">)\n\t\t       (<G? .LEN 2> <TELL \", \">)>\n\t\t <COND (<L? <SET LEN <- .LEN 1>> 1>\n\t\t        <TELL \"?]\" CR>\n\t\t        <RETURN>)>>>"
  },
  "GLOBAL-CHECK": {
   "name": "GLOBAL-CHECK",
   "file": "parser.zil",
   "line": 1230,
   "endLine": 1261,
   "source": "<ROUTINE GLOBAL-CHECK (TBL \"AUX\" LEN RMG RMGL (CNT 0) OBJ OBITS FOO)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<SET OBITS ,P-SLOCBITS>\n\t<COND (<SET RMG <GETPT ,HERE ,P?GLOBAL>>\n\t       <SET RMGL <- <PTSIZE .RMG> 1>>\n\t       <REPEAT ()\n\t\t       <COND (<THIS-IT? <SET OBJ <GETB .RMG .CNT>> .TBL>\n\t\t\t      <OBJ-FOUND .OBJ .TBL>)>\n\t\t       <COND (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<SET RMG <GETPT ,HERE ,P?PSEUDO>>\n\t       <SET RMGL <- </ <PTSIZE .RMG> 4> 1>>\n\t       <SET CNT 0>\n\t       <REPEAT ()\n\t\t       <COND (<EQUAL? ,P-NAM <GET .RMG <* .CNT 2>>>\n\t\t\t      <PUTP ,PSEUDO-OBJECT\n\t\t\t\t    ,P?ACTION\n\t\t\t\t    <GET .RMG <+ <* .CNT 2> 1>>>\n\t\t\t      <SET FOO\n\t\t\t\t   <BACK <GETPT ,PSEUDO-OBJECT ,P?ACTION> 5>>\n\t\t\t      <PUT .FOO 0 <GET ,P-NAM 0>>\n\t\t\t      <PUT .FOO 1 <GET ,P-NAM 1>>\n\t\t\t      <OBJ-FOUND ,PSEUDO-OBJECT .TBL>\n\t\t\t      <RETURN>)\n\t\t             (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<EQUAL? <GET .TBL ,P-MATCHLEN> .LEN>\n\t       <SETG P-SLOCBITS -1>\n\t       <SETG P-TABLE .TBL>\n\t       <DO-SL ,GLOBAL-OBJECTS 1 1>\n\t       <SETG P-SLOCBITS .OBITS>\n\t       <COND (<AND <ZERO? <GET .TBL ,P-MATCHLEN>>\n\t\t\t   <EQUAL? ,PRSA ,V?LOOK-INSIDE ,V?SEARCH ,V?EXAMINE>>\n\t\t      <DO-SL ,ROOMS 1 1>)>)>>"
  },
  "DO-SL": {
   "name": "DO-SL",
   "file": "parser.zil",
   "line": 1263,
   "endLine": 1271,
   "source": "<ROUTINE DO-SL (OBJ BIT1 BIT2 \"AUX\" BTS)\n\t<COND (<BTST ,P-SLOCBITS <+ .BIT1 .BIT2>>\n\t       <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCALL>)\n\t      (T\n\t       <COND (<BTST ,P-SLOCBITS .BIT1>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCTOP>)\n\t\t     (<BTST ,P-SLOCBITS .BIT2>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCBOT>)\n\t\t     (T <RTRUE>)>)>>"
  },
  "SEARCH-LIST": {
   "name": "SEARCH-LIST",
   "file": "parser.zil",
   "line": 1277,
   "endLine": 1298,
   "source": "<ROUTINE SEARCH-LIST (OBJ TBL LVL \"AUX\" FLS NOBJ)\n\t<COND (<SET OBJ <FIRST? .OBJ>>\n\t       <REPEAT ()\n\t\t       <COND (<AND <NOT <EQUAL? .LVL ,P-SRCBOT>>\n\t\t\t\t   <GETPT .OBJ ,P?SYNONYM>\n\t\t\t\t   <THIS-IT? .OBJ .TBL>>\n\t\t\t      <OBJ-FOUND .OBJ .TBL>)>\n\t\t       <COND (<AND <OR <NOT <EQUAL? .LVL ,P-SRCTOP>>\n\t\t\t\t       <FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t       <FSET? .OBJ ,SURFACEBIT>>\n\t\t\t\t   <SET NOBJ <FIRST? .OBJ>>\n\t\t\t\t   <OR <FSET? .OBJ ,OPENBIT>\n\t\t\t\t       <FSET? .OBJ ,TRANSBIT>>>\n\t\t\t      <SET FLS\n\t\t\t\t   <SEARCH-LIST .OBJ\n\t\t\t\t\t\t.TBL\n\t\t\t\t\t\t<COND (<FSET? .OBJ ,SURFACEBIT>\n\t\t\t\t\t\t       ,P-SRCALL)\n\t\t\t\t\t\t      (<FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t\t\t       ,P-SRCALL)\n\t\t\t\t\t\t      (T ,P-SRCTOP)>>>)>\n\t\t       <COND (<SET OBJ <NEXT? .OBJ>>) (T <RETURN>)>>)>>"
  },
  "OBJ-FOUND": {
   "name": "OBJ-FOUND",
   "file": "parser.zil",
   "line": 1300,
   "endLine": 1303,
   "source": "<ROUTINE OBJ-FOUND (OBJ TBL \"AUX\" PTR)\n\t<SET PTR <GET .TBL ,P-MATCHLEN>>\n\t<PUT .TBL <+ .PTR 1> .OBJ>\n\t<PUT .TBL ,P-MATCHLEN <+ .PTR 1>>>"
  },
  "TAKE-CHECK": {
   "name": "TAKE-CHECK",
   "file": "parser.zil",
   "line": 1305,
   "endLine": 1313,
   "source": "<ROUTINE TAKE-CHECK (\"AUX\" N)\n\t<COND (<G? <SET N <P-SONUMS ,P-SYNTAX>> 0>\t;\"TAA\"\n\t       <COND (<ITAKE-CHECK ,P-PRSO <GETB ,P-SYNTAX ,P-SLOC1>>\n\t\t      <COND (<G? .N 1>\n\t\t\t     <ITAKE-CHECK ,P-PRSI <GETB ,P-SYNTAX ,P-SLOC2>>)\n\t\t\t    (T\n\t\t\t     <RTRUE>)>)>)\n\t      (T\n\t       <RTRUE>)>>"
  },
  "ITAKE-CHECK": {
   "name": "ITAKE-CHECK",
   "file": "parser.zil",
   "line": 1315,
   "endLine": 1356,
   "source": "<ROUTINE ITAKE-CHECK (TBL IBITS \"AUX\" PTR OBJ TAKEN)\n\t <COND (<AND <SET PTR <GET .TBL ,P-MATCHLEN>>\n\t\t     <OR <BTST .IBITS ,SHAVE>\n\t\t\t <BTST .IBITS ,STAKE>>>\n\t\t<REPEAT ()\n\t\t\t<COND (<L? <SET PTR <- .PTR 1>> 0> <RETURN>)\n\t\t\t      (T\n\t\t\t       <SET OBJ <GET .TBL <+ .PTR 1>>>\n\t\t\t       <COND (<EQUAL? .OBJ ,IT>\n\t\t\t\t      <COND (<NOT <ACCESSIBLE? ,P-IT-OBJECT>>\n\t\t\t\t\t     <TELL ,REFERRING>\n\t\t\t\t\t     <RFALSE>)\n\t\t\t\t\t    (T\n\t\t\t\t\t     <SET OBJ ,P-IT-OBJECT>)>)>\n\t\t\t       <COND (<AND <NOT <HELD? .OBJ>>\n\t\t\t\t\t   <NOT <EQUAL? .OBJ ,HANDS ,ME>>>\n\t\t\t\t      <SETG PRSO .OBJ>\n\t\t\t\t      <COND (<FSET? .OBJ ,TRYTAKEBIT>\n\t\t\t\t\t     <SET TAKEN T>)\n\t\t\t\t\t    (<NOT <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t\t\t\t     <SET TAKEN <>>)\n\t\t\t\t\t    (<AND <BTST .IBITS ,STAKE>\n\t\t\t\t\t\t  <EQUAL? <ITAKE <>> T>>\n\t\t\t\t\t     <SET TAKEN <>>)\n\t\t\t\t\t    (T <SET TAKEN T>)>\n\t\t\t\t      <COND (<AND .TAKEN\n\t\t\t\t\t\t  <BTST .IBITS ,SHAVE>\n\t\t\t\t\t\t  <EQUAL? ,WINNER\n\t\t\t\t\t\t\t  ,ADVENTURER>>\n\t\t\t\t\t     <COND (<EQUAL? .OBJ\n\t\t\t\t\t\t\t    ,NOT-HERE-OBJECT>\n\t\t\t\t\t\t    <TELL ,YNH \"that!\" CR>\n\t\t\t\t\t\t    <RFALSE>)>\n\t\t\t\t\t     <SETG P-IT-OBJECT .OBJ>\n\t\t\t\t\t     <TELL ,YNH \"the \">\n\t\t\t\t\t     <PRINTD .OBJ>\n\t\t\t\t\t     <TELL ,PERIOD-CR>\n\t\t\t\t\t     <RFALSE>)\n\t\t\t\t\t    (<AND <NOT .TAKEN>\n\t\t\t\t\t\t  <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t\t\t\t     <TELL \"[Taken]\" CR>)>)>)>>)\n\t       (T)>>"
  },
  "MANY-CHECK": {
   "name": "MANY-CHECK",
   "file": "parser.zil",
   "line": 1358,
   "endLine": 1379,
   "source": "<ROUTINE MANY-CHECK (\"AUX\" (LOSS <>) TMP)\n\t<COND (<AND <G? <GET ,P-PRSO ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC1> ,SMANY>>>\n\t       <SET LOSS 1>)\n\t      (<AND <G? <GET ,P-PRSI ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC2> ,SMANY>>>\n\t       <SET LOSS 2>)>\n\t<COND (.LOSS\n\t       <TELL \"[\" ,YOU-CANT \"use multiple \">\n\t       <COND (<EQUAL? .LOSS 2>\n\t\t      <TELL \"in\">)>\n\t       <TELL \"direct objects with \\\"\">\n\t       <SET TMP <GET ,P-ITBL ,P-VERBN>>\n\t       <COND (<ZERO? .TMP>\n\t\t      <TELL \"tell\">)\n\t\t     (<OR ,P-OFLAG ,P-MERGED>\n\t\t      <PRINTB <GET .TMP 0>>)\n\t\t     (T\n\t\t      <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>)>\n\t       <TELL \"\\\".]\" CR>\n\t       <RFALSE>)\n\t      (T)>>"
  },
  "ZMEMQ": {
   "name": "ZMEMQ",
   "file": "parser.zil",
   "line": 1381,
   "endLine": 1388,
   "source": "<ROUTINE ZMEMQ (ITM TBL \"OPTIONAL\" (SIZE -1) \"AUX\" (CNT 1))\n\t<COND (<NOT .TBL> <RFALSE>)>\n\t<COND (<NOT <L? .SIZE 0>> <SET CNT 0>)\n\t      (ELSE <SET SIZE <GET .TBL 0>>)>\n\t<REPEAT ()\n\t\t<COND (<EQUAL? .ITM <GET .TBL .CNT>>\n\t\t       <RETURN <REST .TBL <* .CNT 2>>>)\n\t\t      (<IGRTR? CNT .SIZE> <RFALSE>)>>>"
  },
  "ZMEMQB": {
   "name": "ZMEMQB",
   "file": "parser.zil",
   "line": 1390,
   "endLine": 1395,
   "source": "<ROUTINE ZMEMQB (ITM TBL SIZE \"AUX\" (CNT 0))\n\t<REPEAT ()\n\t\t<COND (<EQUAL? .ITM <GETB .TBL .CNT>>\n\t\t       <RTRUE>)\n\t\t      (<IGRTR? CNT .SIZE>\n\t\t       <RFALSE>)>>>"
  },
  "LIT?": {
   "name": "LIT?",
   "file": "parser.zil",
   "line": 1397,
   "endLine": 1420,
   "source": "<ROUTINE LIT? (RM \"OPTIONAL\" (RMBIT T) \"AUX\" OHERE (LIT <>))\n\t<COND (<AND ,DEAD\n\t\t    <EQUAL? ,WINNER ,ADVENTURER>>\n\t       <RTRUE>)>\n\t<SETG P-GWIMBIT ,ONBIT>\n\t<SET OHERE ,HERE>\n\t<SETG HERE .RM>\n\t<COND (<AND .RMBIT\n\t\t    <FSET? .RM ,ONBIT>>\n\t       <SET LIT T>)\n\t      (T\n\t       <PUT ,P-MERGE ,P-MATCHLEN 0>\n\t       <SETG P-TABLE ,P-MERGE>\n\t       <SETG P-SLOCBITS -1>\n\t       <COND (<EQUAL? .OHERE .RM>\n\t\t      <DO-SL ,WINNER 1 1>\n\t\t      <COND (<AND <NOT <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t\t\t  <IN? ,ADVENTURER .RM>>\n\t\t\t     <DO-SL ,ADVENTURER 1 1>)>)>\n\t       <DO-SL .RM 1 1>\n\t       <COND (<G? <GET ,P-TABLE ,P-MATCHLEN> 0> <SET LIT T>)>)>\n\t<SETG HERE .OHERE>\n\t<SETG P-GWIMBIT 0>\n\t.LIT>"
  },
  "THIS-IT?": {
   "name": "THIS-IT?",
   "file": "parser.zil",
   "line": 1434,
   "endLine": 1449,
   "source": "<ROUTINE THIS-IT? (OBJ TBL \"AUX\" SYNS)\n <COND (<FSET? .OBJ ,INVISIBLE>\n\t<RFALSE>)\n       (<AND ,P-NAM\n\t     <NOT <ZMEMQ ,P-NAM\n\t\t\t <SET SYNS <GETPT .OBJ ,P?SYNONYM>>\n\t\t\t <- </ <PTSIZE .SYNS> 2> 1>>>>\n\t<RFALSE>)\n       (<AND ,P-ADJ\n\t     <OR <NOT <SET SYNS <GETPT .OBJ ,P?ADJECTIVE>>>\n\t\t <NOT <ZMEMQB ,P-ADJ .SYNS <- <PTSIZE .SYNS> 1>>>>>\n\t<RFALSE>)\n       (<AND <NOT <ZERO? ,P-GWIMBIT>>\n\t     <NOT <FSET? .OBJ ,P-GWIMBIT>>>\n\t<RFALSE>)>\n <RTRUE>>"
  },
  "CELLAR-F": {
   "name": "CELLAR-F",
   "file": "south-of-res.zil",
   "line": 17,
   "endLine": 28,
   "source": "<ROUTINE CELLAR-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t \t<TELL\n\"You are in a dark, damp cellar with narrow passageways to the north and east.\nOn the west is the bottom of a steep metal ramp which is unclimbable.\">)\n\t       (<EQUAL? .RARG ,M-ENTER>\n\t \t<COND (<AND <FSET? ,TRAP-DOOR ,OPENBIT>\n\t\t     \t    <NOT <FSET? ,TRAP-DOOR ,TOUCHBIT>>>\n\t\t       <FCLEAR ,TRAP-DOOR ,OPENBIT>\n\t\t       <FSET ,TRAP-DOOR ,TOUCHBIT>\n\t\t       <TELL\n\"The trap door crashes shut, and you hear someone barring it.\" CR CR>)>)>>"
  },
  "UP-CHIMNEY-F": {
   "name": "UP-CHIMNEY-F",
   "file": "south-of-res.zil",
   "line": 44,
   "endLine": 51,
   "source": "<ROUTINE UP-CHIMNEY-F (\"AUX\" (F <FIRST? ,WINNER>))\n\t <COND (<L? <CCOUNT ,ADVENTURER> 3>\n\t\t<COND (<NOT <FSET? ,TRAP-DOOR ,OPENBIT>>\n\t\t       <FCLEAR ,TRAP-DOOR ,TOUCHBIT>)>\n\t\t,KITCHEN)\n\t       (T\n\t\t<TELL ,YOU-CANT \"fit with what you're carrying.\" CR>\n\t\t<RFALSE>)>>"
  },
  "PAINT-PSEUDO": {
   "name": "PAINT-PSEUDO",
   "file": "south-of-res.zil",
   "line": 53,
   "endLine": 55,
   "source": "<ROUTINE PAINT-PSEUDO ()\n\t <COND (<VERB? MUNG>\n\t\t<TELL \"Some paint chips away, revealing more paint.\" CR>)>>"
  },
  "PAINTING-F": {
   "name": "PAINTING-F",
   "file": "south-of-res.zil",
   "line": 69,
   "endLine": 71,
   "source": "<ROUTINE PAINTING-F ()\n\t <COND (<VERB? MUNG>\n\t\t<TELL \"Don't be a vandal!\" CR>)>>"
  },
  "TROLL-ROOM-F": {
   "name": "TROLL-ROOM-F",
   "file": "south-of-res.zil",
   "line": 92,
   "endLine": 96,
   "source": "<ROUTINE TROLL-ROOM-F (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-ENTER>\n\t\t     <IN? ,TROLL ,HERE>>\n\t\t<ENABLE <QUEUE I-FIGHT 2>>\n\t\t<SETG P-IT-OBJECT ,TROLL>)>>"
  },
  "TROLL-F": {
   "name": "TROLL-F",
   "file": "south-of-res.zil",
   "line": 108,
   "endLine": 122,
   "source": "<ROUTINE TROLL-F ()\n\t<COND (<VERB? TELL>\n\t\t<SETG P-CONT <>>\n\t\t<TELL \"He's not much of a conversationalist.\" CR>)\n\t      (<VERB? EXAMINE>\n\t       <TELL <GETP ,TROLL ,P?LDESC> CR>)\n\t      (<VERB? MUNG>\n\t       <TELL \"The troll laughs at your puny gesture.\" CR>)\n\t      (<VERB? THROW GIVE>\n\t       <TELL\n\"The troll grabs the \" D ,PRSO \" and, not having the most discriminating\ntastes, gleefully eats it.\" CR>\n\t       <REMOVE-CAREFULLY ,PRSO>)\n\t      (<VERB? LISTEN>\n\t       <TELL \"The troll is mumbling in a guttural tongue.\" CR>)>>"
  },
  "RESERVOIR-SOUTH-F": {
   "name": "RESERVOIR-SOUTH-F",
   "file": "south-of-res.zil",
   "line": 157,
   "endLine": 164,
   "source": "<ROUTINE RESERVOIR-SOUTH-F (RARG)\n\t<COND (<EQUAL? .RARG ,M-LOOK>\n\t       <TELL \"You are south of \">\n\t       <COND (,LOW-TIDE\n\t\t      <TELL ,FORMERLY-A-LAKE>)\n\t\t     (T\n\t\t      <TELL \"a large lake, far too deep and wide to be\">)>\n\t       <TELL \" crossed. Paths lead east, south, and southwest.\">)>>"
  },
  "DAM-F": {
   "name": "DAM-F",
   "file": "south-of-res.zil",
   "line": 178,
   "endLine": 196,
   "source": "<ROUTINE DAM-F (RARG)\n   \t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are atop Flood Control Dam #3, which was once quite a tourist attraction.\nThere are exits to the northeast and west, and a scramble down. The \">\n\t\t<COND (,LOW-TIDE\n\t\t       <TELL\n\"water level behind the dam is low; the gates are open and water rushes\nthrough the dam and downstream\">)\n\t\t      (T\n\t\t       <TELL\n\"sluice gates on the dam are closed. Behind the dam is a wide reservoir.\nWater is pouring over the top of the abandoned dam\">)>\n\t\t<TELL\n\". There is a control panel here, on which a large metal bolt is mounted.\nAbove the bolt is a small green plastic bubble\">\n\t\t<COND (,GATE-FLAG\n\t\t       <TELL \" which is glowing serenely\">)>\n\t\t<TELL \".\">)>>"
  },
  "MATCH-F": {
   "name": "MATCH-F",
   "file": "south-of-res.zil",
   "line": 212,
   "endLine": 255,
   "source": "<ROUTINE MATCH-F (\"AUX\" CNT)\n\t <COND (<AND <VERB? LAMP-ON BURN>\n\t\t     <EQUAL? ,PRSO ,MATCH>>\n\t\t<COND (<NOT <G? ,MATCH-COUNT 0>>\n\t\t       <TELL \"You have run out of matches.\" CR>\n\t\t       <RTRUE>)>\n\t\t<SETG MATCH-COUNT <- ,MATCH-COUNT 1>>\n\t\t<COND (<EQUAL? ,HERE ,DRAFTY-ROOM ,LADDER-ROOM>\n\t\t       <TELL \"A draft instantly blows the match out.\" CR>)\n\t\t      (T\n\t\t       <FSET ,MATCH ,FLAMEBIT>\n\t\t       <FSET ,MATCH ,ONBIT>\n\t\t       <ENABLE <QUEUE I-MATCH 2>>\n\t\t       <TELL \"One of the matches starts to burn.\" CR>\n\t\t       <COND (<NOT ,LIT>\n\t\t\t      <SETG LIT T>\n\t\t\t      <CRLF>\n\t\t\t      <V-LOOK>)>\n\t\t       <RTRUE>)>)\n\t       (<AND <VERB? LAMP-OFF>\n\t\t     <FSET? ,MATCH ,FLAMEBIT>>\n\t\t<FCLEAR ,MATCH ,FLAMEBIT>\n\t\t<FCLEAR ,MATCH ,ONBIT>\n\t\t<QUEUE I-MATCH 0>\n\t\t<TELL \"The match is out.\" CR>\n\t\t<NOW-DARK?>)\n\t       (<VERB? COUNT OPEN>\n\t        <SET CNT <- ,MATCH-COUNT 1>>\n\t\t<TELL \"You have \">\n\t\t<COND (<NOT <G? .CNT 0>>\n\t\t       <TELL \"no\">)\n\t\t      (T\n\t\t       <TELL N .CNT>)>\n\t\t<TELL \" match\">\n\t\t<COND (<NOT <1? .CNT>>\n\t\t       <TELL \"es\">)>\n\t\t<TELL ,PERIOD-CR>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (<FSET? ,MATCH ,ONBIT>\n\t\t       <TELL \"The match is burning.\">)\n\t\t      (T\n\t\t       <TELL\n\"The matchbook is uninteresting, except for what's written on it.\">)>\n\t\t<CRLF>)>>"
  },
  "I-MATCH": {
   "name": "I-MATCH",
   "file": "south-of-res.zil",
   "line": 257,
   "endLine": 261,
   "source": "<ROUTINE I-MATCH ()\n\t <TELL \"The match has gone out.\" CR>\n\t <FCLEAR ,MATCH ,FLAMEBIT>\n\t <FCLEAR ,MATCH ,ONBIT>\n\t <NOW-DARK?>>"
  },
  "BOLT-F": {
   "name": "BOLT-F",
   "file": "south-of-res.zil",
   "line": 301,
   "endLine": 320,
   "source": "<ROUTINE BOLT-F ()\n\t<COND (<VERB? TURN>\n\t       <COND (<EQUAL? ,PRSI ,WRENCH>\n\t\t      <COND (<AND ,GATE-FLAG\n\t\t\t\t  <NOT ,LOW-TIDE>>\n\t\t\t     <FCLEAR ,RESERVOIR-SOUTH ,TOUCHBIT>\n\t\t\t     <FSET ,RESERVOIR ,RLANDBIT>\n\t \t\t     <FCLEAR ,RESERVOIR ,NONLANDBIT>\n\t \t\t     <FCLEAR ,TRUNK ,INVISIBLE>\n\t \t\t     <SETG LOW-TIDE T>\n\t\t\t     <SETG SCORE <+ ,SCORE 20>>\n\t\t\t     <TELL\n\"The sluice gates open and water pours through the dam.\" CR>)\n\t\t\t    (T\n\t\t\t     <TELL \"The bolt won't budge.\" CR>)>)\n\t\t     (T\n\t\t      <TELL\n\"The bolt won't turn using the \" D ,PRSI ,PERIOD-CR>)>)\n\t      (<VERB? TAKE>\n\t       <TELL ,INTEGRAL-PART>)>>"
  },
  "BUBBLE-F": {
   "name": "BUBBLE-F",
   "file": "south-of-res.zil",
   "line": 330,
   "endLine": 332,
   "source": "<ROUTINE BUBBLE-F ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL ,INTEGRAL-PART>)>>"
  },
  "DAM-OBJECT-F": {
   "name": "DAM-OBJECT-F",
   "file": "south-of-res.zil",
   "line": 341,
   "endLine": 343,
   "source": "<ROUTINE DAM-OBJECT-F ()\n\t <COND (<VERB? OPEN CLOSE>\n\t\t<TELL \"Sounds reasonable, but this isn't how.\" CR>)>>"
  },
  "BUTTON-F": {
   "name": "BUTTON-F",
   "file": "south-of-res.zil",
   "line": 381,
   "endLine": 398,
   "source": "<ROUTINE BUTTON-F ()\n\t <COND (<VERB? PUSH>\n\t\t<COND (<EQUAL? ,PRSO ,RED-BUTTON>\n\t\t       <TELL \"The room lights \">\n\t\t       <COND (<FSET? ,HERE ,ONBIT>\n\t\t\t      <FCLEAR ,HERE ,ONBIT>\n\t\t\t      <TELL \"go off.\" CR>)\n\t\t\t     (T\n\t\t\t      <FSET ,HERE ,ONBIT>\n\t\t\t      <TELL \"come on.\" CR>)>)\n\t\t      (<EQUAL? ,PRSO ,BROWN-BUTTON>\n\t\t       <FCLEAR ,DAM ,TOUCHBIT>\n\t\t       <SETG GATE-FLAG <>>\n\t\t       <TELL \"Click.\" CR>)\n\t\t      (<EQUAL? ,PRSO ,YELLOW-BUTTON>\n\t\t       <FCLEAR ,DAM ,TOUCHBIT>\n\t\t       <SETG GATE-FLAG T>\n\t\t       <TELL \"Click.\" CR>)>)>>"
  },
  "INFLATABLE-BOAT-F": {
   "name": "INFLATABLE-BOAT-F",
   "file": "south-of-res.zil",
   "line": 436,
   "endLine": 453,
   "source": "<ROUTINE INFLATABLE-BOAT-F ()\n\t <COND (<VERB? INFLATE FILL>\n\t\t<COND (<NOT <IN? ,INFLATABLE-BOAT ,HERE>>\n\t\t       <MUST-BE-ON-GROUND \"in\">)\n\t\t      (<EQUAL? ,PRSI ,PUMP>\n\t\t       <MOVE ,INFLATED-BOAT ,HERE>\n\t\t       <SETG P-IT-OBJECT ,INFLATED-BOAT>\n\t\t       <TELL\n\"The boat inflates and appears seaworthy.\">\n\t\t       <COND (<NOT <FSET? ,BOAT-LABEL ,TOUCHBIT>>\n\t\t\t      <TELL\n\" A tan label is lying inside the boat.\">)>\n\t\t       <CRLF>\n\t\t       <REMOVE-CAREFULLY ,INFLATABLE-BOAT>)\n\t\t      (<EQUAL? ,PRSI ,LUNGS>\n\t\t       <TELL \"You haven't enough lung power.\" CR>)\n\t\t      (T\n\t\t       <TELL \"With a \" D ,PRSI \"!?!\" CR>)>)>>"
  },
  "INFLATED-BOAT-F": {
   "name": "INFLATED-BOAT-F",
   "file": "south-of-res.zil",
   "line": 477,
   "endLine": 516,
   "source": "<ROUTINE INFLATED-BOAT-F (\"OPTIONAL\" (RARG <>) \"AUX\" TMP)\n\t <COND (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<VERB? WALK>\n\t\t       <COND (<AND <EQUAL? ,HERE ,RIVER-1 ,RIVER-2 ,RIVER-3> \n\t\t\t\t <PRSO? ,P?LAND ,P?EAST ,P?WEST ,P?UP ,P?DOWN>>\n\t\t\t      <RFALSE>)\n\t\t\t     (<AND <EQUAL? ,HERE ,RESERVOIR>\n\t\t\t\t   <EQUAL? ,PRSO ,P?NORTH ,P?SOUTH>>\n\t\t\t      <RFALSE>)\n\t\t\t     (T\n\t\t\t      <TELL \"Read the tan label!\" CR>)>)\n\t\t      (<VERB? LAUNCH>\n\t\t       <COND (<OR <EQUAL? ,HERE ,RIVER-1 ,RIVER-2 ,RIVER-3>\n\t\t\t\t  <EQUAL? ,HERE ,RESERVOIR>>\n\t\t\t      <TELL ,ALREADY>)\n\t\t\t     (<EQUAL? <SET TMP <GO-NEXT ,RIVER-LAUNCH>> 1>\n\t\t\t      <ENABLE\n\t\t\t       <QUEUE I-RIVER <LKP ,HERE ,RIVER-SPEEDS>>>\n\t\t\t      <RTRUE>)\n\t\t\t     (<NOT <EQUAL? .TMP 2>>\n\t\t\t      <TELL ,YOU-CANT \"launch it here.\" CR>)\n\t\t\t     (T\n\t\t\t      <RTRUE>)>)>)\n\t       (.RARG\n\t\t<RFALSE>)\n\t       (<VERB? INFLATE FILL>\n\t\t<TELL \"Inflating it further might burst it.\" CR>)\n\t       (<VERB? DEFLATE>\n\t\t<COND (<IN? ,ADVENTURER ,INFLATED-BOAT>\n\t\t       <TELL \"You're in it!\" CR>)\n\t\t      (<NOT <IN? ,INFLATED-BOAT ,HERE>>\n\t\t       <MUST-BE-ON-GROUND \"de\">)\n\t\t      (T\n\t\t       <MOVE ,INFLATABLE-BOAT ,HERE>\n\t\t       <SETG P-IT-OBJECT ,INFLATABLE-BOAT>\n\t\t       <TELL \"The boat deflates.\" CR>\n\t\t       <REMOVE-CAREFULLY ,INFLATED-BOAT>)>)\n\t       (<VERB? CLIMB-ON>\n\t\t<PERFORM ,V?BOARD ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "MUST-BE-ON-GROUND": {
   "name": "MUST-BE-ON-GROUND",
   "file": "south-of-res.zil",
   "line": 518,
   "endLine": 519,
   "source": "<ROUTINE MUST-BE-ON-GROUND (STRING)\n\t <TELL ,YOU-CANT .STRING \"flate it unless it's on the ground.\" CR>>"
  },
  "WHITE-CLIFF-F": {
   "name": "WHITE-CLIFF-F",
   "file": "south-of-res.zil",
   "line": 539,
   "endLine": 541,
   "source": "<ROUTINE WHITE-CLIFF-F ()\n\t <COND (<VERB? CLIMB-DOWN CLIMB>\n\t\t<TELL \"The cliff is unclimbable.\" CR>)>>"
  },
  "DOME-ROOM-F": {
   "name": "DOME-ROOM-F",
   "file": "south-of-res.zil",
   "line": 554,
   "endLine": 571,
   "source": "<ROUTINE DOME-ROOM-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are at the periphery of a large dome, which forms the ceiling of another\nroom below. A wooden railing protects you from a precipitous drop.\">\n\t\t<COND (,DOME-FLAG\n\t\t       <TELL\n\" A rope hangs from the rail and ends about ten feet from the floor below.\">)>)\n\t       (<AND <EQUAL? .RARG ,M-ENTER>\n\t\t     ,DEAD>\n\t\t<MOVE ,WINNER ,TEMPLE>\n\t\t<SETG HERE ,TEMPLE>\n\t\t<TELL\n\"As you enter, a strong pull as if from a wind draws you over the\nrailing and down.\" CR>)\n\t       (<AND <EQUAL? .RARG ,M-BEG>\n\t\t     <VERB? LEAP>>\n\t\t<JIGS-UP \"You should have looked before you leaped.\">)>>"
  },
  "DOME-PSEUDO": {
   "name": "DOME-PSEUDO",
   "file": "south-of-res.zil",
   "line": 573,
   "endLine": 574,
   "source": "<ROUTINE DOME-PSEUDO ()\n\t <RFALSE>>"
  },
  "TEMPLE-F": {
   "name": "TEMPLE-F",
   "file": "south-of-res.zil",
   "line": 595,
   "endLine": 606,
   "source": "<ROUTINE TEMPLE-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \"This is a large domed temple. \">\n\t\t<COND (,DOME-FLAG\n\t\t       <TELL\n\"A piece of rope descends from the railing of the dome, about 20 feet\nabove, ending some five feet above your head. \">)>\n\t\t<TELL\n\"On the east wall is an ancient inscription, probably a prayer in a\nlong-forgotten language. Below the prayer, a stair leads down. The temple's\naltar is to the south. In the center of the room sits a white marble\npedestal.\">)>>"
  },
  "TORCH-F": {
   "name": "TORCH-F",
   "file": "south-of-res.zil",
   "line": 627,
   "endLine": 636,
   "source": "<ROUTINE TORCH-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"The torch is burning.\" CR>)\n\t       (<AND <VERB? POUR-ON>\n\t\t     <PRSO? ,WATER>>\n\t\t<TELL \"The water evaporates before it gets close.\" CR>)\n\t       (<AND <VERB? LAMP-OFF>\n\t\t     <FSET? ,PRSO ,ONBIT>>\n\t\t<TELL\n\"You nearly burn your hand trying to extinguish the flame.\" CR>)>>"
  },
  "BELL-F": {
   "name": "BELL-F",
   "file": "south-of-res.zil",
   "line": 646,
   "endLine": 650,
   "source": "<ROUTINE BELL-F ()\n\t <COND (<AND <VERB? RING>\n\t\t     <OR <NOT <EQUAL? ,HERE ,HADES>>\n\t\t\t ,HADES-FLAG>>\n\t\t<TELL \"Ding, dong.\" CR>)>>"
  },
  "SCEPTRE-F": {
   "name": "SCEPTRE-F",
   "file": "south-of-res.zil",
   "line": 697,
   "endLine": 719,
   "source": "<ROUTINE SCEPTRE-F ()\n\t <COND (<VERB? WAVE RAISE>\n\t\t<COND (<OR <EQUAL? ,HERE ,ARAGAIN-FALLS>\n\t\t\t   <EQUAL? ,HERE ,END-OF-RAINBOW>>\n\t\t       <COND (<NOT ,RAINBOW-FLAG>\n\t\t\t      <TELL\n\"The rainbow solidifies and is now walkable (the stairs\nand bannister are the giveaway).\">\n\t\t\t      <COND (<AND <EQUAL? ,HERE ,END-OF-RAINBOW>\n\t\t\t\t\t  <IN? ,POT-OF-GOLD ,END-OF-RAINBOW>\n\t\t\t\t\t  <FSET? ,POT-OF-GOLD ,INVISIBLE>>\n\t\t\t\t     <TELL\n\" A shimmering pot of gold appears at the end of the rainbow.\">)>\n\t\t\t      <FCLEAR ,POT-OF-GOLD ,INVISIBLE>\n\t\t\t      <SETG RAINBOW-FLAG T>\n\t\t\t      <CRLF>)\n\t\t\t     (T\n\t\t\t      <SETG RAINBOW-FLAG <>>\n\t\t\t      <TELL\n\"The rainbow has become somewhat run-of-the-mill.\" CR>)>)\n\t\t      (T\n\t\t       <TELL\n\"Dazzling colors briefly emanate from the sceptre.\" CR>)>)>>"
  },
  "ALTAR-F": {
   "name": "ALTAR-F",
   "file": "south-of-res.zil",
   "line": 735,
   "endLine": 738,
   "source": "<ROUTINE ALTAR-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-BEG>\n\t\t<SETG COFFIN-CURE <NOT <IN? ,COFFIN ,WINNER>>>\n\t\t<RFALSE>)>>"
  },
  "BLACK-BOOK-F": {
   "name": "BLACK-BOOK-F",
   "file": "south-of-res.zil",
   "line": 768,
   "endLine": 779,
   "source": "<ROUTINE BLACK-BOOK-F ()\n\t <COND (<VERB? OPEN>\n\t\t<TELL \"The book is already open.\" CR>)\n\t       (<VERB? CLOSE>\n\t\t<TELL \"Oddly, the book cannot be closed.\" CR>)\n\t       (<OR <VERB? TURN>\n\t\t    <AND <VERB? READ-PAGE>\n\t\t\t <EQUAL? ,PRSI ,INTNUM>\n\t\t\t <NOT <EQUAL? ,P-NUMBER 569>>>>\n\t\t<TELL\n\"Beside page 569, there is only one page with legible printing. It seems to be\nabout the banishment of evil using certain noises, lights, and prayers.\" CR>)>>"
  },
  "CANDLES-F": {
   "name": "CANDLES-F",
   "file": "south-of-res.zil",
   "line": 791,
   "endLine": 841,
   "source": "<ROUTINE CANDLES-F ()\n\t <COND (<NOT <FSET? ,CANDLES ,TOUCHBIT>>\n\t\t<ENABLE <INT I-CANDLES>>)>\n\t <COND (<EQUAL? ,CANDLES ,PRSI>\n\t\t<RFALSE>)\n\t       (<VERB? LAMP-ON BURN>\n\t\t<COND (<FSET? ,CANDLES ,RMUNGBIT>\n\t\t       <TELL\n\"Alas, there's not enough candle left to burn.\" CR>)\n\t\t      (<FSET? ,CANDLES ,ONBIT>\n\t\t       <TELL ,CANDLES-ARE \"already lit!\" CR>)\n\t\t      (<NOT ,PRSI>\n\t\t       <COND (<FSET? ,MATCH ,FLAMEBIT>\n\t\t\t      <TELL \"(with the match)\" CR>\n\t\t\t      <PERFORM ,V?LAMP-ON ,CANDLES ,MATCH>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <TELL \"With what?\" CR>\n\t\t\t      <RFATAL>)>)\n\t\t      (<AND <EQUAL? ,PRSI ,MATCH>\n\t\t\t    <FSET? ,MATCH ,ONBIT>>\n\t\t       <FSET ,CANDLES ,ONBIT>\n\t\t       <ENABLE <INT I-CANDLES>>\n\t\t       <TELL ,CANDLES-ARE \"are now lit.\" CR>)\n\t\t      (<EQUAL? ,PRSI ,TORCH>\n\t\t       <TELL \"The torch's heat vaporizes the candles.\" CR>\n\t\t       <REMOVE-CAREFULLY ,CANDLES>)\n\t\t      (T\n\t\t       <TELL <PICK-ONE ,YUKS> CR>)>) \n\t       (<VERB? COUNT>\n\t\t<TELL \"How many in a pair? Don't tell me, I'll get it...\" CR>)\n\t       (<VERB? LAMP-OFF>\n\t\t<DISABLE <INT I-CANDLES>>\n\t\t<COND (<FSET? ,CANDLES ,ONBIT>\n\t\t       <FCLEAR ,CANDLES ,ONBIT>\n\t\t       <FSET ,CANDLES ,TOUCHBIT>\n\t\t       <TELL \"The flame is extinguished.\" CR>\n\t\t       <NOW-DARK?>)\n\t\t      (T\n\t\t       <TELL ,CANDLES-ARE \"not lighted.\" CR>)>)\n\t       (<AND <VERB? PUT>\n\t\t     <FSET? ,PRSI ,BURNBIT>>\n\t\t<PERFORM ,V?BURN ,PRSI ,CANDLES>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL ,CANDLES-ARE>\n\t\t<COND (<FSET? ,CANDLES ,ONBIT>\n\t\t       <TELL \"burning.\">)\n\t\t      (T\n\t\t       <TELL \"out.\">)>\n\t\t<CRLF>)>>"
  },
  "WINDY-CAVE-F": {
   "name": "WINDY-CAVE-F",
   "file": "south-of-res.zil",
   "line": 849,
   "endLine": 857,
   "source": "<ROUTINE WINDY-CAVE-F (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-END>\n\t\t     <IN? ,CANDLES ,WINNER>\n\t\t     <FSET? ,CANDLES ,ONBIT>\n\t\t     <PROB 50 80>>\n\t\t<DISABLE <INT I-CANDLES>>\n\t\t<FCLEAR ,CANDLES ,ONBIT>\n\t\t<TELL \"A gust of wind blows out your candles!\" CR>\n\t\t<NOW-DARK?>)>>"
  },
  "I-CANDLES": {
   "name": "I-CANDLES",
   "file": "south-of-res.zil",
   "line": 859,
   "endLine": 864,
   "source": "<ROUTINE I-CANDLES (\"AUX\" TICK (TBL <VALUE CANDLE-TABLE>))\n\t <FSET ,CANDLES ,TOUCHBIT>\n\t <ENABLE <QUEUE I-CANDLES <SET TICK <GET .TBL 0>>>>\n\t <LIGHT-INT ,CANDLES .TBL .TICK>\n\t <COND (<NOT <0? .TICK>>\n\t\t<SETG CANDLE-TABLE <REST .TBL 4>>)>>"
  },
  "ENTRANCE-TO-HADES-F": {
   "name": "ENTRANCE-TO-HADES-F",
   "file": "south-of-res.zil",
   "line": 914,
   "endLine": 972,
   "source": "<ROUTINE ENTRANCE-TO-HADES-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are outside a large gate inscribed, \\\"Abandon hope all ye who enter\nhere!\\\" The gate is open; beyond you can see a desolation, with a pile of\nmangled bodies in one corner. Thousands of voices, lamenting some hideous\nfate, can be heard.\">\n\t\t<COND (<AND <NOT ,HADES-FLAG>\n\t\t\t    <NOT ,DEAD>>\n\t\t       <TELL\n\" The gate is barred by evil spirits, who jeer at your attempts to pass.\">)>)\n\t       (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<VERB? EXORCISE>\n\t\t       <COND (,HADES-FLAG\n\t\t\t      <TELL ,ALREADY CR>)\n\t\t\t     (<AND <HELD? ,BELL>\n\t\t\t\t   <HELD? ,BLACK-BOOK>\n\t\t\t\t   <HELD? ,CANDLES>>\n\t\t\t      <TELL ,PERFORM-CEREMONY>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"You're not equipped for an exorcism.\" CR>)>)\n\t\t      (<AND <NOT ,HADES-FLAG>\n\t\t\t    <VERB? RING>\n\t\t\t    <EQUAL? ,PRSO ,BELL>>\n\t\t       <SETG XB T>\n\t\t       <ENABLE <QUEUE I-XB 6>>\n\t\t       <TELL\n\"A deep peal issues from the bell. The wraiths stop jeering and an expression\nof long-forgotten terror takes shape on their ashen faces.\">\n\t\t       <COND (<IN? ,CANDLES ,WINNER>\n\t\t\t      <MOVE ,CANDLES ,HERE>\n\t\t\t      <FCLEAR ,CANDLES ,ONBIT>\n\t\t\t      <DISABLE <INT I-CANDLES>>\n\t\t\t      <TELL\n\" In your confusion, the candles drop to the ground (and they are out).\">)>\n\t\t       <CRLF>)\n\t\t      (<AND ,XC\n\t\t\t    <VERB? READ>\n\t\t\t    <EQUAL? ,PRSO ,BLACK-BOOK>\n\t\t\t    <NOT ,HADES-FLAG>>\n\t\t       <REMOVE ,GHOSTS>\n\t\t       <SETG HADES-FLAG T>\n\t\t       <DISABLE <INT I-XC>>\n\t\t       <TELL\n\"The prayer reverberates in a deafening confusion. As the last word fades, a\nheart-stopping scream fills the cavern, and the spirits, sensing a greater\npower, flee through the walls.\" CR>)>)\n\t       (<EQUAL? .RARG ,M-END>\n\t\t<COND (<AND ,XB\n\t\t\t    <IN? ,CANDLES ,WINNER>\n\t\t\t    <FSET? ,CANDLES ,ONBIT>\n\t\t\t    <NOT ,XC>>\n\t\t       <SETG XC T>\n\t\t       <DISABLE <INT I-XB>>\n\t\t       <ENABLE <QUEUE I-XC 3>>\n\t\t       <TELL\n\"The flames flicker wildly and the earth trembles beneath your feet. The\nspirits cower at your unearthly power.\" CR>)>)>>"
  },
  "GATE-PSEUDO": {
   "name": "GATE-PSEUDO",
   "file": "south-of-res.zil",
   "line": 974,
   "endLine": 980,
   "source": "<ROUTINE GATE-PSEUDO ()\n\t <COND (<VERB? THROUGH>\n\t\t<DO-WALK ,P?IN>)\n\t       (T\n\t\t<TELL\n\"The gate is protected by an invisible force. It makes your teeth ache\nto touch it.\" CR>)>>"
  },
  "GHOSTS-F": {
   "name": "GHOSTS-F",
   "file": "south-of-res.zil",
   "line": 990,
   "endLine": 998,
   "source": "<ROUTINE GHOSTS-F ()\n\t <COND (<VERB? TELL>\n\t\t<TELL \"The spirits jeer loudly and ignore you.\" CR>\n\t\t<SETG P-CONT <>>)\n\t       (<VERB? EXORCISE>\n\t\t<TELL ,PERFORM-CEREMONY>)\n\t       (<AND <VERB? ATTACK MUNG>\n\t\t     <EQUAL? ,PRSO ,GHOSTS>>\n\t\t<TELL ,YOU-CANT \"attack a spirit with material objects!\" CR>)>>"
  },
  "I-XB": {
   "name": "I-XB",
   "file": "south-of-res.zil",
   "line": 1004,
   "endLine": 1010,
   "source": "<ROUTINE I-XB ()\n\t <OR ,XC\n\t     <AND <EQUAL? ,HERE ,ENTRANCE-TO-HADES>\n\t\t  <TELL\n\"The tension of this ceremony is broken, and the wraiths, amused but\nshaken at your clumsy attempt, resume their hideous jeering.\" CR>>>\n\t <SETG XB <>>>"
  },
  "I-XC": {
   "name": "I-XC",
   "file": "south-of-res.zil",
   "line": 1012,
   "endLine": 1014,
   "source": "<ROUTINE I-XC ()\n\t <SETG XC <>>\n\t <I-XB>>"
  },
  "BODIES-F": {
   "name": "BODIES-F",
   "file": "south-of-res.zil",
   "line": 1036,
   "endLine": 1041,
   "source": "<ROUTINE BODIES-F ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL \"Yuk!\" CR>)\n\t       (<VERB? MUNG BURN ATTACK>\n\t\t<JIGS-UP\n\"A voice booms from the darkness, \\\"Your disrespect costs you your life!\\\"\">)>>"
  },
  "BUOY-F": {
   "name": "BUOY-F",
   "file": "south-of-res.zil",
   "line": 1104,
   "endLine": 1113,
   "source": "<ROUTINE BUOY-F ()\n\t <COND (<VERB? OPEN>\n\t\t<SCORE-OBJ ,EMERALD>\n\t\t<RFALSE>)\n\t       (<AND <VERB? TAKE>\n\t\t     <NOT <IN? ,BUOY ,ADVENTURER>>\n\t\t     <IN? ,EMERALD ,BUOY>>\n\t\t<MOVE ,BUOY ,ADVENTURER>\n\t        <TELL\n\"As you take the buoy, you notice something odd about the feel of it.\" CR>)>>"
  },
  "SAND-F": {
   "name": "SAND-F",
   "file": "south-of-res.zil",
   "line": 1157,
   "endLine": 1172,
   "source": "<ROUTINE SAND-F ()\n\t <COND (<AND <VERB? DIG>\n\t\t     <PRSI? ,SHOVEL>>\n\t\t<SETG BEACH-DIG <+ 1 ,BEACH-DIG>>\n\t\t<COND (<G? ,BEACH-DIG 3>\n\t\t       <SETG BEACH-DIG -1>\n\t\t       <COND (<IN? ,SCARAB ,HERE>\n\t\t\t      <FSET ,SCARAB ,INVISIBLE>)>\n\t\t       <JIGS-UP \"The hole collapses, smothering you.\">)\n\t\t      (<EQUAL? ,BEACH-DIG 3>\n\t\t       <COND (<FSET? ,SCARAB ,INVISIBLE>\n\t\t\t      <SETG P-IT-OBJECT ,SCARAB>\n\t\t\t      <FCLEAR ,SCARAB ,INVISIBLE>\n\t\t\t      <TELL \"You spot a scarab in the sand.\" CR>)>)\n\t\t      (T\n\t\t       <TELL <GET ,BDIGS ,BEACH-DIG> CR>)>)>>"
  },
  "ARAGAIN-FALLS-F": {
   "name": "ARAGAIN-FALLS-F",
   "file": "south-of-res.zil",
   "line": 1204,
   "endLine": 1212,
   "source": "<ROUTINE ARAGAIN-FALLS-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are near the top of Aragain Falls. The only path leads north. A \">\n\t\t<COND (,RAINBOW-FLAG\n\t\t       <TELL \"solid\">)\n\t\t      (T\n\t\t       <TELL \"beautiful\">)>\n\t\t<TELL \" rainbow spans the falls to the west.\">)>>"
  },
  "RIVER-F": {
   "name": "RIVER-F",
   "file": "south-of-res.zil",
   "line": 1222,
   "endLine": 1239,
   "source": "<ROUTINE RIVER-F ()\n\t <COND (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSI ,RIVER>>\n\t\t<COND (<EQUAL? ,PRSO ,ME>\n\t\t       <PERFORM ,V?THROUGH ,RIVER>\n\t\t       <RTRUE>)\n\t\t      (<EQUAL? ,PRSO ,INFLATED-BOAT>\n\t\t       <TELL \"Read the tan label!\" CR>)\n\t\t      (<FSET? ,PRSO ,BURNBIT>\n\t\t       <TELL \"The current sweeps it away.\" CR>\n\t\t       <REMOVE-CAREFULLY ,PRSO>)\n\t\t      (T\n\t\t       <TELL \"The \" D ,PRSO \" sinks into the water.\" CR>\n\t\t       <REMOVE-CAREFULLY ,PRSO>)>)\n\t       (<VERB? LEAP THROUGH>\n\t\t<TELL\n\"The river is wide and dangerous, with swift currents and hidden rocks. You\ndecide to forgo your swim.\" CR>)>>"
  },
  "I-RIVER": {
   "name": "I-RIVER",
   "file": "south-of-res.zil",
   "line": 1254,
   "endLine": 1264,
   "source": "<ROUTINE I-RIVER (\"AUX\" RM)\n\t <COND (<NOT <EQUAL? ,HERE ,RIVER-1 ,RIVER-2 ,RIVER-3>>\n\t\t<DISABLE <INT I-RIVER>>)\n\t       (<SET RM <LKP ,HERE ,RIVER-NEXT>>\n\t\t<ENABLE <QUEUE I-RIVER <LKP ,HERE ,RIVER-SPEEDS>>>\n\t\t<TELL \"The current carries you downstream.\" CR CR>\n\t\t<GOTO .RM>)\n\t       (T\n\t\t<JIGS-UP\n\"Unfortunately, the raft provides little protection from the boulders one\nmeets at the bottom of waterfalls. Including this one.\">)>>"
  },
  "GO-NEXT": {
   "name": "GO-NEXT",
   "file": "south-of-res.zil",
   "line": 1268,
   "endLine": 1273,
   "source": "<ROUTINE GO-NEXT (TBL \"AUX\" VAL)\n\t <COND (<SET VAL <LKP ,HERE .TBL>>\n\t\t<COND (<NOT <GOTO .VAL>>\n\t\t       2)\n\t\t      (T\n\t\t       1)>)>>"
  },
  "LKP": {
   "name": "LKP",
   "file": "south-of-res.zil",
   "line": 1275,
   "endLine": 1283,
   "source": "<ROUTINE LKP (ITM TBL \"AUX\" (CNT 0) (LEN <GET .TBL 0>))\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> .LEN>\n\t\t\t<RFALSE>)\n\t\t       (<EQUAL? <GET .TBL .CNT> .ITM>\n\t\t\t<COND (<EQUAL? .CNT .LEN>\n\t\t\t       <RFALSE>)\n\t\t\t      (T\n\t\t\t       <RETURN <GET .TBL <+ .CNT 1>>>)>)>>>"
  },
  "THIEF-F": {
   "name": "THIEF-F",
   "file": "thief.zil",
   "line": 17,
   "endLine": 38,
   "source": "<ROUTINE THIEF-F ()\n\t <COND (<VERB? TELL LISTEN>\n\t\t<SETG P-CONT <>>\n\t\t<TELL \"The thief is a strong, silent type.\" CR>)\n\t       (<AND <VERB? THROW>\n\t\t     <FSET? ,PRSO ,WEAPONBIT>>\n\t\t<MOVE ,PRSO ,HERE>\n\t\t<TELL\n\"You missed hitting the thief, but you suceeded in angering him.\" CR>)\n\t       (<AND <VERB? THROW GIVE>\n\t\t     <EQUAL? ,PRSI ,THIEF>>\n\t\t<MOVE ,PRSO ,THIEF>\n\t\t<TELL \"The thief \">\n\t\t<COND (<FSET? ,PRSO ,TREASUREBIT>\n\t\t       <TELL\n\"is taken aback by your unexpected generosity, but \">)>\n\t\t<TELL\n\"puts the \" D ,PRSO \" in his bag and thanks you politely.\" CR>)\n\t       (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<TELL\n\"The thief carries a large bag and a vicious stiletto, whose blade is aimed\nmenacingly in your direction.\" CR>)>>"
  },
  "I-THIEF": {
   "name": "I-THIEF",
   "file": "thief.zil",
   "line": 40,
   "endLine": 94,
   "source": "<ROUTINE I-THIEF (\"AUX\" X (THIEF-LOC <LOC ,THIEF>)\n\t\t  ROBJ HERE? (ONCE <>) (FLG <>))\n   <PROG ()\n     <COND (<SET HERE? <NOT <FSET? ,THIEF ,INVISIBLE>>>\n\t    <SET THIEF-LOC <LOC ,THIEF>>)>\n     <COND\n      (<AND <EQUAL? .THIEF-LOC ,THIEFS-LAIR>\n\t    <NOT <EQUAL? .THIEF-LOC ,HERE>>>\n       <DEPOSIT-BOOTY ,THIEFS-LAIR> ;\"silent\"\n       <COND (.HERE?\n\t      <FSET ,THIEF ,INVISIBLE>\n\t      <SET X <FIRST? ,THIEFS-LAIR>>\n\t      <REPEAT ()\n\t\t <COND (<NOT .X>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<FCLEAR .X ,INVISIBLE>)>\n\t\t <SET X <NEXT? .X>>>\n\t      <SET HERE? <>>)>)\n      (<AND <EQUAL? .THIEF-LOC ,HERE>\n\t    <NOT <FSET? .THIEF-LOC ,ONBIT>>\n\t    <NOT <IN? ,TROLL ,HERE>>>\n       <COND (<THIEF-VS-ADVENTURER .HERE?>\n\t      <RTRUE>)>\n       <COND (<FSET? ,THIEF ,INVISIBLE>\n\t      <SET HERE? <>>)>)\n      (T\n       <COND (<AND <IN? ,THIEF .THIEF-LOC>\n\t\t   <NOT <FSET? ,THIEF ,INVISIBLE>>> ;\"Leave if victim left\"\n\t      <FSET ,THIEF ,INVISIBLE>\n\t      <SET HERE? <>>)>\n       <COND (<FSET? .THIEF-LOC ,TOUCHBIT> ;\"Hack the adventurer's belongings\"\n\t      <ROB .THIEF-LOC ,THIEF T>\n\t      <SET FLG <COND (<AND <FSET? .THIEF-LOC ,MAZEBIT>\n\t\t\t\t   <FSET? ,HERE ,MAZEBIT>>\n\t\t\t      <ROB-MAZE .THIEF-LOC>)\n\t\t\t     (T\n\t\t\t      <STEAL-JUNK .THIEF-LOC>)>>)>)>\n     <COND (<AND <SET ONCE <NOT .ONCE>>\n\t\t <NOT .HERE?>> ;\"Move to next room, and hack.\"\n\t    <REPEAT ()\n\t\t    <COND (<AND .THIEF-LOC\n\t\t\t\t<SET .THIEF-LOC <NEXT? .THIEF-LOC>>>)\n\t\t\t  (T\n\t\t\t   <SET THIEF-LOC <FIRST? ,ROOMS>>)>\n\t\t    <COND (<AND <NOT <FSET? .THIEF-LOC ,SACREDBIT>>\n\t\t\t\t<FSET? .THIEF-LOC ,RLANDBIT>>\n\t\t\t   <MOVE ,THIEF .THIEF-LOC>\n\t\t\t   <FSET ,THIEF ,INVISIBLE>\n\t\t\t   <SETG THIEF-HERE <>>\n\t\t\t   <RETURN>)>>\n\t    <AGAIN>)>>\n   <COND (<NOT <EQUAL? .THIEF-LOC ,THIEFS-LAIR>>\n\t  <DROP-JUNK .THIEF-LOC>)>\n   .FLG>"
  },
  "DROP-JUNK": {
   "name": "DROP-JUNK",
   "file": "thief.zil",
   "line": 96,
   "endLine": 112,
   "source": "<ROUTINE DROP-JUNK (RM \"AUX\" X N (FLG <>))\n\t <SET X <FIRST? ,THIEF>>\n\t <REPEAT ()\n\t\t <COND (<NOT .X>\n\t\t\t<RETURN .FLG>)>\n\t\t <SET N <NEXT? .X>>\n\t\t <COND (<AND <NOT <FSET? .X ,TREASUREBIT>>\n\t\t\t     <NOT <EQUAL? .X ,STILETTO ,LARGE-BAG>>\n\t\t\t     <PROB 30 T>>\n\t\t\t<FCLEAR .X ,INVISIBLE>\n\t\t\t<MOVE .X .RM>\n\t\t\t<COND (<AND <NOT .FLG>\n\t\t\t\t    <EQUAL? .RM ,HERE>>\n\t\t\t       <TELL\n\"The robber rummages through his bag and drops a few valueless items.\" CR>\n\t\t\t       <SET FLG T>)>)>\n\t\t <SET X .N>>>"
  },
  "STEAL-JUNK": {
   "name": "STEAL-JUNK",
   "file": "thief.zil",
   "line": 114,
   "endLine": 135,
   "source": "<ROUTINE STEAL-JUNK (RM \"AUX\" X N)\n\t <SET X <FIRST? .RM>>\n\t <REPEAT ()\n\t\t <COND (<NOT .X>\n\t\t\t<RFALSE>)>\n\t\t <SET N <NEXT? .X>>\n\t\t <COND (<AND <FSET? .X ,TREASUREBIT>\n\t\t\t     <FSET? .X ,TAKEBIT>\n\t\t\t     <NOT <FSET? .X ,SACREDBIT>>\n\t\t\t     <NOT <FSET? .X ,INVISIBLE>>\n\t\t\t     <PROB 10 T>>\n\t\t\t<MOVE .X ,THIEF>\n\t\t\t<FSET .X ,TOUCHBIT>\n\t\t\t<FSET .X ,INVISIBLE>\n\t\t\t<COND (<EQUAL? .X ,ROPE>\n\t\t\t       <SETG DOME-FLAG <>>)>\n\t\t\t<COND (<EQUAL? .RM ,HERE>\n\t\t\t       <TELL \"The \" D .X \" has vanished!\" CR>\n\t\t\t       <RTRUE>)\n\t\t\t      (T\n\t\t\t       <RFALSE>)>)>\n\t\t <SET X .N>>>"
  },
  "ROB": {
   "name": "ROB",
   "file": "thief.zil",
   "line": 137,
   "endLine": 156,
   "source": "<ROUTINE ROB (WHAT WHERE JUST-TREASURES \"AUX\" N X (ROBBED <>))\n\t <SET X <FIRST? .WHAT>>\n\t <REPEAT ()\n\t\t <COND (<NOT .X>\n\t\t\t<RETURN>)>\n\t\t <SET N <NEXT? .X>>\n\t\t <COND (<FSET? .X ,INVISIBLE>\n\t\t\tT)\n\t\t       (<AND .JUST-TREASURES\n\t\t\t     <OR <FSET? .X ,SACREDBIT>\n\t\t\t\t <NOT <FSET? .X ,TREASUREBIT>>>>\n\t\t\tT)\n\t\t       (T\n\t\t\t<MOVE .X .WHERE>\n\t\t\t<FSET .X ,TOUCHBIT>\n\t\t\t<SET ROBBED T>\n\t\t\t<COND (<EQUAL? .WHERE ,THIEF>\n\t\t\t       <FSET .X ,INVISIBLE>)>)>\n\t\t <SET X .N>>\n\t <RETURN .ROBBED>>"
  },
  "LARGE-BAG-F": {
   "name": "LARGE-BAG-F",
   "file": "thief.zil",
   "line": 166,
   "endLine": 173,
   "source": "<ROUTINE LARGE-BAG-F ()\n\t <COND (<VERB? TAKE EXAMINE>\n\t\t<TELL \"It will be taken over the thief's dead body.\" CR>)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSI ,LARGE-BAG>>\n\t\t<TELL ,GOOD-TRICK>)\n\t       (<VERB? OPEN CLOSE LOOK-INSIDE>\n\t\t<TELL ,GOOD-TRICK>)>>  "
  },
  "THIEF-VS-ADVENTURER": {
   "name": "THIEF-VS-ADVENTURER",
   "file": "thief.zil",
   "line": 187,
   "endLine": 244,
   "source": "<ROUTINE THIEF-VS-ADVENTURER (HERE? \"AUX\" ROBBED? (WINNER-ROBBED? <>))\n  <COND (<AND <NOT ,DEAD>\n\t      <EQUAL? ,HERE ,THIEFS-LAIR>>)\n        (<NOT ,THIEF-HERE>\n         <COND (<AND <NOT ,DEAD>\n\t\t     <NOT .HERE?>\n\t\t     <PROB 30>>\n\t\t<FCLEAR ,THIEF ,INVISIBLE>\n\t\t<SETG THIEF-HERE T>\n\t\t<ENABLE <QUEUE I-FIGHT 2>>\n\t\t<TELL\n\"Someone carrying a large bag is casually leaning against the wall. It is\nclear that the bag will be taken only over his dead body.\" CR>\n\t\t<RTRUE>)\n\t       (<AND .HERE?\n\t\t     <PROB 30>>\n\t        <FSET ,THIEF ,INVISIBLE>\n\t\t<TELL ,THIEF-LEFT-DISGUSTED>\n\t        <RTRUE>)\n\t       (<PROB 70>\n\t\t<RFALSE>)\n\t       (<NOT ,DEAD>\n\t\t<COND (<ROB ,HERE ,THIEF T>\n\t\t       <SET ROBBED? ,HERE>)\n\t\t      (<ROB ,WINNER ,THIEF T>\n\t\t       <SET ROBBED? ,ADVENTURER>)>\n\t\t<SETG THIEF-HERE T>\n\t        <COND (<AND .ROBBED?\n\t\t\t    <NOT .HERE?>>\n\t\t       <TELL\n\"A suspicious-looking individual with a large bag just wandered through and\nquietly abstracted some valuables from \">\n\t\t       <COND (<EQUAL? .ROBBED? ,HERE>\n\t\t\t      <TELL \"the room\">)\n\t\t\t     (T\n\t\t\t      <TELL \"your possession\">)>\n\t\t       <TELL ,PERIOD-CR>\n\t\t       <NOW-DARK?>)\n\t\t      (.HERE?\n\t\t       <FSET ,THIEF ,INVISIBLE>\n\t\t       <SET HERE? <>>\n\t\t       <THIEF-ROBBED-AND-LEFT .ROBBED?>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL\n\"A \\\"lean and hungry\\\" gentleman just wandered through, carrying a\nlarge bag. \" ,THIEF-LEFT-DISGUSTED>\n\t\t       <RTRUE>)>)>)\n\t(.HERE? ;\"Here, already announced.\"\n\t <COND (<PROB 30>\n\t\t<COND (<ROB ,HERE ,THIEF T>\n\t\t       <SET ROBBED? ,HERE>)\n\t\t      (<ROB ,WINNER ,THIEF T>\n\t\t       <SET ROBBED? ,ADVENTURER>)>\n\t\t<FSET ,THIEF ,INVISIBLE>\n\t\t<SET HERE? <>>\n\t\t<THIEF-ROBBED-AND-LEFT .ROBBED?>)>)>\n       <RFALSE>>"
  },
  "THIEF-ROBBED-AND-LEFT": {
   "name": "THIEF-ROBBED-AND-LEFT",
   "file": "thief.zil",
   "line": 246,
   "endLine": 256,
   "source": "<ROUTINE THIEF-ROBBED-AND-LEFT (ROBBED?)\n\t <COND (.ROBBED?\n\t\t<TELL \"The thief just left. You may not have noticed that he \">\n\t\t<COND (<EQUAL? .ROBBED? ,ADVENTURER>\n\t\t       <TELL \"robbed you blind first\">)\n\t\t      (T\n\t\t       <TELL \"appropriated the valuables in the room\">)>\n\t\t<TELL ,PERIOD-CR>\n\t\t<NOW-DARK?>)\n\t       (T\n\t\t<TELL ,THIEF-LEFT-DISGUSTED>)>>"
  },
  "DEPOSIT-BOOTY": {
   "name": "DEPOSIT-BOOTY",
   "file": "thief.zil",
   "line": 258,
   "endLine": 269,
   "source": "<ROUTINE DEPOSIT-BOOTY (RM \"AUX\" X N (DROPPED-A-TREASURE <>))\n\t <SET X <FIRST? ,THIEF>>\n\t <REPEAT ()\n\t\t <COND (<NOT .X>\n\t\t\t<RETURN>)>\n\t\t <SET N <NEXT? .X>>\n\t\t <COND (<FSET? .X ,TREASUREBIT>\n\t\t\t<MOVE .X .RM>\n\t\t\t<FCLEAR .X ,INVISIBLE>\n\t\t\t<SET DROPPED-A-TREASURE T>)>\n\t\t <SET X .N>>\n\t .DROPPED-A-TREASURE>"
  },
  "ROB-MAZE": {
   "name": "ROB-MAZE",
   "file": "thief.zil",
   "line": 271,
   "endLine": 288,
   "source": "<ROUTINE ROB-MAZE (RM \"AUX\" X N)\n\t <SET X <FIRST? .RM>>\n\t <REPEAT ()\n\t\t <COND (<NOT .X>\n\t\t\t<RFALSE>)>\n\t\t <SET N <NEXT? .X>>\n\t\t <COND (<AND <FSET? .X ,TAKEBIT>\n\t\t\t     <NOT <FSET? .X ,INVISIBLE>>\n\t\t\t     <PROB 40>>\n\t\t\t<TELL\n\"In the distance, someone says, \\\"My, I wonder what this\nfine \" D .X \" is doing here.\\\"\" CR>\n\t\t\t<COND (<PROB 60 80>\n\t\t\t       <MOVE .X ,THIEF>\n\t\t\t       <FSET .X ,TOUCHBIT>\n\t\t\t       <FSET .X ,INVISIBLE>)>\n\t\t\t<RETURN>)>\n\t\t <SET X .N>>>"
  },
  "HERO-BLOW": {
   "name": "HERO-BLOW",
   "file": "thief.zil",
   "line": 292,
   "endLine": 325,
   "source": "<ROUTINE HERO-BLOW (\"AUX\" VIL-STR HIT-PROB)\n\t <SET VIL-STR <GETP ,PRSO ,P?STRENGTH>>\n\t <COND (<PRSO? ,TROLL>\n\t\t<SET HIT-PROB 45>)\n\t       (T\n\t \t<SET HIT-PROB <+ 15 </ ,SCORE 4>>>)>\n\t <COND (<PROB .HIT-PROB>\n\t\t<COND (<PROB 50> ;\"serious blow\"\n\t\t       <SET VIL-STR <- .VIL-STR 2>>\n\t\t       <COND (<L? .VIL-STR 0>\n\t\t\t      <KILL-VILLAIN>)\n\t\t\t     (<PROB 50>\n\t\t\t      <TELL\n\"The \" D ,PRSO \" receives a deep gash in his side.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"Slash! Your \" D ,PRSI \" connects! This could be serious!\" CR>)>)\n\t\t      (T ;\"light blow\"\n\t\t       <SET VIL-STR <- .VIL-STR 1>>\n\t\t       <COND (<L? .VIL-STR 0>\n\t\t\t      <KILL-VILLAIN>)\n\t\t\t     (<PROB 50>\n\t\t\t      <TELL\n\"The \" D ,PRSO \" is struck on the arm; blood begins to trickle down.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"The blow lands, making a shallow gash in the \" D ,PRSO \"'s arm!\" CR>)>)>\n\t\t<PUTP ,PRSO ,P?STRENGTH .VIL-STR>)\n\t       (<PROB 50>\n\t\t<TELL\n\"A good slash, but it misses the \" D ,PRSO \" by a mile.\" CR>)\n\t       (T\n\t\t<TELL\n\"You charge, but the \" D ,PRSO \" jumps nimbly aside.\" CR>)>>"
  },
  "KILL-VILLAIN": {
   "name": "KILL-VILLAIN",
   "file": "thief.zil",
   "line": 327,
   "endLine": 355,
   "source": "<ROUTINE KILL-VILLAIN (\"AUX\" X)\n\t <TELL\n\"The fatal blow strikes the \" D ,PRSO \" square in the heart: He dies. As the \"\nD ,PRSO \" breathes his last breath, a cloud of sinister black fog envelops\nhim; when it lifts, the carcass is gone.\" CR>\n\t <REMOVE ,PRSO>\n\t <COND (<PRSO? ,TROLL>\n\t\t<PUTP ,TROLL ,P?STRENGTH 2> ;\"to stop I-CURE\"\n\t        <MOVE ,AXE ,HERE>\n\t        <FCLEAR ,AXE ,NDESCBIT>\n\t        <FSET ,AXE ,WEAPONBIT>\n\t\t<FSET ,AXE ,TAKEBIT>\n\t        <SETG TROLL-FLAG T>\n\t\t<SETG SCORE <+ ,SCORE 10>>)\n\t       (T\n\t\t<PUTP ,THIEF ,P?STRENGTH 5> ;\"to stop I-CURE\"\n\t        <MOVE ,STILETTO ,HERE>\n\t\t<FCLEAR ,STILETTO ,NDESCBIT>\n\t\t<FSET ,STILETTO ,TAKEBIT>\n\t\t<FSET ,STILETTO ,WEAPONBIT>\n\t\t<DISABLE <INT I-THIEF>>\n\t\t<COND (<DEPOSIT-BOOTY ,HERE>\n\t\t       <COND (<EQUAL? ,HERE ,THIEFS-LAIR>\n\t\t\t      <TELL\n\"As the thief dies, his treasures reappear.\">)\n\t\t\t     (T\n\t\t\t      <TELL \"His booty remains.\">)>\n\t\t       <CRLF> <CRLF>\n\t\t       <V-LOOK>)>)>>"
  },
  "I-FIGHT": {
   "name": "I-FIGHT",
   "file": "thief.zil",
   "line": 357,
   "endLine": 391,
   "source": "<ROUTINE I-FIGHT (\"AUX\" ADV-STR TBL HIT-PROB)\n\t <ENABLE <QUEUE I-FIGHT -1>>\n\t <SET ADV-STR <GETP ,ADVENTURER ,P?STRENGTH>>\n\t <COND (<IN? ,TROLL ,HERE>\n\t\t<SET HIT-PROB 55>\n\t\t<SET TBL ,TROLL-MELEE>)\n\t       (<IN? ,THIEF ,HERE>\n\t\t<SET HIT-PROB 60>\n\t\t<SET TBL ,THIEF-MELEE>)\n\t       (T\n\t\t<DISABLE <INT I-FIGHT>>\n\t\t<ENABLE <QUEUE I-CURE -1>>\n\t\t<RFALSE>)>\n\t <COND (<PROB .HIT-PROB>\n\t\t<COND (<PROB 50> ;\"serious blow\"\n\t\t       <SET ADV-STR <- .ADV-STR 2>>\n\t\t       <COND (<L? .ADV-STR 0>\n\t\t\t      <JIGS-UP <GET .TBL 6>>)\n\t\t\t     (<PROB 50>\n\t\t\t      <TELL <GET .TBL 5> CR>)\n\t\t\t     (T\n\t\t\t      <TELL <GET .TBL 4> CR>)>)\n\t\t      (T ;\"light blow\"\n\t\t       <SET ADV-STR <- .ADV-STR 1>>\n\t\t       <COND (<L? .ADV-STR 0>\n\t\t\t      <JIGS-UP <GET .TBL 6>>)\n\t\t\t     (<PROB 50>\n\t\t\t      <TELL <GET .TBL 3> CR>)\n\t\t\t     (T\n\t\t\t      <TELL <GET .TBL 2> CR>)>)>\n\t\t<PUTP ,ADVENTURER ,P?STRENGTH .ADV-STR>)\n\t       (<PROB 50>\n\t\t<TELL <GET .TBL 1> CR>)\n\t       (T\n\t\t<TELL <GET .TBL 0> CR>)>>"
  },
  "I-CURE": {
   "name": "I-CURE",
   "file": "thief.zil",
   "line": 415,
   "endLine": 434,
   "source": "<ROUTINE I-CURE (\"AUX\" ADV-STR TROLL-STR THIEF-STR)\n\t <SET ADV-STR <GETP ,ADVENTURER ,P?STRENGTH>>\n\t <SET TROLL-STR <GETP ,TROLL ,P?STRENGTH>>\n\t <SET THIEF-STR <GETP ,THIEF ,P?STRENGTH>>\n\t <COND (<AND <EQUAL? .ADV-STR 6>\n\t\t     <EQUAL? .TROLL-STR 2>\n\t\t     <EQUAL? .THIEF-STR 5>>\n\t\t<DISABLE <INT I-CURE>>\n\t\t<SETG CURE-COUNT 10>\n\t\t<RFALSE>)>\n\t <SETG CURE-COUNT <- ,CURE-COUNT 1>>\n\t <COND (<EQUAL? ,CURE-COUNT 0>\n\t\t<COND (<L? .ADV-STR 6>\n\t\t       <PUTP ,ADVENTURER ,P?STRENGTH <+ .ADV-STR 1>>)>\n\t\t<COND (<L? .TROLL-STR 2>\n\t\t       <PUTP ,TROLL ,P?STRENGTH <+ .TROLL-STR 1>>)>\n\t\t<COND (<L? .THIEF-STR 5>\n\t\t       <PUTP ,THIEF ,P?STRENGTH <+ .THIEF-STR 1>>)>\n\t\t<SETG CURE-COUNT 10>)>\n\t <RFALSE>>"
  },
  "V-VERBOSE": {
   "name": "V-VERBOSE",
   "file": "verbs.zil",
   "line": 9,
   "endLine": 11,
   "source": "<ROUTINE V-VERBOSE ()\n\t <SETG VERBOSITY 2>\n\t <TELL \"Maximum verbosity.\" CR>>"
  },
  "V-BRIEF": {
   "name": "V-BRIEF",
   "file": "verbs.zil",
   "line": 13,
   "endLine": 15,
   "source": "<ROUTINE V-BRIEF ()\n\t <SETG VERBOSITY 1>\n\t <TELL \"Brief descriptions.\" CR>>"
  },
  "V-SUPER-BRIEF": {
   "name": "V-SUPER-BRIEF",
   "file": "verbs.zil",
   "line": 17,
   "endLine": 19,
   "source": "<ROUTINE V-SUPER-BRIEF ()\n\t <SETG VERBOSITY 0>\n\t <TELL \"Superbrief descriptions.\" CR>>"
  },
  "V-DIAGNOSE": {
   "name": "V-DIAGNOSE",
   "file": "verbs.zil",
   "line": 21,
   "endLine": 44,
   "source": "<ROUTINE V-DIAGNOSE (\"AUX\" ADV-STR X)\n\t<SET ADV-STR <GETP ,ADVENTURER ,P?STRENGTH>>\n\t<TELL \"You are \">\n\t<COND (<EQUAL? .ADV-STR 6>\n\t       <TELL \"in perfect health\">)\n\t      (<EQUAL? .ADV-STR 5>\n\t       <TELL \"slightly wounded\">)\n\t      (<EQUAL? .ADV-STR 3 4>\n\t       <TELL \"somewhat wounded\">)\n\t      (T\n\t       <TELL \"seriously wounded\">)>\n\t<COND (<NOT <EQUAL? .ADV-STR 6>>\n\t       <TELL \", but will be cured after \">\n\t       <SET X <+ <* <- 5 .ADV-STR> 10> ,CURE-COUNT>>\n\t       <TELL N .X \" move\">\n\t       <COND (<NOT <EQUAL? .X 1>>\n\t\t      <TELL \"s\">)>)>\n\t<COND (<NOT <0? ,DEATHS>>\n\t       <TELL \". You have been killed \">\n\t       <COND (<1? ,DEATHS>\n\t\t      <TELL \"once\">)\n\t\t     (T\n\t\t      <TELL \"twice\">)>)>\n\t<TELL ,PERIOD-CR>>"
  },
  "V-INVENTORY": {
   "name": "V-INVENTORY",
   "file": "verbs.zil",
   "line": 46,
   "endLine": 50,
   "source": "<ROUTINE V-INVENTORY ()\n\t <COND (<FIRST? ,WINNER>\n\t\t<PRINT-CONT ,WINNER>)\n\t       (T\n\t\t<TELL \"You are empty-handed.\" CR>)>>"
  },
  "FINISH": {
   "name": "FINISH",
   "file": "verbs.zil",
   "line": 52,
   "endLine": 70,
   "source": "<ROUTINE FINISH (\"AUX\" WRD)\n\t <V-SCORE>\n\t <REPEAT ()\n\t\t <TELL\n\"|Would you like to restart from the beginning, restore a saved position,\nor end this session of the game?|\n(Type RESTART, RESTORE, or QUIT):| >\">\n\t\t <READ ,P-INBUF ,P-LEXV>\n\t\t <SET WRD <GET ,P-LEXV 1>>\n\t\t <COND (<EQUAL? .WRD ,W?RESTART>\n\t\t\t<RESTART>\n\t\t\t<TELL ,FAILED>)\n\t\t       (<EQUAL? .WRD ,W?RESTORE>\n\t\t\t<COND (<RESTORE>\n\t\t\t       <TELL \"Ok.\" CR>)\n\t\t\t      (T\n\t\t\t       <TELL ,FAILED>)>)\n\t\t       (<EQUAL? .WRD ,W?QUIT ,W?Q>\n\t\t\t<QUIT>)>>>"
  },
  "V-QUIT": {
   "name": "V-QUIT",
   "file": "verbs.zil",
   "line": 72,
   "endLine": 74,
   "source": "<ROUTINE V-QUIT ()\n\t <COND (<DO-YOU-WISH \"leave the game\">\n\t\t<QUIT>)>>"
  },
  "V-RESTART": {
   "name": "V-RESTART",
   "file": "verbs.zil",
   "line": 76,
   "endLine": 79,
   "source": "<ROUTINE V-RESTART ()\n\t <COND (<DO-YOU-WISH \"restart\">\n\t\t<RESTART>\n\t\t<TELL ,FAILED>)>>"
  },
  "DO-YOU-WISH": {
   "name": "DO-YOU-WISH",
   "file": "verbs.zil",
   "line": 81,
   "endLine": 88,
   "source": "<ROUTINE DO-YOU-WISH (STRING)\n\t <V-SCORE>\n\t <TELL CR \"Do you wish to \" .STRING \"? (Y is affirmative): \">\n\t <COND (<YES?>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"Ok.\" CR>\n\t\t<RFALSE>)>>"
  },
  "YES?": {
   "name": "YES?",
   "file": "verbs.zil",
   "line": 90,
   "endLine": 96,
   "source": "<ROUTINE YES? ()\n\t <PRINTI \">\">\n\t <READ ,P-INBUF ,P-LEXV>\n\t <COND (<EQUAL? <GET ,P-LEXV 1> ,W?YES ,W?Y>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "V-RESTORE": {
   "name": "V-RESTORE",
   "file": "verbs.zil",
   "line": 98,
   "endLine": 102,
   "source": "<ROUTINE V-RESTORE ()\n\t <COND (<RESTORE>\n\t\t<TELL \"Ok.\" CR>)\n\t       (T\n\t\t<TELL ,FAILED>)>>"
  },
  "V-SAVE": {
   "name": "V-SAVE",
   "file": "verbs.zil",
   "line": 104,
   "endLine": 108,
   "source": "<ROUTINE V-SAVE ()\n\t <COND (<SAVE>\n\t        <TELL \"Ok.\" CR>)\n\t       (T\n\t\t<TELL ,FAILED>)>>"
  },
  "V-SCORE": {
   "name": "V-SCORE",
   "file": "verbs.zil",
   "line": 110,
   "endLine": 126,
   "source": "<ROUTINE V-SCORE ()\n\t <TELL\n\"Your score is \" N ,SCORE \" (of 350 points), in \" N ,MOVES \" move\">\n\t <COND (<NOT <1? ,MOVES>>\n\t\t<TELL \"s\">)>\n\t <TELL \". This gives you the rank of \">\n\t <COND (<EQUAL? ,SCORE 350>\n\t\t<TELL \"Master\">)\n\t       (<G? ,SCORE 250>\n\t\t<TELL \"Senior\">)\n\t       (<G? ,SCORE 150>\n\t\t<TELL \"Junior\">)\n\t       (<G? ,SCORE 75>\n\t\t<TELL \"Novice\">)\n\t       (T\n\t\t<TELL \"Beginning\">)>\n\t <TELL \" Adventurer.\" CR>>"
  },
  "SCORE-OBJ": {
   "name": "SCORE-OBJ",
   "file": "verbs.zil",
   "line": 132,
   "endLine": 135,
   "source": "<ROUTINE SCORE-OBJ (OBJ \"AUX\" TEMP)\n\t <COND (<G? <SET TEMP <GETP .OBJ ,P?VALUE>> 0>\n\t\t<SETG SCORE <+ ,SCORE .TEMP>>\n\t\t<PUTP .OBJ ,P?VALUE 0>)>>"
  },
  "V-SCRIPT": {
   "name": "V-SCRIPT",
   "file": "verbs.zil",
   "line": 137,
   "endLine": 139,
   "source": "<ROUTINE V-SCRIPT ()\n\t<PUT 0 8 <BOR <GET 0 8> 1>>\n\t<TRANSCRIPT-MESSAGE \"begin\">>"
  },
  "V-UNSCRIPT": {
   "name": "V-UNSCRIPT",
   "file": "verbs.zil",
   "line": 141,
   "endLine": 144,
   "source": "<ROUTINE V-UNSCRIPT ()\n\t<TRANSCRIPT-MESSAGE \"end\">\n\t<PUT 0 8 <BAND <GET 0 8> -2>>\n\t<RTRUE>>"
  },
  "TRANSCRIPT-MESSAGE": {
   "name": "TRANSCRIPT-MESSAGE",
   "file": "verbs.zil",
   "line": 146,
   "endLine": 148,
   "source": "<ROUTINE TRANSCRIPT-MESSAGE (STRING)\n\t <TELL \"Here \" .STRING \"s a transcript of interation with\" CR>\n\t <V-VERSION>>"
  },
  "V-VERSION": {
   "name": "V-VERSION",
   "file": "verbs.zil",
   "line": 150,
   "endLine": 163,
   "source": "<ROUTINE V-VERSION (\"AUX\" (CNT 17))\n\t<TELL\n\"MINI-ZORK I: \" ,GUE-NAME CR\n\"Copyright (c) 1988 Infocom, Inc. All rights reserved.|\nZORK is a registered trademark of Infocom, Inc.|\nRelease \">\n\t<PRINTN <BAND <GET 0 1> *3777*>>\n\t<TELL \" / Serial number \">\n\t<REPEAT ()\n\t\t<COND (<G? <SET CNT <+ .CNT 1>> 23>\n\t\t       <RETURN>)\n\t\t      (T\n\t\t       <PRINTC <GETB 0 .CNT>>)>>\n\t<CRLF>>"
  },
  "V-VERIFY": {
   "name": "V-VERIFY",
   "file": "verbs.zil",
   "line": 165,
   "endLine": 170,
   "source": "<ROUTINE V-VERIFY ()\n\t <TELL \"Verifying...\" CR>\n\t <COND (<VERIFY>\n\t\t<TELL \"Correct.\" CR>)\n\t       (T\n\t\t<TELL CR \"***\" ,FAILED>)>>"
  },
  "V-COMMAND-FILE": {
   "name": "V-COMMAND-FILE",
   "file": "verbs.zil",
   "line": 172,
   "endLine": 174,
   "source": "<ROUTINE V-COMMAND-FILE ()\n\t <DIRIN 1>\n\t <RTRUE>>"
  },
  "V-RANDOM": {
   "name": "V-RANDOM",
   "file": "verbs.zil",
   "line": 176,
   "endLine": 181,
   "source": "<ROUTINE V-RANDOM ()\n\t <COND (<NOT <PRSO? ,INTNUM>>\n\t\t<TELL \"Bad call to #RND.\" CR>)\n\t       (T\n\t\t<RANDOM <- 0 ,P-NUMBER>>\n\t\t<RTRUE>)>>"
  },
  "V-RECORD": {
   "name": "V-RECORD",
   "file": "verbs.zil",
   "line": 183,
   "endLine": 185,
   "source": "<ROUTINE V-RECORD ()\n\t <DIROUT 4>\n\t <RTRUE>>"
  },
  "V-UNRECORD": {
   "name": "V-UNRECORD",
   "file": "verbs.zil",
   "line": 187,
   "endLine": 189,
   "source": "<ROUTINE V-UNRECORD ()\n\t <DIROUT -4>\n\t <RTRUE>>"
  },
  "V-ALARM": {
   "name": "V-ALARM",
   "file": "verbs.zil",
   "line": 193,
   "endLine": 194,
   "source": "<ROUTINE V-ALARM ()\n\t <TELL \"The \" D ,PRSO \" isn't sleeping.\" CR>>"
  },
  "V-ATTACK": {
   "name": "V-ATTACK",
   "file": "verbs.zil",
   "line": 196,
   "endLine": 207,
   "source": "<ROUTINE V-ATTACK ()\n\t <COND (<NOT <FSET? ,PRSO ,ACTORBIT>>\n\t\t<TELL \"Fighting a \" D ,PRSO \"!?!\" CR>)\n\t       (<OR <NOT ,PRSI>\n\t\t    <PRSI? ,HANDS>>\n\t\t<SUICIDAL \"your bare hands\">)\n\t       (<NOT <IN? ,PRSI ,WINNER>>\n\t\t<TELL ,YNH \"the \" D ,PRSI ,PERIOD-CR>)\n\t       (<NOT <FSET? ,PRSI ,WEAPONBIT>>\n\t\t<SUICIDAL>)\n\t       (T\n\t        <HERO-BLOW>)>>"
  },
  "SUICIDAL": {
   "name": "SUICIDAL",
   "file": "verbs.zil",
   "line": 209,
   "endLine": 215,
   "source": "<ROUTINE SUICIDAL (\"OPTIONAL\" (STRING <>))\n\t <TELL \"Trying to attack a \" D ,PRSO \" with \">\n\t <COND (.STRING\n\t\t<TELL .STRING>)\n\t       (T\n\t\t<TELL \"a \" D ,PRSI>)>\n\t <TELL \" is suicidal.\" CR>>"
  },
  "PRE-BOARD": {
   "name": "PRE-BOARD",
   "file": "verbs.zil",
   "line": 217,
   "endLine": 231,
   "source": "<ROUTINE PRE-BOARD ()\n\t <COND (<PRSO? ,INFLATED-BOAT>\n\t\t<COND (<NOT <IN? ,PRSO ,HERE>>\n\t\t       <TELL \"The \" D ,PRSO \" isn't on the ground!\" CR>)\n\t\t      (<IN? ,ADVENTURER ,INFLATED-BOAT>\n\t\t       <TELL ,LOOK-AROUND>)\n\t\t      (T\n\t\t       <RFALSE>)>)\n\t       (<PRSO? ,WATER ,GLOBAL-WATER>\n\t\t<PERFORM ,V?SWIM ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL\n\"You have a theory on how to board a \" D ,PRSO \", perhaps?\" CR>)>\n\t <RFATAL>>"
  },
  "V-BOARD": {
   "name": "V-BOARD",
   "file": "verbs.zil",
   "line": 233,
   "endLine": 237,
   "source": "<ROUTINE V-BOARD (\"AUX\" AV)\n\t <TELL \"You are now in the \" D ,PRSO ,PERIOD-CR>\n\t <MOVE ,WINNER ,PRSO>\n\t <APPLY <GETP ,PRSO ,P?ACTION> ,M-ENTER>\n\t <RTRUE>>"
  },
  "V-BREATHE": {
   "name": "V-BREATHE",
   "file": "verbs.zil",
   "line": 239,
   "endLine": 240,
   "source": "<ROUTINE V-BREATHE ()\n\t <PERFORM ,V?INFLATE ,PRSO ,LUNGS>>"
  },
  "PRE-BURN": {
   "name": "PRE-BURN",
   "file": "verbs.zil",
   "line": 242,
   "endLine": 248,
   "source": "<ROUTINE PRE-BURN ()\n\t <COND (<NOT ,PRSI>\n\t\t<TELL \"You didn't say with what!\" CR>)\n\t       (<FLAMING? ,PRSI>\n\t        <RFALSE>)\n\t       (T\n\t        <TELL \"With a \" D ,PRSI \"??!?\" CR>)>>"
  },
  "V-BURN": {
   "name": "V-BURN",
   "file": "verbs.zil",
   "line": 250,
   "endLine": 265,
   "source": "<ROUTINE V-BURN ()\n\t <COND (<FSET? ,PRSO ,BURNBIT>\n\t\t<COND (<OR <IN? ,PRSO ,WINNER>\n\t\t\t   <IN? ,WINNER ,PRSO>>\n\t\t       <TELL \"The \" D ,PRSO>\n\t\t       <TELL \" catches fire. Unfortunately, you were \">\n\t\t       <COND (<IN? ,WINNER ,PRSO>\n\t\t\t      <TELL \"in\">)\n\t\t\t     (T\n\t\t\t      <TELL \"holding\">)>\n\t\t       <JIGS-UP \" it at the time.\">)\n\t\t      (T\n\t\t       <TELL \"The \" D ,PRSO \" is consumed by fire.\" CR>)>\n\t\t<REMOVE-CAREFULLY ,PRSO>)\n\t       (T\n\t\t<TELL ,YOU-CANT \"burn a \" D ,PRSO ,PERIOD-CR>)>>"
  },
  "V-CLIMB": {
   "name": "V-CLIMB",
   "file": "verbs.zil",
   "line": 267,
   "endLine": 274,
   "source": "<ROUTINE V-CLIMB ()\n\t <COND (<PRSO? ,WALL>\n\t\t<TELL \"Climbing the walls is to no avail.\" CR>)\n\t       (<OR <PRSO? ,ROOMS <> ,TREE>\n\t\t    <FSET? ,PRSO ,CLIMBBIT>>\n\t\t<DO-WALK ,P?UP>)\n\t       (T\n\t\t<TELL ,YOU-CANT \"do that.\" CR>)>>"
  },
  "V-CLIMB-DOWN": {
   "name": "V-CLIMB-DOWN",
   "file": "verbs.zil",
   "line": 276,
   "endLine": 281,
   "source": "<ROUTINE V-CLIMB-DOWN ()\n\t <COND (<OR <PRSO? ,ROOMS <> ,TREE>\n\t\t    <FSET? ,PRSO ,CLIMBBIT>>\n\t\t<DO-WALK ,P?DOWN>)\n\t       (T\n\t\t<TELL ,YOU-CANT \"do that.\" CR>)>>"
  },
  "V-CLIMB-ON": {
   "name": "V-CLIMB-ON",
   "file": "verbs.zil",
   "line": 283,
   "endLine": 284,
   "source": "<ROUTINE V-CLIMB-ON ()\n\t <TELL ,YOU-CANT \"climb onto the \" D ,PRSO ,PERIOD-CR>>"
  },
  "V-CLOSE": {
   "name": "V-CLOSE",
   "file": "verbs.zil",
   "line": 286,
   "endLine": 306,
   "source": "<ROUTINE V-CLOSE ()\n\t <COND (<AND <NOT <FSET? ,PRSO ,CONTBIT>>\n\t\t     <NOT <FSET? ,PRSO ,DOORBIT>>>\n\t\t<TELL\n\"You must tell me how to do that to a \" D ,PRSO ,PERIOD-CR>)\n\t       (<AND <NOT <FSET? ,PRSO ,SURFACEBIT>>\n\t\t     <NOT <EQUAL? <GETP ,PRSO ,P?CAPACITY> 0>>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <FCLEAR ,PRSO ,OPENBIT>\n\t\t       <TELL \"Closed.\" CR>\n\t\t       <NOW-DARK?>)\n\t\t      (T\n\t\t       <TELL ,LOOK-AROUND>)>)\n\t       (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <FCLEAR ,PRSO ,OPENBIT>\n\t\t       <TELL \"The \" D ,PRSO \" is now closed.\" CR>)\n\t\t      (T\n\t\t       <TELL ,LOOK-AROUND>)>)\n\t       (T\n\t\t<TELL \"You cannot close that.\" CR>)>>"
  },
  "V-COUNT": {
   "name": "V-COUNT",
   "file": "verbs.zil",
   "line": 308,
   "endLine": 309,
   "source": "<ROUTINE V-COUNT ()\n\t <TELL \"You have lost your mind.\" CR>>"
  },
  "V-CROSS": {
   "name": "V-CROSS",
   "file": "verbs.zil",
   "line": 311,
   "endLine": 312,
   "source": "<ROUTINE V-CROSS ()\n\t <TELL ,YOU-CANT \"cross that!\" CR>>"
  },
  "V-CURSES": {
   "name": "V-CURSES",
   "file": "verbs.zil",
   "line": 314,
   "endLine": 315,
   "source": "<ROUTINE V-CURSES ()\n\t <TELL \"Such language in a high-class establishment like this!\" CR>>"
  },
  "V-CUT": {
   "name": "V-CUT",
   "file": "verbs.zil",
   "line": 317,
   "endLine": 333,
   "source": "<ROUTINE V-CUT ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<PERFORM ,V?ATTACK ,PRSO ,PRSI>)\n\t       (<AND <FSET? ,PRSO ,BURNBIT>\n\t\t     <FSET? ,PRSI ,WEAPONBIT>>\n\t\t<COND (<IN? ,WINNER ,PRSO>\n\t\t       <TELL \"Not a bright idea, since you're in it.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"Your skillful \" D ,PRSI \"smanship slices the \" D ,PRSO\n\" into innumerable slivers which blow away.\" CR>\n\t\t       <REMOVE-CAREFULLY ,PRSO>)>)\n\t       (<NOT <FSET? ,PRSI ,WEAPONBIT>>\n\t\t<TELL\n\"The \\\"cutting edge\\\" of a \" D ,PRSI \" is hardly adequate.\" CR>)\n\t       (T\n\t\t<TELL \"Strange concept, cutting the \" D ,PRSO \"...\" CR>)>>"
  },
  "V-DEFLATE": {
   "name": "V-DEFLATE",
   "file": "verbs.zil",
   "line": 335,
   "endLine": 336,
   "source": "<ROUTINE V-DEFLATE ()\n\t <TELL \"Come on, now!\" CR>>"
  },
  "V-DIG": {
   "name": "V-DIG",
   "file": "verbs.zil",
   "line": 338,
   "endLine": 346,
   "source": "<ROUTINE V-DIG ()\n\t <COND (<NOT ,PRSI>\n\t\t<SETG PRSI ,HANDS>)>\n\t <COND (<PRSI? ,SHOVEL>\n\t\t<TELL \"There's no reason to be digging here.\" CR>)\n\t       (<FSET? ,PRSI ,TOOLBIT>\n\t\t<TELL \"Digging with the \" D ,PRSI \" is slow and tedious.\" CR>)\n\t       (T\n\t\t<TELL \"Digging with a \" D ,PRSI \" is silly.\" CR>)>>"
  },
  "V-DRINK": {
   "name": "V-DRINK",
   "file": "verbs.zil",
   "line": 348,
   "endLine": 349,
   "source": "<ROUTINE V-DRINK ()\n\t <V-EAT>>"
  },
  "V-DRINK-FROM": {
   "name": "V-DRINK-FROM",
   "file": "verbs.zil",
   "line": 351,
   "endLine": 352,
   "source": "<ROUTINE V-DRINK-FROM ()\n\t <TELL \"How peculiar!\" CR>>"
  },
  "PRE-DROP": {
   "name": "PRE-DROP",
   "file": "verbs.zil",
   "line": 354,
   "endLine": 357,
   "source": "<ROUTINE PRE-DROP ()\n\t <COND (<IN? ,ADVENTURER ,PRSO>\n\t\t<PERFORM ,V?EXIT ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-DROP": {
   "name": "V-DROP",
   "file": "verbs.zil",
   "line": 359,
   "endLine": 361,
   "source": "<ROUTINE V-DROP ()\n\t <COND (<IDROP>\n\t\t<TELL \"Dropped.\" CR>)>>"
  },
  "V-EAT": {
   "name": "V-EAT",
   "file": "verbs.zil",
   "line": 363,
   "endLine": 386,
   "source": "<ROUTINE V-EAT (\"AUX\" (L <>))\n\t <COND (<FSET? ,PRSO ,FOODBIT>\n\t\t<COND (<NOT <HELD? ,PRSO>>\n\t\t       <TELL ,YNH \"that.\" CR>)\n\t\t      (<VERB? DRINK>\n\t\t       <TELL \"How can you drink that?\" CR>)\n\t\t      (T\n\t\t       <HIT-SPOT>)>)\n\t       (<FSET? ,PRSO ,DRINKBIT>\n\t\t<SET L <LOC ,PRSO>>\n\t\t<COND (<OR <IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t\t   <GLOBAL-IN? ,GLOBAL-WATER>\n\t\t\t   <PRSO? ,PSEUDO-OBJECT>>\n\t\t       <HIT-SPOT>)\n\t\t      (<AND <ACCESSIBLE? .L>\n\t\t\t    <NOT <IN? .L ,WINNER>>>\n\t\t       <TELL ,YNH \"the \" D .L ,PERIOD-CR>)\n\t\t      (<NOT <FSET? .L ,OPENBIT>>\n\t\t       <TELL \"You'll have to open the \" D .L \" first.\" CR>)\n\t\t      (T\n\t\t       <HIT-SPOT>)>)\n\t       (T\n\t\t<TELL\n\"It's unlikely that the \" D ,PRSO \" would agree with you.\" CR>)>>"
  },
  "HIT-SPOT": {
   "name": "HIT-SPOT",
   "file": "verbs.zil",
   "line": 388,
   "endLine": 392,
   "source": "<ROUTINE HIT-SPOT ()\n\t <COND (<AND <PRSO? ,WATER>\n\t\t     <NOT <GLOBAL-IN? ,GLOBAL-WATER>>>\n\t\t<REMOVE-CAREFULLY ,PRSO>)>\n\t <TELL \"That really hit the spot.\" CR>>"
  },
  "V-ENTER": {
   "name": "V-ENTER",
   "file": "verbs.zil",
   "line": 394,
   "endLine": 395,
   "source": "<ROUTINE V-ENTER ()\n\t<DO-WALK ,P?IN>>"
  },
  "V-EXAMINE": {
   "name": "V-EXAMINE",
   "file": "verbs.zil",
   "line": 397,
   "endLine": 406,
   "source": "<ROUTINE V-EXAMINE ()\n\t <COND (<GETP ,PRSO ,P?TEXT>\n\t\t<TELL <GETP ,PRSO ,P?TEXT> CR>)\n\t       (<AND <OR <FSET? ,PRSO ,CONTBIT>\n\t\t    \t <FSET? ,PRSO ,DOORBIT>>\n\t\t     <NOT <PRSO? ,CHALICE>>>\n\t\t<V-LOOK-INSIDE>)\n\t       (T\n\t\t<TELL\n,THERES-NOTHING \"special about the \" D ,PRSO ,PERIOD-CR>)>>"
  },
  "V-EXIT": {
   "name": "V-EXIT",
   "file": "verbs.zil",
   "line": 408,
   "endLine": 421,
   "source": "<ROUTINE V-EXIT ()\n\t <COND (<AND <PRSO? <> ,ROOMS>\n\t\t     <IN? ,ADVENTURER ,INFLATED-BOAT>>\n\t\t<SETG PRSO ,INFLATED-BOAT>)>\n\t <COND (<NOT ,PRSO>\n\t\t<DO-WALK ,P?OUT>)\n\t       (<NOT <IN? ,ADVENTURER ,PRSO>>\n\t\t<TELL ,LOOK-AROUND>)\n\t       (<FSET? ,HERE ,RLANDBIT>\n\t\t<MOVE ,WINNER ,HERE>\n\t\t<TELL \"You are on your own feet again.\" CR>)\n\t       (T\n\t\t<TELL \"Getting out here would be fatal.\" CR>\n\t\t<RFATAL>)>>"
  },
  "V-EXORCISE": {
   "name": "V-EXORCISE",
   "file": "verbs.zil",
   "line": 423,
   "endLine": 424,
   "source": "<ROUTINE V-EXORCISE ()\n\t <TELL \"What a bizarre concept!\" CR>>"
  },
  "PRE-FILL": {
   "name": "PRE-FILL",
   "file": "verbs.zil",
   "line": 426,
   "endLine": 438,
   "source": "<ROUTINE PRE-FILL ()\n\t <COND (<NOT ,PRSI>\n\t\t<COND (<GLOBAL-IN? ,GLOBAL-WATER>\n\t\t       <PERFORM ,V?FILL ,PRSO ,GLOBAL-WATER>\n\t\t       <RTRUE>)\n\t\t      (<IN? ,WATER <LOC ,WINNER>>\n\t\t       <PERFORM ,V?FILL ,PRSO ,WATER>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL ,NOTHING-TO-FILL-WITH>)>)\n\t       (<NOT <PRSI? ,WATER ,GLOBAL-WATER>>\n\t\t<PERFORM ,V?PUT ,PRSI ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-FILL": {
   "name": "V-FILL",
   "file": "verbs.zil",
   "line": 440,
   "endLine": 441,
   "source": "<ROUTINE V-FILL ()\n\t <TELL \"You may know how to do that, but I don't.\" CR>>"
  },
  "V-FIND": {
   "name": "V-FIND",
   "file": "verbs.zil",
   "line": 443,
   "endLine": 463,
   "source": "<ROUTINE V-FIND (\"AUX\" (L <LOC ,PRSO>))\n\t <COND (<PRSO? ,HANDS ,LUNGS>\n\t\t<TELL \"Within six feet of your head, hopefully.\" CR>)\n\t       (<PRSO? ,ME>\n\t\t<TELL \"You're around here somewhere...\" CR>)\n\t       (<EQUAL? .L ,GLOBAL-OBJECTS>\n\t\t<TELL \"You find it.\" CR>)\n\t       (<IN? ,PRSO ,WINNER>\n\t\t<TELL \"You have it.\" CR>)\n\t       (<OR <IN? ,PRSO ,HERE>\n\t\t    <GLOBAL-IN? ,PRSO>\n\t\t    <PRSO? ,PSEUDO-OBJECT>>\n\t\t<TELL \"It's right here.\" CR>)\n\t       (<FSET? .L ,ACTORBIT>\n\t\t<TELL \"The \" D .L \" has it.\" CR>)\n\t       (<FSET? .L ,SURFACEBIT>\n\t\t<TELL \"It's on the \" D .L ,PERIOD-CR>)\n\t       (<FSET? .L ,CONTBIT>\n\t\t<TELL \"It's in the \" D .L ,PERIOD-CR>)\n\t       (T\n\t\t<TELL \"Beats me.\" CR>)>>"
  },
  "V-FOLLOW": {
   "name": "V-FOLLOW",
   "file": "verbs.zil",
   "line": 465,
   "endLine": 466,
   "source": "<ROUTINE V-FOLLOW ()\n\t <TELL \"You're nuts!\" CR>>"
  },
  "PRE-GIVE": {
   "name": "PRE-GIVE",
   "file": "verbs.zil",
   "line": 468,
   "endLine": 472,
   "source": "<ROUTINE PRE-GIVE ()\n\t <COND (<NOT <HELD? ,PRSO>>\n\t\t<TELL \n\"That's easy for you to say since you don't even have the \"\nD ,PRSO ,PERIOD-CR>)>>"
  },
  "V-GIVE": {
   "name": "V-GIVE",
   "file": "verbs.zil",
   "line": 474,
   "endLine": 478,
   "source": "<ROUTINE V-GIVE ()\n\t <COND (<NOT <FSET? ,PRSI ,ACTORBIT>>\n\t\t<TELL ,YOU-CANT \"give a \" D ,PRSO \" to a \" D ,PRSI \"!\" CR>)\n\t       (T\n\t\t<TELL \"The \" D ,PRSI \" refuses it politely.\" CR>)>>"
  },
  "V-HATCH": {
   "name": "V-HATCH",
   "file": "verbs.zil",
   "line": 480,
   "endLine": 481,
   "source": "<ROUTINE V-HATCH ()\n\t <TELL \"Bizarre!\" CR>>"
  },
  "V-HELLO": {
   "name": "V-HELLO",
   "file": "verbs.zil",
   "line": 483,
   "endLine": 491,
   "source": "<ROUTINE V-HELLO ()\n\t <COND (,PRSO\n\t\t<COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t       <TELL \"The \" D ,PRSO \" bows his head in greeting.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"Only schizophrenics say \\\"Hello\\\" to a \" D ,PRSO ,PERIOD-CR>)>)\n\t       (T\n\t\t<TELL \"Good day.\" CR>)>>"
  },
  "V-INFLATE": {
   "name": "V-INFLATE",
   "file": "verbs.zil",
   "line": 493,
   "endLine": 494,
   "source": "<ROUTINE V-INFLATE ()\n\t <TELL \"How can you inflate that?\" CR>>"
  },
  "V-KICK": {
   "name": "V-KICK",
   "file": "verbs.zil",
   "line": 496,
   "endLine": 497,
   "source": "<ROUTINE V-KICK ()\n\t <HACK-HACK \"Kicking the \">>"
  },
  "V-KISS": {
   "name": "V-KISS",
   "file": "verbs.zil",
   "line": 499,
   "endLine": 500,
   "source": "<ROUTINE V-KISS ()\n\t <TELL \"I'd sooner kiss a pig.\" CR>>"
  },
  "V-KNOCK": {
   "name": "V-KNOCK",
   "file": "verbs.zil",
   "line": 502,
   "endLine": 506,
   "source": "<ROUTINE V-KNOCK ()\n\t <COND (<FSET? ,PRSO ,DOORBIT>\n\t\t<TELL \"Nobody's home.\" CR>)\n\t       (T\n\t\t<TELL \"Why knock on a \" D ,PRSO \"?\" CR>)>>"
  },
  "V-LAMP-OFF": {
   "name": "V-LAMP-OFF",
   "file": "verbs.zil",
   "line": 508,
   "endLine": 517,
   "source": "<ROUTINE V-LAMP-OFF ()\n\t <COND (<FSET? ,PRSO ,LIGHTBIT>\n\t\t<COND (<NOT <FSET? ,PRSO ,ONBIT>>\n\t\t       <TELL \"It's already off.\" CR>)\n\t\t      (T\n\t\t       <FCLEAR ,PRSO ,ONBIT>\n\t\t       <TELL \"The \" D ,PRSO \" is now off.\" CR>\n\t\t       <NOW-DARK?>)>)\n\t       (T\n\t\t<TELL ,YOU-CANT \"turn that off.\" CR>)>>"
  },
  "V-LAMP-ON": {
   "name": "V-LAMP-ON",
   "file": "verbs.zil",
   "line": 519,
   "endLine": 533,
   "source": "<ROUTINE V-LAMP-ON ()\n\t <COND (<FSET? ,PRSO ,LIGHTBIT>\n\t\t<COND (<FSET? ,PRSO ,ONBIT>\n\t\t       <TELL \"It is already on.\" CR>)\n\t\t      (T\n\t\t       <FSET ,PRSO ,ONBIT>\n\t\t       <TELL \"The \" D ,PRSO \" is now on.\" CR>\n\t\t       <COND (<NOT ,LIT>\n\t\t\t      <SETG LIT <LIT? ,HERE>>\n\t\t\t      <CRLF>\n\t\t\t      <V-LOOK>)>)>)\n\t       (<FSET? ,PRSO ,BURNBIT>\n\t\t<TELL \"If you wish to burn the \" D ,PRSO \", say so.\" CR>)\n\t       (T\n\t\t<TELL ,YOU-CANT \"turn that on.\" CR>)>>"
  },
  "V-LAUNCH": {
   "name": "V-LAUNCH",
   "file": "verbs.zil",
   "line": 535,
   "endLine": 536,
   "source": "<ROUTINE V-LAUNCH ()\n\t <TELL \"That's pretty weird.\" CR>>"
  },
  "V-LEAP": {
   "name": "V-LEAP",
   "file": "verbs.zil",
   "line": 538,
   "endLine": 556,
   "source": "<ROUTINE V-LEAP (\"AUX\" TX S)\n\t <COND (,PRSO\n\t\t<COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t       <TELL \"The \" D ,PRSO \" is too big to jump over.\" CR>)\n\t\t      (<IN? ,PRSO ,HERE>\n\t\t       <V-SKIP>)\n\t\t      (T\n\t\t       <TELL ,GOOD-TRICK>)>)\n\t       (<SET TX <GETPT ,HERE ,P?DOWN>>\n\t\t<SET S <PTSIZE .TX>>\n\t\t<COND (<OR <EQUAL? .S 2> ;NEXIT\n       \t\t\t   <AND <EQUAL? .S 4> ;CEXIT\n\t\t\t\t<NOT <VALUE <GETB .TX 1>>>>>\n\t\t       <TELL \"This was not a very safe place to try jumping. \">\n\t\t       <JIGS-UP \"You should have looked before you leaped.\">)\n\t\t      (T\n\t\t       <V-SKIP>)>)\n\t       (T\n\t\t<V-SKIP>)>>"
  },
  "V-LISTEN": {
   "name": "V-LISTEN",
   "file": "verbs.zil",
   "line": 558,
   "endLine": 559,
   "source": "<ROUTINE V-LISTEN ()\n\t <TELL \"The \" D ,PRSO \" makes no sound.\" CR>>"
  },
  "V-LOCK": {
   "name": "V-LOCK",
   "file": "verbs.zil",
   "line": 561,
   "endLine": 562,
   "source": "<ROUTINE V-LOCK ()\n\t <TELL \"It\" <PICK-ONE ,HO-HUM> ,PERIOD-CR>>"
  },
  "V-LOOK": {
   "name": "V-LOOK",
   "file": "verbs.zil",
   "line": 564,
   "endLine": 566,
   "source": "<ROUTINE V-LOOK ()\n\t <COND (<DESCRIBE-ROOM T>\n\t\t<DESCRIBE-OBJECTS T>)>>"
  },
  "V-LOOK-BEHIND": {
   "name": "V-LOOK-BEHIND",
   "file": "verbs.zil",
   "line": 568,
   "endLine": 569,
   "source": "<ROUTINE V-LOOK-BEHIND ()\n\t <TELL ,THERES-NOTHING \"behind the \" D ,PRSO ,PERIOD-CR>>"
  },
  "V-LOOK-INSIDE": {
   "name": "V-LOOK-INSIDE",
   "file": "verbs.zil",
   "line": 571,
   "endLine": 590,
   "source": "<ROUTINE V-LOOK-INSIDE ()\n\t <COND (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"It's open, but you can't see what's beyond.\">)\n\t\t      (T\n\t\t       <TELL \"The \" D ,PRSO \" is closed.\">)>\n\t\t<CRLF>)\n\t       (<FSET? ,PRSO ,CONTBIT>\n\t\t<COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t       <TELL ,THERES-NOTHING \"special to be seen.\" CR>)\n\t\t      (<SEE-INSIDE? ,PRSO>\n\t\t       <COND (<AND <FIRST? ,PRSO>\n\t\t\t\t   <PRINT-CONT ,PRSO>>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <TELL \"The \" D ,PRSO \" is empty.\" CR>)>)\n\t\t      (T\n\t\t       <TELL \"The \" D ,PRSO \" is closed.\" CR>)>)\n\t       (T\n\t\t<TELL ,YOU-CANT \"look inside a \" D ,PRSO ,PERIOD-CR>)>>"
  },
  "V-LOOK-UNDER": {
   "name": "V-LOOK-UNDER",
   "file": "verbs.zil",
   "line": 592,
   "endLine": 593,
   "source": "<ROUTINE V-LOOK-UNDER ()\n\t <TELL ,THERES-NOTHING \"but dust there.\" CR>>"
  },
  "V-LOWER": {
   "name": "V-LOWER",
   "file": "verbs.zil",
   "line": 595,
   "endLine": 596,
   "source": "<ROUTINE V-LOWER ()\n\t <HACK-HACK \"Playing in this way with the \">>"
  },
  "V-MAKE": {
   "name": "V-MAKE",
   "file": "verbs.zil",
   "line": 598,
   "endLine": 599,
   "source": "<ROUTINE V-MAKE ()\n    \t<TELL ,YOU-CANT \"do that.\" CR>>"
  },
  "PRE-MOVE": {
   "name": "PRE-MOVE",
   "file": "verbs.zil",
   "line": 601,
   "endLine": 603,
   "source": "<ROUTINE PRE-MOVE ()\n\t <COND (<HELD? ,PRSO>\n\t\t<TELL \"Moved.\" CR>)>>"
  },
  "V-MOVE": {
   "name": "V-MOVE",
   "file": "verbs.zil",
   "line": 605,
   "endLine": 609,
   "source": "<ROUTINE V-MOVE ()\n\t <COND (<FSET? ,PRSO ,TAKEBIT>\n\t\t<TELL \"Moving the \" D ,PRSO \" reveals nothing.\" CR>)\n\t       (T\n\t\t<TELL ,YOU-CANT \"move the \" D ,PRSO ,PERIOD-CR>)>>"
  },
  "PRE-MUNG": {
   "name": "PRE-MUNG",
   "file": "verbs.zil",
   "line": 611,
   "endLine": 619,
   "source": "<ROUTINE PRE-MUNG ()\n\t <COND (<OR <NOT ,PRSI>\n\t\t    <NOT <FSET? ,PRSI ,WEAPONBIT>>>\n\t\t<TELL \"Trying to destroy the \" D ,PRSO \" with \">\n\t\t<COND (<NOT ,PRSI>\n\t\t       <TELL \"your bare hands\">)\n\t\t      (T\n\t\t       <TELL \"a \" D ,PRSI>)>\n\t\t<TELL \" is futile.\" CR>)>>"
  },
  "V-MUNG": {
   "name": "V-MUNG",
   "file": "verbs.zil",
   "line": 621,
   "endLine": 626,
   "source": "<ROUTINE V-MUNG ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<PERFORM ,V?ATTACK ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"Nice try.\" CR>)>>"
  },
  "V-ODYSSEUS": {
   "name": "V-ODYSSEUS",
   "file": "verbs.zil",
   "line": 628,
   "endLine": 640,
   "source": "<ROUTINE V-ODYSSEUS ()\n\t <COND (<AND <EQUAL? ,HERE ,CYCLOPS-ROOM>\n\t\t     <IN? ,CYCLOPS ,HERE>\n\t\t     <NOT ,CYCLOPS-FLAG>>\n\t\t<DISABLE <INT I-CYCLOPS>>\n\t\t<SETG CYCLOPS-FLAG T>\n\t\t<SETG MAGIC-FLAG T>\n\t\t<REMOVE ,CYCLOPS>\n\t\t<TELL \n\"The cyclops, hearing the name of his father's deadly nemesis, flees by\ncrashing through the east wall.\" CR>)\n\t       (T\n\t\t<TELL \"Wasn't he a sailor?\" CR>)>>"
  },
  "V-OPEN": {
   "name": "V-OPEN",
   "file": "verbs.zil",
   "line": 642,
   "endLine": 671,
   "source": "<ROUTINE V-OPEN (\"AUX\" F STR)\n\t <COND (<AND <FSET? ,PRSO ,CONTBIT>\n\t\t     <NOT <FSET? ,PRSO ,SURFACEBIT>>\n\t\t     <NOT <EQUAL? <GETP ,PRSO ,P?CAPACITY> 0>>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"It is already open.\" CR>)\n\t\t      (T\n\t\t       <FSET ,PRSO ,OPENBIT>\n\t\t       <FSET ,PRSO ,TOUCHBIT>\n\t\t       <COND (<OR <NOT <FIRST? ,PRSO>> <FSET? ,PRSO ,TRANSBIT>>\n\t\t\t      <TELL \"Opened.\" CR>)\n\t\t\t     (<AND <SET F <FIRST? ,PRSO>>\n\t\t\t\t   <NOT <NEXT? .F>>\n\t\t\t\t   <NOT <FSET? .F ,TOUCHBIT>>\n\t\t\t\t   <SET STR <GETP .F ,P?FDESC>>>\n\t\t\t      <TELL \"The \" D ,PRSO \" opens.\" CR>\n\t\t\t      <TELL .STR CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"Opening the \" D ,PRSO \" reveals \">\n\t\t\t      <PRINT-CONTENTS ,PRSO>\n\t\t\t      <TELL ,PERIOD-CR>)>)>)\n\t       (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"It is already open.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The \" D ,PRSO \" opens.\" CR>\n\t\t       <FSET ,PRSO ,OPENBIT>)>)\n\t       (T\n\t\t<TELL\n\"You must tell me how to do that to a \" D ,PRSO ,PERIOD-CR>)>>"
  },
  "V-PICK": {
   "name": "V-PICK",
   "file": "verbs.zil",
   "line": 673,
   "endLine": 674,
   "source": "<ROUTINE V-PICK ()\n\t <TELL ,YOU-CANT \"pick that.\" CR>>"
  },
  "V-POUR-ON": {
   "name": "V-POUR-ON",
   "file": "verbs.zil",
   "line": 676,
   "endLine": 688,
   "source": "<ROUTINE V-POUR-ON ()\n\t <COND (<PRSO? ,WATER>\n\t        <COND (<FLAMING? ,PRSI>\n\t\t       <TELL \"The \" D ,PRSI \" is extinguished.\" CR>\n\t\t       <FCLEAR ,PRSI ,ONBIT>\n\t\t       <FCLEAR ,PRSI ,FLAMEBIT>)\n\t              (T\n\t\t       <TELL\n\"The water spills over the \" D ,PRSI \", to the floor, and evaporates.\" CR>)>\n\t\t<REMOVE-CAREFULLY ,PRSO>\n\t\t<NOW-DARK?>)\n\t       (T\n\t\t<TELL ,YOU-CANT \"pour that.\" CR>)>>"
  },
  "V-PRAY": {
   "name": "V-PRAY",
   "file": "verbs.zil",
   "line": 692,
   "endLine": 699,
   "source": "<ROUTINE V-PRAY ()\n\t <COND (<EQUAL? ,HERE ,ALTAR>\n\t\t<SETG SCORE <+ ,SCORE ,ALTAR-SCORE>>\n\t\t<SETG ALTAR-SCORE 0>\n\t\t<GOTO ,FOREST-EDGE>)\n\t       (T\n\t\t<TELL\n\"If you pray enough, your prayers may be answered.\" CR>)>>"
  },
  "V-PUMP": {
   "name": "V-PUMP",
   "file": "verbs.zil",
   "line": 701,
   "endLine": 708,
   "source": "<ROUTINE V-PUMP ()\n\t <COND (<AND ,PRSI\n\t\t     <NOT <PRSI? ,PUMP>>>\n\t\t<TELL \"With a \" D ,PRSI \"!?!\" CR>)\n\t       (<IN? ,PUMP ,WINNER>\n\t\t<PERFORM ,V?INFLATE ,PRSO ,PUMP>)\n\t       (T\n\t\t<TELL \"It's not clear how.\" CR>)>>"
  },
  "V-PUSH": {
   "name": "V-PUSH",
   "file": "verbs.zil",
   "line": 710,
   "endLine": 711,
   "source": "<ROUTINE V-PUSH ()\n\t <HACK-HACK \"Pushing the \">>"
  },
  "PRE-PUT": {
   "name": "PRE-PUT",
   "file": "verbs.zil",
   "line": 713,
   "endLine": 717,
   "source": "<ROUTINE PRE-PUT ()\n\t <COND (<PRSO? ,WATER ,GLOBAL-WATER>\n\t\t<RFALSE>)\n\t       (T\n\t \t<PRE-GIVE>)>> ;\"That's easy for you to say...\""
  },
  "V-PUT": {
   "name": "V-PUT",
   "file": "verbs.zil",
   "line": 719,
   "endLine": 745,
   "source": "<ROUTINE V-PUT ()\n\t <COND (<AND <NOT <FSET? ,PRSI ,OPENBIT>>\n\t\t     <NOT <OPENABLE? ,PRSI>>\n\t\t     <NOT <FSET? ,PRSI ,VEHBIT>>>\n\t        <TELL ,YOU-CANT \"do that.\" CR>)\n\t       (<NOT <FSET? ,PRSI ,OPENBIT>>\n\t\t<SETG P-IT-OBJECT ,PRSI>\n\t\t<TELL \"The \" D ,PRSI \" isn't open.\" CR>)\n\t       (<PRSI? ,PRSO>\n\t\t<TELL \"How can you do that?\" CR>)\n\t       (<IN? ,PRSO ,PRSI>\n\t\t<TELL ,LOOK-AROUND>)\n\t       (<G? <- <+ <WEIGHT ,PRSI> <WEIGHT ,PRSO>>\n\t\t       <GETP ,PRSI ,P?SIZE>>\n\t\t    <GETP ,PRSI ,P?CAPACITY>>\n\t\t<TELL \"There's no room.\" CR>)\n\t       (<AND <NOT <HELD? ,PRSO>>\n\t\t     <FSET? ,PRSO ,TRYTAKEBIT>>\n\t\t<TELL ,YNH \"the \" D ,PRSO ,PERIOD-CR>)\n\t       (<AND <NOT <HELD? ,PRSO>>\n\t\t     <NOT <ITAKE>>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<MOVE ,PRSO ,PRSI>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<SCORE-OBJ ,PRSO>\n\t\t<TELL \"Done.\" CR>)>>"
  },
  "V-PUT-ON": {
   "name": "V-PUT-ON",
   "file": "verbs.zil",
   "line": 747,
   "endLine": 754,
   "source": "<ROUTINE V-PUT-ON ()\n\t <COND (<PRSI? ,GROUND>\n\t\t<PERFORM ,V?DROP ,PRSO>\n\t\t<RTRUE>)\n\t       (<FSET? ,PRSI ,SURFACEBIT>\n\t\t<V-PUT>)\n\t       (T\n\t\t<TELL \"There's no good surface on the \" D ,PRSI ,PERIOD-CR>)>>"
  },
  "V-RAISE": {
   "name": "V-RAISE",
   "file": "verbs.zil",
   "line": 756,
   "endLine": 757,
   "source": "<ROUTINE V-RAISE ()\n\t <V-LOWER>>"
  },
  "PRE-READ": {
   "name": "PRE-READ",
   "file": "verbs.zil",
   "line": 759,
   "endLine": 761,
   "source": "<ROUTINE PRE-READ ()\n\t <COND (<NOT ,LIT>\n\t\t<TELL ,TOO-DARK>)>>"
  },
  "V-READ": {
   "name": "V-READ",
   "file": "verbs.zil",
   "line": 763,
   "endLine": 767,
   "source": "<ROUTINE V-READ ()\n\t <COND (<FSET? ,PRSO ,READBIT>\n\t\t<TELL <GETP ,PRSO ,P?TEXT> CR>)\n\t       (T\n\t\t<TELL \"How does one read a \" D ,PRSO \"?\" CR>)>>"
  },
  "V-READ-PAGE": {
   "name": "V-READ-PAGE",
   "file": "verbs.zil",
   "line": 769,
   "endLine": 771,
   "source": "<ROUTINE V-READ-PAGE ()\n\t <PERFORM ,V?READ ,PRSO>\n\t <RTRUE>>"
  },
  "V-REPENT": {
   "name": "V-REPENT",
   "file": "verbs.zil",
   "line": 773,
   "endLine": 774,
   "source": "<ROUTINE V-REPENT ()\n\t <TELL \"It could very well be too late!\" CR>>"
  },
  "V-RING": {
   "name": "V-RING",
   "file": "verbs.zil",
   "line": 776,
   "endLine": 777,
   "source": "<ROUTINE V-RING ()\n\t <TELL \"How, exactly, can you ring that?\" CR>>"
  },
  "V-RUB": {
   "name": "V-RUB",
   "file": "verbs.zil",
   "line": 779,
   "endLine": 780,
   "source": "<ROUTINE V-RUB ()\n\t <HACK-HACK \"Fiddling with the \">>"
  },
  "V-SAY": {
   "name": "V-SAY",
   "file": "verbs.zil",
   "line": 782,
   "endLine": 793,
   "source": "<ROUTINE V-SAY (\"AUX\" V)\n\t <COND (<NOT ,P-CONT>\n\t\t<TELL \"Say what?\" CR>\n\t\t<RTRUE>)>\n\t <SETG QUOTE-FLAG <>>\n\t <COND (<SET V <FIND-IN ,HERE ,ACTORBIT>>\n\t\t<TELL \"You must address the \" D .V \" directly.\" CR>\n\t\t<SETG P-CONT <>>)\n\t       (<NOT <EQUAL? <GET ,P-LEXV ,P-CONT> ,W?HELLO>>\n\t        <SETG P-CONT <>>\n\t\t<TELL ,MENTAL-COLLAPSE>)>\n\t <RTRUE>>"
  },
  "V-SEARCH": {
   "name": "V-SEARCH",
   "file": "verbs.zil",
   "line": 795,
   "endLine": 796,
   "source": "<ROUTINE V-SEARCH ()\n\t <TELL \"You find nothing unusual.\" CR>>"
  },
  "V-SGIVE": {
   "name": "V-SGIVE",
   "file": "verbs.zil",
   "line": 798,
   "endLine": 800,
   "source": "<ROUTINE V-SGIVE ()\n\t <PERFORM ,V?GIVE ,PRSI ,PRSO>\n\t <RTRUE>>"
  },
  "V-SHAKE": {
   "name": "V-SHAKE",
   "file": "verbs.zil",
   "line": 802,
   "endLine": 803,
   "source": "<ROUTINE V-SHAKE ()\n\t <TELL \"Shaken.\" CR>>"
  },
  "V-SKIP": {
   "name": "V-SKIP",
   "file": "verbs.zil",
   "line": 805,
   "endLine": 806,
   "source": "<ROUTINE V-SKIP ()\n\t <TELL \"Wheeeeeeeeee!!!!!\" CR>>"
  },
  "V-SMELL": {
   "name": "V-SMELL",
   "file": "verbs.zil",
   "line": 808,
   "endLine": 809,
   "source": "<ROUTINE V-SMELL ()\n\t <TELL \"It smells like a \" D ,PRSO ,PERIOD-CR>>"
  },
  "V-STAB": {
   "name": "V-STAB",
   "file": "verbs.zil",
   "line": 811,
   "endLine": 817,
   "source": "<ROUTINE V-STAB (\"AUX\" W)\n\t <COND (<SET W <FIND-IN ,ADVENTURER ,WEAPONBIT>>\n\t\t<PERFORM ,V?ATTACK ,PRSO .W>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL\n\"Do you propose to stab the \" D ,PRSO \" with your pinky?\" CR>)>>"
  },
  "V-STRIKE": {
   "name": "V-STRIKE",
   "file": "verbs.zil",
   "line": 819,
   "endLine": 825,
   "source": "<ROUTINE V-STRIKE ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL\n\"You aren't versed in hand-to-hand combat; you'd better use a weapon.\" CR>)\n\t       (T\n\t\t<PERFORM ,V?LAMP-ON ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-SWIM": {
   "name": "V-SWIM",
   "file": "verbs.zil",
   "line": 827,
   "endLine": 834,
   "source": "<ROUTINE V-SWIM ()\n\t <TELL \"Swimming isn't allowed in the \">\n\t <COND (<AND ,PRSO\n\t\t     <NOT <PRSO? ,WATER ,GLOBAL-WATER>>>\n\t\t<TELL D ,PRSO \".\">)\n\t       (T\n\t\t<TELL \"dungeon.\">)>\n\t <CRLF>>Y"
  },
  "V-SWING": {
   "name": "V-SWING",
   "file": "verbs.zil",
   "line": 836,
   "endLine": 840,
   "source": "<ROUTINE V-SWING ()\n\t <COND (<NOT ,PRSI>\n\t\t<TELL \"Whoosh!\" CR>)\n\t       (T\n\t\t<PERFORM ,V?ATTACK ,PRSI ,PRSO>)>>"
  },
  "PRE-TAKE": {
   "name": "PRE-TAKE",
   "file": "verbs.zil",
   "line": 842,
   "endLine": 859,
   "source": "<ROUTINE PRE-TAKE ()\n\t <COND (<IN? ,PRSO ,WINNER>\n\t\t<TELL ,ALREADY>)\n\t       (<AND <FSET? <LOC ,PRSO> ,CONTBIT>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<TELL ,YOU-CANT \"reach inside a closed container.\" CR>)\n\t       (,PRSI\n\t\t<COND (<PRSI? ,GROUND>\n\t\t       <SETG PRSI <>>\n\t\t       <RFALSE>)\n\t\t      (<NOT <PRSI? <LOC ,PRSO>>>\n\t\t       <TELL\n\"The \" D ,PRSO \" isn't in the \" D ,PRSI ,PERIOD-CR>)\n\t\t      (T\n\t\t       <SETG PRSI <>>\n\t\t       <RFALSE>)>)\n\t       (<IN? ,ADVENTURER ,PRSO>\n\t\t<TELL \"You're in it!\" CR>)>>"
  },
  "V-TAKE": {
   "name": "V-TAKE",
   "file": "verbs.zil",
   "line": 861,
   "endLine": 863,
   "source": "<ROUTINE V-TAKE ()\n\t <COND (<EQUAL? <ITAKE> T>\n\t\t<TELL \"Taken.\" CR>)>>"
  },
  "V-TELL": {
   "name": "V-TELL",
   "file": "verbs.zil",
   "line": 865,
   "endLine": 877,
   "source": "<ROUTINE V-TELL ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<COND (,P-CONT\n\t\t       <SETG WINNER ,PRSO>\n\t\t       <SETG HERE <LOC ,WINNER>>)\n\t\t      (T\n\t\t       <TELL\n\"The \" D ,PRSO \" suggests that you reread your manual.\" CR>)>)\n\t       (T\n\t\t<TELL ,YOU-CANT \"talk to the \" D ,PRSO \"!\" CR>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<SETG P-CONT <>>\n\t\t<RFATAL>)>>"
  },
  "V-THROUGH": {
   "name": "V-THROUGH",
   "file": "verbs.zil",
   "line": 879,
   "endLine": 892,
   "source": "<ROUTINE V-THROUGH (\"AUX\" M)\n\t<COND (<AND <FSET? ,PRSO ,DOORBIT>\n\t\t    <SET M <OTHER-SIDE ,PRSO>>>\n\t       <DO-WALK .M>)\n\t      (<FSET? ,PRSO ,VEHBIT>\n\t       <PERFORM ,V?BOARD ,PRSO>\n\t       <RTRUE>)\n\t      (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t       <TELL\n\"You hit your head against the \" D ,PRSO \" as you attempt this feat.\" CR>)\n\t      (<IN? ,PRSO ,WINNER>\n\t       <TELL \"That would involve quite a contortion!\" CR>)\n\t      (T\n\t       <TELL <PICK-ONE ,YUKS> CR>)>>"
  },
  "V-THROW": {
   "name": "V-THROW",
   "file": "verbs.zil",
   "line": 894,
   "endLine": 909,
   "source": "<ROUTINE V-THROW ()\n\t <COND (<IDROP>\n\t\t<COND (<PRSI? ,ME>\n\t\t       <TELL\n\"The \" D ,PRSO \" conks you in the head. Normally, this wouldn't do much\ndamage, but you fall over backwards trying to duck and break your neck,\njustice being swift and merciful in \" ,GUE-NAME>\n\t\t       <JIGS-UP \".\">)\n\t\t      (<AND ,PRSI <FSET? ,PRSI ,ACTORBIT>>\n\t\t       <TELL\n\"The \" D ,PRSI \" ducks as the \" D ,PRSO\n\" flies by and crashes to the ground.\" CR>)\n\t\t      (T\n\t\t       <TELL \"Thrown.\" CR>)>)\n\t       (T\n\t\t<TELL \"Huh?\" CR>)>>"
  },
  "V-THROW-OFF": {
   "name": "V-THROW-OFF",
   "file": "verbs.zil",
   "line": 911,
   "endLine": 912,
   "source": "<ROUTINE V-THROW-OFF ()\n\t <TELL ,YOU-CANT \"throw anything off of that!\" CR>>"
  },
  "V-TIE": {
   "name": "V-TIE",
   "file": "verbs.zil",
   "line": 914,
   "endLine": 918,
   "source": "<ROUTINE V-TIE ()\n\t <COND (<PRSI? ,WINNER>\n\t\t<TELL ,YOU-CANT \"tie anything to yourself.\" CR>)\n\t       (T\n\t\t<TELL ,YOU-CANT \"tie the \" D ,PRSO \" to that.\" CR>)>>"
  },
  "V-TIE-UP": {
   "name": "V-TIE-UP",
   "file": "verbs.zil",
   "line": 920,
   "endLine": 921,
   "source": "<ROUTINE V-TIE-UP ()\n\t <TELL \"With a \" D ,PRSI \"!?!\" CR>>"
  },
  "PRE-TURN": {
   "name": "PRE-TURN",
   "file": "verbs.zil",
   "line": 923,
   "endLine": 928,
   "source": "<ROUTINE PRE-TURN ()\n\t <COND (<AND <PRSI? <> ,ROOMS>\n\t\t     <NOT <PRSO? ,BLACK-BOOK>>>\n\t\t<TELL \"Your bare hands don't appear to be enough.\" CR>)\n\t       (<NOT <FSET? ,PRSO ,TURNBIT>>\n\t\t<TELL ,YOU-CANT \"turn that!\" CR>)>>"
  },
  "V-TURN": {
   "name": "V-TURN",
   "file": "verbs.zil",
   "line": 930,
   "endLine": 931,
   "source": "<ROUTINE V-TURN ()\n\t <TELL \"This has no effect.\" CR>>"
  },
  "V-UNLOCK": {
   "name": "V-UNLOCK",
   "file": "verbs.zil",
   "line": 933,
   "endLine": 934,
   "source": "<ROUTINE V-UNLOCK ()\n\t <V-LOCK>>"
  },
  "V-UNTIE": {
   "name": "V-UNTIE",
   "file": "verbs.zil",
   "line": 936,
   "endLine": 937,
   "source": "<ROUTINE V-UNTIE ()\n\t <TELL \"This cannot be tied, so it cannot be untied!\" CR>>"
  },
  "V-WAIT": {
   "name": "V-WAIT",
   "file": "verbs.zil",
   "line": 939,
   "endLine": 946,
   "source": "<ROUTINE V-WAIT (\"OPTIONAL\" (NUM 3))\n\t <TELL \"Time passes...\" CR>\n\t <REPEAT ()\n\t\t <COND (<L? <SET NUM <- .NUM 1>> 0>\n\t\t\t<RETURN>)\n\t\t       (<CLOCKER>\n\t\t\t<RETURN>)>>\n\t <SETG CLOCK-WAIT T>>"
  },
  "V-WALK": {
   "name": "V-WALK",
   "file": "verbs.zil",
   "line": 948,
   "endLine": 989,
   "source": "<ROUTINE V-WALK (\"AUX\" PT PTS STR OBJ RM)\n\t <COND (<NOT ,P-WALK-DIR>\n\t\t<V-WALK-AROUND>)\n\t       (<SET PT <GETPT ,HERE ,PRSO>>\n\t\t<COND (<EQUAL? <SET PTS <PTSIZE .PT>> ,UEXIT>\n\t\t       <GOTO <GETB .PT ,REXIT>>)\n\t\t      (<EQUAL? .PTS ,NEXIT>\n\t\t       <TELL <GET .PT ,NEXITSTR> CR>\n\t\t       <RFATAL>)\n\t\t      (<EQUAL? .PTS ,FEXIT>\n\t\t       <COND (<SET RM <APPLY <GET .PT ,FEXITFCN>>>\n\t\t\t      <GOTO .RM>)\n\t\t\t     (T\n\t\t\t      <RFATAL>)>)\n\t\t      (<EQUAL? .PTS ,CEXIT>\n\t\t       <COND (<VALUE <GETB .PT ,CEXITFLAG>>\n\t\t\t      <GOTO <GETB .PT ,REXIT>>)\n\t\t\t     (<SET STR <GET .PT ,CEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <TELL ,CANT-GO>\n\t\t\t      <RFATAL>)>)\n\t\t      (<EQUAL? .PTS ,DEXIT>\n\t\t       <COND (<FSET? <SET OBJ <GETB .PT ,DEXITOBJ>> ,OPENBIT>\n\t\t\t      <GOTO <GETB .PT ,REXIT>>)\n\t\t\t     (<SET STR <GET .PT ,DEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <TELL \"The \" D .OBJ \" is closed.\" CR>\n\t\t\t      <SETG P-IT-OBJECT .OBJ>\n\t\t\t      <RFATAL>)>)>)\n\t       (<AND <NOT ,LIT>\n\t\t     <PROB 80>\n\t\t     <EQUAL? ,WINNER ,ADVENTURER>\n\t\t     <NOT <FSET? ,HERE ,NONLANDBIT>>>\n\t\t<JIGS-UP\n\"Oh, no! You have walked into the slavering fangs of a lurking grue!\">)\n\t       (T\n\t\t<TELL ,CANT-GO>\n\t\t<RFATAL>)>>"
  },
  "V-WALK-AROUND": {
   "name": "V-WALK-AROUND",
   "file": "verbs.zil",
   "line": 991,
   "endLine": 992,
   "source": "<ROUTINE V-WALK-AROUND ()\n\t <TELL \"Use compass directions for movement.\" CR>>"
  },
  "V-WAVE": {
   "name": "V-WAVE",
   "file": "verbs.zil",
   "line": 994,
   "endLine": 995,
   "source": "<ROUTINE V-WAVE ()\n\t <HACK-HACK \"Waving the \">>"
  },
  "V-YELL": {
   "name": "V-YELL",
   "file": "verbs.zil",
   "line": 997,
   "endLine": 998,
   "source": "<ROUTINE V-YELL ()\n\t <TELL \"Aaarrrggghhh!\" CR>>"
  },
  "V-ZORK": {
   "name": "V-ZORK",
   "file": "verbs.zil",
   "line": 1000,
   "endLine": 1001,
   "source": "<ROUTINE V-ZORK ()\n\t <TELL \"At your service!\" CR>>"
  },
  "DESCRIBE-ROOM": {
   "name": "DESCRIBE-ROOM",
   "file": "verbs.zil",
   "line": 1016,
   "endLine": 1039,
   "source": "<ROUTINE DESCRIBE-ROOM (\"OPTIONAL\" (VERB-IS-LOOK <>) \"AUX\" (V? <>) STR)\n\t <COND (<OR .VERB-IS-LOOK\n\t\t    <EQUAL? ,VERBOSITY 2>>\n\t\t<SET V? T>)>\n\t <COND (<NOT ,LIT>\n\t\t<TELL\n\"It is pitch black. You are likely to be eaten by a grue.\" CR>\n\t\t<RFALSE>)\n\t       (<NOT <FSET? ,HERE ,TOUCHBIT>>\n\t\t<FSET ,HERE ,TOUCHBIT>\n\t\t<SET V? T>)\n\t       (<FSET? ,HERE ,MAZEBIT>\n\t\t<SET V? T>)>\n\t <TELL D ,HERE>\n\t <COND (<IN? ,ADVENTURER ,INFLATED-BOAT>\n\t\t<TELL \", in the \" D ,INFLATED-BOAT>)>\n\t <CRLF>\n\t <COND (<NOT .V?>\n\t\t<RTRUE>)\n\t       (<SET STR <GETP ,HERE ,P?LDESC>>\n\t\t<TELL .STR>)\n\t       (T\n\t\t<APPLY <GETP ,HERE ,P?ACTION> ,M-LOOK>)>\n\t <CRLF>>"
  },
  "DESCRIBE-OBJECTS": {
   "name": "DESCRIBE-OBJECTS",
   "file": "verbs.zil",
   "line": 1041,
   "endLine": 1048,
   "source": "<ROUTINE DESCRIBE-OBJECTS (\"OPTIONAL\" (V? <>))\n\t <COND (,LIT\n\t\t<COND (<FIRST? ,HERE>\n\t\t       <PRINT-CONT ,HERE\n\t\t\t\t   <SET V? <OR .V? <EQUAL? ,VERBOSITY 2>>>\n\t\t\t\t   -1>)>)\n\t       (T\n\t\t<TELL ,TOO-DARK>)>>"
  },
  "DESCRIBE-OBJECT": {
   "name": "DESCRIBE-OBJECT",
   "file": "verbs.zil",
   "line": 1054,
   "endLine": 1076,
   "source": "<ROUTINE DESCRIBE-OBJECT (OBJ V? LEVEL \"AUX\" (STR <>) AV)\n\t <SETG DESC-OBJECT .OBJ>\n\t <COND (<AND <0? .LEVEL>\n\t\t     <APPLY <GETP .OBJ ,P?DESCFCN> ,M-OBJDESC>>\n\t\t<RTRUE>)\n\t       (<AND <0? .LEVEL>\n\t\t     <OR <AND <NOT <FSET? .OBJ ,TOUCHBIT>>\n\t\t\t      <SET STR <GETP .OBJ ,P?FDESC>>>\n\t\t\t <SET STR <GETP .OBJ ,P?LDESC>>>>\n\t\t<TELL .STR>)\n\t       (<0? .LEVEL>\n\t\t<TELL \"There is a \" D .OBJ \" here\">\n\t\t<COND (<FSET? .OBJ ,ONBIT>\n\t\t       <TELL \" (providing light)\">)>\n\t\t<TELL \".\">)\n\t       (T\n\t\t<TELL <GET ,INDENTS .LEVEL>>\n\t\t<TELL \"A \" D .OBJ>\n\t\t<COND (<FSET? .OBJ ,ONBIT>\n\t\t       <TELL \" (providing light)\">)>)>\n\t <CRLF>\n\t <COND (<AND <SEE-INSIDE? .OBJ> <FIRST? .OBJ>>\n\t\t<PRINT-CONT .OBJ .V? .LEVEL>)>>"
  },
  "PRINT-CONTENTS": {
   "name": "PRINT-CONTENTS",
   "file": "verbs.zil",
   "line": 1078,
   "endLine": 1100,
   "source": "<ROUTINE PRINT-CONTENTS (OBJ \"AUX\" F N (1ST? T) (IT? <>) (TWO? <>))\n\t <COND (<SET F <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<SET N <NEXT? .F>>\n\t\t\t<COND (.1ST?\n\t\t\t       <SET 1ST? <>>)\n\t\t\t      (T\n\t\t\t       <TELL \", \">\n\t\t\t       <COND (<NOT .N>\n\t\t\t\t      <TELL \"and \">)>)>\n\t\t\t<TELL \"a \" D .F>\n\t\t\t<COND (<AND <NOT .IT?>\n\t\t\t\t    <NOT .TWO?>>\n\t\t\t       <SET IT? .F>)\n\t\t\t      (T\n\t\t\t       <SET TWO? T>\n\t\t\t       <SET IT? <>>)>\n\t\t\t<SET F .N>\n\t\t\t<COND (<NOT .F>\n\t\t\t       <COND (<AND .IT?\n\t\t\t\t\t   <NOT .TWO?>>\n\t\t\t\t      <SETG P-IT-OBJECT .IT?>)>\n\t\t\t       <RTRUE>)>>)>>"
  },
  "PRINT-CONT": {
   "name": "PRINT-CONT",
   "file": "verbs.zil",
   "line": 1102,
   "endLine": 1164,
   "source": "<ROUTINE PRINT-CONT (OBJ \"OPTIONAL\" (V? <>) (LEVEL 0)\n\t\t     \"AUX\" Y 1ST? SHIT (AV <>) STR (PV? <>) (INV? <>))\n\t <COND (<NOT <SET Y <FIRST? .OBJ>>>\n\t\t<RTRUE>)\n\t       (<IN? ,ADVENTURER ,INFLATED-BOAT>\n\t\t<SET AV <LOC ,WINNER>>)>\n\t <SET 1ST? T>\n\t <SET SHIT T>\n\t <COND (<EQUAL? ,WINNER .OBJ <LOC .OBJ>>\n\t\t<SET INV? T>)\n\t       (T\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT .Y>\n\t\t\t       <RETURN>)\n\t\t\t      (<EQUAL? .Y .AV>\n\t\t\t       <SET PV? T>)\n\t\t\t      (<EQUAL? .Y ,WINNER>\n\t\t\t       T)\n\t\t\t      (<AND <NOT <FSET? .Y ,INVISIBLE>>\n\t\t\t\t    <NOT <FSET? .Y ,TOUCHBIT>>\n\t\t\t\t    <SET STR <GETP .Y ,P?FDESC>>>\n\t\t\t       <COND (<NOT <FSET? .Y ,NDESCBIT>>\n\t\t\t\t      <TELL .STR CR>\n\t\t\t\t      <SET SHIT <>>)>\n\t\t\t       <COND (<AND <SEE-INSIDE? .Y>\n\t\t\t\t\t   <NOT <GETP <LOC .Y> ,P?DESCFCN>>\n\t\t\t\t\t   <FIRST? .Y>>\n\t\t\t\t      <COND (<PRINT-CONT .Y .V? 0>\n\t\t\t\t\t     <SET 1ST? <>>)>)>)>\n\t\t\t<SET Y <NEXT? .Y>>>)>\n\t <SET Y <FIRST? .OBJ>>\n\t <REPEAT ()\n\t\t <COND (<NOT .Y>\n\t\t\t<COND (<AND .PV? .AV <FIRST? .AV>>\n\t\t\t       <SET LEVEL <+ .LEVEL 1>>\n\t\t\t       <PRINT-CONT .AV .V? .LEVEL>)>\n\t\t\t<RETURN>)\n\t\t       (<EQUAL? .Y .AV ,ADVENTURER>\n\t\t\tT)\n\t\t       (<AND <NOT <FSET? .Y ,INVISIBLE>>\n\t\t\t     <OR .INV?\n\t\t\t\t <FSET? .Y ,TOUCHBIT>\n\t\t\t\t <NOT <GETP .Y ,P?FDESC>>>>\n\t\t\t<COND (<NOT <FSET? .Y ,NDESCBIT>>\n\t\t\t       <COND (.1ST?\n\t\t\t\t      <COND (<FIRSTER .OBJ .LEVEL>\n\t\t\t\t\t     <COND (<L? .LEVEL 0>\n\t\t\t\t\t\t    <SET LEVEL 0>)>)>\n\t\t\t\t      <SET LEVEL <+ 1 .LEVEL>>\n\t\t\t\t      <SET 1ST? <>>)>\n\t\t\t       <COND (<L? .LEVEL 0>\n\t\t\t\t      <SET LEVEL 0>)>\n\t\t\t       <DESCRIBE-OBJECT .Y .V? .LEVEL>)\n\t\t\t      (<AND <FIRST? .Y>\n\t\t\t\t    <SEE-INSIDE? .Y>>\n\t\t\t       <SET LEVEL <+ .LEVEL 1>>\n\t\t\t       <PRINT-CONT .Y .V? .LEVEL>\n\t\t\t       <SET LEVEL <- .LEVEL 1>>)>)>\n\t\t <SET Y <NEXT? .Y>>>\n\t <COND (<AND .1ST? .SHIT>\n\t\t<RFALSE>)\n\t       (T\n\t\t<RTRUE>)>>"
  },
  "FIRSTER": {
   "name": "FIRSTER",
   "file": "verbs.zil",
   "line": 1166,
   "endLine": 1179,
   "source": "<ROUTINE FIRSTER (OBJ LEVEL)\n\t <COND (<EQUAL? .OBJ ,TROPHY-CASE>\n\t\t<TELL \"Your treasures include:\" CR>)\n\t       (<EQUAL? .OBJ ,WINNER>\n\t\t<TELL \"You have:\" CR>)\n\t       (<NOT <IN? .OBJ ,ROOMS>>\n\t\t<COND (<G? .LEVEL 0>\n\t\t       <TELL <GET ,INDENTS .LEVEL>>)>\n\t\t<COND (<FSET? .OBJ ,SURFACEBIT>\n\t\t       <TELL \"Sitting on the \" D .OBJ \" is:\" CR>)\n\t\t      (<FSET? .OBJ ,ACTORBIT>\n\t\t       <TELL \"The \" D .OBJ \" is holding:\" CR>)\n\t\t      (T\n\t\t       <TELL \"The \" D .OBJ \" contains:\" CR>)>)>>"
  },
  "SEE-INSIDE?": {
   "name": "SEE-INSIDE?",
   "file": "verbs.zil",
   "line": 1181,
   "endLine": 1183,
   "source": "<ROUTINE SEE-INSIDE? (OBJ)\n\t <AND <NOT <FSET? .OBJ ,INVISIBLE>>\n\t      <OR <FSET? .OBJ ,TRANSBIT> <FSET? .OBJ ,OPENBIT>>>>"
  },
  "JIGS-UP": {
   "name": "JIGS-UP",
   "file": "verbs.zil",
   "line": 1191,
   "endLine": 1238,
   "source": "<ROUTINE JIGS-UP (DESC)\n \t <SETG WINNER ,ADVENTURER>\n\t <TELL .DESC>\n\t <COND (<NOT ,LUCKY>\n\t\t<TELL \" Bad luck, huh?\">)>\n\t <CRLF>\n\t <COND (,DEAD\n\t\t<TELL \"|\nCongratulations. It's not easy to be killed while already dead.\" CR>\n\t\t<FINISH>)>\n\t <PROG ()\n\t       <SETG SCORE <- ,SCORE 10>>\n\t       <TELL \"\n|    ****  You have died  ****\n|\n|\">\n\t       <MOVE ,WINNER ,HERE>\n\t       <COND (<NOT <L? ,DEATHS 2>>\n\t\t      <TELL\n\"You clearly are a suicidal maniac. Your remains will be put in Hades for your\nfellow adventurers to gloat over.\" CR>\n\t\t      <FINISH>)\n\t\t     (T\n\t\t      <SETG DEATHS <+ ,DEATHS 1>>\n\t\t      <MOVE ,WINNER ,HERE>\n\t\t      <COND (<FSET? ,ALTAR ,TOUCHBIT>\n\t\t\t     <TELL\n\"You feel relieved of your burdens and find yourself before the gates of Hell\">\n\t\t\t     <COND (<NOT ,HADES-FLAG>\n\t\t\t\t    <TELL\n\", where the spirits jeer and deny you entry\">)>\n\t\t\t     <TELL\n\". Your senses are disturbed. Objects around you appear indistinct,\nbleached of color, even unreal.\" CR CR>\n\t\t\t     <SETG DEAD T>\n\t\t\t     <SETG TROLL-FLAG T>\n\t\t\t     <PUTP ,WINNER ,P?ACTION DEAD-FUNCTION>\n\t\t\t     <GOTO ,ENTRANCE-TO-HADES>)\n\t\t\t    (T\n\t\t\t     <TELL\n\"Well, you probably deserve another chance. I can't quite fix you up\ncompletely, but you can't have everything.\" CR CR>\n\t\t\t     <FCLEAR ,TRAP-DOOR ,TOUCHBIT>\n\t\t\t     <GOTO ,FOREST-EDGE>)>\n\t\t      <SETG P-CONT <>>\n\t\t      <RANDOMIZE-OBJECTS>\n\t\t      <KILL-INTERRUPTS>\n\t\t      <RFATAL>)>>>"
  },
  "RANDOMIZE-OBJECTS": {
   "name": "RANDOMIZE-OBJECTS",
   "file": "verbs.zil",
   "line": 1240,
   "endLine": 1261,
   "source": "<ROUTINE RANDOMIZE-OBJECTS (\"AUX\" (R <FIRST? ,ROOMS>) F N)\n\t <COND (<IN? ,LAMP ,WINNER>\n\t\t<MOVE ,LAMP ,LIVING-ROOM>)>\n\t <COND (<IN? ,COFFIN ,WINNER>\n\t\t<MOVE ,COFFIN ,EGYPTIAN-ROOM>)>\n\t <SET N <FIRST? ,WINNER>>\n\t <REPEAT ()\n\t\t <SET F .N>\n\t\t <COND (<NOT .F>\n\t\t\t<RETURN>)>\n\t\t <SET N <NEXT? .F>>\n\t\t <COND (<FSET? .F ,TREASUREBIT>\n\t\t\t<REPEAT ()\n\t\t\t\t<COND (<AND <FSET? .R ,RLANDBIT>\n\t\t\t\t\t    <NOT <FSET? .R ,ONBIT>>\n\t\t\t\t\t    <PROB 50>>\n\t\t\t\t       <MOVE .F .R>\n\t\t\t\t       <RETURN>)\n\t\t\t\t      (T\n\t\t\t\t       <SET R <NEXT? .R>>)>>)\n\t\t       (T\n\t\t\t<MOVE .F <GET ,ABOVE-GROUND-ROOMS <RANDOM 7>>>)>>>"
  },
  "KILL-INTERRUPTS": {
   "name": "KILL-INTERRUPTS",
   "file": "verbs.zil",
   "line": 1274,
   "endLine": 1282,
   "source": "<ROUTINE KILL-INTERRUPTS ()\n\t <DISABLE <INT I-XB>>\n\t <DISABLE <INT I-XC>>\n\t <DISABLE <INT I-CYCLOPS>>\n\t <DISABLE <INT I-LANTERN>>\n\t <DISABLE <INT I-CANDLES>>\n\t <DISABLE <INT I-MATCH>>\n\t <FCLEAR ,MATCH ,ONBIT>\n\t <RTRUE>>"
  },
  "DEAD-FUNCTION": {
   "name": "DEAD-FUNCTION",
   "file": "verbs.zil",
   "line": 1284,
   "endLine": 1337,
   "source": "<ROUTINE DEAD-FUNCTION (\"OPTIONAL\" (FOO <>) \"AUX\" M)\n\t <COND (<VERB? WALK>\n\t\t<COND (<AND <EQUAL? ,HERE ,LADDER-ROOM>\n\t\t\t    <EQUAL? ,PRSO ,P?WEST>>\n\t\t       <TELL \"The draft blows you back.\" CR>)>)\n\t       (<VERB? BRIEF VERBOSE SUPER-BRIEF VERSION SAVE RESTORE\n\t\t       QUIT RESTART>\n\t\t<RFALSE>)\n\t       (<VERB? ATTACK MUNG ALARM SWING>\n\t\t<TELL \"Attacks are vain in your condition.\" CR>)\n\t       (<VERB? OPEN CLOSE EAT DRINK INFLATE DEFLATE TURN BURN\n\t\t       TIE UNTIE RUB>\n\t\t<TELL \"Such action is beyond your capabilities.\" CR>)\n\t       (<VERB? WAIT>\n\t\t<TELL \"Might as well. You've got an eternity.\" CR>)\n\t       (<VERB? LAMP-ON>\n\t\t<TELL \"You need no light to guide you.\" CR>)\n\t       (<VERB? SCORE>\n\t\t<TELL \"You're dead! How can you think of your score?\" CR>)\n\t       (<VERB? TAKE RUB>\n\t\t<TELL \"Your hand passes through it.\" CR>)\n\t       (<VERB? DROP THROW INVENTORY>\n\t\t<TELL \"You have no possessions.\" CR>)\n\t       (<VERB? DIAGNOSE>\n\t\t<TELL \"You are dead.\" CR>)\n\t       (<VERB? LOOK>\n\t\t<TELL \"The room looks unearthly\">\n\t\t<COND (<NOT <FIRST? ,HERE>>\n\t\t       <TELL \".\">)\n\t\t      (T\n\t\t       <TELL \" and objects appear indistinct.\">)>\n\t\t<COND (<NOT <FSET? ,HERE ,ONBIT>>\n\t\t       <TELL\n\" Although there is no light, the room seems dimly illuminated.\">)>\n\t\t<CRLF> <CRLF>\n\t\t<RFALSE>)\n\t       (<VERB? PRAY>\n\t\t<COND (<EQUAL? ,HERE ,ALTAR>\n\t\t       <FCLEAR ,LAMP ,INVISIBLE>\n\t\t       <PUTP ,WINNER ,P?ACTION 0>\n\t\t       <SETG DEAD <>>\n\t\t       <COND (<IN? ,TROLL ,TROLL-ROOM>\n\t\t\t      <SETG TROLL-FLAG <>>)>\n\t\t       <TELL\n\"The sound of a distant trumpet is heard. You find yourself in the\nwoods, rising as if from a long sleep. A breeze rustles the treetops;\nthen, all is still.\" CR CR>\n\t\t       <GOTO ,FOREST-EDGE>)\n\t\t      (T\n\t\t       <TELL \"Your prayers are not heard.\" CR>)>)\n\t       (T\n\t\t<TELL ,YOU-CANT \"even do that.\" CR>\n\t\t<SETG P-CONT <>>\n\t\t<RFATAL>)>>"
  },
  "ITAKE": {
   "name": "ITAKE",
   "file": "verbs.zil",
   "line": 1345,
   "endLine": 1383,
   "source": "<ROUTINE ITAKE (\"OPTIONAL\" (VB T) \"AUX\" CNT OBJ LOAD-ALLOWED)\n\t <SET LOAD-ALLOWED <- 100 <* <- 6 <GETP ,ADVENTURER ,P?STRENGTH>> 10>>>\n\t <COND (,DEAD\n\t\t<COND (.VB\n\t\t       <TELL \"Your hand passes through it.\" CR>)>\n\t\t<RFALSE>)\n\t       (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t\t<COND (.VB\n\t\t       <TELL <PICK-ONE ,YUKS> CR>)>\n\t\t<RFALSE>)\n\t       (<AND <EQUAL? ,HERE ,THIEFS-LAIR>\n\t\t     <IN? ,THIEF ,HERE>\n\t\t     <FSET? ,PRSO ,TREASUREBIT>>\n\t\t<COND (.VB\n\t\t       <TELL \"The thief doesn't let you near.\" CR>)>\n\t\t<RFALSE>)\n\t       (<AND <FSET? <LOC ,PRSO> ,CONTBIT>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t;\"Kludge for parser calling itake\"\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? <LOC ,PRSO> ,WINNER>>\n\t\t     <G? <+ <WEIGHT ,PRSO> <WEIGHT ,WINNER>> .LOAD-ALLOWED>>\n\t\t<COND (.VB\n\t\t       <TELL \"Your load is too heavy\">\n\t\t       <COND (<L? .LOAD-ALLOWED 100>\n\t\t\t      <TELL\", especially in light of your condition\">)>\n\t\t       <TELL ,PERIOD-CR>)>\n\t\t<RFATAL>)\n\t       (<AND <VERB? TAKE>\n\t\t     <G? <SET CNT <CCOUNT ,WINNER>> ,FUMBLE-NUMBER>\n\t\t     <PROB <* .CNT ,FUMBLE-PROB>>>\n\t\t<TELL \"You're holding too many things already!\" CR>\n\t\t<RFALSE>)\n\t       (T\n\t\t<MOVE ,PRSO ,WINNER>\n\t\t<FCLEAR ,PRSO ,NDESCBIT>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<SCORE-OBJ ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "IDROP": {
   "name": "IDROP",
   "file": "verbs.zil",
   "line": 1385,
   "endLine": 1396,
   "source": "<ROUTINE IDROP ()\n\t <COND (<AND <NOT <IN? ,PRSO ,WINNER>>\n\t\t     <NOT <IN? <LOC ,PRSO> ,WINNER>>>\n\t\t<TELL ,YNH \"the \" D ,PRSO ,PERIOD-CR>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? ,PRSO ,WINNER>>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<TELL \"The \" D ,PRSO \" is closed.\" CR>\n\t\t<RFALSE>)\n\t       (T\n\t\t<MOVE ,PRSO <LOC ,WINNER>>\n\t\t<RTRUE>)>>"
  },
  "CCOUNT": {
   "name": "CCOUNT",
   "file": "verbs.zil",
   "line": 1398,
   "endLine": 1404,
   "source": "<ROUTINE CCOUNT (OBJ \"AUX\" (CNT 0) X)\n\t <COND (<SET X <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<SET CNT <+ .CNT 1>>\n\t\t\t<COND (<NOT <SET X <NEXT? .X>>>\n\t\t\t       <RETURN>)>>)>\n\t .CNT>"
  },
  "WEIGHT": {
   "name": "WEIGHT",
   "file": "verbs.zil",
   "line": 1406,
   "endLine": 1411,
   "source": "<ROUTINE WEIGHT (OBJ \"AUX\" CONT (WT 0))\n\t <COND (<SET CONT <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<SET WT <+ .WT <WEIGHT .CONT>>>\n\t\t\t<COND (<NOT <SET CONT <NEXT? .CONT>>> <RETURN>)>>)>\n\t <+ .WT <GETP .OBJ ,P?SIZE>>>"
  },
  "GOTO": {
   "name": "GOTO",
   "file": "verbs.zil",
   "line": 1429,
   "endLine": 1483,
   "source": "<ROUTINE GOTO (RM \"OPTIONAL\" (V? T) \"AUX\" (WLOC <LOC ,WINNER>) OLIT OHERE)\n\t <SET OLIT ,LIT>\n\t <SET OHERE ,HERE>\n\t <COND (<AND <FSET? .RM ,NONLANDBIT>\n\t\t     <NOT <IN? ,ADVENTURER ,INFLATED-BOAT>>>\n\t\t<TELL ,YOU-CANT \"go there without a boat.\" CR>\n\t\t<RFALSE>)\n\t       (<AND <FSET? .RM ,RLANDBIT>\n\t\t     <FSET? ,HERE ,RLANDBIT>\n\t\t     <IN? ,ADVENTURER ,INFLATED-BOAT>>\n\t\t<TELL \"You'll have to get out of the raft first.\" CR>\n\t\t<RFALSE>)\n\t       (T\n\t\t<COND (<AND <IN? ,ADVENTURER ,INFLATED-BOAT>\n\t\t\t    <NOT <FSET? ,HERE ,RLANDBIT>>\n\t\t\t    <FSET? .RM ,RLANDBIT>\n\t\t\t    <NOT ,DEAD>>\n\t\t       <TELL\n\"The \" D .WLOC \" comes to a rest on the shore.\" CR CR>)>\n\t\t<COND (<IN? ,ADVENTURER ,INFLATED-BOAT>\n\t\t       <MOVE .WLOC .RM>)\n\t\t      (T\n\t\t       <MOVE ,WINNER .RM>)>\n\t\t<SETG HERE .RM>\n\t\t<SETG LIT <LIT? ,HERE>>\n\t\t<COND (<AND <NOT .OLIT>\n\t\t\t    <NOT ,LIT>\n\t\t\t    <PROB 80>>\n\t\t       <TELL \"Oh, no! A lurking grue slithered into the \">\n\t\t       <COND (<IN? ,ADVENTURER ,INFLATED-BOAT>\n\t\t\t      <TELL D <LOC ,WINNER>>)\n\t\t\t     (T\n\t\t\t      <TELL \"room\">)>\n\t\t       <JIGS-UP \" and devoured you!\">\n\t\t       <RTRUE>)>\n\t\t<COND (<AND <NOT ,LIT>\n\t\t\t    <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t       <TELL \"You have moved into a dark place.\" CR>\n\t\t       <SETG P-CONT <>>)>\n\t\t<APPLY <GETP ,HERE ,P?ACTION> ,M-ENTER>\n\t\t<SCORE-OBJ .RM>\n\t\t<COND (<NOT <EQUAL? ,HERE .RM>>\n\t\t       <RTRUE>)\n\t\t      ;(<AND <NOT <EQUAL? ,ADVENTURER ,WINNER>>\n\t\t\t    <IN? ,ADVENTURER .OHERE>>\n\t\t       <TELL \"The \" D ,WINNER \" leaves the room.\" CR>)\n\t\t      (<AND <EQUAL? ,HERE .OHERE> ;\"no double description\"\n\t\t\t    <EQUAL? ,HERE ,ENTRANCE-TO-HADES>>\n\t\t       <RTRUE>)\n\t\t      (<AND .V?\n\t\t\t    <EQUAL? ,WINNER ,ADVENTURER>\n\t\t\t    <DESCRIBE-ROOM>\n\t\t\t    <G? ,VERBOSITY 0>>\n\t\t       <DESCRIBE-OBJECTS>)>\n\t\t<RTRUE>)>>"
  },
  "DO-WALK": {
   "name": "DO-WALK",
   "file": "verbs.zil",
   "line": 1485,
   "endLine": 1488,
   "source": "<ROUTINE DO-WALK (DIR)\n\t <SETG P-WALK-DIR .DIR>\n\t <PERFORM ,V?WALK .DIR>\n\t <RTRUE>>"
  }
 },
 "globals": {
  "WON-FLAG": {
   "name": "WON-FLAG",
   "kind": "global",
   "file": "above-ground.zil",
   "line": 69,
   "value": "<>"
  },
  "RAINBOW-FLAG": {
   "name": "RAINBOW-FLAG",
   "kind": "global",
   "file": "above-ground.zil",
   "line": 459,
   "value": "<>"
  },
  "LAMP-TABLE": {
   "name": "LAMP-TABLE",
   "kind": "global",
   "file": "above-ground.zil",
   "line": 860,
   "value": "<TABLE (PURE) 75 \"The lamp appears dimmer.\" 50 \"The lamp is definitely dimmer now.\" 15 \"The lamp is nearly out.\" 0>"
  },
  "RUG-MOVED": {
   "name": "RUG-MOVED",
   "kind": "global",
   "file": "above-ground.zil",
   "line": 882,
   "value": "<>"
  },
  "HS": {
   "name": "HS",
   "kind": "global",
   "file": "globals.zil",
   "line": 103,
   "value": "0"
  },
  "MIRROR-MUNG": {
   "name": "MIRROR-MUNG",
   "kind": "global",
   "file": "globals.zil",
   "line": 241,
   "value": "<>"
  },
  "LUCKY": {
   "name": "LUCKY",
   "kind": "global",
   "file": "globals.zil",
   "line": 243,
   "value": "T"
  },
  "HO-HUM": {
   "name": "HO-HUM",
   "kind": "global",
   "file": "globals.zil",
   "line": 421,
   "value": "<LTABLE 0 \" doesn't seem to work\" \" isn't notably helpful\" \" has no effect\">"
  },
  "YUKS": {
   "name": "YUKS",
   "kind": "global",
   "file": "globals.zil",
   "line": 428,
   "value": "<LTABLE 0 \"A valiant attempt.\" \"You can't be serious.\" \"Not bloody likely.\" \"What a concept!\">"
  },
  "PERIOD-CR": {
   "name": "PERIOD-CR",
   "kind": "global",
   "file": "globals.zil",
   "line": 436,
   "value": "\".|\""
  },
  "LOOK-AROUND": {
   "name": "LOOK-AROUND",
   "kind": "global",
   "file": "globals.zil",
   "line": 438,
   "value": "\"Look around you.|\""
  },
  "FORMERLY-A-LAKE": {
   "name": "FORMERLY-A-LAKE",
   "kind": "global",
   "file": "globals.zil",
   "line": 440,
   "value": "\"what was formerly a lake. However, with the water level lowered, there is\nmerely a shallow stream, easily\""
  },
  "MENTAL-COLLAPSE": {
   "name": "MENTAL-COLLAPSE",
   "kind": "global",
   "file": "globals.zil",
   "line": 444,
   "value": "\"Talking to yourself is said to be a sign of impending mental collapse.|\""
  },
  "CANT-GO": {
   "name": "CANT-GO",
   "kind": "global",
   "file": "globals.zil",
   "line": 447,
   "value": "\"You can't go that way.|\""
  },
  "REFERRING": {
   "name": "REFERRING",
   "kind": "global",
   "file": "globals.zil",
   "line": 449,
   "value": "\"It's not clear what you're referring to.|\""
  },
  "NOTHING-TO-FILL-WITH": {
   "name": "NOTHING-TO-FILL-WITH",
   "kind": "global",
   "file": "globals.zil",
   "line": 451,
   "value": "\"There is nothing to fill it with.|\""
  },
  "GOOD-TRICK": {
   "name": "GOOD-TRICK",
   "kind": "global",
   "file": "globals.zil",
   "line": 453,
   "value": "\"That would be a good trick.|\""
  },
  "TOO-DARK": {
   "name": "TOO-DARK",
   "kind": "global",
   "file": "globals.zil",
   "line": 455,
   "value": "\"It's too dark to see.|\""
  },
  "GUE-NAME": {
   "name": "GUE-NAME",
   "kind": "global",
   "file": "globals.zil",
   "line": 457,
   "value": "\"The Great Underground Empire\""
  },
  "INTEGRAL-PART": {
   "name": "INTEGRAL-PART",
   "kind": "global",
   "file": "globals.zil",
   "line": 459,
   "value": "\"It is an integral part of the control panel.|\""
  },
  "PERFORM-CEREMONY": {
   "name": "PERFORM-CEREMONY",
   "kind": "global",
   "file": "globals.zil",
   "line": 461,
   "value": "\"You must perform the ceremony.|\""
  },
  "FAILED": {
   "name": "FAILED",
   "kind": "global",
   "file": "globals.zil",
   "line": 463,
   "value": "\"Failed.|\""
  },
  "THIEF-LEFT-DISGUSTED": {
   "name": "THIEF-LEFT-DISGUSTED",
   "kind": "global",
   "file": "globals.zil",
   "line": 465,
   "value": "\"Finding nothing of value, the thief left, looking disgusted.|\""
  },
  "YOU-CANT": {
   "name": "YOU-CANT",
   "kind": "global",
   "file": "globals.zil",
   "line": 468,
   "value": "\"You can't \""
  },
  "YNH": {
   "name": "YNH",
   "kind": "global",
   "file": "globals.zil",
   "line": 470,
   "value": "\"You're not holding \""
  },
  "THERES-NOTHING": {
   "name": "THERES-NOTHING",
   "kind": "global",
   "file": "globals.zil",
   "line": 472,
   "value": "\"There is nothing \""
  },
  "CANDLES-ARE": {
   "name": "CANDLES-ARE",
   "kind": "global",
   "file": "globals.zil",
   "line": 474,
   "value": "\"The candles are \""
  },
  "ALREADY": {
   "name": "ALREADY",
   "kind": "global",
   "file": "globals.zil",
   "line": 476,
   "value": "\"You already did that!|\""
  },
  "WATER-EVAPORATES": {
   "name": "WATER-EVAPORATES",
   "kind": "global",
   "file": "globals.zil",
   "line": 478,
   "value": "\"The water spills to the floor and evaporates immediately.|\""
  },
  "BEG-PARDON": {
   "name": "BEG-PARDON",
   "kind": "global",
   "file": "globals.zil",
   "line": 481,
   "value": "\"[I beg your pardon?]|\""
  },
  "NOTHING-HAPPENS": {
   "name": "NOTHING-HAPPENS",
   "kind": "global",
   "file": "globals.zil",
   "line": 483,
   "value": "\"Nothing happens.|\""
  },
  "NOUN-MISSING": {
   "name": "NOUN-MISSING",
   "kind": "global",
   "file": "globals.zil",
   "line": 485,
   "value": "\"[There seems to be a noun missing in that sentence!]|\""
  },
  "CYCLOPS-IS": {
   "name": "CYCLOPS-IS",
   "kind": "global",
   "file": "globals.zil",
   "line": 487,
   "value": "\"The cyclops is\""
  },
  "DISK-BASED": {
   "name": "DISK-BASED",
   "kind": "global",
   "file": "globals.zil",
   "line": 489,
   "value": "\" in the larger, disk-based version of Zork I.|\""
  },
  "GRATE-REVEALED": {
   "name": "GRATE-REVEALED",
   "kind": "global",
   "file": "maze.zil",
   "line": 189,
   "value": "<>"
  },
  "GRUNLOCK": {
   "name": "GRUNLOCK",
   "kind": "global",
   "file": "maze.zil",
   "line": 191,
   "value": "<>"
  },
  "CYCLOWRATH": {
   "name": "CYCLOWRATH",
   "kind": "global",
   "file": "maze.zil",
   "line": 267,
   "value": "0"
  },
  "CYCLOPS-FLAG": {
   "name": "CYCLOPS-FLAG",
   "kind": "global",
   "file": "maze.zil",
   "line": 269,
   "value": "<>"
  },
  "MAGIC-FLAG": {
   "name": "MAGIC-FLAG",
   "kind": "global",
   "file": "maze.zil",
   "line": 271,
   "value": "<>"
  },
  "CYCLOMAD": {
   "name": "CYCLOMAD",
   "kind": "global",
   "file": "maze.zil",
   "line": 394,
   "value": "<TABLE (PURE) \" agitated.\" \" getting more agitated.\" \" looking for something.\" \" now holding salt and pepper. Condiments for an upcoming snack?\" \" looking at you and drooling.\" \" approaching in an unfriendly manner. You can: 1. Leave 2. Become dinner.\">"
  },
  "SERIAL": {
   "name": "SERIAL",
   "kind": "constant",
   "file": "misc.zil",
   "line": 165,
   "value": "0"
  },
  "P-WON": {
   "name": "P-WON",
   "kind": "global",
   "file": "misc.zil",
   "line": 167,
   "value": "<>"
  },
  "M-FATAL": {
   "name": "M-FATAL",
   "kind": "constant",
   "file": "misc.zil",
   "line": 169,
   "value": "2"
  },
  "M-HANDLED": {
   "name": "M-HANDLED",
   "kind": "constant",
   "file": "misc.zil",
   "line": 170,
   "value": "1"
  },
  "M-NOT-HANDLED": {
   "name": "M-NOT-HANDLED",
   "kind": "constant",
   "file": "misc.zil",
   "line": 171,
   "value": "<>"
  },
  "M-OBJECT": {
   "name": "M-OBJECT",
   "kind": "constant",
   "file": "misc.zil",
   "line": 172,
   "value": "<>"
  },
  "M-BEG": {
   "name": "M-BEG",
   "kind": "constant",
   "file": "misc.zil",
   "line": 174,
   "value": "1"
  },
  "M-ENTER": {
   "name": "M-ENTER",
   "kind": "constant",
   "file": "misc.zil",
   "line": 175,
   "value": "2"
  },
  "M-LOOK": {
   "name": "M-LOOK",
   "kind": "constant",
   "file": "misc.zil",
   "line": 176,
   "value": "3"
  },
  "M-OBJDESC": {
   "name": "M-OBJDESC",
   "kind": "constant",
   "file": "misc.zil",
   "line": 177,
   "value": "5"
  },
  "M-END": {
   "name": "M-END",
   "kind": "constant",
   "file": "misc.zil",
   "line": 178,
   "value": "6"
  },
  "P-MULT": {
   "name": "P-MULT",
   "kind": "global",
   "file": "misc.zil",
   "line": 331,
   "value": "<>"
  },
  "P-NOT-HERE": {
   "name": "P-NOT-HERE",
   "kind": "global",
   "file": "misc.zil",
   "line": 333,
   "value": "0"
  },
  "C-TABLELEN": {
   "name": "C-TABLELEN",
   "kind": "constant",
   "file": "misc.zil",
   "line": 459,
   "value": "180"
  },
  "C-TABLE": {
   "name": "C-TABLE",
   "kind": "global",
   "file": "misc.zil",
   "line": 461,
   "value": "<ITABLE NONE 180>"
  },
  "C-DEMONS": {
   "name": "C-DEMONS",
   "kind": "global",
   "file": "misc.zil",
   "line": 463,
   "value": "180"
  },
  "C-INTS": {
   "name": "C-INTS",
   "kind": "global",
   "file": "misc.zil",
   "line": 465,
   "value": "180"
  },
  "C-INTLEN": {
   "name": "C-INTLEN",
   "kind": "constant",
   "file": "misc.zil",
   "line": 467,
   "value": "6"
  },
  "C-ENABLED?": {
   "name": "C-ENABLED?",
   "kind": "constant",
   "file": "misc.zil",
   "line": 469,
   "value": "0"
  },
  "C-TICK": {
   "name": "C-TICK",
   "kind": "constant",
   "file": "misc.zil",
   "line": 471,
   "value": "1"
  },
  "C-RTN": {
   "name": "C-RTN",
   "kind": "constant",
   "file": "misc.zil",
   "line": 473,
   "value": "2"
  },
  "CLOCK-WAIT": {
   "name": "CLOCK-WAIT",
   "kind": "global",
   "file": "misc.zil",
   "line": 492,
   "value": "<>"
  },
  "BAT-DROPS": {
   "name": "BAT-DROPS",
   "kind": "global",
   "file": "north-of-res.zil",
   "line": 221,
   "value": "<LTABLE 0 COAL-MINE-1 COAL-MINE-2 COAL-MINE-3 LADDER-ROOM SHAFT-ROOM MINE-ENTRANCE>"
  },
  "BASKET-RAISED": {
   "name": "BASKET-RAISED",
   "kind": "global",
   "file": "north-of-res.zil",
   "line": 263,
   "value": "T"
  },
  "EMPTY-HANDED": {
   "name": "EMPTY-HANDED",
   "kind": "global",
   "file": "north-of-res.zil",
   "line": 396,
   "value": "<>"
  },
  "DRAFTY-ROOM-SCORE": {
   "name": "DRAFTY-ROOM-SCORE",
   "kind": "global",
   "file": "north-of-res.zil",
   "line": 415,
   "value": "<>"
  },
  "PRSA": {
   "name": "PRSA",
   "kind": "global",
   "file": "parser.zil",
   "line": 12,
   "value": "<>"
  },
  "PRSI": {
   "name": "PRSI",
   "kind": "global",
   "file": "parser.zil",
   "line": 13,
   "value": "<>"
  },
  "PRSO": {
   "name": "PRSO",
   "kind": "global",
   "file": "parser.zil",
   "line": 14,
   "value": "<>"
  },
  "P-TABLE": {
   "name": "P-TABLE",
   "kind": "global",
   "file": "parser.zil",
   "line": 16,
   "value": "0"
  },
  "P-ONEOBJ": {
   "name": "P-ONEOBJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 17,
   "value": "0"
  },
  "P-SYNTAX": {
   "name": "P-SYNTAX",
   "kind": "global",
   "file": "parser.zil",
   "line": 18,
   "value": "0"
  },
  "P-CCTBL": {
   "name": "P-CCTBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 20,
   "value": "<TABLE 0 0 0 0>"
  },
  "CC-SBPTR": {
   "name": "CC-SBPTR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 22,
   "value": "0"
  },
  "CC-SEPTR": {
   "name": "CC-SEPTR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 23,
   "value": "1"
  },
  "CC-DBPTR": {
   "name": "CC-DBPTR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 24,
   "value": "2"
  },
  "CC-DEPTR": {
   "name": "CC-DEPTR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 25,
   "value": "3"
  },
  "P-LEN": {
   "name": "P-LEN",
   "kind": "global",
   "file": "parser.zil",
   "line": 27,
   "value": "0"
  },
  "P-DIR": {
   "name": "P-DIR",
   "kind": "global",
   "file": "parser.zil",
   "line": 28,
   "value": "0"
  },
  "HERE": {
   "name": "HERE",
   "kind": "global",
   "file": "parser.zil",
   "line": 29,
   "value": "0"
  },
  "WINNER": {
   "name": "WINNER",
   "kind": "global",
   "file": "parser.zil",
   "line": 30,
   "value": "0"
  },
  "P-LEXV": {
   "name": "P-LEXV",
   "kind": "global",
   "file": "parser.zil",
   "line": 32,
   "value": "<ITABLE 59 (LEXV) 0 #BYTE 0 #BYTE 0>"
  },
  "AGAIN-LEXV": {
   "name": "AGAIN-LEXV",
   "kind": "global",
   "file": "parser.zil",
   "line": 34,
   "value": "<ITABLE 59 (LEXV) 0 #BYTE 0 #BYTE 0>"
  },
  "RESERVE-LEXV": {
   "name": "RESERVE-LEXV",
   "kind": "global",
   "file": "parser.zil",
   "line": 36,
   "value": "<ITABLE 59 (LEXV) 0 #BYTE 0 #BYTE 0>"
  },
  "RESERVE-PTR": {
   "name": "RESERVE-PTR",
   "kind": "global",
   "file": "parser.zil",
   "line": 38,
   "value": "<>"
  },
  "P-INBUF": {
   "name": "P-INBUF",
   "kind": "global",
   "file": "parser.zil",
   "line": 42,
   "value": "<ITABLE 120 (BYTE LENGTH) 0>"
  },
  "OOPS-INBUF": {
   "name": "OOPS-INBUF",
   "kind": "global",
   "file": "parser.zil",
   "line": 45,
   "value": "<ITABLE 120 (BYTE LENGTH) 0>"
  },
  "OOPS-TABLE": {
   "name": "OOPS-TABLE",
   "kind": "global",
   "file": "parser.zil",
   "line": 48,
   "value": "<TABLE <> <> <> <>>"
  },
  "O-PTR": {
   "name": "O-PTR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 49,
   "value": "0"
  },
  "O-START": {
   "name": "O-START",
   "kind": "constant",
   "file": "parser.zil",
   "line": 50,
   "value": "1"
  },
  "O-LENGTH": {
   "name": "O-LENGTH",
   "kind": "constant",
   "file": "parser.zil",
   "line": 51,
   "value": "2"
  },
  "O-END": {
   "name": "O-END",
   "kind": "constant",
   "file": "parser.zil",
   "line": 52,
   "value": "3"
  },
  "P-CONT": {
   "name": "P-CONT",
   "kind": "global",
   "file": "parser.zil",
   "line": 56,
   "value": "<>"
  },
  "P-IT-OBJECT": {
   "name": "P-IT-OBJECT",
   "kind": "global",
   "file": "parser.zil",
   "line": 57,
   "value": "<>"
  },
  "P-OFLAG": {
   "name": "P-OFLAG",
   "kind": "global",
   "file": "parser.zil",
   "line": 62,
   "value": "<>"
  },
  "P-MERGED": {
   "name": "P-MERGED",
   "kind": "global",
   "file": "parser.zil",
   "line": 63,
   "value": "<>"
  },
  "P-ACLAUSE": {
   "name": "P-ACLAUSE",
   "kind": "global",
   "file": "parser.zil",
   "line": 64,
   "value": "<>"
  },
  "P-ANAM": {
   "name": "P-ANAM",
   "kind": "global",
   "file": "parser.zil",
   "line": 65,
   "value": "<>"
  },
  "P-AADJ": {
   "name": "P-AADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 66,
   "value": "<>"
  },
  "P-LEXWORDS": {
   "name": "P-LEXWORDS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 71,
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
   "line": 73,
   "value": "2"
  },
  "P-WORDLEN": {
   "name": "P-WORDLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 74,
   "value": "4"
  },
  "P-PSOFF": {
   "name": "P-PSOFF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 76,
   "value": "4"
  },
  "P-P1OFF": {
   "name": "P-P1OFF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 77,
   "value": "5"
  },
  "P-P1BITS": {
   "name": "P-P1BITS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 78,
   "value": "3"
  },
  "P-ITBLLEN": {
   "name": "P-ITBLLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 80,
   "value": "9"
  },
  "P-ITBL": {
   "name": "P-ITBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 81,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-OTBL": {
   "name": "P-OTBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 82,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-VTBL": {
   "name": "P-VTBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 83,
   "value": "<TABLE 0 0 0 0>"
  },
  "P-OVTBL": {
   "name": "P-OVTBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 84,
   "value": "<TABLE 0 #BYTE 0 #BYTE 0>"
  },
  "P-NCN": {
   "name": "P-NCN",
   "kind": "global",
   "file": "parser.zil",
   "line": 86,
   "value": "0"
  },
  "P-VERB": {
   "name": "P-VERB",
   "kind": "constant",
   "file": "parser.zil",
   "line": 88,
   "value": "0"
  },
  "P-VERBN": {
   "name": "P-VERBN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 89,
   "value": "1"
  },
  "P-PREP1": {
   "name": "P-PREP1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 90,
   "value": "2"
  },
  "P-PREP1N": {
   "name": "P-PREP1N",
   "kind": "constant",
   "file": "parser.zil",
   "line": 91,
   "value": "3"
  },
  "P-PREP2": {
   "name": "P-PREP2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 92,
   "value": "4"
  },
  "P-PREP2N": {
   "name": "P-PREP2N",
   "kind": "constant",
   "file": "parser.zil",
   "line": 93,
   "value": "5"
  },
  "P-NC1": {
   "name": "P-NC1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 94,
   "value": "6"
  },
  "P-NC1L": {
   "name": "P-NC1L",
   "kind": "constant",
   "file": "parser.zil",
   "line": 95,
   "value": "7"
  },
  "P-NC2": {
   "name": "P-NC2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 96,
   "value": "8"
  },
  "P-NC2L": {
   "name": "P-NC2L",
   "kind": "constant",
   "file": "parser.zil",
   "line": 97,
   "value": "9"
  },
  "QUOTE-FLAG": {
   "name": "QUOTE-FLAG",
   "kind": "global",
   "file": "parser.zil",
   "line": 99,
   "value": "<>"
  },
  "P-END-ON-PREP": {
   "name": "P-END-ON-PREP",
   "kind": "global",
   "file": "parser.zil",
   "line": 100,
   "value": "<>"
  },
  "P-ACT": {
   "name": "P-ACT",
   "kind": "global",
   "file": "parser.zil",
   "line": 381,
   "value": "<>"
  },
  "P-WALK-DIR": {
   "name": "P-WALK-DIR",
   "kind": "global",
   "file": "parser.zil",
   "line": 382,
   "value": "<>"
  },
  "AGAIN-DIR": {
   "name": "AGAIN-DIR",
   "kind": "global",
   "file": "parser.zil",
   "line": 383,
   "value": "<>"
  },
  "P-NUMBER": {
   "name": "P-NUMBER",
   "kind": "global",
   "file": "parser.zil",
   "line": 535,
   "value": "0"
  },
  "P-SLOCBITS": {
   "name": "P-SLOCBITS",
   "kind": "global",
   "file": "parser.zil",
   "line": 689,
   "value": "0"
  },
  "P-SPREP1": {
   "name": "P-SPREP1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 705,
   "value": "0"
  },
  "P-SACTION": {
   "name": "P-SACTION",
   "kind": "constant",
   "file": "parser.zil",
   "line": 706,
   "value": "1"
  },
  "P-SFWIM1": {
   "name": "P-SFWIM1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 707,
   "value": "2"
  },
  "P-SLOC1": {
   "name": "P-SLOC1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 708,
   "value": "3"
  },
  "P-SPREP2": {
   "name": "P-SPREP2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 709,
   "value": "4"
  },
  "P-SFWIM2": {
   "name": "P-SFWIM2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 710,
   "value": "5"
  },
  "P-SLOC2": {
   "name": "P-SLOC2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 711,
   "value": "6"
  },
  "P-SYNLEN-0": {
   "name": "P-SYNLEN-0",
   "kind": "constant",
   "file": "parser.zil",
   "line": 714,
   "value": "2"
  },
  "P-SYNLEN-1": {
   "name": "P-SYNLEN-1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 715,
   "value": "4"
  },
  "P-SYNLEN-2": {
   "name": "P-SYNLEN-2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 716,
   "value": "7"
  },
  "P-GWIMBIT": {
   "name": "P-GWIMBIT",
   "kind": "global",
   "file": "parser.zil",
   "line": 946,
   "value": "0"
  },
  "P-NAM": {
   "name": "P-NAM",
   "kind": "global",
   "file": "parser.zil",
   "line": 1009,
   "value": "<>"
  },
  "P-ADJ": {
   "name": "P-ADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 1010,
   "value": "<>"
  },
  "P-ADVERB": {
   "name": "P-ADVERB",
   "kind": "global",
   "file": "parser.zil",
   "line": 1011,
   "value": "<>"
  },
  "P-ADJN": {
   "name": "P-ADJN",
   "kind": "global",
   "file": "parser.zil",
   "line": 1012,
   "value": "<>"
  },
  "P-PRSO": {
   "name": "P-PRSO",
   "kind": "global",
   "file": "parser.zil",
   "line": 1013,
   "value": "<ITABLE NONE 50>"
  },
  "P-PRSI": {
   "name": "P-PRSI",
   "kind": "global",
   "file": "parser.zil",
   "line": 1014,
   "value": "<ITABLE NONE 50>"
  },
  "P-BUTS": {
   "name": "P-BUTS",
   "kind": "global",
   "file": "parser.zil",
   "line": 1015,
   "value": "<ITABLE NONE 50>"
  },
  "P-MERGE": {
   "name": "P-MERGE",
   "kind": "global",
   "file": "parser.zil",
   "line": 1016,
   "value": "<ITABLE NONE 50>"
  },
  "P-OCLAUSE": {
   "name": "P-OCLAUSE",
   "kind": "global",
   "file": "parser.zil",
   "line": 1017,
   "value": "<ITABLE NONE 100>"
  },
  "P-MATCHLEN": {
   "name": "P-MATCHLEN",
   "kind": "global",
   "file": "parser.zil",
   "line": 1018,
   "value": "0"
  },
  "P-GETFLAGS": {
   "name": "P-GETFLAGS",
   "kind": "global",
   "file": "parser.zil",
   "line": 1019,
   "value": "0"
  },
  "P-ALL": {
   "name": "P-ALL",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1020,
   "value": "1"
  },
  "P-ONE": {
   "name": "P-ONE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1021,
   "value": "2"
  },
  "P-INHIBIT": {
   "name": "P-INHIBIT",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1022,
   "value": "4"
  },
  "P-AND": {
   "name": "P-AND",
   "kind": "global",
   "file": "parser.zil",
   "line": 1024,
   "value": "<>"
  },
  "SH": {
   "name": "SH",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1080,
   "value": "128"
  },
  "SC": {
   "name": "SC",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1081,
   "value": "64"
  },
  "SIR": {
   "name": "SIR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1082,
   "value": "32"
  },
  "SOG": {
   "name": "SOG",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1083,
   "value": "16"
  },
  "STAKE": {
   "name": "STAKE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1084,
   "value": "8"
  },
  "SMANY": {
   "name": "SMANY",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1085,
   "value": "4"
  },
  "SHAVE": {
   "name": "SHAVE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1086,
   "value": "2"
  },
  "P-XNAM": {
   "name": "P-XNAM",
   "kind": "global",
   "file": "parser.zil",
   "line": 1201,
   "value": "<>"
  },
  "P-XADJ": {
   "name": "P-XADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 1202,
   "value": "<>"
  },
  "P-XADJN": {
   "name": "P-XADJN",
   "kind": "global",
   "file": "parser.zil",
   "line": 1203,
   "value": "<>"
  },
  "P-SRCBOT": {
   "name": "P-SRCBOT",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1273,
   "value": "2"
  },
  "P-SRCTOP": {
   "name": "P-SRCTOP",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1274,
   "value": "0"
  },
  "P-SRCALL": {
   "name": "P-SRCALL",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1275,
   "value": "1"
  },
  "TROLL-FLAG": {
   "name": "TROLL-FLAG",
   "kind": "global",
   "file": "south-of-res.zil",
   "line": 90,
   "value": "<>"
  },
  "GATE-FLAG": {
   "name": "GATE-FLAG",
   "kind": "global",
   "file": "south-of-res.zil",
   "line": 176,
   "value": "<>"
  },
  "MATCH-COUNT": {
   "name": "MATCH-COUNT",
   "kind": "global",
   "file": "south-of-res.zil",
   "line": 210,
   "value": "6"
  },
  "LOW-TIDE": {
   "name": "LOW-TIDE",
   "kind": "global",
   "file": "south-of-res.zil",
   "line": 291,
   "value": "<>"
  },
  "DOME-FLAG": {
   "name": "DOME-FLAG",
   "kind": "global",
   "file": "south-of-res.zil",
   "line": 552,
   "value": "<>"
  },
  "COFFIN-CURE": {
   "name": "COFFIN-CURE",
   "kind": "global",
   "file": "south-of-res.zil",
   "line": 733,
   "value": "<>"
  },
  "CANDLE-TABLE": {
   "name": "CANDLE-TABLE",
   "kind": "global",
   "file": "south-of-res.zil",
   "line": 843,
   "value": "<TABLE (PURE) 20 \"The candles grow shorter.\" 10 \"The candles are becoming quite short.\" 5 \"The candles won't last long now.\" 0>"
  },
  "HADES-FLAG": {
   "name": "HADES-FLAG",
   "kind": "global",
   "file": "south-of-res.zil",
   "line": 912,
   "value": "<>"
  },
  "XB": {
   "name": "XB",
   "kind": "global",
   "file": "south-of-res.zil",
   "line": 1000,
   "value": "<>"
  },
  "XC": {
   "name": "XC",
   "kind": "global",
   "file": "south-of-res.zil",
   "line": 1002,
   "value": "<>"
  },
  "BEACH-DIG": {
   "name": "BEACH-DIG",
   "kind": "global",
   "file": "south-of-res.zil",
   "line": 1174,
   "value": "-1"
  },
  "BDIGS": {
   "name": "BDIGS",
   "kind": "global",
   "file": "south-of-res.zil",
   "line": 1176,
   "value": "<TABLE (PURE) \"You seem to be digging a hole here.\" \"The hole is getting deeper, but that's about it.\" \"You are surrounded by a wall of sand on all sides.\">"
  },
  "RIVER-SPEEDS": {
   "name": "RIVER-SPEEDS",
   "kind": "global",
   "file": "south-of-res.zil",
   "line": 1241,
   "value": "<LTABLE (PURE) RIVER-1 5 RIVER-2 4 RIVER-3 3>"
  },
  "RIVER-NEXT": {
   "name": "RIVER-NEXT",
   "kind": "global",
   "file": "south-of-res.zil",
   "line": 1244,
   "value": "<LTABLE (PURE) RIVER-1 RIVER-2 RIVER-3>"
  },
  "RIVER-LAUNCH": {
   "name": "RIVER-LAUNCH",
   "kind": "global",
   "file": "south-of-res.zil",
   "line": 1247,
   "value": "<LTABLE (PURE) DAM-BASE RIVER-1 WHITE-CLIFFS-BEACH RIVER-3 SANDY-BEACH RIVER-3 RESERVOIR-SOUTH RESERVOIR RESERVOIR-NORTH RESERVOIR>"
  },
  "THIEF-HERE": {
   "name": "THIEF-HERE",
   "kind": "global",
   "file": "thief.zil",
   "line": 183,
   "value": "<>"
  },
  "TROLL-MELEE": {
   "name": "TROLL-MELEE",
   "kind": "global",
   "file": "thief.zil",
   "line": 393,
   "value": "<TABLE ;0 \"The troll's axe barely misses your ear.\" ;1 \"The axe crashes against the rock, throwing sparks!\" ;2 \"The axe blade nicks your side. Ouch!\" ;3 \"The flat of the troll's axe skins across your forearm.\" ;4 \"The troll charges, and his axe slashes you on your arm.\" ;5 \"An axe stroke makes a deep wound in your leg.\" ;6 \"The troll neatly removes your head.\">"
  },
  "THIEF-MELEE": {
   "name": "THIEF-MELEE",
   "kind": "global",
   "file": "thief.zil",
   "line": 403,
   "value": "<TABLE ;0 \"The thief stabs nonchalantly with his stiletto and misses.\" ;1 \"You dodge as the thief comes in low.\" ;2 \"The thief draws blood, raking his stiletto across your arm.\" ;3 \"The stiletto flashes, and blood wells from your leg.\" ;4 \"The stiletto gashes your forehead, and blood obscures your vision.\" ;5 \"The thief slashes your wrist, leaving your grip slippery with blood.\" ;6 \"The thief, forgetting his genteel upbringing, cuts your throat.\">"
  },
  "CURE-COUNT": {
   "name": "CURE-COUNT",
   "kind": "global",
   "file": "thief.zil",
   "line": 413,
   "value": "10"
  },
  "VERBOSITY": {
   "name": "VERBOSITY",
   "kind": "global",
   "file": "verbs.zil",
   "line": 7,
   "value": "1"
  },
  "MOVES": {
   "name": "MOVES",
   "kind": "global",
   "file": "verbs.zil",
   "line": 128,
   "value": "0"
  },
  "SCORE": {
   "name": "SCORE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 130,
   "value": "0"
  },
  "ALTAR-SCORE": {
   "name": "ALTAR-SCORE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 690,
   "value": "15"
  },
  "INDENTS": {
   "name": "INDENTS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1005,
   "value": "<TABLE (PURE) \"\" \"  \" \"    \" \"      \" \"        \" \"          \">"
  },
  "LIT": {
   "name": "LIT",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1014,
   "value": "<>"
  },
  "DESC-OBJECT": {
   "name": "DESC-OBJECT",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1050,
   "value": "<>"
  },
  "DEAD": {
   "name": "DEAD",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1187,
   "value": "<>"
  },
  "DEATHS": {
   "name": "DEATHS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1189,
   "value": "0"
  },
  "ABOVE-GROUND-ROOMS": {
   "name": "ABOVE-GROUND-ROOMS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1263,
   "value": "<TABLE <> NORTH-OF-HOUSE FOREST-PATH BEHIND-HOUSE FOREST-EDGE FOREST-NORTH FOREST-SOUTH CANYON-VIEW>"
  },
  "FUMBLE-NUMBER": {
   "name": "FUMBLE-NUMBER",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1341,
   "value": "7"
  },
  "FUMBLE-PROB": {
   "name": "FUMBLE-PROB",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1343,
   "value": "8"
  },
  "REXIT": {
   "name": "REXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1415,
   "value": "0"
  },
  "UEXIT": {
   "name": "UEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1416,
   "value": "1"
  },
  "NEXIT": {
   "name": "NEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1417,
   "value": "2"
  },
  "FEXIT": {
   "name": "FEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1418,
   "value": "3"
  },
  "CEXIT": {
   "name": "CEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1419,
   "value": "4"
  },
  "DEXIT": {
   "name": "DEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1420,
   "value": "5"
  },
  "NEXITSTR": {
   "name": "NEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1422,
   "value": "0"
  },
  "FEXITFCN": {
   "name": "FEXITFCN",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1423,
   "value": "0"
  },
  "CEXITFLAG": {
   "name": "CEXITFLAG",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1424,
   "value": "1"
  },
  "CEXITSTR": {
   "name": "CEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1425,
   "value": "1"
  },
  "DEXITOBJ": {
   "name": "DEXITOBJ",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1426,
   "value": "1"
  },
  "DEXITSTR": {
   "name": "DEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1427,
   "value": "1"
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
     "file": "syntax.zil",
     "line": 26
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
     "file": "syntax.zil",
     "line": 28
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
     "file": "syntax.zil",
     "line": 30
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
     "line": 33
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
     "file": "syntax.zil",
     "line": 35
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
     "file": "syntax.zil",
     "line": 38
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
     "line": 41
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
     "line": 43
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
     "line": 45
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
     "line": 47
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
     "file": "syntax.zil",
     "line": 49
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
     "file": "syntax.zil",
     "line": 51
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
     "file": "syntax.zil",
     "line": 53
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
     "line": 55
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
     "file": "syntax.zil",
     "line": 57
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
     "file": "syntax.zil",
     "line": 59
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
     "file": "syntax.zil",
     "line": 61
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
     "file": "syntax.zil",
     "line": 63
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
     "file": "syntax.zil",
     "line": 72
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
     "file": "syntax.zil",
     "line": 76
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
     "line": 77
    },
    {
     "pattern": "BLOW UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-INFLATE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 79
    },
    {
     "pattern": "BLOW IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-BREATHE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 80
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
     "file": "syntax.zil",
     "line": 82
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
     "file": "syntax.zil",
     "line": 84
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
     "line": 87
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
     "action": "V-CLIMB",
     "preaction": null,
     "file": "syntax.zil",
     "line": 92
    },
    {
     "pattern": "CLIMB DOWN OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 93
    },
    {
     "pattern": "CLIMB OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLIMB",
     "preaction": null,
     "file": "syntax.zil",
     "line": 94
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
     "line": 95
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
     "line": 96
    },
    {
     "pattern": "CLIMB WITH OBJECT",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 97
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
     "file": "syntax.zil",
     "line": 100
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
     "file": "syntax.zil",
     "line": 102
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
     "file": "syntax.zil",
     "line": 104
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
     "file": "syntax.zil",
     "line": 107
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
     "file": "syntax.zil",
     "line": 110
    },
    {
     "pattern": "CURSE OBJECT (FIND ACTORBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-CURSES",
     "preaction": null,
     "file": "syntax.zil",
     "line": 111
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
     "file": "syntax.zil",
     "line": 114
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
     "file": "syntax.zil",
     "line": 116
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
     "line": 118
    },
    {
     "pattern": "DESTROY IN OBJECT (ON-GROUND IN-ROOM HELD CARRIED)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-OPEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 120
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
     "file": "syntax.zil",
     "line": 123
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
     "file": "syntax.zil",
     "line": 124
    },
    {
     "pattern": "DIG OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-DIG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 126
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
     "file": "syntax.zil",
     "line": 129
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
     "line": 131
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
     "file": "syntax.zil",
     "line": 134
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
     "line": 135
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
     "line": 136
    },
    {
     "pattern": "DROP OBJECT (HELD MANY HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 137
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
     "file": "syntax.zil",
     "line": 140
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
     "file": "syntax.zil",
     "line": 144
    },
    {
     "pattern": "ENTER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 145
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
     "file": "syntax.zil",
     "line": 147
    },
    {
     "pattern": "EXIT OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 148
    },
    {
     "pattern": "EXIT UP OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 149
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
     "file": "syntax.zil",
     "line": 152
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
     "line": 153
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
     "line": 155
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
     "file": "syntax.zil",
     "line": 159
    },
    {
     "pattern": "EXORCISE OUT OBJECT (FIND ACTORBIT)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-EXORCISE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 160
    },
    {
     "pattern": "EXORCISE AWAY OBJECT (FIND ACTORBIT)",
     "objects": 1,
     "particles": [
      "AWAY"
     ],
     "action": "V-EXORCISE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 161
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
     "file": "syntax.zil",
     "line": 164
    }
   ]
  },
  "FILL": {
   "verb": "FILL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FILL OBJECT (FIND CONTBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-FILL",
     "preaction": "PRE-FILL",
     "file": "syntax.zil",
     "line": 168
    },
    {
     "pattern": "FILL OBJECT (FIND CONTBIT) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-FILL",
     "preaction": "PRE-FILL",
     "file": "syntax.zil",
     "line": 169
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
     "file": "syntax.zil",
     "line": 171
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
     "file": "syntax.zil",
     "line": 174
    },
    {
     "pattern": "FOLLOW OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 175
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
     "file": "syntax.zil",
     "line": 178
    },
    {
     "pattern": "GIVE OBJECT (FIND ACTORBIT) (ON-GROUND) OBJECT (MANY HELD HAVE)",
     "objects": 2,
     "particles": [],
     "action": "V-SGIVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 180
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
     "file": "syntax.zil",
     "line": 184
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
     "file": "syntax.zil",
     "line": 186
    },
    {
     "pattern": "HELLO OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-HELLO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 187
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
     "file": "syntax.zil",
     "line": 190
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
     "file": "syntax.zil",
     "line": 193
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
     "line": 194
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
     "line": 195
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
     "line": 196
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
     "line": 197
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
     "line": 198
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
     "file": "syntax.zil",
     "line": 201
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
     "file": "syntax.zil",
     "line": 203
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
     "file": "syntax.zil",
     "line": 207
    },
    {
     "pattern": "STAB OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 208
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
     "file": "syntax.zil",
     "line": 211
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
     "file": "syntax.zil",
     "line": 213
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
     "line": 214
    },
    {
     "pattern": "KNOCK DOWN OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 215
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
     "file": "syntax.zil",
     "line": 218
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
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 220
    },
    {
     "pattern": "LEAVE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-DROP",
     "preaction": "PRE-DROP",
     "file": "syntax.zil",
     "line": 221
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
     "file": "syntax.zil",
     "line": 223
    },
    {
     "pattern": "LIGHT OBJECT (FIND LIGHTBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (FIND FLAMEBIT) (HELD CARRIED TAKE HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-BURN",
     "preaction": "PRE-BURN",
     "file": "syntax.zil",
     "line": 225
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
     "file": "syntax.zil",
     "line": 228
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
     "line": 229
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
     "file": "syntax.zil",
     "line": 231
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
     "file": "syntax.zil",
     "line": 234
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
     "line": 235
    },
    {
     "pattern": "LOOK UP OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-LOOK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 236
    },
    {
     "pattern": "LOOK DOWN OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-LOOK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 237
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
     "line": 238
    },
    {
     "pattern": "LOOK ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 239
    },
    {
     "pattern": "LOOK WITH OBJECT (HELD CARRIED ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 240
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
     "line": 241
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
     "line": 242
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
     "line": 243
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
     "line": 244
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
     "file": "syntax.zil",
     "line": 247
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
     "file": "syntax.zil",
     "line": 249
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
     "file": "syntax.zil",
     "line": 251
    },
    {
     "pattern": "MOVE OBJECT (HELD MANY HAVE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 252
    },
    {
     "pattern": "MOVE OBJECT WITH OBJECT (FIND TOOLBIT)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TURN",
     "preaction": "PRE-TURN",
     "file": "syntax.zil",
     "line": 253
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
     "file": "syntax.zil",
     "line": 254
    },
    {
     "pattern": "ROLL OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-MOVE",
     "preaction": "PRE-MOVE",
     "file": "syntax.zil",
     "line": 255
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
     "file": "syntax.zil",
     "line": 257
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
     "file": "syntax.zil",
     "line": 260
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
     "line": 261
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
     "line": 263
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
     "file": "syntax.zil",
     "line": 266
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
     "line": 267
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
     "line": 268
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
     "file": "syntax.zil",
     "line": 270
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
     "file": "syntax.zil",
     "line": 273
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-DROP",
     "preaction": "PRE-DROP",
     "file": "syntax.zil",
     "line": 274
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-POUR-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 275
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-DROP",
     "preaction": "PRE-DROP",
     "file": "syntax.zil",
     "line": 276
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
     "file": "syntax.zil",
     "line": 279
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
     "file": "syntax.zil",
     "line": 281
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
     "line": 282
    },
    {
     "pattern": "PULL UP OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-MOVE",
     "preaction": "PRE-MOVE",
     "file": "syntax.zil",
     "line": 283
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
     "file": "syntax.zil",
     "line": 286
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
     "line": 287
    }
   ]
  },
  "PUSH": {
   "verb": "PUSH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PUSH OBJECT (IN-ROOM ON-GROUND MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-PUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 289
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
     "line": 290
    },
    {
     "pattern": "PUSH OBJECT WITH OBJECT (FIND TOOLBIT)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TURN",
     "preaction": "PRE-TURN",
     "file": "syntax.zil",
     "line": 291
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
     "file": "syntax.zil",
     "line": 294
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
     "line": 295
    },
    {
     "pattern": "PUT DOWN OBJECT (HELD MANY)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-DROP",
     "preaction": "PRE-DROP",
     "file": "syntax.zil",
     "line": 296
    },
    {
     "pattern": "PUT OUT OBJECT (FIND ONBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE HAVE)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 297
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
     "file": "syntax.zil",
     "line": 301
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
     "line": 302
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
     "file": "syntax.zil",
     "line": 305
    },
    {
     "pattern": "READ FROM OBJECT (FIND READBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE)",
     "objects": 1,
     "particles": [
      "FROM"
     ],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "syntax.zil",
     "line": 307
    },
    {
     "pattern": "READ OBJECT (FIND READBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-READ-PAGE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 309
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
     "file": "syntax.zil",
     "line": 313
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
     "file": "syntax.zil",
     "line": 315
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
     "file": "syntax.zil",
     "line": 318
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
     "line": 319
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
     "file": "syntax.zil",
     "line": 322
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
     "file": "syntax.zil",
     "line": 323
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
     "file": "syntax.zil",
     "line": 326
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
     "line": 327
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
     "line": 328
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
     "file": "syntax.zil",
     "line": 330
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
     "file": "syntax.zil",
     "line": 332
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
     "file": "syntax.zil",
     "line": 335
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
     "file": "syntax.zil",
     "line": 338
    },
    {
     "pattern": "STRIKE OBJECT (ON-GROUND IN-ROOM HELD CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-STRIKE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 340
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
     "file": "syntax.zil",
     "line": 342
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
     "line": 343
    },
    {
     "pattern": "SWIM ACROSS OBJECT",
     "objects": 1,
     "particles": [
      "ACROSS"
     ],
     "action": "V-SWIM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 344
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
     "file": "syntax.zil",
     "line": 347
    },
    {
     "pattern": "SWING OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE) AT OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-SWING",
     "preaction": null,
     "file": "syntax.zil",
     "line": 348
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
     "file": "syntax.zil",
     "line": 352
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
     "line": 353
    },
    {
     "pattern": "TAKE OUT OBJECT (FIND RMUNGBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 354
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
     "line": 355
    },
    {
     "pattern": "TAKE UP OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 356
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
     "line": 357
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
     "line": 359
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
     "line": 361
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
     "file": "syntax.zil",
     "line": 365
    },
    {
     "pattern": "TELL OBJECT (FIND ACTORBIT) (IN-ROOM) ABOUT OBJECT",
     "objects": 2,
     "particles": [
      "ABOUT"
     ],
     "action": "V-TELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 366
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
     "file": "syntax.zil",
     "line": 369
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) WITH OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-THROW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 371
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
     "line": 373
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 374
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
     "line": 375
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
     "line": 376
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
     "file": "syntax.zil",
     "line": 379
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
     "pattern": "TURN OBJECT (FIND TURNBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (FIND RMUNGBIT)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TURN",
     "preaction": "PRE-TURN",
     "file": "syntax.zil",
     "line": 384
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
     "line": 386
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
     "file": "syntax.zil",
     "line": 388
    },
    {
     "pattern": "TURN OFF OBJECT (FIND ONBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE HAVE)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 389
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
     "line": 391
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
     "line": 392
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
     "file": "syntax.zil",
     "line": 396
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
     "file": "syntax.zil",
     "line": 399
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
     "line": 400
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
     "file": "syntax.zil",
     "line": 404
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
     "file": "syntax.zil",
     "line": 407
    },
    {
     "pattern": "WAKE UP OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-ALARM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 408
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
     "file": "syntax.zil",
     "line": 411
    },
    {
     "pattern": "WALK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WALK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 412
    },
    {
     "pattern": "WALK AWAY OBJECT",
     "objects": 1,
     "particles": [
      "AWAY"
     ],
     "action": "V-WALK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 413
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
     "line": 414
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
     "line": 415
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
     "line": 416
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
     "line": 417
    },
    {
     "pattern": "WALK TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-WALK-AROUND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 418
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
     "line": 419
    },
    {
     "pattern": "WALK UP OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-CLIMB",
     "preaction": null,
     "file": "syntax.zil",
     "line": 420
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
     "line": 421
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
     "file": "syntax.zil",
     "line": 424
    },
    {
     "pattern": "WAVE OBJECT (HELD CARRIED TAKE HAVE) AT OBJECT",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-WAVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 425
    },
    {
     "pattern": "WAVE AT OBJECT",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-WAVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 426
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
     "file": "syntax.zil",
     "line": 429
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
     "file": "syntax.zil",
     "line": 432
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
     "of": "POKE"
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
     "of": "RUB"
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
     "of": "EXIT"
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
    },
    {
     "kind": "word",
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
  "INFLAT": {
   "word": "INFLAT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "INFLATABLE-BOAT"
    },
    {
     "kind": "adjective",
     "of": "INFLATED-BOAT"
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
  "MAKE": {
   "word": "MAKE",
   "roles": [
    {
     "kind": "verb",
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
  "POKE": {
   "word": "POKE",
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
  "DISEMBARK": {
   "word": "DISEMBARK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EXIT"
    }
   ]
  },
  "STAND": {
   "word": "STAND",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EXIT"
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
  "HAND": {
   "word": "HAND",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "GIVE"
    },
    {
     "kind": "noun",
     "of": "HANDS"
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
  "ULYSSES": {
   "word": "ULYSSES",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ODYSSEUS"
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
  "LIFT": {
   "word": "LIFT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "RAISE"
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
  "ANSWER": {
   "word": "ANSWER",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SAY"
    }
   ]
  },
  "REPLY": {
   "word": "REPLY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SAY"
    }
   ]
  },
  "INCANT": {
   "word": "INCANT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SAY"
    }
   ]
  },
  "CHANT": {
   "word": "CHANT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SAY"
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
  "SMALL": {
   "word": "SMALL",
   "roles": [
    {
     "kind": "adjective",
     "of": "MAILBOX"
    },
    {
     "kind": "adjective",
     "of": "KITCHEN-WINDOW"
    },
    {
     "kind": "adjective",
     "of": "COAL"
    },
    {
     "kind": "adjective",
     "of": "SLAG"
    },
    {
     "kind": "adjective",
     "of": "BUBBLE"
    },
    {
     "kind": "adjective",
     "of": "BELL"
    }
   ]
  },
  "MAIL": {
   "word": "MAIL",
   "roles": [
    {
     "kind": "adjective",
     "of": "MAILBOX"
    },
    {
     "kind": "noun",
     "of": "LEAFLET"
    }
   ]
  },
  "LEAFLET": {
   "word": "LEAFLET",
   "roles": [
    {
     "kind": "noun",
     "of": "LEAFLET"
    }
   ]
  },
  "DOOR": {
   "word": "DOOR",
   "roles": [
    {
     "kind": "noun",
     "of": "FRONT-DOOR"
    },
    {
     "kind": "noun",
     "of": "WOODEN-DOOR"
    },
    {
     "kind": "noun",
     "of": "TRAP-DOOR"
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
  "BOARDED": {
   "word": "BOARDED",
   "roles": [
    {
     "kind": "adjective",
     "of": "FRONT-DOOR"
    },
    {
     "kind": "adjective",
     "of": "BOARDED-WINDOW"
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
     "of": "WHITE-CLIFF"
    },
    {
     "kind": "adjective",
     "of": "PEDESTAL"
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
  "WINDOW": {
   "word": "WINDOW",
   "roles": [
    {
     "kind": "noun",
     "of": "BOARDED-WINDOW"
    },
    {
     "kind": "noun",
     "of": "KITCHEN-WINDOW"
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
     "of": "PATH-OBJECT"
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
     "of": "ROPE"
    },
    {
     "kind": "adjective",
     "of": "RUG"
    },
    {
     "kind": "adjective",
     "of": "BOLT"
    },
    {
     "kind": "adjective",
     "of": "BLACK-BOOK"
    },
    {
     "kind": "adjective",
     "of": "EMERALD"
    },
    {
     "kind": "adjective",
     "of": "LARGE-BAG"
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
    }
   ]
  },
  "EGG": {
   "word": "EGG",
   "roles": [
    {
     "kind": "noun",
     "of": "EGG"
    }
   ]
  },
  "TREASURE": {
   "word": "TREASURE",
   "roles": [
    {
     "kind": "noun",
     "of": "EGG"
    },
    {
     "kind": "noun",
     "of": "POT-OF-GOLD"
    },
    {
     "kind": "noun",
     "of": "BAG-OF-COINS"
    },
    {
     "kind": "noun",
     "of": "CHALICE"
    },
    {
     "kind": "noun",
     "of": "TRUNK"
    },
    {
     "kind": "noun",
     "of": "JADE"
    },
    {
     "kind": "noun",
     "of": "BRACELET"
    },
    {
     "kind": "noun",
     "of": "DIAMOND"
    },
    {
     "kind": "noun",
     "of": "PAINTING"
    },
    {
     "kind": "noun",
     "of": "TORCH"
    },
    {
     "kind": "noun",
     "of": "COFFIN"
    },
    {
     "kind": "noun",
     "of": "SCEPTRE"
    },
    {
     "kind": "noun",
     "of": "SKULL"
    },
    {
     "kind": "noun",
     "of": "EMERALD"
    },
    {
     "kind": "noun",
     "of": "SCARAB"
    }
   ]
  },
  "JEWELED": {
   "word": "JEWELED",
   "roles": [
    {
     "kind": "adjective",
     "of": "EGG"
    },
    {
     "kind": "adjective",
     "of": "SCARAB"
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
  "PILE": {
   "word": "PILE",
   "roles": [
    {
     "kind": "noun",
     "of": "LEAVES"
    },
    {
     "kind": "noun",
     "of": "COAL"
    },
    {
     "kind": "noun",
     "of": "INFLATABLE-BOAT"
    },
    {
     "kind": "noun",
     "of": "BODIES"
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
  "RAINBOW": {
   "word": "RAINBOW",
   "roles": [
    {
     "kind": "noun",
     "of": "RAINBOW"
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
  "GOLD": {
   "word": "GOLD",
   "roles": [
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
     "of": "COFFIN"
    }
   ]
  },
  "TABLE": {
   "word": "TABLE",
   "roles": [
    {
     "kind": "noun",
     "of": "KITCHEN-TABLE"
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
  "HOT": {
   "word": "HOT",
   "roles": [
    {
     "kind": "adjective",
     "of": "LUNCH"
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
  "BOTTLE": {
   "word": "BOTTLE",
   "roles": [
    {
     "kind": "noun",
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
  "WATER": {
   "word": "WATER",
   "roles": [
    {
     "kind": "noun",
     "of": "WATER"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-WATER"
    }
   ]
  },
  "QUANTITY": {
   "word": "QUANTITY",
   "roles": [
    {
     "kind": "noun",
     "of": "WATER"
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
  "ROPE": {
   "word": "ROPE",
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
  "MAP": {
   "word": "MAP",
   "roles": [
    {
     "kind": "noun",
     "of": "MAP"
    }
   ]
  },
  "OLD": {
   "word": "OLD",
   "roles": [
    {
     "kind": "adjective",
     "of": "MAP"
    },
    {
     "kind": "adjective",
     "of": "SWORD"
    },
    {
     "kind": "adjective",
     "of": "BAG-OF-COINS"
    },
    {
     "kind": "adjective",
     "of": "TRUNK"
    },
    {
     "kind": "adjective",
     "of": "PRAYER"
    }
   ]
  },
  "PARCHMENT": {
   "word": "PARCHMENT",
   "roles": [
    {
     "kind": "adjective",
     "of": "MAP"
    }
   ]
  },
  "ANCIENT": {
   "word": "ANCIENT",
   "roles": [
    {
     "kind": "adjective",
     "of": "MAP"
    },
    {
     "kind": "adjective",
     "of": "PRAYER"
    },
    {
     "kind": "adjective",
     "of": "SCEPTRE"
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
  "ELVISH": {
   "word": "ELVISH",
   "roles": [
    {
     "kind": "adjective",
     "of": "SWORD"
    }
   ]
  },
  "LAMP": {
   "word": "LAMP",
   "roles": [
    {
     "kind": "noun",
     "of": "LAMP"
    },
    {
     "kind": "noun",
     "of": "BURNED-OUT-LANTERN"
    }
   ]
  },
  "LANTERN": {
   "word": "LANTERN",
   "roles": [
    {
     "kind": "noun",
     "of": "LAMP"
    },
    {
     "kind": "noun",
     "of": "BURNED-OUT-LANTERN"
    }
   ]
  },
  "BRASS": {
   "word": "BRASS",
   "roles": [
    {
     "kind": "adjective",
     "of": "LAMP"
    },
    {
     "kind": "adjective",
     "of": "BELL"
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
  "WOODEN": {
   "word": "WOODEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "WOODEN-DOOR"
    },
    {
     "kind": "adjective",
     "of": "RAILING"
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
  "INTNUM": {
   "word": "INTNUM",
   "roles": [
    {
     "kind": "noun",
     "of": "INTNUM"
    }
   ]
  },
  "WALL": {
   "word": "WALL",
   "roles": [
    {
     "kind": "noun",
     "of": "WALL"
    }
   ]
  },
  "WALLS": {
   "word": "WALLS",
   "roles": [
    {
     "kind": "noun",
     "of": "WALL"
    }
   ]
  },
  "STAIR": {
   "word": "STAIR",
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
  "STONE": {
   "word": "STONE",
   "roles": [
    {
     "kind": "adjective",
     "of": "STAIRS"
    }
   ]
  },
  "DARK": {
   "word": "DARK",
   "roles": [
    {
     "kind": "adjective",
     "of": "STAIRS"
    },
    {
     "kind": "adjective",
     "of": "CHIMNEY"
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
  "GROUND": {
   "word": "GROUND",
   "roles": [
    {
     "kind": "noun",
     "of": "GROUND"
    }
   ]
  },
  "SAND": {
   "word": "SAND",
   "roles": [
    {
     "kind": "noun",
     "of": "GROUND"
    },
    {
     "kind": "noun",
     "of": "SAND"
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
    },
    {
     "kind": "adjective",
     "of": "PUMP"
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
  "ADVENTURER": {
   "word": "ADVENTURER",
   "roles": [
    {
     "kind": "noun",
     "of": "ME"
    },
    {
     "kind": "noun",
     "of": "ADVENTURER"
    }
   ]
  },
  "BRAVE": {
   "word": "BRAVE",
   "roles": [
    {
     "kind": "adjective",
     "of": "ME"
    }
   ]
  },
  "TRAIL": {
   "word": "TRAIL",
   "roles": [
    {
     "kind": "noun",
     "of": "PATH-OBJECT"
    }
   ]
  },
  "PATH": {
   "word": "PATH",
   "roles": [
    {
     "kind": "noun",
     "of": "PATH-OBJECT"
    }
   ]
  },
  "PASSAGE": {
   "word": "PASSAGE",
   "roles": [
    {
     "kind": "noun",
     "of": "PATH-OBJECT"
    }
   ]
  },
  "TUNNEL": {
   "word": "TUNNEL",
   "roles": [
    {
     "kind": "noun",
     "of": "PATH-OBJECT"
    }
   ]
  },
  "NARROW": {
   "word": "NARROW",
   "roles": [
    {
     "kind": "adjective",
     "of": "PATH-OBJECT"
    },
    {
     "kind": "adjective",
     "of": "CHIMNEY"
    }
   ]
  },
  "LONG": {
   "word": "LONG",
   "roles": [
    {
     "kind": "adjective",
     "of": "PATH-OBJECT"
    }
   ]
  },
  "WINDING": {
   "word": "WINDING",
   "roles": [
    {
     "kind": "adjective",
     "of": "PATH-OBJECT"
    }
   ]
  },
  "PAIR": {
   "word": "PAIR",
   "roles": [
    {
     "kind": "noun",
     "of": "HANDS"
    },
    {
     "kind": "noun",
     "of": "CANDLES"
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
  },
  "REFLECTION": {
   "word": "REFLECTION",
   "roles": [
    {
     "kind": "noun",
     "of": "MIRROR"
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
  "CHIMNEY": {
   "word": "CHIMNEY",
   "roles": [
    {
     "kind": "noun",
     "of": "CHIMNEY"
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
  "LEATHER": {
   "word": "LEATHER",
   "roles": [
    {
     "kind": "adjective",
     "of": "BAG-OF-COINS"
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
  "SKELETON": {
   "word": "SKELETON",
   "roles": [
    {
     "kind": "adjective",
     "of": "KEYS"
    },
    {
     "kind": "noun",
     "of": "SKELETON"
    }
   ]
  },
  "BONES": {
   "word": "BONES",
   "roles": [
    {
     "kind": "noun",
     "of": "SKELETON"
    }
   ]
  },
  "BODY": {
   "word": "BODY",
   "roles": [
    {
     "kind": "noun",
     "of": "SKELETON"
    },
    {
     "kind": "noun",
     "of": "BODIES"
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
  "CYCLOPS": {
   "word": "CYCLOPS",
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
     "kind": "adjective",
     "of": "CHALICE"
    }
   ]
  },
  "INTRICATE": {
   "word": "INTRICATE",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHALICE"
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
  "CHEST": {
   "word": "CHEST",
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
  "AIR-PUMP": {
   "word": "AIR-PUMP",
   "roles": [
    {
     "kind": "noun",
     "of": "PUMP"
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
  "SLIDE": {
   "word": "SLIDE",
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
    }
   ]
  },
  "METAL": {
   "word": "METAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "SLIDE"
    },
    {
     "kind": "adjective",
     "of": "BOLT"
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
     "kind": "adjective",
     "of": "BAT"
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
  "BASKET": {
   "word": "BASKET",
   "roles": [
    {
     "kind": "noun",
     "of": "BASKET"
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
  "COAL": {
   "word": "COAL",
   "roles": [
    {
     "kind": "noun",
     "of": "COAL"
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
  "SWITCH": {
   "word": "SWITCH",
   "roles": [
    {
     "kind": "noun",
     "of": "MACHINE-SWITCH"
    }
   ]
  },
  "PIECE": {
   "word": "PIECE",
   "roles": [
    {
     "kind": "noun",
     "of": "SLAG"
    }
   ]
  },
  "SLAG": {
   "word": "SLAG",
   "roles": [
    {
     "kind": "noun",
     "of": "SLAG"
    }
   ]
  },
  "VITREOUS": {
   "word": "VITREOUS",
   "roles": [
    {
     "kind": "adjective",
     "of": "SLAG"
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
  "HUGE": {
   "word": "HUGE",
   "roles": [
    {
     "kind": "adjective",
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
  "MUTILATED": {
   "word": "MUTILATED",
   "roles": [
    {
     "kind": "adjective",
     "of": "PAINTING"
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
  "BOOK": {
   "word": "BOOK",
   "roles": [
    {
     "kind": "noun",
     "of": "GUIDE"
    },
    {
     "kind": "noun",
     "of": "BLACK-BOOK"
    }
   ]
  },
  "GUIDEBOOK": {
   "word": "GUIDEBOOK",
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
  "GUIDE": {
   "word": "GUIDE",
   "roles": [
    {
     "kind": "adjective",
     "of": "GUIDE"
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
  "BOLT": {
   "word": "BOLT",
   "roles": [
    {
     "kind": "noun",
     "of": "BOLT"
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
     "kind": "noun",
     "of": "INFLATABLE-BOAT"
    },
    {
     "kind": "adjective",
     "of": "INFLATABLE-BOAT"
    },
    {
     "kind": "adjective",
     "of": "INFLATED-BOAT"
    }
   ]
  },
  "DAM": {
   "word": "DAM",
   "roles": [
    {
     "kind": "noun",
     "of": "DAM-OBJECT"
    }
   ]
  },
  "GATE": {
   "word": "GATE",
   "roles": [
    {
     "kind": "noun",
     "of": "DAM-OBJECT"
    }
   ]
  },
  "GATES": {
   "word": "GATES",
   "roles": [
    {
     "kind": "noun",
     "of": "DAM-OBJECT"
    }
   ]
  },
  "FCD#3": {
   "word": "FCD#3",
   "roles": [
    {
     "kind": "noun",
     "of": "DAM-OBJECT"
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
  "RED": {
   "word": "RED",
   "roles": [
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
  "WRENCH": {
   "word": "WRENCH",
   "roles": [
    {
     "kind": "noun",
     "of": "WRENCH"
    }
   ]
  },
  "BOAT": {
   "word": "BOAT",
   "roles": [
    {
     "kind": "noun",
     "of": "INFLATABLE-BOAT"
    },
    {
     "kind": "noun",
     "of": "INFLATED-BOAT"
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
  "LABEL": {
   "word": "LABEL",
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
  "RAFT": {
   "word": "RAFT",
   "roles": [
    {
     "kind": "noun",
     "of": "INFLATED-BOAT"
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
  "BELL": {
   "word": "BELL",
   "roles": [
    {
     "kind": "noun",
     "of": "BELL"
    }
   ]
  },
  "PRAYER": {
   "word": "PRAYER",
   "roles": [
    {
     "kind": "noun",
     "of": "PRAYER"
    },
    {
     "kind": "noun",
     "of": "BLACK-BOOK"
    }
   ]
  },
  "INSCRIPTION": {
   "word": "INSCRIPTION",
   "roles": [
    {
     "kind": "noun",
     "of": "PRAYER"
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
  "SCEPTRE": {
   "word": "SCEPTRE",
   "roles": [
    {
     "kind": "noun",
     "of": "SCEPTRE"
    }
   ]
  },
  "ALTAR": {
   "word": "ALTAR",
   "roles": [
    {
     "kind": "noun",
     "of": "ALTAR-OBJECT"
    }
   ]
  },
  "PAGE": {
   "word": "PAGE",
   "roles": [
    {
     "kind": "noun",
     "of": "BLACK-BOOK"
    }
   ]
  },
  "BOOKS": {
   "word": "BOOKS",
   "roles": [
    {
     "kind": "noun",
     "of": "BLACK-BOOK"
    }
   ]
  },
  "BLACK": {
   "word": "BLACK",
   "roles": [
    {
     "kind": "adjective",
     "of": "BLACK-BOOK"
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
  "BURNING": {
   "word": "BURNING",
   "roles": [
    {
     "kind": "adjective",
     "of": "CANDLES"
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
  "EMERALD": {
   "word": "EMERALD",
   "roles": [
    {
     "kind": "noun",
     "of": "EMERALD"
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
  "SCARAB": {
   "word": "SCARAB",
   "roles": [
    {
     "kind": "noun",
     "of": "SCARAB"
    }
   ]
  },
  "BUG": {
   "word": "BUG",
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
  "SUSPICIOUS": {
   "word": "SUSPICIOUS",
   "roles": [
    {
     "kind": "adjective",
     "of": "THIEF"
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
  }
 },
 "files": [
  "above-ground.zil",
  "globals.zil",
  "maze.zil",
  "mini.zil",
  "misc.zil",
  "north-of-res.zil",
  "parser.zil",
  "south-of-res.zil",
  "syntax.zil",
  "thief.zil",
  "verbs.zil"
 ]
};
