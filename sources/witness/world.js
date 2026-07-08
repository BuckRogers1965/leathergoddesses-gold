window.WORLD = {
 "game": "Leather Goddesses of Phobos (X1)",
 "directions": [
  "NORTH",
  "SOUTH",
  "EAST",
  "WEST",
  "NE",
  "NW",
  "SE",
  "SW",
  "UP",
  "DOWN",
  "IN",
  "OUT"
 ],
 "rooms": {
  "FRONT-YARD": {
   "name": "FRONT-YARD",
   "file": "places.zil",
   "line": 355,
   "endLine": 376,
   "desc": "front yard",
   "ldesc": "You are in the front yard of the Linder property. Most of the space is\noccupied by a kitchen garden full of vegetables and herbs. A wooden\nfence surrounds the yard on the west and north sides. To the east is the\nhouse, with a French door and two windows. To the south is a gate that\nleads to the front porch.",
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
    "HOUSE",
    "DINING-DOOR",
    "KITCHEN-WINDOW",
    "BUTLER-WINDOW",
    "FRONT-GATE",
    "FRONT-DOOR",
    "FENCE"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "4"
    ],
    "STATION": [
     "FRONT-YARD"
    ]
   },
   "exits": [
    {
     "to": "DINING-ROOM",
     "kind": "conditional",
     "condition": "DINING-DOOR IS OPEN",
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
     "message": "A wooden fence blocks your way.",
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "A wooden fence blocks your way.",
     "dir": "NORTH"
    },
    {
     "to": "FRONT-PORCH",
     "kind": "conditional",
     "condition": "FRONT-GATE IS OPEN",
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
     "message": "You can't go that way.",
     "dir": "UP"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You can't go that way.",
     "dir": "DOWN"
    }
   ],
   "contents": [
    "KITCHEN-GARDEN"
   ],
   "source": "<ROOM FRONT-YARD\n\t(IN ROOMS)\n\t(DESC \"front yard\")\n\t(FLAGS RLANDBIT ONBIT)\n\t(LDESC\n\"You are in the front yard of the Linder property. Most of the space is\noccupied by a kitchen garden full of vegetables and herbs. A wooden\nfence surrounds the yard on the west and north sides. To the east is the\nhouse, with a French door and two windows. To the south is a gate that\nleads to the front porch.\")\n\t;(ADJECTIVE FRONT)\n\t;(SYNONYM YARD)\n\t(EAST TO DINING-ROOM IF DINING-DOOR IS OPEN)\n\t(WEST \"A wooden fence blocks your way.\")\n\t(NORTH \"A wooden fence blocks your way.\")\n\t(SOUTH TO FRONT-PORCH IF FRONT-GATE IS OPEN)\n\t(UP \"You can't go that way.\")\n\t(DOWN \"You can't go that way.\")\t;\"just to establish properties\"\n\t(GLOBAL HOUSE DINING-DOOR KITCHEN-WINDOW BUTLER-WINDOW\n\t\tFRONT-GATE FRONT-DOOR FENCE)\n\t(LINE 4)\n\t(STATION FRONT-YARD)>",
   "referencedBy": [
    "WINDOW-IN?",
    "LOCKED-F",
    "WINDOW-ROOM",
    "GROUND-SURFACE",
    "CAN-HEAR-RADIO?",
    "FRONT-DOOR-F",
    "AIR-F",
    "HOUSE-F"
   ]
  },
  "FRONT-PORCH": {
   "name": "FRONT-PORCH",
   "file": "places.zil",
   "line": 393,
   "endLine": 408,
   "desc": "front porch",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "ON-NOT-IN"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "FRONT-PORCH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HOUSE",
    "FRONT-DOOR",
    "FRONT-GATE",
    "FENCE",
    "DRIVEWAY-OBJECT"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "4"
    ],
    "STATION": [
     "FRONT-PORCH"
    ],
    "CORRIDOR": [
     "4"
    ]
   },
   "exits": [
    {
     "to": "ENTRY",
     "kind": "conditional",
     "condition": "FRONT-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "ENTRY",
     "kind": "conditional",
     "condition": "FRONT-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "DRIVEWAY",
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
     "message": "A wooden fence blocks your way.",
     "dir": "WEST"
    },
    {
     "to": "FRONT-YARD",
     "kind": "conditional",
     "condition": "FRONT-GATE IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "DOORBELL"
   ],
   "source": "<ROOM FRONT-PORCH\n\t(IN ROOMS)\n\t(DESC \"front porch\")\n\t(ACTION FRONT-PORCH-F)\n\t;(ADJECTIVE FRONT)\n\t;(SYNONYM PORCH ;STOOP)\n\t(FLAGS RLANDBIT ONBIT ON-NOT-IN)\n\t(IN   TO ENTRY IF FRONT-DOOR IS OPEN)\n\t(EAST TO ENTRY IF FRONT-DOOR IS OPEN)\n\t(SOUTH TO DRIVEWAY)\n\t(WEST \"A wooden fence blocks your way.\")\n\t(NORTH TO FRONT-YARD IF FRONT-GATE IS OPEN)\n\t(GLOBAL HOUSE FRONT-DOOR FRONT-GATE FENCE DRIVEWAY-OBJECT)\n\t(LINE 4)\n\t(STATION FRONT-PORCH)\n\t(CORRIDOR 4)>",
   "referencedBy": [
    "I-DUFFY-ARRIVE",
    "WELCOME",
    "I-PHONG-EJECTS",
    "ESTABLISH-GOAL",
    "TRANSFER",
    "I-PHONG",
    "I-STILES",
    "GROUND-SURFACE",
    "CAN-HEAR-RADIO?",
    "FRONT-DOOR-F",
    "AIR-F",
    "HOUSE-F",
    "BUTTON-F"
   ]
  },
  "DRIVEWAY": {
   "name": "DRIVEWAY",
   "file": "places.zil",
   "line": 440,
   "endLine": 457,
   "desc": "driveway",
   "ldesc": "The driveway, paved with peastone, runs from the entrance at the south\nend in a curve to a two-car garage at the east end. North of you is the\nfront porch, the entrance to the house.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "ON-NOT-IN"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HOUSE",
    "FRONT-DOOR",
    "FENCE",
    "DRIVEWAY-OBJECT"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "4"
    ],
    "STATION": [
     "DRIVEWAY"
    ],
    "CORRIDOR": [
     "12"
    ]
   },
   "exits": [
    {
     "to": "FRONT-PORCH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "DRIVEWAY-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "GARAGE",
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
     "message": "A wooden fence blocks your way.",
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM DRIVEWAY\n\t(IN ROOMS)\n\t(DESC \"driveway\")\n\t(LDESC\n\"The driveway, paved with peastone, runs from the entrance at the south\nend in a curve to a two-car garage at the east end. North of you is the\nfront porch, the entrance to the house.\")\n\t;(ADJECTIVE DRIVE)\n\t;(SYNONYM DRIVEWAY WAY)\n\t(FLAGS RLANDBIT ONBIT ON-NOT-IN)\n\t(NORTH TO FRONT-PORCH)\n\t(SOUTH TO DRIVEWAY-ENTRANCE)\n\t(EAST TO GARAGE)\n\t(WEST \"A wooden fence blocks your way.\")\n\t(GLOBAL HOUSE FRONT-DOOR FENCE DRIVEWAY-OBJECT)\n\t(LINE 4)\n\t(STATION DRIVEWAY)\n\t(CORRIDOR 12)>",
   "referencedBy": [
    "I-MONICA",
    "I-MONICA-RETURN",
    "GROUND-SURFACE",
    "FRONT-DOOR-F",
    "HOUSE-F",
    "ROOM-CHECK"
   ]
  },
  "DRIVEWAY-ENTRANCE": {
   "name": "DRIVEWAY-ENTRANCE",
   "file": "places.zil",
   "line": 477,
   "endLine": 501,
   "desc": "driveway entrance",
   "ldesc": "This is the entrance to the driveway from the street, which lies to the\nsouth. To the north is the driveway, and to the east is the side yard.",
   "fdesc": "You are standing at the foot of the driveway, the entrance to the\nLinder property. The entire lot is screened from the street and the\nneighbors by a wooden fence, except on the east\nside, which fronts on dense bamboo woods. The house looks like a mixture of\na California bungalow and East Asian influences. From here you can\nsee the driveway leading north and, beyond that, the front door.",
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
    "HOUSE",
    "WOODS",
    "FRONT-DOOR",
    "FENCE",
    "DRIVEWAY-OBJECT",
    "SIDE-FOOTPRINTS"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "4"
    ],
    "STATION": [
     "DRIVEWAY-ENTRANCE"
    ],
    "CORRIDOR": [
     "6"
    ]
   },
   "exits": [
    {
     "to": "DRIVEWAY",
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
     "message": "A wooden fence blocks your way.",
     "dir": "WEST"
    },
    {
     "to": "SIDE-YARD",
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
     "message": "You can't leave the property yet. It would mean your job.",
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM DRIVEWAY-ENTRANCE\n\t(IN ROOMS)\n\t(DESC \"driveway entrance\")\n\t(FDESC\n\"You are standing at the foot of the driveway, the entrance to the\nLinder property. The entire lot is screened from the street and the\nneighbors by a wooden fence, except on the east\nside, which fronts on dense bamboo woods. The house looks like a mixture of\na California bungalow and East Asian influences. From here you can\nsee the driveway leading north and, beyond that, the front door.\")\n\t(LDESC\n\"This is the entrance to the driveway from the street, which lies to the\nsouth. To the north is the driveway, and to the east is the side yard.\")\n\t;(ADJECTIVE DRIVEWAY ;DRIVE ;CAR ;AUTO ;STREET)\n\t;(SYNONYM ENTRANCE ;GATE)\n\t(FLAGS RLANDBIT ONBIT)\n\t(NORTH TO DRIVEWAY)\n\t(WEST \"A wooden fence blocks your way.\")\n\t(EAST TO SIDE-YARD)\n\t(SOUTH\n\"You can't leave the property yet. It would mean your job.\")\n\t(GLOBAL HOUSE WOODS FRONT-DOOR FENCE DRIVEWAY-OBJECT SIDE-FOOTPRINTS)\n\t(LINE 4)\n\t(STATION DRIVEWAY-ENTRANCE)\n\t(CORRIDOR 6)>",
   "referencedBy": [
    "I-MONICA",
    "I-MONICA-RETURN",
    "GO",
    "GROUND-SURFACE",
    "DRIVEWAY-F",
    "SIDE-FOOTPRINTS-F",
    "FRONT-DOOR-F",
    "HOUSE-F"
   ]
  },
  "LIMBO": {
   "name": "LIMBO",
   "file": "places.zil",
   "line": 503,
   "endLine": 510,
   "desc": "limbo",
   "ldesc": null,
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
   "contfcn": "NULL-F",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "4"
    ],
    "STATION": [
     "DRIVEWAY-ENTRANCE"
    ]
   },
   "exits": [
    {
     "to": "DRIVEWAY-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "SIDE-FOOTPRINTS-CAST",
    "BACK-FOOTPRINTS-CAST"
   ],
   "source": "<ROOM LIMBO\n\t(IN ROOMS)\n\t(DESC \"limbo\")\n\t(FLAGS RLANDBIT ONBIT)\n\t(CONTFCN NULL-F)\n\t(NORTH TO DRIVEWAY-ENTRANCE)\n\t(LINE 4)\n\t(STATION DRIVEWAY-ENTRANCE)>",
   "referencedBy": [
    "MOVE-PERSON",
    "I-STILES",
    "I-MONICA",
    "ARREST",
    "SIDE-FOOTPRINTS-F",
    "BACK-FOOTPRINTS-F",
    "THE?",
    "V-FOLLOW"
   ]
  },
  "SIDE-YARD": {
   "name": "SIDE-YARD",
   "file": "places.zil",
   "line": 512,
   "endLine": 526,
   "desc": "side yard",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "SIDE-YARD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HOUSE",
    "FENCE",
    "DRIVEWAY-OBJECT",
    "SIDE-FOOTPRINTS"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "4"
    ],
    "STATION": [
     "SIDE-YARD"
    ],
    "CORRIDOR": [
     "2"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You can't enter the house from here.",
     "dir": "NORTH"
    },
    {
     "to": "DRIVEWAY-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "OFFICE-PATH",
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
     "message": "A wooden fence blocks your way.",
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM SIDE-YARD\n\t(IN ROOMS)\n\t(ACTION SIDE-YARD-F)\n\t(DESC \"side yard\")\n\t;(ADJECTIVE SIDE ;LITTLE)\n\t;(SYNONYM YARD)\n\t(FLAGS RLANDBIT ONBIT)\n\t(NORTH \"You can't enter the house from here.\")\n\t(WEST TO DRIVEWAY-ENTRANCE)\n\t(EAST TO OFFICE-PATH)\n\t(SOUTH \"A wooden fence blocks your way.\")\n\t(GLOBAL HOUSE FENCE DRIVEWAY-OBJECT SIDE-FOOTPRINTS)\n\t(LINE 4)\n\t(STATION SIDE-YARD)\n\t(CORRIDOR 2)>",
   "referencedBy": [
    "DRIVEWAY-F",
    "SIDE-YARD-F",
    "SIDE-FOOTPRINTS-F",
    "GENERIC-FOOTPRINTS-F"
   ]
  },
  "OFFICE-PATH": {
   "name": "OFFICE-PATH",
   "file": "places.zil",
   "line": 622,
   "endLine": 640,
   "desc": "office path",
   "ldesc": "You are on a path made of stepping stones, which leads from the back\ngate at the south to Linder's office at the north. In the east you\ncan see a thick woods. To the west is the side yard.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "ON-NOT-IN",
    "AN"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HOUSE",
    "WOODS",
    "SIDE-FOOTPRINTS"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "4"
    ],
    "STATION": [
     "OFFICE-PATH"
    ],
    "CORRIDOR": [
     "3"
    ]
   },
   "exits": [
    {
     "to": "OFFICE-PORCH",
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
     "message": "You would probably get lost in the woods.",
     "dir": "EAST"
    },
    {
     "to": "SIDE-YARD",
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
     "message": "You can't leave the property yet. It would mean your job.",
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "BACK-GATE"
   ],
   "source": "<ROOM OFFICE-PATH\n\t(IN ROOMS)\n\t(DESC \"office path\")\n\t(LDESC\n\"You are on a path made of stepping stones, which leads from the back\ngate at the south to Linder's office at the north. In the east you\ncan see a thick woods. To the west is the side yard.\")\n\t;(ADJECTIVE OFFICE STONE)\n\t;(SYNONYM PATH)\n\t(FLAGS RLANDBIT ONBIT ON-NOT-IN AN)\n\t(NORTH TO OFFICE-PORCH)\n\t(EAST \"You would probably get lost in the woods.\")\n\t(WEST TO SIDE-YARD)\n\t(SOUTH\n\"You can't leave the property yet. It would mean your job.\")\n\t(GLOBAL HOUSE WOODS ;DRIVEWAY-OBJECT SIDE-FOOTPRINTS)\n\t(LINE 4)\n\t(STATION OFFICE-PATH)\n\t(CORRIDOR 3)>",
   "referencedBy": [
    "I-STILES-ARRIVE",
    "I-LINDER-TO-OFFICE",
    "I-PHONG",
    "I-STILES",
    "I-AMBULANCE",
    "STILES-F",
    "DRIVEWAY-F",
    "SIDE-FOOTPRINTS-F"
   ]
  },
  "OFFICE-PORCH": {
   "name": "OFFICE-PORCH",
   "file": "places.zil",
   "line": 659,
   "endLine": 675,
   "desc": "office porch",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "ON-NOT-IN",
    "AN"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "OFFICE-PORCH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HOUSE",
    "OFFICE-BACK-DOOR",
    "OFFICE-WINDOW",
    "LAWN",
    "WOODS",
    "BROKEN-GLASS",
    "BACK-FOOTPRINTS"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "4"
    ],
    "STATION": [
     "OFFICE-PORCH"
    ],
    "CORRIDOR": [
     "1"
    ]
   },
   "exits": [
    {
     "to": "BACK-YARD",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "OFFICE-PATH",
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
     "message": "You would probably get lost in the woods.",
     "dir": "EAST"
    },
    {
     "to": "OFFICE",
     "kind": "conditional",
     "condition": "OFFICE-BACK-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "OFFICE",
     "kind": "conditional",
     "condition": "OFFICE-BACK-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [],
   "source": "<ROOM OFFICE-PORCH\n\t(IN ROOMS)\n\t(DESC \"office porch\")\n\t(ACTION OFFICE-PORCH-F)\n\t;(ADJECTIVE OFFICE BACK)\n\t;(SYNONYM PORCH)\n\t(FLAGS RLANDBIT ONBIT ON-NOT-IN AN)\n\t(NORTH TO BACK-YARD)\n\t(SOUTH TO OFFICE-PATH)\n\t(EAST \"You would probably get lost in the woods.\")\n\t(WEST TO OFFICE IF OFFICE-BACK-DOOR IS OPEN)\n\t(IN TO OFFICE IF OFFICE-BACK-DOOR IS OPEN)\n\t(GLOBAL HOUSE OFFICE-BACK-DOOR OFFICE-WINDOW LAWN WOODS\n\t\t;PIECE-OF-WIRE ;PIECE-OF-PUTTY BROKEN-GLASS BACK-FOOTPRINTS)\n\t(LINE 4)\n\t(STATION OFFICE-PORCH)\n\t(CORRIDOR 1)>",
   "referencedBy": [
    "I-STILES-ARRIVE",
    "I-LINDER-TO-OFFICE",
    "FIRE-SHOT",
    "I-LINDER-RETIRES",
    "I-STILES",
    "I-MONICA",
    "I-AMBULANCE",
    "STILES-F",
    "WINDOW-IN?",
    "GENERIC-BACK-DOOR-F",
    "WINDOW-ROOM",
    "GROUND-SURFACE",
    "GENERIC-FOOTPRINTS-F",
    "HOUSE-F"
   ]
  },
  "BACK-YARD": {
   "name": "BACK-YARD",
   "file": "places.zil",
   "line": 857,
   "endLine": 875,
   "desc": "back yard",
   "ldesc": "You are on a neatly manicured lawn, east of Monica's bedroom. The lawn\nextends east to the edge of the woods. From here you can go to a rock\ngarden in the north or the entrance to Linder's office in the south.\nThere's a door into the house, and a window.",
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
    "HOUSE",
    "MONICA-BACK-DOOR",
    "WINDOW",
    "LAWN",
    "WOODS"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "4"
    ],
    "STATION": [
     "BACK-YARD"
    ],
    "CORRIDOR": [
     "1"
    ]
   },
   "exits": [
    {
     "to": "ROCK-GARDEN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "OFFICE-PORCH",
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
     "message": "You would probably get lost in the woods.",
     "dir": "EAST"
    },
    {
     "to": "MONICA-ROOM",
     "kind": "conditional",
     "condition": "MONICA-BACK-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM BACK-YARD\n\t(IN ROOMS)\n\t(DESC \"back yard\")\n\t;(ADJECTIVE BACK)\n\t;(SYNONYM YARD)\n\t(LDESC\n\"You are on a neatly manicured lawn, east of Monica's bedroom. The lawn\nextends east to the edge of the woods. From here you can go to a rock\ngarden in the north or the entrance to Linder's office in the south.\nThere's a door into the house, and a window.\")\n\t(FLAGS RLANDBIT ONBIT)\n\t(NORTH TO ROCK-GARDEN)\n\t(SOUTH TO OFFICE-PORCH)\n\t(EAST \"You would probably get lost in the woods.\")\n\t(WEST TO MONICA-ROOM IF MONICA-BACK-DOOR IS OPEN)\n\t(GLOBAL HOUSE MONICA-BACK-DOOR WINDOW LAWN WOODS)\n\t(LINE 4)\n\t(STATION BACK-YARD)\n\t(CORRIDOR 1)>",
   "referencedBy": [
    "I-LINDER-TO-OFFICE",
    "I-LINDER-RETIRES",
    "I-STILES",
    "I-MONICA",
    "WINDOW-IN?",
    "GENERIC-BACK-DOOR-F",
    "WINDOW-ROOM",
    "GROUND-SURFACE",
    "CAN-HEAR-RECORD?",
    "HOUSE-F"
   ]
  },
  "ROCK-GARDEN": {
   "name": "ROCK-GARDEN",
   "file": "places.zil",
   "line": 897,
   "endLine": 918,
   "desc": "rock garden",
   "ldesc": "This is a rock garden in the Japanese style, east of Linder's bedroom.\nA few smooth round boulders lie partly buried in a bed of gravel,\nwhich is carefully raked to be reminiscent of flowing water.\nA sequence of smaller rocks forms a zig-zag path from the bedroom door to\nthe south edge of the garden, where the lawn begins.\nThere's a door into the house, and a couple of windows.",
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
    "HOUSE",
    "LINDER-BACK-DOOR",
    "LINDER-WINDOW",
    "BATH-WINDOW",
    "LAWN",
    "WOODS",
    "FENCE"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "4"
    ],
    "STATION": [
     "ROCK-GARDEN"
    ],
    "CORRIDOR": [
     "1"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "A wooden fence blocks your way.",
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You would probably get lost in the woods.",
     "dir": "EAST"
    },
    {
     "to": "BACK-YARD",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "LINDER-ROOM",
     "kind": "conditional",
     "condition": "LINDER-BACK-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "ROCKS"
   ],
   "source": "<ROOM ROCK-GARDEN\n\t(IN ROOMS)\n\t(DESC \"rock garden\")\n\t;(ADJECTIVE ROCK JAPANESE BACK)\n\t;(SYNONYM GARDEN)\n\t(LDESC\n\"This is a rock garden in the Japanese style, east of Linder's bedroom.\nA few smooth round boulders lie partly buried in a bed of gravel,\nwhich is carefully raked to be reminiscent of flowing water.\nA sequence of smaller rocks forms a zig-zag path from the bedroom door to\nthe south edge of the garden, where the lawn begins.\nThere's a door into the house, and a couple of windows.\")\n\t(FLAGS RLANDBIT ONBIT)\n\t(NORTH \"A wooden fence blocks your way.\")\n\t(EAST \"You would probably get lost in the woods.\")\n\t(SOUTH TO BACK-YARD)\n\t(WEST TO LINDER-ROOM IF LINDER-BACK-DOOR IS OPEN)\n\t(GLOBAL HOUSE LINDER-BACK-DOOR LINDER-WINDOW BATH-WINDOW\n\t\tLAWN WOODS FENCE)\n\t(LINE 4)\n\t(STATION ROCK-GARDEN)\n\t(CORRIDOR 1)>",
   "referencedBy": [
    "I-LINDER-RETIRES",
    "I-STILES",
    "I-MONICA",
    "WINDOW-IN?",
    "GENERIC-BACK-DOOR-F",
    "WINDOW-ROOM",
    "GROUND-SURFACE",
    "HOUSE-F"
   ]
  },
  "MONICA-ROOM": {
   "name": "MONICA-ROOM",
   "file": "places.zil",
   "line": 948,
   "endLine": 964,
   "desc": "Monica's bedroom",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MONICA-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MONICA-DOOR",
    "MONICA-BACK-DOOR",
    "MONICA-BATH-DOOR",
    "WINDOW",
    "BED",
    "MIRROR",
    "TELEPHONE",
    "CLOSET"
   ],
   "pseudo": [
    "CHAIR",
    "RANDOM-PSEUDO"
   ],
   "otherProps": {
    "GENERIC": [
     "GENERIC-BEDROOM-F"
    ],
    "LINE": [
     "3"
    ],
    "STATION": [
     "MONICA-ROOM"
    ]
   },
   "exits": [
    {
     "to": "BACK-YARD",
     "kind": "conditional",
     "condition": "MONICA-BACK-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BACK-YARD",
     "kind": "conditional",
     "condition": "MONICA-BACK-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "HALL-2",
     "kind": "conditional",
     "condition": "MONICA-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "BATHROOM",
     "kind": "conditional",
     "condition": "MONICA-BATH-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "MONICA-TABLE",
    "MOVIE-POSTERS",
    "BOOK-CASE",
    "RECORDS",
    "MEDICAL-REPORT"
   ],
   "source": "<ROOM MONICA-ROOM\n\t(IN ROOMS)\n\t(DESC \"Monica's bedroom\")\n\t;(ADJECTIVE MONICA BED HER)\n\t;(SYNONYM BEDROOM ROOM)\n\t(GENERIC GENERIC-BEDROOM-F)\n\t(ACTION MONICA-ROOM-F)\n\t(FLAGS RLANDBIT ONBIT)\n\t(EAST TO BACK-YARD IF MONICA-BACK-DOOR IS OPEN)\n\t(OUT  TO BACK-YARD IF MONICA-BACK-DOOR IS OPEN)\n\t(WEST TO HALL-2 IF MONICA-DOOR IS OPEN)\n\t(NORTH TO BATHROOM IF MONICA-BATH-DOOR IS OPEN)\n\t(GLOBAL MONICA-DOOR MONICA-BACK-DOOR MONICA-BATH-DOOR WINDOW\n\t\tBED MIRROR TELEPHONE CLOSET)\n\t(PSEUDO \"CHAIR\" RANDOM-PSEUDO)\n\t(LINE 3)\n\t(STATION MONICA-ROOM)>",
   "referencedBy": [
    "ESTABLISH-GOAL",
    "TRANSFER",
    "I-MONICA",
    "MONICA-F",
    "WINDOW-IN?",
    "GENERIC-BATH-DOOR-F",
    "GENERIC-BEDROOM-DOOR-F",
    "GENERIC-BACK-DOOR-F",
    "PHONE-IN?",
    "WINDOW-ROOM",
    "MONICA-TABLE-F",
    "I-TUNE-OFF",
    "GENERIC-CHAIR-F",
    "THE?",
    "HOUSE-F",
    "BED-F",
    "CLOSET-F"
   ]
  },
  "BATHROOM": {
   "name": "BATHROOM",
   "file": "places.zil",
   "line": 1102,
   "endLine": 1126,
   "desc": "bathroom",
   "ldesc": "This room has only a large cabinet with counter, sink and mirror.\nOn the counter are a shaver, toothpaste, and so on.\nThe tub and toilet must be in separate rooms.\nThere are doors on all four walls: the one to the north looks like redwood,\nthe one to the south like cedar, and the other two like ordinary doors.",
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
    "MONICA-BATH-DOOR",
    "LINDER-BATH-DOOR",
    "TOILET-DOOR",
    "TUB-DOOR",
    "CABINET",
    "MIRROR",
    "SINK"
   ],
   "pseudo": [
    "SHAVER",
    "RANDOM-PSEUDO",
    "TOOTHPASTE",
    "RANDOM-PSEUDO"
   ],
   "otherProps": {
    "GENERIC": [
     "GENERIC-BATHROOM-F"
    ],
    "LINE": [
     "3"
    ],
    "STATION": [
     "BATHROOM"
    ]
   },
   "exits": [
    {
     "to": "TOILET-ROOM",
     "kind": "conditional",
     "condition": "TOILET-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "TUB-ROOM",
     "kind": "conditional",
     "condition": "TUB-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MONICA-ROOM",
     "kind": "conditional",
     "condition": "MONICA-BATH-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "LINDER-ROOM",
     "kind": "conditional",
     "condition": "LINDER-BATH-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "MASTER-BATH-COUNTER"
   ],
   "source": "<ROOM BATHROOM\n\t(IN ROOMS)\n\t(DESC \"bathroom\")\n\t;(ADJECTIVE BATH MASTER)\n\t;(SYNONYM ROOM BATHROOM)\n\t(GENERIC GENERIC-BATHROOM-F)\n\t(LDESC\n\"This room has only a large cabinet with counter, sink and mirror.\nOn the counter are a shaver, toothpaste, and so on.\nThe tub and toilet must be in separate rooms.\nThere are doors on all four walls: the one to the north looks like redwood,\nthe one to the south like cedar, and the other two like ordinary doors.\")\n\t;(DESCFCN BATHROOM-F)\n\t(FLAGS RLANDBIT ONBIT)\n\t;(ACTION BATHROOM-F)\n\t(WEST TO TOILET-ROOM IF TOILET-DOOR IS OPEN)\n\t(EAST TO TUB-ROOM IF TUB-DOOR IS OPEN)\n\t(SOUTH TO MONICA-ROOM IF MONICA-BATH-DOOR IS OPEN)\n\t(NORTH TO LINDER-ROOM IF LINDER-BATH-DOOR IS OPEN)\n\t;(OUT PER RETRACE-F)\n\t(GLOBAL MONICA-BATH-DOOR LINDER-BATH-DOOR TOILET-DOOR TUB-DOOR\n\t\tCABINET MIRROR SINK)\n\t(PSEUDO \"SHAVER\" RANDOM-PSEUDO \"TOOTHPASTE\" RANDOM-PSEUDO)\n\t(LINE 3)\n\t(STATION BATHROOM)>",
   "referencedBy": [
    "I-MONICA",
    "WINDOW-IN?",
    "CAN-HEAR-RECORD?"
   ]
  },
  "TUB-ROOM": {
   "name": "TUB-ROOM",
   "file": "places.zil",
   "line": 1156,
   "endLine": 1173,
   "desc": "tub room",
   "ldesc": "This is a separate room, completely lined with tile, for bathing in the\nJapanese style. On one side is a shower head and drain, where you could\nwash away surface dirt. On the other side is a deep tub, to be filled\nwith steaming water up to your neck. Potted plants give the room a\ntropical air. A window looks over the rock garden outside, and a door\nleads west.",
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
    "TUB-DOOR",
    "BATH-WINDOW",
    "BATHTUB",
    "SINK"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "3"
    ],
    "STATION": [
     "BATHROOM"
    ]
   },
   "exits": [
    {
     "to": "BATHROOM",
     "kind": "conditional",
     "condition": "TUB-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "BATHROOM",
     "kind": "conditional",
     "condition": "TUB-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "POTTED-PLANTS",
    "SHOWER"
   ],
   "source": "<ROOM TUB-ROOM\n\t(IN ROOMS)\n\t(DESC \"tub room\")\n\t;(ADJECTIVE TUB)\n\t;(SYNONYM ROOM)\n\t(LDESC\n\"This is a separate room, completely lined with tile, for bathing in the\nJapanese style. On one side is a shower head and drain, where you could\nwash away surface dirt. On the other side is a deep tub, to be filled\nwith steaming water up to your neck. Potted plants give the room a\ntropical air. A window looks over the rock garden outside, and a door\nleads west.\")\n\t(FLAGS RLANDBIT ONBIT)\n\t(WEST TO BATHROOM IF TUB-DOOR IS OPEN)\n\t(OUT  TO BATHROOM IF TUB-DOOR IS OPEN)\n\t(GLOBAL TUB-DOOR BATH-WINDOW ;SHOWER BATHTUB SINK)\n\t(LINE 3)\n\t(STATION BATHROOM)>",
   "referencedBy": [
    "I-MONICA",
    "GLOBAL-DUFFY-F",
    "WINDOW-IN?",
    "WINDOW-ROOM"
   ]
  },
  "TOILET-ROOM": {
   "name": "TOILET-ROOM",
   "file": "places.zil",
   "line": 1223,
   "endLine": 1236,
   "desc": "toilet room",
   "ldesc": "This is a separate room for a toilet only.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "ROOM"
   ],
   "adjectives": [
    "TOILET"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TOILET-DOOR",
    "TOILET"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "3"
    ],
    "STATION": [
     "BATHROOM"
    ]
   },
   "exits": [
    {
     "to": "BATHROOM",
     "kind": "conditional",
     "condition": "TOILET-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BATHROOM",
     "kind": "conditional",
     "condition": "TOILET-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM TOILET-ROOM\n\t(IN ROOMS)\n\t(DESC \"toilet room\")\n\t(ADJECTIVE TOILET)\n\t(SYNONYM ROOM)\n\t(FLAGS RLANDBIT ONBIT)\n\t(LDESC\n\"This is a separate room for a toilet only.\"\n;\" and appropriate reading matter.\")\n\t(EAST TO BATHROOM IF TOILET-DOOR IS OPEN)\n\t(OUT  TO BATHROOM IF TOILET-DOOR IS OPEN)\n\t(GLOBAL TOILET-DOOR TOILET)\n\t(LINE 3)\n\t(STATION BATHROOM)>",
   "referencedBy": [
    "I-MONICA",
    "MONICA-F",
    "WINDOW-IN?"
   ]
  },
  "LINDER-ROOM": {
   "name": "LINDER-ROOM",
   "file": "places.zil",
   "line": 1247,
   "endLine": 1263,
   "desc": "Linder's bedroom",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "BEDROOM",
    "ROOM"
   ],
   "adjectives": [
    "MASTER",
    "LINDER",
    "BED",
    "HIS"
   ],
   "action": "LINDER-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LINDER-DOOR",
    "LINDER-BACK-DOOR",
    "LINDER-BATH-DOOR",
    "CLOSET",
    "MIRROR",
    "LINDER-WINDOW",
    "BED",
    "CHAIR"
   ],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-BEDROOM-F"
    ],
    "LINE": [
     "1"
    ],
    "STATION": [
     "LINDER-ROOM"
    ]
   },
   "exits": [
    {
     "to": "LIVING-ROOM",
     "kind": "conditional",
     "condition": "LINDER-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "ROCK-GARDEN",
     "kind": "conditional",
     "condition": "LINDER-BACK-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "ROCK-GARDEN",
     "kind": "conditional",
     "condition": "LINDER-BACK-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "BATHROOM",
     "kind": "conditional",
     "condition": "LINDER-BATH-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "LINDER-ROOM-STUFF",
    "FOUR-POSTER",
    "MASTER-BEDROOM-DRESSER"
   ],
   "source": "<ROOM LINDER-ROOM\n\t(IN ROOMS)\n\t(DESC \"Linder's bedroom\")\n\t(ADJECTIVE MASTER LINDER BED HIS)\n\t(SYNONYM BEDROOM ROOM)\n\t(GENERIC GENERIC-BEDROOM-F)\n\t(FLAGS RLANDBIT ONBIT)\n\t;(DESCFCN LINDER-ROOM-F)\n\t(ACTION LINDER-ROOM-F)\n\t(WEST TO LIVING-ROOM IF LINDER-DOOR IS OPEN)\n\t(EAST TO ROCK-GARDEN IF LINDER-BACK-DOOR IS OPEN)\n\t(OUT  TO ROCK-GARDEN IF LINDER-BACK-DOOR IS OPEN)\n\t(SOUTH TO BATHROOM IF LINDER-BATH-DOOR IS OPEN)\n\t(GLOBAL LINDER-DOOR LINDER-BACK-DOOR LINDER-BATH-DOOR\n\t\tCLOSET MIRROR LINDER-WINDOW BED CHAIR ;TELEPHONE ;TABLE)\n\t(LINE 1)\n\t(STATION LINDER-ROOM)>",
   "referencedBy": [
    "I-LINDER-RETIRES",
    "I-MONICA",
    "WINDOW-IN?",
    "GENERIC-BATH-DOOR-F",
    "GENERIC-BEDROOM-DOOR-F",
    "GENERIC-BACK-DOOR-F",
    "WINDOW-ROOM",
    "CAN-HEAR-RADIO?",
    "GENERIC-CHAIR-F",
    "THE?",
    "HOUSE-F",
    "CLOSET-F"
   ]
  },
  "LIVING-ROOM": {
   "name": "LIVING-ROOM",
   "file": "places.zil",
   "line": 1329,
   "endLine": 1342,
   "desc": "living room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "ROOM",
    "PARLOR",
    "PARLOUR"
   ],
   "adjectives": [
    "LIVING"
   ],
   "action": "LIVING-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LINDER-DOOR",
    "LIVING-DINING-DOOR",
    "TELEPHONE",
    "LAMP"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "1"
    ],
    "STATION": [
     "LIVING-ROOM"
    ]
   },
   "exits": [
    {
     "to": "LINDER-ROOM",
     "kind": "conditional",
     "condition": "LINDER-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "HALL-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "DINING-ROOM",
     "kind": "conditional",
     "condition": "LIVING-DINING-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "LINDER",
    "MONICA",
    "FIREPLACE",
    "FIRE",
    "WOOD-PILE",
    "SOFA",
    "CLUB-CHAIR",
    "COFFEE-TABLE",
    "RADIO",
    "LIQUOR-CABINET"
   ],
   "source": "<ROOM LIVING-ROOM\n\t(IN ROOMS)\n\t(DESC \"living room\")\n\t(ADJECTIVE LIVING)\n\t(SYNONYM ROOM PARLOR PARLOUR)\n\t(FLAGS RLANDBIT ONBIT)\n\t(ACTION LIVING-ROOM-F)\n\t(EAST TO LINDER-ROOM IF LINDER-DOOR IS OPEN)\n\t(SOUTH TO HALL-1)\n\t(WEST TO DINING-ROOM IF LIVING-DINING-DOOR IS OPEN)\n\t(GLOBAL LINDER-DOOR LIVING-DINING-DOOR TELEPHONE LAMP ;WINDOW)\n\t(LINE 1)\n\t(STATION LIVING-ROOM)\n\t;(CORRIDOR 32)>",
   "referencedBy": [
    "I-MEET-DUFFY?",
    "I-GOTO-LIVING-ROOM",
    "I-PHONG",
    "I-STILES",
    "WINDOW-IN?",
    "GENERIC-BEDROOM-DOOR-F",
    "PHONE-IN?",
    "LIVING-ROOM-F",
    "HALL-1-F",
    "GENERIC-CHAIR-F"
   ]
  },
  "DINING-ROOM": {
   "name": "DINING-ROOM",
   "file": "places.zil",
   "line": 1540,
   "endLine": 1559,
   "desc": "dining room",
   "ldesc": "A table and benches, built out of blond wood for six people, sit in the\nmiddle of the room. On the south wall is a swinging door that leads to\nthe kitchen, and on the east wall a double door to the living room.\nThrough a French door on the west wall you can see the front yard.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "ROOM"
   ],
   "adjectives": [
    "DINING"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DINING-DOOR",
    "LIVING-DINING-DOOR",
    "KITCHEN-DINING-DOOR",
    "WINDOW",
    "CHAIR"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "1"
    ],
    "STATION": [
     "LIVING-ROOM"
    ]
   },
   "exits": [
    {
     "to": "LIVING-ROOM",
     "kind": "conditional",
     "condition": "LIVING-DINING-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "KITCHEN",
     "kind": "conditional",
     "condition": "KITCHEN-DINING-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "FRONT-YARD",
     "kind": "conditional",
     "condition": "DINING-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "FRONT-YARD",
     "kind": "conditional",
     "condition": "DINING-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "DINING-ROOM-TABLE",
    "DINING-ROOM-BENCH"
   ],
   "source": "<ROOM DINING-ROOM\n\t(IN ROOMS)\n\t(DESC \"dining room\")\n\t(LDESC\n\"A table and benches, built out of blond wood for six people, sit in the\nmiddle of the room. On the south wall is a swinging door that leads to\nthe kitchen, and on the east wall a double door to the living room.\nThrough a French door on the west wall you can see the front yard.\")\n\t(ADJECTIVE DINING)\n\t(SYNONYM ROOM)\n\t(FLAGS RLANDBIT ONBIT)\n\t(EAST TO LIVING-ROOM IF LIVING-DINING-DOOR IS OPEN)\n\t(SOUTH TO KITCHEN IF KITCHEN-DINING-DOOR IS OPEN)\n\t(WEST TO FRONT-YARD IF DINING-DOOR IS OPEN)\n\t(OUT  TO FRONT-YARD IF DINING-DOOR IS OPEN)\n\t(GLOBAL DINING-DOOR LIVING-DINING-DOOR KITCHEN-DINING-DOOR WINDOW\n\t\t;CABINET CHAIR)\n\t(LINE 1)\n\t(STATION LIVING-ROOM)\n\t;(CORRIDOR 32)>",
   "referencedBy": [
    "CAN-HEAR-RADIO?",
    "GENERIC-CHAIR-F",
    "HOUSE-F"
   ]
  },
  "KITCHEN": {
   "name": "KITCHEN",
   "file": "places.zil",
   "line": 1594,
   "endLine": 1609,
   "desc": "kitchen",
   "ldesc": "The Linder kitchen is full of electric appliances: range and hood,\nrefrigerator, mixer, toaster, clock, and so on. Several white steel\ncabinets make for plenty of storage space. To the north is the dining\nroom, to the east the hall.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "KITCHEN"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "KITCHEN-DINING-DOOR",
    "KITCHEN-HALL-DOOR",
    "KITCHEN-WINDOW",
    "SINK",
    "CABINET",
    "CHAIR"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "1"
    ],
    "STATION": [
     "HALL-1"
    ]
   },
   "exits": [
    {
     "to": "DINING-ROOM",
     "kind": "conditional",
     "condition": "KITCHEN-DINING-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "HALL-1",
     "kind": "conditional",
     "condition": "KITCHEN-HALL-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "PHONG",
    "K-CABINETS",
    "K-CUPBOARD",
    "K-CLOCK",
    "REFRIGERATOR",
    "RANGE",
    "HOOD",
    "MIXER",
    "TOASTER"
   ],
   "source": "<ROOM KITCHEN\n\t(IN ROOMS)\n\t(DESC \"kitchen\")\n\t(LDESC\n\"The Linder kitchen is full of electric appliances: range and hood,\nrefrigerator, mixer, toaster, clock, and so on. Several white steel\ncabinets make for plenty of storage space. To the north is the dining\nroom, to the east the hall.\")\n\t(SYNONYM KITCHEN)\n\t(FLAGS RLANDBIT ONBIT)\n\t(NORTH TO DINING-ROOM IF KITCHEN-DINING-DOOR IS OPEN)\n\t(EAST TO HALL-1 IF KITCHEN-HALL-DOOR IS OPEN)\n\t(GLOBAL KITCHEN-DINING-DOOR KITCHEN-HALL-DOOR KITCHEN-WINDOW\n\t\tSINK ;TELEPHONE CABINET CHAIR)\n\t(LINE 1)\n\t(STATION HALL-1)>",
   "referencedBy": [
    "I-LINDER-WELCOME",
    "I-PHONG",
    "PHONG-F",
    "WINDOW-IN?",
    "WINDOW-ROOM",
    "CAN-HEAR-RADIO?",
    "GENERIC-CHAIR-F",
    "CIGARETTE-F",
    "GLOBAL-CAN-OF-WORMS-F"
   ]
  },
  "HALL-1": {
   "name": "HALL-1",
   "file": "places.zil",
   "line": 1789,
   "endLine": 1803,
   "desc": "hallway",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "HALL-1-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "KITCHEN-HALL-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "1"
    ],
    "STATION": [
     "HALL-1"
    ],
    "CORRIDOR": [
     "16"
    ]
   },
   "exits": [
    {
     "to": "HALL-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "LIVING-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "KITCHEN",
     "kind": "conditional",
     "condition": "KITCHEN-HALL-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM HALL-1\n\t(IN ROOMS)\n\t(DESC \"hallway\")\n\t(FLAGS RLANDBIT ONBIT)\n\t;(DESCFCN HALL-1-F)\n\t(ACTION  HALL-1-F)\n\t;(ADJECTIVE HALL)\n\t;(SYNONYM HALLWAY WAY)\n\t(SOUTH TO HALL-2)\n\t(NORTH TO LIVING-ROOM)\n\t(WEST TO KITCHEN IF KITCHEN-HALL-DOOR IS OPEN)\n\t(GLOBAL KITCHEN-HALL-DOOR)\n\t(LINE 1)\n\t(STATION HALL-1)\n\t(CORRIDOR 16)>",
   "referencedBy": [
    "I-LINDER-FOLLOWS-YOU",
    "I-STILES",
    "I-MONICA"
   ]
  },
  "HALL-2": {
   "name": "HALL-2",
   "file": "places.zil",
   "line": 1816,
   "endLine": 1830,
   "desc": "hallway",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "NDESCBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "HALL-2-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MONICA-DOOR",
    "BUTLER-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "1"
    ],
    "STATION": [
     "HALL-2"
    ],
    "CORRIDOR": [
     "16"
    ]
   },
   "exits": [
    {
     "to": "MONICA-ROOM",
     "kind": "conditional",
     "condition": "MONICA-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BUTLER-ROOM",
     "kind": "conditional",
     "condition": "BUTLER-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "HALL-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "HALL-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HALL-2\n\t(IN ROOMS)\n\t(DESC \"hallway\")\n\t(FLAGS RLANDBIT ONBIT NDESCBIT)\n\t(ACTION HALL-2-F)\n\t;(ADJECTIVE HALL)\n\t;(SYNONYM HALLWAY WAY)\n\t(EAST TO MONICA-ROOM IF MONICA-DOOR IS OPEN)\n\t(WEST TO BUTLER-ROOM IF BUTLER-DOOR IS OPEN)\n\t(SOUTH TO HALL-3)\n\t(NORTH TO HALL-1)\n\t(GLOBAL MONICA-DOOR BUTLER-DOOR)\n\t(LINE 1)\n\t(STATION HALL-2)\n\t(CORRIDOR 16)>",
   "referencedBy": [
    "I-LINDER-FOLLOWS-YOU",
    "ESTABLISH-GOAL",
    "TRANSFER",
    "I-STILES",
    "I-MONICA",
    "GENERIC-BEDROOM-DOOR-F",
    "CAN-HEAR-RECORD?"
   ]
  },
  "BUTLER-ROOM": {
   "name": "BUTLER-ROOM",
   "file": "places.zil",
   "line": 1854,
   "endLine": 1868,
   "desc": "butler's room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "BEDROOM",
    "ROOM"
   ],
   "adjectives": [
    "BUTLER",
    "HIS",
    "BED",
    "SERVANT"
   ],
   "action": "BUTLER-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BUTLER-DOOR",
    "BUTLER-BATH-DOOR",
    "BUTLER-WINDOW",
    "CLOSET",
    "BED"
   ],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-BEDROOM-F"
    ],
    "LINE": [
     "1"
    ],
    "STATION": [
     "HALL-2"
    ]
   },
   "exits": [
    {
     "to": "HALL-2",
     "kind": "conditional",
     "condition": "BUTLER-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "HALL-2",
     "kind": "conditional",
     "condition": "BUTLER-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "BUTLER-BATH",
     "kind": "conditional",
     "condition": "BUTLER-BATH-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BUTLER-BATH",
     "kind": "conditional",
     "condition": "BUTLER-BATH-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [
    "BUTLER-TABLE"
   ],
   "source": "<ROOM BUTLER-ROOM\n\t(IN ROOMS)\n\t(ACTION BUTLER-ROOM-F)\n\t(DESC \"butler's room\")\n\t(ADJECTIVE BUTLER HIS BED SERVANT)\n\t(SYNONYM BEDROOM ROOM)\n\t(GENERIC GENERIC-BEDROOM-F)\n\t(FLAGS RLANDBIT ONBIT)\n\t(EAST TO HALL-2 IF BUTLER-DOOR IS OPEN)\n\t(OUT TO HALL-2 IF BUTLER-DOOR IS OPEN)\n\t(NORTH TO BUTLER-BATH IF BUTLER-BATH-DOOR IS OPEN)\n\t(IN    TO BUTLER-BATH IF BUTLER-BATH-DOOR IS OPEN)\n\t(GLOBAL BUTLER-DOOR BUTLER-BATH-DOOR BUTLER-WINDOW CLOSET BED)\n\t(LINE 1)\n\t(STATION HALL-2)>",
   "referencedBy": [
    "I-PHONG-RETIRES",
    "I-PHONG",
    "PHONG-F",
    "WINDOW-IN?",
    "GENERIC-BATH-DOOR-F",
    "WINDOW-ROOM",
    "RECURSIVE-BOOK-F",
    "CLOSET-F"
   ]
  },
  "BUTLER-BATH": {
   "name": "BUTLER-BATH",
   "file": "places.zil",
   "line": 1906,
   "endLine": 1916,
   "desc": "butler's bathroom",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "ROOM",
    "BATHROOM"
   ],
   "adjectives": [
    "BUTLER",
    "HIS",
    "BATH",
    "SERVANT"
   ],
   "action": "BUTLER-BATH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MIRROR",
    "TOILET",
    "SINK",
    "BATHTUB",
    "BUTLER-BATH-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-BATHROOM-F"
    ]
   },
   "exits": [
    {
     "to": "BUTLER-ROOM",
     "kind": "conditional",
     "condition": "BUTLER-BATH-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "BUTLER-ROOM",
     "kind": "conditional",
     "condition": "BUTLER-BATH-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM BUTLER-BATH\n\t(IN ROOMS)\n\t(FLAGS RLANDBIT ONBIT)\n\t(DESC \"butler's bathroom\")\n\t(ACTION BUTLER-BATH-F)\n\t(ADJECTIVE BUTLER HIS BATH SERVANT)\n\t(SYNONYM ROOM BATHROOM)\n\t(GENERIC GENERIC-BATHROOM-F)\n\t(SOUTH TO BUTLER-ROOM IF BUTLER-BATH-DOOR IS OPEN)\n\t(OUT   TO BUTLER-ROOM IF BUTLER-BATH-DOOR IS OPEN)\n\t(GLOBAL MIRROR TOILET SINK BATHTUB BUTLER-BATH-DOOR)>",
   "referencedBy": [
    "WINDOW-IN?",
    "GENERIC-BATH-DOOR-F"
   ]
  },
  "HALL-3": {
   "name": "HALL-3",
   "file": "places.zil",
   "line": 1932,
   "endLine": 1947,
   "desc": "hallway",
   "ldesc": "This hallway seems to run the length of the house, from the garage\nat the south end to the living room at the north. There is enough warm yellow\nlight flooding from the living room for you to see a few doors on each side\nof the hall.",
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
    "LINE": [
     "1"
    ],
    "STATION": [
     "HALL-3"
    ],
    "CORRIDOR": [
     "16"
    ]
   },
   "exits": [
    {
     "to": "ENTRY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "ENTRY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "HALL-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "HALL-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HALL-3\n\t(IN ROOMS)\n\t(DESC \"hallway\")\n\t(LDESC\n\"This hallway seems to run the length of the house, from the garage\nat the south end to the living room at the north. There is enough warm yellow\nlight flooding from the living room for you to see a few doors on each side\nof the hall.\")\n\t(FLAGS RLANDBIT ONBIT)\n\t(WEST TO ENTRY)\n\t(OUT TO ENTRY)\n\t(SOUTH TO HALL-4)\n\t(NORTH TO HALL-2)\n\t(LINE 1)\n\t(STATION HALL-3)\n\t(CORRIDOR 16)>",
   "referencedBy": [
    "I-GOTO-LIVING-ROOM",
    "I-LINDER-FOLLOWS-YOU",
    "ESTABLISH-GOAL",
    "TRANSFER",
    "I-STILES",
    "I-MONICA"
   ]
  },
  "ENTRY": {
   "name": "ENTRY",
   "file": "places.zil",
   "line": 1949,
   "endLine": 1960,
   "desc": "entry",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "AN"
   ],
   "synonyms": [
    "ENTRY",
    "FOYER"
   ],
   "adjectives": [],
   "action": "ENTRY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "FRONT-DOOR",
    "CLOSET"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "1"
    ],
    "STATION": [
     "ENTRY"
    ]
   },
   "exits": [
    {
     "to": "FRONT-PORCH",
     "kind": "conditional",
     "condition": "FRONT-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "FRONT-PORCH",
     "kind": "conditional",
     "condition": "FRONT-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "HALL-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "FLOWER-ARRANGEMENT",
    "SCROLL",
    "SHOE-PLATFORM"
   ],
   "source": "<ROOM ENTRY\n\t(IN ROOMS)\n\t(DESC \"entry\")\n\t(ACTION ENTRY-F)\n\t(SYNONYM ENTRY FOYER)\n\t(FLAGS RLANDBIT ONBIT AN)\n\t(WEST TO FRONT-PORCH IF FRONT-DOOR IS OPEN)\n\t(OUT  TO FRONT-PORCH IF FRONT-DOOR IS OPEN)\n\t(EAST TO HALL-3)\n\t(GLOBAL FRONT-DOOR CLOSET)\n\t(LINE 1)\n\t(STATION ENTRY)>",
   "referencedBy": [
    "WELCOME",
    "ESTABLISH-GOAL",
    "TRANSFER",
    "I-PHONG",
    "I-STILES",
    "PHONG-F",
    "ENTRY-F",
    "HOUSE-F",
    "BLACK-WIRE-F",
    "CLOSET-F"
   ]
  },
  "STORAGE-CLOSET": {
   "name": "STORAGE-CLOSET",
   "file": "places.zil",
   "line": 2084,
   "endLine": 2098,
   "desc": "storage closet",
   "ldesc": "This is a little-used storage closet containing odds and ends of no interest\nwhatsoever. The exit is to the east.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "CLOSET"
   ],
   "adjectives": [
    "STORAGE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STORAGE-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "1"
    ],
    "LINE": [
     "2"
    ],
    "STATION": [
     "HALL-4"
    ]
   },
   "exits": [
    {
     "to": "HALL-4",
     "kind": "conditional",
     "condition": "STORAGE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "HALL-4",
     "kind": "conditional",
     "condition": "STORAGE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "LINENS",
    "TOWELS",
    "BROOM"
   ],
   "source": "<ROOM STORAGE-CLOSET\n\t(IN ROOMS)\n\t(DESC \"storage closet\")\n\t(LDESC\n\"This is a little-used storage closet containing odds and ends of no interest\nwhatsoever. The exit is to the east.\")\n\t(ADJECTIVE STORAGE)\n\t(SYNONYM CLOSET)\n\t(FLAGS RLANDBIT ONBIT)\n\t(EAST TO HALL-4 IF STORAGE-DOOR IS OPEN)\n\t(OUT  TO HALL-4 IF STORAGE-DOOR IS OPEN)\n\t(GLOBAL STORAGE-DOOR ;CLOSET)\n\t(SIZE 1)\n\t(LINE 2)\n\t(STATION HALL-4)>",
   "referencedBy": [
    "WINDOW-IN?"
   ]
  },
  "HALL-4": {
   "name": "HALL-4",
   "file": "places.zil",
   "line": 2130,
   "endLine": 2146,
   "desc": "hallway",
   "ldesc": "This is the south end of a hallway that runs the length of the house.\nAt the far end, to the north, you can see the living room; immediately\nto the south is a door. Other doors on both sides lead to other rooms.",
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
    "STORAGE-DOOR",
    "OFFICE-DOOR",
    "GARAGE-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "2"
    ],
    "STATION": [
     "HALL-4"
    ],
    "CORRIDOR": [
     "16"
    ]
   },
   "exits": [
    {
     "to": "GARAGE",
     "kind": "conditional",
     "condition": "GARAGE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "GARAGE",
     "kind": "conditional",
     "condition": "GARAGE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "OFFICE",
     "kind": "conditional",
     "condition": "OFFICE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "HALL-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "STORAGE-CLOSET",
     "kind": "conditional",
     "condition": "STORAGE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM HALL-4\n\t(IN ROOMS)\n\t(DESC \"hallway\")\n\t(LDESC\n\"This is the south end of a hallway that runs the length of the house.\nAt the far end, to the north, you can see the living room; immediately\nto the south is a door. Other doors on both sides lead to other rooms.\")\n\t(FLAGS RLANDBIT ONBIT)\n\t(SOUTH TO GARAGE IF GARAGE-DOOR IS OPEN)\n\t(OUT   TO GARAGE IF GARAGE-DOOR IS OPEN)\n\t(EAST TO OFFICE IF OFFICE-DOOR IS OPEN)\n\t(NORTH TO HALL-3)\n\t(WEST TO STORAGE-CLOSET IF STORAGE-DOOR IS OPEN)\n\t(GLOBAL STORAGE-DOOR OFFICE-DOOR GARAGE-DOOR)\n\t(LINE 2)\n\t(STATION HALL-4)\n\t(CORRIDOR 16)>",
   "referencedBy": [
    "I-LINDER-FOLLOWS-YOU",
    "I-LINDER-TO-OFFICE",
    "ESTABLISH-GOAL",
    "TRANSFER",
    "I-STILES"
   ]
  },
  "OFFICE": {
   "name": "OFFICE",
   "file": "places.zil",
   "line": 2156,
   "endLine": 2170,
   "desc": "office",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "AN"
   ],
   "synonyms": [
    "OFFICE"
   ],
   "adjectives": [],
   "action": "OFFICE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "OFFICE-DOOR",
    "OFFICE-WINDOW",
    "BROKEN-GLASS",
    "OFFICE-BACK-DOOR",
    "TELEPHONE",
    "CLOCK"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "2"
    ],
    "STATION": [
     "OFFICE"
    ]
   },
   "exits": [
    {
     "to": "OFFICE-PORCH",
     "kind": "conditional",
     "condition": "OFFICE-BACK-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "OFFICE-PORCH",
     "kind": "conditional",
     "condition": "OFFICE-BACK-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "HALL-4",
     "kind": "conditional",
     "condition": "OFFICE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "CAT",
    "PIECE-OF-WIRE",
    "PIECE-OF-PUTTY",
    "OFFICE-DESK",
    "CARVED-CHAIR",
    "WOODEN-CHAIR",
    "FILE-CABINET",
    "OFFICE-PICTURE",
    "KEY-HOLE",
    "CLOCK-POWDER",
    "CLOCK-WIRES",
    "OFFICE-BUTTON",
    "LOUNGE",
    "CORPSE"
   ],
   "source": "<ROOM OFFICE\n\t(IN ROOMS)\n\t(DESC \"office\")\n\t(SYNONYM OFFICE)\n\t(FLAGS RLANDBIT ONBIT AN)\n\t(ACTION OFFICE-F)\n\t(EAST TO OFFICE-PORCH IF OFFICE-BACK-DOOR IS OPEN)\n\t(OUT  TO OFFICE-PORCH IF OFFICE-BACK-DOOR IS OPEN)\n\t;(SOUTH TO W.C. IF W.C.-DOOR IS OPEN)\n\t;(IN    TO W.C. IF W.C.-DOOR IS OPEN)\n\t(WEST TO HALL-4 IF OFFICE-DOOR IS OPEN)\n\t(GLOBAL OFFICE-DOOR OFFICE-WINDOW ;PIECE-OF-WIRE ;PIECE-OF-PUTTY\n\t\tBROKEN-GLASS OFFICE-BACK-DOOR ;W.C.-DOOR TELEPHONE CLOCK)\n\t(LINE 2)\n\t(STATION OFFICE)>",
   "referencedBy": [
    "I-CHIMES",
    "I-LINDER-WELCOME",
    "I-LINDER-TO-OFFICE",
    "FIRE-SHOT",
    "I-PHONG",
    "I-STILES",
    "I-MONICA",
    "I-MONICA-GOES",
    "I-AMBULANCE",
    "PLAYER-F",
    "PHONG-F",
    "LINDER-F",
    "WINDOW-IN?",
    "GENERIC-BACK-DOOR-F",
    "PHONE-IN?",
    "WINDOW-ROOM",
    "OFFICE-WINDOW-F",
    "GO-AWAY",
    "GENERIC-CHAIR-F",
    "CLOCK-F",
    "OFFICE-BUTTON-F",
    "HOUSE-F",
    "V-HIDE"
   ]
  },
  "GARAGE": {
   "name": "GARAGE",
   "file": "places.zil",
   "line": 2652,
   "endLine": 2664,
   "desc": "garage",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "GARAGE"
   ],
   "adjectives": [],
   "action": "GARAGE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GARAGE-DOOR",
    "WORKSHOP-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "2"
    ],
    "STATION": [
     "GARAGE"
    ],
    "CORRIDOR": [
     "8"
    ]
   },
   "exits": [
    {
     "to": "HALL-4",
     "kind": "conditional",
     "condition": "GARAGE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "DRIVEWAY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "WORKSHOP",
     "kind": "conditional",
     "condition": "WORKSHOP-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "LINDER-CAR",
    "MONICA-CAR",
    "CAR-WINDOW"
   ],
   "source": "<ROOM GARAGE\n\t(IN ROOMS)\n\t(DESC \"garage\")\n\t(SYNONYM GARAGE)\n\t(FLAGS RLANDBIT ONBIT)\n\t(ACTION GARAGE-F)\n\t(NORTH TO HALL-4 IF GARAGE-DOOR IS OPEN)\n\t(WEST TO DRIVEWAY)\n\t(EAST TO WORKSHOP IF WORKSHOP-DOOR IS OPEN)\n\t(GLOBAL GARAGE-DOOR WORKSHOP-DOOR)\n\t(LINE 2)\n\t(STATION GARAGE)\n\t(CORRIDOR 8)>",
   "referencedBy": [
    "I-MONICA",
    "I-MONICA-GOES",
    "I-MONICA-RETURN",
    "OUTSIDE?",
    "DRIVEWAY-F",
    "FRONT-DOOR-F",
    "CAR-WINDOW-F",
    "GENERIC-CAR-F",
    "BLACK-WIRE-F"
   ]
  },
  "WORKSHOP": {
   "name": "WORKSHOP",
   "file": "places.zil",
   "line": 2764,
   "endLine": 2780,
   "desc": "workshop",
   "ldesc": "This room is a well-equipped workshop. Besides the usual sort of tools,\nthe place is full of mechanical and electrical parts and supplies:\nswitches, relays, spools of colored wire, and so on. One wall holds the\nmain electric board and a home-made junction box with more wires going\nin and out than you can shake a stick at. The only door is the one you\ncame in.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "SHOP",
    "WORKSHOP"
   ],
   "adjectives": [
    "WORK"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WORKSHOP-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "2"
    ],
    "STATION": [
     "GARAGE"
    ]
   },
   "exits": [
    {
     "to": "GARAGE",
     "kind": "conditional",
     "condition": "WORKSHOP-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "WORKSHOP-WIRE",
    "SPOOL-OF-WIRE",
    "JUNCTION-BOX",
    "SAW",
    "HAMMER",
    "ROPE",
    "SPADE",
    "HOE",
    "RAKE",
    "HOSE",
    "WORK-SHELVES"
   ],
   "source": "<ROOM WORKSHOP\n\t(IN ROOMS)\n\t(DESC \"workshop\")\n\t(ADJECTIVE WORK)\n\t(SYNONYM SHOP WORKSHOP)\n\t(LDESC\n\"This room is a well-equipped workshop. Besides the usual sort of tools,\nthe place is full of mechanical and electrical parts and supplies:\nswitches, relays, spools of colored wire, and so on. One wall holds the\nmain electric board and a home-made junction box with more wires going\nin and out than you can shake a stick at. The only door is the one you\ncame in.\")\n\t(FLAGS RLANDBIT ONBIT)\n\t(WEST TO GARAGE IF WORKSHOP-DOOR IS OPEN)\n\t(GLOBAL WORKSHOP-DOOR)\n\t(LINE 2)\n\t(STATION GARAGE)>",
   "referencedBy": [
    "I-LINDER-TO-OFFICE",
    "I-MONICA",
    "I-MONICA-RETURN",
    "MONICA-F",
    "WINDOW-IN?",
    "GENERIC-WIRE-F",
    "BLACK-WIRE-F"
   ]
  }
 },
 "objects": {
  "MIDNIGHT": {
   "name": "MIDNIGHT",
   "file": "events.zil",
   "line": 37,
   "endLine": 40,
   "desc": "midnight",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "MIDNIGHT"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MIDNIGHT\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"midnight\")\n\t(SYNONYM MIDNIGHT)>",
   "referencedBy": [
    "V-WAIT-FOR",
    "V-WAIT-UNTIL"
   ]
  },
  "SMALL-INTEGER": {
   "name": "SMALL-INTEGER",
   "file": "events.zil",
   "line": 42,
   "endLine": 45,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "TWO",
    "THREE",
    "FOUR",
    "FIVE"
   ],
   "adjectives": [],
   "action": "INTEGER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SMALL-INTEGER\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM TWO THREE FOUR FIVE)\n\t(ACTION INTEGER-F)>",
   "referencedBy": []
  },
  "MEDIUM-INTEGER": {
   "name": "MEDIUM-INTEGER",
   "file": "events.zil",
   "line": 47,
   "endLine": 50,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "TEN",
    "FIFTEEN",
    "TWENTY",
    "THIRTY"
   ],
   "adjectives": [],
   "action": "INTEGER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MEDIUM-INTEGER\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM TEN FIFTEEN TWENTY THIRTY)\n\t(ACTION INTEGER-F)>",
   "referencedBy": []
  },
  "HIM-HER": {
   "name": "HIM-HER",
   "file": "people.zil",
   "line": 9,
   "endLine": 13,
   "desc": "him or her",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "HE",
    "SHE",
    "HIM",
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
   "source": "<OBJECT HIM-HER\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM HE SHE HIM HER)\n\t(DESC \"him or her\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "PERFORM",
    "ITAKE-CHECK",
    "THE?"
   ]
  },
  "YOU": {
   "name": "YOU",
   "file": "people.zil",
   "line": 15,
   "endLine": 20,
   "desc": "himself or herself",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "YOURSELF",
    "HIMSELF",
    "HERSELF"
   ],
   "adjectives": [],
   "action": "YOU-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT YOU\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM YOURSELF HIMSELF HERSELF)\n\t(DESC \"himself or herself\")\n\t(FLAGS NDESCBIT)\n\t(ACTION YOU-F)>",
   "referencedBy": [
    "YOU-F",
    "THE?"
   ]
  },
  "OBJECT-PAIR": {
   "name": "OBJECT-PAIR",
   "file": "people.zil",
   "line": 30,
   "endLine": 32,
   "desc": "such things",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": "OBJECT-PAIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT OBJECT-PAIR\n\t(DESC \"such things\")\n\t(ACTION OBJECT-PAIR-F)>",
   "referencedBy": [
    "MAIN-LOOP-1",
    "PRE-ARREST"
   ]
  },
  "PLAYER": {
   "name": "PLAYER",
   "file": "people.zil",
   "line": 73,
   "endLine": 79,
   "desc": "detective",
   "ldesc": null,
   "fdesc": null,
   "loc": "DRIVEWAY-GATE",
   "flags": [
    "NDESCBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "I",
    "ME",
    "MYSELF",
    "DETECTIVE"
   ],
   "adjectives": [],
   "action": "PLAYER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "0"
    ]
   },
   "contents": [
    "TELEGRAM",
    "MATCHBOOK",
    "PISTOL",
    "HANDCUFFS"
   ],
   "source": "<OBJECT PLAYER\n\t(IN DRIVEWAY-GATE)\n\t(DESC \"detective\")\n\t(SYNONYM I ME MYSELF DETECTIVE)\n\t(ACTION PLAYER-F)\n\t(FLAGS NDESCBIT TRANSBIT)\n\t(CHARACTER 0)>",
   "referencedBy": [
    "I-FINGERPRINT",
    "I-LINDER-TO-OFFICE",
    "I-LINDER-IN-OFFICE",
    "I-LINDER-EXPLAIN",
    "FIRE-SHOT",
    "I-PHONG",
    "I-MONICA",
    "GO",
    "MAIN-LOOP-1",
    "QCONTEXT-CHECK",
    "PARSER",
    "SYNTAX-CHECK",
    "GET-OBJECT",
    "SEARCH-LIST",
    "ITAKE-CHECK",
    "PLAYER-F",
    "TOO-BAD-SIT-HIDE",
    "PHONG-F",
    "TAKE-PHONG-KEYS",
    "LINDER-F",
    "STILES-F",
    "MONICA-F",
    "GLOBAL-DUFFY-F",
    "COM-CHECK",
    "GLOBAL-HERE-F",
    "SIDE-FOOTPRINTS-F",
    "BACK-FOOTPRINTS-F",
    "GO-AWAY",
    "WOODEN-CHAIR-F",
    "KEY-HOLE-F",
    "FIND-NOT-HERE",
    "SEEKING-DRINK?",
    "LIQUOR-F",
    "CIGARETTE-F",
    "GENERIC-GUN-F",
    "PHONG-KEYS-F",
    "GENERIC-KEY-F",
    "HANDWRITING-F",
    "GLOBAL-SUICIDE-F",
    "GOTO",
    "PRINT-CONT",
    "V-ASK-ABOUT",
    "V-ASK-FOR",
    "V-CLIMB-ON",
    "V-CONFRONT",
    "V-THROUGH",
    "PRE-FIND",
    "V-FIND",
    "V-FOLLOW",
    "PRE-GIVE",
    "V-HANDCUFF",
    "V-HELP",
    "PRE-SEARCH-OBJECT-FOR",
    "V-SHOW",
    "V-SIT",
    "V-TELL",
    "PRE-TELL-ME",
    "V-TELL-ME",
    "V-WAIT-FOR"
   ]
  },
  "PHONG": {
   "name": "PHONG",
   "file": "people.zil",
   "line": 143,
   "endLine": 160,
   "desc": "Mr. Phong",
   "ldesc": null,
   "fdesc": null,
   "loc": "KITCHEN",
   "flags": [
    "PERSON"
   ],
   "synonyms": [
    "PHONG",
    "MAN"
   ],
   "adjectives": [
    "MR",
    "MISTER",
    "HUI",
    "ASIAN",
    "ORIENTAL"
   ],
   "action": "PHONG-F",
   "descfcn": "PHONG-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "XDESC": [
     "Asian man"
    ],
    "TEXT": [
     "Phong's straight black hair and folded eyelids make him obviously\nAsian, but no definite nationality. His open, almost gentle face holds a\nquick smile and eyes that seem to miss nothing. He carries his stout\nbody lightly, but you can see great strength under his light shirt and\ndark trousers. You guess his age at about fifty, but who knows how many\nlifetimes of experience he carries?"
    ],
    "CAPACITY": [
     "40"
    ],
    "CHARACTER": [
     "1"
    ]
   },
   "contents": [
    "PHONG-SHOES",
    "OUTSIDE-GUN",
    "PHONG-KEYS"
   ],
   "source": "<OBJECT PHONG\n\t(IN KITCHEN)\n\t(DESC \"Mr. Phong\")\n\t(ADJECTIVE MR MISTER HUI ASIAN ORIENTAL)\n\t(SYNONYM PHONG MAN)\n\t(ACTION PHONG-F)\n\t(DESCFCN PHONG-F)\n\t(XDESC \"Asian man\")\n\t(TEXT\n\"Phong's straight black hair and folded eyelids make him obviously\nAsian, but no definite nationality. His open, almost gentle face holds a\nquick smile and eyes that seem to miss nothing. He carries his stout\nbody lightly, but you can see great strength under his light shirt and\ndark trousers. You guess his age at about fifty, but who knows how many\nlifetimes of experience he carries?\")\n\t(FLAGS PERSON ;OPENBIT)\n\t(CAPACITY 40)\n\t(CHARACTER 1)>",
   "referencedBy": [
    "WELCOME",
    "I-GOTO-LIVING-ROOM",
    "I-LINDER-WELCOME",
    "I-PHONG-RETIRES",
    "I-PHONG-UNCALLED",
    "I-PHONG",
    "I-STILES",
    "ARREST",
    "GO",
    "PHONG-F",
    "LINDER-F",
    "STILES-F",
    "MONICA-F",
    "ENTRY-F",
    "THE?",
    "RECURSIVE-BOOK-F",
    "PHONG-KEYS-F",
    "BUTTON-F",
    "YOU-RANG",
    "GLOBAL-CAN-OF-WORMS-F",
    "PRE-FIND"
   ]
  },
  "PHONG-SHOES": {
   "name": "PHONG-SHOES",
   "file": "people.zil",
   "line": 162,
   "endLine": 168,
   "desc": "pair of Phong's shoes",
   "ldesc": null,
   "fdesc": null,
   "loc": "PHONG",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PAIR",
    "SHOE",
    "SHOES"
   ],
   "adjectives": [
    "PHONG",
    "PHONGS",
    "HIS"
   ],
   "action": "RANDOM-SHOES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PHONG-SHOES\n\t(DESC \"pair of Phong's shoes\")\n\t(IN PHONG)\n\t(ADJECTIVE PHONG PHONGS ;PHONG\\'S HIS)\n\t(SYNONYM PAIR SHOE SHOES)\n\t(FLAGS NDESCBIT)\n\t(ACTION RANDOM-SHOES-F)>",
   "referencedBy": [
    "RANDOM-SHOES-F"
   ]
  },
  "GLOBAL-PHONG": {
   "name": "GLOBAL-PHONG",
   "file": "people.zil",
   "line": 170,
   "endLine": 177,
   "desc": "Mr. Phong",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "PERSON"
   ],
   "synonyms": [
    "PHONG"
   ],
   "adjectives": [
    "MR",
    "MISTER",
    "HUI"
   ],
   "action": "GLOBAL-PERSON",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-PHONG\n\t(DESC \"Mr. Phong\")\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM PHONG)\n\t(ADJECTIVE MR MISTER HUI)\n\t(FLAGS PERSON)\n\t(ACTION GLOBAL-PERSON)\n\t(CHARACTER 1)>",
   "referencedBy": [
    "PHONG-F",
    "LINDER-F",
    "STILES-F",
    "MONICA-F",
    "THE?"
   ]
  },
  "LINDER": {
   "name": "LINDER",
   "file": "people.zil",
   "line": 502,
   "endLine": 520,
   "desc": "Mr. Linder",
   "ldesc": null,
   "fdesc": null,
   "loc": "LIVING-ROOM",
   "flags": [
    "PERSON"
   ],
   "synonyms": [
    "LINDER",
    "FATHER",
    "DAD",
    "MAN"
   ],
   "adjectives": [
    "MISTER",
    "MR",
    "FREEMAN",
    "YOUR",
    "HER",
    "TALL"
   ],
   "action": "LINDER-F",
   "descfcn": "LINDER-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "40"
    ],
    "XDESC": [
     "tall man"
    ],
    "TEXT": [
     "Linder stands at least six foot, with a powerful frame but quick actions,\nlike a cat. His eyeglasses sit on top of his head, where thin strands\nof long black hair go here and there, mostly combed backward. His\nwide-set hazel eyes size you up quickly from within their pouches in his\nruddy face. He wears a silk peach-colored Mandarin shirt and chocolate\ntrousers, impeccably tailored and laundered, but sweat gleams on his\nhigh forehead, and he looks as though he hasn't slept much lately."
    ],
    "CHARACTER": [
     "2"
    ]
   },
   "contents": [
    "LINDER-SHOES"
   ],
   "source": "<OBJECT LINDER\n\t(IN LIVING-ROOM)\n\t(DESC \"Mr. Linder\")\n\t(ADJECTIVE MISTER MR FREEMAN YOUR HER TALL)\n\t(SYNONYM LINDER FATHER DAD MAN)\n\t(FLAGS PERSON ;OPENBIT)\n\t(CAPACITY 40)\n\t(ACTION LINDER-F)\n\t(DESCFCN LINDER-F)\n\t(XDESC \"tall man\")\n\t(TEXT\n\"Linder stands at least six foot, with a powerful frame but quick actions,\nlike a cat. His eyeglasses sit on top of his head, where thin strands\nof long black hair go here and there, mostly combed backward. His\nwide-set hazel eyes size you up quickly from within their pouches in his\nruddy face. He wears a silk peach-colored Mandarin shirt and chocolate\ntrousers, impeccably tailored and laundered, but sweat gleams on his\nhigh forehead, and he looks as though he hasn't slept much lately.\")\n\t(CHARACTER 2)>",
   "referencedBy": [
    "I-LINDER-WELCOME",
    "I-LINDER-FOLLOWS-YOU",
    "I-LINDER-TO-OFFICE",
    "I-LINDER-IN-OFFICE",
    "I-LINDER-EXPLAIN",
    "I-LINDER-RETIRES",
    "I-STILES",
    "PHONG-F",
    "LINDER-F",
    "STILES-F",
    "MONICA-F",
    "RANDOM-SHOES-F",
    "GO-AWAY",
    "OFFICE-BACK-DOOR-F",
    "HALL-1-F",
    "OFFICE-F",
    "CARVED-CHAIR-F",
    "PAPERS-F",
    "OFFICE-BUTTON-F",
    "THE?",
    "PRE-FIND"
   ]
  },
  "LINDER-SHOES": {
   "name": "LINDER-SHOES",
   "file": "people.zil",
   "line": 522,
   "endLine": 528,
   "desc": "pair of Linder's shoes",
   "ldesc": null,
   "fdesc": null,
   "loc": "LINDER",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PAIR",
    "SHOE",
    "SHOES"
   ],
   "adjectives": [
    "LINDER",
    "HIS"
   ],
   "action": "RANDOM-SHOES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LINDER-SHOES\n\t(DESC \"pair of Linder's shoes\")\n\t(IN LINDER)\n\t(ADJECTIVE LINDER HIS)\n\t(SYNONYM PAIR SHOE SHOES)\n\t(FLAGS NDESCBIT)\n\t(ACTION RANDOM-SHOES-F)>",
   "referencedBy": [
    "RANDOM-SHOES-F"
   ]
  },
  "GLOBAL-LINDER": {
   "name": "GLOBAL-LINDER",
   "file": "people.zil",
   "line": 530,
   "endLine": 537,
   "desc": "Mr. Linder",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "PERSON"
   ],
   "synonyms": [
    "LINDER",
    "FATHER",
    "DAD"
   ],
   "adjectives": [
    "MISTER",
    "MR",
    "FREEMAN",
    "YOUR",
    "HER"
   ],
   "action": "GLOBAL-PERSON",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "2"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-LINDER\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Mr. Linder\")\n\t(ADJECTIVE MISTER MR FREEMAN YOUR HER)\n\t(SYNONYM LINDER FATHER DAD)\n\t(FLAGS PERSON)\n\t(ACTION GLOBAL-PERSON)\n\t(CHARACTER 2)>",
   "referencedBy": [
    "ARREST",
    "PHONG-F",
    "LINDER-F",
    "STILES-F",
    "MONICA-F",
    "GLOBAL-PERSON",
    "THE?",
    "CORPSE-F",
    "PRE-ACCUSE",
    "PRE-ARREST"
   ]
  },
  "STILES": {
   "name": "STILES",
   "file": "people.zil",
   "line": 691,
   "endLine": 706,
   "desc": "Mr. Stiles",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "PERSON"
   ],
   "synonyms": [
    "STILES",
    "MAN",
    "VISITOR",
    "STRANGER"
   ],
   "adjectives": [
    "MR",
    "RALPH"
   ],
   "action": "STILES-F",
   "descfcn": "STILES-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "40"
    ],
    "XDESC": [
     "visitor"
    ],
    "TEXT": [
     "The young man looks you straight in the eye but says nothing. He looks like a\ngigolo trying to imitate a university professor. His blond wavy hair\nalmost sparkles, like Pacific surf at night, but his recent panic has\nleft it dangling to one side. His hot blue eyes reveal his curiosity and\nuncertainty about you."
    ],
    "CHARACTER": [
     "3"
    ]
   },
   "contents": [
    "STILES-SHOES"
   ],
   "source": "<OBJECT STILES\n        (DESC \"Mr. Stiles\")\n\t(ADJECTIVE MR RALPH)\n\t(SYNONYM STILES MAN VISITOR ;WRITER STRANGER)\n\t(FLAGS PERSON ;OPENBIT)\n\t(CAPACITY 40)\n\t(ACTION STILES-F)\n\t(DESCFCN STILES-F)\n\t(XDESC \"visitor\")\n\t(TEXT\n\"The young man looks you straight in the eye but says nothing. He looks like a\ngigolo trying to imitate a university professor. His blond wavy hair\nalmost sparkles, like Pacific surf at night, but his recent panic has\nleft it dangling to one side. His hot blue eyes reveal his curiosity and\nuncertainty about you.\")\n\t(CHARACTER 3)>",
   "referencedBy": [
    "I-STILES-ARRIVE",
    "I-DUFFY-ARRIVE",
    "DUFFY-GREETING",
    "I-MEET-DUFFY?",
    "MOVE-PERSON",
    "I-PHONG",
    "I-STILES",
    "ARREST",
    "PHONG-F",
    "LINDER-F",
    "STILES-F",
    "MONICA-F",
    "GLOBAL-DUFFY-F",
    "CORRIDOR-CHECK",
    "THE?",
    "V-PHONE"
   ]
  },
  "GLOBAL-STILES": {
   "name": "GLOBAL-STILES",
   "file": "people.zil",
   "line": 708,
   "endLine": 715,
   "desc": "Mr. Stiles",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "PERSON"
   ],
   "synonyms": [
    "STILES",
    "VISITOR",
    "WRITER",
    "STRANGER"
   ],
   "adjectives": [
    "MR",
    "RALPH"
   ],
   "action": "GLOBAL-PERSON",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "3"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-STILES\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Mr. Stiles\")\n\t(ADJECTIVE MR RALPH)\n\t(SYNONYM STILES VISITOR WRITER STRANGER)\n\t(FLAGS PERSON)\n\t(ACTION GLOBAL-PERSON)\n\t(CHARACTER 3)>",
   "referencedBy": [
    "PHONG-F",
    "LINDER-F",
    "STILES-F",
    "MONICA-F",
    "THE?",
    "V-PHONE"
   ]
  },
  "STILES-SHOES": {
   "name": "STILES-SHOES",
   "file": "people.zil",
   "line": 862,
   "endLine": 868,
   "desc": "pair of Stiles's shoes",
   "ldesc": null,
   "fdesc": null,
   "loc": "STILES",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PAIR",
    "SHOE",
    "SHOES"
   ],
   "adjectives": [
    "STILES",
    "HIS"
   ],
   "action": "STILES-SHOES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT STILES-SHOES\n\t(DESC \"pair of Stiles's shoes\")\n\t(IN STILES)\n\t(ADJECTIVE STILES HIS)\n\t(SYNONYM PAIR SHOE SHOES)\n\t(FLAGS NDESCBIT)\n\t(ACTION STILES-SHOES-F)>",
   "referencedBy": [
    "STILES-F",
    "RANDOM-SHOES-F"
   ]
  },
  "MONICA": {
   "name": "MONICA",
   "file": "people.zil",
   "line": 890,
   "endLine": 905,
   "desc": "Monica",
   "ldesc": null,
   "fdesc": null,
   "loc": "LIVING-ROOM",
   "flags": [
    "PERSON",
    "FEMALE"
   ],
   "synonyms": [
    "MONICA",
    "WOMAN"
   ],
   "adjectives": [
    "YOUNG"
   ],
   "action": "MONICA-F",
   "descfcn": "MONICA-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "40"
    ],
    "XDESC": [
     "young woman"
    ],
    "TEXT": [
     "She is a woman in her mid-twenties. Her grey eyes flash, emphasizing\nher dark waved hair and light but effective make-up. She wears a navy\nRayon blouse, tan slacks, and tan pumps with Cuban heels. She acts as\nthough you were a masher who just gave her a whistle."
    ],
    "CHARACTER": [
     "4"
    ]
   },
   "contents": [
    "MONICA-SHOES",
    "CLOCK-KEY"
   ],
   "source": "<OBJECT MONICA\n\t(IN LIVING-ROOM)\n\t(DESC \"Monica\")\n\t(ADJECTIVE YOUNG)\n\t(SYNONYM MONICA WOMAN)\n\t(FLAGS PERSON FEMALE ;OPENBIT)\n\t(CAPACITY 40)\n\t(ACTION MONICA-F)\n\t(DESCFCN MONICA-F)\n\t(XDESC \"young woman\")\n\t(TEXT \n\"She is a woman in her mid-twenties. Her grey eyes flash, emphasizing\nher dark waved hair and light but effective make-up. She wears a navy\nRayon blouse, tan slacks, and tan pumps with Cuban heels. She acts as\nthough you were a masher who just gave her a whistle.\")\n\t(CHARACTER 4)>",
   "referencedBy": [
    "I-GOTO-LIVING-ROOM",
    "I-LINDER-WELCOME",
    "I-MONICA",
    "I-MONICA-GOES",
    "I-MONICA-RETURN",
    "I-DUFFY-RETURNS",
    "ARREST",
    "PHONG-F",
    "LINDER-F",
    "STILES-F",
    "MONICA-F",
    "I-TUNE-OFF",
    "LIVING-ROOM-F",
    "RADIO-F",
    "HALL-1-F",
    "THE?",
    "HANDCUFFS-F",
    "LIQUOR-F",
    "BED-F",
    "PRE-FIND",
    "V-ALARM"
   ]
  },
  "MONICA-SHOES": {
   "name": "MONICA-SHOES",
   "file": "people.zil",
   "line": 907,
   "endLine": 913,
   "desc": "pair of Monica's shoes",
   "ldesc": null,
   "fdesc": null,
   "loc": "MONICA",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PAIR",
    "SHOE",
    "SHOES"
   ],
   "adjectives": [
    "MONICA",
    "HER"
   ],
   "action": "RANDOM-SHOES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MONICA-SHOES\n\t(DESC \"pair of Monica's shoes\")\n\t(IN MONICA)\n\t(ADJECTIVE MONICA HER)\n\t(SYNONYM PAIR SHOE SHOES)\n\t(FLAGS NDESCBIT)\n\t(ACTION RANDOM-SHOES-F)>",
   "referencedBy": [
    "RANDOM-SHOES-F"
   ]
  },
  "GLOBAL-MONICA": {
   "name": "GLOBAL-MONICA",
   "file": "people.zil",
   "line": 915,
   "endLine": 921,
   "desc": "Monica",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "PERSON",
    "FEMALE"
   ],
   "synonyms": [
    "MONICA"
   ],
   "adjectives": [],
   "action": "GLOBAL-PERSON",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "4"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-MONICA\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Monica\")\n\t(SYNONYM MONICA)\n\t(FLAGS PERSON FEMALE)\n\t(ACTION GLOBAL-PERSON)\n\t(CHARACTER 4)>",
   "referencedBy": [
    "PHONG-F",
    "LINDER-F",
    "STILES-F",
    "MONICA-F",
    "THE?"
   ]
  },
  "CAT": {
   "name": "CAT",
   "file": "people.zil",
   "line": 1389,
   "endLine": 1397,
   "desc": "cat",
   "ldesc": null,
   "fdesc": "A cat is sleeping in the corner.",
   "loc": "OFFICE",
   "flags": [
    "FEMALE"
   ],
   "synonyms": [
    "CAT",
    "FELINE",
    "BEAST",
    "ASTA"
   ],
   "adjectives": [],
   "action": "CAT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The cat is a brown tabby, more bulgy than sleek."
    ],
    "CHARACTER": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT CAT\n\t(IN OFFICE)\n\t(DESC \"cat\")\n\t(FDESC \"A cat is sleeping in the corner.\")\n\t(SYNONYM CAT FELINE BEAST ASTA)\n\t(FLAGS FEMALE)\n\t(ACTION CAT-F)\n\t(TEXT \"The cat is a brown tabby, more bulgy than sleek.\")\n\t(CHARACTER 5)>",
   "referencedBy": [
    "FIRE-SHOT",
    "LINDER-F",
    "MONICA-F",
    "V-ALARM"
   ]
  },
  "GLOBAL-CAT": {
   "name": "GLOBAL-CAT",
   "file": "people.zil",
   "line": 1407,
   "endLine": 1412,
   "desc": "cat",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "FEMALE"
   ],
   "synonyms": [
    "CAT",
    "FELINE",
    "BEAST",
    "ASTA"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-CAT\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"cat\")\n\t(SYNONYM CAT FELINE BEAST ASTA)\n\t(FLAGS FEMALE)\n\t(CHARACTER 5)>",
   "referencedBy": []
  },
  "GLOBAL-TERRY": {
   "name": "GLOBAL-TERRY",
   "file": "people.zil",
   "line": 1449,
   "endLine": 1453,
   "desc": "Terry",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "FEMALE"
   ],
   "synonyms": [
    "TERRY"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-TERRY\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Terry\")\n\t(SYNONYM TERRY)\n\t(FLAGS FEMALE)>",
   "referencedBy": [
    "MONICA-F",
    "THE?",
    "V-PHONE"
   ]
  },
  "GLOBAL-MRS-LINDER": {
   "name": "GLOBAL-MRS-LINDER",
   "file": "people.zil",
   "line": 1455,
   "endLine": 1461,
   "desc": "late Mrs. Linder",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "FEMALE"
   ],
   "synonyms": [
    "LINDER",
    "MOTHER",
    "WIFE",
    "VIRGINIA"
   ],
   "adjectives": [
    "MRS",
    "LATE",
    "YOUR",
    "HER"
   ],
   "action": "GLOBAL-MRS-LINDER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-MRS-LINDER\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"late Mrs. Linder\")\n\t(ADJECTIVE MRS LATE YOUR HER)\n\t(SYNONYM LINDER MOTHER WIFE VIRGINIA)\n\t(FLAGS FEMALE)\n\t(ACTION GLOBAL-MRS-LINDER-F)>",
   "referencedBy": [
    "PHONG-F",
    "LINDER-F",
    "STILES-F",
    "MONICA-F",
    "PRE-ACCUSE"
   ]
  },
  "GLOBAL-DUFFY": {
   "name": "GLOBAL-DUFFY",
   "file": "people.zil",
   "line": 1469,
   "endLine": 1474,
   "desc": "Sergeant Duffy",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "DUFFY",
    "POLICE"
   ],
   "adjectives": [
    "SERGEANT",
    "SGT"
   ],
   "action": "GLOBAL-DUFFY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-DUFFY\n\t(IN GLOBAL-OBJECTS)\n\t(ADJECTIVE SERGEANT SGT)\n\t(SYNONYM DUFFY POLICE)\n\t(DESC \"Sergeant Duffy\")\n\t(ACTION GLOBAL-DUFFY-F)>",
   "referencedBy": [
    "STILES-F",
    "GLOBAL-PERSON",
    "HINT-F",
    "GLOBAL-DUFFY-F",
    "THE?",
    "PRE-ARREST",
    "V-GIVE",
    "V-KNOCK",
    "V-SEARCH-OBJECT-FOR",
    "V-TELL",
    "V-WAIT"
   ]
  },
  "HINT": {
   "name": "HINT",
   "file": "people.zil",
   "line": 1476,
   "endLine": 1480,
   "desc": "hint",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "HINT",
    "HELP"
   ],
   "adjectives": [],
   "action": "HINT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HINT\n\t(DESC \"hint\")\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM HINT HELP)\n\t(ACTION HINT-F)>",
   "referencedBy": [
    "PLAYER-F",
    "GLOBAL-DUFFY-F",
    "COM-CHECK",
    "V-HELP",
    "PRE-TAKE"
   ]
  },
  "ROOMS": {
   "name": "ROOMS",
   "file": "places.zil",
   "line": 28,
   "endLine": 28,
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
   "source": "<OBJECT ROOMS>",
   "referencedBy": [
    "I-LINDER-IN-OFFICE",
    "GWIM",
    "MOBY-FIND",
    "GLOBAL-CHECK",
    "PLAYER-F",
    "TOO-BAD-SIT-HIDE",
    "LINDER-F",
    "META-LOC",
    "GENERIC-CHAIR-F",
    "DESCRIBE-ROOM",
    "FIRSTER",
    "HELD?",
    "ROOM-CHECK",
    "V-THROUGH",
    "PRE-FIND",
    "V-LOOK-DOWN",
    "V-LOOK-UP",
    "V-WALK-TO"
   ]
  },
  "GLOBAL-ROOM": {
   "name": "GLOBAL-ROOM",
   "file": "places.zil",
   "line": 30,
   "endLine": 35,
   "desc": "place",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "ROOM",
    "PLACE",
    "WALL",
    "WALLS"
   ],
   "adjectives": [],
   "action": "GLOBAL-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-ROOM\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ROOM PLACE WALL WALLS)\n\t(DESC \"place\" ;\"room\")\n\t;(GENERIC WALL-F)\n\t(ACTION GLOBAL-ROOM-F)>",
   "referencedBy": [
    "GENERIC-BEDROOM-F",
    "GENERIC-BATHROOM-F",
    "ROOM-CHECK",
    "V-LOOK-INSIDE",
    "PRE-SEARCH-OBJECT-FOR"
   ]
  },
  "WINDOW": {
   "name": "WINDOW",
   "file": "places.zil",
   "line": 65,
   "endLine": 71,
   "desc": "window",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "WINDOWBIT",
    "LOCKED"
   ],
   "synonyms": [
    "WINDOW",
    "PANE",
    "PANES",
    "FRAME"
   ],
   "adjectives": [],
   "action": "WINDOW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-WINDOW-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT WINDOW\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"window\")\n\t(SYNONYM WINDOW PANE PANES FRAME)\n\t(FLAGS NDESCBIT WINDOWBIT LOCKED)\n\t(GENERIC GENERIC-WINDOW-F ;LOCKED-F)\n\t(ACTION WINDOW-F)>",
   "referencedBy": [
    "GENERIC-WINDOW-F",
    "WINDOW-ROOM",
    "OFFICE-WINDOW-F"
   ]
  },
  "SINK": {
   "name": "SINK",
   "file": "places.zil",
   "line": 146,
   "endLine": 150,
   "desc": "sink",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "FURNITURE"
   ],
   "synonyms": [
    "SINK",
    "BASIN",
    "FAUCET",
    "SPIGOT"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SINK\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"sink\")\n\t(SYNONYM SINK BASIN FAUCET SPIGOT)\n\t(FLAGS NDESCBIT FURNITURE)>",
   "referencedBy": [
    "V-LAMP-ON"
   ]
  },
  "TOILET": {
   "name": "TOILET",
   "file": "places.zil",
   "line": 152,
   "endLine": 157,
   "desc": "toilet",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "FURNITURE",
    "SURFACEBIT",
    "VEHBIT"
   ],
   "synonyms": [
    "TOILET"
   ],
   "adjectives": [],
   "action": "TOILET-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TOILET\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"toilet\")\n\t(SYNONYM TOILET)\n\t(FLAGS NDESCBIT FURNITURE SURFACEBIT VEHBIT)\n\t(ACTION TOILET-F)>",
   "referencedBy": []
  },
  "GENERIC-BATHROOM-DOOR": {
   "name": "GENERIC-BATHROOM-DOOR",
   "file": "places.zil",
   "line": 167,
   "endLine": 170,
   "desc": "bathroom door",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "$GNRC"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GENERIC-BATHROOM-DOOR\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"bathroom door\")\n\t(SYNONYM $GNRC)>",
   "referencedBy": [
    "GENERIC-BATH-DOOR-F"
   ]
  },
  "GENERIC-BEDROOM": {
   "name": "GENERIC-BEDROOM",
   "file": "places.zil",
   "line": 183,
   "endLine": 186,
   "desc": "bedroom",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "$GNRC"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GENERIC-BEDROOM\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"bedroom\")\n\t(SYNONYM $GNRC)>",
   "referencedBy": [
    "GENERIC-BEDROOM-F"
   ]
  },
  "GENERIC-BEDROOM-DOOR": {
   "name": "GENERIC-BEDROOM-DOOR",
   "file": "places.zil",
   "line": 197,
   "endLine": 200,
   "desc": "bedroom door",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "$GNRC"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GENERIC-BEDROOM-DOOR\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"bedroom door\")\n\t(SYNONYM $GNRC)>",
   "referencedBy": [
    "GENERIC-BEDROOM-DOOR-F"
   ]
  },
  "GENERIC-BACK-DOOR": {
   "name": "GENERIC-BACK-DOOR",
   "file": "places.zil",
   "line": 212,
   "endLine": 215,
   "desc": "back door",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "$GNRC"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GENERIC-BACK-DOOR\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"back door\")\n\t(SYNONYM $GNRC)>",
   "referencedBy": [
    "GENERIC-BACK-DOOR-F"
   ]
  },
  "GENERIC-BATHROOM": {
   "name": "GENERIC-BATHROOM",
   "file": "places.zil",
   "line": 232,
   "endLine": 235,
   "desc": "bathroom",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "$GNRC"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GENERIC-BATHROOM\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"bathroom\")\n\t(SYNONYM $GNRC)>",
   "referencedBy": [
    "GENERIC-BATHROOM-F"
   ]
  },
  "GLOBAL-HERE": {
   "name": "GLOBAL-HERE",
   "file": "places.zil",
   "line": 274,
   "endLine": 279,
   "desc": "here",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "HERE"
   ],
   "adjectives": [],
   "action": "GLOBAL-HERE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-HERE\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"here\")\n\t(SYNONYM HERE)\n\t(FLAGS NDESCBIT)\n\t(ACTION GLOBAL-HERE-F)>",
   "referencedBy": [
    "GENERIC-BEDROOM-F",
    "GENERIC-BATHROOM-F",
    "ROOM-CHECK",
    "PRE-SEARCH-OBJECT-FOR",
    "V-WAIT-FOR"
   ]
  },
  "KITCHEN-GARDEN": {
   "name": "KITCHEN-GARDEN",
   "file": "places.zil",
   "line": 378,
   "endLine": 383,
   "desc": "kitchen garden",
   "ldesc": null,
   "fdesc": null,
   "loc": "FRONT-YARD",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "GARDEN",
    "VEGETABLE",
    "HERB",
    "HERBS"
   ],
   "adjectives": [
    "KITCHEN"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT KITCHEN-GARDEN\n\t(IN FRONT-YARD)\n\t(ADJECTIVE KITCHEN)\n\t(SYNONYM GARDEN VEGETABLE HERB HERBS)\n\t(DESC \"kitchen garden\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "FRONT-GATE": {
   "name": "FRONT-GATE",
   "file": "places.zil",
   "line": 385,
   "endLine": 391,
   "desc": "front gate",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT"
   ],
   "synonyms": [
    "GATE"
   ],
   "adjectives": [
    "FRONT"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FRONT-GATE \n\t(IN LOCAL-GLOBALS)\n\t(ADJECTIVE FRONT ;GARDEN)\n\t(SYNONYM GATE)\n\t(DESC \"front gate\")\n\t(FLAGS DOORBIT)\n\t;(ACTION HIDE-LOOK-DOOR-F)>",
   "referencedBy": [
    "FRONT-PORCH-F"
   ]
  },
  "DOORBELL": {
   "name": "DOORBELL",
   "file": "places.zil",
   "line": 423,
   "endLine": 429,
   "desc": "door bell",
   "ldesc": null,
   "fdesc": null,
   "loc": "FRONT-PORCH",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BELL",
    "DOORBELL"
   ],
   "adjectives": [
    "DOOR"
   ],
   "action": "DOORBELL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DOORBELL\n\t(DESC \"door bell\")\n\t(ADJECTIVE DOOR)\n\t(SYNONYM BELL DOORBELL)\n\t(IN FRONT-PORCH)\n\t(FLAGS NDESCBIT)\n\t(ACTION DOORBELL-F)>",
   "referencedBy": [
    "PHONG-F",
    "FRONT-PORCH-F",
    "WITNESS",
    "BUTTON-F"
   ]
  },
  "DRIVEWAY-OBJECT": {
   "name": "DRIVEWAY-OBJECT",
   "file": "places.zil",
   "line": 459,
   "endLine": 467,
   "desc": "driveway",
   "ldesc": "The driveway, paved with peastone, runs from the entrance at the south\nend in a curve to a two-car garage at the east end.",
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "DRIVEWAY",
    "WAY"
   ],
   "adjectives": [
    "DRIVE"
   ],
   "action": "DRIVEWAY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DRIVEWAY-OBJECT\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"driveway\")\n\t(LDESC\n\"The driveway, paved with peastone, runs from the entrance at the south\nend in a curve to a two-car garage at the east end.\")\n\t(ADJECTIVE DRIVE)\n\t(SYNONYM DRIVEWAY WAY)\n\t(ACTION DRIVEWAY-F)>",
   "referencedBy": [
    "DRIVEWAY-F"
   ]
  },
  "SIDE-FOOTPRINTS": {
   "name": "SIDE-FOOTPRINTS",
   "file": "places.zil",
   "line": 545,
   "endLine": 553,
   "desc": "set of footprints",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "INVISIBLE"
   ],
   "synonyms": [
    "FOOTPRINTS",
    "PRINTS",
    "SET"
   ],
   "adjectives": [
    "FOOT"
   ],
   "action": "SIDE-FOOTPRINTS-F",
   "descfcn": "SIDE-FOOTPRINTS-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-FOOTPRINTS-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT SIDE-FOOTPRINTS\n\t(IN LOCAL-GLOBALS ;SIDE-YARD)\n\t(DESC \"set of footprints\")\n\t(ADJECTIVE FOOT)\n\t(SYNONYM FOOTPRINTS PRINTS SET)\n\t(FLAGS INVISIBLE)\n\t(GENERIC GENERIC-FOOTPRINTS-F)\n\t(DESCFCN SIDE-FOOTPRINTS-F)\n\t(ACTION SIDE-FOOTPRINTS-F)>",
   "referencedBy": [
    "I-PHONG",
    "STILES-SHOES-F",
    "RANDOM-SHOES-F",
    "SIDE-YARD-F",
    "SIDE-FOOTPRINTS-F",
    "GENERIC-FOOTPRINTS-F",
    "MUDDY-SHOES-F",
    "V-THROUGH",
    "V-PUT"
   ]
  },
  "SIDE-FOOTPRINTS-CAST": {
   "name": "SIDE-FOOTPRINTS-CAST",
   "file": "places.zil",
   "line": 600,
   "endLine": 608,
   "desc": "side-yard cast",
   "ldesc": null,
   "fdesc": null,
   "loc": "LIMBO",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "CAST"
   ],
   "adjectives": [
    "SIDE-YARD",
    "SIDE"
   ],
   "action": "SIDE-FOOTPRINTS-CAST-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "9"
    ],
    "GENERIC": [
     "GENERIC-CAST-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT SIDE-FOOTPRINTS-CAST\n\t(DESC \"side-yard cast\")\n\t(IN LIMBO)\n\t(ADJECTIVE SIDE-YARD SIDE)\n\t(SYNONYM CAST)\n\t(SIZE 9)\n\t(FLAGS TAKEBIT)\n\t(GENERIC GENERIC-CAST-F)\n\t(ACTION SIDE-FOOTPRINTS-CAST-F)>",
   "referencedBy": [
    "STILES-SHOES-F",
    "RANDOM-SHOES-F",
    "SIDE-FOOTPRINTS-F",
    "BACK-FOOTPRINTS-F",
    "MUDDY-SHOES-F"
   ]
  },
  "WOODS": {
   "name": "WOODS",
   "file": "places.zil",
   "line": 642,
   "endLine": 649,
   "desc": "bamboo woods",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "WOODS",
    "FOREST",
    "THICKET"
   ],
   "adjectives": [
    "DENSE",
    "THICK",
    "DARK",
    "BAMBOO"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "Bamboo, thick and tall, screens the entire lot on the east side."
    ]
   },
   "contents": [],
   "source": "<OBJECT WOODS\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"bamboo woods\")\n\t(ADJECTIVE DENSE THICK DARK BAMBOO)\n\t(SYNONYM WOODS FOREST THICKET)\n\t(TEXT\n\"Bamboo, thick and tall, screens the entire lot on the east side.\")\n\t;(ACTION LAKE-F)>",
   "referencedBy": []
  },
  "BACK-GATE": {
   "name": "BACK-GATE",
   "file": "places.zil",
   "line": 651,
   "endLine": 657,
   "desc": "back gate",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE-PATH",
   "flags": [
    "DOORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "GATE"
   ],
   "adjectives": [
    "BACK",
    "OFFICE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BACK-GATE\n\t(IN OFFICE-PATH)\n\t(ADJECTIVE BACK OFFICE)\n\t(SYNONYM GATE)\n\t(DESC \"back gate\")\n\t(FLAGS DOORBIT NDESCBIT)\n\t;(ACTION HIDE-LOOK-DOOR-F)>",
   "referencedBy": [
    "I-STILES-ARRIVE",
    "I-STILES"
   ]
  },
  "BACK-FOOTPRINTS": {
   "name": "BACK-FOOTPRINTS",
   "file": "places.zil",
   "line": 690,
   "endLine": 699,
   "desc": "set of footprints",
   "ldesc": "Fresh foot prints head east.",
   "fdesc": "You notice some fresh foot prints heading east.",
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "INVISIBLE"
   ],
   "synonyms": [
    "FOOTPRINTS",
    "PRINTS",
    "SET"
   ],
   "adjectives": [
    "FOOT"
   ],
   "action": "BACK-FOOTPRINTS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-FOOTPRINTS-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT BACK-FOOTPRINTS\n\t(IN LOCAL-GLOBALS ;OFFICE-PORCH)\n\t(DESC \"set of footprints\")\n\t(ADJECTIVE FOOT)\n\t(SYNONYM FOOTPRINTS PRINTS SET)\n\t(FLAGS INVISIBLE)\n\t(FDESC \"You notice some fresh foot prints heading east.\")\n\t(LDESC \"Fresh foot prints head east.\")\n\t(GENERIC GENERIC-FOOTPRINTS-F)\n\t(ACTION BACK-FOOTPRINTS-F)>",
   "referencedBy": [
    "I-STILES",
    "STILES-SHOES-F",
    "RANDOM-SHOES-F",
    "SIDE-FOOTPRINTS-CAST-F",
    "OFFICE-PORCH-F",
    "BACK-FOOTPRINTS-F",
    "GENERIC-FOOTPRINTS-F",
    "MUDDY-SHOES-F",
    "V-THROUGH",
    "V-PUT"
   ]
  },
  "BACK-FOOTPRINTS-CAST": {
   "name": "BACK-FOOTPRINTS-CAST",
   "file": "places.zil",
   "line": 733,
   "endLine": 741,
   "desc": "back-yard cast",
   "ldesc": null,
   "fdesc": null,
   "loc": "LIMBO",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "CAST"
   ],
   "adjectives": [
    "BACK-YARD",
    "BACK"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "9"
    ],
    "GENERIC": [
     "GENERIC-CAST-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT BACK-FOOTPRINTS-CAST\n\t(DESC \"back-yard cast\")\n\t(IN LIMBO)\n\t(ADJECTIVE BACK-YARD BACK)\n\t(SYNONYM CAST)\n\t(SIZE 9)\n\t(FLAGS TAKEBIT)\n\t(GENERIC GENERIC-CAST-F)\n\t;(ACTION SIDE-FOOTPRINTS-F)>",
   "referencedBy": [
    "STILES-SHOES-F",
    "RANDOM-SHOES-F",
    "SIDE-FOOTPRINTS-F",
    "SIDE-FOOTPRINTS-CAST-F",
    "BACK-FOOTPRINTS-F",
    "MUDDY-SHOES-F"
   ]
  },
  "GENERIC-CAST": {
   "name": "GENERIC-CAST",
   "file": "places.zil",
   "line": 748,
   "endLine": 751,
   "desc": "cast",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "$GNRC"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GENERIC-CAST\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"cast\")\n\t(SYNONYM $GNRC)>",
   "referencedBy": [
    "SIDE-FOOTPRINTS-F",
    "BACK-FOOTPRINTS-F",
    "GENERIC-CAST-F"
   ]
  },
  "OFFICE-WINDOW": {
   "name": "OFFICE-WINDOW",
   "file": "places.zil",
   "line": 753,
   "endLine": 760,
   "desc": "office window",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "WINDOWBIT",
    "AN"
   ],
   "synonyms": [
    "WINDOW",
    "PANE",
    "PANES",
    "FRAME"
   ],
   "adjectives": [
    "OFFICE"
   ],
   "action": "OFFICE-WINDOW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-WINDOW-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT OFFICE-WINDOW\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"office window\")\n\t(ADJECTIVE OFFICE)\n\t(SYNONYM WINDOW PANE PANES FRAME)\n\t(FLAGS WINDOWBIT AN)\n\t(GENERIC GENERIC-WINDOW-F)\n\t(ACTION OFFICE-WINDOW-F)>",
   "referencedBy": [
    "FIRE-SHOT",
    "OFFICE-WINDOW-F",
    "OFFICE-F"
   ]
  },
  "PIECE-OF-WIRE": {
   "name": "PIECE-OF-WIRE",
   "file": "places.zil",
   "line": 811,
   "endLine": 819,
   "desc": "green wire piece",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE",
   "flags": [
    "TRYTAKEBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "WIRE",
    "PIECE"
   ],
   "adjectives": [
    "GREEN",
    "WIRE"
   ],
   "action": "PIECE-OF-WIRE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-WIRE-F"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT PIECE-OF-WIRE\n\t(IN OFFICE)\n\t(DESC \"green wire piece\")\n\t(ADJECTIVE GREEN WIRE)\n\t(SYNONYM WIRE PIECE)\n\t(FLAGS TRYTAKEBIT NDESCBIT)\n\t(GENERIC GENERIC-WIRE-F)\n\t(SIZE 1)\n\t(ACTION PIECE-OF-WIRE-F)>",
   "referencedBy": [
    "I-FINGERPRINT",
    "FIRE-SHOT",
    "DUFFY-HINT",
    "PHONG-F",
    "LINDER-F",
    "MONICA-F",
    "OFFICE-WINDOW-F",
    "SPOOL-OF-WIRE-F",
    "GENERIC-WIRE-F"
   ]
  },
  "PIECE-OF-PUTTY": {
   "name": "PIECE-OF-PUTTY",
   "file": "places.zil",
   "line": 827,
   "endLine": 833,
   "desc": "chunk of putty",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE",
   "flags": [
    "TRYTAKEBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "CHUNK",
    "PUTTY"
   ],
   "adjectives": [],
   "action": "PIECE-OF-PUTTY-F",
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
   "source": "<OBJECT PIECE-OF-PUTTY\n\t(IN OFFICE)\n\t(DESC \"chunk of putty\")\n\t(SYNONYM CHUNK PUTTY)\n\t(FLAGS TRYTAKEBIT NDESCBIT)\n\t(SIZE 1)\n\t(ACTION PIECE-OF-PUTTY-F)>",
   "referencedBy": [
    "I-FINGERPRINT",
    "FIRE-SHOT",
    "PHONG-F",
    "LINDER-F",
    "MONICA-F",
    "OFFICE-WINDOW-F"
   ]
  },
  "OFFICE-BACK-DOOR": {
   "name": "OFFICE-BACK-DOOR",
   "file": "places.zil",
   "line": 839,
   "endLine": 846,
   "desc": "back door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "LOCKED",
    "DOORBIT"
   ],
   "synonyms": [
    "DOOR",
    "LOCK"
   ],
   "adjectives": [
    "BACK",
    "OUTSIDE"
   ],
   "action": "OFFICE-BACK-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-BACK-DOOR-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT OFFICE-BACK-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(ADJECTIVE BACK OUTSIDE)\n\t(SYNONYM DOOR LOCK)\n\t(DESC \"back door\")\n\t(FLAGS LOCKED DOORBIT)\n\t(GENERIC GENERIC-BACK-DOOR-F ;LOCKED-F)\n\t(ACTION OFFICE-BACK-DOOR-F)>",
   "referencedBy": [
    "PHONG-F",
    "LINDER-F",
    "STILES-F",
    "MONICA-F",
    "GENERIC-BACK-DOOR-F",
    "OFFICE-F",
    "HOUSE-F",
    "CORPSE-F",
    "PRE-GIVE",
    "PRE-TAKE",
    "PRE-TAKEOUT"
   ]
  },
  "LAWN": {
   "name": "LAWN",
   "file": "places.zil",
   "line": 877,
   "endLine": 882,
   "desc": "lawn",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "LAWN",
    "GRASS"
   ],
   "adjectives": [
    "GREEN"
   ],
   "action": "LAWN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LAWN\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"lawn\")\n\t(SYNONYM LAWN GRASS)\n\t(ADJECTIVE GREEN)\n\t(ACTION LAWN-F)>",
   "referencedBy": []
  },
  "MONICA-BACK-DOOR": {
   "name": "MONICA-BACK-DOOR",
   "file": "places.zil",
   "line": 888,
   "endLine": 895,
   "desc": "back door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "LOCKED",
    "DOORBIT"
   ],
   "synonyms": [
    "DOOR",
    "LOCK"
   ],
   "adjectives": [
    "BACK",
    "OUTSIDE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-BACK-DOOR-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT MONICA-BACK-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(ADJECTIVE BACK OUTSIDE)\n\t(SYNONYM DOOR LOCK)\n\t(DESC \"back door\")\n\t(FLAGS LOCKED DOORBIT)\n\t(GENERIC GENERIC-BACK-DOOR-F ;LOCKED-F)\n\t;(ACTION BACK-DOOR-F)>",
   "referencedBy": [
    "I-MONICA",
    "PHONG-F",
    "LINDER-F",
    "STILES-F",
    "MONICA-F",
    "GENERIC-BACK-DOOR-F",
    "CAN-HEAR-RECORD?",
    "HOUSE-F",
    "CORPSE-F",
    "PRE-TAKE",
    "PRE-TAKEOUT"
   ]
  },
  "ROCKS": {
   "name": "ROCKS",
   "file": "places.zil",
   "line": 920,
   "endLine": 927,
   "desc": "rocks",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROCK-GARDEN",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "SURFACEBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "ROCKS",
    "ROCK",
    "BOULDER"
   ],
   "adjectives": [
    "SMOOTH",
    "ROUND"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "150"
    ]
   },
   "contents": [],
   "source": "<OBJECT ROCKS\n\t(IN ROCK-GARDEN ;LOCAL-GLOBALS)\n\t(DESC \"rocks\")\n\t(ADJECTIVE SMOOTH ROUND)\n\t(SYNONYM ROCKS ROCK BOULDER)\n\t(FLAGS NDESCBIT CONTBIT SURFACEBIT OPENBIT)\n\t(CAPACITY 150)\n\t;(ACTION ROSE-F)>",
   "referencedBy": []
  },
  "LINDER-BACK-DOOR": {
   "name": "LINDER-BACK-DOOR",
   "file": "places.zil",
   "line": 937,
   "endLine": 944,
   "desc": "back door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "LOCKED",
    "DOORBIT"
   ],
   "synonyms": [
    "DOOR",
    "LOCK"
   ],
   "adjectives": [
    "BACK",
    "OUTSIDE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-BACK-DOOR-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT LINDER-BACK-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM DOOR LOCK)\n\t(ADJECTIVE BACK OUTSIDE)\n\t(DESC \"back door\")\n\t(FLAGS LOCKED DOORBIT)\n\t(GENERIC GENERIC-BACK-DOOR-F ;LOCKED-F)\n\t;(ACTION BACK-DOOR-F)>",
   "referencedBy": [
    "PHONG-F",
    "LINDER-F",
    "STILES-F",
    "MONICA-F",
    "GENERIC-BACK-DOOR-F",
    "HOUSE-F",
    "CORPSE-F",
    "PRE-TAKE",
    "PRE-TAKEOUT"
   ]
  },
  "MONICA-TABLE": {
   "name": "MONICA-TABLE",
   "file": "places.zil",
   "line": 978,
   "endLine": 985,
   "desc": "dressing table",
   "ldesc": null,
   "fdesc": null,
   "loc": "MONICA-ROOM",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "SURFACEBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "TABLE",
    "DESK",
    "BENCH"
   ],
   "adjectives": [
    "DRESSING",
    "WORK"
   ],
   "action": "MONICA-TABLE-F",
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
    "MONICA-TABLE-STUFF"
   ],
   "source": "<OBJECT MONICA-TABLE\n\t(IN MONICA-ROOM)\n\t(ADJECTIVE DRESSING WORK)\n\t(SYNONYM TABLE DESK BENCH)\n\t(DESC \"dressing table\")\n\t(FLAGS NDESCBIT CONTBIT SURFACEBIT OPENBIT)\n\t(CAPACITY 50)\n\t(ACTION MONICA-TABLE-F)>",
   "referencedBy": []
  },
  "MONICA-TABLE-STUFF": {
   "name": "MONICA-TABLE-STUFF",
   "file": "places.zil",
   "line": 1000,
   "endLine": 1005,
   "desc": "stuff on the table",
   "ldesc": null,
   "fdesc": null,
   "loc": "MONICA-TABLE",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "MAKE-UP",
    "STUFF",
    "LETTER",
    "TOOLS"
   ],
   "adjectives": [],
   "action": "CLOSET-STUFF-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MONICA-TABLE-STUFF\n\t(IN MONICA-TABLE)\n\t(SYNONYM MAKE-UP STUFF ;MAKEUP LETTER TOOLS)\n\t(DESC \"stuff on the table\")\n\t(FLAGS NDESCBIT TRYTAKEBIT READBIT)\n\t(ACTION CLOSET-STUFF-F)>",
   "referencedBy": []
  },
  "MOVIE-POSTERS": {
   "name": "MOVIE-POSTERS",
   "file": "places.zil",
   "line": 1011,
   "endLine": 1017,
   "desc": "bunch of movie posters",
   "ldesc": null,
   "fdesc": null,
   "loc": "MONICA-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "POSTER"
   ],
   "adjectives": [
    "MOVIE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "These are posters for many of Clark Gable's movies."
    ]
   },
   "contents": [],
   "source": "<OBJECT MOVIE-POSTERS\n\t(IN MONICA-ROOM)\n\t(DESC \"bunch of movie posters\")\n\t(ADJECTIVE MOVIE)\n\t(SYNONYM POSTER)\n\t(TEXT \"These are posters for many of Clark Gable's movies.\")\n\t(FLAGS NDESCBIT)> ",
   "referencedBy": []
  },
  "BOOK-CASE": {
   "name": "BOOK-CASE",
   "file": "places.zil",
   "line": 1019,
   "endLine": 1025,
   "desc": "book case",
   "ldesc": null,
   "fdesc": null,
   "loc": "MONICA-ROOM",
   "flags": [
    "NDESCBIT",
    "READBIT"
   ],
   "synonyms": [
    "BOOKCASE",
    "CASE",
    "BOOK",
    "BOOKS"
   ],
   "adjectives": [
    "BOOK"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "Good idea! But one important book isn't in the book case."
    ]
   },
   "contents": [],
   "source": "<OBJECT BOOK-CASE\n\t(IN MONICA-ROOM)\n\t(ADJECTIVE BOOK)\n\t(SYNONYM BOOKCASE CASE BOOK BOOKS)\n\t(DESC \"book case\")\n\t(FLAGS NDESCBIT READBIT)\n\t(TEXT \"Good idea! But one important book isn't in the book case.\")>",
   "referencedBy": []
  },
  "RECORDS": {
   "name": "RECORDS",
   "file": "places.zil",
   "line": 1036,
   "endLine": 1041,
   "desc": "record collection",
   "ldesc": null,
   "fdesc": null,
   "loc": "MONICA-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "RECORD",
    "MUSIC"
   ],
   "adjectives": [],
   "action": "RECORDS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RECORDS\n\t(IN MONICA-ROOM)\n\t(DESC \"record collection\")\n\t(SYNONYM RECORD MUSIC)\n\t(FLAGS NDESCBIT)\n\t(ACTION RECORDS-F)>",
   "referencedBy": []
  },
  "MONICA-DOOR": {
   "name": "MONICA-DOOR",
   "file": "places.zil",
   "line": 1084,
   "endLine": 1091,
   "desc": "bedroom door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "BEDROOM"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-BEDROOM-DOOR-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT MONICA-DOOR\n\t(SYNONYM DOOR)\n\t(ADJECTIVE BEDROOM)\n\t(DESC \"bedroom door\")\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS DOORBIT OPENBIT)\n\t(GENERIC GENERIC-BEDROOM-DOOR-F)\n\t;(ACTION HIDE-LOOK-DOOR-F)>",
   "referencedBy": [
    "TRANSFER",
    "I-MONICA",
    "GENERIC-BEDROOM-DOOR-F",
    "CAN-HEAR-RECORD?",
    "HALL-2-F"
   ]
  },
  "MONICA-BATH-DOOR": {
   "name": "MONICA-BATH-DOOR",
   "file": "places.zil",
   "line": 1093,
   "endLine": 1100,
   "desc": "cedar door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "CEDAR",
    "BATH",
    "BATHROOM"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-BATH-DOOR-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT MONICA-BATH-DOOR\n\t(ADJECTIVE CEDAR BATH BATHROOM)\n\t(SYNONYM DOOR)\n\t(DESC \"cedar door\")\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS DOORBIT OPENBIT)\n\t(GENERIC GENERIC-BATH-DOOR-F)\n\t;(ACTION HIDE-LOOK-DOOR-F)>",
   "referencedBy": [
    "I-MONICA",
    "GENERIC-BATH-DOOR-F",
    "CAN-HEAR-RECORD?"
   ]
  },
  "MASTER-BATH-COUNTER": {
   "name": "MASTER-BATH-COUNTER",
   "file": "places.zil",
   "line": 1135,
   "endLine": 1142,
   "desc": "counter",
   "ldesc": null,
   "fdesc": null,
   "loc": "BATHROOM",
   "flags": [
    "NDESCBIT",
    "FURNITURE",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "COUNTER",
    "PULLMAN"
   ],
   "adjectives": [
    "LONG",
    "BATH",
    "BATHROOM"
   ],
   "action": "MASTER-BATH-COUNTER-F",
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
   "source": "<OBJECT MASTER-BATH-COUNTER\n\t(IN BATHROOM)\n\t(DESC \"counter\")\n\t(ADJECTIVE LONG BATH BATHROOM)\n\t(SYNONYM COUNTER PULLMAN)\n\t(FLAGS NDESCBIT FURNITURE SURFACEBIT CONTBIT OPENBIT)\n\t(CAPACITY 50)\n\t(ACTION MASTER-BATH-COUNTER-F)>",
   "referencedBy": []
  },
  "TUB-DOOR": {
   "name": "TUB-DOOR",
   "file": "places.zil",
   "line": 1148,
   "endLine": 1154,
   "desc": "tub door",
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
    "TUB",
    "BATHTUB",
    "BATH"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "\t<OBJECT TUB-DOOR\n\t\t(SYNONYM DOOR)\n\t\t(ADJECTIVE TUB BATHTUB BATH)\n\t\t(DESC \"tub door\")\n\t\t(IN LOCAL-GLOBALS)\n\t\t(FLAGS DOORBIT)\n\t\t;(ACTION HIDE-LOOK-DOOR-F)>",
   "referencedBy": []
  },
  "BATH-WINDOW": {
   "name": "BATH-WINDOW",
   "file": "places.zil",
   "line": 1175,
   "endLine": 1182,
   "desc": "bath window",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "WINDOWBIT"
   ],
   "synonyms": [
    "WINDOW",
    "PANE",
    "PANES",
    "FRAME"
   ],
   "adjectives": [
    "BATH"
   ],
   "action": "WINDOW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-WINDOW-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT BATH-WINDOW\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"bath window\")\n\t(ADJECTIVE BATH)\n\t(SYNONYM WINDOW PANE PANES FRAME)\n\t(GENERIC GENERIC-WINDOW-F)\n\t(ACTION WINDOW-F)\n\t(FLAGS NDESCBIT WINDOWBIT)>",
   "referencedBy": [
    "WINDOW-ROOM"
   ]
  },
  "POTTED-PLANTS": {
   "name": "POTTED-PLANTS",
   "file": "places.zil",
   "line": 1184,
   "endLine": 1189,
   "desc": "potted plants",
   "ldesc": null,
   "fdesc": null,
   "loc": "TUB-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PLANT",
    "PLANTS"
   ],
   "adjectives": [
    "POTTED"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT POTTED-PLANTS\n\t(IN TUB-ROOM)\n\t(DESC \"potted plants\")\n\t(SYNONYM PLANT PLANTS)\n\t(ADJECTIVE POTTED)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "BATHTUB": {
   "name": "BATHTUB",
   "file": "places.zil",
   "line": 1191,
   "endLine": 1197,
   "desc": "bathtub",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "VEHBIT",
    "OPENBIT",
    "CONTBIT",
    "FURNITURE"
   ],
   "synonyms": [
    "TUB",
    "BATHTUB"
   ],
   "adjectives": [
    "BATH"
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
   "contents": [],
   "source": "<OBJECT BATHTUB\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"bathtub\")\n\t(SYNONYM TUB BATHTUB)\n\t(ADJECTIVE BATH)\n\t(FLAGS NDESCBIT VEHBIT OPENBIT CONTBIT FURNITURE)\n\t(CAPACITY 50)>",
   "referencedBy": [
    "GLOBAL-DUFFY-F"
   ]
  },
  "SHOWER": {
   "name": "SHOWER",
   "file": "places.zil",
   "line": 1199,
   "endLine": 1205,
   "desc": "shower",
   "ldesc": null,
   "fdesc": null,
   "loc": "TUB-ROOM",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT",
    "FURNITURE"
   ],
   "synonyms": [
    "SHOWER",
    "HEAD"
   ],
   "adjectives": [
    "SHOWER"
   ],
   "action": "SHOWER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SHOWER\n\t(ADJECTIVE SHOWER)\n\t(SYNONYM SHOWER HEAD)\n\t(DESC \"shower\")\n\t(IN TUB-ROOM ;LOCAL-GLOBALS)\n\t(FLAGS ;CONTBIT NDESCBIT TRYTAKEBIT FURNITURE)\n\t(ACTION SHOWER-F)>",
   "referencedBy": []
  },
  "TOILET-DOOR": {
   "name": "TOILET-DOOR",
   "file": "places.zil",
   "line": 1215,
   "endLine": 1221,
   "desc": "toilet door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "TOILET"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TOILET-DOOR\n\t(SYNONYM DOOR)\n\t(ADJECTIVE TOILET)\n\t(DESC \"toilet door\")\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS DOORBIT OPENBIT)\n\t;(ACTION HIDE-LOOK-DOOR-F)>",
   "referencedBy": [
    "I-MONICA"
   ]
  },
  "LINDER-BATH-DOOR": {
   "name": "LINDER-BATH-DOOR",
   "file": "places.zil",
   "line": 1238,
   "endLine": 1245,
   "desc": "redwood door",
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
    "REDWOOD",
    "BATH",
    "BATHROOM"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-BATH-DOOR-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT LINDER-BATH-DOOR\n\t(ADJECTIVE REDWOOD BATH BATHROOM)\n\t(SYNONYM DOOR)\n\t(DESC \"redwood door\")\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS DOORBIT)\n\t(GENERIC GENERIC-BATH-DOOR-F)\n\t;(ACTION HIDE-LOOK-DOOR-F)>",
   "referencedBy": [
    "GENERIC-BATH-DOOR-F"
   ]
  },
  "LINDER-WINDOW": {
   "name": "LINDER-WINDOW",
   "file": "places.zil",
   "line": 1278,
   "endLine": 1285,
   "desc": "Linder's window",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "WINDOWBIT"
   ],
   "synonyms": [
    "WINDOW",
    "PANE",
    "PANES",
    "FRAME"
   ],
   "adjectives": [
    "LINDER",
    "HIS"
   ],
   "action": "WINDOW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-WINDOW-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT LINDER-WINDOW\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"Linder's window\")\n\t(ADJECTIVE LINDER HIS)\n\t(SYNONYM WINDOW PANE PANES FRAME)\n\t(GENERIC GENERIC-WINDOW-F)\n\t(ACTION WINDOW-F)\n\t(FLAGS NDESCBIT WINDOWBIT)>",
   "referencedBy": [
    "WINDOW-ROOM",
    "THE?"
   ]
  },
  "LINDER-ROOM-STUFF": {
   "name": "LINDER-ROOM-STUFF",
   "file": "places.zil",
   "line": 1287,
   "endLine": 1292,
   "desc": "stuff in the room",
   "ldesc": null,
   "fdesc": null,
   "loc": "LINDER-ROOM",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "CLOTHES",
    "NEWSPAPERS",
    "PAPERS",
    "STUFF"
   ],
   "adjectives": [],
   "action": "CLOSET-STUFF-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LINDER-ROOM-STUFF\n\t(IN LINDER-ROOM)\n\t(SYNONYM CLOTHES NEWSPAPERS PAPERS STUFF)\n\t(DESC \"stuff in the room\")\n\t(FLAGS NDESCBIT TRYTAKEBIT READBIT)\n\t(ACTION CLOSET-STUFF-F)>",
   "referencedBy": []
  },
  "FOUR-POSTER": {
   "name": "FOUR-POSTER",
   "file": "places.zil",
   "line": 1294,
   "endLine": 1301,
   "desc": "four-poster bed",
   "ldesc": null,
   "fdesc": null,
   "loc": "LINDER-ROOM",
   "flags": [
    "NDESCBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT",
    "FURNITURE",
    "VEHBIT"
   ],
   "synonyms": [
    "BED",
    "POSTER",
    "FOUR-POSTER"
   ],
   "adjectives": [
    "FOUR",
    "FOUR-POSTER"
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
   "contents": [],
   "source": "<OBJECT FOUR-POSTER\n\t(IN LINDER-ROOM)\n\t(DESC \"four-poster bed\")\n\t(ADJECTIVE FOUR FOUR-POSTER)\n\t(SYNONYM BED POSTER FOUR-POSTER)\n\t(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT FURNITURE VEHBIT)\n\t(CAPACITY 30)\n\t;(ACTION BED-F)>",
   "referencedBy": []
  },
  "MASTER-BEDROOM-DRESSER": {
   "name": "MASTER-BEDROOM-DRESSER",
   "file": "places.zil",
   "line": 1303,
   "endLine": 1309,
   "desc": "dresser",
   "ldesc": null,
   "fdesc": null,
   "loc": "LINDER-ROOM",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT",
    "FURNITURE"
   ],
   "synonyms": [
    "DRESSER"
   ],
   "adjectives": [],
   "action": "MASTER-BEDROOM-DRESSER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "30"
    ]
   },
   "contents": [],
   "source": "<OBJECT MASTER-BEDROOM-DRESSER\n\t(IN LINDER-ROOM)\n\t(DESC \"dresser\")\n\t(SYNONYM DRESSER)\n\t(FLAGS NDESCBIT CONTBIT OPENBIT FURNITURE)\n\t(CAPACITY 30)\n\t(ACTION MASTER-BEDROOM-DRESSER-F)>",
   "referencedBy": []
  },
  "LINDER-DOOR": {
   "name": "LINDER-DOOR",
   "file": "places.zil",
   "line": 1320,
   "endLine": 1327,
   "desc": "bedroom door",
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
    "BEDROOM"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-BEDROOM-DOOR-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT LINDER-DOOR\n\t(SYNONYM DOOR)\n\t(ADJECTIVE BEDROOM)\n\t(DESC \"bedroom door\")\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS DOORBIT)\n\t(GENERIC GENERIC-BEDROOM-DOOR-F)\n\t;(ACTION HIDE-LOOK-DOOR-F)>",
   "referencedBy": [
    "GENERIC-BEDROOM-DOOR-F",
    "LIVING-ROOM-F",
    "CAN-HEAR-RADIO?"
   ]
  },
  "FIREPLACE": {
   "name": "FIREPLACE",
   "file": "places.zil",
   "line": 1371,
   "endLine": 1376,
   "desc": "fieldstone fireplace",
   "ldesc": null,
   "fdesc": null,
   "loc": "LIVING-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "FIREPLACE"
   ],
   "adjectives": [
    "FIELDS",
    "STONE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FIREPLACE\n\t(IN LIVING-ROOM)\n\t(DESC \"fieldstone fireplace\")\n\t(ADJECTIVE FIELDS STONE ;FIRE)\n\t(SYNONYM FIREPLACE ;PLACE)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "FIRE": {
   "name": "FIRE",
   "file": "places.zil",
   "line": 1378,
   "endLine": 1382,
   "desc": "fire",
   "ldesc": null,
   "fdesc": null,
   "loc": "LIVING-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "FIRE"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FIRE\n\t(IN LIVING-ROOM)\n\t(DESC \"fire\")\n\t(SYNONYM FIRE)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "WOOD-PILE": {
   "name": "WOOD-PILE",
   "file": "places.zil",
   "line": 1384,
   "endLine": 1389,
   "desc": "wood pile",
   "ldesc": null,
   "fdesc": null,
   "loc": "LIVING-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PILE"
   ],
   "adjectives": [
    "WOOD"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WOOD-PILE\n\t(IN LIVING-ROOM)\n\t(DESC \"wood pile\")\n\t(ADJECTIVE WOOD)\n\t(SYNONYM PILE)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "SOFA": {
   "name": "SOFA",
   "file": "places.zil",
   "line": 1391,
   "endLine": 1396,
   "desc": "davenport",
   "ldesc": null,
   "fdesc": null,
   "loc": "LIVING-ROOM",
   "flags": [
    "NDESCBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT",
    "VEHBIT",
    "FURNITURE"
   ],
   "synonyms": [
    "COUCH",
    "SOFA",
    "DAVENPORT",
    "DIVAN"
   ],
   "adjectives": [],
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
   "contents": [],
   "source": "<OBJECT SOFA\n\t(IN LIVING-ROOM)\n\t(DESC \"davenport\")\n\t(SYNONYM COUCH SOFA DAVENPORT DIVAN)\n\t(CAPACITY 30)\n\t(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT VEHBIT FURNITURE)>",
   "referencedBy": [
    "LIVING-ROOM-F"
   ]
  },
  "CLUB-CHAIR": {
   "name": "CLUB-CHAIR",
   "file": "places.zil",
   "line": 1398,
   "endLine": 1404,
   "desc": "club chair",
   "ldesc": null,
   "fdesc": null,
   "loc": "LIVING-ROOM",
   "flags": [
    "NDESCBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT",
    "VEHBIT",
    "FURNITURE"
   ],
   "synonyms": [
    "CHAIR"
   ],
   "adjectives": [
    "CLUB"
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
   "source": "<OBJECT CLUB-CHAIR\n\t(IN LIVING-ROOM)\n\t(DESC \"club chair\")\n\t(ADJECTIVE CLUB)\n\t(SYNONYM CHAIR)\n\t(CAPACITY 20)\n\t(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT VEHBIT FURNITURE)>",
   "referencedBy": []
  },
  "COFFEE-TABLE": {
   "name": "COFFEE-TABLE",
   "file": "places.zil",
   "line": 1406,
   "endLine": 1412,
   "desc": "coffee table",
   "ldesc": null,
   "fdesc": null,
   "loc": "LIVING-ROOM",
   "flags": [
    "NDESCBIT",
    "FURNITURE",
    "CONTBIT",
    "SURFACEBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "TABLE"
   ],
   "adjectives": [
    "COFFEE"
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
   "contents": [],
   "source": "<OBJECT COFFEE-TABLE\n\t(IN LIVING-ROOM)\n\t(DESC \"coffee table\")\n\t(ADJECTIVE COFFEE)\n\t(SYNONYM TABLE)\n\t(FLAGS NDESCBIT FURNITURE CONTBIT SURFACEBIT OPENBIT)\n\t(CAPACITY 50)>",
   "referencedBy": []
  },
  "RADIO": {
   "name": "RADIO",
   "file": "places.zil",
   "line": 1414,
   "endLine": 1424,
   "desc": "radio",
   "ldesc": null,
   "fdesc": null,
   "loc": "LIVING-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "RADIO",
    "VOLUME",
    "MUSIC",
    "PROGRAM"
   ],
   "adjectives": [
    "CONSOLE"
   ],
   "action": "RADIO-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "It's a Stromberg-Carlson triple-range console. The exit in the bottom\nis evidence of the Acoustical Labyrinth inside."
    ]
   },
   "contents": [],
   "source": "<OBJECT RADIO\n\t(IN LIVING-ROOM)\n\t(DESC \"radio\")\n\t;(DESCFCN RADIO-F)\n\t(ADJECTIVE CONSOLE)\n\t(SYNONYM RADIO VOLUME MUSIC PROGRAM ;CONSOLE)\n\t(TEXT\n\"It's a Stromberg-Carlson triple-range console. The exit in the bottom\nis evidence of the Acoustical Labyrinth inside.\")\n\t(FLAGS NDESCBIT)\n\t(ACTION RADIO-F)>",
   "referencedBy": []
  },
  "LIQUOR-CABINET": {
   "name": "LIQUOR-CABINET",
   "file": "places.zil",
   "line": 1524,
   "endLine": 1530,
   "desc": "liquor cabinet",
   "ldesc": null,
   "fdesc": null,
   "loc": "LIVING-ROOM",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "CABINET"
   ],
   "adjectives": [
    "LIQUOR"
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
    "SCOTCH",
    "BOURBON"
   ],
   "source": "<OBJECT LIQUOR-CABINET\n\t(IN LIVING-ROOM)\n\t(DESC \"liquor cabinet\")\n\t(ADJECTIVE LIQUOR)\n\t(SYNONYM CABINET)\n\t(FLAGS NDESCBIT CONTBIT SEARCHBIT)\n\t(CAPACITY 20)>",
   "referencedBy": []
  },
  "LIVING-DINING-DOOR": {
   "name": "LIVING-DINING-DOOR",
   "file": "places.zil",
   "line": 1532,
   "endLine": 1538,
   "desc": "double door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "DOUBLE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LIVING-DINING-DOOR\n\t(ADJECTIVE DOUBLE)\n\t(SYNONYM DOOR)\n\t(DESC \"double door\")\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS DOORBIT OPENBIT)\n\t;(ACTION HIDE-LOOK-DOOR-F)>",
   "referencedBy": [
    "CAN-HEAR-RADIO?"
   ]
  },
  "DINING-ROOM-TABLE": {
   "name": "DINING-ROOM-TABLE",
   "file": "places.zil",
   "line": 1561,
   "endLine": 1567,
   "desc": "dining table",
   "ldesc": null,
   "fdesc": null,
   "loc": "DINING-ROOM",
   "flags": [
    "NDESCBIT",
    "FURNITURE",
    "CONTBIT",
    "SURFACEBIT",
    "OPENBIT",
    "VEHBIT"
   ],
   "synonyms": [
    "TABLE"
   ],
   "adjectives": [
    "LONG",
    "DINING"
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
   "contents": [],
   "source": "<OBJECT DINING-ROOM-TABLE\n\t(IN DINING-ROOM)\n\t(DESC \"dining table\")\n\t(ADJECTIVE LONG DINING)\n\t(SYNONYM TABLE)\n\t(FLAGS NDESCBIT FURNITURE CONTBIT SURFACEBIT OPENBIT VEHBIT)\n\t(CAPACITY 50)>",
   "referencedBy": []
  },
  "DINING-ROOM-BENCH": {
   "name": "DINING-ROOM-BENCH",
   "file": "places.zil",
   "line": 1569,
   "endLine": 1575,
   "desc": "dining bench",
   "ldesc": null,
   "fdesc": null,
   "loc": "DINING-ROOM",
   "flags": [
    "NDESCBIT",
    "FURNITURE",
    "CONTBIT",
    "SURFACEBIT",
    "OPENBIT",
    "VEHBIT"
   ],
   "synonyms": [
    "BENCH",
    "BENCHES"
   ],
   "adjectives": [
    "DINING"
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
   "contents": [],
   "source": "<OBJECT DINING-ROOM-BENCH\n\t(IN DINING-ROOM)\n\t(DESC \"dining bench\")\n\t(ADJECTIVE DINING)\n\t(SYNONYM BENCH BENCHES)\n\t(FLAGS NDESCBIT FURNITURE CONTBIT SURFACEBIT OPENBIT VEHBIT)\n\t(CAPACITY 50)>",
   "referencedBy": []
  },
  "DINING-DOOR": {
   "name": "DINING-DOOR",
   "file": "places.zil",
   "line": 1577,
   "endLine": 1584,
   "desc": "French door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "LOCKED",
    "DOORBIT"
   ],
   "synonyms": [
    "DOOR",
    "LOCK"
   ],
   "adjectives": [
    "DINING",
    "ROOM",
    "FRENCH"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "LOCKED-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT DINING-DOOR\n\t(ADJECTIVE DINING ROOM FRENCH)\n\t(SYNONYM DOOR LOCK)\n\t(DESC \"French door\")\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS LOCKED DOORBIT)\n\t(GENERIC LOCKED-F)\n\t;(ACTION HIDE-LOOK-DOOR-F)>",
   "referencedBy": [
    "LOCKED-F",
    "CAN-HEAR-RADIO?",
    "HOUSE-F"
   ]
  },
  "KITCHEN-DINING-DOOR": {
   "name": "KITCHEN-DINING-DOOR",
   "file": "places.zil",
   "line": 1586,
   "endLine": 1592,
   "desc": "swinging door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "SWINGING"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT KITCHEN-DINING-DOOR\n\t(ADJECTIVE SWINGING)\n\t(SYNONYM DOOR)\n\t(DESC \"swinging door\")\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS DOORBIT OPENBIT)\n\t;(ACTION HIDE-LOOK-DOOR-F)>",
   "referencedBy": [
    "CAN-HEAR-RADIO?"
   ]
  },
  "KITCHEN-WINDOW": {
   "name": "KITCHEN-WINDOW",
   "file": "places.zil",
   "line": 1611,
   "endLine": 1618,
   "desc": "kitchen window",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "WINDOWBIT"
   ],
   "synonyms": [
    "WINDOW",
    "PANE",
    "PANES",
    "FRAME"
   ],
   "adjectives": [
    "KITCHEN"
   ],
   "action": "WINDOW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-WINDOW-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT KITCHEN-WINDOW\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"kitchen window\")\n\t(ADJECTIVE KITCHEN)\n\t(SYNONYM WINDOW PANE PANES FRAME)\n\t(FLAGS NDESCBIT WINDOWBIT)\n\t(GENERIC GENERIC-WINDOW-F)\n\t(ACTION WINDOW-F)>",
   "referencedBy": [
    "WINDOW-ROOM"
   ]
  },
  "K-CABINETS": {
   "name": "K-CABINETS",
   "file": "places.zil",
   "line": 1620,
   "endLine": 1626,
   "desc": "cabinet",
   "ldesc": null,
   "fdesc": null,
   "loc": "KITCHEN",
   "flags": [
    "NDESCBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "CABINET"
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
    "SILVERWARE",
    "GLASSES",
    "CHINA"
   ],
   "source": "<OBJECT K-CABINETS\n\t(IN KITCHEN)\n\t(DESC \"cabinet\")\n\t(SYNONYM CABINET)\n\t(FLAGS NDESCBIT CONTBIT)\n\t(CAPACITY 50)\n\t;(ACTION K-CABINETS-F)>",
   "referencedBy": []
  },
  "SILVERWARE": {
   "name": "SILVERWARE",
   "file": "places.zil",
   "line": 1628,
   "endLine": 1633,
   "desc": "set of silverware",
   "ldesc": null,
   "fdesc": null,
   "loc": "K-CABINETS",
   "flags": [
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "SILVER",
    "SET"
   ],
   "adjectives": [],
   "action": "SILVERWARE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SILVERWARE\n\t(IN K-CABINETS)\n\t(DESC \"set of silverware\")\n\t(SYNONYM SILVER SET)\n\t(FLAGS TRYTAKEBIT)\n\t(ACTION SILVERWARE-F)>",
   "referencedBy": []
  },
  "GLASSES": {
   "name": "GLASSES",
   "file": "places.zil",
   "line": 1648,
   "endLine": 1653,
   "desc": "glass collection",
   "ldesc": null,
   "fdesc": null,
   "loc": "K-CABINETS",
   "flags": [
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "GLASS",
    "GLASSES"
   ],
   "adjectives": [],
   "action": "SILVERWARE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLASSES\n\t(IN K-CABINETS)\n\t(DESC \"glass collection\")\n\t(SYNONYM GLASS GLASSES)\n\t(FLAGS TRYTAKEBIT)\n\t(ACTION SILVERWARE-F)>",
   "referencedBy": []
  },
  "CHINA": {
   "name": "CHINA",
   "file": "places.zil",
   "line": 1660,
   "endLine": 1665,
   "desc": "set of china",
   "ldesc": null,
   "fdesc": null,
   "loc": "K-CABINETS",
   "flags": [
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "CHINA",
    "SET"
   ],
   "adjectives": [],
   "action": "SILVERWARE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CHINA\n\t(IN K-CABINETS)\n\t(SYNONYM CHINA SET)\n\t(DESC \"set of china\")\n\t(FLAGS TRYTAKEBIT)\n\t(ACTION SILVERWARE-F)>",
   "referencedBy": []
  },
  "K-CUPBOARD": {
   "name": "K-CUPBOARD",
   "file": "places.zil",
   "line": 1685,
   "endLine": 1691,
   "desc": "cupboard",
   "ldesc": null,
   "fdesc": null,
   "loc": "KITCHEN",
   "flags": [
    "NDESCBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "CUPBOARD"
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
    "FOODS"
   ],
   "source": "<OBJECT K-CUPBOARD\n\t(IN KITCHEN)\n\t(DESC \"cupboard\")\n\t(SYNONYM CUPBOARD)\n\t(FLAGS NDESCBIT CONTBIT)\n\t(CAPACITY 50)\n\t;(ACTION K-CABINETS-F)>",
   "referencedBy": []
  },
  "FOODS": {
   "name": "FOODS",
   "file": "places.zil",
   "line": 1693,
   "endLine": 1699,
   "desc": "bunch of canned food",
   "ldesc": null,
   "fdesc": null,
   "loc": "K-CUPBOARD",
   "flags": [
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "FOOD",
    "FOODS",
    "BUNCH"
   ],
   "adjectives": [
    "CANNED"
   ],
   "action": "FOODS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FOODS\n\t(IN K-CUPBOARD) \n\t(DESC \"bunch of canned food\")\n\t(ADJECTIVE ;DRIED CANNED ;PACKAGED)\n\t(SYNONYM FOOD FOODS BUNCH)\n\t(FLAGS TRYTAKEBIT)\n\t(ACTION FOODS-F)>",
   "referencedBy": []
  },
  "K-CLOCK": {
   "name": "K-CLOCK",
   "file": "places.zil",
   "line": 1706,
   "endLine": 1713,
   "desc": "kitchen clock",
   "ldesc": null,
   "fdesc": null,
   "loc": "KITCHEN",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "CLOCK"
   ],
   "adjectives": [
    "KITCHEN"
   ],
   "action": "K-CLOCK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT K-CLOCK\n\t(IN KITCHEN)\n\t(ADJECTIVE KITCHEN)\n\t(SYNONYM CLOCK)\n\t(DESC \"kitchen clock\")\n\t(FLAGS NDESCBIT)\n\t;(SIZE 4)\n\t(ACTION K-CLOCK-F)>",
   "referencedBy": []
  },
  "REFRIGERATOR": {
   "name": "REFRIGERATOR",
   "file": "places.zil",
   "line": 1723,
   "endLine": 1730,
   "desc": "refrigerator",
   "ldesc": null,
   "fdesc": null,
   "loc": "KITCHEN",
   "flags": [
    "NDESCBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "APPLIANCE",
    "REFRIGERATOR",
    "FRIDGE"
   ],
   "adjectives": [
    "ELECTRIC"
   ],
   "action": "APPLIANCE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "22"
    ]
   },
   "contents": [
    "COLD-FOODS"
   ],
   "source": "<OBJECT REFRIGERATOR\n\t(IN KITCHEN)\n\t(DESC \"refrigerator\")\n\t(ADJECTIVE ELECTRIC)\n\t(SYNONYM APPLIANCE REFRIGERATOR FRIDGE ;MIXER)\n\t(FLAGS NDESCBIT CONTBIT)\n\t(CAPACITY 22)\n\t(ACTION APPLIANCE-F)>",
   "referencedBy": []
  },
  "COLD-FOODS": {
   "name": "COLD-FOODS",
   "file": "places.zil",
   "line": 1732,
   "endLine": 1738,
   "desc": "bunch of cold food",
   "ldesc": null,
   "fdesc": null,
   "loc": "REFRIGERATOR",
   "flags": [
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "FOOD",
    "FOODS",
    "BUNCH"
   ],
   "adjectives": [
    "COLD"
   ],
   "action": "FOODS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT COLD-FOODS\n\t(IN REFRIGERATOR) \n\t(DESC \"bunch of cold food\")\n\t(ADJECTIVE COLD)\n\t(SYNONYM FOOD FOODS BUNCH)\n\t(FLAGS TRYTAKEBIT)\n\t(ACTION FOODS-F)>",
   "referencedBy": []
  },
  "RANGE": {
   "name": "RANGE",
   "file": "places.zil",
   "line": 1740,
   "endLine": 1746,
   "desc": "range",
   "ldesc": null,
   "fdesc": null,
   "loc": "KITCHEN",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "RANGE"
   ],
   "adjectives": [
    "ELECTRIC"
   ],
   "action": "APPLIANCE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RANGE\n\t(IN KITCHEN)\n\t(DESC \"range\")\n\t(ADJECTIVE ELECTRIC)\n\t(SYNONYM RANGE)\n\t(FLAGS NDESCBIT ;DUPLICATE)\n\t(ACTION APPLIANCE-F)>",
   "referencedBy": []
  },
  "HOOD": {
   "name": "HOOD",
   "file": "places.zil",
   "line": 1748,
   "endLine": 1754,
   "desc": "range hood",
   "ldesc": null,
   "fdesc": null,
   "loc": "KITCHEN",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "HOOD"
   ],
   "adjectives": [
    "ELECTRIC",
    "RANGE"
   ],
   "action": "APPLIANCE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HOOD\n\t(IN KITCHEN)\n\t(DESC \"range hood\")\n\t(ADJECTIVE ELECTRIC RANGE)\n\t(SYNONYM HOOD)\n\t(FLAGS NDESCBIT)\n\t(ACTION APPLIANCE-F)>",
   "referencedBy": []
  },
  "MIXER": {
   "name": "MIXER",
   "file": "places.zil",
   "line": 1756,
   "endLine": 1762,
   "desc": "mixer",
   "ldesc": null,
   "fdesc": null,
   "loc": "KITCHEN",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "MIXER"
   ],
   "adjectives": [
    "ELECTRIC"
   ],
   "action": "APPLIANCE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MIXER\n\t(IN KITCHEN)\n\t(DESC \"mixer\")\n\t(ADJECTIVE ELECTRIC)\n\t(SYNONYM MIXER)\n\t(FLAGS NDESCBIT)\n\t(ACTION APPLIANCE-F)>",
   "referencedBy": []
  },
  "TOASTER": {
   "name": "TOASTER",
   "file": "places.zil",
   "line": 1764,
   "endLine": 1770,
   "desc": "toaster",
   "ldesc": null,
   "fdesc": null,
   "loc": "KITCHEN",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "TOASTER"
   ],
   "adjectives": [
    "ELECTRIC"
   ],
   "action": "APPLIANCE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TOASTER\n\t(IN KITCHEN)\n\t(DESC \"toaster\")\n\t(ADJECTIVE ELECTRIC)\n\t(SYNONYM TOASTER)\n\t(FLAGS NDESCBIT)\n\t(ACTION APPLIANCE-F)>",
   "referencedBy": []
  },
  "KITCHEN-HALL-DOOR": {
   "name": "KITCHEN-HALL-DOOR",
   "file": "places.zil",
   "line": 1781,
   "endLine": 1787,
   "desc": "kitchen door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "KITCHEN"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT KITCHEN-HALL-DOOR\n\t(ADJECTIVE KITCHEN ;HALL)\n\t(SYNONYM DOOR)\n\t(DESC \"kitchen door\")\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS DOORBIT OPENBIT)\n\t;(ACTION HIDE-LOOK-DOOR-F)>",
   "referencedBy": [
    "CAN-HEAR-RADIO?"
   ]
  },
  "BUTLER-DOOR": {
   "name": "BUTLER-DOOR",
   "file": "places.zil",
   "line": 1846,
   "endLine": 1852,
   "desc": "butler's door",
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
    "BUTLER",
    "HIS"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BUTLER-DOOR\n\t(SYNONYM DOOR)\n\t(ADJECTIVE BUTLER HIS)\n\t(DESC \"butler's door\")\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS DOORBIT)\n\t;(ACTION HIDE-LOOK-DOOR-F)>",
   "referencedBy": [
    "HALL-2-F",
    "BUTLER-ROOM-F"
   ]
  },
  "BUTLER-TABLE": {
   "name": "BUTLER-TABLE",
   "file": "places.zil",
   "line": 1880,
   "endLine": 1886,
   "desc": "end table",
   "ldesc": null,
   "fdesc": null,
   "loc": "BUTLER-ROOM",
   "flags": [
    "NDESCBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT",
    "FURNITURE",
    "AN"
   ],
   "synonyms": [
    "TABLE",
    "TABLES"
   ],
   "adjectives": [
    "BARE",
    "WOOD",
    "WOODEN",
    "END"
   ],
   "action": null,
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
    "RECURSIVE-BOOK"
   ],
   "source": "<OBJECT BUTLER-TABLE\n\t(IN BUTLER-ROOM)\n\t(ADJECTIVE BARE WOOD WOODEN END)\n\t(SYNONYM TABLE TABLES)\n\t(DESC \"end table\")\n\t(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT FURNITURE AN)\n\t(CAPACITY 15)>",
   "referencedBy": []
  },
  "BUTLER-BATH-DOOR": {
   "name": "BUTLER-BATH-DOOR",
   "file": "places.zil",
   "line": 1888,
   "endLine": 1895,
   "desc": "bathroom door",
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
    "BATH",
    "BATHROOM"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-BATH-DOOR-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT BUTLER-BATH-DOOR\n\t(ADJECTIVE ;BUTLER ;HIS BATH BATHROOM)\n\t(SYNONYM DOOR)\n\t(DESC ;\"butler's \" \"bathroom door\")\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS DOORBIT)\n\t(GENERIC GENERIC-BATH-DOOR-F)\n\t;(ACTION HIDE-LOOK-DOOR-F)>",
   "referencedBy": [
    "GENERIC-BATH-DOOR-F",
    "BUTLER-ROOM-F",
    "BUTLER-BATH-F"
   ]
  },
  "BUTLER-WINDOW": {
   "name": "BUTLER-WINDOW",
   "file": "places.zil",
   "line": 1897,
   "endLine": 1904,
   "desc": "bedroom window",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "WINDOWBIT"
   ],
   "synonyms": [
    "WINDOW",
    "PANE",
    "PANES",
    "FRAME"
   ],
   "adjectives": [
    "BUTLER",
    "HIS",
    "BEDROOM",
    "BED",
    "ROOM"
   ],
   "action": "WINDOW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-WINDOW-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT BUTLER-WINDOW\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"bedroom window\")\n\t(SYNONYM WINDOW PANE PANES FRAME)\n\t(ADJECTIVE BUTLER HIS BEDROOM BED ROOM)\n\t(FLAGS NDESCBIT WINDOWBIT)\n\t(GENERIC GENERIC-WINDOW-F)\n\t(ACTION WINDOW-F)>",
   "referencedBy": [
    "WINDOW-ROOM"
   ]
  },
  "FLOWER-ARRANGEMENT": {
   "name": "FLOWER-ARRANGEMENT",
   "file": "places.zil",
   "line": 1977,
   "endLine": 1983,
   "desc": "flower arrangement",
   "ldesc": null,
   "fdesc": null,
   "loc": "ENTRY",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "ARRANGEMENT"
   ],
   "adjectives": [
    "FLOWER"
   ],
   "action": "FLOWER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FLOWER-ARRANGEMENT\n\t(IN ENTRY)\n\t(DESC \"flower arrangement\")\n\t(ADJECTIVE FLOWER)\n\t(SYNONYM ARRANGEMENT)\n\t(FLAGS NDESCBIT)\n\t(ACTION FLOWER-F)>",
   "referencedBy": []
  },
  "SCROLL": {
   "name": "SCROLL",
   "file": "places.zil",
   "line": 1992,
   "endLine": 1999,
   "desc": "scroll",
   "ldesc": "A lovely calligraphed scroll hangs on the wall.",
   "fdesc": null,
   "loc": "ENTRY",
   "flags": [
    "NDESCBIT",
    "READBIT"
   ],
   "synonyms": [
    "SCROLL",
    "SHRINE"
   ],
   "adjectives": [
    "LOVELY",
    "CALLIGRAPHED"
   ],
   "action": "SCROLL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SCROLL\n\t(IN ENTRY)\n\t(DESC \"scroll\")\n\t(LDESC \"A lovely calligraphed scroll hangs on the wall.\")\n\t(ADJECTIVE LOVELY CALLIGRAPHED)\n\t(SYNONYM SCROLL SHRINE)\n\t(FLAGS NDESCBIT READBIT)\n\t(ACTION SCROLL-F)>",
   "referencedBy": []
  },
  "SHOE-PLATFORM": {
   "name": "SHOE-PLATFORM",
   "file": "places.zil",
   "line": 2022,
   "endLine": 2029,
   "desc": "shoe platform",
   "ldesc": null,
   "fdesc": null,
   "loc": "ENTRY",
   "flags": [
    "NDESCBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT",
    "FURNITURE"
   ],
   "synonyms": [
    "PLATFORM"
   ],
   "adjectives": [
    "SHOE"
   ],
   "action": "SHOE-PLATFORM-F",
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
    "OTHER-SHOES",
    "MUDDY-SHOES"
   ],
   "source": "<OBJECT SHOE-PLATFORM\n\t(IN ENTRY)\n\t(DESC \"shoe platform\")\n\t(ADJECTIVE SHOE)\n\t(SYNONYM PLATFORM)\n\t(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT FURNITURE)\n\t(CAPACITY 10)\n\t(ACTION SHOE-PLATFORM-F)>",
   "referencedBy": [
    "SHOE-PLATFORM-F"
   ]
  },
  "OTHER-SHOES": {
   "name": "OTHER-SHOES",
   "file": "places.zil",
   "line": 2041,
   "endLine": 2047,
   "desc": "other shoes",
   "ldesc": null,
   "fdesc": null,
   "loc": "SHOE-PLATFORM",
   "flags": [
    "TRYTAKEBIT",
    "NDESCBIT",
    "AN"
   ],
   "synonyms": [
    "SHOE",
    "SHOES"
   ],
   "adjectives": [
    "OTHER"
   ],
   "action": "OTHER-SHOES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT OTHER-SHOES\n\t(IN SHOE-PLATFORM)\n\t(DESC \"other shoes\")\n\t(ADJECTIVE OTHER)\n\t(SYNONYM SHOE SHOES ;ROW)\n\t(FLAGS TRYTAKEBIT NDESCBIT AN)\n\t(ACTION OTHER-SHOES-F)>",
   "referencedBy": []
  },
  "FRONT-DOOR": {
   "name": "FRONT-DOOR",
   "file": "places.zil",
   "line": 2056,
   "endLine": 2063,
   "desc": "front door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "LOCKED"
   ],
   "synonyms": [
    "DOOR",
    "LOCK"
   ],
   "adjectives": [
    "FRONT"
   ],
   "action": "FRONT-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "LOCKED-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT FRONT-DOOR\n\t(ADJECTIVE FRONT ;MAIN)\n\t(SYNONYM DOOR LOCK)\n\t(DESC \"front door\")\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS DOORBIT LOCKED)\n\t(GENERIC LOCKED-F)\n\t(ACTION FRONT-DOOR-F)>",
   "referencedBy": [
    "WELCOME",
    "I-PHONG-EJECTS",
    "TRANSFER",
    "GO",
    "LOCKED-F",
    "FRONT-PORCH-F",
    "CAN-HEAR-RADIO?",
    "ENTRY-F",
    "FRONT-DOOR-F",
    "HOUSE-F",
    "IKILL"
   ]
  },
  "STORAGE-DOOR": {
   "name": "STORAGE-DOOR",
   "file": "places.zil",
   "line": 2100,
   "endLine": 2106,
   "desc": "storage door",
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
    "STORAGE",
    "CLOSET"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT STORAGE-DOOR\n\t(SYNONYM DOOR)\n\t(ADJECTIVE STORAGE CLOSET)\n\t(DESC \"storage door\")\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS DOORBIT)\n\t;(ACTION HIDE-LOOK-DOOR-F)>",
   "referencedBy": []
  },
  "LINENS": {
   "name": "LINENS",
   "file": "places.zil",
   "line": 2108,
   "endLine": 2113,
   "desc": "linens",
   "ldesc": null,
   "fdesc": null,
   "loc": "STORAGE-CLOSET",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "LINENS",
    "SHEETS",
    "LINEN"
   ],
   "adjectives": [],
   "action": "CLOSET-STUFF-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LINENS\n\t(IN STORAGE-CLOSET)\n\t(DESC \"linens\")\n\t(SYNONYM LINENS SHEETS LINEN)\n\t(FLAGS NDESCBIT)\n\t(ACTION CLOSET-STUFF-F)>",
   "referencedBy": []
  },
  "TOWELS": {
   "name": "TOWELS",
   "file": "places.zil",
   "line": 2115,
   "endLine": 2120,
   "desc": "towel",
   "ldesc": null,
   "fdesc": null,
   "loc": "STORAGE-CLOSET",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "TOWEL",
    "TOWELS"
   ],
   "adjectives": [],
   "action": "CLOSET-STUFF-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TOWELS\n\t(IN STORAGE-CLOSET)\n\t(DESC \"towel\")\n\t(SYNONYM TOWEL TOWELS)\n\t(FLAGS NDESCBIT)\n\t(ACTION CLOSET-STUFF-F)>",
   "referencedBy": []
  },
  "OFFICE-DOOR": {
   "name": "OFFICE-DOOR",
   "file": "places.zil",
   "line": 2148,
   "endLine": 2154,
   "desc": "office door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "AN"
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
   "source": "<OBJECT OFFICE-DOOR\n\t(SYNONYM DOOR)\n\t(ADJECTIVE OFFICE)\n\t(DESC \"office door\")\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS DOORBIT AN)\n\t;(ACTION HIDE-LOOK-DOOR-F)>",
   "referencedBy": [
    "I-LINDER-TO-OFFICE",
    "OFFICE-F"
   ]
  },
  "OFFICE-DESK": {
   "name": "OFFICE-DESK",
   "file": "places.zil",
   "line": 2213,
   "endLine": 2221,
   "desc": "desk",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE",
   "flags": [
    "NDESCBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT",
    "FURNITURE"
   ],
   "synonyms": [
    "DESK"
   ],
   "adjectives": [
    "LARGE",
    "MASSIVE",
    "OFFICE"
   ],
   "action": "OFFICE-DESK-F",
   "descfcn": "OFFICE-DESK-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "25"
    ]
   },
   "contents": [
    "OFFICE-DESK-STUFF",
    "NEWSPAPERS",
    "THREAT-NOTE"
   ],
   "source": "<OBJECT OFFICE-DESK\n\t(IN OFFICE)\n\t(ADJECTIVE LARGE MASSIVE OFFICE)\n\t(SYNONYM DESK)\n\t(DESC \"desk\")\n\t(DESCFCN OFFICE-DESK-F)\n\t(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT FURNITURE)\n\t(ACTION OFFICE-DESK-F)\n\t(CAPACITY 25)>",
   "referencedBy": [
    "OFFICE-DESK-F"
   ]
  },
  "OFFICE-DESK-STUFF": {
   "name": "OFFICE-DESK-STUFF",
   "file": "places.zil",
   "line": 2243,
   "endLine": 2248,
   "desc": "stuff on the desk",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE-DESK",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "PILES",
    "LETTER",
    "SOUVENIR",
    "STUFF"
   ],
   "adjectives": [],
   "action": "CLOSET-STUFF-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT OFFICE-DESK-STUFF\n\t(IN OFFICE-DESK)\n\t(SYNONYM PILES LETTER SOUVENIR STUFF)\n\t(DESC \"stuff on the desk\")\n\t(FLAGS NDESCBIT TRYTAKEBIT READBIT)\n\t(ACTION CLOSET-STUFF-F)>",
   "referencedBy": []
  },
  "NEWSPAPERS": {
   "name": "NEWSPAPERS",
   "file": "places.zil",
   "line": 2250,
   "endLine": 2255,
   "desc": "newspaper",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE-DESK",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "NEWSPAPERS"
   ],
   "adjectives": [],
   "action": "NEWSPAPERS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT NEWSPAPERS\n\t(IN OFFICE-DESK)\n\t(SYNONYM NEWSPAPERS ;PAPERS)\n\t(DESC \"newspaper\")\n\t(FLAGS NDESCBIT TRYTAKEBIT READBIT)\n\t(ACTION NEWSPAPERS-F)>",
   "referencedBy": []
  },
  "CARVED-CHAIR": {
   "name": "CARVED-CHAIR",
   "file": "places.zil",
   "line": 2268,
   "endLine": 2278,
   "desc": "carved chair",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT",
    "VEHBIT",
    "FURNITURE"
   ],
   "synonyms": [
    "CHAIR",
    "THRONE"
   ],
   "adjectives": [
    "CARVED",
    "OFFICE",
    "ORNATE",
    "ARM",
    "LARGE"
   ],
   "action": "CARVED-CHAIR-F",
   "descfcn": "CARVED-CHAIR-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "30"
    ],
    "GENERIC": [
     "GENERIC-CHAIR-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT CARVED-CHAIR\n\t(IN OFFICE)\n\t(DESC \"carved chair\")\n\t(ADJECTIVE CARVED OFFICE ORNATE ARM LARGE)\n\t(SYNONYM CHAIR THRONE)\n\t(FLAGS NDESCBIT TRYTAKEBIT SURFACEBIT CONTBIT OPENBIT\n\t       VEHBIT FURNITURE)\n\t(CAPACITY 30)\n\t(GENERIC GENERIC-CHAIR-F)\n\t(DESCFCN CARVED-CHAIR-F)\n\t(ACTION CARVED-CHAIR-F)>",
   "referencedBy": [
    "I-LINDER-TO-OFFICE",
    "PLAYER-F",
    "LINDER-F",
    "OFFICE-F",
    "CARVED-CHAIR-F"
   ]
  },
  "WOODEN-CHAIR": {
   "name": "WOODEN-CHAIR",
   "file": "places.zil",
   "line": 2339,
   "endLine": 2348,
   "desc": "wooden chair",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT",
    "VEHBIT",
    "FURNITURE"
   ],
   "synonyms": [
    "CHAIR"
   ],
   "adjectives": [
    "SIMPLE",
    "WOODEN",
    "WOOD",
    "CUSTOMER"
   ],
   "action": "WOODEN-CHAIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "20"
    ],
    "GENERIC": [
     "GENERIC-CHAIR-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT WOODEN-CHAIR\n\t(IN OFFICE)\n\t(DESC \"wooden chair\")\n\t(ADJECTIVE SIMPLE WOODEN WOOD CUSTOMER)\n\t(SYNONYM CHAIR)\n\t(FLAGS NDESCBIT TRYTAKEBIT SURFACEBIT CONTBIT OPENBIT\n\t       VEHBIT FURNITURE)\n\t(CAPACITY 20)\n\t(GENERIC GENERIC-CHAIR-F)\n\t(ACTION WOODEN-CHAIR-F)>",
   "referencedBy": [
    "FIRE-SHOT",
    "WOODEN-CHAIR-F"
   ]
  },
  "GENERIC-CHAIR": {
   "name": "GENERIC-CHAIR",
   "file": "places.zil",
   "line": 2360,
   "endLine": 2363,
   "desc": "chair",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "$GNRC"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GENERIC-CHAIR\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"chair\")\n\t(SYNONYM $GNRC)>",
   "referencedBy": [
    "GENERIC-CHAIR-F"
   ]
  },
  "FILE-CABINET": {
   "name": "FILE-CABINET",
   "file": "places.zil",
   "line": 2376,
   "endLine": 2382,
   "desc": "file cabinet",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "FURNITURE"
   ],
   "synonyms": [
    "CABINET"
   ],
   "adjectives": [
    "FILE",
    "OFFICE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "33"
    ]
   },
   "contents": [
    "PAPERS"
   ],
   "source": "<OBJECT FILE-CABINET\n\t\t(IN OFFICE)\n\t\t(DESC \"file cabinet\")\n\t\t(ADJECTIVE FILE OFFICE)\n\t\t(SYNONYM CABINET)\n\t\t(FLAGS NDESCBIT CONTBIT FURNITURE)\n\t\t(CAPACITY 33)>",
   "referencedBy": [
    "PHONG-F",
    "LINDER-F",
    "MONICA-F"
   ]
  },
  "PAPERS": {
   "name": "PAPERS",
   "file": "places.zil",
   "line": 2384,
   "endLine": 2391,
   "desc": "lot of business papers",
   "ldesc": null,
   "fdesc": "The cabinet is filled with a lot of business papers.",
   "loc": "FILE-CABINET",
   "flags": [
    "TRYTAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "LOT",
    "PAPERS",
    "PAPER"
   ],
   "adjectives": [
    "BUSINESS",
    "OFFICE"
   ],
   "action": "PAPERS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PAPERS\n\t(IN FILE-CABINET)\n\t(DESC \"lot of business papers\")\n\t(FDESC \"The cabinet is filled with a lot of business papers.\")\n\t(ADJECTIVE BUSINESS OFFICE)\n\t(SYNONYM LOT PAPERS PAPER)\n\t(FLAGS TRYTAKEBIT READBIT ;BURNBIT ;NDESCBIT)\n\t(ACTION PAPERS-F)>",
   "referencedBy": [
    "LINDER-F",
    "PAPERS-F"
   ]
  },
  "OFFICE-PICTURE": {
   "name": "OFFICE-PICTURE",
   "file": "places.zil",
   "line": 2405,
   "endLine": 2411,
   "desc": "picture",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PICTURE"
   ],
   "adjectives": [
    "FRAMED",
    "WOOD",
    "BLOCK",
    "OFFICE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT OFFICE-PICTURE\n\t(IN OFFICE)\n\t(DESC \"picture\")\n\t(ADJECTIVE FRAMED WOOD BLOCK OFFICE)\n\t(SYNONYM PICTURE)\n\t(FLAGS NDESCBIT)\n\t;(ACTION OFFICE-PICTURE-F)>",
   "referencedBy": []
  },
  "CLOCK": {
   "name": "CLOCK",
   "file": "places.zil",
   "line": 2425,
   "endLine": 2434,
   "desc": "grandfather clock",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "FURNITURE",
    "NDESCBIT",
    "LOCKED",
    "CONTBIT"
   ],
   "synonyms": [
    "CLOCK",
    "CASE",
    "LOCK",
    "DOOR"
   ],
   "adjectives": [
    "TALL",
    "GRANDFATHER",
    "CLOCK"
   ],
   "action": "CLOCK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "LOCKED-F"
    ],
    "SIZE": [
     "99"
    ],
    "CAPACITY": [
     "9"
    ]
   },
   "contents": [
    "INSIDE-GUN"
   ],
   "source": "<OBJECT CLOCK\n\t(IN LOCAL-GLOBALS ;OFFICE)\t;\"So that SHOOT LOCK works on doors.\"\n\t(ADJECTIVE TALL ;CASE GRANDFATHER CLOCK ;OFFICE)\n\t(SYNONYM CLOCK CASE LOCK DOOR)\n\t(DESC \"grandfather clock\")\n\t(FLAGS FURNITURE NDESCBIT LOCKED CONTBIT)\n\t(GENERIC LOCKED-F)\n\t(SIZE 99)\n\t(CAPACITY 9)\n\t(ACTION CLOCK-F)>",
   "referencedBy": [
    "I-MONICA",
    "PLAYER-F",
    "PHONG-F",
    "LINDER-F",
    "MONICA-F",
    "CLOCK-F",
    "KEY-HOLE-F",
    "PRE-UNLOCK"
   ]
  },
  "KEY-HOLE": {
   "name": "KEY-HOLE",
   "file": "places.zil",
   "line": 2494,
   "endLine": 2501,
   "desc": "keyhole",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "KEYHOLE"
   ],
   "adjectives": [],
   "action": "KEY-HOLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT KEY-HOLE\n\t(IN OFFICE)\n\t(DESC \"keyhole\")\n\t;(ADJECTIVE KEY)\n\t(SYNONYM ;HOLE KEYHOLE ;HOLES)\n\t(FLAGS NDESCBIT CONTBIT OPENBIT)\n\t(CAPACITY 1)\n\t(ACTION KEY-HOLE-F)>",
   "referencedBy": []
  },
  "POWDER": {
   "name": "POWDER",
   "file": "places.zil",
   "line": 2521,
   "endLine": 2527,
   "desc": "powder",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "POWDER",
    "GUNPOWDER"
   ],
   "adjectives": [
    "GUN"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT POWDER\t\t;\"Need this for ANALYZE x FOR POWDER\"\n\t(IN GLOBAL-OBJECTS)\n\t(ADJECTIVE ;CLOCK GUN)\n\t(SYNONYM POWDER GUNPOWDER)\n\t(DESC \"powder\")\n\t;(FLAGS INVISIBLE)\n\t;(ACTION POWDER-F)>",
   "referencedBy": [
    "I-FINGERPRINT",
    "PHONG-F",
    "MONICA-F"
   ]
  },
  "CLOCK-POWDER": {
   "name": "CLOCK-POWDER",
   "file": "places.zil",
   "line": 2535,
   "endLine": 2542,
   "desc": "sample of powder",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE",
   "flags": [
    "NDESCBIT",
    "TAKEBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "SAMPLE",
    "POWDER"
   ],
   "adjectives": [
    "CLOCK",
    "GUN"
   ],
   "action": "CLOCK-POWDER-F",
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
   "source": "<OBJECT CLOCK-POWDER\n\t(IN OFFICE)\n\t(ADJECTIVE CLOCK GUN)\n\t(SYNONYM SAMPLE POWDER)\n\t(DESC \"sample of powder\")\n\t(FLAGS NDESCBIT TAKEBIT INVISIBLE)\n\t(SIZE 1)\n\t(ACTION CLOCK-POWDER-F)>",
   "referencedBy": [
    "I-FINGERPRINT",
    "PHONG-F",
    "MONICA-F",
    "CLOCK-F",
    "KEY-HOLE-F",
    "CLOCK-POWDER-F"
   ]
  },
  "CLOCK-WIRES": {
   "name": "CLOCK-WIRES",
   "file": "places.zil",
   "line": 2559,
   "endLine": 2566,
   "desc": "pair of green wires",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PAIR",
    "WIRES"
   ],
   "adjectives": [
    "GREEN"
   ],
   "action": "CLOCK-WIRES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-WIRE-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT CLOCK-WIRES\n\t(IN OFFICE)\n\t(DESC \"pair of green wires\")\n\t(ADJECTIVE GREEN)\n\t(SYNONYM PAIR WIRES)\n\t(FLAGS NDESCBIT)\n\t(GENERIC GENERIC-WIRE-F)\n\t(ACTION CLOCK-WIRES-F)>",
   "referencedBy": [
    "PHONG-F",
    "LINDER-F",
    "MONICA-F",
    "OFFICE-F",
    "GENERIC-WIRE-F"
   ]
  },
  "OFFICE-BUTTON": {
   "name": "OFFICE-BUTTON",
   "file": "places.zil",
   "line": 2581,
   "endLine": 2587,
   "desc": "butler's button",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "BUTLER",
    "HIS",
    "OFFICE"
   ],
   "action": "OFFICE-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT OFFICE-BUTTON\n\t(IN OFFICE)\n\t(ADJECTIVE BUTLER HIS OFFICE)\n\t(SYNONYM BUTTON)\n\t(DESC \"butler's button\")\n\t(FLAGS NDESCBIT)\n\t(ACTION OFFICE-BUTTON-F)>",
   "referencedBy": [
    "PLAYER-F",
    "PHONG-F",
    "LINDER-F",
    "MONICA-F"
   ]
  },
  "LOUNGE": {
   "name": "LOUNGE",
   "file": "places.zil",
   "line": 2614,
   "endLine": 2620,
   "desc": "lounge",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE",
   "flags": [
    "NDESCBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT",
    "FURNITURE",
    "VEHBIT"
   ],
   "synonyms": [
    "LOUNGE"
   ],
   "adjectives": [
    "GREEN",
    "VELVET",
    "LUMPY",
    "OFFICE"
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
   "source": "<OBJECT LOUNGE\n\t(IN OFFICE)\n\t(DESC \"lounge\")\n\t(ADJECTIVE GREEN VELVET LUMPY OFFICE)\n\t(SYNONYM LOUNGE)\n\t(CAPACITY 40)\n\t(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT FURNITURE VEHBIT)>",
   "referencedBy": [
    "FIRE-SHOT",
    "V-HIDE-BEHIND"
   ]
  },
  "GARAGE-DOOR": {
   "name": "GARAGE-DOOR",
   "file": "places.zil",
   "line": 2643,
   "endLine": 2650,
   "desc": "garage door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "LOCKED",
    "DOORBIT"
   ],
   "synonyms": [
    "DOOR",
    "LOCK"
   ],
   "adjectives": [
    "GARAGE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "LOCKED-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT GARAGE-DOOR\n\t(SYNONYM DOOR LOCK)\n\t(ADJECTIVE GARAGE)\n\t(DESC \"garage door\")\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS LOCKED DOORBIT)\n\t(GENERIC LOCKED-F)\n\t;(ACTION BACK-DOOR-F)>",
   "referencedBy": [
    "I-MONICA",
    "IKILL"
   ]
  },
  "LINDER-CAR": {
   "name": "LINDER-CAR",
   "file": "places.zil",
   "line": 2684,
   "endLine": 2693,
   "desc": "blue sedan",
   "ldesc": null,
   "fdesc": null,
   "loc": "GARAGE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "CAR",
    "AUTO",
    "SEDAN",
    "BENTLEY"
   ],
   "adjectives": [
    "DARK",
    "BLUE",
    "LINDER",
    "HIS"
   ],
   "action": "CAR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-CAR-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT LINDER-CAR\n\t(IN GARAGE)\n\t(DESC \"blue sedan\")\n\t;(FDESC \"The other car is a dark blue Bentley 3.5-liter sedan.\")\n\t;(DESCFCN LINDER-CAR-F)\n\t(ADJECTIVE DARK BLUE LINDER HIS)\n\t(SYNONYM CAR AUTO SEDAN BENTLEY)\n\t(FLAGS NDESCBIT ;FURNITURE ;VEHBIT)\n\t(GENERIC GENERIC-CAR-F)\n\t(ACTION CAR-F)>",
   "referencedBy": []
  },
  "MONICA-CAR": {
   "name": "MONICA-CAR",
   "file": "places.zil",
   "line": 2695,
   "endLine": 2704,
   "desc": "red sport car",
   "ldesc": null,
   "fdesc": null,
   "loc": "GARAGE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "CAR",
    "AUTO",
    "CONVERTIBLE",
    "MG"
   ],
   "adjectives": [
    "RED",
    "SPORT",
    "SPORTY",
    "MONICA",
    "HER"
   ],
   "action": "CAR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-CAR-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT MONICA-CAR\n\t(IN GARAGE)\n\t(DESC \"red sport car\")\n\t;(FDESC \"One car is a sporty red MG convertible.\")\n\t;(DESCFCN MONICA-CAR-F)\n\t(ADJECTIVE RED SPORT SPORTY MONICA HER)\n\t(SYNONYM CAR AUTO CONVERTIBLE MG)\n\t(FLAGS NDESCBIT ;FURNITURE)\n\t(GENERIC GENERIC-CAR-F)\n\t(ACTION CAR-F)>",
   "referencedBy": [
    "I-MONICA",
    "I-MONICA-RETURN",
    "GARAGE-F",
    "CAR-F"
   ]
  },
  "CAR-WINDOW": {
   "name": "CAR-WINDOW",
   "file": "places.zil",
   "line": 2719,
   "endLine": 2725,
   "desc": "car window",
   "ldesc": null,
   "fdesc": null,
   "loc": "GARAGE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WINDOW"
   ],
   "adjectives": [
    "CAR"
   ],
   "action": "CAR-WINDOW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CAR-WINDOW\n\t(IN GARAGE)\n\t(DESC \"car window\")\n\t(ADJECTIVE CAR)\n\t(SYNONYM WINDOW)\n\t(FLAGS NDESCBIT)\n\t(ACTION CAR-WINDOW-F)>",
   "referencedBy": [
    "ROOM-CHECK"
   ]
  },
  "GENERIC-CAR": {
   "name": "GENERIC-CAR",
   "file": "places.zil",
   "line": 2741,
   "endLine": 2744,
   "desc": "car",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "$GNRC"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GENERIC-CAR\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"car\")\n\t(SYNONYM $GNRC)>",
   "referencedBy": [
    "PHONG-F",
    "LINDER-F",
    "MONICA-F",
    "GENERIC-CAR-F"
   ]
  },
  "WORKSHOP-DOOR": {
   "name": "WORKSHOP-DOOR",
   "file": "places.zil",
   "line": 2755,
   "endLine": 2762,
   "desc": "workshop door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "LOCKED",
    "DOORBIT"
   ],
   "synonyms": [
    "DOOR",
    "LOCK"
   ],
   "adjectives": [
    "WORKSHOP",
    "WORK",
    "SHOP"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "LOCKED-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT WORKSHOP-DOOR\n\t(SYNONYM DOOR LOCK)\n\t(ADJECTIVE WORKSHOP WORK SHOP)\n\t(DESC \"workshop door\")\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS LOCKED DOORBIT)\n\t(GENERIC LOCKED-F)\n\t;(ACTION HIDE-LOOK-DOOR-F)>",
   "referencedBy": [
    "IKILL"
   ]
  },
  "WORKSHOP-WIRE": {
   "name": "WORKSHOP-WIRE",
   "file": "places.zil",
   "line": 2782,
   "endLine": 2789,
   "desc": "other wire",
   "ldesc": null,
   "fdesc": null,
   "loc": "WORKSHOP",
   "flags": [
    "NDESCBIT",
    "AN"
   ],
   "synonyms": [
    "WIRE",
    "WIRES",
    "SPOOL",
    "SPOOLS"
   ],
   "adjectives": [
    "OTHER",
    "BROWN",
    "RED",
    "ORANGE",
    "YELLOW",
    "BLUE",
    "VIOLET",
    "GREY"
   ],
   "action": "WORKSHOP-WIRE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-WIRE-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT WORKSHOP-WIRE\n\t(IN WORKSHOP)\n\t(DESC \"other wire\")\n\t(ADJECTIVE OTHER BROWN RED ORANGE YELLOW BLUE VIOLET GREY)\n\t(SYNONYM WIRE WIRES SPOOL SPOOLS)\n\t(FLAGS NDESCBIT AN ;DUPLICATE)\n\t(GENERIC GENERIC-WIRE-F)\n\t(ACTION WORKSHOP-WIRE-F)>",
   "referencedBy": [
    "GENERIC-WIRE-F"
   ]
  },
  "SPOOL-OF-WIRE": {
   "name": "SPOOL-OF-WIRE",
   "file": "places.zil",
   "line": 2799,
   "endLine": 2806,
   "desc": "green wire spool",
   "ldesc": null,
   "fdesc": null,
   "loc": "WORKSHOP",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WIRE",
    "SPOOL"
   ],
   "adjectives": [
    "GREEN",
    "WIRE"
   ],
   "action": "SPOOL-OF-WIRE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-WIRE-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT SPOOL-OF-WIRE\n\t(IN WORKSHOP)\n\t(DESC \"green wire spool\")\n\t(ADJECTIVE GREEN WIRE)\n\t(SYNONYM WIRE SPOOL)\n\t(FLAGS NDESCBIT)\n\t(GENERIC GENERIC-WIRE-F)\n\t(ACTION SPOOL-OF-WIRE-F)>",
   "referencedBy": [
    "I-FINGERPRINT",
    "GENERIC-WIRE-F"
   ]
  },
  "GENERIC-GREEN-WIRE": {
   "name": "GENERIC-GREEN-WIRE",
   "file": "places.zil",
   "line": 2820,
   "endLine": 2824,
   "desc": "green wire",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "$GNRC"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GENERIC-GREEN-WIRE\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"green wire\")\n\t;(ADJECTIVE GREEN)\n\t(SYNONYM $GNRC)>",
   "referencedBy": [
    "PHONG-F",
    "LINDER-F",
    "MONICA-F",
    "GENERIC-WIRE-F"
   ]
  },
  "GENERIC-WIRE": {
   "name": "GENERIC-WIRE",
   "file": "places.zil",
   "line": 2826,
   "endLine": 2829,
   "desc": "wire",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "$GNRC"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GENERIC-WIRE\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"wire\")\n\t(SYNONYM $GNRC)>",
   "referencedBy": [
    "PHONG-F",
    "LINDER-F",
    "MONICA-F",
    "GENERIC-WIRE-F"
   ]
  },
  "JUNCTION-BOX": {
   "name": "JUNCTION-BOX",
   "file": "places.zil",
   "line": 2847,
   "endLine": 2853,
   "desc": "junction box",
   "ldesc": null,
   "fdesc": null,
   "loc": "WORKSHOP",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BOX"
   ],
   "adjectives": [
    "JUNCTION"
   ],
   "action": "JUNCTION-BOX-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT JUNCTION-BOX\n\t(IN WORKSHOP)\n\t(ADJECTIVE JUNCTION)\n\t(SYNONYM BOX)\n\t(DESC \"junction box\")\n\t(FLAGS NDESCBIT)\n\t(ACTION JUNCTION-BOX-F)>",
   "referencedBy": []
  },
  "SAW": {
   "name": "SAW",
   "file": "places.zil",
   "line": 2868,
   "endLine": 2873,
   "desc": "saw",
   "ldesc": null,
   "fdesc": null,
   "loc": "WORKSHOP",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "SAW"
   ],
   "adjectives": [],
   "action": "TOOLS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SAW\n\t(IN WORKSHOP)\n\t(SYNONYM SAW)\n\t(DESC \"saw\")\n\t(FLAGS NDESCBIT)\n\t(ACTION TOOLS-F)>",
   "referencedBy": []
  },
  "HAMMER": {
   "name": "HAMMER",
   "file": "places.zil",
   "line": 2875,
   "endLine": 2880,
   "desc": "hammer",
   "ldesc": null,
   "fdesc": null,
   "loc": "WORKSHOP",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "HAMMER"
   ],
   "adjectives": [],
   "action": "TOOLS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HAMMER\n\t(IN WORKSHOP)\n\t(SYNONYM HAMMER)\n\t(DESC \"hammer\")\n\t(FLAGS NDESCBIT)\n\t(ACTION TOOLS-F)>",
   "referencedBy": []
  },
  "ROPE": {
   "name": "ROPE",
   "file": "places.zil",
   "line": 2882,
   "endLine": 2887,
   "desc": "rope",
   "ldesc": null,
   "fdesc": null,
   "loc": "WORKSHOP",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "ROPE"
   ],
   "adjectives": [],
   "action": "TOOLS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ROPE\n\t(IN WORKSHOP)\n\t(SYNONYM ROPE)\n\t(DESC \"rope\")\n\t(FLAGS NDESCBIT)\n\t(ACTION TOOLS-F)>",
   "referencedBy": []
  },
  "SPADE": {
   "name": "SPADE",
   "file": "places.zil",
   "line": 2896,
   "endLine": 2901,
   "desc": "spade",
   "ldesc": null,
   "fdesc": null,
   "loc": "WORKSHOP",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "SPADE"
   ],
   "adjectives": [],
   "action": "TOOLS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SPADE\n\t(IN WORKSHOP)\n\t(SYNONYM SPADE)\n\t(DESC \"spade\")\n\t(FLAGS NDESCBIT)\n\t(ACTION TOOLS-F)>",
   "referencedBy": []
  },
  "HOE": {
   "name": "HOE",
   "file": "places.zil",
   "line": 2903,
   "endLine": 2908,
   "desc": "hoe",
   "ldesc": null,
   "fdesc": null,
   "loc": "WORKSHOP",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "HOE"
   ],
   "adjectives": [],
   "action": "TOOLS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HOE\n\t(IN WORKSHOP)\n\t(SYNONYM HOE)\n\t(DESC \"hoe\")\n\t(FLAGS NDESCBIT)\n\t(ACTION TOOLS-F)>",
   "referencedBy": []
  },
  "RAKE": {
   "name": "RAKE",
   "file": "places.zil",
   "line": 2910,
   "endLine": 2915,
   "desc": "rake",
   "ldesc": null,
   "fdesc": null,
   "loc": "WORKSHOP",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "RAKE"
   ],
   "adjectives": [],
   "action": "TOOLS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RAKE\n\t(IN WORKSHOP)\n\t(SYNONYM RAKE)\n\t(DESC \"rake\")\n\t(FLAGS NDESCBIT)\n\t(ACTION TOOLS-F)>",
   "referencedBy": []
  },
  "HOSE": {
   "name": "HOSE",
   "file": "places.zil",
   "line": 2917,
   "endLine": 2922,
   "desc": "hose",
   "ldesc": null,
   "fdesc": null,
   "loc": "WORKSHOP",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "HOSE"
   ],
   "adjectives": [],
   "action": "TOOLS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HOSE\n\t(IN WORKSHOP)\n\t(SYNONYM HOSE)\n\t(DESC \"hose\")\n\t(FLAGS NDESCBIT)\n\t(ACTION TOOLS-F)>",
   "referencedBy": []
  },
  "WORK-SHELVES": {
   "name": "WORK-SHELVES",
   "file": "places.zil",
   "line": 2934,
   "endLine": 2940,
   "desc": "shelf",
   "ldesc": null,
   "fdesc": null,
   "loc": "WORKSHOP",
   "flags": [
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT",
    "SURFACEBIT"
   ],
   "synonyms": [
    "SHELF",
    "SHELVES"
   ],
   "adjectives": [],
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
   "source": "<OBJECT WORK-SHELVES\n\t(IN WORKSHOP)\n\t(SYNONYM SHELF SHELVES)\n\t(DESC \"shelf\")\n\t(FLAGS NDESCBIT OPENBIT CONTBIT SURFACEBIT)\n\t(CAPACITY 20)\n\t;(ACTION S-SHELVES-F)>",
   "referencedBy": []
  },
  "AIR": {
   "name": "AIR",
   "file": "places.zil",
   "line": 2945,
   "endLine": 2950,
   "desc": "air",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "AN"
   ],
   "synonyms": [
    "AIR",
    "WIND",
    "BREEZE"
   ],
   "adjectives": [],
   "action": "AIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT AIR\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"air\")\n\t(SYNONYM AIR WIND BREEZE)\n\t(FLAGS AN)\n\t(ACTION AIR-F)>",
   "referencedBy": []
  },
  "GLOBAL-OBJECTS": {
   "name": "GLOBAL-OBJECTS",
   "file": "things.zil",
   "line": 4,
   "endLine": 8,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "AN",
    "CONTBIT",
    "DOORBIT",
    "DRINKBIT",
    "FEMALE",
    "FOODBIT",
    "FURNITURE",
    "INVISIBLE",
    "LIGHTBIT",
    "LOCKED",
    "NDESCBIT",
    "ON-NOT-IN",
    "ONBIT",
    "OPENBIT",
    "PERSON",
    "READBIT",
    "RLANDBIT",
    "RMUNGBIT",
    "SEARCHBIT",
    "SURFACEBIT",
    "TAKEBIT",
    "TOOLBIT",
    "TOUCHBIT",
    "TRANSBIT",
    "TRYTAKEBIT",
    "VEHBIT",
    "WEAPONBIT",
    "WINDOWBIT"
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
    "MIDNIGHT",
    "SMALL-INTEGER",
    "MEDIUM-INTEGER",
    "HIM-HER",
    "YOU",
    "GLOBAL-PHONG",
    "GLOBAL-LINDER",
    "GLOBAL-STILES",
    "GLOBAL-MONICA",
    "GLOBAL-CAT",
    "GLOBAL-TERRY",
    "GLOBAL-MRS-LINDER",
    "GLOBAL-DUFFY",
    "HINT",
    "GLOBAL-ROOM",
    "GENERIC-BATHROOM-DOOR",
    "GENERIC-BEDROOM",
    "GENERIC-BEDROOM-DOOR",
    "GENERIC-BACK-DOOR",
    "GENERIC-BATHROOM",
    "GLOBAL-HERE",
    "GENERIC-CAST",
    "GENERIC-CHAIR",
    "POWDER",
    "GENERIC-CAR",
    "GENERIC-GREEN-WIRE",
    "GENERIC-WIRE",
    "AIR",
    "LOCAL-GLOBALS",
    "IT",
    "GROUND",
    "FLOOR",
    "BRASS-LANTERN",
    "MUSIC",
    "DRINK",
    "CIGARETTE",
    "GENERIC-GUN",
    "GLOBAL-SHOT",
    "AUTOPSY",
    "GENERIC-KEY",
    "HANDWRITING",
    "GLOBAL-FINGERPRINTS",
    "GLOBAL-MURDER",
    "GLOBAL-SUICIDE",
    "RANDOM-CRIME",
    "GLOBAL-PTA",
    "DANGER",
    "GLOBAL-WEATHER",
    "CORONER",
    "BUTTON",
    "BLACK-WIRE",
    "WHITE-WIRE",
    "GLOBAL-AFFAIR",
    "GLOBAL-CALL",
    "MONEY",
    "WILL",
    "INTNUM",
    "TUMOR",
    "TODAY",
    "GLOBAL-WARRANT",
    "GLOBAL-WATER",
    "GLOBAL-CAN-OF-WORMS",
    "RANDOM-MEAL",
    "GLOBAL-HOUSE",
    "GLOBAL-FILM"
   ],
   "source": "<OBJECT GLOBAL-OBJECTS\n\t(FLAGS AN CONTBIT DOORBIT DRINKBIT ;DUPLICATE FEMALE FOODBIT FURNITURE\n\t\tINVISIBLE LIGHTBIT LOCKED NDESCBIT ON-NOT-IN ONBIT OPENBIT\n\t\tPERSON READBIT RLANDBIT RMUNGBIT SEARCHBIT SURFACEBIT TAKEBIT\n\tTOOLBIT TOUCHBIT TRANSBIT TRYTAKEBIT VEHBIT WEAPONBIT WINDOWBIT)>",
   "referencedBy": [
    "GLOBAL-CHECK",
    "OBJECT-PAIR-F",
    "PHONG-F",
    "LINDER-F",
    "STILES-F",
    "MONICA-F",
    "GLOBAL-PERSON",
    "META-LOC",
    "GENERIC-WIRE-F",
    "HACK-HACK",
    "HELD?",
    "ROOM-CHECK",
    "V-ANALYZE",
    "V-EAT",
    "V-EXAMINE",
    "PRE-FIND",
    "V-FIND",
    "V-LOOK-UNDER",
    "PRE-PUT",
    "PRE-READ",
    "V-SEARCH-OBJECT-FOR",
    "PRE-TAKE"
   ]
  },
  "LOCAL-GLOBALS": {
   "name": "LOCAL-GLOBALS",
   "file": "things.zil",
   "line": 10,
   "endLine": 12,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "ZZKJLK"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "WINDOW",
    "SINK",
    "TOILET",
    "FRONT-GATE",
    "DRIVEWAY-OBJECT",
    "SIDE-FOOTPRINTS",
    "WOODS",
    "BACK-FOOTPRINTS",
    "OFFICE-WINDOW",
    "OFFICE-BACK-DOOR",
    "LAWN",
    "MONICA-BACK-DOOR",
    "LINDER-BACK-DOOR",
    "MONICA-DOOR",
    "MONICA-BATH-DOOR",
    "TUB-DOOR",
    "BATH-WINDOW",
    "BATHTUB",
    "TOILET-DOOR",
    "LINDER-BATH-DOOR",
    "LINDER-WINDOW",
    "LINDER-DOOR",
    "LIVING-DINING-DOOR",
    "DINING-DOOR",
    "KITCHEN-DINING-DOOR",
    "KITCHEN-WINDOW",
    "KITCHEN-HALL-DOOR",
    "BUTLER-DOOR",
    "BUTLER-BATH-DOOR",
    "BUTLER-WINDOW",
    "FRONT-DOOR",
    "STORAGE-DOOR",
    "OFFICE-DOOR",
    "CLOCK",
    "GARAGE-DOOR",
    "WORKSHOP-DOOR",
    "HOUSE",
    "FENCE",
    "BROKEN-GLASS",
    "TELEPHONE",
    "CHAIR",
    "LAMP",
    "BED",
    "MIRROR",
    "CLOSET",
    "CABINET"
   ],
   "source": "<OBJECT LOCAL-GLOBALS\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ZZKJLK)\t;\"This synonym is necessary - God knows\">",
   "referencedBy": [
    "MOBY-FIND",
    "SEARCH-LIST",
    "META-LOC",
    "ROOM-CHECK",
    "V-LOOK-UNDER",
    "V-WALK-TO"
   ]
  },
  "PSEUDO-OBJECT": {
   "name": "PSEUDO-OBJECT",
   "file": "things.zil",
   "line": 14,
   "endLine": 16,
   "desc": "pseudo",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": "NULL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PSEUDO-OBJECT\n\t(DESC \"pseudo\" ;\"Place holder (MUST BE 6 CHARACTERS!!!!!)\")\n\t(ACTION NULL-F ;\"Place holder\")>",
   "referencedBy": [
    "GLOBAL-CHECK",
    "ROOM-CHECK",
    "V-FIND"
   ]
  },
  "NOT-HERE-OBJECT": {
   "name": "NOT-HERE-OBJECT",
   "file": "things.zil",
   "line": 21,
   "endLine": 23,
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
   "source": "<OBJECT NOT-HERE-OBJECT\n\t(DESC \"such thing\")\n\t(ACTION NOT-HERE-OBJECT-F)>",
   "referencedBy": [
    "MAIN-LOOP-1",
    "PERFORM",
    "GET-OBJECT",
    "ITAKE-CHECK",
    "GENERIC-WINDOW-F",
    "GENERIC-BATH-DOOR-F",
    "GENERIC-BEDROOM-F",
    "GENERIC-BEDROOM-DOOR-F",
    "GENERIC-BACK-DOOR-F",
    "GENERIC-BATHROOM-F",
    "GENERIC-FOOTPRINTS-F",
    "GENERIC-CHAIR-F",
    "GENERIC-CAR-F",
    "GENERIC-WIRE-F",
    "NOT-HERE-OBJECT-F",
    "FIND-NOT-HERE",
    "NOT-HERE-PRINT",
    "GENERIC-GUN-F",
    "GENERIC-KEY-F"
   ]
  },
  "IT": {
   "name": "IT",
   "file": "things.zil",
   "line": 129,
   "endLine": 134,
   "desc": "it",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT",
    "AN"
   ],
   "synonyms": [
    "IT",
    "THEM",
    "THEY"
   ],
   "adjectives": [],
   "action": "IT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT IT\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM IT THEM THEY)\n\t(DESC \"it\")\n\t(FLAGS NDESCBIT AN)\n\t(ACTION IT-F)>",
   "referencedBy": [
    "MAIN-LOOP-1",
    "PERFORM",
    "ITAKE-CHECK",
    "IT-F",
    "THE?",
    "PRE-COMPARE"
   ]
  },
  "RECURSIVE-BOOK": {
   "name": "RECURSIVE-BOOK",
   "file": "things.zil",
   "line": 157,
   "endLine": 165,
   "desc": "mystery book",
   "ldesc": null,
   "fdesc": "A book is sitting on the bed-side table.",
   "loc": "BUTLER-TABLE",
   "flags": [
    "TAKEBIT",
    "READBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "BOOK"
   ],
   "adjectives": [
    "MYSTERY",
    "IMPORTANT"
   ],
   "action": "RECURSIVE-BOOK-F",
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
    "GUN-RECEIPT"
   ],
   "source": "<OBJECT RECURSIVE-BOOK\n\t(IN BUTLER-TABLE)\n\t(DESC \"mystery book\")\n\t(ADJECTIVE MYSTERY IMPORTANT)\n\t(SYNONYM BOOK)\n\t(FDESC \"A book is sitting on the bed-side table.\")\n\t(FLAGS TAKEBIT READBIT CONTBIT)\n\t(CAPACITY 4)\n\t(ACTION RECURSIVE-BOOK-F)>",
   "referencedBy": [
    "I-PHONG",
    "PHONG-F",
    "MONICA-F",
    "GLOBAL-DUFFY-F",
    "RECURSIVE-BOOK-F"
   ]
  },
  "GUN-RECEIPT": {
   "name": "GUN-RECEIPT",
   "file": "things.zil",
   "line": 193,
   "endLine": 200,
   "desc": "gun receipt",
   "ldesc": null,
   "fdesc": null,
   "loc": "RECURSIVE-BOOK",
   "flags": [
    "TAKEBIT",
    "READBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "RECEIPT",
    "PAPER",
    "TICKET",
    "BOOKMARK"
   ],
   "adjectives": [
    "GUN"
   ],
   "action": "GUN-RECEIPT-F",
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
   "source": "<OBJECT GUN-RECEIPT\n\t(IN RECURSIVE-BOOK)\n\t(ADJECTIVE GUN)\n\t(SYNONYM RECEIPT PAPER TICKET BOOKMARK)\n\t(DESC \"gun receipt\")\n\t(FLAGS TAKEBIT READBIT INVISIBLE)\n\t(SIZE 1)\n\t(ACTION GUN-RECEIPT-F)>",
   "referencedBy": [
    "DUFFY-HINT",
    "ARREST",
    "PHONG-F",
    "LINDER-F",
    "MONICA-F",
    "GLOBAL-DUFFY-F",
    "RECURSIVE-BOOK-F"
   ]
  },
  "TELEGRAM": {
   "name": "TELEGRAM",
   "file": "things.zil",
   "line": 220,
   "endLine": 226,
   "desc": "telegram",
   "ldesc": null,
   "fdesc": null,
   "loc": "PLAYER",
   "flags": [
    "TAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "TELEGRAM"
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
     "(You'll find the telegram in your game package.)"
    ]
   },
   "contents": [],
   "source": "<OBJECT TELEGRAM\n\t(IN PLAYER)\n\t(DESC \"telegram\")\n\t(SYNONYM TELEGRAM)\n\t(FLAGS TAKEBIT READBIT)\n\t(SIZE 1)\n\t(TEXT \"(You'll find the telegram in your game package.)\")>",
   "referencedBy": [
    "PHONG-F",
    "LINDER-F",
    "STILES-F",
    "MONICA-F"
   ]
  },
  "MATCHBOOK": {
   "name": "MATCHBOOK",
   "file": "things.zil",
   "line": 228,
   "endLine": 236,
   "desc": "match book",
   "ldesc": null,
   "fdesc": null,
   "loc": "PLAYER",
   "flags": [
    "TAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "MATCHBOOK",
    "BOOK",
    "MATCHES"
   ],
   "adjectives": [
    "MATCH"
   ],
   "action": "MATCHBOOK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "1"
    ],
    "TEXT": [
     "(You'll find the match book in your game package.)"
    ]
   },
   "contents": [],
   "source": "<OBJECT MATCHBOOK\n\t(IN PLAYER)\n\t(DESC \"match book\")\n\t(ADJECTIVE MATCH)\n\t(SYNONYM MATCHBOOK BOOK MATCHES ;HANDWR ;NUMBER)\n\t(FLAGS TAKEBIT READBIT)\n\t(ACTION MATCHBOOK-F)\n\t(SIZE 1)\n\t(TEXT \"(You'll find the match book in your game package.)\")>",
   "referencedBy": [
    "I-FINGERPRINT",
    "PHONG-F",
    "LINDER-F",
    "STILES-F",
    "HANDWRITING-F",
    "V-PHONE"
   ]
  },
  "PISTOL": {
   "name": "PISTOL",
   "file": "things.zil",
   "line": 251,
   "endLine": 257,
   "desc": "snub-nosed Colt",
   "ldesc": null,
   "fdesc": null,
   "loc": "PLAYER",
   "flags": [
    "TAKEBIT",
    "WEAPONBIT"
   ],
   "synonyms": [
    "COLT",
    "PISTOL",
    "GUN",
    "ROSCOE"
   ],
   "adjectives": [
    "SNUB-NOSED"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-GUN-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT PISTOL\n\t(IN PLAYER)\n\t(DESC \"snub-nosed Colt\")\n\t(ADJECTIVE SNUB-NOSED)\n\t(SYNONYM COLT PISTOL GUN ROSCOE)\n\t(GENERIC GENERIC-GUN-F)\n\t(FLAGS TAKEBIT WEAPONBIT)>",
   "referencedBy": [
    "GENERIC-GUN-F",
    "IKILL"
   ]
  },
  "HANDCUFFS": {
   "name": "HANDCUFFS",
   "file": "things.zil",
   "line": 259,
   "endLine": 265,
   "desc": "pair of handcuffs",
   "ldesc": null,
   "fdesc": null,
   "loc": "PLAYER",
   "flags": [
    "TAKEBIT",
    "TOOLBIT"
   ],
   "synonyms": [
    "PAIR",
    "CUFFS",
    "HANDCUFF",
    "NIPPERS"
   ],
   "adjectives": [
    "HAND"
   ],
   "action": "HANDCUFFS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HANDCUFFS\n\t(IN PLAYER)\n\t(DESC \"pair of handcuffs\")\n\t(ADJECTIVE HAND)\n\t(SYNONYM PAIR CUFFS HANDCUFF NIPPERS)\n\t(FLAGS TAKEBIT TOOLBIT)\n\t(ACTION HANDCUFFS-F)>",
   "referencedBy": [
    "MONICA-F",
    "HANDCUFFS-F",
    "V-HANDCUFF",
    "PRE-PUT",
    "PRE-TAKE",
    "V-TIE-WITH"
   ]
  },
  "HOUSE": {
   "name": "HOUSE",
   "file": "things.zil",
   "line": 275,
   "endLine": 281,
   "desc": "house",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "HOUSE"
   ],
   "adjectives": [
    "LINDER"
   ],
   "action": "HOUSE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HOUSE\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"house\")\n\t(SYNONYM HOUSE ;WALL)\n\t(ADJECTIVE LINDER)\n\t;(GENERIC WALL-F)\n\t(ACTION HOUSE-F)>",
   "referencedBy": []
  },
  "FENCE": {
   "name": "FENCE",
   "file": "things.zil",
   "line": 313,
   "endLine": 317,
   "desc": "fence",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "FENCE"
   ],
   "adjectives": [],
   "action": "FENCE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FENCE\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"fence\")\n\t(SYNONYM FENCE)\n\t(ACTION FENCE-F)>",
   "referencedBy": []
  },
  "GROUND": {
   "name": "GROUND",
   "file": "things.zil",
   "line": 332,
   "endLine": 337,
   "desc": "ground",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "GROUND",
    "DIRT",
    "MUD",
    "AREA"
   ],
   "adjectives": [
    "MUDDY"
   ],
   "action": "GROUND-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GROUND\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"ground\")\n\t(ADJECTIVE MUDDY)\n\t(SYNONYM GROUND DIRT MUD ;SOIL AREA)\n\t(ACTION GROUND-F)>",
   "referencedBy": [
    "GROUND-F"
   ]
  },
  "FLOOR": {
   "name": "FLOOR",
   "file": "things.zil",
   "line": 355,
   "endLine": 359,
   "desc": "floor",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "FLOOR",
    "AREA"
   ],
   "adjectives": [],
   "action": "FLOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FLOOR\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"floor\")\n\t(SYNONYM FLOOR AREA)\n\t(ACTION FLOOR-F)>",
   "referencedBy": [
    "FLOOR-F"
   ]
  },
  "BRASS-LANTERN": {
   "name": "BRASS-LANTERN",
   "file": "things.zil",
   "line": 377,
   "endLine": 381,
   "desc": "Brass Lantern",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "LANTERN",
    "RESTAURANT"
   ],
   "adjectives": [
    "BRASS"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BRASS-LANTERN\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Brass Lantern\")\n\t(ADJECTIVE BRASS)\n\t(SYNONYM LANTERN RESTAURANT)>",
   "referencedBy": [
    "PHONG-F",
    "LINDER-F",
    "STILES-F",
    "V-PHONE"
   ]
  },
  "MUSIC": {
   "name": "MUSIC",
   "file": "things.zil",
   "line": 383,
   "endLine": 387,
   "desc": "music",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "MUSIC",
    "PROGRAM"
   ],
   "adjectives": [],
   "action": "MUSIC-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MUSIC\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"music\")\n\t(SYNONYM MUSIC PROGRAM)\n\t(ACTION MUSIC-F)>",
   "referencedBy": []
  },
  "SCOTCH": {
   "name": "SCOTCH",
   "file": "things.zil",
   "line": 397,
   "endLine": 406,
   "desc": "bottle of Scotch",
   "ldesc": null,
   "fdesc": "A half-filled bottle of Teacher's \"Highland Cream\" Scotch Whisky is\nin the cabinet.",
   "loc": "LIQUOR-CABINET",
   "flags": [
    "TAKEBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "BOTTLE",
    "SCOTCH",
    "WHISKY",
    "WHISKEY"
   ],
   "adjectives": [
    "SCOTCH",
    "TEACHER"
   ],
   "action": "LIQUOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "\t<OBJECT SCOTCH\n\t\t(IN LIQUOR-CABINET)\n\t\t(DESC \"bottle of Scotch\")\n\t\t(FDESC\n\"A half-filled bottle of Teacher's \\\"Highland Cream\\\" Scotch Whisky is\nin the cabinet.\")\n\t\t(ADJECTIVE SCOTCH TEACHER)\n\t\t(SYNONYM BOTTLE SCOTCH WHISKY WHISKEY)\n\t\t(FLAGS TAKEBIT CONTBIT)\n\t\t(ACTION LIQUOR-F)>",
   "referencedBy": [
    "LIQUOR-F"
   ]
  },
  "BOURBON": {
   "name": "BOURBON",
   "file": "things.zil",
   "line": 408,
   "endLine": 417,
   "desc": "bottle of Bourbon",
   "ldesc": null,
   "fdesc": "A nearly-empty bottle of \"Jack Daniels\" Bourbon Whisky is in the\ncabinet.",
   "loc": "LIQUOR-CABINET",
   "flags": [
    "TAKEBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "BOTTLE",
    "BOURBON",
    "WHISKY",
    "WHISKEY"
   ],
   "adjectives": [
    "BOURBON",
    "JACK",
    "DANIEL"
   ],
   "action": "LIQUOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "\t<OBJECT BOURBON\n\t\t(IN LIQUOR-CABINET)\n\t\t(DESC \"bottle of Bourbon\")\n\t\t(FDESC\n\"A nearly-empty bottle of \\\"Jack Daniels\\\" Bourbon Whisky is in the\ncabinet.\")\n\t\t(ADJECTIVE BOURBON JACK DANIEL)\n\t\t(SYNONYM BOTTLE BOURBON WHISKY WHISKEY)\n\t\t(FLAGS TAKEBIT CONTBIT)\n\t\t(ACTION LIQUOR-F)>",
   "referencedBy": [
    "LIQUOR-F"
   ]
  },
  "DRINK": {
   "name": "DRINK",
   "file": "things.zil",
   "line": 419,
   "endLine": 424,
   "desc": "drink",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "DRINK",
    "COCKTAIL",
    "BELT"
   ],
   "adjectives": [],
   "action": "LIQUOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DRINK\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"drink\")\n\t(SYNONYM DRINK COCKTAIL BELT)\n\t;(FLAGS TAKEBIT)\n\t(ACTION LIQUOR-F)>",
   "referencedBy": [
    "STANDING-VERB?",
    "LINDER-F",
    "LIQUOR-F",
    "V-EAT",
    "PRE-TAKE"
   ]
  },
  "CIGARETTE": {
   "name": "CIGARETTE",
   "file": "things.zil",
   "line": 474,
   "endLine": 480,
   "desc": "cigarette",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "LIGHTBIT"
   ],
   "synonyms": [
    "CIGARETTE",
    "SMOKE",
    "WEED",
    "CAMEL"
   ],
   "adjectives": [],
   "action": "CIGARETTE-F",
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
   "source": "<OBJECT CIGARETTE\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"cigarette\")\n\t(SYNONYM CIGARETTE SMOKE WEED CAMEL)\n\t(FLAGS LIGHTBIT)\n\t(SIZE 1)\n\t(ACTION CIGARETTE-F)>",
   "referencedBy": [
    "PRE-TAKE"
   ]
  },
  "THREAT-NOTE": {
   "name": "THREAT-NOTE",
   "file": "things.zil",
   "line": 505,
   "endLine": 518,
   "desc": "threatening note",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE-DESK",
   "flags": [
    "TAKEBIT",
    "READBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "NOTE"
   ],
   "adjectives": [
    "HAND",
    "WRITTEN",
    "HAND-WRITTEN",
    "STILES",
    "THREAT"
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
     "The note is written in a spidery hand on fine rag paper. It says:|\n\"Linder --|\nSince Virginia died, I've lost too much sleep because of you and\nyour harrassments. The time has come to put this matter to rest\nonce and for all. I'll be seeing you sooner than you imagine.|\n              -- Stiles\""
    ]
   },
   "contents": [],
   "source": "<OBJECT THREAT-NOTE\n\t(DESC \"threatening note\")\n\t(IN OFFICE-DESK)\n\t(ADJECTIVE HAND WRITTEN HAND-WRITTEN STILES THREAT)\n\t(SYNONYM NOTE ;LETTER ;HANDWR)\n\t(FLAGS TAKEBIT READBIT INVISIBLE)\n\t(SIZE 1)\n\t(TEXT\n\"The note is written in a spidery hand on fine rag paper. It says:|\n\\\"Linder --|\nSince Virginia died, I've lost too much sleep because of you and\nyour harrassments. The time has come to put this matter to rest\nonce and for all. I'll be seeing you sooner than you imagine.|\n              -- Stiles\\\"\")>",
   "referencedBy": [
    "I-FINGERPRINT",
    "I-LINDER-EXPLAIN",
    "PHONG-F",
    "LINDER-F",
    "STILES-F",
    "OFFICE-BACK-DOOR-F",
    "HANDWRITING-F"
   ]
  },
  "BROKEN-GLASS": {
   "name": "BROKEN-GLASS",
   "file": "things.zil",
   "line": 520,
   "endLine": 526,
   "desc": "pile of broken glass",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "INVISIBLE",
    "TRYTAKEBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "PILE",
    "GLASS",
    "FRAGMENT",
    "SHARD"
   ],
   "adjectives": [
    "BROKEN"
   ],
   "action": "BROKEN-GLASS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BROKEN-GLASS\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"pile of broken glass\")\n\t(ADJECTIVE BROKEN)\n\t(SYNONYM PILE GLASS FRAGMENT SHARD)\n\t(FLAGS INVISIBLE TRYTAKEBIT NDESCBIT)\n\t(ACTION BROKEN-GLASS-F)>",
   "referencedBy": [
    "FIRE-SHOT"
   ]
  },
  "BROOM": {
   "name": "BROOM",
   "file": "things.zil",
   "line": 532,
   "endLine": 538,
   "desc": "broom",
   "ldesc": "A broom is standing in the corner.",
   "fdesc": null,
   "loc": "STORAGE-CLOSET",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "BROOM"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BROOM\n\t(IN STORAGE-CLOSET)\n\t(DESC \"broom\")\n\t(LDESC \"A broom is standing in the corner.\")\n\t(SYNONYM BROOM)\n\t(FLAGS TAKEBIT)\n\t;(ACTION BROKEN-GLASS-F)>",
   "referencedBy": [
    "PHONG-F",
    "LINDER-F"
   ]
  },
  "INSIDE-GUN": {
   "name": "INSIDE-GUN",
   "file": "things.zil",
   "line": 540,
   "endLine": 548,
   "desc": "hidden handgun",
   "ldesc": null,
   "fdesc": null,
   "loc": "CLOCK",
   "flags": [
    "TAKEBIT",
    "WEAPONBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "GUN",
    "HANDGUN",
    "PISTOL",
    "HEATER"
   ],
   "adjectives": [
    "NEW",
    "CLOCK",
    "HIDDEN",
    "HAND"
   ],
   "action": "INSIDE-GUN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-GUN-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT INSIDE-GUN\n\t(IN CLOCK)\n\t(DESC \"hidden handgun\")\n\t(ADJECTIVE NEW CLOCK HIDDEN HAND)\n\t(SYNONYM GUN HANDGUN PISTOL HEATER)\n\t(FLAGS TAKEBIT WEAPONBIT INVISIBLE)\n\t;(SIZE 2)\n\t(GENERIC GENERIC-GUN-F)\n\t(ACTION INSIDE-GUN-F)>",
   "referencedBy": [
    "I-FINGERPRINT",
    "I-MONICA",
    "ARREST",
    "STILES-F",
    "MONICA-F",
    "CLOCK-F",
    "IKILL"
   ]
  },
  "OUTSIDE-GUN": {
   "name": "OUTSIDE-GUN",
   "file": "things.zil",
   "line": 550,
   "endLine": 558,
   "desc": "muddy handgun",
   "ldesc": null,
   "fdesc": null,
   "loc": "PHONG",
   "flags": [
    "TAKEBIT",
    "WEAPONBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "GUN",
    "HANDGUN",
    "PISTOL",
    "HEATER"
   ],
   "adjectives": [
    "OLD",
    "MUDDY",
    "HAND"
   ],
   "action": "OUTSIDE-GUN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-GUN-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT OUTSIDE-GUN\n\t(IN PHONG)\n\t(DESC \"muddy handgun\")\n\t(ADJECTIVE OLD MUDDY HAND)\n\t(SYNONYM GUN HANDGUN PISTOL HEATER)\n\t(FLAGS TAKEBIT WEAPONBIT INVISIBLE)\n\t;(SIZE 2)\n\t(GENERIC GENERIC-GUN-F)\n\t(ACTION OUTSIDE-GUN-F)>",
   "referencedBy": [
    "I-FINGERPRINT",
    "I-PHONG",
    "PHONG-F",
    "STILES-F",
    "MONICA-F",
    "INSIDE-GUN-F",
    "V-BRUSH",
    "IKILL"
   ]
  },
  "GENERIC-GUN": {
   "name": "GENERIC-GUN",
   "file": "things.zil",
   "line": 605,
   "endLine": 608,
   "desc": "handgun",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "$GNRC"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GENERIC-GUN\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"handgun\")\n\t(SYNONYM $GNRC)>",
   "referencedBy": [
    "PHONG-F",
    "LINDER-F",
    "STILES-F",
    "MONICA-F",
    "GENERIC-GUN-F"
   ]
  },
  "GLOBAL-SHOT": {
   "name": "GLOBAL-SHOT",
   "file": "things.zil",
   "line": 610,
   "endLine": 615,
   "desc": "shot",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "INVISIBLE"
   ],
   "synonyms": [
    "SHOT",
    "GUNSHOT",
    "SHOOTING",
    "EXPLOSION"
   ],
   "adjectives": [
    "GUN"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-SHOT\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"shot\")\n\t(ADJECTIVE GUN)\n\t(SYNONYM SHOT GUNSHOT SHOOTING EXPLOSION)\n\t(FLAGS INVISIBLE)>",
   "referencedBy": [
    "FIRE-SHOT",
    "PHONG-F",
    "STILES-F"
   ]
  },
  "MEDICAL-REPORT": {
   "name": "MEDICAL-REPORT",
   "file": "things.zil",
   "line": 620,
   "endLine": 630,
   "desc": "medical report",
   "ldesc": null,
   "fdesc": null,
   "loc": "MONICA-ROOM",
   "flags": [
    "TAKEBIT",
    "READBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "REPORT",
    "PAPER"
   ],
   "adjectives": [
    "MEDICAL"
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
     "After sifting through the medical officialese, you realize that the\nreport says that Linder has an advanced stomach tumor, and\nthat his death will come slowly and painfully."
    ]
   },
   "contents": [],
   "source": "<OBJECT MEDICAL-REPORT\n\t(IN MONICA-ROOM)\n\t(DESC \"medical report\")\n\t(ADJECTIVE MEDICAL)\n\t(SYNONYM REPORT PAPER)\n\t(FLAGS TAKEBIT READBIT INVISIBLE)\n\t(SIZE 1)\n\t(TEXT\n\"After sifting through the medical officialese, you realize that the\nreport says that Linder has an advanced stomach tumor, and\nthat his death will come slowly and painfully.\")>",
   "referencedBy": [
    "I-FINGERPRINT",
    "DUFFY-HINT",
    "ARREST",
    "PHONG-F",
    "LINDER-F",
    "STILES-F",
    "MONICA-F",
    "GLOBAL-DUFFY-F",
    "MONICA-TABLE-F"
   ]
  },
  "AUTOPSY": {
   "name": "AUTOPSY",
   "file": "things.zil",
   "line": 632,
   "endLine": 636,
   "desc": "autopsy",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "AN"
   ],
   "synonyms": [
    "AUTOPSY"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT AUTOPSY\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"autopsy\")\n\t(SYNONYM AUTOPSY)\n\t(FLAGS AN)>",
   "referencedBy": [
    "GLOBAL-DUFFY-F"
   ]
  },
  "CLOCK-KEY": {
   "name": "CLOCK-KEY",
   "file": "things.zil",
   "line": 640,
   "endLine": 647,
   "desc": "clock key",
   "ldesc": null,
   "fdesc": null,
   "loc": "MONICA",
   "flags": [
    "TAKEBIT",
    "TOOLBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "KEY"
   ],
   "adjectives": [
    "CLOCK"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-KEY-F"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT CLOCK-KEY\n\t(IN MONICA)\n\t(ADJECTIVE CLOCK)\n\t(SYNONYM KEY)\n\t(DESC \"clock key\")\n\t(FLAGS TAKEBIT ;NDESCBIT TOOLBIT INVISIBLE)\n\t(GENERIC GENERIC-KEY-F)\n\t(SIZE 1)>",
   "referencedBy": [
    "I-MONICA",
    "PHONG-F",
    "MONICA-F",
    "CLOCK-F",
    "PRE-UNLOCK"
   ]
  },
  "PHONG-KEYS": {
   "name": "PHONG-KEYS",
   "file": "things.zil",
   "line": 649,
   "endLine": 656,
   "desc": "set of house keys",
   "ldesc": null,
   "fdesc": null,
   "loc": "PHONG",
   "flags": [
    "TAKEBIT",
    "NDESCBIT",
    "TOOLBIT"
   ],
   "synonyms": [
    "KEY",
    "KEYS",
    "SET"
   ],
   "adjectives": [
    "HOUSE"
   ],
   "action": "PHONG-KEYS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-KEY-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT PHONG-KEYS\n\t(IN PHONG)\n\t(ADJECTIVE ;PHONG HOUSE)\n\t(SYNONYM KEY KEYS SET)\n\t(DESC \"set of house keys\")\n\t(FLAGS TAKEBIT NDESCBIT TOOLBIT)\n\t(GENERIC GENERIC-KEY-F)\n\t(ACTION PHONG-KEYS-F)>",
   "referencedBy": [
    "PHONG-F",
    "TAKE-PHONG-KEYS",
    "MONICA-F",
    "PHONG-KEYS-F",
    "GENERIC-KEY-F",
    "PRE-UNLOCK"
   ]
  },
  "GENERIC-KEY": {
   "name": "GENERIC-KEY",
   "file": "things.zil",
   "line": 681,
   "endLine": 684,
   "desc": "key",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "$GNRC"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GENERIC-KEY\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM $GNRC)\n\t(DESC \"key\")>",
   "referencedBy": [
    "PHONG-F",
    "LINDER-F",
    "MONICA-F",
    "GENERIC-KEY-F"
   ]
  },
  "HANDWRITING": {
   "name": "HANDWRITING",
   "file": "things.zil",
   "line": 686,
   "endLine": 690,
   "desc": "handwriting",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "HANDWRITING",
    "WRITING"
   ],
   "adjectives": [],
   "action": "HANDWRITING-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HANDWRITING\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM HANDWRITING WRITING)\n\t(DESC \"handwriting\")\n\t(ACTION HANDWRITING-F)>",
   "referencedBy": [
    "I-FINGERPRINT",
    "HANDWRITING-F"
   ]
  },
  "GLOBAL-FINGERPRINTS": {
   "name": "GLOBAL-FINGERPRINTS",
   "file": "things.zil",
   "line": 697,
   "endLine": 701,
   "desc": "fingerprints",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "FINGERPRINT"
   ],
   "adjectives": [],
   "action": "GLOBAL-FINGERPRINTS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-FINGERPRINTS\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM FINGERPRINT)\n\t(DESC \"fingerprints\")\n\t(ACTION GLOBAL-FINGERPRINTS-F)>",
   "referencedBy": [
    "GLOBAL-FINGERPRINTS-F",
    "PRE-ANALYZE",
    "V-ANALYZE",
    "PRE-TAKE"
   ]
  },
  "GLOBAL-MURDER": {
   "name": "GLOBAL-MURDER",
   "file": "things.zil",
   "line": 714,
   "endLine": 717,
   "desc": "murder",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "MURDER",
    "KILLING",
    "CRIME"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-MURDER\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"murder\")\n\t(SYNONYM MURDER KILLING CRIME)>",
   "referencedBy": [
    "ARREST",
    "MONICA-F",
    "PRE-ACCUSE",
    "PRE-ARREST"
   ]
  },
  "GLOBAL-SUICIDE": {
   "name": "GLOBAL-SUICIDE",
   "file": "things.zil",
   "line": 719,
   "endLine": 724,
   "desc": "suicide",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "SUICIDE"
   ],
   "adjectives": [
    "LATE",
    "MRS",
    "LINDER",
    "MOTHER",
    "VIRGINIA",
    "HER"
   ],
   "action": "GLOBAL-SUICIDE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-SUICIDE\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"suicide\")\n\t(ADJECTIVE LATE MRS LINDER MOTHER VIRGINIA HER)\n\t(SYNONYM SUICIDE)\n\t(ACTION GLOBAL-SUICIDE-F)>",
   "referencedBy": [
    "PHONG-F",
    "LINDER-F",
    "STILES-F",
    "MONICA-F",
    "GLOBAL-DUFFY-F",
    "PRE-ACCUSE",
    "PRE-ARREST"
   ]
  },
  "RANDOM-CRIME": {
   "name": "RANDOM-CRIME",
   "file": "things.zil",
   "line": 730,
   "endLine": 735,
   "desc": "other crime",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "AN"
   ],
   "synonyms": [
    "CRIME",
    "KILLING",
    "CONSPIRACY",
    "EUTHANASIA"
   ],
   "adjectives": [
    "OTHER",
    "MERCY"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RANDOM-CRIME\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"other crime\")\n\t(FLAGS AN)\n\t(ADJECTIVE OTHER MERCY)\n\t(SYNONYM CRIME KILLING CONSPIRACY EUTHANASIA)>",
   "referencedBy": [
    "PRE-ARREST"
   ]
  },
  "GLOBAL-PTA": {
   "name": "GLOBAL-PTA",
   "file": "things.zil",
   "line": 737,
   "endLine": 741,
   "desc": "Pacific Trade Associates",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "ASSOCIATES",
    "COMPANY",
    "PTA",
    "BUSINESS"
   ],
   "adjectives": [
    "PACIFIC",
    "TRADE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-PTA\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Pacific Trade Associates\")\n\t(ADJECTIVE PACIFIC TRADE)\n\t(SYNONYM ASSOCIATES COMPANY PTA BUSINESS)>",
   "referencedBy": [
    "LINDER-F",
    "MONICA-F"
   ]
  },
  "DANGER": {
   "name": "DANGER",
   "file": "things.zil",
   "line": 743,
   "endLine": 746,
   "desc": "danger",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "DANGER",
    "THREAT",
    "WRONG",
    "PROBLEM"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DANGER\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"danger\")\n\t(SYNONYM DANGER THREAT WRONG PROBLEM)>",
   "referencedBy": [
    "LINDER-F",
    "MONICA-F"
   ]
  },
  "GLOBAL-WEATHER": {
   "name": "GLOBAL-WEATHER",
   "file": "things.zil",
   "line": 748,
   "endLine": 751,
   "desc": "weather",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "WEATHER",
    "CLIMATE"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-WEATHER\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"weather\")\n\t(SYNONYM WEATHER CLIMATE)>",
   "referencedBy": []
  },
  "TELEPHONE": {
   "name": "TELEPHONE",
   "file": "things.zil",
   "line": 753,
   "endLine": 758,
   "desc": "telephone",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "TELEPHONE",
    "PHONE",
    "RECEIVER"
   ],
   "adjectives": [],
   "action": "TELEPHONE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TELEPHONE\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"telephone\")\n\t(SYNONYM TELEPHONE PHONE RECEIVER)\n\t(FLAGS TRYTAKEBIT)\n\t(ACTION TELEPHONE-F)>",
   "referencedBy": [
    "V-PHONE"
   ]
  },
  "CORONER": {
   "name": "CORONER",
   "file": "things.zil",
   "line": 769,
   "endLine": 773,
   "desc": "coroner",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "CORONER",
    "DOCTOR",
    "AMBULANCE",
    "MORGUE"
   ],
   "adjectives": [],
   "action": "CORONER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CORONER\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"coroner\")\n\t(SYNONYM CORONER DOCTOR AMBULANCE MORGUE ;POLICE)\n\t(ACTION CORONER-F)>",
   "referencedBy": [
    "GLOBAL-DUFFY-F"
   ]
  },
  "BUTTON": {
   "name": "BUTTON",
   "file": "things.zil",
   "line": 784,
   "endLine": 790,
   "desc": "butler's button",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "BUTLER"
   ],
   "action": "BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BUTTON\n\t(IN GLOBAL-OBJECTS)\n\t(ADJECTIVE BUTLER)\n\t(SYNONYM BUTTON)\n\t(DESC \"butler's button\")\n\t(FLAGS NDESCBIT)\n\t(ACTION BUTTON-F)>",
   "referencedBy": [
    "PLAYER-F",
    "PHONG-F",
    "LINDER-F",
    "MONICA-F",
    "OFFICE-BUTTON-F",
    "BUTTON-F"
   ]
  },
  "BLACK-WIRE": {
   "name": "BLACK-WIRE",
   "file": "things.zil",
   "line": 813,
   "endLine": 820,
   "desc": "black wire",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WIRE",
    "WIRES"
   ],
   "adjectives": [
    "BLACK"
   ],
   "action": "BLACK-WIRE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-WIRE-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT BLACK-WIRE\n\t(IN GLOBAL-OBJECTS)\n\t(ADJECTIVE BLACK)\n\t(SYNONYM WIRE WIRES)\n\t(DESC \"black wire\")\n\t(FLAGS NDESCBIT)\n\t(GENERIC GENERIC-WIRE-F)\n\t(ACTION BLACK-WIRE-F)>",
   "referencedBy": [
    "I-FINGERPRINT",
    "PHONG-F",
    "LINDER-F",
    "MONICA-F",
    "BLACK-WIRE-F",
    "PRE-TAKE"
   ]
  },
  "WHITE-WIRE": {
   "name": "WHITE-WIRE",
   "file": "things.zil",
   "line": 855,
   "endLine": 862,
   "desc": "white wire",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WIRE",
    "WIRES"
   ],
   "adjectives": [
    "WHITE"
   ],
   "action": "BLACK-WIRE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-WIRE-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT WHITE-WIRE\n\t(IN GLOBAL-OBJECTS)\n\t(ADJECTIVE WHITE)\n\t(SYNONYM WIRE WIRES)\n\t(DESC \"white wire\")\n\t(FLAGS NDESCBIT)\n\t(GENERIC GENERIC-WIRE-F)\n\t(ACTION BLACK-WIRE-F)>",
   "referencedBy": [
    "I-FINGERPRINT",
    "PHONG-F",
    "LINDER-F",
    "MONICA-F",
    "BLACK-WIRE-F",
    "PRE-TAKE"
   ]
  },
  "GLOBAL-AFFAIR": {
   "name": "GLOBAL-AFFAIR",
   "file": "things.zil",
   "line": 864,
   "endLine": 868,
   "desc": "love affair",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "AFFAIR"
   ],
   "adjectives": [
    "LOVE",
    "VIRGINIA",
    "STILES"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-AFFAIR\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"love affair\")\n\t(ADJECTIVE LOVE VIRGINIA STILES)\n\t(SYNONYM AFFAIR)>",
   "referencedBy": [
    "PHONG-F",
    "LINDER-F",
    "STILES-F",
    "MONICA-F"
   ]
  },
  "MUDDY-SHOES": {
   "name": "MUDDY-SHOES",
   "file": "things.zil",
   "line": 870,
   "endLine": 876,
   "desc": "pair of muddy boots",
   "ldesc": null,
   "fdesc": null,
   "loc": "SHOE-PLATFORM",
   "flags": [
    "TAKEBIT",
    "NDESCBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "BOOT",
    "BOOTS",
    "PAIR",
    "MUD"
   ],
   "adjectives": [
    "MUDDY",
    "DIRTY",
    "ADOBE",
    "GARDEN"
   ],
   "action": "MUDDY-SHOES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MUDDY-SHOES\n\t(IN SHOE-PLATFORM)\n\t(DESC \"pair of muddy boots\")\n\t(ADJECTIVE MUDDY DIRTY ADOBE GARDEN)\n\t(SYNONYM BOOT BOOTS PAIR MUD)\n\t(FLAGS TAKEBIT NDESCBIT INVISIBLE)\n\t(ACTION MUDDY-SHOES-F)>",
   "referencedBy": [
    "I-PHONG",
    "PHONG-F",
    "SHOE-PLATFORM-F",
    "MUDDY-SHOES-F",
    "V-BRUSH"
   ]
  },
  "CHAIR": {
   "name": "CHAIR",
   "file": "things.zil",
   "line": 904,
   "endLine": 908,
   "desc": "chair",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "FURNITURE"
   ],
   "synonyms": [
    "CHAIR",
    "CHAIRS"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CHAIR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"chair\")\n\t(SYNONYM CHAIR CHAIRS)\n\t(FLAGS NDESCBIT FURNITURE)>",
   "referencedBy": [
    "WITNESS"
   ]
  },
  "LAMP": {
   "name": "LAMP",
   "file": "things.zil",
   "line": 910,
   "endLine": 914,
   "desc": "lamp",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "FURNITURE",
    "ONBIT"
   ],
   "synonyms": [
    "LAMP"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LAMP\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"lamp\")\n\t(SYNONYM LAMP)\n\t(FLAGS NDESCBIT FURNITURE ONBIT)>",
   "referencedBy": []
  },
  "BED": {
   "name": "BED",
   "file": "things.zil",
   "line": 916,
   "endLine": 922,
   "desc": "bed",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT",
    "FURNITURE",
    "VEHBIT"
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
     "30"
    ]
   },
   "contents": [],
   "source": "<OBJECT BED\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"bed\")\n\t(SYNONYM BED)\n\t(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT FURNITURE VEHBIT)\n\t(CAPACITY 30)\n\t(ACTION BED-F)>",
   "referencedBy": []
  },
  "GLOBAL-CALL": {
   "name": "GLOBAL-CALL",
   "file": "things.zil",
   "line": 934,
   "endLine": 939,
   "desc": "telephone call",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "CALL",
    "LEFT",
    "RIGHT"
   ],
   "adjectives": [
    "TELEPHONE",
    "PHONE"
   ],
   "action": "GLOBAL-CALL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-CALL\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"telephone call\")\n\t(ADJECTIVE TELEPHONE PHONE)\n\t(SYNONYM CALL ;CONVERSATION LEFT RIGHT)\n\t(ACTION GLOBAL-CALL-F)>",
   "referencedBy": [
    "LINDER-F",
    "STILES-F",
    "V-WALK"
   ]
  },
  "MONEY": {
   "name": "MONEY",
   "file": "things.zil",
   "line": 945,
   "endLine": 949,
   "desc": "money",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "MONEY",
    "LOOT",
    "PAYOFF",
    "BRIBE"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MONEY\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM MONEY LOOT PAYOFF BRIBE)\n\t(DESC \"money\")\n\t;(ACTION MONEY-F)>",
   "referencedBy": [
    "LINDER-F",
    "STILES-F",
    "MONICA-F",
    "V-SEARCH-OBJECT-FOR"
   ]
  },
  "WILL": {
   "name": "WILL",
   "file": "things.zil",
   "line": 951,
   "endLine": 955,
   "desc": "Linder's will",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "WILL",
    "TESTAMENT"
   ],
   "adjectives": [
    "LINDER",
    "HIS"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WILL\n\t(IN GLOBAL-OBJECTS)\n\t(ADJECTIVE LINDER HIS)\n\t(SYNONYM WILL TESTAMENT)\n\t(DESC \"Linder's will\")>",
   "referencedBy": [
    "PHONG-F",
    "LINDER-F",
    "MONICA-F"
   ]
  },
  "INTNUM": {
   "name": "INTNUM",
   "file": "things.zil",
   "line": 957,
   "endLine": 961,
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
   "source": "<OBJECT INTNUM\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM INTNUM)\n\t(DESC \"number\")\n\t;(ACTION INTNUM-F)>",
   "referencedBy": [
    "STILES-F",
    "V-PHONE",
    "PRE-READ",
    "V-WAIT-FOR",
    "V-WAIT-UNTIL"
   ]
  },
  "TUMOR": {
   "name": "TUMOR",
   "file": "things.zil",
   "line": 963,
   "endLine": 968,
   "desc": "tumor",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "INVISIBLE"
   ],
   "synonyms": [
    "TUMOR",
    "TUMOUR",
    "CANCER",
    "CARCINOMA"
   ],
   "adjectives": [
    "ADVANCED",
    "STOMACH"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TUMOR\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"tumor\")\n\t(FLAGS INVISIBLE)\n\t(ADJECTIVE ADVANCED STOMACH)\n\t(SYNONYM TUMOR TUMOUR CANCER CARCINOMA)>",
   "referencedBy": [
    "PHONG-F",
    "LINDER-F",
    "STILES-F",
    "MONICA-F",
    "MONICA-TABLE-F",
    "CORPSE-F"
   ]
  },
  "CORPSE": {
   "name": "CORPSE",
   "file": "things.zil",
   "line": 970,
   "endLine": 978,
   "desc": "body of Mr. Linder",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE",
   "flags": [
    "INVISIBLE",
    "TAKEBIT"
   ],
   "synonyms": [
    "BODY",
    "LINDER",
    "CORPSE",
    "WOUND"
   ],
   "adjectives": [
    "MR",
    "BLOODY"
   ],
   "action": "CORPSE-F",
   "descfcn": "CORPSE-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "101"
    ]
   },
   "contents": [],
   "source": "<OBJECT CORPSE\n\t(IN OFFICE ;CARVED-CHAIR)\n\t(DESC \"body of Mr. Linder\")\n\t(ADJECTIVE MR BLOODY)\n\t(SYNONYM BODY LINDER CORPSE WOUND ;STIFF)\n\t(FLAGS INVISIBLE TAKEBIT ;NDESCBIT)\n\t(SIZE 101)\n\t(DESCFCN CORPSE-F)\n\t(ACTION CORPSE-F)>",
   "referencedBy": [
    "I-PHONG",
    "I-STILES",
    "I-MONICA",
    "I-AMBULANCE",
    "DUFFY-HINT",
    "ARREST",
    "OBJECT-PAIR-F",
    "PHONG-F",
    "STILES-F",
    "MONICA-F",
    "DOORBELL-F",
    "LINDER-ROOM-F",
    "ENTRY-F",
    "FRONT-DOOR-F",
    "CARVED-CHAIR-F",
    "CORPSE-F",
    "PRE-ACCUSE",
    "PRE-ARREST",
    "PRE-TAKEOUT"
   ]
  },
  "TODAY": {
   "name": "TODAY",
   "file": "things.zil",
   "line": 1011,
   "endLine": 1015,
   "desc": "today",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "TODAY",
    "DATE",
    "DAY"
   ],
   "adjectives": [],
   "action": "TODAY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TODAY\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"today\")\n\t(SYNONYM TODAY DATE DAY)\n\t(ACTION TODAY-F)>",
   "referencedBy": []
  },
  "GLOBAL-WARRANT": {
   "name": "GLOBAL-WARRANT",
   "file": "things.zil",
   "line": 1017,
   "endLine": 1022,
   "desc": "search warrant",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "WARRANT"
   ],
   "adjectives": [
    "SEARCH"
   ],
   "action": "GLOBAL-WARRANT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-WARRANT\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"search warrant\")\n\t(ADJECTIVE SEARCH)\n\t(SYNONYM WARRANT)\n\t(ACTION GLOBAL-WARRANT-F)>",
   "referencedBy": [
    "PRE-TAKE"
   ]
  },
  "STUB": {
   "name": "STUB",
   "file": "things.zil",
   "line": 1029,
   "endLine": 1035,
   "desc": "ticket stub",
   "ldesc": null,
   "fdesc": "Lying on the ground is what appears to be a ticket stub.",
   "loc": null,
   "flags": [
    "TAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "TICKET",
    "STUB"
   ],
   "adjectives": [
    "TICKET"
   ],
   "action": "STUB-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT STUB\n\t(DESC \"ticket stub\")\n\t(ADJECTIVE TICKET)\n\t(SYNONYM TICKET STUB)\n\t(FLAGS TAKEBIT READBIT)\n\t(FDESC \"Lying on the ground is what appears to be a ticket stub.\")\n\t(ACTION STUB-F)>",
   "referencedBy": [
    "I-FINGERPRINT",
    "I-MONICA-RETURN",
    "MONICA-F"
   ]
  },
  "GLOBAL-WATER": {
   "name": "GLOBAL-WATER",
   "file": "things.zil",
   "line": 1055,
   "endLine": 1058,
   "desc": "water",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "WATER"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-WATER\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"water\")\n\t(SYNONYM WATER)>",
   "referencedBy": [
    "V-LAMP-ON"
   ]
  },
  "MIRROR": {
   "name": "MIRROR",
   "file": "things.zil",
   "line": 1060,
   "endLine": 1065,
   "desc": "mirror",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
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
   "source": "<OBJECT MIRROR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"mirror\")\n\t(SYNONYM MIRROR)\n\t(FLAGS NDESCBIT)\n\t(ACTION MIRROR-F)>",
   "referencedBy": []
  },
  "CLOSET": {
   "name": "CLOSET",
   "file": "things.zil",
   "line": 1076,
   "endLine": 1081,
   "desc": "closet",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "FURNITURE"
   ],
   "synonyms": [
    "CLOSET"
   ],
   "adjectives": [],
   "action": "CLOSET-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CLOSET\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"closet\")\n\t(SYNONYM CLOSET)\n\t(FLAGS NDESCBIT CONTBIT ;OPENBIT FURNITURE)\n\t(ACTION CLOSET-F)>",
   "referencedBy": []
  },
  "CABINET": {
   "name": "CABINET",
   "file": "things.zil",
   "line": 1095,
   "endLine": 1099,
   "desc": "cabinet",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "CABINET"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CABINET\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"cabinet\")\n\t(SYNONYM CABINET)\n\t;(ACTION CUPBOARD-F)>",
   "referencedBy": []
  },
  "GLOBAL-CAN-OF-WORMS": {
   "name": "GLOBAL-CAN-OF-WORMS",
   "file": "things.zil",
   "line": 1101,
   "endLine": 1106,
   "desc": "can of worms",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "CAN",
    "WORM",
    "WORMS"
   ],
   "adjectives": [],
   "action": "GLOBAL-CAN-OF-WORMS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-CAN-OF-WORMS\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"can of worms\")\n\t(SYNONYM CAN WORM WORMS)\n\t(FLAGS NDESCBIT TRYTAKEBIT)\n\t(ACTION GLOBAL-CAN-OF-WORMS-F)>",
   "referencedBy": [
    "PHONG-F",
    "PRE-TAKE"
   ]
  },
  "RANDOM-MEAL": {
   "name": "RANDOM-MEAL",
   "file": "things.zil",
   "line": 1117,
   "endLine": 1121,
   "desc": "meal",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "MEAL",
    "DINNER",
    "BREAKFAST",
    "SNACK"
   ],
   "adjectives": [],
   "action": "RANDOM-MEAL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RANDOM-MEAL\n\t(DESC \"meal\")\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM MEAL DINNER BREAKFAST SNACK)\n\t(ACTION RANDOM-MEAL-F)>",
   "referencedBy": []
  },
  "GLOBAL-HOUSE": {
   "name": "GLOBAL-HOUSE",
   "file": "things.zil",
   "line": 1130,
   "endLine": 1134,
   "desc": "house",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "HOUSE"
   ],
   "adjectives": [],
   "action": "GLOBAL-HOUSE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-HOUSE\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"house\")\n\t(SYNONYM HOUSE)\n\t(ACTION GLOBAL-HOUSE-F)>",
   "referencedBy": []
  },
  "GLOBAL-FILM": {
   "name": "GLOBAL-FILM",
   "file": "things.zil",
   "line": 1141,
   "endLine": 1145,
   "desc": "film",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "FILM",
    "MOVIE",
    "SHOW"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-FILM\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"film\")\n\t(SYNONYM FILM MOVIE SHOW)\n\t;(ACTION FILM-F)>",
   "referencedBy": [
    "MONICA-F"
   ]
  }
 },
 "routines": {
  "QUEUE": {
   "name": "QUEUE",
   "file": "clock.zil",
   "line": 25,
   "endLine": 28,
   "source": "<ROUTINE QUEUE (RTN TICK \"AUX\" CINT)\n\t #DECL ((RTN) ATOM (TICK) FIX (CINT) <PRIMTYPE VECTOR>)\n\t <PUT <SET CINT <INT .RTN>> ,C-TICK .TICK>\n\t .CINT>"
  },
  "INT": {
   "name": "INT",
   "file": "clock.zil",
   "line": 30,
   "endLine": 43,
   "source": "<ROUTINE INT (RTN \"OPTIONAL\" (DEMON <>) E C INT)\n\t #DECL ((RTN) ATOM (DEMON) <OR ATOM FALSE> (E C INT) <PRIMTYPE\n\t\t\t\t\t\t\t      VECTOR>)\n\t <SET E <REST ,C-TABLE ,C-TABLELEN>>\n\t <SET C <REST ,C-TABLE ,C-INTS>>\n\t <REPEAT ()\n\t\t <COND (<==? .C .E>\n\t\t\t<SETG C-INTS <- ,C-INTS ,C-INTLEN>>\n\t\t\t<AND .DEMON <SETG C-DEMONS <- ,C-DEMONS ,C-INTLEN>>>\n\t\t\t<SET INT <REST ,C-TABLE ,C-INTS>>\n\t\t\t<PUT .INT ,C-RTN .RTN>\n\t\t\t<RETURN .INT>)\n\t\t       (<EQUAL? <GET .C ,C-RTN> .RTN> <RETURN .C>)>\n\t\t <SET C <REST .C ,C-INTLEN>>>>"
  },
  "CLOCKER": {
   "name": "CLOCKER",
   "file": "clock.zil",
   "line": 47,
   "endLine": 71,
   "source": "<ROUTINE CLOCKER (\"AUX\" C E TICK (FLG <>) VAL)\n\t #DECL ((C E) <PRIMTYPE VECTOR> (TICK) FIX ;(FLG) ;<OR FALSE ATOM>)\n\t <COND (,CLOCK-WAIT <SETG CLOCK-WAIT <>> <RFALSE>)>\n\t <SETG PRESENT-TIME <+ ,PRESENT-TIME 1>>\n\t <COND (<G? ,PRESENT-TIME 1199>\n\t\t<TIMES-UP>)>\n\t <COND (<G? <SETG MOVES <+ ,MOVES 1>> 59>\n\t\t<SETG MOVES 0>\n\t\t<COND (<G? <SETG SCORE <+ ,SCORE 1>> 23>\n\t\t       <SETG SCORE 0>)>)>\n\t <SET C <REST ,C-TABLE <COND (,P-WON ,C-INTS) (T ,C-DEMONS)>>>\n\t <SET E <REST ,C-TABLE ,C-TABLELEN>>\n\t <REPEAT ()\n\t\t <COND (<==? .C .E> <RETURN .FLG>)\n\t\t       (<NOT <0? <GET .C ,C-ENABLED?>>>\n\t\t\t<SET TICK <GET .C ,C-TICK>>\n\t\t\t<COND (<0? .TICK>)\n\t\t\t      (T\n\t\t\t       <PUT .C ,C-TICK <- .TICK 1>>\n\t\t\t       <COND (<AND <NOT <G? .TICK 1>>\n\t\t\t\t           <SET VAL <APPLY <GET .C ,C-RTN>>>>\n\t\t\t\t      <COND (<OR <NOT .FLG>\n\t\t\t\t\t\t <==? .VAL ,M-FATAL>>\n\t\t\t\t\t     <SET FLG .VAL>)>)>)>)>\n\t\t <SET C <REST .C ,C-INTLEN>>>>"
  },
  "INTRO": {
   "name": "INTRO",
   "file": "events.zil",
   "line": 8,
   "endLine": 25,
   "source": "<ROUTINE INTRO ()\n\t <TELL \n\"Somewhere near Los Angeles. A cold Friday evening in February 1938. In\nthis climate, cold is anywhere below about fifty degrees. Storm clouds\nare swimming across the sky, their bottoms glowing faintly from the city\nlights in the distance. A search light pans slowly under the clouds,\nheralding another film premiere. The air seems expectant, waiting for\nthe rain to begin, like a cat waiting for the ineffable moment to\nambush.|\" CR \"The taxi has just dropped you off at the entrance to the\nLinders' driveway. The driver didn't seem to like venturing into this\nmaze of twisty streets any more than you did. But the house windows are\nfull of light, and radio music drifts toward you. Your favorite pistol,\na snub-nosed Colt .32, is snug in its holster. You just picked up a\nmatch book off the curb. It might come in handy. Good thing you looked\nup the police file on Mrs. Linder's death. Her suicide note and the\nnewspaper story told you all you know about the family. The long week is\nfinished, except for this appointment. But why does an ominous feeling\ngrip you?|\" CR>>"
  },
  "TIMES-UP": {
   "name": "TIMES-UP",
   "file": "events.zil",
   "line": 27,
   "endLine": 35,
   "source": "<ROUTINE TIMES-UP ()\n\t <TELL \n\"Police Chief Klutz walks up to you, from out of nowhere. \\\"I'm\nsorry, Detective, but you can't spend any more time here. We need you at\nthe Coliseum for the all-day Police Department track-and-field meet. I\nhope you had a restful night!\\\" He\nescorts you to a waiting police car, and you go off into the sunrise.\" CR>\n\t <COND (,TOO-LATE <TOO-LATE-F>)>\n\t <QUIT>>"
  },
  "INTEGER-F": {
   "name": "INTEGER-F",
   "file": "events.zil",
   "line": 52,
   "endLine": 53,
   "source": "<ROUTINE INTEGER-F ()\n\t<TELL \"(Use figures for numbers, for example \\\"10.\\\")\" CR>>"
  },
  "QUEUE-MAIN-EVENTS": {
   "name": "QUEUE-MAIN-EVENTS",
   "file": "events.zil",
   "line": 55,
   "endLine": 63,
   "source": "<ROUTINE QUEUE-MAIN-EVENTS ()\n\t<ENABLE <QUEUE I-LINDER-TO-OFFICE 52>>\n\t<ENABLE <QUEUE I-LINDER-RETIRES 290>>\n\t<ENABLE <QUEUE I-PHONG-RETIRES 320>>\n\t<ENABLE <QUEUE I-STILES-ARRIVE 60>>\n\t<ENABLE <QUEUE I-PROMPT-1 1>>\n\t<ENABLE <QUEUE I-PROMPT-2 10>>\n\t<ENABLE <QUEUE I-WEATHER 6>>\n\t<ENABLE <QUEUE I-CHIMES 30>>>"
  },
  "I-WEATHER": {
   "name": "I-WEATHER",
   "file": "events.zil",
   "line": 78,
   "endLine": 129,
   "source": "<ROUTINE I-WEATHER (\"AUX\" (OUT? <==? <GETP ,HERE ,P?LINE> ,OUTSIDE-LINE-C>))\n <SETG I-WEATHER-NUM <+ 1 ,I-WEATHER-NUM>>\n <COND (<==? 1 ,I-WEATHER-NUM>\n\t<TELL \"Suddenly, a clap of thunder rolls across the hills\">\n\t<COND (.OUT? <TELL \" nearby\">)\n\t      (T <TELL \" outside\">)>\n\t<TELL \".\" CR>\n\t<ENABLE <QUEUE I-WEATHER 3>>)\n       (<==? 2 ,I-WEATHER-NUM>\n\t<TELL \"Without warning, lightning flashes\">\n\t<COND (.OUT? <TELL \" above\">)\n\t      (T <TELL \" outside\">)>\n\t<TELL \", and a few seconds later thunder rattles the house.\" CR>\n\t<ENABLE <QUEUE I-WEATHER 3>>)\n       (<==? 3 ,I-WEATHER-NUM>\n\t<TELL \"Rain begins to fall\">\n\t<COND (<NOT .OUT?> <TELL \" outside\">)>\n\t<TELL \" in a sprinkle.\" CR>\n\t<ENABLE <QUEUE I-WEATHER 2>>)\n       (<==? 4 ,I-WEATHER-NUM>\n\t<SETG GROUND-MUDDY T>\n\t<TELL \"The rain\">\n\t<COND (<NOT .OUT?> <TELL \" outside\">)>\n\t<TELL \" is falling heavily now.\" CR>\n\t<ENABLE <QUEUE I-WEATHER 9>>)\n       (<==? 5 ,I-WEATHER-NUM>\n\t<TELL \"The rain\">\n\t<COND (<NOT .OUT?> <TELL \" outside\">)>\n\t<TELL \" begins to taper off.\" CR>\n\t<ENABLE <QUEUE I-WEATHER 5>>)\n       (<==? 6 ,I-WEATHER-NUM>\n\t<TELL \"The rain storm\">\n\t<COND (<NOT .OUT?> <TELL \" outside\">)>\n\t<TELL \" has passed now.\" CR>\n\t<ENABLE <QUEUE I-WEATHER <- ,CLOUDS-GONE ,PRESENT-TIME>>>)\n       (<==? 7 ,I-WEATHER-NUM>\n\t<SETG SKY-DESC \"The sky is clear now, with stars shining coldly.\">\n\t<ENABLE <QUEUE I-WEATHER <- ,MOONRISE ,PRESENT-TIME>>>)\n       (<==? 8 ,I-WEATHER-NUM>\n\t<SETG SKY-DESC \"The moon, just past full, lights up the whole yard.\">\n\t<ENABLE <QUEUE I-WEATHER <- ,SUNRISE ,PRESENT-TIME 15>>>)\n       (<==? 9 ,I-WEATHER-NUM>\n\t<TELL \"Suddenly it dawns on you that the sky is getting light\">\n\t<COND (<NOT .OUT?> <TELL \" outside\">)>\n\t<TELL \".\" CR>\n\t<SETG SKY-DESC \"The morning sunshine lights up the whole yard.\">\n\t<ENABLE <QUEUE I-WEATHER 25>>)\n       (<==? 10 ,I-WEATHER-NUM>\n\t<TELL \"The sun has appeared over the hills\">\n\t<COND (<NOT .OUT?> <TELL \" outside\">)>\n\t<TELL \".\" CR>)>\n <RFALSE>>"
  },
  "I-CHIMES": {
   "name": "I-CHIMES",
   "file": "events.zil",
   "line": 131,
   "endLine": 145,
   "source": "<ROUTINE I-CHIMES (\"AUX\" HALF-HR HR)\n <ENABLE <QUEUE I-CHIMES 30>>\n <SET HALF-HR </ ,PRESENT-TIME 30>>\n <SET HR </ .HALF-HR 2>>\n <COND (<EQUAL? ,HERE ,OFFICE>\n\t<COND (<==? .HALF-HR <* 2 .HR>>\n\t       <COND (<L? 12 .HR> <SET HR <- .HR 12>>)>\n\t       <TELL \"The clock chimes \">\n\t       <COND (<==? 1 .HR> <TELL \"once\">)\n\t\t     (<==? 2 .HR> <TELL \"twice\">)\n\t\t     (T <TELL N .HR \" times\">)>\n\t       <TELL \" to mark the hour.\" CR>)\n\t      (T\n\t       <TELL \"The clock chimes once to mark the half hour.\" CR>)>)>\n <RFALSE>>"
  },
  "I-STILES-ARRIVE": {
   "name": "I-STILES-ARRIVE",
   "file": "events.zil",
   "line": 147,
   "endLine": 157,
   "source": "<ROUTINE I-STILES-ARRIVE ()\n\t<MOVE ,STILES ,OFFICE-PATH>\n\t<FSET ,BACK-GATE ,LOCKED>\n\t<ESTABLISH-GOAL ,STILES ,OFFICE-PORCH>\n\t<COND (<EQUAL? ,HERE ,OFFICE-PATH>\n\t       <TELL\n\"Someone enters through the back gate and rushes past you.\" CR>)\n\t      (<AND <GETP ,HERE ,P?CORRIDOR>\n\t\t    <NOT <0? <BAND <GETP ,HERE ,P?CORRIDOR> 3>>>>\n\t       <TELL\n\"Someone enters the property through the back gate.\" CR>)>>"
  },
  "I-DUFFY-ARRIVE": {
   "name": "I-DUFFY-ARRIVE",
   "file": "events.zil",
   "line": 160,
   "endLine": 174,
   "source": "<ROUTINE I-DUFFY-ARRIVE ()\n\t<COND (,WELCOMED\n\t       <ENABLE <QUEUE I-MEET-DUFFY? -1>>\n\t       <SETG DUFFY-WITH-STILES T>\n\t       <FCLEAR ,STILES ,INVISIBLE>\n\t       <ESTABLISH-GOAL ,STILES ,FRONT-PORCH>)\n\t      (T\n\t       <SETG SEEN-DUFFY? T>\n\t       <SETG MET-DUFFY? T>\n\t       <TELL\n\"Suddenly, your assistant, Sgt. Duffy, appears from out of nowhere.\n\\\"Hello, Detective!\"\n\" I thought I should come here on the streetcar, in case you needed help. \"\n\"I'll be nearby if you want me.\\\" He disappears just as quickly.\" CR>)>\n\t<RFALSE>>"
  },
  "DUFFY-GREETING": {
   "name": "DUFFY-GREETING",
   "file": "events.zil",
   "line": 180,
   "endLine": 194,
   "source": "<ROUTINE DUFFY-GREETING ()\n\t<SETG MET-STILES? T>\n\t<SETG SEEN-DUFFY? T>\n\t<SETG MET-DUFFY? T>\n\t<FSET ,STILES ,TOUCHBIT>\n\t<TELL \" \\\"Detective, I'm glad you're safe!\">\n\t<COND (,PLAYER-HIDING\n\t       <TELL \" Don't worry, I won't tell anyone you're hiding.\">)>\n\t<TELL\n\" I thought I should come here on the streetcar, in case you needed help. \"\n\"I'm familiar with the house, since I was here to help investigate\nMrs. Linder's death.\nJust as I walked up tonight, I heard a shot! The next thing I knew, this man,\nwho calls himself Stiles, burst out of the woods behind the house.\nNaturally, I put the nippers on him and brought him along.\">>"
  },
  "I-MEET-DUFFY?": {
   "name": "I-MEET-DUFFY?",
   "file": "events.zil",
   "line": 196,
   "endLine": 208,
   "source": "<ROUTINE I-MEET-DUFFY? (\"OPTIONAL\" (ARG <>) \"AUX\" (L <LOC ,STILES>))\n <COND (<AND ,WELCOMED\n\t     <NOT ,MET-DUFFY?>\n\t     <OR <==? .L ,HERE>\t;\"? or sees you thru door\"\n\t\t <NOT <0? <BAND <GETP .L ,P?CORRIDOR>\n\t\t\t\t<GETP ,HERE ,P?CORRIDOR>>>>>>\n\t<TELL \"Your assistant, Sgt. Duffy, sees you.\">\n\t<DUFFY-GREETING>\n\t<TELL\n\" I'll just stow him in the living room and stand by to help you.\\\"\" CR>\n\t<ESTABLISH-GOAL ,STILES ,LIVING-ROOM>\n\t<DISABLE <INT I-MEET-DUFFY?>>\n\t<RTRUE>)>>"
  },
  "DO-FINGERPRINT": {
   "name": "DO-FINGERPRINT",
   "file": "events.zil",
   "line": 214,
   "endLine": 245,
   "source": "<ROUTINE DO-FINGERPRINT (\"OPTIONAL\" (AN <>))\n\t <COND (,DUFFY-AT-CORONER\n\t\t<TELL\n\"Don't you remember? Duffy went in the ambulance to the Coroner's office. \"\n\"You'll have to wait for him to return.\" CR>\n\t\t<RTRUE>)\n\t       (,FINGERPRINT-OBJ\n\t\t<TELL\n\"Sergeant Duffy ran off to the lab on an errand for you. \"\n\"You'll have to wait for him to return.\" CR>\n\t\t<RTRUE>)>\n\t <COND (<NOT ,MET-DUFFY?>\n\t\t<TELL\n\"You haven't met Sergeant Duffy yet tonight.\"\n\" You'll need his help to do that.\" CR>\n\t\t<RTRUE>)>\n\t <COND (<NOT .AN>\n\t\t<TELL\n\"You look at the \" D ,PRSO \" closely. It appears to have good\nfingerprints on it, so you call for Sergeant Duffy.\" CR>)>\n\t <COND (<AND .AN ,PRSI>\n\t\t<SETG ANALYSIS-GOAL ,PRSI>)\n\t       (T <SETG ANALYSIS-GOAL <>>)>\n\t <SETG FINGERPRINT-OBJ ,PRSO>\n\t <SETG ANALYSIS-OBJ .AN>\n\t <ENABLE <QUEUE I-FINGERPRINT <+ 15 <RANDOM 15>>>>\n\t <FSET ,PRSO ,TOUCHBIT>\n\t <REMOVE ,PRSO>\n\t <TELL\n\"Sergeant Duffy, quiet as a mouse, walks up and takes the\n\" D ,PRSO \" from you. \\\"I'll return soon with the results,\\\" he\nsays, and leaves as silently as he came.\" CR>>"
  },
  "DO-ANALYZE": {
   "name": "DO-ANALYZE",
   "file": "events.zil",
   "line": 249,
   "endLine": 256,
   "source": "<ROUTINE DO-ANALYZE ()\n <COND (<EQUAL? ,PRSO ,PRSI>\n\t<TELL\n\"Sergeant Duffy appears with a puzzled look on his face.\"\n\" \\\"I don't see how you expect the lab to analyze something for itself!\\\"\"\n\" He leaves, shaking his head slowly.\" CR>\n\t<RTRUE>)>\n <DO-FINGERPRINT T>>"
  },
  "I-FINGERPRINT": {
   "name": "I-FINGERPRINT",
   "file": "events.zil",
   "line": 258,
   "endLine": 335,
   "source": "<ROUTINE I-FINGERPRINT ()\n\t <TELL \"Suddenly, Sergeant Duffy \">\n\t <COND (<PROB 30>\n\t\t<TELL\n\"appears, holding the \" D ,FINGERPRINT-OBJ\n\" carefully in his hands. His quiet efficiency is impressive. \">)\n\t       (<PROB 50>\n\t\t<TELL\n\"seems to arrive from nowhere, holding the \" D ,FINGERPRINT-OBJ\n\" in his hands. \">)\n\t       (T\n\t\t<TELL\n\"returns with the \" D ,FINGERPRINT-OBJ \". For a moment you muse on his almost\nmagical appearances. \">)>\n\t <COND (,ANALYSIS-GOAL\n\t\t<COND (<AND <EQUAL? ,FINGERPRINT-OBJ ,INSIDE-GUN ,OUTSIDE-GUN>\n\t\t\t    <EQUAL? ,ANALYSIS-GOAL ,POWDER ,CLOCK-POWDER>>\n\t\t       <TELL\n\"\\\"The gun has recently been fired, and it contains traces of cheap\ngun powder\">\n\t\t       <COND (,POWDER-ANALYZED\n\t\t\t      <TELL\n\", the same kind of powder that you found on the clock\">)>\n\t\t       <TELL \".\">)\n\t\t      (<AND <EQUAL? ,FINGERPRINT-OBJ ,MATCHBOOK ,THREAT-NOTE>\n\t\t\t    <EQUAL? ,ANALYSIS-GOAL ,HANDWRITING>>\n\t\t       <TELL\n\"\\\"The ink is ordinary Waterman blue-black. The lab can't tell much else\nwithout a certified handwriting sample on file.\">)\n\t\t      (<NOT <EQUAL? ,FINGERPRINT-OBJ ,ANALYSIS-GOAL>>\n\t\t       <TELL \"\\\"The \" D ,FINGERPRINT-OBJ\n\t\t\t     \" doesn't contain any \">\n\t\t       <ANALYSIS-PRINT ,ANALYSIS-GOAL>)>)\n\t       (<OR <EQUAL? ,FINGERPRINT-OBJ ,PIECE-OF-WIRE ,SPOOL-OF-WIRE>\n\t\t    <EQUAL? ,FINGERPRINT-OBJ ,WHITE-WIRE ,BLACK-WIRE>>\n\t\t<TELL \"\\\"The wire is ordinary 16-gauge bell wire.\">)\n\t       (<EQUAL? ,FINGERPRINT-OBJ ,PIECE-OF-PUTTY>\n\t\t<TELL\n\"\\\"The putty contained traces of the explosive cordite.\">)\n\t       (<EQUAL? ,FINGERPRINT-OBJ ,INSIDE-GUN ,OUTSIDE-GUN>\n\t\t       <TELL\n\"\\\"The gun has recently been fired, and it contains traces of cheap\ngun powder\">\n\t\t       ;<COND (,POWDER-ANALYZED\n\t\t\t      <TELL\n\", the same kind of powder that you found on the clock\">)>\n\t\t       <TELL \".\">\n\t\t       <COND (<EQUAL? ,FINGERPRINT-OBJ ,INSIDE-GUN>\n\t\t\t      <TELL\n\" And the barrel has indeed been sawed off.\">)>)\n\t       (<==? ,FINGERPRINT-OBJ ,CLOCK-POWDER>\n\t\t<SETG POWDER-ANALYZED T>\n\t\t<TELL\n\"\\\"The powder is gun powder, as I suspected. I put it in a cellophane\nenvelope for you.\">)\n\t       (<EQUAL? ,FINGERPRINT-OBJ ,MATCHBOOK ,THREAT-NOTE>\n\t\t<TELL\n\"\\\"The ink is ordinary Waterman blue-black. The lab can't tell much else\nwithout a certified handwriting sample on file.\">)\n\t       (<EQUAL? ,FINGERPRINT-OBJ ,STUB>\n\t\t<TELL\n\"\\\"I took the ticket stub to the movie theater, where they told me\nthat it looked authentic to them, and the serial number proves that it\nwas bought tonight.\">)\n\t       (<EQUAL? ,FINGERPRINT-OBJ ,MEDICAL-REPORT>\n\t\t<SETG DUFFY-SAW-MEDICAL-REPORT T>\n\t\t<TELL\n\"\\\"I tried to call the doctor, but there's no listing in the phone book.\nThe lab people couldn't see anything unusual about the report.\">)\n\t       (T\n\t\t<TELL\n\"\\\"I'm sorry,\\\" he begins, \\\"but the lab found nothing interesting.\">)>\n\t <TELL \"\\\"\nWith that, he leaves, handing you the \" D ,FINGERPRINT-OBJ\n\" as he whisks away.\" CR>\n\t <MOVE ,FINGERPRINT-OBJ ,PLAYER>\n\t <SETG FINGERPRINT-OBJ <>>\n\t <RTRUE>>"
  },
  "ANALYSIS-PRINT": {
   "name": "ANALYSIS-PRINT",
   "file": "events.zil",
   "line": 337,
   "endLine": 338,
   "source": "<ROUTINE ANALYSIS-PRINT (OBJ)\n\t <TELL D .OBJ \".\">>"
  },
  "TODAY-F": {
   "name": "TODAY-F",
   "file": "events.zil",
   "line": 340,
   "endLine": 345,
   "source": "<ROUTINE TODAY-F ()\n\t <COND (<VERB? WHAT>\n\t\t<COND (<L? ,PRESENT-TIME 720>\n\t\t       <TELL \"Today is Friday, February 18, 1938.\" CR>)\n\t\t      (T\n\t\t      <TELL \"Today is Saturday, February 19, 1938.\" CR>)>)>>"
  },
  "WELCOME": {
   "name": "WELCOME",
   "file": "events.zil",
   "line": 350,
   "endLine": 386,
   "source": "<ROUTINE WELCOME ()\n <COND (<==? 2 ,TOO-LATE-KNOCKED>\n\t<TELL\n\"No one answers the door, but a police car races in the driveway and\nstops. Two officers jump out, grab you roughly, and haul you off as a\ntrespasser.\" CR>\n\t<TOO-LATE-F>\n\t<QUIT>)>\n <COND (,RADIO-ON\n\t<TELL \"Someone turns off the radio. \">\n\t<SETG RADIO-ON <>>)>\n <TELL \"You hear footsteps inside the house. Then the door swings open.\" CR>\n <COND (<1? ,TOO-LATE-KNOCKED>\n\t<SETG TOO-LATE-KNOCKED 2>\n\t<TELL\n\"The butler isn't smiling now. \\\"I told you Mr. Linder will be in touch.\nPlease leave before I call the police!\\\" He slams the door in your face.\" CR>)\n       (,TOO-LATE\n\t<SETG TOO-LATE-KNOCKED 1>\n\t;<FSET ,PHONG ,TOUCHBIT>\n\t<TELL\n\"\\\"Good evening,\\\" says a smiling face, \\\"I am Phong. I'm sorry, but\nyou're too late arriving here. Mr. Linder has other business now. But he\nthanks you for coming and says he'll be in touch. Good night!\\\" He\ncloses the door in your face.\" CR>)\n       (T\n\t<COND (<==? ,HERE ,FRONT-PORCH>\n\t\t<MOVE ,PHONG ,ENTRY>\n\t\t<TELL\n\"\\\"Good evening,\\\" says a smiling face, \\\"I am Phong. Please come in.\\\"\nHe leads you into the house and closes the door behind you.|\" CR>\n\t\t<FCLEAR ,FRONT-DOOR ,OPENBIT>\n\t\t<GOTO ,ENTRY>)\n\t       (T\n\t\t<TELL\n\"\\\"I've been told that detectives are sneaky, but this is too much!\\\"\" CR>)>\n\t<ENABLE <QUEUE I-GOTO-LIVING-ROOM 2>>)>>"
  },
  "I-GOTO-LIVING-ROOM": {
   "name": "I-GOTO-LIVING-ROOM",
   "file": "events.zil",
   "line": 388,
   "endLine": 408,
   "source": "<ROUTINE I-GOTO-LIVING-ROOM ()\n\t <TELL \"Phong says, \\\"I believe \">\n\t <COND (<IN? ,MONICA ,LIVING-ROOM> <TELL \"the Linders are\">)\n\t       (T <TELL \"Mr. Linder is\">)>\n\t <TELL \" in the living room. Please follow me.\\\"\">\n\t <COND (<0? <BAND 16 <GETP ,HERE ,P?CORRIDOR>>>\n\t\t<FSET ,HALL-3 ,TOUCHBIT>\n\t\t<TELL \" He leads you into a hallway and turns left. \"\n\t\t\t  <GETP ,HALL-3 ,P?LDESC>>)\n\t       (T <TELL \" He leads you north along the hallway. \">)>\n\t <COND (<IN? ,MONICA ,LIVING-ROOM>\n\t\t<TELL\n\" As you get near the living room, you hear voices talking, half-loud\nand fast.\">)>\n\t <CRLF> <CRLF>\n\t <MOVE ,PHONG ,LIVING-ROOM>\n\t <GOTO ,LIVING-ROOM>\n\t <COND (<FIX-PHONG-MOVEMENT>\n\t\t<ENABLE <QUEUE I-PHONG 1>>\n\t\t<SETG WELCOMED T>)>\n\t <I-LINDER-WELCOME>>"
  },
  "I-LINDER-WELCOME": {
   "name": "I-LINDER-WELCOME",
   "file": "events.zil",
   "line": 410,
   "endLine": 444,
   "source": "<ROUTINE I-LINDER-WELCOME ()\n\t<TELL CR\n\"Linder turns to you and says, \\\"Detective, am I glad to see you! \">\n\t<COND (,TOO-LATE\n\t       <TELL\n\"I was afraid you'd met with an accident. I'm afraid I don't have time\nfor you now, since I have another appointment. But thank you for\ncoming. I'll be in touch. Phong, please show the Detective out.\\\"\">\n\t       <SAID-TO ,LINDER>\n\t       <ESTABLISH-GOAL ,LINDER ,OFFICE>\n\t       <DISABLE <INT I-LINDER-TO-OFFICE>>\n\t       <ENABLE <QUEUE I-PHONG-EJECTS 3>>)\n\t      (T\n\t       <ESTABLISH-GOAL ,PHONG ,KITCHEN>\n\t       <SETG OHERE ,HERE>\n\t       <SETG LINDER-FOLLOWS-YOU T>\n\t       <ENABLE <QUEUE I-LINDER-FOLLOWS-YOU -1>>\n\t       <COND (<IN? ,MONICA ,HERE>\n\t\t      <TELL \"This is my daughter, Monica, and of course \">)\n\t\t     (T <TELL \"I see \">)>\n\t       <TELL\n\"you've met Phong already.\\\" He looks at a wrist watch with a gleaming\nsilver bracelet. \\\"I see you're\">\n\t       <SAID-TO ,LINDER>\n\t       <COND (<L? ,PRESENT-TIME 490>\n\t\t      <TELL \" right on time.\">\n\t\t      <ENABLE <QUEUE I-LINDER-TO-OFFICE 10>>)\n\t\t     (<L? ,PRESENT-TIME 500>\n\t\t      <TELL \" a little late.\">\n\t\t      <ENABLE <QUEUE I-LINDER-TO-OFFICE 5>>)\n\t\t     (T\n\t\t      <TELL \" rather late.\">\n\t\t      <ENABLE <QUEUE I-LINDER-TO-OFFICE 1>>)>\n\t       <TELL \" I'll be with you as soon as I finish my drink.\\\"\">)>\n\t<CRLF>>"
  },
  "I-PHONG-EJECTS": {
   "name": "I-PHONG-EJECTS",
   "file": "events.zil",
   "line": 446,
   "endLine": 455,
   "source": "<ROUTINE I-PHONG-EJECTS ()\n <FCLEAR ,FRONT-DOOR ,OPENBIT>\n <FSET ,FRONT-DOOR ,LOCKED>\n <TELL\n\"Phong grabs you by the arm and guides you to the front door. It's\nobvious that you have no choice. \\\"Thank you for coming, Detective. Good\nnight!\\\" He closes the door in your face.\" CR>\n <SETG TOO-LATE-KNOCKED 1>\n <GOTO ,FRONT-PORCH>\n <RTRUE>>"
  },
  "I-LINDER-FOLLOWS-YOU": {
   "name": "I-LINDER-FOLLOWS-YOU",
   "file": "events.zil",
   "line": 461,
   "endLine": 478,
   "source": "<ROUTINE I-LINDER-FOLLOWS-YOU ()\n <COND (<NOT <==? ,OHERE ,HERE>>\n\t<WHERE-UPDATE ,LINDER>\n\t<MOVE ,LINDER ,HERE>\n\t<TELL \"Linder follows you \">\n\t<COND (<AND <OR <EQUAL? ,OHERE ,HALL-1 ,HALL-2>\n\t\t\t<EQUAL? ,OHERE ,HALL-3 ,HALL-4>>\n\t\t    <OR <EQUAL?  ,HERE ,HALL-1 ,HALL-2>\n\t\t\t<EQUAL?  ,HERE ,HALL-3 ,HALL-4>>>\n\t       <TELL \"along\">)\n\t      (T\n\t       <TELL \"into\">)>\n\t<THE? ,HERE>\n\t<TELL \" \" D ,HERE \".\">\n\t<COND (<AND <PROB 50> <WINDOW-IN? ,HERE>>\n\t       <TELL \" He looks out the window and checks the lock.\">)>\n\t<CRLF>\n\t<SETG OHERE ,HERE>)>>"
  },
  "I-LINDER-TO-OFFICE": {
   "name": "I-LINDER-TO-OFFICE",
   "file": "events.zil",
   "line": 480,
   "endLine": 512,
   "source": "<ROUTINE I-LINDER-TO-OFFICE (\"AUX\" (VAL <>))\n\t <DISABLE <INT I-LINDER-FOLLOWS-YOU>>\n\t <COND (<OR <EQUAL? ,HERE ,WORKSHOP> <OUTSIDE? ,HERE>>\n\t\t<MOVE ,LINDER ,CARVED-CHAIR>\n\t\t<SETG TOO-LATE T>\n\t\t<COND (<EQUAL? ,HERE ,BACK-YARD ,OFFICE-PORCH ,OFFICE-PATH>\n\t\t       <TELL \"The lights go on in Linder's office.\" CR>)>\n\t\t<RFALSE>)\n\t       (<NOT <EQUAL? ,OFFICE ,HERE <LOC ,PLAYER>>>\n\t\t<SET VAL ,M-FATAL>\n\t\t<TELL\n\"Linder gulps down the rest of his drink. \\\"Well, Detective,\\\" he says,\n\\\"I'm anxious to get on with our business. Let's you and I go to my\noffice so we can talk undisturbed.\\\" \">\n\t\t<COND (<FSET? <LOC ,PLAYER> ,FURNITURE>\n\t\t       <SETG WINNER ,PLAYER>\n\t\t       <PERFORM ,V?STAND>)>\n\t\t<COND (<EQUAL? ,HERE ,HALL-4>\n\t\t       <TELL\n\"He takes you by the arm, opens a door to the east and leads you through it.\"\nCR>)\n\t\t      (T <TELL\n\"He takes you by the arm and leads you through the hallway. Just south\nof the entry, he opens a door to the east and leads you through it.\" CR>)>\n\t\t<FSET ,OFFICE-DOOR ,OPENBIT>\n\t\t<GOTO ,OFFICE>\n\t\t<WHERE-UPDATE ,LINDER>\n\t\t<SAID-TO ,LINDER>)>\n\t <ENABLE <QUEUE I-LINDER-IN-OFFICE 1>>\n\t <FSET ,LINDER ,NDESCBIT>\n\t <MOVE ,LINDER ,CARVED-CHAIR>\n\t <TELL \"Linder sits down in the carved chair.\" CR>\n\t .VAL>"
  },
  "I-LINDER-IN-OFFICE": {
   "name": "I-LINDER-IN-OFFICE",
   "file": "events.zil",
   "line": 515,
   "endLine": 528,
   "source": "<ROUTINE I-LINDER-IN-OFFICE ()\n\t<COND (,LINDER-EXPLAINED <>)\n\t      (<IN? <LOC ,PLAYER> ,ROOMS>\n\t       <ENABLE <QUEUE I-LINDER-IN-OFFICE 5>>\n\t       <SAID-TO ,LINDER>\n\t       <COND (<0? ,LINDER-ASKED-YOU-TO-SIT>\n\t\t      <TELL\n\"\\\"I\" \"f you'll just take a chair, I'll explain what this is all about.\\\"\"\nCR>)\n\t\t     (T <TELL \"Linder says, \\\"I repeat: i\"\n\"f you'll just take a chair, I'll explain what this is all about.\\\"\"\nCR>)>\n\t       <SETG LINDER-ASKED-YOU-TO-SIT <+ 1 ,LINDER-ASKED-YOU-TO-SIT>>)\n\t      (T <ENABLE <QUEUE I-LINDER-EXPLAIN 1>>)>>"
  },
  "I-LINDER-EXPLAIN": {
   "name": "I-LINDER-EXPLAIN",
   "file": "events.zil",
   "line": 531,
   "endLine": 546,
   "source": "<ROUTINE I-LINDER-EXPLAIN ()\n <COND (<NOT ,LINDER-EXPLAINED>\n\t<SETG LINDER-EXPLAINED T>\n\t<TELL\n\"Linder begins his story. \\\"My late wife, may she rest in peace, got\ninvolved with a young man named Stiles. Naturally I tried to stop this\naffair, but without much success. Since my wife passed away, this Stiles\nfellow has gone off the deep end, I'm afraid, and blamed me for her\ndeath. I tried my best to ignore him, but he seems to have lost his\nsenses. This morning I received this note and decided to ask your\nhelp.\\\" He hands the note to you.\" CR>\n\t<SAID-TO ,LINDER>\n\t<THIS-IS-IT ,THREAT-NOTE>\n\t<MOVE ,THREAT-NOTE ,PLAYER>\n\t<FSET ,THREAT-NOTE ,TOUCHBIT>\n\t<FCLEAR ,THREAT-NOTE ,INVISIBLE>)>>"
  },
  "FIRE-SHOT": {
   "name": "FIRE-SHOT",
   "file": "events.zil",
   "line": 549,
   "endLine": 578,
   "source": "<ROUTINE FIRE-SHOT ()\n\t<TELL \" Suddenly there is a flash of light and an explosion, and \">\n\t<COND (<AND ,PLAYER-NEAR-SHOT\n\t\t    <G? 2 <- ,PRESENT-TIME ,PLAYER-NEAR-SHOT>>>\n\t       <TELL\n\"everything goes black. What a lousy way to step off, poking around like\na two-bit shamus!\" CR>\n\t       <QUIT>)\n\t      (<AND <PROB 50>\n\t\t    <NOT ,PLAYER-HIDING>\n\t\t    <NOT <EQUAL? <LOC ,PLAYER> ,WOODEN-CHAIR ,LOUNGE>>>\n\t       <TELL\n\"mortal pain radiates from your heart. As blood fills your lungs and a\nscream fills your brain, you feel sure of only one thing: you should\nhave taken a chair when Linder asked you to.\" CR>\n\t       <QUIT>)>\n\t<TELL \"the window falls into dozens of shiny shards.\">\n\t<TELL \" The cat bolts and disappears somewhere.\">\n\t<REMOVE ,CAT>\n\t<SETG SHOT-FIRED T>\n\t<FCLEAR ,PIECE-OF-WIRE ,TRYTAKEBIT>\n\t<FSET\t,PIECE-OF-WIRE ,TAKEBIT>\n\t<FCLEAR ,PIECE-OF-PUTTY ,TRYTAKEBIT>\n\t<FSET\t,PIECE-OF-PUTTY ,TAKEBIT>\n\t<FCLEAR ,GLOBAL-SHOT ,INVISIBLE>\n\t<FSET ,OFFICE-WINDOW ,RMUNGBIT>\n\t<FCLEAR ,BROKEN-GLASS ,INVISIBLE>\n\t;<COND (<0? ,DIFFICULTY> <MOVE ,BROKEN-GLASS ,OFFICE-PORCH>)\n\t      (<==? ,DIFFICULTY ,DIFFICULTY-MAX>\n\t       <MOVE ,BROKEN-GLASS ,OFFICE>)>>"
  },
  "I-PHONG-RETIRES": {
   "name": "I-PHONG-RETIRES",
   "file": "events.zil",
   "line": 580,
   "endLine": 584,
   "source": "<ROUTINE I-PHONG-RETIRES ()\n <WHERE-UPDATE ,PHONG>\n <MOVE ,PHONG ,BUTLER-ROOM>\n <COND (<==? <GETP ,HERE ,P?LINE> ,OUTSIDE-LINE-C>\n\t<TELL \"The lights go out, one by one, all over the house.\" CR>)>>"
  },
  "I-LINDER-RETIRES": {
   "name": "I-LINDER-RETIRES",
   "file": "events.zil",
   "line": 586,
   "endLine": 592,
   "source": "<ROUTINE I-LINDER-RETIRES ()\n <WHERE-UPDATE ,LINDER>\n <MOVE ,LINDER ,LINDER-ROOM>\n <COND (<EQUAL? ,HERE ,ROCK-GARDEN ,BACK-YARD ,OFFICE-PORCH>\n\t<TELL\n\"The lights go off in Linder's office and then in the bedroom at the\nother end of the house.\" CR>)>>"
  },
  "FIX-PHONG-MOVEMENT": {
   "name": "FIX-PHONG-MOVEMENT",
   "file": "events.zil",
   "line": 676,
   "endLine": 686,
   "source": "<ROUTINE FIX-PHONG-MOVEMENT (\"AUX\" MG ELAPSED OT)\n <SET MG <GET ,MOVEMENT-GOALS ,PHONG-C>>\n <SET ELAPSED <- ,PRESENT-TIME 480>>\n <REPEAT ()\n\t <COND (<0? <SET OT <GET .MG ,MG-TIME>>>\n\t\t<RTRUE>)>\n\t <COND (<G? 1 <SET OT <- .OT .ELAPSED>>>\n\t\t<SETG TOO-LATE T>\n\t\t<RFALSE>)>\n\t <PUT .MG ,MG-TIME .OT>\n\t <SET MG <REST .MG ,MG-LENGTH>>>>"
  },
  "IN-MOTION?": {
   "name": "IN-MOTION?",
   "file": "events.zil",
   "line": 688,
   "endLine": 694,
   "source": "<ROUTINE IN-MOTION? (PERSON \"AUX\" GT)\n\t <SET GT <GET ,GOAL-TABLES <GETP .PERSON ,P?CHARACTER>>>\n\t <COND (<AND <GET .GT ,GOAL-ENABLE>\n\t\t     <GET .GT ,GOAL-S>\n\t\t     <NOT <==? <LOC .PERSON> <GET .GT ,GOAL-F>>>>\n\t\t<RTRUE>)\n\t       (T <RFALSE>)>>"
  },
  "START-MOVEMENT": {
   "name": "START-MOVEMENT",
   "file": "events.zil",
   "line": 696,
   "endLine": 699,
   "source": "<ROUTINE START-MOVEMENT ()\n\t <ENABLE <QUEUE I-MONICA 1>>\n\t <ENABLE <QUEUE I-FOLLOW -1>>\n\t <ENABLE <QUEUE I-ATTENTION -1>>>"
  },
  "IMOVEMENT": {
   "name": "IMOVEMENT",
   "file": "events.zil",
   "line": 710,
   "endLine": 728,
   "source": "<ROUTINE IMOVEMENT (PERSON INT \"AUX\" TB VAR DIS TIM ID RM GT)\n\t #DECL ((PERSON) OBJECT (TB) <PRIMTYPE VECTOR> (ID VAR DIS TIM) FIX)\n\t <SET TB <GET ,MOVEMENT-GOALS <SET ID <GETP .PERSON ,P?CHARACTER>>>>\n\t <SET GT <GET ,GOAL-TABLES .ID>>\n\t <COND (<NOT <==? 0 <SET RM <GET .TB ,MG-ROOM>>>>\n\t\t<COND (<GET .GT ,GOAL-PRIORITY>\n\t\t       <PUT .GT ,GOAL-QUEUED .RM>)\n\t\t      (T\n\t\t       <ESTABLISH-GOAL .PERSON .RM>)>)>\n\t <COND (<NOT <==? 0 <SET TIM <GET .TB ,MG-TIME>>>>\n\t\t<SET VAR <GET .TB ,MG-VARIATION>>\n\t\t<SET DIS <RANDOM <* .VAR 2>>>\n\t        <QUEUE .INT <+ .TIM <- .DIS .VAR>>>\n\t\t<PUT ,MOVEMENT-GOALS .ID <REST .TB ,MG-LENGTH>>\n\t\t<COND (<NOT <==? 0 <GET .TB ,MG-NEXT>>>\n\t\t       <PUT .TB\n\t\t\t    ,MG-NEXT\n\t\t\t    <+ <GET .TB ,MG-NEXT> <- .VAR .DIS>>>)>)>\n\t <RFALSE>>"
  },
  "I-FOLLOW": {
   "name": "I-FOLLOW",
   "file": "events.zil",
   "line": 730,
   "endLine": 742,
   "source": "<ROUTINE I-FOLLOW (\"AUX\" (FLG <>) (CNT 0) GT VAL)\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> ,CHARACTER-MAX>\n\t\t\t<RETURN>)\n\t\t       (<AND <GET <SET GT <GET ,GOAL-TABLES .CNT>> ,GOAL-S>\n\t\t\t     <OR <GET .GT ,GOAL-ENABLE>\n\t\t\t\t <0? <GET .GT ,ATTENTION>>>>\n\t\t\t<PUT .GT ,GOAL-ENABLE T>\n\t\t\t<COND (<SET VAL\n\t\t\t\t    <FOLLOW-GOAL <GET ,CHARACTER-TABLE .CNT>>>\n\t\t\t       <COND (<NOT <==? .FLG ,M-FATAL>>\n\t\t\t\t      <SET FLG .VAL>)>)>)>>\n\t .FLG>"
  },
  "I-ATTENTION": {
   "name": "I-ATTENTION",
   "file": "events.zil",
   "line": 744,
   "endLine": 759,
   "source": "<ROUTINE I-ATTENTION (\"AUX\" (FLG <>) (CNT 0) ATT)\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> ,CHARACTER-MAX> <RETURN>)\n\t       \t       (<==? <SET ATT <- <GET ,ATTENTION-TABLE .CNT> 1>> 1>\n\t\t\t<COND (<IN? <GET ,CHARACTER-TABLE .CNT> ,HERE>\n\t\t\t       <COND (<AND <==? .CNT ,MONICA-C>\n\t\t\t\t\t   ,MONICA-DASHED-OUT-DOOR>\n\t\t\t\t      <SETG MONICA-DASHED-OUT-DOOR <>>)\n\t\t\t\t     (T\n\t\t\t\t      <TELL D <GET ,CHARACTER-TABLE .CNT>\n\t\t\t\t\t      \" is acting impatient.\" CR>)>\n\t\t\t       <SET FLG T>)>)\n\t\t       (<==? .ATT 0>\n\t\t\t<PUT <GET ,GOAL-TABLES .CNT> ,GOAL-ENABLE T>)>\n\t\t <PUT ,ATTENTION-TABLE .CNT .ATT>>\n\t .FLG>"
  },
  "GRAB-ATTENTION": {
   "name": "GRAB-ATTENTION",
   "file": "events.zil",
   "line": 761,
   "endLine": 773,
   "source": "<ROUTINE GRAB-ATTENTION (PERSON \"AUX\" (CHR<GETP .PERSON ,P?CHARACTER>) GT ATT)\n\t #DECL ((PERSON) OBJECT (ATT) FIX)\n\t <SET GT <GET ,GOAL-TABLES .CHR>>\n\t <COND (<GET .GT ,GOAL-S>\n\t\t<PUT ,ATTENTION-TABLE .CHR <SET ATT<GET .GT ,ATTENTION-SPAN>>>\n\t\t<COND (<==? .ATT 0>\n\t\t       <PUT .GT ,GOAL-ENABLE T>\n\t\t       <RFALSE>)\n\t\t      (<GET .GT ,GOAL-ENABLE>\n\t\t       <PUT .GT ,GOAL-ENABLE <>>)>)>\n\t <SETG QCONTEXT .PERSON>\n\t <SETG QCONTEXT-ROOM ,HERE>\n\t <RTRUE>>"
  },
  "UNPRIORITIZE": {
   "name": "UNPRIORITIZE",
   "file": "events.zil",
   "line": 810,
   "endLine": 815,
   "source": "<ROUTINE UNPRIORITIZE (PERSON \"AUX\" GT)\n\t <SET GT <GET ,GOAL-TABLES <GETP .PERSON ,P?CHARACTER>>>\n\t <PUT .GT ,GOAL-PRIORITY <>>\n\t <COND (<GET .GT ,GOAL-QUEUED>\n\t\t<ESTABLISH-GOAL .PERSON <GET .GT ,GOAL-QUEUED>>\n\t\t<PUT .GT ,GOAL-QUEUED <>>)>>"
  },
  "ESTABLISH-GOAL": {
   "name": "ESTABLISH-GOAL",
   "file": "events.zil",
   "line": 817,
   "endLine": 846,
   "source": "<ROUTINE ESTABLISH-GOAL (PERSON GOAL \"OPTIONAL\" (PRIORITY <>)\n\t\t\t \t     \"AUX\" (HERE <LOC .PERSON>) HL GL GT)\n\t #DECL ((PERSON GOAL HERE) OBJECT (HL GL) FIX\n\t\t(PRIORITY) <OR FALSE ATOM>)\n\t <SET GT <GET ,GOAL-TABLES <GETP .PERSON ,P?CHARACTER>>>\n\t <COND (.PRIORITY\n\t\t<PUT .GT ,GOAL-ENABLE T>\n\t\t<PUT .GT ,GOAL-PRIORITY T>\n\t\t<PUT .GT ,GOAL-QUEUED .HERE>)>\n\t <COND (<==? <SET HL <GETP .HERE ,P?LINE>>\n\t\t     <SET GL <GETP .GOAL ,P?LINE>>>\n\t\t<PUT .GT ,GOAL-I <>>)\n\t       (<==? .HL ,OUTSIDE-LINE-C>\n\t\t<PUT .GT ,GOAL-I ,FRONT-PORCH>)\n\t       (<==? .HL ,OFFICE-LINE-C>\n\t\t<PUT .GT ,GOAL-I ,HALL-4>)\n\t       (<==? .HL ,MONICA-LINE-C>\n\t\t<PUT .GT ,GOAL-I ,MONICA-ROOM>)\n\t       (<==? .GL ,OUTSIDE-LINE-C>\n\t\t<PUT .GT ,GOAL-I ,ENTRY>)\n\t       (<==? .GL ,MONICA-LINE-C>\n\t\t<PUT .GT ,GOAL-I ,HALL-2>)\n\t       (T\n\t\t<PUT .GT ,GOAL-I ,HALL-3>)>\n\t <PUT .GT\n\t      ,GOAL-S\n\t      %<COND (<GASSIGNED? PREDGEN> '<GETP .GOAL ,P?STATION>)\n\t\t     (T\t\t\t  ',<GETP .GOAL ,P?STATION>)>>\n\t <PUT .GT ,GOAL-F .GOAL>\n\t <LOC .PERSON>>"
  },
  "FOLLOW-GOAL": {
   "name": "FOLLOW-GOAL",
   "file": "events.zil",
   "line": 848,
   "endLine": 893,
   "source": "<ROUTINE FOLLOW-GOAL (PERSON \"AUX\" (HERE <LOC .PERSON>) LINE LN RM GT GOAL FLG\n\t\t      \t\t   (GOAL-FLAG <>) (IGOAL <>) LOC (CNT 1) DIR)\n\t #DECL ((PERSON HERE LOC RM) OBJECT (LN CNT) FIX\n\t\t(GOAL-FLAG IGOAL) <OR ATOM FALSE>)\n\t <SET GT <GET ,GOAL-TABLES <GETP .PERSON ,P?CHARACTER>>>\n\t <COND (<==? .HERE <GET .GT ,GOAL-F>>\n\t\t<PUT .GT ,GOAL-S <>>\n\t\t<RETURN <>>)\n\t       (<NOT <GET .GT ,GOAL-ENABLE>> <RFALSE>)>\n\t <COND (<NOT <==? .HERE\n\t\t\t  <SET LOC %<COND (<GASSIGNED? PREDGEN>\n\t\t\t\t\t    '<GETP .HERE ,P?STATION>)\n\t\t      \t\t\t  (T\n\t\t\t\t\t   ',<GETP .HERE ,P?STATION>)>>>>\n\t\t<SET FLG <MOVE-PERSON .PERSON .LOC>>\n\t\t<RETURN .FLG>)>\n\t <COND (<SET GOAL <GET .GT ,GOAL-I>>\n\t\t<SET IGOAL T>)\n\t       (T <SET GOAL <GET .GT ,GOAL-S>>)>\n\t <COND (<NOT .GOAL> <RFALSE>)\n\t       (<==? .HERE .GOAL>\n\t\t<COND (.IGOAL\n\t\t       <RETURN <TRANSFER .PERSON .GOAL <GET .GT ,GOAL-F>>>)\n\t\t      (<NOT <==? .HERE <GET .GT ,GOAL-F>>>\n\t\t       <SET FLG <MOVE-PERSON .PERSON <GET .GT ,GOAL-F>>>\n\t\t       <PUT .GT ,GOAL-S <>>\n\t\t       <RETURN .FLG>)\n\t\t      (T\n\t\t       <PUT .GT ,GOAL-S <>>\n\t\t       <RETURN <>>)>)>\n\t <SET LN <GETP .GOAL ,P?LINE>>\n\t <SET LINE\n\t      <COND (<==? .LN ,OUTSIDE-LINE-C> ,OUTSIDE-LINE)\n\t\t    (<==? .LN ,INSIDE-LINE-C>  ,INSIDE-LINE)\n\t\t    (<==? .LN ,OFFICE-LINE-C>  ,OFFICE-LINE)\n\t\t    (<==? .LN ,MONICA-LINE-C>  ,MONICA-LINE)>>\n\t <REPEAT ()\n\t\t <COND (<==? <SET RM <GET .LINE .CNT>> .HERE>\n\t\t        <COND (.GOAL-FLAG\n\t\t\t       <SET LOC <GET .LINE <- .CNT 3>>>)\n\t\t\t      (T\n\t\t\t       <SET LOC <GET .LINE <+ .CNT 3>>>)>\n\t\t\t<RETURN <MOVE-PERSON .PERSON .LOC>>)\n\t\t       (<==? .RM .GOAL>\n\t\t\t<SET GOAL-FLAG T>)>\n\t\t <SET CNT <+ .CNT 3>>>>"
  },
  "GOAL-REACHED": {
   "name": "GOAL-REACHED",
   "file": "events.zil",
   "line": 895,
   "endLine": 899,
   "source": "<ROUTINE GOAL-REACHED (PERSON)\n\t #DECL ((PERSON) OBJECT)\n\t <APPLY <GET <GET ,GOAL-TABLES <GETP .PERSON ,P?CHARACTER>>\n\t\t     ,GOAL-FUNCTION>\n\t\t,G-REACHED>>"
  },
  "MOVE-PERSON": {
   "name": "MOVE-PERSON",
   "file": "events.zil",
   "line": 901,
   "endLine": 1058,
   "source": "<ROUTINE MOVE-PERSON (PERSON WHERE \"AUX\" DIR GT OL COR PCOR CHR\n\t\t      \t\t\t (FLG <>) DR (VAL <>)\n\t\t\t(STI <COND (,MET-STILES? \"Stiles\") (T \"someone\")>))\n\t #DECL ((PERSON WHERE) OBJECT)\n\t <SET GT <GET ,GOAL-TABLES <SET CHR <GETP .PERSON ,P?CHARACTER>>>>\n\t <SET OL <LOC .PERSON>>\n\t <SET DIR <DIR-FROM .OL .WHERE>>\n\t <COND (<==? <PTSIZE <SET DR <GETPT .OL .DIR>>> ,DEXIT>\n\t\t<SET DR <GETB .DR ,DEXITOBJ>>\n\t\t<COND (<NOT <FSET? .DR ,OPENBIT>>\n\t\t       <COND (<NOT <FSET? .DR ,LOCKED>> <FSET .DR ,OPENBIT>)>)\n\t\t      (T <SET DR <>>)>)\n\t       (T <SET DR <>>)>\n\t <PUT .GT ,GOAL-LDIR .DIR>\n\t <COND (<AND <==? .OL ,HERE> <NOT <FSET? .PERSON ,INVISIBLE>>>\n\t\t<SET FLG T>\n\t\t<THIS-IS-S-HE .PERSON>\n\t\t<COND (<AND <==? .PERSON ,STILES> ,DUFFY-WITH-STILES>\n\t\t       <SETG SEEN-DUFFY? T>\n\t\t       <TELL \"Sgt. Duffy\">)\n\t\t      (<NOT <FSET? .PERSON ,TOUCHBIT>> <TELL \"Someone\">)\n\t\t      (T <TELL D .PERSON>)>\n\t\t<COND (<==? .DIR ,P?OUT>\n\t\t       <COND (<AND <==? .PERSON ,STILES> ,DUFFY-WITH-STILES>\n\t\t\t      <TELL \" leads \" .STI \" out of the room.\" CR>)\n\t\t\t     (T <TELL \" leaves the room.\" CR>)>)\n\t\t      (<==? .DIR ,P?IN>\n\t\t       <COND (<AND .DR <NOT <==? .PERSON ,STILES>>>\n\t\t\t      <TELL \" opens the \" D .DR \" and\">)>\n\t\t       <COND (<AND <==? .PERSON ,STILES> ,DUFFY-WITH-STILES>\n\t\t\t      <TELL \" leads \" .STI \" into another room\">)\n\t\t\t     (T <TELL \" goes into another room\">)>\n\t\t       <COND (<AND .DR\n\t\t\t\t   <FSET? .DR ,LOCKED>\n\t\t\t\t   <NOT <==? .PERSON ,STILES>>>\n\t\t\t      ;<FCLEAR .DR ,OPENBIT>\n\t\t\t      <TELL \", locking the door again\">)>\n\t\t       <TELL \".\" CR>)\n\t\t      (T\n\t\t       <COND (<AND .DR <NOT <==? .PERSON ,STILES>>>\n\t\t\t      <TELL \" opens the \" D .DR \" and\">)>\n\t\t       <COND (<AND <==? .PERSON ,STILES> ,DUFFY-WITH-STILES>\n\t\t\t      <TELL \" leads \" .STI \" off to \">)\n\t\t\t     (T <TELL \" heads off to \">)>\n\t\t       <DIR-PRINT .DIR>\n\t\t       <COND (<AND .DR\n\t\t\t\t   <FSET? .DR ,LOCKED>\n\t\t\t\t   <NOT <==? .PERSON ,STILES>>>\n\t\t\t      ;<FCLEAR .DR ,OPENBIT>\n\t\t\t      <TELL \", locking the door again\">)>\n\t\t       <TELL \".\" CR>)>)\n\t       (<AND <==? .WHERE ,HERE> <NOT <FSET? .PERSON ,INVISIBLE>>>\n\t\t<SET FLG T>\n\t\t<THIS-IS-S-HE .PERSON>\n\t\t<COND (<NOT <==? ,HERE <GET .GT ,GOAL-F>>>\n\t\t       <COND (<AND <==? .PERSON ,STILES> ,DUFFY-WITH-STILES>\n\t\t\t      <SETG SEEN-DUFFY? T>\n\t\t\t      <TELL \"Sgt. Duffy\">\n\t\t\t      <TELL \" leads \" .STI \" past you.\" CR>)\n\t\t\t     (<NOT <FSET? .PERSON ,TOUCHBIT>>\n\t\t\t      <TELL \"Someone walks past you.\" CR>)\n\t\t\t     (T <TELL D .PERSON \" walks past you.\" CR>)>)>)\n\t       (<AND <SET COR <GETP ,HERE ,P?CORRIDOR>>\n\t\t     <NOT <FSET? .PERSON ,INVISIBLE>>>\n\t\t<COND (<AND <SET PCOR <GETP .OL ,P?CORRIDOR>>\n\t\t\t    <NOT <==? <BAND .COR .PCOR> 0>>>\n\t\t       <SET FLG T>\n\t\t       <THIS-IS-S-HE .PERSON>\n\t\t       <COND (<NOT <GETP .WHERE ,P?CORRIDOR>>\n\t\t\t      <COND (<AND <==? .PERSON ,STILES>\n\t\t\t\t\t  ,DUFFY-WITH-STILES>\n\t\t\t\t     <SETG SEEN-DUFFY? T>\n\t\t\t\t     <TELL \"Sgt. Duffy\">)\n\t\t\t\t    (<NOT <FSET? .PERSON ,TOUCHBIT>>\n\t\t\t\t     <TELL \"Someone\">)\n\t\t\t\t    (T <TELL D .PERSON>)>\n\t\t\t      <TELL \", off to \">\n\t\t\t      <DIR-PRINT <COR-DIR ,HERE .OL>>\n\t\t\t      <TELL \",\">\n\t\t\t      <COND (<AND .DR <NOT <==? .PERSON ,STILES>>>\n\t\t\t\t     <TELL \" opens a door and\">)>\n\t\t\t      <COND (<AND <==? .PERSON ,STILES>\n\t\t\t\t\t  ,DUFFY-WITH-STILES>\n\t\t\t\t     <TELL \" leads \" .STI>)\n\t\t\t\t    (<OUTSIDE? ,HERE>\n\t\t\t\t     <TELL \" leaves your view\">)\n\t\t\t\t    (T\n\t\t\t\t     <TELL \" ducks into a room\">)>\n\t\t\t      <TELL \" to \">\n\t\t\t      <DIR-PRINT <DIR-FROM .OL .WHERE>>\n\t\t\t      <COND (<AND .DR\n\t\t\t\t\t  <FSET? .DR ,LOCKED>\n\t\t\t\t\t  <NOT <==? .PERSON ,STILES>>>\n\t\t\t\t     ;<FCLEAR .DR ,OPENBIT>\n\t\t\t\t     <TELL \", locking the door again\">)>\n\t\t\t      <TELL \".\" CR>)\n\t\t\t     (<0? <BAND .COR <GETP .WHERE ,P?CORRIDOR>>>\n\t\t\t      <COND (<AND <==? .PERSON ,STILES>\n\t\t\t\t\t  ,DUFFY-WITH-STILES>\n\t\t\t\t     <SETG SEEN-DUFFY? T>\n\t\t\t\t     <TELL \"Sgt. Duffy, with \" .STI\" in tow\">)\n\t\t\t\t    (<NOT <FSET? .PERSON ,TOUCHBIT>>\n\t\t\t\t     <TELL \"Someone\">)\n\t\t\t\t    (T <TELL D .PERSON>)>\n\t\t\t      <TELL \", off to \">\n\t\t\t      <DIR-PRINT <COR-DIR ,HERE .OL>>\n\t\t\t      <TELL \", disappears from sight to \">\n\t\t\t      <DIR-PRINT <SET PCOR <DIR-FROM .OL .WHERE>>>\n\t\t\t      <TELL \".\" CR>)\n\t\t\t     (T\n\t\t\t      <COND (<AND <==? .PERSON ,STILES>\n\t\t\t\t\t  ,DUFFY-WITH-STILES>\n\t\t\t\t     <SETG SEEN-DUFFY? T>\n\t\t\t\t     <TELL\"Sgt. Duffy, with \" .STI\" in tow,\">)\n\t\t\t\t    (<NOT <FSET? .PERSON ,TOUCHBIT>>\n\t\t\t\t     <TELL \"Someone\">)\n\t\t\t\t    (T <TELL D .PERSON>)>\n\t\t\t      <TELL \" is to \">\n\t\t\t      <DIR-PRINT <COR-DIR ,HERE .WHERE>>\n\t\t\t      <TELL \", heading toward \">\n\t\t\t      <DIR-PRINT <DIR-FROM .OL .WHERE>>\n\t\t\t      <TELL \".\" CR>)>)\n\t\t      (<AND <SET PCOR <GETP .WHERE ,P?CORRIDOR>>\n\t\t\t    <NOT <==? <BAND .COR .PCOR> 0>>>\n\t\t       <SET FLG T>\n\t\t       <THIS-IS-S-HE .PERSON>\n\t\t       <TELL \"To \">\n\t\t       <DIR-PRINT <COR-DIR ,HERE .WHERE>>\n\t\t       <COND (<AND <==? .PERSON ,STILES> ,DUFFY-WITH-STILES>\n\t\t\t      <SETG SEEN-DUFFY? T>\n\t\t\t      <TELL \" Sgt. Duffy, with \" .STI \" in tow,\">)\n\t\t\t     (<NOT <FSET? .PERSON ,TOUCHBIT>>\n\t\t\t      <TELL \" someone\">)\n\t\t\t     (T <TELL \" \" D .PERSON>)>\n\t\t       <COND (<OUTSIDE? .WHERE>\n\t\t\t      <TELL \" comes into view from \">)\n\t\t\t     (T <TELL \" enters the hallway from \">)>\n\t\t       <COND (<==? .OL ,LIMBO> <TELL \"the south\">)\n\t\t\t     (T <DIR-PRINT <DIR-FROM .WHERE .OL>>)>\n\t\t       <TELL \".\" CR>)>)>\n\t <WHERE-UPDATE .PERSON .FLG>\n\t <MOVE .PERSON .WHERE>\n\t <COND (<==? <GET .GT ,GOAL-F> .WHERE>\n\t\t<COND (<AND <NOT <SET VAL <GOAL-REACHED .PERSON>>>\n\t\t\t    <==? ,HERE .WHERE>\n\t\t\t    <NOT <FSET? .PERSON ,INVISIBLE>>>\n\t\t       <THIS-IS-S-HE .PERSON>\n\t\t       <TELL D .PERSON>\n\t\t       <COND (<OUTSIDE? ,HERE>\n\t\t\t      <TELL \" stops here.\" CR>)\n\t\t             (T <TELL \" steps into the room.\" CR>)>)>)>\n\t<COND (<EQUAL? .PERSON ,STILES> <I-MEET-DUFFY?>)>\n\t<COND (,DEBUG\n\t       <TELL \"[\" D .PERSON \" just went into\">\n\t       <THE? .WHERE>\n\t       <TELL \" \" D .WHERE \".]\" CR>)>\n\t <COND (<==? .VAL ,M-FATAL> .VAL)\n\t       (T .FLG)>>"
  },
  "DIR-FROM": {
   "name": "DIR-FROM",
   "file": "events.zil",
   "line": 1060,
   "endLine": 1071,
   "source": "<ROUTINE DIR-FROM (HERE THERE \"AUX\" (P 0) L TBL O)\n\t #DECL ((HERE THERE O) OBJECT (P L) FIX)\n <REPEAT ()\n\t <COND (<0? <SET P <NEXTP .HERE .P>>>\n\t\t<RFALSE>)\n\t       (<EQUAL? .P ,P?IN ,P?OUT> T)\n\t       (<NOT <L? .P ,LOW-DIRECTION>>\n\t\t<SET TBL <GETPT .HERE .P>>\n\t\t<SET L <PTSIZE .TBL>>\n\t\t<COND (<AND <EQUAL? .L ,DEXIT ,UEXIT ,CEXIT>\n\t\t\t    <==? <GETB .TBL ,REXIT> .THERE>>\n\t\t       <RETURN .P>)>)>>>"
  },
  "TRANSFER": {
   "name": "TRANSFER",
   "file": "events.zil",
   "line": 1073,
   "endLine": 1092,
   "source": "<ROUTINE TRANSFER (PERSON IGOAL FGOAL \"AUX\" V (FLG <>))\n\t #DECL ((PERSON IGOAL FGOAL) OBJECT)\n <SET V <COND (<==? .IGOAL ,FRONT-PORCH>\n\t       ;<FSET ,FRONT-DOOR ,OPENBIT>\n\t       <MOVE-PERSON .PERSON ,ENTRY>)\n\t      (<==? .IGOAL ,ENTRY>\n\t       ;<FSET ,FRONT-DOOR ,OPENBIT>\n\t       <MOVE-PERSON .PERSON ,FRONT-PORCH>)\n\t      (<==? .IGOAL ,MONICA-ROOM>\n\t       <FSET ,MONICA-DOOR ,OPENBIT>\n\t       <MOVE-PERSON .PERSON ,HALL-2>)\n\t      (<==? .IGOAL ,HALL-2>\n\t       <FSET ,MONICA-DOOR ,OPENBIT>\n\t       <MOVE-PERSON .PERSON ,MONICA-ROOM>)\n\t      (<==? .IGOAL ,HALL-4>\n\t       <MOVE-PERSON .PERSON ,HALL-3>)\n\t      (T\n\t       <MOVE-PERSON .PERSON ,HALL-4>)>>\n <ESTABLISH-GOAL .PERSON .FGOAL>\n .V>"
  },
  "WHERE-UPDATE": {
   "name": "WHERE-UPDATE",
   "file": "events.zil",
   "line": 1094,
   "endLine": 1104,
   "source": "<ROUTINE WHERE-UPDATE (PERSON \"OPTIONAL\" (FLG <>) \"AUX\" WT NC (CNT 0))\n\t <SET NC <GETP .PERSON ,P?CHARACTER>>\n\t <SET WT <GET ,WHERE-TABLES .NC>>\n\t <REPEAT ()\n\t\t <COND (<G? .CNT ,CHARACTER-MAX> <RETURN>)\n\t\t       (<==? .CNT .NC>)\n\t\t       (<OR <AND <0? .CNT> .FLG>\n\t\t\t    <IN? <GET ,CHARACTER-TABLE .CNT> <LOC .PERSON>>>\n\t\t\t<PUT .WT .CNT ,PRESENT-TIME>\n\t\t\t<PUT <GET ,WHERE-TABLES .CNT> .NC ,PRESENT-TIME>)>\n\t\t <SET CNT <+ .CNT 1>>>>"
  },
  "I-PHONG-UNCALLED": {
   "name": "I-PHONG-UNCALLED",
   "file": "events.zil",
   "line": 1120,
   "endLine": 1129,
   "source": "<ROUTINE I-PHONG-UNCALLED ()\n <COND (<NOT <GET <GET ,GOAL-TABLES ,PHONG-C> ,GOAL-S>>\n\t<ESTABLISH-GOAL ,PHONG ,PHONG-OLD-LOC>\n\t<COND (<==? <LOC ,PHONG> ,HERE>\n\t       <SAID-TO ,PHONG>\n\t       <TELL \"Inscrutably, Phong turns to leave.\">\n\t       <COND (<OR <NOT ,PLAYER-HIDING>\n\t\t\t  <FIND-FLAG ,HERE ,PERSON ,PHONG>>\n\t\t      <TELL \" \\\"If you need me again, just ring.\\\"\">)>\n\t       <CRLF>)>)>>"
  },
  "I-PHONG": {
   "name": "I-PHONG",
   "file": "events.zil",
   "line": 1131,
   "endLine": 1201,
   "source": "<ROUTINE I-PHONG (\"OPTIONAL\" (GARG <>) \"AUX\" (L <LOC ,PHONG>) MPB)\n <SET MPB ,MONICA-PUSHED-BUTTON>\n <COND (<NOT .GARG> <IMOVEMENT ,PHONG I-PHONG>)\n       (<==? .GARG ,G-REACHED>\n\t<COND (,PHONG-CALLED\n\t       <SETG PHONG-CALLED <>>\n\t       <SETG MONICA-PUSHED-BUTTON <>>\n\t       <ENABLE <QUEUE I-PHONG-UNCALLED 3>>\n\t       <COND (<==? .L ,HERE>\n\t\t      <COND (<AND ,PLAYER-HIDING\n\t\t\t\t  <NOT <FIND-FLAG ,HERE ,PERSON ,PHONG>>>\n\t\t\t     <TELL\n\"Suddenly Phong appears and \" \"looks around to see who pushed the button.\" CR>\n\t\t\t     <RTRUE>)\n\t\t\t    (T\n\t\t\t     <SAID-TO ,PHONG>\n\t\t\t     <TELL\n\"Suddenly Phong appears and \" \"says, \\\"You rang?\\\"\" CR>\n\t\t\t     <COND (.MPB\n\t\t\t\t    <TELL\n\"Monica says, \\\"Yes, Phong, I was testing a new twist on the household\nwiring that I thought of during the film.\">\n\t\t\t\t    <COND (,MONICA-TIED-TO\n\t\t\t\t\t   <TELL\n\" Can't you talk this copper into letting me loose?\\\" Phong opens his eyes\nwide for a moment but says nothing.\" CR>)\n\t\t\t\t\t  (T <TELL \"\\\"\" CR>)>)>)>\n\t\t      <RTRUE>)>)\n\t      (<==? .L ,OFFICE>\n\t       <COND (<OR ,PHONG-SEEN-CORPSE? <FSET? ,CORPSE ,INVISIBLE>>\n\t\t      <COND (<==? ,HERE ,OFFICE>\n\t\t\t     <SAID-TO ,PHONG>\n\t\t\t     <TELL\n\"Suddenly Phong enters the office. \\\"I believe you called for me,\nDetective.\\\"\" CR>)>)\n\t\t     (T\n\t\t      <SETG PHONG-SEEN-CORPSE? T>\n\t\t      <COND (<==? ,HERE ,OFFICE>\n\t\t\t     <TELL\n\"Suddenly Phong enters the office. When he sees that Linder has cashed\nin his chips, he turns away for a minute and bows his head.\" CR>)>)>)\n\t      (<==? .L ,OFFICE-PATH>\n\t       <ENABLE <QUEUE I-STILES-ARRIVE 4>>\n\t       <MOVE ,OUTSIDE-GUN ,OFFICE-PATH>\n\t       <FCLEAR ,OUTSIDE-GUN ,INVISIBLE>\n\t       <FCLEAR ,SIDE-FOOTPRINTS ,INVISIBLE>\n\t       <ESTABLISH-GOAL ,PHONG ,FRONT-PORCH>)\n\t      (<==? .L ,FRONT-PORCH>\n\t       <COND (<EQUAL? ,HERE ,FRONT-PORCH>\t;\"? Can this happen?\"\n\t\t      <TELL\n\"The butler comes up to you, looking agitated.\" CR>)\n\t\t     (T <TELL \"You hear the door bell ring.\" CR>)>\n\t       <MOVE ,PHONG ,ENTRY>\n\t       <FCLEAR ,MUDDY-SHOES ,INVISIBLE>\n\t       <ESTABLISH-GOAL ,PHONG ,OFFICE>)\n\t      (<==? .L ,ENTRY>\n\t       <COND (<==? ,HERE ,ENTRY>\n\t\t     <TELL \"Phong arrives and lets Sergeant Duffy in.\" CR>)>\n\t       <ESTABLISH-GOAL ,PHONG ,LIVING-ROOM>\n\t       <ESTABLISH-GOAL ,STILES ,LIVING-ROOM>)\n\t      (<==? .L ,LIVING-ROOM>\n\t       <ESTABLISH-GOAL ,PHONG ,KITCHEN>)\n\t      (<==? .L ,BUTLER-ROOM>\n\t       <COND (<AND <EQUAL? <META-LOC ,RECURSIVE-BOOK> ,BUTLER-ROOM>\n\t\t\t   <NOT <IN? ,RECURSIVE-BOOK ,PLAYER>>>\n\t\t      ;<FSET ,RECURSIVE-BOOK ,NDESCBIT>\n\t\t      <MOVE ,RECURSIVE-BOOK ,PHONG>)>\n\t       <COND (<IN? ,PLAYER ,BUTLER-ROOM>\n\t\t      <TELL\n\"Suddenly Phong comes in, lies down, and starts reading a book.\" CR>)>\n\t       <RTRUE>)>)>>"
  },
  "I-STILES": {
   "name": "I-STILES",
   "file": "events.zil",
   "line": 1204,
   "endLine": 1304,
   "source": "<ROUTINE I-STILES (\"OPTIONAL\" (GARG <>) \"AUX\" (L <LOC ,STILES>))\n <COND (<NOT .GARG> <IMOVEMENT ,STILES I-STILES>)\n       (<==? .GARG ,G-REACHED>\n\t<COND (<==? .L ,OFFICE-PORCH>\n\t       <COND (,WELCOMED\n\t\t      <COND (<==? ,HERE ,OFFICE>\n\t\t\t     <TELL CR\n\"Linder looks toward the window and says, \\\"I don't think Phong has\nanswered the door bell yet.\\\" He reaches toward the butler's button\nand at the same instant shouts \\\"Stiles!\\\" You turn around and dimly see\na figure outside.\">\n\t\t\t     <FIRE-SHOT>\n\t\t\t     <TELL\n\" The figure outside turns and runs before you can see the face. When\nyou turn back around, you see Linder slumping down in his chair, with a\nbloody stain spreading across his silk shirt. He teeters on the edge of\nthe seat, then falls onto the floor, quite dead.\" CR>\n\t\t\t     <REMOVE ,LINDER>\n\t\t\t     <SETG QCONTEXT <>>\n\t\t\t     <SETG LINDER-FOLLOWS-YOU <>>\n\t\t\t     <ROB ,LINDER ,CORPSE>\n\t\t\t     <FCLEAR ,CORPSE ,INVISIBLE>\n\t\t\t     <SETG LINDER-FOLLOWS-YOU <>>\n\t\t\t     <DISABLE <INT I-LINDER-IN-OFFICE>>\n\t\t\t     <DISABLE <INT I-PHONG-RETIRES>>\n\t\t\t     <DISABLE <INT I-LINDER-RETIRES>>\n\t\t\t     <ENABLE <QUEUE I-AMBULANCE 150>>\n\t\t\t     <MOVE ,STILES ,LIMBO>\n\t\t\t     <FSET ,STILES ,INVISIBLE>\n\t\t\t     <PUT <GET ,GOAL-TABLES ,STILES-C> ,GOAL-S <>>\n\t\t\t     <FCLEAR ,BACK-FOOTPRINTS ,INVISIBLE>\n\t\t\t     <ENABLE <QUEUE I-DUFFY-ARRIVE 3>>\n\t\t\t     <SETG MURDER-TIME ,PRESENT-TIME>\n\t\t\t     <RFATAL>)>)\n\t\t     (T\n\t\t      <FCLEAR ,BACK-GATE ,LOCKED>\n\t\t      <SETG TOO-LATE T>\n\t\t      <ESTABLISH-GOAL ,STILES ,OFFICE-PATH>\n\t\t      <ENABLE <QUEUE I-DUFFY-ARRIVE 5>>\n\t\t      <COND (<EQUAL? ,HERE ,BACK-YARD ,ROCK-GARDEN>\n\t\t\t     <COND (<FSET? ,STILES ,TOUCHBIT> <TELL \"Stiles\">)\n\t\t\t\t   (T <TELL \"The visitor\">)>\n\t\t\t     <TELL\n\" comes up to Linder's office entrance. A tall man opens the\noffice door and steps out. They speak briefly, then the tall man counts out\nsome money and sends \">\n\t\t\t     <COND (<FSET? ,STILES ,TOUCHBIT> <TELL \"Stiles\">)\n\t\t\t\t   (T <TELL \"the person\">)>\n\t\t\t     <TELL \" away.\" CR>)\n\t\t\t    (<EQUAL? ,HERE ,OFFICE-PORCH>\n\t\t\t     <COND (<FSET? ,STILES ,TOUCHBIT> <TELL \"Stiles\">)\n\t\t\t\t   (T <TELL \"The visitor\">)>\n\t\t\t     <TELL\n\" pushes you out of the way and\"\n\" knocks on the door of Linder's office. A tall man opens it, speaks to\nhim briefly, hands him some money, and sends him away.\" CR>)\n\t\t\t    (<EQUAL? ,HERE ,OFFICE-PATH>\n\t\t\t     <COND (<FSET? ,STILES ,TOUCHBIT> <TELL \"Stiles\">)\n\t\t\t\t   (T <TELL \"The visitor\">)>\n\t\t\t     <TELL\n\" knocks on the door of Linder's office. A tall man opens it, speaks to\nhim briefly, hands him some money, and sends him away.\" CR>)>)>)\n\t      (<==? .L ,OFFICE-PATH>\n\t       <REMOVE ,STILES>\n\t       <PUT <GET ,GOAL-TABLES ,STILES-C> ,GOAL-S <>>\n\t       <COND (<NOT <0? <BAND <GETP ,HERE ,P?CORRIDOR> 3>>>\n\t\t      <COND (<FSET? ,STILES ,TOUCHBIT> <TELL \"Stiles\">)\n\t\t\t    (T <TELL \"The visitor\">)>\n\t\t      <TELL \" disappears out the back gate.\" CR>)>)\n\t      (<==? .L ,FRONT-PORCH>\n\t       <COND (<EQUAL? ,HERE ,FRONT-PORCH>\n\t\t      <I-MEET-DUFFY?>)\n\t\t     (T <TELL \"You hear the door bell ring.\" CR>)>\n\t       <ESTABLISH-GOAL ,PHONG ,ENTRY>)\n\t      (<==? .L ,LIVING-ROOM>\n\t       <SETG DUFFY-WITH-STILES <>>\n\t       <COND (<==? ,HERE ,LIVING-ROOM>\n\t\t      <COND (,MET-DUFFY?\n\t\t\t     <TELL\n\"Duffy brings a prisoner into the room and fastens him to the\ndavenport.\">\n\t\t\t     <TELL\n\" He goes quickly to work, disappearing down the hall.\" CR>)\n\t\t\t    (T <TELL\n\"Suddenly \" \"Duffy brings a prisoner into the room and fastens him to the\ndavenport.\" \" Then he notices you.\">\n\t\t\t     <DUFFY-GREETING>\n\t\t\t     <TELL\n\"\\\"\" \" He goes quickly to work, disappearing down the hall.\" CR>)>)\n\t\t     (<NOT ,MET-DUFFY?>\n\t\t      <TELL \"Suddenly your assistant, Sgt. Duffy, \">\n\t\t      <COND (,SEEN-DUFFY? <TELL \"runs up to you.\">)\n\t\t\t    (T <TELL \"appears from out of nowhere.\">)>\n\t\t      <DUFFY-GREETING>\n\t\t      <TELL\n\" I've stowed him in the living room. I'll stand by to help you.\\\"\nHe scurries off to go about his work.\" CR>)\n\t\t     (<OR <EQUAL? ,HERE ,HALL-1 ,HALL-2>\n\t\t\t  <EQUAL? ,HERE ,HALL-3 ,HALL-4>>\n\t\t      <TELL\n\"Duffy goes quickly to work, disappearing down the hall.\" CR>)>)>)>>"
  },
  "ROB": {
   "name": "ROB",
   "file": "events.zil",
   "line": 1306,
   "endLine": 1316,
   "source": "<ROUTINE ROB (WHAT THIEF \"OPTIONAL\" (PROB <>) \"AUX\" N X (ROBBED? <>))\n\t <SET X <FIRST? .WHAT>>\n\t <REPEAT ()\n\t\t <COND (<NOT .X> <RETURN .ROBBED?>)>\n\t\t <SET N <NEXT? .X>>\n\t\t <COND (<AND <NOT <FSET? .X ,INVISIBLE>>\n\t\t\t     <OR <NOT .PROB> <PROB .PROB>>>\n\t\t\t<MOVE .X .THIEF>\n\t\t\t;<FSET .X ,TOUCHBIT>\n\t\t\t<SET ROBBED? T>)>\n\t\t <SET X .N>>>"
  },
  "I-MONICA": {
   "name": "I-MONICA",
   "file": "events.zil",
   "line": 1322,
   "endLine": 1484,
   "source": "<ROUTINE I-MONICA (\"OPTIONAL\" (GARG <>) \"AUX\" (L <LOC ,MONICA>) HR)\n <COND (<NOT .GARG> <IMOVEMENT ,MONICA I-MONICA>)\n       (<==? .GARG ,G-REACHED>\n\t<COND (<AND <==? .L ,OFFICE> <L? ,PRESENT-TIME 540>>\n\t       <ESTABLISH-GOAL ,MONICA ,GARAGE>\n\t       <COND (<OR <EQUAL? ,OFFICE ,HERE <LOC ,PLAYER>>\n\t\t\t  <AND <EQUAL? ,HERE ,OFFICE-PORCH>\n\t\t\t       <VERB? LOOK-INSIDE>>>\n\t\t      <COND (<EQUAL? ,OFFICE ,HERE <LOC ,PLAYER>>\n\t\t\t     <TELL \"Monica\">)\n\t\t\t    (<EQUAL? ,HERE ,OFFICE-PORCH>\n\t\t\t     <TELL \"A young woman\">)>\n\t\t      <TELL\n\" bursts into the office, wearing a felt hat and wool coat, and\nstruggling to get her driving gloves on. \">\n\t\t      <COND (<EQUAL? ,OFFICE ,HERE <LOC ,PLAYER>>\n\t\t\t     <ENABLE <QUEUE I-MONICA-GOES 5>>\n\t\t\t     <THIS-IS-S-HE ,MONICA>\n\t\t\t     <TELL\n\"She glances icily in your direction and then back to her father. \\\"I'm\noff to the pictures with Terry, Dad. Good-bye.\\\" She hugs him briefly\nbut firmly, burying her head in his shoulder. He pushes her away and\nsays, \\\"You're leaving now?! I thought you'd be talking to the detective\nhere. What about the threat on my life?\\\" He has the hurt look of an\norphan pup. She answers, \\\"You don't need me here. I need to get away\nnow and then. I'm not like Mother, you know.\\\" Tears well up in her eyes\nbut she brushes them away before they drop. She turns to leave.\" CR>)\n\t\t\t    (<EQUAL? ,HERE ,OFFICE-PORCH>\n\t\t\t     <TELL\n\"She glances quickly around the room, then turns to leave.\" CR>)>)>)\n\t      (<AND <==? .L ,GARAGE> <L? ,PRESENT-TIME 540>>\n\t       <UNPRIORITIZE ,MONICA>\n\t       <SETG FILM-SEEN T>\n\t       <FSET ,GARAGE-DOOR ,LOCKED>\n\t       <FCLEAR ,GARAGE-DOOR ,OPENBIT>\n\t       <MOVE ,MONICA ,LIMBO>\n\t       <FSET ,MONICA ,INVISIBLE>\n\t       <PUT <GET ,GOAL-TABLES ,MONICA-C> ,GOAL-S <>>\n\t       <PUT <GET ,GOAL-TABLES ,MONICA-C> ,GOAL-ENABLE <>>\n\t       <FSET ,MONICA-CAR ,INVISIBLE>\n\t       <ENABLE <QUEUE I-MONICA-RETURN\n\t\t\t      <- <- 670 ,PRESENT-TIME> <RANDOM 20>>>>\n\t       <COND (<OR <EQUAL? ,HERE ,GARAGE ,DRIVEWAY>\n\t\t\t  <EQUAL? ,HERE ,DRIVEWAY-ENTRANCE ,WORKSHOP>>\n\t\t      <TELL \"Someone\">\n\t\t      <TELL\n\" jumps into her car, starts it up, and races out the driveway,\nleaving a wake of peastone behind her.\" CR>)\n\t\t     (<==? ,OUTSIDE-LINE-C <GETP ,HERE ,P?LINE>>\n\t\t      <TELL\n\"Without warning, a car roars to life and speeds out of the driveway.\" CR>)\n\t\t     (T <TELL\n\"Outside somewhere, a car roars to life and speeds away.\" CR>)>)\n\t      (<==? .L ,WORKSHOP>\n\t       <SETG BUTTON-FIXED T>\n\t       <ESTABLISH-GOAL ,MONICA ,OFFICE>\n\t       <COND (<EQUAL? ,HERE ,WORKSHOP>\n\t\t      <SAID-TO ,MONICA>\n\t\t      <THIS-IS-S-HE ,MONICA>\n\t\t      <SETG SEEN-MONICA-AT-J-BOX T>\n\t\t      <TELL\n\"Suddenly Monica rushes in, goes to the junction box, and fiddles with\nthe wires for a minute. Then she turns, sees you, gasps and grabs her\nthroat. \\\"My\">\n\t\t      <COND (<NOT <TANDY?>> <TELL \" God\">)>\n\t\t      <TELL\n\", you gave me a start!\\\" Her face is ashen.\" CR>)>)\n\t      (<AND <==? .L ,OFFICE> <NOT ,MONICA-SEEN-CORPSE?>>\n\t       <ESTABLISH-GOAL ,MONICA ,TOILET-ROOM>\n\t       <COND (<OR ,TOO-LATE <NOT <FSET? ,CORPSE ,INVISIBLE>>>\n\t\t      <SETG MONICA-SEEN-CORPSE? T>)>\n\t       <COND (<EQUAL? ,HERE ,OFFICE ,OFFICE-PORCH>\n\t\t      <THIS-IS-S-HE ,MONICA>\n\t\t      <COND (<FSET? ,MONICA ,TOUCHBIT> <TELL \"Monica\">)\n\t\t\t    (T <TELL \"Someone\">)>\n\t\t      <TELL \" walks gingerly into the office, \">\n\t\t      <COND (<NOT <FSET? ,CORPSE ,INVISIBLE>>\n\t\t\t     <TELL\n\"opens her eyes wide in horror, and then puts her hand over her mouth\nand\">)\n\t\t\t    (T <TELL \"looks around quickly, and then\">)>\n\t\t      <TELL \" rushes toward the door.\" CR>)>)\n\t      (<==? .L ,TOILET-ROOM>\n\t       <COND (<EQUAL? ,HERE ,TOILET-ROOM>\n\t\t      <SAID-TO ,MONICA>\n\t\t      <THIS-IS-S-HE ,MONICA>\n\t\t      <TELL\n\"Monica rushes in. \\\"Stand aside, flatfoot, I'm going to be sick.\\\" She\nleans over the toilet and gives in to an attack of dry heaves.\" CR>)\n\t\t     (<OR <EQUAL? ,HERE ,BATHROOM ,TUB-ROOM>\n\t\t\t  <EQUAL? ,HERE ,LINDER-ROOM ,MONICA-ROOM>>\n\t\t      <FCLEAR ,TOILET-DOOR ,OPENBIT>\n\t\t      <TELL\n\"The door to the toilet room slams shut. You hear sounds of dry heaving\ninside.\" CR>)>)\n\t      (<AND <==? .L ,MONICA-ROOM> <NOT ,CLOCK-FIXED>>\n\t       <COND (<EQUAL? ,HERE ,MONICA-ROOM>\n\t\t      <SAID-TO ,MONICA>\n\t\t      <THIS-IS-S-HE ,MONICA>\n\t\t      <TELL\n\"Monica comes in, sits down on her bed, and buries her face in her hands.\n\\\"Leave me alone for a while. I'm really not well.\\\" She begins to sob.\" CR>)\n\t\t     (<OR <EQUAL? ,HERE ,BATHROOM>\n\t\t\t  <EQUAL? ,HERE ,HALL-1 ,HALL-2 ,HALL-3>>\n\t\t      <FCLEAR ,MONICA-DOOR ,OPENBIT>\n\t\t      <FCLEAR ,MONICA-BATH-DOOR ,OPENBIT>\n\t\t      <FCLEAR ,MONICA-BACK-DOOR ,OPENBIT>\n\t\t      <TELL \"Monica slams shut her bedroom doors.\" CR>)>)\n\t      (<==? .L ,OFFICE>\n\t       <COND (<AND <EQUAL? ,HERE ,OFFICE> <NOT ,PLAYER-HIDING>>\n\t\t      <PUT ,MOVEMENT-GOALS\n\t\t\t   ,MONICA-C\n\t\t\t   <BACK <GET ,MOVEMENT-GOALS ,MONICA-C> ,MG-LENGTH>>\n\t\t      <ESTABLISH-GOAL ,MONICA ,MONICA-ROOM>\n\t\t      <THIS-IS-S-HE ,MONICA>\n\t\t      <TELL\n\"Monica comes into the office quietly and, seeing you, steps over to the\ndesk and shuffles some papers. Then she sighs, rubs her eyes, and turns\nto leave without saying a word.\" CR>)\n\t\t     (T\n\t\t      <MOVE ,INSIDE-GUN ,MONICA>\n\t\t      <FSET ,CLOCK ,LOCKED>\t;\"?\"\n\t\t      <FCLEAR ,CLOCK ,OPENBIT>\n\t\t      <SETG CLOCK-FIXED T>\n\t\t      <SETG MONICA-PUSHED-BUTTON T>\n\t\t      <SET HR ,HERE>\n\t\t      <SETG HERE ,OFFICE>\n\t\t      <YOU-RANG>\n\t\t      <SETG HERE .HR>\n\t\t      <COND (<OR <AND <EQUAL? ,HERE ,OFFICE-PORCH>\n\t\t\t\t      <VERB? LOOK-INSIDE>>\n\t\t\t\t <AND ,PLAYER-HIDING\n\t\t\t\t      <EQUAL? ,HERE ,OFFICE>>>\n\t\t\t     <FCLEAR ,CLOCK-KEY ,INVISIBLE>\n\t\t\t     <SETG SEEN-MONICA-AT-CLOCK T>\n\t\t\t     <COND (<FSET? ,MONICA ,TOUCHBIT> <TELL \"Monica\">)\n\t\t\t\t   (T <TELL \"Someone\">)>\n\t\t\t     <THIS-IS-S-HE ,MONICA>\n\t\t\t     <TELL\n\" quietly sticks her head in the door, looks quickly around the\nroom, and then steps over to the desk. She pushes the butler's button and\nseems to listen for the bell. She takes another look around, then\ncrosses the room to the clock. Looking well rehearsed, she produces a key,\nopens the door of the case, takes something out and puts it in the\npocket of her slacks, and then shuts and locks the case.\" CR>)\n\t\t\t    (T <TELL CR\n\"You barely hear a bell ring in the distance.\" CR>)>)>)\n\t      (<==? .L ,MONICA-ROOM>\t;<AND  ,CLOCK-FIXED>\n\t       <COND (<EQUAL? ,HERE ,ROCK-GARDEN ,BACK-YARD ,OFFICE-PORCH>\n\t\t      <TELL \"The lights go out in the middle bedroom.\" CR>)\n\t\t     (<EQUAL? ,HERE ,MONICA-ROOM>\n\t\t      <THIS-IS-S-HE ,MONICA>\n\t\t      <SAID-TO ,MONICA>\n\t\t      <TELL\n\"Monica comes in and sits down at her dressing table. Her eyes are red\nfrom crying. \\\"Go peddle your cookies somewhere else. I'm going to have\nsome Ovaltine and go to bed.\\\"\" CR>)\n\t\t     (<OR <EQUAL? ,HERE ,BATHROOM>\n\t\t\t  <EQUAL? ,HERE ,HALL-1 ,HALL-2 ,HALL-3>>\n\t\t      <FCLEAR ,MONICA-DOOR ,OPENBIT>\n\t\t      <FCLEAR ,MONICA-BATH-DOOR ,OPENBIT>\n\t\t      <FCLEAR ,MONICA-BACK-DOOR ,OPENBIT>\n\t\t     <TELL \"Monica slams shut her bedroom doors.\" CR>)>)>)>>"
  },
  "I-MONICA-GOES": {
   "name": "I-MONICA-GOES",
   "file": "events.zil",
   "line": 1487,
   "endLine": 1494,
   "source": "<ROUTINE I-MONICA-GOES ()\n <COND (<IN? ,MONICA ,OFFICE>\n\t<ESTABLISH-GOAL ,MONICA ,GARAGE T>\n\t<SETG MONICA-DASHED-OUT-DOOR T>\n\t<TELL\n\"Monica looks more nervous. \\\"I really must go now, or I'll be\nlate for the film.\\\" She hugs her father again and dashes out the door.\"\nCR>)>>"
  },
  "I-MONICA-RETURN": {
   "name": "I-MONICA-RETURN",
   "file": "events.zil",
   "line": 1496,
   "endLine": 1510,
   "source": "<ROUTINE I-MONICA-RETURN ()\n <FCLEAR ,MONICA ,INVISIBLE>\n <MOVE ,MONICA ,GARAGE>\n <MOVE ,STUB ,GARAGE>\n <FCLEAR ,MONICA-CAR ,INVISIBLE>\n <ESTABLISH-GOAL ,MONICA ,WORKSHOP>\n <PUT <GET ,GOAL-TABLES ,MONICA-C> ,GOAL-ENABLE T>\n <COND (<EQUAL? ,HERE ,GARAGE ,DRIVEWAY ,DRIVEWAY-ENTRANCE>\n\t<COND (<FSET? ,MONICA ,TOUCHBIT> <TELL \"Monica\">)\n\t      (T <TELL \"Someone\">)>\n\t<TELL\n\" drives into the garage, stops her car, jumps out, and slams the door.\" CR>)\n       (T <TELL\n\"Suddenly you hear a car drive into the garage and stop. Its door\nslams.\" CR>)>>"
  },
  "I-AMBULANCE": {
   "name": "I-AMBULANCE",
   "file": "events.zil",
   "line": 1514,
   "endLine": 1542,
   "source": "<ROUTINE I-AMBULANCE ()\n\t<REMOVE ,CORPSE>\n\t<COND (,PLAYER-HIDING\n\t       <TELL\n\"Out of the blue, \" \"two\" \" of the coroner's men run\"\n\" in to the office with a stretcher and carry Linder's body out.\">)\n\t      (T\n\t       <COND (<EQUAL? ,HERE ,OFFICE ,OFFICE-PORCH ,OFFICE-PATH>\n\t\t      <TELL\n\"Out of the blue, \" \"two\" \" of the coroner's men run\"\n\" in to the office with a stretcher and carry Linder's body out. \"\n\"One of them shouts to you, \\\"\">)\n\t\t     (T <TELL\n\"Out of the blue, \" \"one\" \" of the coroner's men run\"\n\"s up to you and says, \\\"We just removed the body. \">)>\n\t       <TELL\n\"Haven't time to chat. Busy night at the morgue! Carry on, Detective.\\\"\">)>\n\t<COND (<AND <NOT ,FINGERPRINT-OBJ> <NOT ,DUFFY-AT-CORONER>>\n\t       <SETG DUFFY-AT-CORONER T>\n\t       <ENABLE <QUEUE I-DUFFY-RETURNS 69>>\n\t       <TELL\n\" Then Duffy appears, saying, \\\"I'm glad they finally showed up! When I\ncalled, they seemed very busy. I think I should go along and make sure\nthey give this autopsy top priority.\">\n\t       <COND (,PLAYER-HIDING\n\t\t      <TELL\n\" Don't worry, I won't tell anyone you're hiding.\">)>\n\t       <TELL \" See you later!\\\"\">)>\n\t<TELL \" They head for the street.\" CR>>"
  },
  "I-DUFFY-RETURNS": {
   "name": "I-DUFFY-RETURNS",
   "file": "events.zil",
   "line": 1544,
   "endLine": 1559,
   "source": "<ROUTINE I-DUFFY-RETURNS ()\n\t<SETG DUFFY-AT-CORONER <>>\n\t<TELL\n\"Without warning, Duffy comes running up to you and says, \\\"I just got\nback from the morgue. The coroner \">\n\t<COND (,DUFFY-SAW-MEDICAL-REPORT\n\t       <COND (<==? <META-LOC ,MONICA> ,HERE>\n\t\t      <SETG MONICA-SAW-CORONER-REPORT T>)>\n\t       <TELL\n\"found no evidence of the alleged stomach tumor. In fact, he\ncould find no organic disease that would either explain the\ndeath or support the theory that Linder wanted to die. He \">)>\n\t<TELL\n\"concluded that Linder died of a single small-caliber bullet through the\nheart. And here's something peculiar: there were no\ntraceable rifle marks on the bullet.\" \"\\\"\" CR>>"
  },
  "DUFFY-HINT": {
   "name": "DUFFY-HINT",
   "file": "events.zil",
   "line": 1565,
   "endLine": 1608,
   "source": "<ROUTINE DUFFY-HINT ()\n\t<COND (<NOT ,MET-DUFFY?>\n\t       <TELL \"You'd better wait until Duffy \" \"sees you.\" CR>\n\t       <RTRUE>)\n\t      (,DUFFY-WITH-STILES\n\t       <TELL \"You'd better wait until Duffy \"\n\t\t       \"stows his prisoner.\" CR>\n\t       <RTRUE>)>\n\t<TELL \"Duffy appears and says, \">\n\t<COND (<FSET? ,CORPSE ,INVISIBLE>\n\t       <TELL\n\"\\\"If I were you, I'd wait until some crime occurred.\\\"\" CR>\n\t       <RTRUE>)>\n\t<SETG DUFFY-HINT-NUM <+ 1 ,DUFFY-HINT-NUM>>\n\t<TELL\n\"\\\"I don't know if it means anything, Detective, but I noticed \">\n\t<COND (<NOT <FSET? ,PIECE-OF-WIRE ,TOUCHBIT>>\n\t       <TELL\n\"a piece of green wire on the broken office window.\\\"\" CR>)\n\t      (,NO-WIRE-HINT\n\t       <SETG NO-WIRE-HINT <>>\n\t       <TELL \"a green spool in the workshop.\\\"\" CR>)\n\t      ;(<FSET? ,HOLE ,INVISIBLE>\n\t       <TELL \"a hole of some kind in Linder's office chair.\\\"\" CR>)\n\t      (<AND <NOT ,BUTTON-FIXED> <NOT ,PLAYER-PUSHED-BUTTON>>\n\t       <TELL\n\"that the butler's button in the office wasn't working right.\\\"\" CR>)\n\t      (<NOT ,POWDER-ANALYZED>\n\t       <TELL \"something funny about the clock in the office.\\\"\" CR>)\n\t      (<NOT <FSET? ,GUN-RECEIPT ,TOUCHBIT>>\n\t       <TELL \"a very interesting book in Phong's room.\\\"\" CR>)\n\t      (<NOT <FSET? ,MEDICAL-REPORT ,TOUCHBIT>>\n\t       <TELL \"some kind of medical report in Monica's room.\\\"\" CR>)\n\t      (<NOT ,MONICA-HAS-MOTIVE>\n\t       <TELL\n\"Monica's reaction when I asked her about her mother.\\\"\" CR>)\n\t      ;(<NOT ,SIDE-FOOTPRINTS-MATCHED>\n\t       <TELL\n\"lots of foot prints in the mud outside. Of course, I was careful not to\nconfuse them with my own.\\\"\" CR>)\n\t      (<NOT ,SEEN-MONICA-AT-J-BOX>\n\t       <TELL\n\"that Monica went in the workshop right when she got home.\\\"\" CR>)\n\t      (T <TELL \"that I've run out of ideas on this case.\\\"\" CR>)>>"
  },
  "ARREST": {
   "name": "ARREST",
   "file": "events.zil",
   "line": 1620,
   "endLine": 1872,
   "source": "<ROUTINE ARREST (PERSON \"OPTIONAL\" (HELPER <>) \"AUX\" FLG)\n <COND (.HELPER\n\t<COND (<AND <OR <NOT <EQUAL? .PERSON ,MONICA>>\n\t\t\t<NOT <EQUAL? .HELPER ,PHONG>>>\n\t\t    <OR <NOT <EQUAL? .HELPER ,MONICA>>\n\t\t\t<NOT <EQUAL? .PERSON ,PHONG>>>>\n\t       <TELL\n\"You think it over. You realize that this arrest is pretty far-fetched.\nIt could only mean humiliation for you.\" CR>\n\t       <RTRUE>)\n\t      (T <SET PERSON ,MONICA> <SET HELPER ,PHONG>)>)>\n <COND (<AND <==? .PERSON ,MONICA> <IN? ,MONICA ,LIMBO>>\n\t<TELL \"Duffy appears with a solemn look.\">\n\t<TELL\n\" He says, \\\"I can't find Monica around here anywhere. I guess you'll\nhave to wait for her to return.\\\" He disappears again.\" CR>\n\t<RTRUE>)>\n <TELL\n\"(If you want to continue from this point at another time, you must\n\\\"SUSPEND\\\" first.) Do you want to \"\n\"make an arrest and \" \"stop your investigation now?\">\n <COND (<NOT <YES?>> <RTRUE>)>\n ;<COND (<NOT ,PRSI> <SETG PRSI ,GLOBAL-MURDER>)>\n <COND (<==? .PERSON ,GLOBAL-LINDER ,CORPSE>\n\t<TELL\n\"Duffy appears, to escort you from the grounds. \"\n\"\\\"So you believe that Linder's death was suicide? I'm not convinced.\nBut if you'll \"\n\"file a deposition, we can see what the D.A. and coroner think.\\\"|\" CR>)\n       (T\n\t<COND (.HELPER\n\t       <COND (<AND <EQUAL? ,HERE <META-LOC ,MONICA>>\n\t\t\t   <IN? .HELPER ,HERE>>\n\t\t      <TELL \"Duffy appears with a solemn look.\">\n\t\t      <COND (,MONICA-TIED-TO\n\t\t\t     <TELL \" He unfastens Monica from the \"\n\t\t\t\t     D ,MONICA-TIED-TO \".\">)>\n\t\t      <TELL\n\" He puts nippers on the wrists of both \" D .PERSON \" and \" D .HELPER\n\", who stand stiff and quiet.\">)\n\t\t     (<EQUAL? ,HERE <META-LOC ,MONICA>>\n\t\t      <TELL \"Duffy appears with \" D .HELPER \" in tow.\">\n\t\t      <COND (,MONICA-TIED-TO\n\t\t\t     <TELL \" He unfastens Monica from the \"\n\t\t\t\t     D ,MONICA-TIED-TO \".\">)>\n\t\t      <TELL\n\" He puts nippers on the wrists of \" D .PERSON\n\", who stands stiff and quiet.\">)\n\t\t     (<IN? .HELPER ,HERE>\n\t\t      <TELL \"Duffy appears with \" D .PERSON \" in tow.\">\n\t\t      <TELL\n\" He puts nippers on the wrists of \" D .HELPER\n\", who stands stiff and quiet.\">)\n\t\t     (T <TELL\n\"Duffy seems to read your thoughts, as he appears with \" D .PERSON \" and \"\nD .HELPER \" in handcuffs.\">)>)\n\t      (<EQUAL? ,HERE <META-LOC .PERSON>>\n\t       <TELL \"Duffy appears with a solemn look.\">\n\t       <COND (<==? .PERSON ,STILES>\n\t\t      <TELL\n\" He unfastens his nippers from the davenport and pulls Stiles to his feet.\">)\n\t\t     (<AND <==? .PERSON ,MONICA> ,MONICA-TIED-TO>\n\t\t      <TELL\n\" He unfastens Monica from the \" D ,MONICA-TIED-TO\n\", pulls her to her feet, and puts his own nippers on her wrists.\">)\n\t\t     (T <TELL\n\" He puts nippers on the wrists of \" D .PERSON\n\", who stands stiff and quiet.\">)>)\n\t      (T <TELL\n\"Duffy seems to read your thoughts, as he appears with \" D .PERSON\n\" in handcuffs.\">)>\n\t<COND (<AND ,MONICA-TIED-TO <EQUAL? .PERSON ,MONICA>>\n\t       <RELEASE-MONICA>)>\n\t<TELL\n\" \\\"Let's not have any trouble, now,\\\" says Duffy, in his unique way.\nThey head for the driveway, where a police car waits with engine\npurring.|\" CR>)>\n <END-HEADER \"February 28\">\n <COND (<OR ,MONICA-ADMITTED-HELPING?\t;\"mechanism proved\"\n\t    ,PHONG-ADMITTED-HELPING?\n\t    <AND ,PLAYER-PUSHED-BUTTON\n\t\t <OR ,POWDER-ANALYZED <FSET? ,INSIDE-GUN ,TOUCHBIT>>>>\n\t<TELL\n\"The elaborate set-up in Mr. Linder's office was ingenious.\nYou deserve congratulations for your work in detecting it.|\" CR>\n\t<COND (<==? .PERSON ,STILES>\n\t       <TELL\n\"I am sorry to report that the trial jury acquitted Ralph Stiles of the\nmurder of his rival, Freeman Linder. In view of the available evidence,\nthey apparently believed that his lack of access to the Linder house\nmade it doubtful that he could construct the hidden gun mechanism.\">)\n\t      (<==? .PERSON ,GLOBAL-LINDER>\n\t       <COND (<FSET? ,MEDICAL-REPORT ,TOUCHBIT>\n\t\t      <TELL\n\"At the inquest, the coroner ruled that \" \"Mr. Linder's death was suicide,\nbased on all the available evidence. However, my knowledge of Linder's\npersonality makes me doubt that, knowing he would be killed, he would\ndevise such an elaborate scheme to try to punish Mr. Stiles for the\naffair with Mrs. Linder. \">)\n\t\t     (T\n\t\t      <TELL\n\"At the inquest, the coroner ruled that \" \"the available evidence was\ninconclusive, in that Linder appears to have had no motive for suicide. \">)>\n\t       <TELL\n\"I think that, if you had been more careful in observing the people in\nLinder's household, you would have discovered that he had an accomplice,\nat least.|\">)\n\t      (<AND .HELPER\n\t\t    <FSET? ,GUN-RECEIPT ,TOUCHBIT>\n\t\t    ,MONICA-HAS-MOTIVE\n\t\t    <OR ,SEEN-MONICA-AT-CLOCK ,USED-CLOCK-KEY>>\n\t       <TELL\n\"The web of evidence certainly seems to implicate both Monica Linder\nand Mr. Phong. During interrogation, Phong admitted helping Mr. Linder\ncarry out the plan to frame Mr. Stiles for attempted murder, but he\nrepeatedly denied that Linder's death was intended. He bargained with\nthe District Attorney and entered a plea of guilty to charges of\nconspiracy and extortion. After a short trial, the judge gave him a\nsuspended sentence and recommended him for deportation to his home\ncountry.|\" CR\n\"Monica turned out to be a tougher nut to crack. She refused to talk\nduring interrogation, and she was awaiting trial when she heard about\nPhong's suspended sentence. She then made a plea like his, and the\njudge had little choice but to give her the same sentence. Instead of\ndeportation, she will be on probation for five years.|\" CR\n\"I can't help thinking that everyone in the Linder household conspired\nin the original plan, but that Monica acted alone in turning the plan\ninto murder. I suppose we'll never know the real truth now.\">)\n\t      (<EQUAL? ,PHONG .PERSON .HELPER>\n\t       <TELL\n\"I am sorry to report that the trial jury acquitted Mr. Phong of\nthe murder of his employer. Apparently they believed that \">\n\t       <COND (<NOT <FSET? ,GUN-RECEIPT ,TOUCHBIT>>\n\t\t      <TELL\n\"the available evidence against him was circumstantial, since there was\nno definite link between him and the murder weapon. In addition, it\nseems that \">)>\n\t       <TELL\n\"he lacks the mechanical skills necessary to construct the hidden gun\nmechanism.|\" CR>\n\t       <COND (.HELPER\n\t\t      <TELL\n\"While Monica could have conspired with him and aided him, she too was\nacquitted of conspiracy, because \">\n\t\t      <COND (<NOT <FSET? ,GUN-RECEIPT ,TOUCHBIT>>\n\t\t\t     <TELL\n\"he was. If only we had tried her for plain murder instead of conspiracy!|\"\nCR>)\n\t\t\t    (,MONICA-HAS-MOTIVE\n\t\t\t     <TELL \"the available\nevidence against her was circumstantial, since there was no definite\nlink between her and the hidden gun mechanism.|\" CR>)\n\t\t\t    (<OR ,SEEN-MONICA-AT-CLOCK ,USED-CLOCK-KEY>\n\t\t\t     <TELL \"she had no\napparent motive.|\" CR>)>)>)\n\t      (<==? .PERSON ,MONICA>\n\t       <COND (,MONICA-HAS-MOTIVE\n\t\t      <COND (<OR ,SEEN-MONICA-AT-CLOCK ,USED-CLOCK-KEY>\n\t\t\t     <TELL\n\"I am glad to report that the trial jury, based on your testimony and her\nconfession in court,\nconvicted Monica Linder of the murder of her father in revenge for the\ndeath of her mother. Congratulations \"\n\t\t\t     <COND (<0? ,DUFFY-HINT-NUM>\n\t\t\t\t    \"on your fine detective work.|\")\n\t\t\t\t   (<G? 3 ,DUFFY-HINT-NUM>\n\t\t\"on the fine teamwork between you and Sergeant Duffy.|\")\n\t\t\t\t   (T\n\t\"to you, but even more to Detective Duffy on his promotion.|\")>\n\t\t\t     CR\n\"Which reminds me of another fascinating case I would like to assign you to...|\n|\nComing soon: Another INTERLOGIC Mystery from Infocom.|\">\n\t\t\t     <EPILOGUE>)\n\t\t\t    (T\n\t\t\t     <TELL\n\"I am sorry to report that the trial jury acquitted Monica Linder of\nthe murder of her father. Apparently they believed that \" \"the available\nevidence against her was circumstantial, since there was no definite\nlink between her and the hidden gun mechanism.|\" CR>)>)\n\t\t     (T <TELL\n\"I am sorry to report that the trial jury\nacquitted Monica Linder of the murder of her father, because \" \"she had no\napparent motive.|\" CR>)>)>)\n       (T\t;\"no proof of mechanism\"\n\t<COND (<==? .PERSON ,GLOBAL-LINDER>\n\t       <TELL\n\"According to your report and deposition and the available physical\nevidence, you seem to believe that Mr. Linder shot himself through the\nwindow of his office. If you continue to come up with such odd\nconclusions, I will be forced to transfer you to the traffic-control\ndepartment.|\" CR>\n\t       <CASE-OVER>)>\n\t<TELL\n\"According to your report and deposition, the only question in this case\nis who shot Mr. Linder through the window of his office. However, I\nbelieve that the real story is not so simple.|\" CR>\n\t<COND (<NOT <==? .PERSON ,STILES>>\n\t       <TELL\n\"In fact, in view of the flimsy evidence available, the District\nAttorney has decided not to indict \" D .PERSON>\n\t       <COND (.HELPER <TELL \" and \" D .HELPER>)>\n\t       <TELL \" in this case.\">)>\n\t<COND (<==? .PERSON ,STILES>\n\t       <SETG STILES-CONVICTED T>\n\t       <TELL\n\"But, despite my reservations, the trial jury did convict Mr. Stiles\nof the murder. Through plea-bargaining, his sentence was reduced from\nexecution to twenty years.\">)\n\t      (<AND <==? .PERSON ,MONICA>\n\t\t    <OR ,SEEN-MONICA-AT-J-BOX .HELPER>>\n\t       <COND (.HELPER\n\t\t      <SET FLG T>\t;\"T = nothing TELLed for Phong\"\n\t\t      <COND (,SIDE-FOOTPRINTS-MATCHED\n\t\t\t     <SET FLG <>>\n\t\t\t     <TELL\n\" In his opinion, Phong's foot prints outside are not incriminating,\neven though they were apparently made at the time of the shooting. After\nall, Phong's household duties could easily have taken him there for any\nnumber of reasons. In Phong's own deposition, he claimed to have heard\nnoises outside, which could have been made by Mr. Stiles.\">)>\n\t\t      <COND (,SEEN-MONICA-AT-J-BOX\n\t\t\t     <COND (.FLG\n\t\t\t\t    <TELL\n\" There is no evidence that \" \"Phong\" \" was at the scene of the shooting.\">)>\n\t\t\t     <TELL\n\" Monica's actions in the workshop may be suspicious, but she claimed that\nshe thought of a new twist on the household wiring during the film, and she\nseems to be enough of a tinkerer to make that believable.\">)\n\t\t\t    (.FLG\n\t\t\t     <TELL\n\" There is no evidence that \" \"either one\"\n\" was at the scene of the shooting.\">)\n\t\t\t    (T <TELL\n\" There is no evidence that \" \"Monica\"\n\" was at the scene of the shooting.\">)>)\n\t\t     (,SEEN-MONICA-AT-J-BOX\n\t\t       <TELL\n\" Monica's actions in the workshop may be suspicious, but she claimed that\nshe thought of a new twist on the household wiring during the film, and she\nseems to be enough of a tinkerer to make that believable.\">)>)\n\t      (<AND <EQUAL? .PERSON ,PHONG> ,SIDE-FOOTPRINTS-MATCHED>\n\t       <TELL\n\" In his opinion, Phong's foot prints outside are not incriminating,\neven though they were apparently made at the time of the shooting. After\nall, Phong's household duties could easily have taken him there for any\nnumber of reasons. In Phong's own deposition, he claimed to have heard\nnoises outside, which could have been made by Mr. Stiles.\">)\n\t      (T\n\t       <TELL \" There is no evidence that \">\n\t       <COND (<EQUAL? .PERSON ,MONICA> <TELL \"s\">)>\n\t       <TELL \"he\" \" was at the scene of the shooting.\">)>)>\n <CASE-OVER>>"
  },
  "END-HEADER": {
   "name": "END-HEADER",
   "file": "events.zil",
   "line": 1876,
   "endLine": 1882,
   "source": "<ROUTINE END-HEADER (STR)\n\t <TELL \"Text of a letter from Police Chief Klutz dated \">\n\t <TELL .STR>\n\t <TELL \":|\n|\nDear Detective:|\n|     \">>"
  },
  "CASE-OVER": {
   "name": "CASE-OVER",
   "file": "events.zil",
   "line": 1884,
   "endLine": 1900,
   "source": "<ROUTINE CASE-OVER ()\n\t <COND (,STILES-CONVICTED\n\t\t<TELL\n\"|\n|\nPost script: A few months later, after you are transferred to another\ndepartment, you get a memo from your former boss. It says that new\nevidence was discovered in the Linder case, causing the court to\nreverse Stiles's conviction and set him free. Let's hope he doesn't\ncome around bent on revenge!\" CR>)>\n\t <TELL\n\"|\n|\nThe case has come to an end. Would you like to start your\ninvestigation over from scratch?\">\n\t <COND (<YES?> <RESTART>)>\n\t <QUIT>>"
  },
  "EPILOGUE": {
   "name": "EPILOGUE",
   "file": "events.zil",
   "line": 1902,
   "endLine": 1960,
   "source": "<ROUTINE EPILOGUE ()\n\t <TELL\n\"|\nYou have reached a complete solution to the story. If you\nlike, you may see the author's summary of the case. Of course,\nyou should come up with your own first! Would you like to see\nthe author's summary?\">\n\t <COND (<YES?>\n\t\t<TELL\n\"|\nFreeman Linder discovered about a year ago that his wife had taken a\nlover, Ralph Stiles. This discovery made their marriage deteriorate,\nwith growing bitterness and belligerence, until Mrs. Linder recently\ntook her own life with a gun. Linder planned to take revenge on Stiles\nby framing him for attempted murder. He enlisted the help of his butler,\nPhong, and his daughter, Monica.|\n\" CR\n\"Linder simultaneously sent two messages, a telegram to you and a phone\ncall to Stiles. He wanted you to come to the house, witness the alleged\ncrime, and then arrest Stiles. In the phone call he told Stiles to come\ndiscreetly to the office door at 9:00 to get some pay-off money.|\n\" CR\n\"Linder planned an elaborate set-up inside the office. A gun was put in\nthe clock, aiming through the keyhole toward him, who would be sitting\nbehind his desk on the opposite side of the room. Using the butler's\nbutton, he would trigger both the gun and the detonation of some\nexplosive attached to the window, thus simulating a shot fired through\nthe window at him.|\n\" CR\n\"Monica bought two identical small handguns for this plan. She hid one in\nthe clock, and Phong planted the other, which was fired in secret\nbeforehand, in the back yard just before 9:00, where you could find it\nlater.|\n\" CR\n\"When Stiles's car appeared, Phong went to the front door, rang the door\nbell as a signal to Linder, and sneaked into the house. Linder kept an\neye on the window and, when Stiles appeared, pushed the button to fire\nthe shot. Stiles panicked and fled out the back of the yard but was\nbrought back inside by Sgt. Duffy.|\n\" CR\n\"The plot thickened, however, because Monica decided to take this\nopportunity to murder her father. Her mother and she were very close.\nMr. Linder was often away on business during Monica's childhood, and\nMrs. Linder imbued her daughter with a love/hatred for him, saying that\nhe abandoned them. Monica helped her father construct the\nremote-controlled gun, but she also blamed him for her mother's death\nand had lost all love for him. She therefore aimed the gun to kill her\nfather when fired. Her idea was to convict Stiles of the murder and go\nfree herself.|\n\" CR\n\"Phong had no idea of Monica's plan until he saw Linder's corpse. He did\nnot spill the beans on Linder's plan, since he also had reason to want\nLinder removed from the scene. Monica, as a last resort, may have attempted to\nconvince you that her father was dying of a stomach tumor and had\nplanned his own death. But Monica is the only one who could have twisted\nLinder's plan into murder: the key to the clock was hidden on her\nperson, so she had final control of the gun's aim.|\n\">)>\n\t <QUIT>>"
  },
  "TOO-LATE-F": {
   "name": "TOO-LATE-F",
   "file": "events.zil",
   "line": 1962,
   "endLine": 1971,
   "source": "<ROUTINE TOO-LATE-F ()\n\t<TELL\n\"|\nA few days pass, and you don't hear from Linder.\nBut a small item in the newspaper catches your eye: a grifter named\nStiles was found dead on the beach one morning, with a cheap\nhandgun lying near and a single small bullet wound through his heart.\nDoes this death have anything to do with Linder and your visit?\nWell, no need to lose sleep over it. Everyone sleeps the big sleep\nsooner or later.|\">>"
  },
  "PICK-ONE": {
   "name": "PICK-ONE",
   "file": "macros.zil",
   "line": 114,
   "endLine": 115,
   "source": "<ROUTINE PICK-ONE (FROB)\n\t <GET .FROB <RANDOM <GET .FROB 0>>>>"
  },
  "GO": {
   "name": "GO",
   "file": "main.zil",
   "line": 24,
   "endLine": 42,
   "source": "<ROUTINE GO ()\n\t <PUTB ,P-LEXV 0 59>\n\t <SETG LIT T>\n\t <SETG SCORE 20>\n\t <SETG WINNER ,PLAYER>\n\t <SETG HERE ,DRIVEWAY-ENTRANCE>\n\t <THIS-IS-IT ,FRONT-DOOR>\n\t <THIS-IS-S-HE ,PHONG>\n\t <SETG DIFFICULTY ,DIFFICULTY-MAX>\n\t <COND (<NOT <FSET? ,HERE ,TOUCHBIT>>\n\t\t<QUEUE-MAIN-EVENTS>\n\t\t<START-MOVEMENT>\n\t \t<INTRO>\n\t\t<V-VERSION>\n\t\t<CRLF>)>\n\t <MOVE ,PLAYER ,HERE>\n\t <V-LOOK>\n\t <MAIN-LOOP>\n\t <AGAIN>>    "
  },
  "MAIN-LOOP": {
   "name": "MAIN-LOOP",
   "file": "main.zil",
   "line": 45,
   "endLine": 47,
   "source": "<ROUTINE MAIN-LOOP (\"AUX\" TRASH)\n\t<REPEAT ()\n\t     <SET TRASH <MAIN-LOOP-1>>>>"
  },
  "MAIN-LOOP-1": {
   "name": "MAIN-LOOP-1",
   "file": "main.zil",
   "line": 49,
   "endLine": 133,
   "source": "<ROUTINE MAIN-LOOP-1 (\"AUX\" ICNT OCNT NUM CNT OBJ TBL V PTBL OBJ1 TMP) \n   #DECL ((CNT OCNT ICNT NUM) FIX (V) <OR 'T FIX FALSE> (OBJ)<OR FALSE OBJECT>\n\t  (OBJ1) OBJECT (TBL) TABLE (PTBL) <OR FALSE ATOM>)\n     <SET CNT 0>\n     <SET OBJ <>>\n     <SET PTBL T>\n     <COND (<NOT <==? ,QCONTEXT-ROOM ,HERE>>\n\t    <SETG QCONTEXT <>>)>\n     <COND (<SETG P-WON <PARSER>>\n\t    <SET ICNT <GET ,P-PRSI ,P-MATCHLEN>>\n\t    <SET NUM\n\t\t <COND (<0? <SET OCNT <GET ,P-PRSO ,P-MATCHLEN>>> .OCNT)\n\t\t       (<G? .OCNT 1>\n\t\t\t<SET TBL ,P-PRSO>\n\t\t\t<COND (<0? .ICNT> <SET OBJ <>>)\n\t\t\t      (T <SET OBJ <GET ,P-PRSI 1>>)>\n\t\t\t.OCNT)\n\t\t       (<G? .ICNT 1>\n\t\t\t<SET PTBL <>>\n\t\t\t<SET TBL ,P-PRSI>\n\t\t\t<SET OBJ <GET ,P-PRSO 1>>\n\t\t\t.ICNT)\n\t\t       (T 1)>>\n\t    <COND (<AND <NOT .OBJ> <1? .ICNT>> <SET OBJ <GET ,P-PRSI 1>>)>\n\t    <COND (<==? ,PRSA ,V?WALK>\n\t\t   <SET V <PERFORM ,PRSA ,PRSO>>)\n\t\t  (<0? .NUM>\n\t\t   <COND (<0? <BAND <GETB ,P-SYNTAX ,P-SBITS> ,P-SONUMS>>\n\t\t\t  <SET V <PERFORM ,PRSA>>\n\t\t\t  <SETG PRSO <>>)\n\t\t\t (T\n\t\t\t  <TELL \"(There isn't anything to \">\n\t\t\t  <SET TMP <GET ,P-ITBL ,P-VERBN>>\n\t\t\t  <COND (,P-OFLAG\n\t\t\t\t <PRINTB <GET .TMP 0>>)\n\t\t\t\t(T\n\t\t\t\t <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>)>\n\t\t\t  <TELL \"!)\" CR>\n\t\t\t  <SET V <>>)>)\n\t\t  (<AND .PTBL <G? .NUM 1> <VERB? ARREST COMPARE>>\n\t\t   <SET V <PERFORM ,PRSA ,OBJECT-PAIR>>)\n\t\t  (T\n\t\t   <SET TMP 0>\n\t\t   <REPEAT ()\n\t\t    <COND (<G? <SET CNT <+ .CNT 1>> .NUM>\n\t\t\t   <COND (<G? .TMP 0>\n\t\t\t\t  <TELL \"The other object\">\n\t\t\t\t  <COND (<NOT <EQUAL? .TMP 1>>\n\t\t\t\t\t <TELL \"s\">)>\n\t\t\t\t  <TELL \" that you mentioned \">\n\t\t\t\t  <COND (<NOT <EQUAL? .TMP 1>>\n\t\t\t\t\t <TELL \"are\">)\n\t\t\t\t\t(T <TELL \"is\">)>\n\t\t\t\t  <TELL \"n't here.\" CR>)>\n\t\t\t   <RETURN>)\n\t\t\t  (T\n\t\t\t   <COND (.PTBL <SET OBJ1 <GET ,P-PRSO .CNT>>)\n\t\t\t\t (T <SET OBJ1 <GET ,P-PRSI .CNT>>)>\n\t\t\t   <COND (<G? .NUM 1>\n\t\t\t\t  <COND (<==? .OBJ1 ,NOT-HERE-OBJECT>\n\t\t\t\t\t <SET TMP <+ .TMP 1>>\n\t\t\t\t\t <AGAIN>)\n\t\t\t\t\t(<==? .OBJ1 ,PLAYER> <AGAIN>)\n\t\t\t\t\t;(<FSET? .OBJ1 ,DUPLICATE> <AGAIN>)\n\t\t\t\t\t(T\n\t\t\t\t\t <COND (<EQUAL? .OBJ1 ,IT>\n\t\t\t\t\t\t<PRINTD ,P-IT-OBJECT>)\n\t\t\t\t\t       (T <PRINTD .OBJ1>)>\n\t\t\t\t\t <TELL \": \">)>)>\n\t\t\t   <SET V <QCONTEXT-CHECK <COND (.PTBL .OBJ1)\n\t\t\t\t\t\t\t(T .OBJ)>>>\n\t\t\t   <SET V\n\t\t\t\t<PERFORM ,PRSA ;\"? SETG PRSx to these?\"\n\t\t\t\t\t <COND (.PTBL .OBJ1) (T .OBJ)>\n\t\t\t\t\t <COND (.PTBL .OBJ)(T .OBJ1)>>>\n\t\t\t   <COND (<==? .V ,M-FATAL> <RETURN>)>)>>)>\n\t    <COND (<==? .V ,M-FATAL> <SETG P-CONT <>>)>)\n\t   (T\n\t    <SETG P-CONT <>>)>\n     <COND (,P-WON\n\t    <COND (<VERB? TELL BRIEF SUPER-BRIEF VERBOSE TIME SAVE\n\t\t\t  SPACE UNSPACE SCRIPT UNSCRIPT $VERIFY\n\t\t\t  QUIT RESTART $WHERE DEBUG $TANDY\n\t\t\t  ;\"DIAGNOSE INVENTORY SCORE\" VERSION> T)\n\t\t  (T <SET V <CLOCKER>>)>)>>"
  },
  "QCONTEXT-CHECK": {
   "name": "QCONTEXT-CHECK",
   "file": "main.zil",
   "line": 135,
   "endLine": 152,
   "source": "<ROUTINE QCONTEXT-CHECK (PRSO \"AUX\" OTHER (WHO <>) (N 0))\n\t <COND (<OR <VERB? ;FIND HELP WHAT>\n\t\t    <AND <VERB? SHOW TELL-ME> <==? .PRSO ,PLAYER>>> ;\"? more?\"\n\t\t<SET OTHER <FIRST? ,HERE>>\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT .OTHER> <RETURN>)\n\t\t\t      (<FSET? .OTHER ,PERSON>\n\t\t\t       <SET N <+ 1 .N>>\n\t\t\t       <SET WHO .OTHER>)>\n\t\t\t<SET OTHER <NEXT? .OTHER>>>\n\t\t<COND (<AND <==? 1 .N> <NOT ,QCONTEXT>>\n\t\t       <SAID-TO .WHO>)>\n\t\t<COND (<AND ,QCONTEXT\n\t\t\t    <IN? ,QCONTEXT ,HERE>\n\t\t\t    <==? ,QCONTEXT-ROOM ,HERE>\n\t\t\t    <==? ,WINNER ,PLAYER>> ;\"? more?\"\n\t\t       <SETG WINNER ,QCONTEXT>\n\t\t       <TELL \"(said to \" D ,QCONTEXT \")\" CR>)>)>>"
  },
  "SAID-TO": {
   "name": "SAID-TO",
   "file": "main.zil",
   "line": 154,
   "endLine": 157,
   "source": "<ROUTINE SAID-TO (WHO)\n <SETG WINNER .WHO>\n <SETG QCONTEXT .WHO>\n <SETG QCONTEXT-ROOM ,HERE>>"
  },
  "FAKE-ORPHAN": {
   "name": "FAKE-ORPHAN",
   "file": "main.zil",
   "line": 165,
   "endLine": 177,
   "source": "<ROUTINE FAKE-ORPHAN (\"AUX\" TMP)\n\t <ORPHAN ,P-SYNTAX <>>\n\t <TELL \"(Be specific: what object do you want to \">\n\t <SET TMP <GET ,P-OTBL ,P-VERBN>>\n\t <COND (<==? .TMP 0> <TELL \"tell\">)\n\t       (<0? <GETB ,P-VTBL 2>>\n\t\t<PRINTB <GET .TMP 0>>)\n\t       (T\n\t\t<WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>\n\t\t<PUTB ,P-VTBL 2 0>)>\n\t <SETG P-OFLAG T>\n\t <SETG P-WON <>>\n\t <TELL \"?)\" CR>>"
  },
  "PERFORM": {
   "name": "PERFORM",
   "file": "main.zil",
   "line": 181,
   "endLine": 261,
   "source": "<ROUTINE PERFORM (A \"OPTIONAL\" (O <>) (I <>) \"AUX\" V OA OO OI) \n\t#DECL ((A) FIX (O) <OR FALSE OBJECT FIX> (I) <OR FALSE OBJECT> (V)ANY)\n\t<COND (,DEBUG\n\t       <TELL \"[Perform: \">\n\t       %<COND (<GASSIGNED? PREDGEN> '<TELL N .A>)\n\t\t      (T '<PRINC <NTH ,ACTIONS <+ <* .A 2> 1>>>)>\n\t       <COND (<AND .O <NOT <==? .A ,V?WALK>>>\n\t\t      <TELL \"/\" D .O>)>\n\t       <COND (.I <TELL \"/\" D .I>)>\n\t       <TELL \"]\" CR>)>\n\t<SET OA ,PRSA>\n\t<SET OO ,PRSO>\n\t<SET OI ,PRSI>\n\t<SETG PRSA .A>\n\t<COND (<NOT <EQUAL? .A ,V?WALK>>\n\t       <COND (<AND <EQUAL? ,IT .I .O>\n\t\t\t   <NOT <EQUAL? ,P-IT-LOC ,HERE>>>\n\t\t      <COND (<NOT .I> <FAKE-ORPHAN>)\n\t\t\t    (T\n\t\t\t    <TELL \"(The \" D ,P-IT-OBJECT \" isn't here!)\" CR>)>\n\t\t      <RFATAL>)\n\t\t     (<AND <EQUAL? ,HIM-HER .I .O>\n\t\t\t   <NOT <EQUAL? <META-LOC ,P-HIM-HER> ,HERE>>>\n\t\t      <SETG P-HIM-HER <GET ,GLOBAL-CHARACTER-TABLE\n\t\t\t\t\t  <GETP ,P-HIM-HER ,P?CHARACTER>>>)>)>\n\t<COND (<==? .O ,IT> <SET O ,P-IT-OBJECT>)\n\t      (<==? .O ,HIM-HER> <SET O ,P-HIM-HER>)>\n\t<COND (<==? .I ,IT> <SET I ,P-IT-OBJECT>)\n\t      (<==? .I ,HIM-HER> <SET I ,P-HIM-HER>)>\n\t<SETG PRSO .O>\n\t<COND (<AND ,PRSO <NOT <VERB? WALK>>>\n\t       <COND (<FSET? ,PRSO ,PERSON>\n\t\t      <SETG P-HIM-HER ,PRSO>\n\t\t      <SETG P-HIM-HER-LOC ,HERE>)\n\t\t     (T\n\t\t      <SETG P-IT-OBJECT ,PRSO>\n\t\t      <SETG P-IT-LOC ,HERE>)>)>\n\t<SETG PRSI .I>\n\t;<COND (<NOT <==? .A ,V?AGAIN>>\n\t       <SETG L-PRSA .A>\n\t       <COND (<==? .A ,V?WALK> <SETG L-PRSO <>>)\n\t\t     (T <SETG L-PRSO .O>)>\n\t       <SETG L-PRSI .I>)>\n\t<COND (<AND <EQUAL? ,NOT-HERE-OBJECT ,PRSO ,PRSI>\n\t\t    <SET V <D-APPLY \"Not Here\" ,NOT-HERE-OBJECT-F>>> .V)\n\t      (<AND <SET O ,PRSO> <SET I ,PRSI> <NULL-F>>\n\t       <TELL \"[in case last clause changed PRSx]\">)\n\t      (<SET V <DD-APPLY \"Actor\" ,WINNER <GETP ,WINNER ,P?ACTION>>> .V)\n\t      (<SET V <D-APPLY \"Room (M-BEG)\"\n\t\t\t       <GETP <LOC ,WINNER> ,P?ACTION>\n\t\t\t       ,M-BEG>> .V)\n\t      (<SET V <D-APPLY \"Preaction\"\n\t\t\t       <GET ,PREACTIONS .A>>> .V)\n\t      (<AND .I\n\t\t    <SETG NOW-PRSI T>\n\t\t    <SET V <D-APPLY \"PRSI\" <GETP .I ,P?ACTION>>>>\n\t       .V)\n\t      (<AND <NOT <SETG NOW-PRSI <>>>\n\t\t    .O\n\t\t    <NOT <==? .A ,V?WALK>>\n\t\t    <LOC .O>\n\t\t    <GETP <LOC .O> ,P?CONTFCN>\n\t\t    <SET V <DD-APPLY \"Container\" <LOC .O>\n\t\t\t\t    <GETP <LOC .O> ,P?CONTFCN>>>>\n\t       .V)\n\t      (<AND .O\n\t\t    <NOT <==? .A ,V?WALK>>\n\t\t    <SET V <D-APPLY \"PRSO\"\n\t\t\t\t    <GETP .O ,P?ACTION>>>>\n\t       .V)\n\t      (<SET V <D-APPLY <>\n\t\t\t       <GET ,ACTIONS .A>>> .V)>\n\t<COND (<NOT <==? .V ,M-FATAL>>\n\t       <COND (<==? <LOC ,WINNER> ,PRSO>\t;\"was not in compiled PERFORM\"\n\t\t      <SETG PRSO <>>)>\n\t       <SET V <D-APPLY \"Room (M-END)\"\n\t\t\t       <GETP <LOC ,WINNER> ,P?ACTION> ,M-END>>)>\n\t<SETG PRSA .OA>\n\t<SETG PRSO .OO>\n\t<SETG PRSI .OI>\n\t.V>"
  },
  "DD-APPLY": {
   "name": "DD-APPLY",
   "file": "main.zil",
   "line": 263,
   "endLine": 265,
   "source": "<ROUTINE DD-APPLY (STR OBJ FCN \"OPTIONAL\" (FOO <>))\n\t<COND (,DEBUG <TELL \"[\" D .OBJ \"=]\">)>\n\t<D-APPLY .STR .FCN .FOO>>"
  },
  "D-APPLY": {
   "name": "D-APPLY",
   "file": "main.zil",
   "line": 267,
   "endLine": 283,
   "source": "<ROUTINE D-APPLY (STR FCN \"OPTIONAL\" (FOO <>) \"AUX\" RES)\n\t<COND (<NOT .FCN> <>)\n\t      (T\n\t       <COND (,DEBUG\n\t\t      <COND (<NOT .STR>\n\t\t\t     <TELL \"[Action:]\" CR>)\n\t\t\t    (T <TELL \"[\" .STR \": \">)>)>\n\t       <SET RES\n\t\t    <COND (.FOO <APPLY .FCN .FOO>)\n\t\t\t  (T <APPLY .FCN>)>>\n\t       <COND (<AND ,DEBUG .STR>\n\t\t      <COND (<==? .RES ,M-FATAL>\n\t\t\t     <TELL \"Fatal]\" CR>)\n\t\t\t    (<NOT .RES>\n\t\t\t     <TELL \"Not handled]\" CR>)\n\t\t\t    (T <TELL \"Handled]\" CR>)>)>\n\t       .RES)>>"
  },
  "THIS-IS-S-HE": {
   "name": "THIS-IS-S-HE",
   "file": "parser.zil",
   "line": 58,
   "endLine": 60,
   "source": "<ROUTINE THIS-IS-S-HE (PERSON)\n\t <SETG P-HIM-HER .PERSON>\n\t <SETG P-HIM-HER-LOC <LOC .PERSON>>>"
  },
  "I-PROMPT-1": {
   "name": "I-PROMPT-1",
   "file": "parser.zil",
   "line": 143,
   "endLine": 145,
   "source": "<ROUTINE I-PROMPT-1 ()\n\t<SETG P-PROMPT \"What next?\">\n\t<RFALSE>>"
  },
  "I-PROMPT-2": {
   "name": "I-PROMPT-2",
   "file": "parser.zil",
   "line": 147,
   "endLine": 157,
   "source": "<ROUTINE I-PROMPT-2 ()\n <COND (,P-PROMPT\n\t<SETG P-PROMPT <>>\n\t<TELL CR \"(Aren't you getting tired of seeing \">\n\t<COND (,X-IS-LISTENING <TELL \"\\\"(... is listening.)\\\" and \">)>\n\t<TELL\n\"\\\"What next?\\\" and \\\"You are now in the ....\\\"? From here on, the\nprompt will be much shorter.)\" CR>\n\t<COND (<VERB? WAIT WAIT-FOR WAIT-UNTIL> <CRLF>)>\n\t<DISABLE <INT I-PROMPT-2>>\n\t<RFALSE>)>>"
  },
  "PARSER": {
   "name": "PARSER",
   "file": "parser.zil",
   "line": 160,
   "endLine": 345,
   "source": "<ROUTINE PARSER (\"AUX\" (PTR ,P-LEXSTART) WRD (VAL 0) (VERB <>) (OF-FLAG <>)\n\t\t       LEN (DIR <>) (NW 0) (LW 0) NUM SCNT (CNT -1)) \n\t<REPEAT ()\n\t\t<COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN> <RETURN>)\n\t\t      (T <PUT ,P-ITBL .CNT 0>)>>\n\t<SETG P-NAM <>>\n\t<SETG P-ADJ <>>\n\t<SETG P-ADVERB <>>\n\t<SETG P-MERGED <>>\n\t<PUT ,P-PRSO ,P-MATCHLEN 0>\n\t<PUT ,P-PRSI ,P-MATCHLEN 0>\n\t<PUT ,P-BUTS ,P-MATCHLEN 0>\n\t<COND (<AND <NOT ,QUOTE-FLAG> <N==? ,WINNER ,PLAYER>>\n\t       <SETG WINNER ,PLAYER>\n\t       <COND (<NOT <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t      <SETG HERE <LOC ,WINNER>>)>)>\n\t<COND (,P-CONT\n\t       <SET PTR ,P-CONT>\n\t       <SETG P-CONT <>>\n\t       <COND (<NOT <VERB? TELL>> <CRLF>)>)\n\t      (T\n\t       <SETG WINNER ,PLAYER>\n\t       <SETG QUOTE-FLAG <>>\n\t       <COND (<NOT <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t      <SETG HERE <LOC ,WINNER>>)>\n\t       <SET SCNT ,P-SPACE>\n\t       <REPEAT ()\n\t\t       <COND (<L? <SET SCNT <- .SCNT 1>> 0> <RETURN>)\n\t\t\t     (T <CRLF>)>>\n\t       <COND (<AND ,P-PROMPT <NOT ,P-OFLAG>>\n\t\t      <COND (,QCONTEXT\n\t\t\t     <SETG X-IS-LISTENING T>\n\t\t\t     <TELL \"(\" D ,QCONTEXT \" is listening.)\" CR>)>\n\t\t      <TELL ,P-PROMPT CR>)>\n\t       <TELL \">\">\n\t       <READ ,P-INBUF ,P-LEXV>)>\n\t<SETG P-LEN <GETB ,P-LEXV ,P-LEXWORDS>>\n\t<COND (<0? ,P-LEN> <TELL \"What?\" CR> <RFALSE>)\n\t      (<OR <EQUAL? <SET WRD<GET ,P-LEXV .PTR>> ,W?WHY ,W?HOW ,W?WHEN>\n\t\t   <EQUAL? .WRD ,W?IS ,W?DID ,W?ARE>>\n\t       <TELL\n\"(Sorry, but this program can't handle questions like that.\nYou should stick to questions like \\\"WHAT IS ...\\\" and \\\"WHERE IS ....\\\"\nMaybe you'd like to review your instruction manual.)\"\n;\"Nat'l Detective Gazette\"\n;\"(Have you forgotten how to interrogate people in this story? You should\nreview pages 2-3 of your manual again. Remember that the\ndocuments in the package contain the answers to all of the\nimportant questions that you can't ask directly.)\" CR>\n\t       <RFALSE>)>\n\t<SET LEN ,P-LEN>\n\t<SETG P-DIR <>>\n\t<SETG P-NCN 0>\n\t<SETG P-GETFLAGS 0>\n\t;\"3/25/83: Next statement added.\"\n\t<PUT ,P-ITBL ,P-VERBN 0>\n\t<REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <SETG QUOTE-FLAG <>>\n\t\t       <RETURN>)\n\t\t      (<OR <SET WRD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WRD <NUMBER? .PTR>>>\n\t\t       <COND (<AND <==? .WRD ,W?TO>\n\t\t\t\t   <EQUAL? .VERB ,ACT?TELL ,ACT?ASK>>\n\t\t\t      <SET WRD ,W?QUOTE>)\n\t\t\t     (<AND <==? .WRD ,W?THEN>\n\t\t\t\t   <NOT .VERB>>\n\t\t\t      <PUT ,P-ITBL ,P-VERB ,ACT?TELL>\n\t\t\t      <PUT ,P-ITBL ,P-VERBN 0>\n\t\t\t      <SET WRD ,W?QUOTE>)>\n\t\t       <COND (<AND <EQUAL? .WRD ,W?PERIOD>\n\t\t\t\t   <EQUAL? .LW ,W?MRS ,W?MR ;,W?MS>>\n\t\t\t      <SET LW 0>)\n\t\t\t     (<OR <EQUAL? .WRD ,W?THEN ,W?PERIOD>\n\t\t\t\t  <EQUAL? .WRD ,W?QUOTE>> \n\t\t\t      <COND (<EQUAL? .WRD ,W?QUOTE>\n\t\t\t\t     <COND (,QUOTE-FLAG\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>)\n\t\t\t\t\t   (T <SETG QUOTE-FLAG T>)>)>\n\t\t\t      <OR <0? ,P-LEN>\n\t\t\t\t  <SETG P-CONT <+ .PTR ,P-LEXELEN>>>\n\t\t\t      <PUTB ,P-LEXV ,P-LEXWORDS ,P-LEN>\n\t\t\t      <RETURN>)\n\t\t\t     (<AND <SET VAL\n\t\t\t\t\t<WT? .WRD\n\t\t\t\t\t     ,PS?DIRECTION\n\t\t\t\t\t     ,P1?DIRECTION>>\n\t\t\t\t   <OR <==? .LEN 1>\n\t\t\t\t       <AND <==? .LEN 2><==? .VERB ,ACT?WALK>>\n\t\t\t\t       <AND <EQUAL? <SET NW\n\t\t\t\t\t\t     <GET ,P-LEXV\n\t\t\t\t\t\t\t <+ .PTR ,P-LEXELEN>>>\n\t\t\t\t\t            ,W?THEN\n\t\t\t\t\t            ,W?QUOTE>\n\t\t\t\t\t    <G? .LEN 2>>\n\t\t\t\t       <AND <EQUAL? .NW ,W?PERIOD>\n\t\t\t\t\t    <G? .LEN 1>>\n\t\t\t\t       <AND ,QUOTE-FLAG\n\t\t\t\t\t    <==? .LEN 2>\n\t\t\t\t\t    <EQUAL? .NW ,W?QUOTE>>\n\t\t\t\t       <AND <G? .LEN 2>\n\t\t\t\t\t    <EQUAL? .NW ,W?COMMA ,W?AND>>>>\n\t\t\t      <SET DIR .VAL>\n\t\t\t      <COND (<EQUAL? .NW ,W?COMMA ,W?AND>\n\t\t\t\t     <PUT ,P-LEXV\n\t\t\t\t\t  <+ .PTR ,P-LEXELEN>\n\t\t\t\t\t  ,W?THEN>)>\n\t\t\t      <COND (<NOT <G? .LEN 2>>\n\t\t\t\t     <SETG QUOTE-FLAG <>>\n\t\t\t\t     <RETURN>)>)\n\t\t\t     (<AND <SET VAL <WT? .WRD ,PS?VERB ,P1?VERB>>\n\t\t\t\t   <OR <NOT .VERB>\n\t\t\t\t       <EQUAL? .VERB ,ACT?WHAT>>>\n\t\t\t      <SET VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERBN ,P-VTBL>\n\t\t\t      <PUT ,P-VTBL 0 .WRD>\n\t\t\t      <PUTB ,P-VTBL 2 <GETB ,P-LEXV\n\t\t\t\t\t\t    <SET NUM\n\t\t\t\t\t\t\t <+ <* .PTR 2> 2>>>>\n\t\t\t      <PUTB ,P-VTBL 3 <GETB ,P-LEXV <+ .NUM 1>>>)\n\t\t\t     (<OR <SET VAL <WT? .WRD ,PS?PREPOSITION 0>>\n\t\t\t\t  <AND <OR <EQUAL? .WRD ;,W?ALL ,W?ONE ,W?A>\n\t\t\t\t\t   <WT? .WRD ,PS?ADJECTIVE>\n\t\t\t\t\t   <WT? .WRD ,PS?OBJECT>>\n\t\t\t\t       ;<SET VAL 0>>>\n\t\t\t      <COND (<AND <G? ,P-LEN 1 ;0>\n\t\t\t\t\t  <==? <GET ,P-LEXV\n\t\t\t\t\t\t    <+ .PTR ,P-LEXELEN>>\n\t\t\t\t\t       ,W?OF>\n\t\t\t\t\t  <NOT <EQUAL? .VERB\n\t\t\t\t\t\t       ,ACT?ACCUSE\n\t\t\t\t\t\t       ,ACT?MAKE>>\n\t\t\t\t\t  <0? .VAL>\n\t\t\t\t\t  <NOT <EQUAL? .WRD\n\t\t\t\t\t\t       ;,W?ALL ,W?ONE ,W?A>>>\n\t\t\t\t     <SET OF-FLAG T>)\n\t\t\t\t    (<AND <NOT <0? .VAL>>\n\t\t\t\t          <OR <0? ,P-LEN>\n\t\t\t\t\t      <EQUAL? <GET ,P-LEXV <+ .PTR 2>>\n\t\t\t\t\t\t      ,W?THEN ,W?PERIOD>>>\n\t\t\t\t     <COND (<L? ,P-NCN 2>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1 .VAL>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1N .WRD>)>)\n\t\t\t\t    (<==? ,P-NCN 2>\n\t\t\t\t     <TELL\n\"(I found more than two nouns in that sentence!)\" CR>\n\t\t\t\t     <RFALSE>)\n\t\t\t\t    (T\n\t\t\t\t     <SETG P-NCN <+ ,P-NCN 1>>\n\t\t\t\t     <OR <SET PTR <CLAUSE .PTR .VAL .WRD>>\n\t\t\t\t\t <RFALSE>>\n\t\t\t\t     <COND (<L? .PTR 0>\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>\n\t\t\t\t\t    <RETURN>)>)>)\n\t\t\t     (<==? .WRD ,W?CLOSELY>\n\t\t\t      <SETG P-ADVERB ,W?CAREFULLY>)\n\t\t\t     (<OR <EQUAL? .WRD\n\t\t\t\t\t  ,W?CAREFULLY ,W?QUIETLY>\n\t\t\t\t  <EQUAL? .WRD\n\t\t\t\t\t  ,W?SLOWLY ,W?QUICKLY ,W?BRIEFLY>>\n\t\t\t      <SETG P-ADVERB .WRD>)\n\t\t\t     (<EQUAL? .WRD ,W?OF>\n\t\t\t      <COND (<OR <NOT .OF-FLAG>\n\t\t\t\t\t <EQUAL?\n\t\t\t\t\t  <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>\n\t\t\t\t\t  ,W?PERIOD ,W?THEN>>\n\t\t\t\t     <CANT-USE .PTR>\n\t\t\t\t     <RFALSE>)\n\t\t\t\t    (T\n\t\t\t\t     <SET OF-FLAG <>>)>)\n\t\t\t     (<WT? .WRD ,PS?BUZZ-WORD>)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T\n\t\t       <UNKNOWN-WORD .PTR>\n\t\t       <RFALSE>)>\n\t\t<SET LW .WRD>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>\n\t<COND (.DIR <SETG PRSA ,V?WALK> <SETG PRSO .DIR> <RETURN T>)>\n\t<COND (,P-OFLAG <ORPHAN-MERGE>)>\n\t<COND (<==? <GET ,P-ITBL ,P-VERB> 0>\n\t       <PUT ,P-ITBL ,P-VERB ,ACT?$CALL>)>\n\t<COND (<AND <SYNTAX-CHECK> <SNARF-OBJECTS> <TAKE-CHECK> <MANY-CHECK>>\n\t       T)>>"
  },
  "WT?": {
   "name": "WT?",
   "file": "parser.zil",
   "line": 351,
   "endLine": 357,
   "source": "<ROUTINE WT? (PTR BIT \"OPTIONAL\" (B1 5) \"AUX\" (OFFSET ,P-P1OFF) TYP) \n\t<COND (<BTST <SET TYP <GETB .PTR ,P-PSOFF>> .BIT>\n\t       <COND (<G? .B1 4> <RTRUE>)\n\t\t     (T\n\t\t      <SET TYP <BAND .TYP ,P-P1BITS>>\n\t\t      <COND (<NOT <==? .TYP .B1>> <SET OFFSET <+ .OFFSET 1>>)>\n\t\t      <GETB .PTR .OFFSET>)>)>>"
  },
  "CLAUSE": {
   "name": "CLAUSE",
   "file": "parser.zil",
   "line": 360,
   "endLine": 434,
   "source": "<ROUTINE CLAUSE (PTR VAL WRD \"AUX\" OFF NUM (ANDFLG <>) (FIRST?? T) NW (LW 0)) \n\t#DECL ((PTR VAL OFF NUM) FIX (WRD NW) <OR FALSE FIX TABLE>\n\t       (ANDFLG FIRST??) <OR ATOM FALSE>)\n\t<SET OFF <* <- ,P-NCN 1> 2>>\n\t<COND (<NOT <==? .VAL 0>>\n\t       <PUT ,P-ITBL <SET NUM <+ ,P-PREP1 .OFF>> .VAL>\n\t       <PUT ,P-ITBL <+ .NUM 1> .WRD>\n\t       <SET PTR <+ .PTR ,P-LEXELEN>>)\n\t      (T <SETG P-LEN <+ ,P-LEN 1>>)>\n\t<COND (<0? ,P-LEN> <SETG P-NCN <- ,P-NCN 1>> <RETURN -1>)>\n\t<PUT ,P-ITBL <SET NUM <+ ,P-NC1 .OFF>> <REST ,P-LEXV <* .PTR 2>>>\n\t<COND (<EQUAL? <GET ,P-LEXV .PTR> ,W?THE ,W?A ,W?AN>\n\t       <PUT ,P-ITBL .NUM <REST <GET ,P-ITBL .NUM> 4>>)>\n\t<REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <PUT ,P-ITBL <+ .NUM 1> <REST ,P-LEXV <* .PTR 2>>>\n\t\t       <RETURN -1>)>\n\t\t<COND (<OR <SET WRD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WRD <NUMBER? .PTR>>>\n\t\t       <COND (<0? ,P-LEN> <SET NW 0>)\n\t\t\t     (T <SET NW <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>>)>\n\t\t       <COND (<AND <==? .WRD ,W?OF>\n\t\t\t\t   <EQUAL? <GET ,P-ITBL ,P-VERB>\n\t\t\t\t\t   ,ACT?ACCUSE ,ACT?MAKE>>\n\t\t\t      <PUT ,P-LEXV .PTR ,W?WITH>\n\t\t\t      <SET WRD ,W?WITH>)>\n\t\t       <COND (<AND <EQUAL? .WRD ,W?PERIOD>\n\t\t\t\t   <EQUAL? .LW ,W?MRS ,W?MR ;,W?MS>>\n\t\t\t      <SET LW 0>)\n\t\t\t     (<EQUAL? .WRD ,W?AND ,W?COMMA> <SET ANDFLG T>)\n\t\t\t     (<EQUAL? .WRD ;,W?ALL ,W?ONE>\n\t\t\t      <COND (<==? .NW ,W?OF>\n\t\t\t\t     <SETG P-LEN <- ,P-LEN 1>>\n\t\t\t\t     <SET PTR <+ .PTR ,P-LEXELEN>>)>)\n\t\t\t     (<OR <EQUAL? .WRD ,W?THEN ,W?PERIOD>\n\t\t\t\t  <AND <WT? .WRD ,PS?PREPOSITION>\n\t\t\t\t       <NOT .FIRST??>>>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 1>>\n\t\t\t      <PUT ,P-ITBL\n\t\t\t\t   <+ .NUM 1>\n\t\t\t\t   <REST ,P-LEXV <* .PTR 2>>>\n\t\t\t      <RETURN <- .PTR ,P-LEXELEN>>)\n\t\t\t     ;\"3/16/83: This clause used to be later.\"\n\t\t\t     (<AND .ANDFLG\n\t\t\t\t   <OR ;\"3/25/83: next statement added.\"\n\t\t\t\t       <EQUAL? <GET ,P-ITBL ,P-VERBN> 0>\n\t\t\t\t       <WT? .WRD ,PS?DIRECTION>\n\t\t\t\t       <WT? .WRD ,PS?VERB>>>\n\t\t\t      <SET PTR <- .PTR 4>>\n\t\t\t      <PUT ,P-LEXV <+ .PTR 2> ,W?THEN>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 2>>)\n\t\t\t     (<WT? .WRD ,PS?OBJECT>\n\t\t\t      <COND (<AND <WT? .WRD\n\t\t\t\t\t       ,PS?ADJECTIVE\n\t\t\t\t\t       ,P1?ADJECTIVE>\n\t\t\t\t\t  <NOT <==? .NW 0>>\n\t\t\t\t\t  <WT? .NW ,PS?OBJECT>>)\n\t\t\t\t    (<AND <NOT .ANDFLG>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?BUT ,W?EXCEPT>>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t\t     <PUT ,P-ITBL\n\t\t\t\t\t  <+ .NUM 1>\n\t\t\t\t\t  <REST ,P-LEXV <* <+ .PTR 2> 2>>>\n\t\t\t\t     <RETURN .PTR>)\n\t\t\t\t    (T <SET ANDFLG <>>)>)\n\t\t\t     (<OR <WT? .WRD ,PS?ADJECTIVE>\n\t\t\t\t  <WT? .WRD ,PS?BUZZ-WORD>>)\n\t\t\t     (<WT? .WRD ,PS?PREPOSITION> T)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T <UNKNOWN-WORD .PTR> <RFALSE>)>\n\t\t<SET LW .WRD>\n\t\t<SET FIRST?? <>>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>> "
  },
  "NUMBER?": {
   "name": "NUMBER?",
   "file": "parser.zil",
   "line": 436,
   "endLine": 461,
   "source": "<ROUTINE NUMBER? (PTR \"AUX\" CNT BPTR CHR (SUM 0) (TIM <>))\n\t <SET CNT <GETB <REST ,P-LEXV <* .PTR 2>> 2>>\n\t <SET BPTR <GETB <REST ,P-LEXV <* .PTR 2>> 3>>\n\t <REPEAT ()\n\t\t <COND (<L? <SET CNT <- .CNT 1>> 0> <RETURN>)\n\t\t       (T\n\t\t\t<SET CHR <GETB ,P-INBUF .BPTR>>\n\t\t\t<COND (<==? .CHR 58>\n\t\t\t       <SET TIM .SUM>\n\t\t\t       <SET SUM 0>)\n\t\t\t      (<G? .SUM 9999> <RFALSE>)\n\t\t\t      (<AND <L? .CHR 58> <G? .CHR 47>>\n\t\t\t       <SET SUM <+ <* .SUM 10> <- .CHR 48>>>)\n\t\t\t      (T <RFALSE>)>\n\t\t\t<SET BPTR <+ .BPTR 1>>)>>\n\t <PUT ,P-LEXV .PTR ,W?INTNUM>\n\t <COND (<G? .SUM 9999> <RFALSE>)\n\t       (.TIM\n\t\t<COND (<G? .TIM 23> <RFALSE>)\n\t\t      (<G? .TIM 19> T)\n\t\t      (<G? .TIM 12> <RFALSE>)\n\t\t      (<G? .TIM  7> T)\n\t\t      (T <SET TIM <+ 12 .TIM>>)>\n\t\t<SET SUM <+ .SUM <* .TIM 60>>>)>\n\t <SETG P-NUMBER .SUM>\n\t ,W?INTNUM>"
  },
  "ORPHAN-MERGE": {
   "name": "ORPHAN-MERGE",
   "file": "parser.zil",
   "line": 466,
   "endLine": 522,
   "source": "<ROUTINE ORPHAN-MERGE (\"AUX\" (CNT -1) TEMP VERB BEG END (ADJ <>) WRD) \n   #DECL ((CNT TEMP VERB) FIX (BEG END) <PRIMTYPE VECTOR> (WRD) TABLE)\n   <SETG P-OFLAG <>>\n   <COND\n    (<AND <NOT <0? <SET VERB <GET ,P-ITBL ,P-VERB>>>>\n\t  <NOT <==? .VERB <GET ,P-OTBL ,P-VERB>>>>\n     <RFALSE>)\n    (<==? ,P-NCN 2>\n     <RFALSE>)\n    (<==? <GET ,P-OTBL ,P-NC1> 1>\n     <COND (<OR <==? <SET TEMP <GET ,P-ITBL ,P-PREP1>> <GET ,P-OTBL ,P-PREP1>>\n\t\t<0? .TEMP>>\n\t    <COND (.ADJ\n\t\t   <PUT ,P-OTBL ,P-NC1 <REST ,P-LEXV 2>>\n\t\t   <PUT ,P-OTBL ,P-NC1L <REST ,P-LEXV 6>>)\n\t\t  (T\n\t\t   <PUT ,P-OTBL ,P-NC1 <GET ,P-ITBL ,P-NC1>>\n\t\t   <PUT ,P-OTBL ,P-NC1L <GET ,P-ITBL ,P-NC1L>>)>)\n\t   (T <RFALSE>)>)\n    (<==? <GET ,P-OTBL ,P-NC2> 1>\n     <COND (<OR <==? <SET TEMP <GET ,P-ITBL ,P-PREP1>> <GET ,P-OTBL ,P-PREP2>>\n\t\t<0? .TEMP>>\n\t    <PUT ,P-OTBL ,P-NC2 <GET ,P-ITBL ,P-NC1>>\n\t    <PUT ,P-OTBL ,P-NC2L <GET ,P-ITBL ,P-NC1L>>\n\t    <SETG P-NCN 2>)\n\t   (T <RFALSE>)>)\n    (,P-ACLAUSE\n     <COND\n      (<NOT <==? ,P-NCN 1>> <SETG P-ACLAUSE <>> <RFALSE>)\n      (T\n       <SET BEG <GET ,P-ITBL ,P-NC1>>\n       <SET END <GET ,P-ITBL ,P-NC1L>>\n       <REPEAT ()\n\t       <COND (<==? .BEG .END>\n\t\t      <COND (.ADJ\n\t\t\t     <ACLAUSE-WIN .ADJ>\n\t\t\t     <RETURN>)\n\t\t\t    (T\n\t\t\t     <SETG P-ACLAUSE <>>\n\t\t\t     <RFALSE>)>)\n\t\t     (<AND <NOT .ADJ>\n\t\t\t   <BTST <GETB <SET WRD <GET .BEG 0>> ,P-PSOFF>\n\t\t\t         ,PS?ADJECTIVE>>\n\t\t      <SET ADJ .WRD>)\n\t\t     (<OR <BTST <GETB .WRD ,P-PSOFF> ,PS?OBJECT>\n\t\t\t  <==? .WRD ,W?ONE>>\n\t\t      <COND (<NOT <EQUAL? .WRD ,P-ANAM ,W?ONE>> <RFALSE>)\n\t\t\t    (T\n\t\t\t     <ACLAUSE-WIN .ADJ>\n\t\t\t     <RETURN>)>)>\n\t       <SET BEG <REST .BEG ,P-WORDLEN>>>)>)>\n   <REPEAT ()\n\t   <COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN>\n\t\t  <SETG P-MERGED T>\n\t\t  <RTRUE>)\n\t\t (T <PUT ,P-ITBL .CNT <GET ,P-OTBL .CNT>>)>>\n   T>"
  },
  "ACLAUSE-WIN": {
   "name": "ACLAUSE-WIN",
   "file": "parser.zil",
   "line": 524,
   "endLine": 530,
   "source": "<ROUTINE ACLAUSE-WIN (ADJ)\n\t <SETG P-CCSRC ,P-OTBL>\n\t <CLAUSE-COPY ,P-ACLAUSE <+ ,P-ACLAUSE 1> .ADJ>\n\t <AND <NOT <==? <GET ,P-OTBL ,P-NC2> 0>>\n\t      <SETG P-NCN 2>>\n\t <SETG P-ACLAUSE <>>\n\t <RTRUE>>"
  },
  "WORD-PRINT": {
   "name": "WORD-PRINT",
   "file": "parser.zil",
   "line": 535,
   "endLine": 540,
   "source": "<ROUTINE WORD-PRINT (CNT BUF)\n\t <REPEAT ()\n\t\t <COND (<DLESS? CNT 0> <RETURN>)\n\t\t       (ELSE\n\t\t\t<PRINTC <GETB ,P-INBUF .BUF>>\n\t\t\t<SET BUF <+ .BUF 1>>)>>>"
  },
  "UNKNOWN-WORD": {
   "name": "UNKNOWN-WORD",
   "file": "parser.zil",
   "line": 553,
   "endLine": 561,
   "source": "<ROUTINE UNKNOWN-WORD (PTR \"AUX\" BUF MSG) \n\t#DECL ((PTR BUF) FIX)\n\t<SET MSG <PICK-ONE ,UNKNOWN-MSGS>>\n\t<TELL <GET .MSG 0>>\n\t<WORD-PRINT <GETB <REST ,P-LEXV <SET BUF <* .PTR 2>>> 2>\n\t\t    <GETB <REST ,P-LEXV .BUF> 3>>\n\t<TELL <GET .MSG 1> CR>\n\t<SETG QUOTE-FLAG <>>\n\t<SETG P-OFLAG <>>>"
  },
  "CANT-USE": {
   "name": "CANT-USE",
   "file": "parser.zil",
   "line": 563,
   "endLine": 570,
   "source": "<ROUTINE CANT-USE (PTR \"AUX\" BUF) \n\t#DECL ((PTR BUF) FIX)\n\t<TELL \"(Sorry, but you can't use the word \\\"\">\n\t<WORD-PRINT <GETB <REST ,P-LEXV <SET BUF <* .PTR 2>>> 2>\n\t\t    <GETB <REST ,P-LEXV .BUF> 3>>\n\t<TELL \"\\\" in that sense.)\" CR>\n\t<SETG QUOTE-FLAG <>>\n\t<SETG P-OFLAG <>>>"
  },
  "SYNTAX-CHECK": {
   "name": "SYNTAX-CHECK",
   "file": "parser.zil",
   "line": 599,
   "endLine": 672,
   "source": "<ROUTINE SYNTAX-CHECK (\"AUX\" SYN LEN NUM OBJ (DRIVE1 <>) (DRIVE2 <>)\n\t\t\t     PREP VERB) \n\t#DECL ((DRIVE1 DRIVE2) <OR FALSE <PRIMTYPE VECTOR>>\n\t       (SYN) <PRIMTYPE VECTOR> (LEN NUM VERB PREP) FIX\n\t       (OBJ) <OR FALSE OBJECT>)\n\t<COND (<0? <SET VERB <GET ,P-ITBL ,P-VERB>>>\n\t       <TELL \"(I couldn't find a verb in that sentence!)\" CR>\n\t       <RFALSE>)>\n\t<SET SYN <GET ,VERBS <- 255 .VERB>>>\n\t<SET LEN <GETB .SYN 0>>\n\t<SET SYN <REST .SYN>>\n\t<REPEAT ()\n\t\t<SET NUM <BAND <GETB .SYN ,P-SBITS> ,P-SONUMS>>\n\t\t<COND (<G? ,P-NCN .NUM> T) ;\"Added 4/27/83\"\n\t\t      (<AND <NOT <L? .NUM 1>>\n\t\t\t    <0? ,P-NCN>\n\t\t\t    <OR <0? <SET PREP <GET ,P-ITBL ,P-PREP1>>>\n\t\t\t\t<==? .PREP <GETB .SYN ,P-SPREP1>>>>\n\t\t       <SET DRIVE1 .SYN>)\n\t\t      (<==? <GETB .SYN ,P-SPREP1> <GET ,P-ITBL ,P-PREP1>>\n\t\t       <COND (<AND <==? .NUM 2> <==? ,P-NCN 1>>\n\t\t\t      <SET DRIVE2 .SYN>)\n\t\t\t     (<==? <GETB .SYN ,P-SPREP2>\n\t\t\t\t   <GET ,P-ITBL ,P-PREP2>>\n\t\t\t      <SYNTAX-FOUND .SYN>\n\t\t\t      <RTRUE>)>)>\n\t\t<COND (<DLESS? LEN 1>\n\t\t       <COND (<OR .DRIVE1 .DRIVE2> <RETURN>)\n\t\t\t     (T\n\t\t\t      <TELL\n\t\"(Sorry, but English is my second language. Please rephrase that.)\"\n\t\t\t       ;\"(That sentence didn't seem to make sense!)\"\n\t\t\t       CR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T <SET SYN <REST .SYN ,P-SYNLEN>>)>>\n\t<COND (<AND .DRIVE1\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE1 ,P-SFWIM1>\n\t\t\t       <GETB .DRIVE1 ,P-SLOC1>\n\t\t\t       <GETB .DRIVE1 ,P-SPREP1>>>>\n\t       <PUT ,P-PRSO ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSO 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE1>)\n\t      (<AND .DRIVE2\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE2 ,P-SFWIM2>\n\t\t\t       <GETB .DRIVE2 ,P-SLOC2>\n\t\t\t       <GETB .DRIVE2 ,P-SPREP2>>>>\n\t       <PUT ,P-PRSI ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSI 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE2>)\n\t      (<EQUAL? .VERB ,ACT?FIND ,ACT?WHAT>\n\t       <TELL \"(Sorry, but I can't answer that question.)\" CR>\n\t       <RFALSE>)\n\t      (T\n\t       <COND (<EQUAL? ,WINNER ,PLAYER>\n\t\t      <ORPHAN .DRIVE1 .DRIVE2>\n\t\t      <TELL \"(What do you want to \">)\n\t\t     (T\n\t\t      <TELL \n\"(Your request was incomplete. Next time, say what you want \" D ,WINNER\n\" to \">)>\n\t       <VERB-PRINT>\n\t       <COND (.DRIVE2\n\t\t      <CLAUSE-PRINT ,P-NC1 ,P-NC1L>)>\n\t       <PREP-PRINT <COND (.DRIVE1 <GETB .DRIVE1 ,P-SPREP1>)\n\t\t\t\t (T <GETB .DRIVE2 ,P-SPREP2>)>>\n\t       <COND (<EQUAL? ,WINNER ,PLAYER>\n\t\t      <SETG P-OFLAG T>\n\t\t      <TELL \"?)\" CR>)\n\t\t     (T\n\t\t      <SETG P-OFLAG <>>\n\t\t      <TELL \".)\" CR>)>\n\t       <RFALSE>)>> "
  },
  "VERB-PRINT": {
   "name": "VERB-PRINT",
   "file": "parser.zil",
   "line": 674,
   "endLine": 681,
   "source": "<ROUTINE VERB-PRINT (\"AUX\" TMP)\n\t<SET TMP <GET ,P-ITBL ,P-VERBN>>\n\t<COND (<==? .TMP 0> <TELL \"tell\">)\n\t      (<0? <GETB ,P-VTBL 2>>\n\t       <PRINTB <GET .TMP 0>>)\n\t      (T\n\t       <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>\n\t       <PUTB ,P-VTBL 2 0>)>>"
  },
  "ORPHAN": {
   "name": "ORPHAN",
   "file": "parser.zil",
   "line": 683,
   "endLine": 697,
   "source": "<ROUTINE ORPHAN (D1 D2 \"AUX\" (CNT -1)) \n\t#DECL ((D1 D2) <OR FALSE <PRIMTYPE VECTOR>>)\n\t<PUT ,P-OCLAUSE ,P-MATCHLEN 0>\n\t<SETG P-CCSRC ,P-ITBL>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT ,P-ITBLLEN> <RETURN>)\n\t\t      (T <PUT ,P-OTBL .CNT <GET ,P-ITBL .CNT>>)>>\n\t<COND (<==? ,P-NCN 2> <CLAUSE-COPY ,P-NC2 ,P-NC2L>)>\n\t<COND (<NOT <L? ,P-NCN 1>> <CLAUSE-COPY ,P-NC1 ,P-NC1L>)>\n\t<COND (.D1\n\t       <PUT ,P-OTBL ,P-PREP1 <GETB .D1 ,P-SPREP1>>\n\t       <PUT ,P-OTBL ,P-NC1 1>)\n\t      (.D2\n\t       <PUT ,P-OTBL ,P-PREP2 <GETB .D2 ,P-SPREP2>>\n\t       <PUT ,P-OTBL ,P-NC2 1>)>> "
  },
  "CLAUSE-PRINT": {
   "name": "CLAUSE-PRINT",
   "file": "parser.zil",
   "line": 699,
   "endLine": 700,
   "source": "<ROUTINE CLAUSE-PRINT (BPTR EPTR \"OPTIONAL\" (THE? T)) \n\t<BUFFER-PRINT <GET ,P-ITBL .BPTR> <GET ,P-ITBL .EPTR> .THE?>>    "
  },
  "BUFFER-PRINT": {
   "name": "BUFFER-PRINT",
   "file": "parser.zil",
   "line": 702,
   "endLine": 732,
   "source": "<ROUTINE BUFFER-PRINT (BEG END CP \"AUX\" (NOSP <>) WRD (FIRST?? T) (PN <>))\n\t #DECL ((BEG END) <PRIMTYPE VECTOR> (CP) <OR FALSE ATOM>)\n\t <REPEAT ()\n\t\t<COND (<==? .BEG .END> <RETURN>)\n\t\t      (T\n\t\t       <COND (.NOSP <SET NOSP <>>)\n\t\t\t     (T <TELL \" \">)>\n\t\t       <COND (<==? <SET WRD <GET .BEG 0>> ,W?PERIOD>\n\t\t\t      <SET NOSP T>)\n\t\t\t     (<==? .WRD ,W?MRS> <TELL \"Mrs.\"> <SET PN T>)\n\t\t\t     ;(<==? .WRD ,W?MS> <TELL \"Ms.\"> <SET PN T>)\n\t\t\t     (<==? .WRD ,W?MR> <TELL \"Mr.\"> <SET PN T>)\n\t\t\t     (<OR <EQUAL? .WRD ,W?LINDER ,W?MONICA ,W?PHONG>\n\t\t\t\t  <EQUAL? .WRD ,W?STILES ,W?DUFFY>>\n\t\t\t      <CAPITALIZE .BEG>\n\t\t\t      <SET PN T>)\n\t\t\t     (T\n\t\t\t      <COND (<AND .FIRST?? <NOT .PN> .CP>\n\t\t\t\t     <TELL \"the \">)>\n\t\t\t      <COND (<OR ,P-OFLAG ,P-MERGED> <PRINTB .WRD>)\n\t\t\t\t    (<AND <==? .WRD ,W?IT>\n\t\t\t\t\t  <==? ,P-IT-LOC ,HERE>>\n\t\t\t\t     <PRINTD ,P-IT-OBJECT>)\n\t\t\t\t    (<AND <EQUAL? .WRD ,W?HIM ,W?HER>\n\t\t\t\t\t  <==? ,P-HIM-HER-LOC ,HERE>>\n\t\t\t\t     <PRINTD ,P-HIM-HER>)\n\t\t\t\t    (T\n\t\t\t\t     <WORD-PRINT <GETB .BEG 2>\n\t\t\t\t\t\t <GETB .BEG 3>>)>\n\t\t\t      <SET FIRST?? <>>)>)>\n\t\t<SET BEG <REST .BEG ,P-WORDLEN>>>>"
  },
  "CAPITALIZE": {
   "name": "CAPITALIZE",
   "file": "parser.zil",
   "line": 734,
   "endLine": 736,
   "source": "<ROUTINE CAPITALIZE (PTR)\n\t <PRINTC <- <GETB ,P-INBUF <GETB .PTR 3>> 32>>\n\t <WORD-PRINT <- <GETB .PTR 2> 1> <+ <GETB .PTR 3> 1>>>"
  },
  "PREP-PRINT": {
   "name": "PREP-PRINT",
   "file": "parser.zil",
   "line": 738,
   "endLine": 747,
   "source": "<ROUTINE PREP-PRINT (PREP \"AUX\" WRD) \n\t#DECL ((PREP) FIX)\n\t<COND (<NOT <0? .PREP>>\n\t       <TELL \" \">\n\t       <SET WRD <PREP-FIND .PREP>>\n\t       <COND (<==? .WRD ,W?AGAINST> <TELL \"against\">)\n\t\t     (T <PRINTB .WRD>)>\n\t       <COND (<AND <==? ,W?SIT <GET <GET ,P-ITBL ,P-VERBN> 0>>\n\t\t\t   <==? ,W?DOWN .WRD>>\t;\"Will it ever work? --SWG\"\n\t\t      <TELL \" on\">)>)>>    "
  },
  "CLAUSE-COPY": {
   "name": "CLAUSE-COPY",
   "file": "parser.zil",
   "line": 749,
   "endLine": 770,
   "source": "<ROUTINE CLAUSE-COPY (BPTR EPTR \"OPTIONAL\" (INSERT <>) \"AUX\" BEG END) \n\t#DECL ((BPTR EPTR) FIX (BEG END) <PRIMTYPE VECTOR>\n\t       (INSERT) <OR FALSE TABLE>)\n\t<SET BEG <GET ,P-CCSRC .BPTR>>\n\t<SET END <GET ,P-CCSRC .EPTR>>\n\t<PUT ,P-OTBL\n\t     .BPTR\n\t     <REST ,P-OCLAUSE\n\t\t   <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN> 2>>>\n\t<REPEAT ()\n\t\t<COND (<==? .BEG .END>\n\t\t       <PUT ,P-OTBL\n\t\t\t    .EPTR\n\t\t\t    <REST ,P-OCLAUSE\n\t\t\t\t  <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN>\n\t\t\t\t     2>>>\n\t\t       <RETURN>)\n\t\t      (T\n\t\t       <COND (<AND .INSERT <==? ,P-ANAM <GET .BEG 0>>>\n\t\t\t      <CLAUSE-ADD .INSERT>)>\n\t\t       <CLAUSE-ADD <GET .BEG 0>>)>\n\t\t<SET BEG <REST .BEG ,P-WORDLEN>>>>  "
  },
  "CLAUSE-ADD": {
   "name": "CLAUSE-ADD",
   "file": "parser.zil",
   "line": 772,
   "endLine": 777,
   "source": "<ROUTINE CLAUSE-ADD (WRD \"AUX\" PTR) \n\t#DECL ((WRD) TABLE (PTR) FIX)\n\t<SET PTR <+ <GET ,P-OCLAUSE ,P-MATCHLEN> 2>>\n\t<PUT ,P-OCLAUSE <- .PTR 1> .WRD>\n\t<PUT ,P-OCLAUSE .PTR 0>\n\t<PUT ,P-OCLAUSE ,P-MATCHLEN .PTR>>   "
  },
  "PREP-FIND": {
   "name": "PREP-FIND",
   "file": "parser.zil",
   "line": 779,
   "endLine": 785,
   "source": "<ROUTINE PREP-FIND (PREP \"AUX\" (CNT 0) SIZE) \n\t#DECL ((PREP CNT SIZE) FIX)\n\t<SET SIZE <* <GET ,PREPOSITIONS 0> 2>>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT .SIZE> <RFALSE>)\n\t\t      (<==? <GET ,PREPOSITIONS .CNT> .PREP>\n\t\t       <RETURN <GET ,PREPOSITIONS <- .CNT 1>>>)>>>  "
  },
  "SYNTAX-FOUND": {
   "name": "SYNTAX-FOUND",
   "file": "parser.zil",
   "line": 787,
   "endLine": 790,
   "source": "<ROUTINE SYNTAX-FOUND (SYN) \n\t#DECL ((SYN) <PRIMTYPE VECTOR>)\n\t<SETG P-SYNTAX .SYN>\n\t<SETG PRSA <GETB .SYN ,P-SACTION>>>   "
  },
  "GWIM": {
   "name": "GWIM",
   "file": "parser.zil",
   "line": 794,
   "endLine": 820,
   "source": "<ROUTINE GWIM (GBIT LBIT PREP \"AUX\" OBJ) \n\t#DECL ((GBIT LBIT) FIX (OBJ) OBJECT)\n\t<COND (<==? .GBIT ,RMUNGBIT>\n\t       <RETURN ,ROOMS>)>\n\t<SETG P-GWIMBIT .GBIT>\n\t<SETG P-SLOCBITS .LBIT>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<COND (<GET-OBJECT ,P-MERGE <>>\n\t       <SETG P-GWIMBIT 0>\n\t       <COND (<==? <GET ,P-MERGE ,P-MATCHLEN> 1>\n\t\t      <SET OBJ <GET ,P-MERGE 1>>\n\t\t      <TELL \"(\">\n\t\t      <COND (<NOT <0? .PREP>>\n\t\t\t     <PRINTB <PREP-FIND .PREP>>\n\t\t\t     <THE? .OBJ>\n\t\t\t     <TELL \" \">\n\t\t\t     ;<COND (<NOT <FSET? .OBJ ,PERSON>>\n\t\t\t\t    <TELL \" the \">)\n\t\t\t\t   (T <TELL \" \">)>)>\n\t\t      <COND (<AND <FSET? .OBJ ,PERSON>\n\t\t\t\t  <NOT <FSET? .OBJ ,TOUCHBIT>>\n\t\t\t\t  ;<GETP .OBJ ,P?DESCFCN>\n\t\t\t\t  <GETP .OBJ ,P?XDESC>>\n\t\t\t     <TELL \"the \" <GETP .OBJ ,P?XDESC> \")\" CR>)\n\t\t\t    (T <TELL D .OBJ \")\" CR>)>\n\t\t      .OBJ)>)\n\t      (T <SETG P-GWIMBIT 0> <RFALSE>)>>   "
  },
  "SNARF-OBJECTS": {
   "name": "SNARF-OBJECTS",
   "file": "parser.zil",
   "line": 822,
   "endLine": 836,
   "source": "<ROUTINE SNARF-OBJECTS (\"AUX\" PTR) \n\t#DECL ((PTR) <OR FIX <PRIMTYPE VECTOR>>)\n\t<COND (<NOT <==? <SET PTR <GET ,P-ITBL ,P-NC1>> 0>>\n\t       <SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC1>>\n\t       <OR <SNARFEM .PTR <GET ,P-ITBL ,P-NC1L> ,P-PRSO> <RFALSE>>\n\t       <OR <0? <GET ,P-BUTS ,P-MATCHLEN>>\n\t\t   <SETG P-PRSO <BUT-MERGE ,P-PRSO>>>)>\n\t<COND (<NOT <==? <SET PTR <GET ,P-ITBL ,P-NC2>> 0>>\n\t       <SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC2>>\n\t       <OR <SNARFEM .PTR <GET ,P-ITBL ,P-NC2L> ,P-PRSI> <RFALSE>>\n\t       <COND (<NOT <0? <GET ,P-BUTS ,P-MATCHLEN>>>\n\t\t      <COND (<==? <GET ,P-PRSI ,P-MATCHLEN> 1>\n\t\t\t     <SETG P-PRSO <BUT-MERGE ,P-PRSO>>)\n\t\t\t    (T <SETG P-PRSI <BUT-MERGE ,P-PRSI>>)>)>)>\n\t<RTRUE>>  "
  },
  "BUT-MERGE": {
   "name": "BUT-MERGE",
   "file": "parser.zil",
   "line": 838,
   "endLine": 852,
   "source": "<ROUTINE BUT-MERGE (TBL \"AUX\" LEN BUTLEN (CNT 1) (MATCHES 0) OBJ NTBL) \n\t#DECL ((TBL NTBL) TABLE (LEN BUTLEN MATCHES) FIX (OBJ) OBJECT)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<REPEAT ()\n\t\t<COND (<DLESS? LEN 0> <RETURN>)\n\t\t      (<ZMEMQ <SET OBJ <GET .TBL .CNT>> ,P-BUTS>)\n\t\t      (T\n\t\t       <PUT ,P-MERGE <+ .MATCHES 1> .OBJ>\n\t\t       <SET MATCHES <+ .MATCHES 1>>)>\n\t\t<SET CNT <+ .CNT 1>>>\n\t<PUT ,P-MERGE ,P-MATCHLEN .MATCHES>\n\t<SET NTBL ,P-MERGE>\n\t<SETG P-MERGE .TBL>\n\t.NTBL>    "
  },
  "SNARFEM": {
   "name": "SNARFEM",
   "file": "parser.zil",
   "line": 889,
   "endLine": 937,
   "source": "<ROUTINE SNARFEM (PTR EPTR TBL \"AUX\" (AND <>) (BUT <>) LEN WV WRD NW) \n   #DECL ((TBL) TABLE (PTR EPTR) <PRIMTYPE VECTOR> (AND) <OR ATOM FALSE>\n\t  (BUT) <OR FALSE TABLE> (WV) <OR FALSE FIX>)\n   <SETG P-GETFLAGS 0>\n   <SETG P-CSPTR .PTR>\n   <SETG P-CEPTR .EPTR>\n   <PUT ,P-BUTS ,P-MATCHLEN 0>\n   <PUT .TBL ,P-MATCHLEN 0>\n   <SET WRD <GET .PTR 0>>\n   <REPEAT ()\n\t   <COND (<==? .PTR .EPTR> <RETURN <GET-OBJECT <OR .BUT .TBL>>>)\n\t\t (T\n\t\t  <SET NW <GET .PTR ,P-LEXELEN>>\n\t\t  <COND ;(<==? .WRD ,W?ALL>\n\t\t\t <SETG P-GETFLAGS ,P-ALL>\n\t\t\t <COND (<==? .NW ,W?OF>\n\t\t\t\t<SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t(<EQUAL? .WRD ,W?BUT ,W?EXCEPT>\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t <SET BUT ,P-BUTS>\n\t\t\t <PUT .BUT ,P-MATCHLEN 0>)\n\t\t\t(<EQUAL? .WRD ,W?A ,W?ONE>\n\t\t\t <COND (<NOT ,P-ADJ>\n\t\t\t\t<SETG P-GETFLAGS ,P-ONE>\n\t\t\t\t<COND (<==? .NW ,W?OF>\n\t\t\t\t       <SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t       (T\n\t\t\t\t<SETG P-NAM ,P-ONEOBJ>\n\t\t\t\t<OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t\t<AND <0? .NW> <RTRUE>>)>)\n\t\t\t(<AND <EQUAL? .WRD ,W?AND ,W?COMMA>\n\t\t\t      <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t T)\n\t\t\t(<WT? .WRD ,PS?BUZZ-WORD>)\n\t\t\t(<EQUAL? .WRD ,W?AND ,W?COMMA>)\n\t\t\t(<==? .WRD ,W?OF>\n\t\t\t <COND (<0? ,P-GETFLAGS>\n\t\t\t\t<SETG P-GETFLAGS ,P-INHIBIT>)>)\n\t\t\t(<AND <SET WV <WT? .WRD ,PS?ADJECTIVE ,P1?ADJECTIVE>>\n\t\t\t      <NOT ,P-ADJ>>\n\t\t\t <SETG P-ADJ .WV>\n\t\t\t <SETG P-ADJN .WRD>)\n\t\t\t(<WT? .WRD ,PS?OBJECT ,P1?OBJECT>\n\t\t\t <SETG P-NAM .WRD>\n\t\t\t <SETG P-ONEOBJ .WRD>)>)>\n\t   <COND (<NOT <==? .PTR .EPTR>>\n\t\t  <SET PTR <REST .PTR ,P-WORDLEN>>\n\t\t  <SET WRD .NW>)>>>   "
  },
  "GET-OBJECT": {
   "name": "GET-OBJECT",
   "file": "parser.zil",
   "line": 953,
   "endLine": 1058,
   "source": "<ROUTINE GET-OBJECT (TBL\n\t\t    \"OPTIONAL\" (VRB T)\n\t\t    \"AUX\" BITS LEN XBITS TLEN (GCHECK <>) (OLEN 0) OBJ)\n\t#DECL ((TBL) TABLE (XBITS BITS TLEN LEN) FIX (GWIM) <OR FALSE FIX>\n\t       (VRB GCHECK) <OR ATOM FALSE>)\n <SET XBITS ,P-SLOCBITS>\n <SET TLEN <GET .TBL ,P-MATCHLEN>>\n <COND (<BTST ,P-GETFLAGS ,P-INHIBIT> <RTRUE>)>\n <COND (<AND <NOT ,P-NAM> ,P-ADJ <WT? ,P-ADJN ,PS?OBJECT ,P1?OBJECT>>\n\t<SETG P-NAM ,P-ADJN>\n\t<SETG P-ADJ <>>)>\n <COND (<AND <NOT ,P-NAM>\n\t     <NOT ,P-ADJ>\n\t     <NOT <==? ,P-GETFLAGS ,P-ALL>>\n\t     <0? ,P-GWIMBIT>>\n\t<COND (.VRB\n\t       <TELL \"(I couldn't find enough nouns in that sentence!)\" CR>)>\n\t<RFALSE>)>\n <COND (<OR <NOT <==? ,P-GETFLAGS ,P-ALL>> <0? ,P-SLOCBITS>>\n\t<SETG P-SLOCBITS -1>)>\n <SETG P-TABLE .TBL>\n <PROG ()\n  <COND (.GCHECK <GLOBAL-CHECK .TBL>)\n\t(T\n\t <COND (,LIT\n\t\t<FCLEAR ,PLAYER ,TRANSBIT>\n\t\t<DO-SL ,HERE ,SOG ,SIR>\n\t\t<FSET ,PLAYER ,TRANSBIT>)>\n\t <DO-SL ,PLAYER ,SH ,SC>)>\n  <SET LEN <- <GET .TBL ,P-MATCHLEN> .TLEN>>\n  <COND (<BTST ,P-GETFLAGS ,P-ALL>)\n\t(<AND <BTST ,P-GETFLAGS ,P-ONE>\n\t      <NOT <0? .LEN>>>\n\t <COND (<NOT <==? .LEN 1>>\n\t\t<PUT .TBL 1 <GET .TBL <RANDOM .LEN>>>\n\t\t<TELL \"(How about the \">\n\t\t<PRINTD <GET .TBL 1>>\n\t\t<TELL \"?)\" CR>)>\n\t <PUT .TBL ,P-MATCHLEN 1>)\n\t(<OR <G? .LEN 1>\n\t     <AND <0? .LEN> <NOT <==? ,P-SLOCBITS -1>>>>\n\t <COND (<==? ,P-SLOCBITS -1>\n\t\t<SETG P-SLOCBITS .XBITS>\n\t\t<SET OLEN .LEN>\n\t\t<PUT .TBL ,P-MATCHLEN <- <GET .TBL ,P-MATCHLEN> .LEN>>\n\t\t<AGAIN>)\n\t       (T\n\t\t<COND (<0? .LEN> <SET LEN .OLEN>)>\n\t\t<COND (<AND ,P-NAM\n\t\t\t    <VERB? ASK-ABOUT ASK-CONTEXT-ABOUT TELL-ME WHAT\n\t\t\t\t   GIVE SGIVE ASK-FOR ASK-CONTEXT-FOR TAKE\n\t\t\t\t   FIND SEARCH SEARCH-OBJECT-FOR\n\t\t\t\t   MAKE DISEMBARK>\n\t\t\t    <SET OBJ <GET .TBL <+ .TLEN 1>>>\n\t\t\t    <SET OBJ <APPLY <GETP .OBJ ,P?GENERIC> .OBJ>>>\n\t\t       <COND (<==? .OBJ ,NOT-HERE-OBJECT> <RFALSE>)>\n\t\t       <PUT .TBL 1 .OBJ>\n\t\t       <PUT .TBL ,P-MATCHLEN 1>\n\t\t       <SETG P-NAM <>>\n\t\t       <SETG P-ADJ <>>\n\t\t       <RTRUE>)\n\t\t      (<AND .VRB ,P-NAM>\n\t\t       <WHICH-PRINT .TLEN .LEN .TBL>\n\t\t       <SETG P-ACLAUSE\n\t\t\t     <COND (<==? .TBL ,P-PRSO> ,P-NC1)\n\t\t\t\t   (T ,P-NC2)>>\n\t\t       <SETG P-AADJ ,P-ADJ>\n\t\t       <SETG P-ANAM ,P-NAM>\n\t\t       <ORPHAN <> <>>\n\t\t       <SETG P-OFLAG T>)\n\t\t      (.VRB\n\t\t       <TELL\n\"(I couldn't find enough nouns in that sentence!)\"\n;\"(That sentence seemed to be missing a noun!)\" CR>)>\n\t\t<SETG P-NAM <>>\n\t\t<SETG P-ADJ <>>\n\t\t<RFALSE>)>)\n\t(<AND <0? .LEN> .GCHECK>\n\t <COND (.VRB\n\t\t<SETG P-SLOCBITS .XBITS>\n\t\t<COND (,LIT\n\t\t       ;\"Changed 6/10/83 - MARC\"\n\t\t       <OBJ-FOUND ,NOT-HERE-OBJECT .TBL>\n\t\t       ;<PUT .TBL ,P-MATCHLEN 1>\n\t\t       ;<PUT .TBL 1 ,NOT-HERE-OBJECT>\n\t\t       <SETG P-XNAM ,P-NAM>\n\t\t       <SETG P-XADJ ,P-ADJ>\n\t\t       <SETG P-XADJN ,P-ADJN>\n\t\t       <SETG P-NAM <>>\n\t\t       <SETG P-ADJ <>>\n\t\t       <SETG P-ADJN <>>\n\t\t       <RTRUE>)\n\t\t      (T <TELL \"(It's too dark to see!)\" CR>)>)>\n\t <SETG P-NAM <>>\n\t <SETG P-ADJ <>>\n\t <RFALSE>)\n\t(<0? .LEN> <SET GCHECK T> <AGAIN>)>\n  <COND (<AND ,P-ADJ <NOT ,P-NAM>>\n\t <TELL \"(I assume you mean\">\n\t <SET OBJ <GET .TBL <+ .TLEN 1>>>\n\t <THE? .OBJ>\n\t <TELL \" \" D .OBJ \".)\" CR>)>\n  <SETG P-SLOCBITS .XBITS>\n  <SETG P-NAM <>>\n  <SETG P-ADJ <>>\n  <RTRUE>>>"
  },
  "MOBY-FIND": {
   "name": "MOBY-FIND",
   "file": "parser.zil",
   "line": 1060,
   "endLine": 1077,
   "source": "<ROUTINE MOBY-FIND (TBL \"AUX\" FOO LEN)\n\t <SETG P-SLOCBITS -1>\n\t <SETG P-NAM ,P-XNAM>\n\t <SETG P-ADJ ,P-XADJ>\n\t <PUT .TBL ,P-MATCHLEN 0>\n\t <SET FOO <FIRST? ,ROOMS>>\n\t <REPEAT ()\n\t\t <COND (<NOT .FOO> <RETURN>)\n\t\t       (T\n\t\t\t<SEARCH-LIST .FOO .TBL ,P-SRCALL>\n\t\t\t<SET FOO <NEXT? .FOO>>)>>\n\t <COND (<EQUAL? <SET LEN <GET .TBL ,P-MATCHLEN>> 0>\n\t\t<DO-SL ,LOCAL-GLOBALS 1 1>)>\n\t <COND (<EQUAL? <SET LEN <GET .TBL ,P-MATCHLEN>> 0>\n\t\t<DO-SL ,ROOMS 1 1>)>\n\t <COND (<EQUAL? <SET LEN <GET .TBL ,P-MATCHLEN>> 1>\n\t\t<SETG P-MOBY-FOUND <GET .TBL 1>>)>\n\t .LEN>"
  },
  "WHICH-PRINT": {
   "name": "WHICH-PRINT",
   "file": "parser.zil",
   "line": 1081,
   "endLine": 1101,
   "source": "<ROUTINE WHICH-PRINT (TLEN LEN TBL \"AUX\" OBJ RLEN)\n\t <SET RLEN .LEN>\n\t <TELL \"(Which\">\n         <COND (<OR ,P-OFLAG ,P-MERGED> <TELL \" \"> <PRINTB ,P-NAM>)\n\t       (<==? .TBL ,P-PRSO>\n\t\t<CLAUSE-PRINT ,P-NC1 ,P-NC1L <>>)\n\t       (T <CLAUSE-PRINT ,P-NC2 ,P-NC2L <>>)>\n\t <TELL \" do you mean,\">\n\t <REPEAT ()\n\t\t <SET TLEN <+ .TLEN 1>>\n\t\t <SET OBJ <GET .TBL .TLEN>>\n\t\t <THE? .OBJ>\n\t\t ;<COND (<NOT <FSET? .OBJ ,PERSON>> <TELL \" the\">)>\n\t\t <TELL \" \" D .OBJ>\n\t\t <COND (<==? .LEN 2>\n\t\t        <COND (<NOT <==? .RLEN 2>> <TELL \",\">)>\n\t\t        <TELL \" or\">)\n\t\t       (<G? .LEN 2> <TELL \",\">)>\n\t\t <COND (<L? <SET LEN <- .LEN 1>> 1>\n\t\t        <TELL \"?)\" CR>\n\t\t        <RETURN>)>>>"
  },
  "GLOBAL-CHECK": {
   "name": "GLOBAL-CHECK",
   "file": "parser.zil",
   "line": 1104,
   "endLine": 1137,
   "source": "<ROUTINE GLOBAL-CHECK (TBL \"AUX\" LEN RMG RMGL (CNT 0) OBJ OBITS FOO) \n\t#DECL ((TBL) TABLE (RMG) <OR FALSE TABLE> (RMGL CNT) FIX (OBJ) OBJECT)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<SET OBITS ,P-SLOCBITS>\n\t<COND (<SET RMG <GETPT ,HERE ,P?GLOBAL>>\n\t       <SET RMGL <- <PTSIZE .RMG> 1>>\n\t       <REPEAT ()\n\t\t       <COND (<THIS-IT? <SET OBJ <GETB .RMG .CNT>> .TBL>\n\t\t\t      <OBJ-FOUND .OBJ .TBL>)>\n\t\t       <COND (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<SET RMG <GETPT ,HERE ,P?PSEUDO>>\n\t       <SET RMGL <- </ <PTSIZE .RMG> 4> 1>>\n\t       <SET CNT 0>\n\t       <REPEAT ()\n\t\t       <COND (<==? ,P-NAM <GET .RMG <* .CNT 2>>>\n\t\t\t      <PUTP ,PSEUDO-OBJECT\n\t\t\t\t    ,P?ACTION\n\t\t\t\t    <GET .RMG <+ <* .CNT 2> 1>>>\n\t\t\t      <SET FOO\n\t\t\t\t   <BACK <GETPT ,PSEUDO-OBJECT ,P?ACTION> 5>>\n\t\t\t      <PUT .FOO 0 <GET ,P-NAM 0>>\n\t\t\t      <PUT .FOO 1 <GET ,P-NAM 1>>\n\t\t\t      <OBJ-FOUND ,PSEUDO-OBJECT .TBL>\n\t\t\t      <RETURN>)\n\t\t             (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<==? <GET .TBL ,P-MATCHLEN> .LEN>\n\t       <SETG P-SLOCBITS -1>\n\t       <SETG P-TABLE .TBL>\n\t       <DO-SL ,GLOBAL-OBJECTS 1 1>\n\t       <SETG P-SLOCBITS .OBITS>\n\t       <COND (<0? <GET .TBL ,P-MATCHLEN>>\n\t\t      <COND (<VERB? EXAMINE FIND FOLLOW DROP LOOK-INSIDE\n\t\t\t\t    SEARCH SEARCH-OBJECT-FOR THROUGH WALK-TO>\n\t\t\t     <DO-SL ,ROOMS 1 1>)>)>)>>"
  },
  "DO-SL": {
   "name": "DO-SL",
   "file": "parser.zil",
   "line": 1139,
   "endLine": 1148,
   "source": "<ROUTINE DO-SL (OBJ BIT1 BIT2 \"AUX\" BITS) \n\t#DECL ((OBJ) OBJECT (BIT1 BIT2 BITS) FIX)\n\t<COND (<BTST ,P-SLOCBITS <+ .BIT1 .BIT2>>\n\t       <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCALL>)\n\t      (T\n\t       <COND (<BTST ,P-SLOCBITS .BIT1>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCTOP>)\n\t\t     (<BTST ,P-SLOCBITS .BIT2>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCBOT>)\n\t\t     (T <RTRUE>)>)>>  "
  },
  "SEARCH-LIST": {
   "name": "SEARCH-LIST",
   "file": "parser.zil",
   "line": 1156,
   "endLine": 1176,
   "source": "<ROUTINE SEARCH-LIST (OBJ TBL LVL \"AUX\" FLS ;NOBJ) \n\t#DECL ((OBJ ;NOBJ) <OR FALSE OBJECT> (TBL) TABLE (LVL) FIX (FLS) ANY)\n <COND (<SET OBJ <FIRST? .OBJ>>\n\t<REPEAT ()\n\t\t<COND (<AND <NOT <==? .LVL ,P-SRCBOT>>\n\t\t\t    <GETPT .OBJ ,P?SYNONYM>\n\t\t\t    <THIS-IT? .OBJ .TBL>>\n\t\t       <OBJ-FOUND .OBJ .TBL>)>\n\t\t<COND (<AND <OR <NOT <==? .LVL ,P-SRCTOP>>\n\t\t\t\t<FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t<FSET? .OBJ ,SURFACEBIT>>\n\t\t\t    <FIRST? .OBJ> ;<SET NOBJ <FIRST? .OBJ>>\n\t\t\t    <NOT <EQUAL? .OBJ ,PLAYER ,LOCAL-GLOBALS>>\n\t\t\t    ;<OR <FSET? .OBJ ,OPENBIT>\n\t\t\t\t <FSET? .OBJ ,TRANSBIT>>>\n\t\t       <SET FLS\n\t\t        <SEARCH-LIST .OBJ .TBL\n\t\t\t\t    <COND (<FSET? .OBJ ,SURFACEBIT> ,P-SRCALL)\n\t\t\t\t\t  (<FSET? .OBJ ,SEARCHBIT> ,P-SRCALL)\n\t\t\t\t\t  (T ,P-SRCTOP)>>>)>\n\t\t<COND (<SET OBJ <NEXT? .OBJ>>) (T <RETURN>)>>)>>"
  },
  "THIS-IT?": {
   "name": "THIS-IT?",
   "file": "parser.zil",
   "line": 1178,
   "endLine": 1191,
   "source": "<ROUTINE THIS-IT? (OBJ TBL \"AUX\" SYNS) \n <COND (<FSET? .OBJ ,INVISIBLE> <RFALSE>)\n       (<AND ,P-NAM\n\t     <NOT <ZMEMQ ,P-NAM\n\t\t\t <SET SYNS <GETPT .OBJ ,P?SYNONYM>>\n\t\t\t <- </ <PTSIZE .SYNS> 2> 1>>>>\n\t<RFALSE>)\n       (<AND ,P-ADJ\n\t     <OR <NOT <SET SYNS <GETPT .OBJ ,P?ADJECTIVE>>>\n\t\t <NOT <ZMEMQB ,P-ADJ .SYNS <- <PTSIZE .SYNS> 1>>>>>\n\t<RFALSE>)\n       (<AND <NOT <0? ,P-GWIMBIT>> <NOT <FSET? .OBJ ,P-GWIMBIT>>>\n\t<RFALSE>)>\n <RTRUE>> "
  },
  "OBJ-FOUND": {
   "name": "OBJ-FOUND",
   "file": "parser.zil",
   "line": 1193,
   "endLine": 1197,
   "source": "<ROUTINE OBJ-FOUND (OBJ TBL \"AUX\" PTR) \n\t#DECL ((OBJ) OBJECT (TBL) TABLE (PTR) FIX)\n\t<SET PTR <GET .TBL ,P-MATCHLEN>>\n\t<PUT .TBL <+ .PTR 1> .OBJ>\n\t<PUT .TBL ,P-MATCHLEN <+ .PTR 1>>> "
  },
  "TAKE-CHECK": {
   "name": "TAKE-CHECK",
   "file": "parser.zil",
   "line": 1199,
   "endLine": 1201,
   "source": "<ROUTINE TAKE-CHECK () \n\t<AND <ITAKE-CHECK ,P-PRSO <GETB ,P-SYNTAX ,P-SLOC1>>\n\t     <ITAKE-CHECK ,P-PRSI <GETB ,P-SYNTAX ,P-SLOC2>>>> "
  },
  "ITAKE-CHECK": {
   "name": "ITAKE-CHECK",
   "file": "parser.zil",
   "line": 1203,
   "endLine": 1238,
   "source": "<ROUTINE ITAKE-CHECK (TBL BITS \"AUX\" PTR OBJ TAKEN) \n\t #DECL ((TBL) TABLE (BITS PTR) FIX (OBJ) OBJECT\n\t\t(TAKEN) <OR FALSE FIX ATOM>)\n\t <COND (<AND <SET PTR <GET .TBL ,P-MATCHLEN>>\n\t\t     <OR <BTST .BITS ,SHAVE>\n\t\t\t <BTST .BITS ,STAKE>>>\n\t\t<REPEAT ()\n\t\t\t<COND (<L? <SET PTR <- .PTR 1>> 0> <RETURN>)\n\t\t\t      (T\n\t\t\t       <SET OBJ <GET .TBL <+ .PTR 1>>>\n\t\t\t       <COND (<==? .OBJ ,IT> <SET OBJ ,P-IT-OBJECT>)\n\t\t\t\t     (<==? .OBJ ,HIM-HER>\n\t\t\t\t      <SET OBJ ,P-HIM-HER>)>\n\t\t\t       <COND (<NOT <HELD? .OBJ>>\n\t\t\t\t      <SETG PRSO .OBJ>\n\t\t\t\t      <COND (<FSET? .OBJ ,TRYTAKEBIT>\n\t\t\t\t\t     <SET TAKEN T>)\n\t\t\t\t\t    (<NOT <==? ,WINNER ,PLAYER>>\n\t\t\t\t\t     <SET TAKEN <>>)\n\t\t\t\t\t    (<AND <BTST .BITS ,STAKE>\n\t\t\t\t\t\t  <==? <ITAKE <>> T>>\n\t\t\t\t\t     <SET TAKEN <>>)\n\t\t\t\t\t    (T <SET TAKEN T>)>\n\t\t\t\t      <COND (<AND .TAKEN <BTST .BITS ,SHAVE>>\n\t\t\t\t\t     <TELL \"(You don't have\">\n\t\t\t\t\t     <COND (<EQUAL? .OBJ\n\t\t\t\t\t\t\t    ,NOT-HERE-OBJECT>\n\t\t\t\t\t\t    <TELL \" that!)\" CR>)\n\t\t\t\t\t\t   (T\n\t\t\t\t\t\t    <THE? .OBJ>\n\t\t\t\t\t\t    <TELL \" \" D .OBJ\"!)\"CR>)>\n\t\t\t\t\t     <RFALSE>)\n\t\t\t\t\t    (<AND <NOT .TAKEN>\n\t\t\t\t\t\t  <==? ,WINNER ,PLAYER>>\n\t\t\t\t\t     <TELL \"(taken)\" CR>)>)>)>>)\n\t       (T)>>"
  },
  "MANY-CHECK": {
   "name": "MANY-CHECK",
   "file": "parser.zil",
   "line": 1240,
   "endLine": 1260,
   "source": "<ROUTINE MANY-CHECK (\"AUX\" (LOSS <>) TMP) \n\t#DECL ((LOSS) <OR FALSE FIX>)\n\t<COND (<AND <G? <GET ,P-PRSO ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC1> ,SMANY>>>\n\t       <SET LOSS 1>)\n\t      (<AND <G? <GET ,P-PRSI ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC2> ,SMANY>>>\n\t       <SET LOSS 2>)>\n\t<COND (.LOSS\n\t       <TELL \"(You can't use multiple \">\n\t       <COND (<==? .LOSS 2> <TELL \"in\">)>\n\t       <TELL \"direct objects with \\\"\">\n\t       <SET TMP <GET ,P-ITBL ,P-VERBN>>\n\t       <COND (<0? .TMP> <TELL \"tell\">)\n\t\t     (,P-OFLAG\n\t\t      <PRINTB <GET .TMP 0>>)\n\t\t     (T\n\t\t      <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>)>\n\t       <TELL \"\\\"!)\" CR>\n\t       <RFALSE>)\n\t      (T)>>  "
  },
  "ZMEMQ": {
   "name": "ZMEMQ",
   "file": "parser.zil",
   "line": 1262,
   "endLine": 1268,
   "source": "<ROUTINE ZMEMQ (ITM TBL \"OPTIONAL\" (SIZE -1) \"AUX\" (CNT 1)) \n\t<COND (<NOT .TBL> <RFALSE>)>\n\t<COND (<NOT <L? .SIZE 0>> <SET CNT 0>)\n\t      (ELSE <SET SIZE <GET .TBL 0>>)>\n\t<REPEAT ()\n\t\t<COND (<==? .ITM <GET .TBL .CNT>> <RTRUE>)\n\t\t      (<IGRTR? CNT .SIZE> <RFALSE>)>>>    "
  },
  "ZMEMQB": {
   "name": "ZMEMQB",
   "file": "parser.zil",
   "line": 1270,
   "endLine": 1274,
   "source": "<ROUTINE ZMEMQB (ITM TBL SIZE \"AUX\" (CNT 0)) \n\t#DECL ((ITM) ANY (TBL) TABLE (SIZE CNT) FIX)\n\t<REPEAT ()\n\t\t<COND (<==? .ITM <GETB .TBL .CNT>> <RTRUE>)\n\t\t      (<IGRTR? CNT .SIZE> <RFALSE>)>>>  "
  },
  "PRSO-PRINT": {
   "name": "PRSO-PRINT",
   "file": "parser.zil",
   "line": 1303,
   "endLine": 1309,
   "source": "<ROUTINE PRSO-PRINT (\"AUX\" PTR)\n\t <COND (<OR <G? <GET ,P-PRSO ,P-MATCHLEN> 0>\n\t\t    ,P-MERGED\n\t\t    <==? <GET <SET PTR <GET ,P-ITBL ,P-NC1>> 0> ,W?IT>\n\t\t    ;<NOT <FSET? ,PRSO ,DUPLICATE>>>\n\t\t<TELL \" \" D ,PRSO>)\n\t       (T <BUFFER-PRINT .PTR <GET ,P-ITBL ,P-NC1L> <>>)>>"
  },
  "THE-PRSO-PRINT": {
   "name": "THE-PRSO-PRINT",
   "file": "parser.zil",
   "line": 1311,
   "endLine": 1311,
   "source": "<ROUTINE THE-PRSO-PRINT () <THE? ,PRSO> <TELL PRSO>>"
  },
  "PRSI-PRINT": {
   "name": "PRSI-PRINT",
   "file": "parser.zil",
   "line": 1313,
   "endLine": 1319,
   "source": "<ROUTINE PRSI-PRINT (\"AUX\" PTR)\n\t <COND (<OR <G? <GET ,P-PRSI ,P-MATCHLEN> 0>\n\t\t    ,P-MERGED\n\t\t    <==? <GET <SET PTR <GET ,P-ITBL ,P-NC2>> 0> ,W?IT>\n\t\t    ;<NOT <FSET? ,PRSI ,DUPLICATE>>>\n\t\t<TELL \" \" D ,PRSI>)\n\t       (T <BUFFER-PRINT .PTR <GET ,P-ITBL ,P-NC2L> <>>)>>"
  },
  "THE-PRSI-PRINT": {
   "name": "THE-PRSI-PRINT",
   "file": "parser.zil",
   "line": 1321,
   "endLine": 1321,
   "source": "<ROUTINE THE-PRSI-PRINT () <THE? ,PRSI> <TELL PRSI>>"
  },
  "YOU-F": {
   "name": "YOU-F",
   "file": "people.zil",
   "line": 22,
   "endLine": 28,
   "source": "<ROUTINE YOU-F ()\n <COND (<AND <VERB? ASK-ABOUT> <IOBJ? YOU>>\n\t<PERFORM ,V?ASK-ABOUT ,PRSO ,PRSO>\n\t<RTRUE>)\n       (<AND <VERB? TELL-ME> <IOBJ? YOU>>\n\t<PERFORM ,V?TELL-ME ,PRSO ,WINNER>\n\t<RTRUE>)>>"
  },
  "OBJECT-PAIR-F": {
   "name": "OBJECT-PAIR-F",
   "file": "people.zil",
   "line": 34,
   "endLine": 52,
   "source": "<ROUTINE OBJECT-PAIR-F (\"AUX\" P1 P2)\n <COND (<L? 2 <GET ,P-PRSO ,P-MATCHLEN>>\n\t<COND (<VERB? ARREST>\n\t       <TELL\n\"You think it over. You realize that this arrest is pretty far-fetched.\nIt could only mean humiliation for you.\" CR>)\n\t      (<VERB? COMPARE>\n\t       <TELL\n\"That's too many things to compare all at once!\" CR>)>\n\t<RTRUE>)\n       (<AND <VERB? ARREST> <NOT <FSET? ,CORPSE ,INVISIBLE>>>\n\t<COND (<IN? <SET P1 <1 ,P-PRSO>> ,GLOBAL-OBJECTS>\n\t       <SET P1 <GET ,CHARACTER-TABLE <GETP .P1 ,P?CHARACTER>>>)>\n\t<COND (<IN? <SET P2 <2 ,P-PRSO>> ,GLOBAL-OBJECTS>\n\t       <SET P2 <GET ,CHARACTER-TABLE <GETP .P2 ,P?CHARACTER>>>)>\n\t<ARREST .P1 .P2>)\n       (<VERB? COMPARE>\n\t<PERFORM ,PRSA <1 ,P-PRSO> <2 ,P-PRSO>>\n\t<RTRUE>)>>"
  },
  "PLAYER-F": {
   "name": "PLAYER-F",
   "file": "people.zil",
   "line": 83,
   "endLine": 118,
   "source": "<ROUTINE PLAYER-F ()\n <COND (<AND <VERB? SHOOT> <DOBJ? PLAYER>>\n\t<TELL\n\"What, and let down the Police Department track-and-field team?!\" CR>)\n       (<AND <NOT ,PLAYER-HIDING> <IN? <LOC ,PLAYER> ,ROOMS>>\n\t<RFALSE>)\n       (<NOT ,PRSO>\n\t<RFALSE>)\n       (<VERB? WALK>\n\t<TOO-BAD-SIT-HIDE>)\n       (<AND ,PLAYER-HIDING\n\t     <VERB? $CALL TELL HELLO GOODBYE ASK-ABOUT ASK-FOR>>\n\t<TOO-BAD-SIT-HIDE>)\n       (<NOT <STANDING-VERB?>>\n\t<RFALSE>)\n       (<NOT <IN? ,PRSO ,WINNER>>\n\t<COND (<AND <VERB? EXAMINE>\n\t\t    <NOT <==? ,P-ADVERB ,W?CAREFULLY>>\n\t\t    <OR ;<FSET? ,PRSO ,PERSON>\n\t\t\t<DOBJ? CLOCK>\n\t\t\t<==? ,OFFICE <LOC ,PRSO>>>>\n\t       <TELL\n\"You'd do a much better job if you stood up, but let's see...\" CR>\n\t       <RFALSE>)\n\t      (<AND <IN? ,PLAYER ,CARVED-CHAIR>\n\t\t    <VERB? FIND PUSH RING>\n\t\t    <DOBJ? BUTTON OFFICE-BUTTON>>\n\t       <RFALSE>)\n\t      (<AND <VERB? TAKE> <DOBJ? HINT>>\n\t       <RFALSE>)\n\t      (T\n\t       <TOO-BAD-SIT-HIDE>)>)\n       (<NOT ,PRSI>\t\t\t<RFALSE>)\n       (<IN? ,PRSI ,WINNER>\t\t<RFALSE>)\n       (T\n\t<TOO-BAD-SIT-HIDE>)>>"
  },
  "STANDING-VERB?": {
   "name": "STANDING-VERB?",
   "file": "people.zil",
   "line": 120,
   "endLine": 130,
   "source": "<ROUTINE STANDING-VERB? ()\n <COND (<VERB? ATTACK BRUSH ;BURN CLOSE DRINK EAT ENTER EXAMINE\n\t       FINGERPRINT FOLLOW HANDCUFF HIDE-BEHIND\n\t       KICK KILL KISS KNOCK LOCK\n\t       LOOK-BEHIND LOOK-INSIDE LOOK-OUTSIDE LOOK-UNDER MAKE MOVE\n\t       MUNG OPEN PHONE PICK ;PLAY PUSH PUT PUT-UNDER\n\t       RAISE RAPE READ REVIVE RING RUB RUB-OVER\n\t       SEARCH SEARCH-OBJECT-FOR SIT SLAP SMELL\n\t       TAKE TAKEOUT THROUGH TIE-TO TIE-WITH\n\t       UNLOCK UNTIE USE WALK WALK-AROUND WALK-TO>\n\tT)>>"
  },
  "TOO-BAD-SIT-HIDE": {
   "name": "TOO-BAD-SIT-HIDE",
   "file": "people.zil",
   "line": 132,
   "endLine": 141,
   "source": "<ROUTINE TOO-BAD-SIT-HIDE ()\n <SETG P-CONT <>>\n <COND (<NOT <IN? <LOC ,PLAYER> ,ROOMS>>\n\t<COND (<VERB? SIT> <TELL \"You're already sitting down.\" CR>)\n\t      (T <TELL\n\"You'd do a much better job if you stood up.\" CR>)>)\n       (,PLAYER-HIDING\n\t<COND (<VERB? HIDE-BEHIND> <TELL \"You're already hiding.\"CR>)\n\t      (T <TELL\n\"You can't do that while you're hiding.\" CR>)>)>>"
  },
  "PHONG-F": {
   "name": "PHONG-F",
   "file": "people.zil",
   "line": 182,
   "endLine": 475,
   "source": "<ROUTINE PHONG-F (\"OPTIONAL\" (ARG <>) \"AUX\" OBJ (L <LOC ,PHONG>))\n <COND (<==? .ARG ,M-OBJDESC>\n\t<COND (<IN-MOTION? ,PHONG> <RTRUE>)\n\t      (<FSET? ,PHONG ,TOUCHBIT>\n\t       <COND (<AND <NOT <FSET? ,LINDER ,TOUCHBIT>>\n\t\t\t   <==? ,HERE <LOC ,LINDER>>>\n\t\t      <TELL CR\n\"\\\"Excuse me, sir,\\\" says Phong, \\\"but the detective has arrived.\\\"\" CR CR>)\n\t\t     (<==? .L ,BUTLER-ROOM>\n\t\t      <TELL \"Phong is lying on the bed, \">\n\t\t      <COND (<IN? ,RECURSIVE-BOOK ,PHONG>\n\t\t\t     <TELL \"reading a book.\" CR>)\n\t\t\t    (T <TELL \"meditating.\" CR>)>)\n\t\t     (<AND <==? .L ,KITCHEN> <L? ,PRESENT-TIME 710>>\n\t\t      <TELL \"Phong is here, \"\n\t\t\t    <GET ,KITCHEN-ACTIVITIES\n\t\t\t\t <+ 1 </ <- ,PRESENT-TIME 480> 60>>> \".\" CR>)\n\t\t     (<AND <==? .L ,OFFICE> <IN? ,CORPSE ,OFFICE>\n\t\t\t   ,PHONG-SEEN-CORPSE?>\n\t\t      <TELL \"Phong is gazing out the window.\" CR>)\n\t\t     (<==? .L ,ENTRY>\n\t\t      <TELL \"Phong is waiting for you to do something.\" CR>)\n\t\t     (T <TELL \"Phong is here, \"\n\t\t\t\t<PICK-ONE ,PHONG-HERE> \".\" CR>)>)\n\t      (T\n\t       <FSET ,PHONG ,TOUCHBIT>\n\t       <TELL <GETP ,PHONG ,P?TEXT> CR>)>\n\t<RTRUE>)\n       (<==? ,WINNER ,PHONG>\n\t<COND (<AND <VERB? FIND>\n\t\t    <DOBJ? PHONG-KEYS>>\n\t       <SETG WINNER ,PLAYER>\n\t       <PERFORM ,V?ASK-ABOUT ,PHONG ,PRSO>\n\t       <RTRUE>)\n\t      (<VERB? FIND THANKS> <RFALSE>)\n\t      (<VERB? SLAP>\n\t       <TELL \"\\\"No, I must be careful about that.\\\"\" CR>)\n\t      (<OR <AND <VERB? GIVE>\n\t\t       <DOBJ? PHONG-KEYS GENERIC-KEY GENERIC-GUN OUTSIDE-GUN>>\n\t\t   <AND <VERB? SGIVE>\n\t\t      <IOBJ? PHONG-KEYS GENERIC-KEY GENERIC-GUN OUTSIDE-GUN>>>\n\t       <TAKE-PHONG-KEYS>)\n\t      (<VERB? OPEN CLOSE LOCK UNLOCK>\n\t       <COND (<FSET? ,CORPSE ,INVISIBLE>\n\t\t      <TELL\n\"\\\"You'll have to ask Mr. Linder about that.\\\"\"CR>)\n\t\t     (<DOBJ? CLOCK ;GLOBAL-CLOCK>\n\t\t      <TELL \"\\\"I don't have the key for the clock.\\\"\" CR>)\n\t\t     (<AND <VERB? OPEN UNLOCK> <IN? ,PHONG-KEYS ,PHONG>>\n\t\t      <FCLEAR ,PRSO ,LOCKED>\n\t\t      <COND (<VERB? OPEN> <FSET ,PRSO ,OPENBIT>)>\n\t\t      <TELL \"\\\"Okey.\\\"\" CR>)\n\t\t     (<AND <VERB? CLOSE LOCK> <IN? ,PHONG-KEYS ,PHONG>>\n\t\t      <FCLEAR ,PRSO ,OPENBIT>\n\t\t      <COND (<VERB? LOCK> <FSET ,PRSO ,LOCKED>)>\n\t\t      <TELL \"\\\"Okey.\\\"\" CR>)>)\n\t      (<COM-CHECK ,PHONG> <RTRUE>)\n\t      (T <TELL <PICK-ONE ,WHY-ME> CR>)>)\n       (<VERB? ACCUSE>\n\t<COND (<NOT ,PHONG-SEEN-CORPSE?>\n\t       <TELL\n\"\\\"What are you talking about?\\\" He looks frightened.\" CR>)\n\t      (<AND ,SIDE-FOOTPRINTS-MATCHED <FSET? ,GUN-RECEIPT ,TOUCHBIT>>\n\t       <SETG PHONG-ADMITTED-HELPING? T>\n\t       <DISCRETION ,PHONG ,MONICA>\n\t       <TELL\n\"\\\"It's true I helped set you up for deception with the guns. But only\nbecause Mr. Linder asked me to! He said he wanted to frighten Stiles.\nHe wasn't supposed to be killed! Monica must have muffed it. Or else ...\ncould she ...?\\\" He looks confused and angry.\" CR>)\n\t      (,SIDE-FOOTPRINTS-MATCHED\n\t       <TELL\n\"\\\"I don't see why you're accusing me!\" \" Sure, I was in the yard, because \"\n\"I thought I heard a\nnoise outside and went out to investigate.\"\n\" It's part of my job, you know.\\\"\"\nCR>)\n\t      (<FSET? ,GUN-RECEIPT ,TOUCHBIT>\n\t       <DISCRETION ,PHONG ,MONICA>\n\t       <TELL\n\"\\\"I don't see why you're accusing me!\" \" You should ask Monica about those\nguns.\\\"\" CR>)\n\t      (T <TELL \"\\\"You haven't a clue, and you know it!\\\"\" CR>)>)\n       (<OR <AND ,PRSI <SET OBJ ,PRSI><VERB? ASK-ABOUT CONFRONT><DOBJ? PHONG>>\n\t    <AND ,PRSO <IN? ,PRSO ,GLOBAL-OBJECTS> <SET OBJ ,PRSO>\n\t\t <VERB? FIND WHAT>>>\n\t<COND (<NOT <GRAB-ATTENTION ,PHONG>> <RTRUE>)>\n\t<SAID-TO ,PHONG>\n\t<COND (<EQUAL? .OBJ ,BUTTON>\n\t       <TELL \"\\\"That's my butler's button, of course.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GLOBAL-CAN-OF-WORMS>\n\t       <TELL\n\"\\\"I didn't think you had any interest in gardening! Those little babies\nare the best thing for the clay soil around here. You can just order\nthem by mail and open them up when they arrive.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GENERIC-GUN>\n\t       <TELL \"\\\"I don't have one, if that's what you mean.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,BLACK-WIRE>\n\t       <TELL\n\"\\\"Oh, Monica wired the house for butler's buttons.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,WHITE-WIRE>\n\t       <TELL\n\"\\\"Oh, Monica wired the windows with burglar alarms.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GENERIC-GREEN-WIRE ,GENERIC-WIRE>\n\t       <TELL\n\"\\\"There's wire all over the house. You'll have to ask Monica.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GENERIC-KEY ,PHONG-KEYS>\n\t       <COND (<IN? ,PHONG-KEYS ,PHONG>\n\t\t      <TELL\n\"\\\"I have the keys for all the doors in the house.\\\"\" CR>)\n\t\t     (T\n\t\t      <TELL\n\"\\\"Don't you remember? I gave you all the keys I have.\\\"\" CR>)>)\n\t      (<EQUAL? .OBJ ,CLOCK-KEY>\n\t       <COND (<IN? ,CLOCK-KEY ,PLAYER>\n\t\t      <TELL\n\"\\\"That looks like the key to Mr. Linder's clock.\\\"\" CR>)\n\t\t     (T <TELL\n\"\\\"There's only one key to Mr. Linder's clock. I think he keeps it in\nthe office somewhere.\\\"\" CR>)>)\n\t      (<EQUAL? .OBJ ,GLOBAL-LINDER ,LINDER ,CORPSE>\n\t       <COND (<IN? ,LINDER ,HERE>\n\t\t      <TELL\n\"\\\"That man is a marvel. Always seems to have several deals going at\nonce. I don't know how he does it.\\\" Linder beams with self-pride.\" CR>)\n\t\t     (,PHONG-SEEN-CORPSE?\n\t\t      <SETG PHONG-HAS-MOTIVE ,CORPSE>\n\t\t      <DISCRETION ,PHONG ,MONICA>\n\t\t      <TELL\n\"\\\"Frankly, Detective, I can't say I\" \"'m sorry he's dead\"\n\". He always promised me wealth here in America, but I've never seen it.\nI could \" \"have managed\" \" the\nAsian branch of his business if he'd let me. If I had any money, I'd quit\non the spot and return home.\\\"\" CR>)\n\t\t     (T\n\t\t      <SETG PHONG-HAS-MOTIVE ,LINDER>\n\t\t      <DISCRETION ,PHONG ,MONICA>\n\t\t      <TELL\n\"\\\"Frankly, Detective, I can't say I\" \" like him much\"\n\". He always promised me wealth here in America, but I've never seen it.\nI could \" \"manage\" \" the\nAsian branch of his business if he'd let me. If I had any money, I'd quit\non the spot and return home.\\\"\" CR>)>)\n\t      (<EQUAL? .OBJ ,GLOBAL-MONICA ,MONICA>\n\t       <DISCRETION ,PHONG ,MONICA>\n\t       <TELL\n\"\\\"She's an intelligent girl. Mr. Linder is very proud of her, but I\nthink she acts too much like a man.\">\n\t       <COND (,PHONG-SEEN-CORPSE?\n\t\t      <TELL \" She really muffed it this time.\">)>\n\t       <TELL \"\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GLOBAL-AFFAIR ,GLOBAL-MRS-LINDER>\n\t       <DISCRETION ,PHONG ,LINDER>\n\t       <TELL\n\"\\\"If only Mr. Linder had been home more, he could have kept her in\nline.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GLOBAL-PHONG ,PHONG>\n\t       ;<DISCRETION ,PHONG ,LINDER>\n\t       <SETG PHONG-HAS-MOTIVE ,PHONG>\n\t       <TELL\n\"\\\"Mr. Linder brought me here from Asia, to help manage his business and\nrun his house. I guess I do more running than managing. If I can help you,\njust push the button anywhere in the house.\\\"\" CR>)\n\t      (<AND ,SHOT-FIRED <EQUAL? .OBJ ,GLOBAL-SHOT>>\n\t       <TELL\n\"\\\"I was in the kitchen and heard a sound like a gunshot, so I ran to the\noffice and found you and Mr. Linder. You were closer to it than I was.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GLOBAL-STILES ,STILES>\n\t       <DISCRETION ,PHONG ,LINDER>\n\t       <TELL\n\"\\\"He used to come around here now and then, when Mr. Linder was away. I\nnever thought much about it until the fighting between Mr. and Mrs. got\nbad, just before Mrs. Linder passed on.\\\" He pauses. \\\"I think Mr. Linder\nhas been calling him on the telephone a lot lately.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GLOBAL-SUICIDE>\n\t       <SETG MONICA-HAS-MOTIVE ,PHONG>\n\t       <DISCRETION ,PHONG ,LINDER ,MONICA>\n\t       <TELL\n\"\\\"Everyone was sad about that. Mr. Linder just threw himself into his\nwork, as usual. Monica was terribly depressed, didn't even come out of\nher room for a long time. I doubt she'll ever get over it.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,WILL>\n\t       <COND (,PHONG-SEEN-CORPSE?\n\t\t      ;<SETG PHONG-HAS-MOTIVE ,WILL>\n\t\t      <DISCRETION ,PHONG ,MONICA>\n\t\t      <TELL\n\"\\\"Mr. Linder probably kept it in his bank safe. I've never seen it.\\\"\" CR>)\n\t\t     (T <TELL\n\"\\\"You'll have to ask Mr. Linder about that.\\\"\" CR>)>)\n\t      (<EQUAL? .OBJ ,BROOM>\n\t       <TELL\n\"\\\"What can I tell you? That's a 'flathead broom,' invented by your\nAmerican Shakers, I believe.\\\"\" CR>)\n\t      (<AND <EQUAL? .OBJ ,DOORBELL> ,PHONG-SEEN-CORPSE?>\n\t       <TELL\n\"He seems surprised. \\\"Uh, that was just some door-to-door salesman.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GUN-RECEIPT>\n\t       <DISCRETION ,PHONG ,MONICA>\n\t       <TELL\n\"\\\"Yes, I think Monica bought those, using some other name.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,MATCHBOOK>\n\t       <TELL\n\"\\\"I've heard Mr. Linder mention that restaurant.\" \" But I don't recognize\nthe phone number.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,BRASS-LANTERN>\n\t       <TELL\n\"\\\"I've heard Mr. Linder mention that restaurant.\" \"\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,MEDICAL-REPORT ,TUMOR>\n\t       <TELL\n\"Phong looks surprised but not alarmed. \\\"This is the first I've\nheard of this.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,MUDDY-SHOES>\n\t       <SETG SIDE-FOOTPRINTS-MATCHED T>\n\t       <TELL\n\"\\\"Those are my gardening boots. They're muddy because, while you were\nin the office, \" \"I thought I heard a\nnoise outside and went out to investigate.\" \"\\\"\" CR>)\n\t      (<OR <EQUAL? .OBJ ,OFFICE-BUTTON ,CLOCK>\n\t\t   <EQUAL? .OBJ ,POWDER ,CLOCK-POWDER>>\n\t       <COND (,PLAYER-PUSHED-BUTTON\n\t\t      <SETG PHONG-ADMITTED-HELPING? T>\n\t\t      <DISCRETION ,PHONG ,MONICA>\n\t\t      <TELL\n\"\\\"I might as well tell you: Mr. Linder concocted this scheme to frighten\nStiles, and he got Monica and me to help him. But he was supposed to be\nonly wounded, not killed!\\\"\" CR>\n\t\t      <RTRUE>)>\n\t       <COND (,PHONG-SEEN-CORPSE?\n\t\t      <TELL \"Phong seems shaken, but all he says is, \">)>\n\t       <COND (<EQUAL? .OBJ ,OFFICE-BUTTON>\n\t\t      ;<OR ,BUTTON-FIXED <NOT ,SHOT-FIRED>>\n\t\t      <TELL\n\"\\\"That's my butler's button, of course.\\\"\" CR>)\n\t\t     (<EQUAL? .OBJ ,CLOCK>\n\t\t      ;<OR ,BUTTON-FIXED <NOT ,SHOT-FIRED>>\n\t\t      <TELL\n\"\\\"Mr. Linder has a certain fondness for elaborate things like that.\\\"\" CR>)\n\t\t     (T\n\t\t      <TELL\n\"\\\"If it's dust you're after, I plead guilty to plenty of it.\\\"\" CR>)>)\n\t      (<EQUAL? .OBJ ,PIECE-OF-WIRE ,CLOCK-WIRES ,PIECE-OF-PUTTY>\n\t      <TELL \"\\\"Oh, I guess that's part of the burglar alarm.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,RECURSIVE-BOOK>\n\t       <TELL\n\"\\\"It's a mystery called 'Deadline.' Monica recommended it to me.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,TELEGRAM>\n\t       <TELL\n\"\\\"Yes, that's the telegram Mr. Linder sent this morning.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,THREAT-NOTE>\n\t       <COND (,PHONG-ADMITTED-HELPING?\n\t\t      <TELL\n\"\\\"Yes, now you know that Mr. Linder forged that note. Stiles didn't\nsend it to him.\\\"\" CR>)\n\t\t     (T <TELL\n\"\\\"Yes, that's the note that Stiles sent to Mr. Linder.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GENERIC-CAR ,FILE-CABINET>\n\t       <TELL\n\"\\\"That has nothing to do with why Mr. Linder asked you here.\\\"\" CR>)\n\t      (T <TELL\n\"\\\"I'm sorry, Detective, but I can't help you.\\\"\" CR>)>)>)\n       (<AND <DOBJ? PHONG> <VERB? HELP>>\n\t<TELL\n\"Phong looks offended. \\\"I'm quite capable by myself, you know.\\\"\" CR>)\n       (<AND <DOBJ? PHONG> <VERB? RUB>>\n\t<PHONG-FIGHTS>)\n       (<AND <DOBJ? PHONG> <VERB? ASK-FOR>>\n\t<FSET ,PHONG ,TOUCHBIT>\n\t<COND (<IOBJ? GENERIC-KEY PHONG-KEYS GENERIC-GUN OUTSIDE-GUN>\n\t       <PERFORM ,V?ASK-ABOUT ,PHONG ,PRSI>\n\t       <RTRUE>)\n\t      (T <RFALSE>)>)\n       (<AND <DOBJ? PHONG> <VERB? SEARCH SEARCH-OBJECT-FOR>>\n\t<COND (<IN? ,OUTSIDE-GUN ,PHONG>\n\t       <PHONG-FIGHTS>)\n\t      (<AND <IN? ,PHONG-KEYS ,PHONG>\n\t\t    <OR <VERB? SEARCH>\n\t\t\t<AND <VERB? SEARCH-OBJECT-FOR>\n\t\t\t     <IOBJ? PHONG-KEYS GENERIC-KEY>>>>\n\t       <MOVE ,PHONG-KEYS ,PLAYER>\n\t       <FCLEAR ,PHONG-KEYS ,NDESCBIT>\n\t       <TELL\n\"You find a \" D ,PHONG-KEYS \" in Phong's pocket and take it.\" CR> ;\"? better\")\n\t      (T <RFALSE>)>)\n       (<AND <DOBJ? PHONG> <VERB? SHOW>>\n\t<PERFORM ,V?ASK-ABOUT ,PRSO ,PRSI>\n\t<RTRUE>)\n       (<AND <VERB? TAKE>\n\t     <DOBJ? PHONG-KEYS GENERIC-KEY GENERIC-GUN OUTSIDE-GUN>\n\t     ;<IOBJ? PHONG>>\n\t<TAKE-PHONG-KEYS>)\n       (<AND <VERB? TAKEOUT>\t;\"TAKE PHONG OUTSIDE\"\n\t     <IOBJ? OFFICE-BACK-DOOR MONICA-BACK-DOOR LINDER-BACK-DOOR>>\n\t<PHONG-FIGHTS>)\n       (<VERB? ARREST> <ARREST ,PHONG>)>>"
  },
  "PHONG-FIGHTS": {
   "name": "PHONG-FIGHTS",
   "file": "people.zil",
   "line": 477,
   "endLine": 480,
   "source": "<ROUTINE PHONG-FIGHTS ()\n\t<TELL\n\"Phong's smile disappears and his body shifts subtly toward a fighting\nstance.  \\\"I don't think you really want to try that, Detective.\\\"\" CR>>"
  },
  "TAKE-PHONG-KEYS": {
   "name": "TAKE-PHONG-KEYS",
   "file": "people.zil",
   "line": 482,
   "endLine": 490,
   "source": "<ROUTINE TAKE-PHONG-KEYS ()\n <COND (,PHONG-SEEN-CORPSE?\n\t<MOVE ,PHONG-KEYS ,PLAYER>\n\t<FCLEAR ,PHONG-KEYS ,NDESCBIT>\n\t<TELL\n\"\\\"Here, you may as well take them. I don't see how Mr. Linder can\nobject now.\\\"\" CR>)\n       (T <TELL\n\"\\\"I don't think Mr. Linder would like that.\\\"\" CR>)>>"
  },
  "LINDER-F": {
   "name": "LINDER-F",
   "file": "people.zil",
   "line": 539,
   "endLine": 685,
   "source": "<ROUTINE LINDER-F (\"OPTIONAL\" (ARG <>) \"AUX\" OBJ (L <LOC ,LINDER>))\n <COND (<==? .ARG ,M-OBJDESC>\n\t<COND (<IN-MOTION? ,LINDER> <RTRUE>)\n\t      (<FSET? ,LINDER ,TOUCHBIT>\n\t       <COND (<AND <IN? ,LINDER ,HERE> <IN? ,HERE ,ROOMS>>\n\t\t      <TELL \"Linder is pacing back and forth.\" CR>)\n\t\t     (T <TELL\n\"Linder is sitting on the \" D <LOC ,LINDER> \".\" CR>)>)\n\t      (T\n\t       <FSET ,LINDER ,TOUCHBIT>\n\t       <TELL <GETP ,LINDER ,P?TEXT> CR>)>\n\t<RTRUE>)\n       (<==? ,WINNER ,LINDER>\n\t<COND (<AND <VERB? FIND>\n\t\t    <DOBJ? GUN-RECEIPT>>\n\t       <SETG WINNER ,PLAYER>\n\t       <PERFORM ,V?ASK-ABOUT ,LINDER ,PRSO>\n\t       <RTRUE>)\n\t      (<VERB? FIND THANKS> <RFALSE>)\n\t      (<OR <AND <VERB? GIVE> <DOBJ? DRINK>>\n\t\t   <AND <VERB? SGIVE><IOBJ? DRINK>>>\n\t       <RFALSE>)\n\t      (<AND <VERB? PUSH> <DOBJ? OFFICE-BUTTON>>\n\t       <TELL \"\\\"I don't need Phong yet.\\\"\" CR>)\n\t      (<VERB? TIME>\n\t       <TELL \"Linder looks at his wrist watch and says, \\\"I have \">\n\t       <TIME-PRINT ,PRESENT-TIME>\n\t       <TELL \"\\\"\" CR>)\n\t      (<COM-CHECK ,LINDER> <RTRUE>)\n\t      (T <TELL \"\\\"Don't tell me what to do!\\\"\" CR>)>)\n       (<OR <AND ,PRSO <IN? ,PRSO ,GLOBAL-OBJECTS> <SET OBJ ,PRSO>\n\t\t <VERB? FIND WHAT>>\n\t  <AND ,PRSI <SET OBJ ,PRSI><DOBJ? LINDER><VERB? CONFRONT ASK-ABOUT>>>\n\t<COND (<NOT <GRAB-ATTENTION ,LINDER>> <RTRUE>)>\n\t<SAID-TO ,LINDER>\n\t<COND (<EQUAL? .OBJ ,BUTTON>\n\t       <TELL \"\\\"That's the butler's button, of course.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,BLACK-WIRE>\n\t       <TELL\n\"\\\"Yes, Monica wired \" \"the whole house for butler's buttons.\"\n\" With all modesty, I think she's quite a mechanic.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,WHITE-WIRE>\n\t       <TELL\n\"\\\"Yes, Monica wired \" \"all the windows for burglars.\"\n\" With all modesty, I think she's quite a mechanic.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GENERIC-GREEN-WIRE ,GENERIC-WIRE>\n\t       <TELL\n\"\\\"That's Monica's territory. I don't interfere.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GLOBAL-CALL>\n\t       <TELL\n\"\\\"What phone call? I haven't talked with Stiles since my wife's death.\nI'm really afraid he wants to do me in.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GENERIC-KEY>\n\t       <TELL \"\\\"Phong keeps the house keys for me.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GLOBAL-LINDER ,LINDER>\n\t       <TELL\n\"\\\"You've probably read about me in the papers. In fact they just published\nsomething about me when I won that award. And I've heard lots about you.\nThat's why I asked you here.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GLOBAL-AFFAIR ,GLOBAL-MRS-LINDER ,GLOBAL-SUICIDE>\n\t       <TELL\n\"\\\"It's still too painful for me to talk about, I'm afraid.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,MONEY>\n\t       <TELL\n\"\\\"Money?! I asked you here to prevent a crime. I hope you're not thinking\nof some outlandish fee!\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GLOBAL-MONICA ,MONICA>\n\t       <TELL\n\"\\\"She's a loyal and intelligent girl. I'm very proud of her.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GLOBAL-PHONG ,PHONG>\n\t       <TELL\n\"\\\"He and I go back a long time. Met in Asia, you know. And since I\nspend as much time there as here, he takes care of the house for me.\nA fine fellow, and I trust him implicitly.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GLOBAL-STILES ,STILES ,DANGER>\n\t       <COND (<FSET? ,THREAT-NOTE ,TOUCHBIT>\n\t\t      <TELL\n\"\\\"All I know about Stiles is that he's a writer of some kind, and\nsometimes he plays bit parts in films. I've never really met the man.\\\"\" CR>)\n\t\t     (<==? ,HERE ,OFFICE>\n\t\t      <I-LINDER-EXPLAIN>\n\t\t      <RTRUE>)\n\t\t     (T <TELL\n\"\\\"I'll explain all that shortly, after I finish this drink.\\\"\" CR>)>)\n\t      (<EQUAL? .OBJ ,PLAYER>\n\t       <TELL\n\"\\\"My friend Klutz, the Police Chief, recommended you to me.\\\"\" CR>)\n\t      (<OR <EQUAL? .OBJ ,GENERIC-CAR ,GENERIC-GUN>\n\t\t   <EQUAL? .OBJ ,GLOBAL-PTA ,WILL>>\n\t       <TELL\n\"\\\"That has nothing to do with why I asked you here.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,BROOM>\n\t       <TELL\n\"\\\"Oh, Phong must have left it there after cleaning up.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,CARVED-CHAIR>\n\t       <TELL\n\"\\\"I found that in an obscure but wealthy estate in Asia during the war\nand brought it home as booty. Sitting in it makes me feel like an\n'Oriental Potentate.'\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,CAT>\n\t       <TELL\n\"\\\"She's Monica's cat. You'd do better to ask her.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,CLOCK>\n\t       <TELL\n\"\\\"I've always admired elaborate machines, and that's the finest example\nI could hope to own.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GUN-RECEIPT>\n\t       <TELL\n\"\\\"I didn't ask you here so you could search the house!\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,MATCHBOOK ,BRASS-LANTERN>\n\t       <DISCRETION ,LINDER ,PHONG>\n\t       <TELL\n\"\\\"I think Phong goes there sometimes. I've never been there myself.\\\"\nHe almost flinched before answering, but now he's as smooth as ever.\" CR>)\n\t      (<EQUAL? .OBJ ,MEDICAL-REPORT ,TUMOR>\n\t       <COND (,LINDER-SAW-MEDICAL-REPORT\n\t\t      <TELL\n\"\\\"I already told you that I haven't seen it before.\\\"\" CR>)\n\t\t     (T <TELL\n\"Linder looks surprised and a bit alarmed. \\\"This is the first I've\nheard of this. I don't know why my doctor didn't tell me about it.\\\"\" CR>)>\n\t       <SETG LINDER-SAW-MEDICAL-REPORT T>)\n\t      (<EQUAL? .OBJ ,OFFICE-BUTTON>\n\t       <TELL \"\\\"That's the butler's button, of course.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,PAPERS ,FILE-CABINET>\n\t       <TELL\n\"\\\"I wish you wouldn't meddle in my files while we're trying to talk.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,PIECE-OF-WIRE ,CLOCK-WIRES ,PIECE-OF-PUTTY>\n\t       <TELL \"\\\"Oh, uh, that's part of the burglar alarm.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,TELEGRAM>\n\t      <TELL \"\\\"Yes, that's the telegram I sent this morning.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,THREAT-NOTE>\n\t       <TELL \"\\\"Yes, that's the note that Stiles sent to me.\\\"\" CR>)\n\t      (T <TELL <PICK-ONE ,LINDER-ASKED> CR>)>)\n       (<AND <DOBJ? LINDER> <VERB? RUB>>\n\t<TELL\n\"Linder looks bewildered, almost alarmed. \\\"Whatever do you have in mind?\\\"\"\nCR>)\n       (<AND <DOBJ? LINDER> <VERB? SHOW>>\n\t<PERFORM ,V?ASK-ABOUT ,PRSO ,PRSI>\n\t<RTRUE>)\n       (<AND <DOBJ? LINDER> <VERB? TURN-UP>>\t;\"SHUT UP\"\n\t<TELL \"Many have tried, but none has succeeded.\" CR>)\n       (<AND <VERB? TAKEOUT>\t\t\t;\"TAKE LINDER OUTSIDE\"\n\t     <IOBJ? OFFICE-BACK-DOOR MONICA-BACK-DOOR LINDER-BACK-DOOR>>\n\t<TELL \"Many have tried, but none has succeeded.\" CR>)\n       (<VERB? ARREST> <ARREST ,LINDER>)>>"
  },
  "STILES-F": {
   "name": "STILES-F",
   "file": "people.zil",
   "line": 717,
   "endLine": 856,
   "source": "<ROUTINE STILES-F (\"OPTIONAL\" (ARG <>) \"AUX\" OBJ (L <LOC ,STILES>))\n <COND (<==? .ARG ,M-OBJDESC>\n\t<COND (<EQUAL? .L ,OFFICE-PORCH ,OFFICE-PATH>\n\t       <COND (<IN-MOTION? ,STILES> <RTRUE>)\n\t\t     (<FSET? ,STILES ,TOUCHBIT>\n\t\t      <TELL\"Stiles is waiting for you to say something.\"CR>)\n\t\t     (T <TELL \"The visitor is in a hurry.\" CR>)>)\n\t      (<IN-MOTION? ,STILES>\n\t       <TELL\n\"Sgt. Duffy is leading Stiles by the handcuffs.\" CR>)\n\t      (,MET-STILES?\n\t       <COND (<L? ,PRESENT-TIME %<* 13 60>>\n\t\t      <TELL\n\"Stiles is fastened to the davenport, \" \"looking sullen.\" CR>)\n\t\t     (T \n\t\t      <TELL\n\"Stiles is fastened to the davenport, \"\n\"yawning and trying not to doze off.\" CR>)>)\n\t      (T\n\t       ;<FSET ,STILES ,TOUCHBIT>\n\t       <TELL\n\"Sgt. Duffy is holding a prisoner by the arm.\" CR>\n\t       <TELL <GETP ,STILES ,P?TEXT> CR>)>\n\t<RTRUE>)\n       (<==? ,WINNER ,STILES>\n\t<COND (<AND ,TOO-LATE <VERB? FIND> <NOT <DOBJ? PLAYER>>>\n\t       <TELL \"\\\"I wouldn't tell you even if I knew.\\\"\" CR>)\n\t      (<AND ,TOO-LATE <VERB? INVENTORY>>\n\t       <TELL \"\\\"I've never seen you before.\\\"\" CR>)\n\t      (<VERB? FIND THANKS> <RFALSE>)\n\t      (<COM-CHECK ,STILES> <RTRUE>)\n\t      (T <TELL <PICK-ONE ,WHY-ME> CR>)>)\n       (<OR <AND ,PRSI<SET OBJ ,PRSI><DOBJ? STILES><VERB? CONFRONT ASK-ABOUT>>\n\t    <AND ,PRSO <IN? ,PRSO ,GLOBAL-OBJECTS> <SET OBJ ,PRSO>\n\t\t <VERB? FIND WHAT>>>\n\t<COND (<NOT <GRAB-ATTENTION ,STILES>> <RTRUE>)>\n\t<SAID-TO ,STILES>\n\t<COND (<EQUAL? .OBJ ,GLOBAL-CALL>\n\t       <TELL\n\"\\\"Linder phoned me today and almost commanded me to come here tonight\nto talk about our deal. Last time, he at least was decent enough to buy\nme lunch. He\" \" said he wanted to pay me a bundle to leave town.\\\"\" CR>)\n\t      (<AND <NOT ,TOO-LATE> <EQUAL? .OBJ ,GLOBAL-DUFFY>>\n\t       <TELL\n\"\\\"Is that your man? When I came running out of the woods, he grabbed me\nas if I was some kind of criminal. He wouldn't let me go! So here I am.\\\"\"CR>)\n\t      (<EQUAL? .OBJ ,GENERIC-GUN>\n\t       <TELL \"\\\"Don't ask me. I never touch them.\\\"\" CR>)\n\t      (<AND <NOT ,TOO-LATE> <EQUAL? .OBJ ,STILES-SHOES>>\n\t       <SETG BACK-FOOTPRINTS-MATCHED T>\n\t       <TELL\n\"\\\"What about them? They're muddy because I had to run through the yard and\nwoods to get away from the shooting.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,TELEGRAM>\n\t       <TELL\n\"\\\"I don't get it. I think he's more dangerous than I am!\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,MONEY>\n\t       <TELL\n\"\\\"Yeah, Linder\" \" said he wanted to pay me a bundle to leave town.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GLOBAL-MONICA ,MONICA>\n\t       <DISCRETION ,STILES ,MONICA>\n\t       <TELL\n\"\\\"She's probably just another dizzy dame, but I don't really know her\nwell enough to say.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GLOBAL-AFFAIR ,GLOBAL-MRS-LINDER ,GLOBAL-SUICIDE>\n\t       <DISCRETION ,STILES ,MONICA>\n\t       <TELL\n\"\\\"Virginia was a special woman. Repressed for years. I think that, if\nonly ... Say, I don't have to answer your questions!\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GLOBAL-LINDER ,LINDER ,CORPSE>\n\t\t<TELL\n\"\\\"He's a smooth operator. I can think of many people who'd like to plug\nhim. Not me, of course. I still don't understand why he sounded so urgent\nwhen he called me today and asked me to come here tonight.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GLOBAL-PHONG ,PHONG>\n\t       <DISCRETION ,STILES ,PHONG>\n\t       <TELL \"\\\"He seems straight, but I don't really trust \">\n\t       <COND (<TANDY?> <TELL \"his kind\">)\n\t\t     (T <TELL \"slanteyes\">)>\n\t       <TELL \".\\\"\" CR>)\n\t      (<AND ,SHOT-FIRED <EQUAL? .OBJ ,GLOBAL-SHOT>>\n\t       <TELL\n\"\\\"I was just walking up to Linder's office when there was this\nexplosion and the window fell apart. 'Holy jumping catfish!' I thought,\n'Someone took a shot at me!' So I ran to the gate, but it was locked.\nThe only way out I could see was through the woods.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GLOBAL-STILES ,STILES>\n\t       <TELL\n\"\\\"There's not much to tell. I'm a writer, but that doesn't take you far\nthese days. So I do some film work on the side. Some day my agent will\nwise up and find me a decent publisher.\\\"\" CR>)\n\t      (<AND <NOT ,TOO-LATE> <EQUAL? .OBJ ,INSIDE-GUN ,OUTSIDE-GUN>>\n\t       <TELL\n\"\\\"I've never seen it before. Anyhow, I don't like guns.\\\"\" CR>)\n\t      (<OR <EQUAL? .OBJ ,MATCHBOOK>\n\t\t   <AND <EQUAL? .OBJ ,INTNUM> <==? ,P-NUMBER 1729>>>\n\t       <TELL\n\"\\\"That's my phone number! Linder must have jotted it down the day\nwe had lunch at that restaurant,\"\n\" when he first offered me money to leave town.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,BRASS-LANTERN>\n\t       <TELL\n\"\\\"I think that's the name of the restaurant where Linder took me to lunch,\"\n\" when he first offered me money to leave town.\\\"\" CR>)\n\t      (<AND <NOT ,TOO-LATE> <EQUAL? .OBJ ,MEDICAL-REPORT ,TUMOR>>\n\t       <TELL\n\"\\\"So the old man was on the way out, eh? Wish I'd known that.\\\"\nHe pauses. \\\"I mean, I could have taken his money and blown town\nuntil he kicked the bucket, then come back. Too late now.\\\"\" CR>)\n\t      (<AND <NOT ,TOO-LATE> <EQUAL? .OBJ ,THREAT-NOTE>>\n\t       <TELL\n\"\\\"Holy smoke! That sort of looks like my writing, but I didn't write\nit.\\\"\" CR>)\n\t      (T\n\t       <TELL <PICK-ONE ,STILES-ASKED> CR>)>)\n       (<VERB? LOOK-UP PHONE>\n\t<PERFORM ,PRSA ,MATCHBOOK>\n\t<RTRUE>)\n       (<AND ,TOO-LATE\n\t     <OR <VERB? SEARCH>\n\t\t <AND <DOBJ? MONEY> <VERB? GIVE TAKE>>\n\t\t <AND <IOBJ? MONEY> <VERB? ASK-FOR SEARCH-OBJECT-FOR SGIVE>>>>\n\t<TELL\n\"When you try it, he whirls around in a fighting stance. \\\"Don't mess\naround with me, buddy. I've handled thieves before.\\\"\" CR>)\n       (<AND <DOBJ? STILES> <VERB? SHOW>>\n\t<PERFORM ,V?ASK-ABOUT ,PRSO ,PRSI>\n\t<RTRUE>)\n       (<AND <DOBJ? STILES> <VERB? SLAP RUB>>\n\t<TELL\n\"Stiles\" \"'s eyes are full of hate, and \" \"he says something unprintable.\"CR>)\n\t(<AND <DOBJ? STILES> <VERB? TIE-TO TIE-WITH> <NOT ,TOO-LATE>>\n\t <TELL \"There's no need. Duffy's cuffs are secure enough.\" CR>)\n\t(<AND <DOBJ? STILES> <VERB? UNTIE> <NOT ,TOO-LATE>>\n\t<TELL \"Your key won't fit the cuffs.\" CR>)\n       (<AND <VERB? TAKEOUT>\t;\"TAKE STILES OUTSIDE\"\n\t     <NOT ,TOO-LATE>\n\t     <IOBJ? OFFICE-BACK-DOOR MONICA-BACK-DOOR LINDER-BACK-DOOR>>\n\t<TELL \"Your key won't fit the cuffs.\" CR>)\n       (<VERB? ARREST> <ARREST ,STILES>)>>"
  },
  "STILES-SHOES-F": {
   "name": "STILES-SHOES-F",
   "file": "people.zil",
   "line": 870,
   "endLine": 888,
   "source": "<ROUTINE STILES-SHOES-F ()\n <COND (<AND <VERB? COMPARE PUT>\n\t     <OR <DOBJ? SIDE-FOOTPRINTS SIDE-FOOTPRINTS-CAST>\n\t\t <IOBJ? SIDE-FOOTPRINTS SIDE-FOOTPRINTS-CAST>>>\n\t<TELL\n\"The shoes don't seem to match \" ;\"the plaster cast of \"\n\"the foot prints that you found in the \" \"side yard.\" CR>)\n       (<AND <VERB? COMPARE PUT>\n\t     <OR <DOBJ? BACK-FOOTPRINTS BACK-FOOTPRINTS-CAST>\n\t\t <IOBJ? BACK-FOOTPRINTS BACK-FOOTPRINTS-CAST>>>\n\t<COND (<OR <VERB? PUT> <==? ,P-ADVERB ,W?CAREFULLY>>\n\t       <SETG BACK-FOOTPRINTS-MATCHED T>\n\t       <TELL\n\"The shoes and the foot prints match each other perfectly.\" CR>)\n\t      (T\n\t       <TELL\n\"The shoes look similar to \" ;\"the plaster cast of \"\n\"the foot prints that you found in the \" \"back yard.\" CR>)>)\n       (T <RANDOM-SHOES-F>)>>"
  },
  "MONICA-F": {
   "name": "MONICA-F",
   "file": "people.zil",
   "line": 932,
   "endLine": 1372,
   "source": "<ROUTINE MONICA-F (\"OPTIONAL\" (ARG <>) \"AUX\" OBJ (L <LOC ,MONICA>) X)\n <COND (<==? .ARG ,M-OBJDESC>\n\t<COND (<IN-MOTION? ,MONICA> <RTRUE>)\n\t      (<FSET? ,MONICA ,TOUCHBIT>\n\t       <COND (,MONICA-TIED-TO <TELL\n\"Monica is fastened to the \" D ,MONICA-TIED-TO\n\t\t\" with the \" D ,MONICA-TIED-WITH \".\" CR>)\n\t\t     (<==? .L ,MONICA-ROOM>\n\t\t    <TELL \"Monica is lying on her bed, softly sobbing.\" CR>)\n\t\t     (<==? .L ,TOILET-ROOM>\n\t\t    <TELL \"Monica is leaning over the toilet, gasping.\" CR>)\n\t\t     (T\n\t\t      <TELL \"Monica is here, biting her nails.\" CR>)>)\n\t      (T\n\t       <FSET ,MONICA ,TOUCHBIT>\n\t       <TELL \"Monica \">\n\t       <COND (<==? <LOC ,MONICA> <LOC ,LINDER>>\n\t\t      <TELL \"stops talking and \">)>\n\t       <TELL \"looks at you sharply. \"\n\t\t     <GETP ,MONICA ,P?TEXT>\n\t\t     CR>)>\n\t<RTRUE>)\n       (<==? ,WINNER ,MONICA>\n\t<FSET ,MONICA ,TOUCHBIT>\n\t<COND (<AND <VERB? FIND> <DOBJ? CLOCK-KEY>>\n\t       <SETG WINNER ,PLAYER>\n\t       <PERFORM ,V?ASK-ABOUT ,MONICA ,PRSO>\n\t       <RTRUE>)\n\t      (<VERB? FIND THANKS> <RFALSE>)\n\t      (<OR <AND <VERB? GIVE>\n\t\t\t<DOBJ? CLOCK-KEY GENERIC-KEY GENERIC-GUN INSIDE-GUN>>\n\t\t   <AND <VERB? SGIVE>\n\t\t\t<IOBJ? CLOCK-KEY GENERIC-KEY GENERIC-GUN INSIDE-GUN>>>\n\t       <TELL \"\\\"Why should I?\\\"\" CR>)\t;\"? better\"\n\t      (<COM-CHECK ,MONICA> <RTRUE>)\n\t      (T <TELL <PICK-ONE ,WHY-ME> CR>)>)\n       (<VERB? ACCUSE>\n\t<SETG MONICA-CLAMS-UP T>\n\t<COND (<NOT ,MONICA-SEEN-CORPSE?>\n\t       <TELL\n\"\\\"What murder? What are you talking about?\\\" Her cheeks quiver like jelly.\"\nCR>)\n\t      (<NOT <OR ,SEEN-MONICA-AT-CLOCK ,MONICA-ADMITTED-HELPING?>>\n\t       <TELL\n\"\\\"You were there when it happened. Isn't it obvious that Stiles did it?\\\"\"\nCR>)\n\t      (<NOT ,MONICA-SAW-MEDICAL-REPORT>\n\t       <FCLEAR ,MEDICAL-REPORT ,INVISIBLE>\n\t       <FCLEAR ,TUMOR ,INVISIBLE>\n\t       <SETG MONICA-SAW-MEDICAL-REPORT T>\n\t       <SETG MONICA-ADMITTED-HELPING? T>\n\t       <TELL\n\"\\\"It's true I helped set up the gun mechanism. But Dad was already\ndying! You can find the medical report on the desk \">\n\t       <COND (<IN? ,MONICA ,MONICA-ROOM> <TELL \"here \">)>\n\t       <TELL\n\"in my room. He was ... dying ...\\\" She breaks down in tears.\" CR>)\n\t      (<NOT ,MONICA-SAW-CORONER-REPORT>\n\t       <TELL\n\"\\\"I've told you already: he was dying!\\\" Tears dribble down her cheeks.\" CR>)\n\t      (T\n\t       <TELL\n\"\\\"I don't understand! I believed that medical report, and I don't know\nwhy the doctor lied to me about the tumor. You think I wanted to murder\nmy own father? I thought he was dying already!\\\" Her eyes are pleading\nwith you now, begging you to believe her.\" CR>)>)\n       (<OR <AND ,PRSI<SET OBJ ,PRSI><DOBJ? MONICA><VERB? CONFRONT ASK-ABOUT>>\n\t    <AND ,PRSO <IN? ,PRSO ,GLOBAL-OBJECTS> <SET OBJ ,PRSO>\n\t\t <VERB? FIND WHAT>>>\n\t<COND (<NOT <GRAB-ATTENTION ,MONICA>> <RTRUE>)>\n\t<SAID-TO ,MONICA>\n\t<FSET ,MONICA ,TOUCHBIT>\n\t<COND (<OR <EQUAL? .OBJ ,MONEY ,GLOBAL-PTA>\n\t\t   <EQUAL? .OBJ ,GLOBAL-TERRY ,GENERIC-CAR>>\n\t       <TELL\n\"\\\"That has nothing to do with why Dad asked you here.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,BUTTON>\n\t       <SETG MONICA-CLAMS-UP T>\n\t       <TELL\n\"\\\"That's the butler's button, you cheesehead.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GENERIC-GUN>\n\t       <SETG MONICA-CLAMS-UP T>\n\t       <TELL \"\\\"I have nothing to say to you about that.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,BLACK-WIRE>\n\t       <TELL\n\"\\\"That bell system is just one of the features I've put in this house.\nBeyond your imagination, probably.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,WHITE-WIRE>\n\t       <TELL\n\"\\\"That alarm system is another of the features I've put in this house.\nYou probably know the kind of low-life that would try to break in\nhere.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GENERIC-GREEN-WIRE ,GENERIC-WIRE>\n\t       <SETG MONICA-CLAMS-UP T>\n\t       <TELL \"\\\"You want wire? You can find all kinds \">\n\t       <COND (<EQUAL? ,HERE ,WORKSHOP> <TELL \"here \">)>\n\t       <TELL \"in the workshop.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GLOBAL-MONICA ,MONICA>\n\t       <TELL \"\\\"I have no secrets. Anyone can see what I am.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GENERIC-KEY ,PHONG-KEYS>\n\t       <TELL \"\\\"Phong keeps the house keys. Ask him.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GLOBAL-LINDER ,LINDER ,CORPSE>\n\t       <COND (,MONICA-CLAMS-UP\n\t\t      <TELL \"\\\"What can I say? He\">\n\t\t      <COND (,MONICA-SEEN-CORPSE?\n\t\t\t     <TELL \" wa\">)\n\t\t\t    (T <TELL \"'\">)>\n\t\t      <TELL  \"s my father, a hard-working, clever man.\\\"\" CR>\n\t\t      <RTRUE>)>\n\t       <SETG MONICA-CLAMS-UP T>\n\t       <COND (,MONICA-SEEN-CORPSE?\n\t\t      <SETG MONICA-HAS-MOTIVE ,CORPSE>\n\t\t      <TELL\n\"She rambles a bit, as if dreaming. \\\"To be honest, I feel relieved ...\nthat he's met his Maker. Now I won't feel as if I'm under his thumb when\nhe's home. He really treated all of us like ... his property, even\nMother. I guess I'm an orphan now, but ... \\\"\"\n,SHE-CLAMS-UP\n;\"\\\"What can I say? He was my father, and he had his faults, but he loved\nme in his own way. And now he's dead! They're both ... dead!\\\" She\npractically shouts the last word.\" CR>)\n\t\t     (T\n\t\t      <SETG MONICA-HAS-MOTIVE ,LINDER>\n\t\t      <DISCRETION ,MONICA ,LINDER>\n\t\t      <TELL\n\"\\\"Oh, I can tell you lots about him. Do you want to know if he was a\ngood husband? A good father? Anything but a selfish ...\\\"\"\n,SHE-CLAMS-UP CR>)>)\n\t      (<EQUAL? .OBJ ,GLOBAL-AFFAIR ,GLOBAL-MRS-LINDER>\n\t       <SETG MONICA-HAS-MOTIVE ,GLOBAL-MRS-LINDER>\n\t       <DISCRETION ,MONICA ,LINDER>\n\t       <COND (,MONICA-CLAMS-UP\n\t\t      <TELL \"\\\"That's between Mother and me.\\\"\" CR>)\n\t\t     (T\n\t\t      <SETG MONICA-CLAMS-UP T>\n\t\t      <TELL\n\"\\\"She was the most noble woman I've ever known. Did her best to be a\n'good wife' even though she was alone so much. No one understood her as\nI did, certainly not Father. Sometimes I feel I could just ...\\\"\nShe slams a clenched fist into her palm.\"\n,SHE-CLAMS-UP CR>)>)\n\t      (<EQUAL? .OBJ ,GLOBAL-MURDER ,DANGER>\n\t       <COND (<NOT ,MONICA-SEEN-CORPSE?>\n\t\t      <TELL\n\"\\\"What do you think this is, a cheap whodunit?\\\"\" CR>)\n\t\t     (<NOT ,MONICA-ADMITTED-HELPING?>\n\t\t      <TELL \"\\\"Isn't it obvious? That \">\n\t\t      <COND (<TANDY?> <TELL \"idiot\">)\n\t\t\t    (T <TELL \"bastard\">)>\n\t\t      <TELL \" Stiles squibbed him off!\\\"\" CR>)\n\t\t     (T\n\t\t      <SETG WINNER ,PLAYER>\n\t\t      <PERFORM ,V?ACCUSE ,MONICA ,GLOBAL-MURDER>\n\t\t      <RTRUE>)>)\n\t      (<EQUAL? .OBJ ,GLOBAL-PHONG ,PHONG>\n\t       <DISCRETION ,MONICA ,PHONG>\n\t       <TELL\n\"\\\"He's a right gee, no matter what some people say about his \">\n\t       <COND (<TANDY?> <TELL \"kind\">)\n\t\t     (T <TELL \"race\">)>\n\t       <TELL \".\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GLOBAL-STILES ,STILES>\n\t       <COND (,MONICA-ADMITTED-HELPING?\n\t\t      <SETG MONICA-CLAMS-UP T>\n\t\t      <TELL \"\\\"That poor \">\n\t\t      <COND (<TANDY?> <TELL \"idiot\">)\n\t\t\t    (T <TELL \"bastard\">)>\n\t\t      <TELL\n\". First he fell in love with Mother, a married woman;\nthen he actually trusted her husband. I don't know what he uses for brains.\\\"\"\nCR>)\n\t\t     (,MONICA-SEEN-CORPSE?\n\t\t      <TELL \"\\\"That \">\n\t\t      <COND (<TANDY?> <TELL \"idiot\">)\n\t\t\t    (T <TELL \"bastard\">)>\n\t\t      <TELL\n\" who killed Dad? I'd spit in his face if it was worth the trouble.\\\"\" CR>)\n\t\t     (T\n\t\t      <DISCRETION ,MONICA ,STILES>\n\t\t      <TELL\n\"\\\"Oh, that lover boy thinks he's a smooth apple, all right. If you ask me,\nhe's just a harmless grifter.\\\"\" CR>)>)\n\t      (<EQUAL? .OBJ ,PLAYER>\n\t       <TELL \"\\\"I don't know anything about you, but I \">\n\t       <COND (,MONICA-SEEN-CORPSE? <TELL \"had hoped you could\">)\n\t\t     (T <TELL \"hope you can\">)>\n\t       <TELL \" help Dad.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GLOBAL-SUICIDE>\n\t       <TELL \"\\\"I don't want to talk about it.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GLOBAL-TERRY>\n\t       <TELL \"\\\"Terry's a good friend of mine, that's all.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,WILL>\n\t       <COND (,MONICA-SEEN-CORPSE?\n\t\t      <SETG PHONG-HAS-MOTIVE ,WILL>\n\t\t      <DISCRETION ,MONICA ,PHONG>\n\t\t      <TELL\n\"\\\"Dad kept it in his bank safe. I'll bet Phong would like to see it.\\\"\" CR>)\n\t\t     (T <TELL\n\"\\\"You'll have to ask Dad about that.\\\"\" CR>)>)\n\t      (<EQUAL? .OBJ ,FILE-CABINET>\n\t       <TELL\n\"\\\"That has nothing to do with why Dad asked you here.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,CAT>\n\t       <TELL\n\"\\\"She's my cat. I named her Asta, because she's at least as smart as\nthe dog in 'The Thin Man.'\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,CLOCK-KEY>\n\t       <COND (<IN? ,CLOCK-KEY ,MONICA> \n\t\t      <SETG MONICA-CLAMS-UP T>\n\t\t      <TELL \"\\\"I don't know where Dad keeps it.\\\"\" CR>)\n\t\t     (T <TELL\n\"\\\"That's the only key for the clock. So what?\\\"\" CR>)>)\n\t      ;(<EQUAL? .OBJ ,GENERIC-KEY>\n\t       <TELL \"\\\"I don't know where Dad keeps it.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GUN-RECEIPT>\n\t       <TELL\n\"\\\"What about it? It's no crime to get a little heat for\nself-protection.\\\"\" CR>\n\t       ;<TELL \"\\\"I thought I told Phong to destroy that!\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,INSIDE-GUN>\t;\"? more!\"\n\t       <COND (<FSET? ,INSIDE-GUN ,TOUCHBIT>\n\t\t      <TELL\n\"Monica has the wild look of a trapped animal. \\\"I can't understand why\nthat heater was inside the clock.\\\"\" CR>)\n\t\t     (T <TELL\n\"\\\"I don't know what you're talking about.\\\"\" CR>)>)\n\t      (<EQUAL? .OBJ ,MEDICAL-REPORT ,TUMOR>\n\t       <COND (,MONICA-SEEN-CORPSE?\n\t\t      <COND (,MONICA-ADMITTED-HELPING?\n\t\t\t     <SETG WINNER ,PLAYER>\n\t\t\t     <PERFORM ,V?ACCUSE ,MONICA ,GLOBAL-MURDER>\n\t\t\t     <RTRUE>)\n\t\t\t    (,MONICA-SAW-MEDICAL-REPORT\n\t\t\t     <TELL\n\"\\\"I already told you: Dad was about to kick the bucket anyway.\\\"\"\nCR>)\n\t\t\t    (T\n\t\t\t     <FCLEAR ,MEDICAL-REPORT ,INVISIBLE>\n\t\t\t     <FCLEAR ,TUMOR ,INVISIBLE>\n\t\t\t     <TELL \"\\\"Dad gave \"\n\t\t\t\t     <COND (<EQUAL? .OBJ ,MEDICAL-REPORT>\n\t\t\t\t\t    \"it to me \")\n\t\t\t\t\t   (T \"me a medical report \")>\n\"so I could try to understand what was wrong and\nwhat his chances were. Now I guess Stiles has ended Dad's pain.\\\"\" CR>)>)\n\t\t     (T <DISCRETION ,MONICA ,LINDER>\n\t\t      <COND (,MONICA-SAW-MEDICAL-REPORT\n\t\t\t     <TELL\n\"\\\"I already told you: Dad's about to kick the bucket.\\\"\" CR>)\n\t\t\t    (T <TELL\n\"\\\"How did you find that? Dad gave it to me so I could try to understand\nwhat's wrong and what his chances are. They don't look good.\\\" She looks\nalarmed.\" CR>)>)>\n\t       <SETG MONICA-SAW-MEDICAL-REPORT T>\n\t       <RTRUE>)\n\t      (<AND <EQUAL? .OBJ ,PIECE-OF-WIRE ,CLOCK-WIRES ,PIECE-OF-PUTTY>\n\t\t    <NOT ,MONICA-ADMITTED-HELPING?>>\n\t       <SETG MONICA-CLAMS-UP T>\n\t       <TELL\n\"\\\"Oh, uh, that's part of a timed lock I set up for the office.\\\"\" CR>)\n\t      (<OR <EQUAL? .OBJ ,OFFICE-BUTTON ,CLOCK>\n\t\t   <EQUAL? .OBJ ,POWDER ,CLOCK-POWDER>\n\t\t   <AND <EQUAL? .OBJ ,PIECE-OF-WIRE ,CLOCK-WIRES\n\t\t\t\t     ,PIECE-OF-PUTTY>\n\t\t\t,MONICA-ADMITTED-HELPING?>>\n\t       <COND (<AND ,MONICA-SEEN-CORPSE? ,PLAYER-PUSHED-BUTTON>\n\t\t      <SETG MONICA-ADMITTED-HELPING? T>\n\t\t      <SETG MONICA-CLAMS-UP T>\n\t\t      <TELL\n\"\\\"You seem to have discovered Dad's little plot to frighten Stiles.\nSure, I helped set it up for him. But I don't know what went wrong.\nHe wasn't supposed to die!\\\" Her lower lip is quivering.\" CR>)\n\t\t     (<EQUAL? .OBJ ,OFFICE-BUTTON>\n\t\t      <TELL\n\"\\\"That's the butler's button, you cheesehead.\\\"\" CR>)\n\t\t     (T\n\t\t      <TELL\n\"\\\"Phong really ought to do a better job of cleaning around here.\\\"\" CR>)>)\n\t      (<EQUAL? .OBJ ,OUTSIDE-GUN>\n\t       <COND (,MONICA-ADMITTED-HELPING?\n\t\t      <SETG MONICA-CLAMS-UP T>\n\t\t      <TELL\n\"\\\"That gat you found? Phong planted it so it would look as if Stiles\nused it.\\\"\" CR>)\n\t\t     (,MONICA-SEEN-CORPSE?\n\t\t      <DISCRETION ,MONICA ,STILES>\n\t\t      <TELL\n\"\\\"That gat you found? It must belong to Stiles.\\\"\" CR>)\n\t\t     (T <TELL\n\"\\\"I've never seen it before. It looks as if you don't take good care of\nit.\\\"\" CR>)>)\n\t      (<EQUAL? .OBJ ,RECURSIVE-BOOK>\n\t       <TELL\n\"\\\"It's a swell mystery called 'Deadline.' I haven't figured it out yet.\\\"\"\nCR>)\n\t      (<EQUAL? .OBJ ,TELEGRAM>\n\t       <TELL\n\"\\\"That must be the telegram Dad sent this morning.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,STUB>\n\t       <TELL\n\"\\\"That looks like my ticket stub. I didn't know I dropped it.\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,GLOBAL-FILM>\n\t       <COND (,FILM-SEEN\n\t\t      <TELL\n\"\\\"It was called 'Dead End'. I don't think this Bogart guy is pretty\nenough to make it big.\\\"\" CR>)\n\t\t     (T\n\t\t      <TELL\n\"\\\"I think we'll see 'Dead End'. Terry wants to check out this guy named\nBogart.\\\"\" CR>)>)\n\t      (T\n\t       <TELL \"\\\"I don't know anything about it, shamus.\">\n\t       <SETG MONICA-QUESTIONS <+ 1 ,MONICA-QUESTIONS>>\n\t       <COND (<L? 6 ,MONICA-QUESTIONS>\n\t\t      <TELL\n\t\t       \" And I'm really getting tired of your questions.\">)>\n\t       <TELL \"\\\"\" CR>)>)\n       (<AND <DOBJ? MONICA> <VERB? GOODBYE>>\n\t<FSET ,MONICA ,TOUCHBIT>\n\t<TELL \"\\\"If I never see you again, it's jake with me.\\\"\" CR>)\n       (<AND <DOBJ? MONICA> <VERB? RUB>>\n\t<FSET ,MONICA ,TOUCHBIT>\n\t<COND (<NOT ,MONICA-TIED-TO> <MONICA-PUSHES>)\n\t      (T <TELL\n\"Monica writhes away from your touch and manages to kick you in the\nshin.\" CR>)>)\n       (<AND <DOBJ? MONICA> <VERB? ASK-FOR>>\n\t<FSET ,MONICA ,TOUCHBIT>\n\t<COND (,MONICA-TIED-TO\n\t       <TELL\"\\\"How can I give you anything when I'm tied up?\\\"\" CR>)\n\t      (<IOBJ? CLOCK-KEY GENERIC-KEY PHONG-KEYS GENERIC-GUN INSIDE-GUN>\n\t       <PERFORM ,V?ASK-ABOUT ,MONICA ,PRSI>\n\t       <RTRUE>)\n\t      (T <RFALSE>)>)\n       (<OR <AND <DOBJ? MONICA> <SET OBJ ,PRSI>\n\t\t <VERB? SEARCH SEARCH-OBJECT-FOR>>\n\t    <AND <IOBJ? MONICA> <SET OBJ ,PRSO>\n\t\t <VERB? TAKE>>>\n\t<FSET ,MONICA ,TOUCHBIT>\n\t<COND (<NOT ,MONICA-TIED-TO> <MONICA-PUSHES>)\n\t      (<AND <IN? ,CLOCK-KEY ,MONICA>\n\t\t    <OR <VERB? SEARCH> <EQUAL? .OBJ ,GENERIC-KEY ,CLOCK-KEY>>>\n\t       <MOVE ,CLOCK-KEY ,PLAYER>\n\t       <FCLEAR ,CLOCK-KEY ,INVISIBLE>\n\t       <FSET ,CLOCK-KEY ,TOUCHBIT>\n\t       <TELL\n\"You find a single key in Monica's pocket and take it.\" CR> ;\"? better\")\n\t      (<AND <IN? ,INSIDE-GUN ,MONICA>\n\t\t    <OR <VERB? SEARCH><EQUAL? .OBJ ,GENERIC-GUN ,INSIDE-GUN>>>\n\t       <SETG SEEN-MONICA-AT-CLOCK T>\n\t       <MOVE ,INSIDE-GUN ,PLAYER>\n\t       <FCLEAR ,INSIDE-GUN ,INVISIBLE>\n\t       <FSET ,INSIDE-GUN ,TOUCHBIT>\n\t       <TELL\n\"You find a hand gun in Monica's pocket and take it.\" CR> ;\"? better\")\n\t      (T <RFALSE>)>)\n       (<AND <DOBJ? MONICA> <VERB? SHOW>>\n\t<PERFORM ,V?ASK-ABOUT ,PRSO ,PRSI>\n\t<RTRUE>)\n       (<AND <DOBJ? MONICA> <VERB? SLAP> <IN? ,MONICA ,MONICA-ROOM>>\n\t<FSET ,MONICA ,TOUCHBIT>\n\t<TELL\n\"Monica screams, \\\"Leave me alone! I'll get over it! Please!\\\"\" CR>)\n       (<AND <VERB? SLAP> ,MONICA-TIED-TO>\n\t<FSET ,MONICA ,TOUCHBIT>\n\t<TELL\n\"Monica's eyes are full of hate, and she says something unprintable.\"\nCR>)\n       (<AND <DOBJ? MONICA> <VERB? TIE-TO>>\n\t<FSET ,MONICA ,TOUCHBIT>\n\t<COND (,MONICA-TIED-TO\n\t       <TELL\n\"She's already fastened to the \" D ,MONICA-TIED-TO \".\" CR>\n\t       <RTRUE>)\n\t      (<AND ,CLOCK-FIXED\n\t\t    <FSET? ,PRSI ,FURNITURE>\n\t\t    <IN? ,HANDCUFFS ,PLAYER>>\n\t       <SETG MONICA-CLAMS-UP T>\n\t       <SETG MONICA-TIED-TO ,PRSI>\n\t       <SETG MONICA-TIED-WITH ,HANDCUFFS>\n\t       <TELL \"(with your handcuffs)\" CR>)\n\t      (T <MONICA-PUSHES> <RTRUE>)>\n\t<COND (,MONICA-TIED-WITH\n\t       <MOVE ,MONICA-TIED-WITH ,PRSI>\n\t       <FCLEAR ,MONICA-TIED-WITH ,TAKEBIT>\n\t       <FSET ,MONICA-TIED-WITH ,NDESCBIT>\n\t       <PUT <GET ,GOAL-TABLES ,MONICA-C> ,GOAL-ENABLE <>>\n\t       <PUT ,MOVEMENT-GOALS\n\t\t    ,MONICA-C\n\t\t    <REST <GET ,MOVEMENT-GOALS ,MONICA-C> ,MG-LENGTH>>\n\t       <TELL\n\"She puts up a struggle, but you manage to do it.\" CR>)\n\t      (T <TELL \"There's nothing to tie her \" \"with!\" CR>)>)\n\t(<AND <DOBJ? MONICA> <VERB? TIE-WITH>>\n\t<FSET ,MONICA ,TOUCHBIT>\n\t<COND (,MONICA-TIED-WITH\n\t       <TELL\n\"She's already fastened with the \" D ,MONICA-TIED-WITH \".\" CR>\n\t       <RTRUE>)\n\t      (<AND ,CLOCK-FIXED <IOBJ? HANDCUFFS> ;<FSET? ,PRSI ,TOOLBIT>>\n\t       <SETG MONICA-TIED-TO\n\t\t     <COND (<SET X <FIND-FLAG ,HERE ,FURNITURE>>\n\t\t\t    <TELL \"(to the \" D .X \")\" CR>\n\t\t\t    .X)>>)\n\t      (T <MONICA-PUSHES> <RTRUE>)>\n\t<COND (,MONICA-TIED-TO\n\t       <SETG MONICA-CLAMS-UP T>\n\t       <SETG MONICA-TIED-WITH ,PRSI>\n\t       <MOVE ,PRSI ,MONICA-TIED-TO>\n\t       <FCLEAR ,PRSI ,TAKEBIT>\n\t       <FSET ,PRSI ,NDESCBIT>\n\t       <PUT <GET ,GOAL-TABLES ,MONICA-C> ,GOAL-ENABLE <>>\n\t       <PUT <GET ,GOAL-TABLES ,MONICA-C> ,ATTENTION-SPAN 999>\n\t       <TELL\n\"She puts up a struggle, but you manage to do it.\" CR>)\n\t      (T <TELL \"There's nothing to \"\n\t\t\t <COND (<IOBJ? HANDCUFFS> \"handcuff \")\n\t\t\t       (T \"tie \")>\n\t\t\t \"her to!\" CR>)>)\n\t(<VERB? UNTIE>\n\t <COND (<NOT ,MONICA-TIED-TO>\n\t\t<TELL \"She's not even tied up!\" CR>)\n\t       (<AND ,PRSI <NOT <==? ,PRSI ,MONICA-TIED-TO>>>\n\t\t<TELL \"She's not fastened to the \" D ,PRSI \"!\" CR>)\n\t       (T\n\t\t<MOVE ,MONICA-TIED-WITH ,PLAYER>\n\t\t<TELL\n\"Monica rubs her wrists as you take the \" D ,MONICA-TIED-WITH \".\">\n\t\t<COND (<NOT <OR ,FINGERPRINT-OBJ ,DUFFY-AT-CORONER>>\n\t\t       <TELL\n\" Her eyes dart from door to door, then she bolts for the hallway. But,\nwithin seconds, Sgt. Duffy brings her back.\">)>\n\t\t<RELEASE-MONICA>\n\t\t<TELL \" She refuses to look at you.\" CR>)>)\n\t(<AND <VERB? TAKEOUT>\t;\"TAKE MONICA OUTSIDE\"\n\t      <IOBJ? OFFICE-BACK-DOOR MONICA-BACK-DOOR LINDER-BACK-DOOR>>\n\t <COND (,MONICA-TIED-TO\n\t\t<TELL\n\"You can't take her and the \" D ,MONICA-TIED-TO \" both!\" CR>)\n\t       (T <MONICA-PUSHES>)>)\n\t(<VERB? ARREST> <ARREST ,MONICA>)>>"
  },
  "MONICA-PUSHES": {
   "name": "MONICA-PUSHES",
   "file": "people.zil",
   "line": 1374,
   "endLine": 1381,
   "source": "<ROUTINE MONICA-PUSHES ()\n\t<TELL\n\"Monica pushes you away with surprising strength. \\\"I don't know what\ngame you're playing, Detective, but count me out. If you think I'm just\na dumb twi\">\n\t<COND (<NOT <TANDY?>> <TELL \"s\">)>\n\t<TELL \"t, think again.\\\" Her eyes burn like polished gems.\" CR>\n\t<RTRUE>>"
  },
  "RELEASE-MONICA": {
   "name": "RELEASE-MONICA",
   "file": "people.zil",
   "line": 1383,
   "endLine": 1387,
   "source": "<ROUTINE RELEASE-MONICA ()\n\t<SETG MONICA-TIED-TO <>>\n\t<SETG MONICA-TIED-WITH <>>\n\t<FSET ,MONICA-TIED-WITH ,TAKEBIT>\n\t<FCLEAR ,MONICA-TIED-WITH ,NDESCBIT>>"
  },
  "CAT-F": {
   "name": "CAT-F",
   "file": "people.zil",
   "line": 1399,
   "endLine": 1405,
   "source": "<ROUTINE CAT-F ()\n <COND (<VERB? KICK>\n\t<TELL\n\"Like a fly, the cat springs up just in time, then goes to a different\ncorner to settle down.\" CR>)\n       (<VERB? RUB HELLO>\n\t<TELL \"The cat purrs a little louder and curls one paw.\" CR>)>>"
  },
  "GLOBAL-PERSON": {
   "name": "GLOBAL-PERSON",
   "file": "people.zil",
   "line": 1414,
   "endLine": 1447,
   "source": "<ROUTINE GLOBAL-PERSON ()\n\t <COND (<VERB? WHAT FIND WAIT-FOR FOLLOW $CALL PHONE>\n\t\t<RFALSE>)\n\t       (<AND <VERB? ASK-ABOUT TELL-ME>\n\t\t     ,PRSO\n\t\t     <OR <AND <FSET? ,PRSO ,PERSON>\n\t\t\t      <NOT <IN? ,PRSO ,GLOBAL-OBJECTS>>>\n\t\t\t <EQUAL? ,PRSO ,GLOBAL-DUFFY>>>\n\t\t<RFALSE>)\n\t       (<VERB? TELL>\n\t\t<TELL \"You can't speak to someone who isn't here.\" CR>\n\t\t<SETG P-CONT <>>\n\t\t<RTRUE>)\n\t       (<VERB? ARREST>\n\t\t<COND (<DOBJ? GLOBAL-LINDER> <ARREST ,GLOBAL-LINDER>)\n\t\t      (T <ARREST <GET ,CHARACTER-TABLE\n\t\t\t\t      <GETP ,PRSO ,P?CHARACTER>>>)>)\n\t       (T\n\t\t<COND (<OR <VERB? ASK-ABOUT TELL-ME>\n\t\t\t   <NOT ,NOW-PRSI>>\n\t\t       <TELL D ,PRSO>)\n\t\t      (T <TELL D ,PRSI>)>\n\t\t<COND (<AND <VERB? $CALL TELL HELLO GOODBYE ASK-ABOUT ASK-FOR>\n\t\t\t    <NOT <==?\n\t\t\t\t   <BAND\n\t\t\t\t     <GETP\n\t\t\t\t       <LOC <GET ,CHARACTER-TABLE\n\t\t\t\t\t\t <GETP ,PRSO ,P?CHARACTER>>>\n\t\t\t\t       ,P?CORRIDOR>\n\t\t\t\t     <GETP ,HERE ,P?CORRIDOR>> 0>>>\n\t\t       <TELL \" can't hear you.\" CR>)\n\t\t      (T <TELL \" isn't here!\" CR>)>\n\t\t<SETG P-CONT <>>\n\t\t<RTRUE>)>>"
  },
  "GLOBAL-MRS-LINDER-F": {
   "name": "GLOBAL-MRS-LINDER-F",
   "file": "people.zil",
   "line": 1463,
   "endLine": 1467,
   "source": "<ROUTINE GLOBAL-MRS-LINDER-F ()\n\t <COND (<VERB? FOLLOW>\n\t\t<TELL \"You will eventually, shamus, you will.\" CR>)\n\t       (<VERB? $CALL PHONE>\n\t\t<TELL \"You're not with her yet.\" CR>)>>"
  },
  "HINT-F": {
   "name": "HINT-F",
   "file": "people.zil",
   "line": 1482,
   "endLine": 1485,
   "source": "<ROUTINE HINT-F ()\n <COND (<OR <AND <VERB? ASK-FOR> <NOT <DOBJ? GLOBAL-DUFFY>>>\n\t    <AND <VERB? TAKE>\t <NOT <IOBJ? GLOBAL-DUFFY>>>>\n\t<TELL \"You'll have to be more specific.\" CR>)>>"
  },
  "GLOBAL-DUFFY-F": {
   "name": "GLOBAL-DUFFY-F",
   "file": "people.zil",
   "line": 1487,
   "endLine": 1627,
   "source": "<ROUTINE GLOBAL-DUFFY-F ()\n <COND (<AND <VERB? PHONE> <DOBJ? GLOBAL-DUFFY> <PHONE-IN? ,HERE>>\n\t<COND (,SEEN-DUFFY?\n\t       <TELL\n\"Duffy must be around here somewhere. There's no point in trying to\nphone him.\" CR>)\n\t      (T <TELL\n\"The night clerk at the station says he'll give Duffy your message.\" CR>)>)\n       (<NOT ,SEEN-DUFFY?>\n\t<TELL\n\"Sergeant Duffy is probably at the station, working late as usual.\" CR>\n\t<RFATAL>)\n       (<AND <VERB? WAIT-FOR> <DOBJ? GLOBAL-DUFFY>>\n\t<COND (<OR ,FINGERPRINT-OBJ ,DUFFY-AT-CORONER <NOT ,MET-DUFFY?>>\n\t       <V-WAIT 10000 ,PRSO>)\n\t      (T <TELL\n\"You'd wait quite a while, since Sergeant Duffy is always\nnearby but never approaches you without a good reason.\" CR>)>)\n       (<OR ,FINGERPRINT-OBJ ,DUFFY-AT-CORONER>\n\t<DO-FINGERPRINT>\n\t<RFATAL>)\n       (<AND <VERB? ARREST SHOOT> <DOBJ? GLOBAL-DUFFY>>\n\t<TELL \"Oh, come on now! Not trusty \" D ,PRSO \"!\" CR>)\n       (<AND <VERB? FIND> <DOBJ? GLOBAL-DUFFY>>\n\t<TELL\n\"Like a lurking grue in the dark places of the earth, Sergeant Duffy is\nnever far from the scene of a crime. If you witness a crime, you can be\nsure he'll show up soon. Then, if you ANALYZE something, he\nwill appear in an instant to take it to the lab. When the results are\navailable, he will rush them back to you. If you ARREST someone, he\nwill be there with the handcuffs. You can't find a more dedicated civil\nservant.\" CR>)\n       (<AND <VERB? FOLLOW> <DOBJ? GLOBAL-DUFFY>>\n\t<COND (,DUFFY-WITH-STILES <PERFORM ,PRSA ,STILES ,PRSI> <RTRUE>)\n\t      (T <TELL \"Duffy is too quick to follow.\" CR>)>)\n       (<NOT ,MET-DUFFY?>\n\t<COND (<NOT <I-MEET-DUFFY?>>\n\t       <TELL \"It looks as though Duffy didn't hear you.\" CR>)>\n\t<RTRUE>)\n       (<AND <VERB? $CALL> <DOBJ? GLOBAL-DUFFY>>\n\t<RFALSE>)\n       (<==? ,WINNER ,GLOBAL-DUFFY>\n\t<COND (<VERB? ANALYZE SANALYZE MAKE>\n\t       <SETG WINNER ,PLAYER>\n\t       <PERFORM ,PRSA ,PRSO ,PRSI>\n\t       <RTRUE>)\n\t      (<VERB? ARREST>\n\t       <SETG WINNER ,PLAYER>\n\t       <PERFORM ,V?ARREST ,PRSO>\n\t       <RTRUE>)\n\t      (<VERB? FIND THANKS> <RFALSE>)\n\t      (<OR <AND <VERB? GIVE> <DOBJ? HINT> <IOBJ? PLAYER>>\n\t\t   <AND<VERB? SGIVE> <IOBJ? HINT> <DOBJ? PLAYER>>>\n\t       <DUFFY-HINT>)\n\t      (<VERB? TAKE>\n\t       <TELL \"Duffy\">\n\t       <COND (<NOT ,DUFFY-WITH-STILES>\n\t\t      <TELL \" appears for an instant but\">)>\n\t       <TELL \" politely declines your offer.\" CR>)\n\t      (<AND <VERB? PHONE> <DOBJ? CORONER>>\n\t       <COND (,DUFFY-WITH-STILES\n\t\t      <TELL \"\\\"I will, as soon as I case the joint.\\\"\" CR>)\n\t\t     (T <TELL\n\"\\\"Oh, I called the coroner as soon as I saw the body. They'll be here\nas soon as they have time.\\\"\" CR>)>)\n\t      (<AND <DOBJ? STILES> <VERB? UNTIE>>\n\t       <TELL \"\\\"What?? I won't release a suspect!\\\"\" CR>)\n\t      (<COM-CHECK ,GLOBAL-DUFFY> <RTRUE>)\n\t      (T <TELL\n\"\\\"With all respect, I think you should do that yourself.\\\"\" CR>)>)\n       (<AND <VERB? ASK-ABOUT> <DOBJ? GLOBAL-DUFFY>>\n\t<COND (<NOT ,DUFFY-WITH-STILES>\n\t       <TELL \"Duffy appears for a moment. \">)>\n\t<TELL \"\\\"\">\n\t<COND (<AND <IOBJ? CORONER> <L? ,PRESENT-TIME 720>>\n\t       <TELL\n\"Oh, I called the coroner as soon as I saw the body. They'll be here\nas soon as they have time.\">)\n\t      (<IOBJ? AUTOPSY CORONER>\n\t       <COND (<OR ,DUFFY-AT-CORONER <L? ,PRESENT-TIME 720>>\n\t\t      <TELL\n\"Oh, I called the coroner as soon as I saw the body. They'll be here\nas soon as they have time.\">)\n\t\t     (T\n\t\t      <TELL \"I thought I told you already. The coroner \">\n\t\t      <COND (,DUFFY-SAW-MEDICAL-REPORT\n\t\t\t     <TELL\n\"found no evidence of the alleged stomach tumor. In fact, he\ncould find no organic disease that would either explain the\ndeath or support the theory that Linder wanted to die. He \">)>\n\t\t      <TELL\n\"concluded that Linder died of a single small-caliber bullet through the\nheart. And here's something peculiar: there were no\ntraceable rifle marks on the bullet.\">)>)\n\t      (<IOBJ? GLOBAL-DUFFY>\n\t       <TELL\n\"Come off it, Detective. We've worked together before. You sure you\ndidn't stop at a bar tonight?\">)\n\t      (<IOBJ? TUB-ROOM BATHTUB>\n\t       <TELL\n\"Ah, that's where the late Mrs. Linder did herself in. A messy\nbusiness, Detective.\">)\n\t      (<IOBJ? GLOBAL-SUICIDE>\n\t       <TELL \"She shot herself in the bathtub.\">)\n\t      (<IOBJ? GUN-RECEIPT>\n\t       <TELL\n\"Oh, I know that place, Fritzi's. Untidy, but clean.\">)\n\t      (<IOBJ? MEDICAL-REPORT>\n\t       <SETG DUFFY-SAW-MEDICAL-REPORT T>\n\t       <TELL\"Fascinating! It could have been a suicide, then.\">)\n\t      (<IOBJ? RECURSIVE-BOOK>\n\t       <TELL\n\"Ah, Connecticut! I have relations there, you know. In fact, one young\none wants to be a detective some day.\">)\n\t      (T <TELL \"I wish I could help you, Detective.\">)>\n\t<TELL \"\\\"\">\n\t<COND (<NOT ,DUFFY-WITH-STILES>\n\t       <TELL \" He scurries off again.\">)>\n\t<CRLF>)\n       (<AND <VERB? ASK-FOR> <IOBJ? HINT>>\n\t<DUFFY-HINT>)\n       (<OR <AND <VERB? GIVE> <IOBJ? GLOBAL-DUFFY>>\n\t    <AND<VERB? SGIVE> <DOBJ? GLOBAL-DUFFY>>>\n\t<TELL \"Duffy\">\n\t<COND (<NOT ,DUFFY-WITH-STILES>\n\t       <TELL \" appears for an instant but\">)>\n\t<TELL \" politely declines your offer.\" CR>)\n       (<VERB? GOODBYE>\n\t<TELL\n\"\\\"You can't leave yet, Detective. Think of your reputation!\\\"\" CR>)\n       (<VERB? HELLO>\n\t<COND (,DUFFY-WITH-STILES\n\t       <TELL \"\\\"Hello again, Detective.\\\"\" CR>)\n\t      (T <TELL\n\"Duffy peeks around a corner, tips his hat to you, and disappears\nagain.\" CR>)>)\n       (<AND <DOBJ? GLOBAL-DUFFY> <VERB? SHOW>>\n\t<PERFORM ,V?ASK-ABOUT ,PRSO ,PRSI>\n\t<RTRUE>)\n       (<AND <VERB? TAKE> <DOBJ? HINT> <IOBJ? GLOBAL-DUFFY>>\n\t<DUFFY-HINT>)>>"
  },
  "COM-CHECK": {
   "name": "COM-CHECK",
   "file": "people.zil",
   "line": 1644,
   "endLine": 1692,
   "source": "<ROUTINE COM-CHECK (PER)\n \t <COND (<VERB? EXAMINE>\n\t\t<SETG WINNER ,PLAYER>\n\t\t<PERFORM ,V?SHOW .PER ,PRSO>\n\t\t<RTRUE>)\n\t       (<AND <VERB? FOLLOW> <DOBJ? PLAYER>>\n\t\t<TELL \"\\\"I would rather not.\\\"\" CR>)\n\t       (<AND <VERB? GIVE> <IOBJ? PLAYER>>\n\t\t<SETG WINNER ,PLAYER>\n\t\t<PERFORM ,V?TAKE ,PRSO .PER>\n\t\t<RTRUE>)\n\t       (<AND <VERB? SGIVE> <DOBJ? PLAYER>>\n\t\t<SETG WINNER ,PLAYER>\n\t\t<PERFORM ,V?TAKE ,PRSI .PER>\n\t\t<RTRUE>)\n\t       (<AND <VERB? GOODBYE>\n\t\t     <OR <NOT ,PRSO> <==? ,PRSO .PER>>>\n\t\t<SETG WINNER ,PLAYER>\n\t\t<PERFORM ,V?GOODBYE ,WINNER>\n\t\t<RTRUE>)\n\t       (<AND <VERB? HELLO>\n\t\t     <OR <NOT ,PRSO> <==? ,PRSO .PER>>>\n\t\t<SETG WINNER ,PLAYER>\n\t\t<PERFORM ,V?HELLO .PER>\n\t\t<RTRUE>)\n\t       (<VERB? HELP>\n\t\t<COND (<OR <DOBJ? PLAYER> <NOT ,PRSO>>\n\t\t       <PERFORM ,V?GIVE ,HINT ,PLAYER>\n\t\t       <RTRUE>)\n\t\t      (<FSET? ,PRSO ,PERSON>\n\t\t       <TELL \"\\\"I don't need your help.\\\"\" CR>)\n\t\t      (T <RFALSE>)>)\n\t       (<VERB? INVENTORY>\n\t\t<TELL \"\\\"\" \"You're the detective!\" \"\\\"\" CR>)\n\t       (<AND <VERB? SHOW> <DOBJ? PLAYER>>\n\t\t<TELL \"\\\"I'm sure you can find it, Detective.\\\"\" CR>)\n\t       (<AND <VERB? TELL-ME> <DOBJ? PLAYER>>\n\t\t<SETG WINNER ,PLAYER>\n\t\t<PERFORM ,V?ASK-ABOUT .PER ,PRSI>\n\t\t<RTRUE>)\n\t       (<OR <VERB? WAIT>\n\t\t    <AND <VERB? WAIT-FOR> <DOBJ? PLAYER>>>\n\t\t<SETG WINNER ,PLAYER>\n\t\t<PERFORM ,V?$CALL .PER>\n\t\t<RTRUE>)\n\t       (<VERB? WHAT>\n\t\t<SETG WINNER ,PLAYER>\n\t        <PERFORM ,V?ASK-ABOUT .PER ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "DESCRIBE-PERSON": {
   "name": "DESCRIBE-PERSON",
   "file": "people.zil",
   "line": 1694,
   "endLine": 1698,
   "source": "<ROUTINE DESCRIBE-PERSON (PERSON \"OPTIONAL\" (STR <>))\n\t <TELL D .PERSON \" is \"\n\t       <COND (<NOT .STR> \"here\")\n\t\t     (T .STR)>\n\t       \".\" CR>>"
  },
  "DISCRETION": {
   "name": "DISCRETION",
   "file": "people.zil",
   "line": 1700,
   "endLine": 1710,
   "source": "<ROUTINE DISCRETION (P1 P2 \"OPTIONAL\" (P3 <>))\n\t <COND (<AND <==? ,HERE <META-LOC .P2>>\n\t\t     .P3 <==? ,HERE <META-LOC .P3>>>\n\t        <TELL D .P1 \" looks briefly toward \" D .P2 \" and \" D .P3\n\" and then speaks in a whisper.\" CR>)\n\t       (<==? ,HERE <META-LOC .P2>>\n\t        <TELL D .P1 \" looks briefly toward \" D .P2\n\" and then speaks in a whisper.\" CR>)\n\t       (<AND .P3 <==? ,HERE <META-LOC .P3>>>\n\t        <TELL D .P1 \" looks briefly toward \" D .P3\n\" and then speaks in a whisper.\" CR>)>>"
  },
  "INHABITED?": {
   "name": "INHABITED?",
   "file": "people.zil",
   "line": 1719,
   "endLine": 1719,
   "source": "<ROUTINE INHABITED? (RM) <NOT <0? <POPULATION .RM>>>>"
  },
  "POPULATION": {
   "name": "POPULATION",
   "file": "people.zil",
   "line": 1721,
   "endLine": 1731,
   "source": "<ROUTINE POPULATION (RM \"OPTIONAL\" (PR <>) \"AUX\" (CNT 0) OBJ)\n\t #DECL ((RM) OBJECT (CNT) FIX)\n <COND (<NOT <SET OBJ <FIRST? .RM>>> <RETURN .CNT>)>\n <REPEAT ()\n\t <COND (<AND <FSET? .OBJ ,PERSON> <NOT <FSET? .OBJ ,INVISIBLE>>>\n\t\t<SET CNT <+ .CNT 1>>\n\t\t<COND (.PR <DESCRIBE-PERSON .OBJ \"there\">)>)\n\t       (<FSET? .OBJ ,CONTBIT>\n\t\t<SET CNT <+ .CNT <POPULATION .OBJ .PR>>>)>\n\t <SET OBJ <NEXT? .OBJ>>\n\t <COND (<NOT .OBJ> <RETURN .CNT>)>>>"
  },
  "RANDOM-SHOES-F": {
   "name": "RANDOM-SHOES-F",
   "file": "people.zil",
   "line": 1733,
   "endLine": 1770,
   "source": "<ROUTINE RANDOM-SHOES-F (\"AUX\" OBJ)\n <COND (<OR <AND <SET OBJ ,PRSO> <VERB? GIVE TAKE>>\n\t    <AND <SET OBJ ,PRSI> <VERB? ASK-FOR SEARCH-OBJECT-FOR SGIVE>>>\n\t<COND (<EQUAL? .OBJ ,PHONG-SHOES> <PHONG-FIGHTS>)\n\t      (<EQUAL? .OBJ ,MONICA-SHOES>\n\t       <COND (<NOT ,MONICA-TIED-TO> <MONICA-PUSHES>)\n\t\t     (T <TELL\n\"Monica writhes away from your touch and manages to kick you in the\nshin.\" CR>)>)\n\t      (<EQUAL? .OBJ ,STILES-SHOES>\n\t       <TELL\n\"\\\"Please don't take them! I'm cold enough as it is!\\\"\" CR>)\n\t      (<EQUAL? .OBJ ,LINDER-SHOES>\n\t       <COND (<LOC ,LINDER>\n\t\t      <TELL\n\"\\\"I'm beginning to wonder if I got a decent detective or not!\\\"\" CR>)\n\t\t     (<TANDY?> <TELL \"You can't be that desperate!\" CR>)\n\t\t     (T <TELL\n\"Necrophilia went out with raccoon coats!\" CR>)>)>)\n       (<AND <VERB? COMPARE PUT>\n\t     <OR <DOBJ? SIDE-FOOTPRINTS SIDE-FOOTPRINTS-CAST\n\t\t\tBACK-FOOTPRINTS BACK-FOOTPRINTS-CAST>\n\t\t <IOBJ? SIDE-FOOTPRINTS SIDE-FOOTPRINTS-CAST\n\t\t\tBACK-FOOTPRINTS BACK-FOOTPRINTS-CAST>>>\n\t<TELL\n\"The shoes don't seem to match \" ;\"the plaster cast of \"\n\"the foot prints that you found in the \" \"yard.\" CR>)\n       (<VERB? EXAMINE>\n\t<COND (<DOBJ? PHONG-SHOES LINDER-SHOES>\n\t       <TELL\n\"They're straw slippers with thongs, clean and obviously comfortable.\" CR>)\n\t      (<DOBJ? STILES-SHOES>\n\t       <TELL\n\"They're pointed wing tips with sensational welt features, but a bit shabby\nand more than a bit muddy.\" CR>)\n\t      (<DOBJ? MONICA-SHOES>\n\t       <TELL\n\"They're tan pumps with Cuban heels, clean and stylish.\" CR>)>)>>"
  },
  "DIR-PRINT": {
   "name": "DIR-PRINT",
   "file": "places.zil",
   "line": 16,
   "endLine": 24,
   "source": "<ROUTINE DIR-PRINT (DIR \"AUX\" (CNT 0))\n\t #DECL ((DIR CNT) FIX)\n\t <REPEAT ()\n\t\t <COND (<==? <GET ,DIR-STRINGS .CNT> .DIR>\n\t\t\t<COND (T ;<NOT <EQUAL? .DIR ,P?UP ,P?DOWN>>\n\t\t\t       <TELL \"the \">)>\n\t\t\t<PRINT <GET ,DIR-STRINGS <+ .CNT 1>>>\n\t\t\t<RTRUE>)>\n\t\t <SET CNT <+ .CNT 1>>>>"
  },
  "GLOBAL-ROOM-F": {
   "name": "GLOBAL-ROOM-F",
   "file": "places.zil",
   "line": 37,
   "endLine": 60,
   "source": "<ROUTINE GLOBAL-ROOM-F (\"AUX\" TIM VAL)\n\t <COND (<VERB? KNOCK>\n\t\t<TELL \"Knocking on the walls reveals nothing unusual.\" CR>)\n\t       (<VERB? SEARCH EXAMINE>\n\t\t<COND (<==? <GETP ,HERE ,P?LINE> ,OUTSIDE-LINE-C>\n\t\t       <SET TIM 10>)\n\t\t      (<NOT <0? <GETP ,HERE ,P?CORRIDOR>>>\n\t\t       <SET TIM 3>)\n\t\t      (T <SET TIM <+ 2 <GETP ,HERE ,P?SIZE>>>)>\n\t\t<TELL\n\"(You'd do better to examine or search one thing at a time. Searching a\nwhole room or area thoroughly would take hours. A cursory search would take\nabout \" N .TIM \" minutes, and it might not reveal much. Would you like\nto do it anyway?)\">\n\t\t<COND (<YES?>\n\t\t       <COND (<==? ,M-FATAL <SET VAL <INT-WAIT .TIM>>>\n\t\t\t      <RTRUE>)\n\t\t\t     (.VAL\n\t\t\t      <TELL\n\"Your cursory search revealed nothing new.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"You didn't get a chance to finish looking over the place.\" CR>)>)\n\t\t      (T <TELL \"Okeh.\" CR>)>)>>"
  },
  "WINDOW-F": {
   "name": "WINDOW-F",
   "file": "places.zil",
   "line": 73,
   "endLine": 112,
   "source": "<ROUTINE WINDOW-F (\"AUX\" (RM <WINDOW-ROOM ,HERE ,PRSO>) POP)\n\t <COND (<VERB? BRUSH>\n\t\t<TELL\n\"The window is clean enough without your interference.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"The window is a simple wooden sash, locked tight against the cold.\">\n\t\t<COND (<NOT <OUTSIDE? ,HERE>>\n\t\t       <TELL\n\" There's some sort of electric relay on one edge, with white wires\nattached.\">)>\n\t\t<CRLF>)\n\t       (<VERB? LOOK-INSIDE LOOK-OUTSIDE>\n\t\t<COND (.RM\n\t\t       <TELL\"The window is damp and foggy, but you can see\">\n\t\t       <SET POP <POPULATION .RM>>\n\t\t       <COND (<0? .POP> T)\n\t\t\t     (<1? .POP> <TELL \" someone in\">)\n\t\t\t     (T <TELL \" some people in\">)>\n\t\t       <THE? .RM>\n\t\t       <TELL \" \" D .RM \" \"\n\t\t\t     <COND (<==? <GETP ,HERE ,P?LINE> ,OUTSIDE-LINE-C>\n\t\t\t\t    \"in\")\n\t\t\t\t   (T \"out\")>\n\t\t\t     \"side.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The window is too foggy to see through.\" CR>)>\n\t\t<RTRUE>)\n\t       (<VERB? KNOCK>\n\t\t<COND (<NOT <WINDOW-KNOCK .RM>>\n\t\t       <TELL \"There's no answer.\" CR>)>)\n\t       (<VERB? MUNG>\n\t\t<TELL \"Vandalism is for private \">\n\t\t<COND (<TANDY?> <TELL \"eye\">)\n\t\t      (T <TELL \"dick\">)>\n\t\t<TELL \"s, not famous police detectives!\" CR>)\n\t       (<VERB? OPEN CLOSE LOCK UNLOCK>\n\t\t<COND (<FSET? ,PRSO ,RMUNGBIT>\n\t\t       <TELL \"It's really broken. \">)>\n\t\t<TELL \"You can't.\" CR>)>>"
  },
  "GENERIC-WINDOW-F": {
   "name": "GENERIC-WINDOW-F",
   "file": "places.zil",
   "line": 114,
   "endLine": 121,
   "source": "<ROUTINE GENERIC-WINDOW-F (OBJ)\n\t<COND (<WINDOW-IN? ,HERE> <RFALSE>)\n\t      (<VERB? ASK-ABOUT ASK-CONTEXT-ABOUT FIND TELL-ME WHAT>\n\t       ,WINDOW)\n\t      (T\n\t       <SETG P-WON <>>\n\t       <TELL \"(You can't see any \" \"window\" \" here!)\" CR>\n\t       ,NOT-HERE-OBJECT)>>"
  },
  "WINDOW-KNOCK": {
   "name": "WINDOW-KNOCK",
   "file": "places.zil",
   "line": 123,
   "endLine": 125,
   "source": "<ROUTINE WINDOW-KNOCK (RM)\n\t <COND (<INHABITED? .RM>\n\t\t<TELL \"Someone looks up at you inquisitively.\" CR>)>>"
  },
  "WINDOW-IN?": {
   "name": "WINDOW-IN?",
   "file": "places.zil",
   "line": 127,
   "endLine": 134,
   "source": "<ROUTINE WINDOW-IN? (RM)\n\t<OR <EQUAL? .RM ,FRONT-YARD ,KITCHEN ,BUTLER-ROOM>\n\t    <EQUAL? .RM ,OFFICE-PORCH ,OFFICE>\n\t    <EQUAL? .RM ,BACK-YARD ,MONICA-ROOM>\n\t    <EQUAL? .RM ,ROCK-GARDEN ,LINDER-ROOM ,TUB-ROOM>>\n\t;<AND <0? <BAND 31 <GETP .RM ,P?CORRIDOR>>> ;\"not HALL-n or outside\"\n\t     <NOT <EQUAL? .RM ,BATHROOM ,TOILET-ROOM ,BUTLER-BATH>>\n\t     <NOT <EQUAL? .RM ,STORAGE-CLOSET ,LIVING-ROOM ,WORKSHOP>>>>"
  },
  "TOILET-F": {
   "name": "TOILET-F",
   "file": "places.zil",
   "line": 159,
   "endLine": 165,
   "source": "<ROUTINE TOILET-F (\"OPTIONAL\" (RARG 100))\n\t <COND (<NOT <==? .RARG 100>> <RFALSE>)\n\t       (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<TELL\n\"You have stooped to a new low by snooping around toilet bowls.\" CR>)\n\t       ;(<VERB? FLUSH>\n\t\t<TELL \"\\\"Whhoooossshhhhh!\\\"\" CR>)>>"
  },
  "GENERIC-BATH-DOOR-F": {
   "name": "GENERIC-BATH-DOOR-F",
   "file": "places.zil",
   "line": 172,
   "endLine": 181,
   "source": "<ROUTINE GENERIC-BATH-DOOR-F (OBJ)\n <COND (<EQUAL? ,HERE ,MONICA-ROOM> ,MONICA-BATH-DOOR)\n       (<EQUAL? ,HERE ,LINDER-ROOM> ,LINDER-BATH-DOOR)\n       (<EQUAL? ,HERE ,BUTLER-ROOM ,BUTLER-BATH> ,BUTLER-BATH-DOOR)\n       (<VERB? ASK-ABOUT ASK-CONTEXT-ABOUT FIND TELL-ME WHAT>\n\t,GENERIC-BATHROOM-DOOR)\n       (T\n\t<SETG P-WON <>>\n\t<TELL \"(You can't see any \" \"bathroom door\" \" here!)\" CR>\n\t,NOT-HERE-OBJECT)>>"
  },
  "GENERIC-BEDROOM-F": {
   "name": "GENERIC-BEDROOM-F",
   "file": "places.zil",
   "line": 188,
   "endLine": 195,
   "source": "<ROUTINE GENERIC-BEDROOM-F (OBJ)\n <COND (<EQUAL? .OBJ ,HERE ,GLOBAL-HERE> ,GLOBAL-ROOM)\n       (<VERB? ASK-ABOUT ASK-CONTEXT-ABOUT FIND TELL-ME WHAT>\n\t,GENERIC-BEDROOM)\n       (T\n\t<SETG P-WON <>>\n\t<TELL \"(You can't see any \" \"bedroom\" \" here!)\" CR>\n\t,NOT-HERE-OBJECT)>>"
  },
  "GENERIC-BEDROOM-DOOR-F": {
   "name": "GENERIC-BEDROOM-DOOR-F",
   "file": "places.zil",
   "line": 202,
   "endLine": 210,
   "source": "<ROUTINE GENERIC-BEDROOM-DOOR-F (OBJ)\n <COND (<EQUAL? ,HERE ,MONICA-ROOM ,HALL-2> ,MONICA-DOOR)\n       (<EQUAL? ,HERE ,LINDER-ROOM ,LIVING-ROOM> ,LINDER-DOOR)\n       (<VERB? ASK-ABOUT ASK-CONTEXT-ABOUT FIND TELL-ME WHAT>\n\t,GENERIC-BEDROOM-DOOR)\n       (T\n\t<SETG P-WON <>>\n\t<TELL \"(You can't see any \" \"bedroom door\" \" here!)\" CR>\n\t,NOT-HERE-OBJECT)>>"
  },
  "GENERIC-BACK-DOOR-F": {
   "name": "GENERIC-BACK-DOOR-F",
   "file": "places.zil",
   "line": 217,
   "endLine": 230,
   "source": "<ROUTINE GENERIC-BACK-DOOR-F (OBJ)\n <COND (<AND <VERB? SHOOT>\n\t     <FSET? ,P-IT-OBJECT ,DOORBIT>\n\t     <FSET? ,P-IT-OBJECT ,LOCKED>>\n\t,P-IT-OBJECT)\n       (<EQUAL? ,HERE ,OFFICE-PORCH ,OFFICE> ,OFFICE-BACK-DOOR)\n       (<EQUAL? ,HERE ,BACK-YARD ,MONICA-ROOM> ,MONICA-BACK-DOOR)\n       (<EQUAL? ,HERE ,ROCK-GARDEN ,LINDER-ROOM> ,LINDER-BACK-DOOR)\n       (<VERB? ASK-ABOUT ASK-CONTEXT-ABOUT FIND TELL-ME WHAT>\n\t,GENERIC-BACK-DOOR)\n       (T\n\t<SETG P-WON <>>\n\t<TELL \"(You can't see any \" \"back door\" \" here!)\" CR>\n\t,NOT-HERE-OBJECT)>>"
  },
  "GENERIC-BATHROOM-F": {
   "name": "GENERIC-BATHROOM-F",
   "file": "places.zil",
   "line": 237,
   "endLine": 244,
   "source": "<ROUTINE GENERIC-BATHROOM-F (OBJ)\n <COND (<EQUAL? .OBJ ,HERE ,GLOBAL-HERE> ,GLOBAL-ROOM)\n       (<VERB? ASK-ABOUT ASK-CONTEXT-ABOUT FIND TELL-ME WHAT>\n\t,GENERIC-BATHROOM)\n       (T\n\t<SETG P-WON <>>\n\t<TELL \"(You can't see any \" \"bathroom\" \" here!)\" CR>\n\t,NOT-HERE-OBJECT)>>"
  },
  "NULL-F": {
   "name": "NULL-F",
   "file": "places.zil",
   "line": 246,
   "endLine": 247,
   "source": "<ROUTINE NULL-F (\"OPTIONAL\" A1 A2)\n\t<RFALSE>>"
  },
  "DDESC": {
   "name": "DDESC",
   "file": "places.zil",
   "line": 249,
   "endLine": 255,
   "source": "<ROUTINE DDESC (STR1 DOOR STR2)\n\t #DECL ((STR1) <OR STRING ZSTRING> (DOOR) OBJECT\n\t\t(STR2) <OR FALSE STRING ZSTRING>)\n\t <TELL .STR1>\n\t <COND (<FSET? .DOOR ,OPENBIT> <TELL \"open\">)\n\t       (T <TELL \"closed\">)>\n\t <TELL .STR2 CR>>"
  },
  "DOOR-ROOM": {
   "name": "DOOR-ROOM",
   "file": "places.zil",
   "line": 257,
   "endLine": 265,
   "source": "<ROUTINE DOOR-ROOM (RM DR \"AUX\" (P 0) TBL)\n\t #DECL ((RM DR) OBJECT (P) FIX)\n\t <REPEAT ()\n\t\t <COND (<OR <0? <SET P <NEXTP .RM .P>>>\n\t\t\t    <L? .P ,LOW-DIRECTION>>\n\t\t\t<RFALSE>)\n\t\t       (<AND <==? ,DEXIT <PTSIZE <SET TBL <GETPT .RM .P>>>>\n\t\t\t     <==? .DR <GETB .TBL ,DEXITOBJ>>>\n\t\t\t<RETURN <GETB .TBL ,REXIT>>)>>>"
  },
  "FIND-FLAG": {
   "name": "FIND-FLAG",
   "file": "places.zil",
   "line": 267,
   "endLine": 272,
   "source": "<ROUTINE FIND-FLAG (RM FLAG \"OPTIONAL\" (EXCLUDED <>) \"AUX\" (O <FIRST? .RM>))\n\t<REPEAT ()\n\t <COND (<NOT .O> <RETURN <>>)\n\t       (<AND <FSET? .O .FLAG> <NOT <==? .O .EXCLUDED>>>\n\t\t<RETURN .O>)\n\t       (T <SET O <NEXT? .O>>)>>>"
  },
  "GLOBAL-HERE-F": {
   "name": "GLOBAL-HERE-F",
   "file": "places.zil",
   "line": 281,
   "endLine": 297,
   "source": "<ROUTINE GLOBAL-HERE-F (\"AUX\" (FLG <>) F HR)\n\t <COND (<VERB? WHAT ASK-ABOUT>\n\t\t<SET F <FIRST? ,HERE>>\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT .F> <RETURN>)\n\t\t\t      (<AND <FSET? .F ,CONTBIT> <INHABITED? .F>>\n\t\t\t       <SET FLG T>\n\t\t\t       <SET HR ,HERE>\n\t\t\t       <SETG HERE .F>\n\t\t\t       <GLOBAL-HERE-F>\n\t\t\t       <SETG HERE .HR>)\n\t\t\t      (<AND <FSET? .F ,PERSON> <NOT <==? .F ,PLAYER>>>\n\t\t\t       <SET FLG T>\n\t\t\t       <DESCRIBE-OBJECT .F T 0>)>\n\t\t\t<SET F <NEXT? .F>>>\n\t\t<COND (<NOT .FLG> <TELL \"There's nobody else here.\" CR>)>\n\t\t<RTRUE>)>>"
  },
  "LOCKED-F": {
   "name": "LOCKED-F",
   "file": "places.zil",
   "line": 299,
   "endLine": 308,
   "source": "<ROUTINE LOCKED-F (OBJ)\n <COND (<==? ,HERE ,FRONT-YARD>\n\t<COND (<VERB? EXAMINE LOOK-INSIDE SEARCH SEARCH-OBJECT-FOR THROUGH>\n\t       ,DINING-DOOR)\n\t      (<VERB? WALK-TO> ,FRONT-DOOR)\n\t      (T <RFALSE>)>)\n       (<AND <VERB? SHOOT>\n\t     <FSET? ,P-IT-OBJECT ,DOORBIT>\n\t     <FSET? ,P-IT-OBJECT ,LOCKED>>\n\t,P-IT-OBJECT)>>"
  },
  "META-LOC": {
   "name": "META-LOC",
   "file": "places.zil",
   "line": 310,
   "endLine": 319,
   "source": "<ROUTINE META-LOC (OBJ)\n\t <REPEAT ()\n\t\t <COND (<NOT <LOC .OBJ>>\n\t\t\t<RFALSE>)>\n\t\t <COND (<EQUAL? <LOC .OBJ> ,LOCAL-GLOBALS ,GLOBAL-OBJECTS>\n\t\t\t<RETURN <LOC .OBJ>>)>\n\t\t <COND (<IN? .OBJ ,ROOMS>\n\t\t\t<RETURN .OBJ>)\n\t\t       (ELSE\n\t\t\t<SET OBJ <LOC .OBJ>>)>>>"
  },
  "OUTSIDE?": {
   "name": "OUTSIDE?",
   "file": "places.zil",
   "line": 321,
   "endLine": 323,
   "source": "<ROUTINE OUTSIDE? (RM)\n\t<OR <==? .RM ,GARAGE>\n\t    <==? <GETP .RM ,P?LINE> ,OUTSIDE-LINE-C>>>"
  },
  "PHONE-IN?": {
   "name": "PHONE-IN?",
   "file": "places.zil",
   "line": 325,
   "endLine": 326,
   "source": "<ROUTINE PHONE-IN? (RM)\n\t<EQUAL? .RM ,LIVING-ROOM ,OFFICE ,MONICA-ROOM>>"
  },
  "WINDOW-ROOM": {
   "name": "WINDOW-ROOM",
   "file": "places.zil",
   "line": 328,
   "endLine": 341,
   "source": "<ROUTINE WINDOW-ROOM (RM WINDOW \"AUX\" (P 0) L)\n\t #DECL ((RM WINDOW) OBJECT (P L) FIX)\n\t <COND (<==? .RM ,FRONT-YARD>\n\t\t<COND (<==? .WINDOW ,KITCHEN-WINDOW> ,KITCHEN)\n\t\t      (<==? .WINDOW ,BUTLER-WINDOW> ,BUTLER-ROOM)>)\n\t       (<EQUAL? .RM ,KITCHEN ,BUTLER-ROOM> ,FRONT-YARD)\n\t       (<==? .RM ,OFFICE-PORCH> ,OFFICE)\n\t       (<==? .RM ,OFFICE> ,OFFICE-PORCH)\n\t       (<==? .RM ,BACK-YARD> ,MONICA-ROOM)\n\t       (<==? .RM ,MONICA-ROOM> ,BACK-YARD)\n\t       (<==? .RM ,ROCK-GARDEN>\n\t\t<COND (<==? .WINDOW ,LINDER-WINDOW> ,LINDER-ROOM)\n\t\t      (<==? .WINDOW ,BATH-WINDOW> ,TUB-ROOM)>)\n\t       (<EQUAL? .RM ,LINDER-ROOM ,TUB-ROOM> ,ROCK-GARDEN)>>"
  },
  "GROUND-SURFACE": {
   "name": "GROUND-SURFACE",
   "file": "places.zil",
   "line": 345,
   "endLine": 353,
   "source": "<ROUTINE GROUND-SURFACE ()\n <COND (<EQUAL? ,HERE ,FRONT-YARD ,ROCK-GARDEN>\n\t\"gravel\")\n       (<EQUAL? ,HERE ,DRIVEWAY ,DRIVEWAY-ENTRANCE>\n\t\"peastone\")\n       (<EQUAL? ,HERE ,FRONT-PORCH ,OFFICE-PORCH> \"concrete\")\n       (<EQUAL? ,HERE ,BACK-YARD> \"grass\")\n       (,GROUND-MUDDY \"mud\")\n       (T \"dirt\")>>"
  },
  "FRONT-PORCH-F": {
   "name": "FRONT-PORCH-F",
   "file": "places.zil",
   "line": 410,
   "endLine": 421,
   "source": "<ROUTINE FRONT-PORCH-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<DDESC\n\"The front porch is in an alcove, sheltered from the weather by the\nwalls and overhanging roof. A yellowish electric light hangs near\nthe \" ,FRONT-DOOR \" front door to the east, giving you a\ndim view of the\ndriveway to the south and the front yard behind a gate to the north.\">\n\t\t<DDESC\n\"The gate is \" ,FRONT-GATE\n\". A door bell glows at you, almost daring you to ring it.\">\n\t\t<THIS-IS-IT ,DOORBELL>)>>"
  },
  "DOORBELL-F": {
   "name": "DOORBELL-F",
   "file": "places.zil",
   "line": 431,
   "endLine": 438,
   "source": "<ROUTINE DOORBELL-F ()\n <COND (<VERB? PUSH RING>\n\t<COND (<AND <NOT ,WELCOMED>\n\t\t    <FSET? ,CORPSE ,INVISIBLE>>\n\t       <WELCOME>)\n\t      (T <YOU-RANG>\n\t       <TELL \"The door bell rings, loud and clear.\" CR>)>\n\t<RTRUE>)>>"
  },
  "DRIVEWAY-F": {
   "name": "DRIVEWAY-F",
   "file": "places.zil",
   "line": 469,
   "endLine": 475,
   "source": "<ROUTINE DRIVEWAY-F (\"OPTIONAL\" (ARG <>))\n <COND (<AND <VERB? CLIMB-UP FOLLOW> <DOBJ? DRIVEWAY-OBJECT>>\n\t<COND (<==? ,HERE ,DRIVEWAY-ENTRANCE>\n\t       <PERFORM ,V?WALK ,P?NORTH> <RTRUE>)\n\t      (<==? ,HERE ,GARAGE ,SIDE-YARD ;,OFFICE-PATH>\n\t       <PERFORM ,V?WALK ,P?WEST> <RTRUE>)\n\t      (T <TELL \"It's not clear which direction you mean.\" CR>)>)>>"
  },
  "SIDE-YARD-F": {
   "name": "SIDE-YARD-F",
   "file": "places.zil",
   "line": 528,
   "endLine": 543,
   "source": "<ROUTINE SIDE-YARD-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL \n\"This is a little-used side yard, hidden from the street by the fence.\nThe back yard lies to the east and the driveway to the west.\" CR>)\n\t       (<==? .RARG ,M-FLASH>\n\t\t<COND (<AND <NOT <FSET? ,SIDE-FOOTPRINTS ,INVISIBLE>>\n\t\t\t    <NOT <FSET? ,SIDE-FOOTPRINTS ,TOUCHBIT>>>\n\t\t       <DESCRIBE-OBJECT ,SIDE-FOOTPRINTS T 0>\n\t\t       <FSET ,SIDE-FOOTPRINTS ,TOUCHBIT>)>)\n\t       (<AND <==? .RARG ,M-BEG>\n\t\t     <==? ,HERE ,SIDE-YARD>\n\t\t     ,GROUND-MUDDY\n\t\t     <VERB? WALK FOLLOW>>\n\t\t<SETG SIDE-FOOTPRINTS-CONFUSED T>\n\t\t<RFALSE>)>>"
  },
  "SIDE-FOOTPRINTS-F": {
   "name": "SIDE-FOOTPRINTS-F",
   "file": "places.zil",
   "line": 556,
   "endLine": 598,
   "source": "<ROUTINE SIDE-FOOTPRINTS-F (\"OPTIONAL\" (ARG <>))\n <COND (<==? .ARG ,M-OBJDESC>\n\t<COND (,SIDE-FOOTPRINTS-CONFUSED\n\t       <COND (<FSET? ,SIDE-FOOTPRINTS ,TOUCHBIT>\n\t\t      <TELL\n\"Fresh foot prints go here and there in the yard.\" CR>)\n\t\t     (T\n\t\t      <FSET ,SIDE-FOOTPRINTS ,TOUCHBIT>\n\t\t      <TELL\n\"You notice fresh foot prints going here and there in the yard.\"\nCR>)>)\n\t      (T\n\t       <COND (<FSET? ,SIDE-FOOTPRINTS ,TOUCHBIT>\n\t\t      <TELL\n\"A fresh row of foot prints goes from the back yard to the driveway.\" CR>)\n\t\t     (T\n\t\t      <FSET ,SIDE-FOOTPRINTS ,TOUCHBIT>\n\t\t      <TELL\n\"You notice a fresh row of foot prints going from the back yard to the\ndriveway.\" CR>)>)>)\n       (<AND ,SIDE-FOOTPRINTS-CONFUSED <VERB? ANALYZE EXAMINE>>\n\t<TELL \"There are too many foot prints here now.\" CR>)\n       (<VERB? EXAMINE>\n\t<TELL\n\"The prints are lined up in an even row, as if made by a careful walker.\" CR>)\n       (<VERB? ANALYZE>\n\t<COND (<NOT <EQUAL? <LOC ,SIDE-FOOTPRINTS-CAST> ,LIMBO>>\n\t       <TELL \"You already did that!\" CR>)\n\t      (<OR ,FINGERPRINT-OBJ ,DUFFY-AT-CORONER>\n\t       <DO-FINGERPRINT>\n\t       <RTRUE>)\n\t      (T <MOVE ,SIDE-FOOTPRINTS-CAST ,PLAYER>\n\t       <ANAFOOT>)>)\n       (<VERB? FOLLOW>\n\t<COND (<EQUAL? ,HERE ,DRIVEWAY-ENTRANCE>\n\t       <GOTO ,SIDE-YARD>)\n\t      (<EQUAL? ,HERE ,SIDE-YARD ,OFFICE-PATH>\n\t       <GOTO ,DRIVEWAY-ENTRANCE>)>\n\t<RTRUE>)\n       (<AND <VERB? MAKE>\n\t     <DOBJ? GENERIC-CAST SIDE-FOOTPRINTS-CAST BACK-FOOTPRINTS-CAST>>\n\t<PERFORM ,V?ANALYZE ,SIDE-FOOTPRINTS>\n\t<RTRUE>)>>"
  },
  "SIDE-FOOTPRINTS-CAST-F": {
   "name": "SIDE-FOOTPRINTS-CAST-F",
   "file": "places.zil",
   "line": 610,
   "endLine": 614,
   "source": "<ROUTINE SIDE-FOOTPRINTS-CAST-F ()\n <COND (<AND <VERB? COMPARE>\n\t     <OR <DOBJ? BACK-FOOTPRINTS BACK-FOOTPRINTS-CAST>\n\t\t <IOBJ? BACK-FOOTPRINTS BACK-FOOTPRINTS-CAST>>>\n\t<TELL \"The two sets of foot prints don't seem to match up.\" CR>)>>"
  },
  "ANAFOOT": {
   "name": "ANAFOOT",
   "file": "places.zil",
   "line": 616,
   "endLine": 620,
   "source": "<ROUTINE ANAFOOT ()\n\t<TELL\n\"Sgt. Duffy appears with his kit for casting with plaster of Paris.\nHe quickly makes a cast of the foot prints and hands it to you,\nsaying \\\"I hope you find this as useful as it is heavy.\\\"\" CR>>"
  },
  "OFFICE-PORCH-F": {
   "name": "OFFICE-PORCH-F",
   "file": "places.zil",
   "line": 677,
   "endLine": 688,
   "source": "<ROUTINE OFFICE-PORCH-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are standing on a small concrete slab outside Linder's office. A sign\nbetween the door and the window reads \\\"PACIFIC TRADE ASSOCIATES\\\". To the\nnorth is a tidy lawn, extending east to the edge of the woods. A path of\nstepping stones leads south to the back gate.\" CR>)\n\t       (<==? .RARG ,M-FLASH>\n\t\t<COND (<AND <NOT <FSET? ,BACK-FOOTPRINTS ,INVISIBLE>>\n\t\t\t    <NOT <FSET? ,BACK-FOOTPRINTS ,TOUCHBIT>>>\n\t\t       <DESCRIBE-OBJECT ,BACK-FOOTPRINTS T 0>\n\t\t       <FSET ,BACK-FOOTPRINTS ,TOUCHBIT>)>)>>"
  },
  "BACK-FOOTPRINTS-F": {
   "name": "BACK-FOOTPRINTS-F",
   "file": "places.zil",
   "line": 703,
   "endLine": 723,
   "source": "<ROUTINE BACK-FOOTPRINTS-F ()\n <COND ;(<AND ,BACK-FOOTPRINTS-CONFUSED <VERB? ANALYZE EXAMINE>>\n\t<TELL \"There are too many foot prints here now.\" CR>)\n       (<VERB? EXAMINE>\n\t<TELL\n\"The prints are uneven and widely spaced, as if made by someone running.\" CR>)\n       (<VERB? ANALYZE>\n\t<COND (<NOT <EQUAL? <LOC ,BACK-FOOTPRINTS-CAST> ,LIMBO>>\n\t       <TELL \"You already did that!\" CR>)\n\t      (<OR ,FINGERPRINT-OBJ ,DUFFY-AT-CORONER>\n\t       <DO-FINGERPRINT>\n\t       <RTRUE>)\n\t      (T <MOVE ,BACK-FOOTPRINTS-CAST ,PLAYER>\n\t       <ANAFOOT>)>)\n       (<VERB? FOLLOW>\n\t<TELL \"You would probably get lost in the woods.\"\n\t\t\" Even with a path to follow.\" CR>)\n       (<AND <VERB? MAKE>\n\t     <DOBJ? GENERIC-CAST SIDE-FOOTPRINTS-CAST BACK-FOOTPRINTS-CAST>>\n\t<PERFORM ,V?ANALYZE ,BACK-FOOTPRINTS>\n\t<RTRUE>)>>"
  },
  "GENERIC-FOOTPRINTS-F": {
   "name": "GENERIC-FOOTPRINTS-F",
   "file": "places.zil",
   "line": 725,
   "endLine": 731,
   "source": "<ROUTINE GENERIC-FOOTPRINTS-F (OBJ)\n\t<COND (<EQUAL? ,HERE ,OFFICE-PORCH>\t,BACK-FOOTPRINTS)\n\t      (<EQUAL? ,HERE ,SIDE-YARD>\t,SIDE-FOOTPRINTS)\n\t      (T\n\t       <SETG P-WON <>>\n\t       <TELL \"(You can't see any \" \"foot prints\" \" here!)\" CR>\n\t       ,NOT-HERE-OBJECT)>>"
  },
  "GENERIC-CAST-F": {
   "name": "GENERIC-CAST-F",
   "file": "places.zil",
   "line": 743,
   "endLine": 746,
   "source": "<ROUTINE GENERIC-CAST-F (OBJ)\n <COND (<VERB? ASK-ABOUT ASK-CONTEXT-ABOUT FIND TELL-ME WHAT>\n\t,GENERIC-CAST)\n       (<VERB? MAKE> ,GENERIC-CAST)>>"
  },
  "OFFICE-WINDOW-F": {
   "name": "OFFICE-WINDOW-F",
   "file": "places.zil",
   "line": 762,
   "endLine": 801,
   "source": "<ROUTINE OFFICE-WINDOW-F (\"AUX\" (RM <WINDOW-ROOM ,HERE ,PRSO>))\n <COND ;(<VERB? ASK-ABOUT> <RFALSE>)\n       (<VERB? EXAMINE>\n\t<WINDOW-F>\n\t<COND (<FSET? ,OFFICE-WINDOW ,RMUNGBIT>\n\t       <TELL\n\"All the panes of the window are cracked, and many are in pieces on the \">\n\t       <COND ;(<0? ,DIFFICULTY> <TELL \"ground outside\">)\n\t\t     ;(<1? ,DIFFICULTY> <TELL \"floor and ground\">)\n\t\t     (T <TELL \"floor.\">)>\n\t       <COND (<==? ,HERE ,OFFICE>\n\t\t      <COND (<NOT <FSET? ,PIECE-OF-PUTTY ,TOUCHBIT>>\n\t\t\t     <TELL\n\" A chunk of putty dangles like a wax bean.\">)>\n\t\t      <COND (<NOT <FSET? ,PIECE-OF-WIRE ,TOUCHBIT>>\n\t\t\t     <TELL\n\" Along one edge of the window you can see the end of a piece of green wire.\"\n;\"?etc.\">)>)>\n\t       <CRLF>)\n\t      (<AND ;<==? ,P-ADVERB ,W?CAREFULLY>\n\t\t    <==? ,HERE ,OFFICE>\n\t\t    <NOT <FSET? ,PIECE-OF-WIRE ,TOUCHBIT>>>\n\t       <TELL\n\"There's also a piece of green wire running from the frame to the putty.\"\nCR>)>\n\t<RTRUE>)\n       (<GO-AWAY> <RTRUE>)\n       (<AND <VERB? LOOK-INSIDE LOOK-OUTSIDE>\n\t     .RM <FSET? ,OFFICE-WINDOW ,RMUNGBIT>>\n\t<TELL \"Through the broken window you can see\">\n\t<THE? .RM>\n\t<TELL \" \" D .RM \" \"\n\t\t<COND (<==? <GETP ,HERE ,P?LINE> ,OUTSIDE-LINE-C> \"in\")\n\t\t      (T \"out\")>\n\t\t\"side.\" CR>\n\t<RTRUE>)\n       (<AND <VERB? THROUGH> .RM <FSET? ,OFFICE-WINDOW ,RMUNGBIT>>\n\t<TELL \"You would probably cut yourself on the broken glass.\" CR>)\n       (<DOBJ? OFFICE-WINDOW> <PERFORM ,PRSA ,WINDOW ,PRSI> <RTRUE>)\n       (<IOBJ? OFFICE-WINDOW> <PERFORM ,PRSA ,PRSO ,WINDOW> <RTRUE>)>>"
  },
  "GO-AWAY": {
   "name": "GO-AWAY",
   "file": "places.zil",
   "line": 803,
   "endLine": 809,
   "source": "<ROUTINE GO-AWAY ()\n <COND (<AND <VERB? KNOCK>\n\t     <==? <META-LOC ,LINDER> ,OFFICE>\n\t     <NOT <IN? ,PLAYER ,OFFICE>>>\n\t<TELL\n\"Someone peeks through the window at you, then disappears and\"\n\" shouts \\\"Go away!\\\"\" CR>)>>"
  },
  "PIECE-OF-WIRE-F": {
   "name": "PIECE-OF-WIRE-F",
   "file": "places.zil",
   "line": 821,
   "endLine": 825,
   "source": "<ROUTINE PIECE-OF-WIRE-F ()\n <COND (<AND <VERB? FOLLOW> <NOT <FSET? ,PRSO ,TOUCHBIT>>>\n\t<TELL \"The wire goes into the window frame and disappears.\" CR>)\n       (<AND <VERB? TAKE> <NOT ,SHOT-FIRED>>\n\t<TELL \"You can't.\" \" It's stuck tight.\" CR>)>>"
  },
  "PIECE-OF-PUTTY-F": {
   "name": "PIECE-OF-PUTTY-F",
   "file": "places.zil",
   "line": 835,
   "endLine": 837,
   "source": "<ROUTINE PIECE-OF-PUTTY-F ()\n <COND (<AND <VERB? TAKE> <NOT ,SHOT-FIRED>>\n\t<TELL \"You can't.\" \" It's stuck tight.\" CR>)>>"
  },
  "OFFICE-BACK-DOOR-F": {
   "name": "OFFICE-BACK-DOOR-F",
   "file": "places.zil",
   "line": 848,
   "endLine": 855,
   "source": "<ROUTINE OFFICE-BACK-DOOR-F ()\n <COND (<GO-AWAY> <RTRUE>)\n       (<AND <VERB? GIVE SGIVE>\t\t;\"GIVE NOTE BACK\"\n\t     <OR <DOBJ? THREAT-NOTE> <IOBJ? THREAT-NOTE>>>\n\t<COND (<LOC ,LINDER>\n\t       <PERFORM ,V?GIVE ,THREAT-NOTE ,LINDER>\n\t       <RTRUE>)\n\t      (T <TELL \"It's too late to give Linder anything.\" CR>)>)>>"
  },
  "LAWN-F": {
   "name": "LAWN-F",
   "file": "places.zil",
   "line": 884,
   "endLine": 886,
   "source": "<ROUTINE LAWN-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"The lawn is well manicured.\" CR>)>>"
  },
  "MONICA-ROOM-F": {
   "name": "MONICA-ROOM-F",
   "file": "places.zil",
   "line": 966,
   "endLine": 976,
   "source": "<ROUTINE MONICA-ROOM-F (\"OPTIONAL\" (RARG <>))\n\t<COND (<==? .RARG ,M-ENTER> <I-PROMPT-2>)\n\t      (<==? .RARG ,M-LOOK>\n\t       <TELL\n\"On one side is a modern-style bed, with piles of well-thumbed detective\nstories stacked on the table beside it. Opposite the bed is a long\ndressing table that seems to serve also as desk and workbench. In the\ncorner sits a small table for a portable phonograph and records, and a\nbook case with more books and pulps. Movie posters cover the walls. A\nhandsome door with cedar veneer leads north, and a door and window face\noutside.\" CR>)>>"
  },
  "MONICA-TABLE-F": {
   "name": "MONICA-TABLE-F",
   "file": "places.zil",
   "line": 987,
   "endLine": 998,
   "source": "<ROUTINE MONICA-TABLE-F ()\n <COND (<VERB? EXAMINE LOOK-INSIDE LOOK-ON SEARCH>\n\t<COND (<AND <IN? ,MEDICAL-REPORT ,MONICA-ROOM>\n\t\t    <==? ,P-ADVERB ,W?CAREFULLY>>\n\t       <FCLEAR ,TUMOR ,INVISIBLE>\n\t       <FCLEAR ,MEDICAL-REPORT ,INVISIBLE>\n\t       <THIS-IS-IT ,MEDICAL-REPORT>\n\t       <TELL\n\"Among make-up, letters, and tools, you find a medical report.\" CR>)\n\t      (T <TELL\n\"This table is pretty messy. Anyone but Monica would have a tough time\nfinding anything on it.\" CR>)>)>>"
  },
  "CAN-HEAR-RECORD?": {
   "name": "CAN-HEAR-RECORD?",
   "file": "places.zil",
   "line": 1029,
   "endLine": 1034,
   "source": "<ROUTINE CAN-HEAR-RECORD? ()\n <COND (<AND ,TUNE-ON\n\t     <OR <AND <DOBJ? MONICA-DOOR> <==? ,HERE ,HALL-2>>\n\t\t <AND <DOBJ? MONICA-BATH-DOOR> <==? ,HERE ,BATHROOM>>\n\t\t <AND <DOBJ? MONICA-BACK-DOOR> <==? ,HERE ,BACK-YARD>>>>\n\t<RTRUE>)>>"
  },
  "RECORDS-F": {
   "name": "RECORDS-F",
   "file": "places.zil",
   "line": 1043,
   "endLine": 1057,
   "source": "<ROUTINE RECORDS-F (\"AUX\" TUNE)\n\t <COND (<VERB? PLAY LISTEN>\n\t\t<TELL\n\"You pick a record at random and start it playing. It's \\\"\">\n\t\t<REPEAT ()\n\t\t\t<SET TUNE <PICK-ONE ,SONG-TABLE>>\n\t\t\t<COND (<AND ,TUNE-ON <==? .TUNE ,TUNE-ON>> T)\n\t\t\t      (T <RETURN>)>>\n\t\t<SETG TUNE-ON .TUNE>\n\t\t<TELL ,TUNE-ON \".\\\"\" CR>\n\t\t<ENABLE <QUEUE I-TUNE-OFF 4>>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"It's a large and varied record collection. Monica's not very\nchoosy about her music.\" CR>)>>"
  },
  "I-TUNE-OFF": {
   "name": "I-TUNE-OFF",
   "file": "places.zil",
   "line": 1059,
   "endLine": 1074,
   "source": "<ROUTINE I-TUNE-OFF (\"AUX\" TBL)\n\t <COND (<==? ,HERE ,MONICA-ROOM>\n\t\t<TELL\n\"The record is over, and not too soon.\" CR>\n\t\t<COND (<AND <IN? ,MONICA ,HERE> <NOT ,MONICA-TIED-TO>>\n\t\t       <TELL\n\"Monica walks over to the phonograph and puts the record away. Then she\nchooses another one and starts it up. It's \\\"\">\n\t\t       <SETG TUNE-ON <PICK-ONE ,SONG-TABLE>>\n\t\t       <TELL ,TUNE-ON \".\\\"\" CR>\n\t\t       <ENABLE <QUEUE I-TUNE-OFF 4>>)>\n\t\t<RTRUE>)\n\t       (<AND <IN? ,MONICA ,MONICA-ROOM> <NOT ,MONICA-TIED-TO>>\n\t\t<SETG TUNE-ON <PICK-ONE ,SONG-TABLE>>\n\t\t<ENABLE <QUEUE I-TUNE-OFF 4>>\n\t\t<RFALSE>)>>"
  },
  "MASTER-BATH-COUNTER-F": {
   "name": "MASTER-BATH-COUNTER-F",
   "file": "places.zil",
   "line": 1144,
   "endLine": 1146,
   "source": "<ROUTINE MASTER-BATH-COUNTER-F ()\n <COND (<VERB? EXAMINE LOOK-INSIDE>\n\t<TELL \"On the counter are a shaver, tooth paste, and so on.\" CR>)>>"
  },
  "SHOWER-F": {
   "name": "SHOWER-F",
   "file": "places.zil",
   "line": 1207,
   "endLine": 1213,
   "source": "<ROUTINE SHOWER-F ()\n \t<COND (<AND <==? 1 <GET ,P-PRSO 0>> ;\"only one dir. object\"\n\t\t    <VERB? TAKE THROUGH>>\n\t\t<TELL\n\"Anyone can see that you really need a shower. In fact, this is\none of your better ideas so far on this case. But your clothes would get\nawful wet, and you must have better things to do.\" CR>)>>"
  },
  "LINDER-ROOM-F": {
   "name": "LINDER-ROOM-F",
   "file": "places.zil",
   "line": 1265,
   "endLine": 1276,
   "source": "<ROUTINE LINDER-ROOM-F (\"OPTIONAL\" (ARG <>))\n\t<COND (<==? .ARG ,M-ENTER>\n\t       <I-PROMPT-2>)\n\t      (<==? .ARG ,M-LOOK> ;<VERB? LOOK>\n\t       <TELL\n\"The bedroom is elegant but not tidy. A four-poster bed, chair and\ndresser, made of teak and mahogany, look hand-crafted. There are doors\non the west and south walls, and a door and window to the east look\noutside. Clothes and newspapers are scattered about. It seems that\nLinder misse\"\n<COND (<FSET? ,CORPSE ,INVISIBLE> \"s\") (T \"d\")>\n\" the woman's touch.\" CR>)>>"
  },
  "MASTER-BEDROOM-DRESSER-F": {
   "name": "MASTER-BEDROOM-DRESSER-F",
   "file": "places.zil",
   "line": 1311,
   "endLine": 1318,
   "source": "<ROUTINE MASTER-BEDROOM-DRESSER-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The dresser is a beautiful piece of cabinetry.\" CR>)\n\t       (<VERB? LOOK-INSIDE SEARCH OPEN>\n\t\t<TELL\n\"You open all the drawers and find only shirts, socks, underwear, hankies,\nand so on. What a disappointment.\" CR>)>>"
  },
  "LIVING-ROOM-F": {
   "name": "LIVING-ROOM-F",
   "file": "places.zil",
   "line": 1344,
   "endLine": 1369,
   "source": "<ROUTINE LIVING-ROOM-F (\"OPTIONAL\" (RARG <>))\n\t <COND ;(<AND ,RADIO-ON <==? .RARG ,M-ENTER>>\n\t\t<TELL \"The radio is playing.\" CR>)\n\t       (<==? .RARG ,M-LOOK>\n\t\t;<SETG WELCOMED T>\n\t\t<TELL\n\"A huge fieldstone fireplace on the south wall holds a blazing fire,\nfilling the living room with warmth and light. Grouped in front of the\nfire are a glass-topped coffee table and a rattan davenport and club\nchair, with cushions covered in a print showing bamboo plants in the\nstyle of Japanese brush-painting. A lamp with a printed shade and a\ntelephone sit on the table.\" CR>\n\t\t;<COND (<IN? ,MONICA ,SOFA>\n\t\t       <TELL\n\"Monica is sitting on the davenport, one arm stretched along its back\nand the other holding a cigarette in the air. \" CR>)\n\t\t      (<IN? ,MONICA ,LIVING-ROOM>\n\t\t       <TELL\n\"Monica is leaning against the mantle, looking at the fire. \" CR>)>\n\t\t<TELL\n\"On the north wall are a liquor cabinet and a console radio made of\nlight-colored wood. \">\n\t\t<COND (,RADIO-ON <TELL \"The radio is playing. \">)>\n\t\t<DDESC\n\"A single door in the east wall is \" ,LINDER-DOOR \",\nand at the west end of the room is a double door.\">)>>"
  },
  "CAN-HEAR-RADIO?": {
   "name": "CAN-HEAR-RADIO?",
   "file": "places.zil",
   "line": 1428,
   "endLine": 1436,
   "source": "<ROUTINE CAN-HEAR-RADIO? ()\n <COND (<AND ,RADIO-ON\n\t     <OR <AND <DOBJ? DINING-DOOR>\t<==? ,HERE ,FRONT-YARD>>\n\t\t <AND <DOBJ? FRONT-DOOR>\t<==? ,HERE ,FRONT-PORCH>>\n\t\t <AND <DOBJ? LIVING-DINING-DOOR> <==? ,HERE ,DINING-ROOM>>\n\t\t <AND <DOBJ? KITCHEN-DINING-DOOR KITCHEN-HALL-DOOR>\n\t\t\t\t\t\t<==? ,HERE ,KITCHEN>>\n\t\t <AND <DOBJ? LINDER-DOOR>\t<==? ,HERE ,LINDER-ROOM>>>>\n\t<RTRUE>)>>"
  },
  "RADIO-F": {
   "name": "RADIO-F",
   "file": "places.zil",
   "line": 1489,
   "endLine": 1522,
   "source": "<ROUTINE RADIO-F (\"OPTIONAL\" (ARG <>) \"AUX\" PGM)\n <COND (<AND ,RADIO-ON <VERB? LISTEN>>\n\t<SET PGM <GET ,RADIO-TABLE <+ 1 </ <- ,PRESENT-TIME 480> 15>>>>\n\t<TELL \"You can hardly avoid it. \">\n\t<COND (<==? .PGM ,RADIO-ON> <TELL \"It's \">)\n\t      (T <TELL \"You\" \" spin the dial and find \">)>\n\t<SETG RADIO-ON .PGM>\n\t<TELL ,RADIO-ON \".\" CR>)\n       (<VERB? LAMP-ON PLAY LISTEN>\n\t<COND (,RADIO-ON <TELL \"It's already on. You\">)\n\t      (T <TELL \"You turn on the radio,\">)>\n\t<SETG RADIO-ON <GET ,RADIO-TABLE <+ 1 </ <- ,PRESENT-TIME 480> 15>>>>\n\t<TELL \" spin the dial and find \" ,RADIO-ON \".\" CR>)\n       (<VERB? LAMP-OFF>\n\t<COND (<AND ,RADIO-ON <IN? ,MONICA ,HERE>>\n\t       <TELL\n\"Monica looks at you with disgust as you turn off the radio.\" CR>)\n\t      (T <TELL \"The radio is now off.\" CR>)>\n\t<SETG RADIO-ON <>>\n\t<RTRUE>)\n       (<VERB? TURN-UP>\n\t<COND (,RADIO-ON\n\t       <TELL\n\"The radio is already pretty loud. Any louder would probably\nmake the neighbors complain.\" CR>)\n\t      (T <TELL \"It's not on!\" CR>)>)\n       (<VERB? TURN-DOWN>\n\t<COND (,RADIO-ON\n\t       <COND (<AND <IN? ,MONICA ,HERE> <NOT ,MONICA-TIED-TO>>\n\t\t      <TELL\n\"Monica stops you from turning down the volume. She seems strangely\ninterested in the radio program.\" CR>)\n\t\t     (T <TELL \"You can't.\" CR>)>)\n\t      (T <TELL \"It's not on!\" CR>)>)>>"
  },
  "SILVERWARE-F": {
   "name": "SILVERWARE-F",
   "file": "places.zil",
   "line": 1635,
   "endLine": 1646,
   "source": "<ROUTINE SILVERWARE-F ()\n <COND ;(<VERB? COUNT>\n\t <TELL \"There are 16 complete place settings.\" CR>)\n       ;(<VERB? EXAMINE>\n\t<TELL\n\"The silver has fine quality and design, not to mention exotic shapes\nfrom Asia.\" CR>)\n       (<VERB? TAKE>\n\t<TELL\n\"You could probably hock this stuff for a bundle, but you'd never get\naway with it, since the butler will no doubt count it again when\nyou leave.\" CR>)>>"
  },
  "FOODS-F": {
   "name": "FOODS-F",
   "file": "places.zil",
   "line": 1701,
   "endLine": 1704,
   "source": "<ROUTINE FOODS-F ()\n\t <COND (<VERB? EAT TAKE>\n\t\t<TELL\n\"Your parents must have taught you better manners than that.\" CR>)>>"
  },
  "K-CLOCK-F": {
   "name": "K-CLOCK-F",
   "file": "places.zil",
   "line": 1715,
   "endLine": 1721,
   "source": "<ROUTINE K-CLOCK-F ()\n <COND (<VERB? EXAMINE>\n\t<TELL \"The time on the kitchen clock is \">\n\t<TIME-PRINT ,PRESENT-TIME>\n\t<CRLF>)\n       (<VERB? LISTEN>\n\t<TELL \"The clock is humming electrically.\" CR>)>>"
  },
  "APPLIANCE-F": {
   "name": "APPLIANCE-F",
   "file": "places.zil",
   "line": 1772,
   "endLine": 1779,
   "source": "<ROUTINE APPLIANCE-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"It's as modern as yesterday, like everything in the kitchen.\" CR>)\n\t       (<VERB? LAMP-OFF LAMP-ON USE>\n\t\t<TELL\n\"The butler is probably very proud and jealous of these sparkling\nmodern gadgets, and he wouldn't like you using them.\" CR>)>>"
  },
  "HALL-1-F": {
   "name": "HALL-1-F",
   "file": "places.zil",
   "line": 1805,
   "endLine": 1814,
   "source": "<ROUTINE HALL-1-F (\"OPTIONAL\" RARG)\n\t<COND (<EQUAL? .RARG ;,M-ENTER ,M-LOOK ;,M-OBJDESC>\n\t       <TELL\n\"This is the north end of the central hallway.\nJust to the north, you can see warm yellow light in the living room.\">\n\t       <COND (<AND <IN? ,MONICA ,LIVING-ROOM>\n\t\t\t   <IN? ,LINDER ,LIVING-ROOM>\n\t\t\t   <NOT ,LINDER-FOLLOWS-YOU>>\n\t\t      <TELL \" You can hear voices talking excitedly.\">)>\n\t       <CRLF>)>>"
  },
  "HALL-2-F": {
   "name": "HALL-2-F",
   "file": "places.zil",
   "line": 1832,
   "endLine": 1844,
   "source": "<ROUTINE HALL-2-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is near the middle of the central hallway.\nAt the north end, you can see the living room; to the east and west are\nbedroom doors. \">\n\t\t<COND (<FSET? ,MONICA-DOOR ,OPENBIT>\n\t\t       <COND (<FSET? ,BUTLER-DOOR ,OPENBIT>\n\t\t\t      <TELL \"Both doors are open.\" CR>)\n\t\t\t     (T <TELL \"The door to the east is open.\" CR>)>)\n\t\t      (<FSET? ,BUTLER-DOOR ,OPENBIT>\n\t\t       <TELL \"The door to the west is open.\" CR>)\n\t\t      (T <TELL \"Both doors are closed.\" CR>)>)>>"
  },
  "BUTLER-ROOM-F": {
   "name": "BUTLER-ROOM-F",
   "file": "places.zil",
   "line": 1870,
   "endLine": 1878,
   "source": "<ROUTINE BUTLER-ROOM-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<DDESC\n\"This is the bedroom of the butler, Mr. Phong, and is very simply\nfurnished. A single bed, flanked by bare wooden end tables, sits below a\nclosed window on the west end of the room. The floor is hardwood, with no\nrug. The only exit is a door to the east, which is \" ,BUTLER-DOOR \".\">\n\t\t<DDESC\n\"Another door, now \" ,BUTLER-BATH-DOOR\", must lead to a private bathroom.\">)>>"
  },
  "BUTLER-BATH-F": {
   "name": "BUTLER-BATH-F",
   "file": "places.zil",
   "line": 1918,
   "endLine": 1923,
   "source": "<ROUTINE BUTLER-BATH-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<OR <==? .RARG ,M-LOOK>\n\t\t    <AND <NOT .RARG> <VERB? EXAMINE>>>\n\t\t<DDESC\n\"This is Mr. Phong's bathroom, with the usual plumbing and not much\nelse. The door at the south side of the room is \" ,BUTLER-BATH-DOOR \".\">)>>"
  },
  "ENTRY-F": {
   "name": "ENTRY-F",
   "file": "places.zil",
   "line": 1962,
   "endLine": 1975,
   "source": "<ROUTINE ENTRY-F (\"OPTIONAL\" (RARG <>))\n\t <COND ;(<==? .RARG ,M-ENTER>\n\t\t<COND (<AND <NOT <IN? ,PHONG ,ENTRY>>\n\t\t\t    <NOT ,WELCOMED>\n\t\t\t    <FSET? ,CORPSE ,INVISIBLE>>\n\t\t       <TELL\n\"The butler appears from a hallway to the east.\" CR>\n\t\t       <WELCOME>)>)\n\t       (<==? .RARG ,M-LOOK>\n\t\t<DDESC\n\"Here in the entry is a small Shinto shrine, with a hanging scroll and\nan arrangement of flowers, as well as a coat closet and a platform for\nstoring shoes. You can see a hallway to the east. The front door, on the\nwest wall, is \" ,FRONT-DOOR \".\">)>>"
  },
  "FLOWER-F": {
   "name": "FLOWER-F",
   "file": "places.zil",
   "line": 1985,
   "endLine": 1990,
   "source": "<ROUTINE FLOWER-F ()\n <COND (<VERB? PICK>\n\t<TELL \"What? And spoil the arrangement?!\" CR>)\n       (<VERB? SMELL>\n\t<TELL\n\"Someone chose these flowers for looks, not aroma.\" CR>)>>"
  },
  "SCROLL-F": {
   "name": "SCROLL-F",
   "file": "places.zil",
   "line": 2001,
   "endLine": 2020,
   "source": "<ROUTINE SCROLL-F ()\n\t<COND (<VERB? EXAMINE READ>\n\t       <TELL\n\"The scroll is written with a fine brush. Freely translated, it reads:|\n|\n\">\n\t       <PUT 0 8 <BOR <GET 0 8> 2>>\n\t       <TELL\n\"The WITNESS: An INTERLOGIC Mystery|\n        from Infocom, Inc.|\n          by Stu Galley|\n       based on an idea by|\n   Marc Blank and Dave Lebling|\n Copyright (c) 1983 Infocom, Inc.|\n       All rights reserved.|\n      WITNESS and INTERLOGIC|\n  are trademarks of Infocom, Inc.|\n\" CR>\n\t       <PUT 0 8 <BAND <GET 0 8> -3>>\n\t       <RTRUE>)>>"
  },
  "SHOE-PLATFORM-F": {
   "name": "SHOE-PLATFORM-F",
   "file": "places.zil",
   "line": 2031,
   "endLine": 2039,
   "source": "<ROUTINE SHOE-PLATFORM-F ()\n <COND (<VERB? EXAMINE LOOK-INSIDE SEARCH>\n\t<TELL\n\"Several pairs of shoes are in a row, ready for inspection.\">\n\t<COND (<AND <IN? ,MUDDY-SHOES ,SHOE-PLATFORM>\n\t\t    <NOT <FSET? ,MUDDY-SHOES ,INVISIBLE>>>\n\t       ;<FCLEAR ,MUDDY-SHOES ,INVISIBLE>\n\t       <TELL \" One pair of boots would not pass.\">)>\n\t<CRLF>)>>"
  },
  "OTHER-SHOES-F": {
   "name": "OTHER-SHOES-F",
   "file": "places.zil",
   "line": 2049,
   "endLine": 2054,
   "source": "<ROUTINE OTHER-SHOES-F ()\n <COND (<VERB? EXAMINE>\n\t<TELL\n\"They're just ordinary shoes, nothing to get excited about.\" CR>)\n       (<VERB? TAKE>\n\t<TELL \"That wouldn't do you any good.\" CR>)>>"
  },
  "FRONT-DOOR-F": {
   "name": "FRONT-DOOR-F",
   "file": "places.zil",
   "line": 2065,
   "endLine": 2081,
   "source": "<ROUTINE FRONT-DOOR-F (\"AUX\" (VAL <>))\n\t<COND (<VERB? KNOCK>\n\t       <COND (<AND <==? ,PRSO ,FRONT-DOOR>\n\t\t\t   <NOT ,WELCOMED>\n\t\t\t   <FSET? ,CORPSE ,INVISIBLE>>\n\t\t      <COND (<==? ,HERE ,FRONT-PORCH> <WELCOME>)\n\t\t\t    (T <TELL \"You can't reach the front door.\"CR>)>)\n\t\t     (<INHABITED? <DOOR-ROOM ,HERE ,FRONT-DOOR>>\n\t\t      <TELL \"A muffled voice says, \\\"Come in!\\\"\" CR>)\n\t\t     (T\n\t\t      <TELL \"There is no answer at the door.\" CR>)>)\n\t      (<VERB? WALK-TO>\n\t       <COND (<EQUAL? ,HERE ,DRIVEWAY-ENTRANCE ,GARAGE>\n\t\t      <SET VAL T> <GOTO ,DRIVEWAY>)>\n\t       <COND (<EQUAL? ,HERE ,DRIVEWAY ,FRONT-YARD>\n\t\t      <SET VAL T> <GOTO ,FRONT-PORCH>)>\n\t       .VAL)>>"
  },
  "CLOSET-STUFF-F": {
   "name": "CLOSET-STUFF-F",
   "file": "places.zil",
   "line": 2122,
   "endLine": 2127,
   "source": "<ROUTINE CLOSET-STUFF-F ()\n\t\t <COND (<VERB? TAKE MOVE USE>\n\t\t\t<TELL \"You have no need for them.\" CR>)\n\t\t       (<VERB? READ SEARCH EXAMINE>\n\t\t\t<TELL\n\t\"You go through\" THE-PRSO \" and find nothing of interest.\" CR>)>>"
  },
  "OFFICE-F": {
   "name": "OFFICE-F",
   "file": "places.zil",
   "line": 2172,
   "endLine": 2211,
   "source": "<ROUTINE OFFICE-F (\"OPTIONAL\" (RARG <>))\n\t ;<SETG WELCOMED T>\n\t <COND (<AND <==? .RARG ,M-BEG>\n\t\t     ,LINDER-FOLLOWS-YOU\n\t\t     <NOT <DOBJ? CLOCK-WIRES LINDER>>\n\t\t     <VERB? WALK FOLLOW HIDE-BEHIND THROUGH>>\n\t\t<TELL\n\"Linder says with frustration, \\\"I wish you wouldn't try to go off while\nwe're trying to talk.\\\"\" CR>\n\t\t<RTRUE>)\n\t       (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is obviously the office of Mr. Linder's company, Pacific Trade\nAssociates. \">\n\t\t<OFFICE-DESK-F ,M-OBJDESC>\n\t\t<TELL\n\"Behind it is a large ornately-carved chair, like a cruiser escorting a\nbattle ship\">\n\t\t<COND (<IN? ,LINDER ,CARVED-CHAIR>\n\t\t       <TELL \", where Linder sits imperiously\">)>\n\t\t<TELL\n\". A simple wooden chair, polished smooth by visitors,\nflanks the desk on the other side. On the north wall is a lounge,\nupholstered in green velvet and a bit lumpy, with a framed wood-block\npicture hanging over it. On the outside wall, next to a door and window,\nstands a grandfather clock, ticking relentlessly. A file cabinet stands\nin the corner.\" CR>\n\t\t<COND (<FSET? ,OFFICE-DOOR ,OPENBIT>\n\t\t       <TELL\n\"The door to the interior hallway is open.\" CR>)>\n\t\t;<COND (<FSET? ,W.C.-DOOR ,OPENBIT>\n\t\t       <TELL\n\"The door to a small lavatory is open.\" CR>)>\n\t\t<COND (<FSET? ,OFFICE-BACK-DOOR ,OPENBIT>\n\t\t       <TELL\n\"The door leading outside is open.\" CR>)>\n\t\t<COND (<FSET? ,OFFICE-WINDOW ,OPENBIT>\n\t\t       <TELL\n\"The window facing the back yard is open.\" CR>)>\n\t\t<RTRUE>)>>"
  },
  "OFFICE-DESK-F": {
   "name": "OFFICE-DESK-F",
   "file": "places.zil",
   "line": 2223,
   "endLine": 2241,
   "source": "<ROUTINE OFFICE-DESK-F (\"OPTIONAL\" (ARG <>))\n\t <COND (<OR <==? .ARG ,M-OBJDESC>\n\t\t    <AND <NOT .ARG> <VERB? EXAMINE LOOK-INSIDE LOOK-ON>>>\n\t\t<TELL\n\"At the west end of the office, a massive desk of teak and mahogany\nfaces toward the window. It has no drawers, but the top is covered with\npiles of letters, some newspapers, a telephone, and various souvenirs\nfrom the Far East.\">\n\t\t<COND (<==? ,MONICA-TIED-TO ,OFFICE-DESK>\n\t\t       <TELL\n\" Monica is fastened to the desk with a \" D ,MONICA-TIED-WITH \".\">)>\n\t\t<CRLF>\n\t\t<RTRUE>)\n\t       (<VERB? LOOK-UNDER>\n\t\t<TELL\n\"You can see dirt and grime, old chewing gum in various colors, and a pair of\nblack wires going from a button into the floor.\" CR>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<TELL \"You can't. It doesn't have drawers.\" CR>)>>"
  },
  "NEWSPAPERS-F": {
   "name": "NEWSPAPERS-F",
   "file": "places.zil",
   "line": 2257,
   "endLine": 2266,
   "source": "<ROUTINE NEWSPAPERS-F ()\n <COND (<VERB? TAKE MOVE USE>\n\t<TELL \"You have no need for them.\" CR>)\n       (<VERB? READ SEARCH EXAMINE>\n\t<TELL\n\"Today's L.A. Times has the usual sort of stories: secret records of the\npolice intelligence squad were seized in connection with an attempt to\nassassinate private detective Harry Raymond; \\\"Two Officers Die in Battle\nWith Maniac\\\"; \\\"Slayer of Tijuana Girl Executed under Fugitive Law\\\"; and\n\\\"Austria Near Hitler Yoke.\\\"\" CR>)>>"
  },
  "CARVED-CHAIR-F": {
   "name": "CARVED-CHAIR-F",
   "file": "places.zil",
   "line": 2280,
   "endLine": 2308,
   "source": "<ROUTINE CARVED-CHAIR-F (\"OPTIONAL\" (ARG <>))\n <COND (<==? .ARG ,M-OBJDESC> <PRINT-CONT ,CARVED-CHAIR> <RTRUE>)\n       (.ARG <RFALSE>)\n       (<OR <VERB? EXAMINE>\n\t    <AND <VERB? SEARCH-OBJECT-FOR> ;<IOBJ? GLOBAL-HOLE>>>\n\t<COND ;(<OR <VERB? SEARCH-OBJECT-FOR>\n\t\t   <==? ,HOLE <FIRST? ,CARVED-CHAIR>>>\n\t       <FCLEAR ,HOLE ,INVISIBLE>\n\t       <FCLEAR ,GLOBAL-HOLE ,INVISIBLE>\n\t       <TELL\n\"The chair looks ancient, but it has a fresh hole in it, small and round.\"\nCR>)\n\t      (T\n\t       <TELL\n\"The chair looks like teak, covered with carvings of vines and slithery\ncreatures that you wouldn't like to meet in a jungle.\" CR>\n\t       <RTRUE>)>)\n       (<AND <FSET? ,CORPSE ,INVISIBLE> ;<IN? ,LINDER ,CARVED-CHAIR>\n\t     <VERB? CLIMB-ON SIT TAKE>\n\t     <==? 1 <GET ,P-PRSO 0>>\t;\"only one dir. object\"\n\t     <==? ,PRSO ,CARVED-CHAIR>>\n\t<TELL \"Linder glares at you. \">\n\t<COND (<IN? ,LINDER ,CARVED-CHAIR>\n\t       <TELL\n\"\\\"I meant that you should sit in the customer's chair, not my lap!\\\" \">)\n\t      (T <TELL\n\"\\\"That's my chair. You take the other one.\\\" \">)>\n\t<TELL \"You are on your own feet again.\" CR>\n\t<RTRUE>)>>"
  },
  "WOODEN-CHAIR-F": {
   "name": "WOODEN-CHAIR-F",
   "file": "places.zil",
   "line": 2350,
   "endLine": 2358,
   "source": "<ROUTINE WOODEN-CHAIR-F (\"OPTIONAL\" (ARG <>))\n <COND (<AND <NOT .ARG>\n\t     <VERB? CLIMB-ON SIT TAKE>\n\t     <==? 1 <GET ,P-PRSO 0>>\t;\"only one dir. object\"\n\t     <==? ,PRSO ,WOODEN-CHAIR>>\n\t<MOVE ,PLAYER ,WOODEN-CHAIR>\n\t<TELL \"You are now sitting on the \" D ,PRSO \".\" CR>\n\t<COND (<NOT ,LINDER-EXPLAINED> <I-LINDER-EXPLAIN>)>\n\t<RTRUE>)>>"
  },
  "GENERIC-CHAIR-F": {
   "name": "GENERIC-CHAIR-F",
   "file": "places.zil",
   "line": 2365,
   "endLine": 2374,
   "source": "<ROUTINE GENERIC-CHAIR-F (OBJ)\n <COND (<AND <VERB? DISEMBARK> <NOT <IN? <LOC ,WINNER> ,ROOMS>>>\n\t<LOC ,WINNER>)\n       (<VERB? ASK-ABOUT ASK-CONTEXT-ABOUT FIND TELL-ME WHAT>\n\t,GENERIC-CHAIR)\n       (<NOT <OR <EQUAL? ,HERE ,MONICA-ROOM ,LINDER-ROOM ,LIVING-ROOM>\n\t\t <EQUAL? ,HERE ,DINING-ROOM ,KITCHEN ,OFFICE>>>\n\t<SETG P-WON <>>\n\t<TELL \"(You can't see any \" \"chair\" \" here!)\" CR>\n\t,NOT-HERE-OBJECT)>>"
  },
  "PAPERS-F": {
   "name": "PAPERS-F",
   "file": "places.zil",
   "line": 2393,
   "endLine": 2403,
   "source": "<ROUTINE PAPERS-F ()\n <COND (<VERB? ;BURN EXAMINE LOOK-INSIDE READ TAKE>\n\t<FSET ,PAPERS ,TOUCHBIT>\n\t<COND (<LOC ,LINDER> <PERFORM ,V?ASK-ABOUT ,LINDER ,PAPERS> <RTRUE>)\n\t      (T\n\t       <TELL \"You look \">\n\t       <COND (<==? ,P-ADVERB ,W?CAREFULLY>\n\t\t      <TELL \"more thoroughly through the files and still\">)\n\t\t     (T <TELL \"quickly through the files but\">)>\n\t       <TELL\n\" find nothing suspicious, so you decide to leave them alone.\" CR>)>)>>"
  },
  "CLOCK-F": {
   "name": "CLOCK-F",
   "file": "places.zil",
   "line": 2436,
   "endLine": 2492,
   "source": "<ROUTINE CLOCK-F ()\n <COND (<AND <NOT <EQUAL? ,HERE ,OFFICE>>\n\t     <NOT <VERB? ASK-ABOUT ASK-CONTEXT-ABOUT>>\n\t     <NOT <VERB? FIND TELL-ME WHAT>>>\n\t<SETG P-WON <>>\n\t<TELL \"(You can't see any \" \"clock\" \" here!)\" CR>)\n       (<VERB? EXAMINE>\n\t<TELL\n\"This is a full-blown \\\"grandfather\\\" clock, seven feet tall, run by\nweights and regulated by a pendulum, whose dial shows day, date, and\nphase of the moon besides the time. According to the dial, today is \">\n\t<COND (<L? ,PRESENT-TIME 720> <TELL \"Friday the 18\">)\n\t      (T <TELL \"Saturday the 19\">)>\n\t<TELL \"th, the moon is just past full, and the time is now \">\n\t<TIME-PRINT ,PRESENT-TIME>\n\t<COND (,SHOT-FIRED\n\t       <FCLEAR ,CLOCK-POWDER ,INVISIBLE>\n\t       ;<FCLEAR ,CLOCK-POWDER ,NDESCBIT>\n\t       <COND (<==? ,P-ADVERB ,W?CAREFULLY>\n\t\t      <TELL\n\" There is some kind of powder around the keyhole.\">)\n\t\t     (T <TELL\n\" And you notice that the keyhole looks darker than normal.\">)>)>\n\t<CRLF>)\n       (<VERB? LISTEN>\n\t<TELL \"The clock is ticking relentlessly.\" CR>)\n       (<AND <VERB? LOOK-INSIDE OPEN SEARCH>\n\t     <NOT <FSET? ,CLOCK ,LOCKED>>>\n\t<COND (<AND <VERB? LOOK-INSIDE SEARCH> <NOT <FSET? ,CLOCK ,OPENBIT>>>\n\t       <TELL \"You'll have to open it first.\" CR>\n\t       <RTRUE>)>\n\t<FSET ,CLOCK ,OPENBIT>\n\t<TELL \"As you'd expect, the case holds a long pendulum.\">\n\t<COND (<IN? ,INSIDE-GUN ,CLOCK>\n\t       <FCLEAR ,INSIDE-GUN ,INVISIBLE>\n\t       <TELL\n\" The surprise is a hand gun, pointing out into the room.\">)>\n\t<TELL \" You can also see some relays and things.\" CR>)\n       (<VERB? LOOK-UNDER>\n\t<TELL\n\"All you see is a pair of green wires going from the case into\nthe floor.\" CR>)\n       (<AND <VERB? LOCK> <==? ,PRSO ,CLOCK>>\n\t<COND (<IN? ,CLOCK-KEY ,WINNER>\n\t       <FSET ,CLOCK ,LOCKED>\n\t       <SETG USED-CLOCK-KEY T>\n\t       <TELL \"The door of the clock is now locked.\" CR>)\n\t      (T <TELL \"You don't have the right key.\" CR>)>\n\t<RTRUE>)\n       (<AND <VERB? UNLOCK> <==? ,PRSO ,CLOCK>>\n\t<COND (<IN? ,CLOCK-KEY ,WINNER>\n\t       <FCLEAR ,CLOCK ,LOCKED>\n\t       <SETG USED-CLOCK-KEY T>\n\t       <TELL \"The door of the clock is now unlocked.\" CR>)\n\t      (T <TELL \"You don't have the right key.\" CR>)>)\n       (<VERB? PUSH MOVE>\n\t<TELL \"It seems to be bolted to the floor.\" CR>)>>"
  },
  "KEY-HOLE-F": {
   "name": "KEY-HOLE-F",
   "file": "places.zil",
   "line": 2503,
   "endLine": 2519,
   "source": "<ROUTINE KEY-HOLE-F ()\n <COND (<AND <EQUAL? ,WINNER ,PLAYER>\n\t     <VERB? BRUSH EXAMINE KISS LOOK-INSIDE PUT RUB RUB-OVER SMELL>>\n\t<SETG PLAYER-NEAR-SHOT ,PRESENT-TIME>)>\n <COND (<VERB? EXAMINE>\n\t<TELL\n\"It's an impressive keyhole, wrapped in a fine brass escutcheon.\">\n\t<COND (,SHOT-FIRED\n\t       <FCLEAR ,CLOCK-POWDER ,INVISIBLE>\n\t       <TELL \" There is some kind of powder around it.\">)>\n\t<CRLF>)\n       (<AND <VERB? LOOK-INSIDE> <NOT <FSET? ,CLOCK ,OPENBIT>>>\n\t<TELL \"You can't see anything in there but darkness.\" CR>)\n       (<AND <VERB? PUT> ,LINDER-FOLLOWS-YOU>\n\t<TELL\n\"Linder says, \\\"I wish you'd pay attention to me instead of that clock.\\\"\"\nCR>)>>"
  },
  "CLOCK-POWDER-F": {
   "name": "CLOCK-POWDER-F",
   "file": "places.zil",
   "line": 2544,
   "endLine": 2557,
   "source": "<ROUTINE CLOCK-POWDER-F ()\n <COND (<VERB? ANALYZE>\n\t<FCLEAR ,CLOCK-POWDER ,NDESCBIT>\n\t<FCLEAR ,CLOCK-POWDER ,INVISIBLE>\n\t<DO-ANALYZE>)\n       (<VERB? EXAMINE>\n\t<TELL \"It looks like cheap gunpowder.\" CR>)\n       (<VERB? SMELL>\n\t<TELL \"It has a pungent smell, like cheap gunpowder.\" CR>)\n       (<AND <==? 1 <GET ,P-PRSO 0>>\t;\"only one dir. object\"\n\t     <VERB? TAKE>>\n\t<FCLEAR ,CLOCK-POWDER ,INVISIBLE>\n\t<FCLEAR ,CLOCK-POWDER ,NDESCBIT>\n\t<RFALSE>)>>"
  },
  "CLOCK-WIRES-F": {
   "name": "CLOCK-WIRES-F",
   "file": "places.zil",
   "line": 2568,
   "endLine": 2572,
   "source": "<ROUTINE CLOCK-WIRES-F ()\n <COND (<VERB? FOLLOW>\n\t<TELL \"The wires go into the floor and disappear.\" CR>)\n       (<VERB? TAKE>\n\t<TELL \"You can't.\" \" They're stuck tight.\" CR>)>>"
  },
  "OFFICE-BUTTON-F": {
   "name": "OFFICE-BUTTON-F",
   "file": "places.zil",
   "line": 2593,
   "endLine": 2612,
   "source": "<ROUTINE OFFICE-BUTTON-F ()\n\t <COND (<VERB? FIND>\n\t\t<TELL \"It's on the edge of the desk.\" CR>)\n\t       (<VERB? PUSH RING>\n\t\t<COND (,BUTTON-FIXED\n\t\t       <PERFORM ,V?PUSH ,BUTTON>\n\t\t       <RTRUE>)\n\t\t      (,SHOT-FIRED\n\t\t       <SETG PLAYER-PUSHED-BUTTON T>\n\t\t       <TELL\n\"You hear a clicking sound from the direction of the clock.\" CR>)\n\t\t      (<==? <META-LOC ,LINDER> ,OFFICE>\n\t\t       <TELL\n\"Linder grabs your wrist and looks you hard in the eye.\nThen a wide smile breaks out on his face as he lets go.\n\\\"Sorry if I'm rough, but I don't want any interruptions right now.\\\"\" CR>)\n\t\t      (T\n\t\t       <SETG PLAYER-PUSHED-BUTTON T>\n\t\t       <FIRE-SHOT>\n\t\t       <RTRUE>)>)>>"
  },
  "GARAGE-F": {
   "name": "GARAGE-F",
   "file": "places.zil",
   "line": 2666,
   "endLine": 2682,
   "source": "<ROUTINE GARAGE-F (\"OPTIONAL\" (ARG <>))\n <COND (<==? .ARG ,M-LOOK>\n\t<TELL\n\"The garage, like a car port, has no door to keep the cars in.\nDoors lead north and east.\nThe walls are decorated with spare tires and things. \">\n\t<COND (<FSET? ,MONICA-CAR ,INVISIBLE>\n\t       <COND (<FSET? ,MONICA-CAR ,TOUCHBIT>\n\t\t      <TELL \"The red MG is gone.\">)\n\t\t     (T <TELL\n\"Oil spots on the floor show that a car is often parked here.\">)>)\n\t      (T\n\t       <COND (<FSET? ,MONICA-CAR ,TOUCHBIT>\n\t\t      <TELL \"The red MG is parked here.\">)\n\t\t     (T <TELL\n\"One car is a sporty red MG convertible.\">)>)>\n\t<TELL \" The other car is a dark blue Bentley 3.5-liter sedan.\"CR>)>>"
  },
  "CAR-F": {
   "name": "CAR-F",
   "file": "places.zil",
   "line": 2706,
   "endLine": 2717,
   "source": "<ROUTINE CAR-F (\"OPTIONAL\" (ARG <>))\n <COND (<AND <DOBJ? MONICA-CAR> <FSET? ,MONICA-CAR ,INVISIBLE>>\n\t<TELL \"It's not here.\" CR>)\n       (<AND ,FILM-SEEN <DOBJ? MONICA-CAR> <VERB? RUB>>\n\t<TELL \"The hood is still warm from driving.\" CR>)\n       (<VERB? LOOK-INSIDE>\n\t<TELL\n\"You can barely see a plush interior through the tinted glass, but nothing\nelse of interest.\" CR>)\n       (<VERB? LOCK UNLOCK>\n\t<TELL \"You don't have the right key.\" CR>)\n       (<VERB? THROUGH> <TELL \"The doors are locked.\" CR>)>>"
  },
  "CAR-WINDOW-F": {
   "name": "CAR-WINDOW-F",
   "file": "places.zil",
   "line": 2727,
   "endLine": 2739,
   "source": "<ROUTINE CAR-WINDOW-F ()\n <COND (<NOT <EQUAL? ,HERE ,GARAGE>>\n\t<SETG P-WON <>>\n\t<TELL \"(You can't see any \" \"window\" \" here!)\" CR>)\n       (<VERB? LOOK-INSIDE>\n\t<TELL\n\"You can barely see a plush interior through the tinted glass, but nothing\nelse of interest.\" CR>)\n       (<VERB? MUNG>\n\t<TELL \"Vandalism is for private \">\n\t<COND (<TANDY?> <TELL \"eye\">)\n\t      (T <TELL \"dick\">)>\n\t<TELL \"s, not famous police detectives!\" CR>)>>"
  },
  "GENERIC-CAR-F": {
   "name": "GENERIC-CAR-F",
   "file": "places.zil",
   "line": 2746,
   "endLine": 2753,
   "source": "<ROUTINE GENERIC-CAR-F (OBJ)\n <COND (<EQUAL? ,HERE ,GARAGE> <RFALSE>)\n       (<VERB? ASK-ABOUT ASK-CONTEXT-ABOUT FIND TELL-ME WHAT>\n\t,GENERIC-CAR)\n       (T\n\t<SETG P-WON <>>\n\t<TELL \"(You can't see any \" \"car\" \" here!)\" CR>\n\t,NOT-HERE-OBJECT)>>"
  },
  "WORKSHOP-WIRE-F": {
   "name": "WORKSHOP-WIRE-F",
   "file": "places.zil",
   "line": 2791,
   "endLine": 2797,
   "source": "<ROUTINE WORKSHOP-WIRE-F ()\n <COND (<VERB? EXAMINE>\n\t<TELL \"It looks just like ordinary wire.\" CR>)\n       (<VERB? FIND>\n\t<TELL \"You can find wire here in almost any color you like.\" CR>)\n       (<VERB? FOLLOW>\n\t<TELL \"It just goes around and around the supply spool.\" CR>)>>"
  },
  "SPOOL-OF-WIRE-F": {
   "name": "SPOOL-OF-WIRE-F",
   "file": "places.zil",
   "line": 2808,
   "endLine": 2818,
   "source": "<ROUTINE SPOOL-OF-WIRE-F ()\n <COND (<AND <VERB? COMPARE>\n\t     <OR <IOBJ? PIECE-OF-WIRE> <DOBJ? PIECE-OF-WIRE>>>\n\t<COND (<==? ,P-ADVERB ,W?CAREFULLY>\n\t       <SETG WIRE-MATCHED T>\n\t       <TELL\n\"The piece of green wire and the green spool fit together\nperfectly.\" CR>)\n\t      (T <TELL\n\"The piece of green wire and the green spool appear to be\nsimilar.\" CR>)>)>>"
  },
  "GENERIC-WIRE-F": {
   "name": "GENERIC-WIRE-F",
   "file": "places.zil",
   "line": 2831,
   "endLine": 2845,
   "source": "<ROUTINE GENERIC-WIRE-F (OBJ)\n <COND (<EQUAL? ,HERE ,WORKSHOP>\n\t<COND (<VERB? ;EXAMINE FIND ;FOLLOW> ,WORKSHOP-WIRE)>)\n       (<IN? .OBJ ,GLOBAL-OBJECTS> <RFALSE>)\n       (<VERB? ASK-ABOUT ASK-CONTEXT-ABOUT ASK-FOR ASK-CONTEXT-FOR\n\t       FIND TELL-ME WHAT\n\t       GIVE SGIVE SEARCH-OBJECT-FOR TAKE>\n\t<COND (<OR <EQUAL? .OBJ ,PIECE-OF-WIRE ,SPOOL-OF-WIRE>\n\t\t   <EQUAL? .OBJ ,CLOCK-WIRES ,GENERIC-GREEN-WIRE>>\n\t       ,GENERIC-GREEN-WIRE)\n\t      (T ,GENERIC-WIRE)>)\n       (T\n\t<SETG P-WON <>>\n\t<TELL \"(You can't see any \" \"wire\" \" here!)\" CR>\n\t,NOT-HERE-OBJECT)>>"
  },
  "JUNCTION-BOX-F": {
   "name": "JUNCTION-BOX-F",
   "file": "places.zil",
   "line": 2855,
   "endLine": 2859,
   "source": "<ROUTINE JUNCTION-BOX-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"There's a snarl of colored wires, relays, pilot lights, and stuff that only\nan engineer could admire.\" CR>)>>"
  },
  "TOOLS-F": {
   "name": "TOOLS-F",
   "file": "places.zil",
   "line": 2924,
   "endLine": 2932,
   "source": "<ROUTINE TOOLS-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The tools are standard gardening and carpentry tools, in excellent\ncondition.\" CR>)\n\t       (<VERB? TAKE>\n\t\t<TELL\n\"You have no use for them, unless you are looking for\na new profession.\" CR>)>>"
  },
  "AIR-F": {
   "name": "AIR-F",
   "file": "places.zil",
   "line": 2952,
   "endLine": 2963,
   "source": "<ROUTINE AIR-F ()\n\t <COND (<VERB? SMELL>\n\t\t<COND (<EQUAL? ,HERE ,FRONT-YARD>\n\t\t       <TELL\n\"The smell of herbs permeates everything.\" CR>)\n\t\t      (<EQUAL? ,HERE ,FRONT-PORCH>\n\t\t       <TELL\n\"A breeze carries the faint smell of herbs through the air.\" CR>)\n\t\t      (<==? <GETP ,HERE ,P?LINE> ,OUTSIDE-LINE-C>\n\t\t       <TELL \"The air is clear and fresh here.\" CR>)\n\t\t      (<FRESH-AIR? ,HERE> <RTRUE>)\n\t\t      (T <TELL \"The air is rather musty here.\" CR>)>)>>"
  },
  "FRESH-AIR?": {
   "name": "FRESH-AIR?",
   "file": "places.zil",
   "line": 2965,
   "endLine": 2979,
   "source": "<ROUTINE FRESH-AIR? (RM \"AUX\" P L TBL O)\n\t #DECL ((RM O) OBJECT (P L) FIX)\n\t <SET P 0>\n\t <REPEAT ()\n\t\t <COND (<0? <SET P <NEXTP ,HERE .P>>>\n\t\t\t<RFALSE>)\n\t\t       (<NOT <L? .P ,LOW-DIRECTION>>\n\t\t\t<SET TBL <GETPT ,HERE .P>>\n\t\t\t<SET L <PTSIZE .TBL>>\n\t\t\t<COND (<AND <EQUAL? .L ,DEXIT>\t;\"Door EXIT\"\n\t\t\t\t    <FSET? <SET O <GETB .TBL ,DEXITOBJ>>\n\t\t\t\t\t   ,OPENBIT>>\n\t\t\t       <TELL\n\"There is a pleasant breeze coming through the \" D .O \".\" CR>\n\t\t\t       <RETURN>)>)>>>"
  },
  "CORRIDOR-LOOK": {
   "name": "CORRIDOR-LOOK",
   "file": "places.zil",
   "line": 3007,
   "endLine": 3024,
   "source": "<ROUTINE CORRIDOR-LOOK (\"OPTIONAL\" (ITM <>) \"AUX\" C Z COR VAL (FOUND <>))\n\t <COND (<SET C <GETP ,HERE ,P?CORRIDOR>>\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT <L? <SET Z <- .C 16>> 0>>\n\t\t\t       <SET COR ,COR-16>)\n\t\t\t      (<NOT <L? <SET Z <- .C 8>> 0>>\n\t\t\t       <SET COR ,COR-8>)\n\t\t\t      (<NOT <L? <SET Z <- .C 4>> 0>>\n\t\t\t       <SET COR ,COR-4>)\n\t\t\t      (<NOT <L? <SET Z <- .C 2>> 0>>\n\t\t\t       <SET COR ,COR-2>)\n\t\t\t      (<NOT <L? <SET Z <- .C 1>> 0>>\n\t\t\t       <SET COR ,COR-1>)\n\t\t\t      (T <RETURN>)>\n\t\t\t<SET VAL <CORRIDOR-CHECK .COR .ITM>>\n\t\t\t<COND (<NOT .FOUND> <SET FOUND .VAL>)>\n\t\t\t<SET C .Z>>\n\t\t.FOUND)>>"
  },
  "CORRIDOR-CHECK": {
   "name": "CORRIDOR-CHECK",
   "file": "places.zil",
   "line": 3026,
   "endLine": 3060,
   "source": "<ROUTINE CORRIDOR-CHECK (COR ITM \"AUX\" (CNT 2) (PAST 0) (FOUND <>) RM OBJ)\n #DECL ((COR) <PRIMTYPE VECTOR> (CNT PAST) FIX)\n <REPEAT ()\n  <COND (<==? <SET RM <GET .COR .CNT>> 0>\n\t <RFALSE>)\n\t(<==? .RM ,HERE> <SET PAST 1>)\n\t(<SET OBJ <FIRST? .RM>>\n\t <REPEAT ()\n\t\t <COND (.ITM\n\t\t\t<COND (<==? .OBJ .ITM>\n\t\t\t       <SET FOUND <GET .COR .PAST>>\n\t\t\t       <RETURN>)>)\n\t\t       (<AND <FSET? .OBJ ,PERSON>\n\t\t\t     <NOT <IN-MOTION? .OBJ>>\n\t\t\t     <NOT <FSET? .OBJ ,INVISIBLE>>>\n\t\t\t<COND (<AND <==? .OBJ ,STILES> ,DUFFY-WITH-STILES>\n\t\t\t       <SETG SEEN-DUFFY? T>\n\t\t\t       <TELL \"Sgt. Duffy, with \">\n\t\t\t       <COND (,MET-STILES? <TELL \"Stiles\">)\n\t\t\t\t     (T\t\t<TELL \"someone\">)>\n\t\t\t       <TELL \" in tow,\">)\n\t\t\t      (<NOT <FSET? .OBJ ,TOUCHBIT>>\n\t\t\t       <TELL \"Someone\">)\n\t\t\t      (T <TELL D .OBJ>)>\n\t\t\t<TELL \" is \">\n\t\t\t<COND (<OUTSIDE? .RM>\n\t\t\t       <TELL \"off\">)\n\t\t\t      (T <TELL \"down the hall\">)>\n\t\t\t<TELL \" to \">\n\t\t\t<DIR-PRINT <GET .COR .PAST>>\n\t\t\t<TELL \".\" CR>)>\n\t\t <SET OBJ <NEXT? .OBJ>>\n\t\t <COND (<NOT .OBJ> <RETURN>)>>\n\t <COND (.FOUND <RETURN .FOUND>)>)>\n  <SET CNT <+ .CNT 1>>>>"
  },
  "COR-DIR": {
   "name": "COR-DIR",
   "file": "places.zil",
   "line": 3062,
   "endLine": 3072,
   "source": "<ROUTINE COR-DIR (HERE THERE \"AUX\" COR RM (PAST 0) (CNT 2))\n\t <SET COR <GET-COR <BAND <GETP .THERE ,P?CORRIDOR>\n\t\t\t\t <GETP .HERE ,P?CORRIDOR>>>>\n\t <REPEAT ()\n\t\t <COND (<==? <SET RM <GET .COR .CNT>> .HERE>\n\t\t\t<SET PAST 1>\n\t\t\t<RETURN>)\n\t\t       (<==? .RM .THERE>\n\t\t\t<RETURN>)>\n\t\t <SET CNT <+ .CNT 1>>>\n\t <GET .COR .PAST>>"
  },
  "GET-COR": {
   "name": "GET-COR",
   "file": "places.zil",
   "line": 3074,
   "endLine": 3081,
   "source": "<ROUTINE GET-COR (NUM)\n\t #DECL ((NUM) FIX)\n\t <COND (<==? .NUM 1> ,COR-1)\n\t       (<==? .NUM 2> ,COR-2)\n\t       (<==? .NUM 4> ,COR-4)\n\t       (<==? .NUM 8> ,COR-8)\n\t       (T ,COR-16)\n\t       ;(<==? .NUM 32> ,COR-32)>>"
  },
  "WITNESS": {
   "name": "WITNESS",
   "file": "sample.zil",
   "line": 1,
   "endLine": 180,
   "source": "<ROUTINE WITNESS ()\n\t<TELL\n\"[You are chief police detective in the suburb of Cabeza Plana.\nToday you received a telegram from a Mr. Linder, saying that his life\nis in danger and asking for your help. His name \\\"rang a bell,\\\" and you\nconsulted a police file on the case of his wife's recent suicide.\nNow you are ready to meet him for the first time.]|\n|\nSomewhere near Los Angeles. A cold Friday evening in February 1938.\nIn this climate, cold is anywhere below about fifty degrees. Storm\nclouds are swimming across the sky, their bottoms glowing faintly from\nthe city lights in the distance. A search light pans slowly under the\nclouds, heralding another film premiere. The air seems expectant, waiting\nfor the rain to begin, like a cat waiting for the ineffable moment\nto ambush.|\n|\nThe taxi has just dropped you off at the entrance to the Linders' driveway.\nThe driver didn't seem to like venturing into this maze of twisty streets\nany more than you did. But the house windows are full of light, and\nradio music drifts toward you. Your favorite pistol, a snub-nosed Colt\n.32, is snug in its holster. The long week is finished, except\nfor this appointment. But why does an ominous feeling grip you?|\n|\nThe WITNESS: An INTERLOGIC Mystery|\nCopyright (c) 1983 Infocom, Inc. All rights reserved.|\nWITNESS is a trademark of Infocom, Inc.|\n|\nWhat next?|\n|\n>RING THE DOORBELL|\n|\nSomeone turns off the radio. You hear footsteps inside the house. Then\nthe door swings open.\n\\\"Good evening,\\\" says a smiling face, \\\"I am Phong. Please come in.\\\"\nHe leads you into the house and closes the door behind you.|\n|\nYou are now in the entry.|\nHere in the entry is a small Shinto shrine, with a hanging scroll and\nan arrangement of flowers, as well as a coat closet and a platform\nfor storing shoes. You can see a hallway to the east.|\nPhong's straight black hair and folded eyelids make him obviously Asian,\nbut no definite nationality. His open, almost gentle face holds a quick\nsmile and eyes that seem to miss nothing. He carries his stout body\nlightly, but you can see great strength under his light shirt and dark\ntrousers. You guess his age at about fifty, but who knows how many\nlifetimes of experience he carries?|\n|\nPhong says, \\\"I believe the Linders are in the living room. Please follow\nme.\\\" He leads you into a hallway and turns left. This hallway seems\nto run the length of the house, from the garage at the south end to\nthe living room at the north. There is enough warm yellow light flooding\nfrom the living room for you to see a few doors on each side of the\nhall. As you get near the living room, you hear voices talking, half-loud\nand fast.|\n|\nYou are now in the living room.|\nA huge fieldstone fireplace on the south wall holds a blazing fire,\nfilling the living room with warmth and light. Grouped in front of\nthe fire are a glass-topped coffee table and a rattan davenport and\nclub chair, with cushions covered in a print showing bamboo plants\nin the style of Japanese brush-painting. A lamp with a printed shade\nand a telephone sit on the table.\nOn the north wall are a console radio and a liquor cabinet made of\nlight-colored wood.|\n|\n\\\"Excuse me, sir,\\\" says Phong, \\\"but the detective has arrived.\\\"|\n|\nMonica stops talking and looks at you sharply. She is a woman in her\nmid-twenties. Her grey eyes flash, emphasizing her dark waved hair\nand light but effective make-up. She wears a navy Rayon blouse, tan\nslacks, and tan pumps with Cuban heels. She acts as though you were\na masher who just gave her a whistle.|\nLinder stands at least six foot, with a powerful frame but quick actions,\nlike a cat. His eyeglasses sit on top of his head, where thin strands\nof long black hair go here and there, mostly combed backward. His wide-set\nhazel eyes size you up quickly from within their pouches in his ruddy\nface. He wears a silk peach-colored Mandarin shirt and chocolate trousers,\nimpeccably tailored and laundered, but sweat gleams on his high forehead,\nand he looks as though he hasn't slept much lately.|\n|\nLinder turns to you and says, \\\"Detective, am I glad to see you! This\nis my daughter, Monica, and of course you've met Phong already.\\\" He\nlooks at a wrist watch with a gleaming silver bracelet. \\\"I see you're\nright on time. I'll be with you as soon as I finish my drink.\\\"\nMr. Phong heads off to the south.|\n|\nWhat next?|\n|\n>WAIT|\n|\nTime passes...|\n|\nSuddenly, a clap of thunder rolls across the hills outside.|\n|\nWithout warning, lightning flashes outside, and a few seconds later\nthunder rattles the house.|\n|\nRain begins to fall outside in a sprinkle.|\n|\nLinder gulps down the rest of his drink. \\\"Well, Detective,\\\" he says,\n\\\"I'm anxious to get on with our business. Let's you and I go to my\noffice so we can talk undisturbed.\\\" He takes you by the arm and leads\nyou through the hallway. Just south of the entry, he opens a door to\nthe east and leads you through it.|\n|\n(office)|\nThis is obviously the office of Mr. Linder's company, Pacific Trade\nAssociates. At the west end of the office, a massive desk of teak and\nmahogany faces toward the window. It has no drawers, but the top is\ncovered with piles of letters, some newspapers, a telephone, and various\nsouvenirs from the Far East.|\nBehind it is a large ornately-carved chair, like a cruiser escorting\na battle ship. A simple wooden chair, polished smooth by visitors,\nflanks the desk on the other side. On the north wall is a lounge, upholstered\nin green velvet and a bit lumpy, with a framed wood-block picture hanging\nover it. On the outside wall, next to a door and window, stands a grandfather\nclock, ticking relentlessly. A file cabinet stands in the corner.|\nA cat is sleeping in the corner.|\nLinder sits down in the carved chair.|\nIt's now 8:13 p.m.|\n|\n>SIT ON WOODEN CHAIR|\n|\nYou are now sitting on the wooden chair.|\nLinder begins his story. \\\"My late wife, may she rest in peace, got\ninvolved with a young man named Stiles. Naturally I tried to stop this\naffair, but without much success. Since my wife passed away, this Stiles\nfellow has gone off the deep end, I'm afraid, and blamed me for her\ndeath. I tried my best to ignore him, but he seems to have lost his\nsenses. This morning I received this note and decided to ask your help.\\\"\nHe hands the note to you.|\nThe rain outside is falling heavily now.|\n|\n>WAIT|\n|\nTime passes...|\n|\nThe rain outside begins to taper off.|\n|\nThe rain storm outside has passed now.|\n|\nThe clock chimes once to mark the half hour.|\n|\nMonica bursts into the office, wearing a felt hat and wool coat, and\nstruggling to get her driving gloves on. She glances icily in your\ndirection and then back to her father. \\\"I'm off to the pictures with\nTerry, Dad. Good-bye.\\\" She hugs him briefly but firmly, burying her\nhead in his shoulder.|\nHe pushes her away and says, \\\"You're leaving\nnow?! I thought you'd be talking to the detective here. What about\nthe threat on my life?\\\" He has the hurt look of an orphan pup.|\nShe\nanswers, \\\"You don't need me here. I need to get away now and then.\nI'm not like Mother, you know.\\\" Tears well up in her eyes but she brushes\nthem away before they drop. She turns to leave.|\nMonica, for whom you are waiting, has arrived.|\nIt's now 8:36 p.m.|\n|\n>WAIT|\n|\nTime passes...|\n|\nMonica heads off to the west.|\n|\nOutside somewhere, a car roars to life and speeds away.|\n|\nThe clock chimes 9 times to mark the hour.|\n|\nYou hear the door bell ring.|\n|\nLinder looks toward the window and says, \\\"I don't think Phong has answered\nthe door bell yet.\\\" He reaches toward the butler's button and at the\nsame instant shouts \\\"Stiles!\\\" You turn around and dimly see a figure\noutside. Suddenly there is a flash of light and an explosion, and the\nwindow falls into dozens of shiny shards. The cat bolts and disappears\nsomewhere. The figure outside turns and runs before you can see the\nface. When you turn back around, you see Linder slumping down in his\nchair, with a bloody stain spreading across his silk shirt. He teeters\non the edge of the seat, then falls onto the floor, quite dead.|\nIt's now 9:03 p.m.\">>"
  },
  "RANDOM-PSEUDO": {
   "name": "RANDOM-PSEUDO",
   "file": "things.zil",
   "line": 18,
   "endLine": 19,
   "source": "<ROUTINE RANDOM-PSEUDO ()\n\t <TELL \"You can't do anything useful with that.\" CR>>"
  },
  "NOT-HERE-OBJECT-F": {
   "name": "NOT-HERE-OBJECT-F",
   "file": "things.zil",
   "line": 25,
   "endLine": 61,
   "source": "<ROUTINE NOT-HERE-OBJECT-F (\"AUX\" TBL (PRSO? T) OBJ)\n\t;\"Protocol: return T if case was handled and msg TELLed,\n\t\t\t  <> if PRSO/PRSI ready to use\"\n\t<COND ;\"This COND is game independent (except the TELL)\"\n\t       (<AND <EQUAL? ,PRSO ,NOT-HERE-OBJECT>\n\t\t     <EQUAL? ,PRSI ,NOT-HERE-OBJECT>>\n\t\t<TELL \"(Those things aren't here!)\" CR>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSO ,NOT-HERE-OBJECT>\n\t\t<SET TBL ,P-PRSO>)\n\t       (T\n\t\t<SET TBL ,P-PRSI>\n\t\t<SET PRSO? <>>)>\n\t <COND (.PRSO?\n\t\t<COND (<VERB? ASK-CONTEXT-ABOUT ASK-CONTEXT-FOR CLIMB-UP\n\t\t\t      EXAMINE FIND FOLLOW\n\t\t\t      LOOK-INSIDE LOOK-OUTSIDE SEARCH WHAT\n\t\t\t      $WHERE GIVE MAKE THROUGH WALK-TO>\n\t\t       <COND (<SET OBJ <FIND-NOT-HERE .TBL .PRSO?>>\n\t\t\t      <COND (<NOT <==? .OBJ ,NOT-HERE-OBJECT>>\n\t\t\t\t     <RTRUE>)>)\n\t\t\t     (T\n\t\t\t      <RFALSE>)>)>)\n\t       (T\n\t\t<COND (<VERB? ASK-ABOUT ASK-FOR\n\t\t\t      SEARCH-OBJECT-FOR SGIVE TELL-ME>\n\t\t       <COND (<SET OBJ <FIND-NOT-HERE .TBL .PRSO?>>\n\t\t\t      <COND (<NOT <==? .OBJ ,NOT-HERE-OBJECT>>\n\t\t\t\t     <RTRUE>)>)\n\t\t\t     (T\n\t\t\t      <RFALSE>)>)>)>\n\t ;\"Here is the default 'cant see any' printer\"\n\t <SETG P-WON <>>\n\t <TELL \"(You can't see any\">\n\t <NOT-HERE-PRINT>\n\t <TELL \" here!)\" CR>\n\t <RTRUE>>"
  },
  "FIND-NOT-HERE": {
   "name": "FIND-NOT-HERE",
   "file": "things.zil",
   "line": 63,
   "endLine": 114,
   "source": "<ROUTINE FIND-NOT-HERE (TBL PRSO? \"AUX\" M-F OBJ)\n\t;\"Protocol: return T if case was handled and msg TELLed,\n\t    ,NOT-HERE-OBJECT if 'can't see' msg TELLed,\n\t\t\t  <> if PRSO/PRSI ready to use\"\n\t;\"Here is where special-case code goes. <MOBY-FIND .TBL> returns\n\t   number of matches. If 1, then P-MOBY-FOUND is it. One may treat\n\t   the 0 and >1 cases alike or different. It doesn't matter. Always\n\t   return RFALSE (not handled) if you have resolved the problem.\"\n\t<SET M-F <MOBY-FIND .TBL>>\n\t<COND (,DEBUG\n\t       <TELL \"[Moby-found \" N .M-F \" objects\" \"]\" CR>)>\n\t<COND (<==? 1 .M-F>\n\t       <COND (,DEBUG <TELL \"[Namely: \" D ,P-MOBY-FOUND \"]\" CR>)>\n\t       <COND (.PRSO? <SETG PRSO ,P-MOBY-FOUND>)\n\t\t     (T <SETG PRSI ,P-MOBY-FOUND>)>\n\t       <RFALSE>)\n\t      (<AND <L? 1 .M-F>\n\t\t    <SET OBJ <APPLY <GETP <SET OBJ <GET .TBL 1>> ,P?GENERIC>\n\t\t\t\t    .OBJ>>>\n\t;\"Protocol: returns .OBJ if that's the one to use,\n\t\t,NOT-HERE-OBJECT if case was handled and msg TELLed,\n\t\t\t      <> if WHICH-PRINT should be called\"\n\t       <COND (,DEBUG <TELL \"[Generic: \" D .OBJ \"]\" CR>)>\n\t       <COND (<==? .OBJ ,NOT-HERE-OBJECT> <RTRUE>)\n\t\t     (.PRSO? <SETG PRSO .OBJ>)\n\t\t     (T <SETG PRSI .OBJ>)>\n\t       <RFALSE>)\n\t      (<OR <AND <NOT .PRSO?>\n\t\t\t<VERB? ASK-ABOUT ASK-FOR TELL-ME>>\n\t\t   <AND .PRSO?\n\t\t\t<VERB? ASK-CONTEXT-ABOUT ASK-CONTEXT-FOR>>\n\t\t   <AND <NOT <==? ,WINNER ,PLAYER>>\n\t\t\t<VERB? FIND WHAT GIVE SGIVE>>>\n\t       <COND (<VERB? ASK-ABOUT ASK-FOR> <TELL D ,PRSO>)\n\t\t     (T <TELL D <COND (<AND ,QCONTEXT\n\t\t\t\t\t    <==? ,HERE ,QCONTEXT-ROOM>\n\t\t\t\t\t    <==? ,HERE <META-LOC ,QCONTEXT>>>\n\t\t\t\t       ,QCONTEXT)\n\t\t\t\t      (<NOT <==? ,WINNER ,PLAYER>>\n\t\t\t\t       ,WINNER)\n\t\t\t\t      (T <FIND-FLAG ,HERE ,PERSON>)>>)>\n\t       <TELL\n\" looks confused. \\\"I don't know anything about any\">\n\t       <NOT-HERE-PRINT>\n\t       <TELL \"!\\\"\" CR>\n\t       <RTRUE>)\n\t      (<NOT .PRSO?>\n\t       <TELL \"You wouldn't find any\">\n\t       <NOT-HERE-PRINT>\n\t       <TELL \" there.\" CR>\n\t       <RTRUE>)\n\t      (T ,NOT-HERE-OBJECT)>>"
  },
  "NOT-HERE-PRINT": {
   "name": "NOT-HERE-PRINT",
   "file": "things.zil",
   "line": 116,
   "endLine": 123,
   "source": "<ROUTINE NOT-HERE-PRINT ()\n <COND (<OR ,P-OFLAG ,P-MERGED>\n\t<COND (,P-XADJ <TELL \" \"> <PRINTB ,P-XADJN>)>\n\t<COND (,P-XNAM <TELL \" \"> <PRINTB ,P-XNAM>)>)\n       (<EQUAL? ,PRSO ,NOT-HERE-OBJECT>\n\t<BUFFER-PRINT <GET ,P-ITBL ,P-NC1> <GET ,P-ITBL ,P-NC1L> <>>)\n       (T\n\t<BUFFER-PRINT <GET ,P-ITBL ,P-NC2> <GET ,P-ITBL ,P-NC2L> <>>)>>"
  },
  "IT-F": {
   "name": "IT-F",
   "file": "things.zil",
   "line": 136,
   "endLine": 141,
   "source": "<ROUTINE IT-F ()\n <COND (<OR <AND <IOBJ? IT>\n\t\t <VERB? ASK-ABOUT ASK-FOR SEARCH-OBJECT-FOR TELL-ME>>\n\t    <AND <DOBJ? IT>\n\t\t <VERB? ASK-CONTEXT-ABOUT ASK-CONTEXT-FOR FIND WHAT>>>\n\t<TELL \"\\\"I'm not sure what you're talking about.\\\"\" CR>)>>"
  },
  "THE?": {
   "name": "THE?",
   "file": "things.zil",
   "line": 143,
   "endLine": 151,
   "source": "<ROUTINE THE? (NOUN)\n\t<COND (<OR <EQUAL? .NOUN ,MONICA-ROOM ,LINDER-ROOM ,LIMBO>\n\t\t   <EQUAL? .NOUN ,PHONG ,LINDER ,STILES>\n\t\t   <EQUAL? .NOUN ,GLOBAL-PHONG ,GLOBAL-LINDER ,GLOBAL-STILES>\n\t\t   <EQUAL? .NOUN ,MONICA ,GLOBAL-MONICA ,GLOBAL-TERRY>\n\t\t   <EQUAL? .NOUN ,IT ,YOU ,HIM-HER>\n\t\t   <EQUAL? .NOUN ,LINDER-WINDOW ,GLOBAL-DUFFY>>\n\t       <RTRUE>)\n\t      (T <TELL \" the\">)>>"
  },
  "THIS-IS-IT": {
   "name": "THIS-IS-IT",
   "file": "things.zil",
   "line": 153,
   "endLine": 155,
   "source": "<ROUTINE THIS-IS-IT (OBJ)\n\t <SETG P-IT-OBJECT .OBJ>\n\t <SETG P-IT-LOC ,HERE>>"
  },
  "RECURSIVE-BOOK-F": {
   "name": "RECURSIVE-BOOK-F",
   "file": "things.zil",
   "line": 167,
   "endLine": 191,
   "source": "<ROUTINE RECURSIVE-BOOK-F ()\n\t <COND (<AND <VERB? ASK-FOR> <DOBJ? PHONG>>\n\t\t<FCLEAR ,PRSI ,NDESCBIT>\n\t\t<RFALSE>)\n\t       (<AND <VERB? GIVE TAKE> <IN? ,RECURSIVE-BOOK ,PHONG>>\n\t\t<FCLEAR ,PRSO ,NDESCBIT>\n\t\t<RFALSE>)\n\t       (<AND <VERB? DROP> <IN? ,PHONG ,BUTLER-ROOM>>\n\t\t<MOVE ,RECURSIVE-BOOK ,PHONG>\n\t\t<TELL \"Phong picks up the book and starts to read.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"This is a mystery story called 'Deadline,' just now published as a book.\"\nCR>)\n\t       (<VERB? SEARCH READ OPEN LOOK-INSIDE>\n\t\t<FSET ,RECURSIVE-BOOK ,OPENBIT>\n\t\t<TELL\n\"The book is a novel-length version of 'Deadline,' a whodunit set in the\nfuture in Connecticut. You start to read it, and it seems oddly\nfamiliar, as if you might live through it yourself some day.\">\n\t\t<COND (<IN? ,GUN-RECEIPT ,RECURSIVE-BOOK>\n\t\t       <FCLEAR ,GUN-RECEIPT ,INVISIBLE>\n\t\t       <TELL\n\" A receipt of some kind is being used as a bookmark.\">)>\n\t\t<CRLF>)>>"
  },
  "GUN-RECEIPT-F": {
   "name": "GUN-RECEIPT-F",
   "file": "things.zil",
   "line": 202,
   "endLine": 218,
   "source": "<ROUTINE GUN-RECEIPT-F ()\n\t<COND (<VERB? EXAMINE READ>\n\t       <PUT 0 8 <BOR <GET 0 8> 2>>\n\t       <TELL\n\"\\\"            FRITZI'S|\n   fine merchandise - quick loans|\n        Cabeza Plana, Calif.|\n                        Number: 69105|\n                        Date: 12/1/37|\nSold to: Nemo Newbourne|\nAddress: 137 E. Second Street|\n|\nTwo handguns - - - - - - - - - $ 8.00|\n|\n[PAID]\\\"\" CR>\n\t       <PUT 0 8 <BAND <GET 0 8> -3>>\n\t       <RTRUE>)>>"
  },
  "MATCHBOOK-F": {
   "name": "MATCHBOOK-F",
   "file": "things.zil",
   "line": 238,
   "endLine": 249,
   "source": "<ROUTINE MATCHBOOK-F ()\n <COND (<VERB? LAMP-ON SLAP>\n\t<TELL \"The matches don't seem to work.\" CR>)\n       (<VERB? LOOK-INSIDE OPEN>\n\t<TELL\n\"(You'll find the match book in your game package.)\"\n;\"The book is full of matches, and there is a phone number written on the\ninside flap.\" CR>)\n       (<AND <VERB? LOOK-UP> <PHONE-IN? ,HERE>>\n\t<TELL\n\"The listing for Stiles in the phone book is the same as the number\nwritten in the match book.\" CR>)>>"
  },
  "HANDCUFFS-F": {
   "name": "HANDCUFFS-F",
   "file": "things.zil",
   "line": 267,
   "endLine": 273,
   "source": "<ROUTINE HANDCUFFS-F ()\n <COND (<AND <VERB? TAKE> <DOBJ? HANDCUFFS>>\n\t<COND (<AND <==? ,HANDCUFFS ,MONICA-TIED-WITH>\n\t\t    <OR <NOT ,PRSI> <==? ,PRSI ,MONICA>>>\n\t       <PERFORM ,V?UNTIE ,MONICA>\n\t       <RTRUE>)\n\t      (T <RFALSE>)>)>>"
  },
  "HOUSE-F": {
   "name": "HOUSE-F",
   "file": "things.zil",
   "line": 283,
   "endLine": 311,
   "source": "<ROUTINE HOUSE-F ()\n\t <COND (<VERB? FIND>\n\t\t<TELL \"It's right here. Some detective you are.\" CR>)\n\t       (<AND <VERB? WALK-TO>\n\t\t     <EQUAL? ,HERE ,DRIVEWAY-ENTRANCE ,DRIVEWAY>>\n\t\t<PERFORM ,V?WALK ,P?NORTH>\n\t\t<RTRUE>)\n\t       (<VERB? THROUGH>\n\t\t<COND (<AND <EQUAL? ,HERE ,FRONT-YARD>\n\t\t\t    <FSET? ,DINING-DOOR ,OPENBIT>>\n\t\t       <GOTO ,DINING-ROOM>)\n\t\t      (<AND <EQUAL? ,HERE ,FRONT-PORCH>\n\t\t            <FSET? ,FRONT-DOOR ,OPENBIT>>\n\t\t       <GOTO ,ENTRY>)\n\t\t      (<AND <EQUAL? ,HERE ,OFFICE-PORCH>\n\t\t            <FSET? ,OFFICE-BACK-DOOR ,OPENBIT>>\n\t\t       <GOTO ,OFFICE>)\n\t\t      (<AND <EQUAL? ,HERE ,BACK-YARD>\n\t\t            <FSET? ,MONICA-BACK-DOOR ,OPENBIT>>\n\t\t       <GOTO ,MONICA-ROOM>)\n\t\t      (<AND <EQUAL? ,HERE ,ROCK-GARDEN>\n\t\t            <FSET? ,LINDER-BACK-DOOR ,OPENBIT>>\n\t\t       <GOTO ,LINDER-ROOM>)\n\t\t      (T\n\t\t       <TELL \"You might try the front door.\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\t;\"? more detail?\"\n\"The house looks like a mixture of\na California bungalow and East Asian influences.\" CR>)>>"
  },
  "FENCE-F": {
   "name": "FENCE-F",
   "file": "things.zil",
   "line": 319,
   "endLine": 330,
   "source": "<ROUTINE FENCE-F ()\n\t <COND (<VERB? CLIMB-FOO CLIMB-ON CLIMB-UP>\n\t\t<TELL\n\"You can't leave the property yet. It would mean your job.\" CR>)\n\t       (<VERB? LOOK-BEHIND LOOK-INSIDE LOOK-OUTSIDE>\n\t\t<TELL \"It's too dark to see anything.\" CR>)\n\t       (<VERB? FIND>\n\t\t<TELL \"It's right here. Some detective you are.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"This is a Japanese-style \\\"shadow fence\\\" made of wooden slats, opaque\nfrom most angles but designed to let breezes through.\" CR>)>>"
  },
  "GROUND-F": {
   "name": "GROUND-F",
   "file": "things.zil",
   "line": 339,
   "endLine": 353,
   "source": "<ROUTINE GROUND-F ()\n\t <COND (<AND <DOBJ? GROUND>\n\t\t     <VERB? ASK-CONTEXT-ABOUT ASK-CONTEXT-FOR FIND WHAT>>\n\t\t<RFALSE>)\n\t       (<AND <IOBJ? GROUND>\n\t\t     <VERB? ASK-ABOUT ASK-FOR SEARCH-OBJECT-FOR TELL-ME>>\n\t\t<RFALSE>)\n\t       (<NOT <==? <GETP ,HERE ,P?LINE> ,OUTSIDE-LINE-C>>\n\t\t<SETG P-WON <>>\n\t\t<TELL \"(You can't see any\" PRSO \" here!)\" CR>)\n\t       (<AND <VERB? PUT> <IOBJ? GROUND>>\n\t\t<PERFORM ,V?DROP ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE SEARCH>\n\t\t<TELL \"You don't find anything new there.\" CR>)>>"
  },
  "FLOOR-F": {
   "name": "FLOOR-F",
   "file": "things.zil",
   "line": 361,
   "endLine": 375,
   "source": "<ROUTINE FLOOR-F ()\n\t <COND (<AND <DOBJ? FLOOR>\n\t\t     <VERB? ASK-CONTEXT-ABOUT ASK-CONTEXT-FOR FIND WHAT>>\n\t\t<RFALSE>)\n\t       (<AND <IOBJ? FLOOR>\n\t\t     <VERB? ASK-ABOUT ASK-FOR SEARCH-OBJECT-FOR TELL-ME>>\n\t\t<RFALSE>)\n\t       (<==? <GETP ,HERE ,P?LINE> ,OUTSIDE-LINE-C>\n\t\t<SETG P-WON <>>\n\t\t<TELL \"(You can't see any\" PRSO \" here!)\" CR>)\n\t       (<AND <VERB? PUT> <IOBJ? FLOOR>>\n\t\t<PERFORM ,V?DROP ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE SEARCH>\n\t\t<TELL \"You don't find anything new there.\" CR>)>>"
  },
  "MUSIC-F": {
   "name": "MUSIC-F",
   "file": "things.zil",
   "line": 389,
   "endLine": 395,
   "source": "<ROUTINE MUSIC-F ()\n\t <COND (<VERB? LISTEN>\n\t\t<COND (,RADIO-ON\n\t\t       <TELL\n\"You're too far away to make out what it is.\" CR>)\n\t\t      (T <TELL\n\"You'd enjoy it more if you turned on the radio.\" CR>)>)>>"
  },
  "SEEKING-DRINK?": {
   "name": "SEEKING-DRINK?",
   "file": "things.zil",
   "line": 426,
   "endLine": 440,
   "source": "<ROUTINE SEEKING-DRINK? ()\n <COND (<VERB? GIVE>\n\t<COND (<AND <IOBJ? PLAYER> <NOT <==? ,WINNER ,PLAYER>>>\n\t       <RTRUE>)>)\n       (<VERB? SGIVE>\n\t<COND (<AND <DOBJ? PLAYER> <NOT <==? ,WINNER ,PLAYER>>>\n\t       <RTRUE>)>)\n       (<VERB? ASK-FOR>\n\t<COND (<FSET? ,PRSO ,PERSON>\n\t       <RTRUE>)>)\n       (<VERB? TAKE>\n\t<COND (<FIND-FLAG ,HERE ,PERSON>\n\t       <RTRUE>)\n\t      (<AND ,PRSI <FSET? ,PRSI ,PERSON>>\n\t       <RTRUE>)>)>>"
  },
  "LIQUOR-F": {
   "name": "LIQUOR-F",
   "file": "things.zil",
   "line": 443,
   "endLine": 468,
   "source": "<ROUTINE LIQUOR-F ()\n <COND (<AND ,LINDER-FOLLOWS-YOU\n\t     <VERB? EXAMINE>>\n\t<TELL\n\"Linder is drinking something that looks like whisky, straight up.\" CR>)\n       (<SEEKING-DRINK?>\n\t<COND (,DRUNK-FLAG <NO-DRINK> <RTRUE>)>\n\t<SETG DRUNK-FLAG T>\n\t<COND (<EQUAL? ,MONICA ,WINNER ,PRSO ,PRSI>\n\t       <TELL\n\"\\\"So you want to dip your beak? Go ahead.\\\"\" CR>)\n\t      (T\n\t       <MOVE ,DRINK ,PLAYER>\n\t       <FSET ,DRINK ,TAKEBIT>\n\t       <TELL\n\"\\\"I think we both need one.\\\"  And so you both have one.\" CR>)>)\n       (<OR <VERB? DRINK>\n\t    <AND <VERB? OPEN> <DOBJ? SCOTCH BOURBON>>>\n\t<COND (,DRUNK-FLAG <NO-DRINK> <RTRUE>)\n\t      (T\n\t       <SETG DRUNK-FLAG T>\n\t       <MOVE ,DRINK ,PLAYER>\n\t       <FSET ,DRINK ,TAKEBIT>\n\t       <TELL\n\"You take a belt of the stuff and roll it on your tongue before\nswallowing. It's good whisky.\" CR>)>)>>"
  },
  "NO-DRINK": {
   "name": "NO-DRINK",
   "file": "things.zil",
   "line": 470,
   "endLine": 472,
   "source": "<ROUTINE NO-DRINK ()\n\t<TELL\n\"You could drink this stuff all night, but you have work to do.\" CR>>"
  },
  "CIGARETTE-F": {
   "name": "CIGARETTE-F",
   "file": "things.zil",
   "line": 482,
   "endLine": 503,
   "source": "<ROUTINE CIGARETTE-F ()\n <COND (<VERB? FIND SEARCH SEARCH-OBJECT-FOR>\n\t<TELL\n\"Like any hard-boiled police detective, you must have a pack on you\nsomewhere.\" CR>)\n       (<VERB? EXAMINE>\n\t<COND (<EQUAL? ,HERE ,KITCHEN>\n\t       <TELL \"Phong's cigarettes are Lucky Strikes.\" CR>)\n\t      (T <TELL \"All you can see is an ashtray full of butts.\" CR>)>)\n       (<VERB? SMOKE>\n\t<TELL\n\"You light up a Camel, take a deep drag, and watch the smoke drift\nthrough the air. A few more puffs, and you're ready to go to work\nagain.\" CR>)\n       (<OR <AND <VERB? GIVE TURN> <IOBJ? PLAYER> <NOT <==? ,WINNER ,PLAYER>>>\n\t    <AND <VERB? SGIVE>     <DOBJ? PLAYER> <NOT <==? ,WINNER ,PLAYER>>>\n\t    <AND <VERB? ASK-FOR> <FSET? ,PRSO ,PERSON>>\n\t    <AND <VERB? TAKE>\n\t\t <OR <FIND-FLAG ,HERE ,PERSON ,WINNER> ;<NOT ,PRSI>\n\t\t     <FSET? ,PRSI ,PERSON>>>>\n\t<TELL\n\"\\\"I think we both need one.\\\" And so you both have one.\" CR>)>>"
  },
  "BROKEN-GLASS-F": {
   "name": "BROKEN-GLASS-F",
   "file": "things.zil",
   "line": 528,
   "endLine": 530,
   "source": "<ROUTINE BROKEN-GLASS-F ()\n <COND (<VERB? TAKE>\n\t<TELL \"You'd probably cut yourself on the sharp edges.\" CR>)>>"
  },
  "INSIDE-GUN-F": {
   "name": "INSIDE-GUN-F",
   "file": "things.zil",
   "line": 561,
   "endLine": 581,
   "source": "<ROUTINE INSIDE-GUN-F ()\n <COND (<AND <VERB? COMPARE>\n\t     <OR <DOBJ? OUTSIDE-GUN> <IOBJ? OUTSIDE-GUN>>>\n\t<COND (<==? ,P-ADVERB ,W?CAREFULLY>\n\t       <SETG GUNS-MATCHED T>\n\t       <TELL\n\"The two guns are virtually identical,\"\n\" except that one has a very short barrel.\" CR>)\n\t      (T\n\t       <TELL\n\"The two guns appear to be very similar,\"\n\" except that one has a very short barrel.\" CR>)>)\n       (<VERB? EXAMINE ;ANALYZE ;FINGERPRINT>\n\t<TELL\n\"Y\" \"ou can see it's just a cheap low-quality handgun.\"\n\" The barrel is very short, as if someone sawed it off.\" CR>)\n       (<VERB? OPEN>\n\t<TELL\n\"You open the gun, find no spare bullets inside, and close it again.\" CR>)\n       (<VERB? SMELL>\n\t<TELL \"It smells as though it's recently been fired.\" CR>)>>"
  },
  "OUTSIDE-GUN-F": {
   "name": "OUTSIDE-GUN-F",
   "file": "things.zil",
   "line": 583,
   "endLine": 592,
   "source": "<ROUTINE OUTSIDE-GUN-F ()\n <COND (<VERB? EXAMINE ;ANALYZE ;FINGERPRINT>\n\t<TELL\n\"The gun is muddy from the ground, but y\"\n\"ou can see it's just a cheap low-quality handgun.\" CR>)\n       (<VERB? OPEN>\n\t<TELL\n\"You open the gun, find no spare bullets inside, and close it again.\" CR>)\n       (<VERB? SMELL>\n\t<TELL \"It smells as though it's recently been fired.\" CR>)>>"
  },
  "GENERIC-GUN-F": {
   "name": "GENERIC-GUN-F",
   "file": "things.zil",
   "line": 594,
   "endLine": 603,
   "source": "<ROUTINE GENERIC-GUN-F (OBJ)\n <COND (<VERB? ASK-ABOUT ASK-CONTEXT-ABOUT ASK-FOR ASK-CONTEXT-FOR\n\t       FIND TELL-ME WHAT\n\t       GIVE SGIVE SEARCH-OBJECT-FOR TAKE>\n\t,GENERIC-GUN)\n       (<EQUAL? <LOC ,PISTOL> ,PLAYER ,HERE> <RFALSE>)\n       (T\n\t<SETG P-WON <>>\n\t<TELL \"(You can't see any \" \"gun\" \" here!)\" CR>\n\t,NOT-HERE-OBJECT)>>"
  },
  "PHONG-KEYS-F": {
   "name": "PHONG-KEYS-F",
   "file": "things.zil",
   "line": 658,
   "endLine": 668,
   "source": "<ROUTINE PHONG-KEYS-F ()\n <COND (<OR <AND <VERB? GIVE> <IOBJ? PLAYER> <==? ,WINNER ,PHONG>>\n\t    <AND <VERB? TAKE> <IN? ,PHONG-KEYS ,PHONG>>>\n\t<COND (,PHONG-SEEN-CORPSE?\n\t       <MOVE ,PHONG-KEYS ,PLAYER>\n\t       <FCLEAR ,PHONG-KEYS ,NDESCBIT>\n\t       <TELL\n\"\\\"Here, you may as well take them. I don't see how Mr. Linder can\nobject now.\\\"\" CR>)\n\t      (T <TELL\n\"\\\"I don't think Mr. Linder would like that.\\\"\" CR>)>)>>"
  },
  "GENERIC-KEY-F": {
   "name": "GENERIC-KEY-F",
   "file": "things.zil",
   "line": 670,
   "endLine": 679,
   "source": "<ROUTINE GENERIC-KEY-F (OBJ)\n <COND (<VERB? ASK-ABOUT ASK-CONTEXT-ABOUT ASK-FOR ASK-CONTEXT-FOR\n\t       FIND TELL-ME WHAT\n\t       GIVE SGIVE SEARCH-OBJECT-FOR TAKE>\n\t,GENERIC-KEY)\n       (<EQUAL? <LOC ,PHONG-KEYS> ,PLAYER ,HERE> <RFALSE>)\n       (T\n\t<SETG P-WON <>>\n\t<TELL \"(You can't see any \" \"key\" \" here!)\" CR>\n\t,NOT-HERE-OBJECT)>>"
  },
  "HANDWRITING-F": {
   "name": "HANDWRITING-F",
   "file": "things.zil",
   "line": 692,
   "endLine": 695,
   "source": "<ROUTINE HANDWRITING-F ()\n <COND (<AND <VERB? ANALYZE> <DOBJ? HANDWRITING> <NOT ,PRSI>\n\t     <EQUAL? ,PLAYER <LOC ,MATCHBOOK> <LOC ,THREAT-NOTE>>>\n\t<TELL \"You didn't say what to analyze the handwriting on.\" CR>)>>"
  },
  "GLOBAL-FINGERPRINTS-F": {
   "name": "GLOBAL-FINGERPRINTS-F",
   "file": "things.zil",
   "line": 703,
   "endLine": 710,
   "source": "<ROUTINE GLOBAL-FINGERPRINTS-F ()\n\t <COND (<AND <VERB? TAKE> <==? ,PRSO ,GLOBAL-FINGERPRINTS>>\n\t\t<COND (<NOT ,PRSI>\n\t\t       <TELL\n\"You didn't say what to take the fingerprints from.\" CR>)\n\t\t      (T\n\t\t       <PERFORM ,V?FINGERPRINT ,PRSI>\n\t\t       <RTRUE>)>)>>"
  },
  "GLOBAL-SUICIDE-F": {
   "name": "GLOBAL-SUICIDE-F",
   "file": "things.zil",
   "line": 726,
   "endLine": 728,
   "source": "<ROUTINE GLOBAL-SUICIDE-F (\"AUX\" STR)\n\t <COND (<AND <VERB? FIND> <NOT <EQUAL? ,WINNER ,PLAYER>>>\n\t\t<TELL \"\\\"She shot herself in the bathtub.\\\"\" CR>)>>"
  },
  "TELEPHONE-F": {
   "name": "TELEPHONE-F",
   "file": "things.zil",
   "line": 760,
   "endLine": 767,
   "source": "<ROUTINE TELEPHONE-F ()\n <COND (<VERB? PHONE>\n\t<TELL\n\"You should type what number to call, for example \\\"DIAL HYACINTH\n1031.\\\"\" CR>)\n       (<VERB? REPLY> <TELL \"Don't bother unless it rings.\" CR>)\n       (<VERB? RAISE TAKE>\n\t<TELL \"You lift the receiver and get a dial tone. Well done!\" CR>)>>"
  },
  "CORONER-F": {
   "name": "CORONER-F",
   "file": "things.zil",
   "line": 775,
   "endLine": 782,
   "source": "<ROUTINE CORONER-F ()\n <COND (<AND <VERB? PHONE> <PHONE-IN? ,HERE>>\n\t<COND (<PROB 69>\n\t       <TELL\n\"You dial the number and wait a long time for someone to answer.\nFinally you hear a voice: \\\"We're awful busy here. Call back in ten\nminutes.\\\" He hangs up before you can say a word.\" CR>)\n\t      (T <TELL \"You dial the number and get a busy signal.\" CR>)>)>>"
  },
  "BUTTON-F": {
   "name": "BUTTON-F",
   "file": "things.zil",
   "line": 792,
   "endLine": 805,
   "source": "<ROUTINE BUTTON-F ()\n <COND (<==? ,HERE ,FRONT-PORCH>\n\t<COND (<IOBJ? BUTTON> <PERFORM ,PRSA ,PRSO ,DOORBELL> <RTRUE>)\n\t      (<DOBJ? BUTTON> <PERFORM ,PRSA ,DOORBELL ,PRSI> <RTRUE>)>\n\t<RFALSE>)\n       (<OUTSIDE? ,HERE>\n\t<TELL \"There's no button here.\" CR>)\n       (<VERB? PUSH RING>\n\t<COND (<IN? ,PHONG ,HERE>\n\t       <TELL\n\"Phong looks annoyed. \\\"You needn't ring for me. I'm right here.\\\"\" CR>)\n\t      (T\n\t       <YOU-RANG>\n\t       <TELL \"You barely hear a bell ring in the distance.\" CR>)>)>>"
  },
  "YOU-RANG": {
   "name": "YOU-RANG",
   "file": "things.zil",
   "line": 807,
   "endLine": 811,
   "source": "<ROUTINE YOU-RANG ()\n\t <COND (<NOT <GET <GET ,GOAL-TABLES ,PHONG-C> ,GOAL-S>>\n\t\t<SETG PHONG-CALLED T>\n\t\t<SETG PHONG-OLD-LOC <LOC ,PHONG>>\n\t\t<ESTABLISH-GOAL ,PHONG ,HERE>)>>"
  },
  "BLACK-WIRE-F": {
   "name": "BLACK-WIRE-F",
   "file": "things.zil",
   "line": 822,
   "endLine": 853,
   "source": "<ROUTINE BLACK-WIRE-F ()\n <COND (<==? <GETP ,HERE ,P?LINE> ,OUTSIDE-LINE-C>\n\t<TELL \"There's no wire here.\" CR>)\n       (<AND <DOBJ? WHITE-WIRE>\n\t     <NOT <EQUAL? ,HERE ,WORKSHOP>>\n\t     <NOT <WINDOW-IN? ,HERE>>>\n\t<TELL \"There's no white wire here.\" CR>)\n       (<VERB? EXAMINE>\n\t<COND (<DOBJ? BLACK-WIRE>\n\t       <COND (<EQUAL? ,HERE ,WORKSHOP>\n\t\t      <TELL\n\"You can see several kinds of \" \"black\" \" wire on spools, not to mention the\nsnarl in the junction box.\" CR>)\n\t\t     (T <TELL\n\"A pair of black wires goes from the butler's button into the floor.\" CR>)>)\n\t      (<EQUAL? ,HERE ,WORKSHOP>\n\t       <TELL\n\"You can see several kinds of \" \"white\" \" wire on spools, not to mention the\nsnarl in the junction box.\" CR>)\n\t      (T <TELL\n\"A pair of white wires goes from some sort of electric switch on the \"\n<COND (<EQUAL? ,HERE ,ENTRY ,GARAGE> \"door\") (T \"sash\")>\n\" into the frame.\" CR>)>)\n       (<VERB? FOLLOW>\n\t<COND (<DOBJ? BLACK-WIRE>\n\t       <TELL \"The wire goes into the floor and disappears.\" CR>)\n\t      (<EQUAL? ,HERE ,WORKSHOP>\n\t       <TELL \"It just goes around and around the spools.\" CR>)\n\t      (T\n\t       <TELL \"The wire goes into the wall and disappears.\" CR>)>)\n       (<VERB? TAKE>\n\t<TELL \"You don't really want to do that.\" CR>)>>"
  },
  "MUDDY-SHOES-F": {
   "name": "MUDDY-SHOES-F",
   "file": "things.zil",
   "line": 878,
   "endLine": 902,
   "source": "<ROUTINE MUDDY-SHOES-F ()\n <COND (<AND <VERB? COMPARE PUT>\n\t     <OR <DOBJ? BACK-FOOTPRINTS BACK-FOOTPRINTS-CAST>\n\t\t <IOBJ? BACK-FOOTPRINTS BACK-FOOTPRINTS-CAST>>>\n\t<TELL\n\"The boots don't seem to match \" ;\"the plaster cast of \"\n\"the foot prints that you found in the \" \"back yard.\" CR>)\n       (<AND <VERB? COMPARE PUT>\n\t     <OR <DOBJ? SIDE-FOOTPRINTS SIDE-FOOTPRINTS-CAST>\n\t\t <IOBJ? SIDE-FOOTPRINTS SIDE-FOOTPRINTS-CAST>>>\n\t<COND (<OR <VERB? PUT> <==? ,P-ADVERB ,W?CAREFULLY>>\n\t       <SETG SIDE-FOOTPRINTS-MATCHED T>\n\t       <TELL\n\"The boots and the foot prints match each other perfectly.\" CR>)\n\t      (T\n\t       <TELL\n\"The boots appear to be similar to \" ;\"the plaster cast of \"\n\"the foot prints that you found in the \" \"side yard.\" CR>)>)\n       (<VERB? EXAMINE>\n\t<TELL\n\"They're just ordinary gardening boots, with some fresh adobe mud around the\nbottom.\" CR>)\n       (<VERB? TAKE>\n\t<FCLEAR ,MUDDY-SHOES ,NDESCBIT>\n\t<RFALSE>)>>"
  },
  "BED-F": {
   "name": "BED-F",
   "file": "things.zil",
   "line": 924,
   "endLine": 932,
   "source": "<ROUTINE BED-F (\"OPTIONAL\" (RARG 100))\n\t <COND (<NOT <==? .RARG 100>> <RFALSE>)\n\t       (<AND <VERB? EXAMINE LOOK-INSIDE LOOK-ON>\n\t\t     <==? ,HERE ,MONICA-ROOM>\n\t\t     <IN? ,MONICA ,MONICA-ROOM>>\n\t\t<TELL \"Monica is lying on her bed, softly sobbing.\" CR>)\n\t       (<VERB? LOOK-UNDER>\n\t\t<TELL\n\"If you wanted to find the bogey man, you're out of luck.\" CR>)>>"
  },
  "GLOBAL-CALL-F": {
   "name": "GLOBAL-CALL-F",
   "file": "things.zil",
   "line": 941,
   "endLine": 943,
   "source": "<ROUTINE GLOBAL-CALL-F ()\n <COND (<VERB? TURN WALK>\n\t<TELL \"(Use compass directions to move around here.)\" CR>)>>"
  },
  "CORPSE-F": {
   "name": "CORPSE-F",
   "file": "things.zil",
   "line": 980,
   "endLine": 1009,
   "source": "<ROUTINE CORPSE-F (\"OPTIONAL\" (ARG <>)\n\t\t   \"AUX\" (T <- ,PRESENT-TIME ,MURDER-TIME>))\n <COND (<==? .ARG ,M-OBJDESC>\n\t<TELL\n\"The body of Mr. Linder is still crumpled in a heap on the floor.\" CR>\n\t<RTRUE>)\n       (<AND <VERB? ANALYZE> <DOBJ? CORPSE>>\n\t<COND (<IOBJ? TUMOR> <SETG DUFFY-SAW-MEDICAL-REPORT T>)>\n\t<TELL \"Only the coroner can do that.\" CR>)\n       (<AND <VERB? ARREST> <DOBJ? CORPSE>> <ARREST ,GLOBAL-LINDER>)\n       (<AND <VERB? ASK-ABOUT ASK-FOR TELL PHONE $CALL> <DOBJ? CORPSE>>\n\t<TELL \"Talking to corpses will get you nowhere.\" CR>\n\t,M-FATAL)\n       (<AND <VERB? TAKEOUT>\t;\"TAKE CORPSE OUTSIDE\"\n\t     <IOBJ? OFFICE-BACK-DOOR MONICA-BACK-DOOR LINDER-BACK-DOOR>>\n\t<TELL \"You can't move\" THE-PRSO \".\" CR>)\n       (<VERB? TIE-TO TIE-WITH>\n\t<TELL \"Don't tell me you think the body's going to run away!\" CR>)\n       (<VERB? EXAMINE RUB>\n\t<COND (<L? .T 10>\n\t       <TELL\n\"The blood is still spreading on Linder's shirt.\" CR>)\n\t      (<L? .T 60>\n\t       <TELL\n\"The blood on Linder's shirt has clotted and turned dark.\" CR>)\n\t      (<L? .T 180>\n\t       <TELL\n\"Linder's body is getting stiff.\" CR>)\n\t      (T <TELL\n\"The corpse is pretty stiff now.\" CR>)>)>>"
  },
  "GLOBAL-WARRANT-F": {
   "name": "GLOBAL-WARRANT-F",
   "file": "things.zil",
   "line": 1024,
   "endLine": 1027,
   "source": "<ROUTINE GLOBAL-WARRANT-F ()\n\t <COND (<VERB? TAKE FIND>\n\t\t<TELL\n\"Knowing the courts, it would probably take days to get one.\" CR>)>>"
  },
  "STUB-F": {
   "name": "STUB-F",
   "file": "things.zil",
   "line": 1037,
   "endLine": 1053,
   "source": "<ROUTINE STUB-F ()\n\t<COND (<VERB? EXAMINE READ>\n\t       <PUT 0 8 <BOR <GET 0 8> 2>>\n\t       <TELL\n\"|\n   #570716|\n|\nBIJOU THEATRE|\n|\n  ADMIT ONE|\n|\n   25 CENTS|\n|\n-^-^-^-^-^-^-|\n\" CR>\n\t       <PUT 0 8 <BAND <GET 0 8> -3>>\n\t       <RTRUE>)>>"
  },
  "MIRROR-F": {
   "name": "MIRROR-F",
   "file": "things.zil",
   "line": 1067,
   "endLine": 1074,
   "source": "<ROUTINE MIRROR-F ()\n\t <COND (<VERB? MUNG>\n\t\t<TELL\n\"According to superstition, it's bad luck to break mirrors.\" CR>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<TELL\n\"A harried and weary police detective looks back at you, with a\nlook that seems to say, \\\"Look what the cat dragged in.\\\"\" CR>)>>"
  },
  "CLOSET-F": {
   "name": "CLOSET-F",
   "file": "things.zil",
   "line": 1083,
   "endLine": 1093,
   "source": "<ROUTINE CLOSET-F ()\n <COND (<AND <NOT <EQUAL? ,HERE ,MONICA-ROOM ,LINDER-ROOM ,BUTLER-ROOM>>\n\t     <NOT <EQUAL? ,HERE ,ENTRY>>>\n\t<SETG P-WON <>>\n\t<TELL \"(You can't see any \" \"closet\" \" here!)\" CR>)\n       (<VERB? EXAMINE LOOK-INSIDE SEARCH OPEN>\n\t<TELL\n\"You open the closet and find a bunch of stylish clothes, but nothing\nin your size.\" CR>)\n       (<VERB? THROUGH>\n\t<TELL \"The closet's too crowded to get in.\" CR>)>>"
  },
  "GLOBAL-CAN-OF-WORMS-F": {
   "name": "GLOBAL-CAN-OF-WORMS-F",
   "file": "things.zil",
   "line": 1108,
   "endLine": 1115,
   "source": "<ROUTINE GLOBAL-CAN-OF-WORMS-F ()\n\t <COND (<EQUAL? ,PHONG ,PRSO ,WINNER> <RFALSE>)\n\t       (<VERB? FIND>\n\t\t<TELL \"In a sense, they're all around you!\" CR>)\n\t       (<VERB? WHAT>\n\t\t<TELL \"That would be telling!\" CR>)\n\t       (<EQUAL? ,HERE ,KITCHEN>\n\t\t<TELL \"This case is tangled enough already.\" CR>)>>"
  },
  "RANDOM-MEAL-F": {
   "name": "RANDOM-MEAL-F",
   "file": "things.zil",
   "line": 1123,
   "endLine": 1128,
   "source": "<ROUTINE RANDOM-MEAL-F ()\n\t <COND (<VERB? ASK-ABOUT ASK-FOR EAT FIND>\n\t\t<TELL\n\"The blue-plate special at the diner was enough for you.\" CR>)\n\t       (T ;<VERB? EXAMINE>\n\t\t<TELL \"What a strange notion!\" CR>)>>"
  },
  "GLOBAL-HOUSE-F": {
   "name": "GLOBAL-HOUSE-F",
   "file": "things.zil",
   "line": 1136,
   "endLine": 1139,
   "source": "<ROUTINE GLOBAL-HOUSE-F ()\n\t <COND (<VERB? WALK-AROUND>\n\t\t<TELL\n\"(Use compass directions to move around here.)\" CR>)>>"
  },
  "V-SCRIPT": {
   "name": "V-SCRIPT",
   "file": "verbs.zil",
   "line": 9,
   "endLine": 13,
   "source": "<ROUTINE V-SCRIPT ()\n\t<PUT 0 8 <BOR <GET 0 8> 1>>\n\t<TELL \"Here begins\" \" a transcript of interaction with \">\n\t<V-VERSION>\n\t<RTRUE>>"
  },
  "V-UNSCRIPT": {
   "name": "V-UNSCRIPT",
   "file": "verbs.zil",
   "line": 15,
   "endLine": 19,
   "source": "<ROUTINE V-UNSCRIPT ()\n\t<TELL \"Here ends\" \" a transcript of interaction with \">\n\t<V-VERSION>\n\t<PUT 0 8 <BAND <GET 0 8> -2>>\n\t<RTRUE>>"
  },
  "V-$VERIFY": {
   "name": "V-$VERIFY",
   "file": "verbs.zil",
   "line": 21,
   "endLine": 24,
   "source": "<ROUTINE V-$VERIFY ()\n\t <TELL \"Verifying disk...\" CR>\n\t <COND (<VERIFY> <TELL \"The disk is correct.\" CR>)\n\t       (T <TELL CR \"** Disk Failure **\" CR>)>>"
  },
  "V-$TANDY": {
   "name": "V-$TANDY",
   "file": "verbs.zil",
   "line": 42,
   "endLine": 53,
   "source": "<ROUTINE V-$TANDY (\"AUX\" X MSG)\n\t<COND (<NOT ,DEBUG>\n\t       <SET MSG <PICK-ONE ,UNKNOWN-MSGS>>\n\t       <TELL <GET .MSG 0> \"$ta\" <GET .MSG 1> CR>\n\t       <RTRUE>)>\n\t<SET X <GETB 0 1>>\n\t<COND (<==? <BAND .X 8> 0>\n\t       <PUTB 0 1 <BOR .X 8>>\n\t       <TELL \"[on]\" CR>)\n\t      (T\n\t       <PUTB 0 1 <BAND .X -9>>\n\t       <TELL \"[off]\" CR>)>>"
  },
  "V-$WHERE": {
   "name": "V-$WHERE",
   "file": "verbs.zil",
   "line": 55,
   "endLine": 69,
   "source": "<ROUTINE V-$WHERE (\"AUX\" (CNT 0) O L MSG)\n <COND (<NOT ,DEBUG>\n\t<SET MSG <PICK-ONE ,UNKNOWN-MSGS>>\n\t<TELL <GET .MSG 0> \"$whr\" <GET .MSG 1> CR>)\n       (,PRSI <MOVE ,PRSI ,PRSO>)\n       (,PRSO <GOTO ,PRSO>)\n       (T\n\t <REPEAT ()\n\t\t <COND (<SET O <GET ,CHARACTER-TABLE .CNT>>\n\t\t\t<SET L <LOC .O>>\n\t\t\t<TELL D .O \" is \">\n\t\t\t<COND (.L <TELL \"in\"> <THE? .L> <TELL \" \" D .L \".\"CR>)\n\t\t\t      (T  <TELL \"nowhere.\" CR>)>)>\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> ,CHARACTER-MAX>\n\t\t\t<RETURN>)>>)>>"
  },
  "V-DEBUG": {
   "name": "V-DEBUG",
   "file": "verbs.zil",
   "line": 72,
   "endLine": 75,
   "source": "<ROUTINE V-DEBUG (\"AUX\" MSG)\n\t <COND (<SETG DEBUG <NOT ,DEBUG>>\n\t\t<TELL \"Find them bugs, boss!\" CR>)\n\t       (T <TELL \"No bugs left, eh?\" CR>)>>"
  },
  "V-BRIEF": {
   "name": "V-BRIEF",
   "file": "verbs.zil",
   "line": 114,
   "endLine": 118,
   "source": "<ROUTINE V-BRIEF ()\n\t <SETG VERBOSE <>>\n\t <SETG SUPER-BRIEF <>>\n\t <SETG P-SPACE 1>\n\t <TELL \"(O.K., you will get \" \"brief\" \" descriptions.)\" CR>>"
  },
  "V-SUPER-BRIEF": {
   "name": "V-SUPER-BRIEF",
   "file": "verbs.zil",
   "line": 120,
   "endLine": 125,
   "source": "<ROUTINE V-SUPER-BRIEF ()\n\t <SETG SUPER-BRIEF T>\n\t <SETG P-SPACE 0>\n\t <TELL\n\"(O.K., you will get \" \"super-brief descriptions. Remember that objects and\npeople won't be described, only the name of the place you are entering.)\" CR>>"
  },
  "V-VERBOSE": {
   "name": "V-VERBOSE",
   "file": "verbs.zil",
   "line": 127,
   "endLine": 131,
   "source": "<ROUTINE V-VERBOSE ()\n\t <SETG VERBOSE T>\n\t <SETG SUPER-BRIEF <>>\n\t <SETG P-SPACE 1>\n\t <TELL \"(O.K., you will get \" \"verbose\" \" descriptions.)\" CR>>"
  },
  "V-SPACE": {
   "name": "V-SPACE",
   "file": "verbs.zil",
   "line": 135,
   "endLine": 138,
   "source": "<ROUTINE V-SPACE ()\n\t <SETG P-SPACE 1>\n\t <TELL\n\"(O.K., you will now see a space before each input line.)\" CR>>"
  },
  "V-UNSPACE": {
   "name": "V-UNSPACE",
   "file": "verbs.zil",
   "line": 140,
   "endLine": 143,
   "source": "<ROUTINE V-UNSPACE ()\n\t <SETG P-SPACE 0>\n\t <TELL\n\"(O.K., you will not see a space before each input line.)\" CR>>"
  },
  "V-INVENTORY": {
   "name": "V-INVENTORY",
   "file": "verbs.zil",
   "line": 145,
   "endLine": 147,
   "source": "<ROUTINE V-INVENTORY ()\n\t <COND (<FIRST? ,WINNER> <PRINT-CONT ,WINNER>)\n\t       (T <TELL \"You are empty-handed.\" CR>)>>"
  },
  "V-TIME": {
   "name": "V-TIME",
   "file": "verbs.zil",
   "line": 149,
   "endLine": 152,
   "source": "<ROUTINE V-TIME ()\n\t <TELL \"It's now \">\n\t <TIME-PRINT ,PRESENT-TIME>\n\t <CRLF>>"
  },
  "TIME-PRINT": {
   "name": "TIME-PRINT",
   "file": "verbs.zil",
   "line": 154,
   "endLine": 165,
   "source": "<ROUTINE TIME-PRINT (NUM \"AUX\" HR (AM <>))\n\t #DECL ((NUM HR) FIX (AM) <OR FALSE ATOM>)\n\t <COND (<G? <SET HR </ .NUM 60>> 12>\n\t\t<SET HR <- .HR 12>>\n\t\t<SET AM T>)\n\t       (<==? .HR 12> <SET AM T>)>\n\t <PRINTN .HR>\n\t <TELL \":\">\n\t <COND (<L? <SET HR <MOD .NUM 60>> 10>\n\t\t<TELL \"0\">)>\n\t <TELL N .HR \" \">\n\t <TELL <COND (.AM \"a.m.\") (T \"p.m.\")>>>"
  },
  "V-QUIT": {
   "name": "V-QUIT",
   "file": "verbs.zil",
   "line": 167,
   "endLine": 177,
   "source": "<ROUTINE V-QUIT (\"OPTIONAL\" (ASK? T) \"AUX\" SCOR)\n\t #DECL ((ASK?) <OR ATOM <PRIMTYPE LIST>> (SCOR) FIX)\n\t <COND (<OR <AND .ASK?\n\t\t\t <TELL\n\"(If you want to continue from this point at another time, you must\n\\\"SUSPEND\\\" first.) Do you want to \" \"stop your investigation now?\">\n\t\t\t <YES?>>\n\t\t    <NOT .ASK?>>\n\t\t<COND (,TOO-LATE <TOO-LATE-F>)>\n\t\t<QUIT>)\n\t       (ELSE <TELL \"O.K.\" CR>)>>"
  },
  "V-RESTART": {
   "name": "V-RESTART",
   "file": "verbs.zil",
   "line": 179,
   "endLine": 186,
   "source": "<ROUTINE V-RESTART ()\n\t <TELL\n\"Do you wish to restart your investigation?\">\n\t <COND (<YES?>\n\t\t<RESTART>\n\t\t<TELL \"Your original\" \" status couldn't be restored.\"\n\" Consult your instruction manual\" ;\"Nat'l Detective Gazette\" \" if necessary.\"\nCR>)>>"
  },
  "V-RESTORE": {
   "name": "V-RESTORE",
   "file": "verbs.zil",
   "line": 188,
   "endLine": 196,
   "source": "<ROUTINE V-RESTORE ()\n\t <COND (<RESTORE>\n\t\t<TELL \"O.K.\" CR>\n\t\t<V-FIRST-LOOK>)\n\t       (T\n\t\t<TELL \"Your previous\" \" status couldn't be restored.\"\n\" Consult your instruction manual\" ;\"Nat'l Detective Gazette\"\n\" or Reference Card\" \" if necessary.\"\nCR>)>>"
  },
  "V-FIRST-LOOK": {
   "name": "V-FIRST-LOOK",
   "file": "verbs.zil",
   "line": 198,
   "endLine": 200,
   "source": "<ROUTINE V-FIRST-LOOK ()\n\t <COND (<DESCRIBE-ROOM>\n\t\t<COND (<NOT ,SUPER-BRIEF> <DESCRIBE-OBJECTS>)>)>>"
  },
  "V-SAVE": {
   "name": "V-SAVE",
   "file": "verbs.zil",
   "line": 202,
   "endLine": 209,
   "source": "<ROUTINE V-SAVE ()\n\t <COND (<SAVE>\n\t        <TELL \"O.K.\" CR>)\n\t       (T\n\t\t<TELL \"Your story couldn't be suspended.\"\n\" Consult your instruction manual\" ;\"Nat'l Detective Gazette\"\n\" or Reference Card\" \" if necessary.\"\nCR>)>>"
  },
  "TANDY?": {
   "name": "TANDY?",
   "file": "verbs.zil",
   "line": 211,
   "endLine": 211,
   "source": "<ROUTINE TANDY? () <NOT <==? <BAND <GETB 0 1> 8> 0>>>"
  },
  "V-VERSION": {
   "name": "V-VERSION",
   "file": "verbs.zil",
   "line": 213,
   "endLine": 230,
   "source": "<ROUTINE V-VERSION (\"AUX\" (CNT 17))\n\t <TELL\n\"The WITNESS\nInfocom interactive fiction - a mystery story|\nCopyright (c) 1983 by Infocom, Inc.  All rights reserved.|\n\">\n\t ;<COND (<TANDY?>\n\t\t<TELL \"Licensed to Tandy Corporation.\" CR>)>\n\t <TELL \"The WITNESS is a registered trademark of Infocom, Inc.|\nRelease number \">\n\t <PRINTN <BAND <GET 0 1> *3777*>>\n\t <TELL \" / Serial number \">\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> 23>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<PRINTC <GETB 0 .CNT>>)>>\n\t <CRLF>>"
  },
  "YES?": {
   "name": "YES?",
   "file": "verbs.zil",
   "line": 232,
   "endLine": 240,
   "source": "<ROUTINE YES? ()\n\t <PRINTI \" (Answer YES or NO.) >\">\n\t <READ ,P-INBUF ,P-LEXV>\n\t <COND (<0? <GETB ,P-LEXV ,P-LEXWORDS>>\n\t\t<RFALSE>)\n\t       (<EQUAL? <GET ,P-LEXV 1> ,W?YES ,W?Y>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "DESCRIBE-OBJECT": {
   "name": "DESCRIBE-OBJECT",
   "file": "verbs.zil",
   "line": 249,
   "endLine": 282,
   "source": "<ROUTINE DESCRIBE-OBJECT (OBJ V? LEVEL \"AUX\" (STR <>) AV)\n\t <COND (<AND <0? .LEVEL>\n\t\t     <APPLY <GETP .OBJ ,P?DESCFCN> ,M-OBJDESC>>\n\t\t<RTRUE>)>\n\t <COND (<FSET? .OBJ ,PERSON> <THIS-IS-S-HE .OBJ>)\n\t       (T <THIS-IS-IT .OBJ>)>\n\t <COND (<AND <0? .LEVEL>\n\t\t     <OR <AND <NOT <FSET? .OBJ ,TOUCHBIT>>\n\t\t\t      <SET STR <GETP .OBJ ,P?FDESC>>>\n\t\t\t <SET STR <GETP .OBJ ,P?LDESC>>>>\n\t\t<TELL .STR>)\n\t       (<0? .LEVEL>\n\t\t<COND (<FSET? .OBJ ,PERSON>\n\t\t       <TELL D .OBJ \" is here.\">)\n\t\t      (T\n\t\t       <TELL \"There's \"\n\t\t\t     <COND (<FSET? .OBJ ,AN> \"an \")\n\t\t\t\t   (T \"a \")>\n\t\t\t     D .OBJ \" here.\">)>)\n\t       (ELSE\n\t\t<TELL <GET ,INDENTS .LEVEL>>\n\t\t<COND (<FSET? .OBJ ,PERSON>\n\t\t       <TELL D .OBJ>)\n\t\t      (T\n\t\t       <TELL <COND (<FSET? .OBJ ,AN> \"an \")\n\t\t\t\t   (T \"a \")>\n\t\t\t     D .OBJ>)>)>\n\t <COND (<AND <0? .LEVEL>\n\t\t     <SET AV <LOC ,WINNER>>\n\t\t     <FSET? .AV ,VEHBIT>>\n\t\t<TELL \" (outside\"> <THE? .AV> <TELL \" \" D .AV \")\">)>\n\t <CRLF>\n\t <COND (<AND <SEE-INSIDE? .OBJ> <FIRST? .OBJ>>\n\t\t<PRINT-CONT .OBJ .V? .LEVEL>)>>"
  },
  "DESCRIBE-OBJECTS": {
   "name": "DESCRIBE-OBJECTS",
   "file": "verbs.zil",
   "line": 284,
   "endLine": 289,
   "source": "<ROUTINE DESCRIBE-OBJECTS (\"OPTIONAL\" (V? <>))\n <COND (,LIT\n\t<COND (<FIRST? ,HERE>\n\t       <PRINT-CONT ,HERE <SET V? <OR .V? ,VERBOSE>> -1>)>)\n       (ELSE\n\t<TELL \"You can't see anything in the dark.\" CR>)>>"
  },
  "DESCRIBE-ROOM": {
   "name": "DESCRIBE-ROOM",
   "file": "verbs.zil",
   "line": 291,
   "endLine": 330,
   "source": "<ROUTINE DESCRIBE-ROOM (\"OPTIONAL\" (LOOK? <>) \"AUX\" V? (F? <>) STR L)\n\t <SET V? <OR .LOOK? ,VERBOSE>>\n\t <COND (<NOT <FSET? ,HERE ,TOUCHBIT>>\n\t\t<FSET ,HERE ,TOUCHBIT>\n\t\t<SET V? T>\n\t\t<SET F? T>)>\n\t <COND (<IN? ,HERE ,ROOMS>\n\t\t<COND (,P-PROMPT\n\t\t       <TELL \"You are now \"\n\t\t\t     <COND (<FSET? ,HERE ,ON-NOT-IN> \"on\")\n\t\t\t\t   (T \"in\")>>\n\t\t       <THE? ,HERE>\n\t\t       <TELL \" \" D ,HERE \".\" CR>)\n\t\t      (T\n\t\t       <TELL \"(\" D ,HERE \")\" CR>)>)>\n\t <COND (<OR .LOOK? <NOT ,SUPER-BRIEF>>\n\t\t<SET L ,PLAYER-HIDING>\n\t\t<COND (.L\n\t\t       <TELL \"(You are hiding behind\">\n\t\t       <THE? .L>\n\t\t       <TELL \" \" D .L \".)\" CR>)\n\t\t      (<FSET? <SET L <LOC ,WINNER>> ,VEHBIT>\n\t\t       <TELL \"(You are \">\n\t\t       <COND (<FSET? .L ,SURFACEBIT>\n\t\t\t      <TELL \"sitting o\">)\n\t\t\t     (T <TELL \"standing i\">)>\n\t\t       <TELL \"n\">\n\t\t       <THE? .L>\n\t\t       <TELL \" \" D .L \".)\" CR>)>\n\t\t<COND (<AND .V? <APPLY <GETP ,HERE ,P?ACTION> ,M-LOOK>>\n\t\t       <RTRUE>)\n\t\t      (<AND .V? <SET STR <GETP ,HERE ,P?FDESC>>>\n\t\t       <TELL .STR CR>)\n\t\t      (<AND .V? <SET STR <GETP ,HERE ,P?LDESC>>>\n\t\t       <TELL .STR CR>)\n\t\t      (T <APPLY <GETP ,HERE ,P?ACTION> ,M-FLASH>)>\n\t\t<COND (<NOT <==? ,HERE .L>>\n\t\t       <APPLY <GETP .L ,P?ACTION> ,M-LOOK>)>)>\n\t <COND (<GETP ,HERE ,P?CORRIDOR> <CORRIDOR-LOOK>)>\n\t T>"
  },
  "FIRSTER": {
   "name": "FIRSTER",
   "file": "verbs.zil",
   "line": 349,
   "endLine": 363,
   "source": "<ROUTINE FIRSTER (OBJ LEVEL)\n\t <COND (<==? .OBJ ,WINNER>\n\t\t<TELL \"You are carrying:\" CR>)\n\t       (<NOT <IN? .OBJ ,ROOMS>>\n\t\t<COND (<G? .LEVEL 0>\n\t\t       <TELL <GET ,INDENTS .LEVEL>>)>\n\t\t<COND (<FSET? .OBJ ,SURFACEBIT>\n\t\t       <TELL \"Sitting on\">\n\t\t       <THE? .OBJ>\n\t\t       <TELL \" \" D .OBJ \" can be seen:\" CR>)\n\t\t      (<FSET? .OBJ ,PERSON>\n\t\t       <TELL D .OBJ \" is holding:\" CR>)\n\t\t      (ELSE\n\t\t       <TELL \"The \" D .OBJ\n\t\t\t     \" contains:\" CR>)>)>>"
  },
  "GONE-CRAZY": {
   "name": "GONE-CRAZY",
   "file": "verbs.zil",
   "line": 365,
   "endLine": 373,
   "source": "<ROUTINE GONE-CRAZY ()\n\t <TELL\n\"You vaguely hear screaming and yelling through a haze of confusion and\nthe tugs of your conscience asking \\\"How could you have done it?\\\"\nBefore you can answer, you hear police sirens come near. Sergeant Duffy\nand two others enter and grab you by the arms. They take you to a\nwaiting car, where, forlorn and disgusted, you think about being sent up\nfor life. \\\"Maybe,\\\" you think, \\\"I shouldn't have done that.\\\"\" CR>\n\t <CASE-OVER>>"
  },
  "GOTO": {
   "name": "GOTO",
   "file": "verbs.zil",
   "line": 375,
   "endLine": 382,
   "source": "<ROUTINE GOTO (RM \"OPTIONAL\" (V? T) \"AUX\" F WT)\n\t #DECL ((RM) OBJECT)\n\t<WHERE-UPDATE ,PLAYER>\n\t<MOVE ,PLAYER .RM>\n\t<SETG HERE .RM>\n\t<SETG LIT T>\n\t<APPLY <GETP ,HERE ,P?ACTION> ,M-ENTER>\n\t<COND (.V? <V-FIRST-LOOK>)>>"
  },
  "HACK-HACK": {
   "name": "HACK-HACK",
   "file": "verbs.zil",
   "line": 384,
   "endLine": 389,
   "source": "<ROUTINE HACK-HACK (STR)\n <COND (<IN? ,PRSO ,GLOBAL-OBJECTS>\n\t<SETG P-WON <>>\n\t<TELL \"(You can't see any\" PRSO \" here.)\" CR>)\n       (T\n\t<TELL .STR THE-PRSO <PICK-ONE ,HO-HUM> CR>)>>"
  },
  "HELD?": {
   "name": "HELD?",
   "file": "verbs.zil",
   "line": 396,
   "endLine": 401,
   "source": "<ROUTINE HELD? (OBJ)\n\t <REPEAT ()\n\t\t <COND (<NOT <LOC .OBJ>> <RFALSE>)\n\t\t       (<EQUAL? <LOC .OBJ> ,ROOMS ,GLOBAL-OBJECTS> <RFALSE>)\n\t\t       (<IN? .OBJ ,WINNER> <RTRUE>)\n\t\t       (T <SET OBJ <LOC .OBJ>>)>>>"
  },
  "IDROP": {
   "name": "IDROP",
   "file": "verbs.zil",
   "line": 403,
   "endLine": 415,
   "source": "<ROUTINE IDROP ()\n\t <COND (<FSET? ,PRSO ,PERSON>\n\t\t<TELL D ,PRSO \" wouldn't enjoy that.\" CR>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? ,PRSO ,WINNER>>\n\t\t     <NOT <IN? <LOC ,PRSO> ,WINNER>>>\n\t\t<TELL \"You're not carrying\" THE-PRSO \".\" CR>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? ,PRSO ,WINNER>>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<TELL \"Too bad, but\" THE-PRSO \" is closed.\"CR>\n\t\t<RFALSE>)\n\t       (T <MOVE ,PRSO ,HERE ;<LOC ,WINNER>> <RTRUE>)>>"
  },
  "ITAKE": {
   "name": "ITAKE",
   "file": "verbs.zil",
   "line": 428,
   "endLine": 465,
   "source": "<ROUTINE ITAKE (\"OPTIONAL\" (VB T) \"AUX\" CNT OBJ)\n\t #DECL ((VB) <OR ATOM FALSE> (CNT) FIX (OBJ) OBJECT)\n\t <COND (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t\t<COND (.VB\n\t\t       <TELL \"You can't take\" THE-PRSO \".\" CR>)>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? <LOC ,PRSO> ,WINNER>>\n\t\t     <G? <+ <WEIGHT ,PRSO> <WEIGHT ,WINNER>> ,LOAD-ALLOWED>>\n\t\t<COND (.VB\n\t\t       <TELL \"Your load's too heavy\">\n\t\t       <COND (<L? ,LOAD-ALLOWED ,LOAD-MAX>\n\t\t\t  <TELL \", especially in light of your condition.\">)\n\t\t\t     (ELSE <TELL \".\">)>\n\t\t       <CRLF>)>\n\t\t<RFATAL>)\n\t       (<AND <G? <SET CNT <CCOUNT ,WINNER>> ,FUMBLE-NUMBER>\n\t\t     <PROB <* .CNT ,FUMBLE-PROB>>>\n\t\t<SET OBJ <FIRST? ,WINNER>>\n\t\t<SET OBJ <NEXT? .OBJ>>\n\t\t<TELL \"Too bad, but\">\n\t\t<THE? .OBJ>\n\t\t<TELL \" \" D .OBJ\n\t\t      \" slips from your arms while you are taking\"\n\t\t      THE-PRSO\n\t\t      \", and both tumble to the \">\n\t\t<COND (<==? <GETP ,HERE ,P?LINE> ,OUTSIDE-LINE-C>\n\t\t       <TELL \"ground\">)\n\t\t      (T <TELL \"floor\">)>\n\t\t<TELL \".\" CR>\n\t\t<MOVE .OBJ ,HERE>\t;<PERFORM ,V?DROP .OBJ>\n\t\t<MOVE ,PRSO ,HERE>\n\t\t<RFATAL>)\n\t       (T\n\t\t<MOVE ,PRSO ,WINNER>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<FCLEAR ,PRSO ,NDESCBIT>\n\t\t<FCLEAR ,PRSO ,INVISIBLE>\n\t\t<RTRUE>)>>"
  },
  "CCOUNT": {
   "name": "CCOUNT",
   "file": "verbs.zil",
   "line": 467,
   "endLine": 473,
   "source": "<ROUTINE CCOUNT (OBJ \"AUX\" (CNT 0) X)\n\t <COND (<SET X <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<SET CNT <+ .CNT 1>>\n\t\t\t<COND (<NOT <SET X <NEXT? .X>>>\n\t\t\t       <RETURN>)>>)>\n\t .CNT>"
  },
  "NOT-HERE": {
   "name": "NOT-HERE",
   "file": "verbs.zil",
   "line": 475,
   "endLine": 479,
   "source": "<ROUTINE NOT-HERE (OBJ)\n\t <SETG P-WON <>>\n\t <TELL \"(You can't see\">\n\t <THE? .OBJ>\n\t <TELL \" \" D .OBJ \" here.)\" CR>>"
  },
  "PRINT-CONT": {
   "name": "PRINT-CONT",
   "file": "verbs.zil",
   "line": 481,
   "endLine": 539,
   "source": "<ROUTINE PRINT-CONT (OBJ \"OPTIONAL\" (V? <>) (LEVEL 0)\n\t\t     \"AUX\" Y 1ST? AV (STR <>) (PV? <>) (INV? <>))\n\t#DECL ((OBJ) OBJECT (LEVEL) FIX)\n <COND (<NOT <SET Y <FIRST? .OBJ>>> <RTRUE>)>\n <COND (<AND <SET AV <LOC ,WINNER>> <FSET? .AV ,VEHBIT>>\n\tT)\n       (ELSE <SET AV <>>)>\n <SET 1ST? T>\n <COND (<EQUAL? ,WINNER .OBJ <LOC .OBJ>>\n\t<SET INV? T>)\n       (ELSE\n\t<REPEAT ()\n\t <COND (<NOT .Y> <RETURN <NOT .1ST?>>)\n\t       (<==? .Y .AV> <SET PV? T>)\n\t       (<==? .Y ,WINNER>)\n\t       (<AND %<COND (<GASSIGNED? PREDGEN>'<NOT <FSET? .Y ,INVISIBLE>>)\n\t\t\t    (T '<OR <NOT <FSET? .Y ,INVISIBLE>>\n\t\t\t\t    <AND ,DEBUG <TELL \"[invisible] \">>>)>\n\t\t     <NOT <FSET? .Y ,TOUCHBIT>>\n\t\t     <OR ;<APPLY <GETP .Y ,P?DESCFCN> ,M-OBJDESC>\n\t\t\t <SET STR <GETP .Y ,P?FDESC>>>>\n\t\t<COND (<OR <NOT <FSET? .Y ,NDESCBIT>>\n\t\t\t   <AND ,DEBUG <TELL \"[ndescbit] \">>>\n\t\t       <SET 1ST? <>>\n\t\t       <SET LEVEL 0>\n\t\t       <COND (.STR\n\t\t\t      <TELL .STR CR>\n\t\t\t      <SET STR <>>\n\t\t\t      <COND (<FSET? .Y ,PERSON> <THIS-IS-S-HE .Y>)\n\t\t\t\t    (T <THIS-IS-IT .Y>)>)>)>\n\t\t<COND (<AND <SEE-INSIDE? .Y>\n\t\t\t    <NOT <GETP <LOC .Y> ,P?DESCFCN>>\n\t\t\t    <FIRST? .Y>>\n\t\t       <PRINT-CONT .Y .V? 0>)>)>\n\t <SET Y <NEXT? .Y>>>)>\n <SET Y <FIRST? .OBJ>>\n <REPEAT ()\n\t <COND (<NOT .Y>\n\t\t<COND (<AND .PV? .AV <FIRST? .AV>>\n\t\t       <PRINT-CONT .AV .V? .LEVEL>)>\n\t\t<RETURN <NOT .1ST?>>)\n\t       (<EQUAL? .Y .AV ,PLAYER>)\n\t       (<AND %<COND (<GASSIGNED? PREDGEN>'<NOT <FSET? .Y ,INVISIBLE>>)\n\t\t\t    (T '<OR <NOT <FSET? .Y ,INVISIBLE>>\n\t\t\t\t    <AND ,DEBUG <TELL \"[invisible] \">>>)>\n\t\t     <OR .INV?\n\t\t\t <FSET? .Y ,TOUCHBIT>\n\t\t\t <NOT <GETP .Y ,P?FDESC>>>>\n\t\t<COND (<OR <NOT <FSET? .Y ,NDESCBIT>>\n\t\t\t   <AND ,DEBUG <TELL \"[ndescbit] \">>>\n\t\t       <COND (.1ST?\n\t\t\t      <COND (<FIRSTER .OBJ .LEVEL>\n\t\t\t\t     <COND (<L? .LEVEL 0> <SET LEVEL 0>)>)>\n\t\t\t      <SET LEVEL <+ 1 .LEVEL>>\n\t\t\t      <SET 1ST? <>>)>\n\t\t       <DESCRIBE-OBJECT .Y .V? .LEVEL>)\n\t\t      (<AND <FIRST? .Y> <SEE-INSIDE? .Y>>\n\t\t       <PRINT-CONT .Y .V? .LEVEL>)>)>\n\t <SET Y <NEXT? .Y>>>>"
  },
  "PRINT-CONTENTS": {
   "name": "PRINT-CONTENTS",
   "file": "verbs.zil",
   "line": 541,
   "endLine": 559,
   "source": "<ROUTINE PRINT-CONTENTS (OBJ \"AUX\" F N (1ST? T))\n\t #DECL ((OBJ) OBJECT (F N) <OR FALSE OBJECT>)\n\t <COND (<SET F <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<SET N <NEXT? .F>>\n\t\t\t<COND (.1ST? <SET 1ST? <>>)\n\t\t\t      (ELSE\n\t\t\t       <TELL \", \">\n\t\t\t       <COND (<NOT .N> <TELL \"and \">)>)>\n\t\t\t<COND (<FSET? .F ,PERSON>\n\t\t\t       <TELL D .F>)\n\t\t\t      (T\n\t\t\t       <TELL <COND (<FSET? .F ,AN> \"an \")\n\t\t\t\t\t   (T \"a \")>\n\t\t\t\t     D .F>)>\n\t\t\t<COND (<FSET? .F ,PERSON> <THIS-IS-S-HE .F>)\n\t\t\t      (T <THIS-IS-IT .F>)>\n\t\t\t<SET F .N>\n\t\t\t<COND (<NOT .F> <RETURN>)>>)>>"
  },
  "ROOM-CHECK": {
   "name": "ROOM-CHECK",
   "file": "verbs.zil",
   "line": 564,
   "endLine": 582,
   "source": "<ROUTINE ROOM-CHECK ()\n\t <COND (<IN? ,PRSO ,ROOMS>\n\t\t<COND (<EQUAL? ,PRSO ,HERE ,GLOBAL-HERE>\n\t\t       <PERFORM ,PRSA ,GLOBAL-ROOM ,PRSI>\n\t\t       <RTRUE>)\n\t\t      ;(<DOBJ? DRIVEWAY> <RFALSE>)\n\t\t      (T\n\t\t       <TELL \"You aren't in that place!\" CR>\n\t\t       <RTRUE>)>)\n\t       (<OR <DOBJ? PSEUDO-OBJECT>\n\t\t    <EQUAL? <META-LOC ,PRSO>\n\t\t\t    ,HERE ,GLOBAL-OBJECTS ,LOCAL-GLOBALS>>\n\t\t<RFALSE>)\n\t       (T\n\t\t<SETG P-WON <>>\n\t\t<TELL \"(You can't see any \">\n\t\t<COND (<==? ,PRSO ,CAR-WINDOW> <TELL \"window\">)\n\t\t      (T <TELL D ,PRSO>)>\n\t\t<TELL \" here!)\" CR>)>>"
  },
  "SEE-INSIDE?": {
   "name": "SEE-INSIDE?",
   "file": "verbs.zil",
   "line": 584,
   "endLine": 586,
   "source": "<ROUTINE SEE-INSIDE? (OBJ)\n\t <AND <NOT <FSET? .OBJ ,INVISIBLE>>\n\t      <OR <FSET? .OBJ ,TRANSBIT> <FSET? .OBJ ,OPENBIT>>>>"
  },
  "WEIGHT": {
   "name": "WEIGHT",
   "file": "verbs.zil",
   "line": 590,
   "endLine": 596,
   "source": "<ROUTINE WEIGHT (OBJ \"AUX\" CONT (WT 0))\n\t #DECL ((OBJ) OBJECT (CONT) <OR FALSE OBJECT> (WT) FIX)\n\t <COND (<SET CONT <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<SET WT <+ .WT <WEIGHT .CONT>>>\n\t\t\t<COND (<NOT <SET CONT <NEXT? .CONT>>> <RETURN>)>>)>\n\t <+ .WT <GETP .OBJ ,P?SIZE>>>"
  },
  "PRE-ACCUSE": {
   "name": "PRE-ACCUSE",
   "file": "verbs.zil",
   "line": 616,
   "endLine": 636,
   "source": "<ROUTINE PRE-ACCUSE ()\n\t <COND (<NOT ,PRSI>\n\t\t<SETG PRSI ,GLOBAL-MURDER>)>\n\t <COND (<FSET? ,CORPSE ,INVISIBLE>\n\t\t<TELL \"Nothing's dead here but your head!\" CR>)\n\t       (<AND <DOBJ? GLOBAL-LINDER CORPSE> <IOBJ? GLOBAL-SUICIDE>>\n\t\t<TELL\n\"Duffy appears for a moment. \"\n\"\\\"So you believe that Linder's death was suicide? I'm not convinced.\nBut if you'll \"\n\"just \\\"arrest Mr. Linder,\\\" we can go on from there.\\\" He disappears again.\"\nCR>\n\t\t<RTRUE>)\n\t       (<AND <DOBJ? GLOBAL-MRS-LINDER> <IOBJ? GLOBAL-SUICIDE>>\n\t\t<TELL \"Everybody knows that!\" CR>\n\t\t<RTRUE>)\n\t       (<NOT <==? ,PRSI ,GLOBAL-MURDER>>\n\t\t<TELL \"What an accusation!\" CR>)\n\t       (<NOT <FSET? ,PRSO ,PERSON>>\n\t\t<TELL \"What a detective! \\\"Quick, Sergeant! Arrest that \"\n\t\t      D ,PRSO \"!\\\"\" CR>)>>"
  },
  "V-ACCUSE": {
   "name": "V-ACCUSE",
   "file": "verbs.zil",
   "line": 638,
   "endLine": 639,
   "source": "<ROUTINE V-ACCUSE ()\n\t <TELL D ,PRSO \" shrugs off your accusation.\" CR>>"
  },
  "PRE-SANALYZE": {
   "name": "PRE-SANALYZE",
   "file": "verbs.zil",
   "line": 641,
   "endLine": 643,
   "source": "<ROUTINE PRE-SANALYZE ()\n\t<PERFORM ,V?ANALYZE ,PRSI ,PRSO>\n\t<RTRUE>>"
  },
  "V-SANALYZE": {
   "name": "V-SANALYZE",
   "file": "verbs.zil",
   "line": 645,
   "endLine": 646,
   "source": "<ROUTINE V-SANALYZE ()\n\t <TELL \"[Foo!! This is a bug!!]\" CR>>"
  },
  "PRE-ANALYZE": {
   "name": "PRE-ANALYZE",
   "file": "verbs.zil",
   "line": 648,
   "endLine": 657,
   "source": "<ROUTINE PRE-ANALYZE ()\n <COND (<IOBJ? GLOBAL-FINGERPRINTS> <RFALSE>)\n       (<NOT ,MET-DUFFY?>\n\t<TELL\n\"You haven't met Sergeant Duffy yet tonight.\"\n\" You'll need his help to do that.\" CR>\n\t<RTRUE>)\n       (,DUFFY-WITH-STILES\n\t<TELL\n\"You'd better wait until Duffy takes care of his prisoner.\" CR>)>>"
  },
  "V-ANALYZE": {
   "name": "V-ANALYZE",
   "file": "verbs.zil",
   "line": 659,
   "endLine": 674,
   "source": "<ROUTINE V-ANALYZE ()\n\t <COND (<==? ,PRSI ,GLOBAL-FINGERPRINTS>\n\t\t<PERFORM ,V?FINGERPRINT ,PRSO>\n\t\t<RTRUE>)\n\t       (<OR ,FINGERPRINT-OBJ ,DUFFY-AT-CORONER <FSET? ,PRSO ,TAKEBIT>>\n\t\t<DO-ANALYZE>)\n\t       (<IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t<TELL\n\"Duffy appears in an instant. \\\"Well, I might be able to analyze\"\nTHE-PRSO \",\nbut you don't even have it with you!\\\"  With that, he discreetly leaves.\" CR>)\n\t       (T\n\t\t<TELL\n\"Sergeant Duffy appears with a puzzled look on his face.\" \" \\\"With all\nrespect, I don't think I can take THAT to the laboratory! I'll\nbe nearby if you need me.\\\"\" \" He leaves, shaking his head slowly.\" CR>)>>"
  },
  "V-ANSWER": {
   "name": "V-ANSWER",
   "file": "verbs.zil",
   "line": 676,
   "endLine": 680,
   "source": "<ROUTINE V-ANSWER ()\n\t <TELL \"Nobody seems to be waiting for your answer.\" CR>\n\t <SETG P-CONT <>>\n\t <SETG QUOTE-FLAG <>>\n\t <RTRUE>>"
  },
  "V-REPLY": {
   "name": "V-REPLY",
   "file": "verbs.zil",
   "line": 682,
   "endLine": 687,
   "source": "<ROUTINE V-REPLY ()\n\t <SETG P-CONT <>>\n\t <SETG QUOTE-FLAG <>>\n\t <COND (<FSET? ,PRSO ,DOORBIT>\n\t\t<TELL \"No one's knocking at\" THE-PRSO \".\" CR>)\n\t       (T <TELL \"Too bad, but\" THE-PRSO \" doesn't care.\" CR>)>>"
  },
  "PRE-ARREST": {
   "name": "PRE-ARREST",
   "file": "verbs.zil",
   "line": 689,
   "endLine": 717,
   "source": "<ROUTINE PRE-ARREST ()\n\t <COND (<FSET? ,CORPSE ,INVISIBLE>\n\t\t<TELL \"For what? You have no evidence of a crime yet.\" CR>)\n\t       (<NOT ,MET-DUFFY?>\n\t\t<TELL\n\"You haven't met Sergeant Duffy yet tonight.\"\n\" You'll need his help to do that.\" CR>)\n\t       (<OR ,FINGERPRINT-OBJ ,DUFFY-AT-CORONER>\n\t\t<TELL\n\"Sergeant Duffy isn't around right now. You'll have to wait for him to\nhelp you make the arrest.\" CR>)\n\t       (<AND <NOT <DOBJ? CORPSE GLOBAL-LINDER OBJECT-PAIR>>\n\t\t     <IOBJ? GLOBAL-SUICIDE RANDOM-CRIME>>\n\t\t<TELL\n\"Your Chief would probably want you to be sure there's no bigger fish\nhere, like an honest-to-Pete murderer.\" CR>)\n\t       (<DOBJ? GLOBAL-DUFFY> <RFALSE>)\n\t       (<OR <AND <NOT <FSET? ,PRSO ,PERSON>>\n\t\t\t <NOT <DOBJ? CORPSE GLOBAL-LINDER OBJECT-PAIR>>>\n\t\t    <AND ,PRSI <NOT <IOBJ? GLOBAL-MURDER>>>>\n\t\t<TELL \"What a detective! \\\"Quick, Sergeant! Arrest that \"\n\t\t\tD ,PRSO>\n\t\t<COND (,PRSI <TELL \" for \" D ,PRSI>)>\n\t\t<TELL \" before \"\n\t\t\t<COND (<FSET? ,PRSO ,FEMALE> \"she\")\n\t\t\t      (<OR <DOBJ? GLOBAL-DUFFY> <FSET? ,PRSO ,PERSON>>\n\t\t\t       \"he\")\n\t\t\t      (T \"it\")>\n\t\t\t\" gets away!\\\"\" CR>)>>"
  },
  "V-ARREST": {
   "name": "V-ARREST",
   "file": "verbs.zil",
   "line": 719,
   "endLine": 728,
   "source": "<ROUTINE V-ARREST ()\n\t <COND (<FSET? ,PRSO ,PERSON>\n\t\t<TELL \n\"You realize that you don't have enough evidence to convict \" D ,PRSO\n\", so you decide to continue the investigation.\" CR>)\n\t       (T\n\t\t<TELL\n\"Sergeant Duffy enters, strokes his chin, and in a puzzled voice says,\n\\\"With all respect, I think we'd be laughed out of the station if we\ntried to charge\" THE-PRSO \" with murder!\\\" He leaves quietly.\" CR>)>> "
  },
  "V-ASK-ABOUT": {
   "name": "V-ASK-ABOUT",
   "file": "verbs.zil",
   "line": 730,
   "endLine": 741,
   "source": "<ROUTINE V-ASK-ABOUT ()\n\t <COND (<==? ,PRSO ,PLAYER>\n\t\t<TELL\n\"It's been a long week, but talking to yourself won't end it any sooner.\" CR>)\n\t       (<NOT <FSET? ,PRSO ,PERSON>>\n\t\t<TELL \"Hey, Duffy! Look at your boss talking to \"\n\t\t\t<COND (<FSET? ,PRSO ,AN> \"an \")\n\t\t\t      (T \"a \")>\n\t\t\tD ,PRSO \"!\" CR>)\n\t       (T\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<TELL D ,PRSO \" doesn't seem to know about that.\" CR>)>>"
  },
  "PRE-ASK-CONTEXT-ABOUT": {
   "name": "PRE-ASK-CONTEXT-ABOUT",
   "file": "verbs.zil",
   "line": 743,
   "endLine": 751,
   "source": "<ROUTINE PRE-ASK-CONTEXT-ABOUT (\"AUX\" P)\n <COND (<AND ,QCONTEXT\n\t     <==? ,HERE ,QCONTEXT-ROOM>\n\t     <==? ,HERE <META-LOC ,QCONTEXT>>>\n\t<PERFORM ,V?ASK-ABOUT ,QCONTEXT ,PRSO>\n\t<RTRUE>)\n       (<SET P <FIND-FLAG ,HERE ,PERSON ,WINNER>>\n\t<PERFORM ,V?ASK-ABOUT .P ,PRSO>\n\t<RTRUE>)>>"
  },
  "V-ASK-CONTEXT-ABOUT": {
   "name": "V-ASK-CONTEXT-ABOUT",
   "file": "verbs.zil",
   "line": 753,
   "endLine": 754,
   "source": "<ROUTINE V-ASK-CONTEXT-ABOUT ()\n\t<TELL \"You aren't talking to anyone!\" CR>>"
  },
  "V-ASK-FOR": {
   "name": "V-ASK-FOR",
   "file": "verbs.zil",
   "line": 756,
   "endLine": 764,
   "source": "<ROUTINE V-ASK-FOR ()\n\t <COND (<AND <FSET? ,PRSO ,PERSON> <NOT <==? ,PRSO ,PLAYER>>>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<TELL D ,PRSO>\n\t\t<COND (<IN? ,PRSI ,PRSO>\n\t\t       <TELL \" hands you\" THE-PRSI \".\" CR>\n\t\t       <MOVE ,PRSI ,WINNER>)\n\t\t      (T <TELL \" doesn't have that.\" CR>)>)\n\t       (T <TELL <PICK-ONE ,YUKS> CR>)>>"
  },
  "PRE-ASK-CONTEXT-FOR": {
   "name": "PRE-ASK-CONTEXT-FOR",
   "file": "verbs.zil",
   "line": 766,
   "endLine": 774,
   "source": "<ROUTINE PRE-ASK-CONTEXT-FOR (\"AUX\" P)\n <COND (<AND ,QCONTEXT\n\t     <==? ,HERE ,QCONTEXT-ROOM>\n\t     <==? ,HERE <META-LOC ,QCONTEXT>>>\n\t<PERFORM ,V?ASK-FOR ,QCONTEXT ,PRSO>\n\t<RTRUE>)\n       (<SET P <FIND-FLAG ,HERE ,PERSON ,WINNER>>\n\t<PERFORM ,V?ASK-FOR .P ,PRSO>\n\t<RTRUE>)>>"
  },
  "V-ASK-CONTEXT-FOR": {
   "name": "V-ASK-CONTEXT-FOR",
   "file": "verbs.zil",
   "line": 776,
   "endLine": 777,
   "source": "<ROUTINE V-ASK-CONTEXT-FOR ()\n\t<TELL \"You aren't talking to anyone!\" CR>>"
  },
  "V-ATTACK": {
   "name": "V-ATTACK",
   "file": "verbs.zil",
   "line": 779,
   "endLine": 779,
   "source": "<ROUTINE V-ATTACK () <IKILL \"attack\">>"
  },
  "V-BRUSH": {
   "name": "V-BRUSH",
   "file": "verbs.zil",
   "line": 781,
   "endLine": 786,
   "source": "<ROUTINE V-BRUSH ()\n <COND (<DOBJ? OUTSIDE-GUN MUDDY-SHOES>\n\t<TELL \"You shouldn't try to clean a piece of evidence.\" CR>)\n       (T <TELL\n\"\\\"Cleanliness is next to Godliness,\\\" but in this case it seems to be\nnext to Impossible.\" CR>)>>"
  },
  "V-CALL-LOSE": {
   "name": "V-CALL-LOSE",
   "file": "verbs.zil",
   "line": 788,
   "endLine": 789,
   "source": "<ROUTINE V-CALL-LOSE ()\n\t <TELL \"(You must use a verb!)\" CR>>"
  },
  "V-$CALL": {
   "name": "V-$CALL",
   "file": "verbs.zil",
   "line": 791,
   "endLine": 807,
   "source": "<ROUTINE V-$CALL (\"AUX\" PER (MOT <>))\n\t <COND (<FSET? ,PRSO ,PERSON>\n\t\t<SET PER <GET ,CHARACTER-TABLE <GETP ,PRSO ,P?CHARACTER>>>\n\t\t<COND (<IN-MOTION? .PER> <SET MOT T>)>\n\t\t<COND (<OR <==? <META-LOC .PER> ,HERE> <CORRIDOR-LOOK .PER>>\n\t\t       <FSET .PER ,TOUCHBIT>\n\t\t       <TELL D .PER>\n\t\t       <COND (<GRAB-ATTENTION .PER>\n\t\t\t      <COND (.MOT\n\t\t\t\t   <TELL \" stops and turns toward you.\" CR>)\n\t\t\t      \t    (T <TELL \" is listening.\" CR>)>)\n\t\t\t     (T\n\t\t\t      <TELL \" ignores you.\" CR>)>)\n\t\t      (T\n\t\t       <SETG P-WON <>>\n\t\t       <TELL \"(You don't see \" D .PER \" here.)\" CR>)>)\n\t       (T <V-CALL-LOSE>)>>"
  },
  "V-PHONE": {
   "name": "V-PHONE",
   "file": "verbs.zil",
   "line": 809,
   "endLine": 843,
   "source": "<ROUTINE V-PHONE (\"AUX\" PER)\n\t <COND (<AND <FSET? ,PRSO ,PERSON>\n\t\t     <SET PER <GET ,CHARACTER-TABLE<GETP ,PRSO ,P?CHARACTER>>>\n\t\t     <OR <==? <META-LOC .PER> ,HERE> <CORRIDOR-LOOK .PER>>>\n\t\t<PERFORM ,V?$CALL ,PRSO>\n\t\t<RTRUE>)\n\t       (<AND ,PRSI <NOT <==? ,PRSI ,TELEPHONE>>>\n\t\t<TELL\n\"Too bad, but\" THE-PRSI \" isn't wired for phoning.\" CR>)\n\t       (<NOT <PHONE-IN? ,HERE>>\n\t\t<TELL \"There's no phone here.\" CR>)\n\t       (<AND <DOBJ? INTNUM> <==? ,P-NUMBER 0>>\n\t\t<TELL\n\"You dial the operator, who doesn't go for any of your cute lines, but\ndoes connect you with the police station. \"\n\"The night clerk at the station says he'll give Duffy your message.\" CR>)\n\t       (<OR <DOBJ? BRASS-LANTERN>\n\t\t    <AND <DOBJ? INTNUM> <==? ,P-NUMBER 1308>>>\n\t\t<TELL\n\"You dial the number. A voice with a thick Oriental accent answers and says,\n\\\"Sorry, Brass Lantern off tonight. Private party. Thank you.\\\" Then the line\ngoes dead.\" CR>)\n\t       (<OR <DOBJ? STILES GLOBAL-STILES MATCHBOOK>\n\t\t    <AND <DOBJ? INTNUM> <==? ,P-NUMBER 1729>>>\n\t\t<TELL\n\"You dial the number. It rings several times with no answer.\" CR>)\n\t       (<DOBJ? INTNUM>\n\t\t<TELL \"There's no point in calling that number.\" CR>)\n\t       (<DOBJ? GLOBAL-TERRY>\n\t\t<TELL \"You don't know the number.\" CR>)\n\t       (<NOT <FSET? ,PRSO ,PERSON>>\n\t\t<TELL \"Too bad, but\" THE-PRSO \" has no phone.\" CR>)\n\t       (<IN? ,PRSO ,HERE>\n\t\t<TELL D ,PRSO \" is right here!\" CR>)\n\t       (T <TELL \"There's no sense in phoning \" D ,PRSO \".\" CR>)>>"
  },
  "V-CLIMB-ON": {
   "name": "V-CLIMB-ON",
   "file": "verbs.zil",
   "line": 845,
   "endLine": 854,
   "source": "<ROUTINE V-CLIMB-ON ()\n\t <COND (<AND <FSET? ,PRSO ,FURNITURE> <FSET? ,PRSO ,VEHBIT>>\n\t\t<MOVE ,PLAYER ,PRSO>\n\t\t<TELL\n\"You are now sitting on\" THE-PRSO \".\" CR>)\n\t       (<FSET? ,PRSO ,FURNITURE>\n\t\t<TELL \"This isn't the kind of thing to sit on!\" CR>)\n\t       (T\n\t\t<TELL\n\"You can't climb onto\" THE-PRSO \".\" CR>)>>"
  },
  "V-CLIMB-UP": {
   "name": "V-CLIMB-UP",
   "file": "verbs.zil",
   "line": 856,
   "endLine": 868,
   "source": "<ROUTINE V-CLIMB-UP (\"OPTIONAL\" (DIR ,P?UP) (OBJ <>) \"AUX\" X)\n\t #DECL ((DIR) FIX (OBJ) <OR ATOM FALSE> (X) TABLE)\n\t <COND (<GETPT ,HERE .DIR>\n\t\t<PERFORM ,V?WALK .DIR>\n\t\t<RTRUE>)\n\t       (<NOT .OBJ>\n\t\t<TELL \"You can't go that way.\" CR>)\n\t       (<AND .OBJ\n\t\t     <ZMEMQ ,W?WALL\n\t\t\t    <SET X <GETPT ,PRSO ,P?SYNONYM>>\n\t\t\t    <- </ <PTSIZE .X> 2> 1>>>\n\t\t<TELL \"Climbing the walls is no help.\" CR>)\n\t       (ELSE <TELL <PICK-ONE ,YUKS> CR>)>>"
  },
  "V-CLIMB-DOWN": {
   "name": "V-CLIMB-DOWN",
   "file": "verbs.zil",
   "line": 870,
   "endLine": 874,
   "source": "<ROUTINE V-CLIMB-DOWN ()\n\t <COND (<AND <FSET? ,PRSO ,FURNITURE> <FSET? ,PRSO ,VEHBIT>>\n\t\t<V-CLIMB-ON>\n\t\t<RTRUE>)\n\t       (T <V-CLIMB-UP ,P?DOWN>)>>"
  },
  "V-CLIMB-FOO": {
   "name": "V-CLIMB-FOO",
   "file": "verbs.zil",
   "line": 876,
   "endLine": 876,
   "source": "<ROUTINE V-CLIMB-FOO () <V-CLIMB-UP ,P?UP T>>"
  },
  "V-CLOSE": {
   "name": "V-CLOSE",
   "file": "verbs.zil",
   "line": 878,
   "endLine": 902,
   "source": "<ROUTINE V-CLOSE ()\n\t <COND (<NOT <OR <FSET? ,PRSO ,CONTBIT>\n\t\t\t <FSET? ,PRSO ,DOORBIT>\n\t\t\t <FSET? ,PRSO ,WINDOWBIT>>>\n\t\t<TELL\n\"You'd have to be more clever to do that to\" THE-PRSO \".\" CR>)\n\t       (<OR <FSET? ,PRSO ,DOORBIT>\n\t\t    <FSET? ,PRSO ,WINDOWBIT>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <COND (<FSET? ,PRSO ,RMUNGBIT>\n\t\t\t      <TELL\n\"It won't stay closed. The latch is broken.\" CR>)\n\t\t\t     (T\n\t\t\t      <FCLEAR ,PRSO ,OPENBIT>\n\t\t\t      <TELL\n\"Okeh,\" THE-PRSO \" is now closed.\" CR>)>)\n\t\t      (T <TELL \"It's already closed.\" CR>)>)\n\t       (<AND <NOT <FSET? ,PRSO ,SURFACEBIT>>\n\t\t     <NOT <==? <GETP ,PRSO ,P?CAPACITY> 0>>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <FCLEAR ,PRSO ,OPENBIT>\n\t\t       <TELL \"Closed.\" CR>)\n\t\t      (T <TELL \"It's already closed.\" CR>)>)\n\t       (ELSE\n\t\t<TELL \"You can't close\" THE-PRSO \".\" CR>)>>"
  },
  "PRE-COMPARE": {
   "name": "PRE-COMPARE",
   "file": "verbs.zil",
   "line": 904,
   "endLine": 912,
   "source": "<ROUTINE PRE-COMPARE ()\n <COND (<AND <NOT ,PRSI>\n\t     <==? 1 <GET ,P-PRSO 0>>>\n\t<TELL \"Oops! Try typing \\\"COMPARE IT TO (something).\\\"\" CR>\n\t<RTRUE>)\n       (<==? 2 <GET ,P-PRSO 0>>\n\t<PUT ,P-PRSO 0 1>\n\t<PERFORM ,PRSA <GET ,P-PRSO 1> <GET ,P-PRSO 2>>\n\t<RTRUE>)>>"
  },
  "V-COMPARE": {
   "name": "V-COMPARE",
   "file": "verbs.zil",
   "line": 914,
   "endLine": 916,
   "source": "<ROUTINE V-COMPARE ()\n <COND (<==? ,PRSO ,PRSI> <TELL \"They're the same thing!\" CR>)\n       (T <TELL \"They're not a bit alike.\" CR>)>>"
  },
  "V-CONFRONT": {
   "name": "V-CONFRONT",
   "file": "verbs.zil",
   "line": 918,
   "endLine": 925,
   "source": "<ROUTINE V-CONFRONT ()\n\t <COND (<==? ,PRSO ,PLAYER>\n\t\t<TELL \"You aren't talking to anyone!\" CR>)\n\t       (<NOT <FSET? ,PRSO ,PERSON>>\n\t\t<TELL\n\"That ought to put a scare into\" THE-PRSO \".\" CR>)\n\t       (T\n\t\t<TELL D ,PRSO <PICK-ONE ,WHO-CARES> \".\" CR>)>>"
  },
  "V-CURSES": {
   "name": "V-CURSES",
   "file": "verbs.zil",
   "line": 927,
   "endLine": 935,
   "source": "<ROUTINE V-CURSES ()\n\t <COND (,PRSO\n\t\t<COND (<FSET? ,PRSO ,PERSON>\n\t\t       <TELL\n\"Insults like that won't help you solve the case.\" CR>)\n\t\t      (T\n\t\t       <TELL <PICK-ONE ,YUKS> CR>)>)\n\t       (T\n\t\t<TELL <PICK-ONE ,OFFENDED> CR>)>>"
  },
  "V-MUNG": {
   "name": "V-MUNG",
   "file": "verbs.zil",
   "line": 943,
   "endLine": 960,
   "source": "<ROUTINE V-MUNG ()\n\t <COND (<AND <FSET? ,PRSO ,DOORBIT> <NOT ,PRSI>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL\n\"You'd fly through the open door if you tried.\" CR>)\n\t\t      (<FSET? ,PRSO ,LOCKED>\n\t\t       <TELL \"Oof! All you get is a sore shoulder.\" CR>)\n\t\t      (T <TELL \"Why don't you just open it instead?\" CR>)>)\n\t       (<NOT <FSET? ,PRSO ,PERSON>>\n\t\t<HACK-HACK \"Trying to destroy\">)\n\t       (<NOT ,PRSI>\n\t\t<TELL \"Trying to destroy \" D ,PRSO\n\t\t      \" with your bare hands is suicidal.\" CR>)\n\t       (<NOT <FSET? ,PRSI ,WEAPONBIT>>\n\t\t<TELL \"Trying to destroy \" D ,PRSO \" with \"\n\t\t\t<COND (<FSET? ,PRSI ,AN> \"an \") (T \"a \")>\n\t\t\tD ,PRSI \" is quite self-destructive.\" CR>)\n\t       (T <TELL \"You can't.\" CR>)>>"
  },
  "V-DRINK": {
   "name": "V-DRINK",
   "file": "verbs.zil",
   "line": 962,
   "endLine": 963,
   "source": "<ROUTINE V-DRINK ()\n\t <V-EAT>>"
  },
  "V-DROP": {
   "name": "V-DROP",
   "file": "verbs.zil",
   "line": 970,
   "endLine": 976,
   "source": "<ROUTINE V-DROP ()\n\t <COND (<IDROP>\n\t\t<TELL \"Okeh,\" THE-PRSO \" is now on the \">\n\t\t<COND (<==? <GETP ,HERE ,P?LINE> ,OUTSIDE-LINE-C>\n\t\t       <TELL \"ground\">)\n\t\t      (T <TELL \"floor\">)>\n\t\t<TELL \".\" CR>)>>"
  },
  "V-EAT": {
   "name": "V-EAT",
   "file": "verbs.zil",
   "line": 978,
   "endLine": 998,
   "source": "<ROUTINE V-EAT (\"AUX\" (EAT? <>) (DRINK? <>) (NOBJ <>))\n\t #DECL ((NOBJ) <OR OBJECT FALSE> (EAT? DRINK?) <OR ATOM FALSE>)\n\t <COND (<AND <SET EAT? <FSET? ,PRSO ,FOODBIT>> <IN? ,PRSO ,WINNER>>\n\t\t<COND (<VERB? DRINK>\n\t\t       <TELL\n\t\t\t\"Seems that you've had too much to drink already!\"CR>)\n\t\t      (ELSE\n\t\t       <TELL \"Mmm. That really hit the spot.\" CR>\n\t\t       <REMOVE ,PRSO>)>\n\t\t<CRLF>)\n\t       (<SET DRINK? <FSET? ,PRSO ,DRINKBIT>>\n\t\t<COND (<OR <IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t\t   <AND <SET NOBJ <LOC ,PRSO>>\n\t\t\t\t<IN? .NOBJ ,WINNER>\n\t\t\t\t<FSET? .NOBJ ,OPENBIT>>>\n\t\t       <TELL \"Mmm. That really hit the spot.\" CR>\n\t\t       <REMOVE ,PRSO>)\n\t\t      (T <TELL \"You can't get to it.\" CR>)>)\n\t       (<NOT <OR .EAT? .DRINK?>>\n\t\t<TELL\n\"The blue-plate special at the diner was enough for you.\" CR>)>>"
  },
  "V-ENTER": {
   "name": "V-ENTER",
   "file": "verbs.zil",
   "line": 1000,
   "endLine": 1002,
   "source": "<ROUTINE V-ENTER ()\n\t<PERFORM ,V?WALK ,P?IN>\n\t<RTRUE>>"
  },
  "V-THROUGH": {
   "name": "V-THROUGH",
   "file": "verbs.zil",
   "line": 1007,
   "endLine": 1031,
   "source": "<ROUTINE V-THROUGH (\"OPTIONAL\" (OBJ <>) \"AUX\" RM ;M DIR ;PT ;PTS)\n\t#DECL ((OBJ) <OR OBJECT FALSE> (M) <PRIMTYPE VECTOR>)\n\t<COND (<IN? ,PRSO ,ROOMS>\n\t       <COND (<SET DIR <DIR-FROM ,HERE ,PRSO>>\n\t\t      <PERFORM ,V?WALK .DIR>\n\t\t      <RTRUE>)\n\t\t     (<==? ,PRSO <META-LOC ,PLAYER>>\n\t\t      <TELL \"You're already there!\" CR>)\n\t\t     (T <TELL\n\"You can't go from here to there, at least not directly.\" CR>)>)\n\t      (<AND <FSET? ,PRSO ,DOORBIT> <FSET? ,PRSO ,OPENBIT>>\n\t       <COND (<SET RM <DOOR-ROOM ,HERE ,PRSO>>\n\t\t      <GOTO .RM>)\n\t\t     (T <TELL\n\"Sorry, but the \\\"\" D ,PRSO \"\\\" must be somewhere else.\" CR>)>)\n\t      (<DOBJ? SIDE-FOOTPRINTS BACK-FOOTPRINTS>\n\t\t<TELL \"You could mess up valuable evidence that way.\" CR>\n\t\t<RTRUE>)\n\t      (<AND <NOT .OBJ> <NOT <FSET? ,PRSO ,TAKEBIT>>>\n\t       <TELL \"You hit your head against\" THE-PRSO\n\t\t     \" as you try it.\" CR>)\n\t      (.OBJ <TELL \"You can't do that!\" CR>)\n\t      (<IN? ,PRSO ,WINNER>\n\t       <TELL \"You must think you're a contortionist!\" CR>)\n\t      (ELSE <TELL <PICK-ONE ,YUKS> CR>)>>"
  },
  "PRE-EXAMINE": {
   "name": "PRE-EXAMINE",
   "file": "verbs.zil",
   "line": 1033,
   "endLine": 1039,
   "source": "<ROUTINE PRE-EXAMINE (\"AUX\" VAL)\n\t <COND (<ROOM-CHECK> <RTRUE>)\n\t       (<==? ,P-ADVERB ,W?CAREFULLY>\n\t\t<COND (<NOT <SET VAL <INT-WAIT 3>>>\n\t\t       <TELL\n\"You never got to finish looking over\" THE-PRSO \".\" CR>)\n\t\t      (<==? .VAL ,M-FATAL> <RTRUE>)>)>>"
  },
  "V-EXAMINE": {
   "name": "V-EXAMINE",
   "file": "verbs.zil",
   "line": 1041,
   "endLine": 1053,
   "source": "<ROUTINE V-EXAMINE (\"AUX\" TXT)\n\t <COND (<IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t<NOT-HERE ,PRSO>\n\t\t<RTRUE>)\n\t       (<SET TXT <GETP ,PRSO ,P?TEXT>>\n\t\t<TELL .TXT CR>)\n\t       (<OR <FSET? ,PRSO ,CONTBIT>\n\t\t    ;<FSET? ,PRSO ,DOORBIT>\n\t\t    ;<FSET? ,PRSO ,WINDOWBIT>>\n\t\t<V-LOOK-INSIDE>)\n\t       (ELSE\n\t\t<TELL\n\"There's nothing special about\" THE-PRSO \".\" CR>)>>"
  },
  "PRE-FIND": {
   "name": "PRE-FIND",
   "file": "verbs.zil",
   "line": 1065,
   "endLine": 1137,
   "source": "<ROUTINE PRE-FIND (\"AUX\" PRON PRON1 CHR NUM)\n\t <SET PRON ,PRON-HIM>\n\t <SET PRON1 ,PRON-HE>\n\t <COND (<IN? ,PRSO ,ROOMS>\n\t\t<COND (<==? ,PRSO ,HERE>\n\t\t       <TELL \"You're already here!\" CR>)\n\t\t      (<FSET? ,PRSO ,TOUCHBIT>\n\t\t       <TELL \"You should know - you've been there!\" CR>)\n\t\t      (T <TELL \"You're the detective!\" CR>)>)\n\t       (<FSET? ,PRSO ,PERSON>\n\t\t<SET NUM <GET <GET ,WHERE-TABLES <GETP ,WINNER ,P?CHARACTER>>\n\t\t\t      <SET CHR <GETP ,PRSO ,P?CHARACTER>>>>\n\t\t<COND (<IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t       <SETG PRSO <GET ,CHARACTER-TABLE .CHR>>)>\n\t\t<COND (<FSET? ,PRSO ,FEMALE>\n\t\t       <SET PRON ,PRON-HER>\n\t\t       <SET PRON1 ,PRON-SHE>)\n\t\t      (<AND <EQUAL? .CHR ,LINDER-C>\n\t\t\t    <NOT <LOC ,LINDER>>>\n\t\t       <COND (<==? ,WINNER ,PLAYER>\n\t\t\t      <TELL \"What do you mean? He's dead!\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (<OR <AND <==? ,WINNER ,PHONG>\n\t\t\t\t       ,PHONG-SEEN-CORPSE?>\n\t\t\t\t  <AND <==? ,WINNER ,MONICA>\n\t\t\t\t       ,MONICA-SEEN-CORPSE?>>\n\t\t\t      <TELL \"\\\"\" \"What do you mean? He's dead!\"\n\t\t\t\t      \"\\\"\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (T <RFALSE>)>)>\n\t\t<COND (<AND <NOT <==? ,WINNER ,PLAYER>>\n\t\t\t    <NOT <GRAB-ATTENTION ,WINNER>>>\n\t\t       <RTRUE>)>\n\t\t<COND (<==? <META-LOC ,WINNER> <META-LOC ,PRSO>>\n\t\t       <COND (<==? ,WINNER ,PLAYER>\n\t\t\t      <TELL\n\t\t\"It sounds as though you need your vision checked.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"\\\"Ahem...\\\"\" CR>)>)\n\t\t      (<0? .NUM>\n\t\t       <COND (<==? ,WINNER ,PLAYER>\n\t\t\t      <TELL\n\"You haven't seen \" .PRON \" yet.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"\\\"I haven't seen \" .PRON \" tonight.\\\"\" CR>)>)\n\t\t      (T\n\t\t       <SET NUM <- ,PRESENT-TIME .NUM>>\n\t\t       <COND (<==? ,WINNER ,PLAYER>\n\t\t\t      <TELL\n\"You last saw \" .PRON \" \">)\n\t\t\t     (T\n\t\t\t      <TELL\n\"\\\"I last saw \" .PRON \" \">)>\n\t\t       <COND (<G? .NUM 120>\n\t\t\t      <TELL \"a few hours\">)\n\t\t\t     (<G? .NUM 80>\n\t\t\t      <TELL \"an hour or two\">)\n\t\t\t     (<G? .NUM 45>\n\t\t\t      <TELL \"about an hour\">)\n\t\t\t     (<G? .NUM 20>\n\t\t\t      <TELL \"about half an hour\">)\n\t\t\t     (<G? .NUM 10>\n\t\t\t      <TELL \"about 15 minutes\">)\n\t\t\t     (<G? .NUM 5>\n\t\t\t      <TELL \"less than 10 minutes\">)\n\t\t\t     (T\n\t\t\t      <TELL \"just a few minutes\">)>\n\t\t       <COND (<NOT <==? ,WINNER ,PLAYER>>\n\t\t\t      <TELL \" ago. I don't know where \">\n\t\t\t      <TELL .PRON1 \" is now.\\\"\" CR>)\n\t\t\t     (T <TELL \" ago.\" CR>)>)>\n\t\t<RTRUE>)>>"
  },
  "V-FIND": {
   "name": "V-FIND",
   "file": "verbs.zil",
   "line": 1139,
   "endLine": 1169,
   "source": "<ROUTINE V-FIND (\"AUX\" (L <LOC ,PRSO>))\n\t <COND (<==? ,PRSO ,PLAYER>\n\t\t<COND (<NOT <==? ,PLAYER ,WINNER>> <TELL \"\\\"\">)>\n\t\t<TELL \"You're right here, \">\n\t\t<COND (<FSET? .L ,SURFACEBIT> <TELL \"on\">)\n\t\t      (T <TELL \"in\">)>\n\t\t<THE? .L>\n\t\t<TELL \" \" D .L \".\">\n\t\t<COND (<NOT <==? ,PLAYER ,WINNER>> <TELL \"\\\"\">)>\n\t\t<CRLF>)\n\t       (<NOT <==? ,PLAYER ,WINNER>>\n\t\t<TELL \"\\\"\" \"You're the detective!\" \"\\\"\" CR>)\n\t       (<OR <EQUAL? .L ,GLOBAL-OBJECTS> <NOT <FSET? ,PRSO ,TOUCHBIT>>>\n\t\t<TELL \"You're the detective!\" CR>)\n\t       (<IN? ,PRSO ,WINNER>\n\t\t<TELL \"You have it.\" CR>)\n\t       (<OR <IN? ,PRSO ,HERE>\n\t\t    <==? ,PRSO ,PSEUDO-OBJECT>>\n\t\t<TELL \"It's right here.\" CR>)\n\t       (<FSET? .L ,PERSON>\n\t\t<TELL D .L \" has it.\" CR>)\n\t       (<FSET? .L ,SURFACEBIT>\n\t\t<TELL \"It's on\">\n\t\t<THE? .L>\n\t\t<TELL \" \" D .L \".\" CR>)\n\t       (<FSET? .L ,CONTBIT>\n\t\t<TELL \"It's in\">\n\t\t<THE? .L>\n\t\t<TELL \" \" D .L \".\" CR>)\n\t       (ELSE\n\t\t<TELL \"You're the detective!\" CR>)>>"
  },
  "V-FINGERPRINT": {
   "name": "V-FINGERPRINT",
   "file": "verbs.zil",
   "line": 1171,
   "endLine": 1175,
   "source": "<ROUTINE V-FINGERPRINT ()\n <COND (<FSET? ,PRSO ,PERSON>\n\t<TELL \"You can't find prints on a person!\" CR>)\n       (T <TELL\n\"You don't find any good prints on\" THE-PRSO \".\" CR>)>>"
  },
  "V-FOLLOW": {
   "name": "V-FOLLOW",
   "file": "verbs.zil",
   "line": 1177,
   "endLine": 1212,
   "source": "<ROUTINE V-FOLLOW (\"AUX\" CN CHR COR PCOR L)\n\t <COND (<==? ,PRSO ,PLAYER>\n\t\t<TELL \"It's not clear who you're talking to.\" CR>)\n\t       (<NOT <FSET? ,PRSO ,PERSON>>\n\t\t<TELL\n\"How tragic to see a formerly great detective stalking \"\n<COND (<FSET? ,PRSO ,AN> \"an \") (T \"a \")>\nD ,PRSO \"!\" CR>)\n\t       (<==? ,HERE\n\t\t     <SET L <META-LOC\n\t\t\t     <SET CHR <GET ,CHARACTER-TABLE\n\t\t\t\t       <SET CN <GETP ,PRSO ,P?CHARACTER>>>>>>>\n\t\t<TELL \"You're in the same place as \">\n\t\t<COND (<FSET? .CHR ,TOUCHBIT> <TELL D ,PRSO \"!\" CR>)\n\t\t      (T <TELL \"the \" <GETP .CHR ,P?XDESC> \"!\" CR>)>)\n\t       (<OR <NOT .L> <==? .L ,LIMBO>>\n\t\t<COND (<FSET? .CHR ,TOUCHBIT> <TELL D ,PRSO>)\n\t\t      (T <TELL \"The \" <GETP .CHR ,P?XDESC>>)>\n\t\t<TELL \" has left the grounds.\" CR>)\n\t       (<==? <GET <GET ,WHERE-TABLES 0> .CN> ,PRESENT-TIME>\n\t\t<COND (<OR <AND <OUTSIDE? .L> <OUTSIDE? ,HERE>>\n\t\t\t   <AND <NOT <OUTSIDE? .L>> <NOT <OUTSIDE? ,HERE>>>>\n\t\t       <GOTO .L>)\n\t\t      (T\n\t\t       <TELL \"You seem to have lost track of \">\n\t\t       <COND (<FSET? .CHR ,TOUCHBIT> <TELL D ,PRSO \".\" CR>)\n\t\t\t     (T <TELL \"the \" <GETP .CHR ,P?XDESC> \".\" CR>)>)>)\n\t       (<AND <SET COR <GETP ,HERE ,P?CORRIDOR>>\n\t\t     <SET PCOR <GETP .L ,P?CORRIDOR>>\n\t\t     <NOT <==? <BAND .COR .PCOR> 0>>>\n\t\t<SETG PRSO <COR-DIR ,HERE .L>>\n\t\t<V-WALK>)\n\t       (T\n\t\t<TELL \"You seem to have lost track of \">\n\t\t<COND (<FSET? .CHR ,TOUCHBIT> <TELL D ,PRSO \".\" CR>)\n\t\t      (T <TELL \"the \" <GETP .CHR ,P?XDESC> \".\" CR>)>)>>"
  },
  "PRE-GIVE": {
   "name": "PRE-GIVE",
   "file": "verbs.zil",
   "line": 1214,
   "endLine": 1218,
   "source": "<ROUTINE PRE-GIVE ()\n\t <COND (<EQUAL? ,PRSO ,OFFICE-BACK-DOOR> <RFALSE>)\n\t       (<AND <NOT <HELD? ,PRSO>> <NOT <EQUAL? ,PRSI ,PLAYER>>>\n\t\t<TELL \n\"That's easy for you to say, since you don't even have it.\" CR>)>>"
  },
  "V-GIVE": {
   "name": "V-GIVE",
   "file": "verbs.zil",
   "line": 1220,
   "endLine": 1232,
   "source": "<ROUTINE V-GIVE ()\n\t <COND (<NOT <FSET? ,PRSI ,PERSON>>\n\t\t<TELL \"You can't give \">\n\t\t<COND (<OR <FSET? ,PRSO ,PERSON> <DOBJ? GLOBAL-DUFFY>> T)\n\t\t      (<FSET? ,PRSO ,AN> <TELL \"an \">)\n\t\t      (T <TELL \"a \">)>\n\t\t<TELL D ,PRSO \" to \"\n\t\t\t<COND (<FSET? ,PRSI ,AN> \"an \") (T \"a \")>\n\t\t\tD ,PRSI \"!\" CR>)\n\t       (T <TELL D ,PRSI \" refuses your offer.\" CR>)\n\t       ;(<IDROP>\n\t\t<TELL D ,PRSI \" takes\" THE-PRSO\n\t\t\t\" and then puts it down.\" CR>)>>"
  },
  "PRE-SGIVE": {
   "name": "PRE-SGIVE",
   "file": "verbs.zil",
   "line": 1234,
   "endLine": 1236,
   "source": "<ROUTINE PRE-SGIVE ()\n\t <PERFORM ,V?GIVE ,PRSI ,PRSO>\n\t<RTRUE>>"
  },
  "V-SGIVE": {
   "name": "V-SGIVE",
   "file": "verbs.zil",
   "line": 1238,
   "endLine": 1239,
   "source": "<ROUTINE V-SGIVE ()\n\t <TELL \"[Foo!! This is a bug!!]\" CR>>"
  },
  "V-GOODBYE": {
   "name": "V-GOODBYE",
   "file": "verbs.zil",
   "line": 1241,
   "endLine": 1241,
   "source": "<ROUTINE V-GOODBYE () <V-HELLO <>>>"
  },
  "V-HANDCUFF": {
   "name": "V-HANDCUFF",
   "file": "verbs.zil",
   "line": 1243,
   "endLine": 1247,
   "source": "<ROUTINE V-HANDCUFF ()\n\t<COND (<IN? ,HANDCUFFS ,PLAYER>\n\t       <PERFORM ,V?TIE-WITH ,PRSO ,HANDCUFFS>\n\t       <RTRUE>)\n\t      (T <TELL \"You don't have the \" D ,HANDCUFFS \".\" CR>)>>"
  },
  "V-HELLO": {
   "name": "V-HELLO",
   "file": "verbs.zil",
   "line": 1249,
   "endLine": 1263,
   "source": "<ROUTINE V-HELLO (\"OPTIONAL\" (HELL T) \"AUX\" P)\n <COND (<SET P <OR ,PRSO ,QCONTEXT <FIND-FLAG ,HERE ,PERSON ,WINNER>>>\n\t<COND (<FSET? .P ,PERSON>\n\t       <COND (.HELL\n\t\t      <FSET .P ,TOUCHBIT>\n\t\t      <TELL D .P \" nods at you.\" CR>)\n\t\t     (ELSE <TELL\n\"\\\"Don't tell me you're leaving already!\\\"\" CR>)>)\n\t      (ELSE\n\t       <TELL \"Only nuts say \\\"\"\n\t\t     <COND (.HELL \"Hello\") (T \"Good-bye\")>\n\t\t     \"\\\" to \"\n\t\t     <COND (<FSET? .P ,AN> \"an \") (T \"a \")>\n\t\t     D .P \".\" CR>)>)\n       (T <TELL \"It's not clear who you're talking to.\" CR>)>>"
  },
  "V-HELP": {
   "name": "V-HELP",
   "file": "verbs.zil",
   "line": 1265,
   "endLine": 1273,
   "source": "<ROUTINE V-HELP ()\n <COND (<ZERO? ,PRSO>\n\t<TELL\n\"(You'll find plenty of help in your instruction manual.\"\n;\"Nat'l Detective Gazette\" CR\n\"If you really need help, you can order an InvisiClues Hint Booklet\nand a complete map by using the order form that came in your package.)\" CR>)\n       (<DOBJ? PLAYER> <PERFORM ,V?GIVE ,HINT ,PLAYER> <RTRUE>)\n       (T <TELL \"You'll have to be more specific.\" CR>)>>"
  },
  "V-HIDE": {
   "name": "V-HIDE",
   "file": "verbs.zil",
   "line": 1275,
   "endLine": 1278,
   "source": "<ROUTINE V-HIDE ()\n\t <COND (<EQUAL? ,HERE ,OFFICE>\n\t\t<TELL \"You could hide behind the lounge.\" CR>)\n\t       (T <TELL \"There's no good hiding place here.\" CR>)>>"
  },
  "V-HIDE-BEHIND": {
   "name": "V-HIDE-BEHIND",
   "file": "verbs.zil",
   "line": 1280,
   "endLine": 1286,
   "source": "<ROUTINE V-HIDE-BEHIND ()\n <COND (<FIND-FLAG ,HERE ,PERSON ,WINNER>\n\t<TELL \"You can't hide when people are watching you!\" CR>)\n       (<DOBJ? LOUNGE>\n\t<SETG PLAYER-HIDING ,PRSO>\n\t<TELL \"Okeh, you're now crouching down behind the lounge.\" CR>)\n       (T <TELL \"There's no room to hide behind\" THE-PRSO \".\"CR>)>>"
  },
  "V-KICK": {
   "name": "V-KICK",
   "file": "verbs.zil",
   "line": 1288,
   "endLine": 1293,
   "source": "<ROUTINE V-KICK ()\n\t <COND (<FSET? ,PRSO ,PERSON>\n\t\t<TELL \"\\\"I get no \">\n\t\t<VERB-PRINT>\n\t\t<TELL \" from shampoo...\\\" -- Cole Flathead\" CR>)\n\t       (T <HACK-HACK \"Kicking\">)>>"
  },
  "V-KILL": {
   "name": "V-KILL",
   "file": "verbs.zil",
   "line": 1295,
   "endLine": 1296,
   "source": "<ROUTINE V-KILL ()\n\t <IKILL \"kill\">>"
  },
  "IKILL": {
   "name": "IKILL",
   "file": "verbs.zil",
   "line": 1298,
   "endLine": 1334,
   "source": "<ROUTINE IKILL (STR)\n\t <COND (<NOT ,PRSO> <TELL \"There's nothing here to \" .STR \".\" CR>)\n\t       (<AND <NOT ,PRSI> <FSET? ,PRSO ,WEAPONBIT>>\n\t\t<TELL \"You didn't say what to \" .STR \" at.\" CR>)\n\t       (<DOBJ? FRONT-DOOR GARAGE-DOOR WORKSHOP-DOOR>\n\t\t<TELL \"There must be an easier way to do what you want.\"CR>)\n\t       (<OR <FSET? ,PRSO ,DOORBIT>\n\t\t    ;<FSET? ,PRSO ,WINDOWBIT>>\n\t\t<FSET ,PRSO ,RMUNGBIT>\n\t\t<TELL \"Hey, this isn't a \" .STR \"-em-up Western!\"\n\t\t\t\" You just broke the lock beyond repair.\" CR>)\n\t       (<NOT <FSET? ,PRSO ,PERSON>>\n\t\t<TELL\n\"Sure, you probably need to sharpen your eye, but \"\n<COND (<FSET? ,PRSO ,AN> \"an \") (T \"a \")>\nD ,PRSO \" is a lousy target.\" CR>)\n\t       (<NOT ,PRSI>\n\t\t<COND (<PROB 50>\n\t\t       <TELL\n\"You think it over. It's not worth the trouble.\" CR>)\n\t\t      (T <TELL\n\"With your expert ability, you \" .STR PRSO \" in no time.\" CR>\n\t\t       <GONE-CRAZY>)>)\n\t       (<EQUAL? ,PRSI ,PISTOL ,INSIDE-GUN ,OUTSIDE-GUN>\n\t\t<COND (<PROB 50>\n\t\t       <TELL\n\"You think it over. It's not worth the trouble.\" CR>)\n\t\t      (T <TELL\n\"A shot rings out and\" PRSO \" crumples to the ground, dead. Good shot.\" CR>\n\t\t       <GONE-CRAZY>)>)\n\t       (<PROB 50>\n\t\t<TELL\n\"You think it over. It's not worth the trouble.\" CR>)\n\t       (T\n\t\t<TELL\n\"With a lethal blow of\" THE-PRSI \",\" PRSO \" falls dead.\" CR>\n\t\t<GONE-CRAZY>)>>"
  },
  "V-KISS": {
   "name": "V-KISS",
   "file": "verbs.zil",
   "line": 1336,
   "endLine": 1341,
   "source": "<ROUTINE V-KISS ()\n\t <COND (<FSET? ,PRSO ,PERSON>\n\t\t<TELL\n\"Section 204D, Paragraph 7.6 of the California Police Code of\nConduct specifically prohibits kissing potential suspects or witnesses.\" CR>)\n\t       (T <TELL \"What a (ahem!) strange idea!\" CR>)>>"
  },
  "V-KNOCK": {
   "name": "V-KNOCK",
   "file": "verbs.zil",
   "line": 1343,
   "endLine": 1358,
   "source": "<ROUTINE V-KNOCK ()\n <COND (<OR <FSET? ,PRSO ,DOORBIT>\n\t    <FSET? ,PRSO ,WINDOWBIT>>\n\t<COND (<INHABITED?\n\t\t<COND (<FSET? ,PRSO ,DOORBIT> <DOOR-ROOM ,HERE ,PRSO>)\n\t\t      (T <WINDOW-ROOM ,HERE ,PRSO>)>>\n\t       <TELL \"Someone\">\n\t       <COND (,TOO-LATE <TELL \" shouts \\\"Go away!\\\"\" CR>)\n\t\t     (T <TELL \" shouts \\\"Go to the front door!\\\"\" CR>)>)\n\t      (T <TELL \"There's no answer.\" CR>)>)\n       (ELSE\n\t<TELL \"Why knock on \">\n\t<COND (<OR <FSET? ,PRSO ,PERSON> <DOBJ? GLOBAL-DUFFY>> T)\n\t      (<FSET? ,PRSO ,AN> <TELL \"an \">)\n\t      (T <TELL \"a \">)>\n\t<TELL D ,PRSO \"?\" CR>)>>"
  },
  "V-LEAN": {
   "name": "V-LEAN",
   "file": "verbs.zil",
   "line": 1360,
   "endLine": 1361,
   "source": "<ROUTINE V-LEAN ()\n\t <TELL \"You can't do that!\" CR>>"
  },
  "V-STAND": {
   "name": "V-STAND",
   "file": "verbs.zil",
   "line": 1363,
   "endLine": 1379,
   "source": "<ROUTINE V-STAND (\"AUX\" P)\n\t <COND (,PLAYER-HIDING\n\t\t<TELL \"You are no longer hiding behind\">\n\t\t<THE? ,PLAYER-HIDING>\n\t\t<TELL \" \" D ,PLAYER-HIDING \".\" CR>\n\t\t<SETG PLAYER-HIDING <>>\n\t\t<COND (<INHABITED? ,HERE>\n\t\t       <SET P <FIND-FLAG ,HERE ,PERSON>>\n\t\t       <TELL D .P \" looks startled to find you here.\" CR>)>\n\t\t<RTRUE>)\n\t       (<OR <FSET? <LOC ,WINNER> ,SURFACEBIT>\n\t\t    <FSET? <LOC ,WINNER> ,FURNITURE>>\n\t\t<MOVE ,WINNER ,HERE>\n\t\t<SETG PLAYER-HIDING <>>\n\t\t<TELL \"You are on your own feet again.\" CR>)\n\t       (T\n\t\t<TELL \"You're already standing up!\" CR>)>>"
  },
  "V-LEAVE": {
   "name": "V-LEAVE",
   "file": "verbs.zil",
   "line": 1381,
   "endLine": 1381,
   "source": "<ROUTINE V-LEAVE () <PERFORM ,V?WALK ,P?OUT>>"
  },
  "V-LISTEN": {
   "name": "V-LISTEN",
   "file": "verbs.zil",
   "line": 1383,
   "endLine": 1388,
   "source": "<ROUTINE V-LISTEN ()\n <COND (<CAN-HEAR-RECORD?>\n\t<TELL \"Through the door you can hear a \" \"record\" \" playing.\" CR>)\n       (<CAN-HEAR-RADIO?>\n\t<TELL \"Through the door you can hear a \" \"radio\" \" playing.\" CR>)\n       (T <TELL \"Too bad, but\" THE-PRSO \" makes no sound.\" CR>)>>"
  },
  "V-LOCK": {
   "name": "V-LOCK",
   "file": "verbs.zil",
   "line": 1390,
   "endLine": 1407,
   "source": "<ROUTINE V-LOCK ()\n\t <COND (<NOT <OR <FSET? ,PRSO ,CONTBIT> <FSET? ,PRSO ,DOORBIT>>>\n\t\t<TELL\n\"You'd have to be more clever to do that to\" THE-PRSO \".\" CR>)\n\t       (<OR <FSET? ,PRSO ,DOORBIT>\n\t\t    ;<FSET? ,PRSO ,WINDOWBIT>\n\t\t    <NOT <==? <GETP ,PRSO ,P?CAPACITY> 0>>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"You'll have to close it first.\" CR>)\n\t\t      (<FSET? ,PRSO ,LOCKED>\n\t\t       <TELL \"It's already locked.\" CR>)\n\t\t      (<FSET? ,PRSO ,RMUNGBIT>\n\t\t       <TELL \"You can't lock it. The lock is broken.\" CR>)\n\t\t      (T\n\t\t       <FSET ,PRSO ,LOCKED>\n\t\t       <TELL\n\"Okeh,\" THE-PRSO \" is now locked.\" CR>)>)\n\t       (T <TELL \"You can't lock\" THE-PRSO \".\" CR>)>>"
  },
  "V-LOOK": {
   "name": "V-LOOK",
   "file": "verbs.zil",
   "line": 1409,
   "endLine": 1411,
   "source": "<ROUTINE V-LOOK ()\n\t <COND (<DESCRIBE-ROOM T>\n\t\t<DESCRIBE-OBJECTS T>)>>"
  },
  "V-LOOK-BEHIND": {
   "name": "V-LOOK-BEHIND",
   "file": "verbs.zil",
   "line": 1413,
   "endLine": 1419,
   "source": "<ROUTINE V-LOOK-BEHIND ()\n\t <TELL \"There's nothing behind \">\n\t <COND (<FSET? ,PRSO ,PERSON>\n\t\t;\"? looks at you as though you were a lower form of life.\"\n\t\t<TELL D ,PRSO>)\n\t       (T <TELL \"the\" PRSO>)>\n\t <TELL \".\" CR>>"
  },
  "V-LOOK-DOWN": {
   "name": "V-LOOK-DOWN",
   "file": "verbs.zil",
   "line": 1421,
   "endLine": 1427,
   "source": "<ROUTINE V-LOOK-DOWN ()\n <COND (<==? ,PRSO ,ROOMS>\n\t<COND (<==? <GETP ,HERE ,P?LINE> ,OUTSIDE-LINE-C>\n\t       <TELL \"There's \" <GROUND-SURFACE> \" there, mostly.\" CR>)\n\t      (T\n\t       <TELL \"Nothing's interesting about the floor.\" CR>)>)\n       (T <TELL \"It has been a long week, hasn't it?\" CR>)>>"
  },
  "PRE-LOOK-INSIDE": {
   "name": "PRE-LOOK-INSIDE",
   "file": "verbs.zil",
   "line": 1429,
   "endLine": 1429,
   "source": "<ROUTINE PRE-LOOK-INSIDE () <ROOM-CHECK>>"
  },
  "V-LOOK-INSIDE": {
   "name": "V-LOOK-INSIDE",
   "file": "verbs.zil",
   "line": 1431,
   "endLine": 1467,
   "source": "<ROUTINE V-LOOK-INSIDE (\"OPTIONAL\" (DIR ,P?IN) \"AUX\" RM)\n\t <COND (<DOBJ? GLOBAL-ROOM>\n\t\t<PERFORM ,V?LOOK>\n\t\t<RTRUE>)\n\t       (<FSET? ,PRSO ,RLANDBIT>\n\t\t<ROOM-PEEK ,PRSO>)\n\t       (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <COND (<SET RM <DOOR-ROOM ,HERE ,PRSO>>\n\t\t\t      <ROOM-PEEK .RM>)\n\t\t\t     (T <TELL\n\"The \" D ,PRSO \" is open, but you can't tell what's beyond it.\" CR>)>)\n\t\t      (ELSE <TELL\n\"Too bad, but\" THE-PRSO \" is closed.\" CR>)>)\n\t       (<FSET? ,PRSO ,WINDOWBIT>\n\t\t<COND (<SET RM <WINDOW-ROOM ,HERE ,PRSO>>\n\t\t       <ROOM-PEEK .RM>)\n\t\t      (T <TELL\n\"You can't tell what's beyond\" THE-PRSO \".\" CR>)>)\n\t       (<FSET? ,PRSO ,CONTBIT>\n\t\t<COND (<SEE-INSIDE? ,PRSO>\n\t\t       <COND (<AND <FIRST? ,PRSO> <PRINT-CONT ,PRSO>>\n\t\t\t      <RTRUE>)\n\t\t\t     (<FSET? ,PRSO ,SURFACEBIT>\n\t\t\t      <TELL\n\"There's nothing on\" THE-PRSO \".\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"Too bad, but\" THE-PRSO \" is empty.\" CR>)>)\n\t\t      (ELSE <TELL\n\"Too bad, but\" THE-PRSO \" is closed.\" CR>)>)\n\t       (<FSET? ,PRSO ,PERSON>\n\t\t<TELL \"You forgot to bring your X-ray glasses.\" CR>)\n\t       (<==? .DIR ,P?IN>\n\t\t<TELL \"You can't look inside\" THE-PRSO \".\" CR>)\n\t       (<==? .DIR ,P?OUT>\n\t\t<TELL \"You can't look outside\" THE-PRSO \".\" CR>)>>"
  },
  "ROOM-PEEK": {
   "name": "ROOM-PEEK",
   "file": "verbs.zil",
   "line": 1469,
   "endLine": 1478,
   "source": "<ROUTINE ROOM-PEEK (RM \"AUX\" OHERE)\n\t <SET OHERE ,HERE>\n\t <COND (<SEE-INTO? .RM>\n\t\t<SETG HERE .RM>\n\t\t<TELL \"You take a quick peek into\">\n\t\t<THE? .RM>\n\t\t<TELL \" \" D .RM \":\" CR>\n\t\t<COND (<NOT <DESCRIBE-OBJECTS T>>\n\t\t       <TELL \"You can't see anything interesting.\" CR>)>\n\t\t<SETG HERE .OHERE>)>>"
  },
  "SEE-INTO?": {
   "name": "SEE-INTO?",
   "file": "verbs.zil",
   "line": 1480,
   "endLine": 1509,
   "source": "<ROUTINE SEE-INTO? (THERE \"AUX\" P L TBL O)\n\t #DECL ((THERE O) OBJECT (P L) FIX)\n\t <SET P 0>\n\t <REPEAT ()\n\t\t <COND (<0? <SET P <NEXTP ,HERE .P>>>\n\t\t\t<TELL \"You can't seem to find that room.\" CR>\n\t\t\t<RFALSE>)\n\t\t       (<EQUAL? .P ,P?IN ,P?OUT> T)\n\t\t       (<NOT <L? .P ,LOW-DIRECTION>>\n\t\t\t<SET TBL <GETPT ,HERE .P>>\n\t\t\t<SET L <PTSIZE .TBL>>\n\t\t\t<COND (<AND <==? .L ,UEXIT>\n\t\t\t\t    <==? <GETB .TBL ,REXIT> .THERE>>\n\t\t\t       <RTRUE>)\n\t\t\t      (<AND <==? .L ,DEXIT>\n\t\t\t\t    <==? <GETB .TBL ,REXIT> .THERE>>\n\t\t\t       <COND (<FSET? <GETB .TBL ,DEXITOBJ> ,OPENBIT>\n\t\t\t\t      <RTRUE>)\n\t\t\t\t     (T\n\t\t\t\t      <TELL\n\"The door to that room is closed.\" CR>\n\t\t\t\t      <RFALSE>)>)\n\t\t\t      (<AND <==? .L ,CEXIT>\n\t\t\t\t    <==? <GETB .TBL ,REXIT> .THERE>>\n\t\t\t       <COND (<VALUE <GETB .TBL ,CEXITFLAG>>\n\t\t\t\t      <RTRUE>)\n\t\t\t\t     (T\n\t\t\t\t      <TELL\n\"You can't seem to find that room.\" CR>\n\t\t\t\t      <RFALSE>)>)>)>>>"
  },
  "V-LOOK-ON": {
   "name": "V-LOOK-ON",
   "file": "verbs.zil",
   "line": 1511,
   "endLine": 1514,
   "source": "<ROUTINE V-LOOK-ON ()\n\t <COND (<FSET? ,PRSO ,SURFACEBIT>\n\t\t<V-LOOK-INSIDE>)\n\t       (T <TELL \"There's no good surface on\" THE-PRSO \".\" CR>)>>"
  },
  "V-LOOK-OUTSIDE": {
   "name": "V-LOOK-OUTSIDE",
   "file": "verbs.zil",
   "line": 1516,
   "endLine": 1516,
   "source": "<ROUTINE V-LOOK-OUTSIDE () <V-LOOK-INSIDE ,P?OUT>>"
  },
  "V-LOOK-UNDER": {
   "name": "V-LOOK-UNDER",
   "file": "verbs.zil",
   "line": 1518,
   "endLine": 1527,
   "source": "<ROUTINE V-LOOK-UNDER ()\n\t <COND (<FSET? ,PRSO ,FURNITURE>\n\t\t<TELL\n\"You twist your head to look under\" THE-PRSO \" but find nothing.\"CR>)\n\t       (<FSET? ,PRSO ,PERSON>\n\t\t<TELL \"Nope. Nothing hiding under \" D ,PRSO \".\" CR>)\n\t       (<EQUAL? <LOC ,PRSO> ,HERE ,LOCAL-GLOBALS ,GLOBAL-OBJECTS>\n\t\t<TELL \"There's nothing there but dust.\" CR>)\n\t       (T\n\t\t<TELL \"That's not a bit useful.\" CR>)>>"
  },
  "V-LOOK-UP": {
   "name": "V-LOOK-UP",
   "file": "verbs.zil",
   "line": 1529,
   "endLine": 1541,
   "source": "<ROUTINE V-LOOK-UP ()\n\t <COND (<FSET? ,PRSO ,PERSON>\n\t\t<COND (<TANDY?> <TELL <PICK-ONE ,YUKS> CR>)\n\t\t      (T <TELL \"What a pervert!\" CR>)>)\n\t       (<NOT <==? ,PRSO ,ROOMS>>\n\t\t<TELL \"It has been a long week, hasn't it?\" CR>\n\t\t<RTRUE>)\n\t       (<==? <GETP ,HERE ,P?LINE> ,OUTSIDE-LINE-C>\n\t\t<TELL ,SKY-DESC CR>)\n\t       (T\n\t\t<TELL\n\"You can see the ceiling. It's not Union Station, but it's\nnicely painted.\" CR>)>>"
  },
  "V-MAKE": {
   "name": "V-MAKE",
   "file": "verbs.zil",
   "line": 1543,
   "endLine": 1545,
   "source": "<ROUTINE V-MAKE ()\n\t<TELL\n\"\\\"Eat, drink, and make merry, for tomorrow we shall die!\\\"\" CR>>"
  },
  "PRE-MOVE": {
   "name": "PRE-MOVE",
   "file": "verbs.zil",
   "line": 1547,
   "endLine": 1549,
   "source": "<ROUTINE PRE-MOVE ()\n\t <COND (<HELD? ,PRSO>\n\t\t<TELL \"Juggling isn't one of your talents.\" CR>)>>"
  },
  "V-MOVE": {
   "name": "V-MOVE",
   "file": "verbs.zil",
   "line": 1551,
   "endLine": 1555,
   "source": "<ROUTINE V-MOVE ()\n\t <COND (<FSET? ,PRSO ,TAKEBIT>\n\t\t<TELL\n\"Moving\" THE-PRSO \" reveals nothing.\" CR>)\n\t       (T <TELL \"You can't move\" THE-PRSO \".\" CR>)>>"
  },
  "V-OPEN": {
   "name": "V-OPEN",
   "file": "verbs.zil",
   "line": 1557,
   "endLine": 1590,
   "source": "<ROUTINE V-OPEN (\"AUX\" F STR)\n\t <COND (<NOT <OR <FSET? ,PRSO ,CONTBIT>\n\t\t\t <FSET? ,PRSO ,DOORBIT>\n\t\t\t <FSET? ,PRSO ,WINDOWBIT>>>\n\t\t<TELL\n\"You'd have to be more clever to do that to\" THE-PRSO \".\" CR>)\n\t       (<OR <FSET? ,PRSO ,DOORBIT>\n\t\t    <FSET? ,PRSO ,WINDOWBIT>\n\t\t    <NOT <==? <GETP ,PRSO ,P?CAPACITY> 0>>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT> <TELL \"It's already open.\" CR>)\n\t\t      (<FSET? ,PRSO ,LOCKED>\n\t\t       <TELL \"You'll have to unlock it first.\" CR>)\n\t\t      (<FSET? ,PRSO ,RMUNGBIT>\n\t\t       <TELL\n\"You can't open it. The latch is broken.\" CR>)\n\t\t      (T\n\t\t       <FSET ,PRSO ,OPENBIT>\n\t\t       <COND (<OR <FSET? ,PRSO ,DOORBIT>\n\t\t\t\t  <FSET? ,PRSO ,WINDOWBIT>>\n\t\t\t      <TELL\n\"Okeh,\" THE-PRSO \" is now open.\" CR>)\n\t\t\t     (<OR <NOT <FIRST? ,PRSO>><FSET? ,PRSO ,TRANSBIT>>\n\t\t\t      <TELL \"Opened.\" CR>)\n\t\t\t     (<AND <SET F <FIRST? ,PRSO>>\n\t\t\t\t   <NOT <NEXT? .F>>\n\t\t\t\t   <SET STR <GETP .F ,P?FDESC>>>\n\t\t\t      <TELL \"You open\" THE-PRSO \".\"CR>\n\t\t\t      <TELL .STR CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"You open\" THE-PRSO\n\t\t\t\t    \" and see \">\n\t\t\t      <PRINT-CONTENTS ,PRSO>\n\t\t\t      <TELL \".\" CR>)>)>)\n\t       (T <TELL \"You can't open\" THE-PRSO \".\" CR>)>>"
  },
  "V-PICK": {
   "name": "V-PICK",
   "file": "verbs.zil",
   "line": 1592,
   "endLine": 1592,
   "source": "<ROUTINE V-PICK () <TELL \"You can't pick that.\" CR>>"
  },
  "V-PLAY": {
   "name": "V-PLAY",
   "file": "verbs.zil",
   "line": 1594,
   "endLine": 1596,
   "source": "<ROUTINE V-PLAY ()\n\t <TELL\n\"(Speaking of playing, you ought to try Infocom's other products.)\" CR>>"
  },
  "V-PUSH": {
   "name": "V-PUSH",
   "file": "verbs.zil",
   "line": 1598,
   "endLine": 1598,
   "source": "<ROUTINE V-PUSH () <HACK-HACK \"Pushing\">>"
  },
  "V-PUT-UNDER": {
   "name": "V-PUT-UNDER",
   "file": "verbs.zil",
   "line": 1600,
   "endLine": 1601,
   "source": "<ROUTINE V-PUT-UNDER ()\n         <TELL \"There's not enough room.\" CR>>"
  },
  "PRE-PUT": {
   "name": "PRE-PUT",
   "file": "verbs.zil",
   "line": 1603,
   "endLine": 1609,
   "source": "<ROUTINE PRE-PUT ()\n\t <COND (<DOBJ? HANDCUFFS>\n\t\t<PERFORM ,V?TIE-WITH ,PRSI ,HANDCUFFS>\n\t\t<RTRUE>)\n\t       (<OR <IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t    <NOT <FSET? ,PRSO ,TAKEBIT>>>\n\t\t<TELL \"That would be a mistake.\" CR>)>>"
  },
  "V-PUT": {
   "name": "V-PUT",
   "file": "verbs.zil",
   "line": 1611,
   "endLine": 1639,
   "source": "<ROUTINE V-PUT ()\n\t <COND (<OR <FSET? ,PRSI ,OPENBIT>\n\t\t    <OPENABLE? ,PRSI>\n\t\t    <FSET? ,PRSI ,VEHBIT>> T)\n\t       (<IOBJ? SIDE-FOOTPRINTS BACK-FOOTPRINTS>\n\t\t<TELL \"You could mess up valuable evidence that way.\" CR>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"You can't do that.\" CR>\n\t\t<RTRUE>)>\n\t <COND (<NOT <FSET? ,PRSI ,OPENBIT>>\n\t\t<TELL \"Too bad, but\" THE-PRSI \" isn't open.\" CR>)\n\t       (<==? ,PRSI ,PRSO>\n\t\t<TELL <PICK-ONE ,YUKS> CR>)\n\t       (<IN? ,PRSO ,PRSI>\n\t\t<TELL\n  \"Too bad, but\" THE-PRSO\n\" is already in\" THE-PRSI \".\" CR>)\n\t       (<G? <- <+ <WEIGHT ,PRSI> <WEIGHT ,PRSO>>\n\t\t       <GETP ,PRSI ,P?SIZE>>\n\t\t    <GETP ,PRSI ,P?CAPACITY>>\n\t\t<TELL \"There's no room.\" CR>)\n\t       (<AND <NOT <HELD? ,PRSO>>\n\t\t     <NOT <ITAKE>>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<MOVE ,PRSO ,PRSI>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<TELL \"Okeh.\" CR>)>>"
  },
  "V-RAISE": {
   "name": "V-RAISE",
   "file": "verbs.zil",
   "line": 1641,
   "endLine": 1641,
   "source": "<ROUTINE V-RAISE () <HACK-HACK \"Playing in this way with\">>"
  },
  "V-RAPE": {
   "name": "V-RAPE",
   "file": "verbs.zil",
   "line": 1643,
   "endLine": 1650,
   "source": "<ROUTINE V-RAPE ()\n\t <COND (<FSET? ,PRSO ,PERSON>\n\t\t<COND (<PROB 75>\n\t\t       <TELL\n\"Section 29A of the United States Criminal Code, whose provisions\ncome to your unhealthy mind, forbids it.\" CR>)\n\t\t      (T <GONE-CRAZY>)>)\n\t       (T <TELL \"What a (ahem!) strange idea!\" CR>)>>"
  },
  "PRE-READ": {
   "name": "PRE-READ",
   "file": "verbs.zil",
   "line": 1654,
   "endLine": 1667,
   "source": "<ROUTINE PRE-READ (\"AUX\" VAL)\n\t <COND (<NOT ,LIT> <TELL \"It's impossible to read in the dark.\" CR>)\n\t       (<IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t<NOT-HERE ,PRSO>)\n\t       (<AND ,PRSI\n\t\t     <NOT <FSET? ,PRSI ,TRANSBIT>>\n\t\t     <NOT <==? ,PRSI ,INTNUM>>>\t;\"? INTNUM?\"\n\t\t<TELL\n\"You must have a swell method of looking through\" THE-PRSI \".\" CR>)\n\t       (<==? ,P-ADVERB ,W?CAREFULLY>\n\t\t<COND (<NOT <SET VAL <INT-WAIT 3>>>\n\t\t       <TELL\n\"You never got to finish reading\" THE-PRSO \".\" CR>)\n\t\t      (<==? .VAL ,M-FATAL> <RTRUE>)>)>>"
  },
  "V-READ": {
   "name": "V-READ",
   "file": "verbs.zil",
   "line": 1669,
   "endLine": 1672,
   "source": "<ROUTINE V-READ ()\n\t <COND (<NOT <FSET? ,PRSO ,READBIT>>\n\t\t<TELL \"You can't read\" THE-PRSO \".\" CR>)\n\t       (ELSE <TELL <GETP ,PRSO ,P?TEXT> CR>)>>"
  },
  "V-REVIVE": {
   "name": "V-REVIVE",
   "file": "verbs.zil",
   "line": 1674,
   "endLine": 1677,
   "source": "<ROUTINE V-REVIVE ()\n <COND (<FSET? ,PRSO ,PERSON>\n\t<TELL D ,PRSO \" doesn't need reviving.\" CR>)\n       (T <HACK-HACK \"Trying to revive\">)>>"
  },
  "V-RING": {
   "name": "V-RING",
   "file": "verbs.zil",
   "line": 1679,
   "endLine": 1679,
   "source": "<ROUTINE V-RING () <TELL \"\\\"DING-DONG!\\\"\" CR>>"
  },
  "V-RUB": {
   "name": "V-RUB",
   "file": "verbs.zil",
   "line": 1681,
   "endLine": 1681,
   "source": "<ROUTINE V-RUB () <HACK-HACK \"Fiddling with\">>"
  },
  "PRE-RUB-OVER": {
   "name": "PRE-RUB-OVER",
   "file": "verbs.zil",
   "line": 1683,
   "endLine": 1685,
   "source": "<ROUTINE PRE-RUB-OVER ()\n\t <PERFORM ,V?RUB ,PRSI ,PRSO>\n\t <RTRUE>>"
  },
  "V-RUB-OVER": {
   "name": "V-RUB-OVER",
   "file": "verbs.zil",
   "line": 1687,
   "endLine": 1688,
   "source": "<ROUTINE V-RUB-OVER ()\n\t <TELL \"You really can't expect that to help.\" CR>>"
  },
  "V-SAY": {
   "name": "V-SAY",
   "file": "verbs.zil",
   "line": 1690,
   "endLine": 1694,
   "source": "<ROUTINE V-SAY (\"AUX\" V)\n\t <SETG QUOTE-FLAG <>>\n\t <SETG P-CONT <>>\n\t <TELL\n\"To talk to someone, try 'SAY TO someone \\\"something\\\"'.\" CR>>"
  },
  "PRE-SEARCH": {
   "name": "PRE-SEARCH",
   "file": "verbs.zil",
   "line": 1696,
   "endLine": 1696,
   "source": "<ROUTINE PRE-SEARCH () <ROOM-CHECK>>"
  },
  "V-SEARCH": {
   "name": "V-SEARCH",
   "file": "verbs.zil",
   "line": 1698,
   "endLine": 1705,
   "source": "<ROUTINE V-SEARCH ()\n\t <COND (<FSET? ,PRSO ,PERSON>\n\t\t<TELL D ,PRSO\n\t\t      \" grudgingly allows you to search.  You find nothing\nwhatsoever of interest.\" CR>)\n\t       (<AND <FSET? ,PRSO ,CONTBIT> <NOT <FSET? ,PRSO ,OPENBIT>>>\n\t\t<TELL \"You'll have to open it first.\" CR>)\n\t       (T <TELL \"You find nothing unusual.\" CR>)>>"
  },
  "PRE-SEARCH-OBJECT-FOR": {
   "name": "PRE-SEARCH-OBJECT-FOR",
   "file": "verbs.zil",
   "line": 1707,
   "endLine": 1715,
   "source": "<ROUTINE PRE-SEARCH-OBJECT-FOR (\"AUX\" OBJ)\n <COND (<ROOM-CHECK> <RTRUE>)\n       (<AND <IN? ,PRSI ,PLAYER>\n\t     <GETP ,PRSI ,P?GENERIC>\n\t     <SET OBJ <APPLY <GETP ,PRSI ,P?GENERIC> ,PRSI>>>\n\t<SETG PRSI .OBJ>)>\n <COND (<DOBJ? GLOBAL-ROOM GLOBAL-HERE>\n\t<SETG PRSO ,HERE>)>\n <RFALSE>>"
  },
  "V-SEARCH-OBJECT-FOR": {
   "name": "V-SEARCH-OBJECT-FOR",
   "file": "verbs.zil",
   "line": 1717,
   "endLine": 1745,
   "source": "<ROUTINE V-SEARCH-OBJECT-FOR ()\n\t <COND (<AND <IOBJ? MONEY> <FSET? ,PRSO ,PERSON>>\n\t\t<SAID-TO ,PRSO>\n\t\t<TELL\n\"You can find only pocket change. \\\"I could have told you that.\\\"\" CR>)\n\t       (<FSET? ,PRSO ,PERSON>\n\t\t<TELL D ,PRSO\n\t\t      \" resignedly allows you to perform the search.\" CR>\n\t\t<COND (<IN? ,PRSI ,PRSO>\n\t\t       <TELL\n\"Indeed, \" D ,PRSO \" has\" THE-PRSI \".\" CR>)\n\t\t      (<IN? ,PRSI ,GLOBAL-OBJECTS>\n\t\t       <TELL D ,PRSO \" doesn't have \">\n\t\t       <COND (<OR <FSET? ,PRSI ,PERSON>\n\t\t\t\t  <IOBJ? GLOBAL-DUFFY>> T)\n\t\t\t     (<FSET? ,PRSI ,AN> <TELL \"an \">)\n\t\t\t     (T <TELL \"a \">)>\n\t\t       <TELL D ,PRSI \".\" CR>)\n\t\t      (T <TELL D ,PRSO \" doesn't have\"\n\t\t\t       THE-PRSI \".\" CR>)>)\n\t       (<AND <FSET? ,PRSO ,CONTBIT> <NOT <FSET? ,PRSO ,OPENBIT>>>\n\t\t<TELL \"You'll have to open\" THE-PRSO \" first.\" CR>)\n\t       (<IN? ,PRSI ,PRSO>\n\t\t<TELL \"How observant you are! There \"\n\t\t\t<COND (<FSET? ,PRSI ,FEMALE> \"she\")\n\t\t\t      (<FSET? ,PRSI ,PERSON> \"he\")\n\t\t\t      (T \"it\")>\n\t\t\t\" is!\" CR>)\n\t       (T <TELL \"You don't find\" THE-PRSI \" there.\" CR>)>>"
  },
  "V-SHOOT": {
   "name": "V-SHOOT",
   "file": "verbs.zil",
   "line": 1747,
   "endLine": 1750,
   "source": "<ROUTINE V-SHOOT ()\n <COND (<NOT <FIND-FLAG ,WINNER ,WEAPONBIT>>\n\t<TELL \"You don't have anything to shoot with.\" CR>)\n       (T <IKILL \"shoot\">)>>"
  },
  "PRE-SSHOOT": {
   "name": "PRE-SSHOOT",
   "file": "verbs.zil",
   "line": 1752,
   "endLine": 1754,
   "source": "<ROUTINE PRE-SSHOOT ()\n\t <PERFORM ,V?SHOOT ,PRSI ,PRSO>\n\t<RTRUE>>"
  },
  "V-SSHOOT": {
   "name": "V-SSHOOT",
   "file": "verbs.zil",
   "line": 1756,
   "endLine": 1757,
   "source": "<ROUTINE V-SSHOOT ()\n\t <TELL \"[Foo!! This is a bug!!]\" CR>>"
  },
  "V-SHOW": {
   "name": "V-SHOW",
   "file": "verbs.zil",
   "line": 1759,
   "endLine": 1765,
   "source": "<ROUTINE V-SHOW ()\n\t <COND (<==? ,PRSO ,PLAYER>\n\t\t<TELL \"Do you often talk to yourself?\" CR>)\n\t       (<NOT <FSET? ,PRSO ,PERSON>>\n\t\t<TELL \"Don't wait for\" THE-PRSO \" to applaud.\" CR>)\n\t       (T\n\t\t<TELL D ,PRSO <PICK-ONE ,WHO-CARES> \".\" CR>)>>"
  },
  "PRE-SSHOW": {
   "name": "PRE-SSHOW",
   "file": "verbs.zil",
   "line": 1767,
   "endLine": 1770,
   "source": "<ROUTINE PRE-SSHOW ()\n\t <SETG P-MERGED T>\n\t <PERFORM ,V?SHOW ,PRSI ,PRSO>\n\t <RTRUE>>"
  },
  "V-SSHOW": {
   "name": "V-SSHOW",
   "file": "verbs.zil",
   "line": 1772,
   "endLine": 1772,
   "source": "<ROUTINE V-SSHOW () <RTRUE>>"
  },
  "V-SIT": {
   "name": "V-SIT",
   "file": "verbs.zil",
   "line": 1774,
   "endLine": 1781,
   "source": "<ROUTINE V-SIT ()\n\t <COND (<AND <FSET? ,PRSO ,FURNITURE> <FSET? ,PRSO ,VEHBIT>>\n\t\t<MOVE ,PLAYER ,PRSO>\n\t\t<SETG PLAYER-HIDING <>>\n\t\t<TELL\n\"You are now sitting on\" THE-PRSO \".\" CR>)\n\t       (T\n\t\t<TELL \"That isn't something to sit on!\" CR>)>>"
  },
  "V-SLAP": {
   "name": "V-SLAP",
   "file": "verbs.zil",
   "line": 1783,
   "endLine": 1787,
   "source": "<ROUTINE V-SLAP ()\n <COND (<FSET? ,PRSO ,PERSON>\n\t<TELL D ,PRSO \" slaps you right back. Wow, is your face red!\" CR>)\n       (T <TELL\n\"You should see Phong. He breaks boards with the edge of his hand!\" CR>)>>"
  },
  "V-SMELL": {
   "name": "V-SMELL",
   "file": "verbs.zil",
   "line": 1789,
   "endLine": 1796,
   "source": "<ROUTINE V-SMELL ()\n <COND (<FSET? ,PRSO ,PERSON>\n\t<COND (<FSET? ,PRSO ,FEMALE> <TELL \"She\">)\n\t      (T <TELL \"He\">)>\n\t<TELL \" smells just like \" D ,PRSO \".\" CR>)\n       (T <TELL \"It\" \" smells just like \"\n\t\t  <COND (<FSET? ,PRSO ,AN> \"an \") (T \"a \")>\n\t\t  D ,PRSO \".\" CR>)>>"
  },
  "V-SMOKE": {
   "name": "V-SMOKE",
   "file": "verbs.zil",
   "line": 1798,
   "endLine": 1801,
   "source": "<ROUTINE V-SMOKE ()\n\t <COND ;(<FSET? ,PRSO ,BURNBIT>\n\t\t<TELL \"You must think you're a jazz musician.\" CR>)\n\t       (T <TELL \"You can't burn\" THE-PRSO \".\" CR>)>>"
  },
  "PRE-TAKE": {
   "name": "PRE-TAKE",
   "file": "verbs.zil",
   "line": 1803,
   "endLine": 1840,
   "source": "<ROUTINE PRE-TAKE ()\n\t <COND (<DOBJ? WHITE-WIRE BLACK-WIRE GLOBAL-FINGERPRINTS HINT DRINK\n\t\t       CIGARETTE GLOBAL-CAN-OF-WORMS HANDCUFFS GLOBAL-WARRANT>\n\t\t<RFALSE>)\n\t       (<IN? ,PRSO ,GLOBAL-OBJECTS> <NOT-HERE ,PRSO>)\n\t       (<IN? ,PRSO ,WINNER> <TELL \"You already have it.\" CR>)\n\t       (<AND <FSET? <LOC ,PRSO> ,CONTBIT>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<TELL \"You can't reach that.\" CR>\n\t\t<RTRUE>)\n\t       (,PRSI\n\t\t<COND (<IOBJ? OFFICE-BACK-DOOR\n\t\t\t      MONICA-BACK-DOOR LINDER-BACK-DOOR>\n\t\t       <RFALSE>)\n\t\t      (<NOT <==? ,PRSI <LOC ,PRSO>>>\n\t\t       <COND (<NOT <FSET? ,PRSO ,PERSON>>\n\t\t\t      <COND (<NOT <FSET? ,PRSI ,PERSON>>\n\t\t\t\t     <TELL \"It's not in that!\" CR>)\n\t\t\t\t    (<FSET? ,PRSI ,FEMALE>\n\t\t\t\t     <TELL \"She doesn't have it!\" CR>)\n\t\t\t\t    (T <TELL \"He doesn't have it!\" CR>)>)\n\t\t\t     (<FSET? ,PRSO ,FEMALE>\n\t\t\t      <COND (<NOT <FSET? ,PRSI ,PERSON>>\n\t\t\t\t     <TELL \"She's not in that!\" CR>)\n\t\t\t\t    (<FSET? ,PRSI ,FEMALE>\n\t\t\t\t     <TELL \"She doesn't have her!\" CR>)\n\t\t\t\t    (T <TELL \"He doesn't have her!\" CR>)>)\n\t\t\t     (T\n\t\t\t      <COND (<NOT <FSET? ,PRSI ,PERSON>>\n\t\t\t\t     <TELL \"He's not in that!\" CR>)\n\t\t\t\t    (<FSET? ,PRSI ,FEMALE>\n\t\t\t\t     <TELL \"She doesn't have him!\" CR>)\n\t\t\t\t    (T <TELL \"He doesn't have him!\" CR>)>)>)\n\t\t      (T\n\t\t       <SETG PRSI <>>\n\t\t       <RFALSE>)>)\n\t       (<==? ,PRSO <LOC ,WINNER>>\n\t\t<TELL \"You're in it, nitwit!\" CR>)>>"
  },
  "V-TAKE": {
   "name": "V-TAKE",
   "file": "verbs.zil",
   "line": 1842,
   "endLine": 1845,
   "source": "<ROUTINE V-TAKE ()\n\t <COND (<==? <ITAKE> T>\n\t\t<TELL\n\"You are now carrying\" THE-PRSO \".\" CR>)>>"
  },
  "PRE-TAKEOUT": {
   "name": "PRE-TAKEOUT",
   "file": "verbs.zil",
   "line": 1847,
   "endLine": 1854,
   "source": "<ROUTINE PRE-TAKEOUT ()\n <COND (<IOBJ? OFFICE-BACK-DOOR MONICA-BACK-DOOR LINDER-BACK-DOOR>\n\t<COND (<OR <DOBJ? CORPSE> <FSET? ,PRSO ,PERSON>>\n\t       <RFALSE>)\t;\"TAKE person OUTSIDE\"\n\t      (T <TELL\n\"(If you want to go outside, simply type \\\"OUT.\\\")\" CR>)>)\n       (T <TELL\n\"(Sorry, but English is my second language. Please rephrase that.)\" CR>)>>"
  },
  "V-TAKEOUT": {
   "name": "V-TAKEOUT",
   "file": "verbs.zil",
   "line": 1856,
   "endLine": 1857,
   "source": "<ROUTINE V-TAKEOUT ()\n\t <TELL \"[Foo!! This is a bug!!]\" CR>>"
  },
  "V-DISEMBARK": {
   "name": "V-DISEMBARK",
   "file": "verbs.zil",
   "line": 1859,
   "endLine": 1868,
   "source": "<ROUTINE V-DISEMBARK ()\n\t <COND (<==? <LOC ,PRSO> ,WINNER>\n\t\t<TELL\n\"You don't need to take out\" THE-PRSO \" to use it.\" CR>)\n\t       (<NOT <==? <LOC ,WINNER> ,PRSO>>\n\t\t<TELL \"You're not in that!\" CR>\n\t\t<RFATAL>)\n\t       (T\n\t\t<TELL \"You are on your own feet again.\" CR>\n\t\t<MOVE ,WINNER ,HERE>)>>"
  },
  "V-TELL": {
   "name": "V-TELL",
   "file": "verbs.zil",
   "line": 1873,
   "endLine": 1893,
   "source": "<ROUTINE V-TELL ()\n\t <COND (<==? ,PRSO ,PLAYER>\n\t\t<TELL\n\"Talking to yourself is a sign of impending looniness.\" CR>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<SETG P-CONT <>>\n\t\t<RFATAL>)\n\t       (<OR <FSET? ,PRSO ,PERSON>\n\t\t    <AND ,MET-DUFFY? <==? ,PRSO ,GLOBAL-DUFFY>>>\n\t\t<COND (,P-CONT\n\t\t       <SETG WINNER ,PRSO>)\n\t\t      (T\n\t\t       <FSET ,PRSO ,TOUCHBIT>\n\t\t       <TELL D ,PRSO \" is listening.\" CR>)>\n\t\t<SETG QCONTEXT ,PRSO>\n\t\t<SETG QCONTEXT-ROOM ,HERE>)\n\t       (T\n\t\t<TELL \"You can't talk to\" THE-PRSO \"!\" CR>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<SETG P-CONT <>>\n\t\t<RFATAL>)>>"
  },
  "PRE-TELL-ME": {
   "name": "PRE-TELL-ME",
   "file": "verbs.zil",
   "line": 1895,
   "endLine": 1905,
   "source": "<ROUTINE PRE-TELL-ME (\"AUX\" P)\n <COND (<AND ,QCONTEXT\n\t     <==? ,HERE ,QCONTEXT-ROOM>\n\t     <==? ,HERE <META-LOC ,QCONTEXT>>\n\t     <DOBJ? PLAYER>>\n\t<PERFORM ,V?ASK-ABOUT ,QCONTEXT ,PRSI>\n\t<RTRUE>)\n       (<AND <DOBJ? PLAYER>\n\t     <SET P <FIND-FLAG ,HERE ,PERSON ,WINNER>>>\n\t<PERFORM ,V?ASK-ABOUT .P ,PRSI>\n\t<RTRUE>)>>"
  },
  "V-TELL-ME": {
   "name": "V-TELL-ME",
   "file": "verbs.zil",
   "line": 1907,
   "endLine": 1910,
   "source": "<ROUTINE V-TELL-ME ()\n <COND (<DOBJ? PLAYER>\n\t<TELL \"You aren't talking to anyone!\" CR>)\n       (T <TELL D ,PRSO <PICK-ONE ,WHO-CARES> \".\" CR>)>>"
  },
  "PRE-TELL-ME-ABOUT": {
   "name": "PRE-TELL-ME-ABOUT",
   "file": "verbs.zil",
   "line": 1912,
   "endLine": 1920,
   "source": "<ROUTINE PRE-TELL-ME-ABOUT (\"AUX\" P)\n <COND (<AND ,QCONTEXT\n\t     <==? ,HERE ,QCONTEXT-ROOM>\n\t     <==? ,HERE <META-LOC ,QCONTEXT>>>\n\t<PERFORM ,V?ASK-ABOUT ,QCONTEXT ,PRSO>\n\t<RTRUE>)\n       (<SET P <FIND-FLAG ,HERE ,PERSON ,WINNER>>\n\t<PERFORM ,V?ASK-ABOUT .P ,PRSO>\n\t<RTRUE>)>>"
  },
  "V-TELL-ME-ABOUT": {
   "name": "V-TELL-ME-ABOUT",
   "file": "verbs.zil",
   "line": 1922,
   "endLine": 1923,
   "source": "<ROUTINE V-TELL-ME-ABOUT ()\n\t<TELL \"You aren't talking to anyone!\" CR>>"
  },
  "V-THANKS": {
   "name": "V-THANKS",
   "file": "verbs.zil",
   "line": 1925,
   "endLine": 1933,
   "source": "<ROUTINE V-THANKS (\"AUX\" P)\n\t <COND (<OR <AND ,PRSO <FSET? ,PRSO ,PERSON>>\n\t\t    <AND ,QCONTEXT\n\t\t\t <==? ,HERE ,QCONTEXT-ROOM>\n\t\t\t <==? ,HERE <META-LOC ,QCONTEXT>>>\n\t\t    <SET P <FIND-FLAG ,HERE ,PERSON ,WINNER>>>\n\t\t<TELL D <OR ,PRSO ,QCONTEXT .P>\n\t\t\t\" acknowledges your thanks.\"CR>)\n\t       (T <TELL \"You're more than welcome.\" CR>)>>"
  },
  "V-THROW": {
   "name": "V-THROW",
   "file": "verbs.zil",
   "line": 1935,
   "endLine": 1935,
   "source": "<ROUTINE V-THROW () <COND (<IDROP> <TELL \"Thrown.\" CR>)>>"
  },
  "V-THROW-AT": {
   "name": "V-THROW-AT",
   "file": "verbs.zil",
   "line": 1937,
   "endLine": 1943,
   "source": "<ROUTINE V-THROW-AT ()\n\t <COND (<NOT <IDROP>> <RTRUE>)\n\t       (<FSET? ,PRSI ,PERSON>\n\t\t<TELL D ,PRSI\n\t\t      \", puzzled by your unusual methods, ducks as\"\n\t\t      THE-PRSO \" flies by.\" CR>)\n\t       (T <TELL \"Maybe you aren't feeling well.\" CR>)>>"
  },
  "V-THROW-THROUGH": {
   "name": "V-THROW-THROUGH",
   "file": "verbs.zil",
   "line": 1945,
   "endLine": 1948,
   "source": "<ROUTINE V-THROW-THROUGH ()\n\t <COND (<NOT <FSET? ,PRSO ,PERSON>>\n\t\t<TELL \"Let's not resort to violence, please.\" CR>)\n\t       (T <V-THROW>)>>"
  },
  "PRE-TIE-TO": {
   "name": "PRE-TIE-TO",
   "file": "verbs.zil",
   "line": 1950,
   "endLine": 1953,
   "source": "<ROUTINE PRE-TIE-TO ()\n\t <COND (<OR <NOT <FSET? ,PRSO ,PERSON>>\n\t\t    <NOT <FSET? ,PRSI ,FURNITURE>>>\n\t\t<TELL \"That won't do any good.\" CR>)>>"
  },
  "V-TIE-TO": {
   "name": "V-TIE-TO",
   "file": "verbs.zil",
   "line": 1955,
   "endLine": 1956,
   "source": "<ROUTINE V-TIE-TO ()\n\t<TELL \"You can't tie\" PRSO \" to that.\" CR>>"
  },
  "PRE-TIE-WITH": {
   "name": "PRE-TIE-WITH",
   "file": "verbs.zil",
   "line": 1958,
   "endLine": 1961,
   "source": "<ROUTINE PRE-TIE-WITH ()\n\t <COND (<OR <NOT <FSET? ,PRSO ,PERSON>>\n\t\t    <NOT <FSET? ,PRSI ,TOOLBIT>>>\n\t\t<TELL \"That won't do any good.\" CR>)>>"
  },
  "V-TIE-WITH": {
   "name": "V-TIE-WITH",
   "file": "verbs.zil",
   "line": 1963,
   "endLine": 1970,
   "source": "<ROUTINE V-TIE-WITH ()\n\t<COND (<FSET? ,PRSO ,PERSON>\n\t       <TELL\n\"\\\"If you don't formally arrest me first, I'll sue!\\\"\" CR>)\n\t      (T <TELL \"You can't \"\n\t\t\t <COND (<IOBJ? HANDCUFFS> \"handcuff \")\n\t\t\t       (T \"tie \" ;V)>\n\t\t\t PRSO \" with that.\" CR>)>>"
  },
  "V-TURN": {
   "name": "V-TURN",
   "file": "verbs.zil",
   "line": 1972,
   "endLine": 1972,
   "source": "<ROUTINE V-TURN () <TELL \"This has no effect.\" CR>>"
  },
  "V-LAMP-ON": {
   "name": "V-LAMP-ON",
   "file": "verbs.zil",
   "line": 1974,
   "endLine": 1982,
   "source": "<ROUTINE V-LAMP-ON ()\n\t <COND (<DOBJ? SINK GLOBAL-WATER>\n\t\t<TELL\n\"You turn the handle and lo! The water starts to run. Impressed\nwith yourself, you turn the handle again, and the water stops\nrunning! You try it again, just to make sure. Bravo!\" CR>)\n\t       (<FSET? ,PRSO ,PERSON>\n\t\t<TELL <PICK-ONE ,YUKS> CR>)\n\t       (T <TELL \"You can't turn on\" THE-PRSO \".\" CR>)>>"
  },
  "V-LAMP-OFF": {
   "name": "V-LAMP-OFF",
   "file": "verbs.zil",
   "line": 1984,
   "endLine": 1987,
   "source": "<ROUTINE V-LAMP-OFF ()\n\t <COND (<FSET? ,PRSO ,PERSON>\n\t\t<TELL \"Your vulgar ways would turn anyone off.\" CR>)\n\t       (T <TELL \"You can't turn off\" THE-PRSO \".\" CR>)>>"
  },
  "V-TURN-UP": {
   "name": "V-TURN-UP",
   "file": "verbs.zil",
   "line": 1989,
   "endLine": 1990,
   "source": "<ROUTINE V-TURN-UP ()\n\t <TELL \"That's silly.\" CR>>"
  },
  "V-TURN-DOWN": {
   "name": "V-TURN-DOWN",
   "file": "verbs.zil",
   "line": 1992,
   "endLine": 1993,
   "source": "<ROUTINE V-TURN-DOWN ()\n\t <TELL \"That's silly.\" CR>>"
  },
  "PRE-UNLOCK": {
   "name": "PRE-UNLOCK",
   "file": "verbs.zil",
   "line": 1995,
   "endLine": 2004,
   "source": "<ROUTINE PRE-UNLOCK ()\n <COND (<DOBJ? CLOCK>\n\t<COND (<IN? ,CLOCK-KEY ,WINNER> <RFALSE>)\n\t      (T <TELL \"You don't have the right key.\" CR>)>)\n       (,LINDER-FOLLOWS-YOU\n\t<TELL\n\"Linder says, \\\"Don't leave yet. We're just getting started.\\\"\" CR>)\n       (<OUTSIDE? ,HERE>\n\t<COND (<IN? ,PHONG-KEYS ,WINNER> <RFALSE>)\n\t      (T <TELL \"You don't have the right key.\" CR>)>)>>"
  },
  "V-UNLOCK": {
   "name": "V-UNLOCK",
   "file": "verbs.zil",
   "line": 2006,
   "endLine": 2022,
   "source": "<ROUTINE V-UNLOCK ()\n\t <COND (<NOT <OR <FSET? ,PRSO ,CONTBIT> <FSET? ,PRSO ,DOORBIT>>>\n\t\t<TELL\n\"You'd have to be more clever to do that to\" THE-PRSO \".\" CR>)\n\t       (<OR <FSET? ,PRSO ,DOORBIT>\n\t\t    <NOT <==? <GETP ,PRSO ,P?CAPACITY> 0>>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"You'll have to close it first.\" CR>)\n\t\t      (<NOT <FSET? ,PRSO ,LOCKED>>\n\t\t       <TELL \"It's already unlocked.\" CR>)\n\t\t      (<FSET? ,PRSO ,RMUNGBIT>\n\t\t       <TELL \"You can't unlock it. The lock is broken.\" CR>)\n\t\t      (T\n\t\t       <FCLEAR ,PRSO ,LOCKED>\n\t\t       <TELL\n\"Okeh,\" THE-PRSO \" is now unlocked.\" CR>)>)\n\t       (T <TELL \"You can't unlock\" THE-PRSO\".\"CR>)>>"
  },
  "V-UNTIE": {
   "name": "V-UNTIE",
   "file": "verbs.zil",
   "line": 2024,
   "endLine": 2025,
   "source": "<ROUTINE V-UNTIE ()\n\t <TELL \"You can't tie it, so you can't untie it!\" CR>>"
  },
  "V-USE": {
   "name": "V-USE",
   "file": "verbs.zil",
   "line": 2027,
   "endLine": 2028,
   "source": "<ROUTINE V-USE ()\n\t <TELL \"You should be more specific about what you want to do.\" CR>>"
  },
  "V-WAIT": {
   "name": "V-WAIT",
   "file": "verbs.zil",
   "line": 2042,
   "endLine": 2093,
   "source": "<ROUTINE V-WAIT (\"OPTIONAL\" (NUM 10) (WHO <>) (INT <>) \"AUX\" VAL HR(RESULT T))\n\t #DECL ((NUM) FIX)\n\t <SET HR ,HERE>\n\t <SETG WHO-WAIT 0>\n\t <COND (<NOT .INT> <TELL \"Time passes...\" CR>)>\n\t <REPEAT ()\n\t\t <COND (<L? <SET NUM <- .NUM 1>> 0> <RETURN>)\n\t\t       (<SET VAL <CLOCKER>>\n\t\t\t<COND (<OR <==? .VAL ,M-FATAL>\n\t\t\t\t   <NOT <==? .HR ,HERE>>>\n\t\t\t       <SET RESULT ,M-FATAL>\n\t\t\t       <RETURN>)\n\t\t\t      (<AND <==? .WHO ,GLOBAL-DUFFY>\n\t\t\t\t    ,MET-DUFFY?\n\t\t\t\t    <NOT ,FINGERPRINT-OBJ>\n\t\t\t\t    <NOT ,DUFFY-AT-CORONER>>\n\t\t\t       <RETURN>)\n\t\t\t      (<AND .WHO <IN? .WHO ,HERE>>\n\t\t\t       <FSET .WHO ,TOUCHBIT>\n\t\t\t       <TELL D .WHO\n\", for whom you are waiting, has arrived.\" CR>\n\t\t\t       <RETURN>)\n\t\t\t      (T\n\t\t\t       <SETG WHO-WAIT <+ ,WHO-WAIT 1>>\n\t\t\t       <COND (<NOT <==? <BAND <GETB 0 1> 16> 0>>\n\t\t\t\t      <TELL \"(\">\n\t\t\t\t      <TIME-PRINT ,PRESENT-TIME>\n\t\t\t\t      <TELL \") \">)>\n\t\t\t       <COND (.INT <TELL\n\"Do you want to continue what you were doing?\">)\n\t\t\t\t     (T <TELL\n\"Do you want to keep waiting?\">)>\n\t\t\t       <COND (<NOT <YES?>> <RETURN>)\n\t\t\t\t     (T <USL>)>)>)\n\t\t       (<AND <==? .WHO ,GLOBAL-DUFFY>\n\t\t\t     <NOT ,FINGERPRINT-OBJ>\n\t\t\t     <NOT ,DUFFY-AT-CORONER>>\n\t\t\t<RETURN>)\n\t\t       (<AND .WHO <IN? .WHO ,HERE>>\n\t\t\t<TELL D .WHO\n\", for whom you are waiting, has arrived.\" CR>\n\t\t\t<RETURN>)\n\t\t       (<AND .WHO <G? <SETG WHO-WAIT <+ ,WHO-WAIT 1>> 30>>\n\t\t\t<TELL D .WHO\n\" still hasn't arrived.  Do you want to keep waiting?\">\n\t\t\t<COND (<NOT <YES?>> <RETURN>)>\n\t\t\t<SETG WHO-WAIT 0>\n\t\t\t<USL>)\n\t\t       (T <USL>)>>\n\t <SETG CLOCK-WAIT T>\n\t <COND (<NOT .INT> <V-TIME>)>\n\t .RESULT>"
  },
  "INT-WAIT": {
   "name": "INT-WAIT",
   "file": "verbs.zil",
   "line": 2095,
   "endLine": 2101,
   "source": "<ROUTINE INT-WAIT (N \"AUX\" TIM REQ VAL)\n\t <SET TIM ,PRESENT-TIME>\n\t <COND (<==? ,M-FATAL <V-WAIT <SET REQ <RANDOM <* .N 2>>> <> T>>\n\t\t<RFATAL>)\n\t       (<NOT <L? <- ,PRESENT-TIME .TIM> .REQ>>\n\t\t<RTRUE>)\n\t       (T <RFALSE>)>>"
  },
  "V-WAIT-FOR": {
   "name": "V-WAIT-FOR",
   "file": "verbs.zil",
   "line": 2103,
   "endLine": 2118,
   "source": "<ROUTINE V-WAIT-FOR (\"AUX\" WHO)\n\t <COND (<==? ,PRSO ,INTNUM>\n\t\t<COND (<G? ,P-NUMBER ,PRESENT-TIME> <V-WAIT-UNTIL> <RTRUE>)\n\t\t      (<G? ,P-NUMBER 180>\n\t\t       <TELL \"That's too long to wait.\" CR>)\n\t\t      (T <V-WAIT ,P-NUMBER>)>)\n\t       (<==? ,PRSO ,GLOBAL-HERE> <V-WAIT> <RTRUE>)\n\t       (<==? ,PRSO ,MIDNIGHT> <V-WAIT-UNTIL> <RTRUE>)\n\t       (<FSET? ,PRSO ,PERSON>\n\t\t<SET WHO <GET ,CHARACTER-TABLE\n\t\t\t      <GETP ,PRSO ,P?CHARACTER>>>\n\t\t<COND (<IN? .WHO ,HERE>\n\t\t       <TELL \"That person's already here!\" CR>)\n\t\t      (T <V-WAIT 10000 .WHO>)>)\n\t       (<DOBJ? PLAYER> <TELL \"You're already here!\" CR>)\n\t       (T <TELL \"Not a good idea. You might wait all night.\" CR>)>>"
  },
  "V-WAIT-UNTIL": {
   "name": "V-WAIT-UNTIL",
   "file": "verbs.zil",
   "line": 2120,
   "endLine": 2133,
   "source": "<ROUTINE V-WAIT-UNTIL ()\t;\"?? time?\"\n\t <COND (<==? ,PRSO ,MIDNIGHT>\n\t\t<SETG P-NUMBER 720>\n\t\t<SETG PRSO ,INTNUM>)\n\t       (<L? ,P-NUMBER 8>\n\t\t<SETG P-NUMBER <* <+ ,P-NUMBER 12> 60>>)\n\t       (<L? ,P-NUMBER 13>\n\t\t<SETG P-NUMBER <* ,P-NUMBER 60>>)>\n\t <COND (<==? ,PRSO ,INTNUM>\n\t\t<COND (<G? ,P-NUMBER ,PRESENT-TIME>\n\t\t       <V-WAIT <- ,P-NUMBER ,PRESENT-TIME>>)\n\t\t      (T <TELL\n\"You are clearly ahead of your time.\" CR>)>)\n\t       (T <TELL \"It has been a long week, hasn't it?\" CR>)>>"
  },
  "V-ALARM": {
   "name": "V-ALARM",
   "file": "verbs.zil",
   "line": 2135,
   "endLine": 2145,
   "source": "<ROUTINE V-ALARM ()\n\t <COND (<==? ,PRSO ,CAT>\n\t\t<TELL\n\"The cat yawns, licks its lips, and settles down again.\" CR>)\n\t       (<==? ,PRSO ,MONICA>\n\t\t<TELL \"You wouldn't like that.\" CR>)\t;\"?\"\n\t       (<FSET? ,PRSO ,PERSON>\n\t\t<TELL \"He's wide awake, or haven't you noticed?\" CR>)\n\t       (ELSE\n\t\t<TELL\n\"Too bad, but\" THE-PRSO \" isn't asleep.\" CR>)>>"
  },
  "V-WALK": {
   "name": "V-WALK",
   "file": "verbs.zil",
   "line": 2147,
   "endLine": 2197,
   "source": "<ROUTINE V-WALK (\"AUX\" PT PTS STR OBJ RM)\n\t #DECL ((PT) <OR FALSE TABLE> (PTS) FIX\n\t\t(OBJ) OBJECT (RM) <OR FALSE OBJECT>)\n\t <COND (<==? ,PRSO ,GLOBAL-CALL>\n\t\t<PERFORM ,V?TURN ,PRSO>\n\t\t<RTRUE>)\n\t       (<NOT ,PRSO> <TELL \"You can't go that way.\" CR>)\n\t       (<SET PT <GETPT ,HERE ,PRSO>>\n\t\t<COND (<==? <SET PTS <PTSIZE .PT>> ,UEXIT>\n\t\t       <SET RM <GETB .PT ,REXIT>>\n\t\t       <GOTO .RM>)\n\t\t      (<==? .PTS ,NEXIT>\n\t\t       <TELL <GET .PT ,NEXITSTR> CR>\n\t\t       <RFATAL>)\n\t\t      (<==? .PTS ,FEXIT>\n\t\t       <COND (<SET RM <APPLY <GET .PT ,FEXITFCN>>>\n\t\t\t      <GOTO .RM>)\n\t\t\t     (T\n\t\t\t      <RFATAL>)>)\n\t\t      (<==? .PTS ,CEXIT>\n\t\t       <COND (<VALUE <GETB .PT ,CEXITFLAG>>\n\t\t\t      <GOTO <GETB .PT ,REXIT>>)\n\t\t\t     (<SET STR <GET .PT ,CEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <TELL \"You can't go that way.\" CR>\n\t\t\t      <RFATAL>)>)\n\t\t      (<==? .PTS ,DEXIT>\n\t\t       <COND (<FSET? <SET OBJ <GETB .PT ,DEXITOBJ>> ,OPENBIT>\n\t\t\t      <GOTO <GETB .PT ,REXIT>>)\n\t\t\t     (<AND <FSET? .OBJ ,INVISIBLE>\n\t\t\t\t   <NOT <AND ,DEBUG\n\t\t\t\t\t     <TELL \"[invisible] \">>>>\n\t\t\t      <TELL \"You can't go that way.\" CR>)\n\t\t\t     (<SET STR <GET .PT ,DEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <TELL \"Too bad, but\">\n\t\t\t      <THE? .OBJ>\n\t\t\t      <TELL \" \" D .OBJ \" is closed.\" CR>\n\t\t\t      <SETG P-IT-LOC ,HERE>\n\t\t\t      <SETG P-IT-OBJECT .OBJ>\n\t\t\t      <RFATAL>)>)>)\n\t       (<==? ,PRSO ,P?IN>\n\t\t<TELL \"(What compass direction do you want to go in?)\" CR>\n\t\t<RFATAL>)\n\t       (T\n\t\t<TELL \"You can't go that way.\" CR>\n\t\t<RFATAL>)>>"
  },
  "V-WALK-AROUND": {
   "name": "V-WALK-AROUND",
   "file": "verbs.zil",
   "line": 2199,
   "endLine": 2200,
   "source": "<ROUTINE V-WALK-AROUND ()\n\t <TELL \"(Use compass directions to move around here.)\" CR>>"
  },
  "V-WALK-TO": {
   "name": "V-WALK-TO",
   "file": "verbs.zil",
   "line": 2202,
   "endLine": 2217,
   "source": "<ROUTINE V-WALK-TO ()\n <COND (<OR <EQUAL? <META-LOC ,PRSO> ,HERE ,LOCAL-GLOBALS>\n\t    <FSET? ,PRSO ,DOORBIT>\n\t    <FSET? ,PRSO ,WINDOWBIT>>\n\t<TELL \"You don't need to walk around within a \"\n\t\t<COND (<OUTSIDE? ,HERE> \"part of the yard.\")\n\t\t      (<NOT <0? <BAND 16 <GETP ,HERE ,P?CORRIDOR>>>>\n\t\t       \"part of the hall.\")\n\t\t      (T \"room.\")>\n\t\tCR>)\n       (<IN? <META-LOC ,PRSO> ,ROOMS>\n\t<SETG PRSO <META-LOC ,PRSO>>\n\t<V-THROUGH>)\n       (T\n\t<TELL\n\"You can't go from here to there, at least not directly.\" CR>)>>"
  },
  "V-RUN-OVER": {
   "name": "V-RUN-OVER",
   "file": "verbs.zil",
   "line": 2219,
   "endLine": 2220,
   "source": "<ROUTINE V-RUN-OVER ()\n\t <TELL \"That doesn't make much sense.\" CR>>"
  },
  "V-WHAT": {
   "name": "V-WHAT",
   "file": "verbs.zil",
   "line": 2222,
   "endLine": 2231,
   "source": "<ROUTINE V-WHAT ()\n\t <COND (<OR <AND ,QCONTEXT\n\t\t\t <==? ,HERE ,QCONTEXT-ROOM>\n\t\t\t <==? ,HERE <META-LOC ,QCONTEXT>>\n\t\t\t <FSET? ,QCONTEXT ,PERSON>>\n\t\t    <FIND-FLAG ,HERE ,PERSON ,WINNER>>\n\t\t<TELL \"\\\"Isn't it obvious?\\\"\" CR>)\n\t       (<FSET? ,PRSO ,PERSON>\n\t\t<TELL \"Try asking that person.\" CR>)\n\t       (T <TELL \"Are you talking to yourself again?\" CR>)>>"
  },
  "V-YN": {
   "name": "V-YN",
   "file": "verbs.zil",
   "line": 2233,
   "endLine": 2238,
   "source": "<ROUTINE V-YN ()\n\t <COND (<AND ,QCONTEXT\n\t\t     <==? ,HERE ,QCONTEXT-ROOM>\n\t\t     <==? ,HERE <META-LOC ,QCONTEXT>>>\n\t\t<TELL D ,QCONTEXT \" ignores you completely.\" CR>)\n\t       (T <TELL \"That deserves to be ignored.\" CR>)>>"
  }
 },
 "globals": {
  "C-TABLELEN": {
   "name": "C-TABLELEN",
   "kind": "constant",
   "file": "clock.zil",
   "line": 4,
   "value": "300"
  },
  "C-TABLE": {
   "name": "C-TABLE",
   "kind": "global",
   "file": "clock.zil",
   "line": 6,
   "value": "<ITABLE NONE 300>"
  },
  "C-DEMONS": {
   "name": "C-DEMONS",
   "kind": "global",
   "file": "clock.zil",
   "line": 8,
   "value": "300"
  },
  "C-INTS": {
   "name": "C-INTS",
   "kind": "global",
   "file": "clock.zil",
   "line": 10,
   "value": "300"
  },
  "C-INTLEN": {
   "name": "C-INTLEN",
   "kind": "constant",
   "file": "clock.zil",
   "line": 12,
   "value": "6"
  },
  "C-ENABLED?": {
   "name": "C-ENABLED?",
   "kind": "constant",
   "file": "clock.zil",
   "line": 14,
   "value": "0"
  },
  "C-TICK": {
   "name": "C-TICK",
   "kind": "constant",
   "file": "clock.zil",
   "line": 16,
   "value": "1"
  },
  "C-RTN": {
   "name": "C-RTN",
   "kind": "constant",
   "file": "clock.zil",
   "line": 18,
   "value": "2"
  },
  "CLOCK-WAIT": {
   "name": "CLOCK-WAIT",
   "kind": "global",
   "file": "clock.zil",
   "line": 45,
   "value": "<>"
  },
  "SCORE": {
   "name": "SCORE",
   "kind": "global",
   "file": "events.zil",
   "line": 67,
   "value": "20"
  },
  "MOVES": {
   "name": "MOVES",
   "kind": "global",
   "file": "events.zil",
   "line": 68,
   "value": "0"
  },
  "SKY-DESC": {
   "name": "SKY-DESC",
   "kind": "global",
   "file": "events.zil",
   "line": 70,
   "value": "\"There's dark, cloudy sky above you.\""
  },
  "PRESENT-TIME": {
   "name": "PRESENT-TIME",
   "kind": "global",
   "file": "events.zil",
   "line": 71,
   "value": "480"
  },
  "CLOUDS-GONE": {
   "name": "CLOUDS-GONE",
   "kind": "global",
   "file": "events.zil",
   "line": 72,
   "value": "525"
  },
  "MOONRISE": {
   "name": "MOONRISE",
   "kind": "global",
   "file": "events.zil",
   "line": 73,
   "value": "612"
  },
  "SUNRISE": {
   "name": "SUNRISE",
   "kind": "global",
   "file": "events.zil",
   "line": 74,
   "value": "1117"
  },
  "I-WEATHER-NUM": {
   "name": "I-WEATHER-NUM",
   "kind": "global",
   "file": "events.zil",
   "line": 76,
   "value": "0"
  },
  "GROUND-MUDDY": {
   "name": "GROUND-MUDDY",
   "kind": "global",
   "file": "events.zil",
   "line": 77,
   "value": "<>"
  },
  "DUFFY-WITH-STILES": {
   "name": "DUFFY-WITH-STILES",
   "kind": "global",
   "file": "events.zil",
   "line": 159,
   "value": "<>"
  },
  "MET-STILES?": {
   "name": "MET-STILES?",
   "kind": "global",
   "file": "events.zil",
   "line": 176,
   "value": "<>"
  },
  "MET-DUFFY?": {
   "name": "MET-DUFFY?",
   "kind": "global",
   "file": "events.zil",
   "line": 177,
   "value": "<>"
  },
  "SEEN-DUFFY?": {
   "name": "SEEN-DUFFY?",
   "kind": "global",
   "file": "events.zil",
   "line": 178,
   "value": "<>"
  },
  "ANALYSIS-GOAL": {
   "name": "ANALYSIS-GOAL",
   "kind": "global",
   "file": "events.zil",
   "line": 212,
   "value": "<>"
  },
  "ANALYSIS-OBJ": {
   "name": "ANALYSIS-OBJ",
   "kind": "global",
   "file": "events.zil",
   "line": 247,
   "value": "<>"
  },
  "WELCOMED": {
   "name": "WELCOMED",
   "kind": "global",
   "file": "events.zil",
   "line": 347,
   "value": "<>"
  },
  "TOO-LATE-KNOCKED": {
   "name": "TOO-LATE-KNOCKED",
   "kind": "global",
   "file": "events.zil",
   "line": 348,
   "value": "0"
  },
  "OHERE": {
   "name": "OHERE",
   "kind": "global",
   "file": "events.zil",
   "line": 457,
   "value": "<>"
  },
  "LINDER-FOLLOWS-YOU": {
   "name": "LINDER-FOLLOWS-YOU",
   "kind": "global",
   "file": "events.zil",
   "line": 459,
   "value": "<>"
  },
  "LINDER-ASKED-YOU-TO-SIT": {
   "name": "LINDER-ASKED-YOU-TO-SIT",
   "kind": "global",
   "file": "events.zil",
   "line": 514,
   "value": "0"
  },
  "LINDER-EXPLAINED": {
   "name": "LINDER-EXPLAINED",
   "kind": "global",
   "file": "events.zil",
   "line": 530,
   "value": "<>"
  },
  "PLAYER-NEAR-SHOT": {
   "name": "PLAYER-NEAR-SHOT",
   "kind": "global",
   "file": "events.zil",
   "line": 548,
   "value": "<>"
  },
  "GOAL-TABLES": {
   "name": "GOAL-TABLES",
   "kind": "global",
   "file": "events.zil",
   "line": 603,
   "value": "<TABLE <TABLE <> <> <> <> 1 <> <> I-FOLLOW 4 4> <TABLE <> <> <> <> 1 <> <> I-PHONG 3 3> <TABLE <> <> <> <> 1 <> <> I-LINDER 4 4> <TABLE <> <> <> <> 1 <> <> I-STILES 9 9> <TABLE <> <> <> <> 1 <> <> I-MONICA 2 2> <TABLE <> <> <> <> 1 <> <> I-CAT 1 1>>"
  },
  "ATTENTION-TABLE": {
   "name": "ATTENTION-TABLE",
   "kind": "global",
   "file": "events.zil",
   "line": 611,
   "value": "<TABLE 0 0 0 0 0 0 0 0>"
  },
  "GOAL-F": {
   "name": "GOAL-F",
   "kind": "constant",
   "file": "events.zil",
   "line": 615,
   "value": "0"
  },
  "GOAL-S": {
   "name": "GOAL-S",
   "kind": "constant",
   "file": "events.zil",
   "line": 616,
   "value": "1"
  },
  "GOAL-I": {
   "name": "GOAL-I",
   "kind": "constant",
   "file": "events.zil",
   "line": 617,
   "value": "2"
  },
  "GOAL-LDIR": {
   "name": "GOAL-LDIR",
   "kind": "constant",
   "file": "events.zil",
   "line": 618,
   "value": "3"
  },
  "GOAL-ENABLE": {
   "name": "GOAL-ENABLE",
   "kind": "constant",
   "file": "events.zil",
   "line": 619,
   "value": "4"
  },
  "GOAL-PRIORITY": {
   "name": "GOAL-PRIORITY",
   "kind": "constant",
   "file": "events.zil",
   "line": 620,
   "value": "5"
  },
  "GOAL-QUEUED": {
   "name": "GOAL-QUEUED",
   "kind": "constant",
   "file": "events.zil",
   "line": 621,
   "value": "6"
  },
  "GOAL-FUNCTION": {
   "name": "GOAL-FUNCTION",
   "kind": "constant",
   "file": "events.zil",
   "line": 622,
   "value": "7"
  },
  "ATTENTION-SPAN": {
   "name": "ATTENTION-SPAN",
   "kind": "constant",
   "file": "events.zil",
   "line": 623,
   "value": "8"
  },
  "ATTENTION": {
   "name": "ATTENTION",
   "kind": "constant",
   "file": "events.zil",
   "line": 624,
   "value": "9"
  },
  "G-REACHED": {
   "name": "G-REACHED",
   "kind": "constant",
   "file": "events.zil",
   "line": 628,
   "value": "1"
  },
  "G-ENROUTE": {
   "name": "G-ENROUTE",
   "kind": "constant",
   "file": "events.zil",
   "line": 629,
   "value": "2"
  },
  "MOVEMENT-GOALS": {
   "name": "MOVEMENT-GOALS",
   "kind": "global",
   "file": "events.zil",
   "line": 641,
   "value": "<TABLE ;\"PLAYER\" <TABLE 0 0 0> ;\"PHONG\" <TABLE 0 50 1 OFFICE-PATH ;\"8:50-9 PM\" ;\"Stiles arr. => Phong to front door, rings bell, then office.\" 70 10 KITCHEN ;\"10-12 PM\" 120 10 BUTLER-ROOM ;\"12 PM ON\" 0> ;\"LINDER\" <TABLE 0 0 0> ;\"STILES\" <TABLE 0 0 ;\"60 5 OFFICE-PATH\t\t;arrives about 9:00\n\t       135 20 LIVING-ROOM\" 0> ;\"MONICA\" <TABLE 0 30 2 OFFICE ;\"8:30\" ;\"5  0 GARAGE\t\t;8:35 to movie: goal set in I-MONICA\" ;\"145 10 GARAGE\t\t;11:00: ditto\" ;\"2  1 WORKSHOP\t\t;to fix junction box: I-MONICA-RETURN\" 161 1 OFFICE ;\"? not used!\" ;\"15  5 TOILET-ROOM\t;to vomit: I-MONICA\" 15 5 MONICA-ROOM ;\"to rest\" 30 10 OFFICE ;\"12:00 to hide evidence\" 60 10 MONICA-ROOM ;\"1:00 retires\" 0> ;\"CAT\" <TABLE 0 0 0>>"
  },
  "TOO-LATE": {
   "name": "TOO-LATE",
   "kind": "global",
   "file": "events.zil",
   "line": 675,
   "value": "<>"
  },
  "MG-ROOM": {
   "name": "MG-ROOM",
   "kind": "constant",
   "file": "events.zil",
   "line": 704,
   "value": "0"
  },
  "MG-TIME": {
   "name": "MG-TIME",
   "kind": "constant",
   "file": "events.zil",
   "line": 705,
   "value": "1"
  },
  "MG-VARIATION": {
   "name": "MG-VARIATION",
   "kind": "constant",
   "file": "events.zil",
   "line": 706,
   "value": "2"
  },
  "MG-LENGTH": {
   "name": "MG-LENGTH",
   "kind": "constant",
   "file": "events.zil",
   "line": 707,
   "value": "<* 3 2>"
  },
  "MG-NEXT": {
   "name": "MG-NEXT",
   "kind": "constant",
   "file": "events.zil",
   "line": 708,
   "value": "4"
  },
  "OUTSIDE-LINE-C": {
   "name": "OUTSIDE-LINE-C",
   "kind": "constant",
   "file": "events.zil",
   "line": 777,
   "value": "4"
  },
  "OUTSIDE-LINE": {
   "name": "OUTSIDE-LINE",
   "kind": "global",
   "file": "events.zil",
   "line": 778,
   "value": "<PTABLE 0 FRONT-YARD P?SOUTH P?NORTH FRONT-PORCH P?SOUTH P?NORTH DRIVEWAY P?SOUTH P?NORTH DRIVEWAY-ENTRANCE P?EAST P?WEST SIDE-YARD P?EAST P?WEST OFFICE-PATH P?NORTH P?SOUTH OFFICE-PORCH P?NORTH P?SOUTH BACK-YARD P?NORTH P?SOUTH ROCK-GARDEN 0>"
  },
  "INSIDE-LINE-C": {
   "name": "INSIDE-LINE-C",
   "kind": "constant",
   "file": "events.zil",
   "line": 789,
   "value": "1"
  },
  "INSIDE-LINE": {
   "name": "INSIDE-LINE",
   "kind": "global",
   "file": "events.zil",
   "line": 790,
   "value": "<PTABLE 0 LINDER-ROOM P?WEST P?EAST LIVING-ROOM P?SOUTH P?NORTH HALL-1 P?SOUTH P?NORTH HALL-2 P?SOUTH P?NORTH HALL-3 P?WEST P?EAST ENTRY 0>"
  },
  "MONICA-LINE-C": {
   "name": "MONICA-LINE-C",
   "kind": "constant",
   "file": "events.zil",
   "line": 798,
   "value": "3"
  },
  "MONICA-LINE": {
   "name": "MONICA-LINE",
   "kind": "global",
   "file": "events.zil",
   "line": 799,
   "value": "<PTABLE 0 BATHROOM P?SOUTH P?NORTH MONICA-ROOM 0>"
  },
  "OFFICE-LINE-C": {
   "name": "OFFICE-LINE-C",
   "kind": "constant",
   "file": "events.zil",
   "line": 803,
   "value": "2"
  },
  "OFFICE-LINE": {
   "name": "OFFICE-LINE",
   "kind": "global",
   "file": "events.zil",
   "line": 804,
   "value": "<PTABLE 0 OFFICE P?WEST P?EAST HALL-4 P?SOUTH P?NORTH GARAGE P?EAST P?WEST WORKSHOP 0>"
  },
  "WHERE-TABLES": {
   "name": "WHERE-TABLES",
   "kind": "global",
   "file": "events.zil",
   "line": 1106,
   "value": "<TABLE <TABLE 0 0 0 0 0 0> <TABLE 0 0 0 0 0 0> <TABLE 0 0 0 0 0 0> <TABLE 0 0 0 0 0 0> <TABLE 0 0 0 0 0 0> <TABLE 0 0 0 0 0 0>>"
  },
  "PHONG-SEEN-CORPSE?": {
   "name": "PHONG-SEEN-CORPSE?",
   "kind": "global",
   "file": "events.zil",
   "line": 1116,
   "value": "<>"
  },
  "PHONG-CALLED": {
   "name": "PHONG-CALLED",
   "kind": "global",
   "file": "events.zil",
   "line": 1117,
   "value": "<>"
  },
  "PHONG-OLD-LOC": {
   "name": "PHONG-OLD-LOC",
   "kind": "global",
   "file": "events.zil",
   "line": 1118,
   "value": "<>"
  },
  "MURDER-TIME": {
   "name": "MURDER-TIME",
   "kind": "global",
   "file": "events.zil",
   "line": 1203,
   "value": "<>"
  },
  "MONICA-SEEN-CORPSE?": {
   "name": "MONICA-SEEN-CORPSE?",
   "kind": "global",
   "file": "events.zil",
   "line": 1318,
   "value": "<>"
  },
  "CLOCK-FIXED": {
   "name": "CLOCK-FIXED",
   "kind": "global",
   "file": "events.zil",
   "line": 1319,
   "value": "<>"
  },
  "MONICA-PUSHED-BUTTON": {
   "name": "MONICA-PUSHED-BUTTON",
   "kind": "global",
   "file": "events.zil",
   "line": 1320,
   "value": "<>"
  },
  "MONICA-DASHED-OUT-DOOR": {
   "name": "MONICA-DASHED-OUT-DOOR",
   "kind": "global",
   "file": "events.zil",
   "line": 1486,
   "value": "<>"
  },
  "DUFFY-AT-CORONER": {
   "name": "DUFFY-AT-CORONER",
   "kind": "global",
   "file": "events.zil",
   "line": 1512,
   "value": "<>"
  },
  "DUFFY-HINT-NUM": {
   "name": "DUFFY-HINT-NUM",
   "kind": "global",
   "file": "events.zil",
   "line": 1563,
   "value": "0"
  },
  "NO-WIRE-HINT": {
   "name": "NO-WIRE-HINT",
   "kind": "global",
   "file": "events.zil",
   "line": 1564,
   "value": "T"
  },
  "WIRE-MATCHED": {
   "name": "WIRE-MATCHED",
   "kind": "global",
   "file": "events.zil",
   "line": 1610,
   "value": "<>"
  },
  "POWDER-ANALYZED": {
   "name": "POWDER-ANALYZED",
   "kind": "global",
   "file": "events.zil",
   "line": 1611,
   "value": "<>"
  },
  "SIDE-FOOTPRINTS-MATCHED": {
   "name": "SIDE-FOOTPRINTS-MATCHED",
   "kind": "global",
   "file": "events.zil",
   "line": 1612,
   "value": "<>"
  },
  "BACK-FOOTPRINTS-MATCHED": {
   "name": "BACK-FOOTPRINTS-MATCHED",
   "kind": "global",
   "file": "events.zil",
   "line": 1613,
   "value": "<>"
  },
  "SEEN-MONICA-AT-CLOCK": {
   "name": "SEEN-MONICA-AT-CLOCK",
   "kind": "global",
   "file": "events.zil",
   "line": 1614,
   "value": "<>"
  },
  "SEEN-MONICA-AT-J-BOX": {
   "name": "SEEN-MONICA-AT-J-BOX",
   "kind": "global",
   "file": "events.zil",
   "line": 1615,
   "value": "<>"
  },
  "USED-CLOCK-KEY": {
   "name": "USED-CLOCK-KEY",
   "kind": "global",
   "file": "events.zil",
   "line": 1616,
   "value": "<>"
  },
  "STILES-CONVICTED": {
   "name": "STILES-CONVICTED",
   "kind": "global",
   "file": "events.zil",
   "line": 1874,
   "value": "<>"
  },
  "SERIAL": {
   "name": "SERIAL",
   "kind": "constant",
   "file": "witness.zil",
   "line": 23,
   "value": "0"
  },
  "P-WON": {
   "name": "P-WON",
   "kind": "global",
   "file": "main.zil",
   "line": 4,
   "value": "<>"
  },
  "M-FATAL": {
   "name": "M-FATAL",
   "kind": "constant",
   "file": "main.zil",
   "line": 6,
   "value": "2"
  },
  "M-HANDLED": {
   "name": "M-HANDLED",
   "kind": "constant",
   "file": "main.zil",
   "line": 8,
   "value": "1"
  },
  "M-NOT-HANDLED": {
   "name": "M-NOT-HANDLED",
   "kind": "constant",
   "file": "main.zil",
   "line": 10,
   "value": "<>"
  },
  "M-BEG": {
   "name": "M-BEG",
   "kind": "constant",
   "file": "main.zil",
   "line": 12,
   "value": "1"
  },
  "M-END": {
   "name": "M-END",
   "kind": "constant",
   "file": "main.zil",
   "line": 14,
   "value": "6"
  },
  "M-ENTER": {
   "name": "M-ENTER",
   "kind": "constant",
   "file": "main.zil",
   "line": 16,
   "value": "2"
  },
  "M-LOOK": {
   "name": "M-LOOK",
   "kind": "constant",
   "file": "main.zil",
   "line": 18,
   "value": "3"
  },
  "M-FLASH": {
   "name": "M-FLASH",
   "kind": "constant",
   "file": "main.zil",
   "line": 20,
   "value": "4"
  },
  "M-OBJDESC": {
   "name": "M-OBJDESC",
   "kind": "constant",
   "file": "main.zil",
   "line": 22,
   "value": "5"
  },
  "NOW-PRSI": {
   "name": "NOW-PRSI",
   "kind": "global",
   "file": "main.zil",
   "line": 179,
   "value": "<>"
  },
  "PRSA": {
   "name": "PRSA",
   "kind": "global",
   "file": "parser.zil",
   "line": 23,
   "value": "0"
  },
  "PRSI": {
   "name": "PRSI",
   "kind": "global",
   "file": "parser.zil",
   "line": 25,
   "value": "0"
  },
  "PRSO": {
   "name": "PRSO",
   "kind": "global",
   "file": "parser.zil",
   "line": 27,
   "value": "0"
  },
  "P-TABLE": {
   "name": "P-TABLE",
   "kind": "global",
   "file": "parser.zil",
   "line": 29,
   "value": "0"
  },
  "P-ONEOBJ": {
   "name": "P-ONEOBJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 31,
   "value": "0"
  },
  "P-SYNTAX": {
   "name": "P-SYNTAX",
   "kind": "global",
   "file": "parser.zil",
   "line": 33,
   "value": "0"
  },
  "P-CCSRC": {
   "name": "P-CCSRC",
   "kind": "global",
   "file": "parser.zil",
   "line": 35,
   "value": "0"
  },
  "P-LEN": {
   "name": "P-LEN",
   "kind": "global",
   "file": "parser.zil",
   "line": 37,
   "value": "0"
  },
  "P-DIR": {
   "name": "P-DIR",
   "kind": "global",
   "file": "parser.zil",
   "line": 39,
   "value": "0"
  },
  "HERE": {
   "name": "HERE",
   "kind": "global",
   "file": "parser.zil",
   "line": 41,
   "value": "0"
  },
  "WINNER": {
   "name": "WINNER",
   "kind": "global",
   "file": "parser.zil",
   "line": 43,
   "value": "0"
  },
  "P-LEXV": {
   "name": "P-LEXV",
   "kind": "global",
   "file": "parser.zil",
   "line": 45,
   "value": "<ITABLE BYTE 120>"
  },
  "P-INBUF": {
   "name": "P-INBUF",
   "kind": "global",
   "file": "parser.zil",
   "line": 48,
   "value": "<ITABLE BYTE 100>"
  },
  "P-CONT": {
   "name": "P-CONT",
   "kind": "global",
   "file": "parser.zil",
   "line": 51,
   "value": "<>"
  },
  "P-IT-OBJECT": {
   "name": "P-IT-OBJECT",
   "kind": "global",
   "file": "parser.zil",
   "line": 53,
   "value": "<>"
  },
  "P-IT-LOC": {
   "name": "P-IT-LOC",
   "kind": "global",
   "file": "parser.zil",
   "line": 54,
   "value": "<>"
  },
  "P-HIM-HER": {
   "name": "P-HIM-HER",
   "kind": "global",
   "file": "parser.zil",
   "line": 56,
   "value": "<>"
  },
  "P-HIM-HER-LOC": {
   "name": "P-HIM-HER-LOC",
   "kind": "global",
   "file": "parser.zil",
   "line": 57,
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
   "line": 66,
   "value": "<>"
  },
  "P-ACLAUSE": {
   "name": "P-ACLAUSE",
   "kind": "global",
   "file": "parser.zil",
   "line": 68,
   "value": "<>"
  },
  "P-ANAM": {
   "name": "P-ANAM",
   "kind": "global",
   "file": "parser.zil",
   "line": 70,
   "value": "<>"
  },
  "P-AADJ": {
   "name": "P-AADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 72,
   "value": "<>"
  },
  "P-PHRLEN": {
   "name": "P-PHRLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 75,
   "value": "3"
  },
  "P-ORPHLEN": {
   "name": "P-ORPHLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 77,
   "value": "7"
  },
  "P-RTLEN": {
   "name": "P-RTLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 79,
   "value": "3"
  },
  "P-LEXWORDS": {
   "name": "P-LEXWORDS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 82,
   "value": "1"
  },
  "P-LEXSTART": {
   "name": "P-LEXSTART",
   "kind": "constant",
   "file": "parser.zil",
   "line": 85,
   "value": "1"
  },
  "P-LEXELEN": {
   "name": "P-LEXELEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 88,
   "value": "2"
  },
  "P-WORDLEN": {
   "name": "P-WORDLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 90,
   "value": "4"
  },
  "P-PSOFF": {
   "name": "P-PSOFF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 93,
   "value": "4"
  },
  "P-P1OFF": {
   "name": "P-P1OFF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 96,
   "value": "5"
  },
  "P-P1BITS": {
   "name": "P-P1BITS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 99,
   "value": "3"
  },
  "P-ITBLLEN": {
   "name": "P-ITBLLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 101,
   "value": "9"
  },
  "P-ITBL": {
   "name": "P-ITBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 103,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-OTBL": {
   "name": "P-OTBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 105,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-VTBL": {
   "name": "P-VTBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 107,
   "value": "<TABLE 0 0 0 0>"
  },
  "P-NCN": {
   "name": "P-NCN",
   "kind": "global",
   "file": "parser.zil",
   "line": 109,
   "value": "0"
  },
  "P-VERB": {
   "name": "P-VERB",
   "kind": "constant",
   "file": "parser.zil",
   "line": 111,
   "value": "0"
  },
  "P-VERBN": {
   "name": "P-VERBN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 113,
   "value": "1"
  },
  "P-PREP1": {
   "name": "P-PREP1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 115,
   "value": "2"
  },
  "P-PREP1N": {
   "name": "P-PREP1N",
   "kind": "constant",
   "file": "parser.zil",
   "line": 117,
   "value": "3"
  },
  "P-PREP2": {
   "name": "P-PREP2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 119,
   "value": "4"
  },
  "P-PREP2N": {
   "name": "P-PREP2N",
   "kind": "constant",
   "file": "parser.zil",
   "line": 121,
   "value": "5"
  },
  "P-NC1": {
   "name": "P-NC1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 123,
   "value": "6"
  },
  "P-NC1L": {
   "name": "P-NC1L",
   "kind": "constant",
   "file": "parser.zil",
   "line": 125,
   "value": "7"
  },
  "P-NC2": {
   "name": "P-NC2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 127,
   "value": "8"
  },
  "P-NC2L": {
   "name": "P-NC2L",
   "kind": "constant",
   "file": "parser.zil",
   "line": 129,
   "value": "9"
  },
  "QUOTE-FLAG": {
   "name": "QUOTE-FLAG",
   "kind": "global",
   "file": "parser.zil",
   "line": 131,
   "value": "<>"
  },
  "P-ADVERB": {
   "name": "P-ADVERB",
   "kind": "global",
   "file": "parser.zil",
   "line": 133,
   "value": "<>"
  },
  "P-PROMPT": {
   "name": "P-PROMPT",
   "kind": "global",
   "file": "parser.zil",
   "line": 141,
   "value": "\"What should you, the detective, do now?\""
  },
  "X-IS-LISTENING": {
   "name": "X-IS-LISTENING",
   "kind": "global",
   "file": "parser.zil",
   "line": 159,
   "value": "<>"
  },
  "P-NUMBER": {
   "name": "P-NUMBER",
   "kind": "global",
   "file": "parser.zil",
   "line": 463,
   "value": "0"
  },
  "UNKNOWN-MSGS": {
   "name": "UNKNOWN-MSGS",
   "kind": "global",
   "file": "parser.zil",
   "line": 542,
   "value": "<PLTABLE <PTABLE \"(I don't know the word \"\" \"\".)\"> <PTABLE \"(Sorry, but the word \"\" \"\" is not in the vocabulary that you can use.)\"> <PTABLE \"(You don't need to use the word \"\" \"\" to solve this mystery.)\"> <PTABLE \"(Sorry, but the program doesn't recognize the word \"\" \"\".)\">>"
  },
  "P-SLOCBITS": {
   "name": "P-SLOCBITS",
   "kind": "global",
   "file": "parser.zil",
   "line": 577,
   "value": "0"
  },
  "P-SYNLEN": {
   "name": "P-SYNLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 579,
   "value": "8"
  },
  "P-SBITS": {
   "name": "P-SBITS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 581,
   "value": "0"
  },
  "P-SPREP1": {
   "name": "P-SPREP1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 583,
   "value": "1"
  },
  "P-SPREP2": {
   "name": "P-SPREP2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 585,
   "value": "2"
  },
  "P-SFWIM1": {
   "name": "P-SFWIM1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 587,
   "value": "3"
  },
  "P-SFWIM2": {
   "name": "P-SFWIM2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 589,
   "value": "4"
  },
  "P-SLOC1": {
   "name": "P-SLOC1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 591,
   "value": "5"
  },
  "P-SLOC2": {
   "name": "P-SLOC2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 593,
   "value": "6"
  },
  "P-SACTION": {
   "name": "P-SACTION",
   "kind": "constant",
   "file": "parser.zil",
   "line": 595,
   "value": "7"
  },
  "P-SONUMS": {
   "name": "P-SONUMS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 597,
   "value": "3"
  },
  "P-GWIMBIT": {
   "name": "P-GWIMBIT",
   "kind": "global",
   "file": "parser.zil",
   "line": 792,
   "value": "0"
  },
  "P-NAM": {
   "name": "P-NAM",
   "kind": "global",
   "file": "parser.zil",
   "line": 854,
   "value": "<>"
  },
  "P-XNAM": {
   "name": "P-XNAM",
   "kind": "global",
   "file": "parser.zil",
   "line": 856,
   "value": "<>"
  },
  "P-ADJ": {
   "name": "P-ADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 858,
   "value": "<>"
  },
  "P-XADJ": {
   "name": "P-XADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 860,
   "value": "<>"
  },
  "P-ADJN": {
   "name": "P-ADJN",
   "kind": "global",
   "file": "parser.zil",
   "line": 862,
   "value": "<>"
  },
  "P-XADJN": {
   "name": "P-XADJN",
   "kind": "global",
   "file": "parser.zil",
   "line": 864,
   "value": "<>"
  },
  "P-PRSO": {
   "name": "P-PRSO",
   "kind": "global",
   "file": "parser.zil",
   "line": 866,
   "value": "<ITABLE NONE 50>"
  },
  "P-PRSI": {
   "name": "P-PRSI",
   "kind": "global",
   "file": "parser.zil",
   "line": 868,
   "value": "<ITABLE NONE 50>"
  },
  "P-BUTS": {
   "name": "P-BUTS",
   "kind": "global",
   "file": "parser.zil",
   "line": 870,
   "value": "<ITABLE NONE 50>"
  },
  "P-MERGE": {
   "name": "P-MERGE",
   "kind": "global",
   "file": "parser.zil",
   "line": 872,
   "value": "<ITABLE NONE 50>"
  },
  "P-OCLAUSE": {
   "name": "P-OCLAUSE",
   "kind": "global",
   "file": "parser.zil",
   "line": 874,
   "value": "<ITABLE NONE 50>"
  },
  "P-MATCHLEN": {
   "name": "P-MATCHLEN",
   "kind": "global",
   "file": "parser.zil",
   "line": 876,
   "value": "0"
  },
  "P-GETFLAGS": {
   "name": "P-GETFLAGS",
   "kind": "global",
   "file": "parser.zil",
   "line": 878,
   "value": "0"
  },
  "P-ALL": {
   "name": "P-ALL",
   "kind": "constant",
   "file": "parser.zil",
   "line": 880,
   "value": "1"
  },
  "P-ONE": {
   "name": "P-ONE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 882,
   "value": "2"
  },
  "P-INHIBIT": {
   "name": "P-INHIBIT",
   "kind": "constant",
   "file": "parser.zil",
   "line": 884,
   "value": "4"
  },
  "P-CSPTR": {
   "name": "P-CSPTR",
   "kind": "global",
   "file": "parser.zil",
   "line": 886,
   "value": "<>"
  },
  "P-CEPTR": {
   "name": "P-CEPTR",
   "kind": "global",
   "file": "parser.zil",
   "line": 887,
   "value": "<>"
  },
  "SH": {
   "name": "SH",
   "kind": "constant",
   "file": "parser.zil",
   "line": 939,
   "value": "128"
  },
  "SC": {
   "name": "SC",
   "kind": "constant",
   "file": "parser.zil",
   "line": 941,
   "value": "64"
  },
  "SIR": {
   "name": "SIR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 943,
   "value": "32"
  },
  "SOG": {
   "name": "SOG",
   "kind": "constant",
   "file": "parser.zil",
   "line": 945,
   "value": "16"
  },
  "STAKE": {
   "name": "STAKE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 947,
   "value": "8"
  },
  "SMANY": {
   "name": "SMANY",
   "kind": "constant",
   "file": "parser.zil",
   "line": 949,
   "value": "4"
  },
  "SHAVE": {
   "name": "SHAVE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 951,
   "value": "2"
  },
  "P-MOBY-FOUND": {
   "name": "P-MOBY-FOUND",
   "kind": "global",
   "file": "parser.zil",
   "line": 1079,
   "value": "<>"
  },
  "P-SRCBOT": {
   "name": "P-SRCBOT",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1150,
   "value": "2"
  },
  "P-SRCTOP": {
   "name": "P-SRCTOP",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1152,
   "value": "0"
  },
  "P-SRCALL": {
   "name": "P-SRCALL",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1154,
   "value": "1"
  },
  "LOAD-MAX": {
   "name": "LOAD-MAX",
   "kind": "global",
   "file": "people.zil",
   "line": 6,
   "value": "100"
  },
  "LOAD-ALLOWED": {
   "name": "LOAD-ALLOWED",
   "kind": "global",
   "file": "people.zil",
   "line": 7,
   "value": "100"
  },
  "PLAYER-C": {
   "name": "PLAYER-C",
   "kind": "constant",
   "file": "people.zil",
   "line": 58,
   "value": "0"
  },
  "PHONG-C": {
   "name": "PHONG-C",
   "kind": "constant",
   "file": "people.zil",
   "line": 59,
   "value": "1"
  },
  "LINDER-C": {
   "name": "LINDER-C",
   "kind": "constant",
   "file": "people.zil",
   "line": 60,
   "value": "2"
  },
  "STILES-C": {
   "name": "STILES-C",
   "kind": "constant",
   "file": "people.zil",
   "line": 61,
   "value": "3"
  },
  "MONICA-C": {
   "name": "MONICA-C",
   "kind": "constant",
   "file": "people.zil",
   "line": 62,
   "value": "4"
  },
  "CAT-C": {
   "name": "CAT-C",
   "kind": "constant",
   "file": "people.zil",
   "line": 63,
   "value": "5"
  },
  "CHARACTER-MAX": {
   "name": "CHARACTER-MAX",
   "kind": "constant",
   "file": "people.zil",
   "line": 64,
   "value": "5"
  },
  "CHARACTER-TABLE": {
   "name": "CHARACTER-TABLE",
   "kind": "global",
   "file": "people.zil",
   "line": 66,
   "value": "<PTABLE PLAYER PHONG LINDER STILES MONICA CAT>"
  },
  "GLOBAL-CHARACTER-TABLE": {
   "name": "GLOBAL-CHARACTER-TABLE",
   "kind": "global",
   "file": "people.zil",
   "line": 69,
   "value": "<PTABLE PLAYER GLOBAL-PHONG GLOBAL-LINDER GLOBAL-STILES GLOBAL-MONICA GLOBAL-CAT>"
  },
  "PLAYER-HIDING": {
   "name": "PLAYER-HIDING",
   "kind": "global",
   "file": "people.zil",
   "line": 81,
   "value": "<>"
  },
  "PHONG-HAS-MOTIVE": {
   "name": "PHONG-HAS-MOTIVE",
   "kind": "global",
   "file": "people.zil",
   "line": 179,
   "value": "<>"
  },
  "PHONG-ADMITTED-HELPING?": {
   "name": "PHONG-ADMITTED-HELPING?",
   "kind": "global",
   "file": "people.zil",
   "line": 180,
   "value": "<>"
  },
  "PHONG-HERE": {
   "name": "PHONG-HERE",
   "kind": "global",
   "file": "people.zil",
   "line": 492,
   "value": "<PLTABLE \"tidying up\" ;\" as usual\" \"looking imperturbable\">"
  },
  "KITCHEN-ACTIVITIES": {
   "name": "KITCHEN-ACTIVITIES",
   "kind": "global",
   "file": "people.zil",
   "line": 496,
   "value": "<PLTABLE \"washing dishes\" \"opening a can of worms\" \"smoking a cigarette\" ;\"polishing the silver\" \"making pickles\">"
  },
  "LINDER-ASKED": {
   "name": "LINDER-ASKED",
   "kind": "global",
   "file": "people.zil",
   "line": 687,
   "value": "<PLTABLE \"\"I can't help you there.\"\" \"\"That has nothing to do with why I asked you here.\"\">"
  },
  "STILES-ASKED": {
   "name": "STILES-ASKED",
   "kind": "global",
   "file": "people.zil",
   "line": 858,
   "value": "<PLTABLE \"\"I couldn't help you if I wanted to.\"\" \"\"That has nothing to do with me.\"\">"
  },
  "MONICA-QUESTIONS": {
   "name": "MONICA-QUESTIONS",
   "kind": "global",
   "file": "people.zil",
   "line": 923,
   "value": "0"
  },
  "MONICA-HAS-MOTIVE": {
   "name": "MONICA-HAS-MOTIVE",
   "kind": "global",
   "file": "people.zil",
   "line": 924,
   "value": "<>"
  },
  "MONICA-CLAMS-UP": {
   "name": "MONICA-CLAMS-UP",
   "kind": "global",
   "file": "people.zil",
   "line": 925,
   "value": "<>"
  },
  "MONICA-TIED-TO": {
   "name": "MONICA-TIED-TO",
   "kind": "global",
   "file": "people.zil",
   "line": 926,
   "value": "<>"
  },
  "MONICA-TIED-WITH": {
   "name": "MONICA-TIED-WITH",
   "kind": "global",
   "file": "people.zil",
   "line": 927,
   "value": "<>"
  },
  "MONICA-ADMITTED-HELPING?": {
   "name": "MONICA-ADMITTED-HELPING?",
   "kind": "global",
   "file": "people.zil",
   "line": 928,
   "value": "<>"
  },
  "SHE-CLAMS-UP": {
   "name": "SHE-CLAMS-UP",
   "kind": "global",
   "file": "people.zil",
   "line": 929,
   "value": "\" She seems to remember who you are, then clams up.\""
  },
  "WHY-ME": {
   "name": "WHY-ME",
   "kind": "global",
   "file": "people.zil",
   "line": 1631,
   "value": "<PLTABLE \"\"You can do that yourself.\"\" \"\"Do it yourself!\"\" \"\"Why not do it yourself?\"\">"
  },
  "DIR-STRINGS": {
   "name": "DIR-STRINGS",
   "kind": "global",
   "file": "places.zil",
   "line": 8,
   "value": "<PTABLE P?NORTH \"north\" P?SOUTH \"south\" P?EAST \"east\" P?WEST \"west\" P?NW \"northwest\" P?NE \"northeast\" P?SW \"southwest\" P?SE \"southeast\" P?DOWN \"downstairs\" P?UP \"upstairs\" P?IN \"in\" P?OUT \"out\">"
  },
  "SIDE-FOOTPRINTS-CONFUSED": {
   "name": "SIDE-FOOTPRINTS-CONFUSED",
   "kind": "global",
   "file": "places.zil",
   "line": 555,
   "value": "<>"
  },
  "TUNE-ON": {
   "name": "TUNE-ON",
   "kind": "global",
   "file": "places.zil",
   "line": 1027,
   "value": "<>"
  },
  "SONG-TABLE": {
   "name": "SONG-TABLE",
   "kind": "global",
   "file": "places.zil",
   "line": 1076,
   "value": "<PLTABLE \"Alexander's Ragtime Band\" \"I'm an Old Cowhand\" \"Mexicali Rose\" \"Pennies from Heaven\" \"Sweet Leilani\" \"When I Grow Too Old to Dream\">"
  },
  "RADIO-ON": {
   "name": "RADIO-ON",
   "kind": "global",
   "file": "places.zil",
   "line": 1426,
   "value": "T"
  },
  "RADIO-TABLE": {
   "name": "RADIO-TABLE",
   "kind": "global",
   "file": "places.zil",
   "line": 1438,
   "value": "<PLTABLE \"an Amos 'n' Andy serial\" ;8 \"a Lum & Abner serial\" \"the Paul Whiteman orchestra\" \"the Paul Whiteman orchestra\" \"Nick Harris's \"Camera Clue Murder\"\" ;9 \"the March of Progress\" \"Kay Kyser's orchestra\" \"Kay Kyser's orchestra\" \"the L.A. Times news program\" ;10 \"Ozzie Nelson's orchestra\" \"the Montoya Orchestra\" \"Phil Harris's orchestra\" \"the Duchin orchestra\" ;11 \"a balalaika orchestra\" \"Ozzie Nelson's orchestra\" \"Ozzie Nelson's orchestra\" \"\"Rhapsody in Wax\"\" ;12 \"\"Rhapsody in Wax\"\" \"\"Rhapsody in Wax\"\" \"\"Rhapsody in Wax\"\" \"a revival meeting with Oral Roberts\" ;1 \"a revival meeting with Oral Roberts\" \"a revival meeting with Oral Roberts\" \"a revival meeting with Oral Roberts\" \"the Philadelphia Orchestra, conducted by Leopold Stokowski\" ;2 \"the Philadelphia Orchestra, conducted by Leopold Stokowski\" \"the Philadelphia Orchestra, conducted by Leopold Stokowski\" \"the Philadelphia Orchestra, conducted by Leopold Stokowski\" \"Lowell Thomas, Radio Commentator\" ;3 \"Lowell Thomas, Radio Commentator\" \"a program of classical music\" \"a program of classical music\" \"a revival meeting with Aimee Semple McPherson\" ;4 \"a revival meeting with Aimee Semple McPherson\" \"a revival meeting with Aimee Semple McPherson\" \"a revival meeting with Aimee Semple McPherson\" \"a program of classical music\" ;5 \"a program of classical music\" \"a program of classical music\" \"a program of classical music\" \"Boake Carter, Philco News Commentator\" ;6 \"Boake Carter, Philco News Commentator\" \"a program of classical music\" \"a program of classical music\" \"\"Rise and Shine\"\" ;7 \"\"Rise and Shine\"\" \"\"Rise and Shine\"\" \"\"Rise and Shine\"\" \"\"Between You, Me, and the Fence Post\"\">"
  },
  "SHOT-FIRED": {
   "name": "SHOT-FIRED",
   "kind": "global",
   "file": "places.zil",
   "line": 2589,
   "value": "<>"
  },
  "BUTTON-FIXED": {
   "name": "BUTTON-FIXED",
   "kind": "global",
   "file": "places.zil",
   "line": 2590,
   "value": "<>"
  },
  "PLAYER-PUSHED-BUTTON": {
   "name": "PLAYER-PUSHED-BUTTON",
   "kind": "global",
   "file": "places.zil",
   "line": 2591,
   "value": "<>"
  },
  "COR-1": {
   "name": "COR-1",
   "kind": "global",
   "file": "places.zil",
   "line": 2981,
   "value": "<PTABLE P?NORTH P?SOUTH ROCK-GARDEN BACK-YARD OFFICE-PORCH OFFICE-PATH 0>"
  },
  "COR-2": {
   "name": "COR-2",
   "kind": "global",
   "file": "places.zil",
   "line": 2985,
   "value": "<PTABLE P?EAST P?WEST OFFICE-PATH SIDE-YARD DRIVEWAY-ENTRANCE 0>"
  },
  "COR-4": {
   "name": "COR-4",
   "kind": "global",
   "file": "places.zil",
   "line": 2989,
   "value": "<PTABLE P?SOUTH P?NORTH LIMBO DRIVEWAY-ENTRANCE DRIVEWAY FRONT-PORCH 0>"
  },
  "COR-8": {
   "name": "COR-8",
   "kind": "global",
   "file": "places.zil",
   "line": 2993,
   "value": "<PTABLE P?EAST P?WEST GARAGE DRIVEWAY 0>"
  },
  "COR-16": {
   "name": "COR-16",
   "kind": "global",
   "file": "places.zil",
   "line": 2997,
   "value": "<PTABLE P?NORTH P?SOUTH HALL-1 HALL-2 HALL-3 HALL-4 0>"
  },
  "DRUNK-FLAG": {
   "name": "DRUNK-FLAG",
   "kind": "global",
   "file": "things.zil",
   "line": 442,
   "value": "<>"
  },
  "GUNS-MATCHED": {
   "name": "GUNS-MATCHED",
   "kind": "global",
   "file": "things.zil",
   "line": 560,
   "value": "<>"
  },
  "LINDER-SAW-MEDICAL-REPORT": {
   "name": "LINDER-SAW-MEDICAL-REPORT",
   "kind": "global",
   "file": "things.zil",
   "line": 617,
   "value": "<>"
  },
  "MONICA-SAW-MEDICAL-REPORT": {
   "name": "MONICA-SAW-MEDICAL-REPORT",
   "kind": "global",
   "file": "things.zil",
   "line": 618,
   "value": "<>"
  },
  "DUFFY-SAW-MEDICAL-REPORT": {
   "name": "DUFFY-SAW-MEDICAL-REPORT",
   "kind": "global",
   "file": "things.zil",
   "line": 619,
   "value": "<>"
  },
  "MONICA-SAW-CORONER-REPORT": {
   "name": "MONICA-SAW-CORONER-REPORT",
   "kind": "global",
   "file": "things.zil",
   "line": 638,
   "value": "<>"
  },
  "FILM-SEEN": {
   "name": "FILM-SEEN",
   "kind": "global",
   "file": "things.zil",
   "line": 1147,
   "value": "<>"
  },
  "DEBUG": {
   "name": "DEBUG",
   "kind": "global",
   "file": "verbs.zil",
   "line": 71,
   "value": "<>"
  },
  "DIFFICULTY-MAX": {
   "name": "DIFFICULTY-MAX",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 81,
   "value": "2"
  },
  "DIFFICULTY": {
   "name": "DIFFICULTY",
   "kind": "global",
   "file": "verbs.zil",
   "line": 82,
   "value": "0"
  },
  "VERBOSE": {
   "name": "VERBOSE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 110,
   "value": "<>"
  },
  "SUPER-BRIEF": {
   "name": "SUPER-BRIEF",
   "kind": "global",
   "file": "verbs.zil",
   "line": 111,
   "value": "<>"
  },
  "P-SPACE": {
   "name": "P-SPACE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 133,
   "value": "1"
  },
  "UEXIT": {
   "name": "UEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 333,
   "value": "1"
  },
  "NEXIT": {
   "name": "NEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 334,
   "value": "2"
  },
  "FEXIT": {
   "name": "FEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 335,
   "value": "3"
  },
  "CEXIT": {
   "name": "CEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 336,
   "value": "4"
  },
  "DEXIT": {
   "name": "DEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 337,
   "value": "5"
  },
  "REXIT": {
   "name": "REXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 339,
   "value": "0"
  },
  "NEXITSTR": {
   "name": "NEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 340,
   "value": "0"
  },
  "FEXITFCN": {
   "name": "FEXITFCN",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 341,
   "value": "0"
  },
  "CEXITFLAG": {
   "name": "CEXITFLAG",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 342,
   "value": "1"
  },
  "CEXITSTR": {
   "name": "CEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 343,
   "value": "1"
  },
  "DEXITOBJ": {
   "name": "DEXITOBJ",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 344,
   "value": "1"
  },
  "DEXITSTR": {
   "name": "DEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 345,
   "value": "1"
  },
  "FINGERPRINT-OBJ": {
   "name": "FINGERPRINT-OBJ",
   "kind": "global",
   "file": "verbs.zil",
   "line": 347,
   "value": "<>"
  },
  "HO-HUM": {
   "name": "HO-HUM",
   "kind": "global",
   "file": "verbs.zil",
   "line": 391,
   "value": "<PLTABLE \" doesn't help.\" \" has no effect.\">"
  },
  "INDENTS": {
   "name": "INDENTS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 417,
   "value": "<PTABLE \"\" \"  \" \"    \" \"      \" \"        \" \"          \">"
  },
  "FUMBLE-NUMBER": {
   "name": "FUMBLE-NUMBER",
   "kind": "global",
   "file": "verbs.zil",
   "line": 425,
   "value": "7"
  },
  "FUMBLE-PROB": {
   "name": "FUMBLE-PROB",
   "kind": "global",
   "file": "verbs.zil",
   "line": 426,
   "value": "8"
  },
  "QCONTEXT": {
   "name": "QCONTEXT",
   "kind": "global",
   "file": "verbs.zil",
   "line": 561,
   "value": "<>"
  },
  "QCONTEXT-ROOM": {
   "name": "QCONTEXT-ROOM",
   "kind": "global",
   "file": "verbs.zil",
   "line": 562,
   "value": "<>"
  },
  "WHO-CARES": {
   "name": "WHO-CARES",
   "kind": "global",
   "file": "verbs.zil",
   "line": 598,
   "value": "<PLTABLE \" doesn't appear interested\" \" doesn't care\" \" lets out a loud yawn\" \" seems to be getting impatient\">"
  },
  "YUKS": {
   "name": "YUKS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 604,
   "value": "<PLTABLE \"That's ridiculous!\" \"That's wacky!\" \"Nuts!\" \"What a fruitcake!\" \"What a screwball!\" \"You're off your rocker!\" \"You're crazy in the head!\" \"You can't be serious!\">"
  },
  "OFFENDED": {
   "name": "OFFENDED",
   "kind": "global",
   "file": "verbs.zil",
   "line": 937,
   "value": "<PLTABLE \"You ought to be ashamed of yourself!\" \"Hey, save that talk for the locker room!\" \"Step outside and say that!\" \"And so's your grandmother!\">"
  },
  "PRON-HIM": {
   "name": "PRON-HIM",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1060,
   "value": "\"him\""
  },
  "PRON-HE": {
   "name": "PRON-HE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1061,
   "value": "\"he\""
  },
  "PRON-HER": {
   "name": "PRON-HER",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1062,
   "value": "\"her\""
  },
  "PRON-SHE": {
   "name": "PRON-SHE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1063,
   "value": "\"she\""
  },
  "LIT": {
   "name": "LIT",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1652,
   "value": "<>"
  },
  "WHO-WAIT": {
   "name": "WHO-WAIT",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2040,
   "value": "0"
  }
 },
 "syntax": {
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
     "line": 27
    }
   ]
  },
  "$DBG": {
   "verb": "$DBG",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$DBG",
     "objects": 0,
     "particles": [],
     "action": "V-DEBUG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 29
    }
   ]
  },
  "$TANDY": {
   "verb": "$TANDY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$TANDY",
     "objects": 0,
     "particles": [],
     "action": "V-$TANDY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 31
    }
   ]
  },
  "$WHR": {
   "verb": "$WHR",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$WHR",
     "objects": 0,
     "particles": [],
     "action": "V-$WHERE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 32
    },
    {
     "pattern": "$WHR OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-$WHERE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 33
    },
    {
     "pattern": "$WHR OBJECT OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-$WHERE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 34
    }
   ]
  },
  "ACCUSE": {
   "verb": "ACCUSE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ACCUSE OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [],
     "action": "V-ACCUSE",
     "preaction": "PRE-ACCUSE",
     "file": "syntax.zil",
     "line": 36
    },
    {
     "pattern": "ACCUSE OBJECT (FIND PERSON) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-ACCUSE",
     "preaction": "PRE-ACCUSE",
     "file": "syntax.zil",
     "line": 37
    }
   ]
  },
  "ANALYZE": {
   "verb": "ANALYZE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ANALYZE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-ANALYZE",
     "preaction": "PRE-ANALYZE",
     "file": "syntax.zil",
     "line": 42
    },
    {
     "pattern": "ANALYZE OBJECT FOR OBJECT",
     "objects": 2,
     "particles": [
      "FOR"
     ],
     "action": "V-ANALYZE",
     "preaction": "PRE-ANALYZE",
     "file": "syntax.zil",
     "line": 43
    },
    {
     "pattern": "ANALYZE OFF OBJECT",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-ANALYZE",
     "preaction": "PRE-ANALYZE",
     "file": "syntax.zil",
     "line": 44
    },
    {
     "pattern": "ANALYZE OBJECT ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-SANALYZE",
     "preaction": "PRE-SANALYZE",
     "file": "syntax.zil",
     "line": 45
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
     "line": 48
    },
    {
     "pattern": "ANSWER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-REPLY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 49
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
     "line": 51
    }
   ]
  },
  "ARREST": {
   "verb": "ARREST",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ARREST OBJECT (FIND PERSON) (MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-ARREST",
     "preaction": "PRE-ARREST",
     "file": "syntax.zil",
     "line": 53
    },
    {
     "pattern": "ARREST OBJECT (FIND PERSON) (MANY) FOR OBJECT",
     "objects": 2,
     "particles": [
      "FOR"
     ],
     "action": "V-ARREST",
     "preaction": "PRE-ARREST",
     "file": "syntax.zil",
     "line": 54
    }
   ]
  },
  "ASK": {
   "verb": "ASK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ASK OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [],
     "action": "V-TELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 57
    },
    {
     "pattern": "ASK ABOUT OBJECT (HELD CARRIED ;HAVE)",
     "objects": 1,
     "particles": [
      "ABOUT"
     ],
     "action": "V-ASK-CONTEXT-ABOUT",
     "preaction": "PRE-ASK-CONTEXT-ABOUT",
     "file": "syntax.zil",
     "line": 58
    },
    {
     "pattern": "ASK FOR OBJECT (HELD CARRIED ;HAVE)",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-ASK-CONTEXT-FOR",
     "preaction": "PRE-ASK-CONTEXT-FOR",
     "file": "syntax.zil",
     "line": 60
    },
    {
     "pattern": "ASK OBJECT (FIND PERSON) ABOUT OBJECT (HELD CARRIED ;HAVE)",
     "objects": 2,
     "particles": [
      "ABOUT"
     ],
     "action": "V-ASK-ABOUT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 62
    },
    {
     "pattern": "ASK OBJECT (FIND PERSON) FOR OBJECT (HELD CARRIED ;HAVE)",
     "objects": 2,
     "particles": [
      "FOR"
     ],
     "action": "V-ASK-FOR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 64
    }
   ]
  },
  "ATTACK": {
   "verb": "ATTACK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ATTACK OBJECT (FIND PERSON) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 68
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
     "line": 74
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
     "file": "syntax.zil",
     "line": 80
    },
    {
     "pattern": "BRUSH OFF OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-BRUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 81
    },
    {
     "pattern": "BRUSH OBJECT (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-BRUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 82
    }
   ]
  },
  "$CALL": {
   "verb": "$CALL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$CALL OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-$CALL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 98
    }
   ]
  },
  "CALL": {
   "verb": "CALL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CALL OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-PHONE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 99
    },
    {
     "pattern": "CALL OBJECT ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PHONE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 100
    },
    {
     "pattern": "CALL TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-$CALL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 101
    },
    {
     "pattern": "CALL UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-PHONE",
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
     "line": 105
    },
    {
     "pattern": "CLIMB DOWN OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-CLIMB-DOWN",
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
     "action": "V-THROUGH",
     "preaction": null,
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
    },
    {
     "pattern": "CLIMB UP OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-CLIMB-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 109
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
     "line": 111
    }
   ]
  },
  "MATCH": {
   "verb": "MATCH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "MATCH OBJECT (MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-COMPARE",
     "preaction": "PRE-COMPARE",
     "file": "syntax.zil",
     "line": 115
    },
    {
     "pattern": "MATCH OBJECT (HELD CARRIED ON-GROUND IN-ROOM) TO OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-COMPARE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 116
    },
    {
     "pattern": "MATCH OBJECT (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-COMPARE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 118
    }
   ]
  },
  "CONFRONT": {
   "verb": "CONFRONT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CONFRONT OBJECT (FIND PERSON) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-CONFRONT",
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
     "file": "syntax.zil",
     "line": 130
    },
    {
     "pattern": "CURSE OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [],
     "action": "V-CURSES",
     "preaction": null,
     "file": "syntax.zil",
     "line": 131
    },
    {
     "pattern": "CURSE ON OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-CURSES",
     "preaction": null,
     "file": "syntax.zil",
     "line": 132
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
     "line": 138
    },
    {
     "pattern": "DESTROY OBJECT (ON-GROUND IN-ROOM HELD CARRIED) WITH OBJECT (HELD CARRIED TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 140
    },
    {
     "pattern": "DESTROY DOWN OBJECT (ON-GROUND IN-ROOM HELD CARRIED) WITH OBJECT (HELD CARRIED TAKE)",
     "objects": 2,
     "particles": [
      "DOWN",
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 143
    }
   ]
  },
  "DIAL": {
   "verb": "DIAL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DIAL OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-PHONE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 149
    },
    {
     "pattern": "DIAL OBJECT ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PHONE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 150
    },
    {
     "pattern": "DIAL UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-PHONE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 151
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
     "line": 154
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
     "line": 158
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
     "line": 159
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
     "line": 160
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
     "line": 161
    }
   ]
  },
  "EAT": {
   "verb": "EAT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EAT OBJECT (FIND FOODBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-EAT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 166
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
     "line": 169
    },
    {
     "pattern": "ENTER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 170
    }
   ]
  },
  "EXAMINE": {
   "verb": "EXAMINE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EXAMINE OBJECT (HELD CARRIED IN-ROOM ON-GROUND ;MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-EXAMINE",
     "preaction": "PRE-EXAMINE",
     "file": "syntax.zil",
     "line": 173
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
     "line": 180
    }
   ]
  },
  "FIND": {
   "verb": "FIND",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FIND OBJECT (HELD CARRIED ;HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-FIND",
     "preaction": "PRE-FIND",
     "file": "syntax.zil",
     "line": 191
    }
   ]
  },
  "FINGERPRINT": {
   "verb": "FINGERPRINT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FINGERPRINT OBJECT (HELD CARRIED IN-ROOM ON-GROUND)",
     "objects": 1,
     "particles": [],
     "action": "V-FINGERPRINT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 193
    }
   ]
  },
  "FOLLOW": {
   "verb": "FOLLOW",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FOLLOW OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 201
    },
    {
     "pattern": "FOLLOW OBJECT (FIND PERSON) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 202
    },
    {
     "pattern": "FOLLOW OBJECT (FIND PERSON) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 203
    }
   ]
  },
  "GIVE": {
   "verb": "GIVE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "GIVE OBJECT (MANY HELD CARRIED ON-GROUND IN-ROOM) TO OBJECT (FIND PERSON) (ON-GROUND)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-GIVE",
     "preaction": "PRE-GIVE",
     "file": "syntax.zil",
     "line": 206
    },
    {
     "pattern": "GIVE OBJECT (FIND PERSON) (ON-GROUND) OBJECT (MANY)",
     "objects": 2,
     "particles": [],
     "action": "V-SGIVE",
     "preaction": "PRE-SGIVE",
     "file": "syntax.zil",
     "line": 209
    }
   ]
  },
  "GOODBYE": {
   "verb": "GOODBYE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "GOODBYE",
     "objects": 0,
     "particles": [],
     "action": "V-GOODBYE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 213
    },
    {
     "pattern": "GOODBYE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-GOODBYE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 214
    }
   ]
  },
  "HANDCUFF": {
   "verb": "HANDCUFF",
   "synonyms": [],
   "productions": [
    {
     "pattern": "HANDCUFF OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [],
     "action": "V-HANDCUFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 217
    },
    {
     "pattern": "HANDCUFF OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-TIE-TO",
     "preaction": "PRE-TIE-TO",
     "file": "syntax.zil",
     "line": 218
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
     "line": 223
    },
    {
     "pattern": "HELLO OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-HELLO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 224
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
     "line": 226
    },
    {
     "pattern": "HELP OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [],
     "action": "V-HELP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 227
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
     "line": 230
    },
    {
     "pattern": "HIDE BEHIND OBJECT",
     "objects": 1,
     "particles": [
      "BEHIND"
     ],
     "action": "V-HIDE-BEHIND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 231
    },
    {
     "pattern": "HIDE IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 232
    },
    {
     "pattern": "HIDE ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 233
    },
    {
     "pattern": "HIDE OBJECT (CARRIED HELD HAVE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 234
    },
    {
     "pattern": "HIDE OBJECT (CARRIED HELD HAVE) UNDER OBJECT",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 235
    }
   ]
  },
  "I": {
   "verb": "I",
   "synonyms": [],
   "productions": [
    {
     "pattern": "I",
     "objects": 0,
     "particles": [],
     "action": "V-INVENTORY",
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
     "file": "syntax.zil",
     "line": 247
    }
   ]
  },
  "KILL": {
   "verb": "KILL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "KILL OBJECT (FIND PERSON) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-KILL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 250
    },
    {
     "pattern": "KILL OBJECT (FIND PERSON) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-KILL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 251
    }
   ]
  },
  "KISS": {
   "verb": "KISS",
   "synonyms": [],
   "productions": [
    {
     "pattern": "KISS OBJECT (FIND PERSON) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-KISS",
     "preaction": null,
     "file": "syntax.zil",
     "line": 255
    }
   ]
  },
  "KNOCK": {
   "verb": "KNOCK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "KNOCK ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-KNOCK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 258
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
     "line": 259
    },
    {
     "pattern": "KNOCK DOWN OBJECT (FIND PERSON) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 260
    }
   ]
  },
  "KNOW": {
   "verb": "KNOW",
   "synonyms": [],
   "productions": [
    {
     "pattern": "KNOW ABOUT OBJECT (HELD CARRIED ;HAVE)",
     "objects": 1,
     "particles": [
      "ABOUT"
     ],
     "action": "V-WHAT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 262
    },
    {
     "pattern": "KNOW WHERE OBJECT (HELD CARRIED ;HAVE)",
     "objects": 1,
     "particles": [
      "WHERE"
     ],
     "action": "V-FIND",
     "preaction": "PRE-FIND",
     "file": "syntax.zil",
     "line": 263
    }
   ]
  },
  "LEAN": {
   "verb": "LEAN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LEAN",
     "objects": 0,
     "particles": [],
     "action": "V-STAND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 266
    },
    {
     "pattern": "LEAN OBJECT AGAINST OBJECT",
     "objects": 2,
     "particles": [
      "AGAINST"
     ],
     "action": "V-LEAN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 267
    },
    {
     "pattern": "LEAN OBJECT ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-LEAN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 268
    },
    {
     "pattern": "LEAN OBJECT UP OBJECT",
     "objects": 2,
     "particles": [
      "UP"
     ],
     "action": "V-LEAN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 269
    },
    {
     "pattern": "LEAN UP OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-STAND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 270
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
     "line": 272
    },
    {
     "pattern": "LEAVE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-DROP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 273
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
     "line": 281
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
     "line": 282
    }
   ]
  },
  "LOCK": {
   "verb": "LOCK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LOCK OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-LOCK",
     "preaction": "PRE-UNLOCK",
     "file": "syntax.zil",
     "line": 284
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
     "line": 289
    },
    {
     "pattern": "LOOK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-EXAMINE",
     "preaction": "PRE-EXAMINE",
     "file": "syntax.zil",
     "line": 290
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
     "line": 291
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
     "line": 292
    },
    {
     "pattern": "LOOK AT OBJECT (HELD CARRIED MANY) THROUGH OBJECT",
     "objects": 2,
     "particles": [
      "AT",
      "THROUGH"
     ],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "syntax.zil",
     "line": 294
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
     "line": 295
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
     "line": 296
    },
    {
     "pattern": "LOOK FOR OBJECT (HELD CARRIED ;HAVE)",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-FIND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 297
    },
    {
     "pattern": "LOOK IN OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": "PRE-LOOK-INSIDE",
     "file": "syntax.zil",
     "line": 298
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
     "line": 301
    },
    {
     "pattern": "LOOK OUT OBJECT",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-LOOK-OUTSIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 302
    },
    {
     "pattern": "LOOK OVER OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-EXAMINE",
     "preaction": "PRE-EXAMINE",
     "file": "syntax.zil",
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
     "file": "syntax.zil",
     "line": 305
    },
    {
     "pattern": "LOOK UP OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-LOOK-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 306
    },
    {
     "pattern": "LOOK THROUGH OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": "PRE-LOOK-INSIDE",
     "file": "syntax.zil",
     "line": 307
    }
   ]
  },
  "MAKE": {
   "verb": "MAKE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "MAKE OBJECT FROM OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-MAKE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 312
    },
    {
     "pattern": "MAKE OBJECT OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [],
     "action": "V-MAKE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 313
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
     "line": 316
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
     "line": 321
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
     "line": 323
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
     "line": 325
    }
   ]
  },
  "PEEK": {
   "verb": "PEEK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PEEK IN OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": "PRE-LOOK-INSIDE",
     "file": "syntax.zil",
     "line": 329
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
     "line": 332
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
     "line": 333
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
     "line": 334
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
     "line": 337
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
     "line": 351
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
     "line": 352
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
     "line": 355
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
     "line": 356
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
     "line": 357
    }
   ]
  },
  "PUT": {
   "verb": "PUT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PUT OBJECT (CARRIED HELD HAVE) AGAINST OBJECT",
     "objects": 2,
     "particles": [
      "AGAINST"
     ],
     "action": "V-LEAN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 360
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
     "line": 361
    },
    {
     "pattern": "PUT OBJECT (HELD MANY HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 362
    },
    {
     "pattern": "PUT OBJECT (CARRIED HELD HAVE) UNDER OBJECT",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 363
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
     "line": 364
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
     "line": 367
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
     "line": 370
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
     "line": 371
    },
    {
     "pattern": "RAISE OBJECT OFF OBJECT",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-TAKE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 372
    }
   ]
  },
  "RAPE": {
   "verb": "RAPE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "RAPE OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [],
     "action": "V-RAPE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 375
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
     "line": 378
    },
    {
     "pattern": "READ OBJECT (FIND READBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "syntax.zil",
     "line": 380
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
     "line": 382
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
     "line": 386
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
     "line": 389
    }
   ]
  },
  "REVIVE": {
   "verb": "REVIVE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "REVIVE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-REVIVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 391
    }
   ]
  },
  "RING": {
   "verb": "RING",
   "synonyms": [],
   "productions": [
    {
     "pattern": "RING OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-RING",
     "preaction": null,
     "file": "syntax.zil",
     "line": 394
    },
    {
     "pattern": "RING OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-RING",
     "preaction": null,
     "file": "syntax.zil",
     "line": 395
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
     "line": 400
    },
    {
     "pattern": "RUB OBJECT (TAKE HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-RUB-OVER",
     "preaction": "PRE-RUB-OVER",
     "file": "syntax.zil",
     "line": 401
    },
    {
     "pattern": "RUB OBJECT (TAKE HAVE) OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-RUB-OVER",
     "preaction": "PRE-RUB-OVER",
     "file": "syntax.zil",
     "line": 402
    },
    {
     "pattern": "RUB OBJECT WITH OBJECT (TAKE HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-RUB",
     "preaction": null,
     "file": "syntax.zil",
     "line": 403
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
     "line": 406
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
     "line": 409
    },
    {
     "pattern": "SAY ABOUT OBJECT (HELD CARRIED ;HAVE)",
     "objects": 1,
     "particles": [
      "ABOUT"
     ],
     "action": "V-TELL-ME-ABOUT",
     "preaction": "PRE-TELL-ME-ABOUT",
     "file": "syntax.zil",
     "line": 410
    },
    {
     "pattern": "SAY TO OBJECT (FIND PERSON) (IN-ROOM)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-TELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 412
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
     "line": 416
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
     "preaction": "PRE-SEARCH",
     "file": "syntax.zil",
     "line": 419
    },
    {
     "pattern": "SEARCH OBJECT FOR OBJECT (HELD CARRIED ;HAVE)",
     "objects": 2,
     "particles": [
      "FOR"
     ],
     "action": "V-SEARCH-OBJECT-FOR",
     "preaction": "PRE-SEARCH-OBJECT-FOR",
     "file": "syntax.zil",
     "line": 421
    },
    {
     "pattern": "SEARCH FOR OBJECT (HELD CARRIED ;HAVE)",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-FIND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 427
    },
    {
     "pattern": "SEARCH IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-SEARCH",
     "preaction": "PRE-SEARCH",
     "file": "syntax.zil",
     "line": 428
    },
    {
     "pattern": "SEARCH UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-SEARCH",
     "preaction": "PRE-SEARCH",
     "file": "syntax.zil",
     "line": 430
    }
   ]
  },
  "FIRE": {
   "verb": "FIRE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FIRE OBJECT (FIND PERSON) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-SHOOT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 437
    },
    {
     "pattern": "FIRE OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [],
     "action": "V-SHOOT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 440
    },
    {
     "pattern": "FIRE OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE) AT OBJECT (FIND PERSON) (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-SSHOOT",
     "preaction": "PRE-SSHOOT",
     "file": "syntax.zil",
     "line": 441
    }
   ]
  },
  "SHOW": {
   "verb": "SHOW",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SHOW OBJECT (FIND PERSON) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-SHOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 445
    },
    {
     "pattern": "SHOW OBJECT TO OBJECT (FIND PERSON)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-SSHOW",
     "preaction": "PRE-SSHOW",
     "file": "syntax.zil",
     "line": 446
    }
   ]
  },
  "SIT": {
   "verb": "SIT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SIT ON OBJECT (FIND FURNITURE ;SITBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-SIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 448
    },
    {
     "pattern": "SIT DOWN OBJECT (FIND FURNITURE ;SITBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-SIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 449
    },
    {
     "pattern": "SIT IN OBJECT (FIND FURNITURE ;SITBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-SIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 450
    }
   ]
  },
  "SLAP": {
   "verb": "SLAP",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SLAP OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [],
     "action": "V-SLAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 456
    },
    {
     "pattern": "SLAP OBJECT AROUND",
     "objects": 1,
     "particles": [
      "AROUND"
     ],
     "action": "V-SLAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 457
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
     "line": 462
    }
   ]
  },
  "SMOKE": {
   "verb": "SMOKE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SMOKE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SMOKE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 464
    }
   ]
  },
  "SPACE": {
   "verb": "SPACE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SPACE",
     "objects": 0,
     "particles": [],
     "action": "V-SPACE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 466
    }
   ]
  },
  "STRIKE": {
   "verb": "STRIKE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "STRIKE OBJECT (FIND PERSON) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-SLAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 471
    },
    {
     "pattern": "STRIKE OBJECT (FIND PERSON) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED ON-GROUND IN-ROOM HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 473
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
     "line": 478
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
     "line": 492
    },
    {
     "pattern": "TAKE OBJECT (IN-ROOM) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-TAKEOUT",
     "preaction": "PRE-TAKEOUT",
     "file": "syntax.zil",
     "line": 494
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
     "line": 496
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
     "line": 499
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
     "line": 502
    },
    {
     "pattern": "TAKE OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-SSHOW",
     "preaction": "PRE-SSHOW",
     "file": "syntax.zil",
     "line": 505
    },
    {
     "pattern": "TAKE IN OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 508
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
     "line": 509
    },
    {
     "pattern": "TAKE OUT OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-DISEMBARK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 510
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
     "line": 511
    }
   ]
  },
  "TELL": {
   "verb": "TELL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TELL OBJECT (FIND PERSON) (IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-TELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 515
    },
    {
     "pattern": "TELL OBJECT (FIND PERSON) ABOUT OBJECT (HELD CARRIED ;HAVE)",
     "objects": 2,
     "particles": [
      "ABOUT"
     ],
     "action": "V-TELL-ME",
     "preaction": "PRE-TELL-ME",
     "file": "syntax.zil",
     "line": 516
    }
   ]
  },
  "THANKS": {
   "verb": "THANKS",
   "synonyms": [],
   "productions": [
    {
     "pattern": "THANKS",
     "objects": 0,
     "particles": [],
     "action": "V-THANKS",
     "preaction": null,
     "file": "syntax.zil",
     "line": 520
    },
    {
     "pattern": "THANKS OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-THANKS",
     "preaction": null,
     "file": "syntax.zil",
     "line": 521
    }
   ]
  },
  "THROW": {
   "verb": "THROW",
   "synonyms": [],
   "productions": [
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) AT OBJECT (FIND PERSON) (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-THROW-AT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 524
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
     "line": 527
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
     "line": 529
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 531
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) THROUGH OBJECT (FIND PERSON) (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "THROUGH"
     ],
     "action": "V-THROW-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 533
    }
   ]
  },
  "TIE": {
   "verb": "TIE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TIE OBJECT (FIND PERSON) (ON-GROUND IN-ROOM) TO OBJECT (FIND FURNITURE) (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-TIE-TO",
     "preaction": "PRE-TIE-TO",
     "file": "syntax.zil",
     "line": 539
    },
    {
     "pattern": "TIE UP OBJECT (FIND PERSON) (ON-GROUND IN-ROOM) TO OBJECT (FIND FURNITURE) (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "UP",
      "TO"
     ],
     "action": "V-TIE-TO",
     "preaction": "PRE-TIE-TO",
     "file": "syntax.zil",
     "line": 542
    },
    {
     "pattern": "TIE OBJECT (FIND PERSON) (ON-GROUND IN-ROOM) WITH OBJECT (ON-GROUND IN-ROOM HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TIE-WITH",
     "preaction": "PRE-TIE-WITH",
     "file": "syntax.zil",
     "line": 545
    },
    {
     "pattern": "TIE UP OBJECT (FIND PERSON) (ON-GROUND IN-ROOM) WITH OBJECT (ON-GROUND IN-ROOM HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-TIE-WITH",
     "preaction": "PRE-TIE-WITH",
     "file": "syntax.zil",
     "line": 548
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
     "line": 553
    }
   ]
  },
  "TURN": {
   "verb": "TURN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TURN OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-TURN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 556
    },
    {
     "pattern": "TURN DOWN OBJECT",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-TURN-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 558
    },
    {
     "pattern": "TURN IN OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-TURN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 559
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
     "line": 561
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
     "line": 563
    },
    {
     "pattern": "TURN TO OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-TURN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 565
    },
    {
     "pattern": "TURN UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-TURN-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 567
    }
   ]
  },
  "UNLOCK": {
   "verb": "UNLOCK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "UNLOCK OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-UNLOCK",
     "preaction": "PRE-UNLOCK",
     "file": "syntax.zil",
     "line": 569
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
     "line": 573
    }
   ]
  },
  "UNSPACE": {
   "verb": "UNSPACE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "UNSPACE",
     "objects": 0,
     "particles": [],
     "action": "V-UNSPACE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 575
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
     "line": 578
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
     "line": 580
    }
   ]
  },
  "USE": {
   "verb": "USE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "USE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-USE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 584
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
     "line": 586
    }
   ]
  },
  "RELEASE": {
   "verb": "RELEASE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "RELEASE",
     "objects": 0,
     "particles": [],
     "action": "V-VERSION",
     "preaction": null,
     "file": "syntax.zil",
     "line": 589
    },
    {
     "pattern": "RELEASE OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [],
     "action": "V-UNTIE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 590
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
     "line": 593
    },
    {
     "pattern": "WAIT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WAIT-FOR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 594
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
     "line": 595
    },
    {
     "pattern": "WAIT TILL OBJECT",
     "objects": 1,
     "particles": [
      "TILL"
     ],
     "action": "V-WAIT-UNTIL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 596
    },
    {
     "pattern": "WAIT UNTIL OBJECT",
     "objects": 1,
     "particles": [
      "UNTIL"
     ],
     "action": "V-WAIT-UNTIL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 597
    }
   ]
  },
  "WAKE": {
   "verb": "WAKE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WAKE OBJECT (FIND PERSON) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-ALARM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 600
    },
    {
     "pattern": "WAKE UP OBJECT (FIND PERSON) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-ALARM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 601
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
     "line": 604
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
     "line": 605
    },
    {
     "pattern": "WALK BEHIND OBJECT",
     "objects": 1,
     "particles": [
      "BEHIND"
     ],
     "action": "V-HIDE-BEHIND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 606
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
     "line": 607
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
     "line": 608
    },
    {
     "pattern": "WALK OBJECT OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-RUN-OVER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 609
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
     "line": 610
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
     "line": 611
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
     "line": 612
    },
    {
     "pattern": "WALK WITH OBJECT",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 613
    }
   ]
  },
  "WHAT": {
   "verb": "WHAT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WHAT OBJECT (HELD CARRIED ;HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-WHAT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 622
    },
    {
     "pattern": "WHAT ABOUT OBJECT (HELD CARRIED ;HAVE)",
     "objects": 1,
     "particles": [
      "ABOUT"
     ],
     "action": "V-WHAT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 623
    },
    {
     "pattern": "WHAT IN OBJECT (HELD CARRIED IN-ROOM ON-GROUND MANY)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": "PRE-LOOK-INSIDE",
     "file": "syntax.zil",
     "line": 624
    },
    {
     "pattern": "WHAT ON OBJECT (HELD CARRIED IN-ROOM ON-GROUND MANY)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": "PRE-LOOK-INSIDE",
     "file": "syntax.zil",
     "line": 626
    }
   ]
  },
  "WHEN": {
   "verb": "WHEN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WHEN",
     "objects": 0,
     "particles": [],
     "action": "V-THANKS",
     "preaction": null,
     "file": "syntax.zil",
     "line": 629
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
     "action": "V-YN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 639
    }
   ]
  }
 },
 "vocab": {
  "$VERIFY": {
   "word": "$VERIFY",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "$DBG": {
   "word": "$DBG",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "$TANDY": {
   "word": "$TANDY",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "$WHR": {
   "word": "$WHR",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "ACCUSE": {
   "word": "ACCUSE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "ANALYZE": {
   "word": "ANALYZE",
   "roles": [
    {
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
     "of": "ANALYZE"
    },
    {
     "kind": "particle",
     "of": "ARREST"
    },
    {
     "kind": "particle",
     "of": "ASK"
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
     "of": "WAIT"
    }
   ]
  },
  "OFF": {
   "word": "OFF",
   "roles": [
    {
     "kind": "particle",
     "of": "ANALYZE"
    },
    {
     "kind": "particle",
     "of": "BRUSH"
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
     "of": "TURN"
    }
   ]
  },
  "ON": {
   "word": "ON",
   "roles": [
    {
     "kind": "particle",
     "of": "ANALYZE"
    },
    {
     "kind": "particle",
     "of": "CALL"
    },
    {
     "kind": "particle",
     "of": "CLIMB"
    },
    {
     "kind": "particle",
     "of": "CURSE"
    },
    {
     "kind": "particle",
     "of": "DIAL"
    },
    {
     "kind": "particle",
     "of": "DROP"
    },
    {
     "kind": "particle",
     "of": "HIDE"
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
     "of": "PUSH"
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
     "of": "SIT"
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
     "of": "WHAT"
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
     "of": "CALL"
    },
    {
     "kind": "particle",
     "of": "MATCH"
    },
    {
     "kind": "particle",
     "of": "FOLLOW"
    },
    {
     "kind": "particle",
     "of": "GIVE"
    },
    {
     "kind": "particle",
     "of": "HANDCUFF"
    },
    {
     "kind": "particle",
     "of": "LISTEN"
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
     "of": "TAKE"
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
  "ARREST": {
   "word": "ARREST",
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
     "of": "ASK"
    },
    {
     "kind": "particle",
     "of": "KNOW"
    },
    {
     "kind": "particle",
     "of": "SAY"
    },
    {
     "kind": "particle",
     "of": "TELL"
    },
    {
     "kind": "particle",
     "of": "WHAT"
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
     "of": "BRUSH"
    },
    {
     "kind": "particle",
     "of": "MATCH"
    },
    {
     "kind": "particle",
     "of": "CONFRONT"
    },
    {
     "kind": "particle",
     "of": "DESTROY"
    },
    {
     "kind": "particle",
     "of": "KILL"
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
     "of": "RING"
    },
    {
     "kind": "particle",
     "of": "RUB"
    },
    {
     "kind": "particle",
     "of": "FIRE"
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
     "of": "WALK"
    },
    {
     "kind": "word",
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
  "$CALL": {
   "word": "$CALL",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "CALL": {
   "word": "CALL",
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
     "of": "GLOBAL-CALL"
    }
   ]
  },
  "UP": {
   "word": "UP",
   "roles": [
    {
     "kind": "particle",
     "of": "CALL"
    },
    {
     "kind": "particle",
     "of": "CLIMB"
    },
    {
     "kind": "particle",
     "of": "DIAL"
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
     "of": "OPEN"
    },
    {
     "kind": "particle",
     "of": "PICK"
    },
    {
     "kind": "particle",
     "of": "RAISE"
    },
    {
     "kind": "particle",
     "of": "SEARCH"
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
     "of": "TURN"
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
  "DOWN": {
   "word": "DOWN",
   "roles": [
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
     "of": "SIT"
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
     "of": "DROP"
    },
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
     "of": "PEEK"
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
     "of": "SIT"
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
     "of": "WHAT"
    },
    {
     "kind": "direction",
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
  "MATCH": {
   "word": "MATCH",
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
     "of": "MATCHBOOK"
    }
   ]
  },
  "CONFRONT": {
   "word": "CONFRONT",
   "roles": [
    {
     "kind": "verb",
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
  "DIAL": {
   "word": "DIAL",
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
    },
    {
     "kind": "noun",
     "of": "DRINK"
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
  "FINGERPRINT": {
   "word": "FINGERPRINT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "GLOBAL-FINGERPRINTS"
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
  "GOODBYE": {
   "word": "GOODBYE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "HANDCUFF": {
   "word": "HANDCUFF",
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
     "of": "HANDCUFFS"
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
     "kind": "noun",
     "of": "HINT"
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
     "of": "WALK"
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
     "kind": "word",
     "of": null
    }
   ]
  },
  "I": {
   "word": "I",
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
     "of": "PLAYER"
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
     "of": "LISTEN"
    },
    {
     "kind": "particle",
     "of": "LOOK"
    },
    {
     "kind": "particle",
     "of": "FIRE"
    },
    {
     "kind": "particle",
     "of": "THROW"
    }
   ]
  },
  "KNOW": {
   "word": "KNOW",
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
     "kind": "particle",
     "of": "KNOW"
    },
    {
     "kind": "word-synonym",
     "of": "FIND"
    }
   ]
  },
  "LEAN": {
   "word": "LEAN",
   "roles": [
    {
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
     "of": "LEAN"
    },
    {
     "kind": "particle",
     "of": "PUT"
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
     "of": "OFFICE-BACK-DOOR"
    },
    {
     "kind": "noun",
     "of": "MONICA-BACK-DOOR"
    },
    {
     "kind": "noun",
     "of": "LINDER-BACK-DOOR"
    },
    {
     "kind": "noun",
     "of": "DINING-DOOR"
    },
    {
     "kind": "noun",
     "of": "FRONT-DOOR"
    },
    {
     "kind": "noun",
     "of": "CLOCK"
    },
    {
     "kind": "noun",
     "of": "GARAGE-DOOR"
    },
    {
     "kind": "noun",
     "of": "WORKSHOP-DOOR"
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
     "of": "SLAP"
    },
    {
     "kind": "particle",
     "of": "WALK"
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
     "kind": "direction",
     "of": null
    }
   ]
  },
  "OVER": {
   "word": "OVER",
   "roles": [
    {
     "kind": "particle",
     "of": "LOOK"
    },
    {
     "kind": "particle",
     "of": "RUB"
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
  "MAKE": {
   "word": "MAKE",
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
     "of": "MAKE"
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
  "MOVE": {
   "word": "MOVE",
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
  "PEEK": {
   "word": "PEEK",
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
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "REVIVE": {
   "word": "REVIVE",
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
  "SAVE": {
   "word": "SAVE",
   "roles": [
    {
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
  "SCRIPT": {
   "word": "SCRIPT",
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
    },
    {
     "kind": "word",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-WARRANT"
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
    },
    {
     "kind": "noun",
     "of": "FIRE"
    }
   ]
  },
  "SHOW": {
   "word": "SHOW",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "GLOBAL-FILM"
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
  "SLAP": {
   "word": "SLAP",
   "roles": [
    {
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
  "SMOKE": {
   "word": "SMOKE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "CIGARETTE"
    }
   ]
  },
  "SPACE": {
   "word": "SPACE",
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
  "THANKS": {
   "word": "THANKS",
   "roles": [
    {
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
  "UNSCRIPT": {
   "word": "UNSCRIPT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "UNSPACE": {
   "word": "UNSPACE",
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
  "USE": {
   "word": "USE",
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
  "RELEASE": {
   "word": "RELEASE",
   "roles": [
    {
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
  "TILL": {
   "word": "TILL",
   "roles": [
    {
     "kind": "particle",
     "of": "WAIT"
    }
   ]
  },
  "UNTIL": {
   "word": "UNTIL",
   "roles": [
    {
     "kind": "particle",
     "of": "WAIT"
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
  "WHEN": {
   "word": "WHEN",
   "roles": [
    {
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
  "ANALYSE": {
   "word": "ANALYSE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ANALYZE"
    }
   ]
  },
  "CHECK": {
   "word": "CHECK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ANALYZE"
    }
   ]
  },
  "TEST": {
   "word": "TEST",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ANALYZE"
    }
   ]
  },
  "DUST": {
   "word": "DUST",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ANALYZE"
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
  "QUESTION": {
   "word": "QUESTION",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ASK"
    }
   ]
  },
  "INQUIRE": {
   "word": "INQUIRE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ASK"
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
  "CLEAN": {
   "word": "CLEAN",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "BRUSH"
    }
   ]
  },
  "WIPE": {
   "word": "WIPE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "BRUSH"
    }
   ]
  },
  "PHONE": {
   "word": "PHONE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CALL"
    },
    {
     "kind": "noun",
     "of": "TELEPHONE"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-CALL"
    }
   ]
  },
  "HATCH": {
   "word": "HATCH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CLIMB"
    }
   ]
  },
  "COMPARE": {
   "word": "COMPARE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "MATCH"
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
  "PISS": {
   "word": "PISS",
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
  "DESCRIBE": {
   "word": "DESCRIBE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EXAMINE"
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
  "DOUSE": {
   "word": "DOUSE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EXTINGUISH"
    }
   ]
  },
  "THERE": {
   "word": "THERE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "FIND"
    }
   ]
  },
  "SEEN": {
   "word": "SEEN",
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
  "TRACE": {
   "word": "TRACE",
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
     "kind": "adjective",
     "of": "HANDCUFFS"
    },
    {
     "kind": "adjective",
     "of": "THREAT-NOTE"
    },
    {
     "kind": "adjective",
     "of": "INSIDE-GUN"
    },
    {
     "kind": "adjective",
     "of": "OUTSIDE-GUN"
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
  "CUFF": {
   "word": "CUFF",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "HANDCUFF"
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
  "CROUCH": {
   "word": "CROUCH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "HIDE"
    }
   ]
  },
  "INVENTORY": {
   "word": "INVENTORY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "I"
    }
   ]
  },
  "BITE": {
   "word": "BITE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "KICK"
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
  "RAP": {
   "word": "RAP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "KNOCK"
    }
   ]
  },
  "STAND": {
   "word": "STAND",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "LEAN"
    }
   ]
  },
  "PROP": {
   "word": "PROP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "LEAN"
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
  "TUG": {
   "word": "TUG",
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
    },
    {
     "kind": "noun",
     "of": "MONICA-TABLE-STUFF"
    },
    {
     "kind": "noun",
     "of": "LINDER-ROOM-STUFF"
    },
    {
     "kind": "noun",
     "of": "OFFICE-DESK-STUFF"
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
  "Q": {
   "word": "Q",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "QUIT"
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
  "ASSAULT": {
   "word": "ASSAULT",
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
  "PERUSE": {
   "word": "PERUSE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "READ"
    }
   ]
  },
  "CONTINUE": {
   "word": "CONTINUE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "RESTORE"
    }
   ]
  },
  "RESUME": {
   "word": "RESUME",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "RESTORE"
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
  "SHADE": {
   "word": "SHADE",
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
  "SUSPEND": {
   "word": "SUSPEND",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SAVE"
    }
   ]
  },
  "PAUSE": {
   "word": "PAUSE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SAVE"
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
  "EXPLAIN": {
   "word": "EXPLAIN",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SAY"
    }
   ]
  },
  "DIG": {
   "word": "DIG",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SEARCH"
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
  "BLAST": {
   "word": "BLAST",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "FIRE"
    }
   ]
  },
  "HURT": {
   "word": "HURT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SLAP"
    }
   ]
  },
  "INJURE": {
   "word": "INJURE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SLAP"
    }
   ]
  },
  "HIT": {
   "word": "HIT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SLAP"
    }
   ]
  },
  "PUNCH": {
   "word": "PUNCH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SLAP"
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
  "SUPERBRIEF": {
   "word": "SUPERBRIEF",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SUPER"
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
  "LEAD": {
   "word": "LEAD",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TAKE"
    }
   ]
  },
  "STEAL": {
   "word": "STEAL",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TAKE"
    }
   ]
  },
  "THANK": {
   "word": "THANK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "THANKS"
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
  "T": {
   "word": "T",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TIME"
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
  "UNCUFF": {
   "word": "UNCUFF",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "UNTIE"
    }
   ]
  },
  "REVISION": {
   "word": "REVISION",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "RELEASE"
    }
   ]
  },
  "VERSION": {
   "word": "VERSION",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "RELEASE"
    }
   ]
  },
  "EDITION": {
   "word": "EDITION",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "RELEASE"
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
  "STAY": {
   "word": "STAY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WAIT"
    }
   ]
  },
  "STOP": {
   "word": "STOP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WAIT"
    }
   ]
  },
  "MEDITATE": {
   "word": "MEDITATE",
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
  "WHATS": {
   "word": "WHATS",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WHAT"
    }
   ]
  },
  "WHAT'S": {
   "word": "WHAT'S",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WHAT"
    }
   ]
  },
  "WHO": {
   "word": "WHO",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WHAT"
    }
   ]
  },
  "DID": {
   "word": "DID",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WHEN"
    }
   ]
  },
  "WHY": {
   "word": "WHY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WHEN"
    }
   ]
  },
  "HOW": {
   "word": "HOW",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WHEN"
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
  "NO": {
   "word": "NO",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "YES"
    }
   ]
  },
  "MAYBE": {
   "word": "MAYBE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "YES"
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
  "NW": {
   "word": "NW",
   "roles": [
    {
     "kind": "direction",
     "of": null
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
  "SW": {
   "word": "SW",
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
  "!": {
   "word": "!",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "?": {
   "word": "?",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "AD": {
   "word": "AD",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "ADELINE": {
   "word": "ADELINE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "CH": {
   "word": "CH",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "CHANDLER": {
   "word": "CHANDLER",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "MINUTE": {
   "word": "MINUTE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "CARRYING": {
   "word": "CARRYING",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "CAREFULLY": {
   "word": "CAREFULLY",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "CLOSELY": {
   "word": "CLOSELY",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "QUIETLY": {
   "word": "QUIETLY",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "SLOWLY": {
   "word": "SLOWLY",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "QUICKLY": {
   "word": "QUICKLY",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "BRIEFLY": {
   "word": "BRIEFLY",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "DO": {
   "word": "DO",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "YOU": {
   "word": "YOU",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "HAVE": {
   "word": "HAVE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "WAS": {
   "word": "WAS",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "WERE": {
   "word": "WERE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "YOUR": {
   "word": "YOUR",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "LINDER"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-LINDER"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-MRS-LINDER"
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
  "OK": {
   "word": "OK",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "OKEY": {
   "word": "OKEY",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "OKEH": {
   "word": "OKEH",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "MIDNIGHT": {
   "word": "MIDNIGHT",
   "roles": [
    {
     "kind": "noun",
     "of": "MIDNIGHT"
    }
   ]
  },
  "TWO": {
   "word": "TWO",
   "roles": [
    {
     "kind": "noun",
     "of": "SMALL-INTEGER"
    }
   ]
  },
  "THREE": {
   "word": "THREE",
   "roles": [
    {
     "kind": "noun",
     "of": "SMALL-INTEGER"
    }
   ]
  },
  "FOUR": {
   "word": "FOUR",
   "roles": [
    {
     "kind": "noun",
     "of": "SMALL-INTEGER"
    },
    {
     "kind": "adjective",
     "of": "FOUR-POSTER"
    }
   ]
  },
  "FIVE": {
   "word": "FIVE",
   "roles": [
    {
     "kind": "noun",
     "of": "SMALL-INTEGER"
    }
   ]
  },
  "TEN": {
   "word": "TEN",
   "roles": [
    {
     "kind": "noun",
     "of": "MEDIUM-INTEGER"
    }
   ]
  },
  "FIFTEEN": {
   "word": "FIFTEEN",
   "roles": [
    {
     "kind": "noun",
     "of": "MEDIUM-INTEGER"
    }
   ]
  },
  "TWENTY": {
   "word": "TWENTY",
   "roles": [
    {
     "kind": "noun",
     "of": "MEDIUM-INTEGER"
    }
   ]
  },
  "THIRTY": {
   "word": "THIRTY",
   "roles": [
    {
     "kind": "noun",
     "of": "MEDIUM-INTEGER"
    }
   ]
  },
  "HE": {
   "word": "HE",
   "roles": [
    {
     "kind": "noun",
     "of": "HIM-HER"
    }
   ]
  },
  "SHE": {
   "word": "SHE",
   "roles": [
    {
     "kind": "noun",
     "of": "HIM-HER"
    }
   ]
  },
  "HIM": {
   "word": "HIM",
   "roles": [
    {
     "kind": "noun",
     "of": "HIM-HER"
    }
   ]
  },
  "HER": {
   "word": "HER",
   "roles": [
    {
     "kind": "noun",
     "of": "HIM-HER"
    },
    {
     "kind": "adjective",
     "of": "LINDER"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-LINDER"
    },
    {
     "kind": "adjective",
     "of": "MONICA-SHOES"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-MRS-LINDER"
    },
    {
     "kind": "adjective",
     "of": "MONICA-CAR"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-SUICIDE"
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
  "HIMSELF": {
   "word": "HIMSELF",
   "roles": [
    {
     "kind": "noun",
     "of": "YOU"
    }
   ]
  },
  "HERSELF": {
   "word": "HERSELF",
   "roles": [
    {
     "kind": "noun",
     "of": "YOU"
    }
   ]
  },
  "ME": {
   "word": "ME",
   "roles": [
    {
     "kind": "noun",
     "of": "PLAYER"
    }
   ]
  },
  "MYSELF": {
   "word": "MYSELF",
   "roles": [
    {
     "kind": "noun",
     "of": "PLAYER"
    }
   ]
  },
  "DETECTIVE": {
   "word": "DETECTIVE",
   "roles": [
    {
     "kind": "noun",
     "of": "PLAYER"
    }
   ]
  },
  "PHONG": {
   "word": "PHONG",
   "roles": [
    {
     "kind": "noun",
     "of": "PHONG"
    },
    {
     "kind": "adjective",
     "of": "PHONG-SHOES"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-PHONG"
    }
   ]
  },
  "MAN": {
   "word": "MAN",
   "roles": [
    {
     "kind": "noun",
     "of": "PHONG"
    },
    {
     "kind": "noun",
     "of": "LINDER"
    },
    {
     "kind": "noun",
     "of": "STILES"
    }
   ]
  },
  "MR": {
   "word": "MR",
   "roles": [
    {
     "kind": "adjective",
     "of": "PHONG"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-PHONG"
    },
    {
     "kind": "adjective",
     "of": "LINDER"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-LINDER"
    },
    {
     "kind": "adjective",
     "of": "STILES"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-STILES"
    },
    {
     "kind": "adjective",
     "of": "CORPSE"
    }
   ]
  },
  "MISTER": {
   "word": "MISTER",
   "roles": [
    {
     "kind": "adjective",
     "of": "PHONG"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-PHONG"
    },
    {
     "kind": "adjective",
     "of": "LINDER"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-LINDER"
    }
   ]
  },
  "HUI": {
   "word": "HUI",
   "roles": [
    {
     "kind": "adjective",
     "of": "PHONG"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-PHONG"
    }
   ]
  },
  "ASIAN": {
   "word": "ASIAN",
   "roles": [
    {
     "kind": "adjective",
     "of": "PHONG"
    }
   ]
  },
  "ORIENTAL": {
   "word": "ORIENTAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "PHONG"
    }
   ]
  },
  "PAIR": {
   "word": "PAIR",
   "roles": [
    {
     "kind": "noun",
     "of": "PHONG-SHOES"
    },
    {
     "kind": "noun",
     "of": "LINDER-SHOES"
    },
    {
     "kind": "noun",
     "of": "STILES-SHOES"
    },
    {
     "kind": "noun",
     "of": "MONICA-SHOES"
    },
    {
     "kind": "noun",
     "of": "CLOCK-WIRES"
    },
    {
     "kind": "noun",
     "of": "HANDCUFFS"
    },
    {
     "kind": "noun",
     "of": "MUDDY-SHOES"
    }
   ]
  },
  "SHOE": {
   "word": "SHOE",
   "roles": [
    {
     "kind": "noun",
     "of": "PHONG-SHOES"
    },
    {
     "kind": "noun",
     "of": "LINDER-SHOES"
    },
    {
     "kind": "noun",
     "of": "STILES-SHOES"
    },
    {
     "kind": "noun",
     "of": "MONICA-SHOES"
    },
    {
     "kind": "adjective",
     "of": "SHOE-PLATFORM"
    },
    {
     "kind": "noun",
     "of": "OTHER-SHOES"
    }
   ]
  },
  "SHOES": {
   "word": "SHOES",
   "roles": [
    {
     "kind": "noun",
     "of": "PHONG-SHOES"
    },
    {
     "kind": "noun",
     "of": "LINDER-SHOES"
    },
    {
     "kind": "noun",
     "of": "STILES-SHOES"
    },
    {
     "kind": "noun",
     "of": "MONICA-SHOES"
    },
    {
     "kind": "noun",
     "of": "OTHER-SHOES"
    }
   ]
  },
  "PHONGS": {
   "word": "PHONGS",
   "roles": [
    {
     "kind": "adjective",
     "of": "PHONG-SHOES"
    }
   ]
  },
  "HIS": {
   "word": "HIS",
   "roles": [
    {
     "kind": "adjective",
     "of": "PHONG-SHOES"
    },
    {
     "kind": "adjective",
     "of": "LINDER-SHOES"
    },
    {
     "kind": "adjective",
     "of": "STILES-SHOES"
    },
    {
     "kind": "adjective",
     "of": "LINDER-WINDOW"
    },
    {
     "kind": "adjective",
     "of": "BUTLER-DOOR"
    },
    {
     "kind": "adjective",
     "of": "BUTLER-WINDOW"
    },
    {
     "kind": "adjective",
     "of": "OFFICE-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "LINDER-CAR"
    },
    {
     "kind": "adjective",
     "of": "WILL"
    }
   ]
  },
  "LINDER": {
   "word": "LINDER",
   "roles": [
    {
     "kind": "noun",
     "of": "LINDER"
    },
    {
     "kind": "adjective",
     "of": "LINDER-SHOES"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-LINDER"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-MRS-LINDER"
    },
    {
     "kind": "adjective",
     "of": "LINDER-WINDOW"
    },
    {
     "kind": "adjective",
     "of": "LINDER-CAR"
    },
    {
     "kind": "adjective",
     "of": "HOUSE"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-SUICIDE"
    },
    {
     "kind": "adjective",
     "of": "WILL"
    },
    {
     "kind": "noun",
     "of": "CORPSE"
    }
   ]
  },
  "FATHER": {
   "word": "FATHER",
   "roles": [
    {
     "kind": "noun",
     "of": "LINDER"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-LINDER"
    }
   ]
  },
  "DAD": {
   "word": "DAD",
   "roles": [
    {
     "kind": "noun",
     "of": "LINDER"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-LINDER"
    }
   ]
  },
  "FREEMAN": {
   "word": "FREEMAN",
   "roles": [
    {
     "kind": "adjective",
     "of": "LINDER"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-LINDER"
    }
   ]
  },
  "TALL": {
   "word": "TALL",
   "roles": [
    {
     "kind": "adjective",
     "of": "LINDER"
    },
    {
     "kind": "adjective",
     "of": "CLOCK"
    }
   ]
  },
  "STILES": {
   "word": "STILES",
   "roles": [
    {
     "kind": "noun",
     "of": "STILES"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-STILES"
    },
    {
     "kind": "adjective",
     "of": "STILES-SHOES"
    },
    {
     "kind": "adjective",
     "of": "THREAT-NOTE"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-AFFAIR"
    }
   ]
  },
  "VISITOR": {
   "word": "VISITOR",
   "roles": [
    {
     "kind": "noun",
     "of": "STILES"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-STILES"
    }
   ]
  },
  "STRANGER": {
   "word": "STRANGER",
   "roles": [
    {
     "kind": "noun",
     "of": "STILES"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-STILES"
    }
   ]
  },
  "RALPH": {
   "word": "RALPH",
   "roles": [
    {
     "kind": "adjective",
     "of": "STILES"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-STILES"
    }
   ]
  },
  "WRITER": {
   "word": "WRITER",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-STILES"
    }
   ]
  },
  "MONICA": {
   "word": "MONICA",
   "roles": [
    {
     "kind": "noun",
     "of": "MONICA"
    },
    {
     "kind": "adjective",
     "of": "MONICA-SHOES"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-MONICA"
    },
    {
     "kind": "adjective",
     "of": "MONICA-CAR"
    }
   ]
  },
  "WOMAN": {
   "word": "WOMAN",
   "roles": [
    {
     "kind": "noun",
     "of": "MONICA"
    }
   ]
  },
  "YOUNG": {
   "word": "YOUNG",
   "roles": [
    {
     "kind": "adjective",
     "of": "MONICA"
    }
   ]
  },
  "CAT": {
   "word": "CAT",
   "roles": [
    {
     "kind": "noun",
     "of": "CAT"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-CAT"
    }
   ]
  },
  "FELINE": {
   "word": "FELINE",
   "roles": [
    {
     "kind": "noun",
     "of": "CAT"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-CAT"
    }
   ]
  },
  "BEAST": {
   "word": "BEAST",
   "roles": [
    {
     "kind": "noun",
     "of": "CAT"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-CAT"
    }
   ]
  },
  "ASTA": {
   "word": "ASTA",
   "roles": [
    {
     "kind": "noun",
     "of": "CAT"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-CAT"
    }
   ]
  },
  "TERRY": {
   "word": "TERRY",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-TERRY"
    }
   ]
  },
  "MOTHER": {
   "word": "MOTHER",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-MRS-LINDER"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-SUICIDE"
    }
   ]
  },
  "WIFE": {
   "word": "WIFE",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-MRS-LINDER"
    }
   ]
  },
  "VIRGINIA": {
   "word": "VIRGINIA",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-MRS-LINDER"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-SUICIDE"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-AFFAIR"
    }
   ]
  },
  "MRS": {
   "word": "MRS",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-MRS-LINDER"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-SUICIDE"
    }
   ]
  },
  "LATE": {
   "word": "LATE",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-MRS-LINDER"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-SUICIDE"
    }
   ]
  },
  "DUFFY": {
   "word": "DUFFY",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-DUFFY"
    }
   ]
  },
  "POLICE": {
   "word": "POLICE",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-DUFFY"
    }
   ]
  },
  "SERGEANT": {
   "word": "SERGEANT",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-DUFFY"
    }
   ]
  },
  "SGT": {
   "word": "SGT",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-DUFFY"
    }
   ]
  },
  "HINT": {
   "word": "HINT",
   "roles": [
    {
     "kind": "noun",
     "of": "HINT"
    }
   ]
  },
  "ROOM": {
   "word": "ROOM",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-ROOM"
    },
    {
     "kind": "adjective",
     "of": "DINING-DOOR"
    },
    {
     "kind": "adjective",
     "of": "BUTLER-WINDOW"
    }
   ]
  },
  "WALL": {
   "word": "WALL",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-ROOM"
    }
   ]
  },
  "WALLS": {
   "word": "WALLS",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-ROOM"
    }
   ]
  },
  "WINDOW": {
   "word": "WINDOW",
   "roles": [
    {
     "kind": "noun",
     "of": "WINDOW"
    },
    {
     "kind": "noun",
     "of": "OFFICE-WINDOW"
    },
    {
     "kind": "noun",
     "of": "BATH-WINDOW"
    },
    {
     "kind": "noun",
     "of": "LINDER-WINDOW"
    },
    {
     "kind": "noun",
     "of": "KITCHEN-WINDOW"
    },
    {
     "kind": "noun",
     "of": "BUTLER-WINDOW"
    },
    {
     "kind": "noun",
     "of": "CAR-WINDOW"
    }
   ]
  },
  "PANE": {
   "word": "PANE",
   "roles": [
    {
     "kind": "noun",
     "of": "WINDOW"
    },
    {
     "kind": "noun",
     "of": "OFFICE-WINDOW"
    },
    {
     "kind": "noun",
     "of": "BATH-WINDOW"
    },
    {
     "kind": "noun",
     "of": "LINDER-WINDOW"
    },
    {
     "kind": "noun",
     "of": "KITCHEN-WINDOW"
    },
    {
     "kind": "noun",
     "of": "BUTLER-WINDOW"
    }
   ]
  },
  "PANES": {
   "word": "PANES",
   "roles": [
    {
     "kind": "noun",
     "of": "WINDOW"
    },
    {
     "kind": "noun",
     "of": "OFFICE-WINDOW"
    },
    {
     "kind": "noun",
     "of": "BATH-WINDOW"
    },
    {
     "kind": "noun",
     "of": "LINDER-WINDOW"
    },
    {
     "kind": "noun",
     "of": "KITCHEN-WINDOW"
    },
    {
     "kind": "noun",
     "of": "BUTLER-WINDOW"
    }
   ]
  },
  "FRAME": {
   "word": "FRAME",
   "roles": [
    {
     "kind": "noun",
     "of": "WINDOW"
    },
    {
     "kind": "noun",
     "of": "OFFICE-WINDOW"
    },
    {
     "kind": "noun",
     "of": "BATH-WINDOW"
    },
    {
     "kind": "noun",
     "of": "LINDER-WINDOW"
    },
    {
     "kind": "noun",
     "of": "KITCHEN-WINDOW"
    },
    {
     "kind": "noun",
     "of": "BUTLER-WINDOW"
    }
   ]
  },
  "SINK": {
   "word": "SINK",
   "roles": [
    {
     "kind": "noun",
     "of": "SINK"
    }
   ]
  },
  "BASIN": {
   "word": "BASIN",
   "roles": [
    {
     "kind": "noun",
     "of": "SINK"
    }
   ]
  },
  "FAUCET": {
   "word": "FAUCET",
   "roles": [
    {
     "kind": "noun",
     "of": "SINK"
    }
   ]
  },
  "SPIGOT": {
   "word": "SPIGOT",
   "roles": [
    {
     "kind": "noun",
     "of": "SINK"
    }
   ]
  },
  "TOILET": {
   "word": "TOILET",
   "roles": [
    {
     "kind": "noun",
     "of": "TOILET"
    },
    {
     "kind": "adjective",
     "of": "TOILET-DOOR"
    }
   ]
  },
  "$GNRC": {
   "word": "$GNRC",
   "roles": [
    {
     "kind": "noun",
     "of": "GENERIC-BATHROOM-DOOR"
    },
    {
     "kind": "noun",
     "of": "GENERIC-BEDROOM"
    },
    {
     "kind": "noun",
     "of": "GENERIC-BEDROOM-DOOR"
    },
    {
     "kind": "noun",
     "of": "GENERIC-BACK-DOOR"
    },
    {
     "kind": "noun",
     "of": "GENERIC-BATHROOM"
    },
    {
     "kind": "noun",
     "of": "GENERIC-CAST"
    },
    {
     "kind": "noun",
     "of": "GENERIC-CHAIR"
    },
    {
     "kind": "noun",
     "of": "GENERIC-CAR"
    },
    {
     "kind": "noun",
     "of": "GENERIC-GREEN-WIRE"
    },
    {
     "kind": "noun",
     "of": "GENERIC-WIRE"
    },
    {
     "kind": "noun",
     "of": "GENERIC-GUN"
    },
    {
     "kind": "noun",
     "of": "GENERIC-KEY"
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
  "GARDEN": {
   "word": "GARDEN",
   "roles": [
    {
     "kind": "noun",
     "of": "KITCHEN-GARDEN"
    },
    {
     "kind": "adjective",
     "of": "MUDDY-SHOES"
    }
   ]
  },
  "VEGETABLE": {
   "word": "VEGETABLE",
   "roles": [
    {
     "kind": "noun",
     "of": "KITCHEN-GARDEN"
    }
   ]
  },
  "HERB": {
   "word": "HERB",
   "roles": [
    {
     "kind": "noun",
     "of": "KITCHEN-GARDEN"
    }
   ]
  },
  "HERBS": {
   "word": "HERBS",
   "roles": [
    {
     "kind": "noun",
     "of": "KITCHEN-GARDEN"
    }
   ]
  },
  "KITCHEN": {
   "word": "KITCHEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "KITCHEN-GARDEN"
    },
    {
     "kind": "adjective",
     "of": "KITCHEN-WINDOW"
    },
    {
     "kind": "adjective",
     "of": "K-CLOCK"
    },
    {
     "kind": "adjective",
     "of": "KITCHEN-HALL-DOOR"
    }
   ]
  },
  "GATE": {
   "word": "GATE",
   "roles": [
    {
     "kind": "noun",
     "of": "FRONT-GATE"
    },
    {
     "kind": "noun",
     "of": "BACK-GATE"
    }
   ]
  },
  "FRONT": {
   "word": "FRONT",
   "roles": [
    {
     "kind": "adjective",
     "of": "FRONT-GATE"
    },
    {
     "kind": "adjective",
     "of": "FRONT-DOOR"
    }
   ]
  },
  "BELL": {
   "word": "BELL",
   "roles": [
    {
     "kind": "noun",
     "of": "DOORBELL"
    }
   ]
  },
  "DOORBELL": {
   "word": "DOORBELL",
   "roles": [
    {
     "kind": "noun",
     "of": "DOORBELL"
    }
   ]
  },
  "DOOR": {
   "word": "DOOR",
   "roles": [
    {
     "kind": "adjective",
     "of": "DOORBELL"
    },
    {
     "kind": "noun",
     "of": "OFFICE-BACK-DOOR"
    },
    {
     "kind": "noun",
     "of": "MONICA-BACK-DOOR"
    },
    {
     "kind": "noun",
     "of": "LINDER-BACK-DOOR"
    },
    {
     "kind": "noun",
     "of": "MONICA-DOOR"
    },
    {
     "kind": "noun",
     "of": "MONICA-BATH-DOOR"
    },
    {
     "kind": "noun",
     "of": "TUB-DOOR"
    },
    {
     "kind": "noun",
     "of": "TOILET-DOOR"
    },
    {
     "kind": "noun",
     "of": "LINDER-BATH-DOOR"
    },
    {
     "kind": "noun",
     "of": "LINDER-DOOR"
    },
    {
     "kind": "noun",
     "of": "LIVING-DINING-DOOR"
    },
    {
     "kind": "noun",
     "of": "DINING-DOOR"
    },
    {
     "kind": "noun",
     "of": "KITCHEN-DINING-DOOR"
    },
    {
     "kind": "noun",
     "of": "KITCHEN-HALL-DOOR"
    },
    {
     "kind": "noun",
     "of": "BUTLER-DOOR"
    },
    {
     "kind": "noun",
     "of": "BUTLER-BATH-DOOR"
    },
    {
     "kind": "noun",
     "of": "FRONT-DOOR"
    },
    {
     "kind": "noun",
     "of": "STORAGE-DOOR"
    },
    {
     "kind": "noun",
     "of": "OFFICE-DOOR"
    },
    {
     "kind": "noun",
     "of": "CLOCK"
    },
    {
     "kind": "noun",
     "of": "GARAGE-DOOR"
    },
    {
     "kind": "noun",
     "of": "WORKSHOP-DOOR"
    }
   ]
  },
  "DRIVEWAY": {
   "word": "DRIVEWAY",
   "roles": [
    {
     "kind": "noun",
     "of": "DRIVEWAY-OBJECT"
    }
   ]
  },
  "WAY": {
   "word": "WAY",
   "roles": [
    {
     "kind": "noun",
     "of": "DRIVEWAY-OBJECT"
    }
   ]
  },
  "DRIVE": {
   "word": "DRIVE",
   "roles": [
    {
     "kind": "adjective",
     "of": "DRIVEWAY-OBJECT"
    }
   ]
  },
  "FOOTPRINTS": {
   "word": "FOOTPRINTS",
   "roles": [
    {
     "kind": "noun",
     "of": "SIDE-FOOTPRINTS"
    },
    {
     "kind": "noun",
     "of": "BACK-FOOTPRINTS"
    }
   ]
  },
  "PRINTS": {
   "word": "PRINTS",
   "roles": [
    {
     "kind": "noun",
     "of": "SIDE-FOOTPRINTS"
    },
    {
     "kind": "noun",
     "of": "BACK-FOOTPRINTS"
    }
   ]
  },
  "SET": {
   "word": "SET",
   "roles": [
    {
     "kind": "noun",
     "of": "SIDE-FOOTPRINTS"
    },
    {
     "kind": "noun",
     "of": "BACK-FOOTPRINTS"
    },
    {
     "kind": "noun",
     "of": "SILVERWARE"
    },
    {
     "kind": "noun",
     "of": "CHINA"
    },
    {
     "kind": "noun",
     "of": "PHONG-KEYS"
    }
   ]
  },
  "FOOT": {
   "word": "FOOT",
   "roles": [
    {
     "kind": "adjective",
     "of": "SIDE-FOOTPRINTS"
    },
    {
     "kind": "adjective",
     "of": "BACK-FOOTPRINTS"
    }
   ]
  },
  "CAST": {
   "word": "CAST",
   "roles": [
    {
     "kind": "noun",
     "of": "SIDE-FOOTPRINTS-CAST"
    },
    {
     "kind": "noun",
     "of": "BACK-FOOTPRINTS-CAST"
    }
   ]
  },
  "SIDE-YARD": {
   "word": "SIDE-YARD",
   "roles": [
    {
     "kind": "adjective",
     "of": "SIDE-FOOTPRINTS-CAST"
    }
   ]
  },
  "SIDE": {
   "word": "SIDE",
   "roles": [
    {
     "kind": "adjective",
     "of": "SIDE-FOOTPRINTS-CAST"
    }
   ]
  },
  "WOODS": {
   "word": "WOODS",
   "roles": [
    {
     "kind": "noun",
     "of": "WOODS"
    }
   ]
  },
  "FOREST": {
   "word": "FOREST",
   "roles": [
    {
     "kind": "noun",
     "of": "WOODS"
    }
   ]
  },
  "THICKET": {
   "word": "THICKET",
   "roles": [
    {
     "kind": "noun",
     "of": "WOODS"
    }
   ]
  },
  "DENSE": {
   "word": "DENSE",
   "roles": [
    {
     "kind": "adjective",
     "of": "WOODS"
    }
   ]
  },
  "THICK": {
   "word": "THICK",
   "roles": [
    {
     "kind": "adjective",
     "of": "WOODS"
    }
   ]
  },
  "DARK": {
   "word": "DARK",
   "roles": [
    {
     "kind": "adjective",
     "of": "WOODS"
    },
    {
     "kind": "adjective",
     "of": "LINDER-CAR"
    }
   ]
  },
  "BAMBOO": {
   "word": "BAMBOO",
   "roles": [
    {
     "kind": "adjective",
     "of": "WOODS"
    }
   ]
  },
  "BACK": {
   "word": "BACK",
   "roles": [
    {
     "kind": "adjective",
     "of": "BACK-GATE"
    },
    {
     "kind": "adjective",
     "of": "BACK-FOOTPRINTS-CAST"
    },
    {
     "kind": "adjective",
     "of": "OFFICE-BACK-DOOR"
    },
    {
     "kind": "adjective",
     "of": "MONICA-BACK-DOOR"
    },
    {
     "kind": "adjective",
     "of": "LINDER-BACK-DOOR"
    }
   ]
  },
  "OFFICE": {
   "word": "OFFICE",
   "roles": [
    {
     "kind": "adjective",
     "of": "BACK-GATE"
    },
    {
     "kind": "adjective",
     "of": "OFFICE-WINDOW"
    },
    {
     "kind": "adjective",
     "of": "OFFICE-DOOR"
    },
    {
     "kind": "adjective",
     "of": "OFFICE-DESK"
    },
    {
     "kind": "adjective",
     "of": "CARVED-CHAIR"
    },
    {
     "kind": "adjective",
     "of": "FILE-CABINET"
    },
    {
     "kind": "adjective",
     "of": "PAPERS"
    },
    {
     "kind": "adjective",
     "of": "OFFICE-PICTURE"
    },
    {
     "kind": "adjective",
     "of": "OFFICE-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "LOUNGE"
    }
   ]
  },
  "BACK-YARD": {
   "word": "BACK-YARD",
   "roles": [
    {
     "kind": "adjective",
     "of": "BACK-FOOTPRINTS-CAST"
    }
   ]
  },
  "WIRE": {
   "word": "WIRE",
   "roles": [
    {
     "kind": "noun",
     "of": "PIECE-OF-WIRE"
    },
    {
     "kind": "adjective",
     "of": "PIECE-OF-WIRE"
    },
    {
     "kind": "noun",
     "of": "WORKSHOP-WIRE"
    },
    {
     "kind": "noun",
     "of": "SPOOL-OF-WIRE"
    },
    {
     "kind": "adjective",
     "of": "SPOOL-OF-WIRE"
    },
    {
     "kind": "noun",
     "of": "BLACK-WIRE"
    },
    {
     "kind": "noun",
     "of": "WHITE-WIRE"
    }
   ]
  },
  "PIECE": {
   "word": "PIECE",
   "roles": [
    {
     "kind": "noun",
     "of": "PIECE-OF-WIRE"
    }
   ]
  },
  "GREEN": {
   "word": "GREEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "PIECE-OF-WIRE"
    },
    {
     "kind": "adjective",
     "of": "LAWN"
    },
    {
     "kind": "adjective",
     "of": "CLOCK-WIRES"
    },
    {
     "kind": "adjective",
     "of": "LOUNGE"
    },
    {
     "kind": "adjective",
     "of": "SPOOL-OF-WIRE"
    }
   ]
  },
  "CHUNK": {
   "word": "CHUNK",
   "roles": [
    {
     "kind": "noun",
     "of": "PIECE-OF-PUTTY"
    }
   ]
  },
  "PUTTY": {
   "word": "PUTTY",
   "roles": [
    {
     "kind": "noun",
     "of": "PIECE-OF-PUTTY"
    }
   ]
  },
  "OUTSIDE": {
   "word": "OUTSIDE",
   "roles": [
    {
     "kind": "adjective",
     "of": "OFFICE-BACK-DOOR"
    },
    {
     "kind": "adjective",
     "of": "MONICA-BACK-DOOR"
    },
    {
     "kind": "adjective",
     "of": "LINDER-BACK-DOOR"
    }
   ]
  },
  "LAWN": {
   "word": "LAWN",
   "roles": [
    {
     "kind": "noun",
     "of": "LAWN"
    }
   ]
  },
  "GRASS": {
   "word": "GRASS",
   "roles": [
    {
     "kind": "noun",
     "of": "LAWN"
    }
   ]
  },
  "ROCKS": {
   "word": "ROCKS",
   "roles": [
    {
     "kind": "noun",
     "of": "ROCKS"
    }
   ]
  },
  "ROCK": {
   "word": "ROCK",
   "roles": [
    {
     "kind": "noun",
     "of": "ROCKS"
    }
   ]
  },
  "BOULDER": {
   "word": "BOULDER",
   "roles": [
    {
     "kind": "noun",
     "of": "ROCKS"
    }
   ]
  },
  "SMOOTH": {
   "word": "SMOOTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "ROCKS"
    }
   ]
  },
  "ROUND": {
   "word": "ROUND",
   "roles": [
    {
     "kind": "adjective",
     "of": "ROCKS"
    }
   ]
  },
  "TABLE": {
   "word": "TABLE",
   "roles": [
    {
     "kind": "noun",
     "of": "MONICA-TABLE"
    },
    {
     "kind": "noun",
     "of": "COFFEE-TABLE"
    },
    {
     "kind": "noun",
     "of": "DINING-ROOM-TABLE"
    },
    {
     "kind": "noun",
     "of": "BUTLER-TABLE"
    }
   ]
  },
  "DESK": {
   "word": "DESK",
   "roles": [
    {
     "kind": "noun",
     "of": "MONICA-TABLE"
    },
    {
     "kind": "noun",
     "of": "OFFICE-DESK"
    }
   ]
  },
  "BENCH": {
   "word": "BENCH",
   "roles": [
    {
     "kind": "noun",
     "of": "MONICA-TABLE"
    },
    {
     "kind": "noun",
     "of": "DINING-ROOM-BENCH"
    }
   ]
  },
  "DRESSING": {
   "word": "DRESSING",
   "roles": [
    {
     "kind": "adjective",
     "of": "MONICA-TABLE"
    }
   ]
  },
  "WORK": {
   "word": "WORK",
   "roles": [
    {
     "kind": "adjective",
     "of": "MONICA-TABLE"
    },
    {
     "kind": "adjective",
     "of": "WORKSHOP-DOOR"
    }
   ]
  },
  "MAKE-UP": {
   "word": "MAKE-UP",
   "roles": [
    {
     "kind": "noun",
     "of": "MONICA-TABLE-STUFF"
    }
   ]
  },
  "LETTER": {
   "word": "LETTER",
   "roles": [
    {
     "kind": "noun",
     "of": "MONICA-TABLE-STUFF"
    },
    {
     "kind": "noun",
     "of": "OFFICE-DESK-STUFF"
    }
   ]
  },
  "TOOLS": {
   "word": "TOOLS",
   "roles": [
    {
     "kind": "noun",
     "of": "MONICA-TABLE-STUFF"
    }
   ]
  },
  "POSTER": {
   "word": "POSTER",
   "roles": [
    {
     "kind": "noun",
     "of": "MOVIE-POSTERS"
    },
    {
     "kind": "noun",
     "of": "FOUR-POSTER"
    }
   ]
  },
  "MOVIE": {
   "word": "MOVIE",
   "roles": [
    {
     "kind": "adjective",
     "of": "MOVIE-POSTERS"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-FILM"
    }
   ]
  },
  "BOOKCASE": {
   "word": "BOOKCASE",
   "roles": [
    {
     "kind": "noun",
     "of": "BOOK-CASE"
    }
   ]
  },
  "CASE": {
   "word": "CASE",
   "roles": [
    {
     "kind": "noun",
     "of": "BOOK-CASE"
    },
    {
     "kind": "noun",
     "of": "CLOCK"
    }
   ]
  },
  "BOOK": {
   "word": "BOOK",
   "roles": [
    {
     "kind": "noun",
     "of": "BOOK-CASE"
    },
    {
     "kind": "adjective",
     "of": "BOOK-CASE"
    },
    {
     "kind": "noun",
     "of": "RECURSIVE-BOOK"
    },
    {
     "kind": "noun",
     "of": "MATCHBOOK"
    }
   ]
  },
  "BOOKS": {
   "word": "BOOKS",
   "roles": [
    {
     "kind": "noun",
     "of": "BOOK-CASE"
    }
   ]
  },
  "RECORD": {
   "word": "RECORD",
   "roles": [
    {
     "kind": "noun",
     "of": "RECORDS"
    }
   ]
  },
  "MUSIC": {
   "word": "MUSIC",
   "roles": [
    {
     "kind": "noun",
     "of": "RECORDS"
    },
    {
     "kind": "noun",
     "of": "RADIO"
    },
    {
     "kind": "noun",
     "of": "MUSIC"
    }
   ]
  },
  "BEDROOM": {
   "word": "BEDROOM",
   "roles": [
    {
     "kind": "adjective",
     "of": "MONICA-DOOR"
    },
    {
     "kind": "adjective",
     "of": "LINDER-DOOR"
    },
    {
     "kind": "adjective",
     "of": "BUTLER-WINDOW"
    }
   ]
  },
  "CEDAR": {
   "word": "CEDAR",
   "roles": [
    {
     "kind": "adjective",
     "of": "MONICA-BATH-DOOR"
    }
   ]
  },
  "BATH": {
   "word": "BATH",
   "roles": [
    {
     "kind": "adjective",
     "of": "MONICA-BATH-DOOR"
    },
    {
     "kind": "adjective",
     "of": "MASTER-BATH-COUNTER"
    },
    {
     "kind": "adjective",
     "of": "TUB-DOOR"
    },
    {
     "kind": "adjective",
     "of": "BATH-WINDOW"
    },
    {
     "kind": "adjective",
     "of": "BATHTUB"
    },
    {
     "kind": "adjective",
     "of": "LINDER-BATH-DOOR"
    },
    {
     "kind": "adjective",
     "of": "BUTLER-BATH-DOOR"
    }
   ]
  },
  "BATHROOM": {
   "word": "BATHROOM",
   "roles": [
    {
     "kind": "adjective",
     "of": "MONICA-BATH-DOOR"
    },
    {
     "kind": "adjective",
     "of": "MASTER-BATH-COUNTER"
    },
    {
     "kind": "adjective",
     "of": "LINDER-BATH-DOOR"
    },
    {
     "kind": "adjective",
     "of": "BUTLER-BATH-DOOR"
    }
   ]
  },
  "COUNTER": {
   "word": "COUNTER",
   "roles": [
    {
     "kind": "noun",
     "of": "MASTER-BATH-COUNTER"
    }
   ]
  },
  "PULLMAN": {
   "word": "PULLMAN",
   "roles": [
    {
     "kind": "noun",
     "of": "MASTER-BATH-COUNTER"
    }
   ]
  },
  "LONG": {
   "word": "LONG",
   "roles": [
    {
     "kind": "adjective",
     "of": "MASTER-BATH-COUNTER"
    },
    {
     "kind": "adjective",
     "of": "DINING-ROOM-TABLE"
    }
   ]
  },
  "TUB": {
   "word": "TUB",
   "roles": [
    {
     "kind": "adjective",
     "of": "TUB-DOOR"
    },
    {
     "kind": "noun",
     "of": "BATHTUB"
    }
   ]
  },
  "BATHTUB": {
   "word": "BATHTUB",
   "roles": [
    {
     "kind": "adjective",
     "of": "TUB-DOOR"
    },
    {
     "kind": "noun",
     "of": "BATHTUB"
    }
   ]
  },
  "PLANT": {
   "word": "PLANT",
   "roles": [
    {
     "kind": "noun",
     "of": "POTTED-PLANTS"
    }
   ]
  },
  "PLANTS": {
   "word": "PLANTS",
   "roles": [
    {
     "kind": "noun",
     "of": "POTTED-PLANTS"
    }
   ]
  },
  "POTTED": {
   "word": "POTTED",
   "roles": [
    {
     "kind": "adjective",
     "of": "POTTED-PLANTS"
    }
   ]
  },
  "SHOWER": {
   "word": "SHOWER",
   "roles": [
    {
     "kind": "noun",
     "of": "SHOWER"
    },
    {
     "kind": "adjective",
     "of": "SHOWER"
    }
   ]
  },
  "HEAD": {
   "word": "HEAD",
   "roles": [
    {
     "kind": "noun",
     "of": "SHOWER"
    }
   ]
  },
  "REDWOOD": {
   "word": "REDWOOD",
   "roles": [
    {
     "kind": "adjective",
     "of": "LINDER-BATH-DOOR"
    }
   ]
  },
  "CLOTHES": {
   "word": "CLOTHES",
   "roles": [
    {
     "kind": "noun",
     "of": "LINDER-ROOM-STUFF"
    }
   ]
  },
  "NEWSPAPERS": {
   "word": "NEWSPAPERS",
   "roles": [
    {
     "kind": "noun",
     "of": "LINDER-ROOM-STUFF"
    },
    {
     "kind": "noun",
     "of": "NEWSPAPERS"
    }
   ]
  },
  "PAPERS": {
   "word": "PAPERS",
   "roles": [
    {
     "kind": "noun",
     "of": "LINDER-ROOM-STUFF"
    },
    {
     "kind": "noun",
     "of": "PAPERS"
    }
   ]
  },
  "BED": {
   "word": "BED",
   "roles": [
    {
     "kind": "noun",
     "of": "FOUR-POSTER"
    },
    {
     "kind": "adjective",
     "of": "BUTLER-WINDOW"
    },
    {
     "kind": "noun",
     "of": "BED"
    }
   ]
  },
  "FOUR-POSTER": {
   "word": "FOUR-POSTER",
   "roles": [
    {
     "kind": "noun",
     "of": "FOUR-POSTER"
    },
    {
     "kind": "adjective",
     "of": "FOUR-POSTER"
    }
   ]
  },
  "DRESSER": {
   "word": "DRESSER",
   "roles": [
    {
     "kind": "noun",
     "of": "MASTER-BEDROOM-DRESSER"
    }
   ]
  },
  "FIREPLACE": {
   "word": "FIREPLACE",
   "roles": [
    {
     "kind": "noun",
     "of": "FIREPLACE"
    }
   ]
  },
  "FIELDS": {
   "word": "FIELDS",
   "roles": [
    {
     "kind": "adjective",
     "of": "FIREPLACE"
    }
   ]
  },
  "STONE": {
   "word": "STONE",
   "roles": [
    {
     "kind": "adjective",
     "of": "FIREPLACE"
    }
   ]
  },
  "PILE": {
   "word": "PILE",
   "roles": [
    {
     "kind": "noun",
     "of": "WOOD-PILE"
    },
    {
     "kind": "noun",
     "of": "BROKEN-GLASS"
    }
   ]
  },
  "WOOD": {
   "word": "WOOD",
   "roles": [
    {
     "kind": "adjective",
     "of": "WOOD-PILE"
    },
    {
     "kind": "adjective",
     "of": "BUTLER-TABLE"
    },
    {
     "kind": "adjective",
     "of": "WOODEN-CHAIR"
    },
    {
     "kind": "adjective",
     "of": "OFFICE-PICTURE"
    }
   ]
  },
  "COUCH": {
   "word": "COUCH",
   "roles": [
    {
     "kind": "noun",
     "of": "SOFA"
    }
   ]
  },
  "SOFA": {
   "word": "SOFA",
   "roles": [
    {
     "kind": "noun",
     "of": "SOFA"
    }
   ]
  },
  "DAVENPORT": {
   "word": "DAVENPORT",
   "roles": [
    {
     "kind": "noun",
     "of": "SOFA"
    }
   ]
  },
  "DIVAN": {
   "word": "DIVAN",
   "roles": [
    {
     "kind": "noun",
     "of": "SOFA"
    }
   ]
  },
  "CHAIR": {
   "word": "CHAIR",
   "roles": [
    {
     "kind": "noun",
     "of": "CLUB-CHAIR"
    },
    {
     "kind": "noun",
     "of": "CARVED-CHAIR"
    },
    {
     "kind": "noun",
     "of": "WOODEN-CHAIR"
    },
    {
     "kind": "noun",
     "of": "CHAIR"
    }
   ]
  },
  "CLUB": {
   "word": "CLUB",
   "roles": [
    {
     "kind": "adjective",
     "of": "CLUB-CHAIR"
    }
   ]
  },
  "COFFEE": {
   "word": "COFFEE",
   "roles": [
    {
     "kind": "adjective",
     "of": "COFFEE-TABLE"
    }
   ]
  },
  "RADIO": {
   "word": "RADIO",
   "roles": [
    {
     "kind": "noun",
     "of": "RADIO"
    }
   ]
  },
  "VOLUME": {
   "word": "VOLUME",
   "roles": [
    {
     "kind": "noun",
     "of": "RADIO"
    }
   ]
  },
  "PROGRAM": {
   "word": "PROGRAM",
   "roles": [
    {
     "kind": "noun",
     "of": "RADIO"
    },
    {
     "kind": "noun",
     "of": "MUSIC"
    }
   ]
  },
  "CONSOLE": {
   "word": "CONSOLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "RADIO"
    }
   ]
  },
  "CABINET": {
   "word": "CABINET",
   "roles": [
    {
     "kind": "noun",
     "of": "LIQUOR-CABINET"
    },
    {
     "kind": "noun",
     "of": "K-CABINETS"
    },
    {
     "kind": "noun",
     "of": "FILE-CABINET"
    },
    {
     "kind": "noun",
     "of": "CABINET"
    }
   ]
  },
  "LIQUOR": {
   "word": "LIQUOR",
   "roles": [
    {
     "kind": "adjective",
     "of": "LIQUOR-CABINET"
    }
   ]
  },
  "DOUBLE": {
   "word": "DOUBLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "LIVING-DINING-DOOR"
    }
   ]
  },
  "DINING": {
   "word": "DINING",
   "roles": [
    {
     "kind": "adjective",
     "of": "DINING-ROOM-TABLE"
    },
    {
     "kind": "adjective",
     "of": "DINING-ROOM-BENCH"
    },
    {
     "kind": "adjective",
     "of": "DINING-DOOR"
    }
   ]
  },
  "BENCHES": {
   "word": "BENCHES",
   "roles": [
    {
     "kind": "noun",
     "of": "DINING-ROOM-BENCH"
    }
   ]
  },
  "FRENCH": {
   "word": "FRENCH",
   "roles": [
    {
     "kind": "adjective",
     "of": "DINING-DOOR"
    }
   ]
  },
  "SWINGING": {
   "word": "SWINGING",
   "roles": [
    {
     "kind": "adjective",
     "of": "KITCHEN-DINING-DOOR"
    }
   ]
  },
  "SILVER": {
   "word": "SILVER",
   "roles": [
    {
     "kind": "noun",
     "of": "SILVERWARE"
    }
   ]
  },
  "GLASS": {
   "word": "GLASS",
   "roles": [
    {
     "kind": "noun",
     "of": "GLASSES"
    },
    {
     "kind": "noun",
     "of": "BROKEN-GLASS"
    }
   ]
  },
  "GLASSES": {
   "word": "GLASSES",
   "roles": [
    {
     "kind": "noun",
     "of": "GLASSES"
    }
   ]
  },
  "CHINA": {
   "word": "CHINA",
   "roles": [
    {
     "kind": "noun",
     "of": "CHINA"
    }
   ]
  },
  "CUPBOARD": {
   "word": "CUPBOARD",
   "roles": [
    {
     "kind": "noun",
     "of": "K-CUPBOARD"
    }
   ]
  },
  "FOOD": {
   "word": "FOOD",
   "roles": [
    {
     "kind": "noun",
     "of": "FOODS"
    },
    {
     "kind": "noun",
     "of": "COLD-FOODS"
    }
   ]
  },
  "FOODS": {
   "word": "FOODS",
   "roles": [
    {
     "kind": "noun",
     "of": "FOODS"
    },
    {
     "kind": "noun",
     "of": "COLD-FOODS"
    }
   ]
  },
  "BUNCH": {
   "word": "BUNCH",
   "roles": [
    {
     "kind": "noun",
     "of": "FOODS"
    },
    {
     "kind": "noun",
     "of": "COLD-FOODS"
    }
   ]
  },
  "CANNED": {
   "word": "CANNED",
   "roles": [
    {
     "kind": "adjective",
     "of": "FOODS"
    }
   ]
  },
  "CLOCK": {
   "word": "CLOCK",
   "roles": [
    {
     "kind": "noun",
     "of": "K-CLOCK"
    },
    {
     "kind": "noun",
     "of": "CLOCK"
    },
    {
     "kind": "adjective",
     "of": "CLOCK"
    },
    {
     "kind": "adjective",
     "of": "CLOCK-POWDER"
    },
    {
     "kind": "adjective",
     "of": "INSIDE-GUN"
    },
    {
     "kind": "adjective",
     "of": "CLOCK-KEY"
    }
   ]
  },
  "APPLIANCE": {
   "word": "APPLIANCE",
   "roles": [
    {
     "kind": "noun",
     "of": "REFRIGERATOR"
    }
   ]
  },
  "REFRIGERATOR": {
   "word": "REFRIGERATOR",
   "roles": [
    {
     "kind": "noun",
     "of": "REFRIGERATOR"
    }
   ]
  },
  "FRIDGE": {
   "word": "FRIDGE",
   "roles": [
    {
     "kind": "noun",
     "of": "REFRIGERATOR"
    }
   ]
  },
  "ELECTRIC": {
   "word": "ELECTRIC",
   "roles": [
    {
     "kind": "adjective",
     "of": "REFRIGERATOR"
    },
    {
     "kind": "adjective",
     "of": "RANGE"
    },
    {
     "kind": "adjective",
     "of": "HOOD"
    },
    {
     "kind": "adjective",
     "of": "MIXER"
    },
    {
     "kind": "adjective",
     "of": "TOASTER"
    }
   ]
  },
  "COLD": {
   "word": "COLD",
   "roles": [
    {
     "kind": "adjective",
     "of": "COLD-FOODS"
    }
   ]
  },
  "RANGE": {
   "word": "RANGE",
   "roles": [
    {
     "kind": "noun",
     "of": "RANGE"
    },
    {
     "kind": "adjective",
     "of": "HOOD"
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
  "MIXER": {
   "word": "MIXER",
   "roles": [
    {
     "kind": "noun",
     "of": "MIXER"
    }
   ]
  },
  "TOASTER": {
   "word": "TOASTER",
   "roles": [
    {
     "kind": "noun",
     "of": "TOASTER"
    }
   ]
  },
  "BUTLER": {
   "word": "BUTLER",
   "roles": [
    {
     "kind": "adjective",
     "of": "BUTLER-DOOR"
    },
    {
     "kind": "adjective",
     "of": "BUTLER-WINDOW"
    },
    {
     "kind": "adjective",
     "of": "OFFICE-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "BUTTON"
    }
   ]
  },
  "TABLES": {
   "word": "TABLES",
   "roles": [
    {
     "kind": "noun",
     "of": "BUTLER-TABLE"
    }
   ]
  },
  "BARE": {
   "word": "BARE",
   "roles": [
    {
     "kind": "adjective",
     "of": "BUTLER-TABLE"
    }
   ]
  },
  "WOODEN": {
   "word": "WOODEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "BUTLER-TABLE"
    },
    {
     "kind": "adjective",
     "of": "WOODEN-CHAIR"
    }
   ]
  },
  "END": {
   "word": "END",
   "roles": [
    {
     "kind": "adjective",
     "of": "BUTLER-TABLE"
    }
   ]
  },
  "ARRANGEMENT": {
   "word": "ARRANGEMENT",
   "roles": [
    {
     "kind": "noun",
     "of": "FLOWER-ARRANGEMENT"
    }
   ]
  },
  "FLOWER": {
   "word": "FLOWER",
   "roles": [
    {
     "kind": "adjective",
     "of": "FLOWER-ARRANGEMENT"
    }
   ]
  },
  "SCROLL": {
   "word": "SCROLL",
   "roles": [
    {
     "kind": "noun",
     "of": "SCROLL"
    }
   ]
  },
  "SHRINE": {
   "word": "SHRINE",
   "roles": [
    {
     "kind": "noun",
     "of": "SCROLL"
    }
   ]
  },
  "LOVELY": {
   "word": "LOVELY",
   "roles": [
    {
     "kind": "adjective",
     "of": "SCROLL"
    }
   ]
  },
  "CALLIGRAPHED": {
   "word": "CALLIGRAPHED",
   "roles": [
    {
     "kind": "adjective",
     "of": "SCROLL"
    }
   ]
  },
  "PLATFORM": {
   "word": "PLATFORM",
   "roles": [
    {
     "kind": "noun",
     "of": "SHOE-PLATFORM"
    }
   ]
  },
  "OTHER": {
   "word": "OTHER",
   "roles": [
    {
     "kind": "adjective",
     "of": "OTHER-SHOES"
    },
    {
     "kind": "adjective",
     "of": "WORKSHOP-WIRE"
    },
    {
     "kind": "adjective",
     "of": "RANDOM-CRIME"
    }
   ]
  },
  "STORAGE": {
   "word": "STORAGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "STORAGE-DOOR"
    }
   ]
  },
  "CLOSET": {
   "word": "CLOSET",
   "roles": [
    {
     "kind": "adjective",
     "of": "STORAGE-DOOR"
    },
    {
     "kind": "noun",
     "of": "CLOSET"
    }
   ]
  },
  "LINENS": {
   "word": "LINENS",
   "roles": [
    {
     "kind": "noun",
     "of": "LINENS"
    }
   ]
  },
  "SHEETS": {
   "word": "SHEETS",
   "roles": [
    {
     "kind": "noun",
     "of": "LINENS"
    }
   ]
  },
  "LINEN": {
   "word": "LINEN",
   "roles": [
    {
     "kind": "noun",
     "of": "LINENS"
    }
   ]
  },
  "TOWEL": {
   "word": "TOWEL",
   "roles": [
    {
     "kind": "noun",
     "of": "TOWELS"
    }
   ]
  },
  "TOWELS": {
   "word": "TOWELS",
   "roles": [
    {
     "kind": "noun",
     "of": "TOWELS"
    }
   ]
  },
  "LARGE": {
   "word": "LARGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "OFFICE-DESK"
    },
    {
     "kind": "adjective",
     "of": "CARVED-CHAIR"
    }
   ]
  },
  "MASSIVE": {
   "word": "MASSIVE",
   "roles": [
    {
     "kind": "adjective",
     "of": "OFFICE-DESK"
    }
   ]
  },
  "PILES": {
   "word": "PILES",
   "roles": [
    {
     "kind": "noun",
     "of": "OFFICE-DESK-STUFF"
    }
   ]
  },
  "SOUVENIR": {
   "word": "SOUVENIR",
   "roles": [
    {
     "kind": "noun",
     "of": "OFFICE-DESK-STUFF"
    }
   ]
  },
  "THRONE": {
   "word": "THRONE",
   "roles": [
    {
     "kind": "noun",
     "of": "CARVED-CHAIR"
    }
   ]
  },
  "CARVED": {
   "word": "CARVED",
   "roles": [
    {
     "kind": "adjective",
     "of": "CARVED-CHAIR"
    }
   ]
  },
  "ORNATE": {
   "word": "ORNATE",
   "roles": [
    {
     "kind": "adjective",
     "of": "CARVED-CHAIR"
    }
   ]
  },
  "ARM": {
   "word": "ARM",
   "roles": [
    {
     "kind": "adjective",
     "of": "CARVED-CHAIR"
    }
   ]
  },
  "SIMPLE": {
   "word": "SIMPLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "WOODEN-CHAIR"
    }
   ]
  },
  "CUSTOMER": {
   "word": "CUSTOMER",
   "roles": [
    {
     "kind": "adjective",
     "of": "WOODEN-CHAIR"
    }
   ]
  },
  "FILE": {
   "word": "FILE",
   "roles": [
    {
     "kind": "adjective",
     "of": "FILE-CABINET"
    }
   ]
  },
  "LOT": {
   "word": "LOT",
   "roles": [
    {
     "kind": "noun",
     "of": "PAPERS"
    }
   ]
  },
  "PAPER": {
   "word": "PAPER",
   "roles": [
    {
     "kind": "noun",
     "of": "PAPERS"
    },
    {
     "kind": "noun",
     "of": "GUN-RECEIPT"
    },
    {
     "kind": "noun",
     "of": "MEDICAL-REPORT"
    }
   ]
  },
  "BUSINESS": {
   "word": "BUSINESS",
   "roles": [
    {
     "kind": "adjective",
     "of": "PAPERS"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-PTA"
    }
   ]
  },
  "PICTURE": {
   "word": "PICTURE",
   "roles": [
    {
     "kind": "noun",
     "of": "OFFICE-PICTURE"
    }
   ]
  },
  "FRAMED": {
   "word": "FRAMED",
   "roles": [
    {
     "kind": "adjective",
     "of": "OFFICE-PICTURE"
    }
   ]
  },
  "BLOCK": {
   "word": "BLOCK",
   "roles": [
    {
     "kind": "adjective",
     "of": "OFFICE-PICTURE"
    }
   ]
  },
  "GRANDFATHER": {
   "word": "GRANDFATHER",
   "roles": [
    {
     "kind": "adjective",
     "of": "CLOCK"
    }
   ]
  },
  "KEYHOLE": {
   "word": "KEYHOLE",
   "roles": [
    {
     "kind": "noun",
     "of": "KEY-HOLE"
    }
   ]
  },
  "POWDER": {
   "word": "POWDER",
   "roles": [
    {
     "kind": "noun",
     "of": "POWDER"
    },
    {
     "kind": "noun",
     "of": "CLOCK-POWDER"
    }
   ]
  },
  "GUNPOWDER": {
   "word": "GUNPOWDER",
   "roles": [
    {
     "kind": "noun",
     "of": "POWDER"
    }
   ]
  },
  "GUN": {
   "word": "GUN",
   "roles": [
    {
     "kind": "adjective",
     "of": "POWDER"
    },
    {
     "kind": "adjective",
     "of": "CLOCK-POWDER"
    },
    {
     "kind": "adjective",
     "of": "GUN-RECEIPT"
    },
    {
     "kind": "noun",
     "of": "PISTOL"
    },
    {
     "kind": "noun",
     "of": "INSIDE-GUN"
    },
    {
     "kind": "noun",
     "of": "OUTSIDE-GUN"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-SHOT"
    }
   ]
  },
  "SAMPLE": {
   "word": "SAMPLE",
   "roles": [
    {
     "kind": "noun",
     "of": "CLOCK-POWDER"
    }
   ]
  },
  "WIRES": {
   "word": "WIRES",
   "roles": [
    {
     "kind": "noun",
     "of": "CLOCK-WIRES"
    },
    {
     "kind": "noun",
     "of": "WORKSHOP-WIRE"
    },
    {
     "kind": "noun",
     "of": "BLACK-WIRE"
    },
    {
     "kind": "noun",
     "of": "WHITE-WIRE"
    }
   ]
  },
  "BUTTON": {
   "word": "BUTTON",
   "roles": [
    {
     "kind": "noun",
     "of": "OFFICE-BUTTON"
    },
    {
     "kind": "noun",
     "of": "BUTTON"
    }
   ]
  },
  "LOUNGE": {
   "word": "LOUNGE",
   "roles": [
    {
     "kind": "noun",
     "of": "LOUNGE"
    }
   ]
  },
  "VELVET": {
   "word": "VELVET",
   "roles": [
    {
     "kind": "adjective",
     "of": "LOUNGE"
    }
   ]
  },
  "LUMPY": {
   "word": "LUMPY",
   "roles": [
    {
     "kind": "adjective",
     "of": "LOUNGE"
    }
   ]
  },
  "GARAGE": {
   "word": "GARAGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "GARAGE-DOOR"
    }
   ]
  },
  "CAR": {
   "word": "CAR",
   "roles": [
    {
     "kind": "noun",
     "of": "LINDER-CAR"
    },
    {
     "kind": "noun",
     "of": "MONICA-CAR"
    },
    {
     "kind": "adjective",
     "of": "CAR-WINDOW"
    }
   ]
  },
  "AUTO": {
   "word": "AUTO",
   "roles": [
    {
     "kind": "noun",
     "of": "LINDER-CAR"
    },
    {
     "kind": "noun",
     "of": "MONICA-CAR"
    }
   ]
  },
  "SEDAN": {
   "word": "SEDAN",
   "roles": [
    {
     "kind": "noun",
     "of": "LINDER-CAR"
    }
   ]
  },
  "BENTLEY": {
   "word": "BENTLEY",
   "roles": [
    {
     "kind": "noun",
     "of": "LINDER-CAR"
    }
   ]
  },
  "BLUE": {
   "word": "BLUE",
   "roles": [
    {
     "kind": "adjective",
     "of": "LINDER-CAR"
    },
    {
     "kind": "adjective",
     "of": "WORKSHOP-WIRE"
    }
   ]
  },
  "CONVERTIBLE": {
   "word": "CONVERTIBLE",
   "roles": [
    {
     "kind": "noun",
     "of": "MONICA-CAR"
    }
   ]
  },
  "MG": {
   "word": "MG",
   "roles": [
    {
     "kind": "noun",
     "of": "MONICA-CAR"
    }
   ]
  },
  "RED": {
   "word": "RED",
   "roles": [
    {
     "kind": "adjective",
     "of": "MONICA-CAR"
    },
    {
     "kind": "adjective",
     "of": "WORKSHOP-WIRE"
    }
   ]
  },
  "SPORT": {
   "word": "SPORT",
   "roles": [
    {
     "kind": "adjective",
     "of": "MONICA-CAR"
    }
   ]
  },
  "SPORTY": {
   "word": "SPORTY",
   "roles": [
    {
     "kind": "adjective",
     "of": "MONICA-CAR"
    }
   ]
  },
  "WORKSHOP": {
   "word": "WORKSHOP",
   "roles": [
    {
     "kind": "adjective",
     "of": "WORKSHOP-DOOR"
    }
   ]
  },
  "SHOP": {
   "word": "SHOP",
   "roles": [
    {
     "kind": "adjective",
     "of": "WORKSHOP-DOOR"
    }
   ]
  },
  "SPOOL": {
   "word": "SPOOL",
   "roles": [
    {
     "kind": "noun",
     "of": "WORKSHOP-WIRE"
    },
    {
     "kind": "noun",
     "of": "SPOOL-OF-WIRE"
    }
   ]
  },
  "SPOOLS": {
   "word": "SPOOLS",
   "roles": [
    {
     "kind": "noun",
     "of": "WORKSHOP-WIRE"
    }
   ]
  },
  "BROWN": {
   "word": "BROWN",
   "roles": [
    {
     "kind": "adjective",
     "of": "WORKSHOP-WIRE"
    }
   ]
  },
  "ORANGE": {
   "word": "ORANGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "WORKSHOP-WIRE"
    }
   ]
  },
  "YELLOW": {
   "word": "YELLOW",
   "roles": [
    {
     "kind": "adjective",
     "of": "WORKSHOP-WIRE"
    }
   ]
  },
  "VIOLET": {
   "word": "VIOLET",
   "roles": [
    {
     "kind": "adjective",
     "of": "WORKSHOP-WIRE"
    }
   ]
  },
  "GREY": {
   "word": "GREY",
   "roles": [
    {
     "kind": "adjective",
     "of": "WORKSHOP-WIRE"
    }
   ]
  },
  "BOX": {
   "word": "BOX",
   "roles": [
    {
     "kind": "noun",
     "of": "JUNCTION-BOX"
    }
   ]
  },
  "JUNCTION": {
   "word": "JUNCTION",
   "roles": [
    {
     "kind": "adjective",
     "of": "JUNCTION-BOX"
    }
   ]
  },
  "SAW": {
   "word": "SAW",
   "roles": [
    {
     "kind": "noun",
     "of": "SAW"
    }
   ]
  },
  "HAMMER": {
   "word": "HAMMER",
   "roles": [
    {
     "kind": "noun",
     "of": "HAMMER"
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
  "SPADE": {
   "word": "SPADE",
   "roles": [
    {
     "kind": "noun",
     "of": "SPADE"
    }
   ]
  },
  "HOE": {
   "word": "HOE",
   "roles": [
    {
     "kind": "noun",
     "of": "HOE"
    }
   ]
  },
  "RAKE": {
   "word": "RAKE",
   "roles": [
    {
     "kind": "noun",
     "of": "RAKE"
    }
   ]
  },
  "HOSE": {
   "word": "HOSE",
   "roles": [
    {
     "kind": "noun",
     "of": "HOSE"
    }
   ]
  },
  "SHELF": {
   "word": "SHELF",
   "roles": [
    {
     "kind": "noun",
     "of": "WORK-SHELVES"
    }
   ]
  },
  "SHELVES": {
   "word": "SHELVES",
   "roles": [
    {
     "kind": "noun",
     "of": "WORK-SHELVES"
    }
   ]
  },
  "AIR": {
   "word": "AIR",
   "roles": [
    {
     "kind": "noun",
     "of": "AIR"
    }
   ]
  },
  "WIND": {
   "word": "WIND",
   "roles": [
    {
     "kind": "noun",
     "of": "AIR"
    }
   ]
  },
  "BREEZE": {
   "word": "BREEZE",
   "roles": [
    {
     "kind": "noun",
     "of": "AIR"
    }
   ]
  },
  "ZZKJLK": {
   "word": "ZZKJLK",
   "roles": [
    {
     "kind": "noun",
     "of": "LOCAL-GLOBALS"
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
  "THEY": {
   "word": "THEY",
   "roles": [
    {
     "kind": "noun",
     "of": "IT"
    }
   ]
  },
  "MYSTERY": {
   "word": "MYSTERY",
   "roles": [
    {
     "kind": "adjective",
     "of": "RECURSIVE-BOOK"
    }
   ]
  },
  "IMPORTANT": {
   "word": "IMPORTANT",
   "roles": [
    {
     "kind": "adjective",
     "of": "RECURSIVE-BOOK"
    }
   ]
  },
  "RECEIPT": {
   "word": "RECEIPT",
   "roles": [
    {
     "kind": "noun",
     "of": "GUN-RECEIPT"
    }
   ]
  },
  "TICKET": {
   "word": "TICKET",
   "roles": [
    {
     "kind": "noun",
     "of": "GUN-RECEIPT"
    },
    {
     "kind": "noun",
     "of": "STUB"
    },
    {
     "kind": "adjective",
     "of": "STUB"
    }
   ]
  },
  "BOOKMARK": {
   "word": "BOOKMARK",
   "roles": [
    {
     "kind": "noun",
     "of": "GUN-RECEIPT"
    }
   ]
  },
  "TELEGRAM": {
   "word": "TELEGRAM",
   "roles": [
    {
     "kind": "noun",
     "of": "TELEGRAM"
    }
   ]
  },
  "MATCHBOOK": {
   "word": "MATCHBOOK",
   "roles": [
    {
     "kind": "noun",
     "of": "MATCHBOOK"
    }
   ]
  },
  "MATCHES": {
   "word": "MATCHES",
   "roles": [
    {
     "kind": "noun",
     "of": "MATCHBOOK"
    }
   ]
  },
  "COLT": {
   "word": "COLT",
   "roles": [
    {
     "kind": "noun",
     "of": "PISTOL"
    }
   ]
  },
  "PISTOL": {
   "word": "PISTOL",
   "roles": [
    {
     "kind": "noun",
     "of": "PISTOL"
    },
    {
     "kind": "noun",
     "of": "INSIDE-GUN"
    },
    {
     "kind": "noun",
     "of": "OUTSIDE-GUN"
    }
   ]
  },
  "ROSCOE": {
   "word": "ROSCOE",
   "roles": [
    {
     "kind": "noun",
     "of": "PISTOL"
    }
   ]
  },
  "SNUB-NOSED": {
   "word": "SNUB-NOSED",
   "roles": [
    {
     "kind": "adjective",
     "of": "PISTOL"
    }
   ]
  },
  "CUFFS": {
   "word": "CUFFS",
   "roles": [
    {
     "kind": "noun",
     "of": "HANDCUFFS"
    }
   ]
  },
  "NIPPERS": {
   "word": "NIPPERS",
   "roles": [
    {
     "kind": "noun",
     "of": "HANDCUFFS"
    }
   ]
  },
  "HOUSE": {
   "word": "HOUSE",
   "roles": [
    {
     "kind": "noun",
     "of": "HOUSE"
    },
    {
     "kind": "adjective",
     "of": "PHONG-KEYS"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-HOUSE"
    }
   ]
  },
  "FENCE": {
   "word": "FENCE",
   "roles": [
    {
     "kind": "noun",
     "of": "FENCE"
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
  "MUD": {
   "word": "MUD",
   "roles": [
    {
     "kind": "noun",
     "of": "GROUND"
    },
    {
     "kind": "noun",
     "of": "MUDDY-SHOES"
    }
   ]
  },
  "AREA": {
   "word": "AREA",
   "roles": [
    {
     "kind": "noun",
     "of": "GROUND"
    },
    {
     "kind": "noun",
     "of": "FLOOR"
    }
   ]
  },
  "MUDDY": {
   "word": "MUDDY",
   "roles": [
    {
     "kind": "adjective",
     "of": "GROUND"
    },
    {
     "kind": "adjective",
     "of": "OUTSIDE-GUN"
    },
    {
     "kind": "adjective",
     "of": "MUDDY-SHOES"
    }
   ]
  },
  "FLOOR": {
   "word": "FLOOR",
   "roles": [
    {
     "kind": "noun",
     "of": "FLOOR"
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
  "RESTAURANT": {
   "word": "RESTAURANT",
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
    }
   ]
  },
  "BOTTLE": {
   "word": "BOTTLE",
   "roles": [
    {
     "kind": "noun",
     "of": "SCOTCH"
    },
    {
     "kind": "noun",
     "of": "BOURBON"
    }
   ]
  },
  "SCOTCH": {
   "word": "SCOTCH",
   "roles": [
    {
     "kind": "noun",
     "of": "SCOTCH"
    },
    {
     "kind": "adjective",
     "of": "SCOTCH"
    }
   ]
  },
  "WHISKY": {
   "word": "WHISKY",
   "roles": [
    {
     "kind": "noun",
     "of": "SCOTCH"
    },
    {
     "kind": "noun",
     "of": "BOURBON"
    }
   ]
  },
  "WHISKEY": {
   "word": "WHISKEY",
   "roles": [
    {
     "kind": "noun",
     "of": "SCOTCH"
    },
    {
     "kind": "noun",
     "of": "BOURBON"
    }
   ]
  },
  "TEACHER": {
   "word": "TEACHER",
   "roles": [
    {
     "kind": "adjective",
     "of": "SCOTCH"
    }
   ]
  },
  "BOURBON": {
   "word": "BOURBON",
   "roles": [
    {
     "kind": "noun",
     "of": "BOURBON"
    },
    {
     "kind": "adjective",
     "of": "BOURBON"
    }
   ]
  },
  "JACK": {
   "word": "JACK",
   "roles": [
    {
     "kind": "adjective",
     "of": "BOURBON"
    }
   ]
  },
  "DANIEL": {
   "word": "DANIEL",
   "roles": [
    {
     "kind": "adjective",
     "of": "BOURBON"
    }
   ]
  },
  "COCKTAIL": {
   "word": "COCKTAIL",
   "roles": [
    {
     "kind": "noun",
     "of": "DRINK"
    }
   ]
  },
  "BELT": {
   "word": "BELT",
   "roles": [
    {
     "kind": "noun",
     "of": "DRINK"
    }
   ]
  },
  "CIGARETTE": {
   "word": "CIGARETTE",
   "roles": [
    {
     "kind": "noun",
     "of": "CIGARETTE"
    }
   ]
  },
  "WEED": {
   "word": "WEED",
   "roles": [
    {
     "kind": "noun",
     "of": "CIGARETTE"
    }
   ]
  },
  "CAMEL": {
   "word": "CAMEL",
   "roles": [
    {
     "kind": "noun",
     "of": "CIGARETTE"
    }
   ]
  },
  "NOTE": {
   "word": "NOTE",
   "roles": [
    {
     "kind": "noun",
     "of": "THREAT-NOTE"
    }
   ]
  },
  "WRITTEN": {
   "word": "WRITTEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "THREAT-NOTE"
    }
   ]
  },
  "HAND-WRITTEN": {
   "word": "HAND-WRITTEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "THREAT-NOTE"
    }
   ]
  },
  "THREAT": {
   "word": "THREAT",
   "roles": [
    {
     "kind": "adjective",
     "of": "THREAT-NOTE"
    },
    {
     "kind": "noun",
     "of": "DANGER"
    }
   ]
  },
  "FRAGMENT": {
   "word": "FRAGMENT",
   "roles": [
    {
     "kind": "noun",
     "of": "BROKEN-GLASS"
    }
   ]
  },
  "SHARD": {
   "word": "SHARD",
   "roles": [
    {
     "kind": "noun",
     "of": "BROKEN-GLASS"
    }
   ]
  },
  "BROKEN": {
   "word": "BROKEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "BROKEN-GLASS"
    }
   ]
  },
  "BROOM": {
   "word": "BROOM",
   "roles": [
    {
     "kind": "noun",
     "of": "BROOM"
    }
   ]
  },
  "HANDGUN": {
   "word": "HANDGUN",
   "roles": [
    {
     "kind": "noun",
     "of": "INSIDE-GUN"
    },
    {
     "kind": "noun",
     "of": "OUTSIDE-GUN"
    }
   ]
  },
  "HEATER": {
   "word": "HEATER",
   "roles": [
    {
     "kind": "noun",
     "of": "INSIDE-GUN"
    },
    {
     "kind": "noun",
     "of": "OUTSIDE-GUN"
    }
   ]
  },
  "NEW": {
   "word": "NEW",
   "roles": [
    {
     "kind": "adjective",
     "of": "INSIDE-GUN"
    }
   ]
  },
  "HIDDEN": {
   "word": "HIDDEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "INSIDE-GUN"
    }
   ]
  },
  "OLD": {
   "word": "OLD",
   "roles": [
    {
     "kind": "adjective",
     "of": "OUTSIDE-GUN"
    }
   ]
  },
  "SHOT": {
   "word": "SHOT",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-SHOT"
    }
   ]
  },
  "GUNSHOT": {
   "word": "GUNSHOT",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-SHOT"
    }
   ]
  },
  "SHOOTING": {
   "word": "SHOOTING",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-SHOT"
    }
   ]
  },
  "EXPLOSION": {
   "word": "EXPLOSION",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-SHOT"
    }
   ]
  },
  "REPORT": {
   "word": "REPORT",
   "roles": [
    {
     "kind": "noun",
     "of": "MEDICAL-REPORT"
    }
   ]
  },
  "MEDICAL": {
   "word": "MEDICAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "MEDICAL-REPORT"
    }
   ]
  },
  "AUTOPSY": {
   "word": "AUTOPSY",
   "roles": [
    {
     "kind": "noun",
     "of": "AUTOPSY"
    }
   ]
  },
  "KEY": {
   "word": "KEY",
   "roles": [
    {
     "kind": "noun",
     "of": "CLOCK-KEY"
    },
    {
     "kind": "noun",
     "of": "PHONG-KEYS"
    }
   ]
  },
  "KEYS": {
   "word": "KEYS",
   "roles": [
    {
     "kind": "noun",
     "of": "PHONG-KEYS"
    }
   ]
  },
  "HANDWRITING": {
   "word": "HANDWRITING",
   "roles": [
    {
     "kind": "noun",
     "of": "HANDWRITING"
    }
   ]
  },
  "WRITING": {
   "word": "WRITING",
   "roles": [
    {
     "kind": "noun",
     "of": "HANDWRITING"
    }
   ]
  },
  "MURDER": {
   "word": "MURDER",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-MURDER"
    }
   ]
  },
  "KILLING": {
   "word": "KILLING",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-MURDER"
    },
    {
     "kind": "noun",
     "of": "RANDOM-CRIME"
    }
   ]
  },
  "CRIME": {
   "word": "CRIME",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-MURDER"
    },
    {
     "kind": "noun",
     "of": "RANDOM-CRIME"
    }
   ]
  },
  "SUICIDE": {
   "word": "SUICIDE",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-SUICIDE"
    }
   ]
  },
  "CONSPIRACY": {
   "word": "CONSPIRACY",
   "roles": [
    {
     "kind": "noun",
     "of": "RANDOM-CRIME"
    }
   ]
  },
  "EUTHANASIA": {
   "word": "EUTHANASIA",
   "roles": [
    {
     "kind": "noun",
     "of": "RANDOM-CRIME"
    }
   ]
  },
  "MERCY": {
   "word": "MERCY",
   "roles": [
    {
     "kind": "adjective",
     "of": "RANDOM-CRIME"
    }
   ]
  },
  "ASSOCIATES": {
   "word": "ASSOCIATES",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-PTA"
    }
   ]
  },
  "COMPANY": {
   "word": "COMPANY",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-PTA"
    }
   ]
  },
  "PTA": {
   "word": "PTA",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-PTA"
    }
   ]
  },
  "PACIFIC": {
   "word": "PACIFIC",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-PTA"
    }
   ]
  },
  "TRADE": {
   "word": "TRADE",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-PTA"
    }
   ]
  },
  "DANGER": {
   "word": "DANGER",
   "roles": [
    {
     "kind": "noun",
     "of": "DANGER"
    }
   ]
  },
  "WRONG": {
   "word": "WRONG",
   "roles": [
    {
     "kind": "noun",
     "of": "DANGER"
    }
   ]
  },
  "PROBLEM": {
   "word": "PROBLEM",
   "roles": [
    {
     "kind": "noun",
     "of": "DANGER"
    }
   ]
  },
  "WEATHER": {
   "word": "WEATHER",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-WEATHER"
    }
   ]
  },
  "CLIMATE": {
   "word": "CLIMATE",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-WEATHER"
    }
   ]
  },
  "TELEPHONE": {
   "word": "TELEPHONE",
   "roles": [
    {
     "kind": "noun",
     "of": "TELEPHONE"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-CALL"
    }
   ]
  },
  "RECEIVER": {
   "word": "RECEIVER",
   "roles": [
    {
     "kind": "noun",
     "of": "TELEPHONE"
    }
   ]
  },
  "CORONER": {
   "word": "CORONER",
   "roles": [
    {
     "kind": "noun",
     "of": "CORONER"
    }
   ]
  },
  "DOCTOR": {
   "word": "DOCTOR",
   "roles": [
    {
     "kind": "noun",
     "of": "CORONER"
    }
   ]
  },
  "AMBULANCE": {
   "word": "AMBULANCE",
   "roles": [
    {
     "kind": "noun",
     "of": "CORONER"
    }
   ]
  },
  "MORGUE": {
   "word": "MORGUE",
   "roles": [
    {
     "kind": "noun",
     "of": "CORONER"
    }
   ]
  },
  "BLACK": {
   "word": "BLACK",
   "roles": [
    {
     "kind": "adjective",
     "of": "BLACK-WIRE"
    }
   ]
  },
  "WHITE": {
   "word": "WHITE",
   "roles": [
    {
     "kind": "adjective",
     "of": "WHITE-WIRE"
    }
   ]
  },
  "AFFAIR": {
   "word": "AFFAIR",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-AFFAIR"
    }
   ]
  },
  "LOVE": {
   "word": "LOVE",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-AFFAIR"
    }
   ]
  },
  "BOOT": {
   "word": "BOOT",
   "roles": [
    {
     "kind": "noun",
     "of": "MUDDY-SHOES"
    }
   ]
  },
  "BOOTS": {
   "word": "BOOTS",
   "roles": [
    {
     "kind": "noun",
     "of": "MUDDY-SHOES"
    }
   ]
  },
  "DIRTY": {
   "word": "DIRTY",
   "roles": [
    {
     "kind": "adjective",
     "of": "MUDDY-SHOES"
    }
   ]
  },
  "ADOBE": {
   "word": "ADOBE",
   "roles": [
    {
     "kind": "adjective",
     "of": "MUDDY-SHOES"
    }
   ]
  },
  "CHAIRS": {
   "word": "CHAIRS",
   "roles": [
    {
     "kind": "noun",
     "of": "CHAIR"
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
  "LEFT": {
   "word": "LEFT",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-CALL"
    }
   ]
  },
  "RIGHT": {
   "word": "RIGHT",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-CALL"
    }
   ]
  },
  "MONEY": {
   "word": "MONEY",
   "roles": [
    {
     "kind": "noun",
     "of": "MONEY"
    }
   ]
  },
  "LOOT": {
   "word": "LOOT",
   "roles": [
    {
     "kind": "noun",
     "of": "MONEY"
    }
   ]
  },
  "PAYOFF": {
   "word": "PAYOFF",
   "roles": [
    {
     "kind": "noun",
     "of": "MONEY"
    }
   ]
  },
  "BRIBE": {
   "word": "BRIBE",
   "roles": [
    {
     "kind": "noun",
     "of": "MONEY"
    }
   ]
  },
  "WILL": {
   "word": "WILL",
   "roles": [
    {
     "kind": "noun",
     "of": "WILL"
    }
   ]
  },
  "TESTAMENT": {
   "word": "TESTAMENT",
   "roles": [
    {
     "kind": "noun",
     "of": "WILL"
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
  "TUMOR": {
   "word": "TUMOR",
   "roles": [
    {
     "kind": "noun",
     "of": "TUMOR"
    }
   ]
  },
  "TUMOUR": {
   "word": "TUMOUR",
   "roles": [
    {
     "kind": "noun",
     "of": "TUMOR"
    }
   ]
  },
  "CANCER": {
   "word": "CANCER",
   "roles": [
    {
     "kind": "noun",
     "of": "TUMOR"
    }
   ]
  },
  "CARCINOMA": {
   "word": "CARCINOMA",
   "roles": [
    {
     "kind": "noun",
     "of": "TUMOR"
    }
   ]
  },
  "ADVANCED": {
   "word": "ADVANCED",
   "roles": [
    {
     "kind": "adjective",
     "of": "TUMOR"
    }
   ]
  },
  "STOMACH": {
   "word": "STOMACH",
   "roles": [
    {
     "kind": "adjective",
     "of": "TUMOR"
    }
   ]
  },
  "BODY": {
   "word": "BODY",
   "roles": [
    {
     "kind": "noun",
     "of": "CORPSE"
    }
   ]
  },
  "CORPSE": {
   "word": "CORPSE",
   "roles": [
    {
     "kind": "noun",
     "of": "CORPSE"
    }
   ]
  },
  "WOUND": {
   "word": "WOUND",
   "roles": [
    {
     "kind": "noun",
     "of": "CORPSE"
    }
   ]
  },
  "BLOODY": {
   "word": "BLOODY",
   "roles": [
    {
     "kind": "adjective",
     "of": "CORPSE"
    }
   ]
  },
  "TODAY": {
   "word": "TODAY",
   "roles": [
    {
     "kind": "noun",
     "of": "TODAY"
    }
   ]
  },
  "DATE": {
   "word": "DATE",
   "roles": [
    {
     "kind": "noun",
     "of": "TODAY"
    }
   ]
  },
  "DAY": {
   "word": "DAY",
   "roles": [
    {
     "kind": "noun",
     "of": "TODAY"
    }
   ]
  },
  "WARRANT": {
   "word": "WARRANT",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-WARRANT"
    }
   ]
  },
  "STUB": {
   "word": "STUB",
   "roles": [
    {
     "kind": "noun",
     "of": "STUB"
    }
   ]
  },
  "WATER": {
   "word": "WATER",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-WATER"
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
  "CAN": {
   "word": "CAN",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-CAN-OF-WORMS"
    }
   ]
  },
  "WORM": {
   "word": "WORM",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-CAN-OF-WORMS"
    }
   ]
  },
  "WORMS": {
   "word": "WORMS",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-CAN-OF-WORMS"
    }
   ]
  },
  "MEAL": {
   "word": "MEAL",
   "roles": [
    {
     "kind": "noun",
     "of": "RANDOM-MEAL"
    }
   ]
  },
  "DINNER": {
   "word": "DINNER",
   "roles": [
    {
     "kind": "noun",
     "of": "RANDOM-MEAL"
    }
   ]
  },
  "BREAKFAST": {
   "word": "BREAKFAST",
   "roles": [
    {
     "kind": "noun",
     "of": "RANDOM-MEAL"
    }
   ]
  },
  "SNACK": {
   "word": "SNACK",
   "roles": [
    {
     "kind": "noun",
     "of": "RANDOM-MEAL"
    }
   ]
  },
  "FILM": {
   "word": "FILM",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-FILM"
    }
   ]
  }
 },
 "files": [
  "clock.zil",
  "events.zil",
  "m2.zil",
  "macros.zil",
  "main.zil",
  "parser.zil",
  "people.zil",
  "places.zil",
  "sample.zil",
  "syntax.zil",
  "things.zil",
  "verbs.zil",
  "witness.zil"
 ]
};
