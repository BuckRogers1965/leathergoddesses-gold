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
  "TWISTED-FOREST": {
   "name": "TWISTED-FOREST",
   "file": "belboz.zil",
   "line": 32,
   "endLine": 42,
   "desc": "Twisted Forest",
   "ldesc": "You are on a path through a blighted forest. The trees are sickly,\nand there is no undergrowth at all. One tree here looks climbable.\nThe path, which ends here, continues to the northeast.",
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
    "ROAD",
    "FOREST",
    "TREE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "TREE-BRANCH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "FOREST-EDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    }
   ],
   "contents": [
    "HELLHOUND"
   ],
   "source": "<ROOM TWISTED-FOREST\n      (IN ROOMS)\n      (DESC \"Twisted Forest\")\n      (LDESC\n\"You are on a path through a blighted forest. The trees are sickly,\nand there is no undergrowth at all. One tree here looks climbable.\nThe path, which ends here, continues to the northeast.\")\n      (UP TO TREE-BRANCH)\n      (NE TO FOREST-EDGE)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL ROAD FOREST TREE)>",
   "referencedBy": [
    "I-HELLHOUND",
    "BELBOZ-F",
    "FOREST-F",
    "JEEARR-F",
    "GO",
    "V-SLEEP",
    "IDROP",
    "JIGS-UP"
   ]
  },
  "TREE-BRANCH": {
   "name": "TREE-BRANCH",
   "file": "belboz.zil",
   "line": 80,
   "endLine": 87,
   "desc": "Tree Branch",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "NONLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "TREE-BRANCH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "FOREST",
    "TREE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "TWISTED-FOREST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "TREE-UP-F",
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [
    "BOA"
   ],
   "source": "<ROOM TREE-BRANCH\n      (IN ROOMS)\n      (DESC \"Tree Branch\")\n      (DOWN TO TWISTED-FOREST)\n      (UP PER TREE-UP-F)\n      (FLAGS NONLANDBIT ONBIT)\n      (GLOBAL FOREST TREE)\n      (ACTION TREE-BRANCH-F)>",
   "referencedBy": [
    "I-HELLHOUND",
    "I-BOA",
    "I-UNFWEEP",
    "FOREST-F",
    "I-FLY",
    "V-LEAP",
    "V-SLEEP",
    "IDROP",
    "JIGS-UP"
   ]
  },
  "FOREST-EDGE": {
   "name": "FOREST-EDGE",
   "file": "belboz.zil",
   "line": 145,
   "endLine": 161,
   "desc": "Forest Edge",
   "ldesc": "To the west, a path enters the blighted woods, which stretch out of sight.\nA signpost stands beside another path leading north, and to the east is a\nwide meadow. At the base of the signpost is a slimy hole leading down.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "MOUNTA"
   ],
   "adjectives": [
    "LONELY"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HOLE",
    "ROAD",
    "FOREST",
    "MEADOW"
   ],
   "pseudo": [
    "FENCE",
    "FENCE-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "TWISTED-FOREST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MINE-FIELD",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SNAKE-PIT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "MEADOW",
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
     "message": "A tall fence blocks your way.",
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "SIGNPOST"
   ],
   "source": "<ROOM FOREST-EDGE\n      (IN ROOMS)\n      (SYNONYM MOUNTA)\n      (ADJECTIVE LONELY)\n      (DESC \"Forest Edge\")\n      (LDESC\n\"To the west, a path enters the blighted woods, which stretch out of sight.\nA signpost stands beside another path leading north, and to the east is a\nwide meadow. At the base of the signpost is a slimy hole leading down.\")\n      (WEST TO TWISTED-FOREST)\n      (NORTH TO MINE-FIELD)\n      (DOWN TO SNAKE-PIT)\n      (EAST TO MEADOW)\n      (SOUTH \"A tall fence blocks your way.\")\n      (PSEUDO \"FENCE\" FENCE-PSEUDO)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL HOLE ROAD FOREST MEADOW)>",
   "referencedBy": [
    "MINE-FIELD-EXIT-F",
    "HOLE-F",
    "FOREST-F",
    "V-RESEARCH",
    "JIGS-UP"
   ]
  },
  "MINE-FIELD": {
   "name": "MINE-FIELD",
   "file": "belboz.zil",
   "line": 187,
   "endLine": 198,
   "desc": "Mine Field",
   "ldesc": "This is a flat and featureless dirt path leading north and south.",
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
    "FOREST"
   ],
   "pseudo": [
    "FENCE",
    "FENCE-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MINE-FIELD-EXIT-F",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MINE-FIELD-EXIT-F",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "A tall fence blocks your way.",
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The forest is too dense to enter here.",
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM MINE-FIELD\n      (IN ROOMS)\n      (DESC \"Mine Field\")\n      (LDESC\n\"This is a flat and featureless dirt path leading north and south.\")\n      (SOUTH PER MINE-FIELD-EXIT-F)\n      (NORTH PER MINE-FIELD-EXIT-F)\n      (EAST \"A tall fence blocks your way.\")\n      (WEST \"The forest is too dense to enter here.\")\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL FOREST)\n      (PSEUDO \"FENCE\" FENCE-PSEUDO)>",
   "referencedBy": [
    "WAXER-F",
    "FOREST-F",
    "V-SLEEP",
    "JIGS-UP"
   ]
  },
  "SNAKE-PIT": {
   "name": "SNAKE-PIT",
   "file": "belboz.zil",
   "line": 212,
   "endLine": 225,
   "desc": "Snake Pit",
   "ldesc": "You have entered a shadowy pit full of nooks and crannies. From every\ndirection you hear the hissing of vipers and the irregular clicking of\ngiant beetles. Light spills down from above, and a small crack leads\nfurther downward into darkness.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "SNAKE-PIT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "PIT",
    "SNAKE-PIT-PSEUDO",
    "CRACK",
    "CRACK-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "FOREST-EDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "FOREST-EDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "SLIMY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "VIPERS"
   ],
   "source": "<ROOM SNAKE-PIT\n      (IN ROOMS)\n      (DESC \"Snake Pit\")\n      (LDESC\n\"You have entered a shadowy pit full of nooks and crannies. From every\ndirection you hear the hissing of vipers and the irregular clicking of\ngiant beetles. Light spills down from above, and a small crack leads\nfurther downward into darkness.\")\n      (UP TO FOREST-EDGE)\n      (OUT TO FOREST-EDGE)\n      (DOWN TO SLIMY-ROOM)\n      (FLAGS RLANDBIT ONBIT)\n      (PSEUDO \"PIT\" SNAKE-PIT-PSEUDO \"CRACK\" CRACK-PSEUDO)\n      (ACTION SNAKE-PIT-F)>",
   "referencedBy": [
    "I-SNAKE-PIT",
    "V-SLEEP",
    "JIGS-UP"
   ]
  },
  "SLIMY-ROOM": {
   "name": "SLIMY-ROOM",
   "file": "belboz.zil",
   "line": 256,
   "endLine": 269,
   "desc": "Slimy Room",
   "ldesc": "This is a moist room whose walls are thick with moss and lichens. A\nsmall hole leads up and a rocky passage leads south.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT"
   ],
   "synonyms": [
    "KRILL"
   ],
   "adjectives": [
    "EVIL",
    "WARLOC"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HOLE"
   ],
   "pseudo": [
    "CRATER",
    "CRATER-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "SNAKE-PIT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "CRATER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "CRATER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "MOSS"
   ],
   "source": "<ROOM SLIMY-ROOM\n      (IN ROOMS)\n      (SYNONYM KRILL)\n      (ADJECTIVE EVIL WARLOC)\n      (DESC \"Slimy Room\")\n      (LDESC\n\"This is a moist room whose walls are thick with moss and lichens. A\nsmall hole leads up and a rocky passage leads south.\")\n      (UP TO SNAKE-PIT)\n      (SOUTH TO CRATER)\n      (DOWN TO CRATER)\n      (FLAGS INSIDEBIT RLANDBIT)\n      (GLOBAL HOLE)\n      (PSEUDO \"CRATER\" CRATER-PSEUDO)>",
   "referencedBy": [
    "CRATER-PSEUDO",
    "WALLS-F",
    "HOLE-F",
    "V-RESEARCH",
    "V-WHO",
    "V-AIMFIZ"
   ]
  },
  "MEADOW": {
   "name": "MEADOW",
   "file": "belboz.zil",
   "line": 285,
   "endLine": 296,
   "desc": "Meadow",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MEADOW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MEADOW-OBJECT",
    "CASTLE"
   ],
   "pseudo": [
    "FENCE",
    "FENCE-PSEUDO",
    "TURRET",
    "TURRET-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "RIVER-BANK",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "RIVER-BANK",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "DRAWBRIDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "FOREST-EDGE",
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
     "message": "A tall fence blocks your way.",
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "PLAGUE-OF-LOCUSTS"
   ],
   "source": "<ROOM MEADOW\n      (IN ROOMS)\n      (DESC \"Meadow\")\n      (NORTH TO RIVER-BANK)\n      (NE TO RIVER-BANK)\n      (EAST TO DRAWBRIDGE)\n      (WEST TO FOREST-EDGE)\n      (SOUTH \"A tall fence blocks your way.\")\n      (FLAGS RLANDBIT ONBIT)\n      (PSEUDO \"FENCE\" FENCE-PSEUDO \"TURRET\" TURRET-PSEUDO)\n      (GLOBAL MEADOW-OBJECT CASTLE)\n      (ACTION MEADOW-F)>",
   "referencedBy": [
    "MEADOW-OBJECT-F",
    "I-LOCUSTS",
    "TURRET-PSEUDO",
    "V-SLEEP",
    "JIGS-UP"
   ]
  },
  "RIVER-BANK": {
   "name": "RIVER-BANK",
   "file": "belboz.zil",
   "line": 363,
   "endLine": 377,
   "desc": "River Bank",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "RIVER-BANK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WATER",
    "RIVER",
    "MEADOW-OBJECT",
    "BANKS",
    "RIVER-BED-OBJECT"
   ],
   "pseudo": [
    "ROCK",
    "ROCK-PSEUDO",
    "ROCKS",
    "ROCK-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "MEADOW",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "MEADOW",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "RIVER-ENTER-F",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "RIVER-ENTER-F",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "RIVER-ENTER-F",
     "message": null,
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "RIVER-ENTER-F",
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Undergrowth prevents travel along the bank.",
     "dir": "NW"
    },
    {
     "to": "FORT-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [
    "UNDERGROWTH"
   ],
   "source": "<ROOM RIVER-BANK\n      (IN ROOMS)\n      (DESC \"River Bank\")\n      (SOUTH TO MEADOW)\n      (SW TO MEADOW)\n      (NORTH PER RIVER-ENTER-F)\n      (EAST PER RIVER-ENTER-F)\n      (NE PER RIVER-ENTER-F)\n      (DOWN PER RIVER-ENTER-F)\n      (NW \"Undergrowth prevents travel along the bank.\")\n      (SE TO FORT-ENTRANCE)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL WATER RIVER MEADOW-OBJECT BANKS RIVER-BED-OBJECT)\n      (PSEUDO \"ROCK\" ROCK-PSEUDO \"ROCKS\" ROCK-PSEUDO)\n      (ACTION RIVER-BANK-F)>",
   "referencedBy": [
    "RIVER-F",
    "I-TRICKLE",
    "I-FLOOD",
    "RIVER-BED-OBJECT-F",
    "WATER-F",
    "WATER-IS-PRSI",
    "V-LEAP",
    "V-SLEEP",
    "V-SWIM",
    "JIGS-UP"
   ]
  },
  "RIVER-BED": {
   "name": "RIVER-BED",
   "file": "belboz.zil",
   "line": 543,
   "endLine": 561,
   "desc": "River Bed",
   "ldesc": "You are on the bed of an evaporated river. Fish splash helplessly in\ntiny puddles. The bed leads northwest and southeast. A climb up the\nsouthwest bank is possible. To the northeast is a dark cave, hollowed\nout by years of rushing water.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "SERVAN",
    "GUILD"
   ],
   "adjectives": [
    "SERVAN"
   ],
   "action": "RIVER-BED-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WATER",
    "CAVE",
    "BANKS",
    "RIVER-BED-OBJECT"
   ],
   "pseudo": [
    "PUDDLE",
    "PUDDLE-PSEUDO",
    "FISH",
    "FISH-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "RIVER-BANK",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "RIVER-BANK",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "HIDDEN-CAVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "TOP-OF-FALLS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "STAGNANT-POOL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM RIVER-BED\n      (IN ROOMS)\n      (SYNONYM SERVAN GUILD)\n      (ADJECTIVE SERVAN)\n      (DESC \"River Bed\")\n      (LDESC\n\"You are on the bed of an evaporated river. Fish splash helplessly in\ntiny puddles. The bed leads northwest and southeast. A climb up the\nsouthwest bank is possible. To the northeast is a dark cave, hollowed\nout by years of rushing water.\")\n      (UP TO RIVER-BANK)\n      (SW TO RIVER-BANK)\n      (NE TO HIDDEN-CAVE)\n      (SE TO TOP-OF-FALLS)\n      (NW TO STAGNANT-POOL)\n      (FLAGS RLANDBIT ONBIT)\n      (PSEUDO \"PUDDLE\" PUDDLE-PSEUDO \"FISH\" FISH-PSEUDO)\n      (GLOBAL WATER CAVE BANKS RIVER-BED-OBJECT)\n      (ACTION RIVER-BED-F)>",
   "referencedBy": [
    "RIVER-ENTER-F",
    "I-TRICKLE",
    "I-FLOOD",
    "WATER-F",
    "CAVE-F",
    "V-RESEARCH",
    "V-SLEEP",
    "V-WHERE",
    "V-WHO",
    "V-AIMFIZ",
    "JIGS-UP"
   ]
  },
  "STAGNANT-POOL": {
   "name": "STAGNANT-POOL",
   "file": "belboz.zil",
   "line": 580,
   "endLine": 595,
   "desc": "Near Stagnant Pool",
   "ldesc": "The river bed to the northwest is a pool covered with algae and other\nscum. The bed to the southeast is slightly drier. The banks are too tall\nand steep to climb here.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "TUMPER"
   ],
   "adjectives": [
    "GABBER"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WATER",
    "BANKS",
    "RIVER-BED-OBJECT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "TENTACLE-DEATH",
     "message": null,
     "dir": "NW"
    },
    {
     "to": "RIVER-BED",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "RIVER-EXIT-F",
     "message": null,
     "dir": "UP"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "RIVER-EXIT-F",
     "message": null,
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "RIVER-EXIT-F",
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM STAGNANT-POOL\n      (IN ROOMS)\n      (SYNONYM TUMPER)\n      (ADJECTIVE GABBER)\n      (DESC \"Near Stagnant Pool\")\n      (LDESC\n\"The river bed to the northwest is a pool covered with algae and other\nscum. The bed to the southeast is slightly drier. The banks are too tall\nand steep to climb here.\")\n      (NW PER TENTACLE-DEATH)\n      (SE TO RIVER-BED)\n      (UP PER RIVER-EXIT-F)\n      (NE PER RIVER-EXIT-F)\n      (SW PER RIVER-EXIT-F)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL WATER BANKS RIVER-BED-OBJECT)>",
   "referencedBy": [
    "I-TRICKLE",
    "I-FLOOD",
    "WATER-F",
    "V-RESEARCH",
    "V-SLEEP",
    "V-SWIM",
    "JIGS-UP"
   ]
  },
  "TOP-OF-FALLS": {
   "name": "TOP-OF-FALLS",
   "file": "belboz.zil",
   "line": 606,
   "endLine": 623,
   "desc": "Top of Falls",
   "ldesc": "The river bed ends here at a steep cliff, where the river once plunged\nover a waterfall. Below the falls, in the distance, is a large sea,\ncovered with haze. The bed continues northwest, but the banks here are\nunclimbable. Atop the southwestern bank stands a proud fortress.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [
    "BORPHE"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WATER",
    "FORT",
    "BANKS",
    "OCEAN",
    "WATERFALL",
    "RIVER-BED-OBJECT"
   ],
   "pseudo": [
    "CLIFF",
    "TOP-OF-CLIFF-PSEUDO",
    "HAZE",
    "HAZE-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "RIVER-EXIT-F",
     "message": null,
     "dir": "UP"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "RIVER-EXIT-F",
     "message": null,
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "RIVER-EXIT-F",
     "message": null,
     "dir": "SW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "WATERFALL-EXIT-F",
     "message": null,
     "dir": "SE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "WATERFALL-EXIT-F",
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "RIVER-BED",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM TOP-OF-FALLS\n\t (IN ROOMS)\n\t (SYNONYM BORPHE)\n\t (DESC \"Top of Falls\")\n\t (LDESC\n\"The river bed ends here at a steep cliff, where the river once plunged\nover a waterfall. Below the falls, in the distance, is a large sea,\ncovered with haze. The bed continues northwest, but the banks here are\nunclimbable. Atop the southwestern bank stands a proud fortress.\")\n\t (UP PER RIVER-EXIT-F)\n\t (NE PER RIVER-EXIT-F)\n\t (SW PER RIVER-EXIT-F)\n\t (SE PER WATERFALL-EXIT-F)\n\t (DOWN PER WATERFALL-EXIT-F)\n\t (NW TO RIVER-BED)\n\t (FLAGS ONBIT RLANDBIT)\n\t (GLOBAL WATER FORT BANKS OCEAN WATERFALL RIVER-BED-OBJECT)\n\t (PSEUDO \"CLIFF\" TOP-OF-CLIFF-PSEUDO \"HAZE\" HAZE-PSEUDO)>",
   "referencedBy": [
    "I-TRICKLE",
    "I-FLOOD",
    "WATERFALL-F",
    "OCEAN-F",
    "WATER-F",
    "V-LEAP",
    "V-RESEARCH",
    "V-SLEEP",
    "JIGS-UP"
   ]
  },
  "HIDDEN-CAVE": {
   "name": "HIDDEN-CAVE",
   "file": "belboz.zil",
   "line": 672,
   "endLine": 682,
   "desc": "Hidden Cave",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "HIDDEN-CAVE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WATER",
    "CAVE",
    "HOLE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RIVER-BED",
     "kind": "conditional",
     "condition": "RIVER-EVAPORATED",
     "else": "\"Entering that swirling, turbulent pool looks very dangerous.\"",
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "RIVER-BED",
     "kind": "conditional",
     "condition": "RIVER-EVAPORATED",
     "else": "\"Entering that swirling, turbulent pool looks very dangerous.\"",
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "PIT-OF-BONES",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "BAT-GUANO",
    "BLORT-VIAL",
    "FWEEP-SCROLL"
   ],
   "source": "<ROOM HIDDEN-CAVE\n      (IN ROOMS)\n      (DESC \"Hidden Cave\")\n      (SW TO RIVER-BED IF RIVER-EVAPORATED ELSE\n       \"Entering that swirling, turbulent pool looks very dangerous.\")\n      (OUT TO RIVER-BED IF RIVER-EVAPORATED ELSE\n       \"Entering that swirling, turbulent pool looks very dangerous.\")\n      (DOWN TO PIT-OF-BONES)\n      (FLAGS INSIDEBIT RLANDBIT)\n      (GLOBAL WATER CAVE HOLE)\n      (ACTION HIDDEN-CAVE-F)>      ",
   "referencedBy": [
    "I-FLOOD",
    "HIDDEN-CAVE-F",
    "WATER-F",
    "HOLE-F",
    "V-SWIM"
   ]
  },
  "DRAWBRIDGE": {
   "name": "DRAWBRIDGE",
   "file": "belboz.zil",
   "line": 825,
   "endLine": 833,
   "desc": "Drawbridge",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DRAWBRIDGE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WATER",
    "CASTLE",
    "MEADOW-OBJECT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RUINS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MEADOW",
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
     "per": "DRAWBRIDGE-EXIT-F",
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "MOAT",
    "BRIDGE"
   ],
   "source": "<ROOM DRAWBRIDGE\n      (IN ROOMS)\n      (DESC \"Drawbridge\")\n      (EAST TO RUINS)\n      (WEST TO MEADOW)\n      (DOWN PER DRAWBRIDGE-EXIT-F)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL WATER CASTLE MEADOW-OBJECT)\n      (ACTION DRAWBRIDGE-F)>",
   "referencedBy": [
    "WATER-F",
    "WATER-IS-PRSI",
    "CASTLE-F",
    "V-LEAP",
    "V-SLEEP",
    "V-SWIM",
    "JIGS-UP"
   ]
  },
  "RUINS": {
   "name": "RUINS",
   "file": "belboz.zil",
   "line": 912,
   "endLine": 926,
   "desc": "Ruins",
   "ldesc": "You are amongst the ruins of an ancient castle. A winding stairway leads\nup to a crumbling turret, and a dark passage leads downward. A path heads\nthrough the rubble to the west.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "FANNUC"
   ],
   "adjectives": [
    "DOUBLE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIRS",
    "CASTLE"
   ],
   "pseudo": [
    "TURRET",
    "TURRET-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "DRAWBRIDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "TURRET",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "DUNGEON",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM RUINS\n      (IN ROOMS)\n      (SYNONYM FANNUC)\n      (ADJECTIVE DOUBLE)\n      (DESC \"Ruins\")\n      (LDESC\n\"You are amongst the ruins of an ancient castle. A winding stairway leads\nup to a crumbling turret, and a dark passage leads downward. A path heads\nthrough the rubble to the west.\")\n      (WEST TO DRAWBRIDGE)\n      (UP TO TURRET)\n      (DOWN TO DUNGEON)\n      (FLAGS RLANDBIT ONBIT)\n      (PSEUDO \"TURRET\" TURRET-PSEUDO)\n      (GLOBAL STAIRS CASTLE)>",
   "referencedBy": [
    "TURRET-PSEUDO",
    "CASTLE-F",
    "V-RESEARCH",
    "JIGS-UP"
   ]
  },
  "TURRET": {
   "name": "TURRET",
   "file": "belboz.zil",
   "line": 928,
   "endLine": 942,
   "desc": "Turret",
   "ldesc": "This is the only turret of the castle still standing. It affords a\nmarvelous view of a meadow to the west, and beyond that a twisted forest.\nTo the north is a mighty fortress which stands atop a cliff where a\nturbulent river pours into an ocean. The ocean stretches out of sight\nto the east. A spiralling staircase leads downward.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "MAILMA",
    "MESSEN",
    "GUILD"
   ],
   "adjectives": [
    "MESSEN"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "FORT",
    "OCEAN",
    "RIVER",
    "MEADOW-OBJECT",
    "STAIRS",
    "FOREST",
    "CASTLE",
    "WATERFALL"
   ],
   "pseudo": [
    "TURRET",
    "TURRET-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "RUINS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM TURRET\n      (IN ROOMS)\n      (SYNONYM MAILMA MESSEN GUILD)\n      (ADJECTIVE MESSEN)\n      (DESC \"Turret\")\n      (LDESC\n\"This is the only turret of the castle still standing. It affords a\nmarvelous view of a meadow to the west, and beyond that a twisted forest.\nTo the north is a mighty fortress which stands atop a cliff where a\nturbulent river pours into an ocean. The ocean stretches out of sight\nto the east. A spiralling staircase leads downward.\")\n      (DOWN TO RUINS)\n      (FLAGS RLANDBIT ONBIT)\n      (PSEUDO \"TURRET\" TURRET-PSEUDO)\n      (GLOBAL FORT OCEAN RIVER MEADOW-OBJECT STAIRS FOREST CASTLE WATERFALL)>",
   "referencedBy": [
    "RIVER-F",
    "WATERFALL-F",
    "TURRET-PSEUDO",
    "OCEAN-F",
    "V-FOLLOW",
    "V-LEAP",
    "V-RESEARCH",
    "V-WHO",
    "V-AIMFIZ"
   ]
  },
  "TORTURE-CHAMBER": {
   "name": "TORTURE-CHAMBER",
   "file": "belboz.zil",
   "line": 963,
   "endLine": 973,
   "desc": "Torture Chamber",
   "ldesc": "This is a large and well-equipped torture chamber. These were very\npopular in castles of several centuries ago, but are somewhat out\nof fashion now. There are exits to the west and north.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CASTLE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DUNGEON",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "PIT-OF-BONES",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "TORTURE-DEVICES",
    "FLAXO-VIAL"
   ],
   "source": "<ROOM TORTURE-CHAMBER\n      (IN ROOMS)\n      (DESC \"Torture Chamber\")\n      (LDESC\n\"This is a large and well-equipped torture chamber. These were very\npopular in castles of several centuries ago, but are somewhat out\nof fashion now. There are exits to the west and north.\")\n      (WEST TO DUNGEON)\n      (NORTH TO PIT-OF-BONES)\n      (FLAGS RLANDBIT INSIDEBIT)\n      (GLOBAL CASTLE)>",
   "referencedBy": [
    "FLAXO-POTION-F",
    "V-TORTURE"
   ]
  },
  "DUNGEON": {
   "name": "DUNGEON",
   "file": "belboz.zil",
   "line": 1045,
   "endLine": 1059,
   "desc": "Dungeon",
   "ldesc": "This is the dark and dank dungeon of the ruined castle. There's probably\na torture chamber nearby. You can go east, northeast, or upward. A small\nopening leads down as well.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT"
   ],
   "synonyms": [
    "TRAVEL"
   ],
   "adjectives": [
    "TEMPOR",
    "TIME"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HOLE",
    "CASTLE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "TORTURE-CHAMBER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "RUINS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "PIT-OF-BONES",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "HIGHWAY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM DUNGEON\n      (IN ROOMS)\n      (SYNONYM TRAVEL)\n      (ADJECTIVE TEMPOR TIME)\n      (DESC \"Dungeon\")\n      (LDESC\n\"This is the dark and dank dungeon of the ruined castle. There's probably\na torture chamber nearby. You can go east, northeast, or upward. A small\nopening leads down as well.\")\n      (EAST TO TORTURE-CHAMBER)\n      (UP TO RUINS)\n      (NE TO PIT-OF-BONES)\n      (DOWN TO HIGHWAY)\n      (FLAGS INSIDEBIT RLANDBIT)\n      (GLOBAL HOLE CASTLE)>",
   "referencedBy": [
    "HOLE-F",
    "V-RESEARCH"
   ]
  },
  "PIT-OF-BONES": {
   "name": "PIT-OF-BONES",
   "file": "belboz.zil",
   "line": 1061,
   "endLine": 1074,
   "desc": "Pit of Bones",
   "ldesc": "In the center of the room is a deep pit filled with countless bones, an\nindication of the brutality of dungeon life. There are exits south and\nsouthwest. High above you is a small opening in the ceiling.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HOLE",
    "CASTLE",
    "CAVE"
   ],
   "pseudo": [
    "BONES",
    "BONES-PSEUDO",
    "PIT",
    "PIT-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "PIT-OF-BONES-EXIT-F",
     "message": null,
     "dir": "UP"
    },
    {
     "to": "TORTURE-CHAMBER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "DUNGEON",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Do you really want to add your bones to the others in the pit?",
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM PIT-OF-BONES\n      (IN ROOMS)\n      (DESC \"Pit of Bones\")\n      (LDESC\n\"In the center of the room is a deep pit filled with countless bones, an\nindication of the brutality of dungeon life. There are exits south and\nsouthwest. High above you is a small opening in the ceiling.\")\n      (UP PER PIT-OF-BONES-EXIT-F)\n      (SOUTH TO TORTURE-CHAMBER)\n      (SW TO DUNGEON)\n      (DOWN \"Do you really want to add your bones to the others in the pit?\")\n      (FLAGS INSIDEBIT RLANDBIT)\n      (GLOBAL HOLE CASTLE CAVE)\n      (PSEUDO \"BONES\" BONES-PSEUDO \"PIT\" PIT-PSEUDO)>",
   "referencedBy": [
    "CEILING-F",
    "HOLE-F",
    "CAVE-F"
   ]
  },
  "HIGHWAY": {
   "name": "HIGHWAY",
   "file": "belboz.zil",
   "line": 1095,
   "endLine": 1109,
   "desc": "Highway",
   "ldesc": "This is a wide road winding away to the east and west, perhaps a relic\nof the Great Underground Empire you read about in history class. A passage\nleads up to the north.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT"
   ],
   "synonyms": [
    "GUILD",
    "CIRCLE",
    "ENCHAN"
   ],
   "adjectives": [
    "ENCHAN"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "ROAD"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DUNGEON",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "DUNGEON",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "TOLL-GATE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BEND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM HIGHWAY\n      (IN ROOMS)\n      (SYNONYM GUILD CIRCLE ENCHAN)\n      (ADJECTIVE ENCHAN)\n      (DESC \"Highway\")\n      (LDESC\n\"This is a wide road winding away to the east and west, perhaps a relic\nof the Great Underground Empire you read about in history class. A passage\nleads up to the north.\")\n      (UP TO DUNGEON)\n      (NORTH TO DUNGEON)\n      (EAST TO TOLL-GATE)\n      (WEST TO BEND)\n      (FLAGS RLANDBIT INSIDEBIT)\n      (GLOBAL ROAD)>",
   "referencedBy": [
    "IN-CRATER-AREA?",
    "STATUE-F",
    "V-RESEARCH"
   ]
  },
  "TOLL-GATE": {
   "name": "TOLL-GATE",
   "file": "belboz.zil",
   "line": 1111,
   "endLine": 1119,
   "desc": "Toll Gate",
   "ldesc": "You have reached a toll gate which spans the highway.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "ROAD"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "HIGHWAY",
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
     "per": "TOLL-GATE-CROSSING-F",
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "GATE",
    "BOOTH",
    "GNOME"
   ],
   "source": "<ROOM TOLL-GATE\n      (IN ROOMS)\n      (DESC \"Toll Gate\")\n      (LDESC\n\"You have reached a toll gate which spans the highway.\")\n      (WEST TO HIGHWAY)\n      (EAST PER TOLL-GATE-CROSSING-F)\n      (FLAGS RLANDBIT INSIDEBIT)\n      (GLOBAL ROAD)>",
   "referencedBy": [
    "I-GNOME",
    "IN-MAZE-AREA?",
    "V-YELL"
   ]
  },
  "OUTSIDE-STORE": {
   "name": "OUTSIDE-STORE",
   "file": "belboz.zil",
   "line": 1318,
   "endLine": 1330,
   "desc": "Outside Store",
   "ldesc": "A store lies to the south from this section of the east-west road. There is\na sign over the entrance.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "ROAD"
   ],
   "pseudo": [
    "SIGN",
    "SIGN-PSEUDO",
    "STORE",
    "STORE-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "STORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "STORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "TOLL-GATE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "END-OF-HIGHWAY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM OUTSIDE-STORE\n      (IN ROOMS)\n      (DESC \"Outside Store\")\n      (LDESC\n\"A store lies to the south from this section of the east-west road. There is\na sign over the entrance.\")\n      (SOUTH TO STORE)\n      (IN TO STORE)\n      (WEST TO TOLL-GATE)\n      (EAST TO END-OF-HIGHWAY)\n      (FLAGS RLANDBIT INSIDEBIT)\n      (GLOBAL ROAD)\n      (PSEUDO \"SIGN\" SIGN-PSEUDO \"STORE\" STORE-PSEUDO)>",
   "referencedBy": [
    "TOLL-GATE-CROSSING-F",
    "IN-MAZE-AREA?",
    "STATUE-F"
   ]
  },
  "STORE": {
   "name": "STORE",
   "file": "belboz.zil",
   "line": 1360,
   "endLine": 1370,
   "desc": "Store",
   "ldesc": "This is an appliance store, apparently abandoned. The entrance\nlies to the north.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT"
   ],
   "synonyms": [
    "GNOMES"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "STORE",
    "STORE-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "OUTSIDE-STORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "OUTSIDE-STORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "WAXER"
   ],
   "source": "<ROOM STORE\n      (IN ROOMS)\n      (SYNONYM GNOMES)\n      (DESC \"Store\")\n      (LDESC\n\"This is an appliance store, apparently abandoned. The entrance\nlies to the north.\")\n      (NORTH TO OUTSIDE-STORE)\n      (OUT TO OUTSIDE-STORE)\n      (FLAGS INSIDEBIT RLANDBIT)\n      (PSEUDO \"STORE\" STORE-PSEUDO)>",
   "referencedBy": [
    "SIGN-PSEUDO",
    "STORE-PSEUDO",
    "IN-MAZE-AREA?",
    "V-RESEARCH"
   ]
  },
  "BEND": {
   "name": "BEND",
   "file": "belboz.zil",
   "line": 1407,
   "endLine": 1417,
   "desc": "Bend",
   "ldesc": "The road curves here, heading east and southwest.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT"
   ],
   "synonyms": [
    "DESERT"
   ],
   "adjectives": [
    "KOVALL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "ROAD"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "HIGHWAY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "EDGE-OF-CRATER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM BEND\n      (IN ROOMS)\n      (SYNONYM DESERT)\n      (ADJECTIVE KOVALL)\n      (DESC \"Bend\")\n      (LDESC\n\"The road curves here, heading east and southwest.\")\n      (EAST TO HIGHWAY)\n      (SW TO EDGE-OF-CRATER)\n      (FLAGS INSIDEBIT RLANDBIT)\n      (GLOBAL ROAD)>",
   "referencedBy": [
    "IN-CRATER-AREA?",
    "STATUE-F",
    "V-RESEARCH"
   ]
  },
  "EDGE-OF-CRATER": {
   "name": "EDGE-OF-CRATER",
   "file": "belboz.zil",
   "line": 1419,
   "endLine": 1431,
   "desc": "Edge of Crater",
   "ldesc": "You are at the northeastern rim of a gigantic crater, the result of\nsome ancient explosion. A wide underground highway, which ends\nat the crater's edge, leads northeast.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "ROAD"
   ],
   "pseudo": [
    "CRATER",
    "CRATER-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "BEND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "CRATER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "CRATER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM EDGE-OF-CRATER\n      (IN ROOMS)\n      (DESC \"Edge of Crater\")\n      (LDESC\n\"You are at the northeastern rim of a gigantic crater, the result of\nsome ancient explosion. A wide underground highway, which ends\nat the crater's edge, leads northeast.\")\n      (NE TO BEND)\n      (SW TO CRATER)\n      (DOWN TO CRATER)\n      (FLAGS INSIDEBIT RLANDBIT)\n      (GLOBAL ROAD)\n      (PSEUDO \"CRATER\" CRATER-PSEUDO)>",
   "referencedBy": [
    "CRATER-PSEUDO",
    "IN-CRATER-AREA?"
   ]
  },
  "CRATER": {
   "name": "CRATER",
   "file": "belboz.zil",
   "line": 1433,
   "endLine": 1449,
   "desc": "Crater",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT"
   ],
   "synonyms": [
    "SEA"
   ],
   "adjectives": [
    "OCEAN"
   ],
   "action": "CRATER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "CRATER",
    "CRATER-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "EDGE-OF-CRATER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "WINDING-TUNNEL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "EDGE-OF-CHASM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SLIMY-ROOM",
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
     "per": "CRATER-EXIT-F",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "CRATER-EXIT-F",
     "message": null,
     "dir": "NW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "CRATER-EXIT-F",
     "message": null,
     "dir": "SW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "CRATER-EXIT-F",
     "message": null,
     "dir": "SE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "CRATER-OUT-F",
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM CRATER\n      (IN ROOMS)\n      (SYNONYM SEA)\n      (ADJECTIVE OCEAN)\n      (DESC \"Crater\")\n      (NE TO EDGE-OF-CRATER)\n      (SOUTH TO WINDING-TUNNEL)\n      (WEST TO EDGE-OF-CHASM)\n      (NORTH TO SLIMY-ROOM)\n      (EAST PER CRATER-EXIT-F)\n      (NW PER CRATER-EXIT-F)\n      (SW PER CRATER-EXIT-F)\n      (SE PER CRATER-EXIT-F)\n      (OUT PER CRATER-OUT-F)\n      (FLAGS INSIDEBIT RLANDBIT)\n      (PSEUDO \"CRATER\" CRATER-PSEUDO)\n      (ACTION CRATER-F)>",
   "referencedBy": [
    "CRATER-PSEUDO",
    "IN-CRATER-AREA?",
    "V-RESEARCH"
   ]
  },
  "EDGE-OF-CHASM": {
   "name": "EDGE-OF-CHASM",
   "file": "belboz.zil",
   "line": 1498,
   "endLine": 1508,
   "desc": "Edge of Chasm",
   "ldesc": "This is a strip of land to the east of a gaping chasm. You might try\njumping across, but I'd advise against it. A wide crater lies to the east.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT"
   ],
   "synonyms": [
    "VILLAG",
    "ACCARD"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "CHASM",
    "CHASM-PSEUDO",
    "CRATER",
    "CRATER-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "CRATER",
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
     "per": "CHASM-EXIT-F",
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM EDGE-OF-CHASM\n      (IN ROOMS)\n      (SYNONYM VILLAG ACCARD)\n      (DESC \"Edge of Chasm\")\n      (LDESC\n\"This is a strip of land to the east of a gaping chasm. You might try\njumping across, but I'd advise against it. A wide crater lies to the east.\")\n      (EAST TO CRATER)\n      (WEST PER CHASM-EXIT-F)\n      (FLAGS INSIDEBIT RLANDBIT)\n      (PSEUDO \"CHASM\" CHASM-PSEUDO \"CRATER\" CRATER-PSEUDO)>",
   "referencedBy": [
    "CRATER-PSEUDO",
    "CHASM-EXIT-F",
    "CHASM-PSEUDO",
    "IN-CRATER-AREA?",
    "V-LEAP",
    "V-RESEARCH"
   ]
  },
  "BARE-PASSAGE": {
   "name": "BARE-PASSAGE",
   "file": "belboz.zil",
   "line": 1522,
   "endLine": 1532,
   "desc": "Bare Passage",
   "ldesc": "This is a featureless tunnel, narrowing to the west. To the east is\na deep gorge, probably too wide to jump across.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT"
   ],
   "synonyms": [
    "AMATHR"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "CHASM",
    "CHASM-PSEUDO",
    "GORGE",
    "CHASM-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "ELBOW-ROOM",
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
     "per": "CHASM-EXIT-F",
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM BARE-PASSAGE\n      (IN ROOMS)\n      (SYNONYM AMATHR)\n      (DESC \"Bare Passage\")\n      (LDESC\n\"This is a featureless tunnel, narrowing to the west. To the east is\na deep gorge, probably too wide to jump across.\")\n      (WEST TO ELBOW-ROOM)\n      (EAST PER CHASM-EXIT-F)\n      (FLAGS INSIDEBIT RLANDBIT)\n      (PSEUDO \"CHASM\" CHASM-PSEUDO \"GORGE\" CHASM-PSEUDO)>",
   "referencedBy": [
    "CHASM-EXIT-F",
    "CHASM-PSEUDO",
    "IN-CRATER-AREA?",
    "V-LEAP",
    "V-RESEARCH",
    "V-WHO"
   ]
  },
  "ELBOW-ROOM": {
   "name": "ELBOW-ROOM",
   "file": "belboz.zil",
   "line": 1544,
   "endLine": 1552,
   "desc": "Elbow Room",
   "ldesc": "The tunnel turns a corner here. You could go either north or east.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT"
   ],
   "synonyms": [
    "NYMPH",
    "NYMPHS"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "TREE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BARE-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM ELBOW-ROOM\n      (IN ROOMS)\n      (SYNONYM NYMPH NYMPHS)\n      (DESC \"Elbow Room\")\n      (LDESC\n\"The tunnel turns a corner here. You could go either north or east.\")\n      (NORTH TO TREE-ROOM)\n      (EAST TO BARE-PASSAGE)\n      (FLAGS INSIDEBIT RLANDBIT)>",
   "referencedBy": [
    "IN-CRATER-AREA?",
    "V-RESEARCH"
   ]
  },
  "TREE-ROOM": {
   "name": "TREE-ROOM",
   "file": "belboz.zil",
   "line": 1554,
   "endLine": 1563,
   "desc": "Tree Room",
   "ldesc": "This is a tall room flooded with light from an unseen source. The only exit\nis south.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "GURTH",
    "MITHIC"
   ],
   "adjectives": [],
   "action": "TREE-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "ELBOW-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "ZORKMID-TREE",
    "ZORKMID"
   ],
   "source": "<ROOM TREE-ROOM\n      (IN ROOMS)\n      (SYNONYM GURTH MITHIC)\n      (DESC \"Tree Room\")\n      (LDESC\n\"This is a tall room flooded with light from an unseen source. The only exit\nis south.\")\n      (SOUTH TO ELBOW-ROOM)\n      (FLAGS INSIDEBIT RLANDBIT ONBIT)\n      (ACTION TREE-ROOM-F)>",
   "referencedBy": [
    "IN-CRATER-AREA?",
    "V-RESEARCH"
   ]
  },
  "WINDING-TUNNEL": {
   "name": "WINDING-TUNNEL",
   "file": "belboz.zil",
   "line": 1634,
   "endLine": 1645,
   "desc": "Winding Tunnel",
   "ldesc": "This is a meandering north-south tunnel. A side passage leads\nto the southwest.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT"
   ],
   "synonyms": [
    "INFOCO",
    "FIBBSB",
    "MAGICL",
    "SOFTSP"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "CRATER",
    "CRATER-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "CRATER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "HALL-OF-CARVINGS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "PARK-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM WINDING-TUNNEL\n      (IN ROOMS)\n      (SYNONYM INFOCO FIBBSB MAGICL SOFTSP)\n      (DESC \"Winding Tunnel\")\n      (LDESC\n\"This is a meandering north-south tunnel. A side passage leads\nto the southwest.\")\n      (NORTH TO CRATER)\n      (SOUTH TO HALL-OF-CARVINGS)\n      (SW TO PARK-ENTRANCE)\n      (FLAGS RLANDBIT INSIDEBIT)\n      (PSEUDO \"CRATER\" CRATER-PSEUDO)>",
   "referencedBy": [
    "IN-CRATER-AREA?",
    "V-RESEARCH"
   ]
  },
  "HALL-OF-CARVINGS": {
   "name": "HALL-OF-CARVINGS",
   "file": "belboz.zil",
   "line": 1649,
   "endLine": 1655,
   "desc": "Hall of Carvings",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "HALL-OF-CARVINGS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "WINDING-TUNNEL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SOOTY-ROOM",
     "kind": "conditional",
     "condition": "DRAGON-MOVED",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "DRAGON"
   ],
   "source": "<ROOM HALL-OF-CARVINGS\n      (IN ROOMS)\n      (DESC \"Hall of Carvings\")\n      (NORTH TO WINDING-TUNNEL)\n      (SOUTH TO SOOTY-ROOM IF DRAGON-MOVED)\n      (FLAGS RLANDBIT INSIDEBIT)\n      (ACTION HALL-OF-CARVINGS-F)>",
   "referencedBy": [
    "WALLS-F",
    "IN-CRATER-AREA?"
   ]
  },
  "SOOTY-ROOM": {
   "name": "SOOTY-ROOM",
   "file": "coal.zil",
   "line": 16,
   "endLine": 30,
   "desc": "Sooty Room",
   "ldesc": "The walls and ceiling of this room are covered with soot and held up by\ntimbers which don't look very sturdy. A winding tunnel leads north. From\nthe east comes a sulfurous odor.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT"
   ],
   "synonyms": [
    "RIVER"
   ],
   "adjectives": [
    "FRIGID"
   ],
   "action": "SOOTY-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "SOOT"
   ],
   "pseudo": [
    "TIMBER",
    "TIMBER-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "HALL-OF-CARVINGS",
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
     "per": "SOOTY-ROOM-EXIT-F",
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM SOOTY-ROOM\n      (IN ROOMS)\n      (SYNONYM RIVER)\n      (ADJECTIVE FRIGID)\n      (DESC \"Sooty Room\")\n      (LDESC\n\"The walls and ceiling of this room are covered with soot and held up by\ntimbers which don't look very sturdy. A winding tunnel leads north. From\nthe east comes a sulfurous odor.\")\n      (NORTH TO HALL-OF-CARVINGS)\n      (EAST PER SOOTY-ROOM-EXIT-F)\n      (FLAGS RLANDBIT INSIDEBIT)\n      (GLOBAL SOOT)\n      (PSEUDO \"TIMBER\" TIMBER-PSEUDO)\n      (ACTION SOOTY-ROOM-F)>",
   "referencedBy": [
    "SOOTY-ROOM-F",
    "IN-CRATER-AREA?",
    "V-RESEARCH"
   ]
  },
  "COAL-BIN-ROOM": {
   "name": "COAL-BIN-ROOM",
   "file": "coal.zil",
   "line": 49,
   "endLine": 68,
   "desc": "Coal Bin Room",
   "ldesc": "This is obviously the heart of a large coal mine, illuminated by a\nwall-mounted lamp. The bottom of a metal coal chute is visible at the\nnorth end of the room. Another chute continues downward at the southern\nend. A large coal bin is overflowing, and the floor is completely covered\nwith lumps of coal. A passage leads east, but a western passage is blocked\nby rubble.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "COAL-BIN-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "UPPER-CHUTE",
    "LOWER-CHUTE",
    "COAL"
   ],
   "pseudo": [
    "LAMP",
    "LAMP-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "CHUTE-ENTER-F",
     "message": null,
     "dir": "UP"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "CHUTE-ENTER-F",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "COVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "COVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "DIAL-ROOM",
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
     "per": "SOOTY-ROOM-EXIT-F",
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "COAL-BIN"
   ],
   "source": "<ROOM COAL-BIN-ROOM\n      (IN ROOMS)\n      (DESC \"Coal Bin Room\")\n      (LDESC\n\"This is obviously the heart of a large coal mine, illuminated by a\nwall-mounted lamp. The bottom of a metal coal chute is visible at the\nnorth end of the room. Another chute continues downward at the southern\nend. A large coal bin is overflowing, and the floor is completely covered\nwith lumps of coal. A passage leads east, but a western passage is blocked\nby rubble.\")\n      (UP PER CHUTE-ENTER-F)\n      (NORTH PER CHUTE-ENTER-F)\n      (DOWN TO COVE)\n      (SOUTH TO COVE)\n      (EAST TO DIAL-ROOM)\n      (WEST PER SOOTY-ROOM-EXIT-F)\n      (FLAGS RLANDBIT INSIDEBIT ONBIT)\n      (GLOBAL UPPER-CHUTE LOWER-CHUTE COAL)\n      (PSEUDO \"LAMP\" LAMP-PSEUDO)\n      (ACTION COAL-BIN-ROOM-F)>",
   "referencedBy": [
    "SOOTY-ROOM-EXIT-F",
    "UPPER-CHUTE-F",
    "LOWER-CHUTE-F",
    "I-OLDER-SELF",
    "CHUTE-EXIT-F",
    "SLANTED-ROOM-EXIT-F",
    "IN-COAL-MINE?",
    "VILSTU-POTION-F",
    "V-DROP",
    "V-LEAP",
    "V-THROW",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "DIAL-ROOM": {
   "name": "DIAL-ROOM",
   "file": "coal.zil",
   "line": 649,
   "endLine": 662,
   "desc": "Dial Room",
   "ldesc": "On the eastern wall is a heavy door with a dial set into it. There is a\nsign on the door. Another exit leads west, and a wall-mounted lamp provides\nillumination. The floor is deeply covered with lumps of coal.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT",
    "ONBIT"
   ],
   "synonyms": [
    "FALLS"
   ],
   "adjectives": [
    "ARAGAI"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DIAL-DOOR",
    "COAL"
   ],
   "pseudo": [
    "LAMP",
    "LAMP-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "SHAFT-BOTTOM",
     "kind": "conditional",
     "condition": "DIAL-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "COAL-BIN-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "DIAL"
   ],
   "source": "<ROOM DIAL-ROOM\n      (IN ROOMS)\n      (SYNONYM FALLS)\n      (ADJECTIVE ARAGAI)\n      (DESC \"Dial Room\")\n      (LDESC\n\"On the eastern wall is a heavy door with a dial set into it. There is a\nsign on the door. Another exit leads west, and a wall-mounted lamp provides\nillumination. The floor is deeply covered with lumps of coal.\")\n      (EAST TO SHAFT-BOTTOM IF DIAL-DOOR IS OPEN)\n      (WEST TO COAL-BIN-ROOM)\n      (FLAGS RLANDBIT INSIDEBIT ONBIT)\n      (GLOBAL DIAL-DOOR COAL)\n      (PSEUDO \"LAMP\" LAMP-PSEUDO)>",
   "referencedBy": [
    "I-OLDER-SELF",
    "IN-COAL-MINE?",
    "VILSTU-POTION-F",
    "V-DROP",
    "V-RESEARCH",
    "V-THROW",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "SHAFT-BOTTOM": {
   "name": "SHAFT-BOTTOM",
   "file": "coal.zil",
   "line": 793,
   "endLine": 806,
   "desc": "Shaft Bottom",
   "ldesc": "You are at the bottom of an air shaft which looks climbable. A heavy\ndoor leads west.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT"
   ],
   "synonyms": [
    "CASTLE",
    "LARGON"
   ],
   "adjectives": [
    "CASTLE",
    "LARGON"
   ],
   "action": "SHAFT-BOTTOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DIAL-DOOR"
   ],
   "pseudo": [
    "SHAFT",
    "SHAFT-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "SHAFT-TOP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "DIAL-ROOM",
     "kind": "conditional",
     "condition": "DIAL-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "ROPE"
   ],
   "source": "<ROOM SHAFT-BOTTOM\n      (IN ROOMS)\n      (SYNONYM CASTLE LARGON)\n      (ADJECTIVE CASTLE LARGON)\n      (DESC \"Shaft Bottom\")\n      (LDESC\n\"You are at the bottom of an air shaft which looks climbable. A heavy\ndoor leads west.\")\n      (UP TO SHAFT-TOP)\n      (WEST TO DIAL-ROOM IF DIAL-DOOR IS OPEN)\n      (FLAGS INSIDEBIT RLANDBIT)\n      (GLOBAL DIAL-DOOR)\n      (PSEUDO \"SHAFT\" SHAFT-PSEUDO)\n      (ACTION SHAFT-BOTTOM-F)>",
   "referencedBy": [
    "SHAFT-PSEUDO",
    "ME-F",
    "IN-COAL-MINE?",
    "V-RESEARCH"
   ]
  },
  "SHAFT-TOP": {
   "name": "SHAFT-TOP",
   "file": "coal.zil",
   "line": 814,
   "endLine": 828,
   "desc": "Shaft Top",
   "ldesc": "You are deep inside a large coal mine, at the top of an air shaft. You\ncould descend into the shaft; passages in many directions lead further\ninto the mine.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT"
   ],
   "synonyms": [
    "TROLL",
    "TROLLS",
    "THOLL"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "SHAFT",
    "SHAFT-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "SHAFT-BOTTOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
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
     "to": "COAL-MINE-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "SHAFT-TOP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM SHAFT-TOP\n      (IN ROOMS)\n      (SYNONYM TROLL TROLLS THOLL)\n      (DESC \"Shaft Top\")\n      (LDESC\n\"You are deep inside a large coal mine, at the top of an air shaft. You\ncould descend into the shaft; passages in many directions lead further\ninto the mine.\")\n      (DOWN TO SHAFT-BOTTOM)\n      (NE TO COAL-MINE-2)\n      (NW TO COAL-MINE-1)\n      (SW TO COAL-MINE-1)\n      (EAST TO SHAFT-TOP)\n      (FLAGS RLANDBIT INSIDEBIT)\n      (PSEUDO \"SHAFT\" SHAFT-PSEUDO)>",
   "referencedBy": [
    "SHAFT-PSEUDO",
    "IN-COAL-MINE?",
    "V-RESEARCH"
   ]
  },
  "COAL-MINE-1": {
   "name": "COAL-MINE-1",
   "file": "coal.zil",
   "line": 882,
   "endLine": 894,
   "desc": "Coal Mine",
   "ldesc": "You are in a winding tunnel in a large coal mine. Passages lead off in\nmany directions.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT"
   ],
   "synonyms": [
    "ENTHAR"
   ],
   "adjectives": [
    "KING"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "SHAFT-TOP",
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
     "dir": "NE"
    },
    {
     "to": "COAL-MINE-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "SHAFT-TOP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "BEAM"
   ],
   "source": "<ROOM COAL-MINE-1\n      (IN ROOMS)\n      (SYNONYM ENTHAR)\n      (ADJECTIVE KING)\n      (DESC \"Coal Mine\")\n      (LDESC\n\"You are in a winding tunnel in a large coal mine. Passages lead off in\nmany directions.\")\n      (SOUTH TO SHAFT-TOP)\n      (NE TO COAL-MINE-2)\n      (NW TO COAL-MINE-3)\n      (EAST TO SHAFT-TOP)\n      (FLAGS RLANDBIT INSIDEBIT)>",
   "referencedBy": [
    "ME-F",
    "IN-COAL-MINE?",
    "V-RESEARCH",
    "V-WHO",
    "V-AIMFIZ"
   ]
  },
  "COAL-MINE-2": {
   "name": "COAL-MINE-2",
   "file": "coal.zil",
   "line": 896,
   "endLine": 909,
   "desc": "Coal Mine",
   "ldesc": "You are in a winding tunnel in a large coal mine. Passages lead off in\nmany directions.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT"
   ],
   "synonyms": [
    "DUNCAN"
   ],
   "adjectives": [
    "KING"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
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
     "to": "COAL-MINE-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "COAL-MINE-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "COAL-MINE-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SHAFT-TOP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM COAL-MINE-2\n      (IN ROOMS)\n      (SYNONYM DUNCAN)\n      (ADJECTIVE KING)\n      (DESC \"Coal Mine\")\n      (LDESC\n\"You are in a winding tunnel in a large coal mine. Passages lead off in\nmany directions.\")\n      (UP TO COAL-MINE-3)\n      (SE TO COAL-MINE-2)\n      (WEST TO COAL-MINE-1)\n      (NORTH TO COAL-MINE-3)\n      (SOUTH TO SHAFT-TOP)\n      (FLAGS INSIDEBIT RLANDBIT)>",
   "referencedBy": [
    "IN-COAL-MINE?",
    "V-RESEARCH",
    "V-WHO",
    "V-AIMFIZ"
   ]
  },
  "COAL-MINE-3": {
   "name": "COAL-MINE-3",
   "file": "coal.zil",
   "line": 911,
   "endLine": 924,
   "desc": "Coal Mine",
   "ldesc": "You are in a winding tunnel in a large coal mine. Passages lead off in\nmany directions.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT"
   ],
   "synonyms": [
    "FLATHE"
   ],
   "adjectives": [
    "LORD",
    "DIMWIT"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "COAL-MINE-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "COAL-MINE-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "COAL-MINE-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
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
     "to": "TOP-OF-CHUTE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM COAL-MINE-3\n      (IN ROOMS)\n      (SYNONYM FLATHE)\n      (ADJECTIVE LORD DIMWIT)\n      (DESC \"Coal Mine\")\n      (LDESC\n\"You are in a winding tunnel in a large coal mine. Passages lead off in\nmany directions.\")\n      (SW TO COAL-MINE-1)\n      (DOWN TO COAL-MINE-2)\n      (NORTH TO COAL-MINE-3)\n      (EAST TO COAL-MINE-2)\n      (WEST TO TOP-OF-CHUTE)\n      (FLAGS INSIDEBIT RLANDBIT)>",
   "referencedBy": [
    "IN-COAL-MINE?",
    "V-RESEARCH",
    "V-WHO",
    "V-AIMFIZ"
   ]
  },
  "TOP-OF-CHUTE": {
   "name": "TOP-OF-CHUTE",
   "file": "coal.zil",
   "line": 926,
   "endLine": 935,
   "desc": "Top of Chute",
   "ldesc": "You are at the western end of the coal mine. A metal chute leads downward.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "TOP-OF-CHUTE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "UPPER-CHUTE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "CHUTE-EXIT-F",
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "COAL-MINE-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM TOP-OF-CHUTE\n      (IN ROOMS)\n      (DESC \"Top of Chute\")\n      (LDESC\n\"You are at the western end of the coal mine. A metal chute leads downward.\")\n      (DOWN PER CHUTE-EXIT-F)\n      (EAST TO COAL-MINE-3)\n      (FLAGS INSIDEBIT RLANDBIT)\n      (GLOBAL UPPER-CHUTE)\n      (ACTION TOP-OF-CHUTE-F)>",
   "referencedBy": [
    "UPPER-CHUTE-F",
    "I-TROGLODYTE",
    "IN-COAL-MINE?",
    "V-LEAP"
   ]
  },
  "SLANTED-ROOM": {
   "name": "SLANTED-ROOM",
   "file": "coal.zil",
   "line": 1022,
   "endLine": 1034,
   "desc": "Slanted Room",
   "ldesc": "This small room has a slanted roof, presumably due to the coal chute\nwhich passes overhead. You can reenter the chute to the east.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT"
   ],
   "synonyms": [
    "FROBOZ",
    "WIZARD"
   ],
   "adjectives": [],
   "action": "SLANTED-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "UPPER-CHUTE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "SLANTED-ROOM-EXIT-F",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "SLANTED-ROOM-EXIT-F",
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "CHUTE-ENTER-F",
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [
    "KEROSENE-LAMP",
    "GOLMAC-SCROLL"
   ],
   "source": "<ROOM SLANTED-ROOM\n      (IN ROOMS)\n      (SYNONYM FROBOZ WIZARD)\n      (DESC \"Slanted Room\")\n      (LDESC\n\"This small room has a slanted roof, presumably due to the coal chute\nwhich passes overhead. You can reenter the chute to the east.\")\n      (EAST PER SLANTED-ROOM-EXIT-F)\n      (DOWN PER SLANTED-ROOM-EXIT-F)\n      (UP PER CHUTE-ENTER-F)\n      (FLAGS RLANDBIT INSIDEBIT)\n      (GLOBAL UPPER-CHUTE)\n      (ACTION SLANTED-ROOM-F)>",
   "referencedBy": [
    "UPPER-CHUTE-F",
    "CHUTE-EXIT-F",
    "CEILING-F",
    "ME-F",
    "IN-COAL-MINE?",
    "V-RESEARCH",
    "V-WHO",
    "V-AIMFIZ"
   ]
  },
  "COVE": {
   "name": "COVE",
   "file": "end.zil",
   "line": 5,
   "endLine": 25,
   "desc": "Lagoon Shore",
   "ldesc": "This is a narrow beach between a small cove to the east and tall\ncliffs to the west. The shore curves to the southeast and northeast.\nA metal chute leads up into the cliff.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "COVE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LOWER-CHUTE",
    "LAGOON-OBJECT",
    "WATER",
    "BEACH"
   ],
   "pseudo": [
    "CLIFF",
    "CLIFF-PSEUDO",
    "CLIFFS",
    "CLIFF-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "There's a tall cliff there.",
     "dir": "NORTH"
    },
    {
     "to": "OCEAN-NORTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "LAGOON",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "OCEAN-SOUTH",
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
     "message": "There's a tall cliff there.",
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "There's a tall cliff there.",
     "dir": "SW"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "There's a tall cliff there.",
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "There's a tall cliff there.",
     "dir": "NW"
    },
    {
     "to": "LAGOON",
     "kind": "unconditional",
     "condition": null,
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
     "per": "CHUTE-ENTER-F",
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM COVE\n      (IN ROOMS)\n      (DESC \"Lagoon Shore\")\n      (LDESC\n\"This is a narrow beach between a small cove to the east and tall\ncliffs to the west. The shore curves to the southeast and northeast.\nA metal chute leads up into the cliff.\")\n      (NORTH \"There's a tall cliff there.\")\n      (NE TO OCEAN-NORTH)\n      (EAST TO LAGOON)\n      (SE TO OCEAN-SOUTH)\n      (SOUTH \"There's a tall cliff there.\")\n      (SW \"There's a tall cliff there.\")\n      (WEST \"There's a tall cliff there.\")\n      (NW \"There's a tall cliff there.\")\n      (IN TO LAGOON)\n      (UP PER CHUTE-ENTER-F)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL LOWER-CHUTE LAGOON-OBJECT WATER BEACH)\n      (PSEUDO \"CLIFF\" CLIFF-PSEUDO \"CLIFFS\" CLIFF-PSEUDO)\n      (ACTION COVE-F)> ",
   "referencedBy": [
    "LOWER-CHUTE-F",
    "COVE-F",
    "WATER-F",
    "WATER-IS-PRSI",
    "IN-END-GAME?",
    "V-SWIM"
   ]
  },
  "OCEAN-NORTH": {
   "name": "OCEAN-NORTH",
   "file": "end.zil",
   "line": 67,
   "endLine": 84,
   "desc": "Ocean Shore North",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "DAM",
    "FCD"
   ],
   "adjectives": [
    "FLOOD",
    "CONTRO"
   ],
   "action": "OCEAN-SHORE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LAGOON-OBJECT",
    "OCEAN",
    "BEACH",
    "WATER"
   ],
   "pseudo": [
    "CLIFF",
    "CLIFF-PSEUDO",
    "CLIFFS",
    "CLIFF-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "MOUTH-OF-RIVER",
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
     "message": "Entering the ocean is certain death.",
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Entering the ocean is certain death.",
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Entering the ocean is certain death.",
     "dir": "SE"
    },
    {
     "to": "LAGOON",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "COVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "There's a tall cliff there.",
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "There's a tall cliff there.",
     "dir": "NW"
    },
    {
     "to": "LAGOON",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [],
   "source": "<ROOM OCEAN-NORTH\n      (IN ROOMS)\n      (SYNONYM DAM FCD)\n      (ADJECTIVE FLOOD CONTRO)\n      (DESC \"Ocean Shore North\")\n      (NORTH TO MOUTH-OF-RIVER)\n      (NE \"Entering the ocean is certain death.\")\n      (EAST \"Entering the ocean is certain death.\")\n      (SE \"Entering the ocean is certain death.\")\n      (SOUTH TO LAGOON)\n      (SW TO COVE)\n      (WEST \"There's a tall cliff there.\")\n      (NW \"There's a tall cliff there.\")\n      (IN TO LAGOON)\n      (FLAGS RLANDBIT ONBIT)\n      (PSEUDO \"CLIFF\" CLIFF-PSEUDO \"CLIFFS\" CLIFF-PSEUDO)\n      (GLOBAL LAGOON-OBJECT OCEAN BEACH WATER)\n      (ACTION OCEAN-SHORE-F)>",
   "referencedBy": [
    "OCEAN-SHORE-F",
    "WATER-F",
    "WATER-IS-PRSI",
    "IN-END-GAME?",
    "V-RESEARCH",
    "V-SWIM"
   ]
  },
  "OCEAN-SOUTH": {
   "name": "OCEAN-SOUTH",
   "file": "end.zil",
   "line": 86,
   "endLine": 103,
   "desc": "Ocean Shore South",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "MUSEUM"
   ],
   "adjectives": [
    "ROYAL"
   ],
   "action": "OCEAN-SHORE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LAGOON-OBJECT",
    "OCEAN",
    "WATER",
    "BEACH"
   ],
   "pseudo": [
    "CLIFF",
    "CLIFF-PSEUDO",
    "CLIFFS",
    "CLIFF-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "LAGOON",
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
     "message": "Entering the ocean is certain death.",
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Entering the ocean is certain death.",
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Entering the ocean is certain death.",
     "dir": "SE"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "There's a tall cliff there.",
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "There's a tall cliff there.",
     "dir": "SW"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "There's a tall cliff there.",
     "dir": "WEST"
    },
    {
     "to": "COVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "LAGOON",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [],
   "source": "<ROOM OCEAN-SOUTH\n      (IN ROOMS)\n      (SYNONYM MUSEUM)\n      (ADJECTIVE ROYAL)\n      (DESC \"Ocean Shore South\")\n      (NORTH TO LAGOON)\n      (NE \"Entering the ocean is certain death.\")\n      (EAST \"Entering the ocean is certain death.\")\n      (SE \"Entering the ocean is certain death.\")\n      (SOUTH \"There's a tall cliff there.\")\n      (SW \"There's a tall cliff there.\")\n      (WEST \"There's a tall cliff there.\")\n      (NW TO COVE)\n      (IN TO LAGOON)\n      (FLAGS RLANDBIT ONBIT)\n      (PSEUDO \"CLIFF\" CLIFF-PSEUDO \"CLIFFS\" CLIFF-PSEUDO)\n      (GLOBAL LAGOON-OBJECT OCEAN WATER BEACH)\n      (ACTION OCEAN-SHORE-F)>",
   "referencedBy": [
    "WATER-F",
    "WATER-IS-PRSI",
    "IN-END-GAME?",
    "V-RESEARCH",
    "V-SWIM"
   ]
  },
  "LAGOON": {
   "name": "LAGOON",
   "file": "end.zil",
   "line": 203,
   "endLine": 219,
   "desc": "Surface of Lagoon",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "LAGOON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LAGOON-OBJECT",
    "OCEAN",
    "WATER"
   ],
   "pseudo": [
    "SAND",
    "SAND-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "OCEAN-NORTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "COVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "COVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "COVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "COVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "OCEAN-SOUTH",
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
     "message": "Entering the ocean is certain death.",
     "dir": "SE"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Entering the ocean is certain death.",
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Entering the ocean is certain death.",
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "LAGOON-FLOOR-ENTER-F",
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM LAGOON\n      (IN ROOMS)\n      (DESC \"Surface of Lagoon\")\n      (NORTH TO OCEAN-NORTH)\n      (OUT TO COVE)\n      (NW TO COVE)\n      (WEST TO COVE)\n      (SW TO COVE)\n      (SOUTH TO OCEAN-SOUTH)\n      (SE \"Entering the ocean is certain death.\")\n      (EAST \"Entering the ocean is certain death.\")\n      (NE \"Entering the ocean is certain death.\")\n      (DOWN PER LAGOON-FLOOR-ENTER-F)\n      (FLAGS ONBIT)\n      (GLOBAL LAGOON-OBJECT OCEAN WATER)\n      (PSEUDO \"SAND\" SAND-PSEUDO)\n      (ACTION LAGOON-F)>",
   "referencedBy": [
    "I-UNFWEEP",
    "WAXER-F",
    "LAGOON-OBJECT-F",
    "GROUND-F",
    "WATER-F",
    "WATER-IS-PRSI",
    "I-FLY",
    "IN-END-GAME?",
    "V-LEAP",
    "V-OPEN",
    "V-SLEEP",
    "V-SWIM",
    "V-FWEEP",
    "IDROP"
   ]
  },
  "LAGOON-FLOOR": {
   "name": "LAGOON-FLOOR",
   "file": "end.zil",
   "line": 259,
   "endLine": 278,
   "desc": "Lagoon Floor",
   "ldesc": "This is the floor of a cove off the turbulent ocean to the east.\nThe ground slopes upward to the north, west, and south. Light filters\ndown from the surface of the water.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "LAGOON-FLOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LAGOON-OBJECT",
    "OCEAN",
    "WATER"
   ],
   "pseudo": [
    "CORAL",
    "CORAL-PSEUDO",
    "SAND",
    "SAND-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "OCEAN-NORTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "COVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "COVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "COVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "OCEAN-SOUTH",
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
     "message": "Entering the ocean is certain death.",
     "dir": "SE"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Entering the ocean is certain death.",
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Entering the ocean is certain death.",
     "dir": "NE"
    },
    {
     "to": "LAGOON",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [
    "SPENSEWEEDS"
   ],
   "source": "<ROOM LAGOON-FLOOR\n      (IN ROOMS)\n      (DESC \"Lagoon Floor\")\n      (LDESC\n\"This is the floor of a cove off the turbulent ocean to the east.\nThe ground slopes upward to the north, west, and south. Light filters\ndown from the surface of the water.\")\n      (NORTH TO OCEAN-NORTH)\n      (NW TO COVE)\n      (WEST TO COVE)\n      (SW TO COVE)\n      (SOUTH TO OCEAN-SOUTH)\n      (SE \"Entering the ocean is certain death.\")\n      (EAST \"Entering the ocean is certain death.\")\n      (NE \"Entering the ocean is certain death.\")\n      (UP TO LAGOON)\n      (FLAGS ONBIT)\n      (GLOBAL LAGOON-OBJECT OCEAN WATER)\n      (PSEUDO \"CORAL\" CORAL-PSEUDO \"SAND\" SAND-PSEUDO)\n      (ACTION LAGOON-FLOOR-F)>",
   "referencedBy": [
    "WAXER-F",
    "COAL-BIN-ROOM-F",
    "LOWER-CHUTE-F",
    "COVE-F",
    "LAGOON-OBJECT-F",
    "LAGOON-FLOOR-ENTER-F",
    "I-DROWN",
    "WATER-F",
    "WATER-IS-PRSI",
    "SKY-F",
    "IN-END-GAME?",
    "I-BREATHE",
    "V-LOOK-UNDER",
    "V-OPEN",
    "V-SLEEP",
    "V-SWIM",
    "V-FWEEP",
    "V-IZYUK",
    "IDROP"
   ]
  },
  "MOUTH-OF-RIVER": {
   "name": "MOUTH-OF-RIVER",
   "file": "end.zil",
   "line": 446,
   "endLine": 460,
   "desc": "Mouth of River",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MOUTH-OF-RIVER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WATER",
    "OCEAN",
    "RIVER",
    "FORT",
    "CAVE",
    "WATERFALL"
   ],
   "pseudo": [
    "CLIFF",
    "CLIFF-PSEUDO",
    "CLIFFS",
    "CLIFF-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The river is too wide to cross.",
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Entering the ocean is certain death.",
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Entering the ocean is certain death.",
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Entering the ocean is certain death.",
     "dir": "SE"
    },
    {
     "to": "OCEAN-NORTH",
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
     "message": "There's a tall cliff there.",
     "dir": "SW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "VINES-EXIT-F",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "There's a tall cliff there.",
     "dir": "NW"
    }
   ],
   "contents": [
    "VINES"
   ],
   "source": "<ROOM MOUTH-OF-RIVER\n      (IN ROOMS)\n      (DESC \"Mouth of River\")\n      (NORTH \"The river is too wide to cross.\")\n      (NE \"Entering the ocean is certain death.\")\n      (EAST \"Entering the ocean is certain death.\")\n      (SE \"Entering the ocean is certain death.\")\n      (SOUTH TO OCEAN-NORTH)\n      (SW \"There's a tall cliff there.\")\n      (WEST PER VINES-EXIT-F)\n      (NW \"There's a tall cliff there.\")\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL WATER OCEAN RIVER FORT CAVE WATERFALL)\n      (PSEUDO \"CLIFF\" CLIFF-PSEUDO \"CLIFFS\" CLIFF-PSEUDO)\n      (ACTION MOUTH-OF-RIVER-F)>",
   "referencedBy": [
    "WATERFALL-F",
    "WATER-F",
    "WATER-IS-PRSI",
    "CAVE-F",
    "IN-END-GAME?",
    "V-SWIM"
   ]
  },
  "GRUE-LAIR": {
   "name": "GRUE-LAIR",
   "file": "end.zil",
   "line": 516,
   "endLine": 526,
   "desc": "Grue Lair",
   "ldesc": "This is a low, shadowy cave leading east to west. The rocky walls\nare scarred with deep claw marks.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "GRUE-LAIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CAVE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "MOUTH-OF-RIVER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MAMMOTH-CAVERN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "MUTATED-GRUES"
   ],
   "source": "<ROOM GRUE-LAIR\n      (IN ROOMS)\n      (DESC \"Grue Lair\")\n      (LDESC\n\"This is a low, shadowy cave leading east to west. The rocky walls\nare scarred with deep claw marks.\")\n      (EAST TO MOUTH-OF-RIVER)\n      (WEST TO MAMMOTH-CAVERN)\n      (FLAGS RLANDBIT INSIDEBIT)\n      (GLOBAL CAVE)\n      (ACTION GRUE-LAIR-F)>",
   "referencedBy": [
    "VINES-EXIT-F",
    "GRUE-F",
    "CAVE-F",
    "IN-END-GAME?",
    "DESCRIBE-ROOM"
   ]
  },
  "MAMMOTH-CAVERN": {
   "name": "MAMMOTH-CAVERN",
   "file": "end.zil",
   "line": 583,
   "endLine": 602,
   "desc": "Mammoth Cavern",
   "ldesc": "This cavern is of extraordinary size, but nevertheless crowded with\npowerful-looking machinery. You recognize a breeder for producing\nmillions of the mutated grues you just passed. Other devices seem\ndesigned to aid the forces of evil while sapping magic powers of\nEnchanters everywhere.|\n|\nAt the far end of the cavern are three closed doors: a black marble door\nleading to the northwest, a shiny silver door heading due west, and\na door of bleached white wood to the southwest.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MAMMOTH-CAVERN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CAVE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "GRUE-LAIR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "CHAMBER-OF-LIVING-DEATH",
     "kind": "conditional",
     "condition": "BLACK-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "HALL-OF-ETERNAL-PAIN",
     "kind": "conditional",
     "condition": "SILVER-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "BELBOZ-HIDEOUT",
     "kind": "conditional",
     "condition": "WHITE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [
    "MACHINERY",
    "BLACK-DOOR",
    "SILVER-DOOR",
    "WHITE-DOOR"
   ],
   "source": "<ROOM MAMMOTH-CAVERN\n      (IN ROOMS)\n      (DESC \"Mammoth Cavern\")\n      (LDESC\n\"This cavern is of extraordinary size, but nevertheless crowded with\npowerful-looking machinery. You recognize a breeder for producing\nmillions of the mutated grues you just passed. Other devices seem\ndesigned to aid the forces of evil while sapping magic powers of\nEnchanters everywhere.|\n|\nAt the far end of the cavern are three closed doors: a black marble door\nleading to the northwest, a shiny silver door heading due west, and\na door of bleached white wood to the southwest.\")\n      (EAST TO GRUE-LAIR)\n      (NW TO CHAMBER-OF-LIVING-DEATH IF BLACK-DOOR IS OPEN)\n      (WEST TO HALL-OF-ETERNAL-PAIN IF SILVER-DOOR IS OPEN)\n      (SW TO BELBOZ-HIDEOUT IF WHITE-DOOR IS OPEN)\n      (FLAGS RLANDBIT INSIDEBIT)\n      (GLOBAL CAVE)\n      (ACTION MAMMOTH-CAVERN-F)>",
   "referencedBy": [
    "IN-END-GAME?"
   ]
  },
  "CHAMBER-OF-LIVING-DEATH": {
   "name": "CHAMBER-OF-LIVING-DEATH",
   "file": "end.zil",
   "line": 630,
   "endLine": 639,
   "desc": "Chamber of Living Death",
   "ldesc": "The very walls of this room seem to soak up all light, so it seems\nas though you're floating in the center of an infinite void.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "INSIDEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CHAMBER-OF-LIVING-DEATH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CAVE"
   ],
   "pseudo": [
    "PARASI",
    "PARASITES-PSEUDO"
   ],
   "otherProps": {},
   "exits": [],
   "contents": [],
   "source": "<ROOM CHAMBER-OF-LIVING-DEATH\n      (IN ROOMS)\n      (DESC \"Chamber of Living Death\")\n      (LDESC\n\"The very walls of this room seem to soak up all light, so it seems\nas though you're floating in the center of an infinite void.\")\n      (FLAGS RLANDBIT ONBIT INSIDEBIT)\n      (GLOBAL CAVE)\n      (PSEUDO \"PARASI\" PARASITES-PSEUDO)\n      (ACTION CHAMBER-OF-LIVING-DEATH-F)>",
   "referencedBy": [
    "BLACK-DOOR-F",
    "IN-END-GAME?",
    "MAIN-LOOP-1",
    "V-SLEEP"
   ]
  },
  "HALL-OF-ETERNAL-PAIN": {
   "name": "HALL-OF-ETERNAL-PAIN",
   "file": "end.zil",
   "line": 659,
   "endLine": 667,
   "desc": "Hall of Eternal Pain",
   "ldesc": "This room is filled with blinding light that stabs at your eyes.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "INSIDEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "HALL-OF-ETERNAL-DEATH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CAVE"
   ],
   "pseudo": [
    "FORCE",
    "FORCE-PSEUDO",
    "FORCES",
    "FORCE-PSEUDO"
   ],
   "otherProps": {},
   "exits": [],
   "contents": [],
   "source": "<ROOM HALL-OF-ETERNAL-PAIN\n      (IN ROOMS)\n      (DESC \"Hall of Eternal Pain\")\n      (LDESC\n\"This room is filled with blinding light that stabs at your eyes.\")\n      (FLAGS RLANDBIT ONBIT INSIDEBIT)\n      (GLOBAL CAVE)\n      (PSEUDO \"FORCE\" FORCE-PSEUDO \"FORCES\" FORCE-PSEUDO)\n      (ACTION HALL-OF-ETERNAL-DEATH-F)>",
   "referencedBy": [
    "SILVER-DOOR-F",
    "I-BELBOZ-AWAKES",
    "IN-END-GAME?",
    "MAIN-LOOP-1"
   ]
  },
  "BELBOZ-HIDEOUT": {
   "name": "BELBOZ-HIDEOUT",
   "file": "end.zil",
   "line": 691,
   "endLine": 700,
   "desc": "Belboz's Hideout",
   "ldesc": "An acrid stench fills this small room, which is obviously a\ncontrol center for the evil experiments in the cavern outside.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT",
    "ONBIT"
   ],
   "synonyms": [
    "JUNGLE",
    "MIZNIA"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CAVE"
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
     "message": "An invisible force stops you.",
     "dir": "EAST"
    }
   ],
   "contents": [
    "KNIFE",
    "BELBOZ",
    "JEEARR"
   ],
   "source": "<ROOM BELBOZ-HIDEOUT\n      (IN ROOMS)\n      (SYNONYM JUNGLE MIZNIA)\n      (DESC \"Belboz's Hideout\")\n      (LDESC\n\"An acrid stench fills this small room, which is obviously a\ncontrol center for the evil experiments in the cavern outside.\")\n      (EAST \"An invisible force stops you.\")\n      (FLAGS RLANDBIT INSIDEBIT ONBIT)\n      (GLOBAL CAVE)>",
   "referencedBy": [
    "WHITE-DOOR-F",
    "I-BELBOZ-AWAKES",
    "CAVE-F",
    "IN-END-GAME?",
    "V-RESEARCH",
    "V-SLEEP"
   ]
  },
  "FORT-ENTRANCE": {
   "name": "FORT-ENTRANCE",
   "file": "fort.zil",
   "line": 34,
   "endLine": 43,
   "desc": "Fort Entrance",
   "ldesc": "You are at the entrance to Fort Griffspotter, which lies to the east.\nA trail leads along the river bank to the northwest.",
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
    "FORT",
    "ROAD",
    "BANKS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "PARADE-GROUND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "RIVER-BANK",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM FORT-ENTRANCE\n      (IN ROOMS)\n      (DESC \"Fort Entrance\")\n      (LDESC\n\"You are at the entrance to Fort Griffspotter, which lies to the east.\nA trail leads along the river bank to the northwest.\")\n      (EAST TO PARADE-GROUND)\n      (NW TO RIVER-BANK)\n      (FLAGS ONBIT RLANDBIT)\n      (GLOBAL FORT ROAD BANKS)>",
   "referencedBy": [
    "FORT-F",
    "JIGS-UP"
   ]
  },
  "PARADE-GROUND": {
   "name": "PARADE-GROUND",
   "file": "fort.zil",
   "line": 45,
   "endLine": 59,
   "desc": "Parade Ground",
   "ldesc": "You are at the center of a level field inside the fort. Entrances to\nrooms around the perimeter lie in several directions.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "PARADE-GROUND-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "FORT"
   ],
   "pseudo": [
    "ROPE",
    "ROPE-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "FORT-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "ARMORY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "GUN-EMPLACEMENT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BARRACKS",
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
     "message": "If you want to climb the flagpole, just say so.",
     "dir": "UP"
    }
   ],
   "contents": [
    "FLAG-POLE",
    "FLAG"
   ],
   "source": "<ROOM PARADE-GROUND\n      (IN ROOMS)\n      (DESC \"Parade Ground\")\n      (LDESC\n\"You are at the center of a level field inside the fort. Entrances to\nrooms around the perimeter lie in several directions.\")\n      (WEST TO FORT-ENTRANCE)\n      (SOUTH TO ARMORY)\n      (EAST TO GUN-EMPLACEMENT)\n      (NORTH TO BARRACKS)\n      (UP \"If you want to climb the flagpole, just say so.\")\n      (FLAGS RLANDBIT ONBIT)\n      (PSEUDO \"ROPE\" ROPE-PSEUDO)\n      (GLOBAL FORT)\n      (ACTION PARADE-GROUND-F)>",
   "referencedBy": [
    "FORT-F",
    "FLAG-F"
   ]
  },
  "ARMORY": {
   "name": "ARMORY",
   "file": "fort.zil",
   "line": 228,
   "endLine": 237,
   "desc": "Armory",
   "ldesc": "Once the armory for the fort, this room has been picked clean by\nvandals and soldiers of fortune. Exit north or northeast.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "FORT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "PARADE-GROUND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "GUN-EMPLACEMENT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    }
   ],
   "contents": [],
   "source": "<ROOM ARMORY\n      (IN ROOMS)\n      (DESC \"Armory\")\n      (LDESC\n\"Once the armory for the fort, this room has been picked clean by\nvandals and soldiers of fortune. Exit north or northeast.\")\n      (NORTH TO PARADE-GROUND)\n      (NE TO GUN-EMPLACEMENT)\n      (FLAGS RLANDBIT INSIDEBIT)\n      (GLOBAL FORT)>",
   "referencedBy": [
    "FORT-F"
   ]
  },
  "BARRACKS": {
   "name": "BARRACKS",
   "file": "fort.zil",
   "line": 239,
   "endLine": 249,
   "desc": "Barracks",
   "ldesc": "This was a barracks for the battalion stationed in this fort. You\ncould leave to the south, or to the southeast.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "FORT"
   ],
   "pseudo": [
    "BARRAC",
    "BARRACKS-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "PARADE-GROUND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "GUN-EMPLACEMENT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [],
   "source": "<ROOM BARRACKS\n      (IN ROOMS)\n      (DESC \"Barracks\")\n      (LDESC\n\"This was a barracks for the battalion stationed in this fort. You\ncould leave to the south, or to the southeast.\")\n      (SOUTH TO PARADE-GROUND)\n      (SE TO GUN-EMPLACEMENT)\n      (FLAGS RLANDBIT INSIDEBIT)\n      (PSEUDO \"BARRAC\" BARRACKS-PSEUDO)\n      (GLOBAL FORT)>",
   "referencedBy": [
    "FORT-F"
   ]
  },
  "GUN-EMPLACEMENT": {
   "name": "GUN-EMPLACEMENT",
   "file": "fort.zil",
   "line": 256,
   "endLine": 269,
   "desc": "Gun Emplacement",
   "ldesc": "This is a battlement with a view of a river to the north and an ocean to\nthe east. Openings northwest, west, and southwest lead to other parts of\nthe fort.",
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
    "RIVER",
    "OCEAN",
    "FORT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "PARADE-GROUND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "BARRACKS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "ARMORY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "EMPLACEMENT-EXIT-F",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "EMPLACEMENT-EXIT-F",
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "CANNON"
   ],
   "source": "<ROOM GUN-EMPLACEMENT\n      (IN ROOMS)\n      (DESC \"Gun Emplacement\")\n      (LDESC\n\"This is a battlement with a view of a river to the north and an ocean to\nthe east. Openings northwest, west, and southwest lead to other parts of\nthe fort.\")\n      (WEST TO PARADE-GROUND)\n      (NW TO BARRACKS)\n      (SW TO ARMORY)\n      (NORTH PER EMPLACEMENT-EXIT-F)\n      (EAST PER EMPLACEMENT-EXIT-F)\n      (FLAGS ONBIT RLANDBIT)\n      (GLOBAL RIVER OCEAN FORT)>      ",
   "referencedBy": [
    "RIVER-F",
    "OCEAN-F",
    "FORT-F",
    "V-LEAP"
   ]
  },
  "YOUR-QUARTERS": {
   "name": "YOUR-QUARTERS",
   "file": "guild.zil",
   "line": 5,
   "endLine": 17,
   "desc": "Your Quarters",
   "ldesc": "This is your chamber in the Hall of the Guild of Enchanters, with a\ndoorway to the west. A private chamber is a great privilege, especially\nfor an Enchanter as young as yourself, but how many Enchanters can say\nthey defeated the infamous Krill?",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT"
   ],
   "synonyms": [
    "CHEVAU"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "ARCHWAY",
    "GLOBAL-BED"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "HALLWAY-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "HALLWAY-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "BED"
   ],
   "source": "<ROOM YOUR-QUARTERS\n      (IN ROOMS)\n      (SYNONYM CHEVAU)\n      (DESC \"Your Quarters\")\n      (LDESC\n\"This is your chamber in the Hall of the Guild of Enchanters, with a\ndoorway to the west. A private chamber is a great privilege, especially\nfor an Enchanter as young as yourself, but how many Enchanters can say\nthey defeated the infamous Krill?\")\n      (OUT TO HALLWAY-1)\n      (WEST TO HALLWAY-1)\n      (FLAGS RLANDBIT INSIDEBIT)\n      (GLOBAL ARCHWAY GLOBAL-BED)>",
   "referencedBy": [
    "GLOBAL-SLEEP-F",
    "IN-GUILD-HALL?",
    "V-RESEARCH",
    "JIGS-UP"
   ]
  },
  "BELBOZ-QUARTERS": {
   "name": "BELBOZ-QUARTERS",
   "file": "guild.zil",
   "line": 67,
   "endLine": 74,
   "desc": "Belboz's Quarters",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "BELBOZ-QUARTERS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "PERCH",
    "PERCH-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "HALLWAY-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "HALLWAY-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "PARROT",
    "BELBOZ-DESK",
    "DESK-DRAWER",
    "WALL-HANGING",
    "MORGIA-PLANT"
   ],
   "source": "<ROOM BELBOZ-QUARTERS\n      (IN ROOMS)\n      (DESC \"Belboz's Quarters\")\n      (OUT TO HALLWAY-1)\n      (EAST TO HALLWAY-1)\n      (FLAGS INSIDEBIT RLANDBIT)\n      (PSEUDO \"PERCH\" PERCH-PSEUDO)\n      (ACTION BELBOZ-QUARTERS-F)>",
   "referencedBy": [
    "SWANZO-BELBOZ",
    "IN-GUILD-HALL?"
   ]
  },
  "FROBAR-QUARTERS": {
   "name": "FROBAR-QUARTERS",
   "file": "guild.zil",
   "line": 446,
   "endLine": 455,
   "desc": "Frobar's Quarters",
   "ldesc": "This is the room of Frobar the Enchanter. There isn't much here in the way\nof furnishings, Frobar being a pretty dull kind of guy.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT"
   ],
   "synonyms": [
    "BARBEL",
    "ORKAN"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "HALLWAY-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "HALLWAY-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM FROBAR-QUARTERS\n       (IN ROOMS)\n       (SYNONYM BARBEL ORKAN)\n       (DESC \"Frobar's Quarters\")\n       (LDESC\n\"This is the room of Frobar the Enchanter. There isn't much here in the way\nof furnishings, Frobar being a pretty dull kind of guy.\")\n       (OUT TO HALLWAY-2)\n       (WEST TO HALLWAY-2)\n       (FLAGS RLANDBIT INSIDEBIT)>",
   "referencedBy": [
    "IN-GUILD-HALL?",
    "V-RESEARCH",
    "V-WHO",
    "V-AIMFIZ"
   ]
  },
  "HELISTAR-QUARTERS": {
   "name": "HELISTAR-QUARTERS",
   "file": "guild.zil",
   "line": 457,
   "endLine": 466,
   "desc": "Helistar's Quarters",
   "ldesc": "Helistar is one of the foremost members of the Circle, and\nthis is her private chamber.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT"
   ],
   "synonyms": [
    "THRIFF"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "HALLWAY-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "HALLWAY-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "GASPAR-SCROLL"
   ],
   "source": "<ROOM HELISTAR-QUARTERS\n       (IN ROOMS)\n       (SYNONYM THRIFF)\n       (DESC \"Helistar's Quarters\")\n       (LDESC\n\"Helistar is one of the foremost members of the Circle, and\nthis is her private chamber.\")\n       (OUT TO HALLWAY-2)\n       (EAST TO HALLWAY-2)\n       (FLAGS INSIDEBIT RLANDBIT)>",
   "referencedBy": [
    "IN-GUILD-HALL?",
    "V-RESEARCH"
   ]
  },
  "SERVANT-QUARTERS": {
   "name": "SERVANT-QUARTERS",
   "file": "guild.zil",
   "line": 492,
   "endLine": 502,
   "desc": "Servants' Quarters",
   "ldesc": "This is a sparsely furnished living area for the servants of the Guild.\nNone are in sight; presumably they are out doing their daily errands.\nYou can leave to the southwest.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT"
   ],
   "synonyms": [
    "SORCER"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "LOBBY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "LOBBY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM SERVANT-QUARTERS\n      (IN ROOMS)\n      (SYNONYM SORCER)\n      (DESC \"Servants' Quarters\")\n      (LDESC\n\"This is a sparsely furnished living area for the servants of the Guild.\nNone are in sight; presumably they are out doing their daily errands.\nYou can leave to the southwest.\")\n      (OUT TO LOBBY)\n      (SW TO LOBBY)\n      (FLAGS INSIDEBIT RLANDBIT)>",
   "referencedBy": [
    "IN-GUILD-HALL?",
    "V-RESEARCH",
    "V-AIMFIZ"
   ]
  },
  "APPRENTICE-QUARTERS": {
   "name": "APPRENTICE-QUARTERS",
   "file": "guild.zil",
   "line": 504,
   "endLine": 516,
   "desc": "Apprentice Quarters",
   "ldesc": "This is a large hall where the Guild's young apprentices live and study\nas they strive to achieve a seat on the Circle. You think back to the days\nwhen you occupied these quarters. The apprentices are gone, having\naccompanied Frobar into town to shop. You can leave to the southeast.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT"
   ],
   "synonyms": [
    "GORGE"
   ],
   "adjectives": [
    "RAZOR"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "LOBBY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "LOBBY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [],
   "source": "<ROOM APPRENTICE-QUARTERS\n      (IN ROOMS)\n      (SYNONYM GORGE)\n      (ADJECTIVE RAZOR)\n      (DESC \"Apprentice Quarters\")\n      (LDESC\n\"This is a large hall where the Guild's young apprentices live and study\nas they strive to achieve a seat on the Circle. You think back to the days\nwhen you occupied these quarters. The apprentices are gone, having\naccompanied Frobar into town to shop. You can leave to the southeast.\")\n      (OUT TO LOBBY)\n      (SE TO LOBBY)\n      (FLAGS INSIDEBIT RLANDBIT)>",
   "referencedBy": [
    "IN-GUILD-HALL?",
    "V-RESEARCH"
   ]
  },
  "HALLWAY-1": {
   "name": "HALLWAY-1",
   "file": "guild.zil",
   "line": 536,
   "endLine": 545,
   "desc": "Hallway",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "INSIDEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "HALLWAY-1-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CHAMBER-DOOR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "BELBOZ-QUARTERS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "YOUR-QUARTERS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "HALLWAY-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "CHAMBER-OF-THE-CIRCLE",
     "kind": "conditional",
     "condition": "CHAMBER-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "FROBAR-NOTE"
   ],
   "source": "<ROOM HALLWAY-1\n      (IN ROOMS)\n      (DESC \"Hallway\")\n      (WEST TO BELBOZ-QUARTERS)\n      (EAST TO YOUR-QUARTERS)\n      (SOUTH TO HALLWAY-2)\n      (NORTH TO CHAMBER-OF-THE-CIRCLE IF CHAMBER-DOOR IS OPEN)\n      (FLAGS RLANDBIT ONBIT INSIDEBIT)\n      (GLOBAL CHAMBER-DOOR)\n      (ACTION HALLWAY-1-F)>",
   "referencedBy": [
    "IN-GUILD-HALL?"
   ]
  },
  "HALLWAY-2": {
   "name": "HALLWAY-2",
   "file": "guild.zil",
   "line": 557,
   "endLine": 567,
   "desc": "Hallway",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "INSIDEBIT"
   ],
   "synonyms": [
    "ZORK"
   ],
   "adjectives": [],
   "action": "HALLWAY-2-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "ARCHWAY"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "FROBAR-QUARTERS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "HELISTAR-QUARTERS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "HALLWAY-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "LOBBY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HALLWAY-2\n      (IN ROOMS)\n      (SYNONYM ZORK)\n      (DESC \"Hallway\")\n      (EAST TO FROBAR-QUARTERS)\n      (WEST TO HELISTAR-QUARTERS)\n      (NORTH TO HALLWAY-1)\n      (SOUTH TO LOBBY)\n      (FLAGS RLANDBIT ONBIT INSIDEBIT)\n      (GLOBAL ARCHWAY)\n      (ACTION HALLWAY-2-F)>",
   "referencedBy": [
    "IN-GUILD-HALL?",
    "V-RESEARCH"
   ]
  },
  "CHAMBER-OF-THE-CIRCLE": {
   "name": "CHAMBER-OF-THE-CIRCLE",
   "file": "guild.zil",
   "line": 586,
   "endLine": 593,
   "desc": "Chamber of the Circle",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CHAMBER-OF-THE-CIRCLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CHAMBER-DOOR"
   ],
   "pseudo": [
    "TABLE",
    "TABLE-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "HALLWAY-1",
     "kind": "conditional",
     "condition": "CHAMBER-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "TENETS"
   ],
   "source": "<ROOM CHAMBER-OF-THE-CIRCLE\n      (IN ROOMS)\n      (DESC \"Chamber of the Circle\")\n      (SOUTH TO HALLWAY-1 IF CHAMBER-DOOR IS OPEN)\n      (FLAGS RLANDBIT INSIDEBIT)\n      (GLOBAL CHAMBER-DOOR)\n      (PSEUDO \"TABLE\" TABLE-PSEUDO)\n      (ACTION CHAMBER-OF-THE-CIRCLE-F)>",
   "referencedBy": [
    "SWANZO-BELBOZ",
    "WALLS-F",
    "CEILING-F",
    "IN-GUILD-HALL?"
   ]
  },
  "LOBBY": {
   "name": "LOBBY",
   "file": "guild.zil",
   "line": 635,
   "endLine": 658,
   "desc": "Lobby",
   "ldesc": "This is the entrance lobby of the Guild Hall. Befitting the status and\nwealth of the Guild, the lobby is finished with polished Antharian marble,\ninlaid with intricate patterns of silver leaf. To the north is a wide arch,\nand smaller openings flank the area on the eastern and western sides, as\nwell as the northeastern and northwestern corners. A narrow stair leads\ndownward. Through another arch to the south, you can see the entrance steps\nand the main road into town.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT",
    "ONBIT"
   ],
   "synonyms": [
    "ORC",
    "ORCS",
    "YIPPLE",
    "NABIZ"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HOLE",
    "ROAD",
    "STAIRS",
    "ARCHWAY"
   ],
   "pseudo": [
    "MARBLE",
    "MARBLE-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "HALLWAY-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "LIBRARY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "STORE-ROOM",
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
     "to": "SERVANT-QUARTERS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "APPRENTICE-QUARTERS",
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
     "message": "A tiny warning nymph appears, floating in the air next to your\near. \"There's no one else here,\" it reminds you, \"so you'd better not leave\njust now. Bye!\" It winks at you before vanishing.",
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "MAILBOX"
   ],
   "source": "<ROOM LOBBY\n      (SYNONYM ORC ORCS YIPPLE NABIZ)\n      (IN ROOMS)\n      (DESC \"Lobby\")\n      (LDESC\n\"This is the entrance lobby of the Guild Hall. Befitting the status and\nwealth of the Guild, the lobby is finished with polished Antharian marble,\ninlaid with intricate patterns of silver leaf. To the north is a wide arch,\nand smaller openings flank the area on the eastern and western sides, as\nwell as the northeastern and northwestern corners. A narrow stair leads\ndownward. Through another arch to the south, you can see the entrance steps\nand the main road into town.\")\n      (NORTH TO HALLWAY-2)\n      (EAST TO LIBRARY)\n      (WEST TO STORE-ROOM)\n      (DOWN TO CELLAR)\n      (NE TO SERVANT-QUARTERS)\n      (NW TO APPRENTICE-QUARTERS)\n      (SOUTH \"A tiny warning nymph appears, floating in the air next to your\near. \\\"There's no one else here,\\\" it reminds you, \\\"so you'd better not leave\njust now. Bye!\\\" It winks at you before vanishing.\")\n      (FLAGS RLANDBIT INSIDEBIT ONBIT)\n      (PSEUDO \"MARBLE\" MARBLE-PSEUDO)\n      (GLOBAL HOLE ROAD STAIRS ARCHWAY)>",
   "referencedBy": [
    "HELLHOUND-F",
    "GRUE-F",
    "HOLE-F",
    "IN-GUILD-HALL?",
    "I-MAILMAN",
    "DORN-BEAST-F",
    "V-RESEARCH"
   ]
  },
  "LIBRARY": {
   "name": "LIBRARY",
   "file": "guild.zil",
   "line": 814,
   "endLine": 825,
   "desc": "Library",
   "ldesc": "This is a study chamber for members of the Guild. Usually, there would\nbe several elder Enchanters patiently training novices, but no one is here\nat the moment. The only exit is west.|\nLying open on a stand in one corner is a heavy volume, probably\na copy of the Encyclopedia Frobizzica.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "STAND",
    "STAND-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "LOBBY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "ENCYCLOPEDIA",
    "MEEF-SCROLL"
   ],
   "source": "<ROOM LIBRARY\n      (IN ROOMS)\n      (DESC \"Library\")\n      (LDESC\n\"This is a study chamber for members of the Guild. Usually, there would\nbe several elder Enchanters patiently training novices, but no one is here\nat the moment. The only exit is west.|\nLying open on a stand in one corner is a heavy volume, probably\na copy of the Encyclopedia Frobizzica.\")\n      (WEST TO LOBBY)\n      (FLAGS RLANDBIT INSIDEBIT)\n      (PSEUDO \"STAND\" STAND-PSEUDO)>",
   "referencedBy": [
    "IN-GUILD-HALL?",
    "PRE-RESEARCH"
   ]
  },
  "STORE-ROOM": {
   "name": "STORE-ROOM",
   "file": "guild.zil",
   "line": 893,
   "endLine": 901,
   "desc": "Store Room",
   "ldesc": "This is a closet for storage. The only exit is east.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT"
   ],
   "synonyms": [
    "DRYAD",
    "DRYADS",
    "KOBOLD",
    "SURMIN"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "LOBBY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "LOBBY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "BERZIO-VIAL",
    "MATCHBOOK",
    "CALENDAR"
   ],
   "source": "<ROOM STORE-ROOM\n      (SYNONYM DRYAD DRYADS KOBOLD SURMIN)\n      (IN ROOMS)\n      (DESC \"Store Room\")\n      (LDESC\n\"This is a closet for storage. The only exit is east.\")\n      (EAST TO LOBBY)\n      (OUT TO LOBBY)\n      (FLAGS RLANDBIT INSIDEBIT)>",
   "referencedBy": [
    "IN-GUILD-HALL?",
    "V-RESEARCH"
   ]
  },
  "CELLAR": {
   "name": "CELLAR",
   "file": "guild.zil",
   "line": 1015,
   "endLine": 1027,
   "desc": "Cellar",
   "ldesc": "You are in the basement of the Guild Hall. A steep, narrow stair\nleads upward from the southwest corner.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT"
   ],
   "synonyms": [
    "ROTGRU",
    "BLOODW",
    "BROGMO"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIRS"
   ],
   "pseudo": [
    "COBWEB",
    "COBWEB-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "LOBBY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "LOBBY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "LOBBY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [
    "TRUNK",
    "BLACK-BUTTON",
    "GRAY-BUTTON",
    "RED-BUTTON",
    "PURPLE-BUTTON",
    "WHITE-BUTTON"
   ],
   "source": "<ROOM CELLAR\n      (SYNONYM ROTGRU BLOODW BROGMO)\n      (IN ROOMS)\n      (DESC \"Cellar\")\n      (LDESC\n\"You are in the basement of the Guild Hall. A steep, narrow stair\nleads upward from the southwest corner.\")\n      (UP TO LOBBY)\n      (OUT TO LOBBY)\n      (SW TO LOBBY)\n      (FLAGS INSIDEBIT RLANDBIT)\n      (PSEUDO \"COBWEB\" COBWEB-PSEUDO)\n      (GLOBAL STAIRS)>",
   "referencedBy": [
    "IN-GUILD-HALL?",
    "V-RESEARCH"
   ]
  },
  "END-OF-HIGHWAY": {
   "name": "END-OF-HIGHWAY",
   "file": "maze.zil",
   "line": 35,
   "endLine": 49,
   "desc": "End of Highway",
   "ldesc": "The underground road ends here. A hovel, carved into the rock, lies to the\neast. To the north, wide marble stairs lead upward.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT"
   ],
   "synonyms": [
    "GALEPA",
    "MAREIL",
    "CITY"
   ],
   "adjectives": [
    "ANCIEN"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "ROAD",
    "HOVEL",
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "STONE-HUT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "OUTSIDE-STORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "ENTRANCE-HALL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "ENTRANCE-HALL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "STONE-HUT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [],
   "source": "<ROOM END-OF-HIGHWAY\n      (IN ROOMS)\n      (SYNONYM GALEPA MAREIL CITY)\n      (ADJECTIVE ANCIEN)\n      (DESC \"End of Highway\")\n      (LDESC\n\"The underground road ends here. A hovel, carved into the rock, lies to the\neast. To the north, wide marble stairs lead upward.\")\n      (EAST TO STONE-HUT)\n      (WEST TO OUTSIDE-STORE)\n      (UP TO ENTRANCE-HALL)\n      (NORTH TO ENTRANCE-HALL)\n      (IN TO STONE-HUT)\n      (FLAGS RLANDBIT INSIDEBIT)\n      (GLOBAL ROAD HOVEL STAIRS)>",
   "referencedBy": [
    "IN-MAZE-AREA?",
    "HOVEL-F",
    "V-RESEARCH"
   ]
  },
  "STONE-HUT": {
   "name": "STONE-HUT",
   "file": "maze.zil",
   "line": 77,
   "endLine": 88,
   "desc": "Stone Hut",
   "ldesc": "This is a small underground hovel. On the far wall is a small\nfireplace, long unused.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT"
   ],
   "synonyms": [
    "QUENDO",
    "KINGDO"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CHIMNEY",
    "HOVEL"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "END-OF-HIGHWAY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "END-OF-HIGHWAY",
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
     "per": "CHIMNEY-EXIT-F",
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [
    "FIREPLACE"
   ],
   "source": "<ROOM STONE-HUT\n      (IN ROOMS)\n      (SYNONYM QUENDO KINGDO) \n      (DESC \"Stone Hut\")\n      (LDESC\n\"This is a small underground hovel. On the far wall is a small\nfireplace, long unused.\")\n      (OUT TO END-OF-HIGHWAY)\n      (WEST TO END-OF-HIGHWAY)\n      (UP PER CHIMNEY-EXIT-F)\n      (FLAGS RLANDBIT INSIDEBIT)\n      (GLOBAL CHIMNEY HOVEL)>",
   "referencedBy": [
    "IN-MAZE-AREA?",
    "HOVEL-F",
    "V-RESEARCH",
    "SCORE-OBJECT"
   ]
  },
  "ENTRANCE-HALL": {
   "name": "ENTRANCE-HALL",
   "file": "maze.zil",
   "line": 112,
   "endLine": 123,
   "desc": "Entrance Hall",
   "ldesc": "This is a large entrance hall, paved with polished stone. Large doorways\nlead north and south.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT"
   ],
   "synonyms": [
    "EMPIRE",
    "GUE"
   ],
   "adjectives": [
    "GREAT",
    "UNDERG"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "ARCHWAY"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "OUTSIDE-GLASS-DOOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "END-OF-HIGHWAY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "STATUE"
   ],
   "source": "<ROOM ENTRANCE-HALL\n      (IN ROOMS)\n      (SYNONYM EMPIRE GUE)\n      (ADJECTIVE GREAT UNDERG)\n      (DESC \"Entrance Hall\")\n      (LDESC\n\"This is a large entrance hall, paved with polished stone. Large doorways\nlead north and south.\")\n      (NORTH TO OUTSIDE-GLASS-DOOR)\n      (SOUTH TO END-OF-HIGHWAY)\n      (FLAGS INSIDEBIT RLANDBIT)\n      (GLOBAL ARCHWAY)>",
   "referencedBy": [
    "IN-MAZE-AREA?",
    "STATUE-F",
    "V-RESEARCH"
   ]
  },
  "OUTSIDE-GLASS-DOOR": {
   "name": "OUTSIDE-GLASS-DOOR",
   "file": "maze.zil",
   "line": 175,
   "endLine": 186,
   "desc": "Outside Glass Arch",
   "ldesc": "Through a breathtaking archway of glass to the east is an\narea glistening with reflected light. Another exit leads south.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT"
   ],
   "synonyms": [
    "TECH"
   ],
   "adjectives": [
    "GUE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MAZE",
    "ARCHWAY"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "GLASS-MAZE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "ENTRANCE-HALL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM OUTSIDE-GLASS-DOOR\n      (IN ROOMS)\n      (SYNONYM TECH)\n      (ADJECTIVE GUE)\n      (DESC \"Outside Glass Arch\")\n      (LDESC\n\"Through a breathtaking archway of glass to the east is an\narea glistening with reflected light. Another exit leads south.\")\n      (EAST TO GLASS-MAZE)\n      (SOUTH TO ENTRANCE-HALL)\n      (FLAGS RLANDBIT INSIDEBIT)\n      (GLOBAL MAZE ARCHWAY)>",
   "referencedBy": [
    "IN-MAZE-AREA?",
    "MAZE-F",
    "MAZE-EXIT-F",
    "V-RESEARCH"
   ]
  },
  "GLASS-MAZE": {
   "name": "GLASS-MAZE",
   "file": "maze.zil",
   "line": 198,
   "endLine": 210,
   "desc": "Inside the Glass Maze",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "GLASS-MAZE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MAZE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MAZE-EXIT-F",
     "message": null,
     "dir": "UP"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MAZE-EXIT-F",
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MAZE-EXIT-F",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MAZE-EXIT-F",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MAZE-EXIT-F",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MAZE-EXIT-F",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Please use compass directions here.",
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM GLASS-MAZE\n      (IN ROOMS)\n      (DESC \"Inside the Glass Maze\")\n      (UP PER MAZE-EXIT-F)\n      (DOWN PER MAZE-EXIT-F)\n      (NORTH PER MAZE-EXIT-F)\n      (SOUTH PER MAZE-EXIT-F)\n      (WEST PER MAZE-EXIT-F)\n      (EAST PER MAZE-EXIT-F)\n      (OUT \"Please use compass directions here.\")\n      (FLAGS INSIDEBIT RLANDBIT ONBIT)\n      (GLOBAL MAZE)\n      (ACTION GLASS-MAZE-F)>",
   "referencedBy": [
    "I-UNFWEEP",
    "GROUND-F",
    "WALLS-F",
    "CEILING-F",
    "I-FLY",
    "IN-MAZE-AREA?",
    "MAZE-F",
    "GLASS-MAZE-F",
    "MAZE-TO-TABLE",
    "TABLE-TO-MAZE",
    "PRE-RESEARCH",
    "V-WALK",
    "V-FWEEP",
    "IDROP",
    "DESCRIBE-ROOM",
    "JIGS-UP"
   ]
  },
  "HOLLOW": {
   "name": "HOLLOW",
   "file": "maze.zil",
   "line": 666,
   "endLine": 683,
   "desc": "Hollow",
   "ldesc": "The maze opens here onto a tiny outdoor plateau, completely surrounded\nby towering cliffs. The only way out is back through the dazzling archway\nof glass to the west.|\nNear the glass arch is a small rectangular brick structure. The center of\nthe structure is a hole about a foot wide, leading down into darkness.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "ANTHAR"
   ],
   "adjectives": [],
   "action": "HOLLOW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CHIMNEY",
    "HOLE",
    "SOOT",
    "MAZE",
    "ARCHWAY"
   ],
   "pseudo": [
    "CLIFF",
    "CLIFF-PSEUDO",
    "CLIFFS",
    "CLIFF-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "GLASS-MAZE",
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
     "message": "You couldn't even fly over these cliffs.",
     "dir": "UP"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The opening in the brick structure is too small for\nhumans or even bats.",
     "dir": "DOWN"
    }
   ],
   "contents": [
    "BRICK-STRUCTURE",
    "SWANZO-SCROLL"
   ],
   "source": "<ROOM HOLLOW\n      (IN ROOMS)\n      (SYNONYM ANTHAR)\n      (DESC \"Hollow\")\n      (LDESC\n\"The maze opens here onto a tiny outdoor plateau, completely surrounded\nby towering cliffs. The only way out is back through the dazzling archway\nof glass to the west.|\nNear the glass arch is a small rectangular brick structure. The center of\nthe structure is a hole about a foot wide, leading down into darkness.\")\n      (WEST TO GLASS-MAZE)\n      (UP \"You couldn't even fly over these cliffs.\")\n      (DOWN \"The opening in the brick structure is too small for\nhumans or even bats.\")\n      (FLAGS RLANDBIT ONBIT)\n      (PSEUDO \"CLIFF\" CLIFF-PSEUDO \"CLIFFS\" CLIFF-PSEUDO)\n      (GLOBAL CHIMNEY HOLE SOOT MAZE ARCHWAY)\n      (ACTION HOLLOW-F)>",
   "referencedBy": [
    "HOLE-F",
    "IN-MAZE-AREA?",
    "MAZE-F",
    "MAZE-EXIT-F",
    "CHIMNEY-F",
    "I-DORN-BEAST",
    "V-RESEARCH",
    "V-SLEEP",
    "JIGS-UP"
   ]
  },
  "PARK-ENTRANCE": {
   "name": "PARK-ENTRANCE",
   "file": "park.zil",
   "line": 32,
   "endLine": 44,
   "desc": "Park Entrance",
   "ldesc": "This looks like the entrance to a run-down amusement park, no longer\ngaudy with lights and glitter. A sign above the entrance proclaims\n\"Welcome to Bozbarland - The Entertainment Capital of the Empire.\"\nThe park lies to the west and a tunnel leads northeast.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BOZBARLAND"
   ],
   "pseudo": [
    "SIGN",
    "PARK-SIGN-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "WINDING-TUNNEL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "AMUSEMENT-PARK-ENTER-F",
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM PARK-ENTRANCE\n      (IN ROOMS)\n      (DESC \"Park Entrance\")\n      (LDESC\n\"This looks like the entrance to a run-down amusement park, no longer\ngaudy with lights and glitter. A sign above the entrance proclaims\n\\\"Welcome to Bozbarland - The Entertainment Capital of the Empire.\\\"\nThe park lies to the west and a tunnel leads northeast.\")\n      (NE TO WINDING-TUNNEL)\n      (WEST PER AMUSEMENT-PARK-ENTER-F)\n      (FLAGS INSIDEBIT RLANDBIT)\n      (GLOBAL BOZBARLAND)\n      (PSEUDO \"SIGN\" PARK-SIGN-PSEUDO)>",
   "referencedBy": [
    "IN-CRATER-AREA?",
    "BOZBARLAND-F",
    "I-PARK-GNOME",
    "V-WALK"
   ]
  },
  "EAST-END-OF-MIDWAY": {
   "name": "EAST-END-OF-MIDWAY",
   "file": "park.zil",
   "line": 126,
   "endLine": 139,
   "desc": "East End of Midway",
   "ldesc": "You are at the eastern end of a long midway. The park entrance lies\nto the east, and rides lie to the north and south.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "INSIDEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "EAST-END-OF-MIDWAY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BOZBARLAND"
   ],
   "pseudo": [
    "MIDWAY",
    "MIDWAY-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "HAUNTED-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "FLUME",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "WEST-END-OF-MIDWAY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "PARK-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM EAST-END-OF-MIDWAY\n      (IN ROOMS)\n      (DESC \"East End of Midway\")\n      (LDESC\n\"You are at the eastern end of a long midway. The park entrance lies\nto the east, and rides lie to the north and south.\")\n      (NORTH TO HAUNTED-HOUSE)\n      (SOUTH TO FLUME)\n      (WEST TO WEST-END-OF-MIDWAY)\n      (EAST TO PARK-ENTRANCE)\n      (FLAGS RLANDBIT ONBIT INSIDEBIT)\n      (GLOBAL BOZBARLAND)\n      (PSEUDO \"MIDWAY\" MIDWAY-PSEUDO)\n      (ACTION EAST-END-OF-MIDWAY-F)>",
   "referencedBy": [
    "IN-CRATER-AREA?",
    "BOZBARLAND-F",
    "AMUSEMENT-PARK-ENTER-F"
   ]
  },
  "WEST-END-OF-MIDWAY": {
   "name": "WEST-END-OF-MIDWAY",
   "file": "park.zil",
   "line": 146,
   "endLine": 158,
   "desc": "West End of Midway",
   "ldesc": "Entrances lead north, west and south, and the rest of the\nmidway lies to the east.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "INSIDEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BOZBARLAND"
   ],
   "pseudo": [
    "MIDWAY",
    "MIDWAY-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "CASINO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "ARCADE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "ROLLER-COASTER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "EAST-END-OF-MIDWAY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM WEST-END-OF-MIDWAY\n      (IN ROOMS)\n      (DESC \"West End of Midway\")\n      (LDESC\n\"Entrances lead north, west and south, and the rest of the\nmidway lies to the east.\")\n      (WEST TO CASINO)\n      (SOUTH TO ARCADE)\n      (NORTH TO ROLLER-COASTER)\n      (EAST TO EAST-END-OF-MIDWAY)\n      (FLAGS RLANDBIT ONBIT INSIDEBIT)\n      (GLOBAL BOZBARLAND)\n      (PSEUDO \"MIDWAY\" MIDWAY-PSEUDO)>",
   "referencedBy": [
    "IN-CRATER-AREA?",
    "ARCADE-EXIT-F"
   ]
  },
  "HAUNTED-HOUSE": {
   "name": "HAUNTED-HOUSE",
   "file": "park.zil",
   "line": 160,
   "endLine": 176,
   "desc": "Haunted House",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "INSIDEBIT",
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "HAUNTED-HOUSE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BOZBARLAND"
   ],
   "pseudo": [
    "MIDWAY",
    "MIDWAY-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "EAST-END-OF-MIDWAY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "HAUNTED-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "HAUNTED-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "HAUNTED-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "HAUNTED-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "HAUNTED-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "HAUNTED-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "HAUNTED-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "HAUNTED-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "HAUNTED-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM HAUNTED-HOUSE\n      (IN ROOMS)\n      (DESC \"Haunted House\")\n      (SOUTH TO EAST-END-OF-MIDWAY)\n      (NORTH TO HAUNTED-HOUSE)\n      (EAST TO HAUNTED-HOUSE)\n      (WEST TO HAUNTED-HOUSE)\n      (NE TO HAUNTED-HOUSE)\n      (NW TO HAUNTED-HOUSE)\n      (SE TO HAUNTED-HOUSE)\n      (SW TO HAUNTED-HOUSE)\n      (UP TO HAUNTED-HOUSE)\n      (DOWN TO HAUNTED-HOUSE)\n      (FLAGS INSIDEBIT RLANDBIT)\n      (GLOBAL BOZBARLAND)\n      (PSEUDO \"MIDWAY\" MIDWAY-PSEUDO)\n      (ACTION HAUNTED-HOUSE-F)>",
   "referencedBy": [
    "IN-CRATER-AREA?",
    "MIDWAY-PSEUDO",
    "I-HAUNT",
    "V-DROP",
    "V-THROW",
    "GOTO",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "FLUME": {
   "name": "FLUME",
   "file": "park.zil",
   "line": 279,
   "endLine": 286,
   "desc": "Flume",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "INSIDEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "FLUME-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WATER",
    "BOZBARLAND"
   ],
   "pseudo": [
    "MIDWAY",
    "MIDWAY-PSEUDO",
    "PLAQUE",
    "PLAQUE-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "EAST-END-OF-MIDWAY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "FLUME-OBJECT",
    "LOG-BOAT"
   ],
   "source": "<ROOM FLUME\n      (IN ROOMS)\n      (DESC \"Flume\")\n      (NORTH TO EAST-END-OF-MIDWAY)\n      (FLAGS RLANDBIT ONBIT INSIDEBIT)\n      (GLOBAL WATER BOZBARLAND)\n      (PSEUDO \"MIDWAY\" MIDWAY-PSEUDO \"PLAQUE\" PLAQUE-PSEUDO)\n      (ACTION FLUME-F)>",
   "referencedBy": [
    "WATER-F",
    "WATER-IS-PRSI",
    "IN-CRATER-AREA?",
    "MIDWAY-PSEUDO",
    "END-RIDE",
    "PLAQUE-PSEUDO",
    "LOG-BOAT-F",
    "FLY-DURING-RIDE"
   ]
  },
  "ROLLER-COASTER": {
   "name": "ROLLER-COASTER",
   "file": "park.zil",
   "line": 411,
   "endLine": 418,
   "desc": "Roller Coaster",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "INSIDEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ROLLER-COASTER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BOZBARLAND"
   ],
   "pseudo": [
    "MIDWAY",
    "MIDWAY-PSEUDO",
    "PLAQUE",
    "PLAQUE-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "WEST-END-OF-MIDWAY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "CAR"
   ],
   "source": "<ROOM ROLLER-COASTER\n      (IN ROOMS)\n      (DESC \"Roller Coaster\")\n      (SOUTH TO WEST-END-OF-MIDWAY)\n      (FLAGS RLANDBIT ONBIT INSIDEBIT)\n      (GLOBAL BOZBARLAND)\n      (PSEUDO \"MIDWAY\" MIDWAY-PSEUDO \"PLAQUE\" PLAQUE-PSEUDO)\n      (ACTION ROLLER-COASTER-F)>",
   "referencedBy": [
    "IN-CRATER-AREA?",
    "MIDWAY-PSEUDO",
    "END-RIDE",
    "CAR-F"
   ]
  },
  "ARCADE": {
   "name": "ARCADE",
   "file": "park.zil",
   "line": 533,
   "endLine": 545,
   "desc": "Arcade",
   "ldesc": "This is a huge tent filled with hectic noise, blinking lights, and the\nsmell of frying food. Near the exit is a game booth lined with prizes.\nThe concept of the game seems to be bashing cute little mechanical bunnies\nwith a rubber ball as they hop around a little artificial meadow.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "INSIDEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ARCADE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BOZBARLAND"
   ],
   "pseudo": [
    "MIDWAY",
    "MIDWAY-PSEUDO",
    "BOOTH",
    "BOOTH-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "ARCADE-EXIT-F",
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "HAWKER",
    "RABBITS"
   ],
   "source": "<ROOM ARCADE\n      (IN ROOMS)\n      (DESC \"Arcade\")\n      (LDESC\n\"This is a huge tent filled with hectic noise, blinking lights, and the\nsmell of frying food. Near the exit is a game booth lined with prizes.\nThe concept of the game seems to be bashing cute little mechanical bunnies\nwith a rubber ball as they hop around a little artificial meadow.\")\n      (NORTH PER ARCADE-EXIT-F)\n      (FLAGS RLANDBIT ONBIT INSIDEBIT)\n      (GLOBAL BOZBARLAND)\n      (PSEUDO \"MIDWAY\" MIDWAY-PSEUDO \"BOOTH\" BOOTH-PSEUDO)\n      (ACTION ARCADE-F)>",
   "referencedBy": [
    "IN-CRATER-AREA?",
    "MIDWAY-PSEUDO"
   ]
  },
  "CASINO": {
   "name": "CASINO",
   "file": "park.zil",
   "line": 677,
   "endLine": 686,
   "desc": "Casino",
   "ldesc": "This is a large, plush room, slightly neglected.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "INSIDEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CASINO-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BOZBARLAND"
   ],
   "pseudo": [
    "LEVER",
    "LEVER-PSEUDO",
    "MIDWAY",
    "MIDWAY-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "WEST-END-OF-MIDWAY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "SLOT-MACHINE"
   ],
   "source": "<ROOM CASINO\n      (IN ROOMS)\n      (DESC \"Casino\")\n      (LDESC\n\"This is a large, plush room, slightly neglected.\")\n      (EAST TO WEST-END-OF-MIDWAY)\n      (FLAGS RLANDBIT INSIDEBIT)\n      (GLOBAL BOZBARLAND)\n      (PSEUDO \"LEVER\" LEVER-PSEUDO \"MIDWAY\" MIDWAY-PSEUDO)\n      (ACTION CASINO-F)>",
   "referencedBy": [
    "IN-CRATER-AREA?",
    "MIDWAY-PSEUDO"
   ]
  }
 },
 "objects": {
  "TREE": {
   "name": "TREE",
   "file": "belboz.zil",
   "line": 11,
   "endLine": 17,
   "desc": "gnarled tree",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "TREE",
    "BRANCH"
   ],
   "adjectives": [
    "LARGE",
    "GNARLE",
    "OLD",
    "TWISTE"
   ],
   "action": "TREE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TREE\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"gnarled tree\")\n\t(SYNONYM TREE BRANCH)\n\t(ADJECTIVE LARGE GNARLE OLD TWISTE)\n\t(FLAGS NDESCBIT)\n\t(ACTION TREE-F)>",
   "referencedBy": [
    "PRE-RESEARCH"
   ]
  },
  "HELLHOUND": {
   "name": "HELLHOUND",
   "file": "belboz.zil",
   "line": 44,
   "endLine": 50,
   "desc": "hellhound",
   "ldesc": null,
   "fdesc": null,
   "loc": "TWISTED-FOREST",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "HELLHO",
    "HOUND",
    "DOG"
   ],
   "adjectives": [
    "HELL"
   ],
   "action": "HELLHOUND-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HELLHOUND\n\t(IN TWISTED-FOREST)\n\t(DESC \"hellhound\")\n\t(SYNONYM HELLHO HOUND DOG)\n\t(ADJECTIVE HELL)\n\t(FLAGS NDESCBIT)\n\t(ACTION HELLHOUND-F)>",
   "referencedBy": [
    "I-HELLHOUND",
    "GO",
    "IKILL"
   ]
  },
  "BOA": {
   "name": "BOA",
   "file": "belboz.zil",
   "line": 111,
   "endLine": 117,
   "desc": "boa constrictor",
   "ldesc": null,
   "fdesc": null,
   "loc": "TREE-BRANCH",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BOA",
    "CONSTR",
    "SNAKE"
   ],
   "adjectives": [
    "GIANT",
    "BOA"
   ],
   "action": "BOA-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BOA\n\t(IN TREE-BRANCH)\n\t(DESC \"boa constrictor\")\n\t(SYNONYM BOA CONSTR SNAKE)\n\t(ADJECTIVE GIANT BOA)\n\t(FLAGS NDESCBIT)\n\t(ACTION BOA-F)>",
   "referencedBy": [
    "IKILL"
   ]
  },
  "SIGNPOST": {
   "name": "SIGNPOST",
   "file": "belboz.zil",
   "line": 167,
   "endLine": 173,
   "desc": "signpost",
   "ldesc": null,
   "fdesc": null,
   "loc": "FOREST-EDGE",
   "flags": [
    "READBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "SIGNPO",
    "POST",
    "SIGN"
   ],
   "adjectives": [
    "SIGN"
   ],
   "action": "SIGNPOST-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SIGNPOST\n\t(IN FOREST-EDGE)\n\t(DESC \"signpost\")\n\t(SYNONYM SIGNPO POST SIGN)\n\t(ADJECTIVE SIGN)\n\t(FLAGS READBIT NDESCBIT)\n\t(ACTION SIGNPOST-F)>",
   "referencedBy": []
  },
  "VIPERS": {
   "name": "VIPERS",
   "file": "belboz.zil",
   "line": 235,
   "endLine": 240,
   "desc": "group of unseen creatures",
   "ldesc": null,
   "fdesc": null,
   "loc": "SNAKE-PIT",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "SNAKE",
    "SNAKES",
    "BEETLE",
    "CREATU"
   ],
   "adjectives": [
    "GIANT",
    "VIPER",
    "VIPERS",
    "UNSEEN",
    "GROUP"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT VIPERS\n\t(IN SNAKE-PIT)\n\t(DESC \"group of unseen creatures\")\n\t(SYNONYM SNAKE SNAKES BEETLE CREATU)\n\t(ADJECTIVE GIANT VIPER VIPERS UNSEEN GROUP)\n\t(FLAGS NDESCBIT)> ",
   "referencedBy": []
  },
  "MOSS": {
   "name": "MOSS",
   "file": "belboz.zil",
   "line": 271,
   "endLine": 276,
   "desc": "moss and lichens",
   "ldesc": null,
   "fdesc": null,
   "loc": "SLIMY-ROOM",
   "flags": [
    "NDESCBIT",
    "NARTICLEBIT"
   ],
   "synonyms": [
    "MOSS",
    "LICHEN",
    "SLIME"
   ],
   "adjectives": [],
   "action": "MOSS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MOSS\n\t(IN SLIMY-ROOM)\n\t(DESC \"moss and lichens\")\n\t(SYNONYM MOSS LICHEN SLIME)\n\t(FLAGS NDESCBIT NARTICLEBIT)\n\t(ACTION MOSS-F)>",
   "referencedBy": []
  },
  "MEADOW-OBJECT": {
   "name": "MEADOW-OBJECT",
   "file": "belboz.zil",
   "line": 312,
   "endLine": 318,
   "desc": "meadow",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "MEADOW",
    "GRASS",
    "FIELD"
   ],
   "adjectives": [
    "TALL",
    "ROLLIN",
    "WIDE"
   ],
   "action": "MEADOW-OBJECT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MEADOW-OBJECT\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"meadow\")\n\t(SYNONYM MEADOW GRASS FIELD)\n\t(ADJECTIVE TALL ROLLIN WIDE)\n\t(FLAGS NDESCBIT)\n\t(ACTION MEADOW-OBJECT-F)>",
   "referencedBy": [
    "MEADOW-F",
    "MEADOW-OBJECT-F",
    "PLAGUE-OF-LOCUSTS-F"
   ]
  },
  "PLAGUE-OF-LOCUSTS": {
   "name": "PLAGUE-OF-LOCUSTS",
   "file": "belboz.zil",
   "line": 328,
   "endLine": 334,
   "desc": "plague of locusts",
   "ldesc": null,
   "fdesc": null,
   "loc": "MEADOW",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PLAGUE",
    "SWARM",
    "LOCUSTS"
   ],
   "adjectives": [
    "BLOOD",
    "SUCKIN"
   ],
   "action": "PLAGUE-OF-LOCUSTS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PLAGUE-OF-LOCUSTS\n\t(IN MEADOW)\n\t(DESC \"plague of locusts\")\n\t(SYNONYM PLAGUE SWARM LOCUSTS)\n\t(ADJECTIVE BLOOD SUCKIN)\n\t(FLAGS NDESCBIT)\n\t(ACTION PLAGUE-OF-LOCUSTS-F)>",
   "referencedBy": []
  },
  "RIVER": {
   "name": "RIVER",
   "file": "belboz.zil",
   "line": 424,
   "endLine": 430,
   "desc": "river",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "RIVER",
    "WATERS",
    "RAPIDS"
   ],
   "adjectives": [
    "MIGHTY",
    "FAST-",
    "MOVING",
    "TURBUL",
    "FOAMIN"
   ],
   "action": "RIVER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RIVER\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"river\")\n\t(SYNONYM RIVER WATERS RAPIDS)\n\t(ADJECTIVE MIGHTY FAST- MOVING TURBUL FOAMIN)\n\t(FLAGS NDESCBIT)\n\t(ACTION RIVER-F)>\t",
   "referencedBy": [
    "RIVER-F",
    "WATER-F",
    "WATER-IS-PRSI"
   ]
  },
  "UNDERGROWTH": {
   "name": "UNDERGROWTH",
   "file": "belboz.zil",
   "line": 498,
   "endLine": 503,
   "desc": "undergrowth",
   "ldesc": null,
   "fdesc": null,
   "loc": "RIVER-BANK",
   "flags": [
    "NDESCBIT",
    "VOWELBIT",
    "NARTICLEBIT"
   ],
   "synonyms": [
    "UNDERG"
   ],
   "adjectives": [],
   "action": "UNDERGROWTH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT UNDERGROWTH\n\t(IN RIVER-BANK)\n\t(DESC \"undergrowth\")\n\t(SYNONYM UNDERG)\n\t(FLAGS NDESCBIT VOWELBIT NARTICLEBIT)\n\t(ACTION UNDERGROWTH-F)>",
   "referencedBy": []
  },
  "BANKS": {
   "name": "BANKS",
   "file": "belboz.zil",
   "line": 511,
   "endLine": 517,
   "desc": "river bank",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BANK",
    "BANKS"
   ],
   "adjectives": [
    "RIVER",
    "MUDDY",
    "TALL",
    "STEEP",
    "HIGH"
   ],
   "action": "BANKS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BANKS\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"river bank\")\n\t(SYNONYM BANK BANKS)\n\t(ADJECTIVE RIVER MUDDY TALL STEEP HIGH)\n\t(FLAGS NDESCBIT)\n\t(ACTION BANKS-F)>",
   "referencedBy": []
  },
  "RIVER-BED-OBJECT": {
   "name": "RIVER-BED-OBJECT",
   "file": "belboz.zil",
   "line": 523,
   "endLine": 529,
   "desc": "river bed",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BED"
   ],
   "adjectives": [
    "RIVER"
   ],
   "action": "RIVER-BED-OBJECT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RIVER-BED-OBJECT\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"river bed\")\n\t(SYNONYM BED)\n\t(ADJECTIVE RIVER)\n\t(FLAGS NDESCBIT)\n\t(ACTION RIVER-BED-OBJECT-F)>",
   "referencedBy": []
  },
  "WATERFALL": {
   "name": "WATERFALL",
   "file": "belboz.zil",
   "line": 651,
   "endLine": 657,
   "desc": "waterfall",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WATERF",
    "FALL",
    "FALLS"
   ],
   "adjectives": [
    "WATER",
    "TALL"
   ],
   "action": "WATERFALL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WATERFALL\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"waterfall\")\n\t(SYNONYM WATERF FALL FALLS)\n\t(ADJECTIVE WATER TALL)\n\t(FLAGS NDESCBIT)\n\t(ACTION WATERFALL-F)>",
   "referencedBy": []
  },
  "BAT-GUANO": {
   "name": "BAT-GUANO",
   "file": "belboz.zil",
   "line": 698,
   "endLine": 705,
   "desc": "pile of bat guano",
   "ldesc": null,
   "fdesc": null,
   "loc": "HIDDEN-CAVE",
   "flags": [
    "TRYTAKEBIT",
    "TAKEBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "PILE",
    "GUANO",
    "SHIT"
   ],
   "adjectives": [
    "BAT",
    "FECES",
    "TURDS",
    "DUNG"
   ],
   "action": "BAT-GUANO-F",
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
   "source": "<OBJECT BAT-GUANO\n\t(IN HIDDEN-CAVE)\n\t(DESC \"pile of bat guano\")\n\t(SYNONYM PILE GUANO SHIT)\n\t(ADJECTIVE BAT FECES TURDS DUNG)\n\t(FLAGS TRYTAKEBIT TAKEBIT NDESCBIT)\n\t(SIZE 10)\n\t(ACTION BAT-GUANO-F)>",
   "referencedBy": [
    "BAT-GUANO-F",
    "CANNON-F",
    "SCROLL-F",
    "V-FROTZ"
   ]
  },
  "BLORT-VIAL": {
   "name": "BLORT-VIAL",
   "file": "belboz.zil",
   "line": 718,
   "endLine": 726,
   "desc": "amber vial",
   "ldesc": null,
   "fdesc": null,
   "loc": "HIDDEN-CAVE",
   "flags": [
    "CONTBIT",
    "READBIT",
    "TRYTAKEBIT",
    "TAKEBIT",
    "VOWELBIT",
    "VIALBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "VIAL",
    "VIALS",
    "LABEL"
   ],
   "adjectives": [
    "AMBER",
    "BLORT"
   ],
   "action": "BLORT-VIAL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ],
    "CAPACITY": [
     "1"
    ]
   },
   "contents": [
    "BLORT-POTION"
   ],
   "source": "<OBJECT BLORT-VIAL\n\t(IN HIDDEN-CAVE)\n\t(DESC \"amber vial\")\n\t(SYNONYM VIAL VIALS LABEL)\n\t(ADJECTIVE AMBER BLORT)\n\t(FLAGS CONTBIT READBIT TRYTAKEBIT TAKEBIT VOWELBIT VIALBIT SEARCHBIT)\n\t(SIZE 3)\n\t(CAPACITY 1)\n\t(ACTION BLORT-VIAL-F)>",
   "referencedBy": [
    "BLORT-POTION-F"
   ]
  },
  "BLORT-POTION": {
   "name": "BLORT-POTION",
   "file": "belboz.zil",
   "line": 737,
   "endLine": 743,
   "desc": "amber potion",
   "ldesc": null,
   "fdesc": null,
   "loc": "BLORT-VIAL",
   "flags": [
    "NARTICLEBIT",
    "VOWELBIT"
   ],
   "synonyms": [
    "POTION"
   ],
   "adjectives": [
    "AMBER",
    "BLORT"
   ],
   "action": "BLORT-POTION-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BLORT-POTION\n\t(IN BLORT-VIAL)\n\t(DESC \"amber potion\")\n\t(SYNONYM POTION)\n\t(ADJECTIVE AMBER BLORT)\n\t(FLAGS NARTICLEBIT VOWELBIT)\n\t(ACTION BLORT-POTION-F)>",
   "referencedBy": [
    "BLORT-POTION-F",
    "I-UNBLORT",
    "V-PULVER"
   ]
  },
  "FWEEP-SCROLL": {
   "name": "FWEEP-SCROLL",
   "file": "belboz.zil",
   "line": 779,
   "endLine": 788,
   "desc": "soiled scroll",
   "ldesc": null,
   "fdesc": "Lying in the corner, in a pile of bat guano, is a scroll.",
   "loc": "HIDDEN-CAVE",
   "flags": [
    "READBIT",
    "SCROLLBIT",
    "TRYTAKEBIT",
    "TAKEBIT",
    "CONTBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "SCROLL"
   ],
   "adjectives": [
    "SOILED"
   ],
   "action": "SCROLL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ]
   },
   "contents": [
    "FWEEP-SPELL"
   ],
   "source": "<OBJECT FWEEP-SCROLL\n\t(IN HIDDEN-CAVE)\n\t(DESC \"soiled scroll\")\n\t(FDESC\n\"Lying in the corner, in a pile of bat guano, is a scroll.\")\n\t(SYNONYM SCROLL)\n\t(ADJECTIVE SOILED)\n\t(FLAGS READBIT SCROLLBIT TRYTAKEBIT TAKEBIT CONTBIT TRANSBIT)\n\t(SIZE 3)\n\t(ACTION SCROLL-F)>\t",
   "referencedBy": [
    "BAT-GUANO-F",
    "SCROLL-F",
    "V-FROTZ"
   ]
  },
  "FWEEP-SPELL": {
   "name": "FWEEP-SPELL",
   "file": "belboz.zil",
   "line": 790,
   "endLine": 799,
   "desc": "fweep spell",
   "ldesc": null,
   "fdesc": null,
   "loc": "FWEEP-SCROLL",
   "flags": [
    "NDESCBIT",
    "SPELLBIT"
   ],
   "synonyms": [
    "SPELLS",
    "SPELL"
   ],
   "adjectives": [
    "FWEEP"
   ],
   "action": "SPELL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "turn caster into a bat"
    ],
    "COUNT": [
     "0"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT FWEEP-SPELL\n\t(IN FWEEP-SCROLL)\n\t(SYNONYM SPELLS SPELL)\n\t(ADJECTIVE FWEEP)\n\t(DESC \"fweep spell\")\n\t(TEXT \"turn caster into a bat\")\n\t(COUNT 0)\n\t(SIZE 1)\n\t(FLAGS NDESCBIT SPELLBIT)\n\t(ACTION SPELL-F)>",
   "referencedBy": [
    "SPELL-CHECK",
    "PRE-CAST",
    "V-CAST"
   ]
  },
  "MOAT": {
   "name": "MOAT",
   "file": "belboz.zil",
   "line": 874,
   "endLine": 879,
   "desc": "moat",
   "ldesc": null,
   "fdesc": null,
   "loc": "DRAWBRIDGE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "MOAT"
   ],
   "adjectives": [],
   "action": "MOAT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MOAT\n\t(IN DRAWBRIDGE)\n\t(DESC \"moat\")\n\t(SYNONYM MOAT)\n\t(FLAGS NDESCBIT)\n\t(ACTION MOAT-F)>",
   "referencedBy": [
    "BRIDGE-F",
    "WATER-F",
    "WATER-IS-PRSI"
   ]
  },
  "BRIDGE": {
   "name": "BRIDGE",
   "file": "belboz.zil",
   "line": 897,
   "endLine": 903,
   "desc": "wooden drawbridge",
   "ldesc": null,
   "fdesc": null,
   "loc": "DRAWBRIDGE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BRIDGE",
    "DRAWBR"
   ],
   "adjectives": [
    "ROTTED",
    "WOODEN",
    "DRAW"
   ],
   "action": "BRIDGE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BRIDGE\n\t(IN DRAWBRIDGE)\n\t(DESC \"wooden drawbridge\")\n\t(SYNONYM BRIDGE DRAWBR)\n\t(ADJECTIVE ROTTED WOODEN DRAW)\n\t(FLAGS NDESCBIT)\n\t(ACTION BRIDGE-F)>",
   "referencedBy": []
  },
  "TORTURE-DEVICES": {
   "name": "TORTURE-DEVICES",
   "file": "belboz.zil",
   "line": 975,
   "endLine": 981,
   "desc": "torture devices",
   "ldesc": null,
   "fdesc": null,
   "loc": "TORTURE-CHAMBER",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "DEVICE",
    "RACK",
    "PIT",
    "PENDUL"
   ],
   "adjectives": [
    "TORTUR"
   ],
   "action": "TORTURE-DEVICES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TORTURE-DEVICES\n\t(IN TORTURE-CHAMBER)\n\t(DESC \"torture devices\")\n\t(SYNONYM DEVICE RACK PIT PENDUL)\n\t(ADJECTIVE TORTUR)\n\t(FLAGS NDESCBIT)\n\t(ACTION TORTURE-DEVICES-F)>",
   "referencedBy": []
  },
  "FLAXO-VIAL": {
   "name": "FLAXO-VIAL",
   "file": "belboz.zil",
   "line": 989,
   "endLine": 1000,
   "desc": "indigo vial",
   "ldesc": null,
   "fdesc": "Sitting near one of the torture devices is an indigo vial, labelled\nin tiny letters.",
   "loc": "TORTURE-CHAMBER",
   "flags": [
    "CONTBIT",
    "READBIT",
    "TAKEBIT",
    "VOWELBIT",
    "VIALBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "VIAL",
    "VIALS",
    "LETTER",
    "LABEL"
   ],
   "adjectives": [
    "INDIGO",
    "FLAXO",
    "TINY"
   ],
   "action": "FLAXO-VIAL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ],
    "CAPACITY": [
     "1"
    ]
   },
   "contents": [
    "FLAXO-POTION"
   ],
   "source": "<OBJECT FLAXO-VIAL\n\t(IN TORTURE-CHAMBER)\n\t(DESC \"indigo vial\")\n\t(FDESC\n\"Sitting near one of the torture devices is an indigo vial, labelled\nin tiny letters.\")\n\t(SYNONYM VIAL VIALS LETTER LABEL)\n\t(ADJECTIVE INDIGO FLAXO TINY)\n\t(FLAGS CONTBIT READBIT TAKEBIT VOWELBIT VIALBIT SEARCHBIT)\n\t(SIZE 3)\n\t(CAPACITY 1)\n\t(ACTION FLAXO-VIAL-F)>",
   "referencedBy": [
    "FLAXO-POTION-F"
   ]
  },
  "FLAXO-POTION": {
   "name": "FLAXO-POTION",
   "file": "belboz.zil",
   "line": 1011,
   "endLine": 1017,
   "desc": "indigo potion",
   "ldesc": null,
   "fdesc": null,
   "loc": "FLAXO-VIAL",
   "flags": [
    "NARTICLEBIT",
    "VOWELBIT"
   ],
   "synonyms": [
    "POTION"
   ],
   "adjectives": [
    "FLAXO",
    "INDIGO"
   ],
   "action": "FLAXO-POTION-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FLAXO-POTION\n\t(IN FLAXO-VIAL)\n\t(DESC \"indigo potion\")\n\t(SYNONYM POTION)\n\t(ADJECTIVE FLAXO INDIGO)\n\t(FLAGS NARTICLEBIT VOWELBIT)\n\t(ACTION FLAXO-POTION-F)>",
   "referencedBy": [
    "FLAXO-POTION-F",
    "V-PULVER"
   ]
  },
  "GATE": {
   "name": "GATE",
   "file": "belboz.zil",
   "line": 1131,
   "endLine": 1137,
   "desc": "toll gate",
   "ldesc": null,
   "fdesc": null,
   "loc": "TOLL-GATE",
   "flags": [
    "NDESCBIT",
    "DOORBIT"
   ],
   "synonyms": [
    "GATE"
   ],
   "adjectives": [
    "TOLL",
    "STURDY"
   ],
   "action": "GATE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GATE\n\t(IN TOLL-GATE)\n\t(DESC \"toll gate\")\n\t(SYNONYM GATE)\n\t(ADJECTIVE TOLL STURDY)\n\t(FLAGS NDESCBIT DOORBIT)\n\t(ACTION GATE-F)>",
   "referencedBy": [
    "TOLL-GATE-CROSSING-F",
    "GATE-F",
    "BOOTH-F",
    "GNOME-F"
   ]
  },
  "BOOTH": {
   "name": "BOOTH",
   "file": "belboz.zil",
   "line": 1168,
   "endLine": 1174,
   "desc": "toll booth",
   "ldesc": null,
   "fdesc": null,
   "loc": "TOLL-GATE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BOOTH"
   ],
   "adjectives": [
    "TOLL"
   ],
   "action": "BOOTH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BOOTH\n\t(IN TOLL-GATE)\n\t(DESC \"toll booth\")\n\t(SYNONYM BOOTH)\n\t(ADJECTIVE TOLL)\n\t(FLAGS NDESCBIT)\n\t(ACTION BOOTH-F)>",
   "referencedBy": [
    "BOOTH-F"
   ]
  },
  "GNOME": {
   "name": "GNOME",
   "file": "belboz.zil",
   "line": 1192,
   "endLine": 1199,
   "desc": "gnome",
   "ldesc": null,
   "fdesc": null,
   "loc": "TOLL-GATE",
   "flags": [
    "ACTORBIT"
   ],
   "synonyms": [
    "GNOME",
    "BEARD",
    "POCKET"
   ],
   "adjectives": [
    "FAT",
    "OLD",
    "LONG",
    "WHITE",
    "GNOME"
   ],
   "action": "GNOME-F",
   "descfcn": "GNOME-DESCFCN",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GNOME\n\t(IN TOLL-GATE)\n\t(DESC \"gnome\")\n\t(SYNONYM GNOME BEARD POCKET)\n\t(ADJECTIVE FAT OLD LONG WHITE GNOME)\n\t(FLAGS ACTORBIT)\n\t(DESCFCN GNOME-DESCFCN)\n\t(ACTION GNOME-F)>",
   "referencedBy": [
    "GNOME-F",
    "V-TELL",
    "V-YELL",
    "V-FROTZ"
   ]
  },
  "WAXER": {
   "name": "WAXER",
   "file": "belboz.zil",
   "line": 1372,
   "endLine": 1379,
   "desc": "floor waxer",
   "ldesc": null,
   "fdesc": null,
   "loc": "STORE",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "WAXER",
    "APPLIA"
   ],
   "adjectives": [
    "FLOOR"
   ],
   "action": "WAXER-F",
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
   "source": "<OBJECT WAXER\n\t(IN STORE)\n\t(DESC \"floor waxer\")\n\t(SYNONYM WAXER APPLIA)\n\t(ADJECTIVE FLOOR)\n\t(FLAGS TAKEBIT)\n\t(SIZE 50)\n\t(ACTION WAXER-F)>",
   "referencedBy": [
    "WAXER-F",
    "V-WAX"
   ]
  },
  "ZORKMID-TREE": {
   "name": "ZORKMID-TREE",
   "file": "belboz.zil",
   "line": 1570,
   "endLine": 1579,
   "desc": "zorkmid tree",
   "ldesc": "Growing in the center of the room is a tree, thick with foliage. As\nthough to disprove the ancient adage, every branch, bow, and twig has\na zorkmid coin growing on it.",
   "fdesc": null,
   "loc": "TREE-ROOM",
   "flags": [],
   "synonyms": [
    "TREE",
    "BRANCH",
    "BOW",
    "TWIG"
   ],
   "adjectives": [
    "ZORKMID"
   ],
   "action": "ZORKMID-TREE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ZORKMID-TREE\n\t(IN TREE-ROOM)\n\t(DESC \"zorkmid tree\")\n\t(LDESC\n\"Growing in the center of the room is a tree, thick with foliage. As\nthough to disprove the ancient adage, every branch, bow, and twig has\na zorkmid coin growing on it.\")\n\t(SYNONYM TREE BRANCH BOW TWIG)\n\t(ADJECTIVE ZORKMID)\n\t(ACTION ZORKMID-TREE-F)>",
   "referencedBy": [
    "ZORKMID-F",
    "PRE-RESEARCH"
   ]
  },
  "ZORKMID": {
   "name": "ZORKMID",
   "file": "belboz.zil",
   "line": 1590,
   "endLine": 1597,
   "desc": "zorkmid coin",
   "ldesc": null,
   "fdesc": null,
   "loc": "TREE-ROOM",
   "flags": [
    "TAKEBIT",
    "TRYTAKEBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "ZORKMID",
    "COIN",
    "COINS",
    "TOLL"
   ],
   "adjectives": [
    "ZORKMID"
   ],
   "action": "ZORKMID-F",
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
   "source": "<OBJECT ZORKMID\n\t(IN TREE-ROOM)\n\t(DESC \"zorkmid coin\")\n\t(SYNONYM ZORKMID COIN COINS TOLL)\n\t(ADJECTIVE ZORKMID)\n\t(SIZE 3)\n\t(FLAGS TAKEBIT TRYTAKEBIT NDESCBIT)\n\t(ACTION ZORKMID-F)>",
   "referencedBy": [
    "GNOME-F",
    "ZORKMID-F",
    "PARK-GNOME-F",
    "LEVER-PSEUDO",
    "V-PAY"
   ]
  },
  "DRAGON": {
   "name": "DRAGON",
   "file": "belboz.zil",
   "line": 1676,
   "endLine": 1682,
   "desc": "carving of a dragon",
   "ldesc": null,
   "fdesc": null,
   "loc": "HALL-OF-CARVINGS",
   "flags": [
    "NDESCBIT",
    "VOWELBIT"
   ],
   "synonyms": [
    "CARVIN",
    "DRAGON"
   ],
   "adjectives": [
    "HUGE",
    "STONE",
    "SLEEPI",
    "LARGES",
    "MOST",
    "STRIKI",
    "INTRIC"
   ],
   "action": "DRAGON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DRAGON\n\t(IN HALL-OF-CARVINGS)\n\t(DESC \"carving of a dragon\")\n\t(SYNONYM CARVIN DRAGON)\n\t(ADJECTIVE HUGE STONE SLEEPI LARGES MOST STRIKI INTRIC)\n\t(FLAGS NDESCBIT VOWELBIT)\n\t(ACTION DRAGON-F)>",
   "referencedBy": []
  },
  "COAL": {
   "name": "COAL",
   "file": "coal.zil",
   "line": 5,
   "endLine": 10,
   "desc": "lumps of coal",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "NARTICLEBIT"
   ],
   "synonyms": [
    "LUMPS",
    "COAL"
   ],
   "adjectives": [],
   "action": "COAL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT COAL\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"lumps of coal\")\n\t(SYNONYM LUMPS COAL)\n\t(FLAGS NDESCBIT NARTICLEBIT)\n\t(ACTION COAL-F)>",
   "referencedBy": []
  },
  "COAL-BIN": {
   "name": "COAL-BIN",
   "file": "coal.zil",
   "line": 115,
   "endLine": 121,
   "desc": "coal bin",
   "ldesc": null,
   "fdesc": null,
   "loc": "COAL-BIN-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BIN"
   ],
   "adjectives": [
    "LARGE",
    "COAL"
   ],
   "action": "COAL-BIN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT COAL-BIN\n\t(IN COAL-BIN-ROOM)\n\t(DESC \"coal bin\")\n\t(SYNONYM BIN)\n\t(ADJECTIVE LARGE COAL)\n\t(FLAGS NDESCBIT)\n\t(ACTION COAL-BIN-F)>",
   "referencedBy": [
    "ROPE-F"
   ]
  },
  "UPPER-CHUTE": {
   "name": "UPPER-CHUTE",
   "file": "coal.zil",
   "line": 129,
   "endLine": 135,
   "desc": "upper coal chute",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "VOWELBIT"
   ],
   "synonyms": [
    "CHUTE"
   ],
   "adjectives": [
    "UPPER",
    "COAL",
    "METAL"
   ],
   "action": "UPPER-CHUTE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT UPPER-CHUTE\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"upper coal chute\")\n\t(SYNONYM CHUTE)\n\t(ADJECTIVE UPPER COAL METAL)\n\t(FLAGS VOWELBIT)\n\t(ACTION UPPER-CHUTE-F)>",
   "referencedBy": [
    "UPPER-CHUTE-F",
    "BEAM-F",
    "ME-F",
    "PRE-RESEARCH"
   ]
  },
  "LOWER-CHUTE": {
   "name": "LOWER-CHUTE",
   "file": "coal.zil",
   "line": 137,
   "endLine": 142,
   "desc": "lower coal chute",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "CHUTE"
   ],
   "adjectives": [
    "LOWER",
    "COAL",
    "METAL"
   ],
   "action": "LOWER-CHUTE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LOWER-CHUTE\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"lower coal chute\")\n\t(SYNONYM CHUTE)\n\t(ADJECTIVE LOWER COAL METAL)\n\t(ACTION LOWER-CHUTE-F)>",
   "referencedBy": [
    "LOWER-CHUTE-F",
    "YOUNGER-ACTIONS",
    "BEAM-F",
    "ME-F",
    "PRE-RESEARCH"
   ]
  },
  "OLDER-SELF": {
   "name": "OLDER-SELF",
   "file": "coal.zil",
   "line": 249,
   "endLine": 255,
   "desc": "your older self",
   "ldesc": null,
   "fdesc": null,
   "loc": "DIAL",
   "flags": [
    "ACTORBIT",
    "NARTICLEBIT",
    "CONTBIT",
    "OPENBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "STRANG",
    "SELF",
    "OLDER",
    "TWIN"
   ],
   "adjectives": [
    "YOUR",
    "MY",
    "OLDER"
   ],
   "action": "OLDER-SELF-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "VARDIK-SCROLL"
   ],
   "source": "<OBJECT OLDER-SELF\n\t(IN DIAL)\n\t(DESC \"your older self\")\n\t(SYNONYM STRANG SELF OLDER TWIN)\n\t(ADJECTIVE YOUR MY OLDER)\n\t(FLAGS ACTORBIT NARTICLEBIT CONTBIT OPENBIT SEARCHBIT)\n\t(ACTION OLDER-SELF-F)>",
   "referencedBy": [
    "OLDER-SELF-F",
    "I-OLDER-SELF",
    "SPELL-BOOK-PASS-OFF-CHECK",
    "YOUNGER-ACTIONS",
    "ITAKE",
    "DESCRIBE-OBJECT"
   ]
  },
  "YOU-OBJECT": {
   "name": "YOU-OBJECT",
   "file": "coal.zil",
   "line": 394,
   "endLine": 397,
   "desc": "you",
   "ldesc": null,
   "fdesc": null,
   "loc": "DIAL",
   "flags": [
    "NARTICLEBIT",
    "NDESCBIT"
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
   "source": "<OBJECT YOU-OBJECT\n\t(IN DIAL)\n\t(DESC \"you\")\n\t(FLAGS NARTICLEBIT NDESCBIT)>",
   "referencedBy": [
    "YOUNGER-ACTIONS"
   ]
  },
  "YOUNGER-SELF": {
   "name": "YOUNGER-SELF",
   "file": "coal.zil",
   "line": 399,
   "endLine": 406,
   "desc": "your younger self",
   "ldesc": null,
   "fdesc": null,
   "loc": "DIAL",
   "flags": [
    "ACTORBIT",
    "NARTICLEBIT",
    "CONTBIT",
    "OPENBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "SELF",
    "YOUNGE",
    "TWIN"
   ],
   "adjectives": [
    "YOUR",
    "YOUNGE",
    "MY"
   ],
   "action": "YOUNGER-SELF-F",
   "descfcn": "YOUNGER-SELF-DESCFCN",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT YOUNGER-SELF\n\t(IN DIAL)\n\t(DESC \"your younger self\")\n\t(SYNONYM SELF YOUNGE TWIN)\n\t(ADJECTIVE YOUR YOUNGE MY)\n\t(FLAGS ACTORBIT NARTICLEBIT CONTBIT OPENBIT SEARCHBIT)\n\t(DESCFCN YOUNGER-SELF-DESCFCN)\n\t(ACTION YOUNGER-SELF-F)>",
   "referencedBy": [
    "COAL-BIN-ROOM-F",
    "I-OLDER-SELF",
    "YOUNGER-SELF-F",
    "YOUNGER-SELF-DESCFCN",
    "I-YOUNGER-SELF",
    "YOUNGER-ACTIONS",
    "ME-F",
    "V-ASK-FOR",
    "V-COMBO",
    "ITAKE"
   ]
  },
  "DIAL-DOOR": {
   "name": "DIAL-DOOR",
   "file": "coal.zil",
   "line": 669,
   "endLine": 681,
   "desc": "heavy door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "READBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR",
    "DOORS",
    "SIGN"
   ],
   "adjectives": [
    "HEAVY"
   ],
   "action": "DIAL-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "\"See the foreman for the current combination.|\n|\n(signed)|\nErnie Flathead, Manager|\nGUE Coal Mine #502\""
    ]
   },
   "contents": [],
   "source": "<OBJECT DIAL-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"heavy door\")\n\t(SYNONYM DOOR DOORS SIGN)\n\t(ADJECTIVE HEAVY)\n\t(FLAGS DOORBIT READBIT NDESCBIT)\n\t(TEXT\n\"\\\"See the foreman for the current combination.|\n|\n(signed)|\nErnie Flathead, Manager|\nGUE Coal Mine #502\\\"\")\n\t(ACTION DIAL-DOOR-F)>",
   "referencedBy": [
    "DIAL-DOOR-F",
    "ME-F"
   ]
  },
  "DIAL": {
   "name": "DIAL",
   "file": "coal.zil",
   "line": 707,
   "endLine": 713,
   "desc": "combination dial",
   "ldesc": null,
   "fdesc": null,
   "loc": "DIAL-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "DIAL"
   ],
   "adjectives": [
    "COMBIN"
   ],
   "action": "DIAL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "OLDER-SELF",
    "YOU-OBJECT",
    "YOUNGER-SELF",
    "TROGLODYTE",
    "CRATE",
    "FOOBLE-VIAL",
    "YONK-SCROLL",
    "HELISTAR",
    "FROBAR",
    "IMPLEMENTOR",
    "SPELL-BOOK",
    "KEY",
    "MAGAZINE",
    "VILSTU-VIAL",
    "DORN-BEAST",
    "DORN-BEAST-CORPSE",
    "PARK-GNOME",
    "MALYON-SCROLL"
   ],
   "source": "<OBJECT DIAL\n\t(IN DIAL-ROOM)\n\t(DESC \"combination dial\")\n\t(SYNONYM DIAL)\n\t(ADJECTIVE COMBIN)\n\t(FLAGS NDESCBIT)\n\t(ACTION DIAL-F)>",
   "referencedBy": [
    "I-HELLHOUND",
    "MEADOW-OBJECT-F",
    "RIVER-F",
    "FLOOD-LOOP",
    "BLORT-POTION-F",
    "FLAXO-POTION-F",
    "GNOME-F",
    "WAXER-F",
    "ZORKMID-F",
    "UPPER-CHUTE-F",
    "I-OLDER-SELF",
    "YOUNGER-ACTIONS",
    "DIAL-DOOR-F",
    "I-TROGLODYTE",
    "COVE-F",
    "OCEAN-F",
    "SPENSEWEEDS-F",
    "VINES-F",
    "FOOBLE-POTION-F",
    "CANNON-F",
    "WEAR-OFF-SPELLS",
    "POTION-POUR",
    "MORGIA-PLANT-F",
    "I-MAILMAN",
    "VILSTU-POTION-F",
    "BERZIO-POTION-F",
    "MAZE-TO-TABLE",
    "HOLLOW-F",
    "I-DORN-BEAST",
    "I-PARK-GNOME",
    "PARK-GNOME-F",
    "BALL-F",
    "V-CUT",
    "V-DROP",
    "V-THROW",
    "PRE-CAST",
    "V-GNUSTO",
    "V-PULVER",
    "V-GOLMAC",
    "IDROP",
    "RANDOMIZE-OBJECTS",
    "KILL-INTERRUPTS",
    "ROB",
    "BURIED-IN-COAL"
   ]
  },
  "ROPE": {
   "name": "ROPE",
   "file": "coal.zil",
   "line": 743,
   "endLine": 750,
   "desc": "rope",
   "ldesc": null,
   "fdesc": "Lying in one corner is a coil of rope.",
   "loc": "SHAFT-BOTTOM",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "COIL",
    "ROPE"
   ],
   "adjectives": [],
   "action": "ROPE-F",
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
   "source": "<OBJECT ROPE\n\t(IN SHAFT-BOTTOM)\n\t(DESC \"rope\")\n\t(FDESC \"Lying in one corner is a coil of rope.\")\n\t(SYNONYM COIL ROPE)\n\t(FLAGS TAKEBIT)\n\t(SIZE 20)\n\t(ACTION ROPE-F)>",
   "referencedBy": [
    "UPPER-CHUTE-F",
    "LOWER-CHUTE-F",
    "ROPE-F",
    "SHAFT-PSEUDO",
    "COVE-F",
    "ME-F",
    "V-TAKE",
    "PARANTHETICAL-NOTES",
    "ROPE-BEAM-CHECK"
   ]
  },
  "BEAM": {
   "name": "BEAM",
   "file": "coal.zil",
   "line": 854,
   "endLine": 864,
   "desc": "beam of wood",
   "ldesc": null,
   "fdesc": "Lying near the mouth of one passage is a wooden timber, probably left over\nfrom the construction of the mine.",
   "loc": "COAL-MINE-1",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "BEAM",
    "WOOD",
    "TIMBER"
   ],
   "adjectives": [
    "WOODEN"
   ],
   "action": "BEAM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "40"
    ]
   },
   "contents": [],
   "source": "<OBJECT BEAM\n\t(IN COAL-MINE-1)\n\t(DESC \"beam of wood\")\n\t(FDESC\n\"Lying near the mouth of one passage is a wooden timber, probably left over\nfrom the construction of the mine.\")\n\t(SYNONYM BEAM WOOD TIMBER)\n\t(ADJECTIVE WOODEN)\n\t(SIZE 40)\n\t(FLAGS TAKEBIT)\n\t(ACTION BEAM-F)>",
   "referencedBy": [
    "UPPER-CHUTE-F",
    "LOWER-CHUTE-F",
    "DROP-BEAM-FIRST",
    "ROPE-F",
    "SHAFT-PSEUDO",
    "BEAM-F",
    "COVE-F",
    "ME-F",
    "V-TAKE",
    "ROPE-BEAM-CHECK"
   ]
  },
  "TROGLODYTE": {
   "name": "TROGLODYTE",
   "file": "coal.zil",
   "line": 961,
   "endLine": 966,
   "desc": "troglodyte",
   "ldesc": null,
   "fdesc": null,
   "loc": "DIAL",
   "flags": [
    "ACTORBIT"
   ],
   "synonyms": [
    "TROGLO"
   ],
   "adjectives": [],
   "action": "TROGLODYTE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TROGLODYTE\n\t(IN DIAL)\n\t(DESC \"troglodyte\")\n\t(SYNONYM TROGLO)\n\t(FLAGS ACTORBIT)\n\t(ACTION TROGLODYTE-F)>",
   "referencedBy": [
    "TOP-OF-CHUTE-F",
    "I-TROGLODYTE",
    "TROGLODYTE-F"
   ]
  },
  "KEROSENE-LAMP": {
   "name": "KEROSENE-LAMP",
   "file": "coal.zil",
   "line": 1053,
   "endLine": 1061,
   "desc": "kerosene lamp",
   "ldesc": null,
   "fdesc": null,
   "loc": "SLANTED-ROOM",
   "flags": [
    "ONBIT",
    "CONTBIT",
    "OPENBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "LAMP",
    "DOOR",
    "COMPAR",
    "BOWL"
   ],
   "adjectives": [
    "KEROSE",
    "SMALL",
    "METAL",
    "GLASS"
   ],
   "action": "KEROSENE-LAMP-F",
   "descfcn": "KEROSENE-LAMP-DESCFCN",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT KEROSENE-LAMP\n\t(IN SLANTED-ROOM)\n\t(DESC \"kerosene lamp\")\t\n\t(SYNONYM LAMP DOOR COMPAR BOWL)\n\t(ADJECTIVE KEROSE SMALL METAL GLASS)\n\t(FLAGS ONBIT CONTBIT OPENBIT SEARCHBIT)\n\t(CAPACITY 5)\n\t(DESCFCN KEROSENE-LAMP-DESCFCN)\n\t(ACTION KEROSENE-LAMP-F)>",
   "referencedBy": [
    "LAMP-PSEUDO",
    "KEROSENE-LAMP-DESCFCN",
    "ME-F"
   ]
  },
  "VARDIK-SCROLL": {
   "name": "VARDIK-SCROLL",
   "file": "coal.zil",
   "line": 1081,
   "endLine": 1088,
   "desc": "smelly scroll",
   "ldesc": null,
   "fdesc": null,
   "loc": "OLDER-SELF",
   "flags": [
    "TAKEBIT",
    "TRANSBIT",
    "CONTBIT",
    "READBIT",
    "SCROLLBIT"
   ],
   "synonyms": [
    "SCROLL"
   ],
   "adjectives": [
    "SMELLY"
   ],
   "action": "SCROLL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ]
   },
   "contents": [
    "VARDIK-SPELL"
   ],
   "source": "<OBJECT VARDIK-SCROLL\n\t(IN OLDER-SELF)\n\t(DESC \"smelly scroll\")\n\t(SYNONYM SCROLL)\n\t(ADJECTIVE SMELLY)\n\t(SIZE 3)\n\t(FLAGS TAKEBIT TRANSBIT CONTBIT READBIT SCROLLBIT)\n\t(ACTION SCROLL-F)>",
   "referencedBy": [
    "I-OLDER-SELF",
    "SHAFT-BOTTOM-F",
    "COVE-F",
    "ME-F",
    "SCORE-OBJECT"
   ]
  },
  "VARDIK-SPELL": {
   "name": "VARDIK-SPELL",
   "file": "coal.zil",
   "line": 1090,
   "endLine": 1099,
   "desc": "vardik spell",
   "ldesc": null,
   "fdesc": null,
   "loc": "VARDIK-SCROLL",
   "flags": [
    "NDESCBIT",
    "SPELLBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "SPELLS",
    "SPELL"
   ],
   "adjectives": [
    "VARDIK"
   ],
   "action": "SPELL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "shield a mind from an evil spirit"
    ],
    "SIZE": [
     "1"
    ],
    "COUNT": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT VARDIK-SPELL\n\t(IN VARDIK-SCROLL)\n\t(SYNONYM SPELLS SPELL)\n\t(ADJECTIVE VARDIK)\n\t(DESC \"vardik spell\")\n\t(TEXT \"shield a mind from an evil spirit\")\n\t(SIZE 1)\n\t(COUNT 0)\n\t(FLAGS NDESCBIT SPELLBIT INVISIBLE)\n\t(ACTION SPELL-F)>",
   "referencedBy": [
    "CHUTE-EXIT-F",
    "SPELL-CHECK",
    "PRE-CAST",
    "V-CAST"
   ]
  },
  "GOLMAC-SCROLL": {
   "name": "GOLMAC-SCROLL",
   "file": "coal.zil",
   "line": 1101,
   "endLine": 1108,
   "desc": "shimmering scroll",
   "ldesc": null,
   "fdesc": null,
   "loc": "SLANTED-ROOM",
   "flags": [
    "TAKEBIT",
    "TRANSBIT",
    "CONTBIT",
    "READBIT",
    "SCROLLBIT"
   ],
   "synonyms": [
    "SCROLL"
   ],
   "adjectives": [
    "SHIMME"
   ],
   "action": "SCROLL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ]
   },
   "contents": [
    "GOLMAC-SPELL"
   ],
   "source": "<OBJECT GOLMAC-SCROLL\n\t(IN SLANTED-ROOM)\n\t(DESC \"shimmering scroll\")\n\t(SYNONYM SCROLL)\n\t(ADJECTIVE SHIMME)\n\t(SIZE 3)\n\t(FLAGS TAKEBIT TRANSBIT CONTBIT READBIT SCROLLBIT)\n\t(ACTION SCROLL-F)>",
   "referencedBy": [
    "SLANTED-ROOM-EXIT-F",
    "COVE-F",
    "ME-F"
   ]
  },
  "GOLMAC-SPELL": {
   "name": "GOLMAC-SPELL",
   "file": "coal.zil",
   "line": 1110,
   "endLine": 1119,
   "desc": "golmac spell",
   "ldesc": null,
   "fdesc": null,
   "loc": "GOLMAC-SCROLL",
   "flags": [
    "NDESCBIT",
    "SPELLBIT"
   ],
   "synonyms": [
    "SPELLS",
    "SPELL"
   ],
   "adjectives": [
    "GOLMAC"
   ],
   "action": "SPELL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "travel temporally"
    ],
    "SIZE": [
     "1"
    ],
    "COUNT": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT GOLMAC-SPELL\n\t(IN GOLMAC-SCROLL)\n\t(SYNONYM SPELLS SPELL)\n\t(ADJECTIVE GOLMAC)\n\t(DESC \"golmac spell\")\n\t(TEXT \"travel temporally\")\n\t(SIZE 1)\n\t(COUNT 0)\n\t(FLAGS NDESCBIT SPELLBIT)\n\t(ACTION SPELL-F)>",
   "referencedBy": [
    "SPELL-CHECK",
    "PRE-CAST",
    "V-CAST"
   ]
  },
  "BEACH": {
   "name": "BEACH",
   "file": "end.zil",
   "line": 126,
   "endLine": 131,
   "desc": "beach",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BEACH",
    "SHORE",
    "SAND"
   ],
   "adjectives": [
    "CURVED",
    "SANDY",
    "NARROW"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BEACH\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"beach\")\n\t(SYNONYM BEACH SHORE SAND)\n\t(ADJECTIVE CURVED SANDY NARROW)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "OCEAN": {
   "name": "OCEAN",
   "file": "end.zil",
   "line": 133,
   "endLine": 139,
   "desc": "ocean",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "VOWELBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "OCEAN",
    "WATERS"
   ],
   "adjectives": [
    "MIGHTY",
    "FLATHE",
    "TURBUL"
   ],
   "action": "OCEAN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT OCEAN\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"ocean\")\n\t(SYNONYM OCEAN WATERS)\n        (ADJECTIVE MIGHTY FLATHE TURBUL)\n\t(FLAGS VOWELBIT NDESCBIT)\n\t(ACTION OCEAN-F)>",
   "referencedBy": [
    "OCEAN-F",
    "WATER-F",
    "WATER-IS-PRSI",
    "V-RESEARCH"
   ]
  },
  "LAGOON-OBJECT": {
   "name": "LAGOON-OBJECT",
   "file": "end.zil",
   "line": 172,
   "endLine": 178,
   "desc": "lagoon",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "LAGOON",
    "INLET",
    "COVE"
   ],
   "adjectives": [
    "SMALL",
    "CALM"
   ],
   "action": "LAGOON-OBJECT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LAGOON-OBJECT\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"lagoon\")\n\t(SYNONYM LAGOON INLET COVE)\n\t(ADJECTIVE SMALL CALM)\n\t(FLAGS NDESCBIT)\n\t(ACTION LAGOON-OBJECT-F)>",
   "referencedBy": [
    "OCEAN-F",
    "LAGOON-OBJECT-F",
    "WATER-F",
    "WATER-IS-PRSI",
    "V-SWIM"
   ]
  },
  "SPENSEWEEDS": {
   "name": "SPENSEWEEDS",
   "file": "end.zil",
   "line": 313,
   "endLine": 322,
   "desc": "spenseweeds",
   "ldesc": "Nestled among some coral is a clump of stunningly beautiful spenseweeds,\nwaving slowly in the currents of the lagoon.",
   "fdesc": null,
   "loc": "LAGOON-FLOOR",
   "flags": [
    "NARTICLEBIT"
   ],
   "synonyms": [
    "CLUMP",
    "SPENSE",
    "WEEDS",
    "WEED"
   ],
   "adjectives": [
    "SEA",
    "STUNNI",
    "BEAUTI"
   ],
   "action": "SPENSEWEEDS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SPENSEWEEDS\n\t(IN LAGOON-FLOOR)\n\t(DESC \"spenseweeds\")\n\t(LDESC\n\"Nestled among some coral is a clump of stunningly beautiful spenseweeds,\nwaving slowly in the currents of the lagoon.\")\n\t(SYNONYM CLUMP SPENSE WEEDS WEED)\n\t(ADJECTIVE SEA STUNNI BEAUTI)\n\t(FLAGS NARTICLEBIT)\n\t(ACTION SPENSEWEEDS-F)>",
   "referencedBy": [
    "CORAL-PSEUDO",
    "SPENSEWEEDS-F"
   ]
  },
  "CRATE": {
   "name": "CRATE",
   "file": "end.zil",
   "line": 336,
   "endLine": 344,
   "desc": "wooden crate",
   "ldesc": null,
   "fdesc": null,
   "loc": "DIAL",
   "flags": [
    "TAKEBIT",
    "CONTBIT",
    "READBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "LETTER",
    "CRATE",
    "LABEL"
   ],
   "adjectives": [
    "WOOD",
    "WOODEN",
    "BLACK",
    "STENCI"
   ],
   "action": "CRATE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "45"
    ],
    "CAPACITY": [
     "40"
    ]
   },
   "contents": [
    "GRUE-SUIT",
    "BRASS-LANTERN",
    "GRUE-REPELLENT"
   ],
   "source": "<OBJECT CRATE\n\t(IN DIAL)\n\t(DESC \"wooden crate\")\n\t(SYNONYM LETTER CRATE LABEL)\n\t(ADJECTIVE WOOD WOODEN BLACK STENCI)\n\t(SIZE 45)\n\t(CAPACITY 40)\n\t(FLAGS TAKEBIT CONTBIT READBIT SEARCHBIT)\n\t(ACTION CRATE-F)>",
   "referencedBy": [
    "SPENSEWEEDS-F"
   ]
  },
  "GRUE-SUIT": {
   "name": "GRUE-SUIT",
   "file": "end.zil",
   "line": 371,
   "endLine": 377,
   "desc": "grue suit",
   "ldesc": null,
   "fdesc": null,
   "loc": "CRATE",
   "flags": [
    "WEARBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "SUIT"
   ],
   "adjectives": [
    "GRUE"
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
   "source": "<OBJECT GRUE-SUIT\n\t(IN CRATE)\n\t(DESC \"grue suit\")\n\t(SYNONYM SUIT)\n\t(ADJECTIVE GRUE)\n\t(FLAGS WEARBIT TAKEBIT)\n\t(SIZE 15)>",
   "referencedBy": [
    "GRUE-LAIR-F",
    "MUTATED-GRUES-DESCFCN",
    "SWANZO-BELBOZ",
    "GOTO"
   ]
  },
  "BRASS-LANTERN": {
   "name": "BRASS-LANTERN",
   "file": "end.zil",
   "line": 379,
   "endLine": 386,
   "desc": "brass lantern",
   "ldesc": null,
   "fdesc": null,
   "loc": "CRATE",
   "flags": [
    "TAKEBIT",
    "LIGHTBIT"
   ],
   "synonyms": [
    "LANTERN",
    "LAMP"
   ],
   "adjectives": [
    "BRASS",
    "BATTER",
    "POWERE"
   ],
   "action": "BRASS-LANTERN-F",
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
   "source": "<OBJECT BRASS-LANTERN\n\t(IN CRATE)\n\t(DESC \"brass lantern\")\n\t(SYNONYM LANTERN LAMP)\n\t(ADJECTIVE BRASS BATTER POWERE)\n\t(FLAGS TAKEBIT LIGHTBIT)\n\t(SIZE 15)\n\t(ACTION BRASS-LANTERN-F)>",
   "referencedBy": [
    "BRASS-LANTERN-F"
   ]
  },
  "GRUE-REPELLENT": {
   "name": "GRUE-REPELLENT",
   "file": "end.zil",
   "line": 399,
   "endLine": 413,
   "desc": "can of grue repellent",
   "ldesc": null,
   "fdesc": null,
   "loc": "CRATE",
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
   "action": "GRUE-REPELLENT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "|\n\"!!! FROBOZZ MAGIC GRUE REPELLENT !!!|\n|\nInstructions for use: Apply liberally to creature to be protected.\nDuration of effect is unpredictable. Use only in place of death!|\n|\n(No warranty expressed or implied)\""
    ]
   },
   "contents": [],
   "source": "<OBJECT GRUE-REPELLENT\n\t(IN CRATE)\n\t(SYNONYM REPELLENT CAN)\n\t(ADJECTIVE GRUE MAGIC)\n\t(DESC \"can of grue repellent\")\n\t(FLAGS TAKEBIT READBIT)\n\t(ACTION GRUE-REPELLENT-F)\n\t(TEXT\n\"|\n\\\"!!! FROBOZZ MAGIC GRUE REPELLENT !!!|\n|\nInstructions for use: Apply liberally to creature to be protected.\nDuration of effect is unpredictable. Use only in place of death!|\n|\n(No warranty expressed or implied)\\\"\")>",
   "referencedBy": [
    "GRUE-REPELLENT-F",
    "V-SPRAY"
   ]
  },
  "VINES": {
   "name": "VINES",
   "file": "end.zil",
   "line": 488,
   "endLine": 494,
   "desc": "mass of wriggling vines",
   "ldesc": null,
   "fdesc": null,
   "loc": "MOUTH-OF-RIVER",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "MASS",
    "VINES",
    "VINE",
    "PLANTS"
   ],
   "adjectives": [
    "WRIGLI",
    "WRITHI",
    "GREEN"
   ],
   "action": "VINES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT VINES\n\t(IN MOUTH-OF-RIVER)\n\t(DESC \"mass of wriggling vines\")\n\t(SYNONYM MASS VINES VINE PLANTS)\n\t(ADJECTIVE WRIGLI WRITHI GREEN)\n\t(FLAGS NDESCBIT)\n\t(ACTION VINES-F)>",
   "referencedBy": [
    "MOUTH-OF-RIVER-F",
    "VINES-F",
    "VINES-EXIT-F"
   ]
  },
  "MUTATED-GRUES": {
   "name": "MUTATED-GRUES",
   "file": "end.zil",
   "line": 539,
   "endLine": 545,
   "desc": "pack of mutated grues",
   "ldesc": null,
   "fdesc": null,
   "loc": "GRUE-LAIR",
   "flags": [],
   "synonyms": [
    "PACK",
    "GRUES",
    "GRUE"
   ],
   "adjectives": [
    "MUTATE"
   ],
   "action": "MUTATED-GRUES-F",
   "descfcn": "MUTATED-GRUES-DESCFCN",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MUTATED-GRUES\n\t(IN GRUE-LAIR)\n\t(DESC \"pack of mutated grues\")\n\t(SYNONYM PACK GRUES GRUE)\n\t(ADJECTIVE MUTATE)\n\t(DESCFCN MUTATED-GRUES-DESCFCN)\n\t(ACTION MUTATED-GRUES-F)>",
   "referencedBy": [
    "GRUE-F"
   ]
  },
  "MACHINERY": {
   "name": "MACHINERY",
   "file": "end.zil",
   "line": 612,
   "endLine": 618,
   "desc": "diabolic machinery",
   "ldesc": null,
   "fdesc": null,
   "loc": "MAMMOTH-CAVERN",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "MACHIN",
    "DEVICE",
    "BREEDER",
    "PLAQUE"
   ],
   "adjectives": [
    "DIABOL",
    "EVIL",
    "POWERF",
    "TINY"
   ],
   "action": "MACHINERY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MACHINERY\n\t(IN MAMMOTH-CAVERN)\n\t(DESC \"diabolic machinery\")\n\t(SYNONYM MACHIN DEVICE BREEDER PLAQUE)\n\t(ADJECTIVE DIABOL EVIL POWERF TINY)\n\t(FLAGS NDESCBIT)\n\t(ACTION MACHINERY-F)>",
   "referencedBy": []
  },
  "KNIFE": {
   "name": "KNIFE",
   "file": "end.zil",
   "line": 702,
   "endLine": 710,
   "desc": "diamond-studded knife",
   "ldesc": null,
   "fdesc": "Hanging on the wall is a heavy dagger, its handle encrusted with diamonds.",
   "loc": "BELBOZ-HIDEOUT",
   "flags": [
    "TAKEBIT",
    "WEAPONBIT"
   ],
   "synonyms": [
    "KNIFE",
    "DAGGER",
    "HANDLE"
   ],
   "adjectives": [
    "HEAVY",
    "DIAMON",
    "STUDDE",
    "ENCRUS"
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
   "source": "<OBJECT KNIFE\n\t(IN BELBOZ-HIDEOUT)\n\t(DESC \"diamond-studded knife\")\n\t(FDESC\n\"Hanging on the wall is a heavy dagger, its handle encrusted with diamonds.\")\n\t(SYNONYM KNIFE DAGGER HANDLE)\n\t(ADJECTIVE HEAVY DIAMON STUDDE ENCRUS)\n\t(FLAGS TAKEBIT WEAPONBIT)\n\t(SIZE 10)>",
   "referencedBy": [
    "BELBOZ-F",
    "IKILL"
   ]
  },
  "BLACK-DOOR": {
   "name": "BLACK-DOOR",
   "file": "end.zil",
   "line": 712,
   "endLine": 718,
   "desc": "black marble door",
   "ldesc": null,
   "fdesc": null,
   "loc": "MAMMOTH-CAVERN",
   "flags": [
    "DOORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR",
    "DOORS"
   ],
   "adjectives": [
    "BLACK",
    "MARBLE"
   ],
   "action": "BLACK-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BLACK-DOOR\n\t(IN MAMMOTH-CAVERN)\n\t(DESC \"black marble door\")\n\t(SYNONYM DOOR DOORS)\n\t(ADJECTIVE BLACK MARBLE)\n\t(FLAGS DOORBIT NDESCBIT)\n\t(ACTION BLACK-DOOR-F)>",
   "referencedBy": []
  },
  "SILVER-DOOR": {
   "name": "SILVER-DOOR",
   "file": "end.zil",
   "line": 732,
   "endLine": 738,
   "desc": "shiny silver door",
   "ldesc": null,
   "fdesc": null,
   "loc": "MAMMOTH-CAVERN",
   "flags": [
    "DOORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR",
    "DOORS"
   ],
   "adjectives": [
    "SHINY",
    "SILVER"
   ],
   "action": "SILVER-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SILVER-DOOR\n\t(IN MAMMOTH-CAVERN)\n\t(DESC \"shiny silver door\")\n\t(SYNONYM DOOR DOORS)\n\t(ADJECTIVE SHINY SILVER)\n\t(FLAGS DOORBIT NDESCBIT)\n\t(ACTION SILVER-DOOR-F)>",
   "referencedBy": []
  },
  "WHITE-DOOR": {
   "name": "WHITE-DOOR",
   "file": "end.zil",
   "line": 752,
   "endLine": 758,
   "desc": "white wooden door",
   "ldesc": null,
   "fdesc": null,
   "loc": "MAMMOTH-CAVERN",
   "flags": [
    "DOORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR",
    "DOORS"
   ],
   "adjectives": [
    "WHITE",
    "WOODEN",
    "BLEACH",
    "WOOD"
   ],
   "action": "WHITE-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WHITE-DOOR\n\t(IN MAMMOTH-CAVERN)\n\t(DESC \"white wooden door\")\n\t(SYNONYM DOOR DOORS)\n\t(ADJECTIVE WHITE WOODEN BLEACH WOOD)\n\t(FLAGS DOORBIT NDESCBIT)\n\t(ACTION WHITE-DOOR-F)>",
   "referencedBy": []
  },
  "FORT": {
   "name": "FORT",
   "file": "fort.zil",
   "line": 5,
   "endLine": 11,
   "desc": "fort",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "FORT",
    "GRIFFS",
    "RAMPAR",
    "FORTRE"
   ],
   "adjectives": [
    "FORT",
    "PROUD",
    "MIGHTY"
   ],
   "action": "FORT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FORT\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"fort\")\n\t(SYNONYM FORT GRIFFS RAMPAR FORTRE)\n\t(ADJECTIVE FORT PROUD MIGHTY)\n\t(FLAGS NDESCBIT)\n\t(ACTION FORT-F)>",
   "referencedBy": [
    "FORT-F"
   ]
  },
  "FLAG-POLE": {
   "name": "FLAG-POLE",
   "file": "fort.zil",
   "line": 78,
   "endLine": 84,
   "desc": "flagpole",
   "ldesc": null,
   "fdesc": null,
   "loc": "PARADE-GROUND",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "POLE",
    "FLAGPO"
   ],
   "adjectives": [
    "FLAG"
   ],
   "action": "FLAG-POLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FLAG-POLE\n\t(IN PARADE-GROUND)\n\t(DESC \"flagpole\")\n\t(SYNONYM POLE FLAGPO)\n\t(ADJECTIVE FLAG)\n\t(FLAGS NDESCBIT)\n\t(ACTION FLAG-POLE-F)>",
   "referencedBy": [
    "FLAG-F",
    "PRE-RESEARCH"
   ]
  },
  "FLAG": {
   "name": "FLAG",
   "file": "fort.zil",
   "line": 93,
   "endLine": 101,
   "desc": "flag of Quendor",
   "ldesc": null,
   "fdesc": null,
   "loc": "PARADE-GROUND",
   "flags": [
    "TAKEBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "FLAG"
   ],
   "adjectives": [
    "TATTER",
    "BROWN",
    "GOLD"
   ],
   "action": "FLAG-F",
   "descfcn": "FLAG-DESCFCN",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "8"
    ]
   },
   "contents": [],
   "source": "<OBJECT FLAG\n\t(IN PARADE-GROUND)\n\t(DESC \"flag of Quendor\")\n\t(SYNONYM FLAG)\n\t(ADJECTIVE TATTER BROWN GOLD)\n\t(FLAGS TAKEBIT TRYTAKEBIT)\n\t(SIZE 8)\n\t(DESCFCN FLAG-DESCFCN)\n\t(ACTION FLAG-F)>",
   "referencedBy": [
    "ROPE-PSEUDO",
    "FLAG-F",
    "V-IZYUK"
   ]
  },
  "FOOBLE-VIAL": {
   "name": "FOOBLE-VIAL",
   "file": "fort.zil",
   "line": 169,
   "endLine": 177,
   "desc": "aqua vial",
   "ldesc": null,
   "fdesc": null,
   "loc": "DIAL",
   "flags": [
    "CONTBIT",
    "READBIT",
    "TAKEBIT",
    "VOWELBIT",
    "VIALBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "VIAL",
    "VIALS",
    "LABEL"
   ],
   "adjectives": [
    "AQUA",
    "FOOBLE"
   ],
   "action": "FOOBLE-VIAL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ],
    "CAPACITY": [
     "1"
    ]
   },
   "contents": [
    "FOOBLE-POTION"
   ],
   "source": "<OBJECT FOOBLE-VIAL\n\t(IN DIAL)\n\t(DESC \"aqua vial\")\n\t(SYNONYM VIAL VIALS LABEL)\n\t(ADJECTIVE AQUA FOOBLE)\n\t(FLAGS CONTBIT READBIT TAKEBIT VOWELBIT VIALBIT SEARCHBIT)\n\t(SIZE 3)\n\t(CAPACITY 1)\n\t(ACTION FOOBLE-VIAL-F)>",
   "referencedBy": [
    "FLAG-F",
    "FOOBLE-POTION-F"
   ]
  },
  "FOOBLE-POTION": {
   "name": "FOOBLE-POTION",
   "file": "fort.zil",
   "line": 188,
   "endLine": 194,
   "desc": "aqua potion",
   "ldesc": null,
   "fdesc": null,
   "loc": "FOOBLE-VIAL",
   "flags": [
    "NARTICLEBIT",
    "VOWELBIT"
   ],
   "synonyms": [
    "POTION"
   ],
   "adjectives": [
    "AQUA",
    "FOOBLE"
   ],
   "action": "FOOBLE-POTION-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FOOBLE-POTION\n\t(IN FOOBLE-VIAL)\n\t(DESC \"aqua potion\")\n\t(SYNONYM POTION)\n\t(ADJECTIVE AQUA FOOBLE)\n\t(FLAGS NARTICLEBIT VOWELBIT)\n\t(ACTION FOOBLE-POTION-F)>",
   "referencedBy": [
    "FOOBLE-POTION-F",
    "I-UNFOOBLE",
    "V-PULVER"
   ]
  },
  "CANNON": {
   "name": "CANNON",
   "file": "fort.zil",
   "line": 283,
   "endLine": 294,
   "desc": "cannon",
   "ldesc": "A magnificent cast-iron cannon stands atop the battlement. Its wide,\nshallow barrel points toward the ocean, as though daring enemy ships\nto approach.",
   "fdesc": null,
   "loc": "GUN-EMPLACEMENT",
   "flags": [
    "CONTBIT",
    "OPENBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "CANNON",
    "BARREL"
   ],
   "adjectives": [
    "MAGNIF",
    "CAST-IRON",
    "CAST",
    "IRON",
    "WIDE",
    "SHALLO"
   ],
   "action": "CANNON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "80"
    ]
   },
   "contents": [
    "YIPPLES"
   ],
   "source": "<OBJECT CANNON\n\t(IN GUN-EMPLACEMENT)\n\t(DESC \"cannon\")\n\t(LDESC\n\"A magnificent cast-iron cannon stands atop the battlement. Its wide,\nshallow barrel points toward the ocean, as though daring enemy ships\nto approach.\")\n\t(SYNONYM CANNON BARREL)\n\t(ADJECTIVE MAGNIF CAST-IRON CAST IRON WIDE SHALLO)\n\t(FLAGS CONTBIT OPENBIT SEARCHBIT)\n\t(CAPACITY 80)\n\t(ACTION CANNON-F)>",
   "referencedBy": [
    "CANNON-F"
   ]
  },
  "YIPPLES": {
   "name": "YIPPLES",
   "file": "fort.zil",
   "line": 341,
   "endLine": 347,
   "desc": "pile of identical scrolls",
   "ldesc": null,
   "fdesc": null,
   "loc": "CANNON",
   "flags": [
    "INVISIBLE",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "PILE",
    "SCROLL"
   ],
   "adjectives": [
    "IDENTI"
   ],
   "action": "YIPPLES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT YIPPLES\n\t(IN CANNON)\n\t(DESC \"pile of identical scrolls\")\n\t(SYNONYM PILE SCROLL)\n\t(ADJECTIVE IDENTI)\n\t(FLAGS INVISIBLE TRYTAKEBIT)\n\t(ACTION YIPPLES-F)>",
   "referencedBy": [
    "CANNON-F"
   ]
  },
  "YONK-SCROLL": {
   "name": "YONK-SCROLL",
   "file": "fort.zil",
   "line": 364,
   "endLine": 371,
   "desc": "ordinary scroll",
   "ldesc": null,
   "fdesc": null,
   "loc": "DIAL",
   "flags": [
    "READBIT",
    "SCROLLBIT",
    "TAKEBIT",
    "CONTBIT",
    "TRANSBIT",
    "VOWELBIT"
   ],
   "synonyms": [
    "SCROLL"
   ],
   "adjectives": [
    "SINGLE",
    "ORDINA"
   ],
   "action": "SCROLL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ]
   },
   "contents": [
    "YONK-SPELL"
   ],
   "source": "<OBJECT YONK-SCROLL\n\t(IN DIAL)\n\t(DESC \"ordinary scroll\")\n\t(SYNONYM SCROLL)\n\t(ADJECTIVE SINGLE ORDINA)\n\t(FLAGS READBIT SCROLLBIT TAKEBIT CONTBIT TRANSBIT VOWELBIT)\n\t(SIZE 3)\n\t(ACTION SCROLL-F)>\t",
   "referencedBy": [
    "CANNON-F",
    "SPELL-TIMES",
    "SCORE-OBJECT"
   ]
  },
  "YONK-SPELL": {
   "name": "YONK-SPELL",
   "file": "fort.zil",
   "line": 373,
   "endLine": 382,
   "desc": "yonk spell",
   "ldesc": null,
   "fdesc": null,
   "loc": "YONK-SCROLL",
   "flags": [
    "NDESCBIT",
    "SPELLBIT"
   ],
   "synonyms": [
    "SPELLS",
    "SPELL"
   ],
   "adjectives": [
    "YONK"
   ],
   "action": "SPELL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "augment the power of certain spells"
    ],
    "COUNT": [
     "0"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT YONK-SPELL\n\t(IN YONK-SCROLL)\n\t(SYNONYM SPELLS SPELL)\n\t(ADJECTIVE YONK)\n\t(DESC \"yonk spell\")\n\t(TEXT \"augment the power of certain spells\")\n\t(COUNT 0)\n\t(SIZE 1)\n\t(FLAGS NDESCBIT SPELLBIT)\n\t(ACTION SPELL-F)>",
   "referencedBy": [
    "SCROLL-F",
    "SPELL-CHECK",
    "PRE-CAST",
    "V-CAST",
    "SPELL-TIMES",
    "V-GNUSTO"
   ]
  },
  "GLOBAL-OBJECTS": {
   "name": "GLOBAL-OBJECTS",
   "file": "globals.zil",
   "line": 31,
   "endLine": 33,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "MUNGBIT",
    "INVISIBLE",
    "TOUCHBIT",
    "SURFACEBIT",
    "TRYTAKEBIT",
    "OPENBIT",
    "SEARCHBIT",
    "TRANSBIT",
    "WEARBIT",
    "VOWELBIT",
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
    "INTNUM",
    "IT",
    "DEBRIS",
    "GROUND",
    "CORRIDOR",
    "WALLS",
    "CEILING",
    "HANDS",
    "BAT",
    "ME",
    "GRUE",
    "SKY",
    "GLOBAL-ROOM",
    "GLOBAL-SLEEP"
   ],
   "source": "<OBJECT GLOBAL-OBJECTS\n\t(FLAGS MUNGBIT INVISIBLE TOUCHBIT SURFACEBIT TRYTAKEBIT OPENBIT\n\t       SEARCHBIT TRANSBIT WEARBIT VOWELBIT ONBIT RLANDBIT)>",
   "referencedBy": [
    "GLOBAL-CHECK",
    "ACCESSIBLE?",
    "META-LOC",
    "PRE-PUT",
    "HELD?"
   ]
  },
  "LOCAL-GLOBALS": {
   "name": "LOCAL-GLOBALS",
   "file": "globals.zil",
   "line": 35,
   "endLine": 46,
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
   "descfcn": "0",
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
    "SIZE": [
     "0"
    ],
    "CAPACITY": [
     "0"
    ]
   },
   "contents": [
    "TREE",
    "MEADOW-OBJECT",
    "RIVER",
    "BANKS",
    "RIVER-BED-OBJECT",
    "WATERFALL",
    "COAL",
    "UPPER-CHUTE",
    "LOWER-CHUTE",
    "DIAL-DOOR",
    "BEACH",
    "OCEAN",
    "LAGOON-OBJECT",
    "FORT",
    "ROAD",
    "WATER",
    "ARCHWAY",
    "HOLE",
    "FOREST",
    "CASTLE",
    "CAVE",
    "GLOBAL-BED",
    "CHAMBER-DOOR",
    "MAZE",
    "HOVEL",
    "CHIMNEY",
    "SOOT",
    "BOZBARLAND"
   ],
   "source": "<OBJECT LOCAL-GLOBALS\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ZZMGCK)\n\t(DESCFCN 0)\n        (GLOBAL GLOBAL-OBJECTS)\n\t(ADVFCN 0)\n\t(FDESC \"F\")\n\t(LDESC \"F\")\n\t(PSEUDO \"FOOBAR\" V-WALK)\n\t(CONTFCN 0)\n\t(SIZE 0)\n\t(CAPACITY 0)>",
   "referencedBy": [
    "ACCESSIBLE?",
    "MOBY-FIND",
    "V-FIND"
   ]
  },
  "ROOMS": {
   "name": "ROOMS",
   "file": "globals.zil",
   "line": 49,
   "endLine": 50,
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
    "MOBY-FIND",
    "V-ALARM",
    "V-CLIMB-DOWN",
    "V-CLIMB-FOO",
    "V-CLIMB-UP",
    "V-LOOK-DOWN",
    "V-LOOK-INSIDE",
    "PRE-RESEARCH",
    "DESCRIBE-ROOM",
    "FIRSTER",
    "HELD?"
   ]
  },
  "INTNUM": {
   "name": "INTNUM",
   "file": "globals.zil",
   "line": 52,
   "endLine": 55,
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
   "source": "<OBJECT INTNUM\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM INTNUM)\n\t(DESC \"number\")>",
   "referencedBy": [
    "YOUNGER-SELF-F",
    "DIAL-F",
    "V-$VERIFY",
    "V-$RANDOM",
    "V-COMBO"
   ]
  },
  "PSEUDO-OBJECT": {
   "name": "PSEUDO-OBJECT",
   "file": "globals.zil",
   "line": 57,
   "endLine": 59,
   "desc": "pseudo",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
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
   "source": "<OBJECT PSEUDO-OBJECT\n\t(DESC \"pseudo\")\n\t(ACTION ME-F)>",
   "referencedBy": [
    "SAND-PSEUDO",
    "GLOBAL-CHECK",
    "ACCESSIBLE?",
    "V-FIND",
    "PRE-RESEARCH"
   ]
  },
  "IT": {
   "name": "IT",
   "file": "globals.zil",
   "line": 61,
   "endLine": 65,
   "desc": "it",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "VOWELBIT",
    "NARTICLEBIT",
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "IT",
    "THAT",
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
   "source": "<OBJECT IT\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM IT THAT HER HIM)\n\t(DESC \"it\")\n\t(FLAGS VOWELBIT NARTICLEBIT NDESCBIT TOUCHBIT)>",
   "referencedBy": [
    "TURRET-PSEUDO",
    "ITAKE-CHECK",
    "MAIN-LOOP-1",
    "PERFORM"
   ]
  },
  "NOT-HERE-OBJECT": {
   "name": "NOT-HERE-OBJECT",
   "file": "globals.zil",
   "line": 67,
   "endLine": 70,
   "desc": "something",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NARTICLEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "NOT-HERE-OBJECT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT NOT-HERE-OBJECT\n\t(DESC \"something\")\n\t(FLAGS NARTICLEBIT)\n\t(ACTION NOT-HERE-OBJECT-F)>",
   "referencedBy": [
    "YOUNGER-ACTIONS",
    "NOT-HERE-OBJECT-F",
    "FIND-NOT-HERE",
    "GET-OBJECT",
    "ITAKE-CHECK",
    "MAIN-LOOP-1",
    "PERFORM"
   ]
  },
  "DEBRIS": {
   "name": "DEBRIS",
   "file": "globals.zil",
   "line": 195,
   "endLine": 199,
   "desc": "dust and debris",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NARTICLEBIT"
   ],
   "synonyms": [
    "RUBBLE",
    "DEBRIS",
    "CAVE-IN",
    "DUST"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DEBRIS\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"dust and debris\")\n\t(SYNONYM RUBBLE DEBRIS CAVE-IN DUST)\n\t(FLAGS NARTICLEBIT)>",
   "referencedBy": []
  },
  "GROUND": {
   "name": "GROUND",
   "file": "globals.zil",
   "line": 201,
   "endLine": 206,
   "desc": "ground",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "FLOOR",
    "GROUND",
    "PLATEAU",
    "FIELD"
   ],
   "adjectives": [
    "STONE",
    "SANDY",
    "TINY",
    "OUTDOO",
    "LEVEL"
   ],
   "action": "GROUND-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GROUND\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM FLOOR GROUND PLATEAU FIELD)\n\t(ADJECTIVE STONE SANDY TINY OUTDOO LEVEL)\n\t(DESC \"ground\")\n\t(ACTION GROUND-F)>",
   "referencedBy": [
    "TREE-F",
    "SAND-PSEUDO",
    "V-LOOK-DOWN",
    "V-WAX"
   ]
  },
  "ROAD": {
   "name": "ROAD",
   "file": "globals.zil",
   "line": 221,
   "endLine": 227,
   "desc": "road",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "HIGHWAY",
    "ROAD",
    "TRAIL",
    "PATH"
   ],
   "adjectives": [
    "DIRT",
    "FEATUR",
    "WIDE",
    "CURVED",
    "MAIN",
    "UNDERG"
   ],
   "action": "ROAD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ROAD\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"road\")\n\t(SYNONYM HIGHWAY ROAD TRAIL PATH)\n\t(ADJECTIVE DIRT FEATUR WIDE CURVED MAIN UNDERG)\n\t(FLAGS NDESCBIT)\n\t(ACTION ROAD-F)>",
   "referencedBy": []
  },
  "CORRIDOR": {
   "name": "CORRIDOR",
   "file": "globals.zil",
   "line": 233,
   "endLine": 238,
   "desc": "passage",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "PASSAG",
    "CORRID",
    "HALLWA",
    "TUNNEL"
   ],
   "adjectives": [
    "ROCKY",
    "WINDIN",
    "LONG",
    "DARK",
    "MEANDE"
   ],
   "action": "CORRIDOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CORRIDOR\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"passage\")\n\t(SYNONYM PASSAG CORRID HALLWA TUNNEL)\n\t(ADJECTIVE ROCKY WINDIN LONG DARK MEANDE)\n\t(ACTION CORRIDOR-F)>",
   "referencedBy": []
  },
  "WALLS": {
   "name": "WALLS",
   "file": "globals.zil",
   "line": 244,
   "endLine": 249,
   "desc": "wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "WALL",
    "WALLS"
   ],
   "adjectives": [],
   "action": "WALLS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WALLS\n\t(IN GLOBAL-OBJECTS)\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(DESC \"wall\")\n\t(SYNONYM WALL WALLS)\n\t(ACTION WALLS-F)>",
   "referencedBy": []
  },
  "CEILING": {
   "name": "CEILING",
   "file": "globals.zil",
   "line": 268,
   "endLine": 274,
   "desc": "ceiling",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "CEILIN",
    "ROOF",
    "DOME"
   ],
   "adjectives": [
    "HIGH",
    "DOMED"
   ],
   "action": "CEILING-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CEILING\n\t(IN GLOBAL-OBJECTS)\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(DESC \"ceiling\")\n\t(SYNONYM CEILIN ROOF DOME)\n\t(ADJECTIVE HIGH DOMED)\n\t(ACTION CEILING-F)>",
   "referencedBy": [
    "PRE-RESEARCH"
   ]
  },
  "STAIRS": {
   "name": "STAIRS",
   "file": "globals.zil",
   "line": 294,
   "endLine": 300,
   "desc": "stairs",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-OBJECTS",
   "flags": [
    "NARTICLEBIT",
    "NDESCBIT",
    "CLIMBBIT"
   ],
   "synonyms": [
    "STAIR",
    "STAIRS",
    "STAIRW",
    "STAIRC"
   ],
   "adjectives": [
    "MARBLE",
    "WIDE",
    "NARROW",
    "STEEP",
    "WINDIN",
    "SPIRAL"
   ],
   "action": "STAIRS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT STAIRS\n\t(IN LOCAL-OBJECTS)\n\t(DESC \"stairs\")\n\t(SYNONYM STAIR STAIRS STAIRW STAIRC)\n\t(ADJECTIVE MARBLE WIDE NARROW STEEP WINDIN SPIRAL)\n\t(FLAGS NARTICLEBIT NDESCBIT CLIMBBIT)\n\t(ACTION STAIRS-F)>",
   "referencedBy": [
    "PRE-RESEARCH"
   ]
  },
  "HANDS": {
   "name": "HANDS",
   "file": "globals.zil",
   "line": 308,
   "endLine": 313,
   "desc": "your hand",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT",
    "TOOLBIT",
    "TOUCHBIT",
    "NARTICLEBIT"
   ],
   "synonyms": [
    "HANDS"
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
   "source": "<OBJECT HANDS\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM HANDS)\n\t(ADJECTIVE BARE)\n\t(DESC \"your hand\")\n\t(FLAGS NDESCBIT TOOLBIT TOUCHBIT NARTICLEBIT)>",
   "referencedBy": [
    "ITAKE-CHECK",
    "JOURNAL-F",
    "V-FIND",
    "IKILL",
    "IDROP"
   ]
  },
  "PROTAGONIST": {
   "name": "PROTAGONIST",
   "file": "globals.zil",
   "line": 315,
   "endLine": 319,
   "desc": "protagonist",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "PROTAG"
   ],
   "adjectives": [],
   "action": "0",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PROTAGONIST\n\t(SYNONYM PROTAG)\n\t(DESC \"protagonist\")\n\t(FLAGS NDESCBIT INVISIBLE)\n\t(ACTION 0)>",
   "referencedBy": [
    "FLOOD-LOOP",
    "BAT-GUANO-F",
    "GNOME-F",
    "WAXER-F",
    "ZORKMID-F",
    "YOUNGER-ACTIONS",
    "SLANTED-ROOM-EXIT-F",
    "LAGOON-F",
    "GRUE-LAIR-F",
    "MUTATED-GRUES-DESCFCN",
    "BLACK-DOOR-F",
    "SILVER-DOOR-F",
    "SWANZO-BELBOZ",
    "I-BELBOZ-AWAKES",
    "NOT-HERE-OBJECT-F",
    "ME-F",
    "SCROLL-F",
    "SPELL-F",
    "GLOBAL-SLEEP-F",
    "I-TIRED",
    "SYNTAX-CHECK",
    "GET-OBJECT",
    "ITAKE-CHECK",
    "LIT?",
    "JOURNAL-F",
    "VILSTU-POTION-F",
    "BERZIO-POTION-F",
    "GO",
    "START-RIDE",
    "FLUME-F",
    "LOG-BOAT-F",
    "ROLLER-COASTER-F",
    "CAR-F",
    "HAWKER-F",
    "BALL-F",
    "V-INVENTORY",
    "PRE-BOARD",
    "V-BOARD",
    "V-DISEMBARK",
    "V-FIND",
    "IKILL",
    "V-LOOK-INSIDE",
    "V-SLEEP",
    "V-STAND",
    "PRE-TAKE",
    "V-TAKE-OFF",
    "V-THROUGH",
    "V-WAIT-FOR",
    "PRE-CAST",
    "V-GNUSTO",
    "V-FWEEP",
    "V-IZYUK",
    "ITAKE",
    "IDROP",
    "DESCRIBE-ROOM",
    "DESCRIBE-OBJECT",
    "PARANTHETICAL-NOTES",
    "PRINT-CONT",
    "FIRSTER",
    "GOTO",
    "ROPE-BEAM-CHECK",
    "JIGS-UP",
    "RANDOMIZE-OBJECTS",
    "NOTHING-HELD?",
    "HELD?"
   ]
  },
  "BAT": {
   "name": "BAT",
   "file": "globals.zil",
   "line": 321,
   "endLine": 327,
   "desc": "yourself",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "ACTORBIT",
    "TOUCHBIT",
    "NARTICLEBIT"
   ],
   "synonyms": [
    "BAT"
   ],
   "adjectives": [
    "LARGE"
   ],
   "action": "BAT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BAT\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"yourself\")\n\t(SYNONYM BAT)\n\t(ADJECTIVE LARGE)\n\t(FLAGS ACTORBIT TOUCHBIT NARTICLEBIT)\n\t(ACTION BAT-F)>",
   "referencedBy": [
    "BAT-F"
   ]
  },
  "ME": {
   "name": "ME",
   "file": "globals.zil",
   "line": 344,
   "endLine": 349,
   "desc": "yourself",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "ACTORBIT",
    "TOUCHBIT",
    "NARTICLEBIT"
   ],
   "synonyms": [
    "ME",
    "MYSELF",
    "SELF",
    "ENCHAN"
   ],
   "adjectives": [],
   "action": "ME-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ME\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ME MYSELF SELF ENCHAN)\n\t(DESC \"yourself\")\n\t(FLAGS ACTORBIT TOUCHBIT NARTICLEBIT)\n\t(ACTION ME-F)> ",
   "referencedBy": [
    "YOUNGER-SELF-F",
    "YOUNGER-ACTIONS",
    "GRUE-REPELLENT-F",
    "NOT-HERE-OBJECT-F",
    "BAT-F",
    "ME-F",
    "BED-F",
    "HAWKER-F",
    "V-ALARM",
    "V-ASK-ABOUT",
    "V-FIND",
    "V-FLY",
    "V-PUT-ON",
    "V-SAY",
    "PRE-TAKE",
    "V-TORTURE",
    "V-AIMFIZ",
    "V-AIMFIZ-TO",
    "V-GASPAR",
    "V-FWEEP",
    "V-IZYUK",
    "V-VEZZA"
   ]
  },
  "GRUE": {
   "name": "GRUE",
   "file": "globals.zil",
   "line": 454,
   "endLine": 459,
   "desc": "lurking grue",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "GRUE"
   ],
   "adjectives": [
    "LURKIN",
    "SINIST",
    "HUNGRY",
    "SILENT",
    "LEGEND"
   ],
   "action": "GRUE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GRUE\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM GRUE)\n\t(ADJECTIVE LURKIN SINIST HUNGRY SILENT LEGEND)\n\t(DESC \"lurking grue\")\n\t(ACTION GRUE-F)>",
   "referencedBy": [
    "CRATE-F",
    "MUTATED-GRUES-F",
    "MACHINERY-F",
    "BED-F"
   ]
  },
  "WATER": {
   "name": "WATER",
   "file": "globals.zil",
   "line": 491,
   "endLine": 497,
   "desc": "water",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NARTICLEBIT"
   ],
   "synonyms": [
    "WATER",
    "TRICKLE",
    "POOL"
   ],
   "adjectives": [
    "SWIRLI",
    "TURBUL",
    "STAGNA"
   ],
   "action": "WATER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WATER\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM WATER TRICKLE POOL)\n\t(ADJECTIVE SWIRLI TURBUL STAGNA)\n\t(DESC \"water\")\n\t(FLAGS NARTICLEBIT)\n\t(ACTION WATER-F)> ",
   "referencedBy": [
    "RIVER-F",
    "PUDDLE-PSEUDO",
    "MOAT-F",
    "OCEAN-F",
    "LAGOON-OBJECT-F",
    "WATER-F",
    "V-DRINK-FROM",
    "V-FILL"
   ]
  },
  "SKY": {
   "name": "SKY",
   "file": "globals.zil",
   "line": 573,
   "endLine": 577,
   "desc": "sky",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "SKY",
    "STARS"
   ],
   "adjectives": [],
   "action": "SKY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SKY\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"sky\")\n\t(SYNONYM SKY STARS)\n\t(ACTION SKY-F)>",
   "referencedBy": [
    "PRE-RESEARCH"
   ]
  },
  "BELBOZ": {
   "name": "BELBOZ",
   "file": "globals.zil",
   "line": 586,
   "endLine": 594,
   "desc": "Belboz",
   "ldesc": "Belboz is lying here, motionless but not asleep. He seems to be in\nsome sort of trance.",
   "fdesc": null,
   "loc": "BELBOZ-HIDEOUT",
   "flags": [
    "ACTORBIT",
    "NARTICLEBIT"
   ],
   "synonyms": [
    "BELBOZ",
    "NECROMANCER"
   ],
   "adjectives": [],
   "action": "BELBOZ-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BELBOZ\n\t(IN BELBOZ-HIDEOUT)\n\t(DESC \"Belboz\")\n\t(LDESC\n\"Belboz is lying here, motionless but not asleep. He seems to be in\nsome sort of trance.\")\n\t(SYNONYM BELBOZ NECROMANCER)\n\t(FLAGS ACTORBIT NARTICLEBIT)\n\t(ACTION BELBOZ-F)>",
   "referencedBy": [
    "BELBOZ-F",
    "JEEARR-F",
    "TINY-BOX-F",
    "V-GOLMAC"
   ]
  },
  "GLOBAL-ROOM": {
   "name": "GLOBAL-ROOM",
   "file": "globals.zil",
   "line": 644,
   "endLine": 649,
   "desc": "room",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "ROOM",
    "CHAMBER",
    "PLACE",
    "HALL"
   ],
   "adjectives": [
    "AREA"
   ],
   "action": "GLOBAL-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-ROOM\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"room\")\n\t(SYNONYM ROOM CHAMBER PLACE HALL)\n\t(ADJECTIVE AREA)\n\t(ACTION GLOBAL-ROOM-F)>",
   "referencedBy": [
    "BARRACKS-PSEUDO"
   ]
  },
  "ARCHWAY": {
   "name": "ARCHWAY",
   "file": "globals.zil",
   "line": 662,
   "endLine": 668,
   "desc": "doorway",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "VOWELBIT"
   ],
   "synonyms": [
    "ARCH",
    "ARCHWA",
    "DOORWA"
   ],
   "adjectives": [
    "LARGE",
    "WIDE",
    "MARBLE",
    "DAZZLI",
    "GLASS",
    "BREATH"
   ],
   "action": "ARCHWAY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ARCHWAY\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"doorway\")\n\t(SYNONYM ARCH ARCHWA DOORWA)\n\t(ADJECTIVE LARGE WIDE MARBLE DAZZLI GLASS BREATH)\n\t(FLAGS NDESCBIT VOWELBIT)\n\t(ACTION ARCHWAY-F)>",
   "referencedBy": []
  },
  "HOLE": {
   "name": "HOLE",
   "file": "globals.zil",
   "line": 676,
   "endLine": 682,
   "desc": "opening",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "HOLE",
    "OPENIN",
    "WELL"
   ],
   "adjectives": [
    "SMALL",
    "SLIMY",
    "DARK"
   ],
   "action": "HOLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HOLE\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"opening\")\n\t(SYNONYM HOLE OPENIN WELL)\n\t(ADJECTIVE SMALL SLIMY DARK)\n\t(FLAGS NDESCBIT)\n\t(ACTION HOLE-F)>",
   "referencedBy": [
    "HOLE-F"
   ]
  },
  "FOREST": {
   "name": "FOREST",
   "file": "globals.zil",
   "line": 711,
   "endLine": 717,
   "desc": "blighted forest",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "FOREST",
    "WOODS",
    "TREES"
   ],
   "adjectives": [
    "BLIGHT",
    "DENSE",
    "SICKLY",
    "TWISTE"
   ],
   "action": "FOREST-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FOREST\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"blighted forest\")\n\t(SYNONYM FOREST WOODS TREES)\n\t(ADJECTIVE BLIGHT DENSE SICKLY TWISTE)\n\t(FLAGS NDESCBIT)\n\t(ACTION FOREST-F)>",
   "referencedBy": [
    "TREE-F",
    "FOREST-F"
   ]
  },
  "CASTLE": {
   "name": "CASTLE",
   "file": "globals.zil",
   "line": 731,
   "endLine": 737,
   "desc": "castle",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "CASTLE",
    "EGRETH",
    "RUINS"
   ],
   "adjectives": [
    "CASTLE",
    "EGRETH",
    "RUINED",
    "ANCIEN"
   ],
   "action": "CASTLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CASTLE\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"castle\")\n\t(SYNONYM CASTLE EGRETH RUINS)\n\t(ADJECTIVE CASTLE EGRETH RUINED ANCIEN)\n\t(FLAGS NDESCBIT)\n\t(ACTION CASTLE-F)>",
   "referencedBy": []
  },
  "CAVE": {
   "name": "CAVE",
   "file": "globals.zil",
   "line": 748,
   "endLine": 754,
   "desc": "cave",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "CAVE",
    "CAVERN"
   ],
   "adjectives": [
    "MAMMOT",
    "HIDDEN",
    "DARK"
   ],
   "action": "CAVE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CAVE\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"cave\")\n\t(SYNONYM CAVE CAVERN)\n\t(ADJECTIVE MAMMOT HIDDEN DARK)\n\t(FLAGS NDESCBIT)\n\t(ACTION CAVE-F)>",
   "referencedBy": []
  },
  "HELISTAR": {
   "name": "HELISTAR",
   "file": "globals.zil",
   "line": 771,
   "endLine": 776,
   "desc": "Helistar",
   "ldesc": null,
   "fdesc": null,
   "loc": "DIAL",
   "flags": [
    "ACTORBIT",
    "NARTICLEBIT"
   ],
   "synonyms": [
    "HELIST"
   ],
   "adjectives": [],
   "action": "HELISTAR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HELISTAR\n\t(IN DIAL)\n\t(DESC \"Helistar\")\n\t(SYNONYM HELIST)\n\t(FLAGS ACTORBIT NARTICLEBIT)\n\t(ACTION HELISTAR-F)>",
   "referencedBy": []
  },
  "FROBAR": {
   "name": "FROBAR",
   "file": "globals.zil",
   "line": 778,
   "endLine": 783,
   "desc": "Frobar",
   "ldesc": null,
   "fdesc": null,
   "loc": "DIAL",
   "flags": [
    "ACTORBIT",
    "NARTICLEBIT"
   ],
   "synonyms": [
    "FROBAR"
   ],
   "adjectives": [],
   "action": "FROBAR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FROBAR\n\t(IN DIAL)\n\t(DESC \"Frobar\")\n\t(SYNONYM FROBAR)\n\t(FLAGS ACTORBIT NARTICLEBIT)\n\t(ACTION FROBAR-F)>",
   "referencedBy": []
  },
  "IMPLEMENTOR": {
   "name": "IMPLEMENTOR",
   "file": "globals.zil",
   "line": 840,
   "endLine": 846,
   "desc": "author",
   "ldesc": null,
   "fdesc": null,
   "loc": "DIAL",
   "flags": [
    "VOWELBIT",
    "ACTORBIT"
   ],
   "synonyms": [
    "IMPLEM",
    "MERETZ",
    "AUTHOR",
    "ORACLE"
   ],
   "adjectives": [
    "STEVE",
    "STEVEN",
    "BEARDE"
   ],
   "action": "IMPLEMENTOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT IMPLEMENTOR\n\t(IN DIAL)\n\t(DESC \"author\")\n\t(SYNONYM IMPLEM MERETZ AUTHOR ORACLE)\n\t(ADJECTIVE STEVE STEVEN BEARDE)\n\t(FLAGS VOWELBIT ACTORBIT)\n\t(ACTION IMPLEMENTOR-F)>",
   "referencedBy": []
  },
  "JEEARR": {
   "name": "JEEARR",
   "file": "globals.zil",
   "line": 859,
   "endLine": 865,
   "desc": "Jeearr",
   "ldesc": null,
   "fdesc": null,
   "loc": "BELBOZ-HIDEOUT",
   "flags": [
    "ACTORBIT",
    "NDESCBIT",
    "NARTICLEBIT"
   ],
   "synonyms": [
    "JEEARR",
    "DEMON",
    "FORCE",
    "SPIRIT"
   ],
   "adjectives": [
    "EVIL",
    "POWERF"
   ],
   "action": "JEEARR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT JEEARR\n\t(IN BELBOZ-HIDEOUT)\n\t(DESC \"Jeearr\")\n\t(SYNONYM JEEARR DEMON FORCE SPIRIT)\n\t(ADJECTIVE EVIL POWERF)\n\t(FLAGS ACTORBIT NDESCBIT NARTICLEBIT)\n\t(ACTION JEEARR-F)>",
   "referencedBy": [
    "V-GOLMAC"
   ]
  },
  "SPELL-BOOK": {
   "name": "SPELL-BOOK",
   "file": "globals.zil",
   "line": 911,
   "endLine": 917,
   "desc": "spell book",
   "ldesc": null,
   "fdesc": null,
   "loc": "DIAL",
   "flags": [
    "TOUCHBIT",
    "TAKEBIT",
    "READBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "BOOK",
    "NOTES"
   ],
   "adjectives": [
    "MY",
    "SPELL",
    "MARGIN"
   ],
   "action": "SPELL-BOOK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "GNUSTO-SPELL",
    "FROTZ-SPELL",
    "REZROV-SPELL",
    "YOMIN-SPELL",
    "IZYUK-SPELL",
    "PULVER-SPELL",
    "VEZZA-SPELL"
   ],
   "source": "<OBJECT SPELL-BOOK\n\t(IN DIAL)\n\t(SYNONYM BOOK NOTES)\n\t(ADJECTIVE MY SPELL MARGIN)\n\t(DESC \"spell book\")\n\t(ACTION SPELL-BOOK-F)\n\t(FLAGS TOUCHBIT TAKEBIT READBIT CONTBIT OPENBIT)>",
   "referencedBy": [
    "COAL-BIN-ROOM-F",
    "LOWER-CHUTE-F",
    "OLDER-SELF-F",
    "I-OLDER-SELF",
    "YOUNGER-SELF-F",
    "SPELL-BOOK-PASS-OFF-CHECK",
    "YOUNGER-ACTIONS",
    "COVE-F",
    "LAGOON-OBJECT-F",
    "LAGOON-F",
    "SPELL-BOOK-F",
    "SPELL-F",
    "FORGET-SPELL",
    "FORGET-ALL",
    "HOLLOW-F",
    "V-ASK-FOR",
    "PRE-READ",
    "PRE-CAST",
    "SPELL-TIMES",
    "V-GNUSTO",
    "ITAKE",
    "JIGS-UP"
   ]
  },
  "GNUSTO-SPELL": {
   "name": "GNUSTO-SPELL",
   "file": "globals.zil",
   "line": 951,
   "endLine": 960,
   "desc": "gnusto spell",
   "ldesc": null,
   "fdesc": null,
   "loc": "SPELL-BOOK",
   "flags": [
    "NDESCBIT",
    "SPELLBIT"
   ],
   "synonyms": [
    "SPELLS",
    "SPELL"
   ],
   "adjectives": [
    "GNUSTO"
   ],
   "action": "SPELL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "write a magic spell into a spell book"
    ],
    "COUNT": [
     "0"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT GNUSTO-SPELL \n\t(IN SPELL-BOOK)\n\t(SYNONYM SPELLS SPELL)\n\t(ADJECTIVE GNUSTO)\n\t(DESC \"gnusto spell\")\n\t(TEXT \"write a magic spell into a spell book\")\n\t(COUNT 0)\n\t(ACTION SPELL-F)\n\t(SIZE 1)\n\t(FLAGS NDESCBIT SPELLBIT)>",
   "referencedBy": [
    "ALWAYS-MEMORIZED",
    "SPELL-CHECK",
    "PRE-CAST",
    "V-CAST"
   ]
  },
  "FROTZ-SPELL": {
   "name": "FROTZ-SPELL",
   "file": "globals.zil",
   "line": 962,
   "endLine": 971,
   "desc": "frotz spell",
   "ldesc": null,
   "fdesc": null,
   "loc": "SPELL-BOOK",
   "flags": [
    "NDESCBIT",
    "SPELLBIT"
   ],
   "synonyms": [
    "SPELLS",
    "SPELL"
   ],
   "adjectives": [
    "FROTZ"
   ],
   "action": "SPELL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "cause something to give off light"
    ],
    "COUNT": [
     "0"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT FROTZ-SPELL\n\t(IN SPELL-BOOK)\n\t(SYNONYM SPELLS SPELL)\n\t(ADJECTIVE FROTZ)\n\t(DESC \"frotz spell\")\n\t(TEXT \"cause something to give off light\")\n\t(COUNT 0)\n\t(ACTION SPELL-F)\n\t(SIZE 1)\n\t(FLAGS NDESCBIT SPELLBIT)>",
   "referencedBy": [
    "ALWAYS-MEMORIZED",
    "SPELL-CHECK",
    "PRE-CAST",
    "V-CAST"
   ]
  },
  "REZROV-SPELL": {
   "name": "REZROV-SPELL",
   "file": "globals.zil",
   "line": 973,
   "endLine": 982,
   "desc": "rezrov spell",
   "ldesc": null,
   "fdesc": null,
   "loc": "SPELL-BOOK",
   "flags": [
    "NDESCBIT",
    "SPELLBIT"
   ],
   "synonyms": [
    "SPELLS",
    "SPELL"
   ],
   "adjectives": [
    "REZROV"
   ],
   "action": "SPELL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "open even locked or enchanted objects"
    ],
    "COUNT": [
     "0"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT REZROV-SPELL\n\t(IN SPELL-BOOK)\n\t(SYNONYM SPELLS SPELL)\n\t(ADJECTIVE REZROV)\n\t(DESC \"rezrov spell\")\n\t(TEXT \"open even locked or enchanted objects\")\n\t(COUNT 0)\n\t(ACTION SPELL-F)\n\t(SIZE 1)\n\t(FLAGS NDESCBIT SPELLBIT)>\t",
   "referencedBy": [
    "ALWAYS-MEMORIZED",
    "SPELL-CHECK",
    "PRE-CAST",
    "V-CAST"
   ]
  },
  "YOMIN-SPELL": {
   "name": "YOMIN-SPELL",
   "file": "globals.zil",
   "line": 984,
   "endLine": 993,
   "desc": "yomin spell",
   "ldesc": null,
   "fdesc": null,
   "loc": "SPELL-BOOK",
   "flags": [
    "NDESCBIT",
    "SPELLBIT"
   ],
   "synonyms": [
    "SPELLS",
    "SPELL"
   ],
   "adjectives": [
    "YOMIN"
   ],
   "action": "SPELL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "mind probe"
    ],
    "COUNT": [
     "0"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT YOMIN-SPELL\n\t(IN SPELL-BOOK)\n\t(SYNONYM SPELLS SPELL)\n\t(ADJECTIVE YOMIN)\n\t(DESC \"yomin spell\")\n\t(TEXT \"mind probe\")\n\t(COUNT 0)\n\t(SIZE 1)\n\t(FLAGS NDESCBIT SPELLBIT)\n\t(ACTION SPELL-F)>",
   "referencedBy": [
    "SPELL-CHECK",
    "PRE-CAST",
    "V-CAST"
   ]
  },
  "IZYUK-SPELL": {
   "name": "IZYUK-SPELL",
   "file": "globals.zil",
   "line": 995,
   "endLine": 1004,
   "desc": "izyuk spell",
   "ldesc": null,
   "fdesc": null,
   "loc": "SPELL-BOOK",
   "flags": [
    "NDESCBIT",
    "SPELLBIT",
    "VOWELBIT"
   ],
   "synonyms": [
    "SPELLS",
    "SPELL"
   ],
   "adjectives": [
    "IZYUK"
   ],
   "action": "SPELL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "fly like a bird"
    ],
    "COUNT": [
     "0"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT IZYUK-SPELL\n\t(IN SPELL-BOOK)\n\t(SYNONYM SPELLS SPELL)\n\t(ADJECTIVE IZYUK)\n\t(DESC \"izyuk spell\")\n\t(TEXT \"fly like a bird\")\n\t(COUNT 0)\n\t(ACTION SPELL-F)\n\t(SIZE 1)\n\t(FLAGS NDESCBIT SPELLBIT VOWELBIT)>",
   "referencedBy": [
    "SPELL-CHECK",
    "PRE-CAST",
    "V-CAST"
   ]
  },
  "PULVER-SPELL": {
   "name": "PULVER-SPELL",
   "file": "globals.zil",
   "line": 1025,
   "endLine": 1034,
   "desc": "pulver spell",
   "ldesc": null,
   "fdesc": null,
   "loc": "SPELL-BOOK",
   "flags": [
    "NDESCBIT",
    "SPELLBIT"
   ],
   "synonyms": [
    "SPELLS",
    "SPELL"
   ],
   "adjectives": [
    "PULVER"
   ],
   "action": "SPELL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "cause liquids to become dry"
    ],
    "COUNT": [
     "0"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT PULVER-SPELL\n\t(IN SPELL-BOOK)\n\t(SYNONYM SPELLS SPELL)\n\t(ADJECTIVE PULVER)\n\t(DESC \"pulver spell\")\n\t(TEXT \"cause liquids to become dry\")\n\t(COUNT 0)\n\t(SIZE 1)\n\t(FLAGS NDESCBIT SPELLBIT)\n\t(ACTION SPELL-F)>",
   "referencedBy": [
    "SPELL-CHECK",
    "PRE-CAST",
    "V-CAST"
   ]
  },
  "VEZZA-SPELL": {
   "name": "VEZZA-SPELL",
   "file": "globals.zil",
   "line": 1036,
   "endLine": 1045,
   "desc": "vezza spell",
   "ldesc": null,
   "fdesc": null,
   "loc": "SPELL-BOOK",
   "flags": [
    "NDESCBIT",
    "SPELLBIT"
   ],
   "synonyms": [
    "SPELLS",
    "SPELL"
   ],
   "adjectives": [
    "VEZZA"
   ],
   "action": "SPELL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "view the future"
    ],
    "COUNT": [
     "0"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT VEZZA-SPELL\n\t(IN SPELL-BOOK)\n\t(SYNONYM SPELLS SPELL)\n\t(ADJECTIVE VEZZA)\n\t(DESC \"vezza spell\")\n\t(TEXT \"view the future\")\n\t(COUNT 0)\n\t(SIZE 1)\n\t(FLAGS NDESCBIT SPELLBIT)\n\t(ACTION SPELL-F)>",
   "referencedBy": [
    "SPELL-CHECK",
    "PRE-CAST",
    "V-CAST"
   ]
  },
  "GLOBAL-SLEEP": {
   "name": "GLOBAL-SLEEP",
   "file": "globals.zil",
   "line": 1301,
   "endLine": 1307,
   "desc": "sleep",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NARTICLEBIT"
   ],
   "synonyms": [
    "SLEEP",
    "NAP",
    "SNOOZE",
    "WINKS"
   ],
   "adjectives": [
    "FORTY"
   ],
   "action": "GLOBAL-SLEEP-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-SLEEP\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"sleep\")\n\t(SYNONYM SLEEP NAP SNOOZE WINKS)\n\t(ADJECTIVE FORTY)\n\t(FLAGS NARTICLEBIT)\n\t(ACTION GLOBAL-SLEEP-F)>",
   "referencedBy": [
    "BED-F"
   ]
  },
  "BED": {
   "name": "BED",
   "file": "guild.zil",
   "line": 19,
   "endLine": 27,
   "desc": "bed",
   "ldesc": "Your bed occupies the far corner of the room.",
   "fdesc": null,
   "loc": "YOUR-QUARTERS",
   "flags": [
    "VEHBIT",
    "SURFACEBIT",
    "OPENBIT",
    "CONTBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "BED"
   ],
   "adjectives": [],
   "action": "BED-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "60"
    ]
   },
   "contents": [],
   "source": "<OBJECT BED\n\t(IN YOUR-QUARTERS)\n\t(DESC \"bed\")\n\t(LDESC\n\"Your bed occupies the far corner of the room.\")\n\t(SYNONYM BED)\n\t(FLAGS VEHBIT SURFACEBIT OPENBIT CONTBIT SEARCHBIT)\n\t(CAPACITY 60)\n\t(ACTION BED-F)>",
   "referencedBy": [
    "GLOBAL-SLEEP-F",
    "I-TIRED",
    "BED-F",
    "GLOBAL-BED-F",
    "V-SLEEP",
    "JIGS-UP"
   ]
  },
  "GLOBAL-BED": {
   "name": "GLOBAL-BED",
   "file": "guild.zil",
   "line": 29,
   "endLine": 34,
   "desc": "bed",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "VEHBIT",
    "SURFACEBIT",
    "OPENBIT",
    "CONTBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "BED"
   ],
   "adjectives": [],
   "action": "GLOBAL-BED-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-BED\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"bed\")\n\t(SYNONYM BED)\n\t(FLAGS VEHBIT SURFACEBIT OPENBIT CONTBIT SEARCHBIT)\n\t(ACTION GLOBAL-BED-F)>",
   "referencedBy": [
    "GLOBAL-BED-F"
   ]
  },
  "PARROT": {
   "name": "PARROT",
   "file": "guild.zil",
   "line": 92,
   "endLine": 101,
   "desc": "parrot",
   "ldesc": null,
   "fdesc": "Pacing back and forth on a perch in the corner is Belboz's prized pet\nparrot, native to the jungles of Miznia.",
   "loc": "BELBOZ-QUARTERS",
   "flags": [
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "PARROT",
    "BIRD",
    "POLLIB",
    "POLLY"
   ],
   "adjectives": [
    "PRIZED",
    "PET"
   ],
   "action": "PARROT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PARROT\n\t(IN BELBOZ-QUARTERS)\n\t(DESC \"parrot\")\n\t(FDESC\n\"Pacing back and forth on a perch in the corner is Belboz's prized pet\nparrot, native to the jungles of Miznia.\")\n\t(SYNONYM PARROT BIRD POLLIB POLLY)\n\t(ADJECTIVE PRIZED PET)\n\t(FLAGS TRYTAKEBIT)\n\t(ACTION PARROT-F)>",
   "referencedBy": [
    "I-PARROT",
    "V-TELL"
   ]
  },
  "BELBOZ-DESK": {
   "name": "BELBOZ-DESK",
   "file": "guild.zil",
   "line": 122,
   "endLine": 129,
   "desc": "darkwood desk",
   "ldesc": null,
   "fdesc": null,
   "loc": "BELBOZ-QUARTERS",
   "flags": [
    "SURFACEBIT",
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "DESK"
   ],
   "adjectives": [
    "WOOD",
    "WIDE",
    "CRAFTE",
    "DARK",
    "DARKWO"
   ],
   "action": "BELBOZ-DESK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "60"
    ]
   },
   "contents": [],
   "source": "<OBJECT BELBOZ-DESK\n\t(IN BELBOZ-QUARTERS)\n\t(DESC \"darkwood desk\")\n\t(SYNONYM DESK)\n\t(ADJECTIVE WOOD WIDE CRAFTE DARK DARKWO)\n\t(FLAGS SURFACEBIT NDESCBIT OPENBIT CONTBIT SEARCHBIT)\n\t(CAPACITY 60)\n\t(ACTION BELBOZ-DESK-F)>",
   "referencedBy": [
    "BELBOZ-DESK-F",
    "DESK-KLUDGE",
    "PRE-TAKE"
   ]
  },
  "DESK-DRAWER": {
   "name": "DESK-DRAWER",
   "file": "guild.zil",
   "line": 167,
   "endLine": 173,
   "desc": "desk drawer",
   "ldesc": null,
   "fdesc": null,
   "loc": "BELBOZ-QUARTERS",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "DRAWER"
   ],
   "adjectives": [
    "DESK"
   ],
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
    "TINY-BOX",
    "JOURNAL",
    "WHEEL"
   ],
   "source": "<OBJECT DESK-DRAWER\n\t(IN BELBOZ-QUARTERS)\n\t(DESC \"desk drawer\")\n\t(SYNONYM DRAWER)\n\t(ADJECTIVE DESK)\n\t(CAPACITY 40)\n\t(FLAGS NDESCBIT CONTBIT SEARCHBIT)>",
   "referencedBy": [
    "BELBOZ-DESK-F",
    "DESK-KLUDGE"
   ]
  },
  "TINY-BOX": {
   "name": "TINY-BOX",
   "file": "guild.zil",
   "line": 175,
   "endLine": 183,
   "desc": "tiny box",
   "ldesc": null,
   "fdesc": null,
   "loc": "DESK-DRAWER",
   "flags": [
    "CONTBIT",
    "SEARCHBIT",
    "TAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "BOX",
    "LID",
    "WRITIN"
   ],
   "adjectives": [
    "TINY"
   ],
   "action": "TINY-BOX-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "3"
    ],
    "SIZE": [
     "4"
    ]
   },
   "contents": [
    "MAGIC-AMULET"
   ],
   "source": "<OBJECT TINY-BOX\n\t(IN DESK-DRAWER)\n\t(DESC \"tiny box\")\n\t(SYNONYM BOX LID WRITIN)\n\t(ADJECTIVE TINY)\n\t(FLAGS CONTBIT SEARCHBIT TAKEBIT READBIT)\n\t(CAPACITY 3)\n\t(SIZE 4)\n\t(ACTION TINY-BOX-F)>",
   "referencedBy": []
  },
  "MAGIC-AMULET": {
   "name": "MAGIC-AMULET",
   "file": "guild.zil",
   "line": 209,
   "endLine": 217,
   "desc": "magic amulet",
   "ldesc": null,
   "fdesc": null,
   "loc": "TINY-BOX",
   "flags": [
    "TAKEBIT",
    "WEARBIT"
   ],
   "synonyms": [
    "AMULET",
    "JEWEL",
    "AGGTHORA"
   ],
   "adjectives": [
    "MAGIC",
    "BLUE"
   ],
   "action": "MAGIC-AMULET-F",
   "descfcn": "AMULET-DESCFCN",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ]
   },
   "contents": [],
   "source": "<OBJECT MAGIC-AMULET\n\t(IN TINY-BOX)\n\t(DESC \"magic amulet\")\n\t(SYNONYM AMULET JEWEL AGGTHORA)\n\t(ADJECTIVE MAGIC BLUE)\n\t(SIZE 3)\n\t(FLAGS TAKEBIT WEARBIT)\n\t(DESCFCN AMULET-DESCFCN)\n\t(ACTION MAGIC-AMULET-F)>",
   "referencedBy": []
  },
  "JOURNAL": {
   "name": "JOURNAL",
   "file": "guild.zil",
   "line": 298,
   "endLine": 307,
   "desc": "journal",
   "ldesc": "The personal journal of Belboz the Necromancer is lying here.",
   "fdesc": null,
   "loc": "DESK-DRAWER",
   "flags": [
    "TAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "DIARY",
    "NOTEBO",
    "ENTRIE",
    "JOURNA"
   ],
   "adjectives": [
    "PERSON",
    "NOTE",
    "LAST",
    "THREE"
   ],
   "action": "JOURNAL-F",
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
   "source": "<OBJECT JOURNAL\n\t(IN DESK-DRAWER)\n\t(DESC \"journal\")\n\t(LDESC\n\"The personal journal of Belboz the Necromancer is lying here.\")\n\t(SYNONYM DIARY NOTEBO ENTRIE JOURNA)\n\t(ADJECTIVE PERSON NOTE LAST THREE)\n\t(FLAGS TAKEBIT READBIT)\n\t(SIZE 10)\n\t(ACTION JOURNAL-F)>",
   "referencedBy": [
    "JOURNAL-F",
    "V-CLOSE"
   ]
  },
  "WHEEL": {
   "name": "WHEEL",
   "file": "guild.zil",
   "line": 352,
   "endLine": 359,
   "desc": "infotater",
   "ldesc": null,
   "fdesc": null,
   "loc": "DESK-DRAWER",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "VOWELBIT"
   ],
   "synonyms": [
    "INFOTA",
    "WHEEL"
   ],
   "adjectives": [
    "LEATHE",
    "BOUND",
    "DATA"
   ],
   "action": "WHEEL-F",
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
   "source": "<OBJECT WHEEL\n\t(IN DESK-DRAWER)\n\t(DESC \"infotater\")\n\t(SYNONYM INFOTA WHEEL)\n\t(ADJECTIVE LEATHE BOUND DATA)\n\t(FLAGS READBIT TAKEBIT VOWELBIT)\n\t(SIZE 10)\n\t(ACTION WHEEL-F)>",
   "referencedBy": []
  },
  "WALL-HANGING": {
   "name": "WALL-HANGING",
   "file": "guild.zil",
   "line": 382,
   "endLine": 388,
   "desc": "wall hanging",
   "ldesc": null,
   "fdesc": null,
   "loc": "BELBOZ-QUARTERS",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "HANGIN",
    "TAPEST"
   ],
   "adjectives": [
    "WALL",
    "BEAUTI",
    "WOVEN"
   ],
   "action": "WALL-HANGING-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WALL-HANGING\n\t(IN BELBOZ-QUARTERS)\n\t(DESC \"wall hanging\")\n\t(SYNONYM HANGIN TAPEST)\n\t(ADJECTIVE WALL BEAUTI WOVEN)\n\t(FLAGS NDESCBIT TRYTAKEBIT)\n\t(ACTION WALL-HANGING-F)>",
   "referencedBy": []
  },
  "KEY": {
   "name": "KEY",
   "file": "guild.zil",
   "line": 412,
   "endLine": 418,
   "desc": "small key",
   "ldesc": null,
   "fdesc": null,
   "loc": "DIAL",
   "flags": [
    "TAKEBIT",
    "TOOLBIT"
   ],
   "synonyms": [
    "KEY"
   ],
   "adjectives": [
    "TINY",
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
    ]
   },
   "contents": [],
   "source": "<OBJECT KEY\n\t(IN DIAL)\n\t(DESC \"small key\")\n\t(SYNONYM KEY)\n\t(ADJECTIVE TINY SMALL)\n\t(FLAGS TAKEBIT TOOLBIT)\n\t(SIZE 3)>",
   "referencedBy": [
    "JOURNAL-F",
    "WALL-HANGING-F"
   ]
  },
  "MORGIA-PLANT": {
   "name": "MORGIA-PLANT",
   "file": "guild.zil",
   "line": 420,
   "endLine": 426,
   "desc": "morgia plant",
   "ldesc": null,
   "fdesc": null,
   "loc": "BELBOZ-QUARTERS",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "PLANT",
    "PLANTS"
   ],
   "adjectives": [
    "MORGIA",
    "EXOTIC"
   ],
   "action": "MORGIA-PLANT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MORGIA-PLANT\n\t(IN BELBOZ-QUARTERS)\n\t(DESC \"morgia plant\")\n\t(SYNONYM PLANT PLANTS)\n\t(ADJECTIVE MORGIA EXOTIC)\n\t(FLAGS NDESCBIT TRYTAKEBIT)\n\t(ACTION MORGIA-PLANT-F)>",
   "referencedBy": [
    "SWANZO-BELBOZ",
    "BELBOZ-QUARTERS-F",
    "MORGIA-PLANT-F"
   ]
  },
  "GASPAR-SCROLL": {
   "name": "GASPAR-SCROLL",
   "file": "guild.zil",
   "line": 468,
   "endLine": 477,
   "desc": "shiny scroll",
   "ldesc": null,
   "fdesc": "Among Helistar's possessions is a scroll, new and shiny.",
   "loc": "HELISTAR-QUARTERS",
   "flags": [
    "TAKEBIT",
    "READBIT",
    "SCROLLBIT",
    "CONTBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "SCROLL"
   ],
   "adjectives": [
    "NEW",
    "SHINY"
   ],
   "action": "SCROLL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ]
   },
   "contents": [
    "GASPAR-SPELL"
   ],
   "source": "<OBJECT GASPAR-SCROLL\n\t(IN HELISTAR-QUARTERS)\n\t(DESC \"shiny scroll\")\n\t(FDESC\n\"Among Helistar's possessions is a scroll, new and shiny.\")\n\t(SYNONYM SCROLL)\n\t(ADJECTIVE NEW SHINY)\t\n\t(FLAGS TAKEBIT READBIT SCROLLBIT CONTBIT TRANSBIT)\n\t(SIZE 3)\n\t(ACTION SCROLL-F)>\t",
   "referencedBy": []
  },
  "GASPAR-SPELL": {
   "name": "GASPAR-SPELL",
   "file": "guild.zil",
   "line": 479,
   "endLine": 488,
   "desc": "gaspar spell",
   "ldesc": null,
   "fdesc": null,
   "loc": "GASPAR-SCROLL",
   "flags": [
    "NDESCBIT",
    "SPELLBIT"
   ],
   "synonyms": [
    "SPELLS",
    "SPELL"
   ],
   "adjectives": [
    "GASPAR"
   ],
   "action": "SPELL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "provide for your own resurrection"
    ],
    "COUNT": [
     "0"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT GASPAR-SPELL\n\t(IN GASPAR-SCROLL)\n\t(SYNONYM SPELLS SPELL)\n\t(ADJECTIVE GASPAR)\n\t(DESC \"gaspar spell\")\n\t(TEXT \"provide for your own resurrection\")\n\t(COUNT 0)\n\t(SIZE 1)\n\t(FLAGS NDESCBIT SPELLBIT)\n\t(ACTION SPELL-F)>",
   "referencedBy": [
    "SPELL-CHECK",
    "PRE-CAST",
    "V-CAST"
   ]
  },
  "FROBAR-NOTE": {
   "name": "FROBAR-NOTE",
   "file": "guild.zil",
   "line": 518,
   "endLine": 534,
   "desc": "scribbled note",
   "ldesc": null,
   "fdesc": "Tacked to the doorframe of your room is a note, hurriedly scribbled on\nparchment.",
   "loc": "HALLWAY-1",
   "flags": [
    "READBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "NOTE",
    "MESSAG"
   ],
   "adjectives": [
    "SCRIBB",
    "PARCHM"
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
     "\"I have taken the apprentices into town to shop for the Guild picnic. I\ntried rousing you, but you seemed deep asleep. By the way, have you seen\nBelboz anywhere? It's not like him to leave without telling someone -- but\nthen, he's been acting pretty odd of late.|\n|\n                            -- Frobar\""
    ]
   },
   "contents": [],
   "source": "<OBJECT FROBAR-NOTE\n\t(IN HALLWAY-1)\n\t(DESC \"scribbled note\")\n\t(FDESC\n\"Tacked to the doorframe of your room is a note, hurriedly scribbled on\nparchment.\")\n\t(SYNONYM NOTE MESSAG)\n\t(ADJECTIVE SCRIBB PARCHM)\n\t(FLAGS READBIT TAKEBIT)\n\t(SIZE 3)\n\t(TEXT\n\"\\\"I have taken the apprentices into town to shop for the Guild picnic. I\ntried rousing you, but you seemed deep asleep. By the way, have you seen\nBelboz anywhere? It's not like him to leave without telling someone -- but\nthen, he's been acting pretty odd of late.|\n|\n                            -- Frobar\\\"\")>",
   "referencedBy": []
  },
  "CHAMBER-DOOR": {
   "name": "CHAMBER-DOOR",
   "file": "guild.zil",
   "line": 579,
   "endLine": 584,
   "desc": "heavy wooden door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT"
   ],
   "synonyms": [
    "DOOR",
    "DOORS"
   ],
   "adjectives": [
    "HEAVY",
    "WOODEN"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CHAMBER-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"heavy wooden door\")\n\t(SYNONYM DOOR DOORS)\n\t(ADJECTIVE HEAVY WOODEN)\n\t(FLAGS DOORBIT)>",
   "referencedBy": [
    "HALLWAY-1-F",
    "CHAMBER-OF-THE-CIRCLE-F"
   ]
  },
  "TENETS": {
   "name": "TENETS",
   "file": "guild.zil",
   "line": 622,
   "endLine": 633,
   "desc": "list of tenets",
   "ldesc": null,
   "fdesc": null,
   "loc": "CHAMBER-OF-THE-CIRCLE",
   "flags": [
    "READBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "ENGRAV",
    "LIST",
    "TENETS",
    "TENET"
   ],
   "adjectives": [
    "ANCIEN",
    "FLOWER"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The first tenet states that Enchanters may never use their talents to aid\nevil. The second points out that an Enchanter's duty is to the Guild and to\nthe Kingdom, not to the individual. Lesser tenets include rules for\nconducting votes at meetings, guidelines for passing dishes at Guild\nbanquets, and penalties for revealing the Guild's secret handshake."
    ]
   },
   "contents": [],
   "source": "<OBJECT TENETS\n\t(IN CHAMBER-OF-THE-CIRCLE)\n\t(DESC \"list of tenets\")\n\t(SYNONYM ENGRAV LIST TENETS TENET)\n\t(ADJECTIVE ANCIEN FLOWER)\n\t(FLAGS READBIT NDESCBIT)\n\t(TEXT\n\"The first tenet states that Enchanters may never use their talents to aid\nevil. The second points out that an Enchanter's duty is to the Guild and to\nthe Kingdom, not to the individual. Lesser tenets include rules for\nconducting votes at meetings, guidelines for passing dishes at Guild\nbanquets, and penalties for revealing the Guild's secret handshake.\")>",
   "referencedBy": [
    "WALLS-F"
   ]
  },
  "MAILBOX": {
   "name": "MAILBOX",
   "file": "guild.zil",
   "line": 663,
   "endLine": 672,
   "desc": "receptacle",
   "ldesc": "Affixed to the southern arch is an ornate brass receptacle, intended\nfor use by messengers.",
   "fdesc": null,
   "loc": "LOBBY",
   "flags": [
    "CONTBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "MAILBO",
    "RECEPT"
   ],
   "adjectives": [
    "ORNATE",
    "BRASS"
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
   "contents": [],
   "source": "<OBJECT MAILBOX\n\t(IN LOBBY)\n\t(DESC \"receptacle\")\n\t(LDESC\n\"Affixed to the southern arch is an ornate brass receptacle, intended\nfor use by messengers.\")\n\t(SYNONYM MAILBO RECEPT)\n\t(ADJECTIVE ORNATE BRASS)\n\t(FLAGS CONTBIT SEARCHBIT)\n\t(CAPACITY 20)>",
   "referencedBy": [
    "I-MAILMAN"
   ]
  },
  "MAGAZINE": {
   "name": "MAGAZINE",
   "file": "guild.zil",
   "line": 696,
   "endLine": 703,
   "desc": "issue of Popular Enchanting",
   "ldesc": null,
   "fdesc": null,
   "loc": "DIAL",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "VOWELBIT"
   ],
   "synonyms": [
    "MAGAZI",
    "ISSUE",
    "ENCHAN",
    "LABEL"
   ],
   "adjectives": [
    "POPULA"
   ],
   "action": "MAGAZINE-F",
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
   "source": "<OBJECT MAGAZINE\n\t(IN DIAL)\n\t(DESC \"issue of Popular Enchanting\")\n\t(SYNONYM MAGAZI ISSUE ENCHAN LABEL)\n\t(ADJECTIVE POPULA)\n\t(FLAGS READBIT TAKEBIT VOWELBIT)\n\t(SIZE 7)\n\t(ACTION MAGAZINE-F)>",
   "referencedBy": [
    "I-MAILMAN"
   ]
  },
  "VILSTU-VIAL": {
   "name": "VILSTU-VIAL",
   "file": "guild.zil",
   "line": 719,
   "endLine": 729,
   "desc": "orange vial",
   "ldesc": "An orange vial, labelled in tiny letters, is lying here.",
   "fdesc": null,
   "loc": "DIAL",
   "flags": [
    "CONTBIT",
    "SEARCHBIT",
    "READBIT",
    "TAKEBIT",
    "VOWELBIT",
    "VIALBIT"
   ],
   "synonyms": [
    "VIAL",
    "VIALS",
    "LABEL",
    "LETTER"
   ],
   "adjectives": [
    "VIVID",
    "ORANGE",
    "VILSTU",
    "TINY"
   ],
   "action": "VILSTU-VIAL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ],
    "CAPACITY": [
     "1"
    ]
   },
   "contents": [
    "VILSTU-POTION"
   ],
   "source": "<OBJECT VILSTU-VIAL\n\t(IN DIAL)\n\t(DESC \"orange vial\")\n\t(LDESC\n\"An orange vial, labelled in tiny letters, is lying here.\")\n\t(SYNONYM VIAL VIALS LABEL LETTER)\n\t(ADJECTIVE VIVID ORANGE VILSTU TINY)\n\t(FLAGS CONTBIT SEARCHBIT READBIT TAKEBIT VOWELBIT VIALBIT)\n\t(SIZE 3)\n\t(CAPACITY 1)\n\t(ACTION VILSTU-VIAL-F)>",
   "referencedBy": [
    "I-MAILMAN",
    "VILSTU-POTION-F",
    "SCORE-OBJECT"
   ]
  },
  "VILSTU-POTION": {
   "name": "VILSTU-POTION",
   "file": "guild.zil",
   "line": 740,
   "endLine": 746,
   "desc": "orange potion",
   "ldesc": null,
   "fdesc": null,
   "loc": "VILSTU-VIAL",
   "flags": [
    "NARTICLEBIT",
    "VOWELBIT"
   ],
   "synonyms": [
    "POTION"
   ],
   "adjectives": [
    "ORANGE",
    "VILSTU"
   ],
   "action": "VILSTU-POTION-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT VILSTU-POTION\n\t(IN VILSTU-VIAL)\n\t(DESC \"orange potion\")\n\t(SYNONYM POTION)\n\t(ADJECTIVE ORANGE VILSTU)\n\t(FLAGS NARTICLEBIT VOWELBIT)\n\t(ACTION VILSTU-POTION-F)>",
   "referencedBy": [
    "VILSTU-POTION-F",
    "I-BREATHE",
    "V-PULVER"
   ]
  },
  "ENCYCLOPEDIA": {
   "name": "ENCYCLOPEDIA",
   "file": "guild.zil",
   "line": 831,
   "endLine": 840,
   "desc": "copy of Encyclopedia Frobizzica",
   "ldesc": null,
   "fdesc": null,
   "loc": "LIBRARY",
   "flags": [
    "READBIT",
    "TRYTAKEBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "ENCYCL",
    "COPY",
    "VOLUME",
    "FROBIZ"
   ],
   "adjectives": [
    "HEAVY",
    "ENCYCL"
   ],
   "action": "ENCYCLOPEDIA-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "It would take days to read the entire encyclopedia. A better idea\nwould be to read about specific persons or things."
    ]
   },
   "contents": [],
   "source": "<OBJECT ENCYCLOPEDIA\n\t(IN LIBRARY)\n\t(DESC \"copy of Encyclopedia Frobizzica\")\n\t(SYNONYM ENCYCL COPY VOLUME FROBIZ)\n\t(ADJECTIVE HEAVY ENCYCL)\n\t(FLAGS READBIT TRYTAKEBIT NDESCBIT)\n\t(TEXT\n\"It would take days to read the entire encyclopedia. A better idea\nwould be to read about specific persons or things.\")\n\t(ACTION ENCYCLOPEDIA-F)>",
   "referencedBy": [
    "PRE-RESEARCH"
   ]
  },
  "MEEF-SCROLL": {
   "name": "MEEF-SCROLL",
   "file": "guild.zil",
   "line": 870,
   "endLine": 880,
   "desc": "dusty scroll",
   "ldesc": null,
   "fdesc": "The servants have been lax lately, for a scroll is lying among the dust\nin the corner.",
   "loc": "LIBRARY",
   "flags": [
    "TAKEBIT",
    "READBIT",
    "SCROLLBIT",
    "CONTBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "SCROLL"
   ],
   "adjectives": [
    "DUSTY"
   ],
   "action": "SCROLL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ]
   },
   "contents": [
    "MEEF-SPELL"
   ],
   "source": "<OBJECT MEEF-SCROLL\n\t(IN LIBRARY)\n\t(DESC \"dusty scroll\")\n\t(FDESC\n\"The servants have been lax lately, for a scroll is lying among the dust\nin the corner.\")\n\t(SYNONYM SCROLL)\n\t(ADJECTIVE DUSTY)\n\t(SIZE 3)\n\t(FLAGS TAKEBIT READBIT SCROLLBIT CONTBIT TRANSBIT)\n\t(ACTION SCROLL-F)>",
   "referencedBy": [
    "SCORE-OBJECT"
   ]
  },
  "MEEF-SPELL": {
   "name": "MEEF-SPELL",
   "file": "guild.zil",
   "line": 882,
   "endLine": 891,
   "desc": "meef spell",
   "ldesc": null,
   "fdesc": null,
   "loc": "MEEF-SCROLL",
   "flags": [
    "NDESCBIT",
    "SPELLBIT"
   ],
   "synonyms": [
    "SPELLS",
    "SPELL"
   ],
   "adjectives": [
    "MEEF"
   ],
   "action": "SPELL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "cause plants to wilt"
    ],
    "SIZE": [
     "1"
    ],
    "COUNT": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT MEEF-SPELL\n\t(IN MEEF-SCROLL)\n\t(SYNONYM SPELLS SPELL)\n\t(ADJECTIVE MEEF)\n\t(DESC \"meef spell\")\n\t(TEXT \"cause plants to wilt\")\n\t(SIZE 1)\n\t(COUNT 0)\n\t(FLAGS NDESCBIT SPELLBIT)\n\t(ACTION SPELL-F)> ",
   "referencedBy": [
    "SPELL-CHECK",
    "PRE-CAST",
    "V-CAST"
   ]
  },
  "BERZIO-VIAL": {
   "name": "BERZIO-VIAL",
   "file": "guild.zil",
   "line": 903,
   "endLine": 913,
   "desc": "ochre vial",
   "ldesc": null,
   "fdesc": "Among the provisions here is a small ochre-colored vial,\nclosed and labelled with tiny lettering.",
   "loc": "STORE-ROOM",
   "flags": [
    "CONTBIT",
    "SEARCHBIT",
    "TAKEBIT",
    "VOWELBIT",
    "READBIT",
    "VIALBIT"
   ],
   "synonyms": [
    "VIAL",
    "VIALS",
    "LABEL",
    "LETTER"
   ],
   "adjectives": [
    "BERZIO",
    "OCHRE",
    "SMALL",
    "TINY"
   ],
   "action": "BERZIO-VIAL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ],
    "CAPACITY": [
     "1"
    ]
   },
   "contents": [
    "BERZIO-POTION"
   ],
   "source": "<OBJECT BERZIO-VIAL\n\t(IN STORE-ROOM)\n\t(DESC \"ochre vial\")\n\t(FDESC \"Among the provisions here is a small ochre-colored vial,\nclosed and labelled with tiny lettering.\")\n\t(SYNONYM VIAL VIALS LABEL LETTER)\n\t(ADJECTIVE BERZIO OCHRE SMALL TINY)\n\t(SIZE 3)\n\t(CAPACITY 1)\n\t(FLAGS CONTBIT SEARCHBIT TAKEBIT VOWELBIT READBIT VIALBIT)\n\t(ACTION BERZIO-VIAL-F)>",
   "referencedBy": [
    "BERZIO-POTION-F"
   ]
  },
  "BERZIO-POTION": {
   "name": "BERZIO-POTION",
   "file": "guild.zil",
   "line": 924,
   "endLine": 930,
   "desc": "ochre potion",
   "ldesc": null,
   "fdesc": null,
   "loc": "BERZIO-VIAL",
   "flags": [
    "NARTICLEBIT",
    "VOWELBIT"
   ],
   "synonyms": [
    "POTION"
   ],
   "adjectives": [
    "OCHRE",
    "BERZIO"
   ],
   "action": "BERZIO-POTION-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BERZIO-POTION\n\t(IN BERZIO-VIAL)\n\t(DESC \"ochre potion\")\n\t(SYNONYM POTION)\n\t(ADJECTIVE OCHRE BERZIO)\n\t(FLAGS NARTICLEBIT VOWELBIT)\n\t(ACTION BERZIO-POTION-F)>",
   "referencedBy": [
    "BERZIO-POTION-F",
    "V-PULVER"
   ]
  },
  "MATCHBOOK": {
   "name": "MATCHBOOK",
   "file": "guild.zil",
   "line": 964,
   "endLine": 971,
   "desc": "depleted matchbook",
   "ldesc": null,
   "fdesc": null,
   "loc": "STORE-ROOM",
   "flags": [
    "READBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "MATCHE",
    "MATCHB",
    "COVER",
    "PRINTI"
   ],
   "adjectives": [
    "MATCH",
    "DEPLET",
    "INNER"
   ],
   "action": "MATCHBOOK-F",
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
   "source": "<OBJECT MATCHBOOK\n\t(IN STORE-ROOM)\n\t(DESC \"depleted matchbook\")\n\t(SYNONYM MATCHE MATCHB COVER PRINTI)\n\t(ADJECTIVE MATCH DEPLET INNER)\n\t(FLAGS READBIT TAKEBIT)\n\t(SIZE 3)\n\t(ACTION MATCHBOOK-F)>",
   "referencedBy": [
    "I-MAILMAN"
   ]
  },
  "CALENDAR": {
   "name": "CALENDAR",
   "file": "guild.zil",
   "line": 996,
   "endLine": 1008,
   "desc": "calendar",
   "ldesc": null,
   "fdesc": null,
   "loc": "STORE-ROOM",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "ONBIT"
   ],
   "synonyms": [
    "CALEND",
    "LEGEND"
   ],
   "adjectives": [],
   "action": "CALENDAR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "8"
    ],
    "TEXT": [
     "The calendar is for the current year, 957 GUE, and bears many stunning\npictures: the marble mines of Antharia, the sand dunes of the Kovalli\nDesert, ancient Fort Griffspotter, and the giant infotater factories of\nBorphee. A legend reads \"Best wishes for a leak-less year, from the\nAccardi Plumbers Guild.\""
    ]
   },
   "contents": [],
   "source": "<OBJECT CALENDAR\n\t(IN STORE-ROOM)\n\t(DESC \"calendar\")\n\t(SYNONYM CALEND LEGEND)\n\t(SIZE 8)\n\t(FLAGS READBIT TAKEBIT ONBIT)\n\t(TEXT\n\"The calendar is for the current year, 957 GUE, and bears many stunning\npictures: the marble mines of Antharia, the sand dunes of the Kovalli\nDesert, ancient Fort Griffspotter, and the giant infotater factories of\nBorphee. A legend reads \\\"Best wishes for a leak-less year, from the\nAccardi Plumbers Guild.\\\"\")\n\t(ACTION CALENDAR-F)>",
   "referencedBy": [
    "CALENDAR-F"
   ]
  },
  "TRUNK": {
   "name": "TRUNK",
   "file": "guild.zil",
   "line": 1070,
   "endLine": 1083,
   "desc": "sturdy trunk",
   "ldesc": "At the far end of the cellar, draped in cobwebs, is a large trunk. At\neach corner of its lid is a button: a black button with a picture of a\nstar, a gray button depicting the moon, a red button illustrated with\na bloody knife, and a purple button engraved with a royal crown. In the\ncenter of the lid is a white button picturing a dove in flight.",
   "fdesc": null,
   "loc": "CELLAR",
   "flags": [
    "CONTBIT",
    "SEARCHBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "TRUNK",
    "LID",
    "CHEST"
   ],
   "adjectives": [
    "LARGE",
    "STURDY"
   ],
   "action": "TRUNK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "60"
    ]
   },
   "contents": [
    "AIMFIZ-SCROLL"
   ],
   "source": "<OBJECT TRUNK\n\t(IN CELLAR)\n\t(DESC \"sturdy trunk\")\n\t(LDESC\n\"At the far end of the cellar, draped in cobwebs, is a large trunk. At\neach corner of its lid is a button: a black button with a picture of a\nstar, a gray button depicting the moon, a red button illustrated with\na bloody knife, and a purple button engraved with a royal crown. In the\ncenter of the lid is a white button picturing a dove in flight.\")\n\t(SYNONYM TRUNK LID CHEST)\n\t(ADJECTIVE LARGE STURDY)\n\t(FLAGS CONTBIT SEARCHBIT TRYTAKEBIT)\n\t(CAPACITY 60)\n\t(ACTION TRUNK-F)>",
   "referencedBy": [
    "TRUNK-F",
    "BUTTON-F"
   ]
  },
  "BLACK-BUTTON": {
   "name": "BLACK-BUTTON",
   "file": "guild.zil",
   "line": 1097,
   "endLine": 1103,
   "desc": "black button",
   "ldesc": null,
   "fdesc": null,
   "loc": "CELLAR",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON",
    "STAR"
   ],
   "adjectives": [
    "BLACK"
   ],
   "action": "BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BLACK-BUTTON\n\t(IN CELLAR)\n\t(DESC \"black button\")\n\t(SYNONYM BUTTON STAR)\n\t(ADJECTIVE BLACK)\n\t(FLAGS NDESCBIT)\n\t(ACTION BUTTON-F)>",
   "referencedBy": [
    "BUTTON-F"
   ]
  },
  "GRAY-BUTTON": {
   "name": "GRAY-BUTTON",
   "file": "guild.zil",
   "line": 1105,
   "endLine": 1111,
   "desc": "gray button",
   "ldesc": null,
   "fdesc": null,
   "loc": "CELLAR",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON",
    "MOON"
   ],
   "adjectives": [
    "GRAY",
    "GREY"
   ],
   "action": "BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GRAY-BUTTON\n\t(IN CELLAR)\n\t(DESC \"gray button\")\n\t(SYNONYM BUTTON MOON)\n\t(ADJECTIVE GRAY GREY)\n\t(FLAGS NDESCBIT)\n\t(ACTION BUTTON-F)>",
   "referencedBy": [
    "BUTTON-F"
   ]
  },
  "RED-BUTTON": {
   "name": "RED-BUTTON",
   "file": "guild.zil",
   "line": 1113,
   "endLine": 1119,
   "desc": "red button",
   "ldesc": null,
   "fdesc": null,
   "loc": "CELLAR",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON",
    "KNIFE"
   ],
   "adjectives": [
    "BLOODY",
    "RED"
   ],
   "action": "BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RED-BUTTON\n\t(IN CELLAR)\n\t(DESC \"red button\")\n\t(SYNONYM BUTTON KNIFE)\n\t(ADJECTIVE BLOODY RED)\n\t(FLAGS NDESCBIT)\n\t(ACTION BUTTON-F)>",
   "referencedBy": [
    "BUTTON-F"
   ]
  },
  "PURPLE-BUTTON": {
   "name": "PURPLE-BUTTON",
   "file": "guild.zil",
   "line": 1121,
   "endLine": 1127,
   "desc": "purple button",
   "ldesc": null,
   "fdesc": null,
   "loc": "CELLAR",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON",
    "CROWN"
   ],
   "adjectives": [
    "PURPLE",
    "ROYAL"
   ],
   "action": "BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PURPLE-BUTTON\n\t(IN CELLAR)\n\t(DESC \"purple button\")\n\t(SYNONYM BUTTON CROWN)\n\t(ADJECTIVE PURPLE ROYAL)\n\t(FLAGS NDESCBIT)\n\t(ACTION BUTTON-F)>",
   "referencedBy": [
    "BUTTON-F"
   ]
  },
  "WHITE-BUTTON": {
   "name": "WHITE-BUTTON",
   "file": "guild.zil",
   "line": 1129,
   "endLine": 1135,
   "desc": "white button",
   "ldesc": null,
   "fdesc": null,
   "loc": "CELLAR",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON",
    "DOVE"
   ],
   "adjectives": [
    "WHITE"
   ],
   "action": "BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WHITE-BUTTON\n\t(IN CELLAR)\n\t(DESC \"white button\")\n\t(SYNONYM BUTTON DOVE)\n\t(ADJECTIVE WHITE)\n\t(FLAGS NDESCBIT)\n\t(ACTION BUTTON-F)>",
   "referencedBy": [
    "BUTTON-F"
   ]
  },
  "AIMFIZ-SCROLL": {
   "name": "AIMFIZ-SCROLL",
   "file": "guild.zil",
   "line": 1167,
   "endLine": 1174,
   "desc": "moldy scroll",
   "ldesc": null,
   "fdesc": null,
   "loc": "TRUNK",
   "flags": [
    "TAKEBIT",
    "TRANSBIT",
    "CONTBIT",
    "READBIT",
    "SCROLLBIT"
   ],
   "synonyms": [
    "SCROLL"
   ],
   "adjectives": [
    "MOLDY"
   ],
   "action": "SCROLL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ]
   },
   "contents": [
    "AIMFIZ-SPELL"
   ],
   "source": "<OBJECT AIMFIZ-SCROLL\n\t(IN TRUNK)\n\t(DESC \"moldy scroll\")\n\t(SYNONYM SCROLL)\n\t(ADJECTIVE MOLDY)\n\t(SIZE 3)\n\t(FLAGS TAKEBIT TRANSBIT CONTBIT READBIT SCROLLBIT)\n\t(ACTION SCROLL-F)>",
   "referencedBy": [
    "SPELL-TIMES"
   ]
  },
  "AIMFIZ-SPELL": {
   "name": "AIMFIZ-SPELL",
   "file": "guild.zil",
   "line": 1176,
   "endLine": 1185,
   "desc": "aimfiz spell",
   "ldesc": null,
   "fdesc": null,
   "loc": "AIMFIZ-SCROLL",
   "flags": [
    "NDESCBIT",
    "SPELLBIT",
    "VOWELBIT"
   ],
   "synonyms": [
    "SPELLS",
    "SPELL"
   ],
   "adjectives": [
    "AIMFIZ"
   ],
   "action": "SPELL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "transport caster to someone else's location"
    ],
    "SIZE": [
     "1"
    ],
    "COUNT": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT AIMFIZ-SPELL\n\t(IN AIMFIZ-SCROLL)\n\t(SYNONYM SPELLS SPELL)\n\t(ADJECTIVE AIMFIZ)\n\t(DESC \"aimfiz spell\")\n\t(TEXT \"transport caster to someone else's location\")\n\t(SIZE 1)\n\t(COUNT 0)\n\t(FLAGS NDESCBIT SPELLBIT VOWELBIT)\n\t(ACTION SPELL-F)>",
   "referencedBy": [
    "NOT-HERE-OBJECT-F",
    "SCROLL-F",
    "SPELL-CHECK",
    "PRE-CAST",
    "V-CAST",
    "SPELL-TIMES",
    "V-GNUSTO"
   ]
  },
  "MAZE": {
   "name": "MAZE",
   "file": "maze.zil",
   "line": 5,
   "endLine": 11,
   "desc": "glass maze",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "MAZE",
    "LABYRI"
   ],
   "adjectives": [
    "GLASS"
   ],
   "action": "MAZE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MAZE\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"glass maze\")\n\t(SYNONYM MAZE LABYRI)\n\t(ADJECTIVE GLASS)\n\t(FLAGS NDESCBIT)\n\t(ACTION MAZE-F)>",
   "referencedBy": [
    "GROUND-F",
    "WALLS-F",
    "CEILING-F",
    "ENCYCLOPEDIA-F",
    "PRE-RESEARCH"
   ]
  },
  "HOVEL": {
   "name": "HOVEL",
   "file": "maze.zil",
   "line": 51,
   "endLine": 57,
   "desc": "stone hovel",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "HUT",
    "HOVEL"
   ],
   "adjectives": [
    "UNDERG",
    "STONE"
   ],
   "action": "HOVEL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HOVEL\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"stone hovel\")\n\t(SYNONYM HUT HOVEL)\n\t(ADJECTIVE UNDERG STONE)\n\t(FLAGS NDESCBIT)\n\t(ACTION HOVEL-F)>",
   "referencedBy": []
  },
  "FIREPLACE": {
   "name": "FIREPLACE",
   "file": "maze.zil",
   "line": 99,
   "endLine": 106,
   "desc": "fireplace",
   "ldesc": null,
   "fdesc": null,
   "loc": "STONE-HUT",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "FIREPL"
   ],
   "adjectives": [
    "SMALL",
    "UNUSED"
   ],
   "action": "FIREPLACE-F",
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
   "source": "<OBJECT FIREPLACE\n\t(IN STONE-HUT)\n\t(DESC \"fireplace\")\n\t(SYNONYM FIREPL)\n\t(ADJECTIVE SMALL UNUSED)\n\t(FLAGS NDESCBIT CONTBIT OPENBIT SEARCHBIT)\n\t(CAPACITY 50)\n\t(ACTION FIREPLACE-F)>",
   "referencedBy": [
    "BRICK-STRUCTURE-F",
    "MAIN-LOOP-1",
    "PRE-RESEARCH"
   ]
  },
  "STATUE": {
   "name": "STATUE",
   "file": "maze.zil",
   "line": 125,
   "endLine": 140,
   "desc": "statue",
   "ldesc": "There is a marble statue here, in a strikingly life-like pose of\npompous bellicosity.",
   "fdesc": "Standing in the center of the hall is a life-sized statue. An inscription\nat the base is in a familiar language.",
   "loc": "ENTRANCE-HALL",
   "flags": [
    "READBIT"
   ],
   "synonyms": [
    "STATUE",
    "INSCRI"
   ],
   "adjectives": [
    "LIFE-",
    "SIZED",
    "MARBLE"
   ],
   "action": "STATUE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "\"I, Duncanthrax, King of Quendor and all its subjugated outlands, invite\nyou to sample the delights of my Glass Labyrinth.\""
    ]
   },
   "contents": [],
   "source": "<OBJECT STATUE\n\t(IN ENTRANCE-HALL)\n\t(DESC \"statue\")\n\t(FDESC\n\"Standing in the center of the hall is a life-sized statue. An inscription\nat the base is in a familiar language.\")\n\t(LDESC\n\"There is a marble statue here, in a strikingly life-like pose of\npompous bellicosity.\")\n\t(SYNONYM STATUE INSCRI)\n\t(ADJECTIVE LIFE- SIZED MARBLE)\n\t(FLAGS READBIT)\n\t(TEXT\n\"\\\"I, Duncanthrax, King of Quendor and all its subjugated outlands, invite\nyou to sample the delights of my Glass Labyrinth.\\\"\")\n\t(ACTION STATUE-F)>",
   "referencedBy": [
    "STATUE-F"
   ]
  },
  "CHIMNEY": {
   "name": "CHIMNEY",
   "file": "maze.zil",
   "line": 693,
   "endLine": 698,
   "desc": "chimney",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "CHIMNE"
   ],
   "adjectives": [],
   "action": "CHIMNEY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CHIMNEY\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"chimney\")\n\t(SYNONYM CHIMNE)\n\t(FLAGS NDESCBIT)\n\t(ACTION CHIMNEY-F)>",
   "referencedBy": [
    "CHIMNEY-F",
    "PRE-RESEARCH"
   ]
  },
  "BRICK-STRUCTURE": {
   "name": "BRICK-STRUCTURE",
   "file": "maze.zil",
   "line": 711,
   "endLine": 717,
   "desc": "brick structure",
   "ldesc": null,
   "fdesc": null,
   "loc": "HOLLOW",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "STRUCT",
    "BRICKS",
    "SHAFT",
    "OPENIN"
   ],
   "adjectives": [
    "BRICK",
    "RECTAN",
    "SMALL"
   ],
   "action": "BRICK-STRUCTURE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BRICK-STRUCTURE\n\t(IN HOLLOW)\n\t(DESC \"brick structure\")\n\t(SYNONYM STRUCT BRICKS SHAFT OPENIN)\n\t(ADJECTIVE BRICK RECTAN SMALL)\n\t(FLAGS NDESCBIT)\n\t(ACTION BRICK-STRUCTURE-F)>",
   "referencedBy": [
    "HOLE-F",
    "CHIMNEY-F",
    "BRICK-STRUCTURE-F"
   ]
  },
  "SOOT": {
   "name": "SOOT",
   "file": "maze.zil",
   "line": 742,
   "endLine": 747,
   "desc": "soot",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "NARTICLEBIT"
   ],
   "synonyms": [
    "SOOT",
    "QUANTI"
   ],
   "adjectives": [
    "LARGE",
    "BLACK"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SOOT\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"soot\")\n\t(SYNONYM SOOT QUANTI)\n\t(ADJECTIVE LARGE BLACK)\n\t(FLAGS NDESCBIT NARTICLEBIT)>",
   "referencedBy": []
  },
  "SWANZO-SCROLL": {
   "name": "SWANZO-SCROLL",
   "file": "maze.zil",
   "line": 749,
   "endLine": 756,
   "desc": "parchment scroll",
   "ldesc": null,
   "fdesc": null,
   "loc": "HOLLOW",
   "flags": [
    "TAKEBIT",
    "TRYTAKEBIT",
    "TRANSBIT",
    "CONTBIT",
    "READBIT",
    "SCROLLBIT"
   ],
   "synonyms": [
    "SCROLL"
   ],
   "adjectives": [
    "PARCHM"
   ],
   "action": "SCROLL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ]
   },
   "contents": [
    "SWANZO-SPELL"
   ],
   "source": "<OBJECT SWANZO-SCROLL\n\t(IN HOLLOW)\n\t(DESC \"parchment scroll\")\n\t(SYNONYM SCROLL)\n\t(ADJECTIVE PARCHM)\n\t(SIZE 3)\n\t(FLAGS TAKEBIT TRYTAKEBIT TRANSBIT CONTBIT READBIT SCROLLBIT)\n\t(ACTION SCROLL-F)>",
   "referencedBy": [
    "SCROLL-F",
    "BRICK-STRUCTURE-F",
    "SCORE-OBJECT",
    "JIGS-UP"
   ]
  },
  "SWANZO-SPELL": {
   "name": "SWANZO-SPELL",
   "file": "maze.zil",
   "line": 758,
   "endLine": 767,
   "desc": "swanzo spell",
   "ldesc": null,
   "fdesc": null,
   "loc": "SWANZO-SCROLL",
   "flags": [
    "NDESCBIT",
    "SPELLBIT",
    "VOWELBIT"
   ],
   "synonyms": [
    "SPELLS",
    "SPELL"
   ],
   "adjectives": [
    "SWANZO"
   ],
   "action": "SPELL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "exorcise an inhabiting presence"
    ],
    "SIZE": [
     "1"
    ],
    "COUNT": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT SWANZO-SPELL\n\t(IN SWANZO-SCROLL)\n\t(SYNONYM SPELLS SPELL)\n\t(ADJECTIVE SWANZO)\n\t(DESC \"swanzo spell\")\n\t(TEXT \"exorcise an inhabiting presence\")\n\t(SIZE 1)\n\t(COUNT 0)\n\t(FLAGS NDESCBIT SPELLBIT VOWELBIT)\n\t(ACTION SPELL-F)>",
   "referencedBy": [
    "SPELL-CHECK",
    "PRE-CAST",
    "V-CAST"
   ]
  },
  "DORN-BEAST": {
   "name": "DORN-BEAST",
   "file": "maze.zil",
   "line": 769,
   "endLine": 774,
   "desc": "ferocious dorn beast",
   "ldesc": null,
   "fdesc": null,
   "loc": "DIAL",
   "flags": [],
   "synonyms": [
    "DORNBE",
    "DORN",
    "BEAST",
    "DORNS"
   ],
   "adjectives": [
    "FEROCI",
    "DORN"
   ],
   "action": "DORN-BEAST-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DORN-BEAST\n\t(IN DIAL)\n\t(DESC \"ferocious dorn beast\")\n\t(SYNONYM DORNBE DORN BEAST DORNS)\n\t(ADJECTIVE FEROCI DORN)\n\t(ACTION DORN-BEAST-F)>",
   "referencedBy": [
    "I-DORN-BEAST",
    "IKILL",
    "KILL-INTERRUPTS"
   ]
  },
  "DORN-BEAST-CORPSE": {
   "name": "DORN-BEAST-CORPSE",
   "file": "maze.zil",
   "line": 781,
   "endLine": 788,
   "desc": "splattered body",
   "ldesc": "A somewhat splattered corpse is sprawled across the floor.",
   "fdesc": null,
   "loc": "DIAL",
   "flags": [],
   "synonyms": [
    "CORPSE",
    "BODY"
   ],
   "adjectives": [
    "DEAD",
    "SPLATT"
   ],
   "action": "CORPSE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DORN-BEAST-CORPSE\n\t(IN DIAL)\n\t(DESC \"splattered body\")\n\t(LDESC\n\"A somewhat splattered corpse is sprawled across the floor.\")\n        (SYNONYM CORPSE BODY)\n\t(ADJECTIVE DEAD SPLATT)\n\t(ACTION CORPSE-F)>",
   "referencedBy": [
    "MAZE-TO-TABLE",
    "I-DORN-BEAST"
   ]
  },
  "BOZBARLAND": {
   "name": "BOZBARLAND",
   "file": "park.zil",
   "line": 5,
   "endLine": 11,
   "desc": "amusement park",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "VOWELBIT"
   ],
   "synonyms": [
    "PARK",
    "BOZBAR"
   ],
   "adjectives": [
    "AMUSEM",
    "ZORKY"
   ],
   "action": "BOZBARLAND-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BOZBARLAND\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"amusement park\")\n\t(SYNONYM PARK BOZBAR)\n\t(ADJECTIVE AMUSEM ZORKY)\n\t(FLAGS NDESCBIT VOWELBIT)\n\t(ACTION BOZBARLAND-F)>",
   "referencedBy": [
    "BOZBARLAND-F",
    "PARK-SIGN-PSEUDO"
   ]
  },
  "PARK-GNOME": {
   "name": "PARK-GNOME",
   "file": "park.zil",
   "line": 79,
   "endLine": 86,
   "desc": "gnome",
   "ldesc": "A gnome, dressed in flashy attire, stands here looking impatient.",
   "fdesc": null,
   "loc": "DIAL",
   "flags": [
    "ACTORBIT"
   ],
   "synonyms": [
    "GNOME"
   ],
   "adjectives": [],
   "action": "PARK-GNOME-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PARK-GNOME\n\t(IN DIAL)\n\t(DESC \"gnome\")\n\t(LDESC\n\"A gnome, dressed in flashy attire, stands here looking impatient.\")\n\t(SYNONYM GNOME)\n\t(FLAGS ACTORBIT)\n\t(ACTION PARK-GNOME-F)>",
   "referencedBy": [
    "WEAR-OFF-SPELLS",
    "AMUSEMENT-PARK-ENTER-F",
    "I-PARK-GNOME",
    "PARK-GNOME-F",
    "V-FROTZ"
   ]
  },
  "FLUME-OBJECT": {
   "name": "FLUME-OBJECT",
   "file": "park.zil",
   "line": 302,
   "endLine": 307,
   "desc": "flume",
   "ldesc": null,
   "fdesc": null,
   "loc": "FLUME",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "FLUME",
    "FLUMES"
   ],
   "adjectives": [],
   "action": "FLUME-OBJECT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FLUME-OBJECT\n\t(IN FLUME)\n\t(DESC \"flume\")\n\t(SYNONYM FLUME FLUMES)\n\t(FLAGS NDESCBIT)\n\t(ACTION FLUME-OBJECT-F)>",
   "referencedBy": [
    "WATER-F",
    "WATER-IS-PRSI"
   ]
  },
  "LOG-BOAT": {
   "name": "LOG-BOAT",
   "file": "park.zil",
   "line": 323,
   "endLine": 329,
   "desc": "log boat",
   "ldesc": null,
   "fdesc": null,
   "loc": "FLUME",
   "flags": [
    "VEHBIT",
    "OPENBIT",
    "CONTBIT",
    "SEARCHBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "BOAT"
   ],
   "adjectives": [
    "LOG"
   ],
   "action": "LOG-BOAT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LOG-BOAT\n\t(IN FLUME)\n\t(DESC \"log boat\")\n\t(SYNONYM BOAT)\n\t(ADJECTIVE LOG)\n\t(FLAGS VEHBIT OPENBIT CONTBIT SEARCHBIT NDESCBIT)\n\t(ACTION LOG-BOAT-F)>",
   "referencedBy": [
    "START-RIDE",
    "FLUME-F",
    "FLUME-OBJECT-F",
    "LOG-BOAT-F"
   ]
  },
  "CAR": {
   "name": "CAR",
   "file": "park.zil",
   "line": 434,
   "endLine": 439,
   "desc": "car",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROLLER-COASTER",
   "flags": [
    "VEHBIT",
    "CONTBIT",
    "OPENBIT",
    "SEARCHBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "CAR"
   ],
   "adjectives": [],
   "action": "CAR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CAR\n\t(IN ROLLER-COASTER)\n\t(DESC \"car\")\n\t(SYNONYM CAR)\n\t(FLAGS VEHBIT CONTBIT OPENBIT SEARCHBIT NDESCBIT)\n\t(ACTION CAR-F)>",
   "referencedBy": [
    "START-RIDE",
    "ROLLER-COASTER-F",
    "CAR-F"
   ]
  },
  "HAWKER": {
   "name": "HAWKER",
   "file": "park.zil",
   "line": 567,
   "endLine": 574,
   "desc": "hawker",
   "ldesc": "A hawker stands within the booth, studying you through half-closed eyes.",
   "fdesc": null,
   "loc": "ARCADE",
   "flags": [
    "ACTORBIT",
    "CONTBIT",
    "OPENBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "HAWKER"
   ],
   "adjectives": [],
   "action": "HAWKER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "BALL"
   ],
   "source": "<OBJECT HAWKER\n\t(IN ARCADE)\n\t(DESC \"hawker\")\n\t(LDESC\n\"A hawker stands within the booth, studying you through half-closed eyes.\")\n\t(SYNONYM HAWKER)\n\t(FLAGS ACTORBIT CONTBIT OPENBIT SEARCHBIT)\n\t(ACTION HAWKER-F)>",
   "referencedBy": [
    "ARCADE-F",
    "HAWKER-F",
    "BALL-F"
   ]
  },
  "BALL": {
   "name": "BALL",
   "file": "park.zil",
   "line": 600,
   "endLine": 606,
   "desc": "rubber ball",
   "ldesc": null,
   "fdesc": null,
   "loc": "HAWKER",
   "flags": [
    "TAKEBIT",
    "NDESCBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "BALL"
   ],
   "adjectives": [
    "RUBBER"
   ],
   "action": "BALL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BALL\n\t (IN HAWKER)\n\t (DESC \"rubber ball\")\n\t (SYNONYM BALL)\n\t (ADJECTIVE RUBBER)\n\t (FLAGS TAKEBIT NDESCBIT TRYTAKEBIT)\n\t (ACTION BALL-F)>",
   "referencedBy": [
    "ARCADE-F",
    "ARCADE-EXIT-F",
    "HAWKER-F",
    "BALL-F"
   ]
  },
  "RABBITS": {
   "name": "RABBITS",
   "file": "park.zil",
   "line": 642,
   "endLine": 648,
   "desc": "hopping bunny",
   "ldesc": null,
   "fdesc": null,
   "loc": "ARCADE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUNNY",
    "BUNNIE",
    "RABBIT"
   ],
   "adjectives": [
    "HOPPIN",
    "CUTE",
    "MECHAN"
   ],
   "action": "RABBITS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RABBITS\n\t(IN ARCADE)\n\t(DESC \"hopping bunny\")\n\t(SYNONYM BUNNY BUNNIE RABBIT)\n\t(ADJECTIVE HOPPIN CUTE MECHAN)\n\t(FLAGS NDESCBIT)\n\t(ACTION RABBITS-F)>",
   "referencedBy": [
    "BALL-F"
   ]
  },
  "MALYON-SCROLL": {
   "name": "MALYON-SCROLL",
   "file": "park.zil",
   "line": 657,
   "endLine": 664,
   "desc": "glittering scroll",
   "ldesc": null,
   "fdesc": null,
   "loc": "DIAL",
   "flags": [
    "READBIT",
    "SCROLLBIT",
    "TAKEBIT",
    "CONTBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "SCROLL"
   ],
   "adjectives": [
    "GLITTE"
   ],
   "action": "SCROLL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ]
   },
   "contents": [
    "MALYON-SPELL"
   ],
   "source": "<OBJECT MALYON-SCROLL\n\t(IN DIAL)\n\t(DESC \"glittering scroll\")\n\t(SYNONYM SCROLL)\n\t(ADJECTIVE GLITTE)\n\t(FLAGS READBIT SCROLLBIT TAKEBIT CONTBIT TRANSBIT)\n\t(SIZE 3)\n\t(ACTION SCROLL-F)>\t",
   "referencedBy": [
    "BALL-F"
   ]
  },
  "MALYON-SPELL": {
   "name": "MALYON-SPELL",
   "file": "park.zil",
   "line": 666,
   "endLine": 675,
   "desc": "malyon spell",
   "ldesc": null,
   "fdesc": null,
   "loc": "MALYON-SCROLL",
   "flags": [
    "NDESCBIT",
    "SPELLBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "SPELLS",
    "SPELL"
   ],
   "adjectives": [
    "MALYON"
   ],
   "action": "SPELL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "bring life to inanimate objects"
    ],
    "COUNT": [
     "0"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT MALYON-SPELL\n\t(IN MALYON-SCROLL)\n\t(SYNONYM SPELLS SPELL)\n\t(ADJECTIVE MALYON)\n\t(DESC \"malyon spell\")\n\t(TEXT \"bring life to inanimate objects\")\n\t(COUNT 0)\n\t(SIZE 1)\n\t(FLAGS NDESCBIT SPELLBIT TOUCHBIT)\n\t(ACTION SPELL-F)>",
   "referencedBy": [
    "SPELL-CHECK",
    "PRE-CAST",
    "V-CAST",
    "V-YONK"
   ]
  },
  "SLOT-MACHINE": {
   "name": "SLOT-MACHINE",
   "file": "park.zil",
   "line": 696,
   "endLine": 704,
   "desc": "odd machine",
   "ldesc": "Standing on one side of the room is an odd machine, with a\nthree-section display and a large lever on the side.",
   "fdesc": null,
   "loc": "CASINO",
   "flags": [
    "VOWELBIT"
   ],
   "synonyms": [
    "MACHIN",
    "BANDIT",
    "DISPLA"
   ],
   "adjectives": [
    "ODD",
    "ONE-",
    "ARMED",
    "THREE",
    "SECTIO"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SLOT-MACHINE\n\t(IN CASINO)\n\t(DESC \"odd machine\")\n\t(LDESC\n\"Standing on one side of the room is an odd machine, with a\nthree-section display and a large lever on the side.\")\n\t(SYNONYM MACHIN BANDIT DISPLA)\n\t(ADJECTIVE ODD ONE- ARMED THREE SECTIO)\n\t(FLAGS VOWELBIT)>",
   "referencedBy": []
  }
 },
 "routines": {
  "I-WAKE-UP": {
   "name": "I-WAKE-UP",
   "file": "belboz.zil",
   "line": 5,
   "endLine": 9,
   "source": "<ROUTINE I-WAKE-UP ()\n\t <JIGS-UP\n\"|\nSuddenly, seemingly from nowhere, a bolt of lightning strikes\nyou in the center of your chest...\">>"
  },
  "TREE-F": {
   "name": "TREE-F",
   "file": "belboz.zil",
   "line": 19,
   "endLine": 30,
   "source": "<ROUTINE TREE-F ()\n\t <COND (<VERB? CLIMB-FOO CLIMB-UP>\n\t\t<DO-WALK ,P?UP>)\n\t       (<VERB? CLIMB-DOWN>\n\t\t<DO-WALK ,P?DOWN>)\n\t       (<VERB? LOOK-UNDER>\n\t\t<PERFORM ,V?EXAMINE ,GROUND>\n\t\t<RTRUE>)\n\t       (<VERB? MEEF>\n\t\t<SETG PERFORMING-SPELL T>\n\t\t<PERFORM ,V?MEEF ,FOREST>\n\t\t<RTRUE>)>>"
  },
  "HELLHOUND-F": {
   "name": "HELLHOUND-F",
   "file": "belboz.zil",
   "line": 52,
   "endLine": 55,
   "source": "<ROUTINE HELLHOUND-F ()\n\t <COND (<VERB? RESEARCH>\n\t\t<PERFORM ,V?RESEARCH ,LOBBY>\n\t\t<RTRUE>)>>"
  },
  "I-HELLHOUND": {
   "name": "I-HELLHOUND",
   "file": "belboz.zil",
   "line": 59,
   "endLine": 78,
   "source": "<ROUTINE I-HELLHOUND ()\n\t <COND (<EQUAL? ,HERE ,TWISTED-FOREST>\n\t\t<COND (,HELLHOUND-WARNING\n\t\t       <JIGS-UP\n\"|\nThe hellhound reaches you and tears you apart with its powerful teeth.\">)\n\t\t      (T\n\t\t       <SETG HELLHOUND-WARNING T>\n\t\t       <TELL CR\n\"A hellhound is racing straight toward you, its open jaws displaying\nrows of razor-sharp teeth.\" CR>)>)\n\t       (<EQUAL? ,HERE ,TREE-BRANCH>\n\t\t<TELL\n\"The hellhound leaps madly about the base of the tree, gnashing its jaws.\" CR>)\n\t       (T\n\t\t<MOVE ,HELLHOUND ,DIAL>\n\t\t<DISABLE <INT I-HELLHOUND>>\n\t\t<TELL\n\"The hellhound stops at the edge of the forest and bellows. After a moment,\nit turns and slinks into the trees.\" CR>)>>"
  },
  "TREE-BRANCH-F": {
   "name": "TREE-BRANCH-F",
   "file": "belboz.zil",
   "line": 89,
   "endLine": 100,
   "source": "<ROUTINE TREE-BRANCH-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \"You are \">\n\t\t<COND (,FLYING\n\t\t       <TELL \"flying near\">)\n\t\t      (T\n\t\t       <TELL \"on\">)>\n\t\t<TELL\n\" a large gnarled branch of an old and twisted tree.\" CR>)\n\t       (<EQUAL? .RARG ,M-ENTER>\n\t\t<ENABLE <QUEUE I-BOA -1>>\n\t\t<RFALSE>)>>"
  },
  "TREE-UP-F": {
   "name": "TREE-UP-F",
   "file": "belboz.zil",
   "line": 102,
   "endLine": 109,
   "source": "<ROUTINE TREE-UP-F ()\n\t <TELL \"You can't \">\n\t <COND (,FLYING\n\t\t<TELL \"fly\">)\n\t       (T\n\t\t<TELL \"climb\">)>\n\t <TELL \" any higher.\" CR>\n\t <RFALSE>>"
  },
  "BOA-F": {
   "name": "BOA-F",
   "file": "belboz.zil",
   "line": 119,
   "endLine": 123,
   "source": "<ROUTINE BOA-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"Your average giant carnivorous snake -- except that this one has\nthree heads and an appetite to match.\" CR>)>>"
  },
  "I-BOA": {
   "name": "I-BOA",
   "file": "belboz.zil",
   "line": 127,
   "endLine": 143,
   "source": "<ROUTINE I-BOA ()\n\t <COND (<EQUAL? ,HERE ,TREE-BRANCH>\n\t\t<COND (,FLYING\n\t\t       <RFALSE>)\n\t\t      (,BOA-WARNING\n\t\t       <JIGS-UP\n\"|\nThe snake begins wrapping itself around your torso, squeezing\nthe life out of you...\">)\n\t\t      (T\n\t\t       <SETG BOA-WARNING T>\n\t\t       <TELL CR\n\"A giant boa constrictor is slithering along the branch toward you!\" CR>)>)\n\t       (T\n\t\t<SETG BOA-WARNING <>>\n\t\t<DISABLE <INT I-BOA>>\n\t\t<RFALSE>)>>"
  },
  "FENCE-PSEUDO": {
   "name": "FENCE-PSEUDO",
   "file": "belboz.zil",
   "line": 163,
   "endLine": 165,
   "source": "<ROUTINE FENCE-PSEUDO ()\n\t <COND (<VERB? CLIMB-OVER CLIMB-FOO LEAP>\n\t\t<TELL \"It's too tall.\" CR>)>>"
  },
  "SIGNPOST-F": {
   "name": "SIGNPOST-F",
   "file": "belboz.zil",
   "line": 175,
   "endLine": 185,
   "source": "<ROUTINE SIGNPOST-F ()\n\t <COND (<VERB? READ>\n\t\t<FIXED-FONT-ON>\n\t\t<TELL\n\"|\n\\\"  *** !!! >>> WARNING <<< !!! ***|\n     This path is protected by a|\n          Magic Mine Field|\n          installed by the|\n   Frobozz Magic Mine Field Company\" CR>\n\t\t<FIXED-FONT-OFF>)>>"
  },
  "MINE-FIELD-EXIT-F": {
   "name": "MINE-FIELD-EXIT-F",
   "file": "belboz.zil",
   "line": 200,
   "endLine": 210,
   "source": "<ROUTINE MINE-FIELD-EXIT-F ()\n\t <COND (<AND <EQUAL? ,PRSO ,P?SOUTH>\n\t\t     <PROB 50>>\n\t\t,FOREST-EDGE)\n\t       (T\n\t\t<COND (,FLYING\n\t\t       <TELL\n\"Unfortunately, one of the properties of magic mine fields is their\nability to blow you up even if you're floating above them. \">)>\n\t\t<JIGS-UP \"Kaboom!!!...\">\n\t\t<RFALSE>)>>"
  },
  "SNAKE-PIT-PSEUDO": {
   "name": "SNAKE-PIT-PSEUDO",
   "file": "belboz.zil",
   "line": 227,
   "endLine": 229,
   "source": "<ROUTINE SNAKE-PIT-PSEUDO ()\n\t <COND (<VERB? THROUGH>\n\t\t<LOOK-AROUND-YOU>)>>"
  },
  "CRACK-PSEUDO": {
   "name": "CRACK-PSEUDO",
   "file": "belboz.zil",
   "line": 231,
   "endLine": 233,
   "source": "<ROUTINE CRACK-PSEUDO ()\n\t <COND (<VERB? THROUGH>\n\t\t<DO-WALK ,P?DOWN>)>>"
  },
  "SNAKE-PIT-F": {
   "name": "SNAKE-PIT-F",
   "file": "belboz.zil",
   "line": 242,
   "endLine": 245,
   "source": "<ROUTINE SNAKE-PIT-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<ENABLE <QUEUE I-SNAKE-PIT <+ 1 <RANDOM 3>>>>\n\t\t<RFALSE>)>>"
  },
  "I-SNAKE-PIT": {
   "name": "I-SNAKE-PIT",
   "file": "belboz.zil",
   "line": 247,
   "endLine": 254,
   "source": "<ROUTINE I-SNAKE-PIT ()\n\t <COND (<EQUAL? ,HERE ,SNAKE-PIT>\n\t\t<JIGS-UP\n\"|\nSuddenly, the pit comes alive as dozens of vipers strike and thousands\nof giant beetles pour from their hiding places.\">)\n\t       (T\n\t\t<DISABLE <INT I-SNAKE-PIT>>)>>"
  },
  "MOSS-F": {
   "name": "MOSS-F",
   "file": "belboz.zil",
   "line": 278,
   "endLine": 283,
   "source": "<ROUTINE MOSS-F ()\n\t <COND (<VERB? MEEF>\n\t\t<TELL\n\"A few patches of the moss and lichens become brown and dry.\" CR>)\n\t       (<VERB? EAT>\n\t\t<JIGS-UP \"Uh, oh. They taste poisonous.\">)>>"
  },
  "MEADOW-F": {
   "name": "MEADOW-F",
   "file": "belboz.zil",
   "line": 298,
   "endLine": 310,
   "source": "<ROUTINE MEADOW-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<ENABLE <QUEUE I-LOCUSTS -1>>\n\t\t<RFALSE>)\n\t       (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \"You are in the center of a \">\n\t\t<COND (<IN? ,MEADOW-OBJECT ,HERE>\n\t\t       <TELL \"rolling meadow of tall grass\">)\n\t\t      (T\n\t\t       <TELL \"barren field\">)>\n\t\t<TELL\n\". To the east is the turret of a ruined castle, and from the northeast\ncomes the sound of rushing water.\" CR>)>>"
  },
  "MEADOW-OBJECT-F": {
   "name": "MEADOW-OBJECT-F",
   "file": "belboz.zil",
   "line": 320,
   "endLine": 326,
   "source": "<ROUTINE MEADOW-OBJECT-F ()\n\t <COND (<AND <NOT <EQUAL? ,HERE ,MEADOW>>\n\t\t     <VERB? RUB MEEF>>\n\t\t<TELL \"The meadow is too far away.\" CR>)\n\t       (<VERB? MEEF>\n\t\t<MOVE ,MEADOW-OBJECT ,DIAL>\n\t\t<TELL \"The grass vanishes as far as the eye can see.\" CR>)>>"
  },
  "PLAGUE-OF-LOCUSTS-F": {
   "name": "PLAGUE-OF-LOCUSTS-F",
   "file": "belboz.zil",
   "line": 336,
   "endLine": 339,
   "source": "<ROUTINE PLAGUE-OF-LOCUSTS-F ()\n\t <COND (<VERB? LOOK-UNDER>\n\t\t<PERFORM ,V?EXAMINE ,MEADOW-OBJECT>\n\t\t<RTRUE>)>>"
  },
  "I-LOCUSTS": {
   "name": "I-LOCUSTS",
   "file": "belboz.zil",
   "line": 343,
   "endLine": 361,
   "source": "<ROUTINE I-LOCUSTS ()\n\t <COND (<NOT <EQUAL? ,HERE ,MEADOW>>\n\t\t<DISABLE <INT I-LOCUSTS>>\n\t\t<SETG LOCUST-WARNING 0>\n\t\t<RFALSE>)\n\t       (<EQUAL? ,LOCUST-WARNING 0>\n\t\t<SETG LOCUST-WARNING <+ ,LOCUST-WARNING 1>>\n\t\t<TELL CR\n\"A swarm of bloodsucking locusts appears on the horizon.\" CR>)\n\t       (<EQUAL? ,LOCUST-WARNING 1>\n\t\t<SETG LOCUST-WARNING <+ ,LOCUST-WARNING 1>>\n\t\t<TELL CR\n\"The locusts are much closer now, blotting out the sun like\na black storm cloud.\" CR>)\n\t       (T\n\t\t<SETG LOCUST-WARNING 0>\n\t\t<JIGS-UP\n\"|\nThe locusts swarm over you and pick you clean to the bones.\">)>>"
  },
  "RIVER-BANK-F": {
   "name": "RIVER-BANK-F",
   "file": "belboz.zil",
   "line": 381,
   "endLine": 404,
   "source": "<ROUTINE RIVER-BANK-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \"You are on a muddy bank \">\n\t\t<COND (,RIVER-EVAPORATED\n\t\t       <TELL \"above a dried-up river bed\">)\n\t\t      (T\n\t\t       <TELL\n\"of a fast-moving river, full of sharp rocks and foaming rapids,\nflowing to the southwest. The ground is soft and eroded, and\ncontinually threatens to dump you into the turbulent waters\">)>\n\t\t<TELL\n\". A field lies to the southwest, and a trail leads southeast\nalong the bank.\" CR>)\n\t       (<EQUAL? .RARG ,M-END>\n\t\t<COND (<L? ,BANK-COUNTER 3>\n\t\t       <SETG BANK-COUNTER <+ ,BANK-COUNTER 1>>\n\t\t       <RFALSE>)\n\t              (T\n\t\t       <COND (<AND <NOT ,RIVER-EVAPORATED>\n\t\t\t\t   <NOT ,FLYING>\n\t\t                   <PROB 75>>\n\t\t              <JIGS-UP\n\"Oops! A section of the bank gives way and you tumble into\nthe river. The current dashes you against the rocks.\">)>)>)>>"
  },
  "ROCK-PSEUDO": {
   "name": "ROCK-PSEUDO",
   "file": "belboz.zil",
   "line": 406,
   "endLine": 408,
   "source": "<ROUTINE ROCK-PSEUDO ()\n\t <COND (<VERB? CROSS>\n\t\t<TELL <PICK-ONE ,YUKS> CR>)>>"
  },
  "RIVER-ENTER-F": {
   "name": "RIVER-ENTER-F",
   "file": "belboz.zil",
   "line": 412,
   "endLine": 422,
   "source": "<ROUTINE RIVER-ENTER-F ()\n\t <COND (,RIVER-EVAPORATED\n\t\t,RIVER-BED)\n\t       (,FLYING\n\t\t<JIGS-UP\n\"You fly across the river's surface. Suddenly, a downdraft plunges\nyou into the swirling rapids!\">\n\t\t<RFALSE>)\n\t       (T\n\t\t<TELL \"You'd never survive the rapids.\" CR>\n\t\t<RFALSE>)>>"
  },
  "RIVER-F": {
   "name": "RIVER-F",
   "file": "belboz.zil",
   "line": 432,
   "endLine": 457,
   "source": "<ROUTINE RIVER-F ()\n\t <COND (<EQUAL? ,HERE ,GUN-EMPLACEMENT ,TURRET>\n\t\t<TELL \"The river lies far below.\" CR>)\n\t       (,RIVER-EVAPORATED\n\t\t<TELL \"River? What river?\" CR>)\n\t       (<VERB? DRINK DRINK-FROM>\n\t\t<PERFORM ,V?DRINK ,WATER>\n\t\t<RTRUE>)\n\t       (<VERB? PULVER>\n\t\t<COND (<EQUAL? ,HERE ,RIVER-BANK>\n\t\t       <SETG RIVER-EVAPORATED T>\n\t\t       <ENABLE <QUEUE I-TRICKLE 3>>\n\t\t       <TELL\n\"The river dries up, leaving only a few puddles between the rocks! It's\nnow safe to climb down into the river bed.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"The water level drops several feet, but quickly surges back.\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"The river flows quickly by below you.\" CR>)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,RIVER ,PRSI>>\n\t\t<MOVE ,PRSO ,DIAL>\n\t\t<SPLASH>)\n\t       (<VERB? THROUGH>\n\t\t<DO-WALK ,P?NORTH>)>>"
  },
  "I-TRICKLE": {
   "name": "I-TRICKLE",
   "file": "belboz.zil",
   "line": 459,
   "endLine": 464,
   "source": "<ROUTINE I-TRICKLE ()\n\t <ENABLE <QUEUE I-FLOOD 2>>\n\t <COND (<OR <EQUAL? ,HERE ,RIVER-BANK ,RIVER-BED>\n\t\t    <EQUAL? ,HERE ,STAGNANT-POOL ,TOP-OF-FALLS>>\n\t\t<TELL CR\n\"A trickle of water begins flowing down the center of the river bed.\" CR>)>>"
  },
  "I-FLOOD": {
   "name": "I-FLOOD",
   "file": "belboz.zil",
   "line": 466,
   "endLine": 483,
   "source": "<ROUTINE I-FLOOD ()\n\t <SETG RIVER-EVAPORATED <>>\n\t <FLOOD-LOOP ,RIVER-BED>\n\t <FLOOD-LOOP ,STAGNANT-POOL>\n\t <FLOOD-LOOP ,TOP-OF-FALLS>\n\t <CRLF>\n\t <COND (<EQUAL? ,HERE ,STAGNANT-POOL ,RIVER-BED ,TOP-OF-FALLS>\n\t\t<JIGS-UP\n\"A wall of water comes rushing down the river bed! You are smashed into\njelly against the rocks.\">)\n\t       (<EQUAL? ,HERE ,RIVER-BANK>\n\t\t<TELL\n\"A wall of water rushes down the river bed as the river returns with\na vengeance.\" CR>)\n\t       (<EQUAL? ,HERE ,HIDDEN-CAVE>\n\t\t<TELL\n\"There is a roar of water from outside the cave. The lower part\nof the cave, near the mouth, fills with a pool of swirling water!\" CR>)>>"
  },
  "FLOOD-LOOP": {
   "name": "FLOOD-LOOP",
   "file": "belboz.zil",
   "line": 485,
   "endLine": 496,
   "source": "<ROUTINE FLOOD-LOOP (LOC \"AUX\" X N)\n\t <SET X <FIRST? .LOC>>\n\t <COND (<NOT .X>\n\t\t<RTRUE>)>\t \n\t <REPEAT ()\n\t\t <SET N <NEXT? .X>>\n\t\t <COND (<NOT <EQUAL? .X ,PROTAGONIST>>\n\t\t\t<MOVE .X ,DIAL>)>\n\t\t <COND (<NOT .N>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<SET X .N>)>>>"
  },
  "UNDERGROWTH-F": {
   "name": "UNDERGROWTH-F",
   "file": "belboz.zil",
   "line": 505,
   "endLine": 509,
   "source": "<ROUTINE UNDERGROWTH-F ()\n\t <COND (<VERB? MEEF>\n\t\t<TELL\n\"The nearest part of the undergrowth withers away ... revealing\nmore undergrowth.\" CR>)>>"
  },
  "BANKS-F": {
   "name": "BANKS-F",
   "file": "belboz.zil",
   "line": 519,
   "endLine": 521,
   "source": "<ROUTINE BANKS-F ()\n\t <COND (<VERB? CLIMB-UP CLIMB-DOWN CLIMB-FOO>\n\t\t<V-WALK-AROUND>)>>"
  },
  "RIVER-BED-OBJECT-F": {
   "name": "RIVER-BED-OBJECT-F",
   "file": "belboz.zil",
   "line": 531,
   "endLine": 541,
   "source": "<ROUTINE RIVER-BED-OBJECT-F ()\n\t <COND (<VERB? THROUGH>\n\t\t<COND (<EQUAL? ,HERE ,RIVER-BANK>\n\t\t       <DO-WALK ,P?DOWN>)\n\t\t      (T\n\t\t       <LOOK-AROUND-YOU>)>)\n\t       (<VERB? DROP EXIT>\n\t\t<COND (<EQUAL? ,HERE ,RIVER-BANK>\n\t\t       <LOOK-AROUND-YOU>)\n\t\t      (T\n\t\t       <DO-WALK ,P?UP>)>)>>\t"
  },
  "RIVER-BED-F": {
   "name": "RIVER-BED-F",
   "file": "belboz.zil",
   "line": 563,
   "endLine": 566,
   "source": "<ROUTINE RIVER-BED-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<PUT ,VEZZAS 1 0>\n\t\t<RFALSE>)>>"
  },
  "PUDDLE-PSEUDO": {
   "name": "PUDDLE-PSEUDO",
   "file": "belboz.zil",
   "line": 568,
   "endLine": 574,
   "source": "<ROUTINE PUDDLE-PSEUDO ()\n\t <COND (<VERB? THROUGH>\n\t\t<TELL \"The puddles are very shallow.\" CR>)\n\t       (<VERB? PULVER>\n\t\t<SETG PERFORMING-SPELL T>\n\t\t<PERFORM ,V?PULVER ,WATER>\n\t\t<RTRUE>)>>"
  },
  "FISH-PSEUDO": {
   "name": "FISH-PSEUDO",
   "file": "belboz.zil",
   "line": 576,
   "endLine": 578,
   "source": "<ROUTINE FISH-PSEUDO ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL \"They squirm from your grasp.\" CR>)>>"
  },
  "TENTACLE-DEATH": {
   "name": "TENTACLE-DEATH",
   "file": "belboz.zil",
   "line": 597,
   "endLine": 604,
   "source": "<ROUTINE TENTACLE-DEATH ()\n\t <COND (,FLYING\n\t\t<TELL \"You fly over the surface of the pool.\">)\n\t       (T\n\t\t<TELL \"You wade into the stagnant pool.\">)>\n\t <JIGS-UP\n\" Suddenly, powerful tentacles lash out and drag you under the surface.\">\n\t <RFALSE>>"
  },
  "RIVER-EXIT-F": {
   "name": "RIVER-EXIT-F",
   "file": "belboz.zil",
   "line": 625,
   "endLine": 631,
   "source": "<ROUTINE RIVER-EXIT-F ()\n\t <TELL \"The banks are too \">\n\t <COND (,FLYING\n\t\t<TELL \"high to fly over.\" CR>)\n\t       (T\n\t\t<TELL \"steep to climb.\" CR>)>\n\t <RFALSE>>"
  },
  "WATERFALL-EXIT-F": {
   "name": "WATERFALL-EXIT-F",
   "file": "belboz.zil",
   "line": 633,
   "endLine": 639,
   "source": "<ROUTINE WATERFALL-EXIT-F ()\n\t <COND (,FLYING\n\t\t<TELL\n\"That would be foolhardy, as flying spells are of limited duration.\" CR>)\n\t       (T\n\t\t<TELL \"That would involve quite a plunge.\" CR>)>\n\t <RFALSE>>"
  },
  "TOP-OF-CLIFF-PSEUDO": {
   "name": "TOP-OF-CLIFF-PSEUDO",
   "file": "belboz.zil",
   "line": 641,
   "endLine": 645,
   "source": "<ROUTINE TOP-OF-CLIFF-PSEUDO ()\n\t <COND (<VERB? CLIMB-DOWN>\n\t\t<TELL \"Impossible.\" CR>)\n\t       (<VERB? LEAP>\n\t\t<JIGS-UP \"Brilliant move.\">)>>"
  },
  "HAZE-PSEUDO": {
   "name": "HAZE-PSEUDO",
   "file": "belboz.zil",
   "line": 647,
   "endLine": 649,
   "source": "<ROUTINE HAZE-PSEUDO ()\n\t <COND (<VERB? RUB>\n\t\t<TELL \"From here?\" CR>)>>"
  },
  "WATERFALL-F": {
   "name": "WATERFALL-F",
   "file": "belboz.zil",
   "line": 659,
   "endLine": 670,
   "source": "<ROUTINE WATERFALL-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"It's no Aragain Falls, but it's pretty impressive.\" CR>)\n\t       (<AND <VERB? LEAP>\n\t\t     <EQUAL? ,HERE ,TOP-OF-FALLS>>\n\t\t<SETG PRSO <>>\n\t\t<PERFORM ,V?LEAP>\n\t\t<RTRUE>)\n\t       (<AND <EQUAL? ,HERE ,MOUTH-OF-RIVER ,TURRET>\n\t\t     <VERB? LEAP RUB SMELL LISTEN>>\n\t\t<TELL \"From here?\" CR>)>>"
  },
  "HIDDEN-CAVE-F": {
   "name": "HIDDEN-CAVE-F",
   "file": "belboz.zil",
   "line": 684,
   "endLine": 696,
   "source": "<ROUTINE HIDDEN-CAVE-F (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-ENTER>\n\t\t     <NOT <FSET? ,HIDDEN-CAVE ,TOUCHBIT>>>\n\t\t<SETG SCORE <+ ,SCORE 20>>)\n\t       (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a hollow area under the northeast bank of the river. The floor\nrises away from the mouth of the cave, which is at its southwest end. \">\n\t\t<COND (<NOT ,RIVER-EVAPORATED>\n\t\t       <TELL\n\"The mouth is filled with a pool of swirling water. \">)>\n\t\t<TELL\n\"A dark hole leads downward at the far end of the cave.\" CR>)>>"
  },
  "BAT-GUANO-F": {
   "name": "BAT-GUANO-F",
   "file": "belboz.zil",
   "line": 707,
   "endLine": 716,
   "source": "<ROUTINE BAT-GUANO-F ()\n\t <COND (<AND <VERB? TAKE>\n\t\t     <NOT <FSET? ,FWEEP-SCROLL ,TOUCHBIT>>>\n\t\t<FSET ,FWEEP-SCROLL ,TOUCHBIT>\n\t\t<FSET ,BAT-GUANO ,TOUCHBIT>\n\t\t<FCLEAR ,BAT-GUANO ,TRYTAKEBIT>\n\t\t<FCLEAR ,BAT-GUANO ,NDESCBIT>\n\t\t<MOVE ,BAT-GUANO ,PROTAGONIST>\n\t\t<TELL\n\"As you take the guano, the soiled scroll falls to the ground.\" CR>)>>"
  },
  "BLORT-VIAL-F": {
   "name": "BLORT-VIAL-F",
   "file": "belboz.zil",
   "line": 728,
   "endLine": 735,
   "source": "<ROUTINE BLORT-VIAL-F ()\n\t <COND (<VERB? READ>\n\t\t<FIXED-FONT-ON>\n\t\t<TELL\n\"|\n        \\\"BLORT POTION|\n(ability to see in dark places)\\\"\" CR>\n\t\t<FIXED-FONT-OFF>)>>"
  },
  "BLORT-POTION-F": {
   "name": "BLORT-POTION-F",
   "file": "belboz.zil",
   "line": 745,
   "endLine": 766,
   "source": "<ROUTINE BLORT-POTION-F ()\n\t <COND (<AND <VERB? EAT DRINK>\n\t\t     <NOT <HELD? ,BLORT-VIAL>>>\n\t\t<POTION-POUR ,BLORT-VIAL>)\n\t       (<VERB? RESEARCH>\n\t\t<READ-ABOUT-POTIONS 1>)\n\t       (<VERB? EAT DRINK>\n\t\t<MOVE ,BLORT-POTION ,DIAL>\n\t\t<COND (,UNDER-INFLUENCE\n\t\t       <TWO-POTIONS>\n\t\t       <RTRUE>)>\n\t\t<ENABLE <QUEUE I-UNBLORT 24>>\n\t\t<SETG BLORTED T>\n\t\t<SETG UNDER-INFLUENCE ,BLORT-POTION>\n\t\t<TELL\n\"The amber potion tasted like chives, and made your eyes tingle.\" CR>)\n\t       (<VERB? DROP>\n\t\t<PERFORM ,V?POUR ,PRSO ,PRSI>\n\t\t<RTRUE>)\n\t       (<AND <VERB? POUR>\n\t\t     <EQUAL? ,PRSO ,BLORT-POTION>>\n\t\t<POTION-POUR ,BLORT-VIAL>)>>"
  },
  "I-UNBLORT": {
   "name": "I-UNBLORT",
   "file": "belboz.zil",
   "line": 770,
   "endLine": 777,
   "source": "<ROUTINE I-UNBLORT ()\n\t <SETG BLORTED <>>\n\t <COND (<EQUAL? ,UNDER-INFLUENCE ,BLORT-POTION>\n\t\t<SETG UNDER-INFLUENCE <>>)>\n\t <TELL CR \"Your eyes tingle for a moment.\">\n\t <COND (<NOT ,LIT>\n\t\t<TELL \" You can no longer see anything around you!\">)>\n\t <CRLF>>"
  },
  "I-UNFWEEP": {
   "name": "I-UNFWEEP",
   "file": "belboz.zil",
   "line": 803,
   "endLine": 821,
   "source": "<ROUTINE I-UNFWEEP ()\n\t <SETG FWEEPED <>>\n\t <SETG FLYING <>>\n\t <TELL CR\n\"After a moment of futilely flapping your arms, you realize that\nthe fweep spell has worn off. \">\n\t <COND (<AND <EQUAL? ,HERE ,GLASS-MAZE>\n\t\t     <NO-FLOOR?>>\n\t\t<JIGS-UP\n\"Unfortunately, this room of the maze has no floor.\">)\n\t       (<EQUAL? ,HERE ,TREE-BRANCH>\n\t\t<SETTLE-ONTO-BRANCH>)\n\t       (<EQUAL? ,HERE ,LAGOON>\n\t\t<SPLASH-INTO-WATER>)\n\t       (T\n\t\t<TELL\n\"You fall several feet to the ground.\" CR>)>\n\t <COND (<G? ,AWAKE 8>\n                <I-TIRED>)>>"
  },
  "DRAWBRIDGE-F": {
   "name": "DRAWBRIDGE-F",
   "file": "belboz.zil",
   "line": 837,
   "endLine": 868,
   "source": "<ROUTINE DRAWBRIDGE-F (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-END>\n\t\t     <NOT ,FLYING>>\n\t\t<COND (,DRAWBRIDGE-MOVE\n\t\t       <COND (<PROB 40>\n\t\t\t      <TELL\n\"With a scream of splintering wood, part of the drawbridge collapses and spills\nyou into the moat. \">\n\t\t\t      <DO-WALK ,P?DOWN>)\n\t\t\t     (T\n\t\t\t      <TELL \"The bridge continues to creak.\" CR>)>)\n\t\t      (T\n\t\t       <SETG DRAWBRIDGE-MOVE T>\n\t\t       <RFALSE>)>)\n\t       (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \"You are \">\n\t\t<COND (,FLYING\n\t\t       <TELL \"floating over\">)\n\t\t      (T\n\t\t       <TELL \"standing on\">)>\n\t\t<TELL\n\" the drawbridge of a ruined castle which lies to your east. The wood\nof the bridge looks severely rotted\">\n\t\t<COND (,FLYING\n\t\t       <TELL \". The moat is\">)\n\t\t      (T\n\t\t       <TELL\n\" and creaks ominously beneath you. The moat, although an easy dive\nfrom here, looks dangerous,\">)>\n\t\t<TELL \n\" full of sinister shapes beneath the surface of the water. To\nthe west is a wide field.\" CR>)>>"
  },
  "DRAWBRIDGE-EXIT-F": {
   "name": "DRAWBRIDGE-EXIT-F",
   "file": "belboz.zil",
   "line": 870,
   "endLine": 872,
   "source": "<ROUTINE DRAWBRIDGE-EXIT-F ()\n\t <JIGS-UP \"You are immediately set upon by alligators and piranhas.\">\n\t <RFALSE>>"
  },
  "MOAT-F": {
   "name": "MOAT-F",
   "file": "belboz.zil",
   "line": 881,
   "endLine": 895,
   "source": "<ROUTINE MOAT-F ()\n\t <COND (<VERB? PULVER>\n\t\t<TELL\n\"The moat dries up, leaving vicious-looking creatures flopping around\nin puddles. Immediately, the castle's automatic moat-filler turns on,\nand refills the moat.\" CR>)\n\t       (<VERB? DRINK DRINK-FROM>\n\t\t<PERFORM ,V?DRINK ,WATER>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"The water is murky, and lily pads cover most of the surface. Dark\nshapes swim about below the surface.\" CR>)\n\t       (<VERB? LEAP THROUGH>\n\t\t<DO-WALK ,P?DOWN>)>>"
  },
  "BRIDGE-F": {
   "name": "BRIDGE-F",
   "file": "belboz.zil",
   "line": 905,
   "endLine": 910,
   "source": "<ROUTINE BRIDGE-F ()\n\t <COND (<VERB? LOOK-UNDER>\n\t\t<PERFORM ,V?EXAMINE ,MOAT>\n\t\t<RTRUE>)\n\t       (<VERB? LISTEN>\n\t\t<TELL \"Creak, creak.\" CR>)>>"
  },
  "TURRET-PSEUDO": {
   "name": "TURRET-PSEUDO",
   "file": "belboz.zil",
   "line": 944,
   "endLine": 961,
   "source": "<ROUTINE TURRET-PSEUDO ()\n\t <COND (<VERB? THROUGH>\n\t\t<COND (<EQUAL? ,HERE ,RUINS>\n\t\t       <DO-WALK ,P?UP>)\n\t\t      (<EQUAL? ,HERE ,MEADOW>\n\t\t       <CANT-ENTER ,IT>)\n\t\t      (T\n\t\t       <LOOK-AROUND-YOU>)>)\n\t       (<VERB? DROP EXIT>\n\t\t<COND (<EQUAL? ,HERE ,TURRET>\n\t\t       <DO-WALK ,P?DOWN>)\n\t\t      (T\n\t\t       <LOOK-AROUND-YOU>)>)\n\t       (<AND <VERB? LEAP>\n\t\t     <EQUAL? ,HERE ,TURRET>>\n\t\t<SETG PRSO <>>\n\t\t<PERFORM ,V?LEAP>\n\t\t<RTRUE>)>>"
  },
  "TORTURE-DEVICES-F": {
   "name": "TORTURE-DEVICES-F",
   "file": "belboz.zil",
   "line": 983,
   "endLine": 987,
   "source": "<ROUTINE TORTURE-DEVICES-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"All the usual torture devices are here, all quite mean and\ndeadly looking.\" CR>)>>"
  },
  "FLAXO-VIAL-F": {
   "name": "FLAXO-VIAL-F",
   "file": "belboz.zil",
   "line": 1002,
   "endLine": 1009,
   "source": "<ROUTINE FLAXO-VIAL-F ()\n\t <COND (<VERB? READ>\n\t\t<FIXED-FONT-ON>\n\t\t<TELL\n\"|\n   \\\"FLAXO POTION|\n(exquisite torture)\\\"\" CR>\n\t\t<FIXED-FONT-OFF>)>>"
  },
  "FLAXO-POTION-F": {
   "name": "FLAXO-POTION-F",
   "file": "belboz.zil",
   "line": 1019,
   "endLine": 1043,
   "source": "<ROUTINE FLAXO-POTION-F ()\n\t <COND (<AND <VERB? EAT DRINK>\n\t\t     <NOT <HELD? ,FLAXO-VIAL>>>\n\t\t<POTION-POUR ,FLAXO-VIAL>)\n\t       (<VERB? RESEARCH>\n\t\t<READ-ABOUT-POTIONS 2>)\n\t       (<VERB? EAT DRINK>\n\t\t<MOVE ,FLAXO-POTION ,DIAL>\n\t\t<TELL\n\"The potion tastes like a combination of anchovies, prune juice, and\ngarlic powder. As you finish swallowing the potion, a well-muscled troll\nsaunters in\">\n\t\t<COND (<EQUAL? ,HERE ,TORTURE-CHAMBER>\n\t\t       <TELL \" and straps you to a torture device\">)>\n\t\t<TELL\n\". He whacks your head with a wooden two-by-four, grunting \\\"You are\nplaying Sorcerer. It was written by S. Eric Meretzky. You will have\nfun and enjoy yourself.\\\" He repeats this action 999 more times, then\nvanishes without a trace.\" CR>)\n\t       (<VERB? DROP>\n\t\t<PERFORM ,V?POUR ,PRSO ,PRSI>\n\t\t<RTRUE>)\n\t       (<AND <VERB? POUR>\n\t\t     <EQUAL? ,PRSO ,FLAXO-POTION>>\n\t\t<POTION-POUR ,FLAXO-VIAL>)>>"
  },
  "PIT-OF-BONES-EXIT-F": {
   "name": "PIT-OF-BONES-EXIT-F",
   "file": "belboz.zil",
   "line": 1076,
   "endLine": 1081,
   "source": "<ROUTINE PIT-OF-BONES-EXIT-F ()\n\t <COND (,FLYING\n\t\t<TELL \"You can't fly high enough to reach the hole.\" CR>)\n\t       (T\n\t\t<TELL \"The hole is too high to reach.\" CR>)>\n\t <RFALSE>>"
  },
  "BONES-PSEUDO": {
   "name": "BONES-PSEUDO",
   "file": "belboz.zil",
   "line": 1083,
   "endLine": 1087,
   "source": "<ROUTINE BONES-PSEUDO ()\n\t <COND (<VERB? TAKE SEARCH DIG>\n\t\t<TELL \"They're at the bottom of the pit.\" CR>)\n\t       (<VERB? MALYON>\n\t\t<JIGS-UP \"The results are too hideous to describe.\">)>>"
  },
  "PIT-PSEUDO": {
   "name": "PIT-PSEUDO",
   "file": "belboz.zil",
   "line": 1089,
   "endLine": 1093,
   "source": "<ROUTINE PIT-PSEUDO ()\n\t <COND (<VERB? LEAP THROUGH>\n\t\t<DO-WALK ,P?DOWN>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<TELL \"Bones. Lots of bones.\" CR>)>>"
  },
  "TOLL-GATE-CROSSING-F": {
   "name": "TOLL-GATE-CROSSING-F",
   "file": "belboz.zil",
   "line": 1121,
   "endLine": 1129,
   "source": "<ROUTINE TOLL-GATE-CROSSING-F ()\n\t <COND (<FSET? ,GATE ,OPENBIT>\n\t\t,OUTSIDE-STORE)\n\t       (,FLYING\n\t\t<PERFORM ,V?CLIMB-OVER ,GATE>\n\t\t<RFALSE>)\n\t       (T\n\t\t<TELL \"A sturdy toll gate blocks the highway.\" CR>\n\t\t<RFALSE>)>>"
  },
  "GATE-F": {
   "name": "GATE-F",
   "file": "belboz.zil",
   "line": 1139,
   "endLine": 1166,
   "source": "<ROUTINE GATE-F ()\n\t <COND (<VERB? OPEN CLOSE>\n\t\t<COND (<OPEN-CLOSE>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"Only the gnome can do that.\" CR>)>)\n\t       (<VERB? REZROV>\n\t\t<COND (<FSET? ,GATE ,OPENBIT>\n\t\t       <RFALSE>)\n\t\t      (,GNOME-SLEEPING\n\t\t       <SETG GNOME-SLEEPING <>>\n\t\t       <ENABLE <QUEUE I-GNOME 2>>\n\t\t       <TELL\n\"The gate flies open, waking the gnome, who leaps up and slams it closed\nagain. \\\"Hey! This is a toll gate! Nobody gets through here without paying\nthe one zorkmid toll. Not nobody, not no how.\\\"\"CR>)\n\t\t      (T\n\t\t       <SETG GNOME-SLEEPING T>\n\t\t       <JIGS-UP\n\"The gate flies open, but the gnome immediately slams it shut again.\n\\\"Trying to gate crash, huh? We have an answer for scofflaws like you.\nHey, Tholl!\\\" A troll lumbers out of the toll booth. \\\"This is Tholl\nthe Toll Troll. Tholl, remove this cheat.\\\" Tholl approaches and\nslices you neatly in half with his axe.\">)>) \n\t       (<VERB? CLIMB-OVER CLIMB-FOO>\n\t\t<TELL\n\"The gate extends to the roof of the tunnel, and there are pointed\nnasties all over it.\" CR>)>>"
  },
  "BOOTH-F": {
   "name": "BOOTH-F",
   "file": "belboz.zil",
   "line": 1176,
   "endLine": 1190,
   "source": "<ROUTINE BOOTH-F ()\n\t <COND (<VERB? THROUGH>\n\t\t<COND (<FSET? ,GATE ,OPENBIT>\n\t\t       <JIGS-UP\n\"As you enter, you stumble over a sleeping troll. With stunning reflexes,\nhe grabs a battle axe and minces you.\">)\n\t\t      (T\n\t\t       <TELL\n\"The booth is on the other side of the toll gate.\" CR>)>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<COND (<FSET? ,GATE ,OPENBIT>\n\t\t       <TELL \"It's dark inside the toll booth.\" CR>)\n\t\t      (T\n\t\t       <PERFORM ,V?THROUGH ,BOOTH>\n\t\t       <RTRUE>)>)>>"
  },
  "GNOME-DESCFCN": {
   "name": "GNOME-DESCFCN",
   "file": "belboz.zil",
   "line": 1203,
   "endLine": 1210,
   "source": "<ROUTINE GNOME-DESCFCN (RARG)\n\t <COND (,GNOME-SLEEPING\n\t\t<TELL\n\"A fat old gnome with a long white beard is sleeping soundly just outside\nthe toll booth. His loud snores echo around the caverns.\" CR>)\n\t       (T\n\t\t<TELL\n\"A chubby gnome stands behind the toll gate, grinning broadly.\" CR>)>>"
  },
  "GNOME-F": {
   "name": "GNOME-F",
   "file": "belboz.zil",
   "line": 1212,
   "endLine": 1285,
   "source": "<ROUTINE GNOME-F ()\n\t <COND (<EQUAL? ,GNOME ,WINNER>\n\t\t<COND (,GNOME-SLEEPING\n\t\t       <POOR-LISTENERS>\n\t\t       <STOP>)\n\t\t      (<AND <VERB? OPEN>\n\t\t\t    <EQUAL? ,PRSO ,GATE>>\n\t\t       <TELL\n\"\\\"You'll have to pay the toll first,\\\" explains the gnome cheerfully,\n\\\"and the toll is one zorkmid.\\\"\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"\\\"Conversing with customers is disallowed by union rules.\\\"\" CR>\n\t\t       <STOP>)>)\n\t       (<AND <VERB? SHAKE KICK>\n\t\t     ,GNOME-SLEEPING>\n\t\t<PERFORM ,V?ALARM ,GNOME>\n\t\t<RTRUE>)\n\t       (<AND <VERB? LISTEN>\n\t\t     ,GNOME-SLEEPING>\n\t\t<TELL \"The gnome snores loudly.\" CR>)\n\t       (<VERB? ALARM>\n\t\t<COND (<NOT ,GNOME-SLEEPING>\n\t\t       <TELL \"He's awake!\" CR>)\n\t\t      (<FSET? ,GATE ,OPENBIT>\n\t\t       <TELL\n\"The gnome opens one eye and looks at you. \\\"You again! Just go through.\nLet me sleep.\\\" He begins snoring again.\" CR>)\n\t\t      (,GNOME-ANNOYED\n\t\t       <JIGS-UP\n\"\\\"You again! You've interrupted my nap for the last time! THOLL!!\\\" A\nhuge troll lumbers out of the toll booth and tears you into itsy-bitsy\npieces.\">)\n\t\t      (T\n\t\t       <SETG GNOME-SLEEPING <>>\n\t\t       <ENABLE <QUEUE I-GNOME 2>>\n\t\t       <TELL\n\"The gnome stirs a bit and opens one eye, which wanders around until it\nnotices you. He jumps to his feet. \\\"One zorkmid, please,\\\" he yells\nwith a smile.\" CR>)>)\n\t       (<AND <VERB? GIVE ASK-ABOUT ASK-FOR>\n\t\t     ,GNOME-SLEEPING>\n\t\t<TELL \"The gnome is asleep, remember?\" CR>)\n\t       (<AND <FSET? ,GATE ,OPENBIT>\n\t\t     <VERB? SEARCH LOOK-INSIDE REACH-IN PICK>\n\t\t     <NOT ,COIN-STOLEN>\n\t\t     <NOT ,FWEEPED>>\n\t\t<SETG COIN-STOLEN T>\n\t\t<MOVE ,ZORKMID ,PROTAGONIST>\n\t\t<TELL\n\"You carefully search the sleeping gnome, and take the zorkmid coin you\nfind in his pocket!\" CR>)\n\t       (<AND <VERB? GIVE>\n\t\t     <EQUAL? ,PRSO ,ZORKMID>>\n\t\t<COND (<FSET? ,ZORKMID ,ONBIT>\n\t\t       <GNOME-REFUSES>\n\t\t       <RTRUE>)>\n\t\t<FSET ,GATE ,OPENBIT>\n\t\t<SETG GNOME-SLEEPING T>\n\t\t<MOVE ,ZORKMID ,DIAL>\n\t\t<DISABLE <INT I-GNOME>>\n\t\t<SETG SCORE <+ ,SCORE 20>>\n\t\t<TELL\n\"The gnome pockets the coin and opens the gate. Before you can take a\nstep the gnome falls asleep again.\" CR>)\n\t       (<VERB? YOMIN>\n\t\t<COND (,GNOME-SLEEPING\n\t\t       <TELL\n\"The thoughts of the sleeping gnome are focused on certain activities\ninvolving female gnomes. Embarrassed, you withdraw.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"The thoughts of the gnome seem evenly divided between getting money from\nyou and getting back to sleep.\" CR>)>)>>"
  },
  "GNOME-REFUSES": {
   "name": "GNOME-REFUSES",
   "file": "belboz.zil",
   "line": 1289,
   "endLine": 1292,
   "source": "<ROUTINE GNOME-REFUSES ()\n\t <TELL\n\"The gnome refuses, saying \\\"That coin is giving off light, and is\ntherefore not legal tender.\\\"\" CR>>"
  },
  "I-GNOME": {
   "name": "I-GNOME",
   "file": "belboz.zil",
   "line": 1298,
   "endLine": 1316,
   "source": "<ROUTINE I-GNOME ()\n\t <ENABLE <QUEUE I-GNOME -1>>\n\t <COND (<EQUAL? ,HERE ,TOLL-GATE>\n\t\t<SETG PATIENCE-COUNTER <+ ,PATIENCE-COUNTER 1>>\n\t\t<COND (<EQUAL? ,PATIENCE-COUNTER 5>\n\t\t       <SETG GNOME-SLEEPING T>\n\t\t       <DISABLE <INT I-GNOME>>\n\t\t       <SETG GNOME-ANNOYED T>\n\t\t       <TELL CR\n\"\\\"Thanks for nothing, chum,\\\" growls the gnome as he resumes his nap.\" CR>)\n\t\t      (T\n\t\t       <TELL CR\n\"\\\"Well?\\\" asks the gnome, tapping impatiently. \\\"You've interrupted\nmy nap. Are you going to pay the toll, or not?\\\"\" CR>)>)\n\t       (T\n\t\t<SETG GNOME-SLEEPING T>\n                <SETG PATIENCE-COUNTER 3>\n\t\t<DISABLE <INT I-GNOME>>\n\t\t<RFALSE>)>>"
  },
  "SIGN-PSEUDO": {
   "name": "SIGN-PSEUDO",
   "file": "belboz.zil",
   "line": 1332,
   "endLine": 1341,
   "source": "<ROUTINE SIGN-PSEUDO ()\n\t <COND (<VERB? READ>\n\t\t<FIXED-FONT-ON>\n\t\t<TELL\n\"|\n\\\"ZEKE'S APPLIANCE STORE|\n|\n Official outlet for all|\nFrobozz Magic Appliances\\\"\" CR>\n\t\t<FIXED-FONT-OFF>)>>"
  },
  "STORE-PSEUDO": {
   "name": "STORE-PSEUDO",
   "file": "belboz.zil",
   "line": 1343,
   "endLine": 1358,
   "source": "<ROUTINE STORE-PSEUDO ()\n\t <COND (<VERB? THROUGH>\n\t\t<COND (<EQUAL? ,HERE ,STORE>\n\t\t       <LOOK-AROUND-YOU>)\n\t\t      (T\n\t\t       <DO-WALK ,P?SOUTH>)>)\n\t       (<VERB? EXIT DROP>\n\t\t<COND (<EQUAL? ,HERE ,STORE>\n\t\t       <DO-WALK ,P?NORTH>)\n\t\t      (T\n\t\t       <LOOK-AROUND-YOU>)>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<COND (<EQUAL? ,HERE ,STORE>\n\t\t       <LOOK-AROUND-YOU>)\n\t\t      (T\n\t\t       <MAKE-OUT>)>)>>"
  },
  "WAXER-F": {
   "name": "WAXER-F",
   "file": "belboz.zil",
   "line": 1381,
   "endLine": 1403,
   "source": "<ROUTINE WAXER-F ()\n\t <COND (<VERB? LAMP-ON>\n\t\t<COND (<HELD? ,WAXER>\n\t\t       <TELL \"Better put it down, first.\" CR>)\n\t\t      (,FWEEPED\n\t\t       <BATTY>)\n\t\t      (<EQUAL? ,HERE ,LAGOON ,LAGOON-FLOOR>\n\t\t       <JIGS-UP\n\"The waxer short circuits in the water, electrocuting you and\nseveral nearby fishies.\">)\n\t\t      (<EQUAL? ,HERE ,MINE-FIELD>\n\t\t       <SETG FLYING <>>\n\t\t       <MOVE ,WAXER ,DIAL>\n\t\t       <DO-WALK ,P?NORTH>)\n\t\t      (T\n\t\t       <TELL \"The waxer whirrs about the \">\n\t\t       <COND (<FSET? <LOC ,PROTAGONIST> ,VEHBIT>\n\t\t\t      <TELL \"vehicle\">)\n\t\t\t     (T\n\t\t\t      <TELL \"room\">)>\n\t\t       <TELL \" for a minute, polishing the floor.\" CR>)>)\n\t       (<VERB? LAMP-OFF>\n\t\t<TELL \"It is.\" CR>)>> "
  },
  "CRATER-F": {
   "name": "CRATER-F",
   "file": "belboz.zil",
   "line": 1451,
   "endLine": 1460,
   "source": "<ROUTINE CRATER-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \"You are \">\n\t\t<COND (,FLYING\n\t\t       <TELL \"floating near\">)\n\t\t      (T\n\t\t       <TELL \"standing in\">)>\n\t\t<TELL\n\" the center of an enormous crater, strewn with debris.\nSeveral points around the perimeter look climbable.\" CR>)>>"
  },
  "CRATER-OUT-F": {
   "name": "CRATER-OUT-F",
   "file": "belboz.zil",
   "line": 1462,
   "endLine": 1464,
   "source": "<ROUTINE CRATER-OUT-F ()\n\t <V-WALK-AROUND>\n\t <RFALSE>>"
  },
  "CRATER-EXIT-F": {
   "name": "CRATER-EXIT-F",
   "file": "belboz.zil",
   "line": 1466,
   "endLine": 1476,
   "source": "<ROUTINE CRATER-EXIT-F ()\n\t <COND (,FLYING\n\t\t<TELL\n\"As you try to fly over the rim here, a heavy gust of wind blows\nyou back.\" CR>\n\t\t<RFALSE>)\n\t       (T\n\t\t<TELL\n\"You attempt to climb the rim here, but the rubble is loose and you\nslide back down.\" CR>\n\t\t<RFALSE>)>>"
  },
  "CRATER-PSEUDO": {
   "name": "CRATER-PSEUDO",
   "file": "belboz.zil",
   "line": 1478,
   "endLine": 1496,
   "source": "<ROUTINE CRATER-PSEUDO ()\n\t <COND (<VERB? THROUGH>\n\t\t<COND (<EQUAL? ,HERE ,CRATER>\n\t\t       <TELL \"Where do you think you are?\" CR>)\n\t\t      (<EQUAL? ,HERE ,EDGE-OF-CRATER>\n\t\t       <DO-WALK ,P?SW>)\n\t\t      (<EQUAL? ,HERE ,EDGE-OF-CHASM>\n\t\t       <DO-WALK ,P?EAST>)\n\t\t      (<EQUAL? ,HERE ,SLIMY-ROOM>\n\t\t       <DO-WALK ,P?SOUTH>)\n\t\t      (T\n\t\t       <DO-WALK ,P?NORTH>)>)\n\t       (<VERB? CLIMB-FOO>\n\t\t<V-WALK-AROUND>)\n\t       (<VERB? LEAVE EXIT DISEMBARK>\n\t\t<COND (<EQUAL? ,HERE ,CRATER>\n\t\t       <DO-WALK ,P?UP>)\n\t\t      (T\n\t\t       <LOOK-AROUND-YOU>)>)>>"
  },
  "CHASM-EXIT-F": {
   "name": "CHASM-EXIT-F",
   "file": "belboz.zil",
   "line": 1510,
   "endLine": 1520,
   "source": "<ROUTINE CHASM-EXIT-F ()\n\t <COND (,FLYING\n\t\t<TELL \"You fly easily across the chasm...\" CR CR>\n\t\t<COND (<EQUAL? ,HERE ,BARE-PASSAGE>\n\t\t       ,EDGE-OF-CHASM)\n\t\t      (T\n\t\t       ,BARE-PASSAGE)>)\n\t       (T\n\t\t<TELL\n\"If you really want to jump across the chasm, just say so.\" CR>\n\t\t<RFALSE>)>>"
  },
  "CHASM-PSEUDO": {
   "name": "CHASM-PSEUDO",
   "file": "belboz.zil",
   "line": 1534,
   "endLine": 1542,
   "source": "<ROUTINE CHASM-PSEUDO ()\n\t <COND (<VERB? LEAP>\n\t\t<COND (<PROB 75>\n\t\t       <JIGS-UP \"Too bad. Didn't quite make it.\">)\n\t\t      (T\n\t\t       <COND (<EQUAL? ,HERE ,EDGE-OF-CHASM>\n\t\t\t      <GOTO ,BARE-PASSAGE>)\n\t\t\t     (T\n\t\t\t      <GOTO ,EDGE-OF-CHASM>)>)>)>> "
  },
  "TREE-ROOM-F": {
   "name": "TREE-ROOM-F",
   "file": "belboz.zil",
   "line": 1565,
   "endLine": 1568,
   "source": "<ROUTINE TREE-ROOM-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<PUT ,VEZZAS 3 0>\n\t\t<RFALSE>)>>"
  },
  "ZORKMID-TREE-F": {
   "name": "ZORKMID-TREE-F",
   "file": "belboz.zil",
   "line": 1581,
   "endLine": 1588,
   "source": "<ROUTINE ZORKMID-TREE-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"It is laden with zorkmids, glinting in the light.\" CR>)\n\t       (<VERB? REZROV>\n\t\t<V-SWANZO>)\n\t       (<VERB? CLIMB-FOO CLIMB-UP>\n\t\t<TELL \"The branches don't look sturdy enough.\" CR>)>>"
  },
  "ZORKMID-F": {
   "name": "ZORKMID-F",
   "file": "belboz.zil",
   "line": 1599,
   "endLine": 1632,
   "source": "<ROUTINE ZORKMID-F ()\n\t <COND (<AND <VERB? PICK>\n\t\t     <FSET? ,PRSO ,TRYTAKEBIT>\n\t\t     <EQUAL? ,ZORKMID ,PRSO>>\n\t\t<PERFORM ,V?TAKE ,PRSO ,PRSI>\n\t\t<RTRUE>)\n\t       (<AND <VERB? TAKE>\n\t\t     <FSET? ,PRSO ,TRYTAKEBIT>>\n\t\t<FCLEAR ,PRSO ,TRYTAKEBIT>\n\t\t<FCLEAR ,PRSO ,NDESCBIT>\n\t\t<MOVE ,ZORKMID-TREE ,DIAL>\n\t\t<MOVE ,ZORKMID ,PROTAGONIST>\n\t\t<SETG SCORE <+ ,SCORE 15>>\n\t\t<TELL\n\"As you pluck the first zorkmid, the tree shimmers and vanishes!\n(I guess it was just an illusion.) You are left holding a solitary\nzorkmid coin.\" CR>)\n\t       (<AND <VERB? COUNT EXAMINE>\n\t\t     <IN? ,ZORKMID-TREE ,HERE>>\n\t\t<TELL\n\"There are countless coins, hanging from every branch of the tree.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"The coin pictures a man with an incredibly flat head, wearing a\ngaudy crown.\" CR>)\n\t       (<VERB? BITE>\n\t\t<TELL \"Yep, it's real.\" CR>)\n\t       (<VERB? RESEARCH>\n\t\t<TELL\n\"An article in the monetary section explains that the zorkmid was the\nunit of currency of the Great Underground Empire, and is still used in\nmost parts of the kingdom today. A picture of a zorkmid coin is included. \">\n\t\t<PERFORM ,V?EXAMINE ,ZORKMID>\n\t\t<RTRUE>)>>"
  },
  "HALL-OF-CARVINGS-F": {
   "name": "HALL-OF-CARVINGS-F",
   "file": "belboz.zil",
   "line": 1657,
   "endLine": 1670,
   "source": "<ROUTINE HALL-OF-CARVINGS-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You have entered a large room whose walls are covered with intricate\ncarvings. \">\n\t\t<COND (,DRAGON-MOVED\n\t\t       <TELL\n\"A passage has been recently opened to the south, and is only partially\nblocked by a huge stone dragon, poised in the midst of an attack.\">)\n\t\t       (T\n\t\t\t<TELL\n\"The largest and most striking carving, on the southern wall, is\nof a huge sleeping dragon!\">)>\n\t\t<TELL \" A winding tunnel leads north.\" CR>)>>"
  },
  "DRAGON-F": {
   "name": "DRAGON-F",
   "file": "belboz.zil",
   "line": 1684,
   "endLine": 1702,
   "source": "<ROUTINE DRAGON-F ()\n\t <COND (<VERB? MALYON>\n\t\t<COND (,MALYON-YONKED\n\t\t       <COND (,DRAGON-MOVED\n\t\t\t      <JIGS-UP\n\"The dragon comes to life again! He spews a tremendous gout of\nflame right at you!\">)\n\t\t\t     (T\n\t\t\t      <SETG DRAGON-MOVED T>\n\t\t\t      <TELL\n\"The dragon is suddenly imbued with life and begins to move. It shakes\nitself loose from the wall, which crumbles down upon the dragon, revealing\na southward passage! The dragon howls with pain and anger. Spotting you,\nthe dragon rears back its head, smoke billowing from its nostrils. Then,\njust as it seems that you will be barbecued, the dragon reverts to\nstone!\" CR>)>)\n\t\t      (T\n\t\t       <TELL\n\"The dragon seems to shiver for a moment, but that is all.\" CR>)>)>>"
  },
  "COAL-F": {
   "name": "COAL-F",
   "file": "coal.zil",
   "line": 12,
   "endLine": 14,
   "source": "<ROUTINE COAL-F ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL \"Such menial tasks are best left to troglodytes.\" CR>)>>"
  },
  "SOOTY-ROOM-F": {
   "name": "SOOTY-ROOM-F",
   "file": "coal.zil",
   "line": 32,
   "endLine": 35,
   "source": "<ROUTINE SOOTY-ROOM-F (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-ENTER>\n\t\t     <NOT <FSET? ,SOOTY-ROOM ,TOUCHBIT>>>\n\t\t<SETG SCORE <+ ,SCORE 20>>)>>"
  },
  "SOOTY-ROOM-EXIT-F": {
   "name": "SOOTY-ROOM-EXIT-F",
   "file": "coal.zil",
   "line": 37,
   "endLine": 43,
   "source": "<ROUTINE SOOTY-ROOM-EXIT-F ()\n\t <COND (<FSET? ,COAL-BIN-ROOM ,TOUCHBIT>\n\t\t<TELL\n\"That passage is now completely blocked by a cave-in.\" CR>\n\t\t<RFALSE>)\n\t       (T\n\t\t,COAL-BIN-ROOM)>>"
  },
  "TIMBER-PSEUDO": {
   "name": "TIMBER-PSEUDO",
   "file": "coal.zil",
   "line": 45,
   "endLine": 47,
   "source": "<ROUTINE TIMBER-PSEUDO ()\n\t <COND (<VERB? MOVE>\n\t\t<JIGS-UP \"Part of the ceiling collapses onto you.\">)>>"
  },
  "COAL-BIN-ROOM-F": {
   "name": "COAL-BIN-ROOM-F",
   "file": "coal.zil",
   "line": 70,
   "endLine": 98,
   "source": "<ROUTINE COAL-BIN-ROOM-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<COND (<NOT <FSET? ,HERE ,TOUCHBIT>>\n\t\t       <SETG COMBO <RANDOM 873>>\n\t\t       <PUT ,VEZZAS 5 0>\n\t\t       <TELL\n\"There is a rumbling noise behind you as the ceiling of the tunnel collapses,\nblocking your retreat! The air smells strongly of coal gas. \">\n\t\t       <COND (,VILSTUED\n\t\t              <ENABLE <QUEUE I-OLDER-SELF 2>>\n\t\t\t      <TELL \"Good thing you took that vilstu potion\">)\n\t\t             (T\n\t\t              <ENABLE <QUEUE I-SUFFOCATE 2>>\n\t\t\t      <TELL\n\"You won't survive long in this atmosphere\">)>\n\t\t       <TELL \".\" CR CR>)\n\t\t      (,GOLMACKED\n\t\t       <ENABLE <QUEUE I-YOUNGER-SELF -1>>\n\t\t       <MOVE ,YOUNGER-SELF ,HERE>\n\t\t       <COND (,YOUNGER-HAS-SPELL-BOOK\n\t\t\t      <COND (<IN? ,SPELL-BOOK ,LAGOON-FLOOR>\n\t\t\t\t     <SETG BOOK-BELONGS-IN-LAGOON T>)>\n\t\t\t      <MOVE ,SPELL-BOOK ,YOUNGER-SELF>\n\t\t\t      <FSET ,SPELL-BOOK ,TRYTAKEBIT>)>\n\t\t       <SETG LIT <LIT? ,HERE>>)>)\n\t       (<AND <EQUAL? .RARG ,M-END>\n\t\t     <PROB 35>>\n\t\t<TELL CR\n\"A few lumps of coal spill from the coal chute.\" CR>)>> "
  },
  "I-SUFFOCATE": {
   "name": "I-SUFFOCATE",
   "file": "coal.zil",
   "line": 106,
   "endLine": 113,
   "source": "<ROUTINE I-SUFFOCATE ()\n\t <CRLF>\n\t <COND (,SUFFOCATE-WARNING\n\t\t<JIGS-UP \"Finally, the shortage of oxygen gets to you.\">)\n\t       (T\n\t\t<SETG SUFFOCATE-WARNING T>\n\t\t<ENABLE <QUEUE I-SUFFOCATE 2>>\n\t\t<TELL \"You are about to pass out from the bad air.\" CR>)>>"
  },
  "COAL-BIN-F": {
   "name": "COAL-BIN-F",
   "file": "coal.zil",
   "line": 123,
   "endLine": 127,
   "source": "<ROUTINE COAL-BIN-F ()\n\t <COND (<VERB? LOOK-INSIDE>\n\t\t<TELL \"It's full of coal.\" CR>)\n\t       (<VERB? SEARCH DIG>\n\t\t<TELL \"You find nothing of interest.\" CR>)>>"
  },
  "UPPER-CHUTE-F": {
   "name": "UPPER-CHUTE-F",
   "file": "coal.zil",
   "line": 144,
   "endLine": 190,
   "source": "<ROUTINE UPPER-CHUTE-F ()\n\t <COND (<VERB? THROUGH LEAP>\n\t\t<COND (<EQUAL? ,HERE ,TOP-OF-CHUTE ,SLANTED-ROOM>\n\t\t       <DO-WALK ,P?DOWN>)\n\t\t      (T\n\t\t       <LOOK-AROUND-YOU>)>)\n\t       (<VERB? CLIMB-UP CLIMB-FOO>\n\t\t<COND (<EQUAL? ,HERE ,TOP-OF-CHUTE>\n\t\t       <BOTTOM-TOP-OF-CHUTE T>)\n\t\t      (T\n\t\t       <DO-WALK ,P?UP>)>)\n\t       (<VERB? CLIMB-DOWN>\n\t\t<COND (<EQUAL? ,HERE ,COAL-BIN-ROOM>\n\t\t       <BOTTOM-TOP-OF-CHUTE>)\n\t\t      (T\n\t\t       <DO-WALK ,P?DOWN>)>)\n\t       (<AND <VERB? PUT LOWER-INTO>\n\t\t     <EQUAL? ,PRSI ,UPPER-CHUTE>>\n\t\t<COND (<EQUAL? ,HERE ,TOP-OF-CHUTE ,SLANTED-ROOM>\n\t\t       <COND (<AND <EQUAL? ,PRSO ,BEAM>\n\t\t\t\t   ,ROPE-TO-BEAM>\n\t\t\t      <MOVE ,ROPE ,COAL-BIN-ROOM>\n\t\t\t      <MOVE ,BEAM ,COAL-BIN-ROOM>\n\t\t\t      <SETG ROPE-PLACED <>>\n\t\t\t      <FCLEAR ,BEAM ,TRYTAKEBIT>\n\t\t\t      <FCLEAR ,ROPE ,TRYTAKEBIT>\n\t\t\t      <BEAM-AND-ROPE>)\n\t\t\t     (<AND <EQUAL? ,PRSO ,ROPE>\n\t\t\t\t   ,ROPE-TO-BEAM>\n\t\t              <COND (<DROP-BEAM-FIRST>\n\t\t\t\t     <RTRUE>)>\n\t\t\t      <SETG ROPE-PLACED T>\n\t\t\t      <FSET ,BEAM ,TRYTAKEBIT>\n\t\t\t      <FSET ,ROPE ,TRYTAKEBIT>\n\t\t              <MOVE ,ROPE ,HERE>\n\t\t              <ROPE-HANGS>)\n\t\t             (T\n\t\t\t      <COND (<L? <GETP ,PRSO ,P?SIZE> 20>\n\t\t\t\t     <MOVE ,PRSO ,DIAL>)\n\t\t\t\t    (T\n\t\t\t\t     <MOVE ,PRSO ,COAL-BIN-ROOM>)>\n\t\t              <DISAPPEARS-DOWN-CHUTE>)>)\n\t\t      (<EQUAL? ,HERE ,COAL-BIN-ROOM>\n\t\t       <LOOK-AROUND-YOU>)>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<PERFORM ,V?RESEARCH ,UPPER-CHUTE>\n\t\t<RTRUE>)>>"
  },
  "LOWER-CHUTE-F": {
   "name": "LOWER-CHUTE-F",
   "file": "coal.zil",
   "line": 192,
   "endLine": 231,
   "source": "<ROUTINE LOWER-CHUTE-F ()\n\t <COND (<VERB? CLIMB-UP CLIMB-FOO>\n\t\t<COND (<EQUAL? ,HERE ,COAL-BIN-ROOM>\n\t\t       <BOTTOM-TOP-OF-CHUTE T>)\n\t\t      (T\n\t\t       <DO-WALK ,P?UP>)>)\n\t       (<VERB? CLIMB-DOWN THROUGH LEAP>\n\t\t<COND (<EQUAL? ,HERE ,COVE>\n\t\t       <BOTTOM-TOP-OF-CHUTE>)\n\t\t      (T\n\t\t       <DO-WALK ,P?DOWN>)>)\n\t       (<AND <VERB? PUT LOWER-INTO>\n\t\t     <EQUAL? ,PRSI ,LOWER-CHUTE>>\n\t\t<COND (<EQUAL? ,HERE ,COAL-BIN-ROOM>\n\t\t       <COND (<AND <EQUAL? ,PRSO ,BEAM>\n\t\t\t\t   ,ROPE-TO-BEAM>\n\t\t\t      <MOVE ,ROPE ,LAGOON-FLOOR>\n\t\t\t      <MOVE ,BEAM ,LAGOON-FLOOR>\n\t\t\t      <SETG ROPE-IN-LOWER-CHUTE <>>\n\t\t\t      <FCLEAR ,ROPE ,TRYTAKEBIT>\n\t\t\t      <BEAM-AND-ROPE>)\n\t\t\t     (<AND <EQUAL? ,PRSO ,ROPE>\n\t\t\t\t   ,ROPE-TO-BEAM>\n\t\t              <COND (<DROP-BEAM-FIRST>\n\t\t\t\t     <RTRUE>)>\n\t\t\t      <SETG ROPE-IN-LOWER-CHUTE T>\n\t\t\t      <FSET ,ROPE ,TRYTAKEBIT>\n\t\t              <MOVE ,ROPE ,HERE>\n\t\t              <ROPE-HANGS>)\n\t\t             (T\n\t\t\t      <MOVE ,PRSO ,LAGOON-FLOOR>\n\t\t\t      <COND (<OR <FSET? ,PRSO ,SCROLLBIT>\n\t\t\t\t\t <EQUAL? ,PRSO ,SPELL-BOOK>>\n\t\t\t             <FSET ,PRSO ,MUNGBIT>)>\n\t\t              <DISAPPEARS-DOWN-CHUTE>)>)\n\t\t      (<EQUAL? ,HERE ,COAL-BIN-ROOM>\n\t\t       <LOOK-AROUND-YOU>)>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<PERFORM ,V?RESEARCH ,LOWER-CHUTE>\n\t\t<RTRUE>)>>"
  },
  "DROP-BEAM-FIRST": {
   "name": "DROP-BEAM-FIRST",
   "file": "coal.zil",
   "line": 233,
   "endLine": 238,
   "source": "<ROUTINE DROP-BEAM-FIRST ()\n\t <COND (<HELD? ,BEAM>\n\t        <TELL \"You'll have to drop the beam before doing that.\" CR>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "BEAM-AND-ROPE": {
   "name": "BEAM-AND-ROPE",
   "file": "coal.zil",
   "line": 240,
   "endLine": 241,
   "source": "<ROUTINE BEAM-AND-ROPE ()\n\t <TELL \"The beam and rope both slide into the chute.\" CR>>"
  },
  "ROPE-HANGS": {
   "name": "ROPE-HANGS",
   "file": "coal.zil",
   "line": 243,
   "endLine": 244,
   "source": "<ROUTINE ROPE-HANGS ()\n\t <TELL \"The rope hangs from the beam, into the chute.\" CR>>"
  },
  "DISAPPEARS-DOWN-CHUTE": {
   "name": "DISAPPEARS-DOWN-CHUTE",
   "file": "coal.zil",
   "line": 246,
   "endLine": 247,
   "source": "<ROUTINE DISAPPEARS-DOWN-CHUTE ()\n\t <TELL \"The \" D ,PRSO \" disappears into the chute.\" CR>>"
  },
  "OLDER-SELF-F": {
   "name": "OLDER-SELF-F",
   "file": "coal.zil",
   "line": 257,
   "endLine": 276,
   "source": "<ROUTINE OLDER-SELF-F ()\n\t <COND (<EQUAL? ,WINNER ,OLDER-SELF>\n\t\t<TELL \"Your older self ignores your words.\" CR>\n\t\t<STOP>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n,OLDER-INTRO \" The stranger is carrying a smelly scroll.\" CR>)\n\t       (<AND <VERB? GIVE>\n\t\t     <EQUAL? ,PRSO ,SPELL-BOOK>>\n\t\t<MOVE ,SPELL-BOOK ,OLDER-SELF>\n\t\t<FSET ,SPELL-BOOK ,TRYTAKEBIT>\n\t\t<TELL \"Your older self accepts the spell book gratefully.\" CR>)\n\t       (<AND <VERB? FOLLOW>\n\t\t     ,TWIN-FOLLOW>\n\t\t<DO-WALK ,P?DOWN>)\n\t       (<VERB? AIMFIZ>\n\t\t<V-SWANZO>)\n\t       (<VERB? YOMIN>\n\t\t<TELL\n\"The thoughts of your older self center on attempting to breathe.\" CR>)>>"
  },
  "I-OLDER-SELF": {
   "name": "I-OLDER-SELF",
   "file": "coal.zil",
   "line": 305,
   "endLine": 376,
   "source": "<ROUTINE I-OLDER-SELF ()\n\t <ENABLE <QUEUE I-OLDER-SELF -1>>\n\t <SETG OLDER-COUNTER <+ ,OLDER-COUNTER 1>>\n\t <COND (<EQUAL? ,OLDER-COUNTER 1>\n\t\t<MOVE ,OLDER-SELF ,COAL-BIN-ROOM>\n\t\t<COND (<HELD? ,SPELL-BOOK>\n\t\t       <SETG YOUNGER-HAS-SPELL-BOOK T>)>\n\t\t<COND (<EQUAL? ,HERE ,COAL-BIN-ROOM>\n\t\t       <TELL CR\n\"Someone slides out of the coal chute, and lands near the bin. \">\n\t\t       <TELL ,OLDER-INTRO CR>\n\t\t       <SETG OLDER-INTRODUCED T>)\n\t\t      (<EQUAL? ,HERE ,DIAL-ROOM>\n\t\t       <TELL CR\n\"You here a commotion from the room to the west.\" CR>)\n\t\t      (T\n\t\t       <DISABLE <INT I-OLDER-SELF>>\n\t\t       <RFALSE>)>)\n\t       (<EQUAL? ,OLDER-COUNTER 2>\n\t\t<DATA-TO-TABLE ,MOVE-ONE-TABLE>\n\t\t<COND (<EQUAL? ,HERE ,COAL-BIN-ROOM>\n\t\t       <CRLF>\n\t\t       <COND (<NOT ,OLDER-INTRODUCED>\n\t\t\t      <SETG OLDER-INTRODUCED T>\n\t\t\t      <TELL\n\"Someone is standing near the coal bin. \" ,OLDER-INTRO CR CR>)>\n\t\t       <SETG COMBO-DISCOVERED T>\n\t\t       <OLDER-TELLS-COMBO>\n\t\t       <COND (<NOT <IN? ,SPELL-BOOK ,OLDER-SELF>>\n\t\t\t      <TELL\n\" Your older self then looks at you, almost expectantly.\">)>\n\t\t       <CRLF>)\n\t\t      (T\n\t\t       <TELL CR\n\"From the next room you glimpse someone gasping for air.\" CR>)>)\n\t       (<EQUAL? ,OLDER-COUNTER 3>\n\t\t<DATA-TO-TABLE ,MOVE-TWO-TABLE>\n\t\t<COND (<EQUAL? ,HERE ,COAL-BIN-ROOM>\n\t\t       <COND (<NOT ,OLDER-INTRODUCED>\n\t\t\t      <SETG OLDER-INTRODUCED T>\n\t\t\t      <TELL CR\n\"Someone is standing near the coal bin. \" ,OLDER-INTRO CR>)>\n\t\t       <COND (<IN? ,SPELL-BOOK ,OLDER-SELF>\n\t\t\t      <MOVE ,SPELL-BOOK ,YOUNGER-SELF>\n\t\t\t      <FSET ,SPELL-BOOK ,TRYTAKEBIT>\n\t\t\t      <MOVE ,OLDER-SELF ,DIAL>\n\t\t\t      <MOVE ,VARDIK-SCROLL ,DIAL>\n\t\t\t      <SETG TWIN-FOLLOW T>\n\t\t\t      <ENABLE <QUEUE I-TWIN-UNFOLLOW 1>>\n\t\t\t      <TELL CR\n\"Your look-alike dives into the lower chute and slides out of view.\" CR>)\n\t\t\t     (<NOT ,COMBO-DISCOVERED>\n\t\t\t      <CRLF>\n\t\t\t      <OLDER-TELLS-COMBO>\n\t\t\t      <CRLF>)\n\t\t\t     (T\n\t\t\t      <TELL CR\n\"\\\"Give me...the spell book,\\\" croaks your older self.\" CR>)>)\n\t\t      (T\n\t\t       <MOVE ,OLDER-SELF ,DIAL>\n\t\t       <MOVE ,VARDIK-SCROLL ,DIAL>\n\t\t       <TELL CR\n\"Someone in the coal bin room dives into the lower chute.\" CR>)>)\n\t       (T\n\t\t<DATA-TO-TABLE ,MOVE-THREE-TABLE>\n\t\t<DISABLE <INT I-OLDER-SELF>>\n\t\t<COND (<AND <EQUAL? ,HERE ,COAL-BIN-ROOM>\n\t\t\t    <IN? ,OLDER-SELF ,HERE>>\n\t\t       <TELL CR\n\"Your older self dives into the lower chute.\" CR>)>\n\t\t<MOVE ,OLDER-SELF ,DIAL>\n\t\t<MOVE ,VARDIK-SCROLL ,DIAL>)>>"
  },
  "OLDER-TELLS-COMBO": {
   "name": "OLDER-TELLS-COMBO",
   "file": "coal.zil",
   "line": 378,
   "endLine": 381,
   "source": "<ROUTINE OLDER-TELLS-COMBO ()\n\t <TELL\n\"Your disheveled \\\"twin\\\" is having difficulty breathing, but gasps,\n\\\"The combination is \" N ,COMBO \".\\\"\">>"
  },
  "I-TWIN-UNFOLLOW": {
   "name": "I-TWIN-UNFOLLOW",
   "file": "coal.zil",
   "line": 385,
   "endLine": 387,
   "source": "<ROUTINE I-TWIN-UNFOLLOW ()\n\t <SETG TWIN-FOLLOW <>>\n\t <RFALSE>>"
  },
  "DATA-TO-TABLE": {
   "name": "DATA-TO-TABLE",
   "file": "coal.zil",
   "line": 389,
   "endLine": 392,
   "source": "<ROUTINE DATA-TO-TABLE (TABLE)\n\t <PUT .TABLE 1 ,PRSA>\n\t <PUT .TABLE 2 ,PRSO>\n\t <PUT .TABLE 3 ,PRSI>>"
  },
  "YOUNGER-SELF-F": {
   "name": "YOUNGER-SELF-F",
   "file": "coal.zil",
   "line": 410,
   "endLine": 438,
   "source": "<ROUTINE YOUNGER-SELF-F ()\n\t <COND (<EQUAL? ,YOUNGER-SELF ,WINNER>\n\t\t<COND (<AND <VERB? COMBO>\n\t\t\t    <EQUAL? ,PRSO ,INTNUM>>\n\t\t       <COND (<EQUAL? ,P-NUMBER ,COMBO>\n\t\t\t      <SETG COMBO-REVEALED T>)>\n\t\t       <TELL\n\"Your younger self seems surprised by your statement.\" CR>)\n\t\t      (<AND <VERB? GIVE>\n\t\t\t    <EQUAL? ,PRSO ,SPELL-BOOK>\n\t\t\t    <EQUAL? ,PRSI ,ME>\n\t\t\t    <SPELL-BOOK-PASS-OFF-CHECK>>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL\n\"Your younger self seems confused, and doesn't respond.\" CR>\n\t\t       <STOP>)>)\n\t       (<VERB? YOMIN>\n\t\t<TELL\n\"The thoughts of your younger self are confused, and seem to center on\nwhether or not to perform a SAVE.\" CR>)\n\t       (<VERB? AIMFIZ>\n\t\t<V-SWANZO>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"It's almost like looking in a mirror. Your younger self looks confused\">\n\t\t<COND (<IN? ,SPELL-BOOK ,YOUNGER-SELF>\n\t\t       <TELL \", and is carrying a spell book\">)>\n\t\t<TELL \".\" CR>)>>"
  },
  "YOUNGER-SELF-DESCFCN": {
   "name": "YOUNGER-SELF-DESCFCN",
   "file": "coal.zil",
   "line": 440,
   "endLine": 463,
   "source": "<ROUTINE YOUNGER-SELF-DESCFCN (TABLE)\n\t <COND (<L? ,YOUNGER-COUNTER 3>\n\t\t<SET TABLE ,MOVE-ONE-TABLE>)\n\t       (<EQUAL? ,YOUNGER-COUNTER 3>\n\t\t<SET TABLE ,MOVE-TWO-TABLE>)\n\t       (T\n\t\t<SET TABLE ,MOVE-THREE-TABLE>)>\n\t <COND (<FSET? ,YOUNGER-SELF ,TOUCHBIT>\n\t\t<TELL \"Your younger self is here\">\n\t\t<COND (,YOUNGER-HAS-SPELL-BOOK\n\t\t       <TELL \", holding your spell book.\" CR>)\n\t\t      (T\n\t\t       <TELL \".\" CR>)>)\n\t       (T\n\t\t<FSET ,YOUNGER-SELF ,TOUCHBIT>\n\t\t<TELL\n\"Standing here, looking quite confused, is someone who could only be your\nyounger self -- an exact duplicate of you, but cleaner and breathing with\nconsiderably less difficulty. You remember seeing this scene from another\nviewpoint just a short while ago.\">\n\t\t<COND (,YOUNGER-HAS-SPELL-BOOK\n\t\t       <TELL\n\" Among the items carried by your \\\"twin\\\" is your spell book.\">)>\n\t\t<CRLF>)>>"
  },
  "SPELL-BOOK-PASS-OFF-CHECK": {
   "name": "SPELL-BOOK-PASS-OFF-CHECK",
   "file": "coal.zil",
   "line": 465,
   "endLine": 482,
   "source": "<ROUTINE SPELL-BOOK-PASS-OFF-CHECK (\"AUX\" TABLE)\n\t <COND (<EQUAL? ,YOUNGER-COUNTER 1>\n\t\t<SET TABLE ,MOVE-ONE-TABLE>)\n\t       (<EQUAL? ,YOUNGER-COUNTER 2>\n\t\t<SET TABLE ,MOVE-TWO-TABLE>)\n\t       (<EQUAL? ,YOUNGER-COUNTER 3>\n\t\t<SET TABLE ,MOVE-THREE-TABLE>)\n\t       (T\n\t\t<RFALSE>)>\n\t <COND (<OR <AND <EQUAL? <GET .TABLE 2> ,SPELL-BOOK>\n\t\t         <EQUAL? <GET .TABLE 3> ,OLDER-SELF>\n\t\t         <EQUAL? <GET .TABLE 1> ,V?GIVE>>\n\t\t    <AND <EQUAL? <GET .TABLE 2> ,OLDER-SELF>\n\t\t         <EQUAL? <GET .TABLE 3> ,SPELL-BOOK>\n\t\t         <EQUAL? <GET .TABLE 1> ,V?SGIVE>>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "I-YOUNGER-SELF": {
   "name": "I-YOUNGER-SELF",
   "file": "coal.zil",
   "line": 486,
   "endLine": 498,
   "source": "<ROUTINE I-YOUNGER-SELF ()\n\t <SETG YOUNGER-COUNTER <+ ,YOUNGER-COUNTER 1>>\n\t <COND (<NOT <IN? ,YOUNGER-SELF ,HERE>>\n\t\t<RFALSE>)\n\t       (<AND <NOT ,LIT>\n\t\t     <NOT ,BLORTED>>\n\t\t<RFALSE>)\n\t       (<EQUAL? ,YOUNGER-COUNTER 2>\n\t\t<YOUNGER-ACTIONS ,MOVE-ONE-TABLE>)\n\t       (<EQUAL? ,YOUNGER-COUNTER 3>\n\t\t<YOUNGER-ACTIONS ,MOVE-TWO-TABLE>)\n\t       (<EQUAL? ,YOUNGER-COUNTER 4>\n\t\t<YOUNGER-ACTIONS ,MOVE-THREE-TABLE>)>>"
  },
  "YOUNGER-ACTIONS": {
   "name": "YOUNGER-ACTIONS",
   "file": "coal.zil",
   "line": 500,
   "endLine": 647,
   "source": "<ROUTINE YOUNGER-ACTIONS (TABLE)\n\t <COND (<NOT <GET .TABLE 2>>\n\t\t<PUT .TABLE 2 ,NOT-HERE-OBJECT>)>\n\t <COND (<NOT <GET .TABLE 3>>\n\t\t<PUT .TABLE 3 ,NOT-HERE-OBJECT>)>\n\t <COND (<EQUAL? <GET .TABLE 2> ,OLDER-SELF>\n\t\t<PUT .TABLE 2 ,YOU-OBJECT>)\n\t       (<EQUAL? <GET .TABLE 2> ,ME>\n\t\t<PUT .TABLE 2 ,YOUNGER-SELF>)>\n\t <COND (<EQUAL? <GET .TABLE 3> ,OLDER-SELF>\n\t\t<PUT .TABLE 3 ,YOU-OBJECT>)\n\t       (<EQUAL? <GET .TABLE 3> ,ME>\n\t\t<PUT .TABLE 3 ,YOUNGER-SELF>)>\n\t <TELL CR \"Your younger self \">\n\t <COND (<OR <AND <EQUAL? <GET .TABLE 2> ,SPELL-BOOK>\n\t\t         <EQUAL? <GET .TABLE 3> ,YOU-OBJECT>\n\t\t         <EQUAL? <GET .TABLE 1> ,V?GIVE>>\n\t\t    <AND <EQUAL? <GET .TABLE 2> ,YOU-OBJECT>\n\t\t         <EQUAL? <GET .TABLE 3> ,SPELL-BOOK>\n\t\t         <EQUAL? <GET .TABLE 1> ,V?SGIVE>>>\n\t\t<MOVE ,SPELL-BOOK ,PROTAGONIST>\n\t\t<FCLEAR ,SPELL-BOOK ,TRYTAKEBIT>\n\t\t<TELL \"hands you your spell book!\" CR>)\n\t       (<OR <EQUAL? <GET .TABLE 1> ,V?VERBOSE ,V?BRIEF ,V?SUPER-BRIEF>\n\t\t    <EQUAL? <GET .TABLE 1> ,V?SCORE ,V?SCRIPT ,V?UNSCRIPT>>\n\t\t<TELL \"is performing a spell of high technology.\" CR>)\n\t       (<OR <EQUAL? <GET .TABLE 1> ,V?ANSWER ,V?REPLY ,V?CURSE>\n\t\t    <EQUAL? <GET .TABLE 1> ,V?HELLO ,V?TELL ,V?ASK-FOR>\n\t\t    <EQUAL? <GET .TABLE 1> ,V?SAY ,V?THANK ,V?YELL>\n\t\t    <EQUAL? <GET .TABLE 1> ,V?ASK-ABOUT>>\n\t\t<TELL \"is attempting to talk.\" CR>)\n\t       (<OR <EQUAL? <GET .TABLE 1> ,V?CAST ,V?GNUSTO ,V?FROTZ>\n\t\t    <EQUAL? <GET .TABLE 1> ,V?REZROV ,V?IZYUK ,V?FWEEP>\n\t\t    <EQUAL? <GET .TABLE 1> ,V?AIMFIZ ,V?SWANZO ,V?VARDIK>\n\t\t    <EQUAL? <GET .TABLE 1> ,V?MEEF ,V?PULVER ,V?GOLMAC>\n\t\t    <EQUAL? <GET .TABLE 1> ,V?YOMIN ,V?VEZZA ,V?GASPAR>\n\t\t    <EQUAL? <GET .TABLE 1> ,V?YONK ,V?MALYON>>\n\t\t<TELL \"is casting a familiar spell.\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?INVENTORY>\n\t\t<TELL \"is doing an inventory.\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?DIAGNOSE>\n\t\t<TELL \"is checking for wounds.\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?WAIT>\n\t\t<TELL \"is doing absolutely nothing.\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?SLEEP>\n\t\t<TELL \"is trying to fall asleep!\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?LEARN>\n\t\t<TELL \"is studying a spell book.\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?SPELLS>\n\t        <TELL \"seems lost in thought.\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?LOOK>\n\t\t<TELL \"is looking around.\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?LEAP ,V?SKIP>\n\t\t<TELL \"is hopping around like a crazed rabbit.\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?WALK ,V?WALK-AROUND ,V?WALK-TO>\n\t\t<TELL \"is moving around.\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?GIVE>\n\t\t<TELL \"is trying to give\">\n\t\t<ARTICLE <GET .TABLE 2>>\n\t\t<TELL \" to\">\n\t\t<ARTICLE <GET .TABLE 3>>\n\t\t<TELL \".\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?SHOW>\n\t\t<TELL \"is trying to show\">\n\t\t<ARTICLE <GET .TABLE 2>>\n\t\t<TELL \" to\">\n\t\t<ARTICLE <GET .TABLE 3>>\n\t\t<TELL \".\" CR>)\n\t       (<OR <EQUAL? <GET .TABLE 1> ,V?RAISE ,V?LOWER ,V?RUB>\n\t\t    <EQUAL? <GET .TABLE 1> ,V?MOVE ,V?SHAKE ,V?PUSH>\n\t\t    <EQUAL? <GET .TABLE 1> ,V?KICK ,V?PUT-ON ,V?PUSH-TO>\n\t\t    <EQUAL? <GET .TABLE 1> ,V?PUT ,V?PUT-UNDER ,V?PUT-BEHIND>>\n\t\t<COND (<AND <EQUAL? <GET .TABLE 1> ,V?PUT>\n\t\t\t    <EQUAL? <GET .TABLE 2> ,SPELL-BOOK>\n\t\t\t    <EQUAL? <GET .TABLE 3> ,LOWER-CHUTE>>\n\t\t       <MOVE ,SPELL-BOOK ,DIAL>)>\n\t\t<TELL \"is attempting to move\">\n\t\t<ARTICLE <GET .TABLE 2>>\n\t\t<TELL \".\" CR>)\n\t       (<OR <EQUAL? <GET .TABLE 1> ,V?EXAMINE ,V?LOOK-INSIDE>\n\t\t    <EQUAL? <GET .TABLE 1> ,V?LOOK-BEHIND ,V?LOOK-UNDER>>\n\t\t<TELL \"is examining\">\n\t\t<ARTICLE <GET .TABLE 2>>\n\t\t<TELL \".\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?BOARD ,V?ENTER ,V?THROUGH>\n\t\t<TELL \"is trying to get into\">\n\t\t<ARTICLE <GET .TABLE 2>>\n\t\t<TELL \".\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?THROW ,V?THROW-OFF>\n\t\t<TELL \"is performing aeronautical experiments with\">\n\t\t<ARTICLE <GET .TABLE 2>>\n\t\t<TELL \".\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?WHAT ,V?WHERE ,V?WHO>\n\t\t<TELL \"is asking about\">\n\t\t<ARTICLE <GET .TABLE 2>>\n\t\t<TELL \", addressing the question to no one in particular.\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?ATTACK ,V?KILL ,V?MUNG>\n\t\t<TELL \"is attacking\">\n\t\t<ARTICLE <GET .TABLE 2> T>\n\t\t<TELL \".\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?EAT ,V?DRINK>\n\t\t<TELL \"is attempting to ingest\">\n\t\t<ARTICLE <GET .TABLE 2>>\n\t\t<TELL \".\" CR>)\n\t       (<OR\n\t\t <EQUAL? <GET .TABLE 1> ,V?CLIMB-ON ,V?CLIMB-UP ,V?CLIMB-FOO>\n\t\t <EQUAL? <GET .TABLE 1> ,V?CLIMB-DOWN ,V?CLIMB-OVER>>\n\t\t<TELL \"is climbing\">\n\t\t<ARTICLE <GET .TABLE 2> T>\n\t\t<TELL \".\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?READ>\n\t\t<TELL \"is reading\">\n\t\t<ARTICLE <GET .TABLE 2>>\n\t\t<TELL \".\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?SMELL>\n\t\t<TELL \"is smelling\">\n\t\t<ARTICLE <GET .TABLE 2>>\n\t\t<TELL \".\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?LISTEN>\n\t\t<TELL \"seems to be listening to\">\n\t\t<ARTICLE <GET .TABLE 2>>\n\t\t<TELL \".\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?KISS>\n\t\t<TELL \"tries to kiss\">\n\t\t<ARTICLE <GET .TABLE 2>>\n\t\t<TELL \".\" CR>)\t       \n\t       (<EQUAL? <GET .TABLE 1> ,V?OPEN>\n\t\t<TELL \"is trying to open\">\n\t\t<ARTICLE <GET .TABLE 2>>\n\t\t<TELL \".\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?CLOSE>\n\t\t<TELL \"is closing\">\n\t\t<ARTICLE <GET .TABLE 2>>\n\t\t<TELL \".\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?EXIT ,V?DISEMBARK>\n\t\t<TELL \"is trying to leave\">\n\t\t<ARTICLE <GET .TABLE 2>>\n\t\t<TELL \".\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?TAKE>\n\t\t<TELL \"is reaching for\">\n\t\t<ARTICLE <GET .TABLE 2>>\n\t\t<TELL \".\" CR>)\n\t       (<EQUAL? <GET .TABLE 1> ,V?DROP>\n\t\t<TELL \"is dropping\">\n\t\t<ARTICLE <GET .TABLE 2>>\n\t\t<TELL \".\" CR>)\n\t       (T\n\t\t<TELL \"is doing something.\" CR>)>>"
  },
  "LAMP-PSEUDO": {
   "name": "LAMP-PSEUDO",
   "file": "coal.zil",
   "line": 664,
   "endLine": 667,
   "source": "<ROUTINE LAMP-PSEUDO ()\n\t <COND (<VERB? TAKE>\n\t\t<PERFORM ,V?TAKE ,KEROSENE-LAMP>\n\t\t<RTRUE>)>>"
  },
  "DIAL-DOOR-F": {
   "name": "DIAL-DOOR-F",
   "file": "coal.zil",
   "line": 685,
   "endLine": 702,
   "source": "<ROUTINE DIAL-DOOR-F ()\n\t <COND (<AND <VERB? OPEN>\n\t\t     <NOT <FSET? ,DIAL-DOOR ,OPENBIT>>>\n\t\t<COND (,DIAL-OPEN\n\t\t       <FSET ,DIAL-DOOR ,OPENBIT>\n\t\t       <SETG SCORE <+ ,SCORE ,COAL-DOOR-POINT>>\n\t\t       <SETG COAL-DOOR-POINT 0>\n\t\t       <TELL \"The door opens easily.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The door won't budge.\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<PERFORM ,V?EXAMINE ,DIAL>\n\t\t<RTRUE>)\n\t       (<VERB? REZROV>\n\t\t<JIGS-UP\n\"The door swings open as a loud alarm sounds. Laser beams criss-cross the\nroom, glinting off the blades of the thousand flying daggers. A hundred\nwell-armed and vicious kobolds rush into the room, swinging battle axes.\">)>>"
  },
  "DIAL-F": {
   "name": "DIAL-F",
   "file": "coal.zil",
   "line": 715,
   "endLine": 735,
   "source": "<ROUTINE DIAL-F ()\n\t <COND (<VERB? EXAMINE READ>\n\t\t<TELL\n\"Set in the door is a large circular dial which can be set to any number\nup to 873. It is currently set to \" N ,CURRENT-SETTING \".\" CR>)\n\t       (<VERB? TURN>\n\t\t<COND (,FWEEPED\n\t\t       <BATTY>)\n\t\t      (<OR <NOT ,PRSI>\n\t\t\t   <NOT <EQUAL? ,PRSI ,INTNUM>>>\n\t\t       <TELL \"You must say what number to turn it to.\" CR>)\n\t\t      (<EQUAL? ,CURRENT-SETTING ,P-NUMBER>\n\t\t       <TELL\n\"The dial is already set to \" N ,CURRENT-SETTING \".\" CR>)\n\t\t      (T\n\t\t       <SETG CURRENT-SETTING ,P-NUMBER>\n\t\t       <TELL \"The dial is now set to \" N ,CURRENT-SETTING \".\">\n\t\t       <COND (<EQUAL? ,CURRENT-SETTING ,COMBO>\n\t\t\t      <TELL \" You hear a click from inside the door.\">\n\t\t\t      <SETG DIAL-OPEN T>)>\n\t\t       <CRLF>)>)>>"
  },
  "ROPE-F": {
   "name": "ROPE-F",
   "file": "coal.zil",
   "line": 758,
   "endLine": 791,
   "source": "<ROUTINE ROPE-F ()\n\t <COND (<AND <VERB? PUT>\n\t\t     <NOT <ACCESSIBLE? ,ROPE>>>\n\t\t<RFALSE>)\n\t       (<AND <VERB? TIE>\n\t\t     <EQUAL? ,PRSI ,BEAM>>\n\t\t<TELL \"The rope is \">\n\t\t<COND (,ROPE-TO-BEAM\n\t\t       <TELL \"already \">)>\n\t\t<TELL \"tied securely to the center of the beam.\" CR>\n\t\t<SETG ROPE-TO-BEAM T>)\n\t       (<AND <VERB? TIE>\n\t\t     <EQUAL? ,PRSI ,COAL-BIN>>\n\t\t<TELL \"The bin is too large.\" CR>)\n\t       (<AND <VERB? UNTIE>\n\t\t     ,ROPE-TO-BEAM>\n\t\t<SETG ROPE-TO-BEAM <>>\n\t\t<TELL \"The rope is untied.\" CR>)\n\t       (<VERB? CLIMB-DOWN>\n\t\t<COND (<AND <NOT ,ROPE-PLACED>\n\t\t\t    <NOT ,ROPE-IN-LOWER-CHUTE>>\n\t\t       <TELL\n\"It would be hard to climb down the rope in its current state.\" CR>)\n\t\t      (T\n\t\t       <DO-WALK ,P?DOWN>)>)\n\t       (<VERB? CLIMB-UP>\n\t\t<TELL \"Do you also charm snakes?\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (<OR ,ROPE-PLACED ,ROPE-IN-LOWER-CHUTE>\n\t\t       <TELL\n\"The rope is tied to the beam and hangs into the chute.\" CR>)\n\t\t      (,ROPE-TO-BEAM\n\t\t       <TELL\n\"It is tied to the center of the timber.\" CR>)>)>>"
  },
  "SHAFT-BOTTOM-F": {
   "name": "SHAFT-BOTTOM-F",
   "file": "coal.zil",
   "line": 808,
   "endLine": 812,
   "source": "<ROUTINE SHAFT-BOTTOM-F (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-ENTER>\n\t\t     <FSET? ,VARDIK-SCROLL ,TOUCHBIT>>\n\t\t<SETG BREATH-SHORTAGE 3>\n\t\t<I-BREATHE>)>>"
  },
  "SHAFT-PSEUDO": {
   "name": "SHAFT-PSEUDO",
   "file": "coal.zil",
   "line": 830,
   "endLine": 852,
   "source": "<ROUTINE SHAFT-PSEUDO ()\n\t <COND (<VERB? CLIMB-DOWN>\n\t\t<COND (<EQUAL? ,HERE ,SHAFT-TOP>\n\t\t       <DO-WALK ,P?DOWN>)\n\t\t      (T\n\t\t       <LOOK-AROUND-YOU>)>)\n\t       (<VERB? CLIMB-FOO CLIMB-UP>\n\t\t<COND (<EQUAL? ,HERE ,SHAFT-TOP>\n\t\t       <LOOK-AROUND-YOU>)\n\t\t      (T\n\t\t       <DO-WALK ,P?UP>)>)\n\t       (<AND <VERB? PUT-ON>\n\t\t     <EQUAL? ,PRSO ,BEAM>>\n\t\t<TELL \"The shaft is too wide.\" CR>)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,HERE ,SHAFT-TOP>>\n\t\t<COND (<AND <EQUAL? ,PRSO ,ROPE>\n\t\t\t    ,ROPE-TO-BEAM>\n\t\t       <TELL \"The rope now dangles into the shaft.\" CR>)\n\t\t      (T\n\t\t       <MOVE ,PRSO ,SHAFT-BOTTOM>\n\t\t       <TELL\n\"It disappears into the shaft. A moment later comes a distant thud.\" CR>)>)>>"
  },
  "BEAM-F": {
   "name": "BEAM-F",
   "file": "coal.zil",
   "line": 866,
   "endLine": 880,
   "source": "<ROUTINE BEAM-F ()\n\t <COND (<AND <VERB? PUT-ON>\n\t\t     <EQUAL? ,PRSI ,UPPER-CHUTE ,LOWER-CHUTE>>\n\t\t<MOVE ,BEAM ,HERE>\n\t\t<TELL\n\"The beam is now lying across the mouth of the chute.\" CR>)\n\t       (<AND <VERB? TAKE>\n\t\t     ,ROPE-PLACED>\n\t\t<TELL\n\"You'd have to take the rope out of the chute first.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (,ROPE-PLACED\n\t\t       <TELL \"A rope hangs from the beam, into the chute.\" CR>)\n\t\t      (,ROPE-TO-BEAM\n\t\t       <TELL \"A rope is tied to the beam.\" CR>)>)>>"
  },
  "TOP-OF-CHUTE-F": {
   "name": "TOP-OF-CHUTE-F",
   "file": "coal.zil",
   "line": 937,
   "endLine": 945,
   "source": "<ROUTINE TOP-OF-CHUTE-F (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-END>\n\t\t     <NOT <IN? ,TROGLODYTE ,HERE>>\n\t\t     <OR ,LIT ,BLORTED>\n\t\t     <PROB 30>>\n\t\t<MOVE ,TROGLODYTE ,HERE>\n\t\t<ENABLE <QUEUE I-TROGLODYTE 2>>\n\t\t<TELL CR\n\"A troglodyte trundles in and dumps a load of coal into the chute.\" CR>)>>"
  },
  "I-TROGLODYTE": {
   "name": "I-TROGLODYTE",
   "file": "coal.zil",
   "line": 947,
   "endLine": 953,
   "source": "<ROUTINE I-TROGLODYTE ()\n\t <MOVE ,TROGLODYTE ,DIAL>\n\t <COND (<EQUAL? ,HERE ,TOP-OF-CHUTE>\n\t\t<SETG TROG-FOLLOW T>\n\t\t<ENABLE <QUEUE I-TROG-UNFOLLOW 1>>\n\t\t<TELL CR\n\"The troglodyte trundles off into the coal mine.\" CR>)>>"
  },
  "I-TROG-UNFOLLOW": {
   "name": "I-TROG-UNFOLLOW",
   "file": "coal.zil",
   "line": 957,
   "endLine": 959,
   "source": "<ROUTINE I-TROG-UNFOLLOW ()\n\t <SETG TROG-FOLLOW <>>\n\t <RFALSE>>"
  },
  "TROGLODYTE-F": {
   "name": "TROGLODYTE-F",
   "file": "coal.zil",
   "line": 968,
   "endLine": 981,
   "source": "<ROUTINE TROGLODYTE-F ()\n\t <COND (<EQUAL? ,WINNER ,TROGLODYTE>\n\t\t<TELL \"The troglodyte ignores you.\" CR>\n\t\t<STOP>)\n\t       (<AND <VERB? FOLLOW>\n\t\t     ,TROG-FOLLOW>\n\t\t<TELL \"You didn't notice which passage it took.\" CR>)\n\t       (<VERB? YOMIN>\n\t\t<TELL\n\"The troglodyte is worried about filling his coal quotas.\" CR>)\n\t       (<VERB? RESEARCH>\n\t\t<TELL\n\"Semi-intelligent subterranean beasts frequently used to dig and haul\ncoal.\" CR>)>>"
  },
  "CHUTE-EXIT-F": {
   "name": "CHUTE-EXIT-F",
   "file": "coal.zil",
   "line": 983,
   "endLine": 1010,
   "source": "<ROUTINE CHUTE-EXIT-F ()\n\t <COND (,ROPE-PLACED\n\t\t<TELL\n\"You climb carefully down the rope, which is slippery with coal dust, \">\n\t\t<COND (<G? ,AWAKE 0>\n\t\t       <TELL\n\"but because of your fatigue you lose your grip.\">\n\t\t       <ORANGE-FLASH>\n\t\t       <CRLF> <CRLF>\n\t\t       ,COAL-BIN-ROOM)\n\t\t      (<NOT <NOTHING-HELD?>>\n\t\t       <TELL\n\"but because of your load you are unable to maintain your grip.\">\n\t\t       <ORANGE-FLASH>\n\t\t       <CRLF> <CRLF>\n\t\t       ,COAL-BIN-ROOM)\n\t\t      (T\n\t\t       <TELL\n\"and soon reach a small opening off the chute. You clamber inside...\" CR CR>\n\t\t       <SETG SCORE <+ ,SCORE 20>>\n\t\t       <FCLEAR ,VARDIK-SPELL ,INVISIBLE>\n\t\t       ,SLANTED-ROOM)>)\n\t       (T\n\t\t<ROPE-BEAM-CHECK T>\n\t\t<TELL \"Wheee!!! \">\n\t\t<ORANGE-FLASH>\n\t\t<TELL \" You land beside an enormous bin of coal.\" CR CR>\n\t\t,COAL-BIN-ROOM)>>"
  },
  "ORANGE-FLASH": {
   "name": "ORANGE-FLASH",
   "file": "coal.zil",
   "line": 1012,
   "endLine": 1020,
   "source": "<ROUTINE ORANGE-FLASH ()\n\t <TELL \" As you \">\n\t <COND (,FLYING\n\t\t<TELL \"float\">)\n\t       (T\n\t\t<TELL \"whiz\">)>\n\t <TELL\n\" down the chute, you notice a flash of orange light spilling\nfrom an opening onto the chute.\">>"
  },
  "SLANTED-ROOM-F": {
   "name": "SLANTED-ROOM-F",
   "file": "coal.zil",
   "line": 1036,
   "endLine": 1038,
   "source": "<ROUTINE SLANTED-ROOM-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<PUT ,VEZZAS 6 0>)>>"
  },
  "SLANTED-ROOM-EXIT-F": {
   "name": "SLANTED-ROOM-EXIT-F",
   "file": "coal.zil",
   "line": 1040,
   "endLine": 1051,
   "source": "<ROUTINE SLANTED-ROOM-EXIT-F ()\n\t <COND (<AND <NOT <IN? ,GOLMAC-SCROLL ,PROTAGONIST>>\n\t\t     <NOT ,GOLMACKED>>\n\t\t<POOF>\n\t\t<RFALSE>)\n\t       (<AND <IN? ,GOLMAC-SCROLL ,PROTAGONIST>\n\t\t     ,GOLMACKED>\n\t\t<POOF>\n\t\t<RFALSE>)\n\t       (T\n\t\t<TELL \"Wheeee!!!\" CR CR>\n\t\t,COAL-BIN-ROOM)>>"
  },
  "KEROSENE-LAMP-DESCFCN": {
   "name": "KEROSENE-LAMP-DESCFCN",
   "file": "coal.zil",
   "line": 1063,
   "endLine": 1069,
   "source": "<ROUTINE KEROSENE-LAMP-DESCFCN (RARG)\n\t <TELL\n\"Mounted securely to the wall is a kerosene lamp, filling the room\nwith a serene orange glow. \">\n\t <COND (<FSET? ,KEROSENE-LAMP ,OPENBIT>\n\t\t<TELL \"A small compartment at its base is open.\">)>\n\t <CRLF>>"
  },
  "KEROSENE-LAMP-F": {
   "name": "KEROSENE-LAMP-F",
   "file": "coal.zil",
   "line": 1071,
   "endLine": 1079,
   "source": "<ROUTINE KEROSENE-LAMP-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The lamp has a glass bowl where the flame burns. Below is a small metal\ndoor, perhaps a compartment for storing extra wicks or kerosene.\" CR>)\n\t       (<VERB? TAKE>\n\t\t<TELL \"It's mounted securely to the wall.\" CR>)\n\t       (<VERB? LAMP-OFF>\n\t\t<TELL \"You can't spare the breath to blow out the lamp.\" CR>)>>"
  },
  "CHUTE-ENTER-F": {
   "name": "CHUTE-ENTER-F",
   "file": "coal.zil",
   "line": 1123,
   "endLine": 1129,
   "source": "<ROUTINE CHUTE-ENTER-F ()\n\t <COND (,FLYING\n\t\t<TELL \"The chute is too narrow to fly up.\">)\n\t       (T\n\t\t<TELL \"The chute is too steep and slippery.\">)>\n\t <CRLF>\n\t <RFALSE>>"
  },
  "BOTTOM-TOP-OF-CHUTE": {
   "name": "BOTTOM-TOP-OF-CHUTE",
   "file": "coal.zil",
   "line": 1131,
   "endLine": 1137,
   "source": "<ROUTINE BOTTOM-TOP-OF-CHUTE (\"OPTIONAL\" (TOP <>))\n\t <TELL \"You're already at the \">\n\t <COND (.TOP\n\t\t<TELL \"top\">)\n\t       (T\n\t\t<TELL \"bottom\">)>\n\t <TELL \" of the chute.\" CR>>"
  },
  "COVE-F": {
   "name": "COVE-F",
   "file": "end.zil",
   "line": 29,
   "endLine": 59,
   "source": "<ROUTINE COVE-F (RARG \"AUX\" (X <>))\n\t <COND (<AND <EQUAL? .RARG ,M-ENTER>\n\t\t     <NOT <FSET? ,COVE ,TOUCHBIT>>>\n\t\t<COND (,BOOK-BELONGS-IN-LAGOON\n\t\t       <MOVE ,SPELL-BOOK ,LAGOON-FLOOR>)>\n\t\t<PUT ,VEZZAS 6 0>\n\t\t<SETG SCORE <+ ,SCORE 20>>\n\t\t<DISABLE <INT I-SUFFOCATE>>\n\t\t<DISABLE <INT I-YOUNGER-SELF>>\n\t\t<DISABLE <INT I-OLDER-SELF>>\n\t\t<COND (<AND ,GOLMACKED\n\t\t\t    <NOT ,COMBO-REVEALED>>\t\t       \n\t\t       <POOF>)\n\t\t      (<NOT ,GOLMACKED>\n\t\t       <COND (<HELD? ,ROPE>\n\t\t\t      <MOVE ,ROPE ,DIAL>\n\t\t\t      <SET X T>)>\n\t\t       <COND (<HELD? ,BEAM>\n\t\t\t      <MOVE ,BEAM ,DIAL>\n\t\t\t      <SET X T>)>\n\t\t       <COND (<HELD? ,VARDIK-SCROLL>\n\t\t\t      <MOVE ,VARDIK-SCROLL ,DIAL>\n\t\t\t      <SET X T>)>\n\t\t       <COND (<HELD? ,GOLMAC-SCROLL>\n\t\t\t      <MOVE ,GOLMAC-SCROLL ,DIAL>\n\t\t\t      <SET X T>)>\n\t\t       <COND (.X\n\t\t\t      <TELL\n\"As you slide down the chute, some of your possessions suddenly vanish! \">)>)>\n\t\t<TELL\n\"You fly out of the chute and land just at the edge of some water...\" CR CR>)>>"
  },
  "POOF": {
   "name": "POOF",
   "file": "end.zil",
   "line": 61,
   "endLine": 65,
   "source": "<ROUTINE POOF ()\n\t <SETG POOFED T>\n\t <TELL\n\"Suddenly, without the slightest fanfare, you cease to exist!\" CR>\n\t <FINISH>>"
  },
  "OCEAN-SHORE-F": {
   "name": "OCEAN-SHORE-F",
   "file": "end.zil",
   "line": 105,
   "endLine": 124,
   "source": "<ROUTINE OCEAN-SHORE-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \"You are \">\n\t\t<COND (,FLYING\n\t\t       <TELL \"floating above\">)\n\t\t      (T\n\t\t       <TELL \"standing on\">)>\n\t\t<TELL\n\" the western shore of the mighty Flathead Ocean. According to legends\nyou read at the University, the eastern shore of this ocean is a strange\nland of magical beings and priceless treasures. \">\n\t\t<COND (<EQUAL? ,HERE ,OCEAN-NORTH>\n\t\t       <TELL\n\"You could go north along the shore; the edge of a small cove lies to\nthe southwest.\">)\n\t\t      (T\n\t\t       <TELL\n\"The beach to the south is blocked by a tall cliff; a lagoon shore\nlies to the northwest.\">)>\n\t\t<CRLF>)>>"
  },
  "OCEAN-F": {
   "name": "OCEAN-F",
   "file": "end.zil",
   "line": 141,
   "endLine": 163,
   "source": "<ROUTINE OCEAN-F (\"AUX\" (X 0))\n\t <COND (<EQUAL? ,HERE ,GUN-EMPLACEMENT ,TURRET ,TOP-OF-FALLS>\n\t\t<TELL \"The ocean lies far below you.\" CR>)\n\t       (<VERB? PULVER>\n\t\t<SETG PERFORMING-SPELL T>\n\t\t<PERFORM ,V?PULVER ,LAGOON-OBJECT>\n\t\t<RTRUE>)\n\t       (<VERB? DRINK DRINK-FROM>\n\t\t<PERFORM ,V?DRINK ,WATER>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"It streches east as far as the eye can see.\" CR>)\n\t       (<VERB? RESEARCH>\n\t\t<TELL\n\"The Flathead Ocean, called the Great Sea by the ancients, has a very\nunusual feature -- its western shore basks in the sunlight while its\neastern shore lies far underground.\" CR>)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,OCEAN ,PRSI>>\n\t\t<MOVE ,PRSO ,DIAL>\n\t\t<SPLASH>)\n\t       (<VERB? THROUGH>\n\t\t<JIGS-UP \"Certain death.\">)>>"
  },
  "CLIFF-PSEUDO": {
   "name": "CLIFF-PSEUDO",
   "file": "end.zil",
   "line": 165,
   "endLine": 170,
   "source": "<ROUTINE CLIFF-PSEUDO ()\n\t <COND (<VERB? CLIMB-UP CLIMB-FOO>\n\t\t<COND (,FLYING\n\t\t       <TELL \"The cliff is too high to fly over.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The cliff is unclimbable.\" CR>)>)>>"
  },
  "LAGOON-OBJECT-F": {
   "name": "LAGOON-OBJECT-F",
   "file": "end.zil",
   "line": 180,
   "endLine": 201,
   "source": "<ROUTINE LAGOON-OBJECT-F ()\n\t <COND (<VERB? THROUGH>\n\t\t<COND (<EQUAL? ,HERE ,LAGOON ,LAGOON-FLOOR>\n\t\t       <LOOK-AROUND-YOU>)\n\t\t      (T\n\t\t       <GOTO ,LAGOON>)>)\n\t       (<AND <VERB? PUT>\n\t\t     <NOT <EQUAL? ,HERE ,LAGOON-FLOOR>>\n\t\t     <EQUAL? ,PRSI ,LAGOON-OBJECT>>\n\t\t<MOVE ,PRSO ,LAGOON-FLOOR>\n\t\t<COND (<OR <FSET? ,PRSO ,SCROLLBIT>\n\t\t\t   <EQUAL? ,PRSO ,SPELL-BOOK>>\n\t\t       <FSET ,PRSO ,MUNGBIT>)>\n\t\t<SPLASH>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"The water looks calm and hospitable.\" CR>)\n\t       (<VERB? DRINK DRINK-FROM>\n\t\t<PERFORM ,V?DRINK ,WATER>\n\t\t<RTRUE>)\n\t       (<VERB? PULVER>\n\t\t<TELL\n\"The water level seems to drop an inch or two, for a moment.\" CR>)>>"
  },
  "LAGOON-F": {
   "name": "LAGOON-F",
   "file": "end.zil",
   "line": 221,
   "endLine": 240,
   "source": "<ROUTINE LAGOON-F (RARG \"AUX\" X)\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<SET X <FIRST? ,PROTAGONIST>>\n\t\t<REPEAT ()\n\t\t        <COND (.X\n\t\t\t       <COND (<OR <FSET? .X ,SCROLLBIT>\n\t\t\t\t\t  <EQUAL? .X ,SPELL-BOOK>>\n\t\t\t\t      <FSET .X ,MUNGBIT>)>\n\t\t\t       <SET X <NEXT? .X>>)\n\t\t              (T\n\t\t\t       <RETURN>)>>)\n\t       (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \"You are \">\n\t\t<COND (,FLYING\n\t\t       <TELL \"flying over\">)\n\t\t      (T\n\t\t       <TELL \"swimming on\">)>\n\t\t<TELL\n\" the surface of a calm lagoon, whose sandy floor is visible below.\nA curved beach surrounds this inlet on its western side.\" CR>)>>"
  },
  "LAGOON-FLOOR-ENTER-F": {
   "name": "LAGOON-FLOOR-ENTER-F",
   "file": "end.zil",
   "line": 242,
   "endLine": 247,
   "source": "<ROUTINE LAGOON-FLOOR-ENTER-F ()\n\t <COND (,FLYING\n\t\t<WHILE-FLYING>\n\t\t<RFALSE>)\n\t       (T\n\t\t,LAGOON-FLOOR)>>"
  },
  "SAND-PSEUDO": {
   "name": "SAND-PSEUDO",
   "file": "end.zil",
   "line": 249,
   "endLine": 257,
   "source": "<ROUTINE SAND-PSEUDO ()\n\t <COND (<EQUAL? ,PSEUDO-OBJECT ,PRSO>\n\t\t<SETG PERFORMING-SPELL T>\n\t\t<PERFORM ,PRSA ,GROUND ,PRSI>\n\t\t<RTRUE>)\n\t       (T\n\t\t<SETG PERFORMING-SPELL T>\n\t\t<PERFORM ,PRSA ,PRSO ,GROUND>\n\t\t<RTRUE>)>>  "
  },
  "LAGOON-FLOOR-F": {
   "name": "LAGOON-FLOOR-F",
   "file": "end.zil",
   "line": 282,
   "endLine": 285,
   "source": "<ROUTINE LAGOON-FLOOR-F (RARG)\n      <COND (<EQUAL? .RARG ,M-ENTER>\n\t     <ENABLE <QUEUE I-DROWN -1>>\n\t     <RFALSE>)>>"
  },
  "I-DROWN": {
   "name": "I-DROWN",
   "file": "end.zil",
   "line": 287,
   "endLine": 306,
   "source": "<ROUTINE I-DROWN ()\n\t <COND (<EQUAL? ,HERE ,LAGOON-FLOOR>\n\t\t<COND (,VILSTUED\n\t\t       <RFALSE>)>\n\t\t<SETG UNDERWATER-COUNTER <+ ,UNDERWATER-COUNTER 1>>\n\t        <COND (<EQUAL? ,UNDERWATER-COUNTER 3>\n\t\t       <TELL CR\n\"You won't be able to hold your breath much longer.\" CR>)\n\t\t      (<EQUAL? ,UNDERWATER-COUNTER 4>\n\t\t       <TELL CR \"Better get some fresh air soon!\" CR>)\n\t\t      (<EQUAL? ,UNDERWATER-COUNTER 5>\n\t\t       <SETG UNDERWATER-COUNTER 0>\n\t\t       <CRLF>\n\t\t       <JIGS-UP \"You run out of air and drown.\">)\n\t\t      (T\n\t\t       <RFALSE>)>)\n\t       (T\n\t\t<SETG UNDERWATER-COUNTER 0>\n\t\t<DISABLE <INT I-DROWN>>\n\t\t<RFALSE>)>>"
  },
  "CORAL-PSEUDO": {
   "name": "CORAL-PSEUDO",
   "file": "end.zil",
   "line": 308,
   "endLine": 311,
   "source": "<ROUTINE CORAL-PSEUDO ()\n\t <COND (<AND <VERB? EXAMINE>\n\t\t     <IN? ,HERE ,SPENSEWEEDS>>\n\t\t<TELL \"The coral is covered by swaying spenseweeds.\" CR>)>>"
  },
  "SPENSEWEEDS-F": {
   "name": "SPENSEWEEDS-F",
   "file": "end.zil",
   "line": 324,
   "endLine": 334,
   "source": "<ROUTINE SPENSEWEEDS-F ()\n\t <COND (<VERB? MEEF>\n\t\t<MOVE ,SPENSEWEEDS ,DIAL>\n\t\t<MOVE ,CRATE ,HERE>\n\t\t<THIS-IS-IT ,CRATE>\n\t\t<TELL\n\"The spenseweeds wilt away, revealing a wooden crate labelled with\nblack lettering.\" CR>)\n\t       (<VERB? LOOK-UNDER>\n\t\t<TELL\n\"That's difficult -- they're well rooted in the coral.\" CR>)>>"
  },
  "CRATE-F": {
   "name": "CRATE-F",
   "file": "end.zil",
   "line": 346,
   "endLine": 367,
   "source": "<ROUTINE CRATE-F ()\n\t <COND (<AND <VERB? OPEN REZROV>\n\t\t     <NOT ,CRATE-POINT>>\n\t\t<SETG CRATE-POINT T>\n\t\t<SETG SCORE <+ ,SCORE 15>>\n\t\t<RFALSE>)\n\t       (<VERB? READ>\n                <FIXED-FONT-ON>\n\t\t<TELL\n\"Stencilled diagonally across the crate:|\n|\n    GRUE PROTECTION KIT|\n|\nBelow, in much smaller letters:|\n|\n    FROM:|\n    Frobozz Magic Grue Accessories Co.|\n|\n    TO:|\n    Aragain Brothers Circus|\n    Attn: Grue Trainer\" CR>\n\t\t<FIXED-FONT-OFF>)>>"
  },
  "BRASS-LANTERN-F": {
   "name": "BRASS-LANTERN-F",
   "file": "end.zil",
   "line": 388,
   "endLine": 397,
   "source": "<ROUTINE BRASS-LANTERN-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"It is a battery-powered lantern like those used by adventurers\nand explorers. It is currently \">\n\t\t<COND (<FSET? ,BRASS-LANTERN ,ONBIT>\n\t\t       <TELL \"on\">)\n\t\t      (T\n\t\t       <TELL \"off\">)>\n\t\t<TELL \".\" CR>)>>\t\t       "
  },
  "GRUE-REPELLENT-F": {
   "name": "GRUE-REPELLENT-F",
   "file": "end.zil",
   "line": 415,
   "endLine": 436,
   "source": "<ROUTINE GRUE-REPELLENT-F ()\n\t <COND (<VERB? SHAKE>\n\t\t<COND (,SPRAY-USED?\n\t\t       <TELL \"The can seems empty.\" CR>)\n\t\t      (T\n\t\t       <TELL \"There is a sloshing sound from inside.\" CR>)>)\n\t       (<AND <VERB? SPRAY PUT-ON>\n\t\t     <EQUAL? ,PRSO ,GRUE-REPELLENT>>\n\t\t<COND (,SPRAY-USED?\n\t\t       <TELL \"The repellent is all gone.\" CR>)\n\t\t      (<NOT ,PRSI>\n\t\t       <SETG SPRAY-USED? T>\n\t\t       <TELL\n\"The spray stinks amazingly for a few moments, then drifts away.\" CR>)\n\t\t      (T\n\t\t       <COND (<EQUAL? ,PRSI ,ME>\n\t\t\t      <ENABLE <QUEUE I-SPRAY 5>>\n\t\t\t      <SETG SPRAYED? T>)>\n\t\t       <SETG SPRAY-USED? T>\n\t\t       <TELL\n\"The spray smells like a mixture of old socks and burning rubber. If\nI were a grue I'd sure stay clear!\" CR>)>)>>"
  },
  "I-SPRAY": {
   "name": "I-SPRAY",
   "file": "end.zil",
   "line": 442,
   "endLine": 444,
   "source": "<ROUTINE I-SPRAY ()\n\t <SETG SPRAYED? <>>\n\t <TELL CR \"That horrible smell is much less pungent now.\" CR>>"
  },
  "MOUTH-OF-RIVER-F": {
   "name": "MOUTH-OF-RIVER-F",
   "file": "end.zil",
   "line": 462,
   "endLine": 486,
   "source": "<ROUTINE MOUTH-OF-RIVER-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"A mighty river spills into the ocean here. Looking up the river valley,\nyou see a tall waterfall. Atop a cliff, high above you, is the rampart\nof a fortress. A cave entrance \">\n\t\t<COND (<IN? ,VINES ,HERE>\n\t\t       <TELL\n\"at the base of the cliff to the west is blocked by writhing green vines\">)\n\t\t      (T\n\t\t       <TELL \"lies to the west\">)>\n\t\t<TELL \".\" CR>)\n\t       (<AND <EQUAL? .RARG ,M-END>\n\t\t     <IN? ,VINES ,HERE>\n\t\t     <PROB 15>>\n\t\t<CRLF>\n\t\t<TELL\n\"Suddenly you realize that, without really thinking about it, you were \">\n\t\t<COND (,FLYING\n\t\t       <TELL \"flying\">)\n\t\t      (T\n\t\t       <TELL \"walking\">)>\n\t\t<TELL\n\" toward the wriggling vines. As you stop, a feeling of annoyance\nseems to radiate from the plants.\" CR>)>>"
  },
  "VINES-F": {
   "name": "VINES-F",
   "file": "end.zil",
   "line": 496,
   "endLine": 506,
   "source": "<ROUTINE VINES-F ()\n\t <COND (<VERB? MEEF>\n\t\t<MOVE ,VINES ,DIAL>\n\t\t<TELL\n\"You can almost feel a wave of pain from the vines as they shrivel away.\" CR>)\n\t       (<VERB? ATTACK KILL>\n\t\t<JIGS-UP\n\"Your attack is somewhat quixotic as the vines wrap around and tear\nyou to pieces.\">)\n\t       (<VERB? THROUGH KICK BITE TAKE CLIMB-UP CLIMB-FOO PUSH MOVE RUB>\n\t\t<DO-WALK ,P?WEST>)>>"
  },
  "VINES-EXIT-F": {
   "name": "VINES-EXIT-F",
   "file": "end.zil",
   "line": 508,
   "endLine": 514,
   "source": "<ROUTINE VINES-EXIT-F ()\n\t <COND (<IN? ,VINES ,HERE>\n\t\t<JIGS-UP\n\"The vines encircle you and tear you limb from limb.\">\n\t\t<RFALSE>)\n\t       (T\n\t\t,GRUE-LAIR)>>"
  },
  "GRUE-LAIR-F": {
   "name": "GRUE-LAIR-F",
   "file": "end.zil",
   "line": 528,
   "endLine": 537,
   "source": "<ROUTINE GRUE-LAIR-F (RARG)\n\t <COND (<AND <NOT ,SPRAYED?>\n\t\t     <EQUAL? .RARG ,M-END>\n\t\t     <NOT <IN? ,GRUE-SUIT ,PROTAGONIST>>>\n\t\t<COND (<OR ,LIT ,BLORTED>\n\t\t       <JIGS-UP\n\"The grues lurk toward you! Your last sight is a hundred slavering fangs.\">)\n\t\t      (T\n\t\t       <JIGS-UP\n\"Suddenly, you are set upon by countless slavering fangs!\">)>)>>"
  },
  "MUTATED-GRUES-F": {
   "name": "MUTATED-GRUES-F",
   "file": "end.zil",
   "line": 547,
   "endLine": 554,
   "source": "<ROUTINE MUTATED-GRUES-F ()\n\t <COND (<VERB? FROTZ>\n\t\t<TELL\n\"One of the grues gives off a flash of light but, strangely, it doesn't seem\nto notice or care.\" CR>)\n\t       (<VERB? RESEARCH>\n\t\t<PERFORM ,V?RESEARCH ,GRUE>\n\t\t<RTRUE>)>>"
  },
  "MUTATED-GRUES-DESCFCN": {
   "name": "MUTATED-GRUES-DESCFCN",
   "file": "end.zil",
   "line": 556,
   "endLine": 574,
   "source": "<ROUTINE MUTATED-GRUES-DESCFCN (RARG)\n\t <COND (<OR ,LIT ,BLORTED>\n\t\t<COND (,SPRAYED?\n\t\t       <LIT-MESSAGE>\n\t\t       <TELL\n\"They stagger about the room, covering their noses and making horrid\ngurgling noises.\" CR>)\n\t\t      (<IN? ,GRUE-SUIT ,PROTAGONIST>\n\t\t       <LIT-MESSAGE>\n\t\t       <TELL\n\"They seem to be ignoring you, aside from a few suspicious gurgles\nin your direction.\" CR>)\n\t\t      (T\n\t\t       <LIT-MESSAGE>\n\t\t       <TELL\n\"Baring tremendous fangs, they form a circle around you...\" CR>)>)\n\t       (T\n\t\t<TELL\n\"There are terrifying gurgling noises from the darkness!\" CR>)>>"
  },
  "LIT-MESSAGE": {
   "name": "LIT-MESSAGE",
   "file": "end.zil",
   "line": 576,
   "endLine": 581,
   "source": "<ROUTINE LIT-MESSAGE ()\n\t <TELL \"A pack of grues fills the room! \">\n\t <COND (,LIT\n\t\t<TELL\n\"The grues, contrary to all conventional wisdom, aren't bothered by your\nlight in the least. They must be mutated grues, no longer fearing light! \">)>>"
  },
  "MAMMOTH-CAVERN-F": {
   "name": "MAMMOTH-CAVERN-F",
   "file": "end.zil",
   "line": 604,
   "endLine": 608,
   "source": "<ROUTINE MAMMOTH-CAVERN-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<SETG SCORE <+ ,SCORE ,CAVERN-POINT>>\n\t\t<SETG CAVERN-POINT 0>\n\t\t<PUT ,VEZZAS 7 0>)>>"
  },
  "MACHINERY-F": {
   "name": "MACHINERY-F",
   "file": "end.zil",
   "line": 620,
   "endLine": 628,
   "source": "<ROUTINE MACHINERY-F ()\n\t <COND (<VERB? MUNG LAMP-ON>\n\t\t<JIGS-UP\n\"A field of energy leaps forth, reducing you to a pile of smoldering ash.\">)\n\t       (<VERB? EXAMINE READ>\n\t\t<TELL\n\"You notice, on one machine, a tiny plaque which reads:|\n|\nFROBOZZ MAGIC MUTATED GRUE BREEDER CO.\" CR>)>>"
  },
  "CHAMBER-OF-LIVING-DEATH-F": {
   "name": "CHAMBER-OF-LIVING-DEATH-F",
   "file": "end.zil",
   "line": 641,
   "endLine": 654,
   "source": "<ROUTINE CHAMBER-OF-LIVING-DEATH-F (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-BEG>\n\t\t     <NOT <VERB? QUIT SAVE VERSION>>\n\t\t     <NOT <VERB? RESTORE RESTART ;AGAIN>>\n\t\t     <NOT <VERB? BRIEF VERBOSE SUPER-BRIEF>>\n\t\t     <NOT <VERB? SCRIPT UNSCRIPT>>>\n\t\t<AGONY>\n\t\t<RTRUE>)\n\t       (<EQUAL? .RARG ,M-END>\n\t\t<TELL\n\"Hideous parasites descend upon you and tear the flesh from your bones,\ngnaw the eyes from your sockets, and feast upon your very brain tissue.\nAmazingly, you do not die, and your body regenerates itself as you await\nthe next attack...\" CR>)>>"
  },
  "PARASITES-PSEUDO": {
   "name": "PARASITES-PSEUDO",
   "file": "end.zil",
   "line": 656,
   "endLine": 657,
   "source": "<ROUTINE PARASITES-PSEUDO ()\n\t <RFALSE>>"
  },
  "HALL-OF-ETERNAL-DEATH-F": {
   "name": "HALL-OF-ETERNAL-DEATH-F",
   "file": "end.zil",
   "line": 669,
   "endLine": 682,
   "source": "<ROUTINE HALL-OF-ETERNAL-DEATH-F (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-BEG>\n\t\t     <NOT <VERB? QUIT SAVE VERSION>>\n\t\t     <NOT <VERB? RESTORE RESTART ;AGAIN>>\n\t\t     <NOT <VERB? BRIEF VERBOSE SUPER-BRIEF>>\n\t\t     <NOT <VERB? SCRIPT UNSCRIPT>>>\n\t\t<AGONY>\n\t\t<RTRUE>)\n\t       (<EQUAL? .RARG ,M-END>\n\t\t<TELL\n\"Disembodied forces suck the very thoughts from your mind, savoring\neach moment and growing stronger. Every second is an agonizing torment,\nas though thousands of raging fires were exploding in your skull,\nfilling you with a pain greater than you could ever imagine.\" CR>)>>"
  },
  "FORCE-PSEUDO": {
   "name": "FORCE-PSEUDO",
   "file": "end.zil",
   "line": 684,
   "endLine": 685,
   "source": "<ROUTINE FORCE-PSEUDO ()\n\t <RFALSE>>"
  },
  "AGONY": {
   "name": "AGONY",
   "file": "end.zil",
   "line": 687,
   "endLine": 689,
   "source": "<ROUTINE AGONY ()\n\t<TELL\n\"Your agony is too great to concentrate on such an action.\" CR>>"
  },
  "BLACK-DOOR-F": {
   "name": "BLACK-DOOR-F",
   "file": "end.zil",
   "line": 720,
   "endLine": 730,
   "source": "<ROUTINE BLACK-DOOR-F ()\n\t <COND (<VERB? OPEN REZROV>\n\t\t<TELL\n\"As the door opens, hundreds of slime-covered tentacles stream\nout and drag you across the threshold...\" CR CR>\n\t\t<ROB ,PROTAGONIST>\n\t\t<DISABLE <INT I-TIRED>>\n\t\t<DISABLE <INT I-THIRST>>\n\t\t<DISABLE <INT I-HUNGER>>\n\t\t<WEAR-OFF-SPELLS>\n\t\t<GOTO ,CHAMBER-OF-LIVING-DEATH>)>>"
  },
  "SILVER-DOOR-F": {
   "name": "SILVER-DOOR-F",
   "file": "end.zil",
   "line": 740,
   "endLine": 750,
   "source": "<ROUTINE SILVER-DOOR-F ()\n\t <COND (<VERB? OPEN REZROV>\n\t\t<TELL\n\"The door blows open, knocking you to the ground. You are pulled\nthrough the open doorway by an unseen force...\" CR CR>\n\t\t<ROB ,PROTAGONIST>\n\t\t<DISABLE <INT I-TIRED>>\n\t\t<DISABLE <INT I-HUNGER>>\n\t\t<DISABLE <INT I-THIRST>>\n\t\t<WEAR-OFF-SPELLS>\n\t\t<GOTO ,HALL-OF-ETERNAL-PAIN>)>>"
  },
  "WHITE-DOOR-F": {
   "name": "WHITE-DOOR-F",
   "file": "end.zil",
   "line": 762,
   "endLine": 773,
   "source": "<ROUTINE WHITE-DOOR-F ()\n\t <COND (<VERB? OPEN REZROV>\n\t\t<COND (<EQUAL? ,HERE ,BELBOZ-HIDEOUT>\n\t\t       <DO-WALK ,P?EAST>\n\t\t       <RTRUE>)>\n\t\t<SETG SCORE <+ ,SCORE ,WHITE-DOOR-SCORE>>\n\t\t<SETG WHITE-DOOR-SCORE 0>\n\t\t<TELL\n\"The door creaks slowly open. Within, you see someone lying as though\nasleep. You feel yourself drawn into the room...\" CR CR>\n\t\t<ENABLE <QUEUE I-BELBOZ-AWAKES 8>>\n\t\t<GOTO ,BELBOZ-HIDEOUT>)>>"
  },
  "I-UNVARDIK": {
   "name": "I-UNVARDIK",
   "file": "end.zil",
   "line": 777,
   "endLine": 781,
   "source": "<ROUTINE I-UNVARDIK ()\n\t <SETG VARDIKED <>>\n\t <TELL CR\n\"Your head feels numb for a moment, and your mind feels suddenly open and\nunprotected.\" CR>>"
  },
  "KILL-BELBOZ": {
   "name": "KILL-BELBOZ",
   "file": "end.zil",
   "line": 787,
   "endLine": 801,
   "source": "<ROUTINE KILL-BELBOZ ()\n\t <COND (,BELBOZ-GASPARED\n\t\t<SETG BELBOZ-GASPARED <>>\n\t\t<TELL\n\"As you stab Belboz, an apparition rises from his body. Floating above him\nlike a cloud of fog, it howls with laughter. A moment later, gaspar begins\nto heal the wounds, and the spirit flows back into the body.\" CR>\n\t\t<CRLF>\n\t\t<I-BELBOZ-AWAKES>)\n\t       (T\n\t\t<TELL\n\"You stab the knife time and again into Belboz, who writhes in pain,\neyes bulging outward. Sickened and dizzy, you stagger back.\" CR CR>\n\t        <SETG BELBOZ-DEAD T>\n\t        <SWANZO-BELBOZ>)>>"
  },
  "SWANZO-BELBOZ": {
   "name": "SWANZO-BELBOZ",
   "file": "end.zil",
   "line": 803,
   "endLine": 872,
   "source": "<ROUTINE SWANZO-BELBOZ ()\n\t <TELL \"A wispy translucent shape rises from the \">\n\t <COND (,BELBOZ-DEAD\n\t\t<TELL \"corpse\">)\n\t       (T\n\t\t<TELL \"body\">)>\n\t <TELL\n\" of Belboz. It speaks in a voice so deep that your whole body seems to\nhear it. \\\"Foolish Charlatan! I am forced to flee that weak, old body -- I\nshall take your own, instead! Already I have sucked all knowledge, all\nsecrets from that ancient Enchanter. Now begins an epoch of evil transcending\neven your worst nightmares; a reign of terror that will last a thousand\nthousand years!\\\" The shape blows toward you on a cold wind.\" CR CR>\n\t <COND (,VARDIKED\n\t\t<TELL\n\"Jeearr surrounds you like a cloud and begins to contract. Suddenly, it\nstrikes your invisible protection and recoils as if burned. \\\"No!\\\" it\ncries. \\\"Such a guileless Enchanter developing a mind shield?\\\" The cloud\nis thinner, the voice fainter. \\\"It cannot be! I cannot survive ... without\na host.\\\" The demon roils in agony, then thins and dissipates. There is a\nfinal scream of pain, then silence.\" CR CR>\n\t\t<COND (,BELBOZ-DEAD\n\t\t       <TELL\n\"Jeearr is vanquished; the kingdom is saved. But you - you are stranded in\na land unknown, and your closest friend, the greatest Enchanter of his\nage, lies dead by your own hand. Kneeling by his blood-soaked corpse, you\nbeg for another chance...\" CR>\n\t\t       <FINISH>)\n\t\t      (T\n\t\t       <TELL\n\"Belboz moans softly, and begins stirring. He sees you and rises, instantly\nalert. After posing a few well-chosen questions, he casts a brief but\nunfamiliar spell.|\n|\nAn instant later, \">\n\t\t       <COND (<IN? ,GRUE-SUIT ,PROTAGONIST>\n\t\t\t      <TELL \"your grue suit has vanished and \">)>\n\t\t       <TELL\n\"you are standing in the Chamber of the Circle. The Circle of Enchanters\nis assembled. Belboz speaks. \\\"Once again, this young Enchanter has done\na matchless service to the Guild and to the entire kingdom, displaying\nresourcefulness and imagination worthy of the greatest of Enchanters. I\ngrow old, and must soon step down as Head of the Circle. But let it be\nknown that a successor has been found.\\\"\" CR CR>\n\t\t       <SETG SCORE <+ ,SCORE 25>>\n\t\t       <SETG HERE ,CHAMBER-OF-THE-CIRCLE>\n\t\t       <V-SCORE>\n\t\t       <USL>\n\t\t       <TELL CR\n\"Here ends the second chapter of the Enchanter saga, in which,\nby virtue of your skills, you have been appointed as the next\nleader of the Circle of Enchanters. The final adventure awaits\nyou as the Enchanter series concludes.\" CR>\n\t\t       <COND (<NOT <IN? ,MORGIA-PLANT ,BELBOZ-QUARTERS>>\n\t\t\t      <TELL CR\n\"You hear a distant bellow. \\\"What happened to my morgia plant?\\\"\" CR>)>\n\t\t       <FINISH T>)>)\n\t       (T\n\t\t<TELL\n\"You feel an overwhelming sense of oppression as the demon seizes control\nof your mind and body. The monster reaches into the recesses of your mind,\nadding your hard-earned magic powers to its own. As it settles comfortably\ninto your skull, the demon grants you a vision of the future. You see the\nenslaved people of the land toiling to erect great idols to Jeearr. Parents\noffer up their own children upon these altars, as the rivers of the land fill\nwith blood. And YOU embody Jeearr; you are cursed by ten thousand generations\nof victims; your face adorns the idols. And worst of all, you remain awake\nand aware, a witness to horror, never sleeping, and never, ever to escape.\" CR>\n\t\t<SETG SCORE -99>\n\t\t<FINISH>)>>"
  },
  "I-BELBOZ-AWAKES": {
   "name": "I-BELBOZ-AWAKES",
   "file": "end.zil",
   "line": 874,
   "endLine": 888,
   "source": "<ROUTINE I-BELBOZ-AWAKES ()\n\t <COND (<NOT <EQUAL? ,HERE ,BELBOZ-HIDEOUT>>\n\t\t<RFALSE>)>\n\t <TELL CR\n\"Suddenly, Belboz's eyes flicker and he leaps to his feet. His face is\nunrecognizable, a twisted mask of hatred. \\\"Meddlesome Enchanter! I should\nhave killed you all before I left! But better late than never...\\\" Lightning\nbolts flash toward you from his fingers, but rather than dying, you find\nyourself in the...\" CR CR>\n\t <ROB ,PROTAGONIST>\n\t <DISABLE <INT I-TIRED>>\n\t <DISABLE <INT I-THIRST>>\n\t <DISABLE <INT I-HUNGER>>\n\t <WEAR-OFF-SPELLS>\n\t <GOTO ,HALL-OF-ETERNAL-PAIN>>"
  },
  "FORT-F": {
   "name": "FORT-F",
   "file": "fort.zil",
   "line": 13,
   "endLine": 32,
   "source": "<ROUTINE FORT-F ()\n\t <COND (<VERB? THROUGH>\n\t\t<COND (<OR <EQUAL? ,HERE ,PARADE-GROUND ,GUN-EMPLACEMENT>\n\t\t\t   <EQUAL? ,HERE ,BARRACKS ,ARMORY>>\n\t\t       <LOOK-AROUND-YOU>)\n\t\t      (<EQUAL? ,HERE ,FORT-ENTRANCE>\n\t\t       <DO-WALK ,P?EAST>)\n\t\t      (T\n\t\t       <CANT-ENTER ,FORT>)>)\n\t       (<VERB? DROP EXIT>\n\t\t<COND (<EQUAL? ,HERE ,PARADE-GROUND>\n\t\t       <DO-WALK ,P?WEST>)\n\t\t      (<EQUAL? ,HERE ,GUN-EMPLACEMENT ,BARRACKS ,ARMORY>\n\t\t       <CANT-ENTER ,FORT T>)\n\t\t      (T\n\t\t       <LOOK-AROUND-YOU>)>)\n\t       (<VERB? RESEARCH>\n\t\t<TELL\n\"Fort Griffspotter once guarded the lands near Egreth Castle from\nattack by sea.\" CR>)>>"
  },
  "PARADE-GROUND-F": {
   "name": "PARADE-GROUND-F",
   "file": "fort.zil",
   "line": 61,
   "endLine": 68,
   "source": "<ROUTINE PARADE-GROUND-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<PUT ,VEZZAS 2 0>\n\t\t<RFALSE>)\n\t       (<AND <EQUAL? .RARG ,M-END>\n\t\t     ,SLEEPING>\n\t        <DISABLE <INT I-WAKE-UP>>\n\t\t<I-WAKE-UP>)>>"
  },
  "ROPE-PSEUDO": {
   "name": "ROPE-PSEUDO",
   "file": "fort.zil",
   "line": 70,
   "endLine": 76,
   "source": "<ROUTINE ROPE-PSEUDO ()\n\t <COND (<VERB? MOVE>\n\t\t<PERFORM ,V?LOWER ,FLAG>\n\t\t<RTRUE>)\n\t       (<VERB? TAKE>\n\t\t<TELL\n\"The rope is attached to the pole and can't possibly be removed.\" CR>)>>"
  },
  "FLAG-POLE-F": {
   "name": "FLAG-POLE-F",
   "file": "fort.zil",
   "line": 86,
   "endLine": 91,
   "source": "<ROUTINE FLAG-POLE-F ()\n\t <COND (<VERB? CLIMB-ON CLIMB-FOO CLIMB-UP>\n\t\t<TELL\n\"That sort of thing went out of fashion years ago.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"A rope runs up the side of the pole.\" CR>)>>"
  },
  "FLAG-DESCFCN": {
   "name": "FLAG-DESCFCN",
   "file": "fort.zil",
   "line": 107,
   "endLine": 114,
   "source": "<ROUTINE FLAG-DESCFCN (RARG)\n\t <COND (,FLAG-RAISED\n\t\t<TELL\n\"A tattered flag, apparently that of ancient Quendor, still flies atop\na mighty flagpole in the center of the field.\" CR>)\n\t       (T\n\t\t<TELL\n\"A flag displaying the brown and gold of ancient Quendor is lying here.\" CR>)>>"
  },
  "FLAG-F": {
   "name": "FLAG-F",
   "file": "fort.zil",
   "line": 116,
   "endLine": 167,
   "source": "<ROUTINE FLAG-F ()\n\t <COND (<VERB? FLY>\n\t\t<PERFORM ,V?RAISE ,FLAG>\n\t\t<RTRUE>)>\n\t <COND (,FLAG-RAISED\n\t\t<COND (<VERB? RAISE>\n\t\t       <TELL \"It's already at the top of the pole.\" CR>)\n\t\t      (<VERB? LOWER>\n\t\t       <SETG FLAG-RAISED <>>\n\t\t       <FCLEAR ,FLAG ,TRYTAKEBIT>\n\t\t       <FCLEAR ,FLAG-POLE ,NDESCBIT>\n\t\t       <TELL \"The flag is lowered to the ground.\" CR>)\n\t\t      (<VERB? EXAMINE>\n\t\t       <TELL\n\"You can't see it very well from here -- the flagpole is very tall.\" CR>)\n\t\t      (<VERB? SHAKE WAVE TAKE MOVE RUB EAT DRINK LOOK-INSIDE>\n\t\t       <TELL \"The flag is \">\n\t\t       <COND (,FLYING\n\t\t\t      <TELL \"still \">)>\n\t\t       <TELL\n\"way above you at the top of the flagpole!\" CR>)\n\t\t      (<VERB? LOOK-UNDER>\n\t\t       <PERFORM ,V?EXAMINE ,FLAG-POLE>\n\t\t       <RTRUE>)>)\n\t       (T\n\t\t<COND (<VERB? RAISE>\n\t\t       <COND (<EQUAL? ,HERE ,PARADE-GROUND>\n\t\t\t      <FSET ,FLAG ,TRYTAKEBIT>\n\t\t\t      <MOVE ,FLAG ,HERE>\n\t\t\t      <FSET ,FLAG-POLE ,NDESCBIT>\n\t\t\t      <SETG FLAG-RAISED T>\n\t\t\t      <TELL\n\"The flag is raised to the top of the pole.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"There's no flagpole in sight.\" CR>)>)\n\t\t      (<VERB? LOWER>\n\t\t       <TELL \"You've already done that.\" CR>)\n\t\t      (<VERB? WAVE>\n\t\t       <TELL \"How patriotic!\" CR>)\n\t\t      (<VERB? WEAR>\n\t\t       <TELL \"Who do you think you are, Abbie Hoffman?\" CR>)\n\t\t      (<AND <VERB? EXAMINE LOOK-INSIDE SHAKE RUB SEARCH>\n\t\t\t    <NOT ,FOOBLE-FOUND>>\n\t\t       <SETG FOOBLE-FOUND T>\n\t\t       <MOVE ,FOOBLE-VIAL ,HERE>\n\t\t       <THIS-IS-IT ,FOOBLE-VIAL>\n\t\t       <TELL\n\"As you fiddle with the flag, an aqua vial drops from a hidden pocket\nand falls to the ground.\" CR>)\n\t\t      (<VERB? EXAMINE>\n\t\t       <TELL\n\"The tattered flag displays the brown and gold of ancient Quendor.\" CR>)>)>>"
  },
  "FOOBLE-VIAL-F": {
   "name": "FOOBLE-VIAL-F",
   "file": "fort.zil",
   "line": 179,
   "endLine": 186,
   "source": "<ROUTINE FOOBLE-VIAL-F ()\n\t <COND (<VERB? READ>\n\t\t<FIXED-FONT-ON>\n\t\t<TELL\n\"|\n        \\\"FOOBLE POTION|\n(increase muscular coordination)\\\"\" CR>\n\t\t<FIXED-FONT-OFF>)>>"
  },
  "FOOBLE-POTION-F": {
   "name": "FOOBLE-POTION-F",
   "file": "fort.zil",
   "line": 196,
   "endLine": 218,
   "source": "<ROUTINE FOOBLE-POTION-F ()\n\t <COND (<AND <VERB? EAT DRINK>\n\t\t     <NOT <HELD? ,FOOBLE-VIAL>>>\n\t\t<POTION-POUR ,FOOBLE-VIAL>)\n\t       (<VERB? RESEARCH>\n\t\t<READ-ABOUT-POTIONS 2>)\n\t       (<VERB? EAT DRINK>\n\t\t<MOVE ,FOOBLE-POTION ,DIAL>\n\t\t<COND (,UNDER-INFLUENCE\n\t\t       <TWO-POTIONS>\n\t\t       <RTRUE>)>\n\t\t<SETG UNDER-INFLUENCE ,FOOBLE-POTION>\n\t\t<ENABLE <QUEUE I-UNFOOBLE 17>>\n\t\t<SETG FOOBLED T>\n\t\t<TELL\n\"The aqua potion tasted like lime jelly, and sent vibrations through\nyour muscles.\" CR>)\n\t       (<VERB? DROP>\n\t\t<PERFORM ,V?POUR ,PRSO ,PRSI>\n\t\t<RTRUE>)\n\t       (<AND <VERB? POUR>\n\t\t     <EQUAL? ,PRSO ,FOOBLE-POTION>>\n\t\t<POTION-POUR ,FOOBLE-VIAL>)>>"
  },
  "I-UNFOOBLE": {
   "name": "I-UNFOOBLE",
   "file": "fort.zil",
   "line": 222,
   "endLine": 226,
   "source": "<ROUTINE I-UNFOOBLE ()\n\t <SETG FOOBLED <>>\n\t <COND (<EQUAL? ,UNDER-INFLUENCE ,FOOBLE-POTION>\n\t\t<SETG UNDER-INFLUENCE <>>)>\n\t <TELL CR \"Your muscles feel limp for a moment.\" CR>>"
  },
  "BARRACKS-PSEUDO": {
   "name": "BARRACKS-PSEUDO",
   "file": "fort.zil",
   "line": 251,
   "endLine": 254,
   "source": "<ROUTINE BARRACKS-PSEUDO ()\n\t <SETG PERFORMING-SPELL T>\n\t <PERFORM ,PRSA ,GLOBAL-ROOM ,PRSI>\n\t <RTRUE>>"
  },
  "EMPLACEMENT-EXIT-F": {
   "name": "EMPLACEMENT-EXIT-F",
   "file": "fort.zil",
   "line": 271,
   "endLine": 281,
   "source": "<ROUTINE EMPLACEMENT-EXIT-F ()\n\t <COND (,FLYING\n\t\t<TELL \"The updrafts from the \">\n\t\t<COND (<EQUAL? ,PRSO ,P?NORTH>\n\t\t       <TELL \"river\">)\n\t\t      (T\n\t\t       <TELL \"ocean\">)>)\n\t       (T\n\t\t<TELL \"The plunge\">)>\n\t <TELL \" would kill you.\" CR>\n\t <RFALSE>>"
  },
  "CANNON-F": {
   "name": "CANNON-F",
   "file": "fort.zil",
   "line": 296,
   "endLine": 339,
   "source": "<ROUTINE CANNON-F ()\n\t <COND (<VERB? SHOOT LAMP-ON>\n\t\t<TELL \"This cannon probably hasn't worked for centuries!\" CR>)\n\t       (<VERB? CLOSE>\n\t\t<V-DEFLATE>)\n\t       (<AND <VERB? REACH-IN SEARCH>\n\t\t     <FSET? ,YIPPLES ,INVISIBLE>>\n\t\t<SETG BITTEN T>\n\t\t<ENABLE <QUEUE I-BITE-HEAL 20>>\n\t\t<TELL \"Something bites your hand!\" CR>)\n\t       (<AND <VERB? LOOK-INSIDE>\n\t\t     <FSET? ,YIPPLES ,INVISIBLE>>\n\t\t<FCLEAR ,YIPPLES ,INVISIBLE>\n\t\t<TELL\n\"Lying at the bottom of the barrel is a pile of identical scrolls!\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"The barrel is wide enough to hold the hugest of cannonballs, but it\nisn't very deep.\" CR>)\n\t       (<AND <VERB? REACH-IN SEARCH>\n\t\t     <IN? ,YIPPLES ,CANNON>>\n\t\t<PERFORM ,V?TAKE ,YIPPLES>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUT>\n\t\t     <IN? ,YIPPLES ,CANNON>\n\t\t     <EQUAL? ,BAT-GUANO ,PRSO>>\n\t\t<MOVE ,YIPPLES ,DIAL>\n\t\t<MOVE ,YONK-SCROLL ,CANNON>\n\t\t<THIS-IS-IT ,YONK-SCROLL>\n\t\t<MOVE ,BAT-GUANO ,CANNON>\n\t\t<TELL\n\"When you drop the guano into the barrel, \">\n\t\t<COND (<FSET? ,YIPPLES ,INVISIBLE>\n\t\t       <TELL\n\"dozens of scrolls pour out and literally run off\">)\n\t\t      (T\n\t\t       <TELL\n\"the scrolls sprout feet and spill out of the cannon, dashing away\">)>\n\t\t<TELL \" in every direction! A single ordinary scroll\nis left sitting at the bottom of the barrel.\" CR>\n\t\t<FCLEAR ,YIPPLES ,INVISIBLE>)\n\t       (<AND <VERB? THROUGH>\n\t\t     ,FWEEPED>\n\t\t<TELL \"Your wingspan is too large.\" CR>)>>"
  },
  "YIPPLES-F": {
   "name": "YIPPLES-F",
   "file": "fort.zil",
   "line": 349,
   "endLine": 356,
   "source": "<ROUTINE YIPPLES-F ()\n\t <COND (<VERB? TAKE>\n\t\t<SETG BITTEN T>\n\t\t<ENABLE <QUEUE I-BITE-HEAL 20>>\n\t\t<TELL\n\"As you reach into the cannon, something bites you painfully on the hand!\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"Every scroll is virtually identical.\" CR>)>>"
  },
  "I-BITE-HEAL": {
   "name": "I-BITE-HEAL",
   "file": "fort.zil",
   "line": 360,
   "endLine": 362,
   "source": "<ROUTINE I-BITE-HEAL ()\n\t <SETG BITTEN <>>\n\t <RFALSE>>"
  },
  "NOT-HERE-OBJECT-F": {
   "name": "NOT-HERE-OBJECT-F",
   "file": "globals.zil",
   "line": 72,
   "endLine": 130,
   "source": "<ROUTINE NOT-HERE-OBJECT-F (\"AUX\" TBL (PRSO? T) OBJ (X <>))\n\t ;\"This COND is game independent (except the TELL)\"\n\t <COND (<AND <EQUAL? ,PRSO ,NOT-HERE-OBJECT>\n\t\t     <EQUAL? ,PRSI ,NOT-HERE-OBJECT>>\n\t\t<TELL \"Those things aren't here!\" CR>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSO ,NOT-HERE-OBJECT>\n\t\t<SET TBL ,P-PRSO>)\n\t       (T\n\t\t<SET TBL ,P-PRSI>\n\t\t<SET PRSO? <>>)>\n\t <COND (.PRSO?\n\t\t<COND (<OR <EQUAL? ,PRSA ,V?FIND ,V?FOLLOW ,V?AIMFIZ>\n\t\t\t   <EQUAL? ,PRSA ,V?WHAT ,V?WHERE ,V?WHO>\n\t\t\t   <EQUAL? ,PRSA ,V?WAIT-FOR ,V?SEND ,V?WALK-TO>\n\t\t\t   <EQUAL? ,PRSA ,V?RESEARCH>>\n\t\t       <SET X T>\n\t\t       <COND (<SET OBJ <FIND-NOT-HERE .TBL .PRSO?>>\n\t\t\t      <COND (<NOT <EQUAL? .OBJ ,NOT-HERE-OBJECT>>\n\t\t\t\t     <RTRUE>)>)\n\t\t\t     (T\n\t\t\t      <RFALSE>)>)>)\n\t       (T\n\t\t<COND (<OR <AND <EQUAL? ,PRSA ,V?AIMFIZ-TO>\n\t\t\t\t<EQUAL? ,PRSO ,ME>>\t\t\t   \n\t\t\t   <AND <EQUAL? ,PRSA ,V?CAST>\n\t\t\t        <EQUAL? ,PRSO ,AIMFIZ-SPELL>>>\n\t\t       <SET X T>\n\t\t       <COND (<SET OBJ <FIND-NOT-HERE .TBL .PRSO?>>\n\t\t\t      <COND (<NOT <EQUAL? .OBJ ,NOT-HERE-OBJECT>>\n\t\t\t\t     <RTRUE>)>)\n\t\t\t     (T\n\t\t\t      <RFALSE>)>)>)>\n\t ;\"Here is the default 'cant see any' printer\"\n\t <COND (.X\n\t\t<TELL \"You'll have to be more specific, I'm afraid.\" CR>)\n\t       (<EQUAL? ,WINNER ,PROTAGONIST>\n\t\t<TELL \"You can't see \">\n\t\t<COND (<OR <EQUAL? ,P-XNAM ,W?BELBOZ ,W?HELIST ,W?KRILL>\n\t\t\t   <EQUAL? ,P-XNAM ,W?FROBAR ,W?JEEARR ,W?FLATHE>\n\t\t\t   <EQUAL? ,P-XNAM ,W?DUNCAN ,W?ENTHAR ,W?THOLL>\n\t\t\t   <EQUAL? ,P-XNAM ,W?GURTH ,W?MIZNIA ,W?ACCARD>\n\t\t           <EQUAL? ,P-XNAM ,W?BORPHE ,W?ANTHAR ,W?MITHIC>\n\t\t           <EQUAL? ,P-XNAM ,W?GALEPA ,W?MAREIL ,W?THRIFF>\n\t\t\t   <EQUAL? ,P-XNAM ,W?ORKAN ,W?BARBEL ,W?CHEVAU>>\n\t\t       T)\n\t\t      (T\n\t\t       <TELL \"any \">)> \n\t\t<NOT-HERE-PRINT .PRSO?>\n\t\t<TELL \" here!\" CR>)\n\t       (T\n\t\t<TELL \"Looking confused,\">\n\t\t<ARTICLE ,WINNER T>\n\t\t<TELL \" says, \\\"I don't see any \">\n\t\t<NOT-HERE-PRINT .PRSO?>\n\t\t<TELL \" here!\\\"\" CR>)>\n\t <SETG P-CONT <>>\n\t <SETG QUOTE-FLAG <>>\n\t <RTRUE>>"
  },
  "FIND-NOT-HERE": {
   "name": "FIND-NOT-HERE",
   "file": "globals.zil",
   "line": 132,
   "endLine": 156,
   "source": "<ROUTINE FIND-NOT-HERE (TBL PRSO? \"AUX\" M-F OBJ)\n\t;\"Here is where special-case code goes. <MOBY-FIND .TBL> returns\n\t   number of matches. If 1, then P-MOBY-FOUND is it. One may treat\n\t   the 0 and >1 cases alike or different. It doesn't matter. Always\n\t   return RFALSE (not handled) if you have resolved the problem.\"\n\t<SET M-F <MOBY-FIND .TBL>>\n\t;<COND (,DEBUG\n\t       <TELL \"[Found \" N .M-F \" obj]\" CR>)>\n\t;<COND (<AND <G? .M-F 1>\n\t\t    <SET OBJ <GETP <1 .TBL> ,P?GLOBAL>>>\n\t       <SET M-F 1>\n\t       <SETG P-MOBY-FOUND .OBJ>)>\n\t<COND (<==? 1 .M-F>\n\t       ;<COND (,DEBUG <TELL \"[Namely: \" D ,P-MOBY-FOUND \"]\" CR>)>\n\t       <COND (.PRSO?\n\t\t      <SETG PRSO ,P-MOBY-FOUND>)\n\t\t     (T\n\t\t      <SETG PRSI ,P-MOBY-FOUND>)>\n\t       <RFALSE>)\n\t      (<NOT .PRSO?>\n\t       <TELL \"You wouldn't find any \">\n\t       <NOT-HERE-PRINT .PRSO?>\n\t       <TELL \" there.\" CR>\n\t       <RTRUE>)\n\t      (T ,NOT-HERE-OBJECT)>>"
  },
  "NOT-HERE-PRINT": {
   "name": "NOT-HERE-PRINT",
   "file": "globals.zil",
   "line": 167,
   "endLine": 193,
   "source": "<ROUTINE NOT-HERE-PRINT (PRSO?)\n\t <COND (<EQUAL? ,P-XNAM ,W?BELBOZ>\n\t\t<TELL \"Belboz\">)\n\t       (<EQUAL? ,P-XNAM ,W?THOLL>\n\t\t<TELL \"Tholl\">)\n\t       (<OR <EQUAL? ,P-XNAM ,W?GURTH ,W?MIZNIA ,W?ACCARD>\n\t\t    <EQUAL? ,P-XNAM ,W?BORPHE ,W?ANTHAR ,W?MITHIC>\n\t\t    <EQUAL? ,P-XNAM ,W?GALEPA ,W?MAREIL ,W?THRIFF>>\n\t\t<TELL \"that place\">)\n\t       (<OR <EQUAL? ,P-XNAM ,W?HELIST ,W?FROBAR ,W?ORKAN>\n\t\t    <EQUAL? ,P-XNAM ,W?BARBEL ,W?CHEVAU>>\n\t\t<TELL \"that person\">)\n\t       (<EQUAL? ,P-XNAM ,W?JEEARR>\n\t\t<TELL \"Jeearr\">)\n\t       (<EQUAL? ,P-XNAM ,W?KRILL>\n\t\t<TELL \"Krill\">)\n\t       (<EQUAL? ,P-XNAM ,W?FLATHE>\n\t\t<TELL \"Flathead\">)\n\t       (<EQUAL? ,P-XNAM ,W?DUNCAN ,W?ENTHAR>\n\t\t<TELL \"that King\">)\n\t       (,P-OFLAG\n\t        <COND (,P-XADJ <PRINTB ,P-XADJN>)>\n\t        <COND (,P-XNAM <PRINTB ,P-XNAM>)>)\n               (.PRSO?\n\t        <BUFFER-PRINT <GET ,P-ITBL ,P-NC1> <GET ,P-ITBL ,P-NC1L> <>>)\n               (T\n\t        <BUFFER-PRINT <GET ,P-ITBL ,P-NC2> <GET ,P-ITBL ,P-NC2L> <>>)>>"
  },
  "GROUND-F": {
   "name": "GROUND-F",
   "file": "globals.zil",
   "line": 208,
   "endLine": 219,
   "source": "<ROUTINE GROUND-F ()\n\t <COND (<VERB? CLIMB-UP CLIMB-ON CLIMB-FOO BOARD>\n\t\t<V-SIT>)\n\t       (<AND <VERB? EXAMINE>\n\t\t     <EQUAL? ,HERE ,LAGOON>>\n\t\t<TELL \"Through the water you can see sandy ground below.\" CR>)\n\t       (<AND <VERB? LOOK-UNDER LOOK-INSIDE EXAMINE>\n\t\t     <EQUAL? ,HERE ,GLASS-MAZE>>\n\t\t<PERFORM ,V?EXAMINE ,MAZE>\n\t\t<RTRUE>)\n\t       (<VERB? LOOK-UNDER>\n\t\t<TELL \"You've never mastered an X-ray vision spell.\" CR>)>>"
  },
  "ROAD-F": {
   "name": "ROAD-F",
   "file": "globals.zil",
   "line": 229,
   "endLine": 231,
   "source": "<ROUTINE ROAD-F ()\n\t <COND (<VERB? FOLLOW>\n\t\t<V-WALK-AROUND>)>>"
  },
  "CORRIDOR-F": {
   "name": "CORRIDOR-F",
   "file": "globals.zil",
   "line": 240,
   "endLine": 242,
   "source": "<ROUTINE CORRIDOR-F ()\n\t <COND (<VERB? THROUGH WALK-TO>\n\t\t<V-WALK-AROUND>)>>"
  },
  "WALLS-F": {
   "name": "WALLS-F",
   "file": "globals.zil",
   "line": 251,
   "endLine": 266,
   "source": "<ROUTINE WALLS-F ()\n\t <COND (<AND <VERB? READ>\n\t\t     <EQUAL? ,HERE ,CHAMBER-OF-THE-CIRCLE>>\n\t\t<PERFORM ,V?READ ,TENETS>\n\t\t<RTRUE>)\n\t       (<AND <VERB? EXAMINE>\n\t\t     <EQUAL? ,HERE ,HALL-OF-CARVINGS>\n\t\t     <NOT ,DRAGON-MOVED>>\n\t\t<TELL \"A dragon carving adorns the far wall.\" CR>)\n\t       (<AND <EQUAL? ,HERE ,SLIMY-ROOM>\n\t\t     <VERB? EXAMINE>>\n\t\t<TELL \"The walls are covered with moss and stuff.\" CR>)\n\t       (<AND <EQUAL? ,HERE ,GLASS-MAZE>\n\t\t     <VERB? EXAMINE LOOK-INSIDE>>\n\t\t<PERFORM ,V?EXAMINE ,MAZE>\n\t\t<RTRUE>)>>"
  },
  "CEILING-F": {
   "name": "CEILING-F",
   "file": "globals.zil",
   "line": 276,
   "endLine": 292,
   "source": "<ROUTINE CEILING-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<COND (<EQUAL? ,HERE ,SLANTED-ROOM>\n\t\t       <TELL\n\"The ceiling is slanted, making the room trapezoidal in shape.\" CR>)\n\t\t      (<EQUAL? ,HERE ,PIT-OF-BONES>\n\t\t       <TELL \"There's an opening in the ceiling.\" CR>)\n\t\t      (<EQUAL? ,HERE ,CHAMBER-OF-THE-CIRCLE>\n\t\t       <TELL\n\"Other than its shape, there's nothing of interest.\" CR>)>)\n\t       (<AND <EQUAL? ,HERE ,GLASS-MAZE>\n\t\t     <VERB? EXAMINE LOOK-INSIDE>>\n\t\t<PERFORM ,V?EXAMINE ,MAZE>\n\t\t<RTRUE>)\n\t       (<VERB? LOOK-UNDER>\n\t\t<PERFORM ,V?LOOK>\n\t\t<RTRUE>)>>"
  },
  "STAIRS-F": {
   "name": "STAIRS-F",
   "file": "globals.zil",
   "line": 302,
   "endLine": 306,
   "source": "<ROUTINE STAIRS-F ()\n\t <COND (<VERB? CLIMB-UP CLIMB-FOO>\n\t\t<DO-WALK ,P?UP>)\n\t       (<VERB? CLIMB-DOWN>\n\t\t<DO-WALK ,P?DOWN>)>>"
  },
  "BAT-F": {
   "name": "BAT-F",
   "file": "globals.zil",
   "line": 329,
   "endLine": 342,
   "source": "<ROUTINE BAT-F ()\n\t <COND (,FWEEPED\n\t\t<COND (<EQUAL? ,PRSO ,BAT>\n\t\t       <SETG PERFORMING-SPELL T>\n\t\t       <PERFORM ,PRSA ,ME ,PRSI>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <SETG PERFORMING-SPELL T>\n\t\t       <PERFORM ,PRSA ,PRSO ,ME>\n\t\t       <RTRUE>)>)\n\t       (<NOT <VERB? RESEARCH>>\n\t\t<YOU-CANT-SEE-ANY \"bat\">)\n\t       (T\n\t\t<TELL \"The entry about bats is long and uninteresting.\" CR>)>>"
  },
  "ME-F": {
   "name": "ME-F",
   "file": "globals.zil",
   "line": 351,
   "endLine": 452,
   "source": "<ROUTINE ME-F (\"AUX\" OLIT) \n\t <COND (<VERB? TELL>\n\t\t<TELL\n\"Talking to yourself is said to be a sign of impending mental collapse.\" CR>\n\t\t<STOP>)\n\t       (<VERB? LISTEN>\n\t\t<TELL \"Yes?\" CR>)\n\t       (<VERB? ALARM>\n\t\t<COND (,SLEEPING\n\t\t       <TELL\n\"As you wake up, Frobar sticks his head in the door and invites you\nshopping. When you return late that evening, you find the Guild Hall\nsacked, and many fellow Enchanters slaughtered. Servants of evil, teeth\nsmeared with blood, fall upon you as well. A menacing voice echoes about\nthe room. \\\"Pathetic Enchanters ... Who can save you now?\\\"|\n|\nSome days it just doesn't pay to wake up.\">\n\t\t       <FINISH>)\n\t\t      (T\n\t\t       <TELL \"You are obviously awake already.\" CR>)>)\n\t       (<VERB? RESEARCH>\n\t\t<TELL\n\"You find several sentences mentioning your heroic defeat of the\nwarlock Krill.\" CR>)\n\t       (<VERB? AIMFIZ>\n\t\t<TELL \"You are suddenly \">\n\t\t<COND (,FLYING\n\t\t       <TELL \"floating\">)\n\t\t      (T\n\t\t       <TELL \"standing\">)>\n\t\t<TELL \" right next to your former location! Wow!!\" CR>)\n\t       (<VERB? VARDIK>\n\t\t<SETG VARDIKED T>\n\t\t<ENABLE <QUEUE I-UNVARDIK 12>>\n\t\t<TELL\n\"A feeling of warmth and protection fills your mind.\" CR>)\n\t       (<VERB? YOMIN>\n\t\t<TELL\n\"You sense a mind concentrating on casting the yomin spell.\" CR>) \n\t       (<VERB? GASPAR>\n\t\t<SETG RESURRECTION-ROOM ,HERE>\n\t\t<TELL \"A sense of peace of mind passes over you.\" CR>)\n\t       (<VERB? GOLMAC>\n\t\t<COND (,GOLMACKED\n\t\t       <POOF>)>\n\t\t<SETG GOLMACKED T>\n\t\t<FCLEAR ,KEROSENE-LAMP ,OPENBIT>\n\t\t<MOVE ,VARDIK-SCROLL ,KEROSENE-LAMP>\n\t\t<MOVE ,GOLMAC-SCROLL ,SLANTED-ROOM>\n\t\t<FCLEAR ,GOLMAC-SCROLL ,ONBIT>\n\t\t<MOVE ,ROPE ,SHAFT-BOTTOM>\n\t\t<MOVE ,BEAM ,COAL-MINE-1>\n\t\t<SETG ROPE-PLACED <>>\n\t\t<SETG ROPE-TO-BEAM <>>\n\t\t<SETG CURRENT-SETTING 0>\n\t\t<FCLEAR ,ROPE ,TOUCHBIT>\n\t\t<FCLEAR ,DIAL-DOOR ,OPENBIT>\n\t\t<SETG DIAL-OPEN <>>\n\t\t<TELL\n\"You are surrounded by a puff of smoke, and feel disoriented for a\nmoment. When the smoke clears, nothing seems to have changed\">\n\t\t<COND (<EQUAL? ,HERE ,SLANTED-ROOM>\n\t\t       <TELL \", except that the kerosene lamp is now closed\">)>\n\t\t<TELL \".\" CR>)\n\t       (<AND <VERB? LOWER-INTO>\n\t\t     <EQUAL? ,PRSI ,LOWER-CHUTE ,UPPER-CHUTE>>\n\t\t<DO-WALK ,P?DOWN>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (,FWEEPED\n\t\t       <TELL\n\"You're batty! (And a rather large one, at that.)\" CR>)\n\t\t      (<FSET? ,PROTAGONIST ,ONBIT>\n\t\t       <TELL\n\"You seem to have been frotzed.\" CR>)>)\n\t       (<AND <VERB? FROTZ>\n\t\t     <NOT <FSET? ,PROTAGONIST ,ONBIT>>>\n\t\t<COND (,SLEEPING \n\t\t       <V-SWANZO>)\n\t\t      (T\n\t\t       <SET OLIT ,LIT>\n\t\t       <SETG ALWAYS-LIT T>\n\t\t       <FSET ,ME ,ONBIT>\n\t\t       <FSET ,PROTAGONIST ,ONBIT>\n\t\t       <FSET ,YOUNGER-SELF ,ONBIT>\n\t\t       <TELL\n\"You are bathed in a sickly yellow light, bright enough to read by.\" CR>\n\t\t       <SETG LIT <LIT? ,HERE>>\n\t\t       <COND (<AND <NOT .OLIT> ,LIT>\n\t\t              <CRLF>\n\t\t\t      <V-LOOK>)>\n\t\t       <RTRUE>)>)\n\t       (<AND <VERB? GIVE>\n\t\t     <EQUAL? ,PRSI ,ME>>\n\t\t<COND (<HELD? ,PRSO>\n\t\t       <TELL \"You already have it.\" CR>)\n\t\t      (T\n\t\t       <PERFORM ,V?TAKE ,PRSO>\n\t\t       <RTRUE>)>)\n\t       (<VERB? KILL MUNG ATTACK>\n\t\t<JIGS-UP \"Done.\">)\n\t       (<VERB? FIND>\n\t\t<TELL \"You're right here!\" CR>)>>"
  },
  "GRUE-F": {
   "name": "GRUE-F",
   "file": "globals.zil",
   "line": 461,
   "endLine": 489,
   "source": "<ROUTINE GRUE-F ()\n    <COND (<EQUAL? ,HERE ,GRUE-LAIR>\n\t   <THIS-IS-IT ,MUTATED-GRUES>)>\n    <COND (<VERB? EXAMINE RUB RAISE LOWER KICK TAKE LOOK-UNDER>\n\t   <TELL \"You can't see any grue here (thankfully).\" CR>)\n\t  (<VERB? WHERE>\n\t   <TELL\n\"There is no grue here, but I'm sure there is at least one lurking\nin the darkness nearby. I'd stay near a light source if I were you!\" CR>)\n\t  (<VERB? LISTEN>\n\t   <TELL\n\"It makes no sound but is always lurking in the darkness nearby.\" CR>)\n\t  (<VERB? FROTZ>\n\t   <COND (<EQUAL? ,HERE ,GRUE-LAIR>\t\t  \n\t\t  <TELL \"There is a flash of light from nearby!\" CR>\n\t\t  <COND (<NOT ,LIT>\n\t\t\t <SETG LIT T>\n\t\t\t <V-LOOK>)>\n\t\t  <FSET ,HERE ,ONBIT>)\n\t\t (,LIT\n\t\t  <TELL \"There aren't any grues here -- it's light!\" CR>)\n\t\t (T\n\t\t  <TELL\n\"There's a flash of light nearby, and you glimpse a horrible, multi-fanged\ncreature, a look of sheer terror on its face. It charges away, gurgling in\nagony, tearing at its glowing fur.\" CR>)>)\n\t  (<VERB? RESEARCH>\n\t   <PERFORM ,V?RESEARCH ,LOBBY>\n\t   <RTRUE>)>>"
  },
  "WATER-F": {
   "name": "WATER-F",
   "file": "globals.zil",
   "line": 499,
   "endLine": 549,
   "source": "<ROUTINE WATER-F ()\n\t <COND (<VERB? DRINK DRINK-FROM>\n\t        <TELL \"It's dangerous to drink untested water!\" CR>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<MAKE-OUT>)\n\t       (<AND <VERB? FILL>\n\t\t     <FSET? ,PRSO ,VIALBIT>>\n\t\t<TELL\n\"A vial nymph appears to warn that water can destroy the delicate magic\nproperties of potion vials. It wags a finger at you before vanishing.\" CR>)\n\t       (<AND <EQUAL? ,WATER ,PRSI>\n\t\t     <NOT <EQUAL? ,HERE ,STAGNANT-POOL ,HIDDEN-CAVE>>>\n\t\t<WATER-IS-PRSI>)\n\t       (<EQUAL? ,HERE ,COVE ,LAGOON ,LAGOON-FLOOR>\n\t\t<SETG PERFORMING-SPELL T>\n\t\t<PERFORM ,PRSA ,LAGOON-OBJECT ,PRSI>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,HERE ,OCEAN-NORTH ,OCEAN-SOUTH ,MOUTH-OF-RIVER>\n\t\t<SETG PERFORMING-SPELL T>\n\t\t<PERFORM ,PRSA ,OCEAN ,PRSI>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,HERE ,DRAWBRIDGE>\n\t\t<SETG PERFORMING-SPELL T>\n\t\t<PERFORM ,PRSA ,MOAT ,PRSI>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,HERE ,RIVER-BANK>\n\t\t<SETG PERFORMING-SPELL T>\n\t\t<PERFORM ,PRSA ,RIVER ,PRSI>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,HERE ,FLUME>\n\t\t<SETG PERFORMING-SPELL T>\n\t\t<PERFORM ,PRSA ,FLUME-OBJECT ,PRSI>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,HERE ,STAGNANT-POOL>\n\t\t<COND (<VERB? THROUGH>\n\t\t       <DO-WALK ,P?NW>)\n\t              (<VERB? PULVER>\n\t\t       <JIGS-UP\n\"The pool evaporates, to the annoyance of a multi-tentacled denizen,\nwho proceeds to take out its anger on you.\">)>)\n\t       (<EQUAL? ,HERE ,HIDDEN-CAVE>\n\t\t<COND (,RIVER-EVAPORATED\n\t\t       <YOU-CANT-SEE-ANY \"water\">)\n\t\t      (<VERB? PULVER>\n\t\t       <TELL\n\"The water recedes for a moment, then swirls back.\" CR>)\n\t\t      (<VERB? THROUGH>\n\t\t       <DO-WALK ,P?OUT>)>)\n\t       (<EQUAL? ,HERE ,RIVER-BED ,TOP-OF-FALLS ,STAGNANT-POOL>\n\t\t<TELL\n\"Hardly enough water here to get a good pulveration going.\" CR>)>>"
  },
  "WATER-IS-PRSI": {
   "name": "WATER-IS-PRSI",
   "file": "globals.zil",
   "line": 551,
   "endLine": 571,
   "source": "<ROUTINE WATER-IS-PRSI ()\n\t <COND (<EQUAL? ,HERE ,COVE ,LAGOON ,LAGOON-FLOOR>\n\t\t<SETG PERFORMING-SPELL T>\n\t\t<PERFORM ,PRSA ,PRSO ,LAGOON-OBJECT>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,HERE ,OCEAN-NORTH ,OCEAN-SOUTH ,MOUTH-OF-RIVER>\n\t\t<SETG PERFORMING-SPELL T>\n\t\t<PERFORM ,PRSA ,PRSO ,OCEAN>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,HERE ,DRAWBRIDGE>\n\t\t<SETG PERFORMING-SPELL T>\n\t\t<PERFORM ,PRSA ,PRSO ,MOAT>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,HERE ,RIVER-BANK>\n\t\t<SETG PERFORMING-SPELL T>\n\t\t<PERFORM ,PRSA ,PRSO ,RIVER>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,HERE ,FLUME>\n\t\t<SETG PERFORMING-SPELL T>\n\t\t<PERFORM ,PRSA ,PRSO ,FLUME-OBJECT>\n\t\t<RTRUE>)>>"
  },
  "SKY-F": {
   "name": "SKY-F",
   "file": "globals.zil",
   "line": 579,
   "endLine": 584,
   "source": "<ROUTINE SKY-F (\"AUX\" EL)\n\t <COND (<VERB? EXAMINE>\n\t\t<COND (<FSET? ,HERE ,INSIDEBIT>\n\t\t       <TELL \"That would be difficult from here.\" CR>)\n\t\t      (<EQUAL? ,HERE ,LAGOON-FLOOR>\n\t\t       <TELL \"The sky is blurry but visible.\" CR>)>)>>"
  },
  "BELBOZ-F": {
   "name": "BELBOZ-F",
   "file": "globals.zil",
   "line": 596,
   "endLine": 637,
   "source": "<ROUTINE BELBOZ-F ()\n\t <COND (<VERB? TELL ASK-ABOUT ASK-FOR GIVE>\n\t\t<TELL \"Belboz is in some sort of trance.\" CR>\n\t\t<STOP>)\n\t       (<VERB? WHO>\n\t\t<TELL\n\"Belboz, your friend and mentor, is the head of the Circle of Enchanters.\nRecently, he has been acting oddly and seems to have been avoiding you.\" CR>)\n\t       (<VERB? ALARM>\n\t\t<DISABLE <INT I-BELBOZ-AWAKES>>\n\t\t<I-BELBOZ-AWAKES>)\n\t       (<VERB? RESEARCH>\n\t\t<TELL\n\"There is a small entry about Belboz, mentioning that he is the Guildmaster\nof the Accardi Chapter of the Guild of Enchanters, and has served three terms\nas kingdomwide Secretary of the Guild.\" CR>)\n\t       (<AND <VERB? WHERE FIND>\n\t\t     <NOT <IN? ,BELBOZ ,HERE>>>\n\t\t<TELL\n\"You last saw Belboz a few days ago. You can't begin to\nguess where he is now.\" CR>)\n\t       (<VERB? GASPAR>\n\t\t<SETG BELBOZ-GASPARED T>\n\t\t<RFALSE>)\n\t       (<VERB? AIMFIZ>\n\t\t<AIMFIZ-BELBOZ-JEEARR>\n\t\t<GOTO ,TWISTED-FOREST>\n\t\t<SETG SCORE <+ ,SCORE 20>>\n\t\t<DISABLE <INT I-PARROT>>\n\t\t<ENABLE <QUEUE I-HELLHOUND -1>>)\n\t       (<VERB? YOMIN>\n\t\t<TELL\n\"You get a horrifying glimpse of a monstrous creature intertwined\nthroughout Belboz's mind. You concentrate, attempting to translate\nthis image into visual terms, and imagine a giant spider with millions of\nlegs, wrapped around and feasting upon the body and spirit of Belboz. The\nimage fades, and you stagger backwards.\" CR>)\n\t       (<AND <VERB? KILL>\n\t\t     <EQUAL? ,PRSI ,KNIFE>>\n\t\t<KILL-BELBOZ>)\n\t       (<VERB? SWANZO>\n\t\t<SWANZO-BELBOZ>)>>"
  },
  "AIMFIZ-BELBOZ-JEEARR": {
   "name": "AIMFIZ-BELBOZ-JEEARR",
   "file": "globals.zil",
   "line": 639,
   "endLine": 642,
   "source": "<ROUTINE AIMFIZ-BELBOZ-JEEARR ()\n\t <TELL\n\"After a momentary dizziness, you realize that your location has changed,\nalthough \" D ,PRSO \" is not in sight...\" CR CR>>"
  },
  "GLOBAL-ROOM-F": {
   "name": "GLOBAL-ROOM-F",
   "file": "globals.zil",
   "line": 651,
   "endLine": 660,
   "source": "<ROUTINE GLOBAL-ROOM-F ()\n\t <COND (<VERB? LOOK EXAMINE LOOK-INSIDE>\n\t\t<V-LOOK>\n\t\t<RTRUE>)\n\t       (<VERB? THROUGH DROP EXIT>\n\t\t<V-WALK-AROUND>)\n\t       (<VERB? WALK-AROUND>\n\t\t<TELL\n\"Walking around the room reveals nothing new. If you want to move elsewhere,\nsimply indicate the desired direction.\" CR>)>>"
  },
  "ARCHWAY-F": {
   "name": "ARCHWAY-F",
   "file": "globals.zil",
   "line": 670,
   "endLine": 674,
   "source": "<ROUTINE ARCHWAY-F ()\n\t <COND (<VERB? THROUGH CROSS>\n\t\t<V-WALK-AROUND>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<MAKE-OUT>)>>"
  },
  "HOLE-F": {
   "name": "HOLE-F",
   "file": "globals.zil",
   "line": 684,
   "endLine": 709,
   "source": "<ROUTINE HOLE-F ()\n\t <COND (<EQUAL? ,HERE ,HOLLOW>\n\t\t<SETG PERFORMING-SPELL T>\n\t\t<COND (<EQUAL? ,HOLE ,PRSO>\n\t\t       <SETG PERFORMING-SPELL T>\n\t\t       <PERFORM ,PRSA ,BRICK-STRUCTURE ,PRSI>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <SETG PERFORMING-SPELL T>\n\t\t       <PERFORM ,PRSA ,PRSO ,BRICK-STRUCTURE>\n\t\t       <RTRUE>)>)\n\t       (<VERB? THROUGH CLIMB-FOO CLIMB-UP CLIMB-DOWN>\n\t\t<COND (<EQUAL? ,HERE ,FOREST-EDGE>\n\t\t       <DO-WALK ,P?DOWN>)\n\t\t      (<EQUAL? ,HERE ,SLIMY-ROOM>\n\t\t       <DO-WALK ,P?UP>)\n\t\t      (<EQUAL? ,HERE ,HIDDEN-CAVE>\n\t\t       <DO-WALK ,P?DOWN>)\n\t\t      (<EQUAL? ,HERE ,PIT-OF-BONES>\n\t\t       <DO-WALK ,P?UP>)\n\t\t      (<EQUAL? ,HERE ,DUNGEON>\n\t\t       <DO-WALK ,P?DOWN>)\n\t\t      (<EQUAL? ,HERE ,LOBBY>\n\t\t       <V-WALK-AROUND>)>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<MAKE-OUT>)>>"
  },
  "FOREST-F": {
   "name": "FOREST-F",
   "file": "globals.zil",
   "line": 719,
   "endLine": 729,
   "source": "<ROUTINE FOREST-F ()\n\t <COND (<VERB? MEEF>\n\t\t<TELL\n\"You're too late -- this forest dried up eons ago.\" CR>)\n\t       (<VERB? THROUGH>\n\t\t<COND (<EQUAL? ,HERE ,MINE-FIELD ,FOREST-EDGE>\n\t\t       <DO-WALK ,P?WEST>)\n\t\t      (<EQUAL? ,HERE ,TWISTED-FOREST ,TREE-BRANCH>\n\t\t       <LOOK-AROUND-YOU>)\n\t\t      (T\n\t\t       <CANT-ENTER ,FOREST>)>)>>"
  },
  "CASTLE-F": {
   "name": "CASTLE-F",
   "file": "globals.zil",
   "line": 739,
   "endLine": 746,
   "source": "<ROUTINE CASTLE-F ()\n\t <COND (<VERB? RESEARCH>\n\t\t<TELL \"Egreth was the castle of King Duncanthrax.\" CR>)\n\t       (<VERB? THROUGH>\n\t\t<COND (<EQUAL? ,HERE ,DRAWBRIDGE ,RUINS>\n\t\t       <DO-WALK ,P?EAST>)\n\t\t      (T\n\t\t       <LOOK-AROUND-YOU>)>)>>"
  },
  "CAVE-F": {
   "name": "CAVE-F",
   "file": "globals.zil",
   "line": 756,
   "endLine": 769,
   "source": "<ROUTINE CAVE-F ()\n\t <COND (<VERB? THROUGH>\n\t\t<COND (<EQUAL? ,HERE ,MOUTH-OF-RIVER ,GRUE-LAIR>\n\t\t       <DO-WALK ,P?WEST>)\n\t\t      (<EQUAL? ,HERE ,RIVER-BED>\n\t\t       <DO-WALK ,P?NE>)\n\t\t      (<EQUAL? ,HERE ,PIT-OF-BONES>\n\t\t       <DO-WALK ,P?UP>)\n\t\t      (<EQUAL? ,HERE ,BELBOZ-HIDEOUT>\n\t\t       <DO-WALK ,P?EAST>)\n\t\t      (T\n\t\t       <LOOK-AROUND-YOU>)>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<MAKE-OUT>)>> "
  },
  "HELISTAR-F": {
   "name": "HELISTAR-F",
   "file": "globals.zil",
   "line": 785,
   "endLine": 799,
   "source": "<ROUTINE HELISTAR-F ()\n\t <COND (<VERB? WHO>\n\t\t<TELL\n\"Helistar is an old and powerful member of the Circle. Although a\nskilled and experienced magic-user, she is humorless to the point of\nbeing grim. Despite this personality flaw, Helistar is the most likely\ncandidate to become the next Guildmaster of the Circle.\" CR>)\n\t       (<VERB? WHERE>\n\t\t<TELL\n\"Helistar has gone on her annual two-week vacation. She usually goes\nto the southlands, Gurth and Mithicus.\" CR>)\n\t       (<VERB? AIMFIZ>\n\t\t<AIMFIZ-LOSE>\n\t\t<TELL <PICK-ONE ,HELISTARISMS>>\n\t        <JIGS-UP \".\">)>>"
  },
  "FROBAR-F": {
   "name": "FROBAR-F",
   "file": "globals.zil",
   "line": 810,
   "endLine": 822,
   "source": "<ROUTINE FROBAR-F ()\n\t <COND (<VERB? WHO>\n\t\t<TELL\n\"Frobar is the most loyal and hard-working member of the Guild. However,\nhe is somewhat dull and lacks imagination. It is doubtful that he would\never succeed Belboz as head of the Circle.\" CR>)\n\t       (<VERB? WHERE>\n\t\t<TELL\n\"Perhaps he's gone into town to perform some errands.\" CR>) \n\t       (<VERB? AIMFIZ>\n\t\t<AIMFIZ-LOSE>\n\t\t<TELL <PICK-ONE ,FROBARISMS>>\n\t\t<JIGS-UP \".\">)>>"
  },
  "AIMFIZ-LOSE": {
   "name": "AIMFIZ-LOSE",
   "file": "globals.zil",
   "line": 834,
   "endLine": 838,
   "source": "<ROUTINE AIMFIZ-LOSE ()\n\t <TELL\n\"When you recover from a brief dizziness, you notice \" D ,PRSO\n\" nearby, looking surprised to see you. A moment later, you realize\nthat \" D ,PRSO \" is \">>"
  },
  "IMPLEMENTOR-F": {
   "name": "IMPLEMENTOR-F",
   "file": "globals.zil",
   "line": 848,
   "endLine": 857,
   "source": "<ROUTINE IMPLEMENTOR-F ()\n\t <COND (<VERB? AIMFIZ>\n\t\t<JIGS-UP\n\"You appear on a road in a far-off province called Cambridge. As you begin\nchoking on the polluted air, a mugger stabs you in the back with a knife.\nA moment later, a wild-eyed motorist plows over you.\">)\n\t       (<VERB? RESEARCH>\n\t\t<TELL\n\"Possibly the largest entry in the volume, detailing the facts and the\nmyths about the man known as the Bearded Oracle of Yonkers.\" CR>)>>"
  },
  "JEEARR-F": {
   "name": "JEEARR-F",
   "file": "globals.zil",
   "line": 867,
   "endLine": 885,
   "source": "<ROUTINE JEEARR-F ()\n\t <COND (<VERB? RESEARCH>\n\t\t<TELL\n\"There's a long write-up in the mythology section. The evil force called\nJeearr once spread pestilence and terror across many lands. Only the\ncombined magic of many kings and wizards stopped him, even as he was\npreparing his final assault. He was imprisoned in the void beyond our\nworld, his jailors warning future generations that his exile might not\nbe permanent.\" CR>)\n\t       (<VERB? SWANZO>\n\t\t<SETG PERFORMING-SPELL T>\n\t\t<PERFORM ,PRSA ,BELBOZ>\n\t\t<RTRUE>)\n\t       (<VERB? AIMFIZ>\n\t\t<AIMFIZ-BELBOZ-JEEARR>\n\t\t<GOTO ,TWISTED-FOREST>\n\t\t<SETG SCORE <+ ,SCORE 20>>\n\t\t<DISABLE <INT I-PARROT>>\n\t\t<ENABLE <QUEUE I-HELLHOUND -1>>)>>"
  },
  "SPELL-BOOK-F": {
   "name": "SPELL-BOOK-F",
   "file": "globals.zil",
   "line": 919,
   "endLine": 949,
   "source": "<ROUTINE SPELL-BOOK-F (\"AUX\" (F <FIRST? ,SPELL-BOOK>))\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"This is the spell book given to you by Belboz after your original book\nwas lost during your battle with Krill. \">\n\t\t<COND (<FSET? ,SPELL-BOOK ,MUNGBIT>\n\t\t       <BOOK-DAMP>)\n\t\t      (T\n\t\t       <TELL\n\"There are several spells written in the book, with marginal\nnotes about their effects and how to cast them.\" CR>)>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<TELL\n\"Thanks to its magic properties, the spell book is always open to the\nright place at the right time, but it is also always closed. This innovation\neliminates tedious leafing and hunting for spells in tight situations. Many\nwizardly lives have been saved by this advance in magical technology.\" CR>)\n\t       (<VERB? READ LOOK-INSIDE>\n\t\t<COND (<FSET? ,SPELL-BOOK ,MUNGBIT>\n\t\t       <BOOK-DAMP>\n\t\t       <RTRUE>)\n\t\t      (<AND <NOT ,LIT>\n\t\t\t    <NOT ,BLORTED>>\n\t\t       <TELL\n\"Though it is dark, the magic writing of your spells casts enough light\nthat you can read them.\" CR>)>\n\t\t<TELL CR \"My Spell Book\" CR CR>\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT .F> <RETURN>)>\n\t\t\t<TELL \"The \" D .F \" (\" <GETP .F ,P?TEXT> \").\" CR>\n\t\t\t<SET F <NEXT? .F>>>)>>"
  },
  "I-FLY": {
   "name": "I-FLY",
   "file": "globals.zil",
   "line": 1008,
   "endLine": 1023,
   "source": "<ROUTINE I-FLY ()\n\t <SETG FLYING <>>\n\t <CRLF>\n\t <COND (<AND <EQUAL? ,HERE ,GLASS-MAZE>\n\t\t     <NO-FLOOR?>>\n\t\t<JIGS-UP\n\"The izyuk spell wears off. Unfortunately, this room of\nthe maze has no floor.\">)\n\t       (<EQUAL? ,HERE ,TREE-BRANCH>\n\t\t<SETTLE-ONTO-BRANCH>)\n\t       (<EQUAL? ,HERE ,LAGOON>\n\t\t<SPLASH-INTO-WATER>)\n\t       (T\n\t\t<TELL \"You settle gently to the ground.\" CR>)>\n\t <COND (<G? ,AWAKE 8>\n                <I-TIRED>)>>"
  },
  "SCROLL-F": {
   "name": "SCROLL-F",
   "file": "globals.zil",
   "line": 1047,
   "endLine": 1085,
   "source": "<ROUTINE SCROLL-F (\"AUX\" SPELL)\n\t <COND (<VERB? TAKE>\n\t\t<SET SPELL <FIRST? ,PRSO>>\n\t\t<FSET .SPELL ,TOUCHBIT>\n\t\t<FCLEAR ,PRSO ,TRYTAKEBIT>\n\t\t<COND (<AND <EQUAL? ,PRSO ,SWANZO-SCROLL>\n\t\t\t    <NOT ,MAZE-CROSSED>>\n\t\t       <FSET ,PRSO ,TOUCHBIT>\n\t\t       <SETG MAZE-CROSSED T>\n\t\t       <REARRANGE-MAZE-TABLE>\n\t\t       <MOVE ,PRSO ,PROTAGONIST>\n\t\t       <TELL\n\"As you take the scroll, a deep and evil laugh rumbles around the hollow.\nYou hear a sliding, grinding noise and turn just in time to catch a flicker\nof light from within the glass maze, indicating that its transparent panels\nhave shifted around.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<EQUAL? ,PRSO ,FWEEP-SCROLL>\n\t\t       <FCLEAR ,PRSO ,TRYTAKEBIT>\n\t\t       <FCLEAR ,BAT-GUANO ,NDESCBIT>)>\n\t\t<RFALSE>)\n\t       (<AND <NOT <FIRST? ,PRSO>>\n\t\t     <NOT <FIRST? ,PRSI>>>\n\t\t<TELL \"Bug #72\" CR>)\n\t       (<VERB? GNUSTO>\n\t\t<SET SPELL <FIRST? ,PRSO>>\n\t\t<PERFORM ,V?GNUSTO .SPELL>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE READ>\n\t\t<COND (<FSET? ,PRSO ,MUNGBIT>\n\t\t       <TELL \"The scroll is wet and the spell illegible.\" CR>\n\t\t       <RTRUE>)>\n\t\t<SET SPELL <FIRST? ,PRSO>>\n\t\t<TELL\n\"The scroll reads \\\"\" D .SPELL \": \" <GETP .SPELL ,P?TEXT> \"\\\".\">\n\t\t<COND (<EQUAL? .SPELL ,AIMFIZ-SPELL ,YONK-SPELL>\n\t\t       <TELL\n\" The spell seems very long and extremely complicated.\">)>\n\t\t<CRLF>)>>"
  },
  "ALWAYS-MEMORIZED": {
   "name": "ALWAYS-MEMORIZED",
   "file": "globals.zil",
   "line": 1087,
   "endLine": 1091,
   "source": "<ROUTINE ALWAYS-MEMORIZED (SPELL)\n\t <COND (<EQUAL? .SPELL ,GNUSTO-SPELL ,FROTZ-SPELL ,REZROV-SPELL>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "SPELL-F": {
   "name": "SPELL-F",
   "file": "globals.zil",
   "line": 1093,
   "endLine": 1165,
   "source": "<ROUTINE SPELL-F (\"AUX\" MEM? (FORGET <>))\n\t <COND (<VERB? RESEARCH>\n\t\t<TELL \"A spell produced by \" <PICK-ONE ,MANUFACTURERS> \".\" CR>)\n\t       (<VERB? READ>\n\t\t<COND (<AND <NOT <IN? ,PRSO ,SPELL-BOOK>>\n\t\t\t    <NOT <IN? <LOC ,PRSO> ,PROTAGONIST>>>\n\t\t       <TELL\n\"You can't do that without having the spell in your book or on\na scroll in your hand.\" CR>)\n\t\t      (<FSET? <LOC ,PRSO> ,MUNGBIT>\n\t\t       <PERFORM ,V?READ ,SPELL-BOOK>\n\t\t       <THIS-IS-IT ,PRSO>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"The spell reads \\\"\">\n\t\t       <TELL <GETP ,PRSO ,P?TEXT>>\n\t\t       <TELL \"\\\".\" CR>)>)\n\t       (<VERB? LEARN>\n\t\t<COND (<ALWAYS-MEMORIZED ,PRSO>\n\t\t       <TELL \"You already know that spell by heart.\" CR>)\n\t\t      (<NOT <IN? ,PRSO ,SPELL-BOOK>>\n\t\t       <COND (<IN? <LOC ,PRSO> ,PROTAGONIST>\n\t\t\t      <TELL\n\"You can't memorize a spell until you've written it into your spell book.\" CR>)\n\t\t\t     (T\n\t\t\t      <V-LEARN>)>)\n\t\t      (<NOT <IN? ,SPELL-BOOK ,PROTAGONIST>>\n\t\t       <TELL\n\"You don't have your spell book. How do you expect to learn\na spell without a spell book?\" CR>)\n\t\t      (<AND <NOT ,LIT>\n\t\t\t    <NOT ,BLORTED>>\n\t\t       <TELL \"You can't learn it in the dark.\" CR>)\n\t\t      (<FSET? ,SPELL-BOOK ,MUNGBIT>\n\t\t       <PERFORM ,V?READ ,SPELL-BOOK>\n\t\t       <THIS-IS-IT ,PRSO>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <SET MEM? <GETP ,PRSO ,P?COUNT>>\n\t\t       <COND (<0? ,SPELL-ROOM>\n\t\t\t      <COND (<EQUAL? ,SPELL-MAX 1>\n\t\t\t\t     <TELL\n\"You can't concentrate well enough to learn the spell.\" CR>\n\t\t\t\t     <RTRUE>)\n\t\t\t\t    (<EQUAL? .MEM? ,SPELL-MAX>\n\t\t\t\t     <TELL\n\"You try and try, but you just can't memorize those complex syllables again.\nThey slip playfully out of your memory as soon as you cram them in.\" CR>\n\t\t\t\t     <RTRUE>)\n\t\t\t\t    (T\n\t\t\t\t     <FORGET-SPELL ,PRSO>\n\t\t\t\t     <SET MEM? <+ .MEM? 1>>\n\t\t\t\t     <PUTP ,PRSO ,P?COUNT .MEM?>\n\t\t\t\t     <SET FORGET T>)>)\n\t\t\t     (T\n\t\t\t      <SETG SPELL-ROOM <- ,SPELL-ROOM 1>>\n\t\t\t      <SET MEM? <+ .MEM? 1>>\n\t\t\t      <PUTP ,PRSO ,P?COUNT .MEM?>)>\n\t\t       <TELL\n\"Using your best study habits, you learn the \" D ,PRSO>\n\t\t       <COND (<G? .MEM? 1>\n\t\t\t      <TELL \" yet another time\">)>\n\t\t       <TELL \".\" CR>\n\t\t       <COND (.FORGET\n\t\t\t      <TELL\n\"You have so much buzzing around in your head, though, that it's\nlikely that something may have been forgotten in the shuffle.\" CR>)>\n\t\t       <RTRUE>)>)\n\t       (<AND <NOT <VISIBLE? ,PRSO>>\n\t\t     <NOT <VERB? CAST>>>\n\t\t<TELL \"You can't see that spell here!\" CR>)\n\t       (<VERB? TAKE DROP THROW>\n\t\t<TELL <PICK-ONE ,YUKS> CR>)>>"
  },
  "FORGET-SPELL": {
   "name": "FORGET-SPELL",
   "file": "globals.zil",
   "line": 1167,
   "endLine": 1193,
   "source": "<ROUTINE FORGET-SPELL (SPL \"AUX\" NSPL F CNT TBL (NUM 0) (SP <>))\n\t <SET F <FIRST? ,SPELL-BOOK>>\n\t <SET TBL ,FORGET-TBL>\n\t <REPEAT ()\n\t\t <COND (<NOT .F> <RETURN>)\n\t\t       (<G? <SET CNT <GETP .F ,P?COUNT>> 0>\n\t\t\t<REPEAT ()\n\t\t\t\t<SET SP .F>\n\t\t\t\t<PUT .TBL 1 .F>\n\t\t\t\t<SET NUM <+ .NUM 1>>\n\t\t\t\t<SET TBL <REST .TBL 2>>\n\t\t\t\t<COND (<L? <SET CNT <- .CNT 1>> 1>\n\t\t\t\t       <RETURN>)>>)>\n\t\t <SET F <NEXT? .F>>>\n\t <COND (<AND <G? .NUM 0>\n\t\t     <EQUAL? <GETP .SP ,P?COUNT> .NUM>>\n\t\t<PUTP .SP ,P?COUNT <- .NUM 1>>\n\t\t<RTRUE>)>\n\t <PUT ,FORGET-TBL 0 .NUM>\n\t <COND (<0? .NUM>\n\t\t<RTRUE>)>\n\t <REPEAT ()\n\t\t <COND (<NOT <EQUAL? <SET NSPL\n\t\t\t\t\t  <PICK-ONE ,FORGET-TBL>>\n\t\t\t\t     .SPL>>\n\t\t\t<PUTP .NSPL ,P?COUNT <- <GETP .NSPL ,P?COUNT> 1>>\n\t\t\t<RTRUE>)>>>"
  },
  "FORGET-ALL": {
   "name": "FORGET-ALL",
   "file": "globals.zil",
   "line": 1197,
   "endLine": 1204,
   "source": "<ROUTINE FORGET-ALL (\"AUX\" F)\n\t <SETG SPELL-ROOM ,SPELL-MAX>\n\t <SET F <FIRST? ,SPELL-BOOK>>\n\t <REPEAT ()\n\t\t <COND (<NOT .F> <RETURN>)\n\t\t       (ELSE\n\t\t\t<PUTP .F ,P?COUNT 0>\n\t\t\t<SET F <NEXT? .F>>)>>>"
  },
  "WEAR-OFF-SPELLS": {
   "name": "WEAR-OFF-SPELLS",
   "file": "globals.zil",
   "line": 1206,
   "endLine": 1223,
   "source": "<ROUTINE WEAR-OFF-SPELLS ()\n\t <SETG UNDER-INFLUENCE <>>\n\t <SETG FLYING <>>\n\t <SETG FWEEPED <>>\n\t <SETG VARDIKED <>>\n\t <SETG VILSTUED <>>\n\t <SETG BLORTED <>>\n\t <SETG FOOBLED <>>\n\t <DISABLE <INT I-FLY>>\n\t <DISABLE <INT I-UNFWEEP>>\n\t <DISABLE <INT I-UNVARDIK>>\n\t <DISABLE <INT I-BREATHE>>\n\t <DISABLE <INT I-UNBLORT>>\n\t <DISABLE <INT I-UNFOOBLE>>\n\t <SETG GNOME-SLEEPING T>\n\t <DISABLE <INT I-GNOME>>\n\t <MOVE ,PARK-GNOME ,DIAL>\n\t <DISABLE <INT I-PARK-GNOME>>>"
  },
  "READ-ABOUT-POTIONS": {
   "name": "READ-ABOUT-POTIONS",
   "file": "globals.zil",
   "line": 1248,
   "endLine": 1250,
   "source": "<ROUTINE READ-ABOUT-POTIONS (NUM \"AUX\" MAKER)\n\t <SET MAKER <GET ,POTION-MAKERS .NUM>>\n\t <TELL \"A potion made by \" .MAKER \".\" CR>>"
  },
  "POTION-POUR": {
   "name": "POTION-POUR",
   "file": "globals.zil",
   "line": 1259,
   "endLine": 1272,
   "source": "<ROUTINE POTION-POUR (VIAL)\n\t <COND (<NOT <HELD? .VIAL>>\n\t\t<THIS-IS-IT .VIAL>\n\t\t<TELL ,YNH>\n\t\t<ARTICLE .VIAL T>\n\t\t<TELL \".\" CR>\n\t\t<RTRUE>)>\n\t <MOVE ,PRSO ,DIAL>\n\t <TELL \"The potion evaporates before it even reaches\">\n\t <COND (,PRSI\n\t\t<ARTICLE ,PRSI T>\n\t\t<TELL \".\" CR>)\n\t       (T\n\t\t<TELL \" the ground.\" CR>)>>"
  },
  "TWO-POTIONS": {
   "name": "TWO-POTIONS",
   "file": "globals.zil",
   "line": 1276,
   "endLine": 1280,
   "source": "<ROUTINE TWO-POTIONS ()\n\t <TELL\n\"Uh oh. The \" D ,PRSO \" seems to be having an unpleasant reaction with\nthe \" D ,UNDER-INFLUENCE \". \" <PICK-ONE ,POTION-REACTIONS>>\n\t <JIGS-UP \".\">>"
  },
  "GLOBAL-SLEEP-F": {
   "name": "GLOBAL-SLEEP-F",
   "file": "globals.zil",
   "line": 1309,
   "endLine": 1316,
   "source": "<ROUTINE GLOBAL-SLEEP-F ()\n\t <COND (<VERB? WALK-TO TAKE>\n                <COND (<IN? ,PROTAGONIST ,YOUR-QUARTERS>\n\t\t       <MOVE ,PROTAGONIST ,BED>)>\n\t\t<PERFORM ,V?SLEEP>\n\t\t<RTRUE>)\n\t       (<VERB? FIND>\n\t\t<TELL \"Sleep anywhere.\" CR>)>>X"
  },
  "I-TIRED": {
   "name": "I-TIRED",
   "file": "globals.zil",
   "line": 1318,
   "endLine": 1349,
   "source": "<ROUTINE I-TIRED (\"AUX\" (FORG <>))\n\t <COND (<IN? ,PROTAGONIST ,BED>\n\t\t<TELL CR\n\"The bed is comfortable and you are becoming tired.\" CR>\n\t\t<SETG AWAKE <+ ,AWAKE 1>>\n\t\t<V-SLEEP T>\n\t\t<RFATAL>)>\n\t <COND (<G? ,LOAD-ALLOWED 10>\n\t\t<SETG LOAD-ALLOWED <- ,LOAD-ALLOWED 10>>)>\n\t <COND (<G? ,FUMBLE-NUMBER 1>\n\t\t<SETG FUMBLE-NUMBER <- ,FUMBLE-NUMBER 1>>)>\n\t <COND (<G? ,SPELL-MAX 1>\n\t\t<SETG SPELL-MAX <- ,SPELL-MAX 1>>\n\t\t<COND (<NOT <EQUAL? ,SPELL-ROOM 0>>\n\t\t       <SETG SPELL-ROOM <- ,SPELL-ROOM 1>>)>\n\t\t<COND (<EQUAL? ,SPELL-ROOM 0>\n\t\t       <SET FORG T>)>)>\n\t <ENABLE <QUEUE I-TIRED 8>>\n\t <SETG AWAKE <+ ,AWAKE 1>>\n\t <COND (<G? ,AWAKE 8>\n\t\t<COND (,FLYING\n\t\t       <ENABLE <QUEUE I-TIRED 14>>\n\t\t       <RFALSE>)>\n\t\t<TELL CR \"You drop in your tracks from exhaustion.\" CR CR>\n\t\t<V-SLEEP>\n\t\t<RFATAL>)\n\t       (T\n\t\t<TELL CR \"You are \" <GET ,TIRED-TELL ,AWAKE>>\n\t\t<COND (.FORG\n\t\t       <TELL\n\" and the spells you've memorized are becoming confused\">)>\n\t\t<TELL \".\" CR>)>>"
  },
  "I-HUNGER": {
   "name": "I-HUNGER",
   "file": "globals.zil",
   "line": 1371,
   "endLine": 1382,
   "source": "<ROUTINE I-HUNGER ()\n\t <COND (,BERZIOED\n\t\t<SETG HUNGER-LEVEL 0>\n\t\t<ENABLE <QUEUE I-HUNGER <+ 580 <RANDOM 80>>>>\n\t\t<RFALSE>)\n\t       (<EQUAL? ,HUNGER-LEVEL 6>\n\t\t<SETG THIRST-LEVEL 6>\n\t\t<I-THIRST>)\n\t       (T\n\t\t<ENABLE <QUEUE I-HUNGER 11>>\n\t\t<HUNGER-THIRST-WARNING ,HUNGER-LEVEL T>\n\t\t<SETG HUNGER-LEVEL <+ ,HUNGER-LEVEL 1>>)>>"
  },
  "I-THIRST": {
   "name": "I-THIRST",
   "file": "globals.zil",
   "line": 1384,
   "endLine": 1395,
   "source": "<ROUTINE I-THIRST ()\n\t <COND (,BERZIOED\n\t\t<SETG THIRST-LEVEL 0>\n\t\t<ENABLE <QUEUE I-THIRST <+ 540 <RANDOM 100>>>>\n\t\t<RFALSE>)\n\t       (<EQUAL? ,THIRST-LEVEL 6>\n\t\t<CRLF>\n\t\t<JIGS-UP \"You pass out from lack of food and water.\" T>)\n\t       (T\n\t\t<ENABLE <QUEUE I-THIRST 9>>\n\t\t<HUNGER-THIRST-WARNING ,THIRST-LEVEL>\t\t\n\t\t<SETG THIRST-LEVEL <+ ,THIRST-LEVEL 1>>)>>"
  },
  "HUNGER-THIRST-WARNING": {
   "name": "HUNGER-THIRST-WARNING",
   "file": "globals.zil",
   "line": 1397,
   "endLine": 1403,
   "source": "<ROUTINE HUNGER-THIRST-WARNING (LEVEL \"OPTIONAL\" (HUNGRY <>))\n\t <TELL CR \"You are now \" <GET ,HUNGER-THIRST-TABLE .LEVEL>>\n\t <COND (.HUNGRY\n\t\t<TELL \" hungry\">)\n\t       (T\n\t\t<TELL \" thirsty\">)>\n\t <TELL \".\" CR>>"
  },
  "SPELL-CHECK": {
   "name": "SPELL-CHECK",
   "file": "parser.zil",
   "line": 947,
   "endLine": 982,
   "source": "<ROUTINE SPELL-CHECK (TBL WRD \"AUX\" (OBJ <>))\n\t <COND (<EQUAL? .WRD ,W?GNUSTO>\n\t\t<SET OBJ ,GNUSTO-SPELL>)\n\t       (<EQUAL? .WRD ,W?FROTZ>\n\t\t<SET OBJ ,FROTZ-SPELL>)\n\t       (<EQUAL? .WRD ,W?REZROV>\n\t\t<SET OBJ ,REZROV-SPELL>)\n\t       (<EQUAL? .WRD ,W?IZYUK>\n\t\t<SET OBJ ,IZYUK-SPELL>)\n\t       (<EQUAL? .WRD ,W?AIMFIZ>\n\t\t<SET OBJ ,AIMFIZ-SPELL>)\n\t       (<EQUAL? .WRD ,W?FWEEP>\n\t\t<SET OBJ ,FWEEP-SPELL>)\n\t       (<EQUAL? .WRD ,W?SWANZO>\n\t\t<SET OBJ ,SWANZO-SPELL>)\n\t       (<EQUAL? .WRD ,W?GOLMAC>\n\t\t<SET OBJ ,GOLMAC-SPELL>)\n\t       (<EQUAL? .WRD ,W?VARDIK>\n\t\t<SET OBJ ,VARDIK-SPELL>)\n\t       (<EQUAL? .WRD ,W?PULVER>\n\t\t<SET OBJ ,PULVER-SPELL>)\n\t       (<EQUAL? .WRD ,W?MEEF>\n\t\t<SET OBJ ,MEEF-SPELL>)\n\t       (<EQUAL? .WRD ,W?VEZZA>\n\t\t<SET OBJ ,VEZZA-SPELL>)\n\t       (<EQUAL? .WRD ,W?GASPAR>\n\t\t<SET OBJ ,GASPAR-SPELL>)\n\t       (<EQUAL? .WRD ,W?YOMIN>\n\t\t<SET OBJ ,YOMIN-SPELL>)\n\t       (<EQUAL? .WRD ,W?YONK>\n\t\t<SET OBJ ,YONK-SPELL>)\n\t       (<EQUAL? .WRD ,W?MALYON>\n\t\t<SET OBJ ,MALYON-SPELL>)>\n\t <COND (.OBJ\n\t\t<OBJ-FOUND .OBJ .TBL>)>\n\t <RTRUE>>"
  },
  "PARSER": {
   "name": "PARSER",
   "file": "parser.zil",
   "line": 101,
   "endLine": 270,
   "source": "<ROUTINE PARSER (\"AUX\" (PTR ,P-LEXSTART) WRD (VAL 0) (VERB <>)\n\t\t       LEN (DIR <>) (NW 0) (LW 0) NUM SCNT (CNT -1)) \n\t<REPEAT ()\n\t\t<COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN> <RETURN>)\n\t\t      (T <PUT ,P-ITBL .CNT 0>)>>\n\t<SETG P-ADVERB <>>\n\t<SETG P-MERGED <>>\n\t<PUT ,P-PRSO ,P-MATCHLEN 0>\n\t<PUT ,P-PRSI ,P-MATCHLEN 0>\n\t<PUT ,P-BUTS ,P-MATCHLEN 0>\n\t<COND (<AND <NOT ,QUOTE-FLAG> <N==? ,WINNER ,PLAYER>>\n\t       <SETG WINNER ,PLAYER>\n\t       <COND (<NOT <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t      <SETG HERE <LOC ,WINNER>>)>\n\t       <SETG LIT <LIT? ,HERE>>)>\n\t<SETG PERFORMING-SPELL <>>\n\t<COND (,P-CONT\n\t       <SET PTR ,P-CONT>\n\t       <COND (<AND <NOT ,SUPER-BRIEF> <EQUAL? ,PLAYER ,WINNER>>\n\t\t      <CRLF>)>\n\t       <SETG P-CONT <>>)\n\t      (T\n\t       <SETG WINNER ,PLAYER>\n\t       <SETG QUOTE-FLAG <>>\n\t       <COND (<NOT <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t      <SETG HERE <LOC ,WINNER>>)>\n\t       <SETG LIT <LIT? ,HERE>>\n\t       <COND (<NOT ,SUPER-BRIEF> <CRLF>)>\n\t       <TELL \">\">\n\t       <READ ,P-INBUF ,P-LEXV>)>\n\t<SETG P-LEN <GETB ,P-LEXV ,P-LEXWORDS>>\n\t<COND (<ZERO? ,P-LEN> <TELL \"I beg your pardon?\" CR> <RFALSE>)>\n\t<SET LEN ,P-LEN>\n\t<SETG P-DIR <>>\n\t<SETG P-NCN 0>\n\t<SETG P-GETFLAGS 0>\n\t<REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <SETG QUOTE-FLAG <>>\n\t\t       <RETURN>)\n\t\t      (<OR <SET WRD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WRD <NUMBER? .PTR>>>\n\t\t       <COND (<AND <EQUAL? .WRD ,W?TO>\n\t\t\t\t   <EQUAL? .VERB ,ACT?TELL ;,ACT?ASK>>\n\t\t\t      <SET WRD ,W?QUOTE>)\n\t\t\t     (<AND <EQUAL? .WRD ,W?THEN>\n\t\t\t\t   <NOT .VERB>\n\t\t\t\t   <NOT ,QUOTE-FLAG> ;\"Last NOT added 7/3\">\n\t\t\t      <PUT ,P-ITBL ,P-VERB ,ACT?TELL>\n\t\t\t      <PUT ,P-ITBL ,P-VERBN 0>\n\t\t\t      <SET WRD ,W?QUOTE>)>\n\t\t       <COND ;(<AND <EQUAL? .WRD ,W?PERIOD>\n\t\t\t\t   <EQUAL? .LW ,W?MRS ,W?MR ,W?MS>>\n\t\t\t      <SET LW 0>)\n\t\t\t     (<OR <EQUAL? .WRD ,W?THEN ,W?PERIOD>\n\t\t\t\t  <EQUAL? .WRD ,W?QUOTE>> \n\t\t\t      <COND (<EQUAL? .WRD ,W?QUOTE>\n\t\t\t\t     <COND (,QUOTE-FLAG\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>)\n\t\t\t\t\t   (T\n\t\t\t\t\t    <SETG QUOTE-FLAG T>)>)>\n\t\t\t      <OR <ZERO? ,P-LEN>\n\t\t\t\t  <SETG P-CONT <+ .PTR ,P-LEXELEN>>>\n\t\t\t      <PUTB ,P-LEXV ,P-LEXWORDS ,P-LEN>\n\t\t\t      <RETURN>)\n\t\t\t     (<AND <SET VAL\n\t\t\t\t\t<WT? .WRD\n\t\t\t\t\t     ,PS?DIRECTION\n\t\t\t\t\t     ,P1?DIRECTION>>\n\t\t\t\t   <EQUAL? .VERB <> ,ACT?WALK ;,ACT?FLY>\n\t\t\t\t   <OR <EQUAL? .LEN 1>\n\t\t\t\t       <AND <EQUAL? .LEN 2>\n\t\t\t\t\t    <EQUAL? .VERB ,ACT?WALK ;,ACT?FLY>>\n\t\t\t\t       <AND <EQUAL? <SET NW\n\t\t\t\t\t\t     <GET ,P-LEXV\n\t\t\t\t\t\t\t  <+ .PTR ,P-LEXELEN>>>\n\t\t\t\t\t            ,W?THEN\n\t\t\t\t\t            ,W?PERIOD\n\t\t\t\t\t            ,W?QUOTE>\n\t\t\t\t\t    <NOT <L? .LEN 2>>>\n\t\t\t\t       <AND ,QUOTE-FLAG\n\t\t\t\t\t    <EQUAL? .LEN 2>\n\t\t\t\t\t    <EQUAL? .NW ,W?QUOTE>>\n\t\t\t\t       <AND <G? .LEN 2>\n\t\t\t\t\t    <EQUAL? .NW ,W?COMMA ,W?AND>>>>\n\t\t\t      <SET DIR .VAL>\n\t\t\t      <COND (<EQUAL? .NW ,W?COMMA ,W?AND>\n\t\t\t\t     <PUT ,P-LEXV\n\t\t\t\t\t  <+ .PTR ,P-LEXELEN>\n\t\t\t\t\t  ,W?THEN>)>\n\t\t\t      <COND (<NOT <G? .LEN 2>>\n\t\t\t\t     <SETG QUOTE-FLAG <>>\n\t\t\t\t     <RETURN>)>)\n\t\t\t     (<AND <SET VAL <WT? .WRD ,PS?VERB ,P1?VERB>>\n\t\t\t\t   <NOT .VERB> ;<OR <NOT .VERB>\n\t\t\t\t       <EQUAL? .VERB ,ACT?WHAT>>>\n\t\t\t      <SET VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERBN ,P-VTBL>\n\t\t\t      <PUT ,P-VTBL 0 .WRD>\n\t\t\t      <PUTB ,P-VTBL 2 <GETB ,P-LEXV\n\t\t\t\t\t\t    <SET NUM\n\t\t\t\t\t\t\t <+ <* .PTR 2> 2>>>>\n\t\t\t      <PUTB ,P-VTBL 3 <GETB ,P-LEXV <+ .NUM 1>>>)\n\t\t\t     (<OR <SET VAL <WT? .WRD ,PS?PREPOSITION 0>>\n\t\t\t\t  <AND <OR <EQUAL? .WRD ,W?ALL ,W?ONE ,W?BOTH\n\t\t\t\t\t\t        ;,W?A>\n\t\t\t\t\t   <WT? .WRD ,PS?ADJECTIVE>\n\t\t\t\t\t   <WT? .WRD ,PS?OBJECT>>\n\t\t\t\t       <SET VAL 0>>>\n\t\t\t      <COND (<AND <G? ,P-LEN 0>\n\t\t\t\t\t  <EQUAL? <GET ,P-LEXV\n\t\t\t\t\t\t    <+ .PTR ,P-LEXELEN>>\n\t\t\t\t\t       ,W?OF>\n\t\t\t\t\t  ;<NOT <EQUAL? .VERB ,ACT?ACCUSE>>\n\t\t\t\t\t  <ZERO? .VAL>\n\t\t\t\t\t  <NOT\n\t\t\t\t\t   <EQUAL? .WRD ,W?ALL ,W?ONE ,W?A>>\n\t\t\t\t\t  <NOT\n\t\t\t\t\t   <EQUAL? .WRD ,W?BOTH>>>)\n\t\t\t\t    (<AND <NOT <ZERO? .VAL>>\n\t\t\t\t          <OR <ZERO? ,P-LEN>\n\t\t\t\t\t      <EQUAL? <GET ,P-LEXV <+ .PTR 2>>\n\t\t\t\t\t\t      ,W?THEN ,W?PERIOD>>>\n\t\t\t\t     <COND (<L? ,P-NCN 2>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1 .VAL>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1N .WRD>)>)\n\t\t\t\t    (<EQUAL? ,P-NCN 2>\n\t\t\t\t     <TELL\n\"I found too many nouns in that sentence.\" CR>\n\t\t\t\t     <RFALSE>)\n\t\t\t\t    (T\n\t\t\t\t     <SETG P-NCN <+ ,P-NCN 1>>\n\t\t\t\t     <OR <SET PTR <CLAUSE .PTR .VAL .WRD>>\n\t\t\t\t\t <RFALSE>>\n\t\t\t\t     <COND (<L? .PTR 0>\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>\n\t\t\t\t\t    <RETURN>)>)>)\n\t\t\t     ;(<OR <EQUAL? .WRD ,W?CAREFULLY ,W?QUIETLY>\n\t\t\t\t  <EQUAL? .WRD ,W?SLOWLY ,W?QUICKLY\n\t\t\t\t\t        ,W?BRIEFLY>>\n\t\t\t      <SETG P-ADVERB .WRD>)\n\t\t\t     (<WT? .WRD ,PS?BUZZ-WORD>)\n\t\t\t     (<AND <EQUAL? .VERB ,ACT?TELL>\n\t\t\t\t   <WT? .WRD ,PS?VERB ,P1?VERB>>\n\t\t\t      <TELL\n\"Please consult your manual for the correct way to talk to characters.\" CR>\n\t\t\t      <RFALSE>)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T\n\t\t       <UNKNOWN-WORD .PTR>\n\t\t       <RFALSE>)>\n\t\t<SET LW .WRD>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>\n\t<COND (.DIR\n\t       <SETG PRSA ,V?WALK>\n\t       ;<COND (<EQUAL? .VERB ,ACT?FLY>\n\t\t      <SETG TRY-FLY T>)\n\t\t     (T\n\t\t      <SETG TRY-FLY <>>)>\n\t       <SETG PRSO .DIR>\n\t       <SETG P-WALK-DIR .DIR>\n\t       <RETURN T>)>\n\t<SETG P-WALK-DIR <>>\n\t<COND (,P-OFLAG <ORPHAN-MERGE>)>\n\t;<COND (<EQUAL? <GET ,P-ITBL ,P-VERB> 0> <PUT ,P-ITBL ,P-VERB ,ACT?CALL>)>\n\t<COND (<AND <SYNTAX-CHECK> <SNARF-OBJECTS> <MANY-CHECK> <TAKE-CHECK>>\n\t       T)>>"
  },
  "STUFF": {
   "name": "STUFF",
   "file": "gparser.zil",
   "line": 406,
   "endLine": 418,
   "source": "<ROUTINE STUFF (SRC DEST \"OPTIONAL\" (MAX 29) \"AUX\" (PTR ,P-LEXSTART) (CTR 1)\n\t\t\t\t\t\t   BPTR)\n\t <PUTB .DEST 0 <GETB .SRC 0>>\n\t <PUTB .DEST 1 <GETB .SRC 1>>\n\t <REPEAT ()\n\t  <PUT .DEST .PTR <GET .SRC .PTR>>\n\t  <SET BPTR <+ <* .PTR 2> 2>>\n\t  <PUTB .DEST .BPTR <GETB .SRC .BPTR>>\n\t  <SET BPTR <+ <* .PTR 2> 3>>\n\t  <PUTB .DEST .BPTR <GETB .SRC .BPTR>>\n\t  <SET PTR <+ .PTR ,P-LEXELEN>>\n\t  <COND (<IGRTR? CTR .MAX>\n\t\t <RETURN>)>>>"
  },
  "INBUF-STUFF": {
   "name": "INBUF-STUFF",
   "file": "gparser.zil",
   "line": 421,
   "endLine": 425,
   "source": "<ROUTINE INBUF-STUFF (SRC DEST \"AUX\" CNT)\n\t <SET CNT <- <GETB .SRC 0> 1>>\n\t <REPEAT ()\n\t\t <PUTB .DEST .CNT <GETB .SRC .CNT>>\n\t\t <COND (<DLESS? CNT 0> <RETURN>)>>>"
  },
  "INBUF-ADD": {
   "name": "INBUF-ADD",
   "file": "gparser.zil",
   "line": 429,
   "endLine": 442,
   "source": "<ROUTINE INBUF-ADD (LEN BEG SLOT \"AUX\" DBEG (CTR 0) TMP)\n\t <COND (<SET TMP <GET ,OOPS-TABLE ,O-END>>\n\t\t<SET DBEG .TMP>)\n\t       (T\n\t\t<SET DBEG <+ <GETB ,AGAIN-LEXV\n\t\t\t\t   <SET TMP <GET ,OOPS-TABLE ,O-LENGTH>>>\n\t\t\t     <GETB ,AGAIN-LEXV <+ .TMP 1>>>>)>\n\t <PUT ,OOPS-TABLE ,O-END <+ .DBEG .LEN>>\n\t <REPEAT ()\n\t  <PUTB ,OOPS-INBUF <+ .DBEG .CTR> <GETB ,P-INBUF <+ .BEG .CTR>>>\n\t  <SET CTR <+ .CTR 1>>\n\t  <COND (<EQUAL? .CTR .LEN> <RETURN>)>>\n\t <PUTB ,AGAIN-LEXV .SLOT .DBEG>\n\t <PUTB ,AGAIN-LEXV <- .SLOT 1> .LEN>>"
  },
  "WT?": {
   "name": "WT?",
   "file": "parser.zil",
   "line": 281,
   "endLine": 288,
   "source": "<ROUTINE WT? (PTR BIT \"OPTIONAL\" (B1 5) \"AUX\" (OFFS ,P-P1OFF) TYP) \n\t<COND (<BTST <SET TYP <GETB .PTR ,P-PSOFF>> .BIT>\n\t       <COND (<G? .B1 4>\n\t\t      <RTRUE>)\n\t\t     (T\n\t\t      <SET TYP <BAND .TYP ,P-P1BITS>>\n\t\t      <COND (<NOT <EQUAL? .TYP .B1>> <SET OFFS <+ .OFFS 1>>)>\n\t\t      <GETB .PTR .OFFS>)>)>>"
  },
  "CLAUSE": {
   "name": "CLAUSE",
   "file": "parser.zil",
   "line": 291,
   "endLine": 369,
   "source": "<ROUTINE CLAUSE (PTR VAL WRD \"AUX\" OFF NUM (ANDFLG <>) (FIRST?? T) NW (LW 0))\n\t<SET OFF <* <- ,P-NCN 1> 2>>\n\t<COND (<NOT <EQUAL? .VAL 0>>\n\t       <PUT ,P-ITBL <SET NUM <+ ,P-PREP1 .OFF>> .VAL>\n\t       <PUT ,P-ITBL <+ .NUM 1> .WRD>\n\t       <SET PTR <+ .PTR ,P-LEXELEN>>)\n\t      (T <SETG P-LEN <+ ,P-LEN 1>>)>\n\t<COND (<ZERO? ,P-LEN> <SETG P-NCN <- ,P-NCN 1>> <RETURN -1>)>\n\t<PUT ,P-ITBL <SET NUM <+ ,P-NC1 .OFF>> <REST ,P-LEXV <* .PTR 2>>>\n\t<COND (<EQUAL? <GET ,P-LEXV .PTR> ,W?THE ,W?A ,W?AN>\n\t       <PUT ,P-ITBL .NUM <REST <GET ,P-ITBL .NUM> 4>>)>\n\t<REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <PUT ,P-ITBL <+ .NUM 1> <REST ,P-LEXV <* .PTR 2>>>\n\t\t       <RETURN -1>)>\n\t\t<COND (<OR <SET WRD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WRD <NUMBER? .PTR>>>\n\t\t       <COND (<ZERO? ,P-LEN> <SET NW 0>)\n\t\t\t     (T <SET NW <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>>)>\n\t\t       ;<COND (<AND <EQUAL? .WRD ,W?OF>\n\t\t\t\t   <EQUAL? <GET ,P-ITBL ,P-VERB> ,ACT?ACCUSE>>\n\t\t\t      <PUT ,P-LEXV .PTR ,W?WITH>\n\t\t\t      <SET WRD ,W?WITH>)>\n\t\t       <COND ;(<AND <EQUAL? .WRD ,W?PERIOD>\n\t\t\t\t   <EQUAL? .LW ,W?MRS ,W?MR ,W?MS>>\n\t\t\t      <SET LW 0>)\n\t\t\t     (<EQUAL? .WRD ,W?AND ,W?COMMA> <SET ANDFLG T>)\n\t\t\t     (<EQUAL? .WRD ,W?ALL ,W?ONE ,W?BOTH>\n\t\t\t      <COND (<EQUAL? .NW ,W?OF>\n\t\t\t\t     <SETG P-LEN <- ,P-LEN 1>>\n\t\t\t\t     <SET PTR <+ .PTR ,P-LEXELEN>>)>)\n\t\t\t     (<OR <EQUAL? .WRD ,W?THEN ,W?PERIOD>\n\t\t\t\t  <AND <WT? .WRD ,PS?PREPOSITION>\n\t\t\t\t       <GET ,P-ITBL ,P-VERB>\n\t\t\t\t          ;\"ADDED 4/27 FOR TURTLE,UP\"\n\t\t\t\t       <NOT .FIRST??>>>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 1>>\n\t\t\t      <PUT ,P-ITBL\n\t\t\t\t   <+ .NUM 1>\n\t\t\t\t   <REST ,P-LEXV <* .PTR 2>>>\n\t\t\t      <RETURN <- .PTR ,P-LEXELEN>>)\n\t\t\t     (<WT? .WRD ,PS?OBJECT>\n\t\t\t      <COND ;\"First clause added 1/10/84 to fix\n\t\t\t\t      'verb AT synonym OF synonym' bug\"\n\t\t\t            (<AND <G? ,P-LEN 0>\n\t\t\t\t\t  <EQUAL? .NW ,W?OF>\n\t\t\t\t\t  <NOT <EQUAL? .WRD ,W?ALL ,W?ONE>>>\n\t\t\t\t     T)\n\t\t\t\t    (<AND <WT? .WRD\n\t\t\t\t\t       ,PS?ADJECTIVE\n\t\t\t\t\t       ,P1?ADJECTIVE>\n\t\t\t\t\t  <NOT <EQUAL? .NW 0>>\n\t\t\t\t\t  <WT? .NW ,PS?OBJECT>>)\n\t\t\t\t    (<AND <NOT .ANDFLG>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?BUT ,W?EXCEPT>>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t\t     <PUT ,P-ITBL\n\t\t\t\t\t  <+ .NUM 1>\n\t\t\t\t\t  <REST ,P-LEXV <* <+ .PTR 2> 2>>>\n\t\t\t\t     <RETURN .PTR>)\n\t\t\t\t    (T <SET ANDFLG <>>)>)\n\t\t\t     (<AND <OR ,P-MERGED\n\t\t\t\t       ,P-OFLAG\n\t\t\t\t       <NOT <EQUAL? <GET ,P-ITBL ,P-VERB> 0>>>\n\t\t\t\t   <OR <WT? .WRD ,PS?ADJECTIVE>\n\t\t\t\t       <WT? .WRD ,PS?BUZZ-WORD>>>)\n\t\t\t     (<AND .ANDFLG\n\t\t\t\t   <EQUAL? <GET ,P-ITBL ,P-VERB> 0>>\n\t\t\t      <SET PTR <- .PTR 4>>\n\t\t\t      <PUT ,P-LEXV <+ .PTR 2> ,W?THEN>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 2>>)\n\t\t\t     (<WT? .WRD ,PS?PREPOSITION> T)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T <UNKNOWN-WORD .PTR> <RFALSE>)>\n\t\t<SET LW .WRD>\n\t\t<SET FIRST?? <>>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>> "
  },
  "NUMBER?": {
   "name": "NUMBER?",
   "file": "parser.zil",
   "line": 371,
   "endLine": 393,
   "source": "<ROUTINE NUMBER? (PTR \"AUX\" CNT BPTR CHR (SUM 0) (TIM <>))\n\t <SET CNT <GETB <REST ,P-LEXV <* .PTR 2>> 2>>\n\t <SET BPTR <GETB <REST ,P-LEXV <* .PTR 2>> 3>>\n\t <REPEAT ()\n\t\t <COND (<L? <SET CNT <- .CNT 1>> 0> <RETURN>)\n\t\t       (T\n\t\t\t<SET CHR <GETB ,P-INBUF .BPTR>>\n\t\t\t<COND (<EQUAL? .CHR 58>\n\t\t\t       <SET TIM .SUM>\n\t\t\t       <SET SUM 0>)\n\t\t\t      (<G? .SUM 10000> <RFALSE>)\n\t\t\t      (<AND <L? .CHR 58> <G? .CHR 47>>\n\t\t\t       <SET SUM <+ <* .SUM 10> <- .CHR 48>>>)\n\t\t\t      (T <RFALSE>)>\n\t\t\t<SET BPTR <+ .BPTR 1>>)>>\n\t <PUT ,P-LEXV .PTR ,W?INTNUM>\n\t <COND (<G? .SUM 1000> <RFALSE>)\n\t       (.TIM\n\t\t<COND (<L? .TIM 8> <SET TIM <+ .TIM 12>>)\n\t\t      (<G? .TIM 23> <RFALSE>)>\n\t\t<SET SUM <+ .SUM <* .TIM 60>>>)>\n\t <SETG P-NUMBER .SUM>\n\t ,W?INTNUM>"
  },
  "ORPHAN-MERGE": {
   "name": "ORPHAN-MERGE",
   "file": "parser.zil",
   "line": 399,
   "endLine": 452,
   "source": "<ROUTINE ORPHAN-MERGE (\"AUX\" (CNT -1) TEMP VERB BEG END (ADJ <>) WRD)\n\t <SETG P-OFLAG <>>\n\t <COND\n\t  (<AND <NOT <ZERO? <SET VERB <GET ,P-ITBL ,P-VERB>>>>\n\t\t<NOT <EQUAL? .VERB <GET ,P-OTBL ,P-VERB>>>>\n\t   <RFALSE>)\n\t  (<EQUAL? ,P-NCN 2>\n\t   <RFALSE>)\n\t  (<EQUAL? <GET ,P-OTBL ,P-NC1> 1>\n\t   <COND (<OR <EQUAL? <SET TEMP <GET ,P-ITBL ,P-PREP1>>\n\t\t\t   <GET ,P-OTBL ,P-PREP1>>\n\t\t      <ZERO? .TEMP>>\n\t\t  <PUT ,P-OTBL ,P-NC1 <GET ,P-ITBL ,P-NC1>>\n\t\t  <PUT ,P-OTBL ,P-NC1L <GET ,P-ITBL ,P-NC1L>>)\n\t\t (T <RFALSE>)>)\n\t  (<EQUAL? <GET ,P-OTBL ,P-NC2> 1>\n\t   <COND (<OR <EQUAL? <SET TEMP <GET ,P-ITBL ,P-PREP1>>\n\t\t\t   <GET ,P-OTBL ,P-PREP2>>\n\t\t      <ZERO? .TEMP>>\n\t\t  <PUT ,P-OTBL ,P-NC2 <GET ,P-ITBL ,P-NC1>>\n\t\t  <PUT ,P-OTBL ,P-NC2L <GET ,P-ITBL ,P-NC1L>>\n\t\t  <SETG P-NCN 2>)\n\t\t (T <RFALSE>)>)\n\t  (,P-ACLAUSE\n\t   <COND\n\t    (<NOT <EQUAL? ,P-NCN 1>> <SETG P-ACLAUSE <>> <RFALSE>)\n\t    (T\n\t     <SET BEG <GET ,P-ITBL ,P-NC1>>\n\t     <SET END <GET ,P-ITBL ,P-NC1L>>\n\t     <REPEAT ()\n\t\t     <COND (<EQUAL? .BEG .END>\n\t\t\t    <COND (.ADJ\n\t\t\t\t   <ACLAUSE-WIN .ADJ>\n\t\t\t\t   <RETURN>)\n\t\t\t\t  (T\n\t\t\t\t   <SETG P-ACLAUSE <>>\n\t\t\t\t   <RFALSE>)>)\n\t\t\t   (<AND <BTST <GETB <SET WRD <GET .BEG 0>> ,P-PSOFF>\n\t\t\t\t       ,PS?ADJECTIVE>\n\t\t\t\t <NOT .ADJ>>\n\t\t\t    <SET ADJ .WRD>)\n\t\t\t   (<OR <BTST <GETB .WRD ,P-PSOFF> ,PS?OBJECT>\n\t\t\t\t<EQUAL? .WRD ,W?ONE>>\n\t\t\t    <COND (<NOT <EQUAL? .WRD ,P-ANAM ,W?ONE>> <RFALSE>)\n\t\t\t\t  (T\n\t\t\t\t   <ACLAUSE-WIN .ADJ>\n\t\t\t\t   <RETURN>)>)>\n\t\t     <SET BEG <REST .BEG ,P-WORDLEN>>>)>)>\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN>\n\t\t\t<SETG P-MERGED T>\n\t\t\t<RTRUE>)\n\t\t       (T <PUT ,P-ITBL .CNT <GET ,P-OTBL .CNT>>)>>\n\t T>"
  },
  "ACLAUSE-WIN": {
   "name": "ACLAUSE-WIN",
   "file": "parser.zil",
   "line": 454,
   "endLine": 460,
   "source": "<ROUTINE ACLAUSE-WIN (ADJ)\n\t <SETG P-CCSRC ,P-OTBL>\n\t <CLAUSE-COPY ,P-ACLAUSE <+ ,P-ACLAUSE 1> .ADJ>\n\t <AND <NOT <EQUAL? <GET ,P-OTBL ,P-NC2> 0>>\n\t      <SETG P-NCN 2>>\n\t <SETG P-ACLAUSE <>>\n\t <RTRUE>>"
  },
  "NCLAUSE-WIN": {
   "name": "NCLAUSE-WIN",
   "file": "gparser.zil",
   "line": 667,
   "endLine": 675,
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
   "endLine": 478,
   "source": "<ROUTINE UNKNOWN-WORD (PTR \"AUX\" BUF)\n\t<TELL \"I don't know the word \\\"\">\n\t<WORD-PRINT <GETB <REST ,P-LEXV <SET BUF <* .PTR 2>>> 2>\n\t\t    <GETB <REST ,P-LEXV .BUF> 3>>\n\t<TELL \"\\\".\" CR>\n\t<SETG QUOTE-FLAG <>>\n\t<SETG P-OFLAG <>>>"
  },
  "CANT-USE": {
   "name": "CANT-USE",
   "file": "parser.zil",
   "line": 480,
   "endLine": 486,
   "source": "<ROUTINE CANT-USE (PTR \"AUX\" BUF)\n\t<TELL \"I can't use the word \\\"\">\n\t<WORD-PRINT <GETB <REST ,P-LEXV <SET BUF <* .PTR 2>>> 2>\n\t\t    <GETB <REST ,P-LEXV .BUF> 3>>\n\t<TELL \"\\\" here.\" CR>\n\t<SETG QUOTE-FLAG <>>\n\t<SETG P-OFLAG <>>>"
  },
  "SYNTAX-CHECK": {
   "name": "SYNTAX-CHECK",
   "file": "parser.zil",
   "line": 515,
   "endLine": 580,
   "source": "<ROUTINE SYNTAX-CHECK\n\t (\"AUX\" SYN LEN NUM OBJ (DRIVE1 <>) (DRIVE2 <>) PREP VERB TMP)\n\t<COND (<ZERO? <SET VERB <GET ,P-ITBL ,P-VERB>>>\n\t       <TELL \"I can't find a verb in that sentence!\" CR>\n\t       <RFALSE>)>\n\t<SET SYN <GET ,VERBS <- 255 .VERB>>>\n\t<SET LEN <GETB .SYN 0>>\n\t<SET SYN <REST .SYN>>\n\t<REPEAT ()\n\t\t<SET NUM <BAND <GETB .SYN ,P-SBITS> ,P-SONUMS>>\n\t\t<COND (<G? ,P-NCN .NUM> T)\n\t\t      (<AND <NOT <L? .NUM 1>>\n\t\t\t    <ZERO? ,P-NCN>\n\t\t\t    <OR <ZERO? <SET PREP <GET ,P-ITBL ,P-PREP1>>>\n\t\t\t\t<EQUAL? .PREP <GETB .SYN ,P-SPREP1>>>>\n\t\t       <SET DRIVE1 .SYN>)\n\t\t      (<EQUAL? <GETB .SYN ,P-SPREP1> <GET ,P-ITBL ,P-PREP1>>\n\t\t       <COND (<AND <EQUAL? .NUM 2> <EQUAL? ,P-NCN 1>>\n\t\t\t      <SET DRIVE2 .SYN>)\n\t\t\t     (<EQUAL? <GETB .SYN ,P-SPREP2> <GET ,P-ITBL ,P-PREP2>>\n\t\t\t      <SYNTAX-FOUND .SYN>\n\t\t\t      <RTRUE>)>)>\n\t\t<COND (<DLESS? LEN 1>\n\t\t       <COND (<OR .DRIVE1 .DRIVE2> <RETURN>)\n\t\t\t     (T\n\t\t\t      <TELL \"I don't understand that sentence.\" CR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T <SET SYN <REST .SYN ,P-SYNLEN>>)>>\n\t<COND (<AND .DRIVE1\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE1 ,P-SFWIM1>\n\t\t\t       <GETB .DRIVE1 ,P-SLOC1>\n\t\t\t       <GETB .DRIVE1 ,P-SPREP1>>>>\n\t       <PUT ,P-PRSO ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSO 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE1>)\n\t      (<AND .DRIVE2\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE2 ,P-SFWIM2>\n\t\t\t       <GETB .DRIVE2 ,P-SLOC2>\n\t\t\t       <GETB .DRIVE2 ,P-SPREP2>>>>\n\t       <PUT ,P-PRSI ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSI 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE2>)\n\t      (<EQUAL? .VERB ,ACT?FIND ;,ACT?WHAT>\n\t       <TELL \"I can't answer that question.\" CR>\n\t       <RFALSE>)\n\t      (<NOT <EQUAL? ,WINNER ,PROTAGONIST>>\n\t       <CANT-ORPHAN>)\n\t      (T\n\t       <ORPHAN .DRIVE1 .DRIVE2>\n\t       <TELL \"What do you want to \">\n\t       <SET TMP <GET ,P-OTBL ,P-VERBN>>\n\t       <COND (<EQUAL? .TMP 0> <TELL \"tell\">)\n\t\t     (<ZERO? <GETB ,P-VTBL 2>>\n\t\t      <PRINTB <GET .TMP 0>>)\n\t\t     (T\n\t\t      <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>\n\t\t      <PUTB ,P-VTBL 2 0>)>\n\t       <COND (.DRIVE2\n\t\t      <CLAUSE-PRINT ,P-NC1 ,P-NC1L>)>\n\t       <SETG P-OFLAG T>\n\t       <PREP-PRINT <COND (.DRIVE1 <GETB .DRIVE1 ,P-SPREP1>)\n\t\t\t\t (T <GETB .DRIVE2 ,P-SPREP2>)>>\n\t       <TELL \"?\" CR>\n\t       <RFALSE>)>> "
  },
  "CANT-ORPHAN": {
   "name": "CANT-ORPHAN",
   "file": "parser.zil",
   "line": 582,
   "endLine": 584,
   "source": "<ROUTINE CANT-ORPHAN ()\n\t <TELL \"\\\"I don't understand! What are you referring to?\\\"\" CR>\n\t <RFALSE>>"
  },
  "ORPHAN": {
   "name": "ORPHAN",
   "file": "parser.zil",
   "line": 587,
   "endLine": 600,
   "source": "<ROUTINE ORPHAN (D1 D2 \"AUX\" (CNT -1))\n\t<PUT ,P-OCLAUSE ,P-MATCHLEN 0>\n\t<SETG P-CCSRC ,P-ITBL>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT ,P-ITBLLEN> <RETURN>)\n\t\t      (T <PUT ,P-OTBL .CNT <GET ,P-ITBL .CNT>>)>>\n\t<COND (<EQUAL? ,P-NCN 2> <CLAUSE-COPY ,P-NC2 ,P-NC2L>)>\n\t<COND (<NOT <L? ,P-NCN 1>> <CLAUSE-COPY ,P-NC1 ,P-NC1L>)>\n\t<COND (.D1\n\t       <PUT ,P-OTBL ,P-PREP1 <GETB .D1 ,P-SPREP1>>\n\t       <PUT ,P-OTBL ,P-NC1 1>)\n\t      (.D2\n\t       <PUT ,P-OTBL ,P-PREP2 <GETB .D2 ,P-SPREP2>>\n\t       <PUT ,P-OTBL ,P-NC2 1>)>> "
  },
  "THING-PRINT": {
   "name": "THING-PRINT",
   "file": "gparser.zil",
   "line": 835,
   "endLine": 842,
   "source": "<ROUTINE THING-PRINT (PRSO? \"OPTIONAL\" (THE? <>) \"AUX\" BEG END)\n\t <COND (.PRSO?\n\t\t<SET BEG <GET ,P-ITBL ,P-NC1>>\n\t\t<SET END <GET ,P-ITBL ,P-NC1L>>)\n\t       (ELSE\n\t\t<SET BEG <GET ,P-ITBL ,P-NC2>>\n\t\t<SET END <GET ,P-ITBL ,P-NC2L>>)>\n\t <BUFFER-PRINT .BEG .END .THE?>>"
  },
  "BUFFER-PRINT": {
   "name": "BUFFER-PRINT",
   "file": "parser.zil",
   "line": 605,
   "endLine": 625,
   "source": "<ROUTINE BUFFER-PRINT (BEG END CP \"AUX\" (NOSP <>) WRD (FIRST?? T) (PN <>))\n\t <REPEAT ()\n\t\t<COND (<EQUAL? .BEG .END> <RETURN>)\n\t\t      (T\n\t\t       <COND (.NOSP <SET NOSP <>>)\n\t\t\t     (T <TELL \" \">)>\n\t\t       <COND (<EQUAL? <SET WRD <GET .BEG 0>> ,W?PERIOD>\n\t\t\t      <SET NOSP T>)\n\t\t\t     (T\n\t\t\t      <COND (<AND .FIRST?? <NOT .PN> .CP>\n\t\t\t\t     <TELL \"the \">)>\n\t\t\t      <COND (<OR ,P-OFLAG ,P-MERGED> <PRINTB .WRD>)\n\t\t\t\t    (<AND <EQUAL? .WRD ,W?IT>\n\t\t\t\t\t  <ACCESSIBLE? ,P-IT-OBJECT>\n\t\t\t\t\t  ;<EQUAL? ,P-IT-LOC ,HERE>>\n\t\t\t\t     <PRINTD ,P-IT-OBJECT>)\n\t\t\t\t    (T\n\t\t\t\t     <WORD-PRINT <GETB .BEG 2>\n\t\t\t\t\t\t <GETB .BEG 3>>)>\n\t\t\t      <SET FIRST?? <>>)>)>\n\t\t<SET BEG <REST .BEG ,P-WORDLEN>>>>"
  },
  "PREP-PRINT": {
   "name": "PREP-PRINT",
   "file": "parser.zil",
   "line": 631,
   "endLine": 638,
   "source": "<ROUTINE PREP-PRINT (PREP \"AUX\" WRD)\n\t<COND (<NOT <ZERO? .PREP>>\n\t       <TELL \" \">\n\t       <COND (<EQUAL? .PREP ,PR?THROUGH>\n\t\t      <TELL \"through\">)\n\t\t     (T\n\t\t      <SET WRD <PREP-FIND .PREP>>\n\t\t      <PRINTB .WRD>)>)>>    "
  },
  "CLAUSE-COPY": {
   "name": "CLAUSE-COPY",
   "file": "parser.zil",
   "line": 640,
   "endLine": 659,
   "source": "<ROUTINE CLAUSE-COPY (BPTR EPTR \"OPTIONAL\" (INSRT <>) \"AUX\" BEG END)\n\t<SET BEG <GET ,P-CCSRC .BPTR>>\n\t<SET END <GET ,P-CCSRC .EPTR>>\n\t<PUT ,P-OTBL\n\t     .BPTR\n\t     <REST ,P-OCLAUSE\n\t\t   <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN> 2>>>\n\t<REPEAT ()\n\t\t<COND (<EQUAL? .BEG .END>\n\t\t       <PUT ,P-OTBL\n\t\t\t    .EPTR\n\t\t\t    <REST ,P-OCLAUSE\n\t\t\t\t  <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN>\n\t\t\t\t     2>>>\n\t\t       <RETURN>)\n\t\t      (T\n\t\t       <COND (<AND .INSRT <EQUAL? ,P-ANAM <GET .BEG 0>>>\n\t\t\t      <CLAUSE-ADD .INSRT>)>\n\t\t       <CLAUSE-ADD <GET .BEG 0>>)>\n\t\t<SET BEG <REST .BEG ,P-WORDLEN>>>>  "
  },
  "CLAUSE-ADD": {
   "name": "CLAUSE-ADD",
   "file": "parser.zil",
   "line": 662,
   "endLine": 666,
   "source": "<ROUTINE CLAUSE-ADD (WRD \"AUX\" PTR)\n\t<SET PTR <+ <GET ,P-OCLAUSE ,P-MATCHLEN> 2>>\n\t<PUT ,P-OCLAUSE <- .PTR 1> .WRD>\n\t<PUT ,P-OCLAUSE .PTR 0>\n\t<PUT ,P-OCLAUSE ,P-MATCHLEN .PTR>>   "
  },
  "PREP-FIND": {
   "name": "PREP-FIND",
   "file": "parser.zil",
   "line": 668,
   "endLine": 673,
   "source": "<ROUTINE PREP-FIND (PREP \"AUX\" (CNT 0) SIZE)\n\t<SET SIZE <* <GET ,PREPOSITIONS 0> 2>>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT .SIZE> <RFALSE>)\n\t\t      (<EQUAL? <GET ,PREPOSITIONS .CNT> .PREP>\n\t\t       <RETURN <GET ,PREPOSITIONS <- .CNT 1>>>)>>>  "
  },
  "SYNTAX-FOUND": {
   "name": "SYNTAX-FOUND",
   "file": "parser.zil",
   "line": 675,
   "endLine": 677,
   "source": "<ROUTINE SYNTAX-FOUND (SYN)\n\t<SETG P-SYNTAX .SYN>\n\t<SETG PRSA <GETB .SYN ,P-SACTION>>>   "
  },
  "GWIM": {
   "name": "GWIM",
   "file": "parser.zil",
   "line": 681,
   "endLine": 702,
   "source": "<ROUTINE GWIM (GBIT LBIT PREP \"AUX\" OBJ)\n\t<COND (<EQUAL? .GBIT ,RLANDBIT>\n\t       <RETURN ,ROOMS>)>\n\t<SETG P-GWIMBIT .GBIT>\n\t<SETG P-SLOCBITS .LBIT>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<COND (<GET-OBJECT ,P-MERGE <>>\n\t       <SETG P-GWIMBIT 0>\n\t       <COND (<EQUAL? <GET ,P-MERGE ,P-MATCHLEN> 1>\n\t\t      <SET OBJ <GET ,P-MERGE 1>>\n\t\t      <TELL \"(\">\n\t\t      <COND (<NOT <ZERO? .PREP>>\n\t\t\t     <PRINTB <SET PREP <PREP-FIND .PREP>>>\n\t\t\t     <COND (<EQUAL? .PREP ,W?OUT>\n\t\t\t\t    <TELL \" of\">)>\n\t\t\t     <COND (<NOT <FSET? .OBJ ,NARTICLEBIT>>\n\t\t\t\t    <TELL \" the \">)\n\t\t\t\t   (T\n\t\t\t\t    <TELL \" \">)>)>\n\t\t      <TELL D .OBJ \")\" CR>\n\t\t      .OBJ)>)\n\t      (T <SETG P-GWIMBIT 0> <RFALSE>)>>   "
  },
  "SNARF-OBJECTS": {
   "name": "SNARF-OBJECTS",
   "file": "parser.zil",
   "line": 704,
   "endLine": 717,
   "source": "<ROUTINE SNARF-OBJECTS (\"AUX\" PTR)\n\t<COND (<NOT <EQUAL? <SET PTR <GET ,P-ITBL ,P-NC1>> 0>>\n\t       <SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC1>>\n\t       <OR <SNARFEM .PTR <GET ,P-ITBL ,P-NC1L> ,P-PRSO> <RFALSE>>\n\t       <OR <ZERO? <GET ,P-BUTS ,P-MATCHLEN>>\n\t\t   <SETG P-PRSO <BUT-MERGE ,P-PRSO>>>)>\n\t<COND (<NOT <EQUAL? <SET PTR <GET ,P-ITBL ,P-NC2>> 0>>\n\t       <SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC2>>\n\t       <OR <SNARFEM .PTR <GET ,P-ITBL ,P-NC2L> ,P-PRSI> <RFALSE>>\n\t       <COND (<NOT <ZERO? <GET ,P-BUTS ,P-MATCHLEN>>>\n\t\t      <COND (<EQUAL? <GET ,P-PRSI ,P-MATCHLEN> 1>\n\t\t\t     <SETG P-PRSO <BUT-MERGE ,P-PRSO>>)\n\t\t\t    (T <SETG P-PRSI <BUT-MERGE ,P-PRSI>>)>)>)>\n\t<RTRUE>>  "
  },
  "BUT-MERGE": {
   "name": "BUT-MERGE",
   "file": "parser.zil",
   "line": 719,
   "endLine": 732,
   "source": "<ROUTINE BUT-MERGE (TBL \"AUX\" LEN BUTLEN (CNT 1) (MATCHES 0) OBJ NTBL)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<REPEAT ()\n\t\t<COND (<DLESS? LEN 0> <RETURN>)\n\t\t      (<ZMEMQ <SET OBJ <GET .TBL .CNT>> ,P-BUTS>)\n\t\t      (T\n\t\t       <PUT ,P-MERGE <+ .MATCHES 1> .OBJ>\n\t\t       <SET MATCHES <+ .MATCHES 1>>)>\n\t\t<SET CNT <+ .CNT 1>>>\n\t<PUT ,P-MERGE ,P-MATCHLEN .MATCHES>\n\t<SET NTBL ,P-MERGE>\n\t<SETG P-MERGE .TBL>\n\t.NTBL>    "
  },
  "SNARFEM": {
   "name": "SNARFEM",
   "file": "parser.zil",
   "line": 765,
   "endLine": 811,
   "source": "<ROUTINE SNARFEM (PTR EPTR TBL \"AUX\" (BUT <>) LEN WV WRD NW)\n   <SETG P-GETFLAGS 0>\n   <SETG P-CSPTR .PTR>\n   <SETG P-CEPTR .EPTR>\n   <PUT ,P-BUTS ,P-MATCHLEN 0>\n   <PUT .TBL ,P-MATCHLEN 0>\n   <SET WRD <GET .PTR 0>>\n   <REPEAT ()\n\t   <COND (<EQUAL? .PTR .EPTR> <RETURN <GET-OBJECT <OR .BUT .TBL>>>)\n\t\t (T\n\t\t  <SET NW <GET .PTR ,P-LEXELEN>>\n\t\t  <COND (<EQUAL? .WRD ,W?ALL ,W?BOTH>\n\t\t\t <SETG P-GETFLAGS ,P-ALL>\n\t\t\t <COND (<EQUAL? .NW ,W?OF>\n\t\t\t\t<SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t(<EQUAL? .WRD ,W?BUT ,W?EXCEPT>\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t <SET BUT ,P-BUTS>\n\t\t\t <PUT .BUT ,P-MATCHLEN 0>)\n\t\t\t(<EQUAL? .WRD ,W?A ,W?ONE>\n\t\t\t <COND (<NOT ,P-ADJ>\n\t\t\t\t<SETG P-GETFLAGS ,P-ONE>\n\t\t\t\t<COND (<EQUAL? .NW ,W?OF>\n\t\t\t\t       <SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t       (T\n\t\t\t\t<SETG P-NAM ,P-ONEOBJ>\n\t\t\t\t<OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t\t<AND <ZERO? .NW> <RTRUE>>)>)\n\t\t\t(<AND <EQUAL? .WRD ,W?AND ,W?COMMA>\n\t\t\t      <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t T)\n\t\t\t(<WT? .WRD ,PS?BUZZ-WORD>)\n\t\t\t(<EQUAL? .WRD ,W?AND ,W?COMMA>)\n\t\t\t(<EQUAL? .WRD ,W?OF>\n\t\t\t <COND (<ZERO? ,P-GETFLAGS>\n\t\t\t\t<SETG P-GETFLAGS ,P-INHIBIT>)>)\n\t\t\t(<AND <SET WV <WT? .WRD ,PS?ADJECTIVE ,P1?ADJECTIVE>>\n\t\t\t      <ADJ-CHECK .WRD>>\n\t\t\t <SETG P-ADJ .WV>\n\t\t\t <SETG P-ADJN .WRD>)\n\t\t\t(<WT? .WRD ,PS?OBJECT ,P1?OBJECT>\n\t\t\t <SETG P-NAM .WRD>\n\t\t\t <SETG P-ONEOBJ .WRD>)>)>\n\t   <COND (<NOT <EQUAL? .PTR .EPTR>>\n\t\t  <SET PTR <REST .PTR ,P-WORDLEN>>\n\t\t  <SET WRD .NW>)>>>"
  },
  "GET-OBJECT": {
   "name": "GET-OBJECT",
   "file": "parser.zil",
   "line": 841,
   "endLine": 945,
   "source": "<ROUTINE GET-OBJECT (TBL \"OPTIONAL\" (VRB T)\n\t\t         \"AUX\" BITS LEN XBITS TLEN (GCHECK <>) (OLEN 0) OBJ)\n\t <SET XBITS ,P-SLOCBITS>\n\t <SET TLEN <GET .TBL ,P-MATCHLEN>>\n\t <COND (<BTST ,P-GETFLAGS ,P-INHIBIT> <RTRUE>)>\n\t <COND (<AND <NOT ,P-NAM>\n\t\t     ,P-ADJ\n\t\t     <NOT <ZERO? <WT? ,P-ADJN ,PS?OBJECT ,P1?OBJECT>>>>\n\t\t<SETG P-NAM ,P-ADJN>\n\t\t<SETG P-ADJ <>>)>\n\t <COND (<AND <NOT ,P-NAM>\n\t\t     <NOT ,P-ADJ>\n\t\t     <NOT <EQUAL? ,P-GETFLAGS ,P-ALL>>\n\t\t     <ZERO? ,P-GWIMBIT>>\n\t\t<COND (.VRB\n\t\t       <TELL ,NOUN-MISSING CR>)>\n\t\t<RFALSE>)>\n\t <COND (<OR <NOT <EQUAL? ,P-GETFLAGS ,P-ALL>> <ZERO? ,P-SLOCBITS>>\n\t\t<SETG P-SLOCBITS -1>)>\n\t <SETG P-TABLE .TBL>\n\t <PROG ()\n\t       <COND (.GCHECK <GLOBAL-CHECK .TBL>)\n\t\t     (T\n\t\t      <COND (<OR ,LIT ,BLORTED>\n\t\t\t     <FCLEAR ,PLAYER ,TRANSBIT>\n\t\t\t     <DO-SL ,HERE ,SOG ,SIR>\n\t\t\t     ;<COND (<AND <FSET? <LOC ,PLAYER> ,VEHBIT>\n\t\t\t\t\t <NOT <FSET? <LOC ,PLAYER> ,OPENBIT>>>\n\t\t\t\t    <DO-SL <LOC ,PLAYER> ,SOG ,SIR>)>\n\t\t\t     <FSET ,PLAYER ,TRANSBIT>)>\n\t\t      <DO-SL ,PLAYER ,SH ,SC>\n\t\t      <COND (<EQUAL? <GET .TBL 0> .TLEN>\n                             <COND (<AND ,P-ADJ <EQUAL? ,P-NAM ,W?SPELL <>>>\n\t                            <SPELL-CHECK .TBL ,P-ADJN>)\n\t                           (T\n\t\t\t\t    <SPELL-CHECK .TBL ,P-NAM>)>)>)>\n\t       <SET LEN <- <GET .TBL ,P-MATCHLEN> .TLEN>>\n\t       <COND (<BTST ,P-GETFLAGS ,P-ALL> ;<AND * <NOT <EQUAL? .LEN 0>>>)\n\t\t     (<AND <BTST ,P-GETFLAGS ,P-ONE>\n\t\t\t   <NOT <ZERO? .LEN>>>\n\t\t      <COND (<NOT <EQUAL? .LEN 1>>\n\t\t\t     <PUT .TBL 1 <GET .TBL <RANDOM .LEN>>>\n\t\t\t     <TELL \"(How about the \">\n\t\t\t     <PRINTD <GET .TBL 1>>\n\t\t\t     <TELL \"?)\" CR>)>\n\t\t      <PUT .TBL ,P-MATCHLEN 1>)\n\t\t     (<OR <G? .LEN 1>\n\t\t\t  <AND <ZERO? .LEN> <NOT <EQUAL? ,P-SLOCBITS -1>>>>\n\t\t      <COND (<EQUAL? ,P-SLOCBITS -1>\n\t\t\t     <SETG P-SLOCBITS .XBITS>\n\t\t\t     <SET OLEN .LEN>\n\t\t\t     <PUT .TBL\n\t\t\t\t  ,P-MATCHLEN\n\t\t\t\t  <- <GET .TBL ,P-MATCHLEN> .LEN>>\n\t\t\t     <AGAIN>)\n\t\t\t    (T\n\t\t\t     <COND (<ZERO? .LEN> <SET LEN .OLEN>)>\n\t\t\t     <COND (<AND ;.VRB ;\".VRB added 8/14/84 by JW\"\n\t\t\t\t\t <NOT <EQUAL? ,WINNER ,PROTAGONIST>>>\n\t\t\t\t    <CANT-ORPHAN>\n\t\t\t\t    ;<SETG P-NAM <>>\n\t\t\t\t    ;<SETG P-ADJ <>>\n\t\t\t\t    <RFALSE>)\n\t\t\t\t   (<AND .VRB ,P-NAM>\n\t\t\t\t    <WHICH-PRINT .TLEN .LEN .TBL>\n\t\t\t\t    <SETG P-ACLAUSE\n\t\t\t\t\t  <COND (<EQUAL? .TBL ,P-PRSO> ,P-NC1)\n\t\t\t\t\t\t(T ,P-NC2)>>\n\t\t\t\t    <SETG P-AADJ ,P-ADJ>\n\t\t\t\t    <SETG P-ANAM ,P-NAM>\n\t\t\t\t    <ORPHAN <> <>>\n\t\t\t\t    <SETG P-OFLAG T>)\n\t\t\t\t   (.VRB\n\t\t\t\t    <TELL ,NOUN-MISSING CR>)>\n\t\t\t     <SETG P-NAM <>>\n\t\t\t     <SETG P-ADJ <>>\n\t\t\t     <RFALSE>)>)>\n\t       <COND (<AND <ZERO? .LEN>\n\t\t\t   .GCHECK>\n\t\t      <COND (.VRB\n\t\t\t     ;<SETG P-SLOCBITS .XBITS>\n\t\t\t     <COND (<OR ,LIT\n\t\t\t\t\t,BLORTED\n\t\t\t\t\t<VERB? TELL WHERE WHAT WHO FROTZ>>\n\t\t\t\t    ;\"Changed 6/10/83 - MARC\"\n\t\t\t\t    <OBJ-FOUND ,NOT-HERE-OBJECT .TBL>\n\t\t\t\t    <SETG P-XNAM ,P-NAM>\n\t\t\t\t    <SETG P-XADJ ,P-ADJ>\n\t\t\t\t    <SETG P-XADJN ,P-ADJN>\n\t\t\t\t    <SETG P-NAM <>>\n\t\t\t\t    <SETG P-ADJ <>>\n\t\t\t\t    <SETG P-ADJN <>>\n\t\t\t\t    <RTRUE>)\n\t\t\t\t   (T\n\t\t\t\t    <TOO-DARK>)>)>\n\t\t      <SETG P-NAM <>>\n\t\t      <SETG P-ADJ <>>\n\t\t      <RFALSE>)\n\t\t     (<ZERO? .LEN>\n\t\t      <SET GCHECK T>\n\t\t      <AGAIN>)>\n\t       <SETG P-SLOCBITS .XBITS>\n\t       <SETG P-NAM <>>\n\t       <SETG P-ADJ <>>\n\t       <RTRUE>>>"
  },
  "WHICH-PRINT": {
   "name": "WHICH-PRINT",
   "file": "parser.zil",
   "line": 1012,
   "endLine": 1030,
   "source": "<ROUTINE WHICH-PRINT (TLEN LEN TBL \"AUX\" OBJ RLEN)\n\t <SET RLEN .LEN>\n\t <TELL \"Which\">\n         <COND (<OR ,P-OFLAG ,P-MERGED> <TELL \" \"> <PRINTB ,P-NAM>)\n\t       (<EQUAL? .TBL ,P-PRSO>\n\t\t<CLAUSE-PRINT ,P-NC1 ,P-NC1L <>>)\n\t       (T <CLAUSE-PRINT ,P-NC2 ,P-NC2L <>>)>\n\t <TELL \" do you mean, \">\n\t <REPEAT ()\n\t\t <SET TLEN <+ .TLEN 1>>\n\t\t <SET OBJ <GET .TBL .TLEN>>\n\t\t <TELL \"the \" D .OBJ>\n\t\t <COND (<EQUAL? .LEN 2>\n\t\t        <COND (<NOT <EQUAL? .RLEN 2>> <TELL \",\">)>\n\t\t        <TELL \" or \">)\n\t\t       (<G? .LEN 2> <TELL \", \">)>\n\t\t <COND (<L? <SET LEN <- .LEN 1>> 1>\n\t\t        <TELL \"?\" CR>\n\t\t        <RETURN>)>>>"
  },
  "GLOBAL-CHECK": {
   "name": "GLOBAL-CHECK",
   "file": "parser.zil",
   "line": 1032,
   "endLine": 1064,
   "source": "<ROUTINE GLOBAL-CHECK (TBL \"AUX\" LEN RMG RMGL (CNT 0) OBJ OBITS FOO)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<SET OBITS ,P-SLOCBITS>\n\t<COND (<SET RMG <GETPT ,HERE ,P?GLOBAL>>\n\t       <SET RMGL <- <PTSIZE .RMG> 1>>\n\t       <REPEAT ()\n\t\t       <COND (<THIS-IT? <SET OBJ <GETB .RMG .CNT>> .TBL>\n\t\t\t      <OBJ-FOUND .OBJ .TBL>)>\n\t\t       <COND (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<SET RMG <GETPT ,HERE ,P?PSEUDO>>\n\t       <SET RMGL <- </ <PTSIZE .RMG> 4> 1>>\n\t       <SET CNT 0>\n\t       <REPEAT ()\n\t\t       <COND (<EQUAL? ,P-NAM <GET .RMG <* .CNT 2>>>\n\t\t\t      <SETG LAST-PSEUDO-LOC ,HERE>\n\t\t\t      <PUTP ,PSEUDO-OBJECT\n\t\t\t\t    ,P?ACTION\n\t\t\t\t    <GET .RMG <+ <* .CNT 2> 1>>>\n\t\t\t      <SET FOO\n\t\t\t\t   <BACK <GETPT ,PSEUDO-OBJECT ,P?ACTION> 5>>\n\t\t\t      <PUT .FOO 0 <GET ,P-NAM 0>>\n\t\t\t      <PUT .FOO 1 <GET ,P-NAM 1>>\n\t\t\t      <OBJ-FOUND ,PSEUDO-OBJECT .TBL>\n\t\t\t      <RETURN>)\n\t\t             (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<EQUAL? <GET .TBL ,P-MATCHLEN> .LEN>\n\t       <SETG P-SLOCBITS -1>\n\t       <SETG P-TABLE .TBL>\n\t       <DO-SL ,GLOBAL-OBJECTS 1 1>\n\t       <SETG P-SLOCBITS .OBITS>\n\t       ;<COND (<AND <ZERO? <GET .TBL ,P-MATCHLEN>>\n\t\t\t   <EQUAL? ,PRSA ,V?LOOK-INSIDE ,V?SEARCH ,V?EXAMINE>>\n\t\t      <DO-SL ,ROOMS 1 1>)>)>>"
  },
  "DO-SL": {
   "name": "DO-SL",
   "file": "parser.zil",
   "line": 1066,
   "endLine": 1074,
   "source": "<ROUTINE DO-SL (OBJ BIT1 BIT2 \"AUX\" BTS)\n\t<COND (<BTST ,P-SLOCBITS <+ .BIT1 .BIT2>>\n\t       <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCALL>)\n\t      (T\n\t       <COND (<BTST ,P-SLOCBITS .BIT1>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCTOP>)\n\t\t     (<BTST ,P-SLOCBITS .BIT2>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCBOT>)\n\t\t     (T <RTRUE>)>)>>  "
  },
  "SEARCH-LIST": {
   "name": "SEARCH-LIST",
   "file": "parser.zil",
   "line": 1082,
   "endLine": 1105,
   "source": "<ROUTINE SEARCH-LIST (OBJ TBL LVL \"AUX\" FLS NOBJ)\n\t<COND (<SET OBJ <FIRST? .OBJ>>\n\t       <REPEAT ()\n\t\t       <COND (<AND <NOT <EQUAL? .LVL ,P-SRCBOT>>\n\t\t\t\t   <GETPT .OBJ ,P?SYNONYM>\n\t\t\t\t   <THIS-IT? .OBJ .TBL>>\n\t\t\t      <OBJ-FOUND .OBJ .TBL>)>\n\t\t       <COND (<AND <OR <NOT <EQUAL? .LVL ,P-SRCTOP>>\n\t\t\t\t       <FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t       <FSET? .OBJ ,SURFACEBIT>>\n\t\t\t\t   <SET NOBJ <FIRST? .OBJ>>>\n\t\t\t      <COND (<OR <FSET? .OBJ ,OPENBIT>\n\t\t\t\t\t <FSET? .OBJ ,TRANSBIT>\n\t\t\t\t\t ,P-MOBY-FLAG>\n\t\t\t\t     <SET FLS\n\t\t\t\t\t  <SEARCH-LIST\n\t\t\t\t\t   .OBJ\n\t\t\t\t\t   .TBL\n\t\t\t\t\t   <COND (<FSET? .OBJ ,SURFACEBIT>\n\t\t\t\t\t\t  ,P-SRCALL)\n\t\t\t\t\t\t (<FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t\t\t  ,P-SRCALL)\n\t\t\t\t\t\t (T ,P-SRCTOP)>>>)>)>\n\t\t       <COND (<SET OBJ <NEXT? .OBJ>>) (T <RETURN>)>>)>> "
  },
  "OBJ-FOUND": {
   "name": "OBJ-FOUND",
   "file": "parser.zil",
   "line": 1107,
   "endLine": 1110,
   "source": "<ROUTINE OBJ-FOUND (OBJ TBL \"AUX\" PTR)\n\t<SET PTR <GET .TBL ,P-MATCHLEN>>\n\t<PUT .TBL <+ .PTR 1> .OBJ>\n\t<PUT .TBL ,P-MATCHLEN <+ .PTR 1>>>"
  },
  "TAKE-CHECK": {
   "name": "TAKE-CHECK",
   "file": "parser.zil",
   "line": 1112,
   "endLine": 1114,
   "source": "<ROUTINE TAKE-CHECK () \n\t<AND <ITAKE-CHECK ,P-PRSO <GETB ,P-SYNTAX ,P-SLOC1>>\n\t     <ITAKE-CHECK ,P-PRSI <GETB ,P-SYNTAX ,P-SLOC2>>>> "
  },
  "ITAKE-CHECK": {
   "name": "ITAKE-CHECK",
   "file": "parser.zil",
   "line": 1116,
   "endLine": 1165,
   "source": "<ROUTINE ITAKE-CHECK (TBL IBITS \"AUX\" PTR OBJ TAKEN) ;\"changed, MARC, 11/17/83\"\n  <COND (<AND <SET PTR <GET .TBL ,P-MATCHLEN>>\n\t      <OR <BTST .IBITS ,SHAVE>\n\t\t  <BTST .IBITS ,STAKE>>>\n\t <REPEAT ()\n\t  <COND (<L? <SET PTR <- .PTR 1>> 0>\n\t\t <RETURN>)\n\t\t(T\n\t\t <SET OBJ <GET .TBL <+ .PTR 1>>>\n\t\t <COND (<EQUAL? .OBJ ,IT>\n\t\t\t<COND (<NOT <ACCESSIBLE? ,P-IT-OBJECT>>\n\t\t\t       <REFERRING>\n\t\t\t       <RFALSE>)\n\t\t\t      (T\n\t\t\t       <SET OBJ ,P-IT-OBJECT>)>)>\n\t\t <COND (<EQUAL? .OBJ ,HANDS>\n\t\t\tT)\n\t\t       (<AND <VERB? TAKE-OFF>\n\t\t\t     <EQUAL? .OBJ <LOC ,PROTAGONIST>>>\n\t\t\tT)\n\t\t       (<NOT <EQUAL? ,WINNER ,PROTAGONIST>>\n\t\t\tT)\n\t\t       (<NOT <HELD? .OBJ>>\n\t\t\t<SETG PRSO .OBJ>\n\t\t\t<COND (<FSET? .OBJ ,TRYTAKEBIT>\n\t\t\t       <SET TAKEN T>)\n\t\t\t      (<NOT <EQUAL? ,WINNER ,PROTAGONIST>>\n\t\t\t       <SET TAKEN <>>)\n\t\t\t      (<AND <BTST .IBITS ,STAKE>\n\t\t\t\t    <EQUAL? <ITAKE <>> T>>\n\t\t\t       <SET TAKEN <>>)\n\t\t\t      (T\n\t\t\t       <SET TAKEN T>)>\n\t\t\t<COND (<AND .TAKEN <BTST .IBITS ,SHAVE>>\n\t\t\t       <TELL ,YNH>\n\t\t\t       <COND (<L? 1 <GET .TBL ,P-MATCHLEN>>\n\t\t\t\t      <TELL \"all those things\">)\n\t\t\t\t     (<EQUAL? .OBJ ,NOT-HERE-OBJECT>\n\t\t\t\t      <TELL \" that\">)\n\t\t\t\t     (T\n\t\t\t\t      <ARTICLE .OBJ T>\n\t\t\t\t      <THIS-IS-IT .OBJ>)>\n\t\t\t       <TELL \"!\" CR>\n\t\t\t       <RFALSE>)\n\t\t\t      (<AND <NOT .TAKEN>\n\t\t\t\t    <EQUAL? ,WINNER ,PROTAGONIST>>\n\t\t\t       <TELL \"(taking\">\n\t\t\t       <ARTICLE .OBJ T>\n\t\t\t       <TELL \" first)\" CR>)>)>)>>)\n\t       (T)>>"
  },
  "MANY-CHECK": {
   "name": "MANY-CHECK",
   "file": "parser.zil",
   "line": 1167,
   "endLine": 1186,
   "source": "<ROUTINE MANY-CHECK (\"AUX\" (LOSS <>) TMP)\n\t<COND (<AND <G? <GET ,P-PRSO ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC1> ,SMANY>>>\n\t       <SET LOSS 1>)\n\t      (<AND <G? <GET ,P-PRSI ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC2> ,SMANY>>>\n\t       <SET LOSS 2>)>\n\t<COND (.LOSS\n\t       <TELL \"I can't use multiple \">\n\t       <COND (<EQUAL? .LOSS 2> <TELL \"in\">)>\n\t       <TELL \"direct objects with \\\"\">\n\t       <SET TMP <GET ,P-ITBL ,P-VERBN>>\n\t       <COND (<ZERO? .TMP> <TELL \"tell\">)\n\t\t     (<OR ,P-OFLAG ,P-MERGED>\n\t\t      <PRINTB <GET .TMP 0>>)\n\t\t     (T\n\t\t      <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>)>\n\t       <TELL \"\\\".\" CR>\n\t       <RFALSE>)\n\t      (T)>>  "
  },
  "ZMEMQ": {
   "name": "ZMEMQ",
   "file": "parser.zil",
   "line": 1188,
   "endLine": 1194,
   "source": "<ROUTINE ZMEMQ (ITM TBL \"OPTIONAL\" (SIZE -1) \"AUX\" (CNT 1)) \n\t<COND (<NOT .TBL> <RFALSE>)>\n\t<COND (<NOT <L? .SIZE 0>> <SET CNT 0>)\n\t      (ELSE <SET SIZE <GET .TBL 0>>)>\n\t<REPEAT ()\n\t\t<COND (<EQUAL? .ITM <GET .TBL .CNT>> <RTRUE>)\n\t\t      (<IGRTR? CNT .SIZE> <RFALSE>)>>>    "
  },
  "ZMEMQB": {
   "name": "ZMEMQB",
   "file": "parser.zil",
   "line": 1196,
   "endLine": 1199,
   "source": "<ROUTINE ZMEMQB (ITM TBL SIZE \"AUX\" (CNT 0))\n\t<REPEAT ()\n\t\t<COND (<EQUAL? .ITM <GETB .TBL .CNT>> <RTRUE>)\n\t\t      (<IGRTR? CNT .SIZE> <RFALSE>)>>>  "
  },
  "LIT?": {
   "name": "LIT?",
   "file": "parser.zil",
   "line": 1203,
   "endLine": 1225,
   "source": "<ROUTINE LIT? (RM \"OPTIONAL\" (RMBIT T) \"AUX\" OHERE (LIT <>))\n\t<COND (<AND ,ALWAYS-LIT <EQUAL? ,WINNER ,PROTAGONIST>>\n\t       <RTRUE>)>\n\t<SETG P-GWIMBIT ,ONBIT>\n\t<SET OHERE ,HERE>\n\t<SETG HERE .RM>\n\t<COND (<AND .RMBIT\n\t\t    <FSET? .RM ,ONBIT>>\n\t       <SET LIT T>)\n\t      (T\n\t       <PUT ,P-MERGE ,P-MATCHLEN 0>\n\t       <SETG P-TABLE ,P-MERGE>\n\t       <SETG P-SLOCBITS -1>\n\t       <COND (<EQUAL? .OHERE .RM>\n\t\t      <DO-SL ,WINNER 1 1>\n\t\t      <COND (<AND <NOT <EQUAL? ,WINNER ,PLAYER>>\n\t\t\t\t  <IN? ,PLAYER .RM>>\n\t\t\t     <DO-SL ,PLAYER 1 1>)>)>\n\t       <DO-SL .RM 1 1>\n\t       <COND (<G? <GET ,P-TABLE ,P-MATCHLEN> 0> <SET LIT T>)>)>\n\t<SETG HERE .OHERE>\n\t<SETG P-GWIMBIT 0>\n\t.LIT>"
  },
  "THIS-IT?": {
   "name": "THIS-IT?",
   "file": "parser.zil",
   "line": 1241,
   "endLine": 1254,
   "source": "<ROUTINE THIS-IT? (OBJ TBL \"AUX\" SYNS) \n <COND (<FSET? .OBJ ,INVISIBLE> <RFALSE>)\n       (<AND ,P-NAM\n\t     <NOT <ZMEMQ ,P-NAM\n\t\t\t <SET SYNS <GETPT .OBJ ,P?SYNONYM>>\n\t\t\t <- </ <PTSIZE .SYNS> 2> 1>>>>\n\t<RFALSE>)\n       (<AND ,P-ADJ\n\t     <OR <NOT <SET SYNS <GETPT .OBJ ,P?ADJECTIVE>>>\n\t\t <NOT <ZMEMQB ,P-ADJ .SYNS <- <PTSIZE .SYNS> 1>>>>>\n\t<RFALSE>)\n       (<AND <NOT <ZERO? ,P-GWIMBIT>> <NOT <FSET? .OBJ ,P-GWIMBIT>>>\n\t<RFALSE>)>\n <RTRUE>>"
  },
  "ACCESSIBLE?": {
   "name": "ACCESSIBLE?",
   "file": "gparser.zil",
   "line": 1512,
   "endLine": 1539,
   "source": "<ROUTINE ACCESSIBLE? (OBJ \"AUX\" (L <LOC .OBJ>)) ;\"can player TOUCH object?\"\n\t ;\"revised 5/2/84 by SEM and SWG\"\n\t <COND (<FSET? .OBJ ,INVISIBLE>\n\t\t<RFALSE>)\n\t       %<COND (<==? ,ZORK-NUMBER 5>\n\t\t       '(<EQUAL? .OBJ ,PSEUDO-OBJECT>\n\t\t\t <COND (<EQUAL? ,LAST-PSEUDO-LOC ,HERE>\n\t\t\t\t<RTRUE>)\n\t\t\t       (T\n\t\t\t\t<RFALSE>)>))\n\t\t      (ELSE\n\t\t       '(<NULL-F> <RTRUE>))>\n\t       (<NOT .L>\n\t\t<RFALSE>)\n\t       (<EQUAL? .L ,GLOBAL-OBJECTS>\n\t\t<RTRUE>)\n\t       (<AND <EQUAL? .L ,LOCAL-GLOBALS>\n\t\t     <GLOBAL-IN? .OBJ ,HERE>>\n\t\t<RTRUE>)\n\t       (<NOT <EQUAL? <META-LOC .OBJ> ,HERE <LOC ,WINNER>>>\n\t\t<RFALSE>)\n\t       (<EQUAL? .L ,WINNER ,HERE <LOC ,WINNER>>\n\t\t<RTRUE>)\n\t       (<AND <FSET? .L ,OPENBIT>\n\t\t     <ACCESSIBLE? .L>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "META-LOC": {
   "name": "META-LOC",
   "file": "gparser.zil",
   "line": 1541,
   "endLine": 1550,
   "source": "<ROUTINE META-LOC (OBJ)\n\t <REPEAT ()\n\t\t <COND (<NOT .OBJ>\n\t\t\t<RFALSE>)\n\t\t       (<IN? .OBJ ,GLOBAL-OBJECTS>\n\t\t\t<RETURN ,GLOBAL-OBJECTS>)>\n\t\t <COND (<IN? .OBJ ,ROOMS>\n\t\t\t<RETURN .OBJ>)\n\t\t       (T\n\t\t\t<SET OBJ <LOC .OBJ>>)>>>"
  },
  "BED-F": {
   "name": "BED-F",
   "file": "guild.zil",
   "line": 36,
   "endLine": 55,
   "source": "<ROUTINE BED-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<VERB? WALK>\n\t\t       <NOT-GOING-ANYWHERE ,BED>)\n\t\t      (<AND <VERB? TAKE>\n\t\t\t    <NOT <HELD? ,PRSO>>\n\t\t\t    <NOT <EQUAL? ,PRSO ,GLOBAL-SLEEP>>>\n\t\t       <COND (<AND <NOT <EQUAL? ,PRSO ,GRUE ,ME ,BED>>\n\t\t\t\t   <NOT <IN? ,PRSO ,BED>>>\n\t\t\t      <TELL \"You can't reach it from the bed.\" CR>)>)>)\n\t       (.RARG\n\t\t<RFALSE>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<TELL \"Huh?\" CR>)\n\t       (<VERB? WALK-TO>\n\t\t<PERFORM ,V?WALK-TO ,GLOBAL-SLEEP>\n\t\t<RTRUE>)\n\t       (<VERB? CLIMB-ON LIE-DOWN>\n\t\t<PERFORM ,V?BOARD ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "GLOBAL-BED-F": {
   "name": "GLOBAL-BED-F",
   "file": "guild.zil",
   "line": 57,
   "endLine": 65,
   "source": "<ROUTINE GLOBAL-BED-F ()\n\t <COND (<EQUAL? ,GLOBAL-BED ,PRSO>\n\t\t<SETG PERFORMING-SPELL T>\n\t\t<PERFORM ,PRSA ,BED ,PRSI>\n\t\t<RTRUE>)\n\t       (T\n\t\t<SETG PERFORMING-SPELL T>\n\t\t<PERFORM ,PRSA ,PRSO ,BED>\n\t\t<RTRUE>)>>\t"
  },
  "BELBOZ-QUARTERS-F": {
   "name": "BELBOZ-QUARTERS-F",
   "file": "guild.zil",
   "line": 76,
   "endLine": 85,
   "source": "<ROUTINE BELBOZ-QUARTERS-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"The personal chamber of Belboz, who presides over the Circle of Enchanters,\nis appointed with a beautiful woven wall hanging\">\n\t\t<COND (<IN? ,MORGIA-PLANT ,HERE>\n\t\t       <TELL \", an exotic morgia plant,\">)>\n\t\t<TELL\n\" and a wide darkwood desk crafted by the artisans of Gurth. The hallway\nlies to the east.\" CR>)>>"
  },
  "PERCH-PSEUDO": {
   "name": "PERCH-PSEUDO",
   "file": "guild.zil",
   "line": 87,
   "endLine": 90,
   "source": "<ROUTINE PERCH-PSEUDO ()\n\t <COND (<VERB? CLIMB-ON>\n\t\t<TELL\n\"I'd recommend a good doctor, but we need the eggs.\" CR>)>>"
  },
  "PARROT-F": {
   "name": "PARROT-F",
   "file": "guild.zil",
   "line": 103,
   "endLine": 105,
   "source": "<ROUTINE PARROT-F ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL \"The parrot hops to the other end of the perch.\" CR>)>>"
  },
  "I-PARROT": {
   "name": "I-PARROT",
   "file": "guild.zil",
   "line": 107,
   "endLine": 110,
   "source": "<ROUTINE I-PARROT ()\n       <COND (<AND <IN? ,PARROT ,HERE>\n\t\t   <PROB 40>>\n\t      <TELL CR \"\\\"Squawk! \" <PICK-ONE ,PARROTISMS> \" Squawk!\\\"\" CR>)>>"
  },
  "BELBOZ-DESK-F": {
   "name": "BELBOZ-DESK-F",
   "file": "guild.zil",
   "line": 131,
   "endLine": 165,
   "source": "<ROUTINE BELBOZ-DESK-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"The desk has one drawer which is \">\n\t\t<COND (<FSET? ,DESK-DRAWER ,OPENBIT>\n\t\t       <TELL \"open\">)\n\t\t      (T\n\t\t       <TELL \"closed\">)>\n\t\t<TELL \".\" CR>\n\t\t<COND (<FIRST? ,PRSO>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <RTRUE>)>)\n\t       (<AND <VERB? SEARCH>\n\t\t     <NOT <FSET? ,DESK-DRAWER ,OPENBIT>>\n\t\t     <FIRST? ,DESK-DRAWER>>\n\t\t<TELL \"You open the desk drawer and find \">\n\t\t<PRINT-CONTENTS ,DESK-DRAWER>\n\t\t<FSET ,DESK-DRAWER ,OPENBIT>\n\t\t<TELL \".\" CR>)\n\t       (<VERB? CLOSE OPEN REZROV REACH-IN LOOK-INSIDE>\n\t\t<SETG PERFORMING-SPELL T>\n\t\t<PERFORM ,PRSA ,DESK-DRAWER>\n\t\t<RTRUE>)\n\t       (<AND <VERB? TAKE>\n\t\t     <EQUAL? ,BELBOZ-DESK ,PRSI>\n\t\t     <FIRST? ,DESK-DRAWER>>\n\t\t<PERFORM ,V?TAKE ,PRSO ,DESK-DRAWER>\n\t\t<COND (<FIRST? ,BELBOZ-DESK>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <RTRUE>)>)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSI ,BELBOZ-DESK>>\n\t\t<PERFORM ,V?PUT ,PRSO ,DESK-DRAWER>\n\t\t<RTRUE>)>>"
  },
  "TINY-BOX-F": {
   "name": "TINY-BOX-F",
   "file": "guild.zil",
   "line": 185,
   "endLine": 207,
   "source": "<ROUTINE TINY-BOX-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"There is writing on the lid of the box.\" CR>\n\t\t<PERFORM ,V?READ ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? READ>\n\t\t<FIXED-FONT-ON>\n\t\t<TELL\n\"|\n\\\"    MAGIC AMULET|\n|\nThe closer this amulet is to|\nits owner, the brighter it may|\nglow. Ideal for leaving with|\nyour loved ones if you go on|\na long and hazardous journey.|\n|\nThis amulet is sensitized to|\n-> BELBOZ THE NECROMANCER|\n|\nAnother fine product of the|\nFrobozz Magic Amulet Company.\\\"\" CR>\n\t\t<FIXED-FONT-OFF>)>>"
  },
  "MAGIC-AMULET-F": {
   "name": "MAGIC-AMULET-F",
   "file": "guild.zil",
   "line": 219,
   "endLine": 228,
   "source": "<ROUTINE MAGIC-AMULET-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"A blue jewel hangs from a long golden chain. The jewel is \">\n\t\t<AMULET-GLOWS>\n\t\t<TELL \".\" CR>)\n\t       (<VERB? RESEARCH>\n\t\t<TELL\n\"The Amulet of Aggthora was a legendary jewel renowned for\nits powers of augury.\" CR>)>>"
  },
  "AMULET-DESCFCN": {
   "name": "AMULET-DESCFCN",
   "file": "guild.zil",
   "line": 230,
   "endLine": 233,
   "source": "<ROUTINE AMULET-DESCFCN (RARG)\n\t <TELL \"There is an amulet here. The amulet's jewel is \">\n\t <AMULET-GLOWS>\n\t <TELL \".\" CR>>"
  },
  "AMULET-GLOWS": {
   "name": "AMULET-GLOWS",
   "file": "guild.zil",
   "line": 235,
   "endLine": 247,
   "source": "<ROUTINE AMULET-GLOWS ()\n\t <COND (<IN-GUILD-HALL?>\n\t\t<TELL \"dark\">)\n\t       (<IN-MAZE-AREA?>\n\t\t<TELL \"glowing\">)\n\t       (<IN-CRATER-AREA?>\n\t\t<TELL \"glowing brightly\">)\n\t       (<IN-COAL-MINE?>\n\t\t<TELL \"glowing very brightly\">)\n\t       (<IN-END-GAME?>\n\t\t<TELL \"pulsing with flashes of brilliant light\">)\n\t       (T\n\t\t<TELL \"glowing dimly\">)>>"
  },
  "IN-GUILD-HALL?": {
   "name": "IN-GUILD-HALL?",
   "file": "guild.zil",
   "line": 249,
   "endLine": 259,
   "source": "<ROUTINE IN-GUILD-HALL? (\"OPTIONAL\" (X <>))\n\t <COND (<NOT .X>\n\t\t<SET X ,HERE>)>\n\t <COND (<OR <EQUAL? .X ,HALLWAY-1 ,HALLWAY-2 ,CHAMBER-OF-THE-CIRCLE>\n\t\t    <EQUAL? .X ,YOUR-QUARTERS ,BELBOZ-QUARTERS ,LOBBY>\n\t\t    <EQUAL? .X ,FROBAR-QUARTERS ,HELISTAR-QUARTERS>\n\t\t    <EQUAL? .X ,STORE-ROOM ,LIBRARY ,CELLAR>\n\t\t    <EQUAL? .X ,APPRENTICE-QUARTERS ,SERVANT-QUARTERS>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "IN-COAL-MINE?": {
   "name": "IN-COAL-MINE?",
   "file": "guild.zil",
   "line": 261,
   "endLine": 267,
   "source": "<ROUTINE IN-COAL-MINE? ()\n\t <COND (<OR <EQUAL? ,HERE ,COAL-BIN-ROOM ,DIAL-ROOM ,SHAFT-BOTTOM>\n\t\t    <EQUAL? ,HERE ,SHAFT-TOP ,TOP-OF-CHUTE ,SLANTED-ROOM>\n\t\t    <EQUAL? ,HERE ,COAL-MINE-1 ,COAL-MINE-2 ,COAL-MINE-3>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "IN-MAZE-AREA?": {
   "name": "IN-MAZE-AREA?",
   "file": "guild.zil",
   "line": 269,
   "endLine": 275,
   "source": "<ROUTINE IN-MAZE-AREA? ()\n\t <COND (<OR <EQUAL? ,HERE ,TOLL-GATE ,END-OF-HIGHWAY ,HOLLOW>\n\t\t    <EQUAL? ,HERE ,OUTSIDE-GLASS-DOOR ,GLASS-MAZE ,STORE>\n\t\t    <EQUAL? ,HERE ,ENTRANCE-HALL ,STONE-HUT ,OUTSIDE-STORE>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "IN-CRATER-AREA?": {
   "name": "IN-CRATER-AREA?",
   "file": "guild.zil",
   "line": 277,
   "endLine": 287,
   "source": "<ROUTINE IN-CRATER-AREA? ()\n\t <COND (<OR <EQUAL? ,HERE ,HIGHWAY ,BEND ,EDGE-OF-CRATER>\n\t\t    <EQUAL? ,HERE ,CRATER ,WINDING-TUNNEL ,HALL-OF-CARVINGS>\n\t\t    <EQUAL? ,HERE ,EDGE-OF-CHASM ,BARE-PASSAGE ,SOOTY-ROOM>\n\t\t    <EQUAL? ,HERE ,ELBOW-ROOM ,TREE-ROOM ,PARK-ENTRANCE>\n\t\t    <EQUAL? ,HERE ,EAST-END-OF-MIDWAY ,FLUME ,HAUNTED-HOUSE>\n\t\t    <EQUAL? ,HERE ,WEST-END-OF-MIDWAY ,ROLLER-COASTER ,ARCADE>\n\t\t    <EQUAL? ,HERE ,CASINO>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "IN-END-GAME?": {
   "name": "IN-END-GAME?",
   "file": "guild.zil",
   "line": 289,
   "endLine": 296,
   "source": "<ROUTINE IN-END-GAME? ()\n\t <COND (<OR <EQUAL? ,HERE ,OCEAN-NORTH ,OCEAN-SOUTH ,BELBOZ-HIDEOUT>\n\t\t    <EQUAL? ,HERE ,MOUTH-OF-RIVER ,GRUE-LAIR ,MAMMOTH-CAVERN>\n\t\t    <EQUAL? ,HERE ,CHAMBER-OF-LIVING-DEATH ,COVE ,LAGOON-FLOOR>\n\t\t    <EQUAL? ,HERE ,HALL-OF-ETERNAL-PAIN ,LAGOON>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "JOURNAL-F": {
   "name": "JOURNAL-F",
   "file": "guild.zil",
   "line": 309,
   "endLine": 350,
   "source": "<ROUTINE JOURNAL-F ()\n\t <COND (<VERB? READ EXAMINE LOOK-INSIDE>\n\t\t<COND (<FSET? ,JOURNAL ,OPENBIT>\n\t\t       <TELL\n\"You skim through the pages of the journal, a combination diary and notebook.\nMost of the notations, written in Belboz's familiar flowing script, deal with\nmeetings of the Circle and business of the Guild.|\n|\nThere is one interesting entry toward the end of the book. Belboz refers\nto an ancient and evil force known simply as Jeearr, a demon whose powers\ncould endanger the Circle and possibly the entire kingdom. He has decided\nto conduct some dangerous exploratory experiments, operating alone to\nshield the Circle from the perils involved.|\n|\nThe last three entries are strange and frightening -- written in a hand quite\ndifferent from that of Belboz, and in a language totally unfamiliar to you.|\n|\nOn the inside cover is an inscription, written in a light script,\nwhich reads \\\"Current code: \" <GET ,CODE-TABLE ,CODE-NUMBER> \"\\\".\" CR>)\n\t\t      (T\n\t\t       <TELL \"It's closed and sealed with a lock.\" CR>)>)\n\t       (<VERB? OPEN UNLOCK REZROV>\n\t\t<COND (<FSET? ,JOURNAL ,OPENBIT>\n\t\t       <TELL \"The journal is already open!\" CR>)\n\t       \t      (<VERB? REZROV>\n\t\t       <TELL\n\"The journal seems to bear a spell protecting it against\nthe simple rezrov spell.\" CR>)\n\t\t      (ELSE\n\t\t       <COND (<NOT ,PRSI>\n\t\t\t      <COND (<IN? ,KEY ,PROTAGONIST>\n\t\t\t\t     <SETG PRSI ,KEY>\n\t\t\t\t     <TELL \"(with the key)\" CR>)\n\t\t\t\t    (T\n\t\t\t\t     <SETG PRSI ,HANDS>)>)>\n\t\t       <COND (<EQUAL? ,PRSI ,KEY>\n\t\t\t      <FSET ,JOURNAL ,OPENBIT>\n\t\t\t      <TELL \"The journal springs open.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"You can't unlock it with\">\n\t\t\t      <ARTICLE ,PRSI>\n\t\t\t      <TELL \".\" CR>)>)>)>>"
  },
  "WHEEL-F": {
   "name": "WHEEL-F",
   "file": "guild.zil",
   "line": 361,
   "endLine": 376,
   "source": "<ROUTINE WHEEL-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"Like most infotaters, this one has several windows and a rotating data\nwheel. It is leather-bound and beautifully illustrated. \">\n\t\t<INFOTATER-NOTE>)\n\t       (<VERB? READ>\n\t\t<TELL\n\"The infotater has entries on a dozen native beasts. \">\n\t\t<INFOTATER-NOTE>)\n\t       (<VERB? TURN SPIN>\n\t\t<TELL \"Refer to the infotater in your SORCERER package.\" CR>)\n\t       (<VERB? RESEARCH>\n\t\t<TELL\n\"The infotater, which popular legends say was invented by Entharion the\nWise, is the best way to store data ever discovered.\" CR>)>>"
  },
  "INFOTATER-NOTE": {
   "name": "INFOTATER-NOTE",
   "file": "guild.zil",
   "line": 378,
   "endLine": 380,
   "source": "<ROUTINE INFOTATER-NOTE ()\n\t <TELL\n\"(NOTE: This is the infotater included in your game package.)\" CR>>"
  },
  "WALL-HANGING-F": {
   "name": "WALL-HANGING-F",
   "file": "guild.zil",
   "line": 390,
   "endLine": 410,
   "source": "<ROUTINE WALL-HANGING-F ()\n\t <COND (<VERB? MOVE LOOK-BEHIND LOOK-UNDER RUB SHAKE RAISE>\n\t\t<COND (<NOT <FSET? ,KEY ,TOUCHBIT>>\n\t\t       <MOVE ,KEY ,HERE>\n\t\t       <THIS-IS-IT ,KEY>\n\t\t       <FSET ,KEY ,TOUCHBIT>\n\t\t       <SETG SCORE <+ ,SCORE 15>>\n\t\t       <TELL\n\"As you move the tapestry, a key falls out from behind it\nand lands on the floor.\" CR>)\n\t\t      (T\n\t\t       <TELL \"Nope, no more keys.\" CR>)>)\n\t       (<VERB? TAKE UNTIE>\n\t\t<TELL\n\"It looks too well fastened to remove from the wall.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"It is a beautiful piece of local handiwork, given to Belboz by the\ngrateful townspeople after his (admittedly showy) pyrotechnical\ndestruction of the evil giant Amathradonis. The hanging is affixed to\nthe wall at its upper corners.\" CR>)>> "
  },
  "MORGIA-PLANT-F": {
   "name": "MORGIA-PLANT-F",
   "file": "guild.zil",
   "line": 428,
   "endLine": 444,
   "source": "<ROUTINE MORGIA-PLANT-F ()\n\t <COND (<VERB? MEEF>\n\t\t<MOVE ,MORGIA-PLANT ,DIAL>\n\t\t<TELL\n\"The morgia plant, particularly susceptible to the meef spell, shrivels\nup and vanishes.\" CR>)\n\t       (<VERB? TAKE>\n\t\t<TELL\n\"The plant is so heavy you succeed only in budging it a few inches.\" CR>)\n\t       (<VERB? EAT>\n\t\t<TELL\n\"Morgias taste terrible; besides, Belboz wouldn't like someone munching\non his favorite plant.\" CR>)\n\t       (<VERB? RESEARCH>\n\t\t<TELL\n\"A beautiful and exotic plant, the morgia is well-known for\nits susceptibility to magic spells.\" CR>)>>"
  },
  "HALLWAY-1-F": {
   "name": "HALLWAY-1-F",
   "file": "guild.zil",
   "line": 547,
   "endLine": 555,
   "source": "<ROUTINE HALLWAY-1-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<HALLWAY-DESC>\n\t\t<TELL \"A heavy wooden door, currently \">\n\t\t<COND (<FSET? ,CHAMBER-DOOR ,OPENBIT>\n\t\t       <TELL \"open\">)\n\t\t      (T\n\t\t       <TELL \"closed\">)>\n\t\t<TELL \", leads north.\" CR>)>>"
  },
  "HALLWAY-2-F": {
   "name": "HALLWAY-2-F",
   "file": "guild.zil",
   "line": 569,
   "endLine": 573,
   "source": "<ROUTINE HALLWAY-2-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<HALLWAY-DESC>\n\t\t<TELL\n\"A large marble archway to the south leads into an open area.\" CR>)>>"
  },
  "HALLWAY-DESC": {
   "name": "HALLWAY-DESC",
   "file": "guild.zil",
   "line": 575,
   "endLine": 577,
   "source": "<ROUTINE HALLWAY-DESC ()\n\t <TELL\n\"Rooms lie to the east and west from this north-south corridor. \">>"
  },
  "CHAMBER-OF-THE-CIRCLE-F": {
   "name": "CHAMBER-OF-THE-CIRCLE-F",
   "file": "guild.zil",
   "line": 595,
   "endLine": 606,
   "source": "<ROUTINE CHAMBER-OF-THE-CIRCLE-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"The meeting place of the Circle of Enchanters is a large, round room with\na high domed ceiling. A table occupies the center of the room. Engraved on\nthe wall is a list of tenets, the Guild's code of honor. The only door, at\nthe southernmost point of the perimeter, is \">\n\t\t<COND (<FSET? ,CHAMBER-DOOR ,OPENBIT>\n\t\t       <TELL \"open\">)\n\t\t      (T\n\t\t       <TELL \"closed\">)>\n\t\t<TELL \".\" CR>)>>"
  },
  "TABLE-PSEUDO": {
   "name": "TABLE-PSEUDO",
   "file": "guild.zil",
   "line": 610,
   "endLine": 620,
   "source": "<ROUTINE TABLE-PSEUDO ()\n\t <COND (<VERB? PUT-ON CLIMB-ON>\n\t\t<SETG TABLE-WARNING T>\n\t\t<TELL\n\"A warning nymph appears, floating over the table. \\\"The servants just\nfinished waxing the table, and it's still wet.\\\" With a sly grin, the\nnymph vanishes.\" CR>)\n\t       (<AND ,TABLE-WARNING\n\t\t     <VERB? PULVER>>\n\t\t<TELL\n\"That would cause the wax to dry dull and yellowish!\" CR>)>> "
  },
  "MARBLE-PSEUDO": {
   "name": "MARBLE-PSEUDO",
   "file": "guild.zil",
   "line": 660,
   "endLine": 661,
   "source": "<ROUTINE MARBLE-PSEUDO ()\n\t <RFALSE>>"
  },
  "I-MAILMAN": {
   "name": "I-MAILMAN",
   "file": "guild.zil",
   "line": 674,
   "endLine": 688,
   "source": "<ROUTINE I-MAILMAN ()\n\t <MOVE ,MAGAZINE ,MAILBOX>\n\t <FCLEAR ,MAILBOX ,OPENBIT>\n\t <COND (<IN? ,MATCHBOOK ,MAILBOX>\n\t\t<MOVE ,VILSTU-VIAL ,MAILBOX>\n\t\t<MOVE ,MATCHBOOK ,DIAL>)>\n\t <COND (<EQUAL? ,HERE ,LOBBY>\n\t\t<SETG MAILMAN-FOLLOW T>\n\t\t<ENABLE <QUEUE I-MAILMAN-FOLLOW 1>>\n\t\t<TELL CR\n\"A member of the Messengers Guild walks up and puts something in the\nreceptacle. He closes it, and rings the doorbell. Noticing you, he gives\na friendly wave before departing.\" CR>)\n\t       (<IN-GUILD-HALL?>\n\t\t<TELL CR \"The Guild Hall doorbell chimes.\" CR>)>>"
  },
  "I-MAILMAN-FOLLOW": {
   "name": "I-MAILMAN-FOLLOW",
   "file": "guild.zil",
   "line": 692,
   "endLine": 694,
   "source": "<ROUTINE I-MAILMAN-FOLLOW ()\n\t <SETG MAILMAN-FOLLOW <>>\n\t <RFALSE>>"
  },
  "MAGAZINE-F": {
   "name": "MAGAZINE-F",
   "file": "guild.zil",
   "line": 705,
   "endLine": 717,
   "source": "<ROUTINE MAGAZINE-F ()\n\t <COND (<VERB? OPEN LOOK-INSIDE READ>\n\t\t<TELL\n\"This month's cover story is about Belboz! Other stories relate the\nexplosion of spell scroll manufacturers, and the coming shakedown in\nthe magic potion industry. The address label on the cover reads:||\">\n\t\t<FIXED-FONT-ON>\n\t\t<TELL\"\n   \\\"Z5 ACCAR256 4-964|\n    Hall of the Guild of Enchanters|\n    Village of Accardi-By-The-Sea|\n    Land of Frobozz\\\"\" CR>\n\t\t<FIXED-FONT-OFF>)>>"
  },
  "VILSTU-VIAL-F": {
   "name": "VILSTU-VIAL-F",
   "file": "guild.zil",
   "line": 731,
   "endLine": 738,
   "source": "<ROUTINE VILSTU-VIAL-F ()\n\t <COND (<VERB? READ>\n\t\t<FIXED-FONT-ON>\n\t\t<TELL\n\"|\n       \\\"VILSTU POTION|\n(obviate need for breathing)\\\"\" CR>\n\t\t<FIXED-FONT-OFF>)>>"
  },
  "VILSTU-POTION-F": {
   "name": "VILSTU-POTION-F",
   "file": "guild.zil",
   "line": 748,
   "endLine": 772,
   "source": "<ROUTINE VILSTU-POTION-F ()\n\t <COND (<AND <VERB? EAT DRINK>\n\t\t     <NOT <IN? ,VILSTU-VIAL ,PROTAGONIST>>>\n\t\t<POTION-POUR ,VILSTU-VIAL>)\n\t       (<VERB? RESEARCH>\n\t\t<READ-ABOUT-POTIONS 3>)\n\t       (<VERB? EAT DRINK>\n\t\t<MOVE ,VILSTU-POTION ,DIAL>\n\t\t<COND (,UNDER-INFLUENCE\n\t\t       <TWO-POTIONS>\n\t\t       <RTRUE>)>\n\t\t<SETG UNDER-INFLUENCE ,VILSTU-POTION>\n\t\t<ENABLE <QUEUE I-BREATHE 19>>\n\t\t<SETG VILSTUED T>\n\t\t<COND (<EQUAL? ,HERE ,COAL-BIN-ROOM ,DIAL-ROOM>\n\t\t       <DISABLE <INT I-SUFFOCATE>>\n\t\t       <ENABLE <QUEUE I-OLDER-SELF 1>>)>\n\t\t<TELL\n\"The orange potion tasted like pepper, and made your nose tingle.\" CR>)\n\t       (<VERB? DROP>\n\t\t<PERFORM ,V?POUR ,PRSO ,PRSI>\n\t\t<RTRUE>)\n\t       (<AND <VERB? POUR>\n\t\t     <EQUAL? ,PRSO ,VILSTU-POTION>>\n\t\t<POTION-POUR ,VILSTU-VIAL>)>>"
  },
  "I-BREATHE": {
   "name": "I-BREATHE",
   "file": "guild.zil",
   "line": 778,
   "endLine": 812,
   "source": "<ROUTINE I-BREATHE ()\n\t <SETG BREATH-SHORTAGE <+ ,BREATH-SHORTAGE 1>>\n\t <COND (<EQUAL? ,UNDER-INFLUENCE ,VILSTU-POTION>\n\t\t<SETG UNDER-INFLUENCE <>>)>\n\t <COND (<EQUAL? ,BREATH-SHORTAGE 1>\n\t\t<ENABLE <QUEUE I-BREATHE 4>>\n\t\t<TELL CR\n\"You feel the vilstu potion beginning to wear off\">\n\t\t<COND (<IN-COAL-MINE?>\n\t\t       <TELL \", and the air here seems pretty unbreathable\">)>\n\t\t<TELL \".\" CR>)\n\t       (<EQUAL? ,BREATH-SHORTAGE 2>\n\t\t<ENABLE <QUEUE I-BREATHE 6>>\n\t\t<TELL CR\n\"The vilstu potion has almost completely worn off now\">\n\t\t<COND (<IN-COAL-MINE?>\n\t\t       <TELL\n\", and I doubt you could survive here without it\">)>\n\t\t<TELL \".\" CR>)\n\t       (T\n\t\t<SETG VILSTUED <>>\n\t\t<COND (<EQUAL? ,HERE ,LAGOON-FLOOR>\n\t\t       <ENABLE <QUEUE I-DROWN -1>>)>\n\t\t<TELL CR\n\"You feel the final effects of the vilstu potion vanish\">\n\t\t<COND (<IN-COAL-MINE?>\n\t\t       <JIGS-UP\n\". Unfortunately, coal gas is a poor substitute for oxygen.\">)\n\t\t      (T\n\t\t       <SETG AWAKE 8>\n\t\t       <SETG LOAD-ALLOWED 20>\n\t\t       <SETG FUMBLE-NUMBER 1>\n\t\t       <ENABLE <QUEUE I-TIRED 8>>\n\t\t       <TELL\n\", leaving you totally exhausted (an unfortunate side effect).\" CR>)>)>> "
  },
  "STAND-PSEUDO": {
   "name": "STAND-PSEUDO",
   "file": "guild.zil",
   "line": 827,
   "endLine": 829,
   "source": "<ROUTINE STAND-PSEUDO ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"A volume lies open on the stand.\" CR>)>>"
  },
  "ENCYCLOPEDIA-F": {
   "name": "ENCYCLOPEDIA-F",
   "file": "guild.zil",
   "line": 842,
   "endLine": 866,
   "source": "<ROUTINE ENCYCLOPEDIA-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"The volume lies open to \">\n\t\t<COND (,VOLUME-USED\n\t\t       <TELL \"a random entry.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"an entry about the Glass Maze of King Duncanthrax. \">\n\t\t       <PERFORM ,V?RESEARCH ,MAZE>\n\t\t       <CRLF>\n\t\t       <TELL\n\"You could probably read about all sorts of other interesting people,\nplaces, and things by looking them up in the encyclopedia.\" CR>)>)\n\t       (<VERB? OPEN>\n\t\t<TELL \"It is.\" CR>)\n\t       (<VERB? CLOSE>\n\t\t<TELL \"Why bother?\" CR>)\n\t       (<VERB? TAKE>\n\t\t<TELL\n\"A library nymph appears, sitting on your wrist. \\\"Sorry, but the\nencyclopedia is never to be removed from the stand.\\\" Kicking you gently\nin the thumb, the nymph vanishes.\" CR>)\n\t       (<VERB? LOOK-INSIDE>\n\t        <PERFORM ,V?READ ,PRSO>\n\t\t<RTRUE>)>> "
  },
  "BERZIO-VIAL-F": {
   "name": "BERZIO-VIAL-F",
   "file": "guild.zil",
   "line": 915,
   "endLine": 922,
   "source": "<ROUTINE BERZIO-VIAL-F ()\n\t <COND (<VERB? READ>\n\t\t<FIXED-FONT-ON>\n\t\t<TELL\n\"|\n        \\\"BERZIO POTION|\n(obviate need for food or drink)\\\"\" CR>\n\t\t<FIXED-FONT-OFF>)>>"
  },
  "BERZIO-POTION-F": {
   "name": "BERZIO-POTION-F",
   "file": "guild.zil",
   "line": 934,
   "endLine": 958,
   "source": "<ROUTINE BERZIO-POTION-F ()\n\t <COND (<AND <VERB? EAT DRINK>\n\t\t     <NOT <IN? ,BERZIO-VIAL ,PROTAGONIST>>>\n\t\t<POTION-POUR ,BERZIO-VIAL>)\n\t       (<VERB? RESEARCH>\n\t\t<READ-ABOUT-POTIONS 1>)\n\t       (<VERB? EAT DRINK>\n\t\t<MOVE ,BERZIO-POTION ,DIAL>\n\t\t<SETG BERZIOED T>\n\t\t<ENABLE <QUEUE I-UNBERZIO 100>>\n\t\t<SETG SCORE <+ ,SCORE 10>>\n\t\t<TELL \"The potion was completely tasteless.\">\n\t\t<COND (<OR <G? ,HUNGER-LEVEL 0>\n\t\t\t   <G? ,THIRST-LEVEL 0>>\n\t\t       <TELL\n\" You no longer feel hungry and thirsty, though.\">)>\n\t\t<SETG HUNGER-LEVEL 0>\n\t\t<SETG THIRST-LEVEL 0>\n\t\t<CRLF>)\n\t       (<VERB? DROP>\n\t\t<PERFORM ,V?POUR ,PRSO ,PRSI>\n\t\t<RTRUE>)\n\t       (<AND <VERB? POUR>\n\t\t     <EQUAL? ,PRSO ,BERZIO-POTION>>\n\t\t<POTION-POUR ,BERZIO-VIAL>)>>"
  },
  "I-UNBERZIO": {
   "name": "I-UNBERZIO",
   "file": "guild.zil",
   "line": 960,
   "endLine": 962,
   "source": "<ROUTINE I-UNBERZIO ()\n\t <SETG BERZIOED <>>\n\t <RFALSE>>"
  },
  "MATCHBOOK-F": {
   "name": "MATCHBOOK-F",
   "file": "guild.zil",
   "line": 973,
   "endLine": 994,
   "source": "<ROUTINE MATCHBOOK-F ()\n\t <COND (<VERB? CLOSE>\n\t\t<TELL \"Why bother?\" CR>)\n\t       (<VERB? OPEN EXAMINE COUNT STRIKE>\n\t\t<TELL\n\"The matches are all gone, but there is some printing on the\ninner cover.\" CR>)\n\t       (<VERB? READ>\n\t\t<FIXED-FONT-ON>\n\t\t<TELL\n\"\\\"Amazing Vilstu Potion!||\nGet by without breathing! Amaze your|\nfriends! Be the first person on the|\nblock to own some!||\nOrder today by dropping this in any|\nmailbox. Our shipping department will|\nuse the latest in temporal travel|\ntechniques to insure that your potion|\narrives the same day you order it!|\n(Orders received before noon will|\narrive the day before you order).\\\"\" CR>\n\t\t<FIXED-FONT-OFF>)>>"
  },
  "CALENDAR-F": {
   "name": "CALENDAR-F",
   "file": "guild.zil",
   "line": 1010,
   "endLine": 1013,
   "source": "<ROUTINE CALENDAR-F ()\n\t <COND (<VERB? OPEN LOOK-INSIDE>\n\t\t<PERFORM ,V?READ ,CALENDAR>\n\t\t<RTRUE>)>>"
  },
  "COBWEB-PSEUDO": {
   "name": "COBWEB-PSEUDO",
   "file": "guild.zil",
   "line": 1029,
   "endLine": 1030,
   "source": "<ROUTINE COBWEB-PSEUDO ()\n\t <RFALSE>>"
  },
  "TRUNK-F": {
   "name": "TRUNK-F",
   "file": "guild.zil",
   "line": 1085,
   "endLine": 1095,
   "source": "<ROUTINE TRUNK-F ()\n\t <COND (<AND <VERB? TAKE>\n\t\t     <EQUAL? ,PRSO ,TRUNK>>\n\t\t<TELL \"It's too heavy to even budge.\" CR>)\n\t       (<NOT <FSET? ,TRUNK ,OPENBIT>>\n\t\t<COND (<VERB? OPEN>\n\t\t       <TELL \"The lid won't budge.\" CR>)\n\t\t      (<VERB? UNLOCK>\n\t\t       <TELL \"Perhaps the buttons...\" CR>)\n\t\t      (<VERB? REZROV>\n\t\t       <TELL \"The lid bulges outward for a moment.\" CR>)>)>>"
  },
  "BUTTON-F": {
   "name": "BUTTON-F",
   "file": "guild.zil",
   "line": 1139,
   "endLine": 1165,
   "source": "<ROUTINE BUTTON-F ()\n\t <COND (<VERB? LOOK-UNDER>\n\t\t<TELL <PICK-ONE ,YUKS> CR>)\n\t       (<VERB? PUSH>\n\t        <TELL \"There is a click from the lid of the trunk\">\n\t\t<COND (<OR <AND <EQUAL? ,PRSO ,BLACK-BUTTON>\n\t\t\t\t<EQUAL? ,NEXT-NUMBER 1>>\n\t\t\t   <AND <EQUAL? ,PRSO ,GRAY-BUTTON>\n\t\t\t\t<EQUAL? ,NEXT-NUMBER 2>>\n\t\t\t   <AND <EQUAL? ,PRSO ,RED-BUTTON>\n\t\t\t\t<EQUAL? ,NEXT-NUMBER 3>>\n\t\t\t   <AND <EQUAL? ,PRSO ,PURPLE-BUTTON>\n\t\t\t\t<EQUAL? ,NEXT-NUMBER 4>>\n\t\t\t   <AND <EQUAL? ,PRSO ,WHITE-BUTTON>\n\t\t\t\t<EQUAL? ,NEXT-NUMBER 5>>>\n\t\t       <SETG CURRENT-TLOC <+ ,CURRENT-TLOC 1>>\n\t\t       <SETG NEXT-NUMBER <GET ,NEXT-CODE-TABLE ,CURRENT-TLOC>>\n\t\t       <COND (<AND <EQUAL? ,NEXT-NUMBER 0>\n\t\t\t\t   <NOT ,TRUNK-SCREWED>>\n\t\t\t      <FSET ,TRUNK ,OPENBIT>\n\t\t\t      <SETG SCORE <+ ,SCORE 25>>\n\t\t\t      <TELL\n\". A moment later, the lid of the trunk swings slowly open, revealing \">\n\t\t\t      <PRINT-CONTENTS ,TRUNK>)>)\n\t\t      (T\n\t\t       <SETG TRUNK-SCREWED T>)>\n\t\t<TELL \".\" CR>)>>"
  },
  "MAZE-F": {
   "name": "MAZE-F",
   "file": "maze.zil",
   "line": 13,
   "endLine": 33,
   "source": "<ROUTINE MAZE-F ()\n\t <COND (<VERB? THROUGH>\n\t\t<COND (<EQUAL? ,HERE ,OUTSIDE-GLASS-DOOR>\n\t\t       <DO-WALK ,P?EAST>)\n\t\t      (<EQUAL? ,HERE ,HOLLOW>\n\t\t       <DO-WALK ,P?WEST>)\n\t\t      (T\n\t\t       <LOOK-AROUND-YOU>)>)\n\t       (<VERB? DROP EXIT>\n\t\t<COND (<EQUAL? ,HERE ,GLASS-MAZE>\n\t\t       <DO-WALK ,P?OUT>)\n\t\t      (T\n\t\t       <LOOK-AROUND-YOU>)>)\n\t       (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<TELL\n\"You see nothing but reflected light in all directions.\" CR>)\n\t       (<VERB? RESEARCH>\n\t\t<TELL\n\"According to the article, Duncanthrax built the Glass Maze on a whim,\nto amuse his friends and torture his enemies. A labyrinth of 27 cubicles, it\nwas full of devilish pitfalls and was located near his castle, Egreth.\" CR>)>>"
  },
  "HOVEL-F": {
   "name": "HOVEL-F",
   "file": "maze.zil",
   "line": 59,
   "endLine": 74,
   "source": "<ROUTINE HOVEL-F ()\n\t <COND (<VERB? THROUGH>\n\t\t<COND (<EQUAL? ,HERE ,END-OF-HIGHWAY>\n\t\t       <DO-WALK ,P?EAST>)\n\t\t      (T\n\t\t       <LOOK-AROUND-YOU>)>)\n\t       (<VERB? DROP EXIT>\n\t\t<COND (<EQUAL? ,HERE ,STONE-HUT>\n\t\t       <DO-WALK ,P?WEST>)\n\t\t      (T\n\t\t       <LOOK-AROUND-YOU>)>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<COND (<EQUAL? ,HERE ,STONE-HUT>\n\t\t       <LOOK-AROUND-YOU>)\n\t\t      (T\n\t\t       <MAKE-OUT>)>)>>"
  },
  "CHIMNEY-EXIT-F": {
   "name": "CHIMNEY-EXIT-F",
   "file": "maze.zil",
   "line": 90,
   "endLine": 97,
   "source": "<ROUTINE CHIMNEY-EXIT-F ()\n\t <COND (,FWEEPED\n\t\t<TELL \"Too narrow even for bats.\" CR>\n\t\t<RFALSE>)\n\t       (T\n\t\t<TELL\n\"Where did you get the bizarre notion that you might fit up a chimney?\" CR>\n\t\t<RFALSE>)>>"
  },
  "FIREPLACE-F": {
   "name": "FIREPLACE-F",
   "file": "maze.zil",
   "line": 108,
   "endLine": 110,
   "source": "<ROUTINE FIREPLACE-F ()\n\t <COND (<VERB? OPEN CLOSE>\n\t\t<V-DEFLATE>)>>"
  },
  "STATUE-F": {
   "name": "STATUE-F",
   "file": "maze.zil",
   "line": 142,
   "endLine": 167,
   "source": "<ROUTINE STATUE-F ()\n\t <COND (<VERB? MALYON>\n\t\t<TELL\n\"The statue transforms into a living figure, probably a King if the royal\nattire is any clue. The King seems angry, and quickly settles his wrathful\ngaze on you. He bellows \\\"Guards! Throw this trespasser into the glass\nmaze! Guards! ... GUARDS!!!\\\" When the guards fail to respond, the King\nbecomes livid, his voice rises to an incoherent squeak, and flecks of foam\nspit from the corners of his mouth. Finally, eyes bulging with rage, he\nstorms out of the room.\" CR>\n\t\t<FSET ,STATUE ,TOUCHBIT>\n\t\t<SETG STATUE-FOLLOW T>\n\t\t<ENABLE <QUEUE I-STATUE-UNFOLLOW 1>>\n\t\t<COND (<EQUAL? ,HERE ,ENTRANCE-HALL ,OUTSIDE-STORE>\n\t\t       <COND (<PROB 50>\n\t\t\t      <MOVE ,STATUE ,HIGHWAY>)\n\t\t\t     (T\n\t\t\t      <MOVE ,STATUE ,BEND>)>)\n\t\t      (T\n\t\t       <COND (<PROB 50>\n\t\t\t      <MOVE ,STATUE ,ENTRANCE-HALL>)\n\t\t\t     (T\n\t\t\t      <MOVE ,STATUE ,OUTSIDE-STORE>)>)>)\n\t       (<AND <VERB? FOLLOW>\n\t\t     ,STATUE-FOLLOW>\n\t\t<TELL \"The King moved too quickly to follow.\" CR>)>>"
  },
  "I-STATUE-UNFOLLOW": {
   "name": "I-STATUE-UNFOLLOW",
   "file": "maze.zil",
   "line": 171,
   "endLine": 173,
   "source": "<ROUTINE I-STATUE-UNFOLLOW ()\n\t <SETG STATUE-FOLLOW <>>\n\t <RFALSE>>"
  },
  "NO-FLOOR?": {
   "name": "NO-FLOOR?",
   "file": "maze.zil",
   "line": 188,
   "endLine": 196,
   "source": "<ROUTINE NO-FLOOR? ()\n\t <COND (<AND ,MAZE-CROSSED\n\t\t     <EQUAL? <GET ,POST-DOWN-EXITS ,ROOM-NUMBER> 0>>\n\t\t<RFALSE>)\n\t       (<AND <NOT ,MAZE-CROSSED>\n\t\t     <EQUAL? <GET ,PRE-DOWN-EXITS ,ROOM-NUMBER> 0>>\n\t\t<RFALSE>)\n\t       (T\n\t\t<RTRUE>)>>"
  },
  "GLASS-MAZE-F": {
   "name": "GLASS-MAZE-F",
   "file": "maze.zil",
   "line": 212,
   "endLine": 238,
   "source": "<ROUTINE GLASS-MAZE-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<TABLE-TO-MAZE ,ROOM-NUMBER>\n\t\t<FCLEAR ,GLASS-MAZE ,TOUCHBIT>\n\t\t<PUT ,VEZZAS 5 0>)\n\t       (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are inside a huge cubical maze, shimmering with light from an unseen\nsource above.\">\n\t\t<COND (<NOT ,FWEEPED>\n\t\t       <TELL\n\" It is impossible to tell if the walls and ceilings around you are\nglass surfaces or openings.\">)>\n\t\t<COND (<AND <NOT ,FLYING>\n\t\t\t    <NO-FLOOR?>\n\t\t\t    <EQUAL? ,ROOM-NUMBER 13>>\n\t\t       <TELL \" \">\n\t\t       <PLUMMET>\n\t\t       <RTRUE>)>\n\t\t<COND (<AND <NOT ,FLYING>\n\t\t\t    <NOT <NO-FLOOR?>>>\n\t\t       <TELL\n\" Since you are standing on something, the floor must be solid, but it is\nvirtually invisible and you feel as though you were walking on air.\">)>\n\t\t<COND (,FWEEPED\n\t\t       <RADAR-VIEW>)>\n\t\t<CRLF>)>>"
  },
  "RADAR-VIEW": {
   "name": "RADAR-VIEW",
   "file": "maze.zil",
   "line": 240,
   "endLine": 335,
   "source": "<ROUTINE RADAR-VIEW (\"AUX\" X COUNT LUP LDOWN NORTH SOUTH EAST WEST)\n\t <SET X <>>\n\t <SET LUP <>>\n\t <SET LDOWN <>>\n\t <SET NORTH <>>\n\t <SET SOUTH <>>\n\t <SET EAST <>>\n\t <SET WEST <>>\n\t <SET COUNT 0> ;\"number of surfaces\"\n\t <TELL\n\" Thanks to your sonar-like bat senses, you can tell that there are surfaces \">\n\t <COND (<OR <AND ,MAZE-CROSSED\n\t\t\t <EQUAL? <GET ,POST-UP-EXITS ,ROOM-NUMBER> 0>>\n\t\t    <AND <NOT ,MAZE-CROSSED>\n\t\t\t <EQUAL? <GET ,PRE-UP-EXITS ,ROOM-NUMBER> 0>>>\n\t\t<SET LUP T>\n\t\t<SET COUNT <+ .COUNT 1>>)>\n\t <COND (<OR <AND ,MAZE-CROSSED\n\t\t\t <EQUAL? <GET ,POST-DOWN-EXITS ,ROOM-NUMBER> 0>>\n\t\t    <AND <NOT ,MAZE-CROSSED>\n\t\t\t <EQUAL? <GET ,PRE-DOWN-EXITS ,ROOM-NUMBER> 0>>>\n\t\t<SET LDOWN T>\n\t\t<SET COUNT <+ .COUNT 1>>)>\n\t <COND (<OR <AND ,MAZE-CROSSED\n\t\t\t <EQUAL? <GET ,POST-NORTH-EXITS ,ROOM-NUMBER> 0>>\n\t\t    <AND <NOT ,MAZE-CROSSED>\n\t\t\t <EQUAL? <GET ,PRE-NORTH-EXITS ,ROOM-NUMBER> 0>>>\n\t\t<SET NORTH T>\n\t\t<SET COUNT <+ .COUNT 1>>)>\n\t <COND (<OR <AND ,MAZE-CROSSED\n\t\t\t <EQUAL? <GET ,POST-SOUTH-EXITS ,ROOM-NUMBER> 0>>\n\t\t    <AND <NOT ,MAZE-CROSSED>\n\t\t\t <EQUAL? <GET ,PRE-SOUTH-EXITS ,ROOM-NUMBER> 0>>>\n\t\t<SET SOUTH T>\n\t\t<SET COUNT <+ .COUNT 1>>)>\n\t <COND (<OR <AND ,MAZE-CROSSED\n\t\t\t <EQUAL? <GET ,POST-EAST-EXITS ,ROOM-NUMBER> 0>>\n\t\t    <AND <NOT ,MAZE-CROSSED>\n\t\t\t <EQUAL? <GET ,PRE-EAST-EXITS ,ROOM-NUMBER> 0>>>\n\t\t<SET EAST T>\n\t\t<SET COUNT <+ .COUNT 1>>)>\n\t <COND (<OR <AND ,MAZE-CROSSED\n\t\t\t <EQUAL? <GET ,POST-WEST-EXITS ,ROOM-NUMBER> 0>>\n\t\t    <AND <NOT ,MAZE-CROSSED>\n\t\t\t <EQUAL? <GET ,PRE-WEST-EXITS ,ROOM-NUMBER> 0>>>\n\t\t<SET WEST T>\n\t\t<SET COUNT <+ .COUNT 1>>)>\n\t <COND (.LUP\n\t\t<COND (<EQUAL? .COUNT 1>\n\t\t       <TELL \" and \">)\n\t\t      (.X\n\t\t       <TELL \", \">)>\n\t\t<SET X T>\n\t\t<SET COUNT <- .COUNT 1>>\n\t\t<TELL \"above you\">)>\n\t <COND (.LDOWN\n\t\t<COND (<EQUAL? .COUNT 1>\n\t\t       <TELL \" and \">)\n\t\t      (.X\n\t\t       <TELL \", \">)>\n\t\t<SET X T>\n\t\t<SET COUNT <- .COUNT 1>>\n\t\t<TELL \"below you\">)>\n\t <COND (.NORTH\n\t\t<COND (<EQUAL? .COUNT 1>\n\t\t       <TELL \" and \">)\n\t\t      (.X\n\t\t       <TELL \", \">)>\n\t\t<SET X T>\n\t\t<SET COUNT <- .COUNT 1>>\n\t\t<TELL \"to the north\">)>\n\t <COND (.SOUTH\n\t\t<COND (<EQUAL? .COUNT 1>\n\t\t       <TELL \" and \">)\n\t\t      (.X\n\t\t       <TELL \", \">)>\n\t\t<SET X T>\n\t\t<SET COUNT <- .COUNT 1>>\n\t\t<TELL \"to the south\">)>\n\t <COND (.EAST\n\t\t<COND (<EQUAL? .COUNT 1>\n\t\t       <TELL \" and \">)\n\t\t      (.X\n\t\t       <TELL \", \">)>\n\t\t<SET X T>\n\t\t<SET COUNT <- .COUNT 1>>\n\t\t<TELL \"to the east\">)>\n\t <COND (.WEST\n\t\t<COND (<EQUAL? .COUNT 1>\n\t\t       <TELL \" and \">)\n\t\t      (.X\n\t\t       <TELL \", \">)>\n\t\t<SET X T>\n\t\t<SET COUNT <- .COUNT 1>>\n\t\t<TELL \"to the west\">)>\n\t <TELL \".\">>"
  },
  "MAZE-EXIT-F": {
   "name": "MAZE-EXIT-F",
   "file": "maze.zil",
   "line": 337,
   "endLine": 461,
   "source": "<ROUTINE MAZE-EXIT-F ()\n\t <COND (,MAZE-CROSSED\n;\"post-maze-exit-function\"\n\t <MAZE-TO-TABLE ,ROOM-NUMBER>\n\t <COND (<EQUAL? ,PRSO ,P?UP>\n\t\t<COND (<NOT ,FLYING>\n\t\t       <CANT-JUMP>\n\t\t       <TABLE-TO-MAZE ,ROOM-NUMBER>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <COND (<EQUAL? <GET ,POST-UP-EXITS ,ROOM-NUMBER> 0>\n\t\t\t      <HIT-WALL>\n\t\t\t      <RFALSE>)\n\t\t\t     (T\n\t\t\t      <SETG ROOM-NUMBER\n\t\t\t\t    <GET ,POST-UP-EXITS ,ROOM-NUMBER>>)>)>)\n\t       (<EQUAL? ,PRSO ,P?DOWN>\n\t\t<COND (<NOT ,FLYING>\n\t\t       <SOLID-FLOOR>\n\t\t       <TABLE-TO-MAZE ,ROOM-NUMBER>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <COND (<EQUAL? <GET ,POST-DOWN-EXITS ,ROOM-NUMBER> 0>\n\t\t\t      <HIT-WALL>\n\t\t\t      <RFALSE>)\n\t\t\t     (T\n\t\t\t      <SETG ROOM-NUMBER\n\t\t\t\t    <GET ,POST-DOWN-EXITS ,ROOM-NUMBER>>)>)>)\n\t       (<EQUAL? ,PRSO ,P?NORTH>\n\t\t<COND (<EQUAL? <GET ,POST-NORTH-EXITS ,ROOM-NUMBER> 0>\n\t\t       <HIT-WALL>\n\t\t       <RFALSE>)\n\t\t    (T\n\t\t     <SETG ROOM-NUMBER <GET ,POST-NORTH-EXITS ,ROOM-NUMBER>>)>)\n\t       (<EQUAL? ,PRSO ,P?SOUTH>\n\t\t<COND (<EQUAL? <GET ,POST-SOUTH-EXITS ,ROOM-NUMBER> 0>\n\t\t       <HIT-WALL>\n\t\t       <RFALSE>)\n\t\t    (T\n\t\t     <SETG ROOM-NUMBER <GET ,POST-SOUTH-EXITS ,ROOM-NUMBER>>)>)\n\t       (<EQUAL? ,PRSO ,P?EAST>\n\t\t<COND (<EQUAL? <GET ,POST-EAST-EXITS ,ROOM-NUMBER> 0>\n\t\t       <HIT-WALL>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <SETG ROOM-NUMBER <GET ,POST-EAST-EXITS ,ROOM-NUMBER>>\n\t\t       <COND (<EQUAL? ,ROOM-NUMBER 30>\n\t\t\t      <SETG ROOM-NUMBER 24>\n\t\t\t      <RETURN ,HOLLOW>)>)>)\n\t       (<EQUAL? ,PRSO ,P?WEST>\n\t\t<COND (<EQUAL? <GET ,POST-WEST-EXITS ,ROOM-NUMBER> 0>\n\t\t       <HIT-WALL>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <SETG ROOM-NUMBER <GET ,POST-WEST-EXITS ,ROOM-NUMBER>>\n\t\t       <COND (<EQUAL? ,ROOM-NUMBER 40>\n\t\t\t      <SETG ROOM-NUMBER 13>\n\t\t\t      <RETURN ,OUTSIDE-GLASS-DOOR>)>)>)>\n\t <TABLE-TO-MAZE ,ROOM-NUMBER>\n\t <V-LOOK>\n\t <PLUMMET>\n\t <RFALSE>)\n\t       (T\n;\"pre-maze-exit-funtion\"\n\t <MAZE-TO-TABLE ,ROOM-NUMBER>\n\t <COND (<EQUAL? ,PRSO ,P?UP>\n\t\t<COND (<NOT ,FLYING>\n\t\t       <CANT-JUMP>\n\t\t       <TABLE-TO-MAZE ,ROOM-NUMBER>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <COND (<EQUAL? <GET ,PRE-UP-EXITS ,ROOM-NUMBER> 0>\n\t\t\t      <HIT-WALL>\n\t\t\t      <RFALSE>)\n\t\t\t     (T\n\t\t\t      <SETG ROOM-NUMBER\n\t\t\t\t    <GET ,PRE-UP-EXITS ,ROOM-NUMBER>>)>)>)\n\t       (<EQUAL? ,PRSO ,P?DOWN>\n\t\t<COND (<NOT ,FLYING>\n\t\t       <SOLID-FLOOR>\n\t\t       <TABLE-TO-MAZE ,ROOM-NUMBER>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <COND (<EQUAL? <GET ,PRE-DOWN-EXITS ,ROOM-NUMBER> 0>\n\t\t\t      <HIT-WALL>\n\t\t\t      <RFALSE>)\n\t\t\t     (T\n\t\t\t      <SETG ROOM-NUMBER\n\t\t\t\t    <GET ,PRE-DOWN-EXITS ,ROOM-NUMBER>>)>)>)\n\t       (<EQUAL? ,PRSO ,P?NORTH>\n\t\t<COND (<EQUAL? <GET ,PRE-NORTH-EXITS ,ROOM-NUMBER> 0>\n\t\t       <HIT-WALL>\n\t\t       <RFALSE>)\n\t\t     (T\n\t\t      <SETG ROOM-NUMBER <GET ,PRE-NORTH-EXITS ,ROOM-NUMBER>>)>)\n\t       (<EQUAL? ,PRSO ,P?SOUTH>\n\t\t<COND (<EQUAL? <GET ,PRE-SOUTH-EXITS ,ROOM-NUMBER> 0>\n\t\t       <HIT-WALL>\n\t\t       <RFALSE>)\n\t\t     (T\n\t\t      <SETG ROOM-NUMBER <GET ,PRE-SOUTH-EXITS ,ROOM-NUMBER>>)>)\n\t       (<EQUAL? ,PRSO ,P?EAST>\n\t\t<COND (<EQUAL? <GET ,PRE-EAST-EXITS ,ROOM-NUMBER> 0>\n\t\t       <HIT-WALL>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <SETG ROOM-NUMBER <GET ,PRE-EAST-EXITS ,ROOM-NUMBER>>\n\t\t       <COND (<EQUAL? ,ROOM-NUMBER 30>\n\t\t\t      <SETG SCORE <+ ,SCORE ,HOLLOW-POINT>>\n\t\t\t      <SETG HOLLOW-POINT 0>\n\t\t\t      <SETG ROOM-NUMBER 24>\n\t\t\t      <RETURN ,HOLLOW>)>)>)\n\t       (<EQUAL? ,PRSO ,P?WEST>\n\t\t<COND (<EQUAL? <GET ,PRE-WEST-EXITS ,ROOM-NUMBER> 0>\n\t\t       <HIT-WALL>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <SETG ROOM-NUMBER <GET ,PRE-WEST-EXITS ,ROOM-NUMBER>>\n\t\t       <COND (<EQUAL? ,ROOM-NUMBER 40>\n\t\t\t      <SETG ROOM-NUMBER 13>\n\t\t\t      <RETURN ,OUTSIDE-GLASS-DOOR>)>)>)>\n\t <TABLE-TO-MAZE ,ROOM-NUMBER>\n\t <V-LOOK>\n\t <PLUMMET>\n\t <RFALSE>)>>"
  },
  "HIT-WALL": {
   "name": "HIT-WALL",
   "file": "maze.zil",
   "line": 467,
   "endLine": 474,
   "source": "<ROUTINE HIT-WALL ()\n\t <TELL \"BONK! You \">\n\t <COND (,FLYING\n\t\t<TELL \"fly\">)\n\t       (T\n\t\t<TELL \"walk\">)>\n\t <TELL\n\" right into an almost invisible wall of glass -- a stunning blow!\" CR>>"
  },
  "CANT-JUMP": {
   "name": "CANT-JUMP",
   "file": "maze.zil",
   "line": 476,
   "endLine": 477,
   "source": "<ROUTINE CANT-JUMP ()\n\t <TELL \"You can't possibly jump that high.\" CR>>"
  },
  "SOLID-FLOOR": {
   "name": "SOLID-FLOOR",
   "file": "maze.zil",
   "line": 479,
   "endLine": 480,
   "source": "<ROUTINE SOLID-FLOOR ()\n\t <TELL \"Fortunately, the floor is solid.\" CR>> "
  },
  "PLUMMET": {
   "name": "PLUMMET",
   "file": "maze.zil",
   "line": 482,
   "endLine": 487,
   "source": "<ROUTINE PLUMMET ()\n\t <COND (<AND <NOT ,FLYING>\n\t\t     <NO-FLOOR?>>\n\t\t<JIGS-UP\n\"Unfortunately, this section of the glass maze has no floor.\">\n\t\t<RFALSE>)>>"
  },
  "MAZE-TO-TABLE": {
   "name": "MAZE-TO-TABLE",
   "file": "maze.zil",
   "line": 561,
   "endLine": 580,
   "source": "<ROUTINE MAZE-TO-TABLE (LOC \"AUX\" (CNT 0) (F <FIRST? ,GLASS-MAZE>) N)\n\t <REPEAT ()\n\t\t <COND (.F\n\t\t\t<SET N <NEXT? .F>>)\n\t\t       (T\n\t\t\t<RETURN>)>\n\t\t <COND (<EQUAL? .F ,WINNER>\n\t\t\tT)\n\t\t       (<OR <FSET? .F ,TAKEBIT>\n\t\t\t    <EQUAL? .F ,DORN-BEAST-CORPSE>>\n\t\t\t<REPEAT ()\n\t\t\t\t<COND (<EQUAL? <GET ,MAZE-TABLE .CNT> 0>\n\t\t\t\t       <PUT ,MAZE-TABLE .CNT .LOC>\n\t\t\t\t       <PUT ,MAZE-TABLE <+ .CNT 1> .F>\n\t\t\t\t       <SET CNT <+ .CNT 2>>\n\t\t\t\t       <MOVE .F ,DIAL>\n\t\t\t\t       <RETURN>)\n\t\t\t\t      (T\n\t\t\t\t       <SET CNT <+ .CNT 2>>)>>)>\n\t\t <SET F .N>>>"
  },
  "TABLE-TO-MAZE": {
   "name": "TABLE-TO-MAZE",
   "file": "maze.zil",
   "line": 582,
   "endLine": 589,
   "source": "<ROUTINE TABLE-TO-MAZE (LOC \"AUX\" (TABLE ,MAZE-TABLE) (CNT 0))\n\t <REPEAT ()\n\t\t <COND (<NOT <L? .CNT ,MAZE-TABLE-LENGTH>>\n\t\t\t<RETURN>)\n\t\t       (<EQUAL? <GET ,MAZE-TABLE .CNT> .LOC>\n\t\t\t<PUT ,MAZE-TABLE .CNT 0>\n\t\t\t<MOVE <GET ,MAZE-TABLE <+ .CNT 1>> ,GLASS-MAZE>)>\n\t\t <SET CNT <+ .CNT 2>>>>"
  },
  "DROP-IN-MAZE": {
   "name": "DROP-IN-MAZE",
   "file": "maze.zil",
   "line": 591,
   "endLine": 632,
   "source": "<ROUTINE DROP-IN-MAZE (\"AUX\" (CNT 0) (NEW-ROOM 0))\n\t <COND (,MAZE-CROSSED\n\t\t<COND (<EQUAL? ,ROOM-NUMBER 12>\n\t\t       <SET NEW-ROOM 3>)\n\t\t      (<EQUAL? ,ROOM-NUMBER 13>\n\t\t       <SET NEW-ROOM 4>)\n\t\t      (<EQUAL? ,ROOM-NUMBER 16>\n\t\t       <SET NEW-ROOM 7>)\n\t\t      (<EQUAL? ,ROOM-NUMBER 18>\n\t\t       <SET NEW-ROOM 9>)\n\t\t      (<EQUAL? ,ROOM-NUMBER 19>\n\t\t       <SET NEW-ROOM 10>)\n\t\t      (<EQUAL? ,ROOM-NUMBER 20>\n\t\t       <SET NEW-ROOM 11>)\n\t\t      (<EQUAL? ,ROOM-NUMBER 25>\n\t\t       <SET NEW-ROOM 7>)\n\t\t      (<EQUAL? ,ROOM-NUMBER 27>\n\t\t       <SET NEW-ROOM 9>)>)\n\t       (T\n\t\t<COND (<EQUAL? ,ROOM-NUMBER 10>\n\t\t       <SET NEW-ROOM 1>)\n\t\t      (<EQUAL? ,ROOM-NUMBER 12>\n\t\t       <SET NEW-ROOM 3>)\n\t\t      (<EQUAL? ,ROOM-NUMBER 16>\n\t\t       <SET NEW-ROOM 7>)\n\t\t      (<EQUAL? ,ROOM-NUMBER 20>\n\t\t       <SET NEW-ROOM 11>)\n\t\t      (<EQUAL? ,ROOM-NUMBER 21>\n\t\t       <SET NEW-ROOM 3>)\n\t\t      (<EQUAL? ,ROOM-NUMBER 26>\n\t\t       <SET NEW-ROOM 17>)>)>\n\t <COND (<EQUAL? .NEW-ROOM 0>\n\t\t<TELL \"Bug #14\" CR>\n\t\t<RTRUE>)>\n\t <REPEAT ()\n\t\t <COND (<EQUAL? <GET ,MAZE-TABLE .CNT> 0>\n\t\t\t<PUT ,MAZE-TABLE .CNT .NEW-ROOM>\n\t\t\t<PUT ,MAZE-TABLE <+ .CNT 1> ,PRSO>\n\t\t\t<SET CNT <+ .CNT 2>>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<SET CNT <+ .CNT 2>>)>>>"
  },
  "REARRANGE-MAZE-TABLE": {
   "name": "REARRANGE-MAZE-TABLE",
   "file": "maze.zil",
   "line": 634,
   "endLine": 654,
   "source": "<ROUTINE REARRANGE-MAZE-TABLE (\"AUX\" (CNT 0))\n\t <REPEAT ()\n\t\t <COND (<NOT <L? .CNT ,MAZE-TABLE-LENGTH>>\n\t\t\t<RETURN>)\n\t\t       (<EQUAL? <GET ,MAZE-TABLE .CNT> 12>\n\t\t\t<PUT ,MAZE-TABLE .CNT 3>)\n\t\t       (<EQUAL? <GET ,MAZE-TABLE .CNT> 13>\n\t\t\t<PUT ,MAZE-TABLE .CNT 4>)\n\t\t       (<EQUAL? <GET ,MAZE-TABLE .CNT> 16>\n\t\t\t<PUT ,MAZE-TABLE .CNT 7>)\n\t\t       (<EQUAL? <GET ,MAZE-TABLE .CNT> 18>\n\t\t\t<PUT ,MAZE-TABLE .CNT 9>)\n\t\t       (<EQUAL? <GET ,MAZE-TABLE .CNT> 19>\n\t\t\t<PUT ,MAZE-TABLE .CNT 10>)\n\t\t       (<EQUAL? <GET ,MAZE-TABLE .CNT> 20>\n\t\t\t<PUT ,MAZE-TABLE .CNT 11>)\n\t\t       (<EQUAL? <GET ,MAZE-TABLE .CNT> 25>\n\t\t\t<PUT ,MAZE-TABLE .CNT 7>)\n\t\t       (<EQUAL? <GET ,MAZE-TABLE .CNT> 27>\n\t\t\t<PUT ,MAZE-TABLE .CNT 9>)>\n\t\t <SET CNT <+ .CNT 2>>>>"
  },
  "HOLLOW-F": {
   "name": "HOLLOW-F",
   "file": "maze.zil",
   "line": 685,
   "endLine": 691,
   "source": "<ROUTINE HOLLOW-F (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-END>\n\t\t     <HELD? ,SPELL-BOOK>>\n\t\t<MOVE ,SPELL-BOOK ,DIAL>\n\t\t<TELL\n\"\\\"Caw! Caw!\\\" A giant bird of prey with a fondness for gnusto-receptive\npaper swoops down and flies off with your spell book.\" CR>)>>"
  },
  "CHIMNEY-F": {
   "name": "CHIMNEY-F",
   "file": "maze.zil",
   "line": 700,
   "endLine": 709,
   "source": "<ROUTINE CHIMNEY-F ()\n\t <COND (<EQUAL? ,HERE ,HOLLOW>\n\t\t<COND (<EQUAL? ,PRSO ,CHIMNEY>\n\t\t       <SETG PERFORMING-SPELL T>\n\t\t       <PERFORM ,PRSA ,BRICK-STRUCTURE ,PRSI>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <SETG PERFORMING-SPELL T>\n\t\t       <PERFORM ,PRSA ,PRSO ,BRICK-STRUCTURE>\n\t\t       <RTRUE>)>)>>"
  },
  "BRICK-STRUCTURE-F": {
   "name": "BRICK-STRUCTURE-F",
   "file": "maze.zil",
   "line": 719,
   "endLine": 740,
   "source": "<ROUTINE BRICK-STRUCTURE-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The structure is about two feet on each side, and extends up from the\nground about three feet. Except for a large quantity of soot around the\nopening, it looks a lot like a small, rectangular well.\" CR>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<TELL\n\"The opening is dark and you can only see a few feet into it.\" CR>)\n\t       (<VERB? ENTER CLIMB-DOWN>\n\t\t<DO-WALK ,P?DOWN>)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSI ,BRICK-STRUCTURE>>\n\t\t<MOVE ,PRSO ,FIREPLACE>\n\t\t<COND (<EQUAL? ,PRSO ,SWANZO-SCROLL>\n\t\t       <ENABLE <QUEUE I-DORN-BEAST 2>>)>\n\t\t<TELL\n\"The \" D ,PRSO \" disappears into the shaft.\" CR>)\n\t       (<VERB? REACH-IN>\n\t\t<TELL \"The shaft extends beyond your reach.\" CR>)\n\t       (<VERB? THROUGH>\n\t\t<DO-WALK ,P?DOWN>)>>"
  },
  "DORN-BEAST-F": {
   "name": "DORN-BEAST-F",
   "file": "maze.zil",
   "line": 776,
   "endLine": 779,
   "source": "<ROUTINE DORN-BEAST-F ()\n\t <COND (<VERB? RESEARCH>\n\t\t<PERFORM ,V?RESEARCH ,LOBBY>\n\t\t<RTRUE>)>>"
  },
  "CORPSE-F": {
   "name": "CORPSE-F",
   "file": "maze.zil",
   "line": 790,
   "endLine": 793,
   "source": "<ROUTINE CORPSE-F ()\n\t <COND (<VERB? MALYON>\n\t\t<JIGS-UP\n\"The corpse comes to life just long enough to fry you.\">)>>"
  },
  "I-DORN-BEAST": {
   "name": "I-DORN-BEAST",
   "file": "maze.zil",
   "line": 803,
   "endLine": 842,
   "source": "<ROUTINE I-DORN-BEAST ()\n\t <ENABLE <QUEUE I-DORN-BEAST -1>>\n\t <COND (<EQUAL? ,HERE ,HOLLOW>\n\t\t<COND (,DORN-BEAST-WARNING\n\t\t       <DORN-DEATH>)\n\t\t      (T\n\t\t       <MOVE ,DORN-BEAST ,HERE>\n\t\t       <SETG DORN-BEAST-WARNING T>\n\t\t       <TELL CR\n\"With a loud roar, a dreadfully huge dorn beast emerges from the\nshadows at the base of the cliff and gallops toward you.\" CR>)>)\n\t       (T\n\t\t<FSET ,DORN-BEAST ,NDESCBIT>\n\t\t<COND (<NOT ,DORN-BEAST-WARNING>\n\t\t       <SETG DORN-BEAST-WARNING T>\n\t\t       <TELL CR\n\"From outside the maze, you hear the bellowing of a ferocious dorn beast!\" CR>)\n\t\t      (<EQUAL? ,ROOM-NUMBER ,DORN-BEAST-ROOM ,LAST-DORN-ROOM>\n\t\t       <CRLF>\n\t\t       <DORN-DEATH>)\n\t\t      (T\n\t\t       <TELL CR\n\"The dorn beast rushes after you. Its ear-splitting bellowing\nresounds throughout the glass maze.\">\n\t\t       <COND (<EQUAL? ,ROOM-NUMBER 27>\n\t\t\t      <SETG SPLATTERED T>\n\t\t\t      <DISABLE <INT I-DORN-BEAST>>\n\t\t\t      <MOVE ,DORN-BEAST ,DIAL>\n\t\t\t      <PUT ,MAZE-TABLE 38 9>\n\t\t\t      <PUT ,MAZE-TABLE 39 ,DORN-BEAST-CORPSE>\n\t\t\t      <TELL\n\" Suddenly, the dorn-beast realizes that it is galloping through midair,\nand gives a surprisingly high-pitched squeal. It claws frantically at thin\nair, trying desperately to invent dorn beast flight. You happily notice that\ndorn beasts do not so much fly as plummet.\">)\n\t\t\t     (T\n\t\t\t      <SETG LAST-DORN-ROOM ,DORN-BEAST-ROOM>\n\t\t\t      <SETG DORN-BEAST-ROOM ,ROOM-NUMBER>\n\t\t\t      <MOVE ,DORN-BEAST ,HERE>)>\n\t\t       <CRLF>)>)>>"
  },
  "DORN-DEATH": {
   "name": "DORN-DEATH",
   "file": "maze.zil",
   "line": 844,
   "endLine": 847,
   "source": "<ROUTINE DORN-DEATH ()\n\t <JIGS-UP\n\"The dorn beast fries your brain with its hypnotic gaze and begins\nsecreting digestive juices.\">>"
  },
  "PICK-ONE": {
   "name": "PICK-ONE",
   "file": "misc.zil",
   "line": 124,
   "endLine": 125,
   "source": "<ROUTINE PICK-ONE (FROB)\n\t <GET .FROB <RANDOM <GET .FROB 0>>>>"
  },
  "FIXED-FONT-ON": {
   "name": "FIXED-FONT-ON",
   "file": "misc.zil",
   "line": 153,
   "endLine": 154,
   "source": "<ROUTINE FIXED-FONT-ON () ;\"turns off proportional spacing for the Mac\"\n\t <PUT 0 8 <BOR <GET 0 8> 2>>>"
  },
  "FIXED-FONT-OFF": {
   "name": "FIXED-FONT-OFF",
   "file": "misc.zil",
   "line": 156,
   "endLine": 157,
   "source": "<ROUTINE FIXED-FONT-OFF () ;\"turns it back on\"\n\t <PUT 0 8 <BAND <GET 0 8> -3>>>"
  },
  "GO": {
   "name": "GO",
   "file": "misc.zil",
   "line": 187,
   "endLine": 207,
   "source": "<ROUTINE GO () \n\t <PUTB ,P-LEXV 0 59>\n;\"put interrupts on clock chain\"\n\t <ENABLE <QUEUE I-WAKE-UP 7>>\n\t <ENABLE <QUEUE I-HELLHOUND -1>>\t \n;\"set up and go\"\n\t <SETG LIT T>\n\t <SETG WINNER ,PROTAGONIST>\n\t <SETG PLAYER ,WINNER>\n\t <SETG HERE ,TWISTED-FOREST>\n\t <MOVE ,WINNER ,HERE>\n\t <THIS-IS-IT ,HELLHOUND>\n\t <PUTB ,P-INBUF 0 60>\n\t <TELL\n\"You are in a strange location, but you cannot remember how you got here.\nEverything is hazy, as though viewed through a gauze...\">\n\t <CRLF> <CRLF>\n\t <V-LOOK>\n\t <I-HELLHOUND>\n\t <MAIN-LOOP>\n\t <AGAIN>>    "
  },
  "MAIN-LOOP": {
   "name": "MAIN-LOOP",
   "file": "misc.zil",
   "line": 209,
   "endLine": 211,
   "source": "<ROUTINE MAIN-LOOP (\"AUX\" TRASH)\n\t <REPEAT ()\n\t\t <SET TRASH <MAIN-LOOP-1>>>>"
  },
  "MAIN-LOOP-1": {
   "name": "MAIN-LOOP-1",
   "file": "misc.zil",
   "line": 213,
   "endLine": 400,
   "source": "<ROUTINE MAIN-LOOP-1 (\"AUX\" ICNT OCNT NUM CNT OBJ TBL V PTBL OBJ1 TMP)\n     <SETG LAST-USED-PRSO <>>\n     <SET CNT 0>\n     <SET OBJ <>>\n     <SET PTBL T>\n     <COND (<SETG P-WON <PARSER>>\n\t    <SET ICNT <GET ,P-PRSI ,P-MATCHLEN>>\n\t    <SET OCNT <GET ,P-PRSO ,P-MATCHLEN>>\n\t    <COND (<AND ,P-IT-OBJECT <ACCESSIBLE? ,P-IT-OBJECT>>\n\t\t   <SET TMP <>>\n\t\t   <REPEAT ()\n\t\t    <COND (<G? <SET CNT <+ .CNT 1>> .ICNT>\n\t\t\t   <RETURN>)\n\t\t\t  (T\n\t\t\t   <COND (<EQUAL? <GET ,P-PRSI .CNT> ,IT>\n\t\t\t\t  <PUT ,P-PRSI .CNT ,P-IT-OBJECT>\n\t\t\t\t  <SET TMP T>\n\t\t\t\t  <RETURN>)>)>>\n\t\t   <COND (<NOT .TMP>\n\t\t\t  <SET CNT 0>\n\t\t\t  <REPEAT ()\n\t\t\t   <COND (<G? <SET CNT <+ .CNT 1>> .OCNT>\n\t\t\t\t  <RETURN>)\n\t\t\t\t (T\n\t\t\t\t  <COND (<EQUAL? <GET ,P-PRSO .CNT> ,IT>\n\t\t\t\t\t <PUT ,P-PRSO .CNT ,P-IT-OBJECT>\n\t\t\t\t\t <RETURN>)>)>>)>\n\t\t   <SET CNT 0>)>\n\t    <SET NUM <COND (<0? .OCNT>\n\t\t\t    .OCNT)\n\t\t\t   (<G? .OCNT 1>\n\t\t\t    <SET TBL ,P-PRSO>\n\t\t\t    <COND (<0? .ICNT>\n\t\t\t\t   <SET OBJ <>>)\n\t\t\t\t  (T\n\t\t\t\t   <SET OBJ <GET ,P-PRSI 1>>)>\n\t\t\t    .OCNT)\n\t\t\t   (<G? .ICNT 1>\n\t\t\t    <SET PTBL <>>\n\t\t\t    <SET TBL ,P-PRSI>\n\t\t\t    <SET OBJ <GET ,P-PRSO 1>>\n\t\t\t    .ICNT)\n\t\t\t   (T\n\t\t\t    1)>>\n\t    <COND (<AND <NOT .OBJ>\n\t\t\t<1? .ICNT>>\n\t\t   <SET OBJ <GET ,P-PRSI 1>>)>\n\t    <COND (<==? ,PRSA ,V?WALK>\n\t\t   <SET V <PERFORM ,PRSA ,PRSO>>)\n\t\t  (<0? .NUM>\n\t\t   <COND (<0? <BAND <GETB ,P-SYNTAX ,P-SBITS> ,P-SONUMS>>\n\t\t\t  <SET V <PERFORM ,PRSA>>\n\t\t\t  <SETG PRSO <>>)\n\t\t\t (<AND <NOT ,LIT>\n\t\t\t       <NOT ,BLORTED>>\n\t\t\t  <SETG QUOTE-FLAG <>>\n\t\t\t  <SETG P-CONT <>>\n\t\t\t  <TOO-DARK>)\n\t\t\t (<EQUAL? ,HERE ,CHAMBER-OF-LIVING-DEATH\n\t\t\t\t        ,HALL-OF-ETERNAL-PAIN>\n\t\t\t  <SETG QUOTE-FLAG <>>\n\t\t\t  <SETG P-CONT <>>\n\t\t\t  <AGONY>)\n\t\t\t (T\n\t\t\t  <TELL \"There isn't anything to \">\n\t\t\t  <SET TMP <GET ,P-ITBL ,P-VERBN>>\n\t\t\t  <COND (<VERB? TELL>\n\t\t\t\t <TELL \"talk to\">)\n\t\t\t\t(<OR ,P-OFLAG ,P-MERGED>\n\t\t\t\t <PRINTB <GET .TMP 0>>)\n\t\t\t\t(T\n\t\t\t\t <WORD-PRINT <GETB .TMP 2>\n\t\t\t\t\t     <GETB .TMP 3>>)>\n\t\t\t  <TELL \"!\" CR>\n\t\t\t  <SET V <>>)>)\n\t\t  (T\n\t\t   <SETG P-NOT-HERE 0>\n\t\t   <SETG P-MULT <>>\n\t\t   <COND (<G? .NUM 1>\n\t\t\t  <SETG P-MULT T>)>\n\t\t   <SET TMP <>>\n\t\t   <REPEAT ()\n\t\t    <COND (<G? <SET CNT <+ .CNT 1>> .NUM>\n\t\t\t   <COND (<G? ,P-NOT-HERE 0>\n\t\t\t\t  <TELL \"The \">\n\t\t\t\t  <COND (<NOT <EQUAL? ,P-NOT-HERE .NUM>>\n\t\t\t\t\t <TELL \"other \">)>\n\t\t\t\t  <TELL \"object\">\n\t\t\t\t  <COND (<NOT <EQUAL? ,P-NOT-HERE 1>>\n\t\t\t\t\t <TELL \"s\">)>\n\t\t\t\t  <TELL \" that you mentioned \">\n\t\t\t\t  <COND (<NOT <EQUAL? ,P-NOT-HERE 1>>\n\t\t\t\t\t <TELL \"are\">)\n\t\t\t\t\t(T\n\t\t\t\t\t <TELL \"is\">)>\n\t\t\t\t  <TELL \"n't here.\" CR>)\n\t\t\t\t (<NOT .TMP>\n\t\t\t\t  <REFERRING>)>\n\t\t\t   <RETURN>)\n\t\t\t  (T\n\t\t\t   <COND (.PTBL\n\t\t\t\t  <SET OBJ1 <GET ,P-PRSO .CNT>>)\n\t\t\t\t (T\n\t\t\t\t  <SET OBJ1 <GET ,P-PRSI .CNT>>)>\n\t\t\t   <SETG PRSO <COND (.PTBL\n\t\t\t\t\t     .OBJ1)\n\t\t\t\t\t    (T\n\t\t\t\t\t     .OBJ)>>\n\t\t\t   <SETG PRSI <COND (.PTBL\n\t\t\t\t\t     .OBJ)\n\t\t\t\t\t    (T\n\t\t\t\t\t     .OBJ1)>>\n\t\t\t   <COND (<OR <G? .NUM 1>\n\t\t\t\t      <EQUAL? <GET <GET ,P-ITBL ,P-NC1> 0>\n\t\t\t\t\t      ,W?ALL>>\n\t\t\t\t  <COND (<EQUAL? .OBJ1 ,NOT-HERE-OBJECT>\n\t\t\t\t\t <SETG P-NOT-HERE <+ ,P-NOT-HERE 1>>\n\t\t\t\t\t <AGAIN>)\n\t\t\t\t\t(<AND <EQUAL? ,P-GETFLAGS ,P-ALL>\n\t\t\t\t\t      <VERB? TAKE>\n\t\t\t\t\t      <OR\n\t\t\t\t\t       <AND <NOT <EQUAL? <LOC .OBJ1>\n\t\t\t\t\t\t\t         ,WINNER\n\t\t\t\t\t\t\t         ,HERE\n\t\t\t\t\t\t\t\t .OBJ>>\n\t\t\t\t\t\t    <NOT <FSET? <LOC .OBJ1>\n\t\t\t\t\t\t\t        ,SURFACEBIT>>\n\t\t\t\t\t\t    <NOT <EQUAL? <LOC .OBJ1>\n\t\t\t\t\t\t\t         ,FIREPLACE>>>\n\t\t\t\t\t       <NOT <OR <FSET? .OBJ1 ,TAKEBIT>\n\t\t\t\t\t\t\t<FSET? .OBJ1\n\t\t\t\t\t\t\t       ,TRYTAKEBIT>>>>>\n\t\t\t\t\t\t<AGAIN>)\n\t\t\t\t\t(<AND <VERB? TAKE>\n\t\t\t\t\t      ,PRSI\n\t\t\t\t\t      <EQUAL?\n\t\t\t\t\t       <GET <GET ,P-ITBL ,P-NC1> 0>\n\t\t\t\t\t       ,W?ALL>\n\t\t\t\t\t      <NOT <IN? ,PRSO ,PRSI>>\n\t\t\t\t\t      <DESK-KLUDGE>>\n\t\t\t\t\t <AGAIN>)\n\t\t\t\t\t(<AND <EQUAL? ,P-GETFLAGS ,P-ALL>\n\t\t\t\t\t      <VERB? DROP>\n\t\t\t\t\t      <NOT <IN? .OBJ1 ,WINNER>>\n\t\t\t\t\t      <NOT <IN? ,P-IT-OBJECT ,WINNER>>>\n\t\t\t\t\t <AGAIN>)\n\t\t\t\t\t(<NOT <VISIBLE? .OBJ1>>\n\t\t\t\t\t <AGAIN>)\n\t\t\t\t\t(T\n\t\t\t\t\t <COND (<EQUAL? .OBJ1 ,IT>\n\t\t\t\t\t\t<PRINTD ,P-IT-OBJECT>)\n\t\t\t\t\t       (T\n\t\t\t\t\t\t<PRINTD .OBJ1>)>\n\t\t\t\t\t <TELL \": \">)>)>\n\t\t\t\t  <SET TMP T>\n\t\t\t\t  <SET V <PERFORM ,PRSA ,PRSO ,PRSI>>\n\t\t\t\t  <SETG LAST-USED-PRSO ,PRSO>\n\t\t\t\t  <COND (<==? .V ,M-FATAL>\n\t\t\t\t\t <RETURN>)>)>>)>\n\t    <COND (<NOT <==? .V ,M-FATAL>>\n\t\t   ;<COND (<==? <LOC ,WINNER> ,PRSO>\n\t\t\t  <SETG PRSO <>>)> ;\"removed per Retrofix #17\"\n\t\t   <COND (<VERB? TELL BRIEF SUPER-BRIEF VERBOSE\n\t\t\t\t SAVE VERSION RESTORE SCRIPT UNSCRIPT>\n\t\t\t  T)\n\t\t\t (T\n\t\t\t  <SET V\n\t\t\t     <APPLY <GETP <LOC ,WINNER> ,P?ACTION> ,M-END>>)>)>\n\t    ;<COND (<VERB? AGAIN SAVE RESTORE SCORE VERSION>\n\t\t   T)\n\t\t  (T\n\t\t   <SETG L-PRSA ,PRSA>\n\t\t   <COND (,LAST-USED-PRSO\n\t\t\t  <SETG L-PRSO ,LAST-USED-PRSO>)\n\t\t\t (T\n\t\t\t  <SETG L-PRSO ,PRSO>)>\n\t\t   <SETG L-PRSI ,PRSI>)>\n\t    <COND (<==? .V ,M-FATAL>\n\t\t   <SETG P-CONT <>>)>)\n\t   (T\n\t    <SETG P-CONT <>>)>\n     <COND (,P-WON\n\t    <COND (<VERB? TELL BRIEF SUPER-BRIEF VERBOSE SAVE VERSION\n\t\t\t  TIME QUIT RESTART SCORE SCRIPT UNSCRIPT RESTORE\n\t\t\t  $RANDOM $COMMAND $RECORD $UNRECORD>\n\t\t   T)\n\t\t  (T\n\t\t   <SET V <CLOCKER>>)>)>>"
  },
  "DESK-KLUDGE": {
   "name": "DESK-KLUDGE",
   "file": "misc.zil",
   "line": 402,
   "endLine": 407,
   "source": "<ROUTINE DESK-KLUDGE ()\n\t <COND (<AND <EQUAL? ,PRSI ,BELBOZ-DESK>\n\t\t     <IN? ,PRSO ,DESK-DRAWER>>\n\t\t<RFALSE>)\n\t       (T\n\t\t<RTRUE>)>>"
  },
  "FAKE-ORPHAN": {
   "name": "FAKE-ORPHAN",
   "file": "misc.zil",
   "line": 418,
   "endLine": 432,
   "source": "<ROUTINE FAKE-ORPHAN (\"AUX\" TMP)\n\t <ORPHAN ,P-SYNTAX <>>\n\t <TELL \"Be specific: what object do you want to \">\n\t <SET TMP <GET ,P-OTBL ,P-VERBN>>\n\t <COND (<==? .TMP 0> <TELL \"tell\">)\n\t       (<0? <GETB ,P-VTBL 2>>\n\t\t<PRINTB <GET .TMP 0>>)\n\t       (T\n\t\t<WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>\n\t\t<PUTB ,P-VTBL 2 0>)>\n\t <SETG P-OFLAG T>\n\t <SETG P-WON <>>\n\t <PREP-PRINT\n\t     <GETB ,P-SYNTAX ,P-SPREP1>>\n\t <TELL \"?\" CR>>"
  },
  "PERFORM": {
   "name": "PERFORM",
   "file": "misc.zil",
   "line": 434,
   "endLine": 500,
   "source": "<ROUTINE PERFORM (A \"OPTIONAL\" (O <>) (I <>) \"AUX\" V OA OO OI)\n\t;<COND (,DEBUG\n\t       <TELL \"[Perform: \">\n\t       %<COND (<GASSIGNED? PREDGEN> '<TELL N .A>)\n\t\t      (T '<PRINC <NTH ,ACTIONS <+ <* .A 2> 1>>>)>\n\t       <COND (<AND .O <NOT <==? .A ,V?WALK>>>\n\t\t      <TELL \" / PRSO = \" D .O>)>\n\t       <COND (.I <TELL \" / PRSI = \" D .I>)>\n\t       <TELL \"]\" CR>)>\n\t<SET OA ,PRSA>\n\t<SET OO ,PRSO>\n\t<SET OI ,PRSI>\n\t<SETG PRSA .A>\n\t<COND (<EQUAL? ,IT .I .O>\n\t       ;<AND <EQUAL? ,IT .I .O>\n\t\t    <NOT <EQUAL? ,P-IT-LOC ,HERE>>>\n\t       <COND (<NOT .I> <FAKE-ORPHAN>)\n\t\t     (T\n\t\t      <REFERRING>)>\n\t       <RFATAL>)>\n\t;<COND (<==? .O ,IT> <SET O ,P-IT-OBJECT>)>\n\t;<COND (<==? .I ,IT> <SET I ,P-IT-OBJECT>)>\n\t<SETG PRSO .O>\n\t<COND (<AND ,PRSO\n\t\t    <NOT <VERB? WALK>>\n\t\t    <NOT <EQUAL? ,PRSO ,NOT-HERE-OBJECT>>>\n\t       <THIS-IS-IT ,PRSO>)>\n\t<SETG PRSI .I>\n\t;<COND (<NOT <==? .A ,V?AGAIN>>\n\t       <SETG L-PRSA .A>\n\t       <COND (<==? .A ,V?WALK> <SETG L-PRSO <>>)\n\t\t     (T <SETG L-PRSO .O>)>\n\t       <SETG L-PRSI .I>)>\n\t<COND (<AND <EQUAL? ,NOT-HERE-OBJECT ,PRSO ,PRSI>\n\t\t    <SET V <D-APPLY \"Not Here\" ,NOT-HERE-OBJECT-F>>>\n\t       <SETG P-WON <>>\n\t       .V)\n\t      (T\n\t       <SET O ,PRSO>\n\t       <SET I ,PRSI>\n\t       <COND (<SET V <D-APPLY \"Actor\"\n\t\t\t\t      <GETP ,WINNER ,P?ACTION>>> .V)\n\t\t     (<SET V <D-APPLY \"Room (M-BEG)\"\n\t\t\t\t      <GETP <LOC ,WINNER> ,P?ACTION>\n\t\t\t\t      ,M-BEG>> .V)\n\t\t     (<SET V <D-APPLY \"Preaction\"\n\t\t\t\t      <GET ,PREACTIONS .A>>> .V)\n\t\t     (<AND .I <SET V <D-APPLY \"PRSI\"\n\t\t\t\t\t      <GETP .I ,P?ACTION>>>> .V)\n\t\t     (<AND .O\n\t\t\t   <NOT <==? .A ,V?WALK>>\n\t\t\t   <LOC .O>\n\t\t\t   <GETP <LOC .O> ,P?CONTFCN>\n\t\t\t   <SET V <D-APPLY \"Container\"\n\t\t\t\t\t   <GETP <LOC .O> ,P?CONTFCN>>>>\n\t\t      .V)\n\t\t     (<AND .O\n\t\t\t   <NOT <==? .A ,V?WALK>>\n\t\t\t   <SET V <D-APPLY \"PRSO\"\n\t\t\t\t\t   <GETP .O ,P?ACTION>>>>\n\t\t      .V)\n\t\t     (<SET V <D-APPLY <>\n\t\t\t\t      <GET ,ACTIONS .A>>> .V)>)>\n\t<SETG PRSA .OA>\n\t<SETG PRSO .OO>\n\t<SETG PRSI .OI>\n\t.V>"
  },
  "D-APPLY": {
   "name": "D-APPLY",
   "file": "misc.zil",
   "line": 502,
   "endLine": 518,
   "source": "<ROUTINE D-APPLY (STR FCN \"OPTIONAL\" (FOO <>) \"AUX\" RES)\n\t<COND (<NOT .FCN> <>)\n\t      (T\n\t       ;<COND (,DEBUG\n\t\t      <COND (<NOT .STR>\n\t\t\t     <TELL CR \"  Default ->\" CR>)\n\t\t\t    (T <TELL CR \"  \" .STR \" -> \">)>)>\n\t       <SET RES\n\t\t    <COND (.FOO <APPLY .FCN .FOO>)\n\t\t\t  (T <APPLY .FCN>)>>\n\t       ;<COND (<AND ,DEBUG .STR>\n\t\t      <COND (<==? .RES ,M-FATAL>\n\t\t\t     <TELL \"Fatal\" CR>)\n\t\t\t    (<NOT .RES>\n\t\t\t     <TELL \"Not handled\">)\n\t\t\t    (T <TELL \"Handled\" CR>)>)>\n\t       .RES)>>"
  },
  "QUEUE": {
   "name": "QUEUE",
   "file": "misc.zil",
   "line": 542,
   "endLine": 544,
   "source": "<ROUTINE QUEUE (RTN TICK \"AUX\" CINT)\n\t <PUT <SET CINT <INT .RTN>> ,C-TICK .TICK>\n\t .CINT>"
  },
  "INT": {
   "name": "INT",
   "file": "misc.zil",
   "line": 546,
   "endLine": 557,
   "source": "<ROUTINE INT (RTN \"OPTIONAL\" (DEMON <>) E C INT)\n\t <SET E <REST ,C-TABLE ,C-TABLELEN>>\n\t <SET C <REST ,C-TABLE ,C-INTS>>\n\t <REPEAT ()\n\t\t <COND (<==? .C .E>\n\t\t\t<SETG C-INTS <- ,C-INTS ,C-INTLEN>>\n\t\t\t<AND .DEMON <SETG C-DEMONS <- ,C-DEMONS ,C-INTLEN>>>\n\t\t\t<SET INT <REST ,C-TABLE ,C-INTS>>\n\t\t\t<PUT .INT ,C-RTN .RTN>\n\t\t\t<RETURN .INT>)\n\t\t       (<EQUAL? <GET .C ,C-RTN> .RTN> <RETURN .C>)>\n\t\t <SET C <REST .C ,C-INTLEN>>>>"
  },
  "CLOCKER": {
   "name": "CLOCKER",
   "file": "misc.zil",
   "line": 561,
   "endLine": 577,
   "source": "<ROUTINE CLOCKER (\"AUX\" C E TICK (FLG <>))\n\t <COND (,CLOCK-WAIT <SETG CLOCK-WAIT <>> <RFALSE>)>\n\t <SET C <REST ,C-TABLE <COND (,P-WON ,C-INTS) (T ,C-DEMONS)>>>\n\t <SET E <REST ,C-TABLE ,C-TABLELEN>>\n\t <REPEAT ()\n\t\t <COND (<==? .C .E>\n\t\t\t<SETG MOVES <+ ,MOVES 1>>\n\t\t\t<RETURN .FLG>)\n\t\t       (<NOT <0? <GET .C ,C-ENABLED?>>>\n\t\t\t<SET TICK <GET .C ,C-TICK>>\n\t\t\t<COND (<0? .TICK>)\n\t\t\t      (T\n\t\t\t       <PUT .C ,C-TICK <- .TICK 1>>\n\t\t\t       <COND (<AND <NOT <G? .TICK 1>>\n\t\t\t\t\t   <APPLY <GET .C ,C-RTN>>>\n\t\t\t\t      <SET FLG T>)>)>)>\n\t\t <SET C <REST .C ,C-INTLEN>>>>"
  },
  "NULL-F": {
   "name": "NULL-F",
   "file": "misc.zil",
   "line": 579,
   "endLine": 579,
   "source": "<ROUTINE NULL-F () <RFALSE>>"
  },
  "BOZBARLAND-F": {
   "name": "BOZBARLAND-F",
   "file": "park.zil",
   "line": 13,
   "endLine": 30,
   "source": "<ROUTINE BOZBARLAND-F ()\n\t <COND (<VERB? THROUGH>\n\t\t<COND (<EQUAL? ,HERE ,PARK-ENTRANCE>\n\t\t       <DO-WALK ,P?WEST>)\n\t\t      (T\n\t\t       <LOOK-AROUND-YOU>)>)\n\t       (<VERB? EXIT DROP>\n\t\t<COND (<EQUAL? ,HERE ,EAST-END-OF-MIDWAY>\n\t\t       <DO-WALK ,P?EAST>)\n\t\t      (<EQUAL? ,HERE ,PARK-ENTRANCE>\n\t\t       <LOOK-AROUND-YOU>)\n\t\t      (T\n\t\t       <CANT-ENTER ,BOZBARLAND T>)>)\n\t       (<VERB? RESEARCH>\n\t\t<TELL\n\"Bozbarland was a magical futuristic fantasy amusement park, oft referred\nto as the entertainment capital of the Great Underground Empire. The lower\nclasses usually called it simply Zorky Park.\" CR>)>>"
  },
  "PARK-SIGN-PSEUDO": {
   "name": "PARK-SIGN-PSEUDO",
   "file": "park.zil",
   "line": 46,
   "endLine": 53,
   "source": "<ROUTINE PARK-SIGN-PSEUDO ()\n\t <COND (<VERB? READ>\n\t\t<FIXED-FONT-ON>\n\t\t<TELL \"|\n$$$$$ WELCOME TO BOZBARLAND $$$$$|\n    The Entertainment Capital|\n          of the Empire\" CR>\n\t\t<FIXED-FONT-OFF>)>>"
  },
  "AMUSEMENT-PARK-ENTER-F": {
   "name": "AMUSEMENT-PARK-ENTER-F",
   "file": "park.zil",
   "line": 55,
   "endLine": 70,
   "source": "<ROUTINE AMUSEMENT-PARK-ENTER-F ()\n\t <COND (,PARK-FEE-PAID\n\t\t,EAST-END-OF-MIDWAY)\n\t       (<IN? ,PARK-GNOME ,HERE>\n\t\t<TELL\n\"As you bounce off the barrier, the gnome admonishes, \\\"Tsk, tsk ... you\ncan't enter without paying your zorkmid!\\\"\" CR>\n\t\t<RFALSE>)\n\t       (T\n\t\t<MOVE ,PARK-GNOME ,HERE>\n\t\t<ENABLE <QUEUE I-PARK-GNOME 6>>\n\t\t<TELL\n\"You bounce off an invisible barrier. A moment later a gnome appears,\ndressed in a gaudy plaid outfit. \\\"Admission to the park is only one\nzorkmid. What a bargain, chum, eh?\\\"\" CR>\n\t\t<RFALSE>)>>"
  },
  "I-PARK-GNOME": {
   "name": "I-PARK-GNOME",
   "file": "park.zil",
   "line": 72,
   "endLine": 77,
   "source": "<ROUTINE I-PARK-GNOME ()\n\t <MOVE ,PARK-GNOME ,DIAL>\n\t <COND (<EQUAL? ,HERE ,PARK-ENTRANCE>\n\t\t<TELL CR\n\"\\\"Well, I can't wait all day, buddy,\\\" growls the gnome before\nvanishing.\" CR>)>>"
  },
  "PARK-GNOME-F": {
   "name": "PARK-GNOME-F",
   "file": "park.zil",
   "line": 90,
   "endLine": 111,
   "source": "<ROUTINE PARK-GNOME-F ()\n\t <COND (<VERB? TELL>\n\t\t<TELL\n\"\\\"Listen, fella, I was in the middle of something important and I don't\nhave time to gab. Gonna pay the admission fee, or not?\\\"\" CR>\n\t\t<STOP>)\n\t       (<VERB? YOMIN>\n\t\t<TELL\n\"The gnome is thinking about the poker game you interrupted.\" CR>)\n\t       (<AND <VERB? GIVE>\n\t\t     <EQUAL? ,PRSI ,PARK-GNOME>\n\t\t     <EQUAL? ,PRSO ,ZORKMID>>\n\t\t<COND (<FSET? ,ZORKMID ,ONBIT>\n\t\t       <GNOME-REFUSES>\n\t\t       <RTRUE>)>\n\t\t<MOVE ,ZORKMID ,DIAL>\n\t\t<MOVE ,PARK-GNOME ,DIAL>\n\t\t<SETG PARK-FEE-PAID T>\n\t\t<DISABLE <INT I-PARK-GNOME>>\n\t\t<TELL\n\"\\\"Okay, you can go through now, bub. Enjoy your trip to\nBozbarland.\\\" The gnome vanishes as suddenly as he appeared.\" CR>)>>"
  },
  "MIDWAY-PSEUDO": {
   "name": "MIDWAY-PSEUDO",
   "file": "park.zil",
   "line": 113,
   "endLine": 124,
   "source": "<ROUTINE MIDWAY-PSEUDO ()\n\t <COND (<VERB? THROUGH>\n\t\t<COND (<EQUAL? ,HERE ,FLUME ,ARCADE>\n\t\t       <DO-WALK ,P?NORTH>)\n\t\t      (<EQUAL? ,HERE ,ROLLER-COASTER ,HAUNTED-HOUSE>\n\t\t       <DO-WALK ,P?SOUTH>)\n\t\t      (<EQUAL? ,HERE ,CASINO>\n\t\t       <DO-WALK ,P?EAST>)\n\t\t      (T\n\t\t       <LOOK-AROUND-YOU>)>)\n\t       (<VERB? DROP EXIT>\n\t\t<V-WALK-AROUND>)>>"
  },
  "EAST-END-OF-MIDWAY-F": {
   "name": "EAST-END-OF-MIDWAY-F",
   "file": "park.zil",
   "line": 141,
   "endLine": 144,
   "source": "<ROUTINE EAST-END-OF-MIDWAY-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<PUT ,VEZZAS 4 0>\n\t\t<RFALSE>)>>"
  },
  "HAUNTED-HOUSE-F": {
   "name": "HAUNTED-HOUSE-F",
   "file": "park.zil",
   "line": 178,
   "endLine": 192,
   "source": "<ROUTINE HAUNTED-HOUSE-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<COND (,LIT\n\t\t       <TELL\n\"Something about this place seems to soak up all light, so that it\">)\n\t\t      (,BLORTED\n\t\t       <TELL\n\"Despite the effects of the blort potion, this place \">)\n\t              (T\n\t\t       <TELL \"It\">)>\n\t\t<TELL\n\" is quite dark. You can see vague shapes swaying about in the darkness.\" CR>)\n\t       (<EQUAL? .RARG ,M-ENTER>\n\t\t<ENABLE <QUEUE I-HAUNT 1>>\n\t\t<RFALSE>)>>"
  },
  "I-HAUNT": {
   "name": "I-HAUNT",
   "file": "park.zil",
   "line": 194,
   "endLine": 202,
   "source": "<ROUTINE I-HAUNT ()\n\t <ENABLE <QUEUE I-HAUNT -1>>\n\t <COND (<NOT <EQUAL? ,HERE ,HAUNTED-HOUSE>>\n\t\t<DISABLE <INT I-HAUNT>>\n\t\t<RFALSE>)\n\t       (<PROB 65>\n\t        <TELL CR <PICK-ONE ,HAUNT-TABLE> CR>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "START-RIDE": {
   "name": "START-RIDE",
   "file": "park.zil",
   "line": 224,
   "endLine": 234,
   "source": "<ROUTINE START-RIDE (LOC \"AUX\" X N)\n\t <SETG RIDE-IN-PROGRESS T>\n\t <SET X <FIRST? .LOC>>\n\t <REPEAT ()\n\t\t <SET N <NEXT? .X>>\n\t\t <COND (<NOT <EQUAL? .X ,PROTAGONIST ,CAR ,LOG-BOAT>>\n\t\t\t<FSET .X ,INVISIBLE>)>\n\t\t <COND (<NOT .N>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<SET X .N>)>>>"
  },
  "END-RIDE": {
   "name": "END-RIDE",
   "file": "park.zil",
   "line": 236,
   "endLine": 256,
   "source": "<ROUTINE END-RIDE (\"AUX\" X N)\n\t <SETG RIDE-IN-PROGRESS <>>\n\t <SETG RIDE-COUNTER 0>\n\t <DISABLE <INT I-FLUME-TRIP>>\n\t <DISABLE <INT I-ROLLER-COASTER-TRIP>>\n\t <SET X <FIRST? ,FLUME>>\n\t <REPEAT ()\n\t\t <SET N <NEXT? .X>>\n\t\t <FCLEAR .X ,INVISIBLE>\n\t\t <COND (<NOT .N>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<SET X .N>)>>\n\t <SET X <FIRST? ,ROLLER-COASTER>>\n\t <REPEAT ()\n\t\t <SET N <NEXT? .X>>\n\t\t <FCLEAR .X ,INVISIBLE>\n\t\t <COND (<NOT .N>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<SET X .N>)>>>"
  },
  "SITS-AT-PLATFORM": {
   "name": "SITS-AT-PLATFORM",
   "file": "park.zil",
   "line": 258,
   "endLine": 260,
   "source": "<ROUTINE SITS-AT-PLATFORM (VEHICLE)\n\t <TELL \" A \" D .VEHICLE \" sits at the platform, beckoning\nyou to enter.\">>"
  },
  "PARK-NYMPH": {
   "name": "PARK-NYMPH",
   "file": "park.zil",
   "line": 262,
   "endLine": 264,
   "source": "<ROUTINE PARK-NYMPH (VEHICLE)\n\t <TELL \"An amusement park nymph appears for a moment, warning\nyou not to leave the \" D .VEHICLE \" during the course of the ride.\" CR>>"
  },
  "PLAQUE": {
   "name": "PLAQUE",
   "file": "park.zil",
   "line": 266,
   "endLine": 268,
   "source": "<ROUTINE PLAQUE ()\n\t <TELL\n\" A small plaque hangs nearby. The midway is visible to the \">>"
  },
  "PLAQUE-PSEUDO": {
   "name": "PLAQUE-PSEUDO",
   "file": "park.zil",
   "line": 270,
   "endLine": 277,
   "source": "<ROUTINE PLAQUE-PSEUDO ()\n\t <COND (<VERB? READ EXAMINE>\n\t\t<TELL \"\\\"Constructed by the Frobozz Magic \">\n\t\t<COND (<EQUAL? ,HERE ,FLUME>\n\t\t       <TELL \"Flume\">)\n\t\t      (T\n\t\t       <TELL \"Roller Coaster\">)>\n\t\t<TELL \" Company.\\\"\" CR>)>>"
  },
  "FLUME-F": {
   "name": "FLUME-F",
   "file": "park.zil",
   "line": 288,
   "endLine": 300,
   "source": "<ROUTINE FLUME-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<COND (,RIDE-IN-PROGRESS\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL\n\"You are at the boarding platform of a fast-moving flume, flowing\noff beyond your view.\">\n\t\t       <PLAQUE>\n\t\t       <TELL \"north.\">\n\t\t       <COND (<NOT <IN? ,PROTAGONIST ,LOG-BOAT>>\n\t\t\t      <SITS-AT-PLATFORM ,LOG-BOAT>)>\n\t\t       <CRLF>)>)>>"
  },
  "FLUME-OBJECT-F": {
   "name": "FLUME-OBJECT-F",
   "file": "park.zil",
   "line": 309,
   "endLine": 321,
   "source": "<ROUTINE FLUME-OBJECT-F ()\n\t <COND (<VERB? PULVER>\n\t\t<TELL\n\"In order to prevent damage to public life and property, flumes are\nprotected against this sort of prank.\" CR>)\n\t       (<VERB? BOARD>\n\t\t<PERFORM ,V?BOARD ,LOG-BOAT>\n\t\t<RTRUE>)\n\t       (<VERB? RESEARCH>\n\t\t<TELL\n\"Flumes are artifical water channels, usually with boat rides. The\nboat is typically a hollowed-out log. The largest flume of this kind\nis in Bozbarland.\" CR>)>>"
  },
  "LOG-BOAT-F": {
   "name": "LOG-BOAT-F",
   "file": "park.zil",
   "line": 331,
   "endLine": 355,
   "source": "<ROUTINE LOG-BOAT-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<AND <EQUAL? .RARG ,M-BEG>\n\t\t     <VERB? WALK>>\n\t\t<NOT-GOING-ANYWHERE ,LOG-BOAT>)\n\t       (.RARG\n\t\t<RFALSE>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<TELL \"Huh?\" CR>)\n\t       (<VERB? THROUGH ENTER CLIMB-ON>\n\t\t<PERFORM ,V?BOARD ,PRSO>\n\t\t<RTRUE>)\n\t       (<AND <VERB? DROP DISEMBARK STAND EXIT>\n\t\t     ,RIDE-IN-PROGRESS>\n\t\t<END-RIDE>\n\t\t<JIGS-UP\n\"Bad time to leave the log boat. The flume is fast and rough.\">)\n\t       (<AND <VERB? BOARD>\n\t\t     <NOT ,RIDE-IN-PROGRESS>>\n\t\t<START-RIDE ,FLUME>\n\t\t<MOVE ,PROTAGONIST ,LOG-BOAT>\n\t\t<ENABLE <QUEUE I-FLUME-TRIP 2>>\n\t\t<TELL\n\"As you enter the log boat, it lurches away from the platform and is\ncarried swiftly away by the current of the flume. \">\n\t\t<PARK-NYMPH ,LOG-BOAT>)>>"
  },
  "I-FLUME-TRIP": {
   "name": "I-FLUME-TRIP",
   "file": "park.zil",
   "line": 357,
   "endLine": 409,
   "source": "<ROUTINE I-FLUME-TRIP ()\n\t <ENABLE <QUEUE I-FLUME-TRIP -1>>\n\t <SETG RIDE-COUNTER <+ ,RIDE-COUNTER 1>>\n\t <COND (<NOT ,RIDE-IN-PROGRESS>\n\t\t<DISABLE <INT I-FLUME-TRIP>>\n\t\t<SETG RIDE-COUNTER 0>\n\t\t<RFALSE>)>\n\t <CRLF>\n\t <COND (<EQUAL? ,RIDE-COUNTER 1>\n\t\t<TELL\n\"The flume is wide here, and straight as an arrow.\nThe ride is quite relaxing.\" CR>)\n\t       (<EQUAL? ,RIDE-COUNTER 2>\n\t\t<TELL\n\"You enter a stretch of sharp, winding curves! Spray dashes your face as you\nare tossed about the log boat!\" CR>)\n\t       (<EQUAL? ,RIDE-COUNTER 3>\n\t\t<TELL\n\"The twists and turns are left behind as you approach the\nmouth of a dark tunnel.\" CR>)\n\t       (<EQUAL? ,RIDE-COUNTER 4>\n\t\t<COND (<OR ,LIT ,BLORTED>\n\t\t       <TELL\n\"The flume winds through a tunnel whose walls are black as coal.\nYou pass an opening which provides a brief glimpse of troglodytes\ndigging and hauling coal.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"It is pitch black. The roar of the flume's current echoes about the tunnel.\nA spot of light is visible ahead.\" CR>)>)\n\t       (<EQUAL? ,RIDE-COUNTER 5>\n\t\t<TELL\n\"The log boat leaves the tunnel and passes through a series of rapids, shooting\nstraight toward jagged rocks and then veering away at the last moment!\" CR>)\n\t       (<EQUAL? ,RIDE-COUNTER 6>\n\t\t<TELL\n\"Magically, the flume flows uphill here! The current slows as the boat\nclimbs and climbs...\" CR>)\n\t       (<EQUAL? ,RIDE-COUNTER 7>\n\t\t<TELL\n\"You reach the crest of the flume's final drop. You can see swirling\nwhite water below!\" CR>)\n\t       (<EQUAL? ,RIDE-COUNTER 8>\n\t\t<TELL\n\"The log boat plunges down into the swirling waters at the base of\nthe slope! Huge splashes of water spray off in every direction, but\namazingly you stay dry!\" CR>)\n\t       (<EQUAL? ,RIDE-COUNTER 9>\n\t\t<END-RIDE>\n\t\t<DISABLE <INT I-FLUME-TRIP>>\n\t\t<TELL\n\"The boat floats serenely around a final turn and pulls up to the boarding\nplatform.\" CR>)>> "
  },
  "ROLLER-COASTER-F": {
   "name": "ROLLER-COASTER-F",
   "file": "park.zil",
   "line": 420,
   "endLine": 432,
   "source": "<ROUTINE ROLLER-COASTER-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<COND (,RIDE-IN-PROGRESS\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL\n\"You are at the boarding platform of a huge roller coaster, sprawling\nabove and around you in every direction.\">\n\t\t       <PLAQUE>\n\t\t       <TELL \"south.\">\n\t\t       <COND (<NOT <IN? ,PROTAGONIST ,CAR>>\n\t\t\t      <SITS-AT-PLATFORM ,CAR>)>\n\t\t       <CRLF>)>)>>"
  },
  "CAR-F": {
   "name": "CAR-F",
   "file": "park.zil",
   "line": 441,
   "endLine": 468,
   "source": "<ROUTINE CAR-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<AND <EQUAL? .RARG ,M-BEG>\n\t\t     <VERB? WALK>>\n\t\t<NOT-GOING-ANYWHERE ,CAR>)\n\t       (.RARG\n\t\t<RFALSE>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<TELL \"Huh?\" CR>)\n\t       (<VERB? THROUGH ENTER CLIMB-ON>\n\t\t<PERFORM ,V?BOARD ,PRSO>\n\t\t<RTRUE>)\n\t       (<AND <VERB? DROP DISEMBARK STAND EXIT>\n\t\t     ,RIDE-IN-PROGRESS>\n\t\t<END-RIDE>\n\t\t<JIGS-UP\n\"Dumb idea. Your body ricochets off several wooden supports as it\nplummets to the ground.\">)\n\t       (<VERB? DROP EXIT>\n\t\t<PERFORM ,V?DISEMBARK ,PRSO>\n\t\t<RTRUE>)\n\t       (<AND <VERB? BOARD>\n\t\t     <NOT ,RIDE-IN-PROGRESS>>\n\t\t<START-RIDE ,ROLLER-COASTER>\n\t\t<MOVE ,PROTAGONIST ,CAR>\n\t\t<ENABLE <QUEUE I-ROLLER-COASTER-TRIP 2>>\n\t\t<TELL\n\"As you enter the car, it rolls away from the platform in a gentle curve. \">\n\t\t<PARK-NYMPH ,CAR>)>>"
  },
  "I-ROLLER-COASTER-TRIP": {
   "name": "I-ROLLER-COASTER-TRIP",
   "file": "park.zil",
   "line": 470,
   "endLine": 531,
   "source": "<ROUTINE I-ROLLER-COASTER-TRIP ()\n\t <ENABLE <QUEUE I-ROLLER-COASTER-TRIP -1>>\n\t <SETG RIDE-COUNTER <+ ,RIDE-COUNTER 1>>\n\t <COND (<NOT ,RIDE-IN-PROGRESS>\n\t\t<DISABLE <INT I-ROLLER-COASTER-TRIP>>\n\t\t<END-RIDE>\n\t\t<RFALSE>)>\n\t <CRLF>\n\t <COND (<EQUAL? ,RIDE-COUNTER 1>\n\t\t<TELL\n\"The car, propelled by some unseen force, rolls up a huge incline. The\ncrest grows tantalizingly closer.\" CR>)\n\t       (<EQUAL? ,RIDE-COUNTER 2>\n\t\t<TELL\n\"You reach the crest, the highest point of the roller coaster! The park\nis laid out beneath you like a map; the lights of the midway, the\nbooths of the arcade, the sparkling blue ribbon of water that must be\nthe flume. In the distance is a wide crater. The sounds and smells of\nthe park seem distant, and time feels suspended for a moment.\" CR>)\n\t       (<EQUAL? ,RIDE-COUNTER 3>\n\t\t<TELL\n\"The breath is swept from your lungs as the car begins diving,\nseemingly straight downward. You rise from the seat as the ground\nrushes closer! At the last moment, the car swings upward, and your\nstomach settles in your ankles.\" CR>)\n\t       (<EQUAL? ,RIDE-COUNTER 4>\n\t\t<TELL\n\"The car zips through a series of wild turns and sharp drops. Wooden\nroller coaster supports whiz past, inches from your head!\" CR>)\n\t       (<EQUAL? ,RIDE-COUNTER 5>\n\t\t<TELL\n\"This section of track is shaped like a corkscrew, and as the car hurtles\nforward it turns upside down almost every second. It is impossible to tell\nup from down, as the ground seems to spin around you.\" CR>)\n\t       (<EQUAL? ,RIDE-COUNTER 6>\n\t\t<TELL\n\"The car shoots into a rapid climb, which gets progressively slower and\nsteeper. Your heart beats wildly as the track begins to swing back above you,\nand you realize that you are entering a giant loop!\" CR>)\n\t       (<EQUAL? ,RIDE-COUNTER 7>\n\t\t<TELL\n\"As you reach the highest point of the loop, you hang completely upside-down\nfor a brief moment. The blood rushes to your head as the ground suspended\n\\\"above\\\" you like a canopy. Then, you hurtle down the far side of the loop\nwith breakneck speed!\" CR>)\n\t       (<EQUAL? ,RIDE-COUNTER 8>\n\t\t<TELL\n\"The roller coaster speeds out of the loop and into a tunnel\">\n\t\t<COND (<OR ,LIT ,BLORTED>\n\t\t       <TELL\n\", which seems to run through the middle of a haunted house! Wispy ghosts and\nghoulish skeletons brush past you\">)\n\t\t      (T\n\t\t       <TELL\n\". You shiver as horrible slimy things brush across your face\">)>\n\t\t<TELL \".\" CR>)\n\t       (<EQUAL? ,RIDE-COUNTER 9>\n\t\t<END-RIDE>\n\t\t<DISABLE <INT I-ROLLER-COASTER-TRIP>>\n\t\t<TELL\n\"The car zooms out into daylight, and glides to a stop at the\nboarding platform.\" CR>)>>"
  },
  "ARCADE-F": {
   "name": "ARCADE-F",
   "file": "park.zil",
   "line": 549,
   "endLine": 555,
   "source": "<ROUTINE ARCADE-F (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-END>\n\t\t     <NOT ,HAWKER-SUBDUED>\n\t\t     <IN? ,BALL ,HAWKER>>\n\t\t<TELL\n\"\\\"C'mon, pal!\\\" cries the hawker from the game booth. \\\"Try your luck!\\\"\nHe holds the ball out toward you.\" CR>)>>"
  },
  "ARCADE-EXIT-F": {
   "name": "ARCADE-EXIT-F",
   "file": "park.zil",
   "line": 557,
   "endLine": 561,
   "source": "<ROUTINE ARCADE-EXIT-F ()\n\t <COND (<HELD? ,BALL>\n\t\t<TELL\n\"The hawker yells after you, \\\"Hey buddy, come back with that ball!\\\"\" CR CR>)>\n\t ,WEST-END-OF-MIDWAY>"
  },
  "BOOTH-PSEUDO": {
   "name": "BOOTH-PSEUDO",
   "file": "park.zil",
   "line": 563,
   "endLine": 565,
   "source": "<ROUTINE BOOTH-PSEUDO ()\n\t <COND (<VERB? THROUGH>\n\t\t<TELL \"The hawker pushes you away.\" CR>)>>"
  },
  "HAWKER-F": {
   "name": "HAWKER-F",
   "file": "park.zil",
   "line": 576,
   "endLine": 598,
   "source": "<ROUTINE HAWKER-F ()\n\t <COND (<EQUAL? ,HAWKER ,WINNER>\n\t\t<COND (<AND <EQUAL? ,PRSO ,BALL>\n\t\t\t    <EQUAL? ,PRSI ,ME>\n\t\t\t    <VERB? GIVE>>\n\t\t       <SETG WINNER ,PROTAGONIST>\n\t\t       <PERFORM ,V?TAKE ,BALL>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"\\\"No time to gab, kid.\">\n\t\t       <COND (<NOT ,HAWKER-SUBDUED>\n\t\t\t      <TELL\n\" C'mon and give it a try. One hit wins!\">)>\n\t\t       <TELL \"\\\"\" CR>\n\t\t       <STOP>)>)\n\t       (<VERB? YOMIN>\n\t\t<TELL\n\"The hawker is thinking about finding a good stogie, whatever that is.\" CR>)\n\t       (<VERB? AIMFIZ>\n\t\t<JIGS-UP\n\"You appear in an amusement park game booth. The point of the game is to\npierce balloons with darts. Speaking of points, you are suddenly pierced\nby 37 flying darts.\">)>>"
  },
  "BALL-F": {
   "name": "BALL-F",
   "file": "park.zil",
   "line": 608,
   "endLine": 634,
   "source": "<ROUTINE BALL-F ()\n\t <COND (<VERB? TAKE>\n\t\t<FCLEAR ,BALL ,NDESCBIT>\n\t\t<FCLEAR ,BALL ,TRYTAKEBIT>\n\t\t<RFALSE>)\n\t       (<AND <VERB? ATTACK>\n\t\t     <EQUAL? ,PRSO ,RABBITS>>\n\t\t<PERFORM ,V?THROW ,BALL ,RABBITS>\n\t\t<RTRUE>)\n\t       (<AND <VERB? THROW>\n\t\t     <EQUAL? ,PRSI ,RABBITS>\n\t\t     <HELD? ,BALL>>\n\t\t<COND (,FOOBLED\n\t\t       <MOVE ,MALYON-SCROLL ,PROTAGONIST>\n\t\t       <SETG SCORE <+ ,SCORE 10>>\n\t\t       <SETG HAWKER-SUBDUED T>\n\t\t       <MOVE ,BALL ,DIAL>\n\t\t       <TELL\n\"A tremendous pitch sends a bunny spinning. \\\"What an arm, kid, what an\narm!\\\" cries the hawker. He hands you a glittering scroll from the shelf\nof prizes. \\\"Here's your prize, now scram.\\\"\" CR>)\n\t\t      (T\n\t\t       <MOVE ,BALL ,HAWKER>\n\t\t       <FSET ,BALL ,NDESCBIT>\n\t\t       <FSET ,BALL ,TRYTAKEBIT>\n\t\t       <TELL <PICK-ONE ,MISSES> \" This game is harder\nthan it looks. The hawker, leering, retrieves the ball.\" CR>)>)>>"
  },
  "RABBITS-F": {
   "name": "RABBITS-F",
   "file": "park.zil",
   "line": 650,
   "endLine": 655,
   "source": "<ROUTINE RABBITS-F ()\n\t <COND (<VERB? MALYON>\n\t\t<TELL\n\"The bunnies hop away and the startled hawker scrambles after them. He\nreturns a moment later, holding the again inanimate bunnies, and gives\nyou a nasty glare.\" CR>)>>"
  },
  "CASINO-F": {
   "name": "CASINO-F",
   "file": "park.zil",
   "line": 688,
   "endLine": 694,
   "source": "<ROUTINE CASINO-F (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-ENTER>\n\t\t     ,JACKPOT-DUMPED>\n\t\t<SETG JACKPOT-DUMPED <>>\n\t\t<TELL\n\"You enter just as a group of casino nymphs finish cleaning up the last\nof the zorkmid coins.\" CR CR>)>>"
  },
  "LEVER-PSEUDO": {
   "name": "LEVER-PSEUDO",
   "file": "park.zil",
   "line": 710,
   "endLine": 765,
   "source": "<ROUTINE LEVER-PSEUDO (\"AUX\" A B C)\n\t <COND (<VERB? MOVE PUSH>\n\t\t<COND (,FWEEPED\n\t\t       <BATTY>)\n\t\t      (,SLOT-MACHINE-BROKEN\n\t\t       <TELL\n\"The machine rattles loudly and makes a few feeble pings.\" CR>)\n\t\t      (T\n\t\t       <COND (<PROB 25>\n\t\t\t      <SET A <GET ,SLOT-MACHINE-TABLE 1>>)\n\t\t\t     (<PROB 33>\n\t\t\t      <SET A <GET ,SLOT-MACHINE-TABLE 2>>)\n\t\t\t     (<PROB 50>\n\t\t\t      <SET A <GET ,SLOT-MACHINE-TABLE 3>>)\n\t\t\t     (T\n\t\t\t      <SET A <GET ,SLOT-MACHINE-TABLE 4>>)>\n\t\t       <COND (<PROB 25>\n\t\t\t      <SET B <GET ,SLOT-MACHINE-TABLE 1>>)\n\t\t\t     (<PROB 33>\n\t\t\t      <SET B <GET ,SLOT-MACHINE-TABLE 2>>)\n\t\t\t     (<PROB 50>\n\t\t\t      <SET B <GET ,SLOT-MACHINE-TABLE 3>>)\n\t\t\t     (T\n\t\t\t      <SET B <GET ,SLOT-MACHINE-TABLE 4>>)>\n\t\t       <COND (<PROB 25>\n\t\t\t      <SET C <GET ,SLOT-MACHINE-TABLE 1>>)\n\t\t\t     (<PROB 33>\n\t\t\t      <SET C <GET ,SLOT-MACHINE-TABLE 2>>)\n\t\t\t     (<PROB 50>\n\t\t\t      <SET C <GET ,SLOT-MACHINE-TABLE 3>>)\n\t\t\t     (T\n\t\t\t      <SET C <GET ,SLOT-MACHINE-TABLE 4>>)>\n\t\t       <TELL\n\"Ping!|\nA \" .A \" appears in the first section of the display.|\nPing!|\nA \" .B \" appears in the second section of the display.|\nPing!|\nA \" .C \" appears in the third section of the display.\" CR>\n\t\t       <COND (<AND <EQUAL? .A .B>\n\t\t\t\t   <EQUAL? .A .C>>\n\t\t\t      <COND (<EQUAL? .A <GET ,SLOT-MACHINE-TABLE 1>>\n\t\t\t\t     <SETG JACKPOT-DUMPED T>\n\t\t\t\t     <JIGS-UP\n\"Ping! Ping! Ping! Ping! Ping! Ping!|\nAn unbelievable torrent of zorkmid coins pours out of the machine -- far\nmore than the machine could possibly contain! You are buried and crushed\nunder the huge mass of coins.\">)\n\t\t\t\t    (T\n\t\t\t\t     <MOVE ,ZORKMID ,HERE>\n\t\t\t\t     <SETG SLOT-MACHINE-BROKEN T>\n\t\t\t\t     <TELL\n\"Ping! Ping! Ping!|\nA zorkmid coin drops out of the machine and lands at your feet.\" CR>)>)\n\t\t\t     (T\n\t\t\t      <RTRUE>)>)>)>>"
  },
  "CLAUSE-PRINT": {
   "name": "CLAUSE-PRINT",
   "file": "parser.zil",
   "line": 602,
   "endLine": 603,
   "source": "<ROUTINE CLAUSE-PRINT (BPTR EPTR \"OPTIONAL\" (THE? T)) \n\t<BUFFER-PRINT <GET ,P-ITBL .BPTR> <GET ,P-ITBL .EPTR> .THE?>>    "
  },
  "ADJ-CHECK": {
   "name": "ADJ-CHECK",
   "file": "parser.zil",
   "line": 813,
   "endLine": 823,
   "source": "<ROUTINE ADJ-CHECK (WRD)\n\t <COND (<AND ,P-ADJ\n\t\t     <OR <EQUAL? .WRD ,W?ENCHAN ,W?SPELL ,W?CASTLE>\n\t\t\t <EQUAL? .WRD ,W?RIVER>>>\n\t\t<RFALSE>)\n\t       (<NOT ,P-ADJ>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,P-ADJ ,A?UPPER ,A?LOWER>\n\t\t<RFALSE>)\n\t       (T\n\t\t<RTRUE>)>>\t\t"
  },
  "MOBY-FIND": {
   "name": "MOBY-FIND",
   "file": "parser.zil",
   "line": 984,
   "endLine": 1004,
   "source": "<ROUTINE MOBY-FIND (TBL \"AUX\" FOO LEN)\n\t <SETG P-MOBY-FLAG T>\n\t <SETG P-SLOCBITS -1>\n\t <SETG P-TABLE .TBL>\n\t <SETG P-NAM ,P-XNAM>\n\t <SETG P-ADJ ,P-XADJ>\n\t <PUT .TBL ,P-MATCHLEN 0>\n\t <SET FOO <FIRST? ,ROOMS>>\n\t <REPEAT ()\n\t\t <COND (<NOT .FOO> <RETURN>)\n\t\t       (T\n\t\t\t<SEARCH-LIST .FOO .TBL ,P-SRCALL>\n\t\t\t<SET FOO <NEXT? .FOO>>)>>\n\t <DO-SL ,LOCAL-GLOBALS 1 1>\n\t <SEARCH-LIST ,ROOMS .TBL ,P-SRCTOP>\n\t <COND (<EQUAL? <SET LEN <GET .TBL ,P-MATCHLEN>> 1>\n\t\t<SETG P-MOBY-FOUND <GET .TBL 1>>)>\n\t <SETG P-MOBY-FLAG <>>\n\t <SETG P-NAM <>>\n\t <SETG P-ADJ <>>\n\t .LEN>"
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
  "V-DIAGNOSE": {
   "name": "V-DIAGNOSE",
   "file": "verbs.zil",
   "line": 26,
   "endLine": 48,
   "source": "<ROUTINE V-DIAGNOSE (\"AUX\" (BOTH <>))\n\t <COND (<L? ,AWAKE 0>\n\t\t<TELL \"You are wide awake\">)\n\t       (T\n\t\t<TELL \"You are \" <GET ,TIRED-TELL ,AWAKE>>)>\n\t <TELL \", and you are in good health.\">\n\t <COND (<OR <G? ,HUNGER-LEVEL 0>\n\t\t    <G? ,THIRST-LEVEL 0>>\n\t\t<TELL \" You feel \">\n\t\t<COND (<G? ,HUNGER-LEVEL 0>\n\t\t       <SET BOTH T>\n\t\t       <TELL <GET ,HUNGER-THIRST-TABLE ,HUNGER-LEVEL>>\n\t\t       <TELL \" hungry\">)>\n\t\t<COND (<G? ,THIRST-LEVEL 0>\n\t\t       <COND (.BOTH\n\t\t\t      <TELL \", and \">)>\n\t\t       <TELL <GET ,HUNGER-THIRST-TABLE ,THIRST-LEVEL>>\n\t\t       <TELL \" thirsty\">)>\n\t\t<TELL \".\">)>\n\t <COND (,BITTEN\n\t\t<TELL\n\" You have a small bite on your hand which doesn't seem too serious.\">)> \n\t <CRLF>>  "
  },
  "V-INVENTORY": {
   "name": "V-INVENTORY",
   "file": "verbs.zil",
   "line": 63,
   "endLine": 72,
   "source": "<ROUTINE V-INVENTORY ()\n\t <COND (<FIRST? ,PROTAGONIST>\n\t\t<PRINT-CONT ,PROTAGONIST>)\n\t       (T\n\t\t<TELL \"You are empty-\">\n\t\t<COND (,FWEEPED\n\t\t       <TELL \"taloned\">)\n\t\t      (T\n\t\t       <TELL \"handed\">)>\n\t\t<TELL \".\" CR>)>>"
  },
  "V-QUIT": {
   "name": "V-QUIT",
   "file": "verbs.zil",
   "line": 74,
   "endLine": 80,
   "source": "<ROUTINE V-QUIT ()\n\t <V-SCORE>\n\t <DO-YOU-WISH \"leave the game\">\n\t <COND (<YES?>\n\t\t<QUIT>)\n\t       (T\n\t\t<TELL \"Ok.\" CR>)>>"
  },
  "V-RESTART": {
   "name": "V-RESTART",
   "file": "verbs.zil",
   "line": 82,
   "endLine": 88,
   "source": "<ROUTINE V-RESTART ()\n\t <V-SCORE>\n\t <DO-YOU-WISH \"restart\">\n\t <COND (<YES?>\n\t\t<TELL \"Restarting.\" CR>\n\t\t<RESTART>\n\t\t<TELL \"Failed.\" CR>)>>"
  },
  "DO-YOU-WISH": {
   "name": "DO-YOU-WISH",
   "file": "verbs.zil",
   "line": 90,
   "endLine": 91,
   "source": "<ROUTINE DO-YOU-WISH (STRING)\n\t <TELL CR \"Do you wish to \" .STRING \"? (Y is affirmative): \">>"
  },
  "FINISH": {
   "name": "FINISH",
   "file": "verbs.zil",
   "line": 93,
   "endLine": 116,
   "source": "<ROUTINE FINISH (\"OPTIONAL\" (REPEATING <>))\n\t <CRLF>\n\t <COND (<NOT .REPEATING>\n\t\t<V-SCORE>\n\t\t<CRLF>)>\n\t <TELL\n\"Would you like to restart the game from the beginning, restore a saved game\nposition, or end this session of the game? (Type RESTART, RESTORE, or QUIT):|\n|\n>\">\n\t <PUTB ,P-INBUF 0 10> ;\"so you can't input too many characters\"\n\t <READ ,P-INBUF ,P-LEXV>\n\t <PUTB ,P-INBUF 0 60>\n\t <COND (<EQUAL? <GET ,P-LEXV 1> ,W?RESTAR>\n\t        <RESTART>\n\t\t<TELL \"Failed.\" CR>\n\t\t<FINISH T>)\n\t       (<EQUAL? <GET ,P-LEXV 1> ,W?RESTOR>\n\t\t<V-RESTORE>\n\t\t<FINISH T>)\n\t       (<EQUAL? <GET ,P-LEXV 1> ,W?QUIT ,W?Q>\n\t\t<QUIT>)\n\t       (T\n\t\t<FINISH T>)>>"
  },
  "YES?": {
   "name": "YES?",
   "file": "verbs.zil",
   "line": 118,
   "endLine": 129,
   "source": "<ROUTINE YES? ()\n\t <PRINTI \">\">\n\t <PUTB ,P-INBUF 0 10> ;\"so you can't input too many characters\"\n\t <READ ,P-INBUF ,P-LEXV>\n\t <PUTB ,P-INBUF 0 60>\n\t <COND (<EQUAL? <GET ,P-LEXV 1> ,W?YES ,W?Y>\n\t\t<RTRUE>)\n\t       (<EQUAL? <GET ,P-LEXV 1> ,W?NO ,W?N>\n\t\t<RFALSE>)\n\t       (T\n\t\t<TELL \"Please type YES or NO.\" CR CR>\n\t\t<AGAIN>)>>"
  },
  "V-RESTORE": {
   "name": "V-RESTORE",
   "file": "verbs.zil",
   "line": 131,
   "endLine": 133,
   "source": "<ROUTINE V-RESTORE ()\n\t <COND (<NOT <RESTORE>> ;\"if successful, can't go beyond this point\"\n\t \t<TELL \"Failed.\" CR>)>>"
  },
  "V-SAVE": {
   "name": "V-SAVE",
   "file": "verbs.zil",
   "line": 135,
   "endLine": 139,
   "source": "<ROUTINE V-SAVE ()\n\t <COND (<SAVE>\n\t        <TELL \"Ok.\" CR>)\n\t       (T\n\t\t<TELL \"Failed.\" CR>)>>"
  },
  "V-SCORE": {
   "name": "V-SCORE",
   "file": "verbs.zil",
   "line": 141,
   "endLine": 154,
   "source": "<ROUTINE V-SCORE ()\n\t <COND (,POOFED\n\t\t<TELL \"If you still existed, your score would be \">)\n\t       (T\n\t\t<TELL \"Your score is \">)>\n\t <TELL N ,SCORE \" of a possible 400, in \" N ,MOVES \" move\">\n\t <COND (<NOT <1? ,MOVES>>\n\t\t<TELL \"s\">)>\n\t <TELL \". This puts you in the class of \">\n\t <COND (<L? ,SCORE 0>\n\t\t<TELL \"Menace to Society\">)\n\t       (T\n\t\t<TELL <GET ,RANKINGS </ ,SCORE 50>>>)>\n\t <TELL \".\" CR>>"
  },
  "V-SCRIPT": {
   "name": "V-SCRIPT",
   "file": "verbs.zil",
   "line": 168,
   "endLine": 171,
   "source": "<ROUTINE V-SCRIPT ()\n\t<PUT 0 8 <BOR <GET 0 8> 1>>\n\t<TELL \"Here begins\" ,COPR-NOTICE CR>\n\t<V-VERSION>>"
  },
  "V-UNSCRIPT": {
   "name": "V-UNSCRIPT",
   "file": "verbs.zil",
   "line": 173,
   "endLine": 177,
   "source": "<ROUTINE V-UNSCRIPT ()\n\t<TELL \"Here ends\" ,COPR-NOTICE CR>\n\t<V-VERSION>\n\t<PUT 0 8 <BAND <GET 0 8> -2>>\n\t<RTRUE>>"
  },
  "V-VERSION": {
   "name": "V-VERSION",
   "file": "verbs.zil",
   "line": 181,
   "endLine": 195,
   "source": "<ROUTINE V-VERSION (\"AUX\" (CNT 17))\n\t <TELL\n\"SORCERER|\nInfocom interactive fiction - a fantasy story|\nCopyright (c) 1984 by Infocom, Inc. All rights reserved.|\nSORCERER is a trademark of Infocom, Inc.|\nRelease \">\n\t <PRINTN <BAND <GET 0 1> *3777*>>\n\t <TELL \" / Serial number \">\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> 23>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<PRINTC <GETB 0 .CNT>>)>>\n\t <CRLF>>"
  },
  "V-$VERIFY": {
   "name": "V-$VERIFY",
   "file": "verbs.zil",
   "line": 197,
   "endLine": 206,
   "source": "<ROUTINE V-$VERIFY ()\n\t <COND (<AND <PRSO? ,INTNUM>\n\t\t     <EQUAL? ,P-NUMBER 502>>\n\t\t<TELL N ,SERIAL CR>)\n\t       (T\n\t\t<TELL \"Performing the VERIFY spell...\" CR>\n\t \t<COND (<VERIFY>\n\t\t       <TELL \"Good.\" CR>)\n\t       \t      (T\n\t\t       <TELL CR \"** Bad **\" CR>)>)>>"
  },
  "V-$COMMAND": {
   "name": "V-$COMMAND",
   "file": "verbs.zil",
   "line": 213,
   "endLine": 215,
   "source": "<ROUTINE V-$COMMAND ()\n\t <DIRIN 1>\n\t <RTRUE>>"
  },
  "V-$RANDOM": {
   "name": "V-$RANDOM",
   "file": "verbs.zil",
   "line": 217,
   "endLine": 222,
   "source": "<ROUTINE V-$RANDOM ()\n\t <COND (<NOT <EQUAL? ,PRSO ,INTNUM>>\n\t\t<TELL \"Illegal call to #RANDOM.\" CR>)\n\t       (T\n\t\t<RANDOM <- 0 ,P-NUMBER>>\n\t\t<RTRUE>)>>"
  },
  "V-$RECORD": {
   "name": "V-$RECORD",
   "file": "verbs.zil",
   "line": 224,
   "endLine": 226,
   "source": "<ROUTINE V-$RECORD ()\n\t <DIROUT ,D-RECORD-ON> ;\"all READS and INPUTS get sent to command file\"\n\t <RTRUE>>"
  },
  "V-$UNRECORD": {
   "name": "V-$UNRECORD",
   "file": "verbs.zil",
   "line": 228,
   "endLine": 230,
   "source": "<ROUTINE V-$UNRECORD ()\n\t <DIROUT ,D-RECORD-OFF>\n\t <RTRUE>>"
  },
  "V-ALARM": {
   "name": "V-ALARM",
   "file": "verbs.zil",
   "line": 268,
   "endLine": 275,
   "source": "<ROUTINE V-ALARM ()\n\t <COND (<EQUAL? ,PRSO ,ROOMS>\n\t\t<PERFORM ,V?ALARM ,ME>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"I don't think that\">\n\t        <ARTICLE ,PRSO T>\n\t        <TELL \" is sleeping.\" CR>)>>"
  },
  "V-ANSWER": {
   "name": "V-ANSWER",
   "file": "verbs.zil",
   "line": 277,
   "endLine": 279,
   "source": "<ROUTINE V-ANSWER ()\n\t <TELL \"Nobody seems to be awaiting your answer.\" CR>\n\t <STOP>>"
  },
  "V-ASK-ABOUT": {
   "name": "V-ASK-ABOUT",
   "file": "verbs.zil",
   "line": 281,
   "endLine": 296,
   "source": "<ROUTINE V-ASK-ABOUT ()\n\t <COND (<EQUAL? ,PRSO ,ME>\n\t\t<PERFORM ,V?TELL ,ME>\n\t\t<RTRUE>)\n\t       (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL \"After a moment's thought,\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \" denies any knowledge of\">\n\t\t<ARTICLE ,PRSI T>\n\t\t<TELL \".\">\n\t\t<COND (<EQUAL? ,PRSO ,PRSI>\n\t\t       <TELL \" (Rather disingenuous, if you ask me.)\">)>\n\t\t<CRLF>)\n\t       (T\n\t\t<PERFORM ,V?TELL ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-ASK-FOR": {
   "name": "V-ASK-FOR",
   "file": "verbs.zil",
   "line": 298,
   "endLine": 305,
   "source": "<ROUTINE V-ASK-FOR ()\n\t <COND (<AND <EQUAL? ,PRSO ,YOUNGER-SELF>\n\t\t     <EQUAL? ,PRSI ,SPELL-BOOK>\n\t\t     <SPELL-BOOK-PASS-OFF-CHECK>>\n\t\t<RTRUE>)>\n\t <TELL \"Unsurprisingly,\">\n\t <ARTICLE ,PRSO T>\n\t <TELL \" is not likely to oblige.\" CR>>"
  },
  "V-ATTACK": {
   "name": "V-ATTACK",
   "file": "verbs.zil",
   "line": 307,
   "endLine": 308,
   "source": "<ROUTINE V-ATTACK ()\n\t <IKILL \"attack\">>"
  },
  "V-BITE": {
   "name": "V-BITE",
   "file": "verbs.zil",
   "line": 310,
   "endLine": 311,
   "source": "<ROUTINE V-BITE ()\n\t <HACK-HACK \"Biting\">>"
  },
  "PRE-BOARD": {
   "name": "PRE-BOARD",
   "file": "verbs.zil",
   "line": 313,
   "endLine": 328,
   "source": "<ROUTINE PRE-BOARD (\"AUX\" AV)\n\t <SET AV <LOC ,PROTAGONIST>>\n\t <COND (<FSET? ,PRSO ,VEHBIT>\n\t\t<COND (,FLYING\n\t\t       <WHILE-FLYING>)\n\t\t      (<FSET? .AV ,VEHBIT>\n\t\t       <TELL \"You are already in\">\n\t\t       <ARTICLE ,PRSO T>\n\t\t       <TELL \"!\" CR>)\n\t\t      (T\n\t\t       <RFALSE>)>)\n\t       (T\n\t\t<TELL \"You can't get into\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \"!\" CR>)>\n\t <RFATAL>>"
  },
  "V-BOARD": {
   "name": "V-BOARD",
   "file": "verbs.zil",
   "line": 330,
   "endLine": 335,
   "source": "<ROUTINE V-BOARD ()\n\t <MOVE ,PROTAGONIST ,PRSO>\n\t <TELL \"You are now in\">\n\t <ARTICLE ,PRSO T>\n\t <TELL \".\" CR>\n\t <APPLY <GETP ,PRSO ,P?ACTION> ,M-ENTER>>"
  },
  "V-BURN": {
   "name": "V-BURN",
   "file": "verbs.zil",
   "line": 337,
   "endLine": 341,
   "source": "<ROUTINE V-BURN ()\n\t <COND (<NOT ,PRSI>\n\t\t<TELL \"Your blazing gaze is insufficient.\" CR>)\n\t       (T\n\t\t<WITH???>)>>"
  },
  "V-CHASTISE": {
   "name": "V-CHASTISE",
   "file": "verbs.zil",
   "line": 343,
   "endLine": 346,
   "source": "<ROUTINE V-CHASTISE ()\n\t <TELL\n\"Use prepositions to indicate precisely what you want to do: LOOK AT the\nobject, LOOK INSIDE it, LOOK UNDER it, etc.\" CR>>"
  },
  "V-CLIMB-DOWN": {
   "name": "V-CLIMB-DOWN",
   "file": "verbs.zil",
   "line": 348,
   "endLine": 352,
   "source": "<ROUTINE V-CLIMB-DOWN ()\n\t <COND (<EQUAL? ,PRSO ,ROOMS>\n\t\t<DO-WALK ,P?DOWN>)\n\t       (T\n\t\t<V-DEFLATE>)>>"
  },
  "V-CLIMB-FOO": {
   "name": "V-CLIMB-FOO",
   "file": "verbs.zil",
   "line": 354,
   "endLine": 358,
   "source": "<ROUTINE V-CLIMB-FOO ()\n\t <COND (<EQUAL? ,PRSO ,ROOMS>\n\t\t<DO-WALK ,P?UP>)\n\t       (T\n\t\t<V-DEFLATE>)>>"
  },
  "V-CLIMB-ON": {
   "name": "V-CLIMB-ON",
   "file": "verbs.zil",
   "line": 360,
   "endLine": 367,
   "source": "<ROUTINE V-CLIMB-ON ()\n\t <COND (<FSET? ,PRSO ,VEHBIT>\n\t\t<PERFORM ,V?BOARD ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"You can't climb onto\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \".\" CR>)>>"
  },
  "V-CLIMB-OVER": {
   "name": "V-CLIMB-OVER",
   "file": "verbs.zil",
   "line": 369,
   "endLine": 370,
   "source": "<ROUTINE V-CLIMB-OVER ()\n\t <TELL \"You can't do that.\" CR>>"
  },
  "V-CLIMB-UP": {
   "name": "V-CLIMB-UP",
   "file": "verbs.zil",
   "line": 372,
   "endLine": 376,
   "source": "<ROUTINE V-CLIMB-UP ()\n\t <COND (<EQUAL? ,PRSO ,ROOMS>\n\t\t<DO-WALK ,P?UP>)\n\t       (T\n\t\t<V-DEFLATE>)>>"
  },
  "V-CLOSE": {
   "name": "V-CLOSE",
   "file": "verbs.zil",
   "line": 378,
   "endLine": 409,
   "source": "<ROUTINE V-CLOSE ()\n\t <COND (<FSET? ,PRSO ,SCROLLBIT>\n\t\t<TELL-ME-HOW>)\n\t       (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL \"Huh?\" CR>)\n\t       (<FSET? ,PRSO ,SURFACEBIT>\n\t\t<TELL \"There's no way to close\">\n\t\t<ARTICLE ,PRSO>\n\t\t<TELL \".\" CR>)\n\t       (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"Okay,\">\n\t\t       <ARTICLE ,PRSO T>\n\t\t       <TELL \" is now closed.\" CR>\n\t\t       <FCLEAR ,PRSO ,OPENBIT>)\n\t\t      (T\n\t\t       <ALREADY-CLOSED>)>)\n\t       (<OR <FSET? ,PRSO ,CONTBIT>\n\t\t    <EQUAL? ,PRSO ,JOURNAL>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <FCLEAR ,PRSO ,OPENBIT>\n\t\t       <TELL \"Closed.\">\n\t\t       <SETG LIT <LIT? ,HERE>>\n\t\t       <COND (<AND <NOT ,LIT>\n\t\t\t\t   <NOT ,BLORTED>>\n\t\t\t      <TELL \" \">\n\t\t\t      <NOW-BLACK>)>\n\t\t       <CRLF>)\n\t\t      (T\n\t\t       <ALREADY-CLOSED>)>)\n\t       (T\n\t\t<TELL-ME-HOW>)>>"
  },
  "V-COMBO": {
   "name": "V-COMBO",
   "file": "verbs.zil",
   "line": 411,
   "endLine": 417,
   "source": "<ROUTINE V-COMBO ()\n\t <COND (<AND <IN? ,YOUNGER-SELF ,HERE>\n\t\t     <EQUAL? ,PRSO ,INTNUM>>\n\t\t<TELL\n\"Don't tell me. Talk to your confused twin over there.\" CR>)\n\t       (T\n\t\t<TELL \"What are you talking about?\" CR>)>>"
  },
  "V-COMPARE": {
   "name": "V-COMPARE",
   "file": "verbs.zil",
   "line": 419,
   "endLine": 420,
   "source": "<ROUTINE V-COMPARE ()\n\t <V-SIT>>"
  },
  "V-COUNT": {
   "name": "V-COUNT",
   "file": "verbs.zil",
   "line": 430,
   "endLine": 431,
   "source": "<ROUTINE V-COUNT ()\n\t <TELL \"You have lost your mind.\" CR>>"
  },
  "V-CROSS": {
   "name": "V-CROSS",
   "file": "verbs.zil",
   "line": 433,
   "endLine": 434,
   "source": "<ROUTINE V-CROSS ()\n\t <TELL \"You can't cross that!\" CR>>"
  },
  "V-CURSE": {
   "name": "V-CURSE",
   "file": "verbs.zil",
   "line": 436,
   "endLine": 437,
   "source": "<ROUTINE V-CURSE ()\n\t <TELL \"Such language from an Enchanter!\" CR>>"
  },
  "V-CUT": {
   "name": "V-CUT",
   "file": "verbs.zil",
   "line": 439,
   "endLine": 456,
   "source": "<ROUTINE V-CUT ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<PERFORM ,V?KILL ,PRSO ,PRSI>\n\t\t<RTRUE>)\n\t       (<AND <FSET? ,PRSO ,SCROLLBIT>\n\t\t     <FSET? ,PRSI ,WEAPONBIT>>\n\t\t<MOVE ,PRSO ,DIAL>\n\t\t<TELL \"Your skillful\" D ,PRSI \"smanship slices\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \" into slivers, which vanish.\" CR>)\n\t       (<NOT <FSET? ,PRSI ,WEAPONBIT>>\n\t\t<TELL \"I doubt that the \\\"cutting edge\\\" of\">\n\t\t<ARTICLE ,PRSI>\n\t\t<TELL \" is adequate.\" CR>)\n\t       (T\n\t\t<TELL \"Strange concept, cutting\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \"....\" CR>)>>"
  },
  "V-DEFLATE": {
   "name": "V-DEFLATE",
   "file": "verbs.zil",
   "line": 458,
   "endLine": 459,
   "source": "<ROUTINE V-DEFLATE ()\n\t <TELL \"Bizarre.\" CR>>"
  },
  "V-DIG": {
   "name": "V-DIG",
   "file": "verbs.zil",
   "line": 461,
   "endLine": 465,
   "source": "<ROUTINE V-DIG ()\n\t <COND (,FLYING\n\t\t<WHILE-FLYING>)\n\t       (T\n\t\t<V-SIT>)>>"
  },
  "V-DISEMBARK": {
   "name": "V-DISEMBARK",
   "file": "verbs.zil",
   "line": 467,
   "endLine": 473,
   "source": "<ROUTINE V-DISEMBARK ()\n\t <COND (<NOT <EQUAL? <LOC ,PROTAGONIST> ,PRSO>>\n\t\t<LOOK-AROUND-YOU>\n\t\t<RFATAL>)\n\t       (T\n\t\t<TELL \"You are now on your feet.\" CR>\n\t\t<MOVE ,PROTAGONIST ,HERE>)>>"
  },
  "V-DRINK": {
   "name": "V-DRINK",
   "file": "verbs.zil",
   "line": 475,
   "endLine": 476,
   "source": "<ROUTINE V-DRINK (\"AUX\" S)\n\t <TELL \"You can't drink that!\" CR>>"
  },
  "V-DRINK-FROM": {
   "name": "V-DRINK-FROM",
   "file": "verbs.zil",
   "line": 478,
   "endLine": 493,
   "source": "<ROUTINE V-DRINK-FROM (\"AUX\" X)\n\t <COND (<EQUAL? ,PRSO ,WATER>\n\t\t<PERFORM ,V?DRINK ,PRSO>\n\t\t<RTRUE>)\n\t       (<FSET? ,PRSO ,VIALBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <COND (<FIRST? ,PRSO>\n\t\t\t      <SET X <FIRST? ,PRSO>>\n\t\t\t      <PERFORM ,V?DRINK .X>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <TELL \"The vial is empty.\" CR>)>)\n\t\t      (T\n\t\t       <TELL \"The vial is closed!\" CR>)>) \n\t       (T\n\t\t<TELL \"How peculiar!\" CR>)>>"
  },
  "V-DROP": {
   "name": "V-DROP",
   "file": "verbs.zil",
   "line": 500,
   "endLine": 508,
   "source": "<ROUTINE V-DROP ()\n\t <COND (<IDROP>\n\t\t<COND (<AND <EQUAL? ,HERE ,COAL-BIN-ROOM ,DIAL-ROOM>\n\t\t\t    <L? <GETP ,PRSO ,P?SIZE> 20>>\n\t\t       <BURIED-IN-COAL \"drop\">)\n\t\t      (T\n\t\t       <COND (<EQUAL? ,HERE ,HAUNTED-HOUSE>\n\t\t              <MOVE ,PRSO ,DIAL>)>\n\t\t       <TELL \"Dropped.\" CR>)>)>>"
  },
  "V-EAT": {
   "name": "V-EAT",
   "file": "verbs.zil",
   "line": 510,
   "endLine": 511,
   "source": "<ROUTINE V-EAT ()\n\t <TELL \"Did they teach you to eat that in survival school?\" CR>>"
  },
  "V-ENTER": {
   "name": "V-ENTER",
   "file": "verbs.zil",
   "line": 513,
   "endLine": 518,
   "source": "<ROUTINE V-ENTER (\"AUX\" VEHICLE)\n\t <COND (<SET VEHICLE <FIND-IN ,HERE ,VEHBIT>>\n\t\t<PERFORM ,V?BOARD .VEHICLE>\n\t\t<RTRUE>)\n\t       (T\n\t\t<DO-WALK ,P?IN>)>>"
  },
  "PRE-EXAMINE": {
   "name": "PRE-EXAMINE",
   "file": "verbs.zil",
   "line": 520,
   "endLine": 523,
   "source": "<ROUTINE PRE-EXAMINE ()\n\t <COND (<AND <NOT ,LIT>\n\t\t     <NOT ,BLORTED>>\n\t\t<TOO-DARK>)>>"
  },
  "V-EXAMINE": {
   "name": "V-EXAMINE",
   "file": "verbs.zil",
   "line": 525,
   "endLine": 543,
   "source": "<ROUTINE V-EXAMINE ()\n\t <COND (<GETP ,PRSO ,P?TEXT>\n\t\t<PERFORM ,V?READ ,PRSO>\n\t\t<RTRUE>)\n\t       (<FSET? ,PRSO ,DOORBIT>\n\t\t<V-LOOK-INSIDE>)\n\t       (<FSET? ,PRSO ,CONTBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <V-LOOK-INSIDE>)\n\t\t      (T\n\t\t       <TELL \"It's closed.\" CR>)>)\n\t       (<FSET? ,PRSO ,ONBIT>\n\t\t<TELL \"Someone must have cast the frotz spell on\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \", because it is glowing brightly.\" CR>)\n\t       (T\n\t\t<TELL \"You see nothing special about\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \".\" CR>)>>"
  },
  "V-EXIT": {
   "name": "V-EXIT",
   "file": "verbs.zil",
   "line": 545,
   "endLine": 550,
   "source": "<ROUTINE V-EXIT ()\n\t <COND (<FSET? ,PRSO ,VEHBIT>\n\t\t<PERFORM ,V?DISEMBARK ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<DO-WALK ,P?OUT>)>>"
  },
  "V-EXORCISE": {
   "name": "V-EXORCISE",
   "file": "verbs.zil",
   "line": 552,
   "endLine": 553,
   "source": "<ROUTINE V-EXORCISE ()\n\t <TELL \"You can't do that with mere words!\" CR>>"
  },
  "V-FILL": {
   "name": "V-FILL",
   "file": "verbs.zil",
   "line": 555,
   "endLine": 563,
   "source": "<ROUTINE V-FILL ()\n\t <COND (<NOT ,PRSI>\n\t\t<COND (<GLOBAL-IN? ,WATER ,HERE>\n\t\t       <PERFORM ,V?FILL ,PRSO ,WATER>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"There's nothing to fill it with.\" CR>)>)\n\t       (T \n\t\t<TELL \"Huh?\" CR>)>>"
  },
  "V-FIND": {
   "name": "V-FIND",
   "file": "verbs.zil",
   "line": 565,
   "endLine": 595,
   "source": "<ROUTINE V-FIND (\"OPTIONAL\" (WHERE <>) \"AUX\" (L <LOC ,PRSO>))\n\t <COND (<EQUAL? ,PRSO ,HANDS>\n\t\t<TELL\n\"Within six feet of your head, assuming you haven't left that somewhere.\" CR>)\n\t       (<EQUAL? ,PRSO ,ME>\n\t\t<TELL \"You're around here somewhere...\" CR>)\n\t       (<IN? ,PRSO ,PROTAGONIST>\n\t\t<TELL \"You have it!\" CR>)\n\t       (<OR <IN? ,PRSO ,HERE>\n\t\t    <EQUAL? ,PRSO ,PSEUDO-OBJECT>>\n\t\t<COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t       <TELL \"He's\">)\n\t\t      (T\n\t\t       <TELL \"It's\">)>\n\t\t<TELL \" right in front of you.\" CR>)\n\t       (<IN? ,PRSO ,LOCAL-GLOBALS>\n\t\t<TELL \"You're the magician!\" CR>)\n\t       (<AND <FSET? .L ,ACTORBIT>\n\t\t     <VISIBLE? .L>>\n\t\t<TELL \"As far as you can tell,\">\n\t\t<ARTICLE .L T>\n\t\t<TELL \" has it.\" CR>)\n\t       (<AND <FSET? .L ,CONTBIT>\n\t\t     <VISIBLE? .L>>\n\t\t<TELL \"It's in\">\n\t\t<ARTICLE .L T>\n\t\t<TELL \".\" CR>)\n\t       (.WHERE\n\t\t<TELL \"Beats me.\" CR>)\n\t       (T\n\t\t<TELL \"You'll have to do that yourself.\" CR>)>>"
  },
  "V-FIRST-LOOK": {
   "name": "V-FIRST-LOOK",
   "file": "verbs.zil",
   "line": 597,
   "endLine": 600,
   "source": "<ROUTINE V-FIRST-LOOK ()\n\t <COND (<DESCRIBE-ROOM>\n\t\t<COND (<NOT ,SUPER-BRIEF>\n\t\t       <DESCRIBE-OBJECTS>)>)>>"
  },
  "V-FLY": {
   "name": "V-FLY",
   "file": "verbs.zil",
   "line": 602,
   "endLine": 615,
   "source": "<ROUTINE V-FLY ()\n\t <COND (<OR <NOT ,PRSO>\n\t\t    <EQUAL? ,PRSO ,ME>>\n\t\t<COND (,FLYING\n\t\t       <TELL \"You are!\" CR>)\n\t              (T\n\t\t       <TELL \"Perhaps a spell would be useful...\" CR>)>)\n\t       (<EQUAL? ,PRSO ,P-DIRECTION>\n\t\t<PERFORM ,V?WALK ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"You can't make\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \" fly!\" CR>)>>"
  },
  "V-FOLLOW": {
   "name": "V-FOLLOW",
   "file": "verbs.zil",
   "line": 617,
   "endLine": 626,
   "source": "<ROUTINE V-FOLLOW ()\n\t <COND (<IN? ,PRSO ,HERE>\n\t\t<TELL \"But\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \" is right here!\" CR>)\n\t       (<AND <EQUAL? ,PRSO ,TURRET>\n\t\t     ,MAILMAN-FOLLOW>\n\t\t<DO-WALK ,P?SOUTH>)\n\t       (T\n\t\t<V-SIT>)>>"
  },
  "V-FORGET": {
   "name": "V-FORGET",
   "file": "verbs.zil",
   "line": 628,
   "endLine": 630,
   "source": "<ROUTINE V-FORGET ()\n\t <TELL\n\"You might also try not thinking about a purple hippopotamus!\" CR>>"
  },
  "PRE-GIVE": {
   "name": "PRE-GIVE",
   "file": "verbs.zil",
   "line": 632,
   "endLine": 638,
   "source": "<ROUTINE PRE-GIVE ()\n\t <COND (<NOT <HELD? ,PRSO>>\n\t\t<TELL \n\"That's easy for you to say since you don't even have it.\" CR>)\n\t       (<FSET? ,PRSO ,SPELLBIT>\n\t\t<TELL\n\"The spell is permanently inscribed in your spell book!\" CR>)>>"
  },
  "V-GIVE": {
   "name": "V-GIVE",
   "file": "verbs.zil",
   "line": 640,
   "endLine": 650,
   "source": "<ROUTINE V-GIVE ()\n\t <COND (<NOT <FSET? ,PRSI ,ACTORBIT>>\n\t\t<TELL \"You can't give\">\n\t\t<ARTICLE ,PRSO>\n\t\t<TELL \" to\">\n\t\t<ARTICLE ,PRSI>\n\t\t<TELL \"!\" CR>)\n\t       (T\n\t\t<TELL \"Politely,\">\n\t\t<ARTICLE ,PRSI T>\n\t\t<TELL \" refuses your offer.\" CR>)>>"
  },
  "V-HELLO": {
   "name": "V-HELLO",
   "file": "verbs.zil",
   "line": 652,
   "endLine": 663,
   "source": "<ROUTINE V-HELLO ()\n       <COND (,PRSO\n\t      <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t     <TELL \"Silently,\">\n\t\t     <ARTICLE ,PRSO T>\n\t\t     <TELL \" bows his head to you in greeting.\" CR>)\n\t\t    (T\n\t\t     <TELL \"Only schizophrenics say \\\"Hello\\\" to\">\n\t\t     <ARTICLE ,PRSO>\n\t\t     <TELL \".\" CR>)>)\n\t     (T\n\t      <TELL <PICK-ONE ,HELLOS> CR>)>>"
  },
  "V-HELP": {
   "name": "V-HELP",
   "file": "verbs.zil",
   "line": 672,
   "endLine": 680,
   "source": "<ROUTINE V-HELP ()\n\t <TELL\n\"If you're really stuck, maps and InvisiClues hint booklets are available.\nIf you have misplaced the order form that came in your package, send us a \nnote at:|\n  P.O. Box 620|\n  Garden City, NY 11530|\n  Dept. Z5|\nand we'll be happy to send you an order form.\" CR>>"
  },
  "V-HIDE": {
   "name": "V-HIDE",
   "file": "verbs.zil",
   "line": 682,
   "endLine": 691,
   "source": "<ROUTINE V-HIDE ()\n\t <COND (<NOT ,PRSO>\n\t\t<TELL \"There's no place to hide here.\" CR>\n\t\t<RFATAL>)\n\t       (<AND ,PRSI <FSET? ,PRSI ,ACTORBIT>>\n\t\t<TELL \"Why hide it when\">\n\t\t<ARTICLE ,PRSI T>\n\t\t<TELL \" isn't interested in it.\" CR>)\n\t       (<NOT ,PRSI>\n\t\t<TELL \"From what? From whom? Why?\" CR>)>>"
  },
  "V-INFLATE": {
   "name": "V-INFLATE",
   "file": "verbs.zil",
   "line": 693,
   "endLine": 694,
   "source": "<ROUTINE V-INFLATE ()\n\t <TELL \"How can you inflate that?\" CR>>"
  },
  "V-KICK": {
   "name": "V-KICK",
   "file": "verbs.zil",
   "line": 701,
   "endLine": 702,
   "source": "<ROUTINE V-KICK ()\n\t <HACK-HACK \"Kicking\">>"
  },
  "V-KILL": {
   "name": "V-KILL",
   "file": "verbs.zil",
   "line": 704,
   "endLine": 705,
   "source": "<ROUTINE V-KILL ()\n\t <IKILL \"kill\">>"
  },
  "IKILL": {
   "name": "IKILL",
   "file": "verbs.zil",
   "line": 707,
   "endLine": 737,
   "source": "<ROUTINE IKILL (STR)\n\t <COND (<NOT ,PRSO>\n\t\t<TELL \"There is nothing here to \" .STR \".\" CR>)\n\t       (<AND <NOT ,PRSI>\n\t\t     <HELD? ,KNIFE>>\n\t\t<SETG PRSI ,KNIFE>\n\t\t<TELL \"(with the \" D ,PRSI \")\" CR>\n\t\t<PERFORM ,V?KILL ,PRSO ,PRSI>\n\t\t<RTRUE>)>\n\t <COND (<AND <NOT <FSET? ,PRSO ,ACTORBIT>>\n\t\t     <NOT <EQUAL? ,PRSO ,BOA ,HELLHOUND ,DORN-BEAST>>>\n\t\t<TELL \"I've known strange people, but fighting\">\n\t\t<ARTICLE ,PRSO>\n\t\t<TELL \"?\" CR>)\n\t       (<OR <NOT ,PRSI>\n\t\t    <EQUAL? ,PRSI ,HANDS>>\n\t\t<TELL \"Trying to \" .STR>\n\t\t<ARTICLE ,PRSO>\n\t\t<TELL \" with your bare hands is suicidal.\" CR>)\n\t       (<NOT <IN? ,PRSI ,PROTAGONIST>>\n\t\t<TELL \"You aren't even holding\">\n\t\t<ARTICLE ,PRSI T>\n\t\t<TELL \".\" CR>)\n\t       (<NOT <FSET? ,PRSI ,WEAPONBIT>>\n\t\t<TELL \"Trying to \" .STR>\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \" with\">\n\t\t<ARTICLE ,PRSI>\n\t\t<TELL \" is suicidal.\" CR>)\n\t       (T\n\t\t<TELL \"You'd never survive the attack.\" CR>)>>"
  },
  "V-KNOCK": {
   "name": "V-KNOCK",
   "file": "verbs.zil",
   "line": 739,
   "endLine": 745,
   "source": "<ROUTINE V-KNOCK ()\n\t <COND (<FSET? ,PRSO ,DOORBIT>\n\t\t<TELL \"Nobody's home.\" CR>)\n\t       (T\n\t\t<TELL \"Why knock on\">\n\t\t<ARTICLE ,PRSO>\n\t\t<TELL \"?\" CR>)>>"
  },
  "V-KISS": {
   "name": "V-KISS",
   "file": "verbs.zil",
   "line": 747,
   "endLine": 748,
   "source": "<ROUTINE V-KISS ()\n\t <TELL \"I'd sooner kiss a pig.\" CR>>"
  },
  "V-LAMP-OFF": {
   "name": "V-LAMP-OFF",
   "file": "verbs.zil",
   "line": 750,
   "endLine": 769,
   "source": "<ROUTINE V-LAMP-OFF ()\n\t <COND (<FSET? ,PRSO ,LIGHTBIT>\n\t\t<COND (<NOT <FSET? ,PRSO ,ONBIT>>\n\t\t       <TELL \"It is already off.\" CR>)\n\t\t      (T\n\t\t       <FCLEAR ,PRSO ,ONBIT>\n\t\t       <COND (,LIT\n\t\t\t      <SETG LIT <LIT? ,HERE>>)>\n\t\t       <TELL \"Okay,\">\n\t\t       <ARTICLE ,PRSO T>\n\t\t       <TELL \" is now off.\" CR>\n\t\t       <COND (<AND <NOT <SETG LIT <LIT? ,HERE>>>\n\t\t\t\t   <NOT ,BLORTED>>\n\t\t\t      <NOW-BLACK>\n\t\t\t      <CRLF>)>)>)\n\t       (<FSET? ,PRSO ,ONBIT>\n\t\t<TELL \"How? It's glowing by magic.\" CR>)\n\t       (T\n\t\t<TELL \"You can't turn that off.\" CR>)>\n\t <RTRUE>>"
  },
  "V-LAMP-ON": {
   "name": "V-LAMP-ON",
   "file": "verbs.zil",
   "line": 771,
   "endLine": 787,
   "source": "<ROUTINE V-LAMP-ON ()\n\t <COND (<FSET? ,PRSO ,LIGHTBIT>\n\t\t<COND (<FSET? ,PRSO ,ONBIT>\n\t\t       <TELL \"It is already on.\" CR>)\n\t\t      (T\n\t\t       <FSET ,PRSO ,ONBIT>\n\t\t       <TELL \"Okay,\">\n\t\t       <ARTICLE ,PRSO T>\n\t\t       <TELL \" is now on.\" CR>\n\t\t       <COND (<AND <NOT ,LIT>\n\t\t\t\t   <NOT ,BLORTED>>\n\t\t\t      <SETG LIT <LIT? ,HERE>>\n\t\t\t      <CRLF>\n\t\t\t      <V-LOOK>)>)>)\n\t       (T\n\t\t<TELL \"You can't turn that on.\" CR>)>\n\t <RTRUE>>"
  },
  "V-LAND": {
   "name": "V-LAND",
   "file": "verbs.zil",
   "line": 789,
   "endLine": 793,
   "source": "<ROUTINE V-LAND ()\n\t <COND (,FLYING\n\t\t<TELL \"You'll have to wait for the spell to wear off.\" CR>)\n\t       (T\n\t\t<LOOK-AROUND-YOU>)>>"
  },
  "V-LAUNCH": {
   "name": "V-LAUNCH",
   "file": "verbs.zil",
   "line": 795,
   "endLine": 799,
   "source": "<ROUTINE V-LAUNCH ()\n\t <COND (<FSET? ,PRSO ,VEHBIT>\n\t\t<TELL \"You can't launch that by saying \\\"launch\\\"!\" CR>)\n\t       (T\n\t\t<TELL \"Huh?\" CR>)>>"
  },
  "V-LEAN-ON": {
   "name": "V-LEAN-ON",
   "file": "verbs.zil",
   "line": 801,
   "endLine": 802,
   "source": "<ROUTINE V-LEAN-ON ()\n\t <TELL \"Are you so very tired, then?\" CR>>"
  },
  "V-LEAP": {
   "name": "V-LEAP",
   "file": "verbs.zil",
   "line": 804,
   "endLine": 823,
   "source": "<ROUTINE V-LEAP ()\n\t <COND (,FLYING\n\t\t<WHILE-FLYING>)\n\t       (,PRSO\n\t\t<COND (<IN? ,PRSO ,HERE>\n\t\t       <V-SKIP>)\n\t\t      (T\n\t\t       <TELL \"That would be a good trick.\" CR>)>)\n\t       (<OR <EQUAL? ,HERE ,RIVER-BANK ,DRAWBRIDGE ,TOP-OF-FALLS>\n\t\t    <EQUAL? ,HERE ,TURRET ,EDGE-OF-CHASM ,BARE-PASSAGE>\n\t\t    <EQUAL? ,HERE ,TREE-BRANCH ,GUN-EMPLACEMENT>\n\t\t    ,RIDE-IN-PROGRESS>\n\t\t<JIGS-UP\n\"This was not a safe place to try jumping. You should have looked\nbefore you leaped.\">)\n\t       (<OR <EQUAL? ,HERE ,LAGOON ,DRAWBRIDGE>\n\t\t    <EQUAL? ,HERE ,COAL-BIN-ROOM ,TOP-OF-CHUTE>>\n\t\t<DO-WALK ,P?DOWN>)\n\t       (T\n\t\t<V-SKIP>)>>"
  },
  "V-LEAVE": {
   "name": "V-LEAVE",
   "file": "verbs.zil",
   "line": 825,
   "endLine": 826,
   "source": "<ROUTINE V-LEAVE ()\n\t <DO-WALK ,P?OUT>>"
  },
  "V-LIE-DOWN": {
   "name": "V-LIE-DOWN",
   "file": "verbs.zil",
   "line": 828,
   "endLine": 830,
   "source": "<ROUTINE V-LIE-DOWN ()\n\t <PERFORM ,V?SLEEP>\n\t <RTRUE>>"
  },
  "V-LISTEN": {
   "name": "V-LISTEN",
   "file": "verbs.zil",
   "line": 832,
   "endLine": 835,
   "source": "<ROUTINE V-LISTEN ()\n\t <TELL \"At the moment,\">\n\t <ARTICLE ,PRSO T>\n\t <TELL \" makes no sound.\" CR>>"
  },
  "V-LOCK": {
   "name": "V-LOCK",
   "file": "verbs.zil",
   "line": 837,
   "endLine": 838,
   "source": "<ROUTINE V-LOCK ()\n\t <TELL <PICK-ONE ,YUKS> CR>>"
  },
  "V-LOOK": {
   "name": "V-LOOK",
   "file": "verbs.zil",
   "line": 840,
   "endLine": 842,
   "source": "<ROUTINE V-LOOK ()\n\t <COND (<DESCRIBE-ROOM T>\n\t\t<DESCRIBE-OBJECTS T>)>>"
  },
  "V-LOOK-BEHIND": {
   "name": "V-LOOK-BEHIND",
   "file": "verbs.zil",
   "line": 844,
   "endLine": 847,
   "source": "<ROUTINE V-LOOK-BEHIND ()\n\t <TELL \"There is nothing behind\">\n\t <ARTICLE ,PRSO T>\n\t <TELL \".\" CR>>"
  },
  "V-LOOK-DOWN": {
   "name": "V-LOOK-DOWN",
   "file": "verbs.zil",
   "line": 849,
   "endLine": 858,
   "source": "<ROUTINE V-LOOK-DOWN ()\n\t <COND (<AND <NOT ,LIT>\n\t\t     <NOT ,BLORTED>>\n\t\t<TOO-DARK>)\n\t       (<EQUAL? ,PRSO ,ROOMS>\n\t\t<PERFORM ,V?EXAMINE ,GROUND>\n\t\t<RTRUE>)\n\t       (T\n\t\t<PERFORM ,V?LOOK-INSIDE ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-LOOK-INSIDE": {
   "name": "V-LOOK-INSIDE",
   "file": "verbs.zil",
   "line": 860,
   "endLine": 906,
   "source": "<ROUTINE V-LOOK-INSIDE ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL \"There is nothing special to be seen.\" CR>)\n\t       (<FSET? ,PRSO ,SURFACEBIT>\n\t\t<COND (<FIRST? ,PRSO>\n\t\t       <PRINT-CONT ,PRSO>)\n\t\t      (T\n\t\t       <TELL \"There is nothing on\">\n\t\t       <ARTICLE ,PRSO T>\n\t\t       <TELL \".\" CR>)>)\n\t       (<FSET? ,PRSO ,DOORBIT>\n\t\t<TELL \"All you can tell is that\">\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <ARTICLE ,PRSO T>\n\t\t       <TELL \" is open.\">)\n\t\t      (T\n\t\t       <ARTICLE ,PRSO T>\n\t\t       <TELL \" is closed.\">)>\n\t\t<CRLF>)\n\t       (<FSET? ,PRSO ,SCROLLBIT>\n\t\t<PERFORM ,V?READ ,PRSO>\n\t\t<RTRUE>)\n\t       (<FSET? ,PRSO ,CONTBIT>\n\t\t<COND (<EQUAL? ,PRSO <LOC ,PROTAGONIST>>\n\t\t       <MOVE ,PROTAGONIST ,ROOMS>\n\t\t       <COND (<FIRST? ,PRSO>\n\t\t\t      <PRINT-CONT ,PRSO>)\n\t\t\t     (T\n\t\t\t      <TELL \"It's empty (not counting you).\" CR>)>\n\t\t       <MOVE ,PROTAGONIST ,PRSO>)\n\t\t      (<SEE-INSIDE? ,PRSO>\n\t\t       <COND (<FIRST? ,PRSO>\n\t\t\t      <PRINT-CONT ,PRSO>)\n\t\t\t     (T\n\t\t\t      <TELL \"It's empty.\" CR>)>)\n\t\t      (<AND <NOT <FSET? ,PRSO ,OPENBIT>>\n\t\t\t    <FIRST? ,PRSO>>\n\t\t       <PERFORM ,V?OPEN ,PRSO>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"It seems that\">\n\t\t       <ARTICLE ,PRSO T>\n\t\t       <TELL \" is closed.\" CR>)>)\n\t       (T\n\t\t<TELL \"You can't look inside\">\n\t\t<ARTICLE ,PRSO>\n\t\t<TELL \".\" CR>)>>"
  },
  "V-LOOK-UNDER": {
   "name": "V-LOOK-UNDER",
   "file": "verbs.zil",
   "line": 908,
   "endLine": 922,
   "source": "<ROUTINE V-LOOK-UNDER ()\n\t <COND (<HELD? ,PRSO>\n\t\t<TELL \"You're \">\n\t\t<COND (<FSET? ,PRSO ,WEARBIT>\n\t\t       <TELL \"wear\">)\n\t\t      (T\n\t\t       <TELL \"hold\">)>\n\t\t<TELL \"ing it!\" CR>)\n\t       (T\n\t\t<TELL \"There is nothing but \">\n\t\t<COND (<EQUAL? ,HERE ,LAGOON-FLOOR>\n\t\t       <TELL \"sand\">)\n\t\t      (T\n\t\t       <TELL \"dust\">)>\n\t\t<TELL \" there.\" CR>)>>"
  },
  "V-LOWER": {
   "name": "V-LOWER",
   "file": "verbs.zil",
   "line": 924,
   "endLine": 925,
   "source": "<ROUTINE V-LOWER ()\n\t <V-RAISE>>"
  },
  "V-LOWER-INTO": {
   "name": "V-LOWER-INTO",
   "file": "verbs.zil",
   "line": 927,
   "endLine": 928,
   "source": "<ROUTINE V-LOWER-INTO ()\n\t <V-RAISE>>"
  },
  "V-MELT": {
   "name": "V-MELT",
   "file": "verbs.zil",
   "line": 930,
   "endLine": 933,
   "source": "<ROUTINE V-MELT ()\n\t <TELL \"I'm not sure that\">\n\t <ARTICLE ,PRSO>\n\t <TELL \" can be melted.\" CR>>"
  },
  "V-MOVE": {
   "name": "V-MOVE",
   "file": "verbs.zil",
   "line": 935,
   "endLine": 945,
   "source": "<ROUTINE V-MOVE ()\n\t <COND (<HELD? ,PRSO>\n\t\t<TELL \"Why juggle objects?\" CR>)\n\t       (<FSET? ,PRSO ,TAKEBIT>\n\t\t<TELL \"Moving\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \" reveals nothing.\" CR>)\n\t       (T\n\t\t<TELL \"You can't move\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \".\" CR>)>>"
  },
  "V-MUNG": {
   "name": "V-MUNG",
   "file": "verbs.zil",
   "line": 947,
   "endLine": 948,
   "source": "<ROUTINE V-MUNG ()\n\t <HACK-HACK \"Trying to break\">>"
  },
  "PRE-OPEN": {
   "name": "PRE-OPEN",
   "file": "verbs.zil",
   "line": 950,
   "endLine": 952,
   "source": "<ROUTINE PRE-OPEN ()\n\t <COND (,FWEEPED\n\t\t<BATTY>)>>"
  },
  "V-OPEN": {
   "name": "V-OPEN",
   "file": "verbs.zil",
   "line": 954,
   "endLine": 997,
   "source": "<ROUTINE V-OPEN (\"AUX\" F STR)\n\t <COND (<FSET? ,PRSO ,SCROLLBIT>\n\t\t<TELL-ME-HOW>) \n\t       (<EQUAL? ,PRSO ,ACTORBIT>\n\t\t<TELL \"Huh?\" CR>)\n\t       (<AND <FSET? ,PRSO ,VIALBIT>\n\t\t     <EQUAL? ,HERE ,LAGOON ,LAGOON-FLOOR>\n\t\t     <FIRST? ,PRSO>>\n\t\t<REMOVE <FIRST? ,PRSO>>\n\t\t<TELL\n\"As you open the vial it fills with water, washing away the potion. A moment\nlater a fish swims by, acting very strangely.\" CR>)\n\t       (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <ALREADY-OPEN>)\n\t\t      (T\n\t\t       <FSET ,PRSO ,OPENBIT>\n\t\t       <TELL \"Okay,\">\n\t\t       <ARTICLE ,PRSO T>\n\t\t       <TELL \" is now open.\" CR>)>)\n\t       (<FSET? ,PRSO ,CONTBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <ALREADY-OPEN>)\n\t\t      (T\n\t\t       <FSET ,PRSO ,OPENBIT>\n\t\t       <FSET ,PRSO ,TOUCHBIT>\n\t\t       <COND (<OR <NOT <FIRST? ,PRSO>>\n\t\t\t\t  <FSET? ,PRSO ,TRANSBIT>>\n\t\t\t      <TELL \"Opened.\" CR>)\n\t\t\t     ;(<AND <SET F <FIRST? ,PRSO>>\n\t\t\t\t   <NOT <NEXT? .F>>\n\t\t\t\t   <SET STR <GETP .F ,P?FDESC>>>\n\t\t\t      <TELL \"Okay,\">\n\t\t\t      <ARTICLE ,PRSO T>\n\t\t\t      <TELL \" is now open.\" CR>\n\t\t\t      <TELL .STR CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"Opening\">\n\t\t\t      <ARTICLE ,PRSO T>\n\t\t\t      <TELL \" reveals \">\n\t\t\t      <PRINT-CONTENTS ,PRSO>\n\t\t\t      <TELL \".\" CR>)>)>)\n\t       (T\n\t\t<TELL-ME-HOW>)>>"
  },
  "V-PAY": {
   "name": "V-PAY",
   "file": "verbs.zil",
   "line": 999,
   "endLine": 1018,
   "source": "<ROUTINE V-PAY ()\n\t <COND (<NOT ,PRSI>\n\t\t<COND (<EQUAL? ,PRSO ,ZORKMID>\n\t\t       <SETG PRSI <FIND-IN ,HERE ,ACTORBIT>>\n\t\t       <COND (,PRSI\n\t\t\t      <PERFORM ,V?GIVE ,PRSO ,PRSI>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <TELL \"There's no one here to pay.\" CR>\n\t\t\t      <RTRUE>)>)\n\t\t      (<HELD? ,ZORKMID>\n\t\t       <SETG PRSI ,ZORKMID>)\n\t\t      (T\n\t\t       <TELL \"Pay with what?\" CR>\n\t\t       <RTRUE>)>)>\n\t <COND (<EQUAL? ,PRSI ,ZORKMID>\n\t\t<PERFORM ,V?GIVE ,PRSI ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<WITH???>)>>"
  },
  "V-PICK": {
   "name": "V-PICK",
   "file": "verbs.zil",
   "line": 1020,
   "endLine": 1021,
   "source": "<ROUTINE V-PICK ()\n\t <TELL \"You can't pick that!\" CR>>"
  },
  "V-PLAY": {
   "name": "V-PLAY",
   "file": "verbs.zil",
   "line": 1023,
   "endLine": 1024,
   "source": "<ROUTINE V-PLAY ()\n         <TELL \"How peculiar!\" CR>>"
  },
  "V-PLUG": {
   "name": "V-PLUG",
   "file": "verbs.zil",
   "line": 1026,
   "endLine": 1027,
   "source": "<ROUTINE V-PLUG ()\n\t <TELL \"This has no effect.\" CR>>"
  },
  "V-POINT": {
   "name": "V-POINT",
   "file": "verbs.zil",
   "line": 1029,
   "endLine": 1030,
   "source": "<ROUTINE V-POINT ()\n\t <TELL \"It's usually impolite to point.\" CR>>"
  },
  "V-POUR": {
   "name": "V-POUR",
   "file": "verbs.zil",
   "line": 1032,
   "endLine": 1033,
   "source": "<ROUTINE V-POUR ()\n\t <TELL \"You can't pour that!\" CR>>"
  },
  "V-PUMP": {
   "name": "V-PUMP",
   "file": "verbs.zil",
   "line": 1035,
   "endLine": 1036,
   "source": "<ROUTINE V-PUMP ()\n\t <TELL \"It's not clear how.\" CR>>"
  },
  "V-PUSH": {
   "name": "V-PUSH",
   "file": "verbs.zil",
   "line": 1038,
   "endLine": 1039,
   "source": "<ROUTINE V-PUSH ()\n\t <HACK-HACK \"Pushing\">>"
  },
  "V-PUSH-TO": {
   "name": "V-PUSH-TO",
   "file": "verbs.zil",
   "line": 1041,
   "endLine": 1042,
   "source": "<ROUTINE V-PUSH-TO ()\n\t <TELL \"You can't push things to that.\" CR>>"
  },
  "PRE-PUT": {
   "name": "PRE-PUT",
   "file": "verbs.zil",
   "line": 1044,
   "endLine": 1047,
   "source": "<ROUTINE PRE-PUT ()\n\t <COND (<OR <IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t    <NOT <FSET? ,PRSO ,TAKEBIT>>>\n\t\t<TELL \"Nice try.\" CR>)>>"
  },
  "V-PUT": {
   "name": "V-PUT",
   "file": "verbs.zil",
   "line": 1049,
   "endLine": 1081,
   "source": "<ROUTINE V-PUT ()\n\t <COND (<AND <NOT <FSET? ,PRSI ,OPENBIT>>\n\t\t     <NOT <FSET? ,PRSI ,DOORBIT>>\n\t\t     <NOT <FSET? ,PRSI ,CONTBIT>>\n\t\t     <NOT <FSET? ,PRSI ,SURFACEBIT>>\n\t\t     <NOT <FSET? ,PRSI ,VEHBIT>>>\n\t\t<TELL \"You can't do that.\" CR>\n\t\t<RTRUE>)\n\t       (<AND <NOT <FSET? ,PRSI ,OPENBIT>>\n\t\t     <NOT <FSET? ,PRSI ,SURFACEBIT>>>\n\t\t<THIS-IS-IT ,PRSI>\n\t\t<TELL \"Inspection reveals that\">\n\t\t<ARTICLE ,PRSI T>\n\t\t<TELL \" isn't open.\" CR>)\n\t       (<EQUAL? ,PRSI ,PRSO>\n\t\t<TELL \"How can you do that?\" CR>)\n\t       (<IN? ,PRSO ,PRSI>\n\t\t<TELL \"I think\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \" is already in\">\n\t\t<ARTICLE ,PRSI T>\n\t\t<TELL \".\" CR>)\n\t       (<G? <- <+ <WEIGHT ,PRSI> <WEIGHT ,PRSO>>\n\t\t       <GETP ,PRSI ,P?SIZE>>\n\t\t    <GETP ,PRSI ,P?CAPACITY>>\n\t\t<TELL \"There's no room.\" CR>)\n\t       (<AND <NOT <HELD? ,PRSO>>\n\t\t     <EQUAL? <ITAKE> ,M-FATAL <>>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<MOVE ,PRSO ,PRSI>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<TELL \"Done.\" CR>)>>"
  },
  "V-PUT-BEHIND": {
   "name": "V-PUT-BEHIND",
   "file": "verbs.zil",
   "line": 1083,
   "endLine": 1084,
   "source": "<ROUTINE V-PUT-BEHIND ()\n\t <TELL \"That hiding place is too obvious.\" CR>>"
  },
  "V-PUT-ON": {
   "name": "V-PUT-ON",
   "file": "verbs.zil",
   "line": 1086,
   "endLine": 1095,
   "source": "<ROUTINE V-PUT-ON ()\n\t <COND (<EQUAL? ,PRSI ,ME>\n\t\t<PERFORM ,V?WEAR ,PRSO>\n\t\t<RTRUE>)\n\t       (<FSET? ,PRSI ,SURFACEBIT>\n\t\t<V-PUT>)\n\t       (T\n\t\t<TELL \"There's no good surface on\">\n\t\t<ARTICLE ,PRSI T>\n\t\t<TELL \".\" CR>)>>"
  },
  "V-PUT-UNDER": {
   "name": "V-PUT-UNDER",
   "file": "verbs.zil",
   "line": 1097,
   "endLine": 1098,
   "source": "<ROUTINE V-PUT-UNDER ()\n         <TELL \"You can't put anything under that.\" CR>>"
  },
  "V-RAPE": {
   "name": "V-RAPE",
   "file": "verbs.zil",
   "line": 1100,
   "endLine": 1101,
   "source": "<ROUTINE V-RAPE ()\n\t <TELL \"What a (ahem!) strange idea.\" CR>>"
  },
  "V-RAISE": {
   "name": "V-RAISE",
   "file": "verbs.zil",
   "line": 1103,
   "endLine": 1104,
   "source": "<ROUTINE V-RAISE ()\n\t <HACK-HACK \"Playing in this way with\">>"
  },
  "V-REACH-IN": {
   "name": "V-REACH-IN",
   "file": "verbs.zil",
   "line": 1106,
   "endLine": 1119,
   "source": "<ROUTINE V-REACH-IN (\"AUX\" OBJ)\n\t <COND (<OR <NOT <FSET? ,PRSO ,CONTBIT>>\n\t\t    <FSET? ,PRSO ,ACTORBIT>>\n\t\t<TELL \"What a maroon!\" CR>)\n\t       (<NOT <FSET? ,PRSO ,OPENBIT>>\n\t\t<TELL \"It's not open.\" CR>)\n\t       (<OR <NOT <SET OBJ <FIRST? ,PRSO>>>\n\t\t    <FSET? .OBJ ,INVISIBLE>\n\t\t    <NOT <FSET? .OBJ ,TAKEBIT>>>\n\t\t<TELL \"It's empty.\" CR>)\n\t       (T\n\t\t<TELL \"You reach into\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \" and feel something.\" CR>)>>"
  },
  "PRE-READ": {
   "name": "PRE-READ",
   "file": "verbs.zil",
   "line": 1121,
   "endLine": 1135,
   "source": "<ROUTINE PRE-READ ()\n\t <COND (,FWEEPED\n\t\t<BATTY>)\n\t       (<EQUAL? ,PRSO ,SPELL-BOOK>\n\t\t<RFALSE> ;\"special case\")\n\t       (<AND <FSET? ,PRSO ,SPELLBIT>\n\t\t     <IN? ,PRSO ,SPELL-BOOK>>\n\t\t<RFALSE> ;\"same special case\")\n\t       (<AND <NOT ,LIT>\n\t\t     <NOT ,BLORTED>>\n\t\t<TELL \"It is impossible to read in the dark.\" CR>)\n\t       (<AND ,PRSI <NOT <FSET? ,PRSI ,TRANSBIT>>>\n\t\t<TELL \"How does one look through\">\n\t\t<ARTICLE ,PRSI>\n\t\t<TELL \"?\" CR>)>>"
  },
  "V-READ": {
   "name": "V-READ",
   "file": "verbs.zil",
   "line": 1137,
   "endLine": 1144,
   "source": "<ROUTINE V-READ ()\n\t <COND (<OR <FSET? ,PRSO ,READBIT>\n                    <FSET? ,PRSO ,SPELLBIT>>\n\t\t<TELL <GETP ,PRSO ,P?TEXT> CR>)\n               (T\n                <TELL \"How can you read\">\n\t\t<ARTICLE ,PRSO>\n\t\t<TELL \"?\" CR>)>>"
  },
  "V-REPLY": {
   "name": "V-REPLY",
   "file": "verbs.zil",
   "line": 1146,
   "endLine": 1150,
   "source": "<ROUTINE V-REPLY ()\n\t <TELL \"It is hardly likely that\">\n\t <ARTICLE ,PRSO T>\n\t <TELL \" is interested.\" CR>\n\t <STOP>>"
  },
  "PRE-RESEARCH": {
   "name": "PRE-RESEARCH",
   "file": "verbs.zil",
   "line": 1152,
   "endLine": 1187,
   "source": "<ROUTINE PRE-RESEARCH ()\n\t <COND (<AND <NOT ,PRSI>\n\t\t     <EQUAL? ,HERE ,LIBRARY>>\n\t\t<SETG PRSI ,ENCYCLOPEDIA>)>\n\t <COND (<EQUAL? ,PRSO ,ROOMS>\n\t\t<COND (<NOT <NOT ,LIT>\n\t\t\t    <NOT ,BLORTED>>\n\t\t       <TOO-DARK>\n\t\t       <RTRUE>)>\n\t\t<COND (<EQUAL? ,HERE ,GLASS-MAZE>\n\t\t       <PERFORM ,V?EXAMINE ,MAZE>\n\t\t       <RTRUE>)\n\t\t      (<FSET? ,HERE ,INSIDEBIT>\n\t\t       <PERFORM ,V?EXAMINE ,CEILING>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <PERFORM ,V?EXAMINE ,SKY>\n\t\t       <RTRUE>)>)\n\t       (<AND <NOT ,PRSI>\n\t\t     <OR <EQUAL? ,PRSO ,LOWER-CHUTE ,UPPER-CHUTE ,STAIRS>\n\t\t\t <EQUAL? ,PRSO ,CHIMNEY ,FIREPLACE ,FLAG-POLE>\n\t\t\t <EQUAL? ,PRSO ,PSEUDO-OBJECT ,ZORKMID-TREE ,TREE>>>\n\t\t<MAKE-OUT>)\n\t       (<AND <NOT ,LIT>\n\t\t     <NOT ,BLORTED>>\n\t\t<PERFORM ,V?READ ,ENCYCLOPEDIA>\n\t\t<RTRUE>)\n\t       (<NOT ,PRSI>\n\t\t<TELL \"There's no encyclopedia here to look it up in.\" CR>)\n\t       (<NOT <EQUAL? ,PRSI ,ENCYCLOPEDIA>>\n\t\t<TELL \"You can't read about things in\">\n\t\t<ARTICLE ,PRSI>\n\t\t<TELL \".\" CR>)\n\t       (T\n\t\t<SETG VOLUME-USED T>\n\t\t<RFALSE>)>>"
  },
  "V-RESEARCH": {
   "name": "V-RESEARCH",
   "file": "verbs.zil",
   "line": 1189,
   "endLine": 1369,
   "source": "<ROUTINE V-RESEARCH ()\n\t <COND (<EQUAL? ,PRSO ,LOBBY ,CELLAR ,STORE-ROOM>\n\t\t<TELL\n\"The spot where the entry should be is blank, as though the text\nwere magically excised or transported to some other location.\" CR>)\n\t       (<EQUAL? ,PRSO ,COAL-MINE-1>\n\t\t<TELL\n\"Entharion the Wise united many warring tribes to form the kingdom of\nQuendor. He ruled from Largoneth Castle, near the ancient cities of\nGalepath and Mareilon. Our current calendar dates from the first year\nof his reign.\" CR>)\n\t       (<EQUAL? ,PRSO, COAL-MINE-2>\n\t\t<TELL\n\"Duncanthrax was King of Quendor from 659 GUE through 688 GUE. Known\nas the \\\"Bellicose King\\\", he extended Quendor's domain, even conquering\nlands across the Great Sea (thus forming what his great-great-grandson,\nDimwit Flathead, named the Great Underground Empire). Duncanthrax was\nquite eccentric, and his castle, Egreth, was reputed to be located\nin the most dangerous and deadly territory in the known lands.\" CR>)\n\t       (<EQUAL? ,PRSO ,COAL-MINE-3>\n\t\t<TELL\n\"Lord Dimwit Flathead the Excessive, a descendant of King Duncanthrax, ruled\nthe Great Underground Empire from 770 GUE until 789 GUE. His accomplishments,\nachieved by overtaxing the kingdom, include Flood Control Dam #3 and the\nRoyal Museum. Extremely vain, he renamed the Great Sea the Flathead Ocean,\nand preferred to spend his time in the strange lands that lay across it.\" CR>)\n\t       (<EQUAL? ,PRSO ,SLANTED-ROOM>\n\t\t<TELL\n\"The Wizard of Frobozz was once a member of the influential Accardi\nchapter of the Enchanter's Guild. He was exiled by Dimwit Flathead after\naccidentally turning Flathead's castle into a mountain of fudge.\" CR>)\n\t       (<EQUAL? ,PRSO ,OCEAN-NORTH>\n\t\t<TELL\n\"Flood Control Dam #3, a great engineering feat, is the source of the\nFrigid River.\" CR>)\n\t       (<EQUAL? ,PRSO ,OCEAN-SOUTH>\n\t\t<TELL\n\"The article describes the exhibits of the Royal Museum, which included\nthe crown jewels and a sandstone & marble maze.\" CR>) \n\t       (<EQUAL? ,PRSO ,SHAFT-BOTTOM>\n\t\t<TELL\n\"Largoneth was the castle of Entharion the Wise.\" CR>)\n\t       (<EQUAL? ,PRSO ,END-OF-HIGHWAY>\n\t\t<TELL\n\"A short article calls it an ancient city of Quendor.\" CR>)\n\t       (<EQUAL? ,PRSO ,STONE-HUT>\n\t\t<TELL\n\"The entry says \\\"See GREAT UNDERGROUND EMPIRE.\\\"\" CR>)\n\t       (<EQUAL? ,PRSO ,ENTRANCE-HALL>\n\t\t<TELL\n\"Formerly known as Quendor, the Great Underground Empire reached its height\nunder King Duncanthrax, began declining under the excessive rule of Dimwit\nFlathead, and finally fell in 883 GUE. The area is now called the Land of\nFrobozz, after its largest province.\" CR>)\n\t       (<EQUAL? ,PRSO ,CRATER>\n\t\t<TELL\n\"The entry says \\\"See FLATHEAD OCEAN.\\\"\" CR>)\n\t       (<EQUAL? ,PRSO ,EDGE-OF-CHASM>\n\t\t<TELL\n\"The tiniest of articles mentions that Accardi-By-The-Sea is a village\nin the Land of Frobozz.\" CR>)\n\t       (<EQUAL? ,PRSO ,BELBOZ-HIDEOUT>\n\t\t<TELL\n\"Miznia is a province in the southlands, mostly jungle.\" CR>)\n\t       (<EQUAL? ,PRSO ,SOOTY-ROOM>\n\t\t<TELL\n\"The Frigid River, the mightiest in the Great Underground Empire, runs\nfrom Flood Control Dam #3 to Aragain Falls.\" CR>)\n\t       (<EQUAL? ,PRSO ,DIAL-ROOM>\n\t\t<TELL\n\"According to this article, Aragain Falls is the most breathtaking\nand awesome waterfall in the known lands. It lies at the end of the\nFrigid River, and was a favorite honeymoon spot during the 8th and\n9th centuries.\" CR>)\n\t       (<EQUAL? ,PRSO ,BARE-PASSAGE>\n\t\t<TELL\n\"Amathradonis was a terrible giant who terrorized Accardi-By-The-Sea for\nmany centuries. He was finally vanquished by Belboz the Necromancer in\n952 GUE.\" CR>)\n\t       (<EQUAL? ,PRSO ,ELBOW-ROOM>\n\t\t<TELL\n\"Nymphs are tiny, magical beings. They are known for their exuberance, fondness\nfor practical jokes, and willingness to perform small tasks. The leading\ntemporary nymph services agency is the venerable firm Nymph-O-Mania.\" CR>)\n\t       (<EQUAL? ,PRSO ,HALLWAY-2>\n\t\t<TELL\n\"Zork is a classic folk myth about a treasure-hunting adventurer who\nbecame a master of magic. It has been translated into novels, theatricals,\ngiant wall murals ... almost every imaginable medium.\" CR>)\n\t       (<EQUAL? ,PRSO ,TREE-ROOM>\n\t\t<TELL\n\"The encyclopedia describes it as one of the southlands, known for its\nfine artisans, and a popular vacation spot.\" CR>)\n\t       (<EQUAL? ,PRSO ,HOLLOW>\n\t\t<TELL\n\"Antharia an island in the Flathead Ocean, is very prosperous thanks\nto its rich marble quarries.\" CR>)\n\t       (<EQUAL? ,PRSO ,WINDING-TUNNEL>\n\t\t<TELL\n\"A leading manufacturer of magic scrolls and potions.\" CR>)\n\t       (<EQUAL? ,PRSO ,BEND>\n\t\t<TELL\n\"The Kovalli Desert lies beyond the mountains that formed the western\nboundary of ancient Quendor. It is an uncrossable wasteland, believed\nto stretch to the edge of the world.\" CR>)\n\t       (<EQUAL? ,PRSO ,FOREST-EDGE>\n\t\t<TELL\n\"Lonely Mountain is a towering peak to the west of Largoneth Castle.\" CR>)\n\t       (<EQUAL? ,PRSO ,SLIMY-ROOM>\n\t\t<TELL\n\"A long article tells that Krill was a powerful warlock who plotted to\noverthrow the Circle of Enchanters and enslave this corner of the kingdom.\nHe almost achieved his goal, but was vanquished by a young Enchanter.\" CR>)\n\t       (<EQUAL? ,PRSO ,RIVER-BED>\n\t\t<TELL\n\"The article points out that the Servants Guild is not the most respected\nof trade guilds.\" CR>)\n\t       (<EQUAL? ,PRSO ,STAGNANT-POOL>\n\t\t<TELL\n\"It is a corrupt and simplified form of Double Fannucci, popular in taverns,\nand frequently played for stakes.\" CR>)\n\t       (<EQUAL? ,PRSO ,RUINS>\n\t\t<TELL\n\"A complex, thinking man's version of Gabber Tumper, and probably the most\npopular game in the world.\" CR>)\n\t       (<EQUAL? ,PRSO ,TOP-OF-FALLS>\n\t\t<TELL\n\"The capital and biggest city in Frobozz, and the center of the spell\nscroll and infotater industries. The port of Borphee is the busiest on\nthe Flathead Ocean.\" CR>)\n\t       (<EQUAL? ,PRSO ,TURRET>\n\t\t<TELL\n\"The Messengers Guild is among the oldest guilds, and its members are\nincredibly dedicated. Their motto is \\\"Not even really bad precipitation\nor very early nightfall will prevent us from completing our route.\\\"\" CR>)\n\t       (<EQUAL? ,PRSO ,DUNGEON>\n\t\t<TELL\n\"Temporal travel technology, though in existence for many centuries,\nis still considered to be experimental by the magic industry. Several\ngovernment agencies are currently looking into its potential long-term\neffects.\" CR>)\n\t       (<EQUAL? ,PRSO ,HIGHWAY>\n\t\t<TELL\n\"The Enchanter's Guild can date its roots to the reign of Entharion, over\n900 years ago. Chapters are usually located in small villages, since the\nbustle of city life interferes with an Enchanter's work (\\\"Excuse me, I\nlocked my keys in my house. Could you please rezrov my door?\\\"). The most\ninfluential chapter is Accardi Chapter, home of the Circle of Enchanters.\" CR>)\n\t       (<EQUAL? ,PRSO ,STORE>\n\t\t<TELL\n\"Gnomes are a race of short, furry people known for their greed and business\nacumen. They are often employed as toll and fare collectors, bank tellers,\nticket sellers, and presidents of small software firms.\" CR>)\n\t       (<EQUAL? ,PRSO ,SHAFT-TOP>\n\t\t<TELL\n\"Trolls are a race of ferocious, semi-intelligent creatures. They are often\nemployed as security guards and bouncers.\" CR>)\n\t       (<EQUAL? ,PRSO ,YOUR-QUARTERS>\n\t\t<TELL\n\"The leading supplier of designer spell books.\" CR>)\n\t       (<EQUAL? ,PRSO ,FROBAR-QUARTERS>\n\t\t<TELL\n\"The head of one chapter of the Enchanters Guild.\" CR>)\n\t       (<EQUAL? ,PRSO ,HELISTAR-QUARTERS>\n\t\t<TELL\n\"A village in the northlands.\" CR>)\n\t       (<EQUAL? ,PRSO ,SERVANT-QUARTERS>\n\t\t<TELL\n\"According to this article, there are two meanings for Sorcerer. In general,\nit refers to a powerful magic-user. More specifically, the term is used\nby the Enchanters Guild to denote a senior member of the Circle.\" CR>)\n\t       (<EQUAL? ,PRSO ,APPRENTICE-QUARTERS>\n\t\t<TELL\n\"A famous chasm near Accardi-By-The-Sea.\" CR>)\n\t       (<EQUAL? ,PRSO ,OUTSIDE-GLASS-DOOR>\n\t\t<TELL\n\"The most prestigious engineering school in the land.\" CR>)\n\t       (T\n\t\t<TELL \"You look in the encyclopedia but find no entry about\">\n\t        <ARTICLE ,PRSO T>\n\t        <TELL \".\" CR>)>>"
  },
  "V-RUB": {
   "name": "V-RUB",
   "file": "verbs.zil",
   "line": 1371,
   "endLine": 1372,
   "source": "<ROUTINE V-RUB ()\n\t <HACK-HACK \"Fiddling with\">>"
  },
  "V-SAY": {
   "name": "V-SAY",
   "file": "verbs.zil",
   "line": 1374,
   "endLine": 1387,
   "source": "<ROUTINE V-SAY (\"AUX\" V)\n\t <COND (<SET V <FIND-IN ,HERE ,ACTORBIT>>\n\t\t<TELL \"You must address\">\n\t\t<ARTICLE .V T>\n\t\t<TELL \" directly.\" CR>\n\t\t<STOP>)\n\t       (<EQUAL? <GET ,P-LEXV ,P-CONT> ,W?HELLO>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<SETG P-CONT <>>\n\t\t<PERFORM ,V?TELL ,ME>\n\t\t<RTRUE>)>>"
  },
  "V-SEARCH": {
   "name": "V-SEARCH",
   "file": "verbs.zil",
   "line": 1389,
   "endLine": 1393,
   "source": "<ROUTINE V-SEARCH ()\n\t <COND (,FWEEPED\n\t\t<BATTY>)\n\t       (T\n\t\t<TELL \"You find nothing unusual.\" CR>)>>"
  },
  "V-SEND": {
   "name": "V-SEND",
   "file": "verbs.zil",
   "line": 1395,
   "endLine": 1401,
   "source": "<ROUTINE V-SEND ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL \"Why would you send for\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \"?\" CR>)\n\t       (T\n\t\t<TELL <PICK-ONE ,YUKS> CR>)>>"
  },
  "V-SGIVE": {
   "name": "V-SGIVE",
   "file": "verbs.zil",
   "line": 1403,
   "endLine": 1405,
   "source": "<ROUTINE V-SGIVE ()\n\t <PERFORM ,V?GIVE ,PRSI ,PRSO>\n\t <RTRUE>>"
  },
  "V-SHAKE": {
   "name": "V-SHAKE",
   "file": "verbs.zil",
   "line": 1407,
   "endLine": 1413,
   "source": "<ROUTINE V-SHAKE ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL \"Be real.\" CR>)\n\t       (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t\t<TELL \"You can't take it; thus, you can't shake it!\" CR>)\n\t       (T\n\t\t<TELL \"There's no point in shaking that.\" CR>)>>"
  },
  "V-SHARPEN": {
   "name": "V-SHARPEN",
   "file": "verbs.zil",
   "line": 1415,
   "endLine": 1416,
   "source": "<ROUTINE V-SHARPEN ()\n\t <TELL \"You'll never sharpen anything with that!\" CR>>"
  },
  "V-SHOOT": {
   "name": "V-SHOOT",
   "file": "verbs.zil",
   "line": 1418,
   "endLine": 1419,
   "source": "<ROUTINE V-SHOOT ()\n\t <TELL \"Don't bother applying for a job as an armaments expert.\" CR>>"
  },
  "V-SHOW": {
   "name": "V-SHOW",
   "file": "verbs.zil",
   "line": 1421,
   "endLine": 1424,
   "source": "<ROUTINE V-SHOW ()\n\t <TELL \"I doubt\">\n\t <ARTICLE ,PRSI T>\n\t <TELL \" is interested.\" CR>>"
  },
  "V-SIT": {
   "name": "V-SIT",
   "file": "verbs.zil",
   "line": 1426,
   "endLine": 1427,
   "source": "<ROUTINE V-SIT ()\n\t <TELL \"That would be a waste of time.\" CR>>"
  },
  "V-SKIP": {
   "name": "V-SKIP",
   "file": "verbs.zil",
   "line": 1429,
   "endLine": 1430,
   "source": "<ROUTINE V-SKIP ()\n\t <TELL \"Wasn't that fun?\" CR>>"
  },
  "V-SLEEP": {
   "name": "V-SLEEP",
   "file": "verbs.zil",
   "line": 1432,
   "endLine": 1552,
   "source": "<ROUTINE V-SLEEP (\"OPTIONAL\" (TOLD? <>))\n\t <COND (,FLYING\n\t\t<TELL\n\"You'd better settle down before thinking about settling down.\" CR>)\n\t       (<EQUAL? ,AWAKE -1>\n\t\t<TELL\n\"You settle down to sleep, but you really aren't tired, so you\nthrash around for a while and then give up.\" CR>)\n\t       (T\n\t\t<SETG REAL-SPELL-MAX <+ ,REAL-SPELL-MAX 1>>\n\t\t<SETG SPELL-MAX ,REAL-SPELL-MAX>\n\t\t<SETG SPELL-ROOM ,SPELL-MAX>\n\t\t<SETG MOVES <+ ,MOVES 50>>\n\t\t<SETG LAST-SLEPT ,MOVES>\n\t\t<SETG LOAD-ALLOWED ,LOAD-MAX>\n\t\t<SETG FUMBLE-NUMBER 7>\n\t\t<ENABLE <QUEUE I-TIRED 80>>\n\t\t<SETG AWAKE -1>\n\t\t<FORGET-ALL>\n\t\t<WEAR-OFF-SPELLS>\n\t\t<COND (<NOT <FSET? ,TWISTED-FOREST ,TOUCHBIT>>\n\t\t       <TELL\n\"You drift off to sleep and dream of the distant Kovalli Desert. Waves of\nheat from the sand make breathing hard, and the bright sunlight burns\nagainst your eyelids. Suddenly you awake -- the Guild Hall is on fire!\nThrough the thick smoke, you see Belboz standing before you. But no, this\ncould not be Belboz, his face an unrecognizable mask of hatred, his\noutstretched arms dripping with blood.|\n|\nHe who is not Belboz speaks, in a voice filled with malevolence. \\\"So, you\nare the young Enchanter that Belboz thinks so highly of. That senile wizard\nthought you would be the one to rescue him from my clutches. I wonder why I\nbothered to come at all -- an insect like you poses no threat! Still...\\\" He\ngestures and your surroundings change.\" CR CR>\n\t\t       <ROB ,PROTAGONIST>\n\t\t       <DISABLE <INT I-TIRED>>\n\t\t       <DISABLE <INT I-HUNGER>>\n\t\t       <DISABLE <INT I-THIRST>>\n\t\t       <WEAR-OFF-SPELLS>\n\t\t       <GOTO ,CHAMBER-OF-LIVING-DEATH>\n\t\t       <RTRUE>)>\n\t\t<COND (<EQUAL? ,HERE ,RIVER-BED ,STAGNANT-POOL ,TOP-OF-FALLS>\n\t\t       <JIGS-UP\n\"Just as you doze off, a wall of water smashes over you!\">\n\t\t       <RTRUE>)>\n\t\t<COND (<AND <IN-COAL-MINE?>\n\t\t\t    ,VILSTUED>\n\t\t       <JIGS-UP\n\"The vilstu potion wears off as you sleep, and you awaken clawing\nfrantically at your chest.\">\n\t\t       <RTRUE>)>\n\t\t<COND (<IN-COAL-MINE?>\n\t\t       <JIGS-UP\n\"Before you fall asleep you pass out from the bad air.\">\n\t\t       <RTRUE>)>\n\t\t<COND (<EQUAL? ,HERE ,TWISTED-FOREST>\n\t\t       <JIGS-UP\n\"You awake in the middle of the night to find a hellhound gnawing on you.\">\n\t\t       <RTRUE>)>\n\t\t<COND (<EQUAL? ,HERE ,TREE-BRANCH>\n\t\t       <JIGS-UP\n\"Your eyes are barely closed before the snake reaches you.\">\n\t\t       <RTRUE>)>\n\t\t<COND (<EQUAL? ,HERE ,SNAKE-PIT>\n\t\t       <JIGS-UP\n\"You awake to find snakes and beetles crawling all over you.\">\n\t\t       <RTRUE>)>\n\t\t<COND (<EQUAL? ,HERE ,MINE-FIELD>\n\t\t       <JIGS-UP\n\"Unfortunately, you roll over in the middle of the night. Kaboom!!\">\n\t\t       <RTRUE>)>\n\t\t<COND (<EQUAL? ,HERE ,MEADOW>\n\t\t       <JIGS-UP\n\"Locusts pick your bones clean while you sleep.\">\n\t\t       <RTRUE>)>\n\t\t<COND (<EQUAL? ,HERE ,DRAWBRIDGE>\n\t\t       <TELL\n\"You are rudely awakened by the collapse of the rotting drawbridge. \">\n\t\t       <DO-WALK ,P?DOWN>\n\t\t       <RTRUE>)>\n\t\t<COND (<EQUAL? ,HERE ,RIVER-BANK>\n\t\t       <JIGS-UP\n\"During the night the river bank collapses beneath you, throwing you\ninto the turbulent waters.\">\n\t\t       <RTRUE>)>\n\t\t<COND (<EQUAL? ,HERE ,HOLLOW>\n\t\t       <JIGS-UP\n\"You have a nightmare about a ferocious dorn beast. When it begins gnawing\non you, you realize that it isn't a dream at all.\">\n\t\t       <RTRUE>)>\n\t\t<COND (<EQUAL? ,HERE ,LAGOON ,LAGOON-FLOOR>\n\t\t       <JIGS-UP\n\"Amazing how difficult it is to sleep while swimming (and vice versa).\">\n\t\t       <RTRUE>)>\n\t\t<COND (<EQUAL? ,HERE ,BELBOZ-HIDEOUT>\n\t\t       <TELL\n\"An unknown amount of time later you awake and look around. \">\n\t\t       <I-BELBOZ-AWAKES>\n\t\t       <RTRUE>)>\n\t\t<COND (<AND <IN? ,PROTAGONIST ,BED>\n\t\t\t    <NOT .TOLD?>>\n\t\t       <TELL\n\"You're not all that tired, but the bed is very comfortable.\" CR>)\n\t\t      (,RIDE-IN-PROGRESS\n\t\t       <END-RIDE>\n\t\t       <TELL\n\"Hard to believe that you could fall asleep during such an exciting\nride, but you are pretty tired.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"Ah, sleep! It's been a long day and rest will do you good. You spread\nyour cloak on the floor and drift off, renewing your powers and\nrefreshing your mind. Time passes as you snore blissfully.\" CR>)>\n\t\t<CRLF>\n\t\t<MOVE ,PROTAGONIST ,HERE>\n\t        <COND (<PROB 50>\n\t\t       <TELL\n\"You sleep uneventfully, awake refreshed, and rise to your feet.\" CR>)\n\t              (T\n\t\t       <TELL <PICK-ONE ,DREAMS>>\n\t\t       <TELL \" You awaken and stand.\" CR>)>)>>"
  },
  "V-SMELL": {
   "name": "V-SMELL",
   "file": "verbs.zil",
   "line": 1554,
   "endLine": 1557,
   "source": "<ROUTINE V-SMELL ()\n\t <TELL \"It smells just like\">\n\t <ARTICLE ,PRSO>\n\t <TELL \".\" CR>>"
  },
  "V-SPAY": {
   "name": "V-SPAY",
   "file": "verbs.zil",
   "line": 1559,
   "endLine": 1561,
   "source": "<ROUTINE V-SPAY ()\n\t <PERFORM ,V?PAY ,PRSI ,PRSO>\n\t <RTRUE>>"
  },
  "V-SPIN": {
   "name": "V-SPIN",
   "file": "verbs.zil",
   "line": 1563,
   "endLine": 1564,
   "source": "<ROUTINE V-SPIN ()\n\t <TELL \"You can't spin that!\" CR>>"
  },
  "V-SPRAY": {
   "name": "V-SPRAY",
   "file": "verbs.zil",
   "line": 1566,
   "endLine": 1576,
   "source": "<ROUTINE V-SPRAY ()\n\t <COND (<NOT ,PRSI>\n\t\t<COND (<EQUAL? ,PRSO ,GRUE-REPELLENT>\n\t\t       <TELL \"Specify who or what you want to spray.\" CR>)\n\t\t      (<HELD? ,GRUE-REPELLENT>\n\t\t       <PERFORM ,V?SPRAY ,GRUE-REPELLENT ,PRSO>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"You don't have anything that sprays!\" CR>)>)\n\t       (T\n                <V-SQUEEZE>)>>"
  },
  "V-SQUEEZE": {
   "name": "V-SQUEEZE",
   "file": "verbs.zil",
   "line": 1578,
   "endLine": 1579,
   "source": "<ROUTINE V-SQUEEZE ()\n\t <TELL \"How singularly useless.\" CR>>"
  },
  "PRE-SSHOW": {
   "name": "PRE-SSHOW",
   "file": "verbs.zil",
   "line": 1581,
   "endLine": 1583,
   "source": "<ROUTINE PRE-SSHOW ()\n\t <PERFORM ,V?SHOW ,PRSI ,PRSO>\n\t <RTRUE>>"
  },
  "V-SSHOW": {
   "name": "V-SSHOW",
   "file": "verbs.zil",
   "line": 1585,
   "endLine": 1586,
   "source": "<ROUTINE V-SSHOW ()\n\t <V-SGIVE>>"
  },
  "V-SSPRAY": {
   "name": "V-SSPRAY",
   "file": "verbs.zil",
   "line": 1588,
   "endLine": 1590,
   "source": "<ROUTINE V-SSPRAY ()\n\t <PERFORM ,V?SPRAY ,PRSI ,PRSO>\n\t <RTRUE>>"
  },
  "V-STAND": {
   "name": "V-STAND",
   "file": "verbs.zil",
   "line": 1592,
   "endLine": 1599,
   "source": "<ROUTINE V-STAND ()\n\t <COND (<FSET? <LOC ,PROTAGONIST> ,VEHBIT>\n\t\t<PERFORM ,V?DISEMBARK <LOC ,PROTAGONIST>>\n\t\t<RTRUE>)\n\t       (,FLYING\n\t\t<WHILE-FLYING>)\n\t       (T\n\t\t<TELL \"You are already standing.\" CR>)>>"
  },
  "V-STAND-ON": {
   "name": "V-STAND-ON",
   "file": "verbs.zil",
   "line": 1601,
   "endLine": 1602,
   "source": "<ROUTINE V-STAND-ON ()\n\t <V-SIT>>"
  },
  "V-STRIKE": {
   "name": "V-STRIKE",
   "file": "verbs.zil",
   "line": 1604,
   "endLine": 1606,
   "source": "<ROUTINE V-STRIKE ()\n\t <PERFORM ,V?ATTACK ,PRSO>\n\t <RTRUE>>"
  },
  "V-SWING": {
   "name": "V-SWING",
   "file": "verbs.zil",
   "line": 1608,
   "endLine": 1613,
   "source": "<ROUTINE V-SWING ()\n\t <COND (<NOT ,PRSI>\n\t\t<TELL \"Whoosh!\" CR>)\n\t       (T\n\t\t<PERFORM ,V?ATTACK ,PRSI ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-SWIM": {
   "name": "V-SWIM",
   "file": "verbs.zil",
   "line": 1615,
   "endLine": 1635,
   "source": "<ROUTINE V-SWIM ()\n\t <COND (,PRSO\n\t\t<PERFORM ,V?THROUGH ,PRSO>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,HERE ,LAGOON ,LAGOON-FLOOR>\n\t\t<LOOK-AROUND-YOU>)\n\t       (<EQUAL? ,HERE ,COVE ,OCEAN-NORTH ,OCEAN-SOUTH>\n\t\t<PERFORM ,V?THROUGH ,LAGOON-OBJECT>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,HERE ,RIVER-BANK>\n\t\t<DO-WALK ,P?DOWN>)\n\t       (<EQUAL? ,HERE ,MOUTH-OF-RIVER>\n\t\t<DO-WALK ,P?EAST>)\n\t       (<EQUAL? ,HERE ,HIDDEN-CAVE>\n\t\t<DO-WALK ,P?OUT>)\n\t       (<EQUAL? ,HERE ,DRAWBRIDGE>\n\t\t<DO-WALK ,P?DOWN>)\n\t       (<EQUAL? ,HERE ,STAGNANT-POOL>\n\t\t<DO-WALK ,P?NW>)\n\t       (T\n\t\t<TELL \"There's nothing to swim in!\" CR>)>>"
  },
  "PRE-TAKE": {
   "name": "PRE-TAKE",
   "file": "verbs.zil",
   "line": 1637,
   "endLine": 1671,
   "source": "<ROUTINE PRE-TAKE (\"AUX\" (L <LOC ,PRSO>))\n\t <COND (,FWEEPED\n\t\t<BATTY>)\n\t       (<IN? ,PRSO ,PROTAGONIST>\n\t\t<COND (<FSET? ,PRSO ,WEARBIT>\n\t\t       <TELL \"You are already wearing it.\" CR>)\n\t\t      (T\n\t\t       <TELL \"You already have it.\" CR>)>)\n\t       (<AND <FSET? ,PRSO ,SPELLBIT>\n\t\t     .L\n\t\t     <FSET? .L ,SCROLLBIT>\n\t\t     <ACCESSIBLE? .L>>\n\t\t<PERFORM ,V?TAKE .L>\n\t\t<RTRUE>)\n\t       (<AND .L\n\t\t     <FSET? .L ,CONTBIT>\n\t\t     <NOT <FSET? .L ,OPENBIT>>>\n\t\t<TELL \"You can't reach that.\" CR>\n\t\t<RTRUE>)\n\t       (,PRSI\n\t\t<COND (<EQUAL? ,PRSO ,ME>\n\t\t       <PERFORM ,V?DROP ,PRSI>\n\t\t       <RTRUE>)\n\t\t      (<AND <NOT <EQUAL? ,PRSI .L>>\n\t\t\t    <NOT <EQUAL? ,PRSI ,BELBOZ-DESK>>>\n\t\t       <TELL \"But\">\n\t\t       <ARTICLE ,PRSO T>\n\t\t       <TELL \" isn't in\">\n\t\t       <ARTICLE ,PRSI T>\n\t\t       <TELL \".\" CR>)\n\t\t      (T\n\t\t       <SETG PRSI <>>\n\t\t       <RFALSE>)>)\n\t       (<EQUAL? ,PRSO <LOC ,PROTAGONIST>>\n\t\t<TELL \"You are in it!\" CR>)>>"
  },
  "V-TAKE": {
   "name": "V-TAKE",
   "file": "verbs.zil",
   "line": 1673,
   "endLine": 1688,
   "source": "<ROUTINE V-TAKE ()\n\t <COND (<EQUAL? <ITAKE> T>\n\t\t<COND (<FSET? ,PRSO ,WEARBIT>\n\t\t       <TELL \"You are now wearing\">\n\t\t       <ARTICLE ,PRSO T>\n\t\t       <TELL \".\" CR>)\n\t\t      (,FLYING\n\t\t       <TELL \"You swoop low and pick it up.\" CR>)\n\t\t      (T\n\t\t       <COND (<AND <EQUAL? ,PRSO ,ROPE>\n\t\t\t\t   <OR ,ROPE-PLACED ,ROPE-IN-LOWER-CHUTE>>\n\t\t\t      <SETG ROPE-PLACED <>>\n\t\t\t      <SETG ROPE-IN-LOWER-CHUTE <>>\n\t\t\t      <FCLEAR ,BEAM ,TRYTAKEBIT>\n\t\t\t      <FCLEAR ,ROPE ,TRYTAKEBIT>)>\n\t\t       <TELL \"Taken.\" CR>)>)>>"
  },
  "V-TAKE-OFF": {
   "name": "V-TAKE-OFF",
   "file": "verbs.zil",
   "line": 1690,
   "endLine": 1699,
   "source": "<ROUTINE V-TAKE-OFF ()\n\t <COND (<EQUAL? ,PRSO <LOC ,PROTAGONIST>> ;\"TAKE OFF also = GET OFF\"\n\t\t<PERFORM ,V?DISEMBARK ,PRSO>\n\t\t<RTRUE>)\n\t       (<AND <HELD? ,PRSO>\n\t\t     <FSET? ,PRSO ,WEARBIT>>\n\t\t<PERFORM ,V?DROP ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"You're not wearing that!\" CR>)>>"
  },
  "V-TELL": {
   "name": "V-TELL",
   "file": "verbs.zil",
   "line": 1701,
   "endLine": 1724,
   "source": "<ROUTINE V-TELL ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<COND (,P-CONT\n\t\t       <SETG WINNER ,PRSO>\n\t\t       <SETG HERE <LOC ,WINNER>>)\n\t\t      (<AND <EQUAL? ,PRSO ,GNOME>\n\t\t\t    ,GNOME-SLEEPING>\n\t\t       <POOR-LISTENERS>)\n\t\t      (T\n\t\t       <TELL \"Hmmm...\">\n\t\t       <ARTICLE ,PRSO T>\n\t\t       <TELL\n\" looks at you expectantly, as though he thought\nyou were about to talk.\" CR>)>)\n\t       (<EQUAL? ,PRSO ,PARROT>\n\t\t<TELL\n\"Although the parrot is a marvelous imitator of human speech, it is\nincapable of understanding or initiating any.\" CR>\n\t\t<STOP>)\n\t       (T\n\t\t<TELL \"You can't talk to\">\n\t\t<ARTICLE ,PRSO>\n\t\t<TELL \"!\" CR>\n\t\t<STOP>)>>"
  },
  "V-THANK": {
   "name": "V-THANK",
   "file": "verbs.zil",
   "line": 1726,
   "endLine": 1733,
   "source": "<ROUTINE V-THANK ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL \"You do so, but\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \" seems less than overjoyed.\" CR>)\n\t       (T\n\t\t<TELL\n\"The Circle will revoke your certificate if you keep this up.\" CR>)>>"
  },
  "V-THROUGH": {
   "name": "V-THROUGH",
   "file": "verbs.zil",
   "line": 1735,
   "endLine": 1749,
   "source": "<ROUTINE V-THROUGH ()\n\t<COND (<FSET? ,PRSO ,DOORBIT>\n\t       <DO-WALK <OTHER-SIDE ,PRSO>>\n\t       <RTRUE>)\n\t      (<FSET? ,PRSO ,VEHBIT>\n\t       <PERFORM ,V?BOARD ,PRSO>\n\t       <RTRUE>)\n\t      (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t       <TELL \"You hit your head against\">\n\t       <ARTICLE ,PRSO T>\n\t       <TELL \" as you attempt this feat.\" CR>)\n\t      (<IN? ,PRSO ,PROTAGONIST>\n\t       <TELL \"That would involve quite a contortion!\" CR>)\n\t      (T\n\t       <TELL <PICK-ONE ,YUKS> CR>)>>"
  },
  "V-THROW": {
   "name": "V-THROW",
   "file": "verbs.zil",
   "line": 1751,
   "endLine": 1759,
   "source": "<ROUTINE V-THROW ()\n\t <COND (<IDROP>\n\t\t<COND (<AND <EQUAL? ,HERE ,COAL-BIN-ROOM ,DIAL-ROOM>\n\t\t\t    <L? <GETP ,PRSO ,P?SIZE> 20>>\n\t\t       <BURIED-IN-COAL \"throw\">)\n\t\t      (T\n\t\t       <COND (<EQUAL? ,HERE ,HAUNTED-HOUSE>\n\t\t              <MOVE ,PRSO ,DIAL>)>\n\t\t       <TELL \"Thrown.\" CR>)>)>>"
  },
  "V-THROW-OFF": {
   "name": "V-THROW-OFF",
   "file": "verbs.zil",
   "line": 1761,
   "endLine": 1762,
   "source": "<ROUTINE V-THROW-OFF ()\n\t <TELL \"You can't throw anything off that!\" CR>>"
  },
  "V-TIE": {
   "name": "V-TIE",
   "file": "verbs.zil",
   "line": 1764,
   "endLine": 1767,
   "source": "<ROUTINE V-TIE ()\n\t <TELL \"You can't tie\">\n\t <ARTICLE ,PRSO T>\n\t <TELL \" to that.\" CR>>"
  },
  "V-TIE-UP": {
   "name": "V-TIE-UP",
   "file": "verbs.zil",
   "line": 1769,
   "endLine": 1770,
   "source": "<ROUTINE V-TIE-UP ()\n\t <TELL \"You could certainly never tie it with that!\" CR>>"
  },
  "V-TIME": {
   "name": "V-TIME",
   "file": "verbs.zil",
   "line": 1772,
   "endLine": 1787,
   "source": "<ROUTINE V-TIME (\"AUX\" X)\n\t <SET X <- ,MOVES ,LAST-SLEPT>>\n\t <TELL \"It's \">\n\t <COND (<L? .X 15>\n\t\t<TELL \"early morning\">)\n\t       (<L? .X 30>\n\t\t<TELL \"mid-morning\">)\n\t       (<L? .X 50>\n\t\t<TELL \"mid-day\">)\n\t       (<L? .X 65>\n\t\t<TELL \"late afternoon\">)\n\t       (<L? .X 80>\n\t\t<TELL \"early evening\">)\n\t       (T\n\t\t<TELL \"late evening\">)>\n\t <TELL \".\" CR>>"
  },
  "V-TORTURE": {
   "name": "V-TORTURE",
   "file": "verbs.zil",
   "line": 1789,
   "endLine": 1797,
   "source": "<ROUTINE V-TORTURE ()\n\t<COND (<NOT <EQUAL? ,HERE ,TORTURE-CHAMBER>>\n\t       <TELL \"There are no torture devices here!\" CR>)\n\t      (<EQUAL? ,PRSO ,ME>\n\t       <JIGS-UP \"Ooops! You overdid it a little.\">)\n\t      (T\n\t       <TELL \"Despite your best effort,\">\n\t       <ARTICLE ,PRSO T>\n\t       <TELL \" fails to divulge any useful information.\" CR>)>>"
  },
  "V-TURN": {
   "name": "V-TURN",
   "file": "verbs.zil",
   "line": 1799,
   "endLine": 1800,
   "source": "<ROUTINE V-TURN ()\n\t <TELL \"This has no effect.\" CR>>"
  },
  "V-UNLOCK": {
   "name": "V-UNLOCK",
   "file": "verbs.zil",
   "line": 1802,
   "endLine": 1803,
   "source": "<ROUTINE V-UNLOCK ()\n\t <V-LOCK>>"
  },
  "V-UNTIE": {
   "name": "V-UNTIE",
   "file": "verbs.zil",
   "line": 1805,
   "endLine": 1806,
   "source": "<ROUTINE V-UNTIE ()\n\t <TELL \"This cannot be tied, so it cannot be untied!\" CR>>"
  },
  "V-WALK": {
   "name": "V-WALK",
   "file": "verbs.zil",
   "line": 1808,
   "endLine": 1855,
   "source": "<ROUTINE V-WALK (\"AUX\" PT PTS STR OBJ RM)\n\t ;<COND (<AND ,TRY-FLY <PRE-FLY>>\n\t\t<RTRUE>)>\n\t <COND (<NOT ,P-WALK-DIR>\n\t\t<PERFORM ,V?WALK-TO ,PRSO>\n\t\t<RTRUE>)\n\t       (<SET PT <GETPT ,HERE ,PRSO>>\n\t\t<COND (<EQUAL? <SET PTS <PTSIZE .PT>> ,UEXIT>\n\t\t       <GOTO <GETB .PT ,REXIT>>)\n\t\t      (<EQUAL? .PTS ,NEXIT>\n\t\t       <TELL <GET .PT ,NEXITSTR> CR>\n\t\t       <RFATAL>)\n\t\t      (<EQUAL? .PTS ,FEXIT>\n\t\t       <COND (<SET RM <APPLY <GET .PT ,FEXITFCN>>>\n\t\t\t      <GOTO .RM>)\n\t\t\t     (T\n\t\t\t      <COND (<OR <EQUAL? ,HERE ,GLASS-MAZE>\n\t\t\t\t\t <EQUAL? ,HERE ,PARK-ENTRANCE>>\n\t\t\t\t     <RFALSE>)\n\t\t\t\t    (T\n\t\t\t\t     <RFATAL>)>)>)\n\t\t      (<EQUAL? .PTS ,CEXIT>\n\t\t       <COND (<VALUE <GETB .PT ,CEXITFLAG>>\n\t\t\t      <GOTO <GETB .PT ,REXIT>>)\n\t\t\t     (<SET STR <GET .PT ,CEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <CANT-GO>\n\t\t\t      <RFATAL>)>)\n\t\t      (<EQUAL? .PTS ,DEXIT>\n\t\t       <COND (<FSET? <SET OBJ <GETB .PT ,DEXITOBJ>> ,OPENBIT>\n\t\t\t      <GOTO <GETB .PT ,REXIT>>)\n\t\t\t     (<SET STR <GET .PT ,DEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <THIS-IS-IT .OBJ>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <TELL \"The \" D .OBJ \" is closed.\" CR>\n\t\t\t      <THIS-IS-IT .OBJ>\n\t\t\t      <RFATAL>)>)>)\n\t       (<AND ,FLYING\n\t\t     <EQUAL? ,PRSO ,P?UP>>\n\t\t     <TELL \"You're already flying as high as you can.\" CR>\n\t\t     <RFATAL>)\n\t       (T\n\t\t<CANT-GO>\n\t\t<RFATAL>)>>"
  },
  "V-WALK-AROUND": {
   "name": "V-WALK-AROUND",
   "file": "verbs.zil",
   "line": 1866,
   "endLine": 1867,
   "source": "<ROUTINE V-WALK-AROUND ()\n\t <TELL \"Please use compass directions for movement.\" CR>>"
  },
  "V-WALK-TO": {
   "name": "V-WALK-TO",
   "file": "verbs.zil",
   "line": 1869,
   "endLine": 1874,
   "source": "<ROUTINE V-WALK-TO ()\n\t <COND (<OR <IN? ,PRSO ,HERE>\n\t\t    <GLOBAL-IN? ,PRSO ,HERE>>\n\t\t<TELL \"It's here!\" CR>)\n\t       (T\n\t\t<V-WALK-AROUND>)>>"
  },
  "V-WAIT": {
   "name": "V-WAIT",
   "file": "verbs.zil",
   "line": 1876,
   "endLine": 1883,
   "source": "<ROUTINE V-WAIT (\"OPTIONAL\" (NUM 3))\n\t <TELL \"Time passes...\" CR>\n\t <REPEAT ()\n\t\t <COND (<L? <SET NUM <- .NUM 1>> 0>\n\t\t\t<RETURN>)\n\t\t       (<CLOCKER>\n\t\t\t<RETURN>)>>\n\t <SETG CLOCK-WAIT T>>"
  },
  "V-WAIT-FOR": {
   "name": "V-WAIT-FOR",
   "file": "verbs.zil",
   "line": 1885,
   "endLine": 1889,
   "source": "<ROUTINE V-WAIT-FOR ()\n\t <COND (<EQUAL? <LOC ,PRSO> ,HERE ,PROTAGONIST>\n\t\t<TELL \"It's already here!\" CR>)\n\t       (T\n\t\t<TELL \"You will probably be waiting quite a while.\" CR>)>>"
  },
  "V-WAVE": {
   "name": "V-WAVE",
   "file": "verbs.zil",
   "line": 1891,
   "endLine": 1892,
   "source": "<ROUTINE V-WAVE ()\n\t <HACK-HACK \"Waving\">>"
  },
  "V-WAVE-AT": {
   "name": "V-WAVE-AT",
   "file": "verbs.zil",
   "line": 1894,
   "endLine": 1897,
   "source": "<ROUTINE V-WAVE-AT ()\n\t <TELL \"Despite your friendly nature,\">\n\t <ARTICLE ,PRSO T>\n\t <TELL \" isn't likely to respond.\" CR>>"
  },
  "V-WAX": {
   "name": "V-WAX",
   "file": "verbs.zil",
   "line": 1899,
   "endLine": 1911,
   "source": "<ROUTINE V-WAX ()\n\t <COND (<AND <NOT ,PRSI>\n\t\t     <VISIBLE? ,WAXER>>\n\t\t<SETG PRSI ,WAXER>)\n\t       (<NOT ,PRSI>\n\t\t<TELL \"With what?\" CR>\n\t\t<RTRUE>)>\n\t <COND (<AND <EQUAL? ,PRSI ,WAXER>\n\t\t     <EQUAL? ,PRSO ,GROUND>>\n\t\t<PERFORM ,V?LAMP-ON ,WAXER>\n\t\t<RTRUE>)\n\t       (T\n\t\t<WITH???>)>>"
  },
  "V-WEAR": {
   "name": "V-WEAR",
   "file": "verbs.zil",
   "line": 1913,
   "endLine": 1920,
   "source": "<ROUTINE V-WEAR ()\n\t <COND (<NOT <FSET? ,PRSO ,WEARBIT>>\n\t\t<TELL \"You can't wear\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \".\" CR>)\n\t       (T \n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-WHAT": {
   "name": "V-WHAT",
   "file": "verbs.zil",
   "line": 1922,
   "endLine": 1923,
   "source": "<ROUTINE V-WHAT ()\n\t <TELL \"Try reading an encyclopedia.\" CR>>"
  },
  "V-WHERE": {
   "name": "V-WHERE",
   "file": "verbs.zil",
   "line": 1925,
   "endLine": 1929,
   "source": "<ROUTINE V-WHERE ()\n\t <COND (<EQUAL? ,PRSO ,RIVER-BED>\n\t\t<TELL \"Out doing their daily errands, probably.\" CR>)\n\t       (T\n\t\t<V-FIND T>)>>"
  },
  "V-WHO": {
   "name": "V-WHO",
   "file": "verbs.zil",
   "line": 1931,
   "endLine": 1941,
   "source": "<ROUTINE V-WHO ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<PERFORM ,V?WHAT ,PRSO>\n\t\t<RTRUE>)\n\t       (<OR <EQUAL? ,PRSO ,COAL-MINE-1 ,COAL-MINE-2 ,COAL-MINE-3>\n\t\t    <EQUAL? ,PRSO ,SLANTED-ROOM ,BARE-PASSAGE ,SLIMY-ROOM>\n\t\t    <EQUAL? ,PRSO ,RIVER-BED ,TURRET ,FROBAR-QUARTERS>>\n\t\t<PERFORM ,V?WHAT ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"That's not a person!\" CR>)>>"
  },
  "V-YELL": {
   "name": "V-YELL",
   "file": "verbs.zil",
   "line": 1943,
   "endLine": 1950,
   "source": "<ROUTINE V-YELL ()\n\t <TELL \"Aarrrrrgggggggghhhhhhhhhhh!\" CR>\n\t <COND (<AND <EQUAL? ,HERE ,TOLL-GATE>\n\t\t     ,GNOME-SLEEPING\n\t\t     <OR ,LIT ,BLORTED>>\n\t\t<CRLF>\n\t\t<PERFORM ,V?ALARM ,GNOME>\n\t\t<RTRUE>)>>"
  },
  "PRE-CAST": {
   "name": "PRE-CAST",
   "file": "verbs.zil",
   "line": 1954,
   "endLine": 2020,
   "source": "<ROUTINE PRE-CAST (\"AUX\" SPELL SCROLL)\n\t <COND (,PERFORMING-SPELL\n\t        <SETG PERFORMING-SPELL <>>\n\t\t<RFALSE>)>\n\t <SET SPELL <COND (<VERB? GNUSTO> ,GNUSTO-SPELL)\n\t\t\t  (<VERB? FROTZ> ,FROTZ-SPELL)\n\t\t\t  (<VERB? REZROV> ,REZROV-SPELL)\n\t\t\t  (<VERB? IZYUK> ,IZYUK-SPELL)\n\t\t\t  (<VERB? AIMFIZ> ,AIMFIZ-SPELL)\n\t\t\t  (<VERB? FWEEP> ,FWEEP-SPELL)\n\t\t\t  (<VERB? SWANZO> ,SWANZO-SPELL)\n\t\t\t  (<VERB? GOLMAC> ,GOLMAC-SPELL)\n\t\t\t  (<VERB? VARDIK> ,VARDIK-SPELL)\n\t\t\t  (<VERB? PULVER> ,PULVER-SPELL)\n\t\t\t  (<VERB? MEEF> ,MEEF-SPELL)\n\t\t\t  (<VERB? VEZZA> ,VEZZA-SPELL)\n\t\t\t  (<VERB? GASPAR> ,GASPAR-SPELL)\n\t\t\t  (<VERB? YOMIN> ,YOMIN-SPELL)\n\t\t\t  (<VERB? YONK> ,YONK-SPELL)\n\t\t\t  (<VERB? MALYON> ,MALYON-SPELL)>>\n\t <COND (<OR <EQUAL? .SPELL ,PRSO>\n\t\t    <AND <EQUAL? <LOC .SPELL> ,PRSO>\n\t\t\t <NOT <EQUAL? <LOC .SPELL> ,SPELL-BOOK>>>>\n\t\t<TELL\n\"As you must remember from Thaumaturgy 101, you cannot cast a spell upon\nitself, or upon the scroll it is written on.\" CR>\n\t\t<RTRUE>)\n\t       (<AND <FSET? <LOC .SPELL> ,MUNGBIT>\n\t\t     <NOT <ALWAYS-MEMORIZED .SPELL>>\n\t\t     <EQUAL? <GETP .SPELL ,P?COUNT> 0>>\n\t\t<TELL \"The spell is no longer readable.\" CR>\n\t\t<RTRUE>)\n\t       (<FSET? <LOC .SPELL> ,SCROLLBIT>\n\t\t<SET SCROLL <LOC .SPELL>>\n\t\t<COND (<IN? .SCROLL ,PROTAGONIST>\n\t\t       <COND (<AND <EQUAL? .SPELL ,YONK-SPELL>\n\t\t\t\t   <NOT <VISIBLE? ,PRSO>>>\n\t\t\t      <RFALSE>)>\n\t\t       <MOVE .SCROLL ,DIAL> ;\"in case moby-search wants it\"\n\t\t       <TELL\n\"As you cast the spell, the \" D .SCROLL \" vanishes!\" CR CR>\n\t\t       <PUTP .SPELL ,P?COUNT 1>)\n\t\t      (<OR <FSET? .SPELL ,TOUCHBIT>\n\t\t\t   <IN? .SCROLL ,HERE>>\n\t\t       <TELL\n\"You don't have the \" D .SPELL \" memorized, nor do you have\nthe scroll on which it is written.\" CR>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL\n\"The \" D .SPELL \" is not committed to memory, and you haven't seen any scroll\non which it is written.\" CR>\n\t\t       <RTRUE>)>)>\n\t <COND (,FWEEPED\n\t\t<TELL\n\"When you attempt to incant the \" D .SPELL\n\", all that comes out is a high-pitched squeak!\" CR>)\n\t       (<ALWAYS-MEMORIZED .SPELL>\n\t\t<RFALSE>)\n\t       (<EQUAL? <GETP .SPELL ,P?COUNT> 0>\n\t\t<THIS-IS-IT .SPELL>\n\t\t<TELL\n\"You don't have the \" D .SPELL \" committed to memory!\" CR>)\n\t       (T\n\t\t<PUTP .SPELL ,P?COUNT <- <GETP .SPELL ,P?COUNT> 1>>\n\t\t<SETG SPELL-ROOM <+ ,SPELL-ROOM 1>>\n\t\t<RFALSE>)>>"
  },
  "V-CAST": {
   "name": "V-CAST",
   "file": "verbs.zil",
   "line": 2024,
   "endLine": 2056,
   "source": "<ROUTINE V-CAST (\"AUX\" VRB)\n\t <COND (<NOT <FSET? ,PRSO ,SPELLBIT>>\n\t\t<TELL\n\"You might as well be casting with a fly rod, as to try to cast\">\n\t\t<ARTICLE ,PRSO>\n\t\t<TELL \".\" CR>)\n\t       (T\n\t\t<SET VRB\n\t\t     <COND (<EQUAL? ,PRSO ,GNUSTO-SPELL> ,V?GNUSTO)\n\t\t\t   (<EQUAL? ,PRSO ,FROTZ-SPELL> ,V?FROTZ)\n\t\t\t   (<EQUAL? ,PRSO ,REZROV-SPELL> ,V?REZROV)\n\t\t\t   (<EQUAL? ,PRSO ,IZYUK-SPELL> ,V?IZYUK)\n\t\t\t   (<EQUAL? ,PRSO ,AIMFIZ-SPELL> ,V?AIMFIZ)\n\t\t\t   (<EQUAL? ,PRSO ,FWEEP-SPELL> ,V?FWEEP)\n\t\t\t   (<EQUAL? ,PRSO ,SWANZO-SPELL> ,V?SWANZO)\n\t\t\t   (<EQUAL? ,PRSO ,GOLMAC-SPELL> ,V?GOLMAC)\n\t\t\t   (<EQUAL? ,PRSO ,VARDIK-SPELL> ,V?VARDIK)\n\t\t\t   (<EQUAL? ,PRSO ,PULVER-SPELL> ,V?PULVER)\n\t\t\t   (<EQUAL? ,PRSO ,MEEF-SPELL> ,V?MEEF)\n\t\t\t   (<EQUAL? ,PRSO ,VEZZA-SPELL> ,V?VEZZA)\n\t\t\t   (<EQUAL? ,PRSO ,GASPAR-SPELL> ,V?GASPAR)\n\t\t\t   (<EQUAL? ,PRSO ,YOMIN-SPELL> ,V?YOMIN)\n\t\t\t   (<EQUAL? ,PRSO ,YONK-SPELL> ,V?YONK)\n\t\t\t   (<EQUAL? ,PRSO ,MALYON-SPELL> ,V?MALYON)\n\t\t\t   (T\n\t\t\t    <TELL \"Bug #90\" CR>\n\t\t\t    <RTRUE>)>>\n\t\t<COND (<NOT ,PRSI>\n\t\t       <TELL\n\"You might as well be casting it away as not cast it on something.\" CR>)\n\t\t      (T\n\t\t       <PERFORM .VRB ,PRSI>)>\n\t\t<RTRUE>)>>"
  },
  "V-SPELLS": {
   "name": "V-SPELLS",
   "file": "verbs.zil",
   "line": 2077,
   "endLine": 2097,
   "source": "<ROUTINE V-SPELLS (\"AUX\" (CNT <GET ,ALL-SPELLS 0>) S (ANY <>) (OS <>) TMP)\n\t <TELL\n\"The gnusto, rezrov, and frotz spells are yours forever. Other than that,\nyou have \">\n\t <REPEAT ()\n\t\t <COND (<EQUAL? .CNT 0>\n\t\t\t<COND (.OS\n\t\t\t       <SPELL-PRINT .OS .ANY T>\n\t\t\t       <SET ANY T>)>\n\t\t\t<COND (<NOT .ANY>\n\t\t\t       <TELL \"no spells memorized.\">)\n\t\t\t      (T\n\t\t\t       <TELL \" committed to memory.\">)>\n\t\t\t<CRLF>\n\t\t\t<RTRUE>)>\n\t\t <COND (<SET TMP <SPELL-TIMES <GET ,ALL-SPELLS .CNT>>>\n\t\t\t<COND (.OS\n\t\t\t       <SPELL-PRINT .OS .ANY>\n\t\t\t       <SET ANY T>)>\n\t\t\t<SET OS .TMP>)>\n\t\t <SET CNT <- .CNT 1>>>>"
  },
  "SPELL-PRINT": {
   "name": "SPELL-PRINT",
   "file": "verbs.zil",
   "line": 2099,
   "endLine": 2110,
   "source": "<ROUTINE SPELL-PRINT (S ANY \"OPTIONAL\" (PAND? <>) \"AUX\" X)\n\t <COND (.ANY\n\t\t<COND (.PAND?\n\t\t       <TELL \" and \">)\n\t\t      (T\n\t\t       <TELL \", \">)>)>\n\t <TELL \"the \" D .S \" \">\n\t <SET X <- <GETP .S ,P?COUNT> 1>>\n\t <COND (<G? .X 4>\n\t\t<SET X 4>)> ;\"prevents ,COUNTERS table overflow\"\n\t <TELL <GET ,COUNTERS .X>>\n\t .S>"
  },
  "SPELL-TIMES": {
   "name": "SPELL-TIMES",
   "file": "verbs.zil",
   "line": 2112,
   "endLine": 2120,
   "source": "<ROUTINE SPELL-TIMES (S)\n\t <COND (<G? <GETP .S ,P?COUNT> 0>\n\t\t<COND (<IN? .S ,SPELL-BOOK> .S)\n\t\t      (<AND <==? .S ,AIMFIZ-SPELL>\n\t\t\t    <NOT <IN? ,AIMFIZ-SPELL ,AIMFIZ-SCROLL>>>\n\t\t       .S)\n\t\t      (<AND <==? .S ,YONK-SPELL>\n\t\t\t    <NOT <IN? ,YONK-SPELL ,YONK-SCROLL>>>\n\t\t       .S)>)>>"
  },
  "V-LEARN": {
   "name": "V-LEARN",
   "file": "verbs.zil",
   "line": 2129,
   "endLine": 2130,
   "source": "<ROUTINE V-LEARN ()\n\t <TELL \"You don't have that spell, if indeed that is a spell.\" CR>>"
  },
  "V-AIMFIZ": {
   "name": "V-AIMFIZ",
   "file": "verbs.zil",
   "line": 2132,
   "endLine": 2168,
   "source": "<ROUTINE V-AIMFIZ ()\n\t <COND (<EQUAL? ,PRSO ,COAL-MINE-1 ,COAL-MINE-2 ,COAL-MINE-3>\n\t\t<JIGS-UP\n\"You materialize in a royal tomb somewhere. Before being devoured by rats,\nyou notice a well-decayed corpse nearby.\">)\n\t       (<EQUAL? ,PRSO ,SLANTED-ROOM>\n\t\t<JIGS-UP\n\"You appear in a strange room. Framed diplomas and wand racks adorn the\nwalls, and a stuffed owl is perched above a trophy case. An incredibly\nold man with a long white beard spots you. \\\"Fertilize!\\\" he cries,\npointing a slightly bent wand at you. You turn into a pile of bat guano,\na fitting end for a trespasser.\">)\n\t       (<EQUAL? ,PRSO ,SLIMY-ROOM>\n\t\t<TELL \"You join Krill in oblivion.\" CR>\n\t\t<FINISH>)\n\t       (<EQUAL? ,PRSO ,RIVER-BED>\n\t\t<JIGS-UP\n\"You appear in the woods behind the Guild Hall. The servants (who should\nbe doing their daily chores) are lazing about, drinking ale and betting\non games of Gabber Tumper. To prevent you from reporting their goofing off,\nthey cut your throat. You just can't get good help these days.\">)\n\t       (<EQUAL? ,PRSO ,TURRET>\n\t\t<JIGS-UP\n\"You appear on the lawn of a large estate. A domesticated wolf, foaming\nsaliva, is chasing the messenger across the lawn. With graceful agility, the\nmessenger jumps aside, and the wolf sinks its rabid teeth into you instead.\">)\n\t       (<EQUAL? ,PRSO ,FROBAR-QUARTERS>\n\t\t<JIGS-UP\n\"You materialize in the middle of a powerful thaumaturgical experiment. A\nGuildmaster stands nearby, but before he can react you have turned into\na large and rather ugly mushroom.\">)\n\t       (<EQUAL? ,PRSO ,SERVANT-QUARTERS>\n\t\t<SETG PERFORMING-SPELL T>\n\t\t<PERFORM ,V?AIMFIZ ,ME>\n\t\t<RTRUE>)\n\t       (T\n\t\t<V-SWANZO>)>>"
  },
  "V-AIMFIZ-TO": {
   "name": "V-AIMFIZ-TO",
   "file": "verbs.zil",
   "line": 2170,
   "endLine": 2174,
   "source": "<ROUTINE V-AIMFIZ-TO ()\n\t <COND (<NOT <EQUAL? ,PRSO ,ME>>\n\t\t<TELL \"This spell only has an effect on the caster.\" CR>)\n\t       (T\n\t\t<TELL \"You should just say \\\"aimfiz \" D ,PRSI \"\\\".\" CR>)>>"
  },
  "V-GASPAR": {
   "name": "V-GASPAR",
   "file": "verbs.zil",
   "line": 2176,
   "endLine": 2188,
   "source": "<ROUTINE V-GASPAR ()\n\t <COND (<NOT ,PRSO>\n\t\t<SETG PERFORMING-SPELL T>\n\t\t<PERFORM ,V?GASPAR ,ME>\n\t\t<RTRUE>)>\n\t <TELL \"How nice --\">\n\t <ARTICLE ,PRSO T>\n\t <TELL \" is now provided for in the event of \">\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL \"his\">)\n\t       (T\n\t\t<TELL \"its\">)>\n\t <TELL \" death.\" CR>>"
  },
  "V-GNUSTO": {
   "name": "V-GNUSTO",
   "file": "verbs.zil",
   "line": 2192,
   "endLine": 2234,
   "source": "<ROUTINE V-GNUSTO (\"AUX\" SCROLL)\n\t <COND (<NOT <IN? ,SPELL-BOOK ,PROTAGONIST>>\n\t\t<TELL\n\"The spell quests around in your hands, looking for your spell book, and\nnot finding it, fades reluctantly.\" CR>)\n\t       (<NOT <FSET? ,PRSO ,SPELLBIT>>\n\t\t<TELL \"You can't inscribe\">\n\t\t<ARTICLE ,PRSO>\n\t\t<TELL \" in your spell book!\" CR>)\n\t       (<IN? ,PRSO ,SPELL-BOOK>\n\t\t<TELL\n\"You already have that spell inscribed in your book!\" CR>)\n\t       (<FSET? <LOC ,PRSO> ,MUNGBIT>\n\t\t<TELL \"The spell no longer readable.\" CR>)\n\t       (T\n\t\t<SET SCROLL <LOC ,PRSO>>\n\t\t<COND (<AND <FSET? .SCROLL ,SCROLLBIT>\n\t\t\t    <HELD? .SCROLL>> \n\t\t       <COND (<EQUAL? ,PRSO ,AIMFIZ-SPELL ,YONK-SPELL>\n\t\t\t      <TELL ,BOOK-GLOWS\n\"In a spectacular effort of magic, the powers of the gnusto spell\nattempt to copy the \" D ,PRSO \" into your book, but the spell is\ntoo long, too complicated, and too powerful. The glow fades, but\nfortunately the \" D .SCROLL \" remains intact.\" CR>)\n\t\t\t     (T\n\t\t\t      <MOVE .SCROLL ,DIAL>\n\t\t\t      <MOVE ,PRSO ,SPELL-BOOK>\n\t\t\t      <PUTP ,PRSO ,P?COUNT 0>\n\t\t\t      <TELL ,BOOK-GLOWS\n\"Slowly, ornately, the words of the \" D ,PRSO \" are inscribed, glowing even\nmore brightly than the book itself. The book's brightness fades, \">\n\t\t\t      <COND (<FSET? ,SPELL-BOOK ,MUNGBIT>\n\t\t\t\t     <TELL\n\"and the spell is now illegible in the damp, ruined book. T\">)\n\t\t\t\t    (T\n\t\t\t\t     <TELL\n\"but the spell remains! However, t\">)>\n\t\t\t      <TELL\n\"he scroll on which it was written vanishes as the last word is copied.\" CR>)>)\n\t\t      (T\n\t\t       <TELL\n\"You must have a legible spell scroll in your hands before the gnusto spell\nwill work on it.\" CR>)>)>>"
  },
  "V-FROTZ": {
   "name": "V-FROTZ",
   "file": "verbs.zil",
   "line": 2236,
   "endLine": 2267,
   "source": "<ROUTINE V-FROTZ (\"AUX\" OLIT) ;\"light\"\n\t <SET OLIT ,LIT>\n\t <COND (<FSET? ,PRSO ,ONBIT>\n\t\t<TELL \"Have you forgotten that you already frotzed\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \"?\" CR>)\n\t       (<OR <FSET? ,PRSO ,TAKEBIT>\n\t\t    <FSET? ,PRSO ,ACTORBIT>>\n\t\t<FSET ,PRSO ,ONBIT>\n\t\t<COND (<NOT <EQUAL? ,PRSO ,BAT-GUANO ,FWEEP-SCROLL>>\n\t\t       <FSET ,PRSO ,TOUCHBIT>)>\n\t\t<TELL \"There is an almost blinding flash of light as\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL\n\" begins to glow! It slowly fades to a less painful level, but\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \" is now quite usable as a light source.\">\n\t\t<COND (<OR <EQUAL? ,PRSO ,PARK-GNOME>\n\t\t\t   <AND <EQUAL? ,PRSO ,GNOME>\n\t\t\t\t<NOT ,GNOME-SLEEPING>>>\n\t\t       <JIGS-UP\n\" The gnome looks livid. \\\"Very funny! Have you seen this one?\\\" He incants\na brief spell, and you turn into a bowl of petunias (which eventually wilt).\">\n\t\t       <RTRUE>)>\n\t\t<CRLF>\n\t\t<SETG LIT <LIT? ,HERE>>\n\t\t<COND (<AND <NOT .OLIT> ,LIT>\n\t\t       <CRLF>\n\t\t       <V-LOOK>)>\n\t\t<RTRUE>)\n\t       (T\n\t\t<V-SWANZO>)>>"
  },
  "V-FWEEP": {
   "name": "V-FWEEP",
   "file": "verbs.zil",
   "line": 2269,
   "endLine": 2302,
   "source": "<ROUTINE V-FWEEP (\"AUX\" X N) ;\"bat\"\n\t <COND (<OR <NOT ,PRSO>\n\t\t    <EQUAL? ,PRSO ,ME>>\n\t\t<COND (,RIDE-IN-PROGRESS\n\t\t       <FLY-DURING-RIDE>\n\t\t       <RTRUE>)\n\t\t      (<EQUAL? ,HERE ,LAGOON ,LAGOON-FLOOR>\n\t\t       <JIGS-UP\n\"Unfortunately, bats make poor swimmers. Glug, glug.\">\n\t\t       <RTRUE>)>\n\t\t<SETG FWEEPED T>\n\t\t<SETG FLYING T>\n\t\t<ENABLE <QUEUE I-UNFWEEP 15>>\n\t\t<DISABLE <INT I-FLY>>\n\t\t<SET X <FIRST? ,PROTAGONIST>>\n\t\t<TELL\n\"With keen disappointment, you note that nothing has changed. Then, you\nslowly realize that you are black, have two wing-like appendages, and are\nflying a few feet above the ground.\">\n\t\t<COND (.X\n\t\t       <TELL\n\" Understandably, you dropped everything you were carrying.\">)>\n\t\t<COND (<EQUAL? ,HERE ,GLASS-MAZE>\n\t\t       <RADAR-VIEW>)>\n\t\t<CRLF>\n\t\t<REPEAT ()\n\t\t\t<COND (.X\n\t\t\t       <SET N <NEXT? .X>>\n\t\t\t       <MOVE .X ,HERE>\n\t\t\t       <SET X .N>)\n\t\t              (T\n\t\t\t       <RETURN>)>>)\n\t       (T\n\t\t<TELL \"The fweep spell can be cast only on yourself.\" CR>)>>"
  },
  "V-IZYUK": {
   "name": "V-IZYUK",
   "file": "verbs.zil",
   "line": 2304,
   "endLine": 2325,
   "source": "<ROUTINE V-IZYUK ()\n\t <COND (<AND ,FLYING\n\t\t     <EQUAL? ,PRSO ,ME>>\n\t\t<TELL \"You are already flying.\" CR>)\n\t       (<OR <NOT ,PRSO>\n\t\t    <EQUAL? ,PRSO ,ME>>\n\t\t<COND (,RIDE-IN-PROGRESS\n\t\t       <FLY-DURING-RIDE>\n\t\t       <RTRUE>)>\n\t\t<COND (<EQUAL? ,HERE ,LAGOON-FLOOR>\n\t\t       <TELL \"Gloooop! \">)>\n\t\t<TELL \"You are now floating serenely in midair.\" CR>\n\t\t<COND (<EQUAL? ,HERE ,LAGOON-FLOOR>\n\t\t       <DO-WALK ,P?UP>)>\n\t\t<SETG FLYING T>\n\t\t<ENABLE <QUEUE I-FLY 3>>\n\t\t<MOVE ,PROTAGONIST ,HERE>)\n\t       (<EQUAL? ,PRSO ,FLAG>\n\t\t<V-FLY>)\n\t       (T\n\t\t<PERFORM ,V?FLY ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "FLY-DURING-RIDE": {
   "name": "FLY-DURING-RIDE",
   "file": "verbs.zil",
   "line": 2327,
   "endLine": 2339,
   "source": "<ROUTINE FLY-DURING-RIDE ()\n\t <TELL \"You fly out of the \">\n\t <COND (<EQUAL? ,HERE ,FLUME>\n\t\t<TELL \"log boat\">)\n\t       (T\n\t\t<TELL \"car\">)>\n\t <TELL\n\", and immediately splat into one of the structural cross-beams of the \">\n\t <COND (<EQUAL? ,HERE ,FLUME>\n\t\t<TELL \"flume\">)\n\t       (T\n\t\t<TELL \"roller coaster\">)>\n\t <JIGS-UP \".\">>"
  },
  "V-MALYON": {
   "name": "V-MALYON",
   "file": "verbs.zil",
   "line": 2341,
   "endLine": 2353,
   "source": "<ROUTINE V-MALYON ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL \"Wow! It looks like\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \" is now alive! What a magician you are!\" CR>)\n\t       (<FSET? ,PRSO ,TAKEBIT>\n\t\t<TELL \"As you complete the spell,\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL\n\" comes alive! It blinks, dances a little jig,\nand a moment later returns to normal.\" CR>)\n\t       (T\n\t\t<V-SWANZO>)>>"
  },
  "V-MEEF": {
   "name": "V-MEEF",
   "file": "verbs.zil",
   "line": 2355,
   "endLine": 2356,
   "source": "<ROUTINE V-MEEF ()\n\t <V-SWANZO>>"
  },
  "V-PULVER": {
   "name": "V-PULVER",
   "file": "verbs.zil",
   "line": 2358,
   "endLine": 2366,
   "source": "<ROUTINE V-PULVER () ;\"evaporate\"\n\t <COND (<OR <EQUAL? ,PRSO ,FOOBLE-POTION ,FLAXO-POTION ,BLORT-POTION>\n\t\t    <EQUAL? ,PRSO ,VILSTU-POTION ,BERZIO-POTION>>\n\t\t<MOVE ,PRSO ,DIAL>\n\t\t<TELL \"The potion vanishes.\" CR>)\n\t       (T\n\t\t<TELL \"After completing the spell,\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \" remains unchanged. It must not be a liquid.\" CR>)>>"
  },
  "V-REZROV": {
   "name": "V-REZROV",
   "file": "verbs.zil",
   "line": 2368,
   "endLine": 2386,
   "source": "<ROUTINE V-REZROV () ;\"open\"\n\t <COND (<OR <FSET? ,PRSO ,CONTBIT>\n\t\t    <FSET? ,PRSO ,DOORBIT>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <ALREADY-OPEN>)\n\t\t      (<NOT <FSET? ,PRSO ,SCROLLBIT>>\n\t\t       <TELL \"Silently,\">\n\t\t       <ARTICLE ,PRSO T>\n\t\t       <TELL \" swings open\">\n\t\t       <COND (<FIRST? ,PRSO>\n\t\t\t      <TELL \", revealing \">\n\t\t\t      <PRINT-CONTENTS ,PRSO>)>\n\t\t       <TELL\n\". Like swatting a fly with a sledge hammer, if you ask me.\" CR>\n\t\t       <FSET ,PRSO ,OPENBIT>)\n\t\t      (T\n\t\t       <V-SWANZO>)>)\n\t       (T\n\t\t<V-SWANZO>)>>"
  },
  "V-SWANZO": {
   "name": "V-SWANZO",
   "file": "verbs.zil",
   "line": 2388,
   "endLine": 2393,
   "source": "<ROUTINE V-SWANZO () ;\"exorcise\"\n\t <TELL\n\"Although you complete the spell, nothing seems to have happened\">\n\t <COND (<VERB? AIMFIZ>\n\t\t<TELL \". Perhaps this spell only works on people\">)>\n\t <TELL \".\" CRLF>>"
  },
  "V-GOLMAC": {
   "name": "V-GOLMAC",
   "file": "verbs.zil",
   "line": 2395,
   "endLine": 2405,
   "source": "<ROUTINE V-GOLMAC () ;\"time travel\"\n\t <COND (<AND <FSET? ,PRSO ,ACTORBIT>\n\t\t     <NOT <EQUAL? ,PRSO ,BELBOZ ,JEEARR>>>\n\t\t<MOVE ,PRSO ,DIAL>\n\t\t<TELL \"With a puff of smoke,\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \" vanishes!\" CR>)\n\t       (T\n\t\t<TELL \"There is a puff of smoke, but when it clears\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \" is still there.\" CR>)>>"
  },
  "V-VARDIK": {
   "name": "V-VARDIK",
   "file": "verbs.zil",
   "line": 2407,
   "endLine": 2412,
   "source": "<ROUTINE V-VARDIK () ;\"mind shield\"\n\t <TELL \"The mind of\">\n\t <ARTICLE ,PRSO T>\n\t <COND (<NOT <FSET? ,PRSO ,ACTORBIT>>\n\t\t<TELL \" (if it has one)\">)>\n\t <TELL \" is now shielded against evil spirits.\" CR>>"
  },
  "V-VEZZA": {
   "name": "V-VEZZA",
   "file": "verbs.zil",
   "line": 2414,
   "endLine": 2432,
   "source": "<ROUTINE V-VEZZA (\"AUX\" VISION) ;\"clairvoyance\"\n\t <COND (<OR <NOT ,PRSO>\n\t\t    <EQUAL? ,PRSO ,ME>>\n\t\t<TELL \"You see \">\n\t\t<REPEAT ()\n\t\t\t<SET VISION <GET ,VEZZAS <RANDOM 10>>>\n\t\t\t<COND (<NOT <EQUAL? .VISION 0>>\n\t\t\t       <RETURN>)>>\n\t\t<TELL .VISION>\n\t\t<TELL \" A moment later, the vision fades.\" CR>)\n\t       (T\n\t\t<TELL \"Thanks to you,\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \" is given a brilliant but momentary glimpse of \">\n\t\t<COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t       <TELL \"his\">)\n\t\t      (T\n\t\t       <TELL \"its\">)>\n\t\t<TELL \" own future.\" CR>)>>"
  },
  "V-YOMIN": {
   "name": "V-YOMIN",
   "file": "verbs.zil",
   "line": 2456,
   "endLine": 2459,
   "source": "<ROUTINE V-YOMIN ()\n\t <TELL \"I'm afraid\">\n\t <ARTICLE ,PRSO T>\n\t <TELL \" doesn't have much of a mind for you to read.\" CR>>"
  },
  "V-YONK": {
   "name": "V-YONK",
   "file": "verbs.zil",
   "line": 2461,
   "endLine": 2469,
   "source": "<ROUTINE V-YONK ()\n\t <COND (<NOT <FSET? ,PRSO ,SPELLBIT>>\n\t\t<TELL\n\"Nothing happens. I think this spell is meant to be cast on other spells...\">\n\t\t<CRLF>)\n\t       (T\n\t\t<TELL \"The words of the spell glow brightly for a moment.\" CR>\n\t\t<COND (<EQUAL? ,PRSO ,MALYON-SPELL>\n\t\t       <SETG MALYON-YONKED T>)>)>>"
  },
  "ITAKE": {
   "name": "ITAKE",
   "file": "verbs.zil",
   "line": 2475,
   "endLine": 2515,
   "source": "<ROUTINE ITAKE (\"OPTIONAL\" (VB T) \"AUX\" CNT OBJ)\n\t <COND (,FWEEPED\n\t\t<COND (.VB\n\t\t       <BATTY>)>\n\t\t<RFALSE>)\n\t       (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t\t<COND (.VB\n\t\t       <TELL <PICK-ONE ,YUKS> CR>)>\n\t\t<RFALSE>)\n\t       (<AND <IN? ,PRSO ,YOUNGER-SELF>\n\t\t     <EQUAL? ,PRSO ,SPELL-BOOK>\n\t\t     <SPELL-BOOK-PASS-OFF-CHECK>>\n\t\t<RFATAL>)\n\t       (<OR <IN? ,PRSO ,YOUNGER-SELF>\n\t\t    <IN? ,PRSO ,OLDER-SELF>>\n\t\t<TELL \"Your twin refuses to part with\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \".\" CR>\n\t\t<RFATAL>)\n\t       (<AND\n\t\t <NOT <IN? <LOC ,PRSO> ,PROTAGONIST>>\n\t\t <G? <+ <WEIGHT ,PRSO> <WEIGHT ,PROTAGONIST>> ,LOAD-ALLOWED>>\n\t\t<COND (.VB\n\t\t       <COND (<FIRST? ,PROTAGONIST>\n\t\t\t      <TELL \"Your load is too heavy\">)\n\t\t\t     (T\n\t\t\t      <TELL \"It's a little too heavy\">)>\n\t\t       <COND (<L? ,LOAD-ALLOWED ,LOAD-MAX>\n\t\t\t      <TELL\n\", especially in light of your exhaustion\">)>\n\t\t       <TELL \".\" CR>)>\n\t\t<RFATAL>)\n\t       (<G? <SET CNT <CCOUNT ,PROTAGONIST>> ,FUMBLE-NUMBER>\n\t\t<COND (.VB\n\t\t       <TELL \"You're holding too many things already.\" CR>)>\n\t\t<RFATAL>)\n\t       (T\n\t\t<MOVE ,PRSO ,PROTAGONIST>\n\t\t<SCORE-OBJECT>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<RTRUE>)>>"
  },
  "SCORE-OBJECT": {
   "name": "SCORE-OBJECT",
   "file": "verbs.zil",
   "line": 2519,
   "endLine": 2535,
   "source": "<ROUTINE SCORE-OBJECT ()\n\t <COND (<AND <EQUAL? ,PRSO ,SWANZO-SCROLL>\n\t\t     <EQUAL? ,HERE ,STONE-HUT>>\n\t\t<SETG SCORE <+ ,SCORE ,SWANZO-POINT>>\n\t\t<SETG SWANZO-POINT 0>)\n\t       (<AND <EQUAL? ,PRSO ,VARDIK-SCROLL>\n\t\t     <NOT <FSET? ,VARDIK-SCROLL ,TOUCHBIT>>>\n\t\t<SETG SCORE <+ ,SCORE 25>>)\n\t       (<AND <EQUAL? ,PRSO ,VILSTU-VIAL>\n\t\t     <NOT <FSET? ,VILSTU-VIAL ,TOUCHBIT>>>\n\t\t<SETG SCORE <+ ,SCORE 10>>)\n\t       (<AND <EQUAL? ,PRSO ,MEEF-SCROLL>\n\t\t     <NOT <FSET? ,MEEF-SCROLL ,TOUCHBIT>>>\n\t\t<SETG SCORE <+ ,SCORE 10>>)\n\t       (<AND <EQUAL? ,PRSO ,YONK-SCROLL>\n\t\t     <NOT <FSET? ,YONK-SCROLL ,TOUCHBIT>>>\n\t\t<SETG SCORE <+ ,SCORE 10>>)>>"
  },
  "IDROP": {
   "name": "IDROP",
   "file": "verbs.zil",
   "line": 2537,
   "endLine": 2566,
   "source": "<ROUTINE IDROP ()\n\t <COND (<PRSO? ,HANDS>\n\t\t<V-LOCK>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? ,PRSO ,PROTAGONIST>>\n\t\t     <NOT <IN? <LOC ,PRSO> ,PROTAGONIST>>>\n\t\t<TELL \"You're not carrying\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \".\" CR>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? ,PRSO ,PROTAGONIST>>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<TELL \"Impossible since\">\n\t\t<ARTICLE ,PRSO T>\n\t\t<TELL \" is closed.\" CR>\n\t\t<RFALSE>)\n\t       (<EQUAL? ,HERE ,TREE-BRANCH>\n\t\t<MOVE ,PRSO ,TWISTED-FOREST>)\n\t       (<EQUAL? ,HERE ,LAGOON>\n\t\t<MOVE ,PRSO ,LAGOON-FLOOR>)\n\t       (<AND <EQUAL? ,HERE ,GLASS-MAZE>\n\t\t     <NO-FLOOR?>>\n\t\t<DROP-IN-MAZE>\n\t\t<MOVE ,PRSO ,DIAL>\n\t\t<TELL\n\"It drops into the shimmering light below you. A moment later, you\nhear a gentle thud.\" CR>)\n\t       (T\n\t\t<MOVE ,PRSO <LOC ,PROTAGONIST>>\n\t\t<RTRUE>)>>"
  },
  "CCOUNT": {
   "name": "CCOUNT",
   "file": "verbs.zil",
   "line": 2568,
   "endLine": 2575,
   "source": "<ROUTINE CCOUNT (OBJ \"AUX\" (CNT 0) X)\n\t <COND (<SET X <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT <FSET? .X ,WEARBIT>>\n\t\t\t       <SET CNT <+ .CNT 1>>)>\n\t\t\t<COND (<NOT <SET X <NEXT? .X>>>\n\t\t\t       <RETURN>)>>)>\n\t .CNT>"
  },
  "WEIGHT": {
   "name": "WEIGHT",
   "file": "verbs.zil",
   "line": 2578,
   "endLine": 2586,
   "source": "<ROUTINE WEIGHT (OBJ \"AUX\" CONT (WT 0))\n\t <COND (<SET CONT <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<COND (<AND <EQUAL? .OBJ ,PLAYER>\n\t\t\t\t    <FSET? .CONT ,WEARBIT>>\n\t\t\t       <SET WT <+ .WT 1>>)\n\t\t\t      (T <SET WT <+ .WT <WEIGHT .CONT>>>)>\n\t\t\t<COND (<NOT <SET CONT <NEXT? .CONT>>> <RETURN>)>>)>\n\t <+ .WT <GETP .OBJ ,P?SIZE>>>"
  },
  "DESCRIBE-ROOM": {
   "name": "DESCRIBE-ROOM",
   "file": "verbs.zil",
   "line": 2590,
   "endLine": 2631,
   "source": "<ROUTINE DESCRIBE-ROOM (\"OPTIONAL\" (LOOK? <>) \"AUX\" V? STR AV)\n\t <SET V? <OR .LOOK? ,VERBOSE>>\n\t <COND (<AND <NOT ,LIT>\n\t\t     <NOT ,BLORTED>>\n\t\t<TELL \"It is pitch black\">\n\t\t<COND (,FWEEPED\n\t\t       <TELL\n\", and your bat sonar-sense isn't much help in this terrain\">)>\n\t\t<TELL \".\">\n\t\t<COND (<EQUAL? ,HERE ,GRUE-LAIR>\n\t\t       <TELL\n\" Gurgling noises come from every direction!\">)\n\t\t      (<NOT ,SPRAYED?>\n\t\t       <TELL\n\" Dangerous creatures, such as grues, probably abound in the darkness.\">)>\n\t\t<CRLF>\n\t\t<RETURN <>>)>\n\t <COND (<NOT <FSET? ,HERE ,TOUCHBIT>>\n\t\t<FSET ,HERE ,TOUCHBIT>\n\t\t<SET V? T>)>\n\t <COND (<IN? ,HERE ,ROOMS>\n\t\t<TELL D ,HERE>\n\t\t<COND (,FLYING\n\t\t       <TELL \" (you are flying)\">)>\n\t\t<COND (<NOT <FSET? <LOC ,PROTAGONIST> ,VEHBIT>>\n\t\t       <CRLF>)>)>\n\t <COND (<OR .LOOK?\n\t\t    <NOT ,SUPER-BRIEF>\n\t\t    <EQUAL? ,HERE ,GLASS-MAZE>>\n\t\t<SET AV <LOC ,PROTAGONIST>>\n\t\t<COND (<FSET? .AV ,VEHBIT>\n\t\t       <TELL \", in the \" D .AV CR>)>\n\t\t<COND (<AND .V? <APPLY <GETP ,HERE ,P?ACTION> ,M-LOOK>>\n\t\t       <RTRUE>)\n\t\t      (<AND .V? <SET STR <GETP ,HERE ,P?LDESC>>>\n\t\t       <TELL .STR CR>)\n\t\t      (T\n\t\t       <APPLY <GETP ,HERE ,P?ACTION> ,M-FLASH>)>\n\t\t<COND (<AND <NOT <EQUAL? ,HERE .AV>>\n\t\t\t    <FSET? .AV ,VEHBIT>>\n\t\t       <APPLY <GETP .AV ,P?ACTION> ,M-LOOK>)>)>\n\t T>"
  },
  "DESCRIBE-OBJECTS": {
   "name": "DESCRIBE-OBJECTS",
   "file": "verbs.zil",
   "line": 2633,
   "endLine": 2638,
   "source": "<ROUTINE DESCRIBE-OBJECTS (\"OPTIONAL\" (V? <>))\n\t <COND (<OR ,LIT ,BLORTED>\n\t\t<COND (<FIRST? ,HERE>\n\t\t       <PRINT-CONT ,HERE <SET V? <OR .V? ,VERBOSE>> -1>)>)\n\t       (T\n\t\t<TOO-DARK>)>>"
  },
  "DESCRIBE-OBJECT": {
   "name": "DESCRIBE-OBJECT",
   "file": "verbs.zil",
   "line": 2645,
   "endLine": 2674,
   "source": "<ROUTINE DESCRIBE-OBJECT (OBJ V? LEVEL \"AUX\" (STR <>) AV)\n\t <SETG DESC-OBJECT .OBJ>\n\t <COND (<AND <0? .LEVEL>\n\t\t     <APPLY <GETP .OBJ ,P?DESCFCN> ,M-OBJDESC>>\n\t\t<RTRUE>)\n\t       (<AND <0? .LEVEL>\n\t\t     <OR <AND <NOT <FSET? .OBJ ,TOUCHBIT>>\n\t\t\t      <SET STR <GETP .OBJ ,P?FDESC>>>\n\t\t\t <SET STR <GETP .OBJ ,P?LDESC>>>>\n\t\t<TELL .STR>)\n\t       (<0? .LEVEL>\n\t\t<COND (<AND <EQUAL? .OBJ ,OLDER-SELF>\n\t\t\t    <NOT ,OLDER-INTRODUCED>>\n\t\t       <RTRUE>)>\n\t\t<TELL \"There is\">\n\t\t<ARTICLE .OBJ>\n\t\t<TELL \" here\">\n\t\t<PARANTHETICAL-NOTES .OBJ>\n\t\t<TELL \".\">)\n\t       (T\n\t\t<TELL <GET ,INDENTS .LEVEL>>\n\t\t<SPACELESS-ARTICLE .OBJ>\n\t\t<PARANTHETICAL-NOTES .OBJ>)>\n\t <COND (<AND <0? .LEVEL>\n\t\t     <SET AV <LOC ,PROTAGONIST>>\n\t\t     <FSET? .AV ,VEHBIT>>\n\t\t<TELL \" (outside the \" D .AV \")\">)>\n\t <CRLF>\n\t <COND (<AND <SEE-INSIDE? .OBJ> <FIRST? .OBJ>>\n\t\t<PRINT-CONT .OBJ .V? .LEVEL>)>>"
  },
  "PARANTHETICAL-NOTES": {
   "name": "PARANTHETICAL-NOTES",
   "file": "verbs.zil",
   "line": 2676,
   "endLine": 2688,
   "source": "<ROUTINE PARANTHETICAL-NOTES (OBJ)\n\t <COND (<AND <EQUAL? .OBJ ,ROPE>\n\t\t     ,ROPE-TO-BEAM>\n\t\t<TELL \" (tied to the beam)\">)\n\t       (<AND <FSET? .OBJ ,WEARBIT>\n\t\t     <IN? .OBJ ,PROTAGONIST>>\n\t\t<TELL \" (being worn\">\n\t\t<COND (<FSET? .OBJ ,ONBIT>\n\t\t       <TELL \" and providing light)\">)\n\t\t      (T\n\t\t       <TELL \")\">)>)\n\t       (<FSET? .OBJ ,ONBIT>\n\t\t<TELL \" (providing light)\">)>>"
  },
  "PRINT-CONT": {
   "name": "PRINT-CONT",
   "file": "verbs.zil",
   "line": 2690,
   "endLine": 2739,
   "source": "<ROUTINE PRINT-CONT (OBJ \"OPTIONAL\" (V? <>) (LEVEL 0)\n\t\t         \"AUX\" Y 1ST? AV STR (PV? <>) (INV? <>))\n\t <COND (<NOT <SET Y <FIRST? .OBJ>>>\n\t\t<RTRUE>)>\n\t <COND (<FSET? <LOC ,PROTAGONIST> ,VEHBIT>\n\t\t<SET AV <LOC ,PROTAGONIST>>)\n\t       (T\n\t\t<SET AV <>>)>\n\t <SET 1ST? T>\n\t <COND (<EQUAL? ,PROTAGONIST .OBJ <LOC .OBJ>>\n\t\t<SET INV? T>)\n\t       (T\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT .Y>\n\t\t\t       <RETURN <NOT .1ST?>>)\n\t\t\t      (<==? .Y .AV>\n\t\t\t       <SET PV? T>)\n\t\t\t      (<==? .Y ,PROTAGONIST>)\n\t\t\t      (<AND <NOT <FSET? .Y ,INVISIBLE>>\n\t\t\t\t    <NOT <FSET? .Y ,TOUCHBIT>>\n\t\t\t\t    <SET STR <GETP .Y ,P?FDESC>>>\n\t\t\t       <COND (<NOT <FSET? .Y ,NDESCBIT>>\n\t\t\t\t      <TELL .STR CR>)>\n\t\t\t       <COND (<AND <SEE-INSIDE? .Y>\n\t\t\t\t\t   <NOT <GETP <LOC .Y> ,P?DESCFCN>>\n\t\t\t\t\t   <FIRST? .Y>>\n\t\t\t\t      <PRINT-CONT .Y .V? 0>)>)>\n\t\t\t<SET Y <NEXT? .Y>>>)>\n\t <SET Y <FIRST? .OBJ>>\n\t <REPEAT ()\n\t\t <COND (<NOT .Y>\n\t\t\t<COND (<AND .PV? .AV <FIRST? .AV>>\n\t\t\t       <PRINT-CONT .AV .V? .LEVEL>)>\n\t\t\t<RETURN <NOT .1ST?>>)\n\t\t       (<EQUAL? .Y .AV ,PROTAGONIST>)\n\t\t       (<AND <NOT <FSET? .Y ,INVISIBLE>>\n\t\t\t     <OR .INV?\n\t\t\t\t <FSET? .Y ,TOUCHBIT>\n\t\t\t\t <NOT <GETP .Y ,P?FDESC>>>>\n\t\t\t<COND (<NOT <FSET? .Y ,NDESCBIT>>\n\t\t\t       <COND (.1ST?\n\t\t\t\t      <COND (<FIRSTER .OBJ .LEVEL>\n\t\t\t\t\t     <COND (<L? .LEVEL 0>\n\t\t\t\t\t\t    <SET LEVEL 0>)>)>\n\t\t\t\t      <SET LEVEL <+ 1 .LEVEL>>\n\t\t\t\t      <SET 1ST? <>>)>\n\t\t\t       <DESCRIBE-OBJECT .Y .V? .LEVEL>)\n\t\t\t      (<AND <FIRST? .Y> <SEE-INSIDE? .Y>>\n\t\t\t       <PRINT-CONT .Y .V? .LEVEL>)>)>\n\t\t <SET Y <NEXT? .Y>>>>"
  },
  "PRINT-CONTENTS": {
   "name": "PRINT-CONTENTS",
   "file": "verbs.zil",
   "line": 2741,
   "endLine": 2761,
   "source": "<ROUTINE PRINT-CONTENTS (OBJ \"AUX\" F N (1ST? T) (IT? <>) (TWO? <>))\n\t <COND (<SET F <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<SET N <NEXT? .F>>\n\t\t\t<COND (.1ST? <SET 1ST? <>>)\n\t\t\t      (T\n\t\t\t       <TELL \", \">\n\t\t\t       <COND (<NOT .N>\n\t\t\t\t      <TELL \"and \">)>)>\n\t\t\t<SPACELESS-ARTICLE .F>\n\t\t\t<COND (<AND <NOT .IT?>\n\t\t\t\t    <NOT .TWO?>>\n\t\t\t       <SET IT? .F>)\n\t\t\t      (T\n\t\t\t       <SET TWO? T>\n\t\t\t       <SET IT? <>>)>\n\t\t\t<SET F .N>\n\t\t\t<COND (<NOT .F>\n\t\t\t       <COND (<AND .IT? <NOT .TWO?>>\n\t\t\t\t      <THIS-IS-IT .IT?>)>\n\t\t\t       <RTRUE>)>>)>>"
  },
  "FIRSTER": {
   "name": "FIRSTER",
   "file": "verbs.zil",
   "line": 2763,
   "endLine": 2776,
   "source": "<ROUTINE FIRSTER (OBJ LEVEL)\n\t <COND (<EQUAL? .OBJ ,PROTAGONIST>\n\t\t<TELL \"You are carrying:\" CR>)\n\t       (<NOT <IN? .OBJ ,ROOMS>>\n\t\t<COND (<G? .LEVEL 0>\n\t\t       <TELL <GET ,INDENTS .LEVEL>>)>\n\t\t<COND (<FSET? .OBJ ,SURFACEBIT>\n\t\t       <TELL \"Sitting on the \" D .OBJ \" is:\" CR>)\n\t\t      (<FSET? .OBJ ,ACTORBIT>\n\t\t       <TELL \"It looks like\">\n\t\t       <ARTICLE .OBJ T>\n\t\t       <TELL \" is holding:\" CR>)\n\t\t      (T\n\t\t       <TELL \"The \" D .OBJ \" contains:\" CR>)>)>>"
  },
  "GOTO": {
   "name": "GOTO",
   "file": "verbs.zil",
   "line": 2807,
   "endLine": 2835,
   "source": "<ROUTINE GOTO (RM \"OPTIONAL\" (V? T) \"AUX\" OLIT OHERE)\n\t <SET OHERE ,HERE>\n\t <SET OLIT ,LIT>\n\t <MOVE ,PROTAGONIST .RM>\n\t <SETG HERE .RM>\n\t <SETG LIT <LIT? ,HERE>>\n\t <COND (<AND <NOT .OLIT>\n\t\t     <NOT ,LIT>\n\t\t     <NOT ,SPRAYED?>\n\t\t     <NOT ,RESURRECTING>\n\t\t     <NOT <EQUAL? ,HERE ,HAUNTED-HOUSE>>\n\t\t     <NOT <IN? ,GRUE-SUIT ,PROTAGONIST>>\n\t\t     <PROB 80>>\n\t\t<COND (,BLORTED\n\t\t       <JIGS-UP\n\"A hideous creature with slavering fangs lurks up and, before\nyou can move, begins feasting!\">)\n\t\t      (T\n\t\t       <JIGS-UP\n\"Oh, no! Something lurked up and devoured you!\">)>\n\t\t<RTRUE>)>\n\t <SETG RESURRECTING <>>\n\t <ROPE-BEAM-CHECK T>\n\t <APPLY <GETP ,HERE ,P?ACTION> ,M-ENTER>\n\t <COND (<NOT <EQUAL? ,HERE .RM>>\n\t\t<RTRUE>)\n\t       (.V?\n\t\t<V-FIRST-LOOK>)>\n\t <RTRUE>>"
  },
  "ROPE-BEAM-CHECK": {
   "name": "ROPE-BEAM-CHECK",
   "file": "verbs.zil",
   "line": 2837,
   "endLine": 2853,
   "source": "<ROUTINE ROPE-BEAM-CHECK (\"OPTIONAL\" (PRINT <>))\n\t <COND (<AND <HELD? ,BEAM>\n\t\t     <NOT <HELD? ,ROPE>>\n\t\t     ,ROPE-TO-BEAM>\n\t\t<MOVE ,ROPE ,PROTAGONIST>\n\t\t<SETG ROPE-PLACED <>>\n\t\t<SETG ROPE-IN-LOWER-CHUTE <>>\n\t\t<FCLEAR ,BEAM ,TRYTAKEBIT>\n\t\t<FCLEAR ,ROPE ,TRYTAKEBIT>\n\t\t<COND (.PRINT\n\t\t       <TELL \"(taking the rope first)\" CR>)>)\n\t       (<AND <HELD? ,ROPE>\n\t\t     <NOT <HELD? ,BEAM>>\n\t\t     ,ROPE-TO-BEAM>\n\t\t<MOVE ,BEAM ,PROTAGONIST>\n\t\t<COND (.PRINT\n\t\t       <TELL \"(taking the beam of wood first)\" CR>)>)>>"
  },
  "JIGS-UP": {
   "name": "JIGS-UP",
   "file": "verbs.zil",
   "line": 2857,
   "endLine": 2965,
   "source": "<ROUTINE JIGS-UP (DESC \"OPTIONAL\" (STARVED <>))\n\t <COND (.DESC \n\t\t<TELL .DESC CR>)>\n\t <FORGET-ALL>\n\t <KILL-INTERRUPTS>\n\t <COND (,SLEEPING\n\t\t<TELL\nCR \"...and a moment later you wake up in a cold sweat and realize you've\nbeen dreaming.\" CR>\n\t        <SETG SLEEPING <>>\n\t        <FCLEAR ,TWISTED-FOREST ,TOUCHBIT>\n\t        <FCLEAR ,TREE-BRANCH ,TOUCHBIT>\n\t        <FCLEAR ,FOREST-EDGE ,TOUCHBIT>\n\t        <FCLEAR ,MINE-FIELD ,TOUCHBIT>\n\t        <FCLEAR ,SNAKE-PIT ,TOUCHBIT>\n\t        <FCLEAR ,MEADOW ,TOUCHBIT>\n\t        <FCLEAR ,RIVER-BANK ,TOUCHBIT>\n\t        <FCLEAR ,FORT-ENTRANCE ,TOUCHBIT>\n\t        <FCLEAR ,DRAWBRIDGE ,TOUCHBIT>\n\t        <FCLEAR ,RUINS ,TOUCHBIT>\n\t\t<ENABLE <QUEUE I-PARROT -1>>\n\t\t<ENABLE <QUEUE I-MAILMAN 25>>\n\t\t<ENABLE <QUEUE I-TIRED 80>>\n\t\t<ENABLE <QUEUE I-HUNGER 21>>\n\t\t<ENABLE <QUEUE I-THIRST 18>>\n\t\t<SETG LAST-SLEPT ,MOVES>\n\t\t<SETG CODE-NUMBER <RANDOM 12>>\n\t\t<SETG CURRENT-TLOC <* ,CODE-NUMBER 6>>\n\t\t<SETG NEXT-NUMBER <GET ,NEXT-CODE-TABLE ,CURRENT-TLOC>>\n\t\t<SETG SCORE <+ ,SCORE 5>>\n\t\t<MOVE ,SPELL-BOOK ,PROTAGONIST>\n\t\t<SETG HERE ,YOUR-QUARTERS>\n\t\t<MOVE ,PROTAGONIST ,BED>\n\t\t<CRLF>\n\t\t<V-VERSION>\n\t\t<CRLF>\n\t\t<SETG PRSO <>>\n\t\t<SETG LIT <>>\n\t\t<TELL\n\"Your frotz spell seems to have worn off during the night, and it\nis now pitch black.\" CR>)\n\t       (T\t       \n\t\t<TELL \"\n|    ****  You have died  ****||\">\n\t\t<COND (,RESURRECTION-ROOM\n\t\t       <COND (<AND <IN? ,SWANZO-SCROLL ,PROTAGONIST>\n\t\t\t\t   <NOT <EQUAL? ,SWANZO-POINT 0>>>\n\t\t\t      <MOVE ,SWANZO-SCROLL ,HOLLOW>\n\t\t\t      <FCLEAR ,SWANZO-SCROLL ,TOUCHBIT>)>\n\t\t       <ROPE-BEAM-CHECK>\n\t\t       <RANDOMIZE-OBJECTS>\n\t\t       <WEAR-OFF-SPELLS>\n\t\t       <TELL\n\"Your guardian angel, draped in white, appears floating in the nothingness\nbefore you. \\\"Gotten in a bit of a scrape, eh?\\\" he asks, writing frantically\nin a notebook. \\\"I'd love to chat, but we're so busy this month.\\\" \">\n\t\t       <COND (<EQUAL? ,RESURRECTION-ROOM ,GLASS-MAZE>\n\t\t\t      <TELL\n\"The angel looks pained. \\\"I hate resurrections in these stupid glass mazes!\nI can never tell one room from the next.\\\" A moment later, you appear in\nthe maze. Unfortunately, this is one of the floor-less rooms. This time,\nyour demise is permanent.\" CR>\n\t\t\t      <FINISH>)\n\t\t\t     (<AND <EQUAL? ,RESURRECTION-ROOM ,RIVER-BED\n\t\t\t\t           ,STAGNANT-POOL ,TOP-OF-FALLS>\n\t\t\t\t   <NOT ,RIVER-EVAPORATED>>\n\t\t\t      <TELL\n\"A moment later you find yourself at the bottom of a river, between\na whirpool, some sharp rocks, and a school of river sharks. This time,\nyour death is terminal.\" CR>\n\t\t\t      <FINISH>)\n\t\t\t     (<AND <IN-GUILD-HALL? ,RESURRECTION-ROOM>\n\t\t\t\t   <FSET? ,TWISTED-FOREST ,TOUCHBIT>>\n\t\t\t      <TELL\n\"A look of consternation crosses the angel's face. \\\"According to the\nrecords, you're to be resurrected in your local Guild Hall. But that's\nquite far, and I've had a rough day. How about Egreth Castle instead,\nhmmm?\\\" Being disembodied, you find it difficult to object, and a moment\nlater you are among the...\">\n\t\t\t      <SETG RESURRECTION-ROOM ,RUINS>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"The angel twitches his nose, and the nothingness is replaced by...\">)>\n\t\t       <CRLF> <CRLF>\n\t\t       <SETG RESURRECTING T>\n\t               <GOTO ,RESURRECTION-ROOM>\n\t\t       <COND (<EQUAL? ,RESURRECTION-ROOM ,HOLLOW>\n\t\t\t      <SETG ROOM-NUMBER 24>\n\t\t\t      <COND (<NOT ,SPLATTERED>\n\t\t\t             <SETG DORN-BEAST-WARNING <>>\n\t\t\t             <SETG DORN-BEAST-ROOM 0>\n\t\t\t             <SETG LAST-DORN-ROOM 0>\n\t\t\t             <ENABLE <QUEUE I-DORN-BEAST 2>>)>)>\n\t\t       <COND (.STARVED\n\t\t\t      <TELL\n\"Unfortunately, you are still long overdue for a meal and immediately\ndrop dead again.\" CR>\n\t\t\t      <FINISH>)>\n\t\t       <COND (<IN-COAL-MINE?>\n\t\t\t      <ENABLE <QUEUE I-SUFFOCATE 2>>\n\t\t\t      <TELL\n\"The air here is almost unbreathable.\" CR>)>\n\t\t       <SETG RESURRECTION-ROOM <>>\n\t               <SETG P-CONT <>>\n\t               <RFATAL>)\n\t\t      (T\n\t\t       <TELL\n\"Unfortunately, you made no provisions for your untimely death.\" CR>\n\t\t       <FINISH>)>)>>"
  },
  "RANDOMIZE-OBJECTS": {
   "name": "RANDOMIZE-OBJECTS",
   "file": "verbs.zil",
   "line": 2969,
   "endLine": 2982,
   "source": "<ROUTINE RANDOMIZE-OBJECTS (\"AUX\" (F <FIRST? ,PROTAGONIST>) N)\n\t <REPEAT ()\n\t\t <COND (.F\n\t\t\t<SET N <NEXT? .F>>\n\t\t\t<COND (<FSET? .F ,SCROLLBIT>\n\t\t\t       <COND (<EQUAL? ,HERE ,HAUNTED-HOUSE\n\t\t\t\t\t      ,COAL-BIN-ROOM ,DIAL-ROOM>\n\t\t\t\t      <MOVE .F ,DIAL>)\n\t\t\t\t     (T\n\t\t\t\t      <MOVE .F ,HERE>)>)>\n\t\t\t<SET F .N>)\n\t\t       (T\n\t\t\t<RETURN>)>>\n\t <RTRUE>>"
  },
  "KILL-INTERRUPTS": {
   "name": "KILL-INTERRUPTS",
   "file": "verbs.zil",
   "line": 2984,
   "endLine": 3006,
   "source": "<ROUTINE KILL-INTERRUPTS ()\n\t <DISABLE <INT I-WAKE-UP>>\n\t <DISABLE <INT I-HELLHOUND>>\n\t <SETG HELLHOUND-WARNING <>>\n\t <DISABLE <INT I-BOA>>\n\t <SETG BOA-WARNING <>>\n\t <DISABLE <INT I-LOCUSTS>>\n\t <SETG LOCUST-WARNING 0>\n\t <DISABLE <INT I-SUFFOCATE>>\n\t <DISABLE <INT I-FLUME-TRIP>>\n\t <END-RIDE>\n\t <SETG ROOM-NUMBER 13>\n\t <SETG DORN-BEAST-ROOM 0>\n\t <SETG LAST-DORN-ROOM 0>\n\t <DISABLE <INT I-DORN-BEAST>>\t \n\t <SETG DORN-BEAST-WARNING <>>\n\t <FCLEAR ,DORN-BEAST ,NDESCBIT>\n\t <MOVE ,DORN-BEAST ,DIAL>\n\t <SETG FWEEPED <>>\n\t <SETG SUFFOCATE-WARNING <>>\n\t <DISABLE <INT I-UNFWEEP>>\n\t <DISABLE <INT I-BELBOZ-AWAKES>>\n\t <RTRUE>>"
  },
  "THIS-IS-IT": {
   "name": "THIS-IS-IT",
   "file": "verbs.zil",
   "line": 3010,
   "endLine": 3012,
   "source": "<ROUTINE THIS-IS-IT (OBJ)\n\t <SETG P-IT-OBJECT .OBJ>\n\t ;<SETG P-IT-LOC ,HERE>>"
  },
  "VISIBLE?": {
   "name": "VISIBLE?",
   "file": "verbs.zil",
   "line": 3040,
   "endLine": 3048,
   "source": "<ROUTINE VISIBLE? (OBJ \"AUX\" (L <LOC .OBJ>)) ;\"can player SEE object\"\n\t ;\"revised 5/2/84 by SEM and SWG\"\n\t <COND (<ACCESSIBLE? .OBJ>\n\t\t<RTRUE>)\n\t       (<AND <SEE-INSIDE? .L>\n\t\t     <VISIBLE? .L>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "OTHER-SIDE": {
   "name": "OTHER-SIDE",
   "file": "verbs.zil",
   "line": 3061,
   "endLine": 3069,
   "source": "<ROUTINE OTHER-SIDE (DOBJ \"AUX\" (P 0) TEE) ;\"finds room on other side of door\"\n\t <REPEAT ()\n\t\t <COND (<L? <SET P <NEXTP ,HERE .P>> ,LOW-DIRECTION>\n\t\t\t<RETURN <>>)\n\t\t       (T\n\t\t\t<SET TEE <GETPT ,HERE .P>>\n\t\t\t<COND (<AND <EQUAL? <PTSIZE .TEE> ,DEXIT>\n\t\t\t\t    <EQUAL? <GETB .TEE ,DEXITOBJ> .DOBJ>>\n\t\t\t       <RETURN .P>)>)>>>"
  },
  "NOTHING-HELD?": {
   "name": "NOTHING-HELD?",
   "file": "verbs.zil",
   "line": 3071,
   "endLine": 3079,
   "source": "<ROUTINE NOTHING-HELD? (\"AUX\" X N) ;\"is player empty-handed?\"\n\t <SET X <FIRST? ,PROTAGONIST>>\n\t <REPEAT ()\n\t\t <COND (.X\n\t\t\t<COND (<NOT <FSET? .X ,WEARBIT>>\n\t\t\t       <RFALSE>)>\n\t\t\t<SET X <NEXT? .X>>)\n\t\t       (T\n\t\t\t<RTRUE>)>>>"
  },
  "HELD?": {
   "name": "HELD?",
   "file": "verbs.zil",
   "line": 3081,
   "endLine": 3091,
   "source": "<ROUTINE HELD? (OBJ) ;\"is object carried, or in something carried, by player?\"\n\t <COND (<NOT .OBJ>\n\t\t<RFALSE>)\n\t       (<IN? .OBJ ,PROTAGONIST>\n\t\t<RTRUE>)\n\t       (<IN? .OBJ ,ROOMS>\n\t\t<RFALSE>)\n\t       (<IN? .OBJ ,GLOBAL-OBJECTS>\n\t\t<RFALSE>)\n\t       (T\n\t\t<HELD? <LOC .OBJ>>)>>"
  },
  "SEE-INSIDE?": {
   "name": "SEE-INSIDE?",
   "file": "verbs.zil",
   "line": 3093,
   "endLine": 3096,
   "source": "<ROUTINE SEE-INSIDE? (OBJ)\n\t <AND <NOT <FSET? .OBJ ,INVISIBLE>>\n\t      <OR <FSET? .OBJ ,TRANSBIT>\n\t          <FSET? .OBJ ,OPENBIT>>>>"
  },
  "GLOBAL-IN?": {
   "name": "GLOBAL-IN?",
   "file": "verbs.zil",
   "line": 3098,
   "endLine": 3100,
   "source": "<ROUTINE GLOBAL-IN? (OBJ1 OBJ2 \"AUX\" TEE)\n\t <COND (<SET TEE <GETPT .OBJ2 ,P?GLOBAL>>\n\t\t<ZMEMQB .OBJ1 .TEE <- <PTSIZE .TEE> 1>>)>>"
  },
  "FIND-IN": {
   "name": "FIND-IN",
   "file": "verbs.zil",
   "line": 3102,
   "endLine": 3110,
   "source": "<ROUTINE FIND-IN (WHERE WHAT \"AUX\" W)\n\t <SET W <FIRST? .WHERE>>\n\t <COND (<NOT .W>\n\t\t<RFALSE>)>\n\t <REPEAT ()\n\t\t <COND (<FSET? .W .WHAT>\n\t\t\t<RETURN .W>)\n\t\t       (<NOT <SET W <NEXT? .W>>>\n\t\t\t<RETURN <>>)>>>"
  },
  "DO-WALK": {
   "name": "DO-WALK",
   "file": "verbs.zil",
   "line": 3112,
   "endLine": 3114,
   "source": "<ROUTINE DO-WALK (DIR)\n\t <SETG P-WALK-DIR .DIR>\n\t <PERFORM ,V?WALK .DIR>>"
  },
  "ROB": {
   "name": "ROB",
   "file": "verbs.zil",
   "line": 3124,
   "endLine": 3131,
   "source": "<ROUTINE ROB (WHO \"AUX\" N X)\n\t <SET X <FIRST? .WHO>>\n\t <REPEAT ()\n\t\t <COND (<NOT .X>\n\t\t\t<RETURN>)>\n\t\t <SET N <NEXT? .X>>\n\t\t <MOVE .X ,DIAL>\n\t\t <SET X .N>>>"
  },
  "STOP": {
   "name": "STOP",
   "file": "verbs.zil",
   "line": 3133,
   "endLine": 3136,
   "source": "<ROUTINE STOP ()\n\t <SETG P-CONT <>>\n\t <SETG QUOTE-FLAG <>>\n\t <RFATAL>>"
  },
  "HACK-HACK": {
   "name": "HACK-HACK",
   "file": "verbs.zil",
   "line": 3138,
   "endLine": 3141,
   "source": "<ROUTINE HACK-HACK (STR)\n\t <TELL .STR>\n\t <ARTICLE ,PRSO T>\n\t <TELL <PICK-ONE ,HO-HUM> CR>>"
  },
  "OPEN-CLOSE": {
   "name": "OPEN-CLOSE",
   "file": "verbs.zil",
   "line": 3156,
   "endLine": 3166,
   "source": "<ROUTINE OPEN-CLOSE ()\n\t <COND (<AND <VERB? OPEN>\n\t\t     <FSET? ,PRSO ,OPENBIT>>\n\t\t<ALREADY-OPEN>\n\t\t<RTRUE>)\n\t       (<AND <VERB? CLOSE>\n\t\t     <NOT <FSET? ,PRSO ,OPENBIT>>>\n\t\t<ALREADY-CLOSED>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "SPACELESS-ARTICLE": {
   "name": "SPACELESS-ARTICLE",
   "file": "verbs.zil",
   "line": 3168,
   "endLine": 3177,
   "source": "<ROUTINE SPACELESS-ARTICLE (OBJ \"OPTIONAL\" (THE <>))\n\t <COND (<FSET? .OBJ ,NARTICLEBIT>\n\t\tT)\n\t       (.THE\n\t\t<TELL \"the \">)\n\t       (<FSET? .OBJ ,VOWELBIT>\n\t\t<TELL \"an \">)\n\t       (T\n\t\t<TELL \"a \">)>\n\t <PRINTD .OBJ>>"
  },
  "ARTICLE": {
   "name": "ARTICLE",
   "file": "verbs.zil",
   "line": 3179,
   "endLine": 3184,
   "source": "<ROUTINE ARTICLE (OBJ \"OPTIONAL\" (THE <>))\n\t <TELL \" \">\n\t <COND (.THE\n\t\t<SPACELESS-ARTICLE .OBJ T>)\n\t       (T\n\t\t<SPACELESS-ARTICLE .OBJ>)>>"
  },
  "CANT-ENTER": {
   "name": "CANT-ENTER",
   "file": "verbs.zil",
   "line": 3186,
   "endLine": 3193,
   "source": "<ROUTINE CANT-ENTER (LOC \"OPTIONAL\" (LEAVE <>))\n\t <TELL \"You can't \">\n\t <COND (.LEAVE\n\t\t<TELL \"leave\">)\n\t       (T\n\t\t<TELL \"enter\">)>\n\t <ARTICLE .LOC T>\n\t <TELL \" from here.\" CR>>"
  },
  "YOU-CANT-SEE-ANY": {
   "name": "YOU-CANT-SEE-ANY",
   "file": "verbs.zil",
   "line": 3195,
   "endLine": 3196,
   "source": "<ROUTINE YOU-CANT-SEE-ANY (STRING)\n\t <TELL \"You can't see any \" .STRING \" here!\" CR>>"
  },
  "WITH???": {
   "name": "WITH???",
   "file": "verbs.zil",
   "line": 3198,
   "endLine": 3201,
   "source": "<ROUTINE WITH??? ()\n\t <TELL \"With\">\n\t <ARTICLE ,PRSI>\n\t <TELL \"??!?\" CR>>"
  },
  "TELL-ME-HOW": {
   "name": "TELL-ME-HOW",
   "file": "verbs.zil",
   "line": 3203,
   "endLine": 3206,
   "source": "<ROUTINE TELL-ME-HOW ()\n\t <TELL \"You must tell me how to do that to\">\n\t <ARTICLE ,PRSO>\n\t <TELL \".\" CR>>"
  },
  "NOT-GOING-ANYWHERE": {
   "name": "NOT-GOING-ANYWHERE",
   "file": "verbs.zil",
   "line": 3208,
   "endLine": 3210,
   "source": "<ROUTINE NOT-GOING-ANYWHERE (VEHICLE)\n\t <TELL\n\"You're not going anywhere until you get out of the \" D .VEHICLE \".\" CR>>"
  },
  "SPLASH": {
   "name": "SPLASH",
   "file": "verbs.zil",
   "line": 3212,
   "endLine": 3215,
   "source": "<ROUTINE SPLASH ()\n\t <TELL \"With a splash,\">\n\t <ARTICLE ,PRSO T>\n\t <TELL \" plunges into the water.\" CR>>"
  },
  "BURIED-IN-COAL": {
   "name": "BURIED-IN-COAL",
   "file": "verbs.zil",
   "line": 3217,
   "endLine": 3221,
   "source": "<ROUTINE BURIED-IN-COAL (STRING)\n\t <MOVE ,PRSO ,DIAL>\n\t <TELL \"When you \" .STRING>\n\t <ARTICLE ,PRSO T>\n\t <TELL \" it falls between the lumps of coal and is buried.\" CR>>"
  },
  "LOOK-AROUND-YOU": {
   "name": "LOOK-AROUND-YOU",
   "file": "verbs.zil",
   "line": 3223,
   "endLine": 3224,
   "source": "<ROUTINE LOOK-AROUND-YOU ()\n\t <TELL \"Look around you.\" CR>>"
  },
  "BATTY": {
   "name": "BATTY",
   "file": "verbs.zil",
   "line": 3226,
   "endLine": 3227,
   "source": "<ROUTINE BATTY ()\n\t <TELL \"You're batty!\" CR>>"
  },
  "TOO-DARK": {
   "name": "TOO-DARK",
   "file": "verbs.zil",
   "line": 3229,
   "endLine": 3236,
   "source": "<ROUTINE TOO-DARK ()\n\t <TELL \"It's too dark to see\">\n\t <COND (,FWEEPED\n\t\t<TELL\n\", and your bat sonar-sense isn't of much help, either.\">)\n\t       (T\n\t\t<TELL \"!\">)>\n\t <CRLF>>"
  },
  "WHILE-FLYING": {
   "name": "WHILE-FLYING",
   "file": "verbs.zil",
   "line": 3238,
   "endLine": 3239,
   "source": "<ROUTINE WHILE-FLYING ()\n\t <TELL \"While flying?\" CR>>"
  },
  "CANT-GO": {
   "name": "CANT-GO",
   "file": "verbs.zil",
   "line": 3241,
   "endLine": 3242,
   "source": "<ROUTINE CANT-GO ()\n\t <TELL \"You can't go that way.\" CR>>"
  },
  "NOW-BLACK": {
   "name": "NOW-BLACK",
   "file": "verbs.zil",
   "line": 3244,
   "endLine": 3245,
   "source": "<ROUTINE NOW-BLACK ()\n\t <TELL \"It is now pitch black.\" CR>>"
  },
  "ALREADY-OPEN": {
   "name": "ALREADY-OPEN",
   "file": "verbs.zil",
   "line": 3247,
   "endLine": 3248,
   "source": "<ROUTINE ALREADY-OPEN ()\n\t <TELL \"It is already open.\" CR>>"
  },
  "ALREADY-CLOSED": {
   "name": "ALREADY-CLOSED",
   "file": "verbs.zil",
   "line": 3250,
   "endLine": 3251,
   "source": "<ROUTINE ALREADY-CLOSED ()\n\t <TELL \"It is already closed.\" CR>>"
  },
  "MAKE-OUT": {
   "name": "MAKE-OUT",
   "file": "verbs.zil",
   "line": 3253,
   "endLine": 3254,
   "source": "<ROUTINE MAKE-OUT ()\n\t <TELL \"You can't make out anything.\" CR>>"
  },
  "BOOK-DAMP": {
   "name": "BOOK-DAMP",
   "file": "verbs.zil",
   "line": 3256,
   "endLine": 3257,
   "source": "<ROUTINE BOOK-DAMP ()\n\t <TELL \"The book is damp and the writing unreadable.\" CR>>"
  },
  "REFERRING": {
   "name": "REFERRING",
   "file": "verbs.zil",
   "line": 3259,
   "endLine": 3260,
   "source": "<ROUTINE REFERRING ()\n\t <TELL \"I don't see what you're referring to.\" CR>>"
  },
  "POOR-LISTENERS": {
   "name": "POOR-LISTENERS",
   "file": "verbs.zil",
   "line": 3262,
   "endLine": 3263,
   "source": "<ROUTINE POOR-LISTENERS ()\n\t <TELL \"Sleeping gnomes make poor listeners.\" CR>>"
  },
  "SETTLE-ONTO-BRANCH": {
   "name": "SETTLE-ONTO-BRANCH",
   "file": "verbs.zil",
   "line": 3268,
   "endLine": 3269,
   "source": "<ROUTINE SETTLE-ONTO-BRANCH ()\n\t <TELL \"You settle onto the branch.\" CR>>"
  },
  "SPLASH-INTO-WATER": {
   "name": "SPLASH-INTO-WATER",
   "file": "verbs.zil",
   "line": 3271,
   "endLine": 3272,
   "source": "<ROUTINE SPLASH-INTO-WATER ()\n\t <TELL \"You splash down into the water.\" CR>>"
  }
 },
 "globals": {
  "HELLHOUND-WARNING": {
   "name": "HELLHOUND-WARNING",
   "kind": "global",
   "file": "belboz.zil",
   "line": 57,
   "value": "<>"
  },
  "BOA-WARNING": {
   "name": "BOA-WARNING",
   "kind": "global",
   "file": "belboz.zil",
   "line": 125,
   "value": "<>"
  },
  "LOCUST-WARNING": {
   "name": "LOCUST-WARNING",
   "kind": "global",
   "file": "belboz.zil",
   "line": 341,
   "value": "0"
  },
  "BANK-COUNTER": {
   "name": "BANK-COUNTER",
   "kind": "global",
   "file": "belboz.zil",
   "line": 379,
   "value": "0"
  },
  "RIVER-EVAPORATED": {
   "name": "RIVER-EVAPORATED",
   "kind": "global",
   "file": "belboz.zil",
   "line": 410,
   "value": "<>"
  },
  "BLORTED": {
   "name": "BLORTED",
   "kind": "global",
   "file": "belboz.zil",
   "line": 768,
   "value": "<>"
  },
  "FWEEPED": {
   "name": "FWEEPED",
   "kind": "global",
   "file": "belboz.zil",
   "line": 801,
   "value": "<>"
  },
  "DRAWBRIDGE-MOVE": {
   "name": "DRAWBRIDGE-MOVE",
   "kind": "global",
   "file": "belboz.zil",
   "line": 835,
   "value": "<>"
  },
  "GNOME-SLEEPING": {
   "name": "GNOME-SLEEPING",
   "kind": "global",
   "file": "belboz.zil",
   "line": 1201,
   "value": "T"
  },
  "COIN-STOLEN": {
   "name": "COIN-STOLEN",
   "kind": "global",
   "file": "belboz.zil",
   "line": 1287,
   "value": "<>"
  },
  "PATIENCE-COUNTER": {
   "name": "PATIENCE-COUNTER",
   "kind": "global",
   "file": "belboz.zil",
   "line": 1294,
   "value": "0"
  },
  "GNOME-ANNOYED": {
   "name": "GNOME-ANNOYED",
   "kind": "global",
   "file": "belboz.zil",
   "line": 1296,
   "value": "<>"
  },
  "DRAGON-MOVED": {
   "name": "DRAGON-MOVED",
   "kind": "global",
   "file": "belboz.zil",
   "line": 1672,
   "value": "<>"
  },
  "MALYON-YONKED": {
   "name": "MALYON-YONKED",
   "kind": "global",
   "file": "belboz.zil",
   "line": 1674,
   "value": "<>"
  },
  "YOUNGER-HAS-SPELL-BOOK": {
   "name": "YOUNGER-HAS-SPELL-BOOK",
   "kind": "global",
   "file": "coal.zil",
   "line": 100,
   "value": "<>"
  },
  "BOOK-BELONGS-IN-LAGOON": {
   "name": "BOOK-BELONGS-IN-LAGOON",
   "kind": "global",
   "file": "coal.zil",
   "line": 102,
   "value": "<>"
  },
  "SUFFOCATE-WARNING": {
   "name": "SUFFOCATE-WARNING",
   "kind": "global",
   "file": "coal.zil",
   "line": 104,
   "value": "<>"
  },
  "MOVE-ONE-TABLE": {
   "name": "MOVE-ONE-TABLE",
   "kind": "global",
   "file": "coal.zil",
   "line": 286,
   "value": "<TABLE 0 0 0 0>"
  },
  "MOVE-TWO-TABLE": {
   "name": "MOVE-TWO-TABLE",
   "kind": "global",
   "file": "coal.zil",
   "line": 289,
   "value": "<TABLE 0 0 0 0>"
  },
  "MOVE-THREE-TABLE": {
   "name": "MOVE-THREE-TABLE",
   "kind": "global",
   "file": "coal.zil",
   "line": 292,
   "value": "<TABLE 0 0 0 0>"
  },
  "OLDER-COUNTER": {
   "name": "OLDER-COUNTER",
   "kind": "global",
   "file": "coal.zil",
   "line": 295,
   "value": "0"
  },
  "COMBO-DISCOVERED": {
   "name": "COMBO-DISCOVERED",
   "kind": "global",
   "file": "coal.zil",
   "line": 297,
   "value": "<>"
  },
  "OLDER-INTRODUCED": {
   "name": "OLDER-INTRODUCED",
   "kind": "global",
   "file": "coal.zil",
   "line": 299,
   "value": "<>"
  },
  "OLDER-INTRO": {
   "name": "OLDER-INTRO",
   "kind": "global",
   "file": "coal.zil",
   "line": 301,
   "value": "\"Although your clothes are much cleaner and less torn, the stranger looks\nvirtually like your own twin!\""
  },
  "TWIN-FOLLOW": {
   "name": "TWIN-FOLLOW",
   "kind": "global",
   "file": "coal.zil",
   "line": 383,
   "value": "<>"
  },
  "COMBO-REVEALED": {
   "name": "COMBO-REVEALED",
   "kind": "global",
   "file": "coal.zil",
   "line": 408,
   "value": "<>"
  },
  "YOUNGER-COUNTER": {
   "name": "YOUNGER-COUNTER",
   "kind": "global",
   "file": "coal.zil",
   "line": 484,
   "value": "0"
  },
  "COAL-DOOR-POINT": {
   "name": "COAL-DOOR-POINT",
   "kind": "global",
   "file": "coal.zil",
   "line": 683,
   "value": "20"
  },
  "CURRENT-SETTING": {
   "name": "CURRENT-SETTING",
   "kind": "global",
   "file": "coal.zil",
   "line": 737,
   "value": "0"
  },
  "DIAL-OPEN": {
   "name": "DIAL-OPEN",
   "kind": "global",
   "file": "coal.zil",
   "line": 739,
   "value": "<>"
  },
  "COMBO": {
   "name": "COMBO",
   "kind": "global",
   "file": "coal.zil",
   "line": 741,
   "value": "0"
  },
  "ROPE-TO-BEAM": {
   "name": "ROPE-TO-BEAM",
   "kind": "global",
   "file": "coal.zil",
   "line": 752,
   "value": "<>"
  },
  "ROPE-PLACED": {
   "name": "ROPE-PLACED",
   "kind": "global",
   "file": "coal.zil",
   "line": 754,
   "value": "<>"
  },
  "ROPE-IN-LOWER-CHUTE": {
   "name": "ROPE-IN-LOWER-CHUTE",
   "kind": "global",
   "file": "coal.zil",
   "line": 756,
   "value": "<>"
  },
  "TROG-FOLLOW": {
   "name": "TROG-FOLLOW",
   "kind": "global",
   "file": "coal.zil",
   "line": 955,
   "value": "<>"
  },
  "GOLMACKED": {
   "name": "GOLMACKED",
   "kind": "global",
   "file": "coal.zil",
   "line": 1121,
   "value": "<>"
  },
  "POOFED": {
   "name": "POOFED",
   "kind": "global",
   "file": "end.zil",
   "line": 27,
   "value": "<>"
  },
  "UNDERWATER-COUNTER": {
   "name": "UNDERWATER-COUNTER",
   "kind": "global",
   "file": "end.zil",
   "line": 280,
   "value": "0"
  },
  "CRATE-POINT": {
   "name": "CRATE-POINT",
   "kind": "global",
   "file": "end.zil",
   "line": 369,
   "value": "<>"
  },
  "SPRAY-USED?": {
   "name": "SPRAY-USED?",
   "kind": "global",
   "file": "end.zil",
   "line": 438,
   "value": "<>"
  },
  "SPRAYED?": {
   "name": "SPRAYED?",
   "kind": "global",
   "file": "end.zil",
   "line": 440,
   "value": "<>"
  },
  "CAVERN-POINT": {
   "name": "CAVERN-POINT",
   "kind": "global",
   "file": "end.zil",
   "line": 610,
   "value": "20"
  },
  "WHITE-DOOR-SCORE": {
   "name": "WHITE-DOOR-SCORE",
   "kind": "global",
   "file": "end.zil",
   "line": 760,
   "value": "20"
  },
  "VARDIKED": {
   "name": "VARDIKED",
   "kind": "global",
   "file": "end.zil",
   "line": 775,
   "value": "<>"
  },
  "BELBOZ-DEAD": {
   "name": "BELBOZ-DEAD",
   "kind": "global",
   "file": "end.zil",
   "line": 783,
   "value": "<>"
  },
  "BELBOZ-GASPARED": {
   "name": "BELBOZ-GASPARED",
   "kind": "global",
   "file": "end.zil",
   "line": 785,
   "value": "<>"
  },
  "FLAG-RAISED": {
   "name": "FLAG-RAISED",
   "kind": "global",
   "file": "fort.zil",
   "line": 103,
   "value": "T"
  },
  "FOOBLE-FOUND": {
   "name": "FOOBLE-FOUND",
   "kind": "global",
   "file": "fort.zil",
   "line": 105,
   "value": "<>"
  },
  "FOOBLED": {
   "name": "FOOBLED",
   "kind": "global",
   "file": "fort.zil",
   "line": 220,
   "value": "<>"
  },
  "BITTEN": {
   "name": "BITTEN",
   "kind": "global",
   "file": "fort.zil",
   "line": 358,
   "value": "<>"
  },
  "HERE": {
   "name": "HERE",
   "kind": "global",
   "file": "gparser.zil",
   "line": 31,
   "value": "0"
  },
  "LOAD-ALLOWED": {
   "name": "LOAD-ALLOWED",
   "kind": "global",
   "file": "globals.zil",
   "line": 11,
   "value": "100"
  },
  "LOAD-MAX": {
   "name": "LOAD-MAX",
   "kind": "global",
   "file": "globals.zil",
   "line": 13,
   "value": "100"
  },
  "LIT": {
   "name": "LIT",
   "kind": "global",
   "file": "globals.zil",
   "line": 15,
   "value": "T"
  },
  "MOVES": {
   "name": "MOVES",
   "kind": "global",
   "file": "globals.zil",
   "line": 17,
   "value": "0"
  },
  "SCORE": {
   "name": "SCORE",
   "kind": "global",
   "file": "globals.zil",
   "line": 19,
   "value": "0"
  },
  "INDENTS": {
   "name": "INDENTS",
   "kind": "global",
   "file": "globals.zil",
   "line": 21,
   "value": "<PTABLE \"\" \"  \" \"    \" \"      \" \"        \" \"          \">"
  },
  "HELISTARISMS": {
   "name": "HELISTARISMS",
   "kind": "global",
   "file": "globals.zil",
   "line": 801,
   "value": "<PLTABLE \"skydiving near the mountains of Gurth. Not having a parachute, your\ndescent is considerably faster\" \"scuba diving in the Sea of Mithicus. Before you can drown, a ferocious\nsea lion devours you\" \"sharpening her bullfighting skills. The crowd cheers wildly as\nthe bull gores you with its horns\">"
  },
  "FROBARISMS": {
   "name": "FROBARISMS",
   "kind": "global",
   "file": "globals.zil",
   "line": 824,
   "value": "<PLTABLE \"shopping in the marketplace. A horse-drawn chariot runs you down, trampling\nyou beneath dozens of hooves\" \"crossing the bridge over Razor Gorge between town and the Guild Hall.\nUnfortunately, you didn't quite make the bridge, and plummet onto nasty\nrocks below\" \"praying in the town's temple. Angered by your sacrilegious violation of\nthe ceremony, the priests skewer you with several handy sacred ornaments\">"
  },
  "FLYING": {
   "name": "FLYING",
   "kind": "global",
   "file": "globals.zil",
   "line": 1006,
   "value": "<>"
  },
  "FORGET-TBL": {
   "name": "FORGET-TBL",
   "kind": "global",
   "file": "globals.zil",
   "line": 1195,
   "value": "<LTABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "REAL-SPELL-MAX": {
   "name": "REAL-SPELL-MAX",
   "kind": "global",
   "file": "globals.zil",
   "line": 1229,
   "value": "4"
  },
  "SPELL-MAX": {
   "name": "SPELL-MAX",
   "kind": "global",
   "file": "globals.zil",
   "line": 1230,
   "value": "4"
  },
  "SPELL-ROOM": {
   "name": "SPELL-ROOM",
   "kind": "global",
   "file": "globals.zil",
   "line": 1231,
   "value": "3"
  },
  "MANUFACTURERS": {
   "name": "MANUFACTURERS",
   "kind": "global",
   "file": "globals.zil",
   "line": 1233,
   "value": "<PLTABLE \"Borphee Infotaters Incorporated\" \"SpellBound\" \"SoftSpel\" \"International Business Magic\" \"Spell Shack\" \"United Thaumaturgy\" \"Smoothscroll Draughtsmen\" \"Frobozz Magic Spell Company\">"
  },
  "POTION-MAKERS": {
   "name": "POTION-MAKERS",
   "kind": "global",
   "file": "globals.zil",
   "line": 1252,
   "value": "<PTABLE 0 \"Fibbsbozza\" \"Magicland\" \"Frobozz Magic Potion Company\">"
  },
  "UNDER-INFLUENCE": {
   "name": "UNDER-INFLUENCE",
   "kind": "global",
   "file": "globals.zil",
   "line": 1274,
   "value": "<>"
  },
  "POTION-REACTIONS": {
   "name": "POTION-REACTIONS",
   "kind": "global",
   "file": "globals.zil",
   "line": 1282,
   "value": "<PLTABLE \"You turn into a spot of moss\" \"Your left ear turns into a carnivorous toad and devours your brain\" \"Your entire body, starting from the toes and moving upward, turns\ninto gelatin\" \"Certain parts of your anatomy, including your pulmonary artery and\nadrenal gland, suddenly teleport seven feet to the west\">"
  },
  "SLEEPING": {
   "name": "SLEEPING",
   "kind": "global",
   "file": "globals.zil",
   "line": 1295,
   "value": "T"
  },
  "AWAKE": {
   "name": "AWAKE",
   "kind": "global",
   "file": "globals.zil",
   "line": 1297,
   "value": "-1"
  },
  "LAST-SLEPT": {
   "name": "LAST-SLEPT",
   "kind": "global",
   "file": "globals.zil",
   "line": 1299,
   "value": "40"
  },
  "DREAMS": {
   "name": "DREAMS",
   "kind": "global",
   "file": "globals.zil",
   "line": 1351,
   "value": "<PLTABLE \"You dream of being pursued through a dank cavern. Something is behind\nyou, something horrible that you can't turn to face. It gets closer and\ncloser, and you can feel its hot breath on your neck.\" \"You dream of an idyllic scene in the country, a picnic of wood-sprites\nand dryads.\" \"You dream of dancing penguins in formal dress. One has a particularly\nnice tuxedo and a cane with a gold top.\" \"You dream of a river, slow and muddy. Great grey hippopotami sport there,\nbellowing and splashing, and twitching their ears.\">"
  },
  "HUNGER-LEVEL": {
   "name": "HUNGER-LEVEL",
   "kind": "global",
   "file": "globals.zil",
   "line": 1367,
   "value": "0"
  },
  "THIRST-LEVEL": {
   "name": "THIRST-LEVEL",
   "kind": "global",
   "file": "globals.zil",
   "line": 1369,
   "value": "0"
  },
  "HUNGER-THIRST-TABLE": {
   "name": "HUNGER-THIRST-TABLE",
   "kind": "global",
   "file": "globals.zil",
   "line": 1405,
   "value": "<PTABLE \"a bit\" \"somewhat\" \"quite\" \"very\" \"extremely\" \"incredibly\" \"dangerously\">"
  },
  "PRSA": {
   "name": "PRSA",
   "kind": "global",
   "file": "parser.zil",
   "line": 10,
   "value": "<>"
  },
  "PRSI": {
   "name": "PRSI",
   "kind": "global",
   "file": "parser.zil",
   "line": 12,
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
   "line": 18,
   "value": "0"
  },
  "P-SYNTAX": {
   "name": "P-SYNTAX",
   "kind": "global",
   "file": "parser.zil",
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
   "file": "parser.zil",
   "line": 24,
   "value": "0"
  },
  "P-DIR": {
   "name": "P-DIR",
   "kind": "global",
   "file": "parser.zil",
   "line": 26,
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
   "line": 35,
   "value": "<ITABLE BYTE 60>"
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
   "line": 38,
   "value": "<>"
  },
  "P-IT-OBJECT": {
   "name": "P-IT-OBJECT",
   "kind": "global",
   "file": "parser.zil",
   "line": 40,
   "value": "<>"
  },
  "P-OFLAG": {
   "name": "P-OFLAG",
   "kind": "global",
   "file": "parser.zil",
   "line": 48,
   "value": "<>"
  },
  "P-MERGED": {
   "name": "P-MERGED",
   "kind": "global",
   "file": "parser.zil",
   "line": 50,
   "value": "<>"
  },
  "P-ACLAUSE": {
   "name": "P-ACLAUSE",
   "kind": "global",
   "file": "parser.zil",
   "line": 52,
   "value": "<>"
  },
  "P-ANAM": {
   "name": "P-ANAM",
   "kind": "global",
   "file": "parser.zil",
   "line": 54,
   "value": "<>"
  },
  "P-AADJ": {
   "name": "P-AADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 56,
   "value": "<>"
  },
  "P-LEXWORDS": {
   "name": "P-LEXWORDS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 66,
   "value": "1"
  },
  "P-LEXSTART": {
   "name": "P-LEXSTART",
   "kind": "constant",
   "file": "parser.zil",
   "line": 67,
   "value": "1"
  },
  "P-LEXELEN": {
   "name": "P-LEXELEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 68,
   "value": "2"
  },
  "P-WORDLEN": {
   "name": "P-WORDLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 69,
   "value": "4"
  },
  "P-PSOFF": {
   "name": "P-PSOFF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 70,
   "value": "4"
  },
  "P-P1OFF": {
   "name": "P-P1OFF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 71,
   "value": "5"
  },
  "P-P1BITS": {
   "name": "P-P1BITS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 72,
   "value": "3"
  },
  "P-ITBLLEN": {
   "name": "P-ITBLLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 73,
   "value": "9"
  },
  "P-ITBL": {
   "name": "P-ITBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 75,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-OTBL": {
   "name": "P-OTBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 77,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-VTBL": {
   "name": "P-VTBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 79,
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
   "line": 81,
   "value": "0"
  },
  "P-VERB": {
   "name": "P-VERB",
   "kind": "constant",
   "file": "parser.zil",
   "line": 83,
   "value": "0"
  },
  "P-VERBN": {
   "name": "P-VERBN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 84,
   "value": "1"
  },
  "P-PREP1": {
   "name": "P-PREP1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 85,
   "value": "2"
  },
  "P-PREP1N": {
   "name": "P-PREP1N",
   "kind": "constant",
   "file": "parser.zil",
   "line": 86,
   "value": "3"
  },
  "P-PREP2": {
   "name": "P-PREP2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 87,
   "value": "4"
  },
  "P-PREP2N": {
   "name": "P-PREP2N",
   "kind": "constant",
   "file": "parser.zil",
   "line": 88,
   "value": "5"
  },
  "P-NC1": {
   "name": "P-NC1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 89,
   "value": "6"
  },
  "P-NC1L": {
   "name": "P-NC1L",
   "kind": "constant",
   "file": "parser.zil",
   "line": 90,
   "value": "7"
  },
  "P-NC2": {
   "name": "P-NC2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 91,
   "value": "8"
  },
  "P-NC2L": {
   "name": "P-NC2L",
   "kind": "constant",
   "file": "parser.zil",
   "line": 92,
   "value": "9"
  },
  "QUOTE-FLAG": {
   "name": "QUOTE-FLAG",
   "kind": "global",
   "file": "parser.zil",
   "line": 94,
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
   "line": 401,
   "value": "<>"
  },
  "P-WALK-DIR": {
   "name": "P-WALK-DIR",
   "kind": "global",
   "file": "parser.zil",
   "line": 274,
   "value": "<>"
  },
  "AGAIN-DIR": {
   "name": "AGAIN-DIR",
   "kind": "global",
   "file": "gparser.zil",
   "line": 403,
   "value": "<>"
  },
  "P-NUMBER": {
   "name": "P-NUMBER",
   "kind": "global",
   "file": "parser.zil",
   "line": 395,
   "value": "0"
  },
  "P-SLOCBITS": {
   "name": "P-SLOCBITS",
   "kind": "global",
   "file": "parser.zil",
   "line": 493,
   "value": "0"
  },
  "P-SYNLEN": {
   "name": "P-SYNLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 495,
   "value": "8"
  },
  "P-SBITS": {
   "name": "P-SBITS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 497,
   "value": "0"
  },
  "P-SPREP1": {
   "name": "P-SPREP1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 499,
   "value": "1"
  },
  "P-SPREP2": {
   "name": "P-SPREP2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 501,
   "value": "2"
  },
  "P-SFWIM1": {
   "name": "P-SFWIM1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 503,
   "value": "3"
  },
  "P-SFWIM2": {
   "name": "P-SFWIM2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 505,
   "value": "4"
  },
  "P-SLOC1": {
   "name": "P-SLOC1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 507,
   "value": "5"
  },
  "P-SLOC2": {
   "name": "P-SLOC2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 509,
   "value": "6"
  },
  "P-SACTION": {
   "name": "P-SACTION",
   "kind": "constant",
   "file": "parser.zil",
   "line": 511,
   "value": "7"
  },
  "P-SONUMS": {
   "name": "P-SONUMS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 513,
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
   "line": 734,
   "value": "<>"
  },
  "P-ADJ": {
   "name": "P-ADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 736,
   "value": "<>"
  },
  "P-ADVERB": {
   "name": "P-ADVERB",
   "kind": "global",
   "file": "parser.zil",
   "line": 738,
   "value": "<>"
  },
  "P-ADJN": {
   "name": "P-ADJN",
   "kind": "global",
   "file": "parser.zil",
   "line": 740,
   "value": "<>"
  },
  "P-PRSO": {
   "name": "P-PRSO",
   "kind": "global",
   "file": "parser.zil",
   "line": 742,
   "value": "<ITABLE NONE 25>"
  },
  "P-PRSI": {
   "name": "P-PRSI",
   "kind": "global",
   "file": "parser.zil",
   "line": 744,
   "value": "<ITABLE NONE 25>"
  },
  "P-BUTS": {
   "name": "P-BUTS",
   "kind": "global",
   "file": "parser.zil",
   "line": 746,
   "value": "<ITABLE NONE 25>"
  },
  "P-MERGE": {
   "name": "P-MERGE",
   "kind": "global",
   "file": "parser.zil",
   "line": 748,
   "value": "<ITABLE NONE 25>"
  },
  "P-OCLAUSE": {
   "name": "P-OCLAUSE",
   "kind": "global",
   "file": "parser.zil",
   "line": 750,
   "value": "<ITABLE NONE 25>"
  },
  "P-MATCHLEN": {
   "name": "P-MATCHLEN",
   "kind": "global",
   "file": "parser.zil",
   "line": 752,
   "value": "0"
  },
  "P-GETFLAGS": {
   "name": "P-GETFLAGS",
   "kind": "global",
   "file": "parser.zil",
   "line": 754,
   "value": "0"
  },
  "P-ALL": {
   "name": "P-ALL",
   "kind": "constant",
   "file": "parser.zil",
   "line": 756,
   "value": "1"
  },
  "P-ONE": {
   "name": "P-ONE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 758,
   "value": "2"
  },
  "P-INHIBIT": {
   "name": "P-INHIBIT",
   "kind": "constant",
   "file": "parser.zil",
   "line": 760,
   "value": "4"
  },
  "P-AND": {
   "name": "P-AND",
   "kind": "global",
   "file": "gparser.zil",
   "line": 1008,
   "value": "<>"
  },
  "SH": {
   "name": "SH",
   "kind": "constant",
   "file": "parser.zil",
   "line": 825,
   "value": "128"
  },
  "SC": {
   "name": "SC",
   "kind": "constant",
   "file": "parser.zil",
   "line": 827,
   "value": "64"
  },
  "SIR": {
   "name": "SIR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 829,
   "value": "32"
  },
  "SOG": {
   "name": "SOG",
   "kind": "constant",
   "file": "parser.zil",
   "line": 831,
   "value": "16"
  },
  "STAKE": {
   "name": "STAKE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 833,
   "value": "8"
  },
  "SMANY": {
   "name": "SMANY",
   "kind": "constant",
   "file": "parser.zil",
   "line": 835,
   "value": "4"
  },
  "SHAVE": {
   "name": "SHAVE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 837,
   "value": "2"
  },
  "P-XNAM": {
   "name": "P-XNAM",
   "kind": "global",
   "file": "parser.zil",
   "line": 1008,
   "value": "<>"
  },
  "P-XADJ": {
   "name": "P-XADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 1009,
   "value": "<>"
  },
  "P-XADJN": {
   "name": "P-XADJN",
   "kind": "global",
   "file": "parser.zil",
   "line": 1010,
   "value": "<>"
  },
  "LAST-PSEUDO-LOC": {
   "name": "LAST-PSEUDO-LOC",
   "kind": "global",
   "file": "parser.zil",
   "line": 42,
   "value": "<>"
  },
  "P-SRCBOT": {
   "name": "P-SRCBOT",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1076,
   "value": "2"
  },
  "P-SRCTOP": {
   "name": "P-SRCTOP",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1078,
   "value": "0"
  },
  "P-SRCALL": {
   "name": "P-SRCALL",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1080,
   "value": "1"
  },
  "ALWAYS-LIT": {
   "name": "ALWAYS-LIT",
   "kind": "global",
   "file": "parser.zil",
   "line": 1201,
   "value": "<>"
  },
  "PARROTISMS": {
   "name": "PARROTISMS",
   "kind": "global",
   "file": "guild.zil",
   "line": 112,
   "value": "<PLTABLE \"Pollibar want a cracker!\" \"Now where can I hide this key?\" \"You should never have let down your mindshield, you\ndoddering old Enchanter.\" \"This tea is cold! Get me another cup.\" \"Where did I leave my spectacles?\" \"Belboz, the Circle is waiting for you.\">"
  },
  "RESURRECTION-ROOM": {
   "name": "RESURRECTION-ROOM",
   "kind": "global",
   "file": "guild.zil",
   "line": 490,
   "value": "<>"
  },
  "TABLE-WARNING": {
   "name": "TABLE-WARNING",
   "kind": "global",
   "file": "guild.zil",
   "line": 608,
   "value": "<>"
  },
  "MAILMAN-FOLLOW": {
   "name": "MAILMAN-FOLLOW",
   "kind": "global",
   "file": "guild.zil",
   "line": 690,
   "value": "<>"
  },
  "VILSTUED": {
   "name": "VILSTUED",
   "kind": "global",
   "file": "guild.zil",
   "line": 774,
   "value": "<>"
  },
  "BREATH-SHORTAGE": {
   "name": "BREATH-SHORTAGE",
   "kind": "global",
   "file": "guild.zil",
   "line": 776,
   "value": "0"
  },
  "VOLUME-USED": {
   "name": "VOLUME-USED",
   "kind": "global",
   "file": "guild.zil",
   "line": 868,
   "value": "<>"
  },
  "BERZIOED": {
   "name": "BERZIOED",
   "kind": "global",
   "file": "guild.zil",
   "line": 932,
   "value": "<>"
  },
  "CODE-NUMBER": {
   "name": "CODE-NUMBER",
   "kind": "global",
   "file": "guild.zil",
   "line": 1032,
   "value": "0"
  },
  "CODE-TABLE": {
   "name": "CODE-TABLE",
   "kind": "global",
   "file": "guild.zil",
   "line": 1034,
   "value": "<PTABLE 0 \"bloodworm\" \"brogmoid\" \"dorn\" \"dryad\" \"grue\" \"hellhound\" \"kobold\" \"nabiz\" \"orc\" \"rotgrub\" \"surmin\" \"yipple\">"
  },
  "CURRENT-TLOC": {
   "name": "CURRENT-TLOC",
   "kind": "global",
   "file": "guild.zil",
   "line": 1050,
   "value": "0"
  },
  "NEXT-NUMBER": {
   "name": "NEXT-NUMBER",
   "kind": "global",
   "file": "guild.zil",
   "line": 1052,
   "value": "0"
  },
  "NEXT-CODE-TABLE": {
   "name": "NEXT-CODE-TABLE",
   "kind": "global",
   "file": "guild.zil",
   "line": 1054,
   "value": "<PTABLE ;\"1=black, 2=gray, 3=red, 4=purple, 5=white\" 0 0 0 0 0 0 5 2 1 3 1 0 ;bloodworm 3 4 3 1 4 0 ;brogmoid 2 4 1 2 5 0 ;dorn 1 2 5 3 3 0 ;dryad 1 1 3 1 4 0 ;grue 4 5 2 3 2 0 ;hellhound 3 4 1 4 3 0 ;kobold 4 1 1 1 3 0 ;nabiz 3 2 4 2 3 0 ;orc 2 3 2 4 3 0 ;rotgrub 1 1 4 3 1 0 ;surmin 2 4 5 4 1 0 ;yipple>"
  },
  "TRUNK-SCREWED": {
   "name": "TRUNK-SCREWED",
   "kind": "global",
   "file": "guild.zil",
   "line": 1137,
   "value": "<>"
  },
  "STATUE-FOLLOW": {
   "name": "STATUE-FOLLOW",
   "kind": "global",
   "file": "maze.zil",
   "line": 169,
   "value": "<>"
  },
  "MAZE-CROSSED": {
   "name": "MAZE-CROSSED",
   "kind": "global",
   "file": "maze.zil",
   "line": 463,
   "value": "<>"
  },
  "ROOM-NUMBER": {
   "name": "ROOM-NUMBER",
   "kind": "global",
   "file": "maze.zil",
   "line": 465,
   "value": "13"
  },
  "PRE-UP-EXITS": {
   "name": "PRE-UP-EXITS",
   "kind": "global",
   "file": "maze.zil",
   "line": 489,
   "value": "<PTABLE 0 10 0 12 0 0 0 16 0 0 0 20 21 0 0 0 0 26 0 0 0 0 0 0 0 0 0 0>"
  },
  "PRE-DOWN-EXITS": {
   "name": "PRE-DOWN-EXITS",
   "kind": "global",
   "file": "maze.zil",
   "line": 495,
   "value": "<PTABLE 0 0 0 0 0 0 0 0 0 0 1 0 3 0 0 0 7 0 0 0 11 12 0 0 0 0 17 0>"
  },
  "PRE-NORTH-EXITS": {
   "name": "PRE-NORTH-EXITS",
   "kind": "global",
   "file": "maze.zil",
   "line": 501,
   "value": "<PTABLE 0 0 0 0 1 2 3 0 0 6 0 0 0 10 11 0 0 14 15 0 0 0 0 0 21 22 0 0>"
  },
  "PRE-SOUTH-EXITS": {
   "name": "PRE-SOUTH-EXITS",
   "kind": "global",
   "file": "maze.zil",
   "line": 507,
   "value": "<PTABLE 0 4 5 6 0 0 9 0 0 0 13 14 0 0 17 18 0 0 0 0 0 24 25 0 0 0 0 0>"
  },
  "PRE-EAST-EXITS": {
   "name": "PRE-EAST-EXITS",
   "kind": "global",
   "file": "maze.zil",
   "line": 513,
   "value": "<PTABLE 0 0 0 0 5 0 0 8 9 0 11 0 0 0 0 0 17 18 0 20 0 0 23 0 30 26 27 0>"
  },
  "PRE-WEST-EXITS": {
   "name": "PRE-WEST-EXITS",
   "kind": "global",
   "file": "maze.zil",
   "line": 519,
   "value": "<PTABLE 0 0 0 0 0 4 0 0 7 8 0 10 0 40 0 0 0 16 17 0 19 0 0 22 0 0 25 26>"
  },
  "POST-UP-EXITS": {
   "name": "POST-UP-EXITS",
   "kind": "global",
   "file": "maze.zil",
   "line": 525,
   "value": "<PTABLE 0 0 0 12 13 0 0 16 0 18 19 20 0 0 0 0 25 0 27 0 0 0 0 0 0 0 0 0>"
  },
  "POST-DOWN-EXITS": {
   "name": "POST-DOWN-EXITS",
   "kind": "global",
   "file": "maze.zil",
   "line": 531,
   "value": "<PTABLE 0 0 0 0 0 0 0 0 0 0 0 0 3 4 0 0 7 0 9 10 11 0 0 0 0 16 0 18>"
  },
  "POST-NORTH-EXITS": {
   "name": "POST-NORTH-EXITS",
   "kind": "global",
   "file": "maze.zil",
   "line": 537,
   "value": "<PTABLE 0 0 0 0 1 2 3 0 0 0 0 0 0 0 11 12 0 0 0 0 0 0 19 0 0 22 23 0>"
  },
  "POST-SOUTH-EXITS": {
   "name": "POST-SOUTH-EXITS",
   "kind": "global",
   "file": "maze.zil",
   "line": 543,
   "value": "<PTABLE 0 4 5 6 0 0 0 0 0 0 0 14 15 0 0 0 0 0 0 22 0 0 25 26 0 0 0 0>"
  },
  "POST-EAST-EXITS": {
   "name": "POST-EAST-EXITS",
   "kind": "global",
   "file": "maze.zil",
   "line": 549,
   "value": "<PTABLE 0 0 3 0 5 0 0 8 9 0 11 0 0 0 15 0 0 18 0 0 21 0 0 24 30 0 27 0>"
  },
  "POST-WEST-EXITS": {
   "name": "POST-WEST-EXITS",
   "kind": "global",
   "file": "maze.zil",
   "line": 555,
   "value": "<PTABLE 0 0 0 2 0 4 0 0 7 8 0 10 0 40 0 14 0 0 17 0 0 20 0 0 23 0 0 26>"
  },
  "MAZE-TABLE-LENGTH": {
   "name": "MAZE-TABLE-LENGTH",
   "kind": "constant",
   "file": "maze.zil",
   "line": 656,
   "value": "40"
  },
  "MAZE-TABLE": {
   "name": "MAZE-TABLE",
   "kind": "global",
   "file": "maze.zil",
   "line": 658,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0>"
  },
  "HOLLOW-POINT": {
   "name": "HOLLOW-POINT",
   "kind": "global",
   "file": "maze.zil",
   "line": 664,
   "value": "20"
  },
  "DORN-BEAST-WARNING": {
   "name": "DORN-BEAST-WARNING",
   "kind": "global",
   "file": "maze.zil",
   "line": 795,
   "value": "<>"
  },
  "DORN-BEAST-ROOM": {
   "name": "DORN-BEAST-ROOM",
   "kind": "global",
   "file": "maze.zil",
   "line": 797,
   "value": "0"
  },
  "LAST-DORN-ROOM": {
   "name": "LAST-DORN-ROOM",
   "kind": "global",
   "file": "maze.zil",
   "line": 799,
   "value": "0"
  },
  "SPLATTERED": {
   "name": "SPLATTERED",
   "kind": "global",
   "file": "maze.zil",
   "line": 801,
   "value": "<>"
  },
  "PLAYER": {
   "name": "PLAYER",
   "kind": "global",
   "file": "misc.zil",
   "line": 161,
   "value": "<>"
  },
  "P-WON": {
   "name": "P-WON",
   "kind": "global",
   "file": "misc.zil",
   "line": 163,
   "value": "<>"
  },
  "M-FATAL": {
   "name": "M-FATAL",
   "kind": "constant",
   "file": "misc.zil",
   "line": 165,
   "value": "2"
  },
  "M-HANDLED": {
   "name": "M-HANDLED",
   "kind": "constant",
   "file": "misc.zil",
   "line": 167,
   "value": "1"
  },
  "M-NOT-HANDLED": {
   "name": "M-NOT-HANDLED",
   "kind": "constant",
   "file": "misc.zil",
   "line": 169,
   "value": "<>"
  },
  "M-OBJECT": {
   "name": "M-OBJECT",
   "kind": "constant",
   "file": "misc.zil",
   "line": 171,
   "value": "<>"
  },
  "M-BEG": {
   "name": "M-BEG",
   "kind": "constant",
   "file": "misc.zil",
   "line": 173,
   "value": "1"
  },
  "M-END": {
   "name": "M-END",
   "kind": "constant",
   "file": "misc.zil",
   "line": 175,
   "value": "6"
  },
  "M-ENTER": {
   "name": "M-ENTER",
   "kind": "constant",
   "file": "misc.zil",
   "line": 177,
   "value": "2"
  },
  "M-LOOK": {
   "name": "M-LOOK",
   "kind": "constant",
   "file": "misc.zil",
   "line": 179,
   "value": "3"
  },
  "M-FLASH": {
   "name": "M-FLASH",
   "kind": "constant",
   "file": "misc.zil",
   "line": 181,
   "value": "4"
  },
  "M-OBJDESC": {
   "name": "M-OBJDESC",
   "kind": "constant",
   "file": "misc.zil",
   "line": 183,
   "value": "5"
  },
  "LAST-USED-PRSO": {
   "name": "LAST-USED-PRSO",
   "kind": "global",
   "file": "misc.zil",
   "line": 185,
   "value": "<>"
  },
  "P-MULT": {
   "name": "P-MULT",
   "kind": "global",
   "file": "misc.zil",
   "line": 413,
   "value": "<>"
  },
  "P-NOT-HERE": {
   "name": "P-NOT-HERE",
   "kind": "global",
   "file": "misc.zil",
   "line": 415,
   "value": "0"
  },
  "C-TABLELEN": {
   "name": "C-TABLELEN",
   "kind": "constant",
   "file": "misc.zil",
   "line": 522,
   "value": "300"
  },
  "C-TABLE": {
   "name": "C-TABLE",
   "kind": "global",
   "file": "misc.zil",
   "line": 524,
   "value": "<ITABLE NONE 300>"
  },
  "C-DEMONS": {
   "name": "C-DEMONS",
   "kind": "global",
   "file": "misc.zil",
   "line": 526,
   "value": "300"
  },
  "C-INTS": {
   "name": "C-INTS",
   "kind": "global",
   "file": "misc.zil",
   "line": 528,
   "value": "300"
  },
  "C-INTLEN": {
   "name": "C-INTLEN",
   "kind": "constant",
   "file": "misc.zil",
   "line": 530,
   "value": "6"
  },
  "C-ENABLED?": {
   "name": "C-ENABLED?",
   "kind": "constant",
   "file": "misc.zil",
   "line": 532,
   "value": "0"
  },
  "C-TICK": {
   "name": "C-TICK",
   "kind": "constant",
   "file": "misc.zil",
   "line": 534,
   "value": "1"
  },
  "C-RTN": {
   "name": "C-RTN",
   "kind": "constant",
   "file": "misc.zil",
   "line": 536,
   "value": "2"
  },
  "CLOCK-WAIT": {
   "name": "CLOCK-WAIT",
   "kind": "global",
   "file": "misc.zil",
   "line": 559,
   "value": "<>"
  },
  "PARK-FEE-PAID": {
   "name": "PARK-FEE-PAID",
   "kind": "global",
   "file": "park.zil",
   "line": 88,
   "value": "<>"
  },
  "HAUNT-TABLE": {
   "name": "HAUNT-TABLE",
   "kind": "global",
   "file": "park.zil",
   "line": 204,
   "value": "<PLTABLE \"You feel a cold breath on your shoulder. You whirl around,\nbut there is nothing there.\" \"Something slimy brushes across your face.\" \"An unseen door creaks slowly open.\" \"Something slithers across your foot.\" \"You feel a strange shiver in your chest, almost as though\nsomething had passed through your body.\" \"From several directions comes a sound like rattling chains.\" \"A long silence is suddenly broken by a piercing scream!\" \"A glowing apparition sails by, briefly illuminating\na spiral staircase and wooden balcony.\" \"A deep-throated chuckle echoes about the room.\" \"A roller coaster car zooms past, almost knocking you over!\">"
  },
  "RIDE-IN-PROGRESS": {
   "name": "RIDE-IN-PROGRESS",
   "kind": "global",
   "file": "park.zil",
   "line": 220,
   "value": "<>"
  },
  "RIDE-COUNTER": {
   "name": "RIDE-COUNTER",
   "kind": "global",
   "file": "park.zil",
   "line": 222,
   "value": "0"
  },
  "HAWKER-SUBDUED": {
   "name": "HAWKER-SUBDUED",
   "kind": "global",
   "file": "park.zil",
   "line": 547,
   "value": "<>"
  },
  "MISSES": {
   "name": "MISSES",
   "kind": "global",
   "file": "park.zil",
   "line": 636,
   "value": "<PLTABLE \"You miss the rabbit by a mile!\" \"Your throw is way off!\" \"The rabbit hops obliviously as your throw sails far off target!\">"
  },
  "JACKPOT-DUMPED": {
   "name": "JACKPOT-DUMPED",
   "kind": "global",
   "file": "park.zil",
   "line": 706,
   "value": "<>"
  },
  "SLOT-MACHINE-BROKEN": {
   "name": "SLOT-MACHINE-BROKEN",
   "kind": "global",
   "file": "park.zil",
   "line": 708,
   "value": "<>"
  },
  "SLOT-MACHINE-TABLE": {
   "name": "SLOT-MACHINE-TABLE",
   "kind": "global",
   "file": "park.zil",
   "line": 767,
   "value": "<PTABLE 0 \"pot of gold\" \"clove of garlic\" \"noisome stew\" \"hot pepper sandwich\">"
  },
  "P-CCSRC": {
   "name": "P-CCSRC",
   "kind": "global",
   "file": "parser.zil",
   "line": 22,
   "value": "0"
  },
  "P-PHRLEN": {
   "name": "P-PHRLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 59,
   "value": "3"
  },
  "P-ORPHLEN": {
   "name": "P-ORPHLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 61,
   "value": "7"
  },
  "P-RTLEN": {
   "name": "P-RTLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 63,
   "value": "3"
  },
  "P-DIRECTION": {
   "name": "P-DIRECTION",
   "kind": "global",
   "file": "parser.zil",
   "line": 396,
   "value": "0"
  },
  "P-CSPTR": {
   "name": "P-CSPTR",
   "kind": "global",
   "file": "parser.zil",
   "line": 762,
   "value": "<>"
  },
  "P-CEPTR": {
   "name": "P-CEPTR",
   "kind": "global",
   "file": "parser.zil",
   "line": 763,
   "value": "<>"
  },
  "NOUN-MISSING": {
   "name": "NOUN-MISSING",
   "kind": "global",
   "file": "parser.zil",
   "line": 839,
   "value": "\"There seems to be a noun missing in that sentence.\""
  },
  "P-MOBY-FOUND": {
   "name": "P-MOBY-FOUND",
   "kind": "global",
   "file": "parser.zil",
   "line": 1006,
   "value": "<>"
  },
  "P-MOBY-FLAG": {
   "name": "P-MOBY-FLAG",
   "kind": "global",
   "file": "parser.zil",
   "line": 1007,
   "value": "<>"
  },
  "VERBOSE": {
   "name": "VERBOSE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 7,
   "value": "<>"
  },
  "SUPER-BRIEF": {
   "name": "SUPER-BRIEF",
   "kind": "global",
   "file": "verbs.zil",
   "line": 9,
   "value": "<>"
  },
  "TIRED-TELL": {
   "name": "TIRED-TELL",
   "kind": "global",
   "file": "verbs.zil",
   "line": 50,
   "value": "<PTABLE \"beginning to tire\" \"feeling tired\" \"getting more and more tired\" \"worn out\" \"dead tired\" \"so tired you can barely concentrate\" \"moving only on your last reserves of strength\" \"practically asleep\" \"unable to keep your eyes open for more than a few moments at a time\" \"about to keel over from exhaustion\">"
  },
  "RANKINGS": {
   "name": "RANKINGS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 156,
   "value": "<PTABLE \"Charlatan\" \"Parlor Magician\" \"Novice Enchanter\" \"Intermediate Enchanter\" \"Senior Enchanter\" \"Expert Enchanter\" \"Member of the Circle of Enchanters\" \"Sorcerer\" \"Leader of the Circle of Enchanters\">"
  },
  "COPR-NOTICE": {
   "name": "COPR-NOTICE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 179,
   "value": "\" a transcript of interaction with SORCERER.\""
  },
  "SERIAL": {
   "name": "SERIAL",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 208,
   "value": "0"
  },
  "D-RECORD-ON": {
   "name": "D-RECORD-ON",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 210,
   "value": "4"
  },
  "D-RECORD-OFF": {
   "name": "D-RECORD-OFF",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 211,
   "value": "-4"
  },
  "HELLOS": {
   "name": "HELLOS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 665,
   "value": "<PLTABLE \"Hello.\" \"Good day.\" \"Nice weather we've been having lately.\" \"Good-bye.\">"
  },
  "PERFORMING-SPELL": {
   "name": "PERFORMING-SPELL",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2022,
   "value": "<>"
  },
  "ALL-SPELLS": {
   "name": "ALL-SPELLS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2058,
   "value": "<PLTABLE GNUSTO-SPELL FROTZ-SPELL REZROV-SPELL IZYUK-SPELL AIMFIZ-SPELL FWEEP-SPELL SWANZO-SPELL GOLMAC-SPELL VARDIK-SPELL PULVER-SPELL MEEF-SPELL VEZZA-SPELL GASPAR-SPELL YOMIN-SPELL YONK-SPELL MALYON-SPELL>"
  },
  "COUNTERS": {
   "name": "COUNTERS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2122,
   "value": "<PTABLE \"once\" \"twice\" \"thrice\" \"four times\" \"many times\">"
  },
  "BOOK-GLOWS": {
   "name": "BOOK-GLOWS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2190,
   "value": "\"Your spell book begins to glow softly. \""
  },
  "VEZZAS": {
   "name": "VEZZAS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2434,
   "value": "<TABLE 0 \"a dried-up river bed, full of sharp rocks and muddy puddles.\nA dark cave beckons.\" \"a field surrounded by fortified ramparts. A tattered flag flies\natop a tall pole.\" \"a brightly lit room. A tree fills the room, its branches twinkling\nwith gold and silver.\" \"a glittering midway filled with garish lights and honky-tonk music,\nsurrounded by a spidery wooden structure.\" \"a startling location of transparent walls, twinkling with reflected light.\" \"a small room with a slanted roof, covered with black dust. The room\nis bathed in orange light.\" \"a door of the whitest wood, opening slowly to reveal the face of Belboz,\nwhich quickly melts into a frightening visage of unspeakable malevolence.\" \"a heated debate among the Guildmasters of the land, in the ancient\nGuild Hall at Borphee.\" \"a pile of pure-white blocks, engraved with runes of power. Each block\nhas a word written on it.\" 0>"
  },
  "FUMBLE-NUMBER": {
   "name": "FUMBLE-NUMBER",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2473,
   "value": "7"
  },
  "SWANZO-POINT": {
   "name": "SWANZO-POINT",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2517,
   "value": "25"
  },
  "DESC-OBJECT": {
   "name": "DESC-OBJECT",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2643,
   "value": "<>"
  },
  "REXIT": {
   "name": "REXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 2780,
   "value": "0"
  },
  "UEXIT": {
   "name": "UEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 2781,
   "value": "1"
  },
  "NEXIT": {
   "name": "NEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 2782,
   "value": "2"
  },
  "FEXIT": {
   "name": "FEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 2783,
   "value": "3"
  },
  "CEXIT": {
   "name": "CEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 2784,
   "value": "4"
  },
  "DEXIT": {
   "name": "DEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 2785,
   "value": "5"
  },
  "NEXITSTR": {
   "name": "NEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 2787,
   "value": "0"
  },
  "FEXITFCN": {
   "name": "FEXITFCN",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 2788,
   "value": "0"
  },
  "CEXITFLAG": {
   "name": "CEXITFLAG",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 2789,
   "value": "1"
  },
  "CEXITSTR": {
   "name": "CEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 2790,
   "value": "1"
  },
  "DEXITOBJ": {
   "name": "DEXITOBJ",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 2791,
   "value": "1"
  },
  "DEXITSTR": {
   "name": "DEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 2792,
   "value": "1"
  },
  "RESURRECTING": {
   "name": "RESURRECTING",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2967,
   "value": "<>"
  },
  "HO-HUM": {
   "name": "HO-HUM",
   "kind": "global",
   "file": "verbs.zil",
   "line": 3143,
   "value": "<PLTABLE \" doesn't do anything.\" \" accomplishes nothing.\" \" has no desirable effect.\">"
  },
  "YUKS": {
   "name": "YUKS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 3149,
   "value": "<PLTABLE \"No spell would help with that!\" \"It would take more magic than you've got!\" \"You can't be serious.\" \"You must have had a silliness spell cast upon you.\">"
  },
  "YNH": {
   "name": "YNH",
   "kind": "global",
   "file": "verbs.zil",
   "line": 3274,
   "value": "\"You're not holding\""
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
     "line": 33
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
     "line": 35
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
     "line": 37
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
     "line": 40
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
     "line": 42
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
     "line": 45
    }
   ]
  },
  "RESTAR": {
   "verb": "RESTAR",
   "synonyms": [],
   "productions": [
    {
     "pattern": "RESTAR",
     "objects": 0,
     "particles": [],
     "action": "V-RESTART",
     "preaction": null,
     "file": "syntax.zil",
     "line": 48
    }
   ]
  },
  "RESTOR": {
   "verb": "RESTOR",
   "synonyms": [],
   "productions": [
    {
     "pattern": "RESTOR",
     "objects": 0,
     "particles": [],
     "action": "V-RESTORE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 50
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
     "line": 52
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
     "line": 54
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
     "line": 56
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
     "line": 58
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
     "line": 60
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
     "line": 62
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
     "line": 64
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
     "line": 66
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
     "line": 68
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
     "line": 70
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
     "line": 77
    },
    {
     "pattern": "ANSWER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-REPLY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 78
    }
   ]
  },
  "APPLY": {
   "verb": "APPLY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "APPLY OBJECT (HELD MANY HAVE) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 81
    }
   ]
  },
  "ASK": {
   "verb": "ASK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ASK OBJECT (FIND ACTORBIT) FOR OBJECT",
     "objects": 2,
     "particles": [
      "FOR"
     ],
     "action": "V-ASK-FOR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 83
    },
    {
     "pattern": "ASK OBJECT (FIND ACTORBIT) ABOUT OBJECT",
     "objects": 2,
     "particles": [
      "ABOUT"
     ],
     "action": "V-ASK-ABOUT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 84
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
     "line": 87
    },
    {
     "pattern": "ATTACK OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 88
    }
   ]
  },
  "BITE": {
   "verb": "BITE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "BITE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-BITE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 92
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
     "line": 94
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
     "line": 95
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
     "line": 97
    }
   ]
  },
  "BURN": {
   "verb": "BURN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "BURN OBJECT (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED ON-GROUND IN-ROOM HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-BURN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 100
    },
    {
     "pattern": "BURN DOWN OBJECT (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED ON-GROUND IN-ROOM HAVE)",
     "objects": 2,
     "particles": [
      "DOWN",
      "WITH"
     ],
     "action": "V-BURN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 102
    }
   ]
  },
  "CLIMB": {
   "verb": "CLIMB",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CLIMB OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLIMB-FOO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 106
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
     "line": 107
    },
    {
     "pattern": "CLIMB UP OBJECT (FIND RLANDBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-CLIMB-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 108
    },
    {
     "pattern": "CLIMB DOWN OBJECT (FIND RLANDBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 109
    },
    {
     "pattern": "CLIMB OVER OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-CLIMB-OVER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 110
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
     "line": 111
    }
   ]
  },
  "DESCEN": {
   "verb": "DESCEN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DESCEN OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 114
    }
   ]
  },
  "LIE": {
   "verb": "LIE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LIE DOWN OBJECT (FIND RLANDBIT)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-LIE-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 116
    },
    {
     "pattern": "LIE ON OBJECT (FIND VEHBIT)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LIE-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 117
    }
   ]
  },
  "CLOSE": {
   "verb": "CLOSE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CLOSE OBJECT (FIND CONTBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLOSE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 120
    }
   ]
  },
  "COMBIN": {
   "verb": "COMBIN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "COMBIN OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-COMBO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 123
    }
   ]
  },
  "COMPAR": {
   "verb": "COMPAR",
   "synonyms": [],
   "productions": [
    {
     "pattern": "COMPAR OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-COMPARE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 126
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
     "line": 128
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
     "line": 131
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
     "line": 134
    },
    {
     "pattern": "CUT THROUGH OBJECT WITH OBJECT (FIND WEAPONBIT) (CARRIED HELD)",
     "objects": 2,
     "particles": [
      "THROUGH",
      "WITH"
     ],
     "action": "V-CUT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 135
    }
   ]
  },
  "SHIT": {
   "verb": "SHIT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SHIT",
     "objects": 0,
     "particles": [],
     "action": "V-CURSE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 138
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
     "line": 141
    }
   ]
  },
  "CRACK": {
   "verb": "CRACK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CRACK OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-MUNG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 143
    },
    {
     "pattern": "CRACK OBJECT (ON-GROUND IN-ROOM HELD CARRIED) WITH OBJECT (HELD CARRIED TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 144
    },
    {
     "pattern": "CRACK DOWN OBJECT (ON-GROUND IN-ROOM HELD CARRIED) WITH OBJECT (HELD CARRIED TAKE)",
     "objects": 2,
     "particles": [
      "DOWN",
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 146
    }
   ]
  },
  "DIG": {
   "verb": "DIG",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DIG IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-DIG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 150
    },
    {
     "pattern": "DIG WITH OBJECT",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-DIG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 151
    },
    {
     "pattern": "DIG THROUGH OBJECT",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-DIG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 152
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
     "line": 153
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
     "line": 155
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
     "file": "syntax.zil",
     "line": 159
    }
   ]
  },
  "DRINK": {
   "verb": "DRINK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DRINK OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-DRINK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 162
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
     "line": 163
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
     "line": 166
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
     "line": 167
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
     "line": 168
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
     "line": 169
    }
   ]
  },
  "EAT": {
   "verb": "EAT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EAT OBJECT (HELD CARRIED ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-EAT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 172
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
     "line": 175
    },
    {
     "pattern": "ENTER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 176
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
     "line": 178
    },
    {
     "pattern": "EXIT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 179
    }
   ]
  },
  "EXAMINE": {
   "verb": "EXAMINE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EXAMINE OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-EXAMINE",
     "preaction": "PRE-EXAMINE",
     "file": "syntax.zil",
     "line": 182
    },
    {
     "pattern": "EXAMINE IN OBJECT (HELD CARRIED IN-ROOM ON-GROUND)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 184
    },
    {
     "pattern": "EXAMINE ON OBJECT (HELD CARRIED IN-ROOM ON-GROUND)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 186
    },
    {
     "pattern": "EXAMINE FOR OBJECT",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-FIND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 188
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
     "line": 191
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
     "line": 192
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
     "line": 193
    }
   ]
  },
  "EXTINGUISH": {
   "verb": "EXTINGUISH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EXTINGUISH OBJECT (FIND LIGHTBIT) (MANY HELD CARRIED ON-GROUND IN-ROOM TAKE HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 196
    }
   ]
  },
  "FILL": {
   "verb": "FILL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FILL OBJECT (FIND CONTBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-FILL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 200
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
     "line": 201
    },
    {
     "pattern": "FILL OBJECT (FIND CONTBIT) (HELD CARRIED ON-GROUND IN-ROOM) AT OBJECT",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-FILL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 203
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
     "line": 206
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
     "line": 209
    },
    {
     "pattern": "FLY OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FLY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 210
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
     "line": 212
    },
    {
     "pattern": "FOLLOW OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 213
    }
   ]
  },
  "FORGET": {
   "verb": "FORGET",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FORGET OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FORGET",
     "preaction": null,
     "file": "syntax.zil",
     "line": 216
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
     "line": 219
    },
    {
     "pattern": "GIVE OBJECT (FIND ACTORBIT) (ON-GROUND) OBJECT (MANY HELD HAVE)",
     "objects": 2,
     "particles": [],
     "action": "V-SGIVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 221
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
     "line": 225
    },
    {
     "pattern": "HELLO OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-HELLO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 226
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
     "action": "V-HELP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 229
    }
   ]
  },
  "HIDE": {
   "verb": "HIDE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "HIDE",
     "objects": 0,
     "particles": [],
     "action": "V-HIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 232
    },
    {
     "pattern": "HIDE OBJECT (HELD HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-HIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 233
    },
    {
     "pattern": "HIDE UNDER OBJECT",
     "objects": 1,
     "particles": [
      "UNDER"
     ],
     "action": "V-HIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 234
    },
    {
     "pattern": "HIDE BEHIND OBJECT",
     "objects": 1,
     "particles": [
      "BEHIND"
     ],
     "action": "V-HIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 235
    },
    {
     "pattern": "HIDE OBJECT (HELD HAVE) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-HIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 236
    }
   ]
  },
  "INFLAT": {
   "verb": "INFLAT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "INFLAT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-INFLATE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 239
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
     "line": 241
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
     "line": 242
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
     "line": 243
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
     "line": 244
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
     "line": 245
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
     "line": 246
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
     "preaction": "PRE-OPEN",
     "file": "syntax.zil",
     "line": 249
    }
   ]
  },
  "KILL": {
   "verb": "KILL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "KILL OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-KILL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 251
    },
    {
     "pattern": "KILL OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-KILL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 252
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
     "line": 256
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
     "line": 259
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
     "line": 260
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
     "line": 261
    }
   ]
  },
  "LAND": {
   "verb": "LAND",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LAND",
     "objects": 0,
     "particles": [],
     "action": "V-LAND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 264
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
     "line": 266
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
     "file": "syntax.zil",
     "line": 268
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
     "line": 270
    },
    {
     "pattern": "LEAVE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-DROP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 271
    }
   ]
  },
  "LIGHT": {
   "verb": "LIGHT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LIGHT OBJECT (FIND LIGHTBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 273
    },
    {
     "pattern": "LIGHT OBJECT (FIND LIGHTBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-BURN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 275
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
     "line": 278
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
     "line": 279
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
     "line": 282
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
     "line": 285
    },
    {
     "pattern": "LOOK AROUND OBJECT (FIND RLANDBIT)",
     "objects": 1,
     "particles": [
      "AROUND"
     ],
     "action": "V-LOOK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 286
    },
    {
     "pattern": "LOOK DOWN OBJECT (FIND RLANDBIT)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-LOOK-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 287
    },
    {
     "pattern": "LOOK AT OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-EXAMINE",
     "preaction": "PRE-EXAMINE",
     "file": "syntax.zil",
     "line": 288
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
     "line": 290
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
     "line": 291
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
     "line": 292
    },
    {
     "pattern": "LOOK ON OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-EXAMINE",
     "preaction": "PRE-EXAMINE",
     "file": "syntax.zil",
     "line": 293
    },
    {
     "pattern": "LOOK IN OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 295
    },
    {
     "pattern": "LOOK AT OBJECT (HELD CARRIED ON-GROUND IN-ROOM TAKE) THROUGH OBJECT",
     "objects": 2,
     "particles": [
      "AT",
      "THROUGH"
     ],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "syntax.zil",
     "line": 296
    },
    {
     "pattern": "LOOK UP OBJECT (FIND RLANDBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-RESEARCH",
     "preaction": "PRE-RESEARCH",
     "file": "syntax.zil",
     "line": 298
    },
    {
     "pattern": "LOOK UP OBJECT IN OBJECT",
     "objects": 2,
     "particles": [
      "UP",
      "IN"
     ],
     "action": "V-RESEARCH",
     "preaction": "PRE-RESEARCH",
     "file": "syntax.zil",
     "line": 299
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
     "line": 300
    },
    {
     "pattern": "LOOK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-CHASTISE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 301
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
     "line": 304
    },
    {
     "pattern": "LOWER OBJECT IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-LOWER-INTO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 305
    },
    {
     "pattern": "LOWER OBJECT DOWN OBJECT",
     "objects": 2,
     "particles": [
      "DOWN"
     ],
     "action": "V-LOWER-INTO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 306
    }
   ]
  },
  "MELT": {
   "verb": "MELT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "MELT OBJECT WITH OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-MELT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 308
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
     "preaction": null,
     "file": "syntax.zil",
     "line": 311
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
     "preaction": null,
     "file": "syntax.zil",
     "line": 312
    }
   ]
  },
  "PAY": {
   "verb": "PAY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PAY OBJECT (MANY HELD HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-PAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 315
    },
    {
     "pattern": "PAY OBJECT (FIND ACTORBIT) WITH OBJECT (MANY HELD HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-PAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 316
    },
    {
     "pattern": "PAY OBJECT (MANY HELD HAVE) TO OBJECT (FIND ACTORBIT)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-SPAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 317
    },
    {
     "pattern": "PAY OBJECT (FIND ACTORBIT) OBJECT (MANY HELD HAVE)",
     "objects": 2,
     "particles": [],
     "action": "V-PAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 318
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
     "line": 320
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
     "preaction": null,
     "file": "syntax.zil",
     "line": 322
    },
    {
     "pattern": "PULL ON OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-MOVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 323
    },
    {
     "pattern": "PULL DOWN OBJECT",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-LOWER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 324
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
     "preaction": "PRE-OPEN",
     "file": "syntax.zil",
     "line": 327
    },
    {
     "pattern": "OPEN UP OBJECT (FIND DOORBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-OPEN",
     "preaction": "PRE-OPEN",
     "file": "syntax.zil",
     "line": 329
    },
    {
     "pattern": "OPEN OBJECT (FIND DOORBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (ON-GROUND IN-ROOM HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-OPEN",
     "preaction": "PRE-OPEN",
     "file": "syntax.zil",
     "line": 331
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
     "line": 335
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
     "line": 336
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
     "line": 337
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
     "file": "syntax.zil",
     "line": 339
    }
   ]
  },
  "POINT": {
   "verb": "POINT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "POINT AT OBJECT",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-POINT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 342
    },
    {
     "pattern": "POINT TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-POINT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 343
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
     "preaction": null,
     "file": "syntax.zil",
     "line": 346
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
     "action": "V-POUR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 350
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-POUR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 351
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-POUR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 352
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-POUR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 353
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
     "line": 356
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
     "line": 357
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
     "line": 359
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
     "line": 360
    },
    {
     "pattern": "PUSH OBJECT (IN-ROOM ON-GROUND) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 361
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
     "line": 362
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
     "line": 363
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
     "line": 366
    },
    {
     "pattern": "PUT OBJECT (HELD MANY HAVE) DOWN OBJECT",
     "objects": 2,
     "particles": [
      "DOWN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 367
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
     "line": 368
    },
    {
     "pattern": "PUT OBJECT (HELD MANY HAVE) OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 369
    },
    {
     "pattern": "PUT OBJECT (HELD MANY HAVE) ACROSS OBJECT",
     "objects": 2,
     "particles": [
      "ACROSS"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 370
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
     "line": 371
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
     "line": 372
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
     "line": 373
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
     "line": 374
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
     "line": 377
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
     "line": 378
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
     "line": 381
    }
   ]
  },
  "REACH": {
   "verb": "REACH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "REACH IN OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-REACH-IN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 384
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
     "line": 386
    },
    {
     "pattern": "READ OBJECT (FIND READBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE) THROUGH OBJECT",
     "objects": 2,
     "particles": [
      "THROUGH"
     ],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "syntax.zil",
     "line": 388
    },
    {
     "pattern": "READ ABOUT OBJECT",
     "objects": 1,
     "particles": [
      "ABOUT"
     ],
     "action": "V-RESEARCH",
     "preaction": "PRE-RESEARCH",
     "file": "syntax.zil",
     "line": 390
    },
    {
     "pattern": "READ ABOUT OBJECT IN OBJECT",
     "objects": 2,
     "particles": [
      "ABOUT",
      "IN"
     ],
     "action": "V-RESEARCH",
     "preaction": "PRE-RESEARCH",
     "file": "syntax.zil",
     "line": 391
    }
   ]
  },
  "REMOVE": {
   "verb": "REMOVE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "REMOVE OBJECT (FIND WEARBIT) (HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-TAKE-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 394
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
     "action": "V-TELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 397
    },
    {
     "pattern": "SAY",
     "objects": 0,
     "particles": [],
     "action": "V-SAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 398
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
     "line": 401
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
     "line": 402
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
     "line": 403
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
     "file": "syntax.zil",
     "line": 406
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
     "line": 408
    }
   ]
  },
  "SHARPEN": {
   "verb": "SHARPEN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SHARPEN OBJECT WITH OBJECT (FIND TOOLBIT) (HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-SHARPEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 411
    }
   ]
  },
  "SHOOT": {
   "verb": "SHOOT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SHOOT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SHOOT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 414
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
     "line": 417
    },
    {
     "pattern": "SHOW OBJECT OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-SSHOW",
     "preaction": "PRE-SSHOW",
     "file": "syntax.zil",
     "line": 418
    }
   ]
  },
  "SIT": {
   "verb": "SIT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SIT ON OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-CLIMB-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 420
    },
    {
     "pattern": "SIT DOWN OBJECT (FIND RLANDBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-SIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 421
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
     "line": 422
    },
    {
     "pattern": "SIT AT OBJECT",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-SIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 423
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
     "line": 426
    },
    {
     "pattern": "SLEEP IN OBJECT (IN-ROOM ON-GROUND)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-BOARD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 427
    },
    {
     "pattern": "SLEEP ON OBJECT (IN-ROOM ON-GROUND)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-BOARD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 428
    }
   ]
  },
  "NAP": {
   "verb": "NAP",
   "synonyms": [],
   "productions": [
    {
     "pattern": "NAP",
     "objects": 0,
     "particles": [],
     "action": "V-SLEEP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 430
    },
    {
     "pattern": "NAP IN OBJECT (IN-ROOM ON-GROUND)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-BOARD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 431
    },
    {
     "pattern": "NAP ON OBJECT (IN-ROOM ON-GROUND)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-BOARD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 432
    }
   ]
  },
  "SNOOZE": {
   "verb": "SNOOZE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SNOOZE",
     "objects": 0,
     "particles": [],
     "action": "V-SLEEP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 434
    },
    {
     "pattern": "SNOOZE IN OBJECT (IN-ROOM ON-GROUND)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-BOARD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 435
    },
    {
     "pattern": "SNOOZE ON OBJECT (IN-ROOM ON-GROUND)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-BOARD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 436
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
     "line": 438
    }
   ]
  },
  "SLIDE": {
   "verb": "SLIDE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SLIDE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-PUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 441
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
     "line": 442
    },
    {
     "pattern": "SLIDE OBJECT (IN-ROOM ON-GROUND) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 443
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
     "line": 444
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
     "line": 446
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
     "file": "syntax.zil",
     "line": 449
    }
   ]
  },
  "SPRAY": {
   "verb": "SPRAY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SPRAY OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SPRAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 452
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
     "line": 453
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
     "line": 454
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
     "file": "syntax.zil",
     "line": 456
    },
    {
     "pattern": "SQUEEZE OBJECT (HELD MANY HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 457
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
     "line": 459
    },
    {
     "pattern": "STAND UP OBJECT (FIND RLANDBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-STAND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 460
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
     "line": 461
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
     "line": 464
    },
    {
     "pattern": "STRIKE OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-STRIKE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 466
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
     "line": 468
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
     "line": 469
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
     "line": 472
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
     "line": 473
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
     "line": 477
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
     "line": 478
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
     "line": 479
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
     "line": 480
    },
    {
     "pattern": "TAKE UP OBJECT (FIND RLANDBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-STAND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 481
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
     "line": 482
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
     "line": 484
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
     "line": 486
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEBIT) (IN-ROOM CARRIED MANY) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 488
    },
    {
     "pattern": "TAKE OFF OBJECT (FIND WEARBIT) (HAVE)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-TAKE-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 490
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
     "line": 493
    }
   ]
  },
  "THANK": {
   "verb": "THANK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "THANK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-THANK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 495
    },
    {
     "pattern": "THANK",
     "objects": 0,
     "particles": [],
     "action": "V-THANK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 496
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
     "line": 499
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
     "line": 501
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
     "line": 502
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) THROUGH OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "THROUGH"
     ],
     "action": "V-THROW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 503
    },
    {
     "pattern": "THROW OBJECT (HELD MANY HAVE) DOWN OBJECT",
     "objects": 2,
     "particles": [
      "DOWN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 505
    },
    {
     "pattern": "THROW OBJECT (HELD MANY HAVE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 506
    },
    {
     "pattern": "THROW OBJECT (HELD MANY HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 507
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
     "line": 510
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
     "line": 511
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
     "line": 515
    }
   ]
  },
  "TORTUR": {
   "verb": "TORTUR",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TORTUR OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-TORTURE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 518
    }
   ]
  },
  "TOUCH": {
   "verb": "TOUCH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TOUCH OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-RUB",
     "preaction": null,
     "file": "syntax.zil",
     "line": 520
    },
    {
     "pattern": "TOUCH OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-RUB",
     "preaction": null,
     "file": "syntax.zil",
     "line": 521
    }
   ]
  },
  "TURN": {
   "verb": "TURN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TURN OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-TURN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 524
    },
    {
     "pattern": "TURN OBJECT FOR OBJECT",
     "objects": 2,
     "particles": [
      "FOR"
     ],
     "action": "V-TURN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 525
    },
    {
     "pattern": "TURN OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-TURN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 526
    },
    {
     "pattern": "TURN OBJECT WITH OBJECT (FIND TOOLBIT) (HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TURN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 527
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
     "line": 528
    },
    {
     "pattern": "TURN OFF OBJECT (FIND LIGHTBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 530
    }
   ]
  },
  "UNLOCK": {
   "verb": "UNLOCK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "UNLOCK OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-UNLOCK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 534
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
     "line": 537
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
     "line": 538
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
     "line": 541
    },
    {
     "pattern": "WAIT FOR OBJECT",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-WAIT-FOR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 542
    }
   ]
  },
  "WAKE": {
   "verb": "WAKE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WAKE OBJECT (FIND RLANDBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-ALARM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 545
    },
    {
     "pattern": "WAKE UP OBJECT (FIND RLANDBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-ALARM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 546
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
     "line": 549
    },
    {
     "pattern": "WALK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WALK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 550
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
     "line": 551
    },
    {
     "pattern": "WALK ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-WALK-AROUND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 552
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
     "line": 553
    },
    {
     "pattern": "WALK THROUGH OBJECT",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 554
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
     "line": 555
    },
    {
     "pattern": "WALK UP OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-CLIMB-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 556
    },
    {
     "pattern": "WALK DOWN OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 557
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
     "line": 558
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
     "line": 561
    },
    {
     "pattern": "WAVE AT OBJECT",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-WAVE-AT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 562
    },
    {
     "pattern": "WAVE TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-WAVE-AT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 563
    },
    {
     "pattern": "WAVE OBJECT (HELD CARRIED) AT OBJECT",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-WAVE-AT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 565
    }
   ]
  },
  "YELL": {
   "verb": "YELL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "YELL AT OBJECT",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-WAVE-AT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 564
    },
    {
     "pattern": "YELL",
     "objects": 0,
     "particles": [],
     "action": "V-YELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 584
    }
   ]
  },
  "WAX": {
   "verb": "WAX",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WAX OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WAX",
     "preaction": null,
     "file": "syntax.zil",
     "line": 568
    },
    {
     "pattern": "WAX OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-WAX",
     "preaction": null,
     "file": "syntax.zil",
     "line": 569
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
     "file": "syntax.zil",
     "line": 572
    }
   ]
  },
  "WHAT": {
   "verb": "WHAT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WHAT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WHAT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 575
    }
   ]
  },
  "WHERE": {
   "verb": "WHERE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WHERE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WHERE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 578
    }
   ]
  },
  "WHO": {
   "verb": "WHO",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WHO OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WHO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 581
    }
   ]
  },
  "CAST": {
   "verb": "CAST",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CAST OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-CAST",
     "preaction": null,
     "file": "syntax.zil",
     "line": 591
    },
    {
     "pattern": "CAST OBJECT ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-CAST",
     "preaction": null,
     "file": "syntax.zil",
     "line": 592
    },
    {
     "pattern": "CAST OBJECT AT OBJECT",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-CAST",
     "preaction": null,
     "file": "syntax.zil",
     "line": 593
    }
   ]
  },
  "LEARN": {
   "verb": "LEARN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LEARN OBJECT (HELD CARRIED MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-LEARN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 596
    }
   ]
  },
  "SPELLS": {
   "verb": "SPELLS",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SPELLS",
     "objects": 0,
     "particles": [],
     "action": "V-SPELLS",
     "preaction": null,
     "file": "syntax.zil",
     "line": 599
    }
   ]
  },
  "AIMFIZ": {
   "verb": "AIMFIZ",
   "synonyms": [],
   "productions": [
    {
     "pattern": "AIMFIZ OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-AIMFIZ",
     "preaction": "PRE-CAST",
     "file": "syntax.zil",
     "line": 601
    },
    {
     "pattern": "AIMFIZ OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-AIMFIZ-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 602
    }
   ]
  },
  "FROTZ": {
   "verb": "FROTZ",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FROTZ OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FROTZ",
     "preaction": "PRE-CAST",
     "file": "syntax.zil",
     "line": 604
    }
   ]
  },
  "FWEEP": {
   "verb": "FWEEP",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FWEEP",
     "objects": 0,
     "particles": [],
     "action": "V-FWEEP",
     "preaction": "PRE-CAST",
     "file": "syntax.zil",
     "line": 606
    },
    {
     "pattern": "FWEEP OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FWEEP",
     "preaction": "PRE-CAST",
     "file": "syntax.zil",
     "line": 607
    }
   ]
  },
  "GASPAR": {
   "verb": "GASPAR",
   "synonyms": [],
   "productions": [
    {
     "pattern": "GASPAR",
     "objects": 0,
     "particles": [],
     "action": "V-GASPAR",
     "preaction": "PRE-CAST",
     "file": "syntax.zil",
     "line": 609
    },
    {
     "pattern": "GASPAR OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-GASPAR",
     "preaction": "PRE-CAST",
     "file": "syntax.zil",
     "line": 610
    }
   ]
  },
  "GNUSTO": {
   "verb": "GNUSTO",
   "synonyms": [],
   "productions": [
    {
     "pattern": "GNUSTO OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-GNUSTO",
     "preaction": "PRE-CAST",
     "file": "syntax.zil",
     "line": 612
    }
   ]
  },
  "GOLMAC": {
   "verb": "GOLMAC",
   "synonyms": [],
   "productions": [
    {
     "pattern": "GOLMAC OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-GOLMAC",
     "preaction": "PRE-CAST",
     "file": "syntax.zil",
     "line": 614
    }
   ]
  },
  "IZYUK": {
   "verb": "IZYUK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "IZYUK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-IZYUK",
     "preaction": "PRE-CAST",
     "file": "syntax.zil",
     "line": 616
    }
   ]
  },
  "MEEF": {
   "verb": "MEEF",
   "synonyms": [],
   "productions": [
    {
     "pattern": "MEEF OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-MEEF",
     "preaction": "PRE-CAST",
     "file": "syntax.zil",
     "line": 618
    }
   ]
  },
  "MALYON": {
   "verb": "MALYON",
   "synonyms": [],
   "productions": [
    {
     "pattern": "MALYON OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-MALYON",
     "preaction": "PRE-CAST",
     "file": "syntax.zil",
     "line": 620
    }
   ]
  },
  "PULVER": {
   "verb": "PULVER",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PULVER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-PULVER",
     "preaction": "PRE-CAST",
     "file": "syntax.zil",
     "line": 622
    }
   ]
  },
  "REZROV": {
   "verb": "REZROV",
   "synonyms": [],
   "productions": [
    {
     "pattern": "REZROV OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-REZROV",
     "preaction": "PRE-CAST",
     "file": "syntax.zil",
     "line": 624
    }
   ]
  },
  "SWANZO": {
   "verb": "SWANZO",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SWANZO OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SWANZO",
     "preaction": "PRE-CAST",
     "file": "syntax.zil",
     "line": 626
    }
   ]
  },
  "VARDIK": {
   "verb": "VARDIK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "VARDIK OBJECT (FIND ACTORBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-VARDIK",
     "preaction": "PRE-CAST",
     "file": "syntax.zil",
     "line": 628
    }
   ]
  },
  "VEZZA": {
   "verb": "VEZZA",
   "synonyms": [],
   "productions": [
    {
     "pattern": "VEZZA",
     "objects": 0,
     "particles": [],
     "action": "V-VEZZA",
     "preaction": "PRE-CAST",
     "file": "syntax.zil",
     "line": 630
    },
    {
     "pattern": "VEZZA OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-VEZZA",
     "preaction": "PRE-CAST",
     "file": "syntax.zil",
     "line": 631
    }
   ]
  },
  "YOMIN": {
   "verb": "YOMIN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "YOMIN OBJECT (FIND ACTORBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-YOMIN",
     "preaction": "PRE-CAST",
     "file": "syntax.zil",
     "line": 633
    }
   ]
  },
  "YONK": {
   "verb": "YONK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "YONK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-YONK",
     "preaction": "PRE-CAST",
     "file": "syntax.zil",
     "line": 635
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
  "RESTAR": {
   "word": "RESTAR",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "RESTOR": {
   "word": "RESTOR",
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
     "of": "COMPAR"
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
     "of": "PAY"
    },
    {
     "kind": "particle",
     "of": "POINT"
    },
    {
     "kind": "particle",
     "of": "PUSH"
    },
    {
     "kind": "particle",
     "of": "SAY"
    },
    {
     "kind": "particle",
     "of": "SHOW"
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
    },
    {
     "kind": "particle",
     "of": "WAVE"
    },
    {
     "kind": "particle",
     "of": "AIMFIZ"
    }
   ]
  },
  "ASK": {
   "word": "ASK",
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
  "FOR": {
   "word": "FOR",
   "roles": [
    {
     "kind": "particle",
     "of": "ASK"
    },
    {
     "kind": "particle",
     "of": "EXAMINE"
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
     "of": "SEARCH"
    },
    {
     "kind": "particle",
     "of": "SEND"
    },
    {
     "kind": "particle",
     "of": "TURN"
    },
    {
     "kind": "particle",
     "of": "WAIT"
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
     "of": "READ"
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
     "of": "BURN"
    },
    {
     "kind": "particle",
     "of": "CUT"
    },
    {
     "kind": "particle",
     "of": "CRACK"
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
     "of": "KILL"
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
     "of": "MELT"
    },
    {
     "kind": "particle",
     "of": "PAY"
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
     "of": "PUMP"
    },
    {
     "kind": "particle",
     "of": "SHARPEN"
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
     "of": "TIE"
    },
    {
     "kind": "particle",
     "of": "TOUCH"
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
     "of": "WAX"
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "BITE": {
   "word": "BITE",
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
     "kind": "direction",
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
     "of": "TAKE"
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
     "kind": "word",
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
     "of": "LIE"
    },
    {
     "kind": "particle",
     "of": "CRACK"
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
     "of": "LOWER"
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
     "of": "SIT"
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
     "of": "LIE"
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
     "of": "PULL"
    },
    {
     "kind": "particle",
     "of": "POUR"
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
     "of": "SIT"
    },
    {
     "kind": "particle",
     "of": "SLEEP"
    },
    {
     "kind": "particle",
     "of": "NAP"
    },
    {
     "kind": "particle",
     "of": "SNOOZE"
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
     "of": "STAND"
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
     "of": "CAST"
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
     "of": "CLIMB"
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
     "of": "THROW"
    },
    {
     "kind": "particle",
     "of": "WALK"
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
     "of": "LOWER"
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
     "of": "REACH"
    },
    {
     "kind": "particle",
     "of": "READ"
    },
    {
     "kind": "particle",
     "of": "SEARCH"
    },
    {
     "kind": "particle",
     "of": "SIT"
    },
    {
     "kind": "particle",
     "of": "SLEEP"
    },
    {
     "kind": "particle",
     "of": "NAP"
    },
    {
     "kind": "particle",
     "of": "SNOOZE"
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
  "DESCEN": {
   "word": "DESCEN",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "LIE": {
   "word": "LIE",
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
  "COMBIN": {
   "word": "COMBIN",
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
     "of": "DIAL"
    }
   ]
  },
  "COMPAR": {
   "word": "COMPAR",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "KEROSENE-LAMP"
    }
   ]
  },
  "COUNT": {
   "word": "COUNT",
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
  "THROUGH": {
   "word": "THROUGH",
   "roles": [
    {
     "kind": "particle",
     "of": "CUT"
    },
    {
     "kind": "particle",
     "of": "DIG"
    },
    {
     "kind": "particle",
     "of": "LOOK"
    },
    {
     "kind": "particle",
     "of": "READ"
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
     "kind": "word",
     "of": null
    }
   ]
  },
  "SHIT": {
   "word": "SHIT",
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
     "of": "BAT-GUANO"
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
  "CRACK": {
   "word": "CRACK",
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
    },
    {
     "kind": "word",
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
     "of": "HIDE"
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
  "AT": {
   "word": "AT",
   "roles": [
    {
     "kind": "particle",
     "of": "FILL"
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
     "of": "SIT"
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
    },
    {
     "kind": "particle",
     "of": "YELL"
    },
    {
     "kind": "particle",
     "of": "CAST"
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
  "FLY": {
   "word": "FLY",
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
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "FORGET": {
   "word": "FORGET",
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
  "HIDE": {
   "word": "HIDE",
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
     "of": "HIDE"
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
     "of": "HIDE"
    },
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
  "ACROSS": {
   "word": "ACROSS",
   "roles": [
    {
     "kind": "particle",
     "of": "JUMP"
    },
    {
     "kind": "particle",
     "of": "PUT"
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
  "KISS": {
   "word": "KISS",
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
  "LAND": {
   "word": "LAND",
   "roles": [
    {
     "kind": "verb",
     "of": null
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
    }
   ]
  },
  "LISTEN": {
   "word": "LISTEN",
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
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "LOWER": {
   "word": "LOWER",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "LOWER-CHUTE"
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
    },
    {
     "kind": "word",
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
  "PAY": {
   "word": "PAY",
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
     "kind": "word",
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
  "REMOVE": {
   "word": "REMOVE",
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
    },
    {
     "kind": "word",
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
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "SHARPEN": {
   "word": "SHARPEN",
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
  "SHOOT": {
   "word": "SHOOT",
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
    },
    {
     "kind": "word",
     "of": null
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
     "of": "GLOBAL-SLEEP"
    }
   ]
  },
  "NAP": {
   "word": "NAP",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "GLOBAL-SLEEP"
    }
   ]
  },
  "SNOOZE": {
   "word": "SNOOZE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "GLOBAL-SLEEP"
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
    },
    {
     "kind": "word",
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
    }
   ]
  },
  "THANK": {
   "word": "THANK",
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
  "TORTUR": {
   "word": "TORTUR",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "TORTURE-DEVICES"
    }
   ]
  },
  "TOUCH": {
   "word": "TOUCH",
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
  "WAX": {
   "word": "WAX",
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
    },
    {
     "kind": "word",
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
    },
    {
     "kind": "word",
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
    },
    {
     "kind": "word",
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
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "CAST": {
   "word": "CAST",
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
     "of": "CANNON"
    }
   ]
  },
  "LEARN": {
   "word": "LEARN",
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
  "SPELLS": {
   "word": "SPELLS",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "FWEEP-SPELL"
    },
    {
     "kind": "noun",
     "of": "VARDIK-SPELL"
    },
    {
     "kind": "noun",
     "of": "GOLMAC-SPELL"
    },
    {
     "kind": "noun",
     "of": "YONK-SPELL"
    },
    {
     "kind": "noun",
     "of": "GNUSTO-SPELL"
    },
    {
     "kind": "noun",
     "of": "FROTZ-SPELL"
    },
    {
     "kind": "noun",
     "of": "REZROV-SPELL"
    },
    {
     "kind": "noun",
     "of": "YOMIN-SPELL"
    },
    {
     "kind": "noun",
     "of": "IZYUK-SPELL"
    },
    {
     "kind": "noun",
     "of": "PULVER-SPELL"
    },
    {
     "kind": "noun",
     "of": "VEZZA-SPELL"
    },
    {
     "kind": "noun",
     "of": "GASPAR-SPELL"
    },
    {
     "kind": "noun",
     "of": "MEEF-SPELL"
    },
    {
     "kind": "noun",
     "of": "AIMFIZ-SPELL"
    },
    {
     "kind": "noun",
     "of": "SWANZO-SPELL"
    },
    {
     "kind": "noun",
     "of": "MALYON-SPELL"
    }
   ]
  },
  "AIMFIZ": {
   "word": "AIMFIZ",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "AIMFIZ-SPELL"
    }
   ]
  },
  "FROTZ": {
   "word": "FROTZ",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "FROTZ-SPELL"
    }
   ]
  },
  "FWEEP": {
   "word": "FWEEP",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "FWEEP-SPELL"
    }
   ]
  },
  "GASPAR": {
   "word": "GASPAR",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "GASPAR-SPELL"
    }
   ]
  },
  "GNUSTO": {
   "word": "GNUSTO",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "GNUSTO-SPELL"
    }
   ]
  },
  "GOLMAC": {
   "word": "GOLMAC",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "GOLMAC-SPELL"
    }
   ]
  },
  "IZYUK": {
   "word": "IZYUK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "IZYUK-SPELL"
    }
   ]
  },
  "MEEF": {
   "word": "MEEF",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "MEEF-SPELL"
    }
   ]
  },
  "MALYON": {
   "word": "MALYON",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "MALYON-SPELL"
    }
   ]
  },
  "PULVER": {
   "word": "PULVER",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "PULVER-SPELL"
    }
   ]
  },
  "REZROV": {
   "word": "REZROV",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "REZROV-SPELL"
    }
   ]
  },
  "SWANZO": {
   "word": "SWANZO",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "SWANZO-SPELL"
    }
   ]
  },
  "VARDIK": {
   "word": "VARDIK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "VARDIK-SPELL"
    }
   ]
  },
  "VEZZA": {
   "word": "VEZZA",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "VEZZA-SPELL"
    }
   ]
  },
  "YOMIN": {
   "word": "YOMIN",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "YOMIN-SPELL"
    }
   ]
  },
  "YONK": {
   "word": "YONK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "YONK-SPELL"
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
     "of": "THROUGH"
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
  "BELOW": {
   "word": "BELOW",
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
  "UNDERNEATH": {
   "word": "UNDERNEATH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "UNDER"
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
  "RESPOND": {
   "word": "RESPOND",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ANSWER"
    }
   ]
  },
  "QUERY": {
   "word": "QUERY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ASK"
    }
   ]
  },
  "INTERROGATE": {
   "word": "INTERROGATE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ASK"
    }
   ]
  },
  "QUIZ": {
   "word": "QUIZ",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ASK"
    }
   ]
  },
  "ASSAULT": {
   "word": "ASSAULT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ATTACK"
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
  "EMBARK": {
   "word": "EMBARK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "BOARD"
    }
   ]
  },
  "RIDE": {
   "word": "RIDE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "BOARD"
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
  "KINDLE": {
   "word": "KINDLE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "BURN"
    }
   ]
  },
  "COMBUST": {
   "word": "COMBUST",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "BURN"
    }
   ]
  },
  "SCALE": {
   "word": "SCALE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CLIMB"
    }
   ]
  },
  "RECLINE": {
   "word": "RECLINE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "LIE"
    }
   ]
  },
  "REPOSE": {
   "word": "REPOSE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "LIE"
    }
   ]
  },
  "SHUT": {
   "word": "SHUT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CLOSE"
    },
    {
     "kind": "word-synonym",
     "of": "TURN"
    }
   ]
  },
  "COMBO": {
   "word": "COMBO",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "COMBIN"
    }
   ]
  },
  "TALLY": {
   "word": "TALLY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "COUNT"
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
  "TRAVERSE": {
   "word": "TRAVERSE",
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
  "GASH": {
   "word": "GASH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CUT"
    }
   ]
  },
  "SLASH": {
   "word": "SLASH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CUT"
    }
   ]
  },
  "LACERATE": {
   "word": "LACERATE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CUT"
    }
   ]
  },
  "CLEAVE": {
   "word": "CLEAVE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CUT"
    }
   ]
  },
  "SEVER": {
   "word": "SEVER",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CUT"
    }
   ]
  },
  "SPLIT": {
   "word": "SPLIT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CUT"
    }
   ]
  },
  "DAMN": {
   "word": "DAMN",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SHIT"
    }
   ]
  },
  "FUCK": {
   "word": "FUCK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SHIT"
    }
   ]
  },
  "DESTROY": {
   "word": "DESTROY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CRACK"
    }
   ]
  },
  "DAMAGE": {
   "word": "DAMAGE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CRACK"
    }
   ]
  },
  "BREAK": {
   "word": "BREAK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CRACK"
    }
   ]
  },
  "SMASH": {
   "word": "SMASH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CRACK"
    }
   ]
  },
  "DEMOLISH": {
   "word": "DEMOLISH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CRACK"
    }
   ]
  },
  "WRECK": {
   "word": "WRECK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CRACK"
    }
   ]
  },
  "EXCAVATE": {
   "word": "EXCAVATE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "DIG"
    }
   ]
  },
  "DEBARK": {
   "word": "DEBARK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "DISEMBARK"
    }
   ]
  },
  "SIP": {
   "word": "SIP",
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
  "IMBIBE": {
   "word": "IMBIBE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "DRINK"
    }
   ]
  },
  "QUAFF": {
   "word": "QUAFF",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "DRINK"
    }
   ]
  },
  "GUZZLE": {
   "word": "GUZZLE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "DRINK"
    }
   ]
  },
  "SWILL": {
   "word": "SWILL",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "DRINK"
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
  "DUMP": {
   "word": "DUMP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "DROP"
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
  "DEVOUR": {
   "word": "DEVOUR",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EAT"
    }
   ]
  },
  "INGEST": {
   "word": "INGEST",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EAT"
    }
   ]
  },
  "GOBBLE": {
   "word": "GOBBLE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EAT"
    }
   ]
  },
  "NIBBLE": {
   "word": "NIBBLE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EAT"
    }
   ]
  },
  "DEPART": {
   "word": "DEPART",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EXIT"
    }
   ]
  },
  "WITHDRAW": {
   "word": "WITHDRAW",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EXIT"
    }
   ]
  },
  "INSPECT": {
   "word": "INSPECT",
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
  "CHECK": {
   "word": "CHECK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EXAMINE"
    }
   ]
  },
  "STUDY": {
   "word": "STUDY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EXAMINE"
    }
   ]
  },
  "SURVEY": {
   "word": "SURVEY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EXAMINE"
    }
   ]
  },
  "OBSERVE": {
   "word": "OBSERVE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EXAMINE"
    }
   ]
  },
  "WATCH": {
   "word": "WATCH",
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
  "QUENCH": {
   "word": "QUENCH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EXTINGUISH"
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
  "UNLEARN": {
   "word": "UNLEARN",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "FORGET"
    }
   ]
  },
  "UNMEMORIZE": {
   "word": "UNMEMORIZE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "FORGET"
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
  "BESTOW": {
   "word": "BESTOW",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "GIVE"
    }
   ]
  },
  "PRESENT": {
   "word": "PRESENT",
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
  "GREETINGS": {
   "word": "GREETINGS",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "HELLO"
    }
   ]
  },
  "SALUTATIONS": {
   "word": "SALUTATIONS",
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
  "CONCEAL": {
   "word": "CONCEAL",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "HIDE"
    }
   ]
  },
  "SECRETE": {
   "word": "SECRETE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "HIDE"
    }
   ]
  },
  "STASH": {
   "word": "STASH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "HIDE"
    }
   ]
  },
  "ENSCONCE": {
   "word": "ENSCONCE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "HIDE"
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
  "BOUND": {
   "word": "BOUND",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "JUMP"
    },
    {
     "kind": "adjective",
     "of": "WHEEL"
    }
   ]
  },
  "HURDLE": {
   "word": "HURDLE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "JUMP"
    }
   ]
  },
  "VAULT": {
   "word": "VAULT",
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
  "DISPATCH": {
   "word": "DISPATCH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "KILL"
    }
   ]
  },
  "STAB": {
   "word": "STAB",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "KILL"
    }
   ]
  },
  "VANQUISH": {
   "word": "VANQUISH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "KILL"
    }
   ]
  },
  "SMOOCH": {
   "word": "SMOOCH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "KISS"
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
  "HARKEN": {
   "word": "HARKEN",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "LISTEN"
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
  "LIQUIFY": {
   "word": "LIQUIFY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "MELT"
    }
   ]
  },
  "DISSOLVE": {
   "word": "DISSOLVE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "MELT"
    }
   ]
  },
  "THAW": {
   "word": "THAW",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "MELT"
    }
   ]
  },
  "DISLOCATE": {
   "word": "DISLOCATE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "MOVE"
    }
   ]
  },
  "SHIFT": {
   "word": "SHIFT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "MOVE"
    }
   ]
  },
  "DISPLA": {
   "word": "DISPLA",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "MOVE"
    },
    {
     "kind": "noun",
     "of": "SLOT-MACHINE"
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
  "DRAG": {
   "word": "DRAG",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "PULL"
    }
   ]
  },
  "SHOVE": {
   "word": "SHOVE",
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
  "CLOG": {
   "word": "CLOG",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "PLUG"
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
  "SPILL": {
   "word": "SPILL",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "POUR"
    }
   ]
  },
  "SPRINKLE": {
   "word": "SPRINKLE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "POUR"
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
  "THRUST": {
   "word": "THRUST",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "PUSH"
    },
    {
     "kind": "word-synonym",
     "of": "SWING"
    }
   ]
  },
  "NUDGE": {
   "word": "NUDGE",
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
    },
    {
     "kind": "noun",
     "of": "GLOBAL-ROOM"
    }
   ]
  },
  "LAY": {
   "word": "LAY",
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
  "ELEVATE": {
   "word": "ELEVATE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "RAISE"
    }
   ]
  },
  "HOIST": {
   "word": "HOIST",
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
  "DEFILE": {
   "word": "DEFILE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "RAPE"
    }
   ]
  },
  "RAVISH": {
   "word": "RAVISH",
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
  "DOFF": {
   "word": "DOFF",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "REMOVE"
    }
   ]
  },
  "SHED": {
   "word": "SHED",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "REMOVE"
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
  "CALL": {
   "word": "CALL",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SAY"
    }
   ]
  },
  "UTTER": {
   "word": "UTTER",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SAY"
    }
   ]
  },
  "PROCLAIM": {
   "word": "PROCLAIM",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SAY"
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
  "FRISK": {
   "word": "FRISK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SEARCH"
    }
   ]
  },
  "RANSACK": {
   "word": "RANSACK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SEARCH"
    }
   ]
  },
  "JOSTLE": {
   "word": "JOSTLE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SHAKE"
    }
   ]
  },
  "RATTLE": {
   "word": "RATTLE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SHAKE"
    }
   ]
  },
  "HONE": {
   "word": "HONE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SHARPEN"
    }
   ]
  },
  "FIRE": {
   "word": "FIRE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SHOOT"
    }
   ]
  },
  "DISCHARGE": {
   "word": "DISCHARGE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SHOOT"
    }
   ]
  },
  "REST": {
   "word": "REST",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SIT"
    }
   ]
  },
  "SQUAT": {
   "word": "SQUAT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SIT"
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
  "CAVORT": {
   "word": "CAVORT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SKIP"
    }
   ]
  },
  "GAMBOL": {
   "word": "GAMBOL",
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
  "WHIFF": {
   "word": "WHIFF",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SMELL"
    }
   ]
  },
  "WHIRL": {
   "word": "WHIRL",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SPIN"
    }
   ]
  },
  "ROTATE": {
   "word": "ROTATE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SPIN"
    }
   ]
  },
  "GYRATE": {
   "word": "GYRATE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SPIN"
    }
   ]
  },
  "RISE": {
   "word": "RISE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "STAND"
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
  "SEIZE": {
   "word": "SEIZE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TAKE"
    }
   ]
  },
  "CONFISCATE": {
   "word": "CONFISCATE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TAKE"
    }
   ]
  },
  "SNATCH": {
   "word": "SNATCH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TAKE"
    }
   ]
  },
  "THANKS": {
   "word": "THANKS",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "THANK"
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
  "FLING": {
   "word": "FLING",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "THROW"
    }
   ]
  },
  "PITCH": {
   "word": "PITCH",
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
  "T": {
   "word": "T",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TIME"
    }
   ]
  },
  "FEEL": {
   "word": "FEEL",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TOUCH"
    }
   ]
  },
  "PAT": {
   "word": "PAT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TOUCH"
    }
   ]
  },
  "PET": {
   "word": "PET",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TOUCH"
    },
    {
     "kind": "adjective",
     "of": "PARROT"
    }
   ]
  },
  "RUB": {
   "word": "RUB",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TOUCH"
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
  "SET": {
   "word": "SET",
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
  "ROUSE": {
   "word": "ROUSE",
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
  "ADVANCE": {
   "word": "ADVANCE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WALK"
    }
   ]
  },
  "TRUDGE": {
   "word": "TRUDGE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WALK"
    }
   ]
  },
  "HIKE": {
   "word": "HIKE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WALK"
    }
   ]
  },
  "TRAMP": {
   "word": "TRAMP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WALK"
    }
   ]
  },
  "MOTION": {
   "word": "MOTION",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WAVE"
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
  "BECKON": {
   "word": "BECKON",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WAVE"
    }
   ]
  },
  "POLISH": {
   "word": "POLISH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WAX"
    }
   ]
  },
  "SHINE": {
   "word": "SHINE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WAX"
    }
   ]
  },
  "DON": {
   "word": "DON",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WEAR"
    }
   ]
  },
  "WHATS": {
   "word": "WHATS",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WHAT"
    }
   ]
  },
  "WHERES": {
   "word": "WHERES",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WHERE"
    }
   ]
  },
  "WHOS": {
   "word": "WHOS",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WHO"
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
  "HOWL": {
   "word": "HOWL",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "YELL"
    }
   ]
  },
  "INCANT": {
   "word": "INCANT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CAST"
    }
   ]
  },
  "INVOKE": {
   "word": "INVOKE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CAST"
    }
   ]
  },
  "MEMORIZE": {
   "word": "MEMORIZE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "LEARN"
    }
   ]
  },
  "KNOW": {
   "word": "KNOW",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "LEARN"
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
  "ARE": {
   "word": "ARE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "AM": {
   "word": "AM",
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
  "PRY": {
   "word": "PRY",
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
  "HERE": {
   "word": "HERE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "SOME": {
   "word": "SOME",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "TREE": {
   "word": "TREE",
   "roles": [
    {
     "kind": "noun",
     "of": "TREE"
    },
    {
     "kind": "noun",
     "of": "ZORKMID-TREE"
    }
   ]
  },
  "BRANCH": {
   "word": "BRANCH",
   "roles": [
    {
     "kind": "noun",
     "of": "TREE"
    },
    {
     "kind": "noun",
     "of": "ZORKMID-TREE"
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
     "of": "COAL-BIN"
    },
    {
     "kind": "adjective",
     "of": "BAT"
    },
    {
     "kind": "adjective",
     "of": "ARCHWAY"
    },
    {
     "kind": "adjective",
     "of": "TRUNK"
    },
    {
     "kind": "adjective",
     "of": "SOOT"
    }
   ]
  },
  "GNARLE": {
   "word": "GNARLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "TREE"
    }
   ]
  },
  "OLD": {
   "word": "OLD",
   "roles": [
    {
     "kind": "adjective",
     "of": "TREE"
    },
    {
     "kind": "adjective",
     "of": "GNOME"
    }
   ]
  },
  "TWISTE": {
   "word": "TWISTE",
   "roles": [
    {
     "kind": "adjective",
     "of": "TREE"
    },
    {
     "kind": "adjective",
     "of": "FOREST"
    }
   ]
  },
  "HELLHO": {
   "word": "HELLHO",
   "roles": [
    {
     "kind": "noun",
     "of": "HELLHOUND"
    }
   ]
  },
  "HOUND": {
   "word": "HOUND",
   "roles": [
    {
     "kind": "noun",
     "of": "HELLHOUND"
    }
   ]
  },
  "DOG": {
   "word": "DOG",
   "roles": [
    {
     "kind": "noun",
     "of": "HELLHOUND"
    }
   ]
  },
  "HELL": {
   "word": "HELL",
   "roles": [
    {
     "kind": "adjective",
     "of": "HELLHOUND"
    }
   ]
  },
  "BOA": {
   "word": "BOA",
   "roles": [
    {
     "kind": "noun",
     "of": "BOA"
    },
    {
     "kind": "adjective",
     "of": "BOA"
    }
   ]
  },
  "CONSTR": {
   "word": "CONSTR",
   "roles": [
    {
     "kind": "noun",
     "of": "BOA"
    }
   ]
  },
  "SNAKE": {
   "word": "SNAKE",
   "roles": [
    {
     "kind": "noun",
     "of": "BOA"
    },
    {
     "kind": "noun",
     "of": "VIPERS"
    }
   ]
  },
  "GIANT": {
   "word": "GIANT",
   "roles": [
    {
     "kind": "adjective",
     "of": "BOA"
    },
    {
     "kind": "adjective",
     "of": "VIPERS"
    }
   ]
  },
  "SIGNPO": {
   "word": "SIGNPO",
   "roles": [
    {
     "kind": "noun",
     "of": "SIGNPOST"
    }
   ]
  },
  "POST": {
   "word": "POST",
   "roles": [
    {
     "kind": "noun",
     "of": "SIGNPOST"
    }
   ]
  },
  "SIGN": {
   "word": "SIGN",
   "roles": [
    {
     "kind": "noun",
     "of": "SIGNPOST"
    },
    {
     "kind": "adjective",
     "of": "SIGNPOST"
    },
    {
     "kind": "noun",
     "of": "DIAL-DOOR"
    }
   ]
  },
  "SNAKES": {
   "word": "SNAKES",
   "roles": [
    {
     "kind": "noun",
     "of": "VIPERS"
    }
   ]
  },
  "BEETLE": {
   "word": "BEETLE",
   "roles": [
    {
     "kind": "noun",
     "of": "VIPERS"
    }
   ]
  },
  "CREATU": {
   "word": "CREATU",
   "roles": [
    {
     "kind": "noun",
     "of": "VIPERS"
    }
   ]
  },
  "VIPER": {
   "word": "VIPER",
   "roles": [
    {
     "kind": "adjective",
     "of": "VIPERS"
    }
   ]
  },
  "VIPERS": {
   "word": "VIPERS",
   "roles": [
    {
     "kind": "adjective",
     "of": "VIPERS"
    }
   ]
  },
  "UNSEEN": {
   "word": "UNSEEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "VIPERS"
    }
   ]
  },
  "GROUP": {
   "word": "GROUP",
   "roles": [
    {
     "kind": "adjective",
     "of": "VIPERS"
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
  "SLIME": {
   "word": "SLIME",
   "roles": [
    {
     "kind": "noun",
     "of": "MOSS"
    }
   ]
  },
  "MEADOW": {
   "word": "MEADOW",
   "roles": [
    {
     "kind": "noun",
     "of": "MEADOW-OBJECT"
    }
   ]
  },
  "GRASS": {
   "word": "GRASS",
   "roles": [
    {
     "kind": "noun",
     "of": "MEADOW-OBJECT"
    }
   ]
  },
  "FIELD": {
   "word": "FIELD",
   "roles": [
    {
     "kind": "noun",
     "of": "MEADOW-OBJECT"
    },
    {
     "kind": "noun",
     "of": "GROUND"
    }
   ]
  },
  "TALL": {
   "word": "TALL",
   "roles": [
    {
     "kind": "adjective",
     "of": "MEADOW-OBJECT"
    },
    {
     "kind": "adjective",
     "of": "BANKS"
    },
    {
     "kind": "adjective",
     "of": "WATERFALL"
    }
   ]
  },
  "ROLLIN": {
   "word": "ROLLIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "MEADOW-OBJECT"
    }
   ]
  },
  "WIDE": {
   "word": "WIDE",
   "roles": [
    {
     "kind": "adjective",
     "of": "MEADOW-OBJECT"
    },
    {
     "kind": "adjective",
     "of": "CANNON"
    },
    {
     "kind": "adjective",
     "of": "ROAD"
    },
    {
     "kind": "adjective",
     "of": "STAIRS"
    },
    {
     "kind": "adjective",
     "of": "ARCHWAY"
    },
    {
     "kind": "adjective",
     "of": "BELBOZ-DESK"
    }
   ]
  },
  "PLAGUE": {
   "word": "PLAGUE",
   "roles": [
    {
     "kind": "noun",
     "of": "PLAGUE-OF-LOCUSTS"
    }
   ]
  },
  "SWARM": {
   "word": "SWARM",
   "roles": [
    {
     "kind": "noun",
     "of": "PLAGUE-OF-LOCUSTS"
    }
   ]
  },
  "LOCUSTS": {
   "word": "LOCUSTS",
   "roles": [
    {
     "kind": "noun",
     "of": "PLAGUE-OF-LOCUSTS"
    }
   ]
  },
  "BLOOD": {
   "word": "BLOOD",
   "roles": [
    {
     "kind": "adjective",
     "of": "PLAGUE-OF-LOCUSTS"
    }
   ]
  },
  "SUCKIN": {
   "word": "SUCKIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "PLAGUE-OF-LOCUSTS"
    }
   ]
  },
  "RIVER": {
   "word": "RIVER",
   "roles": [
    {
     "kind": "noun",
     "of": "RIVER"
    },
    {
     "kind": "adjective",
     "of": "BANKS"
    },
    {
     "kind": "adjective",
     "of": "RIVER-BED-OBJECT"
    }
   ]
  },
  "WATERS": {
   "word": "WATERS",
   "roles": [
    {
     "kind": "noun",
     "of": "RIVER"
    },
    {
     "kind": "noun",
     "of": "OCEAN"
    }
   ]
  },
  "RAPIDS": {
   "word": "RAPIDS",
   "roles": [
    {
     "kind": "noun",
     "of": "RIVER"
    }
   ]
  },
  "MIGHTY": {
   "word": "MIGHTY",
   "roles": [
    {
     "kind": "adjective",
     "of": "RIVER"
    },
    {
     "kind": "adjective",
     "of": "OCEAN"
    },
    {
     "kind": "adjective",
     "of": "FORT"
    }
   ]
  },
  "FAST-": {
   "word": "FAST-",
   "roles": [
    {
     "kind": "adjective",
     "of": "RIVER"
    }
   ]
  },
  "MOVING": {
   "word": "MOVING",
   "roles": [
    {
     "kind": "adjective",
     "of": "RIVER"
    }
   ]
  },
  "TURBUL": {
   "word": "TURBUL",
   "roles": [
    {
     "kind": "adjective",
     "of": "RIVER"
    },
    {
     "kind": "adjective",
     "of": "OCEAN"
    },
    {
     "kind": "adjective",
     "of": "WATER"
    }
   ]
  },
  "FOAMIN": {
   "word": "FOAMIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "RIVER"
    }
   ]
  },
  "UNDERG": {
   "word": "UNDERG",
   "roles": [
    {
     "kind": "noun",
     "of": "UNDERGROWTH"
    },
    {
     "kind": "adjective",
     "of": "ROAD"
    },
    {
     "kind": "adjective",
     "of": "HOVEL"
    }
   ]
  },
  "BANK": {
   "word": "BANK",
   "roles": [
    {
     "kind": "noun",
     "of": "BANKS"
    }
   ]
  },
  "BANKS": {
   "word": "BANKS",
   "roles": [
    {
     "kind": "noun",
     "of": "BANKS"
    }
   ]
  },
  "MUDDY": {
   "word": "MUDDY",
   "roles": [
    {
     "kind": "adjective",
     "of": "BANKS"
    }
   ]
  },
  "STEEP": {
   "word": "STEEP",
   "roles": [
    {
     "kind": "adjective",
     "of": "BANKS"
    },
    {
     "kind": "adjective",
     "of": "STAIRS"
    }
   ]
  },
  "HIGH": {
   "word": "HIGH",
   "roles": [
    {
     "kind": "adjective",
     "of": "BANKS"
    },
    {
     "kind": "adjective",
     "of": "CEILING"
    }
   ]
  },
  "BED": {
   "word": "BED",
   "roles": [
    {
     "kind": "noun",
     "of": "RIVER-BED-OBJECT"
    },
    {
     "kind": "noun",
     "of": "BED"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-BED"
    }
   ]
  },
  "WATERF": {
   "word": "WATERF",
   "roles": [
    {
     "kind": "noun",
     "of": "WATERFALL"
    }
   ]
  },
  "FALL": {
   "word": "FALL",
   "roles": [
    {
     "kind": "noun",
     "of": "WATERFALL"
    }
   ]
  },
  "FALLS": {
   "word": "FALLS",
   "roles": [
    {
     "kind": "noun",
     "of": "WATERFALL"
    }
   ]
  },
  "WATER": {
   "word": "WATER",
   "roles": [
    {
     "kind": "adjective",
     "of": "WATERFALL"
    },
    {
     "kind": "noun",
     "of": "WATER"
    }
   ]
  },
  "PILE": {
   "word": "PILE",
   "roles": [
    {
     "kind": "noun",
     "of": "BAT-GUANO"
    },
    {
     "kind": "noun",
     "of": "YIPPLES"
    }
   ]
  },
  "GUANO": {
   "word": "GUANO",
   "roles": [
    {
     "kind": "noun",
     "of": "BAT-GUANO"
    }
   ]
  },
  "BAT": {
   "word": "BAT",
   "roles": [
    {
     "kind": "adjective",
     "of": "BAT-GUANO"
    },
    {
     "kind": "noun",
     "of": "BAT"
    }
   ]
  },
  "FECES": {
   "word": "FECES",
   "roles": [
    {
     "kind": "adjective",
     "of": "BAT-GUANO"
    }
   ]
  },
  "TURDS": {
   "word": "TURDS",
   "roles": [
    {
     "kind": "adjective",
     "of": "BAT-GUANO"
    }
   ]
  },
  "DUNG": {
   "word": "DUNG",
   "roles": [
    {
     "kind": "adjective",
     "of": "BAT-GUANO"
    }
   ]
  },
  "VIAL": {
   "word": "VIAL",
   "roles": [
    {
     "kind": "noun",
     "of": "BLORT-VIAL"
    },
    {
     "kind": "noun",
     "of": "FLAXO-VIAL"
    },
    {
     "kind": "noun",
     "of": "FOOBLE-VIAL"
    },
    {
     "kind": "noun",
     "of": "VILSTU-VIAL"
    },
    {
     "kind": "noun",
     "of": "BERZIO-VIAL"
    }
   ]
  },
  "VIALS": {
   "word": "VIALS",
   "roles": [
    {
     "kind": "noun",
     "of": "BLORT-VIAL"
    },
    {
     "kind": "noun",
     "of": "FLAXO-VIAL"
    },
    {
     "kind": "noun",
     "of": "FOOBLE-VIAL"
    },
    {
     "kind": "noun",
     "of": "VILSTU-VIAL"
    },
    {
     "kind": "noun",
     "of": "BERZIO-VIAL"
    }
   ]
  },
  "LABEL": {
   "word": "LABEL",
   "roles": [
    {
     "kind": "noun",
     "of": "BLORT-VIAL"
    },
    {
     "kind": "noun",
     "of": "FLAXO-VIAL"
    },
    {
     "kind": "noun",
     "of": "CRATE"
    },
    {
     "kind": "noun",
     "of": "FOOBLE-VIAL"
    },
    {
     "kind": "noun",
     "of": "MAGAZINE"
    },
    {
     "kind": "noun",
     "of": "VILSTU-VIAL"
    },
    {
     "kind": "noun",
     "of": "BERZIO-VIAL"
    }
   ]
  },
  "AMBER": {
   "word": "AMBER",
   "roles": [
    {
     "kind": "adjective",
     "of": "BLORT-VIAL"
    },
    {
     "kind": "adjective",
     "of": "BLORT-POTION"
    }
   ]
  },
  "BLORT": {
   "word": "BLORT",
   "roles": [
    {
     "kind": "adjective",
     "of": "BLORT-VIAL"
    },
    {
     "kind": "adjective",
     "of": "BLORT-POTION"
    }
   ]
  },
  "POTION": {
   "word": "POTION",
   "roles": [
    {
     "kind": "noun",
     "of": "BLORT-POTION"
    },
    {
     "kind": "noun",
     "of": "FLAXO-POTION"
    },
    {
     "kind": "noun",
     "of": "FOOBLE-POTION"
    },
    {
     "kind": "noun",
     "of": "VILSTU-POTION"
    },
    {
     "kind": "noun",
     "of": "BERZIO-POTION"
    }
   ]
  },
  "SCROLL": {
   "word": "SCROLL",
   "roles": [
    {
     "kind": "noun",
     "of": "FWEEP-SCROLL"
    },
    {
     "kind": "noun",
     "of": "VARDIK-SCROLL"
    },
    {
     "kind": "noun",
     "of": "GOLMAC-SCROLL"
    },
    {
     "kind": "noun",
     "of": "YIPPLES"
    },
    {
     "kind": "noun",
     "of": "YONK-SCROLL"
    },
    {
     "kind": "noun",
     "of": "GASPAR-SCROLL"
    },
    {
     "kind": "noun",
     "of": "MEEF-SCROLL"
    },
    {
     "kind": "noun",
     "of": "AIMFIZ-SCROLL"
    },
    {
     "kind": "noun",
     "of": "SWANZO-SCROLL"
    },
    {
     "kind": "noun",
     "of": "MALYON-SCROLL"
    }
   ]
  },
  "SOILED": {
   "word": "SOILED",
   "roles": [
    {
     "kind": "adjective",
     "of": "FWEEP-SCROLL"
    }
   ]
  },
  "SPELL": {
   "word": "SPELL",
   "roles": [
    {
     "kind": "noun",
     "of": "FWEEP-SPELL"
    },
    {
     "kind": "noun",
     "of": "VARDIK-SPELL"
    },
    {
     "kind": "noun",
     "of": "GOLMAC-SPELL"
    },
    {
     "kind": "noun",
     "of": "YONK-SPELL"
    },
    {
     "kind": "adjective",
     "of": "SPELL-BOOK"
    },
    {
     "kind": "noun",
     "of": "GNUSTO-SPELL"
    },
    {
     "kind": "noun",
     "of": "FROTZ-SPELL"
    },
    {
     "kind": "noun",
     "of": "REZROV-SPELL"
    },
    {
     "kind": "noun",
     "of": "YOMIN-SPELL"
    },
    {
     "kind": "noun",
     "of": "IZYUK-SPELL"
    },
    {
     "kind": "noun",
     "of": "PULVER-SPELL"
    },
    {
     "kind": "noun",
     "of": "VEZZA-SPELL"
    },
    {
     "kind": "noun",
     "of": "GASPAR-SPELL"
    },
    {
     "kind": "noun",
     "of": "MEEF-SPELL"
    },
    {
     "kind": "noun",
     "of": "AIMFIZ-SPELL"
    },
    {
     "kind": "noun",
     "of": "SWANZO-SPELL"
    },
    {
     "kind": "noun",
     "of": "MALYON-SPELL"
    }
   ]
  },
  "MOAT": {
   "word": "MOAT",
   "roles": [
    {
     "kind": "noun",
     "of": "MOAT"
    }
   ]
  },
  "BRIDGE": {
   "word": "BRIDGE",
   "roles": [
    {
     "kind": "noun",
     "of": "BRIDGE"
    }
   ]
  },
  "DRAWBR": {
   "word": "DRAWBR",
   "roles": [
    {
     "kind": "noun",
     "of": "BRIDGE"
    }
   ]
  },
  "ROTTED": {
   "word": "ROTTED",
   "roles": [
    {
     "kind": "adjective",
     "of": "BRIDGE"
    }
   ]
  },
  "WOODEN": {
   "word": "WOODEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "BRIDGE"
    },
    {
     "kind": "adjective",
     "of": "BEAM"
    },
    {
     "kind": "adjective",
     "of": "CRATE"
    },
    {
     "kind": "adjective",
     "of": "WHITE-DOOR"
    },
    {
     "kind": "adjective",
     "of": "CHAMBER-DOOR"
    }
   ]
  },
  "DRAW": {
   "word": "DRAW",
   "roles": [
    {
     "kind": "adjective",
     "of": "BRIDGE"
    }
   ]
  },
  "DEVICE": {
   "word": "DEVICE",
   "roles": [
    {
     "kind": "noun",
     "of": "TORTURE-DEVICES"
    },
    {
     "kind": "noun",
     "of": "MACHINERY"
    }
   ]
  },
  "RACK": {
   "word": "RACK",
   "roles": [
    {
     "kind": "noun",
     "of": "TORTURE-DEVICES"
    }
   ]
  },
  "PIT": {
   "word": "PIT",
   "roles": [
    {
     "kind": "noun",
     "of": "TORTURE-DEVICES"
    }
   ]
  },
  "PENDUL": {
   "word": "PENDUL",
   "roles": [
    {
     "kind": "noun",
     "of": "TORTURE-DEVICES"
    }
   ]
  },
  "LETTER": {
   "word": "LETTER",
   "roles": [
    {
     "kind": "noun",
     "of": "FLAXO-VIAL"
    },
    {
     "kind": "noun",
     "of": "CRATE"
    },
    {
     "kind": "noun",
     "of": "VILSTU-VIAL"
    },
    {
     "kind": "noun",
     "of": "BERZIO-VIAL"
    }
   ]
  },
  "INDIGO": {
   "word": "INDIGO",
   "roles": [
    {
     "kind": "adjective",
     "of": "FLAXO-VIAL"
    },
    {
     "kind": "adjective",
     "of": "FLAXO-POTION"
    }
   ]
  },
  "FLAXO": {
   "word": "FLAXO",
   "roles": [
    {
     "kind": "adjective",
     "of": "FLAXO-VIAL"
    },
    {
     "kind": "adjective",
     "of": "FLAXO-POTION"
    }
   ]
  },
  "TINY": {
   "word": "TINY",
   "roles": [
    {
     "kind": "adjective",
     "of": "FLAXO-VIAL"
    },
    {
     "kind": "adjective",
     "of": "MACHINERY"
    },
    {
     "kind": "adjective",
     "of": "GROUND"
    },
    {
     "kind": "adjective",
     "of": "TINY-BOX"
    },
    {
     "kind": "adjective",
     "of": "KEY"
    },
    {
     "kind": "adjective",
     "of": "VILSTU-VIAL"
    },
    {
     "kind": "adjective",
     "of": "BERZIO-VIAL"
    }
   ]
  },
  "GATE": {
   "word": "GATE",
   "roles": [
    {
     "kind": "noun",
     "of": "GATE"
    }
   ]
  },
  "TOLL": {
   "word": "TOLL",
   "roles": [
    {
     "kind": "adjective",
     "of": "GATE"
    },
    {
     "kind": "adjective",
     "of": "BOOTH"
    },
    {
     "kind": "noun",
     "of": "ZORKMID"
    }
   ]
  },
  "STURDY": {
   "word": "STURDY",
   "roles": [
    {
     "kind": "adjective",
     "of": "GATE"
    },
    {
     "kind": "adjective",
     "of": "TRUNK"
    }
   ]
  },
  "BOOTH": {
   "word": "BOOTH",
   "roles": [
    {
     "kind": "noun",
     "of": "BOOTH"
    }
   ]
  },
  "GNOME": {
   "word": "GNOME",
   "roles": [
    {
     "kind": "noun",
     "of": "GNOME"
    },
    {
     "kind": "adjective",
     "of": "GNOME"
    },
    {
     "kind": "noun",
     "of": "PARK-GNOME"
    }
   ]
  },
  "BEARD": {
   "word": "BEARD",
   "roles": [
    {
     "kind": "noun",
     "of": "GNOME"
    }
   ]
  },
  "POCKET": {
   "word": "POCKET",
   "roles": [
    {
     "kind": "noun",
     "of": "GNOME"
    }
   ]
  },
  "FAT": {
   "word": "FAT",
   "roles": [
    {
     "kind": "adjective",
     "of": "GNOME"
    }
   ]
  },
  "LONG": {
   "word": "LONG",
   "roles": [
    {
     "kind": "adjective",
     "of": "GNOME"
    },
    {
     "kind": "adjective",
     "of": "CORRIDOR"
    }
   ]
  },
  "WHITE": {
   "word": "WHITE",
   "roles": [
    {
     "kind": "adjective",
     "of": "GNOME"
    },
    {
     "kind": "adjective",
     "of": "WHITE-DOOR"
    },
    {
     "kind": "adjective",
     "of": "WHITE-BUTTON"
    }
   ]
  },
  "WAXER": {
   "word": "WAXER",
   "roles": [
    {
     "kind": "noun",
     "of": "WAXER"
    }
   ]
  },
  "APPLIA": {
   "word": "APPLIA",
   "roles": [
    {
     "kind": "noun",
     "of": "WAXER"
    }
   ]
  },
  "FLOOR": {
   "word": "FLOOR",
   "roles": [
    {
     "kind": "adjective",
     "of": "WAXER"
    },
    {
     "kind": "noun",
     "of": "GROUND"
    }
   ]
  },
  "BOW": {
   "word": "BOW",
   "roles": [
    {
     "kind": "noun",
     "of": "ZORKMID-TREE"
    }
   ]
  },
  "TWIG": {
   "word": "TWIG",
   "roles": [
    {
     "kind": "noun",
     "of": "ZORKMID-TREE"
    }
   ]
  },
  "ZORKMID": {
   "word": "ZORKMID",
   "roles": [
    {
     "kind": "adjective",
     "of": "ZORKMID-TREE"
    },
    {
     "kind": "noun",
     "of": "ZORKMID"
    },
    {
     "kind": "adjective",
     "of": "ZORKMID"
    }
   ]
  },
  "COIN": {
   "word": "COIN",
   "roles": [
    {
     "kind": "noun",
     "of": "ZORKMID"
    }
   ]
  },
  "COINS": {
   "word": "COINS",
   "roles": [
    {
     "kind": "noun",
     "of": "ZORKMID"
    }
   ]
  },
  "CARVIN": {
   "word": "CARVIN",
   "roles": [
    {
     "kind": "noun",
     "of": "DRAGON"
    }
   ]
  },
  "DRAGON": {
   "word": "DRAGON",
   "roles": [
    {
     "kind": "noun",
     "of": "DRAGON"
    }
   ]
  },
  "HUGE": {
   "word": "HUGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "DRAGON"
    }
   ]
  },
  "STONE": {
   "word": "STONE",
   "roles": [
    {
     "kind": "adjective",
     "of": "DRAGON"
    },
    {
     "kind": "adjective",
     "of": "GROUND"
    },
    {
     "kind": "adjective",
     "of": "HOVEL"
    }
   ]
  },
  "SLEEPI": {
   "word": "SLEEPI",
   "roles": [
    {
     "kind": "adjective",
     "of": "DRAGON"
    }
   ]
  },
  "LARGES": {
   "word": "LARGES",
   "roles": [
    {
     "kind": "adjective",
     "of": "DRAGON"
    }
   ]
  },
  "MOST": {
   "word": "MOST",
   "roles": [
    {
     "kind": "adjective",
     "of": "DRAGON"
    }
   ]
  },
  "STRIKI": {
   "word": "STRIKI",
   "roles": [
    {
     "kind": "adjective",
     "of": "DRAGON"
    }
   ]
  },
  "INTRIC": {
   "word": "INTRIC",
   "roles": [
    {
     "kind": "adjective",
     "of": "DRAGON"
    }
   ]
  },
  "LUMPS": {
   "word": "LUMPS",
   "roles": [
    {
     "kind": "noun",
     "of": "COAL"
    }
   ]
  },
  "COAL": {
   "word": "COAL",
   "roles": [
    {
     "kind": "noun",
     "of": "COAL"
    },
    {
     "kind": "adjective",
     "of": "COAL-BIN"
    },
    {
     "kind": "adjective",
     "of": "UPPER-CHUTE"
    },
    {
     "kind": "adjective",
     "of": "LOWER-CHUTE"
    }
   ]
  },
  "BIN": {
   "word": "BIN",
   "roles": [
    {
     "kind": "noun",
     "of": "COAL-BIN"
    }
   ]
  },
  "CHUTE": {
   "word": "CHUTE",
   "roles": [
    {
     "kind": "noun",
     "of": "UPPER-CHUTE"
    },
    {
     "kind": "noun",
     "of": "LOWER-CHUTE"
    }
   ]
  },
  "UPPER": {
   "word": "UPPER",
   "roles": [
    {
     "kind": "adjective",
     "of": "UPPER-CHUTE"
    }
   ]
  },
  "METAL": {
   "word": "METAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "UPPER-CHUTE"
    },
    {
     "kind": "adjective",
     "of": "LOWER-CHUTE"
    },
    {
     "kind": "adjective",
     "of": "KEROSENE-LAMP"
    }
   ]
  },
  "STRANG": {
   "word": "STRANG",
   "roles": [
    {
     "kind": "noun",
     "of": "OLDER-SELF"
    }
   ]
  },
  "SELF": {
   "word": "SELF",
   "roles": [
    {
     "kind": "noun",
     "of": "OLDER-SELF"
    },
    {
     "kind": "noun",
     "of": "YOUNGER-SELF"
    },
    {
     "kind": "noun",
     "of": "ME"
    }
   ]
  },
  "OLDER": {
   "word": "OLDER",
   "roles": [
    {
     "kind": "noun",
     "of": "OLDER-SELF"
    },
    {
     "kind": "adjective",
     "of": "OLDER-SELF"
    }
   ]
  },
  "TWIN": {
   "word": "TWIN",
   "roles": [
    {
     "kind": "noun",
     "of": "OLDER-SELF"
    },
    {
     "kind": "noun",
     "of": "YOUNGER-SELF"
    }
   ]
  },
  "YOUR": {
   "word": "YOUR",
   "roles": [
    {
     "kind": "adjective",
     "of": "OLDER-SELF"
    },
    {
     "kind": "adjective",
     "of": "YOUNGER-SELF"
    }
   ]
  },
  "MY": {
   "word": "MY",
   "roles": [
    {
     "kind": "adjective",
     "of": "OLDER-SELF"
    },
    {
     "kind": "adjective",
     "of": "YOUNGER-SELF"
    },
    {
     "kind": "adjective",
     "of": "SPELL-BOOK"
    }
   ]
  },
  "YOUNGE": {
   "word": "YOUNGE",
   "roles": [
    {
     "kind": "noun",
     "of": "YOUNGER-SELF"
    },
    {
     "kind": "adjective",
     "of": "YOUNGER-SELF"
    }
   ]
  },
  "DOOR": {
   "word": "DOOR",
   "roles": [
    {
     "kind": "noun",
     "of": "DIAL-DOOR"
    },
    {
     "kind": "noun",
     "of": "KEROSENE-LAMP"
    },
    {
     "kind": "noun",
     "of": "BLACK-DOOR"
    },
    {
     "kind": "noun",
     "of": "SILVER-DOOR"
    },
    {
     "kind": "noun",
     "of": "WHITE-DOOR"
    },
    {
     "kind": "noun",
     "of": "CHAMBER-DOOR"
    }
   ]
  },
  "DOORS": {
   "word": "DOORS",
   "roles": [
    {
     "kind": "noun",
     "of": "DIAL-DOOR"
    },
    {
     "kind": "noun",
     "of": "BLACK-DOOR"
    },
    {
     "kind": "noun",
     "of": "SILVER-DOOR"
    },
    {
     "kind": "noun",
     "of": "WHITE-DOOR"
    },
    {
     "kind": "noun",
     "of": "CHAMBER-DOOR"
    }
   ]
  },
  "HEAVY": {
   "word": "HEAVY",
   "roles": [
    {
     "kind": "adjective",
     "of": "DIAL-DOOR"
    },
    {
     "kind": "adjective",
     "of": "KNIFE"
    },
    {
     "kind": "adjective",
     "of": "CHAMBER-DOOR"
    },
    {
     "kind": "adjective",
     "of": "ENCYCLOPEDIA"
    }
   ]
  },
  "DIAL": {
   "word": "DIAL",
   "roles": [
    {
     "kind": "noun",
     "of": "DIAL"
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
  "ROPE": {
   "word": "ROPE",
   "roles": [
    {
     "kind": "noun",
     "of": "ROPE"
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
  "WOOD": {
   "word": "WOOD",
   "roles": [
    {
     "kind": "noun",
     "of": "BEAM"
    },
    {
     "kind": "adjective",
     "of": "CRATE"
    },
    {
     "kind": "adjective",
     "of": "WHITE-DOOR"
    },
    {
     "kind": "adjective",
     "of": "BELBOZ-DESK"
    }
   ]
  },
  "TIMBER": {
   "word": "TIMBER",
   "roles": [
    {
     "kind": "noun",
     "of": "BEAM"
    }
   ]
  },
  "TROGLO": {
   "word": "TROGLO",
   "roles": [
    {
     "kind": "noun",
     "of": "TROGLODYTE"
    }
   ]
  },
  "LAMP": {
   "word": "LAMP",
   "roles": [
    {
     "kind": "noun",
     "of": "KEROSENE-LAMP"
    },
    {
     "kind": "noun",
     "of": "BRASS-LANTERN"
    }
   ]
  },
  "BOWL": {
   "word": "BOWL",
   "roles": [
    {
     "kind": "noun",
     "of": "KEROSENE-LAMP"
    }
   ]
  },
  "KEROSE": {
   "word": "KEROSE",
   "roles": [
    {
     "kind": "adjective",
     "of": "KEROSENE-LAMP"
    }
   ]
  },
  "SMALL": {
   "word": "SMALL",
   "roles": [
    {
     "kind": "adjective",
     "of": "KEROSENE-LAMP"
    },
    {
     "kind": "adjective",
     "of": "LAGOON-OBJECT"
    },
    {
     "kind": "adjective",
     "of": "HOLE"
    },
    {
     "kind": "adjective",
     "of": "KEY"
    },
    {
     "kind": "adjective",
     "of": "BERZIO-VIAL"
    },
    {
     "kind": "adjective",
     "of": "FIREPLACE"
    },
    {
     "kind": "adjective",
     "of": "BRICK-STRUCTURE"
    }
   ]
  },
  "GLASS": {
   "word": "GLASS",
   "roles": [
    {
     "kind": "adjective",
     "of": "KEROSENE-LAMP"
    },
    {
     "kind": "adjective",
     "of": "ARCHWAY"
    },
    {
     "kind": "adjective",
     "of": "MAZE"
    }
   ]
  },
  "SMELLY": {
   "word": "SMELLY",
   "roles": [
    {
     "kind": "adjective",
     "of": "VARDIK-SCROLL"
    }
   ]
  },
  "SHIMME": {
   "word": "SHIMME",
   "roles": [
    {
     "kind": "adjective",
     "of": "GOLMAC-SCROLL"
    }
   ]
  },
  "BEACH": {
   "word": "BEACH",
   "roles": [
    {
     "kind": "noun",
     "of": "BEACH"
    }
   ]
  },
  "SHORE": {
   "word": "SHORE",
   "roles": [
    {
     "kind": "noun",
     "of": "BEACH"
    }
   ]
  },
  "SAND": {
   "word": "SAND",
   "roles": [
    {
     "kind": "noun",
     "of": "BEACH"
    }
   ]
  },
  "CURVED": {
   "word": "CURVED",
   "roles": [
    {
     "kind": "adjective",
     "of": "BEACH"
    },
    {
     "kind": "adjective",
     "of": "ROAD"
    }
   ]
  },
  "SANDY": {
   "word": "SANDY",
   "roles": [
    {
     "kind": "adjective",
     "of": "BEACH"
    },
    {
     "kind": "adjective",
     "of": "GROUND"
    }
   ]
  },
  "NARROW": {
   "word": "NARROW",
   "roles": [
    {
     "kind": "adjective",
     "of": "BEACH"
    },
    {
     "kind": "adjective",
     "of": "STAIRS"
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
  "FLATHE": {
   "word": "FLATHE",
   "roles": [
    {
     "kind": "adjective",
     "of": "OCEAN"
    }
   ]
  },
  "LAGOON": {
   "word": "LAGOON",
   "roles": [
    {
     "kind": "noun",
     "of": "LAGOON-OBJECT"
    }
   ]
  },
  "INLET": {
   "word": "INLET",
   "roles": [
    {
     "kind": "noun",
     "of": "LAGOON-OBJECT"
    }
   ]
  },
  "COVE": {
   "word": "COVE",
   "roles": [
    {
     "kind": "noun",
     "of": "LAGOON-OBJECT"
    }
   ]
  },
  "CALM": {
   "word": "CALM",
   "roles": [
    {
     "kind": "adjective",
     "of": "LAGOON-OBJECT"
    }
   ]
  },
  "CLUMP": {
   "word": "CLUMP",
   "roles": [
    {
     "kind": "noun",
     "of": "SPENSEWEEDS"
    }
   ]
  },
  "SPENSE": {
   "word": "SPENSE",
   "roles": [
    {
     "kind": "noun",
     "of": "SPENSEWEEDS"
    }
   ]
  },
  "WEEDS": {
   "word": "WEEDS",
   "roles": [
    {
     "kind": "noun",
     "of": "SPENSEWEEDS"
    }
   ]
  },
  "WEED": {
   "word": "WEED",
   "roles": [
    {
     "kind": "noun",
     "of": "SPENSEWEEDS"
    }
   ]
  },
  "SEA": {
   "word": "SEA",
   "roles": [
    {
     "kind": "adjective",
     "of": "SPENSEWEEDS"
    }
   ]
  },
  "STUNNI": {
   "word": "STUNNI",
   "roles": [
    {
     "kind": "adjective",
     "of": "SPENSEWEEDS"
    }
   ]
  },
  "BEAUTI": {
   "word": "BEAUTI",
   "roles": [
    {
     "kind": "adjective",
     "of": "SPENSEWEEDS"
    },
    {
     "kind": "adjective",
     "of": "WALL-HANGING"
    }
   ]
  },
  "CRATE": {
   "word": "CRATE",
   "roles": [
    {
     "kind": "noun",
     "of": "CRATE"
    }
   ]
  },
  "BLACK": {
   "word": "BLACK",
   "roles": [
    {
     "kind": "adjective",
     "of": "CRATE"
    },
    {
     "kind": "adjective",
     "of": "BLACK-DOOR"
    },
    {
     "kind": "adjective",
     "of": "BLACK-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "SOOT"
    }
   ]
  },
  "STENCI": {
   "word": "STENCI",
   "roles": [
    {
     "kind": "adjective",
     "of": "CRATE"
    }
   ]
  },
  "SUIT": {
   "word": "SUIT",
   "roles": [
    {
     "kind": "noun",
     "of": "GRUE-SUIT"
    }
   ]
  },
  "GRUE": {
   "word": "GRUE",
   "roles": [
    {
     "kind": "adjective",
     "of": "GRUE-SUIT"
    },
    {
     "kind": "adjective",
     "of": "GRUE-REPELLENT"
    },
    {
     "kind": "noun",
     "of": "MUTATED-GRUES"
    },
    {
     "kind": "noun",
     "of": "GRUE"
    }
   ]
  },
  "LANTERN": {
   "word": "LANTERN",
   "roles": [
    {
     "kind": "noun",
     "of": "BRASS-LANTERN"
    }
   ]
  },
  "BRASS": {
   "word": "BRASS",
   "roles": [
    {
     "kind": "adjective",
     "of": "BRASS-LANTERN"
    },
    {
     "kind": "adjective",
     "of": "MAILBOX"
    }
   ]
  },
  "BATTER": {
   "word": "BATTER",
   "roles": [
    {
     "kind": "adjective",
     "of": "BRASS-LANTERN"
    }
   ]
  },
  "POWERE": {
   "word": "POWERE",
   "roles": [
    {
     "kind": "adjective",
     "of": "BRASS-LANTERN"
    }
   ]
  },
  "REPELLENT": {
   "word": "REPELLENT",
   "roles": [
    {
     "kind": "noun",
     "of": "GRUE-REPELLENT"
    }
   ]
  },
  "CAN": {
   "word": "CAN",
   "roles": [
    {
     "kind": "noun",
     "of": "GRUE-REPELLENT"
    }
   ]
  },
  "MAGIC": {
   "word": "MAGIC",
   "roles": [
    {
     "kind": "adjective",
     "of": "GRUE-REPELLENT"
    },
    {
     "kind": "adjective",
     "of": "MAGIC-AMULET"
    }
   ]
  },
  "MASS": {
   "word": "MASS",
   "roles": [
    {
     "kind": "noun",
     "of": "VINES"
    }
   ]
  },
  "VINES": {
   "word": "VINES",
   "roles": [
    {
     "kind": "noun",
     "of": "VINES"
    }
   ]
  },
  "VINE": {
   "word": "VINE",
   "roles": [
    {
     "kind": "noun",
     "of": "VINES"
    }
   ]
  },
  "PLANTS": {
   "word": "PLANTS",
   "roles": [
    {
     "kind": "noun",
     "of": "VINES"
    },
    {
     "kind": "noun",
     "of": "MORGIA-PLANT"
    }
   ]
  },
  "WRIGLI": {
   "word": "WRIGLI",
   "roles": [
    {
     "kind": "adjective",
     "of": "VINES"
    }
   ]
  },
  "WRITHI": {
   "word": "WRITHI",
   "roles": [
    {
     "kind": "adjective",
     "of": "VINES"
    }
   ]
  },
  "GREEN": {
   "word": "GREEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "VINES"
    }
   ]
  },
  "PACK": {
   "word": "PACK",
   "roles": [
    {
     "kind": "noun",
     "of": "MUTATED-GRUES"
    }
   ]
  },
  "GRUES": {
   "word": "GRUES",
   "roles": [
    {
     "kind": "noun",
     "of": "MUTATED-GRUES"
    }
   ]
  },
  "MUTATE": {
   "word": "MUTATE",
   "roles": [
    {
     "kind": "adjective",
     "of": "MUTATED-GRUES"
    }
   ]
  },
  "MACHIN": {
   "word": "MACHIN",
   "roles": [
    {
     "kind": "noun",
     "of": "MACHINERY"
    },
    {
     "kind": "noun",
     "of": "SLOT-MACHINE"
    }
   ]
  },
  "BREEDER": {
   "word": "BREEDER",
   "roles": [
    {
     "kind": "noun",
     "of": "MACHINERY"
    }
   ]
  },
  "PLAQUE": {
   "word": "PLAQUE",
   "roles": [
    {
     "kind": "noun",
     "of": "MACHINERY"
    }
   ]
  },
  "DIABOL": {
   "word": "DIABOL",
   "roles": [
    {
     "kind": "adjective",
     "of": "MACHINERY"
    }
   ]
  },
  "EVIL": {
   "word": "EVIL",
   "roles": [
    {
     "kind": "adjective",
     "of": "MACHINERY"
    },
    {
     "kind": "adjective",
     "of": "JEEARR"
    }
   ]
  },
  "POWERF": {
   "word": "POWERF",
   "roles": [
    {
     "kind": "adjective",
     "of": "MACHINERY"
    },
    {
     "kind": "adjective",
     "of": "JEEARR"
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
     "of": "RED-BUTTON"
    }
   ]
  },
  "DAGGER": {
   "word": "DAGGER",
   "roles": [
    {
     "kind": "noun",
     "of": "KNIFE"
    }
   ]
  },
  "HANDLE": {
   "word": "HANDLE",
   "roles": [
    {
     "kind": "noun",
     "of": "KNIFE"
    }
   ]
  },
  "DIAMON": {
   "word": "DIAMON",
   "roles": [
    {
     "kind": "adjective",
     "of": "KNIFE"
    }
   ]
  },
  "STUDDE": {
   "word": "STUDDE",
   "roles": [
    {
     "kind": "adjective",
     "of": "KNIFE"
    }
   ]
  },
  "ENCRUS": {
   "word": "ENCRUS",
   "roles": [
    {
     "kind": "adjective",
     "of": "KNIFE"
    }
   ]
  },
  "MARBLE": {
   "word": "MARBLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "BLACK-DOOR"
    },
    {
     "kind": "adjective",
     "of": "STAIRS"
    },
    {
     "kind": "adjective",
     "of": "ARCHWAY"
    },
    {
     "kind": "adjective",
     "of": "STATUE"
    }
   ]
  },
  "SHINY": {
   "word": "SHINY",
   "roles": [
    {
     "kind": "adjective",
     "of": "SILVER-DOOR"
    },
    {
     "kind": "adjective",
     "of": "GASPAR-SCROLL"
    }
   ]
  },
  "SILVER": {
   "word": "SILVER",
   "roles": [
    {
     "kind": "adjective",
     "of": "SILVER-DOOR"
    }
   ]
  },
  "BLEACH": {
   "word": "BLEACH",
   "roles": [
    {
     "kind": "adjective",
     "of": "WHITE-DOOR"
    }
   ]
  },
  "FORT": {
   "word": "FORT",
   "roles": [
    {
     "kind": "noun",
     "of": "FORT"
    },
    {
     "kind": "adjective",
     "of": "FORT"
    }
   ]
  },
  "GRIFFS": {
   "word": "GRIFFS",
   "roles": [
    {
     "kind": "noun",
     "of": "FORT"
    }
   ]
  },
  "RAMPAR": {
   "word": "RAMPAR",
   "roles": [
    {
     "kind": "noun",
     "of": "FORT"
    }
   ]
  },
  "FORTRE": {
   "word": "FORTRE",
   "roles": [
    {
     "kind": "noun",
     "of": "FORT"
    }
   ]
  },
  "PROUD": {
   "word": "PROUD",
   "roles": [
    {
     "kind": "adjective",
     "of": "FORT"
    }
   ]
  },
  "POLE": {
   "word": "POLE",
   "roles": [
    {
     "kind": "noun",
     "of": "FLAG-POLE"
    }
   ]
  },
  "FLAGPO": {
   "word": "FLAGPO",
   "roles": [
    {
     "kind": "noun",
     "of": "FLAG-POLE"
    }
   ]
  },
  "FLAG": {
   "word": "FLAG",
   "roles": [
    {
     "kind": "adjective",
     "of": "FLAG-POLE"
    },
    {
     "kind": "noun",
     "of": "FLAG"
    }
   ]
  },
  "TATTER": {
   "word": "TATTER",
   "roles": [
    {
     "kind": "adjective",
     "of": "FLAG"
    }
   ]
  },
  "BROWN": {
   "word": "BROWN",
   "roles": [
    {
     "kind": "adjective",
     "of": "FLAG"
    }
   ]
  },
  "GOLD": {
   "word": "GOLD",
   "roles": [
    {
     "kind": "adjective",
     "of": "FLAG"
    }
   ]
  },
  "AQUA": {
   "word": "AQUA",
   "roles": [
    {
     "kind": "adjective",
     "of": "FOOBLE-VIAL"
    },
    {
     "kind": "adjective",
     "of": "FOOBLE-POTION"
    }
   ]
  },
  "FOOBLE": {
   "word": "FOOBLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "FOOBLE-VIAL"
    },
    {
     "kind": "adjective",
     "of": "FOOBLE-POTION"
    }
   ]
  },
  "CANNON": {
   "word": "CANNON",
   "roles": [
    {
     "kind": "noun",
     "of": "CANNON"
    }
   ]
  },
  "BARREL": {
   "word": "BARREL",
   "roles": [
    {
     "kind": "noun",
     "of": "CANNON"
    }
   ]
  },
  "MAGNIF": {
   "word": "MAGNIF",
   "roles": [
    {
     "kind": "adjective",
     "of": "CANNON"
    }
   ]
  },
  "CAST-IRON": {
   "word": "CAST-IRON",
   "roles": [
    {
     "kind": "adjective",
     "of": "CANNON"
    }
   ]
  },
  "IRON": {
   "word": "IRON",
   "roles": [
    {
     "kind": "adjective",
     "of": "CANNON"
    }
   ]
  },
  "SHALLO": {
   "word": "SHALLO",
   "roles": [
    {
     "kind": "adjective",
     "of": "CANNON"
    }
   ]
  },
  "IDENTI": {
   "word": "IDENTI",
   "roles": [
    {
     "kind": "adjective",
     "of": "YIPPLES"
    }
   ]
  },
  "SINGLE": {
   "word": "SINGLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "YONK-SCROLL"
    }
   ]
  },
  "ORDINA": {
   "word": "ORDINA",
   "roles": [
    {
     "kind": "adjective",
     "of": "YONK-SCROLL"
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
  "THAT": {
   "word": "THAT",
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
  "RUBBLE": {
   "word": "RUBBLE",
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
  "CAVE-IN": {
   "word": "CAVE-IN",
   "roles": [
    {
     "kind": "noun",
     "of": "DEBRIS"
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
  "GROUND": {
   "word": "GROUND",
   "roles": [
    {
     "kind": "noun",
     "of": "GROUND"
    }
   ]
  },
  "PLATEAU": {
   "word": "PLATEAU",
   "roles": [
    {
     "kind": "noun",
     "of": "GROUND"
    }
   ]
  },
  "OUTDOO": {
   "word": "OUTDOO",
   "roles": [
    {
     "kind": "adjective",
     "of": "GROUND"
    }
   ]
  },
  "LEVEL": {
   "word": "LEVEL",
   "roles": [
    {
     "kind": "adjective",
     "of": "GROUND"
    }
   ]
  },
  "HIGHWAY": {
   "word": "HIGHWAY",
   "roles": [
    {
     "kind": "noun",
     "of": "ROAD"
    }
   ]
  },
  "ROAD": {
   "word": "ROAD",
   "roles": [
    {
     "kind": "noun",
     "of": "ROAD"
    }
   ]
  },
  "TRAIL": {
   "word": "TRAIL",
   "roles": [
    {
     "kind": "noun",
     "of": "ROAD"
    }
   ]
  },
  "PATH": {
   "word": "PATH",
   "roles": [
    {
     "kind": "noun",
     "of": "ROAD"
    }
   ]
  },
  "DIRT": {
   "word": "DIRT",
   "roles": [
    {
     "kind": "adjective",
     "of": "ROAD"
    }
   ]
  },
  "FEATUR": {
   "word": "FEATUR",
   "roles": [
    {
     "kind": "adjective",
     "of": "ROAD"
    }
   ]
  },
  "MAIN": {
   "word": "MAIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "ROAD"
    }
   ]
  },
  "PASSAG": {
   "word": "PASSAG",
   "roles": [
    {
     "kind": "noun",
     "of": "CORRIDOR"
    }
   ]
  },
  "CORRID": {
   "word": "CORRID",
   "roles": [
    {
     "kind": "noun",
     "of": "CORRIDOR"
    }
   ]
  },
  "HALLWA": {
   "word": "HALLWA",
   "roles": [
    {
     "kind": "noun",
     "of": "CORRIDOR"
    }
   ]
  },
  "TUNNEL": {
   "word": "TUNNEL",
   "roles": [
    {
     "kind": "noun",
     "of": "CORRIDOR"
    }
   ]
  },
  "ROCKY": {
   "word": "ROCKY",
   "roles": [
    {
     "kind": "adjective",
     "of": "CORRIDOR"
    }
   ]
  },
  "WINDIN": {
   "word": "WINDIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "CORRIDOR"
    },
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
     "of": "CORRIDOR"
    },
    {
     "kind": "adjective",
     "of": "HOLE"
    },
    {
     "kind": "adjective",
     "of": "CAVE"
    },
    {
     "kind": "adjective",
     "of": "BELBOZ-DESK"
    }
   ]
  },
  "MEANDE": {
   "word": "MEANDE",
   "roles": [
    {
     "kind": "adjective",
     "of": "CORRIDOR"
    }
   ]
  },
  "WALL": {
   "word": "WALL",
   "roles": [
    {
     "kind": "noun",
     "of": "WALLS"
    },
    {
     "kind": "adjective",
     "of": "WALL-HANGING"
    }
   ]
  },
  "WALLS": {
   "word": "WALLS",
   "roles": [
    {
     "kind": "noun",
     "of": "WALLS"
    }
   ]
  },
  "CEILIN": {
   "word": "CEILIN",
   "roles": [
    {
     "kind": "noun",
     "of": "CEILING"
    }
   ]
  },
  "ROOF": {
   "word": "ROOF",
   "roles": [
    {
     "kind": "noun",
     "of": "CEILING"
    }
   ]
  },
  "DOME": {
   "word": "DOME",
   "roles": [
    {
     "kind": "noun",
     "of": "CEILING"
    }
   ]
  },
  "DOMED": {
   "word": "DOMED",
   "roles": [
    {
     "kind": "adjective",
     "of": "CEILING"
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
  "STAIRS": {
   "word": "STAIRS",
   "roles": [
    {
     "kind": "noun",
     "of": "STAIRS"
    }
   ]
  },
  "STAIRW": {
   "word": "STAIRW",
   "roles": [
    {
     "kind": "noun",
     "of": "STAIRS"
    }
   ]
  },
  "STAIRC": {
   "word": "STAIRC",
   "roles": [
    {
     "kind": "noun",
     "of": "STAIRS"
    }
   ]
  },
  "SPIRAL": {
   "word": "SPIRAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "STAIRS"
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
  "PROTAG": {
   "word": "PROTAG",
   "roles": [
    {
     "kind": "noun",
     "of": "PROTAGONIST"
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
  "ENCHAN": {
   "word": "ENCHAN",
   "roles": [
    {
     "kind": "noun",
     "of": "ME"
    },
    {
     "kind": "noun",
     "of": "MAGAZINE"
    }
   ]
  },
  "LURKIN": {
   "word": "LURKIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "GRUE"
    }
   ]
  },
  "SINIST": {
   "word": "SINIST",
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
  "LEGEND": {
   "word": "LEGEND",
   "roles": [
    {
     "kind": "adjective",
     "of": "GRUE"
    },
    {
     "kind": "noun",
     "of": "CALENDAR"
    }
   ]
  },
  "TRICKLE": {
   "word": "TRICKLE",
   "roles": [
    {
     "kind": "noun",
     "of": "WATER"
    }
   ]
  },
  "POOL": {
   "word": "POOL",
   "roles": [
    {
     "kind": "noun",
     "of": "WATER"
    }
   ]
  },
  "SWIRLI": {
   "word": "SWIRLI",
   "roles": [
    {
     "kind": "adjective",
     "of": "WATER"
    }
   ]
  },
  "STAGNA": {
   "word": "STAGNA",
   "roles": [
    {
     "kind": "adjective",
     "of": "WATER"
    }
   ]
  },
  "SKY": {
   "word": "SKY",
   "roles": [
    {
     "kind": "noun",
     "of": "SKY"
    }
   ]
  },
  "STARS": {
   "word": "STARS",
   "roles": [
    {
     "kind": "noun",
     "of": "SKY"
    }
   ]
  },
  "BELBOZ": {
   "word": "BELBOZ",
   "roles": [
    {
     "kind": "noun",
     "of": "BELBOZ"
    }
   ]
  },
  "NECROMANCER": {
   "word": "NECROMANCER",
   "roles": [
    {
     "kind": "noun",
     "of": "BELBOZ"
    }
   ]
  },
  "ROOM": {
   "word": "ROOM",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-ROOM"
    }
   ]
  },
  "CHAMBER": {
   "word": "CHAMBER",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-ROOM"
    }
   ]
  },
  "HALL": {
   "word": "HALL",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-ROOM"
    }
   ]
  },
  "AREA": {
   "word": "AREA",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-ROOM"
    }
   ]
  },
  "ARCH": {
   "word": "ARCH",
   "roles": [
    {
     "kind": "noun",
     "of": "ARCHWAY"
    }
   ]
  },
  "ARCHWA": {
   "word": "ARCHWA",
   "roles": [
    {
     "kind": "noun",
     "of": "ARCHWAY"
    }
   ]
  },
  "DOORWA": {
   "word": "DOORWA",
   "roles": [
    {
     "kind": "noun",
     "of": "ARCHWAY"
    }
   ]
  },
  "DAZZLI": {
   "word": "DAZZLI",
   "roles": [
    {
     "kind": "adjective",
     "of": "ARCHWAY"
    }
   ]
  },
  "BREATH": {
   "word": "BREATH",
   "roles": [
    {
     "kind": "adjective",
     "of": "ARCHWAY"
    }
   ]
  },
  "HOLE": {
   "word": "HOLE",
   "roles": [
    {
     "kind": "noun",
     "of": "HOLE"
    }
   ]
  },
  "OPENIN": {
   "word": "OPENIN",
   "roles": [
    {
     "kind": "noun",
     "of": "HOLE"
    },
    {
     "kind": "noun",
     "of": "BRICK-STRUCTURE"
    }
   ]
  },
  "WELL": {
   "word": "WELL",
   "roles": [
    {
     "kind": "noun",
     "of": "HOLE"
    }
   ]
  },
  "SLIMY": {
   "word": "SLIMY",
   "roles": [
    {
     "kind": "adjective",
     "of": "HOLE"
    }
   ]
  },
  "FOREST": {
   "word": "FOREST",
   "roles": [
    {
     "kind": "noun",
     "of": "FOREST"
    }
   ]
  },
  "WOODS": {
   "word": "WOODS",
   "roles": [
    {
     "kind": "noun",
     "of": "FOREST"
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
  "BLIGHT": {
   "word": "BLIGHT",
   "roles": [
    {
     "kind": "adjective",
     "of": "FOREST"
    }
   ]
  },
  "DENSE": {
   "word": "DENSE",
   "roles": [
    {
     "kind": "adjective",
     "of": "FOREST"
    }
   ]
  },
  "SICKLY": {
   "word": "SICKLY",
   "roles": [
    {
     "kind": "adjective",
     "of": "FOREST"
    }
   ]
  },
  "CASTLE": {
   "word": "CASTLE",
   "roles": [
    {
     "kind": "noun",
     "of": "CASTLE"
    },
    {
     "kind": "adjective",
     "of": "CASTLE"
    }
   ]
  },
  "EGRETH": {
   "word": "EGRETH",
   "roles": [
    {
     "kind": "noun",
     "of": "CASTLE"
    },
    {
     "kind": "adjective",
     "of": "CASTLE"
    }
   ]
  },
  "RUINS": {
   "word": "RUINS",
   "roles": [
    {
     "kind": "noun",
     "of": "CASTLE"
    }
   ]
  },
  "RUINED": {
   "word": "RUINED",
   "roles": [
    {
     "kind": "adjective",
     "of": "CASTLE"
    }
   ]
  },
  "ANCIEN": {
   "word": "ANCIEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "CASTLE"
    },
    {
     "kind": "adjective",
     "of": "TENETS"
    }
   ]
  },
  "CAVE": {
   "word": "CAVE",
   "roles": [
    {
     "kind": "noun",
     "of": "CAVE"
    }
   ]
  },
  "CAVERN": {
   "word": "CAVERN",
   "roles": [
    {
     "kind": "noun",
     "of": "CAVE"
    }
   ]
  },
  "MAMMOT": {
   "word": "MAMMOT",
   "roles": [
    {
     "kind": "adjective",
     "of": "CAVE"
    }
   ]
  },
  "HIDDEN": {
   "word": "HIDDEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "CAVE"
    }
   ]
  },
  "HELIST": {
   "word": "HELIST",
   "roles": [
    {
     "kind": "noun",
     "of": "HELISTAR"
    }
   ]
  },
  "FROBAR": {
   "word": "FROBAR",
   "roles": [
    {
     "kind": "noun",
     "of": "FROBAR"
    }
   ]
  },
  "IMPLEM": {
   "word": "IMPLEM",
   "roles": [
    {
     "kind": "noun",
     "of": "IMPLEMENTOR"
    }
   ]
  },
  "MERETZ": {
   "word": "MERETZ",
   "roles": [
    {
     "kind": "noun",
     "of": "IMPLEMENTOR"
    }
   ]
  },
  "AUTHOR": {
   "word": "AUTHOR",
   "roles": [
    {
     "kind": "noun",
     "of": "IMPLEMENTOR"
    }
   ]
  },
  "ORACLE": {
   "word": "ORACLE",
   "roles": [
    {
     "kind": "noun",
     "of": "IMPLEMENTOR"
    }
   ]
  },
  "STEVE": {
   "word": "STEVE",
   "roles": [
    {
     "kind": "adjective",
     "of": "IMPLEMENTOR"
    }
   ]
  },
  "STEVEN": {
   "word": "STEVEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "IMPLEMENTOR"
    }
   ]
  },
  "BEARDE": {
   "word": "BEARDE",
   "roles": [
    {
     "kind": "adjective",
     "of": "IMPLEMENTOR"
    }
   ]
  },
  "JEEARR": {
   "word": "JEEARR",
   "roles": [
    {
     "kind": "noun",
     "of": "JEEARR"
    }
   ]
  },
  "DEMON": {
   "word": "DEMON",
   "roles": [
    {
     "kind": "noun",
     "of": "JEEARR"
    }
   ]
  },
  "FORCE": {
   "word": "FORCE",
   "roles": [
    {
     "kind": "noun",
     "of": "JEEARR"
    }
   ]
  },
  "SPIRIT": {
   "word": "SPIRIT",
   "roles": [
    {
     "kind": "noun",
     "of": "JEEARR"
    }
   ]
  },
  "BOOK": {
   "word": "BOOK",
   "roles": [
    {
     "kind": "noun",
     "of": "SPELL-BOOK"
    }
   ]
  },
  "NOTES": {
   "word": "NOTES",
   "roles": [
    {
     "kind": "noun",
     "of": "SPELL-BOOK"
    }
   ]
  },
  "MARGIN": {
   "word": "MARGIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "SPELL-BOOK"
    }
   ]
  },
  "WINKS": {
   "word": "WINKS",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-SLEEP"
    }
   ]
  },
  "FORTY": {
   "word": "FORTY",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-SLEEP"
    }
   ]
  },
  "PARROT": {
   "word": "PARROT",
   "roles": [
    {
     "kind": "noun",
     "of": "PARROT"
    }
   ]
  },
  "BIRD": {
   "word": "BIRD",
   "roles": [
    {
     "kind": "noun",
     "of": "PARROT"
    }
   ]
  },
  "POLLIB": {
   "word": "POLLIB",
   "roles": [
    {
     "kind": "noun",
     "of": "PARROT"
    }
   ]
  },
  "POLLY": {
   "word": "POLLY",
   "roles": [
    {
     "kind": "noun",
     "of": "PARROT"
    }
   ]
  },
  "PRIZED": {
   "word": "PRIZED",
   "roles": [
    {
     "kind": "adjective",
     "of": "PARROT"
    }
   ]
  },
  "DESK": {
   "word": "DESK",
   "roles": [
    {
     "kind": "noun",
     "of": "BELBOZ-DESK"
    },
    {
     "kind": "adjective",
     "of": "DESK-DRAWER"
    }
   ]
  },
  "CRAFTE": {
   "word": "CRAFTE",
   "roles": [
    {
     "kind": "adjective",
     "of": "BELBOZ-DESK"
    }
   ]
  },
  "DARKWO": {
   "word": "DARKWO",
   "roles": [
    {
     "kind": "adjective",
     "of": "BELBOZ-DESK"
    }
   ]
  },
  "DRAWER": {
   "word": "DRAWER",
   "roles": [
    {
     "kind": "noun",
     "of": "DESK-DRAWER"
    }
   ]
  },
  "BOX": {
   "word": "BOX",
   "roles": [
    {
     "kind": "noun",
     "of": "TINY-BOX"
    }
   ]
  },
  "LID": {
   "word": "LID",
   "roles": [
    {
     "kind": "noun",
     "of": "TINY-BOX"
    },
    {
     "kind": "noun",
     "of": "TRUNK"
    }
   ]
  },
  "WRITIN": {
   "word": "WRITIN",
   "roles": [
    {
     "kind": "noun",
     "of": "TINY-BOX"
    }
   ]
  },
  "AMULET": {
   "word": "AMULET",
   "roles": [
    {
     "kind": "noun",
     "of": "MAGIC-AMULET"
    }
   ]
  },
  "JEWEL": {
   "word": "JEWEL",
   "roles": [
    {
     "kind": "noun",
     "of": "MAGIC-AMULET"
    }
   ]
  },
  "AGGTHORA": {
   "word": "AGGTHORA",
   "roles": [
    {
     "kind": "noun",
     "of": "MAGIC-AMULET"
    }
   ]
  },
  "BLUE": {
   "word": "BLUE",
   "roles": [
    {
     "kind": "adjective",
     "of": "MAGIC-AMULET"
    }
   ]
  },
  "DIARY": {
   "word": "DIARY",
   "roles": [
    {
     "kind": "noun",
     "of": "JOURNAL"
    }
   ]
  },
  "NOTEBO": {
   "word": "NOTEBO",
   "roles": [
    {
     "kind": "noun",
     "of": "JOURNAL"
    }
   ]
  },
  "ENTRIE": {
   "word": "ENTRIE",
   "roles": [
    {
     "kind": "noun",
     "of": "JOURNAL"
    }
   ]
  },
  "JOURNA": {
   "word": "JOURNA",
   "roles": [
    {
     "kind": "noun",
     "of": "JOURNAL"
    }
   ]
  },
  "PERSON": {
   "word": "PERSON",
   "roles": [
    {
     "kind": "adjective",
     "of": "JOURNAL"
    }
   ]
  },
  "NOTE": {
   "word": "NOTE",
   "roles": [
    {
     "kind": "adjective",
     "of": "JOURNAL"
    },
    {
     "kind": "noun",
     "of": "FROBAR-NOTE"
    }
   ]
  },
  "LAST": {
   "word": "LAST",
   "roles": [
    {
     "kind": "adjective",
     "of": "JOURNAL"
    }
   ]
  },
  "THREE": {
   "word": "THREE",
   "roles": [
    {
     "kind": "adjective",
     "of": "JOURNAL"
    },
    {
     "kind": "adjective",
     "of": "SLOT-MACHINE"
    }
   ]
  },
  "INFOTA": {
   "word": "INFOTA",
   "roles": [
    {
     "kind": "noun",
     "of": "WHEEL"
    }
   ]
  },
  "WHEEL": {
   "word": "WHEEL",
   "roles": [
    {
     "kind": "noun",
     "of": "WHEEL"
    }
   ]
  },
  "LEATHE": {
   "word": "LEATHE",
   "roles": [
    {
     "kind": "adjective",
     "of": "WHEEL"
    }
   ]
  },
  "DATA": {
   "word": "DATA",
   "roles": [
    {
     "kind": "adjective",
     "of": "WHEEL"
    }
   ]
  },
  "HANGIN": {
   "word": "HANGIN",
   "roles": [
    {
     "kind": "noun",
     "of": "WALL-HANGING"
    }
   ]
  },
  "TAPEST": {
   "word": "TAPEST",
   "roles": [
    {
     "kind": "noun",
     "of": "WALL-HANGING"
    }
   ]
  },
  "WOVEN": {
   "word": "WOVEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "WALL-HANGING"
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
  "PLANT": {
   "word": "PLANT",
   "roles": [
    {
     "kind": "noun",
     "of": "MORGIA-PLANT"
    }
   ]
  },
  "MORGIA": {
   "word": "MORGIA",
   "roles": [
    {
     "kind": "adjective",
     "of": "MORGIA-PLANT"
    }
   ]
  },
  "EXOTIC": {
   "word": "EXOTIC",
   "roles": [
    {
     "kind": "adjective",
     "of": "MORGIA-PLANT"
    }
   ]
  },
  "NEW": {
   "word": "NEW",
   "roles": [
    {
     "kind": "adjective",
     "of": "GASPAR-SCROLL"
    }
   ]
  },
  "MESSAG": {
   "word": "MESSAG",
   "roles": [
    {
     "kind": "noun",
     "of": "FROBAR-NOTE"
    }
   ]
  },
  "SCRIBB": {
   "word": "SCRIBB",
   "roles": [
    {
     "kind": "adjective",
     "of": "FROBAR-NOTE"
    }
   ]
  },
  "PARCHM": {
   "word": "PARCHM",
   "roles": [
    {
     "kind": "adjective",
     "of": "FROBAR-NOTE"
    },
    {
     "kind": "adjective",
     "of": "SWANZO-SCROLL"
    }
   ]
  },
  "ENGRAV": {
   "word": "ENGRAV",
   "roles": [
    {
     "kind": "noun",
     "of": "TENETS"
    }
   ]
  },
  "LIST": {
   "word": "LIST",
   "roles": [
    {
     "kind": "noun",
     "of": "TENETS"
    }
   ]
  },
  "TENETS": {
   "word": "TENETS",
   "roles": [
    {
     "kind": "noun",
     "of": "TENETS"
    }
   ]
  },
  "TENET": {
   "word": "TENET",
   "roles": [
    {
     "kind": "noun",
     "of": "TENETS"
    }
   ]
  },
  "FLOWER": {
   "word": "FLOWER",
   "roles": [
    {
     "kind": "adjective",
     "of": "TENETS"
    }
   ]
  },
  "MAILBO": {
   "word": "MAILBO",
   "roles": [
    {
     "kind": "noun",
     "of": "MAILBOX"
    }
   ]
  },
  "RECEPT": {
   "word": "RECEPT",
   "roles": [
    {
     "kind": "noun",
     "of": "MAILBOX"
    }
   ]
  },
  "ORNATE": {
   "word": "ORNATE",
   "roles": [
    {
     "kind": "adjective",
     "of": "MAILBOX"
    }
   ]
  },
  "MAGAZI": {
   "word": "MAGAZI",
   "roles": [
    {
     "kind": "noun",
     "of": "MAGAZINE"
    }
   ]
  },
  "ISSUE": {
   "word": "ISSUE",
   "roles": [
    {
     "kind": "noun",
     "of": "MAGAZINE"
    }
   ]
  },
  "POPULA": {
   "word": "POPULA",
   "roles": [
    {
     "kind": "adjective",
     "of": "MAGAZINE"
    }
   ]
  },
  "VIVID": {
   "word": "VIVID",
   "roles": [
    {
     "kind": "adjective",
     "of": "VILSTU-VIAL"
    }
   ]
  },
  "ORANGE": {
   "word": "ORANGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "VILSTU-VIAL"
    },
    {
     "kind": "adjective",
     "of": "VILSTU-POTION"
    }
   ]
  },
  "VILSTU": {
   "word": "VILSTU",
   "roles": [
    {
     "kind": "adjective",
     "of": "VILSTU-VIAL"
    },
    {
     "kind": "adjective",
     "of": "VILSTU-POTION"
    }
   ]
  },
  "ENCYCL": {
   "word": "ENCYCL",
   "roles": [
    {
     "kind": "noun",
     "of": "ENCYCLOPEDIA"
    },
    {
     "kind": "adjective",
     "of": "ENCYCLOPEDIA"
    }
   ]
  },
  "COPY": {
   "word": "COPY",
   "roles": [
    {
     "kind": "noun",
     "of": "ENCYCLOPEDIA"
    }
   ]
  },
  "VOLUME": {
   "word": "VOLUME",
   "roles": [
    {
     "kind": "noun",
     "of": "ENCYCLOPEDIA"
    }
   ]
  },
  "FROBIZ": {
   "word": "FROBIZ",
   "roles": [
    {
     "kind": "noun",
     "of": "ENCYCLOPEDIA"
    }
   ]
  },
  "DUSTY": {
   "word": "DUSTY",
   "roles": [
    {
     "kind": "adjective",
     "of": "MEEF-SCROLL"
    }
   ]
  },
  "BERZIO": {
   "word": "BERZIO",
   "roles": [
    {
     "kind": "adjective",
     "of": "BERZIO-VIAL"
    },
    {
     "kind": "adjective",
     "of": "BERZIO-POTION"
    }
   ]
  },
  "OCHRE": {
   "word": "OCHRE",
   "roles": [
    {
     "kind": "adjective",
     "of": "BERZIO-VIAL"
    },
    {
     "kind": "adjective",
     "of": "BERZIO-POTION"
    }
   ]
  },
  "MATCHE": {
   "word": "MATCHE",
   "roles": [
    {
     "kind": "noun",
     "of": "MATCHBOOK"
    }
   ]
  },
  "MATCHB": {
   "word": "MATCHB",
   "roles": [
    {
     "kind": "noun",
     "of": "MATCHBOOK"
    }
   ]
  },
  "COVER": {
   "word": "COVER",
   "roles": [
    {
     "kind": "noun",
     "of": "MATCHBOOK"
    }
   ]
  },
  "PRINTI": {
   "word": "PRINTI",
   "roles": [
    {
     "kind": "noun",
     "of": "MATCHBOOK"
    }
   ]
  },
  "MATCH": {
   "word": "MATCH",
   "roles": [
    {
     "kind": "adjective",
     "of": "MATCHBOOK"
    }
   ]
  },
  "DEPLET": {
   "word": "DEPLET",
   "roles": [
    {
     "kind": "adjective",
     "of": "MATCHBOOK"
    }
   ]
  },
  "INNER": {
   "word": "INNER",
   "roles": [
    {
     "kind": "adjective",
     "of": "MATCHBOOK"
    }
   ]
  },
  "CALEND": {
   "word": "CALEND",
   "roles": [
    {
     "kind": "noun",
     "of": "CALENDAR"
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
  "BUTTON": {
   "word": "BUTTON",
   "roles": [
    {
     "kind": "noun",
     "of": "BLACK-BUTTON"
    },
    {
     "kind": "noun",
     "of": "GRAY-BUTTON"
    },
    {
     "kind": "noun",
     "of": "RED-BUTTON"
    },
    {
     "kind": "noun",
     "of": "PURPLE-BUTTON"
    },
    {
     "kind": "noun",
     "of": "WHITE-BUTTON"
    }
   ]
  },
  "STAR": {
   "word": "STAR",
   "roles": [
    {
     "kind": "noun",
     "of": "BLACK-BUTTON"
    }
   ]
  },
  "MOON": {
   "word": "MOON",
   "roles": [
    {
     "kind": "noun",
     "of": "GRAY-BUTTON"
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
  "BLOODY": {
   "word": "BLOODY",
   "roles": [
    {
     "kind": "adjective",
     "of": "RED-BUTTON"
    }
   ]
  },
  "RED": {
   "word": "RED",
   "roles": [
    {
     "kind": "adjective",
     "of": "RED-BUTTON"
    }
   ]
  },
  "CROWN": {
   "word": "CROWN",
   "roles": [
    {
     "kind": "noun",
     "of": "PURPLE-BUTTON"
    }
   ]
  },
  "PURPLE": {
   "word": "PURPLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "PURPLE-BUTTON"
    }
   ]
  },
  "ROYAL": {
   "word": "ROYAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "PURPLE-BUTTON"
    }
   ]
  },
  "DOVE": {
   "word": "DOVE",
   "roles": [
    {
     "kind": "noun",
     "of": "WHITE-BUTTON"
    }
   ]
  },
  "MOLDY": {
   "word": "MOLDY",
   "roles": [
    {
     "kind": "adjective",
     "of": "AIMFIZ-SCROLL"
    }
   ]
  },
  "MAZE": {
   "word": "MAZE",
   "roles": [
    {
     "kind": "noun",
     "of": "MAZE"
    }
   ]
  },
  "LABYRI": {
   "word": "LABYRI",
   "roles": [
    {
     "kind": "noun",
     "of": "MAZE"
    }
   ]
  },
  "HUT": {
   "word": "HUT",
   "roles": [
    {
     "kind": "noun",
     "of": "HOVEL"
    }
   ]
  },
  "HOVEL": {
   "word": "HOVEL",
   "roles": [
    {
     "kind": "noun",
     "of": "HOVEL"
    }
   ]
  },
  "FIREPL": {
   "word": "FIREPL",
   "roles": [
    {
     "kind": "noun",
     "of": "FIREPLACE"
    }
   ]
  },
  "UNUSED": {
   "word": "UNUSED",
   "roles": [
    {
     "kind": "adjective",
     "of": "FIREPLACE"
    }
   ]
  },
  "STATUE": {
   "word": "STATUE",
   "roles": [
    {
     "kind": "noun",
     "of": "STATUE"
    }
   ]
  },
  "INSCRI": {
   "word": "INSCRI",
   "roles": [
    {
     "kind": "noun",
     "of": "STATUE"
    }
   ]
  },
  "LIFE-": {
   "word": "LIFE-",
   "roles": [
    {
     "kind": "adjective",
     "of": "STATUE"
    }
   ]
  },
  "SIZED": {
   "word": "SIZED",
   "roles": [
    {
     "kind": "adjective",
     "of": "STATUE"
    }
   ]
  },
  "CHIMNE": {
   "word": "CHIMNE",
   "roles": [
    {
     "kind": "noun",
     "of": "CHIMNEY"
    }
   ]
  },
  "STRUCT": {
   "word": "STRUCT",
   "roles": [
    {
     "kind": "noun",
     "of": "BRICK-STRUCTURE"
    }
   ]
  },
  "BRICKS": {
   "word": "BRICKS",
   "roles": [
    {
     "kind": "noun",
     "of": "BRICK-STRUCTURE"
    }
   ]
  },
  "SHAFT": {
   "word": "SHAFT",
   "roles": [
    {
     "kind": "noun",
     "of": "BRICK-STRUCTURE"
    }
   ]
  },
  "BRICK": {
   "word": "BRICK",
   "roles": [
    {
     "kind": "adjective",
     "of": "BRICK-STRUCTURE"
    }
   ]
  },
  "RECTAN": {
   "word": "RECTAN",
   "roles": [
    {
     "kind": "adjective",
     "of": "BRICK-STRUCTURE"
    }
   ]
  },
  "SOOT": {
   "word": "SOOT",
   "roles": [
    {
     "kind": "noun",
     "of": "SOOT"
    }
   ]
  },
  "QUANTI": {
   "word": "QUANTI",
   "roles": [
    {
     "kind": "noun",
     "of": "SOOT"
    }
   ]
  },
  "DORNBE": {
   "word": "DORNBE",
   "roles": [
    {
     "kind": "noun",
     "of": "DORN-BEAST"
    }
   ]
  },
  "DORN": {
   "word": "DORN",
   "roles": [
    {
     "kind": "noun",
     "of": "DORN-BEAST"
    },
    {
     "kind": "adjective",
     "of": "DORN-BEAST"
    }
   ]
  },
  "BEAST": {
   "word": "BEAST",
   "roles": [
    {
     "kind": "noun",
     "of": "DORN-BEAST"
    }
   ]
  },
  "DORNS": {
   "word": "DORNS",
   "roles": [
    {
     "kind": "noun",
     "of": "DORN-BEAST"
    }
   ]
  },
  "FEROCI": {
   "word": "FEROCI",
   "roles": [
    {
     "kind": "adjective",
     "of": "DORN-BEAST"
    }
   ]
  },
  "CORPSE": {
   "word": "CORPSE",
   "roles": [
    {
     "kind": "noun",
     "of": "DORN-BEAST-CORPSE"
    }
   ]
  },
  "BODY": {
   "word": "BODY",
   "roles": [
    {
     "kind": "noun",
     "of": "DORN-BEAST-CORPSE"
    }
   ]
  },
  "DEAD": {
   "word": "DEAD",
   "roles": [
    {
     "kind": "adjective",
     "of": "DORN-BEAST-CORPSE"
    }
   ]
  },
  "SPLATT": {
   "word": "SPLATT",
   "roles": [
    {
     "kind": "adjective",
     "of": "DORN-BEAST-CORPSE"
    }
   ]
  },
  "PARK": {
   "word": "PARK",
   "roles": [
    {
     "kind": "noun",
     "of": "BOZBARLAND"
    }
   ]
  },
  "BOZBAR": {
   "word": "BOZBAR",
   "roles": [
    {
     "kind": "noun",
     "of": "BOZBARLAND"
    }
   ]
  },
  "AMUSEM": {
   "word": "AMUSEM",
   "roles": [
    {
     "kind": "adjective",
     "of": "BOZBARLAND"
    }
   ]
  },
  "ZORKY": {
   "word": "ZORKY",
   "roles": [
    {
     "kind": "adjective",
     "of": "BOZBARLAND"
    }
   ]
  },
  "FLUME": {
   "word": "FLUME",
   "roles": [
    {
     "kind": "noun",
     "of": "FLUME-OBJECT"
    }
   ]
  },
  "FLUMES": {
   "word": "FLUMES",
   "roles": [
    {
     "kind": "noun",
     "of": "FLUME-OBJECT"
    }
   ]
  },
  "BOAT": {
   "word": "BOAT",
   "roles": [
    {
     "kind": "noun",
     "of": "LOG-BOAT"
    }
   ]
  },
  "LOG": {
   "word": "LOG",
   "roles": [
    {
     "kind": "adjective",
     "of": "LOG-BOAT"
    }
   ]
  },
  "CAR": {
   "word": "CAR",
   "roles": [
    {
     "kind": "noun",
     "of": "CAR"
    }
   ]
  },
  "HAWKER": {
   "word": "HAWKER",
   "roles": [
    {
     "kind": "noun",
     "of": "HAWKER"
    }
   ]
  },
  "BALL": {
   "word": "BALL",
   "roles": [
    {
     "kind": "noun",
     "of": "BALL"
    }
   ]
  },
  "RUBBER": {
   "word": "RUBBER",
   "roles": [
    {
     "kind": "adjective",
     "of": "BALL"
    }
   ]
  },
  "BUNNY": {
   "word": "BUNNY",
   "roles": [
    {
     "kind": "noun",
     "of": "RABBITS"
    }
   ]
  },
  "BUNNIE": {
   "word": "BUNNIE",
   "roles": [
    {
     "kind": "noun",
     "of": "RABBITS"
    }
   ]
  },
  "RABBIT": {
   "word": "RABBIT",
   "roles": [
    {
     "kind": "noun",
     "of": "RABBITS"
    }
   ]
  },
  "HOPPIN": {
   "word": "HOPPIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "RABBITS"
    }
   ]
  },
  "CUTE": {
   "word": "CUTE",
   "roles": [
    {
     "kind": "adjective",
     "of": "RABBITS"
    }
   ]
  },
  "MECHAN": {
   "word": "MECHAN",
   "roles": [
    {
     "kind": "adjective",
     "of": "RABBITS"
    }
   ]
  },
  "GLITTE": {
   "word": "GLITTE",
   "roles": [
    {
     "kind": "adjective",
     "of": "MALYON-SCROLL"
    }
   ]
  },
  "BANDIT": {
   "word": "BANDIT",
   "roles": [
    {
     "kind": "noun",
     "of": "SLOT-MACHINE"
    }
   ]
  },
  "ODD": {
   "word": "ODD",
   "roles": [
    {
     "kind": "adjective",
     "of": "SLOT-MACHINE"
    }
   ]
  },
  "ONE-": {
   "word": "ONE-",
   "roles": [
    {
     "kind": "adjective",
     "of": "SLOT-MACHINE"
    }
   ]
  },
  "ARMED": {
   "word": "ARMED",
   "roles": [
    {
     "kind": "adjective",
     "of": "SLOT-MACHINE"
    }
   ]
  },
  "SECTIO": {
   "word": "SECTIO",
   "roles": [
    {
     "kind": "adjective",
     "of": "SLOT-MACHINE"
    }
   ]
  }
 },
 "files": [
  "belboz.zil",
  "coal.zil",
  "end.zil",
  "fort.zil",
  "globals.zil",
  "gparser.zil",
  "guild.zil",
  "maze.zil",
  "misc.zil",
  "park.zil",
  "parser.zil",
  "sorcerer.zil",
  "syntax.zil",
  "verbs.zil"
 ]
};
