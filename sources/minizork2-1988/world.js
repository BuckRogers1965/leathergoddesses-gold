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
  "RIDDLE-ROOM": {
   "name": "RIDDLE-ROOM",
   "file": "alice.zil",
   "line": 5,
   "endLine": 12,
   "desc": "Riddle Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "RIDDLE-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "RIDDLE",
    "RIDDLE-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "CAROUSEL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "CIRCULAR-ROOM",
     "kind": "conditional",
     "condition": "RIDDLE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "RIDDLE-DOOR",
    "FUSE"
   ],
   "source": "<ROOM RIDDLE-ROOM\n       (IN ROOMS)\n       (DESC \"Riddle Room\")\n       (NW TO CAROUSEL-ROOM)\n       (EAST TO CIRCULAR-ROOM IF RIDDLE-DOOR IS OPEN)\n       (FLAGS RLANDBIT)\n       (ACTION RIDDLE-ROOM-F)\n       (PSEUDO \"RIDDLE\" RIDDLE-PSEUDO)>",
   "referencedBy": []
  },
  "CIRCULAR-ROOM": {
   "name": "CIRCULAR-ROOM",
   "file": "alice.zil",
   "line": 60,
   "endLine": 69,
   "desc": "Circular Room",
   "ldesc": "This is a tall, damp room with brick walls. There are some etchings on\nthe walls. A passage leads west.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "NONLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WELL"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RIDDLE-ROOM",
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
     "message": "The walls cannot be climbed.",
     "dir": "UP"
    }
   ],
   "contents": [
    "BOTTOM-ETCHINGS",
    "PEARL-NECKLACE",
    "BUCKET"
   ],
   "source": "<ROOM CIRCULAR-ROOM\n      (IN ROOMS)\n      (DESC \"Circular Room\")\n      (LDESC\n\"This is a tall, damp room with brick walls. There are some etchings on\nthe walls. A passage leads west.\")\n      (WEST TO RIDDLE-ROOM)\n      (UP \"The walls cannot be climbed.\")\n      (FLAGS RLANDBIT NONLANDBIT)\n      (GLOBAL WELL)>",
   "referencedBy": [
    "BUCKET-F",
    "WELL-F",
    "I-WIZARD"
   ]
  },
  "TOP-OF-WELL": {
   "name": "TOP-OF-WELL",
   "file": "alice.zil",
   "line": 182,
   "endLine": 195,
   "desc": "Top of Well",
   "ldesc": "You have made it to the top. Well done. There are etchings on the well. A\ncrack runs across the floor at the doorway to the east, but it can be crossed\neasily. Another doorway leads northeast.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "NONLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WELL"
   ],
   "pseudo": [
    "CRACK",
    "CRACK-PSEUDO"
   ],
   "otherProps": {
    "VALUE": [
     "10"
    ]
   },
   "exits": [
    {
     "to": "TEA-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MACHINE-ROOM",
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
     "message": "It's a long way down!",
     "dir": "DOWN"
    }
   ],
   "contents": [
    "TOP-ETCHINGS",
    "ROBOT",
    "ROBOT-LABEL"
   ],
   "source": "<ROOM TOP-OF-WELL\n      (IN ROOMS)\n      (DESC \"Top of Well\")\n      (LDESC\n\"You have made it to the top. Well done. There are etchings on the well. A\ncrack runs across the floor at the doorway to the east, but it can be crossed\neasily. Another doorway leads northeast.\")\n      (EAST TO TEA-ROOM)\n      (NE TO MACHINE-ROOM)\n      (DOWN \"It's a long way down!\")\n      (VALUE 10)\n      (FLAGS RLANDBIT NONLANDBIT)\n      (GLOBAL WELL)\n      (PSEUDO \"CRACK\" CRACK-PSEUDO)>",
   "referencedBy": [
    "BUCKET-F",
    "CAKE-CRUMBLE",
    "I-WIZARD"
   ]
  },
  "MACHINE-ROOM": {
   "name": "MACHINE-ROOM",
   "file": "alice.zil",
   "line": 287,
   "endLine": 296,
   "desc": "Machine Room",
   "ldesc": "This room is full of assorted machinery, whirring noisily. On one wall is a\ntriangular button labelled, \"DANGER -- HIGH VOLTAGE.\" There are exits to the\nsouth and southwest.",
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
     "to": "DINGY-CLOSET",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "TOP-OF-WELL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [
    "TRIANGULAR-BUTTON"
   ],
   "source": "<ROOM MACHINE-ROOM\n      (IN ROOMS)\n      (DESC \"Machine Room\")\n      (LDESC\n\"This room is full of assorted machinery, whirring noisily. On one wall is a\ntriangular button labelled, \\\"DANGER -- HIGH VOLTAGE.\\\" There are exits to the\nsouth and southwest.\")\n      (SOUTH TO DINGY-CLOSET)\n      (SW TO TOP-OF-WELL)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": [
    "CAKE-CRUMBLE"
   ]
  },
  "DINGY-CLOSET": {
   "name": "DINGY-CLOSET",
   "file": "alice.zil",
   "line": 321,
   "endLine": 329,
   "desc": "Dingy Closet",
   "ldesc": "This is a former broom closet. A larger room lies to the north. Chiselled\non the wall are the words \"Protected by the Frobozz Magic Alarm Company.\"",
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
   "otherProps": {},
   "exits": [
    {
     "to": "MACHINE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "MACHINE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "CAGE-OBJECT",
    "PALANTIR-1"
   ],
   "source": "<ROOM DINGY-CLOSET\n      (IN ROOMS)\n      (DESC \"Dingy Closet\")\n      (LDESC\n\"This is a former broom closet. A larger room lies to the north. Chiselled\non the wall are the words \\\"Protected by the Frobozz Magic Alarm Company.\\\"\")\n      (OUT TO MACHINE-ROOM)\n      (NORTH TO MACHINE-ROOM)\n      (FLAGS ONBIT RLANDBIT)>",
   "referencedBy": [
    "ROBOT-F",
    "CAGE-F",
    "I-CAGE-DEATH",
    "CAKE-CRUMBLE",
    "SPHERE-F"
   ]
  },
  "CAGE": {
   "name": "CAGE",
   "file": "alice.zil",
   "line": 338,
   "endLine": 343,
   "desc": "Cage",
   "ldesc": "You are trapped in a solid steel cage.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "NWALLBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CAGE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [],
   "contents": [],
   "source": "<ROOM CAGE\n      (IN ROOMS)\n      (DESC \"Cage\")\n      (LDESC \"You are trapped in a solid steel cage.\")\n      (FLAGS RLANDBIT NWALLBIT ONBIT)\n      (ACTION CAGE-F)>",
   "referencedBy": [
    "I-CAGE-DEATH",
    "CAKE-CRUMBLE",
    "SPHERE-F"
   ]
  },
  "TEA-ROOM": {
   "name": "TEA-ROOM",
   "file": "alice.zil",
   "line": 356,
   "endLine": 366,
   "desc": "Tea Room",
   "ldesc": "An oblong table here is set for afternoon tea. It is clear that the users\nwere indeed mad. To the east is a small hole (perhaps four inches high). A\ndoorway leads west.",
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
    "HOLE",
    "ALICE-HOLE"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Only a mouse could fit.",
     "dir": "EAST"
    },
    {
     "to": "TOP-OF-WELL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "PORTRAIT",
    "ALICE-TABLE"
   ],
   "source": "<ROOM TEA-ROOM\n      (IN ROOMS)\n      (DESC \"Tea Room\")\n      (LDESC\n\"An oblong table here is set for afternoon tea. It is clear that the users\nwere indeed mad. To the east is a small hole (perhaps four inches high). A\ndoorway leads west.\")\n      (EAST \"Only a mouse could fit.\")\n      (WEST TO TOP-OF-WELL)\n      (FLAGS RLANDBIT ONBIT)\n      (PSEUDO \"HOLE\" ALICE-HOLE)>",
   "referencedBy": [
    "GREEN-CAKE-F",
    "CAKE-F",
    "CAKE-CRUMBLE"
   ]
  },
  "POSTS-ROOM": {
   "name": "POSTS-ROOM",
   "file": "alice.zil",
   "line": 537,
   "endLine": 548,
   "desc": "Posts Room",
   "ldesc": "In the center of this enormous room, four wooden posts support a huge\noblong roof. To the east is a large hole; to the west a gaping chasm.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "POSTS-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CHASM"
   ],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "10"
    ]
   },
   "exits": [
    {
     "to": "POOL-ROOM",
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
     "message": "A chasm blocks your way.",
     "dir": "WEST"
    }
   ],
   "contents": [
    "POSTS"
   ],
   "source": "<ROOM POSTS-ROOM\n      (IN ROOMS)\n      (DESC \"Posts Room\")\n      (LDESC\n\"In the center of this enormous room, four wooden posts support a huge\noblong roof. To the east is a large hole; to the west a gaping chasm.\")\n      (EAST TO POOL-ROOM)\n      (WEST \"A chasm blocks your way.\")\n      (FLAGS RLANDBIT ONBIT)\n      (VALUE 10)\n      (GLOBAL CHASM)\n      (ACTION POSTS-ROOM-F)>",
   "referencedBy": [
    "GREEN-CAKE-F",
    "CAKE-F",
    "CAKE-CRUMBLE",
    "I-WIZARD"
   ]
  },
  "POOL-ROOM": {
   "name": "POOL-ROOM",
   "file": "alice.zil",
   "line": 564,
   "endLine": 570,
   "desc": "Pool Room",
   "ldesc": "The far half of this room is depressed. The only exit is west.",
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
     "to": "POSTS-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "POSTS-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "POOL",
    "CANDY"
   ],
   "source": "<ROOM POOL-ROOM\n      (IN ROOMS)\n      (DESC \"Pool Room\")\n      (LDESC \"The far half of this room is depressed. The only exit is west.\")\n      (OUT TO POSTS-ROOM)\n      (WEST TO POSTS-ROOM)\n      (FLAGS RLANDBIT)>",
   "referencedBy": [
    "CAKE-F",
    "CAKE-CRUMBLE",
    "I-WIZARD"
   ]
  },
  "INSIDE-THE-BARROW": {
   "name": "INSIDE-THE-BARROW",
   "file": "dungeon.zil",
   "line": 5,
   "endLine": 11,
   "desc": "Inside the Barrow",
   "ldesc": "You are in an ancient barrow which opens to the southwest.",
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
     "to": "GREAT-CAVERN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [
    "LAMP",
    "ADVENTURER"
   ],
   "source": "<ROOM INSIDE-THE-BARROW\n      (IN ROOMS)\n      (DESC \"Inside the Barrow\")\n      (LDESC\n\"You are in an ancient barrow which opens to the southwest.\")\n      (SW TO GREAT-CAVERN)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": [
    "GO",
    "JIGS-UP",
    "DEAD-PALANTIR-F"
   ]
  },
  "GREAT-CAVERN": {
   "name": "GREAT-CAVERN",
   "file": "dungeon.zil",
   "line": 65,
   "endLine": 73,
   "desc": "Great Cavern",
   "ldesc": "This is a huge limestone cavern, glowing with dim, phosphorescent light from\nfar above. Narrow paths wind south and northeast.",
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
     "to": "INSIDE-THE-BARROW",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "SHALLOW-FORD",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM GREAT-CAVERN\n      (IN ROOMS)\n      (DESC \"Great Cavern\")\n      (LDESC\n\"This is a huge limestone cavern, glowing with dim, phosphorescent light from\nfar above. Narrow paths wind south and northeast.\")\n      (NE TO INSIDE-THE-BARROW)\n      (SOUTH TO SHALLOW-FORD)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": []
  },
  "SHALLOW-FORD": {
   "name": "SHALLOW-FORD",
   "file": "dungeon.zil",
   "line": 75,
   "endLine": 84,
   "desc": "Shallow Ford",
   "ldesc": "You are ankle deep in a stream. To the southwest is a dark tunnel, and to the\nnorth a dim cavern.",
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
    "STREAM"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "GREAT-CAVERN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "DARK-TUNNEL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM SHALLOW-FORD\n      (IN ROOMS)\n      (DESC \"Shallow Ford\")\n      (LDESC\n\"You are ankle deep in a stream. To the southwest is a dark tunnel, and to the\nnorth a dim cavern.\")\n      (NORTH TO GREAT-CAVERN)\n      (SW TO DARK-TUNNEL)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL GLOBAL-WATER STREAM)>",
   "referencedBy": []
  },
  "DARK-TUNNEL": {
   "name": "DARK-TUNNEL",
   "file": "dungeon.zil",
   "line": 86,
   "endLine": 97,
   "desc": "Dark Tunnel",
   "ldesc": "This smooth-walled tunnel runs northeast to southwest. A faint whirring sound\ncomes from the latter direction. Another opening, choked with leaves, leads\nsoutheast.",
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
     "to": "SHALLOW-FORD",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "FORMAL-GARDEN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "CAROUSEL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "DEEP-FORD",
     "kind": "conditional",
     "condition": "SECRET-DOOR",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "SWORD"
   ],
   "source": "<ROOM DARK-TUNNEL\n      (IN ROOMS)\n      (DESC \"Dark Tunnel\")\n      (LDESC\n\"This smooth-walled tunnel runs northeast to southwest. A faint whirring sound\ncomes from the latter direction. Another opening, choked with leaves, leads\nsoutheast.\")\n      (NE TO SHALLOW-FORD)\n      (SE TO FORMAL-GARDEN)\n      (SW TO CAROUSEL-ROOM)\n      (WEST TO DEEP-FORD IF SECRET-DOOR)\n      (FLAGS RLANDBIT)>",
   "referencedBy": [
    "I-PRINCESS"
   ]
  },
  "DEEP-FORD": {
   "name": "DEEP-FORD",
   "file": "dungeon.zil",
   "line": 110,
   "endLine": 121,
   "desc": "Deep Ford",
   "ldesc": "You are waist deep in a cold stream. On the northern bank, the walls rise\nto a small ledge. A \"whir\" comes from an opening to the south.",
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
    "GLOBAL-WATER",
    "STREAM"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "LEDGE-IN-RAVINE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "LEDGE-IN-RAVINE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "CAROUSEL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "DARK-TUNNEL",
     "kind": "conditional",
     "condition": "SECRET-DOOR",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM DEEP-FORD\n      (IN ROOMS)\n      (DESC \"Deep Ford\")\n      (LDESC\n\"You are waist deep in a cold stream. On the northern bank, the walls rise\nto a small ledge. A \\\"whir\\\" comes from an opening to the south.\")\n      (NORTH TO LEDGE-IN-RAVINE)\n      (UP TO LEDGE-IN-RAVINE)\n      (SOUTH TO CAROUSEL-ROOM)\n      (EAST TO DARK-TUNNEL IF SECRET-DOOR)\n      (FLAGS RLANDBIT)\n      (GLOBAL GLOBAL-WATER STREAM)>",
   "referencedBy": [
    "I-PRINCESS"
   ]
  },
  "CAROUSEL-ROOM": {
   "name": "CAROUSEL-ROOM",
   "file": "dungeon.zil",
   "line": 123,
   "endLine": 135,
   "desc": "Carousel Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CAROUSEL-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DEEP-FORD",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "DARK-TUNNEL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "TOPIARY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "RIDDLE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "MENHIR-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "GUARDED-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "ROOM-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "COOL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [
    "VIOLIN"
   ],
   "source": "<ROOM CAROUSEL-ROOM\n      (IN ROOMS)\n      (DESC \"Carousel Room\")\n      (NORTH TO DEEP-FORD)\n      (NE TO DARK-TUNNEL)\n      (EAST TO TOPIARY)\n      (SE TO RIDDLE-ROOM)\n      (SOUTH TO MENHIR-ROOM)\n      (SW TO GUARDED-ROOM)\n      (WEST TO ROOM-8)\n      (NW TO COOL-ROOM)\n      (FLAGS RLANDBIT)\n      (ACTION CAROUSEL-ROOM-F)>",
   "referencedBy": [
    "TRIANGULAR-BUTTON-F",
    "I-DRAGON",
    "JIGS-UP"
   ]
  },
  "ROOM-8": {
   "name": "ROOM-8",
   "file": "dungeon.zil",
   "line": 178,
   "endLine": 185,
   "desc": "Room 8",
   "ldesc": "This is a small chamber carved from the western end of a short crawl. On\nthe wall is crudely chiseled the number \"8\".",
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
     "to": "CAROUSEL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "BILLS"
   ],
   "source": "<ROOM ROOM-8\n      (IN ROOMS)\n      (DESC \"Room 8\")\n      (LDESC\n\"This is a small chamber carved from the western end of a short crawl. On\nthe wall is crudely chiseled the number \\\"8\\\".\")\n      (EAST TO CAROUSEL-ROOM)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "MENHIR-ROOM": {
   "name": "MENHIR-ROOM",
   "file": "dungeon.zil",
   "line": 205,
   "endLine": 214,
   "desc": "Menhir Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MENHIR-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MENHIR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "CAROUSEL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "KENNEL",
     "kind": "conditional",
     "condition": "MENHIR-POSITION",
     "else": "\"You are trying to walk through an enormous rock.\"",
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "CERBERUS-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM MENHIR-ROOM\n      (IN ROOMS)\n      (DESC \"Menhir Room\")\n      (NORTH TO CAROUSEL-ROOM)\n      (SW TO KENNEL IF MENHIR-POSITION ELSE\n       \"You are trying to walk through an enormous rock.\")\n      (SOUTH TO CERBERUS-ROOM)\n      (FLAGS RLANDBIT)\n      (GLOBAL MENHIR)\n      (ACTION MENHIR-ROOM-F)>",
   "referencedBy": [
    "DESCRIBE-MENHIR",
    "MENHIR-F"
   ]
  },
  "KENNEL": {
   "name": "KENNEL",
   "file": "dungeon.zil",
   "line": 289,
   "endLine": 300,
   "desc": "Kennel",
   "ldesc": "This was once a kennel for a large dog (some of the bones would fit a\ndinosaur). The only exit is northeast.",
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
    "MENHIR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "MENHIR-ROOM",
     "kind": "conditional",
     "condition": "MENHIR-POSITION",
     "else": "\"You are trying to walk through an enormous rock.\"",
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "MENHIR-ROOM",
     "kind": "conditional",
     "condition": "MENHIR-POSITION",
     "else": "\"You are trying to walk through an enormous rock.\"",
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "COLLAR"
   ],
   "source": "<ROOM KENNEL\n      (IN ROOMS)\n      (DESC \"Kennel\")\n      (LDESC\n\"This was once a kennel for a large dog (some of the bones would fit a\ndinosaur). The only exit is northeast.\")\n      (FLAGS RLANDBIT)\n      (NE TO MENHIR-ROOM IF MENHIR-POSITION ELSE\n       \"You are trying to walk through an enormous rock.\")\n      (OUT TO MENHIR-ROOM IF MENHIR-POSITION ELSE\n       \"You are trying to walk through an enormous rock.\")\n      (GLOBAL MENHIR)>",
   "referencedBy": [
    "MENHIR-F"
   ]
  },
  "CERBERUS-ROOM": {
   "name": "CERBERUS-ROOM",
   "file": "dungeon.zil",
   "line": 323,
   "endLine": 332,
   "desc": "Cerberus Room",
   "ldesc": "This is the entrance to a huge tomb. A passage leads north.",
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
    "TOMB",
    "TOMB-PSEUDO",
    "CRYPT",
    "TOMB-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "CRYPT",
     "kind": "conditional",
     "condition": "CERBERUS-LEASHED",
     "else": "\"The huge dog snaps at you.\"",
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "CRYPT",
     "kind": "conditional",
     "condition": "CERBERUS-LEASHED",
     "else": "\"The huge dog snaps at you.\"",
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "MENHIR-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "CERBERUS"
   ],
   "source": "<ROOM CERBERUS-ROOM\n      (IN ROOMS)\n      (DESC \"Cerberus Room\")\n      (LDESC\n\"This is the entrance to a huge tomb. A passage leads north.\")\n      (SOUTH TO CRYPT IF CERBERUS-LEASHED ELSE \"The huge dog snaps at you.\")\n      (IN TO CRYPT IF CERBERUS-LEASHED ELSE \"The huge dog snaps at you.\")\n      (NORTH TO MENHIR-ROOM)\n      (FLAGS RLANDBIT)\n      (PSEUDO \"TOMB\" TOMB-PSEUDO \"CRYPT\" TOMB-PSEUDO)>",
   "referencedBy": []
  },
  "CRYPT": {
   "name": "CRYPT",
   "file": "dungeon.zil",
   "line": 410,
   "endLine": 420,
   "desc": "Crypt",
   "ldesc": "Before you are the earthly remains of the mighty Flatheads, twelve somewhat\nflat heads mounted securely on poles. There is writing carved on the crypt.\nTo the north and south are dark doorways.",
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
    "VALUE": [
     "2"
    ]
   },
   "exits": [
    {
     "to": "CERBERUS-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "ZORK3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "HEADS",
    "CRYPT-OBJECT"
   ],
   "source": "<ROOM CRYPT\n      (IN ROOMS)\n      (DESC \"Crypt\")\n      (LDESC\n\"Before you are the earthly remains of the mighty Flatheads, twelve somewhat\nflat heads mounted securely on poles. There is writing carved on the crypt.\nTo the north and south are dark doorways.\")\n      (NORTH TO CERBERUS-ROOM)\n      (SOUTH TO ZORK3)\n      (VALUE 2)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "ZORK3": {
   "name": "ZORK3",
   "file": "dungeon.zil",
   "line": 452,
   "endLine": 456,
   "desc": "Landing",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ZORK3-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [],
   "contents": [],
   "source": "<ROOM ZORK3\n      (IN ROOMS)\n      (DESC \"Landing\")\n      (FLAGS RLANDBIT ONBIT)\n      (ACTION ZORK3-F)>",
   "referencedBy": [
    "DESCRIBE-ROOM"
   ]
  },
  "LEDGE-IN-RAVINE": {
   "name": "LEDGE-IN-RAVINE",
   "file": "dungeon.zil",
   "line": 487,
   "endLine": 497,
   "desc": "Ledge in Ravine",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "LEDGE-IN-RAVINE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CHASM",
    "PDOOR",
    "STREAM",
    "PWINDOW"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DEEP-FORD",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "DEEP-FORD",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "DRAGON-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "DREARY-ROOM",
     "kind": "conditional",
     "condition": "PDOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "DREARY-ROOM",
     "kind": "conditional",
     "condition": "PDOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [
    "KEYHOLE-1"
   ],
   "source": "<ROOM LEDGE-IN-RAVINE\n      (IN ROOMS)\n      (DESC \"Ledge in Ravine\")\n      (SOUTH TO DEEP-FORD)\n      (DOWN TO DEEP-FORD)\n      (WEST TO DRAGON-ROOM)\n      (NORTH TO DREARY-ROOM IF PDOOR IS OPEN)\n      (IN TO DREARY-ROOM IF PDOOR IS OPEN)\n      (FLAGS RLANDBIT)\n      (GLOBAL CHASM PDOOR STREAM PWINDOW)\n      (ACTION LEDGE-IN-RAVINE-F)>",
   "referencedBy": [
    "PDOOR-F",
    "PWINDOW-F",
    "PKEYHOLE-F",
    "I-DRAGON",
    "PRINCESS-F",
    "I-PRINCESS"
   ]
  },
  "DREARY-ROOM": {
   "name": "DREARY-ROOM",
   "file": "dungeon.zil",
   "line": 536,
   "endLine": 543,
   "desc": "Dreary Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DREARY-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "PDOOR",
    "PWINDOW"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "LEDGE-IN-RAVINE",
     "kind": "conditional",
     "condition": "PDOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "LEDGE-IN-RAVINE",
     "kind": "conditional",
     "condition": "PDOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "PTABLE",
    "PCRACK",
    "KEYHOLE-2",
    "PALANTIR-2"
   ],
   "source": "<ROOM DREARY-ROOM\n      (IN ROOMS)\n      (DESC \"Dreary Room\")\n      (SOUTH TO LEDGE-IN-RAVINE IF PDOOR IS OPEN)\n      (OUT TO LEDGE-IN-RAVINE IF PDOOR IS OPEN)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL PDOOR PWINDOW)\n      (ACTION DREARY-ROOM-F)>",
   "referencedBy": [
    "PDOOR-F",
    "PWINDOW-F",
    "PKEYHOLE-F",
    "I-DRAGON"
   ]
  },
  "FORMAL-GARDEN": {
   "name": "FORMAL-GARDEN",
   "file": "princess.zil",
   "line": 5,
   "endLine": 17,
   "desc": "Formal Garden",
   "ldesc": "A path of crushed white stone winds among bushes and flower beds of this\ngarden from south to north. Almost hidden by the shrubbery is a small white\ngazebo.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "FORMAL-GARDEN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GAZEBO-OBJECT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "GAZEBO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "DARK-TUNNEL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "TOPIARY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM FORMAL-GARDEN\n      (IN ROOMS)\n      (DESC \"Formal Garden\")\n      (LDESC\n\"A path of crushed white stone winds among bushes and flower beds of this\ngarden from south to north. Almost hidden by the shrubbery is a small white\ngazebo.\")\n      (IN TO GAZEBO)\n      (NORTH TO DARK-TUNNEL)\n      (SOUTH TO TOPIARY)\n      (FLAGS RLANDBIT)\n      (GLOBAL GAZEBO-OBJECT)\n      (ACTION FORMAL-GARDEN-F)>",
   "referencedBy": [
    "I-GARDEN",
    "GAZEBO-OBJECT-F",
    "PRINCESS-F",
    "I-PRINCESS",
    "I-UNICORN"
   ]
  },
  "GAZEBO": {
   "name": "GAZEBO",
   "file": "princess.zil",
   "line": 84,
   "endLine": 92,
   "desc": "Gazebo",
   "ldesc": "This is a gazebo in the midst of a formal garden. It is cool and restful\nhere. A tea table adorns the center of the gazebo.",
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
    "GAZEBO-OBJECT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "FORMAL-GARDEN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "GAZEBO-TABLE"
   ],
   "source": "<ROOM GAZEBO\n      (IN ROOMS)\n      (DESC \"Gazebo\")\n      (LDESC\n\"This is a gazebo in the midst of a formal garden. It is cool and restful\nhere. A tea table adorns the center of the gazebo.\")\n      (OUT TO FORMAL-GARDEN)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL GAZEBO-OBJECT)>",
   "referencedBy": [
    "GAZEBO-OBJECT-F",
    "PRINCESS-F",
    "I-PRINCESS",
    "I-UNICORN",
    "JIGS-UP"
   ]
  },
  "TOPIARY": {
   "name": "TOPIARY",
   "file": "princess.zil",
   "line": 231,
   "endLine": 242,
   "desc": "Topiary",
   "ldesc": "This is the southern end of a garden, where fantastically shaped hedges are\narrayed with geometric precision. Though recently untended, the bushes have\nclearly been shaped: There is a dragon, a unicorn, a great serpent, a huge\nmisshapen dog, and several human figures. To the west is a tunnel.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "TOPIARY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "CAROUSEL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "FORMAL-GARDEN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "HEDGES"
   ],
   "source": "<ROOM TOPIARY\n      (IN ROOMS)\n      (DESC \"Topiary\")\n      (LDESC\n\"This is the southern end of a garden, where fantastically shaped hedges are\narrayed with geometric precision. Though recently untended, the bushes have\nclearly been shaped: There is a dragon, a unicorn, a great serpent, a huge\nmisshapen dog, and several human figures. To the west is a tunnel.\")\n      (WEST TO CAROUSEL-ROOM)\n      (NORTH TO FORMAL-GARDEN)\n      (FLAGS RLANDBIT)\n      (ACTION TOPIARY-F)>",
   "referencedBy": [
    "I-TOPIARY"
   ]
  },
  "DRAGON-ROOM": {
   "name": "DRAGON-ROOM",
   "file": "princess.zil",
   "line": 284,
   "endLine": 298,
   "desc": "Dragon Room",
   "ldesc": "The walls of this large cavern are scorched and a sooty dry smell is very\nstrong here. A stone bridge leads the south, and a smokey tunnel opens to\nthe north. To the east is a small opening.",
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
    "BRIDGE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "LEDGE-IN-RAVINE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "DRAGON-LAIR",
     "kind": "conditional",
     "condition": "ICE-MELTED",
     "else": "\"The dragon hisses and blocks your way.\"",
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "DRAGON-LAIR",
     "kind": "conditional",
     "condition": "ICE-MELTED",
     "else": "\"The dragon hisses and blocks your way.\"",
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "STONE-BRIDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "DRAGON"
   ],
   "source": "<ROOM DRAGON-ROOM\n      (IN ROOMS)\n      (DESC \"Dragon Room\")\n      (LDESC\n\"The walls of this large cavern are scorched and a sooty dry smell is very\nstrong here. A stone bridge leads the south, and a smokey tunnel opens to\nthe north. To the east is a small opening.\")\n      (EAST TO LEDGE-IN-RAVINE)\n      (NORTH TO DRAGON-LAIR IF ICE-MELTED ELSE\n       \"The dragon hisses and blocks your way.\")\n      (IN TO DRAGON-LAIR IF ICE-MELTED ELSE\n       \"The dragon hisses and blocks your way.\")\n      (SOUTH TO STONE-BRIDGE)\n      (FLAGS RLANDBIT)\n      (GLOBAL BRIDGE)>",
   "referencedBy": [
    "DRAGON-F",
    "DRAGON-LEAVES",
    "I-DRAGON"
   ]
  },
  "DRAGON-LAIR": {
   "name": "DRAGON-LAIR",
   "file": "princess.zil",
   "line": 449,
   "endLine": 456,
   "desc": "Dragon's Lair",
   "ldesc": "The rock walls are scarred by flame, and a blackened doorway leads south.",
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
     "to": "DRAGON-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "DRAGON-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "CHEST",
    "PRINCESS"
   ],
   "source": "<ROOM DRAGON-LAIR\n      (IN ROOMS)\n      (DESC \"Dragon's Lair\")\n      (LDESC\n\"The rock walls are scarred by flame, and a blackened doorway leads south.\")\n      (SOUTH TO DRAGON-ROOM)\n      (OUT TO DRAGON-ROOM)\n      (FLAGS RLANDBIT)>",
   "referencedBy": [
    "I-GARDEN",
    "PRINCESS-F"
   ]
  },
  "STONE-BRIDGE": {
   "name": "STONE-BRIDGE",
   "file": "princess.zil",
   "line": 630,
   "endLine": 640,
   "desc": "Stone Bridge",
   "ldesc": "You are on a north-south bridge spanning a deep ravine. Water flows\nfar beneath.",
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
    "BRIDGE",
    "CHASM"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DRAGON-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "COOL-ROOM",
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
     "message": "It's a long way down.",
     "dir": "DOWN"
    }
   ],
   "contents": [
    "BRICK"
   ],
   "source": "<ROOM STONE-BRIDGE\n      (IN ROOMS)\n      (DESC \"Stone Bridge\")\n      (LDESC\n\"You are on a north-south bridge spanning a deep ravine. Water flows\nfar beneath.\")\n      (NORTH TO DRAGON-ROOM)\n      (SOUTH TO COOL-ROOM)\n      (DOWN \"It's a long way down.\")\n      (FLAGS RLANDBIT)\n      (GLOBAL BRIDGE CHASM)>",
   "referencedBy": []
  },
  "COOL-ROOM": {
   "name": "COOL-ROOM",
   "file": "princess.zil",
   "line": 642,
   "endLine": 653,
   "desc": "Cool Room",
   "ldesc": "The air is cool and damp. A path from the southeast splits here; north toward\na stone bridge, and west into a narrow tunnel. It is from the latter that the\nchill originates.",
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
    "BRIDGE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "CAROUSEL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "STONE-BRIDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "ICE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM COOL-ROOM\n      (IN ROOMS)\n      (DESC \"Cool Room\")\n      (LDESC\n\"The air is cool and damp. A path from the southeast splits here; north toward\na stone bridge, and west into a narrow tunnel. It is from the latter that the\nchill originates.\")\n      (SE TO CAROUSEL-ROOM)\n      (NORTH TO STONE-BRIDGE)\n      (WEST TO ICE-ROOM)\n      (FLAGS RLANDBIT)\n      (GLOBAL BRIDGE)>",
   "referencedBy": []
  },
  "ICE-ROOM": {
   "name": "ICE-ROOM",
   "file": "princess.zil",
   "line": 655,
   "endLine": 663,
   "desc": "Ice Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ICE-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "COOL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "VOLCANO-BOTTOM",
     "kind": "conditional",
     "condition": "ICE-MELTED",
     "else": "\"You don't even have an ice-pick.\"",
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "GUARDED-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "ICE"
   ],
   "source": "<ROOM ICE-ROOM\n      (IN ROOMS)\n      (DESC \"Ice Room\")\n      (EAST TO COOL-ROOM)\n      (WEST TO VOLCANO-BOTTOM IF ICE-MELTED ELSE\n       \"You don't even have an ice-pick.\")\n      (SOUTH TO GUARDED-ROOM)\n      (FLAGS RLANDBIT)\n      (ACTION ICE-ROOM-F)>",
   "referencedBy": [
    "I-DRAGON"
   ]
  },
  "VOLCANO-BOTTOM": {
   "name": "VOLCANO-BOTTOM",
   "file": "volcano.zil",
   "line": 11,
   "endLine": 18,
   "desc": "Volcano Bottom",
   "ldesc": "You are at the base of a dormant volcano. High above, light enters the\ncone of the volcano. The only exit is east.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "NONLANDBIT"
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
     "to": "ICE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "RUBY",
    "BALLOON"
   ],
   "source": "<ROOM VOLCANO-BOTTOM\n      (IN ROOMS)\n      (DESC \"Volcano Bottom\")\n      (LDESC\n\"You are at the base of a dormant volcano. High above, light enters the\ncone of the volcano. The only exit is east.\")\n      (EAST TO ICE-ROOM)\n      (FLAGS RLANDBIT NONLANDBIT)>",
   "referencedBy": [
    "PUT-BALLOON",
    "RISE-AND-SHINE",
    "DECLINE-AND-FALL",
    "I-WIZARD"
   ]
  },
  "VOLCANO-CORE": {
   "name": "VOLCANO-CORE",
   "file": "volcano.zil",
   "line": 342,
   "endLine": 347,
   "desc": "Volcano Core",
   "ldesc": "You are about one hundred feet above the bottom of the volcano.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "NONLANDBIT",
    "NWALLBIT"
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
   "source": "<ROOM VOLCANO-CORE\n      (IN ROOMS)\n      (DESC \"Volcano Core\")\n      (LDESC\n\"You are about one hundred feet above the bottom of the volcano.\")\n      (FLAGS NONLANDBIT NWALLBIT)>",
   "referencedBy": [
    "RISE-AND-SHINE",
    "DECLINE-AND-FALL"
   ]
  },
  "VOLCANO-BY-SMALL-LEDGE": {
   "name": "VOLCANO-BY-SMALL-LEDGE",
   "file": "volcano.zil",
   "line": 349,
   "endLine": 355,
   "desc": "Volcano By Small Ledge",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "NONLANDBIT",
    "NWALLBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "VOLCANO-BY-LEDGE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "NARROW-LEDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "NARROW-LEDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "LAND"
    }
   ],
   "contents": [],
   "source": "<ROOM VOLCANO-BY-SMALL-LEDGE\n      (IN ROOMS)\n      (DESC \"Volcano By Small Ledge\")\n      (EAST TO NARROW-LEDGE)\n      (LAND TO NARROW-LEDGE)\n      (FLAGS NONLANDBIT NWALLBIT)\n      (ACTION VOLCANO-BY-LEDGE-F)>",
   "referencedBy": [
    "VOLCANO-BY-LEDGE-F"
   ]
  },
  "VOLCANO-BY-WIDE-LEDGE": {
   "name": "VOLCANO-BY-WIDE-LEDGE",
   "file": "volcano.zil",
   "line": 357,
   "endLine": 363,
   "desc": "Volcano By Wide Ledge",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "NONLANDBIT",
    "NWALLBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "VOLCANO-BY-LEDGE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "WIDE-LEDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "LAND"
    },
    {
     "to": "WIDE-LEDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM VOLCANO-BY-WIDE-LEDGE\n      (IN ROOMS)\n      (DESC \"Volcano By Wide Ledge\")\n      (LAND TO WIDE-LEDGE)\n      (WEST TO WIDE-LEDGE)\n      (FLAGS NONLANDBIT NWALLBIT)\n      (ACTION VOLCANO-BY-LEDGE-F)>",
   "referencedBy": [
    "RISE-AND-SHINE",
    "VOLCANO-BY-LEDGE-F"
   ]
  },
  "NARROW-LEDGE": {
   "name": "NARROW-LEDGE",
   "file": "volcano.zil",
   "line": 382,
   "endLine": 390,
   "desc": "Narrow Ledge",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "NONLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "LEDGE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HOOK"
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
     "message": "I wouldn't jump from here.",
     "dir": "DOWN"
    },
    {
     "to": "LIBRARY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "LIBRARY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [
    "COIN"
   ],
   "source": "<ROOM NARROW-LEDGE\n      (IN ROOMS)\n      (DESC \"Narrow Ledge\")\n      (DOWN \"I wouldn't jump from here.\")\n      (SOUTH TO LIBRARY)\n      (IN TO LIBRARY)\n      (FLAGS RLANDBIT NONLANDBIT)\n      (GLOBAL HOOK)\n      (ACTION LEDGE-F)>",
   "referencedBy": [
    "I-BALLOON",
    "PUT-BALLOON",
    "RISE-AND-SHINE",
    "LEDGE-F"
   ]
  },
  "LIBRARY": {
   "name": "LIBRARY",
   "file": "volcano.zil",
   "line": 405,
   "endLine": 414,
   "desc": "Library",
   "ldesc": "This must have been a large library, probably for the royal family. All\nof the shelves have been gnawed to pieces by unfriendly gnomes. To the\nnorth is an exit.",
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
     "to": "NARROW-LEDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "NARROW-LEDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "BLUE-BOOK",
    "WHITE-BOOK",
    "PURPLE-BOOK"
   ],
   "source": "<ROOM LIBRARY\n      (IN ROOMS)\n      (DESC \"Library\")\n      (LDESC\n\"This must have been a large library, probably for the royal family. All\nof the shelves have been gnawed to pieces by unfriendly gnomes. To the\nnorth is an exit.\")\n      (NORTH TO NARROW-LEDGE)\n      (OUT TO NARROW-LEDGE)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "WIDE-LEDGE": {
   "name": "WIDE-LEDGE",
   "file": "volcano.zil",
   "line": 503,
   "endLine": 511,
   "desc": "Wide Ledge",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "NONLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "LEDGE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HOOK"
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
     "message": "It's a long way down.",
     "dir": "DOWN"
    },
    {
     "to": "DUSTY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "DUSTY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [],
   "source": "<ROOM WIDE-LEDGE\n      (IN ROOMS)\n      (DESC \"Wide Ledge\")\n      (DOWN \"It's a long way down.\")\n      (SOUTH TO DUSTY-ROOM)\n      (IN TO DUSTY-ROOM)\n      (FLAGS RLANDBIT NONLANDBIT)\n      (GLOBAL HOOK)\n      (ACTION LEDGE-F)>",
   "referencedBy": [
    "I-BALLOON",
    "PUT-BALLOON",
    "RISE-AND-SHINE",
    "LEDGE-F"
   ]
  },
  "DUSTY-ROOM": {
   "name": "DUSTY-ROOM",
   "file": "volcano.zil",
   "line": 513,
   "endLine": 519,
   "desc": "Dusty Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DUSTY-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "WIDE-LEDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "WIDE-LEDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "SAFE",
    "SAFE-HOLE"
   ],
   "source": "<ROOM DUSTY-ROOM\n      (IN ROOMS)\n      (DESC \"Dusty Room\")\n      (NORTH TO WIDE-LEDGE)\n      (OUT TO WIDE-LEDGE)\n      (FLAGS RLANDBIT ONBIT)\n      (ACTION DUSTY-ROOM-F)>",
   "referencedBy": [
    "I-FUSE",
    "I-SAFE"
   ]
  },
  "GUARDED-ROOM": {
   "name": "GUARDED-ROOM",
   "file": "wizard.zil",
   "line": 408,
   "endLine": 416,
   "desc": "Guarded Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "GUARDED-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WIZ-DOOR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "ICE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "TROPHY-ROOM",
     "kind": "conditional",
     "condition": "WIZ-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "TROPHY-ROOM",
     "kind": "conditional",
     "condition": "WIZ-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [
    "DOOR-KEEPER"
   ],
   "source": "<ROOM GUARDED-ROOM\n      (IN ROOMS)\n      (DESC \"Guarded Room\")\n      (NORTH TO ICE-ROOM)\n      (SOUTH TO TROPHY-ROOM IF WIZ-DOOR IS OPEN)\n      (IN TO TROPHY-ROOM IF WIZ-DOOR IS OPEN)\n      (FLAGS RLANDBIT)\n      (GLOBAL WIZ-DOOR)\n      (ACTION GUARDED-ROOM-F)>",
   "referencedBy": []
  },
  "TROPHY-ROOM": {
   "name": "TROPHY-ROOM",
   "file": "wizard.zil",
   "line": 516,
   "endLine": 527,
   "desc": "Trophy Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "TROPHY-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WIZ-DOOR"
   ],
   "pseudo": [
    "OWL",
    "TROPHY-PSEUDO"
   ],
   "otherProps": {
    "VALUE": [
     "10"
    ]
   },
   "exits": [
    {
     "to": "GUARDED-ROOM",
     "kind": "conditional",
     "condition": "WIZ-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "GUARDED-ROOM",
     "kind": "conditional",
     "condition": "WIZ-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "AQUARIUM-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "WIZARDS-WORKSHOP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "DEGREE",
    "WANDS"
   ],
   "source": "<ROOM TROPHY-ROOM\n      (IN ROOMS)\n      (DESC \"Trophy Room\")\n      (FLAGS RLANDBIT)\n      (NORTH TO GUARDED-ROOM IF WIZ-DOOR IS OPEN)\n      (OUT TO GUARDED-ROOM IF WIZ-DOOR IS OPEN)\n      (WEST TO AQUARIUM-ROOM)\n      (EAST TO WIZARDS-WORKSHOP)\n      (VALUE 10)\n      (GLOBAL WIZ-DOOR)\n      (PSEUDO \"OWL\" TROPHY-PSEUDO)\n      (ACTION TROPHY-ROOM-F)>",
   "referencedBy": []
  },
  "WIZARDS-WORKSHOP": {
   "name": "WIZARDS-WORKSHOP",
   "file": "wizard.zil",
   "line": 563,
   "endLine": 573,
   "desc": "Wizard's Workshop",
   "ldesc": "Halls lead west and south. The Wizard's workbench dominates the room. It is\nstained from years of use, and is deeply gouged as though some huge clawed\nanimal was imprisoned on it. In the center of the bench, three stands - ruby,\nsapphire, and diamond - form a triangle.",
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
     "to": "TROPHY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "PENTAGRAM-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "WORKBENCH"
   ],
   "source": "<ROOM WIZARDS-WORKSHOP\n      (IN ROOMS)\n      (DESC \"Wizard's Workshop\")\n      (LDESC\n\"Halls lead west and south. The Wizard's workbench dominates the room. It is\nstained from years of use, and is deeply gouged as though some huge clawed\nanimal was imprisoned on it. In the center of the bench, three stands - ruby,\nsapphire, and diamond - form a triangle.\")\n      (WEST TO TROPHY-ROOM)\n      (SOUTH TO PENTAGRAM-ROOM)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": []
  },
  "PENTAGRAM-ROOM": {
   "name": "PENTAGRAM-ROOM",
   "file": "wizard.zil",
   "line": 650,
   "endLine": 658,
   "desc": "Pentagram Room",
   "ldesc": "Inscribed on the floor is a great pentagram drawn with black chalk.\nIn its center is a black circle.",
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
    "GLOBAL-MENHIR",
    "GLOBAL-CERBERUS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "WIZARDS-WORKSHOP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "PENTAGRAM"
   ],
   "source": "<ROOM PENTAGRAM-ROOM\n      (IN ROOMS)\n      (DESC \"Pentagram Room\")\n      (LDESC\n\"Inscribed on the floor is a great pentagram drawn with black chalk.\nIn its center is a black circle.\")\n      (NORTH TO WIZARDS-WORKSHOP)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL GLOBAL-MENHIR GLOBAL-CERBERUS)>",
   "referencedBy": [
    "WIZARD-F",
    "I-WIZARD",
    "PENTAGRAM-F",
    "DEMON-F",
    "DEAD-PALANTIR-F"
   ]
  },
  "AQUARIUM-ROOM": {
   "name": "AQUARIUM-ROOM",
   "file": "wizard.zil",
   "line": 856,
   "endLine": 865,
   "desc": "Aquarium Room",
   "ldesc": "Here a dark hallway turns a corner. To the south is a dark room, to\nthe east is fitful light.",
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
     "to": "TROPHY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MURKY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "WIZARDS-QUARTERS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "AQUARIUM"
   ],
   "source": "<ROOM AQUARIUM-ROOM\n      (IN ROOMS)\n      (DESC \"Aquarium Room\")\n      (LDESC\n\"Here a dark hallway turns a corner. To the south is a dark room, to\nthe east is fitful light.\")\n      (EAST TO TROPHY-ROOM)\n      (IN TO MURKY-ROOM)\n      (SOUTH TO WIZARDS-QUARTERS)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": []
  },
  "MURKY-ROOM": {
   "name": "MURKY-ROOM",
   "file": "wizard.zil",
   "line": 958,
   "endLine": 965,
   "desc": "Murky Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MURKY-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "AQUARIUM-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "PALANTIR-3"
   ],
   "source": "<ROOM MURKY-ROOM\n      (IN ROOMS)\n      (DESC \"Murky Room\")\n      ;(LDESC\n\"The floor is made of sand, but it is hard to see anything else.\")\n      (OUT TO AQUARIUM-ROOM)\n      (FLAGS RLANDBIT ONBIT)\n      (ACTION MURKY-ROOM-F)>",
   "referencedBy": []
  },
  "WIZARDS-QUARTERS": {
   "name": "WIZARDS-QUARTERS",
   "file": "wizard.zil",
   "line": 983,
   "endLine": 988,
   "desc": "Wizard's Quarters",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "WIZARD-QUARTERS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "AQUARIUM-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM WIZARDS-QUARTERS\n      (IN ROOMS)\n      (DESC \"Wizard's Quarters\")\n      (NORTH TO AQUARIUM-ROOM)\n      (FLAGS RLANDBIT)\n      (ACTION WIZARD-QUARTERS-F)>",
   "referencedBy": []
  },
  "DEAD-PALANTIR-1": {
   "name": "DEAD-PALANTIR-1",
   "file": "wizard.zil",
   "line": 1121,
   "endLine": 1127,
   "desc": "Room of Red Mist",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DEAD-PALANTIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-PALANTIR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DEAD-PALANTIR-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM DEAD-PALANTIR-1\n\t(IN ROOMS)\n\t(DESC \"Room of Red Mist\")\n\t(WEST TO DEAD-PALANTIR-2)\n\t(FLAGS RLANDBIT ONBIT)\n\t(GLOBAL GLOBAL-PALANTIR)\n\t(ACTION DEAD-PALANTIR-F)>",
   "referencedBy": [
    "JIGS-UP",
    "DEAD-PALANTIR-F"
   ]
  },
  "DEAD-PALANTIR-2": {
   "name": "DEAD-PALANTIR-2",
   "file": "wizard.zil",
   "line": 1129,
   "endLine": 1135,
   "desc": "Room of Blue Mist",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DEAD-PALANTIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-PALANTIR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DEAD-PALANTIR-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM DEAD-PALANTIR-2\n\t(IN ROOMS)\n\t(DESC \"Room of Blue Mist\")\n\t(WEST TO DEAD-PALANTIR-3)\n\t(FLAGS RLANDBIT ONBIT)\n\t(GLOBAL GLOBAL-PALANTIR)\n\t(ACTION DEAD-PALANTIR-F)>",
   "referencedBy": [
    "JIGS-UP",
    "DEAD-PALANTIR-F"
   ]
  },
  "DEAD-PALANTIR-3": {
   "name": "DEAD-PALANTIR-3",
   "file": "wizard.zil",
   "line": 1137,
   "endLine": 1143,
   "desc": "Room of White Mist",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DEAD-PALANTIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-PALANTIR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DEAD-PALANTIR-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM DEAD-PALANTIR-3\n\t(IN ROOMS)\n\t(DESC \"Room of White Mist\")\n\t(WEST TO DEAD-PALANTIR-4)\n\t(FLAGS RLANDBIT ONBIT)\n\t(GLOBAL GLOBAL-PALANTIR)\n\t(ACTION DEAD-PALANTIR-F)>",
   "referencedBy": [
    "JIGS-UP"
   ]
  },
  "DEAD-PALANTIR-4": {
   "name": "DEAD-PALANTIR-4",
   "file": "wizard.zil",
   "line": 1145,
   "endLine": 1149,
   "desc": "Room of Black Mist",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DEAD-PALANTIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [],
   "contents": [],
   "source": "<ROOM DEAD-PALANTIR-4\n\t(IN ROOMS)\n\t(DESC \"Room of Black Mist\")\n\t(FLAGS RLANDBIT ONBIT)\n\t(ACTION DEAD-PALANTIR-F)>",
   "referencedBy": [
    "DEAD-PALANTIR-F"
   ]
  }
 },
 "objects": {
  "RIDDLE-DOOR": {
   "name": "RIDDLE-DOOR",
   "file": "alice.zil",
   "line": 45,
   "endLine": 51,
   "desc": "stone door",
   "ldesc": null,
   "fdesc": null,
   "loc": "RIDDLE-ROOM",
   "flags": [
    "DOORBIT",
    "CONTBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "GREAT",
    "STONE"
   ],
   "action": "RIDDLE-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RIDDLE-DOOR\n\t(IN RIDDLE-ROOM)\n\t(DESC \"stone door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE GREAT STONE)\n\t(FLAGS DOORBIT CONTBIT NDESCBIT)\n\t(ACTION RIDDLE-DOOR-F)>",
   "referencedBy": [
    "RIDDLE-ROOM-F",
    "RIDDLE-DOOR-F",
    "PLACE-MAT-F"
   ]
  },
  "BOTTOM-ETCHINGS": {
   "name": "BOTTOM-ETCHINGS",
   "file": "alice.zil",
   "line": 71,
   "endLine": 83,
   "desc": "wall with etchings",
   "ldesc": null,
   "fdesc": null,
   "loc": "CIRCULAR-ROOM",
   "flags": [
    "READBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "ETCHINGS",
    "WALL"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "       o  b  o|\n|\n       A  G  I|\n|\n        E   L|\n|\n       m  p  a"
    ]
   },
   "contents": [],
   "source": "<OBJECT BOTTOM-ETCHINGS\n\t(IN CIRCULAR-ROOM)\n\t(DESC \"wall with etchings\")\n\t(SYNONYM ETCHINGS WALL)\n\t(FLAGS READBIT NDESCBIT)\n\t(TEXT\n\"       o  b  o|\n|\n       A  G  I|\n|\n        E   L|\n|\n       m  p  a\")>",
   "referencedBy": []
  },
  "PEARL-NECKLACE": {
   "name": "PEARL-NECKLACE",
   "file": "alice.zil",
   "line": 85,
   "endLine": 92,
   "desc": "pearl necklace",
   "ldesc": null,
   "fdesc": null,
   "loc": "CIRCULAR-ROOM",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "NECKLACE",
    "TREASURE"
   ],
   "adjectives": [
    "PEARL"
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
     "15"
    ]
   },
   "contents": [],
   "source": "<OBJECT PEARL-NECKLACE\n\t(IN CIRCULAR-ROOM)\n\t(DESC \"pearl necklace\")\n\t(SYNONYM NECKLACE TREASURE)\n\t(ADJECTIVE PEARL)\n\t(SIZE 10)\n\t(VALUE 15)\n\t(FLAGS TAKEBIT)>",
   "referencedBy": []
  },
  "BUCKET": {
   "name": "BUCKET",
   "file": "alice.zil",
   "line": 94,
   "endLine": 106,
   "desc": "wooden bucket",
   "ldesc": "There is a wooden bucket here, 3 feet in diameter and 3 feet high.",
   "fdesc": null,
   "loc": "CIRCULAR-ROOM",
   "flags": [
    "VEHBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "BUCKET"
   ],
   "adjectives": [
    "WOODEN"
   ],
   "action": "BUCKET-F",
   "descfcn": null,
   "contfcn": "BUCKET-CONT",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "100"
    ],
    "SIZE": [
     "100"
    ],
    "VTYPE": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT BUCKET\n\t(IN CIRCULAR-ROOM)\n\t(DESC \"wooden bucket\")\n\t(LDESC\n\"There is a wooden bucket here, 3 feet in diameter and 3 feet high.\")\n\t(SYNONYM BUCKET)\n\t(ADJECTIVE WOODEN)\n\t(CAPACITY 100)\n\t(SIZE 100)\n\t(VTYPE 0)\n\t(FLAGS VEHBIT OPENBIT CONTBIT)\n\t(CONTFCN BUCKET-CONT)\n\t(ACTION BUCKET-F)>",
   "referencedBy": [
    "BUCKET-CONT",
    "BUCKET-F",
    "PASS-THE-BUCKET",
    "I-BUCKET",
    "GO"
   ]
  },
  "WELL": {
   "name": "WELL",
   "file": "alice.zil",
   "line": 166,
   "endLine": 172,
   "desc": "well",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WELL"
   ],
   "adjectives": [
    "MAGIC"
   ],
   "action": "WELL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WELL\n        (IN LOCAL-GLOBALS)\n\t(DESC \"well\")\n\t(SYNONYM WELL)\n\t(ADJECTIVE MAGIC)\n\t(FLAGS NDESCBIT)\n\t(ACTION WELL-F)>",
   "referencedBy": []
  },
  "TOP-ETCHINGS": {
   "name": "TOP-ETCHINGS",
   "file": "alice.zil",
   "line": 201,
   "endLine": 213,
   "desc": "wall with etchings",
   "ldesc": null,
   "fdesc": null,
   "loc": "TOP-OF-WELL",
   "flags": [
    "READBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "ETCHINGS",
    "WALL"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "       o  b  o|\n   r             z|\nf   M  A  G  I  C   z|\n|\nc    W  E   L  L    y|\n   o             n|\n       m  p  a"
    ]
   },
   "contents": [],
   "source": "<OBJECT TOP-ETCHINGS\n\t(IN TOP-OF-WELL)\n\t(DESC \"wall with etchings\")\n\t(SYNONYM ETCHINGS WALL)\n\t(FLAGS READBIT NDESCBIT)\n\t(TEXT\n\"       o  b  o|\n   r             z|\nf   M  A  G  I  C   z|\n|\nc    W  E   L  L    y|\n   o             n|\n       m  p  a\")>",
   "referencedBy": []
  },
  "ROBOT": {
   "name": "ROBOT",
   "file": "alice.zil",
   "line": 215,
   "endLine": 220,
   "desc": "robot",
   "ldesc": null,
   "fdesc": null,
   "loc": "TOP-OF-WELL",
   "flags": [
    "ACTORBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "ROBOT"
   ],
   "adjectives": [],
   "action": "ROBOT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ROBOT\n\t(IN TOP-OF-WELL)\n\t(DESC \"robot\")\n\t(SYNONYM ROBOT)\n\t(FLAGS ACTORBIT CONTBIT OPENBIT)\n\t(ACTION ROBOT-F)>",
   "referencedBy": [
    "ROBOT-F",
    "GREEN-CAKE-F",
    "CAKE-F",
    "SPHERE-F"
   ]
  },
  "ROBOT-LABEL": {
   "name": "ROBOT-LABEL",
   "file": "alice.zil",
   "line": 274,
   "endLine": 285,
   "desc": "green piece of paper",
   "ldesc": null,
   "fdesc": null,
   "loc": "TOP-OF-WELL",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "PAPER",
    "PIECE"
   ],
   "adjectives": [
    "GREEN"
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
     "This robot was trained at GUE Tech to perform simple household functions. To\nactivate, say:|\n        >ROBOT, <thing to do>|\nA product of the Frobozz Magic Robot Company."
    ]
   },
   "contents": [],
   "source": "<OBJECT ROBOT-LABEL\n\t(IN TOP-OF-WELL)\n\t(DESC \"green piece of paper\")\n\t(SYNONYM PAPER PIECE)\n\t(ADJECTIVE GREEN)\n\t(SIZE 3)\n\t(FLAGS READBIT TAKEBIT BURNBIT)\n\t(TEXT\n\"This robot was trained at GUE Tech to perform simple household functions. To\nactivate, say:|\n        >ROBOT, <thing to do>|\nA product of the Frobozz Magic Robot Company.\")>",
   "referencedBy": [
    "PDOOR-F"
   ]
  },
  "TRIANGULAR-BUTTON": {
   "name": "TRIANGULAR-BUTTON",
   "file": "alice.zil",
   "line": 298,
   "endLine": 304,
   "desc": "triangular button",
   "ldesc": null,
   "fdesc": null,
   "loc": "MACHINE-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "TRIANGULAR"
   ],
   "action": "TRIANGULAR-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TRIANGULAR-BUTTON\n\t(IN MACHINE-ROOM)\n\t(DESC \"triangular button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE TRIANGULAR)\n\t(FLAGS NDESCBIT)\n\t(ACTION TRIANGULAR-BUTTON-F)>",
   "referencedBy": []
  },
  "CAGE-OBJECT": {
   "name": "CAGE-OBJECT",
   "file": "alice.zil",
   "line": 331,
   "endLine": 336,
   "desc": "solid steel cage",
   "ldesc": null,
   "fdesc": null,
   "loc": "DINGY-CLOSET",
   "flags": [
    "INVISIBLE"
   ],
   "synonyms": [
    "CAGE"
   ],
   "adjectives": [
    "STEEL",
    "SOLID"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CAGE-OBJECT\n\t(IN DINGY-CLOSET)\n\t(DESC \"solid steel cage\")\n\t(SYNONYM CAGE)\n\t(ADJECTIVE STEEL SOLID)\n\t(FLAGS INVISIBLE)>",
   "referencedBy": [
    "ROBOT-F",
    "SPHERE-F"
   ]
  },
  "PORTRAIT": {
   "name": "PORTRAIT",
   "file": "alice.zil",
   "line": 377,
   "endLine": 385,
   "desc": "portrait of J. Pierpont Flathead",
   "ldesc": null,
   "fdesc": "A rare portrait of J. Pierpont Flathead hangs on the wall.",
   "loc": "TEA-ROOM",
   "flags": [
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "PORTRAIT",
    "PAINTING",
    "TREASURE"
   ],
   "adjectives": [
    "RARE",
    "FLATHEAD"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "25"
    ],
    "VALUE": [
     "20"
    ]
   },
   "contents": [],
   "source": "<OBJECT PORTRAIT\n\t(IN TEA-ROOM)\n\t(DESC \"portrait of J. Pierpont Flathead\")\n\t(FDESC \"A rare portrait of J. Pierpont Flathead hangs on the wall.\")\n\t(SYNONYM PORTRAIT PAINTING TREASURE)\n\t(ADJECTIVE RARE FLATHEAD)\n\t(SIZE 25)\n\t(VALUE 20)\n\t(FLAGS TAKEBIT BURNBIT)>",
   "referencedBy": []
  },
  "ALICE-TABLE": {
   "name": "ALICE-TABLE",
   "file": "alice.zil",
   "line": 387,
   "endLine": 393,
   "desc": "table",
   "ldesc": null,
   "fdesc": null,
   "loc": "TEA-ROOM",
   "flags": [
    "CONTBIT",
    "SURFACEBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "TABLE"
   ],
   "adjectives": [
    "OBLONG"
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
    "GREEN-CAKE",
    "BLUE-CAKE",
    "ORANGE-CAKE",
    "RED-CAKE"
   ],
   "source": "<OBJECT ALICE-TABLE\n\t(IN TEA-ROOM)\n\t(DESC \"table\")\n\t(SYNONYM TABLE)\n\t(ADJECTIVE OBLONG)\n\t(CAPACITY 50)\n\t(FLAGS CONTBIT SURFACEBIT OPENBIT)>",
   "referencedBy": [
    "GREEN-CAKE-F",
    "CAKE-F"
   ]
  },
  "GREEN-CAKE": {
   "name": "GREEN-CAKE",
   "file": "alice.zil",
   "line": 395,
   "endLine": 403,
   "desc": "cake frosted with green letters",
   "ldesc": null,
   "fdesc": null,
   "loc": "ALICE-TABLE",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "FOODBIT"
   ],
   "synonyms": [
    "CAKE",
    "ICING",
    "CAKES",
    "LETTER"
   ],
   "adjectives": [
    "GREEN",
    "FROSTED"
   ],
   "action": "GREEN-CAKE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "4"
    ],
    "TEXT": [
     "The icing spells, \"Eat Me.\""
    ]
   },
   "contents": [],
   "source": "<OBJECT GREEN-CAKE\n\t(SIZE 4)\n\t(IN ALICE-TABLE)\n\t(DESC \"cake frosted with green letters\")\n\t(SYNONYM CAKE ICING CAKES LETTER)\n\t(ADJECTIVE GREEN FROSTED)\n\t(FLAGS READBIT TAKEBIT FOODBIT)\n\t(TEXT \"The icing spells, \\\"Eat Me.\\\"\")\n\t(ACTION GREEN-CAKE-F)>",
   "referencedBy": [
    "GREEN-CAKE-F"
   ]
  },
  "BLUE-CAKE": {
   "name": "BLUE-CAKE",
   "file": "alice.zil",
   "line": 430,
   "endLine": 437,
   "desc": "cake frosted with blue letters",
   "ldesc": null,
   "fdesc": null,
   "loc": "ALICE-TABLE",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "FOODBIT"
   ],
   "synonyms": [
    "CAKE",
    "ICING",
    "CAKES",
    "LETTER"
   ],
   "adjectives": [
    "BLUE",
    "FROSTED"
   ],
   "action": "CAKE-F",
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
   "source": "<OBJECT BLUE-CAKE\n\t(IN ALICE-TABLE)\n\t(DESC \"cake frosted with blue letters\")\n\t(SYNONYM CAKE ICING CAKES LETTER)\n\t(ADJECTIVE BLUE FROSTED)\n\t(SIZE 4)\n\t(FLAGS READBIT TAKEBIT FOODBIT)\n\t(ACTION CAKE-F)>",
   "referencedBy": [
    "CAKE-F"
   ]
  },
  "ORANGE-CAKE": {
   "name": "ORANGE-CAKE",
   "file": "alice.zil",
   "line": 439,
   "endLine": 446,
   "desc": "cake frosted with orange letters",
   "ldesc": null,
   "fdesc": null,
   "loc": "ALICE-TABLE",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "FOODBIT"
   ],
   "synonyms": [
    "CAKE",
    "CAKES",
    "ICING",
    "LETTER"
   ],
   "adjectives": [
    "ORANGE",
    "FROSTED"
   ],
   "action": "CAKE-F",
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
   "source": "<OBJECT ORANGE-CAKE\n\t(IN ALICE-TABLE)\n\t(DESC \"cake frosted with orange letters\")\n\t(SYNONYM CAKE CAKES ICING LETTER)\n\t(ADJECTIVE ORANGE FROSTED)\n\t(SIZE 4)\n\t(FLAGS READBIT TAKEBIT FOODBIT)\n\t(ACTION CAKE-F)>",
   "referencedBy": [
    "CAKE-F"
   ]
  },
  "RED-CAKE": {
   "name": "RED-CAKE",
   "file": "alice.zil",
   "line": 448,
   "endLine": 455,
   "desc": "cake frosted with red letters",
   "ldesc": null,
   "fdesc": null,
   "loc": "ALICE-TABLE",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "FOODBIT"
   ],
   "synonyms": [
    "CAKE",
    "CAKES",
    "ICING",
    "LETTER"
   ],
   "adjectives": [
    "RED",
    "FROSTED"
   ],
   "action": "CAKE-F",
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
   "source": "<OBJECT RED-CAKE\n\t(IN ALICE-TABLE)\n\t(DESC \"cake frosted with red letters\")\n\t(SYNONYM CAKE CAKES ICING LETTER)\n\t(ADJECTIVE RED FROSTED)\n\t(SIZE 4)\n\t(FLAGS READBIT TAKEBIT FOODBIT)\n\t(ACTION CAKE-F)>",
   "referencedBy": [
    "CAKE-F"
   ]
  },
  "POSTS": {
   "name": "POSTS",
   "file": "alice.zil",
   "line": 557,
   "endLine": 562,
   "desc": "group of wooden posts",
   "ldesc": null,
   "fdesc": null,
   "loc": "POSTS-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "POSTS",
    "POST"
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
   "source": "<OBJECT POSTS\n\t(IN POSTS-ROOM)\n\t(DESC \"group of wooden posts\")\n\t(SYNONYM POSTS POST)\n\t(ADJECTIVE WOODEN)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "CAKE-F"
   ]
  },
  "POOL": {
   "name": "POOL",
   "file": "alice.zil",
   "line": 572,
   "endLine": 579,
   "desc": "pool",
   "ldesc": "The depressed area is filled with water. There is something hazy at the\ndeepest part of the pool.",
   "fdesc": null,
   "loc": "POOL-ROOM",
   "flags": [],
   "synonyms": [
    "POOL"
   ],
   "adjectives": [],
   "action": "POOL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT POOL\n\t(IN POOL-ROOM)\n\t(DESC \"pool\")\n\t(LDESC\n\"The depressed area is filled with water. There is something hazy at the\ndeepest part of the pool.\")\n\t(SYNONYM POOL)\n\t(ACTION POOL-F)>",
   "referencedBy": [
    "CAKE-F"
   ]
  },
  "CANDY": {
   "name": "CANDY",
   "file": "alice.zil",
   "line": 590,
   "endLine": 599,
   "desc": "package of candy",
   "ldesc": "There is a package of candied insects here.",
   "fdesc": null,
   "loc": "POOL-ROOM",
   "flags": [
    "FOODBIT",
    "TAKEBIT",
    "INVISIBLE",
    "READBIT"
   ],
   "synonyms": [
    "PACKAGE",
    "CANDY",
    "INSECTS"
   ],
   "adjectives": [
    "CANDIED",
    "RARE"
   ],
   "action": "CANDY-F",
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
   "source": "<OBJECT CANDY\n\t(IN POOL-ROOM)\n\t(DESC \"package of candy\")\n\t(LDESC \"There is a package of candied insects here.\")\n\t(SYNONYM PACKAGE CANDY INSECTS)\n\t(ADJECTIVE CANDIED RARE)\n\t(SIZE 8)\n\t(VALUE 15)\n\t(FLAGS FOODBIT TAKEBIT INVISIBLE READBIT)\n\t(ACTION CANDY-F)>",
   "referencedBy": [
    "CAKE-F",
    "GUARDED-ROOM-F",
    "DOOR-KEEPER-F"
   ]
  },
  "LAMP": {
   "name": "LAMP",
   "file": "dungeon.zil",
   "line": 13,
   "endLine": 21,
   "desc": "lamp",
   "ldesc": null,
   "fdesc": "A familiar brass lantern is lying on the ground.",
   "loc": "INSIDE-THE-BARROW",
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
   "source": "<OBJECT LAMP\n\t(IN INSIDE-THE-BARROW)\n\t(DESC \"lamp\")\n\t(FDESC \"A familiar brass lantern is lying on the ground.\")\n\t(SYNONYM LAMP LANTERN LIGHT)\n\t(ADJECTIVE BRASS)\n\t(SIZE 15)\n\t(FLAGS TAKEBIT LIGHTBIT)\n\t(ACTION LAMP-F)>",
   "referencedBy": [
    "LAMP-F",
    "I-LANTERN",
    "JIGS-UP"
   ]
  },
  "SWORD": {
   "name": "SWORD",
   "file": "dungeon.zil",
   "line": 99,
   "endLine": 106,
   "desc": "elvish sword",
   "ldesc": "An Elvish sword of great antiquity is here.",
   "fdesc": null,
   "loc": "DARK-TUNNEL",
   "flags": [
    "TAKEBIT",
    "WEAPONBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "SWORD",
    "BLADE"
   ],
   "adjectives": [
    "ELVISH",
    "OLD",
    "ANTIQUE"
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
   "source": "<OBJECT SWORD\n\t(IN DARK-TUNNEL)\n\t(DESC \"elvish sword\")\n\t(LDESC \"An Elvish sword of great antiquity is here.\")\n\t(SYNONYM SWORD BLADE)\n\t(ADJECTIVE ELVISH OLD ANTIQUE)\n\t(FLAGS TAKEBIT WEAPONBIT TRYTAKEBIT)\n\t(SIZE 30)>",
   "referencedBy": [
    "V-ATTACK",
    "DEMON-F"
   ]
  },
  "VIOLIN": {
   "name": "VIOLIN",
   "file": "dungeon.zil",
   "line": 162,
   "endLine": 171,
   "desc": "fancy violin",
   "ldesc": "There is a Stradivarius here.",
   "fdesc": null,
   "loc": "CAROUSEL-ROOM",
   "flags": [
    "INVISIBLE",
    "TAKEBIT"
   ],
   "synonyms": [
    "STRADIVARIUS",
    "VIOLIN",
    "TREASURE"
   ],
   "adjectives": [
    "FANCY"
   ],
   "action": "VIOLIN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "10"
    ],
    "VALUE": [
     "20"
    ]
   },
   "contents": [],
   "source": "<OBJECT VIOLIN\n\t(IN CAROUSEL-ROOM)\n\t(DESC \"fancy violin\")\n \t(LDESC \"There is a Stradivarius here.\")\n\t(SYNONYM STRADIVARIUS VIOLIN TREASURE)\n\t(ADJECTIVE FANCY)\n\t(SIZE 10)\n\t(VALUE 20)\n\t(FLAGS INVISIBLE TAKEBIT)\n\t(ACTION VIOLIN-F)>",
   "referencedBy": [
    "TRIANGULAR-BUTTON-F",
    "VIOLIN-F"
   ]
  },
  "BILLS": {
   "name": "BILLS",
   "file": "dungeon.zil",
   "line": 187,
   "endLine": 198,
   "desc": "stack of zorkmid bills",
   "ldesc": "On the floor is a neat stack of 200 zorkmid bills.",
   "fdesc": null,
   "loc": "ROOM-8",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "BILLS",
    "STACK",
    "MONEY",
    "TREASURE"
   ],
   "adjectives": [
    "NEAT",
    "ZORKMID"
   ],
   "action": "BILLS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "25"
    ],
    "SIZE": [
     "10"
    ],
    "TEXT": [
     "Each bill is worth 100 zorkmids and bears the legend \"In Frobs We Trust\"."
    ]
   },
   "contents": [],
   "source": "<OBJECT BILLS\n\t(IN ROOM-8)\n\t(DESC \"stack of zorkmid bills\")\n\t(LDESC \"On the floor is a neat stack of 200 zorkmid bills.\")\n\t(SYNONYM BILLS STACK MONEY TREASURE)\n\t(ADJECTIVE NEAT ZORKMID)\n\t(VALUE 25)\n\t(SIZE 10)\n\t(FLAGS READBIT TAKEBIT BURNBIT)\n\t(TEXT\n\"Each bill is worth 100 zorkmids and bears the legend \\\"In Frobs We Trust\\\".\")\n\t(ACTION BILLS-F)>",
   "referencedBy": []
  },
  "GLOBAL-MENHIR": {
   "name": "GLOBAL-MENHIR",
   "file": "dungeon.zil",
   "line": 248,
   "endLine": 254,
   "desc": "enormous menhir",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "READBIT"
   ],
   "synonyms": [
    "MENHIR",
    "ROCK",
    "STONE"
   ],
   "adjectives": [
    "HUGE",
    "HEAVY",
    "ENORMOUS"
   ],
   "action": "GLOBAL-MENHIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-MENHIR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"enormous menhir\")\n\t(SYNONYM MENHIR ROCK STONE)\n\t(ADJECTIVE HUGE HEAVY ENORMOUS)\n\t(FLAGS NDESCBIT READBIT)\n\t(ACTION GLOBAL-MENHIR-F)>",
   "referencedBy": [
    "DEMON-F"
   ]
  },
  "MENHIR": {
   "name": "MENHIR",
   "file": "dungeon.zil",
   "line": 259,
   "endLine": 265,
   "desc": "enormous menhir",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "READBIT"
   ],
   "synonyms": [
    "MENHIR",
    "ROCK",
    "STONE",
    "F"
   ],
   "adjectives": [
    "HUGE",
    "HEAVY",
    "ENORMOUS"
   ],
   "action": "MENHIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MENHIR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"enormous menhir\")\n\t(SYNONYM MENHIR ROCK STONE F)\n\t(ADJECTIVE HUGE HEAVY ENORMOUS)\n\t(FLAGS NDESCBIT READBIT)\n\t(ACTION MENHIR-F)>",
   "referencedBy": [
    "MENHIR-ROOM-F",
    "DEMON-F"
   ]
  },
  "COLLAR": {
   "name": "COLLAR",
   "file": "dungeon.zil",
   "line": 302,
   "endLine": 310,
   "desc": "gigantic dog collar",
   "ldesc": null,
   "fdesc": "A gigantic dog collar lies amidst the dust.",
   "loc": "KENNEL",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "COLLAR"
   ],
   "adjectives": [
    "HUGE",
    "GIANT",
    "DOG"
   ],
   "action": "COLLAR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "15"
    ]
   },
   "contents": [],
   "source": "<OBJECT COLLAR\n\t(IN KENNEL)\n\t(SYNONYM COLLAR)\n\t(ADJECTIVE HUGE GIANT DOG)\n\t(FDESC \"A gigantic dog collar lies amidst the dust.\")\n\t(DESC \"gigantic dog collar\")\n\t(FLAGS TAKEBIT)\n\t(VALUE 15)\n\t(ACTION COLLAR-F)>",
   "referencedBy": [
    "CERBERUS-F",
    "V-ENCHANT"
   ]
  },
  "GLOBAL-CERBERUS": {
   "name": "GLOBAL-CERBERUS",
   "file": "dungeon.zil",
   "line": 338,
   "endLine": 343,
   "desc": "three-headed dog",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "CERBERUS",
    "DOG",
    "HOUND",
    "MONSTER"
   ],
   "adjectives": [
    "HUGE",
    "GIANT",
    "THREE",
    "HEADED"
   ],
   "action": "GLOBAL-CERBERUS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-CERBERUS\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"three-headed dog\")\n\t(SYNONYM CERBERUS DOG HOUND MONSTER)\n\t(ADJECTIVE HUGE GIANT THREE HEADED)\n\t(ACTION GLOBAL-CERBERUS-F)>",
   "referencedBy": [
    "DEMON-F"
   ]
  },
  "CERBERUS": {
   "name": "CERBERUS",
   "file": "dungeon.zil",
   "line": 348,
   "endLine": 357,
   "desc": "three-headed dog",
   "ldesc": "A vicious-looking dog guards the entrance to the south. It's your\nusual dog, except that it has three heads and is the size of an elephant.",
   "fdesc": null,
   "loc": "CERBERUS-ROOM",
   "flags": [
    "ACTORBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "CERBERUS",
    "DOG",
    "HOUND",
    "MONSTER"
   ],
   "adjectives": [
    "HUGE",
    "GIANT",
    "THREE",
    "HEADED"
   ],
   "action": "CERBERUS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CERBERUS\n\t(IN CERBERUS-ROOM)\n\t(DESC \"three-headed dog\")\n\t(LDESC\n\"A vicious-looking dog guards the entrance to the south. It's your\nusual dog, except that it has three heads and is the size of an elephant.\")\n\t(SYNONYM CERBERUS DOG HOUND MONSTER)\n\t(ADJECTIVE HUGE GIANT THREE HEADED)\n\t(FLAGS ACTORBIT OPENBIT CONTBIT)\n\t(ACTION CERBERUS-F)>",
   "referencedBy": [
    "COLLAR-F",
    "CERBERUS-F",
    "V-ENCHANT"
   ]
  },
  "HEADS": {
   "name": "HEADS",
   "file": "dungeon.zil",
   "line": 422,
   "endLine": 427,
   "desc": "set of poled heads",
   "ldesc": null,
   "fdesc": null,
   "loc": "CRYPT",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "HEADS",
    "HEAD",
    "POLE",
    "POLES"
   ],
   "adjectives": [],
   "action": "HEADS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HEADS\n\t(IN CRYPT)\n        (DESC \"set of poled heads\")\n\t(SYNONYM HEADS HEAD POLE POLES)\n\t(FLAGS NDESCBIT TRYTAKEBIT)\n\t(ACTION HEADS-F)>",
   "referencedBy": []
  },
  "CRYPT-OBJECT": {
   "name": "CRYPT-OBJECT",
   "file": "dungeon.zil",
   "line": 437,
   "endLine": 446,
   "desc": "marble crypt",
   "ldesc": null,
   "fdesc": null,
   "loc": "CRYPT",
   "flags": [
    "NDESCBIT",
    "READBIT"
   ],
   "synonyms": [
    "TOMB",
    "CRYPT",
    "GRAVE"
   ],
   "adjectives": [
    "MARBLE"
   ],
   "action": "CRYPT-OBJECT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "\"Here lie the Flatheads, whose heads were placed on poles by the\nDungeon Master for amazing untastefulness.\""
    ]
   },
   "contents": [],
   "source": "<OBJECT CRYPT-OBJECT\n\t(IN CRYPT)\n\t(DESC \"marble crypt\")\n\t(SYNONYM TOMB CRYPT GRAVE)\n\t(ADJECTIVE MARBLE)\n\t(FLAGS NDESCBIT READBIT)\n\t(TEXT\n\"\\\"Here lie the Flatheads, whose heads were placed on poles by the\nDungeon Master for amazing untastefulness.\\\"\")\n\t(ACTION CRYPT-OBJECT-F)>",
   "referencedBy": []
  },
  "PDOOR": {
   "name": "PDOOR",
   "file": "dungeon.zil",
   "line": 555,
   "endLine": 561,
   "desc": "door of oak",
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
    "WOODEN",
    "OAK"
   ],
   "action": "PDOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PDOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"door of oak\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE WOODEN OAK)\n\t(FLAGS DOORBIT CONTBIT)\n\t(ACTION PDOOR-F)>",
   "referencedBy": [
    "PWINDOW-F",
    "PKEYHOLE-F",
    "PLACE-MAT-F"
   ]
  },
  "PWINDOW": {
   "name": "PWINDOW",
   "file": "dungeon.zil",
   "line": 599,
   "endLine": 605,
   "desc": "barred window",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT"
   ],
   "synonyms": [
    "WINDOW"
   ],
   "adjectives": [
    "BARRED"
   ],
   "action": "PWINDOW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PWINDOW\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"barred window\")\n\t(SYNONYM WINDOW)\n\t(ADJECTIVE BARRED)\n\t(FLAGS DOORBIT)\n\t(ACTION PWINDOW-F)>",
   "referencedBy": []
  },
  "PTABLE": {
   "name": "PTABLE",
   "file": "dungeon.zil",
   "line": 620,
   "endLine": 626,
   "desc": "table",
   "ldesc": null,
   "fdesc": null,
   "loc": "DREARY-ROOM",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "SURFACEBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "TABLE"
   ],
   "adjectives": [
    "DUSTY",
    "WOODEN"
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
   "contents": [],
   "source": "<OBJECT PTABLE\n\t(IN DREARY-ROOM)\n\t(DESC \"table\")\n\t(SYNONYM TABLE)\n\t(ADJECTIVE DUSTY WOODEN)\n\t(CAPACITY 40)\n\t(FLAGS NDESCBIT CONTBIT SURFACEBIT OPENBIT)>",
   "referencedBy": []
  },
  "PCRACK": {
   "name": "PCRACK",
   "file": "dungeon.zil",
   "line": 628,
   "endLine": 633,
   "desc": "crack",
   "ldesc": null,
   "fdesc": null,
   "loc": "DREARY-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "CRACK"
   ],
   "adjectives": [
    "NARROW"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PCRACK\n\t(IN DREARY-ROOM)\n\t(DESC \"crack\")\n\t(SYNONYM CRACK)\n\t(ADJECTIVE NARROW)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "KEYHOLE-1": {
   "name": "KEYHOLE-1",
   "file": "dungeon.zil",
   "line": 635,
   "endLine": 640,
   "desc": "keyhole",
   "ldesc": null,
   "fdesc": null,
   "loc": "LEDGE-IN-RAVINE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "KEYHOLE",
    "HOLE"
   ],
   "adjectives": [],
   "action": "PKEYHOLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT KEYHOLE-1\n\t(IN LEDGE-IN-RAVINE)\n\t(DESC \"keyhole\")\n\t(SYNONYM KEYHOLE HOLE)\n\t(FLAGS NDESCBIT)\n\t(ACTION PKEYHOLE-F)>",
   "referencedBy": []
  },
  "KEYHOLE-2": {
   "name": "KEYHOLE-2",
   "file": "dungeon.zil",
   "line": 642,
   "endLine": 647,
   "desc": "keyhole",
   "ldesc": null,
   "fdesc": null,
   "loc": "DREARY-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "KEYHOLE",
    "HOLE"
   ],
   "adjectives": [],
   "action": "PKEYHOLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "KEY"
   ],
   "source": "<OBJECT KEYHOLE-2\n\t(IN DREARY-ROOM)\n\t(DESC \"keyhole\")\n\t(SYNONYM KEYHOLE HOLE)\n\t(FLAGS NDESCBIT)\n\t(ACTION PKEYHOLE-F)>",
   "referencedBy": [
    "PCHECK",
    "PKEYHOLE-F"
   ]
  },
  "KEY": {
   "name": "KEY",
   "file": "dungeon.zil",
   "line": 673,
   "endLine": 679,
   "desc": "rusty iron key",
   "ldesc": null,
   "fdesc": null,
   "loc": "KEYHOLE-2",
   "flags": [
    "TAKEBIT",
    "NDESCBIT",
    "TOOLBIT"
   ],
   "synonyms": [
    "KEY"
   ],
   "adjectives": [
    "IRON",
    "RUSTY"
   ],
   "action": null,
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
   "source": "<OBJECT KEY\n\t(IN KEYHOLE-2)\n\t(DESC \"rusty iron key\")\n\t(SYNONYM KEY)\n\t(ADJECTIVE IRON RUSTY)\n\t(SIZE 2)\n\t(FLAGS TAKEBIT NDESCBIT TOOLBIT)>",
   "referencedBy": [
    "PCHECK",
    "PDOOR-F",
    "PKEYHOLE-F"
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
    "INTNUM",
    "IT",
    "GROUND",
    "GRUE",
    "ME",
    "PATH-OBJECT",
    "ZORKMID",
    "HANDS",
    "WALL"
   ],
   "source": "<OBJECT GLOBAL-OBJECTS\n\t(FLAGS INVISIBLE TOUCHBIT SURFACEBIT TRYTAKEBIT\n\t       OPENBIT SEARCHBIT TRANSBIT ONBIT RLANDBIT)>",
   "referencedBy": [
    "GLOBAL-CHECK",
    "ACCESSIBLE?",
    "META-LOC",
    "V-FIND"
   ]
  },
  "LOCAL-GLOBALS": {
   "name": "LOCAL-GLOBALS",
   "file": "globals.zil",
   "line": 11,
   "endLine": 13,
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
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "WELL",
    "GLOBAL-MENHIR",
    "MENHIR",
    "GLOBAL-CERBERUS",
    "PDOOR",
    "PWINDOW",
    "PSEUDO-OBJECT",
    "GLOBAL-WATER",
    "STREAM",
    "CHASM",
    "BRIDGE",
    "GAZEBO-OBJECT",
    "HOOK",
    "WIZ-DOOR",
    "GLOBAL-PALANTIR"
   ],
   "source": "<OBJECT LOCAL-GLOBALS\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ZZMGCK) ;\"Yes, this synonym needs to exist... sigh\">",
   "referencedBy": [
    "MENHIR-ROOM-F",
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
    "GWIM",
    "GLOBAL-CHECK",
    "META-LOC",
    "V-DISEMBARK",
    "V-EXIT",
    "DESCRIBE-ROOM",
    "FIRSTER",
    "I-FUSE",
    "PALANTIR-LOOK"
   ]
  },
  "INTNUM": {
   "name": "INTNUM",
   "file": "globals.zil",
   "line": 18,
   "endLine": 22,
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
   "source": "<OBJECT INTNUM\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"number\")\n\t(SYNONYM INTNUM)\n\t(FLAGS TOOLBIT)>",
   "referencedBy": [
    "V-RANDOM"
   ]
  },
  "PSEUDO-OBJECT": {
   "name": "PSEUDO-OBJECT",
   "file": "globals.zil",
   "line": 24,
   "endLine": 27,
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
    "ALICE-HOLE",
    "CHASM-F",
    "GLOBAL-CHECK",
    "ACCESSIBLE?",
    "V-FIND"
   ]
  },
  "IT": {
   "name": "IT",
   "file": "globals.zil",
   "line": 29,
   "endLine": 33,
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
  "GROUND": {
   "name": "GROUND",
   "file": "globals.zil",
   "line": 105,
   "endLine": 109,
   "desc": "ground",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "GROUND",
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
   "source": "<OBJECT GROUND\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"ground\")\n\t(SYNONYM GROUND DIRT FLOOR)\n\t(ACTION GROUND-F)>",
   "referencedBy": [
    "GROUND-F",
    "V-PUT-ON",
    "PRE-TAKE"
   ]
  },
  "WATER": {
   "name": "WATER",
   "file": "globals.zil",
   "line": 117,
   "endLine": 123,
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
    "LIQUID"
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
   "source": "<OBJECT WATER\n\t(DESC \"quantity of water\")\n\t(LDESC \"There is some water here.\")\n\t(SYNONYM WATER LIQUID)\n\t(SIZE 4)\n\t(FLAGS TAKEBIT DRINKBIT)\n\t(ACTION WATER-F)>",
   "referencedBy": [
    "BUCKET-F",
    "I-BUCKET",
    "POOL-F",
    "WATER-F",
    "V-EAT",
    "PRE-ENTER",
    "PRE-FILL",
    "V-POUR-ON",
    "V-SWIM"
   ]
  },
  "GLOBAL-WATER": {
   "name": "GLOBAL-WATER",
   "file": "globals.zil",
   "line": 125,
   "endLine": 130,
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
    "V-EAT",
    "HIT-SPOT",
    "PRE-ENTER",
    "PRE-FILL",
    "V-SWIM"
   ]
  },
  "GRUE": {
   "name": "GRUE",
   "file": "globals.zil",
   "line": 204,
   "endLine": 209,
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
   "referencedBy": [
    "WAND-F"
   ]
  },
  "ME": {
   "name": "ME",
   "file": "globals.zil",
   "line": 222,
   "endLine": 227,
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
    "SELF"
   ],
   "adjectives": [],
   "action": "ME-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ME\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"brave adventurer\")\n\t(SYNONYM ME MYSELF SELF)\n\t(FLAGS ACTORBIT)\n\t(ACTION ME-F)>",
   "referencedBy": [
    "ME-F",
    "CHASM-F",
    "BUFFER-PRINT",
    "ITAKE-CHECK",
    "V-THROW",
    "WAND-F",
    "DEMON-F"
   ]
  },
  "ADVENTURER": {
   "name": "ADVENTURER",
   "file": "globals.zil",
   "line": 248,
   "endLine": 254,
   "desc": "thing",
   "ldesc": null,
   "fdesc": null,
   "loc": "INSIDE-THE-BARROW",
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
   "source": "<OBJECT ADVENTURER\n\t(IN INSIDE-THE-BARROW)\n\t(DESC \"thing\")\n\t(SYNONYM ADVENTURER)\n\t(STRENGTH 0)\n\t(FLAGS NDESCBIT INVISIBLE SACREDBIT ACTORBIT)\n\t(ACTION 0)>",
   "referencedBy": [
    "ROBOT-F",
    "TRIANGULAR-BUTTON-F",
    "GREEN-CAKE-F",
    "CAKE-F",
    "NOT-HERE-OBJECT-F",
    "FIND-IN",
    "GO",
    "PARSER",
    "SYNTAX-CHECK",
    "GET-OBJECT",
    "ITAKE-CHECK",
    "LIT?",
    "I-PRINCESS",
    "V-ATTACK",
    "PRE-ENTER",
    "V-THROW",
    "V-WALK",
    "PRINT-CONT",
    "JIGS-UP",
    "GOTO",
    "DECLINE-AND-FALL",
    "WIZARD-F",
    "I-WIZARD",
    "RANDOM-WALK",
    "DEMON-F",
    "SPHERE-F"
   ]
  },
  "PATH-OBJECT": {
   "name": "PATH-OBJECT",
   "file": "globals.zil",
   "line": 256,
   "endLine": 262,
   "desc": "passage",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PATH",
    "PASSAGE",
    "TUNNEL"
   ],
   "adjectives": [
    "DARK",
    "DAMP",
    "SMOKEY",
    "SCORCHED",
    "NARROW"
   ],
   "action": "PATH-OBJECT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PATH-OBJECT\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"passage\")\n\t(SYNONYM PATH PASSAGE TUNNEL)\n\t(ADJECTIVE DARK DAMP SMOKEY SCORCHED NARROW)\n\t(FLAGS NDESCBIT)\n\t(ACTION PATH-OBJECT-F)>",
   "referencedBy": []
  },
  "ZORKMID": {
   "name": "ZORKMID",
   "file": "globals.zil",
   "line": 268,
   "endLine": 272,
   "desc": "zorkmid",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "ZORKMID"
   ],
   "adjectives": [],
   "action": "ZORKMID-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ZORKMID\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"zorkmid\")\n\t(SYNONYM ZORKMID)\n\t(ACTION ZORKMID-F)>",
   "referencedBy": []
  },
  "HANDS": {
   "name": "HANDS",
   "file": "globals.zil",
   "line": 279,
   "endLine": 284,
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
    "GWIM",
    "ITAKE-CHECK",
    "V-ATTACK",
    "V-FIND",
    "V-STRIKE"
   ]
  },
  "STREAM": {
   "name": "STREAM",
   "file": "globals.zil",
   "line": 286,
   "endLine": 292,
   "desc": "stream",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "STREAM"
   ],
   "adjectives": [
    "COLD"
   ],
   "action": "STREAM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT STREAM\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"stream\")\n\t(SYNONYM STREAM)\n\t(ADJECTIVE COLD)\n\t(FLAGS NDESCBIT)\n\t(ACTION STREAM-F)>",
   "referencedBy": []
  },
  "CHASM": {
   "name": "CHASM",
   "file": "globals.zil",
   "line": 298,
   "endLine": 304,
   "desc": "chasm",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "CHASM",
    "RAVINE"
   ],
   "adjectives": [
    "DEEP"
   ],
   "action": "CHASM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CHASM\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"chasm\")\n\t(SYNONYM CHASM RAVINE)\n\t(ADJECTIVE DEEP)\n\t(FLAGS NDESCBIT)\n\t(ACTION CHASM-F)>",
   "referencedBy": []
  },
  "BRIDGE": {
   "name": "BRIDGE",
   "file": "globals.zil",
   "line": 316,
   "endLine": 322,
   "desc": "bridge",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BRIDGE"
   ],
   "adjectives": [
    "STONE"
   ],
   "action": "BRIDGE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BRIDGE\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"bridge\")\n\t(SYNONYM BRIDGE)\n\t(ADJECTIVE STONE)\n\t(FLAGS NDESCBIT)\n\t(ACTION BRIDGE-F)>",
   "referencedBy": [
    "MAGIC-ACTOR"
   ]
  },
  "WALL": {
   "name": "WALL",
   "file": "globals.zil",
   "line": 328,
   "endLine": 332,
   "desc": "wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "WALL"
   ],
   "adjectives": [
    "EAST",
    "EASTERN",
    "WEST",
    "WESTERN",
    "SOUTH",
    "SOUTHE",
    "NORTH",
    "NORTHE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WALL\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"wall\")\n\t(SYNONYM WALL)\n\t(ADJECTIVE EAST EASTERN WEST WESTERN SOUTH SOUTHE NORTH NORTHE)>",
   "referencedBy": []
  },
  "UNICORN": {
   "name": "UNICORN",
   "file": "princess.zil",
   "line": 44,
   "endLine": 50,
   "desc": "unicorn",
   "ldesc": "A beautiful unicorn is munching grass here.",
   "fdesc": null,
   "loc": null,
   "flags": [
    "ACTORBIT",
    "TRYTAKEBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "UNICORN",
    "ANIMAL"
   ],
   "adjectives": [
    "BEAUTIFUL",
    "WHITE"
   ],
   "action": "UNICORN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "GOLD-KEY",
    "RIBBON"
   ],
   "source": "<OBJECT UNICORN\n\t(DESC \"unicorn\")\n\t(LDESC \"A beautiful unicorn is munching grass here.\")\n\t(SYNONYM UNICORN ANIMAL)\n\t(ADJECTIVE BEAUTIFUL WHITE)\n\t(FLAGS ACTORBIT TRYTAKEBIT OPENBIT CONTBIT)\n\t(ACTION UNICORN-F)>",
   "referencedBy": [
    "I-GARDEN",
    "UNICORN-F"
   ]
  },
  "GOLD-KEY": {
   "name": "GOLD-KEY",
   "file": "princess.zil",
   "line": 66,
   "endLine": 74,
   "desc": "delicate gold key",
   "ldesc": null,
   "fdesc": null,
   "loc": "UNICORN",
   "flags": [
    "NDESCBIT",
    "TAKEBIT",
    "TRYTAKEBIT",
    "TOOLBIT"
   ],
   "synonyms": [
    "KEY",
    "TREASURE"
   ],
   "adjectives": [
    "DELICATE",
    "GOLD"
   ],
   "action": "UNICORN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "15"
    ],
    "SIZE": [
     "3"
    ]
   },
   "contents": [],
   "source": "<OBJECT GOLD-KEY\n\t(IN UNICORN)\n\t(DESC \"delicate gold key\")\n\t(SYNONYM KEY TREASURE)\n\t(ADJECTIVE DELICATE GOLD)\n\t(VALUE 15)\n\t(SIZE 3)\n\t(FLAGS NDESCBIT TAKEBIT TRYTAKEBIT TOOLBIT)\n\t(ACTION UNICORN-F)>",
   "referencedBy": [
    "PDOOR-F",
    "I-UNICORN",
    "WIZ-DOOR-F"
   ]
  },
  "RIBBON": {
   "name": "RIBBON",
   "file": "princess.zil",
   "line": 76,
   "endLine": 82,
   "desc": "ribbon",
   "ldesc": null,
   "fdesc": null,
   "loc": "UNICORN",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "RIBBON"
   ],
   "adjectives": [
    "VELVET",
    "SATIN"
   ],
   "action": "UNICORN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RIBBON\n\t(IN UNICORN)\n\t(DESC \"ribbon\")\n\t(SYNONYM RIBBON)\n\t(ADJECTIVE VELVET SATIN)\n\t(FLAGS NDESCBIT)\n\t(ACTION UNICORN-F)>",
   "referencedBy": []
  },
  "GAZEBO-OBJECT": {
   "name": "GAZEBO-OBJECT",
   "file": "princess.zil",
   "line": 94,
   "endLine": 100,
   "desc": "gazebo",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "GAZEBO"
   ],
   "adjectives": [
    "WOODEN"
   ],
   "action": "GAZEBO-OBJECT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GAZEBO-OBJECT\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"gazebo\")\n\t(SYNONYM GAZEBO)\n\t(ADJECTIVE WOODEN)\n\t(FLAGS NDESCBIT)\n\t(ACTION GAZEBO-OBJECT-F)>",
   "referencedBy": []
  },
  "GAZEBO-TABLE": {
   "name": "GAZEBO-TABLE",
   "file": "princess.zil",
   "line": 112,
   "endLine": 117,
   "desc": "table",
   "ldesc": null,
   "fdesc": null,
   "loc": "GAZEBO",
   "flags": [
    "NDESCBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT"
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
     "100"
    ]
   },
   "contents": [
    "NEWSPAPER",
    "PLACE-MAT",
    "TEAPOT",
    "LETTER-OPENER",
    "MATCH"
   ],
   "source": "<OBJECT GAZEBO-TABLE\n\t(IN GAZEBO)\n\t(DESC \"table\")\n\t(SYNONYM TABLE)\n\t(CAPACITY 100)\n\t(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT)>",
   "referencedBy": []
  },
  "NEWSPAPER": {
   "name": "NEWSPAPER",
   "file": "princess.zil",
   "line": 119,
   "endLine": 125,
   "desc": "newspaper",
   "ldesc": null,
   "fdesc": null,
   "loc": "GAZEBO-TABLE",
   "flags": [
    "TAKEBIT",
    "BURNBIT",
    "READBIT"
   ],
   "synonyms": [
    "PAPER",
    "NEWSPAPER"
   ],
   "adjectives": [
    "NEWS",
    "NEWSPAPER"
   ],
   "action": "NEWSPAPER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT NEWSPAPER\n\t(IN GAZEBO-TABLE)\n\t(DESC \"newspaper\")\n\t(SYNONYM PAPER NEWSPAPER)\n\t(ADJECTIVE NEWS NEWSPAPER)\n\t(FLAGS TAKEBIT BURNBIT READBIT)\n\t(ACTION NEWSPAPER-F)>",
   "referencedBy": [
    "PDOOR-F"
   ]
  },
  "PLACE-MAT": {
   "name": "PLACE-MAT",
   "file": "princess.zil",
   "line": 134,
   "endLine": 142,
   "desc": "place mat",
   "ldesc": null,
   "fdesc": null,
   "loc": "GAZEBO-TABLE",
   "flags": [
    "TAKEBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "MAT",
    "PLACEM"
   ],
   "adjectives": [
    "PLACE"
   ],
   "action": "PLACE-MAT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "12"
    ],
    "CAPACITY": [
     "20"
    ]
   },
   "contents": [],
   "source": "<OBJECT PLACE-MAT\n\t(IN GAZEBO-TABLE)\n\t(DESC \"place mat\")\n\t(SYNONYM MAT PLACEM)\n\t(ADJECTIVE PLACE)\n\t(SIZE 12)\n\t(CAPACITY 20)\n\t(FLAGS TAKEBIT SURFACEBIT CONTBIT OPENBIT)\n\t(ACTION PLACE-MAT-F)>",
   "referencedBy": [
    "PCHECK"
   ]
  },
  "TEAPOT": {
   "name": "TEAPOT",
   "file": "princess.zil",
   "line": 159,
   "endLine": 166,
   "desc": "china teapot",
   "ldesc": null,
   "fdesc": null,
   "loc": "GAZEBO-TABLE",
   "flags": [
    "TAKEBIT",
    "TRANSBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "TEAPOT",
    "POT"
   ],
   "adjectives": [
    "CHINA",
    "TEA"
   ],
   "action": "TEAPOT-F",
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
   "source": "<OBJECT TEAPOT\n\t(IN GAZEBO-TABLE)\n\t(DESC \"china teapot\")\n\t(SYNONYM TEAPOT POT)\n\t(ADJECTIVE CHINA TEA)\n\t(CAPACITY 4)\n\t(FLAGS TAKEBIT TRANSBIT CONTBIT OPENBIT)\n\t(ACTION TEAPOT-F)>",
   "referencedBy": [
    "WATER-F"
   ]
  },
  "LETTER-OPENER": {
   "name": "LETTER-OPENER",
   "file": "princess.zil",
   "line": 172,
   "endLine": 178,
   "desc": "letter opener",
   "ldesc": null,
   "fdesc": null,
   "loc": "GAZEBO-TABLE",
   "flags": [
    "TAKEBIT",
    "TOOLBIT"
   ],
   "synonyms": [
    "OPENER"
   ],
   "adjectives": [
    "LETTER"
   ],
   "action": null,
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
   "source": "<OBJECT LETTER-OPENER\n\t(IN GAZEBO-TABLE)\n\t(DESC \"letter opener\")\n\t(SYNONYM OPENER)\n\t(ADJECTIVE LETTER)\n\t(SIZE 2)\n\t(FLAGS TAKEBIT TOOLBIT)>",
   "referencedBy": [
    "PKEYHOLE-F"
   ]
  },
  "MATCH": {
   "name": "MATCH",
   "file": "princess.zil",
   "line": 180,
   "endLine": 190,
   "desc": "matchbook",
   "ldesc": "There is a matchbook saying \"Visit ZORK I\" here.",
   "fdesc": null,
   "loc": "GAZEBO-TABLE",
   "flags": [
    "READBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "MATCH",
    "MATCHES",
    "MATCHBOOK"
   ],
   "adjectives": [],
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
     "\"Visit Exotic ZORK I! Consult the Frobozz Magic Travel Agency, or visit\nyour local computer store for details.\""
    ]
   },
   "contents": [],
   "source": "<OBJECT MATCH\n\t(IN GAZEBO-TABLE)\n\t(DESC \"matchbook\")\n\t(LDESC \"There is a matchbook saying \\\"Visit ZORK I\\\" here.\")\n\t(SYNONYM MATCH MATCHES MATCHBOOK)\n\t(SIZE 2)\n\t(FLAGS READBIT TAKEBIT)\n\t(TEXT\n\"\\\"Visit Exotic ZORK I! Consult the Frobozz Magic Travel Agency, or visit\nyour local computer store for details.\\\"\")\n\t(ACTION MATCH-F)>",
   "referencedBy": [
    "MATCH-F",
    "I-MATCH",
    "FUSE-F"
   ]
  },
  "HEDGES": {
   "name": "HEDGES",
   "file": "princess.zil",
   "line": 272,
   "endLine": 277,
   "desc": "hedge",
   "ldesc": null,
   "fdesc": null,
   "loc": "TOPIARY",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "HEDGE",
    "HEDGES"
   ],
   "adjectives": [],
   "action": "HEDGES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HEDGES\n\t(IN TOPIARY)\n\t(DESC \"hedge\")\n\t(SYNONYM HEDGE HEDGES)\n\t(FLAGS NDESCBIT)\n\t(ACTION HEDGES-F)>",
   "referencedBy": []
  },
  "DRAGON": {
   "name": "DRAGON",
   "file": "princess.zil",
   "line": 300,
   "endLine": 309,
   "desc": "huge red dragon",
   "ldesc": "A huge red dragon is lying on the rocks, watching.",
   "fdesc": "A huge red dragon is blocking the north exit. Smoke curls from his nostrils.",
   "loc": "DRAGON-ROOM",
   "flags": [
    "ACTORBIT"
   ],
   "synonyms": [
    "DRAGON"
   ],
   "adjectives": [
    "RED",
    "HUGE"
   ],
   "action": "DRAGON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DRAGON\n\t(IN DRAGON-ROOM)\n\t(DESC \"huge red dragon\")\n\t(SYNONYM DRAGON)\n\t(ADJECTIVE RED HUGE)\n\t(LDESC \"A huge red dragon is lying on the rocks, watching.\")\n\t(FDESC\n\"A huge red dragon is blocking the north exit. Smoke curls from his nostrils.\")\n\t(FLAGS ACTORBIT)\n\t(ACTION DRAGON-F)>",
   "referencedBy": [
    "DRAGON-F",
    "DRAGON-LEAVES",
    "I-DRAGON"
   ]
  },
  "CHEST": {
   "name": "CHEST",
   "file": "princess.zil",
   "line": 458,
   "endLine": 467,
   "desc": "wooden chest",
   "ldesc": null,
   "fdesc": "An old wooden chest sits in the corner.",
   "loc": "DRAGON-LAIR",
   "flags": [
    "CONTBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "CHEST",
    "TRUNK"
   ],
   "adjectives": [
    "WOODEN",
    "OLD"
   ],
   "action": "CHEST-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "40"
    ],
    "SIZE": [
     "40"
    ]
   },
   "contents": [
    "STATUETTE"
   ],
   "source": "<OBJECT CHEST\n\t(IN DRAGON-LAIR)\n\t(DESC \"wooden chest\")\n\t(FDESC \"An old wooden chest sits in the corner.\")\n\t(SYNONYM CHEST TRUNK)\n\t(ADJECTIVE WOODEN OLD)\n\t(FLAGS CONTBIT TAKEBIT)\n\t(CAPACITY 40)\n\t(SIZE 40)\n\t(ACTION CHEST-F)>",
   "referencedBy": [
    "DRAGON-F",
    "CHEST-F"
   ]
  },
  "STATUETTE": {
   "name": "STATUETTE",
   "file": "princess.zil",
   "line": 490,
   "endLine": 497,
   "desc": "golden dragon statuette",
   "ldesc": null,
   "fdesc": "Nestled in the chest is a gold statuette of a dragon.",
   "loc": "CHEST",
   "flags": [
    "TREASUREBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "TREASURE",
    "STATUE",
    "DRAGON"
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
    "VALUE": [
     "20"
    ]
   },
   "contents": [],
   "source": "<OBJECT STATUETTE\n\t(IN CHEST)\n\t(DESC \"golden dragon statuette\")\n\t(FDESC \"Nestled in the chest is a gold statuette of a dragon.\")\n\t(SYNONYM TREASURE STATUE DRAGON)\n\t(ADJECTIVE GOLD)\n\t(FLAGS TREASUREBIT TAKEBIT)\n\t(VALUE 20)>",
   "referencedBy": []
  },
  "PRINCESS": {
   "name": "PRINCESS",
   "file": "princess.zil",
   "line": 499,
   "endLine": 508,
   "desc": "beautiful princess",
   "ldesc": null,
   "fdesc": "A beautiful princess sits on a rock in the corner. Her hair is unkempt\nand she appears to be in a trance.",
   "loc": "DRAGON-LAIR",
   "flags": [
    "ACTORBIT"
   ],
   "synonyms": [
    "PRINCESS",
    "WOMAN",
    "LADY"
   ],
   "adjectives": [
    "BEAUTIFUL",
    "YOUNG"
   ],
   "action": "PRINCESS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PRINCESS\n\t(IN DRAGON-LAIR)\n\t(DESC \"beautiful princess\")\n\t(FDESC\n\"A beautiful princess sits on a rock in the corner. Her hair is unkempt\nand she appears to be in a trance.\")\n\t(SYNONYM PRINCESS WOMAN LADY)\n\t(ADJECTIVE BEAUTIFUL YOUNG)\n\t(FLAGS ACTORBIT)\n\t(ACTION PRINCESS-F)>",
   "referencedBy": [
    "I-GARDEN",
    "CHEST-F",
    "PRINCESS-F",
    "I-PRINCESS",
    "I-UNICORN"
   ]
  },
  "ICE": {
   "name": "ICE",
   "file": "princess.zil",
   "line": 674,
   "endLine": 680,
   "desc": "glacier",
   "ldesc": "A mass of ice fills the western half of the room.",
   "fdesc": null,
   "loc": "ICE-ROOM",
   "flags": [],
   "synonyms": [
    "ICE",
    "MASS",
    "GLACIER"
   ],
   "adjectives": [
    "COLD",
    "ICY"
   ],
   "action": "ICE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ICE\n\t(IN ICE-ROOM)\n\t(DESC \"glacier\")\n\t(LDESC \"A mass of ice fills the western half of the room.\")\n\t(SYNONYM ICE MASS GLACIER)\n\t(ADJECTIVE COLD ICY)\n\t(ACTION ICE-F)>",
   "referencedBy": [
    "I-DRAGON"
   ]
  },
  "RUBY": {
   "name": "RUBY",
   "file": "volcano.zil",
   "line": 20,
   "endLine": 27,
   "desc": "ruby",
   "ldesc": "On the floor lies a moby ruby.",
   "fdesc": null,
   "loc": "VOLCANO-BOTTOM",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "RUBY",
    "TREASURE"
   ],
   "adjectives": [
    "MOBY"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "15"
    ]
   },
   "contents": [],
   "source": "<OBJECT RUBY\n\t(IN VOLCANO-BOTTOM)\n\t(DESC \"ruby\")\n\t(LDESC \"On the floor lies a moby ruby.\")\n\t(SYNONYM RUBY TREASURE)\n\t(ADJECTIVE MOBY)\n\t(VALUE 15)\n\t(FLAGS TAKEBIT)>",
   "referencedBy": []
  },
  "BALLOON": {
   "name": "BALLOON",
   "file": "volcano.zil",
   "line": 31,
   "endLine": 41,
   "desc": "basket",
   "ldesc": null,
   "fdesc": null,
   "loc": "VOLCANO-BOTTOM",
   "flags": [
    "VEHBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "BALLOON",
    "BASKET"
   ],
   "adjectives": [
    "WICKER"
   ],
   "action": "BALLOON-F",
   "descfcn": "BALLOON-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "100"
    ],
    "SIZE": [
     "70"
    ],
    "VTYPE": [
     "0"
    ]
   },
   "contents": [
    "BRAIDED-WIRE",
    "CLOTH-BAG",
    "RECEPTACLE"
   ],
   "source": "<OBJECT BALLOON\n\t(IN VOLCANO-BOTTOM)\n\t(DESC \"basket\")\n\t(SYNONYM BALLOON BASKET)\n\t(ADJECTIVE WICKER)\n\t(CAPACITY 100)\n\t(SIZE 70)\n\t(VTYPE 0)\n\t(FLAGS VEHBIT OPENBIT)\n\t(DESCFCN BALLOON-F)\n\t(ACTION BALLOON-F)>",
   "referencedBy": [
    "GO",
    "GOTO",
    "BALLOON-BURN",
    "PUT-BALLOON",
    "RISE-AND-SHINE",
    "DECLINE-AND-FALL"
   ]
  },
  "BALLOON-LABEL": {
   "name": "BALLOON-LABEL",
   "file": "volcano.zil",
   "line": 262,
   "endLine": 273,
   "desc": "blue label",
   "ldesc": "There is a blue label here.",
   "fdesc": null,
   "loc": null,
   "flags": [
    "READBIT",
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "LABEL"
   ],
   "adjectives": [
    "BLUE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "1"
    ],
    "TEXT": [
     "\"FROBOZZ MAGIC BALLOON COMPANY! Hello, Aviator!|\n|\nTo land your balloon, say LAND. Otherwise, you're on your own! (No warranty\nexpressed or implied.)\""
    ]
   },
   "contents": [],
   "source": "<OBJECT BALLOON-LABEL\n\t(DESC \"blue label\")\n\t(LDESC \"There is a blue label here.\")\n\t(SYNONYM LABEL)\n\t(ADJECTIVE BLUE)\n\t(FLAGS READBIT TAKEBIT BURNBIT)\n\t(SIZE 1)\n\t(TEXT\n\"\\\"FROBOZZ MAGIC BALLOON COMPANY! Hello, Aviator!|\n|\nTo land your balloon, say LAND. Otherwise, you're on your own! (No warranty\nexpressed or implied.)\\\"\")>",
   "referencedBy": [
    "BALLOON-BURN"
   ]
  },
  "BRAIDED-WIRE": {
   "name": "BRAIDED-WIRE",
   "file": "volcano.zil",
   "line": 275,
   "endLine": 281,
   "desc": "braided wire",
   "ldesc": null,
   "fdesc": null,
   "loc": "BALLOON",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "ROPE",
    "WIRE"
   ],
   "adjectives": [
    "BRAIDED"
   ],
   "action": "BRAIDED-WIRE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BRAIDED-WIRE\n\t(IN BALLOON)\n\t(DESC \"braided wire\")\n\t(SYNONYM ROPE WIRE)\n\t(ADJECTIVE BRAIDED)\n\t(FLAGS NDESCBIT)\n\t(ACTION BRAIDED-WIRE-F)>",
   "referencedBy": [
    "BRAIDED-WIRE-F",
    "BCONTENTS"
   ]
  },
  "CLOTH-BAG": {
   "name": "CLOTH-BAG",
   "file": "volcano.zil",
   "line": 302,
   "endLine": 308,
   "desc": "cloth bag",
   "ldesc": null,
   "fdesc": null,
   "loc": "BALLOON",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BAG"
   ],
   "adjectives": [
    "CLOTH"
   ],
   "action": "BCONTENTS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CLOTH-BAG\n\t(IN BALLOON)\n\t(DESC \"cloth bag\")\n\t(SYNONYM BAG)\n\t(ADJECTIVE CLOTH)\n\t(FLAGS NDESCBIT)\n\t(ACTION BCONTENTS)>",
   "referencedBy": []
  },
  "RECEPTACLE": {
   "name": "RECEPTACLE",
   "file": "volcano.zil",
   "line": 310,
   "endLine": 317,
   "desc": "receptacle",
   "ldesc": null,
   "fdesc": null,
   "loc": "BALLOON",
   "flags": [
    "CONTBIT",
    "SEARCHBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "RECEPTACLE"
   ],
   "adjectives": [
    "METAL"
   ],
   "action": "BCONTENTS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "6"
    ]
   },
   "contents": [],
   "source": "<OBJECT RECEPTACLE\n\t(IN BALLOON)\n\t(DESC \"receptacle\")\n\t(SYNONYM RECEPTACLE)\n\t(ADJECTIVE METAL)\n\t(CAPACITY 6)\n\t(FLAGS CONTBIT SEARCHBIT NDESCBIT)\n\t(ACTION BCONTENTS)>",
   "referencedBy": [
    "V-BURN",
    "BALLOON-F",
    "I-BALLOON",
    "RISE-AND-SHINE",
    "I-BURNUP",
    "BCONTENTS"
   ]
  },
  "COIN": {
   "name": "COIN",
   "file": "volcano.zil",
   "line": 392,
   "endLine": 403,
   "desc": "priceless zorkmid",
   "ldesc": null,
   "fdesc": "On the floor is a priceless gold zorkmid (a valuable collector's item).",
   "loc": "NARROW-LEDGE",
   "flags": [
    "READBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "COIN",
    "ZORKMID",
    "GOLD",
    "TREASURE"
   ],
   "adjectives": [
    "GOLD",
    "PRICELESS"
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
     "20"
    ],
    "TEXT": [
     "This octagonal coin reads \"1000 Zorkmids\" and \"In Frobs We Trust\"."
    ]
   },
   "contents": [],
   "source": "<OBJECT COIN\n\t(IN NARROW-LEDGE)\n\t(DESC \"priceless zorkmid\")\n\t(FDESC\n\"On the floor is a priceless gold zorkmid (a valuable collector's item).\")\n\t(SYNONYM COIN ZORKMID GOLD TREASURE)\n\t(ADJECTIVE GOLD PRICELESS)\n\t(FLAGS READBIT TAKEBIT)\n\t(SIZE 10)\n\t(VALUE 20)\n\t(TEXT\n\"This octagonal coin reads \\\"1000 Zorkmids\\\" and \\\"In Frobs We Trust\\\".\")>",
   "referencedBy": []
  },
  "BLUE-BOOK": {
   "name": "BLUE-BOOK",
   "file": "volcano.zil",
   "line": 416,
   "endLine": 426,
   "desc": "blue book",
   "ldesc": null,
   "fdesc": "In one corner sits a blue book.",
   "loc": "LIBRARY",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "CONTBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "BOOK",
    "BOOKS"
   ],
   "adjectives": [
    "BLUE"
   ],
   "action": "RANDOM-BOOK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "2"
    ],
    "SIZE": [
     "10"
    ],
    "TEXT": [
     "This book is written in an unfamiliar tongue."
    ]
   },
   "contents": [],
   "source": "<OBJECT BLUE-BOOK\n\t(IN LIBRARY)\n\t(DESC \"blue book\")\n\t(FDESC \"In one corner sits a blue book.\")\n\t(SYNONYM BOOK BOOKS)\n\t(ADJECTIVE BLUE)\n\t(CAPACITY 2)\n\t(SIZE 10)\n\t(TEXT \"This book is written in an unfamiliar tongue.\")\n\t(FLAGS READBIT TAKEBIT CONTBIT BURNBIT)\n\t(ACTION RANDOM-BOOK-F)>",
   "referencedBy": [
    "RANDOM-BOOK-F"
   ]
  },
  "WHITE-BOOK": {
   "name": "WHITE-BOOK",
   "file": "volcano.zil",
   "line": 428,
   "endLine": 441,
   "desc": "white book",
   "ldesc": null,
   "fdesc": "Beside the purple book is a white one.",
   "loc": "LIBRARY",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "CONTBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "BOOK",
    "BOOKS"
   ],
   "adjectives": [
    "WHITE"
   ],
   "action": "RANDOM-BOOK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "2"
    ],
    "SIZE": [
     "5"
    ],
    "TEXT": [
     "The book details the use of the so-called \"magic wand\". Apparently, these\nwork by pointing them at the object to be ensorcelled, and then chanting the\nappropriate magic word. (Amazing how credulous these ancients were.)"
    ]
   },
   "contents": [],
   "source": "<OBJECT WHITE-BOOK\n\t(IN LIBRARY)\n\t(DESC \"white book\")\n\t(FDESC \"Beside the purple book is a white one.\")\n\t(SYNONYM BOOK BOOKS)\n\t(ADJECTIVE WHITE)\n\t(CAPACITY 2)\n\t(SIZE 5)\n\t(FLAGS READBIT TAKEBIT CONTBIT BURNBIT)\n\t(TEXT\n\"The book details the use of the so-called \\\"magic wand\\\". Apparently, these\nwork by pointing them at the object to be ensorcelled, and then chanting the\nappropriate magic word. (Amazing how credulous these ancients were.)\")\n\t(ACTION RANDOM-BOOK-F)>",
   "referencedBy": [
    "RANDOM-BOOK-F"
   ]
  },
  "PURPLE-BOOK": {
   "name": "PURPLE-BOOK",
   "file": "volcano.zil",
   "line": 450,
   "endLine": 460,
   "desc": "purple book",
   "ldesc": null,
   "fdesc": "Lying in the dust, covered with mold, is a purple book.",
   "loc": "LIBRARY",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "CONTBIT",
    "SEARCHBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "BOOK",
    "BOOKS"
   ],
   "adjectives": [
    "PURPLE"
   ],
   "action": "PURPLE-BOOK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "2"
    ],
    "SIZE": [
     "10"
    ],
    "TEXT": [
     "This book is written in an unfamiliar tongue."
    ]
   },
   "contents": [
    "STAMP"
   ],
   "source": "<OBJECT PURPLE-BOOK\n\t(IN LIBRARY)\n\t(DESC \"purple book\")\n\t(FDESC \"Lying in the dust, covered with mold, is a purple book.\")\n\t(SYNONYM BOOK BOOKS)\n\t(ADJECTIVE PURPLE)\n\t(CAPACITY 2)\n\t(SIZE 10)\n\t(FLAGS READBIT TAKEBIT CONTBIT SEARCHBIT BURNBIT)\n\t(TEXT \"This book is written in an unfamiliar tongue.\")\n\t(ACTION PURPLE-BOOK-F)>",
   "referencedBy": [
    "RANDOM-BOOK-F",
    "PURPLE-BOOK-F"
   ]
  },
  "STAMP": {
   "name": "STAMP",
   "file": "volcano.zil",
   "line": 472,
   "endLine": 481,
   "desc": "Flathead stamp",
   "ldesc": null,
   "fdesc": null,
   "loc": "PURPLE-BOOK",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "STAMP",
    "TREASURE"
   ],
   "adjectives": [
    "FLATHEAD"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "1"
    ],
    "VALUE": [
     "10"
    ],
    "TEXT": [
     "This three zorkmid stamp portrays Lord Dimwit Flathead the Excessive."
    ]
   },
   "contents": [],
   "source": "<OBJECT STAMP\n\t(IN PURPLE-BOOK)\n\t(DESC \"Flathead stamp\")\n\t(SYNONYM STAMP TREASURE)\n\t(ADJECTIVE FLATHEAD)\n\t(SIZE 1)\n\t(VALUE 10)\n\t(FLAGS READBIT TAKEBIT BURNBIT)\n\t(TEXT\n\"This three zorkmid stamp portrays Lord Dimwit Flathead the Excessive.\")>",
   "referencedBy": [
    "PURPLE-BOOK-F"
   ]
  },
  "HOOK": {
   "name": "HOOK",
   "file": "volcano.zil",
   "line": 483,
   "endLine": 487,
   "desc": "hook",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "HOOK"
   ],
   "adjectives": [
    "SMALL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HOOK\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"hook\")\n\t(SYNONYM HOOK)\n\t(ADJECTIVE SMALL)>",
   "referencedBy": [
    "BRAIDED-WIRE-F"
   ]
  },
  "SAFE": {
   "name": "SAFE",
   "file": "volcano.zil",
   "line": 533,
   "endLine": 540,
   "desc": "box",
   "ldesc": null,
   "fdesc": null,
   "loc": "DUSTY-ROOM",
   "flags": [
    "CONTBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "SAFE",
    "BOX"
   ],
   "adjectives": [
    "STEEL",
    "RUSTY"
   ],
   "action": "SAFE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "15"
    ]
   },
   "contents": [
    "CARD",
    "CROWN"
   ],
   "source": "<OBJECT SAFE\n\t(IN DUSTY-ROOM)\n\t(DESC \"box\")\n\t(SYNONYM SAFE BOX)\n\t(ADJECTIVE STEEL RUSTY)\n\t(FLAGS CONTBIT NDESCBIT)\n\t(CAPACITY 15)\n\t(ACTION SAFE-F)>",
   "referencedBy": [
    "DUSTY-ROOM-F",
    "SAFE-F",
    "I-FUSE"
   ]
  },
  "SAFE-HOLE": {
   "name": "SAFE-HOLE",
   "file": "volcano.zil",
   "line": 554,
   "endLine": 560,
   "desc": "hole",
   "ldesc": null,
   "fdesc": null,
   "loc": "DUSTY-ROOM",
   "flags": [
    "OPENBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "SLOT",
    "HOLE"
   ],
   "adjectives": [],
   "action": "SAFE-HOLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT SAFE-HOLE\n\t(IN DUSTY-ROOM)\n\t(DESC \"hole\")\n\t(SYNONYM SLOT HOLE)\n\t(CAPACITY 10)\n\t(FLAGS OPENBIT NDESCBIT)\n\t(ACTION SAFE-HOLE-F)>",
   "referencedBy": [
    "I-FUSE"
   ]
  },
  "CARD": {
   "name": "CARD",
   "file": "volcano.zil",
   "line": 567,
   "endLine": 576,
   "desc": "card",
   "ldesc": "There is a card with writing on it here.",
   "fdesc": null,
   "loc": "SAFE",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "CARD",
    "NOTE"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "1"
    ],
    "TEXT": [
     "Warning: This room was constructed near weak rock strata. Detonation\nof explosives here is strictly prohibited!"
    ]
   },
   "contents": [],
   "source": "<OBJECT CARD\n\t(IN SAFE)\n\t(DESC \"card\")\n\t(LDESC \"There is a card with writing on it here.\")\n\t(SYNONYM CARD NOTE)\n\t(SIZE 1)\n\t(FLAGS READBIT TAKEBIT BURNBIT)\n\t(TEXT\n\"Warning: This room was constructed near weak rock strata. Detonation\nof explosives here is strictly prohibited!\")>",
   "referencedBy": []
  },
  "CROWN": {
   "name": "CROWN",
   "file": "volcano.zil",
   "line": 578,
   "endLine": 588,
   "desc": "gaudy crown",
   "ldesc": "Lord Dimwit's crown is here.",
   "fdesc": "The excessively gaudy crown of Lord Dimwit Flathead sits in the safe.",
   "loc": "SAFE",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "CROWN",
    "TREASURE"
   ],
   "adjectives": [
    "GAUDY"
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
     "20"
    ]
   },
   "contents": [],
   "source": "<OBJECT CROWN\n\t(IN SAFE)\n\t(DESC \"gaudy crown\")\n\t(FDESC\n\"The excessively gaudy crown of Lord Dimwit Flathead sits in the safe.\")\n\t(LDESC \"Lord Dimwit's crown is here.\")\n\t(SYNONYM CROWN TREASURE)\n\t(ADJECTIVE GAUDY)\n\t(SIZE 10)\n\t(VALUE 20)\n\t(FLAGS TAKEBIT)>",
   "referencedBy": []
  },
  "BRICK": {
   "name": "BRICK",
   "file": "volcano.zil",
   "line": 592,
   "endLine": 601,
   "desc": "brick",
   "ldesc": "There is a square brick here which feels like clay.",
   "fdesc": null,
   "loc": "STONE-BRIDGE",
   "flags": [
    "TAKEBIT",
    "BURNBIT",
    "OPENBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "BRICK"
   ],
   "adjectives": [
    "SQUARE",
    "CLAY"
   ],
   "action": "BRICK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "2"
    ],
    "SIZE": [
     "9"
    ]
   },
   "contents": [],
   "source": "<OBJECT BRICK\n\t(IN STONE-BRIDGE)\n\t(DESC \"brick\")\n\t(LDESC \"There is a square brick here which feels like clay.\")\n\t(SYNONYM BRICK)\n\t(ADJECTIVE SQUARE CLAY)\n\t(FLAGS TAKEBIT BURNBIT OPENBIT SEARCHBIT)\n\t(CAPACITY 2)\n\t(SIZE 9)\n\t(ACTION BRICK-F)>",
   "referencedBy": [
    "DRAGON-F",
    "BRICK-F",
    "I-FUSE",
    "BOMB?"
   ]
  },
  "FUSE": {
   "name": "FUSE",
   "file": "volcano.zil",
   "line": 608,
   "endLine": 616,
   "desc": "black string",
   "ldesc": "There is a coil of black, braided string here.",
   "fdesc": null,
   "loc": "RIDDLE-ROOM",
   "flags": [
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "FUSE",
    "STRING",
    "COIL"
   ],
   "adjectives": [
    "BLACK",
    "THIN"
   ],
   "action": "FUSE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT FUSE\n\t(IN RIDDLE-ROOM)\n\t(DESC \"black string\")\n\t(LDESC \"There is a coil of black, braided string here.\")\n\t(SYNONYM FUSE STRING COIL)\n\t(ADJECTIVE BLACK THIN)\n\t(SIZE 1)\n\t(FLAGS TAKEBIT BURNBIT)\n\t(ACTION FUSE-F)>",
   "referencedBy": [
    "I-FUSE",
    "BOMB?"
   ]
  },
  "EXPLOSION": {
   "name": "EXPLOSION",
   "file": "volcano.zil",
   "line": 665,
   "endLine": 670,
   "desc": "debris from an explosion",
   "ldesc": "The room is cluttered with debris from an explosion. The walls seem ready\nto collapse.",
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [
    "KREBF"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT EXPLOSION\n\t(DESC \"debris from an explosion\")\n\t(LDESC\n\"The room is cluttered with debris from an explosion. The walls seem ready\nto collapse.\")\n\t(SYNONYM KREBF)>",
   "referencedBy": [
    "I-FUSE"
   ]
  },
  "WIZARD": {
   "name": "WIZARD",
   "file": "wizard.zil",
   "line": 5,
   "endLine": 11,
   "desc": "Wizard of Frobozz",
   "ldesc": "The Wizard of Frobozz is here, eyeing you warily.",
   "fdesc": null,
   "loc": null,
   "flags": [
    "ACTORBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "WIZARD",
    "MAN"
   ],
   "adjectives": [
    "LITTLE",
    "FROBOZZ",
    "OLD"
   ],
   "action": "WIZARD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "WAND"
   ],
   "source": "<OBJECT WIZARD\n\t(DESC \"Wizard of Frobozz\")\n\t(LDESC \"The Wizard of Frobozz is here, eyeing you warily.\")\n\t(SYNONYM WIZARD MAN)\n\t(ADJECTIVE LITTLE FROBOZZ OLD)\n\t(FLAGS ACTORBIT CONTBIT OPENBIT)\n\t(ACTION WIZARD-F)>",
   "referencedBy": [
    "PRINCESS-F",
    "WIZARD-F",
    "I-WIZARD",
    "WAND-F",
    "DEMON-F"
   ]
  },
  "WAND": {
   "name": "WAND",
   "file": "wizard.zil",
   "line": 342,
   "endLine": 349,
   "desc": "magic wand",
   "ldesc": null,
   "fdesc": null,
   "loc": "WIZARD",
   "flags": [
    "NDESCBIT",
    "TAKEBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "WAND"
   ],
   "adjectives": [
    "MAGIC"
   ],
   "action": "WAND-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "30"
    ]
   },
   "contents": [],
   "source": "<OBJECT WAND\n\t(IN WIZARD)\n\t(DESC \"magic wand\")\n\t(SYNONYM WAND)\n\t(ADJECTIVE MAGIC)\n\t(VALUE 30)\n\t(FLAGS NDESCBIT TAKEBIT TRYTAKEBIT)\n\t(ACTION WAND-F)>",
   "referencedBy": [
    "CERBERUS-F",
    "ZORK3-F",
    "WIZARD-F",
    "WAND-F",
    "DEMON-F"
   ]
  },
  "WIZ-DOOR": {
   "name": "WIZ-DOOR",
   "file": "wizard.zil",
   "line": 440,
   "endLine": 446,
   "desc": "door",
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
    "BATTERED"
   ],
   "action": "WIZ-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WIZ-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE BATTERED)\n\t(FLAGS DOORBIT CONTBIT)\n\t(ACTION WIZ-DOOR-F)>",
   "referencedBy": [
    "PLACE-MAT-F",
    "GUARDED-ROOM-F",
    "TROPHY-ROOM-F"
   ]
  },
  "DOOR-KEEPER": {
   "name": "DOOR-KEEPER",
   "file": "wizard.zil",
   "line": 478,
   "endLine": 484,
   "desc": "lizard",
   "ldesc": null,
   "fdesc": null,
   "loc": "GUARDED-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "GUARDIAN",
    "LIZARD",
    "HEAD"
   ],
   "adjectives": [
    "NASTY"
   ],
   "action": "DOOR-KEEPER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DOOR-KEEPER\n\t(IN GUARDED-ROOM)\n\t(DESC \"lizard\")\n\t(SYNONYM GUARDIAN LIZARD HEAD)\n\t(ADJECTIVE NASTY)\n\t(FLAGS NDESCBIT)\n\t(ACTION DOOR-KEEPER-F)>",
   "referencedBy": [
    "PRE-TAKE",
    "DOOR-KEEPER-F"
   ]
  },
  "DEGREE": {
   "name": "DEGREE",
   "file": "wizard.zil",
   "line": 547,
   "endLine": 553,
   "desc": "degree",
   "ldesc": null,
   "fdesc": null,
   "loc": "TROPHY-ROOM",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "DEGREE",
    "DIPLOMA"
   ],
   "adjectives": [],
   "action": "TROPHY-PSEUDO",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The text is in an obscure tongue."
    ]
   },
   "contents": [],
   "source": "<OBJECT DEGREE\n\t(IN TROPHY-ROOM)\n\t(DESC \"degree\")\n\t(SYNONYM DEGREE DIPLOMA)\n\t(FLAGS NDESCBIT TRYTAKEBIT READBIT)\n\t(TEXT \"The text is in an obscure tongue.\")\n\t(ACTION TROPHY-PSEUDO)>",
   "referencedBy": []
  },
  "WANDS": {
   "name": "WANDS",
   "file": "wizard.zil",
   "line": 555,
   "endLine": 561,
   "desc": "set of used wands",
   "ldesc": null,
   "fdesc": null,
   "loc": "TROPHY-ROOM",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "WANDS",
    "WAND",
    "RACK",
    "SET"
   ],
   "adjectives": [
    "WORN",
    "USED"
   ],
   "action": "TROPHY-PSEUDO",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WANDS\n\t(IN TROPHY-ROOM)\n\t(DESC \"set of used wands\")\n\t(SYNONYM WANDS WAND RACK SET)\n        (ADJECTIVE WORN USED)\n\t(FLAGS NDESCBIT TRYTAKEBIT)\n\t(ACTION TROPHY-PSEUDO)>",
   "referencedBy": []
  },
  "WORKBENCH": {
   "name": "WORKBENCH",
   "file": "wizard.zil",
   "line": 575,
   "endLine": 581,
   "desc": "Wizard's workbench",
   "ldesc": null,
   "fdesc": null,
   "loc": "WIZARDS-WORKSHOP",
   "flags": [
    "NDESCBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "WORKBENCH",
    "BENCH",
    "TABLE"
   ],
   "adjectives": [
    "WORK",
    "WIZARD"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "200"
    ]
   },
   "contents": [
    "STAND-1",
    "STAND-2",
    "STAND-3"
   ],
   "source": "<OBJECT WORKBENCH\n\t(IN WIZARDS-WORKSHOP)\n\t(DESC \"Wizard's workbench\")\n\t(SYNONYM WORKBENCH BENCH TABLE)\n\t(ADJECTIVE WORK WIZARD)\n\t(CAPACITY 200)\n\t(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT)>",
   "referencedBy": [
    "STAND-F"
   ]
  },
  "STAND-1": {
   "name": "STAND-1",
   "file": "wizard.zil",
   "line": 583,
   "endLine": 590,
   "desc": "ruby stand",
   "ldesc": null,
   "fdesc": null,
   "loc": "WORKBENCH",
   "flags": [
    "NDESCBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "STAND",
    "STANDS"
   ],
   "adjectives": [
    "CRYSTAL",
    "RUBY"
   ],
   "action": "STAND-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT STAND-1\n\t(IN WORKBENCH)\n\t(DESC \"ruby stand\")\n\t(SYNONYM STAND STANDS)\n\t(ADJECTIVE CRYSTAL RUBY)\n\t(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT)\n\t(CAPACITY 10)\n\t(ACTION STAND-F)>",
   "referencedBy": [
    "STAND-F"
   ]
  },
  "STAND-2": {
   "name": "STAND-2",
   "file": "wizard.zil",
   "line": 592,
   "endLine": 599,
   "desc": "sapphire stand",
   "ldesc": null,
   "fdesc": null,
   "loc": "WORKBENCH",
   "flags": [
    "NDESCBIT",
    "SURFACEBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "STAND",
    "STANDS"
   ],
   "adjectives": [
    "CRYSTAL",
    "SAPPHIRE"
   ],
   "action": "STAND-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT STAND-2\n\t(IN WORKBENCH)\n\t(DESC \"sapphire stand\")\n\t(SYNONYM STAND STANDS)\n\t(ADJECTIVE CRYSTAL SAPPHIRE)\n\t(FLAGS NDESCBIT SURFACEBIT OPENBIT CONTBIT)\n\t(CAPACITY 10)\n\t(ACTION STAND-F)>",
   "referencedBy": [
    "STAND-F"
   ]
  },
  "STAND-3": {
   "name": "STAND-3",
   "file": "wizard.zil",
   "line": 601,
   "endLine": 608,
   "desc": "diamond stand",
   "ldesc": null,
   "fdesc": null,
   "loc": "WORKBENCH",
   "flags": [
    "NDESCBIT",
    "SURFACEBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "STAND",
    "STANDS"
   ],
   "adjectives": [
    "DIAMOND",
    "CRYSTAL"
   ],
   "action": "STAND-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT STAND-3\n\t(IN WORKBENCH)\n\t(DESC \"diamond stand\")\n\t(SYNONYM STAND STANDS)\n\t(ADJECTIVE DIAMOND CRYSTAL)\n\t(FLAGS NDESCBIT SURFACEBIT OPENBIT CONTBIT)\n\t(CAPACITY 10)\n\t(ACTION STAND-F)>",
   "referencedBy": [
    "STAND-F"
   ]
  },
  "STAND-4": {
   "name": "STAND-4",
   "file": "wizard.zil",
   "line": 610,
   "endLine": 617,
   "desc": "black obsidian stand",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "STAND",
    "STANDS"
   ],
   "adjectives": [
    "OBSIDIAN",
    "BLACK",
    "CRYSTAL",
    "STRANGE"
   ],
   "action": "STAND-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "5"
    ],
    "CAPACITY": [
     "10"
    ]
   },
   "contents": [
    "PALANTIR-4"
   ],
   "source": "<OBJECT STAND-4\n\t(DESC \"black obsidian stand\")\n\t(SYNONYM STAND STANDS)\n\t(ADJECTIVE OBSIDIAN BLACK CRYSTAL STRANGE)\n\t(FLAGS SURFACEBIT CONTBIT OPENBIT)\n\t(SIZE 5)\n\t(CAPACITY 10)\n\t(ACTION STAND-F)>",
   "referencedBy": [
    "STAND-F"
   ]
  },
  "PALANTIR-4": {
   "name": "PALANTIR-4",
   "file": "wizard.zil",
   "line": 639,
   "endLine": 648,
   "desc": "black crystal sphere",
   "ldesc": "There is a strange black sphere here.",
   "fdesc": null,
   "loc": "STAND-4",
   "flags": [
    "TAKEBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "SPHERE"
   ],
   "adjectives": [
    "CRYSTAL",
    "STRANGE",
    "BLACK"
   ],
   "action": "SPHERE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "30"
    ],
    "SIZE": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT PALANTIR-4\n\t(IN STAND-4)\n\t(DESC \"black crystal sphere\")\n\t(LDESC \"There is a strange black sphere here.\")\n\t(SYNONYM SPHERE)\n\t(ADJECTIVE CRYSTAL STRANGE BLACK)\n\t(FLAGS TAKEBIT TRANSBIT)\n\t(VALUE 30)\n\t(SIZE 10)\n\t(ACTION SPHERE-F)>",
   "referencedBy": [
    "I-WIZARD",
    "PENTAGRAM-F",
    "SPHERE-F",
    "PALANTIR-LOOK"
   ]
  },
  "PENTAGRAM": {
   "name": "PENTAGRAM",
   "file": "wizard.zil",
   "line": 660,
   "endLine": 667,
   "desc": "pentagram",
   "ldesc": null,
   "fdesc": null,
   "loc": "PENTAGRAM-ROOM",
   "flags": [
    "NDESCBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "PENTAGRAM",
    "STAR",
    "CIRCLE"
   ],
   "adjectives": [
    "GREAT",
    "BLACK"
   ],
   "action": "PENTAGRAM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "200"
    ]
   },
   "contents": [],
   "source": "<OBJECT PENTAGRAM\n\t(IN PENTAGRAM-ROOM)\n\t(DESC \"pentagram\")\n\t(SYNONYM PENTAGRAM STAR CIRCLE)\n\t(ADJECTIVE GREAT BLACK)\n\t(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT)\n\t(CAPACITY 200)\n\t(ACTION PENTAGRAM-F)>",
   "referencedBy": []
  },
  "DEMON": {
   "name": "DEMON",
   "file": "wizard.zil",
   "line": 685,
   "endLine": 690,
   "desc": "demon",
   "ldesc": "There is a demon floating in midair here.",
   "fdesc": null,
   "loc": null,
   "flags": [
    "ACTORBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "DEVIL",
    "DEMON",
    "GENIE"
   ],
   "adjectives": [],
   "action": "DEMON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DEMON\n\t(SYNONYM DEVIL DEMON GENIE)\n\t(DESC \"demon\")\n\t(LDESC \"There is a demon floating in midair here.\")\n\t(FLAGS ACTORBIT INVISIBLE)\n\t(ACTION DEMON-F)>",
   "referencedBy": [
    "INT",
    "WIZARD-F",
    "I-WIZARD",
    "PENTAGRAM-F",
    "DEMON-F",
    "DEMON-LEAVES",
    "DEAD-PALANTIR-F"
   ]
  },
  "AQUARIUM": {
   "name": "AQUARIUM",
   "file": "wizard.zil",
   "line": 867,
   "endLine": 875,
   "desc": "aquarium",
   "ldesc": "Filling the northern half of the room is a huge aquarium.",
   "fdesc": null,
   "loc": "AQUARIUM-ROOM",
   "flags": [
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "AQUARIUM",
    "GLASS"
   ],
   "adjectives": [
    "HUGE"
   ],
   "action": "AQUARIUM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "200"
    ]
   },
   "contents": [
    "SERPENT"
   ],
   "source": "<OBJECT AQUARIUM\n\t(IN AQUARIUM-ROOM)\n\t(DESC \"aquarium\")\n\t(LDESC \"Filling the northern half of the room is a huge aquarium.\")\n\t(SYNONYM AQUARIUM GLASS)\n\t(ADJECTIVE HUGE)\n\t(FLAGS OPENBIT CONTBIT)\n\t(CAPACITY 200)\n\t(ACTION AQUARIUM-F)>",
   "referencedBy": [
    "AQUARIUM-F",
    "MURKY-ROOM-F",
    "DEAD-PALANTIR-F"
   ]
  },
  "SERPENT": {
   "name": "SERPENT",
   "file": "wizard.zil",
   "line": 923,
   "endLine": 930,
   "desc": "baby sea serpent",
   "ldesc": "There is a baby sea serpent swimming in the aquarium.",
   "fdesc": null,
   "loc": "AQUARIUM",
   "flags": [
    "ACTORBIT"
   ],
   "synonyms": [
    "SERPENT",
    "SNAKE"
   ],
   "adjectives": [
    "BABY",
    "SEA"
   ],
   "action": "SERPENT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SERPENT\n\t(IN AQUARIUM)\n\t(DESC \"baby sea serpent\")\n\t(LDESC \"There is a baby sea serpent swimming in the aquarium.\")\n\t(SYNONYM SERPENT SNAKE)\n\t(ADJECTIVE BABY SEA)\n\t(FLAGS ACTORBIT)\n\t(ACTION SERPENT-F)>",
   "referencedBy": [
    "AQUARIUM-F",
    "SERPENT-F",
    "MURKY-ROOM-F",
    "DEAD-PALANTIR-F"
   ]
  },
  "DEAD-SERPENT": {
   "name": "DEAD-SERPENT",
   "file": "wizard.zil",
   "line": 946,
   "endLine": 952,
   "desc": "dead sea serpent",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "SERPENT",
    "SNAKE"
   ],
   "adjectives": [
    "DEAD",
    "BABY",
    "SEA"
   ],
   "action": "DEAD-SERPENT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "400"
    ]
   },
   "contents": [],
   "source": "<OBJECT DEAD-SERPENT\n\t(DESC \"dead sea serpent\")\n\t(SYNONYM SERPENT SNAKE)\n\t(ADJECTIVE DEAD BABY SEA)\n\t(FLAGS TAKEBIT)\n\t(SIZE 400)\n\t(ACTION DEAD-SERPENT-F)>",
   "referencedBy": [
    "AQUARIUM-F"
   ]
  },
  "PALANTIR-1": {
   "name": "PALANTIR-1",
   "file": "wizard.zil",
   "line": 1007,
   "endLine": 1015,
   "desc": "red crystal sphere",
   "ldesc": null,
   "fdesc": null,
   "loc": "DINGY-CLOSET",
   "flags": [
    "TAKEBIT",
    "TRANSBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "SPHERE"
   ],
   "adjectives": [
    "CRYSTAL",
    "RED"
   ],
   "action": "SPHERE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "10"
    ],
    "VALUE": [
     "20"
    ]
   },
   "contents": [],
   "source": "<OBJECT PALANTIR-1\n\t(IN DINGY-CLOSET)\n\t(DESC \"red crystal sphere\")\n\t(SYNONYM SPHERE)\n\t(ADJECTIVE CRYSTAL RED)\n\t(SIZE 10)\n\t(VALUE 20)\n\t(FLAGS TAKEBIT TRANSBIT TRYTAKEBIT)\n\t(ACTION SPHERE-F)>",
   "referencedBy": [
    "ROBOT-F",
    "I-CAGE-DEATH",
    "I-WIZARD",
    "DOOR-KEEPER-F",
    "STAND-F",
    "SPHERE-F",
    "DEAD-PALANTIR-F"
   ]
  },
  "PALANTIR-2": {
   "name": "PALANTIR-2",
   "file": "wizard.zil",
   "line": 1017,
   "endLine": 1025,
   "desc": "blue crystal sphere",
   "ldesc": null,
   "fdesc": "On the table sits a blue crystal sphere.",
   "loc": "DREARY-ROOM",
   "flags": [
    "TAKEBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "SPHERE"
   ],
   "adjectives": [
    "CRYSTAL",
    "BLUE"
   ],
   "action": "SPHERE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "20"
    ]
   },
   "contents": [],
   "source": "<OBJECT PALANTIR-2\n\t(IN DREARY-ROOM)\n\t(DESC \"blue crystal sphere\")\n\t(FDESC \"On the table sits a blue crystal sphere.\")\n\t(SYNONYM SPHERE)\n\t(ADJECTIVE CRYSTAL BLUE)\n\t(VALUE 20)\n\t(FLAGS TAKEBIT TRANSBIT)\n\t(ACTION SPHERE-F)>",
   "referencedBy": [
    "I-WIZARD",
    "DOOR-KEEPER-F",
    "STAND-F",
    "SPHERE-F",
    "DEAD-PALANTIR-F"
   ]
  },
  "PALANTIR-3": {
   "name": "PALANTIR-3",
   "file": "wizard.zil",
   "line": 1027,
   "endLine": 1035,
   "desc": "clear crystal sphere",
   "ldesc": null,
   "fdesc": "There is a clear crystal sphere lying in the sand.",
   "loc": "MURKY-ROOM",
   "flags": [
    "TAKEBIT",
    "NDESCBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "SPHERE"
   ],
   "adjectives": [
    "CRYSTAL",
    "WHITE",
    "CLEAR"
   ],
   "action": "SPHERE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "20"
    ]
   },
   "contents": [],
   "source": "<OBJECT PALANTIR-3\n\t(IN MURKY-ROOM)\n\t(DESC \"clear crystal sphere\")\n\t(FDESC \"There is a clear crystal sphere lying in the sand.\")\n\t(SYNONYM SPHERE)\n\t(ADJECTIVE CRYSTAL WHITE CLEAR)\n\t(FLAGS TAKEBIT NDESCBIT TRANSBIT)\n\t(VALUE 20)\n\t(ACTION SPHERE-F)>",
   "referencedBy": [
    "I-WIZARD",
    "DOOR-KEEPER-F",
    "STAND-F",
    "AQUARIUM-F",
    "SPHERE-F",
    "DEAD-PALANTIR-F"
   ]
  },
  "GLOBAL-PALANTIR": {
   "name": "GLOBAL-PALANTIR",
   "file": "wizard.zil",
   "line": 1208,
   "endLine": 1214,
   "desc": "sphere",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "SPHERE"
   ],
   "adjectives": [
    "RED",
    "BLUE",
    "WHITE",
    "CRYSTAL"
   ],
   "action": "GLOBAL-PALANTIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-PALANTIR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"sphere\")\n\t(SYNONYM SPHERE)\n\t(ADJECTIVE RED BLUE WHITE CRYSTAL)\n\t(FLAGS NDESCBIT)\n\t(ACTION GLOBAL-PALANTIR-F)>",
   "referencedBy": []
  }
 },
 "routines": {
  "RIDDLE-ROOM-F": {
   "name": "RIDDLE-ROOM-F",
   "file": "alice.zil",
   "line": 14,
   "endLine": 39,
   "source": "<ROUTINE RIDDLE-ROOM-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This bare room has an exit in the northwest corner. To the east is a great \">\n\t\t<COND (<FSET? ,RIDDLE-DOOR ,OPENBIT>\n\t\t       <TELL \"open\">)\n\t\t      (T\n\t\t       <TELL \"closed\">)>\n\t\t<TELL\n\" door of stone. Above it is written: \\\"No one shall pass without solving\nthis riddle:\" CR CR ,RIDDLE-TEXT>)\n\t       (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<VERB? SAY>\n\t\t       <COND (<FSET? ,RIDDLE-DOOR ,OPENBIT>\n\t\t\t      <RFALSE>)\n\t\t\t     (<OR <EQUAL? <GET ,P-LEXV ,P-CONT> ,W?WELL>\n\t\t\t\t  <EQUAL? <GET ,P-LEXV <+ ,P-CONT 2>> ,W?WELL>>\n\t\t\t      <SETG SCORE <+ ,SCORE 5>>\n\t\t\t      <FSET ,RIDDLE-DOOR ,OPENBIT>\n\t\t\t      <TELL\n\"With a deafening clap of thunder, the door opens.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"A hollow laugh comes from the door.\" CR>)>\n\t\t      <SETG P-CONT <>>\n\t\t      <SETG QUOTE-FLAG <>>\n\t\t      <RTRUE>)>)>>"
  },
  "RIDDLE-PSEUDO": {
   "name": "RIDDLE-PSEUDO",
   "file": "alice.zil",
   "line": 41,
   "endLine": 43,
   "source": "<ROUTINE RIDDLE-PSEUDO ()\n\t <COND (<VERB? EXAMINE READ>\n\t\t<TELL ,RIDDLE-TEXT>)>>"
  },
  "RIDDLE-DOOR-F": {
   "name": "RIDDLE-DOOR-F",
   "file": "alice.zil",
   "line": 53,
   "endLine": 58,
   "source": "<ROUTINE RIDDLE-DOOR-F ()\n\t <COND (<OR <AND <VERB? OPEN>\n\t\t\t <NOT <FSET? ,RIDDLE-DOOR ,OPENBIT>>>\n\t\t    <AND <VERB? CLOSE>\n\t\t\t <FSET? ,RIDDLE-DOOR ,OPENBIT>>>\n\t\t<TELL \"It won't budge.\" CR>)>>"
  },
  "BUCKET-CONT": {
   "name": "BUCKET-CONT",
   "file": "alice.zil",
   "line": 108,
   "endLine": 111,
   "source": "<ROUTINE BUCKET-CONT ()\n\t <COND (<AND <VERB? TAKE>\n\t\t     <NOT <IN? ,WINNER ,BUCKET>>>\n\t        <TELL \"You must get in the bucket to reach it.\" CR>)>>"
  },
  "BUCKET-F": {
   "name": "BUCKET-F",
   "file": "alice.zil",
   "line": 113,
   "endLine": 149,
   "source": "<ROUTINE BUCKET-F (\"OPTIONAL\" (RARG ,M-BEG))\n\t<COND (<EQUAL? .RARG ,M-BEG>\n\t       <COND (<AND <VERB? BURN>\n\t\t\t   <EQUAL? ,PRSO ,BUCKET>>\n\t\t      <TELL \"The bucket appears to be fireproof.\" CR>)\n\t\t     (<AND <VERB? DROP PUT>\n\t\t\t   <EQUAL? ,PRSO ,WATER>\n\t\t\t   <EQUAL? ,PRSI ,BUCKET>\n\t\t\t   <IN? ,BUCKET ,CIRCULAR-ROOM>\n\t\t\t   <NOT <IN? ,WINNER ,BUCKET>>>\n\t\t      <MOVE ,BUCKET ,TOP-OF-WELL>\n\t\t      <MOVE ,WATER ,BUCKET>\n\t\t      <SETG BUCKET-TOP-FLAG T>\n\t\t      <ENABLE <QUEUE I-BUCKET 100>>\n\t\t      <TELL \"The bucket swiftly rises up, and is gone.\" CR>)\n\t\t     (<VERB? KICK>\n\t\t      <JIGS-UP \"If you insist.\">)>)\n\t      (<EQUAL? .RARG ,M-END>\n\t       <COND (<AND <IN? ,WATER ,BUCKET>\n\t\t\t   <NOT ,BUCKET-TOP-FLAG>>\n\t\t      <SETG BUCKET-TOP-FLAG T>\n\t\t      <SETG EVAPORATED <>>\n\t\t      <PASS-THE-BUCKET ,TOP-OF-WELL>\n\t\t      <ENABLE <QUEUE I-BUCKET 100>>\n\t\t      <TELL \"The bucket rises and\" ,STOPS>)\n\t\t     (<AND ,BUCKET-TOP-FLAG\n\t\t\t   <NOT <IN? ,WATER ,BUCKET>>>\n\t\t      <COND (,EVAPORATED\n\t\t\t     <TELL\n\"The last of the water evaporates, and the bucket descends.\" CR CR>)\n\t\t\t    (T\n\t\t\t     <TELL \"The bucket descends and\" ,STOPS>)>\n\t\t      <SETG BUCKET-TOP-FLAG <>>\n\t\t      <PASS-THE-BUCKET ,CIRCULAR-ROOM>)>)\n\t      (<VERB? CLIMB-ON>\n\t       <PERFORM ,V?ENTER ,PRSO>\n\t       <RTRUE>)>>"
  },
  "PASS-THE-BUCKET": {
   "name": "PASS-THE-BUCKET",
   "file": "alice.zil",
   "line": 151,
   "endLine": 154,
   "source": "<ROUTINE PASS-THE-BUCKET (R)\n\t <MOVE ,BUCKET .R>\n\t <COND (<IN? ,WINNER ,BUCKET>\n\t\t<GOTO .R>)>>"
  },
  "I-BUCKET": {
   "name": "I-BUCKET",
   "file": "alice.zil",
   "line": 160,
   "endLine": 164,
   "source": "<ROUTINE I-BUCKET ()\n\t <COND (<IN? ,WATER ,BUCKET>\n\t\t<SETG EVAPORATED T>\n\t\t<REMOVE ,WATER>)>\n\t <RFALSE>>"
  },
  "WELL-F": {
   "name": "WELL-F",
   "file": "alice.zil",
   "line": 174,
   "endLine": 180,
   "source": "<ROUTINE WELL-F ()\n    \t<COND (<AND <VERB? THROW PUT DROP>\n\t\t    <FSET? ,PRSO ,TAKEBIT>>\n\t       <MOVE ,PRSO ,CIRCULAR-ROOM>\n\t       <TELL \"The \" D ,PRSO \" is now at the bottom of the well.\" CR>)\n\t      (<VERB? CLIMB CLIMB-DOWN>\n\t       <TELL \"You can't climb the well.\" CR>)>>"
  },
  "CRACK-PSEUDO": {
   "name": "CRACK-PSEUDO",
   "file": "alice.zil",
   "line": 197,
   "endLine": 199,
   "source": "<ROUTINE CRACK-PSEUDO ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"It's a small, uninteresting crack.\" CR>)>>"
  },
  "ROBOT-F": {
   "name": "ROBOT-F",
   "file": "alice.zil",
   "line": 222,
   "endLine": 272,
   "source": "<ROUTINE ROBOT-F (\"OPTIONAL\" (RARG ,M-OBJECT)) ;\"RARG necesary?\"\n\t<COND (<EQUAL? ,WINNER ,ROBOT>\n\t       <COND (<VERB? SGIVE>\n\t\t      <RFALSE>)\n\t\t     (<VERB? FOLLOW>\n\t\t      <TELL\n\"\\\"I'm too primitive. I can walk in any direction you order, though.\\\"\" CR>)\n\t\t     (<AND <VERB? RAISE TAKE MOVE>\n\t\t\t   <EQUAL? ,PRSO ,CAGE-OBJECT>>\n\t\t      <TELL \"The robots pulverizes the cage to dust.\" CR CR>\n\t\t      <DISABLE <INT I-CAGE-DEATH>>\n\t\t      <SETG WINNER ,ADVENTURER>\n\t\t      <FCLEAR ,ROBOT ,NDESCBIT>\n\t\t      <FSET ,PALANTIR-1 ,TAKEBIT>\n\t\t      <MOVE ,ROBOT ,DINGY-CLOSET>\n\t\t      <SETG CAGE-SOLVE-FLAG T>\n\t\t      <GOTO ,DINGY-CLOSET>)\n\t\t     (<VERB? DROP PUT THROW>\n\t\t      <COND (<NOT <ACCESSIBLE? ,ROBOT>>\n\t\t\t     <RFALSE>)\n\t\t\t    (T\n\t\t\t     <TELL ,B-W-C>\n\t\t\t     <COND (<IN? ,PRSO ,ROBOT>\n\t\t\t     \t    <TELL \"\\\"\" CR>\n\t\t\t\t    <RFALSE>)\n\t\t\t\t   (T\n\t\t\t            <TELL \" I don't have that!\\\"\" CR>)>)>)\n\t\t     (<OR <VERB? WALK>\n\t\t\t  <AND <VERB? TAKE PUSH>\n\t\t\t       <NOT <FSET? ,PRSO ,ACTORBIT>>>>\n\t\t      <COND (<NOT <ACCESSIBLE? ,ROBOT>>\n\t\t\t     <RFALSE>)\n\t\t\t    (T\n\t\t\t     <TELL ,B-W-C \"\\\"\" CR>)>\n\t\t      <RFALSE>)\n\t\t     (T\n\t\t      <COND (<ACCESSIBLE? ,ROBOT>\n\t\t\t     <TELL\n\"\\\"My programming is insufficient for that task.\\\"\" CR>)>\n\t\t      <RTRUE>)>)\n\t      (<VERB? OPEN LOOK-INSIDE CLOSE>\n\t       <TELL \"The robot has no access panel.\" CR>)\n\t      (<AND <VERB? GIVE>\n\t\t    <EQUAL? ,PRSI ,ROBOT>>\n\t       <MOVE ,PRSO ,ROBOT>\n\t       <TELL \"The robot accepts the \" D ,PRSO ,PERIOD-CR>)\n\t      (<VERB? THROW MUNG>\n\t       <TELL\n\"The robot (being of shoddy construction) disintegrates before your eyes.\" CR>\n\t       <REMOVE <COND (<VERB? THROW> ,PRSI)\n\t\t\t     (T ,PRSO)>>)>>"
  },
  "TRIANGULAR-BUTTON-F": {
   "name": "TRIANGULAR-BUTTON-F",
   "file": "alice.zil",
   "line": 308,
   "endLine": 319,
   "source": "<ROUTINE TRIANGULAR-BUTTON-F ()\n\t<COND (<VERB? PUSH>\n\t       <COND (<EQUAL? ,WINNER ,ADVENTURER>\n\t\t      <JIGS-UP \"You are instantly electrocuted.\">)\n\t\t     (T\n\t\t      <SETG CAROUSEL-ON <NOT ,CAROUSEL-ON>>\n\t\t      <COND (<FSET? ,VIOLIN ,INVISIBLE>\n\t\t\t     <FCLEAR ,VIOLIN ,INVISIBLE>\n\t\t\t     <FCLEAR ,CAROUSEL-ROOM ,TOUCHBIT>\n\t\t\t     <TELL \"You hear a distant thump.\" CR>)\n\t\t\t    (T\n\t\t\t     <TELL \"Click.\" CR>)>)>)>>"
  },
  "CAGE-F": {
   "name": "CAGE-F",
   "file": "alice.zil",
   "line": 347,
   "endLine": 349,
   "source": "<ROUTINE CAGE-F (RARG)\n\t <COND (,CAGE-SOLVE-FLAG\n\t\t<SETG HERE ,DINGY-CLOSET>)>>"
  },
  "I-CAGE-DEATH": {
   "name": "I-CAGE-DEATH",
   "file": "alice.zil",
   "line": 351,
   "endLine": 354,
   "source": "<ROUTINE I-CAGE-DEATH ()\n\t <COND (<EQUAL? ,HERE ,DINGY-CLOSET ,CAGE>\n\t\t<FSET ,PALANTIR-1 ,INVISIBLE>\n\t\t<JIGS-UP \"The poison gas takes effect.\">)>>"
  },
  "ALICE-HOLE": {
   "name": "ALICE-HOLE",
   "file": "alice.zil",
   "line": 368,
   "endLine": 375,
   "source": "<ROUTINE ALICE-HOLE ()\n\t <COND (<VERB? ENTER EXAMINE>\n\t\t<DO-WALK ,P?EAST>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<TELL ,ONLY-DARKNESS>)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSI ,PSEUDO-OBJECT>>\n\t\t<TELL \"It doesn't fit.\" CR>)>>"
  },
  "GREEN-CAKE-F": {
   "name": "GREEN-CAKE-F",
   "file": "alice.zil",
   "line": 405,
   "endLine": 428,
   "source": "<ROUTINE GREEN-CAKE-F (\"AUX\" F N)\n    <COND (<AND <VERB? EAT>\n\t\t<EQUAL? ,PRSO ,GREEN-CAKE>\n\t\t<EQUAL? ,HERE ,TEA-ROOM>>\n\t   <REMOVE ,GREEN-CAKE>\n\t   <FSET ,ALICE-TABLE ,INVISIBLE>\n\t   <FSET ,ROBOT ,INVISIBLE>\n\t   <SET F <FIRST? ,HERE>>\n\t   <REPEAT ()\n\t\t   <COND (<NOT .F>\n\t\t\t  <RETURN>)>\n\t\t   <SET N <NEXT? .F>>\n\t\t   <COND (<AND <NOT <EQUAL? .F ,ADVENTURER>>\n\t\t\t       <FSET? .F ,TAKEBIT>>\n\t\t\t  <FSET .F ,NONLANDBIT>\n\t\t\t  <FSET .F ,TRYTAKEBIT>\n\t\t\t  <MOVE .F ,POSTS-ROOM>)>\n\t\t   <SET F .N>>\n\t   <TELL\n\"Suddenly, the room becomes huge (although your possessions retain their\nnormal size).\" CR CR>\n\t   <GOTO ,POSTS-ROOM>)\n\t  (T\n\t   <CAKE-CRUMBLE>)>>"
  },
  "CAKE-F": {
   "name": "CAKE-F",
   "file": "alice.zil",
   "line": 457,
   "endLine": 522,
   "source": "<ROUTINE CAKE-F (\"AUX\" F N)\n\t<COND (<VERB? READ>\n\t       <COND (<FSET? ,PRSO ,NONLANDBIT>\n\t\t      <TELL \"The cake is now too tall to read.\" CR>)\n\t\t     (T\n\t\t      <TELL\n\"The letters are tiny; all you can make out is \\\"E\">\n\t\t      <COND (<EQUAL? ,PRSO ,RED-CAKE>\n\t\t\t     <TELL \"VA\">)\n\t\t\t    (<EQUAL? ,PRSO ,ORANGE-CAKE>\n\t\t\t     <TELL \"XP\">)\n\t\t\t    (T\n\t\t\t     <TELL \"NL\">)>\n\t\t      <TELL \"\\\".\" CR>)>)\n\t      (<AND <VERB? EAT>\n\t\t    <EQUAL? ,HERE ,TEA-ROOM ,POSTS-ROOM ,POOL-ROOM>>\n\t       <COND (<EQUAL? ,PRSO ,ORANGE-CAKE>\n\t\t      <REMOVE ,PRSO>\n    \t\t      <JIGS-UP\n\"You are blasted to smithereens (wherever they are).\">)\n\t\t     (<EQUAL? ,PRSO ,RED-CAKE>\n\t\t      <REMOVE ,PRSO>\n\t\t      <JIGS-UP \"Taste: yum. Effect: massive dehydration.\">)\n\t\t     (<EQUAL? ,PRSO ,BLUE-CAKE>\n\t\t      <REMOVE ,PRSO>\n\t\t      <TELL \"The room shrinks.\" CR CR>\n\t\t      <COND (<EQUAL? ,HERE ,POSTS-ROOM>\n\t\t\t     <FCLEAR ,ROBOT ,INVISIBLE>\n\t\t\t     <FCLEAR ,ALICE-TABLE ,INVISIBLE>\n\t\t\t     <FSET ,POSTS ,INVISIBLE>\n\t\t\t     <SET F <FIRST? ,HERE>>\n\t   \t\t     <REPEAT ()\n\t\t\t\t<COND (<NOT .F>\n\t\t\t\t       <RETURN>)>\n\t\t\t\t<SET N <NEXT? .F>>\n\t\t\t\t<COND (<AND <NOT <EQUAL? .F ,ADVENTURER>>\n\t\t\t\t\t    <FSET? .F ,TAKEBIT>>\n\t\t\t\t       <FCLEAR .F ,NONLANDBIT>\n\t\t\t\t       <FCLEAR .F ,TRYTAKEBIT>\n\t\t\t\t       <MOVE .F ,TEA-ROOM>)>\n\t\t\t\t<SET F .N>>\n\t\t\t     <GOTO ,TEA-ROOM>)\n\t\t\t    (T\n\t\t\t     <JIGS-UP\n\"The room is now too small to hold you, and the walls are tougher\nthan your body.\" >)>)>)\n\t      (<AND <VERB? THROW PUT>\n\t\t    <EQUAL? ,PRSO ,ORANGE-CAKE>\n\t\t    <EQUAL? ,HERE ,TEA-ROOM ,POSTS-ROOM ,POOL-ROOM>>\n\t       <REMOVE ,PRSO>\n    \t       <JIGS-UP\n\"You are blasted to smithereens (wherever they are).\">)\n\t      (<AND <VERB? THROW PUT>\n\t\t    <EQUAL? ,PRSI ,POOL>>\n\t       <COND (<EQUAL? ,PRSO ,BLUE-CAKE ,ORANGE-CAKE>\n\t\t      <TELL \"\\\"Splash!\\\"\" CR>\n\t\t      <REMOVE ,PRSO>\n\t\t      <RTRUE>)>\n\t       <MOVE ,PRSO ,HERE>\n\t       <REMOVE ,PRSI>\n\t       <FCLEAR ,CANDY ,INVISIBLE>\n\t       <TELL\n\"The pool evaporates, leaving a damp (but still valuable) package of\nrare candies.\" CR>)\n\t      (T\n\t       <CAKE-CRUMBLE>)>>"
  },
  "CAKE-CRUMBLE": {
   "name": "CAKE-CRUMBLE",
   "file": "alice.zil",
   "line": 524,
   "endLine": 535,
   "source": "<ROUTINE CAKE-CRUMBLE (\"AUX\" CAKE)\n\t <COND (<FSET? ,PRSO ,FOODBIT>\n\t\t<SET CAKE ,PRSO>)\n\t       (T\n\t\t<SET CAKE ,PRSI>)>\n\t <COND (<OR <EQUAL? ,HERE ,TEA-ROOM ,POSTS-ROOM ,POOL-ROOM>\n\t\t    <EQUAL? ,HERE ,MACHINE-ROOM ,DINGY-CLOSET ,TOP-OF-WELL>\n\t\t    <EQUAL? ,HERE ,CAGE>>\n\t        <RFALSE>)\n\t       (T\n\t        <REMOVE .CAKE>\n\t        <TELL \"The \" D .CAKE \" crumbles to dust.\" CR>)>>"
  },
  "POSTS-ROOM-F": {
   "name": "POSTS-ROOM-F",
   "file": "alice.zil",
   "line": 550,
   "endLine": 555,
   "source": "<ROUTINE POSTS-ROOM-F (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-BEG>\n\t\t     <VERB? TAKE>\n\t\t     <FSET? ,PRSO ,NONLANDBIT>>\n\t\t<TELL\n\"The \" D ,PRSO \" is now huge. You have no hope of taking it.\" CR>)>>"
  },
  "POOL-F": {
   "name": "POOL-F",
   "file": "alice.zil",
   "line": 581,
   "endLine": 588,
   "source": "<ROUTINE POOL-F ()\n\t <COND (<VERB? DRINK>\n\t\t<PERFORM ,V?DRINK ,WATER>\n\t\t<RTRUE>)\n\t       (<VERB? LOOK-UNDER>\n\t\t<TELL \"You can't make out what's below the surface.\" CR>)\n\t       (<VERB? ENTER>\n\t\t<V-SWIM>)>>"
  },
  "CANDY-F": {
   "name": "CANDY-F",
   "file": "alice.zil",
   "line": 601,
   "endLine": 607,
   "source": "<ROUTINE CANDY-F ()\n\t <COND (<VERB? EXAMINE READ>\n\t\t<TELL\n\"\\\"Frobozz Magic Candy Company -- Special Assortment! Candied Grasshoppers,\nChocolated Ants, and Worms Glacee!\\\"\" CR>)\n\t       (<VERB? EAT OPEN>\n\t\t<TELL \"It's too rich for your tastes.\" CR>)>>"
  },
  "LAMP-F": {
   "name": "LAMP-F",
   "file": "dungeon.zil",
   "line": 23,
   "endLine": 42,
   "source": "<ROUTINE LAMP-F ()\n\t <COND (<AND <VERB? THROW>\n\t\t     <PRSO? ,LAMP>>\n\t\t<TELL \"You'd break it!\" CR>)\n\t       (<AND <VERB? EXAMINE LAMP-ON LAMP-OFF>\n\t\t     ,LAMP-BURNED-OUT>\n\t\t<TELL \"The lamp has burned out.\" CR>)\n\t       (<VERB? LAMP-ON>\n\t\t<ENABLE <INT I-LANTERN>>\n\t\t<RFALSE>)\n\t       (<VERB? LAMP-OFF>\n\t\t<DISABLE <INT I-LANTERN>>\n\t\t<RFALSE>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"The lamp is o\">\n\t\t<COND (<FSET? ,LAMP ,ONBIT>\n\t\t       <TELL \"n\">)\n\t\t      (T\n\t\t       <TELL \"ff\">)>\n\t\t<TELL ,PERIOD-CR>)>>"
  },
  "I-LANTERN": {
   "name": "I-LANTERN",
   "file": "dungeon.zil",
   "line": 46,
   "endLine": 58,
   "source": "<ROUTINE I-LANTERN (\"AUX\" TICK (TBL <VALUE LAMP-TABLE>))\n\t <ENABLE <QUEUE I-LANTERN <SET TICK <GET .TBL 0>>>>\n\t <COND (<0? .TICK>\n\t\t<FCLEAR ,LAMP ,ONBIT>\n\t\t<SETG LAMP-BURNED-OUT T>)>\n\t <COND (<ACCESSIBLE? ,LAMP>\n\t\t<COND (<0? .TICK>\n\t\t       <TELL\n\"You'd better have more light than from the \" D ,LAMP ,PERIOD-CR>)\n\t\t      (T\n\t\t       <TELL <GET .TBL 1> CR>)>)>\n\t <COND (<NOT <0? .TICK>>\n\t\t<SETG LAMP-TABLE <REST .TBL 4>>)>>"
  },
  "CAROUSEL-ROOM-F": {
   "name": "CAROUSEL-ROOM-F",
   "file": "dungeon.zil",
   "line": 137,
   "endLine": 156,
   "source": "<ROUTINE CAROUSEL-ROOM-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"Eight identical passages leave this large circular room. The ceiling\nis lost in gloom.\">\n\t\t<COND (,CAROUSEL-ON\n\t\t       <TELL\n\" A loud whirring sound comes from all around, and you feel disoriented.\">)>\n\t\t<CRLF>)\n\t       (<AND ,CAROUSEL-ON\n\t\t     <EQUAL? .RARG ,M-BEG>\n\t\t     <VERB? WALK>\n\t\t     <NOT <PRSO? ,P?UP ,P?DOWN>>>\n\t\t<TELL\n\"You're not sure which direction is which...\" CR CR>\n\t\t<COND (<OR <EQUAL? ,PRSO ,P?WEST>\n\t\t\t   <PROB 80>>\n\t\t       <GOTO <PICK-ONE ,CAROUSEL-EXITS>>)\n\t\t      (T\n\t\t       <RFALSE>)>)>>"
  },
  "VIOLIN-F": {
   "name": "VIOLIN-F",
   "file": "dungeon.zil",
   "line": 173,
   "endLine": 176,
   "source": "<ROUTINE VIOLIN-F ()\n\t <COND (<AND <VERB? PLAY>\n\t\t     <EQUAL? ,PRSO ,VIOLIN>>\n\t        <TELL \"An offensive noise issues from the violin.\" CR>)>>"
  },
  "BILLS-F": {
   "name": "BILLS-F",
   "file": "dungeon.zil",
   "line": 200,
   "endLine": 203,
   "source": "<ROUTINE BILLS-F ()\n\t<COND (<VERB? BURN>\n\t       <TELL \"Nothing like having money to burn! \">\n\t       <RFALSE>)>>"
  },
  "MENHIR-ROOM-F": {
   "name": "MENHIR-ROOM-F",
   "file": "dungeon.zil",
   "line": 216,
   "endLine": 226,
   "source": "<ROUTINE MENHIR-ROOM-F (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-FLASH>\n\t\t     ,MENHIR-POSITION>\n\t\t<DESCRIBE-MENHIR>)\n\t       (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"Large limestone chunks lie about this former quarry, which appears to have\nproduced menhirs (standing stones). Obvious passages lead north and south.\" CR>\n\t\t<COND (<IN? ,MENHIR ,LOCAL-GLOBALS>\n\t\t       <DESCRIBE-MENHIR>)>\n\t\t<RTRUE>)>>"
  },
  "DESCRIBE-MENHIR": {
   "name": "DESCRIBE-MENHIR",
   "file": "dungeon.zil",
   "line": 230,
   "endLine": 246,
   "source": "<ROUTINE DESCRIBE-MENHIR ()\n\t <COND (<EQUAL? ,HERE ,MENHIR-ROOM>\n\t\t<COND (<EQUAL? ,MENHIR-POSITION <>>\n\t\t       <TELL\n\"One large menhir blocks a dark opening leading southwest.\">)\n\t\t      (<EQUAL? ,MENHIR-POSITION 1>\n\t\t       <TELL \"A menhir lies near a southwest passage.\">)\n\t\t      (<EQUAL? ,MENHIR-POSITION 2>\n\t\t       <TELL \"A dark opening leads southwest.\">)\n\t\t      (<EQUAL? ,MENHIR-POSITION 3>\n\t\t       <TELL \"There is a huge menhir here.\">)\n\t\t      (T\n\t\t       <TELL\n\"A huge menhir is floating in midair above a southwest passage.\">)>\n\t\t<CRLF>)\n\t       (T\n\t\t<TELL \"A dark opening leads southwest.\" CR>)>>"
  },
  "GLOBAL-MENHIR-F": {
   "name": "GLOBAL-MENHIR-F",
   "file": "dungeon.zil",
   "line": 256,
   "endLine": 257,
   "source": "<ROUTINE GLOBAL-MENHIR-F ()\n\t <TELL \"It's not here.\" CR>>"
  },
  "MENHIR-F": {
   "name": "MENHIR-F",
   "file": "dungeon.zil",
   "line": 267,
   "endLine": 287,
   "source": "<ROUTINE MENHIR-F ()\n\t <COND (<AND <VERB? LOOK-UNDER LOOK-BEHIND>\n\t\t     <NOT ,MENHIR-POSITION>>\n\t\t<TELL \"There's a dark passage beyond the menhir.\" CR>)\n\t       (<VERB? TAKE MOVE TURN>\n\t\t<TELL \"The menhir weighs many tons!\" CR>)\n\t       (<VERB? READ>\n\t\t<TELL \"\\\"F\\\"\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"The menhir is carved with an ornate letter \\\"F\\\".\" CR>)\n\t       (<AND <VERB? ENCHANT>\n\t\t     <EQUAL? ,SPELL-USED ,W?FLOAT>>\n\t\t<SETG MENHIR-POSITION 3>\n\t\t<TELL\n\"The menhir floats majestically into the air. The passage beyond\nbeckons invitingly.\" CR>)\n\t       (<AND <VERB? DISENCHANT>\n\t\t     <EQUAL? ,SPELL-USED ,W?FLOAT>>\n\t\t<SETG MENHIR-POSITION <>>\n\t\t<COND (<EQUAL? ,HERE ,MENHIR-ROOM ,KENNEL>\n\t\t       <TELL \"The menhir sinks to the ground.\" CR>)>)>>"
  },
  "COLLAR-F": {
   "name": "COLLAR-F",
   "file": "dungeon.zil",
   "line": 312,
   "endLine": 321,
   "source": "<ROUTINE COLLAR-F ()\n\t <COND (<AND <VERB? TAKE>\n\t\t     ,CERBERUS-LEASHED>\n\t\t<JIGS-UP\n\"Bad idea. As you unfasten the collar, the monster rends you\ninto little doggy biscuits.\">)\n\t       (<AND <VERB? ENCHANT>\n\t\t     <EQUAL? ,SPELL-USED ,W?FLOAT>>\n\t\t<PERFORM ,V?ENCHANT ,CERBERUS>\n\t\t<RTRUE>)>>"
  },
  "TOMB-PSEUDO": {
   "name": "TOMB-PSEUDO",
   "file": "dungeon.zil",
   "line": 334,
   "endLine": 336,
   "source": "<ROUTINE TOMB-PSEUDO ()\n\t <COND (<VERB? ENTER>\n\t\t<DO-WALK ,P?SOUTH>)>>"
  },
  "GLOBAL-CERBERUS-F": {
   "name": "GLOBAL-CERBERUS-F",
   "file": "dungeon.zil",
   "line": 345,
   "endLine": 346,
   "source": "<ROUTINE GLOBAL-CERBERUS-F ()\n\t <TELL \"He's not here.\" CR>>"
  },
  "CERBERUS-F": {
   "name": "CERBERUS-F",
   "file": "dungeon.zil",
   "line": 361,
   "endLine": 408,
   "source": "<ROUTINE CERBERUS-F ()\n\t <COND (<AND <VERB? WAVE RUB RAISE>\n\t\t     <EQUAL? ,PRSO ,WAND>>\n\t\t<TELL \"The dog looks puzzled.\" CR>\n\t\t<RFALSE>)\n\t       (<AND ,WAND-ON\n\t\t     <VERB? SAY INCANT>>\n\t\t<RFALSE>)\n\t       (<HELLO? ,CERBERUS>\n\t\t<COND (,CERBERUS-LEASHED\n\t\t       <TELL \"\\\"Arf! Arf!\\\"\" CR>)\n\t\t      (T\n\t\t       <TELL \"\\\"Grrrr!\\\"\" CR>)>)\n\t       (<VERB? ATTACK MUNG>\n\t\t<COND (,CERBERUS-LEASHED\n\t\t       <REMOVE ,CERBERUS>\n\t\t       <TELL\n\"With a quiet bark of disappointment, the creature expires into a small pile\nof dust which blows away into nothing.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"The maddened dog-thing snaps at you viciously.\" CR>)>)\n\t       (<AND <VERB? PUT PUT-ON>\n\t\t     <EQUAL? ,PRSO ,COLLAR>>\n\t\t<SETG CERBERUS-LEASHED T>\n\t\t<MOVE ,COLLAR ,CERBERUS>\n\t\t<FSET ,COLLAR ,NDESCBIT>\n\t\t<FSET ,COLLAR ,TRYTAKEBIT>\n\t\t<PUTP ,CERBERUS ,P?LDESC\n\"A grinning, three-headed dog, wearing a huge collar, wags its tail here.\">\n\t\t<TELL\n\"All three heads begin licking your face, and its huge tail wags\nenthusiastically, almost blowing you over from the breeze it creates.\" CR>)\n\t       (<VERB? ENCHANT>\n\t\t<COND (<EQUAL? ,SPELL-USED ,W?FLOAT>\n\t\t       <SETG SPELL-HANDLED? T>\n\t\t       <TELL\n\"The huge dog rises an inch off the ground, for a moment.\" CR>)\n\t\t      (<EQUAL? ,SPELL-USED ,W?FEEBLE>\n\t\t       <TELL\n\"What an effect! He now has the strength of just one elephant, rather\nthan ten!\" CR>)>)\n\t       (<NOT ,CERBERUS-LEASHED>\n\t\t<TELL \"The three-headed dog snaps at you viciously!\" CR>)\n\t       (<AND ,CERBERUS-LEASHED\n\t\t     <VERB? RUB>>\n\t\t<TELL\n\"The dog slobbers and whines with uncontained joy.\" CR>)>>"
  },
  "HEADS-F": {
   "name": "HEADS-F",
   "file": "dungeon.zil",
   "line": 429,
   "endLine": 435,
   "source": "<ROUTINE HEADS-F ()\n\t <COND (<VERB? HELLO TELL>\n\t\t<TELL \"Dead Flatheads tell no tales.\" CR>)\n\t       (<VERB? KICK ATTACK RUB OPEN TAKE BURN>\n\t\t<JIGS-UP\n\"The Flatheads foresaw that someone might tamper with their remains,\nand took steps to punish such actions.\">)>>"
  },
  "CRYPT-OBJECT-F": {
   "name": "CRYPT-OBJECT-F",
   "file": "dungeon.zil",
   "line": 448,
   "endLine": 450,
   "source": "<ROUTINE CRYPT-OBJECT-F ()\n\t <COND (<VERB? OPEN>\n\t\t<TELL \"The crypt is sealed for all time.\" CR>)>>"
  },
  "ZORK3-F": {
   "name": "ZORK3-F",
   "file": "dungeon.zil",
   "line": 458,
   "endLine": 475,
   "source": "<ROUTINE ZORK3-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \"A rough-hewn stair leads down into darkness. \">\n\t\t<COND (<IN? ,WAND ,WINNER>\n\t\t       <TELL\n\"The wand vibrates and are compelled downward. There is a burst of light,\nand you tumble down the staircase! At the bottom, a vast red-lit hall,\nguarded by sinister statues, is visible far ahead.|\n|\nYou have conquered the Wizard of Frobozz and become master of his domain,\nbut the final challenge awaits! (The Zork Trilogy concludes with \\\"Zork III:\nThe Dungeon Master\\\".)\" CR CR>\n\t\t       <FINISH>)\n\t\t      (T\n\t\t       <JIGS-UP\n\"Strands of light vibrate toward you, as if searching for something.\nOne by one your possessions glow bright green. Finally, you are attacked\nby these magical wardens, and destroyed!\">)>)>>"
  },
  "LEDGE-IN-RAVINE-F": {
   "name": "LEDGE-IN-RAVINE-F",
   "file": "dungeon.zil",
   "line": 499,
   "endLine": 507,
   "source": "<ROUTINE LEDGE-IN-RAVINE-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"To the south, a stream runs through a narrow ravine. It looks as if you\ncould scramble down to the stream. A smokey odor drifts in from the west. \">\n\t\t<P-DOOR \"north\">)\n\t       (<NOT <VERB? LOOK>>\n\t\t<PCHECK>\n\t\t<RFALSE>)>>"
  },
  "P-DOOR": {
   "name": "P-DOOR",
   "file": "dungeon.zil",
   "line": 509,
   "endLine": 520,
   "source": "<ROUTINE P-DOOR (STR)\n\t<COND (,PLOOK-FLAG\n\t       <SETG PLOOK-FLAG <>>\n\t       <RFALSE>)>\n\t<TELL\n\"On the \" .STR \" side of the room is an oak door with a small barred window\nand a formidable lock (with keyhole).\">\n\t<COND (,MUD-FLAG\n\t       <TELL \" \" ,PLACE-MAT-VISIBLE>\n\t       <COND (,MATOBJ\n\t\t      <TELL \" Lying on the place mat is a \" D ,MATOBJ \".\">)>)>\n\t<CRLF>>"
  },
  "PCHECK": {
   "name": "PCHECK",
   "file": "dungeon.zil",
   "line": 522,
   "endLine": 534,
   "source": "<ROUTINE PCHECK ()\n\t<SETG PLOOK-FLAG <>>\n\t<COND (<IN? ,KEY ,KEYHOLE-2>\n\t       <FSET ,KEY ,NDESCBIT>)\n\t      (T\n\t       <FCLEAR ,KEY ,NDESCBIT>)>\n\t<COND (<HELD? ,PLACE-MAT>\n\t       <SETG MUD-FLAG <>>)> ;\"HUH?\"\n\t<COND (,MUD-FLAG\n\t       <MOVE ,PLACE-MAT ,HERE>\n\t       <FSET ,PLACE-MAT ,NDESCBIT>)\n\t      (T\n\t       <FCLEAR ,PLACE-MAT ,NDESCBIT>)>>"
  },
  "DREARY-ROOM-F": {
   "name": "DREARY-ROOM-F",
   "file": "dungeon.zil",
   "line": 545,
   "endLine": 553,
   "source": "<ROUTINE DREARY-ROOM-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"The room is eerily lit by a red glow emanating from a crack in one wall.\nThe light falls upon a dusty wooden table. \">\n\t\t<P-DOOR \"south\">)\n\t       (T\n\t\t<PCHECK>\n\t\t<RFALSE>)>>"
  },
  "PDOOR-F": {
   "name": "PDOOR-F",
   "file": "dungeon.zil",
   "line": 563,
   "endLine": 597,
   "source": "<ROUTINE PDOOR-F (\"AUX\" K)\n\t <COND (<AND <VERB? LOOK-UNDER>\n\t\t     ,MUD-FLAG>\n\t\t<TELL ,PLACE-MAT-VISIBLE CR>)\n\t       (<VERB? UNLOCK>\n\t\t<COND (<EQUAL? ,PRSI ,KEY>\n\t\t       <SETG PUNLOCK-FLAG T>\n\t\t       <TELL \"The door is now unlocked.\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GOLD-KEY>\n\t\t       <TELL ,DOESNT-FIT-LOCK>)\n\t\t      (T\n\t\t       <TELL <PICK-ONE ,YUKS> CR>)>)\n\t       (<VERB? LOCK>\n\t\t<COND (<EQUAL? ,PRSI ,KEY>\n\t\t       <SETG PUNLOCK-FLAG <>>\n\t\t       <TELL \"The door is locked.\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GOLD-KEY>\n\t\t       <TELL ,DOESNT-FIT-LOCK>)\n\t\t      (T\n\t\t       <TELL <PICK-ONE ,YUKS> CR>)>)\n\t       (<VERB? PUT-UNDER>\n\t\t<COND (<EQUAL? ,PRSO ,ROBOT-LABEL>\n\t\t       <TELL \"The tiny paper vanishes under the door.\" CR>\n\t\t       <MOVE ,PRSO <COND (<EQUAL? ,HERE ,LEDGE-IN-RAVINE>\n\t\t\t\t\t  ,DREARY-ROOM)\n\t\t\t\t\t (T\n\t\t\t\t\t  ,LEDGE-IN-RAVINE)>>)\n\t\t      (<EQUAL? ,PRSO ,NEWSPAPER>\n\t\t       <TELL\n\"The newspaper crumples up and won't go under the door.\" CR>)>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<COND (,PUNLOCK-FLAG\n\t\t       <OPEN-CLOSE>)\n\t\t      (T\n\t\t       <TELL \"The door is locked.\" CR>)>)>>"
  },
  "PWINDOW-F": {
   "name": "PWINDOW-F",
   "file": "dungeon.zil",
   "line": 607,
   "endLine": 618,
   "source": "<ROUTINE PWINDOW-F ()\n\t <COND (<VERB? LOOK-INSIDE>\n\t\t<SETG PLOOK-FLAG T>\n\t\t<COND (<FSET? ,PDOOR ,OPENBIT>\n\t\t       <TELL \"The door is open!\" CR>)\n\t\t      (T\n\t\t       <GO&LOOK <COND (<EQUAL? ,HERE ,DREARY-ROOM>\n\t\t\t\t       ,LEDGE-IN-RAVINE)\n\t\t\t\t      (T\n\t\t\t\t       ,DREARY-ROOM)>>)>)\n\t       (<VERB? ENTER>\n\t\t<TELL \"Perhaps if you were diced....\" CR>)>>"
  },
  "PKEYHOLE-F": {
   "name": "PKEYHOLE-F",
   "file": "dungeon.zil",
   "line": 649,
   "endLine": 671,
   "source": "<ROUTINE PKEYHOLE-F ()\n\t <COND (<VERB? LOOK-INSIDE>\n\t\t<TELL \"You can\">\n\t\t<COND (<OR  <IN? ,KEY ,KEYHOLE-2>\n\t\t\t    <NOT <LIT? <COND (<EQUAL? ,HERE ,DREARY-ROOM>\n\t\t\t\t\t      ,LEDGE-IN-RAVINE)\n\t\t\t\t\t     (T\n\t\t\t\t\t      ,DREARY-ROOM)>>>>\n\t\t       <TELL \"'t\">)>\n\t\t<TELL \" see light through the keyhole.\" CR>)\n\t       (<VERB? PUT>\n\t\t<COND (<IN? ,KEY ,KEYHOLE-2>\n\t\t       <COND (<EQUAL? ,PRSO ,LETTER-OPENER>\n\t\t\t      <COND (,MUD-FLAG\n\t\t\t\t     <SETG MATOBJ ,KEY>)>\n\t\t\t      <MOVE ,KEY ,DREARY-ROOM>\n\t\t\t      <TELL\n\"There is a faint thud behind the door.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"The \" D ,PRSO \" doesn't fit.\" CR>)>)\n\t\t      (T\n\t\t       <PERFORM ,V?UNLOCK ,PDOOR ,PRSO>\n\t\t       <RTRUE>)>)>>"
  },
  "NOT-HERE-OBJECT-F": {
   "name": "NOT-HERE-OBJECT-F",
   "file": "globals.zil",
   "line": 39,
   "endLine": 61,
   "source": "<ROUTINE NOT-HERE-OBJECT-F (\"AUX\" TBL (PRSO? T) OBJ)\n\t ;\"This COND is game independent (except the TELL)\"\n\t <COND (<AND <EQUAL? ,PRSO ,NOT-HERE-OBJECT>\n\t\t     <EQUAL? ,PRSI ,NOT-HERE-OBJECT>>\n\t\t<TELL \"Those things aren't here!\" CR>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSO ,NOT-HERE-OBJECT>\n\t\t<SET TBL ,P-PRSO>)\n\t       (T\n\t\t<SET TBL ,P-PRSI>\n\t\t<SET PRSO? <>>)>\n\t ;\"Here is the default 'cant see any' printer\"\n\t <SETG P-CONT <>>\n\t <SETG QUOTE-FLAG <>>\n\t <COND (<EQUAL? ,WINNER ,ADVENTURER>\n\t\t<TELL \"You can't see any \">\n\t\t<NOT-HERE-PRINT .PRSO?>\n\t\t<TELL \" here!\" CR>)\n\t       (T\n\t\t<TELL \"The \" D ,WINNER \" seems confused. \\\"I don't see any \">\n\t\t<NOT-HERE-PRINT .PRSO?>\n\t\t<TELL \" here!\\\"\" CR>)>\n\t <RTRUE>>"
  },
  "NOT-HERE-PRINT": {
   "name": "NOT-HERE-PRINT",
   "file": "globals.zil",
   "line": 96,
   "endLine": 103,
   "source": "<ROUTINE NOT-HERE-PRINT (PRSO?)\n <COND (,P-OFLAG\n\t<COND (,P-XADJ <PRINTB ,P-XADJN>)>\n\t<COND (,P-XNAM <PRINTB ,P-XNAM>)>)\n       (.PRSO?\n\t<BUFFER-PRINT <GET ,P-ITBL ,P-NC1> <GET ,P-ITBL ,P-NC1L> <>>)\n       (T\n\t<BUFFER-PRINT <GET ,P-ITBL ,P-NC2> <GET ,P-ITBL ,P-NC2L> <>>)>>"
  },
  "GROUND-F": {
   "name": "GROUND-F",
   "file": "globals.zil",
   "line": 111,
   "endLine": 115,
   "source": "<ROUTINE GROUND-F ()\n\t <COND (<AND <VERB? PUT PUT-ON>\n\t\t     <EQUAL? ,PRSI ,GROUND>>\n\t\t<PERFORM ,V?DROP ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "WATER-F": {
   "name": "WATER-F",
   "file": "globals.zil",
   "line": 132,
   "endLine": 198,
   "source": "<ROUTINE WATER-F (\"AUX\" AV W PI?)\n\t <COND (<VERB? SGIVE>\n\t\t<RFALSE>)\n\t       (<VERB? ENTER>\n\t\t<PERFORM ,V?SWIM ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? FILL>\t;\"fill bottle with water =>\"\n\t\t<SET W ,PRSI>\t   ;\"put water in bottle\"\n\t\t<SETG PRSA ,V?PUT>\n\t\t<SETG PRSI ,PRSO>\n\t\t<SETG PRSO .W>\n\t\t<SET PI? <>>)\n\t       (<EQUAL? ,PRSO ,GLOBAL-WATER ,WATER>\n\t\t<SET W ,PRSO>\n\t\t<SET PI? <>>)\n\t       (,PRSI\n\t\t<SET W ,PRSI>\n\t\t<SET PI? T>)>\n\t <COND (<EQUAL? .W ,GLOBAL-WATER>\n\t\t<SET W ,WATER>\n\t\t<COND (<VERB? TAKE PUT> <REMOVE .W>)>)>\n\t <COND (.PI? <SETG PRSI .W>)\n\t       (T <SETG PRSO .W>)>\n\t <SET AV <LOC ,WINNER>>\n\t <COND (<NOT <FSET? .AV ,VEHBIT>> <SET AV <>>)>\n\t <COND (<AND <VERB? TAKE PUT> <NOT .PI?>>\n\t\t<COND (<AND .AV <EQUAL? .AV ,PRSI>>\n\t\t       <PUDDLE .AV>)\n\t\t      (<AND .AV <NOT ,PRSI> <NOT <IN? .W .AV>>>\n\t\t       <PUDDLE .AV>)\n\t\t      (<AND ,PRSI <NOT <EQUAL? ,PRSI ,TEAPOT>>>\n\t\t       <TELL \"The water leaks out of the \" D ,PRSI\n\t\t\t     \" and evaporates immediately.\" CR>\n\t\t       <REMOVE .W>)\n\t\t      (<IN? ,TEAPOT ,WINNER>\n\t\t       <COND (<NOT <FIRST? ,TEAPOT>>\n\t\t\t      <MOVE ,WATER ,TEAPOT>\n\t\t\t      <TELL \"The teapot is now full of water.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"The teapot isn't currently empty.\" CR>\n\t\t\t      <RTRUE>)>)\n\t\t      (<AND <IN? ,PRSO ,TEAPOT>\n\t\t\t    <VERB? TAKE>\n\t\t\t    <NOT ,PRSI>>\n\t\t       <SETG PRSO ,TEAPOT>\n\t\t       <ITAKE>\n\t\t       <SETG PRSO .W>)\n\t\t      (T\n\t\t       <TELL \"The water slips through your fingers.\" CR>)>)\n\t       (.PI?\n\t\t<TELL \"Nice try.\" CR>)\n\t       (<VERB? DROP GIVE>\n\t\t<COND (<AND <EQUAL? ,PRSO ,WATER>\n\t\t\t    <NOT <HELD? ,WATER>>>\n\t\t       <TELL \"You don't have any water.\" CR>\n\t\t       <RTRUE>)>\n\t\t<REMOVE ,WATER>\n\t\t<COND (.AV\n\t\t       <PUDDLE .AV>)\n\t\t      (T\n\t\t       <TELL\n\"The water spills to the floor and evaporates.\" CR>\n\t\t       <REMOVE ,WATER>)>)\n\t       (<VERB? THROW>\n\t\t<TELL\n\"The water splashes on the walls and evaporates.\" CR>\n\t\t<REMOVE ,WATER>)>>"
  },
  "PUDDLE": {
   "name": "PUDDLE",
   "file": "globals.zil",
   "line": 200,
   "endLine": 202,
   "source": "<ROUTINE PUDDLE (AV)\n\t<TELL \"There is now a puddle in the bottom of the \" D .AV ,PERIOD-CR>\n\t<MOVE ,PRSO .AV>>"
  },
  "GRUE-F": {
   "name": "GRUE-F",
   "file": "globals.zil",
   "line": 211,
   "endLine": 220,
   "source": "<ROUTINE GRUE-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The grue is a sinister, lurking presence in the dark places of the earth.\nIts favorite diet is adventurers, but its insatiable appetite is tempered\nby its fear of light.\" CR>)\n\t       (<VERB? FIND>\n\t\t<TELL\n\"There's probably one lurking in the darkness nearby. Don't let your light\ngo out!\" CR>)>>"
  },
  "ME-F": {
   "name": "ME-F",
   "file": "globals.zil",
   "line": 229,
   "endLine": 246,
   "source": "<ROUTINE ME-F () \n\t <COND (<VERB? TELL>\n\t\t<SETG P-CONT <>>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<TELL\n\"Talking to yourself is a sign of impending mental collapse.\" CR>)\n\t       (<AND <VERB? GIVE>\n\t\t     <EQUAL? ,PRSI ,ME>>\n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? EAT>\n\t\t<TELL \"Auto-cannibalism is not the answer.\" CR>)\n\t       (<VERB? ATTACK MUNG>\n\t\t<JIGS-UP \"Poof, you're dead!\">)\n\t       (<VERB? TAKE>\n\t\t<TELL \"How romantic!\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"Difficult, unless your eyes are prehensile.\" CR>)>>"
  },
  "PATH-OBJECT-F": {
   "name": "PATH-OBJECT-F",
   "file": "globals.zil",
   "line": 264,
   "endLine": 266,
   "source": "<ROUTINE PATH-OBJECT-F ()\n\t <COND (<VERB? TAKE FOLLOW>\n\t\t<V-WALK-AROUND>)>>"
  },
  "ZORKMID-F": {
   "name": "ZORKMID-F",
   "file": "globals.zil",
   "line": 274,
   "endLine": 277,
   "source": "<ROUTINE ZORKMID-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The zorkmid is the unit of currency of\" ,GUE-NAME ,PERIOD-CR>)>>"
  },
  "STREAM-F": {
   "name": "STREAM-F",
   "file": "globals.zil",
   "line": 294,
   "endLine": 296,
   "source": "<ROUTINE STREAM-F ()\n\t <COND (<VERB? ENTER>\n\t\t<V-SWIM>)>>"
  },
  "CHASM-F": {
   "name": "CHASM-F",
   "file": "globals.zil",
   "line": 306,
   "endLine": 314,
   "source": "<ROUTINE CHASM-F ()\n\t <COND (<OR <VERB? LEAP>\n\t\t    <AND <VERB? PUT>\n\t\t\t <EQUAL? ,PRSO ,ME>>>\n\t\t<JIGS-UP \"You should have looked before you leaped.\">)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSI ,PSEUDO-OBJECT>>\n\t\t<REMOVE ,PRSO>\n\t\t<TELL \"The \" D ,PRSO \" disappears into the chasm.\" CR>)>>"
  },
  "BRIDGE-F": {
   "name": "BRIDGE-F",
   "file": "globals.zil",
   "line": 324,
   "endLine": 326,
   "source": "<ROUTINE BRIDGE-F ()\n\t <COND (<VERB? LEAP>\n\t\t<JIGS-UP \"You should have looked before you leaped.\">)>>"
  },
  "OPEN-CLOSE": {
   "name": "OPEN-CLOSE",
   "file": "globals.zil",
   "line": 334,
   "endLine": 345,
   "source": "<ROUTINE OPEN-CLOSE ()\n\t <COND (<VERB? OPEN>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL ,LOOK-AROUND>)\n\t\t      (T\n\t\t       <FSET ,PRSO ,OPENBIT>\n\t\t       <TELL \"The \" D ,PRSO \" is now open.\" CR>)>)\n\t       (<FSET? ,PRSO ,OPENBIT>\n\t\t<FCLEAR ,PRSO ,OPENBIT>\n\t\t<TELL \"The \" D ,PRSO \" is now closed.\" CR>)\n\t       (T\n\t\t<TELL ,LOOK-AROUND>)>>"
  },
  "HELLO?": {
   "name": "HELLO?",
   "file": "globals.zil",
   "line": 347,
   "endLine": 353,
   "source": "<ROUTINE HELLO? (WHO)\n\t <COND (<OR <EQUAL? ,WINNER .WHO>\n\t\t    <VERB? TELL SAY HELLO INCANT>>\n\t\t<COND (<VERB? TELL SAY INCANT>\n\t\t       <SETG P-CONT <>>\n\t\t       <SETG QUOTE-FLAG <>>)>\n\t\t<RTRUE>)>>"
  },
  "FIND-TARGET": {
   "name": "FIND-TARGET",
   "file": "globals.zil",
   "line": 355,
   "endLine": 368,
   "source": "<ROUTINE FIND-TARGET (TARGET \"AUX\" P TX L ROOM)\n\t <COND (<IN? .TARGET ,HERE> ,HERE)\n\t       (T\n\t\t<SET P 0>\n\t\t<REPEAT ()\n\t\t\t<COND (<0? <SET P <NEXTP ,HERE .P>>>\n\t\t\t       <RETURN <>>)\n\t\t\t      (<NOT <L? .P ,LOW-DIRECTION>>\n\t\t\t       <SET TX <GETPT ,HERE .P>>\n\t\t\t       <SET L <PTSIZE .TX>>\n\t\t\t       <COND (<EQUAL? .L ,UEXIT ,CEXIT ,DEXIT>\n\t\t\t\t      <SET ROOM <GETB .TX 0>>\n\t\t\t\t      <COND (<IN? .TARGET .ROOM>\n\t\t\t\t\t     <RETURN .ROOM>)>)>)>>)>>"
  },
  "NOW-DARK?": {
   "name": "NOW-DARK?",
   "file": "globals.zil",
   "line": 370,
   "endLine": 374,
   "source": "<ROUTINE NOW-DARK? ()\n\t <SETG LIT <LIT? ,HERE>>\n\t <COND (<NOT ,LIT>\n\t\t<TELL \"It is now pitch black.\" CR>)>\n\t <RTRUE>>"
  },
  "DO-WALK": {
   "name": "DO-WALK",
   "file": "globals.zil",
   "line": 376,
   "endLine": 378,
   "source": "<ROUTINE DO-WALK (DIR)\n\t <SETG P-WALK-DIR .DIR>\n\t <PERFORM ,V?WALK .DIR>>"
  },
  "GLOBAL-IN?": {
   "name": "GLOBAL-IN?",
   "file": "globals.zil",
   "line": 380,
   "endLine": 382,
   "source": "<ROUTINE GLOBAL-IN? (OBJ1 OBJ2 \"AUX\" TX)\n\t <COND (<SET TX <GETPT .OBJ2 ,P?GLOBAL>>\n\t\t<ZMEMQB .OBJ1 .TX <- <PTSIZE .TX> 1>>)>> "
  },
  "FIND-IN": {
   "name": "FIND-IN",
   "file": "globals.zil",
   "line": 384,
   "endLine": 393,
   "source": "<ROUTINE FIND-IN (WHERE WHAT \"AUX\" W)\n\t <SET W <FIRST? .WHERE>>\n\t <COND (<NOT .W>\n\t\t<RFALSE>)>\n\t <REPEAT ()\n\t\t <COND (<AND <FSET? .W .WHAT>\n\t\t\t     <NOT <EQUAL? .W ,ADVENTURER>>>\n\t\t\t<RETURN .W>)\n\t\t       (<NOT <SET W <NEXT? .W>>>\n\t\t\t<RETURN <>>)>>>"
  },
  "HELD?": {
   "name": "HELD?",
   "file": "globals.zil",
   "line": 395,
   "endLine": 401,
   "source": "<ROUTINE HELD? (CAN)\n\t <REPEAT ()\n\t\t <SET CAN <LOC .CAN>>\n\t\t <COND (<NOT .CAN>\n\t\t\t<RFALSE>)\n\t\t       (<EQUAL? .CAN ,WINNER>\n\t\t\t<RTRUE>)>>>"
  },
  "OTHER-SIDE": {
   "name": "OTHER-SIDE",
   "file": "globals.zil",
   "line": 403,
   "endLine": 411,
   "source": "<ROUTINE OTHER-SIDE (DOBJ \"AUX\" (P 0) TX) ;\"finds room beyond given door\"\n\t <REPEAT ()\n\t\t <COND (<L? <SET P <NEXTP ,HERE .P>> ,LOW-DIRECTION>\n\t\t\t<RETURN <>>)\n\t\t       (T\n\t\t\t<SET TX <GETPT ,HERE .P>>\n\t\t\t<COND (<AND <EQUAL? <PTSIZE .TX> ,DEXIT>\n\t\t\t\t    <EQUAL? <GETB .TX ,DEXITOBJ> .DOBJ>>\n\t\t\t       <RETURN .P>)>)>>>"
  },
  "HACK-HACK": {
   "name": "HACK-HACK",
   "file": "globals.zil",
   "line": 413,
   "endLine": 414,
   "source": "<ROUTINE HACK-HACK (STR)\n\t <TELL .STR D ,PRSO <PICK-ONE ,HO-HUM> CR>>"
  },
  "RANDOM-ELEMENT": {
   "name": "RANDOM-ELEMENT",
   "file": "misc.zil",
   "line": 123,
   "endLine": 124,
   "source": "<ROUTINE RANDOM-ELEMENT (FROB)\n\t <GET .FROB <RANDOM <GET .FROB 0>>>>"
  },
  "PICK-ONE": {
   "name": "PICK-ONE",
   "file": "misc.zil",
   "line": 126,
   "endLine": 138,
   "source": "<ROUTINE PICK-ONE (FROB\n\t\t   \"AUX\" (L <GET .FROB 0>) (CNT <GET .FROB 1>) RND MSG RFROB)\n\t <SET L <- .L 1>>\n\t <SET FROB <REST .FROB 2>>\n\t <SET RFROB <REST .FROB <* .CNT 2>>>\n\t <SET RND <RANDOM <- .L .CNT>>>\n\t <SET MSG <GET .RFROB .RND>>\n\t <PUT .RFROB .RND <GET .RFROB 1>>\n\t <PUT .RFROB 1 .MSG>\n\t <SET CNT <+ .CNT 1>>\n\t <COND (<==? .CNT .L> <SET CNT 0>)>\n\t <PUT .FROB 0 .CNT>\n\t .MSG>"
  },
  "GO": {
   "name": "GO",
   "file": "misc.zil",
   "line": 188,
   "endLine": 203,
   "source": "<ROUTINE GO () \n\t <PUTB ,P-LEXV 0 59>\n\t <ENABLE <QUEUE I-WIZARD 4>>\n\t <QUEUE I-LANTERN 200>\n\t <PUTP ,BALLOON ,P?VTYPE ,NONLANDBIT>\n\t <PUTP ,BUCKET ,P?VTYPE ,NONLANDBIT>\n\t <SETG LIT T>\n\t <SETG WINNER ,ADVENTURER>\n\t <SETG HERE ,INSIDE-THE-BARROW>\n\t <SETG P-IT-OBJECT <>>\n\t <COND (<NOT <FSET? ,HERE ,TOUCHBIT>>\n\t\t<V-VERSION>\n\t\t<CRLF>)>\n\t <V-LOOK>\n\t <MAIN-LOOP>\n\t <AGAIN>>"
  },
  "MAIN-LOOP": {
   "name": "MAIN-LOOP",
   "file": "misc.zil",
   "line": 205,
   "endLine": 207,
   "source": "<ROUTINE MAIN-LOOP (\"AUX\" TRASH)\n\t <REPEAT ()\n\t\t <SET TRASH <MAIN-LOOP-1>>>>"
  },
  "MAIN-LOOP-1": {
   "name": "MAIN-LOOP-1",
   "file": "misc.zil",
   "line": 209,
   "endLine": 339,
   "source": "<ROUTINE MAIN-LOOP-1 (\"AUX\" ICNT OCNT NUM CNT OBJ TBL V PTBL OBJ1 TMP O I) \n     <SET CNT 0>\n     <SET OBJ <>>\n     <SET PTBL T>\n     <COND (<SETG P-WON <PARSER>>\n\t    <SET ICNT <GET ,P-PRSI ,P-MATCHLEN>>\n\t    <SET OCNT <GET ,P-PRSO ,P-MATCHLEN>>\n\t    <COND (<AND ,P-IT-OBJECT <ACCESSIBLE? ,P-IT-OBJECT>>\n\t\t   <SET TMP <>>\n\t\t   <REPEAT ()\n\t\t\t   <COND (<G? <SET CNT <+ .CNT 1>> .ICNT>\n\t\t\t\t  <RETURN>)\n\t\t\t\t (T\n\t\t\t\t  <COND (<EQUAL? <GET ,P-PRSI .CNT> ,IT>\n\t\t\t\t\t <PUT ,P-PRSI .CNT ,P-IT-OBJECT>\n\t\t\t\t\t <SET TMP T>\n\t\t\t\t\t <RETURN>)>)>>\n\t\t   <COND (<NOT .TMP>\n\t\t\t  <SET CNT 0>\n\t\t\t  <REPEAT ()\n\t\t\t   <COND (<G? <SET CNT <+ .CNT 1>> .OCNT>\n\t\t\t\t  <RETURN>)\n\t\t\t\t (T\n\t\t\t\t  <COND (<EQUAL? <GET ,P-PRSO .CNT> ,IT>\n\t\t\t\t\t <PUT ,P-PRSO .CNT ,P-IT-OBJECT>\n\t\t\t\t\t <RETURN>)>)>>)>\n\t\t   <SET CNT 0>)>\n\t    <SET NUM\n\t\t <COND (<0? .OCNT> .OCNT)\n\t\t       (<G? .OCNT 1>\n\t\t\t<SET TBL ,P-PRSO>\n\t\t\t<COND (<0? .ICNT> <SET OBJ <>>)\n\t\t\t      (T <SET OBJ <GET ,P-PRSI 1>>)>\n\t\t\t.OCNT)\n\t\t       (<G? .ICNT 1>\n\t\t\t<SET PTBL <>>\n\t\t\t<SET TBL ,P-PRSI>\n\t\t\t<SET OBJ <GET ,P-PRSO 1>>\n\t\t\t.ICNT)\n\t\t       (T 1)>>\n\t    <COND (<AND <NOT .OBJ> <1? .ICNT>> <SET OBJ <GET ,P-PRSI 1>>)>\n\t    <COND (<AND <==? ,PRSA ,V?WALK>\n\t\t\t<NOT <ZERO? ,P-WALK-DIR>>>\n\t\t   <SET V <PERFORM ,PRSA ,PRSO>>)\n\t\t  (<0? .NUM>\n\t\t   <COND (<0? <P-SONUMS ,P-SYNTAX>\n\t\t\t      ;<BAND <GETB ,P-SYNTAX ,P-SBITS> ,P-SONUMS>>\n\t\t\t  <SET V <PERFORM ,PRSA>>\n\t\t\t  <SETG PRSO <>>)\n\t\t\t (<NOT ,LIT>\n\t\t\t  <TELL ,TOO-DARK CR>)\n\t\t\t (T\n\t\t\t  <TELL ,REFERRING>\n\t\t\t  <SET V <>>)>)\n\t\t  (T\n\t\t   <SETG P-NOT-HERE 0>\n\t\t   <SETG P-MULT <>>\n\t\t   <COND (<G? .NUM 1> <SETG P-MULT T>)>\n\t\t   <SET TMP <>>\n\t\t   <REPEAT ()\n\t\t\t   <COND (<G? <SET CNT <+ .CNT 1>> .NUM>\n\t\t\t\t  <COND (<G? ,P-NOT-HERE 0>\n\t\t\t\t\t <TELL \"The \">\n\t\t\t\t\t <COND (<NOT <EQUAL? ,P-NOT-HERE .NUM>>\n\t\t\t\t\t\t<TELL \"other \">)>\n\t\t\t\t\t <TELL \"object\">\n\t\t\t\t\t <COND (<NOT <EQUAL? ,P-NOT-HERE 1>>\n\t\t\t\t\t\t<TELL \"s\">)>\n\t\t\t\t\t <TELL \" that you mentioned \">\n\t\t\t\t\t <COND (<NOT <EQUAL? ,P-NOT-HERE 1>>\n\t\t\t\t\t\t<TELL \"are\">)\n\t\t\t\t\t       (T <TELL \"is\">)>\n\t\t\t\t\t <TELL \"n't here.\" CR>)\n\t\t\t\t\t(<NOT .TMP>\n\t\t\t\t\t <TELL\n\"There's nothing here you can take.\" CR>)>\n\t\t\t\t  <RETURN>)\n\t\t\t\t (T\n\t\t\t\t  <COND (.PTBL <SET OBJ1 <GET ,P-PRSO .CNT>>)\n\t\t\t\t\t(T <SET OBJ1 <GET ,P-PRSI .CNT>>)>\n\t\t\t\t  <SET O <COND (.PTBL .OBJ1) (T .OBJ)>>\n\t\t\t\t  <SET I <COND (.PTBL .OBJ) (T .OBJ1)>>\n\n;\"multiple exceptions\"\n<COND (<OR <G? .NUM 1>\n\t   <EQUAL? <GET <GET ,P-ITBL ,P-NC1> 0> ,W?ALL>>\n       <SET V <LOC ,WINNER>>\n       <COND (<EQUAL? .O ,NOT-HERE-OBJECT>\n\t      <SETG P-NOT-HERE <+ ,P-NOT-HERE 1>>\n\t      <AGAIN>)\n\t     (<AND <VERB? TAKE>\n\t\t   .I\n\t\t   <EQUAL? <GET <GET ,P-ITBL ,P-NC1> 0> ,W?ALL>\n\t\t   <NOT <IN? .O .I>>>\n\t      <AGAIN>)\n\t     (<AND <EQUAL? ,P-GETFLAGS ,P-ALL>\n\t\t   <VERB? TAKE>\n\t\t   <OR <AND <NOT <EQUAL? <LOC .O> ,WINNER ,HERE .V>>\n\t\t\t    <NOT <EQUAL? <LOC .O> .I>>\n\t\t\t    <NOT <FSET? <LOC .O> ,SURFACEBIT>>>\n\t\t       <NOT <OR <FSET? .O ,TAKEBIT>\n\t\t\t\t<FSET? .O ,TRYTAKEBIT>>>>>\n\t      <AGAIN>)\n\t     (ELSE\n\t      <COND (<EQUAL? .OBJ1 ,IT>\n\t\t     <PRINTD ,P-IT-OBJECT>)\n\t\t    (T <PRINTD .OBJ1>)>\n\t      <TELL \": \">)>)>\n;\"end multiple exceptions\"\n\t\t\t\t  <SETG PRSO .O>\n\t\t\t\t  <SETG PRSI .I>\n\t\t\t\t  <SET TMP T>\n\t\t\t\t  <SET V <PERFORM ,PRSA ,PRSO ,PRSI>>\n\t\t\t\t  <COND (<==? .V ,M-FATAL> <RETURN>)>)>>)>\n\t    <COND (<NOT <==? .V ,M-FATAL>>\n\t\t   ;<COND (<==? <LOC ,WINNER> ,PRSO>\n\t\t\t  <SETG PRSO <>>)>\n\t\t   <SET V <APPLY <GETP <LOC ,WINNER> ,P?ACTION> ,M-END>>)>\n\t    ;<COND (<VERB? ;AGAIN ;\"WALK -- why was this here?\"\n\t\t\t  SAVE RESTORE ;SCORE ;VERSION ;WAIT> T)\n\t\t  (T\n\t\t   <SETG L-PRSA ,PRSA>\n\t\t   <SETG L-PRSO ,PRSO>\n\t\t   <SETG L-PRSI ,PRSI>)>\n\t    <COND (<==? .V ,M-FATAL> <SETG P-CONT <>>)>)\n\t   (T\n\t    <SETG P-CONT <>>)>\n     <COND (,P-WON\n\t    <COND (<VERB? TELL BRIEF SUPER-BRIEF VERBOSE SAVE VERSION\n\t\t\t  QUIT RESTART SCORE SCRIPT UNSCRIPT RESTORE> T)\n\t\t  (T <SET V <CLOCKER>>)>)>>"
  },
  "QUEUE": {
   "name": "QUEUE",
   "file": "misc.zil",
   "line": 498,
   "endLine": 500,
   "source": "<ROUTINE QUEUE (RTN TICK \"AUX\" CINT)\n\t <PUT <SET CINT <INT .RTN>> ,C-TICK .TICK>\n\t .CINT>"
  },
  "INT": {
   "name": "INT",
   "file": "misc.zil",
   "line": 502,
   "endLine": 513,
   "source": "<ROUTINE INT (RTN \"OPTIONAL\" (DEMON <>) E C INT)\n\t <SET E <REST ,C-TABLE ,C-TABLELEN>>\n\t <SET C <REST ,C-TABLE ,C-INTS>>\n\t <REPEAT ()\n\t\t <COND (<==? .C .E>\n\t\t\t<SETG C-INTS <- ,C-INTS ,C-INTLEN>>\n\t\t\t<AND .DEMON <SETG C-DEMONS <- ,C-DEMONS ,C-INTLEN>>>\n\t\t\t<SET INT <REST ,C-TABLE ,C-INTS>>\n\t\t\t<PUT .INT ,C-RTN .RTN>\n\t\t\t<RETURN .INT>)\n\t\t       (<EQUAL? <GET .C ,C-RTN> .RTN> <RETURN .C>)>\n\t\t <SET C <REST .C ,C-INTLEN>>>>"
  },
  "CLOCKER": {
   "name": "CLOCKER",
   "file": "misc.zil",
   "line": 519,
   "endLine": 535,
   "source": "<ROUTINE CLOCKER (\"AUX\" C E TICK (FLG <>))\n\t <COND (,CLOCK-WAIT <SETG CLOCK-WAIT <>> <RFALSE>)>\n\t <SET C <REST ,C-TABLE <COND (,P-WON ,C-INTS) (T ,C-DEMONS)>>>\n\t <SET E <REST ,C-TABLE ,C-TABLELEN>>\n\t <REPEAT ()\n\t\t <COND (<==? .C .E>\n\t\t\t<SETG MOVES <+ ,MOVES 1>>\n\t\t\t<RETURN .FLG>)\n\t\t       (<NOT <0? <GET .C ,C-ENABLED?>>>\n\t\t\t<SET TICK <GET .C ,C-TICK>>\n\t\t\t<COND (<0? .TICK>)\n\t\t\t      (T\n\t\t\t       <PUT .C ,C-TICK <- .TICK 1>>\n\t\t\t       <COND (<AND <NOT <G? .TICK 1>>\n\t\t\t\t\t   <APPLY <GET .C ,C-RTN>>>\n\t\t\t\t      <SET FLG T>)>)>)>\n\t\t <SET C <REST .C ,C-INTLEN>>>>"
  },
  "PARSER": {
   "name": "PARSER",
   "file": "parser.zil",
   "line": 109,
   "endLine": 382,
   "source": "<ROUTINE PARSER (\"AUX\" (PTR ,P-LEXSTART) WRD (VAL 0) (VERB <>) (OF-FLAG <>)\n\t\t       OWINNER OMERGED LEN (DIR <>) (NW 0) (LW 0) (CNT -1))\n\t<REPEAT ()\n\t\t<COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN> <RETURN>)\n\t\t      (T\n\t\t       <COND (<NOT ,P-OFLAG>\n\t\t\t      <PUT ,P-OTBL .CNT <GET ,P-ITBL .CNT>>)>\n\t\t       <PUT ,P-ITBL .CNT 0>)>>\n\t<SET OWINNER ,WINNER>\n\t<SET OMERGED ,P-MERGED>\n\t<SETG P-ADVERB <>>\n\t<SETG P-MERGED <>>\n\t<SETG P-END-ON-PREP <>>\n\t<PUT ,P-PRSO ,P-MATCHLEN 0>\n\t<PUT ,P-PRSI ,P-MATCHLEN 0>\n\t<PUT ,P-BUTS ,P-MATCHLEN 0>\n\t<COND (<AND <NOT ,QUOTE-FLAG> <N==? ,WINNER ,ADVENTURER>>\n\t       <SETG WINNER ,ADVENTURER>\n\t       <SETG HERE <META-LOC ,ADVENTURER>>\n\t       ;<COND (<NOT <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t      <SETG HERE <LOC ,WINNER>>)>\n\t       <SETG LIT <LIT? ,HERE>>)>\n\t<COND (,RESERVE-PTR\n\t       <SET PTR ,RESERVE-PTR>\n\t       <STUFF ,RESERVE-LEXV ,P-LEXV>\n\t       <COND (<AND <G? ,VERBOSITY 0>\n\t\t\t   <EQUAL? ,ADVENTURER ,WINNER>>\n\t\t      <CRLF>)>\n\t       <SETG RESERVE-PTR <>>\n\t       <SETG P-CONT <>>)\n\t      (,P-CONT\n\t       <SET PTR ,P-CONT>\n\t       <COND (<AND <G? ,VERBOSITY 0>\n\t\t\t   <EQUAL? ,ADVENTURER ,WINNER>\n\t\t\t   <NOT <VERB? SAY>>>\n\t\t      <CRLF>)>\n\t       <SETG P-CONT <>>)\n\t      (T\n\t       <SETG WINNER ,ADVENTURER>\n\t       <SETG QUOTE-FLAG <>>\n\t       <COND (<NOT <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t      <SETG HERE <LOC ,WINNER>>)>\n\t       <SETG LIT <LIT? ,HERE>>\n\t       <COND (<G? ,VERBOSITY 0>\n\t\t      <CRLF>)>\n\t       <TELL \">\">\n\t       <READ ,P-INBUF ,P-LEXV>)>\n\t<SETG P-LEN <GETB ,P-LEXV ,P-LEXWORDS>>\n\t<COND (<ZERO? ,P-LEN> <TELL \"I beg your pardon?\" CR> <RFALSE>)>\n\t<COND (<EQUAL? <SET WRD <GET ,P-LEXV .PTR>> ,W?OOPS>\n\t       <COND (<EQUAL? <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>\n\t\t\t      ,W?PERIOD ,W?COMMA>\n\t\t      <SET PTR <+ .PTR ,P-LEXELEN>>\n\t\t      <SETG P-LEN <- ,P-LEN 1>>)>\n\t       <COND (<NOT <G? ,P-LEN 1>>\n\t\t      <TELL \"I can't help your clumsiness.\" CR>\n\t\t      <RFALSE>)\n\t\t     (<GET ,OOPS-TABLE ,O-PTR>\n\t\t      <COND (<AND <G? ,P-LEN 2>\n\t\t\t\t  <EQUAL? <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>\n\t\t\t\t\t  ,W?QUOTE>>\n\t\t\t     <TELL\n\"Sorry, you can't correct mistakes in quoted text.\" CR>\n\t\t\t     <RFALSE>)\n\t\t\t    (<G? ,P-LEN 2>\n\t\t\t     <TELL\n\"Warning: only the first word after OOPS is used.\" CR>)>\n\t\t      <PUT ,AGAIN-LEXV <GET ,OOPS-TABLE ,O-PTR>\n\t\t\t   <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>>\n\t\t      <SETG WINNER .OWINNER> ;\"maybe fix oops vs. chars.?\"\n\t\t      <INBUF-ADD <GETB ,P-LEXV <+ <* .PTR ,P-LEXELEN> 6>>\n\t\t\t\t <GETB ,P-LEXV <+ <* .PTR ,P-LEXELEN> 7>>\n\t\t\t\t <+ <* <GET ,OOPS-TABLE ,O-PTR> ,P-LEXELEN> 3>>\n\t\t      <STUFF ,AGAIN-LEXV ,P-LEXV>\n\t\t      <SETG P-LEN <GETB ,P-LEXV ,P-LEXWORDS>>\n\t\t      <SET PTR <GET ,OOPS-TABLE ,O-START>>\n\t\t      <INBUF-STUFF ,OOPS-INBUF ,P-INBUF>)\n\t\t     (T\n\t\t      <PUT ,OOPS-TABLE ,O-END <>>\n\t\t      <TELL \"There was no word to replace!\" CR>\n\t\t      <RFALSE>)>)\n\t      (T\n\t       <COND (<NOT <EQUAL? .WRD ,W?AGAIN ,W?G>>\n\t\t      <SETG P-NUMBER 0>)>\n\t       <PUT ,OOPS-TABLE ,O-END <>>)>\n\t<COND (<EQUAL? <GET ,P-LEXV .PTR> ,W?AGAIN ,W?G>\n\t       <COND (<ZERO? <GETB ,OOPS-INBUF 1>>\n\t\t      <TELL \"Beg pardon?\" CR>\n\t\t      <RFALSE>)\n\t\t     (,P-OFLAG\n\t\t      <TELL \"It's difficult to repeat fragments.\" CR>\n\t\t      <RFALSE>)\n\t\t     (<NOT ,P-WON>\n\t\t      <TELL \"That would just repeat a mistake.\" CR>\n\t\t      <RFALSE>)\n\t\t     (<G? ,P-LEN 1>\n\t\t      <COND (<OR <EQUAL? <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>\n\t\t\t\t\t,W?PERIOD ,W?COMMA ,W?THEN>\n\t\t\t\t <EQUAL? <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>\n\t\t\t\t\t,W?AND>>\n\t\t\t     <SET PTR <+ .PTR <* 2 ,P-LEXELEN>>>\n\t\t\t     <PUTB ,P-LEXV ,P-LEXWORDS\n\t\t\t\t   <- <GETB ,P-LEXV ,P-LEXWORDS> 2>>)\n\t\t\t    (T\n\t\t\t     <TELL \"I couldn't understand that sentence.\" CR>\n\t\t\t     <RFALSE>)>)\n\t\t     (T\n\t\t      <SET PTR <+ .PTR ,P-LEXELEN>>\n\t\t      <PUTB ,P-LEXV ,P-LEXWORDS\n\t\t\t    <- <GETB ,P-LEXV ,P-LEXWORDS> 1>>)>\n\t       <COND (<G? <GETB ,P-LEXV ,P-LEXWORDS> 0>\n\t\t      <STUFF ,P-LEXV ,RESERVE-LEXV>\n\t\t      <SETG RESERVE-PTR .PTR>)\n\t\t     (T\n\t\t      <SETG RESERVE-PTR <>>)>\n\t       ;<SETG P-LEN <GETB ,AGAIN-LEXV ,P-LEXWORDS>>\n\t       <SETG WINNER .OWINNER>\n\t       <SETG P-MERGED .OMERGED>\n\t       <INBUF-STUFF ,OOPS-INBUF ,P-INBUF>\n\t       <STUFF ,AGAIN-LEXV ,P-LEXV>\n\t       <SET CNT -1>\n\t       <SET DIR ,AGAIN-DIR>\n\t       <REPEAT ()\n\t\t<COND (<IGRTR? CNT ,P-ITBLLEN> <RETURN>)\n\t\t      (T <PUT ,P-ITBL .CNT <GET ,P-OTBL .CNT>>)>>)\n\t      (T\n\t       <STUFF ,P-LEXV ,AGAIN-LEXV>\n\t       <INBUF-STUFF ,P-INBUF ,OOPS-INBUF>\n\t       <PUT ,OOPS-TABLE ,O-START .PTR>\n\t       <PUT ,OOPS-TABLE ,O-LENGTH <* 4 ,P-LEN>>\n\t       <SET LEN\n\t\t    <* 2 <+ .PTR <* ,P-LEXELEN <GETB ,P-LEXV ,P-LEXWORDS>>>>>\n\t       <PUT ,OOPS-TABLE ,O-END <+ <GETB ,P-LEXV <- .LEN 1>>\n\t\t\t\t\t  <GETB ,P-LEXV <- .LEN 2>>>>\n\t       <SETG RESERVE-PTR <>>\n\t       <SET LEN ,P-LEN>\n\t       <SETG P-DIR <>>\n\t       <SETG P-NCN 0>\n\t       <SETG P-GETFLAGS 0>\n\t       <REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <SETG QUOTE-FLAG <>>\n\t\t       <RETURN>)\n\t\t      (<OR <SET WRD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WRD <NUMBER? .PTR>>>\n\t\t       <COND (<ZERO? ,P-LEN> <SET NW 0>)\n\t\t\t     (T <SET NW <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>>)>\n\t\t       <COND (<AND <EQUAL? .WRD ,W?TO>\n\t\t\t\t   <EQUAL? .VERB ,ACT?TELL ;,ACT?ASK>>\n\t\t\t      <SET WRD ,W?QUOTE>)\n\t\t\t     (<AND <EQUAL? .WRD ,W?THEN>\n\t\t\t\t   <G? ,P-LEN 0>\n\t\t\t\t   <NOT .VERB>\n\t\t\t\t   <NOT ,QUOTE-FLAG> ;\"Last NOT added 7/3\">\n\t\t\t      <COND (<EQUAL? .LW 0 ,W?PERIOD>\n\t\t\t\t     <SET WRD ,W?THE>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <PUT ,P-ITBL ,P-VERB ,ACT?TELL>\n\t\t\t\t     <PUT ,P-ITBL ,P-VERBN 0>\n\t\t\t\t     <SET WRD ,W?QUOTE>)>)>\n\t\t       <COND (<EQUAL? .WRD ,W?THEN ,W?PERIOD ,W?QUOTE>\n\t\t\t      <COND (<EQUAL? .WRD ,W?QUOTE>\n\t\t\t\t     <COND (,QUOTE-FLAG\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>)\n\t\t\t\t\t   (T <SETG QUOTE-FLAG T>)>)>\n\t\t\t      <OR <ZERO? ,P-LEN>\n\t\t\t\t  <SETG P-CONT <+ .PTR ,P-LEXELEN>>>\n\t\t\t      <PUTB ,P-LEXV ,P-LEXWORDS ,P-LEN>\n\t\t\t      <RETURN>)\n\t\t\t     (<AND <SET VAL\n\t\t\t\t\t<WT? .WRD\n\t\t\t\t\t     ,PS?DIRECTION\n\t\t\t\t\t     ,P1?DIRECTION>>\n\t\t\t\t   <EQUAL? .VERB <> ,ACT?WALK>\n\t\t\t\t   <OR <EQUAL? .LEN 1>\n\t\t\t\t       <AND <EQUAL? .LEN 2>\n\t\t\t\t\t    <EQUAL? .VERB ,ACT?WALK>>\n\t\t\t\t       <AND <EQUAL? .NW\n\t\t\t\t\t            ,W?THEN\n\t\t\t\t\t            ,W?PERIOD\n\t\t\t\t\t            ,W?QUOTE>\n\t\t\t\t\t    <NOT <L? .LEN 2>>>\n\t\t\t\t       <AND ,QUOTE-FLAG\n\t\t\t\t\t    <EQUAL? .LEN 2>\n\t\t\t\t\t    <EQUAL? .NW ,W?QUOTE>>\n\t\t\t\t       <AND <G? .LEN 2>\n\t\t\t\t\t    <EQUAL? .NW ,W?COMMA ,W?AND>>>>\n\t\t\t      <SET DIR .VAL>\n\t\t\t      <COND (<EQUAL? .NW ,W?COMMA ,W?AND>\n\t\t\t\t     <PUT ,P-LEXV\n\t\t\t\t\t  <+ .PTR ,P-LEXELEN>\n\t\t\t\t\t  ,W?THEN>)>\n\t\t\t      <COND (<NOT <G? .LEN 2>>\n\t\t\t\t     <SETG QUOTE-FLAG <>>\n\t\t\t\t     <RETURN>)>)\n\t\t\t     (<AND <SET VAL <WT? .WRD ,PS?VERB ,P1?VERB>>\n\t\t\t\t   <NOT .VERB>>\n\t\t\t      <SET VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERBN ,P-VTBL>\n\t\t\t      <PUT ,P-VTBL 0 .WRD>\n\t\t\t      <PUTB ,P-VTBL 2 <GETB ,P-LEXV\n\t\t\t\t\t\t    <SET CNT\n\t\t\t\t\t\t\t <+ <* .PTR 2> 2>>>>\n\t\t\t      <PUTB ,P-VTBL 3 <GETB ,P-LEXV <+ .CNT 1>>>)\n\t\t\t     (<OR <SET VAL <WT? .WRD ,PS?PREPOSITION 0>>\n\t\t\t\t  <EQUAL? .WRD ,W?ALL ,W?ONE ;,W?BOTH>\n\t\t\t\t  <WT? .WRD ,PS?ADJECTIVE>\n\t\t\t\t  <WT? .WRD ,PS?OBJECT>>\n\t\t\t      <COND (<AND <G? ,P-LEN 1>\n\t\t\t\t\t  <EQUAL? .NW ,W?OF>\n\t\t\t\t\t  <ZERO? .VAL>\n\t\t\t\t\t  <NOT <EQUAL? .WRD\n\t\t\t\t\t\t       ,W?ALL ,W?ONE ,W?A>>\n\t\t\t\t\t  ;<NOT <EQUAL? .WRD ,W?BOTH>>>\n\t\t\t\t     <SET OF-FLAG T>)\n\t\t\t\t    (<AND <NOT <ZERO? .VAL>>\n\t\t\t\t          <OR <ZERO? ,P-LEN>\n\t\t\t\t\t      <EQUAL? .NW ,W?THEN ,W?PERIOD>>>\n\t\t\t\t     <SETG P-END-ON-PREP T>\n\t\t\t\t     <COND (<L? ,P-NCN 2>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1 .VAL>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1N .WRD>)>)\n\t\t\t\t    (<EQUAL? ,P-NCN 2>\n\t\t\t\t     <TELL\n\"There were too many nouns in that sentence.\" CR>\n\t\t\t\t     <RFALSE>)\n\t\t\t\t    (T\n\t\t\t\t     <SETG P-NCN <+ ,P-NCN 1>>\n\t\t\t\t     <SETG P-ACT .VERB>\n\t\t\t\t     <OR <SET PTR <CLAUSE .PTR .VAL .WRD>>\n\t\t\t\t\t <RFALSE>>\n\t\t\t\t     <COND (<L? .PTR 0>\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>\n\t\t\t\t\t    <RETURN>)>)>)\n\t\t\t     (<EQUAL? .WRD ,W?OF>\n\t\t\t      <COND (<OR <NOT .OF-FLAG>\n\t\t\t\t\t <EQUAL? .NW ,W?PERIOD ,W?THEN>>\n\t\t\t\t     <CANT-USE .PTR>\n\t\t\t\t     <RFALSE>)\n\t\t\t\t    (T\n\t\t\t\t     <SET OF-FLAG <>>)>)\n\t\t\t     (<WT? .WRD ,PS?BUZZ-WORD>)\n\t\t\t     (<AND <EQUAL? .VERB ,ACT?TELL>\n\t\t\t\t   <WT? .WRD ,PS?VERB ,P1?VERB>\n\t\t\t\t   <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t\t      <TELL\n\"Please consult your manual for the correct way to talk to other people\nor creatures.\" CR>\n\t\t\t      <RFALSE>)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T\n\t\t       <UNKNOWN-WORD .PTR>\n\t\t       <RFALSE>)>\n\t\t<SET LW .WRD>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>)>\n\t<PUT ,OOPS-TABLE ,O-PTR <>>\n\t<COND (.DIR\n\t       <SETG PRSA ,V?WALK>\n\t       <SETG PRSO .DIR>\n\t       <SETG P-OFLAG <>>\n\t       <SETG P-WALK-DIR .DIR>\n\t       <SETG AGAIN-DIR .DIR>)\n\t      (ELSE\n\t       <COND (,P-OFLAG <ORPHAN-MERGE>)>\n\t       <SETG P-WALK-DIR <>>\n\t       <SETG AGAIN-DIR <>>\n\t       <COND (<AND <SYNTAX-CHECK>\n\t\t\t   <SNARF-OBJECTS>\n\t\t\t   <MANY-CHECK>\n\t\t\t   <TAKE-CHECK>>\n\t\t      T)>)>>"
  },
  "STUFF": {
   "name": "STUFF",
   "file": "parser.zil",
   "line": 389,
   "endLine": 401,
   "source": "<ROUTINE STUFF (SRC DEST \"OPTIONAL\" (MAX 29) \"AUX\" (PTR ,P-LEXSTART) (CTR 1)\n\t\t\t\t\t\t   BPTR)\n\t <PUTB .DEST 0 <GETB .SRC 0>>\n\t <PUTB .DEST 1 <GETB .SRC 1>>\n\t <REPEAT ()\n\t  <PUT .DEST .PTR <GET .SRC .PTR>>\n\t  <SET BPTR <+ <* .PTR 2> 2>>\n\t  <PUTB .DEST .BPTR <GETB .SRC .BPTR>>\n\t  <SET BPTR <+ <* .PTR 2> 3>>\n\t  <PUTB .DEST .BPTR <GETB .SRC .BPTR>>\n\t  <SET PTR <+ .PTR ,P-LEXELEN>>\n\t  <COND (<IGRTR? CTR .MAX>\n\t\t <RETURN>)>>>"
  },
  "INBUF-STUFF": {
   "name": "INBUF-STUFF",
   "file": "parser.zil",
   "line": 404,
   "endLine": 408,
   "source": "<ROUTINE INBUF-STUFF (SRC DEST \"AUX\" CNT)\n\t <SET CNT <- <GETB .SRC 0> 1>>\n\t <REPEAT ()\n\t\t <PUTB .DEST .CNT <GETB .SRC .CNT>>\n\t\t <COND (<DLESS? CNT 0> <RETURN>)>>>"
  },
  "INBUF-ADD": {
   "name": "INBUF-ADD",
   "file": "parser.zil",
   "line": 412,
   "endLine": 425,
   "source": "<ROUTINE INBUF-ADD (LEN BEG SLOT \"AUX\" DBEG (CTR 0) TMP)\n\t <COND (<SET TMP <GET ,OOPS-TABLE ,O-END>>\n\t\t<SET DBEG .TMP>)\n\t       (T\n\t\t<SET DBEG <+ <GETB ,AGAIN-LEXV\n\t\t\t\t   <SET TMP <GET ,OOPS-TABLE ,O-LENGTH>>>\n\t\t\t     <GETB ,AGAIN-LEXV <+ .TMP 1>>>>)>\n\t <PUT ,OOPS-TABLE ,O-END <+ .DBEG .LEN>>\n\t <REPEAT ()\n\t  <PUTB ,OOPS-INBUF <+ .DBEG .CTR> <GETB ,P-INBUF <+ .BEG .CTR>>>\n\t  <SET CTR <+ .CTR 1>>\n\t  <COND (<EQUAL? .CTR .LEN> <RETURN>)>>\n\t <PUTB ,AGAIN-LEXV .SLOT .DBEG>\n\t <PUTB ,AGAIN-LEXV <- .SLOT 1> .LEN>>"
  },
  "WT?": {
   "name": "WT?",
   "file": "parser.zil",
   "line": 432,
   "endLine": 438,
   "source": "<ROUTINE WT? (PTR BIT \"OPTIONAL\" (B1 5) \"AUX\" (OFFS ,P-P1OFF) TYP)\n\t<COND (<BTST <SET TYP <GETB .PTR ,P-PSOFF>> .BIT>\n\t       <COND (<G? .B1 4> <RTRUE>)\n\t\t     (T\n\t\t      <SET TYP <BAND .TYP ,P-P1BITS>>\n\t\t      <COND (<NOT <EQUAL? .TYP .B1>> <SET OFFS <+ .OFFS 1>>)>\n\t\t      <GETB .PTR .OFFS>)>)>>"
  },
  "CLAUSE": {
   "name": "CLAUSE",
   "file": "parser.zil",
   "line": 442,
   "endLine": 512,
   "source": "<ROUTINE CLAUSE (PTR VAL WRD \"AUX\" OFF NUM (ANDFLG <>) (FIRST?? T) NW (LW 0))\n\t<SET OFF <* <- ,P-NCN 1> 2>>\n\t<COND (<NOT <EQUAL? .VAL 0>>\n\t       <PUT ,P-ITBL <SET NUM <+ ,P-PREP1 .OFF>> .VAL>\n\t       <PUT ,P-ITBL <+ .NUM 1> .WRD>\n\t       <SET PTR <+ .PTR ,P-LEXELEN>>)\n\t      (T <SETG P-LEN <+ ,P-LEN 1>>)>\n\t<COND (<ZERO? ,P-LEN> <SETG P-NCN <- ,P-NCN 1>> <RETURN -1>)>\n\t<PUT ,P-ITBL <SET NUM <+ ,P-NC1 .OFF>> <REST ,P-LEXV <* .PTR 2>>>\n\t<COND (<EQUAL? <GET ,P-LEXV .PTR> ,W?THE ,W?A ,W?AN>\n\t       <PUT ,P-ITBL .NUM <REST <GET ,P-ITBL .NUM> 4>>)>\n\t<REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <PUT ,P-ITBL <+ .NUM 1> <REST ,P-LEXV <* .PTR 2>>>\n\t\t       <RETURN -1>)>\n\t\t<COND (<OR <SET WRD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WRD <NUMBER? .PTR>>>\n\t\t       <COND (<ZERO? ,P-LEN> <SET NW 0>)\n\t\t\t     (T <SET NW <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>>)>\n\t\t       <COND (<EQUAL? .WRD ,W?AND ,W?COMMA> <SET ANDFLG T>)\n\t\t\t     (<EQUAL? .WRD ,W?ALL ,W?ONE ;,W?BOTH>\n\t\t\t      <COND (<EQUAL? .NW ,W?OF>\n\t\t\t\t     <SETG P-LEN <- ,P-LEN 1>>\n\t\t\t\t     <SET PTR <+ .PTR ,P-LEXELEN>>)>)\n\t\t\t     (<OR <EQUAL? .WRD ,W?THEN ,W?PERIOD>\n\t\t\t\t  <AND <WT? .WRD ,PS?PREPOSITION>\n\t\t\t\t       <GET ,P-ITBL ,P-VERB>\n\t\t\t\t          ;\"ADDED 4/27 FOR TURTLE,UP\"\n\t\t\t\t       <NOT .FIRST??>>>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 1>>\n\t\t\t      <PUT ,P-ITBL\n\t\t\t\t   <+ .NUM 1>\n\t\t\t\t   <REST ,P-LEXV <* .PTR 2>>>\n\t\t\t      <RETURN <- .PTR ,P-LEXELEN>>)\n\t\t\t     (<WT? .WRD ,PS?OBJECT>\n\t\t\t      <COND (<AND <G? ,P-LEN 0>\n\t\t\t\t\t  <EQUAL? .NW ,W?OF>\n\t\t\t\t\t  <NOT <EQUAL? .WRD ,W?ALL ,W?ONE>>>\n\t\t\t\t     T)\n\t\t\t\t    (<AND <WT? .WRD\n\t\t\t\t\t       ,PS?ADJECTIVE\n\t\t\t\t\t       ,P1?ADJECTIVE>\n\t\t\t\t\t  <NOT <EQUAL? .NW 0>>\n\t\t\t\t\t  <WT? .NW ,PS?OBJECT>>)\n\t\t\t\t    (<AND <NOT .ANDFLG>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?BUT ,W?EXCEPT>>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t\t     <PUT ,P-ITBL\n\t\t\t\t\t  <+ .NUM 1>\n\t\t\t\t\t  <REST ,P-LEXV <* <+ .PTR 2> 2>>>\n\t\t\t\t     <RETURN .PTR>)\n\t\t\t\t    (T <SET ANDFLG <>>)>)\n\t\t\t     (<AND <OR ,P-MERGED\n\t\t\t\t       ,P-OFLAG\n\t\t\t\t       <NOT <EQUAL? <GET ,P-ITBL ,P-VERB> 0>>>\n\t\t\t\t   <OR <WT? .WRD ,PS?ADJECTIVE>\n\t\t\t\t       <WT? .WRD ,PS?BUZZ-WORD>>>)\n\t\t\t     (<AND .ANDFLG\n\t\t\t\t   <OR <WT? .WRD ,PS?DIRECTION>\n\t\t\t\t       <WT? .WRD ,PS?VERB>>>\n\t\t\t      <SET PTR <- .PTR 4>>\n\t\t\t      <PUT ,P-LEXV <+ .PTR 2> ,W?THEN>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 2>>)\n\t\t\t     (<WT? .WRD ,PS?PREPOSITION> T)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T <UNKNOWN-WORD .PTR> <RFALSE>)>\n\t\t<SET LW .WRD>\n\t\t<SET FIRST?? <>>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>>"
  },
  "NUMBER?": {
   "name": "NUMBER?",
   "file": "parser.zil",
   "line": 514,
   "endLine": 536,
   "source": "<ROUTINE NUMBER? (PTR \"AUX\" CNT BPTR CHR (SUM 0) (TIM <>))\n\t <SET CNT <GETB <REST ,P-LEXV <* .PTR 2>> 2>>\n\t <SET BPTR <GETB <REST ,P-LEXV <* .PTR 2>> 3>>\n\t <REPEAT ()\n\t\t <COND (<L? <SET CNT <- .CNT 1>> 0> <RETURN>)\n\t\t       (T\n\t\t\t<SET CHR <GETB ,P-INBUF .BPTR>>\n\t\t\t<COND (<EQUAL? .CHR 58>\n\t\t\t       <SET TIM .SUM>\n\t\t\t       <SET SUM 0>)\n\t\t\t      (<G? .SUM 10000> <RFALSE>)\n\t\t\t      (<AND <L? .CHR 58> <G? .CHR 47>>\n\t\t\t       <SET SUM <+ <* .SUM 10> <- .CHR 48>>>)\n\t\t\t      (T <RFALSE>)>\n\t\t\t<SET BPTR <+ .BPTR 1>>)>>\n\t <PUT ,P-LEXV .PTR ,W?INTNUM>\n\t <COND (<G? .SUM 1000> <RFALSE>)\n\t       (.TIM\n\t\t<COND (<L? .TIM 8> <SET TIM <+ .TIM 12>>)\n\t\t      (<G? .TIM 23> <RFALSE>)>\n\t\t<SET SUM <+ .SUM <* .TIM 60>>>)>\n\t <SETG P-NUMBER .SUM>\n\t ,W?INTNUM>"
  },
  "ORPHAN-MERGE": {
   "name": "ORPHAN-MERGE",
   "file": "parser.zil",
   "line": 542,
   "endLine": 629,
   "source": "<ROUTINE ORPHAN-MERGE (\"AUX\" (CNT -1) TEMP VERB BEG END (ADJ <>) WRD)\n   <SETG P-OFLAG <>>\n   <COND (<OR <EQUAL? <WT? <SET WRD <GET <GET ,P-ITBL ,P-VERBN> 0>>\n\t\t\t   ,PS?VERB ,P1?VERB>\n\t\t      <GET ,P-OTBL ,P-VERB>>\n\t      <NOT <ZERO? <WT? .WRD ,PS?ADJECTIVE>>>>\n\t  <SET ADJ T>)\n\t (<AND <NOT <ZERO? <WT? .WRD ,PS?OBJECT ,P1?OBJECT>>>\n\t       <EQUAL? ,P-NCN 0>>\n\t  <PUT ,P-ITBL ,P-VERB 0>\n\t  <PUT ,P-ITBL ,P-VERBN 0>\n\t  <PUT ,P-ITBL ,P-NC1 <REST ,P-LEXV 2>>\n\t  <PUT ,P-ITBL ,P-NC1L <REST ,P-LEXV 6>>\n\t  <SETG P-NCN 1>)>\n   <COND (<AND <NOT <ZERO? <SET VERB <GET ,P-ITBL ,P-VERB>>>>\n\t       <NOT .ADJ>\n\t       <NOT <EQUAL? .VERB <GET ,P-OTBL ,P-VERB>>>>\n\t  <RFALSE>)\n\t (<EQUAL? ,P-NCN 2> <RFALSE>)\n\t (<EQUAL? <GET ,P-OTBL ,P-NC1> 1>\n\t  <COND (<OR <EQUAL? <SET TEMP <GET ,P-ITBL ,P-PREP1>>\n\t\t\t  <GET ,P-OTBL ,P-PREP1>>\n\t\t     <ZERO? .TEMP>>\n\t\t <COND (.ADJ\n\t\t\t<PUT ,P-OTBL ,P-NC1 <REST ,P-LEXV 2>>\n\t\t\t<COND (<ZERO? <GET ,P-ITBL ,P-NC1L>>\n\t\t\t       <PUT ,P-ITBL ,P-NC1L <REST ,P-LEXV 6>>)>\n\t\t\t<COND (<ZERO? ,P-NCN> <SETG P-NCN 1>)>)\n\t\t       (T\n\t\t\t<PUT ,P-OTBL ,P-NC1 <GET ,P-ITBL ,P-NC1>>)>\n\t\t <PUT ,P-OTBL ,P-NC1L <GET ,P-ITBL ,P-NC1L>>)\n\t\t(T <RFALSE>)>)\n\t (<EQUAL? <GET ,P-OTBL ,P-NC2> 1>\n\t  <COND (<OR <EQUAL? <SET TEMP <GET ,P-ITBL ,P-PREP1>>\n\t\t\t  <GET ,P-OTBL ,P-PREP2>>\n\t\t     <ZERO? .TEMP>>\n\t\t <COND (.ADJ\n\t\t\t<PUT ,P-ITBL ,P-NC1 <REST ,P-LEXV 2>>\n\t\t\t<COND (<ZERO? <GET ,P-ITBL ,P-NC1L>>\n\t\t\t       <PUT ,P-ITBL ,P-NC1L <REST ,P-LEXV 6>>)>)>\n\t\t <PUT ,P-OTBL ,P-NC2 <GET ,P-ITBL ,P-NC1>>\n\t\t <PUT ,P-OTBL ,P-NC2L <GET ,P-ITBL ,P-NC1L>>\n\t\t <SETG P-NCN 2>)\n\t\t(T <RFALSE>)>)\n\t (<NOT <ZERO? ,P-ACLAUSE>>\n\t  <COND (<AND <NOT <EQUAL? ,P-NCN 1>> <NOT .ADJ>>\n\t\t <SETG P-ACLAUSE <>>\n\t\t <RFALSE>)\n\t\t(T\n\t\t <SET BEG <GET ,P-ITBL ,P-NC1>>\n\t\t <COND (.ADJ <SET BEG <REST ,P-LEXV 2>> <SET ADJ <>>)>\n\t\t <SET END <GET ,P-ITBL ,P-NC1L>>\n\t\t <REPEAT ()\n\t\t\t <SET WRD <GET .BEG 0>>\n\t\t\t <COND (<EQUAL? .BEG .END>\n\t\t\t\t<COND (.ADJ <ACLAUSE-WIN .ADJ> <RETURN>)\n\t\t\t\t      (T <SETG P-ACLAUSE <>> <RFALSE>)>)\n\t\t\t       (<AND <NOT .ADJ>\n\t\t\t\t     <OR <BTST <GETB .WRD ,P-PSOFF>\n\t\t\t\t\t       ,PS?ADJECTIVE>\n\t\t\t\t\t <EQUAL? .WRD ,W?ALL ,W?ONE>>>\n\t\t\t\t<SET ADJ .WRD>)\n\t\t\t       (<EQUAL? .WRD ,W?ONE>\n\t\t\t\t<ACLAUSE-WIN .ADJ>\n\t\t\t\t<RETURN>)\n\t\t\t       (<BTST <GETB .WRD ,P-PSOFF> ,PS?OBJECT>\n\t\t\t\t<COND (<EQUAL? .WRD ,P-ANAM>\n\t\t\t\t       <ACLAUSE-WIN .ADJ>)\n\t\t\t\t      (T\n\t\t\t\t       <NCLAUSE-WIN>)>\n\t\t\t\t<RETURN>)>\n\t\t\t <SET BEG <REST .BEG ,P-WORDLEN>>\n\t\t\t <COND (<EQUAL? .END 0>\n\t\t\t\t<SET END .BEG>\n\t\t\t\t<SETG P-NCN 1>\n\t\t\t\t<PUT ,P-ITBL ,P-NC1 <BACK .BEG 4>>\n\t\t\t\t<PUT ,P-ITBL ,P-NC1L .BEG>)>>)>)>\n   <PUT ,P-VTBL 0 <GET ,P-OVTBL 0>>\n   <PUTB ,P-VTBL 2 <GETB ,P-OVTBL 2>>\n   <PUTB ,P-VTBL 3 <GETB ,P-OVTBL 3>>\n   <PUT ,P-OTBL ,P-VERBN ,P-VTBL>\n   <PUTB ,P-VTBL 2 0>\n   <REPEAT ()\n\t   <COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN>\n\t\t  <SETG P-MERGED T>\n\t\t  <RTRUE>)\n\t\t (T <PUT ,P-ITBL .CNT <GET ,P-OTBL .CNT>>)>>\n   T>"
  },
  "ACLAUSE-WIN": {
   "name": "ACLAUSE-WIN",
   "file": "parser.zil",
   "line": 633,
   "endLine": 642,
   "source": "<ROUTINE ACLAUSE-WIN (ADJ)\n\t<PUT ,P-ITBL ,P-VERB <GET ,P-OTBL ,P-VERB>>\n\t<PUT ,P-CCTBL ,CC-SBPTR ,P-ACLAUSE>\n\t<PUT ,P-CCTBL ,CC-SEPTR <+ ,P-ACLAUSE 1>>\n\t<PUT ,P-CCTBL ,CC-DBPTR ,P-ACLAUSE>\n\t<PUT ,P-CCTBL ,CC-DEPTR <+ ,P-ACLAUSE 1>>\n\t<CLAUSE-COPY ,P-OTBL ,P-OTBL .ADJ>\n\t<AND <NOT <EQUAL? <GET ,P-OTBL ,P-NC2> 0>> <SETG P-NCN 2>>\n\t<SETG P-ACLAUSE <>>\n\t<RTRUE>>"
  },
  "NCLAUSE-WIN": {
   "name": "NCLAUSE-WIN",
   "file": "parser.zil",
   "line": 644,
   "endLine": 652,
   "source": "<ROUTINE NCLAUSE-WIN ()\n        <PUT ,P-CCTBL ,CC-SBPTR ,P-NC1>\n\t<PUT ,P-CCTBL ,CC-SEPTR ,P-NC1L>\n\t<PUT ,P-CCTBL ,CC-DBPTR ,P-ACLAUSE>\n\t<PUT ,P-CCTBL ,CC-DEPTR <+ ,P-ACLAUSE 1>>\n\t<CLAUSE-COPY ,P-ITBL ,P-OTBL>\n\t<AND <NOT <EQUAL? <GET ,P-OTBL ,P-NC2> 0>> <SETG P-NCN 2>>\n\t<SETG P-ACLAUSE <>>\n\t<RTRUE>>"
  },
  "WORD-PRINT": {
   "name": "WORD-PRINT",
   "file": "parser.zil",
   "line": 657,
   "endLine": 662,
   "source": "<ROUTINE WORD-PRINT (CNT BUF)\n\t <REPEAT ()\n\t\t <COND (<DLESS? CNT 0> <RETURN>)\n\t\t       (ELSE\n\t\t\t<PRINTC <GETB ,P-INBUF .BUF>>\n\t\t\t<SET BUF <+ .BUF 1>>)>>>"
  },
  "UNKNOWN-WORD": {
   "name": "UNKNOWN-WORD",
   "file": "parser.zil",
   "line": 664,
   "endLine": 674,
   "source": "<ROUTINE UNKNOWN-WORD (PTR \"AUX\" BUF)\n\t<PUT ,OOPS-TABLE ,O-PTR .PTR>\n\t<COND (<VERB? SAY>\n\t       <TELL \"Nothing happens.\" CR>\n\t       <RFALSE>)>\n\t<TELL \"I don't know the word \\\"\">\n\t<WORD-PRINT <GETB <REST ,P-LEXV <SET BUF <* .PTR 2>>> 2>\n\t\t    <GETB <REST ,P-LEXV .BUF> 3>>\n\t<TELL \"\\\".\" CR>\n\t<SETG QUOTE-FLAG <>>\n\t<SETG P-OFLAG <>>>"
  },
  "CANT-USE": {
   "name": "CANT-USE",
   "file": "parser.zil",
   "line": 676,
   "endLine": 685,
   "source": "<ROUTINE CANT-USE (PTR \"AUX\" BUF)\n\t<COND (<VERB? SAY>\n\t       <TELL \"Nothing happens.\" CR>\n\t       <RFALSE>)>\n\t<TELL \"You used the word \\\"\">\n\t<WORD-PRINT <GETB <REST ,P-LEXV <SET BUF <* .PTR 2>>> 2>\n\t\t    <GETB <REST ,P-LEXV .BUF> 3>>\n\t<TELL \"\\\" in a way that I don't understand.\" CR>\n\t<SETG QUOTE-FLAG <>>\n\t<SETG P-OFLAG <>>>"
  },
  "GET-PREP": {
   "name": "GET-PREP",
   "file": "parser.zil",
   "line": 719,
   "endLine": 726,
   "source": "<ROUTINE GET-PREP (SYN WHICH \"AUX\" PREP)\n  <COND (<==? .WHICH 1>\n\t <SET PREP <GETB .SYN ,P-SPREP1>>)\n\t(T\n\t <SET PREP <GETB .SYN ,P-SPREP2>>)>\n  <COND (<0? <SET PREP <ANDB .PREP *77*>>> <>)\n\t(T\n\t <+ .PREP 192>)>>"
  },
  "SYNTAX-CHECK": {
   "name": "SYNTAX-CHECK",
   "file": "parser.zil",
   "line": 728,
   "endLine": 814,
   "source": "<ROUTINE SYNTAX-CHECK (\"AUX\" SYN LEN NUM OBJ\n\t\t       \t    (DRIVE1 <>) (DRIVE2 <>) PREP VERB TMP)\n\t<COND (<ZERO? <SET VERB <GET ,P-ITBL ,P-VERB>>>\n\t       <TELL \"There was no verb in that sentence!\" CR>\n\t       <RFALSE>)>\n\t<SET SYN <GET ,VERBS <- 255 .VERB>>>\n\t<SET LEN <GETB .SYN 0>>\n\t<SET SYN <REST .SYN>>\n\t<REPEAT ()\n\t\t<SET NUM <P-SONUMS .SYN>>\t;\"TAA\"\n\t\t;<SET NUM <BAND <GETB .SYN ,P-SBITS> ,P-SONUMS>>\n\t\t<COND (<G? ,P-NCN .NUM> T)\n\t\t      (<AND <G=? .NUM 1>\n\t\t\t    <ZERO? ,P-NCN>\n\t\t\t    <OR <ZERO? <SET PREP <GET ,P-ITBL ,P-PREP1>>>\n\t\t\t\t<EQUAL? .PREP <GET-PREP .SYN 1>\t;\"TAA\"\n\t\t\t\t\t      ;<GETB .SYN ,P-SPREP1>>>>\n\t\t       <SET DRIVE1 .SYN>)\n\t\t      (<EQUAL? <GET-PREP .SYN 1>\t;\"TAA\"\n\t\t\t       ;<GETB .SYN ,P-SPREP1> <GET ,P-ITBL ,P-PREP1>>\n\t\t       <COND (<AND <EQUAL? .NUM 2> <EQUAL? ,P-NCN 1>>\n\t\t\t      <SET DRIVE2 .SYN>)\n\t\t\t     (<OR <L=? .NUM 1>\t;\"TAA\"\n\t\t\t\t  <EQUAL? <GET-PREP .SYN 2>\n\t\t\t\t\t  ;<GETB .SYN ,P-SPREP2>\n\t\t\t\t\t  <GET ,P-ITBL ,P-PREP2>>>\n\t\t\t      <SYNTAX-FOUND .SYN>\n\t\t\t      <RTRUE>)>)>\n\t\t<COND (<DLESS? LEN 1>\n\t\t       <COND (<OR .DRIVE1 .DRIVE2> <RETURN>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"That sentence isn't one I recognize.\" CR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T \n\t\t       <COND (<0? .NUM>\t\t;\"TAA\"\n\t\t\t      <SET SYN <REST .SYN ,P-SYNLEN-0>>)\n\t\t\t     (<1? .NUM>\n\t\t\t      <SET SYN <REST .SYN ,P-SYNLEN-1>>)\n\t\t\t     (T\n\t\t\t      <SET SYN <REST .SYN ,P-SYNLEN-2>>)>\n\t\t       ;<SET SYN <REST .SYN ,P-SYNLEN>>)>>\n\t<COND (<AND .DRIVE1\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE1 ,P-SFWIM1>\n\t\t\t       <GETB .DRIVE1 ,P-SLOC1>\n\t\t\t       <GET-PREP .DRIVE1 1>\t;\"TAA\"\n\t\t\t       ;<GETB .DRIVE1 ,P-SPREP1>>>>\n\t       <PUT ,P-PRSO ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSO 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE1>)\n\t      (<AND .DRIVE2\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE2 ,P-SFWIM2>\n\t\t\t       <GETB .DRIVE2 ,P-SLOC2>\n\t\t\t       <GET-PREP .DRIVE2 2>\n\t\t\t       ;<GETB .DRIVE2 ,P-SPREP2>>>>\n\t       <PUT ,P-PRSI ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSI 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE2>)\n\t      (<EQUAL? .VERB ,ACT?FIND>\n\t       <TELL \"That question can't be answered.\" CR>\n\t       <RFALSE>)\n\t      (<NOT <EQUAL? ,WINNER ,ADVENTURER>>\n\t       <CANT-ORPHAN>)\n\t      (T\n\t       <ORPHAN .DRIVE1 .DRIVE2>\n\t       <TELL \"What do you want to \">\n\t       <SET TMP <GET ,P-OTBL ,P-VERBN>>\n\t       <COND (<EQUAL? .TMP 0> <TELL \"tell\">)\n\t\t     (<ZERO? <GETB ,P-VTBL 2>>\n\t\t      <PRINTB <GET .TMP 0>>)\n\t\t     (T\n\t\t      <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>\n\t\t      <PUTB ,P-VTBL 2 0>)>\n\t       <COND (.DRIVE2\n\t\t      <TELL \" \">\n\t\t      <THING-PRINT T T>)>\n\t       <SETG P-OFLAG T>\n\t       <PREP-PRINT <COND (.DRIVE1\n\t\t\t\t  <GET-PREP .DRIVE1 1>\t;\"TAA\"\n\t\t\t\t  ;<GETB .DRIVE1 ,P-SPREP1>)\n\t\t\t\t (T\n\t\t\t\t  <GET-PREP .DRIVE2 2>\t;\"TAA\"\n\t\t\t\t  ;<GETB .DRIVE2 ,P-SPREP2>)>>\n\t       <TELL \"?\" CR>\n\t       <RFALSE>)>>"
  },
  "CANT-ORPHAN": {
   "name": "CANT-ORPHAN",
   "file": "parser.zil",
   "line": 816,
   "endLine": 818,
   "source": "<ROUTINE CANT-ORPHAN ()\n\t <TELL \"\\\"I don't understand! What are you referring to?\\\"\" CR>\n\t <RFALSE>>"
  },
  "ORPHAN": {
   "name": "ORPHAN",
   "file": "parser.zil",
   "line": 821,
   "endLine": 851,
   "source": "<ROUTINE ORPHAN (D1 D2 \"AUX\" (CNT -1))\n\t<COND (<NOT ,P-MERGED>\n\t       <PUT ,P-OCLAUSE ,P-MATCHLEN 0>)>\n\t<PUT ,P-OVTBL 0 <GET ,P-VTBL 0>>\n\t<PUTB ,P-OVTBL 2 <GETB ,P-VTBL 2>>\n\t<PUTB ,P-OVTBL 3 <GETB ,P-VTBL 3>>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT ,P-ITBLLEN> <RETURN>)\n\t\t      (T <PUT ,P-OTBL .CNT <GET ,P-ITBL .CNT>>)>>\n\t<COND (<EQUAL? ,P-NCN 2>\n\t       <PUT ,P-CCTBL ,CC-SBPTR ,P-NC2>\n\t       <PUT ,P-CCTBL ,CC-SEPTR ,P-NC2L>\n\t       <PUT ,P-CCTBL ,CC-DBPTR ,P-NC2>\n\t       <PUT ,P-CCTBL ,CC-DEPTR ,P-NC2L>\n\t       <CLAUSE-COPY ,P-ITBL ,P-OTBL>)>\n\t<COND (<NOT <L? ,P-NCN 1>>\n\t       <PUT ,P-CCTBL ,CC-SBPTR ,P-NC1>\n\t       <PUT ,P-CCTBL ,CC-SEPTR ,P-NC1L>\n\t       <PUT ,P-CCTBL ,CC-DBPTR ,P-NC1>\n\t       <PUT ,P-CCTBL ,CC-DEPTR ,P-NC1L>\n\t       <CLAUSE-COPY ,P-ITBL ,P-OTBL>)>\n\t<COND (.D1\n\t       <PUT ,P-OTBL ,P-PREP1\n\t\t    <GET-PREP .D1 1>\t;\"TAA\"\n\t\t    ;<GETB .D1 ,P-SPREP1>>\n\t       <PUT ,P-OTBL ,P-NC1 1>)\n\t      (.D2\n\t       <PUT ,P-OTBL ,P-PREP2\n\t\t    <GET-PREP .D2 2>\n\t\t    ;<GETB .D2 ,P-SPREP2>>\n\t       <PUT ,P-OTBL ,P-NC2 1>)>>"
  },
  "THING-PRINT": {
   "name": "THING-PRINT",
   "file": "parser.zil",
   "line": 856,
   "endLine": 863,
   "source": "<ROUTINE THING-PRINT (PRSO? \"OPTIONAL\" (THE? <>) \"AUX\" BEG END)\n\t <COND (.PRSO?\n\t\t<SET BEG <GET ,P-ITBL ,P-NC1>>\n\t\t<SET END <GET ,P-ITBL ,P-NC1L>>)\n\t       (ELSE\n\t\t<SET BEG <GET ,P-ITBL ,P-NC2>>\n\t\t<SET END <GET ,P-ITBL ,P-NC2L>>)>\n\t <BUFFER-PRINT .BEG .END .THE?>>"
  },
  "BUFFER-PRINT": {
   "name": "BUFFER-PRINT",
   "file": "parser.zil",
   "line": 865,
   "endLine": 895,
   "source": "<ROUTINE BUFFER-PRINT (BEG END CP\n\t\t       \"AUX\" (NOSP T) WRD (FIRST?? T) (PN <>) (Q? <>))\n\t <REPEAT ()\n\t\t<COND (<EQUAL? .BEG .END> <RETURN>)\n\t\t      (T\n\t\t       <SET WRD <GET .BEG 0>>\n\t\t       <COND ;(<EQUAL? .WRD ,W?$BUZZ> T)\n\t\t\t     (<EQUAL? .WRD ,W?COMMA>\n\t\t\t      <TELL \", \">)\n\t\t\t     (.NOSP <SET NOSP <>>)\n\t\t\t     (ELSE <TELL \" \">)>\n\t\t       <COND (<EQUAL? .WRD ,W?PERIOD ,W?COMMA>\n\t\t\t      <SET NOSP T>)\n\t\t\t     (<EQUAL? .WRD ,W?ME>\n\t\t\t      <PRINTD ,ME>\n\t\t\t      <SET PN T>)\n\t\t\t     (<EQUAL? .WRD ,W?INTNUM>\n\t\t\t      <PRINTN ,P-NUMBER>\n\t\t\t      <SET PN T>)\n\t\t\t     (T\n\t\t\t      <COND (<AND .FIRST?? <NOT .PN> .CP>\n\t\t\t\t     <TELL \"the \">)>\n\t\t\t      <COND (<OR ,P-OFLAG ,P-MERGED> <PRINTB .WRD>)\n\t\t\t\t    (<AND <EQUAL? .WRD ,W?IT>\n\t\t\t\t\t  <ACCESSIBLE? ,P-IT-OBJECT>>\n\t\t\t\t     <PRINTD ,P-IT-OBJECT>)\n\t\t\t\t    (T\n\t\t\t\t     <WORD-PRINT <GETB .BEG 2>\n\t\t\t\t\t\t <GETB .BEG 3>>)>\n\t\t\t      <SET FIRST?? <>>)>)>\n\t\t<SET BEG <REST .BEG ,P-WORDLEN>>>>"
  },
  "PREP-PRINT": {
   "name": "PREP-PRINT",
   "file": "parser.zil",
   "line": 897,
   "endLine": 904,
   "source": "<ROUTINE PREP-PRINT (PREP \"AUX\" WRD)\n\t<COND (<NOT <ZERO? .PREP>>\n\t       <TELL \" \">\n\t       <COND ;(<EQUAL? .PREP ,PR?THROUGH>\n\t\t      <TELL \"through\">)\n\t\t     (T\n\t\t      <SET WRD <PREP-FIND .PREP>>\n\t\t      <PRINTB .WRD>)>)>>"
  },
  "CLAUSE-COPY": {
   "name": "CLAUSE-COPY",
   "file": "parser.zil",
   "line": 906,
   "endLine": 925,
   "source": "<ROUTINE CLAUSE-COPY (SRC DEST \"OPTIONAL\" (INSRT <>) \"AUX\" BEG END)\n\t<SET BEG <GET .SRC <GET ,P-CCTBL ,CC-SBPTR>>>\n\t<SET END <GET .SRC <GET ,P-CCTBL ,CC-SEPTR>>>\n\t<PUT .DEST\n\t     <GET ,P-CCTBL ,CC-DBPTR>\n\t     <REST ,P-OCLAUSE\n\t\t   <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN> 2>>>\n\t<REPEAT ()\n\t\t<COND (<EQUAL? .BEG .END>\n\t\t       <PUT .DEST\n\t\t\t    <GET ,P-CCTBL ,CC-DEPTR>\n\t\t\t    <REST ,P-OCLAUSE\n\t\t\t\t  <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN>\n\t\t\t\t     2>>>\n\t\t       <RETURN>)\n\t\t      (T\n\t\t       <COND (<AND .INSRT <EQUAL? ,P-ANAM <GET .BEG 0>>>\n\t\t\t      <CLAUSE-ADD .INSRT>)>\n\t\t       <CLAUSE-ADD <GET .BEG 0>>)>\n\t\t<SET BEG <REST .BEG ,P-WORDLEN>>>>"
  },
  "CLAUSE-ADD": {
   "name": "CLAUSE-ADD",
   "file": "parser.zil",
   "line": 928,
   "endLine": 932,
   "source": "<ROUTINE CLAUSE-ADD (WRD \"AUX\" PTR)\n\t<SET PTR <+ <GET ,P-OCLAUSE ,P-MATCHLEN> 2>>\n\t<PUT ,P-OCLAUSE <- .PTR 1> .WRD>\n\t<PUT ,P-OCLAUSE .PTR 0>\n\t<PUT ,P-OCLAUSE ,P-MATCHLEN .PTR>>"
  },
  "PREP-FIND": {
   "name": "PREP-FIND",
   "file": "parser.zil",
   "line": 934,
   "endLine": 939,
   "source": "<ROUTINE PREP-FIND (PREP \"AUX\" (CNT 0) SIZE)\n\t<SET SIZE <* <GET ,PREPOSITIONS 0> 2>>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT .SIZE> <RFALSE>)\n\t\t      (<EQUAL? <GET ,PREPOSITIONS .CNT> .PREP>\n\t\t       <RETURN <GET ,PREPOSITIONS <- .CNT 1>>>)>>>"
  },
  "SYNTAX-FOUND": {
   "name": "SYNTAX-FOUND",
   "file": "parser.zil",
   "line": 941,
   "endLine": 943,
   "source": "<ROUTINE SYNTAX-FOUND (SYN)\n\t<SETG P-SYNTAX .SYN>\n\t<SETG PRSA <GETB .SYN ,P-SACTION>>>"
  },
  "GWIM": {
   "name": "GWIM",
   "file": "parser.zil",
   "line": 947,
   "endLine": 972,
   "source": "<ROUTINE GWIM (GBIT LBIT PREP \"AUX\" OBJ)\n\t<COND (<EQUAL? .GBIT ,RLANDBIT>\n\t       <RETURN ,ROOMS>)>\n\t<SETG P-GWIMBIT .GBIT>\n\t<SETG P-SLOCBITS .LBIT>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<COND (<GET-OBJECT ,P-MERGE <>>\n\t       <SETG P-GWIMBIT 0>\n\t       <COND (<EQUAL? <GET ,P-MERGE ,P-MATCHLEN> 1>\n\t\t      <SET OBJ <GET ,P-MERGE 1>>\n\t\t      <TELL \"(\">\n\t\t      <COND (<AND <NOT <ZERO? .PREP>>\n\t\t\t\t  <NOT ,P-END-ON-PREP>>\n\t\t\t     <PRINTB <SET PREP <PREP-FIND .PREP>>>\n\t\t\t     <COND (<EQUAL? .PREP ,W?OUT>\n\t\t\t\t    <TELL \" of\">)>\n\t\t\t     <TELL \" \">\n\t\t\t     <COND (<EQUAL? .OBJ ,HANDS>\n\t\t\t\t    <TELL \"your hands\">)\n\t\t\t\t   (T\n\t\t\t\t    <TELL \"the \" D .OBJ>)>\n\t\t\t     <TELL \")\" CR>)\n\t\t\t    (ELSE\n\t\t\t     <TELL D .OBJ \")\" CR>)>\n\t\t      .OBJ)>)\n\t      (T <SETG P-GWIMBIT 0> <RFALSE>)>>"
  },
  "SNARF-OBJECTS": {
   "name": "SNARF-OBJECTS",
   "file": "parser.zil",
   "line": 974,
   "endLine": 989,
   "source": "<ROUTINE SNARF-OBJECTS (\"AUX\" OPTR IPTR L)\n\t <PUT ,P-BUTS ,P-MATCHLEN 0>\n\t <COND (<NOT <EQUAL? <SET IPTR <GET ,P-ITBL ,P-NC2>> 0>>\n\t\t<SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC2>>\n\t\t<OR <SNARFEM .IPTR <GET ,P-ITBL ,P-NC2L> ,P-PRSI> <RFALSE>>)>\n\t <COND (<NOT <EQUAL? <SET OPTR <GET ,P-ITBL ,P-NC1>> 0>>\n\t\t<SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC1>>\n\t\t<OR <SNARFEM .OPTR <GET ,P-ITBL ,P-NC1L> ,P-PRSO> <RFALSE>>)>\n\t <COND (<NOT <ZERO? <GET ,P-BUTS ,P-MATCHLEN>>>\n\t\t<SET L <GET ,P-PRSO ,P-MATCHLEN>>\n\t\t<COND (.OPTR <SETG P-PRSO <BUT-MERGE ,P-PRSO>>)>\n\t\t<COND (<AND .IPTR\n\t\t\t    <OR <NOT .OPTR>\n\t\t\t\t<EQUAL? .L <GET ,P-PRSO ,P-MATCHLEN>>>>\n\t\t       <SETG P-PRSI <BUT-MERGE ,P-PRSI>>)>)>\n\t <RTRUE>>"
  },
  "BUT-MERGE": {
   "name": "BUT-MERGE",
   "file": "parser.zil",
   "line": 991,
   "endLine": 1004,
   "source": "<ROUTINE BUT-MERGE (TBL \"AUX\" LEN BUTLEN (CNT 1) (MATCHES 0) OBJ NTBL)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<REPEAT ()\n\t\t<COND (<DLESS? LEN 0> <RETURN>)\n\t\t      (<ZMEMQ <SET OBJ <GET .TBL .CNT>> ,P-BUTS>)\n\t\t      (T\n\t\t       <PUT ,P-MERGE <+ .MATCHES 1> .OBJ>\n\t\t       <SET MATCHES <+ .MATCHES 1>>)>\n\t\t<SET CNT <+ .CNT 1>>>\n\t<PUT ,P-MERGE ,P-MATCHLEN .MATCHES>\n\t<SET NTBL ,P-MERGE>\n\t<SETG P-MERGE .TBL>\n\t.NTBL>"
  },
  "SNARFEM": {
   "name": "SNARFEM",
   "file": "parser.zil",
   "line": 1024,
   "endLine": 1076,
   "source": "<ROUTINE SNARFEM (PTR EPTR TBL \"AUX\" (BUT <>) LEN WV WRD NW (WAS-ALL <>))\n   <SETG P-AND <>>\n   <COND (<EQUAL? ,P-GETFLAGS ,P-ALL>\n\t  <SET WAS-ALL T>)>\n   <SETG P-GETFLAGS 0>\n   <PUT .TBL ,P-MATCHLEN 0>\n   <SET WRD <GET .PTR 0>>\n   <REPEAT ()\n\t   <COND (<EQUAL? .PTR .EPTR>\n\t\t  <SET WV <GET-OBJECT <OR .BUT .TBL>>>\n\t\t  <COND (.WAS-ALL <SETG P-GETFLAGS ,P-ALL>)>\n\t\t  <RETURN .WV>)\n\t\t (T\n\t\t  <COND (<==? .EPTR <REST .PTR ,P-WORDLEN>>\n\t\t\t <SET NW 0>)\n\t\t\t(T <SET NW <GET .PTR ,P-LEXELEN>>)>\n\t\t  <COND (<EQUAL? .WRD ,W?ALL ;,W?BOTH>\n\t\t\t <SETG P-GETFLAGS ,P-ALL>\n\t\t\t <COND (<EQUAL? .NW ,W?OF>\n\t\t\t\t<SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t(<EQUAL? .WRD ,W?BUT ,W?EXCEPT>\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t <SET BUT ,P-BUTS>\n\t\t\t <PUT .BUT ,P-MATCHLEN 0>)\n\t\t\t(<EQUAL? .WRD ,W?A ,W?ONE>\n\t\t\t <COND (<NOT ,P-ADJ>\n\t\t\t\t<SETG P-GETFLAGS ,P-ONE>\n\t\t\t\t<COND (<EQUAL? .NW ,W?OF>\n\t\t\t\t       <SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t       (T\n\t\t\t\t<SETG P-NAM ,P-ONEOBJ>\n\t\t\t\t<OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t\t<AND <ZERO? .NW> <RTRUE>>)>)\n\t\t\t(<AND <EQUAL? .WRD ,W?AND ,W?COMMA>\n\t\t\t      <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t <SETG P-AND T>\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t T)\n\t\t\t(<WT? .WRD ,PS?BUZZ-WORD>)\n\t\t\t(<EQUAL? .WRD ,W?AND ,W?COMMA>)\n\t\t\t(<EQUAL? .WRD ,W?OF>\n\t\t\t <COND (<ZERO? ,P-GETFLAGS>\n\t\t\t\t<SETG P-GETFLAGS ,P-INHIBIT>)>)\n\t\t\t(<AND <SET WV <WT? .WRD ,PS?ADJECTIVE ,P1?ADJECTIVE>>\n\t\t\t      <NOT ,P-ADJ>>\n\t\t\t <SETG P-ADJ .WV>\n\t\t\t <SETG P-ADJN .WRD>)\n\t\t\t(<WT? .WRD ,PS?OBJECT ,P1?OBJECT>\n\t\t\t <SETG P-NAM .WRD>\n\t\t\t <SETG P-ONEOBJ .WRD>)>)>\n\t   <COND (<NOT <EQUAL? .PTR .EPTR>>\n\t\t  <SET PTR <REST .PTR ,P-WORDLEN>>\n\t\t  <SET WRD .NW>)>>>"
  },
  "GET-OBJECT": {
   "name": "GET-OBJECT",
   "file": "parser.zil",
   "line": 1086,
   "endLine": 1177,
   "source": "<ROUTINE GET-OBJECT (TBL\n\t\t     \"OPTIONAL\" (VRB T)\n\t\t     \"AUX\" BITS LEN XBITS TLEN (GCHECK <>) (OLEN 0) OBJ)\n\t <SET XBITS ,P-SLOCBITS>\n\t <SET TLEN <GET .TBL ,P-MATCHLEN>>\n\t <COND (<BTST ,P-GETFLAGS ,P-INHIBIT> <RTRUE>)>\n\t <COND (<AND <NOT ,P-NAM> ,P-ADJ>\n\t\t<COND (<WT? ,P-ADJN ,PS?OBJECT ,P1?OBJECT>\n\t\t       <SETG P-NAM ,P-ADJN>\n\t\t       <SETG P-ADJ <>>)>)>\n\t <COND (<AND <NOT ,P-NAM>\n\t\t     <NOT ,P-ADJ>\n\t\t     <NOT <EQUAL? ,P-GETFLAGS ,P-ALL>>\n\t\t     <ZERO? ,P-GWIMBIT>>\n\t\t<COND (.VRB\n\t\t       <TELL\n\"There seems to be a noun missing in that sentence!\" CR>)>\n\t\t<RFALSE>)>\n\t <COND (<OR <NOT <EQUAL? ,P-GETFLAGS ,P-ALL>> <ZERO? ,P-SLOCBITS>>\n\t\t<SETG P-SLOCBITS -1>)>\n\t <SETG P-TABLE .TBL>\n\t <PROG ()\n\t       <COND (.GCHECK <GLOBAL-CHECK .TBL>)\n\t\t     (T\n\t\t      <COND (,LIT\n\t\t\t     <FCLEAR ,ADVENTURER ,TRANSBIT>\n\t\t\t     <DO-SL ,HERE ,SOG ,SIR>\n\t\t\t     <FSET ,ADVENTURER ,TRANSBIT>)>\n\t\t      <DO-SL ,ADVENTURER ,SH ,SC>)>\n\t       <SET LEN <- <GET .TBL ,P-MATCHLEN> .TLEN>>\n\t       <COND (<BTST ,P-GETFLAGS ,P-ALL>)\n\t\t     (<AND <BTST ,P-GETFLAGS ,P-ONE>\n\t\t\t   <NOT <ZERO? .LEN>>>\n\t\t      <COND (<NOT <EQUAL? .LEN 1>>\n\t\t\t     <PUT .TBL 1 <GET .TBL <RANDOM .LEN>>>\n\t\t\t     <TELL \"(How about the \">\n\t\t\t     <PRINTD <GET .TBL 1>>\n\t\t\t     <TELL \"?)\" CR>)>\n\t\t      <PUT .TBL ,P-MATCHLEN 1>)\n\t\t     (<OR <G? .LEN 1>\n\t\t\t  <AND <ZERO? .LEN> <NOT <EQUAL? ,P-SLOCBITS -1>>>>\n\t\t      <COND (<EQUAL? ,P-SLOCBITS -1>\n\t\t\t     <SETG P-SLOCBITS .XBITS>\n\t\t\t     <SET OLEN .LEN>\n\t\t\t     <PUT .TBL\n\t\t\t\t  ,P-MATCHLEN\n\t\t\t\t  <- <GET .TBL ,P-MATCHLEN> .LEN>>\n\t\t\t     <AGAIN>)\n\t\t\t    (T\n\t\t\t     <COND (<ZERO? .LEN> <SET LEN .OLEN>)>\n\t\t\t     <COND (<NOT <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t\t\t    <CANT-ORPHAN>\n\t\t\t\t    <RFALSE>)\n\t\t\t\t   (<AND .VRB ,P-NAM>\n\t\t\t\t    <WHICH-PRINT .TLEN .LEN .TBL>\n\t\t\t\t    <SETG P-ACLAUSE\n\t\t\t\t\t  <COND (<EQUAL? .TBL ,P-PRSO> ,P-NC1)\n\t\t\t\t\t\t(T ,P-NC2)>>\n\t\t\t\t    <SETG P-AADJ ,P-ADJ>\n\t\t\t\t    <SETG P-ANAM ,P-NAM>\n\t\t\t\t    <ORPHAN <> <>>\n\t\t\t\t    <SETG P-OFLAG T>)\n\t\t\t\t   (.VRB\n\t\t\t\t    <TELL\n\"There seems to be a noun missing in that sentence!\" CR>)>\n\t\t\t     <SETG P-NAM <>>\n\t\t\t     <SETG P-ADJ <>>\n\t\t\t     <RFALSE>)>)>\n\t       <COND (<AND <ZERO? .LEN> .GCHECK>\n\t\t      <COND (.VRB\n\t\t\t     ;\"next added 1/2/85 by JW\"\n\t\t\t     <SETG P-SLOCBITS .XBITS>\n\t\t\t     <COND (<OR ,LIT <VERB? TELL ;WHERE ;WHAT ;WHO>>\n\t\t\t\t    ;\"Changed 6/10/83 - MARC\"\n\t\t\t\t    <OBJ-FOUND ,NOT-HERE-OBJECT .TBL>\n\t\t\t\t    <SETG P-XNAM ,P-NAM>\n\t\t\t\t    <SETG P-XADJ ,P-ADJ>\n\t\t\t\t    <SETG P-XADJN ,P-ADJN>\n\t\t\t\t    <SETG P-NAM <>>\n\t\t\t\t    <SETG P-ADJ <>>\n\t\t\t\t    <SETG P-ADJN <>>\n\t\t\t\t    <RTRUE>)\n\t\t\t\t   (T\n\t\t\t\t    <TELL ,TOO-DARK CR>)>)>\n\t\t      <SETG P-NAM <>>\n\t\t      <SETG P-ADJ <>>\n\t\t      <RFALSE>)\n\t\t     (<ZERO? .LEN> <SET GCHECK T> <AGAIN>)>\n\t       <SETG P-SLOCBITS .XBITS>\n\t       <SETG P-NAM <>>\n\t       <SETG P-ADJ <>>\n\t       <RTRUE>>>"
  },
  "WHICH-PRINT": {
   "name": "WHICH-PRINT",
   "file": "parser.zil",
   "line": 1205,
   "endLine": 1225,
   "source": "<ROUTINE WHICH-PRINT (TLEN LEN TBL \"AUX\" OBJ RLEN)\n\t <SET RLEN .LEN>\n\t <TELL \"Which \">\n         <COND (<OR ,P-OFLAG ,P-MERGED ,P-AND>\n\t\t<PRINTB <COND (,P-NAM ,P-NAM)\n\t\t\t      (,P-ADJ ,P-ADJN)\n\t\t\t      (ELSE ,W?ONE)>>)\n\t       (ELSE\n\t\t<THING-PRINT <EQUAL? .TBL ,P-PRSO>>)>\n\t <TELL \" do you mean, \">\n\t <REPEAT ()\n\t\t <SET TLEN <+ .TLEN 1>>\n\t\t <SET OBJ <GET .TBL .TLEN>>\n\t\t <TELL \"the \" D .OBJ>\n\t\t <COND (<EQUAL? .LEN 2>\n\t\t        <COND (<NOT <EQUAL? .RLEN 2>> <TELL \",\">)>\n\t\t        <TELL \" or \">)\n\t\t       (<G? .LEN 2> <TELL \", \">)>\n\t\t <COND (<L? <SET LEN <- .LEN 1>> 1>\n\t\t        <TELL \"?\" CR>\n\t\t        <RETURN>)>>>"
  },
  "GLOBAL-CHECK": {
   "name": "GLOBAL-CHECK",
   "file": "parser.zil",
   "line": 1228,
   "endLine": 1259,
   "source": "<ROUTINE GLOBAL-CHECK (TBL \"AUX\" LEN RMG RMGL (CNT 0) OBJ OBITS FOO)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<SET OBITS ,P-SLOCBITS>\n\t<COND (<SET RMG <GETPT ,HERE ,P?GLOBAL>>\n\t       <SET RMGL <- <PTSIZE .RMG> 1>>\n\t       <REPEAT ()\n\t\t       <COND (<THIS-IT? <SET OBJ <GETB .RMG .CNT>> .TBL>\n\t\t\t      <OBJ-FOUND .OBJ .TBL>)>\n\t\t       <COND (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<SET RMG <GETPT ,HERE ,P?PSEUDO>>\n\t       <SET RMGL <- </ <PTSIZE .RMG> 4> 1>>\n\t       <SET CNT 0>\n\t       <REPEAT ()\n\t\t       <COND (<EQUAL? ,P-NAM <GET .RMG <* .CNT 2>>>\n\t\t\t      <PUTP ,PSEUDO-OBJECT\n\t\t\t\t    ,P?ACTION\n\t\t\t\t    <GET .RMG <+ <* .CNT 2> 1>>>\n\t\t\t      <SET FOO\n\t\t\t\t   <BACK <GETPT ,PSEUDO-OBJECT ,P?ACTION> 5>>\n\t\t\t      <PUT .FOO 0 <GET ,P-NAM 0>>\n\t\t\t      <PUT .FOO 1 <GET ,P-NAM 1>>\n\t\t\t      <OBJ-FOUND ,PSEUDO-OBJECT .TBL>\n\t\t\t      <RETURN>)\n\t\t             (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<EQUAL? <GET .TBL ,P-MATCHLEN> .LEN>\n\t       <SETG P-SLOCBITS -1>\n\t       <SETG P-TABLE .TBL>\n\t       <DO-SL ,GLOBAL-OBJECTS 1 1>\n\t       <SETG P-SLOCBITS .OBITS>\n\t       <COND (<AND <ZERO? <GET .TBL ,P-MATCHLEN>>\n\t\t\t   <EQUAL? ,PRSA ,V?LOOK-INSIDE ,V?SEARCH ,V?EXAMINE>>\n\t\t      <DO-SL ,ROOMS 1 1>)>)>>"
  },
  "DO-SL": {
   "name": "DO-SL",
   "file": "parser.zil",
   "line": 1261,
   "endLine": 1269,
   "source": "<ROUTINE DO-SL (OBJ BIT1 BIT2 \"AUX\" BTS)\n\t<COND (<BTST ,P-SLOCBITS <+ .BIT1 .BIT2>>\n\t       <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCALL>)\n\t      (T\n\t       <COND (<BTST ,P-SLOCBITS .BIT1>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCTOP>)\n\t\t     (<BTST ,P-SLOCBITS .BIT2>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCBOT>)\n\t\t     (T <RTRUE>)>)>>"
  },
  "SEARCH-LIST": {
   "name": "SEARCH-LIST",
   "file": "parser.zil",
   "line": 1275,
   "endLine": 1296,
   "source": "<ROUTINE SEARCH-LIST (OBJ TBL LVL \"AUX\" FLS NOBJ)\n\t<COND (<SET OBJ <FIRST? .OBJ>>\n\t       <REPEAT ()\n\t\t       <COND (<AND <NOT <EQUAL? .LVL ,P-SRCBOT>>\n\t\t\t\t   <GETPT .OBJ ,P?SYNONYM>\n\t\t\t\t   <THIS-IT? .OBJ .TBL>>\n\t\t\t      <OBJ-FOUND .OBJ .TBL>)>\n\t\t       <COND (<AND <OR <NOT <EQUAL? .LVL ,P-SRCTOP>>\n\t\t\t\t       <FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t       <FSET? .OBJ ,SURFACEBIT>>\n\t\t\t\t   <SET NOBJ <FIRST? .OBJ>>\n\t\t\t\t   <OR <FSET? .OBJ ,OPENBIT>\n\t\t\t\t       <FSET? .OBJ ,TRANSBIT>>>\n\t\t\t      <SET FLS\n\t\t\t\t   <SEARCH-LIST .OBJ\n\t\t\t\t\t\t.TBL\n\t\t\t\t\t\t<COND (<FSET? .OBJ ,SURFACEBIT>\n\t\t\t\t\t\t       ,P-SRCALL)\n\t\t\t\t\t\t      (<FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t\t\t       ,P-SRCALL)\n\t\t\t\t\t\t      (T ,P-SRCTOP)>>>)>\n\t\t       <COND (<SET OBJ <NEXT? .OBJ>>) (T <RETURN>)>>)>>"
  },
  "OBJ-FOUND": {
   "name": "OBJ-FOUND",
   "file": "parser.zil",
   "line": 1298,
   "endLine": 1301,
   "source": "<ROUTINE OBJ-FOUND (OBJ TBL \"AUX\" PTR)\n\t<SET PTR <GET .TBL ,P-MATCHLEN>>\n\t<PUT .TBL <+ .PTR 1> .OBJ>\n\t<PUT .TBL ,P-MATCHLEN <+ .PTR 1>>>"
  },
  "TAKE-CHECK": {
   "name": "TAKE-CHECK",
   "file": "parser.zil",
   "line": 1303,
   "endLine": 1311,
   "source": "<ROUTINE TAKE-CHECK (\"AUX\" N)\n\t<COND (<G? <SET N <P-SONUMS ,P-SYNTAX>> 0>\t;\"TAA\"\n\t       <COND (<ITAKE-CHECK ,P-PRSO <GETB ,P-SYNTAX ,P-SLOC1>>\n\t\t      <COND (<G? .N 1>\n\t\t\t     <ITAKE-CHECK ,P-PRSI <GETB ,P-SYNTAX ,P-SLOC2>>)\n\t\t\t    (T\n\t\t\t     <RTRUE>)>)>)\n\t      (T\n\t       <RTRUE>)>>"
  },
  "ITAKE-CHECK": {
   "name": "ITAKE-CHECK",
   "file": "parser.zil",
   "line": 1313,
   "endLine": 1354,
   "source": "<ROUTINE ITAKE-CHECK (TBL IBITS \"AUX\" PTR OBJ TAKEN)\n\t <COND (<AND <SET PTR <GET .TBL ,P-MATCHLEN>>\n\t\t     <OR <BTST .IBITS ,SHAVE>\n\t\t\t <BTST .IBITS ,STAKE>>>\n\t\t<REPEAT ()\n\t\t\t<COND (<L? <SET PTR <- .PTR 1>> 0> <RETURN>)\n\t\t\t      (T\n\t\t\t       <SET OBJ <GET .TBL <+ .PTR 1>>>\n\t\t\t       <COND (<EQUAL? .OBJ ,IT>\n\t\t\t\t      <COND (<NOT <ACCESSIBLE? ,P-IT-OBJECT>>\n\t\t\t\t\t     <TELL ,REFERRING>\n\t\t\t\t\t     <RFALSE>)\n\t\t\t\t\t    (T\n\t\t\t\t\t     <SET OBJ ,P-IT-OBJECT>)>)>\n\t\t\t       <COND (<AND <NOT <HELD? .OBJ>>\n\t\t\t\t\t   <NOT <EQUAL? .OBJ ,HANDS ,ME>>>\n\t\t\t\t      <SETG PRSO .OBJ>\n\t\t\t\t      <COND (<FSET? .OBJ ,TRYTAKEBIT>\n\t\t\t\t\t     <SET TAKEN T>)\n\t\t\t\t\t    (<NOT <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t\t\t\t     <SET TAKEN <>>)\n\t\t\t\t\t    (<AND <BTST .IBITS ,STAKE>\n\t\t\t\t\t\t  <EQUAL? <ITAKE <>> T>>\n\t\t\t\t\t     <SET TAKEN <>>)\n\t\t\t\t\t    (T <SET TAKEN T>)>\n\t\t\t\t      <COND (<AND .TAKEN\n\t\t\t\t\t\t  <BTST .IBITS ,SHAVE>\n\t\t\t\t\t\t  <EQUAL? ,WINNER\n\t\t\t\t\t\t\t  ,ADVENTURER>>\n\t\t\t\t\t     <COND (<EQUAL? .OBJ\n\t\t\t\t\t\t\t    ,NOT-HERE-OBJECT>\n\t\t\t\t\t\t    <TELL\n\"You don't have that!\" CR>\n\t\t\t\t\t\t    <RFALSE>)>\n\t\t\t\t\t     <TELL \"You don't have the \">\n\t\t\t\t\t     <PRINTD .OBJ>\n\t\t\t\t\t     <TELL ,PERIOD-CR>\n\t\t\t\t\t     <RFALSE>)\n\t\t\t\t\t    (<AND <NOT .TAKEN>\n\t\t\t\t\t\t  <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t\t\t\t     <TELL \"(Taken)\" CR>)>)>)>>)\n\t       (T)>>"
  },
  "MANY-CHECK": {
   "name": "MANY-CHECK",
   "file": "parser.zil",
   "line": 1356,
   "endLine": 1375,
   "source": "<ROUTINE MANY-CHECK (\"AUX\" (LOSS <>) TMP)\n\t<COND (<AND <G? <GET ,P-PRSO ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC1> ,SMANY>>>\n\t       <SET LOSS 1>)\n\t      (<AND <G? <GET ,P-PRSI ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC2> ,SMANY>>>\n\t       <SET LOSS 2>)>\n\t<COND (.LOSS\n\t       <TELL \"You can't use multiple \">\n\t       <COND (<EQUAL? .LOSS 2> <TELL \"in\">)>\n\t       <TELL \"direct objects with \\\"\">\n\t       <SET TMP <GET ,P-ITBL ,P-VERBN>>\n\t       <COND (<ZERO? .TMP> <TELL \"tell\">)\n\t\t     (<OR ,P-OFLAG ,P-MERGED>\n\t\t      <PRINTB <GET .TMP 0>>)\n\t\t     (T\n\t\t      <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>)>\n\t       <TELL \"\\\".\" CR>\n\t       <RFALSE>)\n\t      (T)>>"
  },
  "ZMEMQ": {
   "name": "ZMEMQ",
   "file": "parser.zil",
   "line": 1377,
   "endLine": 1384,
   "source": "<ROUTINE ZMEMQ (ITM TBL \"OPTIONAL\" (SIZE -1) \"AUX\" (CNT 1))\n\t<COND (<NOT .TBL> <RFALSE>)>\n\t<COND (<NOT <L? .SIZE 0>> <SET CNT 0>)\n\t      (ELSE <SET SIZE <GET .TBL 0>>)>\n\t<REPEAT ()\n\t\t<COND (<EQUAL? .ITM <GET .TBL .CNT>>\n\t\t       <RETURN <REST .TBL <* .CNT 2>>>)\n\t\t      (<IGRTR? CNT .SIZE> <RFALSE>)>>>"
  },
  "ZMEMQB": {
   "name": "ZMEMQB",
   "file": "parser.zil",
   "line": 1386,
   "endLine": 1391,
   "source": "<ROUTINE ZMEMQB (ITM TBL SIZE \"AUX\" (CNT 0))\n\t<REPEAT ()\n\t\t<COND (<EQUAL? .ITM <GETB .TBL .CNT>>\n\t\t       <RTRUE>)\n\t\t      (<IGRTR? CNT .SIZE>\n\t\t       <RFALSE>)>>>"
  },
  "LIT?": {
   "name": "LIT?",
   "file": "parser.zil",
   "line": 1395,
   "endLine": 1417,
   "source": "<ROUTINE LIT? (RM \"OPTIONAL\" (RMBIT T) \"AUX\" OHERE (LIT <>))\n\t<COND (<AND ,ALWAYS-LIT <EQUAL? ,WINNER ,ADVENTURER>>\n\t       <RTRUE>)>\n\t<SETG P-GWIMBIT ,ONBIT>\n\t<SET OHERE ,HERE>\n\t<SETG HERE .RM>\n\t<COND (<AND .RMBIT\n\t\t    <FSET? .RM ,ONBIT>>\n\t       <SET LIT T>)\n\t      (T\n\t       <PUT ,P-MERGE ,P-MATCHLEN 0>\n\t       <SETG P-TABLE ,P-MERGE>\n\t       <SETG P-SLOCBITS -1>\n\t       <COND (<EQUAL? .OHERE .RM>\n\t\t      <DO-SL ,WINNER 1 1>\n\t\t      <COND (<AND <NOT <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t\t\t  <IN? ,ADVENTURER .RM>>\n\t\t\t     <DO-SL ,ADVENTURER 1 1>)>)>\n\t       <DO-SL .RM 1 1>\n\t       <COND (<G? <GET ,P-TABLE ,P-MATCHLEN> 0> <SET LIT T>)>)>\n\t<SETG HERE .OHERE>\n\t<SETG P-GWIMBIT 0>\n\t.LIT>"
  },
  "THIS-IT?": {
   "name": "THIS-IT?",
   "file": "parser.zil",
   "line": 1433,
   "endLine": 1446,
   "source": "<ROUTINE THIS-IT? (OBJ TBL \"AUX\" SYNS)\n <COND (<FSET? .OBJ ,INVISIBLE> <RFALSE>)\n       (<AND ,P-NAM\n\t     <NOT <ZMEMQ ,P-NAM\n\t\t\t <SET SYNS <GETPT .OBJ ,P?SYNONYM>>\n\t\t\t <- </ <PTSIZE .SYNS> 2> 1>>>>\n\t<RFALSE>)\n       (<AND ,P-ADJ\n\t     <OR <NOT <SET SYNS <GETPT .OBJ ,P?ADJECTIVE>>>\n\t\t <NOT <ZMEMQB ,P-ADJ .SYNS <- <PTSIZE .SYNS> 1>>>>>\n\t<RFALSE>)\n       (<AND <NOT <ZERO? ,P-GWIMBIT>> <NOT <FSET? .OBJ ,P-GWIMBIT>>>\n\t<RFALSE>)>\n <RTRUE>>"
  },
  "ACCESSIBLE?": {
   "name": "ACCESSIBLE?",
   "file": "parser.zil",
   "line": 1448,
   "endLine": 1472,
   "source": "<ROUTINE ACCESSIBLE? (OBJ \"AUX\" (L <LOC .OBJ>)) ;\"can player TOUCH object?\"\n\t ;\"revised 5/2/84 by SEM and SWG\"\n\t <COND (<FSET? .OBJ ,INVISIBLE>\n\t\t<RFALSE>)\n\t       ;(<EQUAL? .OBJ ,PSEUDO-OBJECT>\n\t\t<COND (<EQUAL? ,LAST-PSEUDO-LOC ,HERE>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <RFALSE>)>)\n\t       (<NOT .L>\n\t\t<RFALSE>)\n\t       (<EQUAL? .L ,GLOBAL-OBJECTS>\n\t\t<RTRUE>)\n\t       (<AND <EQUAL? .L ,LOCAL-GLOBALS>\n\t\t     <GLOBAL-IN? .OBJ ,HERE>>\n\t\t<RTRUE>)\n\t       (<NOT <EQUAL? <META-LOC .OBJ> ,HERE <LOC ,WINNER>>>\n\t\t<RFALSE>)\n\t       (<EQUAL? .L ,WINNER ,HERE <LOC ,WINNER>>\n\t\t<RTRUE>)\n\t       (<AND <FSET? .L ,OPENBIT>\n\t\t     <ACCESSIBLE? .L>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "META-LOC": {
   "name": "META-LOC",
   "file": "parser.zil",
   "line": 1474,
   "endLine": 1483,
   "source": "<ROUTINE META-LOC (OBJ)\n\t <REPEAT ()\n\t\t <COND (<NOT .OBJ>\n\t\t\t<RFALSE>)\n\t\t       (<IN? .OBJ ,GLOBAL-OBJECTS>\n\t\t\t<RETURN ,GLOBAL-OBJECTS>)>\n\t\t <COND (<IN? .OBJ ,ROOMS>\n\t\t\t<RETURN .OBJ>)\n\t\t       (T\n\t\t\t<SET OBJ <LOC .OBJ>>)>>>"
  },
  "FORMAL-GARDEN-F": {
   "name": "FORMAL-GARDEN-F",
   "file": "princess.zil",
   "line": 19,
   "endLine": 21,
   "source": "<ROUTINE FORMAL-GARDEN-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<ENABLE <QUEUE I-GARDEN -1>>)>>"
  },
  "I-GARDEN": {
   "name": "I-GARDEN",
   "file": "princess.zil",
   "line": 23,
   "endLine": 42,
   "source": "<ROUTINE I-GARDEN ()\n\t <COND (<EQUAL? ,HERE ,FORMAL-GARDEN>\n\t\t<COND (<AND <IN? ,UNICORN ,FORMAL-GARDEN>\n\t\t\t    <PROB 33>>\n\t\t       <REMOVE ,UNICORN>\n\t\t       <TELL \"The unicorn bounds lightly away.\" CR>)\n\t\t      (<AND <IN? ,PRINCESS ,DRAGON-LAIR>\n\t\t\t    <NOT <IN? ,UNICORN ,FORMAL-GARDEN>>\n\t\t\t    <PROB 25>>\n\t\t       <COND (,UNICORN-FRIGHTENED\n\t\t\t      <SETG UNICORN-FRIGHTENED <>>\n\t\t\t      <RFALSE>)>\n\t\t       <MOVE ,UNICORN ,FORMAL-GARDEN>\n\t\t       <TELL\n\"A beautiful unicorn is peacefully cropping grass across the garden. A gold\nkey hangs from a red satin ribbon around its neck.\">)>)\n\t       (T\n\t\t<REMOVE ,UNICORN>\n\t\t<DISABLE <INT I-GARDEN>>\n\t\t<RFALSE>)>>"
  },
  "UNICORN-F": {
   "name": "UNICORN-F",
   "file": "princess.zil",
   "line": 54,
   "endLine": 64,
   "source": "<ROUTINE UNICORN-F ()\n\t <COND (<HELLO? ,UNICORN>\n\t\t<TELL \"The unicorn continues cropping grass.\" CR>)\n\t       (<VERB? FOLLOW>\n\t\t<TELL \"The unicorn shies away as you near.\" CR>)\n\t       (<VERB? TAKE PUT RUB MUNG ATTACK>\n\t\t<REMOVE ,UNICORN>\n\t\t<SETG UNICORN-FRIGHTENED T>\n\t\t<TELL\n\"The unicorn, unsurprised to discover that you are indeed the uncouth sort\nit suspected you were, melts into the hedges and is gone.\" CR>)>>"
  },
  "GAZEBO-OBJECT-F": {
   "name": "GAZEBO-OBJECT-F",
   "file": "princess.zil",
   "line": 102,
   "endLine": 110,
   "source": "<ROUTINE GAZEBO-OBJECT-F ()\n\t <COND (<VERB? ENTER>\n\t\t<COND (<EQUAL? ,HERE ,FORMAL-GARDEN>\n\t\t       <DO-WALK ,P?IN>)\n\t\t      (T\n\t\t       <TELL ,LOOK-AROUND>)>)\n\t       (<AND <EQUAL? ,HERE ,GAZEBO>\n\t\t     <VERB? LEAVE EXIT>>\n\t\t<DO-WALK ,P?OUT>)>>"
  },
  "NEWSPAPER-F": {
   "name": "NEWSPAPER-F",
   "file": "princess.zil",
   "line": 127,
   "endLine": 132,
   "source": "<ROUTINE NEWSPAPER-F ()\n\t <COND (<VERB? READ>\n\t\t<TELL\n\"Famed Adventurer to Explore\" ,GUE-NAME \"! A world-famous and battle-hardened\nadventurer has been seen in the vicinity of\" ,GUE-NAME \". Local grues have\nbeen reported sharpening their (slavering) fangs...\" CR>)>>"
  },
  "PLACE-MAT-F": {
   "name": "PLACE-MAT-F",
   "file": "princess.zil",
   "line": 144,
   "endLine": 157,
   "source": "<ROUTINE PLACE-MAT-F ()\n\t <COND (<VERB? PUT-UNDER>\n\t\t<COND (<EQUAL? ,PRSI ,PDOOR>\n\t\t       <MOVE ,PRSO ,HERE>\n\t\t       <SETG MUD-FLAG T>\n\t\t       <TELL \"The mat slies under the door.\" CR>)\n\t\t      (<EQUAL? ,PRSI ,WIZ-DOOR ,RIDDLE-DOOR>\n\t\t       <TELL \"There's not enough room.\" CR>)>)\n\t       (<AND <VERB? TAKE MOVE> ,MATOBJ>\n\t\t<MOVE ,MATOBJ ,HERE>\n\t\t<SETG MATOBJ <>>\n\t\t<SETG MUD-FLAG <>>\n\t\t<TELL\n\"As the place mat is moved, a \" D ,MATOBJ \" falls from it to the floor.\" CR>)>>"
  },
  "TEAPOT-F": {
   "name": "TEAPOT-F",
   "file": "princess.zil",
   "line": 168,
   "endLine": 170,
   "source": "<ROUTINE TEAPOT-F ()\n\t <COND (<VERB? OPEN CLOSE>\n\t\t<TELL \"The teapot has no lid.\" CR>)>>"
  },
  "MATCH-F": {
   "name": "MATCH-F",
   "file": "princess.zil",
   "line": 194,
   "endLine": 224,
   "source": "<ROUTINE MATCH-F (\"AUX\" CNT)\n\t <COND (<AND <VERB? LAMP-ON BURN>\n\t\t     <EQUAL? ,PRSO ,MATCH>>\n\t\t<COND (<G? ,MATCH-COUNT 0>\n\t\t       <SETG MATCH-COUNT <- ,MATCH-COUNT 1>>)>\n\t\t<COND (<NOT <G? ,MATCH-COUNT 0>>\n\t\t       <TELL \"You've run out of matches.\" CR>)\n\t\t      (T\n\t\t       <FSET ,MATCH ,FLAMEBIT>\n\t\t       <FSET ,MATCH ,ONBIT>\n\t\t       <ENABLE <QUEUE I-MATCH 2>>\n\t\t       <TELL \"A match starts to burn.\" CR>)>)\n\t       (<AND <VERB? LAMP-OFF>\n\t\t     <FSET? ,MATCH ,FLAMEBIT>>\n\t\t<FCLEAR ,MATCH ,FLAMEBIT>\n\t\t<FCLEAR ,MATCH ,ONBIT>\n\t\t<QUEUE I-MATCH 0>\n\t\t<TELL \"The match is out.\" CR>)\n\t       (<VERB? COUNT>\n\t\t<TELL \"You have \">\n\t\t<SET CNT <- ,MATCH-COUNT 1>>\n\t\t<TELL N .CNT \" match\">\n\t\t<COND (<NOT <1? .CNT>>\n\t\t       <TELL \"es\">)>\n\t\t<TELL ,PERIOD-CR>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (<FSET? ,MATCH ,ONBIT>\n\t\t       <TELL \"A\">)\n\t\t      (T\n\t\t       <TELL \"No\">)>\n\t\t<TELL \" match is burning.\" CR>)>>"
  },
  "I-MATCH": {
   "name": "I-MATCH",
   "file": "princess.zil",
   "line": 226,
   "endLine": 229,
   "source": "<ROUTINE I-MATCH ()\n\t <FCLEAR ,MATCH ,FLAMEBIT>\n\t <FCLEAR ,MATCH ,ONBIT>\n\t <TELL \"The match has gone out.\" CR>>"
  },
  "TOPIARY-F": {
   "name": "TOPIARY-F",
   "file": "princess.zil",
   "line": 244,
   "endLine": 246,
   "source": "<ROUTINE TOPIARY-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<ENABLE <QUEUE I-TOPIARY -1>>)>>"
  },
  "I-TOPIARY": {
   "name": "I-TOPIARY",
   "file": "princess.zil",
   "line": 250,
   "endLine": 270,
   "source": "<ROUTINE I-TOPIARY ()\n\t <COND (<EQUAL? ,HERE ,TOPIARY>\n\t\t<COND (<AND <EQUAL? ,TOPIARY-COUNTER 0>\n\t\t\t    <PROB 12>>\n\t\t       <SETG TOPIARY-COUNTER 1>\n\t\t       <TELL\n\"Strangely, the topiary animals seem to have shifted position a bit.\" CR>)\n\t\t      (<AND <EQUAL? ,TOPIARY-COUNTER 0>\n\t\t\t    <PROB 8>>\n\t\t       <SETG TOPIARY-COUNTER 2>\n\t\t       <TELL\n\"You turn, and the topiary animals seem to have closed in on you.\" CR>)\n\t\t      (<AND <EQUAL? ,TOPIARY-COUNTER 0>\n\t\t\t    <PROB 4>>\n\t\t       <SETG TOPIARY-COUNTER 0>\n\t\t       <JIGS-UP\n\"The topiary animals attack! You are crushed by their branches and clawed\nby their thorns.\">)>)\n\t       (T\n\t\t<DISABLE <INT I-TOPIARY>>\n\t\t<RFALSE>)>>"
  },
  "HEDGES-F": {
   "name": "HEDGES-F",
   "file": "princess.zil",
   "line": 279,
   "endLine": 282,
   "source": "<ROUTINE HEDGES-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The hedges are shaped like various animals: dogs, serpents, dragons...\" CR>)>>"
  },
  "DRAGON-F": {
   "name": "DRAGON-F",
   "file": "princess.zil",
   "line": 311,
   "endLine": 351,
   "source": "<ROUTINE DRAGON-F ()\n\t <ENABLE <QUEUE I-DRAGON -1>>\n\t <COND (<HELLO? ,DRAGON>\n\t\t<SETG DRAGON-ANGER <+ ,DRAGON-ANGER 2>>\n\t\t<TELL \"The dragon looks amused.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<SETG DRAGON-ANGER <+ ,DRAGON-ANGER 1>>\n\t\t<TELL\n\"He looks back at you, his cat's eyes yellow in the gloom. You start to\nfeel weak, and quickly turn away.\" CR>)\n\t       (<VERB? ATTACK MUNG KICK LAMP-ON>\n\t\t<SETG DRAGON-ANGER <+ ,DRAGON-ANGER 4>>\n\t\t<COND (<OR <VERB? LAMP-ON>\n\t\t\t   <AND <VERB? ATTACK>\n\t\t\t\t<NOT ,PRSI>>>\n\t\t       <TELL\n\"With your bare hands? I doubt the dragon even noticed.\" CR>)\n\t\t      (T\n\t\t       <TELL <RANDOM-ELEMENT ,DRAGON-ATTACKS> CR>)>)\n\t       (<AND <VERB? GIVE>\n\t\t     <EQUAL? ,PRSI ,DRAGON>>\n\t\t<SETG DRAGON-ANGER <+ ,DRAGON-ANGER 1>>\n\t\t<COND (<FSET? ,PRSO ,TREASUREBIT>\n\t\t       <MOVE ,PRSO ,CHEST>\n\t\t       <TELL\n\"The dragon excuses himself for a moment and\nreturns without the \" D ,PRSO ,PERIOD-CR>)\n\t\t      (<BOMB? ,PRSO>\n\t\t       <SETG DRAGON-ANGER <+ ,DRAGON-ANGER 2>>\n\t\t       <REMOVE ,BRICK>\n\t\t       <TELL\n\"The politely swallows the bomb. A moment later, he belches and smoke curls\nfrom his nostrils.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The dragon refuses it.\" CR>)>)\n\t       (<AND <VERB? WALK>\n\t\t     <EQUAL? ,HERE ,DRAGON-ROOM>\n\t\t     <EQUAL? ,PRSO ,P?NORTH>>\n\t\t<SETG DRAGON-ANGER <+ ,DRAGON-ANGER 3>>\n\t\t<TELL\n\"The dragon puts out a claw and blocks your way.\" CR>)>>"
  },
  "DRAGON-LEAVES": {
   "name": "DRAGON-LEAVES",
   "file": "princess.zil",
   "line": 367,
   "endLine": 370,
   "source": "<ROUTINE DRAGON-LEAVES ()\n\t <MOVE ,DRAGON ,DRAGON-ROOM>\n\t <SETG DRAGON-ANGER 0>\n\t <DISABLE <INT I-DRAGON>>>"
  },
  "I-DRAGON": {
   "name": "I-DRAGON",
   "file": "princess.zil",
   "line": 372,
   "endLine": 447,
   "source": "<ROUTINE I-DRAGON (\"AUX\" ROOM)\n\t <COND (<G? ,DRAGON-ANGER 6>\n\t\t<TELL\n\"With an almost bored yawn, the dragon opens his mouth and blasts you with\na gout of white-hot flame\">\n\t\t<COND (<EQUAL? ,SPELL? ,S-FIREPROOF>\n\t\t       <TELL \", but it washes over you harmlessly.\" CR>)\n\t\t      (T\n\t\t       <DRAGON-LEAVES>\n\t\t       <JIGS-UP \".\">)>)\n\t       (<AND <EQUAL? ,HERE ,DRAGON-ROOM>\n\t\t     <NOT <IN? ,DRAGON ,DRAGON-ROOM>>>\n\t\t<MOVE ,DRAGON ,DRAGON-ROOM>\n\t\t<TELL\n\"The dragon charges in, maddened by your attempt to sneak past him. His eyes\nglow with anger. He opens his mouth, and a huge ball of flame engulfs you\">\n\t\t<COND (<EQUAL? ,SPELL? ,S-FIREPROOF>\n\t\t       <JIGS-UP\n\", but you barely feel the heat. The dragon is puzzled, but not too\npuzzled to crush you in his jaws.\">)\n\t\t      (T\n\t\t       <JIGS-UP \".\">)>)\n\t       (<NOT <G? ,DRAGON-ANGER 0>>\n\t\t<COND (<AND <PROB 50>\n\t\t\t    <IN? ,DRAGON ,HERE>>\n\t\t       <TELL \"The dragon looks bored.\" CR>)\n\t\t      (T\n\t\t       <DRAGON-LEAVES>\n\t\t       <COND (<EQUAL? ,HERE ,OLD-HERE>\n\t\t\t      <TELL\n\"The dragon seems to have lost interest in you.\">\n\t\t\t      <COND (<EQUAL? ,OLD-HERE ,DRAGON-ROOM>\n\t\t\t\t     <CRLF>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL \" He wanders off.\" CR>)>)>)>)\n\t       (T\n\t\t<SET ROOM <FIND-TARGET ,WINNER>>\n\t\t<COND (<NOT .ROOM>\n\t\t       <COND (<PROB 25>\n\t\t\t      <DRAGON-LEAVES>)>)\n\t\t      (<EQUAL? .ROOM ,CAROUSEL-ROOM\n\t\t\t       \t     ,DREARY-ROOM ,LEDGE-IN-RAVINE>\n\t\t       <COND (<PROB 25>\n\t\t\t      <DRAGON-LEAVES>)>\n\t\t       <TELL \"The dragon follows no further.\" CR>)\n\t\t      (<EQUAL? .ROOM ,ICE-ROOM>\n\t\t       <REMOVE ,DRAGON>\n\t\t       <REMOVE ,ICE>\n\t\t       <DISABLE <INT I-DRAGON>>\n\t\t       <SETG SCORE <+ ,SCORE 5>>\n\t\t       <SETG ICE-MELTED T>\n\t\t       <TELL CR\n\"The dragon enters and spies his reflection on the icy surface of the\nglacier. Thinking that another dragon has invaded his territory, he rears\nup to his full height and roars a challenge! The intruder responds! The\ndragon takes a deep breath and expels a massive gout of flame. It washes\nover the ice, which melts rapidly, sending out huge cloud of steam! When\nthe steam dissipates, the glacier is gone, and so is the dragon.\n|\nWith the ice gone, you notice a passage leading west.\" CR>)\n\t\t      (T\n\t\t       <COND (<NOT <EQUAL? .ROOM ,OLD-HERE>>\n\t\t\t      <MOVE ,DRAGON .ROOM>\n\t\t\t      <TELL\n\"The dragon follows you, out of mingled curiosity and anger.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"The dragon continues to watch you carefully.\" CR>)>\n\t\t       <COND (<NOT <G? ,DRAGON-ANGER 0>>\n\t\t\t      <SETG DRAGON-ANGER 0>\n\t\t\t      <DISABLE <INT I-DRAGON>>)>)>)>\n\t <SETG OLD-HERE <LOC ,DRAGON>>\n\t <SETG DRAGON-ANGER <- ,DRAGON-ANGER 2>>\n\t <COND (<L? ,DRAGON-ANGER 0>\n\t\t<SETG DRAGON-ANGER 0>)>\n\t <RTRUE>>"
  },
  "CHEST-F": {
   "name": "CHEST-F",
   "file": "princess.zil",
   "line": 469,
   "endLine": 488,
   "source": "<ROUTINE CHEST-F ()\n\t <COND (<VERB? OPEN>\n\t\t<COND (<AND <IN? ,PRINCESS ,HERE>\n\t\t\t    <NOT ,PRINCESS-AWAKE>\n\t\t\t    <PROB 25>>\n\t\t       <V-OPEN>\n\t\t       <TELL \"The squeaky lid startles the young woman.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"The rusty hinges almost give. It would probably open if you tried again.\">\n\t\t       <COND (<AND <IN? ,PRINCESS ,HERE>\n\t\t\t\t   <NOT ,PRINCESS-AWAKE>>\n\t\t\t      <TELL\n\" The commotion has startled the young woman.\">)>\n\t\t       <CRLF>)>\n\t\t<PUTP ,CHEST ,P?ACTION 0>\n\t\t<COND (<AND <IN? ,PRINCESS ,HERE>\n\t\t\t    <NOT ,PRINCESS-AWAKE>>\n\t\t       <PERFORM ,V?ALARM ,PRINCESS>)>\n\t\t<RTRUE>)>>"
  },
  "PRINCESS-F": {
   "name": "PRINCESS-F",
   "file": "princess.zil",
   "line": 512,
   "endLine": 553,
   "source": "<ROUTINE PRINCESS-F (\"AUX\" (DEM <INT I-PRINCESS>))\n\t <COND (<VERB? FOLLOW>\n\t\t<COND (,PRFOLLOW\n\t\t       <DO-WALK ,PRFOLLOW>)\n\t\t      (T\n\t\t       <TELL \"You've lost track of her.\" CR>)>)\n\t       (<VERB? ATTACK MUNG RAPE>\n\t\t<REMOVE ,PRINCESS>\n\t\t<TELL\n\"The princess screams, \\\"Won't someone deliver me from this awful fate?\\\"\nThe Wizard of Frobozz \">\n\t\t<COND (<IN? ,WIZARD ,HERE>\n\t\t       <TELL \"turns toward you\">)\n\t\t      (ELSE\n\t\t       <TELL \"appears\">)>\n\t\t<JIGS-UP\n\". \\\"Fry!\\\" he intones, and a bolt of lightning reduces you to a pile of ash.\n(Serves you right, too, if you ask me.)\">)\n\t       (<OR <HELLO? ,PRINCESS>\n\t\t    <VERB? ALARM KISS EXAMINE RUB>>\n\t\t<COND (<AND <IN? ,PRINCESS ,DRAGON-LAIR>\n\t\t\t    <EQUAL? <GET .DEM ,C-ENABLED?> 0>>\n\t\t       <ENABLE <QUEUE I-PRINCESS 2>>\n\t\t       <SETG PRINCESS-AWAKE T>\n\t\t       <TELL\n\"The princess shakes herself awake, notices you, and smiles. \\\"Thank you for\nrescuing me from that horrid worm, but I must depart.\\\" She rises, looking\npurposefully out of the lair.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"The princess ignores you; her eyes fix on the \">\n\t\t       <COND (<EQUAL? ,HERE ,GAZEBO>\n\t\t\t      <TELL \"garden\">)\n\t\t\t     (<EQUAL? ,HERE ,FORMAL-GARDEN>\n\t\t\t      <TELL \"gazebo\">)\n\t\t\t     (<EQUAL? ,HERE ,LEDGE-IN-RAVINE>\n\t\t\t      <TELL \"ledge\">)\n\t\t\t     (T\n\t\t\t      <TELL <GET ,PRDIRS <* ,PRCOUNT 4>>>)>\n\t\t       <TELL ,PERIOD-CR>)>)\n\t       (<NOT ,PRINCESS-AWAKE>\n\t\t<TELL \"She's in a trance!\" CR>)>>"
  },
  "I-PRINCESS": {
   "name": "I-PRINCESS",
   "file": "princess.zil",
   "line": 555,
   "endLine": 600,
   "source": "<ROUTINE I-PRINCESS (\"AUX\" (DEM <INT I-PRINCESS>) (OLDP <LOC ,PRINCESS>)\n\t\t     (PC <* ,PRCOUNT 4>))\n\t <MOVE ,PRINCESS <GET ,PRDIRS <+ .PC 1>>>\n\t <SETG PRFOLLOW <>>\n\t <COND (<AND <IN? ,PRINCESS ,DARK-TUNNEL>\n\t\t     <IN? ,ADVENTURER ,DEEP-FORD>>\n\t\t<TELL\n\"The princess touches the ravine wall and a section slides away, revealing\na passage to the east. She enters it.\" CR>\n\t\t<COND (<IN? ,WINNER .OLDP>\n\t\t       <SETG PRFOLLOW <GET ,PRDIRS <+ .PC 3>>>)>\n\t\t<SETG SECRET-DOOR T>)\n\t       (<AND <IN? ,PRINCESS ,DARK-TUNNEL>\n\t\t     <IN? ,WINNER ,DARK-TUNNEL>>\n\t\t<SETG SECRET-DOOR T>\n\t\t<TELL\n\"The princess appears from behind some rocks, as though she had walked\nthrough a wall.\" CR>)\n\t       (<IN? ,WINNER .OLDP>\n\t\t<SETG PRFOLLOW <GET ,PRDIRS <+ .PC 3>>>\n\t        <COND (<EQUAL? .OLDP ,FORMAL-GARDEN>\n\t\t       <TELL \"The princess enters the gazebo.\" CR>)\n\t\t      (<EQUAL? .OLDP ,LEDGE-IN-RAVINE>\n\t\t       <TELL\n\"The princess climbs daintily down the rock face.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The princess walks \">\n\t\t       <TELL <GET ,PRDIRS .PC>>\n\t\t       <TELL \". She glances back at you as she goes.\" CR>)>)\n\t       (<IN? ,PRINCESS ,HERE>\n\t\t<COND (<EQUAL? ,HERE ,GAZEBO>\n\t\t       <TELL \"The princess joins you in the gazebo.\" CR>)\n\t\t      (<EQUAL? ,HERE ,DEEP-FORD>\n\t\t       <TELL \"The princess clambers down from the ledge.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The princess enters from the \">\n\t\t       <TELL <GET ,PRDIRS <+ 2 .PC>>>\n\t\t       <TELL \". She seems surprised to see you.\" CR>)>)>\n\t <COND (<IN? ,PRINCESS ,GAZEBO>\n\t\t<DISABLE .DEM>\n\t\t<ENABLE <QUEUE I-UNICORN 6>>)\n\t       (T\n\t\t<SETG PRCOUNT <+ ,PRCOUNT 1>>\n\t\t<ENABLE <QUEUE I-PRINCESS <COND (<PROB 75> 1)\n\t\t\t\t\t\t(T 2)>>>)>\n\t <RTRUE>>"
  },
  "I-UNICORN": {
   "name": "I-UNICORN",
   "file": "princess.zil",
   "line": 614,
   "endLine": 628,
   "source": "<ROUTINE I-UNICORN ()\n\t <COND (<EQUAL? ,HERE ,GAZEBO ,FORMAL-GARDEN>\n\t\t<FCLEAR ,GOLD-KEY ,NDESCBIT>\n\t\t<MOVE ,GOLD-KEY ,WINNER>\n\t\t<SCORE-OBJ ,GOLD-KEY>\n\t\t<PUTP ,GOLD-KEY ,P?ACTION 0>\n\t\t<REMOVE ,PRINCESS>\n\t\t<TELL\n\"Shyly, a unicorn peeks out of the hedges and approaches the princess. Around\nits neck hangs a gold key. The princess takes the key and, smiling, hands it\nto you. \\\"It is the least I can do for one who rescued me from a fate I dare\nnot contemplate.\\\" With that, she mounts the unicorn and rides away.\" CR>)\n\t       (T\n\t\t<REMOVE ,PRINCESS>\n\t\t<RFALSE>)>>"
  },
  "ICE-ROOM-F": {
   "name": "ICE-ROOM-F",
   "file": "princess.zil",
   "line": 665,
   "endLine": 672,
   "source": "<ROUTINE ICE-ROOM-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a large hall of ancient lava, worn smooth by a glacier. Tunnels\nlead east and south.\">\n\t\t<COND (,ICE-MELTED\n\t\t       <TELL \" A damp, scorched passage leads west.\">)>\n\t\t<CRLF>)>>"
  },
  "ICE-F": {
   "name": "ICE-F",
   "file": "princess.zil",
   "line": 682,
   "endLine": 684,
   "source": "<ROUTINE ICE-F () \n\t <COND (<VERB? MELT>\n\t\t<TELL \"This is a big glacier; you'll need lots of heat.\" CR>)>>"
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
   "endLine": 43,
   "source": "<ROUTINE V-DIAGNOSE ()\n\t <TELL \"You are \">\n\t <COND (,DEAD\n\t\t<TELL \"dead\">)\n\t       (<EQUAL? ,SPELL? ,S-FERMENT>\n\t\t<TELL \"drunk\">)\n\t       (<EQUAL? ,SPELL? ,S-FEEBLE>\n\t\t<TELL \"unusually\">)\n\t       (<EQUAL? ,SPELL? ,S-FLOAT>\n\t\t<TELL \"floating\">)\n\t       (<EQUAL? ,SPELL? ,S-FREEZE>\n\t\t<TELL \"frozen stiff\">)\n\t       (T\n\t\t<TELL \"in perfect health\">)>\n\t <COND (<NOT <0? ,DEATHS>>\n\t\t<TELL \". You have been killed \">\n\t\t<COND (<1? ,DEATHS>\n\t\t       <TELL \"once\">)\n\t\t      (<EQUAL? ,DEATHS 2>\n\t\t       <TELL \"twice\">)\n\t\t      (T\n\t\t       <TELL \"an awful lot\">)>)>\n\t <TELL ,PERIOD-CR>>"
  },
  "V-INVENTORY": {
   "name": "V-INVENTORY",
   "file": "verbs.zil",
   "line": 45,
   "endLine": 49,
   "source": "<ROUTINE V-INVENTORY ()\n\t <COND (<FIRST? ,WINNER>\n\t\t<PRINT-CONT ,WINNER>)\n\t       (T\n\t\t<TELL \"You are empty-handed.\" CR>)>>"
  },
  "FINISH": {
   "name": "FINISH",
   "file": "verbs.zil",
   "line": 51,
   "endLine": 67,
   "source": "<ROUTINE FINISH (\"AUX\" WRD)\n\t <V-SCORE>\n\t <REPEAT ()\n\t\t <CRLF>\n\t\t <TELL\n\"Would you like to start over, restore a saved position, or stop playing?|\n(Type RESTART, RESTORE, or QUIT):|>\">\n\t\t <READ ,P-INBUF ,P-LEXV>\n\t\t <SET WRD <GET ,P-LEXV 1>>\n\t\t <COND (<EQUAL? .WRD ,W?RESTART>\n\t\t\t<RESTART>\n\t\t\t<TELL \"Failed.\" CR>)\n\t\t       (<EQUAL? .WRD ,W?RESTORE>\n\t\t\t<RESTORE>\n\t\t\t<TELL \"Failed.\" CR>)\n\t\t       (<EQUAL? .WRD ,W?QUIT ,W?Q>\n\t\t\t<QUIT>)>>>"
  },
  "V-QUIT": {
   "name": "V-QUIT",
   "file": "verbs.zil",
   "line": 69,
   "endLine": 73,
   "source": "<ROUTINE V-QUIT (\"AUX\" SCOR)\n\t <COND (<DO-YOU-WISH \"leave the game\">\n\t \t<QUIT>)\n\t       (T\n\t\t<TELL \"Ok.\" CR>)>>"
  },
  "V-RESTART": {
   "name": "V-RESTART",
   "file": "verbs.zil",
   "line": 75,
   "endLine": 79,
   "source": "<ROUTINE V-RESTART ()\n\t <COND (<DO-YOU-WISH \"restart\">\n\t\t<TELL \"Restarting.\" CR>\n\t\t<RESTART>\n\t\t<TELL \"Failed.\" CR>)>>"
  },
  "DO-YOU-WISH": {
   "name": "DO-YOU-WISH",
   "file": "verbs.zil",
   "line": 81,
   "endLine": 87,
   "source": "<ROUTINE DO-YOU-WISH (STRING)\n\t <V-SCORE>\n\t <TELL \"Do you wish to \" .STRING \"? (Y is affirmative): \">\n\t <COND (<YES?>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "YES?": {
   "name": "YES?",
   "file": "verbs.zil",
   "line": 89,
   "endLine": 95,
   "source": "<ROUTINE YES? ()\n\t <PRINTI \">\">\n\t <READ ,P-INBUF ,P-LEXV>\n\t <COND (<EQUAL? <GET ,P-LEXV 1> ,W?YES ,W?Y>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "V-RESTORE": {
   "name": "V-RESTORE",
   "file": "verbs.zil",
   "line": 97,
   "endLine": 99,
   "source": "<ROUTINE V-RESTORE ()\n\t <RESTORE>\n\t <TELL \"Failed.\" CR>>"
  },
  "V-SAVE": {
   "name": "V-SAVE",
   "file": "verbs.zil",
   "line": 101,
   "endLine": 105,
   "source": "<ROUTINE V-SAVE ()\n\t <COND (<SAVE>\n\t        <TELL \"Ok.\" CR>)\n\t       (T\n\t\t<TELL \"Failed.\" CR>)>>"
  },
  "V-SCORE": {
   "name": "V-SCORE",
   "file": "verbs.zil",
   "line": 107,
   "endLine": 125,
   "source": "<ROUTINE V-SCORE ()\n\t <TELL\n\"Your score is \" N ,SCORE \" (out of 400 points), in \" N ,MOVES \" move\">\n\t <COND (<NOT <1? ,MOVES>>\n\t\t<TELL \"s\">)>\n\t <TELL \". This score gives you the rank of \">\n\t <COND (<EQUAL? ,SCORE 400>\n\t\t<TELL \"Wizard\">)\n\t       (<G? ,SCORE 320>\n\t\t<TELL \"Master Adventurer\">)\n\t       (<G? ,SCORE 240>\n\t\t<TELL \"Senior Adventurer\">)\n\t       (<G? ,SCORE 160>\n\t\t<TELL \"Junior Adventurer\">)\n\t       (<G? ,SCORE 80>\n\t\t<TELL \"Amateur Adventurer\">)\n\t       (T\n\t\t<TELL \"Beginner\">)>\n\t <TELL ,PERIOD-CR>>"
  },
  "SCORE-OBJ": {
   "name": "SCORE-OBJ",
   "file": "verbs.zil",
   "line": 129,
   "endLine": 132,
   "source": "<ROUTINE SCORE-OBJ (OBJ \"AUX\" TEMP)\n\t <COND (<G? <SET TEMP <GETP .OBJ ,P?VALUE>> 0>\n\t\t<SETG SCORE <+ ,SCORE .TEMP>>\n\t\t<PUTP .OBJ ,P?VALUE 0>)>>"
  },
  "V-SCRIPT": {
   "name": "V-SCRIPT",
   "file": "verbs.zil",
   "line": 134,
   "endLine": 136,
   "source": "<ROUTINE V-SCRIPT ()\n\t <PUT 0 8 <BOR <GET 0 8> 1>>\n\t <INTERACTION \"begin\">>"
  },
  "INTERACTION": {
   "name": "INTERACTION",
   "file": "verbs.zil",
   "line": 138,
   "endLine": 140,
   "source": "<ROUTINE INTERACTION (STRING)\n\t <TELL \"Here \" .STRING \"s a transcript of interaction with\" CR>\n\t <V-VERSION>>"
  },
  "V-UNSCRIPT": {
   "name": "V-UNSCRIPT",
   "file": "verbs.zil",
   "line": 142,
   "endLine": 145,
   "source": "<ROUTINE V-UNSCRIPT ()\n\t <INTERACTION \"end\">\n\t <PUT 0 8 <BAND <GET 0 8> -2>>\n\t <RTRUE>>"
  },
  "V-VERSION": {
   "name": "V-VERSION",
   "file": "verbs.zil",
   "line": 147,
   "endLine": 160,
   "source": "<ROUTINE V-VERSION (\"AUX\" (CNT 17))\n\t<TELL\n\"Mini-Zork II: The Wizard of Frobozz|\nCopyright (c) 1988, Infocom, Inc. All rights reserved.|\nZORK is a registered trademark of Infocom, Inc.|\nRelease \">\n\t<PRINTN <BAND <GET 0 1> *3777*>>\n\t<TELL \" / Serial number \">\n\t<REPEAT ()\n\t\t<COND (<G? <SET CNT <+ .CNT 1>> 23>\n\t\t       <RETURN>)\n\t\t      (T\n\t\t       <PRINTC <GETB 0 .CNT>>)>>\n\t<CRLF>>"
  },
  "V-VERIFY": {
   "name": "V-VERIFY",
   "file": "verbs.zil",
   "line": 162,
   "endLine": 167,
   "source": "<ROUTINE V-VERIFY ()\n\t <TELL \"Verifying...\" CR>\n\t <COND (<VERIFY>\n\t\t<TELL \"Correct.\" CR>)\n\t       (T\n\t\t<TELL CR \"** Failed! **\" CR>)>>"
  },
  "V-COMMAND-FILE": {
   "name": "V-COMMAND-FILE",
   "file": "verbs.zil",
   "line": 169,
   "endLine": 171,
   "source": "<ROUTINE V-COMMAND-FILE ()\n\t <DIRIN 1>\n\t <RTRUE>>"
  },
  "V-RANDOM": {
   "name": "V-RANDOM",
   "file": "verbs.zil",
   "line": 173,
   "endLine": 178,
   "source": "<ROUTINE V-RANDOM ()\n\t <COND (<NOT <EQUAL? ,PRSO ,INTNUM>>\n\t\t<TELL \"Illegal call to #RND.\" CR>)\n\t       (T\n\t\t<RANDOM <- 0 ,P-NUMBER>>\n\t\t<RTRUE>)>>"
  },
  "V-RECORD": {
   "name": "V-RECORD",
   "file": "verbs.zil",
   "line": 180,
   "endLine": 182,
   "source": "<ROUTINE V-RECORD ()\n\t <DIROUT 4>\n\t <RTRUE>>"
  },
  "V-UNRECORD": {
   "name": "V-UNRECORD",
   "file": "verbs.zil",
   "line": 184,
   "endLine": 186,
   "source": "<ROUTINE V-UNRECORD ()\n\t <DIROUT -4>\n\t <RTRUE>>"
  },
  "V-ALARM": {
   "name": "V-ALARM",
   "file": "verbs.zil",
   "line": 190,
   "endLine": 191,
   "source": "<ROUTINE V-ALARM ()\n\t <TELL \"The \" D ,PRSO \" isn't sleeping.\" CR>>"
  },
  "V-ATTACK": {
   "name": "V-ATTACK",
   "file": "verbs.zil",
   "line": 193,
   "endLine": 207,
   "source": "<ROUTINE V-ATTACK ()\n\t <COND (<NOT <FSET? ,PRSO ,ACTORBIT>>\n\t\t<TELL \"Fight a \" D ,PRSO \"!?!\" CR>\n\t\t<RTRUE>)>\n\t <COND (<NOT ,PRSI>\n\t\t<COND (<IN? ,ADVENTURER ,SWORD>\n\t\t       <SETG PRSI ,SWORD>)\n\t\t      (T\n\t\t       <SETG PRSI ,HANDS>)>)>\n\t <TELL \"Trying to attack a \" D ,PRSO \" with \">\n\t <COND (<PRSI? ,HANDS>\n\t\t<TELL \"your bare hands\">)\n\t       (T\n\t\t<TELL \"a \" D ,PRSI>)>\n\t <TELL \" is suicidal.\" CR>>"
  },
  "V-BLAST": {
   "name": "V-BLAST",
   "file": "verbs.zil",
   "line": 209,
   "endLine": 210,
   "source": "<ROUTINE V-BLAST ()\n\t <TELL \"You can't blast anything by using words.\" CR>>"
  },
  "PRE-BURN": {
   "name": "PRE-BURN",
   "file": "verbs.zil",
   "line": 212,
   "endLine": 218,
   "source": "<ROUTINE PRE-BURN ()\n\t <COND (<NOT ,PRSI>\n\t\t<TELL \"You didn't say with what!\" CR>)\n\t       (<FLAMING? ,PRSI>\n\t        <RFALSE>)\n\t       (T\n\t        <TELL \"With a \" D ,PRSI \"??!?\" CR>)>>"
  },
  "V-BURN": {
   "name": "V-BURN",
   "file": "verbs.zil",
   "line": 220,
   "endLine": 238,
   "source": "<ROUTINE V-BURN ()\n\t <COND (<EQUAL? <LOC ,PRSO> ,RECEPTACLE>\n\t\t<BALLOON-BURN>\n\t\t<RTRUE>)\n\t       (<FSET? ,PRSO ,BURNBIT>\n\t\t<TELL \"The \" D ,PRSO \" catches fire\">\n\t\t<REMOVE-CAREFULLY ,PRSO>\n\t\t<COND (<OR <IN? ,PRSO ,WINNER>\n\t\t\t   <IN? ,WINNER ,PRSO>>\n\t\t       <TELL \". Unfortunately, you were \">\n\t\t       <COND (<IN? ,WINNER ,PRSO>\n\t\t\t      <TELL \"in\">)\n\t\t\t     (T\n\t\t\t      <TELL \"holding\">)>\n\t\t       <JIGS-UP \" it at the time.\">)\n\t\t      (T\n\t\t       <TELL \" and is consumed.\" CR>)>)\n\t       (T\n\t\t<TELL \"You can't burn a \" D ,PRSO ,PERIOD-CR>)>>"
  },
  "V-CLIMB-DOWN": {
   "name": "V-CLIMB-DOWN",
   "file": "verbs.zil",
   "line": 240,
   "endLine": 241,
   "source": "<ROUTINE V-CLIMB-DOWN ()\n\t <DO-WALK ,P?DOWN>>"
  },
  "V-CLIMB": {
   "name": "V-CLIMB",
   "file": "verbs.zil",
   "line": 243,
   "endLine": 244,
   "source": "<ROUTINE V-CLIMB ()\n\t <DO-WALK ,P?UP>>"
  },
  "V-CLIMB-ON": {
   "name": "V-CLIMB-ON",
   "file": "verbs.zil",
   "line": 246,
   "endLine": 251,
   "source": "<ROUTINE V-CLIMB-ON ()\n\t <COND (<FSET? ,PRSO ,VEHBIT>\n\t\t<PERFORM ,V?ENTER ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"You can't climb onto the \" D ,PRSO ,PERIOD-CR>)>>"
  },
  "V-CLOSE": {
   "name": "V-CLOSE",
   "file": "verbs.zil",
   "line": 253,
   "endLine": 268,
   "source": "<ROUTINE V-CLOSE ()\n\t <COND (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <FCLEAR ,PRSO ,OPENBIT>\n\t\t       <TELL \"Closed.\" CR>)\n\t\t      (T\n\t \t       <TELL ,ALREADY>)>)\n\t       (<OR <FSET? ,PRSO ,SURFACEBIT>\n\t\t    <NOT <FSET? ,PRSO ,CONTBIT>>>\n\t\t<TELL \"You can't close a \" D ,PRSO ,PERIOD-CR>)\n\t       (<FSET? ,PRSO ,OPENBIT>\n\t\t<FCLEAR ,PRSO ,OPENBIT>\n\t\t<TELL \"Closed.\" CR>\n\t\t<NOW-DARK?>)\n\t       (T\n\t\t<TELL ,ALREADY>)>>"
  },
  "V-COMMAND": {
   "name": "V-COMMAND",
   "file": "verbs.zil",
   "line": 270,
   "endLine": 274,
   "source": "<ROUTINE V-COMMAND ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL \"The \" D ,PRSO \" pays no attention.\" CR>)\n\t       (T\n\t\t<TELL \"You cannot talk to that!\" CR>)>>"
  },
  "V-COUNT": {
   "name": "V-COUNT",
   "file": "verbs.zil",
   "line": 276,
   "endLine": 277,
   "source": "<ROUTINE V-COUNT ()\n\t <TELL \"You have lost your mind.\" CR>>"
  },
  "V-CURSES": {
   "name": "V-CURSES",
   "file": "verbs.zil",
   "line": 279,
   "endLine": 280,
   "source": "<ROUTINE V-CURSES ()\n\t <TELL \"Such language in a high-class establishment like this!\" CR>>"
  },
  "V-CUT": {
   "name": "V-CUT",
   "file": "verbs.zil",
   "line": 282,
   "endLine": 296,
   "source": "<ROUTINE V-CUT ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<PERFORM ,V?ATTACK ,PRSO ,PRSI>)\n\t       (<NOT <FSET? ,PRSI ,WEAPONBIT>>\n\t\t<TELL\n\"The \\\"cutting edge\\\" of a \" D ,PRSI \" is inadequate.\" CR>)\n\t       (<FSET? ,PRSO ,BURNBIT>\n\t\t<COND (<IN? ,WINNER ,PRSO>\n\t\t       <TELL \"You're in it!\" CR>)\n\t\t      (T\n\t\t       <REMOVE-CAREFULLY ,PRSO>\n\t\t       <TELL\n\"You skillfully slice the \" D ,PRSO \" into slivers, which blow away.\" CR>)>)\n\t       (T\n\t\t<TELL \"Strange concept, cutting the \" D ,PRSO \"....\" CR>)>>"
  },
  "V-DEFLATE": {
   "name": "V-DEFLATE",
   "file": "verbs.zil",
   "line": 298,
   "endLine": 299,
   "source": "<ROUTINE V-DEFLATE ()\n\t <TELL \"Come on, now!\" CR>>"
  },
  "V-DISEMBARK": {
   "name": "V-DISEMBARK",
   "file": "verbs.zil",
   "line": 301,
   "endLine": 314,
   "source": "<ROUTINE V-DISEMBARK ()\n\t <COND (<AND <EQUAL? ,PRSO ,ROOMS>\n\t\t     <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t<PERFORM ,V?DISEMBARK <LOC ,WINNER>>\n\t\t<RTRUE>)\n\t       (<NOT <EQUAL? <LOC ,WINNER> ,PRSO>>\n\t\t<TELL ,LOOK-AROUND>\n\t\t<RFATAL>)\n\t       (<FSET? ,HERE ,RLANDBIT>\n\t\t<MOVE ,WINNER ,HERE>\n\t\t<TELL \"You are on your own feet again.\" CR>)\n\t       (T\n\t\t<TELL \"Getting out here would be fatal.\" CR>\n\t\t<RFATAL>)>>"
  },
  "V-DISENCHANT": {
   "name": "V-DISENCHANT",
   "file": "verbs.zil",
   "line": 316,
   "endLine": 335,
   "source": "<ROUTINE V-DISENCHANT ()\n\t <COND (<NOT <IN? ,PRSO ,HERE>>\n\t\t<RTRUE>)\n\t       (<OR <EQUAL? ,SPELL-USED ,W?FEEBLE ,W?FUMBLE>\n\t\t    <EQUAL? ,SPELL-USED ,W?FREEZE ,W?FALL ,W?FERMENT>\n\t\t    <EQUAL? ,SPELL-USED ,W?FENCE ,W?FANTASIZE>>\n\t\t<COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t       <COND (<EQUAL? ,SPELL-USED ,W?FEEBLE>\n\t\t\t      <TELL \"The \" D ,PRSO \" seems stronger now.\" CR>)\n\t\t\t     (<EQUAL? ,SPELL-USED ,W?FUMBLE>\n\t\t\t      <TELL\n\"The \" D ,PRSO \" no longer appears clumsy.\" CR>)\n\t\t\t     (<EQUAL? ,SPELL-USED ,W?FREEZE>\n\t\t\t      <TELL \"The \" D ,PRSO \" moves again.\" CR>)\n\t\t\t     (<EQUAL? ,SPELL-USED ,W?FERMENT>\n\t\t\t      <TELL \"The \" D ,PRSO \" stops swaying.\" CR>)>)>)\n\t       (<EQUAL? ,SPELL-USED ,W?FLOAT>\n\t\t<TELL \"The \" D ,PRSO \" sinks to the ground.\" CR>)\n\t       (<EQUAL? ,SPELL-USED ,W?FUDGE>\n\t\t<TELL \"The sweet smell has dispersed.\" CR>)>>"
  },
  "V-DRINK": {
   "name": "V-DRINK",
   "file": "verbs.zil",
   "line": 337,
   "endLine": 338,
   "source": "<ROUTINE V-DRINK ()\n\t <V-EAT>>"
  },
  "V-DRINK-FROM": {
   "name": "V-DRINK-FROM",
   "file": "verbs.zil",
   "line": 340,
   "endLine": 341,
   "source": "<ROUTINE V-DRINK-FROM ()\n\t <TELL \"How peculiar!\" CR>>"
  },
  "PRE-DROP": {
   "name": "PRE-DROP",
   "file": "verbs.zil",
   "line": 343,
   "endLine": 346,
   "source": "<ROUTINE PRE-DROP ()\n\t <COND (<EQUAL? ,PRSO <LOC ,WINNER>>\n\t\t<PERFORM ,V?DISEMBARK ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-DROP": {
   "name": "V-DROP",
   "file": "verbs.zil",
   "line": 348,
   "endLine": 350,
   "source": "<ROUTINE V-DROP ()\n\t <COND (<IDROP>\n\t\t<TELL \"Dropped.\" CR>)>>"
  },
  "V-EAT": {
   "name": "V-EAT",
   "file": "verbs.zil",
   "line": 352,
   "endLine": 365,
   "source": "<ROUTINE V-EAT ()\n\t <COND (<FSET? ,PRSO ,FOODBIT>\n\t\t<HIT-SPOT>)\n\t       (<PRSO? ,GLOBAL-WATER>\n\t\t<HIT-SPOT>)\n\t       (<PRSO? ,WATER>\n\t\t<COND (<NOT <HELD? <LOC ,PRSO>>>\n\t\t       <TELL\n\"You're not holding the \" D <LOC ,PRSO> ,PERIOD-CR>)\n\t\t      (T\n\t\t       <HIT-SPOT>)>)\n\t       (T\n\t\t<TELL\n\"It's doubtful the \" D ,PRSO \" would agree with you.\" CR>)>>"
  },
  "HIT-SPOT": {
   "name": "HIT-SPOT",
   "file": "verbs.zil",
   "line": 367,
   "endLine": 370,
   "source": "<ROUTINE HIT-SPOT ()\n\t <COND (<NOT <PRSO? ,GLOBAL-WATER>>\n\t\t<REMOVE-CAREFULLY ,PRSO>)>\n\t <TELL \"That really hit the spot.\" CR>>"
  },
  "V-ENCHANT": {
   "name": "V-ENCHANT",
   "file": "verbs.zil",
   "line": 372,
   "endLine": 411,
   "source": "<ROUTINE V-ENCHANT ()\n\t <COND (,WAND-ON\n\t\t<SETG SPELL-VICTIM ,WAND-ON>)>\n\t <COND (,SPELL-VICTIM\n\t\t<COND (<NOT ,SPELL-USED>\n\t\t       <TELL \"You must be more specific.\" CR>\n\t\t       <RTRUE>)>\n\t\t<COND (<OR <EQUAL? ,SPELL-USED ,W?FEEBLE ,W?FUMBLE>\n\t\t\t  <EQUAL? ,SPELL-USED ,W?FREEZE ,W?FALL ,W?FERMENT>\n\t\t\t  <EQUAL? ,SPELL-USED ,W?FENCE ,W?FANTASIZE>>\n\t\t       <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t\t      <TELL ,WAND-STOPS-GLOWING>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"That might have done something, but it's\nhard to tell with a \" D ,PRSO ,PERIOD-CR>)>)\n\t\t      (<EQUAL? ,SPELL-USED ,W?FUDGE>\n\t\t       <TELL \"An odor of chocolate permeates the room.\" CR>)\n\t\t      (<EQUAL? ,SPELL-USED ,W?FLUORESCE>\n\t\t       <FSET ,PRSO ,LIGHTBIT>\n\t\t       <FSET ,PRSO ,ONBIT>\n\t\t       <SETG LIT T>\n\t\t       <TELL \"The \" D ,PRSO \" begins to glow.\" CR>)\n\t\t      (<AND <EQUAL? ,SPELL-USED ,W?FLOAT>\n\t\t\t    <FSET? ,PRSO ,TAKEBIT>>\n\t\t       <COND (<AND <EQUAL? ,SPELL-VICTIM ,COLLAR>\n\t\t\t\t   <IN? ,COLLAR ,CERBERUS>>\n\t\t\t      <SETG SPELL-VICTIM ,CERBERUS>)>\n\t\t       <TELL \"The \" D ,PRSO \" floats serenely in midair.\" CR>)\n\t\t      (<AND <EQUAL? ,SPELL-USED ,W?FRY>\n\t\t\t    <FSET? ,PRSO ,TAKEBIT>>\n\t\t       <SETG SPELL-HANDLED? T>\n\t\t       <REMOVE-CAREFULLY ,PRSO>\n\t\t       <TELL \"The \" D ,PRSO \" goes up in a puff of smoke.\" CR>)\n\t\t      (T\n\t\t       <SETG SPELL-VICTIM <>>\n\t\t       <TELL ,WAND-STOPS-GLOWING>)>)\n\t       (T\n\t\t<SETG SPELL-VICTIM <>>\n\t\t<TELL \"Nothing happens.\" CR>)>>"
  },
  "REMOVE-CAREFULLY": {
   "name": "REMOVE-CAREFULLY",
   "file": "verbs.zil",
   "line": 413,
   "endLine": 418,
   "source": "<ROUTINE REMOVE-CAREFULLY (OBJ \"AUX\" OLIT)\n\t <COND (<EQUAL? .OBJ ,P-IT-OBJECT>\n\t\t<SETG P-IT-OBJECT <>>)>\n\t <SET OLIT ,LIT>\n\t <REMOVE .OBJ>\n\t <NOW-DARK?>>"
  },
  "PRE-ENTER": {
   "name": "PRE-ENTER",
   "file": "verbs.zil",
   "line": 420,
   "endLine": 436,
   "source": "<ROUTINE PRE-ENTER (\"AUX\" M)\n\t <COND (<NOT ,PRSO>\n\t\t<DO-WALK ,P?IN>)\n\t       (<AND <FSET? ,PRSO ,DOORBIT>\n\t\t    <SET M <OTHER-SIDE ,PRSO>>>\n\t        <DO-WALK .M>)\n\t       (<FSET? ,PRSO ,VEHBIT>\n\t\t<COND (<FSET? <LOC ,ADVENTURER> ,VEHBIT>\n\t\t       <TELL ,LOOK-AROUND>)\n\t\t      (T\n\t\t       <RFALSE>)>)\n\t       (<PRSO? ,WATER ,GLOBAL-WATER>\n\t\t<RFALSE>)\n\t       (T\n\t\t<TELL\n\"You hit your head against the \" D ,PRSO \" as you attempt this feat.\" CR>)>\n\t <RFATAL>>"
  },
  "V-ENTER": {
   "name": "V-ENTER",
   "file": "verbs.zil",
   "line": 438,
   "endLine": 442,
   "source": "<ROUTINE V-ENTER ()\n\t <TELL \"You are now in the \" D ,PRSO ,PERIOD-CR>\n\t <MOVE ,WINNER ,PRSO>\n\t <APPLY <GETP ,PRSO ,P?ACTION> ,M-ENTER>\n\t <RTRUE>>"
  },
  "V-EXAMINE": {
   "name": "V-EXAMINE",
   "file": "verbs.zil",
   "line": 444,
   "endLine": 452,
   "source": "<ROUTINE V-EXAMINE ()\n\t <COND (<GETP ,PRSO ,P?TEXT>\n\t\t<TELL <GETP ,PRSO ,P?TEXT> CR>)\n\t       (<OR <FSET? ,PRSO ,CONTBIT>\n\t\t    <FSET? ,PRSO ,DOORBIT>>\n\t\t<V-LOOK-INSIDE>)\n\t       (T\n\t\t<TELL\n\"There's nothing special about the \" D ,PRSO ,PERIOD-CR>)>>"
  },
  "V-EXIT": {
   "name": "V-EXIT",
   "file": "verbs.zil",
   "line": 454,
   "endLine": 462,
   "source": "<ROUTINE V-EXIT ()\n\t <COND (<OR <AND <EQUAL? ,PRSO <> ,ROOMS>\n\t\t\t <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t    <AND ,PRSO\n\t\t\t <IN? ,WINNER ,PRSO>>>\n\t\t<PERFORM ,V?DISEMBARK <LOC ,WINNER>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<DO-WALK ,P?OUT>)>>"
  },
  "PRE-FILL": {
   "name": "PRE-FILL",
   "file": "verbs.zil",
   "line": 464,
   "endLine": 475,
   "source": "<ROUTINE PRE-FILL (\"AUX\" TX)\n\t <COND (<NOT ,PRSI>\n\t\t<COND (<GLOBAL-IN? ,GLOBAL-WATER ,HERE>\n\t\t       <PERFORM ,V?FILL ,PRSO ,GLOBAL-WATER>)\n\t\t      (<IN? ,WATER <LOC ,WINNER>>\n\t\t       <PERFORM ,V?FILL ,PRSO ,WATER>)\n\t\t      (T\n\t\t       <TELL \"There is nothing to fill it with.\" CR>)>\n\t\t<RTRUE>)\n\t       (<NOT <EQUAL? ,PRSI ,WATER ,GLOBAL-WATER>>\n\t\t<PERFORM ,V?PUT ,PRSI ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-FILL": {
   "name": "V-FILL",
   "file": "verbs.zil",
   "line": 477,
   "endLine": 478,
   "source": "<ROUTINE V-FILL ()\n\t <TELL \"Huh?\" CR>>"
  },
  "V-FIND": {
   "name": "V-FIND",
   "file": "verbs.zil",
   "line": 480,
   "endLine": 498,
   "source": "<ROUTINE V-FIND (\"AUX\" (L <LOC ,PRSO>))\n\t <COND (<EQUAL? ,PRSO ,HANDS>\n\t\t<TELL \"Within six feet of your head, hopefully.\" CR>)\n\t       (<EQUAL? .L ,GLOBAL-OBJECTS>\n\t\t<TELL \"You find it.\" CR>)\n\t       (<IN? ,PRSO ,WINNER>\n\t\t<TELL \"You have it.\" CR>)\n\t       (<OR <IN? ,PRSO ,HERE>\n\t\t    <GLOBAL-IN? ,PRSO ,HERE>\n\t\t    <EQUAL? ,PRSO ,PSEUDO-OBJECT>>\n\t\t<TELL \"It's right here.\" CR>)\n\t       (<FSET? .L ,ACTORBIT>\n\t\t<TELL \"The \" D .L \" has it.\" CR>)\n\t       (<FSET? .L ,SURFACEBIT>\n\t\t<TELL \"It's on the \" D .L ,PERIOD-CR>)\n\t       (<FSET? .L ,CONTBIT>\n\t\t<TELL \"It's in the \" D .L ,PERIOD-CR>)\n\t       (T\n\t\t<TELL \"Beats me.\" CR>)>>"
  },
  "V-FOLLOW": {
   "name": "V-FOLLOW",
   "file": "verbs.zil",
   "line": 500,
   "endLine": 501,
   "source": "<ROUTINE V-FOLLOW ()\n\t <V-COUNT>>"
  },
  "PRE-GIVE": {
   "name": "PRE-GIVE",
   "file": "verbs.zil",
   "line": 503,
   "endLine": 507,
   "source": "<ROUTINE PRE-GIVE ()\n\t <COND (<NOT <HELD? ,PRSO>>\n\t\t<TELL \n\"That's easy for you to say since you don't even have the \"\nD ,PRSO ,PERIOD-CR>)>>"
  },
  "V-GIVE": {
   "name": "V-GIVE",
   "file": "verbs.zil",
   "line": 509,
   "endLine": 513,
   "source": "<ROUTINE V-GIVE ()\n\t <COND (<NOT <FSET? ,PRSI ,ACTORBIT>>\n\t\t<TELL \"You can't give a \" D ,PRSO \" to a \" D ,PRSI \"!\" CR>)\n\t       (T\n\t\t<TELL \"The \" D ,PRSI \" refuses it politely.\" CR>)>>"
  },
  "V-HELLO": {
   "name": "V-HELLO",
   "file": "verbs.zil",
   "line": 515,
   "endLine": 524,
   "source": "<ROUTINE V-HELLO ()\n\t <COND (,PRSO\n\t\t<COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t       <TELL\n\"The \" D ,PRSO \" bows his head to you in greeting.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"Only schizophrenics say \\\"Hello\\\" to a \" D ,PRSO ,PERIOD-CR>)>)\n\t       (T\n\t\t<TELL \"Goodbye.\" CR>)>>"
  },
  "V-INCANT": {
   "name": "V-INCANT",
   "file": "verbs.zil",
   "line": 526,
   "endLine": 541,
   "source": "<ROUTINE V-INCANT ()\n\t <COND (,SPELL-USED\n\t\t<TELL \"Nothing happens.\" CR>)\n\t       (,WAND-ON\n\t\t<SETG SPELL-VICTIM ,WAND-ON>\n\t\t<SETG SPELL-USED <GET ,P-LEXV ,P-CONT>>\n\t\t<TELL \"The wand glows very brightly for a moment.\" CR>\n\t\t<ENABLE <QUEUE I-SPELL <+ 10 <RANDOM 10>>>>\n\t\t<SETG WAND-ON <>>\n\t\t<PERFORM ,V?ENCHANT ,SPELL-VICTIM>)\n\t       (T\n\t\t<TELL\n\"The incantation echoes back faintly, but nothing else happens.\" CR>)>\n\t <SETG QUOTE-FLAG <>>\n\t <SETG P-CONT <>>\n\t <RTRUE>>"
  },
  "I-SPELL": {
   "name": "I-SPELL",
   "file": "verbs.zil",
   "line": 543,
   "endLine": 549,
   "source": "<ROUTINE I-SPELL ()\n\t <COND (<AND <NOT ,SPELL-HANDLED?> ,SPELL-VICTIM>\n\t\t<PERFORM ,V?DISENCHANT ,SPELL-VICTIM>)>\n\t <SETG SPELL-HANDLED? <>>\n\t <SETG WAND-ON <>>\n\t <SETG SPELL-USED <>>\n\t <SETG SPELL-VICTIM <>>>"
  },
  "V-INFLATE": {
   "name": "V-INFLATE",
   "file": "verbs.zil",
   "line": 551,
   "endLine": 552,
   "source": "<ROUTINE V-INFLATE ()\n\t <TELL \"How can you inflate that?\" CR>>"
  },
  "V-KICK": {
   "name": "V-KICK",
   "file": "verbs.zil",
   "line": 554,
   "endLine": 555,
   "source": "<ROUTINE V-KICK ()\n\t <HACK-HACK \"Kicking the \">>"
  },
  "V-KISS": {
   "name": "V-KISS",
   "file": "verbs.zil",
   "line": 557,
   "endLine": 558,
   "source": "<ROUTINE V-KISS ()\n\t <TELL \"I'd sooner kiss a pig.\" CR>>"
  },
  "V-KNOCK": {
   "name": "V-KNOCK",
   "file": "verbs.zil",
   "line": 560,
   "endLine": 564,
   "source": "<ROUTINE V-KNOCK ()\n\t <COND (<FSET? ,PRSO ,DOORBIT>\n\t\t<TELL \"Nobody's home.\" CR>)\n\t       (T\n\t\t<TELL \"Why knock on a \" D ,PRSO \"?\" CR>)>>"
  },
  "V-LAMP-OFF": {
   "name": "V-LAMP-OFF",
   "file": "verbs.zil",
   "line": 566,
   "endLine": 575,
   "source": "<ROUTINE V-LAMP-OFF ()\n\t <COND (<FSET? ,PRSO ,LIGHTBIT>\n\t\t<COND (<NOT <FSET? ,PRSO ,ONBIT>>\n\t\t       <TELL ,ALREADY>)\n\t\t      (T\n\t\t       <FCLEAR ,PRSO ,ONBIT>\n\t\t       <TELL \"The \" D ,PRSO \" is now off.\" CR>\n\t\t       <NOW-DARK?>)>)\n\t       (T\n\t\t<TELL \"You can't turn that off.\" CR>)>>"
  },
  "V-LAMP-ON": {
   "name": "V-LAMP-ON",
   "file": "verbs.zil",
   "line": 577,
   "endLine": 592,
   "source": "<ROUTINE V-LAMP-ON ()\n\t <COND (<FSET? ,PRSO ,LIGHTBIT>\n\t\t<COND (<FSET? ,PRSO ,ONBIT>\n\t\t       <TELL ,ALREADY>)\n\t\t      (T\n\t\t       <FSET ,PRSO ,ONBIT>\n\t\t       <TELL \"The \" D ,PRSO \" is now on.\" CR>\n\t\t       <COND (<NOT ,LIT>\n\t\t\t      <SETG LIT <LIT? ,HERE>>\n\t\t\t      <CRLF>\n\t\t\t      <V-LOOK>)>)>)\n\t       (<FSET? ,PRSO ,BURNBIT>\n\t\t<TELL\n\"If you wish to burn the \" D ,PRSO \", you should say so.\" CR>)\n\t       (T\n\t\t<TELL \"You can't turn that on.\" CR>)>>"
  },
  "V-LAUNCH": {
   "name": "V-LAUNCH",
   "file": "verbs.zil",
   "line": 594,
   "endLine": 595,
   "source": "<ROUTINE V-LAUNCH ()\n\t <TELL \"You can't launch that by saying \\\"launch\\\"!\" CR>>"
  },
  "V-LEAP": {
   "name": "V-LEAP",
   "file": "verbs.zil",
   "line": 597,
   "endLine": 609,
   "source": "<ROUTINE V-LEAP (\"AUX\" TX S)\n\t <COND (,PRSO\n\t\t<TELL \"That would be a good trick.\" CR>)\n\t       (<SET TX <GETPT ,HERE ,P?DOWN>>\n\t\t<SET S <PTSIZE .TX>>\n\t\t<COND (<OR <EQUAL? .S 2> ;NEXIT\n       \t\t\t   <AND <EQUAL? .S 4> ;CEXIT\n\t\t\t\t<NOT <VALUE <GETB .TX 1>>>>>\n\t\t       <JIGS-UP \"You should have looked before you leaped.\">)\n\t\t      (T\n\t\t       <V-SKIP>)>)\n\t       (T\n\t\t<V-SKIP>)>>"
  },
  "V-LEAVE": {
   "name": "V-LEAVE",
   "file": "verbs.zil",
   "line": 611,
   "endLine": 612,
   "source": "<ROUTINE V-LEAVE ()\n\t <DO-WALK ,P?OUT>>"
  },
  "V-LISTEN": {
   "name": "V-LISTEN",
   "file": "verbs.zil",
   "line": 614,
   "endLine": 615,
   "source": "<ROUTINE V-LISTEN ()\n\t <TELL \"The \" D ,PRSO \" makes no sound.\" CR>>"
  },
  "V-LOCK": {
   "name": "V-LOCK",
   "file": "verbs.zil",
   "line": 617,
   "endLine": 618,
   "source": "<ROUTINE V-LOCK ()\n\t <TELL \"It doesn't seem to work.\" CR>>"
  },
  "V-LOOK": {
   "name": "V-LOOK",
   "file": "verbs.zil",
   "line": 620,
   "endLine": 623,
   "source": "<ROUTINE V-LOOK ()\n\t <DESCRIBE-ROOM T>\n\t <COND (,LIT\n\t\t<DESCRIBE-OBJECTS T>)>>"
  },
  "V-LOOK-BEHIND": {
   "name": "V-LOOK-BEHIND",
   "file": "verbs.zil",
   "line": 625,
   "endLine": 626,
   "source": "<ROUTINE V-LOOK-BEHIND ()\n\t <TELL \"There is nothing behind the \" D ,PRSO ,PERIOD-CR>>"
  },
  "V-LOOK-INSIDE": {
   "name": "V-LOOK-INSIDE",
   "file": "verbs.zil",
   "line": 628,
   "endLine": 647,
   "source": "<ROUTINE V-LOOK-INSIDE ()\n\t <COND (<FSET? ,PRSO ,DOORBIT>\n\t\t<TELL \"The \" D ,PRSO>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \" is open, but you can't see beyond it.\" CR>)\n\t\t      (T\n\t\t       <TELL \" is closed.\" CR>)>)\n\t       (<FSET? ,PRSO ,CONTBIT>\n\t\t<COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t       <TELL \"There is nothing special to be seen.\" CR>)\n\t\t      (<SEE-INSIDE? ,PRSO>\n\t\t       <COND (<AND <FIRST? ,PRSO>\n\t\t\t\t   <PRINT-CONT ,PRSO>>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <TELL \"The \" D ,PRSO \" is empty.\" CR>)>)\n\t\t      (T\n\t\t       <TELL \"The \" D ,PRSO \" is closed.\" CR>)>)\n\t       (T\n\t\t<TELL \"You can't look inside a \" D ,PRSO ,PERIOD-CR>)>>"
  },
  "V-LOOK-UNDER": {
   "name": "V-LOOK-UNDER",
   "file": "verbs.zil",
   "line": 649,
   "endLine": 650,
   "source": "<ROUTINE V-LOOK-UNDER ()\n\t <TELL \"There is nothing but dust there.\" CR>>"
  },
  "V-LOWER": {
   "name": "V-LOWER",
   "file": "verbs.zil",
   "line": 652,
   "endLine": 653,
   "source": "<ROUTINE V-LOWER ()\n\t <HACK-HACK \"Playing in this way with the \">>"
  },
  "V-MELT": {
   "name": "V-MELT",
   "file": "verbs.zil",
   "line": 655,
   "endLine": 656,
   "source": "<ROUTINE V-MELT ()\n\t <TELL \"You can't melt a \" D ,PRSO ,PERIOD-CR>>"
  },
  "V-MOVE": {
   "name": "V-MOVE",
   "file": "verbs.zil",
   "line": 658,
   "endLine": 664,
   "source": "<ROUTINE V-MOVE ()\n\t <COND (<HELD? ,PRSO>\n\t\t<TELL \"Why juggle objects?\" CR>)\n\t       (<FSET? ,PRSO ,TAKEBIT>\n\t\t<TELL \"Moving the \" D ,PRSO \" reveals nothing.\" CR>)\n\t       (T\n\t\t<TELL \"You can't move the \" D ,PRSO ,PERIOD-CR>)>>"
  },
  "PRE-MUNG": {
   "name": "PRE-MUNG",
   "file": "verbs.zil",
   "line": 666,
   "endLine": 674,
   "source": "<ROUTINE PRE-MUNG ()\n\t <COND (<OR <NOT ,PRSI>\n\t\t    <NOT <FSET? ,PRSI ,WEAPONBIT>>>\n\t\t<TELL \"Trying to destroy the \" D ,PRSO \" with \">\n\t\t<COND (<NOT ,PRSI>\n\t\t       <TELL \"your bare hands\">)\n\t\t      (T\n\t\t       <TELL \"a \" D ,PRSI>)>\n\t\t<TELL \" is futile.\" CR>)>>"
  },
  "V-MUNG": {
   "name": "V-MUNG",
   "file": "verbs.zil",
   "line": 676,
   "endLine": 681,
   "source": "<ROUTINE V-MUNG ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<PERFORM ,V?ATTACK ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"Nice try.\" CR>)>>"
  },
  "V-OPEN": {
   "name": "V-OPEN",
   "file": "verbs.zil",
   "line": 683,
   "endLine": 710,
   "source": "<ROUTINE V-OPEN (\"AUX\" F STR)\n\t <COND (<FSET? ,PRSO ,CONTBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL ,ALREADY>)\n\t\t      (T\n\t\t       <FSET ,PRSO ,OPENBIT>\n\t\t       <FSET ,PRSO ,TOUCHBIT>\n\t\t       <COND (<OR <NOT <FIRST? ,PRSO>>\n\t\t\t\t  <FSET? ,PRSO ,TRANSBIT>>\n\t\t\t      <TELL \"Opened.\" CR>)\n\t\t\t     (<AND <SET F <FIRST? ,PRSO>>\n\t\t\t\t   <NOT <NEXT? .F>>\n\t\t\t\t   <NOT <FSET? .F ,TOUCHBIT>>\n\t\t\t\t   <SET STR <GETP .F ,P?FDESC>>>\n\t\t\t      <TELL \"The \" D ,PRSO \" opens.\" CR>\n\t\t\t      <TELL .STR CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"Opening the \" D ,PRSO \" reveals \">\n\t\t\t      <PRINT-CONTENTS ,PRSO>\n\t\t\t      <TELL ,PERIOD-CR>)>)>)\n\t       (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL ,ALREADY>)\n\t\t      (T\n\t\t       <FSET ,PRSO ,OPENBIT>\n\t\t       <TELL \"The \" D ,PRSO \" opens.\" CR>)>)\n\t       (T\n\t\t<TELL \"You can't open a \" D ,PRSO ,PERIOD-CR>)>>"
  },
  "V-PICK": {
   "name": "V-PICK",
   "file": "verbs.zil",
   "line": 712,
   "endLine": 713,
   "source": "<ROUTINE V-PICK ()\n\t <TELL \"You can't pick that.\" CR>>"
  },
  "V-PLAY": {
   "name": "V-PLAY",
   "file": "verbs.zil",
   "line": 715,
   "endLine": 716,
   "source": "<ROUTINE V-PLAY ()\n\t <TELL \"That's silly!\" CR>>"
  },
  "V-POUR-ON": {
   "name": "V-POUR-ON",
   "file": "verbs.zil",
   "line": 718,
   "endLine": 731,
   "source": "<ROUTINE V-POUR-ON ()\n\t <COND (<EQUAL? ,PRSO ,WATER>\n\t\t<REMOVE-CAREFULLY ,PRSO>\n\t        <COND (<FLAMING? ,PRSI>\n\t\t       <TELL \"The \" D ,PRSI \" is extinguished.\" CR>\n\t\t       <COND (<EQUAL? ,PRSI ,BALLOON-INFLATED>\n\t\t\t      <SETG BALLOON-INFLATED <>>)>\n\t\t       <FCLEAR ,PRSI ,ONBIT>\n\t\t       <FCLEAR ,PRSI ,FLAMEBIT>)\n\t              (T\n\t\t       <TELL\n\"The water spills over the \" D ,PRSI \" and evaporates.\" CR>)>)\n\t       (T\n\t\t<TELL \"You can't pour that.\" CR>)>>"
  },
  "V-PUSH": {
   "name": "V-PUSH",
   "file": "verbs.zil",
   "line": 733,
   "endLine": 734,
   "source": "<ROUTINE V-PUSH ()\n\t <HACK-HACK \"Pushing the \">>"
  },
  "PRE-PUT": {
   "name": "PRE-PUT",
   "file": "verbs.zil",
   "line": 736,
   "endLine": 737,
   "source": "<ROUTINE PRE-PUT ()\n\t <PRE-GIVE>> ;\"That's easy for you to say...\""
  },
  "V-PUT": {
   "name": "V-PUT",
   "file": "verbs.zil",
   "line": 739,
   "endLine": 761,
   "source": "<ROUTINE V-PUT ()\n\t <COND (<AND <NOT <FSET? ,PRSI ,OPENBIT>>\n\t\t     <NOT <OPENABLE? ,PRSI>>\n\t\t     <NOT <FSET? ,PRSI ,VEHBIT>>>\n\t\t<TELL \"You can't do that.\" CR>)\n\t       (<NOT <FSET? ,PRSI ,OPENBIT>>\n\t\t<SETG P-IT-OBJECT ,PRSI>\n\t\t<TELL \"The \" D ,PRSI \" isn't open.\" CR>)\n\t       (<EQUAL? ,PRSI ,PRSO>\n\t\t<TELL \"How can you do that?\" CR>)\n\t       (<IN? ,PRSO ,PRSI>\n\t\t<TELL \"The \" D ,PRSO \" is already in the \" D ,PRSI ,PERIOD-CR>)\n\t       (<G? <- <+ <WEIGHT ,PRSI> <WEIGHT ,PRSO>> <GETP ,PRSI ,P?SIZE>>\n\t\t    <GETP ,PRSI ,P?CAPACITY>>\n\t\t<TELL \"There's no room.\" CR>)\n\t       (<AND <NOT <HELD? ,PRSO>>\n\t\t     <NOT <ITAKE>>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<MOVE ,PRSO ,PRSI>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<SCORE-OBJ ,PRSO>\n\t\t<TELL \"Done.\" CR>)>>"
  },
  "V-PUT-ON": {
   "name": "V-PUT-ON",
   "file": "verbs.zil",
   "line": 763,
   "endLine": 770,
   "source": "<ROUTINE V-PUT-ON ()\n\t <COND (<EQUAL? ,PRSI ,GROUND>\n\t\t<PERFORM ,V?DROP ,PRSO>\n\t\t<RTRUE>)\n\t       (<FSET? ,PRSI ,SURFACEBIT>\n\t\t<V-PUT>)\n\t       (T\n\t\t<TELL \"There's no good surface on the \" D ,PRSI ,PERIOD-CR>)>>"
  },
  "V-PUT-UNDER": {
   "name": "V-PUT-UNDER",
   "file": "verbs.zil",
   "line": 772,
   "endLine": 773,
   "source": "<ROUTINE V-PUT-UNDER ()\n\t <TELL \"You can't do that.\" CR>>"
  },
  "V-RAISE": {
   "name": "V-RAISE",
   "file": "verbs.zil",
   "line": 775,
   "endLine": 776,
   "source": "<ROUTINE V-RAISE ()\n\t <V-LOWER>>"
  },
  "V-RAPE": {
   "name": "V-RAPE",
   "file": "verbs.zil",
   "line": 778,
   "endLine": 779,
   "source": "<ROUTINE V-RAPE ()\n\t <TELL \"What a (ahem!) strange idea.\" CR>>"
  },
  "PRE-READ": {
   "name": "PRE-READ",
   "file": "verbs.zil",
   "line": 781,
   "endLine": 783,
   "source": "<ROUTINE PRE-READ ()\n\t <COND (<NOT ,LIT>\n\t\t<TELL ,TOO-DARK CR>)>>"
  },
  "V-READ": {
   "name": "V-READ",
   "file": "verbs.zil",
   "line": 785,
   "endLine": 789,
   "source": "<ROUTINE V-READ ()\n\t <COND (<NOT <FSET? ,PRSO ,READBIT>>\n\t\t<TELL \"How does one read a \" D ,PRSO \"?\" CR>)\n\t       (T\n\t\t<TELL <GETP ,PRSO ,P?TEXT> CR>)>>"
  },
  "V-RUB": {
   "name": "V-RUB",
   "file": "verbs.zil",
   "line": 791,
   "endLine": 792,
   "source": "<ROUTINE V-RUB ()\n\t <HACK-HACK \"Fiddling with the \">>"
  },
  "V-SAY": {
   "name": "V-SAY",
   "file": "verbs.zil",
   "line": 794,
   "endLine": 808,
   "source": "<ROUTINE V-SAY (\"AUX\" V)\n\t <COND (<OR ,SPELL-USED\n\t\t    ,WAND-ON>\n\t\t<PERFORM ,V?INCANT>\n\t\t<RTRUE>)\n\t       (<NOT ,P-CONT>\n\t\t<TELL \"Say what?\" CR>)\n\t       (T\n\t \t<SETG QUOTE-FLAG <>>\n\t \t<SETG P-CONT <>>\n\t \t<COND (<SET V <FIND-IN ,HERE ,ACTORBIT>>\n\t\t       <TELL \"You must address the \" D .V \" directly.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"Talking to yourself is a sign of impending mental collapse.\" CR>)>)>>"
  },
  "V-SEARCH": {
   "name": "V-SEARCH",
   "file": "verbs.zil",
   "line": 810,
   "endLine": 811,
   "source": "<ROUTINE V-SEARCH ()\n\t <TELL \"You find nothing unusual.\" CR>>"
  },
  "V-SGIVE": {
   "name": "V-SGIVE",
   "file": "verbs.zil",
   "line": 813,
   "endLine": 815,
   "source": "<ROUTINE V-SGIVE ()\n\t <PERFORM ,V?GIVE ,PRSI ,PRSO>\n\t <RTRUE>>"
  },
  "V-SHAKE": {
   "name": "V-SHAKE",
   "file": "verbs.zil",
   "line": 817,
   "endLine": 818,
   "source": "<ROUTINE V-SHAKE ()\n\t <TELL \"Shaken.\" CR>>"
  },
  "V-SKIP": {
   "name": "V-SKIP",
   "file": "verbs.zil",
   "line": 820,
   "endLine": 821,
   "source": "<ROUTINE V-SKIP ()\n\t <TELL \"Wheeeeeeee!!!\" CR>>"
  },
  "V-SMELL": {
   "name": "V-SMELL",
   "file": "verbs.zil",
   "line": 823,
   "endLine": 824,
   "source": "<ROUTINE V-SMELL ()\n\t <TELL \"It smells like a \" D ,PRSO ,PERIOD-CR>>"
  },
  "V-STAND": {
   "name": "V-STAND",
   "file": "verbs.zil",
   "line": 826,
   "endLine": 831,
   "source": "<ROUTINE V-STAND ()\n\t <COND (<FSET? <LOC ,WINNER> ,VEHBIT>\n\t\t<PERFORM ,V?DISEMBARK <LOC ,WINNER>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL ,LOOK-AROUND>)>>"
  },
  "V-STRIKE": {
   "name": "V-STRIKE",
   "file": "verbs.zil",
   "line": 833,
   "endLine": 838,
   "source": "<ROUTINE V-STRIKE ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<PERFORM ,V?ATTACK ,PRSO ,HANDS>)\n\t       (T\n\t\t<PERFORM ,V?LAMP-ON ,PRSO>)>\n\t <RTRUE>>"
  },
  "V-SWIM": {
   "name": "V-SWIM",
   "file": "verbs.zil",
   "line": 840,
   "endLine": 846,
   "source": "<ROUTINE V-SWIM ()\n\t <TELL \"Swimming isn't usually allowed in the \">\n\t <COND (<NOT <EQUAL? ,PRSO ,WATER ,GLOBAL-WATER>>\n\t\t<TELL D ,PRSO \".\">)\n\t       (T\n\t\t<TELL \"dungeon.\">)>\n\t <CRLF>>"
  },
  "V-SWING": {
   "name": "V-SWING",
   "file": "verbs.zil",
   "line": 848,
   "endLine": 852,
   "source": "<ROUTINE V-SWING ()\n\t <COND (<NOT ,PRSI>\n\t\t<TELL \"Whoosh!\" CR>)\n\t       (T\n\t\t<PERFORM ,V?ATTACK ,PRSI ,PRSO>)>>"
  },
  "PRE-TAKE": {
   "name": "PRE-TAKE",
   "file": "verbs.zil",
   "line": 854,
   "endLine": 871,
   "source": "<ROUTINE PRE-TAKE ()\n\t <COND (<IN? ,PRSO ,WINNER>\n\t\t<TELL \"You already have that!\" CR>)\n\t       (<AND <FSET? <LOC ,PRSO> ,CONTBIT>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<TELL \"You can't reach into a closed container.\" CR>)\n\t       (,PRSI\n\t\t<COND (<PRSI? ,GROUND ,DOOR-KEEPER>\n\t\t       <SETG PRSI <>>\n\t\t       <RFALSE>)\n\t\t      (<NOT <EQUAL? ,PRSI <LOC ,PRSO>>>\n\t\t       <TELL\n\"The \" D ,PRSO \" isn't in the \" D ,PRSI ,PERIOD-CR>)\n\t\t      (T\n\t\t       <SETG PRSI <>>\n\t\t       <RFALSE>)>)\n\t       (<EQUAL? ,PRSO <LOC ,WINNER>>\n\t\t<TELL \"You're in it!\" CR>)>>"
  },
  "V-TAKE": {
   "name": "V-TAKE",
   "file": "verbs.zil",
   "line": 873,
   "endLine": 875,
   "source": "<ROUTINE V-TAKE ()\n\t <COND (<EQUAL? <ITAKE> T>\n\t\t<TELL \"Taken.\" CR>)>>"
  },
  "V-TELL": {
   "name": "V-TELL",
   "file": "verbs.zil",
   "line": 877,
   "endLine": 889,
   "source": "<ROUTINE V-TELL ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<COND (,P-CONT\n\t\t       <SETG WINNER ,PRSO>\n\t\t       <SETG HERE <LOC ,WINNER>>)\n\t\t      (T\n\t\t       <TELL\n\"The \" D ,PRSO \" pauses, thinking that you should reread the manual.\" CR>)>)\n\t       (T\n\t\t<TELL \"You can't talk to the \" D ,PRSO \"!\" CR>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<SETG P-CONT <>>\n\t\t<RFATAL>)>>"
  },
  "V-THROW": {
   "name": "V-THROW",
   "file": "verbs.zil",
   "line": 891,
   "endLine": 905,
   "source": "<ROUTINE V-THROW ()\n\t <COND (<IDROP>\n\t\t<COND (<EQUAL? ,PRSI ,ME>\n\t\t       <SETG WINNER ,ADVENTURER>\n\t\t       <TELL \"A terrific throw! The \" D ,PRSO>\n\t\t       <TELL\n\" hits your head. By incredible mischance, you fall trying to duck and break\nyour neck, justice being swift and merciful in\" ,GUE-NAME>\n\t\t       <JIGS-UP \".\">)\n\t\t      (<AND ,PRSI <FSET? ,PRSI ,ACTORBIT>>\n\t\t       <TELL \"The \" D ,PRSI \" ducks.\" CR>)\n\t\t      (T\n\t\t       <TELL \"Thrown.\" CR>)>)\n\t       (T\n\t\t<TELL \"Huh?\" CR>)>>"
  },
  "V-THROW-OFF": {
   "name": "V-THROW-OFF",
   "file": "verbs.zil",
   "line": 907,
   "endLine": 908,
   "source": "<ROUTINE V-THROW-OFF ()\n\t <TELL \"You can't throw anything off of that!\" CR>>"
  },
  "V-TIE": {
   "name": "V-TIE",
   "file": "verbs.zil",
   "line": 910,
   "endLine": 911,
   "source": "<ROUTINE V-TIE ()\n\t <TELL \"You can't tie the \" D ,PRSO \" to that.\" CR>>"
  },
  "V-TIE-UP": {
   "name": "V-TIE-UP",
   "file": "verbs.zil",
   "line": 913,
   "endLine": 914,
   "source": "<ROUTINE V-TIE-UP ()\n\t <TELL \"You could certainly never tie it with that!\" CR>>"
  },
  "V-TURN": {
   "name": "V-TURN",
   "file": "verbs.zil",
   "line": 916,
   "endLine": 917,
   "source": "<ROUTINE V-TURN ()\n\t <TELL \"You can't turn that!\" CR>>"
  },
  "V-UNLOCK": {
   "name": "V-UNLOCK",
   "file": "verbs.zil",
   "line": 919,
   "endLine": 920,
   "source": "<ROUTINE V-UNLOCK ()\n\t <V-LOCK>>"
  },
  "V-UNTIE": {
   "name": "V-UNTIE",
   "file": "verbs.zil",
   "line": 922,
   "endLine": 923,
   "source": "<ROUTINE V-UNTIE ()\n\t <TELL \"This cannot be tied, so it cannot be untied!\" CR>>"
  },
  "V-WAIT": {
   "name": "V-WAIT",
   "file": "verbs.zil",
   "line": 925,
   "endLine": 932,
   "source": "<ROUTINE V-WAIT (\"AUX\" (NUM 3))\n\t <TELL \"Time passes...\" CR>\n\t <REPEAT ()\n\t\t <COND (<L? <SET NUM <- .NUM 1>> 0>\n\t\t\t<RETURN>)\n\t\t       (<CLOCKER>\n\t\t\t<RETURN>)>>\n\t <SETG CLOCK-WAIT T>>"
  },
  "V-WALK": {
   "name": "V-WALK",
   "file": "verbs.zil",
   "line": 934,
   "endLine": 976,
   "source": "<ROUTINE V-WALK (\"AUX\" PT PTS STR OBJ RM)\n\t <COND (<NOT ,P-WALK-DIR>\n\t\t<PERFORM ,V?WALK-TO ,PRSO>\n\t\t<RTRUE>)\n\t       (<SET PT <GETPT ,HERE ,PRSO>>\n\t\t<COND (<EQUAL? <SET PTS <PTSIZE .PT>> ,UEXIT>\n\t\t       <GOTO <GETB .PT ,REXIT>>)\n\t\t      (<EQUAL? .PTS ,NEXIT>\n\t\t       <TELL <GET .PT ,NEXITSTR> CR>\n\t\t       <RFATAL>)\n\t\t      (<EQUAL? .PTS ,FEXIT>\n\t\t       <COND (<SET RM <APPLY <GET .PT ,FEXITFCN>>>\n\t\t\t      <GOTO .RM>)\n\t\t\t     (T\n\t\t\t      <RFATAL>)>)\n\t\t      (<EQUAL? .PTS ,CEXIT>\n\t\t       <COND (<VALUE <GETB .PT ,CEXITFLAG>>\n\t\t\t      <GOTO <GETB .PT ,REXIT>>)\n\t\t\t     (<SET STR <GET .PT ,CEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <TELL ,CANT-GO>\n\t\t\t      <RFATAL>)>)\n\t\t      (<EQUAL? .PTS ,DEXIT>\n\t\t       <COND (<FSET? <SET OBJ <GETB .PT ,DEXITOBJ>> ,OPENBIT>\n\t\t\t      <GOTO <GETB .PT ,REXIT>>)\n\t\t\t     (<SET STR <GET .PT ,DEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <TELL \"The \" D .OBJ \" is closed.\" CR>\n\t\t\t      <SETG P-IT-OBJECT .OBJ>\n\t\t\t      <RFATAL>)>)>)\n\t       (<AND <NOT ,LIT>\n\t\t     <PROB 80>\n\t\t     <EQUAL? ,WINNER ,ADVENTURER>\n\t\t     <NOT <FSET? ,HERE ,NONLANDBIT>>>\n\t\t<JIGS-UP\n\"Oh, no! You have walked into the slavering fangs of a lurking grue!\">)\n\t       (T\n\t\t<TELL ,CANT-GO>\n\t\t<RFATAL>)>>"
  },
  "V-WALK-AROUND": {
   "name": "V-WALK-AROUND",
   "file": "verbs.zil",
   "line": 978,
   "endLine": 979,
   "source": "<ROUTINE V-WALK-AROUND ()\n\t <TELL \"Use compass directions for movement.\" CR>>"
  },
  "V-WALK-TO": {
   "name": "V-WALK-TO",
   "file": "verbs.zil",
   "line": 981,
   "endLine": 987,
   "source": "<ROUTINE V-WALK-TO ()\n\t <COND (<AND ,PRSO\n\t\t     <OR <IN? ,PRSO ,HERE>\n\t\t\t <GLOBAL-IN? ,PRSO ,HERE>>>\n\t\t<TELL \"It's here!\" CR>)\n\t       (T\n\t\t<V-WALK-AROUND>)>>"
  },
  "V-WAVE": {
   "name": "V-WAVE",
   "file": "verbs.zil",
   "line": 989,
   "endLine": 990,
   "source": "<ROUTINE V-WAVE ()\n\t <HACK-HACK \"Waving the \">>"
  },
  "V-YELL": {
   "name": "V-YELL",
   "file": "verbs.zil",
   "line": 992,
   "endLine": 993,
   "source": "<ROUTINE V-YELL ()\n\t <TELL \"Aaaarrrrgggghhhh!\" CR>>"
  },
  "V-ZORK": {
   "name": "V-ZORK",
   "file": "verbs.zil",
   "line": 995,
   "endLine": 996,
   "source": "<ROUTINE V-ZORK ()\n\t <TELL \"At your service!\" CR>>"
  },
  "DESCRIBE-ROOM": {
   "name": "DESCRIBE-ROOM",
   "file": "verbs.zil",
   "line": 1010,
   "endLine": 1036,
   "source": "<ROUTINE DESCRIBE-ROOM (\"OPTIONAL\" (LOOK? <>) \"AUX\" V? STR AV)\n\t <SET AV <LOC ,WINNER>>\n\t <SET V? <OR .LOOK? <EQUAL? ,VERBOSITY 2>>>\n\t <COND (<NOT ,LIT>\n\t\t<TELL\n\"It is pitch black. You are likely to be eaten by a grue.\" CR>\n\t\t<RFALSE>)>\n\t <COND (<NOT <FSET? ,HERE ,TOUCHBIT>>\n\t\t<FSET ,HERE ,TOUCHBIT>\n\t\t<SET V? T>)>\n\t <COND (<IN? ,HERE ,ROOMS>\n\t\t<TELL D ,HERE>\n\t\t<COND (<FSET? .AV ,VEHBIT>\n\t\t       <TELL \", in the \" D .AV>)>\n\t\t<CRLF>)>\n\t <COND (<OR .LOOK?\n\t\t    <G? ,VERBOSITY 0>\n\t\t    <EQUAL? ,HERE ,ZORK3>>\n\t\t<COND (<AND .V? <APPLY <GETP ,HERE ,P?ACTION> ,M-LOOK>>\n\t\t       <RTRUE>)\n\t\t      (<AND .V? <SET STR <GETP ,HERE ,P?LDESC>>>\n\t\t       <TELL .STR CR>)\n\t\t      (T\n\t\t       <APPLY <GETP ,HERE ,P?ACTION> ,M-FLASH>)>\n\t\t<COND (<AND <NOT <EQUAL? ,HERE .AV>>\n\t\t\t    <FSET? .AV ,VEHBIT>>\n\t\t       <APPLY <GETP .AV ,P?ACTION> ,M-LOOK>)>)>>"
  },
  "DESCRIBE-OBJECTS": {
   "name": "DESCRIBE-OBJECTS",
   "file": "verbs.zil",
   "line": 1038,
   "endLine": 1040,
   "source": "<ROUTINE DESCRIBE-OBJECTS (\"OPTIONAL\" (V? <>))\n\t<COND (<FIRST? ,HERE>\n\t       <PRINT-CONT ,HERE <SET V? <OR .V? <EQUAL? ,VERBOSITY 2>>> -1>)>>"
  },
  "DESCRIBE-OBJECT": {
   "name": "DESCRIBE-OBJECT",
   "file": "verbs.zil",
   "line": 1047,
   "endLine": 1073,
   "source": "<ROUTINE DESCRIBE-OBJECT (OBJ V? LEVEL \"AUX\" (STR <>) AV)\n\t <SETG DESC-OBJECT .OBJ>\n\t <COND (<AND <0? .LEVEL>\n\t\t     <APPLY <GETP .OBJ ,P?DESCFCN> ,M-OBJDESC>>\n\t\t<RTRUE>)\n\t       (<AND <0? .LEVEL>\n\t\t     <OR <AND <NOT <FSET? .OBJ ,TOUCHBIT>>\n\t\t\t      <SET STR <GETP .OBJ ,P?FDESC>>>\n\t\t\t <SET STR <GETP .OBJ ,P?LDESC>>>>\n\t\t<TELL .STR>)\n\t       (<0? .LEVEL>\n\t\t<TELL \"There is a \" D .OBJ \" here\">\n\t\t<COND (<FSET? .OBJ ,ONBIT>\n\t\t       <TELL \" (providing light)\">)>\n\t\t<TELL \".\">)\n\t       (T\n\t\t<TELL <GET ,INDENTS .LEVEL>>\n\t\t<TELL \"A \" D .OBJ>\n\t\t<COND (<FSET? .OBJ ,ONBIT>\n\t\t       <TELL \" (providing light)\">)>)>\n\t <COND (<AND <EQUAL? .OBJ ,SPELL-VICTIM>\n\t\t     <EQUAL? ,SPELL-USED ,W?FLOAT>>\n\t\t<TELL \" (floating in midair)\">)>\n\t <CRLF>\n\t <COND (<AND <SEE-INSIDE? .OBJ>\n\t\t     <FIRST? .OBJ>>\n\t\t<PRINT-CONT .OBJ .V? .LEVEL>)>>"
  },
  "PRINT-CONTENTS": {
   "name": "PRINT-CONTENTS",
   "file": "verbs.zil",
   "line": 1075,
   "endLine": 1096,
   "source": "<ROUTINE PRINT-CONTENTS (OBJ \"AUX\" F N (1ST? T) (IT? <>) (TWO? <>))\n\t <COND (<SET F <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<SET N <NEXT? .F>>\n\t\t\t<COND (.1ST?\n\t\t\t       <SET 1ST? <>>)\n\t\t\t      (T\n\t\t\t       <TELL \", \">\n\t\t\t       <COND (<NOT .N>\n\t\t\t\t      <TELL \"and \">)>)>\n\t\t\t<TELL \"a \" D .F>\n\t\t\t<COND (<AND <NOT .IT?>\n\t\t\t\t    <NOT .TWO?>>\n\t\t\t       <SET IT? .F>)\n\t\t\t      (T\n\t\t\t       <SET TWO? T>\n\t\t\t       <SET IT? <>>)>\n\t\t\t<SET F .N>\n\t\t\t<COND (<NOT .F>\n\t\t\t       <COND (<AND .IT? <NOT .TWO?>>\n\t\t\t\t      <SETG P-IT-OBJECT .IT?>)>\n\t\t\t       <RTRUE>)>>)>>"
  },
  "PRINT-CONT": {
   "name": "PRINT-CONT",
   "file": "verbs.zil",
   "line": 1098,
   "endLine": 1166,
   "source": "<ROUTINE PRINT-CONT (OBJ \"OPTIONAL\" (V? <>) (LEVEL 0)\n\t\t     \"AUX\" Y 1ST? SHIT AV STR (PV? <>) (INV? <>))\n\t <COND (<NOT <SET Y <FIRST? .OBJ>>>\n\t\t<RTRUE>)>\n\t <COND (<AND <SET AV <LOC ,WINNER>>\n\t\t     <FSET? .AV ,VEHBIT>>\n\t\tT)\n\t       (T\n\t\t<SET AV <>>)>\n\t <SET 1ST? T>\n\t <SET SHIT T>\n\t <COND (<EQUAL? ,WINNER .OBJ <LOC .OBJ>>\n\t\t<SET INV? T>)\n\t       (T\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT .Y>\n\t\t\t       <COND (<AND <0? .LEVEL>\n\t\t\t\t\t   <==? ,SPELL? ,S-FANTASIZE>\n\t\t\t\t\t   <PROB 20>>\n\t\t\t\t      <TELL \"There is a \"\n\t\t\t\t\t    <PICK-ONE ,FANTASIES> \" here.\" CR>\n\t\t\t\t      <SET 1ST? <>>)>\n\t\t\t       <RETURN <NOT .1ST?>>)\n\t\t\t      (<EQUAL? .Y .AV>\n\t\t\t       <SET PV? T>)\n\t\t\t      (<EQUAL? .Y ,WINNER>)\n\t\t\t      (<AND <NOT <FSET? .Y ,INVISIBLE>>\n\t\t\t\t    <NOT <FSET? .Y ,TOUCHBIT>>\n\t\t\t\t    <SET STR <GETP .Y ,P?FDESC>>>\n\t\t\t       <COND (<NOT <FSET? .Y ,NDESCBIT>>\n\t\t\t\t      <TELL .STR CR>\n\t\t\t\t      <SET SHIT <>>)>\n\t\t\t       <COND (<AND <SEE-INSIDE? .Y>\n\t\t\t\t\t   <NOT <GETP <LOC .Y> ,P?DESCFCN>>\n\t\t\t\t\t   <FIRST? .Y>>\n\t\t\t\t      <COND (<PRINT-CONT .Y .V? 0>\n\t\t\t\t\t     <SET 1ST? <>>)>)>)>\n\t\t\t<SET Y <NEXT? .Y>>>)>\n\t <SET Y <FIRST? .OBJ>>\n\t <REPEAT ()\n\t\t <COND (<NOT .Y>\n\t\t\t<COND (<AND .PV? .AV <FIRST? .AV>>\n\t\t\t       <SET LEVEL <+ .LEVEL 1>>\n\t\t\t       <PRINT-CONT .AV .V? .LEVEL>)>\n\t\t\t<RETURN>)\n\t\t       (<EQUAL? .Y .AV ,ADVENTURER>)\n\t\t       (<AND <NOT <FSET? .Y ,INVISIBLE>>\n\t\t\t     <OR .INV?\n\t\t\t\t <FSET? .Y ,TOUCHBIT>\n\t\t\t\t <NOT <GETP .Y ,P?FDESC>>>>\n\t\t\t<COND (<NOT <FSET? .Y ,NDESCBIT>>\n\t\t\t       <COND (.1ST?\n\t\t\t\t      <COND (<FIRSTER .OBJ .LEVEL>\n\t\t\t\t\t     <COND (<L? .LEVEL 0>\n\t\t\t\t\t\t    <SET LEVEL 0>)>)>\n\t\t\t\t      <SET LEVEL <+ 1 .LEVEL>>\n\t\t\t\t      <SET 1ST? <>>)>\n\t\t\t       <COND (<L? .LEVEL 0> <SET LEVEL 0>)>\n\t\t\t       <DESCRIBE-OBJECT .Y .V? .LEVEL>)\n\t\t\t      (<AND <FIRST? .Y>\n\t\t\t\t    <SEE-INSIDE? .Y>>\n\t\t\t       <SET LEVEL <+ .LEVEL 1>>\n\t\t\t       <PRINT-CONT .Y .V? .LEVEL>\n\t\t\t       <SET LEVEL <- .LEVEL 1>>)>)>\n\t\t <SET Y <NEXT? .Y>>>\n\t <COND (<AND .1ST? .SHIT>\n\t\t<RFALSE>)\n\t       (T\n\t\t<RTRUE>)>>"
  },
  "FIRSTER": {
   "name": "FIRSTER",
   "file": "verbs.zil",
   "line": 1168,
   "endLine": 1179,
   "source": "<ROUTINE FIRSTER (OBJ LEVEL)\n\t <COND (<EQUAL? .OBJ ,WINNER>\n\t\t<TELL \"You have:\" CR>)\n\t       (<NOT <IN? .OBJ ,ROOMS>>\n\t\t<COND (<G? .LEVEL 0>\n\t\t       <TELL <GET ,INDENTS .LEVEL>>)>\n\t\t<COND (<FSET? .OBJ ,SURFACEBIT>\n\t\t       <TELL \"Sitting on the \" D .OBJ \" is: \" CR>)\n\t\t      (<FSET? .OBJ ,ACTORBIT>\n\t\t       <TELL \"The \" D .OBJ \" is holding: \" CR>)\n\t\t      (T\n\t\t       <TELL \"The \" D .OBJ \" contains:\" CR>)>)>>"
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
   "endLine": 1225,
   "source": "<ROUTINE JIGS-UP (DESC \"AUX\" F N)\n \t <TELL .DESC CR>\n\t <COND (<NOT <EQUAL? ,ADVENTURER ,WINNER>>\n\t\t<TELL \"|    ****  The \" D ,WINNER \" has died  ****\" CR CR>\n\t\t<REMOVE ,WINNER>\n\t\t<SETG WINNER ,ADVENTURER>\n\t\t<SETG HERE <LOC ,WINNER>>\n\t\t<RFATAL>)>\n\t <SETG SCORE <- ,SCORE 10>>\n\t <TELL \"|    ****  You have died  ****\" CR CR>\n\t <SETG DEAD T>\n\t <SETG SPELL? <>>\n\t <PUTP ,ADVENTURER ,P?ACTION 0>\n\t <SETG DEATHS <+ ,DEATHS 1>>\n\t <MOVE ,WINNER ,HERE>\n\t <FCLEAR ,DEAD-PALANTIR-1 ,TOUCHBIT>\n\t <FCLEAR ,DEAD-PALANTIR-2 ,TOUCHBIT>\n\t <FCLEAR ,DEAD-PALANTIR-3 ,TOUCHBIT>\n\t <COND (<IN? ,LAMP ,WINNER>\n\t\t<MOVE ,LAMP ,INSIDE-THE-BARROW>)>\n\t <SET N <FIRST? ,WINNER>>\n\t <REPEAT ()\n\t\t <SET F .N>\n\t\t <COND (<NOT .F>\n\t\t\t<RETURN>)>\n\t\t <SET N <NEXT? .F>>\n\t\t <COND (<GETP .F ,P?VALUE>\n\t\t\t<MOVE .F ,CAROUSEL-ROOM>)\n\t\t       (T\n\t\t\t<MOVE .F ,GAZEBO>)>>\n\t <GOTO ,DEAD-PALANTIR-1>\n\t <SETG P-CONT <>>\n\t <DRAGON-LEAVES>\n\t <DISABLE <INT I-MATCH>>\n\t <RFATAL>>"
  },
  "NO-GO-TELL": {
   "name": "NO-GO-TELL",
   "file": "verbs.zil",
   "line": 1241,
   "endLine": 1247,
   "source": "<ROUTINE NO-GO-TELL (AV WLOC)\n\t <TELL \"You can't go there \">\n\t <COND (.AV\n\t\t<TELL \"in a \" D .WLOC>)\n\t       (T\n\t\t<TELL \"without a vehicle\">)>\n\t <TELL ,PERIOD-CR>>"
  },
  "GOTO": {
   "name": "GOTO",
   "file": "verbs.zil",
   "line": 1249,
   "endLine": 1312,
   "source": "<ROUTINE GOTO (RM \"OPTIONAL\" (V? T)\n\t       \"AUX\" (LB <FSET? .RM ,RLANDBIT>) (WLOC <LOC ,WINNER>)\n\t             (AV <>) OLIT OHERE)\n\t <SET OLIT ,LIT>\n\t <SET OHERE ,HERE>\n\t <COND (<FSET? .WLOC ,VEHBIT>\n\t\t<SET AV <GETP .WLOC ,P?VTYPE>>)>\n\t <COND (<AND <NOT .LB>\n\t\t     <NOT .AV>>\n\t\t<NO-GO-TELL .AV .WLOC>\n\t\t<RFALSE>)\n\t       (<AND <NOT .LB>\n\t\t     <NOT <FSET? .RM .AV>>>\n\t\t<NO-GO-TELL .AV .WLOC>\n\t\t<RFALSE>)\n\t       (<AND <FSET? ,HERE ,RLANDBIT>\n\t\t     .LB\n\t\t     .AV\n\t\t     <NOT <EQUAL? .AV ,RLANDBIT>>\n\t\t     <NOT <FSET? .RM .AV>>>\n\t\t<NO-GO-TELL .AV .WLOC>\n\t\t<RFALSE>)\n\t       (T\n\t\t<COND (<AND .LB\n\t\t\t    <NOT <FSET? ,HERE ,RLANDBIT>>\n\t\t\t    <NOT ,DEAD>\n\t\t\t    <FSET? .WLOC ,VEHBIT>>\n\t\t       <COND (<EQUAL? .WLOC ,BALLOON>\n\t\t\t      <TELL \"The balloon lands.\" CR>)\n\t\t\t     (<FSET? .WLOC ,VEHBIT>\n\t\t\t      <TELL \"The \" D .WLOC ,STOPS>)>)>\n\t\t<COND (.AV\n\t\t       <MOVE .WLOC .RM>)\n\t\t      (T\n\t\t       <MOVE ,WINNER .RM>)>\n\t\t<SETG HERE .RM>\n\t\t<SETG LIT <LIT? ,HERE>>\n\t\t<COND (<AND <NOT .OLIT>\n\t\t\t    <NOT ,LIT>\n\t\t\t    <PROB 80>>\n\t\t       <TELL \"Oh, no! A lurking grue slithered into the \">\n\t\t       <COND (<FSET? <LOC ,WINNER> ,VEHBIT>\n\t\t\t      <TELL D <LOC ,WINNER>>)\n\t\t\t     (T\n\t\t\t      <TELL \"room\">)>\n\t\t       <JIGS-UP \" and devoured you!\">\n\t\t       <RTRUE>)>\n\t\t<COND (<AND <NOT ,LIT>\n\t\t\t    <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t       <TELL \"You have moved into a dark place.\" CR>\n\t\t       <SETG P-CONT <>>)>\n\t\t<APPLY <GETP ,HERE ,P?ACTION> ,M-ENTER>\n\t\t<SCORE-OBJ .RM>\n\t\t<COND (<NOT <EQUAL? ,HERE .RM>> <RTRUE>)\n\t\t      (<AND <NOT <EQUAL? ,ADVENTURER ,WINNER>>\n\t\t\t    <IN? ,ADVENTURER .OHERE>>\n\t\t       <TELL \"The \" D ,WINNER \" leaves the room.\" CR>)\n\t\t      (<AND .V?\n\t\t\t    <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t       <DESCRIBE-ROOM>\n\t\t       <COND (<AND ,LIT\n\t\t\t\t   <G? ,VERBOSITY 0>>\n\t\t\t      <DESCRIBE-OBJECTS>)>)>\n\t\t<RTRUE>)>>"
  },
  "ITAKE": {
   "name": "ITAKE",
   "file": "verbs.zil",
   "line": 1322,
   "endLine": 1359,
   "source": "<ROUTINE ITAKE (\"OPTIONAL\" (VB T) \"AUX\" CNT OBJ)\n\t <COND (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t\t<COND (.VB\n\t\t       <TELL <PICK-ONE ,YUKS> CR>)>\n\t\t<RFALSE>)\n\t       (<AND <EQUAL? ,PRSO ,SPELL-VICTIM>\n\t\t     <EQUAL? ,SPELL-USED ,W?FLOAT ,W?FREEZE>>\n\t\t<COND (<EQUAL? ,SPELL-USED ,W?FLOAT>\n\t\t       <TELL\n\"You can't reach that. It's floating above your head.\" CR>)\n\t\t      (T\n\t\t       <TELL \"It seems rooted to the spot.\" CR>)>\n\t\t<RFALSE>)\n\t       (<AND <FSET? <LOC ,PRSO> ,CONTBIT>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t;\"Kludge for parser calling itake\"\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? <LOC ,PRSO> ,WINNER>>\n\t\t     <G? <+ <WEIGHT ,PRSO> <WEIGHT ,WINNER>> ,LOAD-ALLOWED>>\n\t\t<COND (.VB\n\t\t       <TELL \"Your load is too heavy\">\n\t\t       <COND (<L? ,LOAD-ALLOWED 100>\n\t\t\t      <TELL\", especially in light of your condition.\">)\n\t\t\t     (T\n\t\t\t      <TELL \".\">)>\n\t\t       <CRLF>)>\n\t\t<RFATAL>)\n\t       (<AND <VERB? TAKE>\n\t\t     <G? <SET CNT <CCOUNT ,WINNER>> ,FUMBLE-NUMBER>\n\t\t     <PROB <* .CNT ,FUMBLE-PROB>>>\n\t\t<TELL \"You're holding too many things already!\" CR>\n\t\t<RFALSE>)\n\t       (T\n\t\t<MOVE ,PRSO ,WINNER>\n\t\t<FCLEAR ,PRSO ,NDESCBIT>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<SCORE-OBJ ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "IDROP": {
   "name": "IDROP",
   "file": "verbs.zil",
   "line": 1361,
   "endLine": 1372,
   "source": "<ROUTINE IDROP ()\n\t <COND (<AND <NOT <IN? ,PRSO ,WINNER>>\n\t\t     <NOT <IN? <LOC ,PRSO> ,WINNER>>>\n\t\t<TELL \"You're not carrying the \" D ,PRSO ,PERIOD-CR>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? ,PRSO ,WINNER>>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<TELL \"The \" D ,PRSO \" is closed.\" CR>\n\t\t<RFALSE>)\n\t       (T\n\t\t<MOVE ,PRSO <LOC ,WINNER>>\n\t\t<RTRUE>)>>"
  },
  "CCOUNT": {
   "name": "CCOUNT",
   "file": "verbs.zil",
   "line": 1374,
   "endLine": 1380,
   "source": "<ROUTINE CCOUNT (OBJ \"AUX\" (CNT 0) X)\n\t <COND (<SET X <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t     <SET CNT <+ .CNT 1>>\n\t\t     <COND (<NOT <SET X <NEXT? .X>>>\n\t\t\t    <RETURN>)>>)>\n\t .CNT>"
  },
  "WEIGHT": {
   "name": "WEIGHT",
   "file": "verbs.zil",
   "line": 1382,
   "endLine": 1388,
   "source": "<ROUTINE WEIGHT (OBJ \"AUX\" CONT (WT 0))\n\t <COND (<SET CONT <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<SET WT <+ .WT <WEIGHT .CONT>>>\n\t\t\t<COND (<NOT <SET CONT <NEXT? .CONT>>>\n\t\t\t       <RETURN>)>>)>\n\t <+ .WT <GETP .OBJ ,P?SIZE>>>"
  },
  "BALLOON-F": {
   "name": "BALLOON-F",
   "file": "volcano.zil",
   "line": 43,
   "endLine": 136,
   "source": "<ROUTINE BALLOON-F (\"OPTIONAL\" (RARG <>) \"AUX\" M R RC)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<COND (,BALLOON-INFLATED\n\t\t       <TELL \"The cloth bag is inflated and \">\n\t\t       <COND (<FSET? ,RECEPTACLE ,OPENBIT>\n\t\t\t      <TELL\n\"a \" D ,BALLOON-INFLATED \" is burning in the\">)\n\t\t\t     (T\n\t\t\t      <TELL \"smoke leaks out of the closed\">)>\n\t\t       <TELL \" receptacle.\">)\n\t\t      (T\n\t\t       <TELL\n\"The cloth bag is draped over the side of the basket. In the middle of the\nbasket is a metal receptacle which is \">\n\t\t       <COND (<FSET? ,RECEPTACLE ,OPENBIT>\n\t\t\t      <TELL \"open\">\n\t\t\t      <SET RC <FIRST? ,RECEPTACLE>>\n\t\t\t      <COND (.RC\n\t\t\t\t     <TELL \". A \" D .RC \" is \">\n\t\t\t\t     <COND (<EQUAL? ,BALLOON-INFLATED .RC>\n\t\t\t\t\t    <TELL \"burning\">)\n\t\t\t\t\t   (T\n\t\t\t\t\t    <TELL \"nestled\">)>\n\t\t\t\t     <TELL \" inside\">)>)\n\t\t\t     (T\n\t\t\t      <TELL \"closed\">)>\n\t\t       <TELL \". A braided wire \">)>\n\t\t<COND (,BALLOON-TIED\n\t\t       <TELL \"connects the balloon to the hook.\">)\n\t\t      (T\n\t\t       <TELL \"dangles from the basket.\">)>\n\t\t<TELL ,PERIOD-CR>)\n\t       (<EQUAL? .RARG ,M-OBJDESC>\n\t\t<TELL\n\"There is a large heavy wicker basket here. A huge cloth bag is\nattached to the basket and \">\n\t\t<COND (,BALLOON-INFLATED\n\t\t       <TELL \"inflated\">)\n\t\t      (T\n\t\t       <TELL \"and draped over the side\">)>\n\t\t<TELL\n\". A metal receptacle is fastened to the center of the basket\">\n\t\t<COND (,BALLOON-INFLATED\n\t\t       <COND (<FSET? ,RECEPTACLE ,OPENBIT>\n\t\t\t      <TELL\n\". In it is a burning \" D ,BALLOON-INFLATED>)\n\t\t\t     (T\n\t\t\t      <TELL \". Smoke leaks from its closed lid\">)>)>\n\t\t<TELL \". A piece of braided wire \">\n\t\t<COND (,BALLOON-TIED\n\t\t       <TELL\n\"tied to the hook holds the balloon in place.\" CR>)\n\t\t      (T\n\t\t       <TELL \"dangles from the basket.\" CR>)>)\n\t       (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<VERB? WALK>\n\t\t       <COND (<SET M <GETPT ,HERE ,PRSO>>\n\t\t\t      <COND (,BALLOON-TIED\n\t\t\t\t     <TELL \"You are tied to the ledge.\" CR>\n\t\t\t\t     <RTRUE>)\n\t\t\t\t    (T\n\t\t\t\t     <AND <EQUAL? <PTSIZE .M> 1>\n\t\t\t\t\t  <SETG BALLOON-LOC .R>>\n\t\t\t\t     <ENABLE <QUEUE I-BALLOON 3>>\n\t\t\t\t     <RFALSE>)>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"You can't control the balloon this way.\" CR>\n\t\t\t      <RTRUE>)>)\n\t\t      (<AND <VERB? OPEN>\n\t\t\t    ,BALLOON-INFLATED\n\t\t\t    <EQUAL? ,PRSO ,RECEPTACLE>\n\t\t\t    <FIRST? ,RECEPTACLE>>\n\t\t       <FSET ,RECEPTACLE ,OPENBIT>\n\t\t       <TELL\n\"Opening it reveals a burning \" D ,BALLOON-INFLATED ,PERIOD-CR>\n\t\t       <RTRUE>)\n\t\t      (<AND <VERB? TAKE>\n\t\t\t    <EQUAL? ,BALLOON-INFLATED ,PRSO>>\n\t\t       <TELL\n\"You don't really want to hold a burning \" D ,PRSO ,PERIOD-CR>\n\t\t       <RTRUE>)\n\t\t      (<AND <VERB? PUT>\n\t\t\t    <EQUAL? ,PRSI ,RECEPTACLE>\n\t\t\t    <FIRST? ,RECEPTACLE>>\n\t\t       <TELL \"The receptacle is already occupied.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<AND <VERB? PUT>\n\t\t\t    <EQUAL? ,PRSI ,RECEPTACLE>>\n\t\t       <FSET ,PRSO ,NDESCBIT>\n\t\t       <RFALSE>)\n\t\t      (<VERB? INFLATE>\n\t\t       <TELL\n\"It takes more than words to inflate a balloon.\" CR>)>)>>"
  },
  "I-BALLOON": {
   "name": "I-BALLOON",
   "file": "volcano.zil",
   "line": 138,
   "endLine": 145,
   "source": "<ROUTINE I-BALLOON ()\n\t <COND (<AND <FSET? ,RECEPTACLE ,OPENBIT>\n\t\t     ,BALLOON-INFLATED>\n\t\t<RISE-AND-SHINE>)\n\t       (<EQUAL? ,HERE ,NARROW-LEDGE ,WIDE-LEDGE>\n\t\t<RISE-AND-SHINE>)\n\t       (T\n\t\t<DECLINE-AND-FALL>)>>"
  },
  "BALLOON-BURN": {
   "name": "BALLOON-BURN",
   "file": "volcano.zil",
   "line": 147,
   "endLine": 163,
   "source": "<ROUTINE BALLOON-BURN ()\n \t<TELL \"The \" D ,PRSO \" burns inside the receptacle.\" CR>\n\t<ENABLE <QUEUE I-BURNUP <* <GETP ,PRSO ,P?SIZE> 20>>>\n\t<FSET ,PRSO ,FLAMEBIT>\n\t<FSET ,PRSO ,ONBIT>\n\t<FCLEAR ,PRSO ,TAKEBIT>\n\t<FCLEAR ,PRSO ,READBIT>\n\t<COND (,BALLOON-INFLATED\n\t       <RTRUE>)\n\t      (T\n\t       <TELL \"The cloth bag inflates as it fills with hot air.\" CR>\n\t       <COND (<NOT ,LABEL-REVEALED>\n\t\t      <MOVE ,BALLOON-LABEL ,BALLOON>\n\t\t      <TELL \"A label drops from the bag into the basket.\" CR>)>\n\t       <SETG LABEL-REVEALED T>\n\t       <SETG BALLOON-INFLATED ,PRSO>\n\t       <ENABLE <QUEUE I-BALLOON 3>>)>>"
  },
  "PUT-BALLOON": {
   "name": "PUT-BALLOON",
   "file": "volcano.zil",
   "line": 165,
   "endLine": 169,
   "source": "<ROUTINE PUT-BALLOON (THERE STR)\n\t<COND (<EQUAL? ,HERE ,NARROW-LEDGE ,WIDE-LEDGE ,VOLCANO-BOTTOM>\n\t       <TELL \"You watch as the balloon slowly \" .STR CR>)>\n\t<MOVE ,BALLOON .THERE>\n\t<SETG BALLOON-LOC .THERE>>"
  },
  "RISE-AND-SHINE": {
   "name": "RISE-AND-SHINE",
   "file": "volcano.zil",
   "line": 181,
   "endLine": 217,
   "source": "<ROUTINE RISE-AND-SHINE (\"AUX\" (IN <IN? ,WINNER ,BALLOON>) R)\n\t<ENABLE <QUEUE I-BALLOON 3>>\n\t<COND (<EQUAL? ,BALLOON-LOC ,VOLCANO-BY-WIDE-LEDGE>\n\t       <DISABLE <INT I-BURNUP>>\n\t       <DISABLE <INT I-BALLOON>>\n\t       <REMOVE ,BALLOON>\n\t       <COND (.IN\n\t\t      <JIGS-UP\n\"The balloon floats majestically out of the volcano, revealing a breathtaking\nview of a forest clearing with a white house. High winds carry you into the\nsnow-capped (and jagged) cliffs of the Flathead Mountains!\">)\n\t\t     (<EQUAL? ,HERE ,NARROW-LEDGE ,WIDE-LEDGE ,VOLCANO-BOTTOM>\n\t\t      <TELL\n\"You watch the balloon drift over the rim and away on the wind.\" CR>)>\n\t       <SETG BALLOON-LOC ,VOLCANO-BOTTOM>)\n\t      (<SET R <LKP ,BALLOON-LOC ,BALLOON-UPS>>\n\t       <COND (.IN\n\t\t      <TELL \"The balloon ascends.\" CR CR>\n\t\t      <SETG BALLOON-LOC .R>\n\t\t      <GOTO .R>)\n\t\t     (T\n\t\t      <PUT-BALLOON .R \"ascends.\">)>)\n\t      (<SET R <LKP ,BALLOON-LOC ,BALLOON-FLOATS>>\n\t       <COND (.IN\n\t\t      <TELL \"The balloon leaves the ledge.\" CR CR>\n\t\t      <SETG BALLOON-LOC .R>\n\t\t      <GOTO .R>)\n\t\t     (T\n\t\t      <PUT-BALLOON .R\n\"floats, ascending due to its light load.\">\n\t\t      <FSET ,RECEPTACLE ,OPENBIT>)>)\n\t      (.IN\n\t       <SETG BALLOON-LOC ,VOLCANO-CORE>\n\t       <TELL \"The balloon rises slowly from the ground.\" CR CR>\n\t       <GOTO ,VOLCANO-CORE>)\n\t      (T\n\t       <PUT-BALLOON ,VOLCANO-CORE \"lifts off.\">)>>"
  },
  "DECLINE-AND-FALL": {
   "name": "DECLINE-AND-FALL",
   "file": "volcano.zil",
   "line": 219,
   "endLine": 243,
   "source": "<ROUTINE DECLINE-AND-FALL (\"AUX\" (IN <IN? ,WINNER ,BALLOON>) R)\n    <ENABLE <QUEUE I-BALLOON 3>>\n    <COND (<EQUAL? ,BALLOON-LOC ,VOLCANO-CORE>\n\t   <COND (.IN\n\t\t  <SETG BALLOON-LOC ,VOLCANO-BOTTOM>\n\t\t  <COND (,BALLOON-INFLATED\n\t\t\t <TELL \"The balloon has landed.\" CR CR>\n\t\t\t <GOTO ,VOLCANO-BOTTOM>)\n\t\t\t(T\n\t\t\t <REMOVE ,BALLOON>\n\t\t\t <MOVE ,ADVENTURER ,HERE>\n\t\t\t <DISABLE <INT I-BALLOON>>\n\t\t\t <TELL\n\"The balloon smashes into dust against the volcano floor.\nYou, miraculously, survive.\" CR CR>\n\t\t\t <GOTO ,VOLCANO-BOTTOM>)>)\n\t\t (T\n\t\t  <PUT-BALLOON ,VOLCANO-BOTTOM \"lands.\">)>)\n\t   (<SET R <LKP ,BALLOON-LOC ,BALLOON-DOWNS>>\n\t    <COND (.IN\n\t\t   <TELL \"The balloon descends.\" CR CR>\n\t\t   <SETG BALLOON-LOC .R>\n\t\t   <GOTO .R>)\n\t\t  (T\n\t\t   <PUT-BALLOON .R \"descends.\">)>)>>"
  },
  "LKP": {
   "name": "LKP",
   "file": "volcano.zil",
   "line": 245,
   "endLine": 252,
   "source": "<ROUTINE LKP (ITM TBL \"AUX\" (CNT 0) (LEN <GET .TBL 0>))\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> .LEN>\n\t\t\t<RFALSE>)\n\t\t       (<EQUAL? <GET .TBL .CNT> .ITM>\n\t\t\t<COND (<EQUAL? .CNT .LEN> <RFALSE>)\n\t\t\t      (T\n\t\t\t       <RETURN <GET .TBL <+ .CNT 1>>>)>)>>>"
  },
  "I-BURNUP": {
   "name": "I-BURNUP",
   "file": "volcano.zil",
   "line": 254,
   "endLine": 260,
   "source": "<ROUTINE I-BURNUP (\"AUX\" (OBJ <FIRST? ,RECEPTACLE>))\n\t <COND (<EQUAL? ,HERE ,BALLOON-LOC>\n\t\t<TELL\n\"The \" D .OBJ \" has now burned out, and the cloth bag starts to deflate.\" CR>)>\n\t <REMOVE .OBJ>\n\t <SETG BALLOON-INFLATED <>>\n\t <RTRUE>>"
  },
  "BRAIDED-WIRE-F": {
   "name": "BRAIDED-WIRE-F",
   "file": "volcano.zil",
   "line": 283,
   "endLine": 300,
   "source": "<ROUTINE BRAIDED-WIRE-F ()\n        <COND (<VERB? TAKE FIND EXAMINE>\n\t       <BCONTENTS>)\n\t      (<AND <VERB? TIE>\n\t\t    <EQUAL? ,PRSO ,BRAIDED-WIRE>\n\t\t    <EQUAL? ,PRSI ,HOOK>>\n\t       <SETG BALLOON-TIED ,PRSI>\n\t       <DISABLE <INT I-BALLOON>>\n\t       <TELL \"The balloon is fastened to the hook.\" CR>)\n\t      (<AND <VERB? UNTIE>\n\t            <EQUAL? ,PRSO ,BRAIDED-WIRE>>\n\t       <TELL \"The wire is no\">\n\t       <COND (,BALLOON-TIED\n\t\t      <ENABLE <QUEUE I-BALLOON 3>>\n\t\t      <SETG BALLOON-TIED <>>\n\t              <TELL \"w unhooked.\" CR>)\n\t\t     (T\n\t\t      <TELL \"t tied to anything.\" CR>)>)>>"
  },
  "BCONTENTS": {
   "name": "BCONTENTS",
   "file": "volcano.zil",
   "line": 319,
   "endLine": 340,
   "source": "<ROUTINE BCONTENTS ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL\n\"The \" D ,PRSO \" is an integral part of the basket and cannot be removed.\">\n\t\t<COND (<EQUAL? ,PRSO ,BRAIDED-WIRE>\n\t\t       <TELL \" It might be tied, though.\">)>\n\t\t<CRLF>)\n\t       (<VERB? OPEN>\n\t\t<TELL \"The bag is enormous. You can't open it by hand.\" CR>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<TELL \"It seems empty.\" CR>)\n\t       (<AND <VERB? EXAMINE>\n\t\t     <EQUAL? ,PRSO ,RECEPTACLE>>\n\t\t<TELL \"The receptacle is \">\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"open.\" CR>)\n\t\t      (T\n\t\t       <TELL \"closed.\" CR>)>)\n\t       (<VERB? FIND EXAMINE>\n\t        <TELL\n\"The \" D ,PRSO \" is part of the basket. It may be manipulated\nwithin the basket but cannot be removed.\" CR>)>>"
  },
  "VOLCANO-BY-LEDGE-F": {
   "name": "VOLCANO-BY-LEDGE-F",
   "file": "volcano.zil",
   "line": 365,
   "endLine": 380,
   "source": "<ROUTINE VOLCANO-BY-LEDGE-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \"You are about \">\n\t\t<COND (<EQUAL? ,HERE ,VOLCANO-BY-SMALL-LEDGE>\n\t\t       <TELL \"15\">)\n\t\t      (T\n\t\t       <TELL \"20\">)>\n\t\t<TELL \"0 feet up, \">\n\t\t<COND (<EQUAL? ,HERE ,VOLCANO-BY-WIDE-LEDGE>\n\t\t       <TELL \"very \">)>\n\t\t<TELL \"near the rim of the volcano. To the \">\n\t\t<COND (<EQUAL? ,HERE ,VOLCANO-BY-SMALL-LEDGE>\n\t\t       <TELL \"east is a narrow\">)\n\t\t      (T\n\t\t       <TELL \"west is a wide\">)>\n\t\t<TELL \"ledge.\" CR>)>>"
  },
  "RANDOM-BOOK-F": {
   "name": "RANDOM-BOOK-F",
   "file": "volcano.zil",
   "line": 443,
   "endLine": 448,
   "source": "<ROUTINE RANDOM-BOOK-F ()\n\t <COND (<VERB? TAKE MOVE PUT>\n\t\t<FSET ,WHITE-BOOK ,TOUCHBIT>\n\t\t<FSET ,PURPLE-BOOK ,TOUCHBIT>\n\t\t<FSET ,BLUE-BOOK ,TOUCHBIT>\n\t\t<RFALSE>)>>"
  },
  "PURPLE-BOOK-F": {
   "name": "PURPLE-BOOK-F",
   "file": "volcano.zil",
   "line": 462,
   "endLine": 470,
   "source": "<ROUTINE PURPLE-BOOK-F ()\n\t <COND (<AND <VERB? READ>\n\t\t     <IN? ,STAMP ,PURPLE-BOOK>\n\t\t     <NOT <FSET? ,PURPLE-BOOK ,OPENBIT>>>\n\t\t<TELL <GETP ,PURPLE-BOOK ,P?TEXT> CR>\n\t\t<PERFORM ,V?OPEN ,PURPLE-BOOK>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RANDOM-BOOK-F>)>>"
  },
  "LEDGE-F": {
   "name": "LEDGE-F",
   "file": "volcano.zil",
   "line": 489,
   "endLine": 501,
   "source": "<ROUTINE LEDGE-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \"You are on a \">\n\t\t<COND (<EQUAL? ,HERE ,NARROW-LEDGE>\n\t\t       <TELL \"small\">)\n\t\t      (T\n\t\t       <TELL \"large\">)>\n\t\t<TELL\n\" ledge high in the volcano. There is a small opening to the south\">\n\t\t<COND (<AND ,DUSTY-ROOM-COLLAPSED\n\t\t\t    <EQUAL? ,HERE ,WIDE-LEDGE>>\n\t\t       <TELL \" which is blocked by rubble\">)>\n\t\t<TELL \". Imbedded in the rock is a small hook.\" CR>)>>"
  },
  "DUSTY-ROOM-F": {
   "name": "DUSTY-ROOM-F",
   "file": "volcano.zil",
   "line": 521,
   "endLine": 531,
   "source": "<ROUTINE DUSTY-ROOM-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are in a featureless room with an exit on the north side. Imbedded in the\nfar wall is a rusty box\">\n\t\t<COND (<NOT <FSET? ,SAFE ,OPENBIT>>\n\t\t       <TELL\n\". An oblong hole has been chipped out of the front of it\">)\n\t\t      (T\n\t\t       <TELL \" whose door has been blown off\">)>\n\t\t<TELL ,PERIOD-CR>)>>"
  },
  "SAFE-F": {
   "name": "SAFE-F",
   "file": "volcano.zil",
   "line": 542,
   "endLine": 552,
   "source": "<ROUTINE SAFE-F ()\n\t<COND (<AND <VERB? TAKE>\n\t\t    <EQUAL? ,PRSO ,SAFE>>\n\t       <TELL \"The box is imbedded in the wall.\" CR>)\n\t      (<AND <VERB? OPEN CLOSE>\n\t\t    <FSET? ,SAFE ,OPENBIT>>\n\t       <TELL \"The box has no door!\" CR>)\n\t      (<VERB? OPEN>\n\t       <TELL \"The box is rusted shut.\" CR>)\n\t      (<VERB? CLOSE>\n\t       <TELL \"The box isn't open!\" CR>)>>"
  },
  "SAFE-HOLE-F": {
   "name": "SAFE-HOLE-F",
   "file": "volcano.zil",
   "line": 562,
   "endLine": 565,
   "source": "<ROUTINE SAFE-HOLE-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The hole was someone's failed attempt to chip their way into the box.\" CR>)>>"
  },
  "BRICK-F": {
   "name": "BRICK-F",
   "file": "volcano.zil",
   "line": 603,
   "endLine": 606,
   "source": "<ROUTINE BRICK-F ()\n\t <COND (<VERB? BURN>\n\t\t<REMOVE ,BRICK>\n\t\t<JIGS-UP ,OTHER-PROPERTIES>)>>"
  },
  "FUSE-F": {
   "name": "FUSE-F",
   "file": "volcano.zil",
   "line": 618,
   "endLine": 624,
   "source": "<ROUTINE FUSE-F ()\n\t<COND (<OR <VERB? BURN>\n\t\t   <AND <VERB? LAMP-ON>\n\t\t\t<IN? ,MATCH ,WINNER>\n\t\t\t<FSET? ,MATCH ,ONBIT>>>\n\t       <TELL \"The string starts to burn.\" CR>\n\t       <ENABLE <QUEUE I-FUSE 2>>)>>"
  },
  "I-FUSE": {
   "name": "I-FUSE",
   "file": "volcano.zil",
   "line": 626,
   "endLine": 655,
   "source": "<ROUTINE I-FUSE (\"AUX\" (BRICK-ROOM <LOC ,BRICK>) F)\n\t <COND (<IN? ,FUSE ,BRICK>\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT .BRICK-ROOM>\n\t\t\t       <RFALSE>)\n\t\t\t      (<IN? .BRICK-ROOM ,ROOMS>\n\t\t\t       <RETURN>)\n\t\t\t      (T\n\t\t\t       <SET BRICK-ROOM <LOC .BRICK-ROOM>>)>>\n\t\t<MOVE ,EXPLOSION .BRICK-ROOM>\n\t\t<FCLEAR .BRICK-ROOM ,TOUCHBIT>\n\t\t<COND (<EQUAL? .BRICK-ROOM ,HERE>\n\t\t       <JIGS-UP ,OTHER-PROPERTIES>)\n\t\t      (T\n\t\t       <COND (<IN? ,BRICK ,SAFE-HOLE>\n\t\t\t      <FSET ,SAFE-HOLE ,INVISIBLE>\n\t\t\t      <FSET ,SAFE ,OPENBIT>\n\t\t\t      <FCLEAR ,DUSTY-ROOM ,TOUCHBIT>\n\t\t\t      <ENABLE <QUEUE I-SAFE 5>>)>\n\t\t       <TELL \"There is an explosion nearby.\" CR>\n\t\t       <COND (<SET F <FIRST? .BRICK-ROOM>>\n\t\t\t      <REPEAT ()\n\t\t\t\t      <COND (<FSET? .F ,TAKEBIT>\n\t\t\t\t\t     <FSET .F ,INVISIBLE>)>\n\t\t\t\t      <COND (<NOT <SET F <NEXT? .F>>>\n\t\t\t\t\t     <RETURN>)>>)>)>\n\t\t<REMOVE ,BRICK>)\n\t       (<EQUAL? <LOC ,FUSE> ,WINNER ,HERE>\n\t\t<TELL \"The string burns into nothingness.\" CR>)>\n\t <REMOVE ,FUSE>>"
  },
  "BOMB?": {
   "name": "BOMB?",
   "file": "volcano.zil",
   "line": 657,
   "endLine": 663,
   "source": "<ROUTINE BOMB? (O)\n\t<COND (<AND <EQUAL? .O ,BRICK>\n\t            <IN? ,FUSE ,BRICK>\n\t\t    <NOT <0? <GET <INT I-FUSE> ,C-ENABLED?>>>>\n\t       <RTRUE>)\n\t      (T\n\t       <RFALSE>)>>"
  },
  "I-SAFE": {
   "name": "I-SAFE",
   "file": "volcano.zil",
   "line": 678,
   "endLine": 686,
   "source": "<ROUTINE I-SAFE ()\n\t <SETG DUSTY-ROOM-COLLAPSED T>\n\t <COND (<EQUAL? ,HERE ,DUSTY-ROOM>\n\t\t<JIGS-UP\n\"The room trembles and 5000 tons of rock fall on you.\">)\n\t       (<NOT ,DEAD>\n\t\t<TELL\n\"Probably as a result of that recent explosion, an ominous rumbling\nindicates that a nearby room has collapsed.\" CR>)>>"
  },
  "WIZARD-F": {
   "name": "WIZARD-F",
   "file": "wizard.zil",
   "line": 13,
   "endLine": 45,
   "source": "<ROUTINE WIZARD-F (\"OPTIONAL\" (RARG ,M-OBJECT))\n\t <COND (<OR <EQUAL? ,WINNER ,WIZARD>\n\t\t    <HELLO? ,WIZARD>>\n\t\t<TELL\n\"The Wizard seems surprised, much as you might be if a dog talked.\" CR>)\n\t       (<AND <VERB? GIVE>\n\t\t     <EQUAL? ,PRSI ,WIZARD>>\n\t\t<REMOVE-CAREFULLY ,PRSO>\n\t\t<COND (<BOMB? ,PRSO>\n\t\t       <COND (<IN? ,DEMON ,PENTAGRAM-ROOM>\n\t\t\t      <MOVE ,PRSO ,HERE>\n\t\t\t      <TELL\n\"The wizard accepts this final folly resignedly.\" CR>)\n\t\t\t     (T\n\t\t\t      <REMOVE ,WIZARD>\n\t\t\t      <TELL\n,WAVES-WAND \"and says, \\\"Flower!\\\" Indeed, the bomb becomes a lovely bouquet.\nBoth Wizard and flowers disappear.\" CR>)>)\n\t\t      (T\n\t\t       <TELL \"He places the \" D ,PRSO \" under his robe.\" CR>\n\t\t       <NOW-DARK?>)>)\n\t       (<VERB? ATTACK MUNG>\n\t\t<REMOVE ,WIZARD>\n\t\t<COND (<IN? ,WAND ,WIZARD>\n\t\t       <TELL ,WAVES-WAND \"and chants, \\\"Freeze!\\\"\">)>\n\t\t<COND (<NOT <FSET? ,DEMON ,INVISIBLE>>\n\t\t       <TELL\n\" Nothing happens! Terrified, the wizard dashes from the room.\" CR>)\n\t\t      (T\n\t\t       <SETG SPELL? ,S-FREEZE>\n\t\t       <PUTP ,ADVENTURER ,P?ACTION MAGIC-ACTOR>\n\t\t       <ENABLE <QUEUE I-WIZARD 10>>\n\t\t       <TELL \" You suddenly cannot move.\" CR>)>)>>"
  },
  "I-WIZARD": {
   "name": "I-WIZARD",
   "file": "wizard.zil",
   "line": 47,
   "endLine": 206,
   "source": "<ROUTINE I-WIZARD (\"AUX\" CAST-PROB (PCNT 0) F (WLOC <LOC ,WINNER>))\n\t <ENABLE <QUEUE I-WIZARD 4>>\n\t <COND (,DEAD\n\t\t<RFALSE>)\n\t       (,SPELL?\n\t\t<COND (<EQUAL? ,SPELL? ,S-FLOAT>\n\t\t       <COND (<EQUAL? ,HERE ,TOP-OF-WELL>\n\t\t\t      <JIGS-UP \"You plunge down the well.\">\n\t\t\t      <RTRUE>)\n\t\t\t     (<AND <FSET? ,HERE ,NONLANDBIT>\n\t\t\t\t   <NOT <EQUAL? ,HERE ,CIRCULAR-ROOM\n\t\t\t\t\t\t      ,VOLCANO-BOTTOM>>>\n\t\t\t      <JIGS-UP \"You plunge down the volcano.\">\n\t\t\t      <RTRUE>)>)\n\t\t      (<EQUAL? ,SPELL? ,S-FEEBLE>\n\t\t       <SETG LOAD-ALLOWED 100>)\n\t\t      (<EQUAL? ,SPELL? ,S-FUMBLE>\n\t\t       <SETG FUMBLE-NUMBER 7>\n\t\t       <SETG FUMBLE-PROB 8>)>\n\t\t<COND (<GET ,SPELL-STOPS ,SPELL?>\n\t\t       <TELL <GET ,SPELL-STOPS ,SPELL?> CR>)>\n\t\t<PUTP ,ADVENTURER ,P?ACTION 0>\n\t\t<SETG SPELL? <>>\n\t\t<RTRUE>)>\n\t <COND (<IN? ,DEMON ,PENTAGRAM-ROOM>\n\t\t<DISABLE <INT I-WIZARD>> \n\t\t<COND (<NOT <IN? ,WIZARD ,PENTAGRAM-ROOM>>\n\t\t       <MOVE ,WIZARD ,PENTAGRAM-ROOM>\n\t\t       <COND (<IN? ,WINNER ,PENTAGRAM-ROOM>\n\t\t\t      <TELL\n\"The Wizard appears, astonished to see his servant conversing with a common\nadventurer! He waves his wand frantically. \\\"Frobizz! Frobozzle! Frobnoid!\\\"\nThe demon guffaws. \\\"You no longer control the Black Crystal, hedge-wizard!\nYour wand is powerless! Your doom is sealed!\\\" The demon turns to you,\nexpectantly.\" CR>)>)>\n\t\t<RTRUE>)>\n\t <COND (<AND <NOT ,LIT>\n\t\t     ,LAMP-BURNED-OUT\n\t\t     <G? ,SCORE 200>>\n\t\t<SETG ALWAYS-LIT T>\n\t\t<SETG LIT T>\n\t\t<TELL\n\"You hear the Wizard. \\\"Dear me, you're in a Fix.\\\" Chuckling, he incants,\n\\\"Fluoresce!\\\" It is no longer dark.\" CR>\n\t\t<RTRUE>)>\n\t <COND (<AND <LOC ,WIZARD>\n\t\t     <PROB 80>>\n\t\t<COND (<AND ,LIT <IN? ,WIZARD ,HERE>>\n\t\t       <TELL \"The Wizard vanishes.\" CR>)>\n\t\t<REMOVE ,WIZARD>\n\t\t<RTRUE>)>\n\t <COND (<AND <PROB 10>\n\t\t     <NOT <EQUAL? ,HERE ,POSTS-ROOM ,POOL-ROOM>>>\n\t\t<COND (<NOT ,LIT>\n\t\t       <TELL ,MOVED-IN-DARK>)\n\t\t      (<FSET? ,HERE ,NONLANDBIT>\n\t\t       <TELL\n\"The Wizard appears, floating nonchalantly in the air beside you.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"An old, robed man appears suddenly. He is wearing a pointed hat with\nastrological signs, and has a long, unkempt beard.\" CR>)>\n\t\t<COND (<IN? ,PALANTIR-4 ,ADVENTURER>\n\t\t       <REMOVE ,WIZARD>\n\t\t       <COND (,LIT\n\t\t\t      <TELL\n\"The Wizard notices the Black Crystal, and hastily vanishes.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL ,MOVED-IN-DARK>)>\n\t\t       <RTRUE>)\n\t\t      (<PROB 20>\n\t\t       <REMOVE ,WIZARD>\n\t\t       <COND (,LIT\n\t\t\t      <TELL\n\"He mutters something (muffled by his beard) and disappears\nas suddenly as he came.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"You hear low, confused muttering.\" CR>)>\n\t\t       <RTRUE>)>\n\t\t<COND (<IN? ,PALANTIR-1 ,ADVENTURER>\n\t\t       <SET PCNT <+ .PCNT 1>>)>\n\t\t<COND (<IN? ,PALANTIR-2 ,ADVENTURER>\n\t\t       <SET PCNT <+ .PCNT 1>>)>\n\t\t<COND (<IN? ,PALANTIR-3 ,ADVENTURER>\n\t\t       <SET PCNT <+ .PCNT 1>>)>\n\t\t<SET CAST-PROB <- 80 <* .PCNT 20>>>\n\t\t<COND (,LIT\n\t\t       <TELL\n\"The Wizard draws forth his wand and waves it in your direction. It\nbegins to glow with a faint blue glow.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"You spot the Wizard, illuminated by the faint blue glow of a magic wand,\npointed at you!\" CR>)>\n\t\t<COND (<PROB .CAST-PROB>\n\t\t       <MOVE ,WIZARD ,HERE>\n\t\t       <SETG SPELL? <RANDOM ,SPELLS>>\n\t\t       <PUTP ,ADVENTURER ,P?ACTION MAGIC-ACTOR>\n\t\t       <ENABLE\n\t\t\t    <QUEUE I-WIZARD <+ 5 <RANDOM <- 30 <* 5 .PCNT>>>>>>\n\t\t       <COND (<PROB 75>\n\t\t\t      <TELL\n\"The Wizard, in a deep and resonant voice, speaks the word \\\"\"\n<GET ,SPELL-NAMES ,SPELL?> \"!\\\" He then vanishes, cackling gleefully.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"The Wizard whispers a word beginning with \\\"F,\\\" and disappears.\" CR>)>\n\t\t       <REMOVE ,WIZARD>\n\t\t       <COND (<GET ,SPELL-HINTS ,SPELL?>\n\t\t\t      <TELL <GET ,SPELL-HINTS ,SPELL?> CR>)>\n\t\t       <COND (<EQUAL? ,SPELL? ,S-FALL>\n\t\t\t      <COND (<FSET? .WLOC ,VEHBIT>\n\t\t\t\t     <TELL\n\"You suddenly fall out of the \" D .WLOC ,INVISIBLE-HAND>\n\t\t\t\t     <COND (<EQUAL? ,HERE ,TOP-OF-WELL>\n\t\t\t\t\t    <JIGS-UP\n\"You plunge down the well.\">)\n\t\t\t\t\t   (<AND <FSET? ,HERE ,NONLANDBIT>\n\t\t\t\t\t\t <NOT <EQUAL? ,HERE\n\t\t\t\t\t\t\t      ,VOLCANO-BOTTOM\n\t\t\t\t\t\t\t      ,CIRCULAR-ROOM>>>\n\t\t\t\t\t    <JIGS-UP\n\"You plunge down the volcano.\">)\n\t\t\t\t\t   (T\n\t\t\t\t\t    <MOVE ,WINNER ,HERE>)>)>)\n\t\t\t     (<EQUAL? ,SPELL? ,S-FLOAT>\n\t\t\t      <TELL \"You slowly rise into the air\">\n\t\t\t      <COND (<FSET? .WLOC ,VEHBIT>\n\t\t\t      \t     <MOVE ,WINNER ,HERE>\n\t\t\t\t     <TELL \", leaving the \" D .WLOC>)>\n\t\t\t      <TELL \", stopping about five feet up.\" CR>)\n\t\t\t     (<EQUAL? ,SPELL? ,S-FEEBLE>\n\t\t\t      <SETG LOAD-ALLOWED 50>\n\t\t\t      <COND (<SET F <FIRST? ,WINNER>>\n\t\t\t\t     <TELL\n\"You feel so weak, you drop the \" D .F ,PERIOD-CR>\n\t\t\t\t     <MOVE .F .WLOC>)>)\n\t\t\t     (<EQUAL? ,SPELL? ,S-FUMBLE>\n\t\t\t      <SETG FUMBLE-NUMBER 3>\n\t\t\t      <SETG FUMBLE-PROB 25>\n\t\t\t      <COND (<SET F <FIRST? ,ADVENTURER>>\n\t\t\t\t     <TELL\n\"Oops! You dropped the \" D .F ,PERIOD-CR>\n\t\t\t\t     <MOVE .F .WLOC>)>)>\n\t\t       <RTRUE>)\n\t\t      (<PROB 50>\n\t\t       <REMOVE ,WIZARD>\n\t\t       <TELL\n\"There is a crackling noise. Blue smoke curls from the Wizard's\nsleeve. He sighs and disappears.\" CR>)\n\t\t      (<PROB 50>\n\t\t       <REMOVE ,WIZARD>\n\t\t       <TELL\n\"The Wizard incants \\\"\" <RANDOM-ELEMENT ,SPELL-NAMES> \"!\\\" but nothing\nhappens. With an embarrassed glance in your direction, he vanishes.\" CR>)\n\t\t      (T\n\t\t       <MOVE ,WIZARD ,HERE>\n\t\t       <TELL\n\"The Wizard seems about to say something, but thinks better of it,\nand peers at you from under his bushy eyebrows.\" CR>)>)>>"
  },
  "MAGIC-ACTOR": {
   "name": "MAGIC-ACTOR",
   "file": "wizard.zil",
   "line": 208,
   "endLine": 259,
   "source": "<ROUTINE MAGIC-ACTOR (\"AUX\" V)\n\t <COND (,SPELL?\n\t\t<COND (<EQUAL? ,SPELL? ,S-FALL>\n\t\t       <COND (<OR <VERB? CLIMB CLIMB-DOWN>\n\t\t\t\t  <AND <VERB? WALK>\n\t\t\t\t       <GETPT ,HERE ,P?DOWN>>>\n\t\t\t      <SET V <GETPT ,HERE ,P?GLOBAL>>\n\t\t\t      <COND (<ZMEMQB ,BRIDGE .V <PTSIZE .V>>\n\t\t\t\t     <JIGS-UP\n\"You trip on something and fall over the edge of the bridge.\">)\n\t\t\t\t    (T\n\t\t\t\t     <TELL \"You trip on your own feet, \">\n\t\t\t\t     <COND (<PROB 25>\n\t\t\t\t\t    <JIGS-UP\n\"and the resulting fall does you in.\">)\n\t\t\t\t\t   (T\n\t\t\t\t    \t    <TELL\n\"but regain your balance and avoid a fatal fall.\" CR>)>)>)\n\t\t\t     (<VERB? ENTER>\n\t\t\t      <TELL\n\"You get in the \" D ,PRSO \" but you fall out again\" ,INVISIBLE-HAND>)>)\n\t\t      (<EQUAL? ,SPELL? ,S-FLOAT>\n\t\t       <COND (<VERB? DIAGNOSE WAIT>\n\t\t\t      <RFALSE>)\n\t\t\t     (<VERB? WALK>\n\t\t\t      <TELL\n\"Your feet are nowhere near the ground.\" CR>)\n\t\t\t     (<VERB? DROP>\n\t\t\t      <MOVE ,PRSO ,HERE>\n\t\t\t      <TELL \"The \" D ,PRSO \" drops to the ground.\" CR>)\n\t\t\t     (<AND <VERB? TAKE>\n\t\t\t\t   <IN? ,PRSO ,HERE>>\n\t\t\t      <TELL\n\"You're floating and can't reach it.\" CR>)>)\n\t\t      (<EQUAL? ,SPELL? ,S-FREEZE>\n\t\t       <COND (<VERB? DIAGNOSE WAIT>\n\t\t\t      <RFALSE>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"You are frozen solid. You might as well wait it out, because you\ncan't do anything else in this state.\" CR>)>)\n\t\t      (<AND <EQUAL? ,SPELL? ,S-FENCE>\n\t\t\t    <VERB? WALK>>\n\t\t       <TELL \"An invisible force bars your way.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<AND <EQUAL? ,SPELL? ,S-FERMENT>\n\t\t\t    <VERB? WALK>\n\t\t\t    <IN? ,WINNER ,HERE>>\n\t\t       <TELL\n\"Oops, you seem a little unsteady... I'm not sure you got where\nyou intended going.\" CR CR>\n\t\t       <RANDOM-WALK>)>)>>"
  },
  "RANDOM-WALK": {
   "name": "RANDOM-WALK",
   "file": "wizard.zil",
   "line": 261,
   "endLine": 284,
   "source": "<ROUTINE RANDOM-WALK (\"AUX\" P TX L S (D <>))\n\t <SET P 0>\n\t <REPEAT ()\n\t\t <COND (<L? <SET P <NEXTP ,HERE .P>> ,LOW-DIRECTION>\n\t\t\t<COND (.D\n\t\t\t       <SET S ,SPELL?>\n\t\t\t       <SETG SPELL? <>>\n\t\t\t       <SETG WINNER ,ADVENTURER>\n\t\t\t       <MOVE ,WINNER ,HERE>\n\t\t\t       <DO-WALK .D>\n\t\t\t       <SETG SPELL? .S>)>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<SET TX <GETPT ,HERE .P>>\n\t\t\t<SET L <PTSIZE .TX>>\n\t\t\t<COND (<OR <EQUAL? .L ,UEXIT>\n\t\t\t\t   <AND <EQUAL? .L ,CEXIT>\n\t\t\t\t\t<VALUE <GETB .TX ,CEXITFLAG>>>\n\t\t\t\t   <AND <EQUAL? .L ,DEXIT>\n\t\t\t\t\t<FSET? <GETB .TX ,DEXITOBJ> ,OPENBIT>>>\n\t\t\t       <COND (<NOT .D>\n\t\t\t\t      <SET D .P>)\n\t\t\t\t     (<PROB 50>\n\t\t\t\t      <SET D .P>)>)>)>>>"
  },
  "WAND-F": {
   "name": "WAND-F",
   "file": "wizard.zil",
   "line": 351,
   "endLine": 393,
   "source": "<ROUTINE WAND-F ()\n\t <COND (<AND <VERB? TAKE PUT GIVE>\n\t\t     <IN? ,WAND ,WIZARD>>\n\t\t<TELL \"The Wizard snatches it away.\" CR>)\n\t       (<AND <VERB? WAVE>\n\t\t     <EQUAL? ,PRSI ,GRUE>>\n\t        <TELL \"A gurgling hiss issues from the darkness.\" CR>)\n\t       (<VERB? WAVE RUB RAISE>\n\t\t<COND (<AND <EQUAL? ,PRSO ,WAND>\n\t\t\t    <NOT <IN? ,WAND ,WINNER>>>\n\t\t       <TELL \"You don't have the wand!\" CR>\n\t\t       <RTRUE>)\n\t\t      (<OR ,WAND-ON ,SPELL-USED ,SPELL-VICTIM>\n\t\t       <TELL \"A magic wand must recharge after use!\" CR>\n\t\t       <RTRUE>)\n\t\t      (<VERB? WAVE>\n\t\t       <COND (<AND <EQUAL? ,PRSO ,WAND> ,PRSI>\n\t\t\t      <SETG WAND-ON ,PRSI>\n\t\t\t      <SETG WAND-ON-LOC ,HERE>)\n\t\t\t     (T\n\t\t\t      <TELL \"At what?\" CR>\n\t\t\t      <RTRUE>)>)\n\t\t      (<VERB? RUB>\n\t\t       <COND (<EQUAL? ,PRSI ,WAND>\n\t\t\t      <SETG WAND-ON ,PRSO>)\n\t\t\t     (T\n\t\t\t      <TELL \"Touch what?\" CR>\n\t\t\t      <RTRUE>)>)\n\t\t      (<VERB? RAISE>\n\t\t       <TELL \"The wand grows warm and seems to vibrate.\" CR>\n\t\t       <RTRUE>)>\n\t\t<COND (,WAND-ON\n\t\t       <SETG SPELL-USED <>>\n\t\t       <SETG SPELL-VICTIM <>>\n\t\t       <COND (<EQUAL? ,WAND-ON ,ME ,WAND>\n\t\t\t      <SETG WAND-ON <>>\n\t\t\t      <TELL \"A safety interlock prevents this.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"The wand grows warm, the \" D ,WAND-ON \" glows with magical essences,\nand you feel suffused with power.\" CR>)>\n\t\t       <ENABLE <QUEUE I-WAND 2>>)>\n\t\tT)>>"
  },
  "I-WAND": {
   "name": "I-WAND",
   "file": "wizard.zil",
   "line": 397,
   "endLine": 406,
   "source": "<ROUTINE I-WAND ()\n\t <COND (<AND ,WAND-ON\n\t\t     <OR <EQUAL? ,WAND-ON-LOC ,HERE>\n\t\t\t <IN? ,WAND-ON ,WINNER>>>\n\t\t<SETG WAND-ON <>>\n\t\t<TELL\n\"The \" D ,WAND-ON \" stops glowing and the power within you weakens.\" CR>)\n\t       (T\n\t\t<SETG WAND-ON <>>\n\t\t<RFALSE>)>>"
  },
  "GUARDED-ROOM-F": {
   "name": "GUARDED-ROOM-F",
   "file": "wizard.zil",
   "line": 418,
   "endLine": 438,
   "source": "<ROUTINE GUARDED-ROOM-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This room is cobwebby and musty, but tracks in the dust indicate recent\nvisitors. To the south is a\">\n\t\t<COND (<FSET? ,WIZ-DOOR ,OPENBIT>\n\t\t       <TELL \"n open\">)\n\t\t      (T\n\t\t       <TELL \"battered (but very strong-looking)\">)>\n\t\t<TELL \" door. Mounted on the door is a \">\n\t\t<COND (<NOT ,GUARDIAN-FED>\n\t\t       <TELL \"nast\">)\n\t\t      (T\n\t\t       <TELL \"sleep\">)>\n\t\t<TELL\n\"y-looking lizard head, with sharp teeth and beady eyes. \">\n\t\t<COND (<IN? ,CANDY ,WINNER>\n\t\t       <TELL \"The lizard is sniffing at you. \">)\n\t\t      (<NOT ,GUARDIAN-FED>\n\t\t       <TELL \"The eyes follow your approach. \">)>\n\t\t<TELL \"To the north and northeast, corridors exit.\" CR>)>>"
  },
  "WIZ-DOOR-F": {
   "name": "WIZ-DOOR-F",
   "file": "wizard.zil",
   "line": 448,
   "endLine": 472,
   "source": "<ROUTINE WIZ-DOOR-F ()\n\t <COND (<AND <NOT ,GUARDIAN-FED>\n\t\t     <VERB? OPEN UNLOCK>>\n\t\t<TELL \"The lizard snaps at you as you reach for the door.\" CR>)\n\t       (<VERB? UNLOCK>\n\t\t<COND (,WIZ-DOOR-FLAG\n\t\t       <TELL ,ALREADY>)\n\t\t      (<EQUAL? ,PRSI ,GOLD-KEY>\n\t\t       <SETG WIZ-DOOR-FLAG T>\n\t\t       <TELL \"The door is unlocked.\" CR>)\n\t\t      (T\n\t\t       <TELL ,DOESNT-FIT-LOCK>)>)\n\t       (<VERB? LOCK>\n\t\t<COND (<NOT ,WIZ-DOOR-FLAG>\n\t\t       <TELL ,ALREADY>)\n\t\t      (<EQUAL? ,PRSI ,GOLD-KEY>\n\t\t       <SETG WIZ-DOOR-FLAG <>>\n\t\t       <TELL \"The door is now locked.\" CR>)\n\t\t      (T\n\t\t       <TELL ,DOESNT-FIT-LOCK>)>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<COND (,WIZ-DOOR-FLAG\n\t\t       <OPEN-CLOSE>)\n\t\t      (<VERB? OPEN>\n\t\t       <TELL \"The door is locked!\" CR>)>)>>"
  },
  "DOOR-KEEPER-F": {
   "name": "DOOR-KEEPER-F",
   "file": "wizard.zil",
   "line": 486,
   "endLine": 514,
   "source": "<ROUTINE DOOR-KEEPER-F ()\n\t <COND (<AND <VERB? ALARM>\n\t\t     ,GUARDIAN-FED>\n\t\t<TELL \"You can't wake it.\" CR>)\n\t       (<AND <VERB? GIVE>\n\t\t     <EQUAL? ,PRSI ,DOOR-KEEPER>>\n\t\t<COND (,GUARDIAN-FED\n\t\t       <TELL \"You can't wake it.\" CR>)\n\t\t      (<EQUAL? ,PRSO ,CANDY>\n\t\t       <SETG GUARDIAN-FED T>\n\t\t       <REMOVE ,CANDY>\n\t\t       <TELL\n,GREEDILY-DEVOURS \"the candy, package and all, and then its eyes close.\n(Lizards are known to sleep a long time while digesting meals.)\" CR>)\n\t\t      (<BOMB? ,PRSO>\n\t\t       <REMOVE ,PRSO>\n\t\t       <TELL\n,GREEDILY-DEVOURS \"it. After a while, you hear a pop and the guardian's\neyes bulge out. It hisses angrily.\" CR>)\n\t\t      (<EQUAL? ,PRSO ,PALANTIR-1 ,PALANTIR-2 ,PALANTIR-3>\n\t\t       <MOVE ,PRSO ,HERE>\n\t\t       <TELL\n,GREEDILY-DEVOURS \"the sphere but then spits it out.\" CR>)\n\t\t      (T\n\t\t       <REMOVE ,PRSO>\n\t\t       <TELL\n,GREEDILY-DEVOURS \"the \" D ,PRSO ,PERIOD-CR>)>)\n\t       (<VERB? ATTACK MUNG>\n\t\t<TELL \"The guardian seems impervious.\" CR>)>>"
  },
  "TROPHY-ROOM-F": {
   "name": "TROPHY-ROOM-F",
   "file": "wizard.zil",
   "line": 529,
   "endLine": 540,
   "source": "<ROUTINE TROPHY-ROOM-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"The Wizard's trophy room is filled with various memorabilia. On one wall is\nthe Wizard's D. T. (Doctor of Thaumaturgy) degree from GUE Tech. Several old\nmagic wands are mounted on a wand rack. There is a stuffed owl on a perch.\nCorridors lead east and west; a door to the north is \">\n\t\t<COND (<FSET? ,WIZ-DOOR ,OPENBIT>\n\t\t       <TELL \"open\">)\n\t\t      (T\n\t\t       <TELL \"closed\">)>\n\t\t<TELL ,PERIOD-CR>)>>"
  },
  "TROPHY-PSEUDO": {
   "name": "TROPHY-PSEUDO",
   "file": "wizard.zil",
   "line": 542,
   "endLine": 545,
   "source": "<ROUTINE TROPHY-PSEUDO ()\n\t <COND (<VERB? TAKE RUB>\n\t\t<TELL\n\"As you near it, you get a nasty (but fortunately unfatal) shock.\" CR>)>>"
  },
  "STAND-F": {
   "name": "STAND-F",
   "file": "wizard.zil",
   "line": 619,
   "endLine": 637,
   "source": "<ROUTINE STAND-F ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL \"The \" D ,PRSO \" is firmly attached to the bench.\" CR>)\n\t       (<AND <VERB? PUT PUT-ON>\n\t\t     <EQUAL? ,PRSO ,PALANTIR-1 ,PALANTIR-2 ,PALANTIR-3>\n\t\t     <EQUAL? ,PRSI ,STAND-1 ,STAND-2 ,STAND-3>>\n\t\t<V-PUT>\n\t\t<COND (<AND <IN? ,PALANTIR-1 ,STAND-1>\n\t\t\t    <IN? ,PALANTIR-2 ,STAND-2>\n\t\t\t    <IN? ,PALANTIR-3 ,STAND-3>>\n\t\t       <REMOVE ,PALANTIR-1>\n\t\t       <REMOVE ,PALANTIR-2>\n\t\t       <REMOVE ,PALANTIR-3>\n\t\t       <MOVE ,STAND-4 ,WORKBENCH>\n\t\t       <TELL\n\"Instantly, a hum begins, and the hairs on the back of your neck stand up.\nSuddenly, the spheres are gone! But amidst the three empty stands, there is\nnow a black stand of obsidian in which rests a strange black sphere.\" CR>)>\n\t\t<RTRUE>)>>"
  },
  "PENTAGRAM-F": {
   "name": "PENTAGRAM-F",
   "file": "wizard.zil",
   "line": 669,
   "endLine": 683,
   "source": "<ROUTINE PENTAGRAM-F (\"OPTIONAL\" (RARG ,M-BEG))\n\t <COND (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<VERB? ENTER>\n\t\t       <TELL \"You are forced back by an invisible power.\" CR>)\n\t              (<AND <VERB? PUT PUT-ON>\n\t\t\t    <EQUAL? ,PRSO ,PALANTIR-4>>\n\t\t       <REMOVE ,PALANTIR-4>\n\t\t       <FCLEAR ,DEMON ,INVISIBLE>\n\t\t       <MOVE ,DEMON ,PENTAGRAM-ROOM>\n\t\t       <TELL\n\"A chill wind blasts from the pentagram as a dim shape appears and resolves\ninto a formidable-looking demon. He tests the walls of the pentagram\nexperimentally, then sees you! \\\"Greetings, oh new master! Wouldst desire a\nservice? For a pittance of wealth, I will gratify thy desires to the utmost\nlimit of my powers!\\\" He grins vilely.\" CR>)>)>>"
  },
  "DEMON-F": {
   "name": "DEMON-F",
   "file": "wizard.zil",
   "line": 692,
   "endLine": 828,
   "source": "<ROUTINE DEMON-F (\"OPTIONAL\" (RARG ,M-OBJECT) \"AUX\" V)\n\t<COND (<VERB? HELLO>\n\t       <TELL \"The genie grins demonically.\" CR>)\n\t      (<EQUAL? ,WINNER ,DEMON>\n\t       <COND (<NOT ,DEMON-PAID>\n\t\t      <TELL\n\"\\\"My fee is not paid! I perform no tasks for free! We demons have a\nstrong union these days.\\\"\" CR>\n\t\t      <RFATAL>)\n\t\t     (<VERB? SGIVE>\n\t\t      <RFALSE>)\n\t\t     (<OR <G? <GET ,P-PRSO 0> 1>\n\t\t\t  <G? <GET ,P-PRSI 0> 1>>\n\t\t      <TELL \"\\\"I will do one thing only, master!\\\"\" CR>\n\t\t      <RFATAL>)\n\t\t     (<AND <VERB? MOVE>\n\t\t\t   <EQUAL? ,PRSO ,GLOBAL-MENHIR>>\n\t\t      <SETG MENHIR-POSITION 1>\n\t\t      <TELL\n,DEMON-GONE \"\\\"A trifle... My little finger alone was enough.\\\"\" CR>\n\t\t      <DEMON-LEAVES>)\n\t\t     (<VERB? TAKE>\n\t\t      <COND (<EQUAL? ,PRSO ,GLOBAL-MENHIR>\n\t\t\t     <REMOVE ,MENHIR>\n\t\t\t     <SETG MENHIR-POSITION 2>\n\t\t\t     <TELL\n,DEMON-GONE \"\\\"Perhaps I can use it as a toothpick...\\\"\" CR>\n\t\t\t     <DEMON-LEAVES>)\n\t\t\t    (<EQUAL? ,PRSO ,WAND>\n\t\t\t     <REMOVE ,WAND>\n\t\t\t     <TELL\n\"\\\"Gladly, oh fool!\\\" Cackling, the demon snatches the wand and points it at\nhimself. \\\"Free!\\\" he commands, as the demon and wand vanish forever.\" CR>\n\t\t\t     <DEMON-LEAVES <>>)\n\t\t\t    (<FSET? ,PRSO ,TAKEBIT>\n\t\t\t     <DEMON-LEAVES <>>\n\t\t\t     <REMOVE ,PRSO>\n\t\t\t     <TELL\n\"The demon snaps his fingers; the \" D ,PRSO \" and he both depart.\" CR>)\n\t\t\t    (T\n\t\t\t     <TELL \"\\\"I fear that I cannot take that.\\\"\" CR>)>)\n\t\t     (<AND <VERB? GIVE>\n\t\t\t   <EQUAL? ,PRSI ,ME>>\n\t\t      <COND (<EQUAL? ,PRSO ,WAND>\n\t\t\t     <REMOVE ,WIZARD>\n\t\t\t     <DEMON-LEAVES <>>\n\t\t\t     <FCLEAR ,WAND ,NDESCBIT>\n\t\t\t     <MOVE ,WAND ,HERE>\n\t\t\t     <TELL\n\"\\\"I hear and obey!\\\" says the demon. The Wizard cries \\\"Fudge!\\\" but aside\nfrom a strong odor of chocolate, there is no effect. The demon plucks the\nwand out of his hand and lays it before you. He vanishes as the wizard runs\nfrom the room in terror.\" CR>)\n\t\t\t    (<EQUAL? ,PRSO ,GLOBAL-MENHIR>\n\t\t\t     <MOVE ,MENHIR ,PENTAGRAM-ROOM>\n\t\t\t     <FCLEAR ,MENHIR ,NDESCBIT>\n\t\t\t     <FCLEAR ,MENHIR ,TAKEBIT>\n\t\t\t     <SETG MENHIR-POSITION 3>\n\t\t\t     <TELL\n\"He gestures, and the menhir appears at your feet.\" CR>\n\t\t\t     <DEMON-LEAVES>)\n\t\t\t    (<FSET? ,PRSO ,TAKEBIT>\n\t\t\t     <MOVE ,PRSO ,PENTAGRAM-ROOM>\n\t\t\t     <TELL\n\"The \" D ,PRSO \" appears before you and settles to the ground.\" CR>\n\t\t\t     <DEMON-LEAVES>)\n\t\t\t    (T\n\t\t\t     <TELL \"\\\"If only it were possible...\\\"\" CR>)>)\n\t\t     (<VERB? ATTACK>\n\t\t      <COND (<EQUAL? ,PRSO ,GLOBAL-CERBERUS>\n\t\t\t     <TELL\n\"\\\"This may prove taxing...\\\" \" ,DEMON-GONE \"He looks rather gnawed\nand scratched. He winces. \\\"Never did like dogs anyway... Any other\norders, oh beneficent one?\\\"\" CR>)\n\t\t\t    (<EQUAL? ,PRSO ,WIZARD>\n\t\t\t     <REMOVE ,WIZARD>\n\t\t\t     <FCLEAR ,WAND ,NDESCBIT>\n\t\t\t     <MOVE ,WAND ,HERE>\n\t\t\t     <TELL\n\"The demon grins hideously. \\\"This has been my desire e'er since this charlatan\nbent me to his service!\\\" \" ,WAVES-WAND \"fruitlessly as the demon forms himself\ninto a smoky cloud which envelops the Wizard. A horrible scream is heard, and\nthe smoke clears, leaving no trace of the Wizard but his wand.\" CR>\n\t\t\t     <DEMON-LEAVES>)\n\t\t\t    (<EQUAL? ,PRSO ,ME>\n\t\t\t     <DEMON-LEAVES <>>\n\t\t\t     <SETG WINNER ,ADVENTURER>\n\t\t\t     <JIGS-UP\n\"The demon crushes you with his enormous hand.\">)\n\t\t\t    (T\n\t\t\t     <TELL \n\"\\\"I know no way to kill a \" D ,PRSO \".\\\"\" CR>)>)\n\t\t     (<VERB? FIND EXAMINE>\n\t\t      <TELL \"\\\"I am not permitted to \">\n\t\t      <COND (<VERB? FIND>\n\t\t\t     <TELL \"answer questions\">)\n\t\t\t    (T\n\t\t\t     <TELL \"perform such menial tasks\">)>\n\t\t      <TELL\n\". The terms of my contract are explicit, and the penalty clauses are ...\nhmm ... devilish.\\\"\" CR>)\n\t\t     (T\n\t\t      <TELL\n\"\\\"Apologies, oh master, but even for such a one as I this is not possible.\\\"\nHe seems chagrined to have to admit this.\" CR>\n\t\t      <RTRUE>)>)\n\t      (<VERB? ATTACK MUNG>\n\t       <TELL \"The demon laughs uproariously.\" CR>)\n\t      (<AND <VERB? GIVE>\n\t\t    <EQUAL? ,PRSI ,DEMON>>\n\t       <COND (<AND <GETPT ,PRSO ,P?VALUE>\n\t\t\t   <NOT <EQUAL? ,PRSO ,SWORD>>>\n\t\t      <REMOVE-CAREFULLY ,PRSO>\n\t\t      <SETG DEMON-HOARD <+ ,DEMON-HOARD 1>>\n\t\t      <SETG SCORE <+ ,SCORE 2>>\n\t\t      <COND (<NOT <L? ,DEMON-HOARD ,TREASURES-MAX>>\n\t\t\t     <SETG DEMON-PAID T>\n\t\t\t     <PUTP ,WIZARD ,P?LDESC\n\"A dejected and fearful Wizard watches from the corner.\">\n\t\t\t     <TELL\n\"\\\"This paltry hoard will suffice for my fee.\\\"\" CR>)\n\t\t\t    (T\n\t\t\t     <TELL\n\"\\\"\" <GET ,DEMON-THANKS ,DEMON-HOARD> \"\\\"\" CR>\n\t\t\t     <COND (<EQUAL? ,DEMON-HOARD 8>\n\t\t\t\t    <TELL\n\"The Wizard tears his bears and looks at you as if you are a madman.\" CR>)>\n\t\t\t     <RTRUE>)>)\n\t\t     (<BOMB? ,PRSO>\n\t\t      <DEMON-LEAVES <>>\n\t\t      <TELL\n\"\\\"This violates my contract, oh fool. Thus, I am free to depart.\\\"\" CR>)\n\t\t     (T\n\t\t      <REMOVE-CAREFULLY ,PRSO>\n\t\t      <TELL\n\"The demon takes the \" D ,PRSO \" and smiles balefully, revealing\nenormous fangs.\" CR>)>)>>"
  },
  "DEMON-LEAVES": {
   "name": "DEMON-LEAVES",
   "file": "wizard.zil",
   "line": 830,
   "endLine": 835,
   "source": "<ROUTINE DEMON-LEAVES (\"OPTIONAL\" (NOISY? T))\n\t <FSET ,DEMON ,INVISIBLE>\n\t <COND (.NOISY?\n\t\t<TELL \"The genie departs, his agreement fulfilled.\" CR>)>\n\t <SETG P-CONT <>>\n\t <RFATAL>>"
  },
  "AQUARIUM-F": {
   "name": "AQUARIUM-F",
   "file": "wizard.zil",
   "line": 877,
   "endLine": 921,
   "source": "<ROUTINE AQUARIUM-F (\"AUX\" OBJ)\n\t <COND (<VERB? ENTER>\n\t\t<DO-WALK ,P?IN>)\n\t       (<AND <VERB? LOOK-INSIDE>\n\t\t     <IN? ,SERPENT ,AQUARIUM>>\n\t\t<TELL\n\"A baby serpent in the aquarium eyes you suspiciously.\" CR>)\n\t       (<OR <AND <VERB? MUNG ATTACK>\n\t\t\t <EQUAL? ,PRSO ,AQUARIUM>>\n\t\t    <AND <VERB? THROW>\n\t\t\t <EQUAL? ,PRSI ,AQUARIUM>>>\n\t\t<COND (<EQUAL? ,PRSO ,AQUARIUM>\n\t\t       <COND (<NOT ,PRSI>\n\t\t\t      <RFALSE>)\n\t\t\t     (T \n\t\t\t      <SET OBJ ,PRSI>)>)\n\t\t      (T\n\t\t       <SET OBJ ,PRSO>)>\n\t\t<MOVE .OBJ ,HERE>\n\t\t<COND (<IN? ,DEAD-SERPENT ,HERE>\n\t\t       <TELL \"The aquarium is already broken!\" CR>)\n\t\t      (<BOMB? .OBJ>\n\t\t       <DISABLE <INT I-FUSE>>)\n\t\t      (<OR <FSET? .OBJ ,WEAPONBIT>\n\t\t\t   <G? <GETP .OBJ ,P?SIZE> 10>>\n\t\t       <REMOVE ,SERPENT>\n\t\t       <MOVE ,DEAD-SERPENT ,HERE>\n\t\t       <MOVE ,PALANTIR-3 ,AQUARIUM>\n\t\t       <FCLEAR ,PALANTIR-3 ,NDESCBIT>\n\t\t       <PUTP ,AQUARIUM ,P?LDESC\n\"A shattered aquarium fills the northern half of the room.\">\n\t\t       <TELL\n\"The \" D .OBJ \" shatters the aquarium, spilling salt water, wet sand, and\nan extremely annoyed sea serpent. He is having difficulty breathing, and he\nseems to hold you responsible. He \">\n\t\t       <COND (<VERB? MUNG>\n\t\t\t      <JIGS-UP\n\"rends you limb from limb before he drowns in the air.\">)\n\t\t\t     (T\n\t\t\t      <TELL\n\"slithers toward you, but expires mere inches away. A clear crystal sphere\nsits amid the sand and broken glass in the aquarium.\" CR>)>)\n\t\t      (T\n\t\t       <TELL\n\"The \" D .OBJ \" bounces harmlessly off the glass.\" CR>)>)>>"
  },
  "SERPENT-F": {
   "name": "SERPENT-F",
   "file": "wizard.zil",
   "line": 932,
   "endLine": 944,
   "source": "<ROUTINE SERPENT-F ()\n\t <COND (<EQUAL? ,SERPENT ,WINNER>\n\t\t<TELL \"The serpent only stares hungrily at you.\" CR>)\n\t       (<VERB? ATTACK MUNG>\n\t\t<TELL\n\"He swims towards you, his dagger-like teeth dripping. Fortunately, he\ndoesn't want to crash into the aquarium wall, and contents himself with\nsplashing you with water.\" CR>)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSO ,SERPENT>>\n\t\t<TELL \"Impossible!\" CR>)\n\t       (<VERB? TAKE GIVE>\n\t\t<JIGS-UP \"He takes you instead. \\\"Uurrp!\\\"\">)>>"
  },
  "DEAD-SERPENT-F": {
   "name": "DEAD-SERPENT-F",
   "file": "wizard.zil",
   "line": 954,
   "endLine": 956,
   "source": "<ROUTINE DEAD-SERPENT-F ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL \"This may be a baby, but it's as big as a whale.\" CR>)>>"
  },
  "MURKY-ROOM-F": {
   "name": "MURKY-ROOM-F",
   "file": "wizard.zil",
   "line": 967,
   "endLine": 981,
   "source": "<ROUTINE MURKY-ROOM-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \" The floor is sandy, and your vision seems blurred.\">\n\t\t<COND (<AND <IN? ,SERPENT ,AQUARIUM>\n\t\t\t    <PROB 20>>\n\t\t       <TELL \" A shadow seems to swim by overhead.\">)>\n\t\t<CRLF>)\n\t       (<EQUAL? .RARG ,M-ENTER>\n\t\t<COND (<IN? ,SERPENT ,AQUARIUM>\n\t\t       <JIGS-UP\n\"You drop into the aquarium with a splash, which attracts the serpent. Being\na hungry baby, he greedily eats you.\">)\n\t\t      (T\n\t\t       <JIGS-UP\n\"You cut yourself severely on the broken glass.\">)>)>>"
  },
  "WIZARD-QUARTERS-F": {
   "name": "WIZARD-QUARTERS-F",
   "file": "wizard.zil",
   "line": 990,
   "endLine": 994,
   "source": "<ROUTINE WIZARD-QUARTERS-F (RARG \"AUX\" PICK L)\n\t <COND (<EQUAL? .RARG ,M-LOOK ,M-FLASH>\n\t\t<TELL\n\"This is where the Wizard of Frobozz lives. The room is \"\n<PICK-ONE ,WIZQDESCS> ,PERIOD-CR>)>>"
  },
  "SPHERE-F": {
   "name": "SPHERE-F",
   "file": "wizard.zil",
   "line": 1037,
   "endLine": 1071,
   "source": "<ROUTINE SPHERE-F ()\n\t <COND (<AND <VERB? TAKE MOVE PUT>\n\t\t     <PRSO? ,PALANTIR-1>\n\t\t     <NOT ,CAGE-SOLVE-FLAG>>\n\t\t<COND (<EQUAL? ,ADVENTURER ,WINNER>\n\t               <TELL\n\"As you reach for the sphere, a solid steel cage falls to entrap you. Worse,\npoisonous gas begins seeping in.\" CR CR>\n\t               <COND (<IN? ,ROBOT ,HERE>\n\t\t\t      <MOVE ,ROBOT ,CAGE>\n\t\t\t      <FSET ,ROBOT ,NDESCBIT>)>\n\t\t       <GOTO ,CAGE>\n\t               <FSET ,CAGE-OBJECT ,NDESCBIT>\n\t               <FCLEAR ,CAGE-OBJECT ,INVISIBLE>\n\t               <ENABLE <QUEUE I-CAGE-DEATH 6>>\n\t               <MOVE ,CAGE-OBJECT ,HERE>)\n\t\t      (T\n\t               <FSET ,PALANTIR-1 ,INVISIBLE>\n\t               <REMOVE ,ROBOT>\n\t               <FSET ,PRSO ,INVISIBLE>\n\t               <MOVE ,CAGE-OBJECT ,DINGY-CLOSET>\n\t               <FCLEAR ,CAGE-OBJECT ,INVISIBLE>\n\t               <TELL\n\"As the robot touches the sphere, a solid steel cage falls from the ceiling,\ntrapping him. You can faintly hear his last words: \" ,B-W-C>\n\t\t       <JIGS-UP \"\\\"\">)>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<PALANTIR-LOOK <COND (<EQUAL? ,PRSO ,PALANTIR-1> ,PALANTIR-2)\n\t\t\t\t     (<EQUAL? ,PRSO ,PALANTIR-2> ,PALANTIR-3)\n\t\t\t\t     (<EQUAL? ,PRSO ,PALANTIR-3> ,PALANTIR-1)\n\t\t\t\t     (T ,PALANTIR-4)>>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"There is something misty in the sphere. Perhaps if you were to\nlook into it...\" CR>)>>"
  },
  "PALANTIR-LOOK": {
   "name": "PALANTIR-LOOK",
   "file": "wizard.zil",
   "line": 1073,
   "endLine": 1106,
   "source": "<ROUTINE PALANTIR-LOOK (OBJ \"AUX\" RM L)\n\t <COND (<EQUAL? .OBJ ,PALANTIR-4>\n\t\t<TELL\n,STRANGE-VISION \" a huge and fearful face which peers at you expectantly.\" CR>\n\t\t<RTRUE>)>\n\t <SET RM <META-LOC .OBJ>>\n\t <SET L <LOC .OBJ>>\n\t <COND (<OR <NOT .L>\n\t\t    <NOT <LIT? .RM>>>\n\t\t<TELL ,ONLY-DARKNESS>)\n\t       (<NOT <IN? .L ,ROOMS>>\n\t\t<COND (<FSET? .L ,OPENBIT>\n\t\t       <TELL \"You see the inside of a \" D .L ,PERIOD-CR>)\n\t\t      (T\n\t\t       <TELL ,ONLY-DARKNESS>)>)\n\t       (T\n\t\t<COND (,DEAD\n\t\t       <TELL\n\"As you peer through the mist, a strangely colored vision of\na huge room takes shape\">)\n\t\t      (T\n\t\t       <TELL\n,STRANGE-VISION \" of a distant room, which can be described clearly\">)>\n\t\t<TELL \"...\" CR CR>\n\t\t<FSET .OBJ ,INVISIBLE>\n\t\t<GO&LOOK .RM>\n\t\t<COND (<EQUAL? ,HERE .RM>\n\t\t       <TELL\n\"An astonished adventurer is staring into a crystal sphere.\" CR>)>\n\t\t<FCLEAR .OBJ ,INVISIBLE>\n\t\t<COND (<NOT ,DEAD>\n\t\t       <TELL\n\"The vision fades, revealing only an ordinary crystal sphere.\" CR>)>)>\n\t <RTRUE>>"
  },
  "GO&LOOK": {
   "name": "GO&LOOK",
   "file": "wizard.zil",
   "line": 1108,
   "endLine": 1119,
   "source": "<ROUTINE GO&LOOK (RM \"AUX\" OHERE OLIT (OSEEN <>))\n\t <SET OHERE ,HERE>\n\t <COND (<FSET? .OHERE ,TOUCHBIT>\n\t\t<SET OSEEN T>)>\n\t <SET OLIT ,LIT>\n\t <SETG HERE .RM>\n\t <SETG LIT <LIT? .RM>>\n\t <V-LOOK>\n\t <COND (<NOT .OSEEN>\n\t\t<FCLEAR .OHERE ,TOUCHBIT>)>\n\t <SETG HERE .OHERE>\n\t <SETG LIT .OLIT>>"
  },
  "DEAD-PALANTIR-F": {
   "name": "DEAD-PALANTIR-F",
   "file": "wizard.zil",
   "line": 1151,
   "endLine": 1206,
   "source": "<ROUTINE DEAD-PALANTIR-F (RARG \"AUX\" P)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \"You are in a huge crystalline sphere filled with thin \">\n\t\t<COND (<EQUAL? ,HERE ,DEAD-PALANTIR-1>\n\t\t       <SET P ,PALANTIR-1>\n\t\t       <TELL \"red\">)\n\t\t      (<EQUAL? ,HERE ,DEAD-PALANTIR-2>\n\t\t       <SET P ,PALANTIR-2>\n\t\t       <TELL \"blue\">)\n\t\t      (T\n\t\t       <SET P ,PALANTIR-3>\n\t\t       <TELL \"white\">)>\n\t\t<TELL \" mist. The mist becomes \">\n\t\t<COND (<EQUAL? ,HERE ,DEAD-PALANTIR-1>\n\t\t       <TELL \"blue\">)\n\t\t      (<EQUAL? ,HERE ,DEAD-PALANTIR-2>\n\t\t       <TELL \"white\">)\n\t\t      (T\n\t\t       <TELL \"black\">)>\n\t\t<TELL\n\" to the west. You strain to look out through the mist...\" CR CR>\n\t\t<COND (<FSET? .P ,TOUCHBIT>\n\t\t       <PALANTIR-LOOK .P>)\n\t\t      (<EQUAL? .P ,PALANTIR-1>\n\t\t       <TELL\n\"You see a small room with a sign, too blurry to read.\">)\n\t\t      (<EQUAL? .P ,PALANTIR-2>\n\t\t       <TELL\n\"You see a dreary room with an oak door and a huge table. There\nis an odd glow to the mist.\">)\n\t\t      (<EQUAL? .P ,PALANTIR-3>\n\t\t       <TELL \"A watery room is barely visible.\">\n\t\t       <COND (<AND <IN? ,SERPENT ,AQUARIUM>\n\t\t\t\t   <PROB 25>>\n\t\t\t      <TELL \" A shadow swims by as you look.\">)>)>\n\t\t<CRLF>)\n\t       (<AND <EQUAL? .RARG ,M-ENTER>\n\t\t     <EQUAL? ,HERE ,DEAD-PALANTIR-4>>\n\t\t<COND (<IN? ,DEMON ,PENTAGRAM-ROOM>\n\t\t       <TELL\n\"The room is empty. A huge face looks down from outside and laughs\nsardonically. It doesn't look like you're getting out of this predicament!\" CR>\n\t\t       <FINISH>)>\n\t\t<TELL\n\"A huge and horrible face materializes out of the mist. \\\"\">\n\t\t<COND (<NOT <L? ,DEATHS 3>>\n\t\t       <TELL\n\"You again! You'll obviously be no help to me.\\\" The face disappears\nand everything goes black.\" CR>\n\t\t       <FINISH>)>\n\t\t<TELL\n\"Perhaps you may be of use in gaining my freedom from this place. I return\nyou to your foolish quest! Mayhap you will repay this favor in kind someday.\\\"\nThe mist swirls, and you are returned to the world of life.\" CR>\n\t\t<SETG DEAD <>>\n\t\t<GOTO ,INSIDE-THE-BARROW>)>>"
  },
  "GLOBAL-PALANTIR-F": {
   "name": "GLOBAL-PALANTIR-F",
   "file": "wizard.zil",
   "line": 1216,
   "endLine": 1220,
   "source": "<ROUTINE GLOBAL-PALANTIR-F ()\n\t <COND (<VERB? LOOK-INSIDE EXAMINE>\n\t\t<DEAD-PALANTIR-F ,M-LOOK>)\n\t       (<VERB? MUNG>\n\t\t<TELL \"The sphere is unbreakable.\" CR>)>>"
  }
 },
 "globals": {
  "BUCKET-TOP-FLAG": {
   "name": "BUCKET-TOP-FLAG",
   "kind": "global",
   "file": "alice.zil",
   "line": 156,
   "value": "<>"
  },
  "EVAPORATED": {
   "name": "EVAPORATED",
   "kind": "global",
   "file": "alice.zil",
   "line": 158,
   "value": "<>"
  },
  "CAROUSEL-ON": {
   "name": "CAROUSEL-ON",
   "kind": "global",
   "file": "alice.zil",
   "line": 306,
   "value": "T"
  },
  "CAGE-SOLVE-FLAG": {
   "name": "CAGE-SOLVE-FLAG",
   "kind": "global",
   "file": "alice.zil",
   "line": 345,
   "value": "<>"
  },
  "LAMP-BURNED-OUT": {
   "name": "LAMP-BURNED-OUT",
   "kind": "global",
   "file": "dungeon.zil",
   "line": 44,
   "value": "<>"
  },
  "LAMP-TABLE": {
   "name": "LAMP-TABLE",
   "kind": "global",
   "file": "dungeon.zil",
   "line": 60,
   "value": "<TABLE 225 \"The lamp appears a bit dimmer.\" 75 \"The lamp is definitely dimmer now.\" 25 \"The lamp is nearly out.\" 0>"
  },
  "SECRET-DOOR": {
   "name": "SECRET-DOOR",
   "kind": "global",
   "file": "dungeon.zil",
   "line": 108,
   "value": "<>"
  },
  "CAROUSEL-EXITS": {
   "name": "CAROUSEL-EXITS",
   "kind": "global",
   "file": "dungeon.zil",
   "line": 158,
   "value": "<TABLE COOL-ROOM DARK-TUNNEL DEEP-FORD TOPIARY RIDDLE-ROOM MENHIR-ROOM GUARDED-ROOM>"
  },
  "MENHIR-POSITION": {
   "name": "MENHIR-POSITION",
   "kind": "global",
   "file": "dungeon.zil",
   "line": 228,
   "value": "<>"
  },
  "CERBERUS-LEASHED": {
   "name": "CERBERUS-LEASHED",
   "kind": "global",
   "file": "dungeon.zil",
   "line": 359,
   "value": "<>"
  },
  "MUD-FLAG": {
   "name": "MUD-FLAG",
   "kind": "global",
   "file": "dungeon.zil",
   "line": 479,
   "value": "<>"
  },
  "MATOBJ": {
   "name": "MATOBJ",
   "kind": "global",
   "file": "dungeon.zil",
   "line": 481,
   "value": "<>"
  },
  "PUNLOCK-FLAG": {
   "name": "PUNLOCK-FLAG",
   "kind": "global",
   "file": "dungeon.zil",
   "line": 483,
   "value": "<>"
  },
  "PLOOK-FLAG": {
   "name": "PLOOK-FLAG",
   "kind": "global",
   "file": "dungeon.zil",
   "line": 485,
   "value": "<>"
  },
  "HO-HUM": {
   "name": "HO-HUM",
   "kind": "global",
   "file": "globals.zil",
   "line": 416,
   "value": "<LTABLE 0 \" doesn't seem to work.\" \" isn't notably helpful.\" \" has no effect.\">"
  },
  "YUKS": {
   "name": "YUKS",
   "kind": "global",
   "file": "globals.zil",
   "line": 423,
   "value": "<LTABLE 0 \"A valiant attempt.\" \"You can't be serious.\" \"Not bloody likely.\" \"An interesting idea...\" \"What a concept!\">"
  },
  "RIDDLE-TEXT": {
   "name": "RIDDLE-TEXT",
   "kind": "global",
   "file": "globals.zil",
   "line": 432,
   "value": "\"What's tall as a house,|\n  round as a cup,|\n    and all the king's horses|\n      can't draw it up?\"|\""
  },
  "PERIOD-CR": {
   "name": "PERIOD-CR",
   "kind": "global",
   "file": "globals.zil",
   "line": 438,
   "value": "\".|\""
  },
  "DEMON-GONE": {
   "name": "DEMON-GONE",
   "kind": "global",
   "file": "globals.zil",
   "line": 440,
   "value": "\"The demon is gone for a moment. \""
  },
  "MOVED-IN-DARK": {
   "name": "MOVED-IN-DARK",
   "kind": "global",
   "file": "globals.zil",
   "line": 442,
   "value": "\"You feel a rush of air as something moved nearby.|\""
  },
  "STRANGE-VISION": {
   "name": "STRANGE-VISION",
   "kind": "global",
   "file": "globals.zil",
   "line": 444,
   "value": "\"As you peer into the sphere, a strange vision takes shape\""
  },
  "LOOK-AROUND": {
   "name": "LOOK-AROUND",
   "kind": "global",
   "file": "globals.zil",
   "line": 447,
   "value": "\"Look around you.|\""
  },
  "TOO-DARK": {
   "name": "TOO-DARK",
   "kind": "global",
   "file": "globals.zil",
   "line": 449,
   "value": "\"It's too dark to see.\""
  },
  "ONLY-DARKNESS": {
   "name": "ONLY-DARKNESS",
   "kind": "global",
   "file": "globals.zil",
   "line": 451,
   "value": "\"You see only darkness.|\""
  },
  "ALREADY": {
   "name": "ALREADY",
   "kind": "global",
   "file": "globals.zil",
   "line": 453,
   "value": "\"It already is!|\""
  },
  "WAND-STOPS-GLOWING": {
   "name": "WAND-STOPS-GLOWING",
   "kind": "global",
   "file": "globals.zil",
   "line": 455,
   "value": "\"The wand stops glowing, but there is no other apparent effect.|\""
  },
  "CANT-GO": {
   "name": "CANT-GO",
   "kind": "global",
   "file": "globals.zil",
   "line": 458,
   "value": "\"You can't go that way.|\""
  },
  "PLACE-MAT-VISIBLE": {
   "name": "PLACE-MAT-VISIBLE",
   "kind": "global",
   "file": "globals.zil",
   "line": 460,
   "value": "\"The edge of a place mat is visible under the door.\""
  },
  "DOESNT-FIT-LOCK": {
   "name": "DOESNT-FIT-LOCK",
   "kind": "global",
   "file": "globals.zil",
   "line": 462,
   "value": "\"It doesn't fit the lock.|\""
  },
  "GUE-NAME": {
   "name": "GUE-NAME",
   "kind": "global",
   "file": "globals.zil",
   "line": 464,
   "value": "\" the Great Underground Empire\""
  },
  "REFERRING": {
   "name": "REFERRING",
   "kind": "global",
   "file": "globals.zil",
   "line": 466,
   "value": "\"It's not clear what you're referring to.|\""
  },
  "STOPS": {
   "name": "STOPS",
   "kind": "global",
   "file": "globals.zil",
   "line": 468,
   "value": "\" comes to a stop.||\""
  },
  "B-W-C": {
   "name": "B-W-C",
   "kind": "global",
   "file": "globals.zil",
   "line": 470,
   "value": "\"\"Buzz, whirr, click!\""
  },
  "WAVES-WAND": {
   "name": "WAVES-WAND",
   "kind": "global",
   "file": "globals.zil",
   "line": 472,
   "value": "\"The Wizard waves his wand \""
  },
  "INVISIBLE-HAND": {
   "name": "INVISIBLE-HAND",
   "kind": "global",
   "file": "globals.zil",
   "line": 474,
   "value": "\", almost as though an invisible hand had tipped it over.|\""
  },
  "GREEDILY-DEVOURS": {
   "name": "GREEDILY-DEVOURS",
   "kind": "global",
   "file": "globals.zil",
   "line": 477,
   "value": "\"The guardian greedily devours \""
  },
  "SERIAL": {
   "name": "SERIAL",
   "kind": "constant",
   "file": "misc.zil",
   "line": 164,
   "value": "0"
  },
  "P-WON": {
   "name": "P-WON",
   "kind": "global",
   "file": "misc.zil",
   "line": 166,
   "value": "<>"
  },
  "M-FATAL": {
   "name": "M-FATAL",
   "kind": "constant",
   "file": "misc.zil",
   "line": 168,
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
   "line": 172,
   "value": "<>"
  },
  "M-OBJECT": {
   "name": "M-OBJECT",
   "kind": "constant",
   "file": "misc.zil",
   "line": 174,
   "value": "<>"
  },
  "M-BEG": {
   "name": "M-BEG",
   "kind": "constant",
   "file": "misc.zil",
   "line": 176,
   "value": "1"
  },
  "M-END": {
   "name": "M-END",
   "kind": "constant",
   "file": "misc.zil",
   "line": 178,
   "value": "6"
  },
  "M-ENTER": {
   "name": "M-ENTER",
   "kind": "constant",
   "file": "misc.zil",
   "line": 180,
   "value": "2"
  },
  "M-LOOK": {
   "name": "M-LOOK",
   "kind": "constant",
   "file": "misc.zil",
   "line": 182,
   "value": "3"
  },
  "M-FLASH": {
   "name": "M-FLASH",
   "kind": "constant",
   "file": "misc.zil",
   "line": 184,
   "value": "4"
  },
  "M-OBJDESC": {
   "name": "M-OBJDESC",
   "kind": "constant",
   "file": "misc.zil",
   "line": 186,
   "value": "5"
  },
  "P-MULT": {
   "name": "P-MULT",
   "kind": "global",
   "file": "misc.zil",
   "line": 341,
   "value": "<>"
  },
  "P-NOT-HERE": {
   "name": "P-NOT-HERE",
   "kind": "global",
   "file": "misc.zil",
   "line": 343,
   "value": "0"
  },
  "C-TABLELEN": {
   "name": "C-TABLELEN",
   "kind": "constant",
   "file": "misc.zil",
   "line": 482,
   "value": "180"
  },
  "C-TABLE": {
   "name": "C-TABLE",
   "kind": "global",
   "file": "misc.zil",
   "line": 484,
   "value": "<ITABLE NONE 180>"
  },
  "C-DEMONS": {
   "name": "C-DEMONS",
   "kind": "global",
   "file": "misc.zil",
   "line": 486,
   "value": "180"
  },
  "C-INTS": {
   "name": "C-INTS",
   "kind": "global",
   "file": "misc.zil",
   "line": 488,
   "value": "180"
  },
  "C-INTLEN": {
   "name": "C-INTLEN",
   "kind": "constant",
   "file": "misc.zil",
   "line": 490,
   "value": "6"
  },
  "C-ENABLED?": {
   "name": "C-ENABLED?",
   "kind": "constant",
   "file": "misc.zil",
   "line": 492,
   "value": "0"
  },
  "C-TICK": {
   "name": "C-TICK",
   "kind": "constant",
   "file": "misc.zil",
   "line": 494,
   "value": "1"
  },
  "C-RTN": {
   "name": "C-RTN",
   "kind": "constant",
   "file": "misc.zil",
   "line": 496,
   "value": "2"
  },
  "CLOCK-WAIT": {
   "name": "CLOCK-WAIT",
   "kind": "global",
   "file": "misc.zil",
   "line": 515,
   "value": "<>"
  },
  "MOVES": {
   "name": "MOVES",
   "kind": "global",
   "file": "misc.zil",
   "line": 517,
   "value": "0"
  },
  "PRSA": {
   "name": "PRSA",
   "kind": "global",
   "file": "parser.zil",
   "line": 14,
   "value": "<>"
  },
  "PRSI": {
   "name": "PRSI",
   "kind": "global",
   "file": "parser.zil",
   "line": 15,
   "value": "<>"
  },
  "PRSO": {
   "name": "PRSO",
   "kind": "global",
   "file": "parser.zil",
   "line": 16,
   "value": "<>"
  },
  "P-TABLE": {
   "name": "P-TABLE",
   "kind": "global",
   "file": "parser.zil",
   "line": 18,
   "value": "0"
  },
  "P-ONEOBJ": {
   "name": "P-ONEOBJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 19,
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
   "file": "parser.zil",
   "line": 22,
   "value": "<TABLE 0 0 0 0>"
  },
  "CC-SBPTR": {
   "name": "CC-SBPTR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 24,
   "value": "0"
  },
  "CC-SEPTR": {
   "name": "CC-SEPTR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 25,
   "value": "1"
  },
  "CC-DBPTR": {
   "name": "CC-DBPTR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 26,
   "value": "2"
  },
  "CC-DEPTR": {
   "name": "CC-DEPTR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 27,
   "value": "3"
  },
  "P-LEN": {
   "name": "P-LEN",
   "kind": "global",
   "file": "parser.zil",
   "line": 29,
   "value": "0"
  },
  "P-DIR": {
   "name": "P-DIR",
   "kind": "global",
   "file": "parser.zil",
   "line": 30,
   "value": "0"
  },
  "HERE": {
   "name": "HERE",
   "kind": "global",
   "file": "parser.zil",
   "line": 31,
   "value": "0"
  },
  "WINNER": {
   "name": "WINNER",
   "kind": "global",
   "file": "parser.zil",
   "line": 32,
   "value": "0"
  },
  "P-LEXV": {
   "name": "P-LEXV",
   "kind": "global",
   "file": "parser.zil",
   "line": 34,
   "value": "<ITABLE 59 (LEXV) 0 #BYTE 0 #BYTE 0>"
  },
  "AGAIN-LEXV": {
   "name": "AGAIN-LEXV",
   "kind": "global",
   "file": "parser.zil",
   "line": 36,
   "value": "<ITABLE 59 (LEXV) 0 #BYTE 0 #BYTE 0>"
  },
  "RESERVE-LEXV": {
   "name": "RESERVE-LEXV",
   "kind": "global",
   "file": "parser.zil",
   "line": 38,
   "value": "<ITABLE 59 (LEXV) 0 #BYTE 0 #BYTE 0>"
  },
  "RESERVE-PTR": {
   "name": "RESERVE-PTR",
   "kind": "global",
   "file": "parser.zil",
   "line": 40,
   "value": "<>"
  },
  "P-INBUF": {
   "name": "P-INBUF",
   "kind": "global",
   "file": "parser.zil",
   "line": 44,
   "value": "<ITABLE 120 (BYTE LENGTH) 0>"
  },
  "OOPS-INBUF": {
   "name": "OOPS-INBUF",
   "kind": "global",
   "file": "parser.zil",
   "line": 47,
   "value": "<ITABLE 120 (BYTE LENGTH) 0>"
  },
  "OOPS-TABLE": {
   "name": "OOPS-TABLE",
   "kind": "global",
   "file": "parser.zil",
   "line": 50,
   "value": "<TABLE <> <> <> <>>"
  },
  "O-PTR": {
   "name": "O-PTR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 51,
   "value": "0"
  },
  "O-START": {
   "name": "O-START",
   "kind": "constant",
   "file": "parser.zil",
   "line": 52,
   "value": "1"
  },
  "O-LENGTH": {
   "name": "O-LENGTH",
   "kind": "constant",
   "file": "parser.zil",
   "line": 53,
   "value": "2"
  },
  "O-END": {
   "name": "O-END",
   "kind": "constant",
   "file": "parser.zil",
   "line": 54,
   "value": "3"
  },
  "P-CONT": {
   "name": "P-CONT",
   "kind": "global",
   "file": "parser.zil",
   "line": 58,
   "value": "<>"
  },
  "P-IT-OBJECT": {
   "name": "P-IT-OBJECT",
   "kind": "global",
   "file": "parser.zil",
   "line": 59,
   "value": "<>"
  },
  "P-OFLAG": {
   "name": "P-OFLAG",
   "kind": "global",
   "file": "parser.zil",
   "line": 64,
   "value": "<>"
  },
  "P-MERGED": {
   "name": "P-MERGED",
   "kind": "global",
   "file": "parser.zil",
   "line": 65,
   "value": "<>"
  },
  "P-ACLAUSE": {
   "name": "P-ACLAUSE",
   "kind": "global",
   "file": "parser.zil",
   "line": 66,
   "value": "<>"
  },
  "P-ANAM": {
   "name": "P-ANAM",
   "kind": "global",
   "file": "parser.zil",
   "line": 67,
   "value": "<>"
  },
  "P-AADJ": {
   "name": "P-AADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 68,
   "value": "<>"
  },
  "P-LEXWORDS": {
   "name": "P-LEXWORDS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 73,
   "value": "1"
  },
  "P-LEXSTART": {
   "name": "P-LEXSTART",
   "kind": "constant",
   "file": "parser.zil",
   "line": 74,
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
   "line": 76,
   "value": "4"
  },
  "P-PSOFF": {
   "name": "P-PSOFF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 78,
   "value": "4"
  },
  "P-P1OFF": {
   "name": "P-P1OFF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 79,
   "value": "5"
  },
  "P-P1BITS": {
   "name": "P-P1BITS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 80,
   "value": "3"
  },
  "P-ITBLLEN": {
   "name": "P-ITBLLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 82,
   "value": "9"
  },
  "P-ITBL": {
   "name": "P-ITBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 83,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-OTBL": {
   "name": "P-OTBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 84,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-VTBL": {
   "name": "P-VTBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 85,
   "value": "<TABLE 0 0 0 0>"
  },
  "P-OVTBL": {
   "name": "P-OVTBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 86,
   "value": "<TABLE 0 #BYTE 0 #BYTE 0>"
  },
  "P-NCN": {
   "name": "P-NCN",
   "kind": "global",
   "file": "parser.zil",
   "line": 88,
   "value": "0"
  },
  "P-VERB": {
   "name": "P-VERB",
   "kind": "constant",
   "file": "parser.zil",
   "line": 90,
   "value": "0"
  },
  "P-VERBN": {
   "name": "P-VERBN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 91,
   "value": "1"
  },
  "P-PREP1": {
   "name": "P-PREP1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 92,
   "value": "2"
  },
  "P-PREP1N": {
   "name": "P-PREP1N",
   "kind": "constant",
   "file": "parser.zil",
   "line": 93,
   "value": "3"
  },
  "P-PREP2": {
   "name": "P-PREP2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 94,
   "value": "4"
  },
  "P-PREP2N": {
   "name": "P-PREP2N",
   "kind": "constant",
   "file": "parser.zil",
   "line": 95,
   "value": "5"
  },
  "P-NC1": {
   "name": "P-NC1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 96,
   "value": "6"
  },
  "P-NC1L": {
   "name": "P-NC1L",
   "kind": "constant",
   "file": "parser.zil",
   "line": 97,
   "value": "7"
  },
  "P-NC2": {
   "name": "P-NC2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 98,
   "value": "8"
  },
  "P-NC2L": {
   "name": "P-NC2L",
   "kind": "constant",
   "file": "parser.zil",
   "line": 99,
   "value": "9"
  },
  "QUOTE-FLAG": {
   "name": "QUOTE-FLAG",
   "kind": "global",
   "file": "parser.zil",
   "line": 101,
   "value": "<>"
  },
  "P-END-ON-PREP": {
   "name": "P-END-ON-PREP",
   "kind": "global",
   "file": "parser.zil",
   "line": 102,
   "value": "<>"
  },
  "P-ACT": {
   "name": "P-ACT",
   "kind": "global",
   "file": "parser.zil",
   "line": 384,
   "value": "<>"
  },
  "P-WALK-DIR": {
   "name": "P-WALK-DIR",
   "kind": "global",
   "file": "parser.zil",
   "line": 385,
   "value": "<>"
  },
  "AGAIN-DIR": {
   "name": "AGAIN-DIR",
   "kind": "global",
   "file": "parser.zil",
   "line": 386,
   "value": "<>"
  },
  "P-NUMBER": {
   "name": "P-NUMBER",
   "kind": "global",
   "file": "parser.zil",
   "line": 538,
   "value": "0"
  },
  "P-SLOCBITS": {
   "name": "P-SLOCBITS",
   "kind": "global",
   "file": "parser.zil",
   "line": 692,
   "value": "0"
  },
  "P-SYNLEN": {
   "name": "P-SYNLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 694,
   "value": "8"
  },
  "P-SPREP1": {
   "name": "P-SPREP1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 708,
   "value": "0"
  },
  "P-SACTION": {
   "name": "P-SACTION",
   "kind": "constant",
   "file": "parser.zil",
   "line": 709,
   "value": "1"
  },
  "P-SFWIM1": {
   "name": "P-SFWIM1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 710,
   "value": "2"
  },
  "P-SLOC1": {
   "name": "P-SLOC1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 711,
   "value": "3"
  },
  "P-SPREP2": {
   "name": "P-SPREP2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 712,
   "value": "4"
  },
  "P-SFWIM2": {
   "name": "P-SFWIM2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 713,
   "value": "5"
  },
  "P-SLOC2": {
   "name": "P-SLOC2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 714,
   "value": "6"
  },
  "P-SYNLEN-0": {
   "name": "P-SYNLEN-0",
   "kind": "constant",
   "file": "parser.zil",
   "line": 716,
   "value": "2"
  },
  "P-SYNLEN-1": {
   "name": "P-SYNLEN-1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 717,
   "value": "4"
  },
  "P-SYNLEN-2": {
   "name": "P-SYNLEN-2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 718,
   "value": "7"
  },
  "P-GWIMBIT": {
   "name": "P-GWIMBIT",
   "kind": "global",
   "file": "parser.zil",
   "line": 945,
   "value": "0"
  },
  "P-NAM": {
   "name": "P-NAM",
   "kind": "global",
   "file": "parser.zil",
   "line": 1006,
   "value": "<>"
  },
  "P-ADJ": {
   "name": "P-ADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 1007,
   "value": "<>"
  },
  "P-ADVERB": {
   "name": "P-ADVERB",
   "kind": "global",
   "file": "parser.zil",
   "line": 1008,
   "value": "<>"
  },
  "P-ADJN": {
   "name": "P-ADJN",
   "kind": "global",
   "file": "parser.zil",
   "line": 1009,
   "value": "<>"
  },
  "P-PRSO": {
   "name": "P-PRSO",
   "kind": "global",
   "file": "parser.zil",
   "line": 1010,
   "value": "<ITABLE NONE 50>"
  },
  "P-PRSI": {
   "name": "P-PRSI",
   "kind": "global",
   "file": "parser.zil",
   "line": 1011,
   "value": "<ITABLE NONE 50>"
  },
  "P-BUTS": {
   "name": "P-BUTS",
   "kind": "global",
   "file": "parser.zil",
   "line": 1012,
   "value": "<ITABLE NONE 50>"
  },
  "P-MERGE": {
   "name": "P-MERGE",
   "kind": "global",
   "file": "parser.zil",
   "line": 1013,
   "value": "<ITABLE NONE 50>"
  },
  "P-OCLAUSE": {
   "name": "P-OCLAUSE",
   "kind": "global",
   "file": "parser.zil",
   "line": 1014,
   "value": "<ITABLE NONE 100>"
  },
  "P-MATCHLEN": {
   "name": "P-MATCHLEN",
   "kind": "global",
   "file": "parser.zil",
   "line": 1015,
   "value": "0"
  },
  "P-GETFLAGS": {
   "name": "P-GETFLAGS",
   "kind": "global",
   "file": "parser.zil",
   "line": 1016,
   "value": "0"
  },
  "P-ALL": {
   "name": "P-ALL",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1017,
   "value": "1"
  },
  "P-ONE": {
   "name": "P-ONE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1018,
   "value": "2"
  },
  "P-INHIBIT": {
   "name": "P-INHIBIT",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1019,
   "value": "4"
  },
  "P-AND": {
   "name": "P-AND",
   "kind": "global",
   "file": "parser.zil",
   "line": 1022,
   "value": "<>"
  },
  "SH": {
   "name": "SH",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1078,
   "value": "128"
  },
  "SC": {
   "name": "SC",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1079,
   "value": "64"
  },
  "SIR": {
   "name": "SIR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1080,
   "value": "32"
  },
  "SOG": {
   "name": "SOG",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1081,
   "value": "16"
  },
  "STAKE": {
   "name": "STAKE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1082,
   "value": "8"
  },
  "SMANY": {
   "name": "SMANY",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1083,
   "value": "4"
  },
  "SHAVE": {
   "name": "SHAVE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1084,
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
   "line": 1271,
   "value": "2"
  },
  "P-SRCTOP": {
   "name": "P-SRCTOP",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1272,
   "value": "0"
  },
  "P-SRCALL": {
   "name": "P-SRCALL",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1273,
   "value": "1"
  },
  "ALWAYS-LIT": {
   "name": "ALWAYS-LIT",
   "kind": "global",
   "file": "parser.zil",
   "line": 1393,
   "value": "<>"
  },
  "UNICORN-FRIGHTENED": {
   "name": "UNICORN-FRIGHTENED",
   "kind": "global",
   "file": "princess.zil",
   "line": 52,
   "value": "<>"
  },
  "MATCH-COUNT": {
   "name": "MATCH-COUNT",
   "kind": "global",
   "file": "princess.zil",
   "line": 192,
   "value": "6"
  },
  "TOPIARY-COUNTER": {
   "name": "TOPIARY-COUNTER",
   "kind": "global",
   "file": "princess.zil",
   "line": 248,
   "value": "0"
  },
  "DRAGON-ATTACKS": {
   "name": "DRAGON-ATTACKS",
   "kind": "global",
   "file": "princess.zil",
   "line": 353,
   "value": "<LTABLE \"Dragon hide is tough as steel, but you have annoyed him a bit. He looks\nas if deciding whether or not to eat you.\" \"That captured his interest. He stares at you balefully.\" \"The dragon is surprised and interested (for the moment).\" \"That did no damage, but he turns his smoky yellow eyes in your direction.\">"
  },
  "DRAGON-ANGER": {
   "name": "DRAGON-ANGER",
   "kind": "global",
   "file": "princess.zil",
   "line": 361,
   "value": "0"
  },
  "ICE-MELTED": {
   "name": "ICE-MELTED",
   "kind": "global",
   "file": "princess.zil",
   "line": 363,
   "value": "<>"
  },
  "OLD-HERE": {
   "name": "OLD-HERE",
   "kind": "global",
   "file": "princess.zil",
   "line": 365,
   "value": "DRAGON-ROOM"
  },
  "PRINCESS-AWAKE": {
   "name": "PRINCESS-AWAKE",
   "kind": "global",
   "file": "princess.zil",
   "line": 510,
   "value": "<>"
  },
  "PRCOUNT": {
   "name": "PRCOUNT",
   "kind": "global",
   "file": "princess.zil",
   "line": 602,
   "value": "0"
  },
  "PRFOLLOW": {
   "name": "PRFOLLOW",
   "kind": "global",
   "file": "princess.zil",
   "line": 604,
   "value": "<>"
  },
  "PRDIRS": {
   "name": "PRDIRS",
   "kind": "global",
   "file": "princess.zil",
   "line": 606,
   "value": "<TABLE \"south\" DRAGON-ROOM \"north\" P?SOUTH \"east\" LEDGE-IN-RAVINE \"west\" P?EAST \"south\" DEEP-FORD \"north\" P?SOUTH \"east\" DARK-TUNNEL \"west\" P?EAST \"south\" FORMAL-GARDEN \"north\" P?SOUTH \"in\" GAZEBO \"out\" P?IN>"
  },
  "VERBOSITY": {
   "name": "VERBOSITY",
   "kind": "global",
   "file": "verbs.zil",
   "line": 7,
   "value": "1"
  },
  "SCORE": {
   "name": "SCORE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 127,
   "value": "0"
  },
  "INDENTS": {
   "name": "INDENTS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1000,
   "value": "<TABLE \"\" \"  \" \"    \" \"      \" \"        \" \"          \">"
  },
  "LIT": {
   "name": "LIT",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1008,
   "value": "<>"
  },
  "DESC-OBJECT": {
   "name": "DESC-OBJECT",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1045,
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
  "REXIT": {
   "name": "REXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1227,
   "value": "0"
  },
  "UEXIT": {
   "name": "UEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1228,
   "value": "1"
  },
  "NEXIT": {
   "name": "NEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1229,
   "value": "2"
  },
  "FEXIT": {
   "name": "FEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1230,
   "value": "3"
  },
  "CEXIT": {
   "name": "CEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1231,
   "value": "4"
  },
  "DEXIT": {
   "name": "DEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1232,
   "value": "5"
  },
  "NEXITSTR": {
   "name": "NEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1234,
   "value": "0"
  },
  "FEXITFCN": {
   "name": "FEXITFCN",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1235,
   "value": "0"
  },
  "CEXITFLAG": {
   "name": "CEXITFLAG",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1236,
   "value": "1"
  },
  "CEXITSTR": {
   "name": "CEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1237,
   "value": "1"
  },
  "DEXITOBJ": {
   "name": "DEXITOBJ",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1238,
   "value": "1"
  },
  "DEXITSTR": {
   "name": "DEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1239,
   "value": "1"
  },
  "FUMBLE-NUMBER": {
   "name": "FUMBLE-NUMBER",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1316,
   "value": "7"
  },
  "FUMBLE-PROB": {
   "name": "FUMBLE-PROB",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1318,
   "value": "8"
  },
  "LOAD-ALLOWED": {
   "name": "LOAD-ALLOWED",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1320,
   "value": "100"
  },
  "BALLOON-TIED": {
   "name": "BALLOON-TIED",
   "kind": "global",
   "file": "volcano.zil",
   "line": 5,
   "value": "<>"
  },
  "BALLOON-INFLATED": {
   "name": "BALLOON-INFLATED",
   "kind": "global",
   "file": "volcano.zil",
   "line": 7,
   "value": "<>"
  },
  "LABEL-REVEALED": {
   "name": "LABEL-REVEALED",
   "kind": "global",
   "file": "volcano.zil",
   "line": 9,
   "value": "<>"
  },
  "BALLOON-LOC": {
   "name": "BALLOON-LOC",
   "kind": "global",
   "file": "volcano.zil",
   "line": 29,
   "value": "VOLCANO-BOTTOM"
  },
  "BALLOON-UPS": {
   "name": "BALLOON-UPS",
   "kind": "global",
   "file": "volcano.zil",
   "line": 171,
   "value": "<LTABLE VOLCANO-CORE VOLCANO-BY-SMALL-LEDGE VOLCANO-BY-WIDE-LEDGE>"
  },
  "BALLOON-FLOATS": {
   "name": "BALLOON-FLOATS",
   "kind": "global",
   "file": "volcano.zil",
   "line": 174,
   "value": "<LTABLE NARROW-LEDGE VOLCANO-BY-SMALL-LEDGE WIDE-LEDGE VOLCANO-BY-WIDE-LEDGE>"
  },
  "BALLOON-DOWNS": {
   "name": "BALLOON-DOWNS",
   "kind": "global",
   "file": "volcano.zil",
   "line": 178,
   "value": "<LTABLE VOLCANO-BY-WIDE-LEDGE VOLCANO-BY-SMALL-LEDGE VOLCANO-CORE>"
  },
  "OTHER-PROPERTIES": {
   "name": "OTHER-PROPERTIES",
   "kind": "global",
   "file": "volcano.zil",
   "line": 672,
   "value": "\"Now you've done it. It seems that the brick is an explosive and you have been\nblown to bits.\""
  },
  "DUSTY-ROOM-COLLAPSED": {
   "name": "DUSTY-ROOM-COLLAPSED",
   "kind": "global",
   "file": "volcano.zil",
   "line": 676,
   "value": "<>"
  },
  "SPELL-HANDLED?": {
   "name": "SPELL-HANDLED?",
   "kind": "global",
   "file": "wizard.zil",
   "line": 286,
   "value": "<>"
  },
  "WAND-ON": {
   "name": "WAND-ON",
   "kind": "global",
   "file": "wizard.zil",
   "line": 288,
   "value": "<>"
  },
  "SPELL-USED": {
   "name": "SPELL-USED",
   "kind": "global",
   "file": "wizard.zil",
   "line": 290,
   "value": "<>"
  },
  "SPELL-VICTIM": {
   "name": "SPELL-VICTIM",
   "kind": "global",
   "file": "wizard.zil",
   "line": 292,
   "value": "<>"
  },
  "SPELL?": {
   "name": "SPELL?",
   "kind": "global",
   "file": "wizard.zil",
   "line": 294,
   "value": "<>"
  },
  "SPELLS": {
   "name": "SPELLS",
   "kind": "constant",
   "file": "wizard.zil",
   "line": 296,
   "value": "9"
  },
  "S-FEEBLE": {
   "name": "S-FEEBLE",
   "kind": "constant",
   "file": "wizard.zil",
   "line": 297,
   "value": "1"
  },
  "S-FUMBLE": {
   "name": "S-FUMBLE",
   "kind": "constant",
   "file": "wizard.zil",
   "line": 298,
   "value": "2"
  },
  "S-FREEZE": {
   "name": "S-FREEZE",
   "kind": "constant",
   "file": "wizard.zil",
   "line": 299,
   "value": "3"
  },
  "S-FALL": {
   "name": "S-FALL",
   "kind": "constant",
   "file": "wizard.zil",
   "line": 300,
   "value": "4"
  },
  "S-FERMENT": {
   "name": "S-FERMENT",
   "kind": "constant",
   "file": "wizard.zil",
   "line": 301,
   "value": "5"
  },
  "S-FLOAT": {
   "name": "S-FLOAT",
   "kind": "constant",
   "file": "wizard.zil",
   "line": 302,
   "value": "6"
  },
  "S-FIREPROOF": {
   "name": "S-FIREPROOF",
   "kind": "constant",
   "file": "wizard.zil",
   "line": 303,
   "value": "7"
  },
  "S-FENCE": {
   "name": "S-FENCE",
   "kind": "constant",
   "file": "wizard.zil",
   "line": 304,
   "value": "8"
  },
  "S-FANTASIZE": {
   "name": "S-FANTASIZE",
   "kind": "constant",
   "file": "wizard.zil",
   "line": 305,
   "value": "9"
  },
  "SPELL-NAMES": {
   "name": "SPELL-NAMES",
   "kind": "global",
   "file": "wizard.zil",
   "line": 307,
   "value": "<LTABLE \"Feeble\" \"Fumble\" \"Freeze\" \"Fall\" \"Ferment\" \"Float\" \"Fireproof\" \"Fence\" \"Fantasize\">"
  },
  "SPELL-HINTS": {
   "name": "SPELL-HINTS",
   "kind": "global",
   "file": "wizard.zil",
   "line": 312,
   "value": "<LTABLE \"All at once you feel very tired.\" <> \"Your limbs suddenly feel like stone. You can't move a muscle.\" <> \"You begin to feel lightheaded.\" <> <> <> <>>"
  },
  "SPELL-STOPS": {
   "name": "SPELL-STOPS",
   "kind": "global",
   "file": "wizard.zil",
   "line": 324,
   "value": "<LTABLE \"You feel more energetic now.\" <> \"Your little finger begins to twitch, and then your whole body is free\nagain.\" <> \"Your head is clearer now.\" \"You sink quietly down again.\" <> <> <>>"
  },
  "FANTASIES": {
   "name": "FANTASIES",
   "kind": "global",
   "file": "wizard.zil",
   "line": 337,
   "value": "<LTABLE \"pile of jewels\" \"gold ingot\" \"basilisk\" \"bulging chest\" \"yellow sphere\" \"grue\" \"convention of wizards\" \"copy of ZORK I\">"
  },
  "WAND-ON-LOC": {
   "name": "WAND-ON-LOC",
   "kind": "global",
   "file": "wizard.zil",
   "line": 395,
   "value": "<>"
  },
  "WIZ-DOOR-FLAG": {
   "name": "WIZ-DOOR-FLAG",
   "kind": "global",
   "file": "wizard.zil",
   "line": 474,
   "value": "<>"
  },
  "GUARDIAN-FED": {
   "name": "GUARDIAN-FED",
   "kind": "global",
   "file": "wizard.zil",
   "line": 476,
   "value": "<>"
  },
  "DEMON-PAID": {
   "name": "DEMON-PAID",
   "kind": "global",
   "file": "wizard.zil",
   "line": 837,
   "value": "<>"
  },
  "DEMON-HOARD": {
   "name": "DEMON-HOARD",
   "kind": "global",
   "file": "wizard.zil",
   "line": 839,
   "value": "0"
  },
  "TREASURES-MAX": {
   "name": "TREASURES-MAX",
   "kind": "constant",
   "file": "wizard.zil",
   "line": 841,
   "value": "10"
  },
  "DEMON-THANKS": {
   "name": "DEMON-THANKS",
   "kind": "global",
   "file": "wizard.zil",
   "line": 843,
   "value": "<LTABLE \"Most fine, master! But 'tis not enough. I will do a great service,\nand are not great services bought at great price?\" \"Very nice, but not enough!\" \"Ah, truly magnificent! Keep them coming.\" \"Almost halfway there, oh worthy one!\" \"Your generosity overwhelms me!\" \"Very nice, but not enough!\" \"Ah, truly magnificent! Keep them coming.\" \"Your generosity overwhelms me!\" \"Wondrous fine, master! But one treasure is yet to be given!\">"
  },
  "WIZQDESCS": {
   "name": "WIZQDESCS",
   "kind": "global",
   "file": "wizard.zil",
   "line": 996,
   "value": "<LTABLE \"almost monkish in its austerity\" \"an opulently furnished seraglio out of an Arabian folktale\" \"decorated in the Louis XIV style\" \"overhung with palm-trees and lianas. The only furniture is a hammock\" \"a suburban bedroom out of the 1950's, complete with bunk beds\" \"a dim cave, its floor piled with furs and old bones\">"
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
     "line": 29
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
     "line": 31
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
     "line": 33
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
     "line": 36
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
     "line": 38
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
     "line": 41
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
     "line": 44
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
     "line": 46
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
     "line": 48
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
     "line": 50
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
     "line": 52
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
     "line": 54
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
     "line": 56
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
     "line": 58
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
     "line": 60
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
     "line": 62
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
     "line": 64
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
     "line": 66
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
     "line": 72
    },
    {
     "pattern": "ATTACK OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 73
    }
   ]
  },
  "BLOW": {
   "verb": "BLOW",
   "synonyms": [],
   "productions": [
    {
     "pattern": "BLOW OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-BLAST",
     "preaction": null,
     "file": "syntax.zil",
     "line": 77
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
     "line": 78
    },
    {
     "pattern": "BLOW UP OBJECT WITH OBJECT (FIND TOOLBIT)",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-INFLATE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 79
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
     "line": 80
    }
   ]
  },
  "BURN": {
   "verb": "BURN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "BURN OBJECT (FIND BURNBIT) WITH OBJECT (FIND FLAMEBIT) (HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-BURN",
     "preaction": "PRE-BURN",
     "file": "syntax.zil",
     "line": 83
    },
    {
     "pattern": "BURN DOWN OBJECT (FIND BURNBIT) WITH OBJECT (FIND FLAMEBIT) (HAVE)",
     "objects": 2,
     "particles": [
      "DOWN",
      "WITH"
     ],
     "action": "V-BURN",
     "preaction": "PRE-BURN",
     "file": "syntax.zil",
     "line": 85
    }
   ]
  },
  "CLIMB": {
   "verb": "CLIMB",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CLIMB UP OBJECT (FIND RLANDBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-CLIMB",
     "preaction": null,
     "file": "syntax.zil",
     "line": 89
    },
    {
     "pattern": "CLIMB DOWN OBJECT (FIND RLANDBIT)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 90
    },
    {
     "pattern": "CLIMB OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLIMB",
     "preaction": null,
     "file": "syntax.zil",
     "line": 91
    },
    {
     "pattern": "CLIMB IN OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-ENTER",
     "preaction": "PRE-ENTER",
     "file": "syntax.zil",
     "line": 92
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
     "line": 93
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
     "line": 96
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
     "file": "syntax.zil",
     "line": 98
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
     "line": 100
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
     "action": "V-WALK-AROUND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 102
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
     "line": 105
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
     "line": 108
    },
    {
     "pattern": "CURSE OBJECT (FIND ACTORBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-CURSES",
     "preaction": null,
     "file": "syntax.zil",
     "line": 109
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
     "line": 112
    }
   ]
  },
  "DESTROY": {
   "verb": "DESTROY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DESTROY OBJECT WITH OBJECT (HELD CARRIED TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": "PRE-MUNG",
     "file": "syntax.zil",
     "line": 114
    },
    {
     "pattern": "DESTROY DOWN OBJECT WITH OBJECT (HELD CARRIED TAKE)",
     "objects": 2,
     "particles": [
      "DOWN",
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": "PRE-MUNG",
     "file": "syntax.zil",
     "line": 115
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
     "line": 118
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
     "file": "syntax.zil",
     "line": 120
    }
   ]
  },
  "DRINK": {
   "verb": "DRINK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DRINK OBJECT (FIND DRINKBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-DRINK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 122
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
     "line": 123
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
     "line": 125
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
     "line": 126
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
     "line": 127
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
     "line": 128
    }
   ]
  },
  "EAT": {
   "verb": "EAT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EAT OBJECT (FIND FOODBIT) (HAVE TAKE)",
     "objects": 1,
     "particles": [],
     "action": "V-EAT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 130
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
     "file": "syntax.zil",
     "line": 133
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
     "preaction": "PRE-ENTER",
     "file": "syntax.zil",
     "line": 135
    },
    {
     "pattern": "ENTER OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-ENTER",
     "preaction": "PRE-ENTER",
     "file": "syntax.zil",
     "line": 136
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
     "line": 139
    },
    {
     "pattern": "EXAMINE IN OBJECT (MANY)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 140
    },
    {
     "pattern": "EXAMINE ON OBJECT (MANY)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 141
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
     "line": 144
    },
    {
     "pattern": "EXIT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 145
    }
   ]
  },
  "EXTINGUISH": {
   "verb": "EXTINGUISH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EXTINGUISH OBJECT (FIND ONBIT) (TAKE HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 147
    }
   ]
  },
  "FILL": {
   "verb": "FILL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FILL OBJECT (FIND CONTBIT) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-FILL",
     "preaction": "PRE-FILL",
     "file": "syntax.zil",
     "line": 150
    },
    {
     "pattern": "FILL OBJECT (FIND CONTBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-FILL",
     "preaction": "PRE-FILL",
     "file": "syntax.zil",
     "line": 151
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
     "line": 153
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
     "line": 156
    },
    {
     "pattern": "FOLLOW OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 157
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
     "line": 160
    },
    {
     "pattern": "GIVE OBJECT (FIND ACTORBIT) (ON-GROUND) OBJECT (MANY HELD HAVE)",
     "objects": 2,
     "particles": [],
     "action": "V-SGIVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 162
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
     "line": 166
    },
    {
     "pattern": "HELLO OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-HELLO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 167
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
     "file": "syntax.zil",
     "line": 170
    }
   ]
  },
  "INFLAT": {
   "verb": "INFLAT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "INFLAT OBJECT WITH OBJECT (FIND TOOLBIT)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-INFLATE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 173
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
     "line": 175
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
     "line": 176
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
     "line": 177
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
     "line": 178
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
     "line": 179
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
     "line": 180
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
     "line": 183
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
     "line": 185
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
     "line": 187
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
     "line": 188
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
     "line": 189
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
     "line": 192
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
     "line": 194
    },
    {
     "pattern": "LEAVE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-DROP",
     "preaction": "PRE-DROP",
     "file": "syntax.zil",
     "line": 195
    }
   ]
  },
  "LIGHT": {
   "verb": "LIGHT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LIGHT OBJECT (FIND LIGHTBIT) (TAKE HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 197
    },
    {
     "pattern": "LIGHT OBJECT (FIND LIGHTBIT) WITH OBJECT (FIND FLAMEBIT) (HELD CARRIED TAKE HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-BURN",
     "preaction": "PRE-BURN",
     "file": "syntax.zil",
     "line": 198
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
     "line": 201
    }
   ]
  },
  "LOCK": {
   "verb": "LOCK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LOCK OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-LOCK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 203
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
     "line": 206
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
     "line": 207
    },
    {
     "pattern": "LOOK UP OBJECT (FIND RLANDBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-LOOK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 208
    },
    {
     "pattern": "LOOK DOWN OBJECT (FIND RLANDBIT)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-LOOK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 209
    },
    {
     "pattern": "LOOK AT OBJECT (MANY)",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-EXAMINE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 210
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
     "line": 211
    },
    {
     "pattern": "LOOK WITH OBJECT (MANY)",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 212
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
     "line": 213
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
     "line": 214
    },
    {
     "pattern": "LOOK IN OBJECT (MANY)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 215
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
     "line": 216
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
     "line": 219
    }
   ]
  },
  "MELT": {
   "verb": "MELT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "MELT OBJECT WITH OBJECT (FIND FLAMEBIT)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-MELT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 221
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
     "line": 223
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
     "line": 224
    },
    {
     "pattern": "MOVE OBJECT WITH OBJECT (FIND TOOLBIT)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TURN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 225
    }
   ]
  },
  "OPEN": {
   "verb": "OPEN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "OPEN OBJECT (FIND DOORBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-OPEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 228
    },
    {
     "pattern": "OPEN UP OBJECT (FIND DOORBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-OPEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 229
    },
    {
     "pattern": "OPEN OBJECT (FIND DOORBIT) WITH OBJECT (FIND TOOLBIT) (HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-OPEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 230
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
     "line": 232
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
     "line": 233
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
     "line": 234
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
     "line": 236
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
     "line": 238
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
     "line": 242
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
     "line": 243
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
     "line": 244
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
     "line": 245
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
     "line": 248
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
     "line": 249
    },
    {
     "pattern": "PULL UP OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-MOVE",
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
     "pattern": "PUSH OBJECT (IN-ROOM ON-GROUND MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-PUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 253
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
     "line": 254
    },
    {
     "pattern": "PUSH OBJECT WITH OBJECT (FIND TOOLBIT)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TURN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 255
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
     "line": 256
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
     "line": 259
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
     "line": 260
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
     "line": 261
    },
    {
     "pattern": "PUT OBJECT (HELD HAVE) UNDER OBJECT",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 262
    },
    {
     "pattern": "PUT OUT OBJECT (FIND ONBIT) (TAKE HAVE)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 263
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
     "line": 266
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
     "line": 267
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
     "line": 270
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
     "line": 273
    },
    {
     "pattern": "READ FROM OBJECT (FIND READBIT) (TAKE)",
     "objects": 1,
     "particles": [
      "FROM"
     ],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "syntax.zil",
     "line": 274
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
     "line": 277
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
     "line": 278
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
     "line": 281
    },
    {
     "pattern": "SAY OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 282
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
     "line": 285
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
     "line": 286
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
     "line": 287
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
     "line": 289
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
     "line": 291
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
     "file": "syntax.zil",
     "line": 294
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
     "line": 296
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
     "line": 298
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
     "line": 299
    }
   ]
  },
  "STRIKE": {
   "verb": "STRIKE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "STRIKE OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 301
    },
    {
     "pattern": "STRIKE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-STRIKE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 303
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
     "line": 305
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
     "line": 306
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
     "line": 307
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
     "line": 310
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
     "line": 311
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
     "line": 315
    },
    {
     "pattern": "TAKE IN OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-ENTER",
     "preaction": "PRE-ENTER",
     "file": "syntax.zil",
     "line": 316
    },
    {
     "pattern": "TAKE OUT OBJECT (FIND RLANDBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-DISEMBARK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 317
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
     "line": 318
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
     "line": 319
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
     "line": 320
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
     "line": 322
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
     "line": 324
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
     "line": 328
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
     "line": 330
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
     "line": 331
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
     "line": 334
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
     "line": 336
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
     "line": 338
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
     "line": 339
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
     "line": 340
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
     "line": 341
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
     "line": 344
    },
    {
     "pattern": "TIE UP OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (HAVE)",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-TIE-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 345
    }
   ]
  },
  "TURN": {
   "verb": "TURN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TURN OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TURN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 349
    },
    {
     "pattern": "TURN ON OBJECT (FIND LIGHTBIT)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 350
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
     "line": 351
    },
    {
     "pattern": "TURN OFF OBJECT (FIND ONBIT) (TAKE HAVE)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 352
    }
   ]
  },
  "UNLOCK": {
   "verb": "UNLOCK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "UNLOCK OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-UNLOCK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 355
    }
   ]
  },
  "UNTIE": {
   "verb": "UNTIE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "UNTIE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-UNTIE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 358
    },
    {
     "pattern": "UNTIE OBJECT FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-UNTIE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 359
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
     "line": 362
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
     "line": 365
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
     "line": 366
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
     "line": 369
    },
    {
     "pattern": "WALK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WALK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 370
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
     "line": 371
    },
    {
     "pattern": "WALK IN OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-ENTER",
     "preaction": "PRE-ENTER",
     "file": "syntax.zil",
     "line": 372
    },
    {
     "pattern": "WALK WITH OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-ENTER",
     "preaction": "PRE-ENTER",
     "file": "syntax.zil",
     "line": 373
    },
    {
     "pattern": "WALK ON OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-ENTER",
     "preaction": "PRE-ENTER",
     "file": "syntax.zil",
     "line": 374
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
     "line": 375
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
     "line": 376
    },
    {
     "pattern": "WALK AROUND OBJECT (FIND RLANDBIT)",
     "objects": 1,
     "particles": [
      "AROUND"
     ],
     "action": "V-WALK-AROUND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 377
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
     "line": 378
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
     "line": 379
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
     "line": 382
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
     "line": 383
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
     "line": 384
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
     "line": 387
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
     "line": 390
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
     "of": "CUT"
    },
    {
     "kind": "particle",
     "of": "DESTROY"
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
     "of": "POKE"
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
    },
    {
     "kind": "word",
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
  "IN": {
   "word": "IN",
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
  "TO": {
   "word": "TO",
   "roles": [
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
     "of": "WALK"
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
  "MELT": {
   "word": "MELT",
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
     "kind": "noun",
     "of": "STAND-1"
    },
    {
     "kind": "noun",
     "of": "STAND-2"
    },
    {
     "kind": "noun",
     "of": "STAND-3"
    },
    {
     "kind": "noun",
     "of": "STAND-4"
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
  "TALK": {
   "word": "TALK",
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
  "AWAY": {
   "word": "AWAY",
   "roles": [
    {
     "kind": "particle",
     "of": "WALK"
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
    },
    {
     "kind": "adjective",
     "of": "WALL"
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
     "of": "WALL"
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
     "of": "WALL"
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
     "of": "WALL"
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
     "of": "WALL"
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
     "of": "WALL"
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
  "STAB": {
   "word": "STAB",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ATTACK"
    }
   ]
  },
  "BLAST": {
   "word": "BLAST",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "BLOW"
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
  "BOARD": {
   "word": "BOARD",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ENTER"
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
  "CHASE": {
   "word": "CHASE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "FOLLOW"
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
  "ROLL": {
   "word": "ROLL",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "MOVE"
    }
   ]
  },
  "PUNCTURE": {
   "word": "PUNCTURE",
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
     "kind": "adjective",
     "of": "PLACE-MAT"
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
  "HOP": {
   "word": "HOP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SKIP"
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
  "POINT": {
   "word": "POINT",
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
  "FEEBLE": {
   "word": "FEEBLE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "FUMBLE": {
   "word": "FUMBLE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "FREEZE": {
   "word": "FREEZE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "FALL": {
   "word": "FALL",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "FRY": {
   "word": "FRY",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "FLUORESCE": {
   "word": "FLUORESCE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "FERMENT": {
   "word": "FERMENT",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "FLOAT": {
   "word": "FLOAT",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "FIREPROOF": {
   "word": "FIREPROOF",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "FENCE": {
   "word": "FENCE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "FUDGE": {
   "word": "FUDGE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "FANTASIZE": {
   "word": "FANTASIZE",
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
  "DOOR": {
   "word": "DOOR",
   "roles": [
    {
     "kind": "noun",
     "of": "RIDDLE-DOOR"
    },
    {
     "kind": "noun",
     "of": "PDOOR"
    },
    {
     "kind": "noun",
     "of": "WIZ-DOOR"
    }
   ]
  },
  "GREAT": {
   "word": "GREAT",
   "roles": [
    {
     "kind": "adjective",
     "of": "RIDDLE-DOOR"
    },
    {
     "kind": "adjective",
     "of": "PENTAGRAM"
    }
   ]
  },
  "STONE": {
   "word": "STONE",
   "roles": [
    {
     "kind": "adjective",
     "of": "RIDDLE-DOOR"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-MENHIR"
    },
    {
     "kind": "noun",
     "of": "MENHIR"
    },
    {
     "kind": "adjective",
     "of": "BRIDGE"
    }
   ]
  },
  "ETCHINGS": {
   "word": "ETCHINGS",
   "roles": [
    {
     "kind": "noun",
     "of": "BOTTOM-ETCHINGS"
    },
    {
     "kind": "noun",
     "of": "TOP-ETCHINGS"
    }
   ]
  },
  "WALL": {
   "word": "WALL",
   "roles": [
    {
     "kind": "noun",
     "of": "BOTTOM-ETCHINGS"
    },
    {
     "kind": "noun",
     "of": "TOP-ETCHINGS"
    },
    {
     "kind": "noun",
     "of": "WALL"
    }
   ]
  },
  "NECKLACE": {
   "word": "NECKLACE",
   "roles": [
    {
     "kind": "noun",
     "of": "PEARL-NECKLACE"
    }
   ]
  },
  "TREASURE": {
   "word": "TREASURE",
   "roles": [
    {
     "kind": "noun",
     "of": "PEARL-NECKLACE"
    },
    {
     "kind": "noun",
     "of": "PORTRAIT"
    },
    {
     "kind": "noun",
     "of": "VIOLIN"
    },
    {
     "kind": "noun",
     "of": "BILLS"
    },
    {
     "kind": "noun",
     "of": "GOLD-KEY"
    },
    {
     "kind": "noun",
     "of": "STATUETTE"
    },
    {
     "kind": "noun",
     "of": "RUBY"
    },
    {
     "kind": "noun",
     "of": "COIN"
    },
    {
     "kind": "noun",
     "of": "STAMP"
    },
    {
     "kind": "noun",
     "of": "CROWN"
    }
   ]
  },
  "PEARL": {
   "word": "PEARL",
   "roles": [
    {
     "kind": "adjective",
     "of": "PEARL-NECKLACE"
    }
   ]
  },
  "BUCKET": {
   "word": "BUCKET",
   "roles": [
    {
     "kind": "noun",
     "of": "BUCKET"
    }
   ]
  },
  "WOODEN": {
   "word": "WOODEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "BUCKET"
    },
    {
     "kind": "adjective",
     "of": "POSTS"
    },
    {
     "kind": "adjective",
     "of": "PDOOR"
    },
    {
     "kind": "adjective",
     "of": "PTABLE"
    },
    {
     "kind": "adjective",
     "of": "GAZEBO-OBJECT"
    },
    {
     "kind": "adjective",
     "of": "CHEST"
    }
   ]
  },
  "WELL": {
   "word": "WELL",
   "roles": [
    {
     "kind": "noun",
     "of": "WELL"
    }
   ]
  },
  "MAGIC": {
   "word": "MAGIC",
   "roles": [
    {
     "kind": "adjective",
     "of": "WELL"
    },
    {
     "kind": "adjective",
     "of": "WAND"
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
  "PAPER": {
   "word": "PAPER",
   "roles": [
    {
     "kind": "noun",
     "of": "ROBOT-LABEL"
    },
    {
     "kind": "noun",
     "of": "NEWSPAPER"
    }
   ]
  },
  "PIECE": {
   "word": "PIECE",
   "roles": [
    {
     "kind": "noun",
     "of": "ROBOT-LABEL"
    }
   ]
  },
  "GREEN": {
   "word": "GREEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "ROBOT-LABEL"
    },
    {
     "kind": "adjective",
     "of": "GREEN-CAKE"
    }
   ]
  },
  "BUTTON": {
   "word": "BUTTON",
   "roles": [
    {
     "kind": "noun",
     "of": "TRIANGULAR-BUTTON"
    }
   ]
  },
  "TRIANGULAR": {
   "word": "TRIANGULAR",
   "roles": [
    {
     "kind": "adjective",
     "of": "TRIANGULAR-BUTTON"
    }
   ]
  },
  "CAGE": {
   "word": "CAGE",
   "roles": [
    {
     "kind": "noun",
     "of": "CAGE-OBJECT"
    }
   ]
  },
  "STEEL": {
   "word": "STEEL",
   "roles": [
    {
     "kind": "adjective",
     "of": "CAGE-OBJECT"
    },
    {
     "kind": "adjective",
     "of": "SAFE"
    }
   ]
  },
  "SOLID": {
   "word": "SOLID",
   "roles": [
    {
     "kind": "adjective",
     "of": "CAGE-OBJECT"
    }
   ]
  },
  "PORTRAIT": {
   "word": "PORTRAIT",
   "roles": [
    {
     "kind": "noun",
     "of": "PORTRAIT"
    }
   ]
  },
  "PAINTING": {
   "word": "PAINTING",
   "roles": [
    {
     "kind": "noun",
     "of": "PORTRAIT"
    }
   ]
  },
  "RARE": {
   "word": "RARE",
   "roles": [
    {
     "kind": "adjective",
     "of": "PORTRAIT"
    },
    {
     "kind": "adjective",
     "of": "CANDY"
    }
   ]
  },
  "FLATHEAD": {
   "word": "FLATHEAD",
   "roles": [
    {
     "kind": "adjective",
     "of": "PORTRAIT"
    },
    {
     "kind": "adjective",
     "of": "STAMP"
    }
   ]
  },
  "TABLE": {
   "word": "TABLE",
   "roles": [
    {
     "kind": "noun",
     "of": "ALICE-TABLE"
    },
    {
     "kind": "noun",
     "of": "PTABLE"
    },
    {
     "kind": "noun",
     "of": "GAZEBO-TABLE"
    },
    {
     "kind": "noun",
     "of": "WORKBENCH"
    }
   ]
  },
  "OBLONG": {
   "word": "OBLONG",
   "roles": [
    {
     "kind": "adjective",
     "of": "ALICE-TABLE"
    }
   ]
  },
  "CAKE": {
   "word": "CAKE",
   "roles": [
    {
     "kind": "noun",
     "of": "GREEN-CAKE"
    },
    {
     "kind": "noun",
     "of": "BLUE-CAKE"
    },
    {
     "kind": "noun",
     "of": "ORANGE-CAKE"
    },
    {
     "kind": "noun",
     "of": "RED-CAKE"
    }
   ]
  },
  "ICING": {
   "word": "ICING",
   "roles": [
    {
     "kind": "noun",
     "of": "GREEN-CAKE"
    },
    {
     "kind": "noun",
     "of": "BLUE-CAKE"
    },
    {
     "kind": "noun",
     "of": "ORANGE-CAKE"
    },
    {
     "kind": "noun",
     "of": "RED-CAKE"
    }
   ]
  },
  "CAKES": {
   "word": "CAKES",
   "roles": [
    {
     "kind": "noun",
     "of": "GREEN-CAKE"
    },
    {
     "kind": "noun",
     "of": "BLUE-CAKE"
    },
    {
     "kind": "noun",
     "of": "ORANGE-CAKE"
    },
    {
     "kind": "noun",
     "of": "RED-CAKE"
    }
   ]
  },
  "LETTER": {
   "word": "LETTER",
   "roles": [
    {
     "kind": "noun",
     "of": "GREEN-CAKE"
    },
    {
     "kind": "noun",
     "of": "BLUE-CAKE"
    },
    {
     "kind": "noun",
     "of": "ORANGE-CAKE"
    },
    {
     "kind": "noun",
     "of": "RED-CAKE"
    },
    {
     "kind": "adjective",
     "of": "LETTER-OPENER"
    }
   ]
  },
  "FROSTED": {
   "word": "FROSTED",
   "roles": [
    {
     "kind": "adjective",
     "of": "GREEN-CAKE"
    },
    {
     "kind": "adjective",
     "of": "BLUE-CAKE"
    },
    {
     "kind": "adjective",
     "of": "ORANGE-CAKE"
    },
    {
     "kind": "adjective",
     "of": "RED-CAKE"
    }
   ]
  },
  "BLUE": {
   "word": "BLUE",
   "roles": [
    {
     "kind": "adjective",
     "of": "BLUE-CAKE"
    },
    {
     "kind": "adjective",
     "of": "BALLOON-LABEL"
    },
    {
     "kind": "adjective",
     "of": "BLUE-BOOK"
    },
    {
     "kind": "adjective",
     "of": "PALANTIR-2"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-PALANTIR"
    }
   ]
  },
  "ORANGE": {
   "word": "ORANGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "ORANGE-CAKE"
    }
   ]
  },
  "RED": {
   "word": "RED",
   "roles": [
    {
     "kind": "adjective",
     "of": "RED-CAKE"
    },
    {
     "kind": "adjective",
     "of": "DRAGON"
    },
    {
     "kind": "adjective",
     "of": "PALANTIR-1"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-PALANTIR"
    }
   ]
  },
  "POSTS": {
   "word": "POSTS",
   "roles": [
    {
     "kind": "noun",
     "of": "POSTS"
    }
   ]
  },
  "POST": {
   "word": "POST",
   "roles": [
    {
     "kind": "noun",
     "of": "POSTS"
    }
   ]
  },
  "POOL": {
   "word": "POOL",
   "roles": [
    {
     "kind": "noun",
     "of": "POOL"
    }
   ]
  },
  "PACKAGE": {
   "word": "PACKAGE",
   "roles": [
    {
     "kind": "noun",
     "of": "CANDY"
    }
   ]
  },
  "CANDY": {
   "word": "CANDY",
   "roles": [
    {
     "kind": "noun",
     "of": "CANDY"
    }
   ]
  },
  "INSECTS": {
   "word": "INSECTS",
   "roles": [
    {
     "kind": "noun",
     "of": "CANDY"
    }
   ]
  },
  "CANDIED": {
   "word": "CANDIED",
   "roles": [
    {
     "kind": "adjective",
     "of": "CANDY"
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
  "BRASS": {
   "word": "BRASS",
   "roles": [
    {
     "kind": "adjective",
     "of": "LAMP"
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
     "of": "CHEST"
    },
    {
     "kind": "adjective",
     "of": "WIZARD"
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
  "STRADIVARIUS": {
   "word": "STRADIVARIUS",
   "roles": [
    {
     "kind": "noun",
     "of": "VIOLIN"
    }
   ]
  },
  "VIOLIN": {
   "word": "VIOLIN",
   "roles": [
    {
     "kind": "noun",
     "of": "VIOLIN"
    }
   ]
  },
  "FANCY": {
   "word": "FANCY",
   "roles": [
    {
     "kind": "adjective",
     "of": "VIOLIN"
    }
   ]
  },
  "BILLS": {
   "word": "BILLS",
   "roles": [
    {
     "kind": "noun",
     "of": "BILLS"
    }
   ]
  },
  "STACK": {
   "word": "STACK",
   "roles": [
    {
     "kind": "noun",
     "of": "BILLS"
    }
   ]
  },
  "MONEY": {
   "word": "MONEY",
   "roles": [
    {
     "kind": "noun",
     "of": "BILLS"
    }
   ]
  },
  "NEAT": {
   "word": "NEAT",
   "roles": [
    {
     "kind": "adjective",
     "of": "BILLS"
    }
   ]
  },
  "ZORKMID": {
   "word": "ZORKMID",
   "roles": [
    {
     "kind": "adjective",
     "of": "BILLS"
    },
    {
     "kind": "noun",
     "of": "ZORKMID"
    },
    {
     "kind": "noun",
     "of": "COIN"
    }
   ]
  },
  "MENHIR": {
   "word": "MENHIR",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-MENHIR"
    },
    {
     "kind": "noun",
     "of": "MENHIR"
    }
   ]
  },
  "ROCK": {
   "word": "ROCK",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-MENHIR"
    },
    {
     "kind": "noun",
     "of": "MENHIR"
    }
   ]
  },
  "HUGE": {
   "word": "HUGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-MENHIR"
    },
    {
     "kind": "adjective",
     "of": "MENHIR"
    },
    {
     "kind": "adjective",
     "of": "COLLAR"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-CERBERUS"
    },
    {
     "kind": "adjective",
     "of": "CERBERUS"
    },
    {
     "kind": "adjective",
     "of": "DRAGON"
    },
    {
     "kind": "adjective",
     "of": "AQUARIUM"
    }
   ]
  },
  "HEAVY": {
   "word": "HEAVY",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-MENHIR"
    },
    {
     "kind": "adjective",
     "of": "MENHIR"
    }
   ]
  },
  "ENORMOUS": {
   "word": "ENORMOUS",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-MENHIR"
    },
    {
     "kind": "adjective",
     "of": "MENHIR"
    }
   ]
  },
  "F": {
   "word": "F",
   "roles": [
    {
     "kind": "noun",
     "of": "MENHIR"
    }
   ]
  },
  "COLLAR": {
   "word": "COLLAR",
   "roles": [
    {
     "kind": "noun",
     "of": "COLLAR"
    }
   ]
  },
  "GIANT": {
   "word": "GIANT",
   "roles": [
    {
     "kind": "adjective",
     "of": "COLLAR"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-CERBERUS"
    },
    {
     "kind": "adjective",
     "of": "CERBERUS"
    }
   ]
  },
  "DOG": {
   "word": "DOG",
   "roles": [
    {
     "kind": "adjective",
     "of": "COLLAR"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-CERBERUS"
    },
    {
     "kind": "noun",
     "of": "CERBERUS"
    }
   ]
  },
  "CERBERUS": {
   "word": "CERBERUS",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-CERBERUS"
    },
    {
     "kind": "noun",
     "of": "CERBERUS"
    }
   ]
  },
  "HOUND": {
   "word": "HOUND",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-CERBERUS"
    },
    {
     "kind": "noun",
     "of": "CERBERUS"
    }
   ]
  },
  "MONSTER": {
   "word": "MONSTER",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-CERBERUS"
    },
    {
     "kind": "noun",
     "of": "CERBERUS"
    }
   ]
  },
  "THREE": {
   "word": "THREE",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-CERBERUS"
    },
    {
     "kind": "adjective",
     "of": "CERBERUS"
    }
   ]
  },
  "HEADED": {
   "word": "HEADED",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-CERBERUS"
    },
    {
     "kind": "adjective",
     "of": "CERBERUS"
    }
   ]
  },
  "HEADS": {
   "word": "HEADS",
   "roles": [
    {
     "kind": "noun",
     "of": "HEADS"
    }
   ]
  },
  "HEAD": {
   "word": "HEAD",
   "roles": [
    {
     "kind": "noun",
     "of": "HEADS"
    },
    {
     "kind": "noun",
     "of": "DOOR-KEEPER"
    }
   ]
  },
  "POLE": {
   "word": "POLE",
   "roles": [
    {
     "kind": "noun",
     "of": "HEADS"
    }
   ]
  },
  "POLES": {
   "word": "POLES",
   "roles": [
    {
     "kind": "noun",
     "of": "HEADS"
    }
   ]
  },
  "TOMB": {
   "word": "TOMB",
   "roles": [
    {
     "kind": "noun",
     "of": "CRYPT-OBJECT"
    }
   ]
  },
  "CRYPT": {
   "word": "CRYPT",
   "roles": [
    {
     "kind": "noun",
     "of": "CRYPT-OBJECT"
    }
   ]
  },
  "GRAVE": {
   "word": "GRAVE",
   "roles": [
    {
     "kind": "noun",
     "of": "CRYPT-OBJECT"
    }
   ]
  },
  "MARBLE": {
   "word": "MARBLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "CRYPT-OBJECT"
    }
   ]
  },
  "OAK": {
   "word": "OAK",
   "roles": [
    {
     "kind": "adjective",
     "of": "PDOOR"
    }
   ]
  },
  "WINDOW": {
   "word": "WINDOW",
   "roles": [
    {
     "kind": "noun",
     "of": "PWINDOW"
    }
   ]
  },
  "BARRED": {
   "word": "BARRED",
   "roles": [
    {
     "kind": "adjective",
     "of": "PWINDOW"
    }
   ]
  },
  "DUSTY": {
   "word": "DUSTY",
   "roles": [
    {
     "kind": "adjective",
     "of": "PTABLE"
    }
   ]
  },
  "CRACK": {
   "word": "CRACK",
   "roles": [
    {
     "kind": "noun",
     "of": "PCRACK"
    }
   ]
  },
  "NARROW": {
   "word": "NARROW",
   "roles": [
    {
     "kind": "adjective",
     "of": "PCRACK"
    },
    {
     "kind": "adjective",
     "of": "PATH-OBJECT"
    }
   ]
  },
  "KEYHOLE": {
   "word": "KEYHOLE",
   "roles": [
    {
     "kind": "noun",
     "of": "KEYHOLE-1"
    },
    {
     "kind": "noun",
     "of": "KEYHOLE-2"
    }
   ]
  },
  "HOLE": {
   "word": "HOLE",
   "roles": [
    {
     "kind": "noun",
     "of": "KEYHOLE-1"
    },
    {
     "kind": "noun",
     "of": "KEYHOLE-2"
    },
    {
     "kind": "noun",
     "of": "SAFE-HOLE"
    }
   ]
  },
  "KEY": {
   "word": "KEY",
   "roles": [
    {
     "kind": "noun",
     "of": "KEY"
    },
    {
     "kind": "noun",
     "of": "GOLD-KEY"
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
  "RUSTY": {
   "word": "RUSTY",
   "roles": [
    {
     "kind": "adjective",
     "of": "KEY"
    },
    {
     "kind": "adjective",
     "of": "SAFE"
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
  "LIQUID": {
   "word": "LIQUID",
   "roles": [
    {
     "kind": "noun",
     "of": "WATER"
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
     "of": "ADVENTURER"
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
  "DARK": {
   "word": "DARK",
   "roles": [
    {
     "kind": "adjective",
     "of": "PATH-OBJECT"
    }
   ]
  },
  "DAMP": {
   "word": "DAMP",
   "roles": [
    {
     "kind": "adjective",
     "of": "PATH-OBJECT"
    }
   ]
  },
  "SMOKEY": {
   "word": "SMOKEY",
   "roles": [
    {
     "kind": "adjective",
     "of": "PATH-OBJECT"
    }
   ]
  },
  "SCORCHED": {
   "word": "SCORCHED",
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
  },
  "STREAM": {
   "word": "STREAM",
   "roles": [
    {
     "kind": "noun",
     "of": "STREAM"
    }
   ]
  },
  "COLD": {
   "word": "COLD",
   "roles": [
    {
     "kind": "adjective",
     "of": "STREAM"
    },
    {
     "kind": "adjective",
     "of": "ICE"
    }
   ]
  },
  "CHASM": {
   "word": "CHASM",
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
  "DEEP": {
   "word": "DEEP",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHASM"
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
  "EASTERN": {
   "word": "EASTERN",
   "roles": [
    {
     "kind": "adjective",
     "of": "WALL"
    }
   ]
  },
  "WESTERN": {
   "word": "WESTERN",
   "roles": [
    {
     "kind": "adjective",
     "of": "WALL"
    }
   ]
  },
  "UNICORN": {
   "word": "UNICORN",
   "roles": [
    {
     "kind": "noun",
     "of": "UNICORN"
    }
   ]
  },
  "ANIMAL": {
   "word": "ANIMAL",
   "roles": [
    {
     "kind": "noun",
     "of": "UNICORN"
    }
   ]
  },
  "BEAUTIFUL": {
   "word": "BEAUTIFUL",
   "roles": [
    {
     "kind": "adjective",
     "of": "UNICORN"
    },
    {
     "kind": "adjective",
     "of": "PRINCESS"
    }
   ]
  },
  "WHITE": {
   "word": "WHITE",
   "roles": [
    {
     "kind": "adjective",
     "of": "UNICORN"
    },
    {
     "kind": "adjective",
     "of": "WHITE-BOOK"
    },
    {
     "kind": "adjective",
     "of": "PALANTIR-3"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-PALANTIR"
    }
   ]
  },
  "DELICATE": {
   "word": "DELICATE",
   "roles": [
    {
     "kind": "adjective",
     "of": "GOLD-KEY"
    }
   ]
  },
  "GOLD": {
   "word": "GOLD",
   "roles": [
    {
     "kind": "adjective",
     "of": "GOLD-KEY"
    },
    {
     "kind": "adjective",
     "of": "STATUETTE"
    },
    {
     "kind": "noun",
     "of": "COIN"
    },
    {
     "kind": "adjective",
     "of": "COIN"
    }
   ]
  },
  "RIBBON": {
   "word": "RIBBON",
   "roles": [
    {
     "kind": "noun",
     "of": "RIBBON"
    }
   ]
  },
  "VELVET": {
   "word": "VELVET",
   "roles": [
    {
     "kind": "adjective",
     "of": "RIBBON"
    }
   ]
  },
  "SATIN": {
   "word": "SATIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "RIBBON"
    }
   ]
  },
  "GAZEBO": {
   "word": "GAZEBO",
   "roles": [
    {
     "kind": "noun",
     "of": "GAZEBO-OBJECT"
    }
   ]
  },
  "NEWSPAPER": {
   "word": "NEWSPAPER",
   "roles": [
    {
     "kind": "noun",
     "of": "NEWSPAPER"
    },
    {
     "kind": "adjective",
     "of": "NEWSPAPER"
    }
   ]
  },
  "NEWS": {
   "word": "NEWS",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEWSPAPER"
    }
   ]
  },
  "MAT": {
   "word": "MAT",
   "roles": [
    {
     "kind": "noun",
     "of": "PLACE-MAT"
    }
   ]
  },
  "PLACEM": {
   "word": "PLACEM",
   "roles": [
    {
     "kind": "noun",
     "of": "PLACE-MAT"
    }
   ]
  },
  "TEAPOT": {
   "word": "TEAPOT",
   "roles": [
    {
     "kind": "noun",
     "of": "TEAPOT"
    }
   ]
  },
  "POT": {
   "word": "POT",
   "roles": [
    {
     "kind": "noun",
     "of": "TEAPOT"
    }
   ]
  },
  "CHINA": {
   "word": "CHINA",
   "roles": [
    {
     "kind": "adjective",
     "of": "TEAPOT"
    }
   ]
  },
  "TEA": {
   "word": "TEA",
   "roles": [
    {
     "kind": "adjective",
     "of": "TEAPOT"
    }
   ]
  },
  "OPENER": {
   "word": "OPENER",
   "roles": [
    {
     "kind": "noun",
     "of": "LETTER-OPENER"
    }
   ]
  },
  "MATCH": {
   "word": "MATCH",
   "roles": [
    {
     "kind": "noun",
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
  "HEDGE": {
   "word": "HEDGE",
   "roles": [
    {
     "kind": "noun",
     "of": "HEDGES"
    }
   ]
  },
  "HEDGES": {
   "word": "HEDGES",
   "roles": [
    {
     "kind": "noun",
     "of": "HEDGES"
    }
   ]
  },
  "DRAGON": {
   "word": "DRAGON",
   "roles": [
    {
     "kind": "noun",
     "of": "DRAGON"
    },
    {
     "kind": "noun",
     "of": "STATUETTE"
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
  "TRUNK": {
   "word": "TRUNK",
   "roles": [
    {
     "kind": "noun",
     "of": "CHEST"
    }
   ]
  },
  "STATUE": {
   "word": "STATUE",
   "roles": [
    {
     "kind": "noun",
     "of": "STATUETTE"
    }
   ]
  },
  "PRINCESS": {
   "word": "PRINCESS",
   "roles": [
    {
     "kind": "noun",
     "of": "PRINCESS"
    }
   ]
  },
  "WOMAN": {
   "word": "WOMAN",
   "roles": [
    {
     "kind": "noun",
     "of": "PRINCESS"
    }
   ]
  },
  "LADY": {
   "word": "LADY",
   "roles": [
    {
     "kind": "noun",
     "of": "PRINCESS"
    }
   ]
  },
  "YOUNG": {
   "word": "YOUNG",
   "roles": [
    {
     "kind": "adjective",
     "of": "PRINCESS"
    }
   ]
  },
  "ICE": {
   "word": "ICE",
   "roles": [
    {
     "kind": "noun",
     "of": "ICE"
    }
   ]
  },
  "MASS": {
   "word": "MASS",
   "roles": [
    {
     "kind": "noun",
     "of": "ICE"
    }
   ]
  },
  "GLACIER": {
   "word": "GLACIER",
   "roles": [
    {
     "kind": "noun",
     "of": "ICE"
    }
   ]
  },
  "ICY": {
   "word": "ICY",
   "roles": [
    {
     "kind": "adjective",
     "of": "ICE"
    }
   ]
  },
  "RUBY": {
   "word": "RUBY",
   "roles": [
    {
     "kind": "noun",
     "of": "RUBY"
    },
    {
     "kind": "adjective",
     "of": "STAND-1"
    }
   ]
  },
  "MOBY": {
   "word": "MOBY",
   "roles": [
    {
     "kind": "adjective",
     "of": "RUBY"
    }
   ]
  },
  "BALLOON": {
   "word": "BALLOON",
   "roles": [
    {
     "kind": "noun",
     "of": "BALLOON"
    }
   ]
  },
  "BASKET": {
   "word": "BASKET",
   "roles": [
    {
     "kind": "noun",
     "of": "BALLOON"
    }
   ]
  },
  "WICKER": {
   "word": "WICKER",
   "roles": [
    {
     "kind": "adjective",
     "of": "BALLOON"
    }
   ]
  },
  "LABEL": {
   "word": "LABEL",
   "roles": [
    {
     "kind": "noun",
     "of": "BALLOON-LABEL"
    }
   ]
  },
  "ROPE": {
   "word": "ROPE",
   "roles": [
    {
     "kind": "noun",
     "of": "BRAIDED-WIRE"
    }
   ]
  },
  "WIRE": {
   "word": "WIRE",
   "roles": [
    {
     "kind": "noun",
     "of": "BRAIDED-WIRE"
    }
   ]
  },
  "BRAIDED": {
   "word": "BRAIDED",
   "roles": [
    {
     "kind": "adjective",
     "of": "BRAIDED-WIRE"
    }
   ]
  },
  "BAG": {
   "word": "BAG",
   "roles": [
    {
     "kind": "noun",
     "of": "CLOTH-BAG"
    }
   ]
  },
  "CLOTH": {
   "word": "CLOTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "CLOTH-BAG"
    }
   ]
  },
  "RECEPTACLE": {
   "word": "RECEPTACLE",
   "roles": [
    {
     "kind": "noun",
     "of": "RECEPTACLE"
    }
   ]
  },
  "METAL": {
   "word": "METAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "RECEPTACLE"
    }
   ]
  },
  "COIN": {
   "word": "COIN",
   "roles": [
    {
     "kind": "noun",
     "of": "COIN"
    }
   ]
  },
  "PRICELESS": {
   "word": "PRICELESS",
   "roles": [
    {
     "kind": "adjective",
     "of": "COIN"
    }
   ]
  },
  "BOOK": {
   "word": "BOOK",
   "roles": [
    {
     "kind": "noun",
     "of": "BLUE-BOOK"
    },
    {
     "kind": "noun",
     "of": "WHITE-BOOK"
    },
    {
     "kind": "noun",
     "of": "PURPLE-BOOK"
    }
   ]
  },
  "BOOKS": {
   "word": "BOOKS",
   "roles": [
    {
     "kind": "noun",
     "of": "BLUE-BOOK"
    },
    {
     "kind": "noun",
     "of": "WHITE-BOOK"
    },
    {
     "kind": "noun",
     "of": "PURPLE-BOOK"
    }
   ]
  },
  "PURPLE": {
   "word": "PURPLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "PURPLE-BOOK"
    }
   ]
  },
  "STAMP": {
   "word": "STAMP",
   "roles": [
    {
     "kind": "noun",
     "of": "STAMP"
    }
   ]
  },
  "HOOK": {
   "word": "HOOK",
   "roles": [
    {
     "kind": "noun",
     "of": "HOOK"
    }
   ]
  },
  "SMALL": {
   "word": "SMALL",
   "roles": [
    {
     "kind": "adjective",
     "of": "HOOK"
    }
   ]
  },
  "SAFE": {
   "word": "SAFE",
   "roles": [
    {
     "kind": "noun",
     "of": "SAFE"
    }
   ]
  },
  "BOX": {
   "word": "BOX",
   "roles": [
    {
     "kind": "noun",
     "of": "SAFE"
    }
   ]
  },
  "SLOT": {
   "word": "SLOT",
   "roles": [
    {
     "kind": "noun",
     "of": "SAFE-HOLE"
    }
   ]
  },
  "CARD": {
   "word": "CARD",
   "roles": [
    {
     "kind": "noun",
     "of": "CARD"
    }
   ]
  },
  "NOTE": {
   "word": "NOTE",
   "roles": [
    {
     "kind": "noun",
     "of": "CARD"
    }
   ]
  },
  "CROWN": {
   "word": "CROWN",
   "roles": [
    {
     "kind": "noun",
     "of": "CROWN"
    }
   ]
  },
  "GAUDY": {
   "word": "GAUDY",
   "roles": [
    {
     "kind": "adjective",
     "of": "CROWN"
    }
   ]
  },
  "BRICK": {
   "word": "BRICK",
   "roles": [
    {
     "kind": "noun",
     "of": "BRICK"
    }
   ]
  },
  "SQUARE": {
   "word": "SQUARE",
   "roles": [
    {
     "kind": "adjective",
     "of": "BRICK"
    }
   ]
  },
  "CLAY": {
   "word": "CLAY",
   "roles": [
    {
     "kind": "adjective",
     "of": "BRICK"
    }
   ]
  },
  "FUSE": {
   "word": "FUSE",
   "roles": [
    {
     "kind": "noun",
     "of": "FUSE"
    }
   ]
  },
  "STRING": {
   "word": "STRING",
   "roles": [
    {
     "kind": "noun",
     "of": "FUSE"
    }
   ]
  },
  "COIL": {
   "word": "COIL",
   "roles": [
    {
     "kind": "noun",
     "of": "FUSE"
    }
   ]
  },
  "BLACK": {
   "word": "BLACK",
   "roles": [
    {
     "kind": "adjective",
     "of": "FUSE"
    },
    {
     "kind": "adjective",
     "of": "STAND-4"
    },
    {
     "kind": "adjective",
     "of": "PALANTIR-4"
    },
    {
     "kind": "adjective",
     "of": "PENTAGRAM"
    }
   ]
  },
  "THIN": {
   "word": "THIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "FUSE"
    }
   ]
  },
  "KREBF": {
   "word": "KREBF",
   "roles": [
    {
     "kind": "noun",
     "of": "EXPLOSION"
    }
   ]
  },
  "WIZARD": {
   "word": "WIZARD",
   "roles": [
    {
     "kind": "noun",
     "of": "WIZARD"
    },
    {
     "kind": "adjective",
     "of": "WORKBENCH"
    }
   ]
  },
  "MAN": {
   "word": "MAN",
   "roles": [
    {
     "kind": "noun",
     "of": "WIZARD"
    }
   ]
  },
  "LITTLE": {
   "word": "LITTLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "WIZARD"
    }
   ]
  },
  "FROBOZZ": {
   "word": "FROBOZZ",
   "roles": [
    {
     "kind": "adjective",
     "of": "WIZARD"
    }
   ]
  },
  "WAND": {
   "word": "WAND",
   "roles": [
    {
     "kind": "noun",
     "of": "WAND"
    },
    {
     "kind": "noun",
     "of": "WANDS"
    }
   ]
  },
  "BATTERED": {
   "word": "BATTERED",
   "roles": [
    {
     "kind": "adjective",
     "of": "WIZ-DOOR"
    }
   ]
  },
  "GUARDIAN": {
   "word": "GUARDIAN",
   "roles": [
    {
     "kind": "noun",
     "of": "DOOR-KEEPER"
    }
   ]
  },
  "LIZARD": {
   "word": "LIZARD",
   "roles": [
    {
     "kind": "noun",
     "of": "DOOR-KEEPER"
    }
   ]
  },
  "NASTY": {
   "word": "NASTY",
   "roles": [
    {
     "kind": "adjective",
     "of": "DOOR-KEEPER"
    }
   ]
  },
  "DEGREE": {
   "word": "DEGREE",
   "roles": [
    {
     "kind": "noun",
     "of": "DEGREE"
    }
   ]
  },
  "DIPLOMA": {
   "word": "DIPLOMA",
   "roles": [
    {
     "kind": "noun",
     "of": "DEGREE"
    }
   ]
  },
  "WANDS": {
   "word": "WANDS",
   "roles": [
    {
     "kind": "noun",
     "of": "WANDS"
    }
   ]
  },
  "RACK": {
   "word": "RACK",
   "roles": [
    {
     "kind": "noun",
     "of": "WANDS"
    }
   ]
  },
  "SET": {
   "word": "SET",
   "roles": [
    {
     "kind": "noun",
     "of": "WANDS"
    }
   ]
  },
  "WORN": {
   "word": "WORN",
   "roles": [
    {
     "kind": "adjective",
     "of": "WANDS"
    }
   ]
  },
  "USED": {
   "word": "USED",
   "roles": [
    {
     "kind": "adjective",
     "of": "WANDS"
    }
   ]
  },
  "WORKBENCH": {
   "word": "WORKBENCH",
   "roles": [
    {
     "kind": "noun",
     "of": "WORKBENCH"
    }
   ]
  },
  "BENCH": {
   "word": "BENCH",
   "roles": [
    {
     "kind": "noun",
     "of": "WORKBENCH"
    }
   ]
  },
  "WORK": {
   "word": "WORK",
   "roles": [
    {
     "kind": "adjective",
     "of": "WORKBENCH"
    }
   ]
  },
  "STANDS": {
   "word": "STANDS",
   "roles": [
    {
     "kind": "noun",
     "of": "STAND-1"
    },
    {
     "kind": "noun",
     "of": "STAND-2"
    },
    {
     "kind": "noun",
     "of": "STAND-3"
    },
    {
     "kind": "noun",
     "of": "STAND-4"
    }
   ]
  },
  "CRYSTAL": {
   "word": "CRYSTAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "STAND-1"
    },
    {
     "kind": "adjective",
     "of": "STAND-2"
    },
    {
     "kind": "adjective",
     "of": "STAND-3"
    },
    {
     "kind": "adjective",
     "of": "STAND-4"
    },
    {
     "kind": "adjective",
     "of": "PALANTIR-4"
    },
    {
     "kind": "adjective",
     "of": "PALANTIR-1"
    },
    {
     "kind": "adjective",
     "of": "PALANTIR-2"
    },
    {
     "kind": "adjective",
     "of": "PALANTIR-3"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-PALANTIR"
    }
   ]
  },
  "SAPPHIRE": {
   "word": "SAPPHIRE",
   "roles": [
    {
     "kind": "adjective",
     "of": "STAND-2"
    }
   ]
  },
  "DIAMOND": {
   "word": "DIAMOND",
   "roles": [
    {
     "kind": "adjective",
     "of": "STAND-3"
    }
   ]
  },
  "OBSIDIAN": {
   "word": "OBSIDIAN",
   "roles": [
    {
     "kind": "adjective",
     "of": "STAND-4"
    }
   ]
  },
  "STRANGE": {
   "word": "STRANGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "STAND-4"
    },
    {
     "kind": "adjective",
     "of": "PALANTIR-4"
    }
   ]
  },
  "SPHERE": {
   "word": "SPHERE",
   "roles": [
    {
     "kind": "noun",
     "of": "PALANTIR-4"
    },
    {
     "kind": "noun",
     "of": "PALANTIR-1"
    },
    {
     "kind": "noun",
     "of": "PALANTIR-2"
    },
    {
     "kind": "noun",
     "of": "PALANTIR-3"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-PALANTIR"
    }
   ]
  },
  "PENTAGRAM": {
   "word": "PENTAGRAM",
   "roles": [
    {
     "kind": "noun",
     "of": "PENTAGRAM"
    }
   ]
  },
  "STAR": {
   "word": "STAR",
   "roles": [
    {
     "kind": "noun",
     "of": "PENTAGRAM"
    }
   ]
  },
  "CIRCLE": {
   "word": "CIRCLE",
   "roles": [
    {
     "kind": "noun",
     "of": "PENTAGRAM"
    }
   ]
  },
  "DEVIL": {
   "word": "DEVIL",
   "roles": [
    {
     "kind": "noun",
     "of": "DEMON"
    }
   ]
  },
  "DEMON": {
   "word": "DEMON",
   "roles": [
    {
     "kind": "noun",
     "of": "DEMON"
    }
   ]
  },
  "GENIE": {
   "word": "GENIE",
   "roles": [
    {
     "kind": "noun",
     "of": "DEMON"
    }
   ]
  },
  "AQUARIUM": {
   "word": "AQUARIUM",
   "roles": [
    {
     "kind": "noun",
     "of": "AQUARIUM"
    }
   ]
  },
  "GLASS": {
   "word": "GLASS",
   "roles": [
    {
     "kind": "noun",
     "of": "AQUARIUM"
    }
   ]
  },
  "SERPENT": {
   "word": "SERPENT",
   "roles": [
    {
     "kind": "noun",
     "of": "SERPENT"
    },
    {
     "kind": "noun",
     "of": "DEAD-SERPENT"
    }
   ]
  },
  "SNAKE": {
   "word": "SNAKE",
   "roles": [
    {
     "kind": "noun",
     "of": "SERPENT"
    },
    {
     "kind": "noun",
     "of": "DEAD-SERPENT"
    }
   ]
  },
  "BABY": {
   "word": "BABY",
   "roles": [
    {
     "kind": "adjective",
     "of": "SERPENT"
    },
    {
     "kind": "adjective",
     "of": "DEAD-SERPENT"
    }
   ]
  },
  "SEA": {
   "word": "SEA",
   "roles": [
    {
     "kind": "adjective",
     "of": "SERPENT"
    },
    {
     "kind": "adjective",
     "of": "DEAD-SERPENT"
    }
   ]
  },
  "DEAD": {
   "word": "DEAD",
   "roles": [
    {
     "kind": "adjective",
     "of": "DEAD-SERPENT"
    }
   ]
  },
  "CLEAR": {
   "word": "CLEAR",
   "roles": [
    {
     "kind": "adjective",
     "of": "PALANTIR-3"
    }
   ]
  }
 },
 "files": [
  "alice.zil",
  "dungeon.zil",
  "globals.zil",
  "mini2.zil",
  "misc.zil",
  "parser.zil",
  "princess.zil",
  "syntax.zil",
  "verbs.zil",
  "volcano.zil",
  "wizard.zil"
 ]
};
