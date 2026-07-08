window.WORLD = {
 "game": "Leather Goddesses of Phobos (X1)",
 "directions": [
  "NORTH",
  "NE",
  "EAST",
  "SE",
  "SOUTH",
  "SW",
  "WEST",
  "NW",
  "UP",
  "DOWN",
  "IN",
  "OUT"
 ],
 "rooms": {
  "UNDERWATER": {
   "name": "UNDERWATER",
   "file": "compone.zil",
   "line": 7,
   "endLine": 24,
   "desc": "Underwater",
   "ldesc": "You are momentarily disoriented as you enter the turbulent waters.\nCurrents buffet you against the sharp rocks of an underwater\ncliff. A dim light filters down from above.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RWATERBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "UNDERWATER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 35 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "CRAG",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "UNDERWATER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "UNDERWATER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "UNDERWATER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "UNDERWATER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM UNDERWATER\n      (LOC ROOMS)\n      (DESC \"Underwater\")\n      (LDESC\n\"You are momentarily disoriented as you enter the turbulent waters.\nCurrents buffet you against the sharp rocks of an underwater\ncliff. A dim light filters down from above.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"    35\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (UP TO CRAG)\n      (DOWN TO UNDERWATER)\n      (WEST TO UNDERWATER)\n      (NORTH TO UNDERWATER)\n      (SOUTH TO UNDERWATER)\n      (FLAGS ONBIT RWATERBIT)\n      (ACTION UNDERWATER-F)>",
   "referencedBy": [
    "WATER-LEVEL-F",
    "POD-EXIT-F",
    "V-SWIM",
    "V-SWIM-DIR",
    "V-SWIM-UP"
   ]
  },
  "CRAG": {
   "name": "CRAG",
   "file": "compone.zil",
   "line": 35,
   "endLine": 55,
   "desc": "Crag",
   "ldesc": "You have reached a cleft in the cliff wall where the island rises from the\nwater. The edge of the cleft displays recently exposed rock where it collapsed\nunder the weight of the escape pod. About two meters below, turbulent waters\nswirl against sharp rocks. A small structure clings to the face of the cliff\nabout eight meters above you. Even an out-of-shape Ensign Seventh Class could\nprobably climb up to it.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CRAG-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CLIFF",
    "OCEAN"
   ],
   "pseudo": [
    "STRUCTURE",
    "STRUCTURE-PSEUDO",
    "CLEFT",
    "CLEFT-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 10 ;\"UP\" 40 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ],
    "VALUE": [
     "3"
    ]
   },
   "exits": [
    {
     "to": "UNDERWATER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "BALCONY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM CRAG\n      (LOC ROOMS)\n      (DESC \"Crag\")\n      (LDESC\n\"You have reached a cleft in the cliff wall where the island rises from the\nwater. The edge of the cleft displays recently exposed rock where it collapsed\nunder the weight of the escape pod. About two meters below, turbulent waters\nswirl against sharp rocks. A small structure clings to the face of the cliff\nabout eight meters above you. Even an out-of-shape Ensign Seventh Class could\nprobably climb up to it.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\"10  ;\"UP\"    40\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (DOWN TO UNDERWATER)\n      (UP TO BALCONY)\n      (FLAGS ONBIT RLANDBIT)\n      (VALUE 3)\n      (GLOBAL CLIFF OCEAN)\n      (PSEUDO \"STRUCTURE\" STRUCTURE-PSEUDO \"CLEFT\" CLEFT-PSEUDO)\n      (ACTION CRAG-F)>",
   "referencedBy": [
    "WATER-LEVEL-F",
    "I-BLATHER",
    "I-SLEEP-WARNINGS"
   ]
  },
  "BALCONY": {
   "name": "BALCONY",
   "file": "compone.zil",
   "line": 61,
   "endLine": 73,
   "desc": "Balcony",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "BALCONY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CLIFF",
    "OCEAN",
    "STAIRS",
    "WINDOW"
   ],
   "pseudo": [
    "PLAQUE",
    "PLAQUE-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 25 ;\"UP\" 30 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "WATER-LEVEL-F",
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "WINDING-STAIR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM BALCONY\n      (LOC ROOMS)\n      (DESC \"Balcony\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\"25  ;\"UP\"    30\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (DOWN PER WATER-LEVEL-F)\n      (UP TO WINDING-STAIR)\n      (FLAGS ONBIT RLANDBIT)\n      (PSEUDO \"PLAQUE\" PLAQUE-PSEUDO)\n      (GLOBAL CLIFF OCEAN STAIRS WINDOW)\n      (ACTION BALCONY-F)>",
   "referencedBy": [
    "WATER-LEVEL-F",
    "WINDOW-F",
    "I-SLEEP-WARNINGS",
    "RESET-TIME"
   ]
  },
  "WINDING-STAIR": {
   "name": "WINDING-STAIR",
   "file": "compone.zil",
   "line": 95,
   "endLine": 106,
   "desc": "Winding Stair",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "WINDING-STAIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CLIFF",
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 15 ;\"UP\" 30 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "WATER-LEVEL-F",
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "COURTYARD",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM WINDING-STAIR\n      (LOC ROOMS)\n      (DESC \"Winding Stair\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\"15  ;\"UP\"    30\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (DOWN PER WATER-LEVEL-F)\n      (UP TO COURTYARD)\n      (FLAGS ONBIT RLANDBIT)\n      (GLOBAL CLIFF STAIRS)\n      (ACTION WINDING-STAIR-F)>",
   "referencedBy": [
    "WATER-LEVEL-F",
    "I-SLEEP-WARNINGS",
    "RESET-TIME"
   ]
  },
  "COURTYARD": {
   "name": "COURTYARD",
   "file": "compone.zil",
   "line": 120,
   "endLine": 134,
   "desc": "Courtyard",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT",
    "FLOYDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "COURTYARD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIRS"
   ],
   "pseudo": [
    "CASTLE",
    "CASTLE-PSEUDO",
    "RUBBLE",
    "RUBBLE-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 15 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "WINDING-STAIR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "WINDING-STAIR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "WEST-WING",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "PLAIN-HALL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM COURTYARD\n      (LOC ROOMS)\n      (DESC \"Courtyard\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\"15  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (DOWN TO WINDING-STAIR)\n      (SOUTH TO WINDING-STAIR)\n      (WEST TO WEST-WING)\n      (NORTH TO  PLAIN-HALL)\n      (FLAGS ONBIT RLANDBIT FLOYDBIT)\n      (GLOBAL STAIRS)\n      (PSEUDO \"CASTLE\" CASTLE-PSEUDO \"RUBBLE\" RUBBLE-PSEUDO)\n      (ACTION COURTYARD-F)>",
   "referencedBy": [
    "WATER-LEVEL-F",
    "RESET-TIME"
   ]
  },
  "WEST-WING": {
   "name": "WEST-WING",
   "file": "compone.zil",
   "line": 162,
   "endLine": 177,
   "desc": "West Wing",
   "ldesc": "This was once the west wing of the castle, but the walls are now mostly\nrubble, allowing a view of the cliff and ocean below. Rubble blocks all exits\nsave one, eastward to the courtyard.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT",
    "FLOYDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CLIFF",
    "OCEAN"
   ],
   "pseudo": [
    "CASTLE",
    "CASTLE-PSEUDO",
    "RUBBLE",
    "RUBBLE-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "COURTYARD",
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
     "message": "Certain death.",
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM WEST-WING\n      (LOC ROOMS)\n      (DESC \"West Wing\")\n      (LDESC\n\"This was once the west wing of the castle, but the walls are now mostly\nrubble, allowing a view of the cliff and ocean below. Rubble blocks all exits\nsave one, eastward to the courtyard.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (EAST TO COURTYARD)\n      (DOWN SORRY \"Certain death.\")\n      (FLAGS ONBIT RLANDBIT FLOYDBIT)\n      (GLOBAL CLIFF OCEAN)\n      (PSEUDO \"CASTLE\" CASTLE-PSEUDO \"RUBBLE\" RUBBLE-PSEUDO)>",
   "referencedBy": [
    "CLIFF-F"
   ]
  },
  "PLAIN-HALL": {
   "name": "PLAIN-HALL",
   "file": "compone.zil",
   "line": 179,
   "endLine": 193,
   "desc": "Plain Hall",
   "ldesc": "This is a featureless hall leading north and south. Although the hallway is\nold and dusty, the construction is of a much more modern style than the\ncastle to the south. A similar hall branches off to the northeast.",
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
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 25 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "COURTYARD",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "REC-AREA",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "REC-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    }
   ],
   "contents": [],
   "source": "<ROOM PLAIN-HALL\n      (LOC ROOMS)\n      (DESC \"Plain Hall\")\n      (LDESC\n\"This is a featureless hall leading north and south. Although the hallway is\nold and dusty, the construction is of a much more modern style than the\ncastle to the south. A similar hall branches off to the northeast.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"  25  ;\"NORTH\"  0>)\n      (SOUTH TO COURTYARD)\n      (NORTH TO REC-AREA)\n      (NE TO REC-CORRIDOR)\n      (FLAGS ONBIT RLANDBIT)>",
   "referencedBy": []
  },
  "REC-AREA": {
   "name": "REC-AREA",
   "file": "compone.zil",
   "line": 195,
   "endLine": 208,
   "desc": "Rec Area",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT",
    "FLOYDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "REC-AREA-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CONFERENCE-DOOR"
   ],
   "pseudo": [
    "GAMES",
    "GAMES-PSEUDO",
    "TAPES",
    "TAPES-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "CONFERENCE-ROOM",
     "kind": "conditional",
     "condition": "CONFERENCE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "PLAIN-HALL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "REC-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "COMBINATION-DIAL"
   ],
   "source": "<ROOM REC-AREA\n      (LOC ROOMS)\n      (DESC \"Rec Area\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NORTH TO CONFERENCE-ROOM IF CONFERENCE-DOOR IS OPEN)\n      (SOUTH TO PLAIN-HALL)\n      (EAST TO REC-CORRIDOR)\n      (FLAGS ONBIT RLANDBIT FLOYDBIT)\n      (GLOBAL CONFERENCE-DOOR)\n      (PSEUDO \"GAMES\" GAMES-PSEUDO \"TAPES\" TAPES-PSEUDO)\n      (ACTION REC-AREA-F)>",
   "referencedBy": [
    "CONFERENCE-DOOR-F",
    "FLOYD-F"
   ]
  },
  "CONFERENCE-ROOM": {
   "name": "CONFERENCE-ROOM",
   "file": "compone.zil",
   "line": 228,
   "endLine": 242,
   "desc": "Conference Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CONFERENCE-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CONFERENCE-DOOR",
    "TABLES"
   ],
   "pseudo": [
    "BOOTH",
    "NEAR-BOOTH-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "REC-AREA",
     "kind": "conditional",
     "condition": "CONFERENCE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "REC-AREA",
     "kind": "conditional",
     "condition": "CONFERENCE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "BOOTH-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "BOOTH-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM CONFERENCE-ROOM\n      (LOC ROOMS)\n      (DESC \"Conference Room\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (SOUTH TO REC-AREA IF CONFERENCE-DOOR IS OPEN)\n      (OUT TO REC-AREA IF CONFERENCE-DOOR IS OPEN)\n      (IN TO BOOTH-1)\n      (NORTH TO BOOTH-1)\n      (FLAGS RLANDBIT ONBIT)\n      (PSEUDO \"BOOTH\" NEAR-BOOTH-PSEUDO)\n      (GLOBAL CONFERENCE-DOOR TABLES)\n      (ACTION CONFERENCE-ROOM-F)>",
   "referencedBy": []
  },
  "BOOTH-1": {
   "name": "BOOTH-1",
   "file": "compone.zil",
   "line": 311,
   "endLine": 326,
   "desc": "Booth 1",
   "ldesc": "This is a tiny room with a large \"1\" painted on the wall. A panel contains\na slot about ten centimeters wide, a beige button labelled \"2\" and a tan\nbutton labelled \"3.\"",
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
    "CONTROLS",
    "SLOT",
    "TELEPORTATION-BUTTON-2",
    "TELEPORTATION-BUTTON-3"
   ],
   "pseudo": [
    "BOOTH",
    "IN-BOOTH-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "CONFERENCE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "CONFERENCE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM BOOTH-1\n      (LOC ROOMS)\n      (DESC \"Booth 1\")\n      (LDESC\n\"This is a tiny room with a large \\\"1\\\" painted on the wall. A panel contains\na slot about ten centimeters wide, a beige button labelled \\\"2\\\" and a tan\nbutton labelled \\\"3.\\\"\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (SOUTH TO CONFERENCE-ROOM)\n      (OUT TO CONFERENCE-ROOM)\n      (PSEUDO \"BOOTH\" IN-BOOTH-PSEUDO)\n      (FLAGS ONBIT RLANDBIT)\n      (GLOBAL CONTROLS SLOT TELEPORTATION-BUTTON-2 TELEPORTATION-BUTTON-3)>",
   "referencedBy": [
    "I-FLOYD",
    "CONTROLS-F",
    "SLOT-F",
    "TELEPORTATION-BUTTON-1-F",
    "I-TURNOFF-TELEPORTATION",
    "V-PUSH",
    "NO-BUTTON"
   ]
  },
  "REC-CORRIDOR": {
   "name": "REC-CORRIDOR",
   "file": "compone.zil",
   "line": 328,
   "endLine": 343,
   "desc": "Rec Corridor",
   "ldesc": "This is a wide, east-west hallway. Portals lead north and south, and another\ncorridor branches southwest.",
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
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 25 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "REC-AREA",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "DORM-B",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "DORM-A",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "MESS-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "PLAIN-HALL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM REC-CORRIDOR\n      (LOC ROOMS)\n      (DESC \"Rec Corridor\")\n      (LDESC\n\"This is a wide, east-west hallway. Portals lead north and south, and another\ncorridor branches southwest.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"  25  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (WEST TO REC-AREA)\n      (NORTH TO DORM-B)\n      (SOUTH TO DORM-A)\n      (EAST TO MESS-CORRIDOR)\n      (SW TO PLAIN-HALL)\n      (FLAGS ONBIT RLANDBIT)>",
   "referencedBy": []
  },
  "DORM-A": {
   "name": "DORM-A",
   "file": "compone.zil",
   "line": 345,
   "endLine": 361,
   "desc": "Dorm A",
   "ldesc": "This is a very long room lined with multi-tiered bunks. Flimsy partitions\nbetween the tiers may have provided a modicum of privacy. These spartan\nliving quarters could have once housed many hundreds, but it seems quite\ndeserted now. There are openings at the north and south ends of the room.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FLOYDBIT",
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BED"
   ],
   "pseudo": [
    "PARTITION",
    "PARTITION-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "SANFAC-A",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "REC-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM DORM-A\n      (LOC ROOMS)\n      (DESC \"Dorm A\")\n      (LDESC\n\"This is a very long room lined with multi-tiered bunks. Flimsy partitions\nbetween the tiers may have provided a modicum of privacy. These spartan\nliving quarters could have once housed many hundreds, but it seems quite\ndeserted now. There are openings at the north and south ends of the room.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (SOUTH TO SANFAC-A)\n      (NORTH TO REC-CORRIDOR)\n      (FLAGS FLOYDBIT ONBIT RLANDBIT)\n      (GLOBAL BED)\n      (PSEUDO \"PARTITION\" PARTITION-PSEUDO)>",
   "referencedBy": [
    "I-SLEEP-WARNINGS",
    "V-SIT"
   ]
  },
  "SANFAC-A": {
   "name": "SANFAC-A",
   "file": "compone.zil",
   "line": 363,
   "endLine": 377,
   "desc": "SanFac A",
   "ldesc": "This must be the sanitary facility for the adjacent dormitory. The fixtures\nare dry and dusty, the room dead and deserted. You marvel at how little the\nmillenia and cultural gulfs have changed toilet bowl design. The only exit is\nnorth.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT",
    "FLOYDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "FIXTURES",
    "TOILET-PSEUDO",
    "TOILET",
    "TOILET-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "DORM-A",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM SANFAC-A\n      (LOC ROOMS)\n      (DESC \"SanFac A\")\n      (LDESC\n\"This must be the sanitary facility for the adjacent dormitory. The fixtures\nare dry and dusty, the room dead and deserted. You marvel at how little the\nmillenia and cultural gulfs have changed toilet bowl design. The only exit is\nnorth.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NORTH TO DORM-A)\n      (FLAGS ONBIT RLANDBIT FLOYDBIT)\n      (PSEUDO \"FIXTURES\" TOILET-PSEUDO \"TOILET\" TOILET-PSEUDO)>",
   "referencedBy": []
  },
  "DORM-B": {
   "name": "DORM-B",
   "file": "compone.zil",
   "line": 379,
   "endLine": 395,
   "desc": "Dorm B",
   "ldesc": "This is a very long room lined with multi-tiered bunks. Flimsy partitions\nbetween the tiers may have provided a modicum of privacy. These spartan\nliving quarters could have once housed many hundreds, but it seems quite\ndeserted now. There are openings at the north and south ends of the room.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FLOYDBIT",
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BED"
   ],
   "pseudo": [
    "PARTITION",
    "PARTITION-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "REC-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "SANFAC-B",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM DORM-B\n      (LOC ROOMS)\n      (DESC \"Dorm B\")\n      (LDESC\n\"This is a very long room lined with multi-tiered bunks. Flimsy partitions\nbetween the tiers may have provided a modicum of privacy. These spartan\nliving quarters could have once housed many hundreds, but it seems quite\ndeserted now. There are openings at the north and south ends of the room.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (SOUTH TO REC-CORRIDOR)\n      (NORTH TO SANFAC-B)\n      (FLAGS FLOYDBIT ONBIT RLANDBIT)\n      (GLOBAL BED)\n      (PSEUDO \"PARTITION\" PARTITION-PSEUDO)>",
   "referencedBy": [
    "I-SLEEP-WARNINGS",
    "V-SIT"
   ]
  },
  "SANFAC-B": {
   "name": "SANFAC-B",
   "file": "compone.zil",
   "line": 397,
   "endLine": 411,
   "desc": "SanFac B",
   "ldesc": "This must be the sanitary facility for the adjacent dormitory. The fixtures\nare dry and dusty, the room dead and deserted. You marvel at how little the\nmillenia and cultural gulfs have changed toilet bowl design. The only exit is\nsouth.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FLOYDBIT",
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "FIXTURES",
    "TOILET-PSEUDO",
    "TOILET",
    "TOILET-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "DORM-B",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM SANFAC-B\n      (LOC ROOMS)\n      (DESC \"SanFac B\")\n      (LDESC\n\"This must be the sanitary facility for the adjacent dormitory. The fixtures\nare dry and dusty, the room dead and deserted. You marvel at how little the\nmillenia and cultural gulfs have changed toilet bowl design. The only exit is\nsouth.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (SOUTH TO DORM-B)\n      (FLAGS FLOYDBIT ONBIT RLANDBIT)\n      (PSEUDO \"FIXTURES\" TOILET-PSEUDO \"TOILET\" TOILET-PSEUDO)>",
   "referencedBy": []
  },
  "DORM-C": {
   "name": "DORM-C",
   "file": "compone.zil",
   "line": 413,
   "endLine": 429,
   "desc": "Dorm C",
   "ldesc": "This is a very long room lined with multi-tiered bunks. Flimsy partitions\nbetween the tiers may have provided a modicum of privacy. These spartan\nliving quarters could have once housed many hundreds, but it seems quite\ndeserted now. There are openings at the north and south ends of the room.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "FLOYDBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BED"
   ],
   "pseudo": [
    "PARTITION",
    "PARTITION-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "DORM-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SANFAC-C",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM DORM-C\n      (LOC ROOMS)\n      (DESC \"Dorm C\")\n      (LDESC\n\"This is a very long room lined with multi-tiered bunks. Flimsy partitions\nbetween the tiers may have provided a modicum of privacy. These spartan\nliving quarters could have once housed many hundreds, but it seems quite\ndeserted now. There are openings at the north and south ends of the room.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NORTH TO DORM-CORRIDOR)\n      (SOUTH TO SANFAC-C)\n      (FLAGS ONBIT FLOYDBIT RLANDBIT)\n      (GLOBAL BED)\n      (PSEUDO \"PARTITION\" PARTITION-PSEUDO)>",
   "referencedBy": [
    "I-SLEEP-WARNINGS",
    "V-SIT"
   ]
  },
  "SANFAC-C": {
   "name": "SANFAC-C",
   "file": "compone.zil",
   "line": 431,
   "endLine": 445,
   "desc": "SanFac C",
   "ldesc": "This must be the sanitary facility for the adjacent dormitory. The fixtures\nare dry and dusty, the room dead and deserted. You marvel at how little the\nmillenia and cultural gulfs have changed toilet bowl design. The only exit is\nnorth.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FLOYDBIT",
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "FIXTURES",
    "TOILET-PSEUDO",
    "TOILET",
    "TOILET-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "DORM-C",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM SANFAC-C\n      (LOC ROOMS)\n      (DESC \"SanFac C\")\n      (LDESC\n\"This must be the sanitary facility for the adjacent dormitory. The fixtures\nare dry and dusty, the room dead and deserted. You marvel at how little the\nmillenia and cultural gulfs have changed toilet bowl design. The only exit is\nnorth.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NORTH TO DORM-C)\n      (FLAGS FLOYDBIT ONBIT RLANDBIT)\n      (PSEUDO \"FIXTURES\" TOILET-PSEUDO \"TOILET\" TOILET-PSEUDO)>",
   "referencedBy": []
  },
  "DORM-D": {
   "name": "DORM-D",
   "file": "compone.zil",
   "line": 447,
   "endLine": 463,
   "desc": "Dorm D",
   "ldesc": "This is a very long room lined with multi-tiered bunks. Flimsy partitions\nbetween the tiers may have provided a modicum of privacy. These spartan\nliving quarters could have once housed many hundreds, but it seems quite\ndeserted now. There are openings at the north and south ends of the room.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FLOYDBIT",
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BED"
   ],
   "pseudo": [
    "PARTITION",
    "PARTITION-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "DORM-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "SANFAC-D",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM DORM-D\n      (LOC ROOMS)\n      (DESC \"Dorm D\")\n      (LDESC\n\"This is a very long room lined with multi-tiered bunks. Flimsy partitions\nbetween the tiers may have provided a modicum of privacy. These spartan\nliving quarters could have once housed many hundreds, but it seems quite\ndeserted now. There are openings at the north and south ends of the room.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (SOUTH TO DORM-CORRIDOR)\n      (NORTH TO SANFAC-D)\n      (FLAGS FLOYDBIT ONBIT RLANDBIT)\n      (GLOBAL BED)\n      (PSEUDO \"PARTITION\" PARTITION-PSEUDO)>",
   "referencedBy": [
    "I-SLEEP-WARNINGS",
    "V-SIT"
   ]
  },
  "SANFAC-D": {
   "name": "SANFAC-D",
   "file": "compone.zil",
   "line": 465,
   "endLine": 479,
   "desc": "SanFac D",
   "ldesc": "This must be the sanitary facility for the adjacent dormitory. The fixtures\nare dry and dusty, the room dead and deserted. You marvel at how little the\nmillenia and cultural gulfs have changed toilet bowl design. The only exit is\nsouth.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "FLOYDBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "FIXTURES",
    "TOILET-PSEUDO",
    "TOILET",
    "TOILET-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "DORM-D",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM SANFAC-D\n      (LOC ROOMS)\n      (DESC \"SanFac D\")\n      (LDESC\n\"This must be the sanitary facility for the adjacent dormitory. The fixtures\nare dry and dusty, the room dead and deserted. You marvel at how little the\nmillenia and cultural gulfs have changed toilet bowl design. The only exit is\nsouth.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (SOUTH TO DORM-D)\n      (FLAGS ONBIT FLOYDBIT RLANDBIT)\n      (PSEUDO \"FIXTURES\" TOILET-PSEUDO \"TOILET\" TOILET-PSEUDO)>",
   "referencedBy": []
  },
  "MESS-CORRIDOR": {
   "name": "MESS-CORRIDOR",
   "file": "compone.zil",
   "line": 481,
   "endLine": 494,
   "desc": "Mess Corridor",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MESS-CORRIDOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STORAGE-WEST-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "MESS-HALL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "STORAGE-WEST",
     "kind": "conditional",
     "condition": "STORAGE-WEST-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "DORM-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "REC-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "PADLOCK"
   ],
   "source": "<ROOM MESS-CORRIDOR\n      (LOC ROOMS)\n      (DESC \"Mess Corridor\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (SOUTH TO MESS-HALL)\n      (NORTH TO STORAGE-WEST IF STORAGE-WEST-DOOR IS OPEN)\n      (EAST TO DORM-CORRIDOR)\n      (WEST TO REC-CORRIDOR)\n      (FLAGS ONBIT RLANDBIT)\n      (GLOBAL STORAGE-WEST-DOOR)\n      (ACTION MESS-CORRIDOR-F)>",
   "referencedBy": []
  },
  "STORAGE-WEST": {
   "name": "STORAGE-WEST",
   "file": "compone.zil",
   "line": 593,
   "endLine": 606,
   "desc": "Storage West",
   "ldesc": "This is a small room obviously intended as a storage area.",
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
    "SHELVES",
    "STORAGE-WEST-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ],
    "VALUE": [
     "4"
    ]
   },
   "exits": [
    {
     "to": "MESS-CORRIDOR",
     "kind": "conditional",
     "condition": "STORAGE-WEST-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "MESS-CORRIDOR",
     "kind": "conditional",
     "condition": "STORAGE-WEST-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "CAN",
    "LADDER"
   ],
   "source": "<ROOM STORAGE-WEST\n      (LOC ROOMS)\n      (DESC \"Storage West\")\n      (LDESC\n\"This is a small room obviously intended as a storage area.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (SOUTH TO MESS-CORRIDOR IF STORAGE-WEST-DOOR IS OPEN)\n      (OUT TO MESS-CORRIDOR IF STORAGE-WEST-DOOR IS OPEN)\n      (FLAGS RLANDBIT ONBIT)\n      (VALUE 4)\n      (GLOBAL SHELVES STORAGE-WEST-DOOR)>",
   "referencedBy": [
    "LADDER-F"
   ]
  },
  "DORM-CORRIDOR": {
   "name": "DORM-CORRIDOR",
   "file": "compone.zil",
   "line": 720,
   "endLine": 738,
   "desc": "Dorm Corridor",
   "ldesc": "This is a wide, east-west hallway with openings to the north and south.\nTo the east, the corridor stretches off into the distance. That section of\nthe hallway is lined with a motorized walkway (no longer running) that\nwas probably intended to transport people or cargo down that tremendously\nlong hall.",
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
   "globals": [],
   "pseudo": [
    "WALKWAY",
    "WALKWAY-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 160 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "DORM-D",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "DORM-C",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "MESS-CORRIDOR",
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
     "per": "LONG-HALL-F",
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM DORM-CORRIDOR\n      (LOC ROOMS)\n      (DESC \"Dorm Corridor\")\n      (LDESC\n\"This is a wide, east-west hallway with openings to the north and south.\nTo the east, the corridor stretches off into the distance. That section of\nthe hallway is lined with a motorized walkway (no longer running) that\nwas probably intended to transport people or cargo down that tremendously\nlong hall.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 160 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NORTH TO DORM-D)\n      (SOUTH TO DORM-C)\n      (WEST TO MESS-CORRIDOR)\n      (EAST PER LONG-HALL-F)\n      (FLAGS ONBIT RLANDBIT)\n      (PSEUDO \"WALKWAY\" WALKWAY-PSEUDO)>",
   "referencedBy": [
    "LONG-HALL-F"
   ]
  },
  "MESS-HALL": {
   "name": "MESS-HALL",
   "file": "compone.zil",
   "line": 740,
   "endLine": 754,
   "desc": "Mess Hall",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "FLOYDBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MESS-HALL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TABLES",
    "KITCHEN-DOOR",
    "SLOT"
   ],
   "pseudo": [
    "BENCH",
    "BENCH-PSEUDO",
    "BENCHES",
    "BENCH-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "MESS-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MESS-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "KITCHEN",
     "kind": "conditional",
     "condition": "KITCHEN-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "KITCHEN",
     "kind": "conditional",
     "condition": "KITCHEN-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [
    "CANTEEN"
   ],
   "source": "<ROOM MESS-HALL\n      (LOC ROOMS)\n      (DESC \"Mess Hall\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NORTH TO MESS-CORRIDOR)\n      (OUT TO MESS-CORRIDOR)\n      (SOUTH TO KITCHEN IF KITCHEN-DOOR IS OPEN)\n      (IN TO KITCHEN IF KITCHEN-DOOR IS OPEN)\n      (GLOBAL TABLES KITCHEN-DOOR SLOT)\n      (FLAGS ONBIT FLOYDBIT RLANDBIT)\n      (PSEUDO \"BENCH\" BENCH-PSEUDO \"BENCHES\" BENCH-PSEUDO)\n      (ACTION MESS-HALL-F)>",
   "referencedBy": [
    "I-FLOYD",
    "TABLES-F",
    "SLOT-F",
    "I-KITCHEN-DOOR-CLOSES"
   ]
  },
  "KITCHEN": {
   "name": "KITCHEN",
   "file": "compone.zil",
   "line": 777,
   "endLine": 793,
   "desc": "Kitchen",
   "ldesc": "This is the food production and dispensary area for the dining hall to the\nnorth. Of particular interest is a machine near the door. You should probably\nexamine it more closely.",
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
    "KITCHEN-DOOR"
   ],
   "pseudo": [
    "SPOUT",
    "SPOUT-PSEUDO",
    "BUTTON",
    "BUTTON-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ],
    "VALUE": [
     "4"
    ]
   },
   "exits": [
    {
     "to": "MESS-HALL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MESS-HALL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "DISPENSER"
   ],
   "source": "<ROOM KITCHEN\n      (LOC ROOMS)\n      (DESC \"Kitchen\")\n      (LDESC\n\"This is the food production and dispensary area for the dining hall to the\nnorth. Of particular interest is a machine near the door. You should probably\nexamine it more closely.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NORTH TO MESS-HALL)\n      (OUT TO MESS-HALL)\n      (GLOBAL KITCHEN-DOOR)\n      (PSEUDO \"SPOUT\" SPOUT-PSEUDO \"BUTTON\" BUTTON-PSEUDO)\n      (FLAGS ONBIT RLANDBIT)\n      (VALUE 4)>",
   "referencedBy": [
    "I-FLOYD",
    "I-KITCHEN-DOOR-CLOSES",
    "V-INSERT"
   ]
  },
  "CORRIDOR-JUNCTION": {
   "name": "CORRIDOR-JUNCTION",
   "file": "compone.zil",
   "line": 888,
   "endLine": 905,
   "desc": "Corridor Junction",
   "ldesc": "A north-south corridor intersects the main corridor here. To the west, the\nmain corridor extends as far as you can see; a nonworking walkway from\nthat direction ends here. To the east, the corridor widens into a well-lit\narea.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FLOYDBIT",
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "WALKWAY",
    "WALKWAY-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 160 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 30 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "ADMIN-CORRIDOR-S",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MECH-CORRIDOR-N",
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
     "per": "LONG-HALL-F",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "ELEVATOR-LOBBY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM CORRIDOR-JUNCTION\n      (LOC ROOMS)\n      (DESC \"Corridor Junction\")\n      (LDESC\n\"A north-south corridor intersects the main corridor here. To the west, the\nmain corridor extends as far as you can see; a nonworking walkway from\nthat direction ends here. To the east, the corridor widens into a well-lit\narea.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 160 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\"  30 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NORTH TO ADMIN-CORRIDOR-S)\n      (SOUTH TO MECH-CORRIDOR-N)\n      (WEST PER LONG-HALL-F)\n      (EAST TO ELEVATOR-LOBBY)\n      (FLAGS FLOYDBIT RLANDBIT ONBIT)\n      (PSEUDO \"WALKWAY\" WALKWAY-PSEUDO)>",
   "referencedBy": [
    "LONG-HALL-F"
   ]
  },
  "ADMIN-CORRIDOR-S": {
   "name": "ADMIN-CORRIDOR-S",
   "file": "compone.zil",
   "line": 919,
   "endLine": 934,
   "desc": "Admin Corridor South",
   "ldesc": "This section of hallway seems to have suffered some minor structural\ndamage. The walls are cracked, and a jagged crevice crosses the floor.\nAn opening leads east and the corridor heads north and south.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ADMIN-CORRIDOR-S-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "CORRIDOR-JUNCTION",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "ADMIN-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SANFAC-E",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "CREVICE",
    "KEY"
   ],
   "source": "<ROOM ADMIN-CORRIDOR-S\n      (LOC ROOMS)\n      (DESC \"Admin Corridor South\")\n      (LDESC\n\"This section of hallway seems to have suffered some minor structural\ndamage. The walls are cracked, and a jagged crevice crosses the floor.\nAn opening leads east and the corridor heads north and south.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (SOUTH TO CORRIDOR-JUNCTION)\n      (NORTH TO ADMIN-CORRIDOR)\n      (EAST TO SANFAC-E)\n      (FLAGS RLANDBIT ONBIT)\n      (ACTION ADMIN-CORRIDOR-S-F)>",
   "referencedBy": [
    "GROUND-F"
   ]
  },
  "ADMIN-CORRIDOR": {
   "name": "ADMIN-CORRIDOR",
   "file": "compone.zil",
   "line": 993,
   "endLine": 1006,
   "desc": "Admin Corridor",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ADMIN-CORRIDOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "RIFT"
   ],
   "pseudo": [
    "RUBBLE",
    "RUBBLE-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "ADMIN-CORRIDOR-S",
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
     "per": "LADDER-EXIT-F",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SYSTEMS-MONITORS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM ADMIN-CORRIDOR\n      (LOC ROOMS)\n      (DESC \"Admin Corridor\") \n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (SOUTH TO ADMIN-CORRIDOR-S)\n      (NORTH PER LADDER-EXIT-F)\n      (WEST TO SYSTEMS-MONITORS)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL RIFT)\n      (PSEUDO \"RUBBLE\" RUBBLE-PSEUDO)\n      (ACTION ADMIN-CORRIDOR-F)>",
   "referencedBy": [
    "LADDER-EXIT-F"
   ]
  },
  "ADMIN-CORRIDOR-N": {
   "name": "ADMIN-CORRIDOR-N",
   "file": "compone.zil",
   "line": 1023,
   "endLine": 1037,
   "desc": "Admin Corridor North",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ADMIN-CORRIDOR-N-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "RIFT"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ],
    "VALUE": [
     "4"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "LADDER-EXIT-F",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "TRANSPORTATION-SUPPLY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "PLAN-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "SMALL-OFFICE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM ADMIN-CORRIDOR-N\n      (LOC ROOMS)\n      (DESC \"Admin Corridor North\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (SOUTH PER LADDER-EXIT-F)\n      (NORTH TO TRANSPORTATION-SUPPLY)\n      (EAST TO PLAN-ROOM)\n      (WEST TO SMALL-OFFICE)\n      (FLAGS RLANDBIT ONBIT)\n      (VALUE 4)\n      (GLOBAL RIFT)\n      (ACTION ADMIN-CORRIDOR-N-F)>",
   "referencedBy": [
    "LADDER-EXIT-F"
   ]
  },
  "SANFAC-E": {
   "name": "SANFAC-E",
   "file": "compone.zil",
   "line": 1096,
   "endLine": 1109,
   "desc": "SanFac E",
   "ldesc": "Here is another sanitary facility. Like the others, it is dusty and\nnonfunctional.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FLOYDBIT",
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "FIXTURES",
    "TOILET-PSEUDO",
    "TOILET",
    "TOILET-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "ADMIN-CORRIDOR-S",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "ADMIN-CORRIDOR-S",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM SANFAC-E\n      (LOC ROOMS)\n      (DESC \"SanFac E\")\n      (LDESC\n\"Here is another sanitary facility. Like the others, it is dusty and\nnonfunctional.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (WEST TO ADMIN-CORRIDOR-S)\n      (OUT TO ADMIN-CORRIDOR-S)\n      (FLAGS FLOYDBIT RLANDBIT ONBIT)\n      (PSEUDO \"FIXTURES\" TOILET-PSEUDO \"TOILET\" TOILET-PSEUDO)>",
   "referencedBy": []
  },
  "SYSTEMS-MONITORS": {
   "name": "SYSTEMS-MONITORS",
   "file": "compone.zil",
   "line": 1111,
   "endLine": 1123,
   "desc": "Systems Monitors",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FLOYDBIT",
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "SYSTEMS-MONITORS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TABLES"
   ],
   "pseudo": [
    "MONITORS",
    "MONITORS-PSEUDO",
    "EQUIPMENT",
    "EQUIPMENT-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "ADMIN-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "ADMIN-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM SYSTEMS-MONITORS\n      (LOC ROOMS)\n      (DESC \"Systems Monitors\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (EAST TO ADMIN-CORRIDOR)\n      (OUT TO ADMIN-CORRIDOR)\n      (FLAGS FLOYDBIT RLANDBIT ONBIT)\n      (GLOBAL TABLES)\n      (PSEUDO \"MONITORS\" MONITORS-PSEUDO \"EQUIPMENT\" EQUIPMENT-PSEUDO)\n      (ACTION SYSTEMS-MONITORS-F)>",
   "referencedBy": []
  },
  "PLAN-ROOM": {
   "name": "PLAN-ROOM",
   "file": "compone.zil",
   "line": 1163,
   "endLine": 1180,
   "desc": "Plan Room",
   "ldesc": "This is a small room whose far wall is covered with many small cubbyholes,\nall empty. The left wall is covered with an enormous map, labelled\n\"Kalamontee Kompleks\", showing two installations connected by a long\nhallway. Near the upper part of this map is a red arrow saying \"Yuu ar\nheer.\" The right wall is covered with a similar map, labelled \"Lawanda\nKompleks\", showing two installations, one apparently buried deep\nunderground.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "FLOYDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "CUBBYHOLE",
    "CUBBYHOLE-PSEUDO",
    "MAPS",
    "MAPS-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "ADMIN-CORRIDOR-N",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM PLAN-ROOM\n      (LOC ROOMS)\n      (DESC \"Plan Room\")\n      (LDESC\n\"This is a small room whose far wall is covered with many small cubbyholes,\nall empty. The left wall is covered with an enormous map, labelled\n\\\"Kalamontee Kompleks\\\", showing two installations connected by a long\nhallway. Near the upper part of this map is a red arrow saying \\\"Yuu ar\nheer.\\\" The right wall is covered with a similar map, labelled \\\"Lawanda\nKompleks\\\", showing two installations, one apparently buried deep\nunderground.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (WEST TO ADMIN-CORRIDOR-N)\n      (FLAGS RLANDBIT ONBIT FLOYDBIT)\n      (PSEUDO \"CUBBYHOLE\" CUBBYHOLE-PSEUDO \"MAPS\" MAPS-PSEUDO)>",
   "referencedBy": []
  },
  "TRANSPORTATION-SUPPLY": {
   "name": "TRANSPORTATION-SUPPLY",
   "file": "compone.zil",
   "line": 1182,
   "endLine": 1195,
   "desc": "Transportation Supply",
   "ldesc": "You have just located a serious bug.",
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
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "ADMIN-CORRIDOR-N",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "TRANSPORTATION-SUPPLY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "TRANSPORTATION-SUPPLY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "TRANSPORTATION-SUPPLY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "ADMIN-CORRIDOR-N",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM TRANSPORTATION-SUPPLY\n      (LOC ROOMS)\n      (DESC \"Transportation Supply\")\n      (LDESC \"You have just located a serious bug.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (SOUTH TO ADMIN-CORRIDOR-N)\n      (NORTH TO TRANSPORTATION-SUPPLY)\n      (EAST TO TRANSPORTATION-SUPPLY)\n      (WEST TO TRANSPORTATION-SUPPLY)\n      (OUT TO ADMIN-CORRIDOR-N)\n      (FLAGS RLANDBIT)>",
   "referencedBy": [
    "DESCRIBE-ROOM"
   ]
  },
  "SMALL-OFFICE": {
   "name": "SMALL-OFFICE",
   "file": "compone.zil",
   "line": 1197,
   "endLine": 1209,
   "desc": "Small Office",
   "ldesc": "You have entered a small office of some sort. A small desk faces the main\ndoorway which lies to the east. Another exit leads west.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "FLOYDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "ADMIN-CORRIDOR-N",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "LARGE-OFFICE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "SMALL-DESK"
   ],
   "source": "<ROOM SMALL-OFFICE\n      (LOC ROOMS)\n      (DESC \"Small Office\")\n      (LDESC\n\"You have entered a small office of some sort. A small desk faces the main\ndoorway which lies to the east. Another exit leads west.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (EAST TO ADMIN-CORRIDOR-N)\n      (WEST TO LARGE-OFFICE)\n      (FLAGS RLANDBIT FLOYDBIT ONBIT)>",
   "referencedBy": []
  },
  "LARGE-OFFICE": {
   "name": "LARGE-OFFICE",
   "file": "compone.zil",
   "line": 1259,
   "endLine": 1272,
   "desc": "Large Office",
   "ldesc": "This is a large, plush office. The far wall is one large picture window,\nscratched but unbroken, offering a view of this installation and the ocean\nbeyond. In front of the window is a wide wooden desk. The only exit is east.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FLOYDBIT",
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WINDOW",
    "OCEAN"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "SMALL-OFFICE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "LARGE-DESK"
   ],
   "source": "<ROOM LARGE-OFFICE\n      (LOC ROOMS)\n      (DESC \"Large Office\")\n      (LDESC\n\"This is a large, plush office. The far wall is one large picture window,\nscratched but unbroken, offering a view of this installation and the ocean\nbeyond. In front of the window is a wide wooden desk. The only exit is east.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (EAST TO SMALL-OFFICE)\n      (FLAGS FLOYDBIT RLANDBIT ONBIT)\n      (GLOBAL WINDOW OCEAN)>",
   "referencedBy": [
    "WINDOW-F"
   ]
  },
  "MECH-CORRIDOR-N": {
   "name": "MECH-CORRIDOR-N",
   "file": "compone.zil",
   "line": 1289,
   "endLine": 1302,
   "desc": "Mech Corridor North",
   "ldesc": "Entrances to rooms lie to the east and west from this north-south hall.",
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
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "STORAGE-EAST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "PHYSICAL-PLANT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "CORRIDOR-JUNCTION",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MECH-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM MECH-CORRIDOR-N\n      (LOC ROOMS)\n      (DESC \"Mech Corridor North\")\n      (LDESC\n\"Entrances to rooms lie to the east and west from this north-south hall.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (EAST TO STORAGE-EAST)\n      (WEST TO PHYSICAL-PLANT)\n      (NORTH TO CORRIDOR-JUNCTION)\n      (SOUTH TO MECH-CORRIDOR)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": []
  },
  "MECH-CORRIDOR": {
   "name": "MECH-CORRIDOR",
   "file": "compone.zil",
   "line": 1304,
   "endLine": 1317,
   "desc": "Mech Corridor",
   "ldesc": "Entrances to rooms lie to the east and west from this north-south hall.",
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
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "REACTOR-CONTROL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "PHYSICAL-PLANT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MECH-CORRIDOR-N",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MECH-CORRIDOR-S",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM MECH-CORRIDOR\n      (LOC ROOMS)\n      (DESC \"Mech Corridor\")\n      (LDESC\n\"Entrances to rooms lie to the east and west from this north-south hall.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (EAST TO REACTOR-CONTROL)\n      (WEST TO PHYSICAL-PLANT)\n      (NORTH TO MECH-CORRIDOR-N)\n      (SOUTH TO MECH-CORRIDOR-S)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": []
  },
  "MECH-CORRIDOR-S": {
   "name": "MECH-CORRIDOR-S",
   "file": "compone.zil",
   "line": 1319,
   "endLine": 1332,
   "desc": "Mech Corridor South",
   "ldesc": "The corridor ends here with doorways to the southwest, south, and southeast.",
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
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 25 ;\"SOUTH\" 0 ;\"SE\" 25 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "MECH-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "TOOL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "MACHINE-SHOP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "ROBOT-SHOP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [],
   "source": "<ROOM MECH-CORRIDOR-S\n      (LOC ROOMS)\n      (DESC \"Mech Corridor South\")\n      (LDESC\n\"The corridor ends here with doorways to the southwest, south, and southeast.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"  25  ;\"SOUTH\"  0 \n\t ;\"SE\" 25 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NORTH TO MECH-CORRIDOR)\n      (SW TO TOOL-ROOM)\n      (SOUTH TO MACHINE-SHOP)\n      (SE TO ROBOT-SHOP)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": []
  },
  "STORAGE-EAST": {
   "name": "STORAGE-EAST",
   "file": "compone.zil",
   "line": 1334,
   "endLine": 1345,
   "desc": "Storage East",
   "ldesc": "A small room for storage. The exit is to the west.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "FLOYDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "SHELVES"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "MECH-CORRIDOR-N",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "OIL-CAN",
    "CARTON"
   ],
   "source": "<ROOM STORAGE-EAST\n      (LOC ROOMS)\n      (DESC \"Storage East\")\n      (LDESC\n\"A small room for storage. The exit is to the west.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (WEST TO MECH-CORRIDOR-N)\n      (FLAGS RLANDBIT FLOYDBIT ONBIT)\n      (GLOBAL SHELVES)>",
   "referencedBy": [
    "LADDER-F"
   ]
  },
  "PHYSICAL-PLANT": {
   "name": "PHYSICAL-PLANT",
   "file": "compone.zil",
   "line": 1430,
   "endLine": 1445,
   "desc": "Physical Plant",
   "ldesc": "This is a huge, dim room with exits in the northeast and southeast\ncorners. The room is criss-crossed with catwalks and is filled with\nheavy equipment presumably intended to heat and ventilate this complex.\nHardly any of the equipment is still operating.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FLOYDBIT",
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "EQUIPMENT",
    "EQUIPMENT-PSEUDO",
    "CATWALK",
    "CATWALK-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "MECH-CORRIDOR-N",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "MECH-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [],
   "source": "<ROOM PHYSICAL-PLANT\n      (LOC ROOMS)\n      (DESC \"Physical Plant\")\n      (LDESC\n\"This is a huge, dim room with exits in the northeast and southeast\ncorners. The room is criss-crossed with catwalks and is filled with\nheavy equipment presumably intended to heat and ventilate this complex.\nHardly any of the equipment is still operating.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NE TO MECH-CORRIDOR-N)\n      (SE TO MECH-CORRIDOR)\n      (FLAGS FLOYDBIT RLANDBIT ONBIT)\n      (PSEUDO \"EQUIPMENT\" EQUIPMENT-PSEUDO \"CATWALK\" CATWALK-PSEUDO)>",
   "referencedBy": []
  },
  "REACTOR-CONTROL": {
   "name": "REACTOR-CONTROL",
   "file": "compone.zil",
   "line": 1447,
   "endLine": 1465,
   "desc": "Reactor Control",
   "ldesc": "This room contains many dials and gauges for controlling a massive planetary\npower reactor which, according to a diagram on the wall, must be buried far\nbelow this very complex. The exit is to the west. To the east is a metal door,\nand next to it, a button. A dark stairway winds downward.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "FLOYDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CONTROLS",
    "STAIRS",
    "REACTOR-ELEVATOR-DOOR"
   ],
   "pseudo": [
    "BUTTON",
    "REACTOR-BUTTON-PSEUDO",
    "DIAGRAM",
    "DIAGRAM-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 20 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "MECH-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "REACTOR-ELEVATOR",
     "kind": "conditional",
     "condition": "REACTOR-ELEVATOR-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "REACTOR-ELEVATOR",
     "kind": "conditional",
     "condition": "REACTOR-ELEVATOR-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "REACTOR-ACCESS-STAIRS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM REACTOR-CONTROL\n      (LOC ROOMS)\n      (DESC \"Reactor Control\")\n      (LDESC\n\"This room contains many dials and gauges for controlling a massive planetary\npower reactor which, according to a diagram on the wall, must be buried far\nbelow this very complex. The exit is to the west. To the east is a metal door,\nand next to it, a button. A dark stairway winds downward.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\"20  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (WEST TO MECH-CORRIDOR)\n      (EAST TO REACTOR-ELEVATOR IF REACTOR-ELEVATOR-DOOR IS OPEN)\n      (IN TO REACTOR-ELEVATOR IF REACTOR-ELEVATOR-DOOR IS OPEN)\n      (DOWN TO REACTOR-ACCESS-STAIRS)\n      (FLAGS RLANDBIT FLOYDBIT ONBIT)\n      (PSEUDO \"BUTTON\" REACTOR-BUTTON-PSEUDO \"DIAGRAM\" DIAGRAM-PSEUDO)\n      (GLOBAL CONTROLS STAIRS REACTOR-ELEVATOR-DOOR)>",
   "referencedBy": [
    "I-REACTOR-DOOR-CLOSE"
   ]
  },
  "REACTOR-ACCESS-STAIRS": {
   "name": "REACTOR-ACCESS-STAIRS",
   "file": "compone.zil",
   "line": 1467,
   "endLine": 1478,
   "desc": "Reactor Access Stairs",
   "ldesc": "You have just located a serious bug.",
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
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 30 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "REACTOR-ACCESS-STAIRS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "REACTOR-CONTROL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM REACTOR-ACCESS-STAIRS\n      (LOC ROOMS)\n      (DESC \"Reactor Access Stairs\")\n      (LDESC \"You have just located a serious bug.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"    30\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (DOWN TO REACTOR-ACCESS-STAIRS)\n      (UP TO REACTOR-CONTROL)\n      (FLAGS RLANDBIT)\n      (GLOBAL STAIRS)> ",
   "referencedBy": []
  },
  "REACTOR-ELEVATOR": {
   "name": "REACTOR-ELEVATOR",
   "file": "compone.zil",
   "line": 1500,
   "endLine": 1513,
   "desc": "Reactor Elevator",
   "ldesc": "This is an elevator with a door to the west, currently open. A control panel\ncontains an Up button, a Down button, and a small slot.",
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
    "REACTOR-ELEVATOR-DOOR",
    "SLOT",
    "ELEVATOR-BUTTON",
    "CONTROLS"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "REACTOR-CONTROL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "REACTOR-CONTROL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM REACTOR-ELEVATOR\n      (LOC ROOMS)\n      (DESC \"Reactor Elevator\")\n      (LDESC\n\"This is an elevator with a door to the west, currently open. A control panel\ncontains an Up button, a Down button, and a small slot.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (WEST TO REACTOR-CONTROL)\n      (OUT TO REACTOR-CONTROL)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL REACTOR-ELEVATOR-DOOR SLOT ELEVATOR-BUTTON CONTROLS)> ",
   "referencedBy": [
    "I-REACTOR-DOOR-CLOSE",
    "I-FLOYD",
    "CONTROLS-F"
   ]
  },
  "TOOL-ROOM": {
   "name": "TOOL-ROOM",
   "file": "compone.zil",
   "line": 1515,
   "endLine": 1527,
   "desc": "Tool Room",
   "ldesc": "This is apparently a storage room for tools. Exits lead northeast and east.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "FLOYDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "SHELVES"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 25 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "MECH-CORRIDOR-S",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "MACHINE-SHOP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "FLASK",
    "MAGNET",
    "PLIERS",
    "LASER"
   ],
   "source": "<ROOM TOOL-ROOM\n      (LOC ROOMS)\n      (DESC \"Tool Room\")\n      (LDESC\n\"This is apparently a storage room for tools. Exits lead northeast and east.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"  25  ;\"NORTH\"  0>)\n      (NE TO MECH-CORRIDOR-S)\n      (EAST TO MACHINE-SHOP)\n      (FLAGS RLANDBIT FLOYDBIT ONBIT)\n      (GLOBAL SHELVES)>",
   "referencedBy": []
  },
  "MACHINE-SHOP": {
   "name": "MACHINE-SHOP",
   "file": "compone.zil",
   "line": 1623,
   "endLine": 1635,
   "desc": "Machine Shop",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "FLOYDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MACHINE-SHOP-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "SPOUT",
    "CHEM-SPOUT-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "MECH-CORRIDOR-S",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "ROBOT-SHOP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "TOOL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "CHEMICAL-DISPENSER",
    "RED-BUTTON",
    "BLUE-BUTTON",
    "GREEN-BUTTON",
    "YELLOW-BUTTON",
    "GRAY-BUTTON",
    "BROWN-BUTTON",
    "BLACK-BUTTON",
    "ROUND-WHITE-BUTTON",
    "SQUARE-WHITE-BUTTON"
   ],
   "source": "<ROOM MACHINE-SHOP\n      (LOC ROOMS)\n      (DESC \"Machine Shop\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NORTH TO MECH-CORRIDOR-S)\n      (EAST TO ROBOT-SHOP)\n      (WEST TO TOOL-ROOM)\n      (FLAGS RLANDBIT FLOYDBIT ONBIT)\n      (PSEUDO \"SPOUT\" CHEM-SPOUT-PSEUDO)\n      (ACTION MACHINE-SHOP-F)>",
   "referencedBy": []
  },
  "ROBOT-SHOP": {
   "name": "ROBOT-SHOP",
   "file": "compone.zil",
   "line": 1830,
   "endLine": 1844,
   "desc": "Robot Shop",
   "ldesc": "This room, with exits west and northwest, is filled with robot-like\ndevices of every conceivable description, all in various states of\ndisassembly.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "FLOYDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "DEVICE",
    "DEVICES-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 25 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "MACHINE-SHOP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MECH-CORRIDOR-S",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [
    "FLOYD"
   ],
   "source": "<ROOM ROBOT-SHOP\n      (LOC ROOMS)\n      (DESC \"Robot Shop\")\n      (LDESC\n\"This room, with exits west and northwest, is filled with robot-like\ndevices of every conceivable description, all in various states of\ndisassembly.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\" 25 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (WEST TO MACHINE-SHOP)\n      (NW TO MECH-CORRIDOR-S)\n      (FLAGS RLANDBIT FLOYDBIT ONBIT)\n      (PSEUDO \"DEVICE\" DEVICES-PSEUDO)>",
   "referencedBy": []
  },
  "ELEVATOR-LOBBY": {
   "name": "ELEVATOR-LOBBY",
   "file": "compone.zil",
   "line": 2362,
   "endLine": 2377,
   "desc": "Elevator Lobby",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "FLOYDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ELEVATOR-LOBBY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "UPPER-ELEVATOR-DOOR",
    "LOWER-ELEVATOR-DOOR"
   ],
   "pseudo": [
    "BOOTH",
    "NEAR-BOOTH-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 30 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "ELEVATOR-ENTER-F",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "ELEVATOR-ENTER-F",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "CORRIDOR-JUNCTION",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "BOOTH-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BOOTH-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [
    "BLUE-ELEVATOR-BUTTON",
    "RED-ELEVATOR-BUTTON"
   ],
   "source": "<ROOM ELEVATOR-LOBBY\n      (LOC ROOMS)\n      (DESC \"Elevator Lobby\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\"30 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NORTH PER ELEVATOR-ENTER-F)\n      (SOUTH PER ELEVATOR-ENTER-F)\n      (WEST TO CORRIDOR-JUNCTION)\n      (EAST TO BOOTH-2)\n      (IN TO BOOTH-2)\n      (FLAGS RLANDBIT FLOYDBIT ONBIT)\n      (GLOBAL UPPER-ELEVATOR-DOOR LOWER-ELEVATOR-DOOR)\n      (PSEUDO \"BOOTH\" NEAR-BOOTH-PSEUDO)\n      (ACTION ELEVATOR-LOBBY-F)>",
   "referencedBy": [
    "ELEVATOR-EXIT-F",
    "LOWER-ELEVATOR-DOOR-F",
    "I-UPPER-ELEVATOR-ARRIVE",
    "I-LOWER-ELEVATOR-ARRIVE"
   ]
  },
  "UPPER-ELEVATOR": {
   "name": "UPPER-ELEVATOR",
   "file": "compone.zil",
   "line": 2406,
   "endLine": 2419,
   "desc": "Upper Elevator",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "UPPER-ELEVATOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LIGHTS",
    "CONTROLS",
    "SLOT",
    "ELEVATOR-BUTTON",
    "UPPER-ELEVATOR-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "ELEVATOR-EXIT-F",
     "message": null,
     "dir": "OUT"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "ELEVATOR-EXIT-F",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You'll have to use the elevator controls.",
     "dir": "UP"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You'll have to use the elevator controls.",
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM UPPER-ELEVATOR\n      (LOC ROOMS)\n      (DESC \"Upper Elevator\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (OUT PER ELEVATOR-EXIT-F)\n      (SOUTH PER ELEVATOR-EXIT-F)\n      (UP SORRY \"You'll have to use the elevator controls.\")\n      (DOWN SORRY \"You'll have to use the elevator controls.\")\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL LIGHTS CONTROLS SLOT ELEVATOR-BUTTON UPPER-ELEVATOR-DOOR)\n      (ACTION UPPER-ELEVATOR-F)>",
   "referencedBy": [
    "LADDER-F",
    "I-FLOYD",
    "ELEVATOR-ENTER-F",
    "ELEVATOR-EXIT-F",
    "ELEVATOR-BUTTON-F",
    "I-TURNOFF-UPPER-ELEVATOR",
    "CONTROLS-F",
    "SLOT-F"
   ]
  },
  "LOWER-ELEVATOR": {
   "name": "LOWER-ELEVATOR",
   "file": "compone.zil",
   "line": 2435,
   "endLine": 2448,
   "desc": "Lower Elevator",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "LOWER-ELEVATOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LIGHTS",
    "CONTROLS",
    "SLOT",
    "ELEVATOR-BUTTON",
    "LOWER-ELEVATOR-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "ELEVATOR-EXIT-F",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "ELEVATOR-EXIT-F",
     "message": null,
     "dir": "OUT"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You'll have to use the elevator controls.",
     "dir": "UP"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You'll have to use the elevator controls.",
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM LOWER-ELEVATOR\n       (LOC ROOMS)\n       (DESC \"Lower Elevator\")\n       (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n       (NORTH PER ELEVATOR-EXIT-F)\n       (OUT PER ELEVATOR-EXIT-F)\n       (UP SORRY \"You'll have to use the elevator controls.\")\n       (DOWN SORRY \"You'll have to use the elevator controls.\")\n       (FLAGS RLANDBIT ONBIT)\n       (GLOBAL LIGHTS CONTROLS SLOT ELEVATOR-BUTTON LOWER-ELEVATOR-DOOR)\n       (ACTION LOWER-ELEVATOR-F)>",
   "referencedBy": [
    "LADDER-F",
    "I-FLOYD",
    "ELEVATOR-ENTER-F",
    "ELEVATOR-EXIT-F",
    "ELEVATOR-BUTTON-F",
    "I-TURNOFF-LOWER-ELEVATOR",
    "OTHER-ELEVATOR-ENTER-F",
    "CONTROLS-F",
    "SLOT-F"
   ]
  },
  "BOOTH-2": {
   "name": "BOOTH-2",
   "file": "compone.zil",
   "line": 2725,
   "endLine": 2740,
   "desc": "Booth 2",
   "ldesc": "This is a tiny room with a large \"2\" painted on the wall. A panel contains\na slot about ten centimeters wide, a brown button labelled \"1\" and a tan\nbutton labelled \"3.\"",
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
    "CONTROLS",
    "SLOT",
    "TELEPORTATION-BUTTON-1",
    "TELEPORTATION-BUTTON-3"
   ],
   "pseudo": [
    "BOOTH",
    "IN-BOOTH-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "ELEVATOR-LOBBY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "ELEVATOR-LOBBY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM BOOTH-2\n      (LOC ROOMS)\n      (DESC \"Booth 2\")\n      (LDESC\n\"This is a tiny room with a large \\\"2\\\" painted on the wall. A panel contains\na slot about ten centimeters wide, a brown button labelled \\\"1\\\" and a tan\nbutton labelled \\\"3.\\\"\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (WEST TO ELEVATOR-LOBBY)\n      (OUT TO ELEVATOR-LOBBY)\n      (FLAGS RLANDBIT ONBIT)\n      (PSEUDO \"BOOTH\" IN-BOOTH-PSEUDO)\n      (GLOBAL CONTROLS SLOT TELEPORTATION-BUTTON-1 TELEPORTATION-BUTTON-3)>",
   "referencedBy": [
    "LADDER-F",
    "I-FLOYD",
    "CONTROLS-F",
    "SLOT-F",
    "TELEPORTATION-BUTTON-2-F",
    "I-TURNOFF-TELEPORTATION",
    "V-PUSH",
    "NO-BUTTON"
   ]
  },
  "TOWER-CORE": {
   "name": "TOWER-CORE",
   "file": "compone.zil",
   "line": 2742,
   "endLine": 2758,
   "desc": "Tower Core",
   "ldesc": "This is a small, circular room. A sliding door leads north, and a spiral\nstaircase heads upwards. Other exits lie to the northeast and southwest.",
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
    "UPPER-ELEVATOR-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 30 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ],
    "VALUE": [
     "4"
    ]
   },
   "exits": [
    {
     "to": "UPPER-ELEVATOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "HELIPAD",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "OBSERVATION-DECK",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "COMM-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    }
   ],
   "contents": [],
   "source": "<ROOM TOWER-CORE\n      (LOC ROOMS)\n      (DESC \"Tower Core\")\n      (LDESC\n\"This is a small, circular room. A sliding door leads north, and a spiral\nstaircase heads upwards. Other exits lie to the northeast and southwest.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"    30\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NORTH TO UPPER-ELEVATOR)\n      (UP TO HELIPAD)\n      (SW TO OBSERVATION-DECK)\n      (NE TO COMM-ROOM)\n      (FLAGS RLANDBIT ONBIT)\n      (VALUE 4)\n      (GLOBAL STAIRS UPPER-ELEVATOR-DOOR)>",
   "referencedBy": [
    "ELEVATOR-EXIT-F"
   ]
  },
  "HELIPAD": {
   "name": "HELIPAD",
   "file": "compone.zil",
   "line": 2760,
   "endLine": 2784,
   "desc": "Helipad",
   "ldesc": "You are at the center of a wide, flat area atop the tower. A fence\nprevents you from approaching the perimeter, so your view is limited to\ncloud-filled sky. A large vehicle, severely weathered and topped with rotor\nblades, lies nearby. A spiral staircase leads down into the tower.",
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
    "HELICOPTER-OBJECT"
   ],
   "pseudo": [
    "FENCE",
    "FENCE-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 15 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "TOWER-CORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "HELICOPTER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "A fence keeps you away from the edge, where you would\nprobably be swept over the brink by the high winds.",
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "A fence keeps you away from the edge, where you would\nprobably be swept over the brink by the high winds.",
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "A fence keeps you away from the edge, where you would\nprobably be swept over the brink by the high winds.",
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "A fence keeps you away from the edge, where you would\nprobably be swept over the brink by the high winds.",
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HELIPAD\n      (LOC ROOMS)\n      (DESC \"Helipad\")\n      (LDESC\n\"You are at the center of a wide, flat area atop the tower. A fence\nprevents you from approaching the perimeter, so your view is limited to\ncloud-filled sky. A large vehicle, severely weathered and topped with rotor\nblades, lies nearby. A spiral staircase leads down into the tower.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\"15  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (DOWN TO TOWER-CORE)\n      (IN TO HELICOPTER)\n      (EAST SORRY \"A fence keeps you away from the edge, where you would\nprobably be swept over the brink by the high winds.\")\n      (WEST SORRY \"A fence keeps you away from the edge, where you would\nprobably be swept over the brink by the high winds.\")\n      (NORTH SORRY \"A fence keeps you away from the edge, where you would\nprobably be swept over the brink by the high winds.\")\n      (SOUTH SORRY \"A fence keeps you away from the edge, where you would\nprobably be swept over the brink by the high winds.\")\n      (FLAGS RLANDBIT ONBIT)\n      (PSEUDO \"FENCE\" FENCE-PSEUDO)\n      (GLOBAL STAIRS HELICOPTER-OBJECT)>",
   "referencedBy": [
    "HELICOPTER-OBJECT-F"
   ]
  },
  "HELICOPTER": {
   "name": "HELICOPTER",
   "file": "compone.zil",
   "line": 2811,
   "endLine": 2826,
   "desc": "Helicopter",
   "ldesc": "This is a large vehicle with a lot of cargo space. A complex control panel\nis closed and locked. Everything is covered with a thick layer of rust.\nThrough the windows of the vehicle you can see a wide Helipad, and beyond\nthat, endless ocean far below. Several doors lead out to the Helipad.",
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
    "OCEAN",
    "CONTROLS",
    "WINDOW",
    "HELICOPTER-OBJECT"
   ],
   "pseudo": [
    "LOCK",
    "LOCK-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "HELIPAD",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM HELICOPTER\n      (LOC ROOMS)\n      (DESC \"Helicopter\")\n      (LDESC\n\"This is a large vehicle with a lot of cargo space. A complex control panel\nis closed and locked. Everything is covered with a thick layer of rust.\nThrough the windows of the vehicle you can see a wide Helipad, and beyond\nthat, endless ocean far below. Several doors lead out to the Helipad.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (OUT TO HELIPAD)\n      (FLAGS RLANDBIT ONBIT)\n      (PSEUDO \"LOCK\" LOCK-PSEUDO)\n      (GLOBAL OCEAN CONTROLS WINDOW HELICOPTER-OBJECT)>",
   "referencedBy": [
    "HELICOPTER-OBJECT-F",
    "WINDOW-F",
    "CONTROLS-F"
   ]
  },
  "COMM-ROOM": {
   "name": "COMM-ROOM",
   "file": "compone.zil",
   "line": 2828,
   "endLine": 2839,
   "desc": "Comm Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "COMM-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LIGHTS"
   ],
   "pseudo": [
    "CABLES",
    "CABLES-PSEUDO",
    "ENUNCIATOR",
    "ENUNCIATOR-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "TOWER-CORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [
    "RECEIVE-CONSOLE",
    "PLAYBACK-BUTTON",
    "SEND-CONSOLE",
    "COMM-SCREEN",
    "FUNNEL-HOLE"
   ],
   "source": "<ROOM COMM-ROOM\n      (LOC ROOMS)\n      (DESC \"Comm Room\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (SW TO TOWER-CORE)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL LIGHTS)\n      (PSEUDO \"CABLES\" CABLES-PSEUDO \"ENUNCIATOR\" ENUNCIATOR-PSEUDO)\n      (ACTION COMM-ROOM-F)>",
   "referencedBy": [
    "I-UNENTER"
   ]
  },
  "OBSERVATION-DECK": {
   "name": "OBSERVATION-DECK",
   "file": "compone.zil",
   "line": 3154,
   "endLine": 3170,
   "desc": "Observation Deck",
   "ldesc": "This is a balcony girdling the tower. The view is breathtaking; the tower\nmust be half a kilometer tall. From here it is clear that you are on an\nisland. The dormitory section of the complex is visible on the other side\nof the island, and the rest of the complex sprawls out directly below. In\nthe distance, about 20 kilometers to the east, you can spot another island\nsimilar to this one. The only exit is a doorway leading northeast.",
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
    "OCEAN"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "TOWER-CORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    }
   ],
   "contents": [],
   "source": "<ROOM OBSERVATION-DECK\n      (LOC ROOMS)\n      (DESC \"Observation Deck\")\n      (LDESC\n\"This is a balcony girdling the tower. The view is breathtaking; the tower\nmust be half a kilometer tall. From here it is clear that you are on an\nisland. The dormitory section of the complex is visible on the other side\nof the island, and the rest of the complex sprawls out directly below. In\nthe distance, about 20 kilometers to the east, you can spot another island\nsimilar to this one. The only exit is a doorway leading northeast.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NE TO TOWER-CORE)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL OCEAN)>",
   "referencedBy": []
  },
  "WAITING-AREA": {
   "name": "WAITING-AREA",
   "file": "compone.zil",
   "line": 3172,
   "endLine": 3187,
   "desc": "Waiting Area",
   "ldesc": "This is a concrete platform sparsely furnished with benches. The platform\ncontinues to the east, and to the south is a metal door.",
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
    "LOWER-ELEVATOR-DOOR"
   ],
   "pseudo": [
    "BENCH",
    "BENCH-PSEUDO",
    "BENCHES",
    "BENCH-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "KALAMONTEE-PLATFORM",
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
     "per": "OTHER-ELEVATOR-ENTER-F",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "OTHER-ELEVATOR-ENTER-F",
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [],
   "source": "<ROOM WAITING-AREA\n      (LOC ROOMS)\n      (DESC \"Waiting Area\")\n      (LDESC\n\"This is a concrete platform sparsely furnished with benches. The platform\ncontinues to the east, and to the south is a metal door.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (EAST TO KALAMONTEE-PLATFORM)\n      (SOUTH PER OTHER-ELEVATOR-ENTER-F)\n      (IN PER OTHER-ELEVATOR-ENTER-F)\n      (PSEUDO \"BENCH\" BENCH-PSEUDO \"BENCHES\" BENCH-PSEUDO)\n      (GLOBAL LOWER-ELEVATOR-DOOR)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": [
    "ELEVATOR-EXIT-F",
    "LOWER-ELEVATOR-DOOR-F"
   ]
  },
  "KALAMONTEE-PLATFORM": {
   "name": "KALAMONTEE-PLATFORM",
   "file": "compone.zil",
   "line": 3198,
   "endLine": 3211,
   "desc": "Kalamontee Platform",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "KALAMONTEE-PLATFORM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-SHUTTLE"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ],
    "VALUE": [
     "4"
    ]
   },
   "exits": [
    {
     "to": "WAITING-AREA",
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
     "per": "SHUTTLE-ENTER-F",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "SHUTTLE-ENTER-F",
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM KALAMONTEE-PLATFORM\n      (LOC ROOMS)\n      (DESC \"Kalamontee Platform\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (WEST TO WAITING-AREA)\n      (SOUTH PER SHUTTLE-ENTER-F)\n      (NORTH PER SHUTTLE-ENTER-F)\n      (FLAGS RLANDBIT ONBIT)\n      (VALUE 4)\n      (GLOBAL GLOBAL-SHUTTLE)\n      (ACTION KALAMONTEE-PLATFORM-F)>",
   "referencedBy": [
    "SHUTTLE-ENTER-F",
    "SHUTTLE-EXIT-F"
   ]
  },
  "LAWANDA-PLATFORM": {
   "name": "LAWANDA-PLATFORM",
   "file": "comptwo.zil",
   "line": 7,
   "endLine": 22,
   "desc": "Lawanda Platform",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FLOYDBIT",
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "LAWANDA-PLATFORM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-SHUTTLE",
    "STAIRS"
   ],
   "pseudo": [
    "ESCALATOR",
    "ESCALATOR-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 30 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ],
    "VALUE": [
     "4"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "SHUTTLE-ENTER-F",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "SHUTTLE-ENTER-F",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "ESCALATOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "ESCALATOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM LAWANDA-PLATFORM\n      (LOC ROOMS)\n      (DESC \"Lawanda Platform\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"    30\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NORTH PER SHUTTLE-ENTER-F)\n      (SOUTH PER SHUTTLE-ENTER-F)\n      (EAST TO ESCALATOR)\n      (UP TO ESCALATOR)\n      (FLAGS FLOYDBIT RLANDBIT ONBIT)\n      (VALUE 4)\n      (GLOBAL GLOBAL-SHUTTLE STAIRS)\n      (PSEUDO \"ESCALATOR\" ESCALATOR-PSEUDO)\n      (ACTION LAWANDA-PLATFORM-F)>",
   "referencedBy": [
    "SHUTTLE-ENTER-F",
    "SHUTTLE-EXIT-F",
    "ESCALATOR-PSEUDO"
   ]
  },
  "ESCALATOR": {
   "name": "ESCALATOR",
   "file": "comptwo.zil",
   "line": 47,
   "endLine": 63,
   "desc": "Escalator",
   "ldesc": "You are in the middle of a long mechanical stairway. It is not running,\nand seems to be in disrepair.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "FLOYDBIT",
    "ONBIT"
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
    "ESCALATOR",
    "ESCALATOR-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 15 ;\"UP\" 30 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "FORK",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "FORK",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "LAWANDA-PLATFORM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "LAWANDA-PLATFORM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM ESCALATOR\n      (LOC ROOMS)\n      (DESC \"Escalator\")\n      (LDESC\n\"You are in the middle of a long mechanical stairway. It is not running,\nand seems to be in disrepair.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\"15  ;\"UP\"    30\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (UP TO FORK)\n      (EAST TO FORK)\n      (DOWN TO LAWANDA-PLATFORM)\n      (WEST TO LAWANDA-PLATFORM)\n      (GLOBAL STAIRS)\n      (PSEUDO \"ESCALATOR\" ESCALATOR-PSEUDO)\n      (FLAGS RLANDBIT FLOYDBIT ONBIT)>",
   "referencedBy": []
  },
  "FORK": {
   "name": "FORK",
   "file": "comptwo.zil",
   "line": 65,
   "endLine": 81,
   "desc": "Fork",
   "ldesc": "This is a hallway which forks to the northeast and southeast. To the west\nis the top of a long escalator.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FLOYDBIT",
    "RLANDBIT",
    "ONBIT"
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
    "ESCALATOR",
    "ESCALATOR-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 15 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 25 ;\"EAST\" 0 ;\"NE\" 25 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "ESCALATOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "ESCALATOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "SYSTEMS-CORRIDOR-WEST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "PROJECT-CORRIDOR-WEST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [],
   "source": "<ROOM FORK\n      (LOC ROOMS)\n      (DESC \"Fork\")\n      (LDESC\n\"This is a hallway which forks to the northeast and southeast. To the west\nis the top of a long escalator.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\"15  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\" 25 ;\"EAST\" 0 ;\"NE\"  25  ;\"NORTH\"  0>)\n      (WEST TO ESCALATOR)\n      (DOWN TO ESCALATOR)\n      (NE TO SYSTEMS-CORRIDOR-WEST)\n      (SE TO PROJECT-CORRIDOR-WEST)\n      (GLOBAL STAIRS)\n      (PSEUDO \"ESCALATOR\" ESCALATOR-PSEUDO)\n      (FLAGS FLOYDBIT RLANDBIT ONBIT)>",
   "referencedBy": [
    "INFIRMARY-F",
    "DREAMING",
    "ESCALATOR-PSEUDO"
   ]
  },
  "INFIRMARY": {
   "name": "INFIRMARY",
   "file": "comptwo.zil",
   "line": 87,
   "endLine": 102,
   "desc": "Infirmary",
   "ldesc": "You have entered a clean, well-lighted place. There are a number of beds,\nsome complicated looking equipment, and many shelves that are mostly bare.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "INFIRMARY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BED",
    "SHELVES"
   ],
   "pseudo": [
    "EQUIPMENT",
    "EQUIPMENT-PSEUDO",
    "MACHINE",
    "EQUIPMENT-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 25 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 25 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "SYSTEMS-CORRIDOR-WEST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "SYSTEMS-CORRIDOR-WEST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "RED-SPOOL",
    "MEDICINE-BOTTLE"
   ],
   "source": "<ROOM INFIRMARY\n      (LOC ROOMS)\n      (DESC \"Infirmary\")\n      (LDESC \n\"You have entered a clean, well-lighted place. There are a number of beds,\nsome complicated looking equipment, and many shelves that are mostly bare.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\"25 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\" 25 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (SE TO SYSTEMS-CORRIDOR-WEST)\n      (OUT TO SYSTEMS-CORRIDOR-WEST)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL BED SHELVES)\n      (PSEUDO \"EQUIPMENT\" EQUIPMENT-PSEUDO \"MACHINE\" EQUIPMENT-PSEUDO)\n      (ACTION INFIRMARY-F)>",
   "referencedBy": [
    "I-FLOYD",
    "BED-F",
    "V-SIT"
   ]
  },
  "REPAIR-ROOM": {
   "name": "REPAIR-ROOM",
   "file": "comptwo.zil",
   "line": 214,
   "endLine": 230,
   "desc": "Repair Room",
   "ldesc": "You are in a dimly lit room, filled with strange machines and wide storage\ncabinets, all locked. To the south, a narrow stairway leads upward. On the\nnorth wall of the room is a very small doorway.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "FLOYDBIT",
    "ONBIT"
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
    "CABINETS",
    "CABINETS-PSEUDO",
    "MACHINE",
    "EQUIPMENT-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 30 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "SYSTEMS-CORRIDOR-WEST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "SYSTEMS-CORRIDOR-WEST",
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
     "message": "It is a robot-sized doorway -- a bit too small for you.",
     "dir": "NORTH"
    }
   ],
   "contents": [
    "ACHILLES",
    "ROBOT-HOLE"
   ],
   "source": "<ROOM REPAIR-ROOM\n      (LOC ROOMS)\n      (DESC \"Repair Room\")\n      (LDESC\n\"You are in a dimly lit room, filled with strange machines and wide storage\ncabinets, all locked. To the south, a narrow stairway leads upward. On the\nnorth wall of the room is a very small doorway.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"    30\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (UP TO SYSTEMS-CORRIDOR-WEST)\n      (SOUTH TO SYSTEMS-CORRIDOR-WEST)\n      (NORTH SORRY \"It is a robot-sized doorway -- a bit too small for you.\")\n      (FLAGS RLANDBIT FLOYDBIT ONBIT)\n      (GLOBAL STAIRS)\n      (PSEUDO \"CABINETS\" CABINETS-PSEUDO \"MACHINE\" EQUIPMENT-PSEUDO)>",
   "referencedBy": [
    "FLOYD-F",
    "KLUDGE"
   ]
  },
  "SYSTEMS-CORRIDOR-WEST": {
   "name": "SYSTEMS-CORRIDOR-WEST",
   "file": "comptwo.zil",
   "line": 302,
   "endLine": 318,
   "desc": "Systems Corridor West",
   "ldesc": "The corridor bends here, leading east and southwest. A doorway opens\nto the northwest, and a narrow stairway leads down to the north.",
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
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 15 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 25 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "INFIRMARY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "REPAIR-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "REPAIR-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "SYSTEMS-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "FORK",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM SYSTEMS-CORRIDOR-WEST\n      (LOC ROOMS)\n      (DESC \"Systems Corridor West\")\n      (LDESC\n\"The corridor bends here, leading east and southwest. A doorway opens\nto the northwest, and a narrow stairway leads down to the north.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\"15  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"  25  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NW TO INFIRMARY)\n      (NORTH TO REPAIR-ROOM)\n      (DOWN TO REPAIR-ROOM)\n      (EAST TO SYSTEMS-CORRIDOR)\n      (SW TO FORK)\n      (FLAGS ONBIT RLANDBIT)\n      (GLOBAL STAIRS)>",
   "referencedBy": []
  },
  "SYSTEMS-CORRIDOR": {
   "name": "SYSTEMS-CORRIDOR",
   "file": "comptwo.zil",
   "line": 320,
   "endLine": 333,
   "desc": "Systems Corridor",
   "ldesc": "This section of hallway has a doorway to the north labelled \"Planateree\nDeefens.\" The corridor continues east and west.",
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
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "PLANETARY-DEFENSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SYSTEMS-CORRIDOR-WEST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SYSTEMS-CORRIDOR-EAST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM SYSTEMS-CORRIDOR\n      (LOC ROOMS)\n      (DESC \"Systems Corridor\")\n      (LDESC\n\"This section of hallway has a doorway to the north labelled \\\"Planateree\nDeefens.\\\" The corridor continues east and west.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NORTH TO PLANETARY-DEFENSE)\n      (WEST TO SYSTEMS-CORRIDOR-WEST)\n      (EAST TO SYSTEMS-CORRIDOR-EAST)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": []
  },
  "SYSTEMS-CORRIDOR-EAST": {
   "name": "SYSTEMS-CORRIDOR-EAST",
   "file": "comptwo.zil",
   "line": 335,
   "endLine": 350,
   "desc": "Systems Corridor East",
   "ldesc": "The hallway ends here with a large doorway leading east, and smaller doorways\nto the north and south. The northern doorway is labelled \"Planateree Kors\nKontrool.\" The hallway itself leads west.",
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
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "SYSTEMS-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "LIBRARY-LOBBY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "PLANETARY-COURSE-CONTROL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "PHYSICAL-PLANT-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM SYSTEMS-CORRIDOR-EAST\n      (LOC ROOMS)\n      (DESC \"Systems Corridor East\")\n      (LDESC\n\"The hallway ends here with a large doorway leading east, and smaller doorways\nto the north and south. The northern doorway is labelled \\\"Planateree Kors\nKontrool.\\\" The hallway itself leads west.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (WEST TO SYSTEMS-CORRIDOR)\n      (SOUTH TO LIBRARY-LOBBY)\n      (NORTH TO PLANETARY-COURSE-CONTROL)\n      (EAST TO PHYSICAL-PLANT-TWO)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": []
  },
  "PHYSICAL-PLANT-TWO": {
   "name": "PHYSICAL-PLANT-TWO",
   "file": "comptwo.zil",
   "line": 352,
   "endLine": 367,
   "desc": "Physical Plant",
   "ldesc": "This is an enormous room full of environmental control equipment presumably\nintended to heat and ventilate the Lawanda Complex. Oddly, although the\nLawanda Complex is slightly smaller than its counterpart, this plant is much\nlarger than the one in the Kalamontee Complex. The only exit is westward.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FLOYDBIT",
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "EQUIPMENT",
    "EQUIPMENT-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "SYSTEMS-CORRIDOR-EAST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SYSTEMS-CORRIDOR-EAST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM PHYSICAL-PLANT-TWO\n      (LOC ROOMS)\n      (DESC \"Physical Plant\")\n      (LDESC\n\"This is an enormous room full of environmental control equipment presumably\nintended to heat and ventilate the Lawanda Complex. Oddly, although the\nLawanda Complex is slightly smaller than its counterpart, this plant is much\nlarger than the one in the Kalamontee Complex. The only exit is westward.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (WEST TO SYSTEMS-CORRIDOR-EAST)\n      (OUT TO SYSTEMS-CORRIDOR-EAST)\n      (FLAGS FLOYDBIT RLANDBIT ONBIT)\n      (PSEUDO \"EQUIPMENT\" EQUIPMENT-PSEUDO)>",
   "referencedBy": []
  },
  "PLANETARY-DEFENSE": {
   "name": "PLANETARY-DEFENSE",
   "file": "comptwo.zil",
   "line": 379,
   "endLine": 390,
   "desc": "Planetary Defense",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "FLOYDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "PLANETARY-DEFENSE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CONTROLS",
    "LIGHTS"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "SYSTEMS-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "SYSTEMS-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "ACCESS-PANEL"
   ],
   "source": "<ROOM PLANETARY-DEFENSE\n      (LOC ROOMS)\n      (DESC \"Planetary Defense\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (SOUTH TO SYSTEMS-CORRIDOR)\n      (OUT TO SYSTEMS-CORRIDOR)\n      (FLAGS RLANDBIT FLOYDBIT ONBIT)\n      (GLOBAL CONTROLS LIGHTS)\n      (ACTION PLANETARY-DEFENSE-F)>",
   "referencedBy": []
  },
  "PLANETARY-COURSE-CONTROL": {
   "name": "PLANETARY-COURSE-CONTROL",
   "file": "comptwo.zil",
   "line": 534,
   "endLine": 545,
   "desc": "Course Control",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FLOYDBIT",
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "PLANETARY-COURSE-CONTROL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CONTROLS",
    "LIGHTS"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "SYSTEMS-CORRIDOR-EAST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "SYSTEMS-CORRIDOR-EAST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "CUBE"
   ],
   "source": "<ROOM PLANETARY-COURSE-CONTROL\n      (LOC ROOMS)\n      (DESC \"Course Control\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (SOUTH TO SYSTEMS-CORRIDOR-EAST)\n      (OUT TO SYSTEMS-CORRIDOR-EAST)\n      (FLAGS FLOYDBIT RLANDBIT ONBIT)\n      (GLOBAL CONTROLS LIGHTS)\n      (ACTION PLANETARY-COURSE-CONTROL-F)>",
   "referencedBy": []
  },
  "LIBRARY-LOBBY": {
   "name": "LIBRARY-LOBBY",
   "file": "comptwo.zil",
   "line": 638,
   "endLine": 657,
   "desc": "Library Lobby",
   "ldesc": "This is a carpeted room, thick with dust, with exits to the north and south.\nTo the west, up a few steps, is a wide doorway. A small booth lies to the\neast.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FLOYDBIT",
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TABLES",
    "STAIRS"
   ],
   "pseudo": [
    "CARPET",
    "CARPET-PSEUDO",
    "BOOTH",
    "NEAR-BOOTH-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "LIBRARY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "LIBRARY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SYSTEMS-CORRIDOR-EAST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "PROJECT-CORRIDOR-EAST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "BOOTH-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BOOTH-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [
    "GREEN-SPOOL",
    "TERMINAL"
   ],
   "source": "<ROOM LIBRARY-LOBBY\n      (LOC ROOMS)\n      (DESC \"Library Lobby\")\n      (LDESC \n\"This is a carpeted room, thick with dust, with exits to the north and south.\nTo the west, up a few steps, is a wide doorway. A small booth lies to the\neast.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (UP TO LIBRARY)\n      (WEST TO LIBRARY)\n      (NORTH TO SYSTEMS-CORRIDOR-EAST)\n      (SOUTH TO PROJECT-CORRIDOR-EAST)\n      (EAST TO BOOTH-3)\n      (IN TO BOOTH-3)\n      (FLAGS FLOYDBIT RLANDBIT ONBIT)\n      (GLOBAL TABLES STAIRS)\n      (PSEUDO \"CARPET\" CARPET-PSEUDO \"BOOTH\" NEAR-BOOTH-PSEUDO)>",
   "referencedBy": [
    "V-PUSH",
    "V-TYPE"
   ]
  },
  "BOOTH-3": {
   "name": "BOOTH-3",
   "file": "comptwo.zil",
   "line": 680,
   "endLine": 695,
   "desc": "Booth 3",
   "ldesc": "This is a tiny room with a large \"3\" painted on the wall. A panel contains\na slot about ten centimeters wide, a brown button labelled \"1\" and a beige\nbutton labelled \"2.\"",
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
    "CONTROLS",
    "SLOT",
    "TELEPORTATION-BUTTON-1",
    "TELEPORTATION-BUTTON-2"
   ],
   "pseudo": [
    "BOOTH",
    "IN-BOOTH-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "LIBRARY-LOBBY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "LIBRARY-LOBBY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM BOOTH-3\n      (LOC ROOMS)\n      (DESC \"Booth 3\")\n      (LDESC\n\"This is a tiny room with a large \\\"3\\\" painted on the wall. A panel contains\na slot about ten centimeters wide, a brown button labelled \\\"1\\\" and a beige\nbutton labelled \\\"2.\\\"\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (WEST TO LIBRARY-LOBBY)\n      (OUT TO LIBRARY-LOBBY)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL CONTROLS SLOT TELEPORTATION-BUTTON-1 TELEPORTATION-BUTTON-2)\n      (PSEUDO \"BOOTH\" IN-BOOTH-PSEUDO)>",
   "referencedBy": [
    "I-FLOYD",
    "CONTROLS-F",
    "SLOT-F",
    "TELEPORTATION-BUTTON-3-F",
    "I-TURNOFF-TELEPORTATION",
    "V-PUSH",
    "NO-BUTTON"
   ]
  },
  "LIBRARY": {
   "name": "LIBRARY",
   "file": "comptwo.zil",
   "line": 697,
   "endLine": 711,
   "desc": "Library",
   "ldesc": "This is a large carpeted room with a desk and many small tables. The sole\nexit is down a few steps to the east.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "FLOYDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TABLES",
    "STAIRS"
   ],
   "pseudo": [
    "CARPET",
    "CARPET-PSEUDO",
    "DESK",
    "DESK-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "LIBRARY-LOBBY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "LIBRARY-LOBBY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "SPOOL-READER"
   ],
   "source": "<ROOM LIBRARY\n      (LOC ROOMS)\n      (DESC \"Library\")\n      (LDESC\n\"This is a large carpeted room with a desk and many small tables. The sole\nexit is down a few steps to the east.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (EAST TO LIBRARY-LOBBY)\n      (OUT TO LIBRARY-LOBBY)\n      (FLAGS RLANDBIT ONBIT FLOYDBIT)\n      (GLOBAL TABLES STAIRS)\n      (PSEUDO \"CARPET\" CARPET-PSEUDO \"DESK\" DESK-PSEUDO)>",
   "referencedBy": [
    "V-INSERT"
   ]
  },
  "PROJECT-CORRIDOR-WEST": {
   "name": "PROJECT-CORRIDOR-WEST",
   "file": "comptwo.zil",
   "line": 1304,
   "endLine": 1317,
   "desc": "Project Corridor West",
   "ldesc": "This is a curving hallway leading east and northwest. There is an opening\nto the west.",
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
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 25 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "SANFAC-F",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "PROJECT-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "FORK",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM PROJECT-CORRIDOR-WEST\n      (LOC ROOMS)\n      (DESC \"Project Corridor West\")\n      (LDESC\n\"This is a curving hallway leading east and northwest. There is an opening\nto the west.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\" 25 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (WEST TO SANFAC-F)\n      (EAST TO PROJECT-CORRIDOR)\n      (NW TO FORK)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": []
  },
  "SANFAC-F": {
   "name": "SANFAC-F",
   "file": "comptwo.zil",
   "line": 1319,
   "endLine": 1332,
   "desc": "SanFac F",
   "ldesc": "This is another dusty sanitary facility. Unlike the ones near the dorms,\nthis one is smaller and has no bathing fixtures.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "FLOYDBIT",
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "FIXTURES",
    "TOILET-PSEUDO",
    "TOILET",
    "TOILET-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "PROJECT-CORRIDOR-WEST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "PROJECT-CORRIDOR-WEST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM SANFAC-F\n      (LOC ROOMS)\n      (DESC \"SanFac F\")\n      (LDESC\n\"This is another dusty sanitary facility. Unlike the ones near the dorms,\nthis one is smaller and has no bathing fixtures.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (EAST TO PROJECT-CORRIDOR-WEST)\n      (OUT TO PROJECT-CORRIDOR-WEST)\n      (FLAGS FLOYDBIT RLANDBIT ONBIT)\n      (PSEUDO \"FIXTURES\" TOILET-PSEUDO \"TOILET\" TOILET-PSEUDO)>",
   "referencedBy": []
  },
  "PROJECT-CORRIDOR": {
   "name": "PROJECT-CORRIDOR",
   "file": "comptwo.zil",
   "line": 1334,
   "endLine": 1347,
   "desc": "Project Corridor",
   "ldesc": "You are at the center of a long east-west hallway. A doorway, labelled\n\"PrajKon Awfis\", opens to the south.",
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
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "PROJECT-CORRIDOR-EAST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "PROJECT-CORRIDOR-WEST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "PROJCON-OFFICE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM PROJECT-CORRIDOR\n      (LOC ROOMS)\n      (DESC \"Project Corridor\")\n      (LDESC\n\"You are at the center of a long east-west hallway. A doorway, labelled\n\\\"PrajKon Awfis\\\", opens to the south.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (EAST TO PROJECT-CORRIDOR-EAST)\n      (WEST TO PROJECT-CORRIDOR-WEST)\n      (SOUTH TO PROJCON-OFFICE)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": []
  },
  "PROJCON-OFFICE": {
   "name": "PROJCON-OFFICE",
   "file": "comptwo.zil",
   "line": 1349,
   "endLine": 1363,
   "desc": "ProjCon Office",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "FLOYDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "PROJCON-OFFICE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CRYO-ELEVATOR-DOOR"
   ],
   "pseudo": [
    "MURAL",
    "MURAL-PSEUDO",
    "LOGO",
    "LOGO-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "PROJECT-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "CRYO-ELEVATOR",
     "kind": "conditional",
     "condition": "CRYO-ELEVATOR-DOOR IS OPEN",
     "else": "\"You can't go that way.\"",
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "COMPUTER-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM PROJCON-OFFICE\n      (LOC ROOMS)\n      (DESC \"ProjCon Office\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NORTH TO PROJECT-CORRIDOR)\n      (SOUTH TO CRYO-ELEVATOR IF CRYO-ELEVATOR-DOOR IS OPEN\n       ELSE \"You can't go that way.\")\n      (EAST TO COMPUTER-ROOM)\n      (FLAGS RLANDBIT FLOYDBIT ONBIT)\n      (GLOBAL CRYO-ELEVATOR-DOOR)\n      (PSEUDO \"MURAL\" MURAL-PSEUDO \"LOGO\" LOGO-PSEUDO)\n      (ACTION PROJCON-OFFICE-F)>",
   "referencedBy": [
    "CRYO-EXIT-F",
    "LASER-F",
    "SHOOT-SPECK"
   ]
  },
  "CRYO-ELEVATOR": {
   "name": "CRYO-ELEVATOR",
   "file": "comptwo.zil",
   "line": 1396,
   "endLine": 1407,
   "desc": "Cryo-Elevator",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CRYO-ELEVATOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CRYO-ELEVATOR-DOOR"
   ],
   "pseudo": [
    "BUTTON",
    "CRYO-BUTTON-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "CRYO-EXIT-F",
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM CRYO-ELEVATOR\n      (LOC ROOMS)\n      (DESC \"Cryo-Elevator\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NORTH PER CRYO-EXIT-F)\n      (GLOBAL CRYO-ELEVATOR-DOOR)\n      (FLAGS RLANDBIT ONBIT)\n      (PSEUDO \"BUTTON\" CRYO-BUTTON-PSEUDO)\n      (ACTION CRYO-ELEVATOR-F)>",
   "referencedBy": [
    "I-CHASE-SCENE"
   ]
  },
  "CRYO-ANTEROOM": {
   "name": "CRYO-ANTEROOM",
   "file": "comptwo.zil",
   "line": 1433,
   "endLine": 1441,
   "desc": "Cryo-Anteroom",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CRYO-ANTEROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [],
   "contents": [],
   "source": "<ROOM CRYO-ANTEROOM\n      (LOC ROOMS)\n      (DESC \"Cryo-Anteroom\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (FLAGS RLANDBIT ONBIT)\n      (ACTION CRYO-ANTEROOM-F)>",
   "referencedBy": [
    "CRYO-EXIT-F"
   ]
  },
  "PROJECT-CORRIDOR-EAST": {
   "name": "PROJECT-CORRIDOR-EAST",
   "file": "comptwo.zil",
   "line": 1536,
   "endLine": 1550,
   "desc": "Project Corridor East",
   "ldesc": "The hallway ends here but continues back toward the west. Doorways lead\nnorth, south and east.",
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
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "LIBRARY-LOBBY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "COMPUTER-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "PROJECT-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MAIN-LAB",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM PROJECT-CORRIDOR-EAST\n      (LOC ROOMS)\n      (DESC \"Project Corridor East\")\n      (LDESC\n\"The hallway ends here but continues back toward the west. Doorways lead\nnorth, south and east.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NORTH TO LIBRARY-LOBBY)\n      (SOUTH TO COMPUTER-ROOM)\n      (WEST TO PROJECT-CORRIDOR)\n      (EAST TO MAIN-LAB)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": []
  },
  "COMPUTER-ROOM": {
   "name": "COMPUTER-ROOM",
   "file": "comptwo.zil",
   "line": 1552,
   "endLine": 1570,
   "desc": "Computer Room",
   "ldesc": "This is the main computer room for the Project. The only sign of activity is\na glowing red light. The exits are north, west, and northeast. To the south\nis a small booth.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "FLOYDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LIGHTS"
   ],
   "pseudo": [
    "BOOTH",
    "NEAR-BOOTH-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 25 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "PROJECT-CORRIDOR-EAST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "PROJCON-OFFICE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MINI-BOOTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "MINI-BOOTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "MAIN-LAB",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    }
   ],
   "contents": [
    "PRINT-OUT"
   ],
   "source": "<ROOM COMPUTER-ROOM\n      (LOC ROOMS)\n      (DESC \"Computer Room\")\n      (LDESC\n\"This is the main computer room for the Project. The only sign of activity is\na glowing red light. The exits are north, west, and northeast. To the south\nis a small booth.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"  25  ;\"NORTH\"  0>)\n      (NORTH TO PROJECT-CORRIDOR-EAST)\n      (WEST TO PROJCON-OFFICE)\n      (SOUTH TO MINI-BOOTH)\n      (IN TO MINI-BOOTH)\n      (NE TO MAIN-LAB)\n      (FLAGS RLANDBIT FLOYDBIT ONBIT)\n      (GLOBAL LIGHTS)\n      (PSEUDO \"BOOTH\" NEAR-BOOTH-PSEUDO)>",
   "referencedBy": [
    "KLUDGE",
    "COMPUTER-ACTION",
    "LIGHTS-F"
   ]
  },
  "MINI-BOOTH": {
   "name": "MINI-BOOTH",
   "file": "comptwo.zil",
   "line": 1617,
   "endLine": 1632,
   "desc": "Miniaturization Booth",
   "ldesc": "This is a small room barely large enough for one person. Mounted on the wall\nis a small slot, and next to it a keyboard with numeric keys. The exit is to\nthe north.",
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
    "SLOT"
   ],
   "pseudo": [
    "KEYBOARD",
    "KEYBOARD-PSEUDO",
    "BOOTH",
    "IN-BOOTH-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "COMPUTER-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "COMPUTER-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM MINI-BOOTH\n      (LOC ROOMS)\n      (DESC \"Miniaturization Booth\")\n      (LDESC\n\"This is a small room barely large enough for one person. Mounted on the wall\nis a small slot, and next to it a keyboard with numeric keys. The exit is to\nthe north.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NORTH TO COMPUTER-ROOM)\n      (OUT TO COMPUTER-ROOM)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL SLOT)\n      (PSEUDO \"KEYBOARD\" KEYBOARD-PSEUDO \"BOOTH\" IN-BOOTH-PSEUDO)>",
   "referencedBy": [
    "I-FLOYD",
    "I-TURNOFF-MINI",
    "STATION-384-F",
    "SLOT-F",
    "V-PUSH",
    "V-TYPE"
   ]
  },
  "MAIN-LAB": {
   "name": "MAIN-LAB",
   "file": "comptwo.zil",
   "line": 1650,
   "endLine": 1667,
   "desc": "Main Lab",
   "ldesc": "This is the heart of the Project's vast laboratory complex. There are exits\nto the west and southwest, and heavy metal doors to the northeast and\nsoutheast. A small doorway leads south.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "FLOYDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BIO-DOOR-WEST",
    "RAD-DOOR-WEST"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 25 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "PROJECT-CORRIDOR-EAST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "LAB-STORAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "COMPUTER-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "BIO-LOCK-WEST",
     "kind": "conditional",
     "condition": "BIO-DOOR-WEST IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "RADIATION-LOCK-WEST",
     "kind": "conditional",
     "condition": "RAD-DOOR-WEST IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    }
   ],
   "contents": [],
   "source": "<ROOM MAIN-LAB\n      (LOC ROOMS)\n      (DESC \"Main Lab\")\n      (LDESC\n\"This is the heart of the Project's vast laboratory complex. There are exits\nto the west and southwest, and heavy metal doors to the northeast and\nsoutheast. A small doorway leads south.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"  25  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (WEST TO PROJECT-CORRIDOR-EAST)\n      (SOUTH TO LAB-STORAGE)\n      (SW TO COMPUTER-ROOM)\n      (SE TO BIO-LOCK-WEST IF BIO-DOOR-WEST IS OPEN)\n      (NE TO RADIATION-LOCK-WEST IF RAD-DOOR-WEST IS OPEN)\n      (FLAGS RLANDBIT FLOYDBIT ONBIT)\n      (GLOBAL BIO-DOOR-WEST RAD-DOOR-WEST)>",
   "referencedBy": [
    "I-BIO-WEST-CLOSES"
   ]
  },
  "LAB-STORAGE": {
   "name": "LAB-STORAGE",
   "file": "comptwo.zil",
   "line": 1669,
   "endLine": 1683,
   "desc": "Lab Storage",
   "ldesc": "This is a tiny room for the storage of laboratory supplies. The sole exit is\nto the north.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "FLOYDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "SHELVES"
   ],
   "pseudo": [
    "RACK",
    "CARPET-PSEUDO",
    "SUPPLIES",
    "SUPPLIES-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "MAIN-LAB",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MAIN-LAB",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "LAB-UNIFORM",
    "NEW-BATTERY"
   ],
   "source": "<ROOM LAB-STORAGE\n      (LOC ROOMS)\n      (DESC \"Lab Storage\")\n      (LDESC\n\"This is a tiny room for the storage of laboratory supplies. The sole exit is\nto the north.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NORTH TO MAIN-LAB)\n      (OUT TO MAIN-LAB)\n      (FLAGS RLANDBIT FLOYDBIT ONBIT)\n      (GLOBAL SHELVES)\n      (PSEUDO \"RACK\" CARPET-PSEUDO \"SUPPLIES\" SUPPLIES-PSEUDO)> ",
   "referencedBy": []
  },
  "BIO-LOCK-WEST": {
   "name": "BIO-LOCK-WEST",
   "file": "comptwo.zil",
   "line": 1761,
   "endLine": 1775,
   "desc": "Bio Lock West",
   "ldesc": "This is the first half of a sterilization chamber to prevent contamination\nof the delicate biological experiments in the Bio Lab which lies beyond. The\ndoor to the west leads to the main lab, and the bio lock continues eastward.",
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
    "BIO-DOOR-WEST"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 10 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "BIO-LOCK-EAST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MAIN-LAB",
     "kind": "conditional",
     "condition": "BIO-DOOR-WEST IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM BIO-LOCK-WEST\n      (LOC ROOMS)\n      (DESC \"Bio Lock West\")\n      (LDESC\n\"This is the first half of a sterilization chamber to prevent contamination\nof the delicate biological experiments in the Bio Lab which lies beyond. The\ndoor to the west leads to the main lab, and the bio lock continues eastward.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\"10 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (EAST TO BIO-LOCK-EAST)\n      (WEST TO MAIN-LAB IF BIO-DOOR-WEST IS OPEN)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL BIO-DOOR-WEST)>",
   "referencedBy": [
    "I-FLOYD",
    "BIO-LOCK-EAST-F",
    "I-BIO-EAST-CLOSES",
    "I-BIO-WEST-CLOSES",
    "I-CHASE-SCENE"
   ]
  },
  "BIO-LOCK-EAST": {
   "name": "BIO-LOCK-EAST",
   "file": "comptwo.zil",
   "line": 1777,
   "endLine": 1792,
   "desc": "Bio Lock East",
   "ldesc": "The is the second half of the sterilization chamber leading from the main\nlab to the Bio Lab. The door to the east, leading to the Bio Lab, has a\nwindow. The bio lock continues to the west.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "BIO-LOCK-EAST-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BIO-DOOR-EAST",
    "WINDOW"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 10 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "BIO-LAB",
     "kind": "conditional",
     "condition": "BIO-DOOR-EAST IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BIO-LOCK-WEST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "MINI-CARD"
   ],
   "source": "<ROOM BIO-LOCK-EAST\n      (LOC ROOMS)\n      (DESC \"Bio Lock East\")\n      (LDESC\n\"The is the second half of the sterilization chamber leading from the main\nlab to the Bio Lab. The door to the east, leading to the Bio Lab, has a\nwindow. The bio lock continues to the west.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\"10 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (EAST TO BIO-LAB IF BIO-DOOR-EAST IS OPEN)\n      (WEST TO BIO-LOCK-WEST)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL BIO-DOOR-EAST WINDOW)\n      (ACTION BIO-LOCK-EAST-F)>",
   "referencedBy": [
    "FLOYD-F",
    "I-FLOYD",
    "I-BIO-EAST-CLOSES",
    "I-BIO-WEST-CLOSES",
    "I-FLOYD-FORAY",
    "WINDOW-F"
   ]
  },
  "RADIATION-LOCK-WEST": {
   "name": "RADIATION-LOCK-WEST",
   "file": "comptwo.zil",
   "line": 1846,
   "endLine": 1860,
   "desc": "Radiation Lock West",
   "ldesc": "This is the western half of a decontamination chamber to prevent dangerous\nradioactive materials from leaving the Radiation Lab which lies to the east.\nThe door leads west to the main lab.",
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
    "RAD-DOOR-WEST"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "RADIATION-LOCK-EAST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MAIN-LAB",
     "kind": "conditional",
     "condition": "RAD-DOOR-WEST IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM RADIATION-LOCK-WEST\n      (LOC ROOMS)\n      (DESC \"Radiation Lock West\")\n      (LDESC\n\"This is the western half of a decontamination chamber to prevent dangerous\nradioactive materials from leaving the Radiation Lab which lies to the east.\nThe door leads west to the main lab.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (EAST TO RADIATION-LOCK-EAST)\n      (WEST TO MAIN-LAB IF RAD-DOOR-WEST IS OPEN)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL RAD-DOOR-WEST)>",
   "referencedBy": [
    "I-FLOYD"
   ]
  },
  "RADIATION-LOCK-EAST": {
   "name": "RADIATION-LOCK-EAST",
   "file": "comptwo.zil",
   "line": 1862,
   "endLine": 1877,
   "desc": "Radiation Lock East",
   "ldesc": "This is the eastern half of the decontamination chamber. The door to the\neast leads to the Radiation Lab, and the chamber continues westward. A sign\non the wall reads \"WORNEENG! Raadeeaashun suuts must bee worn beeyond xis\npoint.\"",
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
    "RAD-DOOR-EAST"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "RADIATION-LAB",
     "kind": "conditional",
     "condition": "RAD-DOOR-EAST IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "RADIATION-LOCK-WEST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM RADIATION-LOCK-EAST\n      (LOC ROOMS)\n      (DESC \"Radiation Lock East\")\n      (LDESC\n\"This is the eastern half of the decontamination chamber. The door to the\neast leads to the Radiation Lab, and the chamber continues westward. A sign\non the wall reads \\\"WORNEENG! Raadeeaashun suuts must bee worn beeyond xis\npoint.\\\"\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (EAST TO RADIATION-LAB IF RAD-DOOR-EAST IS OPEN)\n      (WEST TO RADIATION-LOCK-WEST)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL RAD-DOOR-EAST)>",
   "referencedBy": [
    "FLOYD-F",
    "I-FLOYD"
   ]
  },
  "BIO-LAB": {
   "name": "BIO-LAB",
   "file": "comptwo.zil",
   "line": 2122,
   "endLine": 2134,
   "desc": "Bio Lab",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "BIO-LAB-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BIO-DOOR-EAST",
    "WINDOW",
    "OFFICE-DOOR"
   ],
   "pseudo": [
    "CRACK",
    "CRACK-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "LAB-OFFICE",
     "kind": "conditional",
     "condition": "OFFICE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BIO-LOCK-EAST",
     "kind": "conditional",
     "condition": "BIO-DOOR-EAST IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "RAT-ANT",
    "TROLL",
    "GRUE",
    "TRIFFID"
   ],
   "source": "<ROOM BIO-LAB\n      (LOC ROOMS)\n      (DESC \"Bio Lab\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (EAST TO LAB-OFFICE IF OFFICE-DOOR IS OPEN)\n      (WEST TO BIO-LOCK-EAST IF BIO-DOOR-EAST IS OPEN)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL BIO-DOOR-EAST WINDOW OFFICE-DOOR)\n      (PSEUDO \"CRACK\" CRACK-PSEUDO)\n      (ACTION BIO-LAB-F)>",
   "referencedBy": [
    "I-BIO-EAST-CLOSES",
    "I-UNFLOOD",
    "WINDOW-F"
   ]
  },
  "RADIATION-LAB": {
   "name": "RADIATION-LAB",
   "file": "comptwo.zil",
   "line": 2218,
   "endLine": 2235,
   "desc": "Radiation Lab",
   "ldesc": "This room is filled with unfathomable equipment and large canisters bearing\nradioactive warnings. Many of the canisters are split open. You can see the\nBio Lab through a large crack in the south wall. Sinister-looking forms move\nabout within the Bio Lab. Although the lights here are off, the room is\nsuffused with a pale blue glow.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "RADIATION-LAB-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TABLES",
    "RAD-DOOR-EAST"
   ],
   "pseudo": [
    "CRACK",
    "CRACK-PSEUDO",
    "EQUIPMENT",
    "EQUIPMENT-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "RADIATION-LOCK-EAST",
     "kind": "conditional",
     "condition": "RAD-DOOR-EAST IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "BROWN-SPOOL",
    "LAMP"
   ],
   "source": "<ROOM RADIATION-LAB\n      (LOC ROOMS)\n      (DESC \"Radiation Lab\")\n      (LDESC \n\"This room is filled with unfathomable equipment and large canisters bearing\nradioactive warnings. Many of the canisters are split open. You can see the\nBio Lab through a large crack in the south wall. Sinister-looking forms move\nabout within the Bio Lab. Although the lights here are off, the room is\nsuffused with a pale blue glow.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (WEST TO RADIATION-LOCK-EAST IF RAD-DOOR-EAST IS OPEN)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL TABLES RAD-DOOR-EAST)\n      (PSEUDO \"CRACK\" CRACK-PSEUDO \"EQUIPMENT\" EQUIPMENT-PSEUDO)\n      (ACTION RADIATION-LAB-F)>",
   "referencedBy": [
    "RADIATION-LAB-F",
    "CRACK-PSEUDO"
   ]
  },
  "LAB-OFFICE": {
   "name": "LAB-OFFICE",
   "file": "comptwo.zil",
   "line": 2301,
   "endLine": 2314,
   "desc": "Lab Office",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "LAB-OFFICE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "OFFICE-DOOR"
   ],
   "pseudo": [
    "FILES",
    "CABINETS-PSEUDO",
    "BOOTH",
    "NEAR-BOOTH-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "BIO-LAB",
     "kind": "conditional",
     "condition": "OFFICE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "AUXILIARY-BOOTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "AUXILIARY-BOOTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [
    "LAB-DESK",
    "LIGHT-BUTTON",
    "DARK-BUTTON",
    "FUNGICIDE-BUTTON"
   ],
   "source": "<ROOM LAB-OFFICE\n      (LOC ROOMS)\n      (DESC \"Lab Office\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (WEST TO BIO-LAB IF OFFICE-DOOR IS OPEN)\n      (SOUTH TO AUXILIARY-BOOTH)\n      (IN TO AUXILIARY-BOOTH)\n      (GLOBAL OFFICE-DOOR)\n      (FLAGS RLANDBIT ONBIT)\n      (PSEUDO \"FILES\" CABINETS-PSEUDO \"BOOTH\" NEAR-BOOTH-PSEUDO)\n      (ACTION LAB-OFFICE-F)>",
   "referencedBy": [
    "I-UNFLOOD"
   ]
  },
  "AUXILIARY-BOOTH": {
   "name": "AUXILIARY-BOOTH",
   "file": "comptwo.zil",
   "line": 2462,
   "endLine": 2477,
   "desc": "Auxiliary Booth",
   "ldesc": "This is another small booth. Unlike the Miniaturization Booth, this room\nhas no slot or keyboard, so presumably it is intended only as a receiving\nstation. The exit is on the northern side.",
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
   "pseudo": [
    "BOOTH",
    "IN-BOOTH-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ],
    "VALUE": [
     "4"
    ]
   },
   "exits": [
    {
     "to": "LAB-OFFICE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "LAB-OFFICE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM AUXILIARY-BOOTH\n      (LOC ROOMS)\n      (DESC \"Auxiliary Booth\")\n      (LDESC\n\"This is another small booth. Unlike the Miniaturization Booth, this room\nhas no slot or keyboard, so presumably it is intended only as a receiving\nstation. The exit is on the northern side.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NORTH TO LAB-OFFICE)\n      (OUT TO LAB-OFFICE)\n      (FLAGS RLANDBIT ONBIT)\n      (VALUE 4)\n      (PSEUDO \"BOOTH\" IN-BOOTH-PSEUDO)>",
   "referencedBy": [
    "STATION-384-F"
   ]
  },
  "STATION-384": {
   "name": "STATION-384",
   "file": "comptwo.zil",
   "line": 2491,
   "endLine": 2506,
   "desc": "Station 384",
   "ldesc": "You are standing on a square plate of heavy metal. Above your head, parallel\nto the plate beneath you, is an identical metal plate. To the east is a wide,\nmetallic strip.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "STATION-384-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STRIP"
   ],
   "pseudo": [
    "PLATE",
    "PLATE-PSEUDO",
    "PLATES",
    "PLATE-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "STRIP-NEAR-STATION",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM STATION-384\n      (LOC ROOMS)\n      (DESC \"Station 384\")\n      (LDESC\n\"You are standing on a square plate of heavy metal. Above your head, parallel\nto the plate beneath you, is an identical metal plate. To the east is a wide,\nmetallic strip.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (EAST TO STRIP-NEAR-STATION)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL STRIP)\n      (PSEUDO \"PLATE\" PLATE-PSEUDO \"PLATES\" PLATE-PSEUDO)\n      (ACTION STATION-384-F)>",
   "referencedBy": [
    "V-TYPE"
   ]
  },
  "STRIP-NEAR-STATION": {
   "name": "STRIP-NEAR-STATION",
   "file": "comptwo.zil",
   "line": 2537,
   "endLine": 2556,
   "desc": "Strip Near Station",
   "ldesc": "You are standing on a silicon filament, which looks to you like a wide\nmetal highway. South of here, the filament makes a right angle and heads\nstraight down, like a cliff overlooking a black void. The filament can be\nfollowed north, however. Station 384 lies westward.",
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
    "STRIP"
   ],
   "pseudo": [
    "VOID",
    "VOID-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ],
    "VALUE": [
     "4"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The plunge would probably be fatal.",
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The plunge would probably be fatal.",
     "dir": "EAST"
    },
    {
     "to": "MIDDLE-OF-STRIP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "STATION-384",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM STRIP-NEAR-STATION\n      (LOC ROOMS)\n      (DESC \"Strip Near Station\")\n      (LDESC\n\"You are standing on a silicon filament, which looks to you like a wide\nmetal highway. South of here, the filament makes a right angle and heads\nstraight down, like a cliff overlooking a black void. The filament can be\nfollowed north, however. Station 384 lies westward.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (SOUTH SORRY \"The plunge would probably be fatal.\")\n      (EAST SORRY \"The plunge would probably be fatal.\")\n      (NORTH TO MIDDLE-OF-STRIP)\n      (WEST TO STATION-384)\n      (FLAGS RLANDBIT ONBIT)\n      (VALUE 4)\n      (PSEUDO \"VOID\" VOID-PSEUDO)\n      (GLOBAL STRIP)>",
   "referencedBy": [
    "I-FRY"
   ]
  },
  "MIDDLE-OF-STRIP": {
   "name": "MIDDLE-OF-STRIP",
   "file": "comptwo.zil",
   "line": 2558,
   "endLine": 2576,
   "desc": "Middle of Strip",
   "ldesc": "You are standing on a section of the strip with a bottomless void stretching\nout on both sides. The strip continues to the north and south.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MIDDLE-OF-STRIP-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STRIP"
   ],
   "pseudo": [
    "VOID",
    "VOID-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "STRIP-NEAR-RELAY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "STRIP-NEAR-STATION",
     "kind": "conditional",
     "condition": "NO-MICROBE",
     "else": "\"Not a chance -- unless,\nof course, you don't mind walking into the gullet of a hungry microbe.\"",
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
     "message": "Do you have a penchant for bottomless voids?",
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Do you have a penchant for bottomless voids?",
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM MIDDLE-OF-STRIP\n      (LOC ROOMS)\n      (DESC \"Middle of Strip\")\n      (LDESC\n\"You are standing on a section of the strip with a bottomless void stretching\nout on both sides. The strip continues to the north and south.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NORTH TO STRIP-NEAR-RELAY)\n      (SOUTH TO STRIP-NEAR-STATION IF NO-MICROBE ELSE \"Not a chance -- unless,\nof course, you don't mind walking into the gullet of a hungry microbe.\")\n      (EAST SORRY \"Do you have a penchant for bottomless voids?\")\n      (WEST SORRY \"Do you have a penchant for bottomless voids?\")\n      (FLAGS RLANDBIT ONBIT)\n      (ACTION MIDDLE-OF-STRIP-F)\n      (PSEUDO \"VOID\" VOID-PSEUDO)\n      (GLOBAL STRIP)>",
   "referencedBy": [
    "I-FRY"
   ]
  },
  "STRIP-NEAR-RELAY": {
   "name": "STRIP-NEAR-RELAY",
   "file": "comptwo.zil",
   "line": 2602,
   "endLine": 2617,
   "desc": "Strip Near Relay",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "STRIP-NEAR-RELAY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STRIP"
   ],
   "pseudo": [
    "VOID",
    "VOID-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "There is a huge featureless wall there, remember?",
     "dir": "NORTH"
    },
    {
     "to": "MIDDLE-OF-STRIP",
     "kind": "conditional",
     "condition": "NO-MICROBE",
     "else": "\"Not a chance -- unless,\nof course, you don't mind walking into the gullet of a hungry microbe.\"",
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "RELAY-EXIT-F",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Do you have a penchant for bottomless voids?",
     "dir": "WEST"
    }
   ],
   "contents": [
    "RELAY"
   ],
   "source": "<ROOM STRIP-NEAR-RELAY\n      (LOC ROOMS)\n      (DESC \"Strip Near Relay\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NORTH SORRY \"There is a huge featureless wall there, remember?\")\n      (SOUTH TO MIDDLE-OF-STRIP IF NO-MICROBE ELSE \"Not a chance -- unless,\nof course, you don't mind walking into the gullet of a hungry microbe.\")\n      (EAST PER RELAY-EXIT-F)\n      (WEST SORRY \"Do you have a penchant for bottomless voids?\")\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL STRIP)\n      (PSEUDO \"VOID\" VOID-PSEUDO)\n      (ACTION STRIP-NEAR-RELAY-F)>",
   "referencedBy": [
    "I-FRY"
   ]
  },
  "BRIG": {
   "name": "BRIG",
   "file": "globals.zil",
   "line": 582,
   "endLine": 594,
   "desc": "Brig",
   "ldesc": "You are in the Feinstein's brig. Graffiti cover\nthe walls. The cell door to the south is locked.",
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
   "pseudo": [
    "GRAFFITI",
    "GRAFFITI-PSEUDO",
    "DOOR",
    "DOOR-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The cell door is locked.",
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM BRIG\n      (LOC ROOMS)\n      (DESC \"Brig\")\n      (LDESC\n\"You are in the Feinstein's brig. Graffiti cover\nthe walls. The cell door to the south is locked.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (SOUTH SORRY \"The cell door is locked.\")\n      (FLAGS RLANDBIT ONBIT)\n      (PSEUDO \"GRAFFITI\" GRAFFITI-PSEUDO \"DOOR\" DOOR-PSEUDO)>",
   "referencedBy": [
    "PADLOCK-F",
    "I-BLATHER",
    "I-BLOWUP-FEINSTEIN",
    "V-DISEMBARK",
    "V-ZESCAPE"
   ]
  },
  "DECK-NINE": {
   "name": "DECK-NINE",
   "file": "globals.zil",
   "line": 596,
   "endLine": 610,
   "desc": "Deck Nine",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DECK-NINE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "POD-DOOR",
    "CORRIDOR-DOOR",
    "GANGWAY-DOOR",
    "STAIRS",
    "GLOBAL-POD"
   ],
   "pseudo": [
    "TRANSL",
    "TRANSLATOR-PSEUDO",
    "SLIME",
    "SLIME-PSEUDO"
   ],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 15 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 15 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "REACTOR-LOBBY",
     "kind": "conditional",
     "condition": "CORRIDOR-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "ESCAPE-POD",
     "kind": "conditional",
     "condition": "POD-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "ESCAPE-POD",
     "kind": "conditional",
     "condition": "POD-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "GANGWAY",
     "kind": "conditional",
     "condition": "GANGWAY-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [
    "ADVENTURER"
   ],
   "source": "<ROOM DECK-NINE\n      (LOC ROOMS)\n      (DESC \"Deck Nine\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\"15 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\"15 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (EAST TO REACTOR-LOBBY IF CORRIDOR-DOOR IS OPEN)\n      (WEST TO ESCAPE-POD IF POD-DOOR IS OPEN)\n      (IN TO ESCAPE-POD IF POD-DOOR IS OPEN)\n      (UP TO GANGWAY IF GANGWAY-DOOR IS OPEN)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL POD-DOOR CORRIDOR-DOOR GANGWAY-DOOR STAIRS GLOBAL-POD)\n      (PSEUDO \"TRANSL\" TRANSLATOR-PSEUDO \"SLIME\" SLIME-PSEUDO)\n      (ACTION DECK-NINE-F)>",
   "referencedBy": [
    "I-BLATHER",
    "I-AMBASSADOR",
    "GLOBAL-POD-F",
    "POD-EXIT-F",
    "POD-DOOR-F",
    "I-BLOWUP-FEINSTEIN",
    "GO",
    "V-TELL"
   ]
  },
  "REACTOR-LOBBY": {
   "name": "REACTOR-LOBBY",
   "file": "globals.zil",
   "line": 907,
   "endLine": 922,
   "desc": "Reactor Lobby",
   "ldesc": "The corridor widens here as it nears the main drive area. To starboard is\nthe Ion Reactor that powers the vessel, and aft of here is the Auxiliary\nControl Room. The corridor continues to port.",
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
    "CORRIDOR-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 15 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "DECK-NINE",
     "kind": "conditional",
     "condition": "CORRIDOR-DOOR IS OPEN",
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
     "message": "Ensign Blather pushes you roughly back toward your post.",
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Ensign Blather blocks your way, snarling angrily.",
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM REACTOR-LOBBY\n      (LOC ROOMS)\n      (DESC \"Reactor Lobby\")\n      (LDESC\n\"The corridor widens here as it nears the main drive area. To starboard is\nthe Ion Reactor that powers the vessel, and aft of here is the Auxiliary\nControl Room. The corridor continues to port.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\"15 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (WEST TO DECK-NINE IF CORRIDOR-DOOR IS OPEN)\n      (SOUTH SORRY \"Ensign Blather pushes you roughly back toward your post.\")\n      (EAST SORRY \"Ensign Blather blocks your way, snarling angrily.\")\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL CORRIDOR-DOOR)>",
   "referencedBy": [
    "I-BLATHER"
   ]
  },
  "GANGWAY": {
   "name": "GANGWAY",
   "file": "globals.zil",
   "line": 924,
   "endLine": 938,
   "desc": "Gangway",
   "ldesc": "This is a steep metal gangway connecting Deck Eight, above, and Deck\nNine, below.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "GANGWAY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GANGWAY-DOOR",
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 10 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "DECK-EIGHT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "DECK-NINE",
     "kind": "conditional",
     "condition": "GANGWAY-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM GANGWAY\n      (LOC ROOMS)\n      (DESC \"Gangway\")\n      (LDESC\n\"This is a steep metal gangway connecting Deck Eight, above, and Deck\nNine, below.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\"10  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (UP TO DECK-EIGHT)\n      (DOWN TO DECK-NINE IF GANGWAY-DOOR IS OPEN)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL GANGWAY-DOOR STAIRS)\n      (ACTION GANGWAY-F)>",
   "referencedBy": [
    "I-BLOWUP-FEINSTEIN"
   ]
  },
  "DECK-EIGHT": {
   "name": "DECK-EIGHT",
   "file": "globals.zil",
   "line": 948,
   "endLine": 963,
   "desc": "Deck Eight",
   "ldesc": "This is a featureless corridor leading port and starboard. A gangway leads\ndown, and to fore is the Hyperspatial Jump Machinery Room.",
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
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 10 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "GANGWAY",
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
     "message": "Blather throws you to the deck and makes you do 20 push-ups.",
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Blather throws you to the deck and makes you do 20 push-ups.",
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Blather blocks your path, growling about extra galley duty.",
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM DECK-EIGHT\n      (LOC ROOMS)\n      (DESC \"Deck Eight\")\n      (LDESC\n\"This is a featureless corridor leading port and starboard. A gangway leads\ndown, and to fore is the Hyperspatial Jump Machinery Room.\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\"10  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (DOWN TO GANGWAY)\n      (EAST SORRY \"Blather throws you to the deck and makes you do 20 push-ups.\")\n      (WEST SORRY \"Blather throws you to the deck and makes you do 20 push-ups.\")\n      (NORTH SORRY \"Blather blocks your path, growling about extra galley duty.\")\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL STAIRS)>",
   "referencedBy": [
    "I-BLATHER"
   ]
  },
  "ESCAPE-POD": {
   "name": "ESCAPE-POD",
   "file": "globals.zil",
   "line": 1193,
   "endLine": 1206,
   "desc": "Escape Pod",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ESCAPE-POD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "POD-DOOR",
    "CONTROLS",
    "LIGHTS",
    "GLOBAL-POD",
    "WINDOW"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ],
    "VALUE": [
     "3"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "POD-EXIT-F",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "POD-EXIT-F",
     "message": null,
     "dir": "OUT"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "POD-EXIT-F",
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [
    "SAFETY-WEB"
   ],
   "source": "<ROOM ESCAPE-POD\n      (LOC ROOMS)\n      (DESC \"Escape Pod\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (EAST PER POD-EXIT-F)\n      (OUT PER POD-EXIT-F)\n      (UP PER POD-EXIT-F)\n      (FLAGS RLANDBIT ONBIT)\n      (VALUE 3)\n      (GLOBAL POD-DOOR CONTROLS LIGHTS GLOBAL-POD WINDOW)\n      (ACTION ESCAPE-POD-F)>",
   "referencedBy": [
    "WINDOW-F",
    "CONTROLS-F",
    "GLOBAL-POD-F",
    "I-BLOWUP-FEINSTEIN",
    "I-SINK-POD",
    "V-SIT"
   ]
  },
  "SHUTTLE-CAR-ALFIE": {
   "name": "SHUTTLE-CAR-ALFIE",
   "file": "globals.zil",
   "line": 1887,
   "endLine": 1899,
   "desc": "Shuttle Car Alfie",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "SHUTTLE-CAR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-SHUTTLE",
    "SHUTTLE-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "SHUTTLE-EXIT-F",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "ALFIE-CONTROL-EAST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "ALFIE-CONTROL-WEST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM SHUTTLE-CAR-ALFIE\n      (LOC ROOMS)\n      (DESC \"Shuttle Car Alfie\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (NORTH PER SHUTTLE-EXIT-F)\n      (EAST TO ALFIE-CONTROL-EAST)\n      (WEST TO ALFIE-CONTROL-WEST)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL GLOBAL-SHUTTLE SHUTTLE-DOOR)\n      (ACTION SHUTTLE-CAR-F)>",
   "referencedBy": [
    "GLOBAL-SHUTTLE-F",
    "SHUTTLE-CAR-F",
    "SHUTTLE-ENTER-F",
    "SHUTTLE-EXIT-F",
    "V-DISEMBARK"
   ]
  },
  "ALFIE-CONTROL-EAST": {
   "name": "ALFIE-CONTROL-EAST",
   "file": "globals.zil",
   "line": 1901,
   "endLine": 1911,
   "desc": "Alfie Control East",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CONTROL-CABIN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "SLOT",
    "WINDOW",
    "LEVER",
    "SHUTTLE-DOOR",
    "GLOBAL-SHUTTLE"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "SHUTTLE-CAR-ALFIE",
     "kind": "conditional",
     "condition": "SHUTTLE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM ALFIE-CONTROL-EAST\n      (LOC ROOMS)\n      (DESC \"Alfie Control East\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (WEST TO SHUTTLE-CAR-ALFIE IF SHUTTLE-DOOR IS OPEN)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL SLOT WINDOW LEVER SHUTTLE-DOOR GLOBAL-SHUTTLE)\n      (ACTION CONTROL-CABIN-F)>",
   "referencedBy": [
    "I-FLOYD",
    "WINDOW-F",
    "GLOBAL-SHUTTLE-F",
    "DESCRIBE-VIEW",
    "SHUTTLE-ACTIVATE",
    "DESCRIBE-SHUTTLE-ARRIVE"
   ]
  },
  "ALFIE-CONTROL-WEST": {
   "name": "ALFIE-CONTROL-WEST",
   "file": "globals.zil",
   "line": 1913,
   "endLine": 1923,
   "desc": "Alfie Control West",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CONTROL-CABIN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "SLOT",
    "LEVER",
    "WINDOW",
    "SHUTTLE-DOOR",
    "GLOBAL-SHUTTLE"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "SHUTTLE-CAR-ALFIE",
     "kind": "conditional",
     "condition": "SHUTTLE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM ALFIE-CONTROL-WEST\n      (LOC ROOMS)\n      (DESC \"Alfie Control West\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (EAST TO SHUTTLE-CAR-ALFIE IF SHUTTLE-DOOR IS OPEN)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL SLOT LEVER WINDOW SHUTTLE-DOOR GLOBAL-SHUTTLE)\n      (ACTION CONTROL-CABIN-F)>",
   "referencedBy": [
    "I-FLOYD",
    "WINDOW-F",
    "GLOBAL-SHUTTLE-F",
    "DESCRIBE-VIEW",
    "SHUTTLE-ACTIVATE",
    "DESCRIBE-SHUTTLE-ARRIVE"
   ]
  },
  "SHUTTLE-CAR-BETTY": {
   "name": "SHUTTLE-CAR-BETTY",
   "file": "globals.zil",
   "line": 1951,
   "endLine": 1963,
   "desc": "Shuttle Car Betty",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "SHUTTLE-CAR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-SHUTTLE",
    "SHUTTLE-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "SHUTTLE-EXIT-F",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "BETTY-CONTROL-EAST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BETTY-CONTROL-WEST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM SHUTTLE-CAR-BETTY\n      (LOC ROOMS)\n      (DESC \"Shuttle Car Betty\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (SOUTH PER SHUTTLE-EXIT-F)\n      (EAST TO BETTY-CONTROL-EAST)\n      (WEST TO BETTY-CONTROL-WEST)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL GLOBAL-SHUTTLE SHUTTLE-DOOR)\n      (ACTION SHUTTLE-CAR-F)>",
   "referencedBy": [
    "GLOBAL-SHUTTLE-F",
    "SHUTTLE-ENTER-F",
    "SHUTTLE-EXIT-F",
    "V-DISEMBARK"
   ]
  },
  "BETTY-CONTROL-EAST": {
   "name": "BETTY-CONTROL-EAST",
   "file": "globals.zil",
   "line": 1965,
   "endLine": 1975,
   "desc": "Betty Control East",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CONTROL-CABIN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-SHUTTLE",
    "SLOT",
    "WINDOW",
    "LEVER",
    "SHUTTLE-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "SHUTTLE-CAR-BETTY",
     "kind": "conditional",
     "condition": "SHUTTLE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM BETTY-CONTROL-EAST\n      (LOC ROOMS)\n      (DESC \"Betty Control East\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (WEST TO SHUTTLE-CAR-BETTY IF SHUTTLE-DOOR IS OPEN)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL GLOBAL-SHUTTLE SLOT WINDOW LEVER SHUTTLE-DOOR)\n      (ACTION CONTROL-CABIN-F)>",
   "referencedBy": [
    "I-FLOYD",
    "WINDOW-F",
    "GLOBAL-SHUTTLE-F",
    "DESCRIBE-VIEW",
    "SHUTTLE-ACTIVATE"
   ]
  },
  "BETTY-CONTROL-WEST": {
   "name": "BETTY-CONTROL-WEST",
   "file": "globals.zil",
   "line": 1977,
   "endLine": 1987,
   "desc": "Betty Control West",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CONTROL-CABIN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-SHUTTLE",
    "SLOT",
    "LEVER",
    "WINDOW",
    "SHUTTLE-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "exits": [
    {
     "to": "SHUTTLE-CAR-BETTY",
     "kind": "conditional",
     "condition": "SHUTTLE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM BETTY-CONTROL-WEST\n      (LOC ROOMS)\n      (DESC \"Betty Control West\")\n      (C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n      (EAST TO SHUTTLE-CAR-BETTY IF SHUTTLE-DOOR IS OPEN)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL GLOBAL-SHUTTLE SLOT LEVER WINDOW SHUTTLE-DOOR)\n      (ACTION CONTROL-CABIN-F)>",
   "referencedBy": [
    "I-FLOYD",
    "WINDOW-F",
    "GLOBAL-SHUTTLE-F",
    "DESCRIBE-VIEW",
    "SHUTTLE-ACTIVATE"
   ]
  }
 },
 "objects": {
  "CONFERENCE-DOOR": {
   "name": "CONFERENCE-DOOR",
   "file": "compone.zil",
   "line": 253,
   "endLine": 258,
   "desc": "door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [],
   "action": "CONFERENCE-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CONFERENCE-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"door\")\n\t(SYNONYM DOOR)\n\t(FLAGS DOORBIT NDESCBIT)\n\t(ACTION CONFERENCE-DOOR-F)>",
   "referencedBy": [
    "REC-AREA-F",
    "CONFERENCE-ROOM-F",
    "COMBINATION-DIAL-F",
    "CONFERENCE-DOOR-F"
   ]
  },
  "COMBINATION-DIAL": {
   "name": "COMBINATION-DIAL",
   "file": "compone.zil",
   "line": 260,
   "endLine": 266,
   "desc": "combination dial",
   "ldesc": null,
   "fdesc": null,
   "loc": "REC-AREA",
   "flags": [
    "MUNGBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DIAL"
   ],
   "adjectives": [
    "COMBINATION"
   ],
   "action": "COMBINATION-DIAL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT COMBINATION-DIAL\n\t(LOC REC-AREA)\n\t(DESC \"combination dial\")\n\t(SYNONYM DIAL)\n\t(ADJECTIVE COMBINATION)\n\t(FLAGS MUNGBIT NDESCBIT)\n\t(ACTION COMBINATION-DIAL-F)>",
   "referencedBy": [
    "COMBINATION-DIAL-F",
    "V-SET"
   ]
  },
  "STORAGE-WEST-DOOR": {
   "name": "STORAGE-WEST-DOOR",
   "file": "compone.zil",
   "line": 510,
   "endLine": 515,
   "desc": "door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [],
   "action": "STORAGE-WEST-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT STORAGE-WEST-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"door\")\n\t(SYNONYM DOOR)\n\t(FLAGS DOORBIT NDESCBIT)\n\t(ACTION STORAGE-WEST-DOOR-F)>",
   "referencedBy": [
    "MESS-CORRIDOR-F",
    "STORAGE-WEST-DOOR-F"
   ]
  },
  "PADLOCK": {
   "name": "PADLOCK",
   "file": "compone.zil",
   "line": 540,
   "endLine": 547,
   "desc": "padlock",
   "ldesc": null,
   "fdesc": null,
   "loc": "MESS-CORRIDOR",
   "flags": [
    "MUNGBIT",
    "NDESCBIT",
    "TAKEBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "PADLOCK",
    "PAD",
    "LOCK"
   ],
   "adjectives": [
    "SIMPLE",
    "STEEL",
    "METAL"
   ],
   "action": "PADLOCK-F",
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
   "source": "<OBJECT PADLOCK\n\t(LOC MESS-CORRIDOR)\n\t(DESC \"padlock\")\n\t(SYNONYM PADLOCK PAD LOCK)\n\t(ADJECTIVE SIMPLE STEEL METAL)\n\t(SIZE 10)\n\t(FLAGS MUNGBIT NDESCBIT TAKEBIT TRYTAKEBIT)\n\t(ACTION PADLOCK-F)>",
   "referencedBy": [
    "MESS-CORRIDOR-F",
    "STORAGE-WEST-DOOR-F",
    "PADLOCK-F",
    "I-BLATHER"
   ]
  },
  "CAN": {
   "name": "CAN",
   "file": "compone.zil",
   "line": 608,
   "endLine": 620,
   "desc": "tin can",
   "ldesc": "There is a large tin can, labelled \"Spam and Egz,\" sitting here.",
   "fdesc": "On a small shelf is a large, unopened tin can. It has a plain white\nlabel which reads \"Spam and Egz.\"",
   "loc": "STORAGE-WEST",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "CAN"
   ],
   "adjectives": [
    "LARGE",
    "TIN",
    "UNOPENED"
   ],
   "action": "CAN-F",
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
   "source": "<OBJECT CAN\n\t(LOC STORAGE-WEST)\n\t(DESC \"tin can\")\n\t(LDESC \n\"There is a large tin can, labelled \\\"Spam and Egz,\\\" sitting here.\")\n\t(FDESC\n\"On a small shelf is a large, unopened tin can. It has a plain white\nlabel which reads \\\"Spam and Egz.\\\"\")\n\t(SIZE 15)\n\t(SYNONYM CAN)\n\t(ADJECTIVE LARGE TIN UNOPENED)\n\t(FLAGS TAKEBIT)\n\t(ACTION CAN-F)>",
   "referencedBy": [
    "HERE?"
   ]
  },
  "LADDER": {
   "name": "LADDER",
   "file": "compone.zil",
   "line": 632,
   "endLine": 643,
   "desc": "ladder",
   "ldesc": "There is a large aluminum ladder here.",
   "fdesc": "A heavy-duty extendable ladder is leaning against the rear wall.",
   "loc": "STORAGE-WEST",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "LADDER"
   ],
   "adjectives": [
    "HEAVY",
    "DUTY",
    "HEAVY-DUTY",
    "ALUMINUM",
    "LARGE"
   ],
   "action": "LADDER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "80"
    ]
   },
   "contents": [],
   "source": "<OBJECT LADDER\n\t(LOC STORAGE-WEST)\n\t(DESC \"ladder\")\n\t(FDESC\n\"A heavy-duty extendable ladder is leaning against the rear wall.\")\n\t(LDESC\n\"There is a large aluminum ladder here.\")\n\t(SYNONYM LADDER)\n\t(ADJECTIVE HEAVY DUTY HEAVY-DUTY ALUMINUM LARGE)\n\t(SIZE 80)\n\t(FLAGS TAKEBIT)\n\t(ACTION LADDER-F)>",
   "referencedBy": [
    "LADDER-F",
    "ADMIN-CORRIDOR-F",
    "ADMIN-CORRIDOR-N-F",
    "V-PUT-ON"
   ]
  },
  "KITCHEN-DOOR": {
   "name": "KITCHEN-DOOR",
   "file": "compone.zil",
   "line": 764,
   "endLine": 770,
   "desc": "door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "KITCHEN"
   ],
   "action": "KITCHEN-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT KITCHEN-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE KITCHEN)\n\t(FLAGS DOORBIT NDESCBIT)\n\t(ACTION KITCHEN-DOOR-F)>",
   "referencedBy": [
    "MESS-HALL-F",
    "SLOT-F",
    "I-KITCHEN-DOOR-CLOSES"
   ]
  },
  "DISPENSER": {
   "name": "DISPENSER",
   "file": "compone.zil",
   "line": 795,
   "endLine": 801,
   "desc": "dispenser unit",
   "ldesc": null,
   "fdesc": null,
   "loc": "KITCHEN",
   "flags": [
    "MUNGBIT",
    "CONTBIT",
    "SEARCHBIT",
    "OPENBIT",
    "TRANSBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "UNIT",
    "NICHE",
    "MACHINE",
    "DISPENSER"
   ],
   "adjectives": [
    "DISPENSER"
   ],
   "action": "DISPENSER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DISPENSER\n\t(LOC KITCHEN)\n\t(DESC \"dispenser unit\")\n\t(SYNONYM UNIT NICHE MACHINE DISPENSER)\n\t(ADJECTIVE DISPENSER)\n\t(FLAGS MUNGBIT CONTBIT SEARCHBIT OPENBIT TRANSBIT NDESCBIT)\n\t(ACTION DISPENSER-F)>",
   "referencedBy": [
    "DISPENSER-F",
    "SPOUT-PSEUDO",
    "BUTTON-PSEUDO",
    "V-INSERT"
   ]
  },
  "CANTEEN": {
   "name": "CANTEEN",
   "file": "compone.zil",
   "line": 803,
   "endLine": 813,
   "desc": "canteen",
   "ldesc": null,
   "fdesc": "Although the room is quite barren, an octagonally shaped\ncanteen is sitting on one of the benches.",
   "loc": "MESS-HALL",
   "flags": [
    "TAKEBIT",
    "CONTBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "CANTEEN"
   ],
   "adjectives": [
    "OCTAGONAL"
   ],
   "action": null,
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
    ]
   },
   "contents": [],
   "source": "<OBJECT CANTEEN\n\t(LOC MESS-HALL)\n\t(DESC \"canteen\")\n\t(FDESC \n\"Although the room is quite barren, an octagonally shaped\ncanteen is sitting on one of the benches.\")\n\t(SYNONYM CANTEEN)\n\t(ADJECTIVE OCTAGONAL)\n\t(CAPACITY 5)\n\t(SIZE 10)\n\t(FLAGS TAKEBIT CONTBIT SEARCHBIT)>",
   "referencedBy": [
    "DISPENSER-F",
    "HIGH-PROTEIN-F",
    "CHEM-BUTTON-F",
    "CHEMICAL-FLUID-F",
    "WAKING-UP",
    "SPOUT-PSEUDO",
    "BUTTON-PSEUDO",
    "ITAKE"
   ]
  },
  "HIGH-PROTEIN": {
   "name": "HIGH-PROTEIN",
   "file": "compone.zil",
   "line": 836,
   "endLine": 842,
   "desc": "quantity of protein-rich liquid",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "FOODBIT"
   ],
   "synonyms": [
    "LIQUID",
    "FLUID",
    "FOOD",
    "QUANTITY"
   ],
   "adjectives": [
    "BROWN",
    "PROTEIN-RICH",
    "PROTEIN",
    "RICH"
   ],
   "action": "HIGH-PROTEIN-F",
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
   "source": "<OBJECT HIGH-PROTEIN\n\t(DESC \"quantity of protein-rich liquid\")\n\t(SYNONYM LIQUID FLUID FOOD QUANTITY)\n\t(ADJECTIVE BROWN PROTEIN-RICH PROTEIN RICH)\n\t(SIZE 5)\n\t(FLAGS FOODBIT)\n\t(ACTION HIGH-PROTEIN-F)>",
   "referencedBy": [
    "HIGH-PROTEIN-F",
    "CHEMICAL-FLUID-F",
    "WAKING-UP",
    "BUTTON-PSEUDO",
    "ITAKE",
    "V-SHAKE",
    "V-EMPTY",
    "V-TASTE"
   ]
  },
  "CREVICE": {
   "name": "CREVICE",
   "file": "compone.zil",
   "line": 944,
   "endLine": 950,
   "desc": "crevice",
   "ldesc": null,
   "fdesc": null,
   "loc": "ADMIN-CORRIDOR-S",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "CREVICE",
    "CRACK",
    "HOLE"
   ],
   "adjectives": [
    "NARROW",
    "JAGGED"
   ],
   "action": "CREVICE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CREVICE\n\t(LOC ADMIN-CORRIDOR-S)\n\t(DESC \"crevice\")\n\t(SYNONYM CREVICE CRACK HOLE)\n\t(ADJECTIVE NARROW JAGGED)\n\t(FLAGS NDESCBIT)\n\t(ACTION CREVICE-F)>",
   "referencedBy": [
    "KEY-F",
    "MAGNET-F",
    "CHEMICAL-FLUID-F"
   ]
  },
  "KEY": {
   "name": "KEY",
   "file": "compone.zil",
   "line": 964,
   "endLine": 972,
   "desc": "key",
   "ldesc": null,
   "fdesc": "Lying at the bottom of a narrow crevice is a shiny object.",
   "loc": "ADMIN-CORRIDOR-S",
   "flags": [
    "ACIDBIT",
    "TAKEBIT",
    "TOOLBIT",
    "INVISIBLE",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "KEY",
    "METAL",
    "OBJECT"
   ],
   "adjectives": [
    "PIECE",
    "STEEL",
    "IRON",
    "SHINY"
   ],
   "action": "KEY-F",
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
   "source": "<OBJECT KEY\n\t(LOC ADMIN-CORRIDOR-S)\n\t(DESC \"key\")\n\t(FDESC \"Lying at the bottom of a narrow crevice is a shiny object.\")\n\t(SIZE 3)\n\t(SYNONYM KEY METAL OBJECT)\n\t(ADJECTIVE PIECE STEEL IRON SHINY)\n\t(FLAGS ACIDBIT TAKEBIT TOOLBIT INVISIBLE TRYTAKEBIT)\n\t(ACTION KEY-F)>",
   "referencedBy": [
    "PADLOCK-F",
    "ADMIN-CORRIDOR-S-F",
    "CREVICE-F",
    "KEY-F",
    "MAGNET-F",
    "CHEMICAL-FLUID-F",
    "PRE-TAKE"
   ]
  },
  "RIFT": {
   "name": "RIFT",
   "file": "compone.zil",
   "line": 1067,
   "endLine": 1073,
   "desc": "rift",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "RIFT",
    "GULF",
    "PRECIPICE",
    "HOLE"
   ],
   "adjectives": [
    "WIDE",
    "DEEP",
    "GAPING"
   ],
   "action": "RIFT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RIFT\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"rift\")\n\t(SYNONYM RIFT GULF PRECIPICE HOLE)\n\t(ADJECTIVE WIDE DEEP GAPING)\n\t(FLAGS NDESCBIT)\n\t(ACTION RIFT-F)>",
   "referencedBy": [
    "LADDER-F",
    "RIFT-F"
   ]
  },
  "SMALL-DESK": {
   "name": "SMALL-DESK",
   "file": "compone.zil",
   "line": 1211,
   "endLine": 1218,
   "desc": "small desk",
   "ldesc": null,
   "fdesc": null,
   "loc": "SMALL-OFFICE",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "DESK",
    "DRAWER"
   ],
   "adjectives": [
    "SMALL"
   ],
   "action": "DESK-F",
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
    "KITCHEN-CARD",
    "UPPER-ELEVATOR-CARD"
   ],
   "source": "<OBJECT SMALL-DESK\n\t(LOC SMALL-OFFICE)\n\t(DESC \"small desk\")\n\t(SYNONYM DESK DRAWER)\n\t(ADJECTIVE SMALL)\n\t(CAPACITY 10)\n\t(FLAGS NDESCBIT CONTBIT SEARCHBIT)\n\t(ACTION DESK-F)>",
   "referencedBy": []
  },
  "KITCHEN-CARD": {
   "name": "KITCHEN-CARD",
   "file": "compone.zil",
   "line": 1220,
   "endLine": 1228,
   "desc": "kitchen access card",
   "ldesc": null,
   "fdesc": null,
   "loc": "SMALL-DESK",
   "flags": [
    "TAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "CARD",
    "CARDS"
   ],
   "adjectives": [
    "KITCHEN",
    "ACCESS"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ],
    "TEXT": [
     "The card is embossed \"kitcin akses kard.\""
    ],
    "VALUE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT KITCHEN-CARD\n\t(LOC SMALL-DESK)\n\t(DESC \"kitchen access card\")\n\t(SYNONYM CARD CARDS)\n\t(ADJECTIVE KITCHEN ACCESS)\n\t(SIZE 3)\n\t(FLAGS TAKEBIT READBIT)\n        (TEXT \"The card is embossed \\\"kitcin akses kard.\\\"\")\n\t(VALUE 1)>",
   "referencedBy": [
    "I-MAGNET",
    "FLOYD-F",
    "LASER-F",
    "SLOT-F"
   ]
  },
  "UPPER-ELEVATOR-CARD": {
   "name": "UPPER-ELEVATOR-CARD",
   "file": "compone.zil",
   "line": 1230,
   "endLine": 1238,
   "desc": "upper elevator access card",
   "ldesc": null,
   "fdesc": null,
   "loc": "SMALL-DESK",
   "flags": [
    "VOWELBIT",
    "TAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "CARD",
    "CARDS"
   ],
   "adjectives": [
    "UPPER",
    "ELEVATOR",
    "ACCESS"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ],
    "TEXT": [
     "The card is embossed \"upur elivaatur akses kard.\""
    ],
    "VALUE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT UPPER-ELEVATOR-CARD\n\t(LOC SMALL-DESK)\n\t(DESC \"upper elevator access card\")\n\t(SYNONYM CARD CARDS)\n\t(ADJECTIVE UPPER ELEVATOR ACCESS)\n\t(SIZE 3)\n\t(FLAGS VOWELBIT TAKEBIT READBIT)\n\t(TEXT \"The card is embossed \\\"upur elivaatur akses kard.\\\"\")\n\t(VALUE 1)>",
   "referencedBy": [
    "I-MAGNET",
    "FLOYD-F",
    "LASER-F",
    "SLOT-F"
   ]
  },
  "SHUTTLE-CARD": {
   "name": "SHUTTLE-CARD",
   "file": "compone.zil",
   "line": 1240,
   "endLine": 1248,
   "desc": "shuttle access card",
   "ldesc": null,
   "fdesc": null,
   "loc": "LARGE-DESK",
   "flags": [
    "TAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "CARD",
    "CARDS"
   ],
   "adjectives": [
    "SHUTTLE",
    "ACCESS"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ],
    "TEXT": [
     "The card is embossed \"shutul akses kard.\""
    ],
    "VALUE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT SHUTTLE-CARD\n\t(LOC LARGE-DESK)\n\t(DESC \"shuttle access card\")\n\t(SYNONYM CARD CARDS)\n\t(ADJECTIVE SHUTTLE ACCESS)\n\t(SIZE 3)\n\t(FLAGS TAKEBIT READBIT)\n\t(TEXT \"The card is embossed \\\"shutul akses kard.\\\"\")\n\t(VALUE 1)>",
   "referencedBy": [
    "I-MAGNET",
    "FLOYD-F",
    "LASER-F",
    "SLOT-F"
   ]
  },
  "LOWER-ELEVATOR-CARD": {
   "name": "LOWER-ELEVATOR-CARD",
   "file": "compone.zil",
   "line": 1250,
   "endLine": 1257,
   "desc": "lower elevator access card",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "CARD",
    "CARDS"
   ],
   "adjectives": [
    "LOWER",
    "ELEVATOR",
    "ACCESS"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ],
    "TEXT": [
     "The card is embossed \"loowur elivaatur akses kard.\""
    ],
    "VALUE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT LOWER-ELEVATOR-CARD\n\t(DESC \"lower elevator access card\")\n\t(SYNONYM CARD CARDS)\n\t(ADJECTIVE LOWER ELEVATOR ACCESS)\n\t(SIZE 3)\n\t(FLAGS TAKEBIT READBIT)\n\t(TEXT \"The card is embossed \\\"loowur elivaatur akses kard.\\\"\")\n\t(VALUE 1)>",
   "referencedBy": [
    "I-MAGNET",
    "FLOYD-F",
    "LASER-F",
    "SLOT-F",
    "FLOYD-REVEAL-CARD-F"
   ]
  },
  "LARGE-DESK": {
   "name": "LARGE-DESK",
   "file": "compone.zil",
   "line": 1274,
   "endLine": 1281,
   "desc": "large desk",
   "ldesc": null,
   "fdesc": null,
   "loc": "LARGE-OFFICE",
   "flags": [
    "CONTBIT",
    "SEARCHBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DESK",
    "DRAWER"
   ],
   "adjectives": [
    "LARGE",
    "WIDE",
    "WOODEN"
   ],
   "action": "DESK-F",
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
    "SHUTTLE-CARD"
   ],
   "source": "<OBJECT LARGE-DESK\n\t(LOC LARGE-OFFICE)\n\t(DESC \"large desk\")\n\t(SYNONYM DESK DRAWER)\n\t(ADJECTIVE LARGE WIDE WOODEN)\n\t(CAPACITY 20)\n\t(FLAGS CONTBIT SEARCHBIT NDESCBIT)\n\t(ACTION DESK-F)>",
   "referencedBy": []
  },
  "OIL-CAN": {
   "name": "OIL-CAN",
   "file": "compone.zil",
   "line": 1347,
   "endLine": 1356,
   "desc": "oil can",
   "ldesc": null,
   "fdesc": "One dusty shelf, otherwise bare, holds a small oil can.",
   "loc": "STORAGE-EAST",
   "flags": [
    "VOWELBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "CAN"
   ],
   "adjectives": [
    "SMALL",
    "OIL"
   ],
   "action": "OIL-CAN-F",
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
   "source": "<OBJECT OIL-CAN\n\t(LOC STORAGE-EAST)\n\t(DESC \"oil can\")\n\t(FDESC\n\"One dusty shelf, otherwise bare, holds a small oil can.\")\n\t(SYNONYM CAN)\n\t(ADJECTIVE SMALL OIL)\n\t(SIZE 10)\n\t(FLAGS VOWELBIT TAKEBIT)\n\t(ACTION OIL-CAN-F)>",
   "referencedBy": [
    "V-OIL"
   ]
  },
  "CARTON": {
   "name": "CARTON",
   "file": "compone.zil",
   "line": 1368,
   "endLine": 1378,
   "desc": "cardboard box",
   "ldesc": null,
   "fdesc": "On the floor beneath the shelves sits a small cardboard box.",
   "loc": "STORAGE-EAST",
   "flags": [
    "TAKEBIT",
    "CONTBIT",
    "SEARCHBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "BOX",
    "CARTON"
   ],
   "adjectives": [
    "SMALL",
    "CARDBOARD"
   ],
   "action": "CARTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "10"
    ],
    "CAPACITY": [
     "50"
    ]
   },
   "contents": [
    "CRACKED-BOARD",
    "MEGAFUSE-B",
    "MEGAFUSE-K",
    "GOOD-BEDISTOR"
   ],
   "source": "<OBJECT CARTON\n\t(LOC STORAGE-EAST)\n\t(DESC \"cardboard box\")\n\t(FDESC\n\"On the floor beneath the shelves sits a small cardboard box.\")\n\t(SYNONYM BOX CARTON)\n\t(ADJECTIVE SMALL CARDBOARD)\n\t(SIZE 10)\n\t(CAPACITY 50)\n\t(FLAGS TAKEBIT CONTBIT SEARCHBIT OPENBIT)\n\t(ACTION CARTON-F)>",
   "referencedBy": []
  },
  "CRACKED-BOARD": {
   "name": "CRACKED-BOARD",
   "file": "compone.zil",
   "line": 1385,
   "endLine": 1392,
   "desc": "cracked seventeen-centimeter fromitz board",
   "ldesc": null,
   "fdesc": null,
   "loc": "CARTON",
   "flags": [
    "ACIDBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "BOARD",
    "BOARDS"
   ],
   "adjectives": [
    "CRACKED",
    "SEVENTEEN",
    "CENTIMETER",
    "FROMITZ"
   ],
   "action": "CRACKED-BOARD-F",
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
   "source": "<OBJECT CRACKED-BOARD\n\t(LOC CARTON)\n\t(DESC \"cracked seventeen-centimeter fromitz board\")\n\t(SYNONYM BOARD BOARDS)\n\t(ADJECTIVE CRACKED SEVENTEEN CENTIMETER FROMITZ)\n\t(SIZE 10)\n\t(FLAGS ACIDBIT TAKEBIT)\n\t(ACTION CRACKED-BOARD-F)>",
   "referencedBy": [
    "ACCESS-PANEL-F",
    "BOARD-F"
   ]
  },
  "MEGAFUSE-B": {
   "name": "MEGAFUSE-B",
   "file": "compone.zil",
   "line": 1399,
   "endLine": 1405,
   "desc": "B-series megafuse",
   "ldesc": null,
   "fdesc": null,
   "loc": "CARTON",
   "flags": [
    "ACIDBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "FUSE",
    "MEGAFUSE"
   ],
   "adjectives": [
    "B-SERIES",
    "B",
    "SERIES",
    "MEGA"
   ],
   "action": null,
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
   "source": "<OBJECT MEGAFUSE-B\n\t(LOC CARTON)\n\t(DESC \"B-series megafuse\")\n\t(SYNONYM FUSE MEGAFUSE)\n\t(ADJECTIVE B-SERIES B SERIES MEGA)\n\t(SIZE 5)\n\t(FLAGS ACIDBIT TAKEBIT)>",
   "referencedBy": []
  },
  "MEGAFUSE-K": {
   "name": "MEGAFUSE-K",
   "file": "compone.zil",
   "line": 1407,
   "endLine": 1413,
   "desc": "K-series megafuse",
   "ldesc": null,
   "fdesc": null,
   "loc": "CARTON",
   "flags": [
    "ACIDBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "FUSE",
    "MEGAFUSE"
   ],
   "adjectives": [
    "K-SERIES",
    "K",
    "SERIES",
    "MEGA"
   ],
   "action": null,
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
   "source": "<OBJECT MEGAFUSE-K\n\t(LOC CARTON)\n\t(DESC \"K-series megafuse\")\n\t(SYNONYM FUSE MEGAFUSE)\n\t(ADJECTIVE K-SERIES K SERIES MEGA)\n\t(SIZE 5)\n\t(FLAGS ACIDBIT TAKEBIT)>",
   "referencedBy": []
  },
  "GOOD-BEDISTOR": {
   "name": "GOOD-BEDISTOR",
   "file": "compone.zil",
   "line": 1415,
   "endLine": 1422,
   "desc": "good ninety-ohm bedistor",
   "ldesc": null,
   "fdesc": null,
   "loc": "CARTON",
   "flags": [
    "ACIDBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "BEDISTOR"
   ],
   "adjectives": [
    "GOOD",
    "NINETY",
    "OHM",
    "NINETY-OHM"
   ],
   "action": "GOOD-BEDISTOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "8"
    ]
   },
   "contents": [],
   "source": "<OBJECT GOOD-BEDISTOR\n\t(LOC CARTON)\n\t(DESC \"good ninety-ohm bedistor\")\n\t(SYNONYM BEDISTOR)\n\t(ADJECTIVE GOOD NINETY OHM NINETY-OHM)\n\t(SIZE 8)\n\t(FLAGS ACIDBIT TAKEBIT)\n\t(ACTION GOOD-BEDISTOR-F)>",
   "referencedBy": [
    "CHEMICAL-FLUID-F",
    "CUBE-F"
   ]
  },
  "REACTOR-ELEVATOR-DOOR": {
   "name": "REACTOR-ELEVATOR-DOOR",
   "file": "compone.zil",
   "line": 1480,
   "endLine": 1486,
   "desc": "reactor elevator door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "REACTOR",
    "ELEVATOR"
   ],
   "action": "REACTOR-ELEVATOR-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT REACTOR-ELEVATOR-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"reactor elevator door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE REACTOR ELEVATOR)\n\t(FLAGS DOORBIT)\n\t(ACTION REACTOR-ELEVATOR-DOOR-F)>",
   "referencedBy": [
    "I-REACTOR-DOOR-CLOSE",
    "REACTOR-BUTTON-PSEUDO"
   ]
  },
  "FLASK": {
   "name": "FLASK",
   "file": "compone.zil",
   "line": 1531,
   "endLine": 1541,
   "desc": "glass flask",
   "ldesc": null,
   "fdesc": "Sitting on the floor below the lowest shelf is a large glass flask.",
   "loc": "TOOL-ROOM",
   "flags": [
    "CONTBIT",
    "SEARCHBIT",
    "OPENBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "FLASK"
   ],
   "adjectives": [
    "GLASS",
    "LARGE",
    "PLASTIC"
   ],
   "action": "FLASK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "10"
    ],
    "CAPACITY": [
     "2"
    ]
   },
   "contents": [],
   "source": "<OBJECT FLASK\n\t(LOC TOOL-ROOM)\n\t(DESC \"glass flask\")\n\t(FDESC\n\"Sitting on the floor below the lowest shelf is a large glass flask.\")\n\t(SYNONYM FLASK)\n\t(ADJECTIVE GLASS LARGE PLASTIC)\n\t(SIZE 10)\n\t(CAPACITY 2)\n\t(FLAGS CONTBIT SEARCHBIT OPENBIT TAKEBIT)\n\t(ACTION FLASK-F)>",
   "referencedBy": [
    "HIGH-PROTEIN-F",
    "FLASK-F",
    "CHEM-BUTTON-F",
    "CHEMICAL-FLUID-F",
    "MEDICINE-F",
    "WAKING-UP",
    "ITAKE"
   ]
  },
  "MAGNET": {
   "name": "MAGNET",
   "file": "compone.zil",
   "line": 1560,
   "endLine": 1568,
   "desc": "curved metal bar",
   "ldesc": null,
   "fdesc": "On an upper shelf is a metal bar, curved into a U-shape.",
   "loc": "TOOL-ROOM",
   "flags": [
    "TRYTAKEBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "MAGNET",
    "BAR"
   ],
   "adjectives": [
    "CURVED",
    "METAL",
    "HORSESHOE"
   ],
   "action": "MAGNET-F",
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
   "source": "<OBJECT MAGNET\n\t(LOC TOOL-ROOM)\n\t(SIZE 10)\n\t(DESC \"curved metal bar\")\n\t(FDESC \"On an upper shelf is a metal bar, curved into a U-shape.\")\n\t(SYNONYM MAGNET BAR)\n\t(ADJECTIVE CURVED METAL HORSESHOE)\n\t(FLAGS TRYTAKEBIT TAKEBIT)\n\t(ACTION MAGNET-F)>",
   "referencedBy": [
    "KEY-F",
    "MAGNET-F",
    "I-MAGNET",
    "V-PUT-ON"
   ]
  },
  "PLIERS": {
   "name": "PLIERS",
   "file": "compone.zil",
   "line": 1615,
   "endLine": 1621,
   "desc": "pair of wide-nosed pliers",
   "ldesc": null,
   "fdesc": null,
   "loc": "TOOL-ROOM",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "PAIR",
    "PLIERS"
   ],
   "adjectives": [
    "WIDE-NOSED",
    "WIDE",
    "NOSED"
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
   "source": "<OBJECT PLIERS\n\t(LOC TOOL-ROOM)\n\t(DESC \"pair of wide-nosed pliers\")\n\t(SYNONYM PAIR PLIERS)\n\t(ADJECTIVE WIDE-NOSED WIDE NOSED)\n\t(SIZE 15)\n\t(FLAGS TAKEBIT)>",
   "referencedBy": [
    "KEY-F",
    "FLOYD-F",
    "BAD-BEDISTOR-F"
   ]
  },
  "CHEMICAL-DISPENSER": {
   "name": "CHEMICAL-DISPENSER",
   "file": "compone.zil",
   "line": 1678,
   "endLine": 1684,
   "desc": "chemical dispenser",
   "ldesc": null,
   "fdesc": null,
   "loc": "MACHINE-SHOP",
   "flags": [
    "MUNGBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DISPENSER",
    "MACHINE"
   ],
   "adjectives": [
    "DISPENSER",
    "LARGE",
    "CHEMICAL"
   ],
   "action": "CHEMICAL-DISPENSER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CHEMICAL-DISPENSER\n\t(LOC MACHINE-SHOP)\n\t(DESC \"chemical dispenser\")\n\t(SYNONYM DISPENSER MACHINE)\n\t(ADJECTIVE DISPENSER LARGE CHEMICAL)\n\t(FLAGS MUNGBIT NDESCBIT)\n\t(ACTION CHEMICAL-DISPENSER-F)>",
   "referencedBy": [
    "CHEMICAL-DISPENSER-F",
    "CHEM-BUTTON-F",
    "CHEM-SPOUT-PSEUDO"
   ]
  },
  "RED-BUTTON": {
   "name": "RED-BUTTON",
   "file": "compone.zil",
   "line": 1700,
   "endLine": 1707,
   "desc": "red button",
   "ldesc": null,
   "fdesc": null,
   "loc": "MACHINE-SHOP",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "RED"
   ],
   "action": "CHEM-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT RED-BUTTON\n\t(LOC MACHINE-SHOP)\n\t(DESC \"red button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE RED)\n\t(FLAGS NDESCBIT)\n\t(C-MOVE 1)\n\t(ACTION CHEM-BUTTON-F)>",
   "referencedBy": []
  },
  "BLUE-BUTTON": {
   "name": "BLUE-BUTTON",
   "file": "compone.zil",
   "line": 1709,
   "endLine": 1716,
   "desc": "blue button",
   "ldesc": null,
   "fdesc": null,
   "loc": "MACHINE-SHOP",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "BLUE"
   ],
   "action": "CHEM-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "2"
    ]
   },
   "contents": [],
   "source": "<OBJECT BLUE-BUTTON\n\t(LOC MACHINE-SHOP)\n\t(DESC \"blue button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE BLUE)\n\t(FLAGS NDESCBIT)\n\t(C-MOVE 2)\n\t(ACTION CHEM-BUTTON-F)>",
   "referencedBy": []
  },
  "GREEN-BUTTON": {
   "name": "GREEN-BUTTON",
   "file": "compone.zil",
   "line": 1718,
   "endLine": 1725,
   "desc": "green button",
   "ldesc": null,
   "fdesc": null,
   "loc": "MACHINE-SHOP",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "GREEN"
   ],
   "action": "CHEM-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "3"
    ]
   },
   "contents": [],
   "source": "<OBJECT GREEN-BUTTON\n\t(LOC MACHINE-SHOP)\n\t(DESC \"green button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE GREEN)\n\t(FLAGS NDESCBIT)\n\t(C-MOVE 3)\n\t(ACTION CHEM-BUTTON-F)>",
   "referencedBy": []
  },
  "YELLOW-BUTTON": {
   "name": "YELLOW-BUTTON",
   "file": "compone.zil",
   "line": 1727,
   "endLine": 1734,
   "desc": "yellow button",
   "ldesc": null,
   "fdesc": null,
   "loc": "MACHINE-SHOP",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "YELLOW"
   ],
   "action": "CHEM-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "4"
    ]
   },
   "contents": [],
   "source": "<OBJECT YELLOW-BUTTON\n\t(LOC MACHINE-SHOP)\n\t(DESC \"yellow button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE YELLOW)\n\t(FLAGS NDESCBIT)\n\t(C-MOVE 4)\n\t(ACTION CHEM-BUTTON-F)>",
   "referencedBy": []
  },
  "GRAY-BUTTON": {
   "name": "GRAY-BUTTON",
   "file": "compone.zil",
   "line": 1736,
   "endLine": 1743,
   "desc": "gray button",
   "ldesc": null,
   "fdesc": null,
   "loc": "MACHINE-SHOP",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "GRAY",
    "GREY"
   ],
   "action": "CHEM-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT GRAY-BUTTON\n\t(LOC MACHINE-SHOP)\n\t(DESC \"gray button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE GRAY GREY)\n\t(FLAGS NDESCBIT)\n\t(C-MOVE 5)\n\t(ACTION CHEM-BUTTON-F)>",
   "referencedBy": []
  },
  "BROWN-BUTTON": {
   "name": "BROWN-BUTTON",
   "file": "compone.zil",
   "line": 1745,
   "endLine": 1752,
   "desc": "brown button",
   "ldesc": null,
   "fdesc": null,
   "loc": "MACHINE-SHOP",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "BROWN"
   ],
   "action": "CHEM-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "6"
    ]
   },
   "contents": [],
   "source": "<OBJECT BROWN-BUTTON\n\t(LOC MACHINE-SHOP)\n\t(DESC \"brown button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE BROWN)\n\t(FLAGS NDESCBIT)\n\t(C-MOVE 6)\n\t(ACTION CHEM-BUTTON-F)>",
   "referencedBy": []
  },
  "BLACK-BUTTON": {
   "name": "BLACK-BUTTON",
   "file": "compone.zil",
   "line": 1754,
   "endLine": 1761,
   "desc": "black button",
   "ldesc": null,
   "fdesc": null,
   "loc": "MACHINE-SHOP",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "BLACK"
   ],
   "action": "CHEM-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "7"
    ]
   },
   "contents": [],
   "source": "<OBJECT BLACK-BUTTON\n\t(LOC MACHINE-SHOP)\n\t(DESC \"black button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE BLACK)\n\t(FLAGS NDESCBIT)\n\t(C-MOVE 7)\n\t(ACTION CHEM-BUTTON-F)>",
   "referencedBy": []
  },
  "ROUND-WHITE-BUTTON": {
   "name": "ROUND-WHITE-BUTTON",
   "file": "compone.zil",
   "line": 1763,
   "endLine": 1770,
   "desc": "round white button",
   "ldesc": null,
   "fdesc": null,
   "loc": "MACHINE-SHOP",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "WHITE",
    "ROUND"
   ],
   "action": "CHEM-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "8"
    ]
   },
   "contents": [],
   "source": "<OBJECT ROUND-WHITE-BUTTON\n\t(LOC MACHINE-SHOP)\n\t(DESC \"round white button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE WHITE ROUND)\n\t(FLAGS NDESCBIT)\n\t(C-MOVE 8)\n\t(ACTION CHEM-BUTTON-F)>",
   "referencedBy": [
    "CHEM-BUTTON-F"
   ]
  },
  "SQUARE-WHITE-BUTTON": {
   "name": "SQUARE-WHITE-BUTTON",
   "file": "compone.zil",
   "line": 1772,
   "endLine": 1779,
   "desc": "square white button",
   "ldesc": null,
   "fdesc": null,
   "loc": "MACHINE-SHOP",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "SQUARE",
    "WHITE"
   ],
   "action": "CHEM-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "9"
    ]
   },
   "contents": [],
   "source": "<OBJECT SQUARE-WHITE-BUTTON\n\t(LOC MACHINE-SHOP)\n\t(DESC \"square white button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE SQUARE WHITE)\n\t(FLAGS NDESCBIT)\n\t(C-MOVE 9)\n\t(ACTION CHEM-BUTTON-F)>",
   "referencedBy": [
    "CHEM-BUTTON-F"
   ]
  },
  "FLOYD": {
   "name": "FLOYD",
   "file": "compone.zil",
   "line": 1846,
   "endLine": 1856,
   "desc": "multiple purpose robot",
   "ldesc": null,
   "fdesc": "Only one robot, about four feet high, looks even remotely close to being\nin working order.",
   "loc": "ROBOT-SHOP",
   "flags": [
    "CONTBIT",
    "SEARCHBIT",
    "TRANSBIT",
    "OPENBIT",
    "LIGHTBIT"
   ],
   "synonyms": [
    "FLOYD",
    "COMPARTMENT",
    "ROBOT",
    "COMPANION"
   ],
   "adjectives": [
    "MULTIPLE",
    "PURPOSE",
    "DIM-WITTED",
    "DIM",
    "WITTED"
   ],
   "action": "FLOYD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT FLOYD\n\t(LOC ROBOT-SHOP)\n\t(DESC \"multiple purpose robot\")\n\t(FDESC\n\"Only one robot, about four feet high, looks even remotely close to being\nin working order.\")\n\t(SYNONYM FLOYD COMPARTMENT ROBOT COMPANION)\n\t(ADJECTIVE MULTIPLE PURPOSE DIM-WITTED DIM WITTED)\n\t(FLAGS CONTBIT SEARCHBIT TRANSBIT OPENBIT LIGHTBIT)\n\t(CAPACITY 5)\n\t(ACTION FLOYD-F)>",
   "referencedBy": [
    "MACHINE-SHOP-F",
    "FLOYD-F",
    "FLOYD-COMES-ALIVE",
    "I-FLOYD",
    "CHEMICAL-FLUID-F",
    "INFIRMARY-F",
    "LIBRARY-TYPE",
    "PROJCON-OFFICE-F",
    "BIO-LOCK-EAST-F",
    "BIO-DOOR-EAST-F",
    "I-FLOYD-FORAY",
    "I-NUKED-BLUE",
    "LASER-F",
    "GLOBAL-GAMES-F",
    "HANDS-F",
    "NOT-HERE-OBJECT-F",
    "PATROL-UNIFORM-F",
    "FLOYD-REVEAL-CARD-F",
    "TELEPORT",
    "WAKING-UP",
    "GAMES-PSEUDO",
    "V-QUIT",
    "V-RESTORE",
    "V-SAVE",
    "V-RESTART",
    "V-SCRIPT",
    "V-UNSCRIPT",
    "V-POINT",
    "V-OIL"
   ]
  },
  "DEAD-FLOYD": {
   "name": "DEAD-FLOYD",
   "file": "compone.zil",
   "line": 2313,
   "endLine": 2319,
   "desc": "mangled robot",
   "ldesc": "Your former companion, Floyd, is lying on the ground in a pool of oil.",
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [
    "FLOYD",
    "ROBOT",
    "COMPANION"
   ],
   "adjectives": [
    "MANGLE",
    "DEAD",
    "FORMER"
   ],
   "action": "DEAD-FLOYD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DEAD-FLOYD\n\t(DESC \"mangled robot\")\n\t(LDESC\n\"Your former companion, Floyd, is lying on the ground in a pool of oil.\")\n\t(SYNONYM FLOYD ROBOT COMPANION)\n\t(ADJECTIVE MANGLE DEAD FORMER)\n\t(ACTION DEAD-FLOYD-F)>",
   "referencedBy": [
    "I-FLOYD-FORAY"
   ]
  },
  "UPPER-ELEVATOR-DOOR": {
   "name": "UPPER-ELEVATOR-DOOR",
   "file": "compone.zil",
   "line": 2495,
   "endLine": 2501,
   "desc": "blue door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "DOORBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "UPPER",
    "ELEVATOR",
    "BLUE"
   ],
   "action": "UPPER-ELEVATOR-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT UPPER-ELEVATOR-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"blue door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE UPPER ELEVATOR BLUE)\n\t(FLAGS NDESCBIT DOORBIT)\n\t(ACTION UPPER-ELEVATOR-DOOR-F)>",
   "referencedBy": [
    "ELEVATOR-LOBBY-F",
    "UPPER-ELEVATOR-F",
    "ELEVATOR-ENTER-F",
    "ELEVATOR-EXIT-F",
    "UPPER-ELEVATOR-DOOR-F",
    "I-UPPER-ELEVATOR-ARRIVE",
    "ELEVATOR-BUTTON-F",
    "I-UPPER-ELEVATOR-TRIP"
   ]
  },
  "LOWER-ELEVATOR-DOOR": {
   "name": "LOWER-ELEVATOR-DOOR",
   "file": "compone.zil",
   "line": 2515,
   "endLine": 2521,
   "desc": "red door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "DOORBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "RED",
    "LOWER",
    "ELEVATOR",
    "METAL"
   ],
   "action": "LOWER-ELEVATOR-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LOWER-ELEVATOR-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"red door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE RED LOWER ELEVATOR METAL)\n\t(FLAGS NDESCBIT DOORBIT)\n\t(ACTION LOWER-ELEVATOR-DOOR-F)>",
   "referencedBy": [
    "ELEVATOR-LOBBY-F",
    "LOWER-ELEVATOR-F",
    "ELEVATOR-ENTER-F",
    "ELEVATOR-EXIT-F",
    "LOWER-ELEVATOR-DOOR-F",
    "I-LOWER-ELEVATOR-ARRIVE",
    "ELEVATOR-BUTTON-F",
    "I-LOWER-ELEVATOR-TRIP",
    "OTHER-ELEVATOR-ENTER-F"
   ]
  },
  "BLUE-ELEVATOR-BUTTON": {
   "name": "BLUE-ELEVATOR-BUTTON",
   "file": "compone.zil",
   "line": 2550,
   "endLine": 2556,
   "desc": "blue button",
   "ldesc": null,
   "fdesc": null,
   "loc": "ELEVATOR-LOBBY",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "BLUE",
    "NORTH"
   ],
   "action": "BLUE-ELEVATOR-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BLUE-ELEVATOR-BUTTON\n\t(LOC ELEVATOR-LOBBY)\n\t(DESC \"blue button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE BLUE NORTH)\n\t(FLAGS NDESCBIT)\n\t(ACTION BLUE-ELEVATOR-BUTTON-F)>",
   "referencedBy": []
  },
  "RED-ELEVATOR-BUTTON": {
   "name": "RED-ELEVATOR-BUTTON",
   "file": "compone.zil",
   "line": 2558,
   "endLine": 2564,
   "desc": "red button",
   "ldesc": null,
   "fdesc": null,
   "loc": "ELEVATOR-LOBBY",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "RED",
    "SOUTH"
   ],
   "action": "RED-ELEVATOR-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RED-ELEVATOR-BUTTON\n\t(LOC ELEVATOR-LOBBY)\n\t(DESC \"red button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE RED SOUTH)\n\t(FLAGS NDESCBIT)\n\t(ACTION RED-ELEVATOR-BUTTON-F)>",
   "referencedBy": []
  },
  "ELEVATOR-BUTTON": {
   "name": "ELEVATOR-BUTTON",
   "file": "compone.zil",
   "line": 2605,
   "endLine": 2610,
   "desc": "button",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [],
   "action": "ELEVATOR-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ELEVATOR-BUTTON\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"button\")\n\t(SYNONYM BUTTON)\n\t(FLAGS NDESCBIT)\n        (ACTION ELEVATOR-BUTTON-F)>",
   "referencedBy": []
  },
  "HELICOPTER-OBJECT": {
   "name": "HELICOPTER-OBJECT",
   "file": "compone.zil",
   "line": 2786,
   "endLine": 2792,
   "desc": "large vehicle",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "VEHBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "VEHICLE",
    "HELICOPTER"
   ],
   "adjectives": [
    "LARGE"
   ],
   "action": "HELICOPTER-OBJECT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HELICOPTER-OBJECT\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"large vehicle\")\n\t(SYNONYM VEHICLE HELICOPTER)\n\t(ADJECTIVE LARGE)\n\t(FLAGS VEHBIT NDESCBIT)\n\t(ACTION HELICOPTER-OBJECT-F)>",
   "referencedBy": []
  },
  "RECEIVE-CONSOLE": {
   "name": "RECEIVE-CONSOLE",
   "file": "compone.zil",
   "line": 2898,
   "endLine": 2907,
   "desc": "communications receive console",
   "ldesc": null,
   "fdesc": null,
   "loc": "COMM-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "CONSOLE",
    "CONTROL"
   ],
   "adjectives": [
    "COMMUNICATIONS",
    "RECEIVE",
    "LEFT",
    "FIRST"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "C-MOVE": [
     "<TABLE ;\"OUT\" 0 ;\"IN\" 0 ;\"DOWN\" 0 ;\"UP\" 0 ;\"NW\" 0 ;\"WEST\" 0 ;\"SW\" 0 ;\"SOUTH\" 0 ;\"SE\" 0 ;\"EAST\" 0 ;\"NE\" 0 ;\"NORTH\" 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT RECEIVE-CONSOLE\n\t(LOC COMM-ROOM)\n\t(DESC \"communications receive console\")\n\t(C-MOVE  <TABLE\n         ;\"OUT\" 0 ;\"IN\"   0 ;\"DOWN\" 0  ;\"UP\"     0\n         ;\"NW\"  0 ;\"WEST\" 0 ;\"SW\"   0  ;\"SOUTH\"  0 \n\t ;\"SE\"  0 ;\"EAST\" 0 ;\"NE\"   0  ;\"NORTH\"  0>)\n\t(SYNONYM CONSOLE CONTROL)\n\t(ADJECTIVE COMMUNICATIONS RECEIVE LEFT FIRST)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "PLAYBACK-BUTTON": {
   "name": "PLAYBACK-BUTTON",
   "file": "compone.zil",
   "line": 2909,
   "endLine": 2915,
   "desc": "glowing button",
   "ldesc": null,
   "fdesc": null,
   "loc": "COMM-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "GLOWING",
    "PLAYBACK"
   ],
   "action": "PLAYBACK-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PLAYBACK-BUTTON\n\t(LOC COMM-ROOM)\n\t(DESC \"glowing button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE GLOWING PLAYBACK)\n\t(FLAGS NDESCBIT)\n\t(ACTION PLAYBACK-BUTTON-F)>",
   "referencedBy": []
  },
  "SEND-CONSOLE": {
   "name": "SEND-CONSOLE",
   "file": "compone.zil",
   "line": 2927,
   "endLine": 2932,
   "desc": "communication send console",
   "ldesc": null,
   "fdesc": null,
   "loc": "COMM-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "CONSOLE",
    "CONTROL"
   ],
   "adjectives": [
    "COMMUNICATIONS",
    "SEND",
    "RIGHT",
    "SECOND"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SEND-CONSOLE\n\t(LOC COMM-ROOM)\n\t(DESC \"communication send console\")\n\t(SYNONYM CONSOLE CONTROL)\n\t(ADJECTIVE COMMUNICATIONS SEND RIGHT SECOND)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "COMM-SCREEN": {
   "name": "COMM-SCREEN",
   "file": "compone.zil",
   "line": 2934,
   "endLine": 2942,
   "desc": "screen",
   "ldesc": null,
   "fdesc": null,
   "loc": "COMM-ROOM",
   "flags": [
    "NDESCBIT",
    "READBIT"
   ],
   "synonyms": [
    "COMMUNICATIONS",
    "MESSAGE",
    "SCREEN"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "\"Tuu enee ship uv xe Sekund Galaktik Yuunyun: Planitwiid plaag haz struk\nentiir popyuulaashun. Tiim iz kritikul. Eemurjensee asistins reekwestid.\n<reepeet mesij>\""
    ]
   },
   "contents": [],
   "source": "<OBJECT COMM-SCREEN\n\t(LOC COMM-ROOM)\n\t(DESC \"screen\")\n\t(SYNONYM COMMUNICATIONS MESSAGE SCREEN)\n\t(FLAGS NDESCBIT READBIT)\n\t(TEXT\n\"\\\"Tuu enee ship uv xe Sekund Galaktik Yuunyun: Planitwiid plaag haz struk\nentiir popyuulaashun. Tiim iz kritikul. Eemurjensee asistins reekwestid.\n<reepeet mesij>\\\"\")>",
   "referencedBy": []
  },
  "FUNNEL-HOLE": {
   "name": "FUNNEL-HOLE",
   "file": "compone.zil",
   "line": 2944,
   "endLine": 2949,
   "desc": "funnel-shaped hole",
   "ldesc": null,
   "fdesc": null,
   "loc": "COMM-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "HOLE"
   ],
   "adjectives": [
    "FUNNEL",
    "SHAPED",
    "FUNNEL-SHAPED"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FUNNEL-HOLE\n\t(LOC COMM-ROOM)\n\t(DESC \"funnel-shaped hole\")\n\t(SYNONYM HOLE)\n\t(ADJECTIVE FUNNEL SHAPED FUNNEL-SHAPED)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "HIGH-PROTEIN-F",
    "FLASK-F",
    "CHEMICAL-FLUID-F",
    "MEDICINE-F"
   ]
  },
  "CHEMICAL-FLUID": {
   "name": "CHEMICAL-FLUID",
   "file": "compone.zil",
   "line": 2951,
   "endLine": 2955,
   "desc": "quantity of chemical fluid",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [
    "QUANTITY",
    "LIQUID",
    "FLUID",
    "CHEMICAL"
   ],
   "adjectives": [
    "MILKY",
    "WHITE",
    "CHEMICAL"
   ],
   "action": "CHEMICAL-FLUID-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CHEMICAL-FLUID\n\t(DESC \"quantity of chemical fluid\")\n\t(SYNONYM QUANTITY LIQUID FLUID CHEMICAL)\n\t(ADJECTIVE MILKY WHITE CHEMICAL)\n\t(ACTION CHEMICAL-FLUID-F)>",
   "referencedBy": [
    "HIGH-PROTEIN-F",
    "FLASK-F",
    "CHEM-BUTTON-F",
    "CHEMICAL-FLUID-F",
    "MEDICINE-F",
    "WAKING-UP",
    "ITAKE",
    "V-SHAKE",
    "V-EMPTY",
    "V-TASTE"
   ]
  },
  "LAZARUS-PART": {
   "name": "LAZARUS-PART",
   "file": "comptwo.zil",
   "line": 104,
   "endLine": 109,
   "desc": "medical robot breastplate",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "LAZARUS",
    "PART",
    "PLATE",
    "BREASTPLATE"
   ],
   "adjectives": [
    "MEDICAL",
    "BREAST"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "35"
    ]
   },
   "contents": [],
   "source": "<OBJECT LAZARUS-PART\n\t(DESC \"medical robot breastplate\")\n\t(SYNONYM LAZARUS PART PLATE BREASTPLATE)\n\t(ADJECTIVE MEDICAL BREAST)\n\t(SIZE 35)\n\t(FLAGS TAKEBIT)>",
   "referencedBy": [
    "FLOYD-F",
    "I-FLOYD",
    "INFIRMARY-F"
   ]
  },
  "RED-SPOOL": {
   "name": "RED-SPOOL",
   "file": "comptwo.zil",
   "line": 133,
   "endLine": 144,
   "desc": "red spool",
   "ldesc": null,
   "fdesc": "Lying on one of the beds is a small red spool.",
   "loc": "INFIRMARY",
   "flags": [
    "TAKEBIT",
    "ACIDBIT",
    "READBIT"
   ],
   "synonyms": [
    "SPOOL",
    "SPOOLS",
    "OBJECT"
   ],
   "adjectives": [
    "RED",
    "SMALL"
   ],
   "action": "RED-SPOOL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ],
    "TEXT": [
     "The spool is labelled \"Simptumz uv Xe Dizeez.\""
    ]
   },
   "contents": [],
   "source": "<OBJECT RED-SPOOL\n\t(LOC INFIRMARY)\n\t(DESC \"red spool\")\n\t(FDESC\n\"Lying on one of the beds is a small red spool.\")\n\t(SYNONYM SPOOL SPOOLS OBJECT)\n\t(ADJECTIVE RED SMALL)\n\t(SIZE 3)\n\t(TEXT\n\"The spool is labelled \\\"Simptumz uv Xe Dizeez.\\\"\")\n\t(FLAGS TAKEBIT ACIDBIT READBIT)\n\t(ACTION RED-SPOOL-F)>",
   "referencedBy": [
    "RED-SPOOL-F",
    "SPOOL-READER-F"
   ]
  },
  "MEDICINE-BOTTLE": {
   "name": "MEDICINE-BOTTLE",
   "file": "comptwo.zil",
   "line": 154,
   "endLine": 165,
   "desc": "medicine bottle",
   "ldesc": null,
   "fdesc": "On a low shelf is a translucent bottle with a small white label.",
   "loc": "INFIRMARY",
   "flags": [
    "CONTBIT",
    "SEARCHBIT",
    "TAKEBIT",
    "TRANSBIT",
    "READBIT"
   ],
   "synonyms": [
    "BOTTLE",
    "LABEL"
   ],
   "adjectives": [
    "MEDICINE",
    "SMALL",
    "WHITE",
    "TRANSLUCENT"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "7"
    ],
    "CAPACITY": [
     "7"
    ],
    "TEXT": [
     "\"Dizeez supreshun medisin -- eksperimentul\""
    ]
   },
   "contents": [
    "MEDICINE"
   ],
   "source": "<OBJECT MEDICINE-BOTTLE\n\t(LOC INFIRMARY)\n\t(DESC \"medicine bottle\")\n\t(FDESC\n\"On a low shelf is a translucent bottle with a small white label.\")\n\t(SYNONYM BOTTLE LABEL)\n\t(ADJECTIVE MEDICINE SMALL WHITE TRANSLUCENT)\n\t(SIZE 7)\n\t(CAPACITY 7)\n\t(TEXT\n\"\\\"Dizeez supreshun medisin -- eksperimentul\\\"\")\n\t(FLAGS CONTBIT SEARCHBIT TAKEBIT TRANSBIT READBIT)>",
   "referencedBy": [
    "MEDICINE-F"
   ]
  },
  "MEDICINE": {
   "name": "MEDICINE",
   "file": "comptwo.zil",
   "line": 167,
   "endLine": 175,
   "desc": "quantity of medicine",
   "ldesc": null,
   "fdesc": "At the bottom of the bottle is a small quantity of medicine.",
   "loc": "MEDICINE-BOTTLE",
   "flags": [
    "FOODBIT"
   ],
   "synonyms": [
    "MEDICINE",
    "QUANTITY"
   ],
   "adjectives": [
    "SMALL",
    "QUANTITY",
    "EXPERIMENTAL"
   ],
   "action": "MEDICINE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "7"
    ]
   },
   "contents": [],
   "source": "<OBJECT MEDICINE\n\t(LOC MEDICINE-BOTTLE)\n\t(DESC \"quantity of medicine\")\n\t(FDESC \"At the bottom of the bottle is a small quantity of medicine.\")\n\t(SYNONYM MEDICINE QUANTITY)\n\t(ADJECTIVE SMALL QUANTITY EXPERIMENTAL)\n\t(SIZE 7)\n\t(FLAGS FOODBIT)\n\t(ACTION MEDICINE-F)>",
   "referencedBy": [
    "CHEMICAL-FLUID-F",
    "MEDICINE-F"
   ]
  },
  "ACHILLES": {
   "name": "ACHILLES",
   "file": "comptwo.zil",
   "line": 234,
   "endLine": 241,
   "desc": "broken robot",
   "ldesc": "Lying face down at the bottom of the stairs is a motionless robot. It\nappears to be damaged beyond repair.",
   "fdesc": null,
   "loc": "REPAIR-ROOM",
   "flags": [],
   "synonyms": [
    "ROBOT",
    "ACHILLES"
   ],
   "adjectives": [
    "BROKEN",
    "DEAD"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ACHILLES\n\t(LOC REPAIR-ROOM)\n\t(DESC \"broken robot\")\n\t(LDESC\n\"Lying face down at the bottom of the stairs is a motionless robot. It\nappears to be damaged beyond repair.\")\n\t(SYNONYM ROBOT ACHILLES)\n\t(ADJECTIVE BROKEN DEAD)>",
   "referencedBy": []
  },
  "ROBOT-HOLE": {
   "name": "ROBOT-HOLE",
   "file": "comptwo.zil",
   "line": 243,
   "endLine": 250,
   "desc": "small doorway",
   "ldesc": null,
   "fdesc": null,
   "loc": "REPAIR-ROOM",
   "flags": [
    "NDESCBIT",
    "TRANSBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "DOOR",
    "DOORWAY",
    "HOLE"
   ],
   "adjectives": [
    "SMALL",
    "VERY"
   ],
   "action": "ROBOT-HOLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "0"
    ]
   },
   "contents": [
    "GOOD-BOARD"
   ],
   "source": "<OBJECT ROBOT-HOLE\n\t(LOC REPAIR-ROOM)\n\t(DESC \"small doorway\")\n\t(SYNONYM DOOR DOORWAY HOLE)\n\t(ADJECTIVE SMALL VERY)\n\t(FLAGS NDESCBIT TRANSBIT CONTBIT)\n\t(CAPACITY 0)\n\t(ACTION ROBOT-HOLE-F)>",
   "referencedBy": [
    "FLOYD-F",
    "FLOYDS-FAMOUS-DOOR-ROUTINE"
   ]
  },
  "GOOD-BOARD": {
   "name": "GOOD-BOARD",
   "file": "comptwo.zil",
   "line": 282,
   "endLine": 289,
   "desc": "shiny seventeen-centimeter fromitz board",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROBOT-HOLE",
   "flags": [
    "ACIDBIT",
    "INVISIBLE",
    "NDESCBIT"
   ],
   "synonyms": [
    "BOARD",
    "BOARDS"
   ],
   "adjectives": [
    "SHINY",
    "GOOD",
    "SEVENTEEN",
    "CENTIMETER",
    "FROMITZ"
   ],
   "action": "GOOD-BOARD-F",
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
   "source": "<OBJECT GOOD-BOARD\n\t(LOC ROBOT-HOLE)\n\t(DESC \"shiny seventeen-centimeter fromitz board\")\n\t(SYNONYM BOARD BOARDS)\n\t(ADJECTIVE SHINY GOOD SEVENTEEN CENTIMETER FROMITZ)\n\t(SIZE 10)\n\t(FLAGS ACIDBIT INVISIBLE NDESCBIT)\n\t(ACTION GOOD-BOARD-F)>",
   "referencedBy": [
    "FLOYD-F",
    "FLOYD-THROUGH-HOLE",
    "GOOD-BOARD-F",
    "ACCESS-PANEL-F",
    "PRE-TAKE"
   ]
  },
  "ACCESS-PANEL": {
   "name": "ACCESS-PANEL",
   "file": "comptwo.zil",
   "line": 404,
   "endLine": 411,
   "desc": "access panel",
   "ldesc": null,
   "fdesc": null,
   "loc": "PLANETARY-DEFENSE",
   "flags": [
    "VOWELBIT",
    "NDESCBIT",
    "CONTBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "PANEL",
    "DOOR",
    "SOCKET"
   ],
   "adjectives": [
    "SMALL",
    "ACCESS",
    "REPAIR"
   ],
   "action": "ACCESS-PANEL-F",
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
    "FIRST-BOARD",
    "FOURTH-BOARD",
    "THIRD-BOARD",
    "SECOND-BOARD"
   ],
   "source": "<OBJECT ACCESS-PANEL\n\t(LOC PLANETARY-DEFENSE)\n\t(DESC \"access panel\")\n\t(SYNONYM PANEL DOOR SOCKET)\n\t(ADJECTIVE SMALL ACCESS REPAIR)\n\t(FLAGS VOWELBIT NDESCBIT CONTBIT SEARCHBIT)\n\t(CAPACITY 40)\n\t(ACTION ACCESS-PANEL-F)>",
   "referencedBy": [
    "PLANETARY-DEFENSE-F",
    "ACCESS-PANEL-F"
   ]
  },
  "FIRST-BOARD": {
   "name": "FIRST-BOARD",
   "file": "comptwo.zil",
   "line": 455,
   "endLine": 460,
   "desc": "first seventeen-centimeter fromitz board",
   "ldesc": null,
   "fdesc": null,
   "loc": "ACCESS-PANEL",
   "flags": [],
   "synonyms": [
    "BOARD",
    "BOARDS"
   ],
   "adjectives": [
    "FIRST",
    "SEVENTEEN",
    "CENTIMETER",
    "FROMITZ"
   ],
   "action": "BOARD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FIRST-BOARD\n\t(LOC ACCESS-PANEL)\n\t(DESC \"first seventeen-centimeter fromitz board\")\n\t(SYNONYM BOARD BOARDS)\n\t(ADJECTIVE FIRST SEVENTEEN CENTIMETER FROMITZ)\n\t(ACTION BOARD-F)>",
   "referencedBy": []
  },
  "FOURTH-BOARD": {
   "name": "FOURTH-BOARD",
   "file": "comptwo.zil",
   "line": 462,
   "endLine": 467,
   "desc": "fourth seventeen-centimeter fromitz board",
   "ldesc": null,
   "fdesc": null,
   "loc": "ACCESS-PANEL",
   "flags": [],
   "synonyms": [
    "BOARD",
    "BOARDS"
   ],
   "adjectives": [
    "FOURTH",
    "SEVENTEEN",
    "CENTIMETER",
    "FROMITZ"
   ],
   "action": "BOARD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FOURTH-BOARD\n\t(LOC ACCESS-PANEL)\n\t(DESC \"fourth seventeen-centimeter fromitz board\")\n\t(SYNONYM BOARD BOARDS)\n\t(ADJECTIVE FOURTH SEVENTEEN CENTIMETER FROMITZ)\n\t(ACTION BOARD-F)>",
   "referencedBy": []
  },
  "THIRD-BOARD": {
   "name": "THIRD-BOARD",
   "file": "comptwo.zil",
   "line": 469,
   "endLine": 474,
   "desc": "third seventeen-centimeter fromitz board",
   "ldesc": null,
   "fdesc": null,
   "loc": "ACCESS-PANEL",
   "flags": [],
   "synonyms": [
    "BOARD",
    "BOARDS"
   ],
   "adjectives": [
    "THIRD",
    "SEVENTEEN",
    "CENTIMETER",
    "FROMITZ"
   ],
   "action": "BOARD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT THIRD-BOARD\n\t(LOC ACCESS-PANEL)\n\t(DESC \"third seventeen-centimeter fromitz board\")\n\t(SYNONYM BOARD BOARDS)\n\t(ADJECTIVE THIRD SEVENTEEN CENTIMETER FROMITZ)\n\t(ACTION BOARD-F)>",
   "referencedBy": []
  },
  "SECOND-BOARD": {
   "name": "SECOND-BOARD",
   "file": "comptwo.zil",
   "line": 476,
   "endLine": 482,
   "desc": "second seventeen-centimeter fromitz board",
   "ldesc": null,
   "fdesc": null,
   "loc": "ACCESS-PANEL",
   "flags": [
    "TRYTAKEBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "BOARD",
    "BOARDS"
   ],
   "adjectives": [
    "SECOND",
    "SEVENTEEN",
    "CENTIMETER",
    "FROMITZ"
   ],
   "action": "BOARD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SECOND-BOARD\n\t(LOC ACCESS-PANEL)\n\t(DESC \"second seventeen-centimeter fromitz board\")\n\t(SYNONYM BOARD BOARDS)\n\t(ADJECTIVE SECOND SEVENTEEN CENTIMETER FROMITZ)\n\t(FLAGS TRYTAKEBIT TAKEBIT)\n\t(ACTION BOARD-F)>",
   "referencedBy": [
    "ACCESS-PANEL-F",
    "BOARD-F"
   ]
  },
  "FRIED-BOARD": {
   "name": "FRIED-BOARD",
   "file": "comptwo.zil",
   "line": 484,
   "endLine": 490,
   "desc": "fried seventeen-centimeter fromitz board",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "ACIDBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "BOARD",
    "BOARDS"
   ],
   "adjectives": [
    "FRIED",
    "SEVENTEEN",
    "CENTIMETER",
    "FROMITZ"
   ],
   "action": "FRIED-BOARD-F",
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
   "source": "<OBJECT FRIED-BOARD\n\t(DESC \"fried seventeen-centimeter fromitz board\")\n\t(SYNONYM BOARD BOARDS)\n\t(ADJECTIVE FRIED SEVENTEEN CENTIMETER FROMITZ)\n\t(SIZE 10)\n\t(FLAGS ACIDBIT TAKEBIT)\n\t(ACTION FRIED-BOARD-F)>",
   "referencedBy": [
    "ACCESS-PANEL-F",
    "BOARD-F"
   ]
  },
  "CUBE": {
   "name": "CUBE",
   "file": "comptwo.zil",
   "line": 566,
   "endLine": 572,
   "desc": "large metal cube",
   "ldesc": null,
   "fdesc": null,
   "loc": "PLANETARY-COURSE-CONTROL",
   "flags": [
    "MUNGBIT",
    "NDESCBIT",
    "CONTBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "CUBE",
    "LID",
    "SOCKET"
   ],
   "adjectives": [
    "LARGE",
    "METAL"
   ],
   "action": "CUBE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "BAD-BEDISTOR"
   ],
   "source": "<OBJECT CUBE\n\t(LOC PLANETARY-COURSE-CONTROL)\n\t(DESC \"large metal cube\")\n\t(SYNONYM CUBE LID SOCKET)\n\t(ADJECTIVE LARGE METAL)\n\t(FLAGS MUNGBIT NDESCBIT CONTBIT SEARCHBIT)\n\t(ACTION CUBE-F)>",
   "referencedBy": [
    "CHEMICAL-FLUID-F",
    "PLANETARY-COURSE-CONTROL-F",
    "CUBE-F",
    "BAD-BEDISTOR-F"
   ]
  },
  "BAD-BEDISTOR": {
   "name": "BAD-BEDISTOR",
   "file": "comptwo.zil",
   "line": 611,
   "endLine": 618,
   "desc": "fused ninety-ohm bedistor",
   "ldesc": null,
   "fdesc": null,
   "loc": "CUBE",
   "flags": [
    "ACIDBIT",
    "TRYTAKEBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "BEDISTOR"
   ],
   "adjectives": [
    "FUSED",
    "NINETY",
    "OHM",
    "NINETY-OHM"
   ],
   "action": "BAD-BEDISTOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "8"
    ]
   },
   "contents": [],
   "source": "<OBJECT BAD-BEDISTOR\n\t(LOC CUBE)\n\t(DESC \"fused ninety-ohm bedistor\")\n\t(SYNONYM BEDISTOR)\n\t(ADJECTIVE FUSED NINETY OHM NINETY-OHM)\n\t(SIZE 8)\n\t(FLAGS ACIDBIT TRYTAKEBIT TAKEBIT)\n\t(ACTION BAD-BEDISTOR-F)>",
   "referencedBy": [
    "CHEMICAL-FLUID-F",
    "CUBE-F",
    "BAD-BEDISTOR-F"
   ]
  },
  "GREEN-SPOOL": {
   "name": "GREEN-SPOOL",
   "file": "comptwo.zil",
   "line": 659,
   "endLine": 670,
   "desc": "green spool",
   "ldesc": null,
   "fdesc": "You catch a glimpse of a small object nestled among the dust.",
   "loc": "LIBRARY-LOBBY",
   "flags": [
    "ACIDBIT",
    "TAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "SPOOL",
    "SPOOLS",
    "OBJECT"
   ],
   "adjectives": [
    "GREEN",
    "SMALL"
   ],
   "action": "GREEN-SPOOL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ],
    "TEXT": [
     "The spool is labelled \"Helikoptur Opuraateeng Manyuuwul.\""
    ]
   },
   "contents": [],
   "source": "<OBJECT GREEN-SPOOL\n\t(LOC LIBRARY-LOBBY)\n\t(DESC \"green spool\")\n\t(FDESC\n\"You catch a glimpse of a small object nestled among the dust.\")\n\t(SYNONYM SPOOL SPOOLS OBJECT)\n\t(ADJECTIVE GREEN SMALL)\n\t(SIZE 3)\n\t(TEXT\n\"The spool is labelled \\\"Helikoptur Opuraateeng Manyuuwul.\\\"\")\n\t(FLAGS ACIDBIT TAKEBIT READBIT)\n\t(ACTION GREEN-SPOOL-F)>",
   "referencedBy": [
    "GREEN-SPOOL-F",
    "SPOOL-READER-F"
   ]
  },
  "TERMINAL": {
   "name": "TERMINAL",
   "file": "comptwo.zil",
   "line": 713,
   "endLine": 724,
   "desc": "terminal",
   "ldesc": "On the table is a computer terminal.",
   "fdesc": "Sitting on a wide table is a machine of sorts, consisting of a video\nscreen and a keyboard. It is currently turned off.",
   "loc": "LIBRARY-LOBBY",
   "flags": [
    "LIGHTBIT"
   ],
   "synonyms": [
    "TERMINAL",
    "KEYBOARD",
    "SCREEN",
    "MACHINE"
   ],
   "adjectives": [
    "COMPUTER",
    "VIDEO"
   ],
   "action": "TERMINAL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TERMINAL\n\t(LOC LIBRARY-LOBBY)\n\t(DESC \"terminal\")\n\t(FDESC\n\"Sitting on a wide table is a machine of sorts, consisting of a video\nscreen and a keyboard. It is currently turned off.\")\n\t(LDESC\n\"On the table is a computer terminal.\")\n\t(SYNONYM TERMINAL KEYBOARD SCREEN MACHINE)\n\t(ADJECTIVE COMPUTER VIDEO)\n\t(FLAGS LIGHTBIT)\n\t(ACTION TERMINAL-F)>",
   "referencedBy": [
    "TERMINAL-F"
   ]
  },
  "SPOOL-READER": {
   "name": "SPOOL-READER",
   "file": "comptwo.zil",
   "line": 1207,
   "endLine": 1219,
   "desc": "microfilm reader",
   "ldesc": "There is a microfilm reader on one of the tables.",
   "fdesc": "On the desk is a machine with a screen and a small circular opening. It\nseems to be turned off.",
   "loc": "LIBRARY",
   "flags": [
    "LIGHTBIT",
    "CONTBIT",
    "SEARCHBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "READER",
    "SCREEN",
    "OPENING",
    "MACHINE"
   ],
   "adjectives": [
    "MICROFILM",
    "SMALL",
    "CIRCULAR"
   ],
   "action": "SPOOL-READER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "3"
    ]
   },
   "contents": [],
   "source": "<OBJECT SPOOL-READER\n\t(LOC LIBRARY)\n\t(DESC \"microfilm reader\")\n\t(FDESC\n\"On the desk is a machine with a screen and a small circular opening. It\nseems to be turned off.\")\n\t(LDESC\n\"There is a microfilm reader on one of the tables.\")\n\t(SYNONYM READER SCREEN OPENING MACHINE) \n\t(ADJECTIVE MICROFILM SMALL CIRCULAR)\n\t(CAPACITY 3)\n\t(FLAGS LIGHTBIT CONTBIT SEARCHBIT OPENBIT)\n\t(ACTION SPOOL-READER-F)>",
   "referencedBy": [
    "RED-SPOOL-F",
    "GREEN-SPOOL-F",
    "SPOOL-READER-F",
    "V-INSERT"
   ]
  },
  "CRYO-ELEVATOR-DOOR": {
   "name": "CRYO-ELEVATOR-DOOR",
   "file": "comptwo.zil",
   "line": 1389,
   "endLine": 1394,
   "desc": "cryo-elevator door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "CRYO-ELEVATOR",
    "ELEVATOR"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CRYO-ELEVATOR-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"cryo-elevator door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE CRYO-ELEVATOR ELEVATOR)\n\t(FLAGS NDESCBIT INVISIBLE)>",
   "referencedBy": [
    "CRYO-ELEVATOR-F",
    "CRYO-EXIT-F",
    "I-CRYO-ELEVATOR-ARRIVE",
    "SHOOT-SPECK",
    "CRYO-BUTTON-PSEUDO"
   ]
  },
  "PRINT-OUT": {
   "name": "PRINT-OUT",
   "file": "comptwo.zil",
   "line": 1586,
   "endLine": 1593,
   "desc": "pile of computer output",
   "ldesc": null,
   "fdesc": null,
   "loc": "COMPUTER-ROOM",
   "flags": [
    "ACIDBIT",
    "TAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "PILE",
    "PAPER",
    "OUTPUT",
    "PRINTOUT"
   ],
   "adjectives": [
    "COMPUTER"
   ],
   "action": "PRINT-OUT-F",
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
   "source": "<OBJECT PRINT-OUT\n\t(LOC COMPUTER-ROOM)\n\t(DESC \"pile of computer output\")\n\t(SYNONYM PILE PAPER OUTPUT PRINTOUT)\n\t(ADJECTIVE COMPUTER)\n\t(SIZE 20)\n\t(FLAGS ACIDBIT TAKEBIT READBIT)\n\t(ACTION PRINT-OUT-F)>",
   "referencedBy": [
    "FLOYD-F",
    "LASER-F"
   ]
  },
  "MINI-CARD": {
   "name": "MINI-CARD",
   "file": "comptwo.zil",
   "line": 1634,
   "endLine": 1643,
   "desc": "miniaturization access card",
   "ldesc": null,
   "fdesc": null,
   "loc": "BIO-LOCK-EAST",
   "flags": [
    "TAKEBIT",
    "NDESCBIT",
    "INVISIBLE",
    "READBIT"
   ],
   "synonyms": [
    "CARD",
    "CARDS"
   ],
   "adjectives": [
    "MINIATURIZATION",
    "MINI",
    "ACCESS"
   ],
   "action": "MINI-CARD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ],
    "VALUE": [
     "1"
    ],
    "TEXT": [
     "The card is embossed \"minitcurizaashun akses kard.\""
    ]
   },
   "contents": [],
   "source": "<OBJECT MINI-CARD\n\t(LOC BIO-LOCK-EAST)\n\t(DESC \"miniaturization access card\")\n\t(SYNONYM CARD CARDS)\n\t(ADJECTIVE MINIATURIZATION MINI ACCESS)\n\t(SIZE 3)\n\t(FLAGS TAKEBIT NDESCBIT INVISIBLE READBIT)\n\t(VALUE 1)\n\t(TEXT \"The card is embossed \\\"minitcurizaashun akses kard.\\\"\")\n\t(ACTION MINI-CARD-F)>",
   "referencedBy": [
    "I-MAGNET",
    "MINI-CARD-F",
    "BIO-LOCK-EAST-F",
    "I-FLOYD-FORAY",
    "LASER-F",
    "WINDOW-F",
    "SLOT-F"
   ]
  },
  "LAB-UNIFORM": {
   "name": "LAB-UNIFORM",
   "file": "comptwo.zil",
   "line": 1685,
   "endLine": 1696,
   "desc": "lab uniform",
   "ldesc": null,
   "fdesc": "Hanging on a rack is a pale blue lab uniform. Sewn onto its pocket is a\nnondescript logo.",
   "loc": "LAB-STORAGE",
   "flags": [
    "TAKEBIT",
    "CONTBIT",
    "SEARCHBIT",
    "WEARBIT"
   ],
   "synonyms": [
    "UNIFORM",
    "SUIT",
    "POCKET",
    "LOGO"
   ],
   "adjectives": [
    "PALE",
    "BLUE",
    "LAB"
   ],
   "action": "LAB-UNIFORM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "10"
    ],
    "CAPACITY": [
     "5"
    ]
   },
   "contents": [
    "TELEPORTATION-CARD",
    "COMBINATION-PAPER"
   ],
   "source": "<OBJECT LAB-UNIFORM\n\t(LOC LAB-STORAGE)\n\t(DESC \"lab uniform\")\n\t(FDESC\n\"Hanging on a rack is a pale blue lab uniform. Sewn onto its pocket is a\nnondescript logo.\")\n\t(SYNONYM UNIFORM SUIT POCKET LOGO)\n\t(ADJECTIVE PALE BLUE LAB)\n\t(SIZE 10)\n\t(CAPACITY 5)\n\t(FLAGS TAKEBIT CONTBIT SEARCHBIT WEARBIT)\n\t(ACTION LAB-UNIFORM-F)>",
   "referencedBy": [
    "LAB-UNIFORM-F",
    "LASER-F",
    "PATROL-UNIFORM-F"
   ]
  },
  "TELEPORTATION-CARD": {
   "name": "TELEPORTATION-CARD",
   "file": "comptwo.zil",
   "line": 1730,
   "endLine": 1737,
   "desc": "teleportation access card",
   "ldesc": null,
   "fdesc": null,
   "loc": "LAB-UNIFORM",
   "flags": [
    "TAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "CARD",
    "CARDS"
   ],
   "adjectives": [
    "TELEPORT",
    "TELEPORTATION",
    "ACCESS"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ],
    "TEXT": [
     "The card is embossed \"teliportaashun akses kard.\""
    ]
   },
   "contents": [],
   "source": "<OBJECT TELEPORTATION-CARD\n\t(LOC LAB-UNIFORM)\n\t(DESC \"teleportation access card\")\n\t(SYNONYM CARD CARDS)\n\t(ADJECTIVE TELEPORT TELEPORTATION ACCESS)\n\t(SIZE 3)\n\t(FLAGS TAKEBIT READBIT)\n\t(TEXT \"The card is embossed \\\"teliportaashun akses kard.\\\"\")>",
   "referencedBy": [
    "I-MAGNET",
    "LASER-F",
    "SLOT-F"
   ]
  },
  "COMBINATION-PAPER": {
   "name": "COMBINATION-PAPER",
   "file": "comptwo.zil",
   "line": 1747,
   "endLine": 1753,
   "desc": "piece of paper",
   "ldesc": null,
   "fdesc": null,
   "loc": "LAB-UNIFORM",
   "flags": [
    "ACIDBIT",
    "TAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "PIECE",
    "PAPER"
   ],
   "adjectives": [],
   "action": "COMBINATION-PAPER-F",
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
   "source": "<OBJECT COMBINATION-PAPER\n\t(LOC LAB-UNIFORM)\n\t(DESC \"piece of paper\")\n\t(SYNONYM PIECE PAPER)\n\t(FLAGS ACIDBIT TAKEBIT READBIT)\n\t(SIZE 2)\n\t(ACTION COMBINATION-PAPER-F)>",
   "referencedBy": [
    "LASER-F"
   ]
  },
  "BIO-DOOR-EAST": {
   "name": "BIO-DOOR-EAST",
   "file": "comptwo.zil",
   "line": 1879,
   "endLine": 1885,
   "desc": "lab door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "LAB"
   ],
   "action": "BIO-DOOR-EAST-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BIO-DOOR-EAST\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"lab door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE LAB)\n\t(FLAGS DOORBIT NDESCBIT)\n\t(ACTION BIO-DOOR-EAST-F)>",
   "referencedBy": [
    "FLOYDS-FAMOUS-DOOR-ROUTINE",
    "BIO-DOOR-EAST-F",
    "I-BIO-EAST-CLOSES",
    "BIO-DOOR-WEST-F",
    "I-FLOYD-FORAY"
   ]
  },
  "BIO-DOOR-WEST": {
   "name": "BIO-DOOR-WEST",
   "file": "comptwo.zil",
   "line": 1887,
   "endLine": 1893,
   "desc": "bio-lock door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "BIO-LOCK"
   ],
   "action": "BIO-DOOR-WEST-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BIO-DOOR-WEST\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"bio-lock door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE BIO-LOCK)\n\t(FLAGS DOORBIT NDESCBIT)\n\t(ACTION BIO-DOOR-WEST-F)>",
   "referencedBy": [
    "BIO-DOOR-EAST-F",
    "BIO-DOOR-WEST-F",
    "I-BIO-WEST-CLOSES"
   ]
  },
  "RAD-DOOR-EAST": {
   "name": "RAD-DOOR-EAST",
   "file": "comptwo.zil",
   "line": 1895,
   "endLine": 1901,
   "desc": "lab door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "LAB"
   ],
   "action": "RAD-DOOR-EAST-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RAD-DOOR-EAST\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"lab door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE LAB)\n\t(FLAGS DOORBIT NDESCBIT)\n        (ACTION RAD-DOOR-EAST-F)>",
   "referencedBy": [
    "RAD-DOOR-EAST-F",
    "RAD-DOOR-WEST-F"
   ]
  },
  "RAD-DOOR-WEST": {
   "name": "RAD-DOOR-WEST",
   "file": "comptwo.zil",
   "line": 1903,
   "endLine": 1909,
   "desc": "radiation-lock door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "RADIATION"
   ],
   "action": "RAD-DOOR-WEST-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RAD-DOOR-WEST\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"radiation-lock door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE RADIATION)\n\t(FLAGS DOORBIT NDESCBIT)\n\t(ACTION RAD-DOOR-WEST-F)>",
   "referencedBy": [
    "RAD-DOOR-EAST-F",
    "RAD-DOOR-WEST-F"
   ]
  },
  "BROWN-SPOOL": {
   "name": "BROWN-SPOOL",
   "file": "comptwo.zil",
   "line": 2263,
   "endLine": 2273,
   "desc": "brown spool",
   "ldesc": null,
   "fdesc": "Sitting on a long table is a small brown spool.",
   "loc": "RADIATION-LAB",
   "flags": [
    "ACIDBIT",
    "TAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "SPOOL",
    "SPOOLS",
    "OBJECT"
   ],
   "adjectives": [
    "BROWN",
    "SMALL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ],
    "TEXT": [
     "The spool is labelled \"Instrukshunz foor Reepaareeng Reepaar Roobots.\""
    ]
   },
   "contents": [],
   "source": "<OBJECT BROWN-SPOOL\n\t(LOC RADIATION-LAB)\n\t(DESC \"brown spool\")\n\t(FDESC\n\"Sitting on a long table is a small brown spool.\")\n\t(SYNONYM SPOOL SPOOLS OBJECT)\n\t(ADJECTIVE BROWN SMALL)\n\t(SIZE 3)\n\t(TEXT\n\"The spool is labelled \\\"Instrukshunz foor Reepaareeng Reepaar Roobots.\\\"\")\n\t(FLAGS ACIDBIT TAKEBIT READBIT)>",
   "referencedBy": []
  },
  "LAMP": {
   "name": "LAMP",
   "file": "comptwo.zil",
   "line": 2275,
   "endLine": 2284,
   "desc": "portable lamp",
   "ldesc": null,
   "fdesc": "There is a powerful portable lamp here, currently off.",
   "loc": "RADIATION-LAB",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "LAMP",
    "LANTERN",
    "LIGHT"
   ],
   "adjectives": [
    "POWERFUL",
    "PORTABLE"
   ],
   "action": "LAMP-F",
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
   "source": "<OBJECT LAMP\n\t(LOC RADIATION-LAB)\n\t(DESC \"portable lamp\")\n\t(FDESC\n\"There is a powerful portable lamp here, currently off.\")\n\t(SYNONYM LAMP LANTERN LIGHT)\n\t(ADJECTIVE POWERFUL PORTABLE)\n\t(SIZE 20)\n\t(FLAGS TAKEBIT)\n\t(ACTION LAMP-F)>",
   "referencedBy": [
    "LAMP-F"
   ]
  },
  "OFFICE-DOOR": {
   "name": "OFFICE-DOOR",
   "file": "comptwo.zil",
   "line": 2344,
   "endLine": 2349,
   "desc": "office door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "VOWELBIT",
    "DOORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "OFFICE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT OFFICE-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"office door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE OFFICE)\n\t(FLAGS VOWELBIT DOORBIT NDESCBIT)>",
   "referencedBy": [
    "LAB-OFFICE-F",
    "I-UNFLOOD"
   ]
  },
  "LAB-DESK": {
   "name": "LAB-DESK",
   "file": "comptwo.zil",
   "line": 2351,
   "endLine": 2358,
   "desc": "desk",
   "ldesc": null,
   "fdesc": null,
   "loc": "LAB-OFFICE",
   "flags": [
    "CONTBIT",
    "SEARCHBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DESK"
   ],
   "adjectives": [
    "LARGE",
    "MESSY"
   ],
   "action": "LAB-DESK-F",
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
    "GAS-MASK"
   ],
   "source": "<OBJECT LAB-DESK\n\t(LOC LAB-OFFICE)\n\t(DESC \"desk\")\n\t(SYNONYM DESK)\n\t(ADJECTIVE LARGE MESSY)\n\t(FLAGS CONTBIT SEARCHBIT NDESCBIT)\n\t(CAPACITY 10)\n\t(ACTION LAB-DESK-F)>",
   "referencedBy": [
    "LAB-DESK-F"
   ]
  },
  "GAS-MASK": {
   "name": "GAS-MASK",
   "file": "comptwo.zil",
   "line": 2379,
   "endLine": 2385,
   "desc": "gas mask",
   "ldesc": null,
   "fdesc": null,
   "loc": "LAB-DESK",
   "flags": [
    "ACIDBIT",
    "TAKEBIT",
    "WEARBIT"
   ],
   "synonyms": [
    "MASK"
   ],
   "adjectives": [
    "GAS"
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
   "source": "<OBJECT GAS-MASK\n\t(LOC LAB-DESK)\n\t(DESC \"gas mask\")\n\t(SYNONYM MASK)\n\t(ADJECTIVE GAS)\n\t(FLAGS ACIDBIT TAKEBIT WEARBIT)\n\t(SIZE 10)>",
   "referencedBy": [
    "BIO-LAB-F",
    "LAB-DESK-F"
   ]
  },
  "MEMO": {
   "name": "MEMO",
   "file": "comptwo.zil",
   "line": 2387,
   "endLine": 2395,
   "desc": "memo",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "READBIT",
    "ACIDBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "MEMO"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "\"Memoo tuu awl lab pursunel: Duu tuu xe daanjuris naatshur uv xe biioo\neksperiments, an eemurjensee sistum haz bin instawld. Xis sistum wud flud\nxe entiir Biioo Lab wic aa dedlee fungasiid. Propur preecawshunz shud bee\ntaakin if xis sistum iz evur yuuzd.\""
    ]
   },
   "contents": [],
   "source": "<OBJECT MEMO\n\t(DESC \"memo\")\n\t(SYNONYM MEMO)\n\t(FLAGS READBIT ACIDBIT TAKEBIT)\n\t(TEXT\n\"\\\"Memoo tuu awl lab pursunel: Duu tuu xe daanjuris naatshur uv xe biioo\neksperiments, an eemurjensee sistum haz bin instawld. Xis sistum wud flud\nxe entiir Biioo Lab wic aa dedlee fungasiid. Propur preecawshunz shud bee\ntaakin if xis sistum iz evur yuuzd.\\\"\")>",
   "referencedBy": [
    "LAB-DESK-F"
   ]
  },
  "LIGHT-BUTTON": {
   "name": "LIGHT-BUTTON",
   "file": "comptwo.zil",
   "line": 2397,
   "endLine": 2403,
   "desc": "white button",
   "ldesc": null,
   "fdesc": null,
   "loc": "LAB-OFFICE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "WHITE",
    "LIGHT"
   ],
   "action": "LIGHT-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LIGHT-BUTTON\n\t(LOC LAB-OFFICE)\n\t(DESC \"white button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE WHITE LIGHT)\n\t(FLAGS NDESCBIT)\n\t(ACTION LIGHT-BUTTON-F)>",
   "referencedBy": []
  },
  "DARK-BUTTON": {
   "name": "DARK-BUTTON",
   "file": "comptwo.zil",
   "line": 2405,
   "endLine": 2411,
   "desc": "black button",
   "ldesc": null,
   "fdesc": null,
   "loc": "LAB-OFFICE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "BLACK",
    "DARK",
    "DARKNESS"
   ],
   "action": "DARK-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DARK-BUTTON\n\t(LOC LAB-OFFICE)\n\t(DESC \"black button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE BLACK DARK DARKNESS)\n\t(FLAGS NDESCBIT)\n\t(ACTION DARK-BUTTON-F)>",
   "referencedBy": []
  },
  "FUNGICIDE-BUTTON": {
   "name": "FUNGICIDE-BUTTON",
   "file": "comptwo.zil",
   "line": 2413,
   "endLine": 2419,
   "desc": "red button",
   "ldesc": null,
   "fdesc": null,
   "loc": "LAB-OFFICE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "RED",
    "FUNGICIDE",
    "EMERGENCY"
   ],
   "action": "FUNGICIDE-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FUNGICIDE-BUTTON\n\t(LOC LAB-OFFICE)\n\t(DESC \"red button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE RED FUNGICIDE EMERGENCY)\n\t(FLAGS NDESCBIT)\n\t(ACTION FUNGICIDE-BUTTON-F)>",
   "referencedBy": []
  },
  "RELAY": {
   "name": "RELAY",
   "file": "comptwo.zil",
   "line": 2649,
   "endLine": 2655,
   "desc": "microrelay",
   "ldesc": null,
   "fdesc": null,
   "loc": "STRIP-NEAR-RELAY",
   "flags": [
    "NDESCBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "RELAY",
    "MICRORELAY"
   ],
   "adjectives": [
    "MICRO"
   ],
   "action": "RELAY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "SPECK"
   ],
   "source": "<OBJECT RELAY\n\t(LOC STRIP-NEAR-RELAY)\n\t(DESC \"microrelay\")\n\t(SYNONYM RELAY MICRORELAY)\n\t(ADJECTIVE MICRO)\n\t(FLAGS NDESCBIT TRANSBIT)\n\t(ACTION RELAY-F)>",
   "referencedBy": [
    "CHEMICAL-FLUID-F",
    "STRIP-NEAR-RELAY-F",
    "RELAY-EXIT-F",
    "SHOOT-SPECK"
   ]
  },
  "SPECK": {
   "name": "SPECK",
   "file": "comptwo.zil",
   "line": 2669,
   "endLine": 2674,
   "desc": "speck",
   "ldesc": null,
   "fdesc": null,
   "loc": "RELAY",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "SPECK",
    "BOULDER",
    "IMPURITY"
   ],
   "adjectives": [
    "BLUE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SPECK\n\t(LOC RELAY)\n\t(DESC \"speck\")\n\t(SYNONYM SPECK BOULDER IMPURITY)\n\t(ADJECTIVE BLUE)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "LASER-F",
    "SHOOT-SPECK"
   ]
  },
  "LASER": {
   "name": "LASER",
   "file": "comptwo.zil",
   "line": 2680,
   "endLine": 2691,
   "desc": "laser",
   "ldesc": null,
   "fdesc": "A small device, labelled \"Akmee Portabul Laazur\", is resting on one of\nthe lower shelves.",
   "loc": "TOOL-ROOM",
   "flags": [
    "MUNGBIT",
    "TAKEBIT",
    "OPENBIT",
    "TRANSBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "DEVICE",
    "LASER",
    "UNIT",
    "DEPRESSION"
   ],
   "adjectives": [
    "PORTABLE",
    "ACME"
   ],
   "action": "LASER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "25"
    ],
    "CAPACITY": [
     "5"
    ]
   },
   "contents": [
    "LASER-DIAL",
    "OLD-BATTERY"
   ],
   "source": "<OBJECT LASER\n\t(LOC TOOL-ROOM)\n\t(DESC \"laser\")\n\t(FDESC\n\"A small device, labelled \\\"Akmee Portabul Laazur\\\", is resting on one of\nthe lower shelves.\")\n\t(SYNONYM DEVICE LASER UNIT DEPRESSION)\n\t(ADJECTIVE PORTABLE ACME)\n\t(SIZE 25)\n\t(CAPACITY 5)\n\t(FLAGS MUNGBIT TAKEBIT OPENBIT TRANSBIT CONTBIT)\n\t(ACTION LASER-F)>",
   "referencedBy": [
    "RIFT-F",
    "ZAP-COUNT",
    "LASER-F",
    "MICROBE-F",
    "I-MICROBE",
    "STRIP-F",
    "CLIFF-F",
    "VOID-PSEUDO",
    "V-SHAKE",
    "PRE-ZAP",
    "V-ZAP"
   ]
  },
  "LASER-DIAL": {
   "name": "LASER-DIAL",
   "file": "comptwo.zil",
   "line": 2693,
   "endLine": 2699,
   "desc": "laser setting dial",
   "ldesc": null,
   "fdesc": null,
   "loc": "LASER",
   "flags": [
    "MUNGBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DIAL"
   ],
   "adjectives": [
    "LASER",
    "SETTING"
   ],
   "action": "LASER-DIAL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LASER-DIAL\n\t(LOC LASER)\n\t(DESC \"laser setting dial\")\n\t(SYNONYM DIAL)\n\t(ADJECTIVE LASER SETTING)\n\t(FLAGS MUNGBIT NDESCBIT)\n\t(ACTION LASER-DIAL-F)>",
   "referencedBy": [
    "LASER-DIAL-F",
    "LASER-F",
    "V-SET"
   ]
  },
  "OLD-BATTERY": {
   "name": "OLD-BATTERY",
   "file": "comptwo.zil",
   "line": 2718,
   "endLine": 2725,
   "desc": "old battery",
   "ldesc": "There is a worn-out laser battery here.",
   "fdesc": null,
   "loc": "LASER",
   "flags": [
    "VOWELBIT",
    "ACIDBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "BATTERY"
   ],
   "adjectives": [
    "LASER",
    "WORN-OUT",
    "OLD"
   ],
   "action": null,
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
   "source": "<OBJECT OLD-BATTERY\n\t(LOC LASER)\n\t(DESC \"old battery\")\n\t(LDESC \"There is a worn-out laser battery here.\")\n\t(SYNONYM BATTERY)\n\t(ADJECTIVE LASER WORN-OUT OLD)\n\t(SIZE 5)\n\t(FLAGS VOWELBIT ACIDBIT TAKEBIT)>",
   "referencedBy": [
    "ZAP-COUNT",
    "LASER-F",
    "V-SHAKE"
   ]
  },
  "NEW-BATTERY": {
   "name": "NEW-BATTERY",
   "file": "comptwo.zil",
   "line": 2727,
   "endLine": 2736,
   "desc": "new battery",
   "ldesc": null,
   "fdesc": "The odds and ends on the shelves include a small round object, which closer\ninspection reveals to be a fresh laser battery.",
   "loc": "LAB-STORAGE",
   "flags": [
    "ACIDBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "OBJECT",
    "BATTERY"
   ],
   "adjectives": [
    "LASER",
    "SMALL",
    "ROUND",
    "FRESH",
    "NEW"
   ],
   "action": null,
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
   "source": "<OBJECT NEW-BATTERY\n\t(LOC LAB-STORAGE)\n\t(DESC \"new battery\")\n\t(FDESC\n\"The odds and ends on the shelves include a small round object, which closer\ninspection reveals to be a fresh laser battery.\")\n\t(SYNONYM OBJECT BATTERY)\n\t(ADJECTIVE LASER SMALL ROUND FRESH NEW)\n\t(SIZE 5)\n\t(FLAGS ACIDBIT TAKEBIT)>",
   "referencedBy": [
    "ZAP-COUNT",
    "LASER-F",
    "V-SHAKE"
   ]
  },
  "MICROBE": {
   "name": "MICROBE",
   "file": "comptwo.zil",
   "line": 3014,
   "endLine": 3022,
   "desc": "microbe",
   "ldesc": "A hungry microbe blocks your way, its cilia waving and its pseudopods\ntowering over you.",
   "fdesc": null,
   "loc": null,
   "flags": [
    "ACTORBIT"
   ],
   "synonyms": [
    "MICROBE",
    "BUG",
    "MONSTER"
   ],
   "adjectives": [
    "HUNGRY"
   ],
   "action": "MICROBE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MICROBE\n\t(DESC \"microbe\")\n\t(LDESC \n\"A hungry microbe blocks your way, its cilia waving and its pseudopods\ntowering over you.\")\n\t(SYNONYM MICROBE BUG MONSTER)\n\t(ADJECTIVE HUNGRY)\n\t(FLAGS ACTORBIT)\n\t(ACTION MICROBE-F)>",
   "referencedBy": [
    "CHEMICAL-FLUID-F",
    "MIDDLE-OF-STRIP-F",
    "STRIP-NEAR-RELAY-F",
    "LASER-F",
    "MICROBE-F",
    "STRIP-F"
   ]
  },
  "STRIP": {
   "name": "STRIP",
   "file": "comptwo.zil",
   "line": 3128,
   "endLine": 3134,
   "desc": "silicon strip",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "STRIP",
    "SIDE",
    "EDGE"
   ],
   "adjectives": [
    "SILICON"
   ],
   "action": "STRIP-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT STRIP\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"silicon strip\")\n\t(SYNONYM STRIP SIDE EDGE)\n\t(ADJECTIVE SILICON)\n\t(FLAGS NDESCBIT)\n\t(ACTION STRIP-F)>",
   "referencedBy": [
    "CHEMICAL-FLUID-F",
    "VOID-PSEUDO"
   ]
  },
  "RAT-ANT": {
   "name": "RAT-ANT",
   "file": "comptwo.zil",
   "line": 3161,
   "endLine": 3168,
   "desc": "rat-like, ant-like man-sized monster",
   "ldesc": "A ferocious feral creature, with a hairy shelled body and\na whip-like tail snaps its enormous mandibles at you.",
   "fdesc": null,
   "loc": "BIO-LAB",
   "flags": [
    "ACTORBIT"
   ],
   "synonyms": [
    "MONSTER",
    "MUTANT",
    "RAT-ANT"
   ],
   "adjectives": [
    "RAT-LIKE",
    "ANT-LIKE",
    "MAN-SIZED"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RAT-ANT\n\t(LOC BIO-LAB)\n\t(DESC \"rat-like, ant-like man-sized monster\")\n\t(LDESC \"A ferocious feral creature, with a hairy shelled body and\na whip-like tail snaps its enormous mandibles at you.\")\n\t(SYNONYM MONSTER MUTANT RAT-ANT)\n\t(ADJECTIVE RAT-LIKE ANT-LIKE MAN-SIZED)\n\t(FLAGS ACTORBIT)>",
   "referencedBy": [
    "CHEMICAL-FLUID-F",
    "I-CHASE-SCENE"
   ]
  },
  "TROLL": {
   "name": "TROLL",
   "file": "comptwo.zil",
   "line": 3170,
   "endLine": 3178,
   "desc": "hairy growling biped",
   "ldesc": "Rushing toward you is an ugly, deformed humanoid, bellowing\nin a guttural tongue. It brandishes a piece of lab equipment shaped\nsomewhat like a battle axe.",
   "fdesc": null,
   "loc": "BIO-LAB",
   "flags": [
    "ACTORBIT"
   ],
   "synonyms": [
    "TROLL",
    "BIPED",
    "MUTANT",
    "MONSTER"
   ],
   "adjectives": [
    "HAIRY",
    "GROWLING",
    "UGLY",
    "DEFORMED"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TROLL\n\t(LOC BIO-LAB)\n\t(DESC \"hairy growling biped\")\n\t(LDESC \"Rushing toward you is an ugly, deformed humanoid, bellowing\nin a guttural tongue. It brandishes a piece of lab equipment shaped\nsomewhat like a battle axe.\")\n\t(SYNONYM TROLL BIPED MUTANT MONSTER)\n\t(ADJECTIVE HAIRY GROWLING UGLY DEFORMED)\n\t(FLAGS ACTORBIT)>",
   "referencedBy": [
    "CHEMICAL-FLUID-F",
    "I-CHASE-SCENE"
   ]
  },
  "GRUE": {
   "name": "GRUE",
   "file": "comptwo.zil",
   "line": 3180,
   "endLine": 3188,
   "desc": "lurking fanged creature",
   "ldesc": "Lurking nearby is a vicious-looking creature with slavering\nfangs. Squinting in the light, it eyes you hungrily.",
   "fdesc": null,
   "loc": "BIO-LAB",
   "flags": [
    "ACTORBIT"
   ],
   "synonyms": [
    "GRUE",
    "CREATURE",
    "MUTANT",
    "MONSTER"
   ],
   "adjectives": [
    "LURKING",
    "SINISTER",
    "FANGED",
    "VICIOUS",
    "HUNGRY",
    "SILENT"
   ],
   "action": "GRUE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GRUE\n\t(LOC BIO-LAB)\n\t(DESC \"lurking fanged creature\")\n\t(LDESC \"Lurking nearby is a vicious-looking creature with slavering\nfangs. Squinting in the light, it eyes you hungrily.\")\n\t(SYNONYM GRUE CREATURE MUTANT MONSTER)\n\t(ADJECTIVE LURKING SINISTER FANGED VICIOUS HUNGRY SILENT)\n\t(FLAGS ACTORBIT)\n\t(ACTION GRUE-F)>",
   "referencedBy": [
    "CHEMICAL-FLUID-F",
    "I-CHASE-SCENE",
    "GRUE-F",
    "PRE-EXAMINE"
   ]
  },
  "TRIFFID": {
   "name": "TRIFFID",
   "file": "comptwo.zil",
   "line": 3201,
   "endLine": 3208,
   "desc": "mobile man-eating plant",
   "ldesc": "A giant plant, teeming with poisonous tentacles, is shuffling\ntoward you on three leg-like stalks.",
   "fdesc": null,
   "loc": "BIO-LAB",
   "flags": [
    "ACTORBIT"
   ],
   "synonyms": [
    "TRIFFID",
    "PLANT",
    "MUTANT",
    "MONSTER"
   ],
   "adjectives": [
    "MOBILE",
    "MAN-EATING",
    "GIANT"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TRIFFID\n\t(LOC BIO-LAB)\n\t(DESC \"mobile man-eating plant\")\n\t(LDESC \"A giant plant, teeming with poisonous tentacles, is shuffling\ntoward you on three leg-like stalks.\")\n\t(SYNONYM TRIFFID PLANT MUTANT MONSTER)\n\t(ADJECTIVE MOBILE MAN-EATING GIANT)\n\t(FLAGS ACTORBIT)>",
   "referencedBy": [
    "CHEMICAL-FLUID-F",
    "I-CHASE-SCENE"
   ]
  },
  "GLOBAL-OBJECTS": {
   "name": "GLOBAL-OBJECTS",
   "file": "globals.zil",
   "line": 113,
   "endLine": 118,
   "desc": "it",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "INVISIBLE",
    "TOUCHBIT",
    "SURFACEBIT",
    "TRYTAKEBIT",
    "MUNGBIT",
    "MUNGEDBIT",
    "SCRAMBLEDBIT",
    "WORNBIT",
    "OPENBIT",
    "SEARCHBIT",
    "TRANSBIT",
    "WEARBIT",
    "READBIT",
    "ACIDBIT",
    "ACTIVEBIT"
   ],
   "synonyms": [
    "ZZMGCK"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "LOCAL-GLOBALS",
    "INTNUM",
    "IT",
    "GROUND",
    "GLOBAL-DOORWAY",
    "GLOBAL-GAMES",
    "HANDS",
    "SLEEP",
    "ME"
   ],
   "source": "<OBJECT GLOBAL-OBJECTS\n\t(SYNONYM ZZMGCK)\n\t(DESC \"it\")\n\t(FLAGS INVISIBLE TOUCHBIT SURFACEBIT TRYTAKEBIT MUNGBIT MUNGEDBIT\n\t       SCRAMBLEDBIT WORNBIT OPENBIT SEARCHBIT TRANSBIT WEARBIT\n\t       READBIT ACIDBIT ACTIVEBIT)>",
   "referencedBy": [
    "META-LOC",
    "GLOBAL-CHECK",
    "HELD?",
    "PRE-EXAMINE",
    "PRE-TAKE",
    "PRE-PUT",
    "V-FIND",
    "ACCESSIBLE?"
   ]
  },
  "LOCAL-GLOBALS": {
   "name": "LOCAL-GLOBALS",
   "file": "globals.zil",
   "line": 120,
   "endLine": 127,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "ZZMGCK"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": "0",
   "contfcn": "0",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "0"
    ],
    "SIZE": [
     "0"
    ]
   },
   "contents": [
    "CONFERENCE-DOOR",
    "STORAGE-WEST-DOOR",
    "KITCHEN-DOOR",
    "RIFT",
    "REACTOR-ELEVATOR-DOOR",
    "UPPER-ELEVATOR-DOOR",
    "LOWER-ELEVATOR-DOOR",
    "ELEVATOR-BUTTON",
    "HELICOPTER-OBJECT",
    "CRYO-ELEVATOR-DOOR",
    "BIO-DOOR-EAST",
    "BIO-DOOR-WEST",
    "RAD-DOOR-EAST",
    "RAD-DOOR-WEST",
    "OFFICE-DOOR",
    "STRIP",
    "STAIRS",
    "WINDOW",
    "CLIFF",
    "OCEAN",
    "TABLES",
    "SHELVES",
    "LIGHTS",
    "CONTROLS",
    "GLOBAL-POD",
    "POD-DOOR",
    "CORRIDOR-DOOR",
    "GANGWAY-DOOR",
    "SLOT",
    "TELEPORTATION-BUTTON-1",
    "TELEPORTATION-BUTTON-2",
    "TELEPORTATION-BUTTON-3",
    "GLOBAL-SHUTTLE",
    "LEVER",
    "SHUTTLE-DOOR",
    "BED"
   ],
   "source": "<OBJECT LOCAL-GLOBALS\n\t(LOC GLOBAL-OBJECTS)\n\t(SYNONYM ZZMGCK)\n\t(VALUE 0)\n\t(CONTFCN 0)\n\t(DESCFCN 0)\n\t(SIZE 0)\n\t;(PSEUDO \"FOO\")>",
   "referencedBy": [
    "MOBY-FIND",
    "PRE-EXAMINE",
    "ACCESSIBLE?"
   ]
  },
  "ROOMS": {
   "name": "ROOMS",
   "file": "globals.zil",
   "line": 131,
   "endLine": 133,
   "desc": "it",
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
   "source": "<OBJECT ROOMS\n\t(IN TO ROOMS)\n\t(DESC \"it\")>",
   "referencedBy": [
    "V-HINTS-NO",
    "V-HINT",
    "META-LOC",
    "GWIM",
    "MOBY-FIND",
    "GLOBAL-CHECK",
    "HELD?",
    "DESCRIBE-ROOM",
    "FIRSTER",
    "V-DISEMBARK",
    "GOTO",
    "V-SIT-DOWN"
   ]
  },
  "INTNUM": {
   "name": "INTNUM",
   "file": "globals.zil",
   "line": 135,
   "endLine": 138,
   "desc": "number",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
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
   "source": "<OBJECT INTNUM\n\t(LOC GLOBAL-OBJECTS)\n\t(SYNONYM INTNUM)\n\t(DESC \"number\")>",
   "referencedBy": [
    "COMBINATION-DIAL-F",
    "LIBRARY-TYPE",
    "LASER-DIAL-F",
    "LASER-F",
    "V-PUSH",
    "V-$VERIFY",
    "V-$RANDOM",
    "V-TYPE"
   ]
  },
  "PSEUDO-OBJECT": {
   "name": "PSEUDO-OBJECT",
   "file": "globals.zil",
   "line": 140,
   "endLine": 142,
   "desc": "pseudoxyz",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": "GO",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PSEUDO-OBJECT\n\t(DESC \"pseudoxyz\")\n\t(ACTION GO)>",
   "referencedBy": [
    "FLOYD-F",
    "LASER-F",
    "VOID-PSEUDO",
    "CHEM-SPOUT-PSEUDO",
    "GLOBAL-CHECK",
    "HERE?",
    "PRE-EXAMINE",
    "PRE-TAKE",
    "V-FIND",
    "V-TELL",
    "ACCESSIBLE?"
   ]
  },
  "IT": {
   "name": "IT",
   "file": "globals.zil",
   "line": 144,
   "endLine": 148,
   "desc": "random object",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "IT",
    "THAT",
    "THIS",
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
   "source": "<OBJECT IT\n\t(LOC GLOBAL-OBJECTS)\n\t(SYNONYM IT THAT THIS HIM)\n\t(DESC \"random object\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "MAIN-LOOP-1",
    "PERFORM",
    "ITAKE-CHECK"
   ]
  },
  "STAIRS": {
   "name": "STAIRS",
   "file": "globals.zil",
   "line": 150,
   "endLine": 154,
   "desc": "stairway",
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
    "GANGWAY",
    "STAIRWAY"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT STAIRS\n\t(LOC LOCAL-GLOBALS)\n\t(SYNONYM STAIRS STEPS GANGWAY STAIRWAY)\n\t(DESC \"stairway\")\n\t(FLAGS NDESCBIT CLIMBBIT)>",
   "referencedBy": []
  },
  "GROUND": {
   "name": "GROUND",
   "file": "globals.zil",
   "line": 156,
   "endLine": 161,
   "desc": "floor",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "GROUND",
    "EARTH",
    "FLOOR",
    "DECK"
   ],
   "adjectives": [],
   "action": "GROUND-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GROUND\n\t(LOC GLOBAL-OBJECTS)\n\t(SYNONYM GROUND EARTH FLOOR DECK)\n\t(DESC \"floor\")\n\t(FLAGS NDESCBIT)\n\t(ACTION GROUND-F)>",
   "referencedBy": [
    "HIGH-PROTEIN-F",
    "OIL-CAN-F",
    "MACHINE-SHOP-F",
    "CHEMICAL-DISPENSER-F",
    "CHEMICAL-FLUID-F",
    "MEDICINE-F",
    "LASER-F",
    "GROUND-F",
    "GO",
    "ITAKE",
    "PRE-BOARD",
    "V-LOOK-DOWN"
   ]
  },
  "WINDOW": {
   "name": "WINDOW",
   "file": "globals.zil",
   "line": 176,
   "endLine": 182,
   "desc": "window",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WINDOW",
    "PORT",
    "VIEWPORT"
   ],
   "adjectives": [
    "VIEW"
   ],
   "action": "WINDOW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WINDOW\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"window\")\n\t(SYNONYM WINDOW PORT VIEWPORT)\n\t(ADJECTIVE VIEW)\n\t(FLAGS NDESCBIT)\n\t(ACTION WINDOW-F)>",
   "referencedBy": []
  },
  "CLIFF": {
   "name": "CLIFF",
   "file": "globals.zil",
   "line": 237,
   "endLine": 242,
   "desc": "cliff",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
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
   "source": "<OBJECT CLIFF\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"cliff\")\n\t(SYNONYM CLIFF)\n\t(FLAGS NDESCBIT)\n\t(ACTION CLIFF-F)>",
   "referencedBy": []
  },
  "OCEAN": {
   "name": "OCEAN",
   "file": "globals.zil",
   "line": 260,
   "endLine": 266,
   "desc": "ocean",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "VOWELBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "OCEAN"
   ],
   "adjectives": [
    "ENDLESS"
   ],
   "action": "OCEAN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT OCEAN\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"ocean\")\n\t(SYNONYM OCEAN)\n\t(ADJECTIVE ENDLESS)\n\t(FLAGS VOWELBIT NDESCBIT)\n\t(ACTION OCEAN-F)>",
   "referencedBy": []
  },
  "TABLES": {
   "name": "TABLES",
   "file": "globals.zil",
   "line": 274,
   "endLine": 280,
   "desc": "table",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "TABLE",
    "TABLES"
   ],
   "adjectives": [
    "ROUND",
    "CONFERENCE",
    "SMALL",
    "WIDE",
    "LONG"
   ],
   "action": "TABLES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TABLES\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"table\")\n\t(SYNONYM TABLE TABLES)\n\t(FLAGS NDESCBIT)\n\t(ADJECTIVE ROUND CONFERENCE SMALL WIDE LONG)\n\t(ACTION TABLES-F)>",
   "referencedBy": [
    "TABLES-F"
   ]
  },
  "SHELVES": {
   "name": "SHELVES",
   "file": "globals.zil",
   "line": 294,
   "endLine": 299,
   "desc": "shelf",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "SHELF",
    "SHELVES"
   ],
   "adjectives": [],
   "action": "SHELVES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SHELVES\n\t(LOC LOCAL-GLOBALS)\n\t(SYNONYM SHELF SHELVES)\n\t(DESC \"shelf\")\n\t(FLAGS NDESCBIT)\n\t(ACTION SHELVES-F)>",
   "referencedBy": [
    "SHELVES-F"
   ]
  },
  "LIGHTS": {
   "name": "LIGHTS",
   "file": "globals.zil",
   "line": 308,
   "endLine": 314,
   "desc": "light",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "LIGHT",
    "LIGHTS"
   ],
   "adjectives": [
    "RED",
    "DAZZLING",
    "GLOWING",
    "BLINKING",
    "WARNING",
    "BRIGHT",
    "COLORED",
    "FLASHING"
   ],
   "action": "LIGHTS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LIGHTS\n   (LOC LOCAL-GLOBALS)\n   (SYNONYM LIGHT LIGHTS)\n   (ADJECTIVE RED DAZZLING GLOWING BLINKING WARNING BRIGHT COLORED FLASHING)\n   (DESC \"light\")\n   (FLAGS NDESCBIT)\n   (ACTION LIGHTS-F)>",
   "referencedBy": []
  },
  "GLOBAL-DOORWAY": {
   "name": "GLOBAL-DOORWAY",
   "file": "globals.zil",
   "line": 322,
   "endLine": 328,
   "desc": "doorway",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "DOORWAY",
    "PORTAL",
    "OPENING"
   ],
   "adjectives": [
    "NORTH",
    "SOUTH",
    "EAST",
    "WEST",
    "NE",
    "SE",
    "NW",
    "SW"
   ],
   "action": "GLOBAL-DOORWAY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-DOORWAY\n\t(LOC GLOBAL-OBJECTS)\n\t(SYNONYM DOORWAY PORTAL OPENING)\n\t(ADJECTIVE NORTH SOUTH EAST WEST NE SE NW SW)\n\t(DESC \"doorway\")\n\t(FLAGS NDESCBIT)\n\t(ACTION GLOBAL-DOORWAY-F)>",
   "referencedBy": []
  },
  "CONTROLS": {
   "name": "CONTROLS",
   "file": "globals.zil",
   "line": 344,
   "endLine": 350,
   "desc": "set of controls",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "CONTROL",
    "PANEL",
    "DIALS",
    "GAUGES"
   ],
   "adjectives": [
    "CONTROL",
    "COMPLEX"
   ],
   "action": "CONTROLS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CONTROLS\n\t(LOC LOCAL-GLOBALS)\n\t(SYNONYM CONTROL PANEL DIALS GAUGES)\n\t(ADJECTIVE CONTROL COMPLEX)\n\t(DESC \"set of controls\")\n\t(FLAGS NDESCBIT)\n\t(ACTION CONTROLS-F)>",
   "referencedBy": []
  },
  "GLOBAL-GAMES": {
   "name": "GLOBAL-GAMES",
   "file": "globals.zil",
   "line": 375,
   "endLine": 381,
   "desc": "game",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BOCCI",
    "CHESS",
    "HIDER-AND-SEEKER",
    "HUCKA-BUCKA",
    "SEEKER",
    "BEANSTALK"
   ],
   "adjectives": [
    "HIDER",
    "HUCKA",
    "BUCKA"
   ],
   "action": "GLOBAL-GAMES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-GAMES\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"game\")\n\t(SYNONYM BOCCI CHESS HIDER-AND-SEEKER HUCKA-BUCKA SEEKER BEANSTALK)\n        (ADJECTIVE HIDER HUCKA BUCKA)\n\t(FLAGS NDESCBIT)\n\t(ACTION GLOBAL-GAMES-F)>",
   "referencedBy": [
    "GAMES-PSEUDO",
    "V-PLAY-WITH"
   ]
  },
  "HANDS": {
   "name": "HANDS",
   "file": "globals.zil",
   "line": 391,
   "endLine": 397,
   "desc": "pair of hands",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PAIR",
    "HANDS"
   ],
   "adjectives": [
    "BARE"
   ],
   "action": "HANDS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HANDS\n\t(LOC GLOBAL-OBJECTS)\n\t(SYNONYM PAIR HANDS)\n\t(ADJECTIVE BARE)\n\t(DESC \"pair of hands\")\n\t(FLAGS NDESCBIT)\n\t(ACTION HANDS-F)>",
   "referencedBy": [
    "CHEMICAL-FLUID-F",
    "LASER-F",
    "ITAKE-CHECK",
    "V-OPEN-WITH",
    "V-SHAKE",
    "V-SHAKE-WITH",
    "V-FIND"
   ]
  },
  "SLEEP": {
   "name": "SLEEP",
   "file": "globals.zil",
   "line": 412,
   "endLine": 417,
   "desc": "sacred act of sleeping",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "SLEEP"
   ],
   "adjectives": [],
   "action": "SLEEP-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SLEEP\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"sacred act of sleeping\")\n\t(SYNONYM SLEEP)\n\t(FLAGS NDESCBIT)\n\t(ACTION SLEEP-F)>",
   "referencedBy": []
  },
  "ADVENTURER": {
   "name": "ADVENTURER",
   "file": "globals.zil",
   "line": 423,
   "endLine": 428,
   "desc": "player",
   "ldesc": null,
   "fdesc": null,
   "loc": "DECK-NINE",
   "flags": [
    "NDESCBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "ADMIRAL",
    "SMITHE",
    "SPAM",
    "EGGS"
   ],
   "adjectives": [
    "ORANGE",
    "OPENER"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "SCRUB-BRUSH",
    "CHRONOMETER",
    "PATROL-UNIFORM",
    "DIARY"
   ],
   "source": "<OBJECT ADVENTURER\n\t(LOC DECK-NINE)\n\t(SYNONYM ADMIRAL SMITHE SPAM EGGS)\n\t(ADJECTIVE ORANGE OPENER)\n\t(DESC \"player\")\n        (FLAGS NDESCBIT INVISIBLE)>",
   "referencedBy": [
    "LADDER-F",
    "HIGH-PROTEIN-F",
    "MAGNET-F",
    "I-MAGNET",
    "FLOYD-F",
    "FLOYD-COMES-ALIVE",
    "I-FLOYD",
    "CHEMICAL-FLUID-F",
    "RED-SPOOL-F",
    "MEDICINE-F",
    "BOARD-F",
    "BAD-BEDISTOR-F",
    "GREEN-SPOOL-F",
    "LAB-DESK-F",
    "LASER-F",
    "I-MICROBE",
    "SAY-HERE",
    "V-THROUGH",
    "NOT-HERE-OBJECT-F",
    "I-BLATHER",
    "I-AMBASSADOR",
    "SAFETY-WEB-F",
    "GOO-F",
    "I-BLOWUP-FEINSTEIN",
    "I-POD-TRIP",
    "SLOT-F",
    "I-SLEEP-WARNINGS",
    "BED-F",
    "WAKING-UP",
    "GO",
    "MAIN-LOOP-1",
    "PARSER",
    "SYNTAX-CHECK",
    "GET-OBJECT",
    "ITAKE-CHECK",
    "DESCRIBE-ROOM",
    "DESCRIBE-OBJECT",
    "PRINT-CONT",
    "FIRSTER",
    "V-SCORE",
    "V-INVENTORY",
    "PRE-TAKE",
    "ITAKE",
    "PRE-BOARD",
    "V-BOARD",
    "V-DISEMBARK",
    "OWN-FEET",
    "V-STAND",
    "GOTO",
    "V-LEAVE",
    "V-FIND",
    "PRE-ZAP",
    "V-SCRUB",
    "V-OIL",
    "V-TIME",
    "THIS-IS-IT"
   ]
  },
  "ME": {
   "name": "ME",
   "file": "globals.zil",
   "line": 430,
   "endLine": 435,
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
    "WE"
   ],
   "adjectives": [],
   "action": "CRETIN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ME\n\t(LOC GLOBAL-OBJECTS)\n\t(SYNONYM ME MYSELF SELF WE)\n\t(DESC \"you\")\n\t(FLAGS ACTORBIT)\n\t(ACTION CRETIN-F)>",
   "referencedBy": [
    "FLOYD-F",
    "CHEMICAL-FLUID-F",
    "LASER-F",
    "CRETIN-F",
    "PARSER",
    "V-FIND",
    "V-TELL",
    "V-SAY",
    "V-SHOW",
    "THIS-IS-IT"
   ]
  },
  "NOT-HERE-OBJECT": {
   "name": "NOT-HERE-OBJECT",
   "file": "globals.zil",
   "line": 504,
   "endLine": 506,
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
    "FIND-NOT-HERE",
    "DONT-ALL",
    "PERFORM",
    "GET-OBJECT",
    "ITAKE-CHECK",
    "THIS-IS-IT"
   ]
  },
  "SCRUB-BRUSH": {
   "name": "SCRUB-BRUSH",
   "file": "globals.zil",
   "line": 628,
   "endLine": 634,
   "desc": "Patrol-issue self-contained multi-purpose scrub brush",
   "ldesc": null,
   "fdesc": null,
   "loc": "ADVENTURER",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "BRUSH",
    "SCRUBBRUSH",
    "SCRUBRUSH"
   ],
   "adjectives": [
    "SCRUB",
    "PATROL",
    "SELF-CONTAINED",
    "MULTI",
    "MULTI-PURPOSE",
    "PURPOSE"
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
   "source": "<OBJECT SCRUB-BRUSH\n\t(LOC ADVENTURER)\n\t(DESC \"Patrol-issue self-contained multi-purpose scrub brush\")\n\t(SYNONYM BRUSH SCRUBBRUSH SCRUBRUSH)\n\t(ADJECTIVE SCRUB PATROL SELF-CONTAINED MULTI MULTI-PURPOSE PURPOSE)\n\t(FLAGS TAKEBIT)\n\t(SIZE 10)>",
   "referencedBy": [
    "RIFT-F",
    "V-SCRUB"
   ]
  },
  "CHRONOMETER": {
   "name": "CHRONOMETER",
   "file": "globals.zil",
   "line": 636,
   "endLine": 643,
   "desc": "chronometer",
   "ldesc": null,
   "fdesc": null,
   "loc": "ADVENTURER",
   "flags": [
    "MUNGBIT",
    "TAKEBIT",
    "WEARBIT",
    "WORNBIT"
   ],
   "synonyms": [
    "CHRONOMETER",
    "WRISTWATCH",
    "WATCH"
   ],
   "adjectives": [
    "WRIST"
   ],
   "action": "CHRONOMETER-F",
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
   "source": "<OBJECT CHRONOMETER\n\t(LOC ADVENTURER)\n\t(DESC \"chronometer\")\n\t(SYNONYM CHRONOMETER WRISTWATCH WATCH)\n\t(ADJECTIVE WRIST)\n\t(SIZE 10)\n\t(FLAGS MUNGBIT TAKEBIT WEARBIT WORNBIT)\n\t(ACTION CHRONOMETER-F)>",
   "referencedBy": [
    "CHEMICAL-FLUID-F",
    "TELL-TIME",
    "MAIN-LOOP-1",
    "V-SCORE",
    "V-TIME"
   ]
  },
  "ID-CARD": {
   "name": "ID-CARD",
   "file": "globals.zil",
   "line": 663,
   "endLine": 673,
   "desc": "ID card",
   "ldesc": null,
   "fdesc": null,
   "loc": "PATROL-UNIFORM",
   "flags": [
    "VOWELBIT",
    "TAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "CARD",
    "CARDS"
   ],
   "adjectives": [
    "PATROL",
    "ID",
    "IDENTIFICATION"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ],
    "TEXT": [
     "\"STELLAR PATROL|\nSpecial Assignment Task Force|\nID Number:  6172-531-541\""
    ]
   },
   "contents": [],
   "source": "<OBJECT ID-CARD\n\t(LOC PATROL-UNIFORM)\n\t(DESC \"ID card\")\n\t(SYNONYM CARD CARDS)\n\t(ADJECTIVE PATROL ID IDENTIFICATION)\n\t(FLAGS VOWELBIT TAKEBIT READBIT)\n\t(SIZE 3)\n\t(TEXT\n\"\\\"STELLAR PATROL|\nSpecial Assignment Task Force|\nID Number:  6172-531-541\\\"\")>",
   "referencedBy": [
    "I-MAGNET",
    "FLOYD-F",
    "LASER-F",
    "SLOT-F"
   ]
  },
  "PATROL-UNIFORM": {
   "name": "PATROL-UNIFORM",
   "file": "globals.zil",
   "line": 675,
   "endLine": 684,
   "desc": "Patrol uniform",
   "ldesc": "A slightly wrinkled Patrol uniform is lying here.",
   "fdesc": null,
   "loc": "ADVENTURER",
   "flags": [
    "TAKEBIT",
    "WORNBIT",
    "WEARBIT",
    "CONTBIT",
    "SEARCHBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "UNIFORM",
    "POCKET",
    "SUIT"
   ],
   "adjectives": [
    "PATROL",
    "WRINKLED"
   ],
   "action": "PATROL-UNIFORM-F",
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
    "ID-CARD"
   ],
   "source": "<OBJECT PATROL-UNIFORM\n\t(LOC ADVENTURER)\n\t(DESC \"Patrol uniform\")\n\t(LDESC\n\"A slightly wrinkled Patrol uniform is lying here.\")\n\t(SYNONYM UNIFORM POCKET SUIT)\n\t(ADJECTIVE PATROL WRINKLED)\n        (FLAGS TAKEBIT WORNBIT WEARBIT CONTBIT SEARCHBIT OPENBIT)\n\t(CAPACITY 10)\n\t(ACTION PATROL-UNIFORM-F)>",
   "referencedBy": [
    "LAB-UNIFORM-F",
    "LASER-F",
    "PATROL-UNIFORM-F",
    "I-BLATHER",
    "BUTTON-PSEUDO"
   ]
  },
  "DIARY": {
   "name": "DIARY",
   "file": "globals.zil",
   "line": 722,
   "endLine": 730,
   "desc": "diary",
   "ldesc": null,
   "fdesc": null,
   "loc": "ADVENTURER",
   "flags": [
    "ACIDBIT",
    "TAKEBIT",
    "READBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "DIARY",
    "MACHINE",
    "RECORDER"
   ],
   "adjectives": [
    "BATTERED",
    "OLD"
   ],
   "action": "DIARY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "0"
    ],
    "SIZE": [
     "3"
    ]
   },
   "contents": [
    "DIARY-BUTTON"
   ],
   "source": "<OBJECT DIARY\n\t(LOC ADVENTURER)\n\t(DESC \"diary\")\n\t(SYNONYM DIARY MACHINE RECORDER)\n\t(ADJECTIVE BATTERED OLD)\n\t(FLAGS ACIDBIT TAKEBIT READBIT TRANSBIT)\n\t(CAPACITY 0)\n\t(SIZE 3)\n\t(ACTION DIARY-F)>",
   "referencedBy": [
    "FLOYD-F",
    "LASER-F",
    "DIARY-F",
    "DIARY-BUTTON-F"
   ]
  },
  "DIARY-BUTTON": {
   "name": "DIARY-BUTTON",
   "file": "globals.zil",
   "line": 771,
   "endLine": 778,
   "desc": "little button",
   "ldesc": null,
   "fdesc": null,
   "loc": "DIARY",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "LITTLE"
   ],
   "action": "DIARY-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT DIARY-BUTTON\n\t(LOC DIARY)\n\t(DESC \"little button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE LITTLE)\n\t(FLAGS NDESCBIT)\n\t(SIZE 0)\n\t(ACTION DIARY-BUTTON-F)>",
   "referencedBy": []
  },
  "BLATHER": {
   "name": "BLATHER",
   "file": "globals.zil",
   "line": 1035,
   "endLine": 1044,
   "desc": "Ensign First Class",
   "ldesc": "Ensign First Class Blather is standing before you, furiously scribbling\ndemerits onto an oversized clipboard.",
   "fdesc": null,
   "loc": null,
   "flags": [
    "VOWELBIT",
    "ACTORBIT"
   ],
   "synonyms": [
    "ENSIGN",
    "BLATHER"
   ],
   "adjectives": [
    "ENSIGN",
    "FIRST",
    "CLASS"
   ],
   "action": "BLATHER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "150"
    ]
   },
   "contents": [],
   "source": "<OBJECT BLATHER\n\t(DESC \"Ensign First Class\")\n\t(LDESC \n\"Ensign First Class Blather is standing before you, furiously scribbling\ndemerits onto an oversized clipboard.\")\n\t(SYNONYM ENSIGN BLATHER)\n\t(ADJECTIVE ENSIGN FIRST CLASS)\n\t(SIZE 150)\n\t(FLAGS VOWELBIT ACTORBIT)\n\t(ACTION BLATHER-F)>",
   "referencedBy": [
    "HANDS-F",
    "PATROL-UNIFORM-F",
    "DIARY-F",
    "I-BLATHER",
    "BLATHER-F",
    "I-AMBASSADOR",
    "I-BLOWUP-FEINSTEIN",
    "SLIME-PSEUDO"
   ]
  },
  "AMBASSADOR": {
   "name": "AMBASSADOR",
   "file": "globals.zil",
   "line": 1078,
   "endLine": 1087,
   "desc": "alien ambassador",
   "ldesc": "A high-ranking ambassador from a newly contacted alien race is standing\nhere on three of his legs, and watching you with seven of his eyes.",
   "fdesc": null,
   "loc": null,
   "flags": [
    "VOWELBIT",
    "ACTORBIT"
   ],
   "synonyms": [
    "AMBASSADOR"
   ],
   "adjectives": [
    "VERY",
    "IMPORTANT",
    "ALIEN",
    "HIGH-RANKING",
    "HIGH",
    "RANKING"
   ],
   "action": "AMBASSADOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "150"
    ]
   },
   "contents": [],
   "source": "<OBJECT AMBASSADOR\n\t(DESC \"alien ambassador\")\n\t(LDESC \n\"A high-ranking ambassador from a newly contacted alien race is standing\nhere on three of his legs, and watching you with seven of his eyes.\")\n\t(SYNONYM AMBASSADOR)\n\t(ADJECTIVE VERY IMPORTANT ALIEN HIGH-RANKING HIGH RANKING)\n\t(SIZE 150)\n\t(FLAGS VOWELBIT ACTORBIT)\n\t(ACTION AMBASSADOR-F)>",
   "referencedBy": [
    "HANDS-F",
    "I-BLATHER",
    "I-AMBASSADOR",
    "AMBASSADOR-F",
    "I-BLOWUP-FEINSTEIN",
    "TRANSLATOR-PSEUDO",
    "SLIME-PSEUDO",
    "PRE-TAKE",
    "V-LOOK-UNDER"
   ]
  },
  "CELERY": {
   "name": "CELERY",
   "file": "globals.zil",
   "line": 1089,
   "endLine": 1093,
   "desc": "piece of celery",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT",
    "FOODBIT"
   ],
   "synonyms": [
    "CELERY",
    "PIECE",
    "STALK"
   ],
   "adjectives": [],
   "action": "CELERY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CELERY\n\t(DESC \"piece of celery\")\n\t(SYNONYM CELERY PIECE STALK)\n\t(FLAGS NDESCBIT FOODBIT)\n\t(ACTION CELERY-F)>",
   "referencedBy": [
    "I-AMBASSADOR",
    "AMBASSADOR-F",
    "I-BLOWUP-FEINSTEIN",
    "PRE-TAKE"
   ]
  },
  "BROCHURE": {
   "name": "BROCHURE",
   "file": "globals.zil",
   "line": 1140,
   "endLine": 1153,
   "desc": "brochure",
   "ldesc": "Unfortunately, one of those stupid Blow'k-bibben-Gordo brochures is here.",
   "fdesc": null,
   "loc": null,
   "flags": [
    "ACIDBIT",
    "TAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "BROCHURE",
    "PAMPHLET",
    "LEAFLET"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "4"
    ],
    "TEXT": [
     "\"The leading export of Blow'k-bibben-Gordo is the adventure game|\n|\n          *** PLANETFALL ***|\n|\nwritten by S. Eric Meretzky.|\nBuy one today. Better yet, buy a thousand.\""
    ]
   },
   "contents": [],
   "source": "<OBJECT BROCHURE\n\t(DESC \"brochure\")\n\t(LDESC\n\"Unfortunately, one of those stupid Blow'k-bibben-Gordo brochures is here.\")\n\t(SYNONYM BROCHURE PAMPHLET LEAFLET)\n\t(FLAGS ACIDBIT TAKEBIT READBIT)\n\t(SIZE 4)\n\t(TEXT\n\"\\\"The leading export of Blow'k-bibben-Gordo is the adventure game|\n|\n          *** PLANETFALL ***|\n|\nwritten by S. Eric Meretzky.|\nBuy one today. Better yet, buy a thousand.\\\"\")>",
   "referencedBy": [
    "LASER-F",
    "I-AMBASSADOR"
   ]
  },
  "GLOBAL-POD": {
   "name": "GLOBAL-POD",
   "file": "globals.zil",
   "line": 1208,
   "endLine": 1214,
   "desc": "escape pod",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "VOWELBIT",
    "VEHBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "POD"
   ],
   "adjectives": [
    "EMERGENCY",
    "ESCAPE",
    "PRIMARY"
   ],
   "action": "GLOBAL-POD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-POD\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"escape pod\")\n\t(SYNONYM POD)\n\t(ADJECTIVE EMERGENCY ESCAPE PRIMARY)\n\t(FLAGS VOWELBIT VEHBIT NDESCBIT)\n\t(ACTION GLOBAL-POD-F)>",
   "referencedBy": []
  },
  "SAFETY-WEB": {
   "name": "SAFETY-WEB",
   "file": "globals.zil",
   "line": 1254,
   "endLine": 1260,
   "desc": "safety web",
   "ldesc": null,
   "fdesc": null,
   "loc": "ESCAPE-POD",
   "flags": [
    "CLIMBBIT",
    "VEHBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "MASS",
    "WEB",
    "WEBBING",
    "NET"
   ],
   "adjectives": [
    "SAFETY"
   ],
   "action": "SAFETY-WEB-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SAFETY-WEB\n\t(LOC ESCAPE-POD)\n\t(DESC \"safety web\")\n\t(SYNONYM MASS WEB WEBBING NET)\n\t(ADJECTIVE SAFETY)\n\t(FLAGS CLIMBBIT VEHBIT NDESCBIT)\n\t(ACTION SAFETY-WEB-F)>",
   "referencedBy": [
    "SAFETY-WEB-F",
    "I-BLOWUP-FEINSTEIN",
    "I-POD-TRIP",
    "V-DISEMBARK",
    "V-LEAVE",
    "V-SIT"
   ]
  },
  "TOWEL": {
   "name": "TOWEL",
   "file": "globals.zil",
   "line": 1305,
   "endLine": 1314,
   "desc": "towel",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "READBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "TOWEL"
   ],
   "adjectives": [],
   "action": "TOWEL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "10"
    ],
    "TEXT": [
     "\"S.P.S. FEINSTEIN|\n  Escape Pod #42|\n   Don't Panic!\""
    ]
   },
   "contents": [],
   "source": "<OBJECT TOWEL\n\t(DESC \"towel\")\n\t(SYNONYM TOWEL)\n\t(SIZE 10)\n\t(FLAGS READBIT TAKEBIT)\n\t(TEXT\n\"\\\"S.P.S. FEINSTEIN|\n  Escape Pod #42|\n   Don't Panic!\\\"\")\n\t(ACTION TOWEL-F)>",
   "referencedBy": [
    "LASER-F",
    "I-POD-TRIP",
    "V-SCRUB"
   ]
  },
  "FOOD-KIT": {
   "name": "FOOD-KIT",
   "file": "globals.zil",
   "line": 1321,
   "endLine": 1328,
   "desc": "survival kit",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "CONTBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "PROVISIONS",
    "KIT"
   ],
   "adjectives": [
    "SURVIVAL",
    "EMERGENCY"
   ],
   "action": "FOOD-KIT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "10"
    ],
    "CAPACITY": [
     "25"
    ]
   },
   "contents": [
    "RED-GOO",
    "BROWN-GOO",
    "GREEN-GOO"
   ],
   "source": "<OBJECT FOOD-KIT\n\t(DESC \"survival kit\")\n\t(SYNONYM PROVISIONS KIT)\n\t(ADJECTIVE SURVIVAL EMERGENCY)\n\t(SIZE 10)\n\t(CAPACITY 25)\n\t(FLAGS TAKEBIT CONTBIT SEARCHBIT)\n\t(ACTION FOOD-KIT-F)>",
   "referencedBy": [
    "FOOD-KIT-F",
    "GOO-F",
    "I-POD-TRIP",
    "V-SHAKE"
   ]
  },
  "RED-GOO": {
   "name": "RED-GOO",
   "file": "globals.zil",
   "line": 1339,
   "endLine": 1345,
   "desc": "blob of red goo",
   "ldesc": null,
   "fdesc": null,
   "loc": "FOOD-KIT",
   "flags": [
    "ACIDBIT",
    "FOODBIT"
   ],
   "synonyms": [
    "GOO",
    "BLOB",
    "FOOD",
    "PIE"
   ],
   "adjectives": [
    "RED",
    "CHERRY"
   ],
   "action": "GOO-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RED-GOO\n\t(LOC FOOD-KIT)\n\t(DESC \"blob of red goo\")\n\t(SYNONYM GOO BLOB FOOD PIE)\n\t(ADJECTIVE RED CHERRY)\n\t(FLAGS ACIDBIT FOODBIT)\n\t(ACTION GOO-F)>",
   "referencedBy": [
    "FLOYD-F",
    "GOO-F",
    "V-SHAKE",
    "V-TASTE"
   ]
  },
  "BROWN-GOO": {
   "name": "BROWN-GOO",
   "file": "globals.zil",
   "line": 1347,
   "endLine": 1353,
   "desc": "blob of brown goo",
   "ldesc": null,
   "fdesc": null,
   "loc": "FOOD-KIT",
   "flags": [
    "ACIDBIT",
    "FOODBIT"
   ],
   "synonyms": [
    "GOO",
    "BLOB",
    "FOOD",
    "STEW"
   ],
   "adjectives": [
    "BROWN",
    "BEEF"
   ],
   "action": "GOO-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BROWN-GOO\n\t(LOC FOOD-KIT)\n\t(DESC \"blob of brown goo\")\n\t(SYNONYM GOO BLOB FOOD STEW)\n\t(ADJECTIVE BROWN BEEF)\n\t(FLAGS ACIDBIT FOODBIT)\n\t(ACTION GOO-F)>",
   "referencedBy": [
    "FLOYD-F",
    "GOO-F",
    "V-SHAKE",
    "V-TASTE"
   ]
  },
  "GREEN-GOO": {
   "name": "GREEN-GOO",
   "file": "globals.zil",
   "line": 1355,
   "endLine": 1361,
   "desc": "blob of green goo",
   "ldesc": null,
   "fdesc": null,
   "loc": "FOOD-KIT",
   "flags": [
    "ACIDBIT",
    "FOODBIT"
   ],
   "synonyms": [
    "GOO",
    "BLOB",
    "FOOD",
    "BEANS"
   ],
   "adjectives": [
    "GREEN",
    "LIMA"
   ],
   "action": "GOO-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GREEN-GOO\n\t(LOC FOOD-KIT)\n\t(DESC \"blob of green goo\")\n\t(SYNONYM GOO BLOB FOOD BEANS)\n\t(ADJECTIVE GREEN LIMA)\n\t(FLAGS ACIDBIT FOODBIT)\n\t(ACTION GOO-F)>",
   "referencedBy": [
    "FLOYD-F",
    "V-SHAKE",
    "V-TASTE"
   ]
  },
  "POD-DOOR": {
   "name": "POD-DOOR",
   "file": "globals.zil",
   "line": 1402,
   "endLine": 1408,
   "desc": "escape pod bulkhead",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "VOWELBIT",
    "DOORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR",
    "BULKHEAD"
   ],
   "adjectives": [
    "EMERGENCY",
    "ESCAPE",
    "POD"
   ],
   "action": "POD-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT POD-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"escape pod bulkhead\")\n\t(SYNONYM DOOR BULKHEAD)\n\t(ADJECTIVE EMERGENCY ESCAPE POD)\n\t(FLAGS VOWELBIT DOORBIT NDESCBIT)\n\t(ACTION POD-DOOR-F)>",
   "referencedBy": [
    "DECK-NINE-F",
    "GLOBAL-POD-F",
    "POD-EXIT-F",
    "ESCAPE-POD-F",
    "POD-DOOR-F",
    "I-BLOWUP-FEINSTEIN",
    "I-SINK-POD",
    "GO"
   ]
  },
  "CORRIDOR-DOOR": {
   "name": "CORRIDOR-DOOR",
   "file": "globals.zil",
   "line": 1439,
   "endLine": 1445,
   "desc": "wide bulkhead",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "INVISIBLE",
    "DOORBIT",
    "OPENBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR",
    "BULKHEAD"
   ],
   "adjectives": [
    "EMERGENCY",
    "WIDE"
   ],
   "action": "GANGWAY-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CORRIDOR-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"wide bulkhead\")\n\t(SYNONYM DOOR BULKHEAD)\n\t(ADJECTIVE EMERGENCY WIDE)\n\t(FLAGS INVISIBLE DOORBIT OPENBIT NDESCBIT)\n\t(ACTION GANGWAY-DOOR-F)>",
   "referencedBy": [
    "I-BLOWUP-FEINSTEIN"
   ]
  },
  "GANGWAY-DOOR": {
   "name": "GANGWAY-DOOR",
   "file": "globals.zil",
   "line": 1447,
   "endLine": 1453,
   "desc": "narrow bulkhead",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "INVISIBLE",
    "DOORBIT",
    "OPENBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR",
    "BULKHEAD"
   ],
   "adjectives": [
    "EMERGENCY",
    "NARROW"
   ],
   "action": "GANGWAY-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GANGWAY-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"narrow bulkhead\")\n\t(SYNONYM DOOR BULKHEAD)\n\t(ADJECTIVE EMERGENCY NARROW)\n\t(FLAGS INVISIBLE DOORBIT OPENBIT NDESCBIT)\n\t(ACTION GANGWAY-DOOR-F)>",
   "referencedBy": [
    "DECK-NINE-F",
    "I-BLOWUP-FEINSTEIN"
   ]
  },
  "SLOT": {
   "name": "SLOT",
   "file": "globals.zil",
   "line": 1665,
   "endLine": 1671,
   "desc": "slot",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "SLOT"
   ],
   "adjectives": [
    "SMALL"
   ],
   "action": "SLOT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SLOT\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"slot\")\n\t(SYNONYM SLOT)\n\t(ADJECTIVE SMALL)\n\t(FLAGS NDESCBIT)\n\t(ACTION SLOT-F)>",
   "referencedBy": [
    "SLOT-F",
    "INBUF-ADD"
   ]
  },
  "TELEPORTATION-BUTTON-1": {
   "name": "TELEPORTATION-BUTTON-1",
   "file": "globals.zil",
   "line": 1792,
   "endLine": 1798,
   "desc": "brown button",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "BROWN",
    "FIRST"
   ],
   "action": "TELEPORTATION-BUTTON-1-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TELEPORTATION-BUTTON-1\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"brown button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE BROWN FIRST)\n\t(FLAGS NDESCBIT)\n\t(ACTION TELEPORTATION-BUTTON-1-F)>",
   "referencedBy": [
    "V-PUSH"
   ]
  },
  "TELEPORTATION-BUTTON-2": {
   "name": "TELEPORTATION-BUTTON-2",
   "file": "globals.zil",
   "line": 1800,
   "endLine": 1806,
   "desc": "beige button",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "BEIGE",
    "SECOND"
   ],
   "action": "TELEPORTATION-BUTTON-2-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TELEPORTATION-BUTTON-2\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"beige button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE BEIGE SECOND)\n\t(FLAGS NDESCBIT)\n\t(ACTION TELEPORTATION-BUTTON-2-F)>",
   "referencedBy": [
    "V-PUSH"
   ]
  },
  "TELEPORTATION-BUTTON-3": {
   "name": "TELEPORTATION-BUTTON-3",
   "file": "globals.zil",
   "line": 1808,
   "endLine": 1814,
   "desc": "tan button",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "TAN",
    "THIRD"
   ],
   "action": "TELEPORTATION-BUTTON-3-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TELEPORTATION-BUTTON-3\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"tan button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE TAN THIRD)\n\t(FLAGS NDESCBIT)\n\t(ACTION TELEPORTATION-BUTTON-3-F)>",
   "referencedBy": [
    "V-PUSH"
   ]
  },
  "GLOBAL-SHUTTLE": {
   "name": "GLOBAL-SHUTTLE",
   "file": "globals.zil",
   "line": 1855,
   "endLine": 1861,
   "desc": "shuttle car",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "CAR",
    "SHUTTLE"
   ],
   "adjectives": [
    "SHUTTLE"
   ],
   "action": "GLOBAL-SHUTTLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-SHUTTLE\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"shuttle car\")\n\t(SYNONYM CAR SHUTTLE)\n\t(ADJECTIVE SHUTTLE)\n\t(FLAGS NDESCBIT)\n\t(ACTION GLOBAL-SHUTTLE-F)>",
   "referencedBy": [
    "PRE-BOARD"
   ]
  },
  "LEVER": {
   "name": "LEVER",
   "file": "globals.zil",
   "line": 1925,
   "endLine": 1930,
   "desc": "lever",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "LEVER"
   ],
   "adjectives": [],
   "action": "LEVER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LEVER\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"lever\")\n\t(SYNONYM LEVER)\n\t(FLAGS NDESCBIT)\n\t(ACTION LEVER-F)>",
   "referencedBy": []
  },
  "SHUTTLE-DOOR": {
   "name": "SHUTTLE-DOOR",
   "file": "globals.zil",
   "line": 1932,
   "endLine": 1937,
   "desc": "door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "OPENBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [],
   "action": "SHUTTLE-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SHUTTLE-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"door\")\n\t(SYNONYM DOOR)\n\t(FLAGS DOORBIT OPENBIT INVISIBLE)\n\t(ACTION SHUTTLE-DOOR-F)>",
   "referencedBy": [
    "I-SHUTTLE",
    "DESCRIBE-SHUTTLE-ARRIVE"
   ]
  },
  "BED": {
   "name": "BED",
   "file": "globals.zil",
   "line": 2399,
   "endLine": 2405,
   "desc": "bed",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "CLIMBBIT",
    "VEHBIT"
   ],
   "synonyms": [
    "BUNK",
    "BED"
   ],
   "adjectives": [
    "MULTI",
    "TIERED",
    "MULTI-TIERED",
    "BUNK"
   ],
   "action": "BED-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BED\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"bed\")\n\t(SYNONYM BUNK BED)\n\t(ADJECTIVE MULTI TIERED MULTI-TIERED BUNK)\n\t(FLAGS NDESCBIT CLIMBBIT VEHBIT)\n\t(ACTION BED-F)>",
   "referencedBy": [
    "I-FLOYD",
    "I-SLEEP-WARNINGS",
    "BED-F",
    "WAKING-UP",
    "V-DISEMBARK",
    "V-LEAVE",
    "V-SIT"
   ]
  }
 },
 "routines": {
  "UNDERWATER-F": {
   "name": "UNDERWATER-F",
   "file": "compone.zil",
   "line": 28,
   "endLine": 33,
   "source": "<ROUTINE UNDERWATER-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-END>\n\t\t<SETG DROWN <+ ,DROWN 1>>\n\t\t<COND (<G? ,DROWN 2>\n\t\t       <JIGS-UP\n\"A mighty undertow drags you across some underwater obstructions.\">)>)>>"
  },
  "CRAG-F": {
   "name": "CRAG-F",
   "file": "compone.zil",
   "line": 57,
   "endLine": 59,
   "source": "<ROUTINE CRAG-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<SETG DROWN 3>)>>"
  },
  "BALCONY-F": {
   "name": "BALCONY-F",
   "file": "compone.zil",
   "line": 75,
   "endLine": 93,
   "source": "<ROUTINE BALCONY-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is an octagonal room, half carved into and half built out from the cliff\nwall. Through the shattered windows which ring the outer wall you can see\nocean to the horizon. A weathered metal plaque with barely readable lettering\nrests below the windows. The language seems to be a corrupt form of\nGalalingua. A steep stairway, roughly cut into the face of the cliff, leads\nupward. \">\n\t\t<COND (<EQUAL? ,DAY 1>\n\t\t       <TELL\n\"A rocky crag can be seen about eight meters below.\" CR>)\n\t\t      (<EQUAL? ,DAY 2>\n\t\t       <TELL\n\"The ocean waters swirl below. The crag where you landed yesterday is\nnow underwater!\" CR>)\n\t\t      (<EQUAL? ,DAY 3>\n\t\t       <TELL\n\"Ocean waters are lapping at the base of the balcony.\" CR>)>)>>"
  },
  "WINDING-STAIR-F": {
   "name": "WINDING-STAIR-F",
   "file": "compone.zil",
   "line": 108,
   "endLine": 118,
   "source": "<ROUTINE WINDING-STAIR-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"The middle of a long, steep stairway carved into the face of a cliff.\">\n\t\t<COND (<EQUAL? ,DAY 4>\n\t\t       <TELL\n\" You hear the lapping of water from below.\">)\n\t\t      (<EQUAL? ,DAY 5>\n\t\t       <TELL\n\" You can see ocean water splashing against the steps below you.\">)>\n\t\t<CRLF>)>>"
  },
  "COURTYARD-F": {
   "name": "COURTYARD-F",
   "file": "compone.zil",
   "line": 136,
   "endLine": 149,
   "source": "<ROUTINE COURTYARD-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are in the courtyard of an ancient stone edifice, vaguely reminiscent of\nthe castles you saw during your leave on Ramos Two. It has decayed to\nthe point where it can probably be termed a ruin. Openings lead north and west,\nand a stairway downward is visible to the south. \">\n\t\t<COND (<EQUAL? ,DAY 6 7>\n\t\t       <TELL\n\"From the direction of the stairway comes the sound of ocean surf.\">)\n\t\t      (<EQUAL? ,DAY 8>\n\t\t       <TELL\n\"Ocean water washes against the top few steps.\">)>\n\t\t<CRLF>)>>"
  },
  "WATER-LEVEL-F": {
   "name": "WATER-LEVEL-F",
   "file": "compone.zil",
   "line": 151,
   "endLine": 160,
   "source": "<ROUTINE WATER-LEVEL-F ()\n\t <COND (<EQUAL? ,HERE ,BALCONY>\n\t\t<COND (<EQUAL? ,DAY 1> ,CRAG)\n\t\t      (T ,UNDERWATER)>)\n\t       (<EQUAL? ,HERE ,WINDING-STAIR>\n\t\t<COND (<L? ,DAY 4> ,BALCONY)\n\t\t      (T ,UNDERWATER)>)\n\t       (<EQUAL? ,HERE ,COURTYARD>\n\t\t<COND (<L? ,DAY 6> ,WINDING-STAIR)\n\t\t      (T ,UNDERWATER)>)>>"
  },
  "REC-AREA-F": {
   "name": "REC-AREA-F",
   "file": "compone.zil",
   "line": 214,
   "endLine": 226,
   "source": "<ROUTINE REC-AREA-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a recreational facility of some sort. Games and tapes are scattered\nabout the room. Hallways head off to the east and south, and to the north is\na door which is \">\n\t\t<COND (<FSET? ,CONFERENCE-DOOR ,OPENBIT>\n\t\t       <TELL \"open\">)\n\t\t      (T\n\t\t       <TELL\n\"closed and locked. A dial on the door is currently set to \"\nN ,DIAL-NUMBER>)>\n\t\t<TELL \".\" CR>)>>"
  },
  "CONFERENCE-ROOM-F": {
   "name": "CONFERENCE-ROOM-F",
   "file": "compone.zil",
   "line": 244,
   "endLine": 251,
   "source": "<ROUTINE CONFERENCE-ROOM-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a fairly square room, almost filled by a round conference table.\nTo the south is a door which is \">\n\t\t<DDESC ,CONFERENCE-DOOR>\n\t\t<TELL\n\". To the north is a small room about the size of a phone booth.\" CR>)>>"
  },
  "COMBINATION-DIAL-F": {
   "name": "COMBINATION-DIAL-F",
   "file": "compone.zil",
   "line": 268,
   "endLine": 289,
   "source": "<ROUTINE COMBINATION-DIAL-F ()\n\t <COND (<VERB? EXAMINE>\n\t        <TELL\n\"The dial can be turned to any number between 0 and 1000.\" CR>)\n\t       (<AND <VERB? SET>\n\t\t     <EQUAL? ,PRSI ,INTNUM>>\n\t\t<COND (<FSET? ,COMBINATION-DIAL ,MUNGEDBIT>\n\t\t       <TELL\n\"The dial has somehow become fused and won't move.\" CR>)\n\t\t      (<EQUAL? ,P-NUMBER ,DIAL-NUMBER>\n\t\t       <TELL \"That's what the dial is set to now!\" CR>)\n\t\t      (<EQUAL? ,P-NUMBER ,NUMBER-NEEDED>\n\t\t       <SETG DIAL-NUMBER 0>\n\t\t       <FSET ,CONFERENCE-DOOR ,OPENBIT>\n\t\t       <TELL\n\"The door swings open, and the dial resets to 0.\" CR>)\n\t\t      (<G? ,P-NUMBER 1000>\n\t\t       <TELL\n\"The dial cannot be turned to a number that high.\" CR>)\n\t\t      (T\n\t\t       <SETG DIAL-NUMBER ,P-NUMBER>\n\t\t       <TELL \"The dial is now set to \" N ,P-NUMBER \".\" CR>)>)>>"
  },
  "CONFERENCE-DOOR-F": {
   "name": "CONFERENCE-DOOR-F",
   "file": "compone.zil",
   "line": 291,
   "endLine": 309,
   "source": "<ROUTINE CONFERENCE-DOOR-F ()\n\t<COND (<VERB? OPEN>\n\t       <COND (<FSET? ,CONFERENCE-DOOR ,OPENBIT>\n\t\t      <ALREADY-OPEN>)\n\t\t     (T\n\t\t      <COND (<EQUAL? ,HERE ,REC-AREA>\n\t\t\t     <TELL\n\"The door is locked. You probably have to turn the dial to some number to\nopen it.\" CR>)\n\t\t\t    (T\n\t\t\t     <TELL\n\"The door seems to be locked from the other side.\" CR>)>)>)\n\t      (<VERB? CLOSE>\n\t       <COND (<FSET? ,CONFERENCE-DOOR ,OPENBIT>\n\t\t      <FCLEAR ,CONFERENCE-DOOR ,OPENBIT>\n\t\t      <TELL\n\"The door closes and you hear a click as it locks.\" CR>)\n\t\t     (T\n\t\t      <IS-CLOSED>)>)>>"
  },
  "MESS-CORRIDOR-F": {
   "name": "MESS-CORRIDOR-F",
   "file": "compone.zil",
   "line": 496,
   "endLine": 508,
   "source": "<ROUTINE MESS-CORRIDOR-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a wide, east-west hallway with a large portal to the south. A\nsmall door to the north is \">\n\t\t<DDESC ,STORAGE-WEST-DOOR>\n\t\t<COND (<NOT ,PADLOCK-REMOVED>\n\t\t       <TELL \" and hooked with a simple steel padlock\">\n\t\t       <COND (<FSET? ,PADLOCK ,OPENBIT>\n\t\t\t      <TELL \" which hangs unlocked\">)\n\t\t\t     (T\n\t\t\t      <TELL \" which is also closed\">)>)>\n\t\t<TELL \".\" CR>)>>"
  },
  "STORAGE-WEST-DOOR-F": {
   "name": "STORAGE-WEST-DOOR-F",
   "file": "compone.zil",
   "line": 517,
   "endLine": 538,
   "source": "<ROUTINE STORAGE-WEST-DOOR-F ()\n\t <COND (<VERB? OPEN>\n\t\t<COND (<FSET? ,STORAGE-WEST-DOOR ,OPENBIT>\n\t\t       <ALREADY-OPEN>)\n\t\t      (,PADLOCK-REMOVED\n\t\t       <FSET ,STORAGE-WEST-DOOR ,OPENBIT>\n\t\t       <TELL \"Opened.\" CR>)\n\t\t      (T\n\t\t       <TELL \n\"The door cannot be opened until the padlock is removed.\" CR>)>)\n\t       (<VERB? CLOSE>\n\t\t<COND (<FSET? ,STORAGE-WEST-DOOR ,OPENBIT>\n\t\t       <FCLEAR ,STORAGE-WEST-DOOR ,OPENBIT>\n\t\t       <TELL \"The door is now closed.\" CR>)\n\t\t      (T\n\t\t       <IS-CLOSED>)>)\n\t       (<VERB? UNLOCK>\n\t\t<TELL \"The door itself isn't locked.\">\n\t\t<COND (<NOT <FSET? ,PADLOCK ,OPENBIT>>\n\t\t       <TELL\n\" It is the padlock on the door which is locked.\">)>\n\t\t<TELL CR>)>>"
  },
  "PADLOCK-F": {
   "name": "PADLOCK-F",
   "file": "compone.zil",
   "line": 551,
   "endLine": 591,
   "source": "<ROUTINE PADLOCK-F ()\n\t <COND (<EQUAL? ,HERE ,BRIG>\n\t\t<TELL\n\"You can't see or reach the lock from inside the cell.\" CR>)\n\t       (<AND <VERB? OPEN-WITH>\n\t\t     <EQUAL? ,PADLOCK ,PRSO>>\n\t\t<PERFORM ,V?UNLOCK ,PADLOCK ,PRSI>\n\t\t<RTRUE>)\n\t       (<VERB? UNLOCK OPEN>\n\t\t<COND (<NOT <FSET? ,PADLOCK ,OPENBIT>>\n\t\t       <COND (<NOT ,PRSI>\n\t\t\t      <TELL \"You can't open it with your hands.\" CR>)\n\t\t\t     (<EQUAL? ,PRSI ,KEY>\n\t\t\t      <COND (<FSET? ,PADLOCK ,MUNGEDBIT>\n\t\t\t             <TELL\n\"Tsk, tsk ... the padlock seems to be fused shut.\" CR>)\n\t\t\t\t    (T\n\t\t\t\t     <FSET ,PADLOCK ,OPENBIT>\n\t\t\t\t     <TELL \"The padlock springs open.\" CR>)>)\n\t\t\t     (T\n\t\t\t      <TELL \"That doesn't work.\" CR>)>)\n\t\t      (T\n\t\t       <TELL \"The padlock is already unlocked.\" CR>)>)\n\t       (<VERB? CLOSE LOCK>\n\t\t<COND (<FSET? ,PADLOCK ,OPENBIT>\n\t\t       <FCLEAR ,PADLOCK ,OPENBIT>\n\t\t       <TELL \"The padlock closes with a sharp click.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The padlock is already locked.\" CR>)>)\n\t       (<AND <VERB? TAKE>\n\t\t     <NOT ,PADLOCK-REMOVED>>\n\t\t<COND (<FSET? ,PADLOCK ,OPENBIT>\n\t\t       <SETG PADLOCK-REMOVED T>\n\t\t       <FCLEAR ,PADLOCK ,TRYTAKEBIT>\n\t\t       <FCLEAR ,PADLOCK ,NDESCBIT>\n\t\t       <RFALSE>)\n\t\t      (<NOT <FSET? ,PADLOCK ,OPENBIT>>\n\t\t       <TELL \"The padlock is locked to the door.\" CR>)>)\n\t       (<VERB? MUNG>\n\t\t<TELL\n\"And, as we go into the next round, it's Padlock 1, Adventurer 0...\" CR>)>>"
  },
  "CAN-F": {
   "name": "CAN-F",
   "file": "compone.zil",
   "line": 622,
   "endLine": 630,
   "source": "<ROUTINE CAN-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"This is a rather normal tin can. It is large and is labelled \\\"Spam\nand Egz.\\\"\" CR>)\n\t       (<VERB? OPEN>\n\t\t<TELL\n\"You certainly can't open it with your hands, and you don't seem to have\nfound a can opener yet.\" CR>)>> "
  },
  "LADDER-F": {
   "name": "LADDER-F",
   "file": "compone.zil",
   "line": 649,
   "endLine": 718,
   "source": "<ROUTINE LADDER-F ()\n\t <COND (<VERB? TAKE>\n\t\t<COND (,LADDER-EXTENDED\n\t\t       <TELL\n\"You can't possibly carry the ladder while it's extended.\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"It is a heavy-duty ladder built of sturdy aluminum tubing. It is currently \">\n\t\t<COND (,LADDER-EXTENDED\n\t\t       <TELL\n\"extended to its full length of about 8 meters, but could be collapsed to\na shorter length for easier carrying.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"collapsed and is around two-and-a-half meters long, but if extended would\nobviously be much longer.\" CR>)>)\n\t       (<VERB? OPEN>\n\t\t<COND (,LADDER-EXTENDED\n\t\t       <TELL \"The ladder is already extended.\" CR>)\n\t\t      (<OR <EQUAL? ,HERE ,STORAGE-EAST ,STORAGE-WEST ,BOOTH-2>\n\t\t\t   <EQUAL? ,HERE ,UPPER-ELEVATOR ,LOWER-ELEVATOR>>\n\t\t       <TELL\n\"You can't extend the ladder in this tiny space!\" CR>)\n\t\t      (<IN? ,LADDER ,ADVENTURER>\n\t\t       <TELL\n\"You couldn't possibly extend the ladder while you're holding it.\" CR>)\n\t\t      (T\n\t\t       <FSET ,LADDER ,TRYTAKEBIT>\n\t\t       <SETG LADDER-EXTENDED T>\n\t\t       <SETG C-ELAPSED 36>\n\t\t       <TELL\n\"The ladder extends to a length of around eight meters.\" CR>)>)\n\t       (<VERB? CLOSE>\n\t\t<COND (,LADDER-EXTENDED\n\t\t       <SETG C-ELAPSED 21>\n\t\t       <COND (,LADDER-FLAG\n\t\t\t      <SETG LADDER-FLAG <>>\n\t\t\t      <REMOVE ,LADDER>\n\t\t\t      <TELL\n\"As the ladder shortens it plunges into the rift.\" CR>)\n\t\t\t     (T\n\t\t\t      <SETG LADDER-EXTENDED <>>\n\t\t\t      <FCLEAR ,LADDER ,TRYTAKEBIT>\n\t\t\t      <TELL\n\"The ladder collapses to a length of around two-and-a-half meters.\" CR>)>)\n\t\t      (T\n\t\t       <TELL\n\"The ladder is already in its collapsed state.\" CR>)>)\n\t       (<AND <VERB? SPAN ATTRACT>\n\t\t     <EQUAL? ,PRSI ,RIFT>>\n\t\t<COND (,LADDER-FLAG\n\t\t       <TELL \"The ladder already spans the rift.\" CR>)\n\t\t      (T\n\t\t       <COND (,LADDER-EXTENDED\n\t\t\t      <SETG LADDER-FLAG T>\n\t\t\t      <FSET ,LADDER ,NDESCBIT>\n\t\t\t      <TELL\n\"The ladder swings out across the rift and comes to rest on the far edge,\nspanning the precipice.\" CR>)\n\t\t\t     (T\n\t\t\t      <REMOVE ,LADDER>\n\t\t\t      <TELL\n\"The ladder, far too short to reach the other edge of the rift, plunges into\nthe rift and is lost forever.\" CR>)>)>)\n\t       (<VERB? CLIMB-UP CLIMB-FOO>\n\t\t<COND (,LADDER-FLAG\n\t\t       <TELL \"You can't climb a horizontal ladder!\" CR>)\n\t\t      (<IN? ,LADDER ,ADVENTURER>\n\t\t       <TELL\n\"That would be a neat trick, considering that you're holding it.\" CR>)>)>>"
  },
  "MESS-HALL-F": {
   "name": "MESS-HALL-F",
   "file": "compone.zil",
   "line": 756,
   "endLine": 762,
   "source": "<ROUTINE MESS-HALL-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a large hall lined with tables and benches. An opening to the north\nleads back to the corridor. A door to the south is \">\n\t\t<DDESC ,KITCHEN-DOOR>\n\t\t<TELL \". Next to the door is a small slot.\" CR>)>>"
  },
  "KITCHEN-DOOR-F": {
   "name": "KITCHEN-DOOR-F",
   "file": "compone.zil",
   "line": 772,
   "endLine": 775,
   "source": "<ROUTINE KITCHEN-DOOR-F ()\n\t <COND (<VERB? OPEN>\n\t        <TELL\n\"A light flashes \\\"Pleez yuuz kitcin akses kard.\\\"\" CR>)>>"
  },
  "DISPENSER-F": {
   "name": "DISPENSER-F",
   "file": "compone.zil",
   "line": 815,
   "endLine": 834,
   "source": "<ROUTINE DISPENSER-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"This wall-mounted unit contains an octagonal niche beneath a spout. \">\n\t\t<COND (<IN? ,CANTEEN ,DISPENSER>\n\t\t       <TELL\n\"A canteen is resting in the niche, its mouth lying just below the spout. \">)>\n\t\t<TELL\n\"Above the spout is a button. The machine is labelled \\\"Hii Prooteen Likwid\nDispensur.\\\"\" CR>)\n\t       (<VERB? CLOSE>\n\t\t<NO-CLOSE>\n\t\t<RTRUE>)\n\t       (<VERB? PUT>\n\t\t<COND (<EQUAL? ,PRSO ,CANTEEN>\n\t\t       <MOVE ,CANTEEN ,DISPENSER>\n\t\t       <TELL \"The canteen fits snugly into the octagonal niche,\nits mouth resting just below the spout of the machine.\" CR>)\n\t\t      (T\n\t\t       <TELL \"It doesn't fit in the niche.\" CR>)>)>>"
  },
  "HIGH-PROTEIN-F": {
   "name": "HIGH-PROTEIN-F",
   "file": "compone.zil",
   "line": 844,
   "endLine": 881,
   "source": "<ROUTINE HIGH-PROTEIN-F (\"AUX\" (X <>))\n\t <COND (<VERB? EAT>\n\t\t<COND (<NOT <IN? ,CANTEEN ,ADVENTURER>>\n\t\t       <SETG PRSO ,CANTEEN>\n\t\t       <NOT-HOLDING>)\n\t\t      (T\n\t\t       <COND (<EQUAL? ,HUNGER-LEVEL 0>\n\t\t\t      <TELL ,NOT-HUNGRY CR>)\n\t\t\t     (T\n\t\t\t      <REMOVE ,HIGH-PROTEIN>\n\t\t\t      <SETG C-ELAPSED 15>\n\t\t\t      <SETG HUNGER-LEVEL 0>\n\t\t\t      <ENABLE <QUEUE I-HUNGER-WARNINGS 3600>>\n\t\t\t      <TELL\n\"Mmmm....that was good. It certainly quenched your thirst and satisfied your\nhunger.\" CR>)>)>)\n\t       (<AND <VERB? POUR>\n\t\t     <EQUAL? ,PRSO ,HIGH-PROTEIN>>\n\t\t<COND (<NOT <IN? ,CANTEEN ,ADVENTURER>>\n\t\t       <TELL \"Maybe if you were holding the canteen...\" CR>\n\t\t       <RTRUE>)\n\t\t      (<NOT ,PRSI>\n\t\t       <SETG PRSI ,GROUND>)>\n\t\t<COND (<EQUAL? ,PRSI ,FLASK>\n\t\t       <WORTHLESS-ACTION>)\n\t\t      (<EQUAL? ,PRSI ,FUNNEL-HOLE>\n\t\t       <COND (<IN? ,CHEMICAL-FLUID ,FLASK>\n\t\t\t      <SET X T>)>\n\t\t       <SETG CHEMICAL-REQUIRED 10>\n\t\t       <REMOVE ,HIGH-PROTEIN>\n\t\t       <PERFORM ,V?POUR ,CHEMICAL-FLUID ,FUNNEL-HOLE>\n\t\t       <COND (.X\n\t\t\t      <MOVE ,CHEMICAL-FLUID ,FLASK>)>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <REMOVE ,HIGH-PROTEIN>\n\t\t       <TELL\n\"The protein-rich fluid pours over the \" D ,PRSI \" and then dries up.\" CR>)>)>>"
  },
  "WORTHLESS-ACTION": {
   "name": "WORTHLESS-ACTION",
   "file": "compone.zil",
   "line": 883,
   "endLine": 886,
   "source": "<ROUTINE WORTHLESS-ACTION ()\n\t <TELL\n\"A worthless action -- and much too difficult for a poorly written program\nlike this one to handle.\" CR>>"
  },
  "LONG-HALL-F": {
   "name": "LONG-HALL-F",
   "file": "compone.zil",
   "line": 907,
   "endLine": 917,
   "source": "<ROUTINE LONG-HALL-F ()\n\t <TELL\n\"You walk down the long, featureless hallway for a long time. Finally,\nyou see \">\n\t <SETG C-ELAPSED 160>\n\t <COND (<EQUAL? ,HERE ,CORRIDOR-JUNCTION>\n\t\t<TELL \"some doorways ahead...\" CR CR>\n\t\t,DORM-CORRIDOR)\n\t       (T\n\t\t<TELL \"an intersection ahead...\" CR CR>\n\t\t,CORRIDOR-JUNCTION)>>"
  },
  "ADMIN-CORRIDOR-S-F": {
   "name": "ADMIN-CORRIDOR-S-F",
   "file": "compone.zil",
   "line": 936,
   "endLine": 942,
   "source": "<ROUTINE ADMIN-CORRIDOR-S-F (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-END>\n\t\t     <FSET? ,KEY ,INVISIBLE>\n\t\t     <PROB 20>>\n\t\t<TELL\n\"You catch, out of the corner of your eye, a glint of light from the direction\nof the floor.\" CR>)>>"
  },
  "CREVICE-F": {
   "name": "CREVICE-F",
   "file": "compone.zil",
   "line": 952,
   "endLine": 962,
   "source": "<ROUTINE CREVICE-F ()\n\t <COND (<VERB? REACH>\n\t\t<TELL \"The crevice is too narrow to reach into.\" CR>)\n\t       (<VERB? LOOK-INSIDE EXAMINE SEARCH>\n\t\t<COND (<FSET? ,KEY ,TOUCHBIT>\n\t\t       <TELL \"Nothing there but bunches of dust.\" CR>)\n\t\t      (T\n\t\t       <FCLEAR ,KEY ,INVISIBLE>\n\t\t       <TELL\n\"Lying at the bottom of the narrow crack, partly covered by layers of dust,\nis a shiny steel key!\" CR>)>)>>"
  },
  "KEY-F": {
   "name": "KEY-F",
   "file": "compone.zil",
   "line": 974,
   "endLine": 991,
   "source": "<ROUTINE KEY-F ()\n\t <COND (<AND <VERB? TAKE ZATTRACT MOVE>\n\t\t     <NOT <FSET? ,KEY ,TOUCHBIT>>>\n\t        <COND (<EQUAL? ,PRSI ,PLIERS>\n\t\t       <TELL\n\"These are heavy-duty pliers, too large to reach into this narrow crack.\" CR>)\n\t\t      (<EQUAL? ,PRSI ,MAGNET>\n\t\t       <PERFORM ,V?ATTRACT ,MAGNET ,KEY>\n\t\t       <RTRUE>)\n\t\t      (,PRSI\n\t\t       <TELL \"Nice try.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"Either the crevice is too narrow, or your fingers are too large.\" CR>)>)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSI ,CREVICE>>\n\t\t<TELL\n\"And you wonder why you're still only an Ensign Seventh Class?\" CR>)>>"
  },
  "ADMIN-CORRIDOR-F": {
   "name": "ADMIN-CORRIDOR-F",
   "file": "compone.zil",
   "line": 1008,
   "endLine": 1021,
   "source": "<ROUTINE ADMIN-CORRIDOR-F (RARG)\n\t <COND (<AND ,LADDER-FLAG\n\t\t     <EQUAL? .RARG ,M-ENTER>>\n\t\t<MOVE ,LADDER ,HERE>)\n\t       (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \n\"The hallway, in fact the entire building, has been rent apart here, presumably\nby seismic upheaval. You can see the sky through the severed roof above, and\nthe ground is thick with rubble. To the north is a gaping rift, at least eight\nmeters across and thirty meters deep. \">\n\t\t<COND (,LADDER-FLAG\n\t\t       <TELL \"A metal ladder spans the rift. \">)>\n\t\t<TELL\n\"A wide doorway, labelled \\\"Sistumz Moniturz,\\\" leads west.\" CR>)>>"
  },
  "ADMIN-CORRIDOR-N-F": {
   "name": "ADMIN-CORRIDOR-N-F",
   "file": "compone.zil",
   "line": 1039,
   "endLine": 1051,
   "source": "<ROUTINE ADMIN-CORRIDOR-N-F (RARG)\n\t <COND (<AND ,LADDER-FLAG\n\t\t     <EQUAL? .RARG ,M-ENTER>>\n\t\t<MOVE ,LADDER ,HERE>)\n\t       (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"The corridor ends here. Portals lead west, north, and east. Signs above these\nportals read, respectively, \\\"Administraativ Awfisiz,\\\" \\\"Tranzportaashun\nSuplii,\\\" and \\\"Plan Ruum.\\\" To the south is a wide rift\">\n\t\t<COND (,LADDER-FLAG\n\t\t       <TELL \", spanned by a metal ladder,\">)>\n\t\t<TELL\n\" separating this area from the rest of the building.\" CR>)>>"
  },
  "LADDER-EXIT-F": {
   "name": "LADDER-EXIT-F",
   "file": "compone.zil",
   "line": 1053,
   "endLine": 1065,
   "source": "<ROUTINE LADDER-EXIT-F ()\n\t <COND (,LADDER-FLAG\n\t\t<SETG C-ELAPSED 33>\n\t\t<TELL\n\"You slowly make your way across the swaying ladder. You can see sharp,\npointy rocks at the bottom of the rift, far below...\" CR CR>\n\t\t<COND (<EQUAL? ,HERE ,ADMIN-CORRIDOR-N>\n\t\t       ,ADMIN-CORRIDOR)\n\t\t      (T\n\t\t       ,ADMIN-CORRIDOR-N)>)\n\t       (T\n\t\t<TELL \"The rift is too wide to jump across.\" CR>\n\t\t<RFALSE>)>>"
  },
  "RIFT-F": {
   "name": "RIFT-F",
   "file": "compone.zil",
   "line": 1075,
   "endLine": 1094,
   "source": "<ROUTINE RIFT-F ()\n\t <COND (<VERB? LEAP>\n\t\t<JIGS-UP\n\"You get a brief (but much closer) view of the sharp and nasty rocks at\nthe bottom of the rift.\">)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,RIFT ,PRSI>>\n\t\t<COND (<EQUAL? ,PRSO ,LASER>\n\t\t\t      <DISABLE <INT I-WARMTH>>)>\n\t\t<REMOVE ,PRSO>\n\t\t<COND (<EQUAL? ,PRSO ,SCRUB-BRUSH>\n\t\t       <TELL\n\"You watch with tremendous satisfaction as the brush is lost forever.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"The \" D, PRSO \" sails gracefully into the rift.\" CR>)>)\n\t       (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<TELL\n\"The rift is at least eight meters wide and more than thirty meters deep. The\nbottom is covered with sharp and nasty rocks.\" CR>)>>"
  },
  "SYSTEMS-MONITORS-F": {
   "name": "SYSTEMS-MONITORS-F",
   "file": "compone.zil",
   "line": 1125,
   "endLine": 1129,
   "source": "<ROUTINE SYSTEMS-MONITORS-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a large room filled with tables full of strange equipment. \">\n\t\t<DESCRIBE-MONITORS>)>>"
  },
  "DESCRIBE-MONITORS": {
   "name": "DESCRIBE-MONITORS",
   "file": "compone.zil",
   "line": 1131,
   "endLine": 1161,
   "source": "<ROUTINE DESCRIBE-MONITORS ()\n\t <TELL\n\"The far wall is filled with a number of monitors. Of these,\nthe ones labelled \">\n\t <COND (,DEFENSE-FIXED\n\t\t<TELL \"PLANATEREE DEFENS, \">)>\n\t <COND (,COURSE-CONTROL-FIXED\n\t\t<TELL \"PLANATEREE KORS KUNTROOL, \">)>\n\t <COND (,COMM-FIXED\n\t\t<TELL \"KUMUUNIKAASHUNZ, \">)>\n\t <TELL\n\"LIIBREREE, REEAKTURZ, and LIIF SUPORT are green, but the one\">\n\t <COND (<NOT <AND ,DEFENSE-FIXED\n\t\t\t  ,COURSE-CONTROL-FIXED\n\t\t\t  ,COMM-FIXED>>\n\t\t<TELL \"s\">)>\n\t <TELL \" labelled \">\n\t <COND (<NOT ,DEFENSE-FIXED>\n\t\t<TELL \"PLANATEREE DEFENS, \">)>\n\t <COND (<NOT ,COURSE-CONTROL-FIXED>\n\t\t<TELL \"PLANATEREE KORS KUNTROOL, \">)>\n\t <COND (<NOT ,COMM-FIXED>\n\t\t<TELL \"KUMUUNIKAASHUNZ, \">)>\n\t <COND (<NOT <AND ,DEFENSE-FIXED\n\t\t\t  ,COURSE-CONTROL-FIXED\n\t\t\t  ,COMM-FIXED>>\n\t\t<TELL \"and \">)>\n\t <TELL \"PRAJEKT KUNTROOL indicate\">\n\t <COND (<AND ,DEFENSE-FIXED ,COURSE-CONTROL-FIXED ,COMM-FIXED>\n\t\t<TELL \"s\">)>\n\t <TELL \" a malfunctioning condition.\" CR>>"
  },
  "DESK-F": {
   "name": "DESK-F",
   "file": "compone.zil",
   "line": 1283,
   "endLine": 1287,
   "source": "<ROUTINE DESK-F ()\n\t <COND (<VERB? SEARCH EXAMINE>\n\t\t<TELL \"The desk has a drawer which is currently \">\n\t\t<DDESC ,PRSO>\n\t\t<TELL \".\" CR>)>>"
  },
  "OIL-CAN-F": {
   "name": "OIL-CAN-F",
   "file": "compone.zil",
   "line": 1358,
   "endLine": 1366,
   "source": "<ROUTINE OIL-CAN-F ()\n\t <COND (<VERB? POUR>\n\t\t<COND (<NOT ,PRSI>\n\t\t       <SETG PRSI ,GROUND>)>\n\t\t<PERFORM ,V?OIL ,PRSI>\n\t\t<RTRUE>)\n\t       (<VERB? EMPTY>\n\t\t<TELL\n\"Pretty much impossible -- you could only do that one drop at a time.\" CR>)>>"
  },
  "CARTON-F": {
   "name": "CARTON-F",
   "file": "compone.zil",
   "line": 1380,
   "endLine": 1383,
   "source": "<ROUTINE CARTON-F ()\n\t <COND (<VERB? CLOSE>\n\t\t<NO-CLOSE>\n\t\t<RTRUE>)>>"
  },
  "CRACKED-BOARD-F": {
   "name": "CRACKED-BOARD-F",
   "file": "compone.zil",
   "line": 1394,
   "endLine": 1397,
   "source": "<ROUTINE CRACKED-BOARD-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<EXAMINE-BOARD>\n\t\t<TELL \" This one looks as though it's been dropped.\" CR>)>>"
  },
  "GOOD-BEDISTOR-F": {
   "name": "GOOD-BEDISTOR-F",
   "file": "compone.zil",
   "line": 1424,
   "endLine": 1428,
   "source": "<ROUTINE GOOD-BEDISTOR-F ()\n\t <COND (<AND <VERB? TAKE>\n\t\t     ,COURSE-CONTROL-FIXED>\n\t\t<JIGS-UP\n\"Kerzap!! You should know better than to touch an active bedistor!\">)>>"
  },
  "REACTOR-ELEVATOR-DOOR-F": {
   "name": "REACTOR-ELEVATOR-DOOR-F",
   "file": "compone.zil",
   "line": 1488,
   "endLine": 1490,
   "source": "<ROUTINE REACTOR-ELEVATOR-DOOR-F ()\n\t <COND (<VERB? OPEN CLOSE>\n\t\t<TELL \"It won't budge.\" CR>)>>"
  },
  "I-REACTOR-DOOR-CLOSE": {
   "name": "I-REACTOR-DOOR-CLOSE",
   "file": "compone.zil",
   "line": 1492,
   "endLine": 1498,
   "source": "<ROUTINE I-REACTOR-DOOR-CLOSE ()\n\t <ENABLE <QUEUE I-REACTOR-DOOR-CLOSE -1>>\n\t <COND (<NOT <EQUAL? ,HERE ,REACTOR-ELEVATOR>>\n\t\t<FCLEAR ,REACTOR-ELEVATOR-DOOR ,OPENBIT>\n\t\t<COND (<EQUAL? ,HERE ,REACTOR-CONTROL>\n\t\t       <TELL CR \"The elevator door slides shut.\" CR>)>\n\t\t<DISABLE <INT I-REACTOR-DOOR-CLOSE>>)>>"
  },
  "FLASK-F": {
   "name": "FLASK-F",
   "file": "compone.zil",
   "line": 1543,
   "endLine": 1558,
   "source": "<ROUTINE FLASK-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The flask has a wide mouth and looks large enough to hold one or two liters.\nIt is made of glass, or perhaps some tough plastic\">\n\t\t<COND (<IN? ,CHEMICAL-FLUID ,FLASK>\n\t\t       <TELL \", and is filled with a milky white fluid\">)>\n\t\t<TELL \".\" CR>)\n\t       (<VERB? CLOSE>\n\t\t<NO-CLOSE>\n\t\t<RTRUE>)\n\t       (<AND <VERB? EMPTY>\n\t\t     <IN? ,CHEMICAL-FLUID ,FLASK>\n\t\t     <EQUAL?  ,PRSI ,FUNNEL-HOLE>>\n\t\t<PERFORM ,V?POUR ,CHEMICAL-FLUID ,FUNNEL-HOLE>\n\t\t<RTRUE>)>>"
  },
  "MAGNET-F": {
   "name": "MAGNET-F",
   "file": "compone.zil",
   "line": 1570,
   "endLine": 1593,
   "source": "<ROUTINE MAGNET-F ()\n\t <COND (<VERB? TAKE>\n\t\t<ENABLE <QUEUE I-MAGNET -1>>\n\t\t<RFALSE>)\n\t       (<VERB? ATTRACT PUT-ON>\n\t\t<COND (<AND <EQUAL? ,PRSO ,MAGNET>\n\t\t\t    <NOT <IN? ,MAGNET ,ADVENTURER>>>\n\t\t       <NOT-HOLDING>)\n\t\t      (<AND <FSET? ,KEY ,TOUCHBIT>\n\t\t\t    <EQUAL? ,PRSI ,KEY>>\n\t\t       <MOVE ,KEY ,ADVENTURER>\n\t\t       <TELL\n\"The key jumps against the ends of the magnet and sticks there. Proud of your\nfeat, you remove the key from the magnet.\" CR>)\n\t\t      (<AND <NOT <FSET? ,KEY ,TOUCHBIT>>\n\t\t\t    <EQUAL? ,PRSI ,KEY ,CREVICE>>\n\t\t       <MOVE ,KEY ,ADVENTURER>\n\t\t       <FCLEAR ,KEY ,INVISIBLE>\n\t\t       <FCLEAR ,KEY ,TRYTAKEBIT>\n\t\t       <FSET ,KEY ,TOUCHBIT>\n\t\t       <TELL \n\"With a spray of dust and a loud clank, a piece of metal leaps from the\ncrevice and affixes itself to the magnet. It is a steel key! With a tug,\nyou remove the key from the magnet.\" CR>)>)>>"
  },
  "I-MAGNET": {
   "name": "I-MAGNET",
   "file": "compone.zil",
   "line": 1595,
   "endLine": 1613,
   "source": "<ROUTINE I-MAGNET ()\n\t <COND (<IN? ,MAGNET ,ADVENTURER>\n\t\t<COND (<HELD? ,KITCHEN-CARD>\n\t\t       <FSET ,KITCHEN-CARD ,SCRAMBLEDBIT>)\n\t\t      (<HELD? ,SHUTTLE-CARD>\n\t\t       <FSET ,SHUTTLE-CARD ,SCRAMBLEDBIT>)\n\t\t      (<HELD? ,TELEPORTATION-CARD>\n\t\t       <FSET ,TELEPORTATION-CARD ,SCRAMBLEDBIT>)\n\t\t      (<HELD? ,UPPER-ELEVATOR-CARD>\n\t\t       <FSET ,UPPER-ELEVATOR-CARD ,SCRAMBLEDBIT>)\n\t\t      (<HELD? ,LOWER-ELEVATOR-CARD>\n\t\t       <FSET ,LOWER-ELEVATOR-CARD ,SCRAMBLEDBIT>)\n\t\t      (<HELD? ,MINI-CARD>\n\t\t       <FSET ,MINI-CARD ,SCRAMBLEDBIT>)\n\t\t      (<HELD? ,ID-CARD>\n\t\t       <FSET ,ID-CARD ,SCRAMBLEDBIT>)>)\n\t       (T\n\t\t<DISABLE <INT I-MAGNET>>)>\n\t <RFALSE>>"
  },
  "MACHINE-SHOP-F": {
   "name": "MACHINE-SHOP-F",
   "file": "compone.zil",
   "line": 1637,
   "endLine": 1668,
   "source": "<ROUTINE MACHINE-SHOP-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This room is probably some sort of machine shop filled with a variety\nof unusual machines. Doorways lead north, east, and west.|\n|\nStanding against the rear wall is a large dispensing machine with a\nspout. \">\n\t\t<COND (<NOT <EQUAL? ,SPOUT-PLACED ,GROUND>>\n\t\t       <TELL\n\"Sitting under the spout is \">\n\t\t       <COND (<FSET? ,SPOUT-PLACED ,VOWELBIT>\n\t\t\t      <TELL \"an \">)\n\t\t\t     (T\n\t\t\t      <TELL \"a \">)>\n\t\t       <TELL D ,SPOUT-PLACED\". \">)>\n\t\t<TELL\n\"The dispenser is lined with brightly colored buttons. The first four\nbuttons, labelled \\\"KUULINTS 1 - 4\\\", are colored red, blue, green, and\nyellow. The next three buttons, labelled \\\"KATALISTS 1 - 3\\\", are colored\ngray, brown, and black. The last two buttons are both white. One of\nthese is square and says \\\"BAAS.\\\" The other white button is round and\nsays \\\"ASID.\\\"\" CR>)\n\t       (<AND <EQUAL? .RARG ,M-END>\n\t\t     <EQUAL? ,SPOUT-PLACED ,GROUND>\n\t\t     <IN? ,FLOYD ,HERE>\n\t\t     <FSET? ,FLOYD ,RLANDBIT>\n\t\t     <PROB 15>>\n\t\t<SETG FLOYD-SPOKE T>\n\t\t<TELL\n\"Floyd pushes one of the dispenser buttons. Fluid pours from the spout and\nsplashes across the floor. Floyd jumps up and down, giggling.\" CR>)>>"
  },
  "CHEMICAL-DISPENSER-F": {
   "name": "CHEMICAL-DISPENSER-F",
   "file": "compone.zil",
   "line": 1688,
   "endLine": 1698,
   "source": "<ROUTINE CHEMICAL-DISPENSER-F ()\n\t <COND (<AND <VERB? PUT-UNDER>\n\t\t     <EQUAL? ,PRSI ,CHEMICAL-DISPENSER>>\n\t\t<COND (<EQUAL? ,SPOUT-PLACED ,GROUND>\n\t\t       <MOVE ,PRSO ,HERE>\n\t\t       <TELL\n\"The \" D ,PRSO \" is now sitting under the spout.\" CR>\n\t\t       <SETG SPOUT-PLACED ,PRSO>)\n\t\t      (T\n\t\t       <TELL\n\"The \" D ,SPOUT-PLACED \" is already resting under the spout.\" CR>)>)>>"
  },
  "CHEM-BUTTON-F": {
   "name": "CHEM-BUTTON-F",
   "file": "compone.zil",
   "line": 1795,
   "endLine": 1828,
   "source": "<ROUTINE CHEM-BUTTON-F ()\n\t <COND (<VERB? PUSH>\n\t\t<COND (<FSET? ,CHEMICAL-DISPENSER ,MUNGEDBIT>\n\t\t       <TELL\n\"The machine coughs a few times, but nothing else happens.\" CR>)\n\t\t      (<EQUAL? ,SPOUT-PLACED ,FLASK>\n\t\t       <COND (<IN? ,CHEMICAL-FLUID ,FLASK>\n\t\t\t      <TELL\n\"Another dose of the chemical fluid pours out of the spout, splashes over\nthe already-full flask, spills onto the floor, and dries up.\" CR>)\n\t\t\t     (T\n\t\t\t      <MOVE ,CHEMICAL-FLUID ,FLASK>\n\t\t\t      <TELL \"The flask fills with some \">\n\t\t\t      <SETG CHEMICAL-FLAG <GETP ,PRSO ,P?C-MOVE>>\n\t\t\t      <TELL <GET ,COLOR-LTBL <GETP ,PRSO ,P?C-MOVE>>>\n\t\t\t      <TELL\n\" chemical fluid. The fluid gradually turns milky white.\" CR>)>)\n\t\t      (<AND <EQUAL? ,SPOUT-PLACED ,CANTEEN>\n\t\t\t    <FSET? ,CANTEEN ,OPENBIT>>\n\t\t       <TELL\n\"Chemical fluid gushes from the spout. Unfortunately, the mouth of the canteen\nis very narrow, and the fluid just splashes over it.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"Some sort of chemical fluid pours out of the spout, spills all over the \"\nD ,SPOUT-PLACED \", and dries up.\" CR>\n\t\t       <COND (<AND <EQUAL? ,PRSO ,ROUND-WHITE-BUTTON\n\t\t\t\t\t         ,SQUARE-WHITE-BUTTON>\n\t\t\t\t   <OR <FSET? ,SPOUT-PLACED ,ACIDBIT>\n\t\t\t\t       <FSET? ,SPOUT-PLACED ,MUNGBIT>>>\n\t\t\t      <SETG CHEMICAL-FLAG 9>\n\t\t\t      <PERFORM ,V?POUR ,CHEMICAL-FLUID ,SPOUT-PLACED>\n\t\t\t      <RTRUE>)>\n\t\t       <RTRUE>)>)>>"
  },
  "FLOYD-F": {
   "name": "FLOYD-F",
   "file": "compone.zil",
   "line": 1860,
   "endLine": 2110,
   "source": "<ROUTINE FLOYD-F (\"AUX\" X N)\n\t <COND (<EQUAL? ,FLOYD ,WINNER>\n\t\t<SETG FLOYD-SPOKE T>\n\t\t<COND (<AND <VERB? GIVE>\n\t\t\t    <EQUAL? ,PRSI ,ME>>\n\t\t       <SETG WINNER ,ADVENTURER>\n\t\t       <PERFORM ,V?ASK-FOR ,FLOYD ,PRSO>\n\t\t       <RTRUE>)\n\t\t      (<AND <VERB? SGIVE>\n\t\t\t    <EQUAL? ,PRSO ,ME>>\n\t\t       <SETG WINNER ,ADVENTURER>\n\t\t       <PERFORM ,V?ASK-FOR ,FLOYD ,PRSI>\n\t\t       <RTRUE>)\n\t\t      (<VERB? WALK>\n\t\t       <COND (<AND <EQUAL? ,HERE ,REPAIR-ROOM>\n\t\t\t\t   <EQUAL? ,PRSO ,P?NORTH ,P?IN>>\n\t\t\t      <FLOYD-THROUGH-HOLE>)\n\t\t\t     (<AND <EQUAL? ,HERE ,BIO-LOCK-EAST>\n\t\t\t\t   <EQUAL? ,PRSO ,P?EAST>>\n\t\t\t      <FLOYD-INTO-LAB>)\n\t\t\t     (<AND <EQUAL? ,HERE ,RADIATION-LOCK-EAST>\n\t\t\t\t   <EQUAL? ,PRSO ,P?EAST>>\n\t\t\t      <TELL\"\\\"After you.\\\"\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"Floyd looks slightly embarrassed. \\\"You know me and my sense of direction.\\\"\nThen he looks up at you with wide, trusting eyes. \\\"Tell Floyd\na story?\\\"\" CR>)>\n\t\t       <COND (<FLUSH>\n\t\t\t      <RFATAL>)>\n\t\t       <RTRUE>)\n\t\t      (<VERB? THROUGH>\n\t\t       <FLOYDS-FAMOUS-DOOR-ROUTINE>\n\t\t       <COND (<FLUSH> <RFATAL>)>\n\t\t       <RTRUE>)\n\t\t      (<AND <VERB? TAKE>\n\t\t\t    <EQUAL? ,PRSO ,GOOD-BOARD>>\n\t\t       <COND (<NOT <IN? ,GOOD-BOARD ,ROBOT-HOLE>>\n\t\t\t      <TELL\n\"Floyd looks half-bored and half-annoyed. \"\"Floyd already did that.\nHow about some leap-frogger?\\\"\" CR>)\n\t\t\t     (,BOARD-REPORTED\n\t\t\t      <MOVE ,GOOD-BOARD ,ADVENTURER>\n\t\t\t      <FCLEAR ,GOOD-BOARD ,NDESCBIT>\n\t\t\t      <FSET ,GOOD-BOARD ,TAKEBIT>\n\t\t\t      <SETG C-ELAPSED 22>\n\t\t\t      <TELL\n\"Floyd shrugs. \\\"If you say so.\\\" He vanishes for a few minutes, and returns\nholding the fromitz board. It seems to be in good shape. He tosses it toward\nyou, and you just manage to catch it before it smashes.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"\\\"Huh?\\\" asks Floyd. \\\"What fromitz board?\\\"\" CR>)>)\n\t\t      (<AND <VERB? FOLLOW>\n\t\t\t    <EQUAL? ,PRSO ,ME>>\n\t\t       <TELL \"\\\"Okay!\\\"\" CR>)\n\t\t      (<VERB? HELLO>\n\t\t       <SETG WINNER ,ADVENTURER>\n\t\t       <PERFORM ,V?HELLO ,FLOYD>\n\t\t       <RTRUE>)\n\t\t      (<VERB? DROP>\n\t\t       <COND (<IN? ,PRSO ,FLOYD>\n\t\t\t      <COND (<PROB 50>\n\t\t\t\t     <MOVE ,PRSO ,HERE>\n\t\t\t\t     <TELL\n\"Floyd shrugs and drops the \" D ,PRSO \".\" CR>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL\n\"Floyd clutches the \" D ,PRSO \" even more tightly. \\\"Floyd won't,\\\" he says\ndefiantly.\" CR>)>)\n\t\t\t     (T\n\t\t\t      <FLOYD-NOT-HAVE>)>)\n\t\t      (<AND <VERB? READ>\n\t\t\t    <PRSO? ,DIARY>>\n\t\t       <SETG WINNER ,ADVENTURER>\n\t\t       <PERFORM ,V?SHOW ,DIARY ,FLOYD>\n\t\t       <SETG WINNER ,FLOYD>\n\t\t       <RTRUE>) \n\t\t      (T\n\t\t       <TELL\n\"Floyd whines, \\\"Enough talking! Let's play Hider-and-Seeker.\\\"\" CR>\n\t\t       <RFATAL>)>)\n\t       (<VERB? CLOSE>\n\t\t<TELL \"Huh?\" CR>)\n\t       (<VERB? LOOK-INSIDE REACH>\n\t\t<PERFORM ,V?OPEN ,FLOYD>\n\t\t<RTRUE>)\n\t       (<FSET? ,FLOYD ,RLANDBIT>\n\t\t<SETG FLOYD-SPOKE T>\n\t\t<COND (<VERB? LAMP-ON>\n\t\t       <TELL \"He's already been activated.\" CR>)\n\t\t      (<VERB? LAMP-OFF>\n\t\t       <FCLEAR ,FLOYD ,RLANDBIT>\n\t\t       <FCLEAR ,FLOYD ,ACTORBIT>\n\t\t       <DISABLE <INT I-FLOYD>>\n\t\t       <TELL\n\"Floyd, shocked by this betrayal from his newfound friend, whimpers\nand keels over\">\n\t\t       <COND (<FIRST? ,FLOYD>\n\t\t\t      <TELL\n\", dropping what he was carrying.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \".\" CR>)>\n\t\t       <SET X <FIRST? ,FLOYD>>\n\t\t       <REPEAT ()\n\t\t\t       <COND (.X\n\t\t\t\t      <SET N <NEXT? .X>>\n\t\t\t\t      <MOVE .X ,HERE>\n\t\t\t\t      <SET X .N>)\n\t\t\t\t     (T\n\t\t\t\t      <RETURN>)>>)\n\t\t      (<VERB? EXAMINE>\n\t\t       <TELL\n\"From its design, the robot seems to be of the multi-purpose sort. It is\nslightly cross-eyed, and its mechanical mouth forms a lopsided grin.\" CR>)\n\t\t      (<VERB? KISS>\n\t\t       <TELL \n\"You receive a painful electric shock.\" CR>)\n\t\t      (<VERB? SCOLD>\n\t\t       <TELL\n\"Floyd looks defensive. \\\"What did Floyd do wrong?\\\"\" CR>)\n\t\t      (<VERB? PLAY-WITH>\n\t\t       <SETG C-ELAPSED 30>\n\t\t       <ENABLE <QUEUE I-FLOYD 1>>\n\t\t       <TELL\n\"You play with Floyd for several centichrons until you drop to the floor,\nexhausted. Floyd pokes at you gleefully. \\\"C'mon! Let's play some more!\\\"\" CR>)\n\t\t      (<VERB? LISTEN>\n\t\t       <TELL \"Floyd is babbling about this and that.\" CR>)\n\t\t      (<AND <VERB? TAKE>\n\t\t\t    <EQUAL? ,PRSO ,FLOYD>>\n\t\t       <TELL\n\"You manage to lift Floyd a few inches off the ground, but he is too heavy\nand you drop him suddenly. Floyd gives a surprised squeal and moves\na respectable distance away.\" CR>)\n\t\t      (<VERB? ATTACK MUNG>\n\t\t       <TELL\n\"Floyd starts dashing around the room. \\\"Oh boy oh boy oh boy! I haven't played\nChase and Tag for years! You be It! Nah, nah!\\\"\"CR>)\n\t\t      (<VERB? KICK SHAKE>\n\t\t       <TELL\n\"\\\"Why you do that?\\\" Floyd whines. \\\"I think a wire now shaken loose.\\\"\nHe goes off into a corner and sulks.\" CR>)\n\t\t      (<VERB? HELLO TALK>\n\t\t       <TELL\n\"\\\"Hi!\\\" Floyd grins and bounces up and down.\" CR>)\n\t\t      (<VERB? SEARCH SCRUB OPEN>\n\t\t       <TELL\n\"Floyd giggles and pushes you away. \\\"You're tickling Floyd!\\\" He clutches at\nhis side panels, laughing hysterically. Oil drops stream from his eyes.\" CR>)\n\t\t      (<AND <VERB? GIVE PUT>\n\t\t\t    <EQUAL? ,FLOYD ,PRSI>>\n\t\t       <COND (<EQUAL? ,PRSO ,LAZARUS-PART>\n\t\t\t      <REMOVE ,FLOYD>\n\t\t\t      <SETG FLOYD-FOLLOW <>>\n\t\t\t      <MOVE ,LAZARUS-PART ,HERE>\n\t\t\t      <ENABLE <QUEUE I-FLOYD 40>>\n\t\t\t      <TELL\n\"At first, Floyd is all grins because of your gift. Then, he realizes what\nit is, begins weeping, drops the breastplate, and rushes out of the room.\" CR>)\n\t\t\t     (<EQUAL? ,PRSO ,RED-GOO ,GREEN-GOO ,BROWN-GOO>\n\t\t\t      <TELL\n\"Floyd looks at the goo. \\\"Yech! Got any Number Seven Heavy Grease?\\\"\" CR>)\n\t\t\t     (<OR <FIRST? ,FLOYD>\n\t\t\t\t  <PROB 25>>\n\t\t\t      <MOVE ,PRSO ,HERE>\n\t\t\t      <TELL\n\"Floyd examines the \" D, PRSO \", shrugs, and drops \">\n\t\t\t      <COND (<EQUAL? ,PRSO ,PLIERS>\n\t\t\t\t     <TELL \"them.\" CR>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL \"it.\" CR>)>)\n\t\t\t     (T\n\t\t\t      <MOVE ,PRSO ,FLOYD>\n\t\t\t      <TELL\n\"\\\"Neat!\\\" exclaims Floyd. He thanks you profusely.\" CR>)>)\n\t\t      (<AND <VERB? SHOW>\n\t\t\t    <EQUAL? ,FLOYD ,PRSI>>\n\t\t       <COND (<AND <EQUAL? ,PRSO ,PRINT-OUT>\n\t\t\t\t   <NOT ,COMPUTER-FLAG>>\n\t\t\t      <COMPUTER-ACTION>)\n\t\t\t     (<EQUAL? ,PRSO ,ROBOT-HOLE>\n\t\t\t      <FLOYD-THROUGH-HOLE>)\n\t\t\t     (<EQUAL? ,PRSO ,DIARY>\n\t\t\t      <TELL \"Floyd looks at you earnestly. \\\"Floyd\nwould never read someone else's diary!\\\" He stops and thinks a moment, then\nadds, \\\"Well, at least not a friend's diary.\\\"\" CR>)\n\t\t\t     (<AND <EQUAL? ,HERE ,REC-AREA>\n\t\t\t\t   <EQUAL? ,PRSO ,PSEUDO-OBJECT>>\n\t\t\t      <TELL\n\"\\\"Too intellectual for Floyd. Any paddleball sets around?\\\"\" CR>)\n\t\t\t     (<OR <EQUAL? ,PRSO ,ID-CARD ,SHUTTLE-CARD>\n\t\t\t\t  <EQUAL? ,PRSO ,KITCHEN-CARD\n\t\t\t\t\t        ,UPPER-ELEVATOR-CARD>>\n\t\t\t      <TELL\n\"Floyd scratches his head. \\\"Aren't those things usually blue?\\\"\" CR>)\n\t\t\t     (<AND <EQUAL? ,PRSO ,LOWER-ELEVATOR-CARD>\n\t\t\t\t   <NOT ,CARD-REVEALED>>\n\t\t\t      <SETG CARD-REVEALED T>\n\t\t\t      <TELL\n\"\\\"I've got one just like that!\\\" says Floyd. He looks through several\nof his compartments, then glances at you suspiciously.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"Floyd looks over the \" D, PRSO \". \\\"Can you play any games with it?\\\"\nhe asks.\" CR>)>)\n\t\t      (<VERB? RUB>\n\t\t       <TELL \"Floyd gives a contented sigh.\" CR>)\n\t\t      (<VERB? SMELL>\n\t\t       <TELL\n\"Floyd smells faintly of ozone and light machine oil.\" CR>)\n\t\t      (<VERB? ASK-FOR>\n\t\t       <COND (<IN? ,PRSI ,FLOYD>\n\t\t\t      <MOVE ,PRSI ,ADVENTURER>\n\t\t\t      <TELL\n\"\\\"Okay,\\\" says Floyd, handing you the \" D, PRSI \", \\\"but only\nbecause you're Floyd's best friend.\\\"\" CR>)\n\t\t\t     (T\n\t\t\t      <FLOYD-NOT-HAVE>)>)>)\n\t       (T\n\t\t<COND (<VERB? LAMP-ON>\n\t\t       <COND (,FLOYD-INTRODUCED\n\t\t\t      <ENABLE <QUEUE I-FLOYD -1>>)\n\t\t\t     (T\n\t\t\t      <ENABLE <QUEUE I-FLOYD 25>>\n\t\t\t      <TELL \"Nothing happens.\" CR>\n\t\t\t      <COND (<NOT ,FLOYD-SCORE-FLAG>\n\t\t\t\t     <SETG FLOYD-SCORE-FLAG T>\n\t\t\t\t     <SETG SCORE <+ ,SCORE 2>>)>\n\t\t\t      <RTRUE>)>)\n\t\t      (<VERB? LAMP-OFF>\n\t\t       <TELL \"The robot doesn't seem to be on.\" CR>)\n\t\t      (<VERB? EXAMINE>\n\t\t       <TELL\n\"The deactivated robot is leaning against the wall, its head lolling to the\nside. It is short, and seems to be equipped for general-purpose work. It has\napparently been turned off.\" CR>)\n\t\t      (<VERB? SEARCH OPEN>\n\t\t       <COND (<AND <NOT ,CARD-REVEALED>\n\t\t\t\t   <NOT ,CARD-STOLEN>>\n\t\t\t      <FCLEAR ,LOWER-ELEVATOR-CARD ,INVISIBLE>\n\t\t\t      <MOVE ,LOWER-ELEVATOR-CARD ,ADVENTURER>\n\t\t\t      <SCORE-OBJ ,LOWER-ELEVATOR-CARD>\n\t\t\t      <SETG CARD-STOLEN T>\n\t\t\t      <TELL\n\"In one of the robot's compartments you find and take a magnetic-striped card\nembossed \\\"Loowur Elavaatur Akses Kard.\\\"\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"Your search discovers nothing in the robot's compartments except a\nsingle crayon which you leave where you found it.\" CR>)>)>)>>"
  },
  "FLOYDS-FAMOUS-DOOR-ROUTINE": {
   "name": "FLOYDS-FAMOUS-DOOR-ROUTINE",
   "file": "compone.zil",
   "line": 2112,
   "endLine": 2120,
   "source": "<ROUTINE FLOYDS-FAMOUS-DOOR-ROUTINE ()\n\t <COND (<EQUAL? ,PRSO ,ROBOT-HOLE>\n\t\t<FLOYD-THROUGH-HOLE>)\n\t       (<EQUAL? ,PRSO ,BIO-DOOR-EAST>\n\t\t<FLOYD-INTO-LAB>)\n\t       (<FSET? ,PRSO ,DOORBIT>\n\t\t<TELL \"\\\"You go first,\\\" says Floyd.\" CR>)\n\t       (T\n\t\t<TELL \"Floyd scratches his head and looks at you.\" CR>)>>"
  },
  "FLUSH": {
   "name": "FLUSH",
   "file": "compone.zil",
   "line": 2122,
   "endLine": 2130,
   "source": "<ROUTINE FLUSH ()\n\t <COND (,P-CONT\n\t\t<SETG P-CONT <>>\n\t\t<TELL CR\n\"Floyd scratches his head and looks at you. \\\"What else were you saying to\nFloyd? I can't remember.\\\"\" CR>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "FLOYD-INTO-LAB": {
   "name": "FLOYD-INTO-LAB",
   "file": "compone.zil",
   "line": 2132,
   "endLine": 2137,
   "source": "<ROUTINE FLOYD-INTO-LAB ()\n\t <COND (,FLOYD-WAITING\n\t\t<TELL \"\\\"As soon as you open the door, dummy.\\\"\" CR>)\n\t       (T\n\t\t<TELL\n\"\\\"Are you kidding? Floyd not going in THERE without a good reason.\\\"\" CR>)>>"
  },
  "FLOYD-NOT-HAVE": {
   "name": "FLOYD-NOT-HAVE",
   "file": "compone.zil",
   "line": 2139,
   "endLine": 2140,
   "source": "<ROUTINE FLOYD-NOT-HAVE ()\n\t <TELL \"\\\"Floyd does not one of those have!\\\"\" CR>>"
  },
  "FLOYD-COMES-ALIVE": {
   "name": "FLOYD-COMES-ALIVE",
   "file": "compone.zil",
   "line": 2152,
   "endLine": 2175,
   "source": "<ROUTINE FLOYD-COMES-ALIVE (\"AUX\" FOO)\n\t <COND (<IN? ,FLOYD ,HERE>\n\t\t<COND (,FLOYD-REACTIVATED\n\t\t       <SETG FLOYD-SPOKE T>\n\t\t       <TELL\n\"Floyd jumps to his feet, hopping mad. \\\"Why you turn Floyd off?\\\" he\nasks accusingly.\" CR>)\n\t\t      (T\n\t\t       <SETG FLOYD-INTRODUCED T>\n\t\t       <SETG FLOYD-SPOKE T>\n\t\t       <CRLF>\n\t\t       <TELL \n\"Suddenly, the robot comes to life and its head starts swivelling about.\nIt notices you and bounds over. \\\"Hi! I'm B-19-7, but to everyperson I'm\ncalled Floyd. Are you a doctor-person or a planner-person? \">\n\t\t       <COND (<SET FOO <FIRST? ,ADVENTURER>>\n\t\t\t      <TELL\n\"That's a nice \" D .FOO \" you are having there. \">)>\n\t\t       <TELL\n\"Let's play Hider-and-Seeker you with me.\\\"\" CR>)>)>\n\t <FSET ,FLOYD ,RLANDBIT>\n\t <FSET ,FLOYD ,ACTORBIT>\n\t <FSET ,FLOYD ,TOUCHBIT>\n\t <SETG FLOYD-REACTIVATED T>>"
  },
  "I-FLOYD": {
   "name": "I-FLOYD",
   "file": "compone.zil",
   "line": 2177,
   "endLine": 2289,
   "source": "<ROUTINE I-FLOYD ()\n\t <ENABLE <QUEUE I-FLOYD -1>>\n\t <COND (<NOT <FSET? ,FLOYD ,RLANDBIT>>\n\t\t<FSET ,FLOYD ,ACTORBIT>\n\t\t<FLOYD-COMES-ALIVE>)\n\t       (<IN? ,FLOYD ,HERE>\n\t\t<COND (<NOT ,FLOYD-INTRODUCED>\n\t\t       <SETG FLOYD-INTRODUCED T>\n\t\t       <TELL CR\n\"The robot, now apparently active, notices you enter. \\\"Hi,\\\"\nhe says. \\\"I'm Floyd!\\\"\" CR>)\n\t\t      (<AND ,FLOYD-FOLLOW\n\t\t\t    <FSET? ,HERE ,FLOYDBIT>\n\t\t\t    <PROB 6>>\n\t\t       <REMOVE ,FLOYD>\n\t\t       <SETG FLOYD-FOLLOW <>>\n\t\t       <TELL CR\n\"Floyd says \\\"Floyd going exploring. See you later.\\\"\nHe glides out of the room.\" CR>)\n\t\t      (T\n\t\t       <SETG FLOYD-FOLLOW T>\n\t\t       <COND (<AND <PROB 40>\n\t\t\t\t   <NOT ,FLOYD-SPOKE>>\n\t\t\t      <TELL \"Floyd \">\n\t\t\t      <TELL <PICK-ONE ,FLOYDISMS>>\n\t\t\t      <TELL \".\" CR>\n\t\t\t      <RTRUE>)>)>)\n\t       (T\t;\"Floyd is active but not present\"\n\t\t<COND (<AND ,FLOYD-FOLLOW <PROB 80>>\n\t\t       <COND (<IN? ,LAZARUS-PART ,HERE>\n\t\t\t      <SETG FLOYD-FOLLOW <>>\n\t\t\t      <TELL CR\n\"Floyd starts to follow you but notices the Lazarus breast plate.\nHe sniffs and leaves the room.\" CR>\n\t\t\t      <RTRUE>)>\n\t\t       <MOVE ,FLOYD ,HERE>\n\t\t       <TELL \"Floyd follows you.\" CR>\n\t\t       <KLUDGE>)\n\t\t      (T\n\t\t       <SETG FLOYD-FOLLOW <>>\n\t\t       <COND (<EQUAL? ,HERE ,BOOTH-1 ,BOOTH-2 ,BOOTH-3>\n\t\t\t      <MOVE ,FLOYD ,HERE>\n\t\t\t      <COND (<NOT ,FLOYD-INTRODUCED>\n\t\t\t\t     <CRLF>\n\t\t\t\t     <CALL-ME-FLOYD>\n\t\t\t\t     <RTRUE>)>\n\t\t\t      <TELL CR\n\"Floyd scampers into the booth. \\\"Oooo,\nthis is a tiny room,\\\" he remarks.\" CR>)\n\t\t\t     (<OR\n\t\t\t       <AND <EQUAL? ,HERE ,BIO-LOCK-EAST\n\t\t\t\t                  ,BIO-LOCK-WEST>\n\t\t\t\t    <NOT ,FLOYD-GAVE-UP>>\n\t\t\t       <EQUAL? ,HERE ,RADIATION-LOCK-EAST\n\t\t\t\t             ,RADIATION-LOCK-WEST>>\n\t\t\t      <MOVE ,FLOYD ,HERE>\n\t\t\t      <COND (<NOT ,FLOYD-INTRODUCED>\n\t\t\t\t     <CRLF>\n\t\t\t\t     <CALL-ME-FLOYD>\n\t\t\t\t     <RTRUE>)>\n\t\t\t      <TELL CR\n\"Floyd glides after you. \\\"Is this...is this a squash court?\\\" he asks.\" CR>)\n\t\t\t     (<OR <EQUAL? ,HERE ,ALFIE-CONTROL-EAST\n\t\t\t\t\t        ,ALFIE-CONTROL-WEST>\n\t\t\t          <EQUAL? ,HERE ,BETTY-CONTROL-EAST\n\t\t\t\t\t        ,BETTY-CONTROL-WEST>\n\t\t\t          <EQUAL? ,HERE ,UPPER-ELEVATOR ,LOWER-ELEVATOR\n\t\t\t\t\t        ,REACTOR-ELEVATOR>\n\t\t\t\t  <AND <EQUAL? ,HERE ,MESS-HALL>\n\t\t\t\t       <IN? ,FLOYD ,KITCHEN>>>\n\t\t\t      <MOVE ,FLOYD ,HERE>\n\t\t\t      <COND (<NOT ,FLOYD-INTRODUCED>\n\t\t\t\t     <CRLF>\n\t\t\t\t     <CALL-ME-FLOYD>\n\t\t\t\t     <RTRUE>)>\n\t\t\t      <TELL CR \"Floyd bounces into the \">\n\t\t\t      <COND (<EQUAL? ,HERE ,UPPER-ELEVATOR\n\t\t\t\t             ,LOWER-ELEVATOR ,REACTOR-ELEVATOR>\n\t\t\t\t     <TELL \"elevator\">)\n\t\t\t\t    (<EQUAL? ,HERE ,MESS-HALL>\n\t\t\t\t     <TELL \"room\">)\n\t\t\t\t    (T\n\t\t\t\t     <TELL \"cabin\">)>\n\t\t\t      <TELL\n\". \\\"Hey, wait for Floyd!\\\" he yells, smiling broadly.\" CR>)\n\t\t\t     (<EQUAL? ,HERE ,MINI-BOOTH>\n\t\t\t      <MOVE ,FLOYD ,HERE>\n\t\t\t      <COND (<NOT ,FLOYD-INTRODUCED>\n\t\t\t\t     <CRLF>\n\t\t\t\t     <CALL-ME-FLOYD>\n\t\t\t\t     <RTRUE>)>\n\t\t\t      <TELL CR\n\"\\\"Hi,\\\" whispers Floyd, tiptoeing in. \\\"Are we going to teleport into\nthe computer like Achilles always used to do?\\\"\" CR>)\n\t\t\t     (<PROB 30>\n\t\t\t      <COND (<AND <EQUAL? ,HERE ,INFIRMARY>\n\t\t\t\t\t  ,LAZARUS-FLAG>\n\t\t\t\t     <RFALSE>)>\n\t\t\t      <MOVE ,FLOYD ,HERE>\n\t\t\t      <COND (,FLOYD-INTRODUCED\n\t\t\t\t     <COND (<AND <PROB 15>\n\t\t\t\t\t\t <NOT <IN? ,ADVENTURER ,BED>>>\n\t\t\t\t\t    <TELL CR\n\"Floyd rushes into the room and barrels into you. \\\"Oops, sorry,\\\" he says.\n\\\"Floyd not looking at where he was going to.\\\"\" CR>)\n\t\t\t\t\t   (T\n\t\t\t\t\t    <TELL CR\n\"Floyd bounds into the room. \\\"Floyd here now!\\\" he cries.\" CR>)>\n\t\t\t\t     <KLUDGE>)\n\t\t\t\t    (T\n\t\t\t\t     <CRLF>\n\t\t\t\t     <CALL-ME-FLOYD>)>)>)>)>\n\t <SETG FLOYD-SPOKE <>>>"
  },
  "CALL-ME-FLOYD": {
   "name": "CALL-ME-FLOYD",
   "file": "compone.zil",
   "line": 2291,
   "endLine": 2296,
   "source": "<ROUTINE CALL-ME-FLOYD ()\n\t <SETG FLOYD-INTRODUCED T>\n\t <TELL\n\"The robot you were fiddling with in the Robot Shop bounds into the room.\n\\\"Hi!\\\" he says, with a wide and friendly smile. \\\"You turn Floyd on?\nBe Floyd's friend, yes?\\\"\" CR>>"
  },
  "KLUDGE": {
   "name": "KLUDGE",
   "file": "compone.zil",
   "line": 2298,
   "endLine": 2311,
   "source": "<ROUTINE KLUDGE ()\n\t <COND (<AND <EQUAL? ,HERE ,REPAIR-ROOM>\n\t\t     <NOT ,ACHILLES-FLAG>>\n\t\t<SETG ACHILLES-FLAG T>\n\t\t<SETG FLOYD-SPOKE T>\n\t\t<TELL\n\"Floyd points at the fallen robot. \\\"That's Achilles. He was in charge of\nrepairing machinery. He repaired Floyd once. I never liked him much; he\nwasn't friendly like other robots. Looks like he fell down the stairs.\nHe always had trouble with one of his feet working right. A Planner-person\nonce told me that's why they named him Achilles.\\\"\" CR>)\n\t       (<AND <EQUAL? ,HERE ,COMPUTER-ROOM>\n\t\t     <NOT ,COMPUTER-FLAG>>\n\t\t<COMPUTER-ACTION>)>>"
  },
  "DEAD-FLOYD-F": {
   "name": "DEAD-FLOYD-F",
   "file": "compone.zil",
   "line": 2321,
   "endLine": 2332,
   "source": "<ROUTINE DEAD-FLOYD-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"You turn to look at Floyd, but a tremendous sense of loss overcomes you, and\nyou turn away.\" CR>)\n\t       (<VERB? LAMP-ON>\n\t\t<TELL\n\"As you touch Floyd's on-off switch, it falls off in your hands.\" CR>)\n\t       (<VERB? LAMP-OFF>\n\t\t<TELL\n\"I'm afraid that Floyd has already been turned off, permanently, and gone to\nthat great robot shop in the sky.\" CR>)>>"
  },
  "ELEVATOR-LOBBY-F": {
   "name": "ELEVATOR-LOBBY-F",
   "file": "compone.zil",
   "line": 2379,
   "endLine": 2404,
   "source": "<ROUTINE ELEVATOR-LOBBY-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a wide, brightly lit lobby. A blue metal door to the north is \">\n\t\t<COND (<AND <FSET? ,UPPER-ELEVATOR-DOOR ,OPENBIT>\n\t\t\t    <EQUAL? ,UPPER-ELEVATOR-UP <>>>\n\t\t       <TELL \"open\">)\n\t\t      (T\n\t\t       <TELL \"closed\">)>\n\t\t<TELL\n\" and a larger red metal door to the south is \">\n\t\t<COND (<AND <FSET? ,LOWER-ELEVATOR-DOOR ,OPENBIT>\n\t\t\t    <EQUAL? ,LOWER-ELEVATOR-UP T>>\n\t\t       <COND (<AND <FSET? ,UPPER-ELEVATOR-DOOR ,OPENBIT>\n\t\t\t\t   <EQUAL? ,UPPER-ELEVATOR-UP <>>>\n\t\t\t      <TELL \"also \">)>\n\t\t       <TELL \"open\">)\n\t\t      (T\n\t\t       <COND (<OR <NOT <FSET? ,UPPER-ELEVATOR-DOOR ,OPENBIT>>\n\t\t\t\t  <EQUAL? ,UPPER-ELEVATOR-UP T>>\n\t\t\t      <TELL \"also \">)>\n\t\t       <TELL \"closed\">)>\n\t\t<TELL\n\". Beside the blue door is a blue button, and beside the red door is\na red button. A corridor leads west. To the east is a small room\nabout the size of a telephone booth.\" CR>)>>"
  },
  "UPPER-ELEVATOR-F": {
   "name": "UPPER-ELEVATOR-F",
   "file": "compone.zil",
   "line": 2421,
   "endLine": 2433,
   "source": "<ROUTINE UPPER-ELEVATOR-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You have entered a tiny room with a sliding door to the south which is \">\n\t\t<DDESC ,UPPER-ELEVATOR-DOOR>\n\t\t<TELL\n\". A control panel contains an Up button, a Down button, and a\nnarrow slot.\" CR>)\n\t       (<AND <EQUAL? .RARG ,M-END>\n\t\t     <NOT <FSET? ,UPPER-ELEVATOR-DOOR ,OPENBIT>>\n\t\t     <PROB 10>>\n\t\t<TELL\n\"Some innocuous Hawaiian music oozes from the elevator's intercom.\" CR>)>>"
  },
  "LOWER-ELEVATOR-F": {
   "name": "LOWER-ELEVATOR-F",
   "file": "compone.zil",
   "line": 2450,
   "endLine": 2457,
   "source": "<ROUTINE LOWER-ELEVATOR-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a medium-sized room with a door to the north which is \">\n\t\t<DDESC ,LOWER-ELEVATOR-DOOR>\n\t\t<TELL\n\". A control panel contains an Up button, a Down button, and\na narrow slot.\" CR>)>>"
  },
  "ELEVATOR-ENTER-F": {
   "name": "ELEVATOR-ENTER-F",
   "file": "compone.zil",
   "line": 2459,
   "endLine": 2473,
   "source": "<ROUTINE ELEVATOR-ENTER-F ()\n\t <COND (<EQUAL? ,PRSO ,P?NORTH>\n\t\t<COND (<AND <FSET? ,UPPER-ELEVATOR-DOOR ,OPENBIT>\n\t\t\t    <EQUAL? ,UPPER-ELEVATOR-UP <>>>\n\t\t       ,UPPER-ELEVATOR)\n\t\t      (T\n\t\t       <DOOR-CLOSED>\n\t\t       <RFALSE>)>)\n\t       (<EQUAL? ,PRSO ,P?SOUTH>\n\t\t<COND (<AND <FSET? ,LOWER-ELEVATOR-DOOR ,OPENBIT>\n\t\t\t    <EQUAL? ,LOWER-ELEVATOR-UP T>>\n\t\t       ,LOWER-ELEVATOR)\n\t\t      (T\n\t\t       <DOOR-CLOSED>\n\t\t       <RFALSE>)>)>>"
  },
  "ELEVATOR-EXIT-F": {
   "name": "ELEVATOR-EXIT-F",
   "file": "compone.zil",
   "line": 2475,
   "endLine": 2493,
   "source": "<ROUTINE ELEVATOR-EXIT-F ()\n\t <COND (<EQUAL? ,HERE ,UPPER-ELEVATOR>\n\t\t<COND (<FSET? ,UPPER-ELEVATOR-DOOR ,OPENBIT>\t\t\n\t\t       <COND (<EQUAL? ,UPPER-ELEVATOR-UP T>\n\t\t\t      ,TOWER-CORE)\n\t\t\t     (T\n\t\t\t      ,ELEVATOR-LOBBY)>)\n\t\t      (T\n\t\t       <DOOR-CLOSED>\n\t\t       <RFALSE>)>)\n\t       (<EQUAL? ,HERE ,LOWER-ELEVATOR>\n\t\t<COND (<FSET? ,LOWER-ELEVATOR-DOOR ,OPENBIT>\t\t\n\t\t       <COND (<EQUAL? ,LOWER-ELEVATOR-UP T>\n\t\t\t      ,ELEVATOR-LOBBY)\n\t\t\t     (T\n\t\t\t      ,WAITING-AREA)>)\n\t\t      (T\n\t\t       <DOOR-CLOSED>\n\t\t       <RFALSE>)>)>>"
  },
  "UPPER-ELEVATOR-DOOR-F": {
   "name": "UPPER-ELEVATOR-DOOR-F",
   "file": "compone.zil",
   "line": 2503,
   "endLine": 2513,
   "source": "<ROUTINE UPPER-ELEVATOR-DOOR-F ()\n\t <COND (<VERB? OPEN>\n\t\t<COND (<FSET? ,UPPER-ELEVATOR-DOOR ,OPENBIT>\n\t\t       <ALREADY-OPEN>)\n\t\t      (T\n\t\t       <TELL \"It won't budge.\" CR>)>)\n\t       (<VERB? CLOSE>\n\t\t<COND (<FSET? ,UPPER-ELEVATOR-DOOR ,OPENBIT>\n\t\t       <TELL \"You can't close it yourself.\" CR>)\n\t\t      (T\n\t\t       <IS-CLOSED>)>)>>"
  },
  "LOWER-ELEVATOR-DOOR-F": {
   "name": "LOWER-ELEVATOR-DOOR-F",
   "file": "compone.zil",
   "line": 2523,
   "endLine": 2545,
   "source": "<ROUTINE LOWER-ELEVATOR-DOOR-F ()\n\t <COND (<VERB? OPEN>\n\t\t<COND (<AND <FSET? ,LOWER-ELEVATOR-DOOR ,OPENBIT>\n\t\t\t    <EQUAL? ,HERE ,ELEVATOR-LOBBY>\n\t\t\t    <EQUAL? ,LOWER-ELEVATOR-UP T>>\n\t\t       <ALREADY-OPEN>)\n\t\t      (<AND <FSET? ,LOWER-ELEVATOR-DOOR ,OPENBIT>\n\t\t\t    <EQUAL? ,HERE ,WAITING-AREA>\n\t\t\t    <EQUAL? ,LOWER-ELEVATOR-UP <>>>\n\t\t       <ALREADY-OPEN>)\n\t\t      (T\n\t\t       <TELL \"It won't budge.\" CR>)>)\n\t       (<VERB? CLOSE>\n\t\t<COND (<AND <FSET? ,LOWER-ELEVATOR-DOOR ,OPENBIT>\n\t\t\t    <EQUAL? ,HERE ,ELEVATOR-LOBBY>\n\t\t\t    <EQUAL? ,LOWER-ELEVATOR-UP T>>\n\t\t       <TELL \"You can't close it yourself.\" CR>)\n\t\t      (<AND <FSET? ,LOWER-ELEVATOR-DOOR ,OPENBIT>\n\t\t\t    <EQUAL? ,HERE ,WAITING-AREA>\n\t\t\t    <EQUAL? ,LOWER-ELEVATOR-UP <>>>\n\t\t       <TELL \"You can't close it yourself.\" CR>)\n\t\t      (T\n\t\t       <IS-CLOSED>)>)>>"
  },
  "DOOR-CLOSED": {
   "name": "DOOR-CLOSED",
   "file": "compone.zil",
   "line": 2547,
   "endLine": 2548,
   "source": "<ROUTINE DOOR-CLOSED ()\n\t <TELL \"The door is closed.\" CR>>"
  },
  "BLUE-ELEVATOR-BUTTON-F": {
   "name": "BLUE-ELEVATOR-BUTTON-F",
   "file": "compone.zil",
   "line": 2566,
   "endLine": 2574,
   "source": "<ROUTINE BLUE-ELEVATOR-BUTTON-F ()\n\t <COND (<AND <VERB? PUSH>\n\t\t     <EQUAL? ,UPPER-ELEVATOR-UP T>>\n\t\t<COND (<EQUAL? <GET <INT I-UPPER-ELEVATOR-ARRIVE> ,C-ENABLED?> 1>\n\t\t       <TELL \"Patience, patience...\" CR>)\n\t\t      (T\n\t\t       <ENABLE<QUEUE I-UPPER-ELEVATOR-ARRIVE<+<RANDOM 20> 40>>>\n\t\t       <TELL\n\"You hear a faint whirring noise from behind the blue door.\" CR>)>)>>"
  },
  "RED-ELEVATOR-BUTTON-F": {
   "name": "RED-ELEVATOR-BUTTON-F",
   "file": "compone.zil",
   "line": 2576,
   "endLine": 2583,
   "source": "<ROUTINE RED-ELEVATOR-BUTTON-F ()\n\t <COND (<AND <VERB? PUSH>\n\t\t     <EQUAL? ,LOWER-ELEVATOR-UP <>>>\n\t        <COND (<EQUAL? <GET <INT I-LOWER-ELEVATOR-ARRIVE> ,C-ENABLED?> 1>\n\t\t       <TELL \"Patience, patience...\" CR>)\n\t\t      (T\n\t\t       <ENABLE<QUEUE I-LOWER-ELEVATOR-ARRIVE<+<RANDOM 40> 80>>>\n\t\t       <TELL \"The red door begins vibrating a bit.\" CR>)>)>>"
  },
  "I-UPPER-ELEVATOR-ARRIVE": {
   "name": "I-UPPER-ELEVATOR-ARRIVE",
   "file": "compone.zil",
   "line": 2585,
   "endLine": 2593,
   "source": "<ROUTINE I-UPPER-ELEVATOR-ARRIVE ()\n\t <FSET ,UPPER-ELEVATOR-DOOR ,OPENBIT>\n\t <SETG UPPER-ELEVATOR-UP <>>\n\t <DISABLE <INT I-UPPER-ELEVATOR-ARRIVE>>\n\t <COND (<EQUAL? ,HERE ,ELEVATOR-LOBBY>\n\t\t<TELL CR \n\"The door at the north end of the room slides open.\" CR>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "I-LOWER-ELEVATOR-ARRIVE": {
   "name": "I-LOWER-ELEVATOR-ARRIVE",
   "file": "compone.zil",
   "line": 2595,
   "endLine": 2603,
   "source": "<ROUTINE I-LOWER-ELEVATOR-ARRIVE ()\n\t <FSET ,LOWER-ELEVATOR-DOOR ,OPENBIT>\n\t <SETG LOWER-ELEVATOR-UP T>\n\t <DISABLE <INT I-LOWER-ELEVATOR-ARRIVE>>\n\t <COND (<EQUAL? ,HERE ,ELEVATOR-LOBBY>\n\t\t<TELL CR\n\"The door at the south end of the room slides open.\" CR>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "ELEVATOR-BUTTON-F": {
   "name": "ELEVATOR-BUTTON-F",
   "file": "compone.zil",
   "line": 2625,
   "endLine": 2667,
   "source": "<ROUTINE ELEVATOR-BUTTON-F ()\n\t <COND (<VERB? PUSH-UP>\n\t\t<COND (<AND <EQUAL? ,HERE ,LOWER-ELEVATOR>\n\t\t\t    <EQUAL? ,LOWER-ELEVATOR-UP <>>\n\t\t\t    <EQUAL? ,LOWER-ELEVATOR-ON T>\n\t\t\t    <EQUAL? ,ELEVATOR-IN-TRANSIT <>>>\n\t\t       <TELL ,ELEVATOR-STARTS CR>\n\t\t       <FCLEAR ,LOWER-ELEVATOR-DOOR ,OPENBIT>\n\t\t       <SETG ELEVATOR-IN-TRANSIT T>\n\t\t       <ENABLE <QUEUE I-LOWER-ELEVATOR-TRIP 100>>)\n\t\t      (<AND <EQUAL? ,HERE ,UPPER-ELEVATOR>\n\t\t\t    <EQUAL? ,UPPER-ELEVATOR-UP <>>\n\t\t\t    <EQUAL? ,UPPER-ELEVATOR-ON T>\n\t\t\t    <EQUAL? ,ELEVATOR-IN-TRANSIT <>>>\n\t\t       <TELL ,ELEVATOR-STARTS CR>\n\t\t       <FCLEAR ,UPPER-ELEVATOR-DOOR ,OPENBIT>\n\t\t       <SETG ELEVATOR-IN-TRANSIT T>\n\t\t       <ENABLE <QUEUE I-UPPER-ELEVATOR-TRIP 50>>)\n\t\t      (T\n\t\t       <TELL \"Nothing happens.\" CR>)>)\n\t       (<VERB? PUSH-DOWN>\n\t\t<COND (<AND <EQUAL? ,HERE ,LOWER-ELEVATOR>\n\t\t\t    <EQUAL? ,LOWER-ELEVATOR-UP T>\n\t\t\t    <EQUAL? ,LOWER-ELEVATOR-ON T>\n\t\t\t    <EQUAL? ,ELEVATOR-IN-TRANSIT <>>>\n\t\t       <TELL ,ELEVATOR-STARTS CR>\n\t\t       <FCLEAR ,LOWER-ELEVATOR-DOOR ,OPENBIT>\n\t\t       <SETG ELEVATOR-IN-TRANSIT T>\n\t\t       <ENABLE <QUEUE I-LOWER-ELEVATOR-TRIP 100>>)\n\t\t      (<AND <EQUAL? ,HERE ,UPPER-ELEVATOR>\n\t\t\t    <EQUAL? ,UPPER-ELEVATOR-UP T>\n\t\t\t    <EQUAL? ,UPPER-ELEVATOR-ON T>\n\t\t\t    <EQUAL? ,ELEVATOR-IN-TRANSIT <>>>\n\t\t       <TELL ,ELEVATOR-STARTS CR>\n\t\t       <FCLEAR ,UPPER-ELEVATOR-DOOR ,OPENBIT>\n\t\t       <SETG ELEVATOR-IN-TRANSIT T>\n\t\t       <ENABLE <QUEUE I-UPPER-ELEVATOR-TRIP 50>>)\n\t\t      (T\n\t\t       <TELL \"Nothing happens.\" CR>)>)\n\t       (<VERB? PUSH>\n\t\t<TELL\n\"You must specify whether you want to push the Up button or\nthe Down button.\" CR>)>>"
  },
  "I-TURNOFF-UPPER-ELEVATOR": {
   "name": "I-TURNOFF-UPPER-ELEVATOR",
   "file": "compone.zil",
   "line": 2669,
   "endLine": 2676,
   "source": "<ROUTINE I-TURNOFF-UPPER-ELEVATOR ()\n\t <COND (,ELEVATOR-IN-TRANSIT\n\t\t<ENABLE <QUEUE I-TURNOFF-UPPER-ELEVATOR 120>>)\n\t       (T\n\t\t<SETG UPPER-ELEVATOR-ON <>>\n\t\t<COND (<EQUAL? ,HERE ,UPPER-ELEVATOR>\n\t\t       <TELL CR ,ELEVATOR-LIGHT-OFF CR>)>)>\n\t <RFALSE>>"
  },
  "I-TURNOFF-LOWER-ELEVATOR": {
   "name": "I-TURNOFF-LOWER-ELEVATOR",
   "file": "compone.zil",
   "line": 2678,
   "endLine": 2685,
   "source": "<ROUTINE I-TURNOFF-LOWER-ELEVATOR ()\n\t <COND (,ELEVATOR-IN-TRANSIT\n\t\t<ENABLE <QUEUE I-TURNOFF-LOWER-ELEVATOR 120>>)\n\t       (T\n\t\t<SETG LOWER-ELEVATOR-ON <>>\n\t\t<COND (<EQUAL? ,HERE ,LOWER-ELEVATOR>\n\t\t       <TELL CR ,ELEVATOR-LIGHT-OFF CR>)>)>\n\t <RFALSE>>"
  },
  "I-UPPER-ELEVATOR-TRIP": {
   "name": "I-UPPER-ELEVATOR-TRIP",
   "file": "compone.zil",
   "line": 2694,
   "endLine": 2706,
   "source": "<ROUTINE I-UPPER-ELEVATOR-TRIP ()\n\t <COND (<EQUAL? ,UPPER-ELEVATOR-UP T>\n\t\t<SETG UPPER-ELEVATOR-UP <>>\n\t\t<SETG ELEVATOR-IN-TRANSIT <>>\n\t\t<FSET ,UPPER-ELEVATOR-DOOR ,OPENBIT>\n\t\t<CRLF>\n\t\t<ELEVATOR-DOOR-OPENS>)\n\t       (T\n\t\t<SETG UPPER-ELEVATOR-UP T>\n\t\t<SETG ELEVATOR-IN-TRANSIT <>>\n\t\t<FSET ,UPPER-ELEVATOR-DOOR ,OPENBIT>\n\t\t<CRLF>\n\t\t<ELEVATOR-DOOR-OPENS>)>>"
  },
  "I-LOWER-ELEVATOR-TRIP": {
   "name": "I-LOWER-ELEVATOR-TRIP",
   "file": "compone.zil",
   "line": 2708,
   "endLine": 2720,
   "source": "<ROUTINE I-LOWER-ELEVATOR-TRIP ()\n\t <COND (<EQUAL? ,LOWER-ELEVATOR-UP T>\n\t\t<SETG LOWER-ELEVATOR-UP <>>\n\t\t<SETG ELEVATOR-IN-TRANSIT <>>\n\t\t<FSET ,LOWER-ELEVATOR-DOOR ,OPENBIT>\n\t\t<CRLF>\n\t\t<ELEVATOR-DOOR-OPENS>)\n\t       (T\n\t\t<SETG LOWER-ELEVATOR-UP T>\n\t\t<SETG ELEVATOR-IN-TRANSIT <>>\n\t\t<FSET ,LOWER-ELEVATOR-DOOR ,OPENBIT>\n\t\t<CRLF>\n\t\t<ELEVATOR-DOOR-OPENS>)>>"
  },
  "ELEVATOR-DOOR-OPENS": {
   "name": "ELEVATOR-DOOR-OPENS",
   "file": "compone.zil",
   "line": 2722,
   "endLine": 2723,
   "source": "<ROUTINE ELEVATOR-DOOR-OPENS ()\n\t <TELL \"The elevator door slides open.\" CR>>"
  },
  "HELICOPTER-OBJECT-F": {
   "name": "HELICOPTER-OBJECT-F",
   "file": "compone.zil",
   "line": 2794,
   "endLine": 2809,
   "source": "<ROUTINE HELICOPTER-OBJECT-F ()\n\t <COND (<VERB? THROUGH BOARD WALK-TO>\n\t\t<COND (<EQUAL? ,HERE ,HELIPAD>\n\t\t       <GOTO ,HELICOPTER>)\n\t\t      (T\n\t\t       <TELL \"You're in it!\" CR>)>)\n\t       (<VERB? EXIT DROP DISEMBARK>\n\t\t<COND (<EQUAL? ,HERE ,HELICOPTER>\n\t\t       <GOTO ,HELIPAD>)\n\t\t      (T\n\t\t       <TELL \"You're not in it!\" CR>)>)\n\t       (<VERB? FLY>\n\t\t<COND (<EQUAL? ,HERE ,HELICOPTER>\n\t\t       <TELL \"The controls seem to be locked.\" CR>)\n\t\t      (T\n\t\t       <TELL \"You're not even in it!\" CR>)>)>>"
  },
  "COMM-ROOM-F": {
   "name": "COMM-ROOM-F",
   "file": "compone.zil",
   "line": 2841,
   "endLine": 2888,
   "source": "<ROUTINE COMM-ROOM-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a small room with no windows. The sole exit is southwest. Two wide\nconsoles fill either end of the room; thick cables lead up into the ceiling.|\n|\nThe console on the left side of the room is labelled \\\"Reeseev Staashun.\\\" A\nbright red light, labelled \\\"Tranzmishun Reeseevd\\\", is blinking rapidly.\nNext to the light is a glowing button marked \\\"Mesij Plaabak.\\\"|\n|\nThe console on the right side of the room is labelled \\\"Send Staashun.\\\" A\nscreen on the console displays a message. Next to the screen is a flashing\nsign which says \">\n\t\t<COND (,COMM-SHUTDOWN\n\t\t       <SHUTDOWN>)\n\t\t      (,COMM-FIXED\n\t\t       <TELL \"\\\"Tranzmishun in pragres.\\\"\">)\n\t\t      (T\n\t\t       <TELL \"\\\"Malfunkshun in Sendeeng Kuulint Sistum.\\\"\">)>\n\t\t<TELL \" Next to this console is an enunciator\">\n\t\t<COND (<OR ,COMM-FIXED ,COMM-SHUTDOWN>\n\t\t       <TELL \" whose lights are all dark\">)>\n\t\t<TELL\n\". On the console next to the enunciator panel is a funnel-shaped hole\nlabelled \\\"Kuulint Sistum Manyuuwul Oovuriid.\\\"\" CR>)\n\t       (<AND <EQUAL? .RARG ,M-END>\n\t\t     <NOT ,COMM-FIXED>\n\t\t     <NOT ,COMM-SHUTDOWN>\n\t\t     ,JUST-ENTERED>\n\t\t<ENABLE <QUEUE I-UNENTER -1>>\n\t\t<SETG JUST-ENTERED <>>\n\t        <TELL \"A \">\n\t\t<COND (<EQUAL? ,CHEMICAL-REQUIRED 1>\n\t\t       <TELL \"red\">)\n\t\t      (<EQUAL? ,CHEMICAL-REQUIRED 2>\n\t\t       <TELL \"blue\">)\n\t\t      (<EQUAL? ,CHEMICAL-REQUIRED 3>\n\t\t       <TELL \"green\">)\n\t\t      (<EQUAL? ,CHEMICAL-REQUIRED 4>\n\t\t       <TELL \"yellow\">)\n\t\t      (<EQUAL? ,CHEMICAL-REQUIRED 5>\n\t\t       <TELL \"gray\">)\n\t\t      (<EQUAL? ,CHEMICAL-REQUIRED 6>\n\t\t       <TELL \"brown\">)\n\t\t      (<EQUAL? ,CHEMICAL-REQUIRED 7>\n\t\t       <TELL \"black\">)>\n\t\t<TELL\n\" colored light is flashing on the enunciator panel.\" CR>)>>"
  },
  "I-UNENTER": {
   "name": "I-UNENTER",
   "file": "compone.zil",
   "line": 2892,
   "endLine": 2896,
   "source": "<ROUTINE I-UNENTER ()\n\t <COND (<NOT <EQUAL? ,HERE ,COMM-ROOM>>\n\t\t<SETG JUST-ENTERED T>\n\t\t<DISABLE <INT I-UNENTER>>)>\n\t <RFALSE>>"
  },
  "PLAYBACK-BUTTON-F": {
   "name": "PLAYBACK-BUTTON-F",
   "file": "compone.zil",
   "line": 2917,
   "endLine": 2925,
   "source": "<ROUTINE PLAYBACK-BUTTON-F ()\n\t <COND (<VERB? PUSH>\n\t\t<TELL\n\"A voice fills the room ... the voice of the Feinstein's communications\nofficer! \\\"Stellar Patrol Ship Feinstein to planetside ... Please respond\non frequency 48.5 ... SPS Feinstein to planetside ... Please come in ...\\\"\nAfter a pause you hear the officer, in a quieter voice, say \\\"Admiral, no\nresponse on any of the standard frequen...\\\" The sentence is cut short by the\nsound of an explosion and a loud burst of static, followed by silence.\" CR>)>>"
  },
  "RANDOMIZE-ORDER": {
   "name": "RANDOMIZE-ORDER",
   "file": "compone.zil",
   "line": 2957,
   "endLine": 2978,
   "source": "<ROUTINE RANDOMIZE-ORDER (\"AUX\" (COUNT 0) TEMP)\n\t <REPEAT ()\n\t\t <COND (<G? <SET COUNT <+ .COUNT 1>> 7>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<PUT ,ORDER-LTBL .COUNT <>>)>>\n\t <SET COUNT 0>\n\t <REPEAT ()\n\t\t <COND (<G? <SET COUNT <+ .COUNT 1>> 7>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<SET TEMP <RANDOM 7>>\n\t\t\t<COND (<OR <EQUAL? .TEMP <GET ,ORDER-LTBL 1>\n\t\t\t\t\t         <GET ,ORDER-LTBL 2>\n\t\t\t\t\t         <GET ,ORDER-LTBL 3>>\n\t\t\t\t   <EQUAL? .TEMP <GET ,ORDER-LTBL 4>\n\t\t\t\t\t         <GET ,ORDER-LTBL 5>\n\t\t\t\t\t\t <GET ,ORDER-LTBL 6>>\n\t\t\t\t   <EQUAL? .TEMP <GET ,ORDER-LTBL 7>>>\n\t\t\t       <SET COUNT <- .COUNT 1>>)\n\t\t\t      (T\n\t\t\t       <PUT ,ORDER-LTBL .COUNT .TEMP>)>)>>>"
  },
  "CHEMICAL-FLUID-F": {
   "name": "CHEMICAL-FLUID-F",
   "file": "compone.zil",
   "line": 2985,
   "endLine": 3121,
   "source": "<ROUTINE CHEMICAL-FLUID-F ()\n\t <COND (<VERB? EAT>\n\t\t<JIGS-UP\n\"Mmmmm....that tasted just like delicious poisonous chemicals!\">)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSI ,CHEMICAL-FLUID>>\n\t\t<PERFORM ,V?PUT ,PRSO ,FLASK>\n\t\t<RTRUE>)\n\t       (<AND <VERB? THROW POUR>\n\t\t     <OR <EQUAL? ,PRSI ,RAT-ANT ,TROLL>\n\t\t\t <EQUAL? ,PRSI ,GRUE ,TRIFFID>>>\n\t\t<COND (<NOT <HELD? ,FLASK>>\n\t\t       <TELL \"You're not holding the flask.\" CR>\n\t\t       <RTRUE>)>\n\t\t<REMOVE ,CHEMICAL-FLUID>\n\t\t<TELL\n\"The mutants lap up the chemical, howling with delight. One immediately\ngrows three new mouths.\" CR>)\n\t       (<VERB? PUT POUR>\n\t\t<COND (<NOT <HELD? ,FLASK>>\n\t\t       <TELL \"You're not holding the flask.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<EQUAL? ,PRSI ,CANTEEN>\n\t\t       <WORTHLESS-ACTION>\n\t\t       <RTRUE>)>\n\t\t<REMOVE ,CHEMICAL-FLUID>\n\t\t<COND (<NOT ,PRSI>\n\t\t       <SETG PRSI ,GROUND>)>\n\t\t<COND (<EQUAL? ,PRSI ,FUNNEL-HOLE>\n\t\t       <COND (<EQUAL? ,CHEMICAL-FLAG ,CHEMICAL-REQUIRED>\n\t\t\t      <SETG CHEMICAL-REQUIRED \n\t\t\t\t    <GET ,ORDER-LTBL ,STEPS-TO-GO>>\n\t\t\t      <SETG STEPS-TO-GO <- ,STEPS-TO-GO 1>>\n\t\t\t      <TELL\n\"The liquid disappears into the hole. The lights on the enunciator\npanel blink rapidly \">\n\t\t\t      <COND (<EQUAL? ,STEPS-TO-GO 0>\n\t\t\t\t     <SETG COMM-FIXED T>\n\t\t\t\t     <SETG SCORE <+ ,SCORE 6>>\n\t\t\t\t     <SETG CHEMICAL-REQUIRED 10>\n\t\t\t\t     <TELL\n\"and then go dark. The coolant system warning light goes off, and another\nflashes, indicating that the help message is now being sent.\" CR>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL \"and all go off except one, a \">\n\t\t\t\t     <COND (<EQUAL? ,CHEMICAL-REQUIRED 1>\n\t\t\t\t\t    <TELL \"red\">)\n\t\t\t\t\t   (<EQUAL? ,CHEMICAL-REQUIRED 2>\n\t\t\t\t\t    <TELL \"blue\">)\n\t\t\t\t\t   (<EQUAL? ,CHEMICAL-REQUIRED 3>\n\t\t\t\t\t    <TELL \"green\">)\n\t\t\t\t\t   (<EQUAL? ,CHEMICAL-REQUIRED 4>\n\t\t\t\t\t    <TELL \"yellow\">)\n\t\t\t\t\t   (<EQUAL? ,CHEMICAL-REQUIRED 5>\n\t\t\t\t\t    <TELL \"gray\">)\n\t\t\t\t\t   (<EQUAL? ,CHEMICAL-REQUIRED 6>\n\t\t\t\t\t    <TELL \"brown\">)\n\t\t\t\t\t   (<EQUAL? ,CHEMICAL-REQUIRED 7>\n\t\t\t\t\t    <TELL \"black\">)>\n\t\t\t\t     <TELL \" light.\" CR>)>)\n\t\t\t     (T\n\t\t\t      <SETG COMM-SHUTDOWN T>\n\t\t\t      <COND (,COMM-FIXED\n\t\t\t\t     <SETG SCORE <- ,SCORE 6>>\n\t\t\t\t     <SETG COMM-FIXED <>>)>\n\t\t\t      <TELL\n\"An alarm sounds briefly, and a sign flashes \">\n\t\t\t      <SHUTDOWN>\n\t\t\t      <TELL \n\" A moment later, the lights in the room dim and the send\nconsole shuts down.\" CR>)>)\n\t\t      (<EQUAL? ,CHEMICAL-FLAG 8 9>\n\t\t       <COND (<FSET? ,PRSI ,ACIDBIT>\n\t\t\t      <COND (<EQUAL? ,PRSI ,SPOUT-PLACED>\n\t\t\t\t     <SETG SPOUT-PLACED ,GROUND>)>\n\t\t\t      <REMOVE ,PRSI>\n\t\t\t      <TELL\n\"The \" D ,PRSI \" dissolves right before your eyes!\">\n\t\t\t      <COND (<AND <EQUAL? ,PRSI ,BAD-BEDISTOR>\n\t\t\t\t\t <NOT <FSET? ,BAD-BEDISTOR ,TOUCHBIT>>>\n\t\t\t\t     <FSET ,CUBE ,MUNGEDBIT>\n\t\t\t\t     <CUBE-SEEMS>)\n\t\t\t\t    (<AND <EQUAL? ,PRSI ,GOOD-BEDISTOR>\n\t\t\t\t\t  ,COURSE-CONTROL-FIXED>\n\t\t\t\t     <FSET ,CUBE ,MUNGEDBIT>\n\t\t\t\t     <SETG SCORE <- ,SCORE 6>>\n\t\t\t\t     <SETG COURSE-CONTROL-FIXED <>>\n\t\t\t\t     <CUBE-SEEMS>)>\n\t\t\t      <CRLF>\n\t\t\t      <RTRUE>)\n\t\t\t     (<AND <EQUAL? ,CREVICE ,PRSI>\n\t\t\t\t   <NOT <FSET? ,KEY ,TOUCHBIT>>>\n\t\t\t      <COND (<FSET? ,KEY ,INVISIBLE>\n\t\t\t\t     <TELL\n\"A puff of smoke rises from the crevice.\" CR>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL\n\"Although the chemical has no effect on the crevice, it does seem to have\ndissolved the key that was lying in it.\" CR>)>\n\t\t\t      <REMOVE ,KEY>\n\t\t\t      <FSET ,KEY ,TOUCHBIT>\n\t\t\t      <FCLEAR ,KEY ,INVISIBLE>)\n\t\t\t     (<EQUAL? ,PRSI ,HIGH-PROTEIN ,MEDICINE>\n\t\t\t      <JIGS-UP\n\"Unfortunately, those two liquids seem to react quite violently with each\nother. The resulting exothermic reaction might have been interesting to\nwatch from a distance of, say, several hundred feet.\">)\n\t\t\t     (<EQUAL? ,PRSI ,ME ,ADVENTURER ,HANDS>\n\t\t\t      <JIGS-UP\n\"Have you always had this desire to see melting flesh?\">)\n\t\t\t     (<AND <EQUAL? ,PRSI ,FLOYD>\n\t\t\t\t   <FSET? ,FLOYD ,RLANDBIT>>\n\t\t\t      <TELL\n\"Floyd yelps. \\\"Hey, cut it out! That stuff burns!\\\"\" CR>)\n\t\t\t     (<EQUAL? ,PRSI ,MICROBE>\n\t\t\t      <TELL \"The microbe writhes in pain. \">\n\t\t\t      <STRIP-DISSOLVES>)\n\t\t\t     (<EQUAL? ,PRSI ,STRIP ,RELAY>\n\t\t\t      <STRIP-DISSOLVES>)\n\t\t\t     (<FSET? ,PRSI ,MUNGBIT>\n\t\t\t      <FSET ,PRSI ,MUNGEDBIT>\n\t\t\t      <COND (<EQUAL? ,PRSI ,CHRONOMETER>\n\t\t\t\t     <SETG MUNGED-TIME ,INTERNAL-MOVES>)>\n\t\t\t      <TELL\n\"The \" D ,PRSI \" seems to undergo some damage as a result of your action.\" CR>\n\t\t\t      <COND (<AND <EQUAL? ,PRSI ,CUBE>\n\t\t\t\t\t  ,COURSE-CONTROL-FIXED>\n\t\t\t\t     <SETG COURSE-CONTROL-FIXED <>>\n\t\t\t\t     <REMOVE ,GOOD-BEDISTOR>\n\t\t\t\t     <SETG SCORE <- ,SCORE 6>>\n\t\t\t\t     <TELL\n\"The bedistor also happens to dissolve.\" CR>)>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <CHEMICAL-POURS>)>)\n\t\t      (T\n\t\t       <CHEMICAL-POURS>)>)>>"
  },
  "CUBE-SEEMS": {
   "name": "CUBE-SEEMS",
   "file": "compone.zil",
   "line": 3123,
   "endLine": 3125,
   "source": "<ROUTINE CUBE-SEEMS ()\n\t <TELL\n\" Unfortunately, the cube seems to undergo some damage as well.\">>"
  },
  "CHEMICAL-POURS": {
   "name": "CHEMICAL-POURS",
   "file": "compone.zil",
   "line": 3127,
   "endLine": 3129,
   "source": "<ROUTINE CHEMICAL-POURS ()\n\t <TELL\n\"The chemical pours all over the \" D ,PRSI \", making quite a mess.\" CR>>"
  },
  "STRIP-DISSOLVES": {
   "name": "STRIP-DISSOLVES",
   "file": "compone.zil",
   "line": 3131,
   "endLine": 3134,
   "source": "<ROUTINE STRIP-DISSOLVES ()\n\t <JIGS-UP\n\"The chemical drips all over the silicon strip, which immediately begins to\ndissolve. As it does so, you plunge into the void below.\">> "
  },
  "SHUTDOWN": {
   "name": "SHUTDOWN",
   "file": "compone.zil",
   "line": 3138,
   "endLine": 3140,
   "source": "<ROUTINE SHUTDOWN ()\n\t <TELL\n\"\\\"Kuulint Sistum Imbalins Kritikul -- Shuteeng Down Awl Sistumz.\\\"\">>"
  },
  "COMM-SETUP": {
   "name": "COMM-SETUP",
   "file": "compone.zil",
   "line": 3142,
   "endLine": 3147,
   "source": "<ROUTINE COMM-SETUP () ;\"was called by GO - now by I-RANDOM-INTERRUPTS\"\n\t <SETG OLD-SHOTS <+ 2 <RANDOM 3>>>\n\t <SETG NEW-SHOTS <+ 20 <RANDOM 10>>>\n\t <RANDOMIZE-ORDER>\n\t <SETG STEPS-TO-GO <+ 1 <RANDOM 2>>>\n\t <SETG CHEMICAL-REQUIRED <GET ,ORDER-LTBL <+ ,STEPS-TO-GO 1>>>>"
  },
  "OTHER-ELEVATOR-ENTER-F": {
   "name": "OTHER-ELEVATOR-ENTER-F",
   "file": "compone.zil",
   "line": 3189,
   "endLine": 3196,
   "source": "<ROUTINE OTHER-ELEVATOR-ENTER-F ()\n\t <COND (<AND <FSET? ,LOWER-ELEVATOR-DOOR ,OPENBIT>\n\t\t     <NOT ,LOWER-ELEVATOR-UP>>\n\t\t,LOWER-ELEVATOR)\n\t       (T\n\t\t<DOOR-CLOSED>\n\t\t<THIS-IS-IT ,LOWER-ELEVATOR-DOOR>\n\t\t<RFALSE>)>>"
  },
  "KALAMONTEE-PLATFORM-F": {
   "name": "KALAMONTEE-PLATFORM-F",
   "file": "compone.zil",
   "line": 3213,
   "endLine": 3228,
   "source": "<ROUTINE KALAMONTEE-PLATFORM-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a wide, flat strip of concrete which continues westward. \">\n\t\t<COND (<AND ,BETTY-AT-KALAMONTEE ,ALFIE-AT-KALAMONTEE>\n\t\t       <TELL\n\"Open shuttle cars lie on the north and south sides of the platform. \">)\n\t\t      (,BETTY-AT-KALAMONTEE\n\t\t       <TELL\n\"An open shuttle car lies to the north. \">)\n\t\t      (,ALFIE-AT-KALAMONTEE\n\t\t       <TELL\n\"A large transport of some sort lies to the south, its open door\nbeckoning you to enter. \">)>\n\t\t<TELL \"A faded sign on the wall reads \\\"Shutul Platform --\nKalamontee Staashun.\\\"\" CR>)>>"
  },
  "LAWANDA-PLATFORM-F": {
   "name": "LAWANDA-PLATFORM-F",
   "file": "comptwo.zil",
   "line": 26,
   "endLine": 45,
   "source": "<ROUTINE LAWANDA-PLATFORM-F (RARG)\n\t <COND (<NOT ,LAWANDA-PLATFORM-FLAG>\n\t\t<SETG LAWANDA-PLATFORM-FLAG T>\n\t\t<SETG SICKNESS-WARNING-FLAG T>)>\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \"This is a wide, flat strip of concrete. \">\n\t\t<COND (<AND <NOT ,ALFIE-AT-KALAMONTEE>\n\t\t\t    <NOT ,BETTY-AT-KALAMONTEE>>\n\t\t       <TELL\n\"Open shuttle cars lie to the north and south.\">)\n\t\t      (<OR <NOT ,ALFIE-AT-KALAMONTEE>\n\t\t\t   <NOT ,BETTY-AT-KALAMONTEE>>\n\t\t       <TELL \"An open shuttle car lies to the \">\n\t\t       <COND (,ALFIE-AT-KALAMONTEE\n\t\t\t      <TELL \"north.\">)\n\t\t\t     (T\n\t\t\t      <TELL \"south.\">)>)>\n\t\t<TELL\n\" A wide escalator, not currently operating, beckons upward at the east end of\nthe platform. A faded sign reads \\\"Shutul Platform -- Lawanda Staashun.\\\"\" CR>)>>"
  },
  "INFIRMARY-F": {
   "name": "INFIRMARY-F",
   "file": "comptwo.zil",
   "line": 113,
   "endLine": 131,
   "source": "<ROUTINE INFIRMARY-F (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-END>\n\t\t     <NOT ,LAZARUS-FLAG>\n\t\t     <IN? ,FLOYD ,HERE>\n\t\t     <FSET? ,FLOYD ,RLANDBIT>\n\t\t     <PROB 30>>\n\t\t<SETG LAZARUS-FLAG T>\n\t\t<MOVE ,LAZARUS-PART ,HERE>\n\t\t<MOVE ,FLOYD ,FORK>\n\t\t<SETG FLOYD-FOLLOW <>>\n\t\t<SETG FLOYD-SPOKE T>\n\t\t<TELL\n\"Floyd, rummaging in a corner, finds something and carries it to the center of\nthe room to examine it in the brighter light. It seems to be the breast plate\nof a robot, along with some connected inner circuitry. The entire piece is\nbent and rusting. Floyd stares at it in complete silence. A moment later, he\nbegins sobbing quietly, awkwardly excuses himself, and runs out of the room.\nYou look at the breast plate, and notice the name \\\"Lazarus\\\" engraved on\nit.\" CR>)>>  "
  },
  "RED-SPOOL-F": {
   "name": "RED-SPOOL-F",
   "file": "comptwo.zil",
   "line": 146,
   "endLine": 152,
   "source": "<ROUTINE RED-SPOOL-F ()\n\t <COND (<AND <VERB? TAKE>\n\t\t     <IN? ,RED-SPOOL ,SPOOL-READER>\n\t\t     <FSET? ,SPOOL-READER ,ONBIT>>\n\t\t<MOVE ,RED-SPOOL ,ADVENTURER>\n\t\t<FCLEAR ,RED-SPOOL ,TRYTAKEBIT>\n\t\t<TELL \"The screen goes blank as you take the spool.\" CR>)>>"
  },
  "MEDICINE-F": {
   "name": "MEDICINE-F",
   "file": "comptwo.zil",
   "line": 177,
   "endLine": 212,
   "source": "<ROUTINE MEDICINE-F (\"AUX\" (X <>))\n\t <COND (<AND <VERB? TASTE EAT POUR>\n\t\t     <NOT <IN? ,MEDICINE-BOTTLE ,ADVENTURER>>>\n\t\t<SETG PRSO ,MEDICINE-BOTTLE>\n\t\t<NOT-HOLDING>\n\t\t<THIS-IS-IT ,MEDICINE-BOTTLE>)\n\t       (<AND <VERB? TASTE EAT POUR>\n\t\t     <NOT <FSET? ,MEDICINE-BOTTLE ,OPENBIT>>>\n\t\t<TELL \"The bottle is closed.\" CR>)\n\t       (<VERB? TASTE>\n\t\t<TELL \"It tastes fairly bitter.\" CR>)\n\t       (<VERB? EAT>\n\t\t<REMOVE ,MEDICINE>\n\t\t<SETG C-ELAPSED 15>\n\t\t<SETG SICKNESS-LEVEL <- ,SICKNESS-LEVEL 2>>\n\t\t<SETG LOAD-ALLOWED <+ ,LOAD-ALLOWED 20>>\n\t\t<TELL \"The medicine tasted extremely bitter.\" CR>)\n\t       (<VERB? POUR>\t\t\n\t\t<REMOVE ,MEDICINE>\n\t\t<COND (<NOT ,PRSI>\n\t\t       <SETG PRSI ,GROUND>)>\n\t\t<COND (<EQUAL? ,PRSI ,FUNNEL-HOLE>\n\t\t       <COND (<IN? ,CHEMICAL-FLUID ,FLASK>\n\t\t\t      <SET X T>)>\n\t\t       <SETG CHEMICAL-REQUIRED 10>\n\t\t       <PERFORM ,V?POUR ,CHEMICAL-FLUID ,FUNNEL-HOLE>\n\t\t       <COND (.X\n\t\t\t      <MOVE ,CHEMICAL-FLUID ,FLASK>)>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL\n\"It pours over the \" D ,PRSI \" and evaporates.\" CR>)>)\n\t       (<AND <VERB? TAKE>\n\t\t     <EQUAL? <GET ,P-VTBL 0> ,W?TAKE>>\n\t\t<PERFORM ,V?EAT ,MEDICINE>\n\t\t<RTRUE>)>>"
  },
  "ROBOT-HOLE-F": {
   "name": "ROBOT-HOLE-F",
   "file": "comptwo.zil",
   "line": 252,
   "endLine": 262,
   "source": "<ROUTINE ROBOT-HOLE-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"It's too small for you to get through. It was presumably intended for\nrobots, such as the broken repair robot lying over there.\" CR>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<TELL\n\"You can make out a small supply room of some sort.\" CR>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<TELL\n\"There's no door, just an opening in the wall.\" CR>)>>"
  },
  "FLOYD-THROUGH-HOLE": {
   "name": "FLOYD-THROUGH-HOLE",
   "file": "comptwo.zil",
   "line": 266,
   "endLine": 280,
   "source": "<ROUTINE FLOYD-THROUGH-HOLE ()\n\t <COND (,HOLE-TRIP-FLAG\n\t\t<TELL \"\\\"Not again,\\\" whines Floyd.\" CR>\n\t\t<RTRUE>)\n\t       (T\n\t\t<SETG C-ELAPSED 50>\n\t\t<SETG HOLE-TRIP-FLAG T>\n\t\t<SETG BOARD-REPORTED T>\n\t\t<FCLEAR ,GOOD-BOARD ,INVISIBLE>\n\t        <TELL\n\"Floyd squeezes through the opening and is gone for quite a while. You hear\nthudding noises and squeals of enjoyment. After a while the noise stops, and\nFloyd emerges, looking downcast. \\\"Floyd found a rubber ball inside. Lots of\nfun for a while, but must have been old, because it fell apart. Nothing else\ninteresting inside. Just a shiny fromitz board.\\\"\" CR>)>>"
  },
  "GOOD-BOARD-F": {
   "name": "GOOD-BOARD-F",
   "file": "comptwo.zil",
   "line": 291,
   "endLine": 298,
   "source": "<ROUTINE GOOD-BOARD-F ()\n\t <COND (<AND <FSET? ,GOOD-BOARD ,NDESCBIT>\n\t\t     <VERB? TAKE EXAMINE RUB PUSH PULL MOVE LOOK-UNDER>\n\t\t     <EQUAL? ,GOOD-BOARD ,PRSO>>\n\t\t<TELL \"You can't see any \" D ,PRSO \" here.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<EXAMINE-BOARD>\n\t\t<CRLF>)>>"
  },
  "PLANETARY-DEFENSE-F": {
   "name": "PLANETARY-DEFENSE-F",
   "file": "comptwo.zil",
   "line": 392,
   "endLine": 402,
   "source": "<ROUTINE PLANETARY-DEFENSE-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This room is filled with a dazzling array of lights and controls. \">\n\t\t<COND (<NOT ,DEFENSE-FIXED>\n\t\t       <TELL\n\"One light, blinking quickly, catches your eye. It reads \\\"Surkit Boord\nFaalyur. WORNEENG: xis boord kuntroolz xe diskriminaashun surkits.\\\"\" >)>\n\t\t<TELL\" There is a small access panel on one wall which is \">\n\t\t<DDESC ,ACCESS-PANEL>\n\t\t<TELL \".\" CR>)>>"
  },
  "ACCESS-PANEL-F": {
   "name": "ACCESS-PANEL-F",
   "file": "comptwo.zil",
   "line": 413,
   "endLine": 453,
   "source": "<ROUTINE ACCESS-PANEL-F ()\n\t <COND (<VERB? OPEN>\n\t\t<COND (<FSET? ,ACCESS-PANEL ,OPENBIT>\n\t\t       <ALREADY-OPEN>)\n\t\t      (T\n\t\t       <FSET ,ACCESS-PANEL ,OPENBIT>\n\t\t       <TELL \"The panel swings open.\" CR>\n\t\t       <PERFORM ,V?LOOK-INSIDE ,ACCESS-PANEL>\n\t\t       <RTRUE>)>)\n\t       (<VERB? CLOSE>\n\t\t<COND (<FSET? ,ACCESS-PANEL ,OPENBIT>\n\t\t       <FCLEAR ,ACCESS-PANEL ,OPENBIT>\n\t\t       <TELL \"The panel swings closed.\" CR>)\n\t\t      (T\n\t\t       <IS-CLOSED>)>)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSI ,ACCESS-PANEL>>\n\t\t<COND (<NOT <FSET? ,ACCESS-PANEL ,OPENBIT>>\n\t\t       <TELL \"The panel is closed.\" CR>)\n\t\t      (,ACCESS-PANEL-FULL\n\t\t       <TELL \"There's no room.\" CR>)\n\t\t      (<EQUAL? ,PRSO ,GOOD-BOARD>\n\t\t       <REMOVE ,GOOD-BOARD>\n\t\t       <MOVE ,SECOND-BOARD ,ACCESS-PANEL>\n\t\t       <THIS-IS-IT ,SECOND-BOARD>\n\t\t       <SETG DEFENSE-FIXED T>\n\t\t       <SETG SCORE <+ ,SCORE 6>>\n\t\t       <SETG ACCESS-PANEL-FULL T>\n\t\t       <PUT-BOARD>\n\t\t       <TELL \" The warning lights stop flashing.\" CR>)\n\t\t      (<EQUAL? ,PRSO ,CRACKED-BOARD ,FRIED-BOARD>\n\t\t       <REMOVE ,PRSO>\n\t\t       <THIS-IS-IT ,SECOND-BOARD>\n\t\t       <MOVE ,SECOND-BOARD ,ACCESS-PANEL>\n\t\t       <SETG ACCESS-PANEL-FULL T>\n\t\t       <COND (<EQUAL? ,PRSO ,CRACKED-BOARD>\n\t\t\t      <SETG ITS-CRACKED T>)>\t\t\t      \n\t\t       <PUT-BOARD>\n\t\t       <CRLF>)\n\t\t      (T\n\t\t       <TELL \"The \" D, PRSO \" doesn't fit.\">)>)>>"
  },
  "FRIED-BOARD-F": {
   "name": "FRIED-BOARD-F",
   "file": "comptwo.zil",
   "line": 492,
   "endLine": 496,
   "source": "<ROUTINE FRIED-BOARD-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<EXAMINE-BOARD>\n\t\t<TELL\n\" This one is a bit blackened around the edges, though.\" CR>)>>"
  },
  "BOARD-F": {
   "name": "BOARD-F",
   "file": "comptwo.zil",
   "line": 500,
   "endLine": 520,
   "source": "<ROUTINE BOARD-F ()\n\t <COND (<VERB? TAKE>\n\t\t<COND (<EQUAL? ,PRSO ,SECOND-BOARD>\n\t\t       <COND (,DEFENSE-FIXED\n\t\t\t      <BOARD-SHOCK>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"The fromitz board slides out of the panel, producing an empty socket\nfor another board.\" CR>\n\t\t\t      <REMOVE ,SECOND-BOARD>\n\t\t\t      <SETG ACCESS-PANEL-FULL <>>\n\t\t\t      <COND (<EQUAL? ,ITS-CRACKED T>\n\t\t\t\t     <MOVE ,CRACKED-BOARD ,ADVENTURER>)\n\t\t\t\t    (T\n\t\t\t\t     <MOVE ,FRIED-BOARD ,ADVENTURER>)>\n\t\t\t      <THIS-IS-IT ,FRIED-BOARD>)>)\n\t\t      (T\n\t\t       <BOARD-SHOCK>)>)\n\t       (<VERB? EXAMINE>\n\t\t<EXAMINE-BOARD>\n\t\t<CRLF>)>>"
  },
  "EXAMINE-BOARD": {
   "name": "EXAMINE-BOARD",
   "file": "comptwo.zil",
   "line": 522,
   "endLine": 525,
   "source": "<ROUTINE EXAMINE-BOARD ()\n\t <TELL\n\"Like most fromitz boards, it is a twisted maze of silicon circuits. It is\nsquare, approximately seventeen centimeters on each side.\">>"
  },
  "PUT-BOARD": {
   "name": "PUT-BOARD",
   "file": "comptwo.zil",
   "line": 527,
   "endLine": 528,
   "source": "<ROUTINE PUT-BOARD ()\n\t <TELL \"The card clicks neatly into the socket.\">>"
  },
  "BOARD-SHOCK": {
   "name": "BOARD-SHOCK",
   "file": "comptwo.zil",
   "line": 530,
   "endLine": 532,
   "source": "<ROUTINE BOARD-SHOCK ()\n\t <TELL \"You jerk your hand back as you receive a powerful\nshock from the fromitz board.\" CR>>"
  },
  "PLANETARY-COURSE-CONTROL-F": {
   "name": "PLANETARY-COURSE-CONTROL-F",
   "file": "comptwo.zil",
   "line": 547,
   "endLine": 564,
   "source": "<ROUTINE PLANETARY-COURSE-CONTROL-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a long room whose walls are covered with complicated controls\nand colored lights. \">\n\t\t<COND (,COURSE-CONTROL-FIXED\n\t\t       <TELL\n\"One blinking light says \\\"Kors diivurjins minimiizeeng.\\\"\">)\n\t\t      (T\n\t\t       <TELL\n\"Two of these lights are blinking. The first one reads \\\"Bedistur Faalyur!\\\"\nThe other light reads \\\"Kritikul diivurjins frum pland kors.\\\"\">)>\n\t\t<TELL \" In one corner is a large metal cube whose lid is \">\n\t\t<COND (<FSET? ,CUBE ,OPENBIT>\n\t\t       <TELL \"open\">)\n\t\t      (T\n\t\t       <TELL \"closed\">)>\n\t\t<TELL \".\" CR>)>>"
  },
  "CUBE-F": {
   "name": "CUBE-F",
   "file": "comptwo.zil",
   "line": 574,
   "endLine": 609,
   "source": "<ROUTINE CUBE-F ()\n\t <COND (<VERB? OPEN>\n\t\t<COND (<FSET? ,CUBE ,OPENBIT>\n\t\t       <ALREADY-OPEN>)\n\t\t      (T\n\t\t       <FSET ,CUBE ,OPENBIT>\n\t\t       <TELL \"The lid swings open.\" CR>\n\t\t       <PERFORM ,V?LOOK-INSIDE ,CUBE>\n\t\t       <RTRUE>)>)\n\t       (<VERB? CLOSE>\n\t\t<COND (<FSET? ,CUBE ,OPENBIT>\n\t\t       <FCLEAR ,CUBE ,OPENBIT>\n\t\t       <TELL \"The lid swings closed.\" CR>)\n\t\t      (T\n\t\t       <IS-CLOSED>)>)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSI ,CUBE>>\n\t\t<COND (<NOT <FSET? ,CUBE ,OPENBIT>>\n\t\t       <TELL \"The cube is closed.\" CR>) \n\t\t      (<IN? ,BAD-BEDISTOR ,CUBE>\n\t\t       <TELL \"There's a fused bedistor in the way.\" CR>)\n\t\t      (<EQUAL? ,PRSO ,GOOD-BEDISTOR>\n\t\t       <MOVE ,GOOD-BEDISTOR ,CUBE>\n\t\t       <COND (<NOT <FSET? ,CUBE ,MUNGEDBIT>>\n\t\t\t      <SETG COURSE-CONTROL-FIXED T>\n\t\t\t      <FSET ,GOOD-BEDISTOR ,TRYTAKEBIT>\n\t\t\t      <SETG SCORE <+ ,SCORE 6>>\n\t\t\t      <TELL\n\"Done. The warning lights go out and another light goes on.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"Done.\" CR>)>)\n\t\t      (<EQUAL? ,PRSO ,BAD-BEDISTOR>\n\t\t       <MOVE ,BAD-BEDISTOR ,CUBE>\n\t\t       <TELL \"Done.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The \" D, PRSO \" doesn't fit.\">)>)>>"
  },
  "BAD-BEDISTOR-F": {
   "name": "BAD-BEDISTOR-F",
   "file": "comptwo.zil",
   "line": 620,
   "endLine": 632,
   "source": "<ROUTINE BAD-BEDISTOR-F ()\n\t <COND (<AND <VERB? TAKE>\n\t\t     <IN? ,BAD-BEDISTOR ,CUBE>>\n\t\t<TELL \"It seems to be fused to its socket.\" CR>)\n\t       (<VERB? ZATTRACT>\n\t\t<COND (<EQUAL? ,PRSI ,PLIERS>\n\t\t       <MOVE ,BAD-BEDISTOR ,ADVENTURER>\n\t\t       <FCLEAR ,BAD-BEDISTOR ,TRYTAKEBIT>\n\t\t       <TELL\n\"With a tug, you manage to remove the fused bedistor.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"You can't get a grip on the bedistor with that.\" CR>)>)>>"
  },
  "GREEN-SPOOL-F": {
   "name": "GREEN-SPOOL-F",
   "file": "comptwo.zil",
   "line": 672,
   "endLine": 678,
   "source": "<ROUTINE GREEN-SPOOL-F ()\n\t <COND (<AND <VERB? TAKE>\n\t\t     <IN? ,GREEN-SPOOL ,SPOOL-READER>\n\t\t     <FSET? ,SPOOL-READER ,ONBIT>>\n\t\t<MOVE ,GREEN-SPOOL ,ADVENTURER>\n\t\t<FCLEAR ,GREEN-SPOOL ,TRYTAKEBIT>\n\t\t<TELL \"The screen goes blank as you take the spool.\" CR>)>>"
  },
  "TERMINAL-F": {
   "name": "TERMINAL-F",
   "file": "comptwo.zil",
   "line": 730,
   "endLine": 768,
   "source": "<ROUTINE TERMINAL-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The computer terminal consists of a video display screen, a keyboard with\nten keys numbered from zero through nine, and an on-off switch. \">\n\t\t<COND (<FSET? ,TERMINAL ,ONBIT>\n\t\t       <TELL\n\"The screen displays some writing:\" CR ,SCREEN-TEXT CR>\n\t\t       <COND (<G? ,MENU-LEVEL 9>\n\t\t\t      <TELL ,MORE-INFO CR>)>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"The screen is dark.\" CR>)>)\n\t       (<VERB? READ>\n\t\t<COND (<FSET? ,TERMINAL ,ONBIT>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <COND (<G? ,MENU-LEVEL 9>\n\t\t\t      <TELL ,MORE-INFO CR>)>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"The screen is blank.\" CR>)>)\n\t       (<VERB? LAMP-ON>\n\t\t<COND (<FSET? ,TERMINAL ,ONBIT>\n\t\t       <TELL \"It's already on.\" CR>)\n\t\t      (T\n\t\t       <FSET ,TERMINAL ,ONBIT>\n\t\t       <FSET ,TERMINAL ,TOUCHBIT>\n\t\t       <SETG SCREEN-TEXT ,MAIN-MENU>\n\t\t       <TELL\n\"The screen gives off a green flash, and then some writing appears on\nthe screen:\" CR>\n\t\t       <TELL ,SCREEN-TEXT CR>)>)\n\t       (<VERB? LAMP-OFF>\n\t\t<COND (<FSET? ,TERMINAL ,ONBIT>\n\t\t       <FCLEAR ,TERMINAL ,ONBIT>\n\t\t       <SETG MENU-LEVEL 0>\n\t\t       <TELL \"The screen goes dark.\" CR>)\n\t\t      (T\n\t\t       <TELL \"It isn't on!\" CR>)>)>>"
  },
  "LIBRARY-TYPE": {
   "name": "LIBRARY-TYPE",
   "file": "comptwo.zil",
   "line": 770,
   "endLine": 1034,
   "source": "<ROUTINE LIBRARY-TYPE ()\n\t <COND (<NOT <EQUAL? ,PRSO ,INTNUM>>\n\t\t<NUMBERS-ONLY>)\n\t       (<EQUAL? ,MENU-LEVEL 0>\n\t\t<COND (<EQUAL? ,P-NUMBER 0>\n\t\t       <TELL ,NO-MEANING CR>)\n\t\t      (<EQUAL? ,P-NUMBER 1>\n\t\t       <TELL ,SCREEN-CLEARS CR>\n\t\t       <SETG SCREEN-TEXT ,HISTORY-MENU>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <SETG MENU-LEVEL 1>)\n\t\t      (<EQUAL? ,P-NUMBER 2>\n\t\t       <TELL ,SCREEN-CLEARS CR>\n\t\t       <SETG SCREEN-TEXT ,CULTURE-MENU>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <SETG MENU-LEVEL 2>)\n\t\t      (<EQUAL? ,P-NUMBER 3>\n\t\t       <TELL ,SCREEN-CLEARS CR>\n\t\t       <SETG SCREEN-TEXT ,TECHNOLOGY-MENU>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <SETG MENU-LEVEL 3>)\n\t\t      (<EQUAL? ,P-NUMBER 4>\n\t\t       <TELL ,SCREEN-CLEARS CR>\n\t\t       <SETG SCREEN-TEXT ,GEOGRAPHY-MENU>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <SETG MENU-LEVEL 4>)\n\t\t      (<EQUAL? ,P-NUMBER 5>\n\t\t       <TELL ,SCREEN-CLEARS CR>\n\t\t       <SETG SCREEN-TEXT ,PROJECT-MENU>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <SETG MENU-LEVEL 5>)\n\t\t      (<EQUAL? ,P-NUMBER 6>\n\t\t       <SETG MENU-LEVEL 6>\n\t\t       <TELL ,SCREEN-CLEARS CR>\n\t\t       <SETG SCREEN-TEXT ,INTERLOGIC-MENU>\n\t\t       <TELL ,SCREEN-TEXT CR>)\n\t\t      (<G? ,P-NUMBER 6>\n\t\t       <TELL ,NO-MEANING CR>)>)\n\t       (<EQUAL? ,MENU-LEVEL 1>\n\t\t<COND (<EQUAL? ,P-NUMBER 0>\n\t\t       <SETG MENU-LEVEL 0>\n\t\t       <TELL ,SCREEN-CLEARS CR>\n\t\t       <SETG SCREEN-TEXT ,MAIN-MENU>\n\t\t       <TELL ,SCREEN-TEXT CR>)\n\t\t      (<EQUAL? ,P-NUMBER 1>\n\t\t       <SETG MENU-LEVEL 11>\n\t\t       <TELL ,TEXT-APPEARS CR>\n\t\t       <SETG SCREEN-TEXT ,11-TEXT>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <TELL ,MORE-INFO CR>)\n\t\t      (<EQUAL? ,P-NUMBER 2>\n\t\t       <SETG MENU-LEVEL 12>\n\t\t       <TELL ,TEXT-APPEARS CR>\n\t\t       <SETG SCREEN-TEXT ,12-TEXT>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <TELL ,MORE-INFO CR>)\n\t\t      (<EQUAL? ,P-NUMBER 3>\n\t\t       <SETG MENU-LEVEL 13>\n\t\t       <TELL ,TEXT-APPEARS CR>\n\t\t       <SETG SCREEN-TEXT ,13-TEXT>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <TELL ,MORE-INFO CR>)\n\t\t      (<G? ,P-NUMBER 3>\n\t\t       <TELL ,NO-MEANING CR>)>)\n\t       (<EQUAL? ,MENU-LEVEL 2>\n\t\t<COND (<EQUAL? ,P-NUMBER 0>\n\t\t       <SETG MENU-LEVEL 0>\n\t\t       <TELL ,SCREEN-CLEARS CR>\n\t\t       <SETG SCREEN-TEXT ,MAIN-MENU>\n\t\t       <TELL ,SCREEN-TEXT CR>)\n\t\t      (<EQUAL? ,P-NUMBER 1>\n\t\t       <SETG MENU-LEVEL 21>\n\t\t       <TELL ,TEXT-APPEARS CR>\n\t\t       <SETG SCREEN-TEXT ,21-TEXT>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <TELL ,MORE-INFO CR>)\n\t\t      (<EQUAL? ,P-NUMBER 2>\n\t\t       <SETG MENU-LEVEL 22>\n\t\t       <TELL ,TEXT-APPEARS CR>\n\t\t       <SETG SCREEN-TEXT ,22-TEXT>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <TELL ,MORE-INFO CR>)\n\t\t      (<EQUAL? ,P-NUMBER 3>\n\t\t       <SETG MENU-LEVEL 23>\n\t\t       <TELL ,TEXT-APPEARS CR>\n\t\t       <SETG SCREEN-TEXT ,23-TEXT>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <TELL ,MORE-INFO CR>)\n\t\t      (<G? ,P-NUMBER 4>\n\t\t       <TELL ,NO-MEANING CR>)>)\n\t       (<EQUAL? ,MENU-LEVEL 3>\n\t\t<COND (<EQUAL? ,P-NUMBER 0>\n\t\t       <SETG MENU-LEVEL 0>\n\t\t       <TELL ,SCREEN-CLEARS CR>\n\t\t       <SETG SCREEN-TEXT ,MAIN-MENU>\n\t\t       <TELL ,SCREEN-TEXT CR>)\n\t\t      (<EQUAL? ,P-NUMBER 1>\n\t\t       <SETG MENU-LEVEL 31>\n\t\t       <TELL ,TEXT-APPEARS CR>\n\t\t       <SETG SCREEN-TEXT ,31-TEXT>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <TELL ,MORE-INFO CR>)\n\t\t      (<EQUAL? ,P-NUMBER 2>\n\t\t       <SETG MENU-LEVEL 32>\n\t\t       <TELL ,TEXT-APPEARS CR>\n\t\t       <SETG SCREEN-TEXT ,32-TEXT>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <TELL ,MORE-INFO CR>)\n\t\t      (<EQUAL? ,P-NUMBER 3>\n\t\t       <SETG MENU-LEVEL 33>\n\t\t       <TELL ,TEXT-APPEARS CR>\n\t\t       <SETG SCREEN-TEXT ,33-TEXT>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <TELL ,MORE-INFO CR>)\n\t\t      (<EQUAL? ,P-NUMBER 4>\n\t\t       <SETG MENU-LEVEL 34>\n\t\t       <TELL ,TEXT-APPEARS CR>\n\t\t       <SETG SCREEN-TEXT ,34-TEXT>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <TELL ,MORE-INFO CR>)\n\t\t      (<EQUAL? ,P-NUMBER 5>\n\t\t       <SETG MENU-LEVEL 35>\n\t\t       <TELL ,TEXT-APPEARS CR>\n\t\t       <SETG SCREEN-TEXT ,35-TEXT>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <TELL ,MORE-INFO CR>)\n\t\t      (<G? ,P-NUMBER 5>\n\t\t       <TELL ,NO-MEANING CR>)>)\n\t       (<EQUAL? ,MENU-LEVEL 4>\n\t\t<COND (<EQUAL? ,P-NUMBER 0>\n\t\t       <SETG MENU-LEVEL 0>\n\t\t       <TELL ,SCREEN-CLEARS CR>\n\t\t       <SETG SCREEN-TEXT ,MAIN-MENU>\n\t\t       <TELL ,SCREEN-TEXT CR>)\n\t\t      (<EQUAL? ,P-NUMBER 1>\n\t\t       <SETG MENU-LEVEL 41>\n\t\t       <TELL ,TEXT-APPEARS CR>\n\t\t       <SETG SCREEN-TEXT ,41-TEXT>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <TELL ,MORE-INFO CR>)\n\t\t      (<EQUAL? ,P-NUMBER 2>\n\t\t       <SETG MENU-LEVEL 42>\n\t\t       <TELL ,TEXT-APPEARS CR>\n\t\t       <SETG SCREEN-TEXT ,42-TEXT>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <TELL ,MORE-INFO CR>)\n\t\t      (<EQUAL? ,P-NUMBER 3>\n\t\t       <SETG MENU-LEVEL 43>\n\t\t       <TELL ,TEXT-APPEARS CR>\n\t\t       <SETG SCREEN-TEXT ,43-TEXT>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <TELL ,MORE-INFO CR>)\n\t\t      (<G? ,P-NUMBER 3>\n\t\t       <TELL ,NO-MEANING CR>)>)\n\t       (<EQUAL? ,MENU-LEVEL 5>\n\t\t<COND (<EQUAL? ,P-NUMBER 0>\n\t\t       <SETG MENU-LEVEL 0>\n\t\t       <TELL ,SCREEN-CLEARS CR>\n\t\t       <SETG SCREEN-TEXT ,MAIN-MENU>\n\t\t       <TELL ,SCREEN-TEXT CR>)\n\t\t      (<EQUAL? ,P-NUMBER 1>\n\t\t       <SETG MENU-LEVEL 51>\n\t\t       <TELL ,TEXT-APPEARS CR>\n\t\t       <SETG SCREEN-TEXT ,51-TEXT>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <TELL ,MORE-INFO CR>)\n\t\t      (<EQUAL? ,P-NUMBER 2>\n\t\t       <SETG MENU-LEVEL 52>\n\t\t       <TELL ,TEXT-APPEARS CR>\n\t\t       <SETG SCREEN-TEXT ,52-TEXT>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <TELL ,MORE-INFO CR>)\n\t\t      (<EQUAL? ,P-NUMBER 3>\n\t\t       <SETG MENU-LEVEL 53>\n\t\t       <TELL ,TEXT-APPEARS CR>\n\t\t       <SETG SCREEN-TEXT ,53-TEXT>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <TELL ,MORE-INFO CR>)\n\t\t      (<G? ,P-NUMBER 3>\n\t\t       <TELL ,NO-MEANING CR>)>)\n\t       (<EQUAL? ,MENU-LEVEL 6>\n\t\t<COND (<EQUAL? ,P-NUMBER 0>\n\t\t       <SETG MENU-LEVEL 0>\n\t\t       <TELL ,SCREEN-CLEARS CR>\n\t\t       <SETG SCREEN-TEXT ,MAIN-MENU>\n\t\t       <TELL ,SCREEN-TEXT CR>)\n\t\t      (<EQUAL? ,P-NUMBER 1>\n\t\t       <SETG MENU-LEVEL 61>\n\t\t       <TELL ,TEXT-APPEARS CR>\n\t\t       <SETG SCREEN-TEXT ,61-TEXT>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <TELL ,MORE-INFO CR>\n\t\t       <COND (<IN? ,FLOYD ,HERE>\n\t\t\t      <SETG FLOYD-SPOKE T>\n\t\t\t      <TELL\n\"Floyd, peering over your shoulder, says \\\"Oh, I love that game! Solved every\nproblem, except couldn't figure out how to get into white house.\\\"\" CR>)>)\n\t\t      (<EQUAL? ,P-NUMBER 2>\n\t\t       <SETG MENU-LEVEL 62>\n\t\t       <TELL ,TEXT-APPEARS CR>\n\t\t       <SETG SCREEN-TEXT ,62-TEXT>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <TELL ,MORE-INFO CR>)\n\t\t      (<EQUAL? ,P-NUMBER 3>\n\t\t       <SETG MENU-LEVEL 63>\n\t\t       <TELL ,TEXT-APPEARS CR>\n\t\t       <SETG SCREEN-TEXT ,63-TEXT>\n\t\t       <TELL ,SCREEN-TEXT CR>\n\t\t       <TELL ,MORE-INFO CR>)\n\t\t      (<G? ,P-NUMBER 3>\n\t\t       <TELL ,NO-MEANING CR>)>)\n\t       (<AND <G? ,MENU-LEVEL 10>\n\t\t     <L? ,MENU-LEVEL 20>>\n\t\t<COND (<EQUAL? ,P-NUMBER 0>\n\t\t       <SETG MENU-LEVEL 1>\n\t\t       <TELL ,SCREEN-CLEARS CR>\n\t\t       <SETG SCREEN-TEXT ,HISTORY-MENU>\n\t\t       <TELL ,SCREEN-TEXT CR>)\n\t\t      (T\n\t\t       <TELL ,LOW-END CR>)>)\n\t       (<AND <G? ,MENU-LEVEL 20>\n\t\t     <L? ,MENU-LEVEL 30>>\n\t\t<COND (<EQUAL? ,P-NUMBER 0>\n\t\t       <SETG MENU-LEVEL 2>\n\t\t       <TELL ,SCREEN-CLEARS CR>\n\t\t       <SETG SCREEN-TEXT ,CULTURE-MENU>\n\t\t       <TELL ,SCREEN-TEXT CR>)\n\t\t      (T\n\t\t       <TELL ,LOW-END CR>)>)\n\t       (<AND <G? ,MENU-LEVEL 30>\n\t\t     <L? ,MENU-LEVEL 40>>\n\t\t<COND (<EQUAL? ,P-NUMBER 0>\n\t\t       <SETG MENU-LEVEL 3>\n\t\t       <TELL ,SCREEN-CLEARS CR>\n\t\t       <SETG SCREEN-TEXT ,TECHNOLOGY-MENU>\n\t\t       <TELL ,SCREEN-TEXT CR>)\n\t\t      (T\n\t\t       <TELL ,LOW-END CR>)>)\n\t       (<AND <G? ,MENU-LEVEL 40>\n\t\t     <L? ,MENU-LEVEL 50>>\n\t\t<COND (<EQUAL? ,P-NUMBER 0>\n\t\t       <SETG MENU-LEVEL 4>\n\t\t       <TELL ,SCREEN-CLEARS CR>\n\t\t       <SETG SCREEN-TEXT ,GEOGRAPHY-MENU>\n\t\t       <TELL ,SCREEN-TEXT CR>)\n\t\t      (T\n\t\t       <TELL ,LOW-END CR>)>)\n\t       (<AND <G? ,MENU-LEVEL 50>\n\t\t     <L? ,MENU-LEVEL 60>>\n\t\t<COND (<EQUAL? ,P-NUMBER 0>\n\t\t       <SETG MENU-LEVEL 5>\n\t\t       <TELL ,SCREEN-CLEARS CR>\n\t\t       <SETG SCREEN-TEXT ,PROJECT-MENU>\n\t\t       <TELL ,SCREEN-TEXT CR>)\n\t\t      (T\n\t\t       <TELL ,LOW-END CR>)>)\n\t       (<AND <G? ,MENU-LEVEL 60>\n\t\t     <L? ,MENU-LEVEL 70>>\n\t\t<COND (<EQUAL? ,P-NUMBER 0>\n\t\t       <SETG MENU-LEVEL 6>\n\t\t       <TELL ,SCREEN-CLEARS CR>\n\t\t       <SETG SCREEN-TEXT ,INTERLOGIC-MENU>\n\t\t       <TELL ,SCREEN-TEXT CR>)\n\t\t      (T\n\t\t       <TELL ,LOW-END CR>)>)>>"
  },
  "SPOOL-READER-F": {
   "name": "SPOOL-READER-F",
   "file": "comptwo.zil",
   "line": 1223,
   "endLine": 1282,
   "source": "<ROUTINE SPOOL-READER-F ()\n\t <COND (<VERB? LAMP-ON>\n\t\t<COND (<FSET? ,SPOOL-READER ,ONBIT>\n\t\t       <TELL \"The spool reader is already on.\" CR>)\n\t\t      (T\n\t\t       <FSET ,SPOOL-READER ,ONBIT>\n\t\t       <FSET ,SPOOL-READER ,TOUCHBIT> \n\t\t       <COND (<FIRST? ,SPOOL-READER>\n\t\t\t      <TELL ,SPOOL-TEXT CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"The machine hums quietly, and the screen lights up with the phrase\n\\\"Pleez insurt spuul.\\\"\" CR>)>)>)\n\t       (<VERB? LAMP-OFF>\n\t\t<COND (<FSET? ,SPOOL-READER ,ONBIT>\n\t\t       <FCLEAR ,SPOOL-READER ,ONBIT>\n\t\t       <TELL \"The spool reader is now off.\" CR>)\n\t\t      (T\n\t\t       <TELL \"It's not on!\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"The machine has a small screen, and below that, a small circular opening.\nThe screen is currently \">\n\t\t<COND (<AND <FSET? ,SPOOL-READER ,ONBIT>\n\t\t\t    <FIRST? ,SPOOL-READER>>\n\t\t       <TELL \"displaying some information:\" CR>\n\t\t       <TELL ,SPOOL-TEXT CR>)\n\t\t      (T\n\t\t       <TELL \"blank.\" CR>)>)\n\t       (<VERB? READ>\n\t\t<COND (<AND <FSET? ,SPOOL-READER ,ONBIT>\n\t\t\t    <FIRST? ,SPOOL-READER>>\n\t\t       <TELL ,SPOOL-TEXT CR>)\n\t\t      (T\n\t\t       <TELL \"The screen is blank.\" CR>)>)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSI ,SPOOL-READER>>\n\t\t<COND (<FIRST? ,SPOOL-READER>\n\t\t       <TELL \"There's already a spool in the reader.\" CR>)\n\t\t      (<EQUAL? ,PRSO ,GREEN-SPOOL>\n\t\t       <SETG SPOOL-TEXT ,GREEN-TEXT>\n\t\t       <MOVE ,GREEN-SPOOL ,SPOOL-READER>\n\t\t       <FSET ,GREEN-SPOOL ,TRYTAKEBIT>\n\t\t       <TELL ,SPOOL-FITS>\n\t\t       <COND (<FSET? ,SPOOL-READER ,ONBIT>\n\t\t\t      <TELL ,SOME-INFO>)>\n\t\t       <TELL CR>)\n\t\t      (<EQUAL? ,PRSO ,RED-SPOOL>\n\t\t       <SETG SPOOL-TEXT ,RED-TEXT>\n\t\t       <MOVE ,RED-SPOOL ,SPOOL-READER>\n\t\t       <FSET ,RED-SPOOL ,TRYTAKEBIT>\n\t\t       <TELL ,SPOOL-FITS>\n\t\t       <COND (<FSET? ,SPOOL-READER ,ONBIT>\n\t\t\t      <TELL ,SOME-INFO>)>\n\t\t       <TELL CR>)\n\t\t      (T\n\t\t       <TELL \"It doesn't fit in the circular opening.\" CR>)>)\n\t       (<VERB? CLOSE>\n\t\t<NO-CLOSE>\n\t\t<RTRUE>)>>"
  },
  "PROJCON-OFFICE-F": {
   "name": "PROJCON-OFFICE-F",
   "file": "comptwo.zil",
   "line": 1365,
   "endLine": 1385,
   "source": "<ROUTINE PROJCON-OFFICE-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This office looks like a headquarters of some kind. Exits lead north and\neast. The west wall displays a logo. \">\n\t\t<COND (,COMPUTER-FIXED\n\t\t       <TELL\n\"The mural that previously adorned the south wall has slid away, revealing\nan open doorway to a large elevator!\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"The south wall is completely covered by a garish mural which clashes\nwith the other decor of the room.\" CR>)>)\n\t       (<AND <EQUAL? .RARG ,M-END>\n\t\t     <IN? ,FLOYD ,HERE>\n\t\t     <NOT ,MURAL-FLAG>>\n\t\t<SETG MURAL-FLAG T>\n\t\t<SETG FLOYD-SPOKE T>\n\t\t<TELL\n\"Floyd surveys the mural and scratches his head. \\\"I don't remember seeing\nthis before,\\\" he comments.\" CR>)>>"
  },
  "CRYO-ELEVATOR-F": {
   "name": "CRYO-ELEVATOR-F",
   "file": "comptwo.zil",
   "line": 1409,
   "endLine": 1415,
   "source": "<ROUTINE CRYO-ELEVATOR-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a large, plain elevator with one solitary button and a door\nto the north which is \">\n\t\t<DDESC ,CRYO-ELEVATOR-DOOR>\n\t\t<TELL \".\" CR>)>>"
  },
  "CRYO-EXIT-F": {
   "name": "CRYO-EXIT-F",
   "file": "comptwo.zil",
   "line": 1417,
   "endLine": 1425,
   "source": "<ROUTINE CRYO-EXIT-F ()\n\t <COND (<FSET? ,CRYO-ELEVATOR-DOOR ,OPENBIT>\n\t\t<COND (,CRYO-SCORE-FLAG\n\t\t       ,CRYO-ANTEROOM)\n\t\t      (T\n\t\t       ,PROJCON-OFFICE)>)\n\t       (T\n\t\t<DOOR-CLOSED>\n\t\t<RFALSE>)>>"
  },
  "I-CRYO-ELEVATOR-ARRIVE": {
   "name": "I-CRYO-ELEVATOR-ARRIVE",
   "file": "comptwo.zil",
   "line": 1429,
   "endLine": 1431,
   "source": "<ROUTINE I-CRYO-ELEVATOR-ARRIVE ()\n\t <FSET ,CRYO-ELEVATOR-DOOR ,OPENBIT>\n\t <TELL CR \"The elevator door opens onto a room to the north.\" CR>>"
  },
  "CRYO-ANTEROOM-F": {
   "name": "CRYO-ANTEROOM-F",
   "file": "comptwo.zil",
   "line": 1443,
   "endLine": 1528,
   "source": "<ROUTINE CRYO-ANTEROOM-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"The elevator closes as you leave it, and you find yourself in a small,\nchilly room. To the north, through a wide arch, is an enormous chamber lined\nfrom floor to ceiling with thousands of cryo-units. You can see similar\nchambers beyond, and your mind staggers at the thought of the millions of\nindividuals asleep for countless centuries.|\n|\nIn the anteroom where you stand is a solitary cryo-unit, its cover frosted.\nNext to the cryo-unit is a complicated control panel.\" CR CR>)\n\t       (<EQUAL? .RARG ,M-END>\n\t\t<TELL\n\"A door slides open and a medical robot glides in. It opens the cryo-unit\nand administers an injection to its inhabitant. As the robot glides away, a\nfigure rises from the cryo-unit -- a handsome, middle-aged woman with flowing\nred hair. She spends some time studying readouts from the control panel\">\n\t\t<COND (<AND ,COMM-FIXED ,DEFENSE-FIXED>\n\t\t       <TELL \", pressing several keys.\" CR>)\n\t\t      (T\n\t\t       <TELL \".\" CR>)>\n\t\t<COND (,COURSE-CONTROL-FIXED\n\t\t       <TELL\n\"|\nAs other cryo-units in the chambers beyond begin opening, the woman turns\nto you, bows gracefully, and speaks in a beautiful, lilting\nvoice. \\\"I am Veldina, leader of Resida. Thanks to you, the cure has been\ndiscovered, and the planetary systems repaired. We are eternally\ngrateful.\\\"\" CR>\n\t\t       <COND (<AND ,COMM-FIXED ,DEFENSE-FIXED>\n\t\t\t      <TELL\n\"|\n\\\"You will also be glad to hear that a ship of your Stellar Patrol now orbits\nthe planet. I have sent them the coordinates for this room.\\\" As if on cue,\na landing party from the S.P.S. Flathead materializes nearby. Blather is with\nthem, having been picked up from deep space in another escape pod, babbling\ncravenly. Captain Sterling of the Flathead acknowledges your heroic actions,\nand informs you of your promotion to Lieutenant First Class.|\n|\nAs a team of mutant hunters head for the cryo-elevator, Veldina mentions that\nthe grateful people of Resida offer you leadership of their world. Captain\nSterling points out that, even if you choose to remain on Resida, Blather\n(demoted to Ensign Twelfth Class) has been assigned as your personal toilet\nattendant.|\n|\nYou feel a sting from your arm and turn to see a medical robot moving\naway after administering the antidote for The Disease.|\n|\nA team of robot technicians step into the anteroom. They part their ranks, and\na familiar figure comes bounding toward you! \\\"Hi!\\\" shouts Floyd, with\nuncontrolled enthusiasm. \\\"Floyd feeling better now!\\\" Smiling from ear to\near, he says, \\\"Look what Floyd found!\\\" He hands you a helicopter key,\na reactor elevator card, and a paddleball set. \\\"Maybe we can use them in\nthe sequel...\\\"\" CR CR>\n\t\t\t      <FINISH <>>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"|\n\\\"Unfortunately, a second ship from your Stellar Patrol has \">\n\t\t\t      <COND (<NOT ,DEFENSE-FIXED>\n\t\t\t\t     <TELL\n\"been destroyed by our malfunctioning meteor defenses.\">)\n\t\t\t\t    (T\n\t\t\t\t     <TELL\n\"come looking for survivors, and because of our malfunctioning communications\nsystem, has given up and departed.\">)>\n\t\t\t      <TELL\n\" I fear that you are stranded on Resida, possibly forever. However, we\nshow our gratitude by offering you an unlimited bank account and a house\nin the country.\\\"\" CR CR>\n\t\t\t      <FINISH <>>)>)\n\t\t      (T\n\t\t       <TELL\n\"|\nShe turns to you and, with a strained voice says, \\\"You have fixed our\ncomputer and a Cure has been discovered, and we are grateful. But alas,\nit was all in vain. Our planetary course control system has malfunctioned,\nand the orbit has now decayed beyond correction. Soon Resida will plunge\ninto the sun.\\\"\" CR CR>\n\t\t       <COND (<AND ,COMM-FIXED ,DEFENSE-FIXED>\n\t\t\t      <TELL\n\"Veldina examines the control panel again. \\\"Fortunately, another ship from\nyour Stellar Patrol has arrived, so at least you will survive.\\\" At that\nmoment, a landing party from the S.P.S. Flathead materializes, and takes you\naway from the doomed world.\" CR CR>)>\n\t\t       <FINISH <>>)>)>>"
  },
  "COMPUTER-ACTION": {
   "name": "COMPUTER-ACTION",
   "file": "comptwo.zil",
   "line": 1574,
   "endLine": 1584,
   "source": "<ROUTINE COMPUTER-ACTION ()\n\t <SETG COMPUTER-FLAG T>\n\t <SETG FLOYD-SPOKE T>\n\t <TELL \"Floyd examines the \">\n\t <COND (<EQUAL? ,HERE ,COMPUTER-ROOM>\n\t\t<TELL \"glowing light\">)\n\t       (T\n\t\t<TELL \"computer printout\">)>\n\t <TELL \". With a concerned frown, he says, \\\"Uh oh. Computer is\nbroken. A Doctor-person once told Floyd that Computer is the most important\npart of the Project.\\\"\" CR>>"
  },
  "PRINT-OUT-F": {
   "name": "PRINT-OUT-F",
   "file": "comptwo.zil",
   "line": 1595,
   "endLine": 1615,
   "source": "<ROUTINE PRINT-OUT-F ()\n\t <COND (<VERB? READ EXAMINE>\n\t\t<FIXED-FONT-ON>\n\t\t<TELL\n\"The printout is hundreds of pages long. It would take many chrons to\nread it all. The last page looks pretty interesting, though:|\n|\n\\\"Daalee Statis Reeport:|\nPREELIMINEREE REESURC:  100.000%|\nINTURMEEDEEIT REESURC:  100.000%|\nFIINUL REESURC:         100.000%|\nDRUG PROODUKSHUN:       100.000%|\nDRUG TESTEENG:           99.985%|\nProojektid tiim tuu reeviivul prooseedzur:  0 daaz, 0.8 kronz|\n|\n|\n*** ALURT! ALURT! ***|\nMalfunkshun in Sekshun 384! Sumuneeng reepaar roobot.\\\"|\n|\nThe printout ends at this point.\" CR>\n\t\t<FIXED-FONT-OFF>)>>"
  },
  "MINI-CARD-F": {
   "name": "MINI-CARD-F",
   "file": "comptwo.zil",
   "line": 1645,
   "endLine": 1648,
   "source": "<ROUTINE MINI-CARD-F ()\n\t <COND (<AND <FSET? ,MINI-CARD ,NDESCBIT>\n\t\t     <VERB? RUB MOVE TURN SET TAKE PUSH PULL SMELL>>\n\t\t<TELL \"It's in the next room.\" CR>)>>"
  },
  "LAB-UNIFORM-F": {
   "name": "LAB-UNIFORM-F",
   "file": "comptwo.zil",
   "line": 1700,
   "endLine": 1728,
   "source": "<ROUTINE LAB-UNIFORM-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"It is a plain lab uniform. The logo above the pocket depicts a flame burning\nabove some kind of sleep chamber. The pocket is \">\n\t\t<DDESC ,LAB-UNIFORM>\n\t\t<TELL \".\" CR>)\n\t       (<VERB? SEARCH OPEN>\n\t        <COND (<FSET? ,LAB-UNIFORM ,OPENBIT>\n\t\t       <TELL \"The pocket is already open.\" CR>)\n\t\t      (T\n\t\t       <FSET ,LAB-UNIFORM ,OPENBIT>\n\t\t       <COND (,UNIFORM-OPENED\n\t\t\t      <COND (<FIRST? ,LAB-UNIFORM>\n\t\t\t\t     <TELL\n\"Opening the uniform's pocket reveals \">\n\t\t\t\t     <PRINT-CONTENTS ,LAB-UNIFORM>\n\t\t\t\t     <TELL \".\" CR>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL \"The pocket is empty.\" CR>)>)\n\t\t\t     (T\n\t\t              <FSET ,LAB-UNIFORM ,OPENBIT>\n\t\t\t      <SETG UNIFORM-OPENED T>\n\t\t\t      <TELL\n\"You discover a small piece of paper and a teleportation access card in the\npocket of the uniform.\" CR>)>)>)\n\t       (<AND <VERB? WEAR>\n\t\t     <FSET? ,PATROL-UNIFORM ,WORNBIT>>\n\t\t<TELL \"It won't fit on top of the Patrol uniform.\" CR>)>>"
  },
  "COMBINATION-PAPER-F": {
   "name": "COMBINATION-PAPER-F",
   "file": "comptwo.zil",
   "line": 1755,
   "endLine": 1759,
   "source": "<ROUTINE COMBINATION-PAPER-F ()\n\t <COND (<VERB? READ EXAMINE>\n\t\t<TELL\n\"Week uv 14-Juun--2882. Kombinaashun tuu Konfurins Ruum: \" N ,NUMBER-NEEDED\n\".\" CR>)>>"
  },
  "BIO-LOCK-EAST-F": {
   "name": "BIO-LOCK-EAST-F",
   "file": "comptwo.zil",
   "line": 1796,
   "endLine": 1838,
   "source": "<ROUTINE BIO-LOCK-EAST-F (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-END>\n\t\t     <IN? ,FLOYD ,HERE>\n\t\t     <FSET? ,FLOYD ,RLANDBIT>\n\t\t     <NOT <EQUAL? ,FLOYD ,WINNER>>>\n\t\t<COND (,FLOYD-WAITING\n\t\t       <COND (<G? ,WAITING-COUNTER 3>\n\t\t\t      <SETG FLOYD-WAITING <>>\n\t\t\t      <SETG FLOYD-GAVE-UP T>\n\t\t\t      <SETG FLOYD-SPOKE T>\n\t\t\t      <SETG FLOYD-FOLLOW <>>\n\t\t\t      <MOVE ,FLOYD ,BIO-LOCK-WEST>\n\t\t\t      <ENABLE <QUEUE I-FLOYD 1>>\n\t\t\t      <TELL\n\"\\\"Okay,\\\" says Floyd with uncharacteristic annoyance. \\\"Forget about the\nstupid card.\\\" He goes to the other end of the bio-lock and sulks.\" CR>)\n\t\t\t     (<NOT ,FLOYD-FORAYED>\n\t\t\t      <SETG FLOYD-SPOKE T>\n\t\t\t      <SETG WAITING-COUNTER <+ ,WAITING-COUNTER 1>>\n\t\t\t      <TELL\n\"Floyd looks at you with a dash of impatience and a healthy helping of\nnervousness. \\\"Well?\\\" he asks. \\\"Are you going to open the door?\\\"\" CR>)>)\n\t\t      (<AND <NOT ,FLOYD-GAVE-UP>\n\t\t\t    <NOT ,FLOYD-PEERED>>\n\t\t       <SETG FLOYD-SPOKE T>\n\t\t       <SETG FLOYD-PEERED T>\n\t\t       <ENABLE <QUEUE I-CLEAR-FLOYD-PEER 40>>\n\t\t       <FCLEAR ,MINI-CARD ,INVISIBLE>\n\t\t       <TELL\n\"Floyd stands on his tiptoes and peers in the window. \">\n\t\t       <COND (,COMPUTER-FLAG\n\t\t\t      <SETG FLOYD-WAITING T>\n\t\t\t      <TELL\n\"\\\"Looks dangerous in there,\\\" says Floyd. \\\"I don't think you should go\ninside.\\\" He peers in again. \\\"We'll need card there to fix computer. Hmmm...\nI know! Floyd will get card. Robots are tough. Nothing can hurt robots. You\nopen the door, then Floyd will rush in. Then you close door. When Floyd knocks,\nopen door again. Okay? Go!\\\" Floyd's voice trembles slightly as he waits for\nyou to open the door.\">)\n\t\t\t     (T\n\t\t\t      <TELL\n\"\\\"Ooo, look,\\\" he says. \\\"There's a miniaturization booth access card!\\\"\">)>\n\t\t       <TELL CR>)>)>> "
  },
  "I-CLEAR-FLOYD-PEER": {
   "name": "I-CLEAR-FLOYD-PEER",
   "file": "comptwo.zil",
   "line": 1842,
   "endLine": 1844,
   "source": "<ROUTINE I-CLEAR-FLOYD-PEER ()\n\t <SETG FLOYD-PEERED <>>\n\t <RFALSE>>"
  },
  "BIO-DOOR-EAST-F": {
   "name": "BIO-DOOR-EAST-F",
   "file": "comptwo.zil",
   "line": 1911,
   "endLine": 1951,
   "source": "<ROUTINE BIO-DOOR-EAST-F ()\n\t <COND (<VERB? OPEN>\n\t\t<COND (<FSET? ,BIO-DOOR-EAST ,OPENBIT>\n\t\t       <ALREADY-OPEN>)\n\t\t      (<FSET? ,BIO-DOOR-WEST ,OPENBIT>\n\t\t       <TELL ,BOTH-DOORS CR>)\n\t\t      (<AND ,FLOYD-WAITING\n\t\t\t    <FSET? ,FLOYD ,RLANDBIT>\n\t\t\t    <EQUAL? ,FORAY-COUNTER 0>>\n\t\t       <ENABLE <QUEUE I-FLOYD-FORAY -1>>\n\t\t       <SETG FLOYD-FORAYED T>\n\t\t       <FSET ,BIO-DOOR-EAST ,OPENBIT>\n\t\t       <REMOVE ,FLOYD>\n\t\t       <DISABLE <INT I-FLOYD>>\n\t\t       <TELL\n\"The door opens and Floyd, pausing only for the briefest moment, plunges into\nthe Bio Lab. Immediately, he is set upon by hideous, mutated monsters! More\nare heading straight toward the open door! Floyd shrieks and yells to you to\nclose the door.\" CR>)\n\t\t      (<AND <NOT ,FLOYD-FORAYED>\n\t\t\t    <EQUAL? <GET <INT I-CHASE-SCENE> ,C-ENABLED?> 0>>\n\t\t       <JIGS-UP\n\"Opening the door reveals a Bio-Lab full of horrible mutations. You stare at\nthem, frozen with horror. Growling with hunger and delight, the mutations\nmarch into the bio-lock and devour you.\">)\n\t\t      (T\n\t\t       <FSET ,BIO-DOOR-EAST ,OPENBIT>\n\t\t       <ENABLE <QUEUE I-BIO-EAST-CLOSES 30>>\n\t\t       <TELL ,DOOR-OPENS CR>)>)\n\t       (<VERB? CLOSE>\n\t\t<COND (<FSET? ,BIO-DOOR-EAST ,OPENBIT>\n\t\t       <COND (<EQUAL? ,FORAY-COUNTER 4>\n\t\t\t      <SETG C-ELAPSED 95>)>\n\t\t       <FCLEAR ,BIO-DOOR-EAST ,OPENBIT>\n\t\t       <TELL \"The door closes\">\n\t\t       <COND (<EQUAL? <GET <INT I-CHASE-SCENE> ,C-ENABLED?> 1>\n\t\t\t      <TELL \", but not soon enough!\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \".\" CR>)>)\n\t\t      (T\n\t\t       <IS-CLOSED>)>)>>"
  },
  "I-BIO-EAST-CLOSES": {
   "name": "I-BIO-EAST-CLOSES",
   "file": "comptwo.zil",
   "line": 1953,
   "endLine": 1958,
   "source": "<ROUTINE I-BIO-EAST-CLOSES ()\n\t <COND (<FSET? ,BIO-DOOR-EAST ,OPENBIT>\n\t\t<FCLEAR ,BIO-DOOR-EAST ,OPENBIT>\n\t\t<COND (<EQUAL? ,HERE ,BIO-LOCK-EAST ,BIO-LOCK-WEST ,BIO-LAB>\n\t\t       <TELL CR \n\"The door at the eastern end of the bio-lock closes silently.\" CR>)>)>>"
  },
  "BIO-DOOR-WEST-F": {
   "name": "BIO-DOOR-WEST-F",
   "file": "comptwo.zil",
   "line": 1960,
   "endLine": 1975,
   "source": "<ROUTINE BIO-DOOR-WEST-F ()\n\t <COND (<VERB? OPEN>\n\t\t<COND (<FSET? ,BIO-DOOR-WEST ,OPENBIT>\n\t\t       <ALREADY-OPEN>)\n\t\t      (<FSET? ,BIO-DOOR-EAST ,OPENBIT>\n\t\t       <TELL ,BOTH-DOORS CR>)\n\t\t      (T\n\t\t       <TELL ,DOOR-OPENS CR>\n\t\t       <ENABLE <QUEUE I-BIO-WEST-CLOSES 30>>\n\t\t       <FSET ,BIO-DOOR-WEST ,OPENBIT>)>)\n\t       (<VERB? CLOSE>\n\t\t<COND (<FSET? ,BIO-DOOR-WEST ,OPENBIT>\n\t\t       <FCLEAR ,BIO-DOOR-WEST ,OPENBIT>\n\t\t       <TELL ,DOOR-CLOSES CR>)\n\t\t      (T\n\t\t       <IS-CLOSED>)>)>>"
  },
  "I-BIO-WEST-CLOSES": {
   "name": "I-BIO-WEST-CLOSES",
   "file": "comptwo.zil",
   "line": 1977,
   "endLine": 1982,
   "source": "<ROUTINE I-BIO-WEST-CLOSES ()\n\t <COND (<FSET? ,BIO-DOOR-WEST ,OPENBIT>\n\t\t<FCLEAR ,BIO-DOOR-WEST ,OPENBIT>\n\t\t<COND (<EQUAL? ,HERE ,BIO-LOCK-WEST ,BIO-LOCK-EAST ,MAIN-LAB>\n\t\t       <TELL CR\n\"The door at the western end of the bio-lock closes silently.\" CR>)>)>>"
  },
  "RAD-DOOR-EAST-F": {
   "name": "RAD-DOOR-EAST-F",
   "file": "comptwo.zil",
   "line": 1984,
   "endLine": 1998,
   "source": "<ROUTINE RAD-DOOR-EAST-F ()\n\t <COND (<VERB? OPEN>\n\t\t<COND (<FSET? ,RAD-DOOR-EAST ,OPENBIT>\n\t\t       <ALREADY-OPEN>)\n\t\t      (<FSET? ,RAD-DOOR-WEST ,OPENBIT>\n\t\t       <TELL ,BOTH-DOORS CR>)\n\t\t      (T\n\t\t       <FSET ,RAD-DOOR-EAST ,OPENBIT>\n\t\t       <TELL ,DOOR-OPENS CR>)>)\n\t       (<VERB? CLOSE>\n\t\t<COND (<FSET? ,RAD-DOOR-EAST ,OPENBIT>\n\t\t       <FCLEAR ,RAD-DOOR-EAST ,OPENBIT>\n\t\t       <TELL ,DOOR-CLOSES CR>)\n\t\t      (T\n\t\t       <IS-CLOSED>)>)>>"
  },
  "RAD-DOOR-WEST-F": {
   "name": "RAD-DOOR-WEST-F",
   "file": "comptwo.zil",
   "line": 2000,
   "endLine": 2014,
   "source": "<ROUTINE RAD-DOOR-WEST-F ()\n\t <COND (<VERB? OPEN>\n\t\t<COND (<FSET? ,RAD-DOOR-WEST ,OPENBIT>\n\t\t       <ALREADY-OPEN>)\n\t\t      (<FSET? ,RAD-DOOR-EAST ,OPENBIT>\n\t\t       <TELL ,BOTH-DOORS CR>)\n\t\t      (T\n\t\t       <TELL ,DOOR-OPENS CR>\n\t\t       <FSET ,RAD-DOOR-WEST ,OPENBIT>)>)\n\t       (<VERB? CLOSE>\n\t\t<COND (<FSET? ,RAD-DOOR-WEST ,OPENBIT>\n\t\t       <FCLEAR ,RAD-DOOR-WEST ,OPENBIT>\n\t\t       <TELL ,DOOR-CLOSES CR>)\n\t\t      (T\n\t\t       <IS-CLOSED>)>)>>"
  },
  "I-FLOYD-FORAY": {
   "name": "I-FLOYD-FORAY",
   "file": "comptwo.zil",
   "line": 2033,
   "endLine": 2114,
   "source": "<ROUTINE I-FLOYD-FORAY ()\n\t <SETG FORAY-COUNTER <+ ,FORAY-COUNTER 1>>\n\t <COND (<EQUAL? ,FORAY-COUNTER 2>\n\t\t<COND (<FSET? ,BIO-DOOR-EAST ,OPENBIT>\n\t\t       <CRLF>\n\t\t       <MONSTER-DEATH>)\n\t\t      (T\n\t\t       <TELL CR\n\"From within the lab you hear ferocious growlings, the sounds of a skirmish,\nand then a high-pitched metallic scream!\" CR>)>)\n\t       (<EQUAL? ,FORAY-COUNTER 3>\n\t\t<COND (<FSET? ,BIO-DOOR-EAST ,OPENBIT>\n\t\t       <CRLF>\n\t\t       <MONSTER-DEATH>)\n\t\t      (T\n\t\t       <TELL CR\n\"You hear, slightly muffled by the door, three fast knocks, followed\nby the distinctive sound of tearing metal.\" CR>)>)\n\t       (<EQUAL? ,FORAY-COUNTER 4>\n\t\t<COND (<FSET? ,BIO-DOOR-EAST ,OPENBIT>\n\t\t       <MOVE ,FLOYD ,HERE>\n\t\t       <TELL CR\n\"Floyd stumbles out of the Bio Lab, clutching the mini-booth card. The\nmutations rush toward the open doorway!\" CR>)\n\t\t      (T\n\t\t       <TELL CR\n\"The three knocks come again, followed by a wild scream. Then, all is silence\nfrom within the Bio Lab, except for an occasional metallic crunch.\" CR>\n\t\t       <FCLEAR ,FLOYD ,RLANDBIT>\n\t\t       <DISABLE <INT I-FLOYD-FORAY>>)>)\n\t       (<EQUAL? ,FORAY-COUNTER 5>\n\t\t<COND (<FSET? ,BIO-DOOR-EAST ,OPENBIT>\n\t\t       <CRLF>\n\t\t       <MONSTER-DEATH>)\n\t\t      (T\n\t\t       <REMOVE ,FLOYD>\n\t\t       <FCLEAR ,FLOYD ,RLANDBIT>\n\t\t       <DISABLE <INT I-FLOYD>>\n\t\t       <FSET ,FLOYD ,INVISIBLE>\n\t\t       <MOVE ,DEAD-FLOYD ,HERE>\n\t\t       <MOVE ,MINI-CARD ,BIO-LOCK-EAST>\n\t\t       <FSET ,MINI-CARD ,TOUCHBIT>\n\t\t       <SETG SCORE <+ ,SCORE 2>>\n\t\t       <TELL CR\n\"And not a moment too soon! You hear a pounding from the door as the monsters\nwithin vent their frustration at losing their prey.|\n|\nFloyd staggers to the ground, dropping the mini card. He is badly torn apart,\nwith loose wires and broken circuits everywhere. Oil flows from his\nlubrication system. He obviously has only moments to live.|\n|\nYou drop to your knees and cradle Floyd's head in your lap. Floyd looks up\nat his friend with half-open eyes. \\\"Floyd did it ... got card. Floyd a\ngood friend, huh?\\\" Quietly, you sing Floyd's favorite song, the Ballad\nof the Starcrossed Miner:|\n|\nO, they ruled the solar system|\nNear ten thousand years before|\nIn their single starcrossed scout ships|\nMining ast'roids, spinning lore.|\n|\nThen one true courageous miner|\nSpied a spaceship from the stars|\nBoarded he that alien liner|\nOut beyond the orb of Mars.|\n|\nYes, that ship was filled with danger|\nMighty monsters barred his way|\nYet he solved the alien myst'ries|\nMining quite a lode that day.|\n|\nO, they ruled the solar system|\nNear ten thousand years before|\n'Til one brave advent'rous spirit|\nBrought that mighty ship to shore.|\n|\nAs you finish the last verse, Floyd smiles with contentment, and then his\neyes close as his head rolls to one side. You sit in silence for a moment,\nin memory of a brave friend who gave his life so that you might live.\" CR>\n\t\t       <FCLEAR ,FLOYD ,RLANDBIT>\n\t\t       <FCLEAR ,MINI-CARD ,NDESCBIT>\n\t\t       <DISABLE <INT I-FLOYD-FORAY>>)>)>>"
  },
  "MONSTER-DEATH": {
   "name": "MONSTER-DEATH",
   "file": "comptwo.zil",
   "line": 2116,
   "endLine": 2120,
   "source": "<ROUTINE MONSTER-DEATH ()\n\t <JIGS-UP\n\"The biological nightmares reach you. Gripping coils wrap around your limbs\nas powerful teeth begin tearing at your flesh. Something bites your leg,\nand you feel a powerful poison begin to work its numbing effects...\">>"
  },
  "BIO-LAB-F": {
   "name": "BIO-LAB-F",
   "file": "comptwo.zil",
   "line": 2136,
   "endLine": 2159,
   "source": "<ROUTINE BIO-LAB-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a huge laboratory filled with many biological experiments.\nThe lighting is \">\n\t\t<COND (,LAB-LIGHTS-ON\n\t\t       <TELL \"bright.\">)\n\t\t      (T\n\t\t       <TELL\n\"dim, and a faint blue glow comes from a gaping crack in the northern wall.\">)>\n\t       <TELL\n\" Some of the experiments seem to be out of control...\" CR>)\n\t (<EQUAL? .RARG ,M-END>\n\t  <ENABLE <QUEUE I-CHASE-SCENE -1>>\n\t  <COND (,LAB-FLOODED\n\t\t       <TELL\n\"The air is filled with mist, which is affecting the mutants. They appear\nto be stunned and confused, but are slowly recovering.\" CR>\n\t\t       <COND (<NOT <FSET? ,GAS-MASK ,WORNBIT>>\n\t\t\t      <JIGS-UP\n\" Unfortunately, you don't seem to be that hardy.\">)>)\n\t\t      (T\n\t\t       <JIGS-UP\n\"The mutants attack you and rip you to shreds within seconds.\">)>)>> "
  },
  "I-CHASE-SCENE": {
   "name": "I-CHASE-SCENE",
   "file": "comptwo.zil",
   "line": 2169,
   "endLine": 2207,
   "source": "<ROUTINE I-CHASE-SCENE ()\n\t <COND (<AND <IN? ,RAT-ANT ,HERE>\n\t\t     <NOT ,LAB-FLOODED>>\n\t\t<JIGS-UP\n\"|\nDozens of hungry eyes fix on you as the mutations surround you\nand begin feasting.\">)\n\t       (<NOT ,LAB-FLOODED>\n\t\t<COND (<AND <EQUAL? ,HERE ,BIO-LOCK-WEST>\n\t\t\t    <NOT ,EXTRA-MOVE-FLAG>>\n\t\t       <SETG EXTRA-MOVE-FLAG T>\n\t\t       <TELL CR\n\"The monsters gallop toward you, smacking their lips.\" CR>)\n\t\t      (<AND <EQUAL? ,HERE ,CRYO-ELEVATOR>\n\t\t\t    <NOT ,CRYO-MOVE-FLAG>>\n\t\t       <SETG CRYO-MOVE-FLAG T>\n\t\t       <TELL CR\n\"The monsters are storming straight toward the elevator door!\" CR>)\n\t\t      (<AND <EQUAL? ,HERE ,SECOND-TO-LAST-ROOM>\n\t\t\t    <VERB? WALK>>\n\t\t       <JIGS-UP\n\"|\nYou stupidly run right into the jaws of the pursuing mutants.\">)\n\t\t      (T\n\t\t       <COND (<EQUAL? ,HERE ,CRYO-ELEVATOR>\n\t\t\t      <CRLF>\n\t\t\t      <MONSTER-DEATH>)>\n\t\t       <MOVE ,RAT-ANT ,HERE>\n\t\t       <MOVE ,TRIFFID ,HERE>\n\t\t       <MOVE ,TROLL ,HERE>\n\t\t       <MOVE ,GRUE ,HERE>\n\t\t       <TELL CR \"The mutants \">\n\t\t       <COND (<EQUAL? ,HERE ,BIO-LOCK-WEST>\n\t\t\t      <TELL \"are almost upon you now!\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"burst into the room right on your heels! \"\n\t\t\t\t    <PICK-ONE ,MONSTER-ENTRANCES> CR>)>)>)>\n\t <SETG SECOND-TO-LAST-ROOM ,LAST-CHASE-ROOM>\n\t <SETG LAST-CHASE-ROOM ,HERE>>"
  },
  "RADIATION-LAB-F": {
   "name": "RADIATION-LAB-F",
   "file": "comptwo.zil",
   "line": 2237,
   "endLine": 2240,
   "source": "<ROUTINE RADIATION-LAB-F (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-ENTER>\n\t\t     <NOT <FSET? ,RADIATION-LAB ,TOUCHBIT>>>\n\t\t<ENABLE <QUEUE I-NUKED-BLUE 50>>)>>"
  },
  "I-NUKED-BLUE": {
   "name": "I-NUKED-BLUE",
   "file": "comptwo.zil",
   "line": 2244,
   "endLine": 2261,
   "source": "<ROUTINE I-NUKED-BLUE ()\n\t <ENABLE <QUEUE I-NUKED-BLUE -1>>\n\t <SETG NUKED-COUNTER <+ ,NUKED-COUNTER 1>>\n\t <COND (<EQUAL? ,NUKED-COUNTER 1>\n\t\t<TELL CR \"You suddenly feel sick and dizzy.\" CR>)\n\t       (<EQUAL? ,NUKED-COUNTER 2>\n\t\t<TELL CR\n\"You feel incredibly nauseous and begin vomiting. Also, all your\nhair has fallen out.\">\n\t\t<COND (<IN? ,FLOYD ,HERE>\n\t\t       <TELL\n\" Floyd points at you and laughs hysterically. \\\"You look funny with no\nhair,\\\" he gasps.\">)>\n\t\t<CRLF>)\n\t       (<EQUAL? ,NUKED-COUNTER 3>\n\t\t<JIGS-UP\n\"|\nIt seems you have picked up a bad case of radiation poisoning.\">)>>"
  },
  "LAMP-F": {
   "name": "LAMP-F",
   "file": "comptwo.zil",
   "line": 2286,
   "endLine": 2299,
   "source": "<ROUTINE LAMP-F ()\n\t <COND (<VERB? LAMP-ON>\n\t\t<COND (<FSET? ,LAMP ,ONBIT>\n\t\t       <TELL \"It is on.\" CR>)\n\t\t      (T\n\t\t       <FSET ,LAMP ,ONBIT>\n\t\t       <FSET ,LAMP ,TOUCHBIT>\n\t\t       <TELL \"The lamp is now producing a bright light.\" CR>)>)\n\t       (<VERB? LAMP-OFF>\n\t\t<COND (<FSET? ,LAMP ,ONBIT>\n\t\t       <FCLEAR ,LAMP ,ONBIT>\n\t\t       <TELL \"The lamp goes dark.\" CR>)\n\t\t      (T\n\t\t       <TELL \"It isn't on.\" CR>)>)>>"
  },
  "LAB-OFFICE-F": {
   "name": "LAB-OFFICE-F",
   "file": "comptwo.zil",
   "line": 2316,
   "endLine": 2342,
   "source": "<ROUTINE LAB-OFFICE-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \n\"This is the office for storing files on Bio Lab experiments. A large and\nmessy desk is surrounded by locked files. A small booth lies to the south. \">\n\t\t<COND (<FSET? ,OFFICE-DOOR ,OPENBIT>\n\t\t       <TELL \"An open\">)\n\t\t      (T\n\t\t       <TELL \"A closed\">)>\n\t\t<TELL \" door to the west is labelled \\\"Biioo Lab.\\\" You\nrealize with shock and horror that the only way out is through the\nmutant-infested Bio Lab.|\n|\nOn the wall are three buttons: a white button labelled \\\"Lab Liits On\\\",\na black button labelled \\\"Lab Liits Of\\\", and a red button labelled\n\\\"Eemurjensee Sistum.\\\"\" CR>)\n\t       (<AND <EQUAL? .RARG ,M-END>\n\t\t      <FSET? ,OFFICE-DOOR ,OPENBIT>>\n\t\t<COND (,LAB-FLOODED\n\t\t       <TELL\n\"Through the open doorway you can see the Bio Lab. It seems to be filled\nwith a light mist. Horrifying biological nightmares stagger about making\nchoking noises.\" CR>)\n\t\t      (T\n\t\t       <JIGS-UP\n\"Mutated monsters from the Bio Lab pour into the office. You are\ndevoured.\">)>)>>"
  },
  "LAB-DESK-F": {
   "name": "LAB-DESK-F",
   "file": "comptwo.zil",
   "line": 2360,
   "endLine": 2377,
   "source": "<ROUTINE LAB-DESK-F ()\n\t <COND (<AND <VERB? EXAMINE SEARCH>\n\t\t     <NOT <FSET? ,LAB-DESK ,TOUCHBIT>>>\n\t\t<MOVE ,MEMO ,ADVENTURER>\n\t\t<FSET ,LAB-DESK ,TOUCHBIT>\n\t\t<TELL\n\"After inspecting the various papers on the desk, you find only\none item of interest, a memo of some sort. The desk itself is \">\n\t\t<COND (<FSET? ,LAB-DESK ,OPENBIT>\n\t\t       <TELL \"open\">)\n\t\t      (T\n\t\t       <TELL\n\"closed, but it doesn't look locked\">)>\n\t\t<TELL \".\" CR>)\n\t       (<AND <VERB? OPEN>\n\t\t     <IN? ,GAS-MASK ,LAB-DESK>>\n\t\t<THIS-IS-IT ,GAS-MASK>\n\t\t<RFALSE>)>>"
  },
  "LIGHT-BUTTON-F": {
   "name": "LIGHT-BUTTON-F",
   "file": "comptwo.zil",
   "line": 2425,
   "endLine": 2431,
   "source": "<ROUTINE LIGHT-BUTTON-F ()\n\t <COND (<VERB? PUSH>\n\t\t<COND (,LAB-LIGHTS-ON\n\t\t       <TELL \"Nothing happens.\" CR>)\n\t\t      (T\n\t\t       <SETG LAB-LIGHTS-ON T>\n\t\t       <TELL ,FAINT-SOUND CR>)>)>>"
  },
  "DARK-BUTTON-F": {
   "name": "DARK-BUTTON-F",
   "file": "comptwo.zil",
   "line": 2433,
   "endLine": 2439,
   "source": "<ROUTINE DARK-BUTTON-F ()\n\t <COND (<VERB? PUSH>\n\t\t<COND (,LAB-LIGHTS-ON\n\t\t       <SETG LAB-LIGHTS-ON <>>\n\t\t       <TELL ,FAINT-SOUND CR>)\n\t\t      (T\n\t\t       <TELL \"Nothing happens.\" CR>)>)>>"
  },
  "FUNGICIDE-BUTTON-F": {
   "name": "FUNGICIDE-BUTTON-F",
   "file": "comptwo.zil",
   "line": 2443,
   "endLine": 2448,
   "source": "<ROUTINE FUNGICIDE-BUTTON-F ()\n\t <COND (<VERB? PUSH>\n\t\t<SETG LAB-FLOODED T>\n\t\t<ENABLE <QUEUE I-UNFLOOD 50>>\n\t\t<TELL\n\"You hear a hissing from beyond the door to the west.\" CR>)>>"
  },
  "I-UNFLOOD": {
   "name": "I-UNFLOOD",
   "file": "comptwo.zil",
   "line": 2450,
   "endLine": 2460,
   "source": "<ROUTINE I-UNFLOOD ()\n\t <SETG LAB-FLOODED <>>\n\t <COND (<EQUAL? ,HERE ,BIO-LAB>\n\t\t<TELL CR\n\"The last traces of mist in the air vanish. The mutants, recovering\nquickly, notice you and begin salivating.\" CR>)\n\t       (<AND <EQUAL? ,HERE ,LAB-OFFICE>\n\t\t     <FSET? ,OFFICE-DOOR ,OPENBIT>>\n\t\t<TELL CR\n\"The mist in the Bio Lab clears. The mutants recover and rush\ntoward the door!\" CR>)>>"
  },
  "I-TURNOFF-MINI": {
   "name": "I-TURNOFF-MINI",
   "file": "comptwo.zil",
   "line": 2485,
   "endLine": 2489,
   "source": "<ROUTINE I-TURNOFF-MINI ()\n\t <SETG MINI-ACTIVATED <>>\n\t <COND (<EQUAL? ,HERE ,MINI-BOOTH>\n\t\t<TELL CR\n\"A recorded voice says \\\"Miniaturization booth deactivated.\\\"\" CR>)>>"
  },
  "STATION-384-F": {
   "name": "STATION-384-F",
   "file": "comptwo.zil",
   "line": 2508,
   "endLine": 2522,
   "source": "<ROUTINE STATION-384-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<COND (,BEEN-HERE\n\t\t       <SETG BEEN-HERE <>>\n\t\t       <COND (,COMPUTER-FIXED\n\t\t\t      <TELL\n\"A voice seems to whisper in your ear \\\"Main Miniaturization and Teleportation\nBooth has malfunctioned...switching to Auxiliary Booth...\\\" \">\n\t                      <ENABLE <QUEUE I-ANNOUNCEMENT 130>>\n\t\t\t      <TELL ,FAMILIAR-WRENCHING CR>\n\t\t\t      <GOTO ,AUXILIARY-BOOTH>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <TELL ,FAMILIAR-WRENCHING CR>\n\t\t\t      <GOTO ,MINI-BOOTH <>>)>)>)>>"
  },
  "I-ANNOUNCEMENT": {
   "name": "I-ANNOUNCEMENT",
   "file": "comptwo.zil",
   "line": 2524,
   "endLine": 2527,
   "source": "<ROUTINE I-ANNOUNCEMENT ()\n\t <TELL CR \"A recorded announcement blares from the public address\nsystem. \\\"Revival procedure beginning. Cryo-chamber access from Project\nControl Office now open.\\\"\" CR>>"
  },
  "MIDDLE-OF-STRIP-F": {
   "name": "MIDDLE-OF-STRIP-F",
   "file": "comptwo.zil",
   "line": 2582,
   "endLine": 2600,
   "source": "<ROUTINE MIDDLE-OF-STRIP-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<COND (<AND ,COMPUTER-FIXED\n\t\t\t    ,NO-MICROBE\n\t\t\t    <NOT ,MICROBE-DISPATCHED>>\n\t\t       <MOVE ,MICROBE ,HERE>\n\t\t       <ENABLE <QUEUE I-MICROBE -1>>\n\t\t       <SETG NO-MICROBE <>>\n\t\t       <TELL\n\"Suddenly, with a loud plop, a giant elephant-sized monster lands on the strip\njust in front of you. It is amorphously shaped, its skin a slimy translucent\nred membrane. While most of your brain screams with panic about the disgusting\nmonster that now blocks your exit, some small section in the back of your mind\ncalmly realizes that this is merely some tiny microbe which has somehow\nviolated the sterile environment of the computer interior.|\n|\nAs you stand frozen with fear, the microbe slithers toward you,\nextending slimy pseudopods thick with waving cilia. It looks pretty\nhungry, and seems intent on having you for lunch.\" CR CR>)>)>>"
  },
  "STRIP-NEAR-RELAY-F": {
   "name": "STRIP-NEAR-RELAY-F",
   "file": "comptwo.zil",
   "line": 2619,
   "endLine": 2636,
   "source": "<ROUTINE STRIP-NEAR-RELAY-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"North of here, the filament ends at a huge featureless wall, presumably the\nside of some microcomponent. \">\n\t\t<COND (<IN? ,RELAY ,HERE>\n\t\t       <TELL\n\"To the east is a vacuu-sealed microrelay, sealed in transparent red\nplastic. You could probably see into the microrelay.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"To the east are the shattered remains of some large object.\" CR>)>)\n\t       (<AND <EQUAL? .RARG ,M-ENTER>\n\t\t     <NOT ,NO-MICROBE>>\n\t\t<MOVE ,MICROBE ,HERE>\n\t\t<SETG MICROBE-COUNTER 0>\n\t\t<TELL\n\"The microbe, writhing angrily, follows you northward.\" CR>)>>"
  },
  "RELAY-EXIT-F": {
   "name": "RELAY-EXIT-F",
   "file": "comptwo.zil",
   "line": 2638,
   "endLine": 2647,
   "source": "<ROUTINE RELAY-EXIT-F ()\n\t <COND (<IN? ,RELAY ,HERE>\n\t\t<TELL\n\"The relay is sealed. Although you cannot enter it, you could look into\nit.\" CR>\n\t\t<RFALSE>)\n\t       (T\n\t\t<TELL\n\"You would slice yourself to ribbons on the shattered relay.\" CR>\n\t\t<RFALSE>)>>"
  },
  "RELAY-F": {
   "name": "RELAY-F",
   "file": "comptwo.zil",
   "line": 2657,
   "endLine": 2667,
   "source": "<ROUTINE RELAY-F ()\n\t <COND (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<TELL\n\"This is a vacuum-sealed microrelay, encased in red translucent plastic.\">\n\t\t<COND (<NOT ,COMPUTER-FIXED>\n\t\t      <TELL\n\" Within, you can see that some sort of speck or impurity has wedged itself\ninto the contact point of the relay, preventing it from closing. The speck,\npresumably of microscopic size, resembles a blue boulder to you in your\ncurrent size.\">)>\n\t\t<TELL CR>)>>"
  },
  "LASER-DIAL-F": {
   "name": "LASER-DIAL-F",
   "file": "comptwo.zil",
   "line": 2701,
   "endLine": 2716,
   "source": "<ROUTINE LASER-DIAL-F ()\n\t <COND (<AND <VERB? SET>\n\t\t     <EQUAL? ,PRSI ,INTNUM>>\n\t\t<COND (<FSET? ,LASER-DIAL ,MUNGEDBIT>\n\t\t       <TELL\n\"The laser dial seems to have become damaged and will not turn.\" CR>)\n\t\t      (<EQUAL? ,P-NUMBER ,LASER-SETTING>\n\t\t       <TELL \"That's where it's set now!\" CR>)\n\t\t      (<OR <G? ,P-NUMBER 6>\n\t\t\t   <EQUAL? ,P-NUMBER 0>>\n\t\t       <TELL \"The dial can only be set from 1 to 6.\" CR>)\n\t\t      (T\n\t\t       <SETG LASER-SETTING ,P-NUMBER>\n\t\t       <TELL \"The dial is now set to \" N ,P-NUMBER \".\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"The dial is currently set to \" N ,LASER-SETTING \".\" CR>)>>"
  },
  "ZAP-COUNT": {
   "name": "ZAP-COUNT",
   "file": "comptwo.zil",
   "line": 2746,
   "endLine": 2757,
   "source": "<ROUTINE ZAP-COUNT () ;\"checks to see if if have any shots left\"\n\t <COND (<IN? ,OLD-BATTERY ,LASER>\n\t\t<COND (<G? ,OLD-SHOTS 0>\n\t\t       <SETG OLD-SHOTS <- ,OLD-SHOTS 1>>\n\t\t       <RFALSE>)>\n\t\t<RTRUE>)\n\t       (<IN? ,NEW-BATTERY ,LASER>\n\t\t<COND (<G? ,NEW-SHOTS 0>\n\t\t       <SETG NEW-SHOTS <- ,NEW-SHOTS 1>>\n\t\t       <RFALSE>)>\n\t\t<RTRUE>)\n\t       (T <RTRUE>)>>"
  },
  "LASER-F": {
   "name": "LASER-F",
   "file": "comptwo.zil",
   "line": 2759,
   "endLine": 2885,
   "source": "<ROUTINE LASER-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<AND <VERB? SET>\n\t\t     <EQUAL? ,PRSI ,INTNUM>>\n\t\t<PERFORM ,V?SET ,LASER-DIAL ,PRSI>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"The laser, though portable, is still fairly heavy. It has a long, slender\nbarrel and a dial with six settings, labelled \\\"1\\\" through \\\"6.\\\" This dial\nis currently on setting \" N ,LASER-SETTING \". There is a depression on the\ntop of the laser which \">\n\t\t<COND (<IN? ,OLD-BATTERY ,LASER>\n\t\t       <TELL \"contains an \" D ,OLD-BATTERY>)\n\t\t      (<IN? ,NEW-BATTERY ,LASER>\n\t\t       <TELL \"contains a \" D ,NEW-BATTERY>)\n\t\t      (T\n\t\t       <TELL \"is empty\">)>\n\t\t<TELL \".\" CR>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<TELL\n\"There doesn't seem to be any way to do that to this laser.\" CR>)\n\t       (<VERB? PUT>\n\t\t<COND (<EQUAL? ,PRSO ,OLD-BATTERY>\n\t\t       <COND (<IN? ,NEW-BATTERY ,LASER>\n\t\t\t      <ALREADY-BATTERY>)\n\t\t\t     (T\n\t\t\t      <MOVE ,OLD-BATTERY ,LASER>\n\t\t\t      <BATTERY-NOW>)>)\n\t\t      (<EQUAL? ,PRSO ,NEW-BATTERY>\n\t\t       <COND (<IN? ,OLD-BATTERY ,LASER>\n\t\t\t      <ALREADY-BATTERY>)\n\t\t\t     (T\n\t\t\t      <MOVE ,NEW-BATTERY ,LASER>\n\t\t\t      <BATTERY-NOW>)>)\n\t\t      (<NOT <EQUAL? ,LASER ,PRSO>>\n\t\t       <TELL\n\"The \" D ,PRSO \" doesn't fit the depression.\" CR>)>)\n\t       (<VERB? ZAP>\n\t\t<COND (<NOT <IN? ,LASER ,ADVENTURER>>\n\t\t       <NOT-HOLDING>\n\t\t       <RTRUE>)>\n\t\t<COND (<NOT ,LASER-SCORE-FLAG>\n\t\t       <SETG LASER-SCORE-FLAG T>\n\t\t       <SETG SCORE <+ ,SCORE 2>>)>\n\t\t<COND (<OR <EQUAL? ,PRSI ,LASER>\n\t\t\t\t  <EQUAL? ,PRSI ,LASER-DIAL>\n\t\t\t\t  <AND <EQUAL? ,PRSI ,OLD-BATTERY>\n\t\t\t\t       <IN? ,OLD-BATTERY ,LASER>>\n\t\t\t\t  <AND <EQUAL? ,PRSI ,NEW-BATTERY>\n\t\t\t\t       <IN? ,NEW-BATTERY ,LASER>>>\n\t\t\t      <TELL\n\"Sorry, the laser doesn't have a rubber barrel.\" CR>)\n\t\t      (<ZAP-COUNT>\n\t\t       <TELL \"Click.\" CR>)\n\t\t      (<FSET? ,LASER ,MUNGEDBIT>\n\t\t       <TELL\n\"The laser sparks a few times, whines, and then stops.\" CR>)\n\t\t      (T\n\t\t       <ENABLE <QUEUE I-WARMTH -1>>\n\t\t       <SETG LASER-JUST-SHOT T>\n\t\t       <COND (<EQUAL? ,PRSI ,SPECK>\n\t\t\t      <SHOOT-SPECK>\n\t\t\t      <RTRUE>)\n\t\t\t     (<EQUAL? ,PRSI ,MICROBE>\n\t\t\t      <SHOOT-MICROBE>\n\t\t\t      <RTRUE>)\n\t\t\t     (<OR <FSET? ,PRSI ,WORNBIT>\n\t\t\t\t  <EQUAL? ,PRSI ,ME ,HANDS ,ADVENTURER>>\n\t\t\t      <TELL\n\"Ouch! You managed to burn yourself nicely.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"The laser emits a narrow \">\n\t\t\t      <BEAM-COLOR>\n\t\t\t      <TELL \" beam of light\">\n\t\t\t      <COND (,PRSI\n\t\t\t\t     <COND (<OR <EQUAL? ,PRSI\n                                                        ,TOWEL\n\t\t\t\t\t\t        ,BROCHURE\n\t\t\t\t\t\t        ,COMBINATION-PAPER>\n\t\t\t\t\t\t<EQUAL? ,PRSI\n\t\t\t\t\t\t\t,PRINT-OUT\n\t\t\t\t\t\t\t,LAB-UNIFORM\n\t\t\t\t\t\t\t,PATROL-UNIFORM>\n\t\t\t\t\t\t<EQUAL? ,PRSI\n\t\t\t\t\t\t\t,ID-CARD\n\t\t\t\t\t\t\t,KITCHEN-CARD\n\t\t\t\t\t\t\t,MINI-CARD>\n\t\t\t\t\t\t<EQUAL? ,PRSI\n\t\t\t\t\t\t\t,TELEPORTATION-CARD\n\t\t\t\t\t\t\t,SHUTTLE-CARD\n\t\t\t\t\t\t\t,UPPER-ELEVATOR-CARD>\n\t\t\t\t\t\t<EQUAL? ,PRSI\n\t\t\t\t\t\t\t,LOWER-ELEVATOR-CARD\n\t\t\t\t\t\t\t,DIARY>>\n\t\t\t\t\t    <REMOVE ,PRSI>\n\t\t\t\t\t    <COND (<EQUAL? ,PRSI\n\t\t\t\t\t\t\t   ,SPOUT-PLACED>\n\t\t\t\t\t\t   <SETG SPOUT-PLACED\n\t\t\t\t\t\t\t ,GROUND>)>\n\t\t\t\t\t    <TELL\n\" which strikes the \" D ,PRSI \". The \" D ,PRSI \" bursts into flame,\nblinding you momentarily, and is quickly consumed.\" CR>)\n\t\t\t\t\t   (<AND <EQUAL? ,PRSI ,FLOYD>\n\t\t\t\t\t\t <FSET? ,FLOYD ,RLANDBIT>>\n\t\t\t\t\t    <TELL\n\" which strikes Floyd. \\\"Yow!\\\" yells Floyd. He jumps to the other end\nof the room and eyes you warily.\" CR>)\n\t\t\t\t\t   (<AND <EQUAL? ,PRSI ,PSEUDO-OBJECT>\n\t\t\t\t\t\t<EQUAL? ,HERE ,PROJCON-OFFICE>>\n\t\t\t\t\t    <TELL\n\" which strikes the \" D ,PRSI \". However, this doesn't seem to affect it.\" CR>)\n\t\t\t\t\t   (T\n\t\t\t\t\t    <TELL\n\" which strikes the \" D ,PRSI \". The \" D ,PRSI \" grows a bit warm, but\nnothing else happens.\" CR>)>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL \".\" CR>)>)>)>)\n\t       (<VERB? DROP>\n\t\t<DISABLE <INT I-WARMTH>>\n\t\t<COND (<AND <IN? ,MICROBE ,HERE>\n\t\t\t    <G? ,WARMTH-FLAG 7>>\n\t\t       <REMOVE ,LASER>\n\t\t       <TELL\n\"The microbe rushes to envelop the laser. You hear a faint burp as the\nmonster begins to look around for other morsels...\" CR>)\n\t\t      (T\n\t\t       <RFALSE>)>)>>"
  },
  "ALREADY-BATTERY": {
   "name": "ALREADY-BATTERY",
   "file": "comptwo.zil",
   "line": 2887,
   "endLine": 2888,
   "source": "<ROUTINE ALREADY-BATTERY ()\n\t <TELL \"There's already a battery there.\" CR>>"
  },
  "BATTERY-NOW": {
   "name": "BATTERY-NOW",
   "file": "comptwo.zil",
   "line": 2890,
   "endLine": 2892,
   "source": "<ROUTINE BATTERY-NOW ()\n\t <TELL \"The battery is now resting in the depression, attached\nto the laser.\" CR>>"
  },
  "I-WARMTH": {
   "name": "I-WARMTH",
   "file": "comptwo.zil",
   "line": 2908,
   "endLine": 2932,
   "source": "<ROUTINE I-WARMTH ()\n\t <COND (,LASER-JUST-SHOT\n\t\t<SETG LASER-JUST-SHOT <>>\n\t\t<SETG WARMTH-FLAG <+ ,WARMTH-FLAG 1>>\n\t\t<COND (<EQUAL? ,WARMTH-FLAG 3>\n\t\t       <LASER-FEELS \"slightly warm now\">)\n\t\t      (<EQUAL? ,WARMTH-FLAG 6>\n\t\t       <LASER-FEELS \"somewhat warm now\">)\n\t\t      (<EQUAL? ,WARMTH-FLAG 9>\n\t\t       <LASER-FEELS \"very warm now\">)\n\t\t      (<EQUAL? ,WARMTH-FLAG 12>\n\t\t       <LASER-FEELS \"quite hot\">)>)\n\t       (T\n\t\t<COND (<EQUAL? ,WARMTH-FLAG 0>\n\t\t       <DISABLE <INT I-WARMTH>>)\n\t\t      (T\n\t\t       <SETG WARMTH-FLAG <- ,WARMTH-FLAG 1>>\n\t\t       <COND (<EQUAL? ,WARMTH-FLAG 12>\n\t\t\t      <LASER-COOLS \"quite hot\">)\n\t\t\t     (<EQUAL? ,WARMTH-FLAG 9>\n\t\t\t      <LASER-COOLS \"very warm\">)\n\t\t\t     (<EQUAL? ,WARMTH-FLAG 6>\n\t\t\t      <LASER-COOLS \"somewhat warm\">)\n\t\t\t     (<EQUAL? ,WARMTH-FLAG 3>\n\t\t\t      <LASER-COOLS \"slightly warm\">)>)>)>>"
  },
  "LASER-FEELS": {
   "name": "LASER-FEELS",
   "file": "comptwo.zil",
   "line": 2934,
   "endLine": 2937,
   "source": "<ROUTINE LASER-FEELS (STRING)\n\t <TELL CR\n\"The laser feels \" .STRING\n\", but that doesn't seem to affect its performance at all.\" CR>>"
  },
  "LASER-COOLS": {
   "name": "LASER-COOLS",
   "file": "comptwo.zil",
   "line": 2939,
   "endLine": 2941,
   "source": "<ROUTINE LASER-COOLS (STRING)\n\t <TELL CR\n\"The laser has cooled, but it still feels \" .STRING \".\" CR>>"
  },
  "BEAM-COLOR": {
   "name": "BEAM-COLOR",
   "file": "comptwo.zil",
   "line": 2947,
   "endLine": 2959,
   "source": "<ROUTINE BEAM-COLOR ()\n\t <COND (<EQUAL? ,LASER-SETTING 1>\n\t        <TELL \"red\">)\n               (<EQUAL? ,LASER-SETTING 2>\n\t        <TELL \"orange\">)\n\t       (<EQUAL? ,LASER-SETTING 3>\n\t\t<TELL \"yellow\">)\n\t       (<EQUAL? ,LASER-SETTING 4>\n\t        <TELL \"green\">)\n\t       (<EQUAL? ,LASER-SETTING 5>\n\t\t<TELL \"blue\">)\n\t       (<EQUAL? ,LASER-SETTING 6>\n\t\t<TELL \"violet\">)>>"
  },
  "SHOOT-SPECK": {
   "name": "SHOOT-SPECK",
   "file": "comptwo.zil",
   "line": 2961,
   "endLine": 2991,
   "source": "<ROUTINE SHOOT-SPECK ()\n\t<COND (<EQUAL? ,LASER-SETTING 1>\n\t       <COND (<PROB ,MARKSMANSHIP-COUNTER>\n\t\t      <COND (,SPECK-HIT\n\t\t\t     <SETG COMPUTER-FIXED T>\n\t\t\t     <FSET ,CRYO-ELEVATOR-DOOR ,OPENBIT>\n\t\t\t     <FCLEAR ,PROJCON-OFFICE ,TOUCHBIT>\n\t\t\t     <FCLEAR ,CRYO-ELEVATOR-DOOR ,INVISIBLE>\n\t\t\t     <ENABLE <QUEUE I-FRY 200>>\n\t\t\t     <SETG SCORE <+ ,SCORE 8>>\n\t\t\t     <REMOVE ,SPECK>\n\t\t\t     <TELL\n\"The beam hits the speck again! This time, it vaporizes into a fine cloud\nof ash. The relay slowly begins to close, and a voice whispers in your ear\n\\\"Sector 384 will activate in 200 millichrons. Proceed to exit station.\\\"\" CR>)\n\t\t\t    (T\n\t\t\t     <SETG SPECK-HIT T>\n\t\t\t     <TELL\n\"The speck is hit by the beam! It sizzles a little,\nbut isn't destroyed yet.\" CR>)>)\n\t\t     (T\n\t\t      <SETG MARKSMANSHIP-COUNTER <+ ,MARKSMANSHIP-COUNTER 12>>\n\t\t      <TELL <PICK-ONE ,BEAM-MISSES> CR>)>)\n\t      (T\n\t       <REMOVE ,RELAY>\n\t       <TELL \"A thin \">\n\t       <BEAM-COLOR>\n\t       <TELL\n\" beam shoots from the laser and slices through the red plastic covering of\nthe relay like a hot knife through butter. Air rushes into the relay, which\ncollapses into a heap of plastic shards.\" CR>)>>"
  },
  "I-FRY": {
   "name": "I-FRY",
   "file": "comptwo.zil",
   "line": 2999,
   "endLine": 3008,
   "source": "<ROUTINE I-FRY ()\n\t <COND (<EQUAL? ,HERE ,MIDDLE-OF-STRIP\n\t\t\t      ,STRIP-NEAR-STATION\n\t\t\t      ,STRIP-NEAR-RELAY>\n\t\t<CRLF>\n\t\t<JIGS-UP\n\"|\nWith a furious storm of electrical mayhem, Sector 384 comes to life. A\nfew microvolts course through the silicon strip on which you stand.\nUnfortunately, at your current size, this is enough to barbecue you.\">)>>"
  },
  "MICROBE-F": {
   "name": "MICROBE-F",
   "file": "comptwo.zil",
   "line": 3024,
   "endLine": 3056,
   "source": "<ROUTINE MICROBE-F ()\n\t <COND (<OR <VERB? HELLO TALK>\n\t\t    <EQUAL? ,MICROBE ,WINNER>>\n\t\t<TELL\n\"You don't seem to have bridged the vast communication gulf\nbetween yourself and the microbe.\" CR>\n\t\t<SETG P-CONT <>>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<RFATAL>)\n\t       (<AND <VERB? THROW GIVE>\n\t\t     <EQUAL? ,PRSI ,MICROBE>>\n\t\t<COND (<AND <EQUAL? ,PRSO ,LASER>\n\t\t\t    <G? ,WARMTH-FLAG 7>>\n\t\t       <REMOVE ,LASER>\n\t\t       <DISABLE <INT I-WARMTH>>\n\t\t       <COND (<G? ,WARMTH-FLAG 10>\n\t\t\t      <DISABLE <INT I-MICROBE>>\n\t\t\t      <TELL\n\"The microbe gobbles up the laser and turns toward you. A moment later,\nit begins writhing in pain. Apparently, eating the hot laser was a bit\ntoo much for it. With a bellow of agony, it rolls off the edge of\nthe strip. (Whew!)\" CR>\n\t\t             <REMOVE ,LASER>\n\t\t             <REMOVE ,MICROBE>\n\t\t             <SETG NO-MICROBE T>\n\t\t\t     <SETG MICROBE-DISPATCHED T>)\n\t\t\t    (T\n\t\t\t      <TELL\n\"The microbe greedily devours the laser, and turns toward you.\" CR>)>)\n\t\t      (T\n\t\t       <TELL\n\"The microbe ignores the \" D ,PRSO \", but does attempt to digest\nyour arm.\" CR>)>)>>"
  },
  "I-MICROBE": {
   "name": "I-MICROBE",
   "file": "comptwo.zil",
   "line": 3058,
   "endLine": 3084,
   "source": "<ROUTINE I-MICROBE ()\n\t <COND (<EQUAL? ,MICROBE-HIT T>\n\t        <TELL CR <PICK-ONE ,WINNER-ATTACKED>>\n\t        <COND (<AND <G? ,WARMTH-FLAG 13>\n\t\t\t    <IN? ,LASER ,ADVENTURER>>\n\t\t       <JIGS-UP\n\" The microbe, whipped into a rabid frenzy by the waves of heat from the\npulsing laser, literally lunges at it. You jump back and, losing your\nbalance, fall over the edge of the strip. The microbe, writhing madly, hurls\nitself after its prey. You and the microbe both plunge into the void below.\">)\n\t\t      (<AND <G? ,WARMTH-FLAG 7>\n\t\t\t    <IN? ,LASER ,ADVENTURER>>\n\t\t       <TELL \n\" Another pseudopod, perhaps attracted by the warmth of the laser, tries to\nenvelop the weapon. You snatch it away from the monster's grasp.\">)>\n\t\t<CRLF>)\n\t       (T\n\t\t<COND (<EQUAL? ,MICROBE-COUNTER 2>\n\t\t       <JIGS-UP\n\"|\nThe microbe wraps several pseudopods around you and shoves you into its\nmucus-covered gullet. Digestive juices begin their work. The experience\nis not pleasant.\">)\n\t\t      (T\n\t\t       <SETG MICROBE-COUNTER <+ ,MICROBE-COUNTER 1>>\n\t\t       <TELL CR <PICK-ONE ,MONSTER-CLOSES> CR>)>)>\n\t <SETG MICROBE-HIT <>>>"
  },
  "SHOOT-MICROBE": {
   "name": "SHOOT-MICROBE",
   "file": "comptwo.zil",
   "line": 3110,
   "endLine": 3117,
   "source": "<ROUTINE SHOOT-MICROBE ()\n\t <TELL \"The laser beam strikes the microbe\">\n\t <COND (<EQUAL? ,LASER-SETTING 1>\n\t\t<TELL \", but passes harmlessly through its red skin.\" CR>)\n\t       (T\n\t\t<SETG MICROBE-HIT T>\n\t\t<TELL \". \">\n\t\t<TELL <PICK-ONE ,MICROBE-STRIKES> CR>)>>"
  },
  "STRIP-F": {
   "name": "STRIP-F",
   "file": "comptwo.zil",
   "line": 3136,
   "endLine": 3155,
   "source": "<ROUTINE STRIP-F ()\n\t <COND (<VERB? THROW-OFF>\n\t\t<COND (<AND <EQUAL? ,PRSO ,LASER>\n\t\t\t    <G? ,WARMTH-FLAG 7>>\n\t\t       <DISABLE <INT I-WARMTH>>\n\t\t       <DISABLE <INT I-MICROBE>>\n\t\t       <TELL\n\"As the laser flies over the edge of the strip, the hungry microbe lunges after\nit. Both the laser and the microbe plummet into the void. (Whew!)\" CR>\n\t\t       <REMOVE ,LASER>\n\t\t       <REMOVE ,MICROBE>\n\t\t       <SETG NO-MICROBE T>\n\t\t       <SETG MICROBE-DISPATCHED T>)\n\t\t      (T\n\t\t       <COND (<EQUAL? ,PRSO ,LASER>\n\t\t\t      <DISABLE <INT I-WARMTH>>)>\n\t\t       <REMOVE ,PRSO>\n\t\t       <TELL\n\"The \" D ,PRSO \" flies over the edge of the strip and disappears into the\nvoid.\" CR>)>)>>"
  },
  "GRUE-F": {
   "name": "GRUE-F",
   "file": "comptwo.zil",
   "line": 3190,
   "endLine": 3199,
   "source": "<ROUTINE GRUE-F ()\n\t <COND (<AND <VERB? EXAMINE>\n\t\t     <NOT <IN? ,GRUE ,HERE>>>\n\t\t<TELL\n\"Grues are vicious, carnivorous beasts first introduced to Earth by a\nvisiting alien spaceship during the late 22nd century. Grues spread throughout\nthe galaxy alongside man. Although now extinct on all civilized planets,\nthey still exist in some backwater corners of the galaxy. Their favorite diet\nis Ensigns Seventh Class, but their insatiable appetite is tempered by their\nfear of light.\" CR>)>>"
  },
  "INIT-STATUS-LINE": {
   "name": "INIT-STATUS-LINE",
   "file": "globals.zil",
   "line": 29,
   "endLine": 47,
   "source": "<ROUTINE INIT-STATUS-LINE ()\n\t <COND (<L? ,WIDTH 38>\n\t\t<TELL \"[Screen too narrow.]\" CR>\n\t\t<QUIT>)>\n\t <SETG OHERE <>>\n\t <SETG OLD-LEN 0>\n\t <SPLIT 1>\n\t <SCREEN ,S-WINDOW>\n\t <HLIGHT ,H-INVERSE>\n\t <CURSET 1 1>\t \n\t <PRINT-SPACES ,WIDTH>\n\t <COND (<G? ,WIDTH 74>\n\t\t<CURSET 1 51>\n\t\t<TELL \"Score:\">\n\t\t<CURSET 1 64>\n\t\t<TELL \"Time:\">)>\n\t <HLIGHT ,H-NORMAL>\n\t <SCREEN ,S-TEXT>\n\t <RTRUE>>"
  },
  "UPDATE-STATUS-LINE": {
   "name": "UPDATE-STATUS-LINE",
   "file": "globals.zil",
   "line": 49,
   "endLine": 79,
   "source": "<ROUTINE UPDATE-STATUS-LINE ()\n\t <SCREEN ,S-WINDOW>\n\t ;<BUFOUT <>>\n\t <HLIGHT ,H-NORMAL>\n\t <HLIGHT ,H-INVERSE>\n\t <COND (<NOT <EQUAL? ,HERE ,OHERE>>\n\t\t<SETG OHERE ,HERE>\n\t\t;<DIROUT ,D-SCREEN-OFF>\t        ; \"Screen off.\"\n\t\t<DIROUT ,D-TABLE-ON ,SL-TABLE>  ; \"Table on.\"\n\t\t<SAY-HERE>\n\t\t<DIROUT ,D-TABLE-OFF> \t        ; \"Table off.\"\n\t\t;<DIROUT ,D-SCREEN-ON>\t\t; \"Screen on.\"\n\t\t<CURSET 1 2>\n\t\t<PRINT-SPACES ,OLD-LEN>  ; \"Erase old HERE desc\"\n\t\t<SETG OLD-LEN <GET ,SL-TABLE 0>> ;\"Print new HERE desc.\"\n\t\t<CURSET 1 2>\n\t\t<SAY-HERE>)>\n\t <COND (<G? ,WIDTH 74>\n\t\t<CURSET 1 58>\n\t\t<TELL N ,SCORE \" \">  ;\"for 110 to 80 score bug\"\n\t\t<CURSET 1 70>\n\t\t<TELL N ,MOVES>)\n\t       (T\n\t\t<DIROUT ,D-TABLE-ON ,SL-TABLE>\n\t\t<TELL N ,SCORE \"/\" N ,MOVES \" \">\n\t\t<DIROUT ,D-TABLE-OFF>\n\t\t<CURSET 1 <- ,WIDTH <+ <GET ,SL-TABLE 0> 1>>>\n\t\t<TELL N ,SCORE \"/\" N ,MOVES \" \">)>\n\t <HLIGHT ,H-NORMAL>\n\t <SCREEN ,S-TEXT>  ;\"Back to main screen.\"\n\t <RTRUE>>"
  },
  "PRINT-SPACES": {
   "name": "PRINT-SPACES",
   "file": "globals.zil",
   "line": 81,
   "endLine": 89,
   "source": "<ROUTINE PRINT-SPACES (N \"AUX\" AMT) \n  <REPEAT ()\n    <COND (<G? .N ,BLANKS-LEN>\n\t   <SET AMT ,BLANKS-LEN>)\n\t  (T\n\t   <SET AMT .N>)>\n    <PRINTT ,BLANKS .AMT>\n    <COND (<L=? <SET N <- .N .AMT>> 0>\n\t   <RTRUE>)>>>"
  },
  "SAY-HERE": {
   "name": "SAY-HERE",
   "file": "globals.zil",
   "line": 94,
   "endLine": 102,
   "source": "<ROUTINE SAY-HERE ()\n\t <COND (<ZERO? ,LIT?>\n\t\t<TELL \"Darkness\">)\n\t       (T\n\t\t<TELL D ,HERE>\n\t        <COND (<AND <G? ,WIDTH 74>\n\t\t\t    <FSET? <LOC ,ADVENTURER> ,VEHBIT>>\n\t\t       <TELL \", in the \" D <LOC ,ADVENTURER>>)>)>\n\t <RTRUE>>"
  },
  "GROUND-F": {
   "name": "GROUND-F",
   "file": "globals.zil",
   "line": 163,
   "endLine": 174,
   "source": "<ROUTINE GROUND-F ()\n\t <COND (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSI ,GROUND>>\n\t\t<PERFORM ,V?DROP ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? CLIMB-ON BOARD>\n\t\t<SETG C-ELAPSED 28>\n\t\t<TELL\n\"You sit down on the floor. After a brief rest, you stand again.\" CR>)\n\t       (<AND <VERB? EXAMINE>\n\t\t     <EQUAL? ,HERE ,ADMIN-CORRIDOR-S>>\n\t\t<TELL \"A narrow, jagged crevice runs across the floor.\" CR>)>>"
  },
  "WINDOW-F": {
   "name": "WINDOW-F",
   "file": "globals.zil",
   "line": 184,
   "endLine": 235,
   "source": "<ROUTINE WINDOW-F ()\n\t <COND (<VERB? LOOK-INSIDE>\n\t\t<COND (<EQUAL? ,HERE ,BIO-LOCK-EAST>\n\t\t       <TELL\n\"You can see a large laboratory, dimly illuminated. A blue glow comes from\na crack in the northern wall of the lab. Shadowy, ominous shapes move about\nwithin the room.\">\n\t\t       <COND (<NOT <FSET? ,MINI-CARD ,TOUCHBIT>>\n\t\t\t      <TELL\n\" On the floor, just inside the door, you can see a magnetic-striped card.\">)>\n\t\t       <CRLF>)\n\t\t      (<EQUAL? ,HERE ,BIO-LAB>\n\t\t       <TELL \"You see the Bio Lock.\" CR>)\n\t\t      (<OR\n\t\t\t<EQUAL? ,HERE ,ALFIE-CONTROL-EAST ,ALFIE-CONTROL-WEST>\n\t\t        <EQUAL? ,HERE ,BETTY-CONTROL-EAST ,BETTY-CONTROL-WEST>>\n\t\t       <TELL \"You see \">\n\t\t       <DESCRIBE-VIEW>\n\t\t       <TELL CR>)\n\t              (<EQUAL? ,HERE ,BALCONY>\n\t\t       <TELL \"Water. Lots and lots of water.\" CR>)\n\t\t      (<EQUAL? ,HERE ,HELICOPTER>\n\t\t       <TELL \"You see the helipad and the ocean beyond.\" CR>)\n\t\t      (<EQUAL? ,HERE ,ESCAPE-POD>\n\t\t       <COND (<L? ,TRIP-COUNTER 2>\n\t\t\t      <TELL\n\"You can see debris from the exploding Feinstein.\" CR>)\n\t\t             (<G? ,TRIP-COUNTER 8>\n\t\t              <TELL\n\"You can see a planet, hopefully a hospitable one.\" CR>)\n\t\t             (T\n\t\t              <TELL\n\"The window has polarized to blackness.\" CR>)>)\n\t\t      (<EQUAL? ,HERE ,LARGE-OFFICE>\n\t\t       <TELL\n\"You can see the dormitories and other parts of the\ncomplex in the distance. Water is visible in every direction.\" CR>)>)\n\t       (<AND <VERB? THROUGH>\n\t\t     <EQUAL? ,HERE ,BALCONY>>\n\t\t<JIGS-UP\n\"You slice yourself to ribbons on the broken windows and then plummet\ninto the swirling ocean below. Very clever.\">)\n\t       (<VERB? OPEN>\n\t\t<TELL \"This window doesn't open.\" CR>)\n\t       (<AND <VERB? EXAMINE>\n\t\t     <EQUAL? ,HERE ,BALCONY>>\n\t\t<TELL \"They're shattered.\" CR>)\n\t       (<VERB? MUNG>\n\t\t<COND (<EQUAL? ,HERE ,BALCONY>\n\t\t       <TELL \"They're already broken.\" CR>)\n\t\t      (T\n\t\t       <TELL \"It's made of tough Zynoid plastic.\" CR>)>)>>"
  },
  "CLIFF-F": {
   "name": "CLIFF-F",
   "file": "globals.zil",
   "line": 244,
   "endLine": 258,
   "source": "<ROUTINE CLIFF-F ()\n\t <COND (<EQUAL? ,HERE ,WEST-WING>\n\t\t<COND (<VERB? LEAP>\n\t\t       <JIGS-UP \"Brilliant idea!\">)\n\t\t      (<VERB? THROW-OFF>\n\t\t       <COND (<EQUAL? ,PRSO ,LASER>\n\t\t\t      <DISABLE <INT I-WARMTH>>)>\n\t\t       <REMOVE ,PRSO>\n\t\t       <TELL\n\"The \" D ,PRSO \" falls into the ocean below.\" CR>)>)\n\t       (T\n\t\t<COND (<VERB? CLIMB-UP CLIMB-FOO>\n\t\t       <DO-WALK ,P?UP>)\n\t\t      (<VERB? CLIMB-DOWN>\n\t\t       <DO-WALK ,P?DOWN>)>)>>"
  },
  "OCEAN-F": {
   "name": "OCEAN-F",
   "file": "globals.zil",
   "line": 268,
   "endLine": 272,
   "source": "<ROUTINE OCEAN-F ()\n\t <COND (<VERB? TAKE THROUGH RUB>\n\t\t<TELL \"You can't reach the ocean from here.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"It stretches as far as you can see.\" CR>)>>"
  },
  "TABLES-F": {
   "name": "TABLES-F",
   "file": "globals.zil",
   "line": 282,
   "endLine": 292,
   "source": "<ROUTINE TABLES-F ()\n\t <COND (<AND <VERB? LOOK-UNDER>\n\t\t     <EQUAL? ,HERE ,MESS-HALL>>\n\t\t<TELL\n\"Wow!!! Under the table are three keys, a sack of food, a reactor elevator\naccess pass, one hundred gold pieces ... Just kidding. Actually, there's\nnothing there.\" CR>)\n\t       (<AND <VERB? PUT-ON>\n\t\t     <EQUAL? ,PRSI ,TABLES>>\n\t\t<TELL\n\"That would accomplish nothing useful.\" CR>)>> "
  },
  "SHELVES-F": {
   "name": "SHELVES-F",
   "file": "globals.zil",
   "line": 301,
   "endLine": 306,
   "source": "<ROUTINE SHELVES-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"The shelves are pretty dusty.\" CR>)\n\t       (<AND <VERB? PUT-ON>\n\t\t     <EQUAL? ,PRSI ,SHELVES>>\n\t\t<TELL \"That would be a waste of time.\" CR>)>>"
  },
  "LIGHTS-F": {
   "name": "LIGHTS-F",
   "file": "globals.zil",
   "line": 316,
   "endLine": 320,
   "source": "<ROUTINE LIGHTS-F ()\n\t <COND (<AND <VERB? EXAMINE>\n\t\t     <EQUAL? ,HERE ,COMPUTER-ROOM>>\n\t\t<TELL\n\"The red light would seem to indicate a malfunction in the computer.\" CR>)>>"
  },
  "GLOBAL-DOORWAY-F": {
   "name": "GLOBAL-DOORWAY-F",
   "file": "globals.zil",
   "line": 330,
   "endLine": 336,
   "source": "<ROUTINE GLOBAL-DOORWAY-F ()\n\t <COND (<VERB? THROUGH>\n\t\t<USE-DIRECTIONS>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<TELL \"It's just an opening; you can't open or close it.\" CR>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<TELL \"Can't see much from here. Try going there.\" CR>)>>"
  },
  "USE-DIRECTIONS": {
   "name": "USE-DIRECTIONS",
   "file": "globals.zil",
   "line": 338,
   "endLine": 339,
   "source": "<ROUTINE USE-DIRECTIONS ()\n\t <TELL \"Use compass directions for movement.\" CR>>"
  },
  "NO-CLOSE": {
   "name": "NO-CLOSE",
   "file": "globals.zil",
   "line": 341,
   "endLine": 342,
   "source": "<ROUTINE NO-CLOSE ()\n\t <TELL \"There's no way to close it.\" CR>>"
  },
  "CONTROLS-F": {
   "name": "CONTROLS-F",
   "file": "globals.zil",
   "line": 352,
   "endLine": 373,
   "source": "<ROUTINE CONTROLS-F ()\n\t<COND (<OR <EQUAL? ,HERE ,UPPER-ELEVATOR ,LOWER-ELEVATOR ,BOOTH-1>\n\t\t   <EQUAL? ,HERE ,REACTOR-ELEVATOR ,BOOTH-2 ,BOOTH-3>>\n\t       <COND (<VERB? EXAMINE>\n\t\t      <TELL\n\"The control panel is a simple one, as described. Just a small slot\nand two buttons.\" CR>)>)\n\t      (<VERB? RUB MOVE TURN SET TAKE EXAMINE PUSH PULL>\n\t       <COND (<EQUAL? ,HERE ,HELICOPTER>\n\t\t      <TELL\n\"The controls are covered and locked.\" CR>)\n\t\t     (<EQUAL? ,HERE ,ESCAPE-POD>\n\t\t      <TELL\n\"The controls are entirely automated.\" CR>)\n\t\t     (T\n\t\t      <TELL\n\"The controls are incredibly complicated and you shouldn't even\nbe thinking about touching them.\" CR>)>)\n\t      (<AND <EQUAL? ,HERE ,HELICOPTER>\n\t\t    <VERB? OPEN UNLOCK>>\n\t       <TELL\n\"You don't even have the orange key!\" CR>)>>"
  },
  "GLOBAL-GAMES-F": {
   "name": "GLOBAL-GAMES-F",
   "file": "globals.zil",
   "line": 383,
   "endLine": 389,
   "source": "<ROUTINE GLOBAL-GAMES-F ()\n\t <COND (<VERB? PLAY>\n\t\t<COND (<IN? ,FLOYD ,HERE>\n\t\t       <PERFORM ,V?PLAY-WITH ,FLOYD>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"Okay. Gee, that was fun.\" CR>)>)>>"
  },
  "HANDS-F": {
   "name": "HANDS-F",
   "file": "globals.zil",
   "line": 399,
   "endLine": 410,
   "source": "<ROUTINE HANDS-F ()\n\t <COND (<VERB? SHAKE>\n\t\t<COND (<IN? ,AMBASSADOR ,HERE>\n\t\t       <TELL \"A repulsive idea.\" CR>)\n\t\t      (<IN? ,BLATHER ,HERE>\n\t\t       <TELL \"Saluting might be a better idea.\" CR>)\n\t\t      (<AND <IN? ,FLOYD ,HERE>\n\t\t\t    <FSET? ,FLOYD ,RLANDBIT>>\n\t\t       <TELL\n\"You shake one of Floyd's grasping extensions.\" CR>)\n\t\t      (T\n\t\t       <TELL \"There's no one to shake hands with.\" CR>)>)>>"
  },
  "SLEEP-F": {
   "name": "SLEEP-F",
   "file": "globals.zil",
   "line": 419,
   "endLine": 421,
   "source": "<ROUTINE SLEEP-F ()\n\t <COND (<VERB? WALK-TO>\n\t\t<V-SLEEP>)>>"
  },
  "CRETIN-F": {
   "name": "CRETIN-F",
   "file": "globals.zil",
   "line": 437,
   "endLine": 463,
   "source": "<ROUTINE CRETIN-F ()\n\t <COND (<VERB? GIVE>\n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? SCRUB>\n\t\t<TELL\n\"If only you'd done that before the last inspection, you wouldn't have\ngotten 300 demerits.\" CR>)\n\t       (<VERB? DROP>\n\t\t<TELL \"Huh?\" CR>)\n\t       (<VERB? SMELL>\n\t\t<TELL \"Phew!\" CR>)\n\t       (<VERB? FOLLOW>\n\t\t<TELL \"It would be hard not to.\" CR>)\n\t       (<VERB? EAT>\n\t\t<TELL \"Auto-cannibalism is not the answer.\" CR>)\n\t       (<VERB? ATTACK MUNG>\n\t\t<COND (<==? ,PRSO ,ME>\n\t\t       <JIGS-UP \"If you insist.... Poof, you're dead!\">)\n\t\t      (ELSE <TELL \"What a silly idea!\" CR>)>)\n\t       (<VERB? TAKE>\n\t\t<TELL \"How romantic!\" CR>)\n\t       (<VERB? DISEMBARK>\n\t\t<TELL \"You'll have to do that on your own.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"That's difficult unless your eyes are prehensile.\"\n\t\t      CR>)>>"
  },
  "DDESC": {
   "name": "DDESC",
   "file": "globals.zil",
   "line": 470,
   "endLine": 474,
   "source": "<ROUTINE DDESC (DOOR)\n\t <COND (<FSET? .DOOR ,OPENBIT>\n\t\t<TELL \"open\">)\n\t       (T\n\t\t<TELL \"closed\">)>>"
  },
  "ALREADY-OPEN": {
   "name": "ALREADY-OPEN",
   "file": "globals.zil",
   "line": 476,
   "endLine": 477,
   "source": "<ROUTINE ALREADY-OPEN ()\n\t <TELL \"It's already open!\" CR>>"
  },
  "IS-CLOSED": {
   "name": "IS-CLOSED",
   "file": "globals.zil",
   "line": 479,
   "endLine": 480,
   "source": "<ROUTINE IS-CLOSED ()\n\t <TELL \"It is closed!\" CR>>"
  },
  "V-THROUGH": {
   "name": "V-THROUGH",
   "file": "globals.zil",
   "line": 482,
   "endLine": 494,
   "source": "<ROUTINE V-THROUGH (\"OPTIONAL\" (OBJ <>) \"AUX\" M)\n\t<COND (<AND <NOT .OBJ> <FSET? ,PRSO ,VEHBIT>>\n\t       <PERFORM ,V?BOARD ,PRSO>\n\t       <RTRUE>)\n\t      (<AND <NOT .OBJ> <NOT <FSET? ,PRSO ,TAKEBIT>>>\n\t       <TELL\n\"You hit your head against the \" D ,PRSO \" as you attempt this feat.\" CR>)\n\t      (.OBJ\n\t       <TELL \"You can't do that!\" CR>)\n\t      (<IN? ,PRSO ,ADVENTURER>\n\t       <TELL \"That would involve quite a contortion!\" CR>)\n\t      (T\n\t       <TELL <PICK-ONE ,YUKS> CR>)>>"
  },
  "FIND-IN": {
   "name": "FIND-IN",
   "file": "globals.zil",
   "line": 496,
   "endLine": 501,
   "source": "<ROUTINE FIND-IN (WHERE WHAT \"AUX\" W)\n\t <SET W <FIRST? .WHERE>>\n\t <COND (<NOT .W> <RFALSE>)>\n\t <REPEAT ()\n\t\t <COND (<FSET? .W .WHAT> <RETURN .W>)\n\t\t       (<NOT <SET W <NEXT? .W>>> <RETURN <>>)>>>"
  },
  "NOT-HERE-OBJECT-F": {
   "name": "NOT-HERE-OBJECT-F",
   "file": "globals.zil",
   "line": 508,
   "endLine": 543,
   "source": "<ROUTINE NOT-HERE-OBJECT-F (\"AUX\" TBL (PRSO? T) OBJ)\n\t <COND (<AND <PRSO? ,NOT-HERE-OBJECT>\n\t\t     <PRSI? ,NOT-HERE-OBJECT>>\n\t\t<TELL \"Those things aren't here!\" CR>\n\t\t<RTRUE>)\n\t       (<PRSO? ,NOT-HERE-OBJECT>\n\t\t<SET TBL ,P-PRSO>)\n\t       (T\n\t\t<SET TBL ,P-PRSI>\n\t\t<SET PRSO? <>>)>\n\t <COND (.PRSO?\n\t\t<COND (<VERB? TYPE>\n\t\t       <PERFORM ,V?TYPE ,FLOYD>\n\t\t       <RTRUE>)\n\t\t      (<OR <VERB? EXAMINE>\n\t\t\t   <AND <EQUAL? ,WINNER ,FLOYD>\n\t\t\t\t<VERB? TAKE FIND>>>\n\t\t       <COND (<SET OBJ <FIND-NOT-HERE .TBL .PRSO?>>\n\t\t\t      <COND (<NOT <==? .OBJ ,NOT-HERE-OBJECT>>\n\t\t\t\t     <RTRUE>)>)\n\t\t\t     (T\n\t\t\t      <RFALSE>)>)>)>\n\t ;\"Here is the default 'cant see any' printer\"\n\t <COND (<EQUAL? ,WINNER ,ADVENTURER>\n\t\t<TELL \"You can't see any\">\n\t\t<NOT-HERE-PRINT .PRSO?>\n\t\t<TELL \" here!\" CR>\n\t\t<COND (<VERB? TELL>\n\t\t       <SETG P-CONT <>>\n\t\t       <SETG QUOTE-FLAG <>>\n\t\t       <RFATAL>)>)\n\t       (T\n\t\t<TELL \"The \" D ,WINNER \" seems confused. \\\"I don't see any\">\n\t\t<NOT-HERE-PRINT .PRSO?>\n\t\t<TELL \" here!\\\"\" CR>)>\n\t <RTRUE>>"
  },
  "FIND-NOT-HERE": {
   "name": "FIND-NOT-HERE",
   "file": "globals.zil",
   "line": 545,
   "endLine": 567,
   "source": "<ROUTINE FIND-NOT-HERE (TBL PRSO? \"AUX\" M-F OBJ)\n\t;\"Protocol: return T if case was handled and msg TELLed,\n\t    ,NOT-HERE-OBJECT if 'can't see' msg TELLed,\n\t\t\t  <> if PRSO/PRSI ready to use\"\n\t;\"Here is where special-case code goes. <MOBY-FIND .TBL> returns\n\t   number of matches. If 1, then P-MOBY-FOUND is it. One may treat\n\t   the 0 and >1 cases alike or different. It doesn't matter. Always\n\t   return RFALSE (not handled) if you have resolved the problem.\"\n\t<SET M-F <MOBY-FIND .TBL>>\n\t;<COND (<AND <G? .M-F 1>\n\t\t    <SET OBJ <GETP <1 .TBL> ,P?GLOBAL>>>\n\t       <SET M-F 1>\n\t       <SETG P-MOBY-FOUND .OBJ>)>\n\t<COND (<==? 1 .M-F>\n\t       <COND (.PRSO? <SETG PRSO ,P-MOBY-FOUND>)\n\t\t     (T <SETG PRSI ,P-MOBY-FOUND>)>\n\t       <RFALSE>)\n\t      (<NOT .PRSO?>\n\t       <TELL \"You wouldn't find any\">\n\t       <NOT-HERE-PRINT .PRSO?>\n\t       <TELL \" there.\" CR>\n\t       <RTRUE>)\n\t      (T ,NOT-HERE-OBJECT)>>"
  },
  "NOT-HERE-PRINT": {
   "name": "NOT-HERE-PRINT",
   "file": "globals.zil",
   "line": 569,
   "endLine": 576,
   "source": "<ROUTINE NOT-HERE-PRINT (PRSO?)\n <COND (<OR ,P-OFLAG ,P-MERGED>\n\t<COND (,P-XADJ <TELL \" \"> <PRINTB ,P-XADJ>)>\n\t<COND (,P-XNAM <TELL \" \"> <PRINTB ,P-XNAM>)>)\n       (.PRSO?\n\t<BUFFER-PRINT <GET ,P-ITBL ,P-NC1> <GET ,P-ITBL ,P-NC1L> <>>)\n       (T\n\t<BUFFER-PRINT <GET ,P-ITBL ,P-NC2> <GET ,P-ITBL ,P-NC2L> <>>)>>"
  },
  "DECK-NINE-F": {
   "name": "DECK-NINE-F",
   "file": "globals.zil",
   "line": 612,
   "endLine": 626,
   "source": "<ROUTINE DECK-NINE-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a featureless corridor similar to every other corridor on the ship.\nIt curves away to starboard, and a gangway leads up\">\n\t\t<COND (<FSET? ,GANGWAY-DOOR ,OPENBIT>\n\t\t       <TELL \".\">)\n\t\t      (T\n\t\t       <TELL\n\", but both of these are blocked by closed bulkheads.\">)>\n\t\t<TELL\n\" To port is the entrance to one of the ship's primary escape pods. The\npod bulkhead is \">\n\t\t<DDESC ,POD-DOOR>\n\t\t<TELL \".\" CR>)>>"
  },
  "CHRONOMETER-F": {
   "name": "CHRONOMETER-F",
   "file": "globals.zil",
   "line": 645,
   "endLine": 651,
   "source": "<ROUTINE CHRONOMETER-F ()\n\t <COND (<VERB? EXAMINE READ>\n\t\t<TELL\n\"It is a standard wrist chronometer with a digital display. \">\n\t\t<TELL-TIME>\n\t\t<TELL \" The back is engraved with\nthe message \\\"Good luck in the Patrol! Love, Mom and Dad.\\\"\" CR>)>>"
  },
  "TELL-TIME": {
   "name": "TELL-TIME",
   "file": "globals.zil",
   "line": 653,
   "endLine": 659,
   "source": "<ROUTINE TELL-TIME ()\n\t <TELL \"According to the chronometer, the current time is \">\n\t <COND (<FSET? ,CHRONOMETER ,MUNGEDBIT>\n\t\t<TELL N ,MUNGED-TIME>)\n\t       (T\n\t\t<TELL N ,INTERNAL-MOVES>)>\n\t <TELL \".\">>"
  },
  "PATROL-UNIFORM-F": {
   "name": "PATROL-UNIFORM-F",
   "file": "globals.zil",
   "line": 686,
   "endLine": 719,
   "source": "<ROUTINE PATROL-UNIFORM-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"It is a standard-issue one-pocket Stellar Patrol uniform, a miracle of modern\ntechnology. It will keep its owner warm in cold climates and cool in warm\nlocales. It provides protection against mild radiation, repels all insects,\nabsorbs sweat, promotes healthy skin tone, and on top of everything else,\nit is supercomfy.\">\n\t\t<COND (<EQUAL? ,TRIP-COUNTER 15>\n\t\t       <TELL\n\" There are definitely worse things to find yourself wearing when stranded\non a strange planet.\">)>\n\t\t<TELL CR>)\n\t       (<AND <VERB? WEAR>\n\t\t     <FSET? ,LAB-UNIFORM ,WORNBIT>>\n\t\t<TELL\n\"It won't fit over the lab uniform.\" CR>)\n\t       (<AND <VERB? TAKE-OFF>\n\t\t     <FSET? ,PATROL-UNIFORM ,WORNBIT>>\n\t\t<FCLEAR ,PATROL-UNIFORM ,WORNBIT>\n\t\t<TELL \"You have removed your Patrol uniform.\">\n\t\t<COND (<EQUAL? ,TRIP-COUNTER 15>\n\t\t       <TELL\n\" You suddenly realize how warm it is. You also feel naked and vulnerable.\">)>\n\t\t<COND (<IN? ,BLATHER ,HERE>\n\t\t       <TELL\n\" \\\"Removing your uniform while on duty? Five hundred demerits!\\\"\">)\n\t\t      (<IN? ,FLOYD ,HERE>\n\t\t       <TELL\n\" Floyd giggles. \\\"You look funny without any clothes on.\\\"\">)>\n\t\t<TELL CR>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<TELL\n\"There's no way to open or close the pocket of the \" D ,PRSO \".\" CR>)>>"
  },
  "DIARY-F": {
   "name": "DIARY-F",
   "file": "globals.zil",
   "line": 741,
   "endLine": 769,
   "source": "<ROUTINE DIARY-F ()\n\t <COND (<VERB? OPEN CLOSE>\n\t\t<TELL \"It's not that kind of diary.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"You've used this battered old recording machine as a diary for years. It\nincludes a little button\">\n\t\t<COND (<FSET? ,DIARY ,ACTIVEBIT>\n\t\t       <TELL \", which is flashing,\">)>\n\t\t<TELL\n\" and a microphone/speaker. To read its screen, type READ DIARY.\" CR>)\n\t       ;(<AND <VERB? READ>\n\t\t     <NOT <FSET? ,DIARY ,ACTIVEBIT>>>\n\t\t;<QUEUE I-DIARY-READER -1>\n\t\t<FSET ,DIARY ,ACTIVEBIT>\n\t\t<SETG DIARY-CTR 0>\n\t\t<READ-DIARY>)\n\t       (<VERB? READ>\n\t\t<COND (<IN? ,BLATHER ,HERE>\n\t\t       <TELL\n\"Blather stops you, scribbling madly. \\\"I warned you, Ensign!\nThat's another two hundred demerits!\\\"\" CR>)\n\t\t      (<NOT <FSET? ,DIARY ,ACTIVEBIT>>\n\t\t       ;<QUEUE I-DIARY-READER -1>\n\t\t       <FSET ,DIARY ,ACTIVEBIT>\n\t\t       <SETG DIARY-CTR 0>\n\t\t       <READ-DIARY>)\n\t\t      (T\n\t\t       <WORDS-ON-SCREEN>)>)>>"
  },
  "DIARY-BUTTON-F": {
   "name": "DIARY-BUTTON-F",
   "file": "globals.zil",
   "line": 780,
   "endLine": 795,
   "source": "<ROUTINE DIARY-BUTTON-F ()\n\t <COND (<VERB? PUSH>\n\t\t<COND (<FSET? ,DIARY ,ACTIVEBIT>\n\t\t       <COND (<EQUAL? ,DIARY-CTR 14>\n\t\t\t      <FCLEAR ,DIARY ,ACTIVEBIT>\n\t\t\t      <SETG DIARY-CTR 0>\n\t\t\t      <TELL\n\"\\\"END OF DIARY -- REWINDING\\\" flashes across the screen; the machine whirrs,\nstops, and the little button flickers off.\" CR>)\n\t\t\t     (T\n\t\t\t      <READ-DIARY>)>)\n\t\t      (T\n\t\t       <TELL \"Nothing happens.\" CR>)>)\n\t       (<AND <VERB? EXAMINE>\n\t\t     <FSET? ,DIARY ,ACTIVEBIT>>\n\t\t<TELL \"It is flashing.\" CR>)>>"
  },
  "READ-DIARY": {
   "name": "READ-DIARY",
   "file": "globals.zil",
   "line": 891,
   "endLine": 895,
   "source": "<ROUTINE READ-DIARY ()\n\t <SETG DIARY-CTR <+ ,DIARY-CTR 1>>\n\t <COND (<EQUAL? ,DIARY-CTR 1>\n\t\t<TELL \"Words start to scroll across the screen:||\">)>\n\t <WORDS-ON-SCREEN>>"
  },
  "WORDS-ON-SCREEN": {
   "name": "WORDS-ON-SCREEN",
   "file": "globals.zil",
   "line": 897,
   "endLine": 904,
   "source": "<ROUTINE WORDS-ON-SCREEN ()\n\t <TELL \"\\\"11,344 \">\n\t <TELL <GET ,DIARY-ENTRIES ,DIARY-CTR> \"\\\"\">\n\t <COND (<NOT <EQUAL? ,DIARY-CTR 14>>\n\t\t<TELL CR CR\n\"The single word, \\\"More,\\\" appears at the bottom of the diary\nscreen, and the little button flashes.\">)>\n\t <CRLF>>"
  },
  "GANGWAY-F": {
   "name": "GANGWAY-F",
   "file": "globals.zil",
   "line": 940,
   "endLine": 946,
   "source": "<ROUTINE GANGWAY-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-END>\n\t\t<COND (<AND <PROB 15>\n\t\t\t    <EQUAL? ,BLOWUP-COUNTER 0>>\n\t\t       <TELL\n\"You hear a distant bellowing ... something about an Ensign Seventh Class\nwhose life is in danger.\" CR>)>)>>"
  },
  "I-BLATHER": {
   "name": "I-BLATHER",
   "file": "globals.zil",
   "line": 984,
   "endLine": 1033,
   "source": "<ROUTINE I-BLATHER ()\n\t <COND (<EQUAL? ,HERE ,DECK-EIGHT ,REACTOR-LOBBY>\n\t\t<COND (<IN? ,BLATHER ,HERE>\n\t\t       <SETG BRIGS-UP <+ ,BRIGS-UP 1>>\n\t\t       <COND (<G? ,BRIGS-UP 3>\n\t\t\t      <TELL CR\n\"Blather loses his last vestige of patience and drags you to the Feinstein's\nbrig. He throws you in, and the door clangs shut behind you.\" CR CR>\n\t\t\t      <GOTO ,BRIG>\n\t\t\t      <ROB ,ADVENTURER ,CRAG>\n\t\t\t      <MOVE ,PADLOCK ,HERE>\n\t\t\t      <FCLEAR ,PADLOCK ,TAKEBIT>)\n\t\t\t     (T\n\t\t\t      <TELL CR\n\"\\\"I said to return to your post, Ensign Seventh Class!\\\" bellows Blather,\nturning a deepening shade of crimson.\" CR>)>)\n\t\t      (<EQUAL? ,BLOWUP-COUNTER 0>\n\t\t       <MOVE ,BLATHER ,HERE>\n\t\t       <THIS-IS-IT ,BLATHER>\n\t\t       <TELL CR\n\"Ensign Blather, his uniform immaculate, enters and notices you are away\nfrom your post. \\\"Twenty demerits, Ensign Seventh Class!\\\" bellows Blather.\n\\\"Forty if you're not back on Deck Nine in five seconds!\\\" He curls his face\ninto a hideous mask of disgust at your unbelievable negligence.\" CR>)>) \n\t       (<EQUAL? ,HERE ,DECK-NINE>\n\t\t<COND (<AND <EQUAL? ,BLATHER-LEAVE 3>\n\t\t\t    <IN? ,BLATHER ,HERE>>\n\t\t       <SETG BLATHER-LEAVE 0>\n\t\t       <REMOVE ,BLATHER>\n\t\t       <TELL CR\n\"Blather, adding fifty more demerits for good measure, moves off in search\nof more young ensigns to terrorize.\" CR>)\n\t\t      (<IN? ,BLATHER ,DECK-NINE>\n\t\t       <SETG BLATHER-LEAVE <+ ,BLATHER-LEAVE 1>>\n\t\t       <RFALSE>)\n\t\t      (<AND <NOT <IN? ,AMBASSADOR ,HERE>>\n\t\t\t    <EQUAL? ,BLOWUP-COUNTER 0>\n\t\t\t    <PROB 5>>\n\t\t       <MOVE ,BLATHER ,HERE>\n\t\t       <THIS-IS-IT ,BLATHER>\n\t\t       <TELL CR\n\"Ensign First Class Blather swaggers in. He studies your work with half-closed\neyes. \\\"You call this polishing, Ensign Seventh Class?\\\" he sneers. \\\"We have\na position for an Ensign Ninth Class in the toilet-scrubbing division,\nyou know. Thirty demerits.\">\n\t\t       <COND (<NOT <FSET? ,PATROL-UNIFORM ,WORNBIT>>\n\t\t\t      <TELL\n\" And another sixty for improper dress!\">)>\n\t\t       <TELL\n\"\\\" He glares at you, his arms crossed.\" CR>)>)>>"
  },
  "BLATHER-F": {
   "name": "BLATHER-F",
   "file": "globals.zil",
   "line": 1046,
   "endLine": 1076,
   "source": "<ROUTINE BLATHER-F ()\n\t <COND (<OR <VERB? TALK HELLO>\n\t\t    <EQUAL? ,BLATHER ,WINNER>>\t\t\n\t\t<TELL\n\"Blather shouts \\\"Speak when you're spoken to, Ensign Seventh Class!\\\" He\nbreaks three pencil points in a frenzied rush to give you more demerits.\" CR>\n\t\t<SETG P-CONT <>>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<RFATAL>)\n\t       (<VERB? ATTACK KICK>\n\t\t<JIGS-UP\n\"Blather removes several of your appendages and internal organs.\">)\n\t       (<VERB? SALUTE>\n\t\t<TELL\n\"Blather's sneer softens a bit. \\\"First right thing you've done today. Only\nfive demerits.\\\"\" CR>)\n\t       (<AND <VERB? THROW>\n\t\t     <EQUAL? ,BLATHER ,PRSI>>\n\t\t<MOVE ,PRSO ,HERE>\n\t\t<TELL\n\"The \" D ,PRSO \" bounces off Blather's bulbous nose. He becomes livid, orders\nyou to do five hundred push-ups, gives you ten thousand demerits, and assigns\nyou five years of extra galley duty.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"Ensign Blather is a tall, beefy officer with a tremendous, misshapen nose.\nHis uniform is perfect in every respect, and the crease in his trousers\ncould probably slice diamonds in half.\" CR>)\n\t       (<VERB? TAKE>\n\t\t<TELL\n\"Blather brushes you away, muttering about suspended shore leave.\" CR>)>>"
  },
  "CELERY-F": {
   "name": "CELERY-F",
   "file": "globals.zil",
   "line": 1095,
   "endLine": 1102,
   "source": "<ROUTINE CELERY-F ()\n\t <COND (<VERB? EAT>\n\t\t<JIGS-UP\n\"Oops. Looks like Blow'k-Bibben-Gordoan metabolism is not\ncompatible with our own. You die of all sorts of convulsions.\">)\n\t       (<VERB? TAKE>\n\t\t<TELL\n\"The ambassador seems perturbed by your lack of normal protocol.\" CR>)>>"
  },
  "I-AMBASSADOR": {
   "name": "I-AMBASSADOR",
   "file": "globals.zil",
   "line": 1106,
   "endLine": 1138,
   "source": "<ROUTINE I-AMBASSADOR ()\n\t <COND (<AND <G? ,AMBASSADOR-LEAVE 2>\n\t\t     <IN? ,AMBASSADOR ,HERE>>\n\t\t<REMOVE ,AMBASSADOR>\n\t\t<REMOVE ,CELERY>\n\t\t<COND (<EQUAL? ,HERE ,DECK-NINE>\n\t\t       <TELL CR\n\"The ambassador grunts a polite farewell, and disappears up the gangway,\nleaving a trail of dripping slime.\" CR>)>\n\t\t<DISABLE <INT I-AMBASSADOR>>)\n\t       (<IN? ,AMBASSADOR ,DECK-NINE>\n\t\t<SETG AMBASSADOR-LEAVE <+ ,AMBASSADOR-LEAVE 1>>\n\t\t<COND (<EQUAL? ,HERE ,DECK-NINE>\n\t\t       <TELL CR \"The ambassador \">\n\t\t       <TELL <PICK-ONE ,AMBASSADOR-QUOTES> CR>)\n\t\t      (T\n\t\t\t<RFALSE>)>)\n\t       (<EQUAL? ,HERE ,DECK-NINE>\n\t\t<COND (<AND <NOT <IN? ,AMBASSADOR ,HERE>>\n\t\t\t    <NOT <IN? ,BLATHER ,HERE>>\n\t\t\t    <EQUAL? ,BLOWUP-COUNTER 0>\n\t\t\t    <PROB 15>>\n\t\t       <MOVE ,AMBASSADOR ,HERE>\n\t\t       <MOVE ,CELERY ,HERE>\n\t\t       <THIS-IS-IT ,AMBASSADOR>\n\t\t       <MOVE ,BROCHURE ,ADVENTURER>\n\t\t       <TELL CR\n\"The alien ambassador from the planet Blow'k-bibben-Gordo ambles toward you\nfrom down the corridor. He is munching on something resembling an enormous\nstalk of celery, and he leaves a trail of green slime on the deck. He stops\nnearby, and you wince as a pool of slime begins forming beneath him on your\nnewly polished deck. The ambassador wheezes loudly and hands you a brochure\noutlining his planet's major exports.\"CR>)>)>>"
  },
  "AMBASSADOR-F": {
   "name": "AMBASSADOR-F",
   "file": "globals.zil",
   "line": 1165,
   "endLine": 1191,
   "source": "<ROUTINE AMBASSADOR-F ()\n\t <COND (<OR <VERB? TALK HELLO>\n\t\t    <EQUAL? ,AMBASSADOR ,WINNER>>\n\t\t<TELL\n\"The ambassador taps his translator, and then touches his center knee to his\nleft ear (the Blow'k-bibben-Gordoan equivalent of shrugging).\" CR>\n\t\t<SETG P-CONT <>>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<RFATAL>)\n\t       (<AND <VERB? ASK-FOR>\n\t\t     <EQUAL? ,PRSI ,CELERY>>\n\t\t<TELL\n\"The ambassador seems willing to let you eat some of it, but I doubt he wants\nto part with the entire stalk.\" CR>)\n\t       (<VERB? ATTACK KICK>\n\t\t<TELL\n\"The ambassador is startled, and emits an amazing quantity of slime which\nspreads across the section of the deck you just polished.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"The ambassador has around twenty eyes, seven of which are currently\nopen. Half of his six legs are retracted. Green slime oozes from\nmultiple orifices in his scaly skin. He speaks through a mechanical\ntranslator slung around his neck.\" CR>)\n\t       (<VERB? LISTEN>\n\t\t<TELL\n\"The alien makes a wheezing noise as he breathes.\" CR>)>>"
  },
  "GLOBAL-POD-F": {
   "name": "GLOBAL-POD-F",
   "file": "globals.zil",
   "line": 1216,
   "endLine": 1231,
   "source": "<ROUTINE GLOBAL-POD-F ()\n\t <COND (<VERB? THROUGH BOARD WALK-TO>\n\t\t<COND (<EQUAL? ,HERE ,ESCAPE-POD>\n\t\t       <TELL \"You're already in it!\" CR>)\n\t\t      (T\n\t\t       <DO-WALK ,P?WEST>\n\t\t       <RTRUE>)>)\n\t       (<VERB? EXIT DISEMBARK DROP>\n\t\t<COND (<EQUAL? ,HERE ,DECK-NINE>\n\t\t       <TELL \"You're not in it!\" CR>)\n\t\t      (T\n\t\t       <DO-WALK ,P?OUT>\n\t\t       <RTRUE>)>)\n\t       (<VERB? OPEN>\n\t\t<PERFORM ,V?OPEN ,POD-DOOR>\n\t\t<RTRUE>)>>"
  },
  "POD-EXIT-F": {
   "name": "POD-EXIT-F",
   "file": "globals.zil",
   "line": 1233,
   "endLine": 1252,
   "source": "<ROUTINE POD-EXIT-F ()\n\t <COND (<G? ,BLOWUP-COUNTER 4>\n\t\t<COND (<EQUAL? ,PRSO ,P?EAST>\n\t\t       <TELL ,CANT-GO CR>\n\t\t       <RFALSE>)\n\t\t      (<NOT <FSET? ,POD-DOOR ,OPENBIT>>\n\t\t       <TELL \"The pod door is closed.\" CR>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <SETG C-ELAPSED 30>\n\t\t       ,UNDERWATER)>)\n\t       (T\n\t\t<COND (<EQUAL? ,PRSO ,P?UP>\n\t\t       <TELL ,CANT-GO CR>\n\t\t       <RFALSE>)\n\t\t      (<NOT <FSET? ,POD-DOOR ,OPENBIT>>\n\t\t       <TELL \"The pod door is closed.\" CR>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       ,DECK-NINE)>)>>"
  },
  "SAFETY-WEB-F": {
   "name": "SAFETY-WEB-F",
   "file": "globals.zil",
   "line": 1262,
   "endLine": 1303,
   "source": "<ROUTINE SAFETY-WEB-F (\"OPTIONAL\" (RARG ,M-OBJECT))\n\t <COND (<AND <VERB? EXAMINE>\n\t\t     <EQUAL? .RARG ,M-OBJECT>>\n\t\t<TELL\n\"The safety webbing fills most of the pod. It could accomodate\nfrom one to, perhaps, twenty people.\" CR>)\n\t       (<AND <VERB? TAKE>\n\t\t     <EQUAL? .RARG ,M-OBJECT>>\n\t\t<TELL\n\"The safety web seems to be more intended for getting into than\ngrabbing onto.\" CR>)\n\t       (<AND <VERB? BOARD CLIMB-ON>\n\t\t     <EQUAL? .RARG ,M-OBJECT>>\n\t\t<GOTO ,SAFETY-WEB>\n\t\t;<MOVE ,ADVENTURER ,SAFETY-WEB>\n\t\t;<SETG OHERE <>>                   ;\"arb\"\n\t\t<TELL\n\"You are now safely cushioned within the web.\" CR>)\n\t       (<AND <VERB? OPEN TAKE>\n\t\t     <EQUAL? .RARG ,M-BEG>>\n\t\t<COND (<EQUAL? ,PRSO ,SAFETY-WEB>\n\t\t       <TELL \"You're in it!\" CR>)\n\t\t      (T\n\t\t       <TELL \"You can't reach it from here.\" CR>)>)\n\t       (<AND <VERB? WALK>\n\t\t     <EQUAL? .RARG ,M-BEG>>\n\t\t<TELL \"You'll have to stand up, first.\" CR>)\n\t       (<AND <VERB? EXIT DISEMBARK DROP STAND>\n\t\t     <EQUAL? .RARG ,M-OBJECT>\n\t\t     <IN? ,ADVENTURER ,SAFETY-WEB>>\n\t\t<GOTO ,HERE>\n\t\t;<MOVE ,ADVENTURER ,HERE>\n\t\t;<SETG OHERE <>>                 ;\"arb\"\n\t\t<COND (<AND <G? ,TRIP-COUNTER 14>\n\t\t\t    <EQUAL? <GET <INT I-SINK-POD> ,C-ENABLED?> 0>>\n\t\t       <ENABLE <QUEUE I-SINK-POD -1>>\n\t\t       <TELL\n\"As you stand, the pod shifts slightly and you feel it falling.\nA moment later, the fall stops with a shock, and you see water\nrising past the viewport.\" CR>)\n\t\t      (T\n\t\t       <TELL \"You are standing again.\" CR>)>)>> "
  },
  "TOWEL-F": {
   "name": "TOWEL-F",
   "file": "globals.zil",
   "line": 1316,
   "endLine": 1319,
   "source": "<ROUTINE TOWEL-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"A pretty ordinary towel. Something is written in its corner.\" CR>)>>"
  },
  "FOOD-KIT-F": {
   "name": "FOOD-KIT-F",
   "file": "globals.zil",
   "line": 1330,
   "endLine": 1337,
   "source": "<ROUTINE FOOD-KIT-F ()\n\t <COND (<VERB? EMPTY>\n\t\t<COND (<NOT <FSET? ,FOOD-KIT ,OPENBIT>>\n\t\t       <TELL \"The kit is closed!\" CR>)\n\t\t      (<FIRST? ,PRSO>\n\t\t       <TELL\n\"The goo, being gooey, sticks to the inside of the kit. You would probably\nhave to shake the kit to get the goo out.\" CR>)>)>>"
  },
  "GOO-F": {
   "name": "GOO-F",
   "file": "globals.zil",
   "line": 1363,
   "endLine": 1390,
   "source": "<ROUTINE GOO-F ()\n\t<COND (<VERB? EAT>\n\t       <COND (<EQUAL? ,HUNGER-LEVEL 0>\n\t\t      <TELL ,NOT-HUNGRY CR>)\n\t\t     (<NOT <IN? ,FOOD-KIT ,ADVENTURER>>\n\t\t      <SETG PRSO ,FOOD-KIT>\n\t\t      <NOT-HOLDING>\n\t\t      <THIS-IS-IT ,FOOD-KIT>)\n\t\t     (T\n\t\t      <REMOVE ,PRSO>\n\t\t      <SETG C-ELAPSED 15>\n\t\t      <SETG HUNGER-LEVEL 0>\n\t\t      <ENABLE <QUEUE I-HUNGER-WARNINGS 1450>>\n\t\t      <TELL \"Mmmm...that tasted just like \">\n\t\t      <COND (<EQUAL? ,PRSO ,BROWN-GOO>\n\t\t\t     <TELL \"delicious Nebulan fungus pudding\">)\n\t\t\t    (<EQUAL? ,PRSO ,RED-GOO>\n\t\t\t     <TELL \"scrumptious cherry pie\">)\n\t\t\t    (T\n\t\t\t     <TELL \"yummy lima beans\">)>\n\t\t      <TELL \".\" CR>)>)\n\t      (<VERB? TAKE DROP>\n\t       <COND (<VERB? DROP>\t\n\t       \t      <TELL \"The goo, being gooey, sticks where it is\">)\n\t             (<VERB? TAKE>\n\t              <TELL \"It would ooze through your fingers\">)>\n\t       <TELL\n\". You'll have to eat it right from the survival kit.\" CR>)>>"
  },
  "ESCAPE-POD-F": {
   "name": "ESCAPE-POD-F",
   "file": "globals.zil",
   "line": 1392,
   "endLine": 1400,
   "source": "<ROUTINE ESCAPE-POD-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is one of the Feinstein's primary escape pods, for use in extreme\nemergencies. A mass of safety webbing, large enough to hold several dozen\npeople, fills half the pod. The controls are entirely automated. The\nbulkhead leading out is \">\n\t\t<DDESC ,POD-DOOR>\n\t\t<TELL \".\" CR>)>>"
  },
  "POD-DOOR-F": {
   "name": "POD-DOOR-F",
   "file": "globals.zil",
   "line": 1410,
   "endLine": 1437,
   "source": "<ROUTINE POD-DOOR-F ()\n\t <COND (<VERB? OPEN>\n\t\t<COND (<FSET? ,POD-DOOR ,OPENBIT>\n\t\t       <ALREADY-OPEN>)\n\t\t      (<G? ,TRIP-COUNTER 14>\n\t\t       <FSET ,POD-DOOR ,OPENBIT>\n\t\t       <TELL \n\"The bulkhead opens and cold ocean water rushes in!\" CR>)\n\t\t      (<G? ,BLOWUP-COUNTER 0>\n\t\t       <COND (<EQUAL? ,HERE ,DECK-NINE>\n\t\t\t      <TELL\n\"Too late. The pod's launching procedure has already begun.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"Opening the door now would be a phenomenally stupid idea.\" CR>)>)\n\t\t      (T\n\t\t       <TELL\n\"Why open the door to the emergency escape pod if there's no emergency?\" CR>)>)\n\t       (<VERB? CLOSE>\n\t\t<COND (<NOT <FSET? ,POD-DOOR ,OPENBIT>>\n\t\t       <IS-CLOSED>)\n\t\t      (T\n\t\t       <TELL \"You can't close it yourself.\" CR>)>)\n\t       (<VERB? THROUGH>\n\t\t<COND (<EQUAL? ,HERE ,DECK-NINE>\n\t\t       <DO-WALK ,P?WEST>)\n\t\t      (T\n\t\t       <DO-WALK ,P?OUT>)>)>>"
  },
  "GANGWAY-DOOR-F": {
   "name": "GANGWAY-DOOR-F",
   "file": "globals.zil",
   "line": 1455,
   "endLine": 1466,
   "source": "<ROUTINE GANGWAY-DOOR-F ()\n\t <COND (<VERB? OPEN>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <ALREADY-OPEN>)\n\t\t      (T\n\t\t       <TELL\n\"There doesn't seem to be any way to open it.\" CR>)>)\n\t       (<VERB? CLOSE>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"You can't close it yourself.\" CR>)\n\t\t      (T\n\t\t       <IS-CLOSED>)>)>>"
  },
  "I-BLOWUP-FEINSTEIN": {
   "name": "I-BLOWUP-FEINSTEIN",
   "file": "globals.zil",
   "line": 1470,
   "endLine": 1576,
   "source": "<ROUTINE I-BLOWUP-FEINSTEIN ()\n\t <ENABLE <QUEUE I-BLOWUP-FEINSTEIN -1>>\n\t <SETG BLOWUP-COUNTER <+ ,BLOWUP-COUNTER 1>>\n\t <COND (<EQUAL? ,BLOWUP-COUNTER 5>\n\t\t<COND (<EQUAL? ,HERE ,DECK-NINE>\n\t\t       <JIGS-UP\n\"|\nAn enormous explosion tears the walls of the ship apart. If only you\nhad made it to an escape pod...\">)\n\t\t      (T\n\t\t       <TELL CR\n\"Through the viewport of the pod you see the Feinstein dwindle as you head\naway. Bursts of light dot its hull. Suddenly, a huge explosion blows the\nFeinstein into tiny pieces, sending the escape pod tumbling away! \" CR>\n\t\t       <ENABLE <QUEUE I-POD-TRIP -1>>\n\t\t       <DISABLE <INT I-BLOWUP-FEINSTEIN>>\n\t\t       <COND (<AND <NOT <IN? ,ADVENTURER ,SAFETY-WEB>>\n\t\t\t\t   <PROB 20>>\n\t\t\t      <JIGS-UP\n\"|\nYou are thrown against the bulkhead, head first. It seems that getting in\nthe safety webbing would have been a good idea.\">)\n\t\t\t     (<NOT <IN? ,ADVENTURER ,SAFETY-WEB>>\n\t\t\t      <TELL CR\n\"You are thrown against the bulkhead, bruising a few limbs. The safety\nwebbing might have offered a bit more protection.\" CR>)>)>)\n\t       (<EQUAL? ,BLOWUP-COUNTER 4>\n\t\t<DISABLE <INT I-BLATHER>>\n\t\t<DISABLE <INT I-AMBASSADOR>>\n\t\t<COND (<EQUAL? ,HERE ,DECK-NINE>\n\t\t       <TELL CR \"Explosions continue to rock the ship.\" CR>)\n\t\t      (T\n\t\t       <TELL CR\n\"You feel the pod begin to slide down its ejection tube as explosions shake\nthe mother ship.\" CR>)>)\n\t       (<EQUAL? ,BLOWUP-COUNTER 3>\n\t\t<FCLEAR ,POD-DOOR ,OPENBIT>\n\t\t<COND (<EQUAL? ,HERE ,DECK-NINE>\n\t\t       <TELL CR\n\"More powerful explosions buffet the ship. The lights flicker madly,\nand the escape-pod bulkhead clangs shut.\" CR>)\n\t\t      (<EQUAL? ,HERE ,ESCAPE-POD>\n\t\t       <TELL CR\n\"The pod door clangs shut as heavy explosions continue to buffet the\nFeinstein.\" CR>)\n\t\t      (T\n\t\t       <JIGS-UP\n\"|\nThe ship rocks from the force of multiple explosions. The lights go out, and\nyou feel a sudden drop in pressure accompanied by a loud hissing. Too bad you\nweren't in the escape pod...\">)>)\n\t       (<EQUAL? ,BLOWUP-COUNTER 2>\n\t\t<FCLEAR ,CORRIDOR-DOOR ,OPENBIT>\n\t\t<FCLEAR ,CORRIDOR-DOOR ,INVISIBLE>\n\t\t<FCLEAR ,GANGWAY-DOOR ,OPENBIT>\n\t\t<FCLEAR ,GANGWAY-DOOR ,INVISIBLE>\n\t\t<COND (<EQUAL? ,HERE ,DECK-NINE>\n\t\t       <TELL CR\n\"More distant explosions! A narrow emergency bulkhead at the base of the\ngangway and a wider one along the corridor to starboard both crash shut!\" CR>)\n\t\t      (<EQUAL? ,HERE ,ESCAPE-POD ,BRIG>\n\t\t       <TELL CR\n\"The ship shakes again. You hear, from close by, the sounds of emergency\nbulkheads closing.\" CR>)\n\t\t      (<EQUAL? ,HERE ,GANGWAY>\n\t\t       <TELL CR\n\"Another explosion. A narrow bulkhead at the base of the\ngangway slams shut!\" CR>)\n\t\t      (T\n\t\t       <TELL CR\n\"You are deafened by more explosions and by the sound of emergency bulkheads\nslamming closed. \">\n\t\t       <COND (<IN? ,BLATHER ,HERE>\n\t\t\t      <TELL\n\"Blather, foaming slightly at the mouth, screams at you to swab the decks\">)\n\t\t\t     (T\n\t\t\t      <MOVE ,BLATHER ,HERE>\n\t\t\t      <TELL\n\"Blather enters, looking confused, and begins ranting madly at you\">)>\n\t\t       <TELL \".\" CR>)>)\n\t       (<EQUAL? ,BLOWUP-COUNTER 1>\n\t\t<SETG BRIGS-UP 0>\n\t\t<FSET ,POD-DOOR ,OPENBIT>\n\t\t<TELL CR\n\"A massive explosion rocks the ship. Echoes from the explosion resound\ndeafeningly down the halls. \">\n\t\t<COND (<EQUAL? ,HERE ,DECK-NINE>\n\t\t       <TELL \"The door to port slides open. \">\n\t\t       <COND (<IN? ,AMBASSADOR ,HERE>\n\t\t\t      <REMOVE ,AMBASSADOR>\n\t\t\t      <REMOVE ,CELERY>\n\t\t\t      <TELL\n\"The ambassador squawks frantically, evacuates a massive load of gooey\nslime, and rushes away.\" CR>)\n\t\t\t     (<IN? ,BLATHER ,HERE>\n\t\t\t      <REMOVE ,BLATHER>\n\t\t\t      <TELL\n\"Blather, confused by this nonroutine occurrence, orders you to continue\nscrubbing the floor, and then dashes off.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL CR>)>)\n\t\t      (<EQUAL? ,HERE ,ESCAPE-POD ,GANGWAY ,BRIG>\n\t\t       <TELL CR>)\n\t\t      (T\n\t\t       <TELL\n\"Blather, looking slightly disoriented, barks at you to resume your assigned\nduties.\" CR>)>)>>"
  },
  "I-POD-TRIP": {
   "name": "I-POD-TRIP",
   "file": "globals.zil",
   "line": 1580,
   "endLine": 1633,
   "source": "<ROUTINE I-POD-TRIP ()\n\t <SETG TRIP-COUNTER <+ ,TRIP-COUNTER 1>>\n\t <COND (<EQUAL? ,TRIP-COUNTER 1>\n\t\t<TELL CR\n\"As the escape pod tumbles away from the former location of the Feinstein, its\ngyroscopes whine. The pod slowly stops tumbling. Lights on the control panel\nblink furiously as the autopilot searches for a reasonable destination.\" CR>)\n\t       (<EQUAL? ,TRIP-COUNTER 2>\n\t\t<TELL CR\n\"The auxiliary rockets fire briefly, and a nearby planet swings into view\nthrough the port. It appears to be almost entirely ocean, with just a few\nvisible islands and an unusually small polar ice cap. A moment later, the\nsystem's sun swings into view, and the viewport polarizes into a featureless\nblack rectangle.\" CR>)\n\t       (<EQUAL? ,TRIP-COUNTER 3>\n\t\t<TELL CR\n\"The main thrusters fire a long, gentle burst. A monotonic voice issues\nfrom the control panel. \\\"Approaching planet...human-habitable.\\\"\" CR>)\n\t       (<EQUAL? ,TRIP-COUNTER 7>\n\t\t<TELL CR\n\"The pod is buffeted as it enters the planet's atmosphere.\" CR>)\n\t       (<EQUAL? ,TRIP-COUNTER 8>\n\t\t<TELL CR\n\"You feel the temperature begin to rise, and the pod's climate\ncontrol system roars as it labors to compensate.\" CR>)\n\t       (<EQUAL? ,TRIP-COUNTER 9>\n\t\t<TELL CR\n\"The viewport suddenly becomes transparent again, giving you a view of\nendless ocean below. The lights on the control panel flash madly as\nthe pod's computer searches for a suitable landing site. The thrusters fire\nlong and hard, slowing the pod's descent.\" CR>)\n\t       (<EQUAL? ,TRIP-COUNTER 10>\n\t\t<TELL CR\n\"The pod is now approaching the closer of a pair of islands. It appears\nto be surrounded by sheer cliffs rising from the water, and is topped by\na wide plateau. The plateau seems to be covered by a sprawling complex\nof buildings.\" CR>)\n\t       (<EQUAL? ,TRIP-COUNTER 11>\n\t\t<COND (<IN? ,ADVENTURER ,SAFETY-WEB>\n\t\t       <MOVE ,FOOD-KIT ,HERE>\n\t\t       <MOVE ,TOWEL ,HERE>\n\t\t       <TELL CR\n\"The pod lands with a thud. Through the viewport you can see a rocky cleft\nand some water below. The pod rocks gently back and forth as if it was\nprecariously balanced. A previously unseen panel slides open, revealing\nsome emergency provisions, including a survival kit and a towel.\" CR>\n\t\t       <SETG TRIP-COUNTER 15>\n\t\t       <DISABLE <INT I-POD-TRIP>>)\n\t\t      (T\n\t\t       <JIGS-UP\n\"|\nThe pod, whose automated controls were unfortunately designed by computer\nscientists, lands with a good deal of force. Your body sails across the pod\nuntil it is stopped by one of the sharper corners of the control panel.\">)>)>>"
  },
  "I-SINK-POD": {
   "name": "I-SINK-POD",
   "file": "globals.zil",
   "line": 1637,
   "endLine": 1660,
   "source": "<ROUTINE I-SINK-POD ()\n\t <SETG SINK-COUNTER <+ ,SINK-COUNTER 1>>\n\t <COND (<AND <EQUAL? ,SINK-COUNTER 3>\n\t\t     <EQUAL? ,HERE ,ESCAPE-POD>>\n\t\t<TELL CR \n\"The pod is now completely submerged, and you feel it smash against underwater\nrocks. Bubbles streaming upward past the window indicate that the pod is\ncontinuing to sink.\" CR>)\n\t       (<AND <EQUAL? ,SINK-COUNTER 4>\n\t\t     <EQUAL? ,HERE ,ESCAPE-POD>\n\t\t     <NOT <FSET? ,POD-DOOR ,OPENBIT>>>\n\t\t<TELL CR \n\"The pod creaks ominously from the increasing pressure.\" CR>)\n\t       (<AND <EQUAL? ,SINK-COUNTER 5>\n\t\t     <EQUAL? ,HERE ,ESCAPE-POD>>\n\t\t<COND (<FSET? ,POD-DOOR ,OPENBIT>\n\t\t       <JIGS-UP\n\"|\nBetween the swirling waters and the increasing pressure, it's curtains\nfor you. Perhaps you should have left the pod a bit sooner.\">)\n\t\t      (T\n\t\t       <JIGS-UP\n\"|\nThe pod splits open, and water pours in.\">)>)>>"
  },
  "SLOT-F": {
   "name": "SLOT-F",
   "file": "globals.zil",
   "line": 1673,
   "endLine": 1739,
   "source": "<ROUTINE SLOT-F ()\n\t <COND (<AND <VERB? PUT>\n\t\t     <EQUAL? ,SLOT ,PRSI>>\n\t\t<TELL\n\"The slot is shallow, so you can't put anything in it. It may be possible to\nslide something through the slot, though.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"The slot is about ten centimeters wide, but only about two centimeters deep.\nIt is surrounded on its long sides by parallel ridges of metal.\" CR>)\n\t       (<AND <VERB? SLIDE>\n\t\t     <EQUAL? ,SLOT ,PRSI>>\n\t\t<MOVE ,PRSO ,ADVENTURER>\n\t\t<COND (<FSET? ,PRSO ,SCRAMBLEDBIT>\n\t\t       <TELL\n\"A sign flashes \\\"Magnetik striip randumiizd...konsult Prajekt Handbuk abowt\npropur kaar uv awtharazaashun kardz.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSO ,KITCHEN-CARD>\n\t\t       <COND (<EQUAL? ,HERE ,MESS-HALL>\n\t\t\t      <COND (<FSET? ,KITCHEN-DOOR ,OPENBIT>\n\t\t\t\t     <TELL \"Nothing happens.\" CR>)\n\t\t\t\t    (T\n\t\t\t\t     <FSET ,KITCHEN-DOOR ,OPENBIT>\n\t\t\t\t     <ENABLE <QUEUE I-KITCHEN-DOOR-CLOSES 50>>\n\t\t\t\t     <TELL\n\"The kitchen door quietly slides open.\" CR>\n\t\t\t\t     <FLOYD-REVEAL-CARD-F>\n\t\t\t\t     <RTRUE>)>)\n\t\t\t     (T\n\t\t\t      <TELL ,WRONG-CARD CR>)>)\n\t\t      (<EQUAL? ,PRSO ,UPPER-ELEVATOR-CARD>\n\t\t       <COND (<EQUAL? ,HERE ,UPPER-ELEVATOR>\n\t\t\t      <SETG UPPER-ELEVATOR-ON T>\n\t\t\t      <ENABLE <QUEUE I-TURNOFF-UPPER-ELEVATOR 180>>\n\t\t\t      <TELL ,ELEVATOR-ENABLED CR>\n\t\t\t      <FLOYD-REVEAL-CARD-F>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <TELL ,WRONG-CARD CR>)>)\n\t\t      (<EQUAL? ,PRSO ,LOWER-ELEVATOR-CARD>\n\t\t       <COND (<EQUAL? ,HERE ,LOWER-ELEVATOR>\n\t\t\t      <SETG LOWER-ELEVATOR-ON T>Y\n\t\t\t      <ENABLE <QUEUE I-TURNOFF-LOWER-ELEVATOR 200>>\n\t\t\t      <TELL ,ELEVATOR-ENABLED CR>)\n\t\t\t     (T\n\t\t\t      <TELL ,WRONG-CARD CR>)>)\n\t\t      (<EQUAL? ,PRSO ,TELEPORTATION-CARD>\n\t\t       <COND (<EQUAL? ,HERE ,BOOTH-1 ,BOOTH-2 ,BOOTH-3>\n\t\t\t      <SETG TELEPORTATION-ON T>\n\t\t\t      <ENABLE <QUEUE I-TURNOFF-TELEPORTATION 30>>\n\t\t\t      <TELL\n\"Nothing happens for a moment. Then a light flashes \\\"Redee.\\\"\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL ,WRONG-CARD CR>)>)\n\t\t      (<EQUAL? ,PRSO ,SHUTTLE-CARD>\n\t\t       <SHUTTLE-ACTIVATE>)\n\t\t      (<EQUAL? ,PRSO ,MINI-CARD>\n\t\t       <COND (<EQUAL? ,HERE ,MINI-BOOTH>\n\t\t\t      <SETG MINI-ACTIVATED T>\n\t\t\t      <ENABLE <QUEUE I-TURNOFF-MINI 30>>\n\t\t\t      <TELL\n\"A melodic high-pitched voice says \\\"Miniaturization and teleportation booth\nactivated. Please type in damaged sector number.\\\"\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL ,WRONG-CARD CR>)>)\n\t\t      (<EQUAL? ,PRSO ,ID-CARD>\n\t\t       <TELL ,WRONG-CARD CR>)>)>>"
  },
  "FLOYD-REVEAL-CARD-F": {
   "name": "FLOYD-REVEAL-CARD-F",
   "file": "globals.zil",
   "line": 1748,
   "endLine": 1776,
   "source": "<ROUTINE FLOYD-REVEAL-CARD-F ()\n\t <COND (<AND <IN? ,FLOYD ,HERE>\n\t\t     <NOT ,CARD-REVEALED>\n\t\t     <OR <AND <EQUAL? ,DAY 2>\n\t\t\t      <L? ,INTERNAL-MOVES 5000>\n\t\t\t      <PROB 5>>\n\t\t\t <AND <EQUAL? ,DAY 2>\n\t\t\t      <G? ,INTERNAL-MOVES 4999>\n\t\t\t      <PROB 10>>\n\t\t\t <AND <EQUAL? ,DAY 3>\n\t\t\t      <L? ,INTERNAL-MOVES 5000>\n\t\t\t      <PROB 20>>\n\t\t\t <AND <EQUAL? ,DAY 3>\n\t\t\t      <G? ,INTERNAL-MOVES 4999>\n\t\t\t      <PROB 40>>\n\t\t\t <G? ,DAY 3>>>\n\t\t<SETG CARD-REVEALED T>\n\t\t<SETG FLOYD-SPOKE T>\n\t\t<COND (<NOT ,CARD-STOLEN>\n\t\t       <MOVE ,LOWER-ELEVATOR-CARD ,FLOYD>\n\t\t       <TELL\n\"Floyd claps his hands with excitement. \\\"Those cards are really neat, huh?\nFloyd has one for himself--see?\\\" He reaches behind one of his panels and\nretrieves a magnetic-striped card. He waves it exuberantly in the air.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"Floyd bobs up and down with excitement. \\\"Those cards are really neat! Floyd\nhas one, too.\\\" He begins searching through his compartments, but finds\nnothing. He scratches his head and looks confused.\" CR>)>)>>"
  },
  "I-KITCHEN-DOOR-CLOSES": {
   "name": "I-KITCHEN-DOOR-CLOSES",
   "file": "globals.zil",
   "line": 1778,
   "endLine": 1787,
   "source": "<ROUTINE I-KITCHEN-DOOR-CLOSES ()\n\t <COND (<EQUAL? ,HERE ,KITCHEN>\n\t\t<ENABLE <QUEUE I-KITCHEN-DOOR-CLOSES -1>>\n\t\t<RFALSE>)\n\t       (T\n\t\t<FCLEAR ,KITCHEN-DOOR ,OPENBIT>\n\t\t<DISABLE <INT I-KITCHEN-DOOR-CLOSES>>\n\t\t<COND (<EQUAL? ,HERE ,MESS-HALL>\n\t\t       <TELL CR\n\"The kitchen door slides quietly closed.\" CR>)>)>>"
  },
  "TELEPORT": {
   "name": "TELEPORT",
   "file": "globals.zil",
   "line": 1818,
   "endLine": 1835,
   "source": "<ROUTINE TELEPORT (BOOTH)\n\t <COND (<VERB? PUSH>\n\t\t<COND (<EQUAL? ,TELEPORTATION-ON T>\n\t\t       <TELL\n\"You experience a strange feeling in the pit of your stomach.\" CR>\n\t\t       <COND (<IN? ,FLOYD ,HERE>\n\t\t\t      <TELL\n\"Floyd gives a terrified squeal, and clutches at his guidance mechanism.\" CR>\n\t\t\t      <SETG FLOYD-SPOKE T>\n\t\t\t      <ENABLE <QUEUE I-FLOYD 1>>)>\n\t\t       <ROB ,HERE .BOOTH>\n\t\t       <GOTO .BOOTH <>>\n\t\t       <DISABLE <INT I-TURNOFF-TELEPORTATION>>\n\t\t       <SETG TELEPORTATION-ON <>>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL\n\"A sign flashes \\\"Teleportaashun buux not aktivaatid.\\\"\" CR>)>)>>"
  },
  "TELEPORTATION-BUTTON-1-F": {
   "name": "TELEPORTATION-BUTTON-1-F",
   "file": "globals.zil",
   "line": 1837,
   "endLine": 1838,
   "source": "<ROUTINE TELEPORTATION-BUTTON-1-F ()\n\t <TELEPORT ,BOOTH-1>>"
  },
  "TELEPORTATION-BUTTON-2-F": {
   "name": "TELEPORTATION-BUTTON-2-F",
   "file": "globals.zil",
   "line": 1840,
   "endLine": 1841,
   "source": "<ROUTINE TELEPORTATION-BUTTON-2-F ()\n\t <TELEPORT ,BOOTH-2>>"
  },
  "TELEPORTATION-BUTTON-3-F": {
   "name": "TELEPORTATION-BUTTON-3-F",
   "file": "globals.zil",
   "line": 1843,
   "endLine": 1844,
   "source": "<ROUTINE TELEPORTATION-BUTTON-3-F ()\n\t <TELEPORT ,BOOTH-3>>"
  },
  "I-TURNOFF-TELEPORTATION": {
   "name": "I-TURNOFF-TELEPORTATION",
   "file": "globals.zil",
   "line": 1846,
   "endLine": 1849,
   "source": "<ROUTINE I-TURNOFF-TELEPORTATION ()\n\t <SETG TELEPORTATION-ON <>>\n\t <COND (<EQUAL? ,HERE ,BOOTH-1 ,BOOTH-2 ,BOOTH-3>\n\t\t<TELL CR \"The ready light goes dark.\" CR>)>>"
  },
  "GLOBAL-SHUTTLE-F": {
   "name": "GLOBAL-SHUTTLE-F",
   "file": "globals.zil",
   "line": 1863,
   "endLine": 1885,
   "source": "<ROUTINE GLOBAL-SHUTTLE-F ()\n\t <COND (<VERB? ENTER THROUGH WALK-TO BOARD>\n\t\t<COND (<OR <EQUAL? ,HERE ,SHUTTLE-CAR-ALFIE\n\t\t\t\t         ,ALFIE-CONTROL-EAST\n\t\t\t\t\t ,ALFIE-CONTROL-WEST>\n\t\t\t   <EQUAL? ,HERE ,SHUTTLE-CAR-BETTY\n\t\t\t\t         ,BETTY-CONTROL-EAST\n\t\t\t\t\t ,BETTY-CONTROL-WEST>>\n\t\t       <TELL \"You ARE in the shuttle car.\" CR>)\n\t\t      (T\n\t\t       <TELL \"Use 'north' or 'south'.\" CR>)>)\n\t       (<VERB? EXIT DISEMBARK DROP>\n\t\t<COND (<EQUAL? ,HERE ,SHUTTLE-CAR-ALFIE>\n\t\t       <DO-WALK ,P?NORTH>)\n\t\t      (<EQUAL? ,HERE ,SHUTTLE-CAR-BETTY>\n\t\t       <DO-WALK ,P?SOUTH>)\n\t\t      (<OR <EQUAL? ,HERE ,BETTY-CONTROL-EAST\n\t\t\t\t\t ,BETTY-CONTROL-WEST>\n\t\t\t   <EQUAL? ,HERE ,ALFIE-CONTROL-EAST\n\t\t\t\t         ,ALFIE-CONTROL-WEST>>\n\t\t       <TELL \"You can't exit the shuttle car from here.\" CR>)\n\t\t      (T\n\t\t       <TELL \"You're not in the shuttle car!\" CR>)>)>>"
  },
  "SHUTTLE-CAR-F": {
   "name": "SHUTTLE-CAR-F",
   "file": "globals.zil",
   "line": 1939,
   "endLine": 1949,
   "source": "<ROUTINE SHUTTLE-CAR-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is the cabin of a large transport, with seating for around 20 people\nplus space for freight. There are open doors at the eastern and western ends\nof the cabin, and a doorway leads out to a wide platform to the \">\n\t\t<COND (<EQUAL? ,HERE ,SHUTTLE-CAR-ALFIE>\n\t\t       <TELL \"north\">)\n\t\t      (T\n\t\t       <TELL \"south\">)>\n\t\t<TELL \".\" CR>)>>"
  },
  "CONTROL-CABIN-F": {
   "name": "CONTROL-CABIN-F",
   "file": "globals.zil",
   "line": 1989,
   "endLine": 2007,
   "source": "<ROUTINE CONTROL-CABIN-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \n\"This is a small control cabin. A control panel contains a slot, a lever,\nand a display. The lever can be set at a central position, or it could be\npushed up to a position labelled \\\"+\\\", or pulled down to a position\nlabelled \\\"-\\\". It is currently at the \">\n\t\t<COND (<EQUAL? ,LEVER-SETTING 0>\n\t\t       <TELL \"center\">)\n\t\t      (<EQUAL? ,LEVER-SETTING 1>\n\t\t       <TELL \"upper\">)\n\t\t      (T\n\t\t       <TELL \"lower\">)>\n\t\t<TELL\n\" setting. The display, a digital readout, currently reads \">\n\t\t<TELL N ,SHUTTLE-VELOCITY>\n\t\t<TELL \". Through the cabin window you can see \">\n\t\t<DESCRIBE-VIEW>\n\t\t<TELL CR>)>>"
  },
  "DESCRIBE-VIEW": {
   "name": "DESCRIBE-VIEW",
   "file": "globals.zil",
   "line": 2009,
   "endLine": 2025,
   "source": "<ROUTINE DESCRIBE-VIEW ()\n\t <COND (<OR <AND <EQUAL? ,HERE ,ALFIE-CONTROL-WEST>\n\t\t\t  ,ALFIE-AT-KALAMONTEE>\n\t\t     <AND <EQUAL? ,HERE ,BETTY-CONTROL-WEST>\n\t\t\t  ,BETTY-AT-KALAMONTEE>\n\t\t     <AND <EQUAL? ,HERE ,ALFIE-CONTROL-EAST>\n\t\t\t  <NOT ,ALFIE-AT-KALAMONTEE>>\n\t\t     <AND <EQUAL? ,HERE ,BETTY-CONTROL-EAST>\n\t\t\t  <NOT ,BETTY-AT-KALAMONTEE>>>\n\t\t <TELL \"a featureless concrete wall.\">)\n\t\t(<AND ,SHUTTLE-MOVING\n\t\t      <EQUAL? ,SHUTTLE-COUNTER 23>>\n\t\t <TELL\n\"parallel rails ending at a brightly lit station ahead.\">)\n\t\t(T\n\t\t <TELL \"parallel rails running along the floor of a long\ntunnel, vanishing in the distance.\">)>>"
  },
  "SHUTTLE-DOOR-F": {
   "name": "SHUTTLE-DOOR-F",
   "file": "globals.zil",
   "line": 2027,
   "endLine": 2034,
   "source": "<ROUTINE SHUTTLE-DOOR-F ()\n\t <COND (<VERB? OPEN>\n\t\t<COND (,SHUTTLE-MOVING\n\t\t       <TELL\n\"A recorded voice says \\\"Operator should remain in control cabin while shuttle\ncar is between stations.\\\"\" CR>)\n\t\t      (T\n\t\t       <TELL \"Are you sure it isn't?\" CR>)>)>>"
  },
  "SHUTTLE-ENTER-F": {
   "name": "SHUTTLE-ENTER-F",
   "file": "globals.zil",
   "line": 2036,
   "endLine": 2062,
   "source": "<ROUTINE SHUTTLE-ENTER-F ()\n\t <COND (<EQUAL? ,HERE ,KALAMONTEE-PLATFORM>\n\t\t<COND (<EQUAL? ,PRSO ,P?NORTH>\n\t\t       <COND (,BETTY-AT-KALAMONTEE\n\t\t\t      ,SHUTTLE-CAR-BETTY)\n\t\t\t     (T\n\t\t\t      <TELL ,CANT-GO CR>\n\t\t\t      <RFALSE>)>)\n\t\t      (<EQUAL? ,PRSO ,P?SOUTH>\n\t\t       <COND (,ALFIE-AT-KALAMONTEE\n\t\t\t      ,SHUTTLE-CAR-ALFIE)\n\t\t\t     (T\n\t\t\t      <TELL ,CANT-GO CR>\n\t\t\t      <RFALSE>)>)>)\n\t       (<EQUAL? ,HERE ,LAWANDA-PLATFORM>\n\t\t<COND (<EQUAL? ,PRSO, P?NORTH>\n\t\t       <COND (,BETTY-AT-KALAMONTEE\n\t\t\t      <TELL ,CANT-GO CR>\n\t\t\t      <RFALSE>)\n\t\t\t     (T\n\t\t\t      ,SHUTTLE-CAR-BETTY)>)\n\t\t      (<EQUAL? ,PRSO ,P?SOUTH>\n\t\t       <COND (,ALFIE-AT-KALAMONTEE\n\t\t\t      <TELL ,CANT-GO CR>\n\t\t\t      <RFALSE>)\n\t\t\t     (T\n\t\t\t      ,SHUTTLE-CAR-ALFIE)>)>)>>"
  },
  "SHUTTLE-EXIT-F": {
   "name": "SHUTTLE-EXIT-F",
   "file": "globals.zil",
   "line": 2066,
   "endLine": 2076,
   "source": "<ROUTINE SHUTTLE-EXIT-F ()\n\t <COND (<EQUAL? ,HERE ,SHUTTLE-CAR-ALFIE>\n\t\t<COND (,ALFIE-AT-KALAMONTEE\n\t\t       ,KALAMONTEE-PLATFORM)\n\t\t      (T\n\t\t       ,LAWANDA-PLATFORM)>)\n\t       (<EQUAL? ,HERE ,SHUTTLE-CAR-BETTY>\n\t\t<COND (,BETTY-AT-KALAMONTEE\n\t\t       ,KALAMONTEE-PLATFORM)\n\t\t      (T\n\t\t       ,LAWANDA-PLATFORM)>)>>"
  },
  "SHUTTLE-ACTIVATE": {
   "name": "SHUTTLE-ACTIVATE",
   "file": "globals.zil",
   "line": 2090,
   "endLine": 2147,
   "source": "<ROUTINE SHUTTLE-ACTIVATE ()\n\t <COND (<AND <NOT <EQUAL? ,HERE ,ALFIE-CONTROL-EAST\n\t\t\t\t        ,ALFIE-CONTROL-WEST>>\n\t\t     <NOT <EQUAL? ,HERE ,BETTY-CONTROL-EAST\n\t\t\t\t        ,BETTY-CONTROL-WEST>>>\n\t\t<TELL ,WRONG-CARD CR>\n\t\t<RTRUE>)\n\t       (<OR <AND ,ALFIE-BROKEN\n\t\t     <EQUAL? ,HERE ,ALFIE-CONTROL-EAST ,ALFIE-CONTROL-WEST>>\n\t\t    <AND ,BETTY-BROKEN\n\t\t     <EQUAL? ,HERE ,BETTY-CONTROL-EAST ,BETTY-CONTROL-WEST>>>\n\t\t<TELL\n\"A garbled recording mentions that the shuttle car has undergone some\ndamage and that the repair robot has been summoned.\" CR>\n\t\t<RTRUE>)\n\t       (<G? ,INTERNAL-MOVES 6000>\n\t\t<TELL\n\"A recorded voice explains that using the shuttle car during the evening\nhours requires special authorization.\" CR>\n\t\t<RTRUE>)>\n\t <COND (<EQUAL? ,HERE ,ALFIE-CONTROL-EAST>\n\t\t<COND (,SHUTTLE-ON\n\t\t       <TELL ,SHUTTLE-RECORDING-1 CR>)\n\t\t      (<NOT ,ALFIE-AT-KALAMONTEE>\n\t\t       <TELL ,SHUTTLE-RECORDING-2 CR>)\n\t\t      (T\n\t\t       <SETG SHUTTLE-ON T>\n\t\t       <ENABLE <QUEUE I-TURNOFF-SHUTTLE 80>>\n\t\t       <TELL ,SHUTTLE-RECORDING-3 CR>)>)\n\t       (<EQUAL? ,HERE ,ALFIE-CONTROL-WEST>\n\t\t<COND (,SHUTTLE-ON\n\t\t       <TELL ,SHUTTLE-RECORDING-1 CR>)\n\t\t      (,ALFIE-AT-KALAMONTEE\n\t\t       <TELL ,SHUTTLE-RECORDING-2 CR>)\n\t\t      (T\n\t\t       <SETG SHUTTLE-ON T>\n\t\t       <ENABLE <QUEUE I-TURNOFF-SHUTTLE 80>> \n\t\t       <TELL ,SHUTTLE-RECORDING-3 CR>)>)\n\t       (<EQUAL? ,HERE ,BETTY-CONTROL-EAST>\n\t\t<COND (,SHUTTLE-ON\n\t\t       <TELL ,SHUTTLE-RECORDING-1 CR>)\n\t\t      (<NOT ,BETTY-AT-KALAMONTEE>\n\t\t       <TELL ,SHUTTLE-RECORDING-2 CR>)\n\t\t      (T\n\t\t       <SETG SHUTTLE-ON T>\n\t\t       <ENABLE <QUEUE I-TURNOFF-SHUTTLE 80>>\n\t\t       <TELL ,SHUTTLE-RECORDING-3 CR>)>)\n\t       (<EQUAL? ,HERE ,BETTY-CONTROL-WEST>\n\t\t<COND (,SHUTTLE-ON\n\t\t       <TELL ,SHUTTLE-RECORDING-1 CR>)\n\t\t      (,BETTY-AT-KALAMONTEE\n\t\t       <TELL ,SHUTTLE-RECORDING-2 CR>)\n\t\t      (T\n\t\t       <SETG SHUTTLE-ON T>\n\t\t       <ENABLE <QUEUE I-TURNOFF-SHUTTLE 80>>\n\t\t       <TELL ,SHUTTLE-RECORDING-3 CR>)>)\n\t       (T\n\t\t<TELL ,WRONG-CARD CR>)>>"
  },
  "I-TURNOFF-SHUTTLE": {
   "name": "I-TURNOFF-SHUTTLE",
   "file": "globals.zil",
   "line": 2162,
   "endLine": 2167,
   "source": "<ROUTINE I-TURNOFF-SHUTTLE ()\n\t <COND (,SHUTTLE-MOVING\n\t\t<ENABLE <QUEUE I-TURNOFF-SHUTTLE 80>>)\n\t       (T\n\t\t<SETG SHUTTLE-ON <>>)>\n\t <RFALSE>>"
  },
  "LEVER-F": {
   "name": "LEVER-F",
   "file": "globals.zil",
   "line": 2171,
   "endLine": 2207,
   "source": "<ROUTINE LEVER-F ()\n\t <COND (<VERB? PUSH PUSH-UP>\n\t\t<COND (,SHUTTLE-ON\n\t\t       <COND (<EQUAL? ,LEVER-SETTING 1>\n\t\t\t      <TELL\n\"The lever is already in the upper position.\" CR>)\n\t\t\t     (<EQUAL? ,LEVER-SETTING 0>\n\t\t\t      <SETG LEVER-SETTING 1>\n\t\t\t      <ENABLE <QUEUE I-SHUTTLE 1>>\n\t\t\t      <TELL\n\"The lever is now in the upper position.\" CR>)\n\t\t\t     (T\n\t\t\t      <SETG LEVER-SETTING 0>\n\t\t\t      <TELL\n\"The lever is now in the central position.\" CR>)>)\n\t\t      (T\n\t\t       <TELL ,SHUTTLE-RECORDING-4 CR>)>)\n\t       (<VERB? PULL PUSH-DOWN>\n\t\t<COND (,SHUTTLE-ON\n\t\t       <COND (<EQUAL? ,LEVER-SETTING 1>\n\t\t\t      <SETG LEVER-SETTING 0>\n\t\t\t      <TELL\n\"The lever is now in the central position.\" CR>)\n\t\t\t     (<EQUAL? ,LEVER-SETTING 0>\n\t\t\t      <COND (<EQUAL? ,SHUTTLE-VELOCITY 0>\n\t\t\t\t     <TELL\n\"The lever immediately pops back to the central position.\" CR>)\n\t\t\t\t    (T\n\t\t\t\t     <SETG LEVER-SETTING -1>\n\t\t\t\t     <ENABLE <QUEUE I-SHUTTLE 1>>\n\t\t\t\t     <TELL\n\"The lever is now in the lower position.\" CR>)>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"The lever is already in the lower position.\" CR>)>)\n\t\t      (T\n\t\t       <TELL ,SHUTTLE-RECORDING-4 CR>)>)>>"
  },
  "I-SHUTTLE": {
   "name": "I-SHUTTLE",
   "file": "globals.zil",
   "line": 2209,
   "endLine": 2248,
   "source": "<ROUTINE I-SHUTTLE ()\n\t <ENABLE <QUEUE I-SHUTTLE -1>>\n\t <COND (<NOT ,SHUTTLE-MOVING>\n\t\t<SETG SHUTTLE-MOVING T>\n\t\t<FCLEAR ,SHUTTLE-DOOR ,OPENBIT>\n\t\t<FCLEAR ,SHUTTLE-DOOR ,INVISIBLE>\n\t\t<TELL\n\"The control cabin door slides shut and the shuttle car begins to move \">\n\t\t<COND (<EQUAL? ,LEVER-SETTING 1>\n\t\t       <SETG SHUTTLE-VELOCITY <+ ,SHUTTLE-VELOCITY 5>>\n\t\t       <TELL\n\"forward! The display changes to 5.\" CR>)\n\t\t      ;(<EQUAL? ,LEVER-SETTING -1>\n\t\t       <TELL \"backward. You hear a loud crunch as the\nshuttle car runs into the rear wall of the station.\">\n\t\t       <SETG SHUTTLE-ON <>>\n\t\t       <SETG SHUTTLE-MOVING <>>\n\t\t       <SETG LEVER-SETTING 0>\n\t\t       <SETG SHUTTLE-ON <>>\n\t\t       <FSET ,SHUTTLE-DOOR ,INVISIBLE>\n\t\t       <FSET ,SHUTTLE-DOOR ,OPENBIT>\n\t\t       <DISABLE <INT I-SHUTTLE>>)>)\n\t       (T\n\t\t<COND (<G? ,SHUTTLE-VELOCITY 0>\n\t\t       <SETG SHUTTLE-COUNTER <+ ,SHUTTLE-COUNTER 1>>)>\n\t\t<COND (<EQUAL? ,LEVER-SETTING 1>\n\t\t       <SETG SHUTTLE-VELOCITY <+ ,SHUTTLE-VELOCITY 5>>)\n\t\t      (<EQUAL? ,LEVER-SETTING -1>\n\t\t       <COND (<G? ,SHUTTLE-VELOCITY 0>\n\t\t\t      <SETG SHUTTLE-VELOCITY <- ,SHUTTLE-VELOCITY 5>>)\n\t\t\t     (T\n\t\t\t      <SETG LEVER-SETTING 0>\n\t\t\t      <TELL\n\"The shuttle car comes to a stop and the lever pops back to the central\nposition.\" CR>)>)>\n\t\t<COND (<EQUAL? ,SHUTTLE-COUNTER 24>\n\t\t       <DESCRIBE-SHUTTLE-ARRIVE>)\n\t\t      (<G? ,SHUTTLE-VELOCITY 0>\n\t\t       <DESCRIBE-SHUTTLE-TRIP>\n\t\t       <RTRUE>)>)>>"
  },
  "DESCRIBE-SHUTTLE-TRIP": {
   "name": "DESCRIBE-SHUTTLE-TRIP",
   "file": "globals.zil",
   "line": 2250,
   "endLine": 2278,
   "source": "<ROUTINE DESCRIBE-SHUTTLE-TRIP ()\n\t <TELL\n\"The shuttle car continues to move. The display \">\n\t <COND (<EQUAL? ,LEVER-SETTING 0>\n\t\t<TELL \"still reads \">)\n\t       (T\n\t\t<TELL \"blinks, and now reads \">)>\n\t <TELL N ,SHUTTLE-VELOCITY>\n\t <TELL \".\" CR>\n\t <COND (<EQUAL? ,SHUTTLE-COUNTER 2>\n\t\t<TELL\n\"You pass a sign which says \\\"Limit 45.\\\"\" CR>)>\n\t <COND (<EQUAL? ,SHUTTLE-COUNTER 12>\n\t\t<TELL\n\"The tunnel levels out and begins to slope upward. A sign flashes by which\nreads \\\"Hafwaa Mark -- Beegin Deeseluraashun.\\\"\" CR>)>\n\t <COND (<EQUAL? ,SHUTTLE-COUNTER 20>\n\t\t<TELL ,SIGN-PASS>\n\t\t<TELL \"\\\"15.\\\"\" CR>)>\n\t <COND (<EQUAL? ,SHUTTLE-COUNTER 21>\n\t\t<TELL ,SIGN-PASS>\n\t\t<TELL \"\\\"10.\\\"\" CR>)>\n\t <COND (<EQUAL? ,SHUTTLE-COUNTER 22>\n\t\t<TELL ,SIGN-PASS>\n\t\t<TELL \"\\\"5.\\\"\" CR>)>\n\t <COND (<EQUAL? ,SHUTTLE-COUNTER 23>\n\t\t<TELL\n\"The shuttle car is approaching a brightly lit area. As you near it, you\nmake out the concrete platforms of a shuttle station.\" CR>)>>"
  },
  "DESCRIBE-SHUTTLE-ARRIVE": {
   "name": "DESCRIBE-SHUTTLE-ARRIVE",
   "file": "globals.zil",
   "line": 2284,
   "endLine": 2323,
   "source": "<ROUTINE DESCRIBE-SHUTTLE-ARRIVE ()\n\t <COND (<EQUAL? ,SHUTTLE-COUNTER 24>\n\t\t<COND (<EQUAL? ,SHUTTLE-VELOCITY 0>\n\t\t       <TELL\n\"The shuttle car glides into the station and comes to rest at the concrete\nplatform. You hear the cabin doors slide open.\" CR>)\n\t\t      (<L? ,SHUTTLE-VELOCITY 20>\n\t\t       <COND (<EQUAL? ,HERE ,ALFIE-CONTROL-EAST\n\t\t\t\t            ,ALFIE-CONTROL-WEST>\n\t\t\t      <SETG ALFIE-BROKEN T>)\n\t\t\t     (T\n\t\t\t      <SETG BETTY-BROKEN T>)>\n\t\t       <TELL\n\"The shuttle car rumbles through the station and smashes into the wall at\nthe far end. You are thrown forward into the control panel. Both you\nand the shuttle car produce unhealthy crunching sounds as the cabin\ndoors creak slowly open.\" CR>)\n\t\t      (T\n\t\t       <JIGS-UP\n\"The shuttle car hurtles past the platforms and rams into the wall at the\nfar end of the station. The shuttle car is destroyed, but you're in no\ncondition to care.\">)>\n\t\t<SETG SHUTTLE-VELOCITY 0>\n\t\t<SETG SHUTTLE-MOVING <>>\n\t\t<SETG SHUTTLE-COUNTER 0>\n\t\t<SETG LEVER-SETTING 0>\n\t\t<SETG SHUTTLE-ON <>>\n\t\t<FSET ,SHUTTLE-DOOR ,INVISIBLE>\n\t\t<FSET ,SHUTTLE-DOOR ,OPENBIT>\n\t\t<DISABLE <INT I-SHUTTLE>>\n\t\t<COND (<EQUAL? ,HERE ,ALFIE-CONTROL-EAST ,ALFIE-CONTROL-WEST>\n\t\t       <COND (,ALFIE-AT-KALAMONTEE\n\t\t\t      <SETG ALFIE-AT-KALAMONTEE <>>)\n\t\t\t     (T\n\t\t\t      <SETG ALFIE-AT-KALAMONTEE T>)>)\n\t\t      (T\n\t\t       <COND (,BETTY-AT-KALAMONTEE\n\t\t\t      <SETG BETTY-AT-KALAMONTEE <>>)\n\t\t\t     (T\n\t\t\t      <SETG BETTY-AT-KALAMONTEE T>)>)>)>>"
  },
  "I-SLEEP-WARNINGS": {
   "name": "I-SLEEP-WARNINGS",
   "file": "globals.zil",
   "line": 2334,
   "endLine": 2397,
   "source": "<ROUTINE I-SLEEP-WARNINGS ()\n\t <SETG SLEEPY-LEVEL <+ ,SLEEPY-LEVEL 1>>\n\t <COND (<IN? ,ADVENTURER ,BED>\n\t\t<TELL CR\n\"You suddenly realize how tired you were and how comfortable the bed is.\nYou should be asleep in no time.\" CR>\n\t\t<DISABLE <INT I-SLEEP-WARNINGS>>\n\t\t<ENABLE <QUEUE I-FALL-ASLEEP 16>>\n\t\t<RTRUE>)>\n\t <COND (<EQUAL? ,SLEEPY-LEVEL 1>\n\t\t<TELL CR\n\"You begin to feel weary. It might be time to think about finding\na nice safe place to sleep.\" CR>\n\t\t<ENABLE <QUEUE I-SLEEP-WARNINGS 400>>)\n\t       (<EQUAL? ,SLEEPY-LEVEL 2>\n\t\t<TELL CR\n\"You're really tired now. You'd better find a place to sleep real soon.\" CR>\n\t\t<ENABLE <QUEUE I-SLEEP-WARNINGS 135>>)\n\t       (<EQUAL? ,SLEEPY-LEVEL 3>\n\t\t<TELL CR\n\"If you don't get some sleep soon you'll probably drop.\" CR>\n\t\t<ENABLE <QUEUE I-SLEEP-WARNINGS 60>>)\n\t       (<EQUAL? ,SLEEPY-LEVEL 4>\n\t\t<TELL CR \"You can barely keep your eyes open.\" CR>\n\t\t<ENABLE <QUEUE I-SLEEP-WARNINGS 50>>)\n\t       (<EQUAL? ,SLEEPY-LEVEL 5>\n\t\t<COND (<EQUAL? ,HERE ,BED>\n\t\t       <TELL CR\n\"You slowly sink into a deep and blissful sleep.\" CR>\n\t\t       <DREAMING>)\n\t\t      (<OR <EQUAL? ,HERE ,DORM-A ,DORM-B>\n\t\t\t   <EQUAL? ,HERE ,DORM-C ,DORM-D>>\n\t\t       <TELL CR\n\"You climb into one of the bunk beds and immediately fall asleep.\" CR>\n\t\t       <GOTO ,BED>           ;\"arb\"\n\t\t       ;<MOVE ,ADVENTURER ,BED>\n\t\t       ;<SETG OHERE <>>\n\t\t       <DREAMING>)\n\t\t      (T\n\t\t       <TELL CR\n\"You can't stay awake a moment longer. You drop to the ground and fall\ninto a deep but fitful sleep.\" CR>\n\t\t       <COND (<OR <AND <EQUAL? ,DAY 1>\n\t\t\t\t       <EQUAL? ,HERE ,CRAG>>\n\t\t\t\t  <AND <EQUAL? ,DAY 3>\n\t\t\t\t       <EQUAL? ,HERE ,BALCONY>>\n\t\t\t\t  <AND <EQUAL? ,DAY 5>\n\t\t\t\t       <EQUAL? ,HERE ,WINDING-STAIR>>>\n\t\t\t      <JIGS-UP\n\"|\n|\n|\nSuddenly, in the middle of the night, a wave of water washes over you. Before\nyou can quite get your bearings, you drown.\">)\n\t\t\t     (<PROB 30>\n\t\t\t      <JIGS-UP\n\"|\n|\n|\nSuddenly, in the middle of the night, you awake as several ferocious beasts\n(could they be grues?) surround and attack you. Perhaps you should have found\na slightly safer place to sleep.\">)\n\t\t\t     (T\n\t\t\t      <DREAMING>)>)>)>>"
  },
  "BED-F": {
   "name": "BED-F",
   "file": "globals.zil",
   "line": 2407,
   "endLine": 2452,
   "source": "<ROUTINE BED-F (\"OPTIONAL\" (RARG ,M-OBJECT))\n\t <COND (<AND <VERB? WALK>\n\t\t     <EQUAL? .RARG ,M-BEG>>\n\t\t<TELL \"You'll have to stand up, first.\" CR>)\n\t       (<AND <VERB? TAKE OPEN CLOSE RUB>\n\t\t     <EQUAL? .RARG ,M-BEG>\n\t\t     <NOT <EQUAL? ,PRSO ,BED>>>\n\t\t<TELL \"You can't reach it from here.\" CR>)\n\t       (.RARG\n\t\t<RFALSE>)\n\t       (<VERB? THROUGH BOARD WALK-TO>\n\t\t<COND (<EQUAL? ,HERE ,INFIRMARY>\n\t\t       <JIGS-UP\n\"You climb into the bed. It is soft and comfortable. After a few moments, a\npreviously unseen panel opens, and a diagnostic robot comes wheeling out. It\nis very rusty and sways unsteadily, bumping into several pieces of infirmary\nequipment as it crosses the room. As the robot straps you to the bed, you\nnotice some smoke curling from its cracks. Beeping happily, the robot injects\nyou with all 347 serums and medicines it carries. The last thing you notice\nbefore you pass out is the robot preparing to saw your legs off.\">)\n\t\t      (<G? ,SLEEPY-LEVEL 0>\n\t\t       <GOTO ,BED>          ;\"arb\"\n\t\t       ;<MOVE ,ADVENTURER ,BED>\n\t\t       ;<SETG OHERE <>>\n\t\t       <ENABLE <QUEUE I-FALL-ASLEEP 16>>\n\t\t       <DISABLE <INT I-SLEEP-WARNINGS>>\n\t\t       <TELL \n\"Ahhh...the bed is soft and comfortable. You should be asleep in short\norder.\" CR>)\n\t\t      (T\n\t\t       <GOTO ,BED>            ;\"arb\"\n\t\t       ;<MOVE ,ADVENTURER ,BED>\n\t\t       ;<SETG OHERE <>>\n\t\t       <TELL \"You are now in bed.\" CR>)>)\n\t       (<AND <VERB? DISEMBARK STAND EXIT DROP>\n\t\t     <GET <INT I-FALL-ASLEEP> ,C-TICK>>\n\t\t<TELL\n\"How could you suggest such a thing when you're so tired and this\nbed is so comfy?\" CR>)\n\t       (<VERB? LEAVE EXIT DROP>\n\t\t<PERFORM ,V?DISEMBARK ,BED>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUT> <EQUAL? ,BED ,PRSI>>\n\t\t<MOVE ,PRSO ,HERE>\n\t\t<TELL\n\"The \" D ,PRSO \" bounces off the bed and lands on the floor.\" CR>)>>"
  },
  "I-FALL-ASLEEP": {
   "name": "I-FALL-ASLEEP",
   "file": "globals.zil",
   "line": 2454,
   "endLine": 2457,
   "source": "<ROUTINE I-FALL-ASLEEP ()\n\t <TELL CR \"You slowly sink into a deep and restful sleep.\" CR>\n\t <DISABLE <INT I-FALL-ASLEEP>>\n\t <DREAMING>>"
  },
  "DREAMING": {
   "name": "DREAMING",
   "file": "globals.zil",
   "line": 2459,
   "endLine": 2471,
   "source": "<ROUTINE DREAMING ()\n\t <COND (<AND <FSET? ,FORK ,TOUCHBIT>\n\t\t     <PROB 13>>\n\t\t<TELL\n\"You are in a busy office crowded with people. The only one you\nrecognize is Floyd. He rushes back and forth between the desks, carrying\npapers and delivering coffee. He notices you, and asks how your project\nis coming, and whether you have time to tell him a story. You look into\nhis deep, trusting eyes...\" CR>)\n\t       (<PROB 60>\n\t\t<CRLF>\n\t\t<TELL <PICK-ONE ,DREAMS> CR>)>\n\t <WAKING-UP>>"
  },
  "WAKING-UP": {
   "name": "WAKING-UP",
   "file": "globals.zil",
   "line": 2511,
   "endLine": 2569,
   "source": "<ROUTINE WAKING-UP (\"AUX\" X N)\n\t <SETG DAY <+ ,DAY 1>>\n\t <SETG SICKNESS-WARNING-FLAG T>\n\t <SETG SLEEPY-LEVEL 0>\n\t <RESET-TIME>\n\t <SET X <FIRST? ,ADVENTURER>>\n\t <REPEAT ()\n\t\t <COND (.X\n\t\t\t<SET N <NEXT? .X>>\n\t\t\t<COND (<NOT <FSET? .X ,WORNBIT>>\n\t\t\t       <MOVE .X ,HERE>)>\n\t\t\t<COND (<AND <EQUAL? .X ,CANTEEN>\n\t\t\t\t    <IN? ,HIGH-PROTEIN ,CANTEEN>\n\t\t\t\t    <FSET? ,CANTEEN ,OPENBIT>>\n\t\t\t       <REMOVE ,HIGH-PROTEIN>)>\n\t\t\t<COND (<AND <EQUAL? .X ,FLASK>\n\t\t\t\t    <IN? ,CHEMICAL-FLUID ,FLASK>>\n\t\t\t       <REMOVE ,CHEMICAL-FLUID>)>\n\t\t\t<SET X .N>)\n\t\t       (T\n\t\t\t<RETURN>)>>\n\t <TELL\n\"|\n***** SEPTEM \" N <+ ,DAY 5> \", 11344 *****|\n|\">\n\t <COND (<NOT <IN? ,ADVENTURER ,BED>>\n\t\t<TELL\n\"You wake and slowly stand up, feeling stiff from your\nnight on the floor.\">)\n\t       (<L? ,SICKNESS-LEVEL 3>\n\t\t<TELL\n\"You wake up feeling refreshed and ready to face the challenges of this\nmysterious world.\">)\n\t       (<L? ,SICKNESS-LEVEL 6>\n\t\t<TELL\n\"You wake after sleeping restlessly. You feel weak and listless.\">)\n\t       (T\n\t\t<TELL\n\"You wake feeling weak and worn-out. It will be an effort just to stand up.\">)>\n\t <COND (<G? ,HUNGER-LEVEL 0>\n\t\t<SETG HUNGER-LEVEL 4>\n\t\t<ENABLE <QUEUE I-HUNGER-WARNINGS 100>>\n\t\t<TELL\n\" You are also incredibly famished. Better get some breakfast!\">)\n\t       (T\n\t\t<ENABLE <QUEUE I-HUNGER-WARNINGS 400>>)>\n\t <CRLF>\n\t <COND (<AND <FSET? ,FLOYD ,RLANDBIT>\n\t\t     ,FLOYD-INTRODUCED>\n\t\t<MOVE ,FLOYD ,HERE>\n\t\t<SETG FLOYD-SPOKE T>\n\t\t<COND (<IN? ,ADVENTURER ,BED>\n\t\t       <TELL\n\"Floyd bounces impatiently at the foot of the bed. \\\"About time you woke\nup, you lazy bones! Let's explore around some more!\\\"\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"Floyd gives you a nudge with his foot and giggles. \\\"You sure look silly\nsleeping on the floor,\\\" he says.\" CR>)>)>>"
  },
  "RESET-TIME": {
   "name": "RESET-TIME",
   "file": "globals.zil",
   "line": 2571,
   "endLine": 2601,
   "source": "<ROUTINE RESET-TIME ()\n\t <COND (<EQUAL? ,DAY 2>\n\t\t<FCLEAR ,BALCONY ,TOUCHBIT>\n\t\t<SETG INTERNAL-MOVES <+ 1600 <RANDOM 80>>>\n\t\t<ENABLE <QUEUE I-SLEEP-WARNINGS 5800>>)\n\t       (<EQUAL? ,DAY 3>\n\t\t<FCLEAR ,BALCONY ,TOUCHBIT>\n\t\t<SETG INTERNAL-MOVES <+ 1750 <RANDOM 80>>>\n\t\t<ENABLE <QUEUE I-SLEEP-WARNINGS 5550>>)\n\t       (<EQUAL? ,DAY 4>\n\t\t<FCLEAR ,WINDING-STAIR ,TOUCHBIT>\n\t\t<SETG INTERNAL-MOVES <+ 1950 <RANDOM 80>>>\n\t\t<ENABLE <QUEUE I-SLEEP-WARNINGS 5200>>)\n\t       (<EQUAL? ,DAY 5>\n\t\t<FCLEAR ,WINDING-STAIR ,TOUCHBIT>\n\t\t<SETG INTERNAL-MOVES <+ 2150 <RANDOM 80>>>\n\t\t<ENABLE <QUEUE I-SLEEP-WARNINGS 4800>>)\n\t       (<EQUAL? ,DAY 6>\n\t\t<FCLEAR ,COURTYARD ,TOUCHBIT>\n\t\t<SETG INTERNAL-MOVES <+ 2450 <RANDOM 80>>>\n\t\t<ENABLE <QUEUE I-SLEEP-WARNINGS 4300>>)\n\t       (<EQUAL? ,DAY 7>\n\t\t<FCLEAR ,COURTYARD ,TOUCHBIT>\n\t\t<SETG INTERNAL-MOVES <+ 2800 <RANDOM 80>>>\n\t\t<ENABLE <QUEUE I-SLEEP-WARNINGS 3700>>)\n\t       (<EQUAL? ,DAY 8>\n\t\t<SETG INTERNAL-MOVES <+ 3200 <RANDOM 80>>>\n\t\t<ENABLE <QUEUE I-SLEEP-WARNINGS 3000>>)\n\t       (<EQUAL? ,DAY 9>\n\t\t<JIGS-UP\n\"Unfortunately, you don't seem to have survived the night.\">)>>"
  },
  "I-HUNGER-WARNINGS": {
   "name": "I-HUNGER-WARNINGS",
   "file": "globals.zil",
   "line": 2609,
   "endLine": 2632,
   "source": "<ROUTINE I-HUNGER-WARNINGS ()\n\t <SETG HUNGER-LEVEL <+ ,HUNGER-LEVEL 1>>\n\t <COND (<EQUAL? ,HUNGER-LEVEL 1>\n\t\t<ENABLE <QUEUE I-HUNGER-WARNINGS 450>>\n\t\t<TELL CR\n\"A growl from your stomach warns that you're getting pretty hungry and\nthirsty.\" CR>)\n\t       (<EQUAL? ,HUNGER-LEVEL 2>\n\t\t<ENABLE <QUEUE I-HUNGER-WARNINGS 150>>\n\t\t<TELL CR\n\"You're now really ravenous and your lips are quite parched.\" CR>)\n\t       (<EQUAL? ,HUNGER-LEVEL 3>\n\t\t<ENABLE <QUEUE I-HUNGER-WARNINGS 100>>\n\t\t<TELL CR\n\"You're starting to feel faint from lack of food and liquid.\" CR>)\n\t       (<EQUAL? ,HUNGER-LEVEL 4>\n\t\t<ENABLE <QUEUE I-HUNGER-WARNINGS 50>>\n\t\t<TELL CR\n\"If you don't eat or drink something in a few millichrons, you'll probably\npass out.\" CR>)\n\t       (<EQUAL? ,HUNGER-LEVEL 5>\n\t\t<JIGS-UP\n\"|\nYou collapse from extreme thirst and hunger.\">)>>"
  },
  "I-SICKNESS-WARNINGS": {
   "name": "I-SICKNESS-WARNINGS",
   "file": "globals.zil",
   "line": 2644,
   "endLine": 2683,
   "source": "<ROUTINE I-SICKNESS-WARNINGS ()\n\t <ENABLE <QUEUE I-SICKNESS-WARNINGS 700>>\n\t <COND (,SICKNESS-WARNING-FLAG\n\t\t<SETG SICKNESS-WARNING-FLAG <>>\n\t\t<SETG LOAD-ALLOWED <- ,LOAD-ALLOWED 10>>\n\t\t<SETG SICKNESS-LEVEL <+ ,SICKNESS-LEVEL 1>>\n\t\t<COND (<EQUAL? ,SICKNESS-LEVEL 1>\n\t\t       <TELL CR\n\"You notice that you feel a bit weak and slightly flushed,\nbut you're not sure why.\" CR>)\n\t\t      (<EQUAL? ,SICKNESS-LEVEL 2>\n\t\t       <TELL CR\n\"You notice that you feel unusually weak, and you suspect\nthat you have a fever.\" CR>)\n\t\t      (<EQUAL? ,SICKNESS-LEVEL 3>\n\t\t       <TELL CR\n\"You are now feeling quite under the weather, not unlike a bad flu.\" CR>)\n\t\t      (<EQUAL? ,SICKNESS-LEVEL 4>\n\t\t       <TELL CR\n\"Your fever seems to have gotten worse, and you're\ndeveloping a bad headache.\" CR>)\n\t\t      (<EQUAL? ,SICKNESS-LEVEL 5>\n\t\t       <TELL CR\n\"Your health has deteriorated further. You feel hot and weak, and your\nhead is throbbing.\" CR>)\n\t\t      (<EQUAL? ,SICKNESS-LEVEL 6>\n\t\t       <TELL CR\n\"You feel very, very sick, and have almost no strength left.\" CR>)\n\t\t      (<EQUAL? ,SICKNESS-LEVEL 7>\n\t\t       <TELL CR\n\"You feel like you're on fire, burning up from the fever. You're almost too\nweak to move, and your brain is reeling from the pounding headache.\" CR>)\n\t\t      (<EQUAL? ,SICKNESS-LEVEL 8>\n\t\t       <TELL CR\n\"You're no longer sure of where you are and what you're doing. You stumble\nabout, your pain subsiding into a dull numbness.\" CR>)\n\t\t      (<EQUAL? ,SICKNESS-LEVEL 9>\n\t\t       <JIGS-UP\n\"|\nYou finally succumb to the ravages of your illness and collapse.\">)>)>>"
  },
  "TRANSLATOR-PSEUDO": {
   "name": "TRANSLATOR-PSEUDO",
   "file": "globals.zil",
   "line": 2688,
   "endLine": 2697,
   "source": "<ROUTINE TRANSLATOR-PSEUDO ()\n\t <COND (<IN? ,AMBASSADOR ,HERE>\n\t\t<COND (<VERB? TAKE>\n\t\t       <TELL\n\"The ambassador whimpers and slaps your wrist.\" CR>)\n\t\t      (<VERB? MUNG>\n\t\t       <TELL\n\"Are you trying to create an interplanetary incident?\" CR>)>)\n\t       (T\n\t\t<TELL \"What translator?\" CR>)>>"
  },
  "SLIME-PSEUDO": {
   "name": "SLIME-PSEUDO",
   "file": "globals.zil",
   "line": 2699,
   "endLine": 2718,
   "source": "<ROUTINE SLIME-PSEUDO ()\n\t <COND (<OR <IN? ,AMBASSADOR ,HERE>\n\t\t     <G? ,AMBASSADOR-LEAVE 0>>\n\t\t<COND (<VERB? EAT TASTE>\n\t\t       <LIKE-SLIME \"tastes\">)\n\t\t      (<VERB? TAKE RUB>\n\t\t       <LIKE-SLIME \"feels\">)\n\t\t      (<VERB? EXAMINE>\n\t\t       <LIKE-SLIME \"looks\">)\n\t\t      (<VERB? SMELL>\n\t\t       <LIKE-SLIME \"smells\">)\n\t\t      (<VERB? SCRUB REMOVE>\n\t\t       <TELL\n\"Whew. You've cleaned up maybe one ten-thousandth of the slime.\">\n\t\t       <COND (<NOT <IN? ,BLATHER ,HERE>>\n\t\t\t      <TELL\n\" If you hurry, it might be all cleaned up before Ensign Blather gets here.\">)>\n\t\t       <CRLF>)>)\n\t       (T\n\t\t<TELL \"What slime?\" CR>)>>"
  },
  "LIKE-SLIME": {
   "name": "LIKE-SLIME",
   "file": "globals.zil",
   "line": 2720,
   "endLine": 2723,
   "source": "<ROUTINE LIKE-SLIME (STRING)\n\t <TELL \"It \">\n\t <TELL .STRING>\n\t <TELL \" like slime. Aren't you glad you didn't step in it?\" CR>>"
  },
  "GRAFFITI-PSEUDO": {
   "name": "GRAFFITI-PSEUDO",
   "file": "globals.zil",
   "line": 2725,
   "endLine": 2737,
   "source": "<ROUTINE GRAFFITI-PSEUDO ()\n\t <COND (<VERB? READ>\n\t\t<SETG C-ELAPSED 28>\n\t\t<TELL \"All the graffiti seem to be about Blather. One of\nthe least obscene items reads:|\n|\nThere once was a krip, name of Blather|\nWho told a young Ensign named Smather|\n\\\"I'll make you inherit|\nA trotting demerit|\nAnd ship you off to those stinking fawg-infested tar pools of Krather.\\\"|\n|\nIt's not a very good limerick, is it?\" CR>)>>"
  },
  "DOOR-PSEUDO": {
   "name": "DOOR-PSEUDO",
   "file": "globals.zil",
   "line": 2739,
   "endLine": 2741,
   "source": "<ROUTINE DOOR-PSEUDO ()\n\t <COND (<VERB? OPEN UNLOCK>\n\t\t<TELL \"No way, Jose.\" CR>)>>"
  },
  "WALKWAY-PSEUDO": {
   "name": "WALKWAY-PSEUDO",
   "file": "globals.zil",
   "line": 2743,
   "endLine": 2746,
   "source": "<ROUTINE WALKWAY-PSEUDO ()\n\t <COND (<VERB? EXAMINE LAMP-ON>\n\t\t<TELL \"The walkway, which hastened the trip down that\nlong corridor, is no longer in service.\" CR>)>>"
  },
  "BENCH-PSEUDO": {
   "name": "BENCH-PSEUDO",
   "file": "globals.zil",
   "line": 2748,
   "endLine": 2750,
   "source": "<ROUTINE BENCH-PSEUDO ()\n\t <COND (<VERB? CLIMB-ON BOARD>\n\t\t<TELL \"The benches look uncomfortable.\" CR>)>>"
  },
  "CATWALK-PSEUDO": {
   "name": "CATWALK-PSEUDO",
   "file": "globals.zil",
   "line": 2752,
   "endLine": 2754,
   "source": "<ROUTINE CATWALK-PSEUDO ()\n\t <COND (<VERB? CLIMB-ON CLIMB-UP CLIMB-FOO>\n\t\t<TELL \"The catwalks are too high for you to access.\" CR>)>>"
  },
  "EQUIPMENT-PSEUDO": {
   "name": "EQUIPMENT-PSEUDO",
   "file": "globals.zil",
   "line": 2756,
   "endLine": 2760,
   "source": "<ROUTINE EQUIPMENT-PSEUDO ()\n\t <COND (<VERB? EXAMINE RUB LAMP-ON LAMP-OFF>\n\t\t<TELL\n\"The equipment here is so complicated that you couldn't even begin to\nfigure out how to operate it.\" CR>)>>"
  },
  "MONITORS-PSEUDO": {
   "name": "MONITORS-PSEUDO",
   "file": "globals.zil",
   "line": 2762,
   "endLine": 2764,
   "source": "<ROUTINE MONITORS-PSEUDO ()\n\t <COND (<VERB? EXAMINE READ>\n\t\t<DESCRIBE-MONITORS>)>>"
  },
  "MURAL-PSEUDO": {
   "name": "MURAL-PSEUDO",
   "file": "globals.zil",
   "line": 2766,
   "endLine": 2779,
   "source": "<ROUTINE MURAL-PSEUDO ()\n\t <COND (,COMPUTER-FIXED\n\t\t<ANYMORE>)\n\t       (T\n\t\t<COND (<VERB? EXAMINE>\n\t\t       <TELL\n\"It's a gaudy work of orange and purple abstract shapes, reminiscent of the\nearly works of Burstini Bonz. It doesn't appear to fit the decor of the room\nat all. The mural seems to ripple now and then, as though a breeze were\nblowing behind it.\" CR>)\n\t\t      (<VERB? MUNG>\n\t\t       <TELL \"My sentiments also, but let's be civil.\" CR>)\n\t\t      (<VERB? MOVE LOOK-BEHIND>\n\t\t       <TELL \"It won't budge.\" CR>)>)>>"
  },
  "LOGO-PSEUDO": {
   "name": "LOGO-PSEUDO",
   "file": "globals.zil",
   "line": 2781,
   "endLine": 2785,
   "source": "<ROUTINE LOGO-PSEUDO ()\n\t <COND (<VERB? READ EXAMINE>\n\t\t<TELL\n\"The logo shows a flame burning over a sleep chamber of some type. Under\nthat is the phrase \\\"Prajekt Kuntrool.\\\"\" CR>)>>"
  },
  "KEYBOARD-PSEUDO": {
   "name": "KEYBOARD-PSEUDO",
   "file": "globals.zil",
   "line": 2787,
   "endLine": 2791,
   "source": "<ROUTINE KEYBOARD-PSEUDO ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"It is a standard numeric keyboard with ten keys labelled from 0\nthrough 9.\" CR>)>>"
  },
  "CRACK-PSEUDO": {
   "name": "CRACK-PSEUDO",
   "file": "globals.zil",
   "line": 2793,
   "endLine": 2803,
   "source": "<ROUTINE CRACK-PSEUDO ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The crack is too small to go through, but large enough to look through.\" CR>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<COND (<EQUAL? ,HERE ,RADIATION-LAB>\n\t\t       <TELL\n\"You see a dimly lit Bio Lab. Sinister shapes lurk about within.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"You see a laboratory suffused with a pale blue glow.\" CR>)>)>>"
  },
  "VOID-PSEUDO": {
   "name": "VOID-PSEUDO",
   "file": "globals.zil",
   "line": 2805,
   "endLine": 2820,
   "source": "<ROUTINE VOID-PSEUDO ()\n\t <COND (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSI ,PSEUDO-OBJECT>>\n\t\t<PERFORM ,V?THROW-OFF ,PRSO ,STRIP>\n\t\t<RTRUE>)\n\t       (<AND <VERB? ZAP>\n\t\t     <EQUAL? ,PRSO ,LASER>\n\t\t     <EQUAL? ,PRSI ,PSEUDO-OBJECT>>\n\t\t<SETG PRSI <>>\n\t\t<PERFORM ,V?ZAP ,LASER>\n\t\t<RTRUE>)\n\t       (<VERB? THROUGH LEAP>\n\t\t<JIGS-UP \"Plummet.\">)\n\t       (<VERB? LOOK-INSIDE EXAMINE>\n\t\t<TELL\n\"The void extends downward into the gloom far below.\" CR>)>>"
  },
  "SPOUT-PSEUDO": {
   "name": "SPOUT-PSEUDO",
   "file": "globals.zil",
   "line": 2822,
   "endLine": 2829,
   "source": "<ROUTINE SPOUT-PSEUDO ()\n\t <COND (<AND <VERB? PUT-UNDER>\n\t\t     <EQUAL? ,PRSO ,CANTEEN>>\n\t\t<PERFORM ,V?PUT ,CANTEEN ,DISPENSER>\n\t\t<RTRUE>)\n\t       (<AND <VERB? LOOK-UNDER>\n\t\t     <IN? ,CANTEEN ,DISPENSER>>\n\t\t<TELL \"The canteen is sitting under the spout.\" CR>)>>"
  },
  "TOILET-PSEUDO": {
   "name": "TOILET-PSEUDO",
   "file": "globals.zil",
   "line": 2831,
   "endLine": 2835,
   "source": "<ROUTINE TOILET-PSEUDO ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"The fixtures are all dry and dusty.\" CR>)\n\t       (<VERB? FLUSH>\n\t\t<TELL \"The water seems to be turned off.\" CR>)>>"
  },
  "GAMES-PSEUDO": {
   "name": "GAMES-PSEUDO",
   "file": "globals.zil",
   "line": 2837,
   "endLine": 2848,
   "source": "<ROUTINE GAMES-PSEUDO ()\n\t <COND (<VERB? PLAY TAKE>        ;\"TAKE added arb\"\n\t\t<PERFORM ,V?PLAY ,GLOBAL-GAMES>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"All the usual games -- Chess, Cribbage, Galactic\nOverlord, Double Fannucci...\" CR>)\n\t      ;(<AND <VERB? SHOW>\n\t\t     <EQUAL? ,PRSI ,FLOYD>>\n\t\t<TELL\n\"\\\"Floyd doesn't like those tough, thinker games. Any paddleball sets\naround?\\\"\" CR>)>>"
  },
  "TAPES-PSEUDO": {
   "name": "TAPES-PSEUDO",
   "file": "globals.zil",
   "line": 2850,
   "endLine": 2857,
   "source": "<ROUTINE TAPES-PSEUDO ()\n\t <COND (<VERB? READ PLAY TAKE>\n\t\t<TELL\n\"Hardly the time or place for reading recreational tapes.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"Let's see...here are some musical selections, here are\nsome bestselling romantic novels, here is a biography of a famous Double\nFannucci champion...\" CR>)>>"
  },
  "PARTITION-PSEUDO": {
   "name": "PARTITION-PSEUDO",
   "file": "globals.zil",
   "line": 2859,
   "endLine": 2862,
   "source": "<ROUTINE PARTITION-PSEUDO ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"The partitions are very plain, and were\nobviously intended to separate this huge room into smaller areas.\" CR>)>>"
  },
  "CUBBYHOLE-PSEUDO": {
   "name": "CUBBYHOLE-PSEUDO",
   "file": "globals.zil",
   "line": 2864,
   "endLine": 2868,
   "source": "<ROUTINE CUBBYHOLE-PSEUDO ()\n\t <COND (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<TELL\n\"The cubbyholes look like the kind that are used to hold maps or\nblueprints. They are all empty now.\" CR>)>>"
  },
  "MAPS-PSEUDO": {
   "name": "MAPS-PSEUDO",
   "file": "globals.zil",
   "line": 2870,
   "endLine": 2872,
   "source": "<ROUTINE MAPS-PSEUDO ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"Examining the maps reveals no new information.\" CR>)>>"
  },
  "DEVICES-PSEUDO": {
   "name": "DEVICES-PSEUDO",
   "file": "globals.zil",
   "line": 2874,
   "endLine": 2877,
   "source": "<ROUTINE DEVICES-PSEUDO ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"They are components of disassembled robots, beyond repair.\" CR>)>>"
  },
  "CABLES-PSEUDO": {
   "name": "CABLES-PSEUDO",
   "file": "globals.zil",
   "line": 2879,
   "endLine": 2886,
   "source": "<ROUTINE CABLES-PSEUDO ()\n\t <COND (<VERB? EXAMINE FOLLOW>\n\t\t<TELL\n\"These heavy cables merely run from the two consoles up into the ceiling.\" CR>)\n\t       (<VERB? MUNG>\n\t\t<JIGS-UP\n\"So, that's what it's like to have twenty million volts run through your\nbody!\">)>>"
  },
  "STRUCTURE-PSEUDO": {
   "name": "STRUCTURE-PSEUDO",
   "file": "globals.zil",
   "line": 2888,
   "endLine": 2893,
   "source": "<ROUTINE STRUCTURE-PSEUDO ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"You'd be able to tell more about it if you climbed up to it.\" CR>)\n\t       (<VERB? CLIMB-UP>\n\t\t<DO-WALK ,P?UP>)>>"
  },
  "BUTTON-PSEUDO": {
   "name": "BUTTON-PSEUDO",
   "file": "globals.zil",
   "line": 2895,
   "endLine": 2918,
   "source": "<ROUTINE BUTTON-PSEUDO ()\n\t <COND (<VERB? PUSH>\n\t\t<COND (<FSET? ,DISPENSER ,MUNGEDBIT>\n\t\t       <TELL\n\"The dispenser sputters a few times.\" CR>)\n\t\t      (<IN? ,CANTEEN ,DISPENSER>\n\t\t       <COND (<NOT <FSET? ,CANTEEN ,OPENBIT>>\n\t\t\t      <TELL\n\"A thick, brown liquid spills over the closed canteen, dribbles down the side\nof the machine, and forms a puddle on the floor which quickly dries up.\" CR>)\n\t\t\t      (<IN? ,HIGH-PROTEIN ,CANTEEN>\n\t\t\t       <TELL\n\"The brown liquid splashes over the mouth of the already-filled canteen,\ncreating a mess\">\n\t\t\t       <COND (<FSET? ,PATROL-UNIFORM ,WORNBIT>\n\t\t\t\t      <TELL \" and staining your uniform\">)>\n\t\t\t       <TELL \".\" CR>)\n\t\t\t      (T\n\t\t\t       <MOVE ,HIGH-PROTEIN ,CANTEEN>\n\t\t\t       <TELL\n\"The canteen fills almost to the brim with a brown liquid.\" CR>)>)\n\t\t      (T\n\t\t       <TELL \"A thick, brownish liquid pours from the spout\nand splashes to the floor, where it quickly evaporates.\" CR>)>)>>"
  },
  "CARPET-PSEUDO": {
   "name": "CARPET-PSEUDO",
   "file": "globals.zil",
   "line": 2920,
   "endLine": 2922,
   "source": "<ROUTINE CARPET-PSEUDO ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"It's pretty dusty.\" CR>)>>"
  },
  "CABINETS-PSEUDO": {
   "name": "CABINETS-PSEUDO",
   "file": "globals.zil",
   "line": 2924,
   "endLine": 2928,
   "source": "<ROUTINE CABINETS-PSEUDO ()\n\t <COND (<VERB? EXAMINE OPEN>\n\t\t<TELL \"The cabinets are locked.\" CR>)\n\t       (<VERB? UNLOCK>\n\t\t<TELL \"You don't have the correct key.\" CR>)>>"
  },
  "PLATE-PSEUDO": {
   "name": "PLATE-PSEUDO",
   "file": "globals.zil",
   "line": 2930,
   "endLine": 2932,
   "source": "<ROUTINE PLATE-PSEUDO ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"The plates seem to be featureless metal squares.\" CR>)>>"
  },
  "ESCALATOR-PSEUDO": {
   "name": "ESCALATOR-PSEUDO",
   "file": "globals.zil",
   "line": 2934,
   "endLine": 2948,
   "source": "<ROUTINE ESCALATOR-PSEUDO ()\n\t <COND (<VERB? CLIMB-UP CLIMB-FOO>\n\t\t<COND (<EQUAL? ,HERE ,FORK>\n\t\t       <TELL\n\"You're already at the top of the escalator.\" CR>)\n\t\t      (T\n\t\t       <DO-WALK ,P?UP>)>)\n\t       (<VERB? CLIMB-DOWN>\n\t\t<COND (<EQUAL? ,HERE ,LAWANDA-PLATFORM>\n\t\t       <TELL\n\"You're already at the bottom of the escalator.\" CR>)\n\t\t      (T\n\t\t       <DO-WALK ,P?DOWN>)>)\n\t       (<VERB? LAMP-ON>\n\t\t<TELL <PICK-ONE ,YUKS> CR>)>>"
  },
  "REACTOR-BUTTON-PSEUDO": {
   "name": "REACTOR-BUTTON-PSEUDO",
   "file": "globals.zil",
   "line": 2950,
   "endLine": 2955,
   "source": "<ROUTINE REACTOR-BUTTON-PSEUDO ()\n\t <COND (<VERB? PUSH>\n\t\t<FSET ,REACTOR-ELEVATOR-DOOR ,OPENBIT>\n\t\t<ENABLE <QUEUE I-REACTOR-DOOR-CLOSE 30>>\n\t\t<TELL\n\"The metal doors slide open, revealing a small room to the east.\" CR>)>>"
  },
  "SUPPLIES-PSEUDO": {
   "name": "SUPPLIES-PSEUDO",
   "file": "globals.zil",
   "line": 2957,
   "endLine": 2959,
   "source": "<ROUTINE SUPPLIES-PSEUDO ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL \"These supplies are of absolutely no use.\" CR>)>>"
  },
  "DESK-PSEUDO": {
   "name": "DESK-PSEUDO",
   "file": "globals.zil",
   "line": 2961,
   "endLine": 2965,
   "source": "<ROUTINE DESK-PSEUDO ()\n\t <COND (<VERB? OPEN>\n\t\t<TELL \"All the drawers are empty.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"It is bare except for the microfilm reader.\" CR>)>>"
  },
  "CRYO-BUTTON-PSEUDO": {
   "name": "CRYO-BUTTON-PSEUDO",
   "file": "globals.zil",
   "line": 2967,
   "endLine": 2989,
   "source": "<ROUTINE CRYO-BUTTON-PSEUDO ()\n\t <COND (<AND <VERB? PUSH>\n\t\t     <NOT ,CRYO-SCORE-FLAG>>\n\t\t<ENABLE <QUEUE I-CRYO-ELEVATOR-ARRIVE 100>>\n\t\t<DISABLE <INT I-CHASE-SCENE>>\n\t\t<FCLEAR ,CRYO-ELEVATOR-DOOR ,OPENBIT>\n\t        <SETG CRYO-SCORE-FLAG T>\n\t\t<SETG SCORE <+ ,SCORE 5>>\n\t\t<TELL\n\"The elevator door closes just as the monsters reach it! You slump\nback against the wall, exhausted from the chase. The elevator begins\nto move downward.\" CR>)\n\t       (<AND <VERB? PUSH>\n\t\t     ,CRYO-SCORE-FLAG\n\t\t     <FSET? ,CRYO-ELEVATOR-DOOR ,OPENBIT>>\n\t\t<JIGS-UP\n\"Stunning. After days of surviving on a hostile, plague-ridden planet, solving\nseveral of Infocom's toughest puzzles, and coming within one move of completing\nPlanetfall, you blow it all in one amazingly dumb input.|\n|\nThe doors close and the elevator rises quickly to the top of the shaft. The\ndoors open, and the mutants, which were waiting impatiently in the ProjCon\nOffice for just such an occurence, happily saunter in and begin munching.\">)>>"
  },
  "CASTLE-PSEUDO": {
   "name": "CASTLE-PSEUDO",
   "file": "globals.zil",
   "line": 2991,
   "endLine": 2993,
   "source": "<ROUTINE CASTLE-PSEUDO ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"The castle is ancient and crumbling.\" CR>)>>"
  },
  "CHEM-SPOUT-PSEUDO": {
   "name": "CHEM-SPOUT-PSEUDO",
   "file": "globals.zil",
   "line": 2995,
   "endLine": 3004,
   "source": "<ROUTINE CHEM-SPOUT-PSEUDO ()\n\t <COND (<AND <VERB? PUT-UNDER>\n\t\t     <EQUAL? ,PRSI ,PSEUDO-OBJECT>>\n\t\t<PERFORM ,V?PUT-UNDER ,PRSO ,CHEMICAL-DISPENSER>\n\t\t<RTRUE>)\n\t       (<AND <VERB? LOOK-UNDER>\n\t\t     ,SPOUT-PLACED>\n\t\t<TELL \"There is \">\n\t\t<A-AN>\n\t\t<TELL D ,SPOUT-PLACED \" under the spout.\" CR>)>>"
  },
  "CLEFT-PSEUDO": {
   "name": "CLEFT-PSEUDO",
   "file": "globals.zil",
   "line": 3006,
   "endLine": 3008,
   "source": "<ROUTINE CLEFT-PSEUDO ()\n\t <COND (<VERB? CLIMB-UP CLIMB-FOO>\n\t\t<DO-WALK ,P?UP>)>>"
  },
  "RUBBLE-PSEUDO": {
   "name": "RUBBLE-PSEUDO",
   "file": "globals.zil",
   "line": 3010,
   "endLine": 3012,
   "source": "<ROUTINE RUBBLE-PSEUDO ()\n\t <COND (<VERB? MOVE>\n\t\t<TELL <PICK-ONE ,YUKS> CR>)>>"
  },
  "PLAQUE-PSEUDO": {
   "name": "PLAQUE-PSEUDO",
   "file": "globals.zil",
   "line": 3014,
   "endLine": 3022,
   "source": "<ROUTINE PLAQUE-PSEUDO ()\n\t <COND (<VERB? READ EXAMINE>\n\t\t<TELL\n\"|\nSEENIK VISTA\n|\nXis stuneeng vuu uf xee Kalamontee Valee kuvurz oovur fortee skwaar miilz\nuf xat faamus tuurist spot. Xee larj bildeeng at xee bend in xee Gulmaan Rivur\niz xee formur pravincul kapitul bildeeng.\" CR>)>>"
  },
  "FENCE-PSEUDO": {
   "name": "FENCE-PSEUDO",
   "file": "globals.zil",
   "line": 3024,
   "endLine": 3026,
   "source": "<ROUTINE FENCE-PSEUDO ()\n\t <COND (<VERB? CLIMB-UP CLIMB-FOO LEAP>\n\t\t<TELL \"You can't.\" CR>)>>"
  },
  "LOCK-PSEUDO": {
   "name": "LOCK-PSEUDO",
   "file": "globals.zil",
   "line": 3028,
   "endLine": 3033,
   "source": "<ROUTINE LOCK-PSEUDO ()\n\t <COND (<VERB? OPEN UNLOCK>\n\t\t<COND (,PRSI\n\t\t       <TELL \"That won't unlock it.\" CR>)\n\t\t      (T\n\t\t       <TELL \"But you don't have the orange key!\" CR>)>)>>"
  },
  "DIAGRAM-PSEUDO": {
   "name": "DIAGRAM-PSEUDO",
   "file": "globals.zil",
   "line": 3035,
   "endLine": 3038,
   "source": "<ROUTINE DIAGRAM-PSEUDO ()\n\t <COND (<VERB? READ>\n\t\t<TELL \"Not unless you've taken a special\ntwelve-year course in ninth-order molecular physics.\" CR>)>>"
  },
  "ENUNCIATOR-PSEUDO": {
   "name": "ENUNCIATOR-PSEUDO",
   "file": "globals.zil",
   "line": 3040,
   "endLine": 3042,
   "source": "<ROUTINE ENUNCIATOR-PSEUDO ()\n\t <COND (<VERB? LOOK-INSIDE PUSH MOVE>\n\t\t<TELL <PICK-ONE ,YUKS>>)>>"
  },
  "NEAR-BOOTH-PSEUDO": {
   "name": "NEAR-BOOTH-PSEUDO",
   "file": "globals.zil",
   "line": 3044,
   "endLine": 3048,
   "source": "<ROUTINE NEAR-BOOTH-PSEUDO ()\n\t <COND (<VERB? DROP EXIT DISEMBARK>\n\t\t<TELL \"You're not in the booth!\" CR>)\n\t       (<VERB? THROUGH BOARD WALK-TO>\n\t\t<DO-WALK ,P?IN>)>>"
  },
  "IN-BOOTH-PSEUDO": {
   "name": "IN-BOOTH-PSEUDO",
   "file": "globals.zil",
   "line": 3050,
   "endLine": 3054,
   "source": "<ROUTINE IN-BOOTH-PSEUDO ()\n\t <COND (<VERB? THROUGH BOARD WALK-TO>\n\t\t<TELL \"You're already in the booth!\" CR>)\n\t       (<VERB? DROP EXIT DISEMBARK>\n\t\t<DO-WALK ,P?OUT>)>>"
  },
  "CANT-USE-THAT-WAY": {
   "name": "CANT-USE-THAT-WAY",
   "file": "globals.zil",
   "line": 3056,
   "endLine": 3057,
   "source": "<ROUTINE CANT-USE-THAT-WAY (STRING)\n\t <TELL \"[You can't use \" .STRING \" that way.]\" CR>>"
  },
  "V-HINTS-NO": {
   "name": "V-HINTS-NO",
   "file": "hints.zil",
   "line": 583,
   "endLine": 589,
   "source": "<ROUTINE V-HINTS-NO ()\n\t<COND (<NOT <PRSO? ,ROOMS>>\n\t       <TELL \"I don't understand what you mean.\" CR>)\n\t      (T\n\t       <SETG HINTS-OFF T>\n\t       <TELL \"[Hints have been disallowed for this session.]\" CR>)>\n\t<RFATAL>>"
  },
  "V-HINT": {
   "name": "V-HINT",
   "file": "hints.zil",
   "line": 591,
   "endLine": 648,
   "source": "<ROUTINE V-HINT (\"AUX\" CHR MAXC (C <>) Q (WHO <>))\n  <COND (<==? ,HINTS-OFF -1>\n\t <SETG HINTS-OFF 0>\n\t <TELL\n\"[Warning: It is recognized that the temptation for help may at times be so\nexceedingly strong that you might fetch hints prematurely. Therefore, you may\nat any time during the story type HINTS OFF, and this will disallow the\nseeking out of help for the present session of the story. If you still want a\nhint now, indicate HINT.]\" CR>\n\t <RFATAL>)\n\t(,HINTS-OFF\n\t <PERFORM ,V?HINTS-NO ,ROOMS>\n\t <RFATAL>)>\n  ;<IFSOUND <SETG SOUND-QUEUED? <>>\n\t   <KILL-SOUNDS>>\n  <SET MAXC <GET ,HINTS 0>>\n  <INIT-HINT-SCREEN>\n  <CURSET 5 1>\n  <PUT-UP-CHAPTERS>\n  <SETG CUR-POS <- ,CHAPT-NUM 1>>\n  <NEW-CURSOR>\n  <REPEAT ()\n\t  <SET CHR <INPUT 1>>\n\t  <COND (<EQUAL? .CHR !\\Q !\\q>\n\t\t <SET Q T>\n\t\t <RETURN>)\n\t\t(<EQUAL? .CHR !\\N !\\n>\n\t\t <ERASE-CURSOR>\n\t\t <COND (<EQUAL? ,CHAPT-NUM .MAXC>\n\t\t\t<SETG CUR-POS 0>\n\t\t\t<SETG CHAPT-NUM 1>\n\t\t\t<SETG QUEST-NUM 1>)\n\t\t       (T\n\t\t\t<SETG CUR-POS <+ ,CUR-POS 1>>\n\t\t\t<SETG CHAPT-NUM <+ ,CHAPT-NUM 1>>\n\t\t\t<SETG QUEST-NUM 1>)>\n\t\t <NEW-CURSOR>)\n\t\t(<EQUAL? .CHR !\\P !\\p>\n\t\t <ERASE-CURSOR>\n\t\t <COND (<EQUAL? ,CHAPT-NUM 1>\n\t\t\t<SETG CHAPT-NUM .MAXC>\n\t\t\t<SETG CUR-POS <- .MAXC 1>>)\n\t\t       (T\n\t\t\t<SETG CUR-POS <- ,CUR-POS 1>>\n\t\t\t<SETG CHAPT-NUM <- ,CHAPT-NUM 1>>)>\n\t\t <SETG QUEST-NUM 1>\n\t\t <NEW-CURSOR>)\n\t\t(<EQUAL? .CHR 13 10>\n\t\t <PICK-QUESTION>\n\t\t <RETURN>)>>\n  <COND (<NOT .Q>\n\t <AGAIN>\t;\"AGAIN does whole routine?\")>\n  <CLEAR -1>\n  <INIT-STATUS-LINE>\n  <TELL \"Back to the story ...\" CR>\n  ;<IFSOUND <COND (,SOUND-ON?\n\t\t  <CHECK-LOOPING>)>>\n  <RFATAL>>"
  },
  "PICK-QUESTION": {
   "name": "PICK-QUESTION",
   "file": "hints.zil",
   "line": 650,
   "endLine": 686,
   "source": "<ROUTINE PICK-QUESTION (\"AUX\" CHR MAXQ (Q <>))\n  <INIT-HINT-SCREEN <>>\n  <LEFT-LINE 3 ,RETURN-SEE-HINT ,RETURN-SEE-HINT-LEN>\n  <RIGHT-LINE 3 ,Q-MAIN-MENU ,Q-MAIN-MENU-LEN>\n  <SET MAXQ <- <GET <GET ,HINTS ,CHAPT-NUM> 0> 1>>\n  <CURSET 5 1>\n  <PUT-UP-QUESTIONS>\n  <SETG CUR-POS <- ,QUEST-NUM 1>>\n  <NEW-CURSOR>\n  <REPEAT ()\n    <SET CHR <INPUT 1>>\n    <COND (<EQUAL? .CHR !\\Q !\\q>\n\t   <SET Q T>\n\t   <RETURN>)\n\t  (<EQUAL? .CHR !\\N !\\n>\n\t   <ERASE-CURSOR>\n\t   <COND (<EQUAL? ,QUEST-NUM .MAXQ> ; \"Wrap around on N\"\n\t\t  <SETG CUR-POS 0>\n\t\t  <SETG QUEST-NUM 1>)\n\t\t (T\n\t\t  <SETG CUR-POS <+ ,CUR-POS 1>>\n\t\t  <SETG QUEST-NUM <+ ,QUEST-NUM 1>>)>\n\t   <NEW-CURSOR>)\n\t  (<EQUAL? .CHR !\\P !\\p>\n\t   <ERASE-CURSOR>\n\t   <COND (<EQUAL? ,QUEST-NUM 1>\n\t\t  <SETG QUEST-NUM .MAXQ>\n\t\t  <SETG CUR-POS <- .MAXQ 1>>)\n\t\t (T\n\t\t  <SETG CUR-POS <- ,CUR-POS 1>>\n\t\t  <SETG QUEST-NUM <- ,QUEST-NUM 1>>)>\n\t   <NEW-CURSOR>)\n\t  (<EQUAL? .CHR 13 10>\n\t   <DISPLAY-HINT>\n\t   <RETURN>)>>\n  <COND (<NOT .Q>\n\t <AGAIN>)>>"
  },
  "ERASE-CURSOR": {
   "name": "ERASE-CURSOR",
   "file": "hints.zil",
   "line": 688,
   "endLine": 691,
   "source": "<ROUTINE ERASE-CURSOR ()\n\t<CURSET <GET ,LINE-TABLE ,CUR-POS>\n\t\t<- <GET ,COLUMN-TABLE ,CUR-POS> 2>>\n\t<TELL \" \">\t;\"erase previous highlight cursor\">"
  },
  "NEW-CURSOR": {
   "name": "NEW-CURSOR",
   "file": "hints.zil",
   "line": 696,
   "endLine": 699,
   "source": "<ROUTINE NEW-CURSOR ()\n\t<CURSET <GET ,LINE-TABLE ,CUR-POS>\n\t\t<- <GET ,COLUMN-TABLE ,CUR-POS> 2 ;1>>\n\t<TELL \">\">\t;\"print the new cursor\">"
  },
  "INVERSE-LINE": {
   "name": "INVERSE-LINE",
   "file": "hints.zil",
   "line": 701,
   "endLine": 704,
   "source": "<ROUTINE INVERSE-LINE (\"AUX\" (CENTER-HALF <>)) \n\t<HLIGHT ,H-INVERSE>\n\t<PRINT-SPACES <LOWCORE SCRH>>\n\t<HLIGHT ,H-NORMAL>>"
  },
  "DISPLAY-HINT": {
   "name": "DISPLAY-HINT",
   "file": "hints.zil",
   "line": 706,
   "endLine": 771,
   "source": "<ROUTINE DISPLAY-HINT (\"AUX\" H MX (CNT 2) CHR (FLG T) N CV\n\t\t\t  SHIFT? COUNT-OFFS)\n  <CLEAR -1>\n  <SPLIT 3>\n  <SCREEN ,S-WINDOW>\n  <CURSET 1 1>\n  <INVERSE-LINE>\n  <CENTER-LINE 1 ,INVISICLUES ,INVISICLUES-LEN>\n  <CURSET 3 1>\n  <INVERSE-LINE>\n  <LEFT-LINE 3 \"RETURN = see new hint\">\n  <RIGHT-LINE 3 ,Q-SEE-HINT-MENU ,Q-SEE-HINT-MENU-LEN>\n  <CURSET 2 1>\n  <INVERSE-LINE>\n  <HLIGHT ,H-BOLD>\n  <SET H <GET <GET ,HINTS ,CHAPT-NUM> <+ ,QUEST-NUM 1>>>\n  ; \"Byte table to use for showing questions already seen\"\n  ; \"Actually a nibble table.  The high four bits of each byte are for\n     quest-num odd; the low for bits are for quest-num even.  See SHIFT?\n     and COUNT-OFFS.\"\n  <SET CV <GET ,HINT-COUNTS <- ,CHAPT-NUM 1>>>\n  <CENTER-LINE 2 <GET .H 1>>\n  <HLIGHT ,H-NORMAL>\n  <SET MX <GET .H 0>>\n  <SCREEN ,S-TEXT>\n  <CRLF>\n  <SET SHIFT? <MOD ,QUEST-NUM 2>>\n  <SET COUNT-OFFS </ <- ,QUEST-NUM 1> 2>>\n  <REPEAT ((CURCX <GETB .CV .COUNT-OFFS>)\n\t   (CURC <+ 2 <ANDB <COND (.SHIFT? <LSH .CURCX -4>)\n\t\t\t\t  (T .CURCX)> *17*>>))\n    <COND (<==? .CNT .CURC>\n\t   <RETURN>)\n\t  (T\n\t   <TELL <GET .H .CNT> CR>\n\t   <SET CNT <+ .CNT 1>>)>>\n  <REPEAT ()\n     <COND (<AND .FLG <G? .CNT .MX>>\n\t    <SET FLG <>>\n\t    <TELL \"[That's all.]\" CR>)\n\t   (.FLG\n\t    <SET N <+ <- .MX .CNT> 1>>\n\t    <TELL \"[\" N .N \" hint\">\n\t    <COND (<NOT <EQUAL? .N 1>>\n\t\t   <TELL \"s\">)>\n\t    <TELL \" left.] -> \">\n\t    <SET FLG <>>)>\n     <SET CHR <INPUT 1>>\n     <COND (<EQUAL? .CHR !\\Q !\\q>\n\t    <COND (.SHIFT?\n\t\t   <PUTB .CV .COUNT-OFFS\n\t\t\t <ORB <ANDB <GETB .CV .COUNT-OFFS> *17*>\n\t\t\t      <LSH <- .CNT 2> 4>>>)\n\t\t  (T\n\t\t   <PUTB .CV .COUNT-OFFS\n\t\t\t <ORB <ANDB <GETB .CV .COUNT-OFFS> *360*>\n\t\t\t      <- .CNT 2>>>)>\n\t    <RETURN>)\n\t   (<EQUAL? .CHR 13 10>\n\t    <COND (<L=? .CNT .MX>\n\t\t   <SET FLG T>\t;\".cnt starts as 2\"\n\t\t   <TELL <GET .H .CNT> CR>\n\t\t   ; \"3rd = line 7, 4th = line 9, ect\"\n\t\t   <COND (<G? <SET CNT <+ .CNT 1>> .MX>\n\t\t\t  <SET FLG <>>\n\t\t\t  <TELL \"[Final hint]\" CR>)>)>)>>>"
  },
  "PUT-UP-QUESTIONS": {
   "name": "PUT-UP-QUESTIONS",
   "file": "hints.zil",
   "line": 773,
   "endLine": 783,
   "source": "<ROUTINE PUT-UP-QUESTIONS (\"AUX\" (ST 1) MXQ MXL)\n  <SET MXQ <- <GET <GET ,HINTS ,CHAPT-NUM> 0> 1>>\n  <SET MXL <- <LOWCORE SCRV> 1>>\n  <REPEAT ()\n\t  <COND (<G? .ST .MXQ>\n\t\t <RETURN>)\n\t\t(T                        ;\"zeroth\"\n\t\t <CURSET <GET ,LINE-TABLE <- .ST 1>>\n\t\t\t\t<- <GET ,COLUMN-TABLE <- .ST 1>> 1>>)>\n\t  <TELL \" \" <GET <GET <GET ,HINTS ,CHAPT-NUM> <+ .ST 1>> 1>>\n\t  <SET ST <+ .ST 1>>>>"
  },
  "PUT-UP-CHAPTERS": {
   "name": "PUT-UP-CHAPTERS",
   "file": "hints.zil",
   "line": 785,
   "endLine": 796,
   "source": "<ROUTINE PUT-UP-CHAPTERS (\"AUX\" (ST 1) MXC MXL)\n  <SET MXC <GET ,HINTS 0>>\n  <SET MXL <- <LOWCORE SCRV> 1>>\n  <REPEAT ()\n    <COND (<G? .ST .MXC>\n\t   <RETURN>)\n\t  (T                        ;\"zeroth\"\n\t   <CURSET\n\t    <GET ,LINE-TABLE <- .ST 1>>\n\t    <- <GET ,COLUMN-TABLE <- .ST 1>> 1>>)>\n    <TELL \" \" <GET <GET ,HINTS .ST> 1>>\n    <SET ST <+ .ST 1>>>>"
  },
  "INIT-HINT-SCREEN": {
   "name": "INIT-HINT-SCREEN",
   "file": "hints.zil",
   "line": 798,
   "endLine": 813,
   "source": "<ROUTINE INIT-HINT-SCREEN (\"OPTIONAL\" (THIRD T))\n  <CLEAR -1>\n  <SPLIT <- <LOWCORE SCRV> 1>>\n  <SCREEN ,S-WINDOW>\n  <CURSET 1 1>\n  <INVERSE-LINE>\n  <CURSET 2 1>\n  <INVERSE-LINE>\n  <CURSET 3 1>\n  <INVERSE-LINE>\n  <CENTER-LINE 1 ,INVISICLUES ,INVISICLUES-LEN>\n  <LEFT-LINE 2 \" N = Next\">\n  <RIGHT-LINE 2 ,PREVIOUS ,PREVIOUS-LEN>\n  <COND (.THIRD\n\t <LEFT-LINE 3 \" RETURN = See hint\">\n\t <RIGHT-LINE 3 ,Q-RESUME-STORY ,Q-RESUME-STORY-LEN>)>>"
  },
  "CENTER-LINE": {
   "name": "CENTER-LINE",
   "file": "hints.zil",
   "line": 815,
   "endLine": 826,
   "source": "<ROUTINE CENTER-LINE (LN STR \"OPTIONAL\" (LEN 0) (INV T))\n  <COND (<ZERO? .LEN>\n\t <DIROUT ,D-TABLE-ON ,DIROUT-TBL>\n\t <TELL .STR>\n\t <DIROUT ,D-TABLE-OFF>\n\t <SET LEN <GET ,DIROUT-TBL 0>>)>\n  <CURSET .LN </ <- <LOWCORE SCRH> .LEN> 2>>\n  <COND (.INV\n\t <HLIGHT ,H-INVERSE>)>\n  <TELL .STR>\n  <COND (.INV\n\t <HLIGHT ,H-NORMAL>)>>"
  },
  "LEFT-LINE": {
   "name": "LEFT-LINE",
   "file": "hints.zil",
   "line": 828,
   "endLine": 834,
   "source": "<ROUTINE LEFT-LINE (LN STR \"OPTIONAL\" (INV T))\n\t<CURSET .LN 1>\n\t<COND (.INV\n\t       <HLIGHT ,H-INVERSE>)>\n\t<TELL .STR>\n\t<COND (.INV\n\t       <HLIGHT ,H-NORMAL>)>>"
  },
  "RIGHT-LINE": {
   "name": "RIGHT-LINE",
   "file": "hints.zil",
   "line": 836,
   "endLine": 847,
   "source": "<ROUTINE RIGHT-LINE (LN STR \"OPTIONAL\" (LEN 0) (INV T))\n\t<COND (<ZERO? .LEN>\n\t       <DIROUT 3 ,DIROUT-TBL>\n\t       <TELL .STR>\n\t       <DIROUT -3>\n\t       <SET LEN <GET ,DIROUT-TBL 0>>)>\n\t<CURSET .LN <- <LOWCORE SCRH> .LEN>>\n\t<COND (.INV\n\t       <HLIGHT ,H-INVERSE>)>\n\t<TELL .STR>\n\t<COND (.INV\n\t       <HLIGHT ,H-NORMAL>)>>"
  },
  "PICK-ONE": {
   "name": "PICK-ONE",
   "file": "misc.zil",
   "line": 78,
   "endLine": 79,
   "source": "<ROUTINE PICK-ONE (FROB)\n\t <GET .FROB <RANDOM <GET .FROB 0>>>>"
  },
  "GO": {
   "name": "GO",
   "file": "misc.zil",
   "line": 124,
   "endLine": 163,
   "source": "<ROUTINE GO () \n\t <SETG HOST <LOWCORE INTID>>\n\t <SETG WIDTH <LOWCORE SCRH>>\n\t ;<PUTB ,P-LEXV 0 59>\n;\"put interrupts on clock chain\"\n\t <ENABLE <QUEUE I-BLATHER -1>>\n\t <ENABLE <QUEUE I-AMBASSADOR -1>>\n\t <ENABLE <QUEUE I-RANDOM-INTERRUPTS 1>>\n\t <ENABLE <QUEUE I-SLEEP-WARNINGS 3600>>\n\t <ENABLE <QUEUE I-HUNGER-WARNINGS 2000>>\n\t <ENABLE <QUEUE I-SICKNESS-WARNINGS 1000>>\n;\"set up and go\"\n\t <SETG SPOUT-PLACED ,GROUND>\n\t ;\"following COND avoids random-before-first-read message in ZIP20\"\n\t <COND (<EQUAL? <GETB 0 56> 0>\n\t\t<SETG INTERNAL-MOVES <+ 4450 <RANDOM 180>>>)\n\t       (T\n\t\t<SETG INTERNAL-MOVES 4540>)>\n         <SETG MOVES ,INTERNAL-MOVES>\n\t <SETG LIT T>\n\t <SETG WINNER ,ADVENTURER>\n\t <CLEAR -1>\n\t <INIT-STATUS-LINE>\n\t <SETG HERE ,DECK-NINE>\n\t <UPDATE-STATUS-LINE>\n         <SETG P-IT-LOC ,DECK-NINE>\n\t <SETG P-IT-OBJECT ,POD-DOOR>\n\t <COND (<NOT <FSET? ,HERE ,TOUCHBIT>>\n\t\t<V-VERSION>\n\t\t<CRLF>\n\t\t<TELL\n\"Another routine day of drudgery aboard the Stellar Patrol Ship Feinstein.\nThis morning's assignment for a certain lowly Ensign Seventh Class: scrubbing\nthe filthy metal deck at the port end of Level Nine. With your Patrol-issue\nself-contained multi-purpose all-weather scrub brush you shine the floor with\na diligence born of the knowledge that at any moment dreaded Ensign First\nClass Blather, the bane of your shipboard existence, could appear.\" CR CR>)>\n\t <V-LOOK>\n\t <MAIN-LOOP>\n\t <AGAIN>>"
  },
  "I-RANDOM-INTERRUPTS": {
   "name": "I-RANDOM-INTERRUPTS",
   "file": "misc.zil",
   "line": 165,
   "endLine": 168,
   "source": "<ROUTINE I-RANDOM-INTERRUPTS ()\n\t <ENABLE <QUEUE I-BLOWUP-FEINSTEIN <+ <RANDOM 90> 240>>>\n\t <COMM-SETUP> ;\"sets up comm system and laser values\"\n\t <SETG NUMBER-NEEDED <RANDOM 1000>>>"
  },
  "MAIN-LOOP": {
   "name": "MAIN-LOOP",
   "file": "misc.zil",
   "line": 170,
   "endLine": 172,
   "source": "<ROUTINE MAIN-LOOP (\"AUX\" TRASH)\n\t <REPEAT ()\n\t\t <SET TRASH <MAIN-LOOP-1>>>>"
  },
  "MAIN-LOOP-1": {
   "name": "MAIN-LOOP-1",
   "file": "misc.zil",
   "line": 174,
   "endLine": 305,
   "source": "<ROUTINE MAIN-LOOP-1 (\"AUX\" ICNT OCNT NUM CNT OBJ TBL V PTBL OBJ1 TMP)\n  <SETG C-ELAPSED ,C-ELAPSED-DEFAULT>\n  <SET CNT 0>\n  <SET OBJ <>>\n  <SET PTBL T>\n  <COND (<SETG P-WON <PARSER>>\n\t <SET ICNT <GET ,P-PRSI ,P-MATCHLEN>>\n\t <SET OCNT <GET ,P-PRSO ,P-MATCHLEN>>\n\t <COND (<AND ,P-IT-OBJECT <ACCESSIBLE? ,P-IT-OBJECT>>\n\t\t<SET TMP <>>\n\t\t<REPEAT ()\n    \t \t <COND (<G? <SET CNT <+ .CNT 1>> .ICNT>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<COND (<EQUAL? <GET ,P-PRSI .CNT> ,IT>\n\t\t\t       <COND (<TOO-DARK-FOR-IT?> <RTRUE>)>\n\t\t\t       <PUT ,P-PRSI .CNT ,P-IT-OBJECT>\n\t\t\t       <SET TMP T>\n\t\t\t       <RETURN>)>)>>\n\t\t<COND (<NOT .TMP>\n\t\t       <SET CNT 0>\n\t\t       <REPEAT ()\n\t\t\t<COND (<G? <SET CNT <+ .CNT 1>> .OCNT>\n\t\t\t       <RETURN>)\n\t\t\t      (T\n\t\t\t       <COND (<EQUAL? <GET ,P-PRSO .CNT> ,IT>\n\t\t\t\t      <COND (<TOO-DARK-FOR-IT?> <RTRUE>)>\n\t\t\t\t      <PUT ,P-PRSO .CNT ,P-IT-OBJECT>\n\t\t\t\t      <RETURN>)>)>>)>\n\t\t<SET CNT 0>)>\n\t <SET NUM <COND (<0? .OCNT> .OCNT)\n\t\t\t(<G? .OCNT 1>\n\t\t\t <SET TBL ,P-PRSO>\n\t\t\t <COND (<0? .ICNT> <SET OBJ <>>)\n\t\t\t       (T <SET OBJ <GET ,P-PRSI 1>>)>\n\t\t\t .OCNT)\n\t\t\t(<G? .ICNT 1>\n\t\t\t <SET PTBL <>>\n\t\t\t <SET TBL ,P-PRSI>\n\t\t\t <SET OBJ <GET ,P-PRSO 1>>\n\t\t\t .ICNT)\n\t\t\t(T 1)>>\n\t <COND (<AND <NOT .OBJ> <1? .ICNT>> <SET OBJ <GET ,P-PRSI 1>>)>\n\t <COND (<==? ,PRSA ,V?WALK> <SET V <PERFORM-PRSA ,PRSO>>)\n\t       (<0? .NUM>\n\t\t<COND (<0? <BAND <GETB ,P-SYNTAX ,P-SBITS> ,P-SONUMS>>\n\t\t       <SET V <PERFORM-PRSA>>\n\t\t       <SETG PRSO <>>)\n\t\t      (<NOT ,LIT>\n\t\t       <TELL ,TOO-DARK CR>\n\t\t       <STOP>)\n\t\t      (T\n\t\t       <TELL \"There isn't anything to \">\n\t\t       <SET TMP <GET ,P-ITBL ,P-VERBN>>\n\t\t       <COND (<OR ,P-OFLAG ,P-MERGED>\n\t\t\t      <PRINTB <GET .TMP 0>>)\n\t\t\t     (T\n\t\t\t      <WORD-PRINT <GETB .TMP 2>\n\t\t\t\t\t  <GETB .TMP 3>>)>\n\t\t       <TELL \"!\" CR>\n\t\t       <SET V <>>\n\t\t       <STOP>)>)\n\t       (T\n\t\t<SETG P-NOT-HERE 0>\n\t\t<SETG P-MULT <>>\n\t\t<COND (<G? .NUM 1>\n\t\t       <SETG P-MULT T>)>\n\t\t<SET TMP <>>\n\t\t<REPEAT ()\n\t         <COND (<G? <SET CNT <+ .CNT 1>> .NUM>\n\t\t\t<COND (<G? ,P-NOT-HERE 0>\n\t\t\t       <TELL \"[The \">\n\t\t\t       <COND (<NOT <EQUAL? ,P-NOT-HERE .NUM>>\n\t\t\t\t      <TELL \"other \">)>\n\t\t\t       <TELL \"object\">\n\t\t\t       <COND (<NOT <EQUAL? ,P-NOT-HERE 1>>\n\t\t\t\t      <TELL \"s\">)>\n\t\t\t       <TELL \" that you mentioned \">\n\t\t\t       <COND (<NOT <EQUAL? ,P-NOT-HERE 1>>\n\t\t\t\t      <TELL \"are\">)\n\t\t\t\t     (T <TELL \"is\">)>\n\t\t\t       <TELL \"n't here.]\" CR>)\n\t\t\t      (<NOT .TMP>\n\t\t\t       <TELL \"There's nothing there.\" CR>)>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<COND (.PTBL <SET OBJ1 <GET ,P-PRSO .CNT>>)\n\t\t\t      (T <SET OBJ1 <GET ,P-PRSI .CNT>>)>\n\t\t\t<SETG PRSO <COND (.PTBL .OBJ1) (T .OBJ)>>\n\t\t\t<SETG PRSI <COND (.PTBL .OBJ) (T .OBJ1)>>\n\t\t\t<COND (<OR <G? .NUM 1>\n\t\t\t\t   <EQUAL? <GET <GET ,P-ITBL ,P-NC1> 0>\n\t\t\t\t\t   ,W?ALL>>\n\t\t\t       <COND (<DONT-ALL .OBJ1>\n\t\t\t\t      <AGAIN>)\n\t\t\t\t     (T\n\t\t\t\t      <COND (<EQUAL? .OBJ1 ,IT>\n\t\t\t\t\t     <PRINTD ,P-IT-OBJECT>)\n\t\t\t\t\t    (T <PRINTD .OBJ1>)>\n\t\t\t\t      <TELL \": \">)>)>\n\t\t\t<SET TMP T>\n\t\t\t<SET V <PERFORM-PRSA ,PRSO ,PRSI>>\n\t\t\t<COND (<==? .V ,M-FATAL> <RETURN>)>)>>)>\n\t <COND (<EQUAL? .V ,M-FATAL>\n\t\t<SETG P-CONT <>>)>\n\t <COND (<AND <CLOCKER-VERB? ,PRSA>\n\t\t     <NOT <VERB? TELL>>\n\t\t     ,P-WON>\n\t\t<SET V <APPLY <GETP <LOC ,WINNER> ,P?ACTION> ,M-END>>)>)\n\t(T\n\t <SETG P-CONT <>>)> \n  <COND (<NOT <EQUAL? <GET <INT I-POD-TRIP> ,C-ENABLED?> 0>>\n\t <SETG C-ELAPSED 54>)\n        (<G? ,SHUTTLE-VELOCITY 0>\n         <SETG C-ELAPSED </ 600 ,SHUTTLE-VELOCITY>>)\n\t(<OR <VERB? TELL>\n\t     <NOT <CLOCKER-VERB? ,PRSA>>>\n\t <SETG C-ELAPSED 0>)>\n  <SETG INTERNAL-MOVES <+ ,INTERNAL-MOVES ,C-ELAPSED>>\n  <COND (<NOT <IN? ,CHRONOMETER ,ADVENTURER>>\n\t <SETG MOVES 0>)\n\t(<FSET? ,CHRONOMETER ,MUNGEDBIT>\n\t <SETG MOVES ,MUNGED-TIME>)\n\t(T\n\t <SETG MOVES ,INTERNAL-MOVES>)>\n  <COND (,P-WON\n\t <COND (<NOT <EQUAL? ,C-ELAPSED 0>>\n\t\t<SET V <CLOCKER>>)>\n\t <SETG P-PRSA-WORD <>>\n\t <SETG PRSA <>>\n\t <SETG PRSO <>>\n\t <SETG PRSI <>>)>>"
  },
  "TOO-DARK-FOR-IT?": {
   "name": "TOO-DARK-FOR-IT?",
   "file": "misc.zil",
   "line": 307,
   "endLine": 312,
   "source": "<ROUTINE TOO-DARK-FOR-IT? ()\n\t <COND (<AND <NOT ,LIT>\n\t\t     <NOT <HELD? ,P-IT-OBJECT ,WINNER>>\n\t\t     <NOT <IN? ,WINNER ,P-IT-OBJECT>>>\n\t\t<TELL ,TOO-DARK CR>\n\t\t<RTRUE>)>>"
  },
  "DONT-ALL": {
   "name": "DONT-ALL",
   "file": "misc.zil",
   "line": 314,
   "endLine": 353,
   "source": "<ROUTINE DONT-ALL (OBJ1 \"AUX\" (L <LOC .OBJ1>))\n\t ;\"RFALSE if OBJ1 should be included in the ALL, otherwise RTRUE\"\n\t <COND (<EQUAL? .OBJ1 ,NOT-HERE-OBJECT>\n\t\t<SETG P-NOT-HERE <+ ,P-NOT-HERE 1>>\n\t\t<RTRUE>)\n\t       (<AND <VERB? TAKE> ;\"TAKE prso FROM prsi and prso isn't in prsi\"\n\t\t     ,PRSI\n\t\t     <NOT <IN? ,PRSO ,PRSI>>>\n\t\t<RTRUE>)\n\t       (<NOT <ACCESSIBLE? .OBJ1>> ;\"can't get at object\"\n\t\t<RTRUE>)\n\t       (<EQUAL? ,P-GETFLAGS ,P-ALL> ;\"cases for ALL\"\n\t\t<COND (<AND ,PRSI\n\t\t\t    <PRSO? ,PRSI>>\n\t\t       <RTRUE>)\n\t\t      (<VERB? TAKE> \n\t\t       ;\"TAKE ALL and object not accessible or takeable\"\n\t\t       <COND (<AND <NOT <FSET? .OBJ1 ,TAKEBIT>>\n\t\t\t\t   <NOT <FSET? .OBJ1 ,TRYTAKEBIT>>>\n\t\t\t      <RTRUE>)\n\t\t\t     (<AND <NOT <EQUAL? .L ,WINNER ,HERE ,PRSI>>\n\t\t\t\t   <NOT <EQUAL? .L <LOC ,WINNER>>>>\n\t\t\t      <COND (<AND <FSET? .L ,SURFACEBIT>\n\t\t\t\t     \t  <NOT <FSET? .L ,TAKEBIT>>> ;\"tray\"\n\t\t\t\t     <RFALSE>)\n\t\t\t\t    (T\n\t\t\t\t     <RTRUE>)>)\n\t\t\t     (<AND <NOT ,PRSI>\n\t\t\t\t   <HELD? ,PRSO>> ;\"already have it\"\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <RFALSE>)>)\n\t\t      (<AND <VERB? DROP PUT PUT-ON GIVE SGIVE>\n\t\t\t    ;\"VERB ALL, object not held\"\n\t\t\t    <NOT <IN? .OBJ1 ,WINNER>>>\n\t\t       <RTRUE>)\n\t\t      (<AND <VERB? PUT PUT-ON> ;\"PUT ALL IN X,obj already in x\"\n\t\t\t    <NOT <IN? ,PRSO ,WINNER>>\n\t\t\t    <HELD? ,PRSO ,PRSI>>\n\t\t       <RTRUE>)>)>>"
  },
  "CLOCKER-VERB?": {
   "name": "CLOCKER-VERB?",
   "file": "misc.zil",
   "line": 356,
   "endLine": 365,
   "source": "<ROUTINE CLOCKER-VERB? (VRB)\n\t <COND (<OR <EQUAL? .VRB ,V?BRIEF ,V?SUPER-BRIEF ,V?VERBOSE>\n\t\t    <EQUAL? .VRB ,V?SAVE ,V?RESTORE ,V?SCORE>\n\t\t    <EQUAL? .VRB ,V?SCRIPT ,V?UNSCRIPT ,V?TIME>\n\t\t    <EQUAL? .VRB ,V?QUIT ,V?RESTART ,V?VERSION>\n\t\t    <EQUAL? .VRB ,V?$RANDOM ,V?$RECORD ,V?$UNRECORD>\n\t\t    <EQUAL? .VRB ,V?$COMMAND ,V?HINT ,V?HINTS-NO>>\n\t\t<RFALSE>)\n\t       (T\n\t\t<RTRUE>)>>"
  },
  "FAKE-ORPHAN": {
   "name": "FAKE-ORPHAN",
   "file": "misc.zil",
   "line": 371,
   "endLine": 390,
   "source": "<ROUTINE FAKE-ORPHAN (\"OPTIONAL\" (IT-WAS-USED <>) \"AUX\" TMP)\n\t <ORPHAN ,P-SYNTAX <>>\n\t <SET TMP <GET ,P-OTBL ,P-VERBN>>\n\t <TELL \"[Be specific: Wh\">\n\t <COND (.IT-WAS-USED\n\t\t<TELL \"at object\">)\n\t       (T\n\t\t<TELL \"o\">)>\n\t <TELL \" do you want to \">\n\t <COND (<EQUAL? .TMP 0>\n\t\t<TELL \"tell\">)\n\t       (<0? <GETB ,P-VTBL 2>>\n\t\t<PRINTB <GET .TMP 0>>)\n\t       (T\n\t\t<WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>\n\t\t<PUTB ,P-VTBL 2 0>)>\n\t <SETG P-OFLAG T>\n\t <SETG P-WON <>>\n\t <PREP-PRINT <GETB ,P-SYNTAX ,P-SPREP1>>\n\t <TELL \"?]\" CR>>"
  },
  "PERFORM-PRSA": {
   "name": "PERFORM-PRSA",
   "file": "misc.zil",
   "line": 392,
   "endLine": 393,
   "source": "<ROUTINE PERFORM-PRSA (\"OPTIONAL\" (O <>) (I <>))\n\t <PERFORM ,PRSA .O .I>>"
  },
  "PERFORM": {
   "name": "PERFORM",
   "file": "misc.zil",
   "line": 395,
   "endLine": 444,
   "source": "<ROUTINE PERFORM (A \"OPTIONAL\" (O <>) (I <>) \"AUX\" (V <>) OA OO OI)\n\t<SET OA ,PRSA>\n\t<SET OO ,PRSO>\n\t<SET OI ,PRSI>\n\t<SETG PRSA .A>\n\t<COND (<AND <ZERO? ,P-WALK-DIR>\n\t\t    <NOT <EQUAL? .A ,V?WALK>>>\n\t       <COND (<EQUAL? ,IT .I .O>\n\t              <COND (<VISIBLE? ,P-IT-OBJECT>\n\t\t\t     <COND (<EQUAL? ,IT .O>\n\t\t\t\t    <SET O ,P-IT-OBJECT>)\n\t\t\t\t   (T\n\t\t\t\t    <SET I ,P-IT-OBJECT>)>)\n\t\t\t    (T\n\t\t\t     <COND (<NOT .I>\n\t\t\t\t    <FAKE-ORPHAN T>)\n\t\t\t\t   (T\n\t\t\t\t    <REFERRING>)>\n\t\t\t     <RFATAL>)>)>)>\n\t<SETG PRSO .O>\n\t<SETG PRSI .I>\n\t<COND (<AND <NOT <EQUAL? .A ,V?WALK>>\n\t\t    <ZERO? ,P-WALK-DIR>\n\t\t    <EQUAL? ,NOT-HERE-OBJECT ,PRSO ,PRSI>>\n\t       <SET V <D-APPLY \"Not Here\" ,NOT-HERE-OBJECT-F>>\n\t       <COND (<T? .V>\n\t\t      <SETG P-WON <>>)>)>\n\t<SET O ,PRSO>\n\t<SET I ,PRSI>\n\t<THIS-IS-IT ,PRSI>\n\t<THIS-IS-IT ,PRSO>\n\t<COND (<ZERO? .V>\n\t       <SET V <D-APPLY \"Actor\" <GETP ,WINNER ,P?ACTION>>>)>\n\t<COND (<ZERO? .V>\n\t       <SET V <D-APPLY \"M-Beg\" <GETP ,HERE ,P?ACTION> ,M-BEG>>)>\n\t<COND (<ZERO? .V>\n\t       <SET V <D-APPLY \"Preaction\" <GET ,PREACTIONS .A>>>)>\n\t<COND (<AND <ZERO? .V>\n\t\t    <T? .I>>\n\t       <SET V <D-APPLY \"PRSI\" <GETP .I ,P?ACTION>>>)>\n\t<COND (<AND <ZERO? .V>\n\t\t    <T? .O>\n\t            <NOT <EQUAL? .A ,V?WALK>>>\n\t       <SET V <D-APPLY \"PRSO\" <GETP .O ,P?ACTION>>>)>\n\t<COND (<ZERO? .V>\n\t       <SET V <D-APPLY <> <GET ,ACTIONS .A>>>)>\n\t<SETG PRSA .OA>\n\t<SETG PRSO .OO>\n\t<SETG PRSI .OI>\n\t.V>"
  },
  "D-APPLY": {
   "name": "D-APPLY",
   "file": "misc.zil",
   "line": 446,
   "endLine": 465,
   "source": "<ROUTINE D-APPLY (STR FCN \"OPTIONAL\" (FOO <>) \"AUX\" RES)\n\t<COND (<NOT .FCN> <>)\n\t      (T\n\t       ;<COND (,DEBUG\n\t\t      <COND (<NOT .STR>\n\t\t\t     <TELL \"  Default ->\" CR>)\n\t\t\t    (T\n\t\t\t     <TELL \"  \" .STR \" -> \">)>)>\n\t       <SET RES <COND (.FOO\n\t\t\t       <APPLY .FCN .FOO>)\n\t\t\t      (T\n\t\t\t       <APPLY .FCN>)>>\n\t       ;<COND (<AND ,DEBUG\n\t\t\t   .STR>\n\t\t      <COND (<EQUAL? .RES ,M-FATAL>\n\t\t\t     <TELL \"Fatal\" CR>)\n\t\t\t    (<NOT .RES>\n\t\t\t     <TELL \"Not handled\">)\n\t\t\t    (T <TELL \"Handled\" CR>)>)>\n\t       .RES)>>"
  },
  "META-LOC": {
   "name": "META-LOC",
   "file": "misc.zil",
   "line": 467,
   "endLine": 475,
   "source": "<ROUTINE META-LOC (OBJ)\n\t <REPEAT ()\n\t\t <COND (<NOT .OBJ> <RFALSE>)\n\t\t       (<IN? .OBJ ,GLOBAL-OBJECTS>\n\t\t\t<RETURN ,GLOBAL-OBJECTS>)>\n\t\t <COND (<IN? .OBJ ,ROOMS>\n\t\t\t<RETURN .OBJ>)\n\t\t       (ELSE\n\t\t\t<SET OBJ <LOC .OBJ>>)>>>"
  },
  "QUEUE": {
   "name": "QUEUE",
   "file": "misc.zil",
   "line": 507,
   "endLine": 509,
   "source": "<ROUTINE QUEUE (RTN TICK \"AUX\" CINT)\n\t <PUT <SET CINT <INT .RTN>> ,C-TICK .TICK>\n\t .CINT>"
  },
  "INT": {
   "name": "INT",
   "file": "misc.zil",
   "line": 511,
   "endLine": 522,
   "source": "<ROUTINE INT (RTN \"OPTIONAL\" (DEMON <>) E C INT)\n\t <SET E <REST ,C-TABLE ,C-TABLELEN>>\n\t <SET C <REST ,C-TABLE ,C-INTS>>\n\t <REPEAT ()\n\t\t <COND (<==? .C .E>\n\t\t\t<SETG C-INTS <- ,C-INTS ,C-INTLEN>>\n\t\t\t<AND .DEMON <SETG C-DEMONS <- ,C-DEMONS ,C-INTLEN>>>\n\t\t\t<SET INT <REST ,C-TABLE ,C-INTS>>\n\t\t\t<PUT .INT ,C-RTN .RTN>\n\t\t\t<RETURN .INT>)\n\t\t       (<EQUAL? <GET .C ,C-RTN> .RTN> <RETURN .C>)>\n\t\t <SET C <REST .C ,C-INTLEN>>>>"
  },
  "CLOCKER": {
   "name": "CLOCKER",
   "file": "misc.zil",
   "line": 528,
   "endLine": 549,
   "source": "<ROUTINE CLOCKER (\"AUX\" C E TICK (FLG <>))\n\t ;<SETG ELAPSED-MOVES <+ ,ELAPSED-MOVES 1>>\n\t ;<COND (,DEBUG-ON\n\t\t<TELL \"[Elapsed time: \" N ,C-ELAPSED \"]\" CR>)>\n\t ;<COND (,CLOCK-WAIT <SETG CLOCK-WAIT <>> <RFALSE>)>\n\t <SET C <REST ,C-TABLE <COND (,P-WON ,C-INTS) (T ,C-DEMONS)>>>\n\t <SET E <REST ,C-TABLE ,C-TABLELEN>>\n\t <REPEAT ()\n\t\t <COND (<==? .C .E> <RETURN .FLG>)\n\t\t       (<NOT <0? <GET .C ,C-ENABLED?>>>\n\t\t\t<SET TICK <GET .C ,C-TICK>>\n\t\t\t<COND (<0? .TICK>)\n\t\t\t      (<==? .TICK -1>\n\t\t\t       <COND (<APPLY <GET .C ,C-RTN>>\n\t\t\t\t      <SET FLG T>)>)\n\t\t\t      (T\n\t\t\t       <PUT .C ,C-TICK <SET TICK <- .TICK ,C-ELAPSED>>>\n\t\t\t       <COND (<NOT <G? .TICK 1>>\n\t\t\t\t      <PUT .C ,C-TICK 0>\n\t\t\t\t      <COND (<APPLY <GET .C ,C-RTN>>\n\t\t\t\t\t     <SET FLG T>)>)>)>)>\n\t\t <SET C <REST .C ,C-INTLEN>>>>"
  },
  "REFERRING": {
   "name": "REFERRING",
   "file": "misc.zil",
   "line": 554,
   "endLine": 560,
   "source": "<ROUTINE REFERRING (\"OPTIONAL\" (HIM-HER <>))\n\t <TELL \"I don't see wh\">\n\t <COND (.HIM-HER\n\t\t<TELL \"o\">)\n\t       (T\n\t\t<TELL \"at\">)>\n\t <TELL \" you're referring to.\" CR>>"
  },
  "PARSER": {
   "name": "PARSER",
   "file": "parser.zil",
   "line": 101,
   "endLine": 378,
   "source": "<ROUTINE PARSER (\"AUX\" (PTR ,P-LEXSTART) WRD (VAL 0) (VERB <>)\n\t\t OMERGED OWINNER ;OLEN LEN (DIR <>) (NW 0) (LW 0) (CNT -1)) \n\t<REPEAT ()\n\t\t<COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN> <RETURN>)\n\t\t      (T \n\t\t       <COND (<NOT ,P-OFLAG>\n\t\t\t      <PUT ,P-OTBL .CNT <GET ,P-ITBL .CNT>>)>\n\t\t       <PUT ,P-ITBL .CNT 0>)>>\n\t<SET OMERGED ,P-MERGED>\n\t<SET OWINNER ,WINNER>\n \t<SETG P-MERGED <>>\n\t<PUT ,P-PRSO ,P-MATCHLEN 0>\n\t<PUT ,P-PRSI ,P-MATCHLEN 0>\n\t<PUT ,P-BUTS ,P-MATCHLEN 0>\n\t<COND (<AND <NOT ,QUOTE-FLAG>\n\t\t    <N==? ,WINNER ,ADVENTURER>>\n\t       <SETG WINNER ,ADVENTURER>\n\t       <COND (<NOT <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t      <SETG HERE <LOC ,WINNER>>)>\n\t       <SETG LIT <LIT? ,HERE>>)>\n\t<COND (,RESERVE-PTR\n\t       <SET PTR ,RESERVE-PTR>\n\t       <STUFF ,P-LEXV ,RESERVE-LEXV>\n\t       <INBUF-STUFF ,P-INBUF ,RESERVE-INBUF> ;\"rfix no. 36\"\n\t       <COND (<AND <NOT ,SUPER-BRIEF>\n\t\t\t   <EQUAL? ,ADVENTURER ,WINNER>>\n\t\t      <CRLF>)>\n\t       <SETG RESERVE-PTR <>>\n\t       <SETG P-CONT <>>)\n\t      (,P-CONT\n\t       <SET PTR ,P-CONT>\n\t       <COND (<AND <EQUAL? ,ADVENTURER ,WINNER>\n\t\t\t   ;<NOT <VERB? TELL>>\n\t\t\t   <NOT ,SUPER-BRIEF>>\n\t\t      <CRLF>)>)\n\t      (T\n\t       <SETG WINNER ,ADVENTURER>\n\t       <SETG QUOTE-FLAG <>>\n\t       <COND (<NOT <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t      <SETG HERE <LOC ,WINNER>>)>\n\t       <SETG LIT <LIT? ,HERE>>\n\t       <COND (<NOT ,SUPER-BRIEF>\n\t\t      <CRLF>)>\n\t      %<COND (<AND <GASSIGNED? PLUS-MODE> ,PLUS-MODE>\n\t\t       '<PROG ()\n\t\t\t      <UPDATE-STATUS-LINE>\n\t\t\t      <TELL \">\">>)\n\t\t      (T\n\t\t       '<TELL \">\">)>\n\t       <PUTB ,P-INBUF 1 0>\n\t       <READ ,P-INBUF ,P-LEXV>\n\t       <SETG P-INPUT-WORDS <GETB ,P-LEXV ,P-LEXWORDS>>)>\n\t<SETG P-LEN <GETB ,P-LEXV ,P-LEXWORDS>>\n\t<COND (<0? ,P-LEN>\n\t       <TELL \"I beg your pardon?\" CR>\n\t       <RFALSE>)\n\t      (<EQUAL? <GET ,P-LEXV .PTR> ,W?OOPS ,W?O>\n\t       <COND (<EQUAL? <GET ,P-LEXV <+ .PTR ,P-LEXELEN>> ;\"rfix 36\"\n\t\t\t      ,W?PERIOD ,W?COMMA>\n\t\t      <SET PTR <+ .PTR ,P-LEXELEN>>\n\t\t      <SETG P-LEN <- ,P-LEN 1>>)>\n\t       <COND (<NOT <G? ,P-LEN 1>>\n\t\t      <CANT-USE-THAT-WAY \"OOPS\">\n\t\t      <RFALSE>)\n\t\t     (<GET ,OOPS-TABLE ,O-PTR>\n\t\t      <COND (<G? ,P-LEN 2>\n\t\t\t     <TELL\n\"[Warning: Only the first word after OOPS is used.]\" CR>)>\n\t\t\t   <PUT ,AGAIN-LEXV <GET ,OOPS-TABLE ,O-PTR>\n\t\t\t   <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>>\n\t\t      <SETG WINNER .OWINNER> ;\"Fixes OOPS w/char\"\n\t\t      <INBUF-ADD <GETB ,P-LEXV <+ <* .PTR ,P-LEXELEN> 6>>\n\t\t\t\t <GETB ,P-LEXV <+ <* .PTR ,P-LEXELEN> 7>>\n\t\t\t\t <+ <* <GET ,OOPS-TABLE ,O-PTR> ,P-LEXELEN> 3>>\n\t\t      <STUFF ,P-LEXV ,AGAIN-LEXV>\n\t\t      <SETG P-LEN <GETB ,P-LEXV ,P-LEXWORDS>>;\"Will this help?\"\n\t\t      <SET PTR <GET ,OOPS-TABLE ,O-START>>\n\t\t      <INBUF-STUFF ,P-INBUF ,OOPS-INBUF>)\n\t\t     (T\n\t\t      <PUT ,OOPS-TABLE ,O-END <>>\n\t\t      <TELL \"[There was no word to replace!]\" CR>\n\t\t      <RFALSE>)>)\n\t      (<ZERO? ,P-CONT> ;\"retrofix 58\"\n\t       <PUT ,OOPS-TABLE ,O-END <>>)>\n\t<SETG P-CONT <>> ;\"retrofix 59\"\n\t<COND (<EQUAL? <GET ,P-LEXV .PTR> ,W?AGAIN ,W?G>\n\t       <COND (,P-OFLAG\n\t\t      <CANT-USE-THAT-WAY \"AGAIN\">\n\t\t      <RFALSE>)\n\t\t     (<NOT ,P-WON>\n\t\t      <TELL \"[That would just repeat a mistake!]\" CR>\n\t\t      <RFALSE>)\n\t\t     (<AND <NOT <EQUAL? .OWINNER ,ADVENTURER>>\n\t\t\t   <NOT <VISIBLE? .OWINNER>>>\n\t\t      <TELL \"[You can't see \" D .OWINNER \" any more.]\" CR>\n\t\t      <RFALSE>)\n\t\t     (<G? ,P-LEN 1>\n\t\t      <COND (<OR <EQUAL? <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>\n\t\t\t\t\t,W?PERIOD ,W?COMMA ,W?THEN>\n\t\t\t\t <EQUAL? <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>\n\t\t\t\t\t,W?AND>>\n\t\t\t     <SET PTR <+ .PTR <* 2 ,P-LEXELEN>>>\n\t\t\t     <PUTB ,P-LEXV ,P-LEXWORDS\n\t\t\t\t   <- <GETB ,P-LEXV ,P-LEXWORDS> 2>>)\n\t\t\t    (T\n\t\t\t     <SETG P-WON <>>\n\t\t\t     <TELL \"[That sentence isn't one I recognize.]\" CR>\n\t\t\t     <RFALSE>)>)\n\t\t     (T\n\t\t      <SET PTR <+ .PTR ,P-LEXELEN>>\n\t\t      <PUTB ,P-LEXV ,P-LEXWORDS \n\t\t\t    <- <GETB ,P-LEXV ,P-LEXWORDS> 1>>)>\n\t       <COND (<G? <GETB ,P-LEXV ,P-LEXWORDS> 0>\n\t\t      <STUFF ,RESERVE-LEXV ,P-LEXV>\n\t\t      <INBUF-STUFF ,RESERVE-INBUF ,P-INBUF>\n\t\t      <SETG RESERVE-PTR .PTR>)\n\t\t     (T\n\t\t      <SETG RESERVE-PTR <>>)>\n\t       ;<SETG P-LEN <GETB ,AGAIN-LEXV ,P-LEXWORDS>>\n\t       <SETG WINNER .OWINNER>\n\t       <SETG P-MERGED .OMERGED>\n\t       <INBUF-STUFF ,P-INBUF ,OOPS-INBUF>\n\t       <STUFF ,P-LEXV ,AGAIN-LEXV>\n\t       <SET CNT -1>\n\t       <SET DIR ,AGAIN-DIR>\n\t       <REPEAT ()\n\t\t<COND (<IGRTR? CNT ,P-ITBLLEN>\n\t\t       <RETURN>)\n\t\t      (T\n\t\t       <PUT ,P-ITBL .CNT <GET ,P-OTBL .CNT>>)>>)\n\t      (T\n\t       <STUFF ,AGAIN-LEXV ,P-LEXV>\n\t       <INBUF-STUFF ,OOPS-INBUF ,P-INBUF>\n\t       <PUT ,OOPS-TABLE ,O-START .PTR>\n\t       <PUT ,OOPS-TABLE ,O-LENGTH <* 4 ,P-LEN>> ;\"fix #36\"\n\t       <SET LEN\n\t\t    <* 2 <+ .PTR <* ,P-LEXELEN <GETB ,P-LEXV ,P-LEXWORDS>>>>>\n\t       <COND (<ZERO? <GET ,OOPS-TABLE ,O-END>> ;\"retrofix 58\"\n\t\t      <PUT ,OOPS-TABLE ,O-END\n\t\t\t   <+ <GETB ,P-LEXV <- .LEN 1>>\n\t\t\t      <GETB ,P-LEXV <- .LEN 2>>>>)>\n\t       <SETG RESERVE-PTR <>>\n\t       <SET LEN ,P-LEN>\n\t       ;<SETG P-DIRECTION <>>\n\t       <SETG P-NCN 0>\n\t       <SETG P-GETFLAGS 0>\n\t       <REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <SETG QUOTE-FLAG <>>\n\t\t       <RETURN>)\n\t\t      (<OR <SET WRD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WRD <NUMBER? .PTR>>>\n\t\t       <SET NW <NEXT-WORD .PTR>>\n\t\t       <COND (<AND <EQUAL? .WRD ,W?TO>\n\t\t\t\t   <EQUAL? .VERB ,ACT?TELL>>\n\t\t\t      <SET WRD ,W?QUOTE>)\n\t\t\t     (<AND <EQUAL? .WRD ,W?THEN>\n\t\t\t\t   <G? ,P-LEN 0>\n\t\t\t\t   <NOT .VERB>\n\t\t\t\t   <NOT ,QUOTE-FLAG>>\n\t\t\t      <PUT ,P-ITBL ,P-VERB ,ACT?TELL>\n\t\t\t      <PUT ,P-ITBL ,P-VERBN 0>\n\t\t\t      <SET WRD ,W?QUOTE>)\n\t\t\t     ;(<AND <EQUAL? .WRD ,W?PERIOD>\n\t\t\t\t   <EQUAL? .LW ,W?MR>>\n\t\t\t      <SETG P-NCN <- ,P-NCN 1>>\n\t\t\t      <CHANGE-LEXV .PTR .LW T>\n\t\t\t      <SET WRD .LW>\n\t\t\t      <SET LW 0>)>\n\t\t       <COND (<OR <EQUAL? .WRD ,W?THEN ,W?PERIOD>\n\t\t\t\t  <EQUAL? .WRD ,W?QUOTE>> \n\t\t\t      <COND (<EQUAL? .WRD ,W?QUOTE>\n\t\t\t\t     <COND (,QUOTE-FLAG\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>)\n\t\t\t\t\t   (T\n\t\t\t\t\t    <SETG QUOTE-FLAG T>)>)>\n\t\t\t      <OR <ZERO? ,P-LEN>\n\t\t\t\t  <SETG P-CONT <+ .PTR ,P-LEXELEN>>>\n\t\t\t      <PUTB ,P-LEXV ,P-LEXWORDS ,P-LEN>\n\t\t\t      <RETURN>)\n\t\t\t     (<AND <SET VAL\n\t\t\t\t\t<WT? .WRD ,PS?DIRECTION ,P1?DIRECTION>>\n\t\t\t\t   <EQUAL? .VERB <> ,ACT?WALK>\n\t\t\t\t   <OR <EQUAL? .LEN 1>\n\t\t\t\t       <AND <EQUAL? .LEN 2>\n\t\t\t\t\t    <EQUAL? .VERB ,ACT?WALK>>\n\t\t\t\t       <AND <EQUAL? .NW\n\t\t\t\t\t\t    ,W?THEN ,W?PERIOD ,W?QUOTE>\n\t\t\t\t\t    <NOT <L? .LEN 2>>>\n\t\t\t\t       <AND ,QUOTE-FLAG\n\t\t\t\t\t    <EQUAL? .LEN 2>\n\t\t\t\t\t    <EQUAL? .NW ,W?QUOTE>>\n\t\t\t\t       <AND <G? .LEN 2>\n\t\t\t\t\t    <EQUAL? .NW ,W?COMMA ,W?AND>>>>\n\t\t\t      <SET DIR .VAL>\n\t\t\t      <COND (<EQUAL? .NW ,W?COMMA ,W?AND>\n\t\t\t\t     <CHANGE-LEXV <+ .PTR ,P-LEXELEN>\n\t\t\t\t\t  ,W?THEN>)>\n\t\t\t      <COND (<NOT <G? .LEN 2>>\n\t\t\t\t     <SETG QUOTE-FLAG <>>\n\t\t\t\t     <RETURN>)>)\n\t\t\t     (<AND <SET VAL <WT? .WRD ,PS?VERB ,P1?VERB>>\n\t\t\t\t   <NOT .VERB>>\n\t\t\t      <SETG P-PRSA-WORD .WRD>\n\t\t\t      <SET VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERBN ,P-VTBL>\n\t\t\t      <PUT ,P-VTBL 0 .WRD>\n\t\t\t      <PUTB ,P-VTBL 2\n\t\t\t\t    <GETB ,P-LEXV <SET CNT <+ <* .PTR 2> 2>>>>\n\t\t\t      <PUTB ,P-VTBL 3 <GETB ,P-LEXV <+ .CNT 1>>>)\n\t\t\t     (<OR <SET VAL <WT? .WRD ,PS?PREPOSITION 0>>\n\t\t\t\t  <EQUAL? .WRD ,W?ALL ,W?ONE ,W?BOTH>\n\t\t\t\t  <WT? .WRD ,PS?ADJECTIVE>\n\t\t\t\t  <WT? .WRD ,PS?OBJECT>>\n\t\t\t      ;<COND (<AND .VAL\n\t\t\t\t\t  <EQUAL? .WRD ,W?BACK>\n\t\t\t\t\t  <NOT <EQUAL? .VERB ,ACT?HAND>>>\n\t\t\t\t     <SET VAL 0>)>\n\t\t\t      ;\"3/3/86 -- fix OPEN BACK DOOR given that\n\t\t\t\t   back is also a prep for HAND BACK OBJ -pdl\"\n\t\t\t      ;\"removed for XZIP - GTB\"\n\t\t\t      <COND (<AND <G? ,P-LEN 0>\n\t\t\t\t\t  <EQUAL? .NW ,W?OF>\n\t\t\t\t\t  <ZERO? .VAL>\n\t\t\t\t\t  <NOT <EQUAL? .WRD ,W?ALL ,W?ONE ,W?A>>\n\t\t\t\t\t  <NOT <EQUAL? .WRD ,W?AN ,W?BOTH>>>)\n\t\t\t\t    (<AND <NOT <ZERO? .VAL>>\n\t\t\t\t          <OR <ZERO? ,P-LEN>\n\t\t\t\t\t      <EQUAL? .NW ,W?THEN ,W?PERIOD>>>\n\t\t\t\t     <SETG P-END-ON-PREP T>\n\t\t\t\t     <COND (<L? ,P-NCN 2>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1 .VAL>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1N .WRD>)>)\n\t\t\t\t    (<EQUAL? ,P-NCN 2>\n\t\t\t\t     <TELL\n\"[There were too many nouns in that sentence.]\" CR>\n\t\t\t\t     <RFALSE>)\n\t\t\t\t    (T\n\t\t\t\t     <SETG P-NCN <+ ,P-NCN 1>>\n\t\t\t\t     <OR <SET PTR <CLAUSE .PTR .VAL .WRD>>\n\t\t\t\t\t <RFALSE>>\n\t\t\t\t     <COND (<L? .PTR 0>\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>\n\t\t\t\t\t    <RETURN>)>)>)\n\t\t\t     ;(<AND <NOT .VERB>\n\t\t\t\t   <EQUAL? .WRD ,W?DON\\'T ,W?DONT>>\n\t\t\t      <SET DONT T>)\n\t\t\t     (<WT? .WRD ,PS?BUZZ-WORD>)\n\t\t\t     (<AND <EQUAL? .VERB ,ACT?TELL>\n\t\t\t\t   <WT? .WRD ,PS?VERB ,P1?VERB>\n\t\t\t\t   ;\"Next expr added to fix FORD, TELL ME WHY\"\n\t\t\t\t   <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t\t      <TELL\n\"Consult your manual for how to talk to characters.\" CR>\n\t\t\t      <RFALSE>)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T\n\t\t       <UNKNOWN-WORD .PTR>\n\t\t       <RFALSE>)>\n\t\t<SET LW .WRD>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>)>\n\t<PUT ,OOPS-TABLE ,O-PTR <>>\n\t<COND (.DIR \n\t       <SETG PRSA ,V?WALK>\n\t       <SETG PRSO .DIR>\n\t       <SETG P-OFLAG <>>\n\t       <SETG P-WALK-DIR .DIR>\n\t       <SETG AGAIN-DIR .DIR>\n\t       <RETURN T>)>\n\t<SETG P-WALK-DIR <>>\n\t<SETG AGAIN-DIR <>>\n\t<COND (,P-OFLAG <ORPHAN-MERGE>)>\n\t;<COND (<==? <GET ,P-ITBL ,P-VERB> 0> <PUT ,P-ITBL ,P-VERB ,ACT?CALL>)>\n\t<COND (<AND <SYNTAX-CHECK> <SNARF-OBJECTS> <MANY-CHECK> <TAKE-CHECK>>\n\t       T)>>"
  },
  "INBUF-STUFF": {
   "name": "INBUF-STUFF",
   "file": "parser.zil",
   "line": 381,
   "endLine": 384,
   "source": "<ROUTINE INBUF-STUFF (DEST SRC \"AUX\" (CNT -1))\n\t <REPEAT ()\n\t  <COND (<IGRTR? CNT ,P-INBUF-LENGTH> <RETURN>)\n\t\t(T <PUTB .DEST .CNT <GETB .SRC .CNT>>)>>>"
  },
  "STUFF": {
   "name": "STUFF",
   "file": "parser.zil",
   "line": 387,
   "endLine": 399,
   "source": "<ROUTINE STUFF (DEST SRC \"OPTIONAL\" (MAX 39 ;29)\n\t\t\"AUX\" (PTR ,P-LEXSTART) (CTR 1) BPTR)\n\t <PUTB .DEST 0 <GETB .SRC 0>>\n\t <PUTB .DEST 1 <GETB .SRC 1>>\n\t <REPEAT ()\n\t  <PUT .DEST .PTR <GET .SRC .PTR>>\n\t  <SET BPTR <+ <* .PTR 2> 2>>\n\t  <PUTB .DEST .BPTR <GETB .SRC .BPTR>>\n\t  <SET BPTR <+ <* .PTR 2> 3>>\n\t  <PUTB .DEST .BPTR <GETB .SRC .BPTR>>\n\t  <SET PTR <+ .PTR ,P-LEXELEN>>\n\t  <COND (<IGRTR? CTR .MAX>\n\t\t <RETURN>)>>>"
  },
  "NEXT-WORD": {
   "name": "NEXT-WORD",
   "file": "parser.zil",
   "line": 401,
   "endLine": 406,
   "source": "<ROUTINE NEXT-WORD (PTR \"AUX\" NW)\n\t <COND (<NOT <ZERO? ,P-LEN>>\n\t        <COND (<SET NW <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>>\n\t\t       .NW)\n\t\t      (ELSE\n\t\t       <NUMBER? <+ .PTR ,P-LEXELEN>>)>)>>"
  },
  "CHANGE-LEXV": {
   "name": "CHANGE-LEXV",
   "file": "parser.zil",
   "line": 408,
   "endLine": 420,
   "source": "<ROUTINE CHANGE-LEXV (PTR WRD \"OPTIONAL\" (PTRS? <>) \"AUX\" X Y Z)\n\t <COND (.PTRS?\n\t\t<SET X <+ 2 <* 2 <- .PTR ,P-LEXELEN>>>>\n\t\t<SET Y <GETB ,P-LEXV .X>>\n\t\t<SET Z <+ 2 <* 2 .PTR>>>\n\t\t<PUTB     ,P-LEXV .Z .Y>\n\t\t<PUTB ,AGAIN-LEXV .Z .Y>\n\t\t<SET Y <GETB ,P-LEXV <+ 1 .X>>>\n\t\t<SET Z <+ 3 <* 2 .PTR>>>\n\t\t<PUTB     ,P-LEXV .Z .Y>\n\t\t<PUTB ,AGAIN-LEXV .Z .Y>)>\n\t <PUT ,P-LEXV .PTR .WRD>\n\t <PUT ,AGAIN-LEXV .PTR .WRD>>"
  },
  "WT?": {
   "name": "WT?",
   "file": "parser.zil",
   "line": 429,
   "endLine": 435,
   "source": "<ROUTINE WT? (PTR BIT \"OPTIONAL\" (B1 5) \"AUX\" (OFFST ,P-P1OFF) TYP) \n\t<COND (<BTST <SET TYP <GETB .PTR ,P-PSOFF>> .BIT>\n\t       <COND (<G? .B1 4> <RTRUE>)\n\t\t     (T\n\t\t      <SET TYP <BAND .TYP ,P-P1BITS>>\n\t\t      <COND (<NOT <==? .TYP .B1>> <SET OFFST <+ .OFFST 1>>)>\n\t\t      <GETB .PTR .OFFST>)>)>>"
  },
  "CLAUSE": {
   "name": "CLAUSE",
   "file": "parser.zil",
   "line": 438,
   "endLine": 513,
   "source": "<ROUTINE CLAUSE (PTR VAL WORD \"AUX\" OFF NUM (ANDFLG <>) (FIRST?? T) NW (LW 0))\n\t<SET OFF <* <- ,P-NCN 1> 2>>\n\t<COND (<NOT <==? .VAL 0>>\n\t       <PUT ,P-ITBL <SET NUM <+ ,P-PREP1 .OFF>> .VAL>\n\t       <PUT ,P-ITBL <+ .NUM 1> .WORD>\n\t       <SET PTR <+ .PTR ,P-LEXELEN>>)\n\t      (T <SETG P-LEN <+ ,P-LEN 1>>)>\n\t<COND (<0? ,P-LEN> <SETG P-NCN <- ,P-NCN 1>> <RETURN -1>)>\n\t<PUT ,P-ITBL <SET NUM <+ ,P-NC1 .OFF>> <REST ,P-LEXV <* .PTR 2>>>\n\t<COND (<EQUAL? <GET ,P-LEXV .PTR> ,W?THE ,W?A ,W?AN>\n\t       <PUT ,P-ITBL .NUM <REST <GET ,P-ITBL .NUM> 4>>)>\n\t<REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <PUT ,P-ITBL <+ .NUM 1> <REST ,P-LEXV <* .PTR 2>>>\n\t\t       <RETURN -1>)>\n\t\t<COND (<OR <SET WORD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WORD <NUMBER? .PTR>>>\n\t\t       <COND (<0? ,P-LEN> <SET NW 0>)\n\t\t\t     (T <SET NW <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>>)>\n\t\t       ;<COND (<AND <==? .WORD ,W?OF>\n\t\t\t\t   <==? <GET ,P-ITBL ,P-VERB> ,ACT?ACCUSE>>\n\t\t\t      <PUT ,P-LEXV .PTR ,W?WITH>\n\t\t\t      <SET WORD ,W?WITH>)>\n\t\t       <COND ;(<AND <EQUAL? .WORD ,W?PERIOD>\n\t\t\t\t   <EQUAL? .LW ,W?MRS ,W?MR ,W?MS>>\n\t\t\t      <SET LW 0>)\n\t\t\t     (<EQUAL? .WORD ,W?AND ,W?COMMA> <SET ANDFLG T>)\n\t\t\t     (<EQUAL? .WORD ,W?ALL ,W?BOTH ,W?ONE>\n\t\t\t      <COND (<==? .NW ,W?OF>\n\t\t\t\t     <SETG P-LEN <- ,P-LEN 1>>\n\t\t\t\t     <SET PTR <+ .PTR ,P-LEXELEN>>)>)\n\t\t\t     (<OR <EQUAL? .WORD ,W?THEN ,W?PERIOD>\n\t\t\t\t  <AND <WT? .WORD ,PS?PREPOSITION>\n\t\t\t\t       <NOT .FIRST??>>>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 1>>\n\t\t\t      <PUT ,P-ITBL\n\t\t\t\t   <+ .NUM 1>\n\t\t\t\t   <REST ,P-LEXV <* .PTR 2>>>\n\t\t\t      <RETURN <- .PTR ,P-LEXELEN>>)\n\t\t\t     (<WT? .WORD ,PS?OBJECT>\n\t\t\t      <COND (<AND <G? ,P-LEN 0>\n\t\t\t\t\t  <EQUAL? .NW ,W?OF>\n\t\t\t\t\t  <NOT <EQUAL? .WORD ,W?ALL ,W?ONE>>>\n\t\t\t\t     T)\n\t\t\t\t    (<AND <WT? .WORD\n\t\t\t\t\t       ,PS?ADJECTIVE\n\t\t\t\t\t       ;,P1?ADJECTIVE>\n\t\t\t\t\t  <NOT <==? .NW 0>>\n\t\t\t\t\t  <WT? .NW ,PS?OBJECT>>)\n\t\t\t\t    (<AND <NOT .ANDFLG>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?BUT ,W?EXCEPT>>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t\t     <PUT ,P-ITBL\n\t\t\t\t\t  <+ .NUM 1>\n\t\t\t\t\t  <REST ,P-LEXV <* <+ .PTR 2> 2>>>\n\t\t\t\t     <RETURN .PTR>)\n\t\t\t\t    (T <SET ANDFLG <>>)>)\n\t\t\t     (<AND <OR ,P-OFLAG\n\t\t\t\t        ,P-MERGED\n\t\t\t\t\t<NOT <EQUAL? <GET ,P-ITBL ,P-VERB> 0>>>\n\t\t\t\t   <OR <WT? .WORD ,PS?ADJECTIVE>\n\t\t\t\t       <WT? .WORD ,PS?BUZZ-WORD>>>)\n\t\t\t     (<AND .ANDFLG\n\t\t\t\t   <OR <WT? .WORD ,PS?DIRECTION>\n\t\t\t\t       <WT? .WORD ,PS?VERB>>>\n\t\t\t      <SET PTR <- .PTR 4>>\n\t\t\t      <PUT ,P-LEXV <+ .PTR 2> ,W?THEN>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 2>>)\n\t\t\t     (<WT? .WORD ,PS?PREPOSITION> T)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T <UNKNOWN-WORD .PTR> <RFALSE>)>\n\t\t<SET LW .WORD>\n\t\t<SET FIRST?? <>>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>> "
  },
  "NUMBER?": {
   "name": "NUMBER?",
   "file": "parser.zil",
   "line": 515,
   "endLine": 530,
   "source": "<ROUTINE NUMBER? (PTR \"AUX\" CNT BPTR CHR (SUM 0) (TIM <>))\n\t <SET CNT <GETB <REST ,P-LEXV <* .PTR 2>> 2>>\n\t <SET BPTR <GETB <REST ,P-LEXV <* .PTR 2>> 3>>\n\t <REPEAT ()\n\t\t <COND (<L? <SET CNT <- .CNT 1>> 0> <RETURN>)\n\t\t       (T\n\t\t\t<SET CHR <GETB ,P-INBUF .BPTR>>\n\t\t\t<COND (<G? .SUM 10000> <RFALSE>)\n\t\t\t      (<AND <L? .CHR 58> <G? .CHR 47>>\n\t\t\t       <SET SUM <+ <* .SUM 10> <- .CHR 48>>>)\n\t\t\t      (T <RFALSE>)>\n\t\t\t<SET BPTR <+ .BPTR 1>>)>>\n\t <PUT ,P-LEXV .PTR ,W?INTNUM>\n\t <COND (<G? .SUM 10000> <RFALSE>)>\n\t <SETG P-NUMBER .SUM>\n\t ,W?INTNUM>"
  },
  "ORPHAN-MERGE": {
   "name": "ORPHAN-MERGE",
   "file": "parser.zil",
   "line": 535,
   "endLine": 610,
   "source": "<ROUTINE ORPHAN-MERGE (\"AUX\" (CNT -1) TEMP VERB BEG END (ADJ <>) WRD) \n   <SETG P-OFLAG <>>\n   <COND (<WT? <SET WRD <GET <GET ,P-ITBL ,P-VERBN> 0>>\n\t       ,PS?ADJECTIVE ;,P1?ADJECTIVE>\n\t  <SET ADJ T>)\n\t ;\"Following clause is retrofix #30, which handles case where one-word\n\t   response is both noun and verb. -JW 8/20/84\"\n\t (<AND <WT? .WRD ,PS?OBJECT ;,P1?OBJECT>\n\t       <EQUAL? ,P-NCN 0>>\n\t  <PUT ,P-ITBL ,P-VERB 0>\n\t  <PUT ,P-ITBL ,P-VERBN 0>\n\t  <PUT ,P-ITBL ,P-NC1 <REST ,P-LEXV 2>>\n\t  <PUT ,P-ITBL ,P-NC1L <REST ,P-LEXV 6>>\n\t  <SETG P-NCN 1>)>\n   <COND (<AND <NOT <0? <SET VERB <GET ,P-ITBL ,P-VERB>>>>\n\t       <NOT .ADJ>\n\t       <NOT <==? .VERB <GET ,P-OTBL ,P-VERB>>>>\n\t  <RFALSE>)\n\t (<==? ,P-NCN 2> <RFALSE>)\n\t (<==? <GET ,P-OTBL ,P-NC1> 1>\n\t  <COND (<OR <==? <SET TEMP <GET ,P-ITBL ,P-PREP1>>\n\t\t\t  <GET ,P-OTBL ,P-PREP1>>\n\t\t     <0? .TEMP>>\n\t\t <COND (.ADJ\n\t\t\t<PUT ,P-OTBL ,P-NC1 <REST ,P-LEXV 2>>\n\t\t\t<PUT ,P-OTBL ,P-NC1L <REST ,P-LEXV 6>>)\n\t\t       (T\n\t\t\t<PUT ,P-OTBL ,P-NC1 <GET ,P-ITBL ,P-NC1>>\n\t\t\t<PUT ,P-OTBL ,P-NC1L <GET ,P-ITBL ,P-NC1L>>)>)\n\t\t(T <RFALSE>)>)\n\t (<==? <GET ,P-OTBL ,P-NC2> 1>\n\t  <COND (<OR <==? <SET TEMP <GET ,P-ITBL ,P-PREP1>>\n\t\t\t  <GET ,P-OTBL ,P-PREP2>>\n\t\t     <0? .TEMP>>\n\t\t <COND (.ADJ\n\t\t\t<PUT ,P-ITBL ,P-NC1 <REST ,P-LEXV 2>>\n\t\t\t<PUT ,P-ITBL ,P-NC1L <REST ,P-LEXV 6>>)>\n\t\t <PUT ,P-OTBL ,P-NC2 <GET ,P-ITBL ,P-NC1>>\n\t\t <PUT ,P-OTBL ,P-NC2L <GET ,P-ITBL ,P-NC1L>>\n\t\t <SETG P-NCN 2>)\n\t\t(T <RFALSE>)>)\n\t (<NOT <ZERO? ,P-ACLAUSE>>\n\t  <COND (<AND <NOT <==? ,P-NCN 1>> <NOT .ADJ>>\n\t\t <SETG P-ACLAUSE <>>\n\t\t <RFALSE>)\n\t\t(T\n\t\t <SET BEG <GET ,P-ITBL ,P-NC1>>\n\t\t <COND (.ADJ <SET BEG <REST ,P-LEXV 2>> <SET ADJ <>>)>\n\t\t <SET END <GET ,P-ITBL ,P-NC1L>>\n\t\t <REPEAT ()\n\t\t\t <SET WRD <GET .BEG 0>>\n\t\t\t <COND (<==? .BEG .END>\n\t\t\t\t<COND (.ADJ <ACLAUSE-WIN .ADJ> <RETURN>)\n\t\t\t\t      (T <SETG P-ACLAUSE <>> <RFALSE>)>)\n\t\t\t       (<AND <NOT .ADJ>\n\t\t\t\t     <OR <BTST <GETB .WRD ,P-PSOFF>\n\t\t\t\t\t       ,PS?ADJECTIVE>\n\t\t\t\t\t <EQUAL? .WRD ,W?ALL ,W?ONE>>>\n\t\t\t\t<SET ADJ .WRD>)\n\t\t\t       (<OR <BTST <GETB .WRD ,P-PSOFF> ,PS?OBJECT>\n\t\t\t\t    <==? .WRD ,W?ONE>>\n\t\t\t\t<COND (<NOT <EQUAL? .WRD ,P-ANAM ,W?ONE>>\n\t\t\t\t       <RFALSE>)\n\t\t\t\t      (T <ACLAUSE-WIN .ADJ> <RETURN>)>)>\n\t\t\t <SET BEG <REST .BEG ,P-WORDLEN>>\n\t\t\t <COND (<EQUAL? .END 0>\n\t\t\t\t<SET END .BEG>\n\t\t\t\t<SETG P-NCN 1>\n\t\t\t\t<PUT ,P-ITBL ,P-NC1 <BACK .BEG 4>>\n\t\t\t\t<PUT ,P-ITBL ,P-NC1L .BEG>)>>)>)>\n   <REPEAT ()\n\t   <COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN>\n\t\t  <SETG P-MERGED T>\n\t\t  <RTRUE>)\n\t\t (T <PUT ,P-ITBL .CNT <GET ,P-OTBL .CNT>>)>>\n   T>"
  },
  "ACLAUSE-WIN": {
   "name": "ACLAUSE-WIN",
   "file": "parser.zil",
   "line": 612,
   "endLine": 618,
   "source": "<ROUTINE ACLAUSE-WIN (ADJ) ;\"TRAP retrofix\" \n\t<PUT ,P-ITBL ,P-VERB <GET ,P-OTBL ,P-VERB>>\n\t<SETG P-CCSRC ,P-OTBL>\n\t<CLAUSE-COPY ,P-ACLAUSE <+ ,P-ACLAUSE 1> .ADJ>\n\t<AND <NOT <==? <GET ,P-OTBL ,P-NC2> 0>> <SETG P-NCN 2>>\n\t<SETG P-ACLAUSE <>>\n\t<RTRUE>>"
  },
  "WORD-PRINT": {
   "name": "WORD-PRINT",
   "file": "parser.zil",
   "line": 623,
   "endLine": 628,
   "source": "<ROUTINE WORD-PRINT (CNT BUF)\n\t <REPEAT ()\n\t\t <COND (<DLESS? CNT 0> <RETURN>)\n\t\t       (ELSE\n\t\t\t<PRINTC <GETB ,P-INBUF .BUF>>\n\t\t\t<SET BUF <+ .BUF 1>>)>>>"
  },
  "INBUF-ADD": {
   "name": "INBUF-ADD",
   "file": "parser.zil",
   "line": 632,
   "endLine": 645,
   "source": "<ROUTINE INBUF-ADD (LEN BEG SLOT \"AUX\" DBEG (CTR 0) TMP)\n\t <COND (<SET TMP <GET ,OOPS-TABLE ,O-END>>\n\t\t<SET DBEG .TMP>)\n\t       (T\n\t\t<SET DBEG <+ <GETB ,AGAIN-LEXV\n\t\t\t\t   <SET TMP <GET ,OOPS-TABLE ,O-LENGTH>>>\n\t\t\t     <GETB ,AGAIN-LEXV <+ .TMP 1>>>>)>\n\t <PUT ,OOPS-TABLE ,O-END <+ .DBEG .LEN>>\n\t <REPEAT ()\n\t  <PUTB ,OOPS-INBUF <+ .DBEG .CTR> <GETB ,P-INBUF <+ .BEG .CTR>>>\n\t  <SET CTR <+ .CTR 1>>\n\t  <COND (<EQUAL? .CTR .LEN> <RETURN>)>>\n\t <PUTB ,AGAIN-LEXV .SLOT .DBEG>\n\t <PUTB ,AGAIN-LEXV <- .SLOT 1> .LEN>>"
  },
  "UNKNOWN-WORD": {
   "name": "UNKNOWN-WORD",
   "file": "parser.zil",
   "line": 647,
   "endLine": 654,
   "source": "<ROUTINE UNKNOWN-WORD (PTR \"AUX\" BUF)\n\t<PUT ,OOPS-TABLE ,O-PTR .PTR>\n\t<TELL \"[I don't know the word \\\"\">\n\t<WORD-PRINT <GETB <REST ,P-LEXV <SET BUF <* .PTR 2>>> 2>\n\t\t    <GETB <REST ,P-LEXV .BUF> 3>>\n\t<TELL \".\\\"]\" CR>\n\t<SETG QUOTE-FLAG <>>\n\t<SETG P-OFLAG <>>>"
  },
  "CANT-USE": {
   "name": "CANT-USE",
   "file": "parser.zil",
   "line": 656,
   "endLine": 662,
   "source": "<ROUTINE CANT-USE (PTR \"AUX\" BUF)\n\t<TELL \"I can't use the word \\\"\">\n\t<WORD-PRINT <GETB <REST ,P-LEXV <SET BUF <* .PTR 2>>> 2>\n\t\t    <GETB <REST ,P-LEXV .BUF> 3>>\n\t<TELL \"\\\" here.\" CR>\n\t<SETG QUOTE-FLAG <>>\n\t<SETG P-OFLAG <>>>"
  },
  "SYNTAX-CHECK": {
   "name": "SYNTAX-CHECK",
   "file": "parser.zil",
   "line": 691,
   "endLine": 759,
   "source": "<ROUTINE SYNTAX-CHECK\n\t(\"AUX\" SYN LEN NUM OBJ (DRIVE1 <>) (DRIVE2 <>) PREP VERB TMP)\n\t<COND (<0? <SET VERB <GET ,P-ITBL ,P-VERB>>>\n\t       <TELL \"I can't find a verb in that sentence!\" CR>\n\t       <RFALSE>)>\n\t<SET SYN <GET ,VERBS <- 255 .VERB>>>\n\t<SET LEN <GETB .SYN 0>>\n\t<SET SYN <REST .SYN>>\n\t<REPEAT ()\n\t\t<SET NUM <BAND <GETB .SYN ,P-SBITS> ,P-SONUMS>>\n\t\t<COND (<G? ,P-NCN .NUM> T)\n\t\t      (<AND <NOT <L? .NUM 1>>\n\t\t\t    <0? ,P-NCN>\n\t\t\t    <OR <0? <SET PREP <GET ,P-ITBL ,P-PREP1>>>\n\t\t\t\t<==? .PREP <GETB .SYN ,P-SPREP1>>>>\n\t\t       <SET DRIVE1 .SYN>)\n\t\t      (<==? <GETB .SYN ,P-SPREP1> <GET ,P-ITBL ,P-PREP1>>\n\t\t       <COND (<AND <==? .NUM 2> <==? ,P-NCN 1>>\n\t\t\t      <SET DRIVE2 .SYN>)\n\t\t\t     (<==? <GETB .SYN ,P-SPREP2>\n\t\t\t\t   <GET ,P-ITBL ,P-PREP2>>\n\t\t\t      <SYNTAX-FOUND .SYN>\n\t\t\t      <RTRUE>)>)>\n\t\t<COND (<DLESS? LEN 1>\n\t\t       <COND (<OR .DRIVE1 .DRIVE2> <RETURN>)\n\t\t\t     (T\n\t\t\t      <TELL \"I don't understand that sentence.\" CR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T\n\t\t       <SET SYN <REST .SYN ,P-SYNLEN>>)>>\n\t<COND (<AND .DRIVE1\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE1 ,P-SFWIM1>\n\t\t\t       <GETB .DRIVE1 ,P-SLOC1>\n\t\t\t       <GETB .DRIVE1 ,P-SPREP1>>>>\n\t       <PUT ,P-PRSO ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSO 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE1>)\n\t      (<AND .DRIVE2\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE2 ,P-SFWIM2>\n\t\t\t       <GETB .DRIVE2 ,P-SLOC2>\n\t\t\t       <GETB .DRIVE2 ,P-SPREP2>>>>\n\t       <PUT ,P-PRSI ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSI 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE2>)\n\t      (<EQUAL? .VERB ,ACT?FIND>\n\t       <TELL \"I can't answer that question.\" CR>\n\t       <RFALSE>)\n\t      (<NOT <==? ,WINNER ,ADVENTURER>>\n\t       <CANT-ORPHAN>)\n\t      (T\n\t       <ORPHAN .DRIVE1 .DRIVE2>\n\t       <TELL \"What do you want to \">\n\t       <SET TMP <GET ,P-OTBL ,P-VERBN>>\n\t       <COND (<==? .TMP 0>\n\t\t      <TELL \"tell\">)\n\t\t     (<0? <GETB ,P-VTBL 2>>\n\t\t      <PRINTB <GET .TMP 0>>)\n\t\t     (T\n\t\t      <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>\n\t\t      <PUTB ,P-VTBL 2 0>)>\n\t       <COND (.DRIVE2\n\t\t      <CLAUSE-PRINT ,P-NC1 ,P-NC1L>)>\n\t       <SETG P-OFLAG T>\n\t       <PREP-PRINT <COND (.DRIVE1 <GETB .DRIVE1 ,P-SPREP1>)\n\t\t\t\t (T <GETB .DRIVE2 ,P-SPREP2>)>>\n\t       <TELL \"?\" CR>\n\t       <RFALSE>)>> "
  },
  "CANT-ORPHAN": {
   "name": "CANT-ORPHAN",
   "file": "parser.zil",
   "line": 761,
   "endLine": 763,
   "source": "<ROUTINE CANT-ORPHAN ()\n\t <TELL \"\\\"I don't understand! What are you referring to?\\\"\" CR>\n\t <RFALSE>>"
  },
  "ORPHAN": {
   "name": "ORPHAN",
   "file": "parser.zil",
   "line": 765,
   "endLine": 780,
   "source": "<ROUTINE ORPHAN (D1 D2 \"AUX\" (CNT -1))\n\t<PUT ,P-OCLAUSE ,P-MATCHLEN 0>\n\t<SETG P-CCSRC ,P-ITBL>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT ,P-ITBLLEN> <RETURN>)\n\t\t      (T <PUT ,P-OTBL .CNT <GET ,P-ITBL .CNT>>)>>\n\t<COND (<==? ,P-NCN 2>\n\t       <CLAUSE-COPY ,P-NC2 ,P-NC2L>)>\n\t<COND (<NOT <L? ,P-NCN 1>>\n\t       <CLAUSE-COPY ,P-NC1 ,P-NC1L>)>\n\t<COND (.D1\n\t       <PUT ,P-OTBL ,P-PREP1 <GETB .D1 ,P-SPREP1>>\n\t       <PUT ,P-OTBL ,P-NC1 1>)\n\t      (.D2\n\t       <PUT ,P-OTBL ,P-PREP2 <GETB .D2 ,P-SPREP2>>\n\t       <PUT ,P-OTBL ,P-NC2 1>)>> "
  },
  "CLAUSE-PRINT": {
   "name": "CLAUSE-PRINT",
   "file": "parser.zil",
   "line": 782,
   "endLine": 783,
   "source": "<ROUTINE CLAUSE-PRINT (BPTR EPTR \"OPTIONAL\" (THE? T)) \n\t<BUFFER-PRINT <GET ,P-ITBL .BPTR> <GET ,P-ITBL .EPTR> .THE?>>    "
  },
  "BUFFER-PRINT": {
   "name": "BUFFER-PRINT",
   "file": "parser.zil",
   "line": 785,
   "endLine": 810,
   "source": "<ROUTINE BUFFER-PRINT (BEG END CP \"AUX\" (NOSP <>) WRD (FIRST?? T) (PN <>))\n\t <REPEAT ()\n\t\t<COND (<==? .BEG .END>\n\t\t       <RETURN>)\n\t\t      (T\n\t\t       <COND (.NOSP\n\t\t\t      <SET NOSP <>>)\n\t\t\t     (T\n\t\t\t      <TELL \" \">)>\n\t\t       <COND (<==? <SET WRD <GET .BEG 0>> ,W?PERIOD>\n\t\t\t      <SET NOSP T>)\n\t\t\t     (<EQUAL? .WRD ,W?FLOYD ,W?BLATHER>\n\t\t\t      <CAPITALIZE .BEG>\n\t\t\t      <SET PN T>)\n\t\t\t     (T\n\t\t\t      <COND (<AND .FIRST?? <NOT .PN> .CP>\n\t\t\t\t     <TELL \"the \">)>\n\t\t\t      <COND (,P-OFLAG <PRINTB .WRD>)\n\t\t\t\t    (<AND <==? .WRD ,W?IT>\n\t\t\t\t\t  <==? ,P-IT-LOC ,HERE>>\n\t\t\t\t     <PRINTD ,P-IT-OBJECT>)\n\t\t\t\t    (T\n\t\t\t\t     <WORD-PRINT <GETB .BEG 2>\n\t\t\t\t\t\t <GETB .BEG 3>>)>\n\t\t\t      <SET FIRST?? <>>)>)>\n\t\t<SET BEG <REST .BEG ,P-WORDLEN>>>>"
  },
  "CAPITALIZE": {
   "name": "CAPITALIZE",
   "file": "parser.zil",
   "line": 812,
   "endLine": 814,
   "source": "<ROUTINE CAPITALIZE (PTR)\n\t <PRINTC <- <GETB ,P-INBUF <GETB .PTR 3>> 32>>\n\t <WORD-PRINT <- <GETB .PTR 2> 1> <+ <GETB .PTR 3> 1>>>"
  },
  "PREP-PRINT": {
   "name": "PREP-PRINT",
   "file": "parser.zil",
   "line": 816,
   "endLine": 821,
   "source": "<ROUTINE PREP-PRINT (PREP \"AUX\" WRD)\n\t<COND (<NOT <0? .PREP>>\n\t       <TELL \" \">\n\t       <SET WRD <PREP-FIND .PREP>>\n\t       <COND ;(<==? .WRD ,W?AGAINST> <TELL \"against\">)\n\t\t     (T <PRINTB .WRD>)>)>>    "
  },
  "CLAUSE-COPY": {
   "name": "CLAUSE-COPY",
   "file": "parser.zil",
   "line": 823,
   "endLine": 840,
   "source": "<ROUTINE CLAUSE-COPY (BPTR EPTR \"OPTIONAL\" (INSRT <>) \"AUX\" BEG END)\n\t<SET BEG <GET ,P-CCSRC .BPTR>>\n\t<SET END <GET ,P-CCSRC .EPTR>>\n\t<PUT ,P-OTBL\n\t     .BPTR\n\t     <REST ,P-OCLAUSE\n\t\t   <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN> 2>>>\n\t<REPEAT ()\n\t   <COND (<==? .BEG .END>\n\t\t  <PUT ,P-OTBL .EPTR\n\t\t       <REST ,P-OCLAUSE\n\t\t\t    <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN> 2>>>\n\t\t  <RETURN>)\n\t\t (T\n\t\t  <COND (<AND .INSRT <==? ,P-ANAM <GET .BEG 0>>>\n\t\t\t <CLAUSE-ADD .INSRT>)>\n\t\t  <CLAUSE-ADD <GET .BEG 0>>)>\n\t   <SET BEG <REST .BEG ,P-WORDLEN>>>>  "
  },
  "CLAUSE-ADD": {
   "name": "CLAUSE-ADD",
   "file": "parser.zil",
   "line": 842,
   "endLine": 846,
   "source": "<ROUTINE CLAUSE-ADD (WRD \"AUX\" PTR)\n\t<SET PTR <+ <GET ,P-OCLAUSE ,P-MATCHLEN> 2>>\n\t<PUT ,P-OCLAUSE <- .PTR 1> .WRD>\n\t<PUT ,P-OCLAUSE .PTR 0>\n\t<PUT ,P-OCLAUSE ,P-MATCHLEN .PTR>>   "
  },
  "PREP-FIND": {
   "name": "PREP-FIND",
   "file": "parser.zil",
   "line": 848,
   "endLine": 854,
   "source": "<ROUTINE PREP-FIND (PREP \"AUX\" (CNT 0) SIZE)\n\t<SET SIZE <* <GET ,PREPOSITIONS 0> 2>>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT .SIZE>\n\t\t       <RFALSE>)\n\t\t      (<==? <GET ,PREPOSITIONS .CNT> .PREP>\n\t\t       <RETURN <GET ,PREPOSITIONS <- .CNT 1>>>)>>>  "
  },
  "SYNTAX-FOUND": {
   "name": "SYNTAX-FOUND",
   "file": "parser.zil",
   "line": 856,
   "endLine": 858,
   "source": "<ROUTINE SYNTAX-FOUND (SYN)\n\t<SETG P-SYNTAX .SYN>\n\t<SETG PRSA <GETB .SYN ,P-SACTION>>>   "
  },
  "GWIM": {
   "name": "GWIM",
   "file": "parser.zil",
   "line": 862,
   "endLine": 882,
   "source": "<ROUTINE GWIM (GBIT LBIT PREP \"AUX\" OBJ)\n\t<COND (<==? .GBIT ,RMUNGBIT>\n\t       <RETURN ,ROOMS>)>\n\t<SETG P-GWIMBIT .GBIT>\n\t<SETG P-SLOCBITS .LBIT>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<COND (<GET-OBJECT ,P-MERGE <>>\n\t       <SETG P-GWIMBIT 0>\n\t       <COND (<==? <GET ,P-MERGE ,P-MATCHLEN> 1>\n\t\t      <SET OBJ <GET ,P-MERGE 1>>\n\t\t      <COND (<AND <FSET? .OBJ ,VEHBIT>\n\t\t\t\t  <EQUAL? .PREP ,PR?DOWN>>\n\t\t\t     <SET PREP ,PR?ON>)>\n\t\t      <TELL \"(\">\n\t\t      <COND (<NOT <0? .PREP>>\n\t\t\t     <PRINTB <PREP-FIND .PREP>>\n\t\t\t     <TELL \" the \">)>\n\t\t      <TELL D .OBJ \")\" CR>\n\t\t      .OBJ)>)\n\t      (T\n\t       <SETG P-GWIMBIT 0> <RFALSE>)>>   "
  },
  "SNARF-OBJECTS": {
   "name": "SNARF-OBJECTS",
   "file": "parser.zil",
   "line": 884,
   "endLine": 897,
   "source": "<ROUTINE SNARF-OBJECTS (\"AUX\" PTR)\n\t<COND (<NOT <==? <SET PTR <GET ,P-ITBL ,P-NC1>> 0>>\n\t       <SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC1>>\n\t       <OR <SNARFEM .PTR <GET ,P-ITBL ,P-NC1L> ,P-PRSO> <RFALSE>>\n\t       <OR <0? <GET ,P-BUTS ,P-MATCHLEN>>\n\t\t   <SETG P-PRSO <BUT-MERGE ,P-PRSO>>>)>\n\t<COND (<NOT <==? <SET PTR <GET ,P-ITBL ,P-NC2>> 0>>\n\t       <SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC2>>\n\t       <OR <SNARFEM .PTR <GET ,P-ITBL ,P-NC2L> ,P-PRSI> <RFALSE>>\n\t       <COND (<NOT <0? <GET ,P-BUTS ,P-MATCHLEN>>>\n\t\t      <COND (<==? <GET ,P-PRSI ,P-MATCHLEN> 1>\n\t\t\t     <SETG P-PRSO <BUT-MERGE ,P-PRSO>>)\n\t\t\t    (T <SETG P-PRSI <BUT-MERGE ,P-PRSI>>)>)>)>\n\t<RTRUE>>  "
  },
  "BUT-MERGE": {
   "name": "BUT-MERGE",
   "file": "parser.zil",
   "line": 899,
   "endLine": 914,
   "source": "<ROUTINE BUT-MERGE (TBL \"AUX\" LEN BUTLEN (CNT 1) (MATCHES 0) OBJ NTBL)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<REPEAT ()\n\t\t<COND (<DLESS? LEN 0>\n\t\t       <RETURN>)\n\t\t      (<INTBL? <SET OBJ <GET .TBL .CNT>> <REST ,P-BUTS 2>\n\t\t\t       <GET ,P-BUTS 0>>)\n\t\t      (T\n\t\t       <PUT ,P-MERGE <+ .MATCHES 1> .OBJ>\n\t\t       <SET MATCHES <+ .MATCHES 1>>)>\n\t\t<SET CNT <+ .CNT 1>>>\n\t<PUT ,P-MERGE ,P-MATCHLEN .MATCHES>\n\t<SET NTBL ,P-MERGE>\n\t<SETG P-MERGE .TBL>\n\t.NTBL>    "
  },
  "SNARFEM": {
   "name": "SNARFEM",
   "file": "parser.zil",
   "line": 946,
   "endLine": 997,
   "source": "<ROUTINE SNARFEM (PTR EPTR TBL \"AUX\" (BUT <>) LEN WV WORD NW)\n   <SETG P-AND <>> ;\"WHICH retrofix\"\n   <SETG P-GETFLAGS 0>\n   <SETG P-CSPTR .PTR>\n   <SETG P-CEPTR .EPTR>\n   <PUT ,P-BUTS ,P-MATCHLEN 0>\n   <PUT .TBL ,P-MATCHLEN 0>\n   <SET WORD <GET .PTR 0>>\n   <REPEAT ()\n\t   <COND (<==? .PTR .EPTR> <RETURN <GET-OBJECT <OR .BUT .TBL>>>)\n\t\t (T\n\t\t  <SET NW <GET .PTR ,P-LEXELEN>>\n\t\t  <COND (<EQUAL? .WORD ,W?ALL ,W?BOTH>\n\t\t\t <SETG P-GETFLAGS ,P-ALL>\n\t\t\t <COND (<==? .NW ,W?OF>\n\t\t\t\t<SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t(<EQUAL? .WORD ,W?BUT ,W?EXCEPT>\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t <SET BUT ,P-BUTS>\n\t\t\t <PUT .BUT ,P-MATCHLEN 0>)\n\t\t\t(<EQUAL? .WORD ,W?A ,W?AN ,W?ONE>\n\t\t\t <COND (<NOT ,P-ADJ>\n\t\t\t\t<SETG P-GETFLAGS ,P-ONE>\n\t\t\t\t<COND (<==? .NW ,W?OF>\n\t\t\t\t       <SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t       (T\n\t\t\t\t<SETG P-NAM ,P-ONEOBJ>\n\t\t\t\t<OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t\t<AND <0? .NW> <RTRUE>>)>)\n\t\t\t(<AND <EQUAL? .WORD ,W?AND ,W?COMMA>\n\t\t\t      <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t <SETG P-AND T> ;\"WHICH retrofix\"\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t T)\n\t\t\t(<AND <WT? .WORD ,PS?PREPOSITION>\n\t\t\t      <==? .PTR ,P-CSPTR>>\n\t\t\t <SETG P-CSPTR <REST ,P-CSPTR ,P-WORDLEN>>)\n\t\t\t(<WT? .WORD ,PS?BUZZ-WORD>)\n\t\t\t(<EQUAL? .WORD ,W?AND ,W?COMMA>)\n\t\t\t(<==? .WORD ,W?OF>\n\t\t\t <COND (<0? ,P-GETFLAGS>\n\t\t\t\t<SETG P-GETFLAGS ,P-INHIBIT>)>)\n\t\t\t(<AND <WT? .WORD ,PS?ADJECTIVE>\n\t\t\t      <ADJ-CHECK .WORD ,P-ADJ>\n\t\t\t      <NOT <EQUAL? .NW ,W?OF>>> ;\"RFIX NO. 40\"\n\t\t\t <SETG P-ADJ .WORD>)\n\t\t\t(<WT? .WORD ,PS?OBJECT ;,P1?OBJECT>\n\t\t\t <SETG P-NAM .WORD>\n\t\t\t <SETG P-ONEOBJ .WORD>)>)>\n\t   <COND (<NOT <==? .PTR .EPTR>>\n\t\t  <SET PTR <REST .PTR ,P-WORDLEN>>\n\t\t  <SET WORD .NW>)>>>   "
  },
  "ADJ-CHECK": {
   "name": "ADJ-CHECK",
   "file": "parser.zil",
   "line": 999,
   "endLine": 1012,
   "source": "<ROUTINE ADJ-CHECK (WRD ADJ)\n\t <COND (<NOT .ADJ>\n\t\t<RTRUE>)\n\t       (<OR <EQUAL? .ADJ ,W?FIRST ,W?SECOND ,W?THIRD>\n\t\t    <EQUAL? .ADJ ,W?FOURTH ,W?OLD ,W?NEW>\n\t\t    <EQUAL? .ADJ ,W?SEND ,W?RECEIVE ,W?KITCHEN>\n\t\t    <EQUAL? .ADJ ,W?UPPER ,W?LOWER ,W?SHUTTLE>\n\t\t    <EQUAL? .ADJ ,W?ELEVATOR ,W?TELEPORTATION>\n\t\t    <EQUAL? .ADJ ,W?SQUARE ,W?ROUND ,W?GOOD>\n\t\t    <EQUAL? .ADJ ,W?SHINY ,W?CRACKED ,W?FRIED>\n\t\t    <EQUAL? .ADJ ,W?TELEPORT ,W?MINI ,W?MINIATURIZATION>>\n\t\t<RFALSE>)\n\t       (T\n\t\t<RTRUE>)>>"
  },
  "GET-OBJECT": {
   "name": "GET-OBJECT",
   "file": "parser.zil",
   "line": 1022,
   "endLine": 1115,
   "source": "<ROUTINE GET-OBJECT (TBL \"OPTIONAL\" (VRB T) \n                         \"AUX\" BITS LEN XBITS TLEN (GCHECK <>) (OLEN 0) OBJ)\n    <SET XBITS ,P-SLOCBITS>\n    <SET TLEN <GET .TBL ,P-MATCHLEN>>\n    <COND (<BTST ,P-GETFLAGS ,P-INHIBIT> <RTRUE>)>\n    <COND (<AND <NOT ,P-NAM> ,P-ADJ>\n\t   <COND (<WT? ,P-ADJ ,PS?OBJECT>\n\t\t  <SETG P-NAM ,P-ADJ>\n\t\t  <SETG P-ADJ <>>)\n\t\t (<SET BITS <WT? ,P-ADJ ,PS?DIRECTION ,P1?DIRECTION>>\n\t\t       <SETG P-DIRECTION .BITS>)>)>\n    <COND (<AND <NOT ,P-NAM>\n\t        <NOT ,P-ADJ>\n\t        <NOT <==? ,P-GETFLAGS ,P-ALL>>\n\t        <0? ,P-GWIMBIT>>\n\t   <COND (.VRB\n\t          <TELL \"I couldn't find a noun in that sentence!\" CR>)>\n\t   <RFALSE>)>\n    <COND (<OR <NOT <==? ,P-GETFLAGS ,P-ALL>> <0? ,P-SLOCBITS>>\n\t   <SETG P-SLOCBITS -1>)>\n    <SETG P-TABLE .TBL>\n    <PROG ()\n     <COND (.GCHECK <GLOBAL-CHECK .TBL>)\n\t   (T\n\t    <COND (,LIT\n\t\t   <COND (<NOT <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t\t  <FCLEAR ,WINNER ,OPENBIT>)>\n\t\t   <DO-SL ,HERE ,SOG ,SIR>\n\t\t   <COND (<NOT <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t\t  <FSET ,WINNER ,OPENBIT>)>)>\n\t    <DO-SL ,WINNER ,SH ,SC>\n\t    <COND (<AND <NOT <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t\t<NOT <EQUAL? ,P-GETFLAGS ,P-ALL>>>\n\t\t   <DO-SL ,ADVENTURER ,SH ,SC>)>)>\n     <SET LEN <- <GET .TBL ,P-MATCHLEN> .TLEN>>\n     <COND (<BTST ,P-GETFLAGS ,P-ALL>)\n\t   (<AND <BTST ,P-GETFLAGS ,P-ONE>\n\t\t <NOT <0? .LEN>>>\n\t    <COND (<NOT <==? .LEN 1>>\n\t\t   <PUT .TBL 1 <GET .TBL <RANDOM .LEN>>>\n\t\t   <TELL \"(How about the \">\n\t\t   <PRINTD <GET .TBL 1>>\n\t\t   <TELL \"?)\" CR>)>\n\t    <PUT .TBL ,P-MATCHLEN 1>)\n\t   (<OR <G? .LEN 1>\n\t\t<AND <0? .LEN> <NOT <==? ,P-SLOCBITS -1>>>>\n\t    <COND (<==? ,P-SLOCBITS -1>\n\t\t   <SETG P-SLOCBITS .XBITS>\n\t\t   <SET OLEN .LEN>\n\t\t   <PUT .TBL ,P-MATCHLEN <- <GET .TBL ,P-MATCHLEN> .LEN>>\n\t\t   <AGAIN>)\n\t\t  (T\n\t\t   <COND (<0? .LEN> <SET LEN .OLEN>)>\n\t\t   <COND (<NOT <==? ,WINNER ,ADVENTURER>>\n\t\t\t  <CANT-ORPHAN>\n\t\t\t  <RFALSE>)\n\t\t\t (<AND .VRB ,P-NAM>\n\t\t\t  <WHICH-PRINT .TLEN .LEN .TBL>\n\t\t\t  <SETG P-ACLAUSE\n\t\t\t\t<COND (<==? .TBL ,P-PRSO> ,P-NC1)\n\t\t\t\t      (T ,P-NC2)>>\n\t\t\t  <SETG P-AADJ ,P-ADJ>\n\t\t\t  <SETG P-ANAM ,P-NAM>\n\t\t\t  <ORPHAN <> <>>\n\t\t\t  <SETG P-OFLAG T>)\n\t\t\t (.VRB\n\t\t\t  <TELL \"I couldn't find a noun in that sentence!\" CR>)>\n\t\t   <SETG P-NAM <>>\n\t\t   <SETG P-ADJ <>>\n\t\t   <RFALSE>)>)\n\t   (<AND <0? .LEN> .GCHECK>\n\t    <COND (.VRB\n\t\t   <SETG P-SLOCBITS .XBITS>\n\t\t   <COND (<OR ,LIT\n\t\t\t      <EQUAL? ,P-NAM ,W?GRUE>>\n\t\t\t  ;\"Changed 6/10/83 - MARC\"\n\t\t\t  <OBJ-FOUND ,NOT-HERE-OBJECT .TBL>\n\t\t\t  <SETG P-XNAM ,P-NAM>\n\t\t\t  <SETG P-XADJ ,P-ADJ>\n\t\t\t  ;<SETG P-XADJN ,P-ADJN>\n\t\t\t  <SETG P-NAM <>>\n\t\t\t  <SETG P-ADJ <>>\n\t\t\t  ;<SETG P-ADJN <>>\n\t\t\t  <RTRUE>)\n\t\t\t (T\n\t\t\t  <TELL \"It's too dark to see!\" CR>)>)>\n\t    <SETG P-NAM <>>\n\t    <SETG P-ADJ <>>\n\t    <RFALSE>)\n\t   (<0? .LEN> <SET GCHECK T> <AGAIN>)>\n     <SETG P-SLOCBITS .XBITS>\n     <SETG P-NAM <>>\n     <SETG P-ADJ <>>\n     <RTRUE>>>"
  },
  "MOBY-FIND": {
   "name": "MOBY-FIND",
   "file": "parser.zil",
   "line": 1117,
   "endLine": 1136,
   "source": "<ROUTINE MOBY-FIND (TBL \"AUX\" FOO LEN)\n\t <SETG P-SLOCBITS -1>\n\t <SETG P-NAM ,P-XNAM>\n\t <SETG P-ADJ ,P-XADJ>\n\t <PUT .TBL ,P-MATCHLEN 0>\n\t <SET FOO <FIRST? ,ROOMS>>\n\t <REPEAT ()\n\t\t <COND (<NOT .FOO> <RETURN>)\n\t\t       (T\n\t\t\t<SEARCH-LIST .FOO .TBL ,P-SRCALL>\n\t\t\t<SET FOO <NEXT? .FOO>>)>>\n\t <COND (<EQUAL? <SET LEN <GET .TBL ,P-MATCHLEN>> 0>\n\t\t<DO-SL ,LOCAL-GLOBALS 1 1>)>\n\t <COND (<EQUAL? <SET LEN <GET .TBL ,P-MATCHLEN>> 0>\n\t\t<DO-SL ,ROOMS 1 1>)>\n\t <COND (<EQUAL? <SET LEN <GET .TBL ,P-MATCHLEN>> 1>\n\t\t<SETG P-MOBY-FOUND <GET .TBL 1>>)>\n\t <SETG P-NAM <>>\n\t <SETG P-ADJ <>>\n\t .LEN>"
  },
  "WHICH-PRINT": {
   "name": "WHICH-PRINT",
   "file": "parser.zil",
   "line": 1143,
   "endLine": 1169,
   "source": "<ROUTINE WHICH-PRINT (TLEN LEN TBL \"AUX\" OBJ RLEN)\n\t <SET RLEN .LEN>\n\t <TELL \"Which\">\n         <COND (<OR ,P-OFLAG\n\t\t    ,P-MERGED\n\t\t    ,P-AND ;\"WHICH retrofix\">\n\t\t<TELL \" \">\n\t\t<PRINTB ,P-NAM>)\n\t       (<==? .TBL ,P-PRSO>\n\t\t<CLAUSE-PRINT ,P-NC1 ,P-NC1L <>>)\n\t       (T\n\t\t<CLAUSE-PRINT ,P-NC2 ,P-NC2L <>>)>\n\t <TELL \" do you mean, \">\n\t <REPEAT ()\n\t\t <SET TLEN <+ .TLEN 1>>\n\t\t <SET OBJ <GET .TBL .TLEN>>\n\t\t <TELL \"the \">\n\t\t <TELL D .OBJ>\n\t\t <COND (<==? .LEN 2>\n\t\t        <COND (<NOT <==? .RLEN 2>>\n\t\t\t       <TELL \",\">)>\n\t\t        <TELL \" or \">)\n\t\t       (<G? .LEN 2>\n\t\t\t<TELL \", \">)>\n\t\t <COND (<L? <SET LEN <- .LEN 1>> 1>\n\t\t        <TELL \"?\" CR>\n\t\t        <RETURN>)>>>"
  },
  "GLOBAL-CHECK": {
   "name": "GLOBAL-CHECK",
   "file": "parser.zil",
   "line": 1172,
   "endLine": 1206,
   "source": "<ROUTINE GLOBAL-CHECK (TBL \"AUX\" LEN RMG RMGL (CNT 0) OBJ OBITS FOO)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<SET OBITS ,P-SLOCBITS>\n\t<COND (<SET RMG <GETPT ,HERE ,P?GLOBAL>>\n\t       <SET RMGL <- </ <PTSIZE .RMG> 2> 1>>\n\t       <REPEAT ()\n\t\t       <COND (<THIS-IT? <SET OBJ <GET .RMG .CNT>>>\n\t\t\t      <OBJ-FOUND .OBJ .TBL>)>\n\t\t       <COND (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<SET RMG <GETPT ,HERE ,P?PSEUDO>>\n\t       <SET RMGL <- </ <PTSIZE .RMG> 4> 1>>\n\t       <SET CNT 0>\n\t       <REPEAT ()\n\t\t       <COND (<==? ,P-NAM <GET .RMG <* .CNT 2>>>\n\t\t\t      <SETG LAST-PSEUDO-LOC ,HERE>\n\t\t\t      <PUTP ,PSEUDO-OBJECT\n\t\t\t\t    ,P?ACTION\n\t\t\t\t    <GET .RMG <+ <* .CNT 2> 1>>>\n\t\t\t      <SET FOO\n\t\t\t\t   <BACK <GETPT ,PSEUDO-OBJECT ,P?ACTION> 7>>\n\t\t\t      ;<PUT .FOO 0 <GET ,P-NAM 0>>\n\t\t\t      ;<PUT .FOO 1 <GET ,P-NAM 1>>\n\t\t\t      <COPYT ,P-NAM .FOO 6>\n\t\t\t      <OBJ-FOUND ,PSEUDO-OBJECT .TBL>\n\t\t\t      <RETURN>)\n\t\t             (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<==? <GET .TBL ,P-MATCHLEN> .LEN>\n\t       <SETG P-SLOCBITS -1>\n\t       <SETG P-TABLE .TBL>\n\t       <DO-SL ,GLOBAL-OBJECTS 1 1>\n\t       <SETG P-SLOCBITS .OBITS>\n\t       <COND (<0? <GET .TBL ,P-MATCHLEN>>\n\t\t      <COND (<OR <EQUAL? ,PRSA ,V?LOOK-INSIDE ,V?SEARCH>\n\t\t\t\t <EQUAL? ,PRSA ,V?EXAMINE ,V?FIND ,V?THROUGH>>\n\t\t\t     <DO-SL ,ROOMS 1 1>)>)>)>>"
  },
  "DO-SL": {
   "name": "DO-SL",
   "file": "parser.zil",
   "line": 1208,
   "endLine": 1217,
   "source": "<ROUTINE DO-SL (OBJ BIT1 BIT2)\n\t<COND (<BTST ,P-SLOCBITS <+ .BIT1 .BIT2>>\n\t       <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCALL>)\n\t      (T\n\t       <COND (<BTST ,P-SLOCBITS .BIT1>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCTOP>)\n\t\t     (<BTST ,P-SLOCBITS .BIT2>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCBOT>)\n\t\t     (T\n\t\t      <RTRUE>)>)>>  "
  },
  "SEARCH-LIST": {
   "name": "SEARCH-LIST",
   "file": "parser.zil",
   "line": 1225,
   "endLine": 1252,
   "source": "<ROUTINE SEARCH-LIST (OBJ TBL LVL \"AUX\" FLS NOBJ)\n\t<COND (<SET OBJ <FIRST? .OBJ>>\n\t       <REPEAT ()\n\t\t       <COND (<AND <NOT <==? .LVL ,P-SRCBOT>>\n\t\t\t\t   <GETPT .OBJ ,P?SYNONYM>\n\t\t\t\t   <THIS-IT? .OBJ>>\n\t\t\t      <OBJ-FOUND .OBJ .TBL>)>\n\t\t       <COND (<AND <NOT <FSET? .OBJ ,INVISIBLE>>\n\t\t\t\t   <OR <NOT <==? .LVL ,P-SRCTOP>>\n\t\t\t\t       <FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t       <FSET? .OBJ ,SURFACEBIT>>\n\t\t\t\t   <SET NOBJ <FIRST? .OBJ>>\n\t\t\t\t   <OR <FSET? .OBJ ,OPENBIT>\n\t\t\t\t       <FSET? .OBJ ,TRANSBIT>>>\n\t\t\t      <COND (<AND <==? .LVL ,P-SRCTOP>\n\t\t\t\t\t  <FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t\t  <==? ,P-GETFLAGS ,P-ALL>>\n\t\t\t\t     T)\n\t\t\t\t    (T\n\t\t\t\t     <SET FLS\n\t\t\t\t        <SEARCH-LIST .OBJ\n\t\t\t\t\t\t     .TBL\n\t\t\t\t\t\t<COND (<FSET? .OBJ ,SURFACEBIT>\n\t\t\t\t\t\t       ,P-SRCALL)\n\t\t\t\t\t\t      (<FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t\t\t       ,P-SRCALL)\n\t\t\t\t\t\t      (T ,P-SRCTOP)>>>)>)>\n\t\t       <COND (<SET OBJ <NEXT? .OBJ>>) (T <RETURN>)>>)>> "
  },
  "OBJ-FOUND": {
   "name": "OBJ-FOUND",
   "file": "parser.zil",
   "line": 1254,
   "endLine": 1257,
   "source": "<ROUTINE OBJ-FOUND (OBJ TBL \"AUX\" PTR)\n\t<SET PTR <GET .TBL ,P-MATCHLEN>>\n\t<PUT .TBL <+ .PTR 1> .OBJ>\n\t<PUT .TBL ,P-MATCHLEN <+ .PTR 1>>>"
  },
  "TAKE-CHECK": {
   "name": "TAKE-CHECK",
   "file": "parser.zil",
   "line": 1259,
   "endLine": 1261,
   "source": "<ROUTINE TAKE-CHECK () \n\t<AND <ITAKE-CHECK ,P-PRSO <GETB ,P-SYNTAX ,P-SLOC1>>\n\t     <ITAKE-CHECK ,P-PRSI <GETB ,P-SYNTAX ,P-SLOC2>>>> "
  },
  "ITAKE-CHECK": {
   "name": "ITAKE-CHECK",
   "file": "parser.zil",
   "line": 1263,
   "endLine": 1298,
   "source": "<ROUTINE ITAKE-CHECK (TBL IBITS \"AUX\" PTR OBJ TAKEN)\n\t <COND (<AND <SET PTR <GET .TBL ,P-MATCHLEN>>\n\t\t     <OR <BTST .IBITS ,SHAVE>\n\t\t\t <BTST .IBITS ,STAKE>>>\n\t\t<REPEAT ()\n\t\t\t<COND (<L? <SET PTR <- .PTR 1>> 0> <RETURN>)\n\t\t\t      (T\n\t\t\t       <SET OBJ <GET .TBL <+ .PTR 1>>>\n\t\t\t       <COND (<==? .OBJ ,IT> <SET OBJ ,P-IT-OBJECT>)>\n\t\t\t       <COND (<AND <NOT <HELD? .OBJ>>\n\t\t\t\t\t   <NOT <==? .OBJ ,HANDS>>>\n\t\t\t\t      <SETG PRSO .OBJ>\n\t\t\t\t      <COND (<FSET? .OBJ ,TRYTAKEBIT>\n\t\t\t\t\t     <SET TAKEN T>)\n\t\t\t\t\t    (<NOT <==? ,WINNER ,ADVENTURER>>\n\t\t\t\t\t     <SET TAKEN <>>)\n\t\t\t\t\t    (<AND <BTST .IBITS ,STAKE>\n\t\t\t\t\t\t  <==? <ITAKE <>> T>>\n\t\t\t\t\t     <SET TAKEN <>>)\n\t\t\t\t\t    (T <SET TAKEN T>)>\n\t\t\t\t      <COND (<AND .TAKEN <BTST .IBITS ,SHAVE>>\n\t\t\t\t\t     <COND (<EQUAL? .OBJ\n\t\t\t\t\t\t\t    ,NOT-HERE-OBJECT>\n\t\t\t\t\t\t    <TELL\n\"You don't have that!\" CR>\n\t\t\t\t\t\t    <RFALSE>)>\n\t\t\t\t\t     <TELL \"You don't have the \">\n\t\t\t\t\t     <PRINTD .OBJ>\n\t\t\t\t\t     <TELL \".\" CR>\n\t\t\t\t\t     <THIS-IS-IT .OBJ>\n\t\t\t\t\t     <RFALSE>)\n\t\t\t\t\t    (<AND <NOT .TAKEN>\n\t\t\t\t\t\t  <==? ,WINNER ,ADVENTURER>>\n\t\t\t\t\t     <TELL\n\"(Taking the \" D .OBJ \" first)\" CR>)>)>)>>)\n\t       (T)>>"
  },
  "HERE?": {
   "name": "HERE?",
   "file": "parser.zil",
   "line": 1300,
   "endLine": 1307,
   "source": "<ROUTINE HERE? (CAN)\n\t <REPEAT ()\n\t\t <SET CAN <LOC .CAN>>\n\t\t <COND (<NOT .CAN> <RETURN>)\n\t\t       (<==? .CAN ,HERE> <RTRUE>)>>\n\t <COND (<GLOBAL-IN? .CAN ,HERE> <RTRUE>)\n\t       (<EQUAL? .CAN ,PSEUDO-OBJECT> <RTRUE>)>\n\t <RFALSE>>"
  },
  "HELD?": {
   "name": "HELD?",
   "file": "parser.zil",
   "line": 1310,
   "endLine": 1322,
   "source": "<ROUTINE HELD? (OBJ \"OPTIONAL\" (CONT <>)) ;\"now ULTIMATELY-IN?\"\n\t <COND (<NOT .CONT>\n\t\t<SET CONT ,WINNER>)>\n\t <COND (<NOT .OBJ>\n\t\t<RFALSE>)\n\t       (<IN? .OBJ .CONT>\n\t\t<RTRUE>)\n\t       (<IN? .OBJ ,ROOMS>\n\t\t<RFALSE>)\n\t       ;(<IN? .OBJ ,GLOBAL-OBJECTS>\n\t\t<RFALSE>)\n\t       (T\n\t\t<HELD? <LOC .OBJ> .CONT>)>>"
  },
  "MANY-CHECK": {
   "name": "MANY-CHECK",
   "file": "parser.zil",
   "line": 1330,
   "endLine": 1349,
   "source": "<ROUTINE MANY-CHECK (\"AUX\" (LOSS <>) TMP)\n\t<COND (<AND <G? <GET ,P-PRSO ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC1> ,SMANY>>>\n\t       <SET LOSS 1>)\n\t      (<AND <G? <GET ,P-PRSI ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC2> ,SMANY>>>\n\t       <SET LOSS 2>)>\n\t<COND (.LOSS\n\t       <TELL \"I can't use multiple \">\n\t       <COND (<==? .LOSS 2> <TELL \"in\">)>\n\t       <TELL \"direct objects with \\\"\">\n\t       <SET TMP <GET ,P-ITBL ,P-VERBN>>\n\t       <COND (<0? .TMP> <TELL \"tell\">)\n\t\t     (<OR ,P-OFLAG ,P-MERGED>\n\t\t      <PRINTB <GET .TMP 0>>)\n\t\t     (T\n\t\t      <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>)>\n\t       <TELL \".\\\"\" CR>\n\t       <RFALSE>)\n\t      (T)>>  "
  },
  "LIT?": {
   "name": "LIT?",
   "file": "parser.zil",
   "line": 1364,
   "endLine": 1379,
   "source": "<ROUTINE LIT? (RM \"AUX\" OHERE (LIT <>))\n\t<SETG P-GWIMBIT ,ONBIT>\n\t<SET OHERE ,HERE>\n\t<SETG HERE .RM>\n\t<COND (<FSET? .RM ,ONBIT>\n\t       <SET LIT T>)\n\t      (T\n\t       <PUT ,P-MERGE ,P-MATCHLEN 0>\n\t       <SETG P-TABLE ,P-MERGE>\n\t       <SETG P-SLOCBITS -1>\n\t       <COND (<==? .OHERE .RM> <DO-SL ,WINNER 1 1>)>\n\t       <DO-SL .RM 1 1>\n\t       <COND (<G? <GET ,P-TABLE ,P-MATCHLEN> 0> <SET LIT T>)>)>\n\t<SETG HERE .OHERE>\n\t<SETG P-GWIMBIT 0>\n\t.LIT>"
  },
  "PRSO-PRINT": {
   "name": "PRSO-PRINT",
   "file": "parser.zil",
   "line": 1381,
   "endLine": 1386,
   "source": "<ROUTINE PRSO-PRINT (\"AUX\" PTR)\n\t <COND (<OR ,P-MERGED\n\t\t    <==? <GET <SET PTR <GET ,P-ITBL ,P-NC1>> 0> ,W?IT>>\n\t\t<TELL \" \" D ,PRSO>)\n\t       (T\n\t\t<BUFFER-PRINT .PTR <GET ,P-ITBL ,P-NC1L> <>>)>>"
  },
  "THIS-IT?": {
   "name": "THIS-IT?",
   "file": "parser.zil",
   "line": 1395,
   "endLine": 1410,
   "source": "<ROUTINE THIS-IT? (OBJ \"AUX\" SYNS CNT)\n\t <COND (<FSET? .OBJ ,INVISIBLE>\n\t\t<RFALSE>)\n\t       (<NOT <SET SYNS <GETPT .OBJ ,P?SYNONYM>>>\n\t\t<RFALSE>)>\n\t <COND (<AND ,P-NAM\n\t\t     <NOT <INTBL? ,P-NAM .SYNS </ <PTSIZE .SYNS> 2>>>>\n\t\t<RFALSE>)>\n\t <COND (,P-ADJ\n\t\t<COND (<NOT <SET SYNS <GETPT .OBJ ,P?ADJECTIVE>>> <RFALSE>)\n\t\t      (<NOT <INTBL? ,P-ADJ .SYNS </ <PTSIZE .SYNS> 2>>>\n\t\t       <RFALSE>)>)>\n\t <COND (<AND <NOT <ZERO? ,P-GWIMBIT>>\n\t\t     <NOT <FSET? .OBJ ,P-GWIMBIT>>>\n\t\t<RFALSE>)>\n\t <RTRUE>>"
  },
  "V-VERBOSE": {
   "name": "V-VERBOSE",
   "file": "verbs.zil",
   "line": 11,
   "endLine": 15,
   "source": "<ROUTINE V-VERBOSE ()\n\t <SETG VERBOSE T>\n\t <SETG SUPER-BRIEF <>>\n\t <TELL \"Maximum verbosity.\" CR CR>\n\t <V-LOOK>>"
  },
  "V-BRIEF": {
   "name": "V-BRIEF",
   "file": "verbs.zil",
   "line": 17,
   "endLine": 20,
   "source": "<ROUTINE V-BRIEF ()\n\t <SETG VERBOSE <>>\n\t <SETG SUPER-BRIEF <>>\n\t <TELL \"Brief descriptions.\" CR>>"
  },
  "V-SUPER-BRIEF": {
   "name": "V-SUPER-BRIEF",
   "file": "verbs.zil",
   "line": 22,
   "endLine": 24,
   "source": "<ROUTINE V-SUPER-BRIEF ()\n\t <SETG SUPER-BRIEF T>\n\t <TELL \"Superbrief descriptions.\" CR>>"
  },
  "V-LOOK": {
   "name": "V-LOOK",
   "file": "verbs.zil",
   "line": 26,
   "endLine": 29,
   "source": "<ROUTINE V-LOOK ()\n\t <SETG C-ELAPSED 9>\n\t <COND (<DESCRIBE-ROOM T>\n\t\t<DESCRIBE-OBJECTS T>)>>"
  },
  "V-LOOK-CRETIN": {
   "name": "V-LOOK-CRETIN",
   "file": "verbs.zil",
   "line": 31,
   "endLine": 34,
   "source": "<ROUTINE V-LOOK-CRETIN ()\n\t <TELL\n\"This isn't a primitive two-word-parser adventure game. If you want\nto look AT that object, please say so.\" CR>>"
  },
  "V-FIRST-LOOK": {
   "name": "V-FIRST-LOOK",
   "file": "verbs.zil",
   "line": 36,
   "endLine": 39,
   "source": "<ROUTINE V-FIRST-LOOK ()\n\t <COND (<DESCRIBE-ROOM>\n\t\t<COND (<NOT ,SUPER-BRIEF>\n\t\t       <DESCRIBE-OBJECTS>)>)>>"
  },
  "PRE-EXAMINE": {
   "name": "PRE-EXAMINE",
   "file": "verbs.zil",
   "line": 41,
   "endLine": 50,
   "source": "<ROUTINE PRE-EXAMINE ()\n\t <COND (<AND <NOT <HERE? ,PRSO>>\n\t\t     <NOT <IN? ,PRSO ,GLOBAL-OBJECTS>>\n\t\t     <NOT <EQUAL? ,PRSO ,PSEUDO-OBJECT>>\n\t\t     <NOT <AND <IN? ,PRSO ,LOCAL-GLOBALS>\n\t\t\t       <GLOBAL-IN? ,PRSO ,HERE>>>\n\t\t     <NOT <EQUAL? ,PRSO ,GRUE>>>\n\t\t<TELL \"You can't see any\">\n\t\t<PRSO-PRINT>\n\t\t<TELL \" here!\" CR>)>>\t\t"
  },
  "V-EXAMINE": {
   "name": "V-EXAMINE",
   "file": "verbs.zil",
   "line": 52,
   "endLine": 64,
   "source": "<ROUTINE V-EXAMINE ()\n\t <SETG C-ELAPSED 32>\n\t <COND (<GETP ,PRSO ,P?TEXT>\n\t\t<TELL <GETP ,PRSO ,P?TEXT> CR>)\n\t       (<FSET? ,PRSO ,DOORBIT>\n\t\t<V-LOOK-INSIDE>)\n\t       (<FSET? ,PRSO ,CONTBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <V-LOOK-INSIDE>)\n\t\t      (T\n\t\t       <TELL \"The \" D ,PRSO \" is closed.\" CR>)>)\n\t       (T\n\t\t<TELL \"I see nothing special about the \" D ,PRSO \".\" CR>)>>"
  },
  "DESCRIBE-ROOM": {
   "name": "DESCRIBE-ROOM",
   "file": "verbs.zil",
   "line": 68,
   "endLine": 97,
   "source": "<ROUTINE DESCRIBE-ROOM (\"OPTIONAL\" (LOOK? <>) \"AUX\" V? STR AV)\n\t <SET V? <OR .LOOK? ,VERBOSE>>\n\t <COND (<NOT ,LIT>\n\t\t<TELL \"It is pitch black. You might be eaten by a grue.\" CR>\n\t\t<COND (<EQUAL? ,HERE ,TRANSPORTATION-SUPPLY>\n\t\t       <TELL \"There is light to the south.\" CR>)>\n\t\t<RETURN <>>)>\n\t <COND (<NOT <FSET? ,HERE ,TOUCHBIT>>\n\t\t<FSET ,HERE ,TOUCHBIT>\n\t\t<SET V? T>)>\n\t <COND (<IN? ,HERE ,ROOMS>\n\t\t<TELL D ,HERE>\n\t\t<COND (<FSET? <LOC ,ADVENTURER> ,VEHBIT>\n\t\t       <TELL \", in the \" D <LOC ,ADVENTURER>>)>\n\t\t<CRLF>)>\n\t <COND (<OR .LOOK? <NOT ,SUPER-BRIEF>>\n\t\t<SET AV <LOC ,ADVENTURER>>\n\t\t;<COND (<FSET? .AV ,VEHBIT>\n\t\t       <TELL \"(You are in the \" D .AV \".)\" CR>)>\n\t\t<COND (<AND .V? <APPLY <GETP ,HERE ,P?ACTION> ,M-LOOK>>\n\t\t       <RTRUE>)\n\t\t      (<AND .V? <SET STR <GETP ,HERE ,P?LDESC>>>\n\t\t       <TELL .STR CR>)\n\t\t      (T \n\t\t       <APPLY <GETP ,HERE ,P?ACTION> ,M-FLASH>)>\n\t\t<COND (<AND <NOT <EQUAL? ,HERE .AV>>\n\t\t\t    <FSET? .AV ,VEHBIT>>\n\t\t       <APPLY <GETP .AV ,P?ACTION> ,M-LOOK>)>)>\n\n\t T>"
  },
  "DESCRIBE-OBJECTS": {
   "name": "DESCRIBE-OBJECTS",
   "file": "verbs.zil",
   "line": 99,
   "endLine": 104,
   "source": "<ROUTINE DESCRIBE-OBJECTS (\"OPTIONAL\" (V? <>))\n\t <COND (,LIT\n\t\t<COND (<FIRST? ,HERE>\n\t\t       <PRINT-CONT ,HERE <SET V? <OR .V? ,VERBOSE>> -1>)>)\n\t       (T\n\t\t<TELL \"You can't see anything in the dark.\" CR>)>>"
  },
  "DESCRIBE-OBJECT": {
   "name": "DESCRIBE-OBJECT",
   "file": "verbs.zil",
   "line": 109,
   "endLine": 141,
   "source": "<ROUTINE DESCRIBE-OBJECT (OBJ V? LEVEL \"AUX\" (STR <>) AV)\n\t <COND (<AND <0? .LEVEL>\n\t\t     <APPLY <GETP .OBJ ,P?DESCFCN> ,M-OBJDESC>>\n\t\t<RTRUE>)\n\t       (<EQUAL? .OBJ ,SPOUT-PLACED>\n\t\t<RTRUE>)\n\t       (<AND <0? .LEVEL>\n\t\t     <OR <AND <NOT <FSET? .OBJ ,TOUCHBIT>>\n\t\t\t      <SET STR <GETP .OBJ ,P?FDESC>>>\n\t\t\t <SET STR <GETP .OBJ ,P?LDESC>>>>\n\t\t<TELL .STR>)\n\t       (<AND <0? .LEVEL>>\n\t\t<TELL \"There is \">\n\t\t<COND (<FSET? .OBJ ,VOWELBIT>\n\t\t       <TELL \"an \">)\n\t\t      (T\n\t\t       <TELL \"a \">)>\n\t\t<TELL D .OBJ \" here.\">)\n\t       (T\n\t\t<TELL <GET ,INDENTS .LEVEL>>\n\t\t<COND (<FSET? .OBJ ,VOWELBIT>\n\t\t       <TELL \"An \">)\n\t\t      (T\n\t\t       <TELL \"A \">)>\n\t\t<TELL D .OBJ>\n\t\t<COND (<FSET? .OBJ ,WORNBIT> <TELL \" (being worn)\">)>)>\n\t <COND (<AND <0? .LEVEL>\n\t\t     <SET AV <LOC ,ADVENTURER>>\n\t\t     <FSET? .AV ,VEHBIT>>\n\t\t<TELL \" (outside the \" D .AV \")\">)>\n\t <CRLF>\n\t <COND (<AND <SEE-INSIDE? .OBJ> <FIRST? .OBJ>>\n\t\t<PRINT-CONT .OBJ .V? .LEVEL>)>>"
  },
  "PRINT-CONT": {
   "name": "PRINT-CONT",
   "file": "verbs.zil",
   "line": 143,
   "endLine": 192,
   "source": "<ROUTINE PRINT-CONT (OBJ \"OPTIONAL\" (V? <>) (LEVEL 0)\n\t\t     \"AUX\" Y 1ST? AV STR (PV? <>) (INV? <>))\n\t <COND (<NOT <SET Y <FIRST? .OBJ>>>\n\t\t<RTRUE>)>\n\t <COND (<AND <SET AV <LOC ,ADVENTURER>>\n\t\t     <FSET? .AV ,VEHBIT>>\n\t\tT)\n\t       (T\n\t\t<SET AV <>>)>\n\t <SET 1ST? T>\n\t <COND (<EQUAL? ,ADVENTURER .OBJ <LOC .OBJ>>\n\t\t<SET INV? T>)\n\t       (T\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT .Y>  \n\t\t\t       <RETURN>)   ;<RETURN <NOT .1ST?> arb>\n\t\t\t      (<EQUAL? .Y .AV> <SET PV? T>)\n\t\t\t      (<EQUAL? .Y ,WINNER>)\n\t\t\t      (<AND <NOT <FSET? .Y ,INVISIBLE>>\n\t\t\t\t    <NOT <FSET? .Y ,TOUCHBIT>>\n\t\t\t\t    <SET STR <GETP .Y ,P?FDESC>>>\n\t\t\t       <COND (<NOT <FSET? .Y ,NDESCBIT>>\n\t\t\t\t      <TELL .STR CR>)>\n\t\t\t       <COND (<AND <SEE-INSIDE? .Y>\n\t\t\t\t\t   <NOT <GETP <LOC .Y> ,P?DESCFCN>>\n\t\t\t\t\t   <FIRST? .Y>>\n\t\t\t\t      <PRINT-CONT .Y .V? 0>)>)>\n\t\t\t<SET Y <NEXT? .Y>>>)>\n\t <SET Y <FIRST? .OBJ>>\n\t <REPEAT ()\n\t\t <COND (<NOT .Y>\n\t\t\t<COND (<AND .PV? .AV <FIRST? .AV>>\n\t\t\t       <PRINT-CONT .AV .V? .LEVEL>)>\n\t\t\t<RETURN <NOT .1ST?>>)\n\t\t       (<EQUAL? .Y .AV ,ADVENTURER>)\n\t\t       (<AND <NOT <FSET? .Y ,INVISIBLE>>\n\t\t\t     <OR .INV?\n\t\t\t\t <FSET? .Y ,TOUCHBIT>\n\t\t\t\t <NOT <GETP .Y ,P?FDESC>>>>\n\t\t\t<COND (<NOT <FSET? .Y ,NDESCBIT>>\n\t\t\t       <COND (.1ST?\n\t\t\t\t      <COND (<FIRSTER .OBJ .LEVEL>\n\t\t\t\t\t     <COND (<L? .LEVEL 0>\n\t\t\t\t\t\t    <SET LEVEL 0>)>)>\n\t\t\t\t      <SET LEVEL <+ 1 .LEVEL>>\n\t\t\t\t      <SET 1ST? <>>)>\n\t\t\t       <DESCRIBE-OBJECT .Y .V? .LEVEL>)\n\t\t\t      (<AND <FIRST? .Y> <SEE-INSIDE? .Y>>\n\t\t\t       <PRINT-CONT .Y .V? .LEVEL>)>)>\n\t\t <SET Y <NEXT? .Y>>>>"
  },
  "FIRSTER": {
   "name": "FIRSTER",
   "file": "verbs.zil",
   "line": 194,
   "endLine": 205,
   "source": "<ROUTINE FIRSTER (OBJ LEVEL)\n\t <COND (<EQUAL? .OBJ ,ADVENTURER>\n\t\t<TELL \"You are carrying:\" CR>)\n\t       (<NOT <IN? .OBJ ,ROOMS>>\n\t\t<COND (<G? .LEVEL 0>\n\t\t       <TELL <GET ,INDENTS .LEVEL>>)>\n\t\t<COND (<FSET? .OBJ ,SURFACEBIT>\n\t\t       <TELL \"Sitting on the \" D .OBJ \" is:\" CR>)\n\t\t      (<FSET? .OBJ ,ACTORBIT>\n\t\t       <TELL \"The \" D .OBJ \" is holding:\" CR>)\n\t\t      (T\n\t\t       <TELL \"The \" D .OBJ \" contains:\" CR>)>)>>"
  },
  "STOP": {
   "name": "STOP",
   "file": "verbs.zil",
   "line": 207,
   "endLine": 210,
   "source": "<ROUTINE STOP ()\n\t <SETG P-CONT <>>\n\t <SETG QUOTE-FLAG <>>\n\t <RFATAL>>"
  },
  "SCORE-OBJ": {
   "name": "SCORE-OBJ",
   "file": "verbs.zil",
   "line": 223,
   "endLine": 227,
   "source": "<ROUTINE SCORE-OBJ (OBJ)\n\t <COND (<G? <GETP .OBJ ,P?VALUE> 0>\n\t\t<FSET .OBJ ,TOUCHBIT>\n\t\t<SETG SCORE <+ ,SCORE <GETP .OBJ ,P?VALUE>>>\n\t\t<PUTP .OBJ ,P?VALUE 0>)>>"
  },
  "V-SCORE": {
   "name": "V-SCORE",
   "file": "verbs.zil",
   "line": 229,
   "endLine": 259,
   "source": "<ROUTINE V-SCORE (\"OPTIONAL\" (ASK? T))\n\t <TELL \"Your score \">\n\t <COND (.ASK?\n\t\t<TELL \"would be \">)\n\t       (T\n\t\t<TELL \"is \">)>\n\t <TELL N ,SCORE>\n\t <TELL \" (out of 80 points). It is Day \">\n\t <TELL N, DAY>\n\t <TELL \" of your adventure. Current Galactic Standard Time \">\n\t <COND (<IN? ,CHRONOMETER ,ADVENTURER>\n\t\t<TELL \"(adjusted to your local day-cycle) is \">\n\t\t<COND (<FSET? ,CHRONOMETER ,MUNGEDBIT>\n\t\t       <TELL N ,MUNGED-TIME>)\n\t\t      (T\n\t\t       <TELL N ,INTERNAL-MOVES>)>)\n\t       (T\n\t\t<TELL\n\"is impossible to determine, since you're not wearing your chronometer\">)>\n\t <TELL \".\" CR>\n\t <TELL \"This score gives you the rank of \">\n\t <COND (<EQUAL? ,SCORE 80> <TELL \"Galactic Overlord\">)\n\t       (<G? ,SCORE 72> <TELL \"Cluster Admiral\">)\n\t       (<G? ,SCORE 64> <TELL \"System Captain\">)\n\t       (<G? ,SCORE 48> <TELL \"Planetary Commodore\">)\n\t       (<G? ,SCORE 36> <TELL \"Lieutenant\">)\n\t       (<G? ,SCORE 24> <TELL \"Ensign First Class\">)\n\t       (<G? ,SCORE 12> <TELL \"Space Cadet\">)\n\t       (T <TELL \"Beginner\">)>\n\t <TELL \".\" CR>\n\t ,SCORE>"
  },
  "FINISH": {
   "name": "FINISH",
   "file": "verbs.zil",
   "line": 261,
   "endLine": 295,
   "source": "<ROUTINE FINISH (DIED \"OPTIONAL\" (REPEATING <>) (CNT 0))\n\t <PROG ()\n\t        <CRLF>\n\t\t<COND (<NOT .REPEATING>\n\t\t       <SET REPEATING T>\n\t\t       <V-SCORE>\n\t\t       <COND (.DIED\n\t\t\t      <TELL CR\n\"Oh, well. According to the Treaty of Gishen IV, signed in 8747 GY, all\nadventure game players must be given another chance after dying. In the\ninterests of interstellar peace...\" CR CR>)>)>\n\t \t <TELL\n\"Would you like to restart this game from the beginning, restore a saved\nposition, end this session of the game, or look at hints?|\n(Type RESTART, RESTORE, QUIT, or HINTS):|\n>\">\n\t\t <PUTB ,P-INBUF 0 10> ;\"so you can't input too many characters\"\n\t\t <PUTB ,P-INBUF 1 0>\n\t\t <READ ,P-INBUF ,P-LEXV>\n\t\t <PUTB ,P-INBUF 0 80>\n\t\t <COND (<EQUAL? <GET ,P-LEXV 1> ,W?RESTART>\n\t                <RESTART>\n\t\t        <TELL \"Failed.\" CR>\n\t\t        <AGAIN>)\n\t       \t       (<AND <EQUAL? <GET ,P-LEXV 1> ,W?RESTORE>\n\t\t      \t     <NOT <RESTORE>>>\n\t\t        <TELL \"Failed.\" CR>\n\t\t        <AGAIN>)\n\t       \t       (<OR <EQUAL? <GET ,P-LEXV 1> ,W?QUIT ,W?Q>\n\t\t\t    <G? .CNT 10>>\n\t\t        <QUIT>)\n\t\t       (<EQUAL? <GET ,P-LEXV 1> ,W?HINTS ,W?HINT>\n\t\t        <V-HINT>\n\t\t        <AGAIN>)>\n\t\t <AGAIN>>>"
  },
  "V-QUIT": {
   "name": "V-QUIT",
   "file": "verbs.zil",
   "line": 297,
   "endLine": 307,
   "source": "<ROUTINE V-QUIT ;(\"OPTIONAL\" (ASK? T) \"AUX\" SCOR) ()\n\t <V-SCORE>\n\t <COND (<AND <IN? ,FLOYD ,HERE>\n\t\t     <FSET? ,FLOYD ,RLANDBIT>>\n\t\t<SETG FLOYD-SPOKE T>\n\t\t<TELL CR \"Floyd grins impishly. \\\"Giving up, huh?\\\"\" CR>)>\n\t <TELL CR \"Do you wish to leave the game? (Y is affirmative): \">\n\t <COND (<YES?>\n\t\t<QUIT>)\n\t       (T\n\t\t<TELL \"Ok.\" CR>)>>"
  },
  "YES?": {
   "name": "YES?",
   "file": "verbs.zil",
   "line": 309,
   "endLine": 318,
   "source": "<ROUTINE YES? ()\n\t <PUTB ,P-INBUF 0 10> ;\"so you can't input too many characters\"\n\t <PRINTI \">\">\n\t <PUTB ,P-INBUF 1 0>\n\t <READ ,P-INBUF ,P-LEXV>\n\t <PUTB ,P-INBUF 0 80>\n\t <COND (<EQUAL? <GET ,P-LEXV 1> ,W?YES ,W?Y>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "V-$ID": {
   "name": "V-$ID",
   "file": "verbs.zil",
   "line": 320,
   "endLine": 326,
   "source": "<ROUTINE V-$ID ()\n\t <TELL \"Interpreter \">\n\t <PRINTN <GETB 0 30>>\n\t <TELL \" Version \">\n\t <PRINTC <GETB 0 31>>\n\t <CRLF>\n\t <RTRUE>>"
  },
  "V-VERSION": {
   "name": "V-VERSION",
   "file": "verbs.zil",
   "line": 328,
   "endLine": 343,
   "source": "<ROUTINE V-VERSION (\"AUX\" (CNT 17) V)\n\t <SET V <BAND <GET 0 1> *3777*>>\n\t <TELL \n\"PLANETFALL|\nInfocom interactive fiction - a science fiction story|\nCopyright (c) 1983, 1988 by Infocom, Inc. All rights reserved.|\nPLANETFALL is a registered trademark of Infocom, Inc.|\nRelease \" N .V \" / Serial number \">\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> 23>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<PRINTC <GETB 0 .CNT>>)>>\n\t <TELL \" / \">\n\t <V-$ID>\n\t <CRLF>>"
  },
  "JIGS-UP": {
   "name": "JIGS-UP",
   "file": "verbs.zil",
   "line": 348,
   "endLine": 352,
   "source": "<ROUTINE JIGS-UP (DESC \"OPTIONAL\" (PLAYER? <>))\n \t <TELL .DESC CR>\n\t <TELL CR\n\"    ****  You have died  ****\" CR>\n\t <FINISH T>>"
  },
  "V-RESTORE": {
   "name": "V-RESTORE",
   "file": "verbs.zil",
   "line": 354,
   "endLine": 365,
   "source": "<ROUTINE V-RESTORE ()\n\t <COND (<AND <IN? ,FLOYD ,HERE>\n\t\t     <FSET? ,FLOYD ,RLANDBIT>>\n\t\t<SETG FLOYD-SPOKE T>\n\t\t<TELL\n\"Floyd looks disappointed, but understanding. \\\"That part of the game was more\nfun than this part,\\\" he admits.\" CR CR>)>\n\t <COND (<RESTORE>\n\t\t<TELL \"Ok.\" CR>\n\t\t;<V-FIRST-LOOK>)\n\t       (T\n\t\t<TELL \"Failed.\" CR>)>>"
  },
  "V-SAVE": {
   "name": "V-SAVE",
   "file": "verbs.zil",
   "line": 367,
   "endLine": 390,
   "source": "<ROUTINE V-SAVE (\"AUX\" X)\n\t <COND (<AND <IN? ,FLOYD ,HERE>\n\t\t     <FSET? ,FLOYD ,RLANDBIT>>\n\t\t<SETG FLOYD-SPOKE T>\n\t\t<TELL\n\"Floyd's eyes light up. \\\"Oh boy! Are we gonna try something\ndangerous now?\\\"\" CR CR>)>\n\t <SETG P-CONT <>> ;\"flush anything on input line after SAVE\"\n\t <SETG QUOTE-FLAG <>>\n\t <SET X <SAVE>>\n\t <COND (<BTST <LOWCORE FLAGS> 4>\n\t\t<V-$REFRESH>)\n\t       (<EQUAL? .X 2>\n\t\t<INIT-STATUS-LINE>)>\n\t <COND (<ZERO? .X>\n\t\t<TELL \"Failed.\" CR>\n\t\t<RFATAL>)\n\t       (T\n\t        <TELL \"Ok.\" CR>\n\t\t<COND (<NOT <EQUAL? .X 1>>\n\t\t       <PERFORM ,V?LOOK>)>\n\t\t;<COND (<NOT <EQUAL? .X 1>>\n\t\t       <PERFORM ,V?LOOK>)>\n\t\t<RTRUE>)>>"
  },
  "V-$REFRESH": {
   "name": "V-$REFRESH",
   "file": "verbs.zil",
   "line": 392,
   "endLine": 396,
   "source": "<ROUTINE V-$REFRESH ()\n\t <LOWCORE FLAGS <BAND <LOWCORE FLAGS> <BCOM 4>>>\n\t <CLEAR -1>\n\t <INIT-STATUS-LINE>\n\t <RTRUE>>"
  },
  "V-RESTART": {
   "name": "V-RESTART",
   "file": "verbs.zil",
   "line": 398,
   "endLine": 409,
   "source": "<ROUTINE V-RESTART ()\n\t <V-SCORE T>\n\t <COND (<AND <IN? ,FLOYD ,HERE>\n\t\t     <FSET? ,FLOYD ,RLANDBIT>>\n\t\t<SETG FLOYD-SPOKE T>\n\t\t<TELL \"Floyd looks sad. \\\"Going away?\\\" he asks.\" CR>)>\n\t <TELL CR \"Do you wish to restart? (Y is affirmative): \">\n\t <COND (<YES?>\n\t\t<TELL \"Restarting.\" CR>\n\t\t<RESTART>\n\t\t<TELL \"Failed.\" CR>\n\t\t;<TELL ,FAILED>)>>"
  },
  "V-WALK-AROUND": {
   "name": "V-WALK-AROUND",
   "file": "verbs.zil",
   "line": 428,
   "endLine": 429,
   "source": "<ROUTINE V-WALK-AROUND ()\n\t <USE-DIRECTIONS>>"
  },
  "V-WALK-TO": {
   "name": "V-WALK-TO",
   "file": "verbs.zil",
   "line": 445,
   "endLine": 450,
   "source": "<ROUTINE V-WALK-TO ()\n\t <COND (<OR <IN? ,PRSO ,HERE>\n\t\t    <GLOBAL-IN? ,PRSO ,HERE>>\n\t\t<TELL \"It's here!\" CR>)\n\t       (T\n\t\t<USE-DIRECTIONS>)>>"
  },
  "V-WALK": {
   "name": "V-WALK",
   "file": "verbs.zil",
   "line": 452,
   "endLine": 499,
   "source": "<ROUTINE V-WALK (\"AUX\" PT PTS STR OBJ RM TEMP-ELAPSED)\n\t <COND (<NOT ,P-WALK-DIR>\n\t\t<PERFORM ,V?WALK-TO ,PRSO>\n\t\t<RTRUE>)\n\t       (<SET PT <GETPT ,HERE ,PRSO>>\n\t\t<SET TEMP-ELAPSED <GET <GETP ,HERE ,P?C-MOVE> \n\t\t\t\t       <- ,PRSO ,LOW-DIRECTION>>>\n\t\t<COND (<EQUAL? .TEMP-ELAPSED 0>\n\t\t       <SET TEMP-ELAPSED ,DEFAULT-MOVE>)>\n\t\t<COND (<EQUAL? <SET PTS <PTSIZE .PT>> ,UEXIT>\n\t\t       <SETG C-ELAPSED .TEMP-ELAPSED>\n\t\t       <GOTO <GET .PT ,REXIT>>)\n\t\t      (<EQUAL? .PTS ,NEXIT>\n\t\t       <TELL <GET .PT ,NEXITSTR> CR>\n\t\t       <RFATAL>)\n\t\t      (<EQUAL? .PTS ,FEXIT>\n\t\t       <COND (<SET RM <APPLY <GET .PT ,FEXITFCN>>>\n\t\t\t      <GOTO .RM>)\n\t\t\t     (T\n\t\t\t      <RFATAL>)>)\n\t\t      (<EQUAL? .PTS ,CEXIT>\n\t\t       <COND (<VALUE <GETB .PT ,CEXITFLAG>>\n\t\t\t      <SETG C-ELAPSED .TEMP-ELAPSED>\n\t\t\t      <GOTO <GET .PT ,REXIT>>)\n\t\t\t     (<SET STR <GET .PT ,CEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <TELL \"You can't go that way.\" CR>\n\t\t\t      <RFATAL>)>)\n\t\t      (<EQUAL? .PTS ,DEXIT>\n\t\t       <COND (<FSET? <SET OBJ <GET .PT ,DEXITOBJ>> ,OPENBIT>\n\t\t\t      <SETG C-ELAPSED .TEMP-ELAPSED>\n\t\t\t      <GOTO <GET .PT ,REXIT>>)\n\t\t\t     (<SET STR <GET .PT ,DEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <TELL \"The \" D .OBJ \" is closed.\" CR>\n\t\t\t      <THIS-IS-IT .OBJ>\n\t\t\t      <RFATAL>)>)>)\n\t       (<AND <NOT ,LIT>\n\t\t     <PROB 75>>\n\t\t<JIGS-UP\n\"Oh, no! You have walked into the slavering fangs of a lurking grue!\">)\n\t       (T\n\t\t<TELL \"You can't go that way.\" CR>\n\t\t<RFATAL>)>>"
  },
  "V-INVENTORY": {
   "name": "V-INVENTORY",
   "file": "verbs.zil",
   "line": 501,
   "endLine": 506,
   "source": "<ROUTINE V-INVENTORY ()\n\t <SETG C-ELAPSED 18>\n\t <COND (<FIRST? ,ADVENTURER>\n\t\t<PRINT-CONT ,ADVENTURER>)\n\t       (T\n\t\t<TELL \"You are empty-handed.\" CR>)>>"
  },
  "PRE-TAKE": {
   "name": "PRE-TAKE",
   "file": "verbs.zil",
   "line": 519,
   "endLine": 546,
   "source": "<ROUTINE PRE-TAKE ()\n\t <COND (<IN? ,PRSO ,ADVENTURER>\n\t\t<TELL \"You already have it.\" CR>)\n\t       (<AND <EQUAL? ,PRSO ,GOOD-BOARD>\n\t\t     <FSET? ,GOOD-BOARD ,NDESCBIT>>\n\t\t<RFALSE>)\n\t       (<EQUAL? ,PSEUDO-OBJECT ,PRSO>\n\t\t<RFALSE>)                     ;\"arb\"\n\t       (<AND <NOT <EQUAL? <LOC ,PRSO> ,GLOBAL-OBJECTS>>   ;\"arb\" \n\t\t     <FSET? <LOC ,PRSO> ,CONTBIT>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<TELL \"You can't reach into a closed container.\" CR>\n\t\t<RTRUE>)\n\t       (,PRSI\n\t\t<COND (<NOT <EQUAL? ,PRSI <LOC ,PRSO>>>\n\t\t       <COND (<AND <EQUAL? ,PRSO ,KEY>\n\t\t\t\t   <NOT <FSET? ,KEY ,TOUCHBIT>>>\n\t\t\t      <RFALSE>)\n\t\t\t     (<AND <EQUAL? ,PRSO ,CELERY>\n\t\t\t\t   <EQUAL? ,PRSI ,AMBASSADOR>>\n\t\t\t      <RFALSE>)\n\t\t\t     (T\n\t\t\t      <TELL \"It's not in that!\" CR>)>)\n\t\t      (T\n\t\t       <SETG PRSI <>>\n\t\t       <RFALSE>)>)\n\t       (<EQUAL? ,PRSO <LOC ,ADVENTURER>>\n\t\t<TELL \"You are in it, asteroid-brain!\" CR>)>>"
  },
  "V-TAKE": {
   "name": "V-TAKE",
   "file": "verbs.zil",
   "line": 548,
   "endLine": 550,
   "source": "<ROUTINE V-TAKE ()\n\t <COND (<EQUAL? <ITAKE> T>\n\t\t<TELL \"Taken.\" CR>)>>"
  },
  "TRYTAKE": {
   "name": "TRYTAKE",
   "file": "verbs.zil",
   "line": 556,
   "endLine": 564,
   "source": "<ROUTINE TRYTAKE ()\n\t <COND (<IN? ,PRSO ,WINNER>\n\t\t<RTRUE>)\n\t       (<AND <FSET? ,PRSO ,TRYTAKEBIT>\n\t\t     <GETP ,PRSO ,P?ACTION>>\n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<ITAKE>)>>"
  },
  "ITAKE": {
   "name": "ITAKE",
   "file": "verbs.zil",
   "line": 566,
   "endLine": 611,
   "source": "<ROUTINE ITAKE (\"OPTIONAL\" (VB T) \"AUX\" CNT OBJ)\n\t <COND (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t\t<COND (.VB\n\t\t       <TELL <PICK-ONE ,YUKS> CR>)>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? <LOC ,PRSO> ,ADVENTURER>>\n\t\t     <G? <+ <WEIGHT ,PRSO> <WEIGHT ,ADVENTURER>>\n\t\t\t ,LOAD-ALLOWED>>\n\t\t<COND (.VB\n\t\t       <TELL \"Your load is too heavy.\" CR>)>\n\t\t<RFATAL>)\n\t       (<AND <G? <SET CNT <CCOUNT ,ADVENTURER>> ,FUMBLE-NUMBER>\n\t\t     <PROB <* .CNT ,FUMBLE-PROB>>>\n\t\t <SET OBJ <FIRST? ,ADVENTURER>>\n\t\t <REPEAT ()\n\t\t\t<COND (<FSET? .OBJ ,WORNBIT>\n\t\t\t       <SET OBJ <NEXT? .OBJ>>)\n\t\t\t      (T\n\t\t\t       <RETURN>)>>\n\t\t;\"This must go!  Chomping compiler strikes again\"\n\t\t<TELL\n\"Oh, no. The \" D .OBJ \" slips from your arms while taking the \" D ,PRSO\n\" and both tumble to the ground.\" CR>\n\t\t<COND (<AND <EQUAL? ,FLASK .OBJ ,PRSO>\n\t\t\t    <IN? ,CHEMICAL-FLUID ,FLASK>>\n\t\t       <REMOVE ,CHEMICAL-FLUID>\n\t\t       <TELL\n\"Unfortunately, the chemical spills out of the flask and evaporates.\" CR>)>\n\t        <COND (<AND <EQUAL? ,CANTEEN .OBJ ,PRSO>\n\t\t\t    <IN? ,HIGH-PROTEIN ,CANTEEN>\n\t\t\t    <FSET? ,CANTEEN ,OPENBIT>>\n\t\t       <REMOVE ,HIGH-PROTEIN>\n\t\t       <TELL\n\"To make matters worse, the high-protein liquid spills all over\nthe place and then evaporates.\" CR>)>\n\t\t<MOVE .OBJ ,HERE>\n\t\t<MOVE ,PRSO ,HERE>\n\t\t<RFATAL>)\n\t       (T\n\t\t<MOVE ,PRSO ,ADVENTURER>\n\t\t<FCLEAR ,PRSO ,NDESCBIT>\n\t\t<SCORE-OBJ ,PRSO>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<COND (<EQUAL? ,PRSO ,SPOUT-PLACED>\n\t\t       <SETG SPOUT-PLACED ,GROUND>)>\n\t\t<RTRUE>)>>"
  },
  "PRE-PUT": {
   "name": "PRE-PUT",
   "file": "verbs.zil",
   "line": 613,
   "endLine": 620,
   "source": "<ROUTINE PRE-PUT ()\n\t <COND (<NOT ,PRSO>\n\t\t<RFALSE>)>\n\t <COND (<FSET? ,PRSO ,WORNBIT>\n\t\t<TELL \"You can't while you're wearing it.\" CR>)\n\t       (<OR <IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t    <NOT <FSET? ,PRSO ,TAKEBIT>>>\n\t\t<TELL \"Nice try.\" CR>)>>"
  },
  "V-PUT": {
   "name": "V-PUT",
   "file": "verbs.zil",
   "line": 622,
   "endLine": 650,
   "source": "<ROUTINE V-PUT ()\n\t <COND (<OR <FSET? ,PRSI ,OPENBIT>\n\t\t    <OPENABLE? ,PRSI>\n\t\t    <FSET? ,PRSI ,VEHBIT>>)\n\t       (T\n\t\t<TELL \"You can't do that.\" CR>\n\t\t<RTRUE>)>\n\t <COND (<NOT <FSET? ,PRSI ,OPENBIT>>\n\t\t<TELL \"The \" D ,PRSI \" isn't open.\" CR>)\n\t       (<EQUAL? ,PRSI ,PRSO>\n\t\t<TELL \"How can you do that?\" CR>)\n\t       (<IN? ,PRSO ,PRSI>\n\t\t<TELL \"The \" D ,PRSO \" is already in the \" D ,PRSI \".\" CR>)\n\t       (<IN? ,PRSI ,PRSO>\n\t\t<TELL\n\"How can you put the \" D ,PRSO \" in the \" D ,PRSI\n\" when the \" D ,PRSI \" is already in the \" D ,PRSO \"?\" CR>)\n\t       (<G? <- <+ <WEIGHT ,PRSI> <WEIGHT ,PRSO>>\n\t\t       <GETP ,PRSI ,P?SIZE>>\n\t\t    <GETP ,PRSI ,P?CAPACITY>>\n\t\t<TELL \"There's no room.\" CR>)\n\t       (<AND <NOT <HELD? ,PRSO>>\n\t\t     <NOT <TRYTAKE>>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<SCORE-OBJ ,PRSO>\n\t\t<MOVE ,PRSO ,PRSI>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<TELL \"Done.\" CR>)>>"
  },
  "V-SLIDE": {
   "name": "V-SLIDE",
   "file": "verbs.zil",
   "line": 652,
   "endLine": 653,
   "source": "<ROUTINE V-SLIDE ()\n\t <TELL <PICK-ONE ,YUKS> CR>>"
  },
  "PRE-GIVE": {
   "name": "PRE-GIVE",
   "file": "verbs.zil",
   "line": 655,
   "endLine": 657,
   "source": "<ROUTINE PRE-GIVE ()\n\t <COND (<NOT <HELD? ,PRSO>>\n\t\t<NOT-HOLDING>)>>"
  },
  "PRE-SGIVE": {
   "name": "PRE-SGIVE",
   "file": "verbs.zil",
   "line": 659,
   "endLine": 661,
   "source": "<ROUTINE PRE-SGIVE ()\n\t <PERFORM ,V?GIVE ,PRSI ,PRSO>\n\t <RTRUE>>"
  },
  "V-GIVE": {
   "name": "V-GIVE",
   "file": "verbs.zil",
   "line": 663,
   "endLine": 674,
   "source": "<ROUTINE V-GIVE ()\n\t <COND (<NOT <FSET? ,PRSI ,ACTORBIT>>\n\t\t<TELL \"You can't give \">\n\t\t<A-AN>\n\t\t<TELL D ,PRSO \" to \">\n\t\t<COND (<FSET? ,PRSI ,VOWELBIT>\n\t\t       <TELL \"an \">)\n\t\t      (T\n\t\t       <TELL \"a \">)>\n\t\t<TELL D ,PRSI \"!\" CR>)\n\t       (T\n\t\t<TELL \"The \" D ,PRSI \" declines your offer.\" CR>)>>"
  },
  "V-SGIVE": {
   "name": "V-SGIVE",
   "file": "verbs.zil",
   "line": 676,
   "endLine": 677,
   "source": "<ROUTINE V-SGIVE ()\n\t <TELL \"Foo!\" CR>>"
  },
  "V-DROP": {
   "name": "V-DROP",
   "file": "verbs.zil",
   "line": 679,
   "endLine": 681,
   "source": "<ROUTINE V-DROP ()\n\t <COND (<IDROP>\n\t\t<TELL \"Dropped.\" CR>)>>"
  },
  "V-THROW": {
   "name": "V-THROW",
   "file": "verbs.zil",
   "line": 683,
   "endLine": 685,
   "source": "<ROUTINE V-THROW ()\n\t <COND (<IDROP>\n\t\t<TELL \"Thrown.\" CR>)>>"
  },
  "IDROP": {
   "name": "IDROP",
   "file": "verbs.zil",
   "line": 687,
   "endLine": 700,
   "source": "<ROUTINE IDROP ()\n\t <COND (<NOT <HELD? ,PRSO>>\n\t\t<TELL \"You're not carrying the \" D ,PRSO \".\" CR>\n\t\t<RFALSE>)\n\t       (<FSET? ,PRSO ,WORNBIT>\n\t\t<TAKE-IT-OFF>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? ,PRSO ,WINNER>>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<TELL \"The \" D ,PRSO \" is closed.\" CR>\n\t\t<RFALSE>)\n\t       (T\n\t\t<MOVE ,PRSO ,HERE>\n\t\t<RTRUE>)>>"
  },
  "V-OPEN": {
   "name": "V-OPEN",
   "file": "verbs.zil",
   "line": 705,
   "endLine": 731,
   "source": "<ROUTINE V-OPEN (\"AUX\" F STR)\n\t <COND (<AND <NOT <FSET? ,PRSO ,CONTBIT>>\n\t\t     <NOT <FSET? ,PRSO ,DOORBIT>>>\n\t\t<TELL\n\"You must be very clever to do that to the \" D ,PRSO \".\" CR>)\n\t       (<OR <FSET? ,PRSO ,DOORBIT>\n\t\t    <NOT <EQUAL? <GETP ,PRSO ,P?CAPACITY> 0>>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <ALREADY \"open\">)\n\t\t      (T\n\t\t       <FSET ,PRSO ,OPENBIT>\n\t\t       <COND (<FSET? ,PRSO ,DOORBIT>\n\t\t\t      <TELL \"The \" D ,PRSO \" is now open.\" CR>)\n\t\t\t     (<OR <NOT <FIRST? ,PRSO>>\n\t\t\t\t  <FSET? ,PRSO ,TRANSBIT>>\n\t\t\t      <TELL \"Opened.\" CR>)\n\t\t\t     (<AND <SET F <FIRST? ,PRSO>>\n\t\t\t\t   <NOT <NEXT? .F>>\n\t\t\t\t   <SET STR <GETP .F ,P?FDESC>>>\n\t\t\t      <TELL \"The \" D ,PRSO \" opens.\" CR>\n\t\t\t      <TELL .STR CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"Opening the \" D ,PRSO \" reveals \">\n\t\t\t      <PRINT-CONTENTS ,PRSO>\n\t\t\t      <TELL \".\" CR>)>)>)\n\t       (T\n\t\t<TELL \"The \" D ,PRSO \" cannot be opened.\" CR>)>>"
  },
  "V-OPEN-WITH": {
   "name": "V-OPEN-WITH",
   "file": "verbs.zil",
   "line": 733,
   "endLine": 738,
   "source": "<ROUTINE V-OPEN-WITH ()\n\t <COND (<EQUAL? ,PRSI ,HANDS>\n\t\t<PERFORM ,V?OPEN ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"That doesn't work.\" CR>)>>"
  },
  "PRINT-CONTENTS": {
   "name": "PRINT-CONTENTS",
   "file": "verbs.zil",
   "line": 740,
   "endLine": 762,
   "source": "<ROUTINE PRINT-CONTENTS (OBJ \"AUX\" F N (1ST? T) (IT? <>) (TWO? <>))\n\t <COND (<SET F <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<SET N <NEXT? .F>>\n\t\t\t<COND (.1ST?\n\t\t\t       <SET 1ST? <>>)\n\t\t\t      (T\n\t\t\t       <TELL \", \">\n\t\t\t       <COND (<NOT .N>\n\t\t\t\t      <TELL \"and \">)>)>\n\t\t\t<TELL \"a \" D .F>\n\t\t\t<COND (<AND <NOT .IT?>\n\t\t\t\t    <NOT .TWO?>>\n\t\t\t       <SET IT? .F>)\n\t\t\t      (T\n\t\t\t       <SET TWO? T>\n\t\t\t       <SET IT? <>>)>\n\t\t\t<SET F .N>\n\t\t\t<COND (<NOT .F>\n\t\t\t       <COND (<AND .IT?\n\t\t\t\t\t   <NOT .TWO?>>\n\t\t\t\t      <THIS-IS-IT .IT?>)>\n\t\t\t       <RTRUE>)>>)>>"
  },
  "V-CLOSE": {
   "name": "V-CLOSE",
   "file": "verbs.zil",
   "line": 764,
   "endLine": 779,
   "source": "<ROUTINE V-CLOSE ()\n\t <COND (<AND <NOT <FSET? ,PRSO ,CONTBIT>>\n\t\t    <NOT <FSET? ,PRSO ,DOORBIT>>>\n\t\t<TELL \"You can't do that to \">\n\t\t<A-AN>\n\t\t<TELL D ,PRSO \".\" CR>)\n\t       (<AND <NOT <FSET? ,PRSO ,SURFACEBIT>>\n\t\t     <OR <NOT <EQUAL? <GETP ,PRSO ,P?CAPACITY> 0>>\n\t\t\t <FSET? ,PRSO ,DOORBIT>>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <FCLEAR ,PRSO ,OPENBIT>\n\t\t       <TELL \"Closed.\" CR>)\n\t\t      (T\n\t\t       <ALREADY \"closed\">)>)\n\t       (T\n\t\t<TELL \"You cannot close that.\" CR>)>>"
  },
  "CCOUNT": {
   "name": "CCOUNT",
   "file": "verbs.zil",
   "line": 781,
   "endLine": 787,
   "source": "<ROUTINE CCOUNT (OBJ \"AUX\" (CNT 0) X)\n\t <COND (<SET X <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<SET CNT <+ .CNT 1>>\n\t\t\t<COND (<NOT <SET X <NEXT? .X>>>\n\t\t\t       <RETURN>)>>)>\n\t .CNT>"
  },
  "WEIGHT": {
   "name": "WEIGHT",
   "file": "verbs.zil",
   "line": 791,
   "endLine": 797,
   "source": "<ROUTINE WEIGHT (OBJ \"AUX\" CONT (WT 0))\n\t <COND (<SET CONT <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT <FSET? .CONT ,WORNBIT>>\n\t\t\t       <SET WT <+ .WT <WEIGHT .CONT>>>)>\n\t\t\t<COND (<NOT <SET CONT <NEXT? .CONT>>> <RETURN>)>>)>\n\t <+ .WT <GETP .OBJ ,P?SIZE>>>"
  },
  "COPR-NOTICE": {
   "name": "COPR-NOTICE",
   "file": "verbs.zil",
   "line": 799,
   "endLine": 804,
   "source": "<ROUTINE COPR-NOTICE (STR)\n\t <DIROUT ,D-SCREEN-OFF>\n\t <TELL CR \"Here \" .STR \"s a transcript of interaction with\" CR>\n\t <V-VERSION>\n\t <DIROUT ,D-SCREEN-ON>\n\t <RTRUE>>"
  },
  "V-SCRIPT": {
   "name": "V-SCRIPT",
   "file": "verbs.zil",
   "line": 806,
   "endLine": 817,
   "source": "<ROUTINE V-SCRIPT ()\n\t<COND (<AND <IN? ,FLOYD ,HERE>\n\t\t    <FSET? ,FLOYD ,RLANDBIT>>\n\t       <SETG FLOYD-SPOKE T>\n\t       <TELL\n\"Floyd hops around excitedly. \\\"Oh boy! I've never seen my name in print\nbefore!\\\"\" CR CR>)>\n\t<PRINT \"[Transcript o\">\n\t<TELL \"n.]\" CR>\n\t<DIROUT ,D-PRINTER-ON>\n\t<COPR-NOTICE \"begins\">\n\t<RTRUE>>"
  },
  "V-UNSCRIPT": {
   "name": "V-UNSCRIPT",
   "file": "verbs.zil",
   "line": 819,
   "endLine": 830,
   "source": "<ROUTINE V-UNSCRIPT ()\n\t<COND (<AND <IN? ,FLOYD ,HERE>\n\t\t    <FSET? ,FLOYD ,RLANDBIT>>\n\t       <SETG FLOYD-SPOKE T>\n\t       <TELL\n\"\\\"Can I have a copy of the printout?\\\" asks Floyd,\nlooking up at you.\" CR CR>)>\n\t<COPR-NOTICE \"ends\">\n\t<DIROUT ,D-PRINTER-OFF>\n\t<PRINT \"[Transcript o\">\n\t<TELL \"ff.]\" CR>\n\t<RTRUE>>"
  },
  "PRE-MOVE": {
   "name": "PRE-MOVE",
   "file": "verbs.zil",
   "line": 832,
   "endLine": 834,
   "source": "<ROUTINE PRE-MOVE ()\n\t <COND (<HELD? ,PRSO>\n\t\t<TELL \"Why juggle objects?\" CR>)>>"
  },
  "V-MOVE": {
   "name": "V-MOVE",
   "file": "verbs.zil",
   "line": 836,
   "endLine": 840,
   "source": "<ROUTINE V-MOVE ()\n\t <COND (<FSET? ,PRSO ,TAKEBIT>\n\t\t<TELL \"Moving the \" D ,PRSO \" reveals nothing.\" CR>)\n\t       (T\n\t\t<TELL \"You can't move the \" D ,PRSO \".\" CR>)>>"
  },
  "V-LAMP-ON": {
   "name": "V-LAMP-ON",
   "file": "verbs.zil",
   "line": 842,
   "endLine": 851,
   "source": "<ROUTINE V-LAMP-ON ()\n\t <COND (<FSET? ,PRSO ,LIGHTBIT>\n\t\t<COND (<FSET? ,PRSO ,ONBIT>\n\t\t       <ALREADY \"on\">)\n\t\t      (T\n\t\t       <FSET ,PRSO ,ONBIT>\n\t\t       <TELL \"The \" D ,PRSO \" is now on.\" CR>)>)\n\t       (T\n\t\t<TELL \"You can't turn that on.\" CR>)>\n\t <RTRUE>>"
  },
  "V-LAMP-OFF": {
   "name": "V-LAMP-OFF",
   "file": "verbs.zil",
   "line": 853,
   "endLine": 862,
   "source": "<ROUTINE V-LAMP-OFF ()\n\t <COND (<FSET? ,PRSO ,LIGHTBIT>\n\t\t<COND (<NOT <FSET? ,PRSO ,ONBIT>>\n\t\t       <ALREADY \"off\">)\n\t\t      (T\n\t\t       <FCLEAR ,PRSO ,ONBIT>\n\t\t       <TELL \"The \" D ,PRSO \" is now off.\" CR>)>)\n\t       (T\n\t\t <TELL \"You can't turn that off.\" CR>)>\n\t <RTRUE>>"
  },
  "V-WAIT": {
   "name": "V-WAIT",
   "file": "verbs.zil",
   "line": 864,
   "endLine": 873,
   "source": "<ROUTINE V-WAIT () ;(\"OPTIONAL\" (NUM 3))\n\t <SETG C-ELAPSED 40>\n\t <TELL \"Time passes...\" CR>\n\t ;<REPEAT ()\n\t\t <COND (<L? <SET NUM <- .NUM 1>> 0>\n\t\t\t<RETURN>)\n\t\t       (<CLOCKER>\n\t\t\t<RETURN>)>\n\t\t <SETG INTERNAL-MOVES <+ ,INTERNAL-MOVES 1>>>\n\t ;<SETG CLOCK-WAIT T>>"
  },
  "PRE-BOARD": {
   "name": "PRE-BOARD",
   "file": "verbs.zil",
   "line": 875,
   "endLine": 888,
   "source": "<ROUTINE PRE-BOARD (\"AUX\" AV)\n\t <SET AV <LOC ,ADVENTURER>>\n\t <COND (<EQUAL? ,PRSO ,GROUND ,GLOBAL-SHUTTLE>\n\t\t<RFALSE>)\n\t       (<FSET? ,PRSO ,VEHBIT>\n\t\t<COND (<FSET? .AV ,VEHBIT>\n\t\t       <TELL \"You are already in it!\" CR>)\n\t\t      (T\n\t\t       <RFALSE>)>)\n\t       (T\n\t\t<TELL \"I suppose you have a theory on boarding \">\n \t        <A-AN>\n\t\t<TELL D ,PRSO \".\" CR>)>\n\t <RFATAL>>"
  },
  "V-BOARD": {
   "name": "V-BOARD",
   "file": "verbs.zil",
   "line": 890,
   "endLine": 896,
   "source": "<ROUTINE V-BOARD (\"AUX\" AV)\n\t <GOTO ,PRSO>\n\t <TELL \"You are now in the \" D ,PRSO \".\" CR>\n\t ;<MOVE ,ADVENTURER ,PRSO>\n\t ;<SETG OHERE <>>\n\t ;<APPLY <GETP ,PRSO ,P?ACTION> ,M-ENTER>\n\t <RTRUE>>"
  },
  "V-DISEMBARK": {
   "name": "V-DISEMBARK",
   "file": "verbs.zil",
   "line": 898,
   "endLine": 918,
   "source": "<ROUTINE V-DISEMBARK ()\n\t <COND (<EQUAL? ,PRSO ,ROOMS>\n\t\t<COND (<IN? ,ADVENTURER ,SAFETY-WEB>\n\t\t       <PERFORM ,V?DISEMBARK ,SAFETY-WEB>\n\t\t       <RTRUE>)\n\t\t      (<IN? ,ADVENTURER ,BED>\n\t\t       <OWN-FEET>)\n\t\t      (<IN? ,ADVENTURER ,SHUTTLE-CAR-ALFIE>\n\t\t       <DO-WALK ,P?NORTH>)\n\t\t      (<IN? ,ADVENTURER ,SHUTTLE-CAR-BETTY>\n\t\t       <DO-WALK ,P?SOUTH>)\n\t\t      (<IN? ,ADVENTURER ,BRIG>\n\t\t       <PERFORM ,V?ZESCAPE>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <DO-WALK ,P?OUT>)>)\n\t       (<NOT <EQUAL? <LOC ,ADVENTURER> ,PRSO>>\n\t\t<TELL \"You're not in that!\" CR>\n\t\t<RFATAL>)\n\t       (T\n\t\t<OWN-FEET>)>>"
  },
  "OWN-FEET": {
   "name": "OWN-FEET",
   "file": "verbs.zil",
   "line": 920,
   "endLine": 924,
   "source": "<ROUTINE OWN-FEET ()\n\t <GOTO ,HERE>\n\t ;<MOVE ,ADVENTURER ,HERE>\n\t ;<SETG OHERE <>>\n\t <TELL \"You're on your own feet again.\" CR>>"
  },
  "V-STAND": {
   "name": "V-STAND",
   "file": "verbs.zil",
   "line": 926,
   "endLine": 931,
   "source": "<ROUTINE V-STAND ()\n\t <COND (<FSET? <LOC ,ADVENTURER> ,VEHBIT>\n\t\t<PERFORM ,V?DISEMBARK <LOC ,ADVENTURER>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"You are already standing, I think.\" CR>)>>"
  },
  "GOTO": {
   "name": "GOTO",
   "file": "verbs.zil",
   "line": 937,
   "endLine": 959,
   "source": "<ROUTINE GOTO (NEW-LOC \"OPTIONAL\" (V? T)\n                       \"AUX\" (WLOC <LOC ,WINNER>) OLIT OLD-HERE)\n\t <SET OLIT ,LIT>\n\t <SET OLD-HERE ,HERE>\n\t <MOVE ,ADVENTURER .NEW-LOC>\n\t <SETG OHERE <>>                 ;\"GTB - TAKES CARE OF STATUS LINE\"\n\t <COND (<IN? .NEW-LOC ,ROOMS>\n\t\t<SETG HERE .NEW-LOC>\n\t\t<SETG LIT <LIT? ,HERE>>) ;\"GTB - ONLY CHANGES WHEN NEW ROOM\"\n\t       (T\n\t\t<SETG HERE .OLD-HERE>)>  ;\"GTB\"\n\t <COND (<AND <NOT .OLIT>\n\t\t     <NOT ,LIT>\n\t\t     <PROB 75>>\n\t\t<JIGS-UP\n\"Oh, no! Something (a grue?) slithered into the room and devoured you!\">\n\t\t<RTRUE>)>\n\t <COND (<EQUAL? <APPLY <GETP ,HERE ,P?ACTION> ,M-ENTER> 2>\n\t\t<RTRUE>)>\n\t <SCORE-OBJ .NEW-LOC>\n\t <COND (.V?\n\t\t<V-FIRST-LOOK>)>\n\t <RTRUE>>"
  },
  "V-EAT": {
   "name": "V-EAT",
   "file": "verbs.zil",
   "line": 980,
   "endLine": 981,
   "source": "<ROUTINE V-EAT ()\n\t <TELL \"I don't think that the \" D ,PRSO \" would agree with you.\" CR>>"
  },
  "V-EAT-FROM": {
   "name": "V-EAT-FROM",
   "file": "verbs.zil",
   "line": 983,
   "endLine": 993,
   "source": "<ROUTINE V-EAT-FROM (\"AUX\" X)\n\t <SET X <FIRST? ,PRSO>>\n\t <COND (<NOT <FSET? ,PRSO ,OPENBIT>>\n\t\t<TELL \"It's closed.\" CR>)\n\t       (<NEXT? .X>\n\t\t<TELL \"There's more than one thing in the \" D ,PRSO \".\" CR>)\n\t       (.X\n\t\t<PERFORM ,V?EAT .X>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"It's empty!\" CR>)>>"
  },
  "V-CURSE": {
   "name": "V-CURSE",
   "file": "verbs.zil",
   "line": 995,
   "endLine": 996,
   "source": "<ROUTINE V-CURSE ()\n\t <TELL \"Such language from an Ensign in the Stellar Patrol!\" CR>>"
  },
  "V-LISTEN": {
   "name": "V-LISTEN",
   "file": "verbs.zil",
   "line": 998,
   "endLine": 1000,
   "source": "<ROUTINE V-LISTEN ()\n\t <SETG C-ELAPSED 18>\n\t <TELL \"The \" D ,PRSO \" makes no sound.\" CR>>"
  },
  "V-FOLLOW": {
   "name": "V-FOLLOW",
   "file": "verbs.zil",
   "line": 1002,
   "endLine": 1003,
   "source": "<ROUTINE V-FOLLOW ()\n\t <TELL \"The \" D ,PRSO \" is right here!\" CR>>"
  },
  "V-LEAP": {
   "name": "V-LEAP",
   "file": "verbs.zil",
   "line": 1005,
   "endLine": 1016,
   "source": "<ROUTINE V-LEAP ()\n\t <COND (,PRSO\n\t\t<COND (<IN? ,PRSO ,HERE>\n\t\t       <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t\t      <TELL\n\"The \" D ,PRSO \" is too big to jump over.\" CR>)\n\t\t\t     (T\n\t\t\t      <V-SKIP>)>)\n\t\t      (T\n\t\t       <TELL \"That would be a good trick.\" CR>)>)\n\t       (T\n\t\t<V-SKIP>)>>"
  },
  "V-SKIP": {
   "name": "V-SKIP",
   "file": "verbs.zil",
   "line": 1018,
   "endLine": 1019,
   "source": "<ROUTINE V-SKIP ()\n\t <TELL <PICK-ONE ,WHEEEEE> CR>>"
  },
  "V-LEAVE": {
   "name": "V-LEAVE",
   "file": "verbs.zil",
   "line": 1021,
   "endLine": 1029,
   "source": "<ROUTINE V-LEAVE () \n\t <COND (<IN? ,ADVENTURER ,BED>\n\t\t<PERFORM ,V?DISEMBARK ,BED>\n\t\t<RTRUE>)\n\t       (<IN? ,ADVENTURER ,SAFETY-WEB>\n\t\t<PERFORM ,V?DISEMBARK ,SAFETY-WEB>\n\t\t<RTRUE>)\n\t       (T\n\t\t<DO-WALK ,P?OUT>)>>"
  },
  "V-HELLO": {
   "name": "V-HELLO",
   "file": "verbs.zil",
   "line": 1031,
   "endLine": 1038,
   "source": "<ROUTINE V-HELLO ()\n\t <COND (,PRSO\n\t\t<TELL\n\"Until now, I've only heard demented Denebian Devils say \\\"Hello\\\" to \">\n\t\t<A-AN>\n\t\t<TELL D ,PRSO \".\" CR>)\n\t       (T\n\t\t<TELL <PICK-ONE ,HELLOS> CR>)>>"
  },
  "PRE-READ": {
   "name": "PRE-READ",
   "file": "verbs.zil",
   "line": 1056,
   "endLine": 1059,
   "source": "<ROUTINE PRE-READ ()\n\t <COND (<NOT ,LIT>\n\t\t<TELL \"It is impossible to read in the dark.\" CR>\n\t\t<RTRUE>)>>"
  },
  "V-READ": {
   "name": "V-READ",
   "file": "verbs.zil",
   "line": 1061,
   "endLine": 1068,
   "source": "<ROUTINE V-READ ()\n\t <COND (<NOT <FSET? ,PRSO ,READBIT>>\n\t\t<TELL \"How can I read \">\n\t\t<A-AN>\n\t\t<TELL D ,PRSO \"?\" CR>)\n\t       (T\n\t\t<TELL <GETP ,PRSO ,P?TEXT> CR>\n\t\t<SETG C-ELAPSED 18>)>>"
  },
  "V-LOOK-UNDER": {
   "name": "V-LOOK-UNDER",
   "file": "verbs.zil",
   "line": 1070,
   "endLine": 1076,
   "source": "<ROUTINE V-LOOK-UNDER ()\n\t <TELL \"There is nothing but \">\n\t <COND (<EQUAL? ,PRSO ,AMBASSADOR>\n\t\t<TELL \"slime\">)\n\t       (T\n\t\t<TELL \"dust\">)>\n\t <TELL \" there.\" CR>>"
  },
  "V-LOOK-BEHIND": {
   "name": "V-LOOK-BEHIND",
   "file": "verbs.zil",
   "line": 1078,
   "endLine": 1079,
   "source": "<ROUTINE V-LOOK-BEHIND ()\n\t <V-LOOK-UNDER>>"
  },
  "V-LOOK-INSIDE": {
   "name": "V-LOOK-INSIDE",
   "file": "verbs.zil",
   "line": 1081,
   "endLine": 1111,
   "source": "<ROUTINE V-LOOK-INSIDE ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL \"There is nothing special to be seen.\" CR>)\n\t       (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL\n\"The \" D ,PRSO \" is open, but I can't tell what's beyond it\">)\n\t\t      (T\n\t\t       <TELL \"The \" D ,PRSO \" is closed\">)>\n\t\t<TELL \".\" CR>)\n\t       (<FSET? ,PRSO ,CONTBIT>\n\t\t<COND (<NOT <FSET? ,PRSO ,OPENBIT>>\n\t\t       <PERFORM ,V?OPEN ,PRSO>\n\t\t       <RTRUE>)\n\t\t      (<SEE-INSIDE? ,PRSO>\n\t\t       <COND (<AND <FIRST? ,PRSO>\n\t\t\t\t   <PRINT-CONT ,PRSO>>\n\t\t\t      <RTRUE>)\n\t\t\t     (<FSET? ,PRSO ,SURFACEBIT>\n\t\t\t      <TELL\n\"There is nothing on the \" D ,PRSO \".\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"The \" D ,PRSO \" is empty.\" CR>)>)\n\t\t      (T\n\t\t       <TELL \"The \" D ,PRSO \" is closed.\" CR>)>)\n\t       (<FSET? ,PRSO ,TRANSBIT>\n\t\t<TELL \"You can see dimly through the \" D ,PRSO \".\" CR>)\n\t       (T\n\t\t<TELL \"You can't look inside \">\n\t\t<A-AN>\n\t\t<TELL D ,PRSO \".\" CR>)>>"
  },
  "SEE-INSIDE?": {
   "name": "SEE-INSIDE?",
   "file": "verbs.zil",
   "line": 1113,
   "endLine": 1117,
   "source": "<ROUTINE SEE-INSIDE? (OBJ)\n\t <AND .OBJ\n\t      <NOT <FSET? .OBJ ,INVISIBLE>>\n\t      <OR <FSET? .OBJ ,TRANSBIT>\n\t          <FSET? .OBJ ,OPENBIT>>>>"
  },
  "V-LOOK-DOWN": {
   "name": "V-LOOK-DOWN",
   "file": "verbs.zil",
   "line": 1123,
   "endLine": 1125,
   "source": "<ROUTINE V-LOOK-DOWN ()\n\t <PERFORM ,V?EXAMINE ,GROUND>\n\t <RTRUE>>"
  },
  "V-TURN": {
   "name": "V-TURN",
   "file": "verbs.zil",
   "line": 1127,
   "endLine": 1128,
   "source": "<ROUTINE V-TURN ()\n\t <TELL \"You can't do that.\" CR>>"
  },
  "V-LOCK": {
   "name": "V-LOCK",
   "file": "verbs.zil",
   "line": 1130,
   "endLine": 1131,
   "source": "<ROUTINE V-LOCK ()\n\t <V-TURN>>"
  },
  "V-UNLOCK": {
   "name": "V-UNLOCK",
   "file": "verbs.zil",
   "line": 1133,
   "endLine": 1134,
   "source": "<ROUTINE V-UNLOCK ()\n\t <V-TURN>>"
  },
  "V-ATTACK": {
   "name": "V-ATTACK",
   "file": "verbs.zil",
   "line": 1136,
   "endLine": 1142,
   "source": "<ROUTINE V-ATTACK ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL \"The \" D ,PRSO \" is frightened and backs away.\" CR>)\n\t       (T\n\t\t<TELL \"I've known strange beings, but attacking \">\n\t\t<A-AN>\n\t\t<TELL D ,PRSO \"???\" CR>)>>"
  },
  "V-KICK": {
   "name": "V-KICK",
   "file": "verbs.zil",
   "line": 1144,
   "endLine": 1145,
   "source": "<ROUTINE V-KICK ()\n\t <HACK-HACK \"Kicking the \">>"
  },
  "V-WAVE": {
   "name": "V-WAVE",
   "file": "verbs.zil",
   "line": 1147,
   "endLine": 1148,
   "source": "<ROUTINE V-WAVE ()\n\t <HACK-HACK \"Waving the \">>"
  },
  "V-RUB": {
   "name": "V-RUB",
   "file": "verbs.zil",
   "line": 1150,
   "endLine": 1151,
   "source": "<ROUTINE V-RUB ()\n\t <HACK-HACK \"Fiddling with the \">>"
  },
  "V-PUSH": {
   "name": "V-PUSH",
   "file": "verbs.zil",
   "line": 1153,
   "endLine": 1186,
   "source": "<ROUTINE V-PUSH ()\n\t <COND (<AND <NOT ,PRSI>\n\t\t     <EQUAL? ,PRSO ,INTNUM>>\n\t\t<COND (<EQUAL? ,HERE ,LIBRARY-LOBBY ,MINI-BOOTH>\n\t\t       <TELL\n\"You probably want to use the TYPE command. Check your documentation.\" CR>)\n\t\t      (<EQUAL? ,P-NUMBER 1>\n\t\t       <COND (<EQUAL? ,HERE ,BOOTH-2 ,BOOTH-3>\n\t\t\t      <PERFORM ,V?PUSH ,TELEPORTATION-BUTTON-1>\n\t\t\t      <RTRUE>)\n\t\t\t     (<EQUAL? ,HERE ,BOOTH-1>\n\t\t\t      <NO-BUTTON ,BOOTH-1>)\n\t\t\t     (T\n\t\t\t      <TELL \"Push a number?!?\" CR>)>)\n\t\t      (<EQUAL? ,P-NUMBER 2>\n\t\t       <COND (<EQUAL? ,HERE ,BOOTH-1 ,BOOTH-3>\n\t\t\t      <PERFORM ,V?PUSH ,TELEPORTATION-BUTTON-2>\n\t\t\t      <RTRUE>)\n\t\t\t     (<EQUAL? ,HERE ,BOOTH-2>\n\t\t\t      <NO-BUTTON ,BOOTH-2>)\n\t\t\t     (T\n\t\t\t      <TELL \"Push a number?!?\" CR>)>)\n\t\t      (<EQUAL? ,P-NUMBER 3>\n\t\t       <COND (<EQUAL? ,HERE ,BOOTH-1 ,BOOTH-2>\n\t\t\t      <PERFORM ,V?PUSH ,TELEPORTATION-BUTTON-3>\n\t\t\t      <RTRUE>)\n\t\t\t     (<EQUAL? ,HERE ,BOOTH-3>\n\t\t\t      <NO-BUTTON ,BOOTH-3>)\n\t\t\t     (T\n\t\t\t      <TELL \"Push a number?!?\" CR>)>)\n\t\t      (T\n\t\t       <TELL \"Push a number?!?\" CR>)>)\n\t       (T\n\t\t<HACK-HACK \"Pushing the \">)>>"
  },
  "NO-BUTTON": {
   "name": "NO-BUTTON",
   "file": "verbs.zil",
   "line": 1188,
   "endLine": 1196,
   "source": "<ROUTINE NO-BUTTON (NUMBER)\n\t <TELL \"There's no button here that's labelled with the number \">\n\t <COND (<EQUAL? .NUMBER ,BOOTH-1>\n\t\t<TELL \"1\">)\n\t       (<EQUAL? .NUMBER ,BOOTH-2>\n\t\t<TELL \"2\">)\n\t       (<EQUAL? .NUMBER ,BOOTH-3>\n\t\t<TELL \"3\">)>\n\t <TELL \".\" CR>>"
  },
  "V-PUSH-UP": {
   "name": "V-PUSH-UP",
   "file": "verbs.zil",
   "line": 1198,
   "endLine": 1199,
   "source": "<ROUTINE V-PUSH-UP ()\n\t <HACK-HACK \"Pushing up the \">>"
  },
  "V-PUSH-DOWN": {
   "name": "V-PUSH-DOWN",
   "file": "verbs.zil",
   "line": 1201,
   "endLine": 1202,
   "source": "<ROUTINE V-PUSH-DOWN ()\n\t <HACK-HACK \"Pushing down the \">>"
  },
  "V-PULL": {
   "name": "V-PULL",
   "file": "verbs.zil",
   "line": 1204,
   "endLine": 1205,
   "source": "<ROUTINE V-PULL ()\n\t <HACK-HACK \"Pulling the \">>"
  },
  "V-MUNG": {
   "name": "V-MUNG",
   "file": "verbs.zil",
   "line": 1207,
   "endLine": 1208,
   "source": "<ROUTINE V-MUNG ()\n\t <HACK-HACK \"Trying to destroy the \">>"
  },
  "HACK-HACK": {
   "name": "HACK-HACK",
   "file": "verbs.zil",
   "line": 1210,
   "endLine": 1211,
   "source": "<ROUTINE HACK-HACK (STR)\n\t <TELL .STR D ,PRSO <PICK-ONE ,HO-HUM> CR>>"
  },
  "WORD-TYPE": {
   "name": "WORD-TYPE",
   "file": "verbs.zil",
   "line": 1219,
   "endLine": 1222,
   "source": "<ROUTINE WORD-TYPE (OBJ WORD \"AUX\" SYNS)\n\t <INTBL? .WORD\n\t\t<SET SYNS <GETPT .OBJ ,P?SYNONYM>>\n\t\t<- </ <PTSIZE .SYNS> 2> 1>>>"
  },
  "V-KNOCK": {
   "name": "V-KNOCK",
   "file": "verbs.zil",
   "line": 1224,
   "endLine": 1230,
   "source": "<ROUTINE V-KNOCK ()\n\t <COND (<WORD-TYPE ,PRSO ,W?DOOR>\n\t\t<TELL \"Nobody's home.\" CR>)\n\t       (T\n\t\t<TELL \"Why knock on \">\n\t\t<A-AN>\n\t\t<TELL D ,PRSO \"?\" CR>)>>"
  },
  "V-YELL": {
   "name": "V-YELL",
   "file": "verbs.zil",
   "line": 1235,
   "endLine": 1236,
   "source": "<ROUTINE V-YELL ()\n\t <TELL \"Aarrrrggggggghhhhhhhh!\" CR>>"
  },
  "BATTERY-FALLS": {
   "name": "BATTERY-FALLS",
   "file": "verbs.zil",
   "line": 1238,
   "endLine": 1239,
   "source": "<ROUTINE BATTERY-FALLS ()\n\t <TELL \"The battery falls out.\" CR>>"
  },
  "V-SHAKE": {
   "name": "V-SHAKE",
   "file": "verbs.zil",
   "line": 1248,
   "endLine": 1292,
   "source": "<ROUTINE V-SHAKE (\"AUX\" X)\n\t <COND (<AND <NOT <HELD? ,PRSO>>\n\t\t     <NOT <EQUAL? ,PRSO ,HANDS>>>\n\t\t<NOT-HOLDING>)\n\t       (<EQUAL? ,PRSO ,LASER>\n\t\t<COND (<IN? ,OLD-BATTERY ,LASER>\n\t\t       <MOVE ,OLD-BATTERY ,HERE>\n\t\t       <BATTERY-FALLS>)\n\t\t      (<IN? ,NEW-BATTERY ,LASER>\n\t\t       <MOVE ,NEW-BATTERY ,HERE>\n\t\t       <BATTERY-FALLS>)\n\t\t      (T\n\t\t       <TELL \"Shaken.\" CR>)>)\n\t       (<AND <NOT <FSET? ,PRSO ,OPENBIT>>\n\t\t     <FIRST? ,PRSO>>\n\t\t<TELL\n\"It sounds as if there is something inside the \" D ,PRSO \".\" CR>)\n\t       (<FSET? ,PRSO ,OPENBIT>\n\t\t<COND (<AND <EQUAL? ,PRSO ,FOOD-KIT>\n\t\t\t    <OR <IN? ,RED-GOO ,FOOD-KIT>\n\t\t\t\t<IN? ,GREEN-GOO ,FOOD-KIT>\n\t\t\t\t<IN? ,BROWN-GOO ,FOOD-KIT>>>\n\t\t       <REMOVE ,RED-GOO>\n\t\t       <REMOVE ,GREEN-GOO>\n\t\t       <REMOVE ,BROWN-GOO>\n\t\t       <TELL\n\"Colored goo flies all over everything. Yechh!\" CR>)\n\t\t      (<FIRST? ,PRSO>\n\t\t       <REPEAT ()\n\t\t\t       <COND (<SET X <FIRST? ,PRSO>>\n\t\t\t              <COND (<EQUAL? .X ,HIGH-PROTEIN\n\t\t\t\t\t                ,CHEMICAL-FLUID>\n\t\t\t\t             <REMOVE .X>)\n\t\t\t\t            (T\n\t\t\t\t             <MOVE .X ,HERE>)>)\n\t\t\t             (T\n\t\t\t\t      <RETURN>)>>\n\t\t       <TELL\n\"The contents of the \" D ,PRSO \" spill onto the floor.\" CR>)\n\t\t      (T\n\t\t       <TELL \"You have shaken the \" D ,PRSO \".\" CR>)>)\n\t       (<FSET? ,PRSO ,CONTBIT>\n\t\t<TELL \"The \" D ,PRSO \" sounds empty.\" CR>)\n\t       (T\n\t\t<TELL \"Shaken.\" CR>)>>"
  },
  "V-SHAKE-WITH": {
   "name": "V-SHAKE-WITH",
   "file": "verbs.zil",
   "line": 1294,
   "endLine": 1304,
   "source": "<ROUTINE V-SHAKE-WITH ()\n\t <COND (<EQUAL? ,PRSO ,HANDS>\n\t\t<COND (<FSET? ,PRSI ,ACTORBIT>\n\t\t       <PERFORM ,V?SHAKE ,HANDS>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"You can't shake hands with \">\n\t\t       <A-AN>\n\t\t       <TELL D ,PRSI \"!\" CR>)>)\n\t       (T\n\t\t<TELL \"Huh?\" CR>)>>"
  },
  "V-SMELL": {
   "name": "V-SMELL",
   "file": "verbs.zil",
   "line": 1306,
   "endLine": 1309,
   "source": "<ROUTINE V-SMELL ()\n\t <TELL \"It smells just like \">\n\t <A-AN>\n\t <TELL D ,PRSO \".\" CR>>"
  },
  "GLOBAL-IN?": {
   "name": "GLOBAL-IN?",
   "file": "verbs.zil",
   "line": 1311,
   "endLine": 1313,
   "source": "<ROUTINE GLOBAL-IN? (OBJ1 OBJ2 \"AUX\" TEE)\n\t <COND (<SET TEE <GETPT .OBJ2 ,P?GLOBAL>>\n\t\t<INTBL? .OBJ1 .TEE </ <PTSIZE .TEE> 2>>)>>"
  },
  "V-SWIM": {
   "name": "V-SWIM",
   "file": "verbs.zil",
   "line": 1318,
   "endLine": 1323,
   "source": "<ROUTINE V-SWIM ()\n\t <COND (<EQUAL? ,HERE ,UNDERWATER>\n\t\t<TELL\n\"Not much else you can do here. Might try a direction next time, though.\" CR>)\n\t       (T\n\t\t<TELL \"You can't swim here!\" CR>)>>"
  },
  "V-SWIM-DIR": {
   "name": "V-SWIM-DIR",
   "file": "verbs.zil",
   "line": 1325,
   "endLine": 1330,
   "source": "<ROUTINE V-SWIM-DIR ()\n\t <COND (<EQUAL? ,HERE ,UNDERWATER>\n\t\t<TELL \"Okay. You're still underwater.\" CR>)\n\t       (T\n\t\t<PERFORM ,V?SWIM>\n\t\t<RTRUE>)>>"
  },
  "V-SWIM-UP": {
   "name": "V-SWIM-UP",
   "file": "verbs.zil",
   "line": 1332,
   "endLine": 1336,
   "source": "<ROUTINE V-SWIM-UP ()\n\t <COND (<EQUAL? ,HERE ,UNDERWATER>\n\t        <DO-WALK ,P?UP>)\n\t       (<PERFORM ,V?SWIM>\n\t\t<RTRUE>)>>"
  },
  "V-ALARM": {
   "name": "V-ALARM",
   "file": "verbs.zil",
   "line": 1338,
   "endLine": 1339,
   "source": "<ROUTINE V-ALARM ()\n\t <TELL \"The \" D ,PRSO \" isn't sleeping.\" CR>>"
  },
  "V-ZORK": {
   "name": "V-ZORK",
   "file": "verbs.zil",
   "line": 1341,
   "endLine": 1342,
   "source": "<ROUTINE V-ZORK ()\n\t <TELL \"Gesundheit!\" CR>>"
  },
  "V-SIT": {
   "name": "V-SIT",
   "file": "verbs.zil",
   "line": 1350,
   "endLine": 1363,
   "source": "<ROUTINE V-SIT ()\n\t <COND (<EQUAL? ,HERE ,ESCAPE-POD>\n\t\t<TELL \"(in the web)\" CR>\n\t\t<PERFORM ,V?BOARD ,SAFETY-WEB>\n\t\t<RTRUE>)\n\t       (<OR <EQUAL? ,HERE ,DORM-A ,DORM-B ,DORM-C>\n\t\t    <EQUAL? ,HERE ,DORM-D ,INFIRMARY>>\n\t\t<TELL \"(on the bed)\" CR>\n\t\t<PERFORM ,V?BOARD ,BED>\n\t\t<RTRUE>)\n\t       (T\n\t\t<SETG C-ELAPSED 31>\n\t\t<TELL\n\"You recline on the floor for a bit, and then stand up again.\" CR>)>>"
  },
  "V-SIT-DOWN": {
   "name": "V-SIT-DOWN",
   "file": "verbs.zil",
   "line": 1365,
   "endLine": 1371,
   "source": "<ROUTINE V-SIT-DOWN ()\n\t <COND (<EQUAL? ,PRSO ,ROOMS>\n\t\t<PERFORM ,V?SIT>\n\t\t<RTRUE>)\n\t       (T\n\t\t<PERFORM ,V?BOARD ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-GO-UP": {
   "name": "V-GO-UP",
   "file": "verbs.zil",
   "line": 1373,
   "endLine": 1374,
   "source": "<ROUTINE V-GO-UP ()\n\t <DO-WALK ,P?UP>>"
  },
  "V-CLIMB-ON": {
   "name": "V-CLIMB-ON",
   "file": "verbs.zil",
   "line": 1376,
   "endLine": 1381,
   "source": "<ROUTINE V-CLIMB-ON ()\n\t <COND (<FSET? ,PRSO ,VEHBIT>\n\t\t<PERFORM ,V?BOARD ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"You can't climb onto the \" D ,PRSO \".\" CR>)>>"
  },
  "V-CLIMB-FOO": {
   "name": "V-CLIMB-FOO",
   "file": "verbs.zil",
   "line": 1383,
   "endLine": 1388,
   "source": "<ROUTINE V-CLIMB-FOO ()\n\t <COND (<FSET? ,PRSO ,CLIMBBIT>\n\t\t<V-CLIMB-UP ,P?UP T>)\n\t       (T\n\t\t<PERFORM ,V?CLIMB-ON ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-CLIMB-UP": {
   "name": "V-CLIMB-UP",
   "file": "verbs.zil",
   "line": 1390,
   "endLine": 1397,
   "source": "<ROUTINE V-CLIMB-UP (\"OPTIONAL\" (DIR ,P?UP) (OBJ <>) \"AUX\" X)\n\t <COND (<GETPT ,HERE .DIR>\n\t\t<DO-WALK .DIR>\n\t\t<RTRUE>)\n\t       (<NOT .OBJ>\n\t\t<TELL \"You can't go that way.\" CR>)\n\t       (T\n\t\t<TELL \"Bizarre!\" CR>)>>"
  },
  "V-CLIMB-DOWN": {
   "name": "V-CLIMB-DOWN",
   "file": "verbs.zil",
   "line": 1399,
   "endLine": 1404,
   "source": "<ROUTINE V-CLIMB-DOWN ()\n\t <COND (<FSET? ,PRSO ,VEHBIT>\n\t\t<V-CLIMB-ON>\n\t\t<RTRUE>)\n\t       (T\n\t\t<V-CLIMB-UP ,P?DOWN>)>>"
  },
  "PRE-PUT-UNDER": {
   "name": "PRE-PUT-UNDER",
   "file": "verbs.zil",
   "line": 1406,
   "endLine": 1410,
   "source": "<ROUTINE PRE-PUT-UNDER ()\n\t <COND (<NOT <HELD? ,PRSO>>\n\t\t<NOT-HOLDING>)\n\t       (<FSET? ,PRSO ,WORNBIT>\n\t\t<TAKE-IT-OFF>)>>"
  },
  "V-PUT-UNDER": {
   "name": "V-PUT-UNDER",
   "file": "verbs.zil",
   "line": 1412,
   "endLine": 1413,
   "source": "<ROUTINE V-PUT-UNDER ()\n\t <TELL \"You can't do that.\" CR>>"
  },
  "V-ENTER": {
   "name": "V-ENTER",
   "file": "verbs.zil",
   "line": 1415,
   "endLine": 1416,
   "source": "<ROUTINE V-ENTER ()\n\t <DO-WALK ,P?IN>>"
  },
  "V-EXIT": {
   "name": "V-EXIT",
   "file": "verbs.zil",
   "line": 1418,
   "endLine": 1419,
   "source": "<ROUTINE V-EXIT ()\n\t <DO-WALK ,P?OUT>>"
  },
  "V-SEARCH": {
   "name": "V-SEARCH",
   "file": "verbs.zil",
   "line": 1421,
   "endLine": 1423,
   "source": "<ROUTINE V-SEARCH ()\n\t <SETG C-ELAPSED 32>\n\t <TELL \"You find nothing unusual.\" CR>>"
  },
  "V-FIND": {
   "name": "V-FIND",
   "file": "verbs.zil",
   "line": 1425,
   "endLine": 1441,
   "source": "<ROUTINE V-FIND (\"AUX\" (L <LOC ,PRSO>))\n\t <SETG C-ELAPSED 18>\n\t <COND (<EQUAL? ,PRSO ,ME ,HANDS>\n\t\t<TELL \"You're around here somewhere...\" CR>)\n\t       (<EQUAL? .L ,GLOBAL-OBJECTS>\n\t\t<TELL \"You find it.\" CR>)\n\t       (<IN? ,PRSO ,ADVENTURER>\n\t\t<TELL \"You have it.\" CR>)\n\t       (<OR <IN? ,PRSO ,HERE>\n\t\t    <EQUAL? ,PRSO ,PSEUDO-OBJECT>>\n\t\t<TELL \"It's right here.\" CR>)\n\t       (<FSET? .L ,ACTORBIT>\n\t\t<TELL \"The \" D .L \" has it.\" CR>)\n\t       (<FSET? .L ,CONTBIT>\n\t\t<TELL \"It's in the \" D .L \".\" CR>)\n\t       (ELSE\n\t\t<TELL \"Beats me.\" CR>)>>"
  },
  "V-TELL": {
   "name": "V-TELL",
   "file": "verbs.zil",
   "line": 1443,
   "endLine": 1474,
   "source": "<ROUTINE V-TELL ()\n\t <COND (<EQUAL? ,PRSO ,ME>\n\t\t<TELL\n\"Talking to yourself is a sign of impending mental collapse.\" CR>\n\t\t<SETG P-CONT <>>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<RFATAL>)\n\t       (<FSET? ,PRSO ,ACTORBIT>\n\t\t<COND (,P-CONT\n\t\t       <SETG WINNER ,PRSO>\n\t\t       <SETG HERE <LOC ,WINNER>>)\n\t\t      (T\n\t\t       <TELL\n\"The \" D, PRSO \" looks at you expectantly, as though he thought you were\nabout to talk.\" CR>)>)\n\t       (T\n\t\t<TELL \"Talking to \">\n\t\t<COND (<AND <EQUAL? ,HERE ,DECK-NINE>\n\t\t\t    <EQUAL? ,PRSO ,PSEUDO-OBJECT>>\n\t\t       <TELL \"the \">)\n\t\t      (T\n\t\t       <A-AN>)>\n\t\t<TELL\nD ,PRSO \"? Dr. Quarnsboggle, the Feinstein's psychiatrist, would \">\n\t\t<COND (<EQUAL? ,BLOWUP-COUNTER 5>\n\t\t       <TELL \"have been\">)\n\t\t      (T\n\t\t       <TELL \"be\">)>\n\t\t<TELL \" fascinated to hear that.\" CR>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<SETG P-CONT <>>\n\t\t<RFATAL>)>>"
  },
  "V-ASK-FOR": {
   "name": "V-ASK-FOR",
   "file": "verbs.zil",
   "line": 1476,
   "endLine": 1486,
   "source": "<ROUTINE V-ASK-FOR ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<COND (<IN? ,PRSI ,PRSO>\n\t\t      <TELL\n\"The \" D ,PRSO \" doesn't seem inclined to give up the \" D ,PRSI \".\" CR>)\n\t\t     (T\n\t\t      <TELL\n\"The \" D ,PRSO \" isn't holding the \" D ,PRSI \".\" CR>)>)\n\t       (T\n\t\t<PERFORM ,V?TELL ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-SAY": {
   "name": "V-SAY",
   "file": "verbs.zil",
   "line": 1488,
   "endLine": 1495,
   "source": "<ROUTINE V-SAY (\"AUX\" V)\n\t <COND (<SET V <FIND-IN ,HERE ,ACTORBIT>>\n\t\t<SETG P-CONT <>>\n\t\t<TELL \"You must address the \" D .V \" directly.\" CR>)\n\t       (T\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<SETG P-CONT <>>\n\t\t<PERFORM ,V?TELL ,ME>)>>"
  },
  "V-TALK": {
   "name": "V-TALK",
   "file": "verbs.zil",
   "line": 1497,
   "endLine": 1499,
   "source": "<ROUTINE V-TALK ()\n\t <PERFORM ,V?TELL ,PRSO>\n\t <RTRUE>>\t "
  },
  "V-ANSWER": {
   "name": "V-ANSWER",
   "file": "verbs.zil",
   "line": 1501,
   "endLine": 1505,
   "source": "<ROUTINE V-ANSWER ()\n\t <TELL \"Nobody is awaiting your answer.\" CR>\n\t <SETG P-CONT <>>\n\t <SETG QUOTE-FLAG <>>\n\t <RTRUE>>"
  },
  "V-REPLY": {
   "name": "V-REPLY",
   "file": "verbs.zil",
   "line": 1507,
   "endLine": 1511,
   "source": "<ROUTINE V-REPLY ()\n\t <TELL \"It is hardly likely that the \" D ,PRSO \" is interested.\" CR>\n\t <SETG P-CONT <>>\n\t <SETG QUOTE-FLAG <>>\n\t <RTRUE>>"
  },
  "V-KISS": {
   "name": "V-KISS",
   "file": "verbs.zil",
   "line": 1522,
   "endLine": 1523,
   "source": "<ROUTINE V-KISS ()\n\t <TELL \"I'd sooner kiss a pile of Antarian swamp mold.\" CR>>"
  },
  "V-RAPE": {
   "name": "V-RAPE",
   "file": "verbs.zil",
   "line": 1525,
   "endLine": 1526,
   "source": "<ROUTINE V-RAPE ()\n\t <TELL \"What a (ahem!) strange idea.\" CR>>"
  },
  "V-DIAGNOSE": {
   "name": "V-DIAGNOSE",
   "file": "verbs.zil",
   "line": 1528,
   "endLine": 1564,
   "source": "<ROUTINE V-DIAGNOSE ()\n\t <SETG C-ELAPSED 18>\n\t <COND (<EQUAL? ,SICKNESS-LEVEL 0>\n\t\t<TELL \"You are in perfect health.\" CR>)\n\t       (T\n\t\t<TELL \"You are \">\n\t\t<COND (<G? ,SICKNESS-LEVEL 7>\n\t\t       <TELL \"severely\">)\n\t\t      (<G? ,SICKNESS-LEVEL 5>\n\t\t       <TELL \"very\">)\n\t\t      (<G? ,SICKNESS-LEVEL 3>\n\t\t       <TELL \"somewhat\">)\n\t\t      (T\n\t\t       <TELL \"a bit\">)>\n\t\t<TELL \" sick and feverish.\" CR>)>\n\t <COND (<EQUAL? ,SLEEPY-LEVEL 0>\n\t\t<TELL \"You feel well-rested.\" CR>)\n\t       (T\n\t\t<TELL \"You feel \">\n\t\t<COND (<G? ,SLEEPY-LEVEL 2>\n\t\t       <TELL \"phenomenally\">)\n\t\t      (<G? ,SLEEPY-LEVEL 1>\n\t\t       <TELL \"quite\">)\n\t\t      (T\n\t\t       <TELL \"sort of\">)>\n\t\t<TELL \" tired.\" CR>)>\n\t <COND (<EQUAL? ,HUNGER-LEVEL 0>\n\t\t<TELL \"You seem to be well-fed.\" CR>)\n\t       (T\n\t\t<TELL \"You seem to be \">\n\t\t<COND (<G? ,HUNGER-LEVEL 4>\n\t\t       <TELL \"awesomely phenomenally\">)\n\t\t      (<G? ,HUNGER-LEVEL 2>\n\t\t       <TELL \"noticeably\">)\n\t\t      (T\n\t\t       <TELL \"fairly\">)>\n\t\t<TELL \" thirsty and hungry.\" CR>)>>"
  },
  "V-WEAR": {
   "name": "V-WEAR",
   "file": "verbs.zil",
   "line": 1566,
   "endLine": 1573,
   "source": "<ROUTINE V-WEAR ()\n\t <COND (<FSET? ,PRSO ,WEARBIT> \n\t\t<TELL \"You are wearing the \" D ,PRSO \".\" CR>\n\t\t<SETG C-ELAPSED 18>\n\t\t<FSET ,PRSO ,WORNBIT>)\n\t       (T\n\t\t<TELL\n\"They're out of fashion, and besides, it wouldn't fit.\" CR>)>>"
  },
  "V-REMOVE": {
   "name": "V-REMOVE",
   "file": "verbs.zil",
   "line": 1575,
   "endLine": 1581,
   "source": "<ROUTINE V-REMOVE ()\n\t <COND (<FSET? ,PRSO ,WORNBIT>\n\t\t<PERFORM ,V?TAKE-OFF ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-TAKE-OFF": {
   "name": "V-TAKE-OFF",
   "file": "verbs.zil",
   "line": 1583,
   "endLine": 1592,
   "source": "<ROUTINE V-TAKE-OFF ()\n\t <COND (<FSET? ,PRSO ,VEHBIT>\n\t\t<PERFORM ,V?DISEMBARK ,PRSO>\n\t\t<RTRUE>)\n\t       (<FSET? ,PRSO ,WORNBIT>\n\t\t<TELL \"You are no longer wearing the \" D ,PRSO \".\" CR>\n\t\t<SETG C-ELAPSED 18>\n\t\t<FCLEAR ,PRSO ,WORNBIT>)\n\t       (T\n\t\t<TELL \"You aren't wearing that.\" CR>)>>"
  },
  "V-STEP-ON": {
   "name": "V-STEP-ON",
   "file": "verbs.zil",
   "line": 1594,
   "endLine": 1595,
   "source": "<ROUTINE V-STEP-ON ()\n\t <TELL \"That's a silly thing to do.\" CR>>"
  },
  "V-PUT-ON": {
   "name": "V-PUT-ON",
   "file": "verbs.zil",
   "line": 1597,
   "endLine": 1603,
   "source": "<ROUTINE V-PUT-ON ()\n\t <COND (<EQUAL? ,PRSO ,MAGNET ,LADDER>\n\t\t<PERFORM ,V?ATTRACT ,PRSO ,PRSI>\n\t\t<RTRUE>)\n\t       (T\n\t\t<PERFORM ,V?PUT ,PRSO ,PRSI>\n\t\t<RTRUE>)>>"
  },
  "V-NO": {
   "name": "V-NO",
   "file": "verbs.zil",
   "line": 1605,
   "endLine": 1606,
   "source": "<ROUTINE V-NO ()\n\t <TELL \"You sound rather negative.\" CR>>"
  },
  "V-YES": {
   "name": "V-YES",
   "file": "verbs.zil",
   "line": 1608,
   "endLine": 1609,
   "source": "<ROUTINE V-YES ()\n\t <TELL \"You sound rather positive.\" CR>>"
  },
  "V-MAYBE": {
   "name": "V-MAYBE",
   "file": "verbs.zil",
   "line": 1611,
   "endLine": 1612,
   "source": "<ROUTINE V-MAYBE ()\n\t <TELL \"You sound rather indecisive.\" CR>>"
  },
  "V-POINT": {
   "name": "V-POINT",
   "file": "verbs.zil",
   "line": 1614,
   "endLine": 1618,
   "source": "<ROUTINE V-POINT ()\n\t <COND (<IN? ,FLOYD ,HERE>\n\t\t<FLOYDS-FAMOUS-DOOR-ROUTINE>)\n\t       (T\n\t\t<TELL \"It's usually impolite to point.\" CR>)>>"
  },
  "V-SET": {
   "name": "V-SET",
   "file": "verbs.zil",
   "line": 1620,
   "endLine": 1631,
   "source": "<ROUTINE V-SET ()\n\t <COND (<NOT ,PRSI>\n\t\t<COND (<EQUAL? ,PRSO ,COMBINATION-DIAL ,LASER-DIAL>\n\t\t       <TELL\n\"You must specify a number to set the dial to.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"Turning the \" D ,PRSO \" accomplishes nothing.\" CR>)>)\n\t       (T\n\t\t<TELL \"Setting \">\n\t\t<A-AN>\n\t\t<TELL D ,PRSO \" is a strange concept.\" CR>)>>"
  },
  "V-$VERIFY": {
   "name": "V-$VERIFY",
   "file": "verbs.zil",
   "line": 1633,
   "endLine": 1642,
   "source": "<ROUTINE V-$VERIFY ()\n\t <COND (<AND <EQUAL? ,PRSO ,INTNUM>\n\t\t     <EQUAL? ,P-NUMBER 502>>\n\t\t<TELL N ,SERIAL CR>)\n\t       (T\n\t\t<TELL \"Verifying...\" CR>\n\t \t<COND (<VERIFY>\n\t\t       <TELL \"Game correct. (YAY!)\" CR>)\n\t\t      (T\n\t\t       <TELL CR \"** Game File Failure **\" CR>)>)>>"
  },
  "V-$COMMAND": {
   "name": "V-$COMMAND",
   "file": "verbs.zil",
   "line": 1646,
   "endLine": 1648,
   "source": "<ROUTINE V-$COMMAND ()\n\t <DIRIN 1>\n\t <RTRUE>>"
  },
  "V-$RANDOM": {
   "name": "V-$RANDOM",
   "file": "verbs.zil",
   "line": 1650,
   "endLine": 1655,
   "source": "<ROUTINE V-$RANDOM ()\n\t <COND (<NOT <EQUAL? ,PRSO ,INTNUM>>\n\t\t<TELL \"Illegal call to #RANDOM.\" CR>)\n\t       (T\n\t\t<RANDOM <- 0 ,P-NUMBER>>\n\t\t<RTRUE>)>>"
  },
  "V-$RECORD": {
   "name": "V-$RECORD",
   "file": "verbs.zil",
   "line": 1660,
   "endLine": 1662,
   "source": "<ROUTINE V-$RECORD ()\n\t <DIROUT ,D-RECORD-ON> ;\"all READS and INPUTS get sent to command file\"\n\t <RTRUE>>"
  },
  "V-$UNRECORD": {
   "name": "V-$UNRECORD",
   "file": "verbs.zil",
   "line": 1664,
   "endLine": 1666,
   "source": "<ROUTINE V-$UNRECORD ()\n\t <DIROUT ,D-RECORD-OFF>\n\t <RTRUE>>"
  },
  "V-STAND-ON": {
   "name": "V-STAND-ON",
   "file": "verbs.zil",
   "line": 1668,
   "endLine": 1671,
   "source": "<ROUTINE V-STAND-ON ()\n\t <TELL \"Standing on \">\n\t <A-AN>\n\t <TELL D ,PRSO \" seems like a waste of time.\" CR>>"
  },
  "V-REACH": {
   "name": "V-REACH",
   "file": "verbs.zil",
   "line": 1673,
   "endLine": 1678,
   "source": "<ROUTINE V-REACH ()\n\t <COND (<FIRST? ,PRSO>\n\t\t<TELL \"There is something\">)\n\t       (T\n\t\t<TELL \"There is nothing\">)>\n\t <TELL \" inside the \" D ,PRSO \".\" CR>>"
  },
  "V-REACH-FOR": {
   "name": "V-REACH-FOR",
   "file": "verbs.zil",
   "line": 1680,
   "endLine": 1687,
   "source": "<ROUTINE V-REACH-FOR ()\n\t <COND (<FSET? ,PRSO ,TAKEBIT>\n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<RTRUE>)\n\t       (<IN? ,PRSO ,HERE>\n\t\t<TELL \"It's here! Now what?\" CR>)\n\t       (T\n\t\t<TELL \"It is out of reach.\" CR>)>>"
  },
  "DO-WALK": {
   "name": "DO-WALK",
   "file": "verbs.zil",
   "line": 1689,
   "endLine": 1692,
   "source": "<ROUTINE DO-WALK (DIR)\n\t <SETG P-WALK-DIR .DIR>\n\t <PERFORM ,V?WALK .DIR>\n\t <RTRUE>>"
  },
  "V-FLUSH": {
   "name": "V-FLUSH",
   "file": "verbs.zil",
   "line": 1694,
   "endLine": 1697,
   "source": "<ROUTINE V-FLUSH ()\n\t <TELL \"Flush \">\n\t <A-AN>\n\t <TELL D ,PRSO \"?\" CR>>"
  },
  "V-FLY": {
   "name": "V-FLY",
   "file": "verbs.zil",
   "line": 1699,
   "endLine": 1700,
   "source": "<ROUTINE V-FLY ()\n\t <TELL \"Humans are not usually equipped for flying.\" CR>>"
  },
  "V-SMILE": {
   "name": "V-SMILE",
   "file": "verbs.zil",
   "line": 1702,
   "endLine": 1703,
   "source": "<ROUTINE V-SMILE ()\n\t <TELL \"How pleasant!\" CR>>"
  },
  "V-SALUTE": {
   "name": "V-SALUTE",
   "file": "verbs.zil",
   "line": 1705,
   "endLine": 1706,
   "source": "<ROUTINE V-SALUTE ()\n\t <TELL \"The \" D ,PRSO \" fails to return your salute.\" CR>>"
  },
  "V-ATTRACT": {
   "name": "V-ATTRACT",
   "file": "verbs.zil",
   "line": 1712,
   "endLine": 1713,
   "source": "<ROUTINE V-ATTRACT ()\n\t <TELL \"Nothing interesting happens.\" CR>>"
  },
  "V-ZATTRACT": {
   "name": "V-ZATTRACT",
   "file": "verbs.zil",
   "line": 1715,
   "endLine": 1717,
   "source": "<ROUTINE V-ZATTRACT ()\n\t <PERFORM ,V?ATTRACT ,PRSI ,PRSO>\n\t <RTRUE>>"
  },
  "V-SPAN": {
   "name": "V-SPAN",
   "file": "verbs.zil",
   "line": 1719,
   "endLine": 1720,
   "source": "<ROUTINE V-SPAN ()\n\t <TELL \"You can't.\" CR>>"
  },
  "NUMBERS-ONLY": {
   "name": "NUMBERS-ONLY",
   "file": "verbs.zil",
   "line": 1722,
   "endLine": 1725,
   "source": "<ROUTINE NUMBERS-ONLY ()\n\t <TELL\n\"This keyboard only has numeric keys. You can type numbers on it, but\nnot words.\" CR>>"
  },
  "V-TYPE": {
   "name": "V-TYPE",
   "file": "verbs.zil",
   "line": 1727,
   "endLine": 1756,
   "source": "<ROUTINE V-TYPE ()\n\t <COND (<EQUAL? ,HERE ,MINI-BOOTH>\n\t\t<COND (<NOT <EQUAL? ,PRSO ,INTNUM>>\n\t\t       <NUMBERS-ONLY>)\n\t\t      (,MINI-ACTIVATED\n\t\t       <COND (<EQUAL? ,P-NUMBER 384>\n\t\t\t      <TELL\n\"You notice the walls of the booth sliding away in all directions, followed\nby a momentary queasiness in the pit of your stomach...\" CR CR>\n\t\t\t      <GOTO ,STATION-384>\n\t\t\t      <SETG BEEN-HERE T>)\n\t\t\t     (<L? ,P-NUMBER 10>\n\t\t\t      <TELL\n\"After a pause a recorded voice says \\\"There are no one-digit computer\nsectors...clearing entry...please type damaged sector number.\\\"\" CR>)\n\t\t\t     (<G? ,P-NUMBER 1024>\n\t\t\t      <TELL \n\"A recorded voice says \\\"Databanks indicate no computer sector corresponding\nto that number. Please check with your supervisor.\\\"\" CR>)\n\t\t\t     (T\n\t\t\t      <JIGS-UP\n\"Ooops! You seem to have transported yourself into an active sector of the\ncomputer. You are fried by powerful electric currents.\">)>)\n\t\t      (T\n\t\t       <TELL\n\"A recording says \\\"Internal computer repair booth not activated.\\\"\" CR>)>)\n\t       (<EQUAL? ,HERE ,LIBRARY-LOBBY>\n\t\t<LIBRARY-TYPE>)\n\t       (T\n\t\t<TELL \"Type on what???\" CR>)>>"
  },
  "PRE-SZAP": {
   "name": "PRE-SZAP",
   "file": "verbs.zil",
   "line": 1758,
   "endLine": 1760,
   "source": "<ROUTINE PRE-SZAP ()\n\t <PERFORM ,V?ZAP ,PRSI ,PRSO>\n\t <RTRUE>>"
  },
  "PRE-ZAP": {
   "name": "PRE-ZAP",
   "file": "verbs.zil",
   "line": 1762,
   "endLine": 1771,
   "source": "<ROUTINE PRE-ZAP ()\n\t <COND (,PRSI\n\t\t<RFALSE>)\n\t       (<EQUAL? ,PRSO ,LASER>\n\t\t<RFALSE>)\n\t       (<IN? ,LASER ,ADVENTURER>\n\t\t<PERFORM ,V?ZAP ,LASER ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"You have nothing to shoot it with.\" CR>)>>"
  },
  "V-ZAP": {
   "name": "V-ZAP",
   "file": "verbs.zil",
   "line": 1773,
   "endLine": 1781,
   "source": "<ROUTINE V-ZAP ()\n\t <COND (<NOT <HELD? ,PRSO>>\n\t\t<NOT-HOLDING>)\n\t       (<NOT <EQUAL? ,PRSO ,LASER>>\n\t\t<TELL \"You can't shoot that.\" CR>)\n\t       (<NOT ,PRSI>\n\t\t<TELL \"At what?\">)\n\t       (T\n\t\t<TELL \"Nothing happens.\" CR>)>>"
  },
  "V-SZAP": {
   "name": "V-SZAP",
   "file": "verbs.zil",
   "line": 1783,
   "endLine": 1784,
   "source": "<ROUTINE V-SZAP ()\n\t <TELL \"Zap!\" CR>> "
  },
  "V-SCRUB": {
   "name": "V-SCRUB",
   "file": "verbs.zil",
   "line": 1786,
   "endLine": 1797,
   "source": "<ROUTINE V-SCRUB ()\n\t <COND (<AND <NOT ,PRSI>\n\t\t     <NOT <IN? ,SCRUB-BRUSH ,ADVENTURER>>\n\t\t     <NOT <IN? ,TOWEL ,ADVENTURER>>>\n\t\t<TELL \"You don't have anything to scrub with!\" CR>)\n\t       (<AND ,PRSI\n\t\t     <NOT <EQUAL? ,PRSI ,SCRUB-BRUSH ,TOWEL>>>\n\t\t<TELL \"You can't scrub something with that!\" CR>)\n\t       (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL \"The \" D ,PRSO \" prefers cleaning himself.\" CR>)\n\t       (T\n\t\t<TELL \"The \" D ,PRSO \" is a bit shinier now.\" CR>)>>"
  },
  "V-POUR": {
   "name": "V-POUR",
   "file": "verbs.zil",
   "line": 1799,
   "endLine": 1801,
   "source": "<ROUTINE V-POUR ()\n\t <TELL \"Pouring or spilling nonliquids is specifically forbidden\nby section 17.9.2 of the Galactic Adventure Game Compendium of Rules.\" CR>>"
  },
  "V-EMPTY": {
   "name": "V-EMPTY",
   "file": "verbs.zil",
   "line": 1803,
   "endLine": 1818,
   "source": "<ROUTINE V-EMPTY (\"AUX\" X)\n\t <COND (<NOT <FSET? ,PRSO ,OPENBIT>>\n\t\t<TELL \"You can't empty it when it's closed!\" CR>)\n\t       (<FIRST? ,PRSO>\n\t\t       <REPEAT ()\n\t\t\t       <COND (<SET X <FIRST? ,PRSO>>\n\t\t\t              <COND (<EQUAL? .X ,HIGH-PROTEIN\n\t\t\t\t\t                ,CHEMICAL-FLUID>\n\t\t\t\t             <REMOVE .X>)\n\t\t\t\t            (T\n\t\t\t\t             <MOVE .X ,HERE>)>)\n\t\t\t             (T\n\t\t\t\t      <RETURN>)>>\n\t\t       <TELL \"The \" D ,PRSO \" is now empty.\" CR>)\n\t       (T\n\t\t<TELL \"There's nothing in the \" D ,PRSO \".\" CR>)>>"
  },
  "V-THROW-OFF": {
   "name": "V-THROW-OFF",
   "file": "verbs.zil",
   "line": 1820,
   "endLine": 1821,
   "source": "<ROUTINE V-THROW-OFF ()\n\t <TELL \"It's difficult to see how that can be done.\" CR>>"
  },
  "V-SLEEP": {
   "name": "V-SLEEP",
   "file": "verbs.zil",
   "line": 1823,
   "endLine": 1830,
   "source": "<ROUTINE V-SLEEP ()\n\t <COND (<EQUAL? ,SLEEPY-LEVEL 0>\n\t\t<TELL \"You're not tired!\" CR>)\n\t       (<GET <INT I-FALL-ASLEEP> ,C-ENABLED?>\n\t\t<TELL \"You'll probably be asleep before you know it.\" CR>)\n\t       (T\n\t\t<TELL\n\"Civilized members of society usually sleep in beds.\" CR>)>>"
  },
  "V-FIX-IT": {
   "name": "V-FIX-IT",
   "file": "verbs.zil",
   "line": 1832,
   "endLine": 1835,
   "source": "<ROUTINE V-FIX-IT ()\n\t <TELL\n\"You shouldn't expect sweeping general commands like this to work. If you\nwant to repair something, you must perform the specific steps required.\" CR>>"
  },
  "V-OIL": {
   "name": "V-OIL",
   "file": "verbs.zil",
   "line": 1837,
   "endLine": 1856,
   "source": "<ROUTINE V-OIL ()\n\t <COND (<NOT ,PRSI>\n\t\t<COND (<IN? ,OIL-CAN ,ADVENTURER>\n\t\t       <PERFORM ,V?OIL ,PRSO ,OIL-CAN>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"Oil it with what?\" CR>)>)\n\t       (<EQUAL? ,PRSI ,OIL-CAN>\n\t\t<COND (<AND <EQUAL? ,PRSO ,FLOYD>\n\t\t\t    <FSET? ,FLOYD ,RLANDBIT>>\n\t\t       <TELL \"Floyd thanks you for your thoughtfulness.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The \" D, PRSO \" doesn't need oiling.\" CR>)>)\n\t       (T\n\t\t<TELL \"You can't use \">\n\t\t<COND (<FSET? ,PRSI ,VOWELBIT>\n\t\t       <TELL \"an \">)\n\t\t      (T\n\t\t       <TELL \"a \">)>\n\t\t<TELL D ,PRSI \" as an oil can!\" CR>)>>"
  },
  "V-SHOW": {
   "name": "V-SHOW",
   "file": "verbs.zil",
   "line": 1858,
   "endLine": 1869,
   "source": "<ROUTINE V-SHOW ()\n\t <COND (<NOT <HELD? ,PRSO>>\n\t\t<NOT-HOLDING>)\n\t       (<EQUAL? ,PRSI ,ME>\n\t\t<PERFORM ,V?EXAMINE ,PRSO>\n\t\t<RTRUE>)\n\t       (<FSET? ,PRSI ,ACTORBIT>\n\t\t<TELL \"The \" D ,PRSI \" looks at the \" D ,PRSO \".\" CR>)\n\t       (T\n\t\t<TELL \"Why would you want to show something to \">\n\t\t<A-AN>\n\t\t<TELL D ,PRSO \"?\" CR>)>>"
  },
  "V-INSERT": {
   "name": "V-INSERT",
   "file": "verbs.zil",
   "line": 1871,
   "endLine": 1882,
   "source": "<ROUTINE V-INSERT ()\n\t <COND (<EQUAL? ,HERE ,LIBRARY>\n\t\t<TELL \"(into the spool reader)\" CR>\n\t\t<PERFORM ,V?PUT ,PRSO ,SPOOL-READER>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,HERE ,KITCHEN>\n\t\t<TELL \"(into the niche)\" CR>\n\t\t<PERFORM ,V?PUT ,PRSO ,DISPENSER>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL\n\"You'll have to specify where you want to put the \" D ,PRSO \".\" CR>)>>"
  },
  "V-TASTE": {
   "name": "V-TASTE",
   "file": "verbs.zil",
   "line": 1884,
   "endLine": 1893,
   "source": "<ROUTINE V-TASTE ()\n\t <COND (<OR <EQUAL? ,PRSO ,HIGH-PROTEIN ,RED-GOO>\n\t\t    <EQUAL? ,PRSO ,BROWN-GOO ,GREEN-GOO>>\n\t\t<TELL \"It tastes edible.\" CR>)\n\t       (<EQUAL? ,PRSO ,CHEMICAL-FLUID>\n\t\t<TELL \"It burns your tongue.\" CR>)\n\t       (T\n\t\t<TELL \"It tastes just like \">\n\t\t<A-AN>\n\t\t<TELL D ,PRSO \".\" CR>)>>"
  },
  "V-ZESCAPE": {
   "name": "V-ZESCAPE",
   "file": "verbs.zil",
   "line": 1895,
   "endLine": 1901,
   "source": "<ROUTINE V-ZESCAPE ()\n\t <COND (<EQUAL? ,HERE ,BRIG>\n\t\t<TELL \"Houdini himself would be stumped by this cell.\" CR>)\n\t       (T\n\t\t<TELL\n\"There is no escape. We control the horizontal. We control the vertical.\nWe control the disk drives...\" CR>)>>"
  },
  "V-TIME": {
   "name": "V-TIME",
   "file": "verbs.zil",
   "line": 1903,
   "endLine": 1909,
   "source": "<ROUTINE V-TIME ()\n\t <COND (<IN? ,CHRONOMETER ,ADVENTURER>\n\t\t<TELL-TIME>\n\t\t<CRLF>)\n\t       (T\n\t\t<TELL\n\"It's hard to say, since you've removed your chronometer.\" CR>)>>"
  },
  "V-PLAY": {
   "name": "V-PLAY",
   "file": "verbs.zil",
   "line": 1911,
   "endLine": 1914,
   "source": "<ROUTINE V-PLAY ()\n\t <TELL \"How does one play \">\n\t <A-AN>\n         <TELL D ,PRSO \"?\" CR>>"
  },
  "V-PLAY-WITH": {
   "name": "V-PLAY-WITH",
   "file": "verbs.zil",
   "line": 1916,
   "endLine": 1921,
   "source": "<ROUTINE V-PLAY-WITH ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<PERFORM ,V?PLAY ,GLOBAL-GAMES>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"I sometimes wonder about your mental health.\" CR>)>>"
  },
  "V-SCOLD": {
   "name": "V-SCOLD",
   "file": "verbs.zil",
   "line": 1923,
   "endLine": 1929,
   "source": "<ROUTINE V-SCOLD ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<PERFORM ,V?TELL ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL\n\"For some reason, the \" D, PRSO \" doesn't seem too chagrined.\" CR>)>>"
  },
  "ROB": {
   "name": "ROB",
   "file": "verbs.zil",
   "line": 1931,
   "endLine": 1939,
   "source": "<ROUTINE ROB (WHO WHERE \"AUX\" N X)\n\t <SET X <FIRST? .WHO>>\n\t <REPEAT ()\n\t\t <COND (<NOT .X>\n\t\t\t<RTRUE>)\n\t\t       (T\n\t\t\t<SET N <NEXT? .X>>\n\t\t\t<MOVE .X .WHERE>\n\t\t\t<SET X .N>)>>>"
  },
  "THIS-IS-IT": {
   "name": "THIS-IS-IT",
   "file": "verbs.zil",
   "line": 1991,
   "endLine": 2000,
   "source": "<ROUTINE THIS-IS-IT (OBJ)\n\t <COND (<OR <NOT .OBJ>\n\t\t    <AND <VERB? WALK>\n\t\t\t <PRSO? .OBJ>> ;\"PRSO is a direction\"\n\t\t    <EQUAL? .OBJ ,ADVENTURER> ;\"is this necessary?\"\n\t\t    <EQUAL? .OBJ ,NOT-HERE-OBJECT ,ME>>\n\t\t<RTRUE>)  \n\t       (T\n\t\t<SETG P-IT-OBJECT .OBJ>\n\t\t<SETG P-IT-LOC ,HERE>)>>"
  },
  "ACCESSIBLE?": {
   "name": "ACCESSIBLE?",
   "file": "verbs.zil",
   "line": 2006,
   "endLine": 2030,
   "source": "<ROUTINE ACCESSIBLE? (OBJ \"AUX\" (L <LOC .OBJ>)) ;\"can player TOUCH object?\"\n\t ;\"revised 5/2/84 by SEM and SWG\"\n\t <COND (<FSET? .OBJ ,INVISIBLE>\n\t\t<RFALSE>)\n\t       (<EQUAL? .OBJ ,PSEUDO-OBJECT>\n\t\t<COND (<EQUAL? ,LAST-PSEUDO-LOC ,HERE>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <RFALSE>)>)\n\t       (<NOT .L>\n\t\t<RFALSE>)\n\t       (<EQUAL? .L ,GLOBAL-OBJECTS>\n\t\t<RTRUE>)\t       \n\t       (<AND <EQUAL? .L ,LOCAL-GLOBALS>\n\t\t     <GLOBAL-IN? .OBJ ,HERE>>\n\t\t<RTRUE>)\n\t       (<NOT <EQUAL? <META-LOC .OBJ> ,HERE>>\n\t\t<RFALSE>)\n\t       (<EQUAL? .L ,WINNER ,HERE>\n\t\t<RTRUE>)\n\t       (<AND <FSET? .L ,OPENBIT>\n\t\t     <ACCESSIBLE? .L>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "VISIBLE?": {
   "name": "VISIBLE?",
   "file": "verbs.zil",
   "line": 2042,
   "endLine": 2052,
   "source": "<ROUTINE VISIBLE? (OBJ \"AUX\" L) ;\"revised 5/2/84 by SEM and SWG\"\n\t <COND (<NOT .OBJ>\n\t\t<RFALSE>)>\n\t <SET L <LOC .OBJ>>\n\t <COND (<ACCESSIBLE? .OBJ>\n\t\t<RTRUE>)\n\t       (<AND <SEE-INSIDE? .L>\n\t\t     <VISIBLE? .L>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "A-AN": {
   "name": "A-AN",
   "file": "verbs.zil",
   "line": 2054,
   "endLine": 2058,
   "source": "<ROUTINE A-AN ()\n\t <COND (<FSET? ,PRSO ,VOWELBIT>\n\t\t<TELL \"an \">)\n\t       (T\n\t\t<TELL \"a \">)>>"
  },
  "ALREADY": {
   "name": "ALREADY",
   "file": "verbs.zil",
   "line": 2060,
   "endLine": 2065,
   "source": "<ROUTINE ALREADY (ON-OFF \"OPTIONAL\" (OBJ <>))\n\t <COND (.OBJ\n\t\t<TELL \"The \" D .OBJ \" is \">)\n\t       (T\n\t\t<TELL \"It's \">)>\n\t <TELL \"already \" .ON-OFF \".\" CR>>"
  },
  "NOT-HOLDING": {
   "name": "NOT-HOLDING",
   "file": "verbs.zil",
   "line": 2067,
   "endLine": 2068,
   "source": "<ROUTINE NOT-HOLDING ()\n\t <TELL \"You're not holding the \" D ,PRSO \".\" CR>>"
  },
  "TAKE-IT-OFF": {
   "name": "TAKE-IT-OFF",
   "file": "verbs.zil",
   "line": 2070,
   "endLine": 2071,
   "source": "<ROUTINE TAKE-IT-OFF ()\n\t <TELL \"You'll have to take it off, first.\" CR>>"
  },
  "ANYMORE": {
   "name": "ANYMORE",
   "file": "verbs.zil",
   "line": 2073,
   "endLine": 2074,
   "source": "<ROUTINE ANYMORE ()\n\t <TELL \"You can't see that anymore.\" CR>>"
  },
  "FIXED-FONT-ON": {
   "name": "FIXED-FONT-ON",
   "file": "verbs.zil",
   "line": 2076,
   "endLine": 2077,
   "source": "<ROUTINE FIXED-FONT-ON () ;\"turns on fixed spacing for the Macintosh\"\n\t <PUT 0 8 <BOR <GET 0 8> 2>>>"
  },
  "FIXED-FONT-OFF": {
   "name": "FIXED-FONT-OFF",
   "file": "verbs.zil",
   "line": 2079,
   "endLine": 2080,
   "source": "<ROUTINE FIXED-FONT-OFF () ;\"turns off fixed spacing for the Macintosh\"\n\t <PUT 0 8 <BAND <GET 0 8> -3>>>"
  }
 },
 "globals": {
  "DROWN": {
   "name": "DROWN",
   "kind": "global",
   "file": "compone.zil",
   "line": 26,
   "value": "0"
  },
  "DIAL-NUMBER": {
   "name": "DIAL-NUMBER",
   "kind": "global",
   "file": "compone.zil",
   "line": 210,
   "value": "0"
  },
  "NUMBER-NEEDED": {
   "name": "NUMBER-NEEDED",
   "kind": "global",
   "file": "compone.zil",
   "line": 212,
   "value": "0"
  },
  "PADLOCK-REMOVED": {
   "name": "PADLOCK-REMOVED",
   "kind": "global",
   "file": "compone.zil",
   "line": 549,
   "value": "<>"
  },
  "LADDER-EXTENDED": {
   "name": "LADDER-EXTENDED",
   "kind": "global",
   "file": "compone.zil",
   "line": 645,
   "value": "<>"
  },
  "LADDER-FLAG": {
   "name": "LADDER-FLAG",
   "kind": "global",
   "file": "compone.zil",
   "line": 647,
   "value": "<>"
  },
  "SPOUT-PLACED": {
   "name": "SPOUT-PLACED",
   "kind": "global",
   "file": "compone.zil",
   "line": 1686,
   "value": "<>"
  },
  "CHEMICAL-FLAG": {
   "name": "CHEMICAL-FLAG",
   "kind": "global",
   "file": "compone.zil",
   "line": 1781,
   "value": "0"
  },
  "COLOR-LTBL": {
   "name": "COLOR-LTBL",
   "kind": "constant",
   "file": "compone.zil",
   "line": 1783,
   "value": "<PLTABLE \"red\" \"blue\" \"green\" \"yellow\" \"gray\" \"brown\" \"black\" \"clear\" \"clear\">"
  },
  "CARD-STOLEN": {
   "name": "CARD-STOLEN",
   "kind": "global",
   "file": "compone.zil",
   "line": 1858,
   "value": "<>"
  },
  "FLOYD-SCORE-FLAG": {
   "name": "FLOYD-SCORE-FLAG",
   "kind": "global",
   "file": "compone.zil",
   "line": 2142,
   "value": "<>"
  },
  "FLOYD-SPOKE": {
   "name": "FLOYD-SPOKE",
   "kind": "global",
   "file": "compone.zil",
   "line": 2144,
   "value": "<>"
  },
  "FLOYD-FOLLOW": {
   "name": "FLOYD-FOLLOW",
   "kind": "global",
   "file": "compone.zil",
   "line": 2146,
   "value": "<>"
  },
  "FLOYD-REACTIVATED": {
   "name": "FLOYD-REACTIVATED",
   "kind": "global",
   "file": "compone.zil",
   "line": 2148,
   "value": "<>"
  },
  "FLOYD-INTRODUCED": {
   "name": "FLOYD-INTRODUCED",
   "kind": "global",
   "file": "compone.zil",
   "line": 2150,
   "value": "<>"
  },
  "FLOYDISMS": {
   "name": "FLOYDISMS",
   "kind": "constant",
   "file": "compone.zil",
   "line": 2334,
   "value": "<PLTABLE \"paces impatiently\" \"absentmindedly recites the first six hundred digits of pi\" \"lowers his voice and tells you the latest rumors about Dr. Fizpick\" \"recalls the time he bruised his knee\" \"chants the death scene from \"Carmen\"\" \"cranes his neck to see what you are doing\" \"rubs his head affectionately against your shoulder\" \"asks if you want to play Hucka-Bucka-Beanstalk\" \"examines himself for signs of rust\" \"absentmindedly oils one of his joints\" \"wanders restlessly around the room\" \"notices a mouse scurrying by and tries to hide behind you\" \"sings an ancient ballad, totally out of key\" \"frets about the possibility of his batteries failing\" \"reminisces about his friend Lazarus, a medical robot\" \"relates some fond memories about his robotic friend Lazarus\" \"whistles tunelessly\" \"tells you about the time he helped someone sharpen a pencil\" \"yawns and looks bored\" \"produces a crayon from one of his compartments and scrawls\nhis name on the wall\">"
  },
  "LOWER-ELEVATOR-UP": {
   "name": "LOWER-ELEVATOR-UP",
   "kind": "global",
   "file": "compone.zil",
   "line": 2615,
   "value": "<>"
  },
  "UPPER-ELEVATOR-UP": {
   "name": "UPPER-ELEVATOR-UP",
   "kind": "global",
   "file": "compone.zil",
   "line": 2617,
   "value": "T"
  },
  "ELEVATOR-IN-TRANSIT": {
   "name": "ELEVATOR-IN-TRANSIT",
   "kind": "global",
   "file": "compone.zil",
   "line": 2619,
   "value": "<>"
  },
  "LOWER-ELEVATOR-ON": {
   "name": "LOWER-ELEVATOR-ON",
   "kind": "global",
   "file": "compone.zil",
   "line": 2621,
   "value": "<>"
  },
  "UPPER-ELEVATOR-ON": {
   "name": "UPPER-ELEVATOR-ON",
   "kind": "global",
   "file": "compone.zil",
   "line": 2623,
   "value": "<>"
  },
  "ELEVATOR-LIGHT-OFF": {
   "name": "ELEVATOR-LIGHT-OFF",
   "kind": "constant",
   "file": "compone.zil",
   "line": 2687,
   "value": "\"A recording says \"Elevator no longer enabled.\"\""
  },
  "ELEVATOR-STARTS": {
   "name": "ELEVATOR-STARTS",
   "kind": "constant",
   "file": "compone.zil",
   "line": 2690,
   "value": "\"The elevator door slides shut. After a moment, you feel a sensation of\nvertical movement.\""
  },
  "JUST-ENTERED": {
   "name": "JUST-ENTERED",
   "kind": "global",
   "file": "compone.zil",
   "line": 2890,
   "value": "T"
  },
  "ORDER-LTBL": {
   "name": "ORDER-LTBL",
   "kind": "global",
   "file": "compone.zil",
   "line": 2980,
   "value": "<LTABLE 0 0 0 0 0 0 0>"
  },
  "STEPS-TO-GO": {
   "name": "STEPS-TO-GO",
   "kind": "global",
   "file": "compone.zil",
   "line": 2983,
   "value": "0"
  },
  "COMM-SHUTDOWN": {
   "name": "COMM-SHUTDOWN",
   "kind": "global",
   "file": "compone.zil",
   "line": 3136,
   "value": "<>"
  },
  "COMM-FIXED": {
   "name": "COMM-FIXED",
   "kind": "global",
   "file": "compone.zil",
   "line": 3149,
   "value": "<>"
  },
  "CHEMICAL-REQUIRED": {
   "name": "CHEMICAL-REQUIRED",
   "kind": "global",
   "file": "compone.zil",
   "line": 3151,
   "value": "0"
  },
  "LAWANDA-PLATFORM-FLAG": {
   "name": "LAWANDA-PLATFORM-FLAG",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 24,
   "value": "<>"
  },
  "LAZARUS-FLAG": {
   "name": "LAZARUS-FLAG",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 111,
   "value": "<>"
  },
  "ACHILLES-FLAG": {
   "name": "ACHILLES-FLAG",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 232,
   "value": "<>"
  },
  "HOLE-TRIP-FLAG": {
   "name": "HOLE-TRIP-FLAG",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 264,
   "value": "<>"
  },
  "BOARD-REPORTED": {
   "name": "BOARD-REPORTED",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 300,
   "value": "<>"
  },
  "DEFENSE-FIXED": {
   "name": "DEFENSE-FIXED",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 373,
   "value": "<>"
  },
  "COURSE-CONTROL-FIXED": {
   "name": "COURSE-CONTROL-FIXED",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 375,
   "value": "<>"
  },
  "ACCESS-PANEL-FULL": {
   "name": "ACCESS-PANEL-FULL",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 377,
   "value": "T"
  },
  "ITS-CRACKED": {
   "name": "ITS-CRACKED",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 498,
   "value": "<>"
  },
  "SCREEN-TEXT": {
   "name": "SCREEN-TEXT",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 726,
   "value": "<>"
  },
  "MENU-LEVEL": {
   "name": "MENU-LEVEL",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 728,
   "value": "0"
  },
  "NO-MEANING": {
   "name": "NO-MEANING",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1036,
   "value": "\"The terminal feeps, and a message briefly appears on the\nscreen explaining that typing that character has no meaning at the moment.\""
  },
  "SCREEN-CLEARS": {
   "name": "SCREEN-CLEARS",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1039,
   "value": "\"The screen clears and a different menu appears:|\""
  },
  "TEXT-APPEARS": {
   "name": "TEXT-APPEARS",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1041,
   "value": "\"The screen clears and some text appears:|\""
  },
  "MORE-INFO": {
   "name": "MORE-INFO",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1043,
   "value": "\"|\n\"Foor moor deetaald infoormaashun on xis tapik, konsult xe\nliibrereein foor xe aproopreeit spuulz. Tiip zeeroo tuu goo tuu\naa hiiyur levul.\"\""
  },
  "LOW-END": {
   "name": "LOW-END",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1049,
   "value": "\"\"Yuu hav reect xe loowist levul uv xe liibreree indeks.\nPleez tiip zeeroo tuu goo tuu aa hiiyur levul. If yuu reekwiir\nasistins, kawl xe liibrereein.\"\""
  },
  "MAIN-MENU": {
   "name": "MAIN-MENU",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1053,
   "value": "\"    1. Histooree|\n    2. Kulcur|\n    3. Teknolojee|\n    4. Jeeografee|\n    5. Xe Prajekt|\n    6. Inturlajik Gaamz\""
  },
  "HISTORY-MENU": {
   "name": "HISTORY-MENU",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1061,
   "value": "\"    0. Maan Menyuu|\n    1. Raashul Orijinz|\n    2. Graat Hiiaatus|\n    3. Riiz uv xe Nuu Teknakrasee\""
  },
  "CULTURE-MENU": {
   "name": "CULTURE-MENU",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1067,
   "value": "\"    0. Maan Menyuu|\n    1. Lituracur|\n    2. Art|\n    3. Muusik\""
  },
  "TECHNOLOGY-MENU": {
   "name": "TECHNOLOGY-MENU",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1073,
   "value": "\"    0. Maan Menyuu|\n    1. Medisin|\n    2. Agrikultcur|\n    3. Tranzportaashun|\n    4. Roobotiks|\n    5. Planateree Sistumz\""
  },
  "GEOGRAPHY-MENU": {
   "name": "GEOGRAPHY-MENU",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1081,
   "value": "\"    0. Maan Menyuu|\n    1. Planit Landmasiz|\n    2. Undursee Reejunz|\n    3. Spaas Kolooneez\""
  },
  "PROJECT-MENU": {
   "name": "PROJECT-MENU",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1087,
   "value": "\"    0. Maan Menyuu|\n    1. Orijinz uv xe Dizeez|\n    2. Xe Instalaashunz|\n    3. Prajekt Kuntrool|\""
  },
  "INTERLOGIC-MENU": {
   "name": "INTERLOGIC-MENU",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1093,
   "value": "\"    0. Maan Menyuu|\n    1. Zoork|\n    2. Dedliin and Witnis|\n    3. Starkros and Suspendid\""
  },
  "11-TEXT": {
   "name": "11-TEXT",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1099,
   "value": "\"\"Xe aancint lejindz saa xat ships frum xe Sekund Yuunyun wuns fild ar skiis\nand wil wun daa kum agen. Madern siientists, huu wuns dismist suc lejindz\nand felt xat liif eevolvd heer on Resida, now feel xat ar planit wuz reelee\nsetuld bii men uv xe Sekund Yuunyun.\"\""
  },
  "12-TEXT": {
   "name": "12-TEXT",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1105,
   "value": "\"\"Wexur oor not xe lejindz uv xe Sekund Yuunyun ar truu, arkeeoloojists ar\nsurtin xat aa peereeid uv hii teknoolojikul and sooshul deevelupmint egzistid\nxowzindz uv yeerz agoo, but foor sum reezin sivilizaashun slid intuu aa dark\naaj lasteeng senshureez.\"\""
  },
  "13-TEXT": {
   "name": "13-TEXT",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1111,
   "value": "\"\"Wixin xe last fiiv senshureez, xe riiz uv xe Nuu Teknakrasee haz reeturnd\nsivilizaashun tuu xe levul ataand beefoor xe Hiiaatus. Sooshul histooreeunz\nxink xat wen xe Dizeez struk, ar raas had aceevd aa levul uv sufistikaashun\neekwal tuu xe pree-Hiiaatus.\"\""
  },
  "21-TEXT": {
   "name": "21-TEXT",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1117,
   "value": "\"\"Menee volyuumz on xe deevelupmint uv Residan lituracur ar on fiil in xe\nliibreree. Alsoo, kopeez uv awl graat wurks uv riiteeng, sum daateeng bak tuu\nxe mixikul daaz uv xe Sekund Yuunyun, ar lookaatid heer.\"\""
  },
  "22-TEXT": {
   "name": "22-TEXT",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1122,
   "value": "\"\"Histoorikul studeez and reeproodukshunz uv Residan art ar avaalibul heer\nfoor awl xree maajur peereeids uv art deevelupmint: xe Primitiv peereeid, xe\nRenasans peereeid uv xe urlee poost-Hiiaatus, and xe moost reesint peereeid\nuv videeoo and laazur art.\"\""
  },
  "23-TEXT": {
   "name": "23-TEXT",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1128,
   "value": "\"\"Reekoordeengz uv awl impoortint kompoozishunz uv xe last fiiv hundrid yeerz\nar lookaatid in xe liibrereez data banks.\"\""
  },
  "31-TEXT": {
   "name": "31-TEXT",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1132,
   "value": "\"\"Awl maajur dizeezuz hav bin kyuuribul foor oovur aa senshuree. Xe\ndeevelupmint uv kriioojeniks now alowz dokturz tuu put paashints in staasis\nuntil aa kyuur iz fownd. Avurij Residan liif ekspektinsee iz now 147\nrevooluushunz.\"\""
  },
  "32-TEXT": {
   "name": "32-TEXT",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1138,
   "value": "\"\"Durt farmeeng iz awl but obsooleet, wix moost fuud kumeeng frum xe\nhiidrooponiks kompleksiz oor xe undurwatur aljee farmz.\"\""
  },
  "33-TEXT": {
   "name": "33-TEXT",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1142,
   "value": "\"\"Planateree travul iz noormulee priivit skuutur foor shoort hops, and aarbus\nfoor longur trips.  Spaas travul haz reesintlee bin revooluushuniizd bii xe\ninvenshun uv nuukleeur-fyuuld enjinz.\"\""
  },
  "34-TEXT": {
   "name": "34-TEXT",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1147,
   "value": "\"\"Untoold senshureez agoo, entiir teemz uv roobots wur reekwiird tuu purfoorm\neevin xe simplist tasks...wun roobot wud handul viszuuwul funkshunz, wun roobot\nwud handul awditooree funkshunz, and soo foorx. Now, xanks tuu advansis in\nmineeatshurizaashun, xeez tasks kan bee purfoormd bii singul roobots, suc az\nxe multiipurpis B-19 seereez.\"\""
  },
  "35-TEXT": {
   "name": "35-TEXT",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1154,
   "value": "\"\"Xe priimeree Planateree Sistumz ar Kors Kuntrool (foor maantaaneeng an\niideel kliimit), Deefens (foor destroieeng pootenshulee daanjuris meeteeoorz),\nand xe reesintlee adid Prajekt Kuntrool (foor monitureeng proogres uv\nXe Prajekt).\"\""
  },
  "41-TEXT": {
   "name": "41-TEXT",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1160,
   "value": "\"\"Sins xe staabulizaashun uv xe oorbit uv Resida, preesiislee 47.79 pursent\nuv xe planits surfis iz land. Xe land iz diviidid intuu tuu priimeree\nlandmasiz, Andoor and Fruulik, plus siks lesur landmasiz. Xe gloobul kapitul,\nPilandoor, iz on xe eesturn koost uv Andoor.\"\""
  },
  "42-TEXT": {
   "name": "42-TEXT",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1166,
   "value": "\"\"Xe furst undursee habutats wur oopind in 2992, and tuudaa, neerlee tuu\nsenshureez laatur, abowt 9 pursent uv Residaz popyuulaashun livz in wun\nuv xe twentee sprawleeng undursee siteez.\"\""
  },
  "43-TEXT": {
   "name": "43-TEXT",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1171,
   "value": "\"\"Alxoo setulmints hav bin establisht on Fristin, and on sevrul uv xe muunz\nuv xe gas jiiunt Blustin, xe vast majooritee uv of-woorldurz liv in xe\nspaas kolooneez establisht at Residaz troojin points.\"\""
  },
  "51-TEXT": {
   "name": "51-TEXT",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1176,
   "value": "\"\"Xe oorijin uv Xe Dizeez haz bin linkt tuu xe Sentur foor Advanst Kriioojenik\nReesurc, wic wuz kondukteeng reesurc intuu waaz uv ekstendeeng xe Kriioojenik\npeereeid indefinitlee. Alxoo xis reesurc wuz aa sukses, sumhow Xe Dizeez\nwuz reeleest and beegan spredeeng.\"\""
  },
  "52-TEXT": {
   "name": "52-TEXT",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1182,
   "value": "\"\"Xe tuu kompleksiz wur establisht on xe twin peek platooz uv Kalamontee and\nLawanda. Xeez lookaashunz wur coozin beekawz xaar hiit wud maak\ntranspoortaashun and komyuunikaashunz eezeeur, and soo xat xe vast reeakturz\nand kriioojeniks caamburz kud bee kunstruktid in xe mowntinz beeloo.\"\""
  },
  "53-TEXT": {
   "name": "53-TEXT",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1188,
   "value": "\"\"Faaz Wun: xe kunstrukshun uv xe Kalamontee and Lawanda Kompleksiz. Faaz\nTuu: mass kriioojenik freezeeng uv Residan popyuulaashun. Faaz Xree:\nsiimultaaneeus monitureeng uv kriioojeniks wiil awtoomaatid reesurc iz\nkonduktid bii inkrediblee soofistikaatid kumpyuuturiizd fasiliteez. Faaz\nFoor: reeviivul and inokyuulaashun uv xe popyuulaashun.\"\""
  },
  "61-TEXT": {
   "name": "61-TEXT",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1195,
   "value": "\"\"Xe Zoork triloojee, an adventshur klasik, taaks plaas in aa deeliitful\nbut daanjuris undurgrownd seteeng.\"\""
  },
  "62-TEXT": {
   "name": "62-TEXT",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1199,
   "value": "\"\"Dedliin iz xe furst graat misturee uv xe kumpyuutur aaj, and Witnis iz\nits wurxee suksesur.\"\""
  },
  "63-TEXT": {
   "name": "63-TEXT",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1203,
   "value": "\"\"Starkros iz Infookamz miind-bendeeng siiens-fikshun adventshur. Suspendid\niz aa kriioojenik siiens-fikshun niitmaar.\"\""
  },
  "SPOOL-TEXT": {
   "name": "SPOOL-TEXT",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 1221,
   "value": "<>"
  },
  "SPOOL-FITS": {
   "name": "SPOOL-FITS",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1284,
   "value": "\"The spool fits neatly into the opening.\""
  },
  "SOME-INFO": {
   "name": "SOME-INFO",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1286,
   "value": "\" Some information appears on the screen.\""
  },
  "GREEN-TEXT": {
   "name": "GREEN-TEXT",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1288,
   "value": "\"\"Oonlee peepul wix propur traaneeng shud piilot xe helikopturz. Reekwiird\nekwipmint inkluudz aa Helikoptur Akses Kard and aa Kuntrool Panul Kee. Xeez\nkan bee obtaand frum Tranzportaashun Stoorij.\"|\nThe rest is all very technical.\""
  },
  "RED-TEXT": {
   "name": "RED-TEXT",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 1294,
   "value": "\"\"Xe jestaashun peereeid uv Xe Dizeez, folooweeng ekspoozur, vaareez\ntreemenduslee frum pursin tuu pursin, raanjeeng frum wun daa tuu sevrul\nrootaashunz. Wuns xe furst simptumz ar shoon, dex alwaaz okurz in aat tuu\nten daaz.|\nXe priimeree simptum iz aa hii feevur. Xe sekunderee simptum iz aa sharp\ninkrees in xe amownt uv sleep needid eec niit.\"|\nThe rest of the information is about symptoms which can be detected only by\nusing complicated medical procedures.\""
  },
  "MURAL-FLAG": {
   "name": "MURAL-FLAG",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 1387,
   "value": "<>"
  },
  "CRYO-SCORE-FLAG": {
   "name": "CRYO-SCORE-FLAG",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 1427,
   "value": "<>"
  },
  "COMPUTER-FLAG": {
   "name": "COMPUTER-FLAG",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 1572,
   "value": "<>"
  },
  "UNIFORM-OPENED": {
   "name": "UNIFORM-OPENED",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 1698,
   "value": "<>"
  },
  "WAITING-COUNTER": {
   "name": "WAITING-COUNTER",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 1794,
   "value": "0"
  },
  "FLOYD-PEERED": {
   "name": "FLOYD-PEERED",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 1840,
   "value": "<>"
  },
  "BOTH-DOORS": {
   "name": "BOTH-DOORS",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 2016,
   "value": "\"A very bored-sounding recorded voice explains that, in order to prevent\ncontamination, both lock doors cannot be open simultaneously.\""
  },
  "DOOR-OPENS": {
   "name": "DOOR-OPENS",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 2020,
   "value": "\"The door opens.\""
  },
  "DOOR-CLOSES": {
   "name": "DOOR-CLOSES",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 2022,
   "value": "\"The door closes.\""
  },
  "FLOYD-WAITING": {
   "name": "FLOYD-WAITING",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2024,
   "value": "<>"
  },
  "FLOYD-GAVE-UP": {
   "name": "FLOYD-GAVE-UP",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2027,
   "value": "<>"
  },
  "FLOYD-FORAYED": {
   "name": "FLOYD-FORAYED",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2029,
   "value": "<>"
  },
  "FORAY-COUNTER": {
   "name": "FORAY-COUNTER",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2031,
   "value": "0"
  },
  "EXTRA-MOVE-FLAG": {
   "name": "EXTRA-MOVE-FLAG",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2161,
   "value": "<>"
  },
  "CRYO-MOVE-FLAG": {
   "name": "CRYO-MOVE-FLAG",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2163,
   "value": "<>"
  },
  "LAST-CHASE-ROOM": {
   "name": "LAST-CHASE-ROOM",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2165,
   "value": "<>"
  },
  "SECOND-TO-LAST-ROOM": {
   "name": "SECOND-TO-LAST-ROOM",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2167,
   "value": "<>"
  },
  "MONSTER-ENTRANCES": {
   "name": "MONSTER-ENTRANCES",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 2209,
   "value": "<PLTABLE \"The growling humanoid is charging straight at you, waving his\naxe-like implement!\" \"A pair of slavering fangs removes part of your clothing!\" \"Needle-sharp mandibles nip at your arms!\" \"The mobile plant whips its poisonous tentacles against\nyour ankles!\">"
  },
  "NUKED-COUNTER": {
   "name": "NUKED-COUNTER",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2242,
   "value": "0"
  },
  "LAB-LIGHTS-ON": {
   "name": "LAB-LIGHTS-ON",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2421,
   "value": "<>"
  },
  "LAB-FLOODED": {
   "name": "LAB-FLOODED",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2423,
   "value": "<>"
  },
  "FAINT-SOUND": {
   "name": "FAINT-SOUND",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 2441,
   "value": "\"You hear the faint sound of a relay clicking.\""
  },
  "MINI-ACTIVATED": {
   "name": "MINI-ACTIVATED",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2483,
   "value": "<>"
  },
  "BEEN-HERE": {
   "name": "BEEN-HERE",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2529,
   "value": "<>"
  },
  "COMPUTER-FIXED": {
   "name": "COMPUTER-FIXED",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2531,
   "value": "<>"
  },
  "FAMILIAR-WRENCHING": {
   "name": "FAMILIAR-WRENCHING",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 2533,
   "value": "\"You feel the familiar wrenching of your innards, and find yourself in a vast\nroom whose distant walls are rushing straight toward you...|\""
  },
  "NO-MICROBE": {
   "name": "NO-MICROBE",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2578,
   "value": "T"
  },
  "MICROBE-DISPATCHED": {
   "name": "MICROBE-DISPATCHED",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2580,
   "value": "<>"
  },
  "LASER-SETTING": {
   "name": "LASER-SETTING",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2738,
   "value": "5"
  },
  "SPECK-HIT": {
   "name": "SPECK-HIT",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2740,
   "value": "<>"
  },
  "OLD-SHOTS": {
   "name": "OLD-SHOTS",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2742,
   "value": "0"
  },
  "NEW-SHOTS": {
   "name": "NEW-SHOTS",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2744,
   "value": "0"
  },
  "WARMTH-FLAG": {
   "name": "WARMTH-FLAG",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2904,
   "value": "0"
  },
  "LASER-JUST-SHOT": {
   "name": "LASER-JUST-SHOT",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2906,
   "value": "<>"
  },
  "LASER-SCORE-FLAG": {
   "name": "LASER-SCORE-FLAG",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2943,
   "value": "<>"
  },
  "MARKSMANSHIP-COUNTER": {
   "name": "MARKSMANSHIP-COUNTER",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 2945,
   "value": "0"
  },
  "BEAM-MISSES": {
   "name": "BEAM-MISSES",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 2993,
   "value": "<PLTABLE \"The beam just misses the speck!\" \"A near miss!\" \"A good shot, but just a little wide of the target.\">"
  },
  "WINNER-ATTACKED": {
   "name": "WINNER-ATTACKED",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 3086,
   "value": "<PLTABLE \"A pseudopod extends toward you. You jump back just in time\nto avoid being engulfed.\" \"A slimy pseudopod brushes against your shoulder. You twist\naway in the nick of time.\" \"A pseudopod shoots out toward your head! Ducking quickly,\nyou save your life.\" \"Two protoplasm-filled blobs sneak toward you from the left.\nYou jump to the side and almost fall off the strip into the void below!\">"
  },
  "MONSTER-CLOSES": {
   "name": "MONSTER-CLOSES",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 3097,
   "value": "<PLTABLE \"The microbe slithers closer. The cilia around its gullet glisten\nwith mucus, giving the impression that the microbe is salivating.\" \"The microbe flows toward you. It towers above you, its cilia\nwaving madly in your face.\" \"The monster wriggles nearer. It is now so close that you can make\nout details in the protoplasm beneath its translucent skin.\">"
  },
  "MICROBE-HIT": {
   "name": "MICROBE-HIT",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 3106,
   "value": "<>"
  },
  "MICROBE-COUNTER": {
   "name": "MICROBE-COUNTER",
   "kind": "global",
   "file": "comptwo.zil",
   "line": 3108,
   "value": "0"
  },
  "MICROBE-STRIKES": {
   "name": "MICROBE-STRIKES",
   "kind": "constant",
   "file": "comptwo.zil",
   "line": 3119,
   "value": "<PLTABLE \"The microbe's outer membrane sizzles a bit, and some protoplasm\noozes out. The microbe recoils momentarily, but quickly recovers.\" \"The beam slices through the microbe's skin! A tremendous shudder\npasses through the microbe, but the wound quickly seals itself.\" \"The monster rears back for a moment, but almost as soon as the\nbeam goes off, it advances again.\">"
  },
  "S-TEXT": {
   "name": "S-TEXT",
   "kind": "constant",
   "file": "globals.zil",
   "line": 8,
   "value": "0"
  },
  "S-WINDOW": {
   "name": "S-WINDOW",
   "kind": "constant",
   "file": "globals.zil",
   "line": 9,
   "value": "1"
  },
  "H-NORMAL": {
   "name": "H-NORMAL",
   "kind": "constant",
   "file": "globals.zil",
   "line": 11,
   "value": "0"
  },
  "H-INVERSE": {
   "name": "H-INVERSE",
   "kind": "constant",
   "file": "globals.zil",
   "line": 12,
   "value": "1"
  },
  "H-BOLD": {
   "name": "H-BOLD",
   "kind": "constant",
   "file": "globals.zil",
   "line": 13,
   "value": "2"
  },
  "H-ITALIC": {
   "name": "H-ITALIC",
   "kind": "constant",
   "file": "globals.zil",
   "line": 14,
   "value": "4"
  },
  "D-SCREEN-ON": {
   "name": "D-SCREEN-ON",
   "kind": "constant",
   "file": "globals.zil",
   "line": 16,
   "value": "1"
  },
  "D-SCREEN-OFF": {
   "name": "D-SCREEN-OFF",
   "kind": "constant",
   "file": "globals.zil",
   "line": 17,
   "value": "-1"
  },
  "D-PRINTER-ON": {
   "name": "D-PRINTER-ON",
   "kind": "constant",
   "file": "globals.zil",
   "line": 18,
   "value": "2"
  },
  "D-PRINTER-OFF": {
   "name": "D-PRINTER-OFF",
   "kind": "constant",
   "file": "globals.zil",
   "line": 19,
   "value": "-2"
  },
  "D-TABLE-ON": {
   "name": "D-TABLE-ON",
   "kind": "constant",
   "file": "globals.zil",
   "line": 20,
   "value": "3"
  },
  "D-TABLE-OFF": {
   "name": "D-TABLE-OFF",
   "kind": "constant",
   "file": "globals.zil",
   "line": 21,
   "value": "-3"
  },
  "D-RECORD-ON": {
   "name": "D-RECORD-ON",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1657,
   "value": "4"
  },
  "D-RECORD-OFF": {
   "name": "D-RECORD-OFF",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1658,
   "value": "-4"
  },
  "SL-TABLE:TABLE": {
   "name": "SL-TABLE:TABLE",
   "kind": "constant",
   "file": "globals.zil",
   "line": 25,
   "value": "<ITABLE NONE 80>"
  },
  "OHERE:OBJECT": {
   "name": "OHERE:OBJECT",
   "kind": "global",
   "file": "globals.zil",
   "line": 26,
   "value": "<>"
  },
  "OLD-LEN:NUMBER": {
   "name": "OLD-LEN:NUMBER",
   "kind": "global",
   "file": "globals.zil",
   "line": 27,
   "value": "0"
  },
  "BLANKS-LEN": {
   "name": "BLANKS-LEN",
   "kind": "constant",
   "file": "globals.zil",
   "line": 91,
   "value": "10"
  },
  "BLANKS": {
   "name": "BLANKS",
   "kind": "constant",
   "file": "globals.zil",
   "line": 92,
   "value": "<ITABLE ,BLANKS-LEN (BYTE) !\\ >"
  },
  "DEFAULT-MOVE": {
   "name": "DEFAULT-MOVE",
   "kind": "constant",
   "file": "globals.zil",
   "line": 104,
   "value": "20"
  },
  "LOAD-ALLOWED": {
   "name": "LOAD-ALLOWED",
   "kind": "global",
   "file": "globals.zil",
   "line": 111,
   "value": "100"
  },
  "MUNGED-TIME": {
   "name": "MUNGED-TIME",
   "kind": "global",
   "file": "globals.zil",
   "line": 661,
   "value": "0"
  },
  "DIARY-CTR": {
   "name": "DIARY-CTR",
   "kind": "global",
   "file": "globals.zil",
   "line": 739,
   "value": "0"
  },
  "DIARY-ENTRIES": {
   "name": "DIARY-ENTRIES",
   "kind": "constant",
   "file": "globals.zil",
   "line": 798,
   "value": "<PTABLE \"Bug #46\" \"July 22 -- Transferred from S.P.S. Trilobyte to S.P.S.\nFeinstein for the third of my four tours of duty. I'm truly going to miss\nmy commander, Ensign First Class Lim. He was a friend in every respect --\nsomeone you could always go to with a problem, someone I could really look\nup to. We would sometimes talk long into the night. He would tell me\nabout his home world of Ash-Down V, and I would talk about growing up on\nGallium. I'd get pretty homesick sometimes, even though Gallium is not\nexactly one of the garden spots of the universe. I just hope my new\ncommander is half as nice as Lim.||\nThis new ship seems pretty swell. I'm in a cabin with only five\nother ensigns, and I've got one-and-a-half cubic meters of locker space!\" \"July 23 -- Met my new commander today -- Ensign Cadet First\nClass Blather. He seems like a real krip. (Excuse the language, Diary.) But\nthat might just be a bad first impression.\" \"July 25 -- One of my cabin mates, Gorund, organized a Double\nFanucci tournament among all the Ensigns Seventh Class. We were playing\nduring the 150-millichron rec period after lunch, and Blather burst in and\nconfiscated the sets and told us that playing war games was a violation of\npatrol regulations. But Ensign Whirp, who's studying to be a patrol lawyer,\nsaid she couldn't find anything about it in the regulations anywhere.|\nBLATHER IS REALLY A TOTAL MEGAKRIP!!!\" \"July 28 -- I went to see the personnel officer today to find\nout what my new duties would involve. He showed me a list of all the open\nassignments, and I decided to put in for the grotch-feeding detail. We picked\nup a few grotches when we were on Crassus, and we're taking them to the\nZoology Labs on Tremain so that maybe they can figure out how an animal can\nproduce 47 times its weight in trot every day.\" \"Bozbar 7 -- Everyone from the P.O. to the ship's cook has\napproved my application for the grotch-feeding detail -- except Blather. I\nhave an appointment to see him tomorrow. Wish me luck.\" \"Bozbar 8 -- TROT!! Blather rejected my application! And to\nmake it worse, he said that since I seem to love grotches so much, he's\nassigning me to clean out their cages. TROT AND DOUBLE TROT!!\" \"Bozbar 26 -- I haven't had time to keep my diary lately,\nbecause Blather's been watching us all like a Teleran bird. Also, last\nweek he found the diary during a surprise inspection, gave me 200 demerits,\nand told me that diaries were against regulations. But I'll be frobbed if\nI'm going to stop. I've started hiding the diary inside my official documents\nfile, and I keep that hidden in the air duct. From now on I'll have to sneak\naway somewhere to use it.\" \"Bozbar 27 -- Greeting from the Deck Four Supply Closet of the\nS.P.S. Feinstein. I hope I'm not tempting fate, sneaking around with my diary\nthis way. I used to be as much of a disbeliever in destiny as the next guy,\nbut not anymore. Not since the time my mom warned my dad not to tempt fate\nby walking across the astral plains after dark, when the computerized analysis\nshowed a 43% chance of resulting injury. My dad, stubborn as always, just\nlaughed at her and went right on taking his nightly strolls. THE VERY NEXT\nSUMMER HE WENT WALKING AT NIGHT ON THE PLAINS AND STUMBLED OVER A CRATER AND\nBRUISED HIS KNEE! Gosh!\" \"Bozbar 28 -- We entered planetary orbit today, a non-human\nworld called Accardi-3 (although the natives call it something like\nBlow'k-bibben-gordo). They're not officially part of the union. The rumors\nsay that we're picking up a special ambassador to take back to Tremain for\nnegotiations on joining the union. Tomorrow we have to put on our dress\nuniforms for some special welcoming ceremony.\" \"August 2 -- I caught a glimpse of the alien ambassador during\nthe welcoming ceremonies yesterday. He looks like a cross between a tree\ntrunk and a melting ice cream cone. But at least the ceremony got me out of\ncleaning the grotch cages today.\" \"August 7 -- Went to the mandatory Patrol Informational\nTri-vision Triple Feature last night. We saw 'Treatment For Space Lice\nInfestation,' 'Shoreleave Shirley: How to Guard Against Contracting Alien\nDiseases,' and 'The Oxygen Tank: Your Galvanized Buddy in the Vacuum.'\nBlather confined half the ensigns to quarters for hooting during the second\nfeature. (The other half had fallen asleep during the first feature.)\" \"August 24 -- TROT THAT TROTTING KRIP!! I applied for\nastrophysics training for the next quarter, but Blather says my work for the\nspecial assignment task force hasn't been good enough, so not only did he\nreject my astrophysics application, but he says I'll have to take remedial\nscrubbing next quarter. WHAT A TROTTING KRIP!||\nYou know, for the first time I'm beginning to have doubts about\nwhether I'm really cut out for the patrol. When I was growing up on Gallium,\nit was always taken for granted that I would join up when I came of age. My\nfamily has served in the patrol for five generations. In fact, my\ngreat-great-grandfather was a high admiral and one of the founding fathers of\nthe Patrol! But I seem to be permanently stuck at Ensign 7th, and Blather is\nmaking my life miserable...\" \"Septem 4 -- We left hyperspace today at about 7600; weren't\nscheduled to for about another two weeks. The grapevine says we have special\norders to investigate a planetary system here. Apparently, some of the\narchaeologists back on Varshon think it might have been part of the Second\nUnion. I can't imagine why anyone would settle out here in this remote\ncorner of the galaxy.\" \"Septem 5 -- That krip has done it again! I missed two little\npellets of trot when I was when I was cleaning out the grotch cages yesterday,\nand Blather gave me 100 demerits and assigned me two extra shifts of deck\nscrubbing -- including Deck Nine, the filthiest deck on the ship! I'm\nconsidering asking for a transfer -- or if things get worse, I might even\nabandon ship!\">"
  },
  "BLATHER-LEAVE": {
   "name": "BLATHER-LEAVE",
   "kind": "global",
   "file": "globals.zil",
   "line": 980,
   "value": "0"
  },
  "BRIGS-UP": {
   "name": "BRIGS-UP",
   "kind": "global",
   "file": "globals.zil",
   "line": 982,
   "value": "0"
  },
  "AMBASSADOR-LEAVE": {
   "name": "AMBASSADOR-LEAVE",
   "kind": "global",
   "file": "globals.zil",
   "line": 1104,
   "value": "0"
  },
  "AMBASSADOR-QUOTES": {
   "name": "AMBASSADOR-QUOTES",
   "kind": "constant",
   "file": "globals.zil",
   "line": 1155,
   "value": "<PLTABLE \"introduces himself as Br'gun-te'elkner-ipg'nun.\" \"asks if you are performing some sort of religious ceremony.\" \"inquires whether you are interested in a game of Bocci.\" \"recites a plea for coexistence between your races.\" \"asks where Admiral Smithers can be found.\" \"remarks that all humans look alike to him.\" \"offers you a bit of celery.\">"
  },
  "BLOWUP-COUNTER": {
   "name": "BLOWUP-COUNTER",
   "kind": "global",
   "file": "globals.zil",
   "line": 1468,
   "value": "0"
  },
  "TRIP-COUNTER": {
   "name": "TRIP-COUNTER",
   "kind": "global",
   "file": "globals.zil",
   "line": 1578,
   "value": "0"
  },
  "SINK-COUNTER": {
   "name": "SINK-COUNTER",
   "kind": "global",
   "file": "globals.zil",
   "line": 1635,
   "value": "0"
  },
  "ELEVATOR-ENABLED": {
   "name": "ELEVATOR-ENABLED",
   "kind": "constant",
   "file": "globals.zil",
   "line": 1741,
   "value": "\"A recorded voice chimes \"Elevator enabled.\"\""
  },
  "WRONG-CARD": {
   "name": "WRONG-CARD",
   "kind": "constant",
   "file": "globals.zil",
   "line": 1743,
   "value": "\"A sign flashes \"Inkorekt awtharazaashun kard...akses deeniid.\"\""
  },
  "CARD-REVEALED": {
   "name": "CARD-REVEALED",
   "kind": "global",
   "file": "globals.zil",
   "line": 1746,
   "value": "<>"
  },
  "TELEPORTATION-ON": {
   "name": "TELEPORTATION-ON",
   "kind": "global",
   "file": "globals.zil",
   "line": 1816,
   "value": "<>"
  },
  "CANT-GO": {
   "name": "CANT-GO",
   "kind": "constant",
   "file": "globals.zil",
   "line": 2064,
   "value": "\"You can't go that way.\""
  },
  "ALFIE-AT-KALAMONTEE": {
   "name": "ALFIE-AT-KALAMONTEE",
   "kind": "global",
   "file": "globals.zil",
   "line": 2078,
   "value": "T"
  },
  "BETTY-AT-KALAMONTEE": {
   "name": "BETTY-AT-KALAMONTEE",
   "kind": "global",
   "file": "globals.zil",
   "line": 2080,
   "value": "<>"
  },
  "SHUTTLE-MOVING": {
   "name": "SHUTTLE-MOVING",
   "kind": "global",
   "file": "globals.zil",
   "line": 2082,
   "value": "<>"
  },
  "SHUTTLE-ON": {
   "name": "SHUTTLE-ON",
   "kind": "global",
   "file": "globals.zil",
   "line": 2084,
   "value": "<>"
  },
  "SHUTTLE-VELOCITY": {
   "name": "SHUTTLE-VELOCITY",
   "kind": "global",
   "file": "globals.zil",
   "line": 2086,
   "value": "0"
  },
  "SHUTTLE-COUNTER": {
   "name": "SHUTTLE-COUNTER",
   "kind": "global",
   "file": "globals.zil",
   "line": 2088,
   "value": "0"
  },
  "SHUTTLE-RECORDING-1": {
   "name": "SHUTTLE-RECORDING-1",
   "kind": "constant",
   "file": "globals.zil",
   "line": 2149,
   "value": "\"A recorded voice says \"Shuttle controls are already activated.\"\""
  },
  "SHUTTLE-RECORDING-2": {
   "name": "SHUTTLE-RECORDING-2",
   "kind": "constant",
   "file": "globals.zil",
   "line": 2152,
   "value": "\"A recorded voice says \"Use other control cabin. Control activation\noverridden.\"\""
  },
  "SHUTTLE-RECORDING-3": {
   "name": "SHUTTLE-RECORDING-3",
   "kind": "constant",
   "file": "globals.zil",
   "line": 2156,
   "value": "\"A recording of a deep male voice says \"Shuttle controls activated.\"\""
  },
  "SHUTTLE-RECORDING-4": {
   "name": "SHUTTLE-RECORDING-4",
   "kind": "constant",
   "file": "globals.zil",
   "line": 2159,
   "value": "\"A recorded voice says \"Shuttle controls are not currently activated.\"\""
  },
  "LEVER-SETTING": {
   "name": "LEVER-SETTING",
   "kind": "global",
   "file": "globals.zil",
   "line": 2169,
   "value": "0"
  },
  "ALFIE-BROKEN": {
   "name": "ALFIE-BROKEN",
   "kind": "global",
   "file": "globals.zil",
   "line": 2280,
   "value": "<>"
  },
  "BETTY-BROKEN": {
   "name": "BETTY-BROKEN",
   "kind": "global",
   "file": "globals.zil",
   "line": 2282,
   "value": "<>"
  },
  "SIGN-PASS": {
   "name": "SIGN-PASS",
   "kind": "constant",
   "file": "globals.zil",
   "line": 2325,
   "value": "\"You pass a sign, surrounded by blinking red lights, which says \""
  },
  "SLEEPY-LEVEL": {
   "name": "SLEEPY-LEVEL",
   "kind": "global",
   "file": "globals.zil",
   "line": 2332,
   "value": "0"
  },
  "DREAMS": {
   "name": "DREAMS",
   "kind": "constant",
   "file": "globals.zil",
   "line": 2473,
   "value": "<PLTABLE \"...You find yourself on the bridge of the Feinstein. Ensign Blather is here,\nas well as Admiral Smithers. You are diligently scrubbing the control panel.\nBlather keeps yelling at you to scrub harder. Suddenly you hit the ship's\nself-destruct switch! Smithers and Blather howl at you as the ship begins\nexploding! You try to run, but your feet seem to be fused to the deck...\" \"...You gulp down the last of your Ramosian Fire Nectar and ask the\nandro-waiter for another pitcher. This pub makes the finest Nectar on\nall of Ramos Two, and you and your shipmates are having a pretty rowdy\ntime. Through the windows of the pub you can see a mighty, ancient castle,\nshining in the light of the three Ramosian moons. The Fire Nectar spreads\nthrough your blood and you begin to feel drowsy...\" \"...Strangely, you wake to find yourself back home on Gallium. Even more\nstrangely, you are only eight years old again. You are playing with your\npet sponge-cat, Swanzo, on the edge of the pond in your backyard. Mom is\nhanging orange towels on the clothesline. Suddenly the school bully jumps\nout from behind a bush, grabs you, and pushes your head under the water.\nYou try to scream, but cannot. You feel your life draining away...\" \"...Your vision slowly returns. You are on a wooded cliff overlooking\na waterfall. A rainbow spans the falls. Blather stands above you, bellowing\nthat the ground is filthy -- scrub harder! You throw your brush at Blather,\nbut it passes thru him as though he were a ghost, and sails over the cliff.\nBlather leaps after the valuable piece of Patrol property, and both plummet\ninto the void...\" \"...At last, the Feinstein has arrived at the historic Nebulon system. It's\nbeen five months since the last shore leave, and you're anxious for\nPlanetfall. You and some other Ensigns Seventh Class enter the shuttle for\nsurfaceside. Suddenly, you're alone on the shuttle, and it's tumbling out of\ncontrol! It lands in the ocean and begins sinking! You try to clamber out,\nbut you are stuck in a giant spider web. A giant spider crawls closer and\ncloser...\">"
  },
  "HUNGER-LEVEL": {
   "name": "HUNGER-LEVEL",
   "kind": "global",
   "file": "globals.zil",
   "line": 2607,
   "value": "0"
  },
  "NOT-HUNGRY": {
   "name": "NOT-HUNGRY",
   "kind": "constant",
   "file": "globals.zil",
   "line": 2634,
   "value": "\"Thanks, but you're not hungry.\""
  },
  "SICKNESS-LEVEL": {
   "name": "SICKNESS-LEVEL",
   "kind": "global",
   "file": "globals.zil",
   "line": 2640,
   "value": "0"
  },
  "SICKNESS-WARNING-FLAG": {
   "name": "SICKNESS-WARNING-FLAG",
   "kind": "global",
   "file": "globals.zil",
   "line": 2642,
   "value": "<>"
  },
  "TOO-DARK": {
   "name": "TOO-DARK",
   "kind": "constant",
   "file": "globals.zil",
   "line": 3059,
   "value": "\"It's too dark to see a thing.\""
  },
  "HINTS-OFF": {
   "name": "HINTS-OFF",
   "kind": "global",
   "file": "hints.zil",
   "line": 12,
   "value": "-1"
  },
  "RETURN-SEE-HINT": {
   "name": "RETURN-SEE-HINT",
   "kind": "constant",
   "file": "hints.zil",
   "line": 14,
   "value": "\" RETURN = see hint\""
  },
  "RETURN-SEE-HINT-LEN": {
   "name": "RETURN-SEE-HINT-LEN",
   "kind": "constant",
   "file": "hints.zil",
   "line": 15,
   "value": "<LENGTH \" RETURN = see hint\">"
  },
  "Q-MAIN-MENU": {
   "name": "Q-MAIN-MENU",
   "kind": "constant",
   "file": "hints.zil",
   "line": 16,
   "value": "\"Q = main menu\""
  },
  "Q-MAIN-MENU-LEN": {
   "name": "Q-MAIN-MENU-LEN",
   "kind": "constant",
   "file": "hints.zil",
   "line": 17,
   "value": "<LENGTH \"Q = main menu\">"
  },
  "INVISICLUES": {
   "name": "INVISICLUES",
   "kind": "constant",
   "file": "hints.zil",
   "line": 18,
   "value": "\"INVISICLUES (tm)\""
  },
  "INVISICLUES-LEN": {
   "name": "INVISICLUES-LEN",
   "kind": "constant",
   "file": "hints.zil",
   "line": 19,
   "value": "<LENGTH \"INVISICLUES (tm)\">"
  },
  "Q-SEE-HINT-MENU": {
   "name": "Q-SEE-HINT-MENU",
   "kind": "constant",
   "file": "hints.zil",
   "line": 20,
   "value": "\"Q = see hint menu\""
  },
  "Q-SEE-HINT-MENU-LEN": {
   "name": "Q-SEE-HINT-MENU-LEN",
   "kind": "constant",
   "file": "hints.zil",
   "line": 21,
   "value": "<LENGTH \"Q = see hint menu\">"
  },
  "Q-RESUME-STORY": {
   "name": "Q-RESUME-STORY",
   "kind": "constant",
   "file": "hints.zil",
   "line": 22,
   "value": "\"Q = Resume story\""
  },
  "Q-RESUME-STORY-LEN": {
   "name": "Q-RESUME-STORY-LEN",
   "kind": "constant",
   "file": "hints.zil",
   "line": 23,
   "value": "<LENGTH \"Q = Resume story\">"
  },
  "PREVIOUS": {
   "name": "PREVIOUS",
   "kind": "constant",
   "file": "hints.zil",
   "line": 24,
   "value": "\"P = Previous\""
  },
  "PREVIOUS-LEN": {
   "name": "PREVIOUS-LEN",
   "kind": "constant",
   "file": "hints.zil",
   "line": 25,
   "value": "<LENGTH \"P = Previous\">"
  },
  "LINE-TABLE": {
   "name": "LINE-TABLE",
   "kind": "global",
   "file": "hints.zil",
   "line": 27,
   "value": "<PTABLE 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22>"
  },
  "COLUMN-TABLE": {
   "name": "COLUMN-TABLE",
   "kind": "constant",
   "file": "hints.zil",
   "line": 31,
   "value": "<PTABLE 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4>"
  },
  "HINTS": {
   "name": "HINTS",
   "kind": "constant",
   "file": "hints.zil",
   "line": 83,
   "value": "<CONSTRUCT-HINTS HINT-COUNTS ;\"Put topics in Quotes - followed by PLTABLEs\n\t\t\t\t of Questions and Answers in quotes\" \"THE FEINSTEIN\" <PLTABLE \"How do I get past Blather?\" \"There's no way to get beyond Deck Eight or the Reactor Lobby.\" \"Really! There's no way!\"> <PLTABLE \"How can I stop getting demerits?\" \"Scrub harder?\" \"I wouldn't worry too much; demerits aren't that important.\"> <PLTABLE \"What about Lieutenant Measle?\" \"All he wants is some information for your records.\" \"Ahem.  Lieutenant Measle???\"> <PLTABLE \"What do I do with the Ambassador?\" \"Enjoy his company. He's just there to liven up the game opening.\"> <PLTABLE \"How do I get the translator?\" \"You can't.\"> <PLTABLE \"How do I get the celery?\" \"You can't.\"> <PLTABLE \"How do I get the Ambassador's map?\" \"The Ambassador doesn't have any map!\"> <PLTABLE \"What should I do in the Galley?\" \"Try eating the stew.\" \"Did you find the handbook for programming autopilots?\" \"How did you get to a nonexistent place?\"> <PLTABLE \"How do I get out of the Brig?\" \"The best way to get out is to never get thrown in.\" \"If you don't upset Blather by leaving your post, you'll never get thrown in the Brig.\" \"Once you're in the Brig, there's no way out.\"> <PLTABLE \"How can I save the Feinstein?\" \"It might be a malfunction in the Hyperspatial Jump Machinery Room.\" \"Of course, since you can't enter that room, you'll never know.\" \"There's no way to prevent it, and you won't find out until later what caused it. Best thing to do is try to survive the shipwreck.\"> <PLTABLE \"Can I open the escape pod bulkhead?\" \"It opens automatically during any emergency.\" \"For example, when the Feinstein begins exploding.\"> \"THE POD TRIP\" <PLTABLE \"How do I control the pod?\" \"The controls are entirely automated.\" \"Sit back and relax. Let the autopilot do the driving.\"> <PLTABLE \"I keep getting killed! Help!\" \"Are you standing?\" \"The adjective associated with the web is notable.\" \"Get in the safety web and don't stand until you've landed.\"> <PLTABLE \"Can I keep the pod from sinking?\" \"Sorry, you can't.\"> <PLTABLE \"Will I use the emergency provisions?\" \"It's always a good idea in adventure games to take anything that you can carry.\"> <PLTABLE \"Can I leave the pod after landing?\" \"Sure. Have you tried opening the door?\" \"You can't reach the door while you're still in the web.\" \"Once the door is open, either UP or OUT works.\" \"Needless to say, don't dally too long.\"> <PLTABLE \"I keep drowning underwater. Help!\" \"The water is a dangerous place to be. Leave it immediately.\" \"There is light filtering down from above.\" \"Say UP.\"> \"THE DORMITORY\" <PLTABLE \"What can I do on the Balcony?\" \"The plaque is the only thing of interest there.\"> <PLTABLE \"Of what use is the ruined castle?\" \"Not much.\"> <PLTABLE \"What can I do in the Rec Area?\" \"There are some interesting tapes and games there.\" \"Have you noticed the locked door leading north?\"> <PLTABLE \"Can I unlock the door with the dial?\" \"It's a combination lock.\" \"You could try setting it to every number from 1 to 1000.\" \"The combination can be found in the lab area.\" \"It is in the pocket of the lab uniform.\"> <PLTABLE \"What use are the four dorms?\" \"They are all identical.\" \"They make good places to sleep.\"> <PLTABLE \"What about the sanitary facilities?\" \"You won't need to use them. The game isn't THAT realistic.\" \"They are of no importance.\"> <PLTABLE \"How do I open the padlock?\" \"You'll need a key.\" \"Have you seen a \"glint of light\" anywhere while exploring?\" \"It's in the crevice in Admin Corridor South.\" \"You can't reach it with your hands. You'll need something else.\" \"The curved metal bar.\" \"It's a magnet. Try holding it over the key.\"> <PLTABLE \"How do I open the tin can?\" \"Don't develop the next hint until you've found the can opener.\" \"There is no can opener. You must be cheating.\" \"There is no way to open the can.\"> <PLTABLE \"Does the door in the Mess Hall open?\" \"If you mean the locked door in the southern end, yes.\" \"The slot next to the door is important.\" \"You'll need the kitchen access card.\" \"It's located beyond the rift.\" \"It's in the desk in the Small Office. Slide it through the slot.\"> <PLTABLE \"What is the ladder for?\" \"It is needed to get past a major obstacle.\" \"You've probably seen the obstacle.\" \"The rift.\"> <PLTABLE \"What use is the kitchen dispenser?\" \"Have you tried pushing the button?\" \"That liquid is food.\" \"You'll need something to catch the liquid.\" \"The octagonal shape of the niche is important.\" \"Open the canteen and put it in the niche.\"> \"ADMIN/MECH AREA\" <PLTABLE \"What can I do in the Physical Plant?\" \"Nothing.\" \"It's there just for show. Every large complex of buildings needs one.\"> <PLTABLE \"Is the crack in the floor important?\" \"Yes.\"> <PLTABLE \"Is the deactivated robot important?\" \"Yes, indeed!\" \"Turn it on.\"> <PLTABLE \"How do I run the reactor elevator?\" \"The slot in the elevator is important.\" \"You'll need the reactor elevator access pass.\" \"Don't develop further until you've been on the helicopter trip.\" \"Cheating again, eh?  There's no way to operate that elevator.\"> <PLTABLE \"How do I fix the reactors?\" \"Have you opened the repair panel?\" \"Some of the megafuses seem to be burned out.\" \"Try replacing the megafuses with the good ones from the box in Storage East.\" \"Oh, come now. You haven't been to the reactors, have you?\"> <PLTABLE \"How do I cross the rift?\" \"Jumping is a bad idea.\" \"You'll need an item which you may not have seen yet.\" \"It's behind the padlocked door.\" \"Extend the ladder and put it across the rift.\"> <PLTABLE \"How can I see in the darkened area?\" \"You'll need a light source.\"> <PLTABLE \"What is the chemical dispenser for?\" \"Have you tried pushing any of the buttons on it?\" \"The flask can be used to hold the chemical fluid.\" \"The first seven buttons are obviously coolants and catalysts.\" \"The two white buttons produce an acid and a base.\" \"You'll need the coolants and catalysts for the Comm Room problem.\"> <PLTABLE \"What do I do with the acid and base?\" \"Batteries are made out of acids and bases.\" \"Have you run into any dangerous creatures?  You might be able to use the acid or base as a weapon.\" \"Actually, these two chemicals are totally useless.\"> <PLTABLE \"Can I fix the disassembled robots?\" \"A repair robot might be of help.\" \"Don't go on until you've repaired Achilles.\" \"There's no way to reassemble those robots.\"> <PLTABLE \"What about the Plan Room?\" \"There's nothing for you to do in there, but you might pick up some useful information there.\"> <PLTABLE \"What about the Systems Monitors?\" \"There's nothing for you to do in there, but you might pick up some useful information there.\"> <PLTABLE \"Is there any way to take the hose?\" \"What hose?\"> \"ELEVATORS/TOWER\" <PLTABLE \"Can I open the Elevator Lobby doors?\" \"Try pushing the red and blue buttons.\" \"Then wait a little while.\"> <PLTABLE \"How do the elevators work?\" \"The slot on the control panels is important.\" \"You'll need to find the respective access passes.\" \"When you find them, slide them through the slot, and then say PUSH UP BUTTON or PUSH DOWN BUTTON.\" \"The upper elevator access card is located beyond the rift.\" \"It's in the desk in the Small Office.\" \"Floyd has the lower elevator access card.\" \"He may give it to you when you use another access card in his presence. Alternately, you can turn him off and search him.\"> <PLTABLE \"What is the Helipad for?\" \"The helicopters probably land and take off from there.\"> <PLTABLE \"How do I enter the Helicopter?\" \"Try ENTER THE HELICOPTER.\"> <PLTABLE \"TELL ME ABOUT THE OBSERVATION DECK\" \"Nice view of another complex of buildings on a nearby island.\"> <PLTABLE \"Should I do anything with the birds?\" \"Try feeding them.\" \"Birds like insects.\" \"What birds?  What insects?\"> <PLTABLE \"What is the comm. receive console?\" \"Try pressing the button on it.\" \"Apparently, it received a transmission from the Feinstein just before the ship blew up.\"> <PLTABLE \"What is the comm. send console?\" \"Read the screen. The message is very interesting.\" \"The message isn't being sent, however.\" \"You can repair the communication system using the chemical dispenser in the Machine Shop.\" \"The colored light on the enunciator panel refers to one of the colored buttons on the dispenser.\" \"Keep pouring the proper chemical fluid into the hole on the console until it is fixed.  It will take anywhere from three to five trips.\"> \"HELICOPTER TRIP\" <PLTABLE \"Where do I find the helicopter?\" \"You need to use the upper elevator to get to it.\"> <PLTABLE \"How do I unlock the control panel?\" \"Try reading the green spool using the microfilm reader.\" \"According to the spool, you'll find a key in Transportation Supply.\"> <PLTABLE \"Where is the helicopter access card?\" \"Try reading the green spool using the microfilm reader.\" \"According to the spool, the card would be in Transportation Supply.\"> <PLTABLE \"How do I use the helicopter?\" \"Unless you have the helicopter control panel key and the helicopter access card, don't read any further.\" \"Use the key to open the control panel cover.\" \"Use the access card to activate the controls.\" \"Just tell your intended destination to the voice-controlled autopilot, then sit back and enjoy the trip.\" \"Amazing feat, your managing to get this far, considering the key and card don't exist.\"> <PLTABLE \"What destination should I select?\" \"Where would you expect to find people?\" \"A large city, perhaps?\" \"Try the capital city of Resida, Pilandoor.\" \"Don't you feel pretty silly, considering there's no way to even get the helicopter off the ground?\"> \"SHUTTLE TRIP\" <PLTABLE \"Where do I find the shuttle?\" \"You need to use the lower elevator to get to it.\"> <PLTABLE \"How do I operate the shuttle?\" \"You'll need the shuttle access card.  By now you should know how to use these cards.\" \"You can't operate the shuttle after 6000.\" \"Hopefully, you can figure out that you want to be in the control cabin facing the set of tracks, not the one facing the blank wall.\"> <PLTABLE \"How do I use the shuttle controls?\" \"First, activate the controls (see previous question).\" \"Pushing the lever up into the \"+\" position causes the shuttle to accelerate. Pulling the lever down into the \"-\" position causes the shuttle to decelerate.\" \"When the lever is in the central position, the shuttle will continue to move at its current velocity.\" \"The digital display tells the current velocity of the shuttle.\"> <PLTABLE \"I always crash at the other station!\" \"You're going too fast. Decelerate sooner.\" \"If you're going faster than 20 when you get to the far station, you'll be killed.\" \"If you're going between 5 and 20 you will survive, but the shuttle will be damaged.\"> \"SYSTEMS/LIBRARY\" <PLTABLE \"What is the medicine for?\" \"Read the label.\"> <PLTABLE \"The Repair Room door is too small!\" \"It's too small for YOU to get through.\" \"It's \"robot-sized\".\" \"Ask Floyd to go through the doorway.\"> <PLTABLE \"Do the Repair Room cabinets open?\" \"You'll have to repair Achilles first.\"> <PLTABLE \"How can I repair Achilles?\" \"Waldo won't be of any help (unless you're playing SUSPENDED).\" \"Try using the microfilm reader to read the brown spool.\" \"The brown spool is in the Radiation Lab.\" \"Unfortunately, there's no way to get the brown spool to the microfilm reader.\" \"There is also no way to repair Achilles.\"> <PLTABLE \"Is there a good fromitz board?\" \"Yes.\" \"Have you been beyond the small door in the Repair Room?\" \"You'll have to ask Floyd to get the good fromitz board.\"> <PLTABLE \"Is there a good bedistor anywhere?\" \"Yes.\" \"It's in Storage East, just off Mech Corridor North. If you missed it, you'd better improve your exploring and mapping abilities.\"> <PLTABLE \"TELL ME ABOUT PLANETARY DEFENSE\" \"The library might tell you something.\" \"Apparently, it is an automatic meteor defense. Perhaps this solar system has a high meteor density.\" \"The system's discrimination circuit seems to have failed.\" \"This is probably why the Feinstein was destroyed. You'd better repair it.\" \"Open the access panel.\" \"Figure out which board is malfunctioning and remove it.\" \"It's the second board. Take it and put the good fromitz board in the resulting empty socket.\"> <PLTABLE \"TELL ME ABOUT THE COURSE CONTROL\" \"The library might tell you something about it.\" \"Apparently, the entire planet was moved into a more favorable but less stable orbit. This system ensures that the planet stays in the proper orbit.\" \"The course control system seems to be malfunctioning. If the planet was approaching its sun, it would explain the melting ice caps and water level rise.\" \"You'd better repair this system.\" \"Try opening the cube and removing the fused bedistor.\" \"You'll need a tool.\" \"Use the pliers from the Tool Room to remove the fused bedistor.\" \"Put the good bedistor into the cube.\"> <PLTABLE \"Why is this Physical Plant so big?\" \"True, this plant is larger than its counterpart in the Kalamontee Complex, even though the Lawanda Complex is slightly smaller.\" \"Perhaps there is a large section of the Lawanda Compex that you haven't seen yet...\" \"...such as the cryo-chambers, buried deep underground.\"> <PLTABLE \"How do I use the computer terminal?\" \"Firstly, turn it on.\" \"To select an item in the menu, use the TYPE command. For example, to select item 2, type TYPE 2.\" \"Typing TYPE 0 returns you to the next highest menu level (except, of course, if you are at the Main Menu, which is the highest level).\"> <PLTABLE \"How do I use the microfilm reader?\" \"It must be turned on.\" \"The colored spools are spools of microfilm.\" \"Put one in the opening in the reader.\"> <PLTABLE \"How do I summon the librarian?\" \"You can't.\" \"Really!\"> \"PROJCON AND LAB\" <PLTABLE \"What is the signficance of SanFac F?\" \"Haven't you realized by now that these SanFacs are of no interest?\"> <PLTABLE \"What about the ProjCon Office?\" \"The library might be of some help.\" \"It was the main office for the Project.\"> <PLTABLE \"Is the logo important?\" \"It also appears on the lab uniform.\" \"It's yet another little hint about what's going on.\"> <PLTABLE \"Is the mural important?\" \"Examination reveals that there might be an area behind it.\" \"But don't worry about it now.\" \"When the time comes, you'll know it.\"> <PLTABLE \"Who is Burstini Bonz?\" \"Wasn't he the great Respectivist artist who became famous for painting awesomely phenomenal murals during the 89th century?\"> <PLTABLE \"What is the laboratory area for?\" \"The library might have some information on that.\" \"It is the laboratory built to find a cure for the Disease.\"> <PLTABLE \"Is the Bio-Lab safe to enter?\" \"Try it.\" \"Nope, I guess it wasn't. Hope you did a SAVE first.\"> <PLTABLE \"Is the Radiation Lab safe to enter?\" \"Try it.\" \"Nope, I guess you can't. Hope you did a SAVE first.\"> <PLTABLE \"Where is the radiation suit?\" \"It might be down near the Reactors.\" \"Find a light source, then use the Reactor Access Stairs.\" \"There's a lamp in the Radiation Lab.\" \"Going in circles? There's no radiation suit anywhere.\"> <PLTABLE \"What is the card in the Bio-Lab?\" \"Floyd will tell you when he sees it.\" \"It's for the Miniaturization Booth.\"> <PLTABLE \"Can I get the card from the Bio-Lab?\" \"You'll die trying.\" \"Floyd's a robot. He might be tougher.\" \"He'll volunteer to get the card if he has a good enough reason.\" \"Do you know what the card is and what you would use it for?\" \"The Miniaturization Booth is for repairing the Computer.\" \"Show Floyd the computer printout, or let him see the warning light in the Computer Room.\" \"Then take him into Bio-Lock East and do what he says.\"> \"COMPUTER/ENDGAME\" <PLTABLE \"What does the computer do?\" \"The library might have something on it.\" \"It runs the automated Project...\" \"...which is trying to find a cure for the Disease.\"> <PLTABLE \"Is the printout important?\" \"It appears that the Project was incredibly close to a successful conclusion.\" \"Then the computer broke down.\" \"If you've been in the Repair Room, you'll know that summoning the repair robot didn't help.\" \"You'll have to fix the computer yourself.\" \"Use the Miniaturization Booth.\"> <PLTABLE \"Does the Miniaturization Booth work?\" \"You'll need the proper access card, of course.\" \"It's in the Bio-Lab.\" \"Once you've activated the booth, type the damaged sector number.\" \"Have you read the printout?\" \"The damaged sector is 384. Type TYPE 384.\" \"You will then be miniaturized and teleported into the damaged sector, where you can attempt to effect repairs.\"> <PLTABLE \"I am at Station 384. What now?\" \"Explore around.\" \"Have you seen and examined the relay?\" \"You'll have to figure out a way to remove the speck.\" \"The laser.\" \"You must destroy the speck without harming the relay.\" \"The dial must be set to 1, so that the beam will pass harmlessly through the red translucent exterior of the relay.\" \"You'll have to shoot the speck a number of times to destroy it.\"> <PLTABLE \"Can I talk to the giant spider?\" \"Yes.\" \"Play STARCROSS.\"> <PLTABLE \"How do I get past the giant microbe?\" \"Try shooting it with the laser.\" \"That won't have any effect while the laser is set to 1, of course.\" \"If you don't keep shooting the microbe, it will get close enough to eat you.\" \"Repeated shootings of the microbe merely hold it at bay, and sooner or later you're killed when sector 384 comes to life.\" \"Has the microbe become interested in anything besides you?\" \"The microbe is attracted to the warmth of the laser.\" \"When the laser gets warm enough, throw it over the edge of the strip, into the void below. The microbe will leap after it.\"> <PLTABLE \"How do I get back from the Strip?\" \"Go to Station 384.\"> <PLTABLE \"How do I get out of the Lab Office?\" \"Opening the door right off isn't a healthy idea.\" \"There are some buttons on the wall...\" \"To get a clue, search the desk.\" \"Have you opened the desk?\" \"Put on the gas mask, then press the red button.\" \"Then, move fast. You don't have a millichron to spare.\"> <PLTABLE \"How do I get rid of the mutants?\" \"You can't kill them.\" \"There's only one way to lose them.\" \"You're very close to the end of the game.\" \"Did you hear an announcement?\" \"Remember the mural?\" \"Go to the ProjCon Office.\" \"Go south into the elevator and push the button.\"> \"GENERAL QUESTIONS\" <PLTABLE \"What do I do with my ID card?\" \"It's useless.\"> <PLTABLE \"Why did my things go when I slept?\" \"Do you normally go to sleep holding things? You dropped them while you were sleeping. Check the floor of the room where you slept.\"> <PLTABLE \"How do I read the native language?\" \"It's actually a phonetic version of English.\" \"\"X\" is used in place of \"TH\" and \"C\" is used in place of \"CH\".\" \"Double vowels signify the long vowel sound, and single vowels indicate the short vowel sound.\"> <PLTABLE \"I keep starving to death. Feed me!\" \"Didn't you take the survival kit from the safety pod?\" \"Of course, that doesn't last long.\" \"There's a can of spam and eggs in Storage West.\" \"Unfortunately, there's no way to open it.\" \"You'll have to get into the Kitchen.\" \"It's just south of the Mess Hall.\"> <PLTABLE \"Where can I sleep?\" \"Civilized people usually sleep in beds.\" \"If you sleep elsewhere, you might be devoured (by grues?).\" \"There are beds in the four dorms, and the Infirmary.\" \"Of course, the bed in the Infirmary is a bad idea for other reasons.\"> <PLTABLE \"Where can I find a light source?\" \"Have you tried burning the towel?\" \"Okay, that didn't work. There IS a lantern somewhere.\" \"It's in the Radiation Lab.\" \"You can't enter the Radiation Lab and survive without a radiation suit.\" \"There is no radiation suit.\" \"There is no way to get a light source into the dark rooms.\"> <PLTABLE \"What is a grue?\" \"Ask the game.\"> <PLTABLE \"Do the teleportation booths work?\" \"Of course! But you'll have to find the teleportation access card first.\" \"It's in the lab area, which you may not have been to yet.\" \"It's in the pocket of the lab uniform.\" \"Slide the card thru the slot, then press the button corresponding to the booth you want to teleport to.\"> <PLTABLE \"How does the laser work?\" \"You must be holding it to fire it.\" \"It has six settings. Each setting produces a different colored beam.\" \"The battery in it when you find it won't last very long.\" \"You'll need a fresh battery.\" \"Open the laser, remove the old battery, and put the new battery in.\"> <PLTABLE \"Where do I find a new laser battery?\" \"Have you tried making one?\" \"Some batteries are made by mixing acids and bases.\" \"However, there's no way to make your own battery. There is a fresh battery lying around somewhere.\" \"It's in Lab Storage.\"> <PLTABLE \"What are megafuses for?\" \"They're electrical components.\" \"They're usually used for repairing Reactor systems.\"> <PLTABLE \"What are fromitz boards for?\" \"They're electrical components.\" \"They're usually used for repairing Planetary Defense systems.\"> <PLTABLE \"What are bedistors for?\" \"They're electrical components.\" \"They're usually used for repairing Course Control systems.\"> <PLTABLE \"Doctor, doctor! Why am I so sick?\" \"You'll find out when you get to the Library.\" \"You have contracted the Disease. It is fatal.\" \"The medicine in the Infirmary might help a bit.\" \"But your only long-term hope is to help bring the Project to its ultimate goal.\"> <PLTABLE \"I finished, but without 80 points!\" \"You didn't repair all the broken systems.\" \"Consult the Systems Monitors.\" \"You must repair the Communication System, the Planetary Defense System, and the Course Control System in order to get the optimum ending.\"> <PLTABLE \"How can I talk to Floyd?\" \"He has to be on, of course.\" \"Talk to him the same way you would talk to any other character in the game: FLOYD, EAT THE CAKE (for example).\"> \"MISCELLANEOUS\" <PLTABLE \"How to get all 80 points\" \"This section should only be used as a last resort, or for your own interest after you've completed PLANETFALL.\" \"3 points for entering the Escape Pod.\" \"3 points for entering the Crag.\" \"2 points for turning Floyd on for the first time.\" \"2 points for firing the laser for the first time.\" \"4 points for entering Storage West.\" \"4 points for entering Admin Corridor North.\" \"4 points for entering the Kitchen.\" \"4 points for entering the Tower Core.\" \"4 points for entering the Kalamontee Platform.\" \"4 points for entering the Lawanda Platform.\" \"1 point for taking the kitchen access card.\" \"1 point for taking the shuttle access card.\" \"1 point for taking the upper elevator access card.\" \"1 point for taking the lower elevator access card.\" \"1 point for taking the miniaturization access card.\" \"2 points for Floyd's death.\" \"6 points for fixing the communications system.\" \"6 points for fixing the planetary defense system.\" \"6 points for fixing the course control system.\" \"4 points for entering the Strip Near Station.\" \"4 points for entering the Auxiliary Booth.\" \"8 points for fixing the computer.\" \"5 points for entering the Cryo-Elevator.\"> <PLTABLE \"Have you tried...?\" \"Don't expose these amusing suggestions until you've finished Planetfall. They may give away the answers to puzzles in the game.\" \"Reading the graffiti in the Brig?\" \"Attacking, talking to, or throwing something at Blather?\" \"Attacking or talking to the ambassador?\" \"Touching, eating, smelling, or looking at the slime?\" \"Scrubbing the slime?\" \"Eating the celery?\" \"Examining the games and tapes in the Rec Area?\" \"Looking under the table in the Mess Hall?\" \"Kicking, attacking, rubbing, or kissing Floyd?\" \"Throwing acid at the mutants?\" \"Reading your chronometer?\" \"Taking off your chronometer or pouring acid on it?\" \"Getting into bed in the Infirmary?\" \"Scrubbing yourself?\" \"Reading the towel?\" \"Removing your uniform while Blather or Floyd are present?\" \"Destroying the mural?\" \"\"Stealing\" the lower elevator card from Floyd and then showing it to him?\" \"Giving Floyd the Lazarus breast plate?\" \"Typing ZORK?\">>"
  },
  "CUR-POS": {
   "name": "CUR-POS",
   "kind": "global",
   "file": "hints.zil",
   "line": 572,
   "value": "0"
  },
  "QUEST-NUM": {
   "name": "QUEST-NUM",
   "kind": "global",
   "file": "hints.zil",
   "line": 575,
   "value": "1"
  },
  "CHAPT-NUM": {
   "name": "CHAPT-NUM",
   "kind": "global",
   "file": "hints.zil",
   "line": 577,
   "value": "1"
  },
  "DIROUT-TBL": {
   "name": "DIROUT-TBL",
   "kind": "constant",
   "file": "hints.zil",
   "line": 579,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-MULT": {
   "name": "P-MULT",
   "kind": "global",
   "file": "misc.zil",
   "line": 9,
   "value": "<>"
  },
  "P-NOT-HERE": {
   "name": "P-NOT-HERE",
   "kind": "global",
   "file": "misc.zil",
   "line": 10,
   "value": "<>"
  },
  "P-WON": {
   "name": "P-WON",
   "kind": "global",
   "file": "misc.zil",
   "line": 97,
   "value": "<>"
  },
  "M-FATAL": {
   "name": "M-FATAL",
   "kind": "constant",
   "file": "misc.zil",
   "line": 99,
   "value": "2"
  },
  "M-HANDLED": {
   "name": "M-HANDLED",
   "kind": "constant",
   "file": "misc.zil",
   "line": 101,
   "value": "1"
  },
  "M-NOT-HANDLED": {
   "name": "M-NOT-HANDLED",
   "kind": "constant",
   "file": "misc.zil",
   "line": 103,
   "value": "<>"
  },
  "M-BEG": {
   "name": "M-BEG",
   "kind": "constant",
   "file": "misc.zil",
   "line": 105,
   "value": "1"
  },
  "M-END": {
   "name": "M-END",
   "kind": "constant",
   "file": "misc.zil",
   "line": 107,
   "value": "6"
  },
  "M-OBJECT": {
   "name": "M-OBJECT",
   "kind": "constant",
   "file": "misc.zil",
   "line": 109,
   "value": "<>"
  },
  "M-ENTER": {
   "name": "M-ENTER",
   "kind": "constant",
   "file": "misc.zil",
   "line": 111,
   "value": "2"
  },
  "M-LOOK": {
   "name": "M-LOOK",
   "kind": "constant",
   "file": "misc.zil",
   "line": 113,
   "value": "3"
  },
  "M-FLASH": {
   "name": "M-FLASH",
   "kind": "constant",
   "file": "misc.zil",
   "line": 115,
   "value": "4"
  },
  "M-OBJDESC": {
   "name": "M-OBJDESC",
   "kind": "constant",
   "file": "misc.zil",
   "line": 117,
   "value": "5"
  },
  "WINNER": {
   "name": "WINNER",
   "kind": "global",
   "file": "misc.zil",
   "line": 119,
   "value": "<>"
  },
  "HOST:NUMBER": {
   "name": "HOST:NUMBER",
   "kind": "global",
   "file": "misc.zil",
   "line": 121,
   "value": "0"
  },
  "WIDTH:NUMBER": {
   "name": "WIDTH:NUMBER",
   "kind": "global",
   "file": "misc.zil",
   "line": 122,
   "value": "0"
  },
  "C-TABLELEN": {
   "name": "C-TABLELEN",
   "kind": "constant",
   "file": "misc.zil",
   "line": 480,
   "value": "240"
  },
  "C-TABLE": {
   "name": "C-TABLE",
   "kind": "global",
   "file": "misc.zil",
   "line": 482,
   "value": "%"
  },
  "C-DEMONS": {
   "name": "C-DEMONS",
   "kind": "global",
   "file": "misc.zil",
   "line": 487,
   "value": "300"
  },
  "C-INTS": {
   "name": "C-INTS",
   "kind": "global",
   "file": "misc.zil",
   "line": 489,
   "value": "240"
  },
  "C-ELAPSED": {
   "name": "C-ELAPSED",
   "kind": "global",
   "file": "misc.zil",
   "line": 491,
   "value": "7"
  },
  "C-ELAPSED-DEFAULT": {
   "name": "C-ELAPSED-DEFAULT",
   "kind": "constant",
   "file": "misc.zil",
   "line": 493,
   "value": "7"
  },
  "C-INTLEN": {
   "name": "C-INTLEN",
   "kind": "constant",
   "file": "misc.zil",
   "line": 495,
   "value": "6"
  },
  "C-ENABLED?": {
   "name": "C-ENABLED?",
   "kind": "constant",
   "file": "misc.zil",
   "line": 497,
   "value": "0"
  },
  "C-TICK": {
   "name": "C-TICK",
   "kind": "constant",
   "file": "misc.zil",
   "line": 499,
   "value": "1"
  },
  "C-RTN": {
   "name": "C-RTN",
   "kind": "constant",
   "file": "misc.zil",
   "line": 501,
   "value": "2"
  },
  "PRSA": {
   "name": "PRSA",
   "kind": "global",
   "file": "parser.zil",
   "line": 9,
   "value": "0"
  },
  "PRSI": {
   "name": "PRSI",
   "kind": "global",
   "file": "parser.zil",
   "line": 10,
   "value": "0"
  },
  "PRSO": {
   "name": "PRSO",
   "kind": "global",
   "file": "parser.zil",
   "line": 11,
   "value": "0"
  },
  "P-TABLE": {
   "name": "P-TABLE",
   "kind": "global",
   "file": "parser.zil",
   "line": 13,
   "value": "0"
  },
  "P-ONEOBJ": {
   "name": "P-ONEOBJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 14,
   "value": "0"
  },
  "P-SYNTAX": {
   "name": "P-SYNTAX",
   "kind": "global",
   "file": "parser.zil",
   "line": 15,
   "value": "0"
  },
  "P-CCSRC": {
   "name": "P-CCSRC",
   "kind": "global",
   "file": "parser.zil",
   "line": 16,
   "value": "0"
  },
  "P-LEN": {
   "name": "P-LEN",
   "kind": "global",
   "file": "parser.zil",
   "line": 17,
   "value": "0"
  },
  "P-DIRECTION": {
   "name": "P-DIRECTION",
   "kind": "global",
   "file": "parser.zil",
   "line": 18,
   "value": "0"
  },
  "HERE": {
   "name": "HERE",
   "kind": "global",
   "file": "parser.zil",
   "line": 19,
   "value": "0"
  },
  "P-LEXV": {
   "name": "P-LEXV",
   "kind": "constant",
   "file": "parser.zil",
   "line": 22,
   "value": "<ITABLE 39 (LEXV) 0 #BYTE 0 #BYTE 0>"
  },
  "P-INBUF": {
   "name": "P-INBUF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 23,
   "value": "<ITABLE ,P-INBUF-LENGTH (BYTE LENGTH) 0>"
  },
  "P-CONT": {
   "name": "P-CONT",
   "kind": "global",
   "file": "parser.zil",
   "line": 24,
   "value": "<>"
  },
  "P-IT-OBJECT": {
   "name": "P-IT-OBJECT",
   "kind": "global",
   "file": "parser.zil",
   "line": 25,
   "value": "<>"
  },
  "P-IT-LOC": {
   "name": "P-IT-LOC",
   "kind": "global",
   "file": "parser.zil",
   "line": 26,
   "value": "<>"
  },
  "LAST-PSEUDO-LOC": {
   "name": "LAST-PSEUDO-LOC",
   "kind": "global",
   "file": "parser.zil",
   "line": 27,
   "value": "<>"
  },
  "P-OFLAG": {
   "name": "P-OFLAG",
   "kind": "global",
   "file": "parser.zil",
   "line": 30,
   "value": "<>"
  },
  "P-MERGED": {
   "name": "P-MERGED",
   "kind": "global",
   "file": "parser.zil",
   "line": 31,
   "value": "<>"
  },
  "P-ACLAUSE": {
   "name": "P-ACLAUSE",
   "kind": "global",
   "file": "parser.zil",
   "line": 32,
   "value": "<>"
  },
  "P-ANAM": {
   "name": "P-ANAM",
   "kind": "global",
   "file": "parser.zil",
   "line": 33,
   "value": "<>"
  },
  "P-AADJ": {
   "name": "P-AADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 34,
   "value": "<>"
  },
  "P-PHRLEN": {
   "name": "P-PHRLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 37,
   "value": "3"
  },
  "P-ORPHLEN": {
   "name": "P-ORPHLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 38,
   "value": "7"
  },
  "P-RTLEN": {
   "name": "P-RTLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 39,
   "value": "3"
  },
  "P-LEXWORDS": {
   "name": "P-LEXWORDS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 42,
   "value": "1"
  },
  "P-LEXSTART": {
   "name": "P-LEXSTART",
   "kind": "constant",
   "file": "parser.zil",
   "line": 43,
   "value": "1"
  },
  "P-LEXELEN": {
   "name": "P-LEXELEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 44,
   "value": "2"
  },
  "P-WORDLEN": {
   "name": "P-WORDLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 45,
   "value": "4"
  },
  "P-PSOFF": {
   "name": "P-PSOFF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 49,
   "value": "%"
  },
  "P-P1OFF": {
   "name": "P-P1OFF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 50,
   "value": "%"
  },
  "P-P1BITS": {
   "name": "P-P1BITS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 52,
   "value": "3"
  },
  "P-ITBLLEN": {
   "name": "P-ITBLLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 53,
   "value": "9"
  },
  "P-ITBL": {
   "name": "P-ITBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 55,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-OTBL": {
   "name": "P-OTBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 56,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-VTBL": {
   "name": "P-VTBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 57,
   "value": "<TABLE 0 0 0 0>"
  },
  "P-NCN": {
   "name": "P-NCN",
   "kind": "global",
   "file": "parser.zil",
   "line": 58,
   "value": "0"
  },
  "P-VERB": {
   "name": "P-VERB",
   "kind": "constant",
   "file": "parser.zil",
   "line": 60,
   "value": "0"
  },
  "P-VERBN": {
   "name": "P-VERBN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 61,
   "value": "1"
  },
  "P-PREP1": {
   "name": "P-PREP1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 62,
   "value": "2"
  },
  "P-PREP1N": {
   "name": "P-PREP1N",
   "kind": "constant",
   "file": "parser.zil",
   "line": 63,
   "value": "3"
  },
  "P-PREP2": {
   "name": "P-PREP2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 64,
   "value": "4"
  },
  "P-PREP2N": {
   "name": "P-PREP2N",
   "kind": "constant",
   "file": "parser.zil",
   "line": 65,
   "value": "5"
  },
  "P-NC1": {
   "name": "P-NC1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 66,
   "value": "6"
  },
  "P-NC1L": {
   "name": "P-NC1L",
   "kind": "constant",
   "file": "parser.zil",
   "line": 67,
   "value": "7"
  },
  "P-NC2": {
   "name": "P-NC2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 68,
   "value": "8"
  },
  "P-NC2L": {
   "name": "P-NC2L",
   "kind": "constant",
   "file": "parser.zil",
   "line": 69,
   "value": "9"
  },
  "P-INPUT-WORDS": {
   "name": "P-INPUT-WORDS",
   "kind": "global",
   "file": "parser.zil",
   "line": 71,
   "value": "<>"
  },
  "P-END-ON-PREP": {
   "name": "P-END-ON-PREP",
   "kind": "global",
   "file": "parser.zil",
   "line": 72,
   "value": "<>"
  },
  "P-PRSA-WORD": {
   "name": "P-PRSA-WORD",
   "kind": "global",
   "file": "parser.zil",
   "line": 73,
   "value": "<>"
  },
  "QUOTE-FLAG": {
   "name": "QUOTE-FLAG",
   "kind": "global",
   "file": "parser.zil",
   "line": 74,
   "value": "<>"
  },
  "RESERVE-INBUF": {
   "name": "RESERVE-INBUF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 78,
   "value": "<ITABLE ,P-INBUF-LENGTH (BYTE LENGTH) 0>"
  },
  "AGAIN-LEXV": {
   "name": "AGAIN-LEXV",
   "kind": "global",
   "file": "parser.zil",
   "line": 81,
   "value": "<ITABLE 39 ;60 (LEXV) 0 <BYTE 0> <BYTE 0>>"
  },
  "RESERVE-LEXV": {
   "name": "RESERVE-LEXV",
   "kind": "global",
   "file": "parser.zil",
   "line": 82,
   "value": "<ITABLE 39 ;60 (LEXV) 0 <BYTE 0> <BYTE 0>>"
  },
  "AGAIN-DIR": {
   "name": "AGAIN-DIR",
   "kind": "global",
   "file": "parser.zil",
   "line": 83,
   "value": "<>"
  },
  "RESERVE-PTR": {
   "name": "RESERVE-PTR",
   "kind": "global",
   "file": "parser.zil",
   "line": 84,
   "value": "<>"
  },
  "OOPS-INBUF": {
   "name": "OOPS-INBUF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 88,
   "value": "<ITABLE ,P-INBUF-LENGTH (BYTE LENGTH) 0>"
  },
  "OOPS-TABLE": {
   "name": "OOPS-TABLE",
   "kind": "global",
   "file": "parser.zil",
   "line": 90,
   "value": "<TABLE <> <> <> <>>"
  },
  "O-PTR": {
   "name": "O-PTR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 91,
   "value": "0"
  },
  "O-START": {
   "name": "O-START",
   "kind": "constant",
   "file": "parser.zil",
   "line": 92,
   "value": "1"
  },
  "O-LENGTH": {
   "name": "O-LENGTH",
   "kind": "constant",
   "file": "parser.zil",
   "line": 93,
   "value": "2"
  },
  "O-END": {
   "name": "O-END",
   "kind": "constant",
   "file": "parser.zil",
   "line": 94,
   "value": "3"
  },
  "P-WALK-DIR": {
   "name": "P-WALK-DIR",
   "kind": "global",
   "file": "parser.zil",
   "line": 422,
   "value": "<>"
  },
  "P-NUMBER": {
   "name": "P-NUMBER",
   "kind": "global",
   "file": "parser.zil",
   "line": 532,
   "value": "0"
  },
  "P-SLOCBITS": {
   "name": "P-SLOCBITS",
   "kind": "global",
   "file": "parser.zil",
   "line": 669,
   "value": "0"
  },
  "P-SYNLEN": {
   "name": "P-SYNLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 671,
   "value": "8"
  },
  "P-SBITS": {
   "name": "P-SBITS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 673,
   "value": "0"
  },
  "P-SPREP1": {
   "name": "P-SPREP1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 675,
   "value": "1"
  },
  "P-SPREP2": {
   "name": "P-SPREP2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 677,
   "value": "2"
  },
  "P-SFWIM1": {
   "name": "P-SFWIM1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 679,
   "value": "3"
  },
  "P-SFWIM2": {
   "name": "P-SFWIM2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 681,
   "value": "4"
  },
  "P-SLOC1": {
   "name": "P-SLOC1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 683,
   "value": "5"
  },
  "P-SLOC2": {
   "name": "P-SLOC2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 685,
   "value": "6"
  },
  "P-SACTION": {
   "name": "P-SACTION",
   "kind": "constant",
   "file": "parser.zil",
   "line": 687,
   "value": "7"
  },
  "P-SONUMS": {
   "name": "P-SONUMS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 689,
   "value": "3"
  },
  "P-GWIMBIT": {
   "name": "P-GWIMBIT",
   "kind": "global",
   "file": "parser.zil",
   "line": 860,
   "value": "0"
  },
  "P-NAM": {
   "name": "P-NAM",
   "kind": "global",
   "file": "parser.zil",
   "line": 916,
   "value": "<>"
  },
  "P-ADJ": {
   "name": "P-ADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 918,
   "value": "<>"
  },
  "P-PRSO": {
   "name": "P-PRSO",
   "kind": "global",
   "file": "parser.zil",
   "line": 922,
   "value": "<ITABLE NONE 50>"
  },
  "P-PRSI": {
   "name": "P-PRSI",
   "kind": "global",
   "file": "parser.zil",
   "line": 924,
   "value": "<ITABLE NONE 50>"
  },
  "P-BUTS": {
   "name": "P-BUTS",
   "kind": "global",
   "file": "parser.zil",
   "line": 926,
   "value": "<ITABLE NONE 50>"
  },
  "P-MERGE": {
   "name": "P-MERGE",
   "kind": "global",
   "file": "parser.zil",
   "line": 928,
   "value": "<ITABLE NONE 50>"
  },
  "P-OCLAUSE": {
   "name": "P-OCLAUSE",
   "kind": "global",
   "file": "parser.zil",
   "line": 930,
   "value": "<ITABLE NONE 50>"
  },
  "P-MATCHLEN": {
   "name": "P-MATCHLEN",
   "kind": "global",
   "file": "parser.zil",
   "line": 932,
   "value": "0"
  },
  "P-GETFLAGS": {
   "name": "P-GETFLAGS",
   "kind": "global",
   "file": "parser.zil",
   "line": 934,
   "value": "0"
  },
  "P-ALL": {
   "name": "P-ALL",
   "kind": "constant",
   "file": "parser.zil",
   "line": 936,
   "value": "1"
  },
  "P-ONE": {
   "name": "P-ONE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 938,
   "value": "2"
  },
  "P-INHIBIT": {
   "name": "P-INHIBIT",
   "kind": "constant",
   "file": "parser.zil",
   "line": 940,
   "value": "4"
  },
  "P-CSPTR": {
   "name": "P-CSPTR",
   "kind": "global",
   "file": "parser.zil",
   "line": 942,
   "value": "<>"
  },
  "P-CEPTR": {
   "name": "P-CEPTR",
   "kind": "global",
   "file": "parser.zil",
   "line": 943,
   "value": "<>"
  },
  "P-AND": {
   "name": "P-AND",
   "kind": "global",
   "file": "parser.zil",
   "line": 944,
   "value": "<>"
  },
  "SH": {
   "name": "SH",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1014,
   "value": "128"
  },
  "SC": {
   "name": "SC",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1015,
   "value": "64"
  },
  "SIR": {
   "name": "SIR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1016,
   "value": "32"
  },
  "SOG": {
   "name": "SOG",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1017,
   "value": "16"
  },
  "STAKE": {
   "name": "STAKE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1018,
   "value": "8"
  },
  "SMANY": {
   "name": "SMANY",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1019,
   "value": "4"
  },
  "SHAVE": {
   "name": "SHAVE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1020,
   "value": "2"
  },
  "P-MOBY-FOUND": {
   "name": "P-MOBY-FOUND",
   "kind": "global",
   "file": "parser.zil",
   "line": 1138,
   "value": "<>"
  },
  "P-XNAM": {
   "name": "P-XNAM",
   "kind": "global",
   "file": "parser.zil",
   "line": 1139,
   "value": "<>"
  },
  "P-XADJ": {
   "name": "P-XADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 1140,
   "value": "<>"
  },
  "P-SRCBOT": {
   "name": "P-SRCBOT",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1219,
   "value": "2"
  },
  "P-SRCTOP": {
   "name": "P-SRCTOP",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1221,
   "value": "0"
  },
  "P-SRCALL": {
   "name": "P-SRCALL",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1223,
   "value": "1"
  },
  "VERBOSE": {
   "name": "VERBOSE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 5,
   "value": "<>"
  },
  "SUPER-BRIEF": {
   "name": "SUPER-BRIEF",
   "kind": "global",
   "file": "verbs.zil",
   "line": 7,
   "value": "<>"
  },
  "LIT": {
   "name": "LIT",
   "kind": "global",
   "file": "verbs.zil",
   "line": 66,
   "value": "0"
  },
  "MOVES": {
   "name": "MOVES",
   "kind": "global",
   "file": "verbs.zil",
   "line": 215,
   "value": "0"
  },
  "INTERNAL-MOVES": {
   "name": "INTERNAL-MOVES",
   "kind": "global",
   "file": "verbs.zil",
   "line": 217,
   "value": "0"
  },
  "SCORE": {
   "name": "SCORE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 219,
   "value": "0"
  },
  "DAY": {
   "name": "DAY",
   "kind": "global",
   "file": "verbs.zil",
   "line": 221,
   "value": "1"
  },
  "NEXITSTR": {
   "name": "NEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 421,
   "value": "0"
  },
  "FEXITFCN": {
   "name": "FEXITFCN",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 422,
   "value": "0"
  },
  "INDENTS": {
   "name": "INDENTS",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 508,
   "value": "<PTABLE \"\" \"  \" \"    \" \"      \" \"        \" \"          \">"
  },
  "FUMBLE-NUMBER": {
   "name": "FUMBLE-NUMBER",
   "kind": "global",
   "file": "verbs.zil",
   "line": 552,
   "value": "7"
  },
  "FUMBLE-PROB": {
   "name": "FUMBLE-PROB",
   "kind": "global",
   "file": "verbs.zil",
   "line": 554,
   "value": "8"
  },
  "HELLOS": {
   "name": "HELLOS",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1040,
   "value": "<PLTABLE \"Hello.\" \"Nice weather we're having.\" \"Goodbye.\">"
  },
  "WHEEEEE": {
   "name": "WHEEEEE",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1050,
   "value": "<PLTABLE \"You've spent too much time among the Leaping Loon-toads of Leonia.\" \"Having fun?\" \"Wheeeeeee!!!\">"
  },
  "HO-HUM": {
   "name": "HO-HUM",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1213,
   "value": "<PLTABLE \" isn't notably helpful.\" \" has no effect.\" \" is as worthwhile as cleaning a Grotch cage.\">"
  },
  "SERIAL": {
   "name": "SERIAL",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1644,
   "value": "0"
  },
  "YUKS": {
   "name": "YUKS",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1982,
   "value": "<PLTABLE \"Fat chance.\" \"A valiant attempt.\" \"You can't be serious.\" \"Not bloody likely.\" \"An interesting idea...\" \"What a concept!\">"
  }
 },
 "syntax": {
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
     "line": 24
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
     "line": 26
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
     "line": 29
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
     "line": 31
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
     "line": 34
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
     "line": 37
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
     "line": 39
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
     "line": 41
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
     "line": 43
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
     "line": 45
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
     "line": 47
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
     "action": "V-$VERIFY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 49
    },
    {
     "pattern": "$VERIFY OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-$VERIFY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 50
    }
   ]
  },
  "$REFRESH": {
   "verb": "$REFRESH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$REFRESH",
     "objects": 0,
     "particles": [],
     "action": "V-$REFRESH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 52
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
     "line": 54
    }
   ]
  },
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
     "line": 56
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
     "action": "V-$RANDOM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 58
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
     "action": "V-$COMMAND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 60
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
     "action": "V-$RECORD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 62
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
     "action": "V-$UNRECORD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 64
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
     "file": "syntax.zil",
     "line": 71
    },
    {
     "pattern": "ANSWER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-REPLY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 72
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
     "line": 75
    }
   ]
  },
  "ATTACK": {
   "verb": "ATTACK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ATTACK OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 77
    },
    {
     "pattern": "ATTACK OBJECT WITH OBJECT (HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 78
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
     "line": 81
    }
   ]
  },
  "CLIMB": {
   "verb": "CLIMB",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CLIMB",
     "objects": 0,
     "particles": [],
     "action": "V-GO-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 83
    },
    {
     "pattern": "CLIMB ON OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-CLIMB-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 84
    },
    {
     "pattern": "CLIMB UP OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-CLIMB-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 85
    },
    {
     "pattern": "CLIMB TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-CLIMB-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 86
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
     "line": 87
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
     "line": 88
    },
    {
     "pattern": "CLIMB OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLIMB-FOO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 89
    },
    {
     "pattern": "CLIMB IN OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-BOARD",
     "preaction": "PRE-BOARD",
     "file": "syntax.zil",
     "line": 90
    }
   ]
  },
  "SIT": {
   "verb": "SIT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SIT",
     "objects": 0,
     "particles": [],
     "action": "V-SIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 92
    },
    {
     "pattern": "SIT ON OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-CLIMB-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 93
    },
    {
     "pattern": "SIT DOWN OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-SIT-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 94
    },
    {
     "pattern": "SIT IN OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
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
     "pattern": "SIT OBJECT (HELD MANY HAVE TAKE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 96
    },
    {
     "pattern": "SIT OBJECT (HELD MANY HAVE TAKE) UNDER OBJECT",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": "PRE-PUT-UNDER",
     "file": "syntax.zil",
     "line": 97
    },
    {
     "pattern": "SIT OBJECT (TAKE) OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-ATTRACT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 99
    },
    {
     "pattern": "SIT OBJECT (TAKE) NEAR OBJECT",
     "objects": 2,
     "particles": [
      "NEAR"
     ],
     "action": "V-ATTRACT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 100
    },
    {
     "pattern": "SIT OBJECT ACROSS OBJECT",
     "objects": 2,
     "particles": [
      "ACROSS"
     ],
     "action": "V-SPAN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 101
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
     "file": "syntax.zil",
     "line": 104
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
     "line": 105
    },
    {
     "pattern": "STAND ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-STAND-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 106
    }
   ]
  },
  "CLOSE": {
   "verb": "CLOSE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CLOSE OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLOSE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 109
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
     "action": "V-CURSE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 112
    }
   ]
  },
  "DISEMBARK": {
   "verb": "DISEMBARK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DISEMBARK OBJECT (FIND RMUNGBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-DISEMBARK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 115
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
     "preaction": null,
     "file": "syntax.zil",
     "line": 117
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
     "line": 118
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
     "line": 119
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
     "line": 120
    }
   ]
  },
  "EAT": {
   "verb": "EAT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EAT OBJECT (FIND FOODBIT) (TAKE)",
     "objects": 1,
     "particles": [],
     "action": "V-EAT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 123
    },
    {
     "pattern": "EAT FROM OBJECT (TAKE)",
     "objects": 1,
     "particles": [
      "FROM"
     ],
     "action": "V-EAT-FROM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 124
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
     "line": 127
    },
    {
     "pattern": "ENTER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 128
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
     "line": 129
    },
    {
     "pattern": "EXIT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 130
    }
   ]
  },
  "EXAMINE": {
   "verb": "EXAMINE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EXAMINE OBJECT (HELD CARRIED ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-EXAMINE",
     "preaction": "PRE-EXAMINE",
     "file": "syntax.zil",
     "line": 132
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
     "line": 134
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
     "line": 136
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
     "line": 140
    }
   ]
  },
  "FIRE": {
   "verb": "FIRE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FIRE OBJECT WITH OBJECT (HELD)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-SZAP",
     "preaction": "PRE-SZAP",
     "file": "syntax.zil",
     "line": 143
    },
    {
     "pattern": "FIRE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-ZAP",
     "preaction": "PRE-ZAP",
     "file": "syntax.zil",
     "line": 144
    },
    {
     "pattern": "FIRE AT OBJECT",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-ZAP",
     "preaction": "PRE-ZAP",
     "file": "syntax.zil",
     "line": 145
    },
    {
     "pattern": "FIRE OBJECT (HELD) AT OBJECT",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-ZAP",
     "preaction": "PRE-ZAP",
     "file": "syntax.zil",
     "line": 146
    }
   ]
  },
  "FOLLOW": {
   "verb": "FOLLOW",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FOLLOW OBJECT (FIND ACTORBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 149
    }
   ]
  },
  "FLUSH": {
   "verb": "FLUSH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FLUSH OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FLUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 152
    }
   ]
  },
  "FLY": {
   "verb": "FLY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FLY",
     "objects": 0,
     "particles": [],
     "action": "V-FLY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 154
    },
    {
     "pattern": "FLY OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FLY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 155
    }
   ]
  },
  "GIVE": {
   "verb": "GIVE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "GIVE OBJECT (MANY HELD HAVE) TO OBJECT (FIND ACTORBIT)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-GIVE",
     "preaction": "PRE-GIVE",
     "file": "syntax.zil",
     "line": 157
    },
    {
     "pattern": "GIVE OBJECT (FIND ACTORBIT) (ON-GROUND) OBJECT (MANY HELD HAVE)",
     "objects": 2,
     "particles": [],
     "action": "V-SGIVE",
     "preaction": "PRE-SGIVE",
     "file": "syntax.zil",
     "line": 159
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
     "line": 163
    },
    {
     "pattern": "HELLO OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-HELLO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 164
    }
   ]
  },
  "HELP": {
   "verb": "HELP",
   "synonyms": [],
   "productions": [
    {
     "pattern": "HELP",
     "objects": 0,
     "particles": [],
     "action": "V-HINT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 167
    },
    {
     "pattern": "HELP OFF OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-HINTS-NO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 168
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
     "line": 171
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
     "line": 172
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
     "line": 173
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
     "line": 174
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
     "line": 175
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
     "line": 176
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
     "line": 179
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
     "line": 181
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
     "line": 183
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
     "line": 184
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
     "line": 185
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
     "file": "syntax.zil",
     "line": 188
    },
    {
     "pattern": "LEAVE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-DROP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 189
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
     "line": 191
    }
   ]
  },
  "LOCK": {
   "verb": "LOCK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LOCK OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (HELD)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-LOCK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 193
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
     "line": 195
    },
    {
     "pattern": "LOOK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-LOOK-CRETIN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 196
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
     "line": 197
    },
    {
     "pattern": "LOOK AT OBJECT (HELD CARRIED ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-EXAMINE",
     "preaction": "PRE-EXAMINE",
     "file": "syntax.zil",
     "line": 198
    },
    {
     "pattern": "LOOK ON OBJECT (HELD CARRIED ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-EXAMINE",
     "preaction": "PRE-EXAMINE",
     "file": "syntax.zil",
     "line": 200
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
     "line": 202
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
     "line": 203
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
     "line": 204
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
     "line": 205
    },
    {
     "pattern": "LOOK OUT OBJECT (HELD CARRIED ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 206
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
     "line": 207
    },
    {
     "pattern": "LOOK DOWN OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-LOOK-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 208
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
     "line": 211
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
     "line": 212
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
     "line": 213
    },
    {
     "pattern": "SEARCH WITH OBJECT",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-SEARCH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 214
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
     "line": 217
    },
    {
     "pattern": "MOVE UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-PUSH-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 218
    },
    {
     "pattern": "MOVE DOWN OBJECT",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-PUSH-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 219
    }
   ]
  },
  "POINT": {
   "verb": "POINT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "POINT AT OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-POINT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 221
    },
    {
     "pattern": "POINT TO OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-POINT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 222
    },
    {
     "pattern": "POINT OBJECT (HELD CARRIED HAVE) AT OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-POINT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 223
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
     "line": 227
    },
    {
     "pattern": "PULL DOWN OBJECT",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-PUSH-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 228
    },
    {
     "pattern": "PULL UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-PUSH-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 229
    },
    {
     "pattern": "PULL ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-PULL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 230
    },
    {
     "pattern": "PULL OBJECT WITH OBJECT (TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ZATTRACT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 231
    }
   ]
  },
  "DESTROY": {
   "verb": "DESTROY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DESTROY OBJECT (ON-GROUND IN-ROOM HELD CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-MUNG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 234
    },
    {
     "pattern": "DESTROY OBJECT (ON-GROUND IN-ROOM HELD CARRIED) WITH OBJECT (HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 235
    },
    {
     "pattern": "DESTROY DOWN OBJECT (ON-GROUND IN-ROOM HELD CARRIED)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-MUNG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 237
    }
   ]
  },
  "OPEN": {
   "verb": "OPEN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "OPEN OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-OPEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 240
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
     "line": 241
    },
    {
     "pattern": "OPEN OBJECT WITH OBJECT (HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-OPEN-WITH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 242
    }
   ]
  },
  "PICK": {
   "verb": "PICK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PICK UP OBJECT (FIND TAKEBIT) (ON-GROUND MANY)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 245
    },
    {
     "pattern": "PICK UP OBJECT WITH OBJECT (TAKE)",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-ZATTRACT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 246
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
     "file": "syntax.zil",
     "line": 248
    },
    {
     "pattern": "PLAY WITH OBJECT (FIND ACTORBIT)",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-PLAY-WITH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 249
    },
    {
     "pattern": "PLAY OBJECT WITH OBJECT (FIND ACTORBIT)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-PLAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 250
    }
   ]
  },
  "PUSH": {
   "verb": "PUSH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PUSH OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-PUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 252
    },
    {
     "pattern": "PUSH ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-PUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 253
    },
    {
     "pattern": "PUSH OFF OBJECT",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-PUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 254
    },
    {
     "pattern": "PUSH AGAINST OBJECT",
     "objects": 1,
     "particles": [
      "AGAINST"
     ],
     "action": "V-PUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 255
    },
    {
     "pattern": "PUSH UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-PUSH-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 256
    },
    {
     "pattern": "PUSH DOWN OBJECT",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-PUSH-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 257
    },
    {
     "pattern": "PUSH OBJECT UNDER OBJECT",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": "PRE-PUT-UNDER",
     "file": "syntax.zil",
     "line": 258
    }
   ]
  },
  "PUT": {
   "verb": "PUT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PUT OBJECT (HELD MANY HAVE TAKE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 261
    },
    {
     "pattern": "PUT OBJECT (HELD MANY) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 262
    },
    {
     "pattern": "PUT DOWN OBJECT (HELD MANY HAVE)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-DROP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 263
    },
    {
     "pattern": "PUT OBJECT (HELD MANY HAVE TAKE) UNDER OBJECT",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": "PRE-PUT-UNDER",
     "file": "syntax.zil",
     "line": 264
    },
    {
     "pattern": "PUT ON OBJECT (HAVE TAKE)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-WEAR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 265
    },
    {
     "pattern": "PUT OBJECT (TAKE) OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-ATTRACT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 266
    },
    {
     "pattern": "PUT OBJECT (TAKE) NEAR OBJECT",
     "objects": 2,
     "particles": [
      "NEAR"
     ],
     "action": "V-ATTRACT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 267
    },
    {
     "pattern": "PUT OBJECT ACROSS OBJECT",
     "objects": 2,
     "particles": [
      "ACROSS"
     ],
     "action": "V-SPAN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 268
    },
    {
     "pattern": "PUT OBJECT (HELD CARRIED HAVE) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-SLIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 269
    },
    {
     "pattern": "PUT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-INSERT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 270
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
     "file": "syntax.zil",
     "line": 273
    }
   ]
  },
  "REACH": {
   "verb": "REACH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "REACH IN OBJECT (FIND CONTBIT)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-REACH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 276
    },
    {
     "pattern": "REACH FOR OBJECT",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-REACH-FOR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 277
    }
   ]
  },
  "READ": {
   "verb": "READ",
   "synonyms": [],
   "productions": [
    {
     "pattern": "READ OBJECT (FIND READBIT) (TAKE)",
     "objects": 1,
     "particles": [],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "syntax.zil",
     "line": 279
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
     "line": 282
    },
    {
     "pattern": "RUB OBJECT WITH OBJECT (TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ZATTRACT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 283
    },
    {
     "pattern": "RUB OBJECT (TAKE) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-ATTRACT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 284
    }
   ]
  },
  "SCRUB": {
   "verb": "SCRUB",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SCRUB OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SCRUB",
     "preaction": null,
     "file": "syntax.zil",
     "line": 287
    },
    {
     "pattern": "SCRUB UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-SCRUB",
     "preaction": null,
     "file": "syntax.zil",
     "line": 288
    },
    {
     "pattern": "SCRUB OBJECT WITH OBJECT (HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-SCRUB",
     "preaction": null,
     "file": "syntax.zil",
     "line": 289
    }
   ]
  },
  "SLEEP": {
   "verb": "SLEEP",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SLEEP",
     "objects": 0,
     "particles": [],
     "action": "V-SLEEP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 292
    }
   ]
  },
  "SHAKE": {
   "verb": "SHAKE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SHAKE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SHAKE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 294
    },
    {
     "pattern": "SHAKE OBJECT WITH OBJECT (FIND ACTORBIT)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-SHAKE-WITH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 295
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
     "preaction": "PRE-PUT-UNDER",
     "file": "syntax.zil",
     "line": 297
    },
    {
     "pattern": "SLIDE OBJECT (HELD CARRIED HAVE) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-SLIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 298
    },
    {
     "pattern": "SLIDE OBJECT ACROSS OBJECT",
     "objects": 2,
     "particles": [
      "ACROSS"
     ],
     "action": "V-SPAN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 299
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
     "line": 302
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
     "line": 305
    }
   ]
  },
  "STEP": {
   "verb": "STEP",
   "synonyms": [],
   "productions": [
    {
     "pattern": "STEP ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-STEP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 308
    },
    {
     "pattern": "STEP IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-STEP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 309
    }
   ]
  },
  "STRIKE": {
   "verb": "STRIKE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "STRIKE OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED ON-GROUND IN-ROOM HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 311
    },
    {
     "pattern": "STRIKE OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 313
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
     "line": 315
    },
    {
     "pattern": "SWIM OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SWIM-DIR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 316
    },
    {
     "pattern": "SWIM TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-SWIM-DIR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 317
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
     "line": 318
    },
    {
     "pattern": "SWIM UP OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-SWIM-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 319
    },
    {
     "pattern": "SWIM DOWN OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-SWIM-DIR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 320
    }
   ]
  },
  "TAKE": {
   "verb": "TAKE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TAKE OBJECT (FIND TAKEBIT) (ON-GROUND MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 323
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
     "line": 324
    },
    {
     "pattern": "TAKE OUT OBJECT (FIND RMUNGBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-DISEMBARK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 325
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
     "line": 326
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEBIT) (CARRIED IN-ROOM) OUT OBJECT",
     "objects": 2,
     "particles": [
      "OUT"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 327
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEBIT) (CARRIED IN-ROOM) OFF OBJECT",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 329
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEBIT) (IN-ROOM CARRIED MANY) FROM OBJECT (ON-GROUND HELD)",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 331
    },
    {
     "pattern": "TAKE OFF OBJECT (FIND WEARBIT) (HELD CARRIED MANY)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-TAKE-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 333
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
     "line": 334
    },
    {
     "pattern": "TAKE OBJECT (TAKE) OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-ATTRACT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 335
    },
    {
     "pattern": "TAKE OBJECT (TAKE) NEAR OBJECT",
     "objects": 2,
     "particles": [
      "NEAR"
     ],
     "action": "V-ATTRACT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 336
    },
    {
     "pattern": "TAKE OBJECT WITH OBJECT (TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ZATTRACT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 337
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
     "action": "V-REMOVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 340
    },
    {
     "pattern": "REMOVE OBJECT FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 341
    },
    {
     "pattern": "REMOVE OBJECT WITH OBJECT (TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ZATTRACT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 342
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
     "line": 344
    },
    {
     "pattern": "TELL OBJECT (FIND ACTORBIT) (IN-ROOM) FOR OBJECT",
     "objects": 2,
     "particles": [
      "FOR"
     ],
     "action": "V-ASK-FOR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 345
    }
   ]
  },
  "SMILE": {
   "verb": "SMILE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SMILE AT OBJECT (FIND ACTORBIT)",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-SMILE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 348
    },
    {
     "pattern": "SMILE",
     "objects": 0,
     "particles": [],
     "action": "V-SMILE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 349
    }
   ]
  },
  "SALUTE": {
   "verb": "SALUTE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SALUTE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SALUTE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 352
    }
   ]
  },
  "SAY": {
   "verb": "SAY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SAY TO OBJECT (FIND ACTORBIT) (IN-ROOM)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-TALK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 354
    },
    {
     "pattern": "SAY",
     "objects": 0,
     "particles": [],
     "action": "V-SAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 355
    }
   ]
  },
  "THROW": {
   "verb": "THROW",
   "synonyms": [],
   "productions": [
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) AT OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-THROW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 358
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
     "line": 360
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
     "line": 362
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
     "line": 363
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
     "line": 364
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
     "line": 365
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-THROW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 366
    }
   ]
  },
  "TURN": {
   "verb": "TURN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TURN OBJECT (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (ON-GROUND IN-ROOM HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TURN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 369
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
     "line": 371
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
     "line": 373
    },
    {
     "pattern": "TURN OBJECT (ON-GROUND IN-ROOM) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-SET",
     "preaction": null,
     "file": "syntax.zil",
     "line": 375
    },
    {
     "pattern": "TURN OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-SET",
     "preaction": null,
     "file": "syntax.zil",
     "line": 376
    }
   ]
  },
  "ACTIVATE": {
   "verb": "ACTIVATE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ACTIVATE OBJECT (FIND LIGHTBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 379
    }
   ]
  },
  "TYPE": {
   "verb": "TYPE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TYPE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-TYPE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 381
    },
    {
     "pattern": "TYPE IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-TYPE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 382
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
     "line": 384
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
     "line": 388
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
     "line": 391
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
     "line": 392
    }
   ]
  },
  "WALK": {
   "verb": "WALK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WALK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WALK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 395
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
     "line": 396
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
     "line": 397
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
     "line": 398
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
     "line": 399
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
     "line": 400
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
     "line": 401
    },
    {
     "pattern": "WALK OUT OBJECT",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 402
    },
    {
     "pattern": "WALK OBJECT (HELD CARRIED HAVE) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-SLIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 403
    }
   ]
  },
  "WAVE": {
   "verb": "WAVE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WAVE OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-WAVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 406
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
     "line": 407
    },
    {
     "pattern": "WAVE OBJECT (TAKE) OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-ATTRACT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 408
    },
    {
     "pattern": "WAVE OBJECT (TAKE) NEAR OBJECT",
     "objects": 2,
     "particles": [
      "NEAR"
     ],
     "action": "V-ATTRACT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 409
    }
   ]
  },
  "WEAR": {
   "verb": "WEAR",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WEAR OBJECT (HAVE TAKE)",
     "objects": 1,
     "particles": [],
     "action": "V-WEAR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 412
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
     "line": 415
    },
    {
     "pattern": "YELL AT OBJECT (FIND ACTORBIT)",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-SCOLD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 416
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
     "line": 419
    }
   ]
  },
  "YES": {
   "verb": "YES",
   "synonyms": [],
   "productions": [
    {
     "pattern": "YES",
     "objects": 0,
     "particles": [],
     "action": "V-YES",
     "preaction": null,
     "file": "syntax.zil",
     "line": 422
    },
    {
     "pattern": "YES OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-YES",
     "preaction": null,
     "file": "syntax.zil",
     "line": 423
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
     "line": 426
    }
   ]
  },
  "MAYBE": {
   "verb": "MAYBE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "MAYBE",
     "objects": 0,
     "particles": [],
     "action": "V-MAYBE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 429
    }
   ]
  },
  "POUR": {
   "verb": "POUR",
   "synonyms": [],
   "productions": [
    {
     "pattern": "POUR OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-POUR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 435
    },
    {
     "pattern": "POUR OBJECT OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-POUR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 436
    },
    {
     "pattern": "POUR OBJECT ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-POUR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 437
    },
    {
     "pattern": "POUR OBJECT OUT OBJECT",
     "objects": 2,
     "particles": [
      "OUT"
     ],
     "action": "V-POUR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 438
    },
    {
     "pattern": "POUR OBJECT IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-POUR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 439
    }
   ]
  },
  "EMPTY": {
   "verb": "EMPTY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EMPTY OBJECT (HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-EMPTY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 442
    },
    {
     "pattern": "EMPTY OBJECT (HAVE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-EMPTY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 443
    }
   ]
  },
  "ATTRACT": {
   "verb": "ATTRACT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ATTRACT OBJECT WITH OBJECT (TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ZATTRACT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 445
    }
   ]
  },
  "FIX": {
   "verb": "FIX",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FIX OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FIX-IT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 447
    }
   ]
  },
  "OIL": {
   "verb": "OIL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "OIL OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-OIL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 450
    },
    {
     "pattern": "OIL OBJECT WITH OBJECT (HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-OIL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 451
    }
   ]
  },
  "SHOW": {
   "verb": "SHOW",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SHOW OBJECT (HAVE) TO OBJECT (FIND ACTORBIT)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-SHOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 454
    }
   ]
  },
  "TASTE": {
   "verb": "TASTE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TASTE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-TASTE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 456
    }
   ]
  },
  "ESCAPE": {
   "verb": "ESCAPE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ESCAPE",
     "objects": 0,
     "particles": [],
     "action": "V-ZESCAPE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 458
    }
   ]
  },
  "TIME": {
   "verb": "TIME",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TIME",
     "objects": 0,
     "particles": [],
     "action": "V-TIME",
     "preaction": null,
     "file": "syntax.zil",
     "line": 460
    }
   ]
  },
  "SCOLD": {
   "verb": "SCOLD",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SCOLD OBJECT (FIND ACTORBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-SCOLD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 463
    }
   ]
  }
 },
 "vocab": {
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
  "$VERIFY": {
   "word": "$VERIFY",
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
  "VERSION": {
   "word": "VERSION",
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
     "of": "CLIMB"
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
     "of": "POINT"
    },
    {
     "kind": "particle",
     "of": "RUB"
    },
    {
     "kind": "particle",
     "of": "SWIM"
    },
    {
     "kind": "particle",
     "of": "SAY"
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
     "of": "SHOW"
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
     "of": "CLIMB"
    },
    {
     "kind": "particle",
     "of": "FIRE"
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
     "of": "SEARCH"
    },
    {
     "kind": "particle",
     "of": "PULL"
    },
    {
     "kind": "particle",
     "of": "DESTROY"
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
     "of": "PLAY"
    },
    {
     "kind": "particle",
     "of": "PUT"
    },
    {
     "kind": "particle",
     "of": "RUB"
    },
    {
     "kind": "particle",
     "of": "SCRUB"
    },
    {
     "kind": "particle",
     "of": "SHAKE"
    },
    {
     "kind": "particle",
     "of": "SLIDE"
    },
    {
     "kind": "particle",
     "of": "STRIKE"
    },
    {
     "kind": "particle",
     "of": "TAKE"
    },
    {
     "kind": "particle",
     "of": "REMOVE"
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
     "of": "UNLOCK"
    },
    {
     "kind": "particle",
     "of": "WALK"
    },
    {
     "kind": "particle",
     "of": "ATTRACT"
    },
    {
     "kind": "particle",
     "of": "OIL"
    },
    {
     "kind": "word",
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
     "of": "CRACKED-BOARD"
    },
    {
     "kind": "noun",
     "of": "GOOD-BOARD"
    },
    {
     "kind": "noun",
     "of": "FIRST-BOARD"
    },
    {
     "kind": "noun",
     "of": "FOURTH-BOARD"
    },
    {
     "kind": "noun",
     "of": "THIRD-BOARD"
    },
    {
     "kind": "noun",
     "of": "SECOND-BOARD"
    },
    {
     "kind": "noun",
     "of": "FRIED-BOARD"
    }
   ]
  },
  "CLIMB": {
   "word": "CLIMB",
   "roles": [
    {
     "kind": "verb",
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
     "of": "SIT"
    },
    {
     "kind": "particle",
     "of": "STAND"
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
     "of": "STEP"
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
     "of": "POUR"
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "UP": {
   "word": "UP",
   "roles": [
    {
     "kind": "particle",
     "of": "CLIMB"
    },
    {
     "kind": "particle",
     "of": "STAND"
    },
    {
     "kind": "particle",
     "of": "MOVE"
    },
    {
     "kind": "particle",
     "of": "PULL"
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
     "of": "PUSH"
    },
    {
     "kind": "particle",
     "of": "SCRUB"
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
  "DOWN": {
   "word": "DOWN",
   "roles": [
    {
     "kind": "particle",
     "of": "CLIMB"
    },
    {
     "kind": "particle",
     "of": "SIT"
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
     "of": "MOVE"
    },
    {
     "kind": "particle",
     "of": "PULL"
    },
    {
     "kind": "particle",
     "of": "DESTROY"
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
     "of": "SWIM"
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
     "of": "CLIMB"
    },
    {
     "kind": "particle",
     "of": "SIT"
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
     "of": "SEARCH"
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
     "of": "STEP"
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
     "of": "TYPE"
    },
    {
     "kind": "particle",
     "of": "WALK"
    },
    {
     "kind": "particle",
     "of": "POUR"
    },
    {
     "kind": "particle",
     "of": "EMPTY"
    },
    {
     "kind": "direction",
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
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "UNDER": {
   "word": "UNDER",
   "roles": [
    {
     "kind": "particle",
     "of": "SIT"
    },
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
    }
   ]
  },
  "OVER": {
   "word": "OVER",
   "roles": [
    {
     "kind": "particle",
     "of": "SIT"
    },
    {
     "kind": "particle",
     "of": "JUMP"
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
     "of": "WAVE"
    },
    {
     "kind": "particle",
     "of": "POUR"
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "NEAR": {
   "word": "NEAR",
   "roles": [
    {
     "kind": "particle",
     "of": "SIT"
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
     "of": "WAVE"
    }
   ]
  },
  "ACROSS": {
   "word": "ACROSS",
   "roles": [
    {
     "kind": "particle",
     "of": "SIT"
    },
    {
     "kind": "particle",
     "of": "JUMP"
    },
    {
     "kind": "particle",
     "of": "PUT"
    },
    {
     "kind": "particle",
     "of": "SLIDE"
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
  "CLOSE": {
   "word": "CLOSE",
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
  "DISEMBARK": {
   "word": "DISEMBARK",
   "roles": [
    {
     "kind": "verb",
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
  "FROM": {
   "word": "FROM",
   "roles": [
    {
     "kind": "particle",
     "of": "EAT"
    },
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
     "of": "REMOVE"
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
  "FIRE": {
   "word": "FIRE",
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
     "of": "FIRE"
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
     "of": "POINT"
    },
    {
     "kind": "particle",
     "of": "SMILE"
    },
    {
     "kind": "particle",
     "of": "THROW"
    },
    {
     "kind": "particle",
     "of": "WAVE"
    },
    {
     "kind": "particle",
     "of": "YELL"
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
  "FLUSH": {
   "word": "FLUSH",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "FLY": {
   "word": "FLY",
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
  "HELP": {
   "word": "HELP",
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
  "OFF": {
   "word": "OFF",
   "roles": [
    {
     "kind": "particle",
     "of": "HELP"
    },
    {
     "kind": "particle",
     "of": "JUMP"
    },
    {
     "kind": "particle",
     "of": "PUSH"
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
  "KICK": {
   "word": "KICK",
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
  "LEAVE": {
   "word": "LEAVE",
   "roles": [
    {
     "kind": "verb",
     "of": null
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
     "of": "PADLOCK"
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
  "BEHIND": {
   "word": "BEHIND",
   "roles": [
    {
     "kind": "particle",
     "of": "LOOK"
    }
   ]
  },
  "OUT": {
   "word": "OUT",
   "roles": [
    {
     "kind": "particle",
     "of": "LOOK"
    },
    {
     "kind": "particle",
     "of": "TAKE"
    },
    {
     "kind": "particle",
     "of": "WALK"
    },
    {
     "kind": "particle",
     "of": "POUR"
    },
    {
     "kind": "direction",
     "of": null
    }
   ]
  },
  "FOR": {
   "word": "FOR",
   "roles": [
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
     "of": "REACH"
    },
    {
     "kind": "particle",
     "of": "TELL"
    }
   ]
  },
  "SEARCH": {
   "word": "SEARCH",
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
  "POINT": {
   "word": "POINT",
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
  "OPEN": {
   "word": "OPEN",
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
  "AGAINST": {
   "word": "AGAINST",
   "roles": [
    {
     "kind": "particle",
     "of": "PUSH"
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
  "SCRUB": {
   "word": "SCRUB",
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
     "kind": "adjective",
     "of": "SCRUB-BRUSH"
    }
   ]
  },
  "SLEEP": {
   "word": "SLEEP",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "SLEEP"
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
  "SLIDE": {
   "word": "SLIDE",
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
  "STEP": {
   "word": "STEP",
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
  "REMOVE": {
   "word": "REMOVE",
   "roles": [
    {
     "kind": "verb",
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
  "SMILE": {
   "word": "SMILE",
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
  "SALUTE": {
   "word": "SALUTE",
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
  "ACTIVATE": {
   "word": "ACTIVATE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "TYPE": {
   "word": "TYPE",
   "roles": [
    {
     "kind": "verb",
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
     "kind": "word",
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
    },
    {
     "kind": "word",
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
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "MAYBE": {
   "word": "MAYBE",
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
  "EMPTY": {
   "word": "EMPTY",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "ATTRACT": {
   "word": "ATTRACT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "FIX": {
   "word": "FIX",
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
  "OIL": {
   "word": "OIL",
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
     "kind": "adjective",
     "of": "OIL-CAN"
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
  "TASTE": {
   "word": "TASTE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "ESCAPE": {
   "word": "ESCAPE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-POD"
    },
    {
     "kind": "adjective",
     "of": "POD-DOOR"
    }
   ]
  },
  "TIME": {
   "word": "TIME",
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
  "SCOLD": {
   "word": "SCOLD",
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
  "ALL": {
   "word": "ALL",
   "roles": [
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
  "BOTH": {
   "word": "BOTH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ALL"
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
  "ABOVE": {
   "word": "ABOVE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "OVER"
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
     "of": "BLUE-ELEVATOR-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-DOORWAY"
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
  "FORE": {
   "word": "FORE",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "NORTH"
    }
   ]
  },
  "FORWARD": {
   "word": "FORWARD",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "NORTH"
    }
   ]
  },
  "FOREWARD": {
   "word": "FOREWARD",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "NORTH"
    }
   ]
  },
  "F": {
   "word": "F",
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
     "of": "RED-ELEVATOR-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-DOORWAY"
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
  "AFT": {
   "word": "AFT",
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
     "of": "GLOBAL-DOORWAY"
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
  "CW": {
   "word": "CW",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "EAST"
    }
   ]
  },
  "STARBOARD": {
   "word": "STARBOARD",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "EAST"
    }
   ]
  },
  "SB": {
   "word": "SB",
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
     "of": "GLOBAL-DOORWAY"
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
  "CCW": {
   "word": "CCW",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "WEST"
    }
   ]
  },
  "PORT": {
   "word": "PORT",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "WEST"
    },
    {
     "kind": "noun",
     "of": "WINDOW"
    }
   ]
  },
  "P": {
   "word": "P",
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
  "KILL": {
   "word": "KILL",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ATTACK"
    }
   ]
  },
  "MURDER": {
   "word": "MURDER",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ATTACK"
    }
   ]
  },
  "SLAY": {
   "word": "SLAY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ATTACK"
    }
   ]
  },
  "DISPATCH": {
   "word": "DISPATCH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ATTACK"
    }
   ]
  },
  "RECLINE": {
   "word": "RECLINE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SIT"
    }
   ]
  },
  "LIE": {
   "word": "LIE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SIT"
    }
   ]
  },
  "LAY": {
   "word": "LAY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SIT"
    }
   ]
  },
  "COLLAPSE": {
   "word": "COLLAPSE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CLOSE"
    }
   ]
  },
  "FOLD": {
   "word": "FOLD",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CLOSE"
    }
   ]
  },
  "SHORTEN": {
   "word": "SHORTEN",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CLOSE"
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
  "TROT": {
   "word": "TROT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CURSE"
    }
   ]
  },
  "KRIP": {
   "word": "KRIP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CURSE"
    }
   ]
  },
  "MEGAKRIP": {
   "word": "MEGAKRIP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CURSE"
    }
   ]
  },
  "TROTTING": {
   "word": "TROTTING",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CURSE"
    }
   ]
  },
  "RELEASE": {
   "word": "RELEASE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "DROP"
    }
   ]
  },
  "DRINK": {
   "word": "DRINK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EAT"
    }
   ]
  },
  "SWALLOW": {
   "word": "SWALLOW",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EAT"
    }
   ]
  },
  "X": {
   "word": "X",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EXAMINE"
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
  "WHAT'S": {
   "word": "WHAT'S",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EXAMINE"
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
  "ZAP": {
   "word": "ZAP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "FIRE"
    }
   ]
  },
  "BLAST": {
   "word": "BLAST",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "FIRE"
    }
   ]
  },
  "SHOOT": {
   "word": "SHOOT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "FIRE"
    }
   ]
  },
  "BURN": {
   "word": "BURN",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "FIRE"
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
  "HINT": {
   "word": "HINT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "HELP"
    }
   ]
  },
  "HINTS": {
   "word": "HINTS",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "HELP"
    }
   ]
  },
  "CLUE": {
   "word": "CLUE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "HELP"
    }
   ]
  },
  "CLUES": {
   "word": "CLUES",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "HELP"
    }
   ]
  },
  "INVISICLUE": {
   "word": "INVISICLUE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "HELP"
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
  "RUMMAGE": {
   "word": "RUMMAGE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SEARCH"
    }
   ]
  },
  "SORT": {
   "word": "SORT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SEARCH"
    }
   ]
  },
  "SIFT": {
   "word": "SIFT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SEARCH"
    }
   ]
  },
  "GESTURE": {
   "word": "GESTURE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "POINT"
    }
   ]
  },
  "AIM": {
   "word": "AIM",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "POINT"
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
  "SMASH": {
   "word": "SMASH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "DESTROY"
    }
   ]
  },
  "EXTEND": {
   "word": "EXTEND",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "OPEN"
    }
   ]
  },
  "UNFOLD": {
   "word": "UNFOLD",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "OPEN"
    }
   ]
  },
  "LENGTHEN": {
   "word": "LENGTHEN",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "OPEN"
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
  "SWAB": {
   "word": "SWAB",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SCRUB"
    }
   ]
  },
  "POLISH": {
   "word": "POLISH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SCRUB"
    }
   ]
  },
  "CLEAN": {
   "word": "CLEAN",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SCRUB"
    }
   ]
  },
  "SHINE": {
   "word": "SHINE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SCRUB"
    }
   ]
  },
  "MOP": {
   "word": "MOP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SCRUB"
    }
   ]
  },
  "BRUSH": {
   "word": "BRUSH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SCRUB"
    },
    {
     "kind": "noun",
     "of": "SCRUB-BRUSH"
    }
   ]
  },
  "SWING": {
   "word": "SWING",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SLIDE"
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
  "ASK": {
   "word": "ASK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TELL"
    }
   ]
  },
  "GRIN": {
   "word": "GRIN",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SMILE"
    }
   ]
  },
  "TALK": {
   "word": "TALK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SAY"
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
  "SET": {
   "word": "SET",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TURN"
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
  "SNEEZE": {
   "word": "SNEEZE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ZORK"
    }
   ]
  },
  "Y": {
   "word": "Y",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "YES"
    }
   ]
  },
  "AFFIRMATIVE": {
   "word": "AFFIRMATIVE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "YES"
    }
   ]
  },
  "NEGATIVE": {
   "word": "NEGATIVE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "NO"
    }
   ]
  },
  "POSSIBLY": {
   "word": "POSSIBLY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "MAYBE"
    }
   ]
  },
  "DUNNO": {
   "word": "DUNNO",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "MAYBE"
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
  "REPAIR": {
   "word": "REPAIR",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "FIX"
    },
    {
     "kind": "adjective",
     "of": "ACCESS-PANEL"
    }
   ]
  },
  "LUBRICATE": {
   "word": "LUBRICATE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "OIL"
    }
   ]
  },
  "T": {
   "word": "T",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TIME"
    }
   ]
  },
  "NE": {
   "word": "NE",
   "roles": [
    {
     "kind": "direction",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-DOORWAY"
    }
   ]
  },
  "SE": {
   "word": "SE",
   "roles": [
    {
     "kind": "direction",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-DOORWAY"
    }
   ]
  },
  "SW": {
   "word": "SW",
   "roles": [
    {
     "kind": "direction",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-DOORWAY"
    }
   ]
  },
  "NW": {
   "word": "NW",
   "roles": [
    {
     "kind": "direction",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-DOORWAY"
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
  "ARE": {
   "word": "ARE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "EQUALS": {
   "word": "EQUALS",
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
  "OUR": {
   "word": "OUR",
   "roles": [
    {
     "kind": "buzzword",
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
  "O": {
   "word": "O",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "DOOR": {
   "word": "DOOR",
   "roles": [
    {
     "kind": "noun",
     "of": "CONFERENCE-DOOR"
    },
    {
     "kind": "noun",
     "of": "STORAGE-WEST-DOOR"
    },
    {
     "kind": "noun",
     "of": "KITCHEN-DOOR"
    },
    {
     "kind": "noun",
     "of": "REACTOR-ELEVATOR-DOOR"
    },
    {
     "kind": "noun",
     "of": "UPPER-ELEVATOR-DOOR"
    },
    {
     "kind": "noun",
     "of": "LOWER-ELEVATOR-DOOR"
    },
    {
     "kind": "noun",
     "of": "ROBOT-HOLE"
    },
    {
     "kind": "noun",
     "of": "ACCESS-PANEL"
    },
    {
     "kind": "noun",
     "of": "CRYO-ELEVATOR-DOOR"
    },
    {
     "kind": "noun",
     "of": "BIO-DOOR-EAST"
    },
    {
     "kind": "noun",
     "of": "BIO-DOOR-WEST"
    },
    {
     "kind": "noun",
     "of": "RAD-DOOR-EAST"
    },
    {
     "kind": "noun",
     "of": "RAD-DOOR-WEST"
    },
    {
     "kind": "noun",
     "of": "OFFICE-DOOR"
    },
    {
     "kind": "noun",
     "of": "POD-DOOR"
    },
    {
     "kind": "noun",
     "of": "CORRIDOR-DOOR"
    },
    {
     "kind": "noun",
     "of": "GANGWAY-DOOR"
    },
    {
     "kind": "noun",
     "of": "SHUTTLE-DOOR"
    }
   ]
  },
  "DIAL": {
   "word": "DIAL",
   "roles": [
    {
     "kind": "noun",
     "of": "COMBINATION-DIAL"
    },
    {
     "kind": "noun",
     "of": "LASER-DIAL"
    }
   ]
  },
  "COMBINATION": {
   "word": "COMBINATION",
   "roles": [
    {
     "kind": "adjective",
     "of": "COMBINATION-DIAL"
    }
   ]
  },
  "PADLOCK": {
   "word": "PADLOCK",
   "roles": [
    {
     "kind": "noun",
     "of": "PADLOCK"
    }
   ]
  },
  "PAD": {
   "word": "PAD",
   "roles": [
    {
     "kind": "noun",
     "of": "PADLOCK"
    }
   ]
  },
  "SIMPLE": {
   "word": "SIMPLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "PADLOCK"
    }
   ]
  },
  "STEEL": {
   "word": "STEEL",
   "roles": [
    {
     "kind": "adjective",
     "of": "PADLOCK"
    },
    {
     "kind": "adjective",
     "of": "KEY"
    }
   ]
  },
  "METAL": {
   "word": "METAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "PADLOCK"
    },
    {
     "kind": "noun",
     "of": "KEY"
    },
    {
     "kind": "adjective",
     "of": "MAGNET"
    },
    {
     "kind": "adjective",
     "of": "LOWER-ELEVATOR-DOOR"
    },
    {
     "kind": "adjective",
     "of": "CUBE"
    }
   ]
  },
  "CAN": {
   "word": "CAN",
   "roles": [
    {
     "kind": "noun",
     "of": "CAN"
    },
    {
     "kind": "noun",
     "of": "OIL-CAN"
    }
   ]
  },
  "LARGE": {
   "word": "LARGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "CAN"
    },
    {
     "kind": "adjective",
     "of": "LADDER"
    },
    {
     "kind": "adjective",
     "of": "LARGE-DESK"
    },
    {
     "kind": "adjective",
     "of": "FLASK"
    },
    {
     "kind": "adjective",
     "of": "CHEMICAL-DISPENSER"
    },
    {
     "kind": "adjective",
     "of": "HELICOPTER-OBJECT"
    },
    {
     "kind": "adjective",
     "of": "CUBE"
    },
    {
     "kind": "adjective",
     "of": "LAB-DESK"
    }
   ]
  },
  "TIN": {
   "word": "TIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "CAN"
    }
   ]
  },
  "UNOPENED": {
   "word": "UNOPENED",
   "roles": [
    {
     "kind": "adjective",
     "of": "CAN"
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
  "HEAVY": {
   "word": "HEAVY",
   "roles": [
    {
     "kind": "adjective",
     "of": "LADDER"
    }
   ]
  },
  "DUTY": {
   "word": "DUTY",
   "roles": [
    {
     "kind": "adjective",
     "of": "LADDER"
    }
   ]
  },
  "HEAVY-DUTY": {
   "word": "HEAVY-DUTY",
   "roles": [
    {
     "kind": "adjective",
     "of": "LADDER"
    }
   ]
  },
  "ALUMINUM": {
   "word": "ALUMINUM",
   "roles": [
    {
     "kind": "adjective",
     "of": "LADDER"
    }
   ]
  },
  "KITCHEN": {
   "word": "KITCHEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "KITCHEN-DOOR"
    },
    {
     "kind": "adjective",
     "of": "KITCHEN-CARD"
    }
   ]
  },
  "UNIT": {
   "word": "UNIT",
   "roles": [
    {
     "kind": "noun",
     "of": "DISPENSER"
    },
    {
     "kind": "noun",
     "of": "LASER"
    }
   ]
  },
  "NICHE": {
   "word": "NICHE",
   "roles": [
    {
     "kind": "noun",
     "of": "DISPENSER"
    }
   ]
  },
  "MACHINE": {
   "word": "MACHINE",
   "roles": [
    {
     "kind": "noun",
     "of": "DISPENSER"
    },
    {
     "kind": "noun",
     "of": "CHEMICAL-DISPENSER"
    },
    {
     "kind": "noun",
     "of": "TERMINAL"
    },
    {
     "kind": "noun",
     "of": "SPOOL-READER"
    },
    {
     "kind": "noun",
     "of": "DIARY"
    }
   ]
  },
  "DISPENSER": {
   "word": "DISPENSER",
   "roles": [
    {
     "kind": "noun",
     "of": "DISPENSER"
    },
    {
     "kind": "adjective",
     "of": "DISPENSER"
    },
    {
     "kind": "noun",
     "of": "CHEMICAL-DISPENSER"
    },
    {
     "kind": "adjective",
     "of": "CHEMICAL-DISPENSER"
    }
   ]
  },
  "CANTEEN": {
   "word": "CANTEEN",
   "roles": [
    {
     "kind": "noun",
     "of": "CANTEEN"
    }
   ]
  },
  "OCTAGONAL": {
   "word": "OCTAGONAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "CANTEEN"
    }
   ]
  },
  "LIQUID": {
   "word": "LIQUID",
   "roles": [
    {
     "kind": "noun",
     "of": "HIGH-PROTEIN"
    },
    {
     "kind": "noun",
     "of": "CHEMICAL-FLUID"
    }
   ]
  },
  "FLUID": {
   "word": "FLUID",
   "roles": [
    {
     "kind": "noun",
     "of": "HIGH-PROTEIN"
    },
    {
     "kind": "noun",
     "of": "CHEMICAL-FLUID"
    }
   ]
  },
  "FOOD": {
   "word": "FOOD",
   "roles": [
    {
     "kind": "noun",
     "of": "HIGH-PROTEIN"
    },
    {
     "kind": "noun",
     "of": "RED-GOO"
    },
    {
     "kind": "noun",
     "of": "BROWN-GOO"
    },
    {
     "kind": "noun",
     "of": "GREEN-GOO"
    }
   ]
  },
  "QUANTITY": {
   "word": "QUANTITY",
   "roles": [
    {
     "kind": "noun",
     "of": "HIGH-PROTEIN"
    },
    {
     "kind": "noun",
     "of": "CHEMICAL-FLUID"
    },
    {
     "kind": "noun",
     "of": "MEDICINE"
    },
    {
     "kind": "adjective",
     "of": "MEDICINE"
    }
   ]
  },
  "BROWN": {
   "word": "BROWN",
   "roles": [
    {
     "kind": "adjective",
     "of": "HIGH-PROTEIN"
    },
    {
     "kind": "adjective",
     "of": "BROWN-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "BROWN-SPOOL"
    },
    {
     "kind": "adjective",
     "of": "BROWN-GOO"
    },
    {
     "kind": "adjective",
     "of": "TELEPORTATION-BUTTON-1"
    }
   ]
  },
  "PROTEIN-RICH": {
   "word": "PROTEIN-RICH",
   "roles": [
    {
     "kind": "adjective",
     "of": "HIGH-PROTEIN"
    }
   ]
  },
  "PROTEIN": {
   "word": "PROTEIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "HIGH-PROTEIN"
    }
   ]
  },
  "RICH": {
   "word": "RICH",
   "roles": [
    {
     "kind": "adjective",
     "of": "HIGH-PROTEIN"
    }
   ]
  },
  "CREVICE": {
   "word": "CREVICE",
   "roles": [
    {
     "kind": "noun",
     "of": "CREVICE"
    }
   ]
  },
  "CRACK": {
   "word": "CRACK",
   "roles": [
    {
     "kind": "noun",
     "of": "CREVICE"
    }
   ]
  },
  "HOLE": {
   "word": "HOLE",
   "roles": [
    {
     "kind": "noun",
     "of": "CREVICE"
    },
    {
     "kind": "noun",
     "of": "RIFT"
    },
    {
     "kind": "noun",
     "of": "FUNNEL-HOLE"
    },
    {
     "kind": "noun",
     "of": "ROBOT-HOLE"
    }
   ]
  },
  "NARROW": {
   "word": "NARROW",
   "roles": [
    {
     "kind": "adjective",
     "of": "CREVICE"
    },
    {
     "kind": "adjective",
     "of": "GANGWAY-DOOR"
    }
   ]
  },
  "JAGGED": {
   "word": "JAGGED",
   "roles": [
    {
     "kind": "adjective",
     "of": "CREVICE"
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
  "OBJECT": {
   "word": "OBJECT",
   "roles": [
    {
     "kind": "noun",
     "of": "KEY"
    },
    {
     "kind": "noun",
     "of": "RED-SPOOL"
    },
    {
     "kind": "noun",
     "of": "GREEN-SPOOL"
    },
    {
     "kind": "noun",
     "of": "BROWN-SPOOL"
    },
    {
     "kind": "noun",
     "of": "NEW-BATTERY"
    }
   ]
  },
  "PIECE": {
   "word": "PIECE",
   "roles": [
    {
     "kind": "adjective",
     "of": "KEY"
    },
    {
     "kind": "noun",
     "of": "COMBINATION-PAPER"
    },
    {
     "kind": "noun",
     "of": "CELERY"
    }
   ]
  },
  "IRON": {
   "word": "IRON",
   "roles": [
    {
     "kind": "adjective",
     "of": "KEY"
    }
   ]
  },
  "SHINY": {
   "word": "SHINY",
   "roles": [
    {
     "kind": "adjective",
     "of": "KEY"
    },
    {
     "kind": "adjective",
     "of": "GOOD-BOARD"
    }
   ]
  },
  "RIFT": {
   "word": "RIFT",
   "roles": [
    {
     "kind": "noun",
     "of": "RIFT"
    }
   ]
  },
  "GULF": {
   "word": "GULF",
   "roles": [
    {
     "kind": "noun",
     "of": "RIFT"
    }
   ]
  },
  "PRECIPICE": {
   "word": "PRECIPICE",
   "roles": [
    {
     "kind": "noun",
     "of": "RIFT"
    }
   ]
  },
  "WIDE": {
   "word": "WIDE",
   "roles": [
    {
     "kind": "adjective",
     "of": "RIFT"
    },
    {
     "kind": "adjective",
     "of": "LARGE-DESK"
    },
    {
     "kind": "adjective",
     "of": "PLIERS"
    },
    {
     "kind": "adjective",
     "of": "TABLES"
    },
    {
     "kind": "adjective",
     "of": "CORRIDOR-DOOR"
    }
   ]
  },
  "DEEP": {
   "word": "DEEP",
   "roles": [
    {
     "kind": "adjective",
     "of": "RIFT"
    }
   ]
  },
  "GAPING": {
   "word": "GAPING",
   "roles": [
    {
     "kind": "adjective",
     "of": "RIFT"
    }
   ]
  },
  "DESK": {
   "word": "DESK",
   "roles": [
    {
     "kind": "noun",
     "of": "SMALL-DESK"
    },
    {
     "kind": "noun",
     "of": "LARGE-DESK"
    },
    {
     "kind": "noun",
     "of": "LAB-DESK"
    }
   ]
  },
  "DRAWER": {
   "word": "DRAWER",
   "roles": [
    {
     "kind": "noun",
     "of": "SMALL-DESK"
    },
    {
     "kind": "noun",
     "of": "LARGE-DESK"
    }
   ]
  },
  "SMALL": {
   "word": "SMALL",
   "roles": [
    {
     "kind": "adjective",
     "of": "SMALL-DESK"
    },
    {
     "kind": "adjective",
     "of": "OIL-CAN"
    },
    {
     "kind": "adjective",
     "of": "CARTON"
    },
    {
     "kind": "adjective",
     "of": "RED-SPOOL"
    },
    {
     "kind": "adjective",
     "of": "MEDICINE-BOTTLE"
    },
    {
     "kind": "adjective",
     "of": "MEDICINE"
    },
    {
     "kind": "adjective",
     "of": "ROBOT-HOLE"
    },
    {
     "kind": "adjective",
     "of": "ACCESS-PANEL"
    },
    {
     "kind": "adjective",
     "of": "GREEN-SPOOL"
    },
    {
     "kind": "adjective",
     "of": "SPOOL-READER"
    },
    {
     "kind": "adjective",
     "of": "BROWN-SPOOL"
    },
    {
     "kind": "adjective",
     "of": "NEW-BATTERY"
    },
    {
     "kind": "adjective",
     "of": "TABLES"
    },
    {
     "kind": "adjective",
     "of": "SLOT"
    }
   ]
  },
  "CARD": {
   "word": "CARD",
   "roles": [
    {
     "kind": "noun",
     "of": "KITCHEN-CARD"
    },
    {
     "kind": "noun",
     "of": "UPPER-ELEVATOR-CARD"
    },
    {
     "kind": "noun",
     "of": "SHUTTLE-CARD"
    },
    {
     "kind": "noun",
     "of": "LOWER-ELEVATOR-CARD"
    },
    {
     "kind": "noun",
     "of": "MINI-CARD"
    },
    {
     "kind": "noun",
     "of": "TELEPORTATION-CARD"
    },
    {
     "kind": "noun",
     "of": "ID-CARD"
    }
   ]
  },
  "CARDS": {
   "word": "CARDS",
   "roles": [
    {
     "kind": "noun",
     "of": "KITCHEN-CARD"
    },
    {
     "kind": "noun",
     "of": "UPPER-ELEVATOR-CARD"
    },
    {
     "kind": "noun",
     "of": "SHUTTLE-CARD"
    },
    {
     "kind": "noun",
     "of": "LOWER-ELEVATOR-CARD"
    },
    {
     "kind": "noun",
     "of": "MINI-CARD"
    },
    {
     "kind": "noun",
     "of": "TELEPORTATION-CARD"
    },
    {
     "kind": "noun",
     "of": "ID-CARD"
    }
   ]
  },
  "ACCESS": {
   "word": "ACCESS",
   "roles": [
    {
     "kind": "adjective",
     "of": "KITCHEN-CARD"
    },
    {
     "kind": "adjective",
     "of": "UPPER-ELEVATOR-CARD"
    },
    {
     "kind": "adjective",
     "of": "SHUTTLE-CARD"
    },
    {
     "kind": "adjective",
     "of": "LOWER-ELEVATOR-CARD"
    },
    {
     "kind": "adjective",
     "of": "ACCESS-PANEL"
    },
    {
     "kind": "adjective",
     "of": "MINI-CARD"
    },
    {
     "kind": "adjective",
     "of": "TELEPORTATION-CARD"
    }
   ]
  },
  "UPPER": {
   "word": "UPPER",
   "roles": [
    {
     "kind": "adjective",
     "of": "UPPER-ELEVATOR-CARD"
    },
    {
     "kind": "adjective",
     "of": "UPPER-ELEVATOR-DOOR"
    }
   ]
  },
  "ELEVATOR": {
   "word": "ELEVATOR",
   "roles": [
    {
     "kind": "adjective",
     "of": "UPPER-ELEVATOR-CARD"
    },
    {
     "kind": "adjective",
     "of": "LOWER-ELEVATOR-CARD"
    },
    {
     "kind": "adjective",
     "of": "REACTOR-ELEVATOR-DOOR"
    },
    {
     "kind": "adjective",
     "of": "UPPER-ELEVATOR-DOOR"
    },
    {
     "kind": "adjective",
     "of": "LOWER-ELEVATOR-DOOR"
    },
    {
     "kind": "adjective",
     "of": "CRYO-ELEVATOR-DOOR"
    }
   ]
  },
  "SHUTTLE": {
   "word": "SHUTTLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "SHUTTLE-CARD"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-SHUTTLE"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-SHUTTLE"
    }
   ]
  },
  "LOWER": {
   "word": "LOWER",
   "roles": [
    {
     "kind": "adjective",
     "of": "LOWER-ELEVATOR-CARD"
    },
    {
     "kind": "adjective",
     "of": "LOWER-ELEVATOR-DOOR"
    }
   ]
  },
  "WOODEN": {
   "word": "WOODEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "LARGE-DESK"
    }
   ]
  },
  "BOX": {
   "word": "BOX",
   "roles": [
    {
     "kind": "noun",
     "of": "CARTON"
    }
   ]
  },
  "CARTON": {
   "word": "CARTON",
   "roles": [
    {
     "kind": "noun",
     "of": "CARTON"
    }
   ]
  },
  "CARDBOARD": {
   "word": "CARDBOARD",
   "roles": [
    {
     "kind": "adjective",
     "of": "CARTON"
    }
   ]
  },
  "BOARDS": {
   "word": "BOARDS",
   "roles": [
    {
     "kind": "noun",
     "of": "CRACKED-BOARD"
    },
    {
     "kind": "noun",
     "of": "GOOD-BOARD"
    },
    {
     "kind": "noun",
     "of": "FIRST-BOARD"
    },
    {
     "kind": "noun",
     "of": "FOURTH-BOARD"
    },
    {
     "kind": "noun",
     "of": "THIRD-BOARD"
    },
    {
     "kind": "noun",
     "of": "SECOND-BOARD"
    },
    {
     "kind": "noun",
     "of": "FRIED-BOARD"
    }
   ]
  },
  "CRACKED": {
   "word": "CRACKED",
   "roles": [
    {
     "kind": "adjective",
     "of": "CRACKED-BOARD"
    }
   ]
  },
  "SEVENTEEN": {
   "word": "SEVENTEEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "CRACKED-BOARD"
    },
    {
     "kind": "adjective",
     "of": "GOOD-BOARD"
    },
    {
     "kind": "adjective",
     "of": "FIRST-BOARD"
    },
    {
     "kind": "adjective",
     "of": "FOURTH-BOARD"
    },
    {
     "kind": "adjective",
     "of": "THIRD-BOARD"
    },
    {
     "kind": "adjective",
     "of": "SECOND-BOARD"
    },
    {
     "kind": "adjective",
     "of": "FRIED-BOARD"
    }
   ]
  },
  "CENTIMETER": {
   "word": "CENTIMETER",
   "roles": [
    {
     "kind": "adjective",
     "of": "CRACKED-BOARD"
    },
    {
     "kind": "adjective",
     "of": "GOOD-BOARD"
    },
    {
     "kind": "adjective",
     "of": "FIRST-BOARD"
    },
    {
     "kind": "adjective",
     "of": "FOURTH-BOARD"
    },
    {
     "kind": "adjective",
     "of": "THIRD-BOARD"
    },
    {
     "kind": "adjective",
     "of": "SECOND-BOARD"
    },
    {
     "kind": "adjective",
     "of": "FRIED-BOARD"
    }
   ]
  },
  "FROMITZ": {
   "word": "FROMITZ",
   "roles": [
    {
     "kind": "adjective",
     "of": "CRACKED-BOARD"
    },
    {
     "kind": "adjective",
     "of": "GOOD-BOARD"
    },
    {
     "kind": "adjective",
     "of": "FIRST-BOARD"
    },
    {
     "kind": "adjective",
     "of": "FOURTH-BOARD"
    },
    {
     "kind": "adjective",
     "of": "THIRD-BOARD"
    },
    {
     "kind": "adjective",
     "of": "SECOND-BOARD"
    },
    {
     "kind": "adjective",
     "of": "FRIED-BOARD"
    }
   ]
  },
  "FUSE": {
   "word": "FUSE",
   "roles": [
    {
     "kind": "noun",
     "of": "MEGAFUSE-B"
    },
    {
     "kind": "noun",
     "of": "MEGAFUSE-K"
    }
   ]
  },
  "MEGAFUSE": {
   "word": "MEGAFUSE",
   "roles": [
    {
     "kind": "noun",
     "of": "MEGAFUSE-B"
    },
    {
     "kind": "noun",
     "of": "MEGAFUSE-K"
    }
   ]
  },
  "B-SERIES": {
   "word": "B-SERIES",
   "roles": [
    {
     "kind": "adjective",
     "of": "MEGAFUSE-B"
    }
   ]
  },
  "B": {
   "word": "B",
   "roles": [
    {
     "kind": "adjective",
     "of": "MEGAFUSE-B"
    }
   ]
  },
  "SERIES": {
   "word": "SERIES",
   "roles": [
    {
     "kind": "adjective",
     "of": "MEGAFUSE-B"
    },
    {
     "kind": "adjective",
     "of": "MEGAFUSE-K"
    }
   ]
  },
  "MEGA": {
   "word": "MEGA",
   "roles": [
    {
     "kind": "adjective",
     "of": "MEGAFUSE-B"
    },
    {
     "kind": "adjective",
     "of": "MEGAFUSE-K"
    }
   ]
  },
  "K-SERIES": {
   "word": "K-SERIES",
   "roles": [
    {
     "kind": "adjective",
     "of": "MEGAFUSE-K"
    }
   ]
  },
  "K": {
   "word": "K",
   "roles": [
    {
     "kind": "adjective",
     "of": "MEGAFUSE-K"
    }
   ]
  },
  "BEDISTOR": {
   "word": "BEDISTOR",
   "roles": [
    {
     "kind": "noun",
     "of": "GOOD-BEDISTOR"
    },
    {
     "kind": "noun",
     "of": "BAD-BEDISTOR"
    }
   ]
  },
  "GOOD": {
   "word": "GOOD",
   "roles": [
    {
     "kind": "adjective",
     "of": "GOOD-BEDISTOR"
    },
    {
     "kind": "adjective",
     "of": "GOOD-BOARD"
    }
   ]
  },
  "NINETY": {
   "word": "NINETY",
   "roles": [
    {
     "kind": "adjective",
     "of": "GOOD-BEDISTOR"
    },
    {
     "kind": "adjective",
     "of": "BAD-BEDISTOR"
    }
   ]
  },
  "OHM": {
   "word": "OHM",
   "roles": [
    {
     "kind": "adjective",
     "of": "GOOD-BEDISTOR"
    },
    {
     "kind": "adjective",
     "of": "BAD-BEDISTOR"
    }
   ]
  },
  "NINETY-OHM": {
   "word": "NINETY-OHM",
   "roles": [
    {
     "kind": "adjective",
     "of": "GOOD-BEDISTOR"
    },
    {
     "kind": "adjective",
     "of": "BAD-BEDISTOR"
    }
   ]
  },
  "REACTOR": {
   "word": "REACTOR",
   "roles": [
    {
     "kind": "adjective",
     "of": "REACTOR-ELEVATOR-DOOR"
    }
   ]
  },
  "FLASK": {
   "word": "FLASK",
   "roles": [
    {
     "kind": "noun",
     "of": "FLASK"
    }
   ]
  },
  "GLASS": {
   "word": "GLASS",
   "roles": [
    {
     "kind": "adjective",
     "of": "FLASK"
    }
   ]
  },
  "PLASTIC": {
   "word": "PLASTIC",
   "roles": [
    {
     "kind": "adjective",
     "of": "FLASK"
    }
   ]
  },
  "MAGNET": {
   "word": "MAGNET",
   "roles": [
    {
     "kind": "noun",
     "of": "MAGNET"
    }
   ]
  },
  "BAR": {
   "word": "BAR",
   "roles": [
    {
     "kind": "noun",
     "of": "MAGNET"
    }
   ]
  },
  "CURVED": {
   "word": "CURVED",
   "roles": [
    {
     "kind": "adjective",
     "of": "MAGNET"
    }
   ]
  },
  "HORSESHOE": {
   "word": "HORSESHOE",
   "roles": [
    {
     "kind": "adjective",
     "of": "MAGNET"
    }
   ]
  },
  "PAIR": {
   "word": "PAIR",
   "roles": [
    {
     "kind": "noun",
     "of": "PLIERS"
    },
    {
     "kind": "noun",
     "of": "HANDS"
    }
   ]
  },
  "PLIERS": {
   "word": "PLIERS",
   "roles": [
    {
     "kind": "noun",
     "of": "PLIERS"
    }
   ]
  },
  "WIDE-NOSED": {
   "word": "WIDE-NOSED",
   "roles": [
    {
     "kind": "adjective",
     "of": "PLIERS"
    }
   ]
  },
  "NOSED": {
   "word": "NOSED",
   "roles": [
    {
     "kind": "adjective",
     "of": "PLIERS"
    }
   ]
  },
  "CHEMICAL": {
   "word": "CHEMICAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHEMICAL-DISPENSER"
    },
    {
     "kind": "noun",
     "of": "CHEMICAL-FLUID"
    },
    {
     "kind": "adjective",
     "of": "CHEMICAL-FLUID"
    }
   ]
  },
  "BUTTON": {
   "word": "BUTTON",
   "roles": [
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
     "of": "GREEN-BUTTON"
    },
    {
     "kind": "noun",
     "of": "YELLOW-BUTTON"
    },
    {
     "kind": "noun",
     "of": "GRAY-BUTTON"
    },
    {
     "kind": "noun",
     "of": "BROWN-BUTTON"
    },
    {
     "kind": "noun",
     "of": "BLACK-BUTTON"
    },
    {
     "kind": "noun",
     "of": "ROUND-WHITE-BUTTON"
    },
    {
     "kind": "noun",
     "of": "SQUARE-WHITE-BUTTON"
    },
    {
     "kind": "noun",
     "of": "BLUE-ELEVATOR-BUTTON"
    },
    {
     "kind": "noun",
     "of": "RED-ELEVATOR-BUTTON"
    },
    {
     "kind": "noun",
     "of": "ELEVATOR-BUTTON"
    },
    {
     "kind": "noun",
     "of": "PLAYBACK-BUTTON"
    },
    {
     "kind": "noun",
     "of": "LIGHT-BUTTON"
    },
    {
     "kind": "noun",
     "of": "DARK-BUTTON"
    },
    {
     "kind": "noun",
     "of": "FUNGICIDE-BUTTON"
    },
    {
     "kind": "noun",
     "of": "DIARY-BUTTON"
    },
    {
     "kind": "noun",
     "of": "TELEPORTATION-BUTTON-1"
    },
    {
     "kind": "noun",
     "of": "TELEPORTATION-BUTTON-2"
    },
    {
     "kind": "noun",
     "of": "TELEPORTATION-BUTTON-3"
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
     "of": "LOWER-ELEVATOR-DOOR"
    },
    {
     "kind": "adjective",
     "of": "RED-ELEVATOR-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "RED-SPOOL"
    },
    {
     "kind": "adjective",
     "of": "FUNGICIDE-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "LIGHTS"
    },
    {
     "kind": "adjective",
     "of": "RED-GOO"
    }
   ]
  },
  "BLUE": {
   "word": "BLUE",
   "roles": [
    {
     "kind": "adjective",
     "of": "BLUE-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "UPPER-ELEVATOR-DOOR"
    },
    {
     "kind": "adjective",
     "of": "BLUE-ELEVATOR-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "LAB-UNIFORM"
    },
    {
     "kind": "adjective",
     "of": "SPECK"
    }
   ]
  },
  "GREEN": {
   "word": "GREEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "GREEN-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "GREEN-SPOOL"
    },
    {
     "kind": "adjective",
     "of": "GREEN-GOO"
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
  "GRAY": {
   "word": "GRAY",
   "roles": [
    {
     "kind": "adjective",
     "of": "GRAY-BUTTON"
    }
   ]
  },
  "GREY": {
   "word": "GREY",
   "roles": [
    {
     "kind": "adjective",
     "of": "GRAY-BUTTON"
    }
   ]
  },
  "BLACK": {
   "word": "BLACK",
   "roles": [
    {
     "kind": "adjective",
     "of": "BLACK-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "DARK-BUTTON"
    }
   ]
  },
  "WHITE": {
   "word": "WHITE",
   "roles": [
    {
     "kind": "adjective",
     "of": "ROUND-WHITE-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "SQUARE-WHITE-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "CHEMICAL-FLUID"
    },
    {
     "kind": "adjective",
     "of": "MEDICINE-BOTTLE"
    },
    {
     "kind": "adjective",
     "of": "LIGHT-BUTTON"
    }
   ]
  },
  "ROUND": {
   "word": "ROUND",
   "roles": [
    {
     "kind": "adjective",
     "of": "ROUND-WHITE-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "NEW-BATTERY"
    },
    {
     "kind": "adjective",
     "of": "TABLES"
    }
   ]
  },
  "SQUARE": {
   "word": "SQUARE",
   "roles": [
    {
     "kind": "adjective",
     "of": "SQUARE-WHITE-BUTTON"
    }
   ]
  },
  "FLOYD": {
   "word": "FLOYD",
   "roles": [
    {
     "kind": "noun",
     "of": "FLOYD"
    },
    {
     "kind": "noun",
     "of": "DEAD-FLOYD"
    }
   ]
  },
  "COMPARTMENT": {
   "word": "COMPARTMENT",
   "roles": [
    {
     "kind": "noun",
     "of": "FLOYD"
    }
   ]
  },
  "ROBOT": {
   "word": "ROBOT",
   "roles": [
    {
     "kind": "noun",
     "of": "FLOYD"
    },
    {
     "kind": "noun",
     "of": "DEAD-FLOYD"
    },
    {
     "kind": "noun",
     "of": "ACHILLES"
    }
   ]
  },
  "COMPANION": {
   "word": "COMPANION",
   "roles": [
    {
     "kind": "noun",
     "of": "FLOYD"
    },
    {
     "kind": "noun",
     "of": "DEAD-FLOYD"
    }
   ]
  },
  "MULTIPLE": {
   "word": "MULTIPLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "FLOYD"
    }
   ]
  },
  "PURPOSE": {
   "word": "PURPOSE",
   "roles": [
    {
     "kind": "adjective",
     "of": "FLOYD"
    },
    {
     "kind": "adjective",
     "of": "SCRUB-BRUSH"
    }
   ]
  },
  "DIM-WITTED": {
   "word": "DIM-WITTED",
   "roles": [
    {
     "kind": "adjective",
     "of": "FLOYD"
    }
   ]
  },
  "DIM": {
   "word": "DIM",
   "roles": [
    {
     "kind": "adjective",
     "of": "FLOYD"
    }
   ]
  },
  "WITTED": {
   "word": "WITTED",
   "roles": [
    {
     "kind": "adjective",
     "of": "FLOYD"
    }
   ]
  },
  "MANGLE": {
   "word": "MANGLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "DEAD-FLOYD"
    }
   ]
  },
  "DEAD": {
   "word": "DEAD",
   "roles": [
    {
     "kind": "adjective",
     "of": "DEAD-FLOYD"
    },
    {
     "kind": "adjective",
     "of": "ACHILLES"
    }
   ]
  },
  "FORMER": {
   "word": "FORMER",
   "roles": [
    {
     "kind": "adjective",
     "of": "DEAD-FLOYD"
    }
   ]
  },
  "VEHICLE": {
   "word": "VEHICLE",
   "roles": [
    {
     "kind": "noun",
     "of": "HELICOPTER-OBJECT"
    }
   ]
  },
  "HELICOPTER": {
   "word": "HELICOPTER",
   "roles": [
    {
     "kind": "noun",
     "of": "HELICOPTER-OBJECT"
    }
   ]
  },
  "CONSOLE": {
   "word": "CONSOLE",
   "roles": [
    {
     "kind": "noun",
     "of": "RECEIVE-CONSOLE"
    },
    {
     "kind": "noun",
     "of": "SEND-CONSOLE"
    }
   ]
  },
  "CONTROL": {
   "word": "CONTROL",
   "roles": [
    {
     "kind": "noun",
     "of": "RECEIVE-CONSOLE"
    },
    {
     "kind": "noun",
     "of": "SEND-CONSOLE"
    },
    {
     "kind": "noun",
     "of": "CONTROLS"
    },
    {
     "kind": "adjective",
     "of": "CONTROLS"
    }
   ]
  },
  "COMMUNICATIONS": {
   "word": "COMMUNICATIONS",
   "roles": [
    {
     "kind": "adjective",
     "of": "RECEIVE-CONSOLE"
    },
    {
     "kind": "adjective",
     "of": "SEND-CONSOLE"
    },
    {
     "kind": "noun",
     "of": "COMM-SCREEN"
    }
   ]
  },
  "RECEIVE": {
   "word": "RECEIVE",
   "roles": [
    {
     "kind": "adjective",
     "of": "RECEIVE-CONSOLE"
    }
   ]
  },
  "LEFT": {
   "word": "LEFT",
   "roles": [
    {
     "kind": "adjective",
     "of": "RECEIVE-CONSOLE"
    }
   ]
  },
  "FIRST": {
   "word": "FIRST",
   "roles": [
    {
     "kind": "adjective",
     "of": "RECEIVE-CONSOLE"
    },
    {
     "kind": "adjective",
     "of": "FIRST-BOARD"
    },
    {
     "kind": "adjective",
     "of": "BLATHER"
    },
    {
     "kind": "adjective",
     "of": "TELEPORTATION-BUTTON-1"
    }
   ]
  },
  "GLOWING": {
   "word": "GLOWING",
   "roles": [
    {
     "kind": "adjective",
     "of": "PLAYBACK-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "LIGHTS"
    }
   ]
  },
  "PLAYBACK": {
   "word": "PLAYBACK",
   "roles": [
    {
     "kind": "adjective",
     "of": "PLAYBACK-BUTTON"
    }
   ]
  },
  "SEND": {
   "word": "SEND",
   "roles": [
    {
     "kind": "adjective",
     "of": "SEND-CONSOLE"
    }
   ]
  },
  "RIGHT": {
   "word": "RIGHT",
   "roles": [
    {
     "kind": "adjective",
     "of": "SEND-CONSOLE"
    }
   ]
  },
  "SECOND": {
   "word": "SECOND",
   "roles": [
    {
     "kind": "adjective",
     "of": "SEND-CONSOLE"
    },
    {
     "kind": "adjective",
     "of": "SECOND-BOARD"
    },
    {
     "kind": "adjective",
     "of": "TELEPORTATION-BUTTON-2"
    }
   ]
  },
  "MESSAGE": {
   "word": "MESSAGE",
   "roles": [
    {
     "kind": "noun",
     "of": "COMM-SCREEN"
    }
   ]
  },
  "SCREEN": {
   "word": "SCREEN",
   "roles": [
    {
     "kind": "noun",
     "of": "COMM-SCREEN"
    },
    {
     "kind": "noun",
     "of": "TERMINAL"
    },
    {
     "kind": "noun",
     "of": "SPOOL-READER"
    }
   ]
  },
  "FUNNEL": {
   "word": "FUNNEL",
   "roles": [
    {
     "kind": "adjective",
     "of": "FUNNEL-HOLE"
    }
   ]
  },
  "SHAPED": {
   "word": "SHAPED",
   "roles": [
    {
     "kind": "adjective",
     "of": "FUNNEL-HOLE"
    }
   ]
  },
  "FUNNEL-SHAPED": {
   "word": "FUNNEL-SHAPED",
   "roles": [
    {
     "kind": "adjective",
     "of": "FUNNEL-HOLE"
    }
   ]
  },
  "MILKY": {
   "word": "MILKY",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHEMICAL-FLUID"
    }
   ]
  },
  "LAZARUS": {
   "word": "LAZARUS",
   "roles": [
    {
     "kind": "noun",
     "of": "LAZARUS-PART"
    }
   ]
  },
  "PART": {
   "word": "PART",
   "roles": [
    {
     "kind": "noun",
     "of": "LAZARUS-PART"
    }
   ]
  },
  "PLATE": {
   "word": "PLATE",
   "roles": [
    {
     "kind": "noun",
     "of": "LAZARUS-PART"
    }
   ]
  },
  "BREASTPLATE": {
   "word": "BREASTPLATE",
   "roles": [
    {
     "kind": "noun",
     "of": "LAZARUS-PART"
    }
   ]
  },
  "MEDICAL": {
   "word": "MEDICAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "LAZARUS-PART"
    }
   ]
  },
  "BREAST": {
   "word": "BREAST",
   "roles": [
    {
     "kind": "adjective",
     "of": "LAZARUS-PART"
    }
   ]
  },
  "SPOOL": {
   "word": "SPOOL",
   "roles": [
    {
     "kind": "noun",
     "of": "RED-SPOOL"
    },
    {
     "kind": "noun",
     "of": "GREEN-SPOOL"
    },
    {
     "kind": "noun",
     "of": "BROWN-SPOOL"
    }
   ]
  },
  "SPOOLS": {
   "word": "SPOOLS",
   "roles": [
    {
     "kind": "noun",
     "of": "RED-SPOOL"
    },
    {
     "kind": "noun",
     "of": "GREEN-SPOOL"
    },
    {
     "kind": "noun",
     "of": "BROWN-SPOOL"
    }
   ]
  },
  "BOTTLE": {
   "word": "BOTTLE",
   "roles": [
    {
     "kind": "noun",
     "of": "MEDICINE-BOTTLE"
    }
   ]
  },
  "LABEL": {
   "word": "LABEL",
   "roles": [
    {
     "kind": "noun",
     "of": "MEDICINE-BOTTLE"
    }
   ]
  },
  "MEDICINE": {
   "word": "MEDICINE",
   "roles": [
    {
     "kind": "adjective",
     "of": "MEDICINE-BOTTLE"
    },
    {
     "kind": "noun",
     "of": "MEDICINE"
    }
   ]
  },
  "TRANSLUCENT": {
   "word": "TRANSLUCENT",
   "roles": [
    {
     "kind": "adjective",
     "of": "MEDICINE-BOTTLE"
    }
   ]
  },
  "EXPERIMENTAL": {
   "word": "EXPERIMENTAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "MEDICINE"
    }
   ]
  },
  "ACHILLES": {
   "word": "ACHILLES",
   "roles": [
    {
     "kind": "noun",
     "of": "ACHILLES"
    }
   ]
  },
  "BROKEN": {
   "word": "BROKEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "ACHILLES"
    }
   ]
  },
  "DOORWAY": {
   "word": "DOORWAY",
   "roles": [
    {
     "kind": "noun",
     "of": "ROBOT-HOLE"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-DOORWAY"
    }
   ]
  },
  "VERY": {
   "word": "VERY",
   "roles": [
    {
     "kind": "adjective",
     "of": "ROBOT-HOLE"
    },
    {
     "kind": "adjective",
     "of": "AMBASSADOR"
    }
   ]
  },
  "PANEL": {
   "word": "PANEL",
   "roles": [
    {
     "kind": "noun",
     "of": "ACCESS-PANEL"
    },
    {
     "kind": "noun",
     "of": "CONTROLS"
    }
   ]
  },
  "SOCKET": {
   "word": "SOCKET",
   "roles": [
    {
     "kind": "noun",
     "of": "ACCESS-PANEL"
    },
    {
     "kind": "noun",
     "of": "CUBE"
    }
   ]
  },
  "FOURTH": {
   "word": "FOURTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "FOURTH-BOARD"
    }
   ]
  },
  "THIRD": {
   "word": "THIRD",
   "roles": [
    {
     "kind": "adjective",
     "of": "THIRD-BOARD"
    },
    {
     "kind": "adjective",
     "of": "TELEPORTATION-BUTTON-3"
    }
   ]
  },
  "FRIED": {
   "word": "FRIED",
   "roles": [
    {
     "kind": "adjective",
     "of": "FRIED-BOARD"
    }
   ]
  },
  "CUBE": {
   "word": "CUBE",
   "roles": [
    {
     "kind": "noun",
     "of": "CUBE"
    }
   ]
  },
  "LID": {
   "word": "LID",
   "roles": [
    {
     "kind": "noun",
     "of": "CUBE"
    }
   ]
  },
  "FUSED": {
   "word": "FUSED",
   "roles": [
    {
     "kind": "adjective",
     "of": "BAD-BEDISTOR"
    }
   ]
  },
  "TERMINAL": {
   "word": "TERMINAL",
   "roles": [
    {
     "kind": "noun",
     "of": "TERMINAL"
    }
   ]
  },
  "KEYBOARD": {
   "word": "KEYBOARD",
   "roles": [
    {
     "kind": "noun",
     "of": "TERMINAL"
    }
   ]
  },
  "COMPUTER": {
   "word": "COMPUTER",
   "roles": [
    {
     "kind": "adjective",
     "of": "TERMINAL"
    },
    {
     "kind": "adjective",
     "of": "PRINT-OUT"
    }
   ]
  },
  "VIDEO": {
   "word": "VIDEO",
   "roles": [
    {
     "kind": "adjective",
     "of": "TERMINAL"
    }
   ]
  },
  "READER": {
   "word": "READER",
   "roles": [
    {
     "kind": "noun",
     "of": "SPOOL-READER"
    }
   ]
  },
  "OPENING": {
   "word": "OPENING",
   "roles": [
    {
     "kind": "noun",
     "of": "SPOOL-READER"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-DOORWAY"
    }
   ]
  },
  "MICROFILM": {
   "word": "MICROFILM",
   "roles": [
    {
     "kind": "adjective",
     "of": "SPOOL-READER"
    }
   ]
  },
  "CIRCULAR": {
   "word": "CIRCULAR",
   "roles": [
    {
     "kind": "adjective",
     "of": "SPOOL-READER"
    }
   ]
  },
  "CRYO-ELEVATOR": {
   "word": "CRYO-ELEVATOR",
   "roles": [
    {
     "kind": "adjective",
     "of": "CRYO-ELEVATOR-DOOR"
    }
   ]
  },
  "PILE": {
   "word": "PILE",
   "roles": [
    {
     "kind": "noun",
     "of": "PRINT-OUT"
    }
   ]
  },
  "PAPER": {
   "word": "PAPER",
   "roles": [
    {
     "kind": "noun",
     "of": "PRINT-OUT"
    },
    {
     "kind": "noun",
     "of": "COMBINATION-PAPER"
    }
   ]
  },
  "OUTPUT": {
   "word": "OUTPUT",
   "roles": [
    {
     "kind": "noun",
     "of": "PRINT-OUT"
    }
   ]
  },
  "PRINTOUT": {
   "word": "PRINTOUT",
   "roles": [
    {
     "kind": "noun",
     "of": "PRINT-OUT"
    }
   ]
  },
  "MINIATURIZATION": {
   "word": "MINIATURIZATION",
   "roles": [
    {
     "kind": "adjective",
     "of": "MINI-CARD"
    }
   ]
  },
  "MINI": {
   "word": "MINI",
   "roles": [
    {
     "kind": "adjective",
     "of": "MINI-CARD"
    }
   ]
  },
  "UNIFORM": {
   "word": "UNIFORM",
   "roles": [
    {
     "kind": "noun",
     "of": "LAB-UNIFORM"
    },
    {
     "kind": "noun",
     "of": "PATROL-UNIFORM"
    }
   ]
  },
  "SUIT": {
   "word": "SUIT",
   "roles": [
    {
     "kind": "noun",
     "of": "LAB-UNIFORM"
    },
    {
     "kind": "noun",
     "of": "PATROL-UNIFORM"
    }
   ]
  },
  "POCKET": {
   "word": "POCKET",
   "roles": [
    {
     "kind": "noun",
     "of": "LAB-UNIFORM"
    },
    {
     "kind": "noun",
     "of": "PATROL-UNIFORM"
    }
   ]
  },
  "LOGO": {
   "word": "LOGO",
   "roles": [
    {
     "kind": "noun",
     "of": "LAB-UNIFORM"
    }
   ]
  },
  "PALE": {
   "word": "PALE",
   "roles": [
    {
     "kind": "adjective",
     "of": "LAB-UNIFORM"
    }
   ]
  },
  "LAB": {
   "word": "LAB",
   "roles": [
    {
     "kind": "adjective",
     "of": "LAB-UNIFORM"
    },
    {
     "kind": "adjective",
     "of": "BIO-DOOR-EAST"
    },
    {
     "kind": "adjective",
     "of": "RAD-DOOR-EAST"
    }
   ]
  },
  "TELEPORT": {
   "word": "TELEPORT",
   "roles": [
    {
     "kind": "adjective",
     "of": "TELEPORTATION-CARD"
    }
   ]
  },
  "TELEPORTATION": {
   "word": "TELEPORTATION",
   "roles": [
    {
     "kind": "adjective",
     "of": "TELEPORTATION-CARD"
    }
   ]
  },
  "BIO-LOCK": {
   "word": "BIO-LOCK",
   "roles": [
    {
     "kind": "adjective",
     "of": "BIO-DOOR-WEST"
    }
   ]
  },
  "RADIATION": {
   "word": "RADIATION",
   "roles": [
    {
     "kind": "adjective",
     "of": "RAD-DOOR-WEST"
    }
   ]
  },
  "LAMP": {
   "word": "LAMP",
   "roles": [
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
     "of": "LAMP"
    }
   ]
  },
  "LIGHT": {
   "word": "LIGHT",
   "roles": [
    {
     "kind": "noun",
     "of": "LAMP"
    },
    {
     "kind": "adjective",
     "of": "LIGHT-BUTTON"
    },
    {
     "kind": "noun",
     "of": "LIGHTS"
    }
   ]
  },
  "POWERFUL": {
   "word": "POWERFUL",
   "roles": [
    {
     "kind": "adjective",
     "of": "LAMP"
    }
   ]
  },
  "PORTABLE": {
   "word": "PORTABLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "LAMP"
    },
    {
     "kind": "adjective",
     "of": "LASER"
    }
   ]
  },
  "OFFICE": {
   "word": "OFFICE",
   "roles": [
    {
     "kind": "adjective",
     "of": "OFFICE-DOOR"
    }
   ]
  },
  "MESSY": {
   "word": "MESSY",
   "roles": [
    {
     "kind": "adjective",
     "of": "LAB-DESK"
    }
   ]
  },
  "MASK": {
   "word": "MASK",
   "roles": [
    {
     "kind": "noun",
     "of": "GAS-MASK"
    }
   ]
  },
  "GAS": {
   "word": "GAS",
   "roles": [
    {
     "kind": "adjective",
     "of": "GAS-MASK"
    }
   ]
  },
  "MEMO": {
   "word": "MEMO",
   "roles": [
    {
     "kind": "noun",
     "of": "MEMO"
    }
   ]
  },
  "DARK": {
   "word": "DARK",
   "roles": [
    {
     "kind": "adjective",
     "of": "DARK-BUTTON"
    }
   ]
  },
  "DARKNESS": {
   "word": "DARKNESS",
   "roles": [
    {
     "kind": "adjective",
     "of": "DARK-BUTTON"
    }
   ]
  },
  "FUNGICIDE": {
   "word": "FUNGICIDE",
   "roles": [
    {
     "kind": "adjective",
     "of": "FUNGICIDE-BUTTON"
    }
   ]
  },
  "EMERGENCY": {
   "word": "EMERGENCY",
   "roles": [
    {
     "kind": "adjective",
     "of": "FUNGICIDE-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-POD"
    },
    {
     "kind": "adjective",
     "of": "FOOD-KIT"
    },
    {
     "kind": "adjective",
     "of": "POD-DOOR"
    },
    {
     "kind": "adjective",
     "of": "CORRIDOR-DOOR"
    },
    {
     "kind": "adjective",
     "of": "GANGWAY-DOOR"
    }
   ]
  },
  "RELAY": {
   "word": "RELAY",
   "roles": [
    {
     "kind": "noun",
     "of": "RELAY"
    }
   ]
  },
  "MICRORELAY": {
   "word": "MICRORELAY",
   "roles": [
    {
     "kind": "noun",
     "of": "RELAY"
    }
   ]
  },
  "MICRO": {
   "word": "MICRO",
   "roles": [
    {
     "kind": "adjective",
     "of": "RELAY"
    }
   ]
  },
  "SPECK": {
   "word": "SPECK",
   "roles": [
    {
     "kind": "noun",
     "of": "SPECK"
    }
   ]
  },
  "BOULDER": {
   "word": "BOULDER",
   "roles": [
    {
     "kind": "noun",
     "of": "SPECK"
    }
   ]
  },
  "IMPURITY": {
   "word": "IMPURITY",
   "roles": [
    {
     "kind": "noun",
     "of": "SPECK"
    }
   ]
  },
  "DEVICE": {
   "word": "DEVICE",
   "roles": [
    {
     "kind": "noun",
     "of": "LASER"
    }
   ]
  },
  "LASER": {
   "word": "LASER",
   "roles": [
    {
     "kind": "noun",
     "of": "LASER"
    },
    {
     "kind": "adjective",
     "of": "LASER-DIAL"
    },
    {
     "kind": "adjective",
     "of": "OLD-BATTERY"
    },
    {
     "kind": "adjective",
     "of": "NEW-BATTERY"
    }
   ]
  },
  "DEPRESSION": {
   "word": "DEPRESSION",
   "roles": [
    {
     "kind": "noun",
     "of": "LASER"
    }
   ]
  },
  "ACME": {
   "word": "ACME",
   "roles": [
    {
     "kind": "adjective",
     "of": "LASER"
    }
   ]
  },
  "SETTING": {
   "word": "SETTING",
   "roles": [
    {
     "kind": "adjective",
     "of": "LASER-DIAL"
    }
   ]
  },
  "BATTERY": {
   "word": "BATTERY",
   "roles": [
    {
     "kind": "noun",
     "of": "OLD-BATTERY"
    },
    {
     "kind": "noun",
     "of": "NEW-BATTERY"
    }
   ]
  },
  "WORN-OUT": {
   "word": "WORN-OUT",
   "roles": [
    {
     "kind": "adjective",
     "of": "OLD-BATTERY"
    }
   ]
  },
  "OLD": {
   "word": "OLD",
   "roles": [
    {
     "kind": "adjective",
     "of": "OLD-BATTERY"
    },
    {
     "kind": "adjective",
     "of": "DIARY"
    }
   ]
  },
  "FRESH": {
   "word": "FRESH",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEW-BATTERY"
    }
   ]
  },
  "NEW": {
   "word": "NEW",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEW-BATTERY"
    }
   ]
  },
  "MICROBE": {
   "word": "MICROBE",
   "roles": [
    {
     "kind": "noun",
     "of": "MICROBE"
    }
   ]
  },
  "BUG": {
   "word": "BUG",
   "roles": [
    {
     "kind": "noun",
     "of": "MICROBE"
    }
   ]
  },
  "MONSTER": {
   "word": "MONSTER",
   "roles": [
    {
     "kind": "noun",
     "of": "MICROBE"
    },
    {
     "kind": "noun",
     "of": "RAT-ANT"
    },
    {
     "kind": "noun",
     "of": "TROLL"
    },
    {
     "kind": "noun",
     "of": "GRUE"
    },
    {
     "kind": "noun",
     "of": "TRIFFID"
    }
   ]
  },
  "HUNGRY": {
   "word": "HUNGRY",
   "roles": [
    {
     "kind": "adjective",
     "of": "MICROBE"
    },
    {
     "kind": "adjective",
     "of": "GRUE"
    }
   ]
  },
  "STRIP": {
   "word": "STRIP",
   "roles": [
    {
     "kind": "noun",
     "of": "STRIP"
    }
   ]
  },
  "SIDE": {
   "word": "SIDE",
   "roles": [
    {
     "kind": "noun",
     "of": "STRIP"
    }
   ]
  },
  "EDGE": {
   "word": "EDGE",
   "roles": [
    {
     "kind": "noun",
     "of": "STRIP"
    }
   ]
  },
  "SILICON": {
   "word": "SILICON",
   "roles": [
    {
     "kind": "adjective",
     "of": "STRIP"
    }
   ]
  },
  "MUTANT": {
   "word": "MUTANT",
   "roles": [
    {
     "kind": "noun",
     "of": "RAT-ANT"
    },
    {
     "kind": "noun",
     "of": "TROLL"
    },
    {
     "kind": "noun",
     "of": "GRUE"
    },
    {
     "kind": "noun",
     "of": "TRIFFID"
    }
   ]
  },
  "RAT-ANT": {
   "word": "RAT-ANT",
   "roles": [
    {
     "kind": "noun",
     "of": "RAT-ANT"
    }
   ]
  },
  "RAT-LIKE": {
   "word": "RAT-LIKE",
   "roles": [
    {
     "kind": "adjective",
     "of": "RAT-ANT"
    }
   ]
  },
  "ANT-LIKE": {
   "word": "ANT-LIKE",
   "roles": [
    {
     "kind": "adjective",
     "of": "RAT-ANT"
    }
   ]
  },
  "MAN-SIZED": {
   "word": "MAN-SIZED",
   "roles": [
    {
     "kind": "adjective",
     "of": "RAT-ANT"
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
  "BIPED": {
   "word": "BIPED",
   "roles": [
    {
     "kind": "noun",
     "of": "TROLL"
    }
   ]
  },
  "HAIRY": {
   "word": "HAIRY",
   "roles": [
    {
     "kind": "adjective",
     "of": "TROLL"
    }
   ]
  },
  "GROWLING": {
   "word": "GROWLING",
   "roles": [
    {
     "kind": "adjective",
     "of": "TROLL"
    }
   ]
  },
  "UGLY": {
   "word": "UGLY",
   "roles": [
    {
     "kind": "adjective",
     "of": "TROLL"
    }
   ]
  },
  "DEFORMED": {
   "word": "DEFORMED",
   "roles": [
    {
     "kind": "adjective",
     "of": "TROLL"
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
  "CREATURE": {
   "word": "CREATURE",
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
  "FANGED": {
   "word": "FANGED",
   "roles": [
    {
     "kind": "adjective",
     "of": "GRUE"
    }
   ]
  },
  "VICIOUS": {
   "word": "VICIOUS",
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
  "TRIFFID": {
   "word": "TRIFFID",
   "roles": [
    {
     "kind": "noun",
     "of": "TRIFFID"
    }
   ]
  },
  "PLANT": {
   "word": "PLANT",
   "roles": [
    {
     "kind": "noun",
     "of": "TRIFFID"
    }
   ]
  },
  "MOBILE": {
   "word": "MOBILE",
   "roles": [
    {
     "kind": "adjective",
     "of": "TRIFFID"
    }
   ]
  },
  "MAN-EATING": {
   "word": "MAN-EATING",
   "roles": [
    {
     "kind": "adjective",
     "of": "TRIFFID"
    }
   ]
  },
  "GIANT": {
   "word": "GIANT",
   "roles": [
    {
     "kind": "adjective",
     "of": "TRIFFID"
    }
   ]
  },
  "ZZMGCK": {
   "word": "ZZMGCK",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-OBJECTS"
    },
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
  "THAT": {
   "word": "THAT",
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
  "HIM": {
   "word": "HIM",
   "roles": [
    {
     "kind": "noun",
     "of": "IT"
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
  "GANGWAY": {
   "word": "GANGWAY",
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
  "GROUND": {
   "word": "GROUND",
   "roles": [
    {
     "kind": "noun",
     "of": "GROUND"
    }
   ]
  },
  "EARTH": {
   "word": "EARTH",
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
  "DECK": {
   "word": "DECK",
   "roles": [
    {
     "kind": "noun",
     "of": "GROUND"
    }
   ]
  },
  "WINDOW": {
   "word": "WINDOW",
   "roles": [
    {
     "kind": "noun",
     "of": "WINDOW"
    }
   ]
  },
  "VIEWPORT": {
   "word": "VIEWPORT",
   "roles": [
    {
     "kind": "noun",
     "of": "WINDOW"
    }
   ]
  },
  "VIEW": {
   "word": "VIEW",
   "roles": [
    {
     "kind": "adjective",
     "of": "WINDOW"
    }
   ]
  },
  "CLIFF": {
   "word": "CLIFF",
   "roles": [
    {
     "kind": "noun",
     "of": "CLIFF"
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
  "ENDLESS": {
   "word": "ENDLESS",
   "roles": [
    {
     "kind": "adjective",
     "of": "OCEAN"
    }
   ]
  },
  "TABLE": {
   "word": "TABLE",
   "roles": [
    {
     "kind": "noun",
     "of": "TABLES"
    }
   ]
  },
  "TABLES": {
   "word": "TABLES",
   "roles": [
    {
     "kind": "noun",
     "of": "TABLES"
    }
   ]
  },
  "CONFERENCE": {
   "word": "CONFERENCE",
   "roles": [
    {
     "kind": "adjective",
     "of": "TABLES"
    }
   ]
  },
  "LONG": {
   "word": "LONG",
   "roles": [
    {
     "kind": "adjective",
     "of": "TABLES"
    }
   ]
  },
  "SHELF": {
   "word": "SHELF",
   "roles": [
    {
     "kind": "noun",
     "of": "SHELVES"
    }
   ]
  },
  "SHELVES": {
   "word": "SHELVES",
   "roles": [
    {
     "kind": "noun",
     "of": "SHELVES"
    }
   ]
  },
  "LIGHTS": {
   "word": "LIGHTS",
   "roles": [
    {
     "kind": "noun",
     "of": "LIGHTS"
    }
   ]
  },
  "DAZZLING": {
   "word": "DAZZLING",
   "roles": [
    {
     "kind": "adjective",
     "of": "LIGHTS"
    }
   ]
  },
  "BLINKING": {
   "word": "BLINKING",
   "roles": [
    {
     "kind": "adjective",
     "of": "LIGHTS"
    }
   ]
  },
  "WARNING": {
   "word": "WARNING",
   "roles": [
    {
     "kind": "adjective",
     "of": "LIGHTS"
    }
   ]
  },
  "BRIGHT": {
   "word": "BRIGHT",
   "roles": [
    {
     "kind": "adjective",
     "of": "LIGHTS"
    }
   ]
  },
  "COLORED": {
   "word": "COLORED",
   "roles": [
    {
     "kind": "adjective",
     "of": "LIGHTS"
    }
   ]
  },
  "FLASHING": {
   "word": "FLASHING",
   "roles": [
    {
     "kind": "adjective",
     "of": "LIGHTS"
    }
   ]
  },
  "PORTAL": {
   "word": "PORTAL",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-DOORWAY"
    }
   ]
  },
  "DIALS": {
   "word": "DIALS",
   "roles": [
    {
     "kind": "noun",
     "of": "CONTROLS"
    }
   ]
  },
  "GAUGES": {
   "word": "GAUGES",
   "roles": [
    {
     "kind": "noun",
     "of": "CONTROLS"
    }
   ]
  },
  "COMPLEX": {
   "word": "COMPLEX",
   "roles": [
    {
     "kind": "adjective",
     "of": "CONTROLS"
    }
   ]
  },
  "BOCCI": {
   "word": "BOCCI",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-GAMES"
    }
   ]
  },
  "CHESS": {
   "word": "CHESS",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-GAMES"
    }
   ]
  },
  "HIDER-AND-SEEKER": {
   "word": "HIDER-AND-SEEKER",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-GAMES"
    }
   ]
  },
  "HUCKA-BUCKA": {
   "word": "HUCKA-BUCKA",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-GAMES"
    }
   ]
  },
  "SEEKER": {
   "word": "SEEKER",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-GAMES"
    }
   ]
  },
  "BEANSTALK": {
   "word": "BEANSTALK",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-GAMES"
    }
   ]
  },
  "HIDER": {
   "word": "HIDER",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-GAMES"
    }
   ]
  },
  "HUCKA": {
   "word": "HUCKA",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-GAMES"
    }
   ]
  },
  "BUCKA": {
   "word": "BUCKA",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-GAMES"
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
  "ADMIRAL": {
   "word": "ADMIRAL",
   "roles": [
    {
     "kind": "noun",
     "of": "ADVENTURER"
    }
   ]
  },
  "SMITHE": {
   "word": "SMITHE",
   "roles": [
    {
     "kind": "noun",
     "of": "ADVENTURER"
    }
   ]
  },
  "SPAM": {
   "word": "SPAM",
   "roles": [
    {
     "kind": "noun",
     "of": "ADVENTURER"
    }
   ]
  },
  "EGGS": {
   "word": "EGGS",
   "roles": [
    {
     "kind": "noun",
     "of": "ADVENTURER"
    }
   ]
  },
  "ORANGE": {
   "word": "ORANGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "ADVENTURER"
    }
   ]
  },
  "OPENER": {
   "word": "OPENER",
   "roles": [
    {
     "kind": "adjective",
     "of": "ADVENTURER"
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
  "WE": {
   "word": "WE",
   "roles": [
    {
     "kind": "noun",
     "of": "ME"
    }
   ]
  },
  "SCRUBBRUSH": {
   "word": "SCRUBBRUSH",
   "roles": [
    {
     "kind": "noun",
     "of": "SCRUB-BRUSH"
    }
   ]
  },
  "SCRUBRUSH": {
   "word": "SCRUBRUSH",
   "roles": [
    {
     "kind": "noun",
     "of": "SCRUB-BRUSH"
    }
   ]
  },
  "PATROL": {
   "word": "PATROL",
   "roles": [
    {
     "kind": "adjective",
     "of": "SCRUB-BRUSH"
    },
    {
     "kind": "adjective",
     "of": "ID-CARD"
    },
    {
     "kind": "adjective",
     "of": "PATROL-UNIFORM"
    }
   ]
  },
  "SELF-CONTAINED": {
   "word": "SELF-CONTAINED",
   "roles": [
    {
     "kind": "adjective",
     "of": "SCRUB-BRUSH"
    }
   ]
  },
  "MULTI": {
   "word": "MULTI",
   "roles": [
    {
     "kind": "adjective",
     "of": "SCRUB-BRUSH"
    },
    {
     "kind": "adjective",
     "of": "BED"
    }
   ]
  },
  "MULTI-PURPOSE": {
   "word": "MULTI-PURPOSE",
   "roles": [
    {
     "kind": "adjective",
     "of": "SCRUB-BRUSH"
    }
   ]
  },
  "CHRONOMETER": {
   "word": "CHRONOMETER",
   "roles": [
    {
     "kind": "noun",
     "of": "CHRONOMETER"
    }
   ]
  },
  "WRISTWATCH": {
   "word": "WRISTWATCH",
   "roles": [
    {
     "kind": "noun",
     "of": "CHRONOMETER"
    }
   ]
  },
  "WATCH": {
   "word": "WATCH",
   "roles": [
    {
     "kind": "noun",
     "of": "CHRONOMETER"
    }
   ]
  },
  "WRIST": {
   "word": "WRIST",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHRONOMETER"
    }
   ]
  },
  "ID": {
   "word": "ID",
   "roles": [
    {
     "kind": "adjective",
     "of": "ID-CARD"
    }
   ]
  },
  "IDENTIFICATION": {
   "word": "IDENTIFICATION",
   "roles": [
    {
     "kind": "adjective",
     "of": "ID-CARD"
    }
   ]
  },
  "WRINKLED": {
   "word": "WRINKLED",
   "roles": [
    {
     "kind": "adjective",
     "of": "PATROL-UNIFORM"
    }
   ]
  },
  "DIARY": {
   "word": "DIARY",
   "roles": [
    {
     "kind": "noun",
     "of": "DIARY"
    }
   ]
  },
  "RECORDER": {
   "word": "RECORDER",
   "roles": [
    {
     "kind": "noun",
     "of": "DIARY"
    }
   ]
  },
  "BATTERED": {
   "word": "BATTERED",
   "roles": [
    {
     "kind": "adjective",
     "of": "DIARY"
    }
   ]
  },
  "LITTLE": {
   "word": "LITTLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "DIARY-BUTTON"
    }
   ]
  },
  "ENSIGN": {
   "word": "ENSIGN",
   "roles": [
    {
     "kind": "noun",
     "of": "BLATHER"
    },
    {
     "kind": "adjective",
     "of": "BLATHER"
    }
   ]
  },
  "BLATHER": {
   "word": "BLATHER",
   "roles": [
    {
     "kind": "noun",
     "of": "BLATHER"
    }
   ]
  },
  "CLASS": {
   "word": "CLASS",
   "roles": [
    {
     "kind": "adjective",
     "of": "BLATHER"
    }
   ]
  },
  "AMBASSADOR": {
   "word": "AMBASSADOR",
   "roles": [
    {
     "kind": "noun",
     "of": "AMBASSADOR"
    }
   ]
  },
  "IMPORTANT": {
   "word": "IMPORTANT",
   "roles": [
    {
     "kind": "adjective",
     "of": "AMBASSADOR"
    }
   ]
  },
  "ALIEN": {
   "word": "ALIEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "AMBASSADOR"
    }
   ]
  },
  "HIGH-RANKING": {
   "word": "HIGH-RANKING",
   "roles": [
    {
     "kind": "adjective",
     "of": "AMBASSADOR"
    }
   ]
  },
  "HIGH": {
   "word": "HIGH",
   "roles": [
    {
     "kind": "adjective",
     "of": "AMBASSADOR"
    }
   ]
  },
  "RANKING": {
   "word": "RANKING",
   "roles": [
    {
     "kind": "adjective",
     "of": "AMBASSADOR"
    }
   ]
  },
  "CELERY": {
   "word": "CELERY",
   "roles": [
    {
     "kind": "noun",
     "of": "CELERY"
    }
   ]
  },
  "STALK": {
   "word": "STALK",
   "roles": [
    {
     "kind": "noun",
     "of": "CELERY"
    }
   ]
  },
  "BROCHURE": {
   "word": "BROCHURE",
   "roles": [
    {
     "kind": "noun",
     "of": "BROCHURE"
    }
   ]
  },
  "PAMPHLET": {
   "word": "PAMPHLET",
   "roles": [
    {
     "kind": "noun",
     "of": "BROCHURE"
    }
   ]
  },
  "LEAFLET": {
   "word": "LEAFLET",
   "roles": [
    {
     "kind": "noun",
     "of": "BROCHURE"
    }
   ]
  },
  "POD": {
   "word": "POD",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-POD"
    },
    {
     "kind": "adjective",
     "of": "POD-DOOR"
    }
   ]
  },
  "PRIMARY": {
   "word": "PRIMARY",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-POD"
    }
   ]
  },
  "MASS": {
   "word": "MASS",
   "roles": [
    {
     "kind": "noun",
     "of": "SAFETY-WEB"
    }
   ]
  },
  "WEB": {
   "word": "WEB",
   "roles": [
    {
     "kind": "noun",
     "of": "SAFETY-WEB"
    }
   ]
  },
  "WEBBING": {
   "word": "WEBBING",
   "roles": [
    {
     "kind": "noun",
     "of": "SAFETY-WEB"
    }
   ]
  },
  "NET": {
   "word": "NET",
   "roles": [
    {
     "kind": "noun",
     "of": "SAFETY-WEB"
    }
   ]
  },
  "SAFETY": {
   "word": "SAFETY",
   "roles": [
    {
     "kind": "adjective",
     "of": "SAFETY-WEB"
    }
   ]
  },
  "TOWEL": {
   "word": "TOWEL",
   "roles": [
    {
     "kind": "noun",
     "of": "TOWEL"
    }
   ]
  },
  "PROVISIONS": {
   "word": "PROVISIONS",
   "roles": [
    {
     "kind": "noun",
     "of": "FOOD-KIT"
    }
   ]
  },
  "KIT": {
   "word": "KIT",
   "roles": [
    {
     "kind": "noun",
     "of": "FOOD-KIT"
    }
   ]
  },
  "SURVIVAL": {
   "word": "SURVIVAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "FOOD-KIT"
    }
   ]
  },
  "GOO": {
   "word": "GOO",
   "roles": [
    {
     "kind": "noun",
     "of": "RED-GOO"
    },
    {
     "kind": "noun",
     "of": "BROWN-GOO"
    },
    {
     "kind": "noun",
     "of": "GREEN-GOO"
    }
   ]
  },
  "BLOB": {
   "word": "BLOB",
   "roles": [
    {
     "kind": "noun",
     "of": "RED-GOO"
    },
    {
     "kind": "noun",
     "of": "BROWN-GOO"
    },
    {
     "kind": "noun",
     "of": "GREEN-GOO"
    }
   ]
  },
  "PIE": {
   "word": "PIE",
   "roles": [
    {
     "kind": "noun",
     "of": "RED-GOO"
    }
   ]
  },
  "CHERRY": {
   "word": "CHERRY",
   "roles": [
    {
     "kind": "adjective",
     "of": "RED-GOO"
    }
   ]
  },
  "STEW": {
   "word": "STEW",
   "roles": [
    {
     "kind": "noun",
     "of": "BROWN-GOO"
    }
   ]
  },
  "BEEF": {
   "word": "BEEF",
   "roles": [
    {
     "kind": "adjective",
     "of": "BROWN-GOO"
    }
   ]
  },
  "BEANS": {
   "word": "BEANS",
   "roles": [
    {
     "kind": "noun",
     "of": "GREEN-GOO"
    }
   ]
  },
  "LIMA": {
   "word": "LIMA",
   "roles": [
    {
     "kind": "adjective",
     "of": "GREEN-GOO"
    }
   ]
  },
  "BULKHEAD": {
   "word": "BULKHEAD",
   "roles": [
    {
     "kind": "noun",
     "of": "POD-DOOR"
    },
    {
     "kind": "noun",
     "of": "CORRIDOR-DOOR"
    },
    {
     "kind": "noun",
     "of": "GANGWAY-DOOR"
    }
   ]
  },
  "SLOT": {
   "word": "SLOT",
   "roles": [
    {
     "kind": "noun",
     "of": "SLOT"
    }
   ]
  },
  "BEIGE": {
   "word": "BEIGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "TELEPORTATION-BUTTON-2"
    }
   ]
  },
  "TAN": {
   "word": "TAN",
   "roles": [
    {
     "kind": "adjective",
     "of": "TELEPORTATION-BUTTON-3"
    }
   ]
  },
  "CAR": {
   "word": "CAR",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-SHUTTLE"
    }
   ]
  },
  "LEVER": {
   "word": "LEVER",
   "roles": [
    {
     "kind": "noun",
     "of": "LEVER"
    }
   ]
  },
  "BUNK": {
   "word": "BUNK",
   "roles": [
    {
     "kind": "noun",
     "of": "BED"
    },
    {
     "kind": "adjective",
     "of": "BED"
    }
   ]
  },
  "BED": {
   "word": "BED",
   "roles": [
    {
     "kind": "noun",
     "of": "BED"
    }
   ]
  },
  "TIERED": {
   "word": "TIERED",
   "roles": [
    {
     "kind": "adjective",
     "of": "BED"
    }
   ]
  },
  "MULTI-TIERED": {
   "word": "MULTI-TIERED",
   "roles": [
    {
     "kind": "adjective",
     "of": "BED"
    }
   ]
  }
 },
 "files": [
  "compone.zil",
  "comptwo.zil",
  "diary.zil",
  "globals.zil",
  "hints.zil",
  "misc.zil",
  "parser.zil",
  "s3.zil",
  "syntax.zil",
  "verbs.zil"
 ]
};
