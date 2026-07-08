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
  "POLICE-LAB": {
   "name": "POLICE-LAB",
   "file": "people.zil",
   "line": 4547,
   "endLine": 4549,
   "desc": "Police Laboratory",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
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
   "source": "<ROOM POLICE-LAB\n      (IN ROOMS)\n      (DESC \"Police Laboratory\")>",
   "referencedBy": [
    "I-BURNED",
    "DETECTIVE-F",
    "CHECK-GLASS",
    "CHECK-JUNK",
    "DUFFY-TO-LAB",
    "DETECTIVE-FINDS-BODY?",
    "I-START-ARREST",
    "I-AMBULANCE",
    "I-BURN-OBJ"
   ]
  },
  "CIRCLE": {
   "name": "CIRCLE",
   "file": "places.zil",
   "line": 20,
   "endLine": 37,
   "desc": "Circular Driveway",
   "ldesc": "This is the circular driveway in front of the house. Many cars are parked\nhere, and the drive is somewhat blocked. To the south is a stand of oaks,\nto the north is the front porch of the house. Piled along the border of\nthe driveway are hundreds of pumpkins. Many of them are carved and lighted,\nothers unadorned.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "DRIVEWAY",
    "CIRCLE"
   ],
   "adjectives": [
    "CIRCULAR"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "OAKS",
    "OAKS-PSEUDO"
   ],
   "otherProps": {
    "STATION": [
     "CIRCLE"
    ],
    "LINE": [
     "4"
    ]
   },
   "exits": [
    {
     "to": "PORCH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "PORCH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "OUTSIDE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "WEST-OF-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "PUMPKIN"
   ],
   "source": "<ROOM CIRCLE\n      (IN ROOMS)\n      (SYNONYM DRIVEWAY CIRCLE)\n      (ADJECTIVE CIRCULAR)\n      (DESC \"Circular Driveway\")\n      (LDESC\n\"This is the circular driveway in front of the house. Many cars are parked\nhere, and the drive is somewhat blocked. To the south is a stand of oaks,\nto the north is the front porch of the house. Piled along the border of\nthe driveway are hundreds of pumpkins. Many of them are carved and lighted,\nothers unadorned.\")\n      (NORTH TO PORCH)\n      (UP TO PORCH)\n      (EAST TO OUTSIDE)\n      (WEST TO WEST-OF-HOUSE)\n      (STATION CIRCLE)\n      (LINE 4 ;OUTSIDE-LINE-C)\n      (PSEUDO \"OAKS\" OAKS-PSEUDO)>",
   "referencedBy": [
    "G-ALICIA",
    "G-DETECTIVE",
    "I-POLICE-ARRIVE",
    "I-AMBULANCE"
   ]
  },
  "PORCH": {
   "name": "PORCH",
   "file": "places.zil",
   "line": 64,
   "endLine": 84,
   "desc": "Front Porch",
   "ldesc": "This is a screened porch covering much of the front of the house.\nThere are potted plants and lawn chairs arranged to suggest\nconversational groupings. To the south you can see the circular\ndriveway, and beyond, barely visible in the rain and fog, is\na stand of oaks which screen the house on this side.\nThe front lights are on, and the doorbell to the left of the front\ndoor is clearly visible.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "PORCH"
   ],
   "adjectives": [
    "FRONT"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "FRONT-DOOR",
    "GLOBAL-CHAIR",
    "GLOBAL-PLANTS"
   ],
   "pseudo": [
    "OAKS",
    "OAKS-PSEUDO"
   ],
   "otherProps": {
    "STATION": [
     "CIRCLE"
    ],
    "LINE": [
     "4"
    ]
   },
   "exits": [
    {
     "to": "HALL",
     "kind": "conditional",
     "condition": "FRONT-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "HALL",
     "kind": "conditional",
     "condition": "FRONT-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "CIRCLE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "CIRCLE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "DOORBELL"
   ],
   "source": "<ROOM PORCH\n      (IN ROOMS)\n      (SYNONYM PORCH)\n      (ADJECTIVE FRONT)\n      (DESC \"Front Porch\")\n      (LDESC\n\"This is a screened porch covering much of the front of the house.\nThere are potted plants and lawn chairs arranged to suggest\nconversational groupings. To the south you can see the circular\ndriveway, and beyond, barely visible in the rain and fog, is\na stand of oaks which screen the house on this side.\nThe front lights are on, and the doorbell to the left of the front\ndoor is clearly visible.\")\n      (NORTH TO HALL IF FRONT-DOOR IS OPEN)\n      (IN TO HALL IF FRONT-DOOR IS OPEN)\n      (DOWN TO CIRCLE)\n      (SOUTH TO CIRCLE)\n      (STATION CIRCLE)\n      (GLOBAL FRONT-DOOR GLOBAL-CHAIR GLOBAL-PLANTS)\n      (LINE 4 ;OUTSIDE-LINE-C)\n      (PSEUDO \"OAKS\" OAKS-PSEUDO)>",
   "referencedBy": [
    "G-ALICIA",
    "START-ALICIA",
    "G-DETECTIVE",
    "I-POLICE-ARRIVE",
    "I-AMBULANCE",
    "FRONT-DOOR-F",
    "GLOBAL-DOORBELL-F",
    "NEW-ARRIVAL-STUFF",
    "GLOBAL-PLANTS-F"
   ]
  },
  "HALL": {
   "name": "HALL",
   "file": "places.zil",
   "line": 222,
   "endLine": 243,
   "desc": "Entry Hall",
   "ldesc": "The front entry hall is dominated by two curving staircases which\nlead up to the second floor of the house. These have velvet ribbons\nacross them to keep the guests downstairs. In addition to the front\ndoor, which goes out to the porch, there are large double doors\nleading north and smaller doors leading east and west. The\nentry is sparsely furnished, imposing but not overpowering.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "HALL",
    "ENTRY"
   ],
   "adjectives": [
    "FRONT",
    "ENTRY"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WINDOW",
    "CURTAINS",
    "LH-DOOR",
    "MH-DOOR",
    "FRONT-DOOR",
    "STAIR",
    "VELVET-RIBBON"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "0"
    ],
    "STATION": [
     "HALLWAY-9"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-9",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "LIBRARY",
     "kind": "conditional",
     "condition": "LH-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MORNING-ROOM",
     "kind": "conditional",
     "condition": "MH-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "PORCH",
     "kind": "conditional",
     "condition": "FRONT-DOOR IS OPEN",
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
     "message": "There is a red velvet ribbon politely barring the way.",
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "There is a red velvet ribbon politely barring the way.",
     "dir": "NW"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "There is a red velvet ribbon politely barring the way.",
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM HALL\n      (IN ROOMS)\n      (SYNONYM HALL ENTRY)\n      (ADJECTIVE FRONT ENTRY)\n      (DESC \"Entry Hall\")\n      (LDESC\n\"The front entry hall is dominated by two curving staircases which\nlead up to the second floor of the house. These have velvet ribbons\nacross them to keep the guests downstairs. In addition to the front\ndoor, which goes out to the porch, there are large double doors\nleading north and smaller doors leading east and west. The\nentry is sparsely furnished, imposing but not overpowering.\")\n      (NORTH TO HALLWAY-9)\n      (EAST TO LIBRARY IF LH-DOOR IS OPEN)\n      (WEST TO MORNING-ROOM IF MH-DOOR IS OPEN)\n      (SOUTH TO PORCH IF FRONT-DOOR IS OPEN)\n      (NE \"There is a red velvet ribbon politely barring the way.\")\n      (NW \"There is a red velvet ribbon politely barring the way.\")\n      (UP \"There is a red velvet ribbon politely barring the way.\")\n      (LINE 0 ;HALL-LINE-C)\n      (STATION HALLWAY-9)\n      (GLOBAL WINDOW CURTAINS LH-DOOR MH-DOOR FRONT-DOOR STAIR VELVET-RIBBON)>",
   "referencedBy": [
    "I-PARTY-OVER",
    "G-ALICIA",
    "G-BUTLER",
    "G-DETECTIVE",
    "I-AMBULANCE",
    "FRONT-DOOR-F",
    "GLOBAL-DOORBELL-F",
    "NEW-ARRIVAL-STUFF",
    "DOORBELL-F",
    "V-WALK-TO"
   ]
  },
  "MORNING-ROOM": {
   "name": "MORNING-ROOM",
   "file": "places.zil",
   "line": 275,
   "endLine": 289,
   "desc": "Morning Room",
   "ldesc": "This room is set up for receiving guests, casual conversation, and\ninformal entertaining. Doors lead east to the entry hall and north to\nthe hallway. Several windows grace the southern wall, and a telephone\nsits on a walnut secretary in one corner.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "ROOM"
   ],
   "adjectives": [
    "MORNING"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WINDOW",
    "CURTAINS",
    "TELEPHONE",
    "MORNING-ROOM-DOOR",
    "MH-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "0"
    ],
    "STATION": [
     "HALLWAY-3"
    ]
   },
   "exits": [
    {
     "to": "HALL",
     "kind": "conditional",
     "condition": "MH-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "HALLWAY-3",
     "kind": "conditional",
     "condition": "MORNING-ROOM-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "WRITING-DESK",
    "WINDOW-SEAT"
   ],
   "source": "<ROOM MORNING-ROOM\n      (IN ROOMS)\n      (SYNONYM ROOM)\n      (ADJECTIVE MORNING)\n      (DESC \"Morning Room\")\n      (LDESC\n\"This room is set up for receiving guests, casual conversation, and\ninformal entertaining. Doors lead east to the entry hall and north to\nthe hallway. Several windows grace the southern wall, and a telephone\nsits on a walnut secretary in one corner.\")\n      (EAST TO HALL IF MH-DOOR IS OPEN)\n      (NORTH TO HALLWAY-3 IF MORNING-ROOM-DOOR IS OPEN)\n      (LINE 0 ;HALL-LINE-C)\n      (STATION HALLWAY-3)\n      (GLOBAL WINDOW CURTAINS TELEPHONE MORNING-ROOM-DOOR MH-DOOR)>",
   "referencedBy": []
  },
  "SITTING-ROOM": {
   "name": "SITTING-ROOM",
   "file": "places.zil",
   "line": 385,
   "endLine": 399,
   "desc": "Sitting Room",
   "ldesc": "This is Ms. Ashcroft's sitting room. The room in furnished with formal\nbut comfortable looking chairs, a small couch, and a large oriental\nrug. A telephone is on one end table. The door is to the north and leads\nback into the hall.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "ROOM"
   ],
   "adjectives": [
    "SITTING"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WINDOW",
    "CURTAINS",
    "TELEPHONE",
    "GLOBAL-CHAIR",
    "GLOBAL-SOFA",
    "GLOBAL-RUG"
   ],
   "pseudo": [],
   "otherProps": {
    "STATION": [
     "HALLWAY-1"
    ],
    "LINE": [
     "0"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-1",
     "kind": "conditional",
     "condition": "SITTING-ROOM-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "RICHARD",
    "LINDA",
    "END-TABLE"
   ],
   "source": "<ROOM SITTING-ROOM\n      (IN ROOMS)\n      (SYNONYM ROOM)\n      (ADJECTIVE SITTING)\n      (DESC \"Sitting Room\")\n      (LDESC\n\"This is Ms. Ashcroft's sitting room. The room in furnished with formal\nbut comfortable looking chairs, a small couch, and a large oriental\nrug. A telephone is on one end table. The door is to the north and leads\nback into the hall.\")\n      (NORTH TO HALLWAY-1 IF SITTING-ROOM-DOOR IS OPEN)\n      (STATION HALLWAY-1)\n      (LINE 0 ;HALL-LINE-C)\n      (GLOBAL WINDOW CURTAINS TELEPHONE GLOBAL-CHAIR\n       \t      GLOBAL-SOFA GLOBAL-RUG)>",
   "referencedBy": [
    "G-MICHAEL",
    "I-FLEE",
    "G-ALICIA"
   ]
  },
  "HALLWAY-1": {
   "name": "HALLWAY-1",
   "file": "places.zil",
   "line": 420,
   "endLine": 433,
   "desc": "West End of Hallway",
   "ldesc": "This is the west end of the main hallway. To the west is a door leading\nout of the house, and there are also doors north and south.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WEST-DOOR",
    "MEDIA-ROOM-DOOR",
    "WINDOW",
    "CURTAINS",
    "SITTING-ROOM-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "0"
    ],
    "STATION": [
     "HALLWAY-1"
    ],
    "CORRIDOR": [
     "1"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "WEST-OF-HOUSE",
     "kind": "conditional",
     "condition": "WEST-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MEDIA-ROOM",
     "kind": "conditional",
     "condition": "MEDIA-ROOM-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SITTING-ROOM",
     "kind": "conditional",
     "condition": "SITTING-ROOM-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HALLWAY-1\n      (IN ROOMS)\n      (DESC \"West End of Hallway\")\n      (LDESC\n\"This is the west end of the main hallway. To the west is a door leading\nout of the house, and there are also doors north and south.\")\n      (EAST TO HALLWAY-2)\n      (WEST TO WEST-OF-HOUSE IF WEST-DOOR IS OPEN)\n      (NORTH TO MEDIA-ROOM IF MEDIA-ROOM-DOOR IS OPEN)\n      (SOUTH TO SITTING-ROOM IF SITTING-ROOM-DOOR IS OPEN)\n      (GLOBAL WEST-DOOR MEDIA-ROOM-DOOR WINDOW CURTAINS SITTING-ROOM-DOOR)\n      (LINE 0 ;HALL-LINE-C)\n      (STATION HALLWAY-1)\n      (CORRIDOR 1)>",
   "referencedBy": [
    "I-ALICIA-SNEAKS"
   ]
  },
  "HALLWAY-2": {
   "name": "HALLWAY-2",
   "file": "places.zil",
   "line": 435,
   "endLine": 448,
   "desc": "Hall Near Bath",
   "ldesc": "Near the west end of the hallway, doors lead north to a\nbathroom and south to a linen closet.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LINEN-CLOSET-DOOR",
    "WEST-BATH-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "0"
    ],
    "STATION": [
     "HALLWAY-2"
    ],
    "CORRIDOR": [
     "1"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "HALLWAY-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "WEST-BATH",
     "kind": "conditional",
     "condition": "WEST-BATH-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "LINEN-CLOSET",
     "kind": "conditional",
     "condition": "LINEN-CLOSET-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HALLWAY-2\n      (IN ROOMS)\n      (DESC \"Hall Near Bath\")\n      (LDESC\n\"Near the west end of the hallway, doors lead north to a\nbathroom and south to a linen closet.\")\n      (EAST TO HALLWAY-3)\n      (WEST TO HALLWAY-1)\n      (NORTH TO WEST-BATH IF WEST-BATH-DOOR IS OPEN)\n      (SOUTH TO LINEN-CLOSET IF LINEN-CLOSET-DOOR IS OPEN)\n      (GLOBAL LINEN-CLOSET-DOOR WEST-BATH-DOOR)\n      (LINE 0 ;HALL-LINE-C)\n      (STATION HALLWAY-2)\n      (CORRIDOR 1)>",
   "referencedBy": [
    "I-ALICIA-SNEAKS"
   ]
  },
  "HALLWAY-3": {
   "name": "HALLWAY-3",
   "file": "places.zil",
   "line": 450,
   "endLine": 463,
   "desc": "Hall at Office",
   "ldesc": "Off the hallway here are the office to the north and the morning room\nto the south.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "SOUTH-OFFICE-DOOR",
    "MORNING-ROOM-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "0"
    ],
    "STATION": [
     "HALLWAY-3"
    ],
    "CORRIDOR": [
     "1"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-4",
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
     "dir": "WEST"
    },
    {
     "to": "OFFICE",
     "kind": "conditional",
     "condition": "SOUTH-OFFICE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MORNING-ROOM",
     "kind": "conditional",
     "condition": "MORNING-ROOM-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HALLWAY-3\n      (IN ROOMS)\n      (DESC \"Hall at Office\")\n      (LDESC\n\"Off the hallway here are the office to the north and the morning room\nto the south.\")\n      (EAST TO HALLWAY-4)\n      (WEST TO HALLWAY-2)\n      (NORTH TO OFFICE IF SOUTH-OFFICE-DOOR IS OPEN)\n      (SOUTH TO MORNING-ROOM IF MORNING-ROOM-DOOR IS OPEN)\n      (GLOBAL SOUTH-OFFICE-DOOR MORNING-ROOM-DOOR)\n      (LINE 0 ;HALL-LINE-C)\n      (STATION HALLWAY-3)\n      (CORRIDOR 1)>",
   "referencedBy": [
    "G-MICHAEL",
    "TELL-THREE-ARRIVE",
    "GANGS-ALL-HERE",
    "I-ARGUMENT",
    "I-ALICIA-SNEAKS",
    "I-MICHAEL-TO-GARAGE",
    "G-COL-MARSTON",
    "G-COCHRANE"
   ]
  },
  "HALLWAY-4": {
   "name": "HALLWAY-4",
   "file": "places.zil",
   "line": 465,
   "endLine": 476,
   "desc": "Hall at Corner",
   "ldesc": "The hallway makes an elbow bend here. In the distance to the north and\nwest are doors leading outside. North of here another hall leads\neast.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "0"
    ],
    "STATION": [
     "HALLWAY-4"
    ],
    "CORRIDOR": [
     "%",
     "<+ 1 2>"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "HALLWAY-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HALLWAY-4\n      (IN ROOMS)\n      (DESC \"Hall at Corner\")\n      (LDESC\n\"The hallway makes an elbow bend here. In the distance to the north and\nwest are doors leading outside. North of here another hall leads\neast.\")\n      (WEST TO HALLWAY-3)\n      (NORTH TO HALLWAY-5)\n      (LINE 0 ;HALL-LINE-C)\n      (STATION HALLWAY-4)\n      (CORRIDOR %<+ 1 2>)>",
   "referencedBy": [
    "I-ALICIA-SNEAKS"
   ]
  },
  "HALLWAY-5": {
   "name": "HALLWAY-5",
   "file": "places.zil",
   "line": 478,
   "endLine": 488,
   "desc": "Hallway Intersection",
   "ldesc": "Here a north-south hallway and a hallway to the east meet.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "0"
    ],
    "STATION": [
     "HALLWAY-5"
    ],
    "CORRIDOR": [
     "%",
     "<+ 2 4>"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "HALLWAY-6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "HALLWAY-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HALLWAY-5\n      (IN ROOMS)\n      (DESC \"Hallway Intersection\")\n      (LDESC\n\"Here a north-south hallway and a hallway to the east meet.\")\n      (EAST TO HALLWAY-8)\n      (NORTH TO HALLWAY-6)\n      (SOUTH TO HALLWAY-4)\n      (LINE 0 ;HALL-LINE-C)\n      (STATION HALLWAY-5)\n      (CORRIDOR %<+ 2 4>)>",
   "referencedBy": []
  },
  "HALLWAY-6": {
   "name": "HALLWAY-6",
   "file": "places.zil",
   "line": 490,
   "endLine": 502,
   "desc": "Hall Near Coat Closet",
   "ldesc": "This is a north-south hallway leading to an outer door further north.\nTo the east is a coat closet.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WEST-CLOSET-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "3"
    ],
    "STATION": [
     "HALLWAY-6"
    ],
    "CORRIDOR": [
     "2"
    ]
   },
   "exits": [
    {
     "to": "WEST-COAT-CLOSET",
     "kind": "conditional",
     "condition": "WEST-CLOSET-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "HALLWAY-7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "HALLWAY-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HALLWAY-6\n      (IN ROOMS)\n      (DESC \"Hall Near Coat Closet\")\n      (LDESC\n\"This is a north-south hallway leading to an outer door further north.\nTo the east is a coat closet.\")\n      (EAST TO WEST-COAT-CLOSET IF WEST-CLOSET-DOOR IS OPEN)\n      (NORTH TO HALLWAY-7)\n      (SOUTH TO HALLWAY-5)\n      (LINE 3 ;GARAGE-LINE-C)\n      (STATION HALLWAY-6)\n      (GLOBAL WEST-CLOSET-DOOR)\n      (CORRIDOR 2)>",
   "referencedBy": []
  },
  "WEST-COAT-CLOSET": {
   "name": "WEST-COAT-CLOSET",
   "file": "places.zil",
   "line": 504,
   "endLine": 515,
   "desc": "West Coat Closet",
   "ldesc": "This is a walk-in coat closet that doesn't seem to be in use this\nevening.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "CLOSET"
   ],
   "adjectives": [
    "COAT",
    "WEST"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WEST-CLOSET-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "STATION": [
     "HALLWAY-6"
    ],
    "LINE": [
     "3"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-6",
     "kind": "conditional",
     "condition": "WEST-CLOSET-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "HAMPER"
   ],
   "source": "<ROOM WEST-COAT-CLOSET\n      (IN ROOMS)\n      (SYNONYM CLOSET)\n      (ADJECTIVE COAT WEST)\n      (DESC \"West Coat Closet\")\n      (LDESC\n\"This is a walk-in coat closet that doesn't seem to be in use this\nevening.\")\n      (WEST TO HALLWAY-6 IF WEST-CLOSET-DOOR IS OPEN)\n      (STATION HALLWAY-6)\n      (GLOBAL WEST-CLOSET-DOOR)\n      (LINE 3 ;GARAGE-LINE-C)>",
   "referencedBy": [
    "HAMPER-DESC-F",
    "V-HANG-UP"
   ]
  },
  "HALLWAY-7": {
   "name": "HALLWAY-7",
   "file": "places.zil",
   "line": 555,
   "endLine": 569,
   "desc": "North Hall",
   "ldesc": "The north end of the hall, at an outer door. A landing leading to a stairway\nis east. You can see a covered walkway through a\njalousied door to the north.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "NORTH-DOOR",
    "WINDOW",
    "STAIR",
    "VELVET-RIBBON"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "3"
    ],
    "STATION": [
     "HALLWAY-7"
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
     "message": "There is a red velvet ribbon politely barring the way.",
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "There is a red velvet ribbon politely barring the way.",
     "dir": "UP"
    },
    {
     "to": "WALKWAY",
     "kind": "conditional",
     "condition": "NORTH-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "HALLWAY-6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HALLWAY-7\n      (IN ROOMS)\n      (DESC \"North Hall\")\n      (LDESC\n\"The north end of the hall, at an outer door. A landing leading to a stairway\nis east. You can see a covered walkway through a\njalousied door to the north.\")\n      (EAST \"There is a red velvet ribbon politely barring the way.\")\n      (UP \"There is a red velvet ribbon politely barring the way.\")\n      (NORTH TO WALKWAY IF NORTH-DOOR IS OPEN)\n      (SOUTH TO HALLWAY-6)\n      (GLOBAL NORTH-DOOR WINDOW STAIR VELVET-RIBBON)\n      (LINE 3 ;GARAGE-LINE-C)\n      (STATION HALLWAY-7)\n      (CORRIDOR 2)>",
   "referencedBy": [
    "I-ALICIA-SNEAKS"
   ]
  },
  "HALLWAY-8": {
   "name": "HALLWAY-8",
   "file": "places.zil",
   "line": 571,
   "endLine": 583,
   "desc": "Front Hall West",
   "ldesc": "The front hall runs south of the living room here, and a large doorway\nopens north into that room. East and south is the way back into the\nentry hall. Another hall intersects to the west.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "0"
    ],
    "STATION": [
     "HALLWAY-8"
    ],
    "CORRIDOR": [
     "4"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-9",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "HALLWAY-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "LIVING-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HALLWAY-8\n      (IN ROOMS)\n      (DESC \"Front Hall West\")\n      (LDESC\n\"The front hall runs south of the living room here, and a large doorway\nopens north into that room. East and south is the way back into the\nentry hall. Another hall intersects to the west.\")\n      (EAST TO HALLWAY-9)\n      (WEST TO HALLWAY-5)\n      (NORTH TO LIVING-ROOM)\n      (LINE 0 ;HALL-LINE-C)\n      (STATION HALLWAY-8)\n      (CORRIDOR 4)>",
   "referencedBy": []
  },
  "HALLWAY-9": {
   "name": "HALLWAY-9",
   "file": "places.zil",
   "line": 585,
   "endLine": 597,
   "desc": "Front Hall",
   "ldesc": "This is the front hall, which runs east and west.  Entrances to the\nliving room are east and west of here, and the entry hall is to the\nsouth.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "0"
    ],
    "STATION": [
     "HALLWAY-9"
    ],
    "CORRIDOR": [
     "4"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-10",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "HALLWAY-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "HALL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HALLWAY-9\n      (IN ROOMS)\n      (DESC \"Front Hall\")\n      (LDESC\n\"This is the front hall, which runs east and west.  Entrances to the\nliving room are east and west of here, and the entry hall is to the\nsouth.\")\n      (EAST TO HALLWAY-10)\n      (WEST TO HALLWAY-8)\n      (SOUTH TO HALL)\n      (LINE 0 ;HALL-LINE-C)\n      (STATION HALLWAY-9)\n      (CORRIDOR 4)>",
   "referencedBy": [
    "I-PARTY-OVER"
   ]
  },
  "HALLWAY-10": {
   "name": "HALLWAY-10",
   "file": "places.zil",
   "line": 599,
   "endLine": 610,
   "desc": "Front Hall East",
   "ldesc": "The front hall runs past an entrance to the living room here, to the\nnorth. Another hall intersects to the east.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "0"
    ],
    "STATION": [
     "HALLWAY-10"
    ],
    "CORRIDOR": [
     "4"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-11",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "HALLWAY-9",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "LIVING-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HALLWAY-10\n      (IN ROOMS)\n      (DESC \"Front Hall East\")\n      (LDESC\n\"The front hall runs past an entrance to the living room here, to the\nnorth. Another hall intersects to the east.\")\n      (EAST TO HALLWAY-11)\n      (WEST TO HALLWAY-9)\n      (NORTH TO LIVING-ROOM)\n      (LINE 0 ;HALL-LINE-C)\n      (STATION HALLWAY-10)\n      (CORRIDOR 4)>",
   "referencedBy": [
    "I-PARTY-OVER"
   ]
  },
  "HALLWAY-11": {
   "name": "HALLWAY-11",
   "file": "places.zil",
   "line": 612,
   "endLine": 623,
   "desc": "Long Hall Begins",
   "ldesc": "Here the front hall and a long north-south hall fronting the ballroom\nintersect. Another hall starts south of here and goes east.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "0"
    ],
    "STATION": [
     "HALLWAY-11"
    ],
    "CORRIDOR": [
     "%",
     "<+ 4 8>"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-10",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "HALLWAY-12",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "HALLWAY-16",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HALLWAY-11\n      (IN ROOMS)\n      (DESC \"Long Hall Begins\")\n      (LDESC\n\"Here the front hall and a long north-south hall fronting the ballroom\nintersect. Another hall starts south of here and goes east.\")\n      (WEST TO HALLWAY-10)\n      (NORTH TO HALLWAY-12)\n      (SOUTH TO HALLWAY-16)\n      (LINE 0 ;HALL-LINE-C)\n      (STATION HALLWAY-11)\n      (CORRIDOR %<+ 4 8>)>",
   "referencedBy": [
    "I-PARTY-OVER"
   ]
  },
  "HALLWAY-12": {
   "name": "HALLWAY-12",
   "file": "places.zil",
   "line": 625,
   "endLine": 640,
   "desc": "Long Hall South",
   "ldesc": "This is almost the southern end of the long north-south hall. A large doorway\nopens into the southern end of the ballroom. Another door on the west is to a\nsmall closet.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": "HALLWAY-12-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "EAST-CLOSET-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "0"
    ],
    "STATION": [
     "HALLWAY-12"
    ],
    "CORRIDOR": [
     "%",
     "<+ 8 128>"
    ]
   },
   "exits": [
    {
     "to": "BALLROOM-7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "EAST-COAT-CLOSET",
     "kind": "conditional",
     "condition": "EAST-CLOSET-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "HALLWAY-13",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "HALLWAY-11",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "BUTLER"
   ],
   "source": "<ROOM HALLWAY-12\n      (IN ROOMS)\n      (DESC \"Long Hall South\")\n      (LDESC\n\"This is almost the southern end of the long north-south hall. A large doorway\nopens into the southern end of the ballroom. Another door on the west is to a\nsmall closet.\")\n      (EAST TO BALLROOM-7)\n      (WEST TO EAST-COAT-CLOSET IF EAST-CLOSET-DOOR IS OPEN)\n      (NORTH TO HALLWAY-13)\n      (SOUTH TO HALLWAY-11)\n      (ACTION HALLWAY-12-F)\n      (LINE 0 ;HALL-LINE-C)\n      (STATION HALLWAY-12)\n      (GLOBAL EAST-CLOSET-DOOR)\n      (CORRIDOR %<+ 8 128>)>",
   "referencedBy": [
    "I-PARTY-OVER",
    "G-ALICIA",
    "HALLWAY-12-F"
   ]
  },
  "EAST-COAT-CLOSET": {
   "name": "EAST-COAT-CLOSET",
   "file": "places.zil",
   "line": 642,
   "endLine": 654,
   "desc": "East Coat Closet",
   "ldesc": "This is a large coat closet full of rather damp coats, overcoats, and\nraincoats.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "CLOSET"
   ],
   "adjectives": [
    "COAT",
    "EAST"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "EAST-CLOSET-DOOR"
   ],
   "pseudo": [
    "COATS",
    "COATS-PSEUDO",
    "RAINCOAT",
    "COATS-PSEUDO"
   ],
   "otherProps": {
    "STATION": [
     "HALLWAY-12"
    ],
    "LINE": [
     "0"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-12",
     "kind": "conditional",
     "condition": "EAST-CLOSET-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "YOUR-COAT"
   ],
   "source": "<ROOM EAST-COAT-CLOSET\n      (IN ROOMS)\n      (SYNONYM CLOSET)\n      (ADJECTIVE COAT EAST)\n      (DESC \"East Coat Closet\")\n      (LDESC\n\"This is a large coat closet full of rather damp coats, overcoats, and\nraincoats.\")\n      (EAST TO HALLWAY-12 IF EAST-CLOSET-DOOR IS OPEN)\n      (STATION HALLWAY-12)\n      (LINE 0 ;HALL-LINE-C)\n      (GLOBAL EAST-CLOSET-DOOR)\n      (PSEUDO \"COATS\" COATS-PSEUDO \"RAINCOAT\" COATS-PSEUDO)>",
   "referencedBy": [
    "NOT-ROPE-F",
    "G-ALICIA",
    "BUTLER-DESC-F",
    "G-BUTLER",
    "DUMP-COATS",
    "V-HANG-UP"
   ]
  },
  "HALLWAY-13": {
   "name": "HALLWAY-13",
   "file": "places.zil",
   "line": 764,
   "endLine": 778,
   "desc": "Hall Near Ballroom",
   "ldesc": "This is the middle of the long hall. To the east is a large doorway\nopening onto the ballroom, and to the west is a stairway leading up.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIR",
    "VELVET-RIBBON"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "0"
    ],
    "STATION": [
     "HALLWAY-13"
    ],
    "CORRIDOR": [
     "%",
     "<+ 8 64>"
    ]
   },
   "exits": [
    {
     "to": "BALLROOM-4",
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
     "message": "There is a red velvet ribbon politely barring the way.",
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "There is a red velvet ribbon politely barring the way.",
     "dir": "UP"
    },
    {
     "to": "HALLWAY-14",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "HALLWAY-12",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HALLWAY-13\n      (IN ROOMS)\n      (DESC \"Hall Near Ballroom\")\n      (LDESC\n\"This is the middle of the long hall. To the east is a large doorway\nopening onto the ballroom, and to the west is a stairway leading up.\")\n      (EAST TO BALLROOM-4)\n      (WEST \"There is a red velvet ribbon politely barring the way.\")\n      (UP \"There is a red velvet ribbon politely barring the way.\")\n      (NORTH TO HALLWAY-14)\n      (SOUTH TO HALLWAY-12)\n      (LINE 0 ;HALL-LINE-C)\n      (STATION HALLWAY-13)\n      (CORRIDOR %<+ 8 64>)\n      (GLOBAL STAIR VELVET-RIBBON)>",
   "referencedBy": []
  },
  "HALLWAY-14": {
   "name": "HALLWAY-14",
   "file": "places.zil",
   "line": 780,
   "endLine": 794,
   "desc": "Long Hall North",
   "ldesc": "Near the north end of the long hall a doorway opens into the ballroom,\nand to the west a sliding glass door opens out into the garden.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "OPENBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "SLIDING-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "0"
    ],
    "STATION": [
     "HALLWAY-14"
    ],
    "CORRIDOR": [
     "%",
     "<+ 8 32>"
    ]
   },
   "exits": [
    {
     "to": "BALLROOM-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "GARDEN",
     "kind": "conditional",
     "condition": "SLIDING-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "HALLWAY-15",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "HALLWAY-13",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HALLWAY-14\n      (IN ROOMS)\n      (DESC \"Long Hall North\")\n      (LDESC\n\"Near the north end of the long hall a doorway opens into the ballroom,\nand to the west a sliding glass door opens out into the garden.\")\n      (EAST TO BALLROOM-1)\n      (WEST TO GARDEN IF SLIDING-DOOR IS OPEN)\n      (NORTH TO HALLWAY-15)\n      (SOUTH TO HALLWAY-13)\n      (FLAGS OPENBIT)\n      (LINE 0 ;HALL-LINE-C)\n      (STATION HALLWAY-14)\n      (CORRIDOR %<+ 8 32>)\n      (GLOBAL SLIDING-DOOR)>",
   "referencedBy": [
    "I-ALICIA-SNEAKS"
   ]
  },
  "HALLWAY-15": {
   "name": "HALLWAY-15",
   "file": "places.zil",
   "line": 796,
   "endLine": 808,
   "desc": "Hall at Dining Room",
   "ldesc": "This is the northern end of the hall, where a doorway leads to the\ndining room.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "OPENBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WINDOW"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "0"
    ],
    "STATION": [
     "HALLWAY-15"
    ],
    "CORRIDOR": [
     "8"
    ]
   },
   "exits": [
    {
     "to": "DINING-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "HALLWAY-14",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HALLWAY-15\n      (IN ROOMS)\n      (DESC \"Hall at Dining Room\")\n      (LDESC\n\"This is the northern end of the hall, where a doorway leads to the\ndining room.\")\n      (NORTH TO DINING-ROOM)\n      (SOUTH TO HALLWAY-14)\n      (LINE 0 ;HALL-LINE-C)\n      (STATION HALLWAY-15)\n      (CORRIDOR 8)\n      (FLAGS OPENBIT)\n      (GLOBAL WINDOW)>",
   "referencedBy": []
  },
  "HALLWAY-16": {
   "name": "HALLWAY-16",
   "file": "places.zil",
   "line": 810,
   "endLine": 823,
   "desc": "East Hall",
   "ldesc": "This is the beginning of the east hall. North is the long front hall and\nsouth is a door leading into the library. The hall continues to the\neast.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LIBRARY-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "2"
    ],
    "STATION": [
     "HALLWAY-16"
    ],
    "CORRIDOR": [
     "%",
     "<+ 8 16>"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-17",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "HALLWAY-11",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "LIBRARY",
     "kind": "conditional",
     "condition": "LIBRARY-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HALLWAY-16\n      (IN ROOMS)\n      (DESC \"East Hall\")\n      (LDESC\n\"This is the beginning of the east hall. North is the long front hall and\nsouth is a door leading into the library. The hall continues to the\neast.\")\n      (EAST TO HALLWAY-17)\n      (NORTH TO HALLWAY-11)\n      (SOUTH TO LIBRARY IF LIBRARY-DOOR IS OPEN)\n      (GLOBAL LIBRARY-DOOR)\n      (LINE 2 ;EAST-HALL-LINE-C)\n      (STATION HALLWAY-16)\n      (CORRIDOR %<+ 8 16>)>",
   "referencedBy": [
    "LIBRARY-MEETING"
   ]
  },
  "HALLWAY-17": {
   "name": "HALLWAY-17",
   "file": "places.zil",
   "line": 825,
   "endLine": 836,
   "desc": "East Hall at Bath",
   "ldesc": "The east hall continues. To the south is a bathroom.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "EAST-BATH-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "2"
    ],
    "STATION": [
     "HALLWAY-17"
    ],
    "CORRIDOR": [
     "16"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-19",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "HALLWAY-16",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "EAST-BATH",
     "kind": "conditional",
     "condition": "EAST-BATH-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HALLWAY-17\n      (IN ROOMS)\n      (DESC \"East Hall at Bath\")\n      (LDESC\n\"The east hall continues. To the south is a bathroom.\")\n      (EAST TO HALLWAY-19)\n      (WEST TO HALLWAY-16)\n      (SOUTH TO EAST-BATH IF EAST-BATH-DOOR IS OPEN)\n      (GLOBAL EAST-BATH-DOOR)\n      (LINE 2 ;EAST-HALL-LINE-C)\n      (STATION HALLWAY-17)\n      (CORRIDOR 16)>",
   "referencedBy": []
  },
  "HALLWAY-19": {
   "name": "HALLWAY-19",
   "file": "places.zil",
   "line": 847,
   "endLine": 860,
   "desc": "East Hall End",
   "ldesc": "The east hall ends here. A door opens to the outside and another opens\nsouth to the sun room.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "OPENBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WINDOW",
    "SUN-ROOM-DOOR",
    "EAST-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "2"
    ],
    "STATION": [
     "HALLWAY-19"
    ],
    "CORRIDOR": [
     "16"
    ]
   },
   "exits": [
    {
     "to": "OUTSIDE",
     "kind": "conditional",
     "condition": "EAST-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "HALLWAY-17",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SUN-ROOM",
     "kind": "conditional",
     "condition": "SUN-ROOM-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HALLWAY-19\n      (IN ROOMS)\n      (DESC \"East Hall End\")\n      (LDESC\n\"The east hall ends here. A door opens to the outside and another opens\nsouth to the sun room.\")\n      (EAST TO OUTSIDE IF EAST-DOOR IS OPEN)\n      (WEST TO HALLWAY-17)\n      (SOUTH TO SUN-ROOM IF SUN-ROOM-DOOR IS OPEN)\n      (LINE 2 ;EAST-HALL-LINE-C)\n      (STATION HALLWAY-19)\n      (CORRIDOR 16)\n      (FLAGS OPENBIT)\n      (GLOBAL WINDOW SUN-ROOM-DOOR EAST-DOOR)>",
   "referencedBy": []
  },
  "MEDIA-ROOM": {
   "name": "MEDIA-ROOM",
   "file": "places.zil",
   "line": 866,
   "endLine": 881,
   "desc": "Media Room",
   "ldesc": "This is a large room with a projection TV and VCR at one end. Comfortable\nchairs and sofa are grouped around it. A bookcase contains a large\nlibrary of videotapes. There is a telephone on the bookcase. The hallway\nis to the south and on the east is a connecting door to the office.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "ROOM"
   ],
   "adjectives": [
    "MEDIA"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MEDIA-OFFICE-DOOR",
    "WINDOW",
    "CURTAINS",
    "TELEPHONE",
    "MEDIA-ROOM-DOOR",
    "GLOBAL-SOFA",
    "GLOBAL-CHAIR"
   ],
   "pseudo": [],
   "otherProps": {
    "STATION": [
     "HALLWAY-1"
    ],
    "LINE": [
     "0"
    ]
   },
   "exits": [
    {
     "to": "OFFICE",
     "kind": "conditional",
     "condition": "MEDIA-OFFICE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "HALLWAY-1",
     "kind": "conditional",
     "condition": "MEDIA-ROOM-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "SEN-ASHER",
    "TELEVISION",
    "VCR",
    "BOOKCASE"
   ],
   "source": "<ROOM MEDIA-ROOM\n      (IN ROOMS)\n      (SYNONYM ROOM)\n      (ADJECTIVE MEDIA)\n      (DESC \"Media Room\")\n      (LDESC\n\"This is a large room with a projection TV and VCR at one end. Comfortable\nchairs and sofa are grouped around it. A bookcase contains a large\nlibrary of videotapes. There is a telephone on the bookcase. The hallway\nis to the south and on the east is a connecting door to the office.\")\n      (EAST TO OFFICE IF MEDIA-OFFICE-DOOR IS OPEN)\n      (SOUTH TO HALLWAY-1 IF MEDIA-ROOM-DOOR IS OPEN)\n      (GLOBAL MEDIA-OFFICE-DOOR WINDOW CURTAINS TELEPHONE\n              MEDIA-ROOM-DOOR GLOBAL-SOFA GLOBAL-CHAIR)\n      (STATION HALLWAY-1)\n      (LINE 0 ;HALL-LINE-C)>",
   "referencedBy": [
    "SEN-ASHER-DESC-F"
   ]
  },
  "OFFICE": {
   "name": "OFFICE",
   "file": "places.zil",
   "line": 949,
   "endLine": 961,
   "desc": "Office",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "OFFICE"
   ],
   "adjectives": [],
   "action": "OFFICE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MEDIA-OFFICE-DOOR",
    "NORTH-OFFICE-DOOR",
    "SOUTH-OFFICE-DOOR",
    "TELEPHONE",
    "WINDOW",
    "CURTAINS"
   ],
   "pseudo": [
    "RUG",
    "RUG-F",
    "BOOKS",
    "BOOKS-PSEUDO"
   ],
   "otherProps": {
    "STATION": [
     "HALLWAY-3"
    ],
    "LINE": [
     "0"
    ]
   },
   "exits": [
    {
     "to": "MEDIA-ROOM",
     "kind": "conditional",
     "condition": "MEDIA-OFFICE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "HALLWAY-3",
     "kind": "conditional",
     "condition": "SOUTH-OFFICE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "WALKWAY",
     "kind": "conditional",
     "condition": "NORTH-OFFICE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "CORPSE",
    "ROPE",
    "LARGE-DESK",
    "SMALL-DESK",
    "FILE-CABINET",
    "TRASH",
    "OFFICE-JUNK",
    "COMPUTER",
    "DISK",
    "WASTE-BASKET"
   ],
   "source": "<ROOM OFFICE\n      (IN ROOMS)\n      (SYNONYM OFFICE)\n      (DESC \"Office\")\n      (WEST TO MEDIA-ROOM IF MEDIA-OFFICE-DOOR IS OPEN)\n      (SOUTH TO HALLWAY-3 IF SOUTH-OFFICE-DOOR IS OPEN)\n      (NORTH TO WALKWAY IF NORTH-OFFICE-DOOR IS OPEN)\n      (ACTION OFFICE-F)\n      (STATION HALLWAY-3)\n      (LINE 0 ;HALL-LINE-C)\n      (GLOBAL MEDIA-OFFICE-DOOR NORTH-OFFICE-DOOR SOUTH-OFFICE-DOOR\n       TELEPHONE WINDOW CURTAINS)\n      (PSEUDO \"RUG\" RUG-F \"BOOKS\" BOOKS-PSEUDO)>",
   "referencedBy": [
    "I-SPILL",
    "MICHAEL-F",
    "G-MICHAEL",
    "TELL-THREE-ARRIVE",
    "GANGS-ALL-HERE",
    "G-VERONICA",
    "CORPSE-F",
    "POLICE-F",
    "I-MICHAEL-TO-GARAGE",
    "G-COL-MARSTON",
    "G-COCHRANE",
    "DETECTIVE-DESC-F",
    "G-DETECTIVE",
    "DETECTIVE-FINDS-BODY?",
    "DUFFY-DESC-F",
    "DUFFY-FINDS-BODY?"
   ]
  },
  "WALKWAY": {
   "name": "WALKWAY",
   "file": "places.zil",
   "line": 1269,
   "endLine": 1286,
   "desc": "Covered Walkway",
   "ldesc": "This covered walkway extends east and west from the hallway door to\nthe garage. The garden is to the north, and a door to the office is\nsouthwest.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "OPENBIT"
   ],
   "synonyms": [
    "WALKWAY"
   ],
   "adjectives": [
    "COVERED"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "NORTH-OFFICE-DOOR",
    "NORTH-DOOR",
    "WINDOW",
    "WALKWAY-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "3"
    ],
    "STATION": [
     "WALKWAY"
    ]
   },
   "exits": [
    {
     "to": "GARAGE",
     "kind": "conditional",
     "condition": "WALKWAY-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "HALLWAY-7",
     "kind": "conditional",
     "condition": "NORTH-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "OFFICE",
     "kind": "conditional",
     "condition": "NORTH-OFFICE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "HALLWAY-7",
     "kind": "conditional",
     "condition": "NORTH-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "GARDEN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM WALKWAY\n      (IN ROOMS)\n      (SYNONYM WALKWAY)\n      (ADJECTIVE COVERED)\n      (DESC \"Covered Walkway\")\n      (LDESC\n\"This covered walkway extends east and west from the hallway door to\nthe garage. The garden is to the north, and a door to the office is\nsouthwest.\")\n      (WEST TO GARAGE IF WALKWAY-DOOR IS OPEN)\n      (SOUTH TO HALLWAY-7 IF NORTH-DOOR IS OPEN)\n      (SW TO OFFICE IF NORTH-OFFICE-DOOR IS OPEN)\n      (IN TO HALLWAY-7 IF NORTH-DOOR IS OPEN)\n      (NORTH TO GARDEN)\n      (GLOBAL NORTH-OFFICE-DOOR NORTH-DOOR WINDOW WALKWAY-DOOR)\n      (LINE 3 ;GARAGE-LINE-C)\n      (FLAGS OPENBIT)\n      (STATION WALKWAY)>",
   "referencedBy": [
    "I-ALICIA-SNEAKS",
    "OUTSIDE?"
   ]
  },
  "LIVING-ROOM": {
   "name": "LIVING-ROOM",
   "file": "places.zil",
   "line": 1288,
   "endLine": 1305,
   "desc": "Living Room",
   "ldesc": "This is a large and comfortable living room. The decor is formal, and\nthe stern faces of several generations of Ashcrofts peer down from\nportraits above you. A pair of large doorways open out to the hall on the\nsouth wall, flanking a marble fireplace. An ornately carved mantel surmounts\nthe fireplace. Wide windows peer out over the garden to the north. There\nis a telephone on an end table to the right of the sofa.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "ROOM"
   ],
   "adjectives": [
    "LIVING"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WINDOW",
    "CURTAINS",
    "TELEPHONE",
    "GLOBAL-SOFA",
    "GLOBAL-CHAIR",
    "GLOBAL-RUG"
   ],
   "pseudo": [],
   "otherProps": {
    "STATION": [
     "HALLWAY-8"
    ],
    "LINE": [
     "0"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-10",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "HALLWAY-8",
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
     "message": "The doorways are at the southeast and southwest of the room.",
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "COL-MARSTON",
    "LR-FIREPLACE",
    "PORTRAITS",
    "MANTEL"
   ],
   "source": "<ROOM LIVING-ROOM\n      (IN ROOMS)\n      (SYNONYM ROOM)\n      (ADJECTIVE LIVING)\n      (DESC \"Living Room\")\n      (LDESC\n\"This is a large and comfortable living room. The decor is formal, and\nthe stern faces of several generations of Ashcrofts peer down from\nportraits above you. A pair of large doorways open out to the hall on the\nsouth wall, flanking a marble fireplace. An ornately carved mantel surmounts\nthe fireplace. Wide windows peer out over the garden to the north. There\nis a telephone on an end table to the right of the sofa.\")\n      (SE TO HALLWAY-10)\n      (SW TO HALLWAY-8)\n      (SOUTH \"The doorways are at the southeast and southwest of the room.\")\n      (STATION HALLWAY-8)\n      (LINE 0 ;HALL-LINE-C)\n      (GLOBAL WINDOW CURTAINS TELEPHONE GLOBAL-SOFA GLOBAL-CHAIR GLOBAL-RUG)>",
   "referencedBy": [
    "G-MICHAEL"
   ]
  },
  "WEST-BATH": {
   "name": "WEST-BATH",
   "file": "places.zil",
   "line": 1369,
   "endLine": 1379,
   "desc": "West Bath",
   "ldesc": "This is a full bath, including a shower stall.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "BATH"
   ],
   "adjectives": [
    "WEST"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WATER",
    "SINK",
    "SHOWER",
    "TOILET",
    "WEST-BATH-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "STATION": [
     "HALLWAY-2"
    ],
    "LINE": [
     "0"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM WEST-BATH\n      (IN ROOMS)\n      (SYNONYM BATH)\n      (ADJECTIVE WEST)\n      (DESC \"West Bath\")\n      (LDESC\n\"This is a full bath, including a shower stall.\")\n      (SOUTH TO HALLWAY-2)\n      (STATION HALLWAY-2)\n      (GLOBAL WATER SINK SHOWER TOILET WEST-BATH-DOOR)\n      (LINE 0 ;HALL-LINE-C)>",
   "referencedBy": []
  },
  "LINEN-CLOSET": {
   "name": "LINEN-CLOSET",
   "file": "places.zil",
   "line": 1381,
   "endLine": 1393,
   "desc": "Linen Closet",
   "ldesc": "This is a small linen closet. It looks like most of the towels and\nother supplies for the downstairs baths are kept here.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "CLOSET"
   ],
   "adjectives": [
    "LINEN"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LINEN-CLOSET-DOOR"
   ],
   "pseudo": [
    "TOWELS",
    "TOWELS-PSEUDO",
    "SUPPLI",
    "TOWELS-PSEUDO"
   ],
   "otherProps": {
    "STATION": [
     "HALLWAY-2"
    ],
    "LINE": [
     "0"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-2",
     "kind": "conditional",
     "condition": "LINEN-CLOSET-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM LINEN-CLOSET\n      (IN ROOMS)\n      (SYNONYM CLOSET)\n      (ADJECTIVE LINEN)\n      (DESC \"Linen Closet\")\n      (LDESC\n\"This is a small linen closet. It looks like most of the towels and\nother supplies for the downstairs baths are kept here.\")\n      (NORTH TO HALLWAY-2 IF LINEN-CLOSET-DOOR IS OPEN)\n      (GLOBAL LINEN-CLOSET-DOOR)\n      (STATION HALLWAY-2)\n      (LINE 0 ;HALL-LINE-C)\n      (PSEUDO \"TOWELS\" TOWELS-PSEUDO \"SUPPLI\" TOWELS-PSEUDO)>",
   "referencedBy": []
  },
  "EAST-BATH": {
   "name": "EAST-BATH",
   "file": "places.zil",
   "line": 1402,
   "endLine": 1412,
   "desc": "East Bath",
   "ldesc": "This is a normal half-bath, no shower or tub.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "BATH",
    "BATHROOM"
   ],
   "adjectives": [
    "EAST"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WATER",
    "SINK",
    "TOILET",
    "EAST-BATH-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "STATION": [
     "HALLWAY-17"
    ],
    "LINE": [
     "2"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-17",
     "kind": "conditional",
     "condition": "EAST-BATH-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "COCHRANE"
   ],
   "source": "<ROOM EAST-BATH\n      (IN ROOMS)\n      (SYNONYM BATH BATHROOM)\n      (ADJECTIVE EAST)\n      (DESC \"East Bath\")\n      (LDESC\n\"This is a normal half-bath, no shower or tub.\")\n      (NORTH TO HALLWAY-17 IF EAST-BATH-DOOR IS OPEN)\n      (STATION HALLWAY-17)\n      (GLOBAL WATER SINK TOILET EAST-BATH-DOOR)\n      (LINE 2 ;EAST-HALL-LINE-C)>",
   "referencedBy": [
    "G-COCHRANE"
   ]
  },
  "LIBRARY": {
   "name": "LIBRARY",
   "file": "places.zil",
   "line": 1414,
   "endLine": 1428,
   "desc": "Library",
   "ldesc": "Every inch of wall space here is covered with bookshelves, except for\ndoors leading north and west, and two thickly curtained windows. There\nare an enormous number of books here.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "LIBRARY"
   ],
   "adjectives": [],
   "action": "LIBRARY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WINDOW",
    "CURTAINS",
    "LH-DOOR",
    "TELEPHONE",
    "LIBRARY-DOOR"
   ],
   "pseudo": [
    "BOOKS",
    "BOOKS-PSEUDO"
   ],
   "otherProps": {
    "STATION": [
     "HALLWAY-16"
    ],
    "LINE": [
     "2"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-16",
     "kind": "conditional",
     "condition": "LIBRARY-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "HALL",
     "kind": "conditional",
     "condition": "LH-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "BOOKCASES",
    "SIDE-TABLE",
    "CHAIR"
   ],
   "source": "<ROOM LIBRARY\n      (IN ROOMS)\n      (SYNONYM LIBRARY)\n      (DESC \"Library\")\n      (LDESC\n\"Every inch of wall space here is covered with bookshelves, except for\ndoors leading north and west, and two thickly curtained windows. There\nare an enormous number of books here.\")\n      (NORTH TO HALLWAY-16 IF LIBRARY-DOOR IS OPEN)\n      (WEST TO HALL IF LH-DOOR IS OPEN)\n      (ACTION LIBRARY-F)\n      (STATION HALLWAY-16)\n      (LINE 2 ;EAST-HALL-LINE-C)\n      (GLOBAL WINDOW CURTAINS LH-DOOR TELEPHONE LIBRARY-DOOR)\n      (PSEUDO \"BOOKS\" BOOKS-PSEUDO)>",
   "referencedBy": [
    "G-MICHAEL",
    "I-LIBRARY-MEETING",
    "LIBRARY-MEETING",
    "COL-MARSTON-F",
    "G-COL-MARSTON",
    "LIBRARY-F",
    "BOOKS-PSEUDO"
   ]
  },
  "SUN-ROOM": {
   "name": "SUN-ROOM",
   "file": "places.zil",
   "line": 1574,
   "endLine": 1587,
   "desc": "Sun Room",
   "ldesc": "This room is situated to receive the morning sun, and in daytime\nwould be bright and airy. Many plants crowd the floor,\nfill the plant stands situated under the windows, and hang from hooks\nattached to the ceiling. Ms. Ashcroft has a green thumb, apparently.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "ROOM"
   ],
   "adjectives": [
    "SUN"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WINDOW",
    "CURTAINS",
    "SUN-ROOM-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "STATION": [
     "HALLWAY-19"
    ],
    "LINE": [
     "2"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-19",
     "kind": "conditional",
     "condition": "SUN-ROOM-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "PLANTS"
   ],
   "source": "<ROOM SUN-ROOM\n      (IN ROOMS)\n      (SYNONYM ROOM)\n      (ADJECTIVE SUN)\n      (DESC \"Sun Room\")\n      (LDESC\n\"This room is situated to receive the morning sun, and in daytime\nwould be bright and airy. Many plants crowd the floor,\nfill the plant stands situated under the windows, and hang from hooks\nattached to the ceiling. Ms. Ashcroft has a green thumb, apparently.\")\n      (NORTH TO HALLWAY-19 IF SUN-ROOM-DOOR IS OPEN)\n      (GLOBAL WINDOW CURTAINS SUN-ROOM-DOOR)\n      (STATION HALLWAY-19)\n      (LINE 2 ;EAST-HALL-LINE-C)>",
   "referencedBy": []
  },
  "DINING-ROOM": {
   "name": "DINING-ROOM",
   "file": "places.zil",
   "line": 1609,
   "endLine": 1625,
   "desc": "Dining Room",
   "ldesc": "This is the formal dining room. To the south is the long hall, to the\neast the kitchen. A crystal chandelier dominates the room, hanging over\na large walnut table. On the east wall convenient to the kitchen is a\nlong sideboard. On the north wall is a china cabinet. The west wall is\nmostly windows which overlook the garden.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
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
    "WINDOW",
    "CURTAINS",
    "GLOBAL-CHAIR"
   ],
   "pseudo": [
    "CHINA",
    "CHINA-PSEUDO",
    "CRYSTAL",
    "CHINA-PSEUDO"
   ],
   "otherProps": {
    "LINE": [
     "0"
    ],
    "STATION": [
     "DINING-ROOM"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-15",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "KITCHEN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "CHANDELIER",
    "DINING-ROOM-TABLE",
    "SIDEBOARD",
    "CHINA-CABINET"
   ],
   "source": "<ROOM DINING-ROOM\n      (IN ROOMS)\n      (SYNONYM ROOM)\n      (ADJECTIVE DINING)\n      (DESC \"Dining Room\")\n      (LDESC\n\"This is the formal dining room. To the south is the long hall, to the\neast the kitchen. A crystal chandelier dominates the room, hanging over\na large walnut table. On the east wall convenient to the kitchen is a\nlong sideboard. On the north wall is a china cabinet. The west wall is\nmostly windows which overlook the garden.\")\n      (SOUTH TO HALLWAY-15)\n      (EAST TO KITCHEN)\n      (LINE 0 ;HALL-LINE-C)\n      (STATION DINING-ROOM)\n      (GLOBAL WINDOW CURTAINS GLOBAL-CHAIR)\n      (PSEUDO \"CHINA\" CHINA-PSEUDO \"CRYSTAL\" CHINA-PSEUDO)>",
   "referencedBy": []
  },
  "KITCHEN": {
   "name": "KITCHEN",
   "file": "places.zil",
   "line": 1674,
   "endLine": 1690,
   "desc": "Kitchen",
   "ldesc": "This is a large country kitchen. It is quite disarrayed right now\nbecause of the party. There are doorways leading south to the ballroom,\nwest to the dining room, and north to the back entry. There is a stove\nwith a kettle boiling on top of it, and telephone over a counter on one\nwall.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "KITCHEN"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WATER",
    "WINDOW",
    "CURTAINS",
    "SINK",
    "TELEPHONE",
    "FOOD"
   ],
   "pseudo": [
    "STOVE",
    "STOVE-PSEUDO",
    "KETTLE",
    "KETTLE-PSEUDO"
   ],
   "otherProps": {
    "LINE": [
     "0"
    ],
    "STATION": [
     "KITCHEN"
    ]
   },
   "exits": [
    {
     "to": "BACK-ENTRY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BALLROOM-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "DINING-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "TRASH-BASKET"
   ],
   "source": "<ROOM KITCHEN\n      (IN ROOMS)\n      (SYNONYM KITCHEN)\n      (DESC \"Kitchen\")\n      (LDESC\n\"This is a large country kitchen. It is quite disarrayed right now\nbecause of the party. There are doorways leading south to the ballroom,\nwest to the dining room, and north to the back entry. There is a stove\nwith a kettle boiling on top of it, and telephone over a counter on one\nwall.\")\n      (NORTH TO BACK-ENTRY)\n      (SOUTH TO BALLROOM-3)\n      (WEST TO DINING-ROOM)\n      (LINE 0 ;HALL-LINE-C)\n      (STATION KITCHEN)\n      (GLOBAL WATER WINDOW CURTAINS SINK TELEPHONE FOOD)\n      (PSEUDO \"STOVE\" STOVE-PSEUDO \"KETTLE\" KETTLE-PSEUDO)>",
   "referencedBy": [
    "BUTLER-F",
    "G-BUTLER",
    "LOCAL-BAND-DESC-F",
    "LOCAL-BAND-F",
    "I-MUSIC"
   ]
  },
  "BACK-ENTRY": {
   "name": "BACK-ENTRY",
   "file": "places.zil",
   "line": 1709,
   "endLine": 1721,
   "desc": "Back Entry",
   "ldesc": "This is the back entry to the kitchen. A door leads outside to the north.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "OPENBIT"
   ],
   "synonyms": [
    "ENTRY"
   ],
   "adjectives": [
    "BACK"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WINDOW",
    "STAIR",
    "BACK-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "0"
    ],
    "STATION": [
     "BACK-ENTRY"
    ]
   },
   "exits": [
    {
     "to": "BACK-PORCH",
     "kind": "conditional",
     "condition": "BACK-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "KITCHEN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM BACK-ENTRY\n      (IN ROOMS)\n      (SYNONYM ENTRY)\n      (ADJECTIVE BACK)\n      (DESC \"Back Entry\")\n      (LDESC\n\"This is the back entry to the kitchen. A door leads outside to the north.\")\n      (NORTH TO BACK-PORCH IF BACK-DOOR IS OPEN)\n      (SOUTH TO KITCHEN)\n      (LINE 0 ;HALL-LINE-C)\n      (STATION BACK-ENTRY)\n      (FLAGS OPENBIT)\n      (GLOBAL WINDOW STAIR BACK-DOOR)>",
   "referencedBy": []
  },
  "BACK-PORCH": {
   "name": "BACK-PORCH",
   "file": "places.zil",
   "line": 1732,
   "endLine": 1749,
   "desc": "Back Porch",
   "ldesc": "This is the back porch. The kitchen is to the south, and a flagstone path\nleads east and west.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "OPENBIT"
   ],
   "synonyms": [
    "PORCH"
   ],
   "adjectives": [
    "BACK"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WINDOW",
    "BACK-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "4"
    ],
    "STATION": [
     "BACK-PORCH"
    ]
   },
   "exits": [
    {
     "to": "BACK-ENTRY",
     "kind": "conditional",
     "condition": "BACK-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "BACK-ENTRY",
     "kind": "conditional",
     "condition": "BACK-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "GARDEN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "GARDEN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "PATIO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "PATIO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM BACK-PORCH\n      (IN ROOMS)\n      (SYNONYM PORCH)\n      (ADJECTIVE BACK)\n      (DESC \"Back Porch\")\n      (LDESC\n\"This is the back porch. The kitchen is to the south, and a flagstone path\nleads east and west.\")\n      (IN TO BACK-ENTRY IF BACK-DOOR IS OPEN)\n      (SOUTH TO BACK-ENTRY IF BACK-DOOR IS OPEN)\n      (WEST TO GARDEN)\n      (SW TO GARDEN)\n      (EAST TO PATIO)\n      (DOWN TO PATIO)\n      (LINE 4 ;OUTSIDE-LINE-C)\n      (STATION BACK-PORCH)\n      (FLAGS OPENBIT)\n      (GLOBAL WINDOW BACK-DOOR)>",
   "referencedBy": [
    "OUTSIDE?"
   ]
  },
  "GARAGE": {
   "name": "GARAGE",
   "file": "places.zil",
   "line": 1751,
   "endLine": 1765,
   "desc": "Garage",
   "ldesc": "The garage holds four cars quite comfortably, each with its own\nseparate door. After parking, one can leave through the door to the\neast, which leads to a covered walkway and the main house. At the\nhouse end of the garage is an immaculate workbench.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "GARAGE"
   ],
   "adjectives": [],
   "action": "GARAGE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WALKWAY-DOOR",
    "GARAGE-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "3"
    ],
    "STATION": [
     "GARAGE"
    ]
   },
   "exits": [
    {
     "to": "WALKWAY",
     "kind": "conditional",
     "condition": "WALKWAY-DOOR IS OPEN",
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
     "message": "The garage doors are closed and locked.",
     "dir": "WEST"
    }
   ],
   "contents": [
    "WORKBENCH",
    "MERCEDES",
    "BMW",
    "TOOL-CHEST"
   ],
   "source": "<ROOM GARAGE\n      (IN ROOMS)\n      (SYNONYM GARAGE)\n      (DESC \"Garage\")\n      (LDESC\n\"The garage holds four cars quite comfortably, each with its own\nseparate door. After parking, one can leave through the door to the\neast, which leads to a covered walkway and the main house. At the\nhouse end of the garage is an immaculate workbench.\")\n      (EAST TO WALKWAY IF WALKWAY-DOOR IS OPEN)\n      (WEST \"The garage doors are closed and locked.\")\n      (ACTION GARAGE-F)\n      (GLOBAL WALKWAY-DOOR GARAGE-DOOR)\n      (LINE 3 ;GARAGE-LINE-C)\n      (STATION GARAGE)>",
   "referencedBy": [
    "G-MICHAEL",
    "I-MICHAEL-HIDES-FOLDER",
    "I-MICHAEL-TO-GARAGE",
    "GARAGE-F"
   ]
  },
  "BALLROOM-1": {
   "name": "BALLROOM-1",
   "file": "places.zil",
   "line": 1943,
   "endLine": 1960,
   "desc": "North Entrance",
   "ldesc": "This is the northern end of the ballroom, near the entrance.",
   "fdesc": "near the north entrance",
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "ENTRANCE"
   ],
   "adjectives": [
    "NORTH"
   ],
   "action": "BALLROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "FOOD"
   ],
   "pseudo": [],
   "otherProps": {
    "STATION": [
     "BALLROOM-4"
    ],
    "LINE": [
     "1"
    ],
    "CORRIDOR": [
     "32"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-14",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "BALLROOM-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "BALLROOM-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BALLROOM-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "BALLROOM-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [],
   "source": "<ROOM BALLROOM-1\n      (IN ROOMS)\n      (SYNONYM ENTRANCE)\n      (ADJECTIVE NORTH)\n      (DESC \"North Entrance\")\n      (FDESC \"near the north entrance\")\n      (LDESC\n\"This is the northern end of the ballroom, near the entrance.\")\n      (WEST TO HALLWAY-14)\n      (SOUTH TO BALLROOM-4)\n      (EAST TO BALLROOM-2)\n      (IN TO BALLROOM-5)\n      (SE TO BALLROOM-5)\n      (ACTION BALLROOM-F)\n      (GLOBAL FOOD)\n      (STATION BALLROOM-4)\n      (LINE 1 ;BALLROOM-LINE-C)\n      (CORRIDOR 32)>",
   "referencedBy": [
    "BALLROOM-F"
   ]
  },
  "BALLROOM-2": {
   "name": "BALLROOM-2",
   "file": "places.zil",
   "line": 1962,
   "endLine": 1979,
   "desc": "Near Band",
   "ldesc": "This is the northern end of the ballroom. A raised area provides a\nband platform, and there is a stereo hookup for use when there is\nno band.",
   "fdesc": "near the band",
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": "BALLROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "FOOD"
   ],
   "pseudo": [],
   "otherProps": {
    "STATION": [
     "BALLROOM-2"
    ],
    "LINE": [
     "1"
    ]
   },
   "exits": [
    {
     "to": "BALLROOM-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "BALLROOM-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "BALLROOM-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BALLROOM-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "BALLROOM-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "BALLROOM-6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [
    "LOCAL-BAND",
    "RECORD-PLAYER"
   ],
   "source": "<ROOM BALLROOM-2\n      (IN ROOMS)\n      (DESC \"Near Band\")\n      (FDESC \"near the band\")\n      (LDESC\n\"This is the northern end of the ballroom. A raised area provides a\nband platform, and there is a stereo hookup for use when there is\nno band.\")\n      (SOUTH TO BALLROOM-5)\n      (IN TO BALLROOM-5)\n      (EAST TO BALLROOM-3)\n      (WEST TO BALLROOM-1)\n      (SW TO BALLROOM-4)\n      (SE TO BALLROOM-6)\n      (ACTION BALLROOM-F)\n      (GLOBAL FOOD)\n      (STATION BALLROOM-2)\n      (LINE 1 ;BALLROOM-LINE-C)>",
   "referencedBy": [
    "RECORD-PLAYER-F",
    "BALLROOM-F",
    "I-MUSIC"
   ]
  },
  "BALLROOM-3": {
   "name": "BALLROOM-3",
   "file": "places.zil",
   "line": 1981,
   "endLine": 1996,
   "desc": "Near Kitchen",
   "ldesc": "The northern end of the ballroom, next to the door leading to the\nkitchen. To the west is a band platform.",
   "fdesc": "near the kitchen door",
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": "BALLROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WINDOW",
    "FOOD"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "1"
    ],
    "STATION": [
     "BALLROOM-3"
    ]
   },
   "exits": [
    {
     "to": "KITCHEN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BALLROOM-6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "BALLROOM-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "BALLROOM-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "BALLROOM-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM BALLROOM-3\n      (IN ROOMS)\n      (DESC \"Near Kitchen\")\n      (FDESC \"near the kitchen door\")\n      (LDESC\n\"The northern end of the ballroom, next to the door leading to the\nkitchen. To the west is a band platform.\")\n      (NORTH TO KITCHEN)\n      (SOUTH TO BALLROOM-6)\n      (WEST TO BALLROOM-2)\n      (IN TO BALLROOM-5)\n      (SW TO BALLROOM-5)\n      (ACTION BALLROOM-F)\n      (LINE 1 ;BALLROOM-LINE-C)\n      (STATION BALLROOM-3)\n      (GLOBAL WINDOW FOOD)>",
   "referencedBy": [
    "BALLROOM-F"
   ]
  },
  "BALLROOM-4": {
   "name": "BALLROOM-4",
   "file": "places.zil",
   "line": 1998,
   "endLine": 2017,
   "desc": "Center Entrance",
   "ldesc": "This is the middle area of the ballroom, near the center entrance.",
   "fdesc": "near the center entrance",
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "ENTRANCE"
   ],
   "adjectives": [
    "CENTER"
   ],
   "action": "BALLROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "FOOD"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "1"
    ],
    "STATION": [
     "BALLROOM-4"
    ],
    "CORRIDOR": [
     "64"
    ]
   },
   "exits": [
    {
     "to": "BALLROOM-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BALLROOM-7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "BALLROOM-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BALLROOM-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "HALLWAY-13",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "BALLROOM-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "BALLROOM-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [],
   "source": "<ROOM BALLROOM-4\n      (IN ROOMS)\n      (SYNONYM ENTRANCE)\n      (ADJECTIVE CENTER)\n      (DESC \"Center Entrance\")\n      (FDESC \"near the center entrance\")\n      (LDESC\n\"This is the middle area of the ballroom, near the center entrance.\")\n      (NORTH TO BALLROOM-1)\n      (SOUTH TO BALLROOM-7)\n      (EAST TO BALLROOM-5)\n      (IN TO BALLROOM-5)\n      (WEST TO HALLWAY-13)\n      (NE TO BALLROOM-2)\n      (SE TO BALLROOM-8)\n      (ACTION BALLROOM-F)\n      (GLOBAL FOOD)\n      (LINE 1 ;BALLROOM-LINE-C)\n      (STATION BALLROOM-4)\n      (CORRIDOR 64)>",
   "referencedBy": [
    "BALLROOM-F"
   ]
  },
  "BALLROOM-5": {
   "name": "BALLROOM-5",
   "file": "places.zil",
   "line": 2019,
   "endLine": 2037,
   "desc": "Dance Floor",
   "ldesc": "This is the dance floor, smack in the center of the ballroom.",
   "fdesc": "on the dance floor",
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "FLOOR"
   ],
   "adjectives": [
    "DANCE"
   ],
   "action": "BALLROOM-5-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "1"
    ],
    "STATION": [
     "BALLROOM-5"
    ]
   },
   "exits": [
    {
     "to": "BALLROOM-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BALLROOM-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "BALLROOM-6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BALLROOM-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "BALLROOM-9",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "BALLROOM-7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "BALLROOM-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "BALLROOM-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM BALLROOM-5\n      (IN ROOMS)\n      (SYNONYM FLOOR)\n      (ADJECTIVE DANCE)\n      (DESC \"Dance Floor\")\n      (FDESC \"on the dance floor\")\n      (LDESC\n\"This is the dance floor, smack in the center of the ballroom.\")\n      (NORTH TO BALLROOM-2)\n      (SOUTH TO BALLROOM-8)\n      (EAST TO BALLROOM-6)\n      (WEST TO BALLROOM-4)\n      (SE TO BALLROOM-9)\n      (SW TO BALLROOM-7)\n      (NE TO BALLROOM-3)\n      (NW TO BALLROOM-1)\n      (ACTION BALLROOM-5-F)\n      (LINE 1 ;BALLROOM-LINE-C)\n      (STATION BALLROOM-5)>",
   "referencedBy": [
    "G-MICHAEL",
    "G-ALICIA",
    "NEW-ARRIVAL-STUFF",
    "GLOBAL-BALLROOM-F",
    "BALLROOM-5-F",
    "BALLROOM-F",
    "V-FOLLOW"
   ]
  },
  "BALLROOM-6": {
   "name": "BALLROOM-6",
   "file": "places.zil",
   "line": 2064,
   "endLine": 2083,
   "desc": "Near French Door",
   "ldesc": "This is near the middle of the ballroom, at a French door leading out\nto the patio.",
   "fdesc": "near the French door leading to the patio",
   "loc": "ROOMS",
   "flags": [
    "OPENBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "BALLROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WINDOW",
    "FRENCH-DOOR",
    "FOOD"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "1"
    ],
    "STATION": [
     "BALLROOM-6"
    ],
    "CORRIDOR": [
     "256"
    ]
   },
   "exits": [
    {
     "to": "BALLROOM-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BALLROOM-9",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "PATIO",
     "kind": "conditional",
     "condition": "FRENCH-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BALLROOM-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "BALLROOM-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "BALLROOM-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "BALLROOM-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM BALLROOM-6\n      (IN ROOMS)\n      (DESC \"Near French Door\")\n      (FDESC \"near the French door leading to the patio\")\n      (LDESC\n\"This is near the middle of the ballroom, at a French door leading out\nto the patio.\")\n      (NORTH TO BALLROOM-3)\n      (SOUTH TO BALLROOM-9)\n      (EAST TO PATIO IF FRENCH-DOOR IS OPEN)\n      (WEST TO BALLROOM-5)\n      (IN TO BALLROOM-5)\n      (NW TO BALLROOM-2)\n      (SW TO BALLROOM-8)\n      (ACTION BALLROOM-F)\n      (LINE 1 ;BALLROOM-LINE-C)\n      (STATION BALLROOM-6)\n      (CORRIDOR 256)\n      (FLAGS OPENBIT)\n      (GLOBAL WINDOW FRENCH-DOOR FOOD)>",
   "referencedBy": [
    "BALLROOM-F"
   ]
  },
  "BALLROOM-7": {
   "name": "BALLROOM-7",
   "file": "places.zil",
   "line": 2085,
   "endLine": 2104,
   "desc": "South Entrance",
   "ldesc": "This is near the south entrance to the ballroom. The fireplace is to\nthe east, and the long hall is visible outside the entrance.",
   "fdesc": "near the south entrance",
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "ENTRANCE"
   ],
   "adjectives": [
    "SOUTH"
   ],
   "action": "BALLROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "FOOD"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "1"
    ],
    "STATION": [
     "BALLROOM-7"
    ],
    "CORRIDOR": [
     "128"
    ]
   },
   "exits": [
    {
     "to": "BALLROOM-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BALLROOM-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "BALLROOM-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "HALLWAY-12",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "BALLROOM-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "BALLROOM-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    }
   ],
   "contents": [],
   "source": "<ROOM BALLROOM-7\n      (IN ROOMS)\n      (SYNONYM ENTRANCE)\n      (ADJECTIVE SOUTH)\n      (DESC \"South Entrance\")\n      (FDESC \"near the south entrance\")\n      (LDESC\n\"This is near the south entrance to the ballroom. The fireplace is to\nthe east, and the long hall is visible outside the entrance.\")\n      (NORTH TO BALLROOM-4)\n      (SE TO BALLROOM-8)\n      (EAST TO BALLROOM-8)\n      (WEST TO HALLWAY-12)\n      (IN TO BALLROOM-5)\n      (NE TO BALLROOM-5)\n      (ACTION BALLROOM-F)\n      (GLOBAL FOOD)\n      (LINE 1 ;BALLROOM-LINE-C)\n      (STATION BALLROOM-7)\n      (CORRIDOR 128)>",
   "referencedBy": [
    "HALLWAY-12-F",
    "BALLROOM-F"
   ]
  },
  "BALLROOM-8": {
   "name": "BALLROOM-8",
   "file": "places.zil",
   "line": 2106,
   "endLine": 2122,
   "desc": "Near Fireplace",
   "ldesc": "This is the south end of the ballroom. A huge fieldstone fireplace\ndominates the south wall. The bar is to the east.",
   "fdesc": "near the fireplace",
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": "BALLROOM-8-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "FOOD"
   ],
   "pseudo": [],
   "otherProps": {
    "STATION": [
     "BALLROOM-8"
    ],
    "LINE": [
     "1"
    ]
   },
   "exits": [
    {
     "to": "BALLROOM-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BALLROOM-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "BALLROOM-9",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BALLROOM-7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "BALLROOM-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "BALLROOM-6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    }
   ],
   "contents": [
    "MICHAEL",
    "VERONICA",
    "FIREPLACE"
   ],
   "source": "<ROOM BALLROOM-8\n      (IN ROOMS)\n      (DESC \"Near Fireplace\")\n      (FDESC \"near the fireplace\")\n      (LDESC\n\"This is the south end of the ballroom. A huge fieldstone fireplace\ndominates the south wall. The bar is to the east.\")\n      (NORTH TO BALLROOM-5)\n      (IN TO BALLROOM-5)\n      (EAST TO BALLROOM-9)\n      (WEST TO BALLROOM-7)\n      (NW TO BALLROOM-4)\n      (NE TO BALLROOM-6)\n      (STATION BALLROOM-8)\n      (LINE 1 ;BALLROOM-LINE-C)\n      (ACTION BALLROOM-8-F)\n      (GLOBAL FOOD)>",
   "referencedBy": [
    "I-WAVE-2",
    "I-SPILL",
    "G-MICHAEL",
    "I-END-MEETING",
    "G-COL-MARSTON",
    "I-BURNED",
    "G-BUTLER",
    "DETECTIVE-DESC-F",
    "G-DETECTIVE",
    "I-UNTANGLE",
    "HALLWAY-12-F",
    "FIREPLACE-F",
    "I-BURN-OBJ",
    "BALLROOM-F",
    "V-TELL",
    "V-WAVE",
    "V-BURN"
   ]
  },
  "BALLROOM-9": {
   "name": "BALLROOM-9",
   "file": "places.zil",
   "line": 2367,
   "endLine": 2381,
   "desc": "Near Bar",
   "ldesc": "This is the south end of the ballroom, at the bar.",
   "fdesc": "at the bar",
   "loc": "ROOMS",
   "flags": [
    "OPENBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "BALLROOM-9-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WINDOW",
    "FOOD"
   ],
   "pseudo": [],
   "otherProps": {
    "STATION": [
     "BALLROOM-9"
    ],
    "LINE": [
     "1"
    ]
   },
   "exits": [
    {
     "to": "BALLROOM-6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BALLROOM-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "BALLROOM-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "BALLROOM-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [
    "PLAYER",
    "OSTMANN",
    "BARTENDER",
    "BAR"
   ],
   "source": "<ROOM BALLROOM-9\n      (IN ROOMS)\n      (DESC \"Near Bar\")\n      (FDESC \"at the bar\")\n      (LDESC\n\"This is the south end of the ballroom, at the bar.\")\n      (NORTH TO BALLROOM-6)\n      (WEST TO BALLROOM-8)\n      (NW TO BALLROOM-5)\n      (IN TO BALLROOM-5)\n      (ACTION BALLROOM-9-F)\n      (STATION BALLROOM-9)\n      (LINE 1 ;BALLROOM-LINE-C)\n      (FLAGS OPENBIT)\n      (GLOBAL WINDOW FOOD)>",
   "referencedBy": [
    "I-PARTY-OVER",
    "GO",
    "G-MICHAEL",
    "I-MICHAEL-HIDES-FOLDER",
    "I-ARGUMENT",
    "I-MICHAEL-TO-GARAGE",
    "G-COL-MARSTON",
    "G-COCHRANE",
    "G-OSTMANN",
    "DRINK-F",
    "DETECTIVE-DESC-F",
    "BAR-F",
    "BALLROOM-F",
    "V-LISTEN",
    "V-WAVE"
   ]
  },
  "PATIO": {
   "name": "PATIO",
   "file": "places.zil",
   "line": 2523,
   "endLine": 2540,
   "desc": "Patio",
   "ldesc": "This is a large flagstone patio east of the house. Paths lead\nnorth to the back porch and south towards the front of the house. To\neast is a pond, and in the distance you can see fences marking off\nthe boundaries of pastures.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "OPENBIT"
   ],
   "synonyms": [
    "PATIO"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WINDOW",
    "FRENCH-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "STATION": [
     "PATIO"
    ],
    "LINE": [
     "4"
    ]
   },
   "exits": [
    {
     "to": "BALLROOM-6",
     "kind": "conditional",
     "condition": "FRENCH-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "BALLROOM-6",
     "kind": "conditional",
     "condition": "FRENCH-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "POND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "OUTSIDE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "BACK-PORCH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM PATIO\n      (IN ROOMS)\n      (SYNONYM PATIO)\n      (DESC \"Patio\")\n      (LDESC\n\"This is a large flagstone patio east of the house. Paths lead\nnorth to the back porch and south towards the front of the house. To\neast is a pond, and in the distance you can see fences marking off\nthe boundaries of pastures.\")\n      (IN TO BALLROOM-6 IF FRENCH-DOOR IS OPEN)\n      (WEST TO BALLROOM-6 IF FRENCH-DOOR IS OPEN)\n      (EAST TO POND)\n      (SOUTH TO OUTSIDE)\n      (NORTH TO BACK-PORCH)\n      (STATION PATIO)\n      (LINE 4 ;OUTSIDE-LINE-C)\n      (FLAGS OPENBIT)\n      (GLOBAL WINDOW FRENCH-DOOR)>",
   "referencedBy": []
  },
  "OUTSIDE": {
   "name": "OUTSIDE",
   "file": "places.zil",
   "line": 2542,
   "endLine": 2555,
   "desc": "Outside House",
   "ldesc": "This is outside the house to the east, south of the patio\nand west of the pond.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "OPENBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WINDOW",
    "EAST-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "STATION": [
     "OUTSIDE"
    ],
    "LINE": [
     "4"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-19",
     "kind": "conditional",
     "condition": "EAST-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "PATIO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "POND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "CIRCLE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM OUTSIDE\n      (IN ROOMS)\n      (DESC \"Outside House\")\n      (LDESC\n\"This is outside the house to the east, south of the patio\nand west of the pond.\")\n      (WEST TO HALLWAY-19 IF EAST-DOOR IS OPEN)\n      (NORTH TO PATIO)\n      (EAST TO POND)\n      (SOUTH TO CIRCLE)\n      (STATION OUTSIDE)\n      (LINE 4 ;OUTSIDE-LINE-C)\n      (FLAGS OPENBIT)\n      (GLOBAL WINDOW EAST-DOOR)>",
   "referencedBy": []
  },
  "POND": {
   "name": "POND",
   "file": "places.zil",
   "line": 2557,
   "endLine": 2572,
   "desc": "Pond",
   "ldesc": "This is a small pond, all of whose plants and animals have shut up shop\nfor the winter. A path leads northwest to the patio from here.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "POND"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-PLANTS"
   ],
   "pseudo": [
    "POND",
    "POND-PSEUDO"
   ],
   "otherProps": {
    "STATION": [
     "OUTSIDE"
    ],
    "LINE": [
     "4"
    ]
   },
   "exits": [
    {
     "to": "PATIO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "OUTSIDE",
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
     "message": "Even if you win the Pulitzer prize for this story, you still won't be\nable to walk on water.",
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM POND\n      (IN ROOMS)\n      (SYNONYM POND)\n      (DESC \"Pond\")\n      (LDESC\n\"This is a small pond, all of whose plants and animals have shut up shop\nfor the winter. A path leads northwest to the patio from here.\")\n      (NW TO PATIO)\n      (WEST TO OUTSIDE)\n      (EAST\n\"Even if you win the Pulitzer prize for this story, you still won't be\nable to walk on water.\")\n      (STATION OUTSIDE)\n      (LINE 4 ;OUTSIDE-LINE-C)\n      (GLOBAL GLOBAL-PLANTS)\n      (PSEUDO \"POND\" POND-PSEUDO)>",
   "referencedBy": []
  },
  "WEST-OF-HOUSE": {
   "name": "WEST-OF-HOUSE",
   "file": "places.zil",
   "line": 2581,
   "endLine": 2593,
   "desc": "West of House",
   "ldesc": "Outside the house, just west of a door that opens onto a long east-west\nhallway.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WEST-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "4"
    ],
    "STATION": [
     "WEST-OF-HOUSE"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-1",
     "kind": "conditional",
     "condition": "WEST-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "HALLWAY-1",
     "kind": "conditional",
     "condition": "WEST-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "WEST-OF-GARAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "CIRCLE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM WEST-OF-HOUSE\n      (IN ROOMS)\n      (DESC \"West of House\")\n      (LDESC\n\"Outside the house, just west of a door that opens onto a long east-west\nhallway.\")\n      (EAST TO HALLWAY-1 IF WEST-DOOR IS OPEN)\n      (IN TO HALLWAY-1 IF WEST-DOOR IS OPEN)\n      (NORTH TO WEST-OF-GARAGE)\n      (SOUTH TO CIRCLE)\n      (GLOBAL WEST-DOOR)\n      (LINE 4 ;OUTSIDE-LINE-C)\n      (STATION WEST-OF-HOUSE)>",
   "referencedBy": [
    "I-SCREAMS"
   ]
  },
  "WEST-OF-GARAGE": {
   "name": "WEST-OF-GARAGE",
   "file": "places.zil",
   "line": 2595,
   "endLine": 2609,
   "desc": "West of Garage",
   "ldesc": "Outside the house, west of the garage. A path leads south to a door and\nnorth to the back of the house. On the other side of the drive is a door\nto one of the nearer horse barns.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GARAGE-DOOR",
    "BARN-DOOR"
   ],
   "pseudo": [
    "BARN",
    "BARN-F"
   ],
   "otherProps": {
    "LINE": [
     "4"
    ],
    "STATION": [
     "WEST-OF-GARAGE"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The garage doors are closed and locked.",
     "dir": "EAST"
    },
    {
     "to": "BARN",
     "kind": "conditional",
     "condition": "BARN-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
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
     "to": "WEST-OF-HOUSE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM WEST-OF-GARAGE\n      (IN ROOMS)\n      (DESC \"West of Garage\")\n      (LDESC\n\"Outside the house, west of the garage. A path leads south to a door and\nnorth to the back of the house. On the other side of the drive is a door\nto one of the nearer horse barns.\")\n      (EAST \"The garage doors are closed and locked.\")\n      (WEST TO BARN IF BARN-DOOR IS OPEN)\n      (NORTH TO NORTH-OF-HOUSE)\n      (SOUTH TO WEST-OF-HOUSE)\n      (LINE 4 ;OUTSIDE-LINE-C)\n      (STATION WEST-OF-GARAGE)\n      (GLOBAL GARAGE-DOOR BARN-DOOR)\n      (PSEUDO \"BARN\" BARN-F)>",
   "referencedBy": [
    "BARN-DANCE",
    "I-SCREAMS",
    "I-ALICIA-SNEAKS"
   ]
  },
  "NORTH-OF-HOUSE": {
   "name": "NORTH-OF-HOUSE",
   "file": "places.zil",
   "line": 2611,
   "endLine": 2622,
   "desc": "North of House",
   "ldesc": "This is north of the house and west of the garden, where the hill\nslopes down to pastures and paddocks. To the south is the house and\nto the west the garage.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "4"
    ],
    "STATION": [
     "NORTH-OF-HOUSE"
    ]
   },
   "exits": [
    {
     "to": "WEST-OF-GARAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "GARDEN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "GARDEN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [],
   "source": "<ROOM NORTH-OF-HOUSE\n      (IN ROOMS)\n      (DESC \"North of House\")\n      (LDESC\n\"This is north of the house and west of the garden, where the hill\nslopes down to pastures and paddocks. To the south is the house and\nto the west the garage.\")\n      (WEST TO WEST-OF-GARAGE)\n      (EAST TO GARDEN)\n      (SE TO GARDEN)\n      (LINE 4 ;OUTSIDE-LINE-C)\n      (STATION NORTH-OF-HOUSE)>",
   "referencedBy": [
    "I-SCREAMS",
    "I-ALICIA-SNEAKS"
   ]
  },
  "GARDEN": {
   "name": "GARDEN",
   "file": "places.zil",
   "line": 2624,
   "endLine": 2640,
   "desc": "Garden",
   "ldesc": "This is a rain-drenched and soggy garden. Against the garage to the west is\na doghouse. Flagstone paths lead northeast and northwest, and a glass door\nleads to the hallway.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "GARDEN"
   ],
   "adjectives": [],
   "action": "GARDEN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "SLIDING-DOOR",
    "GLOBAL-PLANTS"
   ],
   "pseudo": [],
   "otherProps": {
    "LINE": [
     "4"
    ],
    "STATION": [
     "GARDEN"
    ]
   },
   "exits": [
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
     "to": "BACK-PORCH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "HALLWAY-14",
     "kind": "conditional",
     "condition": "SLIDING-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "HALLWAY-14",
     "kind": "conditional",
     "condition": "SLIDING-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "WALKWAY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "DOGHOUSE"
   ],
   "source": "<ROOM GARDEN\n      (IN ROOMS)\n      (SYNONYM GARDEN)\n      (DESC \"Garden\")\n      (LDESC\n\"This is a rain-drenched and soggy garden. Against the garage to the west is\na doghouse. Flagstone paths lead northeast and northwest, and a glass door\nleads to the hallway.\")\n      (NW TO NORTH-OF-HOUSE)\n      (NE TO BACK-PORCH)\n      (EAST TO HALLWAY-14 IF SLIDING-DOOR IS OPEN)\n      (SE TO HALLWAY-14 IF SLIDING-DOOR IS OPEN)\n      (SOUTH TO WALKWAY)\n      (ACTION GARDEN-F)\n      (GLOBAL SLIDING-DOOR GLOBAL-PLANTS)\n      (LINE 4 ;OUTSIDE-LINE-C)\n      (STATION GARDEN)>",
   "referencedBy": [
    "I-ALICIA-SNEAKS",
    "GARDEN-F"
   ]
  },
  "BARN": {
   "name": "BARN",
   "file": "places.zil",
   "line": 2845,
   "endLine": 2854,
   "desc": "Barn",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [
    "BARN"
   ],
   "adjectives": [],
   "action": "BARN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BARN-DOOR"
   ],
   "pseudo": [
    "BARN",
    "BARN-F"
   ],
   "otherProps": {
    "STATION": [
     "WEST-OF-GARAGE"
    ],
    "LINE": [
     "4"
    ]
   },
   "exits": [
    {
     "to": "WEST-OF-GARAGE",
     "kind": "conditional",
     "condition": "BARN-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM BARN\n      (IN ROOMS)\n      (SYNONYM BARN)\n      (DESC \"Barn\")\n      (EAST TO WEST-OF-GARAGE IF BARN-DOOR IS OPEN)\n      (ACTION BARN-F)\n      (GLOBAL BARN-DOOR)\n      (STATION WEST-OF-GARAGE)\n      (LINE 4 ;OUTSIDE-LINE-C)\n      (PSEUDO \"BARN\" BARN-F)>",
   "referencedBy": [
    "G-MICHAEL",
    "G-ALICIA",
    "I-SCREAMS",
    "BARN-F"
   ]
  }
 },
 "objects": {
  "HIM-HER": {
   "name": "HIM-HER",
   "file": "people.zil",
   "line": 41,
   "endLine": 45,
   "desc": "him or her",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "HIM",
    "HER",
    "THEM",
    "GROUP"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HIM-HER\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM HIM HER THEM GROUP)\n\t(DESC \"him or her\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "PERFORM",
    "ITAKE-CHECK",
    "THE?"
   ]
  },
  "YOU": {
   "name": "YOU",
   "file": "people.zil",
   "line": 47,
   "endLine": 52,
   "desc": "himself or herself",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "YOU",
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
   "source": "<OBJECT YOU\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM YOU YOURSELF HIMSELF HERSELF)\n\t(DESC \"himself or herself\")\n\t(FLAGS NDESCBIT)\n\t(ACTION YOU-F)>",
   "referencedBy": [
    "YOU-F",
    "VERONICA-F",
    "RICHARD-F",
    "COCHRANE-F",
    "THE?",
    "PRE-FIND",
    "V-FIND",
    "V-FINGERPRINT",
    "V-WHAT"
   ]
  },
  "OBJECT-PAIR": {
   "name": "OBJECT-PAIR",
   "file": "people.zil",
   "line": 62,
   "endLine": 64,
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
    "MAIN-LOOP",
    "DETECTIVE-F"
   ]
  },
  "PLAYER": {
   "name": "PLAYER",
   "file": "people.zil",
   "line": 114,
   "endLine": 121,
   "desc": "reporter",
   "ldesc": null,
   "fdesc": null,
   "loc": "BALLROOM-9",
   "flags": [
    "NDESCBIT",
    "TRANSBIT",
    "THE",
    "PERSON",
    "INVISIBLE"
   ],
   "synonyms": [
    "REPORTER"
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
    ],
    "SIZE": [
     "0"
    ]
   },
   "contents": [
    "COWBOY-COSTUME",
    "GUNBELT",
    "PEN",
    "NOTEBOOK",
    "NOT-ROPE",
    "MASK",
    "RECEIPT"
   ],
   "source": "<OBJECT PLAYER\n\t(IN BALLROOM-9)\n\t(DESC \"reporter\")\n\t(SYNONYM REPORTER)\n\t(ACTION PLAYER-F)\n\t(FLAGS NDESCBIT TRANSBIT THE PERSON INVISIBLE)\n\t(CHARACTER 0)\n\t(SIZE 0)>",
   "referencedBy": [
    "I-SPILL",
    "I-PARTY-OVER",
    "DISCOVER-BODY",
    "MURDER-TELL",
    "ESTABLISH-GOAL",
    "MOVE-PERSON",
    "WHERE-UPDATE",
    "GO",
    "MAIN-LOOP",
    "QCONTEXT-CHECK",
    "PERFORM",
    "PARSER",
    "SYNTAX-CHECK",
    "GET-OBJECT",
    "WHICH-PRINT",
    "SEARCH-LIST",
    "ITAKE-CHECK",
    "PLAYER-F",
    "ME-F",
    "PEN-F",
    "NOTEBOOK-F",
    "DONT-HANDLE?",
    "MICHAEL-F",
    "I-MICHAEL-HIDES-FOLDER",
    "TELL-THREE-ARRIVE",
    "GANGS-ALL-HERE",
    "LIBRARY-MEETING",
    "I-ARGUMENT",
    "CORPSE-F",
    "POLICE-F",
    "ALICIA-F",
    "THEY-DANCE",
    "RICHARD-F",
    "COL-MARSTON-F",
    "G-COL-MARSTON",
    "LINDA-F",
    "SEN-ASHER-F",
    "COCHRANE-F",
    "OSTMANN-F",
    "BUTLER-F",
    "G-BUTLER",
    "BARTENDER-F",
    "DRINK-F",
    "DETECTIVE-F",
    "I-DUFFY-RETURNS",
    "G-DETECTIVE",
    "DETECTIVE-FINDS-BODY?",
    "OPEN-HIDING-PLACE",
    "I-START-ARREST",
    "LAB-RESULTS-TO-PLAYER",
    "PLAYER-ARRESTED?",
    "CAUGHT-WITH-BODY?",
    "DUFFY-FINDS-BODY?",
    "FRONT-DOOR-F",
    "GLOBAL-DOORBELL-F",
    "NEW-ARRIVAL-STUFF",
    "DOORBELL-F",
    "WINDOW-SEAT-F",
    "GUEST-F",
    "LIBRARY-F",
    "CHAIR-F",
    "GARAGE-F",
    "MUSIC-F",
    "FIREPLACE-F",
    "FIND-NOT-HERE",
    "GLOBAL-MURDER-F",
    "GLASS-F",
    "MOVE-PLAYER",
    "PRINT-CONT",
    "META-LOC",
    "PRE-ARREST",
    "V-ASK-ABOUT",
    "V-ASK-FOR",
    "V-CLIMB-ON",
    "V-THROUGH",
    "V-CONTINUE",
    "PRE-EXAMINE",
    "PRE-FIND",
    "V-FIND",
    "V-FOLLOW",
    "V-HANDCUFF",
    "V-MAKE",
    "V-READ",
    "V-SHOW",
    "V-SIT",
    "V-TELL",
    "PRE-TELL-ME",
    "V-TELL-ME",
    "PRE-TELL-ME-ABOUT",
    "V-WAIT-FOR",
    "V-WALK",
    "PLAYER-GETS-UP",
    "OPEN-DOOR",
    "V-WHAT",
    "V-DANCE",
    "NEARBY?",
    "V-$DISCOVER",
    "V-TAKE-OFF"
   ]
  },
  "ME": {
   "name": "ME",
   "file": "people.zil",
   "line": 195,
   "endLine": 203,
   "desc": "yourself",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT",
    "TRANSBIT",
    "PERSON"
   ],
   "synonyms": [
    "ME",
    "REPORTER",
    "MYSELF"
   ],
   "adjectives": [
    "COWBOY",
    "COWGIRL"
   ],
   "action": "ME-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "0"
    ],
    "SIZE": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT ME\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"yourself\")\n\t(SYNONYM ME REPORTER MYSELF ;I)\n\t(ADJECTIVE COWBOY COWGIRL)\n\t(ACTION ME-F)\n\t(FLAGS NDESCBIT TRANSBIT PERSON)\n\t(CHARACTER 0)\n\t(SIZE 0)>",
   "referencedBy": [
    "QCONTEXT-CHECK",
    "GLOBAL-PERSON-F",
    "PLAYER-F",
    "ME-F",
    "DONT-HANDLE?",
    "BARTENDER-F",
    "FIREPLACE-F",
    "PRE-ASK-ABOUT",
    "PRE-FIND",
    "V-FINGERPRINT",
    "V-DANCE"
   ]
  },
  "COWBOY-COSTUME": {
   "name": "COWBOY-COSTUME",
   "file": "people.zil",
   "line": 215,
   "endLine": 222,
   "desc": "western outfit",
   "ldesc": null,
   "fdesc": null,
   "loc": "PLAYER",
   "flags": [
    "NDESCBIT",
    "WEARBIT"
   ],
   "synonyms": [
    "COSTUME",
    "OUTFIT"
   ],
   "adjectives": [
    "COWBOY",
    "COWGIRL",
    "MY",
    "WESTERN"
   ],
   "action": "COWBOY-COSTUME-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT COWBOY-COSTUME\n\t(IN PLAYER)\n\t(SYNONYM COSTUME OUTFIT)\n\t(ADJECTIVE COWBOY COWGIRL MY WESTERN)\n\t(DESC \"western outfit\")\n\t(ACTION COWBOY-COSTUME-F)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS NDESCBIT WEARBIT)>",
   "referencedBy": [
    "INTRO",
    "PLAYER-F"
   ]
  },
  "GUNBELT": {
   "name": "GUNBELT",
   "file": "people.zil",
   "line": 231,
   "endLine": 238,
   "desc": "gunbelt",
   "ldesc": null,
   "fdesc": null,
   "loc": "PLAYER",
   "flags": [
    "TAKEBIT",
    "BURNBIT",
    "WEARBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "GUNBELT",
    "HOLSTER",
    "LOOP",
    "LOOPS"
   ],
   "adjectives": [
    "WESTERN",
    "LEATHER",
    "BELT"
   ],
   "action": "GUNBELT-F",
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
   "source": "<OBJECT GUNBELT\n\t(IN PLAYER)\n\t(DESC \"gunbelt\")\n\t(SYNONYM GUNBELT HOLSTER LOOP LOOPS)\n\t(ADJECTIVE WESTERN LEATHER BELT)\n\t(ACTION GUNBELT-F)\n\t(CAPACITY 10)\n\t(FLAGS TAKEBIT BURNBIT WEARBIT CONTBIT OPENBIT)>",
   "referencedBy": [
    "GUNBELT-F",
    "BULLET-F",
    "V-HANG-UP",
    "PRE-WEAR"
   ]
  },
  "PEN": {
   "name": "PEN",
   "file": "people.zil",
   "line": 261,
   "endLine": 266,
   "desc": "pen",
   "ldesc": null,
   "fdesc": null,
   "loc": "PLAYER",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "PEN"
   ],
   "adjectives": [],
   "action": "PEN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PEN\n\t(IN PLAYER)\n\t(DESC \"pen\")\n\t(SYNONYM PEN)\n\t(ACTION PEN-F)\n\t(FLAGS TAKEBIT)>",
   "referencedBy": [
    "PEN-F",
    "NOTEBOOK-F"
   ]
  },
  "NOTEBOOK": {
   "name": "NOTEBOOK",
   "file": "people.zil",
   "line": 276,
   "endLine": 285,
   "desc": "notebook",
   "ldesc": null,
   "fdesc": null,
   "loc": "PLAYER",
   "flags": [
    "TAKEBIT",
    "BURNBIT",
    "READBIT"
   ],
   "synonyms": [
    "NOTEBOOK",
    "NOTES"
   ],
   "adjectives": [
    "REPORTER"
   ],
   "action": "NOTEBOOK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The notebook contains a few doodles, a truncated phrase or two, and\nlittle else."
    ]
   },
   "contents": [],
   "source": "<OBJECT NOTEBOOK\n\t(IN PLAYER)\n\t(DESC \"notebook\")\n\t(SYNONYM NOTEBOOK NOTES)\n\t(ADJECTIVE REPORTER)\n\t(FLAGS TAKEBIT BURNBIT READBIT)\n\t(ACTION NOTEBOOK-F)\n\t(TEXT\n\"The notebook contains a few doodles, a truncated phrase or two, and\nlittle else.\")>",
   "referencedBy": [
    "PEN-F",
    "NOTEBOOK-F",
    "PRE-TAKE"
   ]
  },
  "YOUR-COAT": {
   "name": "YOUR-COAT",
   "file": "people.zil",
   "line": 297,
   "endLine": 303,
   "desc": "reporter's overcoat",
   "ldesc": null,
   "fdesc": null,
   "loc": "EAST-COAT-CLOSET",
   "flags": [
    "TAKEBIT",
    "BURNBIT",
    "OPENBIT",
    "TRANSBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "OVERCOAT",
    "COAT"
   ],
   "adjectives": [
    "PLAYER",
    "REPORTER",
    "MY"
   ],
   "action": "YOUR-COAT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT YOUR-COAT\n\t(IN EAST-COAT-CLOSET)\n\t(DESC \"reporter's overcoat\")\n\t(SYNONYM OVERCOAT COAT)\n\t(ADJECTIVE PLAYER REPORTER MY)\n\t(ACTION YOUR-COAT-F)\n\t(FLAGS TAKEBIT BURNBIT OPENBIT TRANSBIT CONTBIT)>",
   "referencedBy": [
    "YOUR-COAT-F",
    "BUTLER-F",
    "G-BUTLER",
    "V-HANG-UP",
    "PRE-WEAR"
   ]
  },
  "GLOBAL-MICHAEL": {
   "name": "GLOBAL-MICHAEL",
   "file": "people.zil",
   "line": 322,
   "endLine": 329,
   "desc": "Michael",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "TRANSBIT",
    "PERSON"
   ],
   "synonyms": [
    "WELLMAN",
    "SHEIK",
    "MICHAEL",
    "MIKE"
   ],
   "adjectives": [
    "MR",
    "MICHAEL",
    "MIKE"
   ],
   "action": "GLOBAL-PERSON-F",
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
   "source": "<OBJECT GLOBAL-MICHAEL\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Michael\")\n\t(SYNONYM WELLMAN SHEIK MICHAEL MIKE)\n\t(ADJECTIVE MR MICHAEL MIKE)\n\t(ACTION GLOBAL-PERSON-F)\n\t(FLAGS TRANSBIT PERSON)\n\t(CHARACTER 1)>",
   "referencedBy": [
    "MICHAEL-F",
    "ALICIA-F",
    "RICHARD-F",
    "COL-MARSTON-F",
    "LINDA-F",
    "SEN-ASHER-F",
    "COCHRANE-F",
    "OSTMANN-F",
    "BARTENDER-F",
    "V-WAVE"
   ]
  },
  "MICHAEL": {
   "name": "MICHAEL",
   "file": "people.zil",
   "line": 331,
   "endLine": 339,
   "desc": "Michael",
   "ldesc": "Michael, costumed as a sheik, is here.",
   "fdesc": null,
   "loc": "BALLROOM-8",
   "flags": [
    "TRANSBIT",
    "PERSON"
   ],
   "synonyms": [
    "WELLMAN",
    "SHEIK",
    "MICHAEL",
    "MIKE"
   ],
   "adjectives": [
    "MR",
    "MICHAEL",
    "MIKE"
   ],
   "action": "MICHAEL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "1"
    ]
   },
   "contents": [
    "SHEIK-COSTUME",
    "INVESTOR-LIST"
   ],
   "source": "<OBJECT MICHAEL\n\t(IN BALLROOM-8)\n\t(DESC \"Michael\")\n\t(LDESC \"Michael, costumed as a sheik, is here.\")\n\t(SYNONYM WELLMAN SHEIK MICHAEL MIKE)\n\t(ADJECTIVE MR MICHAEL MIKE)\n\t(ACTION MICHAEL-F)\n\t(FLAGS TRANSBIT PERSON)\n\t(CHARACTER 1)>",
   "referencedBy": [
    "I-WAVE",
    "I-WAVE-2",
    "I-SPILL",
    "TELL-MICHAELS-ALIBI",
    "ARREST",
    "CASE-OVER",
    "I-PARTY-OVER",
    "MURDER-TELL",
    "INHABITED?",
    "GO",
    "MICHAEL-F",
    "TELL-MICHAEL-CALLS-POLICE",
    "G-MICHAEL",
    "TELL-LOOK-AROUND",
    "I-MICHAEL-HIDES-FOLDER",
    "TELL-MIKE-WALKS",
    "I-LIBRARY-MEETING",
    "TELL-THREE-STOOGES",
    "TELL-THREE-ARRIVE",
    "GANGS-ALL-HERE",
    "LIBRARY-MEETING",
    "I-END-MEETING",
    "I-ARGUMENT",
    "VERONICA-F",
    "FAIRY-MASK-F",
    "ALICIA-F",
    "I-FLEE",
    "G-ALICIA",
    "I-SCREAMS",
    "THEY-DANCE",
    "I-MICHAEL-TO-GARAGE",
    "RICHARD-F",
    "COL-MARSTON-F",
    "G-COL-MARSTON",
    "SEN-ASHER-F",
    "COCHRANE-F",
    "G-COCHRANE",
    "DETECTIVE-F",
    "LIBRARY-F",
    "GARAGE-F",
    "CROWBAR-F",
    "BALLROOM-8-F",
    "BARN-F",
    "V-$CALL",
    "PRE-FIND",
    "V-LISTEN",
    "V-WAVE"
   ]
  },
  "GLOBAL-VERONICA": {
   "name": "GLOBAL-VERONICA",
   "file": "people.zil",
   "line": 920,
   "endLine": 929,
   "desc": "Veronica",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "TRANSBIT",
    "PERSON",
    "FEMALE",
    "THE"
   ],
   "synonyms": [
    "VERONICA",
    "TITANIA",
    "QUEEN",
    "ASHCROFT"
   ],
   "adjectives": [
    "VERONICA",
    "MRS",
    "MS",
    "FAIRY",
    "WIFE"
   ],
   "action": "GLOBAL-VERONICA-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SDESC": [
     "fairy queen"
    ],
    "GENERIC": [
     "GENERIC-VERONICA-F"
    ],
    "CHARACTER": [
     "2"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-VERONICA\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Veronica\")\n\t(SDESC \"fairy queen\")\n\t(SYNONYM VERONICA TITANIA QUEEN ASHCROFT ;WELLMAN)\n\t(ADJECTIVE VERONICA MRS MS FAIRY WIFE)\n\t(ACTION GLOBAL-VERONICA-F)\n\t(GENERIC GENERIC-VERONICA-F)\n\t(FLAGS TRANSBIT PERSON FEMALE THE)\n\t(CHARACTER 2)>",
   "referencedBy": [
    "MICHAEL-F",
    "VERONICA-UNMASKS",
    "GLOBAL-VERONICA-F",
    "ALICIA-F",
    "RICHARD-F",
    "COL-MARSTON-F",
    "LINDA-F",
    "SEN-ASHER-F",
    "COCHRANE-F",
    "OSTMANN-F",
    "BARTENDER-F",
    "DETECTIVE-F",
    "GLOBAL-MURDER-F",
    "JACK-F",
    "V-WAVE"
   ]
  },
  "VERONICA": {
   "name": "VERONICA",
   "file": "people.zil",
   "line": 944,
   "endLine": 954,
   "desc": "Veronica",
   "ldesc": null,
   "fdesc": null,
   "loc": "BALLROOM-8",
   "flags": [
    "TRANSBIT",
    "PERSON",
    "FEMALE",
    "THE"
   ],
   "synonyms": [
    "VERONICA",
    "TITANIA",
    "QUEEN",
    "ASHCROFT"
   ],
   "adjectives": [
    "VERONICA",
    "MRS",
    "MS",
    "FAIRY",
    "WIFE"
   ],
   "action": "VERONICA-F",
   "descfcn": "VERONICA-DESC-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SDESC": [
     "fairy queen"
    ],
    "GENERIC": [
     "GENERIC-VERONICA-F"
    ],
    "CHARACTER": [
     "2"
    ]
   },
   "contents": [
    "FAIRY-COSTUME",
    "STAIN",
    "FAIRY-MASK"
   ],
   "source": "<OBJECT VERONICA\n\t(IN BALLROOM-8)\n\t(DESC \"Veronica\")\n\t(SDESC \"fairy queen\")\n\t(SYNONYM VERONICA TITANIA QUEEN ASHCROFT ;WELLMAN)\n\t(ADJECTIVE VERONICA MRS MS FAIRY WIFE)\n\t(ACTION VERONICA-F)\n\t(DESCFCN VERONICA-DESC-F)\n\t(GENERIC GENERIC-VERONICA-F)\n\t(FLAGS TRANSBIT PERSON FEMALE THE)\n\t(CHARACTER 2)>",
   "referencedBy": [
    "INTRO",
    "I-WAVE",
    "I-SPILL",
    "TELL-MICHAELS-ALIBI",
    "ARREST",
    "CASE-OVER",
    "MURDER-TELL",
    "INHABITED?",
    "PLAYER-F",
    "MICHAEL-F",
    "G-MICHAEL",
    "VERONICA-UNMASKED?",
    "VERONICA-UNMASKS",
    "GLOBAL-VERONICA-F",
    "GENERIC-VERONICA-F",
    "VERONICA-DESC-F",
    "VERONICA-F",
    "G-VERONICA",
    "CORPSE-DESC-F",
    "CORPSE-F",
    "FAIRY-MASK-F",
    "ALICIA-F",
    "RICHARD-F",
    "COL-MARSTON-F",
    "LINDA-F",
    "SEN-ASHER-F",
    "COCHRANE-F",
    "OSTMANN-F",
    "BUTLER-DESC-F",
    "G-BUTLER",
    "BARTENDER-F",
    "DETECTIVE-F",
    "PLAYER-ARRESTED?",
    "TELL-BODY-THERE",
    "DUFFY-FINDS-BODY?",
    "HALLWAY-12-F",
    "TELL-P&S",
    "BALLROOM-8-F",
    "BALLROOM-F",
    "BARN-F",
    "GLOBAL-MURDER-F",
    "GLASS-F",
    "LIQUID-F",
    "JACK-F",
    "FOOD-F",
    "PRE-FIND",
    "V-LISTEN",
    "PRE-TAKE",
    "V-TELL",
    "V-WAVE",
    "V-$DISCOVER"
   ]
  },
  "CORPSE": {
   "name": "CORPSE",
   "file": "people.zil",
   "line": 1036,
   "endLine": 1047,
   "desc": "Veronica's body",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE",
   "flags": [
    "INVISIBLE",
    "SEARCHBIT",
    "TAKEBIT",
    "TRANSBIT",
    "CONTBIT",
    "SURFACEBIT",
    "PERSON",
    "OPENBIT",
    "FEMALE",
    "TOLD"
   ],
   "synonyms": [
    "CORPSE",
    "BODY",
    "VERONICA",
    "TITANIA"
   ],
   "adjectives": [
    "MS",
    "MRS",
    "FAIRY",
    "QUEEN",
    "WIFE",
    "ASHCROFT",
    "VERONICA"
   ],
   "action": "CORPSE-F",
   "descfcn": "CORPSE-DESC-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-VERONICA-F"
    ],
    "CAPACITY": [
     "30"
    ],
    "SIZE": [
     "70"
    ]
   },
   "contents": [
    "BULLET",
    "VERONICA-HAIR",
    "PULSE"
   ],
   "source": "<OBJECT CORPSE\n\t(IN OFFICE)\n\t(DESC \"Veronica's body\")\n\t(SYNONYM CORPSE BODY VERONICA TITANIA)\n\t(ADJECTIVE MS MRS FAIRY QUEEN WIFE ASHCROFT VERONICA ;\"9/17\")\n\t(DESCFCN CORPSE-DESC-F)\n\t(ACTION CORPSE-F)\n\t(GENERIC GENERIC-VERONICA-F)\n\t(FLAGS INVISIBLE SEARCHBIT TAKEBIT TRANSBIT CONTBIT SURFACEBIT\n\t       PERSON OPENBIT FEMALE TOLD)\n\t(CAPACITY 30)\n\t(SIZE 70)>",
   "referencedBy": [
    "I-PARTY-OVER",
    "DISCOVER-BODY",
    "WHERE-UPDATE",
    "PERFORM",
    "PLAYER-F",
    "MICHAEL-F",
    "G-MICHAEL",
    "GANGS-ALL-HERE",
    "GLOBAL-VERONICA-F",
    "G-VERONICA",
    "CORPSE-DESC-F",
    "CORPSE-F",
    "FAIRY-COSTUME-F",
    "FAIRY-MASK-F",
    "PULSE-F",
    "ALICIA-F",
    "START-ALICIA",
    "COL-MARSTON-F",
    "COCHRANE-F",
    "OSTMANN-F",
    "DETECTIVE-DESC-F",
    "DETECTIVE-F",
    "DETECTIVE-FINDS-BODY?",
    "OPEN-HIDING-PLACE",
    "DUFFY-F",
    "CAUGHT-WITH-BODY?",
    "DUFFY-FINDS-BODY?",
    "GO-AFTER-BODY?",
    "I-AMBULANCE",
    "WINDOW-SEAT-F",
    "DESK-F",
    "FIREPLACE-F",
    "FIND-NOT-HERE",
    "GLOBAL-MURDER-F",
    "JACK-F",
    "GLOBAL-CHAIR-F",
    "DESCRIBE-OBJECT",
    "PRE-ACCUSE",
    "PRE-FIND",
    "PRE-LEAVE",
    "PRE-TAKE",
    "V-$DISCOVER"
   ]
  },
  "BULLET": {
   "name": "BULLET",
   "file": "people.zil",
   "line": 1185,
   "endLine": 1191,
   "desc": "silver bullet",
   "ldesc": null,
   "fdesc": null,
   "loc": "CORPSE",
   "flags": [
    "INVISIBLE",
    "TAKEBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "BULLET",
    "OBJECT"
   ],
   "adjectives": [
    "SILVER",
    "SMALL"
   ],
   "action": "BULLET-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BULLET\n\t(IN CORPSE)\n\t(DESC \"silver bullet\")\n\t(SYNONYM BULLET OBJECT)\n\t(ADJECTIVE SILVER SMALL)\n\t(ACTION BULLET-F)\n\t(FLAGS INVISIBLE TAKEBIT TRYTAKEBIT)>",
   "referencedBy": [
    "GUNBELT-F",
    "CORPSE-F",
    "BULLET-F",
    "DETECTIVE-F",
    "DETECTIVE-FINDS-BODY?"
   ]
  },
  "FAIRY-COSTUME": {
   "name": "FAIRY-COSTUME",
   "file": "people.zil",
   "line": 1229,
   "endLine": 1236,
   "desc": "fairy costume",
   "ldesc": null,
   "fdesc": null,
   "loc": "VERONICA",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "COSTUME",
    "TITANIA"
   ],
   "adjectives": [
    "FAIRY",
    "VERONICA"
   ],
   "action": "FAIRY-COSTUME-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-VERONICA-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT FAIRY-COSTUME\n\t(IN VERONICA)\n\t(DESC \"fairy costume\")\n\t(SYNONYM COSTUME TITANIA)\n\t(ADJECTIVE FAIRY VERONICA)\n\t(ACTION FAIRY-COSTUME-F)\n\t(GENERIC GENERIC-VERONICA-F)\n\t(FLAGS NDESCBIT ;TAKEBIT ;TRYTAKEBIT)>",
   "referencedBy": [
    "G-VERONICA",
    "FAIRY-COSTUME-F",
    "GENERIC-STUFF-F",
    "FIREPLACE-F",
    "JACK-F",
    "PRE-TAKE"
   ]
  },
  "STAIN": {
   "name": "STAIN",
   "file": "people.zil",
   "line": 1250,
   "endLine": 1257,
   "desc": "stain",
   "ldesc": null,
   "fdesc": null,
   "loc": "VERONICA",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "STAIN"
   ],
   "adjectives": [
    "RED"
   ],
   "action": "STAIN-F",
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
   "source": "<OBJECT STAIN\n\t(IN VERONICA)\n\t(DESC \"stain\")\n\t(SYNONYM STAIN)\n\t(ADJECTIVE RED)\n\t(ACTION STAIN-F)\n\t(FLAGS NDESCBIT)\n\t(SIZE 0)>",
   "referencedBy": [
    "G-VERONICA",
    "DETECTIVE-F",
    "DUFFY-TO-LAB"
   ]
  },
  "STAIN-SAMPLE": {
   "name": "STAIN-SAMPLE",
   "file": "people.zil",
   "line": 1259,
   "endLine": 1263,
   "desc": "cloth sample",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "CLOTH",
    "SAMPLE"
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
    ]
   },
   "contents": [],
   "source": "<OBJECT STAIN-SAMPLE\n\t(DESC \"cloth sample\")\n\t(SYNONYM CLOTH SAMPLE)\n\t(FLAGS TAKEBIT BURNBIT)\n\t(SIZE 1)>",
   "referencedBy": [
    "DETECTIVE-F"
   ]
  },
  "FAIRY-MASK": {
   "name": "FAIRY-MASK",
   "file": "people.zil",
   "line": 1270,
   "endLine": 1280,
   "desc": "fairy mask",
   "ldesc": null,
   "fdesc": "Crumpled on the floor is the fairy costume's mask.",
   "loc": "VERONICA",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT",
    "TAKEBIT",
    "BURNBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "MASK"
   ],
   "adjectives": [
    "FAIRY"
   ],
   "action": "FAIRY-MASK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "10"
    ],
    "SIZE": [
     "5"
    ]
   },
   "contents": [
    "HAIR"
   ],
   "source": "<OBJECT FAIRY-MASK\n\t(IN VERONICA)\n\t(DESC \"fairy mask\")\n\t(FDESC\n\"Crumpled on the floor is the fairy costume's mask.\")\n\t(SYNONYM MASK)\n\t(ADJECTIVE FAIRY)\n\t(ACTION FAIRY-MASK-F)\n\t(FLAGS NDESCBIT TRYTAKEBIT TAKEBIT BURNBIT CONTBIT OPENBIT)\n\t(CAPACITY 10)\n\t(SIZE 5)>",
   "referencedBy": [
    "G-MICHAEL",
    "G-VERONICA",
    "CORPSE-DESC-F",
    "CORPSE-F",
    "FAIRY-MASK-F",
    "ALICIA-F",
    "DETECTIVE-F",
    "GENERIC-STUFF-F",
    "PRE-WEAR"
   ]
  },
  "HAIR": {
   "name": "HAIR",
   "file": "people.zil",
   "line": 1322,
   "endLine": 1329,
   "desc": "dark hair",
   "ldesc": null,
   "fdesc": null,
   "loc": "FAIRY-MASK",
   "flags": [
    "TAKEBIT",
    "BURNBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "HAIR"
   ],
   "adjectives": [
    "DARK"
   ],
   "action": "HAIR-F",
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
   "source": "<OBJECT HAIR\n\t(IN FAIRY-MASK)\n\t(DESC \"dark hair\")\n\t(SYNONYM HAIR)\n\t(ADJECTIVE DARK)\n\t(ACTION HAIR-F)\n\t(FLAGS TAKEBIT BURNBIT INVISIBLE)\n\t(SIZE 1)>",
   "referencedBy": [
    "G-VERONICA",
    "FAIRY-MASK-F",
    "ALICIA-F",
    "DETECTIVE-F",
    "DUFFY-TO-LAB"
   ]
  },
  "VERONICA-HAIR": {
   "name": "VERONICA-HAIR",
   "file": "people.zil",
   "line": 1345,
   "endLine": 1352,
   "desc": "Veronica's hair",
   "ldesc": null,
   "fdesc": null,
   "loc": "CORPSE",
   "flags": [
    "NDESCBIT",
    "FEMALE"
   ],
   "synonyms": [
    "HAIR"
   ],
   "adjectives": [
    "VERONICA"
   ],
   "action": "VERONICA-HAIR-F",
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
   "source": "<OBJECT VERONICA-HAIR\n\t(IN CORPSE)\n\t(DESC \"Veronica's hair\")\n\t(SYNONYM HAIR)\n\t(ADJECTIVE VERONICA)\n\t(ACTION VERONICA-HAIR-F)\n\t(FLAGS NDESCBIT FEMALE ;\"means never use 'the'\")\n\t(SIZE 0)>",
   "referencedBy": [
    "HAIR-F",
    "DETECTIVE-F"
   ]
  },
  "ALICIA-HAIR": {
   "name": "ALICIA-HAIR",
   "file": "people.zil",
   "line": 1359,
   "endLine": 1365,
   "desc": "Alicia's hair",
   "ldesc": null,
   "fdesc": null,
   "loc": "ALICIA",
   "flags": [
    "NDESCBIT",
    "FEMALE"
   ],
   "synonyms": [
    "HAIR"
   ],
   "adjectives": [
    "ALICIA"
   ],
   "action": "ALICIA-HAIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ALICIA-HAIR\n\t(IN ALICIA)\n\t(DESC \"Alicia's hair\")\n\t(SYNONYM HAIR)\n\t(ADJECTIVE ALICIA)\n\t(ACTION ALICIA-HAIR-F)\n\t(FLAGS NDESCBIT FEMALE ;\"means never use 'the'\")>",
   "referencedBy": [
    "HAIR-F",
    "ALICIA-HAIR-F",
    "DETECTIVE-F"
   ]
  },
  "LINDA-HAIR": {
   "name": "LINDA-HAIR",
   "file": "people.zil",
   "line": 1375,
   "endLine": 1381,
   "desc": "Linda's hair",
   "ldesc": null,
   "fdesc": null,
   "loc": "LINDA",
   "flags": [
    "NDESCBIT",
    "FEMALE"
   ],
   "synonyms": [
    "HAIR"
   ],
   "adjectives": [
    "LINDA"
   ],
   "action": "LINDA-HAIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LINDA-HAIR\n\t(IN LINDA)\n\t(DESC \"Linda's hair\")\n\t(SYNONYM HAIR)\n\t(ADJECTIVE LINDA)\n\t(ACTION LINDA-HAIR-F)\n\t(FLAGS NDESCBIT FEMALE ;\"means never use 'the'\")>",
   "referencedBy": [
    "HAIR-F",
    "DETECTIVE-F"
   ]
  },
  "PULSE": {
   "name": "PULSE",
   "file": "people.zil",
   "line": 1391,
   "endLine": 1398,
   "desc": "vital signs",
   "ldesc": null,
   "fdesc": null,
   "loc": "CORPSE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PULSE",
    "BREATH",
    "SIGNS"
   ],
   "adjectives": [
    "VITAL"
   ],
   "action": "PULSE-F",
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
   "source": "<OBJECT PULSE\n\t(IN CORPSE)\n\t(DESC \"vital signs\")\n\t(SYNONYM PULSE BREATH SIGNS)\n\t(ADJECTIVE VITAL)\n\t(ACTION PULSE-F)\n\t(FLAGS NDESCBIT)\n\t(SIZE 0)>",
   "referencedBy": [
    "PULSE-F",
    "PRE-FIND",
    "PRE-TAKE"
   ]
  },
  "POLICE": {
   "name": "POLICE",
   "file": "people.zil",
   "line": 1438,
   "endLine": 1444,
   "desc": "police",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "PERSON",
    "NDESCBIT"
   ],
   "synonyms": [
    "POLICE",
    "COPS"
   ],
   "adjectives": [
    "STATE",
    "COUNTY"
   ],
   "action": "POLICE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT POLICE\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"police\")\n\t(SYNONYM POLICE COPS)\n\t(ADJECTIVE STATE COUNTY)\n\t(ACTION POLICE-F)\n\t(FLAGS PERSON NDESCBIT)>",
   "referencedBy": [
    "POLICE-F",
    "DETECTIVE-F",
    "DUFFY-F",
    "V-PHONE",
    "PRE-FIND"
   ]
  },
  "GLOBAL-ALICIA": {
   "name": "GLOBAL-ALICIA",
   "file": "people.zil",
   "line": 1497,
   "endLine": 1504,
   "desc": "Alicia",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "TRANSBIT",
    "CONTBIT",
    "PERSON",
    "FEMALE"
   ],
   "synonyms": [
    "GIRL",
    "BARRON",
    "ALICIA"
   ],
   "adjectives": [
    "ALICIA",
    "HAREM",
    "MS",
    "MISS"
   ],
   "action": "GLOBAL-PERSON-F",
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
   "source": "<OBJECT GLOBAL-ALICIA\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Alicia\")\n\t(SYNONYM GIRL BARRON ALICIA)\n\t(ADJECTIVE ALICIA HAREM MS MISS)\n\t(ACTION GLOBAL-PERSON-F)\n\t(FLAGS TRANSBIT CONTBIT PERSON FEMALE)\n\t(CHARACTER 3)>",
   "referencedBy": [
    "MICHAEL-F",
    "ALICIA-F",
    "RICHARD-F",
    "COL-MARSTON-F",
    "LINDA-F",
    "SEN-ASHER-F",
    "COCHRANE-F",
    "OSTMANN-F",
    "BARTENDER-F"
   ]
  },
  "ALICIA": {
   "name": "ALICIA",
   "file": "people.zil",
   "line": 1506,
   "endLine": 1513,
   "desc": "Alicia",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TRANSBIT",
    "CONTBIT",
    "PERSON",
    "FEMALE"
   ],
   "synonyms": [
    "GIRL",
    "BARRON",
    "ALICIA"
   ],
   "adjectives": [
    "ALICIA",
    "HAREM",
    "MS",
    "MISS"
   ],
   "action": "ALICIA-F",
   "descfcn": "ALICIA-DESC-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "3"
    ]
   },
   "contents": [
    "ALICIA-HAIR",
    "ALICIA-COAT",
    "HAREM-COSTUME"
   ],
   "source": "<OBJECT ALICIA\n\t(DESC \"Alicia\")\n\t(SYNONYM GIRL BARRON ALICIA)\n\t(ADJECTIVE ALICIA HAREM MS MISS)\n\t(ACTION ALICIA-F)\n\t(DESCFCN ALICIA-DESC-F)\n\t(FLAGS TRANSBIT CONTBIT PERSON FEMALE)\n\t(CHARACTER 3)>",
   "referencedBy": [
    "ARREST",
    "DUFFY-PERFORMS-ARREST",
    "CASE-OVER",
    "I-PARTY-OVER",
    "INHABITED?",
    "MICHAEL-F",
    "G-MICHAEL",
    "ALICIA-HAIR-F",
    "ALICIA-DESC-F",
    "ALICIA-COAT-F",
    "ALICIA-F",
    "I-FLEE",
    "G-ALICIA",
    "I-SCREAMS",
    "I-ESCAPE",
    "START-ALICIA",
    "THEY-DANCE",
    "I-MICHAEL-TO-GARAGE",
    "G-BUTLER",
    "NEW-ARRIVAL-STUFF",
    "BARN-F",
    "V-$CALL",
    "V-FIND"
   ]
  },
  "ALICIA-COAT": {
   "name": "ALICIA-COAT",
   "file": "people.zil",
   "line": 1526,
   "endLine": 1533,
   "desc": "wet overcoat",
   "ldesc": null,
   "fdesc": null,
   "loc": "ALICIA",
   "flags": [
    "TAKEBIT",
    "BURNBIT",
    "NDESCBIT",
    "CONTBIT",
    "TRYTAKEBIT",
    "OPENBIT",
    "SEARCHBIT",
    "ALICIABIT"
   ],
   "synonyms": [
    "OVERCOAT",
    "COAT"
   ],
   "adjectives": [
    "ALICIA",
    "WET"
   ],
   "action": "ALICIA-COAT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "LABEL"
   ],
   "source": "<OBJECT ALICIA-COAT\n\t(IN ALICIA)\n\t(DESC \"wet overcoat\")\n\t(SYNONYM OVERCOAT COAT)\n\t(ADJECTIVE ALICIA WET)\n\t(ACTION ALICIA-COAT-F)\n\t(FLAGS TAKEBIT BURNBIT NDESCBIT CONTBIT\n\t       TRYTAKEBIT OPENBIT SEARCHBIT ALICIABIT)>",
   "referencedBy": [
    "ALICIA-DESC-F",
    "ALICIA-COAT-F",
    "ALICIA-F",
    "G-ALICIA",
    "BUTLER-F",
    "G-BUTLER",
    "DETECTIVE-F",
    "V-HANG-UP",
    "PRE-WEAR"
   ]
  },
  "LABEL": {
   "name": "LABEL",
   "file": "people.zil",
   "line": 1535,
   "endLine": 1543,
   "desc": "label",
   "ldesc": null,
   "fdesc": null,
   "loc": "ALICIA-COAT",
   "flags": [
    "INVISIBLE",
    "READBIT"
   ],
   "synonyms": [
    "LABEL"
   ],
   "adjectives": [],
   "action": "ALICIA-COAT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "In the coat is a label which reads \"Lord and Taylor\" and underneath\nthat in sewn script, \"Alicia Barron.\""
    ]
   },
   "contents": [],
   "source": "<OBJECT LABEL\n\t(IN ALICIA-COAT)\n\t(DESC \"label\")\n\t(SYNONYM LABEL)\n\t(ACTION ALICIA-COAT-F)\n\t(FLAGS INVISIBLE READBIT)\n\t(TEXT\n\"In the coat is a label which reads \\\"Lord and Taylor\\\" and underneath\nthat in sewn script, \\\"Alicia Barron.\\\"\")>",
   "referencedBy": [
    "ALICIA-COAT-F"
   ]
  },
  "ALICIA-CAR": {
   "name": "ALICIA-CAR",
   "file": "people.zil",
   "line": 1755,
   "endLine": 1760,
   "desc": "Alicia's car",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "CAR"
   ],
   "adjectives": [
    "ALICIA"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ALICIA-CAR\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Alicia's car\")\n\t(SYNONYM CAR)\n\t(ADJECTIVE ALICIA)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "ALICIA-F"
   ]
  },
  "NOT-ROPE": {
   "name": "NOT-ROPE",
   "file": "people.zil",
   "line": 1773,
   "endLine": 1778,
   "desc": "lariat (no, you left it with your coat)",
   "ldesc": null,
   "fdesc": null,
   "loc": "PLAYER",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "LARIAT",
    "LASSO",
    "ROPE"
   ],
   "adjectives": [],
   "action": "NOT-ROPE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT NOT-ROPE\n\t(IN PLAYER)\n\t(DESC \"lariat (no, you left it with your coat)\")\n\t(SYNONYM LARIAT LASSO ROPE)\n\t(ACTION NOT-ROPE-F)\n\t(FLAGS NDESCBIT TRYTAKEBIT TAKEBIT)>",
   "referencedBy": [
    "PLAYER-F",
    "CORPSE-DESC-F",
    "NOT-ROPE-F",
    "ROPE-F",
    "PRE-TAKE"
   ]
  },
  "ROPE": {
   "name": "ROPE",
   "file": "people.zil",
   "line": 1791,
   "endLine": 1796,
   "desc": "lariat",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT",
    "TAKEBIT",
    "BURNBIT",
    "WEAPONBIT"
   ],
   "synonyms": [
    "LARIAT",
    "LASSO",
    "ROPE"
   ],
   "adjectives": [],
   "action": "ROPE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ROPE\n\t(IN OFFICE)\n\t(DESC \"lariat\")\n\t(SYNONYM LARIAT LASSO ROPE)\n\t(ACTION ROPE-F)\n\t(FLAGS NDESCBIT TRYTAKEBIT TAKEBIT BURNBIT WEAPONBIT)>",
   "referencedBy": [
    "G-MICHAEL",
    "CORPSE-DESC-F",
    "CORPSE-F",
    "ROPE-F",
    "DETECTIVE-F",
    "DETECTIVE-SEES-ROPE?",
    "I-AMBULANCE"
   ]
  },
  "GLOBAL-RICHARD": {
   "name": "GLOBAL-RICHARD",
   "file": "people.zil",
   "line": 1977,
   "endLine": 1985,
   "desc": "Richard",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "TRANSBIT",
    "PERSON",
    "THE"
   ],
   "synonyms": [
    "ASHCROFT",
    "WEREWOLF",
    "RICHARD"
   ],
   "adjectives": [
    "MR",
    "RICHARD"
   ],
   "action": "GLOBAL-PERSON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SDESC": [
     "Werewolf"
    ],
    "CHARACTER": [
     "4"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-RICHARD\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Richard\")\n\t(SDESC \"Werewolf\")\n\t(SYNONYM ASHCROFT WEREWOLF RICHARD)\n\t(ADJECTIVE MR RICHARD)\n\t(ACTION GLOBAL-PERSON-F)\n\t(FLAGS TRANSBIT PERSON THE)\n\t(CHARACTER 4)>",
   "referencedBy": [
    "MICHAEL-F",
    "ALICIA-F",
    "RICHARD-UNMASKS",
    "COL-MARSTON-F",
    "LINDA-F",
    "SEN-ASHER-F",
    "COCHRANE-F",
    "OSTMANN-F",
    "BARTENDER-F"
   ]
  },
  "RICHARD": {
   "name": "RICHARD",
   "file": "people.zil",
   "line": 1987,
   "endLine": 1995,
   "desc": null,
   "ldesc": "A petulant werewolf slouches nearby.",
   "fdesc": null,
   "loc": "SITTING-ROOM",
   "flags": [
    "TRANSBIT",
    "PERSON",
    "THE"
   ],
   "synonyms": [
    "ASHCROFT",
    "WEREWOLF",
    "RICHARD"
   ],
   "adjectives": [
    "MR",
    "RICHARD"
   ],
   "action": "RICHARD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SDESC": [
     "Werewolf"
    ],
    "CHARACTER": [
     "4"
    ]
   },
   "contents": [
    "WEREWOLF-COSTUME"
   ],
   "source": "<OBJECT RICHARD\n\t(IN SITTING-ROOM)\n\t(SDESC \"Werewolf\")\n\t(LDESC \"A petulant werewolf slouches nearby.\")\n\t(SYNONYM ASHCROFT WEREWOLF RICHARD)\n\t(ADJECTIVE MR RICHARD)\n\t(ACTION RICHARD-F)\n\t(FLAGS TRANSBIT PERSON THE)\n\t(CHARACTER 4)>",
   "referencedBy": [
    "ARREST",
    "I-PARTY-OVER",
    "INHABITED?",
    "RICHARD-UNMASKED?",
    "RICHARD-UNMASKS",
    "RICHARD-F",
    "G-RICHARD",
    "PRE-FIND"
   ]
  },
  "GLOBAL-COL-MARSTON": {
   "name": "GLOBAL-COL-MARSTON",
   "file": "people.zil",
   "line": 2134,
   "endLine": 2141,
   "desc": "Colonel Marston",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "TRANSBIT",
    "PERSON"
   ],
   "synonyms": [
    "MARSTON",
    "EXPLORER",
    "HUNTER",
    "ROBERT"
   ],
   "adjectives": [
    "COLONEL",
    "ROBERT"
   ],
   "action": "GLOBAL-PERSON-F",
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
   "source": "<OBJECT GLOBAL-COL-MARSTON\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Colonel Marston\")\n\t(SYNONYM MARSTON EXPLORER HUNTER ROBERT)\n\t(ADJECTIVE COLONEL ROBERT)\n\t(ACTION GLOBAL-PERSON-F)\n\t(FLAGS TRANSBIT PERSON)\n\t(CHARACTER 5)>",
   "referencedBy": [
    "MICHAEL-F",
    "ALICIA-F",
    "RICHARD-F",
    "LINDA-F",
    "SEN-ASHER-F",
    "COCHRANE-F",
    "OSTMANN-F",
    "BARTENDER-F"
   ]
  },
  "COL-MARSTON": {
   "name": "COL-MARSTON",
   "file": "people.zil",
   "line": 2143,
   "endLine": 2151,
   "desc": "Colonel Marston",
   "ldesc": "Colonel Marston, the African Explorer, is here.",
   "fdesc": null,
   "loc": "LIVING-ROOM",
   "flags": [
    "TRANSBIT",
    "PERSON"
   ],
   "synonyms": [
    "MARSTON",
    "EXPLORER",
    "HUNTER",
    "ROBERT"
   ],
   "adjectives": [
    "COL",
    "COLONEL",
    "ROBERT"
   ],
   "action": "COL-MARSTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "5"
    ]
   },
   "contents": [
    "EXPLORER-COSTUME"
   ],
   "source": "<OBJECT COL-MARSTON\n\t(IN LIVING-ROOM)\n\t(DESC \"Colonel Marston\")\n\t(LDESC \"Colonel Marston, the African Explorer, is here.\")\n\t(SYNONYM MARSTON EXPLORER HUNTER ROBERT)\n\t(ADJECTIVE COL COLONEL ROBERT)\n\t(ACTION COL-MARSTON-F)\n\t(FLAGS TRANSBIT PERSON)\n\t(CHARACTER 5)>",
   "referencedBy": [
    "ARREST",
    "CASE-OVER",
    "I-PARTY-OVER",
    "INHABITED?",
    "MICHAEL-F",
    "G-MICHAEL",
    "I-LIBRARY-MEETING",
    "TELL-THREE-STOOGES",
    "TELL-THREE-ARRIVE",
    "GANGS-ALL-HERE",
    "LIBRARY-MEETING",
    "I-END-MEETING",
    "I-ARGUMENT",
    "COL-MARSTON-F",
    "G-COL-MARSTON",
    "COCHRANE-F",
    "G-COCHRANE",
    "DETECTIVE-F",
    "LIBRARY-F",
    "V-LISTEN"
   ]
  },
  "GLOBAL-LINDA": {
   "name": "GLOBAL-LINDA",
   "file": "people.zil",
   "line": 2398,
   "endLine": 2405,
   "desc": "Linda",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "TRANSBIT",
    "PERSON",
    "FEMALE"
   ],
   "synonyms": [
    "LINDA",
    "MEADE",
    "BALLERINA"
   ],
   "adjectives": [
    "LINDA",
    "MISS",
    "MS"
   ],
   "action": "GLOBAL-PERSON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "6"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-LINDA\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Linda\")\n\t(SYNONYM LINDA MEADE BALLERINA)\n\t(ADJECTIVE LINDA MISS MS)\n\t(ACTION GLOBAL-PERSON-F)\n\t(FLAGS TRANSBIT PERSON FEMALE)\n\t(CHARACTER 6)>",
   "referencedBy": [
    "MICHAEL-F",
    "ALICIA-F",
    "RICHARD-F",
    "COL-MARSTON-F",
    "SEN-ASHER-F",
    "COCHRANE-F",
    "OSTMANN-F",
    "BARTENDER-F"
   ]
  },
  "LINDA": {
   "name": "LINDA",
   "file": "people.zil",
   "line": 2407,
   "endLine": 2415,
   "desc": "Linda",
   "ldesc": "Linda Meade, prima ballerina, is here.",
   "fdesc": null,
   "loc": "SITTING-ROOM",
   "flags": [
    "TRANSBIT",
    "PERSON",
    "FEMALE"
   ],
   "synonyms": [
    "LINDA",
    "MEADE",
    "BALLERINA"
   ],
   "adjectives": [
    "LINDA",
    "MISS",
    "MS"
   ],
   "action": "LINDA-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "6"
    ]
   },
   "contents": [
    "LINDA-HAIR",
    "BALLERINA-COSTUME"
   ],
   "source": "<OBJECT LINDA\n\t(IN SITTING-ROOM)\n\t(DESC \"Linda\")\n\t(LDESC \"Linda Meade, prima ballerina, is here.\")\n\t(SYNONYM LINDA MEADE BALLERINA)\n\t(ADJECTIVE LINDA MISS MS)\n\t(ACTION LINDA-F)\n\t(FLAGS TRANSBIT PERSON FEMALE)\n\t(CHARACTER 6)>",
   "referencedBy": [
    "I-PARTY-OVER",
    "INHABITED?",
    "LINDA-F",
    "G-LINDA"
   ]
  },
  "GLOBAL-SEN-ASHER": {
   "name": "GLOBAL-SEN-ASHER",
   "file": "people.zil",
   "line": 2514,
   "endLine": 2521,
   "desc": "Senator Asher",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "TRANSBIT",
    "PERSON"
   ],
   "synonyms": [
    "ASHER",
    "HARLEQUIN",
    "ALAN",
    "AL"
   ],
   "adjectives": [
    "SENATOR",
    "SEN",
    "ALAN",
    "AL"
   ],
   "action": "GLOBAL-PERSON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "7"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-SEN-ASHER\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Senator Asher\")\n\t(SYNONYM ASHER HARLEQUIN ALAN AL)\n\t(ADJECTIVE SENATOR SEN ALAN AL)\n\t(ACTION GLOBAL-PERSON-F)\n\t(FLAGS TRANSBIT PERSON)\n\t(CHARACTER 7)>",
   "referencedBy": [
    "MICHAEL-F",
    "ALICIA-F",
    "RICHARD-F",
    "COL-MARSTON-F",
    "LINDA-F",
    "COCHRANE-F",
    "OSTMANN-F",
    "BARTENDER-F"
   ]
  },
  "SEN-ASHER": {
   "name": "SEN-ASHER",
   "file": "people.zil",
   "line": 2523,
   "endLine": 2531,
   "desc": "Senator Asher",
   "ldesc": null,
   "fdesc": null,
   "loc": "MEDIA-ROOM",
   "flags": [
    "TRANSBIT",
    "PERSON"
   ],
   "synonyms": [
    "ASHER",
    "HARLEQUIN",
    "ALAN",
    "AL"
   ],
   "adjectives": [
    "SENATOR",
    "ALAN",
    "AL",
    "SEN"
   ],
   "action": "SEN-ASHER-F",
   "descfcn": "SEN-ASHER-DESC-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "7"
    ]
   },
   "contents": [
    "HARLEQUIN-COSTUME"
   ],
   "source": "<OBJECT SEN-ASHER\n\t(IN MEDIA-ROOM)\n\t(DESC \"Senator Asher\")\n\t(SYNONYM ASHER HARLEQUIN ALAN AL)\n\t(ADJECTIVE SENATOR ALAN AL SEN)\n\t(ACTION SEN-ASHER-F)\n\t(DESCFCN SEN-ASHER-DESC-F)\n\t(FLAGS TRANSBIT PERSON)\n\t(CHARACTER 7)>",
   "referencedBy": [
    "ARREST",
    "I-PARTY-OVER",
    "INHABITED?",
    "MICHAEL-F",
    "SEN-ASHER-DESC-F",
    "SEN-ASHER-F",
    "G-SEN-ASHER"
   ]
  },
  "GLOBAL-COCHRANE": {
   "name": "GLOBAL-COCHRANE",
   "file": "people.zil",
   "line": 2668,
   "endLine": 2676,
   "desc": "Cochrane",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "TRANSBIT",
    "PERSON",
    "THE",
    "AN"
   ],
   "synonyms": [
    "COCHRANE",
    "ASTRONAUT",
    "SPACEMAN",
    "BILL"
   ],
   "adjectives": [
    "BILL",
    "WILLIAM",
    "MR"
   ],
   "action": "GLOBAL-PERSON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SDESC": [
     "Astronaut"
    ],
    "CHARACTER": [
     "8"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-COCHRANE\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Cochrane\")\n\t(SDESC \"Astronaut\")\n\t(SYNONYM COCHRANE ASTRONAUT SPACEMAN BILL)\n\t(ADJECTIVE BILL WILLIAM MR)\n\t(ACTION GLOBAL-PERSON-F)\n\t(FLAGS TRANSBIT PERSON THE AN)\n\t(CHARACTER 8)>",
   "referencedBy": [
    "MICHAEL-F",
    "ALICIA-F",
    "RICHARD-F",
    "COL-MARSTON-F",
    "LINDA-F",
    "SEN-ASHER-F",
    "COCHRANE-UNMASKS",
    "OSTMANN-F",
    "BARTENDER-F"
   ]
  },
  "COCHRANE": {
   "name": "COCHRANE",
   "file": "people.zil",
   "line": 2678,
   "endLine": 2688,
   "desc": "Cochrane",
   "ldesc": "An astronaut in an itchy spacesuit is here.",
   "fdesc": null,
   "loc": "EAST-BATH",
   "flags": [
    "TRANSBIT",
    "PERSON",
    "AN",
    "THE"
   ],
   "synonyms": [
    "COCHRANE",
    "ASTRONAUT",
    "SPACEMAN",
    "BILL"
   ],
   "adjectives": [
    "BILL",
    "WILLIAM",
    "MR"
   ],
   "action": "COCHRANE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SDESC": [
     "Astronaut"
    ],
    "CHARACTER": [
     "8"
    ]
   },
   "contents": [
    "ASTRONAUT-COSTUME"
   ],
   "source": "<OBJECT COCHRANE\n\t(IN EAST-BATH)\n\t(SDESC \"Astronaut\")\n\t(DESC \"Cochrane\")\n\t(LDESC\n\"An astronaut in an itchy spacesuit is here.\")\n\t(SYNONYM COCHRANE ASTRONAUT SPACEMAN BILL)\n\t(ADJECTIVE BILL WILLIAM MR)\n\t(ACTION COCHRANE-F)\n\t(FLAGS TRANSBIT PERSON AN THE)\n\t(CHARACTER 8)>",
   "referencedBy": [
    "ARREST",
    "I-PARTY-OVER",
    "INHABITED?",
    "START-MOVEMENT",
    "G-MICHAEL",
    "TELL-THREE-STOOGES",
    "TELL-THREE-ARRIVE",
    "GANGS-ALL-HERE",
    "I-ARGUMENT",
    "G-COL-MARSTON",
    "SEN-ASHER-F",
    "COCHRANE-UNMASKS",
    "COCHRANE-F",
    "G-COCHRANE",
    "OSTMANN-F",
    "C&D-SNUB",
    "DETECTIVE-F",
    "V-LISTEN"
   ]
  },
  "GLOBAL-OSTMANN": {
   "name": "GLOBAL-OSTMANN",
   "file": "people.zil",
   "line": 2905,
   "endLine": 2912,
   "desc": "Ostmann",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "TRANSBIT",
    "PERSON"
   ],
   "synonyms": [
    "OSTMANN",
    "VAMPIRE",
    "SAM",
    "SAMUEL"
   ],
   "adjectives": [
    "MR",
    "SAM",
    "SAMUEL"
   ],
   "action": "GLOBAL-PERSON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "9"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-OSTMANN\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Ostmann\")\n\t(SYNONYM OSTMANN VAMPIRE SAM SAMUEL)\n\t(ADJECTIVE MR SAM SAMUEL)\n\t(ACTION GLOBAL-PERSON-F)\n\t(FLAGS TRANSBIT PERSON)\n\t(CHARACTER 9)>",
   "referencedBy": [
    "MICHAEL-F",
    "ALICIA-F",
    "RICHARD-F",
    "COL-MARSTON-F",
    "LINDA-F",
    "SEN-ASHER-F",
    "COCHRANE-F",
    "BARTENDER-F"
   ]
  },
  "OSTMANN": {
   "name": "OSTMANN",
   "file": "people.zil",
   "line": 2914,
   "endLine": 2922,
   "desc": "Ostmann",
   "ldesc": null,
   "fdesc": null,
   "loc": "BALLROOM-9",
   "flags": [
    "TRANSBIT",
    "PERSON"
   ],
   "synonyms": [
    "OSTMANN",
    "VAMPIRE",
    "SAM",
    "SAMUEL"
   ],
   "adjectives": [
    "MR",
    "SAM",
    "SAMUEL"
   ],
   "action": "OSTMANN-F",
   "descfcn": "OSTMANN-DESC-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "9"
    ]
   },
   "contents": [
    "VAMPIRE-COSTUME"
   ],
   "source": "<OBJECT OSTMANN\n\t(IN BALLROOM-9)\n\t(DESC \"Ostmann\")\n\t(SYNONYM OSTMANN VAMPIRE SAM SAMUEL)\n\t(ADJECTIVE MR SAM SAMUEL)\n\t(ACTION OSTMANN-F)\n\t(DESCFCN OSTMANN-DESC-F)\n\t(FLAGS TRANSBIT PERSON)\n\t(CHARACTER 9)>",
   "referencedBy": [
    "I-PARTY-OVER",
    "INHABITED?",
    "START-MOVEMENT",
    "MICHAEL-F",
    "SEN-ASHER-F",
    "COCHRANE-F",
    "OSTMANN-DESC-F",
    "OSTMANN-F",
    "G-OSTMANN",
    "C&D-SNUB",
    "TELL-P&S"
   ]
  },
  "GLOBAL-BUTLER": {
   "name": "GLOBAL-BUTLER",
   "file": "people.zil",
   "line": 3131,
   "endLine": 3138,
   "desc": "Smythe",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "TRANSBIT",
    "PERSON"
   ],
   "synonyms": [
    "SMYTHE",
    "BUTLER",
    "GORILLA"
   ],
   "adjectives": [
    "MR",
    "GEORGE"
   ],
   "action": "GLOBAL-PERSON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-BUTLER\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Smythe\")\n\t(SYNONYM SMYTHE BUTLER GORILLA)\n\t(ADJECTIVE MR GEORGE)\n\t(ACTION GLOBAL-PERSON-F)\n\t(FLAGS TRANSBIT PERSON)\n\t(CHARACTER 10)>",
   "referencedBy": [
    "MICHAEL-F",
    "ALICIA-F",
    "RICHARD-F",
    "COL-MARSTON-F",
    "LINDA-F",
    "SEN-ASHER-F",
    "COCHRANE-F",
    "OSTMANN-F",
    "BARTENDER-F"
   ]
  },
  "BUTLER": {
   "name": "BUTLER",
   "file": "people.zil",
   "line": 3140,
   "endLine": 3148,
   "desc": "Smythe",
   "ldesc": null,
   "fdesc": null,
   "loc": "HALLWAY-12",
   "flags": [
    "TRANSBIT",
    "PERSON"
   ],
   "synonyms": [
    "SMYTHE",
    "BUTLER",
    "GORILLA"
   ],
   "adjectives": [
    "MR",
    "GEORGE"
   ],
   "action": "BUTLER-F",
   "descfcn": "BUTLER-DESC-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "10"
    ]
   },
   "contents": [
    "GORILLA-COSTUME"
   ],
   "source": "<OBJECT BUTLER\n\t(IN HALLWAY-12)\n\t(DESC \"Smythe\")\n\t(SYNONYM SMYTHE BUTLER GORILLA)\n\t(ADJECTIVE MR GEORGE)\n\t(ACTION BUTLER-F)\n\t(DESCFCN BUTLER-DESC-F)\n\t(FLAGS TRANSBIT PERSON)\n\t(CHARACTER 10)>",
   "referencedBy": [
    "ARREST",
    "I-PARTY-OVER",
    "INHABITED?",
    "START-MOVEMENT",
    "MICHAEL-F",
    "ALICIA-COAT-F",
    "ALICIA-F",
    "G-ALICIA",
    "COL-MARSTON-F",
    "SEN-ASHER-F",
    "BUTLER-DESC-F",
    "BUTLER-F",
    "G-BUTLER",
    "DUMP-COATS",
    "DETECTIVE-F",
    "G-DETECTIVE",
    "DUFFY-F",
    "NEW-ARRIVAL-STUFF",
    "DOORBELL-F",
    "I-UNTANGLE",
    "HALLWAY-12-F",
    "GLASS-F"
   ]
  },
  "TRASH-BASKET": {
   "name": "TRASH-BASKET",
   "file": "people.zil",
   "line": 3335,
   "endLine": 3344,
   "desc": "trash basket",
   "ldesc": null,
   "fdesc": "In the corner is a trash basket.",
   "loc": "KITCHEN",
   "flags": [
    "SEARCHBIT",
    "CONTBIT",
    "OPENBIT",
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "BASKET",
    "TRASH",
    "TRASHBASKET"
   ],
   "adjectives": [
    "TRASH"
   ],
   "action": "TRASH-BASKET-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "15"
    ],
    "SIZE": [
     "15"
    ]
   },
   "contents": [],
   "source": "<OBJECT TRASH-BASKET\n\t(IN KITCHEN)\n\t(SYNONYM BASKET TRASH TRASHBASKET)\n\t(ADJECTIVE TRASH)\n\t(FDESC \"In the corner is a trash basket.\")\n\t(DESC \"trash basket\")\n\t(ACTION TRASH-BASKET-F)\n\t(CAPACITY 15)\n\t(SIZE 15)\n\t(FLAGS SEARCHBIT CONTBIT OPENBIT TAKEBIT BURNBIT)>",
   "referencedBy": [
    "G-BUTLER",
    "TRASH-BASKET-F"
   ]
  },
  "GLOBAL-BARTENDER": {
   "name": "GLOBAL-BARTENDER",
   "file": "people.zil",
   "line": 3360,
   "endLine": 3367,
   "desc": "Johnson",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "TRANSBIT",
    "PERSON"
   ],
   "synonyms": [
    "JACK",
    "BARTENDER",
    "JOHNSON",
    "DOMINO"
   ],
   "adjectives": [
    "MR",
    "JACK"
   ],
   "action": "GLOBAL-PERSON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "11"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-BARTENDER\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Johnson\")\n\t(SYNONYM JACK BARTENDER JOHNSON DOMINO)\n\t(ADJECTIVE MR JACK)\n\t(ACTION GLOBAL-PERSON-F)\n\t(FLAGS TRANSBIT PERSON)\n\t(CHARACTER 11)>",
   "referencedBy": [
    "MICHAEL-F",
    "ALICIA-F",
    "RICHARD-F",
    "COL-MARSTON-F",
    "LINDA-F",
    "SEN-ASHER-F",
    "COCHRANE-F",
    "OSTMANN-F"
   ]
  },
  "BARTENDER": {
   "name": "BARTENDER",
   "file": "people.zil",
   "line": 3369,
   "endLine": 3379,
   "desc": "Johnson",
   "ldesc": "The bartender is busy behind the bar, his only concession to the party a\nsmall domino mask.",
   "fdesc": null,
   "loc": "BALLROOM-9",
   "flags": [
    "TRANSBIT",
    "PERSON"
   ],
   "synonyms": [
    "JACK",
    "BARTENDER",
    "JOHNSON",
    "DOMINO"
   ],
   "adjectives": [
    "MR",
    "JACK"
   ],
   "action": "BARTENDER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "11"
    ]
   },
   "contents": [],
   "source": "<OBJECT BARTENDER\n\t(IN BALLROOM-9)\n\t(DESC \"Johnson\")\n\t(LDESC\n\"The bartender is busy behind the bar, his only concession to the party a\nsmall domino mask.\")\n\t(SYNONYM JACK BARTENDER JOHNSON DOMINO)\n\t(ADJECTIVE MR JACK)\n\t(ACTION BARTENDER-F)\n\t(FLAGS TRANSBIT PERSON)\n\t(CHARACTER 11)>",
   "referencedBy": [
    "INHABITED?",
    "BARTENDER-F",
    "DRINK-F",
    "G-BARTENDER",
    "V-ORDER"
   ]
  },
  "DRINK": {
   "name": "DRINK",
   "file": "people.zil",
   "line": 3539,
   "endLine": 3545,
   "desc": "drink",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "DRINKBIT"
   ],
   "synonyms": [
    "DRINK",
    "LIQUOR",
    "REFILL"
   ],
   "adjectives": [
    "MIXED",
    "COLD"
   ],
   "action": "DRINK-F",
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
   "source": "<OBJECT DRINK\n\t(SYNONYM DRINK LIQUOR REFILL)\n\t(ADJECTIVE MIXED COLD)\n\t(DESC \"drink\")\n\t(FLAGS TAKEBIT DRINKBIT)\n\t(SIZE 10)\n\t(ACTION DRINK-F)>",
   "referencedBy": [
    "MICHAEL-F",
    "BARTENDER-F",
    "DRINK-F",
    "FIREPLACE-F",
    "V-EAT"
   ]
  },
  "GLOBAL-DRINK": {
   "name": "GLOBAL-DRINK",
   "file": "people.zil",
   "line": 3547,
   "endLine": 3554,
   "desc": "drink",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "DRINKBIT"
   ],
   "synonyms": [
    "DRINK",
    "LIQUOR",
    "REFILL"
   ],
   "adjectives": [
    "MIXED",
    "COLD"
   ],
   "action": "DRINK-F",
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
   "source": "<OBJECT GLOBAL-DRINK\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM DRINK LIQUOR REFILL)\n\t(ADJECTIVE MIXED COLD)\n\t(DESC \"drink\")\n\t(FLAGS DRINKBIT)\n\t(SIZE 10)\n\t(ACTION DRINK-F)>",
   "referencedBy": [
    "BARTENDER-F"
   ]
  },
  "GLOBAL-DETECTIVE": {
   "name": "GLOBAL-DETECTIVE",
   "file": "people.zil",
   "line": 3597,
   "endLine": 3603,
   "desc": "detective",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "TRANSBIT",
    "PERSON",
    "THE"
   ],
   "synonyms": [
    "DETECTIVE"
   ],
   "adjectives": [],
   "action": "GLOBAL-PERSON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "12"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-DETECTIVE\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"detective\")\n\t(SYNONYM DETECTIVE)\n\t(FLAGS TRANSBIT PERSON THE)\n\t(ACTION GLOBAL-PERSON-F)\n\t(CHARACTER 12)>",
   "referencedBy": []
  },
  "DETECTIVE": {
   "name": "DETECTIVE",
   "file": "people.zil",
   "line": 3605,
   "endLine": 3612,
   "desc": "detective",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TRANSBIT",
    "PERSON",
    "THE",
    "SEARCHBIT"
   ],
   "synonyms": [
    "DETECTIVE"
   ],
   "adjectives": [],
   "action": "DETECTIVE-F",
   "descfcn": "DETECTIVE-DESC-F",
   "contfcn": "DETECTIVE-F",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "12"
    ]
   },
   "contents": [
    "DETECTIVE-COAT"
   ],
   "source": "<OBJECT DETECTIVE\n\t(DESC \"detective\")\n\t(SYNONYM DETECTIVE)\n\t(ACTION DETECTIVE-F)\n\t(DESCFCN DETECTIVE-DESC-F)\n\t(CONTFCN DETECTIVE-F)\n\t(FLAGS TRANSBIT PERSON THE SEARCHBIT)\n\t(CHARACTER 12)>",
   "referencedBy": [
    "ARREST",
    "CASE-OVER",
    "I-PARTY-OVER",
    "MURDER-TELL",
    "INHABITED?",
    "PLAYER-F",
    "CORPSE-F",
    "REVEAL-MURDER",
    "POLICE-F",
    "DONT-TAKE-EVIDENCE",
    "G-BUTLER",
    "DETECTIVE-DESC-F",
    "DETECTIVE-F",
    "DUFFY-TO-LAB",
    "I-DUFFY-RETURNS",
    "TELL-RINGS",
    "G-DETECTIVE",
    "DETECTIVE-FINDS-BODY?",
    "I-START-ARREST",
    "LAB-RESULTS-TO-PLAYER",
    "PLAYER-ARRESTED?",
    "DUFFY-F",
    "DUFFY-FINDS-BODY?",
    "I-POLICE-ARRIVE",
    "I-AMBULANCE",
    "TELL-ABOUT-DUFFY",
    "NEW-ARRIVAL-STUFF",
    "PRE-ARREST",
    "V-FINGERPRINT",
    "IKILL",
    "PRE-SHOW",
    "V-$DISCOVER"
   ]
  },
  "HAIR-ANALYSIS": {
   "name": "HAIR-ANALYSIS",
   "file": "people.zil",
   "line": 4164,
   "endLine": 4173,
   "desc": "hair analysis",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "BURNBIT",
    "READBIT",
    "ALICIABIT"
   ],
   "synonyms": [
    "ANALYSIS"
   ],
   "adjectives": [
    "HAIR"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "\"This hair was found entangled in the mesh inner lining of a masquerade\ncostume. The hair is a woman's. It is dark brown, of medium length, and has\nnot recently been dyed. It includes the root, and thus was not cut but\npulled out or fell out.\""
    ]
   },
   "contents": [],
   "source": "<OBJECT HAIR-ANALYSIS\n\t(SYNONYM ANALYSIS)\n\t(ADJECTIVE HAIR)\n\t(DESC \"hair analysis\")\n\t(FLAGS TAKEBIT BURNBIT READBIT ALICIABIT)\n\t(TEXT\n\"\\\"This hair was found entangled in the mesh inner lining of a masquerade\ncostume. The hair is a woman's. It is dark brown, of medium length, and has\nnot recently been dyed. It includes the root, and thus was not cut but\npulled out or fell out.\\\"\")>",
   "referencedBy": [
    "ALICIA-F",
    "DETECTIVE-F",
    "DUFFY-TO-LAB"
   ]
  },
  "MASK-ANALYSIS": {
   "name": "MASK-ANALYSIS",
   "file": "people.zil",
   "line": 4175,
   "endLine": 4183,
   "desc": "mask analysis",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "BURNBIT",
    "READBIT"
   ],
   "synonyms": [
    "ANALYSIS"
   ],
   "adjectives": [
    "MASK"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "\"The mask was examined. There were small quantities of cosmetics\nin positions consistent with the mask having recently been worn. Nothing\nelse of interest was discovered.\""
    ]
   },
   "contents": [],
   "source": "<OBJECT MASK-ANALYSIS\n\t(SYNONYM ANALYSIS)\n\t(ADJECTIVE MASK)\n\t(DESC \"mask analysis\")\n\t(FLAGS TAKEBIT BURNBIT READBIT)\n\t(TEXT\n\"\\\"The mask was examined. There were small quantities of cosmetics\nin positions consistent with the mask having recently been worn. Nothing\nelse of interest was discovered.\\\"\")>",
   "referencedBy": [
    "DUFFY-TO-LAB"
   ]
  },
  "STAIN-ANALYSIS": {
   "name": "STAIN-ANALYSIS",
   "file": "people.zil",
   "line": 4185,
   "endLine": 4193,
   "desc": "stain analysis",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "BURNBIT",
    "READBIT"
   ],
   "synonyms": [
    "ANALYSIS"
   ],
   "adjectives": [
    "STAIN"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "\"The stain was analyzed and discovered to consist of residue of\nan alcoholic beverage known as a 'Singapore Sling.' The cloth is otherwise\nunremarkable.\""
    ]
   },
   "contents": [],
   "source": "<OBJECT STAIN-ANALYSIS\n\t(SYNONYM ANALYSIS)\n\t(ADJECTIVE STAIN)\n\t(DESC \"stain analysis\")\n\t(FLAGS TAKEBIT BURNBIT READBIT)\n\t(TEXT\n\"\\\"The stain was analyzed and discovered to consist of residue of\nan alcoholic beverage known as a 'Singapore Sling.' The cloth is otherwise\nunremarkable.\\\"\")>",
   "referencedBy": [
    "DETECTIVE-F",
    "DUFFY-TO-LAB"
   ]
  },
  "NULL-ANALYSIS": {
   "name": "NULL-ANALYSIS",
   "file": "people.zil",
   "line": 4195,
   "endLine": 4201,
   "desc": "irrelevant analysis",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "BURNBIT",
    "READBIT",
    "AN"
   ],
   "synonyms": [
    "ANALYSIS"
   ],
   "adjectives": [
    "IRRELEVANT"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "\"Nothing of relevance to the case was discovered.\""
    ]
   },
   "contents": [],
   "source": "<OBJECT NULL-ANALYSIS\n\t(SYNONYM ANALYSIS)\n\t(ADJECTIVE IRRELEVANT)\n\t(DESC \"irrelevant analysis\")\n\t(FLAGS TAKEBIT BURNBIT READBIT AN)\n\t(TEXT\n\"\\\"Nothing of relevance to the case was discovered.\\\"\")>",
   "referencedBy": [
    "DETECTIVE-F",
    "DUFFY-TO-LAB",
    "LAB-RESULTS-TO-PLAYER"
   ]
  },
  "GLASS-ANALYSIS": {
   "name": "GLASS-ANALYSIS",
   "file": "people.zil",
   "line": 4203,
   "endLine": 4212,
   "desc": "glass analysis",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "BURNBIT",
    "READBIT"
   ],
   "synonyms": [
    "ANALYSIS"
   ],
   "adjectives": [
    "BROKEN",
    "GLASS"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "\"The glass was analyzed and discovered to be coated with the residue of\nan alcoholic beverage known as a 'Singapore Sling.' The glass itself, of\nwhich this is only a large fragment, appears to have been shattered by an\nimpact.\""
    ]
   },
   "contents": [],
   "source": "<OBJECT GLASS-ANALYSIS\n\t(SYNONYM ANALYSIS)\n\t(ADJECTIVE BROKEN GLASS)\n\t(DESC \"glass analysis\")\n\t(FLAGS TAKEBIT BURNBIT READBIT)\n\t(TEXT\n\"\\\"The glass was analyzed and discovered to be coated with the residue of\nan alcoholic beverage known as a 'Singapore Sling.' The glass itself, of\nwhich this is only a large fragment, appears to have been shattered by an\nimpact.\\\"\")>",
   "referencedBy": [
    "DETECTIVE-F",
    "DUFFY-TO-LAB"
   ]
  },
  "DETECTIVE-COAT": {
   "name": "DETECTIVE-COAT",
   "file": "people.zil",
   "line": 4232,
   "endLine": 4236,
   "desc": "trenchcoat",
   "ldesc": null,
   "fdesc": null,
   "loc": "DETECTIVE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "TRENCHCOAT",
    "COAT"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DETECTIVE-COAT\n\t(IN DETECTIVE)\n\t(DESC \"trenchcoat\")\n\t(SYNONYM TRENCHCOAT COAT)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "G-BUTLER",
    "DETECTIVE-F"
   ]
  },
  "GLOBAL-DUFFY": {
   "name": "GLOBAL-DUFFY",
   "file": "people.zil",
   "line": 4529,
   "endLine": 4536,
   "desc": "Sergeant Duffy",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "TRANSBIT",
    "PERSON"
   ],
   "synonyms": [
    "DUFFY"
   ],
   "adjectives": [
    "SGT",
    "SERGEANT"
   ],
   "action": "GLOBAL-PERSON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "13"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-DUFFY\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Sergeant Duffy\")\n\t(SYNONYM DUFFY)\n\t(ADJECTIVE SGT SERGEANT)\n\t(FLAGS TRANSBIT PERSON)\n\t(ACTION GLOBAL-PERSON-F)\n\t(CHARACTER 13)>",
   "referencedBy": [
    "DETECTIVE-F"
   ]
  },
  "DUFFY": {
   "name": "DUFFY",
   "file": "people.zil",
   "line": 4538,
   "endLine": 4545,
   "desc": "Sergeant Duffy",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TRANSBIT",
    "PERSON"
   ],
   "synonyms": [
    "DUFFY"
   ],
   "adjectives": [
    "SGT",
    "SERGEANT"
   ],
   "action": "DUFFY-F",
   "descfcn": "DUFFY-DESC-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CHARACTER": [
     "13"
    ]
   },
   "contents": [
    "DUFFY-COAT",
    "HANDCUFFS"
   ],
   "source": "<OBJECT DUFFY\n\t(DESC \"Sergeant Duffy\")\n\t(SYNONYM DUFFY)\n\t(ADJECTIVE SGT SERGEANT)\n\t(ACTION DUFFY-F)\n\t(DESCFCN DUFFY-DESC-F)\n\t(FLAGS TRANSBIT PERSON)\n\t(CHARACTER 13)>",
   "referencedBy": [
    "ARREST",
    "TELL-ONE-HERE-ONE-NOT",
    "TELL-ALL-HERE",
    "TELL-NONE-HERE",
    "DUFFY-PERFORMS-ARREST",
    "I-PARTY-OVER",
    "MURDER-TELL",
    "INHABITED?",
    "PLAYER-F",
    "CORPSE-F",
    "REVEAL-MURDER",
    "POLICE-F",
    "DONT-TAKE-EVIDENCE",
    "G-BUTLER",
    "DETECTIVE-F",
    "ITLL-WAIT",
    "CHECK-GLASS",
    "CHECK-JUNK",
    "TELL-ANALYZE",
    "DUFFY-TO-LAB",
    "I-DUFFY-RETURNS",
    "DETECTIVE-FINDS-BODY?",
    "I-START-ARREST",
    "PLAYER-ARRESTED?",
    "DUFFY-DESC-F",
    "DUFFY-F",
    "G-DUFFY",
    "DUFFY-FINDS-BODY?",
    "I-POLICE-ARRIVE",
    "I-AMBULANCE",
    "TELL-ABOUT-DUFFY",
    "NEW-ARRIVAL-STUFF",
    "V-FINGERPRINT",
    "IKILL",
    "IRON-GRIP",
    "V-$DISCOVER"
   ]
  },
  "DUFFY-COAT": {
   "name": "DUFFY-COAT",
   "file": "people.zil",
   "line": 4614,
   "endLine": 4619,
   "desc": "raincoat",
   "ldesc": null,
   "fdesc": null,
   "loc": "DUFFY",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "RAINCOAT",
    "COAT"
   ],
   "adjectives": [
    "TRANSPARENT"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DUFFY-COAT\n\t(IN DUFFY)\n\t(DESC \"raincoat\")\n\t(SYNONYM RAINCOAT COAT)\n\t(ADJECTIVE TRANSPARENT)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "G-BUTLER",
    "DUFFY-F"
   ]
  },
  "POLICE-CAR": {
   "name": "POLICE-CAR",
   "file": "people.zil",
   "line": 4755,
   "endLine": 4760,
   "desc": "police car",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "LOCKED",
    "WINDOWBIT",
    "DOORBIT"
   ],
   "synonyms": [
    "CAR"
   ],
   "adjectives": [
    "POLICE"
   ],
   "action": "POLICE-CAR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT POLICE-CAR\n\t(DESC \"police car\")\n\t(SYNONYM CAR)\n\t(ADJECTIVE POLICE)\n\t(ACTION POLICE-CAR-F)\n\t(FLAGS LOCKED WINDOWBIT DOORBIT)>",
   "referencedBy": [
    "I-POLICE-ARRIVE",
    "CROWBAR-F"
   ]
  },
  "MASK": {
   "name": "MASK",
   "file": "people.zil",
   "line": 4767,
   "endLine": 4773,
   "desc": "western mask",
   "ldesc": null,
   "fdesc": null,
   "loc": "PLAYER",
   "flags": [
    "WEARBIT",
    "TAKEBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "MASK"
   ],
   "adjectives": [
    "MY",
    "COWBOY",
    "WESTERN"
   ],
   "action": "MASK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MASK\n\t(IN PLAYER)\n\t(DESC \"western mask\")\n\t(SYNONYM MASK)\n\t(ADJECTIVE MY COWBOY WESTERN)\n\t(ACTION MASK-F)\n\t(FLAGS WEARBIT TAKEBIT TRYTAKEBIT)>",
   "referencedBy": [
    "ALICIA-F",
    "DUFFY-TO-LAB",
    "V-UNMASK",
    "PRE-WEAR"
   ]
  },
  "SHEIK-COSTUME": {
   "name": "SHEIK-COSTUME",
   "file": "people.zil",
   "line": 4790,
   "endLine": 4797,
   "desc": "sheik costume",
   "ldesc": null,
   "fdesc": null,
   "loc": "MICHAEL",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "COSTUME",
    "MASK"
   ],
   "adjectives": [
    "SHEIK",
    "MICHAEL"
   ],
   "action": "COSTUME-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT SHEIK-COSTUME\n\t(IN MICHAEL)\n\t(SYNONYM COSTUME MASK)\n\t(ADJECTIVE SHEIK MICHAEL)\n\t(DESC \"sheik costume\")\n\t(ACTION COSTUME-F)\n\t(GENERIC GENERIC-STUFF-F)\n        (FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "HAREM-COSTUME": {
   "name": "HAREM-COSTUME",
   "file": "people.zil",
   "line": 4799,
   "endLine": 4806,
   "desc": "harem costume",
   "ldesc": null,
   "fdesc": null,
   "loc": "ALICIA",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "COSTUME",
    "MASK"
   ],
   "adjectives": [
    "HAREM",
    "ALICIA"
   ],
   "action": "COSTUME-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT HAREM-COSTUME\n\t(IN ALICIA)\n\t(SYNONYM COSTUME MASK)\n\t(ADJECTIVE HAREM ALICIA)\n\t(DESC \"harem costume\")\n\t(ACTION COSTUME-F)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "BALLERINA-COSTUME": {
   "name": "BALLERINA-COSTUME",
   "file": "people.zil",
   "line": 4808,
   "endLine": 4815,
   "desc": "ballerina costume",
   "ldesc": null,
   "fdesc": null,
   "loc": "LINDA",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "COSTUME",
    "MASK"
   ],
   "adjectives": [
    "BALLERINA",
    "LINDA"
   ],
   "action": "COSTUME-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT BALLERINA-COSTUME\n\t(IN LINDA)\n\t(SYNONYM COSTUME MASK)\n\t(ADJECTIVE BALLERINA LINDA)\n\t(DESC \"ballerina costume\")\n\t(ACTION COSTUME-F)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "WEREWOLF-COSTUME": {
   "name": "WEREWOLF-COSTUME",
   "file": "people.zil",
   "line": 4817,
   "endLine": 4824,
   "desc": "werewolf costume",
   "ldesc": null,
   "fdesc": null,
   "loc": "RICHARD",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "COSTUME",
    "MASK"
   ],
   "adjectives": [
    "WEREWOLF",
    "RICHARD"
   ],
   "action": "COSTUME-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT WEREWOLF-COSTUME\n\t(IN RICHARD)\n\t(SYNONYM COSTUME MASK)\n\t(ADJECTIVE WEREWOLF RICHARD)\n\t(DESC \"werewolf costume\")\n\t(ACTION COSTUME-F)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "HARLEQUIN-COSTUME": {
   "name": "HARLEQUIN-COSTUME",
   "file": "people.zil",
   "line": 4826,
   "endLine": 4833,
   "desc": "harlequin costume",
   "ldesc": null,
   "fdesc": null,
   "loc": "SEN-ASHER",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "COSTUME",
    "MASK"
   ],
   "adjectives": [
    "HARLEQUIN",
    "SEN",
    "ASHER"
   ],
   "action": "COSTUME-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT HARLEQUIN-COSTUME\n\t(IN SEN-ASHER)\n\t(SYNONYM COSTUME MASK)\n\t(ADJECTIVE HARLEQUIN SEN ASHER)\n\t(DESC \"harlequin costume\")\n\t(ACTION COSTUME-F)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "EXPLORER-COSTUME": {
   "name": "EXPLORER-COSTUME",
   "file": "people.zil",
   "line": 4835,
   "endLine": 4842,
   "desc": "explorer costume",
   "ldesc": null,
   "fdesc": null,
   "loc": "COL-MARSTON",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "COSTUME",
    "MASK"
   ],
   "adjectives": [
    "EXPLORER",
    "HUNTER",
    "MARSTON"
   ],
   "action": "COSTUME-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT EXPLORER-COSTUME\n\t(IN COL-MARSTON)\n\t(SYNONYM COSTUME MASK)\n\t(ADJECTIVE EXPLORER HUNTER MARSTON)\n\t(DESC \"explorer costume\")\n\t(ACTION COSTUME-F)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "ASTRONAUT-COSTUME": {
   "name": "ASTRONAUT-COSTUME",
   "file": "people.zil",
   "line": 4844,
   "endLine": 4851,
   "desc": "astronaut costume",
   "ldesc": null,
   "fdesc": null,
   "loc": "COCHRANE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "COSTUME",
    "MASK"
   ],
   "adjectives": [
    "ASTRONAUT",
    "COCHRANE"
   ],
   "action": "COSTUME-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT ASTRONAUT-COSTUME\n\t(IN COCHRANE)\n\t(SYNONYM COSTUME MASK)\n\t(ADJECTIVE ASTRONAUT COCHRANE)\n\t(DESC \"astronaut costume\")\n\t(ACTION COSTUME-F)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "COCHRANE-F"
   ]
  },
  "VAMPIRE-COSTUME": {
   "name": "VAMPIRE-COSTUME",
   "file": "people.zil",
   "line": 4853,
   "endLine": 4860,
   "desc": "vampire costume",
   "ldesc": null,
   "fdesc": null,
   "loc": "OSTMANN",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "COSTUME",
    "MASK"
   ],
   "adjectives": [
    "VAMPIRE",
    "OSTMANN"
   ],
   "action": "COSTUME-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT VAMPIRE-COSTUME\n\t(IN OSTMANN)\n\t(SYNONYM COSTUME MASK)\n\t(ADJECTIVE VAMPIRE OSTMANN)\n\t(DESC \"vampire costume\")\n\t(ACTION COSTUME-F)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "GORILLA-COSTUME": {
   "name": "GORILLA-COSTUME",
   "file": "people.zil",
   "line": 4862,
   "endLine": 4869,
   "desc": "gorilla costume",
   "ldesc": null,
   "fdesc": null,
   "loc": "BUTLER",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "COSTUME",
    "MASK"
   ],
   "adjectives": [
    "GORILLA",
    "BUTLER",
    "SMYTHE"
   ],
   "action": "COSTUME-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT GORILLA-COSTUME\n\t(IN BUTLER)\n\t(SYNONYM COSTUME MASK)\n\t(ADJECTIVE GORILLA BUTLER SMYTHE)\n\t(DESC \"gorilla costume\")\n\t(ACTION COSTUME-F)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "BUTLER-DESC-F"
   ]
  },
  "ROOMS": {
   "name": "ROOMS",
   "file": "places.zil",
   "line": 16,
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
   "source": "<OBJECT ROOMS>",
   "referencedBy": [
    "ESTABLISH-GOAL",
    "GWIM",
    "MOBY-FIND",
    "DO-SL",
    "DETECTIVE-FINDS-BODY?",
    "DUFFY-FINDS-BODY?",
    "V-AGAIN",
    "FIRSTER",
    "HELD?",
    "ROOM-CHECK",
    "META-LOC",
    "V-PHONE",
    "V-THROUGH",
    "PRE-FIND",
    "V-LOCK",
    "V-LOOK-DOWN",
    "V-LOOK-UP",
    "PRE-READ",
    "V-UNLOCK",
    "V-WALK-TO"
   ]
  },
  "PUMPKIN": {
   "name": "PUMPKIN",
   "file": "places.zil",
   "line": 44,
   "endLine": 50,
   "desc": "pumpkin",
   "ldesc": null,
   "fdesc": null,
   "loc": "CIRCLE",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "PUMPKIN",
    "O'LANTERN"
   ],
   "adjectives": [
    "JACK"
   ],
   "action": "PUMPKIN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PUMPKIN\n\t(IN CIRCLE)\n\t(DESC \"pumpkin\")\n\t(SYNONYM PUMPKIN O\\'LANTERN)\n\t(ADJECTIVE JACK)\n\t(FLAGS NDESCBIT TRYTAKEBIT TAKEBIT)\n\t(ACTION PUMPKIN-F)>",
   "referencedBy": []
  },
  "FRONT-DOOR": {
   "name": "FRONT-DOOR",
   "file": "places.zil",
   "line": 86,
   "endLine": 94,
   "desc": "front door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "NDESCBIT",
    "LOCKED"
   ],
   "synonyms": [
    "DOOR"
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
    "UNLOCK": [
     "HALL"
    ],
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT FRONT-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"front door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE FRONT)\n\t(UNLOCK HALL)\n\t(ACTION FRONT-DOOR-F)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS DOORBIT NDESCBIT LOCKED)>",
   "referencedBy": [
    "G-ALICIA",
    "G-BUTLER",
    "FRONT-DOOR-F",
    "NEW-ARRIVAL-STUFF"
   ]
  },
  "GLOBAL-DOORBELL": {
   "name": "GLOBAL-DOORBELL",
   "file": "places.zil",
   "line": 110,
   "endLine": 115,
   "desc": "doorbell",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "DOORBELL",
    "BELL"
   ],
   "adjectives": [],
   "action": "GLOBAL-DOORBELL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-DOORBELL\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"doorbell\")\n\t(SYNONYM DOORBELL BELL)\n\t(FLAGS NDESCBIT)\n\t(ACTION GLOBAL-DOORBELL-F)>",
   "referencedBy": [
    "FRONT-DOOR-F"
   ]
  },
  "DOORBELL": {
   "name": "DOORBELL",
   "file": "places.zil",
   "line": 208,
   "endLine": 214,
   "desc": "front doorbell",
   "ldesc": null,
   "fdesc": null,
   "loc": "PORCH",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "DOORBELL",
    "BELL"
   ],
   "adjectives": [
    "FRONT"
   ],
   "action": "DOORBELL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DOORBELL\n\t(IN PORCH)\n\t(DESC \"front doorbell\")\n\t(SYNONYM DOORBELL BELL)\n\t(ADJECTIVE FRONT)\n\t(FLAGS NDESCBIT)\n\t(ACTION DOORBELL-F)>",
   "referencedBy": [
    "G-ALICIA",
    "G-DETECTIVE"
   ]
  },
  "VELVET-RIBBON": {
   "name": "VELVET-RIBBON",
   "file": "places.zil",
   "line": 245,
   "endLine": 251,
   "desc": "velvet ribbon",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "RIBBON"
   ],
   "adjectives": [
    "RED",
    "VELVET"
   ],
   "action": "VELVET-RIBBON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT VELVET-RIBBON\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"velvet ribbon\")\n\t(SYNONYM RIBBON)\n\t(ADJECTIVE RED VELVET)\n\t(ACTION VELVET-RIBBON-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "LH-DOOR": {
   "name": "LH-DOOR",
   "file": "places.zil",
   "line": 257,
   "endLine": 264,
   "desc": "east entry hall door",
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
    "EAST",
    "ENTRY",
    "HALL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "UNLOCK": [
     "LIBRARY"
    ],
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT LH-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"east entry hall door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE EAST ENTRY HALL)\n\t(UNLOCK LIBRARY)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS DOORBIT NDESCBIT)>",
   "referencedBy": [
    "LIBRARY-MEETING"
   ]
  },
  "MH-DOOR": {
   "name": "MH-DOOR",
   "file": "places.zil",
   "line": 266,
   "endLine": 273,
   "desc": "west entry hall door",
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
    "WEST",
    "ENTRY",
    "HALL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "UNLOCK": [
     "MORNING-ROOM"
    ],
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT MH-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"west entry hall door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE WEST ENTRY HALL)\n\t(UNLOCK MORNING-ROOM)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS DOORBIT NDESCBIT)>",
   "referencedBy": []
  },
  "WRITING-DESK": {
   "name": "WRITING-DESK",
   "file": "places.zil",
   "line": 291,
   "endLine": 297,
   "desc": "secretary",
   "ldesc": null,
   "fdesc": null,
   "loc": "MORNING-ROOM",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "FURNITURE"
   ],
   "synonyms": [
    "SECRETARY",
    "DESK"
   ],
   "adjectives": [
    "WRITING",
    "WALNUT"
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
   "source": "<OBJECT WRITING-DESK\n\t(IN MORNING-ROOM)\n\t(SYNONYM SECRETARY DESK)\n\t(ADJECTIVE WRITING WALNUT)\n\t(DESC \"secretary\")\n\t(FLAGS NDESCBIT CONTBIT FURNITURE)\n\t(CAPACITY 50)>",
   "referencedBy": []
  },
  "WINDOW-SEAT": {
   "name": "WINDOW-SEAT",
   "file": "places.zil",
   "line": 299,
   "endLine": 307,
   "desc": "window seat",
   "ldesc": null,
   "fdesc": null,
   "loc": "MORNING-ROOM",
   "flags": [
    "CONTBIT",
    "FURNITURE",
    "VEHBIT",
    "SURFACEBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "SEAT"
   ],
   "adjectives": [
    "WINDOW"
   ],
   "action": "WINDOW-SEAT-F",
   "descfcn": "WINDOW-SEAT-DESC-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "200"
    ]
   },
   "contents": [],
   "source": "<OBJECT WINDOW-SEAT\n\t(IN MORNING-ROOM)\n\t(SYNONYM SEAT)\n\t(ADJECTIVE WINDOW)\n\t(DESC \"window seat\")\n\t(DESCFCN WINDOW-SEAT-DESC-F)\n\t(ACTION WINDOW-SEAT-F)\n\t(FLAGS CONTBIT FURNITURE VEHBIT SURFACEBIT SEARCHBIT)\n\t(CAPACITY 200)>",
   "referencedBy": [
    "OPEN-HIDING-PLACE",
    "WINDOW-SEAT-DESC-F",
    "WINDOW-SEAT-F",
    "HAMPER-F",
    "DESCRIBE-ROOM",
    "FIRSTER"
   ]
  },
  "MORNING-ROOM-DOOR": {
   "name": "MORNING-ROOM-DOOR",
   "file": "places.zil",
   "line": 376,
   "endLine": 383,
   "desc": "morning room door",
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
    "MORNING"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "UNLOCK": [
     "MORNING-ROOM"
    ],
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT MORNING-ROOM-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"morning room door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE MORNING)\n\t(UNLOCK MORNING-ROOM)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS DOORBIT NDESCBIT)>",
   "referencedBy": []
  },
  "END-TABLE": {
   "name": "END-TABLE",
   "file": "places.zil",
   "line": 401,
   "endLine": 409,
   "desc": "end table",
   "ldesc": null,
   "fdesc": null,
   "loc": "SITTING-ROOM",
   "flags": [
    "NDESCBIT",
    "FURNITURE",
    "VEHBIT",
    "TRYTAKEBIT",
    "TAKEBIT",
    "SURFACEBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "TABLE"
   ],
   "adjectives": [
    "END"
   ],
   "action": "VARIOUS-TABLES-F",
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
   "source": "<OBJECT END-TABLE\n\t(IN SITTING-ROOM)\n\t(DESC \"end table\")\n\t(SYNONYM TABLE)\n\t(ADJECTIVE END)\n\t(ACTION VARIOUS-TABLES-F)\n\t(CAPACITY 20)\n\t(FLAGS NDESCBIT FURNITURE VEHBIT TRYTAKEBIT TAKEBIT\n\t       SURFACEBIT OPENBIT CONTBIT)>",
   "referencedBy": [
    "VARIOUS-TABLES-F"
   ]
  },
  "SITTING-ROOM-DOOR": {
   "name": "SITTING-ROOM-DOOR",
   "file": "places.zil",
   "line": 411,
   "endLine": 418,
   "desc": "sitting room door",
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
    "SITTING"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "UNLOCK": [
     "SITTING-ROOM"
    ],
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT SITTING-ROOM-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"sitting room door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE SITTING)\n\t(UNLOCK SITTING-ROOM)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS DOORBIT NDESCBIT)>",
   "referencedBy": []
  },
  "WEST-CLOSET-DOOR": {
   "name": "WEST-CLOSET-DOOR",
   "file": "places.zil",
   "line": 517,
   "endLine": 524,
   "desc": "west closet door",
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
    "WEST",
    "CLOSET"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "UNLOCK": [
     "ROOMS"
    ],
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT WEST-CLOSET-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"west closet door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE WEST CLOSET)\n\t(UNLOCK ROOMS) ;\"no lock\"\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS DOORBIT NDESCBIT)>",
   "referencedBy": []
  },
  "HAMPER": {
   "name": "HAMPER",
   "file": "places.zil",
   "line": 526,
   "endLine": 535,
   "desc": "wicker hamper",
   "ldesc": null,
   "fdesc": null,
   "loc": "WEST-COAT-CLOSET",
   "flags": [
    "TAKEBIT",
    "BURNBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "HAMPER"
   ],
   "adjectives": [
    "LARGE",
    "WICKER"
   ],
   "action": "HAMPER-F",
   "descfcn": "HAMPER-DESC-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "30"
    ],
    "CAPACITY": [
     "100"
    ]
   },
   "contents": [],
   "source": "<OBJECT HAMPER\n\t(IN WEST-COAT-CLOSET)\n\t(SYNONYM HAMPER)\n\t(ADJECTIVE LARGE WICKER)\n\t(DESC \"wicker hamper\")\n\t(DESCFCN HAMPER-DESC-F)\n\t(ACTION HAMPER-F)\n\t(FLAGS TAKEBIT BURNBIT CONTBIT)\n\t(SIZE 30)\n\t(CAPACITY 100)>",
   "referencedBy": [
    "OPEN-HIDING-PLACE",
    "HAMPER-F",
    "HAMPER-DESC-F"
   ]
  },
  "EAST-CLOSET-DOOR": {
   "name": "EAST-CLOSET-DOOR",
   "file": "places.zil",
   "line": 656,
   "endLine": 663,
   "desc": "east closet door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "OPENBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "EAST",
    "CLOSET"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "UNLOCK": [
     "ROOMS"
    ],
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT EAST-CLOSET-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"east closet door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE EAST CLOSET)\n\t(UNLOCK ROOMS) ;\"no lock\"\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS DOORBIT OPENBIT NDESCBIT)>",
   "referencedBy": []
  },
  "GUEST": {
   "name": "GUEST",
   "file": "places.zil",
   "line": 737,
   "endLine": 742,
   "desc": "party guest",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT",
    "PERSON",
    "THE"
   ],
   "synonyms": [
    "GUEST",
    "DEVIL"
   ],
   "adjectives": [
    "PARTY"
   ],
   "action": "GUEST-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GUEST\n\t(DESC \"party guest\")\n\t(SYNONYM GUEST DEVIL)\n\t(ADJECTIVE PARTY)\n\t(ACTION GUEST-F)\n\t(FLAGS NDESCBIT PERSON THE)>",
   "referencedBy": [
    "I-UNTANGLE",
    "HALLWAY-12-F",
    "GUEST-F"
   ]
  },
  "EAST-BATH-DOOR": {
   "name": "EAST-BATH-DOOR",
   "file": "places.zil",
   "line": 838,
   "endLine": 845,
   "desc": "east bath door",
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
    "EAST",
    "BATH"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "UNLOCK": [
     "EAST-BATH"
    ],
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT EAST-BATH-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"east bath door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE EAST BATH)\n\t(UNLOCK EAST-BATH)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS DOORBIT)>",
   "referencedBy": [
    "G-COCHRANE"
   ]
  },
  "MEDIA-ROOM-DOOR": {
   "name": "MEDIA-ROOM-DOOR",
   "file": "places.zil",
   "line": 883,
   "endLine": 890,
   "desc": "media room door",
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
    "MEDIA",
    "ROOM"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "UNLOCK": [
     "MEDIA-ROOM"
    ],
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT MEDIA-ROOM-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"media room door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE MEDIA ROOM)\n\t(UNLOCK MEDIA-ROOM)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS DOORBIT NDESCBIT)>",
   "referencedBy": []
  },
  "TELEVISION": {
   "name": "TELEVISION",
   "file": "places.zil",
   "line": 892,
   "endLine": 898,
   "desc": "projection TV",
   "ldesc": null,
   "fdesc": null,
   "loc": "MEDIA-ROOM",
   "flags": [
    "NDESCBIT",
    "ONBIT"
   ],
   "synonyms": [
    "TV",
    "TELEVISION"
   ],
   "adjectives": [
    "PROJECTION"
   ],
   "action": "TELEVISION-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TELEVISION\n\t(IN MEDIA-ROOM)\n\t(DESC \"projection TV\")\n\t(SYNONYM TV TELEVISION)\n\t(ADJECTIVE PROJECTION)\n\t(ACTION TELEVISION-F)\n\t(FLAGS NDESCBIT ONBIT)>",
   "referencedBy": []
  },
  "VCR": {
   "name": "VCR",
   "file": "places.zil",
   "line": 912,
   "endLine": 918,
   "desc": "VCR",
   "ldesc": null,
   "fdesc": null,
   "loc": "MEDIA-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "VCR",
    "RECORD"
   ],
   "adjectives": [
    "VIDEO",
    "CASSETTE"
   ],
   "action": "VCR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT VCR\n\t(IN MEDIA-ROOM)\n\t(DESC \"VCR\")\n\t(SYNONYM VCR RECORD)\n\t(ADJECTIVE VIDEO CASSETTE)\n\t(ACTION VCR-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "VCR-F"
   ]
  },
  "BOOKCASE": {
   "name": "BOOKCASE",
   "file": "places.zil",
   "line": 927,
   "endLine": 933,
   "desc": "bookcase",
   "ldesc": null,
   "fdesc": null,
   "loc": "MEDIA-ROOM",
   "flags": [
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "BOOKCASE",
    "SHELVES",
    "SHELF"
   ],
   "adjectives": [],
   "action": "BOOKCASE-F",
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
    "VIDEOTAPE"
   ],
   "source": "<OBJECT BOOKCASE\n\t(IN MEDIA-ROOM)\n\t(DESC \"bookcase\")\n\t(SYNONYM BOOKCASE SHELVES SHELF)\n\t(ACTION BOOKCASE-F)\n\t(FLAGS NDESCBIT OPENBIT CONTBIT)\n\t(CAPACITY 50)>",
   "referencedBy": [
    "BOOKCASE-F"
   ]
  },
  "VIDEOTAPE": {
   "name": "VIDEOTAPE",
   "file": "places.zil",
   "line": 943,
   "endLine": 947,
   "desc": "videotape",
   "ldesc": null,
   "fdesc": null,
   "loc": "BOOKCASE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "VIDEOTAPE",
    "TAPES"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT VIDEOTAPE\n\t(IN BOOKCASE)\n\t(DESC \"videotape\")\n\t(SYNONYM VIDEOTAPE TAPES)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "BOOKCASE-F"
   ]
  },
  "MEDIA-OFFICE-DOOR": {
   "name": "MEDIA-OFFICE-DOOR",
   "file": "places.zil",
   "line": 963,
   "endLine": 970,
   "desc": "west office door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "LOCKED",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "EAST",
    "WEST",
    "OFFICE",
    "CONNECTING"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "UNLOCK": [
     "OFFICE"
    ],
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT MEDIA-OFFICE-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"west office door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE EAST WEST OFFICE CONNECTING)\n\t(UNLOCK OFFICE)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS DOORBIT LOCKED NDESCBIT)>",
   "referencedBy": [
    "START-ALICIA"
   ]
  },
  "NORTH-OFFICE-DOOR": {
   "name": "NORTH-OFFICE-DOOR",
   "file": "places.zil",
   "line": 972,
   "endLine": 979,
   "desc": "north office door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "NDESCBIT",
    "LOCKED"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "NORTH",
    "OFFICE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "UNLOCK": [
     "OFFICE"
    ],
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT NORTH-OFFICE-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"north office door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE NORTH OFFICE)\n\t(UNLOCK OFFICE)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS DOORBIT NDESCBIT LOCKED)>",
   "referencedBy": [
    "START-ALICIA"
   ]
  },
  "SOUTH-OFFICE-DOOR": {
   "name": "SOUTH-OFFICE-DOOR",
   "file": "places.zil",
   "line": 981,
   "endLine": 988,
   "desc": "south office door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "NDESCBIT",
    "LOCKED"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "SOUTH",
    "OFFICE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "UNLOCK": [
     "OFFICE"
    ],
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT SOUTH-OFFICE-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"south office door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE SOUTH OFFICE)\n\t(UNLOCK OFFICE)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS DOORBIT NDESCBIT LOCKED)>",
   "referencedBy": [
    "GANGS-ALL-HERE",
    "START-ALICIA"
   ]
  },
  "LARGE-DESK": {
   "name": "LARGE-DESK",
   "file": "places.zil",
   "line": 1044,
   "endLine": 1051,
   "desc": "large desk",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE",
   "flags": [
    "CONTBIT",
    "SURFACEBIT",
    "OPENBIT",
    "NDESCBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "DESK"
   ],
   "adjectives": [
    "LARGE"
   ],
   "action": "DESK-F",
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
    "SALE-FOLDER"
   ],
   "source": "<OBJECT LARGE-DESK\n\t(IN OFFICE)\n\t(DESC \"large desk\")\n\t(SYNONYM DESK)\n\t(ADJECTIVE LARGE)\n\t(CAPACITY 100)\n\t(ACTION DESK-F)\n\t(FLAGS CONTBIT SURFACEBIT OPENBIT NDESCBIT SEARCHBIT)>",
   "referencedBy": [
    "CORPSE-DESC-F",
    "OFFICE-F",
    "DESK-F"
   ]
  },
  "SMALL-DESK": {
   "name": "SMALL-DESK",
   "file": "places.zil",
   "line": 1053,
   "endLine": 1060,
   "desc": "small desk",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE",
   "flags": [
    "CONTBIT",
    "SURFACEBIT",
    "OPENBIT",
    "NDESCBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "DESK"
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
     "75"
    ]
   },
   "contents": [],
   "source": "<OBJECT SMALL-DESK\n\t(IN OFFICE)\n\t(DESC \"small desk\")\n\t(SYNONYM DESK)\n\t(ADJECTIVE SMALL)\n\t(CAPACITY 75)\n\t(ACTION DESK-F)\n\t(FLAGS CONTBIT SURFACEBIT OPENBIT NDESCBIT SEARCHBIT)>",
   "referencedBy": [
    "OFFICE-F"
   ]
  },
  "FILE-CABINET": {
   "name": "FILE-CABINET",
   "file": "places.zil",
   "line": 1075,
   "endLine": 1081,
   "desc": "file cabinet",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE",
   "flags": [
    "CONTBIT",
    "OPENBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "CABINET"
   ],
   "adjectives": [
    "FILE",
    "FILES"
   ],
   "action": "DESK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FILE-CABINET\n\t(IN OFFICE)\n\t(DESC \"file cabinet\")\n\t(SYNONYM CABINET)\n\t(ADJECTIVE FILE FILES)\n\t(ACTION DESK-F)\n\t(FLAGS CONTBIT OPENBIT NDESCBIT)>",
   "referencedBy": [
    "OFFICE-F"
   ]
  },
  "TRASH": {
   "name": "TRASH",
   "file": "places.zil",
   "line": 1083,
   "endLine": 1089,
   "desc": "trash",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "TRASH",
    "PAPERS",
    "SHELVES",
    "SHELF"
   ],
   "adjectives": [
    "PAPER"
   ],
   "action": "TRASH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TRASH\n\t(IN OFFICE)\n\t(DESC \"trash\")\n\t(SYNONYM TRASH PAPERS SHELVES SHELF)\n\t(ADJECTIVE PAPER)\n\t(FLAGS NDESCBIT)\n\t(ACTION TRASH-F)>",
   "referencedBy": []
  },
  "OFFICE-JUNK": {
   "name": "OFFICE-JUNK",
   "file": "places.zil",
   "line": 1097,
   "endLine": 1102,
   "desc": "office debris",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE",
   "flags": [
    "NDESCBIT",
    "READBIT"
   ],
   "synonyms": [
    "TONER",
    "PRIZES",
    "RIBBON",
    "PRIZE"
   ],
   "adjectives": [],
   "action": "OFFICE-JUNK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT OFFICE-JUNK\n\t(IN OFFICE)\n\t(SYNONYM TONER PRIZES RIBBON PRIZE)\n\t(DESC \"office debris\")\n\t(ACTION OFFICE-JUNK-F)\n\t(FLAGS NDESCBIT READBIT)>",
   "referencedBy": []
  },
  "COMPUTER": {
   "name": "COMPUTER",
   "file": "places.zil",
   "line": 1112,
   "endLine": 1119,
   "desc": "computer",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "COMPUTER"
   ],
   "adjectives": [
    "PERSONAL"
   ],
   "action": "COMPUTER-F",
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
   "source": "<OBJECT COMPUTER\n\t(IN OFFICE)\n\t(SYNONYM COMPUTER)\n\t(ADJECTIVE PERSONAL)\n\t(DESC \"computer\")\n\t(ACTION COMPUTER-F)\n\t(CAPACITY 10)\n\t(FLAGS NDESCBIT CONTBIT OPENBIT)>",
   "referencedBy": []
  },
  "DISK": {
   "name": "DISK",
   "file": "places.zil",
   "line": 1127,
   "endLine": 1136,
   "desc": "disk",
   "ldesc": null,
   "fdesc": null,
   "loc": "OFFICE",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT",
    "TAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "DISKS",
    "FLOPPIES",
    "DISK"
   ],
   "adjectives": [
    "FLOPPY"
   ],
   "action": "DISK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "By coincidence, one of the floppy disks is a copy of the computer\nmystery \"Suspect.\""
    ]
   },
   "contents": [],
   "source": "<OBJECT DISK\n\t(IN OFFICE)\n\t(SYNONYM DISKS FLOPPIES DISK)\n\t(ADJECTIVE FLOPPY)\n\t(DESC \"disk\")\n\t(ACTION DISK-F)\n\t(FLAGS NDESCBIT TRYTAKEBIT TAKEBIT READBIT)\n\t(TEXT\n\"By coincidence, one of the floppy disks is a copy of the computer\nmystery \\\"Suspect.\\\"\")>",
   "referencedBy": []
  },
  "SALE": {
   "name": "SALE",
   "file": "places.zil",
   "line": 1143,
   "endLine": 1148,
   "desc": "sale",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "SALE"
   ],
   "adjectives": [
    "FARM"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SALE\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM SALE)\n\t(ADJECTIVE FARM)\n\t(DESC \"sale\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "COCHRANE-F",
    "OSTMANN-F"
   ]
  },
  "SALE-FOLDER": {
   "name": "SALE-FOLDER",
   "file": "places.zil",
   "line": 1150,
   "endLine": 1157,
   "desc": "manila folder",
   "ldesc": null,
   "fdesc": null,
   "loc": "LARGE-DESK",
   "flags": [
    "READBIT",
    "CONTBIT",
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "FOLDER"
   ],
   "adjectives": [
    "MANILA",
    "PURCHASE",
    "SALE",
    "FILE"
   ],
   "action": "SALE-FOLDER-F",
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
    "SALE-AGREEMENT"
   ],
   "source": "<OBJECT SALE-FOLDER\n\t(IN LARGE-DESK)\n\t(DESC \"manila folder\")\n\t(SYNONYM FOLDER)\n\t(ADJECTIVE MANILA PURCHASE SALE FILE)\n\t(ACTION SALE-FOLDER-F)\n\t(CAPACITY 10)\n\t(FLAGS READBIT CONTBIT TAKEBIT BURNBIT)>",
   "referencedBy": [
    "COL-MARSTON-F",
    "COCHRANE-F",
    "OSTMANN-F",
    "DETECTIVE-F",
    "SALE-FOLDER-F"
   ]
  },
  "SALE-AGREEMENT": {
   "name": "SALE-AGREEMENT",
   "file": "places.zil",
   "line": 1159,
   "endLine": 1165,
   "desc": "purchase and sale agreement",
   "ldesc": null,
   "fdesc": null,
   "loc": "SALE-FOLDER",
   "flags": [
    "NDESCBIT",
    "READBIT",
    "TAKEBIT",
    "TRYTAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "AGREEMENT"
   ],
   "adjectives": [
    "PURCHASE",
    "SALE"
   ],
   "action": "SALE-AGREEMENT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SALE-AGREEMENT\n\t(IN SALE-FOLDER)\n\t(DESC \"purchase and sale agreement\")\n\t(SYNONYM AGREEMENT)\n\t(ADJECTIVE PURCHASE SALE)\n\t(ACTION SALE-AGREEMENT-F)\n\t(FLAGS NDESCBIT READBIT TAKEBIT TRYTAKEBIT BURNBIT)>",
   "referencedBy": [
    "COL-MARSTON-F",
    "COCHRANE-F",
    "OSTMANN-F",
    "DETECTIVE-F",
    "SALE-FOLDER-F",
    "SALE-AGREEMENT-F",
    "TELL-P&S",
    "PRE-TAKE"
   ]
  },
  "TRUST": {
   "name": "TRUST",
   "file": "places.zil",
   "line": 1191,
   "endLine": 1196,
   "desc": "trust",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "TRUST"
   ],
   "adjectives": [
    "ASHCROFT",
    "FAMILY"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TRUST\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"trust\")\n\t(SYNONYM TRUST)\n\t(ADJECTIVE ASHCROFT FAMILY)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "COL-MARSTON-F"
   ]
  },
  "TRUST-FOLDER": {
   "name": "TRUST-FOLDER",
   "file": "places.zil",
   "line": 1198,
   "endLine": 1203,
   "desc": "trust folder",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "INVISIBLE",
    "READBIT",
    "CONTBIT",
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "FOLDER"
   ],
   "adjectives": [
    "FILE",
    "TRUST"
   ],
   "action": "TRUST-FOLDER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "TRUST-DOCUMENTS"
   ],
   "source": "<OBJECT TRUST-FOLDER\n\t(DESC \"trust folder\")\n\t(SYNONYM FOLDER)\n\t(ADJECTIVE FILE TRUST)\n\t(ACTION TRUST-FOLDER-F)\n\t(FLAGS INVISIBLE READBIT CONTBIT TAKEBIT BURNBIT)>",
   "referencedBy": [
    "I-MICHAEL-HIDES-FOLDER",
    "COL-MARSTON-F",
    "DETECTIVE-F",
    "TRUST-FOLDER-F"
   ]
  },
  "TRUST-DOCUMENTS": {
   "name": "TRUST-DOCUMENTS",
   "file": "places.zil",
   "line": 1215,
   "endLine": 1221,
   "desc": "sheaf of documents",
   "ldesc": null,
   "fdesc": null,
   "loc": "TRUST-FOLDER",
   "flags": [
    "NDESCBIT",
    "READBIT",
    "TAKEBIT",
    "TRYTAKEBIT",
    "BURNBIT",
    "MICHAELBIT"
   ],
   "synonyms": [
    "DOCUMENTS",
    "PAPERS",
    "SHEAF"
   ],
   "adjectives": [
    "TRUST"
   ],
   "action": "TRUST-DOCUMENTS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TRUST-DOCUMENTS\n\t(IN TRUST-FOLDER)\n\t(DESC \"sheaf of documents\")\n\t(SYNONYM DOCUMENTS PAPERS SHEAF)\n\t(ADJECTIVE TRUST)\n\t(ACTION TRUST-DOCUMENTS-F)\n\t(FLAGS NDESCBIT READBIT TAKEBIT TRYTAKEBIT BURNBIT MICHAELBIT)>",
   "referencedBy": [
    "COL-MARSTON-F",
    "DETECTIVE-F",
    "TRUST-FOLDER-F",
    "TRUST-DOCUMENTS-F",
    "PRE-TAKE"
   ]
  },
  "INVESTOR-LIST": {
   "name": "INVESTOR-LIST",
   "file": "places.zil",
   "line": 1242,
   "endLine": 1255,
   "desc": "sheet of paper",
   "ldesc": null,
   "fdesc": null,
   "loc": "MICHAEL",
   "flags": [
    "READBIT",
    "TRYTAKEBIT",
    "TAKEBIT",
    "BURNBIT",
    "INVISIBLE",
    "MICHAELBIT"
   ],
   "synonyms": [
    "LIST",
    "SHEET",
    "PAPER"
   ],
   "adjectives": [
    "INVESTOR",
    "PAPER"
   ],
   "action": "LIST-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "This paper is under the letterhead of an accounting firm. It reads:|\n|\n\"Supplement I. Investors in Southeast Planning Corporation.|\n|\nColonel Robert Marston..50%|\nMichael R. Wellman......50%\""
    ]
   },
   "contents": [],
   "source": "<OBJECT INVESTOR-LIST\n\t(IN MICHAEL)\n\t(DESC \"sheet of paper\")\n\t(SYNONYM LIST SHEET PAPER)\n\t(ADJECTIVE INVESTOR PAPER)\n\t(FLAGS READBIT TRYTAKEBIT TAKEBIT BURNBIT INVISIBLE MICHAELBIT)\n\t(ACTION LIST-F)\n\t(TEXT\n\"This paper is under the letterhead of an accounting firm. It reads:|\n|\n\\\"Supplement I. Investors in Southeast Planning Corporation.|\n|\nColonel Robert Marston..50%|\nMichael R. Wellman......50%\\\"\")>",
   "referencedBy": [
    "LIBRARY-MEETING",
    "COL-MARSTON-F",
    "G-COL-MARSTON",
    "I-BURNED",
    "DETECTIVE-F",
    "LIST-F",
    "LIBRARY-F",
    "FIREPLACE-F"
   ]
  },
  "LR-FIREPLACE": {
   "name": "LR-FIREPLACE",
   "file": "places.zil",
   "line": 1307,
   "endLine": 1314,
   "desc": "marble fireplace",
   "ldesc": null,
   "fdesc": null,
   "loc": "LIVING-ROOM",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "FIREPLACE",
    "FIRE",
    "CHIMNEY"
   ],
   "adjectives": [
    "FORMAL",
    "ORNATE",
    "MARBLE"
   ],
   "action": "LR-FIREPLACE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "500"
    ]
   },
   "contents": [],
   "source": "<OBJECT LR-FIREPLACE\n\t(IN LIVING-ROOM)\n\t(DESC \"marble fireplace\")\n\t(SYNONYM FIREPLACE FIRE CHIMNEY)\n\t(ADJECTIVE FORMAL ORNATE MARBLE)\n\t(ACTION LR-FIREPLACE-F)\n\t(CAPACITY 500)\n\t(FLAGS NDESCBIT CONTBIT OPENBIT SEARCHBIT)>",
   "referencedBy": [
    "LR-FIREPLACE-F"
   ]
  },
  "PORTRAITS": {
   "name": "PORTRAITS",
   "file": "places.zil",
   "line": 1325,
   "endLine": 1331,
   "desc": "portrait",
   "ldesc": null,
   "fdesc": null,
   "loc": "LIVING-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PORTRAIT",
    "PICTURE",
    "FACES"
   ],
   "adjectives": [
    "STERN",
    "ASHCROFT"
   ],
   "action": "PORTRAIT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PORTRAITS\n\t(IN LIVING-ROOM)\n\t(DESC \"portrait\")\n\t(SYNONYM PORTRAIT PICTURE FACES)\n\t(ADJECTIVE STERN ASHCROFT)\n\t(ACTION PORTRAIT-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "MANTEL": {
   "name": "MANTEL",
   "file": "places.zil",
   "line": 1340,
   "endLine": 1346,
   "desc": "mantel",
   "ldesc": null,
   "fdesc": null,
   "loc": "LIVING-ROOM",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT",
    "SEARCHBIT",
    "SURFACEBIT"
   ],
   "synonyms": [
    "MANTEL"
   ],
   "adjectives": [
    "FORMAL",
    "ORNATE"
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
   "source": "<OBJECT MANTEL\n\t(IN LIVING-ROOM)\n\t(DESC \"mantel\")\n\t(SYNONYM MANTEL)\n\t(ADJECTIVE FORMAL ORNATE)\n\t(CAPACITY 50)\n\t(FLAGS NDESCBIT CONTBIT OPENBIT SEARCHBIT SURFACEBIT)>",
   "referencedBy": []
  },
  "GLOBAL-RUG": {
   "name": "GLOBAL-RUG",
   "file": "places.zil",
   "line": 1348,
   "endLine": 1354,
   "desc": "oriental rug",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "AN"
   ],
   "synonyms": [
    "RUG"
   ],
   "adjectives": [
    "ORIENTAL"
   ],
   "action": "RUG-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-RUG\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"oriental rug\")\n\t(SYNONYM RUG)\n\t(ADJECTIVE ORIENTAL)\n\t(ACTION RUG-F)\n\t(FLAGS NDESCBIT AN)>",
   "referencedBy": []
  },
  "BOOKCASES": {
   "name": "BOOKCASES",
   "file": "places.zil",
   "line": 1466,
   "endLine": 1472,
   "desc": "bookcase",
   "ldesc": null,
   "fdesc": null,
   "loc": "LIBRARY",
   "flags": [
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "BOOKCASE",
    "SHELVES",
    "SHELF"
   ],
   "adjectives": [],
   "action": "BOOKCASES-F",
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
   "source": "<OBJECT BOOKCASES\n\t(IN LIBRARY)\n\t(DESC \"bookcase\")\n\t(SYNONYM BOOKCASE SHELVES SHELF)\n\t(ACTION BOOKCASES-F)\n\t(FLAGS NDESCBIT OPENBIT CONTBIT)\n\t(CAPACITY 50)>",
   "referencedBy": []
  },
  "LIBRARY-DOOR": {
   "name": "LIBRARY-DOOR",
   "file": "places.zil",
   "line": 1479,
   "endLine": 1486,
   "desc": "north library door",
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
    "LIBRARY",
    "NORTH"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "UNLOCK": [
     "LIBRARY"
    ],
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT LIBRARY-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"north library door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE LIBRARY NORTH)\n\t(UNLOCK LIBRARY)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS DOORBIT NDESCBIT)>",
   "referencedBy": [
    "G-MICHAEL",
    "LIBRARY-MEETING",
    "G-COL-MARSTON"
   ]
  },
  "SIDE-TABLE": {
   "name": "SIDE-TABLE",
   "file": "places.zil",
   "line": 1493,
   "endLine": 1503,
   "desc": "side table",
   "ldesc": "On the right side of the chair is a small side table with a telephone on\nit.",
   "fdesc": null,
   "loc": "LIBRARY",
   "flags": [
    "FURNITURE",
    "VEHBIT",
    "TRYTAKEBIT",
    "TAKEBIT",
    "SURFACEBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "TABLE"
   ],
   "adjectives": [
    "SIDE"
   ],
   "action": "VARIOUS-TABLES-F",
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
    "DEATHMASK-BOOK"
   ],
   "source": "<OBJECT SIDE-TABLE\n\t(IN LIBRARY)\n\t(DESC \"side table\")\n\t(LDESC\n\"On the right side of the chair is a small side table with a telephone on\nit.\")\n\t(SYNONYM TABLE)\n\t(ADJECTIVE SIDE)\n\t(ACTION VARIOUS-TABLES-F)\n\t(CAPACITY 20)\n\t(FLAGS FURNITURE VEHBIT TRYTAKEBIT TAKEBIT SURFACEBIT OPENBIT CONTBIT)>",
   "referencedBy": [
    "VARIOUS-TABLES-F"
   ]
  },
  "CHAIR": {
   "name": "CHAIR",
   "file": "places.zil",
   "line": 1515,
   "endLine": 1526,
   "desc": "comfy chair",
   "ldesc": "In one corner of the room is a high-backed, overstuffed Victorian armchair,\nwhich looks perfect for reading in.",
   "fdesc": null,
   "loc": "LIBRARY",
   "flags": [
    "FURNITURE",
    "VEHBIT",
    "TRYTAKEBIT",
    "TAKEBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "CHAIR",
    "ARMCHAIR"
   ],
   "adjectives": [
    "HIGH",
    "OVERSTUFFED",
    "ARM",
    "VICTORIAN"
   ],
   "action": "CHAIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "100"
    ],
    "CAPACITY": [
     "100"
    ]
   },
   "contents": [],
   "source": "<OBJECT CHAIR\n\t(IN LIBRARY)\n\t(DESC \"comfy chair\")\n\t(LDESC\n\"In one corner of the room is a high-backed, overstuffed Victorian armchair,\nwhich looks perfect for reading in.\")\n\t(SYNONYM CHAIR ARMCHAIR)\n\t(ADJECTIVE HIGH OVERSTUFFED ARM VICTORIAN)\n\t(FLAGS FURNITURE VEHBIT TRYTAKEBIT TAKEBIT OPENBIT CONTBIT)\n\t(SIZE 100)\n\t(CAPACITY 100)\n\t(ACTION CHAIR-F)>",
   "referencedBy": [
    "LIBRARY-MEETING",
    "DETECTIVE-FINDS-BODY?",
    "DUFFY-FINDS-BODY?",
    "CHAIR-F",
    "DESCRIBE-ROOM"
   ]
  },
  "DEATHMASK-BOOK": {
   "name": "DEATHMASK-BOOK",
   "file": "places.zil",
   "line": 1542,
   "endLine": 1553,
   "desc": "paperback book",
   "ldesc": null,
   "fdesc": null,
   "loc": "SIDE-TABLE",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "BOOK"
   ],
   "adjectives": [
    "PAPERBACK"
   ],
   "action": "DEATHMASK-BOOK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The book has a lurid cover and an obviously inaccurate blurb. It is\ntitled \"Suspect,\" and is by someone named Dave Lebling. The book\nis apparently a mystery novel. You read part of it, but stop\nwhen you notice that someone has torn out the last ten pages."
    ]
   },
   "contents": [],
   "source": "<OBJECT DEATHMASK-BOOK\n\t(IN SIDE-TABLE)\n\t(DESC \"paperback book\")\n\t(SYNONYM BOOK)\n\t(ADJECTIVE PAPERBACK)\n\t(FLAGS READBIT TAKEBIT BURNBIT)\n\t(ACTION DEATHMASK-BOOK-F)\n\t(TEXT\n\"The book has a lurid cover and an obviously inaccurate blurb. It is\ntitled \\\"Suspect,\\\" and is by someone named Dave Lebling. The book\nis apparently a mystery novel. You read part of it, but stop\nwhen you notice that someone has torn out the last ten pages.\")>",
   "referencedBy": []
  },
  "PLANTS": {
   "name": "PLANTS",
   "file": "places.zil",
   "line": 1589,
   "endLine": 1594,
   "desc": "plant",
   "ldesc": null,
   "fdesc": null,
   "loc": "SUN-ROOM",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "PLANTS",
    "PLANT",
    "POTS",
    "POT"
   ],
   "adjectives": [],
   "action": "PLANTS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PLANTS\n\t(IN SUN-ROOM)\n\t(DESC \"plant\")\n\t(SYNONYM PLANTS PLANT POTS POT)\n\t(FLAGS NDESCBIT TRYTAKEBIT TAKEBIT)\n\t(ACTION PLANTS-F)>",
   "referencedBy": []
  },
  "CHANDELIER": {
   "name": "CHANDELIER",
   "file": "places.zil",
   "line": 1631,
   "endLine": 1637,
   "desc": "chandelier",
   "ldesc": null,
   "fdesc": null,
   "loc": "DINING-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "CHANDELIER"
   ],
   "adjectives": [
    "CRYSTAL"
   ],
   "action": "CHANDELIER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CHANDELIER\n\t(IN DINING-ROOM)\n\t(SYNONYM CHANDELIER)\n\t(ADJECTIVE CRYSTAL)\n\t(DESC \"chandelier\")\n\t(ACTION CHANDELIER-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "DINING-ROOM-TABLE": {
   "name": "DINING-ROOM-TABLE",
   "file": "places.zil",
   "line": 1643,
   "endLine": 1649,
   "desc": "table",
   "ldesc": null,
   "fdesc": null,
   "loc": "DINING-ROOM",
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
    "WALNUT"
   ],
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
   "contents": [],
   "source": "<OBJECT DINING-ROOM-TABLE\n\t(IN DINING-ROOM)\n\t(SYNONYM TABLE)\n\t(ADJECTIVE WALNUT)\n\t(DESC \"table\")\n\t(CAPACITY 100)\n\t(FLAGS NDESCBIT CONTBIT OPENBIT SURFACEBIT)>",
   "referencedBy": []
  },
  "SIDEBOARD": {
   "name": "SIDEBOARD",
   "file": "places.zil",
   "line": 1651,
   "endLine": 1657,
   "desc": "sideboard",
   "ldesc": null,
   "fdesc": null,
   "loc": "DINING-ROOM",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT",
    "SURFACEBIT"
   ],
   "synonyms": [
    "BOARD"
   ],
   "adjectives": [
    "SIDE"
   ],
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
   "contents": [],
   "source": "<OBJECT SIDEBOARD\n\t(IN DINING-ROOM)\n\t(SYNONYM BOARD)\n\t(ADJECTIVE SIDE)\n\t(DESC \"sideboard\")\n\t(CAPACITY 100)\n\t(FLAGS NDESCBIT CONTBIT OPENBIT SURFACEBIT)>",
   "referencedBy": []
  },
  "CHINA-CABINET": {
   "name": "CHINA-CABINET",
   "file": "places.zil",
   "line": 1659,
   "endLine": 1666,
   "desc": "china cabinet",
   "ldesc": null,
   "fdesc": null,
   "loc": "DINING-ROOM",
   "flags": [
    "NDESCBIT",
    "LOCKED",
    "TRANSBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "CABINET"
   ],
   "adjectives": [
    "CHINA",
    "CRYSTAL"
   ],
   "action": "CHINA-CABINET-F",
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
   "source": "<OBJECT CHINA-CABINET\n\t(IN DINING-ROOM)\n\t(SYNONYM CABINET)\n\t(ADJECTIVE CHINA CRYSTAL)\n\t(DESC \"china cabinet\")\n\t(CAPACITY 100)\n\t(ACTION CHINA-CABINET-F)\n\t(FLAGS NDESCBIT LOCKED TRANSBIT CONTBIT)>",
   "referencedBy": [
    "CHINA-CABINET-F"
   ]
  },
  "BACK-DOOR": {
   "name": "BACK-DOOR",
   "file": "places.zil",
   "line": 1723,
   "endLine": 1730,
   "desc": "back door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "LOCKED",
    "DOORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "BACK"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "UNLOCK": [
     "BACK-ENTRY"
    ],
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT BACK-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"back door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE BACK)\n\t(UNLOCK BACK-ENTRY)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS LOCKED DOORBIT NDESCBIT)>",
   "referencedBy": []
  },
  "WORKBENCH": {
   "name": "WORKBENCH",
   "file": "places.zil",
   "line": 1779,
   "endLine": 1785,
   "desc": "workbench",
   "ldesc": null,
   "fdesc": null,
   "loc": "GARAGE",
   "flags": [
    "NDESCBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "WORKBENCH",
    "BENCH"
   ],
   "adjectives": [
    "WORK"
   ],
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
   "contents": [],
   "source": "<OBJECT WORKBENCH\n\t(IN GARAGE)\n\t(DESC \"workbench\")\n\t(SYNONYM WORKBENCH BENCH)\n\t(ADJECTIVE WORK)\n\t(CAPACITY 100)\n\t(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT)>",
   "referencedBy": []
  },
  "MERCEDES": {
   "name": "MERCEDES",
   "file": "places.zil",
   "line": 1787,
   "endLine": 1793,
   "desc": "Mercedes 280SL",
   "ldesc": null,
   "fdesc": null,
   "loc": "GARAGE",
   "flags": [
    "VEHBIT",
    "LOCKED",
    "CONTBIT",
    "DOORBIT",
    "TRANSBIT",
    "WINDOWBIT"
   ],
   "synonyms": [
    "CAR",
    "MERCEDES",
    "280SL"
   ],
   "adjectives": [
    "MERCEDES"
   ],
   "action": "CAR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "MERCEDES-TRUNK"
   ],
   "source": "<OBJECT MERCEDES\n\t(IN GARAGE)\n\t(DESC \"Mercedes 280SL\")\n\t(SYNONYM CAR MERCEDES 280SL)\n\t(ADJECTIVE MERCEDES)\n\t(ACTION CAR-F)\n\t(FLAGS VEHBIT LOCKED CONTBIT DOORBIT TRANSBIT WINDOWBIT)>",
   "referencedBy": [
    "CROWBAR-F"
   ]
  },
  "BMW": {
   "name": "BMW",
   "file": "places.zil",
   "line": 1795,
   "endLine": 1801,
   "desc": "BMW 320i",
   "ldesc": null,
   "fdesc": null,
   "loc": "GARAGE",
   "flags": [
    "VEHBIT",
    "LOCKED",
    "CONTBIT",
    "DOORBIT",
    "TRANSBIT",
    "WINDOWBIT"
   ],
   "synonyms": [
    "CAR",
    "BMW",
    "320I"
   ],
   "adjectives": [
    "BMW"
   ],
   "action": "CAR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "BMW-TRUNK"
   ],
   "source": "<OBJECT BMW\n\t(IN GARAGE)\n\t(DESC \"BMW 320i\")\n\t(SYNONYM CAR BMW 320I)\n\t(ADJECTIVE BMW)\n\t(ACTION CAR-F)\n\t(FLAGS VEHBIT LOCKED CONTBIT DOORBIT TRANSBIT WINDOWBIT)>",
   "referencedBy": [
    "TELL-MIKE-WALKS",
    "DETECTIVE-F",
    "CROWBAR-F"
   ]
  },
  "BMW-TRUNK": {
   "name": "BMW-TRUNK",
   "file": "places.zil",
   "line": 1822,
   "endLine": 1829,
   "desc": "BMW's trunk",
   "ldesc": null,
   "fdesc": null,
   "loc": "BMW",
   "flags": [
    "LOCKED",
    "CONTBIT",
    "SEARCHBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "TRUNK"
   ],
   "adjectives": [
    "BMW",
    "BMW'S"
   ],
   "action": "TRUNK-F",
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
   "source": "<OBJECT BMW-TRUNK\n\t(IN BMW)\n\t(DESC \"BMW's trunk\")\n\t(SYNONYM TRUNK)\n\t(ADJECTIVE BMW BMW\\'S)\n\t(ACTION TRUNK-F)\n\t(FLAGS LOCKED CONTBIT SEARCHBIT NDESCBIT)\n\t(CAPACITY 100)>",
   "referencedBy": [
    "I-MICHAEL-HIDES-FOLDER",
    "TELL-MIKE-WALKS",
    "OPEN-HIDING-PLACE",
    "HAMPER-F",
    "CROWBAR-F"
   ]
  },
  "MERCEDES-TRUNK": {
   "name": "MERCEDES-TRUNK",
   "file": "places.zil",
   "line": 1831,
   "endLine": 1838,
   "desc": "Mercedes' trunk",
   "ldesc": null,
   "fdesc": null,
   "loc": "MERCEDES",
   "flags": [
    "LOCKED",
    "CONTBIT",
    "SEARCHBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "TRUNK"
   ],
   "adjectives": [
    "MERCEDES"
   ],
   "action": "TRUNK-F",
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
   "source": "<OBJECT MERCEDES-TRUNK\n\t(IN MERCEDES)\n\t(DESC \"Mercedes' trunk\")\n\t(SYNONYM TRUNK)\n\t(ADJECTIVE MERCEDES)\n\t(ACTION TRUNK-F)\n\t(FLAGS LOCKED CONTBIT SEARCHBIT NDESCBIT)\n\t(CAPACITY 100)>",
   "referencedBy": [
    "OPEN-HIDING-PLACE",
    "HAMPER-F",
    "CROWBAR-F"
   ]
  },
  "TOOL-CHEST": {
   "name": "TOOL-CHEST",
   "file": "places.zil",
   "line": 1845,
   "endLine": 1852,
   "desc": "tool chest",
   "ldesc": null,
   "fdesc": "In front of the workbench is a battered tool chest.",
   "loc": "GARAGE",
   "flags": [
    "TAKEBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "TOOLCHEST",
    "CHEST"
   ],
   "adjectives": [
    "BATTERED",
    "TOOL"
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
    "CROWBAR"
   ],
   "source": "<OBJECT TOOL-CHEST\n\t(IN GARAGE)\n\t(DESC \"tool chest\")\n\t(FDESC \"In front of the workbench is a battered tool chest.\") \n\t(SYNONYM TOOLCHEST CHEST)\n\t(ADJECTIVE BATTERED TOOL)\n\t(CAPACITY 30)\n\t(FLAGS TAKEBIT CONTBIT)>",
   "referencedBy": []
  },
  "CROWBAR": {
   "name": "CROWBAR",
   "file": "places.zil",
   "line": 1854,
   "endLine": 1859,
   "desc": "crowbar",
   "ldesc": null,
   "fdesc": null,
   "loc": "TOOL-CHEST",
   "flags": [
    "TAKEBIT",
    "TOOLBIT"
   ],
   "synonyms": [
    "CROWBAR"
   ],
   "adjectives": [],
   "action": "CROWBAR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CROWBAR\n\t(IN TOOL-CHEST)\n\t(DESC \"crowbar\")\n\t(SYNONYM CROWBAR)\n\t(ACTION CROWBAR-F)\n\t(FLAGS TAKEBIT TOOLBIT)>",
   "referencedBy": [
    "I-MICHAEL-HIDES-FOLDER",
    "CROWBAR-F"
   ]
  },
  "BURGLAR-ALARM": {
   "name": "BURGLAR-ALARM",
   "file": "places.zil",
   "line": 1899,
   "endLine": 1905,
   "desc": "burglar alarm",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "ALARM"
   ],
   "adjectives": [
    "BURGLAR"
   ],
   "action": "BURGLAR-ALARM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BURGLAR-ALARM\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ALARM)\n\t(ADJECTIVE BURGLAR)\n\t(DESC \"burglar alarm\")\n\t(ACTION BURGLAR-ALARM-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "CROWBAR-F",
    "BURGLAR-ALARM-F",
    "I-BURGLAR-ALARM"
   ]
  },
  "GLOBAL-BALLROOM": {
   "name": "GLOBAL-BALLROOM",
   "file": "places.zil",
   "line": 1929,
   "endLine": 1933,
   "desc": "Ballroom",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "BALLROOM"
   ],
   "adjectives": [],
   "action": "GLOBAL-BALLROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-BALLROOM\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM BALLROOM)\n\t(DESC \"Ballroom\")\n\t(ACTION GLOBAL-BALLROOM-F)>",
   "referencedBy": []
  },
  "BAR": {
   "name": "BAR",
   "file": "places.zil",
   "line": 2124,
   "endLine": 2129,
   "desc": "bar",
   "ldesc": null,
   "fdesc": null,
   "loc": "BALLROOM-9",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BAR"
   ],
   "adjectives": [],
   "action": "BAR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BAR\n\t(IN BALLROOM-9)\n\t(DESC \"bar\")\n\t(SYNONYM BAR)\n\t(ACTION BAR-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "BARTENDER-F"
   ]
  },
  "LOCAL-BAND": {
   "name": "LOCAL-BAND",
   "file": "places.zil",
   "line": 2141,
   "endLine": 2147,
   "desc": "band",
   "ldesc": null,
   "fdesc": null,
   "loc": "BALLROOM-2",
   "flags": [
    "PERSON",
    "THE"
   ],
   "synonyms": [
    "BAND"
   ],
   "adjectives": [],
   "action": "LOCAL-BAND-F",
   "descfcn": "LOCAL-BAND-DESC-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LOCAL-BAND\n\t(IN BALLROOM-2)\n\t(DESC \"band\")\n\t(SYNONYM BAND)\n\t(ACTION LOCAL-BAND-F)\n\t(DESCFCN LOCAL-BAND-DESC-F)\n\t(FLAGS PERSON THE)>",
   "referencedBy": [
    "LOCAL-BAND-DESC-F",
    "LOCAL-BAND-F",
    "MUSIC-F",
    "WHO-DERE",
    "I-MUSIC"
   ]
  },
  "RECORD-PLAYER": {
   "name": "RECORD-PLAYER",
   "file": "places.zil",
   "line": 2210,
   "endLine": 2216,
   "desc": "record player",
   "ldesc": null,
   "fdesc": null,
   "loc": "BALLROOM-2",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PLAYER"
   ],
   "adjectives": [
    "RECORD"
   ],
   "action": "RECORD-PLAYER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RECORD-PLAYER\n\t(IN BALLROOM-2)\n\t(DESC \"record player\")\n\t(SYNONYM PLAYER)\n\t(ADJECTIVE RECORD)\n\t(ACTION RECORD-PLAYER-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "RECORD-PLAYER-F",
    "MUSIC-F",
    "BALLROOM-F",
    "I-MUSIC"
   ]
  },
  "MUSIC": {
   "name": "MUSIC",
   "file": "places.zil",
   "line": 2242,
   "endLine": 2247,
   "desc": "music",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "MUSIC"
   ],
   "adjectives": [],
   "action": "MUSIC-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MUSIC\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"music\")\n\t(SYNONYM MUSIC)\n\t(ACTION MUSIC-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "FIREPLACE": {
   "name": "FIREPLACE",
   "file": "places.zil",
   "line": 2261,
   "endLine": 2270,
   "desc": "fieldstone fireplace",
   "ldesc": null,
   "fdesc": null,
   "loc": "BALLROOM-8",
   "flags": [
    "CONTBIT",
    "OPENBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "FIREPLACE",
    "FIRE",
    "CHIMNEY"
   ],
   "adjectives": [
    "LARGE",
    "FIELDSTONE"
   ],
   "action": "FIREPLACE-F",
   "descfcn": "FIREPLACE-F",
   "contfcn": "FIREPLACE-F",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "500"
    ]
   },
   "contents": [],
   "source": "<OBJECT FIREPLACE\n\t(IN BALLROOM-8)\n\t(DESC \"fieldstone fireplace\")\n\t(SYNONYM FIREPLACE FIRE CHIMNEY)\n\t(ADJECTIVE LARGE FIELDSTONE)\n\t(ACTION FIREPLACE-F)\n\t(DESCFCN FIREPLACE-F)\n\t(CONTFCN FIREPLACE-F)\n\t(CAPACITY 500)\n\t(FLAGS CONTBIT OPENBIT SEARCHBIT)>",
   "referencedBy": [
    "G-COL-MARSTON",
    "I-BURNED",
    "DETECTIVE-F",
    "LIST-F",
    "FIREPLACE-F",
    "I-BURN-OBJ",
    "V-BURN"
   ]
  },
  "DOGHOUSE": {
   "name": "DOGHOUSE",
   "file": "places.zil",
   "line": 2682,
   "endLine": 2689,
   "desc": "doghouse",
   "ldesc": null,
   "fdesc": null,
   "loc": "GARDEN",
   "flags": [
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "DOGHOUSE",
    "HOUSE"
   ],
   "adjectives": [
    "DOG"
   ],
   "action": "DOGHOUSE-F",
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
    "DOG"
   ],
   "source": "<OBJECT DOGHOUSE\n\t(IN GARDEN)\n\t(DESC \"doghouse\")\n\t(SYNONYM DOGHOUSE HOUSE)\n\t(ADJECTIVE DOG)\n\t(ACTION DOGHOUSE-F)\n\t(FLAGS NDESCBIT OPENBIT CONTBIT)\n\t(CAPACITY 30)>",
   "referencedBy": [
    "GARDEN-F",
    "I-DOG",
    "DOGHOUSE-F"
   ]
  },
  "DOG": {
   "name": "DOG",
   "file": "places.zil",
   "line": 2711,
   "endLine": 2717,
   "desc": "Doberman pinscher",
   "ldesc": null,
   "fdesc": null,
   "loc": "DOGHOUSE",
   "flags": [
    "NDESCBIT",
    "THE",
    "PERSON",
    "TAKEBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "DOG",
    "DOBERMAN",
    "PINSCHER"
   ],
   "adjectives": [
    "DOBERMAN",
    "GUARD",
    "WATCH"
   ],
   "action": "DOG-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DOG\n\t(IN DOGHOUSE)\n\t(DESC \"Doberman pinscher\")\n\t(SYNONYM DOG DOBERMAN PINSCHER)\n\t(ADJECTIVE DOBERMAN GUARD WATCH)\n\t(ACTION DOG-F)\n\t(FLAGS NDESCBIT THE PERSON TAKEBIT TRYTAKEBIT)>",
   "referencedBy": [
    "PLAYER-F",
    "GARDEN-F",
    "I-DOG",
    "DOGHOUSE-F",
    "DOG-F",
    "V-DIAGNOSE"
   ]
  },
  "NORTH-DOOR": {
   "name": "NORTH-DOOR",
   "file": "places.zil",
   "line": 2759,
   "endLine": 2766,
   "desc": "north hallway door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "LOCKED",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "NORTH",
    "HALLWAY"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "UNLOCK": [
     "HALLWAY-7"
    ],
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT NORTH-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"north hallway door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE NORTH HALLWAY)\n\t(UNLOCK HALLWAY-7)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS DOORBIT LOCKED NDESCBIT)>",
   "referencedBy": [
    "START-ALICIA"
   ]
  },
  "WEST-DOOR": {
   "name": "WEST-DOOR",
   "file": "places.zil",
   "line": 2768,
   "endLine": 2775,
   "desc": "west hall door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "LOCKED",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "WEST",
    "HALL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "UNLOCK": [
     "HALLWAY-1"
    ],
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT WEST-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"west hall door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE WEST HALL)\n\t(UNLOCK HALLWAY-1)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS DOORBIT LOCKED NDESCBIT)>",
   "referencedBy": [
    "START-ALICIA"
   ]
  },
  "WEST-BATH-DOOR": {
   "name": "WEST-BATH-DOOR",
   "file": "places.zil",
   "line": 2777,
   "endLine": 2784,
   "desc": "west bath door",
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
    "WEST"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "UNLOCK": [
     "WEST-BATH"
    ],
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT WEST-BATH-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"west bath door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE WEST)\n\t(UNLOCK WEST-BATH)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS DOORBIT NDESCBIT)>",
   "referencedBy": []
  },
  "LINEN-CLOSET-DOOR": {
   "name": "LINEN-CLOSET-DOOR",
   "file": "places.zil",
   "line": 2786,
   "endLine": 2793,
   "desc": "linen closet door",
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
    "LINEN",
    "CLOSET"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "UNLOCK": [
     "ROOMS"
    ],
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT LINEN-CLOSET-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"linen closet door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE LINEN CLOSET)\n\t(UNLOCK ROOMS) ;\"no lock\"\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS DOORBIT NDESCBIT)>",
   "referencedBy": []
  },
  "GARAGE-DOOR": {
   "name": "GARAGE-DOOR",
   "file": "places.zil",
   "line": 2795,
   "endLine": 2800,
   "desc": "garage door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "NDESCBIT",
    "LOCKED"
   ],
   "synonyms": [
    "DOOR",
    "DOORS"
   ],
   "adjectives": [
    "GARAGE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GARAGE-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"garage door\")\n\t(SYNONYM DOOR DOORS)\n\t(ADJECTIVE GARAGE)\n\t(FLAGS DOORBIT NDESCBIT LOCKED)>",
   "referencedBy": []
  },
  "WALKWAY-DOOR": {
   "name": "WALKWAY-DOOR",
   "file": "places.zil",
   "line": 2802,
   "endLine": 2809,
   "desc": "walkway door",
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
    "WALKWAY"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "UNLOCK": [
     "GARAGE"
    ],
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT WALKWAY-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"walkway door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE WALKWAY)\n\t(UNLOCK GARAGE)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS DOORBIT NDESCBIT)>",
   "referencedBy": []
  },
  "SUN-ROOM-DOOR": {
   "name": "SUN-ROOM-DOOR",
   "file": "places.zil",
   "line": 2811,
   "endLine": 2818,
   "desc": "sun room door",
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
    "SUN",
    "ROOM"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "UNLOCK": [
     "SUN-ROOM"
    ],
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT SUN-ROOM-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"sun room door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE SUN ROOM)\n\t(UNLOCK SUN-ROOM)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS DOORBIT NDESCBIT)>",
   "referencedBy": []
  },
  "EAST-DOOR": {
   "name": "EAST-DOOR",
   "file": "places.zil",
   "line": 2820,
   "endLine": 2827,
   "desc": "east hall door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "LOCKED",
    "DOORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "EAST",
    "HALL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "UNLOCK": [
     "HALLWAY-19"
    ],
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT EAST-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"east hall door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE EAST HALL)\n\t(UNLOCK HALLWAY-19)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS LOCKED DOORBIT NDESCBIT)>",
   "referencedBy": []
  },
  "FRENCH-DOOR": {
   "name": "FRENCH-DOOR",
   "file": "places.zil",
   "line": 2829,
   "endLine": 2835,
   "desc": "french door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "LOCKED",
    "DOORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR",
    "DOORS"
   ],
   "adjectives": [
    "FRENCH"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "UNLOCK": [
     "BALLROOM-6"
    ]
   },
   "contents": [],
   "source": "<OBJECT FRENCH-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"french door\")\n\t(SYNONYM DOOR DOORS)\n\t(ADJECTIVE FRENCH)\n\t(UNLOCK BALLROOM-6)\n\t(FLAGS LOCKED DOORBIT NDESCBIT)>",
   "referencedBy": []
  },
  "SLIDING-DOOR": {
   "name": "SLIDING-DOOR",
   "file": "places.zil",
   "line": 2837,
   "endLine": 2843,
   "desc": "sliding glass door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "LOCKED",
    "DOORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR",
    "WINDOW",
    "GLASS"
   ],
   "adjectives": [
    "SLIDING",
    "GLASS"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "UNLOCK": [
     "HALLWAY-14"
    ]
   },
   "contents": [],
   "source": "<OBJECT SLIDING-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"sliding glass door\")\n\t(SYNONYM DOOR WINDOW GLASS)\n\t(ADJECTIVE SLIDING GLASS)\n\t(UNLOCK HALLWAY-14)\n\t(FLAGS LOCKED DOORBIT NDESCBIT)>",
   "referencedBy": []
  },
  "BARN-DOOR": {
   "name": "BARN-DOOR",
   "file": "places.zil",
   "line": 2856,
   "endLine": 2863,
   "desc": "barn door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "NDESCBIT",
    "LOCKED"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "BARN"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "UNLOCK": [
     "BARN"
    ],
    "GENERIC": [
     "GENERIC-STUFF-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT BARN-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"barn door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE BARN)\n\t(UNLOCK BARN)\n\t(GENERIC GENERIC-STUFF-F)\n\t(FLAGS DOORBIT NDESCBIT LOCKED)>",
   "referencedBy": [
    "BARN-DANCE"
   ]
  },
  "GLOBAL-OBJECTS": {
   "name": "GLOBAL-OBJECTS",
   "file": "things.zil",
   "line": 4,
   "endLine": 16,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "AN",
    "BURNBIT",
    "CONTBIT",
    "DOORBIT",
    "DRINKBIT",
    "FEMALE",
    "FOODBIT",
    "FURNITURE",
    "INVISIBLE",
    "LOCKED",
    "NDESCBIT",
    "ONBIT",
    "OPENBIT",
    "PERSON",
    "READBIT",
    "RMUNGBIT",
    "SEARCHBIT",
    "SURFACEBIT",
    "TAKEBIT",
    "THE",
    "TOLD",
    "TOOLBIT",
    "TOUCHBIT",
    "TRANSBIT",
    "TRYTAKEBIT",
    "VEHBIT",
    "WEARBIT",
    "WEAPONBIT",
    "WINDOWBIT",
    "MICHAELBIT",
    "ALICIABIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": "NULL-F",
   "contfcn": "NULL-F",
   "globals": [],
   "pseudo": [
    "NULL-F"
   ],
   "otherProps": {
    "TEXT": [
     "FOO"
    ]
   },
   "contents": [
    "HIM-HER",
    "YOU",
    "ME",
    "GLOBAL-MICHAEL",
    "GLOBAL-VERONICA",
    "POLICE",
    "GLOBAL-ALICIA",
    "ALICIA-CAR",
    "GLOBAL-RICHARD",
    "GLOBAL-COL-MARSTON",
    "GLOBAL-LINDA",
    "GLOBAL-SEN-ASHER",
    "GLOBAL-COCHRANE",
    "GLOBAL-OSTMANN",
    "GLOBAL-BUTLER",
    "GLOBAL-BARTENDER",
    "GLOBAL-DRINK",
    "GLOBAL-DETECTIVE",
    "GLOBAL-DUFFY",
    "GLOBAL-DOORBELL",
    "SALE",
    "TRUST",
    "BURGLAR-ALARM",
    "GLOBAL-BALLROOM",
    "MUSIC",
    "LOCAL-GLOBALS",
    "IT",
    "INTNUM",
    "WEATHER",
    "MIDNIGHT",
    "GLOBAL-FINGERPRINTS",
    "GLOBAL-HERE",
    "HALLWAY",
    "GLOBAL-ROOM",
    "GLOBAL-MURDER",
    "GLOBAL-EMBEZZLEMENT",
    "HORSE",
    "COSTUME-SHOP",
    "JACKSON",
    "DISCUSSION",
    "TAXI",
    "HANDS",
    "HOUSE",
    "KEY",
    "PARTY"
   ],
   "source": "<OBJECT GLOBAL-OBJECTS\n\t(FLAGS AN BURNBIT CONTBIT DOORBIT\n\t       DRINKBIT FEMALE FOODBIT FURNITURE\n\t       INVISIBLE LOCKED NDESCBIT ONBIT\n\t       OPENBIT PERSON READBIT RMUNGBIT\n\t       SEARCHBIT SURFACEBIT TAKEBIT THE\n\t       TOLD TOOLBIT TOUCHBIT TRANSBIT\n\t       TRYTAKEBIT VEHBIT WEARBIT WEAPONBIT\n\t       WINDOWBIT MICHAELBIT ALICIABIT ;\"31 BITS\")\n\t(DESCFCN NULL-F)\n\t(CONTFCN NULL-F)\n\t(PSEUDO NULL-F)\n\t(TEXT \"FOO\")>",
   "referencedBy": [
    "GLOBAL-CHECK",
    "GLOBAL-PERSON-F",
    "LOCALIZE",
    "DETECTIVE-F",
    "I-UNTANGLE",
    "I-MUSIC",
    "HACK-HACK",
    "HELD?",
    "ROOM-CHECK",
    "META-LOC",
    "V-EXAMINE",
    "PRE-FIND",
    "V-FIND",
    "V-LOOK-UNDER",
    "PRE-READ",
    "PRE-TAKE",
    "V-WALK-TO"
   ]
  },
  "LOCAL-GLOBALS": {
   "name": "LOCAL-GLOBALS",
   "file": "things.zil",
   "line": 18,
   "endLine": 20,
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
    "FRONT-DOOR",
    "VELVET-RIBBON",
    "LH-DOOR",
    "MH-DOOR",
    "MORNING-ROOM-DOOR",
    "SITTING-ROOM-DOOR",
    "WEST-CLOSET-DOOR",
    "EAST-CLOSET-DOOR",
    "EAST-BATH-DOOR",
    "MEDIA-ROOM-DOOR",
    "MEDIA-OFFICE-DOOR",
    "NORTH-OFFICE-DOOR",
    "SOUTH-OFFICE-DOOR",
    "GLOBAL-RUG",
    "LIBRARY-DOOR",
    "BACK-DOOR",
    "NORTH-DOOR",
    "WEST-DOOR",
    "WEST-BATH-DOOR",
    "LINEN-CLOSET-DOOR",
    "GARAGE-DOOR",
    "WALKWAY-DOOR",
    "SUN-ROOM-DOOR",
    "EAST-DOOR",
    "FRENCH-DOOR",
    "SLIDING-DOOR",
    "BARN-DOOR",
    "WATER",
    "TELEPHONE",
    "SINK",
    "SHOWER",
    "TOILET",
    "FOOD",
    "GLOBAL-CHAIR",
    "GLOBAL-SOFA",
    "CURTAINS",
    "WINDOW",
    "GLOBAL-PLANTS",
    "STAIR"
   ],
   "source": "<OBJECT LOCAL-GLOBALS\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ZZKJLK)\t;\"This synonym is necessary - God knows\">",
   "referencedBy": [
    "MOBY-FIND",
    "SEARCH-LIST",
    "META-LOC",
    "V-EXAMINE",
    "V-LOOK-UNDER"
   ]
  },
  "PSEUDO-OBJECT": {
   "name": "PSEUDO-OBJECT",
   "file": "things.zil",
   "line": 22,
   "endLine": 24,
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
    "RUG-F",
    "BARN-F",
    "V-AGAIN",
    "ROOM-CHECK",
    "V-FIND"
   ]
  },
  "NOT-HERE-OBJECT": {
   "name": "NOT-HERE-OBJECT",
   "file": "things.zil",
   "line": 26,
   "endLine": 28,
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
    "MAIN-LOOP",
    "PERFORM",
    "GET-OBJECT",
    "ITAKE-CHECK",
    "GENERIC-STUFF-F",
    "NOT-HERE-OBJECT-F",
    "FIND-NOT-HERE",
    "NOT-HERE-PRINT"
   ]
  },
  "IT": {
   "name": "IT",
   "file": "things.zil",
   "line": 170,
   "endLine": 175,
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
    "HE",
    "SHE",
    "THEY"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT IT\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM IT HE SHE THEY)\n\t(DESC \"it\")\n\t(FLAGS NDESCBIT AN)\n\t;(ACTION IT-F)>",
   "referencedBy": [
    "V-$IT",
    "MAIN-LOOP",
    "PERFORM",
    "ITAKE-CHECK",
    "THE?"
   ]
  },
  "INTNUM": {
   "name": "INTNUM",
   "file": "things.zil",
   "line": 202,
   "endLine": 206,
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
    "V-$VERIFY",
    "V-PHONE",
    "PRE-FIND",
    "V-FIND",
    "PRE-READ",
    "V-WAIT-FOR",
    "V-WAIT-UNTIL"
   ]
  },
  "WEATHER": {
   "name": "WEATHER",
   "file": "things.zil",
   "line": 208,
   "endLine": 212,
   "desc": "weather",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "WEATHER",
    "SKY",
    "RAIN",
    "CLOUDS"
   ],
   "adjectives": [],
   "action": "WEATHER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WEATHER\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM WEATHER SKY RAIN CLOUDS)\n\t(DESC \"weather\")\n\t(ACTION WEATHER-F)>",
   "referencedBy": [
    "DETECTIVE-F",
    "WINDOW-F",
    "V-LOOK-UP"
   ]
  },
  "MIDNIGHT": {
   "name": "MIDNIGHT",
   "file": "things.zil",
   "line": 268,
   "endLine": 272,
   "desc": "midnight",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
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
   "source": "<OBJECT MIDNIGHT\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"midnight\")\n\t(SYNONYM MIDNIGHT)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "V-WAIT-FOR",
    "V-WAIT-UNTIL"
   ]
  },
  "HANDCUFFS": {
   "name": "HANDCUFFS",
   "file": "things.zil",
   "line": 274,
   "endLine": 278,
   "desc": "handcuffs",
   "ldesc": null,
   "fdesc": null,
   "loc": "DUFFY",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "HANDCUFF",
    "CUFF",
    "CUFFS"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HANDCUFFS\n\t(IN DUFFY)\n\t(DESC \"handcuffs\")\n\t(SYNONYM HANDCUFF CUFF CUFFS)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "V-HANDCUFF",
    "PRE-PUT",
    "V-TIE-WITH"
   ]
  },
  "WATER": {
   "name": "WATER",
   "file": "things.zil",
   "line": 280,
   "endLine": 285,
   "desc": "water",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
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
   "source": "<OBJECT WATER\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"water\")\n\t(SYNONYM WATER)\n\t(ACTION WATER-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "WATER-F",
    "V-LAMP-ON"
   ]
  },
  "TELEPHONE": {
   "name": "TELEPHONE",
   "file": "things.zil",
   "line": 292,
   "endLine": 297,
   "desc": "telephone",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "TELEPHONE",
    "PHONE"
   ],
   "adjectives": [],
   "action": "TELEPHONE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TELEPHONE\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"telephone\")\n\t(SYNONYM TELEPHONE PHONE)\n\t(ACTION TELEPHONE-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "MICHAEL-F",
    "POLICE-F",
    "VARIOUS-TABLES-F",
    "TELEPHONE-F",
    "V-PHONE"
   ]
  },
  "GLOBAL-FINGERPRINTS": {
   "name": "GLOBAL-FINGERPRINTS",
   "file": "things.zil",
   "line": 310,
   "endLine": 315,
   "desc": "fingerprints",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "FINGERPRINT",
    "PRINT",
    "PRINTS"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-FINGERPRINTS\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"fingerprints\")\n\t(SYNONYM FINGERPRINT PRINT PRINTS)\n\t;(ADJECTIVE FINGER)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "DETECTIVE-F",
    "CHECK-GLASS",
    "PLAYER-ARRESTED?",
    "GLASS-F",
    "V-FINGERPRINT"
   ]
  },
  "SINK": {
   "name": "SINK",
   "file": "things.zil",
   "line": 317,
   "endLine": 322,
   "desc": "sink",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "SINK",
    "BASIN",
    "TAP"
   ],
   "adjectives": [],
   "action": "SINK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SINK\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"sink\")\n\t(SYNONYM SINK BASIN TAP)\n\t(ACTION SINK-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "HANDS-F",
    "V-LAMP-ON"
   ]
  },
  "SHOWER": {
   "name": "SHOWER",
   "file": "things.zil",
   "line": 328,
   "endLine": 334,
   "desc": "shower",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BATH",
    "STALL"
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
   "source": "<OBJECT SHOWER\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"shower\")\n\t(SYNONYM BATH STALL)\n\t(ADJECTIVE SHOWER)\n\t(ACTION SHOWER-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "TOILET": {
   "name": "TOILET",
   "file": "things.zil",
   "line": 342,
   "endLine": 348,
   "desc": "toilet",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "FURNITURE",
    "VEHBIT",
    "OPENBIT",
    "SURFACEBIT"
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
   "otherProps": {
    "CAPACITY": [
     "30"
    ]
   },
   "contents": [],
   "source": "<OBJECT TOILET\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"toilet\")\n\t(SYNONYM TOILET)\n\t(ACTION TOILET-F)\n\t(CAPACITY 30)\n\t(FLAGS NDESCBIT FURNITURE VEHBIT OPENBIT SURFACEBIT)>",
   "referencedBy": [
    "TOILET-F"
   ]
  },
  "GLOBAL-HERE": {
   "name": "GLOBAL-HERE",
   "file": "things.zil",
   "line": 363,
   "endLine": 367,
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
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-HERE\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"here\")\n\t(SYNONYM HERE)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "ROOM-CHECK",
    "PRE-SEARCH-OBJECT-FOR",
    "V-WAIT-FOR"
   ]
  },
  "HALLWAY": {
   "name": "HALLWAY",
   "file": "things.zil",
   "line": 369,
   "endLine": 373,
   "desc": "hallway",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "HALL",
    "HALLWAY",
    "CORRIDOR"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HALLWAY\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"hallway\")\n\t(SYNONYM HALL HALLWAY CORRIDOR)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "V-LOOK-DOWN",
    "V-WALK-TO"
   ]
  },
  "GLOBAL-ROOM": {
   "name": "GLOBAL-ROOM",
   "file": "things.zil",
   "line": 375,
   "endLine": 380,
   "desc": "room",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "ROOM",
    "FLOOR"
   ],
   "adjectives": [],
   "action": "GLOBAL-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-ROOM\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"room\")\n\t(SYNONYM ROOM FLOOR)\n\t(ACTION GLOBAL-ROOM-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "GLOBAL-ROOM-F",
    "ROOM-CHECK",
    "PRE-LEAVE",
    "PRE-SEARCH-OBJECT-FOR"
   ]
  },
  "GLOBAL-MURDER": {
   "name": "GLOBAL-MURDER",
   "file": "things.zil",
   "line": 393,
   "endLine": 399,
   "desc": "murder",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "MURDER",
    "KILLING",
    "DEATH",
    "DEAD"
   ],
   "adjectives": [
    "VERONICA"
   ],
   "action": "GLOBAL-MURDER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-MURDER\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"murder\")\n\t(SYNONYM MURDER KILLING DEATH DEAD)\n\t(ADJECTIVE VERONICA)\n\t(ACTION GLOBAL-MURDER-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "MURDER-TELL",
    "PLAYER-F",
    "MICHAEL-F",
    "ALICIA-F",
    "RICHARD-F",
    "COL-MARSTON-F",
    "LINDA-F",
    "SEN-ASHER-F",
    "COCHRANE-F",
    "OSTMANN-F",
    "BUTLER-F",
    "BARTENDER-F",
    "GLOBAL-MURDER-F",
    "PRE-ACCUSE"
   ]
  },
  "GLOBAL-EMBEZZLEMENT": {
   "name": "GLOBAL-EMBEZZLEMENT",
   "file": "things.zil",
   "line": 444,
   "endLine": 448,
   "desc": "theft",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "THEFT",
    "EMBEZZLEMENT"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-EMBEZZLEMENT\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"theft\")\n\t(SYNONYM THEFT EMBEZZLEMENT)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "COL-MARSTON-F",
    "DETECTIVE-F",
    "PRE-ACCUSE"
   ]
  },
  "HORSE": {
   "name": "HORSE",
   "file": "things.zil",
   "line": 450,
   "endLine": 455,
   "desc": "horse",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "HORSE",
    "GRUE",
    "HORSES"
   ],
   "adjectives": [
    "LURKING"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HORSE\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"horse\")\n\t(SYNONYM HORSE GRUE HORSES)\n\t(ADJECTIVE LURKING)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "MICHAEL-F",
    "ALICIA-F"
   ]
  },
  "GLASS": {
   "name": "GLASS",
   "file": "things.zil",
   "line": 457,
   "endLine": 462,
   "desc": "broken glass",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "TRYTAKEBIT",
    "CONTBIT",
    "OPENBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "GLASS",
    "GOBLET"
   ],
   "adjectives": [
    "BROKEN"
   ],
   "action": "GLASS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "LIQUID"
   ],
   "source": "<OBJECT GLASS\n\t(DESC \"broken glass\")\n\t(SYNONYM GLASS GOBLET)\n\t(ADJECTIVE BROKEN)\n\t(FLAGS TAKEBIT TRYTAKEBIT CONTBIT OPENBIT SEARCHBIT)\n\t(ACTION GLASS-F)>",
   "referencedBy": [
    "V-$SCORE",
    "I-SPILL",
    "BUTLER-F",
    "G-BUTLER",
    "DUMP-COATS",
    "TRASH-BASKET-F",
    "DETECTIVE-F",
    "CHECK-GLASS",
    "DUFFY-TO-LAB",
    "GLASS-F"
   ]
  },
  "LIQUID": {
   "name": "LIQUID",
   "file": "things.zil",
   "line": 489,
   "endLine": 495,
   "desc": "liquid",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLASS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "LIQUID",
    "FILM"
   ],
   "adjectives": [
    "RED",
    "SWEET"
   ],
   "action": "LIQUID-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LIQUID\n\t(IN GLASS)\n\t(DESC \"liquid\")\n\t(SYNONYM LIQUID FILM)\n\t(ADJECTIVE RED SWEET)\n\t(FLAGS NDESCBIT)\n\t(ACTION LIQUID-F)>",
   "referencedBy": []
  },
  "RECEIPT": {
   "name": "RECEIPT",
   "file": "things.zil",
   "line": 502,
   "endLine": 510,
   "desc": "costume receipt",
   "ldesc": null,
   "fdesc": null,
   "loc": "PLAYER",
   "flags": [
    "TAKEBIT",
    "BURNBIT",
    "READBIT"
   ],
   "synonyms": [
    "RECEIPT"
   ],
   "adjectives": [
    "COSTUME"
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
     "(A copy is in your game package.)"
    ]
   },
   "contents": [],
   "source": "<OBJECT RECEIPT\n\t(IN PLAYER)\n\t(DESC \"costume receipt\")\n\t(SYNONYM RECEIPT)\n\t(ADJECTIVE COSTUME)\n\t(FLAGS TAKEBIT BURNBIT READBIT)\n\t(SIZE 2)\n\t(TEXT\n\"(A copy is in your game package.)\")>",
   "referencedBy": []
  },
  "COSTUME-SHOP": {
   "name": "COSTUME-SHOP",
   "file": "things.zil",
   "line": 521,
   "endLine": 527,
   "desc": "Costumes Unlimited",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "SHOP"
   ],
   "adjectives": [
    "COSTUME",
    "UNLIMITED"
   ],
   "action": "SHOP-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT COSTUME-SHOP\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Costumes Unlimited\")\n\t(SYNONYM SHOP)\n\t(ADJECTIVE COSTUME UNLIMITED)\n\t(FLAGS NDESCBIT)\n\t(ACTION SHOP-F)>",
   "referencedBy": [
    "V-PHONE"
   ]
  },
  "JACK": {
   "name": "JACK",
   "file": "things.zil",
   "line": 548,
   "endLine": 552,
   "desc": "Jack",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT",
    "TRANSBIT",
    "PERSON"
   ],
   "synonyms": [
    "JACK"
   ],
   "adjectives": [],
   "action": "JACK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT JACK\n\t(DESC \"Jack\")\n\t(SYNONYM JACK)\n\t(ACTION JACK-F)\n\t(FLAGS NDESCBIT TRANSBIT PERSON)>",
   "referencedBy": [
    "SHOP-F",
    "I-HANG-UP",
    "JACK-F"
   ]
  },
  "JACKSON": {
   "name": "JACKSON",
   "file": "things.zil",
   "line": 589,
   "endLine": 595,
   "desc": "Earl Davis Jackson",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT",
    "TRANSBIT",
    "PERSON"
   ],
   "synonyms": [
    "JACKSON",
    "EDITOR"
   ],
   "adjectives": [
    "EARL",
    "DAVIS"
   ],
   "action": "JACKSON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT JACKSON\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Earl Davis Jackson\")\n\t(SYNONYM JACKSON EDITOR)\n\t(ADJECTIVE EARL DAVIS)\n\t(ACTION JACKSON-F)\n\t(FLAGS NDESCBIT TRANSBIT PERSON)>",
   "referencedBy": []
  },
  "CARD": {
   "name": "CARD",
   "file": "things.zil",
   "line": 601,
   "endLine": 608,
   "desc": "business card",
   "ldesc": null,
   "fdesc": null,
   "loc": "WASTE-BASKET",
   "flags": [
    "NDESCBIT",
    "BURNBIT",
    "READBIT"
   ],
   "synonyms": [
    "CARD"
   ],
   "adjectives": [
    "BUSINESS",
    "CRUMPLED"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "(A copy is in your game package.)"
    ]
   },
   "contents": [],
   "source": "<OBJECT CARD\n\t(IN WASTE-BASKET)\n\t(DESC \"business card\")\n\t(SYNONYM CARD)\n\t(ADJECTIVE BUSINESS CRUMPLED)\n\t(FLAGS NDESCBIT BURNBIT READBIT)\n\t(TEXT\n\"(A copy is in your game package.)\")>",
   "referencedBy": [
    "ARREST",
    "COCHRANE-F",
    "DETECTIVE-F",
    "WASTE-BASKET-F"
   ]
  },
  "WASTE-BASKET": {
   "name": "WASTE-BASKET",
   "file": "things.zil",
   "line": 623,
   "endLine": 632,
   "desc": "waste basket",
   "ldesc": null,
   "fdesc": "Next to the large desk is a waste basket.",
   "loc": "OFFICE",
   "flags": [
    "SEARCHBIT",
    "CONTBIT",
    "OPENBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "BASKET",
    "WASTEBASKET"
   ],
   "adjectives": [
    "WASTE"
   ],
   "action": "WASTE-BASKET-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "15"
    ],
    "SIZE": [
     "15"
    ]
   },
   "contents": [
    "CARD"
   ],
   "source": "<OBJECT WASTE-BASKET\n\t(IN OFFICE)\n\t(SYNONYM BASKET WASTEBASKET)\n\t(ADJECTIVE WASTE)\n\t(DESC \"waste basket\")\n\t(FDESC \"Next to the large desk is a waste basket.\")\n\t(ACTION WASTE-BASKET-F)\n\t(CAPACITY 15)\n\t(SIZE 15)\n\t(FLAGS SEARCHBIT CONTBIT OPENBIT TAKEBIT)>",
   "referencedBy": [
    "WASTE-BASKET-F"
   ]
  },
  "DISCUSSION": {
   "name": "DISCUSSION",
   "file": "things.zil",
   "line": 649,
   "endLine": 654,
   "desc": "heated discussion",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "DISCUSSION",
    "ARGUMENT"
   ],
   "adjectives": [
    "HEATED"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DISCUSSION\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM DISCUSSION ARGUMENT)\n\t(ADJECTIVE HEATED)\n\t(DESC \"heated discussion\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "I-ARGUMENT",
    "BALLROOM-9-F",
    "V-LISTEN"
   ]
  },
  "TAXI": {
   "name": "TAXI",
   "file": "things.zil",
   "line": 658,
   "endLine": 663,
   "desc": "taxi",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "TAXI",
    "CAB"
   ],
   "adjectives": [],
   "action": "TAXI-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TAXI\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM TAXI CAB)\n\t(DESC \"taxi\")\n\t(ACTION TAXI-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "HANDS": {
   "name": "HANDS",
   "file": "things.zil",
   "line": 671,
   "endLine": 676,
   "desc": "hands",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "HANDS"
   ],
   "adjectives": [],
   "action": "HANDS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HANDS\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"hands\")\n\t(SYNONYM HANDS)\n\t(ACTION HANDS-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "SINK-F",
    "HANDS-F"
   ]
  },
  "FOOD": {
   "name": "FOOD",
   "file": "things.zil",
   "line": 686,
   "endLine": 692,
   "desc": "food",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "FOODBIT",
    "NDESCBIT",
    "TAKEBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "D'OEUVRES",
    "OEUVRES",
    "MUNCHIES",
    "FOOD"
   ],
   "adjectives": [
    "HORS",
    "SHRIMP",
    "SANDWICHES"
   ],
   "action": "FOOD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FOOD\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"food\")\n\t(SYNONYM D\\'OEUVRES OEUVRES MUNCHIES FOOD)\n\t(ADJECTIVE HORS SHRIMP SANDWICHES) \n\t(ACTION FOOD-F)\n\t(FLAGS FOODBIT NDESCBIT TAKEBIT TRYTAKEBIT)>",
   "referencedBy": []
  },
  "GLOBAL-CHAIR": {
   "name": "GLOBAL-CHAIR",
   "file": "things.zil",
   "line": 704,
   "endLine": 711,
   "desc": "chair",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "FURNITURE",
    "VEHBIT",
    "TRYTAKEBIT",
    "TAKEBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "CHAIR",
    "ARMCHAIR"
   ],
   "adjectives": [
    "ARM",
    "LAWN"
   ],
   "action": "GLOBAL-CHAIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "100"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-CHAIR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"chair\")\n\t(SYNONYM CHAIR ARMCHAIR)\n\t(ADJECTIVE ARM LAWN)\n\t(FLAGS FURNITURE VEHBIT TRYTAKEBIT TAKEBIT OPENBIT)\n\t(SIZE 100)\n\t(ACTION GLOBAL-CHAIR-F)>",
   "referencedBy": [
    "GLOBAL-CHAIR-F",
    "DESCRIBE-ROOM"
   ]
  },
  "GLOBAL-SOFA": {
   "name": "GLOBAL-SOFA",
   "file": "things.zil",
   "line": 713,
   "endLine": 720,
   "desc": "sofa",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "FURNITURE",
    "VEHBIT",
    "TRYTAKEBIT",
    "TAKEBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "COUCH",
    "SOFA"
   ],
   "adjectives": [
    "LARGE"
   ],
   "action": "GLOBAL-CHAIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "100"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-SOFA\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"sofa\")\n\t(SYNONYM COUCH SOFA)\n\t(ADJECTIVE LARGE)\n\t(FLAGS FURNITURE VEHBIT TRYTAKEBIT TAKEBIT OPENBIT)\n\t(SIZE 100)\n\t(ACTION GLOBAL-CHAIR-F)>",
   "referencedBy": [
    "GLOBAL-CHAIR-F",
    "DESCRIBE-ROOM"
   ]
  },
  "CURTAINS": {
   "name": "CURTAINS",
   "file": "things.zil",
   "line": 745,
   "endLine": 750,
   "desc": "curtains",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "CURTAINS"
   ],
   "adjectives": [],
   "action": "CURTAINS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CURTAINS\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"curtains\")\n\t(SYNONYM CURTAINS)\n\t(FLAGS NDESCBIT)\n\t(ACTION CURTAINS-F)>",
   "referencedBy": [
    "CURTAINS-F",
    "WINDOW-F"
   ]
  },
  "WINDOW": {
   "name": "WINDOW",
   "file": "things.zil",
   "line": 781,
   "endLine": 786,
   "desc": "window",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "WINDOWBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "WINDOW"
   ],
   "adjectives": [],
   "action": "WINDOW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WINDOW\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM WINDOW)\n\t(DESC \"window\")\n\t(ACTION WINDOW-F)\n\t(FLAGS WINDOWBIT NDESCBIT)>",
   "referencedBy": [
    "WEATHER-F"
   ]
  },
  "GLOBAL-PLANTS": {
   "name": "GLOBAL-PLANTS",
   "file": "things.zil",
   "line": 801,
   "endLine": 806,
   "desc": "plant",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "WINDOWBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "PLANTS",
    "POTS",
    "PLANT",
    "POT"
   ],
   "adjectives": [],
   "action": "GLOBAL-PLANTS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-PLANTS\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM PLANTS POTS PLANT POT)\n\t(DESC \"plant\")\n\t(ACTION GLOBAL-PLANTS-F)\n\t(FLAGS WINDOWBIT NDESCBIT)>",
   "referencedBy": []
  },
  "HOUSE": {
   "name": "HOUSE",
   "file": "things.zil",
   "line": 820,
   "endLine": 826,
   "desc": "house",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "HOUSE"
   ],
   "adjectives": [
    "FARM"
   ],
   "action": "HOUSE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HOUSE\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM HOUSE)\n\t(ADJECTIVE FARM)\n\t(DESC \"house\")\n\t(ACTION HOUSE-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "KEY": {
   "name": "KEY",
   "file": "things.zil",
   "line": 838,
   "endLine": 843,
   "desc": "key",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "KEY",
    "KEYS"
   ],
   "adjectives": [],
   "action": "KEY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT KEY\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM KEY KEYS)\n\t(DESC \"key\")\n\t(ACTION KEY-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "STAIR": {
   "name": "STAIR",
   "file": "things.zil",
   "line": 849,
   "endLine": 854,
   "desc": "stair",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "STAIR",
    "STAIRS"
   ],
   "adjectives": [],
   "action": "STAIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT STAIR\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM STAIR STAIRS)\n\t(DESC \"stair\")\n\t(ACTION STAIR-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "PARTY": {
   "name": "PARTY",
   "file": "things.zil",
   "line": 864,
   "endLine": 869,
   "desc": "party",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PARTY"
   ],
   "adjectives": [],
   "action": "PARTY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PARTY\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM PARTY)\n\t(DESC \"party\")\n\t(ACTION PARTY-F)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "PRE-LEAVE"
   ]
  }
 },
 "routines": {
  "QUEUE": {
   "name": "QUEUE",
   "file": "clock.zil",
   "line": 19,
   "endLine": 22,
   "source": "<ROUTINE QUEUE (RTN TICK \"AUX\" CINT)\n\t #DECL ((RTN) ATOM (TICK) FIX (CINT) <PRIMTYPE VECTOR>)\n\t <PUT <SET CINT <INT .RTN>> ,C-TICK .TICK>\n\t .CINT>"
  },
  "INT": {
   "name": "INT",
   "file": "clock.zil",
   "line": 24,
   "endLine": 35,
   "source": "<ROUTINE INT (RTN \"AUX\" E C INT)\n\t #DECL ((RTN) ATOM (E C INT) <PRIMTYPE VECTOR>)\n\t <SET E <REST ,C-TABLE ,C-TABLELEN>>\n\t <SET C <REST ,C-TABLE ,C-INTS>>\n\t <REPEAT ()\n\t\t <COND (<==? .C .E>\n\t\t\t<SETG C-INTS <- ,C-INTS ,C-INTLEN>>\n\t\t\t<SET INT <REST ,C-TABLE ,C-INTS>>\n\t\t\t<PUT .INT ,C-RTN .RTN>\n\t\t\t<RETURN .INT>)\n\t\t       (<EQUAL? <GET .C ,C-RTN> .RTN> <RETURN .C>)>\n\t\t <SET C <REST .C ,C-INTLEN>>>>"
  },
  "CLOCKER": {
   "name": "CLOCKER",
   "file": "clock.zil",
   "line": 39,
   "endLine": 69,
   "source": "<ROUTINE CLOCKER (\"AUX\" C E TICK (FLG <>) VAL)\n\t #DECL ((C E) <PRIMTYPE VECTOR> (TICK) FIX ;(FLG) ;<OR FALSE ATOM>)\n\t <COND (,CLOCK-WAIT <SETG CLOCK-WAIT <>> <RFALSE>)>\n\t <SETG PRESENT-TIME <+ ,PRESENT-TIME 1>>\n\t <COND (<G? <SETG MOVES <+ ,MOVES 1>> 59>\n\t\t<SETG MOVES 0>\n\t\t<COND (<G? <SETG SCORE <+ ,SCORE 1>> 23>\n\t\t       <SETG SCORE 0>)>)>\n\t <SET C <REST ,C-TABLE ,C-INTS>>\n\t <SET E <REST ,C-TABLE ,C-TABLELEN>>\n\t <REPEAT ()\n\t\t <COND (<==? .C .E>\n\t\t\t%<DEBUG-CODE\n\t\t\t  <COND (,SHADOW <SETG PRSO ,SHADOW> <V-$TABLE>)>>\n\t\t\t<RETURN .FLG>)\n\t\t       (<NOT <0? <GET .C ,C-ENABLED?>>>\n\t\t\t<SET TICK <GET .C ,C-TICK>>\n\t\t\t<COND (<0? .TICK>)\n\t\t\t      (T\n\t\t\t       <PUT .C ,C-TICK <- .TICK 1>>\n\t\t\t       <COND (<AND <NOT <G? .TICK 1>>\n\t\t\t\t           <SET VAL\n\t\t\t\t\t\t%<DEBUG-CODE\n\t\t\t\t\t\t  <D-APPLY\n\t\t\t\t\t\t   \"Int\" <GET .C ,C-RTN>>\n\t\t\t\t\t\t  <APPLY\n\t\t\t\t\t\t   <GET .C ,C-RTN>>>>>\n\t\t\t\t      <COND (<OR <NOT .FLG>\n\t\t\t\t\t\t <==? .VAL ,M-FATAL>>\n\t\t\t\t\t     <SET FLG .VAL>)>)>)>)>\n\t\t <SET C <REST .C ,C-INTLEN>>>>"
  },
  "V-$DEBUG": {
   "name": "V-$DEBUG",
   "file": "debug.zil",
   "line": 24,
   "endLine": 27,
   "source": "<ROUTINE V-$DEBUG ()\n\t <COND (<SETG DEBUG <NOT ,DEBUG>>\n\t\t<TELL \"Find them bugs, boss!\" CR>)\n\t       (T <TELL \"No bugs left, eh?\" CR>)>>"
  },
  "TELL-UNKNOWN": {
   "name": "TELL-UNKNOWN",
   "file": "debug.zil",
   "line": 29,
   "endLine": 32,
   "source": "<ROUTINE TELL-UNKNOWN (STR)\n\t <TELL\n\"Sorry, but the word \\\"\" .STR \"\\\" is not in the vocabulary that\nyou can use.\" CR>>"
  },
  "V-$HANDLE": {
   "name": "V-$HANDLE",
   "file": "debug.zil",
   "line": 34,
   "endLine": 40,
   "source": "<ROUTINE V-$HANDLE ()\n\t <COND (<NOT ,DEBUG>\n\t\t<TELL-UNKNOWN \"$ha\">\n\t\t<RTRUE>)>\n\t <COND (<SETG HDEBUG <NOT ,HDEBUG>>\n\t\t<TELL \"Watch perform.\" CR>)\n\t       (T <TELL \"No performance.\" CR>)>>"
  },
  "V-$GOAL": {
   "name": "V-$GOAL",
   "file": "debug.zil",
   "line": 42,
   "endLine": 48,
   "source": "<ROUTINE V-$GOAL ()\n\t <COND (<NOT ,DEBUG>\n\t\t<TELL-UNKNOWN \"$go\">\n\t\t<RTRUE>)\n\t       (<SETG GDEBUG <NOT ,GDEBUG>>\n\t\t<TELL \"Showing goals.\" CR>)\n\t       (T <TELL \"No more goals.\" CR>)>>"
  },
  "V-$TANDY": {
   "name": "V-$TANDY",
   "file": "debug.zil",
   "line": 50,
   "endLine": 60,
   "source": "<ROUTINE V-$TANDY (\"AUX\" X)\n\t<COND (<NOT ,DEBUG>\n\t       <TELL-UNKNOWN \"$ta\">\n\t       <RTRUE>)>\n\t<SET X <GETB 0 1>>\n\t<COND (<==? <BAND .X 8> 0>\n\t       <PUTB 0 1 <BOR .X 8>>\n\t       <TELL \"[on]\" CR>)\n\t      (T\n\t       <PUTB 0 1 <BAND .X -9>>\n\t       <TELL \"[off]\" CR>)>>"
  },
  "V-$NEXT": {
   "name": "V-$NEXT",
   "file": "debug.zil",
   "line": 62,
   "endLine": 77,
   "source": "<ROUTINE V-$NEXT (\"AUX\" (CNT 0) O L NUM RM)\n\t <COND (<NOT ,DEBUG>\n\t\t<TELL-UNKNOWN \"$ne\">\n\t\t<RTRUE>)>\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> ,CHARACTER-MAX>\n\t\t\t<RETURN>)\n\t\t       (<SET O <GET ,CHARACTER-TABLE .CNT>>\n\t\t\t<SET L <GET ,MOVEMENT-GOALS .CNT>>\n\t\t\t<REPEAT ()\n\t\t\t\t<COND (<0? <SET NUM <GET .L ,MG-TIME>>>\n\t\t\t\t       <RETURN>)\n\t\t\t\t      (<SET RM <GET .L 3>>\n\t\t\t\t       <TELL\nCD .O \" will go in \" N .NUM \" minutes to \" THE .RM \".\" CR>\n\t\t\t\t       <SET L <REST .L ,MG-LENGTH>>)>>)>>>"
  },
  "V-$WHERE": {
   "name": "V-$WHERE",
   "file": "debug.zil",
   "line": 79,
   "endLine": 93,
   "source": "<ROUTINE V-$WHERE (\"AUX\" (CNT 0) O L)\n\t <COND (<NOT ,DEBUG>\n\t\t<TELL-UNKNOWN \"$wh\">)\n\t       (,PRSI <MOVE ,PRSI ,PRSO>)\n\t       (,PRSO <GOTO ,PRSO>)\n\t       (T\n\t\t<REPEAT ()\n\t\t\t<COND (<SET O <GET ,CHARACTER-TABLE .CNT>>\n\t\t\t       <SET L <LOC .O>>\n\t\t\t       <TELL CD .O \" is \">\n\t\t\t       <COND (.L\n\t\t\t\t      <TELL \"in \" THE .L \".\"CR>)\n\t\t\t\t     (T  <TELL \"nowhere.\" CR>)>)>\n\t\t\t<COND (<G? <SET CNT <+ .CNT 1>> ,CHARACTER-MAX>\n\t\t\t       <RETURN>)>>)>>"
  },
  "V-$TABLE": {
   "name": "V-$TABLE",
   "file": "debug.zil",
   "line": 95,
   "endLine": 123,
   "source": "<ROUTINE V-$TABLE (\"AUX\" CH TAB X)\n\t <COND (<NOT ,DEBUG>\n\t\t<TELL-UNKNOWN \"$ta\">)\n\t       (<AND ,PRSO <SET CH <GETP ,PRSO ,P?CHARACTER>>>\n\t\t<SET TAB <GET ,GOAL-TABLES .CH>>\n\t\t<TELL \"[\">\n\t\t<COND (<SET X <LOC <GET ,CHARACTER-TABLE .CH>>>\n\t\t       <TELL CD ,PRSO \" in \" D .X>\n\t\t       <COND (<SET X <GET .TAB ,GOAL-F>>\n\t\t\t      <COND (<NOT <EQUAL? .X <LOC ,PRSO>>>\n\t\t\t\t     <TELL \" going to \" D .X>)>)\n\t\t\t     (ELSE <TELL \", no goal\">)>\n\t\t       <COND (<AND <GET .TAB ,GOAL-S>\n\t\t\t\t   <NOT <EQUAL? .X <GET .TAB ,GOAL-S>>>>\n\t\t\t      <TELL \", via \" D <GET .TAB ,GOAL-S>>)>\n\t\t       <COND (<AND <SET X <GET .TAB ,GOAL-I>>\n\t\t\t\t   <SET X <GET ,TRANSFER-TABLE <+ .X 1>>>>\n\t\t\t      <TELL \", changing at \" D .X>)>\n\t\t       <COND (<NOT <GET .TAB ,GOAL-ENABLE>>\n\t\t\t      <TELL \", stopped\">)>\n\t\t       <COND (<SET X <GET .TAB ,GOAL-QUEUED>>\n\t\t\t      <TELL \", queued \" D .X>)>\n\t\t       <COND (<NOT <GET .TAB ,GOAL-ENABLE>>\n\t\t\t      <TELL \", attention \">\n\t\t\t      <TELL N <GET .TAB ,ATTENTION-SPAN> \",\"\n\t\t\t\t    N <GET .TAB ,ATTENTION>>)>)\n\t\t      (ELSE <TELL \"Nowhere.\">)>\n\t\t<TELL \"]\" CR>)\n\t (ELSE <TELL \"Not a character?\" CR>)>>"
  },
  "V-$FOLLOW": {
   "name": "V-$FOLLOW",
   "file": "debug.zil",
   "line": 125,
   "endLine": 131,
   "source": "<ROUTINE V-$FOLLOW (\"AUX\" MSG)\n\t <COND (<NOT ,DEBUG>\n\t\t<TELL-UNKNOWN \"$fo\">)\n\t       (T\n\t\t<SETG SHADOW <CHARACTERIZE? ,PRSO>>\n\t\t<COND (,SHADOW <TELL \"[\" CD ,SHADOW \"]\" CR>)\n\t\t      (ELSE <TELL \"[Nobody]\" CR>)>)>>"
  },
  "V-$ESTABLISH": {
   "name": "V-$ESTABLISH",
   "file": "debug.zil",
   "line": 133,
   "endLine": 139,
   "source": "<ROUTINE V-$ESTABLISH (\"AUX\" MSG)\n\t <COND (<NOT ,DEBUG>\n\t\t<TELL-UNKNOWN \"$es\">)\n\t       (ELSE\n\t\t<SETG EDEBUG <CHARACTERIZE? ,PRSO>>\n\t\t<COND (,EDEBUG <TELL \"[\" CD ,EDEBUG \"]\" CR>)\n\t\t      (ELSE <TELL \"[Nobody]\" CR>)>)>>"
  },
  "V-$SCORE": {
   "name": "V-$SCORE",
   "file": "debug.zil",
   "line": 141,
   "endLine": 162,
   "source": "<ROUTINE V-$SCORE ()\n\t <COND (<NOT ,DEBUG>\n\t\t<TELL-UNKNOWN \"$sc\">)\n\t       (T\n\t\t<TELL \"[Missing \">\n\t\t<COND (<NOT ,DETECTIVE-SEEN-CORPSE?> <TELL \"corpse, \">)>\n\t\t<COND (<NOT ,DETECTIVE-SEEN-ROPE?> <TELL \"rope, \">)>\n\t\t<COND (<NOT ,DETECTIVE-SEEN-COAT?> <TELL \"coat, \">)>\n\t\t<COND (<NOT ,DETECTIVE-TOLD-ABOUT-RAIN?> <TELL \"rain, \">)>\n\t\t<COND (<NOT ,DETECTIVE-SEEN-GLASS?> <TELL \"glass, \">)>\n\t\t<COND (<NOT ,DETECTIVE-SEEN-HAIR?> <TELL \"hair, \">)>\n\t\t<COND (<NOT ,DETECTIVE-SEEN-CARD?> <TELL \"card, \">)>\n\t\t<COND (<NOT ,DETECTIVE-SEEN-AGREEMENT?> <TELL \"p&s, \">)>\n\t\t<COND (<NOT ,DETECTIVE-SEEN-TRUST-DOCUMENTS?> <TELL \"trust, \">)>\n\t\t<COND (<NOT ,DETECTIVE-SEEN-LIST?> <TELL \"list, \">)>\n\t\t<COND (<NOT ,GLASS-ANALYZED?> <TELL \"glass(lab), \">)>\n\t\t<COND (<NOT ,GLASS-ANALYZED-FOR-PRINTS?> <TELL \"glass(prints), \">)\n\t\t      (<FSET? ,GLASS ,TOUCHBIT>\n\t\t       <TELL \"touched glass, \">)>\n\t\t<COND (<EQUAL? ,DETECTIVE-SEEN ,DETECTIVE-CONVINCED>\n\t\t       <TELL \"nothing, \">)>\n\t\t<TELL \"means \" N ,DETECTIVE-SEEN \"/\" N ,DETECTIVE-CONVINCED \" gotten.]\" CR>)>>"
  },
  "V-$TOLD": {
   "name": "V-$TOLD",
   "file": "debug.zil",
   "line": 164,
   "endLine": 180,
   "source": "<ROUTINE V-$TOLD (\"AUX\" (CNT 0) O L)\n\t <COND (<NOT ,DEBUG>\n\t\t<TELL-UNKNOWN \"$to\">)\n\t       (,GOSSIP <SETG GOSSIP <>>)\n\t       (T\n\t\t<SETG GOSSIP T>\n\t\t<COND (,MURDER-PUBLIC?\n\t\t       <TELL CD ,MURDER-PUBLIC? \" called police.\" CR>)>\n\t\t<REPEAT ()\n\t\t\t<COND (<SET O <GET ,CHARACTER-TABLE .CNT>>\n\t\t\t       <TELL CD .O>\n\t\t\t       <COND (<FSET? .O ,TOLD>\n\t\t\t\t      <TELL \" knows.\" CR>)\n\t\t\t\t     (T\n\t\t\t\t      <TELL \" doesn't know.\" CR>)>)>\n\t\t\t<COND (<G? <SET CNT <+ .CNT 1>> ,CHARACTER-MAX>\n\t\t\t       <RETURN>)>>)>>"
  },
  "V-$IT": {
   "name": "V-$IT",
   "file": "debug.zil",
   "line": 182,
   "endLine": 188,
   "source": "<ROUTINE V-$IT ()\n\t <COND (<NOT ,DEBUG>\n\t\t<TELL-UNKNOWN \"$it\">\n\t\t<RTRUE>)\n\t       (<SETG IDEBUG <NOT ,IDEBUG>>\n\t\t<TELL \"Showing it.\" CR>)\n\t       (T <TELL \"No more it.\" CR>)>>"
  },
  "INTRO": {
   "name": "INTRO",
   "file": "events.zil",
   "line": 11,
   "endLine": 24,
   "source": "<ROUTINE INTRO ()\n\t <TELL\n\n\"|\nIt's Halloween night. \" 'VERONICA \" Ashcroft and her mania for Halloween parties\nare putting new twists on a 110-year-old tradition. It isn't a very nice\nnight for a party. The rain has\nbeen pelting down since early morning, but the weather hasn't deterred\nmany guests. The ballroom at Ashcroft Farm is filled with oddly costumed\nvisitors. The rather ridiculous \" 'COWBOY-COSTUME \" you are wearing was the\nonly thing you could find at the costumer's on such short notice, but\nit's out of place only for its relative sobriety and taste in this\ncrowd.|\n\" CR>>"
  },
  "QUEUE-MAIN-EVENTS": {
   "name": "QUEUE-MAIN-EVENTS",
   "file": "events.zil",
   "line": 26,
   "endLine": 35,
   "source": "<ROUTINE QUEUE-MAIN-EVENTS ()\n\t <ENABLE <QUEUE I-RAIN-SLOWS <- 550 ,PRESENT-TIME>>>\n\t <ENABLE <QUEUE I-RAIN-POURS <- 570 ,PRESENT-TIME>>>\n\t <ENABLE <QUEUE I-RAIN-STOPS <- 630 ,PRESENT-TIME>>>\n\t <ENABLE <QUEUE I-PARTY-OVER <- 750 ,PRESENT-TIME>>>\n\t <ENABLE <QUEUE I-MUSIC 9>>\n\t <SETG BAND-PLAYING? \"Breathless\">\n\t <ENABLE <QUEUE I-WAVE-2 1>>\n\t <ENABLE <QUEUE I-SPILL 2>>\n\t <ENABLE <QUEUE I-GAME-OVER 720>>>"
  },
  "I-WAVE": {
   "name": "I-WAVE",
   "file": "events.zil",
   "line": 37,
   "endLine": 45,
   "source": "<ROUTINE I-WAVE ()\n\t <CRLF>\n\t <THIS-IS-S-HE ,MICHAEL>\n\t <TELL\n\n\"A sheik, whom you can recognize as \" 'MICHAEL \" Wellman, and a fairy queen,\npresumably \" 'VERONICA \" Ashcroft under her ornate mask, are discussing\nsomething with a small group of guests near the fireplace. The sheik\nnotices you and waves for you to join them.\" CR>>"
  },
  "I-WAVE-2": {
   "name": "I-WAVE-2",
   "file": "events.zil",
   "line": 47,
   "endLine": 53,
   "source": "<ROUTINE I-WAVE-2 ()\n\t <COND (<NOT <EQUAL? ,HERE ,BALLROOM-8>>\n\t\t<THIS-IS-S-HE ,MICHAEL>\n\t\t<CRLF>\n\t\t<TELL\n\"The sheik, seeing your reluctance to join them, shrugs his shoulders and\nrejoins the conversation, a proprietary hand on the fairy's shoulder.\" CR>)>>"
  },
  "I-SPILL": {
   "name": "I-SPILL",
   "file": "events.zil",
   "line": 55,
   "endLine": 82,
   "source": "<ROUTINE I-SPILL ()\n\t <SETG SLAPSTICK? <>>\n\t <ESTABLISH-GOAL ,VERONICA ,OFFICE>\n\t <MOVE ,GLASS ,BALLROOM-8>\n\t <COND (<EQUAL? ,HERE ,BALLROOM-8>\n\t\t<THIS-IS-S-HE ,VERONICA>\n\t\t<CRLF>\n\t\t<TELL\n'VERONICA \" is discussing an upcoming horse show. One of her horses, named\n\\\"Lurking Grue,\\\" will appear, and she describes its attributes in glowing\ndetail, muffled only by the ornate mask covering her face and slurred by the\neffects of whatever liquid it is she has in a large glass. Emphasizing a\npoint, she waves the glass on high, but it's affected her coordination as well\nas her speech. A bright red liquid punctuated with ice cubes pours out\nof the glass and all over her dress. As might be expected, the gown is\nwhite. She utters a word that silver-winged fairies aren't usually expected\nto know, and throws the glass to the floor. \" 'MICHAEL \" reaches under his robes\nand takes out a handkerchief, dabbing futilely at the stain. \" 'VERONICA \" snorts\nin exasperation and pushes him away. \\\"I'm\ngoing to go clean this up. You just stay here.\\\"\" CR>)\n\t       (<IN-BALLROOM? ,PLAYER>\n\t\t<THIS-IS-S-HE ,VERONICA>\n\t\t<CRLF>\n\t\t<TELL\n\"Off near the fireplace, the sheik and the fairy queen are conversing\nwith a small group. The fairy is emphasizing some point when suddenly,\nshe manages to spill her drink on her gown. Her reaction is audible even\nwhere you are standing, and she stalks off.\" CR>)>>"
  },
  "IN-BALLROOM?": {
   "name": "IN-BALLROOM?",
   "file": "events.zil",
   "line": 84,
   "endLine": 88,
   "source": "<ROUTINE IN-BALLROOM? (P)\n\t <COND (<EQUAL? <GETP .P ,P?LINE> ,BALLROOM-LINE-C> <RTRUE>)\n\t       (<AND <LOC .P>\n\t\t     <EQUAL? <GETP <LOC .P> ,P?LINE> ,BALLROOM-LINE-C>>\n\t\t<RTRUE>)>>"
  },
  "TELL-MICHAELS-ALIBI": {
   "name": "TELL-MICHAELS-ALIBI",
   "file": "events.zil",
   "line": 94,
   "endLine": 97,
   "source": "<ROUTINE TELL-MICHAELS-ALIBI ()\n\t <TELL\n\" \" 'MICHAEL \" has a perfect alibi, as he was in the\nBallroom from the time \" 'VERONICA \" left to when the body was discovered.\">>"
  },
  "ARREST": {
   "name": "ARREST",
   "file": "events.zil",
   "line": 99,
   "endLine": 254,
   "source": "<ROUTINE ARREST (PER \"OPTIONAL\" (HELPER <>) \"AUX\" FLG CORRECT?)\n\t <COND (.HELPER\n\t\t<COND (<OR <EQUAL? .PER ,VERONICA ,DETECTIVE ,DUFFY>\n\t\t\t   <EQUAL? .HELPER ,VERONICA ,DETECTIVE ,DUFFY>>\n\t\t       <TELL\n\"\\\"Working on your insanity defense, eh?\\\"\" CR>\n\t\t       <RTRUE>)\n\t\t      (<OR <AND <EQUAL? .HELPER ,ALICIA>\n\t\t\t\t<EQUAL? .PER ,MICHAEL>>\n\t\t\t   <AND <EQUAL? .PER ,ALICIA>\n\t\t\t\t<EQUAL? .HELPER ,MICHAEL>>>\n\t\t       <SET PER ,MICHAEL>\n\t\t       <SET HELPER ,ALICIA>\n\t\t       <COND (<L? ,DETECTIVE-SEEN ,DETECTIVE-CONVINCED>\n\t\t\t      <TELL\n\"\\\"I don't think there's enough evidence to obtain a conviction.\">\n\t\t\t      <COND (<NOT ,DETECTIVE-SEEN-LIST?>\n\t\t\t\t     <TELL \" What's Michael's motive?\">)>\n\t\t\t      <COND (<AND <NOT ,DETECTIVE-SEEN-COAT?>\n\t\t\t\t\t  <NOT ,DETECTIVE-TOLD-ABOUT-RAIN?>>\n\t\t\t\t     <TELL \" She wasn't even here until\nafter the murder.\">)\n\t\t\t\t    (<OR <NOT ,DETECTIVE-SEEN-COAT?>\n\t\t\t\t\t <NOT ,DETECTIVE-TOLD-ABOUT-RAIN?>>\n\t\t\t\t     <TELL\n\" If only the evidence was more conclusive that \" 'ALICIA \" was already here at\nthe time of the murder.\">)>\n\t\t\t      <COND (<NOT ,GLASS-ANALYZED-FOR-PRINTS?>\n\t\t\t\t     <TELL \" What part do you\nthink \" 'ALICIA \" played?\">\n\t\t\t\t     <COND (<AND <NOT ,DETECTIVE-SEEN-HAIR?>\n\t\t\t\t\t\t <NOT ,DETECTIVE-TOLD-ABOUT-RAIN?>\n\t\t\t\t\t\t <NOT ,DETECTIVE-SEEN-COAT?>>\n\t\t\t\t\t    <TELL \" She seems guiltless.\">)>)>\n\t\t\t      <COND (<EQUAL? <+ ,DETECTIVE-SEEN 2>\n\t\t\t\t\t     ,DETECTIVE-CONVINCED>\n\t\t\t\t     <TELL \" But I think we're very close.\">)>\n\t\t\t      <TELL \"\\\"\" CR>)>)\n\t\t      (<AND ,DETECTIVE-SEEN-LIST?\n\t\t\t    <OR <EQUAL? .PER ,MICHAEL>\n\t\t\t\t<EQUAL? .HELPER ,COL-MARSTON>>\n\t\t\t    <OR <EQUAL? .HELPER ,MICHAEL>\n\t\t\t\t<EQUAL? .PER ,COL-MARSTON>>>\n\t\t       <TELL\n\"\\\"That's a plausible idea. Unfortunately, it doesn't tell us how the\nmurder was committed.\">\n\t\t       <COND (<NOT ,GLASS-ANALYZED-FOR-PRINTS?>\n\t\t\t      <TELL-MICHAELS-ALIBI>)>\n\t\t       <TELL \" Motive doesn't equal guilt.\\\"\" CR>\n\t\t       <RTRUE>)\n\t\t      (ELSE\n\t\t       <TELL\nCTHE ,DETECTIVE \" ruminates a moment. \\\"It only casts suspicion back\non you to suggest such a thing.\\\"\" CR>\n\t\t       <RTRUE>)>)>\n\t <COND (.HELPER T)\n\t       (<EQUAL? .PER ,DUFFY ,DETECTIVE>\n\t\t<TELL \"\\\"You think you're some sort of comedian, eh?\\\"\" CR>\n\t\t<RTRUE>)\n\t       (<EQUAL? .PER ,MICHAEL>\n\t\t<COND (<NOT ,GLASS-ANALYZED-FOR-PRINTS?>\n\t\t       <TELL \"\\\"No.\">\n\t\t       <TELL-MICHAELS-ALIBI>\n\t\t       <TELL \"\\\"\" CR>\n\t\t       <RTRUE>)\n\t\t      (,DETECTIVE-SEEN-LIST?\n\t\t       <COND (<L? ,DETECTIVE-SEEN ,DETECTIVE-CONVINCED>\n\t\t\t      <TELL\n\"\\\"You may be right, but while he may have been in with \" 'COL-MARSTON \", that\ndoesn't make him guilty of murder.\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"He couldn't have done it by himself.\\\"\" CR>)>)\n\t\t      (T\n\t\t       <TELL\n\"\\\"You've produced no evidence he did it. Do you merely dislike him?\\\"\" CR>\n\t\t       <RTRUE>)>)\n\t       (<EQUAL? .PER ,ALICIA>\n\t\t<COND (<AND <NOT ,GLASS-ANALYZED-FOR-PRINTS?>\n\t\t\t    <NOT ,DETECTIVE-SEEN-COAT?>\n\t\t\t    <NOT ,DETECTIVE-SEEN-HAIR?>>\n\t\t       <TELL\n\"\\\"She wasn't even in the house when the murder was committed. I don't\nbuy it.\\\"\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"\\\"I agree that she must have been involved, but it seems unlikely she\ndid it by herself. For one thing, what's her motive?\\\"\" CR>)>) \n\t       (<EQUAL? .PER ,SEN-ASHER>\n\t\t<TELL\n\"\\\"He was in the next room, it's true, but what motive did he have?\nHow did he do it?\\\"\" CR>\n\t\t<RTRUE>)\n\t       (<EQUAL? .PER ,COCHRANE>\n\t\t<COND (,DETECTIVE-SEEN-AGREEMENT?\n\t\t       <COND (,DETECTIVE-SEEN-CARD?\n\t\t\t      <TELL\n\"\\\"The combination of the threat in that \" 'CARD \" and his anger\nover the sale of the farm certainly present a strong circumstantial\ncase, at least as far as motive goes, but there is no direct evidence.\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"It's clear he felt aggrieved by her behavior regarding the sale of\nthe farm, but murder? He seems like a mostly harmless drunk to me.\\\"\" CR>)>)\n\t\t      (,DETECTIVE-SEEN-CARD?\n\t\t       <TELL\n\"\\\"That card certainly looks like a veiled threat to me, but what does it\nrefer to?\\\"\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"\\\"Just because he's a boor doesn't make him guilty.\\\"\" CR>\n\t\t       <RTRUE>)>)\n\t       (<EQUAL? .PER ,BUTLER>\n\t\t<TELL\n\"\\\"I suppose you think the butler always does it?\">\n\t\t<COND (,DETECTIVE-SEEN-AGREEMENT?\n\t\t       <TELL\n\" Even if he knew about the sale of the farm, I don't see\nany likelihood he could have done it.\">)>\n\t\t<TELL \"\\\"\" CR>\n\t\t<RTRUE>)\n\t       (<EQUAL? .PER ,RICHARD>\n\t\t<TELL\n\"\\\"If everyone who hated a relative was guilty of murder, we'd have to\nbuild a lot more prisons.\\\"\" CR>\n\t\t<RTRUE>)\n\t       (<EQUAL? .PER ,COL-MARSTON>\n\t\t<COND (<OR ,DETECTIVE-SEEN-TRUST-DOCUMENTS?\n\t\t\t   ,DETECTIVE-SEEN-LIST?>\n\t\t       <TELL\n\"\\\"You've certainly shown a pattern of theft on his part, which may\nwell establish a motive, but what about the method and opportunity?\nTheft for sure, but we're looking at murder here.\\\"\" CR>)\n\t\t      (ELSE\n\t\t       <TELL \"\\\"I don't see it, where's the motive?\\\"\" CR>\n\t\t       <RTRUE>)>)\n\t       (ELSE\n\t\t<TELL\n\"\\\"Aside from motive, method, and opportunity, you seem to have a\nperfect case.\\\"\" CR>\n\t\t<RTRUE>)>\n\t <SET CORRECT?\n\t      <AND <EQUAL? .PER ,MICHAEL>\n\t\t   <EQUAL? .HELPER ,ALICIA>>>\n\t <COND (<AND .CORRECT?\n\t\t     ,FLEEING?\n\t\t     <OUTSIDE? <LOC ,MICHAEL>>\n\t\t     <NOT <EQUAL? ,HERE <LOC ,MICHAEL> <LOC ,ALICIA>>>>\n\t\t<MOVE ,DUFFY ,HERE>\n\t\t<ESTABLISH-GOAL ,DUFFY ,HERE>\n\t\t<TELL\n'DUFFY \" runs up, out of breath. \\\"I can't find them anywhere!\\\"\" CR>)\n\t       (ELSE\n\t\t<DUFFY-PERFORMS-ARREST .PER .HELPER>\n\t\t<CASE-OVER .CORRECT?>)>\n\t <RTRUE>>"
  },
  "TELL-ONE-HERE-ONE-NOT": {
   "name": "TELL-ONE-HERE-ONE-NOT",
   "file": "events.zil",
   "line": 256,
   "endLine": 259,
   "source": "<ROUTINE TELL-ONE-HERE-ONE-NOT (INHERE NOTHERE)\n\t <TELL\n'DUFFY \" appears with \" D .NOTHERE \" in tow.\">\n\t <DUFFY-HANDCUFFS .INHERE>>"
  },
  "TELL-ALL-HERE": {
   "name": "TELL-ALL-HERE",
   "file": "events.zil",
   "line": 261,
   "endLine": 264,
   "source": "<ROUTINE TELL-ALL-HERE (PER \"OPTIONAL\" (HELPER <>))\n\t <TELL\n'DUFFY \" appears with a solemn look.\">\n\t <DUFFY-HANDCUFFS .PER .HELPER>>"
  },
  "TELL-NONE-HERE": {
   "name": "TELL-NONE-HERE",
   "file": "events.zil",
   "line": 266,
   "endLine": 272,
   "source": "<ROUTINE TELL-NONE-HERE (PER \"OPTIONAL\" (HELPER <>))\n\t <TELL\n'DUFFY \" seems to read your thoughts, as he appears with \" D .PER>\n\t <COND (.HELPER\n\t\t<TELL\n\" and \" D .HELPER>)>\n\t <TELL \" in handcuffs.\">>"
  },
  "DUFFY-HANDCUFFS": {
   "name": "DUFFY-HANDCUFFS",
   "file": "events.zil",
   "line": 274,
   "endLine": 281,
   "source": "<ROUTINE DUFFY-HANDCUFFS (PER \"OPTIONAL\" (HELPER <>))\n\t <TELL \" He puts handcuffs on the wrists of \">\n\t <COND (.HELPER <TELL \"both \">)>\n\t <TELL D .PER>\n\t <COND (.HELPER <TELL \" and \" D .HELPER>)>\n\t <TELL \", who stand\">\n\t <COND (<NOT .HELPER> <TELL \"s\">)>\n\t <TELL \" stiff and quiet.\">>"
  },
  "DUFFY-PERFORMS-ARREST": {
   "name": "DUFFY-PERFORMS-ARREST",
   "file": "events.zil",
   "line": 283,
   "endLine": 305,
   "source": "<ROUTINE DUFFY-PERFORMS-ARREST (PER HELPER)\n\t <CRLF>\n\t <COND (,MICHAEL-DEAD?\n\t\t<TELL-ALL-HERE ,ALICIA>\n\t\t<TELL \" \\\"\" ,AMBULANCE-COMING \",\\\" he tells her.\">)\n\t       (.HELPER\n\t\t<COND (<AND <IN? .HELPER ,HERE>\n\t\t\t    <IN? .PER ,HERE>>\n\t\t       <TELL-ALL-HERE .PER .HELPER>)\n\t\t      (<IN? .HELPER ,HERE>\n\t\t       <TELL-ONE-HERE-ONE-NOT .HELPER .PER>)\n\t\t      (<IN? .PER ,HERE>\n\t\t       <TELL-ONE-HERE-ONE-NOT .PER .HELPER>)\n\t\t      (T\n\t\t       <TELL-NONE-HERE .PER .HELPER>)>)\n\t      (<EQUAL? ,HERE <META-LOC .PER>>\n\t       <TELL-ALL-HERE .PER>)\n\t      (T\n\t       <TELL-NONE-HERE .PER>)>\n\t <TELL\n\" \\\"Let's not have any trouble, now,\\\" says \" 'DUFFY \", in his unique way.\nThey head for the driveway, where a police car waits with engine\npurring.\" CR>>"
  },
  "CASE-OVER": {
   "name": "CASE-OVER",
   "file": "events.zil",
   "line": 307,
   "endLine": 350,
   "source": "<ROUTINE CASE-OVER (CORRECT?)\n\t <CRLF>\n\t <COND (<AND .CORRECT? <==? ,DETECTIVE-SEEN ,DETECTIVE-CONVINCED>>\n\t\t<COND (,MICHAEL-DEAD?\n\t\t       <TELL\n\"Well, they got \" 'ALICIA \", but not \" 'MICHAEL \". He's beyond the reach of justice\nnow. Too bad you didn't figure it all out sooner.\">)\n\t\t      (ELSE\n\t\t       <TELL\n\"Congratulations! Your testimony as star witness for the prosecution\nsecures the conviction of \" 'MICHAEL \" for the first degree murder of his wife,\nand of \" 'ALICIA \" as his accomplice. Not only are they sent to prison with the\nproverbial key thrown away, but \" 'COL-MARSTON \" is convicted in a parallel\ncase of embezzlement and grand theft for his role in the\nmilking of the family Trust.|\n|\nBest of all, your syndicated twelve-part story of the tangled plot and\nits aftermath wins the Pulitzer Prize, and the book is number one on the\nbestseller lists for 42 weeks! (Not to mention the movie and book club\nsales.)|\n|\nAs your book explains, the murder was triggered by \" 'VERONICA \"'s desire to\nsell the farm and move to a more rural area. Even with the proceeds of\nthe sale, still more funds from the family Trust would have been required\nto purchase the new property and build on it. \" 'MICHAEL \" and \" 'COL-MARSTON \"\nwere alarmed, as they had been milking the Trust by investing in dummy\ncorporations under their control. After a time, \" 'VERONICA \" grew suspicious\nand had the Trust's dealings investigated. She expected that \" 'COL-MARSTON \"\nwould be implicated, but was surprised to find that \" 'MICHAEL \" was an equal\npartner in the scheme. For \" 'MICHAEL \", time was running out. He wanted out of\nthe marriage, but not the Ashcroft fortune, and enlisted \" 'ALICIA \"'s help in\nthe bizarre scheme. \" 'ALICIA \" would impersonate the murdered \" 'VERONICA \" to\nestablish an alibi. Your appearance on the scene as an old friend suggested\nanother red herring. A few pieces of evidence planted, and you might be\nframed. Fortunately for all but the plotters, the plans were for naught.\">)>)\n\t       (ELSE\n\t\t<TELL\n,TOO-BAD \"your testimony fails to convince the jury, for precisely\nthe reasons outlined by \" THE ,DETECTIVE \" before the arrest. Your editor\ndemotes you to covering flower shows and computer software conventions.\nAs a final blow, when \" THE ,DETECTIVE \" solves the case and makes the\narrest, you realize how simple it all should have been.\">)>\n\t <CRLF>\n\t <FINISH>>"
  },
  "FINISH": {
   "name": "FINISH",
   "file": "events.zil",
   "line": 352,
   "endLine": 362,
   "source": "<ROUTINE FINISH (\"AUX\" Y)\n\t <TELL \"|\nThe story has come to an end.|\n\">\n\t<REPEAT ()\n\t\t<TELL \"|\nWould you like to start over from scratch or restore a saved position?\">\n\t\t<COND (<NOT <SET Y <YES? T>>> <QUIT>)\n\t\t      (<EQUAL? .Y ,M-FATAL>\n\t\t       <V-RESTORE>)\n\t\t      (ELSE <RESTART>)>>>"
  },
  "I-PARTY-OVER": {
   "name": "I-PARTY-OVER",
   "file": "events.zil",
   "line": 364,
   "endLine": 393,
   "source": "<ROUTINE I-PARTY-OVER (\"AUX\" STR)\n\t <SETG OVER-COUNT <+ ,OVER-COUNT 1>>\n\t <COND (<SET STR <GET ,OVER-TABLE ,OVER-COUNT>>\n\t\t<QUEUE I-PARTY-OVER <+ 10 <RANDOM 10>>>)\n\t       (ELSE\n\t\t<SETG OFFICE-EXPEDITION? T>\n\t\t<COND (<NOT ,FLEEING?>\n\t\t       <ESTABLISH-GOAL ,MICHAEL ,BALLROOM-9>\n\t\t       <ESTABLISH-GOAL ,ALICIA ,BALLROOM-9>)>\n\t\t<ESTABLISH-GOAL ,RICHARD ,BALLROOM-9>\n\t\t<ESTABLISH-GOAL ,LINDA ,BALLROOM-9>\n\t\t<ESTABLISH-GOAL ,COL-MARSTON ,BALLROOM-9>\n\t\t<ESTABLISH-GOAL ,SEN-ASHER ,BALLROOM-9>\n\t\t<ESTABLISH-GOAL ,COCHRANE ,BALLROOM-9>\n\t\t<ESTABLISH-GOAL ,OSTMANN ,BALLROOM-9>\n\t\t<ESTABLISH-GOAL ,BUTLER ,BALLROOM-9>\n\t\t<ESTABLISH-GOAL ,DETECTIVE ,BALLROOM-9>\n\t\t<ESTABLISH-GOAL ,DUFFY ,BALLROOM-9>\n\t\t<SETG ON-DANCE-FLOOR? <>>\n\t\t<SETG PARTY-OVER T>)>\n\t <COND (<OR <IN-BALLROOM? ,PLAYER>\n\t\t    <EQUAL? ,HERE ,HALLWAY-12 ,HALLWAY-11 ,HALLWAY-10>\n\t\t    <EQUAL? ,HERE ,HALLWAY-9 ,HALL>>\n\t\t<COND (.STR <TELL .STR CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"The last of the guests has left. No one is left but the suspects\">\n\t\t       <COND (<LOC ,CORPSE>\n\t\t\t      <TELL\" and the victim\">)>\n\t\t       <TELL \".\" CR>)>)>>"
  },
  "DISCOVER-BODY": {
   "name": "DISCOVER-BODY",
   "file": "events.zil",
   "line": 407,
   "endLine": 415,
   "source": "<ROUTINE DISCOVER-BODY (LISTENER \"AUX\" OW (L <LOC .LISTENER>))\n\t <COND (<AND <EQUAL? <META-LOC ,CORPSE> .L>\n\t\t     <OR <IN? ,CORPSE .L>\n\t\t\t <FSET? <LOC ,CORPSE> ,OPENBIT>\n\t\t\t <FSET? <LOC ,CORPSE> ,PERSON>>>\n\t\t<SET OW ,WINNER>\n\t\t<SETG WINNER ,PLAYER>\n\t\t<PERFORM ,V?$DISCOVER ,CORPSE .LISTENER>\n\t\t<SETG WINNER .OW>)>>"
  },
  "MURDER-TELL": {
   "name": "MURDER-TELL",
   "file": "events.zil",
   "line": 417,
   "endLine": 453,
   "source": "<ROUTINE MURDER-TELL (LISTENER TELLER \"AUX\" OW)\n\t <SET OW ,WINNER>\n\t <COND (<EQUAL? ,PLAYER .TELLER>\n\t\t<DISCOVER-BODY .LISTENER>)>\n\t <COND (<EQUAL? ,PLAYER .TELLER>\n\t\t<RFALSE>)\n\t       (<NOT <FSET? .LISTENER ,TOLD>>\n\t\t%<DEBUG-CODE\n\t\t  <COND (,GOSSIP\n\t\t\t <TELL\n\"[\" CD .TELLER \" tells \" D .LISTENER \" in \" D <LOC .TELLER> \".]\" CR>)>>\n\t\t<COND (<EQUAL? .LISTENER ,PLAYER>\n\t\t       <COND (,PLAYER-HIDING <RFALSE>)\n\t\t\t     (<EQUAL? .TELLER ,MICHAEL>\n\t\t\t      <TELL\n'MICHAEL \" notices you. He looks very distraught, almost in shock.\n\\\"\" 'VERONICA \"'s been murdered!\\\" he says. He chokes back a sob as a\ntremor travels through his body.\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\nCD .TELLER \" notices you and approaches. \">\n\t\t\t      <COND (<EQUAL? .TELLER ,DETECTIVE ,DUFFY>\n\t\t\t\t     <TELL\n\"\\\"There has been a murder. \" 'VERONICA \" Ashcroft has been killed. I\nmust warn you that everyone here is a suspect, and you aren't to leave\nthe premises without permission.\\\"\" CR>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL\n\"\\\"Did you hear?\\\" \"\nHE/SHE .TELLER \" says quietly. \\\"Someone has murdered \" 'VERONICA \"!\nThey found the body, she was strangled. The office was ransacked!\nSomeone said it was a prowler, but no one's been caught yet.\\\"\" CR>)>)>)\n\t\t      (ELSE\n\t\t       <SETG WINNER .TELLER>\n\t\t       <PERFORM ,V?$REVEAL ,GLOBAL-MURDER .LISTENER>\n\t\t       <SETG WINNER .OW>)>\n\t\t<FSET .LISTENER ,TOLD>)>>"
  },
  "I-GAME-OVER": {
   "name": "I-GAME-OVER",
   "file": "events.zil",
   "line": 455,
   "endLine": 457,
   "source": "<ROUTINE I-GAME-OVER ()\n\t <TELL \"Sorry, you have missed the morning edition deadline.\" CR>\n\t <FINISH>>"
  },
  "DIR-PRINT": {
   "name": "DIR-PRINT",
   "file": "goal.zil",
   "line": 15,
   "endLine": 23,
   "source": "<ROUTINE DIR-PRINT (DIR \"AUX\" (CNT 0))\n\t #DECL ((DIR CNT) FIX)\n\t <REPEAT ()\n\t\t <COND (<==? <GET ,DIR-STRINGS .CNT> .DIR>\n\t\t\t<COND (<NOT <EQUAL? .DIR ,P?UP ,P?DOWN>>\n\t\t\t       <TELL \"the \">)>\n\t\t\t<PRINT <GET ,DIR-STRINGS <+ .CNT 1>>>\n\t\t\t<RTRUE>)>\n\t\t <SET CNT <+ .CNT 1>>>>"
  },
  "GOALS?": {
   "name": "GOALS?",
   "file": "goal.zil",
   "line": 156,
   "endLine": 157,
   "source": "<ROUTINE GOALS? (PER VAL)\n\t <PUT <GET-GOALS .PER> ,GOAL-ENABLE .VAL>>"
  },
  "FOLLOW-GOAL": {
   "name": "FOLLOW-GOAL",
   "file": "goal.zil",
   "line": 159,
   "endLine": 229,
   "source": "<ROUTINE FOLLOW-GOAL (PER\n\t\t      \"AUX\" (HERE <LOC .PER>) LINE RM GT GOAL FLG TMP\n\t\t      (HERE-FLAG 0) (GOAL-FLAG <>) (IGOAL <>) LOC (CNT 1))\n\t #DECL ((PER HERE LOC RM) OBJECT (LN CNT) FIX\n\t\t(HERE-FLAG GOAL-FLAG) <OR FIX FALSE>)\n\t <SET GT <GET-GOALS .PER>>\n\t <COND (<==? .HERE <GET .GT ,GOAL-F>>\n\t\t<RETURN <GOAL-REACHED .PER T>>)\n\t       (<NOT <GET .GT ,GOAL-ENABLE>> <RFALSE>)>\n\t <COND (<NOT <EQUAL? <SET LOC <GETP .HERE ,P?STATION>>\n\t\t\t     .HERE>>\n\t\t<RETURN <MOVE-PERSON .PER .LOC>>)>\n\t <COND (<==? <SET GOAL\n\t\t\t  <GET ,TRANSFER-TABLE\n\t\t\t       <SET IGOAL <GET .GT ,GOAL-I>>>>\n\t\t     0>\n\t\t<SET IGOAL <>>\n\t\t<SET GOAL <GET .GT ,GOAL-S>>)>\n\t <COND (<NOT .GOAL> <RFALSE>)\n\t       (<==? .HERE .GOAL>\n\t\t<COND (.IGOAL\n\t\t       <SET FLG\n\t\t\t    <MOVE-PERSON .PER\n\t\t\t\t\t <GET ,TRANSFER-TABLE\n\t\t\t\t\t      <+ .IGOAL 1>>>>\n\t\t       <ESTABLISH-GOAL .PER <GET .GT ,GOAL-F>>\n\t\t       <RETURN .FLG>)\n\t\t      (<NOT <==? .HERE <GET .GT ,GOAL-F>>>\n\t\t       ;<PUT .GT ,GOAL-S <>> ;\"before move-person!\"\n\t\t       <SET FLG <MOVE-PERSON .PER <GET .GT ,GOAL-F>>>\n\t\t       <RETURN .FLG>)\n\t\t      (T\n\t\t       <RETURN <GOAL-REACHED .PER>>)>)>\n\t <SET LINE <GET-LINE <GETP .GOAL ,P?LINE>>>\n\t <REPEAT ()\n\t\t <COND (<==? <SET RM <GET .LINE .CNT>> .HERE>\n\t\t        <RETURN>)\n\t\t       (<==? .RM .GOAL>\n\t\t\t<SET GOAL-FLAG .CNT>)\n\t\t       (<==? <GET .LINE <+ .CNT 1>> 0>\n\t\t\t%<DEBUG-CODE\n\t\t\t  <TELL\n\"*** \" CD .PER \" lost between \" D .HERE \" and \" D .GOAL \" on line \" N <GETP .GOAL ,P?LINE> \" ***\">>\n\t\t\t<CRLF>\n\t\t\t<QUIT>)>\n\t\t <SET CNT <+ .CNT 3>>>\n\t <SET HERE-FLAG .CNT>\n\t <COND (<G? <GET .LINE 0> 0>\n\t\t<COND (<NOT .GOAL-FLAG>\n\t\t       <REPEAT ()\n\t\t\t       <SET RM <GET .LINE .CNT>>\n\t\t\t       <COND (<==? .RM .GOAL>\n\t\t\t\t      <SET GOAL-FLAG .CNT>\n\t\t\t\t      <RETURN>)>\n\t\t\t       <SET CNT <+ .CNT 3>>>)>\n\t\t<SET GOAL-FLAG <- .GOAL-FLAG .HERE-FLAG>>\n\t\t<SET TMP <- <GET .LINE 0> <ABS .GOAL-FLAG>>>\n\t\t<COND (<G? <ABS .GOAL-FLAG> .TMP>\n\t\t       <COND (<L? .GOAL-FLAG 0>\n\t\t\t      <SET GOAL-FLAG <>>)\n\t\t\t     (ELSE\n\t\t\t      <SET GOAL-FLAG 1>)>)\n\t\t      (<G? .GOAL-FLAG 0>\n\t\t       <SET GOAL-FLAG <>>)>)>\n\t <COND (<AND .GOAL-FLAG <EQUAL? .HERE-FLAG 1>>\n\t\t<SET HERE-FLAG <+ <GET .LINE 0> 1>>)>\n\t <SET LOC\n\t      <GET .LINE\n\t\t   <COND (.GOAL-FLAG <- .HERE-FLAG 3>)\n\t\t\t (T <+ .HERE-FLAG 3>)>>>\n\t <MOVE-PERSON .PER .LOC>>"
  },
  "COR-DIR": {
   "name": "COR-DIR",
   "file": "goal.zil",
   "line": 231,
   "endLine": 241,
   "source": "<ROUTINE COR-DIR (HERE THERE \"AUX\" COR RM (PAST 0) (CNT 2))\n\t <SET COR <GET-COR <BAND <GETP .THERE ,P?CORRIDOR>\n\t\t\t\t <GETP .HERE ,P?CORRIDOR>>>>\n\t <REPEAT ()\n\t\t <COND (<==? <SET RM <GET .COR .CNT>> .HERE>\n\t\t\t<SET PAST 1>\n\t\t\t<RETURN>)\n\t\t       (<==? .RM .THERE>\n\t\t\t<RETURN>)>\n\t\t <SET CNT <+ .CNT 1>>>\n\t <GET .COR .PAST>>"
  },
  "GET-LINE": {
   "name": "GET-LINE",
   "file": "goal.zil",
   "line": 243,
   "endLine": 249,
   "source": "<ROUTINE GET-LINE (LN)\n\t <COND (<==? .LN 0> ,HALL-LINE)\n\t       (<==? .LN 1> ,BALLROOM-LINE)\n\t       (<==? .LN 2> ,EAST-HALL-LINE)\n\t       (<==? .LN 3> ,GARAGE-LINE)\n\t       (<==? .LN 4> ,OUTSIDE-LINE)\n\t       (ELSE <TELL \"**UNDEFINED LINE**\">)>>"
  },
  "GET-COR": {
   "name": "GET-COR",
   "file": "goal.zil",
   "line": 251,
   "endLine": 261,
   "source": "<ROUTINE GET-COR (NUM)\n\t #DECL ((NUM) FIX)\n\t <COND (<==? .NUM 1> ,COR-1)\n\t       (<==? .NUM 2> ,COR-2)\n\t       (<==? .NUM 4> ,COR-4)\n\t       (<==? .NUM 8> ,COR-8)\n\t       (<==? .NUM 16> ,COR-16)\n\t       (<==? .NUM 32> ,COR-32)\n\t       (<==? .NUM 64> ,COR-64)\n\t       (<==? .NUM 128> ,COR-128)\n\t       (T ,COR-256)>>"
  },
  "INHABITED?": {
   "name": "INHABITED?",
   "file": "goal.zil",
   "line": 283,
   "endLine": 288,
   "source": "<ROUTINE INHABITED? (RM)\n\t <OR <IN? ,MICHAEL .RM> <IN? ,VERONICA .RM> <IN? ,ALICIA .RM>\n\t     <IN? ,RICHARD .RM> <IN? ,COL-MARSTON .RM> <IN? ,LINDA .RM>\n\t     <IN? ,SEN-ASHER .RM> <IN? ,COCHRANE .RM> <IN? ,OSTMANN .RM>\n\t     <IN? ,BUTLER .RM> <IN? ,BARTENDER .RM> <IN? ,DETECTIVE .RM>\n\t     <IN? ,DUFFY .RM>>>"
  },
  "CORRIDOR-LOOK": {
   "name": "CORRIDOR-LOOK",
   "file": "goal.zil",
   "line": 333,
   "endLine": 359,
   "source": "<ROUTINE CORRIDOR-LOOK (\"OPTIONAL\" (ITM <>)\n\t\t\t\"AUX\" C Z COR VAL (FOUND <>))\n\t <COND (<SET C <GETP ,HERE ,P?CORRIDOR>>\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT <L? <SET Z <- .C 256>> 0>>\n\t\t\t       <SET COR ,COR-256>)\n\t\t\t      (<NOT <L? <SET Z <- .C 128>> 0>>\n\t\t\t       <SET COR ,COR-128>)\n\t\t\t      (<NOT <L? <SET Z <- .C 64>> 0>>\n\t\t\t       <SET COR ,COR-64>)\n\t\t\t      (<NOT <L? <SET Z <- .C 32>> 0>>\n\t\t\t       <SET COR ,COR-32>)\n\t\t\t      (<NOT <L? <SET Z <- .C 16>> 0>>\n\t\t\t       <SET COR ,COR-16>)\n\t\t\t      (<NOT <L? <SET Z <- .C 8>> 0>>\n\t\t\t       <SET COR ,COR-8>)\n\t\t\t      (<NOT <L? <SET Z <- .C 4>> 0>>\n\t\t\t       <SET COR ,COR-4>)\n\t\t\t      (<NOT <L? <SET Z <- .C 2>> 0>>\n\t\t\t       <SET COR ,COR-2>)\n\t\t\t      (<NOT <L? <SET Z <- .C 1>> 0>>\n\t\t\t       <SET COR ,COR-1>)\n\t\t\t      (T <RETURN>)>\n\t\t\t<SET VAL <CORRIDOR-CHECK .COR .ITM>>\n\t\t\t<COND (<NOT .FOUND> <SET FOUND .VAL>)>\n\t\t\t<SET C .Z>>\n\t\t.FOUND)>>"
  },
  "CORRIDOR-CHECK": {
   "name": "CORRIDOR-CHECK",
   "file": "goal.zil",
   "line": 361,
   "endLine": 381,
   "source": "<ROUTINE CORRIDOR-CHECK (COR ITM \"AUX\" (CNT 2) (PAST 0) (FOUND <>) RM OBJ)\n\t <REPEAT ()\n\t\t <COND (<==? <SET RM <GET .COR .CNT>> 0>\n\t\t\t<RFALSE>)\n\t\t       (<==? .RM ,HERE> <SET PAST 1>)\n\t\t       (<SET OBJ <FIRST? .RM>>\n\t\t\t<REPEAT ()\n\t\t\t\t<COND (.ITM\n\t\t\t\t       <COND (<==? .OBJ .ITM>\n\t\t\t\t\t      <SET FOUND <GET .COR .PAST>>\n\t\t\t\t\t      <RETURN>)>)\n\t\t\t\t      (<AND <GETP .OBJ ,P?CHARACTER>\n\t\t\t\t\t    <NOT <IN-MOTION? .OBJ>>>\n\t\t\t\t       <TELL CTHE .OBJ \" is off to \">\n\t\t\t\t       <DIR-PRINT <GET .COR .PAST>>\n\t\t\t\t       <TELL \".\">\n\t\t\t\t       <CRLF>)>\n\t\t\t\t<SET OBJ <NEXT? .OBJ>>\n\t\t\t\t<COND (<NOT .OBJ> <RETURN>)>>\n\t\t\t<COND (.FOUND <RETURN .FOUND>)>)>\n\t\t <SET CNT <+ .CNT 1>>>>"
  },
  "IN-MOTION?": {
   "name": "IN-MOTION?",
   "file": "goal.zil",
   "line": 508,
   "endLine": 514,
   "source": "<ROUTINE IN-MOTION? (PER \"AUX\" GT)\n\t <COND (<SET GT <GET-GOALS .PER>>\n\t\t<COND (<AND <GET .GT ,GOAL-ENABLE>\n\t\t\t    <GET .GT ,GOAL-S>\n\t\t\t    <NOT <==? <LOC .PER> <GET .GT ,GOAL-F>>>>\n\t\t       <RTRUE>)\n\t\t      (T <RFALSE>)>)>>"
  },
  "START-MOVEMENT": {
   "name": "START-MOVEMENT",
   "file": "goal.zil",
   "line": 516,
   "endLine": 527,
   "source": "<ROUTINE START-MOVEMENT ()\n\t <ENABLE <QUEUE G-MICHAEL 1>>\n\t <ENABLE <QUEUE G-ALICIA 1>>\n\t <ENABLE <QUEUE G-RICHARD 1>>\n\t <ENABLE <QUEUE G-COL-MARSTON 1>>\n\t <ENABLE <QUEUE G-LINDA 1>>\n\t <ENABLE <QUEUE G-SEN-ASHER 1>>\n\t <NEW-SCRIPT ,COCHRANE ,COCHRANE-LOOP>\n\t <NEW-SCRIPT ,OSTMANN ,OSTMANN-LOOP>\n\t <NEW-SCRIPT ,BUTLER ,BUTLER-LOOP>\n\t <ENABLE <QUEUE I-FOLLOW -1>>\n\t <ENABLE <QUEUE I-ATTENTION -1>>>"
  },
  "GET-GOALS": {
   "name": "GET-GOALS",
   "file": "goal.zil",
   "line": 538,
   "endLine": 540,
   "source": "<ROUTINE GET-GOALS (PER)\n\t <SET PER <GETP .PER ,P?CHARACTER>>\n\t <GET ,GOAL-TABLES .PER>>"
  },
  "NEW-SCRIPT": {
   "name": "NEW-SCRIPT",
   "file": "goal.zil",
   "line": 542,
   "endLine": 551,
   "source": "<ROUTINE NEW-SCRIPT (PER SCRIPT \"AUX\" CH GT)\n\t <SET CH <GETP .PER ,P?CHARACTER>>\n\t <PUT ,MOVEMENT-GOALS .CH .SCRIPT>\n\t <SET GT <GET ,GOAL-TABLES .CH>>\n\t <PUT .GT ,GOAL-QUEUED <>>\n\t <IMOVEMENT .PER\n\t\t    %<COND (<GASSIGNED? PREDGEN>\n\t\t\t    '<GET .GT ,GOAL-FUNCTION>)\n\t\t\t   (ELSE '<NTH!- .GT <+ 1 <* ,GOAL-FUNCTION 2>>>)>>\n\t <RFALSE>>"
  },
  "IMOVEMENT": {
   "name": "IMOVEMENT",
   "file": "goal.zil",
   "line": 553,
   "endLine": 577,
   "source": "<ROUTINE IMOVEMENT (PER INT \"AUX\" TB VAR DIS TIM ID RM GT (FLAG <>))\n\t #DECL ((PER) OBJECT (TB) <PRIMTYPE VECTOR> (ID VAR DIS TIM) FIX)\n\t <SET ID <GETP .PER ,P?CHARACTER>>\n\t <SET TB <GET ,MOVEMENT-GOALS .ID>>\n\t <SET GT <GET ,GOAL-TABLES .ID>>\n\t <COND (<NOT <==? 0 <SET RM <GET .TB ,MG-ROOM>>>>\n\t\t<COND (<GET .GT ,GOAL-QUEUED>\n\t\t       <PUT .GT ,GOAL-QUEUED .RM>)\n\t\t      (T\n\t\t       <ESTABLISH-GOAL .PER .RM>)>)>\n\t <COND (<NOT <==? 0 <SET TIM <GET .TB ,MG-TIME>>>>\n\t\t<COND (<L? <SET VAR <GET .TB ,MG-VARIATION>> 0>\n\t\t       <SET VAR <- .VAR>>\n\t\t       <SET FLAG T>)>\n\t\t<SET DIS <COND (<AND <G? .VAR 0>\n\t\t\t\t     <G? ,PRESENT-TIME 540>>\n\t\t\t\t<RANDOM <* .VAR 2>>)\n\t\t\t       (ELSE 0)>>\n\t        <ENABLE <QUEUE .INT <+ .TIM <- .DIS .VAR>>>>\n\t\t<PUT ,MOVEMENT-GOALS .ID <REST .TB ,MG-LENGTH>>\n\t\t<COND (<AND <NOT .FLAG> <NOT <==? 0 <GET .TB ,MG-NEXT>>>>\n\t\t       <PUT .TB\n\t\t\t    ,MG-NEXT\n\t\t\t    <+ <GET .TB ,MG-NEXT> <- .VAR .DIS>>>)>)>\n\t <RFALSE>>"
  },
  "I-FOLLOW": {
   "name": "I-FOLLOW",
   "file": "goal.zil",
   "line": 579,
   "endLine": 589,
   "source": "<ROUTINE I-FOLLOW (\"AUX\" (FLG <>) (CNT 0) GT VAL)\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> ,CHARACTER-MAX>\n\t\t\t<RETURN>)\n\t\t       (<AND <GET <SET GT <GET ,GOAL-TABLES .CNT>> ,GOAL-S>\n\t\t\t     <GET .GT ,GOAL-ENABLE>>\n\t\t\t<COND (<SET VAL\n\t\t\t\t    <FOLLOW-GOAL <GET ,CHARACTER-TABLE .CNT>>>\n\t\t\t       <COND (<NOT <==? .FLG ,M-FATAL>>\n\t\t\t\t      <SET FLG .VAL>)>)>)>>\n\t .FLG>"
  },
  "I-ATTENTION": {
   "name": "I-ATTENTION",
   "file": "goal.zil",
   "line": 591,
   "endLine": 609,
   "source": "<ROUTINE I-ATTENTION (\"AUX\" (FLG <>) (CNT 0) ATT GT)\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> ,CHARACTER-MAX> <RETURN>)>\n\t\t <SET GT <GET ,GOAL-TABLES .CNT>>\n\t\t <SET ATT <GET .GT ,ATTENTION>>\n\t\t <COND (<G? .ATT 0>\n\t\t\t<SET ATT <- .ATT 1>>\n\t\t\t<COND (<==? .ATT 0> <PUT .GT ,GOAL-ENABLE T>)\n\t\t\t      (<AND <==? .ATT 1>\n\t\t\t\t    <IN? <GET ,CHARACTER-TABLE .CNT> ,HERE>\n\t\t\t\t    %<DEBUG-CODE\n\t\t\t\t      <D-APPLY \"Impatient\"\n\t\t\t\t\t       <GET .GT ,GOAL-FUNCTION>\n\t\t\t\t\t       ,G-IMPATIENT>\n\t\t\t\t      <APPLY <GET .GT ,GOAL-FUNCTION>\n\t\t\t\t\t     ,G-IMPATIENT>>>\n\t\t\t       <SET FLG T>)>\n\t\t\t<PUT .GT ,ATTENTION .ATT>)>>\n\t .FLG>"
  },
  "GRAB-ATTENTION": {
   "name": "GRAB-ATTENTION",
   "file": "goal.zil",
   "line": 611,
   "endLine": 625,
   "source": "<ROUTINE GRAB-ATTENTION (PER \"OPTIONAL\" (LEN <>) \"AUX\" GT ATT)\n\t #DECL ((PER) OBJECT (ATT) FIX)\n\t <SET GT <GET-GOALS .PER>>\n\t <COND (<GET .GT ,GOAL-S>\n\t\t<COND (.LEN <SET ATT .LEN>)\n\t\t      (ELSE <SET ATT <GET .GT ,ATTENTION-SPAN>>)>\n\t\t<PUT .GT ,ATTENTION .ATT>\n\t\t<COND (<==? .ATT 0>\n\t\t       <PUT .GT ,GOAL-ENABLE T>\n\t\t       <RFALSE>)\n\t\t      (<GET .GT ,GOAL-ENABLE>\n\t\t       <PUT .GT ,GOAL-ENABLE <>>)>)>\n\t <SETG QCONTEXT .PER>\n\t <SETG QCONTEXT-ROOM ,HERE>\n\t <RTRUE>>"
  },
  "UNPRIORITIZE": {
   "name": "UNPRIORITIZE",
   "file": "goal.zil",
   "line": 629,
   "endLine": 634,
   "source": "<ROUTINE UNPRIORITIZE (PER \"AUX\" GT)\n\t <SET GT <GET-GOALS .PER>>\n\t <PUT .GT ,GOAL-ENABLE T>\n\t <COND (<GET .GT ,GOAL-QUEUED>\n\t\t<ESTABLISH-GOAL .PER <GET .GT ,GOAL-QUEUED>>\n\t\t<PUT .GT ,GOAL-QUEUED <>>)>>"
  },
  "ESTABLISH-GOAL": {
   "name": "ESTABLISH-GOAL",
   "file": "goal.zil",
   "line": 636,
   "endLine": 676,
   "source": "<ROUTINE ESTABLISH-GOAL (PER GOAL \"OPTIONAL\" (PRIORITY <>)\n\t\t\t \"AUX\" H HL GL GT)\n\t #DECL ((PER GOAL H) OBJECT (HL GL) FIX)\n\t <SET H\n\t      <COND (<EQUAL? .PER ,PLAYER> ,HERE)\n\t\t    (ELSE <LOC .PER>)>>\n\t %<DEBUG-CODE\n\t   <COND (<NOT <IN? .GOAL ,ROOMS>>\n\t\t  <TELL\n\"***Establish goal for \" D .PER \" to \" D .GOAL \"***\" CR>\n\t\t  <RFALSE>)\n\t\t (<EQUAL? ,EDEBUG .PER>\n\t\t  <TELL\n\"[\" CD .PER \" establishes \">\n\t\t  <COND (.PRIORITY\n\t\t\t <TELL \"priority \">)>\n\t\t  <TELL \"goal of \" D .GOAL \"]\" CR>)>>\n\t <SET GT <GET-GOALS .PER>>\n\t <COND (.PRIORITY\n\t\t<PUT .GT ,ATTENTION 0>\n\t\t<PUT .GT ,GOAL-ENABLE T>\n\t\t<COND (<NOT <EQUAL? .GOAL <GET .GT ,GOAL-F>>>\n\t\t       %<DEBUG-CODE \n\t\t\t <COND (<AND ,DEBUG <GET .GT ,GOAL-QUEUED>>\n\t\t\t\t<TELL\n\"[\" CD .PER \": queued=\" D <GET .GT ,GOAL-QUEUED>\n\", new=\" D .GOAL\n\", here=\" D .H \"!]\" CR>)>>\n\t\t       <PUT .GT ,GOAL-QUEUED .H>)>)>\n\t <PUT .GT\n\t      ,GOAL-I\n\t      <* 2\n\t\t <+ <* %<COND (<GASSIGNED? PREDGEN>\n\t\t\t       '<GETP .H ,P?LINE>)\n\t\t\t      (ELSE\n\t\t\t       '<OR <GETP .H P?LINE> <ERROR .H LINE>>)>\n\t\t       ,LINES>\n\t\t    <GETP .GOAL ,P?LINE>>>>\n\t <PUT .GT ,GOAL-S <GETP .GOAL ,P?STATION>>\n\t <PUT .GT ,GOAL-F .GOAL>\n\t <LOC .PER>>"
  },
  "GOAL-REACHED": {
   "name": "GOAL-REACHED",
   "file": "goal.zil",
   "line": 678,
   "endLine": 690,
   "source": "<ROUTINE GOAL-REACHED (PER \"OPTIONAL\" (THERE? <>) \"AUX\" GT)\n\t #DECL ((PER) OBJECT)\n\t <SET GT <GET-GOALS .PER>>\n\t <COND (<GET .GT ,GOAL-S>\n\t\t<PUT .GT ,GOAL-S <>>\n\t\t%<DEBUG-CODE\n\t\t  <COND (,HDEBUG <TELL \"[\" D .PER \"=]\">)>>\n\t\t%<DEBUG-CODE\n\t\t  <D-APPLY <COND (.THERE? \"Already\") (T \"Reached\")>\n\t\t\t   <GET .GT ,GOAL-FUNCTION>\n\t\t\t   <COND (.THERE? ,G-ALREADY) (T ,G-REACHED)>>\n\t\t  <APPLY <GET .GT ,GOAL-FUNCTION>\n\t\t\t <COND (.THERE? ,G-ALREADY) (T ,G-REACHED)>>>)>>"
  },
  "MOVE-PERSON": {
   "name": "MOVE-PERSON",
   "file": "goal.zil",
   "line": 692,
   "endLine": 838,
   "source": "<ROUTINE MOVE-PERSON (PER WHERE \"AUX\" DIR GT OL COR PCOR CD DF\n\t\t      \t\t\t (FLG <>) DR (VAL <>) PB?)\n\t #DECL ((PER WHERE) OBJECT)\n\t <SET GT <GET-GOALS .PER>>\n\t <SET OL <LOC .PER>>\n\t <SET DIR <DIR-FROM .OL .WHERE>>\n\t %<DEBUG-CODE <COND (<NOT .DIR>\n\t\t\t     <TELL\n\"[Goal bug: \" D .PER \" from \" D .OL \" to \" D .WHERE \"]\" CR>)>>\n\t <COND (<==? <PTSIZE <SET DR <GETPT .OL .DIR>>> ,DEXIT>\n\t\t<SET DR <GETB .DR ,DEXITOBJ>>\n\t\t<COND (<NOT <FSET? .DR ,OPENBIT>>\n\t\t       <COND (<AND <EQUAL? .PER ,PLAYER>\n\t\t\t\t   <FSET? .DR ,LOCKED>>\n\t\t\t      T)\n\t\t\t     (T\n\t\t\t      <FCLEAR .DR ,LOCKED>\n\t\t\t      <FSET .DR ,OPENBIT>)>)\n\t\t      (T <SET DR <>>)>)\n\t       (T <SET DR <>>)>\n\t <SET PB? <IN-BALLROOM? ,PLAYER>>\n\t <COND (<FSET? .PER ,INVISIBLE> T)\n\t       (<AND .PB?\n\t\t     <OR <IN-BALLROOM? .PER>\n\t\t\t <IN-BALLROOM? .WHERE>>>\n\t        <COND (<NOT <EQUAL? ,HERE <GET .GT ,GOAL-F>>>\n\t\t       <SET FLG T>\n\t\t       <TELL CTHE .PER>\n\t\t       <COND (<NOT <IN-BALLROOM? .WHERE>>\n\t\t\t      <TELL \" leaves the ballroom.\" CR>)\n\t\t\t     (T\n\t\t\t      <COND (<EQUAL? .OL ,HERE>\n\t\t\t\t     <TELL \" leaves you, and\">)>\n\t\t\t      <TELL \" is now \">\n\t\t\t      <COND (<EQUAL? .WHERE ,HERE>\n\t\t\t\t     <TELL \"with you \">)>\n\t\t\t      <TELL <GETP .WHERE ,P?FDESC>>\n\t\t\t      <TELL \".\" CR>)>)>)\n\t       (<==? .OL ,HERE>\n\t\t<SET FLG T>\n\t\t<TELL CTHE .PER>\n\t\t<COND (<==? .DIR ,P?OUT>\n\t\t       <TELL \" leaves the room.\" CR>)\n\t\t      (<==? .DIR ,P?IN>\n\t\t       <COND (.DR\n\t\t\t      <TELL \" opens \" THE .DR \" and\">)>\n\t\t       <TELL \" goes into another room.\" CR>)\n\t\t      (T\n\t\t       <COND (.DR\n\t\t\t      <TELL \" opens \" THE .DR \" and\">)>\n\t\t       <TELL \" heads off to \">\n\t\t       <DIR-PRINT .DIR>\n\t\t       <TELL \".\" CR>)>)\n\t       (<==? .WHERE ,HERE>\n\t\t<COND (<NOT <==? ,HERE <GET .GT ,GOAL-F>>>\n\t\t       <SET FLG T>\n\t\t       <TELL CTHE .PER>\n\t\t       <COND (.DR\n\t\t\t      <TELL \" opens \" THE .DR \" and\">)>\n\t\t       <COND (<AND <VERB? WALK>\n\t\t\t\t   <==? .DIR ,P-WALK-DIR>\n\t\t\t\t   <NOT <==? <LOC ,PLAYER> ,LAST-PLAYER-LOC>>>\n\t\t\t      <TELL \" walks along with\">)\n\t\t\t     (T <TELL \" approaches\">)>\n\t\t       <TELL \" you.\" CR>)>)\n\t       (<SET COR <GETP ,HERE ,P?CORRIDOR>>\n\t\t<COND (<AND <SET PCOR <GETP .OL ,P?CORRIDOR>>\n\t\t\t    <NOT <==? <BAND .COR .PCOR> 0>>>\n\t\t       <SET FLG T>\n\t\t       <COND (<NOT <GETP .WHERE ,P?CORRIDOR>>\n\t\t\t      <TELL CTHE .PER \", off to \">\n\t\t\t      <DIR-PRINT <COR-DIR ,HERE .OL>>\n\t\t\t      <TELL \",\">\n\t\t\t      <COND (.DR\n\t\t\t\t     <TELL \" opens a door and\">)>\n\t\t\t      <TELL \" leaves your view to \">\n\t\t\t      <DIR-PRINT <DIR-FROM .OL .WHERE>>\n\t\t\t      <TELL \".\" CR>)\n\t\t\t     (<0? <BAND .COR <GETP .WHERE ,P?CORRIDOR>>>\n\t\t\t      <TELL CTHE .PER \", off to \">\n\t\t\t      <DIR-PRINT <COR-DIR ,HERE .OL>>\n\t\t\t      <TELL \", disappears from sight to \">\n\t\t\t      <DIR-PRINT <SET PCOR <DIR-FROM .OL .WHERE>>>\n\t\t\t      <TELL \".\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL CTHE .PER \" is to \">\n\t\t\t      <DIR-PRINT <SET CD <COR-DIR ,HERE .WHERE>>>\n\t\t\t      <TELL \", heading \">\n\t\t\t      <COND (<==? .CD <SET DF <DIR-FROM .OL .WHERE>>>\n\t\t\t\t     <TELL \"away from you\">)\n\t\t\t\t    (ELSE\n\t\t\t\t     <TELL \"toward \">\n\t\t\t\t     <DIR-PRINT .DF>)>\n\t\t\t      <TELL \".\" CR>)>)\n\t\t      (<AND <SET PCOR <GETP .WHERE ,P?CORRIDOR>>\n\t\t\t    <NOT <==? <BAND .COR .PCOR> 0>>>\n\t\t       <SET FLG T>\n\t\t       <TELL \"To \">\n\t\t       <DIR-PRINT <SET CD <COR-DIR ,HERE .WHERE>>>\n\t\t       <TELL \" \" THE .PER>\n\t\t       <TELL \" comes into view\">\n\t\t       <COND (<==? .CD <DIR-FROM .OL .WHERE>>\n\t\t\t      <TELL \" heading toward you\">)\n\t\t\t     (ELSE\n\t\t\t      <TELL \" from \">\n\t\t\t      <DIR-PRINT <DIR-FROM .WHERE .OL>>)>\n\t\t       <TELL \".\" CR>)>)>\n\t <MOVE .PER .WHERE>\n\t <COND (<EQUAL? .PER ,PLAYER>\n\t\t<SETG HERE .WHERE>\n\t\t<RFALSE>)>\n\t %<DEBUG-CODE <COND (,HDEBUG <TELL \"[\" D .PER \"=]\">)>>\n\t <COND (<==? <GET .GT ,GOAL-F> .WHERE>\n\t\t<COND (<AND <NOT <SET VAL <GOAL-REACHED .PER>>>\n\t\t\t    <NOT <FSET? .PER ,INVISIBLE>>>\n\t\t       <COND (.FLG T)\n\t\t\t     (<OR <==? ,HERE .WHERE>\n\t\t\t\t  <AND .PB? <IN-BALLROOM? .WHERE>>\n\t\t\t\t  <CORRIDOR-LOOK .PER>>\n\t\t\t      <SET FLG T>\n\t\t\t      <TELL CTHE .PER>\n\t\t\t      <COND (.DR\n\t\t\t\t     <TELL \" opens \" THE .DR \", enters and\">)>\n\t\t\t      <TELL \" stops\">\n\t\t\t      <COND (<==? ,HERE .WHERE>\n\t\t\t\t     <TELL \" here\">)\n\t\t\t\t    (.PB?\n\t\t\t\t     <TELL \" \" <GETP .WHERE ,P?FDESC>>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL \", to \">\n\t\t\t\t     <DIR-PRINT <COR-DIR ,HERE .WHERE>>)>\n\t\t\t      <TELL \".\" CR>)>)>)\n\t       (T\n\t\t<COND (%<DEBUG-CODE\n\t\t\t <D-APPLY \"Enroute\"\n\t\t\t\t  <GET .GT ,GOAL-FUNCTION>\n\t\t\t\t  ,G-ENROUTE>\n\t\t\t <APPLY <GET .GT ,GOAL-FUNCTION>\n\t\t\t\t,G-ENROUTE>>\n\t\t       <SET FLG T>)>)>\n\t <WHERE-UPDATE .PER .FLG>\n\t %<DEBUG-CODE\n\t   <COND (,GDEBUG\n\t\t  <TELL\n\"[\" CTHE .PER \" just went into \" THE .WHERE \".]\" CR>)>>\n\t <COND (<NOT .VAL> .FLG)\n\t       (T .VAL)>>"
  },
  "DIR-FROM": {
   "name": "DIR-FROM",
   "file": "goal.zil",
   "line": 840,
   "endLine": 851,
   "source": "<ROUTINE DIR-FROM (HERE THERE \"AUX\" (P 0) L T O)\n\t #DECL ((HERE THERE O) OBJECT (P L) FIX)\n <REPEAT ()\n\t <COND (<0? <SET P <NEXTP .HERE .P>>>\n\t\t<RFALSE>)\n\t       (<EQUAL? .P ,P?IN ,P?OUT> T)\n\t       (<NOT <L? .P ,LOW-DIRECTION>>\n\t\t<SET T <GETPT .HERE .P>>\n\t\t<SET L <PTSIZE .T>>\n\t\t<COND (<AND <EQUAL? .L ,DEXIT ,UEXIT ,CEXIT>\n\t\t\t    <==? <GETB .T ,REXIT> .THERE>>\n\t\t       <RETURN .P>)>)>>>"
  },
  "LISTENING?": {
   "name": "LISTENING?",
   "file": "goal.zil",
   "line": 853,
   "endLine": 855,
   "source": "<ROUTINE LISTENING? (PER)\n\t <COND (<SET PER <GET-GOALS .PER>>\n\t\t<G? <GET .PER ,ATTENTION> 0>)>>"
  },
  "WHERE-UPDATE": {
   "name": "WHERE-UPDATE",
   "file": "goal.zil",
   "line": 857,
   "endLine": 888,
   "source": "<ROUTINE WHERE-UPDATE (PER \"OPTIONAL\" (FLG <>)\n\t\t       \"AUX\" OW WT NC (CNT 0) CHR L (PER? <>))\n\t <COND (<NOT <SET L <LOC .PER>>> <RFALSE>)>\n\t <SET NC <GETP .PER ,P?CHARACTER>>\n\t <SET WT <GET ,WHERE-TABLES .NC>>\n\t <COND (<AND <NOT <EQUAL? .PER ,PLAYER>>\n\t\t     <HELD? ,CORPSE>>\n\t\t<SET PER? <DISCOVER-BODY .PER>>)>\n\t <REPEAT ()\n\t\t <COND (<G? .CNT ,CHARACTER-MAX> <RETURN>)\n\t\t       (<==? .CNT .NC>)\n\t\t       (<OR <IN? <SET CHR <GET ,CHARACTER-TABLE .CNT>>\n\t\t\t\t .L>\n\t\t\t    <AND <0? .CNT> .FLG>>\n\t\t\t<COND (<IN? .CHR .L>\n\t\t\t       <COND (<AND <NOT <EQUAL? .PER ,PLAYER>>\n\t\t\t\t\t   <FSET? .PER ,TOLD>\n\t\t\t\t\t   <NOT <FSET? .CHR ,TOLD>>>\n\t\t\t\t      <MURDER-TELL .CHR .PER>)\n\t\t\t\t     (<AND <NOT <EQUAL? .CHR ,PLAYER>>\n\t\t\t\t\t   <FSET? .CHR ,TOLD>\n\t\t\t\t\t   <NOT <FSET? .PER ,TOLD>>>\n\t\t\t\t      <MURDER-TELL .PER .CHR>)\n\t\t\t\t     (<LOC ,CORPSE>\n\t\t\t\t      <COND (<EQUAL? .PER ,PLAYER>\n\t\t\t\t\t     <DISCOVER-BODY .CHR>)\n\t\t\t\t\t    (<AND <NOT .PER?>\n\t\t\t\t\t\t  <EQUAL? .CHR ,PLAYER>>\n\t\t\t\t\t     <DISCOVER-BODY .PER>)>)>)>\n\t\t\t<PUT .WT .CNT ,PRESENT-TIME>\n\t\t\t<PUT <GET ,WHERE-TABLES .CNT> .NC ,PRESENT-TIME>)>\n\t\t <SET CNT <+ .CNT 1>>>>"
  },
  "DPRINT": {
   "name": "DPRINT",
   "file": "macros.zil",
   "line": 75,
   "endLine": 81,
   "source": "<ROUTINE DPRINT (O \"OPTIONAL\" (CAP? <>) \"AUX\" S)\n\t <COND (<FSET? .O ,THE>\n\t\t<COND (.CAP? <PRINTI \"The \">)\n\t\t      (T <PRINTI \"the \">)>)>\n\t <COND (<SET S <GETP .O ,P?SDESC>>\n\t\t<PRINT .S>)\n\t       (ELSE <PRINTD .O>)>>"
  },
  "THE-PRINT": {
   "name": "THE-PRINT",
   "file": "macros.zil",
   "line": 83,
   "endLine": 91,
   "source": "<ROUTINE THE-PRINT (O \"OPTIONAL\" (CAP? <>) \"AUX\" S)\n\t <COND (<OR <FSET? .O ,THE>\n\t\t    <AND <NOT <FSET? .O ,PERSON>>\n\t\t\t <NOT <FSET? .O ,FEMALE>>>>\n\t\t<COND (.CAP? <PRINTI \"The \">)\n\t\t      (T <PRINTI \"the \">)>)>\n\t <COND (<SET S <GETP .O ,P?SDESC>>\n\t\t<PRINT .S>)\n\t       (ELSE <PRINTD .O>)>>"
  },
  "HE/SHE-PRINT": {
   "name": "HE/SHE-PRINT",
   "file": "macros.zil",
   "line": 93,
   "endLine": 96,
   "source": "<ROUTINE HE/SHE-PRINT (O)\n\t <COND (<NOT <FSET? .O ,PERSON>> <PRINTI \"it\">)\n\t       (<FSET? .O ,FEMALE> <PRINTI \"she\">)\n\t       (ELSE <PRINTI \"he\">)>>"
  },
  "HIM/HER-PRINT": {
   "name": "HIM/HER-PRINT",
   "file": "macros.zil",
   "line": 98,
   "endLine": 104,
   "source": "<ROUTINE HIM/HER-PRINT (O \"OPTIONAL\" (POSSESSIVE? <>))\n\t <COND (<NOT <FSET? .O ,PERSON>>\n\t\t<COND (.POSSESSIVE? <PRINTI \"it's\">)\n\t\t      (ELSE <PRINTI \"it\">)>)\n\t       (<FSET? .O ,FEMALE> <PRINTI \"her\">)\n\t       (.POSSESSIVE? <PRINTI \"his\">)\n\t       (ELSE <PRINTI \"him\">)>>"
  },
  "PRINTA": {
   "name": "PRINTA",
   "file": "macros.zil",
   "line": 106,
   "endLine": 112,
   "source": "<ROUTINE PRINTA (O \"AUX\" S)\n\t <COND (<FSET? .O ,THE> <PRINTI \"the \">)\n\t       (<FSET? .O ,AN> <PRINTI \"an \">)\n\t       (<NOT <FSET? .O ,PERSON>> <PRINTI \"a \">)>\n\t <COND (<SET S <GETP .O ,P?SDESC>>\n\t\t<PRINT .S>)\n\t       (ELSE <PRINTD .O>)>>"
  },
  "PICK-ONE": {
   "name": "PICK-ONE",
   "file": "macros.zil",
   "line": 136,
   "endLine": 151,
   "source": "<ROUTINE PICK-ONE (FROB\n\t\t   \"AUX\" (L <GET .FROB 0>) (CNT <GET .FROB 1>) RND MSG RFROB)\n\t <SET L <- .L 1>>\n\t <SET FROB <REST .FROB 2>>\n\t <SET RFROB <REST .FROB <* .CNT 2>>>\n\t <SET RND\n\t      <COND (<G? ,PRESENT-TIME 540>\n\t\t     <RANDOM <- .L .CNT>>)\n\t\t    (ELSE 1)>>\n\t <SET MSG <GET .RFROB .RND>>\n\t <PUT .RFROB .RND <GET .RFROB 1>>\n\t <PUT .RFROB 1 .MSG>\n\t <SET CNT <+ .CNT 1>>\n\t <COND (<==? .CNT .L> <SET CNT 0>)>\n\t <PUT .FROB 0 .CNT>\n\t .MSG>"
  },
  "PROB": {
   "name": "PROB",
   "file": "macros.zil",
   "line": 153,
   "endLine": 155,
   "source": "<ROUTINE PROB (BASE)\n\t <AND <G? ,PRESENT-TIME 540>\n\t      <NOT <L? .BASE <RANDOM 100>>>>>"
  },
  "ABS": {
   "name": "ABS",
   "file": "macros.zil",
   "line": 173,
   "endLine": 175,
   "source": "<ROUTINE ABS (NUM)\n\t<COND (<L? .NUM 0> <- 0 .NUM>)\n\t      (T .NUM)>>"
  },
  "GO": {
   "name": "GO",
   "file": "main.zil",
   "line": 24,
   "endLine": 38,
   "source": "<ROUTINE GO ()\n\t <SETG SCORE 21>\n\t <SETG WINNER ,PLAYER>\n\t <SETG HERE ,BALLROOM-9>\n\t <COND (<NOT <FSET? ,HERE ,TOUCHBIT>>\n\t\t<QUEUE-MAIN-EVENTS>\n\t\t<START-MOVEMENT>\n\t \t<V-VERSION>\n\t\t<INTRO>)>\n\t <THIS-IS-S-HE ,MICHAEL>\n\t <MOVE ,PLAYER ,HERE>\n\t <V-LOOK>\n\t <I-WAVE>\n\t <MAIN-LOOP>\n\t <AGAIN>>    "
  },
  "MAIN-LOOP": {
   "name": "MAIN-LOOP",
   "file": "main.zil",
   "line": 42,
   "endLine": 166,
   "source": "<ROUTINE MAIN-LOOP (\"AUX\" ICNT OCNT NUM CNT OBJ TBL V PTBL OBJ1 TMP ACTED) \n   #DECL ((CNT OCNT ICNT NUM) FIX (V) <OR 'T FIX FALSE> (OBJ)<OR FALSE OBJECT>\n\t  (OBJ1) OBJECT (TBL) TABLE (PTBL) <OR FALSE ATOM>)\n   <REPEAT ()\n     <SET CNT 0>\n     <SET OBJ <>>\n     <SET PTBL T>\n     <SET ACTED <>>\n     <COND (<NOT <==? ,QCONTEXT-ROOM ,HERE>>\n\t    <SETG QCONTEXT <>>)>\n     <SETG P-WALK-DIR <>> ;\"8/24 PER JW\"\n     <COND (<SETG P-WON <PARSER>>\n\t    <SETG LAST-PLAYER-LOC <LOC ,PLAYER>>\n\t    <COND (<NOT <EQUAL? ,P-WON ,M-FATAL>>\n\t\t   <SET ICNT <GET ,P-PRSI ,P-MATCHLEN>>\n\t\t   <SET NUM\n\t\t\t<COND (<0? <SET OCNT <GET ,P-PRSO ,P-MATCHLEN>>> .OCNT)\n\t\t\t      (<G? .OCNT 1>\n\t\t\t       <SET TBL ,P-PRSO>\n\t\t\t       <COND (<0? .ICNT> <SET OBJ <>>)\n\t\t\t\t     (T <SET OBJ <GET ,P-PRSI 1>>)>\n\t\t\t       .OCNT)\n\t\t\t      (<G? .ICNT 1>\n\t\t\t       <SET PTBL <>>\n\t\t\t       <SET TBL ,P-PRSI>\n\t\t\t       <SET OBJ <GET ,P-PRSO 1>>\n\t\t\t       .ICNT)\n\t\t\t      (T 1)>>\n\t\t   <COND (<AND <NOT .OBJ> <1? .ICNT>>\n\t\t\t  <SET OBJ <GET ,P-PRSI 1>>)>)\n\t\t  (ELSE <SET NUM 0>)>\n\t    <COND (<AND <==? ,PRSA ,V?WALK> ,P-WALK-DIR>\n\t\t   <SET V <PERFORM ,PRSA ,PRSO>>)\n\t\t  (<0? .NUM>\n\t\t   <COND (<OR <EQUAL? ,PRSA ,V?CONTINUE>\n\t\t\t      <0? <BAND <GETB ,P-SYNTAX ,P-SBITS> ,P-SONUMS>>>\n\t\t\t  <SET V <PERFORM ,PRSA>>\n\t\t\t  <SETG PRSO <>>)\n\t\t\t (T\n\t\t\t  <TELL-NOTHING-TO>\n\t\t\t  <SET V <>>)>)\n\t\t  (<AND .PTBL\n\t\t\t<G? .NUM 1>\n\t\t\t<VERB? ARREST COMPARE EXAMINE>>\n\t\t   <SET V <PERFORM ,PRSA ,OBJECT-PAIR>>)\n\t\t  (T\n\t\t   <SET TMP 0>\n\t\t   <REPEAT ()\n\t\t    <COND (<G? <SET CNT <+ .CNT 1>> .NUM>\n\t\t\t   <COND (<G? .TMP 0>\n\t\t\t\t  <TELL \"The other object\">\n\t\t\t\t  <COND (<NOT <EQUAL? .TMP 1>>\n\t\t\t\t\t <TELL \"s\">)>\n\t\t\t\t  <TELL \" that you mentioned \">\n\t\t\t\t  <COND (<NOT <EQUAL? .TMP 1>>\n\t\t\t\t\t <TELL \"are\">)\n\t\t\t\t\t(T <TELL \"is\">)>\n\t\t\t\t  <TELL \"n't\">\n\t\t\t\t  <TELL-HERE>)\n\t\t\t\t (<NOT .ACTED>\n\t\t\t\t  <TELL-NOTHING-TO>)>\n\t\t\t   <RETURN>)\n\t\t\t  (T\n\t\t\t   <COND (.PTBL <SET OBJ1 <GET ,P-PRSO .CNT>>)\n\t\t\t\t (T <SET OBJ1 <GET ,P-PRSI .CNT>>)>\n\t\t\t   <COND (<G? .NUM 1>\n;\"start of reformatted shit\"\n<COND (<==? .OBJ1 ,NOT-HERE-OBJECT>\n       <SET TMP <+ .TMP 1>>\n       <AGAIN>)\n      (<EQUAL? ,P-GETFLAGS ,P-ALL>\n       <COND (<AND <VERB? TAKE>\n\t\t   <OR <AND <NOT <EQUAL? <LOC .OBJ1>\n\t\t\t\t\t ,WINNER ,HERE .OBJ>>\n\t\t\t    <NOT <FSET? <LOC .OBJ1> ,SURFACEBIT>>>\n\t\t       <AND <NOT <FSET? .OBJ1 ,TAKEBIT>>\n\t\t\t    <NOT <FSET? .OBJ1 ,TRYTAKEBIT>>>>>\n\t      <AGAIN>)\n\t     (<AND <VERB? TAKE>\n\t\t   .OBJ\n\t\t   <OR <==? .OBJ .OBJ1>\n\t\t       <NOT <IN? .OBJ1 .OBJ>>>>\n\t      <AGAIN>)\n\t     (<AND <VERB? DROP>\n\t\t   <NOT <IN? .OBJ1 ,WINNER>>\n\t\t   ;\"next frob semied by JW\"\n\t\t   ;<NOT <IN? ,P-IT-OBJECT\n\t\t\t      ,WINNER>>>\n\t      <AGAIN>)\n\t     (<AND <VERB? PUT>\n\t\t   <HELD? .OBJ1 .OBJ>>\n\t      <AGAIN>)>)>\n;\"end of reformated shit\"\n\t\t\t\t  <COND (<EQUAL? .OBJ1 ,IT>\n\t\t\t\t\t <TELL D ,P-IT-OBJECT>)\n\t\t\t\t\t(T <TELL D .OBJ1>)>\n\t\t\t\t  <TELL \": \">)>\n\t\t\t   <SET V\n\t\t\t\t<QCONTEXT-CHECK\n\t\t\t\t <COND (.PTBL .OBJ1) (T .OBJ)>\n\t\t\t\t <COND (.PTBL .OBJ)(T .OBJ1)>>>\n\t\t\t   <SET ACTED T>\n\t\t\t   <SET V\n\t\t\t\t<PERFORM ,PRSA ;\"? SETG PRSx to these?\"\n\t\t\t\t\t <COND (.PTBL .OBJ1) (T .OBJ)>\n\t\t\t\t\t <COND (.PTBL .OBJ)(T .OBJ1)>>>\n\t\t\t   <COND (<==? .V ,M-FATAL> <RETURN>)>)>>)>\n\t    <COND (<==? .V ,M-FATAL> <SETG P-CONT <>>)>)\n\t   (T\n\t    <SETG P-CONT <>>)>\n     <COND (,P-WON\n\t    %<DEBUG-CODE\n\t      <COND (<VERB? $NEXT $WHERE $DEBUG $TANDY $GOAL\n\t\t\t    $TABLE $FOLLOW $SCORE $HANDLE>\n\t\t     <AGAIN>)>>\n\t    <COND (<VERB? TELL\n\t\t\t  BRIEF SUPER-BRIEF VERBOSE\n\t\t\t  SAVE RESTORE RESTART\n\t\t\t  SPACE UNSPACE\n\t\t\t  SCRIPT UNSCRIPT\n\t\t\t  VERSION SCORE TIME\n\t\t\t  $VERIFY>\n\t\t   T)\n\t\t  (T\n\t\t   <SET V <CLOCKER>>)>)>>>"
  },
  "TELL-NOTHING-TO": {
   "name": "TELL-NOTHING-TO",
   "file": "main.zil",
   "line": 170,
   "endLine": 177,
   "source": "<ROUTINE TELL-NOTHING-TO (\"AUX\" TMP)\n\t <TELL \"There isn't anything to \">\n\t <SET TMP <GET ,P-ITBL ,P-VERBN>>\n\t <COND (,P-MERGED\n\t\t<PRINTB <GET .TMP 0>>)\n\t       (T\n\t\t<WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>)>\n\t <TELL \".\" CR>>"
  },
  "QCONTEXT-CHECK": {
   "name": "QCONTEXT-CHECK",
   "file": "main.zil",
   "line": 179,
   "endLine": 200,
   "source": "<ROUTINE QCONTEXT-CHECK (PRSO PRSI \"AUX\" OTHER (WHO <>) (N 0))\n\t <COND (<VERB? TELL> <RFALSE>)\n\t       (<OR <VERB? HELP WHAT>\n\t\t    <AND <VERB? TELL-ME>\n\t\t\t <EQUAL? .PRSO ,PLAYER ,ME>>\n\t\t    <AND <VERB? SHOW GIVE>\n\t\t\t <EQUAL? .PRSI ,PLAYER ,ME>>>\n\t\t<SET OTHER <FIRST? ,HERE>>\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT .OTHER> <RETURN>)\n\t\t\t      (<FSET? .OTHER ,PERSON>\n\t\t\t       <SET N <+ 1 .N>>\n\t\t\t       <SET WHO .OTHER>)>\n\t\t\t<SET OTHER <NEXT? .OTHER>>>\n\t\t<COND (<AND <==? 1 .N> <NOT ,QCONTEXT>>\n\t\t       <SAID-TO .WHO>)>\n\t\t<COND (<AND ,QCONTEXT\n\t\t\t    <IN? ,QCONTEXT ,HERE>\n\t\t\t    <==? ,QCONTEXT-ROOM ,HERE>\n\t\t\t    <==? ,WINNER ,PLAYER>> ;\"? more?\"\n\t\t       <SETG WINNER ,QCONTEXT>\n\t\t       <TELL \"(said to \" D ,QCONTEXT \")\" CR>)>)>>"
  },
  "SAID-TO": {
   "name": "SAID-TO",
   "file": "main.zil",
   "line": 202,
   "endLine": 205,
   "source": "<ROUTINE SAID-TO (WHO)\n <SETG WINNER .WHO>\n <SETG QCONTEXT .WHO>\n <SETG QCONTEXT-ROOM ,HERE>>"
  },
  "FAKE-ORPHAN": {
   "name": "FAKE-ORPHAN",
   "file": "main.zil",
   "line": 213,
   "endLine": 219,
   "source": "<ROUTINE FAKE-ORPHAN ()\n\t <ORPHAN ,P-SYNTAX <>>\n\t <TELL \"Be specific: \">\n\t <VERB-PRINT ,P-OTBL>\n\t <SETG P-OFLAG T>\n\t <SETG P-WON <>>\n\t <TELL \" what object?\" CR>>"
  },
  "NULL-F": {
   "name": "NULL-F",
   "file": "main.zil",
   "line": 223,
   "endLine": 223,
   "source": "<ROUTINE NULL-F () <RFALSE>>"
  },
  "PERFORM": {
   "name": "PERFORM",
   "file": "main.zil",
   "line": 225,
   "endLine": 354,
   "source": "<ROUTINE PERFORM (A \"OPTIONAL\" (O <>) (I <>) \"AUX\" V OA OO OI WALK?) \n\t#DECL ((A) FIX (O) <OR FALSE OBJECT FIX> (I) <OR FALSE OBJECT> (V)ANY)\n\t%<DEBUG-CODE\n\t  <COND (,HDEBUG\n\t\t <TELL \"[Perform: \">\n\t\t %<COND (<GASSIGNED? PREDGEN> '<TELL N .A>)\n\t\t\t(T '<PRINT <SPNAME <NTH ,ACTIONS <+ <* .A 2> 1>>>>)>\n\t\t <COND (.O\n\t\t\t<COND (<AND <==? .A ,V?WALK>\n\t\t\t\t    ,P-WALK-DIR>\n\t\t\t       <TELL \"/\" N .O>)\n\t\t\t      (ELSE\n\t\t\t       <TELL \"/\" D .O>)>)>\n\t\t <COND (.I <TELL \"/\" D .I>)>\n\t\t <TELL \"]\" CR>)>>\n\t<SET OA ,PRSA>\n\t<SET OO ,PRSO>\n\t<SET OI ,PRSI>\n\t<SETG PRSA .A>\n\t<SET WALK? <AND <VERB? WALK> ,P-WALK-DIR>>\n\t<COND (.WALK? T)\n\t      (<AND ,P-IT-OBJECT\n\t\t    <EQUAL? ,IT .I .O>\n\t\t    <NOT <EQUAL? ,P-IT-LOC ,HERE>>>\n\t       <COND (<NOT .I> <FAKE-ORPHAN>)\n\t\t     (T\n\t\t      <TELL CTHE ,P-IT-OBJECT ,ISNT-HERE CR>)>\n\t       <RFATAL>)\n\t      (<AND <EQUAL? ,HIM-HER .I .O>\n\t\t    <NOT <EQUAL? <META-LOC ,P-HIM-HER> ,HERE>>>\n\t       <THIS-IS-S-HE <CHARACTERIZE ,P-HIM-HER>>)>\n\t<COND (.WALK? T)\n\t      (<==? .O ,IT>\n\t       <COND (,P-IT-OBJECT <SET O ,P-IT-OBJECT>)\n\t\t     (ELSE <SET O ,P-HIM-HER>)>)\n\t      (<==? .O ,HIM-HER> <SET O ,P-HIM-HER>)>\n\t<COND (.WALK? T)\n\t      (<==? .I ,IT>\n\t       <COND (,P-IT-OBJECT <SET I ,P-IT-OBJECT>)\n\t\t     (ELSE <SET I ,P-HIM-HER>)>)\n\t      (<==? .I ,HIM-HER> <SET I ,P-HIM-HER>)>\n\t<SETG PRSO .O>\n\t<SETG PRSI .I>\n\t<COND (<AND ,PRSO\n\t\t    <NOT .WALK?>\n\t\t    <EQUAL? ,HERE <META-LOC ,WINNER>>>\n\t       <COND (<FSET? ,PRSO ,PERSON>\n\t\t      <COND (<EQUAL? ,PRSO ,CORPSE>\n\t\t\t     <THIS-IS-IT ,PRSO>)>\n\t\t      <THIS-IS-S-HE ,PRSO>)\n\t\t     (T\n\t\t      <THIS-IS-IT ,PRSO>)>)>\n\t<COND (<AND <NOT <VERB? AGAIN WALK $DISCOVER>>\n\t\t    <EQUAL? ,WINNER ,PLAYER>>\n\t       <SETG L-PRSA .A>\n\t       <SETG L-PRSO .O>\n\t       <SETG L-PRSI .I>)>\n\t<COND (<AND <NOT .WALK?>\n\t\t    <EQUAL? ,NOT-HERE-OBJECT ,PRSO ,PRSI>\n\t\t    <SET V\n\t\t\t %<DEBUG-CODE\n\t\t\t   <D-APPLY \"Not Here\" ,NOT-HERE-OBJECT-F>\n\t\t\t   <APPLY ,NOT-HERE-OBJECT-F>>>>\n\t       .V)\n\t      (<AND <SET O ,PRSO> <SET I ,PRSI> <NULL-F>>\n\t       %<DEBUG-CODE\n\t\t <TELL \"[in case last clause changed PRSx]\">>)\n\t      (<SET V\n\t\t    %<DEBUG-CODE\n\t\t      <DD-APPLY \"Actor\" ,WINNER <GETP ,WINNER ,P?ACTION>>\n\t\t      <APPLY <GETP ,WINNER ,P?ACTION>>>>\n\t       .V)\n\t      (<SET V\n\t\t    %<DEBUG-CODE\n\t\t      <D-APPLY \"Room (M-BEG)\"\n\t\t\t       <GETP <LOC ,WINNER> ,P?ACTION>\n\t\t\t       ,M-BEG>\n\t\t      <APPLY <GETP <LOC ,WINNER> ,P?ACTION>\n\t\t\t     ,M-BEG>>>\n\t       .V)\n\t      (<SET V\n\t\t    %<DEBUG-CODE\n\t\t      <D-APPLY \"Preaction\"\n\t\t\t       <GET ,PREACTIONS .A>>\n\t\t      <APPLY <GET ,PREACTIONS .A>>>>\n\t       .V)\n\t      (<AND .I\n\t\t    <SETG NOW-PRSI T>\n\t\t    <SET V\n\t\t\t %<DEBUG-CODE\n\t\t\t   <D-APPLY \"PRSI\" <GETP .I ,P?ACTION>>\n\t\t\t   <APPLY <GETP .I ,P?ACTION>>>>>\n\t       .V)\n\t      (<AND <NOT <SETG NOW-PRSI <>>>\n\t\t    .O\n\t\t    <NOT .WALK?>\n\t\t    <LOC .O>\n\t\t    <GETP <LOC .O> ,P?CONTFCN>\n\t\t    <SET V\n\t\t\t %<DEBUG-CODE\n\t\t\t   <DD-APPLY \"Container\" <LOC .O>\n\t\t\t\t     <GETP <LOC .O> ,P?CONTFCN>>\n\t\t\t   <APPLY <GETP <LOC .O> ,P?CONTFCN>>>>>\n\t       .V)\n\t      (<AND .O\n\t\t    <NOT .WALK?>\n\t\t    <SET V\n\t\t\t %<DEBUG-CODE\n\t\t\t   <D-APPLY \"PRSO\"\n\t\t\t\t    <GETP .O ,P?ACTION>>\n\t\t\t   <APPLY <GETP .O ,P?ACTION>>>>>\n\t       .V)\n\t      (<SET V\n\t\t    %<DEBUG-CODE\n\t\t      <D-APPLY <>\n\t\t\t       <GET ,ACTIONS .A>>\n\t\t      <APPLY <GET ,ACTIONS .A>>>>\n\t       .V)>\n\t<COND (<NOT <==? .V ,M-FATAL>>\n\t       <COND (<==? <LOC ,WINNER> ,PRSO>\t;\"was not in compiled PERFORM\"\n\t\t      <SETG PRSO <>>)>\n\t       <SET V\n\t\t    %<DEBUG-CODE\n\t\t      <D-APPLY \"Room (M-END)\"\n\t\t\t       <GETP <LOC ,WINNER> ,P?ACTION> ,M-END>\n\t\t      <APPLY <GETP <LOC ,WINNER> ,P?ACTION> ,M-END>>>)>\n\t<SETG PRSA .OA>\n\t<SETG PRSO .OO>\n\t<SETG PRSI .OI>\n\t.V>"
  },
  "THIS-IS-S-HE": {
   "name": "THIS-IS-S-HE",
   "file": "parser.zil",
   "line": 48,
   "endLine": 56,
   "source": "<ROUTINE THIS-IS-S-HE (PER)\n\t %<DEBUG-CODE\n\t   <COND (,IDEBUG\n\t\t  <TELL \"[\"\n\t\t\t<COND (<FSET? .PER ,FEMALE> \"She\")\n\t\t\t      (T \"He\")>\n\t\t\t\"'s \" D .PER \"]\" CR>)>>\n\t <SETG P-HIM-HER .PER>\n\t <SETG P-HIM-HER-LOC <LOC .PER>>>"
  },
  "PARSER": {
   "name": "PARSER",
   "file": "parser.zil",
   "line": 139,
   "endLine": 310,
   "source": "<ROUTINE PARSER (\"AUX\" (PTR ,P-LEXSTART) WORD (VAL 0) (VERB <>)\n\t\t       LEN (DIR <>) (NW 0) (LW 0) NUM SCNT (CNT -1) OWINNER) \n\t<REPEAT ()\n\t\t<COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN> <RETURN>)\n\t\t      (T <PUT ,P-ITBL .CNT 0>)>>\n\t<SETG P-NAM <>>\n\t<SETG P-ADJ <>>\n\t<SETG P-MERGED <>>\n\t<PUT ,P-PRSO ,P-MATCHLEN 0>\n\t<PUT ,P-PRSI ,P-MATCHLEN 0>\n\t<PUT ,P-BUTS ,P-MATCHLEN 0>\n\t<SET OWINNER ,WINNER>\n\t<COND (<AND <NOT ,QUOTE-FLAG> <N==? ,WINNER ,PLAYER>>\n\t       <SETG WINNER ,PLAYER>\n\t       <COND (<NOT <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t      <SETG HERE <LOC ,WINNER>>)>)>\n\t<COND (,P-CONT\n\t       <SET PTR ,P-CONT>\n\t       <SETG P-CONT <>>\n\t       <COND (<NOT <VERB? TELL>> <CRLF>)>)\n\t      (T\n\t       <SETG WINNER ,PLAYER>\n\t       <SETG QUOTE-FLAG <>>\n\t       <COND (<NOT <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t      <SETG HERE <LOC ,WINNER>>)>\n\t       <SET SCNT ,P-SPACE>\n\t       <REPEAT ()\n\t\t       <COND (<L? <SET SCNT <- .SCNT 1>> 0> <RETURN>)\n\t\t\t     (T <CRLF>)>>\n\t       <PUTB ,P-LEXV 0 59>\n\t       <TELL \">\">\n\t       <READ ,P-INBUF ,P-LEXV>)>\n\t<SETG P-LEN <GETB ,P-LEXV ,P-LEXWORDS>>\n\t<COND (<0? ,P-LEN>\n\t       <COND (<GET <GET ,GOAL-TABLES ,PLAYER-C> ,GOAL-S>\n\t\t      <SETG PRSA ,V?CONTINUE>\n\t\t      <SETG PRSO <>>\n\t\t      <SETG PRSI <>>\n\t\t      <RFATAL>)\n\t\t     (ELSE\n\t\t      <TELL \"What?\" CR>\n\t\t      <RFALSE>)>)\n\t      (<OR <EQUAL? <SET WORD <GET ,P-LEXV .PTR>> ,W?WHY ,W?HOW ,W?WHEN>\n\t\t   <EQUAL? .WORD ,W?DID>>\n\t       <TELL\n\"Sorry, but this program can't handle questions like that.\nCheck your manual for more details.\" CR>\n\t       <RFALSE>)>\n\t<SET LEN ,P-LEN>\n\t<SETG P-DIR <>>\n\t<SETG P-NCN 0>\n\t<SETG P-GETFLAGS 0>\n\t;\"3/25/83: Next statement added.\"\n\t<PUT ,P-ITBL ,P-VERBN 0>\n\t<REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <SETG QUOTE-FLAG <>>\n\t\t       <RETURN>)\n\t\t      (<OR <SET WORD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WORD <NUMBER? .PTR>>>\n\t\t       <COND (<AND <==? .WORD ,W?TO>\n\t\t\t\t   <EQUAL? .VERB ,ACT?TELL ,ACT?ASK>>\n\t\t\t      <SET WORD ,W?QUOTE>)\n\t\t\t     (<AND <==? .WORD ,W?THEN>\n\t\t\t\t   <NOT .VERB>>\n\t\t\t      <PUT ,P-ITBL ,P-VERB ,ACT?TELL>\n\t\t\t      <PUT ,P-ITBL ,P-VERBN 0>\n\t\t\t      <SET WORD ,W?QUOTE>)>\n\t\t       <COND (<ABBREV? .LW .WORD> <SET LW 0>)\n\t\t\t     (<OR <EQUAL? .WORD ,W?THEN ,W?PERIOD>\n\t\t\t\t  <EQUAL? .WORD ,W?QUOTE>> \n\t\t\t      <COND (<EQUAL? .WORD ,W?QUOTE>\n\t\t\t\t     <COND (,QUOTE-FLAG\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>)\n\t\t\t\t\t   (T <SETG QUOTE-FLAG T>)>)>\n\t\t\t      <OR <0? ,P-LEN>\n\t\t\t\t  <SETG P-CONT <+ .PTR ,P-LEXELEN>>>\n\t\t\t      <PUTB ,P-LEXV ,P-LEXWORDS ,P-LEN>\n\t\t\t      <RETURN>)\n\t\t\t     (<AND <SET VAL\n\t\t\t\t\t<WT? .WORD\n\t\t\t\t\t     ,PS?DIRECTION\n\t\t\t\t\t     ,P1?DIRECTION>>\n\t\t\t\t   <OR <==? .LEN 1>\n\t\t\t\t       <AND <==? .LEN 2><==? .VERB ,ACT?WALK>>\n\t\t\t\t       <AND <EQUAL? <SET NW\n\t\t\t\t\t\t     <GET ,P-LEXV\n\t\t\t\t\t\t\t <+ .PTR ,P-LEXELEN>>>\n\t\t\t\t\t            ,W?THEN\n\t\t\t\t\t            ,W?QUOTE>\n\t\t\t\t\t    <G? .LEN 2>>\n\t\t\t\t       <AND <EQUAL? .NW ,W?PERIOD>\n\t\t\t\t\t    <G? .LEN 1>>\n\t\t\t\t       <AND ,QUOTE-FLAG\n\t\t\t\t\t    <==? .LEN 2>\n\t\t\t\t\t    <EQUAL? .NW ,W?QUOTE>>\n\t\t\t\t       <AND <G? .LEN 2>\n\t\t\t\t\t    <EQUAL? .NW ,W?COMMA ,W?AND>>>>\n\t\t\t      <SET DIR .VAL>\n\t\t\t      <COND (<EQUAL? .NW ,W?COMMA ,W?AND>\n\t\t\t\t     <PUT ,P-LEXV\n\t\t\t\t\t  <+ .PTR ,P-LEXELEN>\n\t\t\t\t\t  ,W?THEN>)>\n\t\t\t      <COND (<NOT <G? .LEN 2>>\n\t\t\t\t     <SETG QUOTE-FLAG <>>\n\t\t\t\t     <RETURN>)>)\n\t\t\t     (<AND <SET VAL <WT? .WORD ,PS?VERB ,P1?VERB>>\n\t\t\t\t   <OR <NOT .VERB>\n\t\t\t\t       <AND <EQUAL? .VERB ,ACT?WHAT>\n\t\t\t\t\t    <NOT <EQUAL? .WORD ,W?IS>>>>>\n\t\t\t      <SET VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERBN ,P-VTBL>\n\t\t\t      <PUT ,P-VTBL 0 .WORD>\n\t\t\t      <PUTB ,P-VTBL 2 <GETB ,P-LEXV\n\t\t\t\t\t\t    <SET NUM\n\t\t\t\t\t\t\t <+ <* .PTR 2> 2>>>>\n\t\t\t      <PUTB ,P-VTBL 3 <GETB ,P-LEXV <+ .NUM 1>>>)\n\t\t\t     (<OR <SET VAL <WT? .WORD ,PS?PREPOSITION 0>>\n\t\t\t\t  <AND <OR <EQUAL? .WORD ,W?ALL ,W?ONE ,W?A>\n\t\t\t\t\t   <WT? .WORD ,PS?ADJECTIVE>\n\t\t\t\t\t   <WT? .WORD ,PS?OBJECT>>\n\t\t\t\t       <SET VAL 0>>>\n\t\t\t      <COND (<AND <G? ,P-LEN 0>\n\t\t\t\t\t  <==? <GET ,P-LEXV\n\t\t\t\t\t\t    <+ .PTR ,P-LEXELEN>>\n\t\t\t\t\t       ,W?OF>\n\t\t\t\t\t  <NOT <EQUAL? .VERB\n\t\t\t\t\t\t       ,ACT?ACCUSE\n\t\t\t\t\t\t       ,ACT?MAKE>>\n\t\t\t\t\t  <0? .VAL>\n\t\t\t\t\t  <NOT <EQUAL? .WORD\n\t\t\t\t\t\t       ,W?ALL ,W?ONE ,W?A>>>)\n\t\t\t\t    (<AND <NOT <0? .VAL>>\n\t\t\t\t          <OR <0? ,P-LEN>\n\t\t\t\t\t      <EQUAL? <GET ,P-LEXV <+ .PTR 2>>\n\t\t\t\t\t\t      ,W?THEN ,W?PERIOD>>>\n\t\t\t\t     <COND (<L? ,P-NCN 2>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1 .VAL>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1N .WORD>)>)\n\t\t\t\t    (<==? ,P-NCN 2>\n\t\t\t\t     <TELL\n\"There were more than two nouns in that sentence.\" CR>\n\t\t\t\t     <RFALSE>)\n\t\t\t\t    (T\n\t\t\t\t     <SETG P-NCN <+ ,P-NCN 1>>\n\t\t\t\t     <OR <SET PTR <CLAUSE .PTR .VAL .WORD>>\n\t\t\t\t\t <RFALSE>>\n\t\t\t\t     <COND (<L? .PTR 0>\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>\n\t\t\t\t\t    <RETURN>)>)>)\n\t\t\t     (<WT? .WORD ,PS?BUZZ-WORD>)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T\n\t\t       <UNKNOWN-WORD .PTR>\n\t\t       <RFALSE>)>\n\t\t<SET LW .WORD>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>\n\t<COND (.DIR\n\t       <SETG PRSA ,V?WALK>\n\t       <SETG P-WALK-DIR .DIR>\n\t       <SETG PRSO .DIR>\n\t       <SETG P-OFLAG <>>\n\t       <RETURN T>)>\n\t<COND (<AND ,P-OFLAG <ORPHAN-MERGE>>\n\t       <SETG WINNER .OWINNER>)>\n\t<COND (<==? <GET ,P-ITBL ,P-VERB> 0>\n\t       <PUT ,P-ITBL ,P-VERB ,ACT?$CALL>)>\n\t<COND (<AND <SYNTAX-CHECK> <SNARF-OBJECTS> <TAKE-CHECK> <MANY-CHECK>>\n\t       T)>>"
  },
  "ABBREV?": {
   "name": "ABBREV?",
   "file": "parser.zil",
   "line": 314,
   "endLine": 317,
   "source": "<ROUTINE ABBREV? (LW WORD)\n\t <AND <EQUAL? .WORD ,W?PERIOD>\n\t      <OR <EQUAL? .LW ,W?MRS ,W?MR ,W?MS>\n\t\t  <EQUAL? .LW ,W?SGT ,W?COL ,W?SEN>>>>"
  },
  "WT?": {
   "name": "WT?",
   "file": "parser.zil",
   "line": 321,
   "endLine": 327,
   "source": "<ROUTINE WT? (PTR BIT \"OPTIONAL\" (B1 5) \"AUX\" (OFFSET ,P-P1OFF) TYP) \n\t<COND (<BTST <SET TYP <GETB .PTR ,P-PSOFF>> .BIT>\n\t       <COND (<G? .B1 4> <RTRUE>)\n\t\t     (T\n\t\t      <SET TYP <BAND .TYP ,P-P1BITS>>\n\t\t      <COND (<NOT <==? .TYP .B1>> <SET OFFSET <+ .OFFSET 1>>)>\n\t\t      <GETB .PTR .OFFSET>)>)>>"
  },
  "CLAUSE": {
   "name": "CLAUSE",
   "file": "parser.zil",
   "line": 331,
   "endLine": 410,
   "source": "<ROUTINE CLAUSE (PTR VAL WORD \"AUX\" OFF NUM (ANDFLG <>) (FIRST?? T) NW (LW 0)) \n\t#DECL ((PTR VAL OFF NUM) FIX (WORD NW) <OR FALSE FIX TABLE>\n\t       (ANDFLG FIRST??) <OR ATOM FALSE>)\n\t<SET OFF <* <- ,P-NCN 1> 2>>\n\t<COND (<NOT <==? .VAL 0>>\n\t       <PUT ,P-ITBL <SET NUM <+ ,P-PREP1 .OFF>> .VAL>\n\t       <PUT ,P-ITBL <+ .NUM 1> .WORD>\n\t       <SET PTR <+ .PTR ,P-LEXELEN>>)\n\t      (T <SETG P-LEN <+ ,P-LEN 1>>)>\n\t<COND (<0? ,P-LEN> <SETG P-NCN <- ,P-NCN 1>> <RETURN -1>)>\n\t<PUT ,P-ITBL <SET NUM <+ ,P-NC1 .OFF>> <REST ,P-LEXV <* .PTR 2>>>\n\t<COND (<EQUAL? <GET ,P-LEXV .PTR> ,W?THE ,W?A ,W?AN>\n\t       <PUT ,P-ITBL .NUM <REST <GET ,P-ITBL .NUM> 4>>)>\n\t<REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <PUT ,P-ITBL <+ .NUM 1> <REST ,P-LEXV <* .PTR 2>>>\n\t\t       <RETURN -1>)>\n\t\t<COND (<OR <SET WORD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WORD <NUMBER? .PTR>>>\n\t\t       <COND (<0? ,P-LEN> <SET NW 0>)\n\t\t\t     (T <SET NW <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>>)>\n\t\t       <COND (<AND <==? .WORD ,W?OF>\n\t\t\t\t   <EQUAL? <GET ,P-ITBL ,P-VERB>\n\t\t\t\t\t   ,ACT?ACCUSE ,ACT?MAKE>>\n\t\t\t      <PUT ,P-LEXV .PTR ,W?WITH>\n\t\t\t      <SET WORD ,W?WITH>)>\n\t\t       <COND (<ABBREV? .LW .WORD>\n\t\t\t      <SET LW 0>)\n\t\t\t     (<EQUAL? .WORD ,W?AND ,W?COMMA> <SET ANDFLG T>)\n\t\t\t     (<EQUAL? .WORD ,W?ALL ,W?ONE>\n\t\t\t      <COND (<==? .NW ,W?OF>\n\t\t\t\t     <SETG P-LEN <- ,P-LEN 1>>\n\t\t\t\t     <SET PTR <+ .PTR ,P-LEXELEN>>)>)\n\t\t\t     (<OR <EQUAL? .WORD ,W?THEN ,W?PERIOD>\n\t\t\t\t  <AND <WT? .WORD ,PS?PREPOSITION>\n\t\t\t\t       <NOT .FIRST??>>>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 1>>\n\t\t\t      <PUT ,P-ITBL\n\t\t\t\t   <+ .NUM 1>\n\t\t\t\t   <REST ,P-LEXV <* .PTR 2>>>\n\t\t\t      <RETURN <- .PTR ,P-LEXELEN>>)\n\t\t\t     ;\"3/16/83: This clause used to be later.\"\n\t\t\t     (<AND .ANDFLG\n\t\t\t\t   <OR ;\"3/25/83: next statement added.\"\n\t\t\t\t       <EQUAL? <GET ,P-ITBL ,P-VERBN> 0>\n\t\t\t\t       <WT? .WORD ,PS?DIRECTION>\n\t\t\t\t       <WT? .WORD ,PS?VERB>>>\n\t\t\t      <SET PTR <- .PTR 4>>\n\t\t\t      <PUT ,P-LEXV <+ .PTR 2> ,W?THEN>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 2>>)\n\t\t\t     (<WT? .WORD ,PS?OBJECT>\n\t\t\t      <COND  ;\"First clause added 1/10/84 to fix\n\t\t\t\t      'verb AT synonym OF synonym' bug\"\n\t\t\t            (<AND <G? ,P-LEN 0>\n\t\t\t\t\t  <EQUAL? .NW ,W?OF>\n\t\t\t\t\t  <NOT <EQUAL? .WORD ,W?ALL ,W?ONE>>>\n\t\t\t\t     T)\n\t\t\t\t    (<AND <WT? .WORD\n\t\t\t\t\t       ,PS?ADJECTIVE\n\t\t\t\t\t       ,P1?ADJECTIVE>\n\t\t\t\t\t  <NOT <==? .NW 0>>\n\t\t\t\t\t  <WT? .NW ,PS?OBJECT>>)\n\t\t\t\t    (<AND <NOT .ANDFLG>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?BUT ,W?EXCEPT>>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t\t     <PUT ,P-ITBL\n\t\t\t\t\t  <+ .NUM 1>\n\t\t\t\t\t  <REST ,P-LEXV <* <+ .PTR 2> 2>>>\n\t\t\t\t     <RETURN .PTR>)\n\t\t\t\t    (T <SET ANDFLG <>>)>)\n\t\t\t     (<OR <WT? .WORD ,PS?ADJECTIVE>\n\t\t\t\t  <WT? .WORD ,PS?BUZZ-WORD>>)\n\t\t\t     (<WT? .WORD ,PS?PREPOSITION> T)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T <UNKNOWN-WORD .PTR> <RFALSE>)>\n\t\t<SET LW .WORD>\n\t\t<SET FIRST?? <>>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>> "
  },
  "NUMBER?": {
   "name": "NUMBER?",
   "file": "parser.zil",
   "line": 412,
   "endLine": 446,
   "source": "<ROUTINE NUMBER? (PTR \"AUX\" CNT BPTR CHR (SUM 0) (TIM <>) (EXC <>))\n\t <SET CNT <GETB <REST ,P-LEXV <* .PTR 2>> 2>>\n\t <SET BPTR <GETB <REST ,P-LEXV <* .PTR 2>> 3>>\n\t <REPEAT ()\n\t\t <COND (<L? <SET CNT <- .CNT 1>> 0> <RETURN>)\n\t\t       (T\n\t\t\t<SET CHR <GETB ,P-INBUF .BPTR>>\n\t\t\t<COND (<==? .CHR 58>\n\t\t\t       <COND (.EXC <RFALSE>)>\n\t\t\t       <SET TIM .SUM>\n\t\t\t       <SET SUM 0>)\n\t\t\t      (<==? .CHR 45>\n\t\t\t       <COND (.TIM <RFALSE>)>\n\t\t\t       <SET EXC .SUM>\n\t\t\t       <SET SUM 0>)\n\t\t\t      (<G? .SUM 9999> <RFALSE>)\n\t\t\t      (<AND <L? .CHR 58> <G? .CHR 47>>\n\t\t\t       <SET SUM <+ <* .SUM 10> <- .CHR 48>>>)\n\t\t\t      (T <RFALSE>)>\n\t\t\t<SET BPTR <+ .BPTR 1>>)>>\n\t <PUT ,P-LEXV .PTR ,W?INTNUM>\n\t <COND (<G? .SUM 9999> <RFALSE>)\n\t       (.EXC\n\t\t<SETG P-EXCHANGE .EXC>)\n\t       (.TIM\n\t\t<SETG P-EXCHANGE 0>\n\t\t<COND (<G? .TIM 23> <RFALSE>)\n\t\t      (<G? .TIM 19> T)\n\t\t      (<G? .TIM 12> <RFALSE>)\n\t\t      (<G? .TIM  7> T)\n\t\t      (T <SET TIM <+ 12 .TIM>>)>\n\t\t<SET SUM <+ .SUM <* .TIM 60>>>)\n\t       (T <SETG P-EXCHANGE 0>)>\n\t <SETG P-NUMBER .SUM>\n\t ,W?INTNUM>"
  },
  "ORPHAN-MERGE": {
   "name": "ORPHAN-MERGE",
   "file": "parser.zil",
   "line": 452,
   "endLine": 547,
   "source": "<ROUTINE ORPHAN-MERGE (\"AUX\" (CNT -1) TEMP VERB BEG END (ADJ <>) WRD) \n   <SETG P-OFLAG <>>\n   <COND (<WT? <SET WRD <GET <GET ,P-ITBL ,P-VERBN> 0>>\n\t       ,PS?ADJECTIVE ,P1?ADJECTIVE>\n\t  <SET ADJ T>)\n\t (<AND <WT? .WRD ,PS?OBJECT ,P1?OBJECT>\n\t       <EQUAL? ,P-NCN 0>>\n\t  <PUT ,P-ITBL ,P-VERB 0>\n\t  <PUT ,P-ITBL ,P-VERBN 0>\n\t  <PUT ,P-ITBL ,P-NC1 <REST ,P-LEXV 2>>\n\t  <PUT ,P-ITBL ,P-NC1L <REST ,P-LEXV 6>>\n\t  <SETG P-NCN 1>)>\n   <COND (<AND <NOT <0? <SET VERB <GET ,P-ITBL ,P-VERB>>>>\n\t       <NOT .ADJ>\n\t       <NOT <==? .VERB <GET ,P-OTBL ,P-VERB>>>>\n\t  <RFALSE>)\n\t (<==? ,P-NCN 2>\n\t  <RFALSE>)\n\t (<==? <GET ,P-OTBL ,P-NC1> 1>\n\t  <COND (<OR <==? <SET TEMP <GET ,P-ITBL ,P-PREP1>>\n\t\t\t  <GET ,P-OTBL ,P-PREP1>>\n\t\t     <0? .TEMP>>\n\t\t <COND (.ADJ\n\t\t\t<PUT ,P-OTBL ,P-NC1 <REST ,P-LEXV 2>>\n\t\t\t<COND (<0? <GET ,P-ITBL ,P-NC1L>>\n\t\t\t       <PUT ,P-ITBL ,P-NC1L <REST ,P-LEXV 6>>)>\n\t\t\t<COND (<0? ,P-NCN>\n\t\t\t       <SETG P-NCN 1>)>)\n\t\t       (T\n\t\t\t<PUT ,P-OTBL ,P-NC1 <GET ,P-ITBL ,P-NC1>>\n\t\t\t;<PUT ,P-OTBL ,P-NC1L <GET ,P-ITBL ,P-NC1L>>)>\n\t\t <PUT ,P-OTBL ,P-NC1L <GET ,P-ITBL ,P-NC1L>>)\n\t\t(T\n\t\t <RFALSE>)>)\n\t (<==? <GET ,P-OTBL ,P-NC2> 1>\n\t  <COND (<OR <==? <SET TEMP <GET ,P-ITBL ,P-PREP1>>\n\t\t\t  <GET ,P-OTBL ,P-PREP2>>\n\t\t     <0? .TEMP>>\n\t\t <COND (.ADJ\n\t\t\t<PUT ,P-ITBL ,P-NC1 <REST ,P-LEXV 2>>\n\t\t\t<COND (<0? <GET ,P-ITBL ,P-NC1L>>\n\t\t\t       <PUT ,P-ITBL ,P-NC1L <REST ,P-LEXV 6>>)>)>\n\t\t <PUT ,P-OTBL ,P-NC2 <GET ,P-ITBL ,P-NC1>>\n\t\t <PUT ,P-OTBL ,P-NC2L <GET ,P-ITBL ,P-NC1L>>\n\t\t <SETG P-NCN 2>)\n\t\t(T\n\t\t <RFALSE>)>)\n\t (,P-ACLAUSE\n\t  <COND (<AND <NOT <==? ,P-NCN 1>> <NOT .ADJ>>\n\t\t <SETG P-ACLAUSE <>>\n\t\t <RFALSE>)\n\t\t(T\n\t\t <SET BEG <GET ,P-ITBL ,P-NC1>>\n\t\t <COND (.ADJ <SET BEG <REST ,P-LEXV 2>> <SET ADJ <>>)>\n\t\t <SET END <GET ,P-ITBL ,P-NC1L>>\n\t\t <REPEAT ()\n\t\t\t <SET WRD <GET .BEG 0>>\n\t\t\t <COND (<==? .BEG .END>\n\t\t\t\t<COND (.ADJ\n\t\t\t\t       <ACLAUSE-WIN .ADJ>\n\t\t\t\t       <RETURN>)\n\t\t\t\t      (T\n\t\t\t\t       <SETG P-ACLAUSE <>> <RFALSE>)>)\n\t\t\t       (<AND <NOT .ADJ>\n\t\t\t\t     <OR <BTST <GETB .WRD ,P-PSOFF>\n\t\t\t\t\t       ,PS?ADJECTIVE> ;\"same as WT?\"\n\t\t\t\t\t <EQUAL? .WRD ,W?ALL ,W?ONE>>>\n\t\t\t\t<SET ADJ .WRD>)\n\t\t\t       (<==? .WRD ,W?ONE>\n\t\t\t\t<ACLAUSE-WIN .ADJ>\n\t\t\t\t<RETURN>)\n\t\t\t       (<BTST <GETB .WRD ,P-PSOFF> ,PS?OBJECT>\n\t\t\t\t<COND (<EQUAL? .WRD ,P-ANAM>\n\t\t\t\t       <ACLAUSE-WIN .ADJ>)\n\t\t\t\t      (T\n\t\t\t\t       <NCLAUSE-WIN>)>\n\t\t\t\t<RETURN>)>\n\t\t\t <SET BEG <REST .BEG ,P-WORDLEN>>\n\t\t\t <COND (<EQUAL? .END 0>\n\t\t\t\t<SET END .BEG>\n\t\t\t\t<SETG P-NCN 1>\n\t\t\t\t<PUT ,P-ITBL ,P-NC1 <BACK .BEG 4>>\n\t\t\t\t<PUT ,P-ITBL ,P-NC1L .BEG>)>>)>)>\n   <PUT ,P-VTBL 0 <GET ,P-OVTBL 0>>\n   <PUTB ,P-VTBL 2 <GETB ,P-OVTBL 2>>\n   <PUTB ,P-VTBL 3 <GETB ,P-OVTBL 3>>\n   <PUT ,P-OTBL ,P-VERBN ,P-VTBL>\n   <PUTB ,P-VTBL 2 0>\n   ;<AND <NOT <==? <GET ,P-OTBL ,P-NC2> 0>> <SETG P-NCN 2>>\n   <REPEAT ()\n\t   <COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN>\n\t\t  <SETG P-MERGED T>\n\t\t  <RTRUE>)\n\t\t (T\n\t\t  <PUT ,P-ITBL .CNT <GET ,P-OTBL .CNT>>)>>\n   T>"
  },
  "ACLAUSE-WIN": {
   "name": "ACLAUSE-WIN",
   "file": "parser.zil",
   "line": 549,
   "endLine": 561,
   "source": "<ROUTINE ACLAUSE-WIN (ADJ) \n\t<PUT ,P-ITBL ,P-VERB <GET ,P-OTBL ,P-VERB>>\n\t<COND ;(<EQUAL? .ADJ ,W?TEA> ;\"special case\"\n\t       <NCLAUSE-WIN>)\n\t      (T\n\t       <PUT ,P-CCTBL ,CC-SBPTR ,P-ACLAUSE>\n\t       <PUT ,P-CCTBL ,CC-SEPTR <+ ,P-ACLAUSE 1>>\n\t       <PUT ,P-CCTBL ,CC-DBPTR ,P-ACLAUSE>\n\t       <PUT ,P-CCTBL ,CC-DEPTR <+ ,P-ACLAUSE 1>>\n\t       <CLAUSE-COPY ,P-OTBL ,P-OTBL .ADJ>)>\n\t<AND <NOT <==? <GET ,P-OTBL ,P-NC2> 0>> <SETG P-NCN 2>>\n\t<SETG P-ACLAUSE <>>\n\t<RTRUE>>"
  },
  "NCLAUSE-WIN": {
   "name": "NCLAUSE-WIN",
   "file": "parser.zil",
   "line": 563,
   "endLine": 571,
   "source": "<ROUTINE NCLAUSE-WIN ()\n        <PUT ,P-CCTBL ,CC-SBPTR ,P-NC1>\n\t<PUT ,P-CCTBL ,CC-SEPTR ,P-NC1L>\n\t<PUT ,P-CCTBL ,CC-DBPTR ,P-ACLAUSE>\n\t<PUT ,P-CCTBL ,CC-DEPTR <+ ,P-ACLAUSE 1>>\n\t<CLAUSE-COPY ,P-ITBL ,P-OTBL>\n\t<AND <NOT <==? <GET ,P-OTBL ,P-NC2> 0>> <SETG P-NCN 2>>\n\t<SETG P-ACLAUSE <>>\n\t<RTRUE>>"
  },
  "WORD-PRINT": {
   "name": "WORD-PRINT",
   "file": "parser.zil",
   "line": 639,
   "endLine": 644,
   "source": "<ROUTINE WORD-PRINT (CNT BUF)\n\t <REPEAT ()\n\t\t <COND (<DLESS? CNT 0> <RETURN>)\n\t\t       (ELSE\n\t\t\t<PRINTC <GETB ,P-INBUF .BUF>>\n\t\t\t<SET BUF <+ .BUF 1>>)>>>"
  },
  "UNKNOWN-WORD": {
   "name": "UNKNOWN-WORD",
   "file": "parser.zil",
   "line": 646,
   "endLine": 653,
   "source": "<ROUTINE UNKNOWN-WORD (PTR \"AUX\" BUF) \n\t #DECL ((PTR BUF) FIX)\n\t <TELL \"Sorry, but the word \\\"\">\n\t <SET BUF <REST ,P-LEXV <* .PTR 2>>>\n\t <WORD-PRINT <GETB .BUF 2> <GETB .BUF 3>>\n\t <TELL \"\\\" is not in the vocabulary you can use.\" CR>\n\t <SETG QUOTE-FLAG <>>\n\t <SETG P-OFLAG <>>>"
  },
  "CANT-USE": {
   "name": "CANT-USE",
   "file": "parser.zil",
   "line": 655,
   "endLine": 662,
   "source": "<ROUTINE CANT-USE (PTR \"AUX\" BUF) \n\t #DECL ((PTR BUF) FIX)\n\t <TELL \"Sorry, but you can't use the word \\\"\">\n\t <SET BUF <REST ,P-LEXV <* .PTR 2>>>\n\t <WORD-PRINT <GETB .BUF 2> <GETB .BUF 3>>\n\t <TELL \"\\\" in that sense.\" CR>\n\t <SETG QUOTE-FLAG <>>\n\t <SETG P-OFLAG <>>>"
  },
  "SYNTAX-CHECK": {
   "name": "SYNTAX-CHECK",
   "file": "parser.zil",
   "line": 691,
   "endLine": 760,
   "source": "<ROUTINE SYNTAX-CHECK (\"AUX\" SYN LEN NUM OBJ (DRIVE1 <>) (DRIVE2 <>)\n\t\t\t     PREP VERB) \n\t#DECL ((DRIVE1 DRIVE2) <OR FALSE <PRIMTYPE VECTOR>>\n\t       (SYN) <PRIMTYPE VECTOR> (LEN NUM VERB PREP) FIX\n\t       (OBJ) <OR FALSE OBJECT>)\n\t<COND (<0? <SET VERB <GET ,P-ITBL ,P-VERB>>>\n\t       <TELL ,SEEMS-TO-BE \"no verb in that sentence.\" CR>\n\t       <RFALSE>)>\n\t<SET SYN <GET ,VERBS <- 255 .VERB>>>\n\t<SET LEN <GETB .SYN 0>>\n\t<SET SYN <REST .SYN>>\n\t<REPEAT ()\n\t\t<SET NUM <BAND <GETB .SYN ,P-SBITS> ,P-SONUMS>>\n\t\t<COND (<G? ,P-NCN .NUM> T) ;\"Added 4/27/83\"\n\t\t      (<AND <NOT <L? .NUM 1>>\n\t\t\t    <0? ,P-NCN>\n\t\t\t    <OR <0? <SET PREP <GET ,P-ITBL ,P-PREP1>>>\n\t\t\t\t<==? .PREP <GETB .SYN ,P-SPREP1>>>>\n\t\t       <SET DRIVE1 .SYN>)\n\t\t      (<==? <GETB .SYN ,P-SPREP1> <GET ,P-ITBL ,P-PREP1>>\n\t\t       <COND (<AND <==? .NUM 2> <==? ,P-NCN 1>>\n\t\t\t      <SET DRIVE2 .SYN>)\n\t\t\t     (<==? <GETB .SYN ,P-SPREP2>\n\t\t\t\t   <GET ,P-ITBL ,P-PREP2>>\n\t\t\t      <SYNTAX-FOUND .SYN>\n\t\t\t      <RTRUE>)>)>\n\t\t<COND (<DLESS? LEN 1>\n\t\t       <COND (<OR .DRIVE1 .DRIVE2> <RETURN>)\n\t\t\t     (T\n\t\t\t      <TELL ,SORRY-I-DONT CR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T <SET SYN <REST .SYN ,P-SYNLEN>>)>>\n\t<COND (<AND .DRIVE1\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE1 ,P-SFWIM1>\n\t\t\t       <GETB .DRIVE1 ,P-SLOC1>\n\t\t\t       <GETB .DRIVE1 ,P-SPREP1>>>>\n\t       <PUT ,P-PRSO ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSO 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE1>)\n\t      (<AND .DRIVE2\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE2 ,P-SFWIM2>\n\t\t\t       <GETB .DRIVE2 ,P-SLOC2>\n\t\t\t       <GETB .DRIVE2 ,P-SPREP2>>>>\n\t       <PUT ,P-PRSI ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSI 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE2>)\n\t      (<EQUAL? .VERB ,ACT?FIND ,ACT?WHAT>\n\t       <TELL \"Sorry, but I can't answer that question.\" CR>\n\t       <RFALSE>)\n\t      (T\n\t       <COND (<EQUAL? ,WINNER ,PLAYER>\n\t\t      <ORPHAN .DRIVE1 .DRIVE2>\n\t\t      <TELL \"What do you want to \">)\n\t\t     (T\n\t\t      <TELL \n\"Next time, say what you want \" D ,WINNER \" to \">)>\n\t       <VERB-PRINT ,P-ITBL>\n\t       <COND (.DRIVE2\n\t\t      <CLAUSE-PRINT ,P-NC1 ,P-NC1L>)>\n\t       <PREP-PRINT <COND (.DRIVE1 <GETB .DRIVE1 ,P-SPREP1>)\n\t\t\t\t (T <GETB .DRIVE2 ,P-SPREP2>)>>\n\t       <COND (<EQUAL? ,WINNER ,PLAYER>\n\t\t      <SETG P-OFLAG T>\n\t\t      <TELL \"?\" CR>)\n\t\t     (T\n\t\t      <SETG P-OFLAG <>>\n\t\t      <TELL \".\" CR>)>\n\t       <RFALSE>)>>"
  },
  "VERB-PRINT": {
   "name": "VERB-PRINT",
   "file": "parser.zil",
   "line": 767,
   "endLine": 774,
   "source": "<ROUTINE VERB-PRINT (TBL \"AUX\" TMP)\n\t<SET TMP <GET .TBL ,P-VERBN>>\n\t<COND (<==? .TMP 0> <TELL \"tell\">)\n\t      (<0? <GETB ,P-VTBL 2>>\n\t       <PRINTB <GET .TMP 0>>)\n\t      (T\n\t       <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>\n\t       <PUTB ,P-VTBL 2 0>)>>"
  },
  "ORPHAN": {
   "name": "ORPHAN",
   "file": "parser.zil",
   "line": 776,
   "endLine": 804,
   "source": "<ROUTINE ORPHAN (D1 D2 \"AUX\" (CNT -1)) \n\t#DECL ((D1 D2) <OR FALSE <PRIMTYPE VECTOR>>)\n\t<COND (<NOT ,P-MERGED>\n\t       <PUT ,P-OCLAUSE ,P-MATCHLEN 0>)>\n\t<PUT ,P-OVTBL 0 <GET ,P-VTBL 0>>\n\t<PUTB ,P-OVTBL 2 <GETB ,P-VTBL 2>>\n\t<PUTB ,P-OVTBL 3 <GETB ,P-VTBL 3>>\n\t;<SETG P-CCSRC ,P-ITBL>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT ,P-ITBLLEN> <RETURN>)\n\t\t      (T <PUT ,P-OTBL .CNT <GET ,P-ITBL .CNT>>)>>\n\t<COND (<==? ,P-NCN 2>\n\t       <PUT ,P-CCTBL ,CC-SBPTR ,P-NC2>\n\t       <PUT ,P-CCTBL ,CC-SEPTR ,P-NC2L>\n\t       <PUT ,P-CCTBL ,CC-DBPTR ,P-NC2>\n\t       <PUT ,P-CCTBL ,CC-DEPTR ,P-NC2L>\n\t       <CLAUSE-COPY ,P-ITBL ,P-OTBL>)>\n\t<COND (<NOT <L? ,P-NCN 1>>\n\t       <PUT ,P-CCTBL ,CC-SBPTR ,P-NC1>\n\t       <PUT ,P-CCTBL ,CC-SEPTR ,P-NC1L>\n\t       <PUT ,P-CCTBL ,CC-DBPTR ,P-NC1>\n\t       <PUT ,P-CCTBL ,CC-DEPTR ,P-NC1L>\n\t       <CLAUSE-COPY ,P-ITBL ,P-OTBL>)>\n\t<COND (.D1\n\t       <PUT ,P-OTBL ,P-PREP1 <GETB .D1 ,P-SPREP1>>\n\t       <PUT ,P-OTBL ,P-NC1 1>)\n\t      (.D2\n\t       <PUT ,P-OTBL ,P-PREP2 <GETB .D2 ,P-SPREP2>>\n\t       <PUT ,P-OTBL ,P-NC2 1>)>> "
  },
  "CLAUSE-PRINT": {
   "name": "CLAUSE-PRINT",
   "file": "parser.zil",
   "line": 806,
   "endLine": 807,
   "source": "<ROUTINE CLAUSE-PRINT (BPTR EPTR \"OPTIONAL\" (THE? T)) \n\t<BUFFER-PRINT <GET ,P-ITBL .BPTR> <GET ,P-ITBL .EPTR> .THE?>>    "
  },
  "BUFFER-PRINT": {
   "name": "BUFFER-PRINT",
   "file": "parser.zil",
   "line": 809,
   "endLine": 839,
   "source": "<ROUTINE BUFFER-PRINT (BEG END CP \"AUX\" (NOSP <>) WRD (FIRST?? T) (PN <>))\n\t #DECL ((BEG END) <PRIMTYPE VECTOR> (CP) <OR FALSE ATOM>)\n\t <REPEAT ()\n\t\t<COND (<==? .BEG .END> <RETURN>)\n\t\t      (T\n\t\t       <COND (.NOSP <SET NOSP <>>)\n\t\t\t     (T <TELL \" \">)>\n\t\t       <COND (<==? <SET WRD <GET .BEG 0>> ,W?PERIOD>\n\t\t\t      <SET NOSP T>)\n\t\t\t     (<==? .WRD ,W?MRS> <TELL \"Mrs.\"> <SET PN T>)\n\t\t\t     (<==? .WRD ,W?MS> <TELL \"Ms.\"> <SET PN T>)\n\t\t\t     (<==? .WRD ,W?MR> <TELL \"Mr.\"> <SET PN T>)\n\t\t\t     (<==? .WRD ,W?COL> <TELL \"Col.\"> <SET PN T>)\n\t\t\t     (<OR <EQUAL? .WRD ,W?ASHCROFT ,W?WELLMAN ;\"ETC\">\n\t\t\t\t  <EQUAL? .WRD ,W?DUFFY>>\n\t\t\t      <CAPITALIZE .BEG>\n\t\t\t      <SET PN T>)\n\t\t\t     (T\n\t\t\t      <COND (<AND .FIRST?? <NOT .PN> .CP>\n\t\t\t\t     <TELL \"the \">)>\n\t\t\t      <COND (<OR ,P-OFLAG ,P-MERGED> <PRINTB .WRD>)\n\t\t\t\t    (<AND <==? .WRD ,W?IT>\n\t\t\t\t\t  <==? ,P-IT-LOC ,HERE>>\n\t\t\t\t     <TELL D ,P-IT-OBJECT>)\n\t\t\t\t    (<AND <EQUAL? .WRD ,W?HIM ,W?HER>\n\t\t\t\t\t  <==? ,P-HIM-HER-LOC ,HERE>>\n\t\t\t\t     <TELL D ,P-HIM-HER>)\n\t\t\t\t    (T\n\t\t\t\t     <WORD-PRINT <GETB .BEG 2> <GETB .BEG 3>>)>\n\t\t\t      <SET FIRST?? <>>)>)>\n\t\t<SET BEG <REST .BEG ,P-WORDLEN>>>>"
  },
  "CAPITALIZE": {
   "name": "CAPITALIZE",
   "file": "parser.zil",
   "line": 841,
   "endLine": 843,
   "source": "<ROUTINE CAPITALIZE (PTR)\n\t <PRINTC <- <GETB ,P-INBUF <GETB .PTR 3>> 32>>\n\t <WORD-PRINT <- <GETB .PTR 2> 1> <+ <GETB .PTR 3> 1>>>"
  },
  "PREP-PRINT": {
   "name": "PREP-PRINT",
   "file": "parser.zil",
   "line": 845,
   "endLine": 854,
   "source": "<ROUTINE PREP-PRINT (PREP \"AUX\" WRD) \n\t#DECL ((PREP) FIX)\n\t<COND (<NOT <0? .PREP>>\n\t       <TELL \" \">\n\t       <SET WRD <PREP-FIND .PREP>>\n\t       <COND ;(<==? .WRD ,W?AGAINST> <TELL \"against\">)\n\t\t     (T <PRINTB .WRD>)>\n\t       <COND (<AND <==? ,W?SIT <GET <GET ,P-ITBL ,P-VERBN> 0>>\n\t\t\t   <==? ,W?DOWN .WRD>>\t;\"Will it ever work? --SWG\"\n\t\t      <TELL \" on\">)>)>>    "
  },
  "CLAUSE-COPY": {
   "name": "CLAUSE-COPY",
   "file": "parser.zil",
   "line": 864,
   "endLine": 883,
   "source": "<ROUTINE CLAUSE-COPY (SRC DEST \"OPTIONAL\" (INSRT <>) \"AUX\" BEG END)\n\t<SET BEG <GET .SRC <GET ,P-CCTBL ,CC-SBPTR>>>\n\t<SET END <GET .SRC <GET ,P-CCTBL ,CC-SEPTR>>>\n\t<PUT .DEST\n\t     <GET ,P-CCTBL ,CC-DBPTR>\n\t     <REST ,P-OCLAUSE\n\t\t   <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN> 2>>>\n\t<REPEAT ()\n\t\t<COND (<==? .BEG .END>\n\t\t       <PUT .DEST\n\t\t\t    <GET ,P-CCTBL ,CC-DEPTR>\n\t\t\t    <REST ,P-OCLAUSE\n\t\t\t\t  <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN>\n\t\t\t\t     2>>>\n\t\t       <RETURN>)\n\t\t      (T\n\t\t       <COND (<AND .INSRT <==? ,P-ANAM <GET .BEG 0>>>\n\t\t\t      <CLAUSE-ADD .INSRT>)>\n\t\t       <CLAUSE-ADD <GET .BEG 0>>)>\n\t\t<SET BEG <REST .BEG ,P-WORDLEN>>>>"
  },
  "CLAUSE-ADD": {
   "name": "CLAUSE-ADD",
   "file": "parser.zil",
   "line": 909,
   "endLine": 914,
   "source": "<ROUTINE CLAUSE-ADD (WRD \"AUX\" PTR) \n\t#DECL ((WRD) TABLE (PTR) FIX)\n\t<SET PTR <+ <GET ,P-OCLAUSE ,P-MATCHLEN> 2>>\n\t<PUT ,P-OCLAUSE <- .PTR 1> .WRD>\n\t<PUT ,P-OCLAUSE .PTR 0>\n\t<PUT ,P-OCLAUSE ,P-MATCHLEN .PTR>>   "
  },
  "PREP-FIND": {
   "name": "PREP-FIND",
   "file": "parser.zil",
   "line": 916,
   "endLine": 922,
   "source": "<ROUTINE PREP-FIND (PREP \"AUX\" (CNT 0) SIZE) \n\t#DECL ((PREP CNT SIZE) FIX)\n\t<SET SIZE <* <GET ,PREPOSITIONS 0> 2>>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT .SIZE> <RFALSE>)\n\t\t      (<==? <GET ,PREPOSITIONS .CNT> .PREP>\n\t\t       <RETURN <GET ,PREPOSITIONS <- .CNT 1>>>)>>>  "
  },
  "SYNTAX-FOUND": {
   "name": "SYNTAX-FOUND",
   "file": "parser.zil",
   "line": 924,
   "endLine": 927,
   "source": "<ROUTINE SYNTAX-FOUND (SYN) \n\t#DECL ((SYN) <PRIMTYPE VECTOR>)\n\t<SETG P-SYNTAX .SYN>\n\t<SETG PRSA <GETB .SYN ,P-SACTION>>>   "
  },
  "GWIM": {
   "name": "GWIM",
   "file": "parser.zil",
   "line": 931,
   "endLine": 952,
   "source": "<ROUTINE GWIM (GBIT LBIT PREP \"AUX\" OBJ) \n\t#DECL ((GBIT LBIT) FIX (OBJ) OBJECT)\n\t<COND (<==? .GBIT ,RMUNGBIT>\n\t       <RETURN ,ROOMS>)>\n\t<SETG P-GWIMBIT .GBIT>\n\t<SETG P-SLOCBITS .LBIT>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<COND (<GET-OBJECT ,P-MERGE <>>\n\t       <SETG P-GWIMBIT 0>\n\t       <COND (<==? <GET ,P-MERGE ,P-MATCHLEN> 1>\n\t\t      <SET OBJ <GET ,P-MERGE 1>>\n\t\t      <TELL \"(\">\n\t\t      <COND (<NOT <0? .PREP>>\n\t\t\t     <PRINTB <PREP-FIND .PREP>>\n\t\t\t     <COND (<AND <EQUAL? .PREP ,W?DOWN>\n\t\t\t\t\t <FSET? .OBJ ,FURNITURE>>\n\t\t\t\t    <TELL \" on\">)>\n\t\t\t     <THE? .OBJ>\n\t\t\t     <TELL \" \">)>\n\t\t      <TELL D .OBJ \")\" CR>\n\t\t      .OBJ)>)\n\t      (T <SETG P-GWIMBIT 0> <RFALSE>)>>   "
  },
  "SNARF-OBJECTS": {
   "name": "SNARF-OBJECTS",
   "file": "parser.zil",
   "line": 954,
   "endLine": 968,
   "source": "<ROUTINE SNARF-OBJECTS (\"AUX\" PTR) \n\t#DECL ((PTR) <OR FIX <PRIMTYPE VECTOR>>)\n\t<COND (<NOT <==? <SET PTR <GET ,P-ITBL ,P-NC1>> 0>>\n\t       <SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC1>>\n\t       <OR <SNARFEM .PTR <GET ,P-ITBL ,P-NC1L> ,P-PRSO> <RFALSE>>\n\t       <OR <0? <GET ,P-BUTS ,P-MATCHLEN>>\n\t\t   <SETG P-PRSO <BUT-MERGE ,P-PRSO>>>)>\n\t<COND (<NOT <==? <SET PTR <GET ,P-ITBL ,P-NC2>> 0>>\n\t       <SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC2>>\n\t       <OR <SNARFEM .PTR <GET ,P-ITBL ,P-NC2L> ,P-PRSI> <RFALSE>>\n\t       <COND (<NOT <0? <GET ,P-BUTS ,P-MATCHLEN>>>\n\t\t      <COND (<==? <GET ,P-PRSI ,P-MATCHLEN> 1>\n\t\t\t     <SETG P-PRSO <BUT-MERGE ,P-PRSO>>)\n\t\t\t    (T <SETG P-PRSI <BUT-MERGE ,P-PRSI>>)>)>)>\n\t<RTRUE>>  "
  },
  "BUT-MERGE": {
   "name": "BUT-MERGE",
   "file": "parser.zil",
   "line": 970,
   "endLine": 984,
   "source": "<ROUTINE BUT-MERGE (TBL \"AUX\" LEN BUTLEN (CNT 1) (MATCHES 0) OBJ NTBL) \n\t#DECL ((TBL NTBL) TABLE (LEN BUTLEN MATCHES) FIX (OBJ) OBJECT)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<REPEAT ()\n\t\t<COND (<DLESS? LEN 0> <RETURN>)\n\t\t      (<ZMEMQ <SET OBJ <GET .TBL .CNT>> ,P-BUTS>)\n\t\t      (T\n\t\t       <PUT ,P-MERGE <+ .MATCHES 1> .OBJ>\n\t\t       <SET MATCHES <+ .MATCHES 1>>)>\n\t\t<SET CNT <+ .CNT 1>>>\n\t<PUT ,P-MERGE ,P-MATCHLEN .MATCHES>\n\t<SET NTBL ,P-MERGE>\n\t<SETG P-MERGE .TBL>\n\t.NTBL>    "
  },
  "SNARFEM": {
   "name": "SNARFEM",
   "file": "parser.zil",
   "line": 1021,
   "endLine": 1076,
   "source": "<ROUTINE SNARFEM (PTR EPTR TBL \"AUX\" (AND <>) (BUT <>) LEN WV WORD NW\n\t\t  (WAS-ALL <>)) \n   #DECL ((TBL) TABLE (PTR EPTR) <PRIMTYPE VECTOR> (AND) <OR ATOM FALSE>\n\t  (BUT) <OR FALSE TABLE> (WV) <OR FALSE FIX ATOM>)\n   <SETG P-AND <>>\n   <COND (<==? ,P-GETFLAGS ,P-ALL> <SET WAS-ALL T>)>\n   <SETG P-GETFLAGS 0>\n   <SETG P-CSPTR .PTR>\n   <SETG P-CEPTR .EPTR>\n   <PUT ,P-BUTS ,P-MATCHLEN 0>\n   <PUT .TBL ,P-MATCHLEN 0>\n   <SET WORD <GET .PTR 0>>\n   <REPEAT ()\n\t   <COND (<==? .PTR .EPTR>\n\t\t  <SET WV <GET-OBJECT <OR .BUT .TBL>>>\n\t\t  <COND (.WAS-ALL <SETG P-GETFLAGS ,P-ALL>)>\n\t\t  <RETURN .WV>)\n\t\t (T\n\t\t  <SET NW <GET .PTR ,P-LEXELEN>>\n\t\t  <COND (<==? .WORD ,W?ALL>\n\t\t\t <SETG P-GETFLAGS ,P-ALL>\n\t\t\t <COND (<==? .NW ,W?OF>\n\t\t\t\t<SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t(<EQUAL? .WORD ,W?BUT ,W?EXCEPT>\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t <SET BUT ,P-BUTS>\n\t\t\t <PUT .BUT ,P-MATCHLEN 0>)\n\t\t\t(<EQUAL? .WORD ,W?A ,W?ONE>\n\t\t\t <COND (<NOT ,P-ADJ>\n\t\t\t\t<SETG P-GETFLAGS ,P-ONE>\n\t\t\t\t<COND (<==? .NW ,W?OF>\n\t\t\t\t       <SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t       (T\n\t\t\t\t<SETG P-NAM ,P-ONEOBJ>\n\t\t\t\t<OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t\t<AND <0? .NW> <RTRUE>>)>)\n\t\t\t(<AND <EQUAL? .WORD ,W?AND ,W?COMMA>\n\t\t\t      <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t <SETG P-AND T>\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t T)\n\t\t\t(<WT? .WORD ,PS?BUZZ-WORD>)\n\t\t\t(<EQUAL? .WORD ,W?AND ,W?COMMA>)\n\t\t\t(<==? .WORD ,W?OF>\n\t\t\t <COND (<0? ,P-GETFLAGS>\n\t\t\t\t<SETG P-GETFLAGS ,P-INHIBIT>)>)\n\t\t\t(<AND <SET WV <WT? .WORD ,PS?ADJECTIVE ,P1?ADJECTIVE>>\n\t\t\t      <NOT ,P-ADJ>>\n\t\t\t <SETG P-ADJ .WV>\n\t\t\t <SETG P-ADJN .WORD>)\n\t\t\t(<WT? .WORD ,PS?OBJECT ,P1?OBJECT>\n\t\t\t <SETG P-NAM .WORD>\n\t\t\t <SETG P-ONEOBJ .WORD>)>)>\n\t   <COND (<NOT <==? .PTR .EPTR>>\n\t\t  <SET PTR <REST .PTR ,P-WORDLEN>>\n\t\t  <SET WORD .NW>)>>>   "
  },
  "TELL-NO-NOUNS": {
   "name": "TELL-NO-NOUNS",
   "file": "parser.zil",
   "line": 1086,
   "endLine": 1087,
   "source": "<ROUTINE TELL-NO-NOUNS ()\n\t <TELL \"There aren't enough nouns in that sentence.\" CR>>"
  },
  "GET-OBJECT": {
   "name": "GET-OBJECT",
   "file": "parser.zil",
   "line": 1091,
   "endLine": 1186,
   "source": "<ROUTINE GET-OBJECT (TBL\n\t\t    \"OPTIONAL\" (VRB T)\n\t\t    \"AUX\" BITS LEN XBITS TLEN (GCHECK <>) (OLEN 0) OBJ)\n\t#DECL ((TBL) TABLE (XBITS BITS TLEN LEN) FIX (GWIM) <OR FALSE FIX>\n\t       (VRB GCHECK) <OR ATOM FALSE>)\n <SET XBITS ,P-SLOCBITS>\n <SET TLEN <GET .TBL ,P-MATCHLEN>>\n <COND (<BTST ,P-GETFLAGS ,P-INHIBIT> <RTRUE>)>\n <COND (<AND <NOT ,P-NAM> ,P-ADJ <WT? ,P-ADJN ,PS?OBJECT ,P1?OBJECT>>\n\t<SETG P-NAM ,P-ADJN>\n\t<SETG P-ADJ <>>)>\n <COND (<AND <NOT ,P-NAM>\n\t     <NOT ,P-ADJ>\n\t     <NOT <==? ,P-GETFLAGS ,P-ALL>>\n\t     <0? ,P-GWIMBIT>>\n\t<COND (.VRB\n\t       <TELL-NO-NOUNS>)>\n\t<RFALSE>)>\n <COND (<OR <NOT <==? ,P-GETFLAGS ,P-ALL>> <0? ,P-SLOCBITS>>\n\t<SETG P-SLOCBITS -1>)>\n <SETG P-TABLE .TBL>\n <PROG ()\n  <COND (.GCHECK <GLOBAL-CHECK .TBL>)\n\t(T\n\t <FCLEAR ,PLAYER ,TRANSBIT>\n\t <DO-SL ,HERE ,SOG ,SIR>\n\t <FSET ,PLAYER ,TRANSBIT>\n\t <DO-SL ,PLAYER ,SH ,SC>)>\n  <SET LEN <- <GET .TBL ,P-MATCHLEN> .TLEN>>\n  <COND (<BTST ,P-GETFLAGS ,P-ALL>)\n\t(<AND <BTST ,P-GETFLAGS ,P-ONE>\n\t      <NOT <0? .LEN>>>\n\t <COND (<NOT <==? .LEN 1>>\n\t\t<PUT .TBL 1 <GET .TBL <RANDOM .LEN>>>\n\t\t<TELL \"How about the \" D <GET .TBL 1> \"?\" CR>)>\n\t <PUT .TBL ,P-MATCHLEN 1>)\n\t(<OR <G? .LEN 1>\n\t     <AND <0? .LEN> <NOT <==? ,P-SLOCBITS -1>>>>\n\t <COND (<==? ,P-SLOCBITS -1>\n\t\t<SETG P-SLOCBITS .XBITS>\n\t\t<SET OLEN .LEN>\n\t\t<PUT .TBL ,P-MATCHLEN <- <GET .TBL ,P-MATCHLEN> .LEN>>\n\t\t<AGAIN>)\n\t       (T\n\t\t<COND (<0? .LEN> <SET LEN .OLEN>)>\n\t\t<COND (<AND ,P-NAM\n\t\t\t    ;<VERB? ASK-ABOUT ASK-CONTEXT-ABOUT TELL-ME WHAT\n\t\t\t\t   GIVE SGIVE ASK-FOR ASK-CONTEXT-FOR TAKE\n\t\t\t\t   FIND SEARCH SEARCH-OBJECT-FOR\n\t\t\t\t   MAKE DISEMBARK>\n\t\t\t    <SET OBJ <GET .TBL <+ .TLEN 1>>>\n\t\t\t    <SET OBJ\n\t\t\t\t <APPLY <GETP .OBJ ,P?GENERIC>\n\t\t\t\t\t,P-NAM>>>\n\t\t       <COND (<==? .OBJ ,NOT-HERE-OBJECT> <RFALSE>)>\n\t\t       <PUT .TBL 1 .OBJ>\n\t\t       <PUT .TBL ,P-MATCHLEN 1>\n\t\t       <SETG P-NAM <>>\n\t\t       <SETG P-ADJ <>>\n\t\t       <RTRUE>)\n\t\t      (<AND .VRB ,P-NAM>\n\t\t       <WHICH-PRINT .TLEN .LEN .TBL>\n\t\t       <SETG P-ACLAUSE\n\t\t\t     <COND (<==? .TBL ,P-PRSO> ,P-NC1)\n\t\t\t\t   (T ,P-NC2)>>\n\t\t       <SETG P-AADJ ,P-ADJ>\n\t\t       <SETG P-ANAM ,P-NAM>\n\t\t       <ORPHAN <> <>>\n\t\t       <SETG P-OFLAG T>)\n\t\t      (.VRB\n\t\t       <TELL-NO-NOUNS>)>\n\t\t<SETG P-NAM <>>\n\t\t<SETG P-ADJ <>>\n\t\t<RFALSE>)>)\n\t(<AND <0? .LEN> .GCHECK>\n\t <SETG P-SLOCBITS .XBITS>\n\t <COND (.VRB\n\t\t;\"Changed 6/10/83 - MARC\"\n\t\t<OBJ-FOUND ,NOT-HERE-OBJECT .TBL>\n\t\t;<PUT .TBL ,P-MATCHLEN 1>\n\t\t;<PUT .TBL 1 ,NOT-HERE-OBJECT>\n\t\t<SETG P-XNAM ,P-NAM>\n\t\t<SETG P-XADJ ,P-ADJ>\n\t\t<SETG P-XADJN ,P-ADJN>\n\t\t<SETG P-NAM <>>\n\t\t<SETG P-ADJ <>>\n\t\t<SETG P-ADJN <>>\n\t\t<RTRUE>)>\n\t <SETG P-NAM <>>\n\t <SETG P-ADJ <>>\n\t <RFALSE>)\n\t(<0? .LEN> <SET GCHECK T> <AGAIN>)>\n  <SETG P-SLOCBITS .XBITS>\n  <SETG P-NAM <>>\n  <SETG P-ADJ <>>\n  <RTRUE>>>"
  },
  "MOBY-FIND": {
   "name": "MOBY-FIND",
   "file": "parser.zil",
   "line": 1188,
   "endLine": 1208,
   "source": "<ROUTINE MOBY-FIND (TBL \"AUX\" FOO LEN)\n\t <SETG P-MOBY-FLAG T>\n\t <SETG P-TABLE .TBL>\n\t <SETG P-SLOCBITS -1>\n\t <SETG P-NAM ,P-XNAM>\n\t <SETG P-ADJ ,P-XADJ>\n\t <PUT .TBL ,P-MATCHLEN 0>\n\t <SET FOO <FIRST? ,ROOMS>>\n\t <REPEAT ()\n\t\t <COND (<NOT .FOO> <RETURN>)\n\t\t       (T\n\t\t\t<SEARCH-LIST .FOO .TBL ,P-SRCALL>\n\t\t\t<SET FOO <NEXT? .FOO>>)>>\n\t <COND (<EQUAL? <SET LEN <GET .TBL ,P-MATCHLEN>> 0>\n\t\t<DO-SL ,LOCAL-GLOBALS 1 1>)>\n\t <COND (<EQUAL? <SET LEN <GET .TBL ,P-MATCHLEN>> 0>\n\t\t<DO-SL ,ROOMS 1 1>)>\n\t <COND (<EQUAL? <SET LEN <GET .TBL ,P-MATCHLEN>> 1>\n\t\t<SETG P-MOBY-FOUND <GET .TBL 1>>)>\n\t <SETG P-MOBY-FLAG <>>\n\t .LEN>"
  },
  "WHICH-PRINT": {
   "name": "WHICH-PRINT",
   "file": "parser.zil",
   "line": 1214,
   "endLine": 1236,
   "source": "<ROUTINE WHICH-PRINT (TLEN LEN TBL \"AUX\" OBJ RLEN)\n\t <SET RLEN .LEN>\n\t <COND (<EQUAL? ,WINNER ,PLAYER>\n\t\t<TELL \"Which\">)\n\t       (ELSE\n\t\t<TELL \"Tell \" THE ,WINNER \" which\">)>\n         <COND (<OR ,P-OFLAG ,P-MERGED ,P-AND> <TELL \" \"> <PRINTB ,P-NAM>)\n\t       (<==? .TBL ,P-PRSO>\n\t\t<CLAUSE-PRINT ,P-NC1 ,P-NC1L <>>)\n\t       (T <CLAUSE-PRINT ,P-NC2 ,P-NC2L <>>)>\n\t <COND (<EQUAL? ,WINNER ,PLAYER> <TELL \" do\">)>\n\t <TELL \" you mean,\">\n\t <REPEAT ()\n\t\t <SET TLEN <+ .TLEN 1>>\n\t\t <SET OBJ <GET .TBL .TLEN>>\n\t\t <TELL \" \" THE .OBJ>\n\t\t <COND (<==? .LEN 2>\n\t\t\t<COND (<NOT <==? .RLEN 2>> <TELL \",\">)>\n\t\t\t<TELL \" or\">)\n\t\t       (<G? .LEN 2> <TELL \",\">)>\n\t\t <COND (<L? <SET LEN <- .LEN 1>> 1>\n\t\t\t<RETURN>)>>\n\t <TELL \"?\" CR>>"
  },
  "GLOBAL-CHECK": {
   "name": "GLOBAL-CHECK",
   "file": "parser.zil",
   "line": 1239,
   "endLine": 1268,
   "source": "<ROUTINE GLOBAL-CHECK (TBL \"AUX\" LEN RMG RMGL (CNT 0) OBJ OBITS FOO) \n\t#DECL ((TBL) TABLE (RMG) <OR FALSE TABLE> (RMGL CNT) FIX (OBJ) OBJECT)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<SET OBITS ,P-SLOCBITS>\n\t<COND (<SET RMG <GETPT ,HERE ,P?GLOBAL>>\n\t       <SET RMGL <- <PTSIZE .RMG> 1>>\n\t       <REPEAT ()\n\t\t       <COND (<THIS-IT? <SET OBJ <GETB .RMG .CNT>> .TBL>\n\t\t\t      <OBJ-FOUND .OBJ .TBL>)>\n\t\t       <COND (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<SET RMG <GETPT ,HERE ,P?PSEUDO>>\n\t       <SET RMGL <- </ <PTSIZE .RMG> 4> 1>>\n\t       <SET CNT 0>\n\t       <REPEAT ()\n\t\t       <COND (<==? ,P-NAM <GET .RMG <* .CNT 2>>>\n\t\t\t      <PUTP ,PSEUDO-OBJECT\n\t\t\t\t    ,P?ACTION\n\t\t\t\t    <GET .RMG <+ <* .CNT 2> 1>>>\n\t\t\t      <SET FOO\n\t\t\t\t   <BACK <GETPT ,PSEUDO-OBJECT ,P?ACTION> 5>>\n\t\t\t      <PUT .FOO 0 <GET ,P-NAM 0>>\n\t\t\t      <PUT .FOO 1 <GET ,P-NAM 1>>\n\t\t\t      <OBJ-FOUND ,PSEUDO-OBJECT .TBL>\n\t\t\t      <RETURN>)\n\t\t             (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<==? <GET .TBL ,P-MATCHLEN> .LEN>\n\t       <SETG P-SLOCBITS -1>\n\t       <SETG P-TABLE .TBL>\n\t       <DO-SL ,GLOBAL-OBJECTS 1 1>\n\t       <SETG P-SLOCBITS .OBITS>)>>"
  },
  "DO-SL": {
   "name": "DO-SL",
   "file": "parser.zil",
   "line": 1270,
   "endLine": 1280,
   "source": "<ROUTINE DO-SL (OBJ BIT1 BIT2 \"AUX\" BITS) \n\t#DECL ((OBJ) OBJECT (BIT1 BIT2 BITS) FIX)\n\t<COND (<AND <NOT <EQUAL? .OBJ ,ROOMS>>\n\t\t    <BTST ,P-SLOCBITS <+ .BIT1 .BIT2>>>\n\t       <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCALL>)\n\t      (T\n\t       <COND (<BTST ,P-SLOCBITS .BIT1>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCTOP>)\n\t\t     (<BTST ,P-SLOCBITS .BIT2>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCBOT>)\n\t\t     (T <RTRUE>)>)>>  "
  },
  "SEARCH-LIST": {
   "name": "SEARCH-LIST",
   "file": "parser.zil",
   "line": 1288,
   "endLine": 1309,
   "source": "<ROUTINE SEARCH-LIST (OBJ TBL LVL \"AUX\" FLS ;NOBJ) \n\t#DECL ((OBJ ;NOBJ) <OR FALSE OBJECT> (TBL) TABLE (LVL) FIX (FLS) ANY)\n <COND (<SET OBJ <FIRST? .OBJ>>\n\t<REPEAT ()\n\t\t<COND (<AND <NOT <==? .LVL ,P-SRCBOT>>\n\t\t\t    <GETPT .OBJ ,P?SYNONYM>\n\t\t\t    <THIS-IT? .OBJ .TBL>>\n\t\t       <OBJ-FOUND .OBJ .TBL>)>\n\t\t<COND (<AND <OR <NOT <==? .LVL ,P-SRCTOP>>\n\t\t\t\t<FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t<FSET? .OBJ ,SURFACEBIT>>\n\t\t\t    <FIRST? .OBJ> ;<SET NOBJ <FIRST? .OBJ>>\n\t\t\t    <NOT <EQUAL? .OBJ ,PLAYER ,LOCAL-GLOBALS>>\n\t\t\t    <OR <FSET? .OBJ ,OPENBIT>\n\t\t\t\t<FSET? .OBJ ,TRANSBIT>\n\t\t\t\t,P-MOBY-FLAG>>\n\t\t       <SET FLS\n\t\t        <SEARCH-LIST .OBJ .TBL\n\t\t\t\t    <COND (<FSET? .OBJ ,SURFACEBIT> ,P-SRCALL)\n\t\t\t\t\t  (<FSET? .OBJ ,SEARCHBIT> ,P-SRCALL)\n\t\t\t\t\t  (T ,P-SRCTOP)>>>)>\n\t\t<COND (<SET OBJ <NEXT? .OBJ>>) (T <RETURN>)>>)>>"
  },
  "THIS-IT?": {
   "name": "THIS-IT?",
   "file": "parser.zil",
   "line": 1311,
   "endLine": 1324,
   "source": "<ROUTINE THIS-IT? (OBJ TBL \"AUX\" SYNS) \n <COND (<FSET? .OBJ ,INVISIBLE> <RFALSE>)\n       (<AND ,P-NAM\n\t     <NOT <ZMEMQ ,P-NAM\n\t\t\t <SET SYNS <GETPT .OBJ ,P?SYNONYM>>\n\t\t\t <- </ <PTSIZE .SYNS> 2> 1>>>>\n\t<RFALSE>)\n       (<AND ,P-ADJ\n\t     <OR <NOT <SET SYNS <GETPT .OBJ ,P?ADJECTIVE>>>\n\t\t <NOT <ZMEMQB ,P-ADJ .SYNS <- <PTSIZE .SYNS> 1>>>>>\n\t<RFALSE>)\n       (<AND <NOT <0? ,P-GWIMBIT>> <NOT <FSET? .OBJ ,P-GWIMBIT>>>\n\t<RFALSE>)>\n <RTRUE>> "
  },
  "OBJ-FOUND": {
   "name": "OBJ-FOUND",
   "file": "parser.zil",
   "line": 1326,
   "endLine": 1330,
   "source": "<ROUTINE OBJ-FOUND (OBJ TBL \"AUX\" PTR) \n\t#DECL ((OBJ) OBJECT (TBL) TABLE (PTR) FIX)\n\t<SET PTR <GET .TBL ,P-MATCHLEN>>\n\t<PUT .TBL <+ .PTR 1> .OBJ>\n\t<PUT .TBL ,P-MATCHLEN <+ .PTR 1>>> "
  },
  "TAKE-CHECK": {
   "name": "TAKE-CHECK",
   "file": "parser.zil",
   "line": 1332,
   "endLine": 1334,
   "source": "<ROUTINE TAKE-CHECK () \n\t<AND <ITAKE-CHECK ,P-PRSO <GETB ,P-SYNTAX ,P-SLOC1>>\n\t     <ITAKE-CHECK ,P-PRSI <GETB ,P-SYNTAX ,P-SLOC2>>>> "
  },
  "ITAKE-CHECK": {
   "name": "ITAKE-CHECK",
   "file": "parser.zil",
   "line": 1336,
   "endLine": 1374,
   "source": "<ROUTINE ITAKE-CHECK (TBL BITS \"AUX\" PTR OBJ TAKEN) \n\t #DECL ((TBL) TABLE (BITS PTR) FIX (OBJ) OBJECT\n\t\t(TAKEN) <OR FALSE FIX ATOM>)\n\t <COND (<AND <SET PTR <GET .TBL ,P-MATCHLEN>>\n\t\t     <OR <BTST .BITS ,SHAVE>\n\t\t\t <BTST .BITS ,STAKE>>>\n\t\t<REPEAT ()\n\t\t\t<COND (<L? <SET PTR <- .PTR 1>> 0> <RETURN>)\n\t\t\t      (T\n\t\t\t       <SET OBJ <GET .TBL <+ .PTR 1>>>\n\t\t\t       <COND (<==? .OBJ ,IT> <SET OBJ ,P-IT-OBJECT>)\n\t\t\t\t     (<==? .OBJ ,HIM-HER>\n\t\t\t\t      <SET OBJ ,P-HIM-HER>)>\n\t\t\t       <COND (<NOT <HELD? .OBJ>>\n\t\t\t\t      <SETG PRSO .OBJ>\n\t\t\t\t      <COND (<FSET? .OBJ ,TRYTAKEBIT>\n\t\t\t\t\t     <SET TAKEN T>)\n\t\t\t\t\t    (<NOT <==? ,WINNER ,PLAYER>>\n\t\t\t\t\t     <SET TAKEN <>>)\n\t\t\t\t\t    (<AND <BTST .BITS ,STAKE>\n\t\t\t\t\t\t  <==? <ITAKE <>> T>>\n\t\t\t\t\t     <SET TAKEN <>>)\n\t\t\t\t\t    (T <SET TAKEN T>)>\n\t\t\t\t      <COND (<AND .TAKEN <BTST .BITS ,SHAVE>>\n\t\t\t\t\t     <TELL ,YOU-DONT-HAVE>\n\t\t\t\t\t     <COND (<EQUAL? .OBJ\n\t\t\t\t\t\t\t    ,NOT-HERE-OBJECT>\n\t\t\t\t\t\t    <TELL \"that\">)\n\t\t\t\t\t\t   (T\n\t\t\t\t\t\t    <THIS-IS-IT .OBJ>\n\t\t\t\t\t\t    <TELL THE .OBJ>)>\n\t\t\t\t\t     <TELL \".\">\n\t\t\t\t\t     <CRLF>\n\t\t\t\t\t     <RFALSE>)\n\t\t\t\t\t    (<AND <NOT .TAKEN>\n\t\t\t\t\t\t  <==? ,WINNER ,PLAYER>>\n\t\t\t\t             <TELL \"(taking \" THE .OBJ\n\t\t\t\t\t\t   \" first)\" CR>)>)>)>>)\n\t       (T)>>"
  },
  "MANY-CHECK": {
   "name": "MANY-CHECK",
   "file": "parser.zil",
   "line": 1376,
   "endLine": 1396,
   "source": "<ROUTINE MANY-CHECK (\"AUX\" (LOSS <>) TMP) \n\t#DECL ((LOSS) <OR FALSE FIX>)\n\t<COND (<AND <G? <GET ,P-PRSO ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC1> ,SMANY>>>\n\t       <SET LOSS 1>)\n\t      (<AND <G? <GET ,P-PRSI ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC2> ,SMANY>>>\n\t       <SET LOSS 2>)>\n\t<COND (.LOSS\n\t       <TELL \"You can't use multiple \">\n\t       <COND (<==? .LOSS 2> <TELL \"in\">)>\n\t       <TELL \"direct objects with \\\"\">\n\t       <SET TMP <GET ,P-ITBL ,P-VERBN>>\n\t       <COND (<0? .TMP> <TELL \"tell\">)\n\t\t     (<OR ,P-OFLAG ,P-MERGED>\n\t\t      <PRINTB <GET .TMP 0>>)\n\t\t     (T\n\t\t      <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>)>\n\t       <TELL \".\\\"\" CR>\n\t       <RFALSE>)\n\t      (T)>>  "
  },
  "ZMEMQ": {
   "name": "ZMEMQ",
   "file": "parser.zil",
   "line": 1398,
   "endLine": 1404,
   "source": "<ROUTINE ZMEMQ (ITM TBL \"OPTIONAL\" (SIZE -1) \"AUX\" (CNT 1)) \n\t<COND (<NOT .TBL> <RFALSE>)>\n\t<COND (<NOT <L? .SIZE 0>> <SET CNT 0>)\n\t      (ELSE <SET SIZE <GET .TBL 0>>)>\n\t<REPEAT ()\n\t\t<COND (<==? .ITM <GET .TBL .CNT>> <RTRUE>)\n\t\t      (<IGRTR? CNT .SIZE> <RFALSE>)>>>    "
  },
  "ZMEMQB": {
   "name": "ZMEMQB",
   "file": "parser.zil",
   "line": 1406,
   "endLine": 1410,
   "source": "<ROUTINE ZMEMQB (ITM TBL SIZE \"AUX\" (CNT 0)) \n\t#DECL ((ITM) ANY (TBL) TABLE (SIZE CNT) FIX)\n\t<REPEAT ()\n\t\t<COND (<==? .ITM <GETB .TBL .CNT>> <RTRUE>)\n\t\t      (<IGRTR? CNT .SIZE> <RFALSE>)>>>  "
  },
  "GLOBAL-PERSON-F": {
   "name": "GLOBAL-PERSON-F",
   "file": "people.zil",
   "line": 9,
   "endLine": 33,
   "source": "<ROUTINE GLOBAL-PERSON-F (\"AUX\" PER)\n\t <COND (<VERB? $CALL>\n\t\t<SET PER <CHARACTERIZE ,PRSO>>\n\t\t<COND (<NEARBY? .PER>\n\t\t       <PERFORM ,V?$CALL .PER>\n\t\t       <RTRUE>)\n\t\t      (ELSE <TELL-ISNT-HERE .PER>)>)\n\t       (<VERB? GIVE>\n\t\t<TELL-ISNT-HERE ,PRSI>)\n\t       (<VERB? SLAP MUNG KILL ATTACK DANCE HELP\n\t\t       ACCUSE SEARCH LOOK-INSIDE>\n\t\t<TELL-ISNT-HERE ,PRSO>)\n\t       (<OR <AND <VERB? SHOW REVEAL>\n\t\t\t <IN? ,PRSI ,GLOBAL-OBJECTS>\n\t\t\t <SET PER ,PRSI>>\n\t\t    <AND <VERB? ASK-ABOUT TELL-ME ;PHONE>\n\t\t\t <IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t\t <SET PER ,PRSO>>>\n\t\t<COND (<EQUAL? .PER ,ME> <RFALSE>)\n\t\t      (<NEARBY? .PER>\n\t\t       <TELL\nCD .PER \" is waiting for you to come justify your interruption.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"Your audience isn't listening.\" CR>)>)>>"
  },
  "TELL-ISNT-HERE": {
   "name": "TELL-ISNT-HERE",
   "file": "people.zil",
   "line": 38,
   "endLine": 39,
   "source": "<ROUTINE TELL-ISNT-HERE (PER)\n\t <TELL CTHE .PER ,ISNT-HERE CR>>"
  },
  "YOU-F": {
   "name": "YOU-F",
   "file": "people.zil",
   "line": 54,
   "endLine": 60,
   "source": "<ROUTINE YOU-F ()\n\t <COND (<AND <VERB? ASK-ABOUT> <EQUAL? ,PRSI ,YOU>>\n\t\t<PERFORM ,V?ASK-ABOUT ,PRSO ,PRSO>\n\t\t<RTRUE>)\n\t       (<AND <VERB? TELL-ME> <EQUAL? ,PRSI ,YOU>>\n\t\t<PERFORM ,V?TELL-ME ,PRSO ,WINNER>\n\t\t<RTRUE>)>>"
  },
  "LOCALIZE": {
   "name": "LOCALIZE",
   "file": "people.zil",
   "line": 66,
   "endLine": 71,
   "source": "<ROUTINE LOCALIZE (P)\n\t <COND (<AND <FSET? .P ,PERSON>\n\t\t     <IN? .P ,GLOBAL-OBJECTS>\n\t\t     <GETP .P ,P?CHARACTER>>\n\t\t<CHARACTERIZE .P>)\n\t       (ELSE .P)>>"
  },
  "CHARACTERIZE": {
   "name": "CHARACTERIZE",
   "file": "people.zil",
   "line": 73,
   "endLine": 75,
   "source": "<ROUTINE CHARACTERIZE (P)\n\t <COND (<FSET? .P ,PERSON>\n\t\t<GET ,CHARACTER-TABLE <GETP .P ,P?CHARACTER>>)>>"
  },
  "CHARACTERIZE?": {
   "name": "CHARACTERIZE?",
   "file": "people.zil",
   "line": 77,
   "endLine": 79,
   "source": "<ROUTINE CHARACTERIZE? (P)\n\t <COND (<SET P <GETP .P ,P?CHARACTER>>\n\t\t<GET ,CHARACTER-TABLE .P>)>>"
  },
  "OBJECT-PAIR-F": {
   "name": "OBJECT-PAIR-F",
   "file": "people.zil",
   "line": 81,
   "endLine": 103,
   "source": "<ROUTINE OBJECT-PAIR-F (\"AUX\" P1 P2)\n\t <COND (<VERB? ARREST>\n\t\t<TELL-YOU-CANT\n\"arrest anyone. Only the police can do that. Besides, this\nseems pretty far-fetched. It could only mean humiliation for you\">)\n\t       (<G? <GET ,P-PRSO ,P-MATCHLEN> 2>\n\t\t<COND (<VERB? EXAMINE COMPARE>\n\t\t       <TELL\n\"That's more than one per eye. \" ,YOU-ARENT \"up to it.\" CR>)>\n\t\t<RTRUE>)>\n\t <SET P1 <1 ,P-PRSO>>\n\t <SET P2 <2 ,P-PRSO>>\n\t <COND (<VERB? COMPARE>\n\t\t<PERFORM ,PRSA .P1 .P2>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (<OR <NOT <FSET? .P1 ,PERSON>>\n\t\t\t   <NOT <FSET? .P2 ,PERSON>>>\n\t\t       <TELL-BORING>)\n\t\t      (<EQUAL? <LOC .P1> <LOC .P2>>\n\t\t       <TELL-YOU-CANT\n\"overhear or see anything out of the ordinary\">)\n\t\t      (T <THEY-ARENT \"together\">)>)>>"
  },
  "THEY-ARENT": {
   "name": "THEY-ARENT",
   "file": "people.zil",
   "line": 105,
   "endLine": 106,
   "source": "<ROUTINE THEY-ARENT (STR)\n\t <TELL \"They aren't \" .STR \".\" CR>>"
  },
  "TELL-BORING": {
   "name": "TELL-BORING",
   "file": "people.zil",
   "line": 108,
   "endLine": 110,
   "source": "<ROUTINE TELL-BORING ()\n\t <TELL\n\"You see nothing interesting.\" CR>>"
  },
  "PLAYER-F": {
   "name": "PLAYER-F",
   "file": "people.zil",
   "line": 125,
   "endLine": 193,
   "source": "<ROUTINE PLAYER-F ()\n\t <COND (<EQUAL? ,WINNER ,PLAYER>\n\t\t<COND (<AND <VERB? EXAMINE> <EQUAL? ,PRSO ,PLAYER>>\n\t\t       <TELL\n\"You look pretty much like you always do, excepting the fact that you are\nwearing a fairly ridiculous looking \" 'COWBOY-COSTUME \".\" CR>)\n\t\t      (<EQUAL? ,NOT-ROPE ,PRSO ,PRSI>\n\t\t       <NOT-ROPE-F>)\n\t\t      (<AND <VERB? ACCUSE ARREST>\n\t\t\t    <EQUAL? ,PRSO ,PLAYER ,ME>>\n\t\t       <TELL \"Turning yourself in, eh?\" CR>)\n\t\t      (<AND <VERB? KILL ATTACK>\n\t\t\t    <IN? ,PRSO ,HERE>\n\t\t\t    <NOT <EQUAL? ,PRSO ,CORPSE ,VERONICA ,DOG>>>\n\t\t       <COND (<EQUAL? ,PRSO ,PLAYER>\n\t\t\t      <TELL \"Suicide\">)\n\t\t\t     (<FSET? ,PRSO ,PERSON>\n\t\t\t      <TELL <COND (<FSET? ,PLAYER ,TOLD>\n\t\t\t\t\t   \"Another \")\n\t\t\t\t\t  (T \"A \")>\n\t\t\t\t    'GLOBAL-MURDER>)\n\t\t\t     (T\n\t\t\t      <TELL \"This\">)>\n\t\t       <TELL \" is not the way to clear up this mess.\" CR>)\n\t\t      (<AND <VERB? GIVE> <EQUAL? ,PRSI ,PLAYER>>\n\t\t       <TELL\n\"Taking up juggling, eh?\" CR>)\n\t\t      (<AND <VERB? TAKE DANCE> <EQUAL? ,PRSO ,PLAYER>>\n\t\t       <TELL\n\"Usually, you say that to someone else.\" CR>)\n\t\t      (<AND <IN? ,DETECTIVE ,HERE>\n\t\t\t    <EQUAL? ,TARGET ,PLAYER>>\n\t\t       <COND (<VERB? SSHOW SGIVE> <RFALSE>)\n\t\t\t     (<AND <PLAYER-ARRESTED? ,DETECTIVE>\n\t\t\t\t   <VERB? WALK WALK-TO FOLLOW THROUGH>>\n\t\t\t      <RTRUE>)>)\n\t\t      (<AND <IN? ,DETECTIVE ,HERE>\n\t\t\t    <LAB-RESULTS-TO-PLAYER>>\n\t\t       <CRLF>\n\t\t       <RFALSE> ;\"so what you were doing gets handled\")\n\t\t      (<AND <IN? ,DUFFY ,HERE>\n\t\t\t    <EQUAL? ,TARGET ,PLAYER>>\n\t\t       <COND (<VERB? SSHOW SGIVE> <RFALSE>)\n\t\t\t     (<AND <PLAYER-ARRESTED? ,DUFFY>\n\t\t\t\t   <VERB? WALK WALK-TO FOLLOW THROUGH>>\n\t\t\t      <RTRUE>)>)\n\t\t      (<OR <AND <VERB? REVEAL> <EQUAL? ,PRSI ,PLAYER>>\n\t\t\t   <AND <VERB? TELL-ME TELL $CALL>\n\t\t\t\t<EQUAL? ,PRSO ,PLAYER>>>\n\t\t       <COND (<VERB? TELL>\n\t\t\t      <SETG P-CONT <>>\n\t\t\t      <SETG QUOTE-FLAG <>>)>\n\t\t       <INTERVIEW-SELF>)\n\t\t      (<OR <AND <VERB? REVEAL>\n\t\t\t\t<EQUAL? ,PRSO ,GLOBAL-MURDER>>\n\t\t\t   <AND <VERB? TELL-ME ASK-ABOUT>\n\t\t\t\t<EQUAL? ,PRSI ,GLOBAL-MURDER>>>\n\t\t       <COND (<NOT <FSET? ,PLAYER ,TOLD>>\n\t\t\t      <TELL\n\"What murder? \" ,YOU-DONT \"know anything about a murder.\" CR>)>)\n\t\t      (<OR <AND <VERB? THROW-AT POUR-ON>\n\t\t\t\t<EQUAL? ,PRSI ,PLAYER>>\n\t\t\t   <AND <VERB? RUB FOLLOW>\n\t\t\t\t<EQUAL? ,PRSO ,PLAYER>>>\n\t\t       <TELL ,YOU-ARENT \"coordinated enough.\" CR>)\n\t\t      (<AND <VERB? ALARM>\n\t\t\t    <EQUAL? ,PRSO <> ,PLAYER ,ME>>\n\t\t       <TELL \"Getting sleepy, huh?\" CR>)>)\n\t       (ELSE <RFALSE>)>>"
  },
  "ME-F": {
   "name": "ME-F",
   "file": "people.zil",
   "line": 205,
   "endLine": 213,
   "source": "<ROUTINE ME-F ()\n\t <COND (<VERB? RUB> <RFALSE>) \n\t       (<EQUAL? ,ME ,PRSO ,PRSI>\n\t\t<PERFORM ,PRSA\n\t\t\t <COND (<EQUAL? ,PRSO ,ME> ,PLAYER)\n\t\t\t       (T ,PRSO)>\n\t\t\t <COND (<EQUAL? ,PRSI ,ME> ,PLAYER)\n\t\t\t       (T ,PRSI)>>\n\t\t<RTRUE>)>>"
  },
  "COWBOY-COSTUME-F": {
   "name": "COWBOY-COSTUME-F",
   "file": "people.zil",
   "line": 224,
   "endLine": 229,
   "source": "<ROUTINE COWBOY-COSTUME-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<PERFORM ,V?EXAMINE <LOC ,PRSO>>\n\t\t<RTRUE>)\n\t       (<VERB? TAKE-OFF DROP>\n\t\t<TELL \"The result would be embarrassing.\" CR>)>>"
  },
  "GUNBELT-F": {
   "name": "GUNBELT-F",
   "file": "people.zil",
   "line": 240,
   "endLine": 259,
   "source": "<ROUTINE GUNBELT-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"This is fine western gunbelt, with a holster for a six-gun and loops\nwith lots of bullets. It's expertly tooled leather and is really the\nnicest element of your costume.\">\n\t\t<COND (<AND <NOT <FSET? ,GUNBELT ,WEARBIT>>\n\t\t\t    <NOT <IN? ,BULLET ,GUNBELT>>>\n\t\t       <TELL\n\" Now that you have it off, you can see that in the back one of the\ncartridge loops is empty: a bullet is missing.\">)>\n\t\t<CRLF>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<TELL\n\"Don't you remember, you left the gun at home. It was just a toy\nanyway.\" CR>)\n\t       (<AND <VERB? PUT>\n\t\t     <NOT <EQUAL? ,PRSO ,BULLET>>\n\t\t     <EQUAL? ,PRSI ,GUNBELT>>\n\t\t<TELL-WONT-FIT>)>>"
  },
  "PEN-F": {
   "name": "PEN-F",
   "file": "people.zil",
   "line": 268,
   "endLine": 274,
   "source": "<ROUTINE PEN-F ()\n\t <COND (<AND <VERB? WRITE> <EQUAL? ,PRSO ,PEN>>\n\t\t<COND (<IN? ,NOTEBOOK ,PLAYER>\n\t\t       <PERFORM ,V?WRITE ,NOTEBOOK ,PEN>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"On your cuff, no doubt.\" CR>)>)>>"
  },
  "NOTEBOOK-F": {
   "name": "NOTEBOOK-F",
   "file": "people.zil",
   "line": 287,
   "endLine": 295,
   "source": "<ROUTINE NOTEBOOK-F ()\n\t <COND (<OR <VERB? WRITE>\n\t\t    <AND <VERB? TAKE> <IN? ,NOTEBOOK ,PLAYER>>>\n\t\t<COND (<IN? ,PEN ,PLAYER>\n\t\t       <TELL\n\"The notebook now contains more doodles, phrases, and such than before.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n,YOU-DONT-HAVE \"a writing implement.\" CR>)>)>>"
  },
  "YOUR-COAT-F": {
   "name": "YOUR-COAT-F",
   "file": "people.zil",
   "line": 305,
   "endLine": 318,
   "source": "<ROUTINE YOUR-COAT-F ()\n\t <COND (<VERB? THROUGH>\n\t\t<PERFORM ,V?WEAR ,YOUR-COAT>\n\t\t<RTRUE>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<TELL\n,THERE-IS \"nothing in the coat.\" CR>)\n\t       (<VERB? SMELL>\n\t\t<TELL\n\"It smells slightly damp, which is expected, as it was raining when you\narrived.\" CR>)\n\t       (<VERB? RUB>\n\t\t<TELL\n\"It feels slightly damp. It hasn't finished drying off from the rain.\" CR>)>>"
  },
  "DONT-HANDLE?": {
   "name": "DONT-HANDLE?",
   "file": "people.zil",
   "line": 345,
   "endLine": 351,
   "source": "<ROUTINE DONT-HANDLE? ()\n\t <COND (<VERB? WHAT SGIVE SSHOW FIND DANCE EXAMINE \n\t\t       IS $REVEAL THANKS>\n\t\t<RTRUE>)\n\t       (<AND <VERB? TELL-ME>\n\t\t     <EQUAL? ,PRSO ,ME ,PLAYER>>\n\t\t<RTRUE>)>>"
  },
  "MICHAEL-F": {
   "name": "MICHAEL-F",
   "file": "people.zil",
   "line": 353,
   "endLine": 525,
   "source": "<ROUTINE MICHAEL-F ()\n\t <COND (<EQUAL? ,WINNER ,MICHAEL>\n\t\t<COND (<VERB? HELLO>\n\t\t       <COND (<FSET? ,MICHAEL ,TOLD>\n\t\t\t      <TELL\n\"\\\"How could this have happened? \" ,YOU-MUST \"feel lucky, something like\nthis happening when you're here, but it's horrible, horrible!\\\"\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"\\\"Glad you could make it. I don't see where you'll find a story here,\nbut you'll have fun, at least.\\\"\" CR>)>)\n\t\t      (<DONT-HANDLE?> <RFALSE>)\n\t\t      (ELSE\n\t\t       <TELL 'MICHAEL \" pays you no heed.\" CR>)>)\n\t       (<AND <VERB? $REVEAL> <EQUAL? ,PRSO ,GLOBAL-MURDER>>\n\t\t<ENABLE <QUEUE I-MICHAEL-TO-GARAGE 5>>\n\t\t<COND (<REVEAL-MURDER ,MICHAEL>\n\t\t       <COND (<IN? ,WINNER ,HERE>\n\t\t\t      <TELL\nCD ,WINNER \" breaks the news of the murder to \" 'MICHAEL \", who responds\njokingly, then realizes that \" D ,WINNER \" is serious. He seems to be\nin a state of shock.\" CR>)\n\t\t\t     (<NEARBY? ,MICHAEL>\n\t\t\t      <TELL\nCD ,WINNER \" has just told \" 'MICHAEL \" something that seems to have\nshocked him terribly.\" CR>)>)\n\t\t      (ELSE\n\t\t       <COND (<IN? ,WINNER ,HERE>\n\t\t\t      <TELL\nCD ,WINNER \" breaks the news of the murder to \" 'MICHAEL \". He already\nknows about it, and replies scornfully.\" CR>)>)>)\n\t       (<AND <VERB? REVEAL> <EQUAL? ,PRSO ,GLOBAL-MURDER>>\n\t\t<ENABLE <QUEUE I-MICHAEL-TO-GARAGE 5>>\n\t\t<COND (<REVEAL-MURDER ,MICHAEL>\n\t\t       <TELL\n\"\\\"What! You're kidding... No, you're not, are you?\\\" He seems to be\nin a state of shock.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"\\\"I already know. You're a cruel person to harp on it.\\\"\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n'MICHAEL \" Wellman is a tall, greying man about forty years of age. He is\ncostumed as an Arab sheik straight out of a bad movie of the twenties.\" CR>)\n\t       (<AND <VERB? ASK-ABOUT> <EQUAL? ,PRSO ,MICHAEL>>\n\t\t<COND (<NOT <FSET? ,PRSI ,PERSON>>\n\t\t       <COND (<AND <EQUAL? ,PRSI ,DRINK>\n\t\t\t\t   <IN-BALLROOM? ,VERONICA>>\n\t\t\t      <TELL\n\"\\\"\" 'VERONICA \"'s drink? She was drinking a Singapore Sling.\\\"\" CR>)\n\t\t\t     (<EQUAL? ,PRSI ,HORSE>\n\t\t\t      <TELL\n\"\\\"'Lurking Grue' is \" 'VERONICA \"'s prize show jumper. He's really quite a\nbeautiful animal. He's coal black, you can barely see him in the dark.\\\"\" CR>)\n\t\t\t     (<EQUAL? ,PRSI ,GLOBAL-MURDER>\n\t\t\t      <COND (<FSET? ,PRSO ,TOLD>\n\t\t\t\t     <TELL\n\"\\\"You reporters have all the sensitivity of buffalo. Can't you leave\nme alone?\\\"\" CR>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL\n\"\\\"Murder?\\\"\" CR>)>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"I'm not sure what I can tell you about \" THE ,PRSI \".\\\"\" CR>)>)\n\t\t      (<EQUAL? ,PRSI ,PLAYER>\n\t\t       <TELL\n\"\\\"I thought you were a friend of \" 'VERONICA \"'s. Didn't you go to school\ntogether or something?\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,MICHAEL ,GLOBAL-MICHAEL>\n\t\t       <TELL\n\"\\\"What can I say? I didn't realize the rich had to serve any function\nbut decoration and public amusement. That's what I do, and I take my job\nseriously.\\\" He smiles.\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-VERONICA ,VERONICA ,CORPSE>\n\t\t       <COND (<FSET? ,MICHAEL ,TOLD>\n\t\t\t      <TELL\n'MICHAEL \" stares at you. \\\"What a strange question! She was my wife, and\nI loved her, and she's dead! Murdered! Why would anyone want to kill\nher?\\\" His words trail off. \\\"I can't understand this. Things were so\ngood for us...\\\"\" CR>)\n\t\t\t     (<IN? ,VERONICA ,HERE>\n\t\t\t      <TELL\n'MICHAEL \" hugs \" 'VERONICA\". He smiles.\" CR>)\n\t\t\t     (<IN-BALLROOM? ,VERONICA>\n\t\t\t      <TELL\n\"\\\"That's her over there. I guess she's going to try to get that costume\ncleaned up.\\\"\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"\\\"That's an odd question. She's my wife: I love her.\\\"\">\n\t\t\t      <COND (<G? ,PRESENT-TIME 555>\n\t\t\t\t     <TELL\n\" He looks around\nquizzically. \\\"I wonder where she's gotten off to?\\\"\">)>\n\t\t\t      <CRLF>)>)\n\t\t      (<EQUAL? ,PRSI ,ALICIA ,GLOBAL-ALICIA>\n\t\t       <TELL\n\"\\\"She's an excellent horsewoman, and a good friend of \" 'VERONICA\"'s. She\nboards her horses here, so she's here a lot.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,COL-MARSTON ,GLOBAL-COL-MARSTON>\n\t\t       <TELL\n\"\\\"\" 'COL-MARSTON \"? One of the ablest men I know. He's done a lot with our family\ntrust, and I can always count on his advice.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,SEN-ASHER ,GLOBAL-SEN-ASHER>\n\t\t       <TELL\n\"\\\"\" 'VERONICA \" and I are quite fond of him. With a little luck he'll be\npresident some day. The man has a lot on the ball.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,OSTMANN ,GLOBAL-OSTMANN>\n\t\t       <TELL\n\"\\\"\" 'OSTMANN \" would love to buy the farm, but we turned him down. Our roots are\nhere, even though this part of the county is getting so suburban. Some\nthink it's past time to make a move upcounty. Most of the Club has\nmoved already. \" 'OSTMANN \" wanted to develop the land as town houses.\nImagine that!\\\"\" CR>)\n\t\t      (<IN? ,PRSI ,HERE>\n\t\t       <TELL\n'MICHAEL \" glances toward \" D ,PRSI \". \\\"What a rude question! Are you hoping\nI'll say something derogatory and start a shouting match?\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-RICHARD>\n\t\t       <TELL\n\"\\\"It's common knowledge Richard and I have our disagreements. \" 'VERONICA \"\ntries to keep him in line, but you know how it is sometimes between brother\nand sister. Linda is another problem. She just doesn't fit in this sort of\ngroup.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-LINDA>\n\t\t       <TELL\n,I-DONT-KNOW \"why Richard keeps company with her. Well, I suppose I do.\nBut have you ever talked to her? With a\ngood tail wind she has an outside chance at a two-digit IQ.\\\" He shakes his\nhead ruefully. \\\"Richard is still a bit immature.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-COCHRANE>\n\t\t       <TELL\n\"\\\"The fellow is a crook. I hear he's going up before\" ,REAL-ESTATE-BOARD\n\" for unethical practices. He and \" 'OSTMANN \" hate each other, if\nyou believe the stories. I certainly didn't invite him, but\nI'm not going to throw him out and make a scene.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-BUTLER>\n\t\t       <TELL\n\"\\\"\" 'BUTLER \" has been with us forever. He worked for \" 'VERONICA\"'s\nparents when they were still alive. He's lived on the farm for most of\nhis life.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-BARTENDER>\n\t\t       <I-DONT-KNOW-ABOUT \"him: \" <>>\n\t\t       <TELL\n'VERONICA \" hired him from some agency for\nthe party. He mixes a pretty good martini, I can say that.\\\"\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"\\\"I can't say much one way or the other.\\\"\" CR>)>)\n\t       (<OR <VERB? SHOW>\n\t\t    <AND <VERB? $DISCOVER>\n\t\t\t <IN? ,MICHAEL ,HERE>\n\t\t\t <NOT <IN? ,MICHAEL ,OFFICE>>>>\n\t\t<COND (<EQUAL? ,PRSO ,CORPSE>\n\t\t       <COND (<REVEAL-MURDER ,MICHAEL>\n\t\t\t      <TELL\n'MICHAEL \" stares at the corpse, stunned. He rushes over, cradles the body\nin his arms, and seems about to cry. Then, suddenly, he turns to you: \\\"Did\nyou do this?\" ,CALLING-POLICE>\n\t\t\t      <COND (<GLOBAL-IN? ,TELEPHONE ,HERE>\n\t\t\t\t     <TELL-MICHAEL-CALLS-POLICE>)>\n\t\t\t      <CRLF>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"He looks away. \\\"I can't bear it,\\\" he says, trying to compose\nhimself.\" CR>)>)\n\t\t      (<FSET? ,PRSO ,MICHAELBIT>\n\t\t       <FCLEAR ,PRSO ,MICHAELBIT>\n\t\t       <SETG MICHAEL-SEEN <+ ,MICHAEL-SEEN 1>>\n\t\t       <ENABLE <QUEUE I-FLEE 5>>\n\t\t       <TELL\n\"\\\"I have no idea what this has to do with me.\\\"\" CR>)>)>>"
  },
  "TELL-MICHAEL-CALLS-POLICE": {
   "name": "TELL-MICHAEL-CALLS-POLICE",
   "file": "people.zil",
   "line": 529,
   "endLine": 535,
   "source": "<ROUTINE TELL-MICHAEL-CALLS-POLICE ()\n\t <TELL\n'MICHAEL \" picks up the telephone\nand calls the police.\">\n\t <COND (<FSET? ,MICHAEL ,TOLD>\n\t\t<TELL \" His voice breaks towards the end.\">)>\n\t <RTRUE>>"
  },
  "G-MICHAEL": {
   "name": "G-MICHAEL",
   "file": "people.zil",
   "line": 537,
   "endLine": 631,
   "source": "<ROUTINE G-MICHAEL (GARG \"AUX\" (L <LOC ,MICHAEL>) (BODY? <>))\n\t <COND (<NOT .GARG> <IMOVEMENT ,MICHAEL G-MICHAEL>)\n\t       (<EQUAL? .GARG ,G-IMPATIENT>\n\t\t<COND (<EQUAL? .L ,HERE ,OFFICE> <RFALSE>)\n\t\t      (<EQUAL? .L ,LIBRARY>\n\t\t       <FCLEAR ,LIBRARY-DOOR ,LOCKED>\n\t\t       <RFALSE>)>\n\t\t<TELL 'MICHAEL \" is looking \">\n\t\t<COND (<EQUAL? .L ,GARAGE>\n\t\t       <TELL\n\"angry and impatient.\" CR>)\n\t\t      (<FSET? ,MICHAEL ,TOLD>\n\t\t       <TELL\n\"impatient, nervous, and distraught.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL \"very bored with all this.\" CR>)>)\n\t       (<EQUAL? .GARG ,G-REACHED ,G-ALREADY>\n\t\t<COND (<AND <EQUAL? .L ,BALLROOM-5>\n\t\t\t    <IN? ,ALICIA ,BALLROOM-5>>\n\t\t       <THEY-DANCE ,MICHAEL>)\n\t\t      (<AND <EQUAL? .L ,BALLROOM-8>\n\t\t\t    <NOT ,PARTY-OVER>>\n\t\t       <NEW-SCRIPT ,MICHAEL ,MICHAEL-LOOP>\n\t\t       <RFALSE>)\n\t\t      (<AND <EQUAL? .L ,BALLROOM-9>\n\t\t\t    <NOT ,OFFICE-EXPEDITION?>>\n\t\t       <GOALS? ,MICHAEL <>>\n\t\t       <ESTABLISH-GOAL ,COL-MARSTON ,BALLROOM-9 T>\n\t\t       <ESTABLISH-GOAL ,COCHRANE ,BALLROOM-9 T>\n\t\t       <ENABLE <QUEUE I-ARGUMENT 5>>\n\t\t       <RFALSE>)\n\t\t      (<EQUAL? .L ,GARAGE>\n\t\t       <ENABLE <QUEUE I-MICHAEL-HIDES-FOLDER 1>>\n\t\t       <RFALSE>)\n\t\t      (<AND <EQUAL? .L ,HALLWAY-3>\n\t\t\t    <NOT ,THREE-STOOGES-IN-OFFICE?>>\n\t\t       <GOALS? ,MICHAEL <>>\n\t\t       <COND (<AND <IN? ,COCHRANE ,HALLWAY-3>\n\t\t\t\t   <IN? ,COL-MARSTON ,HALLWAY-3>>\n\t\t\t      <GANGS-ALL-HERE>)>)\n\t\t      (<EQUAL? .L ,OFFICE>\n\t\t       <SETG THREE-STOOGES-IN-OFFICE? T>\n\t\t       <ESTABLISH-GOAL ,MICHAEL ,LIVING-ROOM>\n\t\t       <GRAB-ATTENTION ,MICHAEL>\n\t\t       <COND (<NOT ,MURDER-PUBLIC?>\n\t\t\t      <SET BODY? <EQUAL? <META-LOC ,CORPSE> ,OFFICE>>\n\t\t\t      <COND (.BODY?\n\t\t\t\t     <FCLEAR ,MICHAEL ,TOLD>\n\t\t\t\t     <REVEAL-MURDER ,MICHAEL>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <SETG MURDER-PUBLIC? T>\n\t\t\t\t     <ENABLE <QUEUE I-POLICE-ARRIVE 25>>)>\n\t\t\t      <COND (<EQUAL? .L ,HERE>\n\t\t\t\t     <COND (.BODY?\n\t\t\t\t\t    <TELL-LOOK-AROUND>\n\t\t\t\t\t    <TELL\n\"The three of them start to search the room, examine the body, and so on.\nThen \" 'MICHAEL \" says, \\\"Wait! This is a job for the police! Don't touch\nanything!\\\" The others agree, though \" D ,COCHRANE \" takes some convincing. \">\n\t\t\t\t\t    <TELL-MICHAEL-CALLS-POLICE>\n\t\t\t\t\t    <CRLF>)\n\t\t\t\t\t   (ELSE\n\t\t\t\t\t    <TELL-LOOK-AROUND>\n\t\t\t\t\t    <TELL\n'MICHAEL \" is particularly shocked. \\\"There must have\nbeen a prowler in here, or maybe some kids out for a thrill.\\\" He looks\naround some more. \">\n\t\t\t\t\t    <COND (<IN? ,FAIRY-MASK .L>\n\t\t\t\t\t\t   <TELL\n\"\\\"\" 'VERONICA \"'s mask is here!\\\" he says. \">)>\n\t\t\t\t\t    <COND (<IN? ,ROPE .L>\n\t\t\t\t\t\t   <TELL\n\"\\\"And isn't that your rope?\\\" He asks you. \">)>\n\t\t\t\t\t    <TELL\n\"He seems puzzled. \\\"Nothing seems to be taken.\" ,CALLING-POLICE\n\" He does so.\" CR>)>\n\t\t\t\t     <RTRUE>)>)>)\n\t\t      (<EQUAL? .L ,LIBRARY>\n\t\t       <COND (<IN? ,COL-MARSTON ,LIBRARY>\n\t\t\t      <LIBRARY-MEETING ,MICHAEL>)\n\t\t\t     (ELSE\n\t\t\t      <GOALS? ,MICHAEL <>>\n\t\t\t      <RFALSE>)>)\n\t\t      (<AND ,FLEEING? <EQUAL? .L ,SITTING-ROOM>>\n\t\t       <UNPRIORITIZE ,MICHAEL>\n\t\t       <COND (<IN? ,ALICIA .L>\n\t\t\t      <GOALS? ,ALICIA T>\n\t\t\t      <ESTABLISH-GOAL ,ALICIA ,BARN T>\n\t\t\t      <ESTABLISH-GOAL ,MICHAEL ,BARN T>)\n\t\t\t     (T\n\t\t\t      <GOALS? ,MICHAEL <>>)>\n\t\t       <RFALSE>)\n\t\t      (<EQUAL? .L ,BARN>\n\t\t       <GOALS? ,MICHAEL <>>\n\t\t       <BARN-DANCE ,MICHAEL>)>)>>"
  },
  "TELL-LOOK-AROUND": {
   "name": "TELL-LOOK-AROUND",
   "file": "people.zil",
   "line": 633,
   "endLine": 636,
   "source": "<ROUTINE TELL-LOOK-AROUND ()\n\t <TELL\n'MICHAEL \" and the others look around the room, startled. They see the total\nwreck of the office. \">>"
  },
  "I-MICHAEL-HIDES-FOLDER": {
   "name": "I-MICHAEL-HIDES-FOLDER",
   "file": "people.zil",
   "line": 638,
   "endLine": 681,
   "source": "<ROUTINE I-MICHAEL-HIDES-FOLDER ()\n\t <COND (<AND <EQUAL? ,HERE ,GARAGE>\n\t\t     <NOT ,PLAYER-HIDING>>\n\t\t<COND (<LISTENING? ,MICHAEL>\n\t\t       <TELL \"\\\"Get out of here!\\\" \" 'MICHAEL \" screams.\" CR>\n\t\t       <RTRUE>)>\n\t\t<SETG MICHAEL-TO-GARAGE? <>>\n\t\t<ENABLE <QUEUE I-MICHAEL-TO-GARAGE 25>>\n\t\t<ESTABLISH-GOAL ,MICHAEL ,BALLROOM-9 T>\n\t\t<GRAB-ATTENTION ,MICHAEL>\n\t\t<TELL\n'MICHAEL \" eyes you suspiciously. \\\"What are you doing in here?\\\" he asks.\">\n\t\t<COND (<OR <FSET? ,BMW-TRUNK ,OPENBIT>\n\t\t\t   <IN? ,CROWBAR ,PLAYER>\n\t\t\t   <FIRST? ,BMW-TRUNK>>\n\t\t       <TELL\n\" \\\"Have you been fooling with my car? What are you doing in here! I'll\nhave you thrown out!\\\" He seems serious.\">)>\n\t\t<COND (<FSET? ,MICHAEL ,TOLD>\n\t\t       <TELL\n\" \\\"Are you trying to hide something? You've been acting pretty oddly.\nDid you kill my wife?\\\" He breaks off, torn between several courses of\naction.\">)>\n\t\t<TELL\n\" Finally he just says \\\"Get out of here!\\\"\" CR>)\n\t       (ELSE\n\t\t<ENABLE <QUEUE I-LIBRARY-MEETING 20>>\n\t\t<COND (<AND <NOT <FIRST? ,BMW-TRUNK>>\n\t\t\t    <NOT <FSET? ,BMW-TRUNK ,OPENBIT>>>\n\t\t       <FSET ,BMW-TRUNK ,LOCKED>\n\t\t       <MOVE ,TRUST-FOLDER ,BMW-TRUNK>\n\t\t       <FCLEAR ,TRUST-FOLDER ,INVISIBLE>\n\t\t       <COND (<EQUAL? ,HERE ,GARAGE>\n\t\t\t      <TELL-MIKE-WALKS>\n\t\t\t      <TELL\n\", and after a few seconds, closes it again. Unfortunately, the trunk lid\nblocks your view of what he was doing when the trunk was open.\" CR>)>)\n\t\t      (ELSE\n\t\t       <REMOVE ,TRUST-FOLDER>\n\t\t       <COND (<EQUAL? ,HERE ,GARAGE>\n\t\t\t      <TELL-MIKE-WALKS>\n\t\t\t      <TELL\n\", and becomes extremely agitated. He looks around, fails to see you, and\nstands for a moment, confused.\" CR>)>)>)>>"
  },
  "TELL-MIKE-WALKS": {
   "name": "TELL-MIKE-WALKS",
   "file": "people.zil",
   "line": 683,
   "endLine": 689,
   "source": "<ROUTINE TELL-MIKE-WALKS ()\n\t <TELL\n'MICHAEL \" walks to the rear of the BMW, \">\n\t <COND (<FSET? ,BMW-TRUNK ,OPENBIT>\n\t\t<TELL \"notices the trunk is open\">)\n\t       (T\n\t\t<TELL \"opens the trunk\">)>>"
  },
  "I-LIBRARY-MEETING": {
   "name": "I-LIBRARY-MEETING",
   "file": "people.zil",
   "line": 691,
   "endLine": 697,
   "source": "<ROUTINE I-LIBRARY-MEETING ()\n\t %<DEBUG-CODE\n\t   <COND (,DEBUG\n\t\t  <TELL \"[Michael and Marston to Library]\" CR>)>>\n\t <ESTABLISH-GOAL ,MICHAEL ,LIBRARY T>\n\t <ESTABLISH-GOAL ,COL-MARSTON ,LIBRARY T>\n\t <RFALSE>>"
  },
  "TELL-THREE-STOOGES": {
   "name": "TELL-THREE-STOOGES",
   "file": "people.zil",
   "line": 699,
   "endLine": 700,
   "source": "<ROUTINE TELL-THREE-STOOGES ()\n\t <TELL 'MICHAEL \", \" 'COL-MARSTON \", and \" 'COCHRANE>>"
  },
  "TELL-THREE-ARRIVE": {
   "name": "TELL-THREE-ARRIVE",
   "file": "people.zil",
   "line": 702,
   "endLine": 723,
   "source": "<ROUTINE TELL-THREE-ARRIVE (KNEW?)\n\t <COND (<EQUAL? ,HERE ,OFFICE ,HALLWAY-3>\n\t\t<FSET ,PLAYER ,TOLD>\n\t\t<TELL-THREE-STOOGES>\n\t\t<TELL\n\" arrive at the office door.\n\" 'COL-MARSTON \" glances through the door. \\\"Look in there!\\\" he cries.\n\\\"The place is a shambles!\">\n\t\t<COND (.KNEW?\n\t\t       <TELL \" It must be true, then!\">)>\n\t\t<COND (<EQUAL? ,HERE ,OFFICE>\n\t\t       <TELL\n\"\\\" They see you\">)\n\t\t      (ELSE\n\t\t       <TELL\n\"\\\" \" 'MICHAEL \" and \" 'COCHRANE \" look startled as well\">)>\n\t\t<TELL ,THREE-CROWD CR>)\n\t       (<CORRIDOR-LOOK ,MICHAEL>\n\t\t<TELL-THREE-STOOGES>\n\t\t<TELL\n\" are down the hall, in front of the\noffice. \" 'COL-MARSTON \" shouts\" ,THREE-CROWD CR>)>>"
  },
  "GANGS-ALL-HERE": {
   "name": "GANGS-ALL-HERE",
   "file": "people.zil",
   "line": 729,
   "endLine": 787,
   "source": "<ROUTINE GANGS-ALL-HERE (\"AUX\" (KNEW <>))\n\t <COND (,GANG-BEEN-TO-OFFICE? <RFALSE>)>\n\t <SETG GANG-BEEN-TO-OFFICE? T>\n\t <UNPRIORITIZE ,MICHAEL>\n\t <ESTABLISH-GOAL ,MICHAEL ,OFFICE T>\n\t <UNPRIORITIZE ,COCHRANE>\n\t <ESTABLISH-GOAL ,COCHRANE ,OFFICE T>\n\t <UNPRIORITIZE ,COL-MARSTON>\n\t <ESTABLISH-GOAL ,COL-MARSTON ,OFFICE T>\n\t <COND (<OR <FSET? ,MICHAEL ,TOLD>\n\t\t    <FSET? ,COCHRANE ,TOLD>\n\t\t    <FSET? ,COL-MARSTON ,TOLD>>\n\t\t<SET KNEW T>)>\n\t %<DEBUG-CODE\n\t   <COND (<AND ,GOSSIP <NOT .KNEW>>\n\t\t  <TELL\n\"[Michael, Marston, Cochrane find out at office]\" CR>)>>\n\t <COND (<EQUAL? <META-LOC ,CORPSE> ,OFFICE>\n\t\t<FSET ,MICHAEL ,TOLD>\n\t\t<FSET ,COL-MARSTON ,TOLD>\n\t\t<FSET ,COCHRANE ,TOLD>)>\n\t <COND (<FSET? ,SOUTH-OFFICE-DOOR ,OPENBIT>\n\t\t<TELL-THREE-ARRIVE .KNEW>)\n\t       (T\n\t\t<FCLEAR ,SOUTH-OFFICE-DOOR ,LOCKED>\n\t\t<FSET ,SOUTH-OFFICE-DOOR ,OPENBIT>\n\t\t<COND (<EQUAL? ,HERE ,OFFICE>\n\t\t       <TELL\n\"Outside, you hear voices. \">\n\t\t       <COND (<NOT .KNEW>\n\t\t\t      <TELL\n\t\t\t  \" You hear someone say,\" ,LET-ME ,THERE-IS \"a pause.\"\n,I-HAD-THEM \"Another pause. The doorknob turns.\" ,WAIT-A-MINUTE>)>\n\t\t       <TELL \"The door opens, revealing \">\n\t\t       <TELL-THREE-STOOGES>\n\t\t       <TELL \". They crowd forward.\" CR>)\n\t\t      (<EQUAL? ,HERE ,HALLWAY-3>\n\t\t       <FSET ,PLAYER ,TOLD>\n\t\t       <COND (.KNEW\n\t\t\t      <TELL\n'MICHAEL \" says, \\\"If it's true, I can take it, just let me go in.\\\" He\nopens the door, and the three of them crowd around.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n'MICHAEL \" says,\" ,LET-ME \"He roots around underneath\nhis robes for a moment, obviously trying to find his keys. He clearly\ncan't find them.\" ,I-HAD-THEM \"He gets more and more\nfrantic.\" ,WAIT-A-MINUTE 'MICHAEL \" throws open the door of the office, the others crowding\nclosely around him.\" CR>)>)\n\t\t      (<CORRIDOR-LOOK ,MICHAEL>\n\t\t       <TELL\n\"You see, at the office door, a group which includes \">\n\t\t       <TELL-THREE-STOOGES>\n\t\t       <TELL \". \" 'MICHAEL>\n\t\t       <COND (<NOT .KNEW>\n\t\t\t      <TELL \" is looking for something in his\nrobes, getting more and more frantic. Then, suddenly, he\">)>\n\t\t       <TELL \" opens the door,\nand the other two crowd around him, staring into the office.\" CR>)>)>>"
  },
  "LIBRARY-MEETING": {
   "name": "LIBRARY-MEETING",
   "file": "people.zil",
   "line": 795,
   "endLine": 823,
   "source": "<ROUTINE LIBRARY-MEETING (LAST \"AUX\" FIRST)\n\t <COND (<EQUAL? .LAST ,MICHAEL> <SET FIRST ,COL-MARSTON>)\n\t       (ELSE <SET FIRST ,MICHAEL>)>\n\t <FCLEAR ,LIBRARY-DOOR ,OPENBIT>\n\t <FCLEAR ,LH-DOOR ,OPENBIT>\n\t <FSET ,LIBRARY-DOOR ,LOCKED>\n\t <FSET ,LH-DOOR ,LOCKED>\n\t <MOVE ,INVESTOR-LIST ,COL-MARSTON>\n\t <ENABLE <QUEUE I-END-MEETING 2>>\n\t <COND (<NOT <EQUAL? <META-LOC ,PLAYER> ,LIBRARY>>\n\t\t<RFALSE>)>\n\t <TELL D .LAST \" enters the library. \">\n\t <COND (<EQUAL? ,PLAYER-HIDING ,CHAIR>\n\t\t<TELL\n'MICHAEL \" and \" 'COL-MARSTON \" greet each other, then glance suspiciously\naround the room. They do not see you hiding behind the overstuffed\nchair. \" 'MICHAEL \" closes and locks the doors. He then passes the Colonel a\npiece of paper, which the latter avidly scans, then folds up and\nstuffs into a pocket. Both men grin.\" CR>)\n\t       (<EQUAL? <META-LOC ,PLAYER> ,LIBRARY>\n\t\t<GRAB-ATTENTION ,MICHAEL 2>\n\t\t<GRAB-ATTENTION ,COL-MARSTON 2>\n\t\t<TELL\n\"He seems surprised to see you. \" D .FIRST \"\nlooks at him and shrugs his shoulders. \\\"Please leave us. We have some\nprivate business to transact. I'm sure you understand,\\\" says \" 'MICHAEL \".\nThe two of them unceremoniously show you the door.\" CR>\n\t\t<GOTO ,HALLWAY-16>\n\t\t<RTRUE>)>>"
  },
  "I-END-MEETING": {
   "name": "I-END-MEETING",
   "file": "people.zil",
   "line": 825,
   "endLine": 830,
   "source": "<ROUTINE I-END-MEETING ()\n\t <UNPRIORITIZE ,COL-MARSTON>\n\t <ESTABLISH-GOAL ,COL-MARSTON ,BALLROOM-8 T>\n\t <UNPRIORITIZE ,MICHAEL>\n\t <ESTABLISH-GOAL ,MICHAEL ,BALLROOM-8 T>\n\t <RFALSE>>"
  },
  "I-ARGUMENT": {
   "name": "I-ARGUMENT",
   "file": "people.zil",
   "line": 834,
   "endLine": 870,
   "source": "<ROUTINE I-ARGUMENT (\"AUX\" S (FLG <>))\n\t <COND (<AND <NOT ,OFFICE-EXPEDITION?>\n\t\t     <NOT <FSET? ,MICHAEL ,TOLD>>\n\t\t     <IN? ,MICHAEL ,BALLROOM-9>\n\t\t     <IN? ,COL-MARSTON ,BALLROOM-9>\n\t\t     <IN? ,COCHRANE ,BALLROOM-9>>\n\t\t<SET S <GET ,ARGUMENT-TABLE ,ARGUMENT-COUNT>>\n\t\t<COND (<EQUAL? ,HERE ,BALLROOM-9>\n\t\t       <SET FLG T>\n\t\t       <TELL .S CR>)\n\t\t      (<IN-BALLROOM? ,PLAYER>\n\t\t       <SET FLG T>\n\t\t       <TELL\n,SEEMS-TO-BE A ,DISCUSSION \" going on at the bar.\" CR>)\n\t\t      (<EQUAL? ,ARGUMENT-COUNT 0>\n\t\t       <SETG ARGUMENT-POSTPONE <- ,ARGUMENT-POSTPONE 1>>\n\t\t       <COND (<G? ,ARGUMENT-POSTPONE 0>\n\t\t\t      <QUEUE I-ARGUMENT 2>\n\t\t\t      <RFALSE>)>)>\n\t\t<SETG ARGUMENT-COUNT <+ ,ARGUMENT-COUNT 1>>\n\t\t<COND (<SET S <GET ,ARGUMENT-TABLE ,ARGUMENT-COUNT>>\n\t\t       <QUEUE I-ARGUMENT 1>)\n\t\t      (ELSE\n\t\t       <SETG ARGUMENT-COUNT 0> ;\"argument over\"\n\t\t       <SETG OFFICE-EXPEDITION? T>\n\t\t       <THIS-IS-S-HE ,MICHAEL>\n\t\t       <ESTABLISH-GOAL ,MICHAEL ,HALLWAY-3 T>\n\t\t       <ESTABLISH-GOAL ,COL-MARSTON ,HALLWAY-3 T>\n\t\t       <ESTABLISH-GOAL ,COCHRANE ,HALLWAY-3 T>)>\n\t\t<RETURN .FLG>)\n\t       (<FSET? ,MICHAEL ,TOLD>\n\t\t<SETG OFFICE-EXPEDITION? T>\n\t\t<SETG ARGUMENT-COUNT 0>\n\t\t<RFALSE>)\n\t       (ELSE\n\t\t<QUEUE I-ARGUMENT 5>\n\t\t<RFALSE>)>>"
  },
  "VERONICA-UNMASKED?": {
   "name": "VERONICA-UNMASKED?",
   "file": "people.zil",
   "line": 909,
   "endLine": 910,
   "source": "<ROUTINE VERONICA-UNMASKED? ()\n\t <EQUAL? <GETP ,VERONICA ,P?SDESC> ,VERONICA-SDESC>>"
  },
  "VERONICA-UNMASKS": {
   "name": "VERONICA-UNMASKS",
   "file": "people.zil",
   "line": 912,
   "endLine": 916,
   "source": "<ROUTINE VERONICA-UNMASKS ()\n\t <FCLEAR ,VERONICA ,THE>\n\t <PUTP ,VERONICA ,P?SDESC ,VERONICA-SDESC>\n\t <FCLEAR ,GLOBAL-VERONICA ,THE>\n\t <PUTP ,GLOBAL-VERONICA ,P?SDESC ,VERONICA-SDESC>>"
  },
  "GLOBAL-VERONICA-F": {
   "name": "GLOBAL-VERONICA-F",
   "file": "people.zil",
   "line": 931,
   "endLine": 942,
   "source": "<ROUTINE GLOBAL-VERONICA-F ()\n\t <COND (<AND <NOT <LOC ,VERONICA>>\n\t\t     <EQUAL? <META-LOC ,CORPSE> ,HERE>\n\t\t     <NOT <VERB? TELL-ME ASK-ABOUT>>>\n\t\t<PERFORM ,PRSA\n\t\t\t <COND (<EQUAL? ,PRSO ,GLOBAL-VERONICA> ,CORPSE)\n\t\t\t       (T ,PRSO)>\n\t\t\t <COND (<EQUAL? ,PRSI ,GLOBAL-VERONICA> ,CORPSE)\n\t\t\t       (T ,PRSI)>>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<GLOBAL-PERSON-F>)>>"
  },
  "GENERIC-VERONICA-F": {
   "name": "GENERIC-VERONICA-F",
   "file": "people.zil",
   "line": 956,
   "endLine": 958,
   "source": "<ROUTINE GENERIC-VERONICA-F (NAM)\n\t <COND (<NOT <EQUAL? .NAM ,W?COSTUME>> ,VERONICA)\n\t       (ELSE <GENERIC-STUFF-F .NAM>)>>"
  },
  "VERONICA-DESC-F": {
   "name": "VERONICA-DESC-F",
   "file": "people.zil",
   "line": 960,
   "endLine": 965,
   "source": "<ROUTINE VERONICA-DESC-F (\"OPTIONAL\" (RARG <>))\n\t <TELL \"Titania, Queen of Faery,\">\n\t <COND (<VERONICA-UNMASKED?>\n\t\t<TELL \" in the person of \" 'VERONICA \",\">)>\n\t <TELL \" is\">\n\t <TELL-HERE>>"
  },
  "TELL-IGNORES": {
   "name": "TELL-IGNORES",
   "file": "people.zil",
   "line": 967,
   "endLine": 967,
   "source": "<ROUTINE TELL-IGNORES () <TELL \"She\" ,IGNORES-YOU \".\" CR>>"
  },
  "LONG-MASK-DESC": {
   "name": "LONG-MASK-DESC",
   "file": "people.zil",
   "line": 971,
   "endLine": 976,
   "source": "<ROUTINE LONG-MASK-DESC ()\n\t <TELL\n\" It covers the entire head with a glittery silver stocking. The hair is\nsilver and gold wire streaming out behind as though blown by the wind.\nThe ears are silvered butterfly wings, and the eyebrows turn up into\nantennae.\" CR>>"
  },
  "VERONICA-F": {
   "name": "VERONICA-F",
   "file": "people.zil",
   "line": 978,
   "endLine": 1014,
   "source": "<ROUTINE VERONICA-F ()\n\t <COND (<EQUAL? ,WINNER ,VERONICA>\n\t\t<COND (<VERB? WHAT>\n\t\t       <COND (<EQUAL? ,PRSO ,YOU>\n\t\t\t      <TELL\n\"\\\"I'm Queen of Faery, stupid!\\\" she growls.\" CR>)>)\n\t\t      (<VERB? HELLO>\n\t\t       <TELL \"She pauses for a moment and greets you.\" CR>)\n\t\t      (<DONT-HANDLE?> <RFALSE>)\n\t\t      (ELSE\n\t\t       <TELL-IGNORES>)>)\n\t       (<VERB? $CALL WAIT>\n\t\t<TELL-IGNORES>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (<VERONICA-UNMASKED?>\n\t\t       <TELL 'VERONICA \" Ashcroft\">)\n\t\t      (ELSE <TELL \"Titania, Queen of Faery\">)>\n\t\t<TELL \" is in her early thirties, about 5'3\\\" in height,\nweighing about 100 pounds. She is wearing a voluminous white gown and\nsilvered fairy wings. Her mask is quite striking.\">\n\t\t<LONG-MASK-DESC>)\n\t       (<VERB? UNMASK ATTACK KILL TAKE CUT>\n\t\t<TELL\n\"\\\"Stop that! \" 'MICHAEL \", help me!\\\"\">\n\t\t<COND (<IN? ,MICHAEL ,HERE>\n\t\t       <TELL \" \" 'MICHAEL \" restrains you, a quizzical look in\nhis eye.\">)>\n\t\t<CRLF>)\n\t       (<VERB? HELP RUB BRUSH>\n\t\t<TELL\n\"She fends you off, angrily. \\\"I don't need any help from you!\\\"\" CR>)\n\t       (<AND <VERB? ASK-ABOUT> <EQUAL? ,PRSO ,VERONICA>>\n\t\t<TELL-IGNORES>)\n\t       (<VERB? DANCE>\n\t\t<TELL\n\"\\\"Some other time.\\\" You get the impression this will be soon after the\nfirst ski resort opens in the infernal regions.\" CR>)>>"
  },
  "G-VERONICA": {
   "name": "G-VERONICA",
   "file": "people.zil",
   "line": 1016,
   "endLine": 1032,
   "source": "<ROUTINE G-VERONICA (GARG)\n\t <COND (<NOT .GARG> <IMOVEMENT ,VERONICA G-VERONICA>)\n\t       (<EQUAL? .GARG ,G-REACHED ,G-ALREADY>\n\t\t<COND (<IN? ,VERONICA ,OFFICE>\n\t\t       <SETG YELL-TIME\n\t\t\t     <+ <- ,PRESENT-TIME\n\t\t\t\t   <MOD ,PRESENT-TIME 5>>\n\t\t\t\t5>>\n\t\t       <ENABLE <QUEUE I-ALICIA-SNEAKS 2>>\n\t\t       <MOVE ,FAIRY-COSTUME ,CORPSE>\n\t\t       <MOVE ,FAIRY-MASK ,OFFICE>\n\t\t       <FCLEAR ,FAIRY-MASK ,NDESCBIT>\n\t\t       <MOVE ,STAIN ,CORPSE>\n\t\t       <MOVE ,HAIR ,FAIRY-MASK>\n\t\t       <REMOVE ,VERONICA>\n\t\t       <FSET ,VERONICA ,NDESCBIT>\n\t\t       <RFALSE>)>)>>"
  },
  "CORPSE-DESC-F": {
   "name": "CORPSE-DESC-F",
   "file": "people.zil",
   "line": 1049,
   "endLine": 1073,
   "source": "<ROUTINE CORPSE-DESC-F (\"OPTIONAL\" (RARG <>))\n\t %<DEBUG-CODE\n\t\t  <COND (<AND ,GOSSIP <NOT <FSET? ,WINNER ,TOLD>>>\n\t\t\t <TELL \"[Corpse: \" CD ,WINNER \" sees it.]\" CR>)>>\n\t <FSET ,WINNER ,TOLD>\n\t <COND (<NOT <FSET? ,CORPSE ,TOUCHBIT>>\n\t\t<TELL\n\"Slumped behind \" THE ,LARGE-DESK \" is the body of \" 'VERONICA \" Ashcroft.\">\n\t\t<COND (<NOT <IN? ,FAIRY-MASK ,CORPSE>>\n\t\t       <TELL \" Her\nmask has been pulled off, though the rest of the costume is intact.\">)>\n\t\t<COND (<FSET? ,ROPE ,NDESCBIT>\n\t\t       <REMOVE ,NOT-ROPE>\n\t\t       <TELL\n\" Around her neck is the agent of death, a rope. In fact, it's your lariat,\nwhich you got tired of carrying around and hung in the closet with your\ncoat.\">)>\n\t\t<CRLF>)\n\t       (ELSE\n\t\t<TELL\n\"Lying in a heap is the body of \" 'VERONICA \" Ashcroft, strangled\">\n\t\t<COND (<FSET? ,ROPE ,NDESCBIT>\n\t\t       <REMOVE ,NOT-ROPE>\n\t\t       <TELL \" with a cowboy's lariat\">)>\n\t\t<TELL \".\" CR>)>>"
  },
  "TALKING-TO?": {
   "name": "TALKING-TO?",
   "file": "people.zil",
   "line": 1075,
   "endLine": 1079,
   "source": "<ROUTINE TALKING-TO? (PER)\n\t <COND (<VERB? SHOW REVEAL $REVEAL>\n\t\t<COND (<EQUAL? ,PRSI .PER> <RTRUE>)>)\n\t       (<VERB? $CALL ASK-ABOUT ASK-FOR TELL-ME HELLO>\n\t\t<COND (<EQUAL? ,PRSO .PER> <RTRUE>)>)>>"
  },
  "CORPSE-F": {
   "name": "CORPSE-F",
   "file": "people.zil",
   "line": 1083,
   "endLine": 1180,
   "source": "<ROUTINE CORPSE-F ()\n\t <COND (<OR <EQUAL? ,WINNER ,CORPSE>\n\t\t    <AND <VERB? TELL>\n\t\t\t <EQUAL? ,PRSO ,CORPSE>>>\n\t\t<SETG P-CONT <>>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<TELL\n\"At this point, it would take a seance.\" CR>)\n\t       (<TALKING-TO? ,CORPSE>\n\t\t<TELL\n\"For obvious reasons, there is no response.\" CR>)\n\t       (<AND <VERB? SHOW>\n\t\t     <EQUAL? ,PRSO ,CORPSE>\n\t\t     <FSET? ,PRSI ,PERSON>\n\t\t     <NOT <EQUAL? ,PRSI ,PLAYER>>>\n\t\t<REVEAL-MURDER ,PRSI>\n\t\t<TELL\nCD ,PRSI \" recoils in horror. \\\"No!\" ,CALLING-POLICE \" \" HE/SHE ,PRSI\n\" says.\" CR>)\n\t       (<VERB? DANCE>\n\t\t<TELL\n,HAVE-TO \"lead, you can be sure of that.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n'VERONICA \" is still wearing her costume, stained with whatever she was\ndrinking.\"> <COND (<NOT <IN? ,FAIRY-MASK ,CORPSE>>\n\t\t   <TELL \" Her mask has been removed.\">)>\n\t    <TELL \" She was obviously strangled\">\n\t    <COND (<IN? ,CORPSE ,OFFICE>\n\t\t   <TELL \", but\nthere are few signs of a struggle\">)>\n\t   <TELL \".\" CR>)\n\t       (<VERB? HELP BRUSH ALARM>\n\t\t<TELL\n\"It's too late to help \" 'VERONICA \" now.\" CR>)\n\t       (<VERB? LISTEN>\n\t\t<TELL\n,THERE-IS \"no sign of breathing.\" CR>)\n\t       (<VERB? RUB>\n\t\t<TELL \"The body is \">\n\t\t<COND (<L? ,PRESENT-TIME 570>\n\t\t       <TELL \"still warm.\" CR>)\n\t\t      (<L? ,PRESENT-TIME 630>\n\t\t       <TELL \"cooling off.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL \"cold.\" CR>)>)\n\t       (<VERB? LOOK-UNDER RAISE SEARCH>\n\t\t<COND (<IN? ,BULLET ,CORPSE>\n\t\t       <FCLEAR ,BULLET ,INVISIBLE>\n\t\t       <MOVE ,BULLET ,HERE>\n\t\t       <TELL\n\"As you look under the body, you notice a small object on the floor\nbeneath it.\" CR>)\n\t\t      (<VERB? SEARCH>\n\t\t       <TELL\n\"A search reveals nothing beyond what was first apparent.\" CR>)>)\n\t       (<AND <VERB? TAKE MOVE> <EQUAL? ,PRSO ,CORPSE>>\n\t\t<COND (<IN? ,DETECTIVE ,HERE>\n\t\t       <TELL\nCTHE ,DETECTIVE ,STOPS-YOU CR>)\n\t\t      (<IN? ,DUFFY ,HERE>\n\t\t       <TELL\n'DUFFY ,STOPS-YOU CR>)\n\t\t      (<OR <VERB? MOVE>\n\t\t\t   <EQUAL? <ITAKE> ,M-HANDLED>>\n\t\t       <COND (<VERB? MOVE>\n\t\t\t      <TELL \"Moved\">)\n\t\t\t     (T\n\t\t\t      <SETG PLAYER-MOVED-BODY? T>\n\t\t\t      <TELL \"Taken\">)>\n\t\t       <TELL\n\", but the body is heavy.\">\n\t\t       <FCLEAR ,ROPE ,NDESCBIT>\n\t\t       <COND (<IN? ,BULLET ,CORPSE>\n\t\t\t      <FCLEAR ,BULLET ,INVISIBLE>\n\t\t\t      <MOVE ,BULLET ,HERE>\n\t\t\t      <TELL\n\" As you move the body a small object drops to the floor beneath it.\">)>\n\t\t       <CRLF>)>\n\t\t<RTRUE>)\n\t       (<VERB? DROP>\n\t\t<MOVE ,PRSO ,HERE>\n\t\t<TELL \"The body drops like a sack of potatoes.\" CR>)\n\t       (<VERB? POUR-ON THROW MUNG>\n\t\t<TELL \"That might destroy evidence.\" CR>)\n\t       (<AND <VERB? SLAP KILL ATTACK TIE-WITH TIE-TO>\n\t\t     <EQUAL? ,PRSO ,CORPSE>>\n\t\t<TELL\n\"She's quite dead already, you know.\" CR>)\n\t       (<AND <VERB? THROW-AT> <EQUAL? ,PRSI ,CORPSE>>\n\t\t<MOVE ,PRSO ,HERE>\n\t\t<TELL \"That wasn't very sporting.\" CR>)\n\t       (<AND <VERB? WALK-TO> <NOT <FSET? ,WINNER ,TOLD>>>\n\t\t<TELL \"What corpse?\" CR>)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSI ,CORPSE>\n\t\t     <NOT <EQUAL? ,PRSO ,FAIRY-MASK>>>\n\t\t<TELL-WONT-FIT>)>>"
  },
  "TELL-WONT-FIT": {
   "name": "TELL-WONT-FIT",
   "file": "people.zil",
   "line": 1182,
   "endLine": 1183,
   "source": "<ROUTINE TELL-WONT-FIT ()\n\t <TELL \"It won't fit.\" CR>>"
  },
  "BULLET-F": {
   "name": "BULLET-F",
   "file": "people.zil",
   "line": 1195,
   "endLine": 1227,
   "source": "<ROUTINE BULLET-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"It looks just like the ones\" ,IN-GUNBELT CR>)\n\t       (<VERB? COUNT>\n\t\t<COND (<EQUAL? <META-LOC ,GUNBELT> ,HERE>\n\t\t       <COND (<IN? ,BULLET ,GUNBELT>\n\t\t\t      <TELL \"All the loops have bullets in them.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n,SEEMS-TO-BE \"one empty loop\" ,IN-GUNBELT CR>)>)\n\t\t      (T <TELL \"One.\" CR>)>)\n\t       (<AND <VERB? PUT> <EQUAL? ,PRSI ,GUNBELT>>\n\t\t<COND (<IN? ,BULLET ,GUNBELT>\n\t\t       <TELL \"All the bullets are\" ,IN-GUNBELT CR>)\n\t\t      (T\n\t\t       <FSET ,BULLET ,NDESCBIT>\n\t\t       <MOVE ,BULLET ,GUNBELT>\n\t\t       <TELL\n\"Okay, each loop of the belt now has a bullet in it.\" CR>)>)\n\t       (<VERB? TAKE>\n\t\t<COND (<DONT-TAKE-EVIDENCE ,BULLET> <RTRUE>)\n\t\t      (<IN? ,BULLET ,GUNBELT>\n\t\t       <FCLEAR ,BULLET ,NDESCBIT>)\n\t\t      (<EQUAL? ,PRSI ,GUNBELT>\n\t\t       <TELL\n\"Isn't one enough? \" ,DO-YOU-WANT-TO \"scatter them all over?\" CR>\n\t\t       <RTRUE>)>\n\t\t<FSET ,BULLET ,RMUNGBIT>\n\t\t<RFALSE>)\n\t       (<VERB? BRUSH>\n\t\t<FCLEAR ,BULLET ,RMUNGBIT>\n\t\t<TELL\n\"It's now shiny clean again.\" CR>)>>"
  },
  "FAIRY-COSTUME-F": {
   "name": "FAIRY-COSTUME-F",
   "file": "people.zil",
   "line": 1238,
   "endLine": 1248,
   "source": "<ROUTINE FAIRY-COSTUME-F (\"AUX\" (DEAD? <IN? ,FAIRY-COSTUME ,CORPSE>))\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"This is a gossamer \" 'FAIRY-COSTUME \", intended to represent Titania, Queen of\nFaery. It has a silver belt. On the back are fairy wings\">\n<COND (.DEAD? <TELL \", now crushed\">)> <TELL \". The\nbeauty of the costume is marred by a large red stain on the front.\" CR>)\n\t       (<VERB? TAKE>\n\t\t<TELL\n\"Taking the costume would get you into even deeper trouble than you are\nin now.\" CR>)>>"
  },
  "STAIN-F": {
   "name": "STAIN-F",
   "file": "people.zil",
   "line": 1265,
   "endLine": 1268,
   "source": "<ROUTINE STAIN-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The large red stain spreads over the front of the costume.\" CR>)>>"
  },
  "FAIRY-MASK-F": {
   "name": "FAIRY-MASK-F",
   "file": "people.zil",
   "line": 1282,
   "endLine": 1320,
   "source": "<ROUTINE FAIRY-MASK-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"This is a very ornate and beautiful mask.\">\n\t\t<LONG-MASK-DESC>)\n\t       (<AND <IN? ,FAIRY-MASK ,VERONICA>\n\t\t     <VERB? TAKE LOOK-INSIDE LOOK-UNDER RUB LOOK-BEHIND MOVE>>\n\t\t<TELL\n\"As you reach for the mask, \" 'VERONICA \" pulls back, surprised.\">\n\t\t<COND (<IN? ,MICHAEL ,HERE>\n\t\t       <TELL\n\" \" 'MICHAEL \" knocks your hand away. \\\"What do you think you're doing?\\\"\nhe says angrily. \\\"Are you trying to hurt my wife?\\\"\">)>\n\t\t<CRLF>)\n\t       (<VERB? TAKE> <FCLEAR ,FAIRY-MASK ,WEARBIT> <RFALSE>)\n\t       (<AND <VERB? PUT> <EQUAL? ,PRSI ,CORPSE>>\n\t\t<MOVE ,FAIRY-MASK ,CORPSE>\n\t\t<FSET ,FAIRY-MASK ,WEARBIT>\n\t\t<TELL \"Okay, the mask is on the body.\" CR>)\n\t       (<OR <VERB? LOOK-INSIDE SEARCH>\n\t\t    <AND <VERB? SEARCH-OBJECT-FOR>\n\t\t\t <EQUAL? ,PRSO ,FAIRY-MASK>>>\n\t\t<COND (<IN? ,FAIRY-MASK ,WINNER>\n\t\t       <TELL\n\"The inside of the mask is slightly damp with sweat.\">\n\t\t       <COND (<AND <IN? ,HAIR ,FAIRY-MASK>\n\t\t\t\t   <NOT <FSET? ,HAIR ,TOUCHBIT>>>\n\t\t\t      <FCLEAR ,HAIR ,INVISIBLE>\n\t\t\t      <TELL\n\" Caught in the silver mesh is \" A ,HAIR>\n\t\t\t      <PRINT-CONTENTS ,FAIRY-MASK\n\t\t\t\t\t      \". There is also \"\n\t\t\t\t\t      ,HAIR>\n\t\t\t      <TELL \".\">)\n\t\t\t     (<PRINT-CONTENTS ,FAIRY-MASK\n\t\t\t\t\t      \" The mask contains \">\n\t\t\t      <TELL \".\">)>\n\t\t       <CRLF>)\n\t\t      (ELSE <TELL ,YOU-DONT-HAVE \"it.\" CR>)>)>>"
  },
  "HAIR-F": {
   "name": "HAIR-F",
   "file": "people.zil",
   "line": 1331,
   "endLine": 1343,
   "source": "<ROUTINE HAIR-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The hair is dark and medium in length.\" CR>)\n\t       (<VERB? COMPARE>\n\t\t<COND (<EQUAL? ,VERONICA-HAIR ,PRSO ,PRSI>\n\t\t       <THEY-ARENT \"even the same color\">)\n\t\t      (<EQUAL? ,ALICIA-HAIR ,PRSO ,PRSI>\n\t\t       <TELL\n\"The hairs look very similar in both color and length.\" CR>)\n\t\t      (<EQUAL? ,LINDA-HAIR ,PRSO ,PRSI>\n\t\t       <TELL\n\"They don't resemble each other at all.\" CR>)>)>>"
  },
  "VERONICA-HAIR-F": {
   "name": "VERONICA-HAIR-F",
   "file": "people.zil",
   "line": 1354,
   "endLine": 1357,
   "source": "<ROUTINE VERONICA-HAIR-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n'PRSO \" is short and blonde.\" CR>)>>"
  },
  "ALICIA-HAIR-F": {
   "name": "ALICIA-HAIR-F",
   "file": "people.zil",
   "line": 1367,
   "endLine": 1373,
   "source": "<ROUTINE ALICIA-HAIR-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n'ALICIA-HAIR \" is medium length and dark.\" CR>)\n\t       (<VERB? MOVE>\n\t\t<TELL\n'ALICIA \" fends you off. \\\"Are you crazy?\\\"\" CR>)>>"
  },
  "LINDA-HAIR-F": {
   "name": "LINDA-HAIR-F",
   "file": "people.zil",
   "line": 1383,
   "endLine": 1389,
   "source": "<ROUTINE LINDA-HAIR-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"Linda's hair is long and red.\" CR>)\n\t       (<VERB? MOVE>\n\t\t<TELL\n\"Linda pushes you away. \\\"Ouch!\\\"\" CR>)>>"
  },
  "PULSE-F": {
   "name": "PULSE-F",
   "file": "people.zil",
   "line": 1400,
   "endLine": 1407,
   "source": "<ROUTINE PULSE-F ()\n\t <COND (<NOT <EQUAL? <META-LOC ,CORPSE> ,HERE>>\n\t\t<NOT-HERE ,PULSE>)\n\t       (<VERB? TAKE ANALYZE RUB FIND>\n\t\t<TELL ,THERE-IS \"no sign of life in the corpse.\" CR>)\n\t       (<VERB? PUT> <TELL-YOU-CANT \"take that\">)\n\t       (<VERB? LISTEN>\n\t\t<TELL \"You hear nothing.\" CR>)>>"
  },
  "REVEAL-MURDER": {
   "name": "REVEAL-MURDER",
   "file": "people.zil",
   "line": 1409,
   "endLine": 1436,
   "source": "<ROUTINE REVEAL-MURDER (WHO \"AUX\" N X (NEWS? <NOT <FSET? .WHO ,TOLD>>))\n\t <COND (.NEWS?\n\t\t<FSET .WHO ,TOLD>\n\t\t%<DEBUG-CODE\n\t\t  <COND (,GOSSIP\n\t\t\t <TELL\n\"[\" CD .WHO \" revealed in \" D <LOC .WHO> \".]\" CR>)>>)>\n\t <SET X <FIRST? <LOC .WHO>>>\n\t <REPEAT ()\n\t\t <COND (<NOT .X> <RETURN>)>\n\t\t <SET N <NEXT? .X>>\n\t\t <COND (<AND <FSET? .X ,PERSON>\n\t\t\t     <NOT <FSET? .X ,TOLD>>>\n\t\t\t%<DEBUG-CODE\n\t\t\t  <COND (,GOSSIP\n\t\t\t\t <TELL\n\"[\" CD .X \" overhears in \" D <LOC .X> \".]\" CR>)>>\n\t\t\t<FSET .X ,TOLD>)>\n\t\t <SET X .N>>\n\t <COND (<NOT ,MURDER-PUBLIC?>\n\t\t<SETG MURDER-PUBLIC? .WHO>\n\t\t%<DEBUG-CODE\n\t\t   <COND (,GOSSIP\n\t\t\t  <TELL \"[\" D ,MURDER-PUBLIC? \" called police.]\" CR>)>>\n\t\t<FSET ,DETECTIVE ,TOLD>\n\t\t<FSET ,DUFFY ,TOLD>\n\t\t<ENABLE <QUEUE I-POLICE-ARRIVE 25>>)>\n\t <RETURN .NEWS?>>"
  },
  "POLICE-F": {
   "name": "POLICE-F",
   "file": "people.zil",
   "line": 1446,
   "endLine": 1493,
   "source": "<ROUTINE POLICE-F (\"AUX\" WHO)\n\t <COND (<VERB? PHONE>\n\t\t<COND (<NOT <GLOBAL-IN? ,TELEPHONE ,HERE>>\n\t\t       <TELL\n\"If you yell loud enough, perhaps you can overcome the lack of a\ntelephone.\" CR>\n\t\t       <RTRUE>)>\n\t\t<TELL \"A bored desk sergeant answers the telephone. \">\n\t\t<COND (,MURDER-PUBLIC?\n\t\t       <TELL\n\"You describe the situation,\nbut he says, \\\"Hey, we're sending someone over, in fact, two of our best\nofficers are on the case.\\\"\" CR>)\n\t\t      (<NOT <FSET? ,OFFICE ,TOUCHBIT>>\n\t\t       <TELL\n\"After a few minutes of listening\nto you, he asks angrily if you have anything to report. Not getting a\nreasonable answer to that poser, he hangs up.\" CR>)\n\t\t      (ELSE\n\t\t       <REVEAL-MURDER ,PLAYER>\n\t\t       <TELL\n\"He becomes considerably less\nbored as you describe the situation. \\\"Don't let anyone leave,\\\" he says.\n\\\"There'll be someone there in no time. Don't touch anything!\\\"\" CR>)>)\n\t       (<VERB? WAIT-FOR>\n\t\t<PERFORM ,V?WAIT-FOR ,DETECTIVE>\n\t\t<RTRUE>)\n\t       (<OR <AND <IN? ,DETECTIVE ,HERE>\n\t\t\t <SET WHO ,DETECTIVE>>\n\t\t    <AND <IN? ,DUFFY ,HERE>\n\t\t\t <SET WHO ,DUFFY>>>\n\t\t<PERFORM ,PRSA\n\t\t\t <COND (<EQUAL? ,PRSO ,POLICE> .WHO)\n\t\t\t       (ELSE ,PRSO)>\n\t\t\t <COND (<EQUAL? ,PRSI ,POLICE> .WHO)\n\t\t\t       (ELSE ,PRSI)>>\n\t\t<RTRUE>)\n\t       (<AND <VERB? ASK-ABOUT TELL-ME>\n\t\t     <EQUAL? ,PRSI ,POLICE>>\n\t\t<RFALSE>)\n\t       (<VERB? FIND>\n\t\t<TELL\n\"You never can find a policeman when you want one, can you?\" CR>)\n\t       (ELSE\n\t\t<COND (<VERB? TELL>\n\t\t       <SETG P-CONT <>>\n\t\t       <SETG QUOTE-FLAG <>>)>\n\t\t<TELL ,HAVE-TO \"find one first.\" CR>)>>"
  },
  "ALICIA-DESC-F": {
   "name": "ALICIA-DESC-F",
   "file": "people.zil",
   "line": 1517,
   "endLine": 1524,
   "source": "<ROUTINE ALICIA-DESC-F (\"OPTIONAL\" (RARG <>))\n\t <TELL 'ALICIA \", \">\n\t <COND (<IN? ,ALICIA-COAT ,ALICIA>\n\t\t<TELL \"wearing a wet overcoat\">)\n\t       (ELSE\n\t\t<TELL \"dressed in harem silks\">)>\n\t <TELL \", is\">\n\t <TELL-HERE>>"
  },
  "ALICIA-COAT-F": {
   "name": "ALICIA-COAT-F",
   "file": "people.zil",
   "line": 1545,
   "endLine": 1567,
   "source": "<ROUTINE ALICIA-COAT-F ()\n\t <COND (<VERB? LOOK-INSIDE LOOK-UNDER EXAMINE TAKE TAKE-OFF READ>\n\t\t<COND (<IN? ,ALICIA-COAT ,ALICIA>\n\t\t       <COND (<NOT <VERB? EXAMINE>>\n\t\t\t      <TELL\n'ALICIA \" draws the coat more tightly around herself. \\\"Just what do you\nthink you're doing?\\\" she asks, frostily.\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"It's a wet overcoat.\" CR>)>)\n\t\t      (<IN? ,ALICIA-COAT ,BUTLER>\n\t\t       <TELL \"The butler has the coat now.\" CR>)\n\t\t      (<NOT <VERB? TAKE TAKE-OFF>>\n\t\t       <FCLEAR ,LABEL ,INVISIBLE>\n\t\t       <TELL <GETP ,LABEL ,P?TEXT> CR>)>)\n\t       (<VERB? SMELL>\n\t\t<TELL\n\"It smells wet.\" CR>)\n\t       (<VERB? RUB>\n\t\t<TELL\n\"It feels wet.\" CR>)\n\t       (<VERB? THROUGH WEAR>\n\t\t<IT-DOESNT-FIT>)>>"
  },
  "ALICIA-F": {
   "name": "ALICIA-F",
   "file": "people.zil",
   "line": 1569,
   "endLine": 1741,
   "source": "<ROUTINE ALICIA-F (\"AUX\" (HADBIT? <>))\n\t <COND (<EQUAL? ,WINNER ,ALICIA>\n\t\t<COND (<VERB? HELLO>\n\t\t       <TELL\n\"\\\"Hello. \" ,YOU-MUST \"be the reporter \" 'VERONICA \" said was coming tonight.\\\"\" CR>)\n\t\t      (<AND <VERB? GIVE>\n\t\t\t    <EQUAL? ,PRSO ,ALICIA-COAT>\n\t\t\t    <EQUAL? ,PRSI ,BUTLER>>\n\t\t       <MOVE ,ALICIA-COAT ,BUTLER>\n\t\t       <FCLEAR ,ALICIA-COAT ,NDESCBIT>\n\t\t       <COND (<EQUAL? ,HERE <LOC ,ALICIA>>\n\t\t\t      <TELL\n'ALICIA \" gives \" 'BUTLER \" her coat, which is soaking wet. Underneath\nshe is wearing a harem girl costume which leaves little to the imagination.\"\nCR>)>\n\t\t       <RTRUE>)\n\t\t      (<DONT-HANDLE?> <RFALSE>)\n\t\t      (ELSE\n\t\t       <TELL\n\"\\\"I beg your pardon?\\\" she replies.\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n'ALICIA \" Barron, a dark-haired young woman about 5'2\\\" tall, is dressed \">\n\t\t<COND (<IN? ,ALICIA-COAT ,ALICIA>\n\t\t       <TELL\n\"in a soaking wet overcoat. \">\n\t\t       <TELL-YOU-CANT \"tell what costume she may be wearing\nunderneath\">)\n\t\t      (ELSE\n\t\t       <TELL \"as\na harem girl. She is a slender, attractive woman. The costume is a\nrevealing one, and she seems to be pleased with the results.\" CR>)>)\n\t       (<AND <VERB? $REVEAL> <EQUAL? ,PRSO ,GLOBAL-MURDER>>\n\t\t<REVEAL-MURDER ,ALICIA>\n\t\t<COND (<IN? ,PRSI ,HERE>\n\t\t       <SOMEONE-TELLS-ALICIA T>)\n\t\t      (<NEARBY? ,ALICIA>\n\t\t       <SOMEONE-TELLS-ALICIA <>>)>)\n\t       (<AND <VERB? REVEAL> <EQUAL? ,PRSO ,GLOBAL-MURDER>>\n\t\t<COND (<REVEAL-MURDER ,ALICIA>\n\t\t       <ALICIA-HORRIFIED>)\n\t\t      (T\n\t\t       <TELL \"\\\"Yes, I know, isn't it horrible?\\\"\" CR>)>)\n\t       (<AND <VERB? ASK-ABOUT> <EQUAL? ,PRSO ,ALICIA>>\n\t\t<COND (<NOT <FSET? ,PRSI ,PERSON>>\n\t\t       <COND (<EQUAL? ,PRSI ,GLOBAL-MURDER>\n\t\t\t      <COND (<FSET? ,PRSO ,TOLD>\n\t\t\t\t     <ALICIA-HORRIFIED>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL\n\"\\\"What murder do you mean?\\\"\" CR>)>)\n\t\t\t     (<EQUAL? ,PRSI ,ALICIA-COAT>\n\t\t\t      <TELL\n\"\\\"What about it? It's just my wet overcoat.\\\"\" CR>)\n\t\t\t     (<EQUAL? ,PRSI ,ALICIA-CAR>\n\t\t\t      <TELL\n\"\\\"I parked it on the other side of the barn, out of the way of all\nthe other cars.\\\"\" CR>)\n\t\t\t     (<EQUAL? ,PRSI ,HAIR>\n\t\t\t      <COND (<EQUAL? <META-LOC ,HAIR> ,HERE>\n\t\t\t\t     <TELL\n\"She examines the hair carefully. \\\"It doesn't look like one of mine to\nme,\\\" she says. She doesn't sound terribly convincing.\" CR>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <TELL\n,I-DONT-KNOW \"what you mean.\\\"\" CR>)>)\n\t\t\t     (<EQUAL? ,PRSI ,HORSE>\n\t\t\t      <TELL\n\"\\\"I'm not the rider that some here are: \" 'VERONICA \" \"\n<COND (<FSET? ,ALICIA ,TOLD> \"was\") (T \"has been\")> \" a dressage\nchampion several times. I like riding to hounds though. Except at the\nend when the dogs get the fox. I can't stand the sight of blood.\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <I-DONT-KNOW-ABOUT \"that\">)>)\n\t\t      (<EQUAL? ,PRSI ,PLAYER>\n\t\t       <TELL\n\"\\\"\" 'VERONICA \" mentioned you to me a week or two ago, and I suggested she\ninvite you. She remembers you fondly from school.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,ALICIA ,GLOBAL-ALICIA>\n\t\t       <TELL\n\"\\\"There's not much to say. I've had a pretty dull life, not anything\nthat would interest your readers.\\\"\" CR>)\n\t\t      (<IN? ,PRSI ,HERE>\n\t\t       <TELL\n\"\\\"I have nothing but good things to say about \" HIM/HER ,PRSI \".\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-MICHAEL>\n\t\t       <COND (<NOT <FSET? ,PRSO ,TOLD>>\n\t\t\t      <TELL\n\"\\\"\" 'MICHAEL \" is a fine man. I wish I could say that \" 'VERONICA \" treats him\nas well as he deserves.\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"Now he's free of that creature! It serves her right.\\\"\" CR>)>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-VERONICA>\n\t\t       <COND (<NOT <FSET? ,PRSO ,TOLD>>\n\t\t\t      <TELL\n\"\\\"\" 'VERONICA \" and I went to school together. I probably know her as\nwell as anyone. She has her faults. Of course, I suppose\nwe all do.\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"She was too hard a woman. She must have just pushed someone too hard.\nI knew it would happen eventually.\\\"\" CR>)>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-RICHARD>\n\t\t       <TELL\n\"\\\"Poor Richard. He's such a wimp where \" 'VERONICA \" is concerned.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-COL-MARSTON>\n\t\t       <TELL\n\"\\\"A silly old fool, if you ask me. He has that sinecure job with the\ntrust. I doubt he's had an original thought in his life.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-LINDA>\n\t\t       <TELL\n\"\\\"Isn't she something? I never thought I'd see an Ashcroft hanging around\nwith the likes of her. Richard acts like he's thirteen years old sometimes,\nespecially where women are concerned.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-SEN-ASHER>\n\t\t       <TELL\n\"\\\"I'll vote for him any time. He's so handsome!\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-COCHRANE>\n\t\t       <TELL\n\"\\\"What an oaf! I can't imagine why he's here, unless it's to make trouble\nof some kind.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-OSTMANN>\n\t\t       <TELL\n\"\\\"A courtly gentleman, isn't he? That black cape makes him look almost\ncuddly.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-BUTLER>\n\t\t       <TELL\n\"\\\"\" 'BUTLER \" is so silly in that gorilla suit, and he keeps trying to look\ndignified. Perhaps I should find him some bananas to carry around.\\\" She\ngiggles.\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-BARTENDER>\n\t\t       <TELL\n\"\\\"\" 'VERONICA \" hired him for tonight.\\\"\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"\\\"I have no opinion.\\\"\" CR>)>)\n\t       (<VERB? SHOW>\n\t\t<COND (<FSET? ,PRSO ,ALICIABIT>\n\t\t       <SET HADBIT? T>\n\t\t       <FCLEAR ,PRSO ,ALICIABIT>\n\t\t       <SETG ALICIA-SEEN <+ ,ALICIA-SEEN 1>>\n\t\t       <ENABLE <QUEUE I-FLEE 10>>)>\n\t\t<COND (<EQUAL? ,PRSO ,MASK>\n\t\t       <TELL\n\"\\\"That looks like \" 'VERONICA \"'s mask.\\\"\" CR>)\n\t\t      (<AND <EQUAL? ,PRSO ,HAIR>\n\t\t\t    <IN? ,HAIR ,FAIRY-MASK>>\n\t\t       <TELL\n\"\\\"I don't see what this has to do with me. \" 'VERONICA \" probably\ndyed her hair. I wouldn't put it past her.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSO ,HAIR>\n\t\t       <TELL\n\"\\\"Why are you showing me this? It's just a hair.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSO ,HAIR-ANALYSIS>\n\t\t       <TELL\n\"\\\"That's silly! You think it's my hair? Millions of women have dark\nhair! You know those costume places, they don't really clean the costumes\nvery well, the hair's probably been there for months.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSO ,CORPSE>\n\t\t       <COND (<REVEAL-MURDER ,ALICIA>\n\t\t\t      <TELL\n\"It takes Alicia a few moments to recover from the shock. Then, suddenly,\nshe laughs! \\\"This is wonderful! Now I can marry \" 'MICHAEL \"! But why\nare you doing this?\" ,CALLING-POLICE CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"Yes, I know. It's horrible, isn't it?\\\" She chuckles. \\\"She was my\nfriend, but I'm glad she's dead. Now I can marry \" 'MICHAEL \".\\\"\" CR>)>)\n\t\t      (.HADBIT?\n\t\t       <TELL\n,I-DONT-KNOW \"what you hope to accomplish waving these things in my\nface.\\\"\" CR>)>)>>"
  },
  "ALICIA-HORRIFIED": {
   "name": "ALICIA-HORRIFIED",
   "file": "people.zil",
   "line": 1743,
   "endLine": 1746,
   "source": "<ROUTINE ALICIA-HORRIFIED ()\n\t <TELL\n\"\\\"It's horrible! She was my best friend. Who could have done such\na thing?\\\"\" CR>>"
  },
  "SOMEONE-TELLS-ALICIA": {
   "name": "SOMEONE-TELLS-ALICIA",
   "file": "people.zil",
   "line": 1748,
   "endLine": 1751,
   "source": "<ROUTINE SOMEONE-TELLS-ALICIA (HERE?)\n\t <TELL\nCD ,WINNER \" tells Alicia \" <COND (.HERE? \"of the murder\") (T \"something\")>\n\". It horrifies and then elates her.\" CR>>"
  },
  "I-FLEE": {
   "name": "I-FLEE",
   "file": "people.zil",
   "line": 1764,
   "endLine": 1771,
   "source": "<ROUTINE I-FLEE ()\n\t <COND (<G? ,ALICIA-SEEN 2>\n\t\t<SETG FLEEING? T>\n\t\t<ESTABLISH-GOAL ,ALICIA ,SITTING-ROOM T>)>\n\t <COND (<G? ,MICHAEL-SEEN 1>\n\t\t<SETG FLEEING? T>\n\t\t<ESTABLISH-GOAL ,MICHAEL ,SITTING-ROOM T>)>\n\t <RFALSE>>"
  },
  "NOT-ROPE-F": {
   "name": "NOT-ROPE-F",
   "file": "people.zil",
   "line": 1780,
   "endLine": 1789,
   "source": "<ROUTINE NOT-ROPE-F ()\n\t <REMOVE ,NOT-ROPE>\n\t <TELL\n\"Remember, the silly thing was getting in your way, particularly when you\ndanced, so you went back and hung it in the closet with your coat.\">\n\t <COND (<EQUAL? ,HERE ,EAST-COAT-CLOSET>\n\t\t<TELL\n\" But it doesn't seem to be here now.\">)>\n\n\t <CRLF>>"
  },
  "ROPE-F": {
   "name": "ROPE-F",
   "file": "people.zil",
   "line": 1798,
   "endLine": 1808,
   "source": "<ROUTINE ROPE-F ()\n\t <REMOVE ,NOT-ROPE>\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"It's a fairly thin rope, like the sort of rope movie cowboys carry. It\nlooks serviceable, though.\" CR>)\n\t       (<VERB? TAKE>\n\t\t<COND (<DONT-TAKE-EVIDENCE ,ROPE> <RTRUE>)\n\t\t      (T\n\t\t       <FCLEAR ,ROPE ,NDESCBIT>\n\t\t       <RFALSE>)>)>>"
  },
  "DONT-TAKE-EVIDENCE": {
   "name": "DONT-TAKE-EVIDENCE",
   "file": "people.zil",
   "line": 1810,
   "endLine": 1817,
   "source": "<ROUTINE DONT-TAKE-EVIDENCE (OBJ \"AUX\" WHO)\n\t <COND (<IN? ,DETECTIVE ,HERE>\n\t\t<SET WHO ,DETECTIVE>)\n\t       (<IN? ,DUFFY ,HERE>\n\t\t<SET WHO ,DUFFY>)\n\t       (ELSE <RFALSE>)>\n\t <TELL CD .WHO \" stops you. \\\"That \" D .OBJ \" is evidence. Don't\ntake it!\\\"\" CR>>"
  },
  "TELL-ALICIA-ARRIVES": {
   "name": "TELL-ALICIA-ARRIVES",
   "file": "people.zil",
   "line": 1821,
   "endLine": 1822,
   "source": "<ROUTINE TELL-ALICIA-ARRIVES ()\n\t <TELL \"Alicia Barron\" ,ARRIVES>>"
  },
  "TELL-ARRIVES": {
   "name": "TELL-ARRIVES",
   "file": "people.zil",
   "line": 1826,
   "endLine": 1827,
   "source": "<ROUTINE TELL-ARRIVES (WHO)\n\t <TELL CD .WHO ,ARRIVES>>"
  },
  "G-ALICIA": {
   "name": "G-ALICIA",
   "file": "people.zil",
   "line": 1829,
   "endLine": 1880,
   "source": "<ROUTINE G-ALICIA (GARG \"AUX\" (L <LOC ,ALICIA>))\n\t <COND (<NOT .GARG> <IMOVEMENT ,ALICIA G-ALICIA>)\n\t       (<EQUAL? .GARG ,G-IMPATIENT>\n\t\t<TELL\n\"Alicia seems to be looking for any excuse to leave you.\" CR>)\n\t       (<EQUAL? .GARG ,G-ENROUTE>\n\t\t<COND (<AND <EQUAL? .L ,HALLWAY-12>\n\t\t\t    <IN? ,ALICIA-COAT ,ALICIA>>\n\t\t       <FCLEAR ,ALICIA-COAT ,NDESCBIT>\n\t\t       <MOVE ,ALICIA-COAT ,EAST-COAT-CLOSET>\n\t\t       <COND (<OR <CORRIDOR-LOOK ,ALICIA>\n\t\t\t\t  <EQUAL? ,HERE ,EAST-COAT-CLOSET>>\n\t\t\t      <TELL\n'ALICIA \" deposits her coat in the coat closet.\" CR>)>)>)\n\t       (<EQUAL? .GARG ,G-REACHED ,G-ALREADY>\n\t\t<COND (<AND <IN? ,ALICIA ,BALLROOM-5>\n\t\t\t    <IN? ,MICHAEL ,BALLROOM-5>>\n\t\t       <SETG ALICIA-HERE? T>\n\t\t       <THEY-DANCE ,ALICIA>)\n\t\t      (<EQUAL? .L ,PORCH>\n\t\t       <SETG NEW-ARRIVAL ,ALICIA>\n\t\t       <ESTABLISH-GOAL ,MICHAEL ,BALLROOM-5>\n\t\t       <ESTABLISH-GOAL ,BUTLER ,HALL T>\n\t\t       <COND (<EQUAL? ,HERE ,PORCH>\n\t\t\t      <TELL-ALICIA-ARRIVES>\n\t\t\t      <TELL\n\"front porch. Her overcoat is soaking wet.\">\n\t\t\t      <COND (<NOT ,PLAYER-HIDING>\n\t\t\t\t     <TELL\n\" \\\"Hi,\\\" she says. \\\"Late as usual. I parked back near the barn, there\nare so many cars out here I'm afraid someone would dent mine.\\\"\">)>\n\t\t\t      <TELL\n\" She rings \" THE ,DOORBELL \".\" CR>)\n\t\t\t     (<EQUAL? ,HERE ,CIRCLE>\n\t\t\t      <TELL-ALICIA-ARRIVES>\n\t\t\t      <TELL\n'FRONT-DOOR \" and rings the bell.\" CR>)\n\t\t\t     (<NOT <OUTSIDE? ,HERE>>\n\t\t\t      <TELL\nCTHE ,DOORBELL \" rings.\" CR>)>)\n\t\t      (<AND ,FLEEING? <EQUAL? .L ,SITTING-ROOM>>\n\t\t       <UNPRIORITIZE ,ALICIA>\n\t\t       <COND (<IN? ,MICHAEL .L>\n\t\t\t      <GOALS? ,MICHAEL T>\n\t\t\t      <ESTABLISH-GOAL ,ALICIA ,BARN T>\n\t\t\t      <ESTABLISH-GOAL ,MICHAEL ,BARN T>)\n\t\t\t     (T\n\t\t\t      <GOALS? ,ALICIA <>>)>\n\t\t       <RFALSE>)\n\t\t      (<EQUAL? .L ,BARN>\n\t\t       <GOALS? ,ALICIA <>>\n\t\t       <BARN-DANCE ,ALICIA>)>)>>"
  },
  "BARN-DANCE": {
   "name": "BARN-DANCE",
   "file": "people.zil",
   "line": 1882,
   "endLine": 1890,
   "source": "<ROUTINE BARN-DANCE (WHO \"AUX\" (FLG <>))\n\t <ENABLE <QUEUE I-ESCAPE 20>>\n\t <COND (<FSET? ,BARN-DOOR ,LOCKED>\n\t\t<FCLEAR ,BARN-DOOR ,LOCKED>\n\t\t<COND (<EQUAL? ,HERE ,WEST-OF-GARAGE>\n\t\t       <TELL\n'WHO \" unlocks the barn door and enters.\" CR>\n\t\t       <SET FLG T>)>)>\n\t <OR <I-SCREAMS> .FLG>>"
  },
  "I-SCREAMS": {
   "name": "I-SCREAMS",
   "file": "people.zil",
   "line": 1892,
   "endLine": 1901,
   "source": "<ROUTINE I-SCREAMS ()\n\t <ENABLE <QUEUE I-SCREAMS 1>>\n\t <COND (<AND <IN? ,MICHAEL ,BARN>\n\t\t     <IN? ,ALICIA ,BARN>\n\t\t     <EQUAL? ,HERE\n\t\t\t     ,WEST-OF-HOUSE\n\t\t\t     ,WEST-OF-GARAGE\n\t\t\t     ,NORTH-OF-HOUSE>>\n\t\t<TELL\n\"You hear shouting and screams from the direction of the barn.\" CR>)>>"
  },
  "I-ESCAPE": {
   "name": "I-ESCAPE",
   "file": "people.zil",
   "line": 1903,
   "endLine": 1909,
   "source": "<ROUTINE I-ESCAPE ()\n\t <REMOVE ,ALICIA>\n\t <DISABLE <INT I-SCREAMS>>\n\t <COND (<OUTSIDE? ,HERE>\n\t\t<TELL\n\"You hear a car off behind the barn. The sound grows fainter and\nfainter.\" CR>)>>"
  },
  "I-ALICIA-SNEAKS": {
   "name": "I-ALICIA-SNEAKS",
   "file": "people.zil",
   "line": 1911,
   "endLine": 1924,
   "source": "<ROUTINE I-ALICIA-SNEAKS ()\n\t <COND (<AND <NOT <EQUAL? ,HERE ,GARDEN ,WALKWAY ,HALLWAY-7>>\n\t\t     <NOT <EQUAL? ,HERE ,NORTH-OF-HOUSE ,HALLWAY-14>>>\n\t\t<START-ALICIA ,WALKWAY>)\n\t       (<AND <NOT <EQUAL? ,HERE\n\t\t\t\t  ,HALLWAY-4 ,HALLWAY-3 ,HALLWAY-2>>\n\t\t     <NOT <EQUAL? ,HERE\n\t\t\t\t  ,HALLWAY-1 ,WEST-OF-GARAGE>>>\n\t\t<COND (,ALICIA-WAITED?\n\t\t       <START-ALICIA ,WEST-OF-GARAGE>)\n\t\t      (ELSE\n\t\t       <SETG ALICIA-WAITED? T>\n\t\t       <QUEUE I-ALICIA-SNEAKS 3>)>)>\n\t <RFALSE>>"
  },
  "START-ALICIA": {
   "name": "START-ALICIA",
   "file": "people.zil",
   "line": 1928,
   "endLine": 1940,
   "source": "<ROUTINE START-ALICIA (RM)\n\t <DISABLE <INT I-ALICIA-SNEAKS>>\n\t <MOVE ,ALICIA .RM>\n\t <ESTABLISH-GOAL ,ALICIA ,PORCH>\n\t <FCLEAR ,CORPSE ,INVISIBLE>\n\t <FSET ,NORTH-DOOR ,LOCKED>\n\t <FSET ,WEST-DOOR ,LOCKED>\n\t <FCLEAR ,NORTH-OFFICE-DOOR ,LOCKED>\n\t <FCLEAR ,SOUTH-OFFICE-DOOR ,LOCKED>\n\t <FCLEAR ,MEDIA-OFFICE-DOOR ,LOCKED>\n\t <FCLEAR ,NORTH-OFFICE-DOOR ,OPENBIT>\n\t <FCLEAR ,SOUTH-OFFICE-DOOR ,OPENBIT>\n\t <FCLEAR ,MEDIA-OFFICE-DOOR ,OPENBIT>>"
  },
  "THEY-DANCE": {
   "name": "THEY-DANCE",
   "file": "people.zil",
   "line": 1942,
   "endLine": 1949,
   "source": "<ROUTINE THEY-DANCE (LAST \"AUX\" FIRST)\n\t <ENABLE <QUEUE I-MICHAEL-TO-GARAGE 5>>\n\t <NEW-SCRIPT ,MICHAEL ,MICHAEL-LOOP>\n\t <COND (<IN-BALLROOM? ,PLAYER>\n\t\t<COND (<EQUAL? .LAST ,MICHAEL> <SET FIRST ,ALICIA>)\n\t\t      (ELSE <SET FIRST ,MICHAEL>)>\n\t\t<TELL\nD .LAST \" walks up to \" D .FIRST \" and they begin to dance.\" CR>)>>"
  },
  "I-MICHAEL-TO-GARAGE": {
   "name": "I-MICHAEL-TO-GARAGE",
   "file": "people.zil",
   "line": 1951,
   "endLine": 1971,
   "source": "<ROUTINE I-MICHAEL-TO-GARAGE ()\n\t <COND (,MICHAEL-TO-GARAGE? <RFALSE>)\n\t       (<AND <OR <FSET? ,MICHAEL ,TOLD>\n\t\t\t ,GANG-BEEN-TO-OFFICE?>\n\t\t     <NOT <EQUAL? <GET <GET ,GOAL-TABLES ,MICHAEL-C>\n\t\t\t\t       ,GOAL-F>\n\t\t\t\t  ,OFFICE\n\t\t\t\t  ,HALLWAY-3>>>\n\t\t%<DEBUG-CODE\n\t\t  <COND (,DEBUG\n\t\t\t <TELL \"[Michael heads to Garage]\" CR>)>>\n\t\t<SETG MICHAEL-TO-GARAGE? T>\n\t\t<ESTABLISH-GOAL ,ALICIA ,BALLROOM-9>\n\t\t<ESTABLISH-GOAL ,MICHAEL ,GARAGE T>)\n\t       (ELSE\n\t\t%<DEBUG-CODE\n\t\t  <COND (,DEBUG\n\t\t\t <TELL \"[Michael isn't ready]\" CR>)>>\n\t\t<ENABLE <QUEUE I-MICHAEL-TO-GARAGE 5>>)>\n\t %<DEBUG-CODE <COND (,DEBUG <RTRUE>)>>\n\t <RFALSE>>"
  },
  "RICHARD-UNMASKED?": {
   "name": "RICHARD-UNMASKED?",
   "file": "people.zil",
   "line": 1999,
   "endLine": 2000,
   "source": "<ROUTINE RICHARD-UNMASKED? ()\n\t <EQUAL? <GETP ,RICHARD ,P?SDESC> ,RICHARD-SDESC>>"
  },
  "RICHARD-UNMASKS": {
   "name": "RICHARD-UNMASKS",
   "file": "people.zil",
   "line": 2002,
   "endLine": 2008,
   "source": "<ROUTINE RICHARD-UNMASKS ()\n\t <FCLEAR ,RICHARD ,THE>\n\t <PUTP ,RICHARD ,P?SDESC ,RICHARD-SDESC>\n\t <FCLEAR ,GLOBAL-RICHARD ,THE>\n\t <PUTP ,GLOBAL-RICHARD ,P?SDESC ,RICHARD-SDESC>\n\t <PUTP ,RICHARD ,P?LDESC\n\"Richard Ashcroft, the petulant werewolf, slouches nearby.\">>"
  },
  "RICHARD-F": {
   "name": "RICHARD-F",
   "file": "people.zil",
   "line": 2010,
   "endLine": 2124,
   "source": "<ROUTINE RICHARD-F ()\n\t <COND (<EQUAL? ,WINNER ,RICHARD>\n\t\t<COND (<OR <VERB? UNMASK>\n\t\t\t   <AND <VERB? WHAT> <EQUAL? ,PRSO ,YOU>>>\n\t\t       <COND (<RICHARD-UNMASKED?>\n\t\t\t      <TELL\n\"\\\"I'm still Richard.\\\"\" CR>)\n\t\t\t     (<PROB 50>\n\t\t\t      <TELL\n\"\\\"None of your business! Grrr!\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <RICHARD-UNMASKS>\n\t\t\t      <TELL\n\"He answers somewhat gruffly, \\\"Oh, I'm Richard under all this fur.\\\"\" CR>)>)\n\t\t      (<VERB? HELLO>\n\t\t       <TELL\n\"Richard mumbles a surly greeting.\" CR>)\n\t\t      (<DONT-HANDLE?> <RFALSE>)\n\t\t      (ELSE\n\t\t       <TELL\n\"\\\"Not on your life!\\\" he says angrily.\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (<RICHARD-UNMASKED?>\n\t\t       <TELL\n\"Richard Ashcroft is \" 'VERONICA \"'s younger brother, and\">)\n\t\t      (ELSE\n\t\t       <TELL \"The wearer of the costume\">)>\n\t\t<TELL\" appears as a plump and petulant\nwerewolf, although he has gone to the trouble of smearing something wet\nand red on his chin which looks authentically bloody.\" CR>)\n\t       (<AND <VERB? REVEAL> <EQUAL? ,PRSO ,GLOBAL-MURDER>>\n\t\t<COND (<REVEAL-MURDER ,RICHARD>\n\t\t       <TELL\n\"\\\"You're joking, of course. No, you're not, are you?\\\" He seems\nshocked, but it's hard to tell if it's just a pose.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"\\\"I already know.\\\"\" CR>)>)\n\t       (<VERB? UNMASK>\n\t\t<TELL\n\"\\\"Hey, watch it! I'll bite you!\\\"\" CR>)\n\t       (<AND <VERB? ASK-ABOUT> <EQUAL? ,PRSO ,RICHARD>>\n\t\t<COND (<NOT <RICHARD-UNMASKED?>>\n\t\t       <COND (<NOT <FSET? ,PRSO ,TOLD>>\n\t\t\t      <TELL \"\\\"Grrr!\\\"\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (ELSE\n\t\t\t      <RICHARD-UNMASKS>\n\t\t\t      <TELL\n\"The werewolf removes his mask, revealing him as Richard, \" 'VERONICA \"'s\nyounger brother. \">)>)>\n\t\t<COND (<EQUAL? ,PRSI ,PLAYER>\n\t\t       <TELL\n\"\\\"I've never met you before tonight. You work for the paper,\nright?\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,RICHARD>\n\t\t       <TELL\n\"\\\"Me? I'm not interesting enough to write about. Write about my sister\ninstead, she's interesting: she's the Dragon Lady, not the Fairy Queen.\\\"\" CR>)\n\t\t      (<IN? ,PRSI ,HERE>\n\t\t       <TELL\n\"\\\"Are you trying to cause trouble? \" ,YOU-MUST \"think I'm drunk and will say\nanything about anyone.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-MICHAEL>\n\t\t       <TELL\n\"\\\"\" 'MICHAEL \"? He thinks he's pretty wonderful, but he just slides around\nafter my sister, taking whatever he can. I don't think he ever loved\nher, but then, I don't think anyone ever loved her.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-VERONICA>\n\t\t       <COND (<FSET? ,PRSO ,TOLD>\n\t\t\t      <TELL\n\"\\\"You think I did it, don't you? If I was the sort of person\nwho could kill her, I would have long ago, believe me!\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"She's my older sister, but she acts like she's my keeper.\nI have to account for my every move, like I was still ten years old.\\\"\" CR>)>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-ALICIA>\n\t\t       <TELL\n\"\\\"She's such a goodie two-shoes, she's been \" 'VERONICA \"'s friend for years,\nbut you know something? Whenever they're apart, she cuts her\nup something fierce. I have my suspicions about her.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-COL-MARSTON>\n\t\t       <TELL\n\"\\\"That pompous blowhard! He's been in clover for\nyears, just because he was a crony of my father's. Now he runs the trust\nand \" 'VERONICA \" has him in the palm of her hand! But I'll get mine\none of these days, just wait!\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-LINDA>\n\t\t       <TELL\n\"\\\"Linda's a perfect example of my sister's interference. She's sweet, and\nlovely, and I love her, but my sister can't stand her because her family\ndidn't come over on the Mayflower.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-SEN-ASHER>\n\t\t       <TELL\n\"\\\"Our family has known him for years, since he was just on the county\ncouncil. I'd think more of him if \" 'VERONICA \" didn't like him so much.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-COCHRANE>\n\t\t       <TELL\n,I-DONT-KNOW \"why \" 'VERONICA \" invited him. He's making a fool\nof himself. He's going to have trouble from me if he keeps\nstaring at Linda like that.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-OSTMANN>\n\t\t       <TELL\n\"\\\"Who's he? He seems like a nice enough fellow.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-BUTLER>\n\t\t       <TELL\n\"\\\"He's been here so long he's part of the furniture.\nHe taught me to ride when I was a child. \" 'VERONICA \", too. Dad was\ntoo busy.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-BARTENDER>\n\t\t       <TELL\n\"\\\"He's somebody \" 'VERONICA \" hired.\\\"\" CR>)\n\t\t      (ELSE\n\t\t       <I-WOULDNT-KNOW>)>)>>"
  },
  "G-RICHARD": {
   "name": "G-RICHARD",
   "file": "people.zil",
   "line": 2126,
   "endLine": 2130,
   "source": "<ROUTINE G-RICHARD (GARG)\n\t <COND (<NOT .GARG> <IMOVEMENT ,RICHARD G-RICHARD>)\n\t       (<EQUAL? .GARG ,G-IMPATIENT>\n\t\t<TELL\nCD ,RICHARD \" seems to find you more and more boring as time passes.\" CR>)>>"
  },
  "COL-MARSTON-F": {
   "name": "COL-MARSTON-F",
   "file": "people.zil",
   "line": 2155,
   "endLine": 2329,
   "source": "<ROUTINE COL-MARSTON-F ()\n\t <COND (<EQUAL? ,WINNER ,COL-MARSTON>\n\t\t<COND (<VERB? HELLO>\n\t\t       <TELL\n\"He replies, somewhat curtly.\" CR>)\n\t\t      (<DONT-HANDLE?> <RFALSE>)\n\t\t      (ELSE\n\t\t       <TELL 'COL-MARSTON \" only scowls at you.\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n'COL-MARSTON \" is bedecked as an explorer or perhaps a big-game hunter.\nFrom pith helmet down to whipcord trousers, he looks the part. His\ngaze is steely and his white mustache painstakingly trimmed.\" CR>)\n\t       (<AND <VERB? REVEAL> <EQUAL? ,PRSO ,GLOBAL-MURDER>>\n\t\t<COND (<REVEAL-MURDER ,COL-MARSTON>\n\t\t       <TELL\n\"\\\"Are you sure? I mean, how terrible!\\\" He seems to have conflicting\nfeelings about what he has just heard.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"\\\"I already know. Only a reporter would be spreading this like it was\nsome bit of dirty gossip.\\\"\" CR>)>)\n\t       (<VERB? ACCUSE>\n\t\t<COND (<EQUAL? ,PRSI ,GLOBAL-EMBEZZLEMENT>\n\t\t       <COND (,MARSTON-SEEN-TRUST-DOCUMENTS?\n\t\t\t      <TELL\n\"\\\"You'd have a hard time proving anything, documents or no. At the worst,\nthey would say I've made some bad investments. Of course, you could try\nto ruin me in the press, but I'll sue if you do. You know most libel\nsuits are found for the plaintiff these days.\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"What could you mean by that? I've never stolen anything in my life.\nI've never had to.\\\" He grins.\" CR>)>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-MURDER>\n\t\t       <TELL\n\"\\\"What a ridiculous accusation!\\\"\" CR>)>)\n\t       (<AND <VERB? ASK-ABOUT> <EQUAL? ,PRSO ,COL-MARSTON>>\n\t\t<COND (<NOT <FSET? ,PRSI ,PERSON>>\n\t\t       <COND (<EQUAL? ,PRSI ,GLOBAL-MURDER>\n\t\t\t      <COND (<FSET? ,PRSO ,TOLD>\n\t\t\t\t     <TELL\n\"\\\"Maybe she surprised someone. A sneak thief, probably.\\\"\" CR>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL\n,I-DONT-KNOW \"of any murder.\\\"\" CR>)>)\n\t\t\t     (<EQUAL? ,PRSI ,TRUST ,TRUST-FOLDER\n\t\t\t\t      ,TRUST-DOCUMENTS>\n\t\t\t      <COND (,MARSTON-SEEN-TRUST-DOCUMENTS?\n\t\t\t\t     <TELL\n\"\\\"What more could I tell you? You'll just write lies anyway!\\\"\" CR>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <TELL\n\"\\\"I've run the Trust for almost twenty years. I'm proud of what I've done.\nSure, there have been some bad years, but the trend is up.\\\" He looks\nresolved and confident.\" CR>)>)\n\t\t\t     (ELSE\n\t\t\t      <I-DONT-KNOW-ABOUT \"it that would interest you\">)>)\n\t\t      (<EQUAL? ,PRSI ,PLAYER>\n\t\t       <TELL\n\"\\\"I don't like reporters very much, if that's what you're getting at.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,COL-MARSTON>\n\t\t       <TELL\n\"\\\"Well, I'm really semi-retired. I run the Ashcroft Family Trust, but it\nmostly runs itself: I don't need to be involved in day-to-day operations\ntoo much. Just a decision now and then.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-VERONICA ,CORPSE>\n\t\t       <COND (,MARSTON-SEEN-TRUST-DOCUMENTS?\n\t\t\t      <TELL\n\"\\\"She was conspiring against me! She had some foolish idea that I'm not\nrunning the trust properly. That's what those ridiculous documents are\nabout! Now she's dead, and it's only just desserts!\\\" He turns livid with\nembarrassment. \\\"I didn't mean that... I didn't kill her... Don't jump to\nconclusions...\\\"\" CR>)\n\t\t\t     (<FSET? ,PRSO ,TOLD>\n\t\t\t      <TELL\n\"\\\"'Nil nisi,' they say, but I never liked her very much. Didn't have the\nvision a man would have. Home and hearth. Should be a man at the\nhead of a great old family like the Ashcrofts. Of course, Richard's the\nhead now, officially.\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"I can't say that working with her is as rewarding as working with her father\nwas, still, I can't really complain.\\\"\" CR>)>)\n\t\t      (<IN? ,PRSI ,HERE>\n\t\t       <TELL\n'COL-MARSTON \" glances at \" D ,PRSI \", then sniffs disdainfully at you, as though\nyou had asked him to stand on his head.\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-MICHAEL>\n\t\t       <COND (,MARSTON-SEEN-TRUST-DOCUMENTS?\n\t\t\t      <TELL\n\"\\\"\" 'MICHAEL \"? Well, sometimes he makes big promises and doesn't\nfollow through...  Fundamentally a sound fellow, though.\\\" \"\n'COL-MARSTON \" seems somewhat distracted.\" CR>)\n\t\t\t     (<FSET? ,PRSO ,TOLD>\n\t\t\t      <TELL\n\"\\\"He must be devastated. But he's a strong man, he'll survive it.\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"A fine man. You can count on him. \" 'VERONICA \"'s father would have approved\nof him. He'll get her straightened out one day.\\\"\" CR>)>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-ALICIA>\n\t\t       <TELL\n\"\\\"She's one of \" 'VERONICA \"'s cronies. Went to school with her, but then I heard\nyou did too? Anyway, I hardly know her.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-RICHARD>\n\t\t       <TELL\n\"\\\"As Teddy Roosevelt said, 'I could carve a man with more backbone out of a\nbanana.' The only thing he stands up to \" 'VERONICA \" on is that Linda person. He's\nnever really grown up.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-LINDA>\n\t\t       <TELL\n\"\\\"She's just not our sort. I know that sounds prejudiced, but she's not happy\nhere, you can tell, and she'd be better off if she and Richard stopped seeing\neach other. It would be kinder to her.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-SEN-ASHER>\n\t\t       <TELL\n\"\\\"A fine Senator. He has plans. You'll hear more from him, mark my\nwords.\\\"\" CR> )\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-COCHRANE>\n\t\t       <TELL\n\"\\\"The man is clearly an alcoholic. I don't approve of people who can't hold\ntheir liquor.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-OSTMANN>\n\t\t       <TELL\n\"\\\"That's a man with a true eye for business. I wonder why he's here tonight?\n\" 'VERONICA \" and \" 'MICHAEL \" don't mix too much with his crowd, and vice versa.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-BUTLER>\n\t\t       <TELL\n\"\\\"\" 'BUTLER \" is the disproof of the canard that there are no good servants\nanymore.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-BARTENDER>\n\t\t       <TELL\n\"\\\"He told me he's studying law. Lawyers and accountants! Two\nprofessions we would be better off without! We can always use a good\nbartender.\\\"\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"\\\"I have nothing to say about that.\\\"\" CR>)>)\n\t       (<VERB? SHOW>\n\t\t<COND (<EQUAL? ,PRSO ,SALE-FOLDER ,SALE-AGREEMENT>\n\t\t       <TELL\n'COL-MARSTON \" glances cursorily through the agreement. \" ,I-DONT-KNOW\n\"where you got this. It's true, \" 'VERONICA \" was going to sell the farm and\nmove further upcountry, away from the suburbs. It wasn't supposed to be\nannounced until tomorrow.\" <COND (<FSET? ,COL-MARSTON ,TOLD>\n\t\t\t\t  \" Too bad it was never\")\n\t\t\t\t (T\n\t\t\t\t  \" Odd that it isn't\")>\n\t\t\t   \" signed.\\\" He smiles\nfrostily.\" CR>)\n\t\t      (<OR <EQUAL? ,PRSO ,TRUST-DOCUMENTS>\n\t\t\t   <AND <EQUAL? ,PRSO ,TRUST-FOLDER>\n\t\t\t\t<IN? ,TRUST-DOCUMENTS ,TRUST-FOLDER>>>\n\t\t       <COND (,MARSTON-SEEN-TRUST-DOCUMENTS?\n\t\t\t      <TELL\n\"\\\"I have nothing more to say. I've said too much already. If you publish\nanything you'll hear from my lawyer!\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <SETG MARSTON-SEEN-TRUST-DOCUMENTS? T>\n\t\t\t      <COND (<IN? ,INVESTOR-LIST ,MICHAEL>\n\t\t\t\t     %<DEBUG-CODE\n\t\t\t\t       <COND (,DEBUG\n\t\t\t\t\t      <TELL\n\"[Marston scared]\" CR>)>>\n\t\t\t\t     <ESTABLISH-GOAL ,COL-MARSTON ,LIBRARY T>\n\t\t\t\t     <ESTABLISH-GOAL ,MICHAEL ,LIBRARY T>)>\n\t\t\t      <TELL\n\"The colonel's composure breaks for a moment, then reforms. \\\"Where did\nyou get that? I've run that Trust for twenty years, and all my\ninvestments have been good: for her. I finally decided I should get\nsomething out of it. Do you know what she pays me? Peanuts! And she\nwallows in luxury, decadence. I wanted a turn. Besides, I did nothing\nwrong, you can't prove anything, no matter what those accountants\nsay.\\\"\" CR>)>)>)>>"
  },
  "G-COL-MARSTON": {
   "name": "G-COL-MARSTON",
   "file": "people.zil",
   "line": 2331,
   "endLine": 2378,
   "source": "<ROUTINE G-COL-MARSTON (GARG \"AUX\" (L <LOC ,COL-MARSTON>))\n\t <COND (<NOT .GARG> <IMOVEMENT ,COL-MARSTON G-COL-MARSTON>)\n\t       (<EQUAL? .GARG ,G-IMPATIENT>\n\t\t<COND (<IN? ,COL-MARSTON ,OFFICE>\n\t\t       <RFALSE>)\n\t\t      (<IN? ,COL-MARSTON ,LIBRARY>\n\t\t       <FCLEAR ,LIBRARY-DOOR ,LOCKED>\n\t\t       <RFALSE>)>\n\t\t<TELL\n'COL-MARSTON \" looks at his watch, and not very surreptitiously.\" CR>)\n\t       (<EQUAL? .GARG ,G-REACHED ,G-ALREADY>\n\t\t<COND (<AND <EQUAL? .L ,BALLROOM-9>\n\t\t\t    <ENABLED? <INT I-ARGUMENT>>>\n\t\t       <GOALS? ,COL-MARSTON <>>\n\t\t       <RFALSE>)\n\t\t      (<AND <EQUAL? .L ,HALLWAY-3>\n\t\t\t    <NOT ,THREE-STOOGES-IN-OFFICE?>>\n\t\t       <GOALS? ,COL-MARSTON <>>\n\t\t       <COND (<AND <IN? ,COCHRANE ,HALLWAY-3>\n\t\t\t\t   <IN? ,MICHAEL ,HALLWAY-3>>\n\t\t\t      <GANGS-ALL-HERE>)>)\n\t\t      (<EQUAL? .L ,OFFICE>\n\t\t       <UNPRIORITIZE ,COL-MARSTON>\n\t\t       <ESTABLISH-GOAL ,COL-MARSTON ,BALLROOM-9>\n\t\t       <GRAB-ATTENTION ,COL-MARSTON>\n\t\t       <RFALSE>)\n\t\t      (<EQUAL? .L ,LIBRARY>\n\t\t       <COND (<IN? ,MICHAEL ,LIBRARY>\n\t\t\t      <LIBRARY-MEETING ,COL-MARSTON>)\n\t\t\t     (ELSE\n\t\t\t      <GOALS? ,COL-MARSTON <>>\n\t\t\t      <RFALSE>)>)\n\t\t      (<AND <IN? ,INVESTOR-LIST ,COL-MARSTON>\n\t\t\t    <EQUAL? .L ,BALLROOM-8>>\n\t\t       <FCLEAR ,INVESTOR-LIST ,INVISIBLE>\n\t\t       <MOVE ,INVESTOR-LIST ,FIREPLACE>\n\t\t       <ENABLE <QUEUE I-BURNED 1>>\n\t\t       <COND (<EQUAL? ,HERE ,BALLROOM-8>\n\t\t\t      <TELL-ARRIVES ,COL-MARSTON>\n\t\t\t      <TELL\n\"fireplace, warms his hands briefly, and then\nturns to warm his back. As he does, you notice a crumpled piece of paper\ndrop from his hands into the fireplace. It doesn't land quite in the fire\nthough. It's beginning to singe a bit.\" CR>)\n\t\t\t     (<IN-BALLROOM? ,PLAYER>\n\t\t\t      <TELL\n'COL-MARSTON \" is now warming his hands and back at the fireplace. You\ncatch an odd movement out of the corner of your eye.\" CR>)>)>)>>"
  },
  "I-BURNED": {
   "name": "I-BURNED",
   "file": "people.zil",
   "line": 2382,
   "endLine": 2394,
   "source": "<ROUTINE I-BURNED ()\n\t <COND (<IN? ,INVESTOR-LIST ,FIREPLACE>\n\t\t<COND (<NOT ,LIST-BURNING?>\n\t\t       <SETG LIST-BURNING? T>\n\t\t       <QUEUE I-BURNED 1>\n\t\t       <COND (<EQUAL? ,HERE ,BALLROOM-8>\n\t\t\t      <TELL\n\"The piece of paper is beginning to smolder.\" CR>)>)\n\t\t      (ELSE\n\t\t       <MOVE ,INVESTOR-LIST ,POLICE-LAB>\n\t\t       <COND (<EQUAL? ,HERE ,BALLROOM-8>\n\t\t\t      <TELL\n\"The crumpled piece of paper bursts into flame and is reduced to ashes.\" CR>)>)>)>>"
  },
  "LINDA-F": {
   "name": "LINDA-F",
   "file": "people.zil",
   "line": 2419,
   "endLine": 2505,
   "source": "<ROUTINE LINDA-F ()\n\t <COND (<EQUAL? ,WINNER ,LINDA>\n\t\t<COND (<VERB? HELLO>\n\t\t       <TELL \"\\\"Hi! What's your sign?\\\"\" CR>)\n\t\t      (<DONT-HANDLE?> <RFALSE>)\n\t\t      (ELSE\n\t\t       <TELL \"Linda bats her eyes and looks confused.\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"Linda Meade is dressed as a ballerina. Her costume and hair are both\nflaming red. She is a beautiful woman, and knows it. Eyes\nfollow her every move.\" CR>)\n\t       (<VERB? UNMASK RUB>\n\t\t<TELL\n\"\\\"Stop that, silly!\\\" she giggles.\" CR>)\n\t       (<AND <VERB? REVEAL> <EQUAL? ,PRSO ,GLOBAL-MURDER>>\n\t\t<COND (<REVEAL-MURDER ,LINDA>\n\t\t       <TELL\n\"\\\"Yuck! I think I don't feel too well.\\\" She shivers, and then\ncomposes herself. \\\"Now Richard will be out from under her thumb.\\\" She\nlooks at you as though she committed an indiscretion, and then\nsmiles inanely.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"\\\"Everyone will treat it like a juicy piece of gossip! Just wait. She's dead,\npoor thing. I didn't like her very much, but honestly!\\\"\" CR>)>)\n\t       (<AND <VERB? ASK-ABOUT> <EQUAL? ,PRSO ,LINDA>>\n\t\t<COND (<EQUAL? ,PRSI ,PLAYER>\n\t\t       <TELL\n\"\\\"I heard you're a reporter. Will you write about me?\\\"\">)\n\t\t      (<EQUAL? ,PRSI ,LINDA>\n\t\t       <TELL\n\"\\\"Until I met Richard I was working at the drug store, checking people\nout. It wasn't very exciting. Now I'm going to be a model! It's my\nambition: I'll be on TV someday!\\\"\">)\n\t\t      (<AND <FSET? ,PRSI ,PERSON> <IN? ,PRSI ,HERE>>\n\t\t       <TELL\n\"\\\"You wouldn't want me to commit a faux pas, would you?\\\"\">)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-MICHAEL>\n\t\t       <TELL\n\"\\\"He's nasty to me. I don't think he likes Richard much.\\\"\">)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-VERONICA>\n\t\t       <TELL\n\"\\\"She hates me. She hates Richard! I hate her! She thinks she's\nso great because she's got a lot of money. She treats Richard like a child,\ndoling out an allowance! Really! He's thirty years old! Just because\nshe's got control of the Trust! Confidentially, he hates her, too.\\\"\">)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-ALICIA>\n\t\t       <TELL\n,I-DONT-KNOW \"her.\\\"\">)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-RICHARD>\n\t\t       <TELL\n\"\\\"We're in love! \" 'VERONICA \" is keeping us from being married, by\nnot giving Richard what's coming to him from the Trust. It's not\nfair at all!\\\"\">)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-COL-MARSTON>\n\t\t       <TELL\n\"\\\"That old monster! He hates Richard! He won't make \" 'VERONICA \" give\nhim what's coming to him lawfully. He says he can't change the rules,\nbut that's silly: doesn't he run it?\\\"\">)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-SEN-ASHER>\n\t\t       <TELL\n\"\\\"Isn't it exciting? A real Senator. He's even distinguished dressed in\nthat silly costume.\\\"\">)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-COCHRANE>\n\t\t       <TELL\n,I-DONT-KNOW \"him. He's drunk, isn't he?\\\"\">)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-OSTMANN>\n\t\t       <TELL\n\"\\\"He owns that building company. Their signs are all over the\nplace!\\\"\">)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-BUTLER>\n\t\t       <TELL\n\"\\\"He hates me. He kicked me out once when I came\nover without Richard.\\\"\">)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-BARTENDER>\n\t\t       <TELL\n,I-DONT-KNOW \"him. I don't think he usually works here.\\\"\">)\n\t\t      (ELSE\n\t\t       <TELL-DONT-KNOW>\n\t\t       <RTRUE>)>\n\t\t<SETG BOOP-CNT <- ,BOOP-CNT 1>>\n\t\t<COND (<EQUAL? ,BOOP-CNT 0>\n\t\t       <SETG BOOP-CNT 10>\n\t\t       <TELL\n\" Linda's voice is high and squeaky, a sort of Betty Boop voice.\">)>\n\t\t<CRLF>)>>"
  },
  "G-LINDA": {
   "name": "G-LINDA",
   "file": "people.zil",
   "line": 2507,
   "endLine": 2510,
   "source": "<ROUTINE G-LINDA (GARG)\n\t <COND (<NOT .GARG> <IMOVEMENT ,LINDA G-LINDA>)\n\t       (<EQUAL? .GARG ,G-IMPATIENT>\n\t\t<TELL \"Linda seems increasingly impatient with you.\" CR>)>>"
  },
  "SEN-ASHER-DESC-F": {
   "name": "SEN-ASHER-DESC-F",
   "file": "people.zil",
   "line": 2533,
   "endLine": 2540,
   "source": "<ROUTINE SEN-ASHER-DESC-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<IN? ,SEN-ASHER ,MEDIA-ROOM>\n\t\t<TELL\n'SEN-ASHER \", dressed in harlequin costume, is relaxing on a sofa,\nwatching the news on CNN.\" CR>)\n\t       (ELSE\n\t\t<TELL 'SEN-ASHER \", a distinguished harlequin, is\">\n\t\t<TELL-HERE>)>>"
  },
  "SEN-ASHER-F": {
   "name": "SEN-ASHER-F",
   "file": "people.zil",
   "line": 2542,
   "endLine": 2659,
   "source": "<ROUTINE SEN-ASHER-F ()\n\t <COND (<EQUAL? ,WINNER ,SEN-ASHER>\n\t\t<COND (<VERB? HELLO>\n\t\t       <TELL\n\"The Senator greets you and shakes your hand. His handshake is firm, warm,\nand dry.\" CR>)\n\t\t      (<DONT-HANDLE?> <RFALSE>)\n\t\t      (ELSE\n\t\t       <TELL\n\"\\\"You can't order me around! You reporters have a lot of nerve.\\\"\" CR>)>)\n\t       (<AND <VERB? $REVEAL> <EQUAL? ,PRSO ,GLOBAL-MURDER>>\n\t\t<REVEAL-MURDER ,SEN-ASHER>\n\t\t<COND (<IN? ,PRSI ,HERE>\n\t\t       <TELL\nCD ,WINNER \" tells the Senator of the murder. He looks like he has been\nhit with a sandbag.\" CR>)\n\t\t      (<NEARBY? ,SEN-ASHER>\n\t\t       <TELL\nCD ,WINNER \" tells the Senator something that horrifies him.\" CR>)>)\n\t       (<AND <VERB? REVEAL> <EQUAL? ,PRSO ,GLOBAL-MURDER>>\n\t\t<COND (<REVEAL-MURDER ,SEN-ASHER>\n\t\t       <TELL\n\"\\\"No! That's ridiculous! Who did it?\\\" He recoils from the idea as\nthough he had been punched.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"\\\"Horrible, horrible.\\\" The Senator hasn't yet recovered from the\nrevelation.\" CR>)>)\n\t       (<AND <VERB? ACCUSE> <EQUAL? ,PRSI ,GLOBAL-MURDER>>\n\t\t<TELL\n\"\\\"\" ,YOU-MUST \"be insane. Sure, I was in the next room when it happened.\nHow do you suppose that makes me feel? I was in love with her once...\nI suppose I still am. I could no more kill her than, than...\\\" He chokes\nback a sob.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"Senator Alan Asher is two years into a successful first term, a man the\nparty is already eyeing for higher office. He is tall and not quite so\nhandsome as to be too handsome for a politician. Even dressed as he is\nin harlequin costume, he manages to look commanding and at ease.\" CR>)\n\t       (<AND <VERB? ASK-ABOUT> <EQUAL? ,PRSO ,SEN-ASHER>>\n\t\t<COND (<NOT <FSET? ,PRSI ,PERSON>>\n\t\t       <COND (<EQUAL? ,PRSI ,GLOBAL-MURDER>\n\t\t\t      <COND (<FSET? ,PRSO ,TOLD>\n\t\t\t\t     <TELL\n\"\\\"You know, I heard a muffled yell from the office at about \">\n\t\t\t\t     <TIME-PRINT ,YELL-TIME <>>\n\t\t\t\t     <TELL \" I didn't really notice\nit consciously; I was watching television and relaxing.\\\"\" CR>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <TELL\n\"\\\"What murder? Is this some sort of trick question?\\\"\" CR>)>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"No comment.\\\"\" CR>)>)\n\t\t      (<EQUAL? ,PRSI ,PLAYER>\n\t\t       <TELL\n\"\\\"Your paper has always been fair and impartial to me. I appreciate\nthat.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,SEN-ASHER>\n\t\t       <TELL\n\"\\\"Tell your readers I'm just a dedicated public servant.\\\" He grins\nwinningly.\" CR>)\n\t\t      (<IN? ,PRSI ,HERE>\n\t\t       <TELL \"\\\"It would be impolitic to say anything.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-MICHAEL>\n\t\t       <TELL\n\"\\\"\" 'MICHAEL \" is a fine man. He was a lucky man to capture \" 'VERONICA \".\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-VERONICA>\n\t\t       <COND (<FSET? ,PRSO ,TOLD>\n\t\t\t      <TELL\n\"The Senator tries to compose himself. \\\"She was always one of my greatest\nfriends. We knew each other for many years. How could anyone have done this\nto her?\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"She gives a great party. It's always a pleasure to come out here: the\npressure's off for a while and I can just relax.\\\"\" CR>)>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-ALICIA>\n\t\t       <TELL\n\"\\\"She's an old friend of \" 'VERONICA \"'s. When they were in school together\nthey were roommates. Borrowing each other's clothes, stealing boyfriends\nback and forth, and all that.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-RICHARD>\n\t\t       <TELL\n\"\\\"He is, unfortunately, not much. \" 'VERONICA \" despair\"\n<COND (<FSET? ,PRSO ,TOLD> \"ed\")(ELSE \"s\")> \" of him ever amounting to\nanything.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-COL-MARSTON>\n\t\t       <TELL\n\"\\\"He's a hidebound old reactionary. It's unfortunate. The trust could do\nso much good with a different administrator. But \" 'VERONICA \" likes him.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-LINDA>\n\t\t       <TELL\n\"\\\"I've never been introduced. I know Richard is well and truly smitten,\nthough.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-COCHRANE>\n\t\t       <TELL\n\"\\\"Construction is a big business around here. These suburbs are among the\nfastest growing areas in the country. It's driving the Hunt Club types\nfurther out into the country. \" 'COCHRANE \" is a big force in the industry,\nnot that anyone is terribly pleased at that.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-OSTMANN>\n\t\t       <TELL\n\"\\\"He's done a lot of construction in the area, mostly office buildings,\nand many of those for the government. You'd be surprised at how little\nof the space the government occupies is actually government-owned. We're\ntenants in a lot of places, and \" 'OSTMANN \" owns a lot of those.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-BUTLER>\n\t\t       <TELL\n\"\\\"\" 'BUTLER \" is a family retainer. He'll live here for the rest of his life,\nif he can. They'll let him, too.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-BARTENDER>\n\t\t       <TELL\n\"\\\"Seems a nice kid. He told me he's in Law School.\\\"\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"\\\"Nothing to say, not even off-the-record.\\\"\" CR>)>)>>"
  },
  "G-SEN-ASHER": {
   "name": "G-SEN-ASHER",
   "file": "people.zil",
   "line": 2661,
   "endLine": 2664,
   "source": "<ROUTINE G-SEN-ASHER (GARG)\n\t <COND (<NOT .GARG> <IMOVEMENT ,SEN-ASHER G-SEN-ASHER>)\n\t       (<EQUAL? .GARG ,G-IMPATIENT>\n\t\t<TELL \"The Senator is becoming bored with you.\" CR>)>>"
  },
  "COCHRANE-UNMASKS": {
   "name": "COCHRANE-UNMASKS",
   "file": "people.zil",
   "line": 2692,
   "endLine": 2706,
   "source": "<ROUTINE COCHRANE-UNMASKS ()\n\t <COND (<EQUAL? <GETP ,COCHRANE ,P?SDESC> ,COCHRANE-SDESC>\n\t\t<RFALSE>)\n\t       (ELSE\n\t\t<FCLEAR ,COCHRANE ,THE>\n\t\t<FCLEAR ,COCHRANE ,AN>\n\t\t<PUTP ,COCHRANE ,P?SDESC ,COCHRANE-SDESC>\n\t\t<FCLEAR ,GLOBAL-COCHRANE ,THE>\n\t\t<FCLEAR ,GLOBAL-COCHRANE ,AN>\n\t\t<PUTP ,GLOBAL-COCHRANE ,P?SDESC ,COCHRANE-SDESC>\n\t\t<PUTP ,COCHRANE ,P?LDESC\n\"William Cochrane, who looks like his spacesuit itches, is here.\">\n\t\t<TELL\n\"The figure lifts its visor. \\\"I'm Bill \" 'COCHRANE \"! This costume is\nso hot and itchy, I'm sorry I got it.\\\" He wipes his brow. \">)>>"
  },
  "COCHRANE-F": {
   "name": "COCHRANE-F",
   "file": "people.zil",
   "line": 2710,
   "endLine": 2850,
   "source": "<ROUTINE COCHRANE-F (\"AUX\" UNMASKED?)\n\t <COND (<EQUAL? ,WINNER ,COCHRANE>\n\t\t<COND (<VERB? HELLO SAY> <TELL \"\\\"Uh, hi.\\\"\" CR>)\n\t\t      (<AND <VERB? WHAT> <EQUAL? ,PRSO ,YOU>>\n\t\t       <COND (<COCHRANE-UNMASKS> <CRLF> <RTRUE>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"You know who I am: I'm \" 'COCHRANE \"!\\\"\" CR>)>)\n\t\t      (<DONT-HANDLE?> <RFALSE>)\n\t\t      (ELSE\n\t\t       <TELL\n\"\\\"Wha? Whatcha mean?\\\" he responds, in a slightly slurred voice.\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (<EQUAL? <GETP ,COCHRANE ,P?SDESC> ,COCHRANE-SDESC>\n\t\t       <TELL \"William \" 'COCHRANE>)\n\t\t      (ELSE <TELL \"The Astronaut\">)>\n\t\t<TELL\n \" is crammed into an ill-fitting, obviously rented, spacesuit.\nThe helmet is badly attached and bounces as he moves. It's clear he's\nuncomfortable. It's also clear he has already had quite a lot to drink.\" CR>)\n\t       (<VERB? ACCUSE>\n\t\t<COND (<AND <FSET? ,COCHRANE ,TOLD>\n\t\t\t    ,COCHRANE-SEEN-AGREEMENT?>\n\t\t       <TELL\n\"\\\"You can't scare me. Sure, I'm just as happy she's dead, but I wouldn't\ndo it. I've hardly been out of the ballroom all night. You can't pin this\non me.\\\"\" CR>)>)\n\t      (<VERB? SHOW>\n\t       <COCHRANE-UNMASKS>\n\t       <COND (<EQUAL? ,PRSO ,CARD>\n\t\t      <TELL\n\"\\\"Yeah. I just wanted to keep her from doing something she'd regret.\nI just want an equal chance to buy this property. If she's going to\nsell it, why a sweetheart deal with \" 'OSTMANN \"? I went to her office earlier\nto try to convince her, but the door was locked and she wouldn't answer.\">\n\t\t      <COND (<FSET? ,COCHRANE ,TOLD>\n\t\t\t     <TELL\n\" That was at about quarter of eight, so you can't pin this\non me: she was still alive then, everybody saw her.\">)>\n\t\t      <TELL \"\\\"\" CR>)\n\t\t     (<EQUAL? ,PRSO ,SALE-FOLDER ,SALE-AGREEMENT>\n\t\t      <COND (,COCHRANE-SEEN-AGREEMENT?\n\t\t\t     <TELL\n\"\\\"Yeah. I've seen it, remember?\\\"\" CR>\n\t\t\t     <RTRUE>)>\n\t\t      <SETG COCHRANE-SEEN-AGREEMENT? T>\n\t\t      <COND (<FSET? ,COCHRANE ,TOLD>\n\t\t\t     <TELL\n\"\\\"What a joke on Sam! He'll never get this property now! \" 'MICHAEL\n\" will sell to me, I bet... I mean, well, it's a shame she's dead and\nall, but you gotta look out for yourself.\\\"\" CR>)\n\t\t\t    (ELSE\n\t\t\t     <SETG COCHRANE-LOOKS-FOR-OSTMANN? T>\n\t\t\t     <TELL\n\"\\\"Ask \" 'OSTMANN \" about that.\\\" \" 'COCHRANE \"'s calm\ncovers a less placid interior.\" CR>)>)>)\n\t       (<AND <VERB? ASK-ABOUT> <EQUAL? ,PRSO ,COCHRANE>>\n\t\t<SET UNMASKED? <COCHRANE-UNMASKS>>\n\t\t<TELL\n'COCHRANE \" is a little unsteady, and swallows a little more of his drink\nbefore answering. \">\n\t\t<COND (<NOT <FSET? ,PRSI ,PERSON>>\n\t\t       <COND (<EQUAL? ,PRSI ,ASTRONAUT-COSTUME>\n\t\t\t      <COND (.UNMASKED? <RTRUE>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <TELL \"\\\"It itches.\\\"\" CR>)>)\n\t\t\t     (<EQUAL? ,PRSI ,GLOBAL-MURDER>\n\t\t\t      <COND (<FSET? ,PRSO ,TOLD>\n\t\t\t\t     <TELL\n\"\\\"I didn't do it! She wasn't giving me a fair shake, but murder?\nNot me!\\\"\">)\n\t\t\t\t    (T\n\t\t\t\t     <TELL\n\"\\\"Murder? No one's been murdered. Is this a joke?\\\"\">)>)\n\t\t\t     (<EQUAL? ,PRSI ,SALE ,SALE-FOLDER ,SALE-AGREEMENT>\n\t\t\t      <TELL\n\"\\\"That skunk \" 'OSTMANN \"! He's out to get me. I should have had that sale.\\\"\">)\n\t\t\t     (ELSE\n\t\t\t      <TELL \"\\\"I dunno.\\\"\">)>)\n\t\t      (<EQUAL? ,PRSI ,PLAYER>\n\t\t       <TELL\n\"\\\"Reporters. Can't stand them. You seem basically okay, though.\\\"\">)\n\t\t      (<EQUAL? ,PRSI ,COCHRANE>\n\t\t       <TELL\n\"\\\"I'm just a small businessman trying to make a profit.\nDealing with these rich types doesn't make it any\neasier. Whoever said the rich were free spenders didn't know these\npeople.\\\"\">)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-VERONICA ,CORPSE>\n\t\t       <COND (<FSET? ,PRSO ,TOLD>\n\t\t\t      <TELL\n\"\\\"She treated me like dirt, just because she never worked\nfor her money and I did. My hands are clean.\\\"\">)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"She's a fancy-pants rich girl, thinks she's too good to deal\nwith me. She's got another think coming!\\\"\">)>)\n\t\t      (<IN? ,PRSI ,HERE>\n\t\t       <TELL\n\"\\\"I could tell you some things. But \" HE/SHE ,PRSI \"'s\nright here.\\\" He grins.\">)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-MICHAEL>\n\t\t       <TELL\n\"\\\"I think he'd deal with me. I can talk to him man-to-man,\nbut that wife of his...\\\"\">)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-ALICIA>\n\t\t       <TELL\n\"\\\"I never met her. Another one of those society types,\nlike Ms. Ashcroft.\\\"\">)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-RICHARD>\n\t\t       <TELL\n,I-DONT-KNOW \"him. Everybody seems down on him, and given\nthis family, that means he's a good guy.\\\"\">)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-COL-MARSTON>\n\t\t       <TELL\n\"\\\"\" 'COL-MARSTON \"? I hear he was a colonel in a supply battalion.\nHe never got closer to the front than Georgia. I could tell you a few\nmore things about him if I wanted to...\\\"\">)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-LINDA>\n\t\t       <TELL\n\"\\\"She's the ballerina, right? You know her? Want to introduce me?\\\"\">)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-SEN-ASHER>\n\t\t       <TELL\n\"\\\"He's a friend of the family. He and Ms. Ashcroft\nwere an item before she married \" 'MICHAEL \".\\\"\">)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-OSTMANN>\n\t\t       <TELL\n\"\\\"That slime! He'll get what's coming to him one of these days. He's got\nan in with\" ,REAL-ESTATE-BOARD \", and he's tight with \" 'VERONICA \".\nHe's ruining my business!\\\" He angrily scans the room,\nlooking for \" 'OSTMANN \".\">)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-BUTLER>\n\t\t       <TELL\n\"\\\"Thinks he's Jeeves. All stiff-upper-lip and fake\nBritish accent.\\\"\">)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-BARTENDER>\n\t\t       <TELL\n\"\\\"Makes a heck of a drink, doesn't he?\\\"\">)\n\t\t      (ELSE\n\t\t       <TELL-DONT-KNOW>)>\n\t\t<TELL \" He steadies himself.\" CR>)>>"
  },
  "I-DONT-KNOW-ABOUT": {
   "name": "I-DONT-KNOW-ABOUT",
   "file": "people.zil",
   "line": 2852,
   "endLine": 2855,
   "source": "<ROUTINE I-DONT-KNOW-ABOUT (THAT \"OPTIONAL\" (CR? T))\n\t <TELL ,I-DONT-KNOW \"anything about \">\n\t <TELL .THAT>\n\t <COND (.CR? <TELL \".\\\"\" CR>)>>"
  },
  "TELL-DONT-KNOW": {
   "name": "TELL-DONT-KNOW",
   "file": "people.zil",
   "line": 2857,
   "endLine": 2858,
   "source": "<ROUTINE TELL-DONT-KNOW ()\n\t <I-DONT-KNOW-ABOUT \"that\">>"
  },
  "G-COCHRANE": {
   "name": "G-COCHRANE",
   "file": "people.zil",
   "line": 2862,
   "endLine": 2901,
   "source": "<ROUTINE G-COCHRANE (GARG \"AUX\" (L <LOC ,COCHRANE>))\n\t <COND (<NOT .GARG> <IMOVEMENT ,COCHRANE G-COCHRANE>)\n\t       (<EQUAL? .GARG ,G-IMPATIENT>\n\t\t<TELL\n'COCHRANE \" swallows some of his drink, then says, \\\"Excuse me, but I\nthink I need a refill.\\\"\" CR>)\n\t       (<EQUAL? .GARG ,G-REACHED ,G-ALREADY>\n\t\t<COND (<AND <EQUAL? .L ,BALLROOM-9>\n\t\t\t    <ENABLED? <INT I-ARGUMENT>>>\n\t\t       <GOALS? ,COCHRANE <>>\n\t\t       <RFALSE>)\n\t\t      (<EQUAL? .L ,BALLROOM-9>\n\t\t       <NEW-SCRIPT ,COCHRANE ,COCHRANE-LOOP>\n\t\t       <COND (<PROB 25>\n\t\t\t      <ESTABLISH-GOAL ,COCHRANE ,EAST-BATH T>\n\t\t\t      <COND (<EQUAL? ,HERE .L>\n\t\t\t\t     <TELL-ARRIVES ,COCHRANE>\n\t\t\t\t     <TELL\n\"bar, pauses, and gives his empty glass back to\nthe bartender.\" CR>)>)\n\t\t\t     (<EQUAL? ,HERE .L>\n\t\t\t      <TELL-ARRIVES ,COCHRANE>\n\t\t\t      <TELL\n\"bar and orders another drink.\" CR>)>)\n\t\t      (<AND <EQUAL? .L ,HALLWAY-3>\n\t\t\t    <NOT ,THREE-STOOGES-IN-OFFICE?>>\n\t\t       <GOALS? ,COCHRANE <>>\n\t\t       <COND (<AND <IN? ,MICHAEL ,HALLWAY-3>\n\t\t\t\t   <IN? ,COL-MARSTON ,HALLWAY-3>>\n\t\t\t      <GANGS-ALL-HERE>)>)\n\t\t      (<EQUAL? .L ,OFFICE>\n\t\t       <SETG THREE-STOOGES-IN-OFFICE? T>\n\t\t       <UNPRIORITIZE ,COCHRANE>\n\t\t       <NEW-SCRIPT ,COCHRANE ,COCHRANE-LOOP>\n\t\t       <GRAB-ATTENTION ,COCHRANE>\n\t\t       <RFALSE>)\n\t\t      (<EQUAL? .L ,EAST-BATH>\n\t\t       <FCLEAR ,EAST-BATH-DOOR ,OPENBIT>\n\t\t       <ESTABLISH-GOAL ,COCHRANE ,BALLROOM-9>\n\t\t       <RFALSE>)>)>>"
  },
  "OSTMANN-DESC-F": {
   "name": "OSTMANN-DESC-F",
   "file": "people.zil",
   "line": 2926,
   "endLine": 2933,
   "source": "<ROUTINE OSTMANN-DESC-F (\"OPTIONAL\" (RARG <>))\n\t <TELL\n\"Samuel \" 'OSTMANN \", \"\n\t <COND (<FSET? ,OSTMANN ,TOLD>\n\t\t\"costumed\")\n\t       (T \"enjoying himself hugely\")>\n\t \" as a vampire, is\">\n\t <TELL-HERE>>"
  },
  "OSTMANN-F": {
   "name": "OSTMANN-F",
   "file": "people.zil",
   "line": 2937,
   "endLine": 3093,
   "source": "<ROUTINE OSTMANN-F ()\n\t <COND (<EQUAL? ,WINNER ,OSTMANN>\n\t\t<COND (<VERB? HELLO>\n\t\t       <TELL\n\"\\\"How do you do. My name is Samuel \" 'OSTMANN \".\\\"\" CR>)\n\t\t      (<DONT-HANDLE?> <RFALSE>)\n\t\t      (ELSE\n\t\t       <TELL 'OSTMANN \" politely demurs.\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"Samuel \" 'OSTMANN \" is a very formal, slightly pudgy vampire. He\nhas a black cape with a red lining, but otherwise is in full evening\ndress; a somewhat old-fashioned tuxedo. The vampire effect is achieved\nby a realistic set of fangs which he rubs occasionally, as though they\nitched.\" CR>)\n\t       (<AND <VERB? REVEAL> <EQUAL? ,PRSO ,GLOBAL-MURDER>>\n\t\t<COND (<REVEAL-MURDER ,OSTMANN>\n\t\t       <TELL\n\"\\\"This is a terrible thing...for all of us.\\\" His tone indicates that\nthe worst thing about murder is that it's a breach of etiquette.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"\\\"Yes. I know.\\\"\" CR>)>)\n\t       (<VERB? SHOW>\n\t\t<COND (<EQUAL? ,PRSO ,SALE-AGREEMENT ,SALE-FOLDER>\n\t\t       <COND (,OSTMANN-SEEN-AGREEMENT?\n\t\t\t      <TELL\n\"\\\"You showed me that before. What makes you think the situation has\nchanged?\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <SETG OSTMANN-SEEN-AGREEMENT? T>\n\t\t\t      <TELL\n'OSTMANN \" looks surprised. \\\"Where did you get that?\nThat's the agreement \" 'VERONICA \" and I were supposed to sign tonight.\nI wouldn't come to a party like this if I didn't have to. Well,\nactually I guess I'm having a pretty good time.\\\"\">\n\t\t\t      <COND (<FSET? ,OSTMANN ,TOLD>\n\t\t\t\t     <TELL\n\" \" 'OSTMANN \" is thoughtful for a moment. \\\"Something struck me as odd. She\nput me off earlier this evening when I wanted to sign then. She said she\nhad some other business to take care of first. She seemed preoccupied. I tried\nto change her mind but she was adamant.\\\"\">)>\n\t\t\t      <CRLF>)>)>)\n\t       (<AND <VERB? ASK-ABOUT> <EQUAL? ,PRSO ,OSTMANN>>\n\t\t<COND (<NOT <FSET? ,PRSI ,PERSON>>\n\t\t       <COND (<EQUAL? ,PRSI ,GLOBAL-MURDER>\n\t\t\t      <COND (<FSET? ,PRSO ,TOLD>\n\t\t\t\t     <TELL\n\"\\\"It's terrible! She had agreed to sell me this property, we were going\nto finalize the deal tonight. Someone must have wanted to stop it!\\\"\" CR>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL\n,I-DONT-KNOW \"of any murder.\\\"\" CR>)>)\n\t\t\t     (<EQUAL? ,PRSI\n\t\t\t\t      ,SALE ,SALE-FOLDER SALE-AGREEMENT>\n\t\t\t      <COND (,OSTMANN-SEEN-AGREEMENT?\n\t\t\t\t     <TELL\n\"\\\"She told me this area is getting too suburban. It's no\nlonger a proper place to raise horses. She wants to buy up-county,\nwhere it's still rural. There'd be a hefty profit from\nselling this place, but the new one is even more expensive. She said she\ncould raise the money, though.\\\"\" CR>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <TELL\n\"\\\"I'm not sure I know what you're talking about. You do like to\npry into other people's business, don't you?\\\"\" CR>)>)\n\t\t\t     (<IN? ,PRSI ,HERE>\n\t\t\t      <TELL\n\"\\\"That's an interesting \" D ,PRSI \".\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"I'm not sure what you want me to say.\\\"\" CR>)>)\n\t\t      (<EQUAL? ,PRSI ,PLAYER>\n\t\t       <TELL\n\"\\\"I've never met you before, so I don't really have an opinion. You are\nsomewhat impolite.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,OSTMANN>\n\t\t       <TELL\n\"\\\"I'm just a businessman trying to make a profit, trying to keep busy.\">\n\t\t       <COND (,OSTMANN-SEEN-AGREEMENT?\n\t\t\t      <TELL\n\" For example, what I planned to do with this property is build mostly\ncondominiums, if I can get the zoning. Some two-acre lots, too. This is\nreally the last undeveloped property in this section of the county.\" CR>)>\n\t\t       <TELL \"\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-COCHRANE>\n\t\t       <COND (,OSTMANN-SEEN-AGREEMENT?\n\t\t\t      <TELL\n\"\\\"That weasel! I've half a mind to sue, after what he tried trying to get\nthis property!\">)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"He's going to be in big trouble before he's done.\">)>\n\t\t       <TELL\n\" He's already up before\" ,REAL-ESTATE-BOARD \" for unethical practices:\ncleaning out the escrow accounts, from what I've heard. He and his agents\nare a disgrace to the profession! I can't believe \" 'VERONICA \" invited him.\nHe must be crashing the party. He's certainly got enough gall!\\\"\" CR>)\n\t\t      (<IN? ,PRSI ,HERE>\n\t\t       <TELL\n\"\\\"Why don't you ask \" HIM/HER ,PRSI \" yourself?\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-MICHAEL>\n\t\t       <COND (,OSTMANN-SEEN-AGREEMENT?\n\t\t\t      <TELL\n\"\\\"He's just a parasite. \" 'VERONICA \" told me he opposed\nthe sale. It's going to cost more to buy the new place and\nhe'll have less to play with.\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"He's pathetic. What does he do? A man\nshould be doing something, or he's just a parasite.\\\"\" CR>)>)\n\t\t      (<EQUAL? ,PRSI\n\t\t\t       ,GLOBAL-VERONICA ,GLOBAL-MURDER ,CORPSE>\n\t\t       <COND (<AND <EQUAL? ,PRSI ,GLOBAL-MURDER>\n\t\t\t\t   <NOT <FSET? ,OSTMANN ,TOLD>>>\n\t\t\t      <TELL\n\"\\\"What murder?\\\"\" CR>)\n\t\t\t     (<FSET? ,OSTMANN ,TOLD>\n\t\t\t      <TELL\n\"\\\"I think someone must have wanted to stop the sale! That crook \" 'COCHRANE \"!\nI bet he did it!\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"\" 'VERONICA \" is a woman with a sure sense of what she wants, and a good head\nfor business.\\\"\" CR>)>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-ALICIA>\n\t\t       <TELL\n,I-DONT-KNOW \"her. I understand she's a friend of \" 'VERONICA \"'s.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-RICHARD>\n\t\t       <COND (<FSET? ,PRSO ,TOLD>\n\t\t\t      <TELL\n\"\\\"\" 'VERONICA \" told me he hated her. Now he's got the last laugh. He probably\ninherits it all.\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"Another parasite. The family is full of them. \" 'VERONICA \" is the only one\nwho's got any energy.\\\"\" CR>)>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-COL-MARSTON>\n\t\t       <TELL\n\"\\\"He's an old dinosaur. A toothy one, though. I'd be wary of him. He\nthink's he's 'in loco parentis' to \" 'VERONICA \" and Richard.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-LINDA>\n\t\t       <TELL\n\"\\\"\" 'VERONICA \" called her 'Richard's bar girl'.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-SEN-ASHER>\n\t\t       <TELL\n\"\\\"He's done a lot for this state. Has a good understanding of the needs\nof the businessman. I contributed to his last campaign.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-BUTLER>\n\t\t       <TELL\n\"\\\"He looks uncomfortable.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-BARTENDER>\n\t\t       <TELL\n\"\\\"He's going to be a lawyer, he said.\\\"\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"\\\"I haven't any opinion.\\\"\" CR>)>)>>"
  },
  "G-OSTMANN": {
   "name": "G-OSTMANN",
   "file": "people.zil",
   "line": 3095,
   "endLine": 3105,
   "source": "<ROUTINE G-OSTMANN (GARG)\n\t <COND (<NOT .GARG> <IMOVEMENT ,OSTMANN G-OSTMANN>)\n\t       (<EQUAL? .GARG ,G-IMPATIENT>\n\t\t<TELL\n'OSTMANN \" is getting impatient, but is too polite to say so.\" CR>)\n\t       (<EQUAL? .GARG ,G-ENROUTE>\n\t\t<C&D-SNUB>)\n\t       (<EQUAL? .GARG ,G-REACHED ,G-ALREADY>\n\t\t<COND (<EQUAL? <LOC ,OSTMANN> ,BALLROOM-9>\n\t\t       <NEW-SCRIPT ,OSTMANN ,OSTMANN-LOOP>)>\n\t\t<C&D-SNUB>)>>"
  },
  "C&D-SNUB": {
   "name": "C&D-SNUB",
   "file": "people.zil",
   "line": 3107,
   "endLine": 3120,
   "source": "<ROUTINE C&D-SNUB ()\n\t <COND (<AND <IN? ,OSTMANN ,HERE>\n\t\t     <IN? ,COCHRANE ,HERE>>\n\t\t<COND (,COCHRANE-LOOKS-FOR-OSTMANN?\n\t\t       <SETG COCHRANE-LOOKS-FOR-OSTMANN? <>>\n\t\t       <TELL\n'COCHRANE \" comes up behind \" 'OSTMANN \". \\\"You've\ngot this coming!\\\" he yells, and takes a roundhouse swing at his nose. \"\n'OSTMANN \" ducks and returns the blow with surprising skill, right to the\nsolar plexus. \" 'COCHRANE \" folds up like a house of cards, and drops to the\nfloor with a look of surprise and resentment.\\\"\" CR>)\n\t\t      (ELSE\n\t\t       <TELL 'OSTMANN \" and \" D ,COCHRANE \" are here, \"\n\t\t\t     <PICK-ONE ,COCHRANE-VS-OSTMANN> CR>)>)>>"
  },
  "BUTLER-DESC-F": {
   "name": "BUTLER-DESC-F",
   "file": "people.zil",
   "line": 3150,
   "endLine": 3169,
   "source": "<ROUTINE BUTLER-DESC-F (\"OPTIONAL\" (RARG <>) \"AUX\" OBJ)\n\t <TELL 'BUTLER \" the butler\">\n\t <COND (,ENTANGLED?\n\t\t<TELL\n\" appears to be tying his shoelaces with someone else's teeth, or\na similar contortion.\" CR>)\n\t       (<PRINT-CONTENTS ,BUTLER\n\", a gorilla of noble bearing, is carrying \" ,GORILLA-COSTUME>\n\t\t<TELL \".\" CR>)\n\t       (<IN? ,BUTLER ,EAST-COAT-CLOSET>\n\t\t<TELL\n\" is straightening up some coats.\" CR>)\n\t       (<AND <NOT ,SLAPSTICK?>\n\t\t     <IN-MOTION? ,VERONICA>>\n\t\t<TELL\n\" is helping a guest with his coat.\" CR>)\n\t       (ELSE\n\t\t<TELL\n\", maintaining his regal bearing even though costumed as a\ngorilla, waits nearby.\" CR>)>>"
  },
  "BUTLER-F": {
   "name": "BUTLER-F",
   "file": "people.zil",
   "line": 3171,
   "endLine": 3236,
   "source": "<ROUTINE BUTLER-F ()\n\t <COND (<EQUAL? ,WINNER ,BUTLER>\n\t\t<COND (,ENTANGLED?\n\t\t       <TELL 'BUTLER \" is in no condition to talk now.\" CR>)\n\t\t      (<VERB? HELLO>\n\t\t       <TELL\n\"\\\"How do you do? A lovely evening, isn't it?\\\"\" CR>)\n\t\t      (<VERB? GIVE>\n\t\t       <COND (<EQUAL? ,PRSO ,GLASS>\n\t\t\t      <TELL\n\"\\\"I'm sorry, but you might cut yourself. I propose to throw this\nin the trash.\\\"\" CR>)\n\t\t\t     (<EQUAL? ,PRSI ,PLAYER>\n\t\t\t      <MOVE ,PRSO ,PRSI>\n\t\t\t      <TELL\n\"\\\"If you insist,\\\" he replies, handing you \">\n\t\t\t      <TELL-PRSO>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"He politely refuses.\" CR>)>)\n\t\t      (<DONT-HANDLE?> <RFALSE>)\n\t\t      (ELSE\n\t\t       <TELL\n'BUTLER \" looks at you calmly through the eyeholes of his gorilla suit.\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"George \" 'BUTLER \", the butler, is resplendent in an all-over gorilla suit,\nover which he is wearing his butler's uniform (up to and including white\ngloves). The effect is striking, particularly when he speaks,\nas \" 'BUTLER \" has a British accent.\" CR>)\n\t       (<VERB? DANCE>\n\t\t<TELL\n\"\\\"I beg your pardon? I'm working, as you can see.\\\"\" CR>)\n\t       (<AND <VERB? REVEAL> <EQUAL? ,PRSO ,GLOBAL-MURDER>>\n\t\t<COND (<REVEAL-MURDER ,BUTLER>\n\t\t       <TELL\n\"\\\"A tragedy.\\\" He seems to be genuinely saddened by the news.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"\\\"It is extremely improper of you to be conveying this news in such a\ncallous way.\\\"\" CR>)>)\n\t       (<VERB? GIVE>\n\t\t<COND (<EQUAL? ,PRSO ,YOUR-COAT ,ALICIA-COAT>\n\t\t       <MOVE ,PRSO ,BUTLER>\n\t\t       <NEW-SCRIPT ,BUTLER ,BUTLER-LOOP>\n\t\t       <COND (<IN? ,BUTLER ,HERE>\n\t\t\t      <COND (<NOT <EQUAL? ,WINNER ,PLAYER>>\n\t\t\t\t     <TELL\nCD ,WINNER \" gives \" HIS/HER ,WINNER \" coat to the butler.\" CR>)>\n\t\t\t      <TELL\n\"\\\"Thank you, I'll go hang it up. I believe you know your way to the\nballroom? It's down the long hall to the right. I hope you enjoy your\nevening.\\\"\" CR>)>)\n\t\t      (<EQUAL? ,PRSO ,GLASS>\n\t\t       <MOVE ,GLASS ,BUTLER>\n\t\t       <ESTABLISH-GOAL ,BUTLER ,KITCHEN T>\n\t\t       <TELL\n\"The butler takes it carefully. \\\"You could have cut yourself,\\\" he\ncomments.\" CR>)\n\t\t      (<IN? ,BUTLER ,HERE>\n\t\t       <TELL\n\"The butler politely refuses \">\n\t\t       <TELL-PRSO>)>\n\t\t<RTRUE>)\n\t       (<AND <VERB? ASK-ABOUT> <EQUAL? ,PRSO ,BUTLER>>\n\t\t<TELL 'BUTLER \" ignores the question.\" CR>)>>"
  },
  "G-BUTLER": {
   "name": "G-BUTLER",
   "file": "people.zil",
   "line": 3240,
   "endLine": 3321,
   "source": "<ROUTINE G-BUTLER (GARG\n\t\t   \"AUX\" (NA <>) OW COAT (L <LOC ,BUTLER>) (FLG <>)\n\t\t   (HERE? <EQUAL? ,HERE .L>))\n         <SET OW ,WINNER>\n\t <COND (<NOT .GARG> <IMOVEMENT ,BUTLER G-BUTLER>)\n\t       (<EQUAL? .GARG ,G-IMPATIENT>\n\t\t<TELL\n\"\\\"Pardon me,\\\" says \" 'BUTLER \", \\\"but I have work to do.\\\"\" CR>)\n\t       (<EQUAL? .GARG ,G-ENROUTE>\n\t\t<COND (<NOT ,NEW-ARRIVAL>\n\t\t       <COND (<IN? ,ALICIA .L>\n\t\t\t      <SET NA ,ALICIA>\n\t\t\t      <SET COAT ,ALICIA-COAT>)\n\t\t\t     (<IN? ,DETECTIVE .L>\n\t\t\t      <SET NA ,DETECTIVE>\n\t\t\t      <SET COAT ,DETECTIVE-COAT>)\n\t\t\t     (<IN? ,DUFFY .L>\n\t\t\t      <SET NA ,DUFFY>\n\t\t\t      <SET COAT ,DUFFY-COAT>)\n\t\t\t     (<EQUAL? <META-LOC ,PLAYER> .L>\n\t\t\t      <SET NA ,PLAYER>\n\t\t\t      <SET COAT ,YOUR-COAT>)>\n\t\t       <COND (.NA\n\t\t\t      <COND (<AND <IN? .COAT .NA>\n\t\t\t\t\t  <NOT <FSET? .COAT ,RMUNGBIT>>>\n\t\t\t\t     <FSET .COAT ,RMUNGBIT>\n\t\t\t\t     <COND (.HERE?\n\t\t\t\t\t    <TELL\n\t\t\t\t\t     'BUTLER \" says to \">\n\t\t\t\t\t    <COND (<EQUAL? .NA ,PLAYER>\n\t\t\t\t\t\t   <TELL \"you\">)\n\t\t\t\t\t\t  (ELSE <TELL D .NA>)>\n\t\t\t\t\t    <TELL\n\", \\\"If you would be so kind as to give me\nyour coat, I'll hang it up for you.\\\"\" CR>)>\n\t\t\t\t     <COND (<NOT <EQUAL? .NA ,PLAYER>>\n\t\t\t\t\t    <SETG WINNER .NA>\n\t\t\t\t\t    <PERFORM ,V?GIVE\n\t\t\t\t\t\t     .COAT\n\t\t\t\t\t\t     ,BUTLER>\n\t\t\t\t\t    <SETG WINNER .OW>)>)>\n\t\t\t      <RETURN .HERE?>)>\n\t\t       <COND (<AND <IN? ,GLASS ,BALLROOM-8>\n\t\t\t\t   <NOT <IN-MOTION? ,VERONICA>>>\n\t\t\t      <ESTABLISH-GOAL ,BUTLER ,BALLROOM-8 T>\n\t\t\t      <RFALSE>)>)>)\n\t       (<EQUAL? .GARG ,G-REACHED ,G-ALREADY>\n\t\t<UNPRIORITIZE ,BUTLER>\n\t\t<COND (<IN? ,BUTLER ,HALL>\n\t\t       <COND (,NEW-ARRIVAL\n\t\t\t      <SET FLG <NEW-ARRIVAL-STUFF ,BUTLER>>)\n\t\t\t     (<EQUAL? ,HERE ,HALL>\n\t\t\t      <SET FLG T>\n\t\t\t      <TELL\n\"The butler looks out the \" 'FRONT-DOOR \", finds no one waiting, and resumes\nhis regular rounds.\" CR>)>\n\t\t       <NEW-SCRIPT ,BUTLER ,BUTLER-LOOP>\n\t\t       .FLG)\n\t\t      (<IN? ,BUTLER ,EAST-COAT-CLOSET>\n\t\t       <COND (<DUMP-COATS>\n\t\t\t      <COND (.HERE?\n\t\t\t\t     <TELL\n'BUTLER \" hangs the coat in the closet.\" CR>)>)>)\n\t\t      (<EQUAL? .L ,BALLROOM-8>\n\t\t       <COND (<IN? ,GLASS ,BALLROOM-8>\n\t\t\t      <MOVE ,GLASS ,BUTLER>\n\t\t\t      <ESTABLISH-GOAL ,BUTLER ,KITCHEN T>\n\t\t\t      <COND (<IN-BALLROOM? ,PLAYER>\n\t\t\t\t     <TELL\n'BUTLER \" unobtrusively sweeps up \" THE ,GLASS \".\" CR>)>)>)\n\t\t      (<AND <EQUAL? .L ,KITCHEN>\n\t\t\t    <IN? ,GLASS ,BUTLER>>\n\t\t       <COND (<EQUAL? ,HERE ,KITCHEN>\n\t\t\t      <TELL 'BUTLER \" dumps \" THE ,GLASS \" in \">)>\n\t\t       <COND (<IN? ,TRASH-BASKET ,KITCHEN>\n\t\t\t      <MOVE ,GLASS ,TRASH-BASKET>\n\t\t\t      <COND (<EQUAL? ,HERE ,KITCHEN>\n\t\t\t\t     <TELL THE ,TRASH-BASKET \".\" CR>)>)\n\t\t\t     (ELSE\n\t\t\t      <REMOVE ,GLASS>\n\t\t\t      <COND (<EQUAL? ,HERE ,KITCHEN>\n\t\t\t\t     <TELL \"the garbage disposal.\" CR>)>)>)>)>>"
  },
  "DUMP-COATS": {
   "name": "DUMP-COATS",
   "file": "people.zil",
   "line": 3323,
   "endLine": 3333,
   "source": "<ROUTINE DUMP-COATS (\"AUX\" N X (ROBBED? <>))\n\t <SET X <FIRST? ,BUTLER>>\n\t <REPEAT ()\n\t\t <COND (<NOT .X> <RETURN .ROBBED?>)>\n\t\t <SET N <NEXT? .X>>\n\t\t <COND (<AND <FSET? .X ,TAKEBIT>\n\t\t\t     <NOT <EQUAL? .X ,GLASS>>>\n\t\t\t<MOVE .X ,EAST-COAT-CLOSET>\n\t\t\t<FCLEAR .X ,NDESCBIT>\n\t\t\t<SET ROBBED? .X>)>\n\t\t <SET X .N>>>"
  },
  "TRASH-BASKET-F": {
   "name": "TRASH-BASKET-F",
   "file": "people.zil",
   "line": 3346,
   "endLine": 3356,
   "source": "<ROUTINE TRASH-BASKET-F ()\n\t <COND (<VERB? LOOK-INSIDE EXAMINE SEARCH>\n\t\t<COND (<IN? ,GLASS ,TRASH-BASKET>\n\t\t       <TELL\n\"A \" 'GLASS \" is on top\">)\n\t\t      (ELSE\n\t\t       <TELL\n\"It's nearly full\">)>\n\t\t<TELL \" of uninteresting garbage\">\n\t\t<PRINT-CONTENTS ,TRASH-BASKET \", including \" ,GLASS>\n\t\t<TELL \".\" CR>)>>"
  },
  "BARTENDER-F": {
   "name": "BARTENDER-F",
   "file": "people.zil",
   "line": 3383,
   "endLine": 3531,
   "source": "<ROUTINE BARTENDER-F (\"AUX\" OW)\n\t <SET OW ,WINNER>\n\t <COND (<EQUAL? ,WINNER ,BARTENDER>\n\t\t<COND (<VERB? HELLO>\n\t\t       <TELL ,HEY-BARTENDER CR>)\n\t\t      (<VERB? GIVE MAKE>\n\t\t       <COND (<NOT ,PRSI> <RFALSE>)\n\t\t\t     (<OR <EQUAL? ,PRSO ,DRINK ,GLOBAL-DRINK>\n\t\t\t\t  <EQUAL? ,PRSI ,DRINK ,GLOBAL-DRINK>>\n\t\t\t      <COND (<OR <EQUAL? ,PRSI ,ME ,PLAYER>\n\t\t\t\t\t <EQUAL? ,PRSO ,ME ,PLAYER>>\n\t\t\t\t     <SETG DRINK-COUNT <+ ,DRINK-COUNT 1>>\n\t\t\t\t     <TELL \"\\\"Sure.\">\n\t\t\t\t     <COND (<IN? ,DRINK ,PLAYER>\n\t\t\t\t\t    <TELL\n\" Here, let me take your old one.\">)>\n\t\t\t\t     <THIS-IS-IT ,DRINK>\n\t\t\t\t     <MOVE ,DRINK ,PLAYER>\n\t\t\t\t     <PUTP ,DRINK ,P?SIZE 10>\n\t\t\t\t     <COND (<G? ,DRINK-COUNT 3>\n\t\t\t\t\t    <TELL\n\" Don't you think you've had enough?\\\"\" CR>)\n\t\t\t\t\t   (T\n\t\t\t\t\t    <TELL\n\"\\\" The bartender swiftly and efficiently mixes a drink, then hands it to\nyou.\" CR>)>)\n\t\t\t\t    (<OR <FSET? ,PRSO ,PERSON>\n\t\t\t\t\t <FSET? ,PRSI ,PERSON>>\n\t\t\t\t     <TELL\n\"\\\"\" ,YOU-SHOULD \"let people order their own drinks.\\\"\" CR>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <TELL \"\\\"Pardon?\\\"\" CR>)>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"I'm afraid I can't make one of those.\\\"\" CR>)>)\n\t\t      (<DONT-HANDLE?> <RFALSE>)\n\t\t      (ELSE\n\t\t       <TELL\n\"\\\"Sorry, I've been hired to mix drinks and that's all I'll do.\\\"\" CR>)>)\n\t       (<VERB? HELLO>\n\t\t<TELL ,HEY-BARTENDER CR>)\n\t       (<VERB? TIP>\n\t\t<TELL \"\\\"Thanks.\\\"\" CR>)\n\t       (<VERB? ASK-FOR>\n\t\t<COND (<EQUAL? ,PRSI ,DRINK ,GLOBAL-DRINK>\n\t\t       <SETG WINNER ,BARTENDER>\n\t\t       <PERFORM ,V?GIVE ,DRINK ,PLAYER>\n\t\t       <SETG WINNER .OW>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL\n\"\\\"I don't have that.\\\"\" CR>)>)\n\t       (<AND <VERB? REVEAL> <EQUAL? ,PRSO ,GLOBAL-MURDER>>\n\t\t<COND (<REVEAL-MURDER ,BARTENDER>\n\t\t       <TELL\n\"\\\"I hope I'll still get paid.\\\" He realizes that wasn't a very tactful\nremark, and tries to recover. \\\"It's too bad.\\\"\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"\\\"I know. You'd think it would quiet these people down, but it\nhasn't.\\\"\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"Jack Johnson, the bartender, is a well-barbered young man wearing a red\nuniform and, as his only concession to the theme of the party, a simple\ndomino mask.\" CR>)\n\t       (<VERB? DANCE>\n\t\t<TELL \"\\\"Sorry, I'm on duty.\\\"\" CR>)\n\t       (<AND <VERB? ASK-ABOUT> <EQUAL? ,PRSO ,BARTENDER>>\n\t\t<COND (<EQUAL? ,PRSI ,DRINK ,GLOBAL-DRINK ,BAR>\n\t\t       <TELL\n\"\\\"I know a lot about drinks.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-MURDER>\n\t\t       <COND (<FSET? ,PRSO ,TOLD>\n\t\t\t      <TELL\n\"\\\"It certainly puts a damper on the evening for me, but no one else\nseems too concerned.\\\"\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"\\\"What? What murder?\\\"\" CR>)>)\n\t\t      (<EQUAL? ,PRSI ,PLAYER>\n\t\t       <TELL\n\"\\\"I'm interested in things like libel law, and the first amendment. We\nshould talk later, I'm sure your views are interesting.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,BARTENDER>\n\t\t       <TELL\n\"\\\"I'm Jack Johnson. I'm trying to pay some of my tuition by working\nbehind bars. Get it? Well, I get quite a view of mankind. It's good\npractice, I'm going to be a lawyer.\\\"\" CR>)\n\t\t      (<IN? ,PRSI ,HERE>\n\t\t       <TELL\n\"Glancing discreetly at the subject of the inquiry, Jack only smiles.\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-MICHAEL>\n\t\t       <TELL\n\"\\\"Nice guy, sort of the hail-fellow-well-met type. Practically broke my hand\nshaking it when I first came in. Likes a very dry martini, already had a\ncouple tonight. 'You want dry?' I told him. I pour the gin in, and then I\nkinda wave the fumes from the vermouth over the glass. He thought that was\na good one...\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-VERONICA>\n\t\t       <TELL\n\"\\\"One of her friends told her about me. I worked a party over there a month\nor so ago, so Ms. Ashcroft asks the agency for me\nspecifically. I can use the dough. Going to Law School, and it ain't cheap.\\\"\nHe looks significantly at the tip glass. \\\"Anyway, she had a Singapore Sling:\nmost of these women like a sweet drink.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-LINDA>\n\t\t       <TELL\n\"\\\"A knockout, isn't she? She actually drinks sloe\ngin fizzes. I didn't think anybody over 21 could stand them.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-RICHARD>\n\t\t       <TELL\n\"\\\"He seems sort of beaten down. You see too many of them in\nthis business. Like they're carrying something too heavy.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-COL-MARSTON>\n\t\t       <TELL\n\"\\\"A very distinguished gentleman, and he knows it. Of course, the fact\nthat he knows it spoils the whole effect.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-ALICIA>\n\t\t       <COND (,ALICIA-HERE?\n\t\t\t      <TELL\n\"\\\"Nice harem costume.\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL \"\\\"I haven't seen her.\\\"\" CR>)>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-SEN-ASHER>\n\t\t       <TELL\n\"\\\"The man's a true politician. Not even up for election for another four\nyears, and he's doing the whole campaign bit the first time he comes over\nfor a drink. Of course, I guess I'm the closest thing there is to the\npublic here, the average income in this room must be something. He told\nme he's a teetotaler, too: ordered a soft drink. His father was an alcoholic\nand the Senator could never bring himself to drink, remembering.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-COCHRANE>\n\t\t       <TELL\n\"\\\"That one? He'll be out before the night's over. Straight bourbon, no\nice, and beer chasers. I'm surprised he can stand up now. He's had three\nalready.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-OSTMANN>\n\t\t       <COND (<FSET? ,PRSO ,TOLD>\n\t\t\t      <TELL\n\"\\\"He's taking \" 'VERONICA \"'s death hard. I wonder why.\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"He's very pleased with himself, isn't he?\\\"\" CR>)>)\n\t\t      (<EQUAL? ,PRSI ,GLOBAL-BUTLER>\n\t\t       <TELL\n\"\\\"He's been quite helpful. He obviously knows his job.\\\"\" CR>)\n\t\t      (ELSE\n\t\t       <I-WOULDNT-KNOW>)>)>>"
  },
  "I-WOULDNT-KNOW": {
   "name": "I-WOULDNT-KNOW",
   "file": "people.zil",
   "line": 3533,
   "endLine": 3535,
   "source": "<ROUTINE I-WOULDNT-KNOW ()\n\t <TELL\n\"\\\"I wouldn't know.\\\"\" CR>>"
  },
  "DRINK-F": {
   "name": "DRINK-F",
   "file": "people.zil",
   "line": 3556,
   "endLine": 3590,
   "source": "<ROUTINE DRINK-F (\"AUX\" OW)\n\t <SET OW ,WINNER>\n\t <COND (<VERB? ASK-FOR>\n\t\t<COND (<EQUAL? ,HERE ,BALLROOM-9>\n\t\t       <SETG WINNER ,BARTENDER>\n\t\t       <PERFORM ,V?GIVE ,DRINK .OW>\n\t\t       <SETG WINNER .OW>\n\t\t       <RTRUE>)\n\t\t      (ELSE\n\t\t       <TELL\n\"Drinks may be obtained at the bar.\" CR>)>)\n\t       (<VERB? THROW POUR-ON>\n\t\t<PUTP ,PRSO ,P?SIZE 5>\n\t\t<RFALSE>)\n\t       (<VERB? DRINK>\n\t\t<COND (<NOT <EQUAL? ,PRSO ,DRINK>>\n\t\t       <TELL\n\"Perhaps you've had one too many already. There is no drink\">\n\t\t       <TELL-HERE>)\n\t\t      (<EQUAL? <GETP ,DRINK ,P?SIZE> 5>\n\t\t       <TELL\n\"It's empty. If you want more, you'll need a refill.\" CR>)\n\t\t      (ELSE\n\t\t       <PUTP ,DRINK ,P?SIZE <- <GETP ,DRINK ,P?SIZE> 1>>\n\t\t       <TELL\n\"You sip the drink. It's cold and tasty, but perhaps a little stronger\nthan you would like.\" CR>)>)\n\t       (<VERB? TAKE>\n\t\t<COND (<IN? ,DRINK ,PLAYER>\n\t\t       <TELL\n\"You already have one.\" CR>)\n\t\t      (<AND <EQUAL? ,HERE ,BALLROOM-9>\n\t\t\t    <NOT <IN? ,DRINK ,HERE>>>\n\t\t       <PERFORM ,V?ORDER ,DRINK>\n\t\t       <RTRUE>)>)>>"
  },
  "G-BARTENDER": {
   "name": "G-BARTENDER",
   "file": "people.zil",
   "line": 3592,
   "endLine": 3593,
   "source": "<ROUTINE G-BARTENDER (GARG)\n\t <COND (<NOT .GARG> <IMOVEMENT ,BARTENDER G-BARTENDER>)>>"
  },
  "DETECTIVE-DESC-F": {
   "name": "DETECTIVE-DESC-F",
   "file": "people.zil",
   "line": 3617,
   "endLine": 3636,
   "source": "<ROUTINE DETECTIVE-DESC-F (\"OPTIONAL\" (RARG <>))\n\t <TELL CTHE ,DETECTIVE>\n\t <COND (<EQUAL? <LOC ,DETECTIVE> ,BALLROOM-8 ,BALLROOM-9>\n\t\t<TELL\n\" stands nearby, weighing evidence.\" CR>)\n\t       (<IN? ,DETECTIVE ,OFFICE>\n\t\t<SETG LAST-FROB ,FROB>\n\t\t<SETG FROB <PICK-ONE ,OFFICE-FROBS>>\n\t\t<TELL \" is examining \" THE ,FROB \".\" CR>)\n\t       (ELSE\n\t\t<TELL \" is here\">\n\t\t<COND (<EQUAL? <META-LOC ,CORPSE> ,HERE>\n\t\t       <TELL \", examining \" D ,CORPSE>)\n\t\t      (<AND <L? ,DETECTIVE-SEEN 5>\n\t\t\t    <OR ,DETECTIVE-SEEN-CORPSE?\n\t\t\t\t,DETECTIVE-SEEN-ROPE?\n\t\t\t\t,DETECTIVE-SEEN-BULLET?>>\n\t\t       <TELL\n\", eyeing you suspiciously\">)>\n\t\t<TELL \".\" CR>)>>"
  },
  "DETECTIVE-F": {
   "name": "DETECTIVE-F",
   "file": "people.zil",
   "line": 3672,
   "endLine": 4055,
   "source": "<ROUTINE DETECTIVE-F (\"AUX\" OSEEN)\n\t <COND (<EQUAL? ,WINNER ,DETECTIVE>\n\t        <COND (<AND <VERB? GIVE>\n\t\t\t    <EQUAL? ,PRSO ,DETECTIVE-COAT>\n\t\t\t    <EQUAL? ,PRSI ,BUTLER>>\n\t\t       <COND (<IN? ,BUTLER ,HERE>\n\t\t\t      <TELL\nCTHE ,DETECTIVE \" politely refuses to yield the trenchcoat.\" CR>)>\n\t\t       <RTRUE>)\n\t\t      (<AND <NOT ,DETECTIVE-BEEN-TO-OFFICE?>\n\t\t\t    <IN? ,DETECTIVE ,HERE>\n\t\t\t    <NOT <VERB? $DISCOVER $REVEAL>>>\n\t\t       <TELL\n\"\\\"Can't this wait until I've visited the scene of the crime?\\\"\" CR>)\n\t\t      (<AND <VERB? LOOK-INSIDE>\n\t\t\t    <EQUAL? ,PRSO ,FAIRY-MASK>>\n\t\t       <COND (<IN? ,HAIR ,FAIRY-MASK>\n\t\t\t      <FCLEAR ,HAIR ,INVISIBLE>\n\t\t\t      <SETG WINNER ,PLAYER>\n\t\t\t      <PERFORM ,V?SHOW ,HAIR ,DETECTIVE>\n\t\t\t      <SETG WINNER ,DETECTIVE>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"\\\"Yes, I'm looking... What's inside that's so interesting? I don't see\nany blood or anything.\\\"\" CR>)>)\n\t\t      (<VERB? ARREST ACCUSE>\n\t\t       <COND (<EQUAL? ,PRSI ,GLOBAL-EMBEZZLEMENT>\n\t\t\t      <TELL\n\"\\\"We'll worry about that after we've solved the murder, okay?\\\"\" CR>)\n\t\t\t     (<EQUAL? ,PRSO ,OBJECT-PAIR>\n\t\t\t      <COND (<G? <GET ,P-PRSO ,P-MATCHLEN> 2>\n\t\t\t\t     <TELL\n\"\\\"Sure, why don't I just run them all in?\\\"\" CR>)\n\t\t\t\t    (<AND <GETP <1 ,P-PRSO> ,P?CHARACTER>\n\t\t\t\t\t  <GETP <2 ,P-PRSO> ,P?CHARACTER>>\n\t\t\t\t     <ARREST <LOCALIZE <1 ,P-PRSO>>\n\t\t\t\t\t     <LOCALIZE <2 ,P-PRSO>>>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <TELL\n\"\\\"Arrested development, that's what you've got.\\\"\" CR>)>)\n\t\t\t     (<AND <GETP ,PRSO ,P?CHARACTER>\n\t\t\t\t   <NOT <EQUAL? ,PRSO\n\t\t\t\t\t\t,VERONICA\n\t\t\t\t\t\t,GLOBAL-VERONICA>>>\n\t\t\t      <COND (<G? ,DETECTIVE-SEEN 4>\n\t\t\t\t     <ARREST <LOCALIZE ,PRSO>>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <TELL\n\"\\\"Whoa! Who's \" THE ,DETECTIVE \" here? If you can give me enough good reasons\nto arrest someone, I might listen to you, but you haven't given me\nenough!\\\"\" CR>)>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"That's the silliest thing I've ever heard.\\\"\" CR>)>)\n\t\t      (<VERB? ANALYZE>\n\t\t       <COND (<NOT <EQUAL? <META-LOC ,PRSO> ,HERE ,POLICE-LAB>>\n\t\t\t      <NOT-HERE ,PRSO>\n\t\t\t      <RTRUE>)\n\t\t\t     (<EQUAL? ,PRSO ,GLASS>\n\t\t\t      <CHECK-GLASS>)\n\t\t\t     (<EQUAL? ,PRSI ,GLOBAL-FINGERPRINTS>\n\t\t\t      <TELL\n\"\\\"I doubt we'll find any \" 'GLOBAL-FINGERPRINTS \" on \" THE ,PRSO \".\\\"\" CR>)\n\t\t\t     (<EQUAL? ,PRSO ,STAIN>\n\t\t\t      <TELL\nCTHE ,DETECTIVE \" reaches down and snips a small sample of stained cloth\nfrom the costume.\" CR>\n\t\t\t      <CHECK-JUNK ,STAIN-SAMPLE>)\n\t\t\t     (<EQUAL? ,PRSO ,HAIR>\n\t\t\t      <COND (<IN? ,HAIR ,FAIRY-MASK>\n\t\t\t\t     <COND (<NOT ,DETECTIVE-SEEN-HAIR?>\n\t\t\t\t\t    <SETG DETECTIVE-SEEN-HAIR? T>\n\t\t\t\t\t    <SETG DETECTIVE-SEEN\n\t\t\t\t\t\t  <+ ,DETECTIVE-SEEN 1>>)>\n\t\t\t\t     <CHECK-JUNK ,HAIR>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL\n\"\\\"What's the point of analyzing this hair after you've been fooling around\nwith it?\\\"\" CR>)>)\n\t\t\t     (<EQUAL? ,PRSO ,FAIRY-MASK>\n\t\t\t      <CHECK-JUNK ,FAIRY-MASK>)\n\t\t\t     (<EQUAL? ,PRSO ,CORPSE>\n\t\t\t      <TELL\n\"\\\"I think I'll leave that to the coroner. For the moment, it's enough\nthat she's dead.\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"I don't think an analysis of \" THE ,PRSO \" would reveal any useful\ninformation.\\\"\" CR>)>)\n\t\t      (<VERB? COMPARE>\n\t\t       <COND (<AND <OR <EQUAL? ,PRSO ,HAIR ,VERONICA-HAIR>\n\t\t\t\t       <EQUAL? ,PRSO ,ALICIA-HAIR ,LINDA-HAIR>>\n\t\t\t\t   <OR <EQUAL? ,PRSI ,HAIR ,VERONICA-HAIR>\n\t\t\t\t       <EQUAL? ,PRSI\n\t\t\t\t\t       ,ALICIA-HAIR\n\t\t\t\t\t       ,LINDA-HAIR>>>\n\t\t\t      <TELL\n\"The detective compares the hairs. \\\"These hairs are \">\n\t\t\t      <COND (<AND <EQUAL? ,PRSO ,PRSI ,HAIR>\n\t\t\t\t\t  <EQUAL? ,PRSI ,PRSO ,ALICIA-HAIR>>\n\t\t\t\t     <TELL \"quite similar\">)\n\t\t\t\t    (T\n\t\t\t\t     <TELL \"not alike\">)>\n\t\t\t      <TELL \".\\\"\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"\\\"How about apples and oranges?\\\"\" CR>)>)\n\t\t      (<VERB? TELL ASK-ABOUT>\n\t\t       <TELL\n\"\\\"I'll ask the questions here.\\\"\" CR>)\n\t\t      (<VERB? FIND>\n\t\t       <COND (<EQUAL? <META-LOC ,PRSO> ,HERE>\n\t\t\t      <TELL \"\\\"Not too observant, are you?\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"It would help if you told me where to look.\\\"\" CR>)>)\n\t\t      (<OR <DONT-HANDLE?>\n\t\t\t   <VERB? FINGERPRINT>>\n\t\t       <RFALSE>)\n\t\t      (ELSE\n\t\t       <TELL\n\"\\\"I'm very busy. There's been a murder, in case you haven't noticed.\\\"\" CR>)>)\n\t       (<VERB? PHONE>\n\t\t<PERFORM ,V?PHONE ,POLICE>\n\t\t<RTRUE>)\n\t       (<AND <VERB? EXAMINE> <EQUAL? ,PRSO ,DETECTIVE>>\n\t\t<TELL\nCTHE ,DETECTIVE \" is quiet and intense, wearing a trenchcoat and a crumpled\nhat. The trenchcoat and hat are still wet from the rain.\" CR>)\n\t       (<AND <VERB? SHOW GIVE> <EQUAL? ,PRSI ,DETECTIVE>>\n\t\t<SET OSEEN ,DETECTIVE-SEEN>\n\t\t<TELL CTHE ,DETECTIVE>\n\t\t<COND (<EQUAL? ,PRSO ,CORPSE>\n\t\t       <TELL\n\" comes over.\">)\n\t\t      (<NOT ,DETECTIVE-BEEN-TO-OFFICE?>\n\t\t       <TELL\n\" says, \\\"Can't this wait until I've visited the scene of the crime?\\\"\" CR>\n\t\t       <RTRUE>)\n\t\t      (<IN? ,PRSO ,DETECTIVE>\n\t\t       <TELL\n\" looks at you strangely and then shows \" THE ,PRSO \" to you.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<OR <EQUAL? ,PRSO ,GLASS-ANALYSIS ,HAIR-ANALYSIS>\n\t\t\t   <EQUAL? ,PRSO ,NULL-ANALYSIS ,STAIN-ANALYSIS>>\n\t\t       <MOVE ,PRSO ,DETECTIVE>\n\t\t       <TELL\n\" takes it back. \\\"Thanks, I hope you found it interesting.\\\"\" CR>\n\t\t       <RTRUE>)\n\t\t      (<AND <EQUAL? ,PRSO ,HAIR>\n\t\t\t    <IN? ,HAIR ,FAIRY-MASK>>\n\t\t       <COND (<IN? ,FAIRY-MASK ,DETECTIVE>\n\t\t\t      <TELL\n\" looks inside the mask.\">)\n\t\t\t     (ELSE\n\t\t\t      <FSET ,FAIRY-MASK ,TRYTAKEBIT>\n\t\t\t      <MOVE ,FAIRY-MASK ,DETECTIVE>\n\t\t\t      <TELL\n\" takes the mask, noting the hair as you point it out.\">)>)\n\t\t      (<IN? ,PRSO ,FIREPLACE>\n\t\t       <MOVE ,PRSO ,DETECTIVE>\n\t\t       <TELL\n\" snatches it from the fireplace.\">)\n\t\t      (<IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t       <TELL\n\" is confused. \\\"What are you trying to tell me about?\\\"\" CR>\n\t\t       <RTRUE>)\n\t\t      (<OR <FSET? ,PRSO ,PERSON>\n\t\t\t   <GLOBAL-IN? ,PRSO ,HERE>\n\t\t\t   <NOT <FSET? ,PRSO ,TAKEBIT>>>\n\t\t       <TELL\n\" looks at \" THE ,PRSO \".\">)\n\t\t      (<AND <FSET? ,PRSO ,TRYTAKEBIT>\n\t\t\t    <NOT <EQUAL? ,PRSO ,GLASS ,BULLET ,FAIRY-MASK>>\n\t\t\t    <NOT <HELD? ,PRSO ,PLAYER>>>\n\t\t       <TELL\n\" says, \\\"Would you mind bringing it over?\\\"\" CR>\n\t\t       <RTRUE>)\n\t\t      (<VERB? SHOW>\n\t\t       <MOVE ,PRSO ,DETECTIVE>\n\t\t       <FSET ,PRSO ,TRYTAKEBIT>\n\t\t       <TELL\n\" looks at \" THE ,PRSO \" for a moment, then takes it.\">)\n\t\t      (ELSE\n\t\t       <MOVE ,PRSO ,DETECTIVE>\n\t\t       <FSET ,PRSO ,TRYTAKEBIT>\n\t\t       <TELL\n\" takes \" THE ,PRSO \".\">)>\n\t\t<COND (<EQUAL? ,JUNK-COUNT 4>\n\t\t       <TELL\n\" \\\"Go away and stop bothering me!\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSO ,CORPSE>\n\t\t       <TELL \" \" CTHE ,DETECTIVE>\n\t\t       <COND (,DETECTIVE-SEEN-CORPSE?\n\t\t\t      <TELL\n\" looks at the corpse, and replies, \\\"Show me something\nI haven't already seen!\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <SETG DETECTIVE-SEEN-CORPSE? T>\n\t\t\t      <SETG DETECTIVE-SEEN <+ ,DETECTIVE-SEEN>>\n\t\t\t      <TELL\n\" examines the body.\" CR>)>)\n\t\t      (<EQUAL? ,PRSO ,ROPE>\n\t\t       <TELL \" \" CTHE ,DETECTIVE \" examines the rope\">\n\t\t       <COND (<NOT ,DETECTIVE-SEEN-ROPE?>\n\t\t\t      <SETG DETECTIVE-SEEN-ROPE? T>\n\t\t\t      <SETG DETECTIVE-SEEN <+ ,DETECTIVE-SEEN 1>>\n\t\t\t      <TELL\n\" with interest\">)>\n\t\t       <TELL \".\" CR>)\n\t\t      (<EQUAL? ,PRSO ,CARD>\n\t\t       <COND (,DETECTIVE-SEEN-CARD?\n\t\t\t      <TELL\n\" \\\"I've seen that already.\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <SETG DETECTIVE-SEEN-CARD? T>\n\t\t\t      <SETG DETECTIVE-SEEN <+ ,DETECTIVE-SEEN 1>>\n\t\t\t      <COND (,DETECTIVE-SEEN-AGREEMENT?\n\t\t\t\t     <TELL\n\" \\\"This certainly seems to implicate \" 'COCHRANE \". He seems hot-headed\nenough to commit murder, and the sale provides a motive.\\\"\" CR>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <TELL\n\" \\\"I wonder what this means? What was she doing that she might regret?\nIt certainly casts some suspicion on \" 'COCHRANE \".\\\"\" CR>)>)>)\n\t\t      (<OR <EQUAL? ,PRSO ,SALE-AGREEMENT>\n\t\t\t   <AND <EQUAL? ,PRSO ,SALE-FOLDER>\n\t\t\t\t<IN? ,SALE-AGREEMENT ,SALE-FOLDER>>>\n\t\t       <COND (<NOT ,DETECTIVE-SEEN-AGREEMENT?>\n\t\t\t      <SETG DETECTIVE-SEEN-AGREEMENT? T>\n\t\t\t      <SETG DETECTIVE-SEEN <+ ,DETECTIVE-SEEN 1>>\n\t\t\t      <TELL\n\" \\\"If someone wanted to prevent this sale,\nit might have been worth committing a murder to do. \">\n\t\t\t      <COND (,DETECTIVE-SEEN-CARD?\n\t\t\t\t     <TELL \"Could it have been \" 'COCHRANE>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL \"But\nwho could that have been\">)>\n\t\t\t      <TELL \"?\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\" \\\"Yes, I've seen that. Stop bothering me!\\\"\" CR>)>)\n\t\t      (<EQUAL? ,PRSO ,ALICIA-COAT>\n\t\t       <COND (<NOT ,DETECTIVE-SEEN-COAT?>\n\t\t\t      <SETG DETECTIVE-SEEN-COAT? T>\n\t\t\t      <COND (<NOT ,DETECTIVE-TOLD-ABOUT-RAIN?>\n\t\t\t\t     <TELL\n\" \\\"I don't see the significance of this. It's been raining all night,\nas far as I know. Everyone's coat is wet.\\\"\" CR>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <SETG DETECTIVE-SEEN\n\t\t\t\t\t   <+ ,DETECTIVE-SEEN 2>>\n\t\t\t\t     <TELL\n\" \\\"Hmm. When Alicia arrived it wasn't raining, and this coat is wet! She\nmust have really been outside during the rain.\\\"\" CR>)>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\" \\\"Yes, it's still wet.\\\"\" CR>)>)\n\t\t      (<OR <EQUAL? ,PRSO ,TRUST-DOCUMENTS>\n\t\t\t   <AND <EQUAL? ,PRSO ,TRUST-FOLDER>\n\t\t\t\t<IN? ,TRUST-DOCUMENTS ,TRUST-FOLDER>>>\n\t\t       <COND (<NOT ,DETECTIVE-SEEN-TRUST-DOCUMENTS?>\n\t\t\t      <SETG DETECTIVE-SEEN-TRUST-DOCUMENTS? T>\n\t\t\t      <SETG DETECTIVE-SEEN <+ ,DETECTIVE-SEEN 1>>\n\t\t\t      <FCLEAR ,TRUST-DOCUMENTS ,NDESCBIT>\n\t\t\t      <TELL\n\" \\\"Where did you get this? It's important!\">\n\t\t\t      <COND (,DETECTIVE-SEEN-LIST?\n\t\t\t\t     <TELL\n\" This means that \" 'MICHAEL \" and \" 'COL-MARSTON \" were embezzling from the family\ntrust. And further, \" 'VERONICA \" knew it!\">)>\n\t\t\t      <TELL \"\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\" \\\"Don't you have anything new to show me?\\\"\" CR>)>)\n\t\t      (<EQUAL? ,PRSO ,GLASS>\n\t\t       <COND (<NOT ,DETECTIVE-SEEN-GLASS?>\n\t\t\t      <TELL \" \">\n\t\t\t      <CHECK-GLASS>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\" \\\"It's the same glass, right?\\\"\" CR>)>)\n\t\t      (<EQUAL? ,PRSO ,FAIRY-MASK>\n\t\t       <TELL\n\" \\\"What's so interesting about this mask?\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSO ,HAIR>\n\t\t       <COND (<AND <IN? ,HAIR ,FAIRY-MASK>\n\t\t\t\t   <NOT <FSET? ,HAIR ,INVISIBLE>>>\n\t\t\t      <COND (<NOT ,DETECTIVE-SEEN-HAIR?>\n\t\t\t\t     <SETG DETECTIVE-SEEN-HAIR? T>\n\t\t\t\t     <SETG DETECTIVE-SEEN\n\t\t\t\t\t   <+ ,DETECTIVE-SEEN 1>>\n\t\t\t\t     <TELL\n\" \\\"A \" 'HAIR \", eh? \" 'VERONICA \"'s hair was blonde. How did a hair this color\nget into this mask?\\\"\" CR>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <TELL\n\" \\\"Same old hair, eh?\\\"\" CR>)>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\" \\\"It looks like a hair. What is it supposed to prove? You're going to be\nin deep trouble if you've been disturbing evidence!\\\"\" CR>)>)\n\t\t      (<EQUAL? ,PRSO ,INVESTOR-LIST>\n\t\t       <COND (<NOT ,DETECTIVE-SEEN-LIST?>\n\t\t\t      <SETG DETECTIVE-SEEN-LIST? T>\n\t\t\t      <SETG DETECTIVE-SEEN <+ ,DETECTIVE-SEEN 1>>\n\t\t\t      <COND (,DETECTIVE-SEEN-TRUST-DOCUMENTS?\n\t\t\t\t     <TELL\n\" \" CTHE ,DETECTIVE \" reads the paper with growing excitement. \\\"This is it!\nThe motive I've been looking for!\\\"\" CR>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <TELL\n\" \\\"What's the significance of this? \" 'COL-MARSTON \" and \" 'MICHAEL \" were co-investors\nin something?\\\"\" CR>)>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\" \\\"Seen it before.\\\"\" CR>)>)\n\t\t      (ELSE\n\t\t       <SETG JUNK-COUNT <+ ,JUNK-COUNT 1>>\n\t\t       <TELL \" \" <GET ,JUNK-STRINGS ,JUNK-COUNT> CR>)>\n\t\t<COND (<G? ,DETECTIVE-SEEN .OSEEN>\n\t\t       <GRAB-ATTENTION ,DETECTIVE>)>\n\t\t<RTRUE>)\n\t       (<AND <VERB? TELL-ME> <EQUAL? ,PRSO ,DETECTIVE>>\n\t\t<COND (<EQUAL? ,PRSI ,WEATHER>\n\t\t       <COND (,SAW-RAIN-SLACK-OFF?\n\t\t\t      <COND (<NOT ,DETECTIVE-TOLD-ABOUT-RAIN?>\n\t\t\t\t     <SETG DETECTIVE-TOLD-ABOUT-RAIN? T>\n\t\t\t\t     <COND (<NOT ,DETECTIVE-SEEN-COAT?>\n\t\t\t\t\t    <TELL\n\"You try to explain the significance of the rain, but \" THE ,DETECTIVE \" doesn't\nunderstand what you're getting at.\" CR>)\n\t\t\t\t\t   (ELSE\n\t\t\t\t\t    <SETG DETECTIVE-SEEN\n\t\t\t\t\t\t  <+ ,DETECTIVE-SEEN 2>>\n\t\t\t\t\t    <TELL\nCTHE ,DETECTIVE \" listens as you explain how when Alicia arrived the rain was\nfalling very lightly, but that her overcoat was soaked, which is why you\nturned it over to the authorities. \" CTHE ,DETECTIVE \" says, \\\"That may mean\nshe was here earlier when the rain was pelting down, that she didn't arrive\nwhen she said she did.\\\"\" CR>)>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL\n\"\\\"You've already told me this.\\\"\" CR>)>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"You haven't seen anything significant about the weather, so you can't\ntell \" THE ,DETECTIVE \" about it.\" CR>)>)\n\t\t      (<AND <EQUAL? ,PRSI ,BMW>\n\t\t\t    ,DETECTIVE-SEEN-TRUST-DOCUMENTS?>\n\t\t       <TELL\n\"\\\"Ah! Either \" 'MICHAEL \" or someone with access to his keys must have\nput the documents there.\\\"\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\nCTHE ,DETECTIVE \" doesn't seem very interested.\" CR>)>\n\t\t<COND (<G? ,DETECTIVE-SEEN .OSEEN>\n\t\t       <GRAB-ATTENTION ,DETECTIVE>)>\n\t\t<RTRUE>)\n\t       (<AND <VERB? ASK-ABOUT> <EQUAL? ,PRSO ,DETECTIVE>>\n\t\t<COND (<EQUAL? ,PRSI ,DETECTIVE>\n\t\t       <TELL\n\"\\\"I'm a detective. That's all you need to know right now.\\\"\" CR>)\n\t\t      (<EQUAL? ,PRSI ,DUFFY ,GLOBAL-DUFFY>\n\t\t       <TELL\n\"\\\"\" 'DUFFY \" is my assistant, and a finer public servant you're\nunlikely to find.\\\"\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"\\\"I don't reveal my methods, particularly to potential suspects.\\\"\" CR>)>)\n\t       (<AND <VERB? TAKE> <IN? ,PRSO ,DETECTIVE>>\n\t\t<TELL\n\"\\\"You can't have that. It's evidence.\\\"\" CR>)\n\t       (<VERB? REPLY>\n\t\t<TELL CTHE ,DETECTIVE \" listens intently.\" CR>)\n\t       (<CAUGHT-WITH-BODY?>\n\t\t<COND (<NOT ,DETECTIVE-SEEN-CORPSE?>\n\t\t       <SETG DETECTIVE-SEEN-CORPSE? T>\n\t\t       <SETG DETECTIVE-SEEN <+ ,DETECTIVE-SEEN 1>>)>\n\t\t<I-START-ARREST>\n\t\t<TELL\nCTHE ,DETECTIVE \" sees you carrying the body.\" CR>)>>"
  },
  "ITLL-WAIT": {
   "name": "ITLL-WAIT",
   "file": "people.zil",
   "line": 4065,
   "endLine": 4067,
   "source": "<ROUTINE ITLL-WAIT ()\n\t <TELL\n\"\\\"It will have to wait until \" 'DUFFY \" gets back from the lab.\\\"\" CR>>"
  },
  "CHECK-GLASS": {
   "name": "CHECK-GLASS",
   "file": "people.zil",
   "line": 4069,
   "endLine": 4094,
   "source": "<ROUTINE CHECK-GLASS ()\n\t <COND (<IN? ,DUFFY ,POLICE-LAB>\n\t\t<ITLL-WAIT>\n\t\t<RTRUE>)>\n\t <COND (<NOT ,DETECTIVE-SEEN-GLASS?>\n\t\t<SETG DETECTIVE-SEEN-GLASS? T>\n\t\t<SETG DETECTIVE-SEEN <+ ,DETECTIVE-SEEN 1>>)>\n\t <COND (<OR <AND ,GLASS-ANALYZED?\n\t\t\t <NOT ,PRSI>>\n\t\t    <AND ,GLASS-ANALYZED-FOR-PRINTS?\n\t\t\t <EQUAL? ,PRSI ,GLOBAL-FINGERPRINTS>>>\n\t\t<TELL\n\"\\\"That's already been done.\\\"\" CR>)\n\t       (ELSE\n\t\t<COND (<NOT ,GLASS-ANALYZED?>\n\t\t       <SETG GLASS-ANALYZED? T>\n\t\t       <SETG DETECTIVE-SEEN <+ ,DETECTIVE-SEEN 1>>)>\n\t\t<TELL-ANALYZE ,GLASS>\n\t\t<COND (<EQUAL? ,PRSI ,GLOBAL-FINGERPRINTS>\n\t\t       <COND (<NOT ,GLASS-ANALYZED-FOR-PRINTS?>\n\t\t\t      <SETG GLASS-ANALYZED-FOR-PRINTS? T>\n\t\t\t      <COND (<NOT <FSET? ,GLASS ,TOUCHBIT>>\n\t\t\t\t     <SETG DETECTIVE-SEEN\n\t\t\t\t\t   <+ ,DETECTIVE-SEEN 1>>)>)>\n\t\t       <TELL \" for \" 'GLOBAL-FINGERPRINTS>)>\n\t\t<DUFFY-TO-LAB ,GLASS>)>>"
  },
  "CHECK-JUNK": {
   "name": "CHECK-JUNK",
   "file": "people.zil",
   "line": 4096,
   "endLine": 4101,
   "source": "<ROUTINE CHECK-JUNK (OBJ)\n\t <COND (<IN? ,DUFFY ,POLICE-LAB>\n\t\t<ITLL-WAIT>\n\t\t<RTRUE>)>\n\t <TELL-ANALYZE .OBJ>\n\t <DUFFY-TO-LAB .OBJ>>"
  },
  "TELL-ANALYZE": {
   "name": "TELL-ANALYZE",
   "file": "people.zil",
   "line": 4103,
   "endLine": 4105,
   "source": "<ROUTINE TELL-ANALYZE (OBJ)\n\t <TELL\n\"\\\"\" 'DUFFY \", analyze \" THE .OBJ>>"
  },
  "DUFFY-TO-LAB": {
   "name": "DUFFY-TO-LAB",
   "file": "people.zil",
   "line": 4107,
   "endLine": 4140,
   "source": "<ROUTINE DUFFY-TO-LAB (OBJ \"AUX\" GT)\n\t <TELL \"!\\\" \" 'DUFFY \" \">\n\t <COND (<NOT <IN? ,DUFFY ,HERE>>\n\t\t<TELL \"appears as if out of nowhere and \">)>\n\t <TELL\n\"takes \" THE .OBJ \". He seems to almost disappear. \\\"He's a fine\npublic servant,\\\" comments \" THE ,DETECTIVE \".\" CR>\n\t <SET GT <GET ,GOAL-TABLES ,DUFFY-C>>\n\t <PUT .GT ,GOAL-ENABLE <>>\n\t <PUT .GT ,ATTENTION 0>\n\t <MOVE ,DUFFY ,POLICE-LAB>\n\t <ENABLE <QUEUE I-DUFFY-RETURNS 20>>\n\t <MOVE .OBJ ,POLICE-LAB>\n\t <COND (<EQUAL? .OBJ ,GLASS>\n\t\t<SET OBJ ,GLASS-ANALYSIS>\n\t\t<COND (,GLASS-ANALYZED-FOR-PRINTS?\n\t\t       <COND (<FSET? ,GLASS ,TOUCHBIT>\n\t\t\t      <PUTP ,GLASS-ANALYSIS\n\t\t\t\t    ,P?TEXT\n\t\t\t\t    ,GLASS-ANALYSIS-Q>)\n\t\t\t     (ELSE\n\t\t\t      <FSET ,GLASS-ANALYSIS ,ALICIABIT>\n\t\t\t      <PUTP ,GLASS-ANALYSIS\n\t\t\t\t    ,P?TEXT\n\t\t\t\t    ,GLASS-ANALYSIS-P>)>)>)\n\t       (<EQUAL? .OBJ ,HAIR>\n\t\t<SET OBJ ,HAIR-ANALYSIS>)\n\t       (<EQUAL? .OBJ ,MASK>\n\t\t<SET OBJ ,MASK-ANALYSIS>)\n\t       (<EQUAL? .OBJ ,STAIN>\n\t\t<SET OBJ ,STAIN-ANALYSIS>)\n\t       (ELSE\n\t\t<SET OBJ ,NULL-ANALYSIS>)>\n\t <MOVE .OBJ ,DUFFY>>"
  },
  "I-DUFFY-RETURNS": {
   "name": "I-DUFFY-RETURNS",
   "file": "people.zil",
   "line": 4142,
   "endLine": 4162,
   "source": "<ROUTINE I-DUFFY-RETURNS (\"AUX\" AOBJ GT PRIORITY FINAL)\n\t <MOVE ,DUFFY <LOC ,DETECTIVE>>\n\t <WHERE-UPDATE ,DUFFY <EQUAL? ,HERE <LOC ,DETECTIVE>>>\n\t <SET GT <GET ,GOAL-TABLES ,DUFFY-C>>\n\t <SET FINAL <GET .GT ,GOAL-F>>\n\t <COND (<SET PRIORITY <GET .GT ,GOAL-QUEUED>>\n\t\t<ESTABLISH-GOAL ,DUFFY .PRIORITY>)>\n\t <ESTABLISH-GOAL ,DUFFY .FINAL .PRIORITY>\n\t <PUT .GT ,GOAL-ENABLE T>\n\t <COND (<SET AOBJ <FIRST? ,DUFFY>>\n\t\t<COND (<IN? ,DETECTIVE ,HERE>\n\t\t       <MOVE .AOBJ ,PLAYER>\n\t\t       <TELL\n'DUFFY \" returns with the analysis. \" CTHE ,DETECTIVE \" reads it, then hands it\nto you. It reads, omitting the irrelevant details:|\n\">\n\t\t       <TELL CR <GETP .AOBJ ,P?TEXT> CR>)\n\t\t      (ELSE\n\t\t       <FSET .AOBJ ,TOLD>\n\t\t       <MOVE .AOBJ ,DETECTIVE>\n\t\t       <RFALSE>)>)>>"
  },
  "TELL-RINGS": {
   "name": "TELL-RINGS",
   "file": "people.zil",
   "line": 4238,
   "endLine": 4240,
   "source": "<ROUTINE TELL-RINGS ()\n\t <TELL CTHE ,DETECTIVE \" rings the doorbell, then stands\nand waits.\" CR>>"
  },
  "G-DETECTIVE": {
   "name": "G-DETECTIVE",
   "file": "people.zil",
   "line": 4242,
   "endLine": 4298,
   "source": "<ROUTINE G-DETECTIVE (GARG \"AUX\" (L <LOC ,DETECTIVE>) (FLG <>))\n\t <COND (<NOT .GARG> <IMOVEMENT ,DETECTIVE G-DETECTIVE>)\n\t       (<EQUAL? .GARG ,G-IMPATIENT>\n\t\t<TELL\nCTHE ,DETECTIVE \" says, \\\"If you'll excuse me, I have an investigation\nto conduct.\\\"\" CR>)\n\t       (<EQUAL? .GARG ,G-REACHED ,G-ALREADY>\n\t\t<COND (<AND <EQUAL? ,TARGET ,PLAYER>\n\t\t\t    <SET FLG\n\t\t\t\t <PLAYER-ARRESTED? ,DETECTIVE .GARG>>>\n\t\t       <RTRUE>)>\n\t\t<COND (<AND <IN? ,DETECTIVE ,HERE>\n\t\t\t    <LAB-RESULTS-TO-PLAYER .GARG>>\n\t\t       <SET GARG ,G-ALREADY>)>\n\t\t<COND (<IN? ,DETECTIVE ,PORCH>\n\t\t       <SETG NEW-ARRIVAL ,DETECTIVE>\n\t\t       <ESTABLISH-GOAL ,BUTLER ,HALL T>\n\t\t       <COND (<EQUAL? ,HERE ,PORCH>\n\t\t\t      <COND (<NOT ,PLAYER-HIDING>\n\t\t\t\t     <TELL\nCTHE ,DETECTIVE \" looks you over suspiciously. No one said that a costume\nparty was in progress. \">)>\n\t\t\t      <TELL-RINGS>)\n\t\t\t     (<EQUAL? ,HERE ,CIRCLE>\n\t\t\t      <TELL-RINGS>)\n\t\t\t     (<NOT <OUTSIDE? ,HERE>>\n\t\t\t      <TELL\nCTHE ,DOORBELL \" has just rung.\" CR>)>\n\t\t       ;<RTRUE>)\n\t\t      (<IN? ,DETECTIVE ,OFFICE>\n\t\t       <SETG DETECTIVE-BEEN-TO-OFFICE? T>)>\n\t\t<COND (<DETECTIVE-FINDS-BODY? .GARG> <SET FLG T>)\n\t\t      (<GO-AFTER-BODY? ,DETECTIVE>\n\t\t       <COND (<IN? ,DETECTIVE ,HERE>\n\t\t\t      <TELL\nCTHE ,DETECTIVE \" makes a quick examination of the vicinity.\" CR>)>)\n\t\t      (<AND <EQUAL? .GARG ,G-REACHED>\n\t\t\t    <IN? ,DETECTIVE ,HERE>>\n\t\t       <TELL\nCTHE ,DETECTIVE \" stops, looks carefully around, and then begins a detailed\nexamination of the vicinity.\" CR>)>\n\t\t<COND (<DETECTIVE-SEES-ROPE? .L>\n\t\t       <COND (<EQUAL? .L ,HERE>\n\t\t\t      <TELL\nCTHE ,DETECTIVE \" looks significantly at the rope. You catch a very suspicious\nsidelong glance at your costume. You can almost hear the click of the lock\non a jail cell.\" CR>\n\t\t\t      <SET FLG T>)>)>\n\t\t<COND (<IN? ,DETECTIVE ,BALLROOM-8>\n\t\t       <I-START-ARREST>)>\n\t\t.FLG)\n\t       (<EQUAL? .GARG ,G-ENROUTE>\n\t\t<COND (<EQUAL? ,TARGET ,PLAYER>\n\t\t       <PLAYER-ARRESTED? ,DETECTIVE .GARG>)\n\t\t      (<DETECTIVE-FINDS-BODY? .GARG> <RTRUE>)\n\t\t      (<IN? ,DETECTIVE ,HERE>\n\t\t       <LAB-RESULTS-TO-PLAYER>)>)>>"
  },
  "DETECTIVE-SEES-ROPE?": {
   "name": "DETECTIVE-SEES-ROPE?",
   "file": "people.zil",
   "line": 4300,
   "endLine": 4304,
   "source": "<ROUTINE DETECTIVE-SEES-ROPE? (L)\n\t <COND (<AND <EQUAL? <META-LOC ,ROPE> .L>\n\t\t     <NOT ,DETECTIVE-SEEN-ROPE?>>\n\t\t<SETG DETECTIVE-SEEN-ROPE? T>\n\t\t<SETG DETECTIVE-SEEN <+ ,DETECTIVE-SEEN 1>>)>>"
  },
  "DETECTIVE-FINDS-BODY?": {
   "name": "DETECTIVE-FINDS-BODY?",
   "file": "people.zil",
   "line": 4306,
   "endLine": 4364,
   "source": "<ROUTINE DETECTIVE-FINDS-BODY? (GARG \"AUX\" (L <LOC ,DETECTIVE>)\n\t\t\t\t(LC <LOC ,CORPSE>) (BULLET? <>))\n\t <COND (<AND .LC\n\t\t     <EQUAL? <META-LOC ,CORPSE> .L>\n\t\t     <NOT ,DETECTIVE-SEEN-CORPSE?>>\n\t\t<FSET ,DETECTIVE ,TOLD>\n\t\t<SETG DETECTIVE-SEEN-CORPSE? T>\n\t\t<SETG DETECTIVE-SEEN <+ ,DETECTIVE-SEEN 1>>\n\t\t<OPEN-HIDING-PLACE>\n\t\t<UNPRIORITIZE ,DETECTIVE>\n\t\t<GOALS? ,DETECTIVE <>>\n\t\t<ENABLE <QUEUE I-AMBULANCE 20>>\n\t\t<COND (<AND <IN? ,DETECTIVE ,OFFICE>\n\t\t\t    <EQUAL? <LOC ,BULLET> ,CORPSE ,OFFICE>>\n\t\t       <SET BULLET? T>\n\t\t       <FCLEAR ,BULLET ,INVISIBLE>\n\t\t       <MOVE ,BULLET ,DETECTIVE>\n\t\t       <SETG DETECTIVE-SEEN-BULLET? T>\n\t\t       <COND (<FSET? ,BULLET ,RMUNGBIT>\n\t\t\t      <SETG DETECTIVE-SEEN-BULLET-PRINTS? T>)>)>\n\t\t<COND (<AND <NOT <IN? ,DUFFY .L>>\n\t\t\t    <NOT <IN? ,DUFFY ,POLICE-LAB>>>\n\t\t       <ESTABLISH-GOAL ,DUFFY .L T>)>\n\t\t<COND (<EQUAL? .L ,HERE>\n\t\t       <TELL CTHE ,DETECTIVE \" \">\n\t\t       <COND (<EQUAL? .GARG ,G-REACHED>\n\t\t\t      <TELL \"arrives and \">)>\n\t\t       <COND (<OR <IN? ,CORPSE ,PLAYER>\n\t\t\t\t  <IN? .LC ,PLAYER>>\n\t\t\t      <SETG TARGET ,PLAYER>\n\t\t\t      <TELL\n\"stops short, seeing you carrying the body.\" CR>\n\t\t\t      <DETECTIVE-SEES-ROPE? .L>\n\t\t\t      <RETURN <PLAYER-ARRESTED? ,DETECTIVE>>)\n\t\t\t     (<NOT <IN? .LC ,ROOMS>>\n\t\t\t      <COND (<IN? ,DUFFY .L>\n\t\t\t\t     <TELL\n\"with a nod to \" 'DUFFY \", takes over.\">)\n\t\t\t\t    (T\n\t\t\t\t     <TELL-COMES-UPON .LC>\n\t\t\t\t     <COND (<NOT <EQUAL? .LC ,CHAIR>>\n\t\t\t\t\t    <TELL\n\"With an air of anticipation, \" THE ,DETECTIVE \" looks inside. \">)>\n\t\t\t\t     <TELL-BODY-THERE>)>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"immediately notices the body.\">)>\n\t\t       <COND (.BULLET?\n\t\t\t      <TELL\n\" Seeing a glint of silver, the detective stoops down and carefully\nretrieves \" A ,BULLET \".\">)>\n\t\t       <COND (<AND <NOT <EQUAL? .L ,OFFICE>>\n\t\t\t\t   <NOT <IN? ,DUFFY .L>>>\n\t\t\t      <TELL\n\" \\\"\" 'DUFFY \", come here, I want you!\\\"\">)>\n\t\t       <TELL\n\" As first priority, \" THE ,DETECTIVE \" checks out the corpse. While you\nwatch, it is efficiently examined, touched, looked at, looked under,\nfingerprinted, and so on.\" CR>)>)>>"
  },
  "OPEN-HIDING-PLACE": {
   "name": "OPEN-HIDING-PLACE",
   "file": "people.zil",
   "line": 4366,
   "endLine": 4371,
   "source": "<ROUTINE OPEN-HIDING-PLACE (\"AUX\" (L <LOC ,CORPSE>))\n\t <COND (<OR <EQUAL? .L ,HAMPER ,WINDOW-SEAT ,MERCEDES-TRUNK>\n\t\t    <EQUAL? .L ,BMW-TRUNK>>\n\t\t<FSET .L ,OPENBIT>\n\t\t<COND (<IN? ,PLAYER .L>\n\t\t       <MOVE ,PLAYER ,HERE>)>)>>"
  },
  "I-START-ARREST": {
   "name": "I-START-ARREST",
   "file": "people.zil",
   "line": 4373,
   "endLine": 4385,
   "source": "<ROUTINE I-START-ARREST ()\n\t <COND (<AND <G? ,DETECTIVE-SEEN 4>\n\t\t     <NOT ,PLAYER-SEEN-WITH-BODY?>>\n\t\t<RFALSE>)\n\t       (<AND <OR ,DETECTIVE-SEEN-CORPSE?\n\t\t\t ,DUFFY-SEEN-CORPSE?>\n\t\t     <NOT <IN? ,DUFFY ,POLICE-LAB>>>\n\t\t<SETG TARGET ,PLAYER>\n\t\t<STALK-PLAYER ,DETECTIVE>\n\t\t<STALK-PLAYER ,DUFFY>)\n\t       (ELSE\n\t\t<ENABLE <QUEUE I-START-ARREST 10>>)>\n\t <RFALSE>>"
  },
  "STALK-PLAYER": {
   "name": "STALK-PLAYER",
   "file": "people.zil",
   "line": 4387,
   "endLine": 4392,
   "source": "<ROUTINE STALK-PLAYER (WHO)\n\t <COND (<DIR-FROM ,HERE <LOC .WHO>>\n\t\t<MOVE .WHO ,HERE>\n\t\t<PLAYER-ARRESTED? .WHO ,G-REACHED>)\n\t       (ELSE\n\t\t<ESTABLISH-GOAL .WHO ,HERE>)>>"
  },
  "LAB-RESULTS-TO-PLAYER": {
   "name": "LAB-RESULTS-TO-PLAYER",
   "file": "people.zil",
   "line": 4394,
   "endLine": 4422,
   "source": "<ROUTINE LAB-RESULTS-TO-PLAYER (\"OPTIONAL\" (GARG ,G-ALREADY)\n\t\t\t\t\"AUX\" F N (FIRST T))\n\t <SET F <FIRST? ,DETECTIVE>>\n\t <REPEAT ()\n\t\t <COND (<NOT .F>\n\t\t\t<RETURN <NOT .FIRST>>)>\n\t\t <SET N <NEXT? .F>>\n\t\t <COND (<FSET? .F ,TOLD>\n\t\t\t<FCLEAR .F ,TOLD>\n\t\t\t<MOVE .F ,PLAYER>\n\t\t\t<COND (.FIRST\n\t\t\t       <SET FIRST <>>\n\t\t\t       <TELL\nCTHE ,DETECTIVE>\n\t\t\t       <COND (<EQUAL? .GARG ,G-REACHED>\n\t\t\t\t      <TELL \" comes up to you and\">)>\n\t\t\t       <TELL \" interrupts.\">)>\n\t\t\t<TELL CR\n\"\\\"\">\n\t\t\t<COND (<EQUAL? .F ,NULL-ANALYSIS>\n\t\t\t       <TELL \"analysis\">)\n\t\t\t      (T\n\t\t\t       <TELL CTHE .F>)>\n\t\t\t<TELL\n\" is back from the lab. I thought you might be interested\nin what it says.\\\" \" CTHE ,DETECTIVE \" hands it to you. It reads, omitting the\nirrelevant details:|\n\" CR <GETP .F ,P?TEXT> CR>)>\n\t\t <SET F .N>>>"
  },
  "TELL-ON-SCENE": {
   "name": "TELL-ON-SCENE",
   "file": "people.zil",
   "line": 4426,
   "endLine": 4427,
   "source": "<ROUTINE TELL-ON-SCENE (WHO)\n\t <TELL CD .WHO \" arrives on the scene\">>"
  },
  "PLAYER-ARRESTED?": {
   "name": "PLAYER-ARRESTED?",
   "file": "people.zil",
   "line": 4429,
   "endLine": 4523,
   "source": "<ROUTINE PLAYER-ARRESTED? (WHO \"OPTIONAL\" (GARG ,G-ALREADY))\n\t <COND (<AND <G? ,DETECTIVE-SEEN 4>\n\t\t     <NOT ,PLAYER-SEEN-WITH-BODY?>>\n\t\t<SETG TARGET <>>\n\t\t<RFALSE>)\n\t       (<AND <EQUAL? .WHO ,DETECTIVE>\n\t\t     <IN? ,DETECTIVE ,HERE>>\n\t\t<COND (,DUFFY-SNARFED\n\t\t       <TELL-ON-SCENE ,DETECTIVE>\n\t\t       <TELL \", surveys the situation, and says\n\\\"Good work, Sergeant!\\\" \" CTHE ,DETECTIVE \" eyes you with satisfaction.\n\\\"You're under arrest for the murder of \" 'VERONICA \" Ashcroft.\\\" The\nstandard warnings are given. \" 'DUFFY>)\n\t\t      (ELSE\n\t\t       <FSET ,PLAYER ,TOLD>\n\t\t       <TELL CTHE ,DETECTIVE>\n\t\t       <COND (<NOT <EQUAL? .GARG ,G-ALREADY>>\n\t\t\t      <TELL\n\" sees you, approaches warily, and\">)>\n\t\t       <TELL\n\" grabs you firmly by the wrist, and with a practiced twist,\nslips the cuffs on you. \\\"You're under arrest for the murder of \" 'VERONICA \"\nAshcroft.\\\" The standard warnings are given. \" 'DUFFY \" appears, as\nthough out of nowhere, and\">)>\n\t\t<TELL \" escorts you out to the waiting police car.\nAll your protests are ignored.|\n|\nIn the subsequent trial, you are \">\n\t\t<COND (<OR ,PLAYER-FOLLOWED-VERONICA?\n\t\t\t   ,PLAYER-BEEN-TO-OFFICE?>\n\t\t       <TELL\n\"convicted of second degree murder. There was damning evidence, such as\">)\n\t\t      (T\n\t\t       <TELL\n\"acquitted, in spite of\">)>\n\t\t<TELL \" the fact that\">\n\t\t<COND (<AND ,DETECTIVE-BEEN-TO-OFFICE?\n\t\t\t    <NOT ,DETECTIVE-SEEN-ROPE?>>\n\t\t       <TELL \" you attempted to hide the lariat which\">)\n\t\t      (T\n\t\t       <TELL \" your lariat\">)>\n\t\t<TELL \" was the murder weapon\">\n\t\t<COND (,DETECTIVE-SEEN-BULLET?\n\t\t       <TELL\n\" and the bullet from your gunbelt\">\n\t\t       <COND (,DETECTIVE-SEEN-BULLET-PRINTS?\n\t\t\t      <TELL\n\" (with both your \" 'GLOBAL-FINGERPRINTS \" and \" 'VERONICA \"'s on it)\">)>\n\t\t       <TELL \" was found near the\nbody\">)>\n\t\t<TELL \".\">\n\t\t<COND (,PLAYER-FOLLOWED-VERONICA?\n\t\t       <TELL\n\" Also, you were presumably the last person to see her alive, since you charged\noff after her when she spilled her drink.\">)>\n\t\t<COND (,PLAYER-SEEN-WITH-BODY?\n\t\t       <TELL\n\" Of course, you were seen moving the body around after the murder.\">)\n\t\t      (,PLAYER-MOVED-BODY?\n\t\t       <TELL\n\" Stupidly, you moved the body after the murder.\">)>\n\t\t<TELL \" Finally, several guests testified against you as\na nosy and suspicious character.\" CR>\n\t\t<TELL \"|\nHowever, \" THE ,DETECTIVE \" and \" 'DUFFY \", nagged by doubt, continue the\ninvestigation on their own time. Their brilliant detective work unravels\nthe tangled mess behind the murder. You are released, and as you leave\njail, you can't help but think that if you had been able to figure out\nwhat was going on that night, you might have won yourself a Pulitzer\nPrize by now.\" CR>\n\t\t<FINISH>)\n\t       (<AND <EQUAL? .WHO ,DUFFY> <IN? ,DUFFY ,HERE>>\n\t\t<COND (<NOT ,DUFFY-SNARFED>\n\t\t       <FSET ,PLAYER ,TOLD>\n\t\t       <SETG DUFFY-SNARFED T>\n\t\t       <PUT <GET ,GOAL-TABLES ,PLAYER-C> ,GOAL-S <>>\n\t\t       <PUT <GET ,GOAL-TABLES ,DUFFY-C> ,GOAL-ENABLE <>>\n\t\t       <ESTABLISH-GOAL ,DETECTIVE ,HERE>\n\t\t       <TELL 'DUFFY>\n\t\t       <COND (,PLAYER-HIDING\n\t\t\t      <TELL \" immediately penetrates the\nconcealment of \" THE ,PLAYER-HIDING \". He\">\n\t\t\t      <SETG PLAYER-HIDING <>>)>\n\t\t       <COND (<NOT <EQUAL? <LOC ,PLAYER> ,HERE>>\n\t\t\t      <MOVE ,PLAYER ,HERE>)>\n\t\t       <TELL\n\" grabs you with a grip of iron. \\\"\" CTHE ,DETECTIVE \" would like\na word with you,\\\" he says.\" CR>)\n\t\t      (<OR <NOT <VERB? TELL>> ,PRSI>\n\t\t       <TELL\n'DUFFY \" maintains his iron grip as you wait apprehensively for\nthe arrival of \" THE ,DETECTIVE \".\" CR>)>)\n\t       (ELSE\n\t\t<I-START-ARREST>\n\t\t<RFALSE>)>>"
  },
  "DUFFY-DESC-F": {
   "name": "DUFFY-DESC-F",
   "file": "people.zil",
   "line": 4551,
   "endLine": 4563,
   "source": "<ROUTINE DUFFY-DESC-F (\"OPTIONAL\" (RARG <>))\n\t <TELL 'DUFFY>\n\t <COND (,DUFFY-SNARFED\n\t\t<TELL\n\" is here, his iron grip immobilizing you.\" CR>)\n\t       (<AND <IN? ,DUFFY ,OFFICE> ,LAST-FROB>\n\t\t<TELL\n\" is carefully checking over \" THE ,LAST-FROB\n\t\t      \", making sure his boss has missed nothing.\" CR>)\n\t       (ELSE\n\t\t<TELL\n\" waits nearby, ready to spring into action to serve his superior\nofficer.\" CR>)>>"
  },
  "DUFFY-F": {
   "name": "DUFFY-F",
   "file": "people.zil",
   "line": 4565,
   "endLine": 4607,
   "source": "<ROUTINE DUFFY-F ()\n\t <COND (<EQUAL? ,WINNER ,DUFFY>\n\t\t<COND (<AND <VERB? GIVE>\n\t\t\t    <EQUAL? ,PRSO ,DUFFY-COAT>\n\t\t\t    <EQUAL? ,PRSI ,BUTLER>>\n\t\t       <COND (<IN? ,BUTLER ,HERE>\n\t\t\t      <TELL\n'DUFFY \", following the example of his boss, refuses to give up his\nraincoat.\" CR>)>\n\t\t       <RTRUE>)\n\t\t      (<VERB? ANALYZE>\n\t\t       <TELL\n\"\\\"I perform analyses for \" THE ,DETECTIVE \". If you want\nsomething analyzed, that's how to do it.\\\"\" CR>)\n\t\t      (<DONT-HANDLE?> <RFALSE>)\n\t\t      (ELSE\n\t\t       <TELL\n'DUFFY \" stands silently, intent upon his business, and ignores your\nrequest. You realize that his devotion to duty is so strong that he\nwould be hard to distract.\" CR>)>)\n\t       (<VERB? PHONE>\n\t\t<PERFORM ,V?PHONE ,POLICE>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n'DUFFY \" is of medium height, very non-descript, very attentive to\nhis boss, \" THE ,DETECTIVE \". He is in uniform.\" CR>)\n\t       (<AND <VERB? ASK-ABOUT> <EQUAL? ,PRSO ,DUFFY>>\n\t\t<TELL\n\"\\\"You'd have to ask \" THE ,DETECTIVE \". His opinions are mine.\\\"\" CR>)\n\t       (<VERB? SHOW>\n\t\t<COND (<AND <EQUAL? ,PRSO ,CORPSE>\n\t\t\t    <EQUAL? ,PRSI ,DUFFY>>\n\t\t       <TELL\n'DUFFY \" approaches.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"\\\"Perhaps that would interest the detective.\\\"\" CR>)>)\n\t       (<CAUGHT-WITH-BODY?>\n\t\t<SETG DUFFY-SEEN-CORPSE? T>\n\t\t<I-START-ARREST>\n\t\t<TELL\n'DUFFY \" sees you carrying the body.\" CR>)>>"
  },
  "CAUGHT-WITH-BODY?": {
   "name": "CAUGHT-WITH-BODY?",
   "file": "people.zil",
   "line": 4609,
   "endLine": 4612,
   "source": "<ROUTINE CAUGHT-WITH-BODY? ()\n\t <AND <VERB? $DISCOVER>\n\t      <EQUAL? ,PRSO ,CORPSE>\n\t      <IN? ,CORPSE ,PLAYER>>>"
  },
  "G-DUFFY": {
   "name": "G-DUFFY",
   "file": "people.zil",
   "line": 4623,
   "endLine": 4638,
   "source": "<ROUTINE G-DUFFY (GARG \"AUX\" (FLG <>))\n\t <COND (<NOT .GARG> <IMOVEMENT ,DUFFY G-DUFFY>)\n\t       (<AND <EQUAL? .GARG ,G-IMPATIENT>\n\t\t     <NOT ,DUFFY-SNARFED>>\n\t\t<TELL\n'DUFFY \" says, \\\"I have work to do. Goodbye.\\\"\" CR>)\n\t       (<EQUAL? .GARG ,G-REACHED ,G-ALREADY>\n\t\t<COND (<AND <EQUAL? .GARG ,G-REACHED>\n\t\t\t    <IN? ,DUFFY ,HERE>>\n\t\t       <TELL-ON-SCENE ,DUFFY>\n\t\t       <TELL \".\" CR>\n\t\t       <SET FLG T>)>\n\t\t<COND (<DUFFY-FINDS-BODY? .GARG> <RTRUE>)\n\t\t      (ELSE .FLG)>)\n\t       (<EQUAL? .GARG ,G-ENROUTE>\n\t\t<DUFFY-FINDS-BODY? .GARG>)>>"
  },
  "TELL-COMES-UPON": {
   "name": "TELL-COMES-UPON",
   "file": "people.zil",
   "line": 4640,
   "endLine": 4642,
   "source": "<ROUTINE TELL-COMES-UPON (LC)\n\t <TELL\n\"begins to search the room, and comes upon \" THE .LC \". \">>"
  },
  "TELL-BODY-THERE": {
   "name": "TELL-BODY-THERE",
   "file": "people.zil",
   "line": 4644,
   "endLine": 4646,
   "source": "<ROUTINE TELL-BODY-THERE ()\n\t <TELL\n'VERONICA \"'s body is there.\">>"
  },
  "DUFFY-FINDS-BODY?": {
   "name": "DUFFY-FINDS-BODY?",
   "file": "people.zil",
   "line": 4648,
   "endLine": 4707,
   "source": "<ROUTINE DUFFY-FINDS-BODY? (GARG \"AUX\" (L <LOC ,DUFFY>) (LC <LOC ,CORPSE>))\n\t <COND (<EQUAL? ,TARGET ,PLAYER>\n\t\t<PLAYER-ARRESTED? ,DUFFY .GARG>)\n\t       (<AND .LC\n\t\t     <EQUAL? <META-LOC ,CORPSE> .L>\n\t\t     <NOT ,DUFFY-SEEN-CORPSE?>>\n\t\t<FSET ,DUFFY ,TOLD>\n\t\t<OPEN-HIDING-PLACE>\n\t\t<SETG DUFFY-SEEN-CORPSE? T>\n\t\t<UNPRIORITIZE ,DUFFY>\n\t\t<GOALS? ,DUFFY <>>\n\t\t<COND (<NOT <IN? ,DETECTIVE .L>>\n\t\t       <ESTABLISH-GOAL ,DETECTIVE .L T>)>\n\t\t<COND (<EQUAL? .L ,HERE>\n\t\t       <COND (<OR <IN? ,CORPSE ,PLAYER>\n\t\t\t\t  <IN? .LC ,PLAYER>>\n\t\t\t      <I-START-ARREST>\n\t\t\t      <TELL\n'DUFFY \"'s eyes widen as he sees you brazenly carrying the corpse.\" CR>\n\t\t\t      <PLAYER-ARRESTED? ,DUFFY>\n\t\t\t      <RTRUE>)\n\t\t\t     (<NOT <IN? .LC ,ROOMS>>\n\t\t\t      <COND (<IN? ,DETECTIVE .L>\n\t\t\t\t     <TELL\n\"He begins to lend his assistance.\" CR>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL 'DUFFY \" \">\n\t\t\t\t     <TELL-COMES-UPON .LC>\n\t\t\t\t     <COND (<NOT <EQUAL? .LC ,CHAIR>>\n\t\t\t\t\t    <TELL\n\"He looks at it suspiciously for a moment, then looks inside. \">)>\n\t\t\t\t     <TELL \"His eyes widen. \">\n\t\t\t\t     <TELL-BODY-THERE>\n\t\t\t\t     <CRLF>)>)\n\t\t\t     (ELSE\n\t\t\t      <COND (<EQUAL? .GARG ,G-REACHED>\n\t\t\t\t     <TELL \"He immediately\">)\n\t\t\t\t    (<TELL 'DUFFY \" suddenly\">)>\n\t\t\t      <TELL\n\" notices the body.\" CR>)>\n\t\t       <COND (<AND <NOT <EQUAL? .L ,OFFICE>>\n\t\t\t\t   <NOT <IN? ,DETECTIVE .L>>>\n\t\t\t      <TELL\n\"He blows a small police whistle several times. \\\"\" 'VERONICA \"'s\nbody is here!\\\" he yells.\" CR>)>\n\t\t       <TELL 'DUFFY>\n\t\t       <COND (<NOT ,DETECTIVE-SEEN-CORPSE?>\n\t\t\t      <TELL\n\" makes a preliminary examination of the corpse while\nhe waits for \" THE ,DETECTIVE \".\" CR>)\n\t\t\t     (<IN? ,DETECTIVE .L>\n\t\t\t      <TELL\n\" examines the body, making a few comments to \" THE ,DETECTIVE \",\nwho makes a few notes.\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\" makes a few observations which he records in his notebook.\" CR>)>)>)\n\t       (.LC\n\t\t<GO-AFTER-BODY? ,DUFFY>\n\t\t<RFALSE>)>>"
  },
  "GO-AFTER-BODY?": {
   "name": "GO-AFTER-BODY?",
   "file": "people.zil",
   "line": 4709,
   "endLine": 4720,
   "source": "<ROUTINE GO-AFTER-BODY? (WHO)\n\t <COND (<OR <NOT ,DETECTIVE-BEEN-TO-OFFICE?>\n\t\t    ,DETECTIVE-SEEN-CORPSE?\n\t\t    ,DUFFY-SEEN-CORPSE?\n\t\t    <LISTENING? .WHO>>\n\t\t<RFALSE>)\n\t       (<OR <FSET? ,CORPSE ,RMUNGBIT>\n\t\t    ,PLAYER-SEEN-WITH-BODY?\n\t\t    <PROB 25>>\n\t\t<FSET ,CORPSE ,RMUNGBIT>\n\t\t<ESTABLISH-GOAL .WHO <META-LOC ,CORPSE> T>\n\t\t<RTRUE>)>>"
  },
  "I-POLICE-ARRIVE": {
   "name": "I-POLICE-ARRIVE",
   "file": "people.zil",
   "line": 4722,
   "endLine": 4737,
   "source": "<ROUTINE I-POLICE-ARRIVE ()\n\t <MOVE ,DETECTIVE ,CIRCLE>\n\t <MOVE ,DUFFY ,CIRCLE>\n\t <MOVE ,POLICE-CAR ,CIRCLE>\n\t <ESTABLISH-GOAL ,DETECTIVE ,PORCH>\n\t <ESTABLISH-GOAL ,DUFFY ,PORCH>\n\t <COND (<EQUAL? ,HERE ,PORCH ,CIRCLE>\n\t\t<TELL\n\"Up the driveway speeds an unmarked police car with a detachable bubble\nlight blinking on its roof. It parks right in front of you\nin the circle. The driver and a passenger emerge. The driver is wearing\na rain slicker under which you can see a uniform. The passenger is in\nplain clothes, wearing a trenchcoat.\" CR>)\n\t       (ELSE\n\t\t<TELL\n\"You hear the sound of a police siren approaching. It stops.\" CR>)>>"
  },
  "I-AMBULANCE": {
   "name": "I-AMBULANCE",
   "file": "people.zil",
   "line": 4739,
   "endLine": 4753,
   "source": "<ROUTINE I-AMBULANCE (\"AUX\" (L <META-LOC ,CORPSE>))\n\t <COND (<NOT ,DETECTIVE-BEEN-TO-OFFICE?>\n\t\t<NEW-SCRIPT ,DETECTIVE ,DETECTIVE-SCRIPT>\n\t\t<NEW-SCRIPT ,DUFFY ,DUFFY-SCRIPT>)\n\t       (T\n\t\t<GOALS? ,DETECTIVE T>\n\t\t<COND (<NOT <IN? ,DUFFY ,POLICE-LAB>>\n\t\t       <GOALS? ,DUFFY T>)>)>\n\t <FCLEAR ,ROPE ,NDESCBIT>\n\t <REMOVE ,CORPSE>\n\t <COND (<OR <EQUAL? ,HERE .L>\n\t\t    <EQUAL? ,HERE ,CIRCLE ,PORCH ,HALL>>\n\t\t<TELL\n\"The ambulance has finally arrived, and the attendants remove the body on a\nstretcher.\" CR>)>>"
  },
  "POLICE-CAR-F": {
   "name": "POLICE-CAR-F",
   "file": "people.zil",
   "line": 4762,
   "endLine": 4765,
   "source": "<ROUTINE POLICE-CAR-F ()\n\t <COND (<VERB? LOOK-INSIDE>\n\t\t<TELL\n\"You see the usual equipment that TV has led you to expect.\" CR>)>>"
  },
  "MASK-F": {
   "name": "MASK-F",
   "file": "people.zil",
   "line": 4775,
   "endLine": 4788,
   "source": "<ROUTINE MASK-F ()\n\t <COND (<VERB? TAKE-OFF>\n\t\t<COND (<FSET? ,PRSO ,WEARBIT>\n\t\t       <FCLEAR ,PRSO ,WEARBIT>\n\t\t       <TELL\n\"You remove your mask, revealing your smiling face and twinkling eyes.\" CR>)\n\t\t      (T\n\t\t       <TELL ,ITS-ALREADY \"off.\" CR>)>)\n\t       (<VERB? WEAR>\n\t\t<COND (<FSET? ,PRSO ,WEARBIT>\n\t\t       <TELL ,ITS-ALREADY \"on.\" CR>)\n\t\t      (T\n\t\t       <FSET ,PRSO ,WEARBIT>\n\t\t       <TELL \"Okay.\" CR>)>)>>"
  },
  "COSTUME-F": {
   "name": "COSTUME-F",
   "file": "people.zil",
   "line": 4871,
   "endLine": 4877,
   "source": "<ROUTINE COSTUME-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<PERFORM ,V?EXAMINE <LOC ,PRSO>>\n\t\t<RTRUE>)\n\t       (<VERB? TAKE LOOK-BEHIND LOOK-UNDER LOOK-INSIDE>\n\t\t<PERFORM ,V?UNMASK <LOC ,PRSO>>\n\t\t<RTRUE>)>>"
  },
  "GENERIC-STUFF-F": {
   "name": "GENERIC-STUFF-F",
   "file": "people.zil",
   "line": 4881,
   "endLine": 4890,
   "source": "<ROUTINE GENERIC-STUFF-F (NAM)\n\t <COND (<AND <EQUAL? .NAM ,W?COSTUME>\n\t\t     <EQUAL? <META-LOC ,FAIRY-COSTUME> ,HERE>>\n\t\t,FAIRY-COSTUME)\n\t       (<AND <EQUAL? .NAM ,W?MASK>\n\t\t     <EQUAL? <META-LOC ,FAIRY-MASK> ,HERE>>\n\t\t,FAIRY-MASK)\n\t       (T\n\t\t<TELL-SPECIFIC>\n\t\t,NOT-HERE-OBJECT)>>"
  },
  "OAKS-PSEUDO": {
   "name": "OAKS-PSEUDO",
   "file": "places.zil",
   "line": 39,
   "endLine": 42,
   "source": "<ROUTINE OAKS-PSEUDO ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The oaks are ancient, stately, and wet.\" CR>)>>"
  },
  "PUMPKIN-F": {
   "name": "PUMPKIN-F",
   "file": "places.zil",
   "line": 52,
   "endLine": 62,
   "source": "<ROUTINE PUMPKIN-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\n\"There are hundreds of them. Grotesque demon faces conceal themselves in\nthe pile, and leering skulls stare this way and that. Some of the\ncandles have gone out from the rain, and those pumpkins sit forlorn and\nwet, huddling together for warmth.\" CR>)\n\t       (<VERB? TAKE>\n\t\t<TELL \n\"Taking a pumpkin from the pile could bring them all crashing down.\" CR>)>>"
  },
  "FRONT-DOOR-F": {
   "name": "FRONT-DOOR-F",
   "file": "places.zil",
   "line": 96,
   "endLine": 108,
   "source": "<ROUTINE FRONT-DOOR-F ()\n\t <COND (<VERB? OPEN REPLY>\n\t\t<COND (<AND <IN? ,NEW-ARRIVAL ,PORCH>\n\t\t\t    <EQUAL? ,HERE ,HALL>>\n\t\t       <FSET ,FRONT-DOOR ,OPENBIT>\n\t\t       <FCLEAR ,FRONT-DOOR ,LOCKED>\n\t\t       <NEW-ARRIVAL-STUFF ,PLAYER>\n\t\t       <RTRUE>)\n\t\t      (<AND <EQUAL? ,HERE ,PORCH>\n\t\t\t    <FSET? ,FRONT-DOOR ,LOCKED>>\n\t\t       <TELL\nCTHE ,FRONT-DOOR \" is locked. Perhaps if you rang \" THE ,GLOBAL-DOORBELL\n\" someone would answer it.\" CR>)>)>>"
  },
  "TELL-ABOUT-DUFFY": {
   "name": "TELL-ABOUT-DUFFY",
   "file": "places.zil",
   "line": 117,
   "endLine": 123,
   "source": "<ROUTINE TELL-ABOUT-DUFFY ()\n\t <TELL\n\" A uniformed policeman accompanies \" THE ,DETECTIVE \". \\\"This is \" 'DUFFY \",\nmy assistant. You may say anything to him that you would say to me. \"\n,AMBULANCE-COMING \",\\\" adds \" THE ,DETECTIVE \".\" CR>\n\t <G-DETECTIVE ,G-REACHED>\n\t <G-DUFFY ,G-REACHED>>"
  },
  "GLOBAL-DOORBELL-F": {
   "name": "GLOBAL-DOORBELL-F",
   "file": "places.zil",
   "line": 127,
   "endLine": 143,
   "source": "<ROUTINE GLOBAL-DOORBELL-F ()\n\t <COND (<VERB? REPLY>\n\t\t<COND (<NOT ,NEW-ARRIVAL>\n\t\t       <TELL\n\"I didn't realize anyone had rung the doorbell recently.\" CR>)\n\t\t      (<EQUAL? ,HERE ,HALL>\n\t\t       <TELL\n\"That's the butler's job. But if you insist...\" CR>\n\t\t       <COND (<IN? ,NEW-ARRIVAL ,PORCH>\n\t\t\t      <NEW-ARRIVAL-STUFF ,PLAYER>\n\t\t\t      <RTRUE>)\n\t\t\t     (ELSE\n\t\t\t      <THERE-DOESNT-SEEM>\n\t\t\t      <TELL \"anyone there.\" CR>)>)\n\t\t      (ELSE\n\t\t       <TELL\n,YOU-ARENT \"at the front door.\" CR>)>)>>"
  },
  "NEW-ARRIVAL-STUFF": {
   "name": "NEW-ARRIVAL-STUFF",
   "file": "places.zil",
   "line": 145,
   "endLine": 206,
   "source": "<ROUTINE NEW-ARRIVAL-STUFF (WHO \"AUX\" L (FLG <>) (DET? <>) (ALI? <>) (PLA? <>))\n\t <COND (,NEW-ARRIVAL\n\t\t<FCLEAR ,FRONT-DOOR ,LOCKED>\n\t\t<COND (<AND <EQUAL? ,HERE ,PORCH>\n\t\t\t    <NOT ,PLAYER-HIDING>>\n\t\t       <SET PLA? T>\n\t\t       <SETG NEW-ARRIVAL ,PLAYER>\n\t\t       <MOVE-PLAYER ,HALL>\n\t\t       <USL>)>\n\t\t<COND (<IN? ,ALICIA ,PORCH>\n\t\t       <SET ALI? T>\n\t\t       <SETG NEW-ARRIVAL ,ALICIA>\n\t\t       <MOVE ,ALICIA ,HALL>\n\t\t       <ESTABLISH-GOAL ,ALICIA ,BALLROOM-5>)>\n\t\t<COND (<IN? ,DETECTIVE ,PORCH>\n\t\t       <SET DET? T>\n\t\t       <SETG NEW-ARRIVAL ,DETECTIVE>\n\t\t       <MOVE ,DETECTIVE ,HALL>\n\t\t       <MOVE ,DUFFY ,HALL>\n\t\t       <NEW-SCRIPT ,DETECTIVE ,DETECTIVE-SCRIPT>\n\t\t       <NEW-SCRIPT ,DUFFY ,DUFFY-SCRIPT>)>\n\t\t<COND (<EQUAL? .WHO ,PLAYER>\n\t\t       <SET FLG T>\n\t\t       <COND (.DET?\n\t\t\t      <TELL\nCTHE ,DETECTIVE \" enters the house, looking about cautiously. A few curt\nwords of greeting are uttered.\">\n\t\t\t      <TELL-ABOUT-DUFFY>)>\n\t\t       <COND (.ALI?\n\t\t\t      <ALICIA-DESC-F>\n\t\t\t      <TELL\n'ALICIA \" enters the house, thanking you for answering the\ndoorbell.\" CR>\n\t\t\t      <WHERE-UPDATE ,ALICIA T>)>)\n\t\t      (T ;\"BUTLER\"\n\t\t       <SET L <LOC ,BUTLER>>\n\t\t       <COND (<AND <EQUAL? .L ,HALL ,PORCH>\n\t\t\t\t   <EQUAL? ,HERE ,HALL ,PORCH>>\n\t\t\t      <SET FLG T>\n\t\t\t      <TELL 'BUTLER \" opens the front door.\">\n\t\t\t      <COND (.PLA?\n\t\t\t\t     <TELL\n\" He ushers you into the hall. It is clear\nfrom his demeanor that he remembers letting you in earlier in the evening,\nbut he suppresses his perplexity reasonably well.\">)>\n\t\t\t      <COND (<OR .ALI? .DET?>\n\t\t\t\t     <TELL\n\" He greets \">\n\t\t\t\t     <COND (<AND .ALI? .DET?>\n\t\t\t\t\t    <TELL \"everyone\">)\n\t\t\t\t\t   (ELSE\n\t\t\t\t\t    <TELL D ,NEW-ARRIVAL>)>\n\t\t\t\t     <TELL \", his gorilla\ncostume eliciting a glance of suppressed amusement, and ushers the new\narrival into the front hall.\">)>\n\t\t\t      <COND (.DET?\n\t\t\t\t     <TELL-ABOUT-DUFFY>)\n\t\t\t\t    (ELSE <CRLF>)>\n\t\t\t      <COND (.ALI?\n\t\t\t\t     <WHERE-UPDATE ,ALICIA T>)>)>)>\n\t\t<SETG NEW-ARRIVAL <>>\n\t\t.FLG)>>"
  },
  "DOORBELL-F": {
   "name": "DOORBELL-F",
   "file": "places.zil",
   "line": 216,
   "endLine": 220,
   "source": "<ROUTINE DOORBELL-F ()\n\t <COND (<VERB? PUSH RING>\n\t\t<SETG NEW-ARRIVAL ,PLAYER>\n\t\t<ESTABLISH-GOAL ,BUTLER ,HALL T>\n\t\t<TELL \"The doorbell rings.\" CR>)>>"
  },
  "VELVET-RIBBON-F": {
   "name": "VELVET-RIBBON-F",
   "file": "places.zil",
   "line": 253,
   "endLine": 255,
   "source": "<ROUTINE VELVET-RIBBON-F ()\n\t <COND (<VERB? THROUGH CUT>\n\t\t<TELL \"That would be bad manners.\" CR>)>>"
  },
  "WINDOW-SEAT-DESC-F": {
   "name": "WINDOW-SEAT-DESC-F",
   "file": "places.zil",
   "line": 311,
   "endLine": 317,
   "source": "<ROUTINE WINDOW-SEAT-DESC-F (\"OPTIONAL\" (RARG <>))\n\t <TELL ,THERE-IS>\n\t <COND (<FSET? ,WINDOW-SEAT ,OPENBIT>\n\t\t<TELL \"an open \">)\n\t       (ELSE\n\t\t<TELL \"a closed \">)>\n\t <TELL 'WINDOW-SEAT \" beneath one of the windows.\" CR>>"
  },
  "WINDOW-SEAT-F": {
   "name": "WINDOW-SEAT-F",
   "file": "places.zil",
   "line": 319,
   "endLine": 374,
   "source": "<ROUTINE WINDOW-SEAT-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<AND <VERB? STAND DISEMBARK>\n\t\t\t    <IN? ,WINNER ,WINDOW-SEAT>\n\t\t\t    ,PLAYER-HIDING>\n\t\t       <FSET ,WINDOW-SEAT ,OPENBIT>\n\t\t       <RFALSE>)\n\t\t      (<AND <VERB? LOOK EXAMINE> ,PLAYER-HIDING>\n\t\t       <TELL-CANT-SEE \"because you're hiding!\">\n\t\t       <CRLF>)\n\t\t      (<AND <VERB? LOOK-INSIDE> ,PLAYER-HIDING>\n\t\t       <TELL \"There isn't much to see.\" CR>)>)\n\t       (.RARG <RFALSE>)\n\t       (<VERB? OPEN>\n\t\t<COND (<AND <IN? ,WINNER ,WINDOW-SEAT>\n\t\t\t    <FSET? ,WINDOW-SEAT ,SURFACEBIT>>\n\t\t       <TELL-GET-UP>)\n\t\t      (T\n\t\t       <FCLEAR ,PRSO ,SURFACEBIT>\n\t\t       <COND (,PLAYER-HIDING <PLAYER-EMERGES>)>\n\t\t       <RFALSE>)>)\n\t       (<AND <VERB? CLOSE> <FSET? ,PRSO ,OPENBIT>>\n\t\t<FSET ,PRSO ,SURFACEBIT>\n\t\t<FCLEAR ,PRSO ,OPENBIT>\n\t\t<TELL \"Closed.\" CR>)\n\t       (<AND <VERB? SIT> <FSET? ,PRSO ,OPENBIT>>\n\t\t<TELL-YOU-CANT\n\"sit on an open \" <>>\n\t\t<TELL D ,PRSO \".\" CR>)\n\t       (<VERB? THROUGH HIDE-INSIDE>\n\t\t<COND (<NOT <FSET? ,PRSO ,OPENBIT>>\n\t\t       <TELL-YOU-CANT\n\"get in a closed \" <>> <TELL D ,PRSO \".\" CR>)\n\t\t      (<IN? ,CORPSE ,WINDOW-SEAT>\n\t\t       <TELL\n\"That would be too crowded for comfort.\" CR>)\n\t\t      (<NOT ,PLAYER-HIDING>\n\t\t       <FCLEAR ,WINDOW-SEAT ,OPENBIT>\n\t\t       <MOVE ,PLAYER ,WINDOW-SEAT>\n\t\t       <SETG PLAYER-HIDING ,WINDOW-SEAT>\n\t\t       <TELL\n,YOU-ARE \"now hiding in the \" 'WINDOW-SEAT \".\" CR>)>)\n\t       (<AND <VERB? PUT>\n\t\t     ,PRSI\n\t\t     <NOT <FSET? ,PRSI ,OPENBIT>>>\n\t\t<TELL ,YOU-MUST \"open the \" 'WINDOW-SEAT \" first.\" CR>)\n\t       (<AND <VERB? PUT> <EQUAL? ,PRSO ,CORPSE>>\n\t\t<TELL\n\"Your name wouldn't be Brewster, by any chance?\" CR>\n\t\t<RFALSE>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"A \" 'WINDOW-SEAT \" is a bench underneath a window that often has storage\nspace inside it. This one overlooks the front of the house and down the hill.\nIn \\\"Arsenic and Old Lace,\\\" there were several bodies hidden in \"\nA ,WINDOW-SEAT \".\" CR>)>>"
  },
  "HAMPER-F": {
   "name": "HAMPER-F",
   "file": "places.zil",
   "line": 537,
   "endLine": 541,
   "source": "<ROUTINE HAMPER-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSO ,HAMPER>\n\t\t     <EQUAL? ,PRSI ,WINDOW-SEAT ,BMW-TRUNK ,MERCEDES-TRUNK>>\n\t\t<TELL \"It's too big.\" CR>)>>"
  },
  "HAMPER-DESC-F": {
   "name": "HAMPER-DESC-F",
   "file": "places.zil",
   "line": 543,
   "endLine": 553,
   "source": "<ROUTINE HAMPER-DESC-F (\"OPTIONAL\" (RARG <>))\n\t <TELL ,THERE-IS \"a large wicker hamper \">\n\t <COND (<IN? ,HAMPER ,WEST-COAT-CLOSET>\n\t\t<TELL\n\"at one end of the closet.\">)\n\t       (ELSE\n\t\t<TELL\n\"here.\">)>\n\t <COND (<FSET? ,HAMPER ,OPENBIT>\n\t\t<TELL \" The hamper is open.\">)>\n\t <CRLF>>"
  },
  "COATS-PSEUDO": {
   "name": "COATS-PSEUDO",
   "file": "places.zil",
   "line": 665,
   "endLine": 671,
   "source": "<ROUTINE COATS-PSEUDO ()\n\t <COND (<VERB? SEARCH EXAMINE>\n\t\t<TELL\n\"There are too many. \">\n\t\t<TELL-SPECIFIC>)\n\t       (<VERB? TAKE>\n\t\t<TELL \"That would be stealing!\" CR>)>>"
  },
  "I-UNTANGLE": {
   "name": "I-UNTANGLE",
   "file": "places.zil",
   "line": 676,
   "endLine": 687,
   "source": "<ROUTINE I-UNTANGLE ()\n\t <SETG ENTANGLED? <>>\n\t <MOVE ,GUEST ,GLOBAL-OBJECTS>\n\t <PUT <GET ,GOAL-TABLES ,BUTLER-C> ,ATTENTION 0>\n\t <ESTABLISH-GOAL ,BUTLER ,BALLROOM-8 T>\n\t <TELL\n'BUTLER \" regains his composure, and helps you to your feet, apologizing\nprofusely. \\\"I've gotten your costume all dirty.\nPermit me to straighten it.\\\" He removes a small brush from his suit,\nstraightens your vest, and brushes the dirt off. While \" 'BUTLER \" is\nministering to your costume, the other guest speedily and thankfully\ndeparts the area.\" CR>>"
  },
  "HALLWAY-12-F": {
   "name": "HALLWAY-12-F",
   "file": "places.zil",
   "line": 691,
   "endLine": 725,
   "source": "<ROUTINE HALLWAY-12-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<AND <==? .RARG ,M-END>\n\t\t     <NOT ,SLAPSTICK?>\n\t\t     <IN? ,BUTLER ,HALLWAY-12>\n\t\t     <IN-MOTION? ,VERONICA>>\n\t\t<SETG PLAYER-FOLLOWED-VERONICA? T>\n\t\t<SETG SLAPSTICK? T>\n\t\t<SETG ENTANGLED? 1>\n\t\t<MOVE ,GUEST ,HALLWAY-12>\n\t\t<ESTABLISH-GOAL ,BUTLER ,BALLROOM-8>\n\t\t<GRAB-ATTENTION ,BUTLER>\n\t\t<ENABLE <QUEUE I-UNTANGLE 4>>\n\t\t<TELL\n\n\"You reach the vicinity of the coat closet, but you must weave your way\naround the butler and a guest. \" 'BUTLER \" is taking the guest's coat to hang\nit up, and the two of them are blocking the hall. The guest \">\n<COND (<OR <IN? ,VERONICA ,HERE>\n\t   <CORRIDOR-LOOK ,VERONICA>>\n       <TELL \"turns to stare at \" 'VERONICA \" as she rushes \"\n\t     <COND (<IN? ,VERONICA ,BALLROOM-7> \"up\")\n\t\t   (<IN? ,VERONICA ,HERE> \"by\")\n\t\t   (T \"off\")>\n\t     \", and \">)>\n<TELL\n\"bumps you. Now \" 'BUTLER \", whose\nvision is not improved by the gorilla suit he is wearing, becomes\nentangled in the guest's overcoat. Unfortunately, it's still attached to\nthe guest and the two of them nearly fall to the floor. You are\nentangled in the confusion.\" CR>)\n\t       (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<AND <VERB? FOLLOW WALK STAND> ,ENTANGLED?>\n\t\t       <TELL <GET ,ENTANGLED-YUKS ,ENTANGLED?> CR>\n\t\t       <SETG ENTANGLED? <+ ,ENTANGLED? 1>>\n\t\t       <RTRUE>)>)>>"
  },
  "GUEST-F": {
   "name": "GUEST-F",
   "file": "places.zil",
   "line": 744,
   "endLine": 762,
   "source": "<ROUTINE GUEST-F ()\n\t <COND (<OR <EQUAL? ,GUEST ,WINNER>\n\t\t    <VERB? TELL>\n\t\t    <TALKING-TO? ,GUEST>>\n\t\t<COND (<VERB? TELL>\n\t\t       <SETG P-CONT <>>\n\t\t       <SETG QUOTE-FLAG <>>)>\n\t\t<TELL\n\"The guest is too busy dealing with his coat, the butler, and you to\nanswer coherently or civilly.\" CR>)\n\t       (<AND <VERB? EXAMINE> <IN? ,GUEST ,HERE>>\n\t\t<TELL\n\"The guest is rumpled and crumpled from the recent melee. He appears to\nbe wearing the remains of a devil costume. Fortunately, he has no\npitchfork.\" CR>)\n\t       (<AND <NOT <IN? ,GUEST ,HERE>>\n\t\t     <EQUAL? ,PLAYER ,WINNER>>\n\t\t<PERFORM ,V?FIND ,GUEST>\n\t\t<RTRUE>)>>"
  },
  "TELEVISION-F": {
   "name": "TELEVISION-F",
   "file": "places.zil",
   "line": 900,
   "endLine": 910,
   "source": "<ROUTINE TELEVISION-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<COND (<FSET? ,PRSO ,ONBIT>\n\t\t       <TELL\n\"The TV is on, tuned to the Cable News Network.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The TV is off.\" CR>)>)\n\t       (<VERB? LAMP-ON>\n\t\t<TELL \"It's already on.\" CR>)\n\t       (<VERB? LAMP-OFF>\n\t\t<TELL \"Don't you like to watch?\" CR>)>>"
  },
  "VCR-F": {
   "name": "VCR-F",
   "file": "places.zil",
   "line": 920,
   "endLine": 925,
   "source": "<ROUTINE VCR-F ()\n\t <COND (<VERB? EXAMINE LAMP-ON LAMP-OFF>\n\t\t<TELL\n\"This is a kind you've never seen before, and you\ncan't fathom its controls. It's made by the Frobozz Magic\nVCR Company.\" CR>)>>"
  },
  "BOOKCASE-F": {
   "name": "BOOKCASE-F",
   "file": "places.zil",
   "line": 935,
   "endLine": 941,
   "source": "<ROUTINE BOOKCASE-F ()\n\t <COND (<VERB? LOOK-INSIDE EXAMINE>\n\t\t<TELL\n\"The bookcase contains \">\n\t\t<COND (<PRINT-CONTENTS ,BOOKCASE <> ,VIDEOTAPE>\n\t\t       <TELL \" and \">)>\n\t\t<TELL \"many videotapes.\" CR>)>>"
  },
  "OFFICE-F": {
   "name": "OFFICE-F",
   "file": "places.zil",
   "line": 994,
   "endLine": 1032,
   "source": "<ROUTINE OFFICE-F (\"OPTIONAL\" (RARG <>))\n\t<COND (<==? .RARG ,M-LOOK>\n\t       <SETG PLAYER-BEEN-TO-OFFICE? T>\n\t       <TELL\n\"This is the farm's office. There are filing cabinets, a large and a\nsmall desk, a personal computer, a telephone, a copier, and other expected\noffice\nappointments. There are shelves with breeding books and other horsey\nreference works. Where shelves don't cover the walls, ribbons and\nprize certificates do. All this is overshadowed by the condition of the\nroom: papers are scattered everywhere, file folders spill their contents\non the floor and on every horizontal surface, a file of floppy disks has\nbeen bounced off one wall, and copier toner is spilled on the rug. \">\n\t       <COND (<AND <FSET? ,LARGE-DESK ,OPENBIT>\n\t\t\t   <FSET? ,SMALL-DESK ,OPENBIT>\n\t\t\t   <FSET? ,FILE-CABINET ,OPENBIT>>\n\t\t      <TELL\n\"The desks and \" 'FILE-CABINET ,HAVE-DRAWERS-OPEN>)\n\t\t     (<AND <FSET? ,LARGE-DESK ,OPENBIT>\n\t\t\t   <FSET? ,SMALL-DESK ,OPENBIT>>\n\t\t      <TELL\n\"The desks\" ,HAVE-DRAWERS-OPEN>)\n\t\t     (<AND <FSET? ,LARGE-DESK ,OPENBIT>\n\t\t\t   <FSET? ,FILE-CABINET ,OPENBIT>>\n\t\t      <TELL\nCTHE ,LARGE-DESK \" and \" THE ,FILE-CABINET ,HAVE-DRAWERS-OPEN>)\n\t\t     (<AND <FSET? ,SMALL-DESK ,OPENBIT>\n\t\t\t   <FSET? ,FILE-CABINET ,OPENBIT>>\n\t\t      <TELL\nCTHE ,SMALL-DESK \" and \" THE ,FILE-CABINET ,HAVE-DRAWERS-OPEN>)\n\t\t     (<FSET? ,LARGE-DESK ,OPENBIT>\n\t\t      <TELL-HAS-DRAWER-OPEN ,LARGE-DESK>)\n\t\t     (<FSET? ,SMALL-DESK ,OPENBIT>\n\t\t      <TELL-HAS-DRAWER-OPEN ,SMALL-DESK>)\n\t\t     (<FSET? ,FILE-CABINET ,OPENBIT>\n\t\t      <TELL\nCTHE ,FILE-CABINET \" has its drawers open.\">)\n\t\t     (T <TELL \"The desk and file drawers are closed.\">)>\n\t       <TELL \" Doors lead out to the north, west, and south.\" CR>)>>"
  },
  "TELL-HAS-DRAWER-OPEN": {
   "name": "TELL-HAS-DRAWER-OPEN",
   "file": "places.zil",
   "line": 1040,
   "endLine": 1042,
   "source": "<ROUTINE TELL-HAS-DRAWER-OPEN (DESK)\n\t <TELL\nCTHE .DESK \" has its drawer open.\">>"
  },
  "DESK-F": {
   "name": "DESK-F",
   "file": "places.zil",
   "line": 1062,
   "endLine": 1073,
   "source": "<ROUTINE DESK-F ()\n\t <COND (<VERB? LOOK-INSIDE>\n\t\t<TELL\n,THERE-IS \"nothing inside \" THE ,PRSO \". It has all been dumped on the\nfloor.\" CR>)\n\t       (<AND <VERB? LOOK-BEHIND>\n\t\t     <EQUAL? ,PRSO ,LARGE-DESK>\n\t\t     <NOT <FSET? ,CORPSE ,TOUCHBIT>>>\n\t\t<PERFORM ,V?EXAMINE ,CORPSE>\n\t\t<RTRUE>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<OPEN-CLOSE>)>>"
  },
  "TRASH-F": {
   "name": "TRASH-F",
   "file": "places.zil",
   "line": 1091,
   "endLine": 1095,
   "source": "<ROUTINE TRASH-F ()\n\t <COND (<VERB? EXAMINE SEARCH LOOK-INSIDE>\n\t\t<TELL\n\"An incredible mess has been made of the records in this office. The\nthings on the floor alone would take days to sort out.\" CR>)>>"
  },
  "OFFICE-JUNK-F": {
   "name": "OFFICE-JUNK-F",
   "file": "places.zil",
   "line": 1104,
   "endLine": 1110,
   "source": "<ROUTINE OFFICE-JUNK-F ()\n\t <COND (<VERB? EXAMINE READ>\n\t\t<TELL\n\"Examining it only makes you more aware of what a mess everything is.\" CR>)\n\t       (<VERB? TAKE>\n\t\t<TELL\n\"Carrying such junk would be a waste of effort.\" CR>)>>"
  },
  "COMPUTER-F": {
   "name": "COMPUTER-F",
   "file": "places.zil",
   "line": 1121,
   "endLine": 1125,
   "source": "<ROUTINE COMPUTER-F ()\n\t <COND (<VERB? LAMP-ON EXAMINE>\n\t\t<TELL \"Whoever smashed things up wrecked this as well.\" CR>)\n\t       (<VERB? TAKE>\n\t\t<TELL \"It's attached with a theft prevention bolt.\" CR>)>>"
  },
  "DISK-F": {
   "name": "DISK-F",
   "file": "places.zil",
   "line": 1138,
   "endLine": 1141,
   "source": "<ROUTINE DISK-F ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL\n\"Unfortunately, they are all bent, mangled, and useless.\" CR>)>>"
  },
  "SALE-FOLDER-F": {
   "name": "SALE-FOLDER-F",
   "file": "places.zil",
   "line": 1167,
   "endLine": 1175,
   "source": "<ROUTINE SALE-FOLDER-F ()\n\t <COND (<VERB? EXAMINE READ LOOK-INSIDE OPEN>\n\t\t<TELL\n\"The folder is labelled \\\"Sale of Ashcroft Farm.\\\"\">\n\t\t<COND (<IN? ,SALE-AGREEMENT ,SALE-FOLDER>\n\t\t       <FCLEAR ,SALE-AGREEMENT ,NDESCBIT>\n\t\t       <FSET ,SALE-FOLDER ,OPENBIT>\n\t\t       <TELL \" Inside\"> <TELL-P&S>)>\n\t\t<CRLF>)>>"
  },
  "SALE-AGREEMENT-F": {
   "name": "SALE-AGREEMENT-F",
   "file": "places.zil",
   "line": 1177,
   "endLine": 1183,
   "source": "<ROUTINE SALE-AGREEMENT-F ()\n\t <COND (<FSET? ,SALE-AGREEMENT ,NDESCBIT>\n\t\t<TELL \"What agreement?\" CR>)\n\t       (<VERB? EXAMINE READ>\n\t\t<TELL \"This document\">\n\t\t<TELL-P&S>\n\t\t<CRLF>)>>"
  },
  "TELL-P&S": {
   "name": "TELL-P&S",
   "file": "places.zil",
   "line": 1185,
   "endLine": 1189,
   "source": "<ROUTINE TELL-P&S ()\n<TELL \" is \" A ,SALE-AGREEMENT \" between the Ashcroft Trust (in the\nperson of \" 'VERONICA \") and\n\" 'OSTMANN \" Properties, Sam \" 'OSTMANN \"'s building firm. The agreement is dated\ntoday. It is not yet signed by either party.\">>"
  },
  "TRUST-FOLDER-F": {
   "name": "TRUST-FOLDER-F",
   "file": "places.zil",
   "line": 1205,
   "endLine": 1213,
   "source": "<ROUTINE TRUST-FOLDER-F ()\n\t <COND (<VERB? EXAMINE READ LOOK-INSIDE OPEN>\n\t\t<TELL\n\"The folder is labelled \\\"Ashcroft Family Trust.\\\"\">\n\t\t<COND (<IN? ,TRUST-DOCUMENTS ,TRUST-FOLDER>\n\t\t       <FCLEAR ,TRUST-DOCUMENTS ,NDESCBIT>\n\t\t       <FSET ,TRUST-FOLDER ,OPENBIT>\n\t\t       <TELL \" Inside is a thick \" 'TRUST-DOCUMENTS \".\">)>\n\t\t<CRLF>)>>"
  },
  "TRUST-DOCUMENTS-F": {
   "name": "TRUST-DOCUMENTS-F",
   "file": "places.zil",
   "line": 1223,
   "endLine": 1240,
   "source": "<ROUTINE TRUST-DOCUMENTS-F ()\n\t <COND (<FSET? ,TRUST-DOCUMENTS ,NDESCBIT>\n\t\t<TELL \"What \" 'TRUST-DOCUMENTS \"?\" CR>)\n\t       (<VERB? EXAMINE READ LOOK-INSIDE>\n\t\t<TELL\n\"There are many documents in a stapled bunch. They all concern\nbusiness and financial matters. On top is a letter from an accounting\nfirm. It reads in part: \\\"While it is difficult to make explicit\njudgements on the advisability of certain investments by the Ashcroft\nFamily Trust, we find a disturbing pattern. In the past ten years\nalmost twenty percent of the Trust\nholdings have been placed in four companies, each of which is\na poor financial risk. As the accompanying documents\nshow, all four are controlled by Southeast Planning\nCorporation: privately held, with chief\nexecutive officer listed as Colonel Robert Marston.\\\" Curiously,\non the back of the bunch there is a paper corner left under the\nstaple where a sheet was torn off.\" CR>)>>"
  },
  "LIST-F": {
   "name": "LIST-F",
   "file": "places.zil",
   "line": 1257,
   "endLine": 1267,
   "source": "<ROUTINE LIST-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The piece of paper has one corner torn from it where\nit was stapled to something.\" CR>)\n\t       (<AND <VERB? TAKE READ>\n\t\t     <IN? ,INVESTOR-LIST ,FIREPLACE>>\n\t\t<MOVE ,INVESTOR-LIST ,WINNER>\n\t\t<TELL\n\"You reach into the fireplace, heedless of your precious\nskin, and grab the piece of paper just in time!\" CR>)>>"
  },
  "LR-FIREPLACE-F": {
   "name": "LR-FIREPLACE-F",
   "file": "places.zil",
   "line": 1316,
   "endLine": 1323,
   "source": "<ROUTINE LR-FIREPLACE-F ()\n\t <COND (<VERB? EXAMINE LOOK-INSIDE BURN>\n\t\t<COND (<NOT <FIRST? ,LR-FIREPLACE>> \n\t\t       <TELL\n\"This fireplace has no fire burning in it.\" CR>)>)\n\t       (<VERB? THROUGH>\n\t\t<TELL\n\"This is Halloween, not Christmas.\" CR>)>>"
  },
  "PORTRAIT-F": {
   "name": "PORTRAIT-F",
   "file": "places.zil",
   "line": 1333,
   "endLine": 1338,
   "source": "<ROUTINE PORTRAIT-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"There are many generations of Ashcrofts represented here. The family\nsettled in Maryland during the 1600s, and has been here ever since.\nThey've all had their portraits painted at one time or another.\" CR>)>>"
  },
  "RUG-F": {
   "name": "RUG-F",
   "file": "places.zil",
   "line": 1356,
   "endLine": 1367,
   "source": "<ROUTINE RUG-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"This is an old and valuable \" 'PRSO>\n\t\t<COND (<EQUAL? ,PRSO ,PSEUDO-OBJECT>\n\t\t       <TELL\n\", now horribly stained by copier toner\">)>\n\t\t<TELL \".\" CR>)\n\t       (<VERB? LOOK-UNDER MOVE>\n\t\t<TELL\n\"Under the rug you see a wooden trap door... No, sorry! That's another\nstory.\" CR>)>>"
  },
  "TOWELS-PSEUDO": {
   "name": "TOWELS-PSEUDO",
   "file": "places.zil",
   "line": 1395,
   "endLine": 1400,
   "source": "<ROUTINE TOWELS-PSEUDO ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"They are fluffy and soft.\" CR>)\n\t       (<VERB? TAKE>\n\t\t<TELL\n\"You have no need of that.\" CR>)>>"
  },
  "JUMPED-OUT?": {
   "name": "JUMPED-OUT?",
   "file": "places.zil",
   "line": 1430,
   "endLine": 1436,
   "source": "<ROUTINE JUMPED-OUT? (RM)\n\t <COND (<AND ,PLAYER-HIDING\n\t\t     <EQUAL? ,HERE .RM>\n\t\t     <VERB? WALK TELL ASK-ABOUT\n\t\t\t    $CALL STAND TAKE HELLO\n\t\t\t    OPEN PHONE>>\n\t\t<RTRUE>)>>"
  },
  "LIBRARY-F": {
   "name": "LIBRARY-F",
   "file": "places.zil",
   "line": 1438,
   "endLine": 1464,
   "source": "<ROUTINE LIBRARY-F (RARG)\n\t <COND (<==? .RARG ,M-BEG>\n\t\t<COND (<AND <OR <IN? ,MICHAEL ,LIBRARY>\n\t\t\t\t<IN? ,COL-MARSTON ,LIBRARY>>\n\t\t\t    <JUMPED-OUT? ,LIBRARY>>\n\t\t       <SETG PLAYER-HIDING <>>\n\t\t       <TELL\n\"As you emerge from concealment, \">\n\t\t       <COND (<AND <IN? ,MICHAEL ,LIBRARY>\n\t\t\t\t   <IN? ,COL-MARSTON ,LIBRARY>>\n\t\t\t      <TELL\n'MICHAEL \" and \" 'COL-MARSTON \" stare at you and then at each other\">\n\t\t\t      <COND (<IN? ,INVESTOR-LIST ,MICHAEL>\n\t\t\t\t     <TELL\n\", shocked expressions on their faces\">)>\n\t\t\t      <TELL \".\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <COND (<IN? ,MICHAEL ,LIBRARY>\n\t\t\t\t     <TELL 'MICHAEL>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL 'COL-MARSTON>)>\n\t\t\t      <TELL \" stares at you, surprised.\" CR>)>\n\t\t       <MURDER-TELL ,PLAYER\n\t\t\t\t    <COND (<IN? ,MICHAEL ,LIBRARY>\n\t\t\t\t\t   ,MICHAEL)\n\t\t\t\t\t  (T ,COL-MARSTON)>>\n\t\t       <RTRUE>)>)>>"
  },
  "BOOKCASES-F": {
   "name": "BOOKCASES-F",
   "file": "places.zil",
   "line": 1474,
   "endLine": 1477,
   "source": "<ROUTINE BOOKCASES-F ()\n\t <COND (<VERB? LOOK-INSIDE EXAMINE>\n\t\t<TELL\n\"The bookcases contain many books.\" CR>)>>"
  },
  "TELL-GET-UP": {
   "name": "TELL-GET-UP",
   "file": "places.zil",
   "line": 1490,
   "endLine": 1491,
   "source": "<ROUTINE TELL-GET-UP ()\n\t <TELL ,HAVE-TO \"get up first.\" CR>>"
  },
  "VARIOUS-TABLES-F": {
   "name": "VARIOUS-TABLES-F",
   "file": "places.zil",
   "line": 1505,
   "endLine": 1513,
   "source": "<ROUTINE VARIOUS-TABLES-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<AND <VERB? TAKE>\n\t\t     <EQUAL? ,PRSO ,SIDE-TABLE ,END-TABLE>>\n\t\t<TELL ,RIDICULOUS CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"On \" THE ,PRSO \" sits \" A ,TELEPHONE>\n\t\t<PRINT-CONTENTS ,PRSO \", accompanied by \">\n\t\t<TELL \".\" CR>)>>"
  },
  "CHAIR-F": {
   "name": "CHAIR-F",
   "file": "places.zil",
   "line": 1528,
   "endLine": 1540,
   "source": "<ROUTINE CHAIR-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<EQUAL? .RARG ,M-BEG ,M-END>\n\t\t<RFALSE>)\n\t       (<AND <VERB? TAKE> <EQUAL? ,PRSO ,CHAIR>>\n\t\t<TELL ,RIDICULOUS CR>)\n\t       (<AND <VERB? HIDE-BEHIND> <NOT ,PLAYER-HIDING>>\n\t\t<COND (<IN? ,PLAYER ,CHAIR>\n\t\t       <TELL-GET-UP>)\n\t\t      (T\n\t\t       <NOW-CONCEALED>)>)\n\t       (<VERB? RUB>\n\t\t<TELL\n\"It feels very soft and comfy.\" CR>)>>"
  },
  "DEATHMASK-BOOK-F": {
   "name": "DEATHMASK-BOOK-F",
   "file": "places.zil",
   "line": 1555,
   "endLine": 1558,
   "source": "<ROUTINE DEATHMASK-BOOK-F ()\n\t <COND (<VERB? EXAMINE OPEN>\n\t\t<PERFORM ,V?READ ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "BOOKS-PSEUDO": {
   "name": "BOOKS-PSEUDO",
   "file": "places.zil",
   "line": 1560,
   "endLine": 1572,
   "source": "<ROUTINE BOOKS-PSEUDO ()\n\t <COND (<VERB? READ>\n\t\t<TELL \n\"That would take many months, even assuming you are a star pupil of Evelyn\nWood.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"A great many of the books have to do with horses, horse breeding, farm\nmanagement, and other practical subjects.\">\n\t\t<COND (<EQUAL? ,HERE ,LIBRARY>\n\t\t       <TELL \" There is a lot of fiction as\nwell, including the complete works of Dick Francis.\">)>\n\t\t<CRLF>)>>"
  },
  "PLANTS-F": {
   "name": "PLANTS-F",
   "file": "places.zil",
   "line": 1596,
   "endLine": 1601,
   "source": "<ROUTINE PLANTS-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"There are plants all over the room.\" ,DOING-WELL CR>)\n\t       (<VERB? TAKE>\n\t\t<TELL-CARE>)>>"
  },
  "TELL-CARE": {
   "name": "TELL-CARE",
   "file": "places.zil",
   "line": 1603,
   "endLine": 1605,
   "source": "<ROUTINE TELL-CARE ()\n\t <TELL\n\"After all the care that's been lavished on them? For shame.\" CR>>"
  },
  "CHINA-PSEUDO": {
   "name": "CHINA-PSEUDO",
   "file": "places.zil",
   "line": 1627,
   "endLine": 1629,
   "source": "<ROUTINE CHINA-PSEUDO ()\n\t <COND (<VERB? EXAMINE> <TELL \"It's lovely.\" CR>)\n\t       (<VERB? TAKE> <TELL \"It's in a locked cabinet.\" CR>)>>"
  },
  "CHANDELIER-F": {
   "name": "CHANDELIER-F",
   "file": "places.zil",
   "line": 1639,
   "endLine": 1641,
   "source": "<ROUTINE CHANDELIER-F ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL \"It's too high to reach.\" CR>)>>"
  },
  "CHINA-CABINET-F": {
   "name": "CHINA-CABINET-F",
   "file": "places.zil",
   "line": 1668,
   "endLine": 1672,
   "source": "<ROUTINE CHINA-CABINET-F ()\n\t <COND (<VERB? LOOK-INSIDE EXAMINE>\n\t\t<TELL\n,THERE-IS \"an exquisite set of antique china and crystal inside \"\nTHE ,CHINA-CABINET \".\" CR>)>>"
  },
  "STOVE-PSEUDO": {
   "name": "STOVE-PSEUDO",
   "file": "places.zil",
   "line": 1692,
   "endLine": 1699,
   "source": "<ROUTINE STOVE-PSEUDO ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"This is a gas stove with a kettle boiling on one burner.\" CR>)\n\t       (<VERB? LAMP-ON>\n\t\t<TELL ,ITS-ALREADY \"on.\" CR>)\n\t       (<VERB? LAMP-OFF>\n\t\t<TELL \"But then the fish won't get done!\" CR>)>>"
  },
  "KETTLE-PSEUDO": {
   "name": "KETTLE-PSEUDO",
   "file": "places.zil",
   "line": 1701,
   "endLine": 1707,
   "source": "<ROUTINE KETTLE-PSEUDO ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"This is a fine kettle of fish.\" CR>)\n\t       (<VERB? TAKE>\n\t\t<TELL\n\"It's much too hot to take.\" CR>)>>"
  },
  "GARAGE-F": {
   "name": "GARAGE-F",
   "file": "places.zil",
   "line": 1767,
   "endLine": 1777,
   "source": "<ROUTINE GARAGE-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<AND <IN? ,MICHAEL ,GARAGE>\n\t\t\t    <JUMPED-OUT? ,GARAGE>>\n\t\t       <PLAYER-EMERGES>\n\t\t       <SETG PLAYER-HIDING <>>\n\t\t       <TELL 'MICHAEL \" jumps in surprise.\">\n\t\t       <COND (<NOT <FSET? ,PLAYER ,TOLD>>\n\t\t\t      <TELL \" \">\n\t\t\t      <MURDER-TELL ,PLAYER ,MICHAEL>)\n\t\t\t     (ELSE <CRLF>)>)>)>>"
  },
  "TELL-LOCKED": {
   "name": "TELL-LOCKED",
   "file": "places.zil",
   "line": 1803,
   "endLine": 1804,
   "source": "<ROUTINE TELL-LOCKED ()\n\t <TELL CTHE ,PRSO \" is securely locked.\" CR>>"
  },
  "CAR-F": {
   "name": "CAR-F",
   "file": "places.zil",
   "line": 1806,
   "endLine": 1820,
   "source": "<ROUTINE CAR-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<VERB? THROUGH OPEN UNLOCK>\n\t\t<TELL-LOCKED>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<TELL\n\"The windows are tinted, but you can see inside well enough to\ntell there is nothing there.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"The car is a late-model \" D ,PRSO \". It has Maryland plates.\" CR>)\n\t       (<AND <VERB? HIDE-BEHIND> <NOT ,PLAYER-HIDING>>\n\t\t<SETG PLAYER-HIDING ,PRSO>\n\t\t<TELL\n,YOU-ARE \"now hiding behind the car. It's dim here and you are\nwell concealed.\" CR>)>>"
  },
  "TRUNK-F": {
   "name": "TRUNK-F",
   "file": "places.zil",
   "line": 1840,
   "endLine": 1843,
   "source": "<ROUTINE TRUNK-F ()\n\t <COND (<VERB? OPEN UNLOCK>\n\t\t<COND (<FSET? ,PRSO ,LOCKED>\n\t\t       <TELL-LOCKED>)>)>>"
  },
  "CROWBAR-F": {
   "name": "CROWBAR-F",
   "file": "places.zil",
   "line": 1861,
   "endLine": 1897,
   "source": "<ROUTINE CROWBAR-F ()\n\t <COND (<AND <VERB? UNLOCK> <EQUAL? ,PRSI ,CROWBAR>>\n\t\t<TELL\n\"A crowbar doesn't unlock things, it pries them open.\" CR>)\n\t       (<VERB? OPEN MUNG PICK>\n\t\t<COND (<EQUAL? ,PRSO ,BMW ,MERCEDES ,POLICE-CAR>\n\t\t       <TELL\n\"Turning to car theft since you can't make it in journalism?\" CR>)\n\t\t      (<EQUAL? ,PRSO ,BMW-TRUNK ,MERCEDES-TRUNK>\n\t\t       <COND (<IN? ,MICHAEL ,HERE>\n\t\t\t      <TELL\n\"Michael stops you. \\\"Just what do you think you're doing?\\\"\" CR>)\n\t\t\t     (<FSET? ,PRSO ,OPENBIT>\n\t\t\t      <TELL\n\"The trunk is already open.\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <FCLEAR ,PRSO ,LOCKED>\n\t\t\t      <FSET ,PRSO ,OPENBIT>\n\t\t\t      <TELL\n\"The trunk lid pops open\">\n\t\t\t      <COND (<FIRST? ,PRSO>\n\t\t\t\t     <TELL\n\", revealing \">\n\t\t\t\t     <PRINT-CONTENTS ,PRSO>)>\n\t\t\t      <TELL \".\" CR>)>)\n\t\t      (<OR <FSET? ,PRSO ,DOORBIT>\n\t\t\t   <FSET? ,PRSO ,WINDOWBIT>>\n\t\t       <COND (<FSET? ,BURGLAR-ALARM ,ONBIT>\n\t\t\t      <TELL\n\"Trying for another B&E, eh?\" CR>)\n\t\t\t     (T\n\t\t\t      <FSET ,BURGLAR-ALARM ,ONBIT>\n\t\t\t      <ENABLE <QUEUE I-BURGLAR-ALARM -1>>\n\t\t\t      <TELL\n\"Your clumsy attempt to \" <COND (<VERB? OPEN> \"force open\")\n\t\t\t\t(ELSE \"smash\")> \" the \" D ,PRSO\n\" has set off \" THE ,BURGLAR-ALARM \".\" CR>)>)>)>>"
  },
  "BURGLAR-ALARM-F": {
   "name": "BURGLAR-ALARM-F",
   "file": "places.zil",
   "line": 1907,
   "endLine": 1911,
   "source": "<ROUTINE BURGLAR-ALARM-F ()\n\t <COND (<VERB? LAMP-OFF>\n\t\t<TELL CTHE ,BURGLAR-ALARM \" switch\" ,ISNT-HERE CR>)\n\t       (<AND <VERB? LISTEN> <FSET? ,BURGLAR-ALARM ,ONBIT>>\n\t\t<TELL \"I take it you are deaf?\" CR>)>>"
  },
  "I-BURGLAR-ALARM": {
   "name": "I-BURGLAR-ALARM",
   "file": "places.zil",
   "line": 1915,
   "endLine": 1923,
   "source": "<ROUTINE I-BURGLAR-ALARM ()\n\t <COND (<FSET? ,BURGLAR-ALARM ,ONBIT>\n\t\t<COND (<G? <SETG ALARM-COUNT <+ ,ALARM-COUNT 1>> 30>\n\t\t       <SETG ALARM-COUNT 0>\n\t\t       <FCLEAR ,BURGLAR-ALARM ,ONBIT>\n\t\t       <DISABLE <INT I-BURGLAR-ALARM>>)\n\t\t      (ELSE\n\t\t       <TELL CTHE ,BURGLAR-ALARM \" rings stridently.\" CR>)>)>\n\t <RFALSE>>"
  },
  "GLOBAL-BALLROOM-F": {
   "name": "GLOBAL-BALLROOM-F",
   "file": "places.zil",
   "line": 1935,
   "endLine": 1941,
   "source": "<ROUTINE GLOBAL-BALLROOM-F ()\n\t <COND (<VERB? WALK-TO>\n\t\t<COND (<IN-BALLROOM? ,HERE>\n\t\t       <TELL-ALREADY-ARE>)\n\t\t      (ELSE\n\t\t       <PERFORM ,V?WALK-TO ,BALLROOM-5>\n\t\t       <RTRUE>)>)>>"
  },
  "BALLROOM-5-F": {
   "name": "BALLROOM-5-F",
   "file": "places.zil",
   "line": 2041,
   "endLine": 2062,
   "source": "<ROUTINE BALLROOM-5-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<BALLROOM-F .RARG>)\n\t       (<AND <EQUAL? .RARG ,M-ENTER>\n\t\t     <L? ,OVER-COUNT 3>>\n\t\t<SETG ON-DANCE-FLOOR? T>\n\t\t<RFALSE>)\n\t       (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<AND <VERB? WALK FOLLOW> ,ON-DANCE-FLOOR?>\n\t\t       <SETG ON-DANCE-FLOOR? <>>\n\t\t       <TELL\n\"There are quite a few dancers on the floor, and it takes time to pick\nyour way among them. You eventually make some progress, though.\" CR>)\n\t\t      (<AND <VERB? ASK-FOR>\n\t\t\t    <IN? ,PRSO ,HERE>\n\t\t\t    <EQUAL? ,PRSI ,BALLROOM-5>>\n\t\t       <PERFORM ,V?DANCE ,PRSO>\n\t\t       <RTRUE>)\n\t\t      (<AND <VERB? PUT>\n\t\t\t    <EQUAL? ,PRSI ,BALLROOM-5>>\n\t\t       <PERFORM ,V?DROP ,PRSO>\n\t\t       <RTRUE>)>)>>"
  },
  "BAR-F": {
   "name": "BAR-F",
   "file": "places.zil",
   "line": 2131,
   "endLine": 2139,
   "source": "<ROUTINE BAR-F ()\n\t <COND (<VERB? WALK-TO>\n\t\t<COND (<EQUAL? ,HERE ,BALLROOM-9>\n\t\t       <TELL\n\"Jack Johnson, the bartender, greets you. He looks at you quizzically,\nno doubt expecting you to order a drink.\" CR>)\n\t\t      (ELSE\n\t\t       <PERFORM ,V?WALK-TO ,BALLROOM-9>\n\t\t       <RTRUE>)>)>>"
  },
  "LOCAL-BAND-DESC-F": {
   "name": "LOCAL-BAND-DESC-F",
   "file": "places.zil",
   "line": 2149,
   "endLine": 2156,
   "source": "<ROUTINE LOCAL-BAND-DESC-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<IN? ,LOCAL-BAND ,KITCHEN>\n\t\t<TELL\n\"The band members are on their break. They are sitting around joking,\ndrinking coffee, and wolfing down sandwiches and shrimp cocktail.\" CR>)\n\t       (ELSE\n\t\t<TELL\n\"The band is here, playing their set.\" CR>)>>"
  },
  "LOCAL-BAND-F": {
   "name": "LOCAL-BAND-F",
   "file": "places.zil",
   "line": 2158,
   "endLine": 2208,
   "source": "<ROUTINE LOCAL-BAND-F ()\n\t <COND (<EQUAL? ,LOCAL-BAND ,WINNER>\n\t\t<TELL \"The band is busy \">\n\t\t<COND (<IN? ,LOCAL-BAND ,KITCHEN>\n\t\t       <TELL \"resting and eating\">)\n\t\t      (ELSE <TELL \"performing\">)>\n\t\t<TELL \", and has no time to talk.\" CR>)\n\t       (<AND <VERB? SHOW> <EQUAL? ,PRSI ,LOCAL-BAND>>\n\t\t<TELL \"These guys are pretty cool, and react accordingly.\" CR>)\n\t       (<VERB? SMELL>\n\t\t<TELL \"The band stinks.\" CR>)\n\t       (<TALKING-TO? ,LOCAL-BAND>\n\t\t<TELL \"The band is too busy \"\n\t\t      <COND (<IN? ,LOCAL-BAND ,KITCHEN> \"eating\")\n\t\t\t    (T \"playing\")> \" to respond.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (<G? ,PRESENT-TIME 764>\n\t\t       <TELL \"What band?\" CR>\n\t\t       <RTRUE>)>\n\t\t<TELL\n\"The band consists of five guys in checked sport coats. They are very\nprofessional, but their repertoire is basically middle-of-the-road,\neither because they like it that way or because they were asked\nto play that sort of thing.\" CR>)\n\t       (<VERB? FIND FOLLOW>\n\t\t<COND (<G? ,PRESENT-TIME 764>\n\t\t       <TELL \"What band? They've gone home.\" CR>)\n\t\t      (<EQUAL? ,HERE <LOC ,LOCAL-BAND>>\n\t\t       <TELL \"They're right\">\n\t\t       <TELL-HERE>)\n\t\t      (ELSE\n\t\t       <TELL\n\"They're either in the ballroom or the kitchen.\" CR>)>)\n\t       (<VERB? WALK-TO>\n\t\t<COND (<G? ,PRESENT-TIME 764>\n\t\t       <TELL \"What band? They've gone home.\" CR>)\n\t\t      (<EQUAL? ,HERE <LOC ,LOCAL-BAND>>\n\t\t       <TELL-CLOSE-ENOUGH>)\n\t\t      (ELSE\n\t\t       <PERFORM ,V?WALK-TO <LOC ,LOCAL-BAND>>\n\t\t       <RTRUE>)>)\n\t       (<VERB? LISTEN>\n\t\t<COND (,BAND-PLAYING?\n\t\t       <TELL\n\"The band is playing \\\"\" ,BAND-PLAYING? \".\\\"\" CR>)\n\t\t      (<G? ,PRESENT-TIME 764>\n\t\t       <TELL\n\"The band has gone home.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"The band is on its break.\" CR>)>)>>"
  },
  "RECORD-PLAYER-F": {
   "name": "RECORD-PLAYER-F",
   "file": "places.zil",
   "line": 2218,
   "endLine": 2240,
   "source": "<ROUTINE RECORD-PLAYER-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"This is a state-of-the-art stereo system, not really \" A ,RECORD-PLAYER \".\nIt is actually installed in the wall behind the band. It looks very\nhigh-tech and glitzy.\" CR>)\n\t       (<VERB? WALK-TO>\n\t\t<COND (<EQUAL? ,HERE ,BALLROOM-2>\n\t\t       <TELL-CLOSE-ENOUGH>)\n\t\t      (ELSE\n\t\t       <PERFORM ,V?WALK-TO ,BALLROOM-2>\n\t\t       <RTRUE>)>)\n\t       (<VERB? LISTEN>\n\t\t<TELL CTHE ,RECORD-PLAYER \" is\">\n\t\t<COND (,RECORD-PLAYING?\n\t\t       <TELL\n\" playing \\\"\" ,RECORD-PLAYING? \".\\\"\" CR>)\n\t\t      (,PARTY-OVER\n\t\t       <TELL\n\" turned off.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"n't playing anything.\" CR>)>)>>"
  },
  "MUSIC-F": {
   "name": "MUSIC-F",
   "file": "places.zil",
   "line": 2249,
   "endLine": 2259,
   "source": "<ROUTINE MUSIC-F ()\n\t <COND (<VERB? LISTEN>\n\t\t<COND (<IN-BALLROOM? ,PLAYER>\n\t\t       <COND (,BAND-PLAYING?\n\t\t\t      <PERFORM ,V?LISTEN ,LOCAL-BAND>)\n\t\t\t     (,RECORD-PLAYING?\n\t\t\t      <PERFORM ,V?LISTEN ,RECORD-PLAYER>)\n\t\t\t     (ELSE <TELL \"You hear no music.\" CR>)>\n\t\t       <RTRUE>)\n\t\t      (ELSE\n\t\t       <TELL-YOU-CANT \"hear any music\">)>)>>"
  },
  "FIREPLACE-F": {
   "name": "FIREPLACE-F",
   "file": "places.zil",
   "line": 2272,
   "endLine": 2326,
   "source": "<ROUTINE FIREPLACE-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-OBJDESC>\n\t\t<COND (<FIRST? ,FIREPLACE>\n\t\t       <TELL\n,THERE-IS \"something other than logs burning in the fireplace.\" CR>)>\n\t\t<RTRUE>)>\n\t <COND (<AND <VERB? TAKE>\n\t\t     <NOT <EQUAL? ,PRSO ,FIREPLACE ,INVESTOR-LIST>>>\n\t\t<COND (<FSET? ,PRSO ,BURNBIT>\n\t\t       <TELL\n\"You try, but it's aflame and you almost burn yourself.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"It's too hot from the fire.\" CR>)>)\n\t       (<AND <VERB? POUR-ON>\n\t\t     <EQUAL? ,PRSO ,DRINK>\n\t\t     <EQUAL? ,PRSI ,FIREPLACE>>\n\t\t<TELL \"Some of \" THE ,DRINK \" sizzles away to vapor.\" CR>)\n\t       (<AND <VERB? PUT BURN DROP>\n\t\t     <EQUAL? ,PRSI ,FIREPLACE>>\n\t\t<COND (<EQUAL? ,PRSO ,ME ,PLAYER>\n\t\t       <PERFORM ,V?KILL ,PLAYER>\n\t\t       <RTRUE>)\n\t\t      (<EQUAL? ,PRSO ,CORPSE ,FAIRY-COSTUME>\n\t\t       <TELL\n\"You stop short, realizing that it would look very bad and ensure your\nconviction for the murder.\" CR>\n\t\t       <RTRUE>)>\n\t\t<FCLEAR ,PRSO ,WEARBIT>\n\t\t<MOVE ,PRSO ,FIREPLACE>\n\t\t<ENABLE <QUEUE I-BURN-OBJ 2>>\n\t\t<TELL\nCTHE ,PRSO \" goes into the fire\">\n\t\t<COND (<FSET? ,PRSO ,BURNBIT>\n\t\t       <TELL \", where it begins to burn\">)>\n\t\t<TELL \".\" CR>)\n\t       (<VERB? LAMP-OFF>\n\t\t<TELL-YOU-CANT \"put out the fire\">)\n\t       (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<COND (<PRINT-CONTENTS ,FIREPLACE\n\"In the fireplace, endangered by the fire, you can see \">\n\t\t       <TELL \".\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n,THERE-IS \"a cheery and warm fire burning in the fireplace.\" CR>)>)\n\t       (<VERB? THROUGH>\n\t\t<TELL\n\"It's certainly chilly and damp tonight, but I don't think that's the best\nway to do something about it.\" CR>)\n\t       (<VERB? WALK-TO>\n\t\t<COND (<EQUAL? ,HERE ,BALLROOM-8>\n\t\t       <TELL-CLOSE-ENOUGH>)\n\t\t      (ELSE\n\t\t       <PERFORM ,V?WALK-TO ,BALLROOM-8>\n\t\t       <RTRUE>)>)>>"
  },
  "TELL-CLOSE-ENOUGH": {
   "name": "TELL-CLOSE-ENOUGH",
   "file": "places.zil",
   "line": 2328,
   "endLine": 2329,
   "source": "<ROUTINE TELL-CLOSE-ENOUGH ()\n\t <TELL ,YOU-ARE \"close enough already.\" CR>>"
  },
  "I-BURN-OBJ": {
   "name": "I-BURN-OBJ",
   "file": "places.zil",
   "line": 2331,
   "endLine": 2343,
   "source": "<ROUTINE I-BURN-OBJ (\"AUX\" (F <FIRST? ,FIREPLACE>) (BURNED <>))\n\t <REPEAT ()\n\t\t <COND (<FSET? .F ,BURNBIT>\n\t\t\t<COND (.BURNED\n\t\t\t       <ENABLE <QUEUE I-BURN-OBJ 1>>)>\n\t\t\t<SET BURNED .F>)>\n\t\t <COND (<NOT <SET F <NEXT? .F>>>\n\t\t        <RETURN>)>>\n\t <COND (.BURNED\n\t\t<MOVE .BURNED ,POLICE-LAB>\n\t\t<COND (<EQUAL? ,HERE ,BALLROOM-8>\n\t\t       <TELL\nCTHE .BURNED \" has now been consumed by the fire.\" CR>)>)>>"
  },
  "BALLROOM-8-F": {
   "name": "BALLROOM-8-F",
   "file": "places.zil",
   "line": 2347,
   "endLine": 2365,
   "source": "<ROUTINE BALLROOM-8-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<BALLROOM-F ,M-LOOK>)\n\t       (<==? .RARG ,M-END>\n\t\t<COND (<IN-MOTION? ,VERONICA>\n\t\t       <RFALSE>)\n\t\t      (<AND <NOT ,MICHAEL-GREETING?>\n\t\t\t    <IN? ,MICHAEL ,HERE>\n\t\t\t    <IN? ,VERONICA ,HERE>>\n\t\t       <SETG MICHAEL-GREETING? T>\n\t\t       <DISABLE <INT I-WAVE-2>>\n\t\t       <ENABLE <QUEUE I-SPILL 1>>\n\t\t       <VERONICA-UNMASKS>\n\t\t       <CRLF>\n\t\t       <TELL\n\"The sheik, \" 'MICHAEL \", nods a greeting. \\\"The weather out there is horrible: glad\nyou could make it.\\\" He introduces you to the group around him. \\\"...and\nyou already know \" 'VERONICA \".\\\" The fairy nods in your direction. \\\"You might\nfind this worth adding to your story,\\\" he suggests.\" CR>)>)>>"
  },
  "BALLROOM-9-F": {
   "name": "BALLROOM-9-F",
   "file": "places.zil",
   "line": 2383,
   "endLine": 2389,
   "source": "<ROUTINE BALLROOM-9-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<BALLROOM-F ,M-LOOK>)\n\t       (<AND <==? .RARG ,M-ENTER>\n\t\t     <G? ,ARGUMENT-COUNT 0>>\n\t\t<TELL\n\"You seem to have come in on the midst of \" A ,DISCUSSION \".\" CR>)>>"
  },
  "BALLROOM-F": {
   "name": "BALLROOM-F",
   "file": "places.zil",
   "line": 2403,
   "endLine": 2443,
   "source": "<ROUTINE BALLROOM-F (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL <GETP ,HERE ,P?LDESC> CR>\n\t\t<COND (,PARTY-OVER\n\t\t       <TELL\n\"The ballroom has emptied of the mob that inhabited it a few hours ago.\nOnly a few crushed potato chips and some discarded shoes remain to\ntestify to the revelry.\">)\n\t\t      (ELSE\n\t\t       <TELL\n\"Elsewhere in this large ballroom, there are \">\n\t\t       <COND (<EQUAL? ,OVER-COUNT 0>\n\t\t\t      <TELL \"scores of other \">)>\n\t\t       <TELL \"party\nguests dressed in all sorts of outlandish costumes\">\n\t\t<COND (<PROB 50>\n\t\t       <TELL \", such as \" <PICK-ONE ,COSTUMES>>)>\n\t\t<TELL \". On the dance\nfloor are \" <COND (,RECORD-PLAYING? \"many of the younger\")\n\t\t  (ELSE \"some of the older\")> \" dancers. \">\n\t\t<COND (,BAND-PLAYING?\n\t\t       <TELL \"The band is playing \\\"\" ,BAND-PLAYING? \".\\\"\">)\n\t\t      (ELSE\n\t\t       <TELL\n\"A \" 'RECORD-PLAYER \" is playing \\\"\" ,RECORD-PLAYING? \"\\\" (the band is on\nits break).\">)>\n\t\t<CRLF>\n\t\t<TELL \"On the\nperiphery of the room small groups can be seen, discussing everything\nfrom politics to local scandals.\">)>\n\t\t<WHO-DERE ,BALLROOM-1>\n\t\t<WHO-DERE ,BALLROOM-2>\n\t\t<WHO-DERE ,BALLROOM-3>\n\t\t<WHO-DERE ,BALLROOM-4>\n\t\t<WHO-DERE ,BALLROOM-5>\n\t\t<WHO-DERE ,BALLROOM-6>\n\t\t<WHO-DERE ,BALLROOM-7>\n\t\t<COND (<NOT <IN? ,VERONICA ,BALLROOM-8>>\n\t\t       <WHO-DERE ,BALLROOM-8>)>\n\t\t<WHO-DERE ,BALLROOM-9>\n\t\t<CRLF>)>>"
  },
  "WHO-DERE": {
   "name": "WHO-DERE",
   "file": "places.zil",
   "line": 2445,
   "endLine": 2462,
   "source": "<ROUTINE WHO-DERE (RM \"AUX\" F (CH? 0))\n\t<COND (<NOT <EQUAL? .RM ,HERE>>\n\t       <SET F <FIRST? .RM>>\n\t       <REPEAT ()\n\t\t       <COND (<NOT .F>\n\t\t\t      <COND (<G? .CH? 1> <TELL \"are\">)\n\t\t\t\t    (<EQUAL? .CH? 1> <TELL \"is\">)\n\t\t\t\t    (ELSE <RETURN>)>\n\t\t\t      <TELL \" \" <GETP .RM ,P?FDESC> \".\">\n\t\t\t      <RETURN>)\n\t\t\t     (<AND <FSET? .F ,PERSON>\n\t\t\t\t   <NOT <EQUAL? .F ,LOCAL-BAND>>>\n\t\t\t      <COND (<EQUAL? .CH? 0> <TELL \" \">)\n\t\t\t\t    (ELSE <TELL \"and \">)>\n\t\t\t      <COND (<EQUAL? .CH? 0> <TELL CD .F \" \">)\n\t\t\t\t    (ELSE <TELL D .F \" \">)>\n\t\t\t      <SET CH? <+ .CH? 1>>)>\n\t\t       <SET F <NEXT? .F>>>)>>"
  },
  "I-MUSIC": {
   "name": "I-MUSIC",
   "file": "places.zil",
   "line": 2467,
   "endLine": 2503,
   "source": "<ROUTINE I-MUSIC (\"AUX\" MINUTES (IB? <IN-BALLROOM? ,WINNER>))\n\t <COND (,PARTY-OVER\n\t\t<SETG BAND-PLAYING? <>>\n\t\t<SETG RECORD-PLAYING? <>>\n\t\t<RFALSE>)>\n\t <ENABLE <QUEUE I-MUSIC 10>>\n\t <SET MINUTES <MOD ,PRESENT-TIME 60>>\n\t <COND (<OR <G? .MINUTES 45> <G? ,PRESENT-TIME 764>>\n\t\t<SETG RECORD-PLAYING? <PICK-ONE ,RECORDS>>\n\t\t<COND (,BAND-PLAYING?\n\t\t       <COND (<G? ,PRESENT-TIME 764>\n\t\t\t      <MOVE ,LOCAL-BAND ,GLOBAL-OBJECTS>)\n\t\t\t     (ELSE\n\t\t\t      <MOVE ,LOCAL-BAND ,KITCHEN>)>\n\t\t       <SETG BAND-PLAYING? <>>\n\t\t       <COND (.IB?\n\t\t\t      <TELL\n\"The band is \" <COND (<G? ,PRESENT-TIME 764> \"going home\")\n\t\t     (ELSE \"starting its break\")>\n\" now, but to fill the gap, \" A ,RECORD-PLAYER \"\nhas been started.  It's playing \\\"\" ,RECORD-PLAYING? \".\\\"\" CR>)>)\n\t\t      (.IB?\n\t\t       <TELL\n\"The record changes. It's now playing \\\"\" ,RECORD-PLAYING? \".\\\"\" CR>)>)\n\t       (ELSE\n\t\t<SETG BAND-PLAYING? <PICK-ONE ,TUNES>>\n\t\t<COND (,RECORD-PLAYING?\n\t\t       <MOVE ,LOCAL-BAND ,BALLROOM-2>\n\t\t       <SETG RECORD-PLAYING? <>>\n\t\t       <COND (.IB?\n\t\t\t      <TELL\n\"The band has returned from its break. They start their new set with\n\\\"\" ,BAND-PLAYING? \".\\\"\" CR>)>)\n\t\t      (.IB?\n\t\t       <TELL\n\"After a short pause, the band begins to play \\\"\" ,BAND-PLAYING? \".\\\"\" CR>)>)>\n\t <RFALSE>>"
  },
  "POND-PSEUDO": {
   "name": "POND-PSEUDO",
   "file": "places.zil",
   "line": 2574,
   "endLine": 2579,
   "source": "<ROUTINE POND-PSEUDO ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"It's a small man-made pond.\" CR>)\n\t       (<VERB? THROUGH LEAP>\n\t\t<TELL\n\"You would get all wet and slimy.\" CR>)>>"
  },
  "GARDEN-F": {
   "name": "GARDEN-F",
   "file": "places.zil",
   "line": 2642,
   "endLine": 2670,
   "source": "<ROUTINE GARDEN-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<COND (,DOG-FRIENDLY?\n\t\t       <TELL\n\"As you enter, the dog emerges briefly from his house, recognizes you,\nand returns.\" CR CR>)\n\t\t      (ELSE\n\t\t       <MOVE ,DOG ,GARDEN>\n\t\t       <FCLEAR ,DOG ,NDESCBIT>\n\t\t       <ENABLE <QUEUE I-DOG 5>>\n\t\t       <TELL\n\"As you enter the garden, a large, rather vicious sounding dog emerges from \"\nTHE ,DOGHOUSE \". He confronts you, growling and sniffing.\" CR CR>)>)\n\t       (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<AND <IN? ,DOG ,HERE> <VERB? WALK>>\n\t\t       <COND (,DOG-FRIENDLY?\n\t\t\t      <TELL\n\"The dog watches you go, his tail wagging.\" CR>\n\t\t\t      <RFALSE>)\n\t\t\t     (<AND ,OHERE\n\t\t\t\t   <EQUAL? ,PRSO\n\t\t\t\t\t   <DIR-FROM ,HERE ,OHERE>>>\n\t\t\t      <TELL\n\"The dog somewhat reluctantly allows you to retreat.\" CR>\n\t\t\t      <RFALSE>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"The dog bars your way, growling and sniffing. He obviously doesn't trust\nyou. His teeth are bared and his neck hair stands on end.\" CR>)>)>)>>"
  },
  "I-DOG": {
   "name": "I-DOG",
   "file": "places.zil",
   "line": 2672,
   "endLine": 2680,
   "source": "<ROUTINE I-DOG (\"AUX\" (D <LOC ,DOG>))\n\t <COND (<NOT <FSET? ,DOG ,RMUNGBIT>>\n\t\t<MOVE ,DOG ,DOGHOUSE>\n\t\t<FSET ,DOG ,NDESCBIT>\n\t\t<COND (<EQUAL? ,HERE .D>\n\t\t       <SETG DOG-FRIENDLY? T>\n\t\t       <TELL\n\"Finally the dog decides you mean no harm, gives you one last sniff and\nreturns to his house.\" CR>)>)>>"
  },
  "DOGHOUSE-F": {
   "name": "DOGHOUSE-F",
   "file": "places.zil",
   "line": 2691,
   "endLine": 2709,
   "source": "<ROUTINE DOGHOUSE-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<NOT .RARG>\n\t\t<COND (<VERB? THROUGH>\n\t\t       <TELL\n\"Your editor may want to send you to \" THE ,DOGHOUSE \", but this is\nridiculous!\" CR>)\n\t\t      (<VERB? EXAMINE>\n\t\t       <TELL\nCTHE ,DOGHOUSE \" is a miniature of the main house. It's quite cute. It's\nalso pretty large.\" CR>)\n\t\t      (<VERB? SMELL>\n\t\t       <TELL\n\"It smells of wet dog.\" CR>)\n\t\t      (<VERB? LOOK-INSIDE>\n\t\t       <COND (<IN? ,DOG ,DOGHOUSE>\n\t\t\t      <TELL\n,THERE-IS \"a large, wet Doberman pinscher in \" THE ,DOGHOUSE \".\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL CTHE ,DOGHOUSE \" is empty.\" CR>)>)>)>>"
  },
  "DOG-F": {
   "name": "DOG-F",
   "file": "places.zil",
   "line": 2721,
   "endLine": 2755,
   "source": "<ROUTINE DOG-F ()\n\t <COND (<OR <EQUAL? ,WINNER ,DOG>\n\t\t    <TALKING-TO? ,DOG>>\n\t\t<COND (,DOG-FRIENDLY?\n\t\t       <TELL\n\"The dog listens intently, but doesn't seem to understand you.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"The dog growls.\" CR>)>)\n\t       (<VERB? ATTACK KILL KICK SLAP>\n\t\t<FSET ,DOG ,RMUNGBIT>\n\t\t<TELL\n\"Its \">\n\t\t<COND (,DOG-FRIENDLY?\n\t\t       <TELL \"trust betrayed\">)\n\t\t      (T\n\t\t       <TELL \"suspicions confirmed\">)>\n\t\t<TELL \", the dog bites you on the leg. It continues\nto block the path.\" CR>)\n\t       (<VERB? GIVE SHOW>\n\t\t<TELL \"The dog sniffs it, but doesn't want it.\" CR>)\n\t       (<VERB? TAKE MOVE>\n\t\t<TELL \"This dog is as big as you are.\" CR>)\n\t       (<VERB? RUB>\n\t\t<COND (,DOG-FRIENDLY?\n\t\t       <TELL\n\"The dog wags his tail, spattering you with water. He enjoys being\npatted.\" CR>)\n\t\t      (<FSET? ,DOG ,RMUNGBIT>\n\t\t       <TELL\n\"The dog bites your hand.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"As your hand approaches, the dog snaps at it, more as a warning than as\na real attack.\" CR>)>)>>"
  },
  "BARN-F": {
   "name": "BARN-F",
   "file": "places.zil",
   "line": 2865,
   "endLine": 2907,
   "source": "<ROUTINE BARN-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<TELL\n\"As you enter the barn, you see a horrific sight. Entering\nin haste, and without light, \" 'MICHAEL \" and \" 'ALICIA \" scared \" 'VERONICA\n\"'s horse\ninto a state of thrashing, rearing terror. It smashed the door of its\nstall and trampled Michael, who lies in the straw, apparently dead. \"\n'ALICIA \" is \">\n\t\t<COND (<IN? ,ALICIA ,HERE>\n\t\t       <TELL\n\"screaming in terror. The poor horse, its flanks heaving, is\nin a corner looking fearfully from side to side.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL \"nowhere to be seen.\" CR>)>\n\t\t<SETG FLEEING? <>>\n\t\t<SETG DETECTIVE-SEEN ,DETECTIVE-CONVINCED>\n\t\t<SETG DETECTIVE-SEEN-CORPSE? T>\n\t\t<SETG DETECTIVE-SEEN-ROPE? T>\n\t\t<SETG DETECTIVE-SEEN-COAT? T>\n\t\t<SETG DETECTIVE-SEEN-GLASS? T>\n\t\t<SETG DETECTIVE-SEEN-HAIR? T>\n\t\t<SETG DETECTIVE-SEEN-CARD? T>\n\t\t<SETG DETECTIVE-SEEN-AGREEMENT? T>\n\t\t<SETG DETECTIVE-SEEN-TRUST-DOCUMENTS? T>\n\t\t<SETG DETECTIVE-SEEN-LIST? T>\n\t\t<SETG GLASS-ANALYZED? T>\n\t\t<SETG GLASS-ANALYZED-FOR-PRINTS? T>\n\t\t<SETG DETECTIVE-TOLD-ABOUT-RAIN? T>\n\t\t<COND (<IN? ,ALICIA ,BARN>\n\t\t       <SETG MICHAEL-DEAD? T>\n\t\t       <ARREST ,MICHAEL ,ALICIA>)\n\t\t      (ELSE\n\t\t       <FINISH>)>\n\t\t<RFATAL>)\n\t       (<NOT .RARG>\n\t\t<COND (<AND <VERB? THROUGH WALK-TO>\n\t\t\t    <EQUAL? ,PRSO ,PSEUDO-OBJECT>>\n\t\t       <PERFORM ,V?WALK-TO ,BARN>\n\t\t       <RTRUE>)\n\t\t      (<VERB? EXAMINE>\n\t\t       <TELL\n\"This is a well-kept, red-and-white-painted horse barn.\" CR>)>)>>"
  },
  "NOT-HERE-OBJECT-F": {
   "name": "NOT-HERE-OBJECT-F",
   "file": "things.zil",
   "line": 30,
   "endLine": 70,
   "source": "<ROUTINE NOT-HERE-OBJECT-F (\"AUX\" TBL (PRSO? T) OBJ)\n\t;\"Protocol: return T if case was handled and msg TELLed,\n\t\t\t  <> if PRSO/PRSI ready to use\"\n\t<COND ;\"This COND is game independent (except the TELL)\"\n\t       (<AND <EQUAL? ,PRSO ,NOT-HERE-OBJECT>\n\t\t     <EQUAL? ,PRSI ,NOT-HERE-OBJECT>>\n\t\t<TELL \"Those things aren't\">\n\t\t<TELL-HERE>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSO ,NOT-HERE-OBJECT>\n\t\t<SET TBL ,P-PRSO>)\n\t       (T\n\t\t<SET TBL ,P-PRSI>\n\t\t<SET PRSO? <>>)>\n\t <COND (.PRSO?\n\t\t<COND (<VERB? ASK-CONTEXT-ABOUT ASK-CONTEXT-FOR CLIMB-UP\n\t\t\t      EXAMINE FIND FOLLOW SEARCH SEARCH-OBJECT-FOR\n\t\t\t      WHAT PHONE MAKE THROUGH WALK-TO WAIT-FOR ARREST\n\t\t\t      ACCUSE ANALYZE FINGERPRINT>\n\t\t       <COND (<SET OBJ <FIND-NOT-HERE .TBL .PRSO?>>\n\t\t\t      <COND (<NOT <==? .OBJ ,NOT-HERE-OBJECT>>\n\t\t\t\t     <RTRUE>)>)\n\t\t\t     (T\n\t\t\t      <RFALSE>)>)\n\t\t      (<VERB? TELL>\n\t\t       <SETG P-CONT <>>\n\t\t       <SETG QUOTE-FLAG <>>)>)\n\t       (T\n\t\t<COND (<VERB? ASK-ABOUT ASK-FOR SAY\n\t\t\t      SEARCH-OBJECT-FOR SGIVE TELL-ME>\n\t\t       <COND (<SET OBJ <FIND-NOT-HERE .TBL .PRSO?>>\n\t\t\t      <COND (<NOT <==? .OBJ ,NOT-HERE-OBJECT>>\n\t\t\t\t     <RTRUE>)>)\n\t\t\t     (T\n\t\t\t      <RFALSE>)>)>)>\n\t ;\"Here is the default 'cant see any' printer\"\n\t <SETG P-WON <>>\n\t <TELL-CANT-SEE \"any\">\n\t <NOT-HERE-PRINT>\n\t <TELL-HERE>\n\t <RTRUE>>"
  },
  "TELL-CANT-SEE": {
   "name": "TELL-CANT-SEE",
   "file": "things.zil",
   "line": 72,
   "endLine": 73,
   "source": "<ROUTINE TELL-CANT-SEE (STR)\n\t <TELL ,YOU-CANT-SEE .STR>>"
  },
  "TELL-HERE": {
   "name": "TELL-HERE",
   "file": "things.zil",
   "line": 75,
   "endLine": 76,
   "source": "<ROUTINE TELL-HERE ()\n\t <TELL \" here.\" CR>>"
  },
  "FIND-NOT-HERE": {
   "name": "FIND-NOT-HERE",
   "file": "things.zil",
   "line": 78,
   "endLine": 159,
   "source": "<ROUTINE FIND-NOT-HERE (TBL PRSO? \"AUX\" M-F OBJ (CNT 0) PB? (LOCAL 0))\n\t;\"Protocol: return T if case was handled and msg TELLed,\n\t    ,NOT-HERE-OBJECT if 'can't see' msg TELLed,\n\t\t\t  <> if PRSO/PRSI ready to use\"\n\t;\"Here is where special-case code goes. <MOBY-FIND .TBL> returns\n\t   number of matches. If 1, then P-MOBY-FOUND is it. One may treat\n\t   the 0 and >1 cases alike or different. It doesn't matter. Always\n\t   return RFALSE (not handled) if you have resolved the problem.\"\n\t<SET M-F <MOBY-FIND .TBL>>\n\t%<DEBUG-CODE\n\t  <COND (,HDEBUG\n\t\t <TELL \"[Moby-found \" N .M-F \" objects\" \"]\" CR>)>>\n\t<COND (<G? .M-F 1>\n\t       <SET PB? <IN-BALLROOM? ,PLAYER>>\n\t       <REPEAT ()\n\t\t       <COND (<G? <SET CNT <+ .CNT 1>> .M-F>\n\t\t\t      <RETURN>)>\n\t\t       <SET OBJ <GET .TBL .CNT>>\n\t\t       <COND (<OR <AND .PB? <IN-BALLROOM? .OBJ>>\n\t\t\t\t  <CORRIDOR-LOOK .OBJ>>\n\t\t\t      <COND (<G? <SET LOCAL <+ .LOCAL 1>> 1>\n\t\t\t\t     <RETURN>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <SETG P-MOBY-FOUND .OBJ>)>)>>\n\t       <COND (<EQUAL? .LOCAL 1>\n\t\t      <SET M-F 1>)>)>\n\t<COND (<==? .M-F 1>\n\t       %<DEBUG-CODE \n\t\t <COND (,HDEBUG\n\t\t\t<TELL \"[Namely: \" D ,P-MOBY-FOUND \"]\" CR>)>>\n\t       <COND (.PRSO? <SETG PRSO ,P-MOBY-FOUND>)\n\t\t     (T <SETG PRSI ,P-MOBY-FOUND>)>\n\t       <RFALSE>)\n\t      (<G? .M-F 1>\n\t       <COND (<VERB? EXAMINE> <RETURN ,NOT-HERE-OBJECT>)\n\t\t     (<SET OBJ\n\t\t\t   <APPLY <GETP <SET OBJ <GET .TBL 1>>\n\t\t\t\t\t,P?GENERIC>\n\t\t\t\t  .OBJ>>\n\t\t      <COND (<==? .OBJ ,NOT-HERE-OBJECT> <RTRUE>)\n\t\t\t    (.PRSO? <SETG PRSO .OBJ>)\n\t\t\t    (T <SETG PRSI .OBJ>)>)\n\t\t     (<NOT ,P-NAM>\n\t\t      <TELL-NO-NOUNS>\n\t\t      <RTRUE>)\n\t\t     (ELSE\n\t\t      <WHICH-PRINT 0 .M-F .TBL>\n\t\t      <SETG P-ACLAUSE\n\t\t\t     <COND (<==? .TBL ,P-PRSO> ,P-NC1)\n\t\t\t\t   (T ,P-NC2)>>\n\t\t      <SETG P-AADJ ,P-ADJ>\n\t\t      <SETG P-ANAM ,P-NAM>\n\t\t      <ORPHAN <> <>>\n\t\t      <SETG P-OFLAG T>\n\t\t      <RTRUE>)>)\n\t      (<OR <AND <NOT .PRSO?>\n\t\t\t<FSET? ,PRSO ,PERSON>\n\t\t\t<VERB? ASK-ABOUT ASK-FOR TELL-ME WHAT-IS-WAS>>\n\t\t   <AND .PRSO?\n\t\t\t<VERB? ASK-CONTEXT-ABOUT ASK-CONTEXT-FOR>>\n\t\t   <AND <NOT <==? ,WINNER ,PLAYER>>\n\t\t\t<VERB? WALK-TO FOLLOW FIND WHAT GIVE SGIVE>>>\n\t       <COND (<NOT <EQUAL? ,WINNER ,PLAYER>>\n\t\t      <TELL CD ,WINNER>)\n\t\t     (<AND <VERB? ASK-ABOUT ASK-FOR TELL-ME>\n\t\t\t   <NOT <EQUAL? ,PRSO ,PLAYER ,CORPSE>>>\n\t\t      <TELL CD ,PRSO>)\n\t\t     (ELSE\n\t\t      <TELL-ISNT-ANYONE>\n\t\t      <RTRUE>)>\n\t       <TELL\n\" looks confused. \">\n\t       <I-DONT-KNOW-ABOUT \"any\" <>>\n\t       <NOT-HERE-PRINT>\n\t       <TELL \"!\\\"\" CR>\n\t       <RTRUE>)\n\t      (<NOT .PRSO?>\n\t       <TELL \"You wouldn't find any\">\n\t       <NOT-HERE-PRINT>\n\t       <TELL \" there.\" CR>\n\t       <RTRUE>)\n\t      (T ,NOT-HERE-OBJECT)>>"
  },
  "NOT-HERE-PRINT": {
   "name": "NOT-HERE-PRINT",
   "file": "things.zil",
   "line": 161,
   "endLine": 168,
   "source": "<ROUTINE NOT-HERE-PRINT ()\n <COND (<OR ,P-OFLAG ,P-MERGED>\n\t<COND (,P-XADJ <TELL \" \"> <PRINTB ,P-XADJN>)>\n\t<COND (,P-XNAM <TELL \" \"> <PRINTB ,P-XNAM>)>)\n       (<EQUAL? ,PRSO ,NOT-HERE-OBJECT>\n\t<BUFFER-PRINT <GET ,P-ITBL ,P-NC1> <GET ,P-ITBL ,P-NC1L> <>>)\n       (T\n\t<BUFFER-PRINT <GET ,P-ITBL ,P-NC2> <GET ,P-ITBL ,P-NC2L> <>>)>>"
  },
  "THE?": {
   "name": "THE?",
   "file": "things.zil",
   "line": 189,
   "endLine": 193,
   "source": "<ROUTINE THE? (NOUN)\n\t <COND (<OR <EQUAL? .NOUN ,IT ,YOU ,HIM-HER>\n\t\t    <FSET? .NOUN ,PERSON>>\n\t\t<RTRUE>)\n\t       (T <TELL \" the\">)>>"
  },
  "THIS-IS-IT": {
   "name": "THIS-IS-IT",
   "file": "things.zil",
   "line": 195,
   "endLine": 200,
   "source": "<ROUTINE THIS-IS-IT (OBJ)\n\t %<DEBUG-CODE\n\t   <COND (,IDEBUG\n\t\t  <TELL \"[It's \" D .OBJ \"]\" CR>)>>\n\t <SETG P-IT-OBJECT .OBJ>\n\t <SETG P-IT-LOC ,HERE>>"
  },
  "WEATHER-F": {
   "name": "WEATHER-F",
   "file": "things.zil",
   "line": 216,
   "endLine": 241,
   "source": "<ROUTINE WEATHER-F ()\n\t <COND (<VERB? EXAMINE FIND LISTEN>\n\t\t<COND (<AND <NOT <OUTSIDE? ,HERE>>\n\t\t\t    <NOT <GLOBAL-IN? ,WINDOW ,HERE>>>\n\t\t       <TELL-YOU-CANT \"see the outside from here\">)\n\t\t      (<L? ,PRESENT-TIME 550>\n\t\t       <TELL\n\"The rain is pouring down. It's a great night for ducks!\" CR>)\n\t\t      (<L? ,PRESENT-TIME 570>\n\t\t       <SETG SAW-RAIN-SLACK-OFF? T>\n\t\t       <TELL\n\"The rain has slacked off, it's just a drizzle now.\" CR>)\n\t\t      (<L? ,PRESENT-TIME 630>\n\t\t       <TELL\n\"The rain is coming down in buckets\">\n\t\t       <COND (,SAW-RAIN-SLACK-OFF? <TELL \" again\">)>\n\t\t       <TELL \".\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"The rain is almost stopped, and the storm seems to be passing off to the\nnortheast.\" CR>)>)\n\t       (<VERB? RUB>\n\t\t<COND (<OUTSIDE? ,HERE>\n\t\t       <TELL \"It's wet.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL-YOU-CANT \"touch that\">)>)>>"
  },
  "I-RAIN-SLOWS": {
   "name": "I-RAIN-SLOWS",
   "file": "things.zil",
   "line": 245,
   "endLine": 251,
   "source": "<ROUTINE I-RAIN-SLOWS ()\n\t <SETG RAIN-STATE 1>\n\t <COND (<OUTSIDE? ,HERE>\n\t\t<SETG SAW-RAIN-SLACK-OFF? T>\n\t\t<TELL\n\"Now the rain has slowed. It's just a light shower now.\" CR>\n\t\t<RFALSE>)>>"
  },
  "I-RAIN-POURS": {
   "name": "I-RAIN-POURS",
   "file": "things.zil",
   "line": 253,
   "endLine": 258,
   "source": "<ROUTINE I-RAIN-POURS ()\n\t <SETG RAIN-STATE 2>\n\t <COND (<OUTSIDE? ,HERE>\n\t\t<TELL\n\"Now the rain is coming down in torrents, a real cloudburst.\" CR>\n\t\t<RFALSE>)>>"
  },
  "I-RAIN-STOPS": {
   "name": "I-RAIN-STOPS",
   "file": "things.zil",
   "line": 260,
   "endLine": 266,
   "source": "<ROUTINE I-RAIN-STOPS ()\n\t <SETG RAIN-STATE 0>\n\t <COND (<OUTSIDE? ,HERE>\n\t\t<TELL\n\"Now the rain has slowed down almost to a stop. Only a few drops\nare falling now.\" CR>\n\t\t<RFALSE>)>>"
  },
  "WATER-F": {
   "name": "WATER-F",
   "file": "things.zil",
   "line": 287,
   "endLine": 290,
   "source": "<ROUTINE WATER-F ()\n\t <COND (<VERB? WALK>\n\t\t<PERFORM ,V?LAMP-ON ,WATER>\n\t\t<RTRUE>)>>"
  },
  "TELEPHONE-F": {
   "name": "TELEPHONE-F",
   "file": "things.zil",
   "line": 299,
   "endLine": 308,
   "source": "<ROUTINE TELEPHONE-F ()\n\t <COND (<VERB? REPLY>\n\t\t<TELL \"It wasn't ringing.\" CR>)\n\t       (<VERB? TAKE>\n\t\t<TELL \"You hear a dial tone.\" CR>)\n\t       (<AND <VERB? PHONE> <EQUAL? ,PRSO ,TELEPHONE>>\n\t\t<TELL ,YOU-SHOULD \"dial a number, such as 911.\" CR>)\n\t       (<VERB? HANG-UP>\n\t\t<DISABLE <INT I-HANG-UP>>\n\t\t<TELL \"You replace the receiver.\" CR>)>>"
  },
  "SINK-F": {
   "name": "SINK-F",
   "file": "things.zil",
   "line": 324,
   "endLine": 326,
   "source": "<ROUTINE SINK-F ()\n\t <COND (<AND <VERB? BRUSH> <EQUAL? ,PRSO ,HANDS>>\n\t\t<TELL \"Your hands are now clean.\" CR>)>>"
  },
  "SHOWER-F": {
   "name": "SHOWER-F",
   "file": "things.zil",
   "line": 336,
   "endLine": 340,
   "source": "<ROUTINE SHOWER-F ()\n\t <COND (<VERB? TAKE LAMP-ON>\n\t\t<TELL \"You'd get your costume all wet.\" CR>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<TELL ,THERE-IS \"no blood in the shower.\" CR>)>>"
  },
  "TOILET-F": {
   "name": "TOILET-F",
   "file": "things.zil",
   "line": 350,
   "endLine": 359,
   "source": "<ROUTINE TOILET-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<EQUAL? .RARG ,M-END> <RFALSE>)\n\t       (<EQUAL? ,PRSO ,TOILET>\n\t\t<COND (<VERB? WALK USE>\n\t\t       <TELL \"You now feel refreshed.\" CR>)\n\t\t      (<VERB? LOOK-INSIDE SMELL>\n\t\t       <TELL\n\"The toilet is immaculate. Nosey, aren't you?\" CR>)\n\t\t      (<VERB? FLUSH>\n\t\t       <TELL ,YOU-ARE \"a model and considerate guest.\" CR>)>)>>"
  },
  "GLOBAL-ROOM-F": {
   "name": "GLOBAL-ROOM-F",
   "file": "things.zil",
   "line": 382,
   "endLine": 391,
   "source": "<ROUTINE GLOBAL-ROOM-F ()\n\t <COND (<VERB? EXAMINE LOOK-ON>\n\t\t<PERFORM ,V?LOOK>\n\t\t<RTRUE>)\n\t       (<VERB? SEARCH-OBJECT-FOR>\n\t\t<PERFORM ,V?FIND ,PRSI>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUT> <EQUAL? ,PRSI ,GLOBAL-ROOM>>\n\t\t<PERFORM ,V?DROP ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "GLOBAL-MURDER-F": {
   "name": "GLOBAL-MURDER-F",
   "file": "things.zil",
   "line": 401,
   "endLine": 442,
   "source": "<ROUTINE GLOBAL-MURDER-F (\"AUX\" OW)\n\t <COND (<AND <VERB? TELL-ME>\n\t\t     <EQUAL? ,WINNER ,PLAYER>\n\t\t     <EQUAL? ,PRSI ,GLOBAL-MURDER>>\n\t\t<PERFORM ,V?REVEAL ,GLOBAL-MURDER ,PRSO>\n\t\t%<DEBUG-CODE\n\t\t  <COND (<AND ,GOSSIP <NOT <FSET? ,PLAYER ,TOLD>>>\n\t\t\t <TELL \"[Murder: Player revealed to self?]\" CR>)>>\n\t\t<FSET ,PLAYER ,TOLD>\n\t\t%<DEBUG-CODE\n\t\t  <COND (<AND ,GOSSIP <NOT <FSET? ,PRSO ,TOLD>>>\n\t\t\t <TELL\n\"[Murder: Player revealed to \" D ,PRSO \"]\" CR>)>>\n\t\t<FSET ,PRSO ,TOLD>\n\t\t<RTRUE>)\n\t       (<AND <VERB? $REVEAL>\n\t\t     <EQUAL? ,PRSO ,GLOBAL-MURDER>>\n\t\t<REVEAL-MURDER ,PRSI>\n\t\t%<DEBUG-CODE\n\t\t  <COND (<AND ,GOSSIP <NOT <FSET? ,WINNER ,TOLD>>>\n\t\t\t <TELL\n\"[Murder: \" D ,WINNER \" revealed to self?]\" CR>)>>\n\t\t<FSET ,WINNER ,TOLD>\n\t\t<COND (<IN? ,PRSI ,HERE>\n\t\t       <TELL\nCD ,WINNER \" sees \" D ,PRSI \" and they speak for a few moments. \"\nCD ,PRSI \"'s eyes widen as \" HE/SHE ,PRSI \" is told of the murder.\nThere is an apparent conflict between shock and the desire to immediately\ntell someone else about it.\" CR>)\n\t\t      (<NEARBY? ,PRSI>\n\t\t       <TELL\nCD ,WINNER \" is speaking excitedly and urgently to \" D ,PRSI \" some\ndistance away. You can't hear what is being said, but \" D ,PRSI \" is\nvery agitated by what \" HE/SHE ,PRSI \" has heard.\" CR>)>\n\t\t<RTRUE>)\n\t       (<AND <VERB? IS>\n\t\t     <EQUAL? ,PRSO ,VERONICA ,CORPSE ,GLOBAL-VERONICA>\n\t\t     <NOT <EQUAL? ,PLAYER ,WINNER>>>\n\t\t<SET OW ,WINNER>\n\t\t<SETG WINNER ,PLAYER>\n\t\t<PERFORM ,V?REVEAL ,GLOBAL-MURDER .OW>\n\t\t<RTRUE>)>>"
  },
  "GLASS-F": {
   "name": "GLASS-F",
   "file": "things.zil",
   "line": 464,
   "endLine": 487,
   "source": "<ROUTINE GLASS-F (\"AUX\" (W ,WINNER))\n\t <COND (<AND <VERB? TAKE> <IN? ,GLASS ,BUTLER>>\n\t\t<SETG WINNER ,BUTLER>\n\t\t<PERFORM ,V?GIVE ,GLASS .W>\n\t\t<SETG WINNER .W>) \n\t       (<AND <VERB? CUT> <EQUAL? ,PRSO ,PLAYER>>\n\t\t<TELL\n\"Suicide is not the answer.\" CR>)\n\t       (<VERB? SMELL>\n\t\t<TELL\n,THERE-IS \"something on the glass which smells sweet -- probably the remains\nof \" 'VERONICA \"'s drink.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"This is a large fragment of \" 'GLASS \" from a highball glass.\nThere is a film of red liquid on the inside.\" CR>)\n\t       (<VERB? ANALYZE>\n\t\t<COND (<EQUAL? ,PRSI ,GLOBAL-FINGERPRINTS>\n\t\t       <TELL ,YOU-DONT-HAVE \"the equipment.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"Since you're not a psychiatrist or a laboratory chemist, your chances\nof a successful analysis are poor. Perhaps you should get someone more\ncompetent to do the job.\" CR>)>)>>"
  },
  "LIQUID-F": {
   "name": "LIQUID-F",
   "file": "things.zil",
   "line": 497,
   "endLine": 500,
   "source": "<ROUTINE LIQUID-F ()\n\t <COND (<VERB? EXAMINE EAT SMELL RUB>\n\t\t<TELL\n\"This seems to be the remains of \" 'VERONICA \"'s drink.\" CR>)>>"
  },
  "SHOP-F": {
   "name": "SHOP-F",
   "file": "things.zil",
   "line": 529,
   "endLine": 540,
   "source": "<ROUTINE SHOP-F ()\n\t <COND (<VERB? PHONE>\n\t\t<COND (<G? ,PRESENT-TIME 600>\n\t\t       <TELL\n\"The telephone rings continuously for as long as you wait.\" CR>)\n\t\t      (ELSE\n\t\t       <MOVE ,JACK ,HERE>\n\t\t       <ENABLE <QUEUE I-HANG-UP 5>>\n\t\t       <TELL\n\"A tired-sounding voice answers. \\\"Costumes Unlimited, Jack\nspeaking. We're closing at ten. We don't have many costumes left.\nBetter make it quick.\\\"\" CR>)>)>>"
  },
  "I-HANG-UP": {
   "name": "I-HANG-UP",
   "file": "things.zil",
   "line": 542,
   "endLine": 546,
   "source": "<ROUTINE I-HANG-UP ()\n\t <COND (<IN? ,JACK ,HERE>\n\t\t<REMOVE ,JACK>\n\t\t<TELL\n\"You hear a click as the telephone is hung up at the other end.\" CR>)>>"
  },
  "JACK-F": {
   "name": "JACK-F",
   "file": "things.zil",
   "line": 554,
   "endLine": 583,
   "source": "<ROUTINE JACK-F ()\n\t <COND (<NOT <IN? ,JACK ,HERE>>\n\t\t<TELL \"He hung up.\" CR>)\n\t       (<OR <EQUAL? ,JACK ,WINNER>\n\t\t    <VERB? $CALL>>\n\t\t<COND (<VERB? SGIVE TELL-ME> <RFALSE>)\n\t\t      (ELSE\n\t\t       <TELL \"\\\"Get to the point, I'm busy.\\\"\" CR>)>)\n\t       (<VERB? TAKE EXAMINE>\n\t\t<TELL \"Jack's on the telephone, not\">\n\t\t<TELL-HERE>)\n\t       (<AND <VERB? ASK-ABOUT> <EQUAL? ,PRSO ,JACK>>\n\t\t<COND (<==? ,PRSI ,GLOBAL-VERONICA ,VERONICA ,CORPSE>\n\t\t       <COND (<NOT ,JACK-ASKED?>\n\t\t\t      <SETG JACK-ASKED? T>\n\t\t\t      <TELL\n\"\\\"\" 'VERONICA \" Ashcroft, eh? Upper crust type, right? Yeah, she rented \" A\n,FAIRY-COSTUME \". Real expensive. Great costume, though.\\\"\" CR>)\n\t\t\t     (ELSE <TELL ,REPEATING-YOURSELF CR>)>)\n\t\t      (<==? ,PRSI ,FAIRY-COSTUME>\n\t\t       <COND (<NOT ,JACK-ASKED?>\n\t\t\t      <SETG JACK-ASKED? T>\n\t\t\t      <TELL\n\"\\\"Yeah, we rented one of them. Some society dame rented it. Just a minute,\nI can tell you who...\\\"  There is a short pause. \\\"Yeah, here she is.\n\" 'VERONICA \" Ashcroft, one Titania costume, a hundred and twenty dollars.\nWe don't get much call for that one. Heck of a costume, though.\\\"\" CR>)\n\t\t\t     (ELSE <TELL ,REPEATING-YOURSELF CR>)>)\n\t\t      (T\n\t\t       <TELL \"\\\"Get to the point, I'm busy.\\\"\" CR>)>)>>"
  },
  "JACKSON-F": {
   "name": "JACKSON-F",
   "file": "things.zil",
   "line": 597,
   "endLine": 599,
   "source": "<ROUTINE JACKSON-F ()\n\t <COND (<VERB? PHONE>\n\t\t<TELL-NO-ANSWER>)>>"
  },
  "WASTE-BASKET-F": {
   "name": "WASTE-BASKET-F",
   "file": "things.zil",
   "line": 634,
   "endLine": 647,
   "source": "<ROUTINE WASTE-BASKET-F ()\n\t <COND (<AND <VERB? LOOK-INSIDE EXAMINE SEARCH SEARCH-OBJECT-FOR>\n\t\t     <EQUAL? ,PRSO ,WASTE-BASKET>>\n\t\t<COND (<IN? ,CARD ,WASTE-BASKET>\n\t\t       <FCLEAR ,CARD ,NDESCBIT>\n\t\t       <FSET ,CARD ,TAKEBIT>\n\t\t       <TELL\n\"A crumpled \" 'CARD \" is on top\">)\n\t\t      (ELSE\n\t\t       <TELL\n\"It's nearly full\">)>\n\t\t<TELL \" of boring trash\">\n\t\t<PRINT-CONTENTS ,WASTE-BASKET \", including \" ,CARD>\n\t\t<TELL \".\" CR>)>>"
  },
  "TAXI-F": {
   "name": "TAXI-F",
   "file": "things.zil",
   "line": 665,
   "endLine": 669,
   "source": "<ROUTINE TAXI-F ()\n\t <COND (<VERB? PHONE>\n\t\t<TELL\n\"Since this is late on a rainy, disgusting night, the taxi company has\nall its telephones off the hook. Too bad.\" CR>)>>"
  },
  "HANDS-F": {
   "name": "HANDS-F",
   "file": "things.zil",
   "line": 678,
   "endLine": 684,
   "source": "<ROUTINE HANDS-F ()\n\t <COND (<VERB? BRUSH>\n\t\t<COND (<GLOBAL-IN? ,SINK ,HERE>\n\t\t       <PERFORM ,V?BRUSH ,HANDS ,SINK>\n\t\t       <RTRUE>)\n\t\t      (ELSE\n\t\t       <TELL \"There are sinks in the bathrooms.\" CR>)>)>>"
  },
  "FOOD-F": {
   "name": "FOOD-F",
   "file": "things.zil",
   "line": 694,
   "endLine": 702,
   "source": "<ROUTINE FOOD-F ()\n\t <COND (<VERB? THROW THROW-AT THROW-THROUGH>\n\t\t<TELL \"This isn't \\\"Animal House.\\\"\" CR>)\n\t       (<VERB? TAKE>\n\t\t<TELL\n\"I suppose you plan to take it home in your pockets and eat it later?\" CR>)\n\t       (<VERB? EAT SMELL>\n\t\t<TELL\n\"Not bad. Obviously \" 'VERONICA \" found a good caterer.\" CR>)>>"
  },
  "GLOBAL-CHAIR-F": {
   "name": "GLOBAL-CHAIR-F",
   "file": "things.zil",
   "line": 722,
   "endLine": 737,
   "source": "<ROUTINE GLOBAL-CHAIR-F (\"OPTIONAL\" (RARG <>))\n\t <COND (<EQUAL? .RARG ,M-BEG ,M-END> <RFALSE>)\n\t       (<AND <VERB? TAKE> <EQUAL? ,PRSO ,GLOBAL-CHAIR>>\n\t\t<TELL ,RIDICULOUS CR>)\n\t       (<AND <VERB? PUT> <EQUAL? ,PRSI ,GLOBAL-CHAIR ,GLOBAL-SOFA>>\n\t\t<FCLEAR ,PRSO ,WEARBIT>\n\t\t<MOVE ,PRSO ,HERE>\n\t\t<TELL\n\"It seems a shame to mar \" THE ,PRSI \" with \" A ,PRSO \", so you put it on\nthe floor instead.\" CR>)\n\t       (<AND <VERB? SIT>\n\t\t     <EQUAL? ,PRSO ,GLOBAL-CHAIR ,GLOBAL-SOFA>\n\t\t     <HELD? ,CORPSE>>\n\t\t<TELL CTHE ,PRSO \" can't take that much weight.\" CR>)\n\t       (<AND <VERB? HIDE-BEHIND> <NOT ,PLAYER-HIDING>>\n\t\t<NOW-CONCEALED>)>>"
  },
  "NOW-CONCEALED": {
   "name": "NOW-CONCEALED",
   "file": "things.zil",
   "line": 739,
   "endLine": 743,
   "source": "<ROUTINE NOW-CONCEALED ()\n\t <SETG PLAYER-HIDING ,PRSO>\n\t <TELL\n,YOU-ARE \"now concealed behind \">\n\t <TELL-PRSO>>"
  },
  "CURTAINS-F": {
   "name": "CURTAINS-F",
   "file": "things.zil",
   "line": 752,
   "endLine": 776,
   "source": "<ROUTINE CURTAINS-F ()\n\t <COND (<NOT <GLOBAL-IN? ,CURTAINS ,HERE>>\n\t\t<TELL \"There are no curtains\">\n\t\t<TELL-HERE>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<COND (<FSET? ,HERE ,OPENBIT>\n\t\t       <TELL \"You see darkness.\" CR>)\n\t\t      (T <TELL \"The curtains are closed.\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"The curtains are \">\n\t\t<COND (<FSET? ,HERE ,OPENBIT> <TELL \"open\">)\n\t\t      (T <TELL \"closed\">)>\n\t\t<TELL \".\" CR>)\n\t       (<VERB? OPEN>\n\t\t<COND (<FSET? ,HERE ,OPENBIT>\n\t\t       <TELL ,THEY-ARE-ALREADY \"open.\" CR>)\n\t\t      (ELSE\n\t\t       <FSET ,HERE ,OPENBIT>\n\t\t       <TELL ,CURTAINS-ARE \"open.\" CR>)>)\n\t       (<VERB? CLOSE>\n\t\t<COND (<NOT <FSET? ,HERE ,OPENBIT>>\n\t\t       <TELL ,THEY-ARE-ALREADY \"closed.\" CR>)\n\t\t      (ELSE\n\t\t       <FCLEAR ,HERE ,OPENBIT>\n\t\t       <TELL ,CURTAINS-ARE \"closed.\" CR>)>)>>"
  },
  "WINDOW-F": {
   "name": "WINDOW-F",
   "file": "things.zil",
   "line": 788,
   "endLine": 799,
   "source": "<ROUTINE WINDOW-F ()\n\t <COND (<VERB? OPEN CLOSE>\n\t\t<TELL\n\"All the windows are closed and locked. The house has a reasonably\nserious security setup.\" CR>)\n\t       (<VERB? LOOK-INSIDE LOOK-OUTSIDE>\n\t\t<COND (<OR <FSET? ,HERE ,OPENBIT>\n\t\t\t   <NOT <GLOBAL-IN? ,CURTAINS ,HERE>>>\n\t\t       <PERFORM ,V?EXAMINE ,WEATHER>\n\t\t       <RTRUE>)\n\t\t      (ELSE\n\t\t       <TELL \"The curtains are drawn.\" CR>)>)>>"
  },
  "GLOBAL-PLANTS-F": {
   "name": "GLOBAL-PLANTS-F",
   "file": "things.zil",
   "line": 808,
   "endLine": 818,
   "source": "<ROUTINE GLOBAL-PLANTS-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"These are \">\n\t\t<COND (<EQUAL? ,HERE ,PORCH>\n\t\t       <TELL \"small potted shrubs, bushes\">)\n\t\t      (T\n\t\t       <TELL \"large shrubs, bushes, trees\">)>\n\t\t<TELL \", and so on.\" ,DOING-WELL CR>)\n\t       (<VERB? TAKE MUNG EAT>\n\t\t<TELL-CARE>)>>"
  },
  "HOUSE-F": {
   "name": "HOUSE-F",
   "file": "things.zil",
   "line": 828,
   "endLine": 836,
   "source": "<ROUTINE HOUSE-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<COND (<OUTSIDE? ,HERE>\n\t\t       <TELL\n\"It's dark, but you know that the Ashcroft house is a large, mostly\ncolonial structure. It was extensively rebuilt in the late nineteenth\ncentury. It is partly brick, and partly white-painted wood.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The house is in good repair.\" CR>)>)>>"
  },
  "KEY-F": {
   "name": "KEY-F",
   "file": "things.zil",
   "line": 845,
   "endLine": 847,
   "source": "<ROUTINE KEY-F ()\n\t <COND (<VERB? FIND>\n\t\t<TELL \"I don't know where the keys are.\" CR>)>>"
  },
  "STAIR-F": {
   "name": "STAIR-F",
   "file": "things.zil",
   "line": 856,
   "endLine": 862,
   "source": "<ROUTINE STAIR-F ()\n\t <COND (<VERB? CLIMB-FOO CLIMB-UP>\n\t\t<DO-WALK ,P?UP>\n\t\t<RTRUE>)\n\t       (<VERB? CLIMB-DOWN>\n\t\t<DO-WALK ,P?DOWN>\n\t\t<RTRUE>)>>"
  },
  "PARTY-F": {
   "name": "PARTY-F",
   "file": "things.zil",
   "line": 871,
   "endLine": 874,
   "source": "<ROUTINE PARTY-F ()\n\t <COND (<VERB? LEAVE>\n\t\t<TELL\n\"Don't be such a wet blanket!\" CR>)>>"
  },
  "V-SCRIPT": {
   "name": "V-SCRIPT",
   "file": "verbs.zil",
   "line": 4,
   "endLine": 8,
   "source": "<ROUTINE V-SCRIPT ()\n\t <PUT 0 8 <BOR <GET 0 8> 1>>\n\t <SCRIPT-STUFF \"begins\">\n\t <V-VERSION>\n\t <RTRUE>>"
  },
  "V-UNSCRIPT": {
   "name": "V-UNSCRIPT",
   "file": "verbs.zil",
   "line": 10,
   "endLine": 13,
   "source": "<ROUTINE V-UNSCRIPT ()\n\t <SCRIPT-STUFF \"ends\">\n\t <PUT 0 8 <BAND <GET 0 8> -2>>\n\t <RTRUE>>"
  },
  "SCRIPT-STUFF": {
   "name": "SCRIPT-STUFF",
   "file": "verbs.zil",
   "line": 15,
   "endLine": 16,
   "source": "<ROUTINE SCRIPT-STUFF (STR)\n\t <TELL \"Script \" .STR \".\" CR>>"
  },
  "V-$VERIFY": {
   "name": "V-$VERIFY",
   "file": "verbs.zil",
   "line": 18,
   "endLine": 26,
   "source": "<ROUTINE V-$VERIFY ()\n\t <COND (<AND <EQUAL? ,PRSO ,INTNUM>\n\t\t     <EQUAL? ,P-NUMBER 1949>>\n\t\t<TELL N ,SERIAL CR>)\n\t       (,PRSO <TELL ,SORRY-I-DONT CR>)\n\t       (ELSE\n\t\t<TELL \"Verifying disk...\" CR>\n\t\t<COND (<VERIFY> <TELL \"The disk is correct.\" CR>)\n\t\t      (T <TELL CR \"** Disk Failure **\" CR>)>)>>"
  },
  "V-AGAIN": {
   "name": "V-AGAIN",
   "file": "verbs.zil",
   "line": 38,
   "endLine": 54,
   "source": "<ROUTINE V-AGAIN (\"AUX\" OBJ)\n\t <COND (<NOT ,L-PRSA>\n\t\t<TELL \"Not yet.\" CR>)\n\t       (<==? ,L-PRSA ,V?WALK>\n\t\t<PERFORM ,L-PRSA ,L-PRSO>)\n\t       (T\n\t\t<SET OBJ\n\t\t     <COND (<AND ,L-PRSO <NOT <LOC ,L-PRSO>>>\n\t\t\t    ,L-PRSO)\n\t\t\t   (<AND ,L-PRSI <NOT <LOC ,L-PRSO>>>\n\t\t\t    ,L-PRSI)>>\n\t\t<COND (<AND .OBJ \n\t\t\t    <NOT <EQUAL? .OBJ ,PSEUDO-OBJECT ,ROOMS>>>\n\t\t       <TELL \"I can't see \" THE .OBJ \" anymore.\" CR>\n\t\t       <RFATAL>)\n\t\t      (T\n\t\t       <PERFORM ,L-PRSA ,L-PRSO ,L-PRSI>)>)>>"
  },
  "V-BRIEF": {
   "name": "V-BRIEF",
   "file": "verbs.zil",
   "line": 56,
   "endLine": 60,
   "source": "<ROUTINE V-BRIEF ()\n\t <SETG VERBOSE <>>\n\t <SETG SUPER-BRIEF <>>\n\t <SETG P-SPACE 1>\n\t <TELL \"Brief\" ,DESCRIPTIONS CR>>"
  },
  "V-SUPER-BRIEF": {
   "name": "V-SUPER-BRIEF",
   "file": "verbs.zil",
   "line": 62,
   "endLine": 66,
   "source": "<ROUTINE V-SUPER-BRIEF ()\n\t <SETG SUPER-BRIEF T>\n\t <SETG P-SPACE 0>\n\t <TELL\n\"Super-brief\" ,DESCRIPTIONS CR>>"
  },
  "V-VERBOSE": {
   "name": "V-VERBOSE",
   "file": "verbs.zil",
   "line": 68,
   "endLine": 72,
   "source": "<ROUTINE V-VERBOSE ()\n\t <SETG VERBOSE T>\n\t <SETG SUPER-BRIEF <>>\n\t <SETG P-SPACE 1>\n\t <TELL \"Verbose\" ,DESCRIPTIONS CR>>"
  },
  "V-SPACE": {
   "name": "V-SPACE",
   "file": "verbs.zil",
   "line": 78,
   "endLine": 79,
   "source": "<ROUTINE V-SPACE ()\n\t <SETG P-SPACE 1>>"
  },
  "V-UNSPACE": {
   "name": "V-UNSPACE",
   "file": "verbs.zil",
   "line": 81,
   "endLine": 83,
   "source": "<ROUTINE V-UNSPACE ()\n\t <SETG P-SPACE 0>\n\t <RTRUE>>"
  },
  "V-INVENTORY": {
   "name": "V-INVENTORY",
   "file": "verbs.zil",
   "line": 85,
   "endLine": 89,
   "source": "<ROUTINE V-INVENTORY ()\n\t <COND (<AND <FIRST? ,WINNER> <PRINT-CONT ,WINNER>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL ,YOU-ARE \"empty-handed.\" CR>)>>"
  },
  "V-TIME": {
   "name": "V-TIME",
   "file": "verbs.zil",
   "line": 91,
   "endLine": 94,
   "source": "<ROUTINE V-TIME ()\n\t <TELL \"It's now \">\n\t <TIME-PRINT ,PRESENT-TIME>\n\t <CRLF>>"
  },
  "TIME-PRINT": {
   "name": "TIME-PRINT",
   "file": "verbs.zil",
   "line": 96,
   "endLine": 109,
   "source": "<ROUTINE TIME-PRINT (NUM \"OPTIONAL\" (AMPM T) \"AUX\" HR (AM <>))\n\t #DECL ((NUM HR) FIX (AM) <OR FALSE ATOM>)\n\t <COND (<G? <SET HR </ .NUM 60>> 12>\n\t\t<SET HR <- .HR 12>>\n\t\t<SET AM T>)\n\t       (<==? .HR 12> <SET AM T>)>\n\t <PRINTN .HR>\n\t <TELL \":\">\n\t <COND (<L? <SET HR <MOD .NUM 60>> 10>\n\t\t<TELL \"0\">)>\n\t <TELL N .HR>\n\t <COND (.AMPM\n\t\t<TELL \" \" <COND (.AM \"a.m\") (T \"p.m\")>>)>\n\t <TELL \".\">>"
  },
  "QUIT-WARNING": {
   "name": "QUIT-WARNING",
   "file": "verbs.zil",
   "line": 111,
   "endLine": 116,
   "source": "<ROUTINE QUIT-WARNING ()\n\t <COND (<NOT <EQUAL? ,L-PRSA ,V?SAVE>>\n\t\t<TELL\n\"If you want to continue from this point at another time, you must\n\\\"SAVE\\\" first. \">)>\n\t <TELL ,DO-YOU-WANT-TO \"stop now?\">>"
  },
  "V-QUIT": {
   "name": "V-QUIT",
   "file": "verbs.zil",
   "line": 118,
   "endLine": 125,
   "source": "<ROUTINE V-QUIT (\"OPTIONAL\" (ASK? T) \"AUX\" SCOR)\n\t #DECL ((ASK?) <OR ATOM <PRIMTYPE LIST>> (SCOR) FIX)\n\t <COND (<OR <AND .ASK?\n\t\t\t <QUIT-WARNING>\n\t\t\t <YES?>>\n\t\t    <NOT .ASK?>>\n\t\t<QUIT>)\n\t       (ELSE <TELL \"O.K.\" CR>)>>"
  },
  "V-RESTART": {
   "name": "V-RESTART",
   "file": "verbs.zil",
   "line": 127,
   "endLine": 132,
   "source": "<ROUTINE V-RESTART ()\n\t <TELL\n\"Do you wish to restart the story?\">\n\t <COND (<YES?>\n\t\t<RESTART>\n\t\t<TELL-STATUS \"original\">)>>"
  },
  "TELL-STATUS": {
   "name": "TELL-STATUS",
   "file": "verbs.zil",
   "line": 134,
   "endLine": 135,
   "source": "<ROUTINE TELL-STATUS (STR)\n<TELL \"Your \" .STR \" status couldn't be restored.\" ,CONSULT CR>>"
  },
  "V-RESTORE": {
   "name": "V-RESTORE",
   "file": "verbs.zil",
   "line": 137,
   "endLine": 142,
   "source": "<ROUTINE V-RESTORE ()\n\t <COND (<RESTORE>\n\t\t<TELL \"O.K.\" CR>\n\t\t<V-FIRST-LOOK>)\n\t       (T\n\t\t<TELL-STATUS \"previous\">)>>"
  },
  "V-FIRST-LOOK": {
   "name": "V-FIRST-LOOK",
   "file": "verbs.zil",
   "line": 146,
   "endLine": 148,
   "source": "<ROUTINE V-FIRST-LOOK ()\n\t <COND (<DESCRIBE-ROOM>\n\t\t<COND (<NOT ,SUPER-BRIEF> <DESCRIBE-OBJECTS>)>)>>"
  },
  "V-SAVE": {
   "name": "V-SAVE",
   "file": "verbs.zil",
   "line": 150,
   "endLine": 155,
   "source": "<ROUTINE V-SAVE ()\n\t <COND (<SAVE>\n\t        <TELL \"O.K.\" CR>)\n\t       (T\n\t\t<TELL\n\"Your story couldn't be saved.\" ,CONSULT CR>)>>"
  },
  "V-VERSION": {
   "name": "V-VERSION",
   "file": "verbs.zil",
   "line": 157,
   "endLine": 174,
   "source": "<ROUTINE V-VERSION (\"AUX\" (CNT 17))\n\t <TELL\n\"SUSPECT|\nInfocom interactive fiction - a mystery story|\nCopyright (c) 1984 Infocom, Inc.  All rights reserved.|\n\">\n\t ;<COND (<NOT <==? <BAND <GETB 0 1> 8> 0>>\n\t\t<TELL \"Licensed to Tandy Corporation.\" CR>)>\n\t <TELL \"SUSPECT is a registered trademark of Infocom, Inc.|\nRelease number \">\n\t <PRINTN <BAND <GET 0 1> *3777*>>\n\t <TELL \" / Serial number \">\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> 23>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<PRINTC <GETB 0 .CNT>>)>>\n\t <CRLF>>"
  },
  "YES?": {
   "name": "YES?",
   "file": "verbs.zil",
   "line": 180,
   "endLine": 195,
   "source": "<ROUTINE YES? (\"OPTIONAL\" (RESTORE? <>) \"AUX\" W)\n\t <REPEAT ()\n\t\t <PRINTI \" (Answer YES\">\n\t\t <COND (.RESTORE? <PRINTI \" or RESTORE\">)>\n\t\t <TELL \" or NO\">\n\t\t <PRINTI \".) >\">\n\t\t <READ ,Y-INBUF ,Y-LEXV>\n\t\t <COND (<0? <GETB ,Y-LEXV ,P-LEXWORDS>>\n\t\t\t<RFALSE>)>\n\t\t <SET W <GET ,Y-LEXV 1>>\n\t\t <COND (<AND .RESTORE? <EQUAL? .W ,W?RESTORE>>\n\t\t\t<RFATAL>)\n\t\t       (<EQUAL? .W ,W?YES ,W?Y>\n\t\t\t<RTRUE>)\n\t\t       (<EQUAL? .W ,W?NO ,W?N>\n\t\t\t<RFALSE>)>>>"
  },
  "DESCRIBE-OBJECT": {
   "name": "DESCRIBE-OBJECT",
   "file": "verbs.zil",
   "line": 204,
   "endLine": 240,
   "source": "<ROUTINE DESCRIBE-OBJECT (OBJ V? LEVEL \"AUX\" (STR <>) AV)\n\t <COND (<AND <0? .LEVEL>\n\t\t     <FSET? .OBJ ,PERSON>\n\t\t     <IN-MOTION? .OBJ>>\n\t\t<RTRUE>)>\n\t <COND (<AND <0? .LEVEL>\n\t\t     <APPLY <GETP .OBJ ,P?DESCFCN> ,M-OBJDESC>>\n\t\t<RTRUE>)>\n\t ;<COND (<FSET? .OBJ ,PERSON> <THIS-IS-S-HE .OBJ>)\n\t       (T <THIS-IS-IT .OBJ>)>\n\t <COND (<AND <0? .LEVEL>\n\t\t     <OR <AND <NOT <FSET? .OBJ ,TOUCHBIT>>\n\t\t\t      <SET STR <GETP .OBJ ,P?FDESC>>>\n\t\t\t <SET STR <GETP .OBJ ,P?LDESC>>>>\n\t\t<TELL .STR>)\n\t       (<0? .LEVEL>\n\t\t<COND (<FSET? .OBJ ,PERSON>\n\t\t       <TELL CD .OBJ \" is\">)\n\t\t      (T\n\t\t       <TELL \"There's \" A .OBJ>)>\n\t\t<TELL \" here.\">)\n\t       (ELSE\n\t\t<TELL <GET ,INDENTS .LEVEL>>\n\t\t<COND (<OR <FSET? .OBJ ,PERSON> <EQUAL? .OBJ ,CORPSE>>\n\t\t       <TELL D .OBJ>)\n\t\t      (T\n\t\t       <TELL A .OBJ>\n\t\t       <COND (<FSET? .OBJ ,WEARBIT>\n\t\t\t      <TELL \" (being worn)\">)>)>)>\n\t <COND (<AND <0? .LEVEL>\n\t\t     <SET AV <LOC ,WINNER>>\n\t\t     <FSET? .AV ,VEHBIT>\n\t\t     <NOT <FSET? .AV ,FURNITURE>>>\n\t\t<TELL \" (outside \" THE .AV \")\">)>\n\t <CRLF>\n\t <COND (<AND <SEE-INSIDE? .OBJ> <FIRST? .OBJ>>\n\t\t<PRINT-CONT .OBJ .V? .LEVEL>)>>"
  },
  "DESCRIBE-OBJECTS": {
   "name": "DESCRIBE-OBJECTS",
   "file": "verbs.zil",
   "line": 242,
   "endLine": 244,
   "source": "<ROUTINE DESCRIBE-OBJECTS (\"OPTIONAL\" (V? <>))\n\t <COND (<FIRST? ,HERE>\n\t\t<PRINT-CONT ,HERE <SET V? <OR .V? ,VERBOSE>> -1>)>>"
  },
  "DESCRIBE-ROOM": {
   "name": "DESCRIBE-ROOM",
   "file": "verbs.zil",
   "line": 246,
   "endLine": 291,
   "source": "<ROUTINE DESCRIBE-ROOM (\"OPTIONAL\" (LOOK? <>) \"AUX\" V? (F? <>) STR L)\n\t <SET V? <OR .LOOK? ,VERBOSE>>\n\t <COND (<NOT <FSET? ,HERE ,TOUCHBIT>>\n\t\t<FSET ,HERE ,TOUCHBIT>\n\t\t<SET V? T>\n\t\t<SET F? T>)>\n\t <COND (<EQUAL? <GETP ,HERE ,P?LINE>\n\t\t\t,BALLROOM-LINE-C>\n\t\t<TELL \"Ballroom, \">)>\n\t <TELL D ,HERE>\n\t <SET L ,PLAYER-HIDING>\n\t <COND (.L\n\t\t<TELL \", hiding \">\n\t\t<COND (<EQUAL? .L ,WINDOW-SEAT> <TELL \"in \">)\n\t\t      (T <TELL \"behind \">)>\n\t\t<TELL THE .L>)\n\t       (<FSET? <SET L <LOC ,WINNER>> ,VEHBIT>\n\t\t<TELL \", \">\n\t\t<COND (<EQUAL? .L ,CHAIR ,GLOBAL-CHAIR>\n\t\t       <TELL \"sitting in\">)\n\t\t      (<OR <FSET? .L ,SURFACEBIT>\n\t\t\t   <EQUAL? .L ,GLOBAL-SOFA>>\n\t\t       <TELL \"sitting on\">)\n\t\t      (T <TELL \"standing in\">)>\n\t\t<TELL \" \" THE .L>)>\n\t <CRLF>\n\t <COND (<OR .LOOK? <NOT ,SUPER-BRIEF>>\n\t\t<COND (<AND <OUTSIDE? ,HERE>\n\t\t\t    <NOT <OUTSIDE? ,OHERE>>\n\t\t\t    <NOT <EQUAL? ,RAIN-STATE 0>>>\n\t\t       <COND (<EQUAL? ,RAIN-STATE 1>\n\t\t\t      <SETG SAW-RAIN-SLACK-OFF? T>\n\t\t\t      <TELL \"Rain is falling in a light drizzle.\">)\n\t\t\t     (ELSE <TELL \"Rain falls in a downpour.\">)>\n\t\t       <CRLF>)>\n\t\t<COND (<AND .V? <APPLY <GETP ,HERE ,P?ACTION> ,M-LOOK>>\n\t\t       <RTRUE>)\n\t\t      (<AND .V? <SET STR <GETP ,HERE ,P?FDESC>>>\n\t\t       <TELL .STR CR>)\n\t\t      (<AND .V? <SET STR <GETP ,HERE ,P?LDESC>>>\n\t\t       <TELL .STR CR>)\n\t\t      (T <APPLY <GETP ,HERE ,P?ACTION> ,M-FLASH>)>\n\t\t<COND (<NOT <==? ,HERE .L>>\n\t\t       <APPLY <GETP .L ,P?ACTION> ,M-LOOK>)>)>\n\t <COND (<GETP ,HERE ,P?CORRIDOR> <CORRIDOR-LOOK>)>\n\t T>"
  },
  "FIRSTER": {
   "name": "FIRSTER",
   "file": "verbs.zil",
   "line": 308,
   "endLine": 321,
   "source": "<ROUTINE FIRSTER (OBJ LEVEL)\n\t <COND (<==? .OBJ ,WINNER>\n\t\t<TELL ,YOU-ARE \"carrying:\" CR>)\n\t       (<NOT <IN? .OBJ ,ROOMS>>\n\t\t<COND (<G? .LEVEL 0>\n\t\t       <TELL <GET ,INDENTS .LEVEL>>)>\n\t\t<COND (<AND <FSET? .OBJ ,SURFACEBIT>\n\t\t\t    <NOT <EQUAL? .OBJ ,WINDOW-SEAT>>>\n\t\t       <TELL \"Sitting on \" THE .OBJ \" can be seen:\" CR>)\n\t\t      (<FSET? .OBJ ,PERSON>\n\t\t       <TELL CD .OBJ \" is holding:\" CR>)\n\t\t      (ELSE\n\t\t       <TELL CTHE .OBJ\n\t\t\t     \" contains:\" CR>)>)>>"
  },
  "GONE-CRAZY": {
   "name": "GONE-CRAZY",
   "file": "verbs.zil",
   "line": 323,
   "endLine": 326,
   "source": "<ROUTINE GONE-CRAZY ()\n\t <TELL\n\"Murder or no murder, this gets you arrested for sure!\" CR>\n\t <FINISH>>"
  },
  "GOTO": {
   "name": "GOTO",
   "file": "verbs.zil",
   "line": 330,
   "endLine": 357,
   "source": "<ROUTINE GOTO (RM \"OPTIONAL\" (V? T) \"AUX\" F WT VAL (INSIDE? <>))\n\t #DECL ((RM) OBJECT)\n\t <COND (,DUFFY-SNARFED\n\t\t<IRON-GRIP>\n\t\t<RTRUE>)>\n\t <PLAYER-GETS-UP>\n\t <COND (<AND <G? ,RAIN-STATE 0> <OUTSIDE? .RM>>\n\t\t<COND (<OUTSIDE? ,HERE>\n\t\t       <TELL\n\"It's\">)\n\t\t      (T\n\t\t       <SET INSIDE? T>\n\t\t       <TELL\n\"You go outside, where it's\">)>\n\t\t<TELL\n\" dark and cloudy, and the territory is unfamiliar.\" CR>\n\t\t<COND (.INSIDE? <CRLF>)\n\t\t      (<NOT <SET VAL <INT-WAIT 2>>>\n\t\t       <TELL \"You stop.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<OR <==? .VAL ,M-FATAL>\n\t\t\t   ,DUFFY-SNARFED>\n\t\t       <RTRUE>)\n\t\t      (ELSE\n\t\t       <TELL \"You finally get there.\" CR CR>)>)>\n\t <MOVE-PLAYER .RM>\n\t <APPLY <GETP ,HERE ,P?ACTION> ,M-ENTER>\n\t <COND (.V? <V-FIRST-LOOK>)>>"
  },
  "MOVE-PLAYER": {
   "name": "MOVE-PLAYER",
   "file": "verbs.zil",
   "line": 359,
   "endLine": 363,
   "source": "<ROUTINE MOVE-PLAYER (RM)\n\t <SETG OHERE ,HERE>\n\t <MOVE ,PLAYER .RM>\n\t <SETG HERE .RM>\n\t <WHERE-UPDATE ,PLAYER>>"
  },
  "HACK-HACK": {
   "name": "HACK-HACK",
   "file": "verbs.zil",
   "line": 365,
   "endLine": 369,
   "source": "<ROUTINE HACK-HACK (STR)\n\t <COND (<IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t<NOT-HERE ,PRSO>)\n\t       (T\n\t\t<TELL .STR \" \" THE ,PRSO <PICK-ONE ,HO-HUM> CR>)>>"
  },
  "HELD?": {
   "name": "HELD?",
   "file": "verbs.zil",
   "line": 376,
   "endLine": 385,
   "source": "<ROUTINE HELD? (OBJ \"OPTIONAL\" (CONT <>))\n\t <COND (<NOT .CONT> <SET CONT ,WINNER>)>\n\t <COND (<NOT .OBJ>\n\t\t<RFALSE>)\n\t       (<IN? .OBJ .CONT>\n\t\t<RTRUE>)\n\t       (<EQUAL? <LOC .OBJ> ,ROOMS ,GLOBAL-OBJECTS>\n\t\t<RFALSE>)\n\t       (T\n\t\t<HELD? <LOC .OBJ>>)>>"
  },
  "IDROP": {
   "name": "IDROP",
   "file": "verbs.zil",
   "line": 387,
   "endLine": 403,
   "source": "<ROUTINE IDROP ()\n\t <COND (<FSET? ,PRSO ,PERSON>\n\t\t<TELL CD ,PRSO \" wouldn't enjoy that.\" CR>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? ,PRSO ,WINNER>>\n\t\t     <NOT <IN? <LOC ,PRSO> ,WINNER>>>\n\t\t<TELL ,YOU-ARENT \"carrying \">\n\t\t<TELL-PRSO>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? ,PRSO ,WINNER>>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<TELL-CLOSED>\n\t\t<RFALSE>)\n\t       (T\n\t\t<FCLEAR ,PRSO ,WEARBIT>\n\t\t<MOVE ,PRSO ,HERE ;<LOC ,WINNER>>\n\t\t<RTRUE>)>>"
  },
  "ITAKE": {
   "name": "ITAKE",
   "file": "verbs.zil",
   "line": 416,
   "endLine": 441,
   "source": "<ROUTINE ITAKE (\"OPTIONAL\" (VB T) \"AUX\" CNT OBJ)\n\t #DECL ((VB) <OR ATOM FALSE> (CNT) FIX (OBJ) OBJECT)\n\t <COND (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t\t<COND (.VB\n\t\t       <TELL-YOU-CANT \"take \" <>>\n\t\t       <TELL-PRSO>)>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? <LOC ,PRSO> ,WINNER>>\n\t\t     <G? <+ <WEIGHT ,PRSO> <WEIGHT ,WINNER>> ,LOAD-ALLOWED>>\n\t\t<COND (.VB\n\t\t       <COND (<G? <WEIGHT ,PRSO> ,LOAD-ALLOWED>\n\t\t\t      <TELL \"It's too heavy to carry\">)\n\t\t\t     (T\n\t\t\t      <TELL \"Your load's too heavy\">)>\n\t\t       <TELL \".\" CR>)>\n\t\t<RFATAL>)\n\t       (<G? <SET CNT <CCOUNT ,WINNER>> ,FUMBLE-NUMBER>\n\t\t<COND (.VB\n\t\t       <TELL-YOU-CANT \"carry that many things at once\">)>\n\t\t<RFATAL>)\n\t       (T\n\t\t<MOVE ,PRSO ,WINNER>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<FCLEAR ,PRSO ,NDESCBIT>\n\t\t<FCLEAR ,PRSO ,INVISIBLE>\n\t\t<RTRUE>)>>"
  },
  "CCOUNT": {
   "name": "CCOUNT",
   "file": "verbs.zil",
   "line": 443,
   "endLine": 450,
   "source": "<ROUTINE CCOUNT (OBJ \"AUX\" (CNT 0) X)\n\t <COND (<SET X <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT <FSET? .X ,WEARBIT>>\n\t\t\t       <SET CNT <+ .CNT 1>>)>\n\t\t\t<COND (<NOT <SET X <NEXT? .X>>>\n\t\t\t       <RETURN>)>>)>\n\t .CNT>"
  },
  "NOT-HERE": {
   "name": "NOT-HERE",
   "file": "verbs.zil",
   "line": 452,
   "endLine": 455,
   "source": "<ROUTINE NOT-HERE (OBJ)\n\t <SETG P-WON <>>\n\t <TELL ,YOU-CANT-SEE THE .OBJ>\n\t <TELL-HERE>>"
  },
  "PRINT-CONT": {
   "name": "PRINT-CONT",
   "file": "verbs.zil",
   "line": 459,
   "endLine": 514,
   "source": "<ROUTINE PRINT-CONT (OBJ \"OPTIONAL\" (V? <>) (LEVEL 0)\n\t\t     \"AUX\" Y 1ST? AV (STR <>) (PV? <>) (INV? <>))\n\t#DECL ((OBJ) OBJECT (LEVEL) FIX)\n <COND (<NOT <SET Y <FIRST? .OBJ>>> <RTRUE>)>\n <COND (<AND <SET AV <LOC ,WINNER>>\n\t     <FSET? .AV ,VEHBIT>\n\t     <OR <NOT <FSET? .AV ,FURNITURE>>\n\t\t <FSET? .AV ,OPENBIT>>>\n\tT)\n       (ELSE <SET AV <>>)>\n <SET 1ST? T>\n <COND (<EQUAL? ,WINNER .OBJ <LOC .OBJ>>\n\t<SET INV? T>)\n       (ELSE\n\t<REPEAT ()\n\t <COND (<NOT .Y> <RETURN <NOT .1ST?>>)\n\t       (<==? .Y .AV> <SET PV? T>)\n\t       (<==? .Y ,WINNER>)\n\t       (<AND <NOT <FSET? .Y ,INVISIBLE>>\n\t\t     <NOT <FSET? .Y ,TOUCHBIT>>\n\t\t     <OR ;<APPLY <GETP .Y ,P?DESCFCN> ,M-OBJDESC>\n\t\t\t <SET STR <GETP .Y ,P?FDESC>>>>\n\t\t<COND (<NOT <FSET? .Y ,NDESCBIT>>\n\t\t       <SET 1ST? <>>\n\t\t       <SET LEVEL 0>\n\t\t       <COND (.STR\n\t\t\t      <TELL .STR CR>\n\t\t\t      <SET STR <>>\n\t\t\t      <COND (<FSET? .Y ,PERSON> <THIS-IS-S-HE .Y>)\n\t\t\t\t    (T <THIS-IS-IT .Y>)>)>)>\n\t\t<COND (<AND <SEE-INSIDE? .Y>\n\t\t\t    <NOT <GETP <LOC .Y> ,P?DESCFCN>>\n\t\t\t    <FIRST? .Y>>\n\t\t       <PRINT-CONT .Y .V? 0>)>)>\n\t <SET Y <NEXT? .Y>>>)>\n <SET Y <FIRST? .OBJ>>\n <REPEAT ()\n\t <COND (<NOT .Y>\n\t\t<COND (<AND .PV? .AV <FIRST? .AV>>\n\t\t       <PRINT-CONT .AV .V? .LEVEL>)>\n\t\t<RETURN <NOT .1ST?>>)\n\t       (<EQUAL? .Y .AV ,PLAYER>)\n\t       (<AND <NOT <FSET? .Y ,INVISIBLE>>\n\t\t     <OR .INV?\n\t\t\t <FSET? .Y ,TOUCHBIT>\n\t\t\t <NOT <GETP .Y ,P?FDESC>>>>\n\t\t<COND (<NOT <FSET? .Y ,NDESCBIT>>\n\t\t       <COND (.1ST?\n\t\t\t      <COND (<FIRSTER .OBJ .LEVEL>\n\t\t\t\t     <COND (<L? .LEVEL 0> <SET LEVEL 0>)>)>\n\t\t\t      <SET LEVEL <+ 1 .LEVEL>>\n\t\t\t      <SET 1ST? <>>)>\n\t\t       <DESCRIBE-OBJECT .Y .V? .LEVEL>)\n\t\t      (<AND <FIRST? .Y> <SEE-INSIDE? .Y>>\n\t\t       <PRINT-CONT .Y .V? .LEVEL>)>)>\n\t <SET Y <NEXT? .Y>>>>"
  },
  "PRINT-CONTENTS": {
   "name": "PRINT-CONTENTS",
   "file": "verbs.zil",
   "line": 516,
   "endLine": 538,
   "source": "<ROUTINE PRINT-CONTENTS (OBJ \"OPTIONAL\" (START <>) (NOT-OBJ <>)\n\t\t\t \"AUX\" F N (1ST? T))\n\t #DECL ((OBJ) OBJECT (F N) <OR FALSE OBJECT>)\n\t <COND (<SET F <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<SET N <NEXT? .F>>\n\t\t\t<COND (<AND <NOT <FSET? .F ,INVISIBLE>>\n\t\t\t\t    <NOT <EQUAL? .F .NOT-OBJ>>>\n\t\t\t       <COND (.1ST?\n\t\t\t\t      <COND (.START <TELL .START>)>\n\t\t\t\t      <SET 1ST? <>>)\n\t\t\t\t     (ELSE\n\t\t\t\t      <TELL \", \">\n\t\t\t\t      <COND (<NOT .N> <TELL \"and \">)>)>\n\t\t\t       <COND (<FSET? .F ,PERSON>\n\t\t\t\t      <TELL D .F>)\n\t\t\t\t     (T\n\t\t\t\t      <TELL A .F>)>\n\t\t\t       <COND (<FSET? .F ,PERSON> <THIS-IS-S-HE .F>)\n\t\t\t\t     (T <THIS-IS-IT .F>)>)>\n\t\t\t<SET F .N>\n\t\t\t<COND (<NOT .F>\n\t\t\t       <RETURN <NOT .1ST?>>)>>)>>"
  },
  "ROOM-CHECK": {
   "name": "ROOM-CHECK",
   "file": "verbs.zil",
   "line": 543,
   "endLine": 556,
   "source": "<ROUTINE ROOM-CHECK ()\n\t <COND (<IN? ,PRSO ,ROOMS>\n\t\t<COND (<EQUAL? ,PRSO ,HERE ,GLOBAL-HERE>\n\t\t       <PERFORM ,PRSA ,GLOBAL-ROOM ,PRSI>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL ,YOU-ARENT \"in that place!\" CR>\n\t\t       <RTRUE>)>)\n\t       (<OR <EQUAL? ,PRSO ,PSEUDO-OBJECT>\n\t\t    <EQUAL? <META-LOC ,PRSO> ,HERE ,GLOBAL-OBJECTS>\n\t\t    <GLOBAL-IN? ,PRSO ,HERE>>\n\t\t<RFALSE>)\n\t       (T\n\t\t<NOT-HERE ,PRSO>)>>"
  },
  "META-LOC": {
   "name": "META-LOC",
   "file": "verbs.zil",
   "line": 558,
   "endLine": 570,
   "source": "<ROUTINE META-LOC (OBJ)\n\t <COND (<AND <EQUAL? .OBJ ,PLAYER>\n\t\t     <FSET? <LOC .OBJ> ,VEHBIT>>\n\t\t,HERE)\n\t       (ELSE\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT .OBJ> <RFALSE>)\n\t\t\t      (<EQUAL? .OBJ ,GLOBAL-OBJECTS ,LOCAL-GLOBALS>\n\t\t\t       <RETURN .OBJ>)>\n\t\t\t<COND (<IN? .OBJ ,ROOMS>\n\t\t\t       <RETURN .OBJ>)\n\t\t\t      (ELSE\n\t\t\t       <SET OBJ <LOC .OBJ>>)>>)>>"
  },
  "SEE-INSIDE?": {
   "name": "SEE-INSIDE?",
   "file": "verbs.zil",
   "line": 572,
   "endLine": 574,
   "source": "<ROUTINE SEE-INSIDE? (OBJ)\n\t <AND <NOT <FSET? .OBJ ,INVISIBLE>>\n\t      <OR <FSET? .OBJ ,TRANSBIT> <FSET? .OBJ ,OPENBIT>>>>"
  },
  "WEIGHT": {
   "name": "WEIGHT",
   "file": "verbs.zil",
   "line": 578,
   "endLine": 588,
   "source": "<ROUTINE WEIGHT\n\t (OBJ \"AUX\" CONT (WT 0))\n\t #DECL ((OBJ) OBJECT (CONT) <OR FALSE OBJECT> (WT) FIX)\n\t <COND (<FSET? .OBJ ,WEARBIT> 0)\n\t       (T\n\t\t<COND (<SET CONT <FIRST? .OBJ>>\n\t\t       <REPEAT ()\n\t\t\t       <SET WT <+ .WT <WEIGHT .CONT>>>\n\t\t\t       <COND (<NOT <SET CONT <NEXT? .CONT>>>\n\t\t\t\t      <RETURN>)>>)>\n\t\t<+ .WT <GETP .OBJ ,P?SIZE>>)>>"
  },
  "PRE-ACCUSE": {
   "name": "PRE-ACCUSE",
   "file": "verbs.zil",
   "line": 607,
   "endLine": 617,
   "source": "<ROUTINE PRE-ACCUSE ()\n\t <COND (<NOT ,PRSI>\n\t\t<SETG PRSI ,GLOBAL-MURDER>)>\n\t <COND (<AND <EQUAL? ,PRSI ,GLOBAL-MURDER>\n\t\t     <FSET? ,CORPSE ,INVISIBLE>>\n\t\t<TELL \"Nothing's dead here but your head!\" CR>)\n\t       (<NOT <EQUAL? ,PRSI ,GLOBAL-MURDER ,GLOBAL-EMBEZZLEMENT>>\n\t\t<TELL \"What an accusation!\" CR>)\n\t       (<NOT <FSET? ,PRSO ,PERSON>>\n\t\t<TELL \"Sure! \\\"Quick, Sergeant! Arrest that \"\n\t\t      D ,PRSO \"!\\\"\" CR>)>>"
  },
  "V-ACCUSE": {
   "name": "V-ACCUSE",
   "file": "verbs.zil",
   "line": 619,
   "endLine": 620,
   "source": "<ROUTINE V-ACCUSE ()\n\t <TELL CD ,PRSO \" shrugs off your accusation.\" CR>>"
  },
  "V-ANALYZE": {
   "name": "V-ANALYZE",
   "file": "verbs.zil",
   "line": 626,
   "endLine": 632,
   "source": "<ROUTINE V-ANALYZE ()\n\t <COND (<TELL\n,YOU-SHOULD \"leave these tasks to those who can do them best: the police.\">\n\t\t<COND (<NOT <FSET? ,WINNER ,TOLD>>\n\t\t       <TELL\n\" Perhaps you should call them if you wish assistance.\">)>\n\t\t<CRLF>)>>"
  },
  "V-ANSWER": {
   "name": "V-ANSWER",
   "file": "verbs.zil",
   "line": 634,
   "endLine": 638,
   "source": "<ROUTINE V-ANSWER ()\n\t <TELL \"No one was waiting for your answer.\" CR>\n\t <SETG P-CONT <>>\n\t <SETG QUOTE-FLAG <>>\n\t <RTRUE>>"
  },
  "V-REPLY": {
   "name": "V-REPLY",
   "file": "verbs.zil",
   "line": 640,
   "endLine": 646,
   "source": "<ROUTINE V-REPLY ()\n\t <SETG P-CONT <>>\n\t <SETG QUOTE-FLAG <>>\n\t <COND (<FSET? ,PRSO ,DOORBIT>\n\t\t<TELL \"No one's knocking at \">\n\t\t<TELL-PRSO>)\n\t       (T <TELL ,TOO-BAD THE ,PRSO \" doesn't care.\" CR>)>>"
  },
  "PRE-ARREST": {
   "name": "PRE-ARREST",
   "file": "verbs.zil",
   "line": 648,
   "endLine": 652,
   "source": "<ROUTINE PRE-ARREST ()\n\t <COND (<EQUAL? ,WINNER ,PLAYER>\n\t\t<TELL\n\"A citizen's arrest, eh? Those only happen in the movies. \"\n,HAVE-TO \"convince \" THE ,DETECTIVE \" to arrest someone.\" CR>)>>"
  },
  "V-ARREST": {
   "name": "V-ARREST",
   "file": "verbs.zil",
   "line": 654,
   "endLine": 655,
   "source": "<ROUTINE V-ARREST ()\n\t <RTRUE>> "
  },
  "PRE-ASK-ABOUT": {
   "name": "PRE-ASK-ABOUT",
   "file": "verbs.zil",
   "line": 657,
   "endLine": 668,
   "source": "<ROUTINE PRE-ASK-ABOUT ()\n\t <COND (<NOT <FSET? ,PRSO ,PERSON>>\n\t\t<TELL \"Talking to \" A ,PRSO \" again, huh?\" CR>)\n\t       (<EQUAL? ,PRSO ,ME>\n\t\t<TELL \"Talking to yourself, again, huh?\" CR>)\n\t       (<NOT <IN? ,PRSO ,HERE>>\n\t\t<TELL \"You shouldn't shout: \" HE/SHE ,PRSO \"'s not\">\n\t\t<TELL-HERE>)\n\t       (ELSE\n\t\t<SETG QCONTEXT ,PRSO>\n\t\t<SETG QCONTEXT-ROOM ,HERE>\n\t\t<RFALSE>)>>"
  },
  "INTERVIEW-SELF": {
   "name": "INTERVIEW-SELF",
   "file": "verbs.zil",
   "line": 670,
   "endLine": 671,
   "source": "<ROUTINE INTERVIEW-SELF ()\n\t <TELL \"Interviewing yourself again, eh?\" CR>>"
  },
  "V-ASK-ABOUT": {
   "name": "V-ASK-ABOUT",
   "file": "verbs.zil",
   "line": 673,
   "endLine": 681,
   "source": "<ROUTINE V-ASK-ABOUT ()\n\t <COND (<==? ,PRSO ,PLAYER>\n\t\t<INTERVIEW-SELF>)\n\t       (<NOT <FSET? ,PRSO ,PERSON>>\n\t\t<TELL\n\"I've known odd reporters, but none of them ever\ntried to talk to \" A ,PRSO \"!\" CR>)\n\t       (T\n\t\t<TELL CD ,PRSO \" doesn't seem to know about that.\" CR>)>>"
  },
  "PRE-ASK-CONTEXT-ABOUT": {
   "name": "PRE-ASK-CONTEXT-ABOUT",
   "file": "verbs.zil",
   "line": 683,
   "endLine": 691,
   "source": "<ROUTINE PRE-ASK-CONTEXT-ABOUT (\"AUX\" P)\n <COND (<AND ,QCONTEXT\n\t     <==? ,HERE ,QCONTEXT-ROOM>\n\t     <==? ,HERE <META-LOC ,QCONTEXT>>>\n\t<PERFORM ,V?ASK-ABOUT ,QCONTEXT ,PRSO>\n\t<RTRUE>)\n       ;(<SET P <FIND-FLAG ,HERE ,PERSON ,WINNER>>\n\t<PERFORM ,V?ASK-ABOUT .P ,PRSO>\n\t<RTRUE>)>>"
  },
  "V-ASK-CONTEXT-ABOUT": {
   "name": "V-ASK-CONTEXT-ABOUT",
   "file": "verbs.zil",
   "line": 693,
   "endLine": 694,
   "source": "<ROUTINE V-ASK-CONTEXT-ABOUT ()\n\t<TELL-ISNT-ANYONE>>"
  },
  "TELL-ISNT-ANYONE": {
   "name": "TELL-ISNT-ANYONE",
   "file": "verbs.zil",
   "line": 696,
   "endLine": 697,
   "source": "<ROUTINE TELL-ISNT-ANYONE ()\n\t <TELL ,YOU-ARENT \"talking to anyone.\" CR>>"
  },
  "V-ASK-FOR": {
   "name": "V-ASK-FOR",
   "file": "verbs.zil",
   "line": 699,
   "endLine": 709,
   "source": "<ROUTINE V-ASK-FOR ()\n\t <COND (<AND <FSET? ,PRSO ,PERSON>\n\t\t     <NOT <==? ,PRSO ,PLAYER>>>\n\t\t<TELL CD ,PRSO>\n\t\t<COND (<NOT <IN? ,PRSO ,HERE>>\n\t\t       <TELL ,ISNT-HERE CR>)\n\t\t      (<IN? ,PRSI ,PRSO>\n\t\t       <TELL \" refuses, somewhat politely.\" CR>)\n\t\t      (T\n\t\t       <TELL \" doesn't have that.\" CR>)>)\n\t       (T <TELL <PICK-ONE ,YUKS> CR>)>>"
  },
  "PRE-ASK-CONTEXT-FOR": {
   "name": "PRE-ASK-CONTEXT-FOR",
   "file": "verbs.zil",
   "line": 711,
   "endLine": 720,
   "source": "<ROUTINE PRE-ASK-CONTEXT-FOR (\"AUX\" P)\n <COND (<AND <FSET? <SET P <LOC ,PRSO>> ,PERSON>\n\t     <IN? .P ,HERE>>\n\t<PERFORM ,V?ASK-FOR .P ,PRSO>\n\t<RTRUE>)\n       (<AND ,QCONTEXT\n\t     <==? ,HERE ,QCONTEXT-ROOM>\n\t     <==? ,HERE <META-LOC ,QCONTEXT>>>\n\t<PERFORM ,V?ASK-FOR ,QCONTEXT ,PRSO>\n\t<RTRUE>)>>"
  },
  "V-ASK-CONTEXT-FOR": {
   "name": "V-ASK-CONTEXT-FOR",
   "file": "verbs.zil",
   "line": 722,
   "endLine": 723,
   "source": "<ROUTINE V-ASK-CONTEXT-FOR ()\n\t<TELL-ISNT-ANYONE>>"
  },
  "V-ATTACK": {
   "name": "V-ATTACK",
   "file": "verbs.zil",
   "line": 725,
   "endLine": 725,
   "source": "<ROUTINE V-ATTACK () <IKILL>>"
  },
  "V-BRUSH": {
   "name": "V-BRUSH",
   "file": "verbs.zil",
   "line": 727,
   "endLine": 730,
   "source": "<ROUTINE V-BRUSH ()\n <TELL\n\"\\\"Cleanliness is next to Godliness,\\\" but in this case it seems to be\nnext to Impossible.\" CR>>"
  },
  "V-CALL-LOSE": {
   "name": "V-CALL-LOSE",
   "file": "verbs.zil",
   "line": 732,
   "endLine": 733,
   "source": "<ROUTINE V-CALL-LOSE ()\n\t <TELL ,YOU-MUST \"use a verb.\" CR>>"
  },
  "V-$CALL": {
   "name": "V-$CALL",
   "file": "verbs.zil",
   "line": 735,
   "endLine": 758,
   "source": "<ROUTINE V-$CALL (\"AUX\" PER (MOT <>) (HERE? <>))\n\t <COND (<SET PER <CHARACTERIZE? ,PRSO>>\n\t\t<COND (<IN-MOTION? .PER> <SET MOT T>)>\n\t\t<COND (<OR <SET HERE? <==? <META-LOC .PER> ,HERE>>\n\t\t\t   <NEARBY? .PER>>\n\t\t       <TELL CD .PER>\n\t\t       <COND (<AND ,FLEEING?\n\t\t\t\t   <EQUAL? .PER ,MICHAEL ,ALICIA>\n\t\t\t\t   <IN-MOTION? .PER>>\n\t\t\t      <TELL-NO-GRAB>)\n\t\t\t     (<GRAB-ATTENTION .PER>\n\t\t\t      <COND (<OR .MOT <NOT .HERE?>>\n\t\t\t\t     <COND (.MOT <TELL \" stops and\">)>\n\t\t\t\t     <TELL \" turns toward you.\">)\n\t\t\t\t    (ELSE\n\t\t\t\t     <TELL ,LISTENING>)>\n\t\t\t      <CRLF>)\n\t\t\t     (T\n\t\t\t      <TELL-NO-GRAB>)>)\n\t\t      (T\n\t\t       <SETG P-WON <>>\n\t\t       <TELL ,YOU-DONT \"see \" D .PER>\n\t\t       <TELL-HERE>)>)\n\t       (T <V-CALL-LOSE>)>>"
  },
  "TELL-NO-GRAB": {
   "name": "TELL-NO-GRAB",
   "file": "verbs.zil",
   "line": 760,
   "endLine": 761,
   "source": "<ROUTINE TELL-NO-GRAB ()\n\t <TELL ,IGNORES-YOU \" or doesn't hear you.\" CR>>"
  },
  "THERE-DOESNT-SEEM": {
   "name": "THERE-DOESNT-SEEM",
   "file": "verbs.zil",
   "line": 765,
   "endLine": 765,
   "source": "<ROUTINE THERE-DOESNT-SEEM () <TELL \"There doesn't seem to be \">>"
  },
  "PRE-PHONE": {
   "name": "PRE-PHONE",
   "file": "verbs.zil",
   "line": 767,
   "endLine": 770,
   "source": "<ROUTINE PRE-PHONE ()\n\t <COND (,PLAYER-HIDING\n\t\t<PLAYER-EMERGES>\n\t\t<RFALSE>)>>"
  },
  "V-PHONE": {
   "name": "V-PHONE",
   "file": "verbs.zil",
   "line": 772,
   "endLine": 819,
   "source": "<ROUTINE V-PHONE (\"AUX\" PER)\n\t <COND (<NOT <GLOBAL-IN? ,TELEPHONE ,HERE>>\n\t\t<THERE-DOESNT-SEEM>\n\t\t<TELL A ,TELEPHONE>\n\t\t<TELL-HERE>)\n\t       (<AND <FSET? ,PRSO ,PERSON>\n\t\t     <SET PER <CHARACTERIZE ,PRSO>>\n\t\t     <NEARBY? .PER>>\n\t\t<PERFORM ,V?$CALL ,PRSO>\n\t\t<RTRUE>)\n\t       (<AND ,PRSI <NOT <==? ,PRSI ,TELEPHONE>>>\n\t\t<TELL\n,TOO-BAD THE ,PRSI \" isn't a telephone.\" CR>)\n\t       (<==? ,PRSO ,INTNUM>\n\t\t<DISABLE <INT I-HANG-UP>>\n\t\t<COND (<AND <EQUAL? ,P-EXCHANGE 0>\n\t\t\t    <EQUAL? ,P-NUMBER 0>>\n\t\t       <TELL\n\"You dial the operator, who suggests you dial 911.\" CR>)\n\t\t      (<AND <EQUAL? ,P-EXCHANGE 0>\n\t\t\t    <EQUAL? ,P-NUMBER 411>>\n\t\t       <TELL\n\"The information operator, in a honeyed voice, suggests you consult\nyour directory if you need a number.\" CR>)\n\t\t      (<AND <EQUAL? ,P-EXCHANGE 0>\n\t\t\t    <EQUAL? ,P-NUMBER 911>>\n\t\t       <PERFORM ,V?PHONE ,POLICE>\n\t\t       <RTRUE>)\n\t\t      (<AND <EQUAL? ,P-EXCHANGE 555>\n\t\t\t    <EQUAL? ,P-NUMBER 9009>>\n\t\t       <PERFORM ,V?PHONE ,COSTUME-SHOP>)\n\t\t      (<PROB 50>\n\t\t       <TELL-NO-ANSWER>)\n\t\t      (<PROB 50>\n\t\t       <TELL\n\"The telephone is answered. \\\"Hello? Hello? Hey, what is this, a crank call?\\\"\nThe telephone hangs up.\" CR>)\n\t\t      (T\n\t\t       <TELL \"You get a busy signal.\" CR>)>)\n\t       (<IN? ,PRSO ,ROOMS>\n\t\t<TELL-YOU-CANT \"call another room\">)\n\t       (<NOT <FSET? ,PRSO ,PERSON>>\n\t\t<TELL ,TOO-BAD THE ,PRSO \" has no telephone.\" CR>)\n\t       (<IN? ,PRSO ,HERE>\n\t\t<TELL CD ,PRSO \" is right here!\" CR>)\n\t       (T\n\t\t<TELL \"There's no sense in phoning \">\n\t\t<TELL-PRSO>)>>"
  },
  "TELL-ALREADY-ARE": {
   "name": "TELL-ALREADY-ARE",
   "file": "verbs.zil",
   "line": 821,
   "endLine": 822,
   "source": "<ROUTINE TELL-ALREADY-ARE ()\n\t <TELL \"You already are.\" CR>>"
  },
  "V-CLIMB-ON": {
   "name": "V-CLIMB-ON",
   "file": "verbs.zil",
   "line": 824,
   "endLine": 838,
   "source": "<ROUTINE V-CLIMB-ON ()\n\t <COND (<AND <FSET? ,PRSO ,FURNITURE> <FSET? ,PRSO ,VEHBIT>>\n\t\t<COND (<IN? ,PLAYER ,PRSO>\n\t\t       <TELL-ALREADY-ARE>)\n\t\t      (T\n\t\t       <MOVE ,PLAYER ,PRSO>\n\t\t       <TELL\n,YOU-ARE \"now sitting on \">\n\t\t       <TELL-PRSO>)>)\n\t       (<FSET? ,PRSO ,FURNITURE>\n\t\t<TELL \"This isn't the kind of thing to sit on!\" CR>)\n\t       (T\n\t\t<TELL-YOU-CANT\n\"climb onto \" <>>\n\t\t<TELL-PRSO>)>>"
  },
  "V-CLIMB-UP": {
   "name": "V-CLIMB-UP",
   "file": "verbs.zil",
   "line": 840,
   "endLine": 847,
   "source": "<ROUTINE V-CLIMB-UP (DIR \"OPTIONAL\" (OBJ <>) \"AUX\" X)\n\t #DECL ((DIR) FIX (OBJ) <OR ATOM FALSE> (X) TABLE)\n\t <COND (<GETPT ,HERE .DIR>\n\t\t<DO-WALK .DIR>\n\t\t<RTRUE>)\n\t       (<NOT .OBJ>\n\t\t<TELL-YOU-CANT ,GO-THAT-WAY>)\n\t       (ELSE <TELL <PICK-ONE ,YUKS> CR>)>>"
  },
  "TELL-YOU-CANT": {
   "name": "TELL-YOU-CANT",
   "file": "verbs.zil",
   "line": 851,
   "endLine": 853,
   "source": "<ROUTINE TELL-YOU-CANT (STR \"OPTIONAL\" (DONE T))\n\t <TELL \"You can't \" .STR>\n\t <COND (.DONE <TELL \".\" CR>)>>"
  },
  "V-CLIMB-DOWN": {
   "name": "V-CLIMB-DOWN",
   "file": "verbs.zil",
   "line": 855,
   "endLine": 859,
   "source": "<ROUTINE V-CLIMB-DOWN ()\n\t <COND (<AND <FSET? ,PRSO ,FURNITURE> <FSET? ,PRSO ,VEHBIT>>\n\t\t<V-CLIMB-ON>\n\t\t<RTRUE>)\n\t       (T <V-CLIMB-UP ,P?DOWN>)>>"
  },
  "V-CLIMB-FOO": {
   "name": "V-CLIMB-FOO",
   "file": "verbs.zil",
   "line": 861,
   "endLine": 861,
   "source": "<ROUTINE V-CLIMB-FOO () <V-CLIMB-UP ,P?UP T>>"
  },
  "V-CLOSE": {
   "name": "V-CLOSE",
   "file": "verbs.zil",
   "line": 863,
   "endLine": 884,
   "source": "<ROUTINE V-CLOSE ()\n\t <COND (<NOT <OR <FSET? ,PRSO ,CONTBIT>\n\t\t\t <FSET? ,PRSO ,DOORBIT>\n\t\t\t <FSET? ,PRSO ,WINDOWBIT>>>\n\t\t<TELL-MORE-CLEVER>)\n\t       (<OR <FSET? ,PRSO ,DOORBIT>\n\t\t    <FSET? ,PRSO ,WINDOWBIT>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <COND (<FSET? ,PRSO ,RMUNGBIT>\n\t\t\t      <TELL\n\"It won't stay closed. The latch is broken.\" CR>)\n\t\t\t     (T\n\t\t\t      <FCLEAR ,PRSO ,OPENBIT>\n\t\t\t      <TELL\n\"Okay, \" THE ,PRSO \" is now closed.\" CR>)>)\n\t\t      (T <TELL ,ITS-ALREADY \"closed.\" CR>)>)\n\t       (<AND <NOT <FSET? ,PRSO ,SURFACEBIT>>\n\t\t     <NOT <==? <GETP ,PRSO ,P?CAPACITY> 0>>>\n\t\t<OPEN-CLOSE>)\n\t       (ELSE\n\t\t<TELL-YOU-CANT \"close \" <>>\n\t\t<TELL-PRSO>)>>"
  },
  "TELL-UNLOCK-IT": {
   "name": "TELL-UNLOCK-IT",
   "file": "verbs.zil",
   "line": 886,
   "endLine": 888,
   "source": "<ROUTINE TELL-UNLOCK-IT (OBJ)\n\t <THIS-IS-IT .OBJ>\n\t <TELL ,HAVE-TO \"unlock \" THE .OBJ \" first.\" CR>>"
  },
  "OPEN-CLOSE": {
   "name": "OPEN-CLOSE",
   "file": "verbs.zil",
   "line": 890,
   "endLine": 915,
   "source": "<ROUTINE OPEN-CLOSE ()\n\t <COND (<VERB? CLOSE>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <FCLEAR ,PRSO ,OPENBIT>\n\t\t       <TELL \"Closed.\" CR>)\n\t\t      (T <TELL ,ITS-ALREADY \"closed.\" CR>)>)\n\t       (ELSE\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL ,ITS-ALREADY \"open.\" CR>)\n\t\t      (<FSET? ,PRSO ,LOCKED>\n\t\t       <TELL-UNLOCK-IT ,PRSO>)\n\t\t      (<FSET? ,PRSO ,RMUNGBIT>\n\t\t       <TELL-YOU-CANT \"open it. The latch is broken\">)\n\t\t      (T\n\t\t       <FSET ,PRSO ,OPENBIT>\n\t\t       <COND (<OR <FSET? ,PRSO ,DOORBIT>\n\t\t\t\t  <FSET? ,PRSO ,WINDOWBIT>\n\t\t\t\t  <IN? ,WINNER ,PRSO>>\n\t\t\t      <TELL\n\"Okay, \" THE ,PRSO \" is now open.\" CR>)\n\t\t\t     (<OR <NOT <FIRST? ,PRSO>><FSET? ,PRSO ,TRANSBIT>>\n\t\t\t      <TELL \"Opened.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"You open \" THE ,PRSO \" and see \">\n\t\t\t      <PRINT-CONTENTS ,PRSO>\n\t\t\t      <TELL \".\" CR>)>)>)>>"
  },
  "PRE-COMPARE": {
   "name": "PRE-COMPARE",
   "file": "verbs.zil",
   "line": 917,
   "endLine": 925,
   "source": "<ROUTINE PRE-COMPARE ()\n <COND (<AND <NOT ,PRSI>\n\t     <==? 1 <GET ,P-PRSO 0>>>\n\t<TELL \"Oops! Try typing \\\"Compare it to (something).\\\"\" CR>\n\t<RTRUE>)\n       (<==? 2 <GET ,P-PRSO 0>>\n\t<PUT ,P-PRSO 0 1>\n\t<PERFORM ,PRSA <GET ,P-PRSO 1> <GET ,P-PRSO 2>>\n\t<RTRUE>)>>"
  },
  "V-COMPARE": {
   "name": "V-COMPARE",
   "file": "verbs.zil",
   "line": 927,
   "endLine": 929,
   "source": "<ROUTINE V-COMPARE ()\n <COND (<==? ,PRSO ,PRSI> <TELL \"They're the same thing!\" CR>)\n       (T <TELL \"They're not a bit alike.\" CR>)>>"
  },
  "V-CURSES": {
   "name": "V-CURSES",
   "file": "verbs.zil",
   "line": 931,
   "endLine": 939,
   "source": "<ROUTINE V-CURSES ()\n\t <COND (,PRSO\n\t\t<COND (<FSET? ,PRSO ,PERSON>\n\t\t       <TELL\n\"Insults like that won't help you solve the case.\" CR>)\n\t\t      (T\n\t\t       <TELL <PICK-ONE ,YUKS> CR>)>)\n\t       (T\n\t\t<TELL <PICK-ONE ,OFFENDED> CR>)>>"
  },
  "V-MUNG": {
   "name": "V-MUNG",
   "file": "verbs.zil",
   "line": 948,
   "endLine": 966,
   "source": "<ROUTINE V-MUNG ()\n\t <COND (<AND <FSET? ,PRSO ,DOORBIT> <NOT ,PRSI>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL\n\"You'd fly through the open door if you tried.\" CR>)\n\t\t      (<FSET? ,PRSO ,LOCKED>\n\t\t       <TELL \"Oof! All you get is a sore shoulder.\" CR>)\n\t\t      (T <TELL \"Why don't you just open it instead?\" CR>)>)\n\t       (<NOT <FSET? ,PRSO ,PERSON>>\n\t\t<HACK-HACK ,TRYING-DESTROY>)\n\t       (<OR <NOT ,PRSI>\n\t\t    <NOT <FSET? ,PRSI ,WEAPONBIT>>>\n\t\t<TELL ,TRYING-DESTROY THE ,PRSO \" with \">\n\t\t<COND (<NOT ,PRSO>\n\t\t       <TELL \"your bare hands is suicidal.\">)\n\t\t      (T\n\t\t       <TELL A ,PRSI \" is silly.\">)>\n\t\t<CRLF>)\n\t       (T <TELL-YOU-CANT \"do that\">)>>"
  },
  "V-DROP": {
   "name": "V-DROP",
   "file": "verbs.zil",
   "line": 970,
   "endLine": 976,
   "source": "<ROUTINE V-DROP ()\n\t <COND (<IDROP>\n\t\t<TELL \"Okay, \" THE ,PRSO \" is now on the \">\n\t\t<COND (<==? <GETP ,HERE ,P?LINE> ,OUTSIDE-LINE-C>\n\t\t       <TELL \"ground\">)\n\t\t      (T <TELL \"floor\">)>\n\t\t<TELL \".\" CR>)>>"
  },
  "V-DRINK": {
   "name": "V-DRINK",
   "file": "verbs.zil",
   "line": 978,
   "endLine": 979,
   "source": "<ROUTINE V-DRINK ()\n\t <V-EAT>>"
  },
  "V-EAT": {
   "name": "V-EAT",
   "file": "verbs.zil",
   "line": 981,
   "endLine": 998,
   "source": "<ROUTINE V-EAT (\"AUX\" (EAT? <>) (DRINK? <>))\n\t #DECL ((NOBJ) <OR OBJECT FALSE> (EAT? DRINK?) <OR ATOM FALSE>)\n\t <COND (<SET EAT? <FSET? ,PRSO ,FOODBIT>>\n\t\t<COND (<IN? ,PRSO ,WINNER>\n\t\t       <COND (<AND <VERB? DRINK> <G? ,DRINK-COUNT 2>>\n\t\t\t      <TELL\n\"Seems that you've had too much to drink already!\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"Mmm. That really hit the spot.\" CR>)>)\n\t\t      (ELSE\n\t\t       <TELL ,YOU-DONT-HAVE \"that.\" CR>)>)\n\t       (<SET DRINK? <FSET? ,PRSO ,DRINKBIT>>\n\t\t<PERFORM ,V?DRINK ,PRSO>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<TELL\n\"Weren't the hors d'oeuvres enough for you?\" CR>)>>"
  },
  "V-ENTER": {
   "name": "V-ENTER",
   "file": "verbs.zil",
   "line": 1000,
   "endLine": 1002,
   "source": "<ROUTINE V-ENTER ()\n\t<DO-WALK ,P?IN>\n\t<RTRUE>>"
  },
  "V-THROUGH": {
   "name": "V-THROUGH",
   "file": "verbs.zil",
   "line": 1010,
   "endLine": 1050,
   "source": "<ROUTINE V-THROUGH (\"AUX\" RM DIR)\n\t<COND (<IN? ,PRSO ,ROOMS>\n\t       <COND (<==? ,PRSO <META-LOC ,PLAYER>>\n\t\t      <TELL-ALREADY-ARE>)\n\t\t     (<SET DIR <DIR-FROM ,HERE ,PRSO>>\n\t\t      <DO-WALK .DIR>\n\t\t      <RTRUE>)\n\t\t     (<OUTSIDE? ,HERE>\n\t\t      <TELL\n\"It's dark and confusing out here, you'll have to use directions.\" CR>)\n\t\t     (ELSE\n\t\t      <PLAYER-GETS-UP>\n\t\t      <ESTABLISH-GOAL ,PLAYER ,PRSO>\n\t\t      <V-CONTINUE>\n\t\t      <RTRUE>)>)\n\t      (<FSET? ,PRSO ,DOORBIT>\n\t       <COND (<FSET? ,PRSO ,LOCKED>\n\t\t      <TELL-LOCKED>)\n\t\t     (<SET RM <DOOR-ROOM ,HERE ,PRSO>>\n\t\t      <OPEN-DOOR ,PRSO>\n\t\t      <GOTO .RM>)\n\t\t     (T <TELL\n\"Sorry, but the \\\"\" D ,PRSO \"\\\" must be somewhere else.\" CR>)>)\n\t      (<FSET? ,PRSO ,VEHBIT>\n\t       <TELL ,YOU-ARE>\n\t       <COND (<IN? ,PLAYER ,PRSO>\n\t\t      <TELL \"already\">)\n\t\t     (T\n\t\t      <SETG PLAYER-HIDING <>>\n\t\t      <MOVE ,PLAYER ,PRSO>\n\t\t      <TELL \"now\">)>\n\t       <TELL \" in \">\n\t       <TELL-PRSO>)\n\t      (<FSET? ,PRSO ,PERSON>\n\t       <TELL \"A revolting idea.\" CR>)\n\t      (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t       <TELL \"You hit your head against \" THE ,PRSO\n\t\t     \" as you try it.\" CR>)\n\t      (<IN? ,PRSO ,WINNER>\n\t       <TELL ,YOU-MUST \"think you're a contortionist!\" CR>)\n\t      (ELSE <TELL <PICK-ONE ,YUKS> CR>)>>"
  },
  "V-CONTINUE": {
   "name": "V-CONTINUE",
   "file": "verbs.zil",
   "line": 1054,
   "endLine": 1078,
   "source": "<ROUTINE V-CONTINUE (\"AUX\" GT OL WHERE OS OI GF DIR)\n\t <SET GT <GET ,GOAL-TABLES ,PLAYER-C>>\n\t <COND (<GET .GT ,GOAL-S>\n\t\t<SET GF <GET .GT ,GOAL-F>>\n\t\t<TELL\n\"(On your way to \" THE .GF \".)\" CR>\n\t\t<SET OL ,HERE>\n\t\t<SET OI <GET .GT ,GOAL-I>>\n\t\t<FOLLOW-GOAL ,PLAYER>\n\t\t<SET WHERE ,HERE>\n\t\t<COND (<NOT <EQUAL? .OL .WHERE>>\n\t\t       <SET DIR <DIR-FROM .OL .WHERE>>\n\t\t       <MOVE ,PLAYER .OL>\n\t\t       <SETG HERE .OL>\n\t\t       <SET OS <GET .GT ,GOAL-S>>\n\t\t       <DO-WALK .DIR>\n\t\t       <PUT .GT ,GOAL-S .OS>\n\t\t       <COND (<EQUAL? ,HERE .OL>\n\t\t\t      <PUT .GT ,GOAL-I .OI>)>\n\t\t       <COND (<EQUAL? ,HERE .GF>\n\t\t\t      <PUT .GT ,GOAL-S <>>)>)>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<TELL\n\"I suppose you have a destination in mind, but I'm not sure what it is.\" CR>)>>"
  },
  "PRE-EXAMINE": {
   "name": "PRE-EXAMINE",
   "file": "verbs.zil",
   "line": 1080,
   "endLine": 1087,
   "source": "<ROUTINE PRE-EXAMINE (\"AUX\" OW)\n\t <COND (<ROOM-CHECK> <RTRUE>)\n\t       (<NOT <EQUAL? ,WINNER ,PLAYER>>\n\t\t<SET OW ,WINNER>\n\t\t<SETG WINNER ,PLAYER>\n\t\t<PERFORM ,V?SHOW ,PRSO .OW>\n\t\t<SETG WINNER .OW>\n\t\t<RTRUE>)>>"
  },
  "V-EXAMINE": {
   "name": "V-EXAMINE",
   "file": "verbs.zil",
   "line": 1089,
   "endLine": 1105,
   "source": "<ROUTINE V-EXAMINE (\"AUX\" T)\n\t <COND (<OR <IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t    <NOT <EQUAL? <META-LOC ,PRSO> ,HERE ,LOCAL-GLOBALS>>>\n\t\t<COND (<NEARBY? ,PRSO>\n\t\t       <TELL\n\"You ought to get closer, you'd get a better look.\" CR>)\n\t\t      (T\n\t\t       <NOT-HERE ,PRSO>\n\t\t       <RTRUE>)>)\n\t       (<SET T <GETP ,PRSO ,P?TEXT>>\n\t\t<TELL .T CR>)\n\t       (<FSET? ,PRSO ,CONTBIT>\n\t\t<V-LOOK-INSIDE ,P?IN>)\n\t       (ELSE\n\t\t<TELL\n\"There's nothing special about \">\n\t\t<TELL-PRSO>)>>"
  },
  "GLOBAL-IN?": {
   "name": "GLOBAL-IN?",
   "file": "verbs.zil",
   "line": 1107,
   "endLine": 1110,
   "source": "<ROUTINE GLOBAL-IN? (OBJ1 OBJ2 \"AUX\" T)\n\t #DECL ((OBJ1 OBJ2) OBJECT (T) <OR FALSE TABLE>)\n\t <COND (<SET T <GETPT .OBJ2 ,P?GLOBAL>>\n\t\t<ZMEMQB .OBJ1 .T <- <PTSIZE .T> 1>>)>>"
  },
  "PRE-FIND": {
   "name": "PRE-FIND",
   "file": "verbs.zil",
   "line": 1112,
   "endLine": 1206,
   "source": "<ROUTINE PRE-FIND (\"AUX\" CHR NUM)\n\t <COND (<AND <FSET? ,PRSO ,PERSON>\n\t\t     <SET CHR <GETP ,PRSO ,P?CHARACTER>>>\n\t\t<SET NUM <GET <GET ,WHERE-TABLES <GETP ,WINNER ,P?CHARACTER>>\n\t\t\t      .CHR>>\n\t\t<COND (<IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t       <SETG PRSO <GET ,CHARACTER-TABLE .CHR>>)>\n\t\t<COND (<AND <EQUAL? .CHR ,VERONICA-C>\n\t\t\t    <NOT <LOC ,CORPSE>>>\n\t\t       <COND (<==? ,WINNER ,PLAYER>\n\t\t\t      <TELL ,WHAT-DO-YOU-MEAN CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (<OR <AND <==? ,WINNER ,MICHAEL>\n\t\t\t\t       ,MICHAEL-SEEN-CORPSE?>\n\t\t\t\t  <AND <==? ,WINNER ,RICHARD>\n\t\t\t\t       ,RICHARD-SEEN-CORPSE?>>\n\t\t\t      <TELL \"\\\"\" ,WHAT-DO-YOU-MEAN\"\\\"\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (T <RFALSE>)>)>\n\t\t<COND (<AND <NOT <==? ,WINNER ,PLAYER>>\n\t\t\t    <NOT <GRAB-ATTENTION ,WINNER>>>\n\t\t       <RTRUE>)>\n\t\t<COND (<==? <META-LOC ,WINNER> <META-LOC ,PRSO>>\n\t\t       <COND (<==? ,WINNER ,PLAYER>\n\t\t\t      <TELL\n\t\t\"It sounds as though you need your vision checked.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"\\\"Ahem...\\\"\" CR>)>)\n\t\t      (<0? .NUM>\n\t\t       <COND (<==? ,WINNER ,PLAYER>\n\t\t\t      <TELL\n\"You haven't seen \" HIM/HER ,PRSO \" yet.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"\\\"I haven't seen \" HIM/HER ,PRSO \" tonight.\\\"\" CR>)>)\n\t\t      (T\n\t\t       <SET NUM <- ,PRESENT-TIME .NUM>>\n\t\t       <COND (<==? ,WINNER ,PLAYER>\n\t\t\t      <TELL\n\"You last saw \" HIM/HER ,PRSO \" \">)\n\t\t\t     (T\n\t\t\t      <TELL\n\"\\\"I last saw \" HIM/HER ,PRSO \" \">)>\n\t\t       <COND (<AND <EQUAL? ,PRSO ,VERONICA>\n\t\t\t\t   <FSET? ,WINNER ,TOLD>>\n\t\t\t      <TELL \"alive \">)>\n\t\t       <COND (<G? .NUM 120>\n\t\t\t      <TELL \"a few hours\">)\n\t\t\t     (<G? .NUM 80>\n\t\t\t      <TELL \"an hour or two\">)\n\t\t\t     (<G? .NUM 45>\n\t\t\t      <TELL \"about an hour\">)\n\t\t\t     (<G? .NUM 20>\n\t\t\t      <TELL \"about half an hour\">)\n\t\t\t     (<G? .NUM 10>\n\t\t\t      <TELL \"about 15 minutes\">)\n\t\t\t     (<G? .NUM 5>\n\t\t\t      <TELL \"less than 10 minutes\">)\n\t\t\t     (T\n\t\t\t      <TELL \"just a few minutes\">)>\n\t\t       <TELL \" ago.\">\n\t\t       <COND (<NOT <==? ,WINNER ,PLAYER>>\n\t\t\t      <TELL \" I don't know where \">\n\t\t\t      <TELL HE/SHE ,PRSO \" is now.\\\"\">)>\n\t\t       <CRLF>)>\n\t\t<RTRUE>)\n\t       (<AND <EQUAL? ,PRSO ,YOU>\n\t\t     <NOT <EQUAL? ,PRSI ,INTNUM>>>\n\t\t<PERFORM ,PRSA ,PRSI>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSO ,POLICE> <RFALSE>)\n\t       (<FSET? ,PRSO ,PERSON>\n\t\t<COND (<NOT <EQUAL? ,WINNER ,PLAYER>>\n\t\t       <TELL \"\\\"\">)>\n\t\t<TELL \"I don't remember where \">\n\t\t<COND (<EQUAL? ,PRSO ,ME ,PLAYER>\n\t\t       <TELL \"you are\">)\n\t\t      (T <TELL THE ,PRSO \" is\">)>\n\t\t<TELL \".\">\n\t\t<COND (<NOT <EQUAL? ,WINNER ,PLAYER>>\n\t\t       <TELL \"\\\"\">)>\n\t\t<CRLF>\n\t\t<RTRUE>)\n\t       (<NOT <EQUAL? ,PLAYER ,WINNER>> <RFALSE>)\n\t       (<IN? ,PRSO ,ROOMS>\n\t\t<COND (<==? ,PRSO ,HERE>\n\t\t       <TELL-ALREADY-ARE>)\n\t\t      (<FSET? ,PRSO ,TOUCHBIT>\n\t\t       <TELL ,YOU-SHOULD \"remember!\" CR>)\n\t\t      (T <TELL\n\"I thought reporters always knew their way around!\" CR>)>)\n\t       (<AND <EQUAL? <META-LOC ,PRSO> ,HERE>\n\t\t     <NOT <EQUAL? ,PRSO ,PULSE>>\n\t\t     <NOT <SEE-INSIDE? <LOC ,PRSO>>>>\n\t\t<NOT-HERE ,PRSO>)>>"
  },
  "V-FIND": {
   "name": "V-FIND",
   "file": "verbs.zil",
   "line": 1213,
   "endLine": 1263,
   "source": "<ROUTINE V-FIND (\"AUX\" (L <LOC ,PRSO>))\n\t <COND (<==? ,PRSO ,PLAYER>\n\t\t<COND (<NOT <==? ,PLAYER ,WINNER>> <TELL \"\\\"\">)>\n\t\t<TELL \"You're right here, \">\n\t\t<COND (<FSET? .L ,SURFACEBIT> <TELL \"on\">)\n\t\t      (T <TELL \"in\">)>\n\t\t<TELL \" \" THE .L \".\">\n\t\t<COND (<NOT <==? ,PLAYER ,WINNER>> <TELL \"\\\"\">)>\n\t\t<CRLF>)\n\t       (<NOT <EQUAL? ,PLAYER ,WINNER>>\n\t\t<COND (<AND <EQUAL? ,PRSO ,YOU>\n\t\t\t    <EQUAL? ,PRSI ,INTNUM>>\n\t\t       <COND (<G? ,P-NUMBER ,PRESENT-TIME>\n\t\t\t      <TELL \"\\\"I don't understand\">)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"I was \">\n\t\t\t      <COND (<OR <G? ,P-NUMBER 555>\n\t\t\t\t\t <AND <G? ,P-NUMBER 480>\n\t\t\t\t\t      <NOT <EQUAL? ,WINNER ,ALICIA>>>>\n\t\t\t\t     <TELL \"here at the party\">)\n\t\t\t\t    (<AND <G? ,P-NUMBER 540>\n\t\t\t\t\t  <EQUAL? ,WINNER ,ALICIA>>\n\t\t\t\t     <TELL \"on my way here\">)\n\t\t\t\t    (ELSE\n\t\t\t\t     <TELL \"at home\">)>)>\n\t\t       <TELL \".\\\"\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"\\\"I thought reporters were resourceful.\\\"\" CR>)>)\n\t       (<EQUAL? .L ,GLOBAL-OBJECTS>\n\t\t<TELL\n\"You're the reporter, can't you find something as simple as that?\" CR>)\n\t       (<IN? ,PRSO ,WINNER>\n\t\t<TELL \"You have it.\" CR>)\n\t       (<OR <IN? ,PRSO ,HERE>\n\t\t    <==? ,PRSO ,PSEUDO-OBJECT>\n\t\t    <GLOBAL-IN? ,PRSO ,HERE>>\n\t\t<TELL \"It's right\">\n\t\t<TELL-HERE>)\n\t       (<OR <FSET? ,PRSO ,INVISIBLE>\n\t\t    <NOT <EQUAL? <META-LOC ,PRSO> ,HERE>>>\n\t\t<TELL \"Well, it's not here, anyway.\" CR>)\n\t       (<FSET? .L ,PERSON>\n\t\t<TELL CD .L \" has it.\" CR>)\n\t       (<FSET? .L ,SURFACEBIT>\n\t\t<TELL \"It's on \" THE .L \".\" CR>)\n\t       (<FSET? .L ,CONTBIT>\n\t\t<TELL \"It's in \" THE .L \".\" CR>)\n\t       (ELSE\n\t\t<TELL \"You're certainly no investigative reporter!\" CR>)>>"
  },
  "V-FINGERPRINT": {
   "name": "V-FINGERPRINT",
   "file": "verbs.zil",
   "line": 1265,
   "endLine": 1273,
   "source": "<ROUTINE V-FINGERPRINT ()\n <COND (<OR <FSET? ,PRSO ,PERSON> <EQUAL? ,PRSO ,YOU ,ME>>\n\t<COND (<EQUAL? ,WINNER ,DETECTIVE ,DUFFY>\n\t       <TELL \"\\\"Everyone will be fingerprinted in due time.\\\"\" CR>)\n\t      (ELSE\n\t       <TELL \"Leave that to the police.\" CR>)>)\n       (T\n\t<PERFORM ,V?ANALYZE ,PRSO ,GLOBAL-FINGERPRINTS>\n\t<RTRUE>)>>"
  },
  "V-FOLLOW": {
   "name": "V-FOLLOW",
   "file": "verbs.zil",
   "line": 1275,
   "endLine": 1303,
   "source": "<ROUTINE V-FOLLOW (\"AUX\" CN CHR COR PCOR (L <>))\n\t <COND (<==? ,PRSO ,PLAYER>\n\t\t<TELL \"It's not clear who you're talking to.\" CR>)\n\t       (<NOT <FSET? ,PRSO ,PERSON>>\n\t\t<TELL\n\"How tragic to see a respected news writer stalking \"\nA ,PRSO \"!\" CR>)\n\t       (<AND <SET CHR <CHARACTERIZE? ,PRSO>>\n\t\t     <==? ,HERE <SET L <META-LOC .CHR>>>>\n\t\t<TELL \"You're in the same place as \" D ,PRSO \"!\" CR>)\n\t       (<NOT .L>\n\t\t<TELL \"You seem to have lost track of \" D ,PRSO \".\" CR>)\n\t       (<AND <IN-BALLROOM? .CHR>\n\t\t     <IN-BALLROOM? ,WINNER>>\n\t\t<COND (<SET CN <DIR-FROM ,HERE .L>>\n\t\t       <DO-WALK .CN>)\n\t\t      (<SET CN <DIR-FROM ,HERE ,BALLROOM-5>>\n\t\t       <DO-WALK .CN>)\n\t\t      (ELSE\n\t\t       <TELL ,HAVE-TO \"give a direction.\" CR>)>)\n\t       (<SET CN <DIR-FROM ,HERE .L>>\n\t\t<DO-WALK .CN>)\n\t       (<AND <SET COR <GETP ,HERE ,P?CORRIDOR>>\n\t\t     <SET PCOR <GETP .L ,P?CORRIDOR>>\n\t\t     <NOT <==? <BAND .COR .PCOR> 0>>>\n\t\t<SETG PRSO <COR-DIR ,HERE .L>>\n\t\t<DO-WALK ,PRSO>)\n\t       (T\n\t\t<TELL \"You seem to have lost track of \" D ,PRSO \".\" CR>)>>"
  },
  "OUTSIDE?": {
   "name": "OUTSIDE?",
   "file": "verbs.zil",
   "line": 1307,
   "endLine": 1309,
   "source": "<ROUTINE OUTSIDE? (L)\n\t <OR <EQUAL? <GETP .L ,P?LINE> ,OUTSIDE-LINE-C>\n\t     <EQUAL? .L ,WALKWAY ,BACK-PORCH>>>"
  },
  "PRE-GIVE": {
   "name": "PRE-GIVE",
   "file": "verbs.zil",
   "line": 1311,
   "endLine": 1314,
   "source": "<ROUTINE PRE-GIVE ()\n\t <COND (<NOT <HELD? ,PRSO>>\n\t\t<TELL \n\"That's easy for you to say, since you don't even have it.\" CR>)>>"
  },
  "V-GIVE": {
   "name": "V-GIVE",
   "file": "verbs.zil",
   "line": 1316,
   "endLine": 1320,
   "source": "<ROUTINE V-GIVE ()\n\t <COND (<NOT <FSET? ,PRSI ,PERSON>>\n\t\t<TELL-YOU-CANT \"give \" <>>\n\t\t<TELL A ,PRSO \" to \" A ,PRSI \"!\" CR>)\n\t       (T <TELL CD ,PRSI \" refuses your offer.\" CR>)>>"
  },
  "PRE-SGIVE": {
   "name": "PRE-SGIVE",
   "file": "verbs.zil",
   "line": 1322,
   "endLine": 1324,
   "source": "<ROUTINE PRE-SGIVE ()\n\t <PERFORM ,V?GIVE ,PRSI ,PRSO>\n\t<RTRUE>>"
  },
  "V-SGIVE": {
   "name": "V-SGIVE",
   "file": "verbs.zil",
   "line": 1326,
   "endLine": 1327,
   "source": "<ROUTINE V-SGIVE ()\n\t <RTRUE>>"
  },
  "V-GOODBYE": {
   "name": "V-GOODBYE",
   "file": "verbs.zil",
   "line": 1329,
   "endLine": 1329,
   "source": "<ROUTINE V-GOODBYE () <V-HELLO <>>>"
  },
  "V-HANDCUFF": {
   "name": "V-HANDCUFF",
   "file": "verbs.zil",
   "line": 1331,
   "endLine": 1335,
   "source": "<ROUTINE V-HANDCUFF ()\n\t<COND (<IN? ,HANDCUFFS ,PLAYER>\n\t       <PERFORM ,V?TIE-WITH ,PRSO ,HANDCUFFS>\n\t       <RTRUE>)\n\t      (T <TELL ,YOU-DONT-HAVE THE ,HANDCUFFS \".\" CR>)>>"
  },
  "V-HELLO": {
   "name": "V-HELLO",
   "file": "verbs.zil",
   "line": 1337,
   "endLine": 1351,
   "source": "<ROUTINE V-HELLO (\"OPTIONAL\" (HELL T) \"AUX\" P)\n\t <COND (<SET P <OR ,PRSO ,QCONTEXT ;<FIND-FLAG ,HERE ,PERSON ,WINNER>>>\n\t\t<COND (<NOT <IN? .P ,HERE>>\n\t\t       <TELL-ISNT-HERE .P>)\n\t\t      (<FSET? .P ,PERSON>\n\t\t       <COND (.HELL\n\t\t\t      <TELL CD .P \" nods at you.\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"Don't tell me you're leaving already!\\\"\" CR>)>)\n\t\t      (ELSE\n\t\t       <TELL \"Only nuts say \\\"\"\n\t\t\t     <COND (.HELL \"Hello\") (T \"Good-bye\")>\n\t\t\t     \"\\\" to \" A .P \".\" CR>)>)\n\t       (T <TELL \"It's not clear who you're talking to.\" CR>)>>"
  },
  "V-HELP": {
   "name": "V-HELP",
   "file": "verbs.zil",
   "line": 1353,
   "endLine": 1358,
   "source": "<ROUTINE V-HELP ()\n\t <COND (<NOT ,PRSO>\n\t\t<TELL\n\"You'll find help in your manual.\" CR>)\n\t       (T\n\t\t<TELL-SPECIFIC>)>>"
  },
  "TELL-SPECIFIC": {
   "name": "TELL-SPECIFIC",
   "file": "verbs.zil",
   "line": 1360,
   "endLine": 1361,
   "source": "<ROUTINE TELL-SPECIFIC ()\n\t <TELL ,HAVE-TO \"be more specific.\" CR>>"
  },
  "PRE-HIDE": {
   "name": "PRE-HIDE",
   "file": "verbs.zil",
   "line": 1363,
   "endLine": 1366,
   "source": "<ROUTINE PRE-HIDE ()\n\t <COND (,PLAYER-HIDING <TELL-HIDING>)\n\t       (<INHABITED? ,HERE>\n\t\t<TELL-YOU-CANT \"hide when someone is watching you\">)>>"
  },
  "V-HIDE": {
   "name": "V-HIDE",
   "file": "verbs.zil",
   "line": 1368,
   "endLine": 1373,
   "source": "<ROUTINE V-HIDE ()\n\t <COND (,PRSO\n\t\t<TELL \"That's not a\">)\n\t       (T\n\t\t<TELL ,HAVE-TO \"suggest a specific\">)>\n\t <TELL-HIDING-PLACE>>"
  },
  "TELL-HIDING-PLACE": {
   "name": "TELL-HIDING-PLACE",
   "file": "verbs.zil",
   "line": 1375,
   "endLine": 1376,
   "source": "<ROUTINE TELL-HIDING-PLACE ()\n\t <TELL \" hiding place.\" CR>>"
  },
  "V-HIDE-INSIDE": {
   "name": "V-HIDE-INSIDE",
   "file": "verbs.zil",
   "line": 1378,
   "endLine": 1383,
   "source": "<ROUTINE V-HIDE-INSIDE ()\n \t <COND (,PLAYER-HIDING\n\t\t<TELL-HIDING>)\n\t       (ELSE\n\t\t<TELL-YOU-CANT \"hide in \" <>>\n\t\t<TELL-PRSO>)>>"
  },
  "TELL-PRSO": {
   "name": "TELL-PRSO",
   "file": "verbs.zil",
   "line": 1385,
   "endLine": 1385,
   "source": "<ROUTINE TELL-PRSO () <TELL THE ,PRSO \".\" CR>>"
  },
  "V-HIDE-BEHIND": {
   "name": "V-HIDE-BEHIND",
   "file": "verbs.zil",
   "line": 1387,
   "endLine": 1392,
   "source": "<ROUTINE V-HIDE-BEHIND ()\n \t <COND (,PLAYER-HIDING\n\t\t<TELL-HIDING>)\n\t       (T\n\t\t<TELL-YOU-CANT \"hide behind \" <>>\n\t\t<TELL-PRSO>)>>"
  },
  "TELL-HIDING": {
   "name": "TELL-HIDING",
   "file": "verbs.zil",
   "line": 1394,
   "endLine": 1395,
   "source": "<ROUTINE TELL-HIDING ()\n\t <TELL \"You're already hiding. Are you getting scared?\" CR>>"
  },
  "V-KICK": {
   "name": "V-KICK",
   "file": "verbs.zil",
   "line": 1397,
   "endLine": 1400,
   "source": "<ROUTINE V-KICK ()\n\t <COND (<FSET? ,PRSO ,PERSON>\n\t\t<TELL \"What terrible manners!\" CR>)\n\t       (T <HACK-HACK \"Kicking\">)>>"
  },
  "V-CUT": {
   "name": "V-CUT",
   "file": "verbs.zil",
   "line": 1402,
   "endLine": 1414,
   "source": "<ROUTINE V-CUT ()\n\t <COND (<NOT ,PRSI> <TELL \"With your cutting wit, I suppose?\" CR>)\n\t       (<AND <NOT <EQUAL? <META-LOC ,PRSO> ,HERE>>\n\t\t     <NOT <HELD? ,PRSO>>>\n\t\t<TELL-ISNT-HERE ,PRSO>)\n\t       (<GETP ,PRSO ,P?CHARACTER>\n\t\t<GONE-CRAZY>)\n\t       (<FSET? ,PRSO ,PERSON>\n\t\t<TELL\n\"You think better of it and don't slice \">\n\t\t<TELL-PRSO>)\n\t       (ELSE\n\t\t<TELL \"The result is unexciting.\" CR>)>>"
  },
  "V-KILL": {
   "name": "V-KILL",
   "file": "verbs.zil",
   "line": 1416,
   "endLine": 1417,
   "source": "<ROUTINE V-KILL ()\n\t <IKILL>>"
  },
  "IKILL": {
   "name": "IKILL",
   "file": "verbs.zil",
   "line": 1419,
   "endLine": 1455,
   "source": "<ROUTINE IKILL ()\n\t <COND (<NOT ,PRSO> <TELL \"There's nothing here to kill.\" CR>)\n\t       (<AND <NOT ,PRSI> <FSET? ,PRSO ,WEAPONBIT>>\n\t\t<TELL \"You didn't say what to kill.\" CR>)\n\t       (<FSET? ,PRSO ,DOORBIT>\n\t\t<FSET ,PRSO ,RMUNGBIT>\n\t\t<TELL\n\"Hey, this isn't a TV crime show! You just broke the lock\nbeyond repair.\" CR>)\n\t       (<NOT <FSET? ,PRSO ,PERSON>>\n\t\t<TELL\n\"Sure, destroy \" THE ,PRSO \". Your manners are atrocious! I doubt you'll\never be invited back.\" CR>)\n\t       (<NOT ,PRSI>\n\t\t<COND (<EQUAL? ,PRSO ,DUFFY ,DETECTIVE>\n\t\t       <TELL\n\"That was a bad move. These officers are trained to defend themselves.\nThey do. You lose, and quickly.\" CR>\n\t\t       <GONE-CRAZY>)\n\t\t      (<PROB 50>\n\t\t       <TELL-WISE-UP>)\n\t\t      (T <TELL\n\"With all your ability (which is to say, nearly none), you kill \" D ,PRSO\n\" with one lucky blow.\" CR>\n\t\t       <GONE-CRAZY>)>)\n\t       (<EQUAL? ,PRSO ,DUFFY ,DETECTIVE>\n\t\t<TELL\n\"You've had better ideas tonight. With practiced ease, \" D ,PRSO \" wrests \"\nTHE ,PRSI \" from your grasp, slaps on the cuffs, and reads you your\nrights.\" CR>\n\t\t<GONE-CRAZY>)\n\t       (<PROB 50>\n\t\t<TELL-WISE-UP>)\n\t       (T\n\t\t<TELL\n\"With lethal facility, you use \" THE ,PRSI \" on \" D ,PRSO \", who dies.\" CR>\n\t\t<GONE-CRAZY>)>>"
  },
  "TELL-WISE-UP": {
   "name": "TELL-WISE-UP",
   "file": "verbs.zil",
   "line": 1457,
   "endLine": 1459,
   "source": "<ROUTINE TELL-WISE-UP ()\n\t <TELL\n\"You think it over and think better of it.\" CR>>"
  },
  "V-KISS": {
   "name": "V-KISS",
   "file": "verbs.zil",
   "line": 1461,
   "endLine": 1465,
   "source": "<ROUTINE V-KISS ()\n\t <COND (<FSET? ,PRSO ,PERSON>\n\t\t<TELL\n\"This isn't Hollywood; you can't go around kissing at random.\" CR>)\n\t       (T <TELL \"What a (ahem!) strange idea!\" CR>)>>"
  },
  "TELL-NO-ANSWER": {
   "name": "TELL-NO-ANSWER",
   "file": "verbs.zil",
   "line": 1467,
   "endLine": 1468,
   "source": "<ROUTINE TELL-NO-ANSWER ()\n\t <TELL \"There's no answer.\" CR>>"
  },
  "V-KNOCK": {
   "name": "V-KNOCK",
   "file": "verbs.zil",
   "line": 1470,
   "endLine": 1478,
   "source": "<ROUTINE V-KNOCK ()\n\t <COND (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<INHABITED? <DOOR-ROOM ,HERE ,PRSO>>\n\t\t       <TELL \"Someone shouts \\\"Go away!\\\"\" CR>)\n\t\t      (T <TELL-NO-ANSWER>)>)\n\t       (<FSET? ,PRSO ,WINDOWBIT>\n\t\t<TELL-NO-ANSWER>)\n\t       (ELSE\n\t\t<TELL \"Why knock on \" A ,PRSO \"?\" CR>)>>"
  },
  "DOOR-ROOM": {
   "name": "DOOR-ROOM",
   "file": "verbs.zil",
   "line": 1480,
   "endLine": 1490,
   "source": "<ROUTINE DOOR-ROOM (HERE OBJ \"AUX\" (P 0) L T O)\n\t #DECL ((HERE OBJ O) OBJECT (P L) FIX)\n\t <REPEAT ()\n\t\t <COND (<0? <SET P <NEXTP .HERE .P>>>\n\t\t\t<RFALSE>)\n\t\t       (<NOT <L? .P ,LOW-DIRECTION>>\n\t\t\t<SET T <GETPT .HERE .P>>\n\t\t\t<SET L <PTSIZE .T>>\n\t\t\t<COND (<AND <EQUAL? .L ,DEXIT>\n\t\t\t\t    <EQUAL? <GETB .T ,DEXITOBJ> .OBJ>>\n\t\t\t       <RETURN <GETB .T ,REXIT>>)>)>>>"
  },
  "V-STAND": {
   "name": "V-STAND",
   "file": "verbs.zil",
   "line": 1495,
   "endLine": 1505,
   "source": "<ROUTINE V-STAND (\"AUX\" P)\n\t <COND (,PLAYER-HIDING\n\t\t<PLAYER-GETS-UP>\n\t\t<RTRUE>)\n\t       (<OR <FSET? <LOC ,WINNER> ,SURFACEBIT>\n\t\t    <FSET? <LOC ,WINNER> ,FURNITURE>>\n\t\t<MOVE ,WINNER ,HERE>\n\t\t<SETG PLAYER-HIDING <>>\n\t\t<TELL ,YOU-ARE \"on your own feet again.\" CR>)\n\t       (T\n\t\t<TELL-ALREADY-ARE>)>>"
  },
  "PRE-LEAVE": {
   "name": "PRE-LEAVE",
   "file": "verbs.zil",
   "line": 1507,
   "endLine": 1519,
   "source": "<ROUTINE PRE-LEAVE ()\n\t <COND (,PRSO\n\t\t<COND (<EQUAL? ,PRSO ,PARTY> <RFALSE>)\n\t\t      (<AND <FSET? ,PRSO ,PERSON>\n\t\t\t    <NOT <EQUAL? ,PRSO ,CORPSE>>>\n\t\t       <DO-WALK ,P?OUT>\n\t\t       <RTRUE>)\n\t\t      (<EQUAL? ,PRSO <META-LOC ,WINNER> ,GLOBAL-ROOM>\n\t\t       <DO-WALK ,P?OUT>\n\t\t       <RTRUE>)\n\t\t      (ELSE\n\t\t       <PERFORM ,V?DROP ,PRSO>\n\t\t       <RTRUE>)>)>>"
  },
  "V-LEAVE": {
   "name": "V-LEAVE",
   "file": "verbs.zil",
   "line": 1521,
   "endLine": 1522,
   "source": "<ROUTINE V-LEAVE ()\n\t <DO-WALK ,P?OUT>>"
  },
  "V-LISTEN": {
   "name": "V-LISTEN",
   "file": "verbs.zil",
   "line": 1524,
   "endLine": 1550,
   "source": "<ROUTINE V-LISTEN ()\n\t <COND (<OR <NOT ,PRSO> <EQUAL? ,PRSO ,DISCUSSION>>\n\t\t<COND (<AND <G? ,ARGUMENT-COUNT 0>\n\t\t\t    <EQUAL? ,HERE ,BALLROOM-9>>\n\t\t       <TELL\nCTHE ,DISCUSSION \" intensifies.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"It's pretty one-sided.\" CR>)>)\n\t       (<FSET? ,PRSO ,PERSON>\n\t\t<COND (<EQUAL? ,PRSO ,VERONICA>\n\t\t       <COND (<IN-MOTION? ,VERONICA>\n\t\t\t      <TELL-YOU-CANT\n\"quite catch what she's saying, but it sounds like it would blister paint\">)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"She is talking, as usual, about horses.\" CR>)>)\n\t\t      (<AND <G? ,ARGUMENT-COUNT 0>\n\t\t\t    <EQUAL? ,HERE ,BALLROOM-9>\n\t\t\t    <EQUAL? ,PRSO ,MICHAEL ,COL-MARSTON ,COCHRANE>>\n\t\t       <TELL\nCD ,PRSO \" is taking part in \" A ,DISCUSSION \".\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"This conversation doesn't appear to be going anywhere, does it?\" CR>)>)\n\t       (ELSE\n\t\t<TELL ,TOO-BAD THE ,PRSO \" makes no sound.\" CR>)>>"
  },
  "TELL-MORE-CLEVER": {
   "name": "TELL-MORE-CLEVER",
   "file": "verbs.zil",
   "line": 1552,
   "endLine": 1555,
   "source": "<ROUTINE TELL-MORE-CLEVER ()\n\t <TELL\n\"You'd have to be more clever to do that to \">\n\t <TELL-PRSO>>"
  },
  "V-LOCK": {
   "name": "V-LOCK",
   "file": "verbs.zil",
   "line": 1557,
   "endLine": 1581,
   "source": "<ROUTINE V-LOCK ()\n\t <COND (<NOT <OR <FSET? ,PRSO ,CONTBIT>\n\t\t\t <FSET? ,PRSO ,DOORBIT>>>\n\t\t<TELL-MORE-CLEVER>)\n\t       (<OR <FSET? ,PRSO ,DOORBIT>\n\t\t    ;<FSET? ,PRSO ,WINDOWBIT>\n\t\t    <NOT <==? <GETP ,PRSO ,P?CAPACITY> 0>>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL ,HAVE-TO \"close it first.\" CR>)\n\t\t      (<FSET? ,PRSO ,LOCKED>\n\t\t       <TELL ,ITS-ALREADY \"locked.\" CR>)\n\t\t      (<FSET? ,PRSO ,RMUNGBIT>\n\t\t       <TELL-YOU-CANT \"lock it. The lock is broken\">)\n\t\t      (<EQUAL? <GETP ,PRSO ,P?UNLOCK> ,ROOMS>\n\t\t       <TELL\n\"This door doesn't have a lock.\" CR>)\n\t\t      (<NOT <EQUAL? <GETP ,PRSO ,P?UNLOCK> ,HERE>>\n\t\t       <TELL-YOU-CANT \"lock it from this side without a key\">)\n\t\t      (T\n\t\t       <FSET ,PRSO ,LOCKED>\n\t\t       <TELL\n\"Okay, \" THE ,PRSO \" is now locked.\" CR>)>)\n\t       (T\n\t\t<TELL-YOU-CANT \"lock \" <>>\n\t\t<TELL-PRSO>)>>"
  },
  "V-LOOK": {
   "name": "V-LOOK",
   "file": "verbs.zil",
   "line": 1585,
   "endLine": 1587,
   "source": "<ROUTINE V-LOOK ()\n\t <COND (<DESCRIBE-ROOM T>\n\t\t<DESCRIBE-OBJECTS T>)>>"
  },
  "V-LOOK-BEHIND": {
   "name": "V-LOOK-BEHIND",
   "file": "verbs.zil",
   "line": 1589,
   "endLine": 1591,
   "source": "<ROUTINE V-LOOK-BEHIND ()\n\t <TELL \"There's nothing behind \">\n\t <TELL-PRSO>>"
  },
  "V-LOOK-DOWN": {
   "name": "V-LOOK-DOWN",
   "file": "verbs.zil",
   "line": 1593,
   "endLine": 1602,
   "source": "<ROUTINE V-LOOK-DOWN ()\n <COND (<==? ,PRSO ,ROOMS>\n\t<COND (<==? <GETP ,HERE ,P?LINE> ,OUTSIDE-LINE-C>\n\t       <TELL \"There's mud and grass there, mostly.\" CR>)\n\t      (T\n\t       <TELL-BORING>)>)\n       (<==? ,PRSO ,HALLWAY>\n\t<COND (<NOT <CORRIDOR-LOOK>>\n\t       <TELL \"There's no one there.\" CR>)>)\n       (T <TELL-LONG-WEEK>)>>"
  },
  "TELL-LONG-WEEK": {
   "name": "TELL-LONG-WEEK",
   "file": "verbs.zil",
   "line": 1604,
   "endLine": 1605,
   "source": "<ROUTINE TELL-LONG-WEEK ()\n\t <TELL \"It has been a long week, hasn't it?\" CR>>"
  },
  "TELL-CLOSED": {
   "name": "TELL-CLOSED",
   "file": "verbs.zil",
   "line": 1607,
   "endLine": 1609,
   "source": "<ROUTINE TELL-CLOSED ()\n\t <TELL\n,TOO-BAD THE ,PRSO \" is closed.\" CR>>"
  },
  "PRE-LOOK-INSIDE": {
   "name": "PRE-LOOK-INSIDE",
   "file": "verbs.zil",
   "line": 1611,
   "endLine": 1611,
   "source": "<ROUTINE PRE-LOOK-INSIDE () <ROOM-CHECK>>"
  },
  "V-LOOK-INSIDE": {
   "name": "V-LOOK-INSIDE",
   "file": "verbs.zil",
   "line": 1613,
   "endLine": 1649,
   "source": "<ROUTINE V-LOOK-INSIDE (DIR \"AUX\" RM)\n\t <COND (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <COND (<SET RM <DOOR-ROOM ,HERE ,PRSO>>\n\t\t\t      <ROOM-PEEK .RM>)\n\t\t\t     (T <TELL\nCTHE ,PRSO \" is open, but you can't tell what's beyond it.\" CR>)>)\n\t\t      (ELSE\n\t\t       <TELL-CLOSED>)>)\n\t       (<FSET? ,PRSO ,WINDOWBIT>\n\t\t<TELL-YOU-CANT \"tell what's beyond \" <>>\n\t\t<TELL-PRSO>)\n\t       (<FSET? ,PRSO ,CONTBIT>\n\t\t<COND (<SEE-INSIDE? ,PRSO>\n\t\t       <COND (<AND <FIRST? ,PRSO> <PRINT-CONT ,PRSO>>\n\t\t\t      <RTRUE>)\n\t\t\t     (<FSET? ,PRSO ,SURFACEBIT>\n\t\t\t      <TELL\n\"There's nothing on \">\n\t\t\t      <TELL-PRSO>)\n\t\t\t     (T\n\t\t\t      <TELL\nCTHE ,PRSO \" is empty.\" CR>)>)\n\t\t      (ELSE\n\t\t       <TELL-CLOSED>)>)\n\t       (<FSET? ,PRSO ,PERSON>\n\t\t<TELL \"You forgot to bring your X-ray glasses.\" CR>)\n\t       (ELSE\n\t\t<TELL-YOU-CANT \"look \" <>>\n\t\t<COND (<==? .DIR ,P?IN>\n\t\t       <TELL \"inside \">\n\t\t       <TELL-PRSO>)\n\t       \t      (<==? .DIR ,P?OUT>\n\t\t       <TELL \"outside \">\n\t\t       <TELL-PRSO>)\n\t       \t      (ELSE\n\t\t       <TELL \"inside that.\" CR>)>)>>"
  },
  "ROOM-PEEK": {
   "name": "ROOM-PEEK",
   "file": "verbs.zil",
   "line": 1651,
   "endLine": 1658,
   "source": "<ROUTINE ROOM-PEEK (RM \"AUX\" OHERE)\n\t <SET OHERE ,HERE>\n\t <COND (<SEE-INTO? .RM>\n\t\t<SETG HERE .RM>\n\t\t<TELL \"You take a quick peek into \" THE .RM \":\" CR>\n\t\t<COND (<NOT <DESCRIBE-OBJECTS T>>\n\t\t       <TELL-BORING>)>\n\t\t<SETG HERE .OHERE>)>>"
  },
  "SEE-INTO?": {
   "name": "SEE-INTO?",
   "file": "verbs.zil",
   "line": 1660,
   "endLine": 1688,
   "source": "<ROUTINE SEE-INTO? (THERE \"AUX\" P L T O)\n\t #DECL ((THERE O) OBJECT (P L) FIX)\n\t <SET P 0>\n\t <REPEAT ()\n\t\t <COND (<0? <SET P <NEXTP ,HERE .P>>>\n\t\t\t<TELL-CANT-FIND>\n\t\t\t<RFALSE>)\n\t\t       (<EQUAL? .P ,P?IN ,P?OUT> T)\n\t\t       (<NOT <L? .P ,LOW-DIRECTION>>\n\t\t\t<SET T <GETPT ,HERE .P>>\n\t\t\t<SET L <PTSIZE .T>>\n\t\t\t<COND (<AND <==? .L ,UEXIT>\n\t\t\t\t    <==? <GETB .T ,REXIT> .THERE>>\n\t\t\t       <RTRUE>)\n\t\t\t      (<AND <==? .L ,DEXIT>\n\t\t\t\t    <==? <GETB .T ,REXIT> .THERE>>\n\t\t\t       <COND (<FSET? <GETB .T ,DEXITOBJ> ,OPENBIT>\n\t\t\t\t      <RTRUE>)\n\t\t\t\t     (T\n\t\t\t\t      <TELL\n\"The door to that room is closed.\" CR>\n\t\t\t\t      <RFALSE>)>)\n\t\t\t      (<AND <==? .L ,CEXIT>\n\t\t\t\t    <==? <GETB .T ,REXIT> .THERE>>\n\t\t\t       <COND (<VALUE <GETB .T ,CEXITFLAG>>\n\t\t\t\t      <RTRUE>)\n\t\t\t\t     (T\n\t\t\t\t      <TELL-CANT-FIND>\n\t\t\t\t      <RFALSE>)>)>)>>>"
  },
  "TELL-CANT-FIND": {
   "name": "TELL-CANT-FIND",
   "file": "verbs.zil",
   "line": 1690,
   "endLine": 1691,
   "source": "<ROUTINE TELL-CANT-FIND ()\n\t <TELL-YOU-CANT \"seem to find that room\">>"
  },
  "V-LOOK-ON": {
   "name": "V-LOOK-ON",
   "file": "verbs.zil",
   "line": 1693,
   "endLine": 1698,
   "source": "<ROUTINE V-LOOK-ON ()\n\t <COND (<FSET? ,PRSO ,SURFACEBIT>\n\t\t<V-LOOK-INSIDE ,P?IN>)\n\t       (T\n\t\t<TELL \"There's no good surface on \">\n\t\t<TELL-PRSO>)>>"
  },
  "V-LOOK-OUTSIDE": {
   "name": "V-LOOK-OUTSIDE",
   "file": "verbs.zil",
   "line": 1700,
   "endLine": 1700,
   "source": "<ROUTINE V-LOOK-OUTSIDE () <V-LOOK-INSIDE ,P?OUT>>"
  },
  "V-LOOK-UNDER": {
   "name": "V-LOOK-UNDER",
   "file": "verbs.zil",
   "line": 1702,
   "endLine": 1711,
   "source": "<ROUTINE V-LOOK-UNDER ()\n\t <COND (<FSET? ,PRSO ,FURNITURE>\n\t\t<TELL\n\"You twist your head to look under \" THE ,PRSO \" but find nothing.\" CR>)\n\t       (<FSET? ,PRSO ,PERSON>\n\t\t<TELL \"Nope. Nothing hiding under \" D ,PRSO \".\" CR>)\n\t       (<EQUAL? <LOC ,PRSO> ,HERE ,LOCAL-GLOBALS ,GLOBAL-OBJECTS>\n\t\t<TELL \"There's nothing there but dust.\" CR>)\n\t       (T\n\t\t<TELL \"That's not a bit useful.\" CR>)>>"
  },
  "V-LOOK-UP": {
   "name": "V-LOOK-UP",
   "file": "verbs.zil",
   "line": 1713,
   "endLine": 1725,
   "source": "<ROUTINE V-LOOK-UP ()\n\t <COND (<FSET? ,PRSO ,PERSON>\n\t\t<TELL <PICK-ONE ,YUKS> CR>)\n\t       (<NOT <==? ,PRSO ,ROOMS>>\n\t\t<TELL-LONG-WEEK>)\n\t       (<==? <GETP ,HERE ,P?LINE> ,OUTSIDE-LINE-C>\n\t\t<PERFORM ,V?EXAMINE ,WEATHER>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL\n\"You see the ceiling. It's a nice ceiling. It's smoothly plastered, but\nif you don't stop looking at it, people will think you're just\nplastered.\" CR>)>>"
  },
  "V-MAKE": {
   "name": "V-MAKE",
   "file": "verbs.zil",
   "line": 1727,
   "endLine": 1732,
   "source": "<ROUTINE V-MAKE ()\n\t<COND (<NOT ,PRSI>\n\t       <PERFORM ,V?MAKE ,PLAYER ,PRSO>)\n\t      (T\n\t       <TELL\n\"\\\"Eat, drink, and be merry,\\\" eh?\" CR>)>>"
  },
  "PRE-MOVE": {
   "name": "PRE-MOVE",
   "file": "verbs.zil",
   "line": 1734,
   "endLine": 1736,
   "source": "<ROUTINE PRE-MOVE ()\n\t <COND (<HELD? ,PRSO>\n\t\t<TELL \"Juggling isn't one of your talents.\" CR>)>>"
  },
  "V-MOVE": {
   "name": "V-MOVE",
   "file": "verbs.zil",
   "line": 1738,
   "endLine": 1744,
   "source": "<ROUTINE V-MOVE ()\n\t <COND (<FSET? ,PRSO ,TAKEBIT>\n\t\t<TELL\n\"Moving \" THE ,PRSO \" reveals nothing.\" CR>)\n\t       (T\n\t\t<TELL-YOU-CANT \"move \" <>>\n\t\t<TELL-PRSO>)>>"
  },
  "V-OPEN": {
   "name": "V-OPEN",
   "file": "verbs.zil",
   "line": 1746,
   "endLine": 1757,
   "source": "<ROUTINE V-OPEN (\"AUX\" F STR)\n\t <COND (<NOT <OR <FSET? ,PRSO ,CONTBIT>\n\t\t\t <FSET? ,PRSO ,DOORBIT>\n\t\t\t <FSET? ,PRSO ,WINDOWBIT>>>\n\t\t<TELL-MORE-CLEVER>)\n\t       (<OR <FSET? ,PRSO ,DOORBIT>\n\t\t    <FSET? ,PRSO ,WINDOWBIT>\n\t\t    <NOT <==? <GETP ,PRSO ,P?CAPACITY> 0>>>\n\t\t<OPEN-CLOSE>)\n\t       (T\n\t\t<TELL-YOU-CANT \"open \" <>>\n\t\t<TELL-PRSO>)>>"
  },
  "V-PICK": {
   "name": "V-PICK",
   "file": "verbs.zil",
   "line": 1759,
   "endLine": 1759,
   "source": "<ROUTINE V-PICK () <TELL-YOU-CANT \"pick that\">>"
  },
  "V-PUSH": {
   "name": "V-PUSH",
   "file": "verbs.zil",
   "line": 1765,
   "endLine": 1765,
   "source": "<ROUTINE V-PUSH () <HACK-HACK \"Pushing\">>"
  },
  "V-PUT-UNDER": {
   "name": "V-PUT-UNDER",
   "file": "verbs.zil",
   "line": 1767,
   "endLine": 1768,
   "source": "<ROUTINE V-PUT-UNDER ()\n         <TELL \"There's not enough room.\" CR>>"
  },
  "PRE-PUT": {
   "name": "PRE-PUT",
   "file": "verbs.zil",
   "line": 1770,
   "endLine": 1775,
   "source": "<ROUTINE PRE-PUT ()\n\t <COND (<EQUAL? ,PRSO ,HANDCUFFS>\n\t\t<PERFORM ,V?TIE-WITH ,PRSI ,HANDCUFFS>\n\t\t<RTRUE>)\n\t       (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t\t<TELL \"You can't do that.\" CR>)>>"
  },
  "V-PUT": {
   "name": "V-PUT",
   "file": "verbs.zil",
   "line": 1777,
   "endLine": 1805,
   "source": "<ROUTINE V-PUT ()\n\t <COND (<OR <FSET? ,PRSI ,OPENBIT>\n\t\t    <OPENABLE? ,PRSI>\n\t\t    <FSET? ,PRSI ,VEHBIT>> T)\n\t       (T\n\t\t<TELL-YOU-CANT \"do that\">\n\t\t<RTRUE>)>\n\t <COND (<FSET? ,PRSI ,PERSON>\n\t\t<TELL CD ,PRSI \" won't let you.\" CR>)\n\t       (<AND <NOT <FSET? ,PRSI ,FURNITURE>>\n\t\t     <NOT <FSET? ,PRSI ,OPENBIT>>>\n\t\t<TELL ,TOO-BAD THE ,PRSI \" isn't open.\" CR>)\n\t       (<==? ,PRSI ,PRSO>\n\t\t<TELL <PICK-ONE ,YUKS> CR>)\n\t       (<IN? ,PRSO ,PRSI>\n\t\t<TELL\n,TOO-BAD THE ,PRSO \" is already in \" THE ,PRSI \".\" CR>)\n\t       (<G? <- <+ <WEIGHT ,PRSI> <WEIGHT ,PRSO>>\n\t\t       <GETP ,PRSI ,P?SIZE>>\n\t\t    <GETP ,PRSI ,P?CAPACITY>>\n\t\t<TELL \"There's no room.\" CR>)\n\t       (<AND <NOT <HELD? ,PRSO>>\n\t\t     <NOT <ITAKE>>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<MOVE ,PRSO ,PRSI>\n\t\t<FCLEAR ,PRSO ,WEARBIT>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<TELL \"Okay.\" CR>)>>"
  },
  "V-RAISE": {
   "name": "V-RAISE",
   "file": "verbs.zil",
   "line": 1807,
   "endLine": 1807,
   "source": "<ROUTINE V-RAISE () <HACK-HACK \"Playing in this way with\">>"
  },
  "V-RAPE": {
   "name": "V-RAPE",
   "file": "verbs.zil",
   "line": 1809,
   "endLine": 1816,
   "source": "<ROUTINE V-RAPE ()\n\t <COND (<FSET? ,PRSO ,PERSON>\n\t\t<COND (<PROB 75>\n\t\t       <TELL\n\"Section 29A of the United States Criminal Code, whose provisions\ncome to your unhealthy mind, forbids it.\" CR>)\n\t\t      (T <GONE-CRAZY>)>)\n\t       (T <TELL \"What a (ahem!) strange idea!\" CR>)>>"
  },
  "PRE-READ": {
   "name": "PRE-READ",
   "file": "verbs.zil",
   "line": 1818,
   "endLine": 1829,
   "source": "<ROUTINE PRE-READ (\"AUX\" VAL)\n\t <COND (<OUTSIDE? ,HERE>\n\t\t<TELL \"It's impossible to read in the dark.\" CR>)\n\t       (<AND ,PRSI\n\t\t     <NOT <FSET? ,PRSI ,TRANSBIT>>\n\t\t     <NOT <==? ,PRSI ,INTNUM>>>\t;\"? INTNUM?\"\n\t\t<TELL\n,YOU-MUST \"have a swell method of looking through \" THE ,PRSI \".\" CR>)\n\t       (<EQUAL? <LOC ,PRSO> ,WINNER ,ROOMS> <>)\n\t       (<OR <IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t    <NOT <SEE-INSIDE? <LOC ,PRSO>>>>\n\t\t<NOT-HERE ,PRSO>)>>"
  },
  "V-READ": {
   "name": "V-READ",
   "file": "verbs.zil",
   "line": 1831,
   "endLine": 1839,
   "source": "<ROUTINE V-READ ()\n\t <COND (<NOT <FSET? ,PRSO ,READBIT>>\n\t\t<TELL-YOU-CANT \"read \" <>>\n\t\t<TELL-PRSO>)\n\t       (<AND <NOT <IN? ,PRSO ,PLAYER>>\n\t\t     <FSET? <LOC ,PRSO> ,PERSON>>\n\t\t<TELL \"Trying to read over \" D <LOC ,PRSO> \"'s shoulder?\" CR>)\n\t       (ELSE\n\t\t<TELL <GETP ,PRSO ,P?TEXT> CR>)>>"
  },
  "V-REVIVE": {
   "name": "V-REVIVE",
   "file": "verbs.zil",
   "line": 1841,
   "endLine": 1844,
   "source": "<ROUTINE V-REVIVE ()\n <COND (<FSET? ,PRSO ,PERSON>\n\t<TELL CD ,PRSO \" doesn't need reviving.\" CR>)\n       (T <HACK-HACK \"Trying to revive\">)>>"
  },
  "V-RING": {
   "name": "V-RING",
   "file": "verbs.zil",
   "line": 1846,
   "endLine": 1847,
   "source": "<ROUTINE V-RING ()\n\t <HACK-HACK \"Ringing\">>"
  },
  "V-RUB": {
   "name": "V-RUB",
   "file": "verbs.zil",
   "line": 1849,
   "endLine": 1849,
   "source": "<ROUTINE V-RUB () <HACK-HACK \"Fiddling with\">>"
  },
  "V-SAY": {
   "name": "V-SAY",
   "file": "verbs.zil",
   "line": 1858,
   "endLine": 1861,
   "source": "<ROUTINE V-SAY (\"AUX\" V)\n\t <SETG QUOTE-FLAG <>>\n\t <SETG P-CONT <>>\n\t <TELL \"Try instead: Michael, Tell me about Veronica.\" CR>>"
  },
  "PRE-SEARCH": {
   "name": "PRE-SEARCH",
   "file": "verbs.zil",
   "line": 1863,
   "endLine": 1863,
   "source": "<ROUTINE PRE-SEARCH () <ROOM-CHECK>>"
  },
  "V-SEARCH": {
   "name": "V-SEARCH",
   "file": "verbs.zil",
   "line": 1865,
   "endLine": 1870,
   "source": "<ROUTINE V-SEARCH ()\n\t <COND (<FSET? ,PRSO ,PERSON>\n\t\t<TELL-REFUSES>)\n\t       (<AND <FSET? ,PRSO ,CONTBIT> <NOT <FSET? ,PRSO ,OPENBIT>>>\n\t\t<TELL ,HAVE-TO \"open it first.\" CR>)\n\t       (T <TELL \"You find nothing unusual.\" CR>)>>"
  },
  "PRE-SEARCH-OBJECT-FOR": {
   "name": "PRE-SEARCH-OBJECT-FOR",
   "file": "verbs.zil",
   "line": 1872,
   "endLine": 1876,
   "source": "<ROUTINE PRE-SEARCH-OBJECT-FOR (\"AUX\" OBJ)\n\t <COND (<ROOM-CHECK> <RTRUE>)>\n\t <COND (<EQUAL? ,PRSO ,GLOBAL-ROOM ,GLOBAL-HERE>\n\t\t<SETG PRSO ,HERE>)>\n\t <RFALSE>>"
  },
  "TELL-REFUSES": {
   "name": "TELL-REFUSES",
   "file": "verbs.zil",
   "line": 1878,
   "endLine": 1880,
   "source": "<ROUTINE TELL-REFUSES ()\n\t <TELL CD ,PRSO\n\t       \" refuses to let you search \" HIM/HER ,PRSO \".\" CR>>"
  },
  "V-SEARCH-OBJECT-FOR": {
   "name": "V-SEARCH-OBJECT-FOR",
   "file": "verbs.zil",
   "line": 1882,
   "endLine": 1893,
   "source": "<ROUTINE V-SEARCH-OBJECT-FOR ()\n\t <COND (<FSET? ,PRSO ,PERSON>\n\t\t<TELL-REFUSES>)\n\t       (<AND <FSET? ,PRSO ,CONTBIT> <NOT <FSET? ,PRSO ,OPENBIT>>>\n\t\t<TELL ,HAVE-TO \"open \" THE ,PRSO \" first.\" CR>)\n\t       (<IN? ,PRSI ,PRSO>\n\t\t<TELL \"How observant you are! There \"\n\t\t\t<COND (<FSET? ,PRSI ,FEMALE> \"she\")\n\t\t\t      (<FSET? ,PRSI ,PERSON> \"he\")\n\t\t\t      (T \"it\")>\n\t\t\t\" is!\" CR>)\n\t       (T <TELL ,YOU-DONT \"find \" THE ,PRSI \" there.\" CR>)>>"
  },
  "PRE-SHOW": {
   "name": "PRE-SHOW",
   "file": "verbs.zil",
   "line": 1895,
   "endLine": 1904,
   "source": "<ROUTINE PRE-SHOW ()\n\t <COND (<EQUAL? ,PRSO ,PRSI>\n\t\t<TELL \"Using a mirror, no doubt?\" CR>)\n\t       (<AND <IN? ,PRSO ,DETECTIVE>\n\t\t     <NOT <EQUAL? ,PRSI ,DETECTIVE>>>\n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<THIS-IS-S-HE ,PRSO>\n\t\t<RFALSE>)>>"
  },
  "V-SHOW": {
   "name": "V-SHOW",
   "file": "verbs.zil",
   "line": 1906,
   "endLine": 1912,
   "source": "<ROUTINE V-SHOW ()\n\t <COND (<==? ,PRSI ,PLAYER>\n\t\t<TELL \"Do you often talk to yourself?\" CR>)\n\t       (<NOT <FSET? ,PRSI ,PERSON>>\n\t\t<TELL \"Don't wait for \" THE ,PRSI \" to applaud.\" CR>)\n\t       (T\n\t\t<TELL CD ,PRSI <PICK-ONE ,WHO-CARES> \".\" CR>)>>"
  },
  "PRE-SSHOW": {
   "name": "PRE-SSHOW",
   "file": "verbs.zil",
   "line": 1914,
   "endLine": 1917,
   "source": "<ROUTINE PRE-SSHOW ()\n\t <SETG P-MERGED T>\n\t <PERFORM ,V?SHOW ,PRSI ,PRSO>\n\t <RTRUE>>"
  },
  "V-SSHOW": {
   "name": "V-SSHOW",
   "file": "verbs.zil",
   "line": 1919,
   "endLine": 1919,
   "source": "<ROUTINE V-SSHOW () <RTRUE>>"
  },
  "V-SIT": {
   "name": "V-SIT",
   "file": "verbs.zil",
   "line": 1921,
   "endLine": 1934,
   "source": "<ROUTINE V-SIT (\"AUX\" F)\n\t <COND (<AND <FSET? ,PRSO ,FURNITURE> <FSET? ,PRSO ,VEHBIT>>\n\t\t<COND (<IN? ,PLAYER ,PRSO>\n\t\t       <TELL-ALREADY-ARE>)\n\t\t      (<SET F <FIRST? ,PRSO>>\n\t\t       <TELL \"You might crush \" THE .F \".\" CR>)\n\t\t      (T\n\t\t       <MOVE ,PLAYER ,PRSO>\n\t\t       <SETG PLAYER-HIDING <>>\n\t\t       <TELL\n,YOU-ARE \"now sitting on \">\n\t\t       <TELL-PRSO>)>)\n\t       (T\n\t\t<TELL \"That isn't something to sit on!\" CR>)>>"
  },
  "V-SLAP": {
   "name": "V-SLAP",
   "file": "verbs.zil",
   "line": 1936,
   "endLine": 1944,
   "source": "<ROUTINE V-SLAP ()\n\t <COND (<NOT <IN? ,PRSO ,HERE>>\n\t\t<TELL \"What \" ,PRSO \"?\" CR>)\n\t       (<FSET? ,PRSO ,PERSON>\n\t\t<TELL\nCD ,PRSO \" slaps you right back. It hurts, too.\" CR>)\n\t       (T\n\t\t<TELL\n\"Your hand stings something fierce now!\" CR>)>>"
  },
  "V-SMELL": {
   "name": "V-SMELL",
   "file": "verbs.zil",
   "line": 1946,
   "endLine": 1951,
   "source": "<ROUTINE V-SMELL ()\n\t <COND (<FSET? ,PRSO ,PERSON>\n\t\t<COND (<FSET? ,PRSO ,FEMALE> <TELL \"She\">)\n\t\t      (T <TELL \"He\">)>)\n\t       (T <TELL \"It\">)>\n\t <TELL \" smells just like \" A ,PRSO \".\" CR>>"
  },
  "PRE-TAKE": {
   "name": "PRE-TAKE",
   "file": "verbs.zil",
   "line": 1953,
   "endLine": 1983,
   "source": "<ROUTINE PRE-TAKE (\"AUX\" (P <LOC ,PRSO>))\n\t <COND (<OR <EQUAL? ,PRSO ,PULSE ,FAIRY-COSTUME ,NOT-ROPE>\n\t\t    <EQUAL? ,PRSO ,NOTEBOOK ,SALE-AGREEMENT ,TRUST-DOCUMENTS>>\n\t\t<RFALSE>)\n\t       (<IN? ,PRSO ,WINNER> <TELL \"You already have it.\" CR>)\n\t       (<AND <NOT ,PRSI>\n\t\t     <NOT <IN? ,PRSO ,GLOBAL-OBJECTS>>\n\t\t     <FSET? .P ,PERSON>\n\t\t     <NOT <EQUAL? .P ,CORPSE>>>\n\t\t<PERFORM ,V?TAKE ,PRSO .P>\n\t\t<RTRUE>)\n\t       (<AND <FSET? .P ,CONTBIT>\n\t\t     <NOT <FSET? .P ,OPENBIT>>\n\t\t     <NOT <FSET? .P ,PERSON>>>\n\t\t<TELL-YOU-CANT \"reach that\">\n\t\t<RTRUE>)\n\t       (,PRSI\n\t\t<COND (<NOT <EQUAL? <META-LOC ,PRSI> ,HERE>>\n\t\t       <TELL-ISNT-HERE ,PRSI>)\n\t\t      (<NOT <==? ,PRSI .P>>\n\t\t       <TELL CTHE ,PRSI \" doesn't have \">\n\t\t       <TELL-PRSO>)\n\t\t      (<AND <FSET? ,PRSI ,PERSON>\n\t\t\t    <NOT <EQUAL? ,PRSI ,CORPSE ,VERONICA>>>\n\t\t       <TELL\n\"Politeness dictates that you ask \" D ,PRSI \" for it.\" CR>)\n\t\t      (T\n\t\t       <SETG PRSI <>>\n\t\t       <RFALSE>)>)\n\t       (<==? ,PRSO <LOC ,WINNER>>\n\t\t<TELL \"You're in it, nitwit!\" CR>)>>"
  },
  "V-TAKE": {
   "name": "V-TAKE",
   "file": "verbs.zil",
   "line": 1985,
   "endLine": 1989,
   "source": "<ROUTINE V-TAKE ()\n\t <COND (<==? <ITAKE> T>\n\t\t<TELL\n,YOU-ARE \"now carrying \">\n\t\t<TELL-PRSO>)>>"
  },
  "PRE-TAKEOUT": {
   "name": "PRE-TAKEOUT",
   "file": "verbs.zil",
   "line": 1991,
   "endLine": 1992,
   "source": "<ROUTINE PRE-TAKEOUT ()\n  <TELL ,SORRY-I-DONT CR>>"
  },
  "V-TAKEOUT": {
   "name": "V-TAKEOUT",
   "file": "verbs.zil",
   "line": 1994,
   "endLine": 1995,
   "source": "<ROUTINE V-TAKEOUT ()\n\t <RTRUE>>"
  },
  "V-DISEMBARK": {
   "name": "V-DISEMBARK",
   "file": "verbs.zil",
   "line": 1997,
   "endLine": 2006,
   "source": "<ROUTINE V-DISEMBARK ()\n\t <COND (<==? <LOC ,PRSO> ,WINNER>\n\t\t<TELL\n,YOU-DONT \"need to take out \" THE ,PRSO \" to use it.\" CR>)\n\t       (<NOT <==? <LOC ,WINNER> ,PRSO>>\n\t\t<TELL ,YOU-ARENT \"in that!\" CR>\n\t\t<RFATAL>)\n\t       (T\n\t\t<TELL ,YOU-ARE \"on your own feet again.\" CR>\n\t\t<MOVE ,WINNER ,HERE>)>>"
  },
  "V-TELL": {
   "name": "V-TELL",
   "file": "verbs.zil",
   "line": 2011,
   "endLine": 2042,
   "source": "<ROUTINE V-TELL ()\n\t <COND (<==? ,PRSO ,PLAYER>\n\t\t<TELL\n\"Talking to yourself is a sign of impending looniness.\" CR>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<SETG P-CONT <>>\n\t\t<RFATAL>)\n\t       (<AND <EQUAL? ,PRSO ,VERONICA>\n\t\t     <IN-MOTION? ,VERONICA>\n\t\t     <NOT <IN? ,VERONICA ,BALLROOM-8>>>\n\t\t<TELL-IGNORES>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<SETG P-CONT <>>\n\t\t<RFATAL>)\n\t       (<FSET? ,PRSO ,PERSON>\n\t\t<COND (<NOT <EQUAL? <META-LOC ,PRSO> ,HERE>>\n\t\t       <TELL-ISNT-HERE ,PRSO>\n\t\t       <SETG P-CONT <>>\n\t\t       <SETG QUOTE-FLAG <>>\n\t\t       <RFATAL>)\n\t\t      (,P-CONT\n\t\t       <SETG WINNER ,PRSO>)\n\t\t      (ELSE\n\t\t       <TELL CD ,PRSO ,LISTENING CR>)>\n\t\t<SETG QCONTEXT ,PRSO>\n\t\t<SETG QCONTEXT-ROOM ,HERE>)\n\t       (T\n\t\t<TELL-YOU-CANT \"talk to \" <>>\n\t\t<TELL-PRSO>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<SETG P-CONT <>>\n\t\t<RFATAL>)>>"
  },
  "PRE-TELL-ME": {
   "name": "PRE-TELL-ME",
   "file": "verbs.zil",
   "line": 2044,
   "endLine": 2057,
   "source": "<ROUTINE PRE-TELL-ME (\"AUX\" P OW)\n\t <SET OW ,WINNER>\n\t <COND (<AND ,QCONTEXT\n\t\t     <==? ,HERE ,QCONTEXT-ROOM>\n\t\t     <==? ,HERE <META-LOC ,QCONTEXT>>\n\t\t     <EQUAL? ,PRSO ,PLAYER>>\n\t\t<SETG WINNER ,PLAYER>\n\t\t<PERFORM ,V?ASK-ABOUT ,QCONTEXT ,PRSI>\n\t\t<SETG WINNER .OW>\n\t\t<RTRUE>)\n\t       ;(<AND <EQUAL? ,PRSO ,PLAYER>\n\t\t      <SET P <FIND-FLAG ,HERE ,PERSON ,WINNER>>>\n\t\t <PERFORM ,V?ASK-ABOUT .P ,PRSI>\n\t\t <RTRUE>)>>"
  },
  "V-TELL-ME": {
   "name": "V-TELL-ME",
   "file": "verbs.zil",
   "line": 2059,
   "endLine": 2072,
   "source": "<ROUTINE V-TELL-ME ()\n\t <COND (<NOT <EQUAL? ,PLAYER ,WINNER>>\n\t\t<COND (<NOT <EQUAL? ,PRSO ,PLAYER>>\n\t\t       <TELL\n\"\\\"Tell \" HIM/HER ,PRSO \" yourself.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"\\\"I haven't any thing to say about \" THE ,PRSI \".\" CR>)>)\n\t       (<EQUAL? ,PRSO ,PLAYER>\n\t\t<TELL-ISNT-ANYONE>)\n\t       (<NOT <FSET? ,PRSO ,PERSON>>\n\t\t<TELL\nCTHE ,PRSO \" is certainly unlikely to spread the story.\" CR>)\n\t       (T <TELL CD ,PRSO <PICK-ONE ,WHO-CARES> \".\" CR>)>>"
  },
  "PRE-TELL-ME-ABOUT": {
   "name": "PRE-TELL-ME-ABOUT",
   "file": "verbs.zil",
   "line": 2074,
   "endLine": 2085,
   "source": "<ROUTINE PRE-TELL-ME-ABOUT (\"AUX\" P)\n\t <COND (<AND ,QCONTEXT\n\t\t     <==? ,HERE ,QCONTEXT-ROOM>\n\t\t     <==? ,HERE <META-LOC ,QCONTEXT>>>\n\t\t<PERFORM <COND (<EQUAL? ,WINNER ,PLAYER> ,V?TELL-ME)\n\t\t\t       (T ,V?ASK-ABOUT)>\n\t\t\t ,QCONTEXT\n\t\t\t ,PRSO>\n\t\t<RTRUE>)\n\t       ;(<SET P <FIND-FLAG ,HERE ,PERSON ,WINNER>>\n\t\t <PERFORM ,V?ASK-ABOUT .P ,PRSO>\n\t\t <RTRUE>)>>"
  },
  "V-TELL-ME-ABOUT": {
   "name": "V-TELL-ME-ABOUT",
   "file": "verbs.zil",
   "line": 2087,
   "endLine": 2088,
   "source": "<ROUTINE V-TELL-ME-ABOUT ()\n\t <TELL-ISNT-ANYONE>>"
  },
  "V-THANKS": {
   "name": "V-THANKS",
   "file": "verbs.zil",
   "line": 2090,
   "endLine": 2098,
   "source": "<ROUTINE V-THANKS (\"AUX\" P)\n\t <COND ;(<OR <AND ,PRSO <FSET? ,PRSO ,PERSON>>\n\t\t    <AND ,QCONTEXT\n\t\t\t <==? ,HERE ,QCONTEXT-ROOM>\n\t\t\t <==? ,HERE <META-LOC ,QCONTEXT>>>\n\t\t    <SET P <FIND-FLAG ,HERE ,PERSON ,WINNER>>>\n\t\t<TELL CD <OR ,PRSO ,QCONTEXT .P>\n\t\t\t\" acknowledges your thanks.\"CR>)\n\t       (T <TELL \"You're more than welcome.\" CR>)>>"
  },
  "V-THROW": {
   "name": "V-THROW",
   "file": "verbs.zil",
   "line": 2100,
   "endLine": 2100,
   "source": "<ROUTINE V-THROW () <COND (<IDROP> <TELL \"Thrown.\" CR>)>>"
  },
  "V-THROW-AT": {
   "name": "V-THROW-AT",
   "file": "verbs.zil",
   "line": 2102,
   "endLine": 2108,
   "source": "<ROUTINE V-THROW-AT ()\n\t <COND (<NOT <IDROP>> <RTRUE>)\n\t       (<FSET? ,PRSI ,PERSON>\n\t\t<TELL CD ,PRSI\n\t\t      \", puzzled by your unusual methods, ducks as \"\n\t\t      THE ,PRSO \" flies by.\" CR>)\n\t       (T <TELL \"Maybe you aren't feeling well.\" CR>)>>"
  },
  "V-THROW-THROUGH": {
   "name": "V-THROW-THROUGH",
   "file": "verbs.zil",
   "line": 2110,
   "endLine": 2113,
   "source": "<ROUTINE V-THROW-THROUGH ()\n\t <COND (<NOT <FSET? ,PRSO ,PERSON>>\n\t\t<TELL \"Let's not resort to violence, please.\" CR>)\n\t       (T <V-THROW>)>>"
  },
  "PRE-TIE-TO": {
   "name": "PRE-TIE-TO",
   "file": "verbs.zil",
   "line": 2115,
   "endLine": 2118,
   "source": "<ROUTINE PRE-TIE-TO ()\n\t <COND (<OR <NOT <FSET? ,PRSO ,PERSON>>\n\t\t    <NOT <FSET? ,PRSI ,FURNITURE>>>\n\t\t<TELL \"That won't do any good.\" CR>)>>"
  },
  "V-TIE-TO": {
   "name": "V-TIE-TO",
   "file": "verbs.zil",
   "line": 2120,
   "endLine": 2122,
   "source": "<ROUTINE V-TIE-TO ()\n\t<TELL-YOU-CANT \"tie \" <>>\n\t<TELL D ,PRSO \" to that.\" CR>>"
  },
  "PRE-TIE-WITH": {
   "name": "PRE-TIE-WITH",
   "file": "verbs.zil",
   "line": 2124,
   "endLine": 2127,
   "source": "<ROUTINE PRE-TIE-WITH ()\n\t <COND (<OR <NOT <FSET? ,PRSO ,PERSON>>\n\t\t    <NOT <FSET? ,PRSI ,TOOLBIT>>>\n\t\t<TELL \"That won't do any good.\" CR>)>>"
  },
  "V-TIE-WITH": {
   "name": "V-TIE-WITH",
   "file": "verbs.zil",
   "line": 2129,
   "endLine": 2137,
   "source": "<ROUTINE V-TIE-WITH ()\n\t<COND (<FSET? ,PRSO ,PERSON>\n\t       <TELL\n\"\\\"I'll sue!\\\"\" CR>)\n\t      (T\n\t       <TELL-YOU-CANT <COND (<EQUAL? ,PRSI ,HANDCUFFS> \"handcuff \")\n\t\t\t\t    (T \"tie \" ;V)>\n\t\t\t      <>>\n\t       <TELL D ,PRSO \" with that.\" CR>)>>"
  },
  "V-TURN": {
   "name": "V-TURN",
   "file": "verbs.zil",
   "line": 2139,
   "endLine": 2139,
   "source": "<ROUTINE V-TURN () <TELL \"This has no effect.\" CR>>"
  },
  "V-LAMP-ON": {
   "name": "V-LAMP-ON",
   "file": "verbs.zil",
   "line": 2141,
   "endLine": 2151,
   "source": "<ROUTINE V-LAMP-ON ()\n\t <COND (<EQUAL? ,PRSO ,SINK ,WATER>\n\t\t<TELL\n\"You turn the handle and lo! The water starts to run. Impressed\nwith yourself, you turn the handle once again, and the water stops\nrunning! You try it once more, just to make sure. Bravo!\" CR>)\n\t       (<FSET? ,PRSO ,PERSON>\n\t\t<TELL <PICK-ONE ,YUKS> CR>)\n\t       (T\n\t\t<TELL-YOU-CANT \"turn on \" <>>\n\t\t<TELL-PRSO>)>>"
  },
  "V-LAMP-OFF": {
   "name": "V-LAMP-OFF",
   "file": "verbs.zil",
   "line": 2153,
   "endLine": 2158,
   "source": "<ROUTINE V-LAMP-OFF ()\n\t <COND (<FSET? ,PRSO ,PERSON>\n\t\t<TELL \"Your vulgar ways would turn anyone off.\" CR>)\n\t       (T\n\t\t<TELL-YOU-CANT \"turn off \" <>>\n\t\t<TELL-PRSO>)>>"
  },
  "PRE-UNLOCK": {
   "name": "PRE-UNLOCK",
   "file": "verbs.zil",
   "line": 2166,
   "endLine": 2170,
   "source": "<ROUTINE PRE-UNLOCK ()\n\t <COND (<AND <OUTSIDE? ,HERE>\n\t\t     <FSET? ,PRSO ,DOORBIT>\n\t\t     <NOT ,PRSI>>\n\t\t<TELL ,YOU-DONT-HAVE \"the right key.\" CR>)>>"
  },
  "V-UNLOCK": {
   "name": "V-UNLOCK",
   "file": "verbs.zil",
   "line": 2174,
   "endLine": 2204,
   "source": "<ROUTINE V-UNLOCK ()\n\t <COND (,PRSI\n\t\t<TELL-YOU-CANT \"unlock \" <>>\n\t\t<TELL A ,PRSO \" with \" A ,PRSI \".\" CR>)\n\t       (<NOT <OR <FSET? ,PRSO ,CONTBIT> <FSET? ,PRSO ,DOORBIT>>>\n\t\t<TELL-MORE-CLEVER>)\n\t       (<OR <FSET? ,PRSO ,DOORBIT>\n\t\t    <NOT <==? <GETP ,PRSO ,P?CAPACITY> 0>>>\n\t\t<COND (<NOT <FSET? ,PRSO ,LOCKED>>\n\t\t       <TELL ,ITS-ALREADY \"unlocked.\" CR>)\n\t\t      (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL ,ITS-ALREADY \"open.\" CR>)\n\t\t      (<EQUAL? <GETP ,PRSO ,P?UNLOCK> ,ROOMS>\n\t\t       <TELL\n\"This door doesn't have a lock.\" CR>)\n\t\t      (<FSET? ,PRSO ,RMUNGBIT>\n\t\t       <TELL-YOU-CANT \"unlock it. The lock is broken\">)\n\t\t      (<NOT <GETP ,PRSO ,P?UNLOCK>>\n\t\t       <TELL-YOU-CANT \"unlock it\" <>>\n\t\t       <UNLESS-HAVE-KEY>)\n\t\t      (<NOT <EQUAL? <GETP ,PRSO ,P?UNLOCK> ,HERE>>\n\t\t       <TELL\n,HAVE-TO \"unlock it from the other side\">\n\t\t       <UNLESS-HAVE-KEY>)\n\t\t      (T\n\t\t       <FCLEAR ,PRSO ,LOCKED>\n\t\t       <TELL\n\"Okay, \" THE ,PRSO \" is now unlocked.\" CR>)>)\n\t       (T\n\t\t<TELL-YOU-CANT \"unlock \" <>>\n\t\t<TELL-PRSO>)>>"
  },
  "UNLESS-HAVE-KEY": {
   "name": "UNLESS-HAVE-KEY",
   "file": "verbs.zil",
   "line": 2206,
   "endLine": 2207,
   "source": "<ROUTINE UNLESS-HAVE-KEY ()\n\t <TELL \" unless you have the key.\" CR>>"
  },
  "V-UNTIE": {
   "name": "V-UNTIE",
   "file": "verbs.zil",
   "line": 2209,
   "endLine": 2210,
   "source": "<ROUTINE V-UNTIE ()\n\t <TELL-YOU-CANT \"untie it\">>"
  },
  "V-USE": {
   "name": "V-USE",
   "file": "verbs.zil",
   "line": 2214,
   "endLine": 2215,
   "source": "<ROUTINE V-USE ()\n\t <TELL-SPECIFIC>>"
  },
  "V-WAIT": {
   "name": "V-WAIT",
   "file": "verbs.zil",
   "line": 2229,
   "endLine": 2276,
   "source": "<ROUTINE V-WAIT (\"OPTIONAL\" (NUM 10) (WHO <>) (INT <>)\n\t\t \"AUX\" VAL HR (RESULT T))\n\t #DECL ((NUM) FIX)\n\t <SET HR ,HERE>\n\t <SETG WHO-WAIT 0>\n\t <COND (<NOT .INT> <TELL \"Time passes...\" CR>)>\n\t <REPEAT ()\n\t\t <COND (<L? <SET NUM <- .NUM 1>> 0> <RETURN>)\n\t\t       (<SET VAL <CLOCKER>>\n\t\t\t<COND (<OR <==? .VAL ,M-FATAL>\n\t\t\t\t   <NOT <==? .HR ,HERE>>>\n\t\t\t       <SET RESULT ,M-FATAL>\n\t\t\t       <RETURN>)\n\t\t\t      (<AND .WHO <IN? .WHO ,HERE>>\n\t\t\t       <TELL CD .WHO\n\", for whom you are waiting, has arrived.\" CR>\n\t\t\t       <RETURN>)\n\t\t\t      (T\n\t\t\t       <SETG WHO-WAIT <+ ,WHO-WAIT 1>>\n\t\t\t       <COND (<NOT <==? <BAND <GETB 0 1> 16> 0>>\n\t\t\t\t      <TELL \"(\">\n\t\t\t\t      <TIME-PRINT ,PRESENT-TIME>\n\t\t\t\t      <TELL \") \">)>\n\t\t\t       <TELL ,DO-YOU-WANT-TO>\n\t\t\t       <COND (.INT <TELL\n\"continue what you were doing?\">)\n\t\t\t\t     (T <TELL\n\"keep waiting?\">)>\n\t\t\t       <COND (<NOT <YES?>>\n\t\t\t\t      <SET RESULT <>>\n\t\t\t\t      <RETURN>)\n\t\t\t\t     (T <USL>)>)>)\n\t\t       (<AND .WHO <IN? .WHO ,HERE>>\n\t\t\t<TELL CD .WHO\n\", for whom you are waiting, has arrived.\" CR>\n\t\t\t<RETURN>)\n\t\t       (<AND .WHO <G? <SETG WHO-WAIT <+ ,WHO-WAIT 1>> 40>>\n\t\t\t<TELL CD .WHO\n\" still hasn't arrived.  \" ,DO-YOU-WANT-TO \"keep waiting?\">\n\t\t\t<COND (<NOT <YES?>>\n\t\t\t       <SET RESULT <>>\n\t\t\t       <RETURN>)>\n\t\t\t<SETG WHO-WAIT 0>\n\t\t\t<USL>)\n\t\t       (T <USL>)>>\n\t <SETG CLOCK-WAIT T>\n\t <COND (<NOT .INT> <V-TIME>)>\n\t .RESULT>"
  },
  "INT-WAIT": {
   "name": "INT-WAIT",
   "file": "verbs.zil",
   "line": 2280,
   "endLine": 2281,
   "source": "<ROUTINE INT-WAIT (N)\n\t <V-WAIT <* .N 2> <> T>>"
  },
  "V-WAIT-FOR": {
   "name": "V-WAIT-FOR",
   "file": "verbs.zil",
   "line": 2289,
   "endLine": 2305,
   "source": "<ROUTINE V-WAIT-FOR (\"AUX\" WHO)\n\t <COND (<==? ,PRSO ,INTNUM>\n\t\t<COND (<G? ,P-NUMBER ,PRESENT-TIME> <V-WAIT-UNTIL> <RTRUE>)\n\t\t      (<G? ,P-NUMBER 180>\n\t\t       <TELL \"That's too long to wait.\" CR>)\n\t\t      (T <V-WAIT ,P-NUMBER>)>)\n\t       (<==? ,PRSO ,GLOBAL-HERE> <V-WAIT> <RTRUE>)\n\t       (<==? ,PRSO ,MIDNIGHT> <V-WAIT-UNTIL> <RTRUE>)\n\t       (<FSET? ,PRSO ,PERSON>\n\t\t<COND (<SET WHO <CHARACTERIZE? ,PRSO>>\n\t\t       <COND (<IN? .WHO ,HERE>\n\t\t\t      <TELL \"That person's\" ,ALREADY-HERE CR>)\n\t\t\t     (T <V-WAIT 10000 .WHO>)>)\n\t\t      (ELSE <TELL \"You would be better off not waiting.\" CR>)>)\n\t       (<EQUAL? ,PRSO ,PLAYER>\n\t\t<TELL \"You're\" ,ALREADY-HERE CR>)\n\t       (T <TELL \"Not a good idea. You might wait all night.\" CR>)>>"
  },
  "V-WAIT-UNTIL": {
   "name": "V-WAIT-UNTIL",
   "file": "verbs.zil",
   "line": 2309,
   "endLine": 2322,
   "source": "<ROUTINE V-WAIT-UNTIL ()\t;\"?? time?\"\n\t <COND (<==? ,PRSO ,MIDNIGHT>\n\t\t<SETG P-NUMBER 720>\n\t\t<SETG PRSO ,INTNUM>)\n\t       (<L? ,P-NUMBER 8>\n\t\t<SETG P-NUMBER <* <+ ,P-NUMBER 12> 60>>)\n\t       (<L? ,P-NUMBER 13>\n\t\t<SETG P-NUMBER <* ,P-NUMBER 60>>)>\n\t <COND (<==? ,PRSO ,INTNUM>\n\t\t<COND (<G? ,P-NUMBER ,PRESENT-TIME>\n\t\t       <V-WAIT <- ,P-NUMBER ,PRESENT-TIME>>)\n\t\t      (T <TELL\n,YOU-ARE \"clearly ahead of your time.\" CR>)>)\n\t       (T <TELL \"It has been a long week, hasn't it?\" CR>)>>"
  },
  "V-ALARM": {
   "name": "V-ALARM",
   "file": "verbs.zil",
   "line": 2324,
   "endLine": 2329,
   "source": "<ROUTINE V-ALARM ()\n\t <COND (<FSET? ,PRSO ,PERSON>\n\t\t<TELL \"He's wide awake, or haven't you noticed?\" CR>)\n\t       (ELSE\n\t\t<TELL\n,TOO-BAD THE ,PRSO \" isn't asleep.\" CR>)>>"
  },
  "V-WALK": {
   "name": "V-WALK",
   "file": "verbs.zil",
   "line": 2333,
   "endLine": 2384,
   "source": "<ROUTINE V-WALK (\"AUX\" PT PTS STR OBJ RM)\n\t #DECL ((PT) <OR FALSE TABLE> (PTS) FIX\n\t\t(OBJ) OBJECT (RM) <OR FALSE OBJECT>)\n\t <COND (<EQUAL? ,WINNER ,PLAYER>\n\t\t<PUT <GET ,GOAL-TABLES ,PLAYER-C> ,GOAL-S <>>)>\n\t <COND (<NOT ,PRSO> <TELL-YOU-CANT ,GO-THAT-WAY>)\n\t       (<SET PT <GETPT ,HERE ,PRSO>>\n\t\t<SETG P-WALK-DIR ,PRSO>\n\t\t<COND (<==? <SET PTS <PTSIZE .PT>> ,UEXIT>\n\t\t       <SET RM <GETB .PT ,REXIT>>\n\t\t       <GOTO .RM>)\n\t\t      (<==? .PTS ,NEXIT>\n\t\t       <TELL <GET .PT ,NEXITSTR> CR>\n\t\t       <RFATAL>)\n\t\t      (<==? .PTS ,FEXIT>\n\t\t       <COND (<SET RM <APPLY <GET .PT ,FEXITFCN>>>\n\t\t\t      <GOTO .RM>)\n\t\t\t     (T\n\t\t\t      <RFATAL>)>)\n\t\t      (<==? .PTS ,CEXIT>\n\t\t       <COND (<VALUE <GETB .PT ,CEXITFLAG>>\n\t\t\t      <GOTO <GETB .PT ,REXIT>>)\n\t\t\t     (<SET STR <GET .PT ,CEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <TELL-YOU-CANT ,GO-THAT-WAY>\n\t\t\t      <RFATAL>)>)\n\t\t      (<==? .PTS ,DEXIT>\n\t\t       <SET OBJ <GETB .PT ,DEXITOBJ>>\n\t\t       <COND (<FSET? .OBJ ,OPENBIT>\n\t\t\t      <GOTO <GETB .PT ,REXIT>>)\n\t\t\t     (<NOT <FSET? .OBJ ,LOCKED>>\n\t\t\t      <OPEN-DOOR .OBJ>\n\t\t\t      <GOTO <GETB .PT ,REXIT>>)\n\t\t\t     (<EQUAL? <GETP .OBJ ,P?UNLOCK> ,HERE>\n\t\t\t      <TELL-UNLOCK-IT .OBJ>)\n\t\t\t     (<FSET? .OBJ ,INVISIBLE>\n\t\t\t      <TELL-YOU-CANT ,GO-THAT-WAY>)\n\t\t\t     (<SET STR <GET .PT ,DEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <TELL ,TOO-BAD THE .OBJ \" is locked.\" CR>\n\t\t\t      <THIS-IS-IT .OBJ>\n\t\t\t      <RFATAL>)>)>)\n\t       (<==? ,PRSO ,P?IN>\n\t\t<TELL \"What compass direction do you want to go in?\" CR>\n\t\t<RFATAL>)\n\t       (T\n\t\t<TELL-YOU-CANT ,GO-THAT-WAY>\n\t\t<RFATAL>)>>"
  },
  "PLAYER-EMERGES": {
   "name": "PLAYER-EMERGES",
   "file": "verbs.zil",
   "line": 2386,
   "endLine": 2389,
   "source": "<ROUTINE PLAYER-EMERGES ()\n\t <TELL\n\"You emerge from the concealment of \" THE ,PLAYER-HIDING \".\" CR>\n\t <SETG PLAYER-HIDING <>>>"
  },
  "PLAYER-GETS-UP": {
   "name": "PLAYER-GETS-UP",
   "file": "verbs.zil",
   "line": 2391,
   "endLine": 2398,
   "source": "<ROUTINE PLAYER-GETS-UP ()\n\t <COND (,PLAYER-HIDING\n\t\t<PLAYER-EMERGES>\n\t\t<MOVE ,PLAYER ,HERE>)\n\t       (<FSET? <LOC ,PLAYER> ,VEHBIT>\n\t\t<TELL\n\"You get out of \" THE <LOC ,PLAYER> \".\" CR>\n\t\t<MOVE ,PLAYER ,HERE>)>>"
  },
  "OPEN-DOOR": {
   "name": "OPEN-DOOR",
   "file": "verbs.zil",
   "line": 2400,
   "endLine": 2408,
   "source": "<ROUTINE OPEN-DOOR (OBJ)\n\t <PLAYER-GETS-UP>\n\t <FSET .OBJ ,OPENBIT>\n\t <COND (<==? ,WINNER ,PLAYER>\n\t\t<TELL \"You open\">)\n\t       (T\n\t\t<FCLEAR .OBJ ,LOCKED>\n\t\t<TELL CD ,WINNER \" opens\">)>\n\t <TELL \" \" THE .OBJ \".\" CR>>"
  },
  "DO-WALK": {
   "name": "DO-WALK",
   "file": "verbs.zil",
   "line": 2413,
   "endLine": 2415,
   "source": "<ROUTINE DO-WALK (DIR)\n\t <SETG P-WALK-DIR .DIR>\n\t <PERFORM ,V?WALK .DIR>>"
  },
  "IRON-GRIP": {
   "name": "IRON-GRIP",
   "file": "verbs.zil",
   "line": 2419,
   "endLine": 2421,
   "source": "<ROUTINE IRON-GRIP ()\n\t <TELL\n'DUFFY \" holds you in a grip of iron. You cannot escape!\" CR>>"
  },
  "V-WALK-TO": {
   "name": "V-WALK-TO",
   "file": "verbs.zil",
   "line": 2423,
   "endLine": 2452,
   "source": "<ROUTINE V-WALK-TO (\"AUX\" WHO RM)\n\t <COND (,DUFFY-SNARFED\n\t\t<IRON-GRIP>\n\t\t<RTRUE>)\n\t       (<AND <FSET? ,PRSO ,DOORBIT>\n\t\t     <SET RM <GETP ,PRSO ,P?UNLOCK>>\n\t\t     <NOT <EQUAL? .RM ,ROOMS>>>\n\t\t<SETG PRSO .RM>\n\t\t<V-THROUGH>)\n\t       (<OR <EQUAL? <META-LOC ,PRSO> ,HERE>\n\t\t    <GLOBAL-IN? ,PRSO ,HERE>>\n\t\t<TELL-CLOSE-ENOUGH>)\n\t       (<AND <IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t     <FSET? ,PRSO ,PERSON>>\n\t\t<SET WHO <CHARACTERIZE ,PRSO>>\n\t\t<COND (<NEARBY? .WHO> \n\t\t       <SETG PRSO <META-LOC .WHO>>\n\t\t       <V-THROUGH>)\n\t\t      (ELSE\n\t\t       <TELL-YOU-CANT \"even see \" <>>\n\t\t       <TELL D ,PRSO \"!\" CR>)>)\n\t       (<EQUAL? ,PRSO ,HALLWAY>\n\t\t<SETG PRSO ,HALL>\n\t\t<V-THROUGH>)\n\t       (<IN? <META-LOC ,PRSO> ,ROOMS>\n\t\t<SETG PRSO <META-LOC ,PRSO>>\n\t\t<V-THROUGH>)\n\t       (T\n\t\t<TELL-YOU-CANT\n\"go from here to there, at least not directly\">)>>"
  },
  "V-RUN-OVER": {
   "name": "V-RUN-OVER",
   "file": "verbs.zil",
   "line": 2454,
   "endLine": 2455,
   "source": "<ROUTINE V-RUN-OVER ()\n\t <TELL \"That doesn't make much sense.\" CR>>"
  },
  "V-WHAT": {
   "name": "V-WHAT",
   "file": "verbs.zil",
   "line": 2457,
   "endLine": 2468,
   "source": "<ROUTINE V-WHAT (\"AUX\" OW OBJ)\n\t <SET OW ,WINNER>\n\t <COND (<NOT <EQUAL? ,WINNER ,PLAYER>>\n\t\t<COND (<EQUAL? ,PRSO ,YOU> <SET OBJ ,WINNER>)\n\t\t      (ELSE <SET OBJ ,PRSO>)>\n\t\t<SETG WINNER ,PLAYER>\n\t\t<PERFORM ,V?ASK-ABOUT .OW .OBJ>\n\t\t<SETG WINNER .OW>\n\t\t<RTRUE>)\n\t       (<FSET? ,PRSO ,PERSON>\n\t\t<TELL \"Try asking that person.\" CR>)\n\t       (T <TELL \"Are you talking to yourself again?\" CR>)>>"
  },
  "V-YN": {
   "name": "V-YN",
   "file": "verbs.zil",
   "line": 2470,
   "endLine": 2475,
   "source": "<ROUTINE V-YN ()\n\t <COND (<AND ,QCONTEXT\n\t\t     <==? ,HERE ,QCONTEXT-ROOM>\n\t\t     <==? ,HERE <META-LOC ,QCONTEXT>>>\n\t\t<TELL CD ,QCONTEXT ,IGNORES-YOU \" completely.\" CR>)\n\t       (T <TELL \"That deserves to be ignored.\" CR>)>>"
  },
  "V-UNMASK": {
   "name": "V-UNMASK",
   "file": "verbs.zil",
   "line": 2477,
   "endLine": 2487,
   "source": "<ROUTINE V-UNMASK ()\n\t <COND (<NOT ,PRSO>\n\t\t<PERFORM ,V?TAKE ,MASK>\n\t\t<RTRUE>)\n\t       (<FSET? ,PRSO ,PERSON>\n\t\t<TELL\nCD ,PRSO \" isn't wearing a mask! (Well, that's what they always say in\nhorror movies).\" CR>)\n\t       (ELSE\n\t\t<TELL\n\"You have an odd idea of what constitutes a costume.\" CR>)>>"
  },
  "V-HANG-UP": {
   "name": "V-HANG-UP",
   "file": "verbs.zil",
   "line": 2489,
   "endLine": 2501,
   "source": "<ROUTINE V-HANG-UP ()\n\t <COND (<EQUAL? ,PRSO ,ALICIA-COAT ,YOUR-COAT ,GUNBELT>\n\t\t<COND (<EQUAL? ,HERE ,EAST-COAT-CLOSET ,WEST-COAT-CLOSET>\n\t\t       <COND (<IN? ,PRSO ,HERE>\n\t\t\t      <TELL \"It already is.\" CR>)\n\t\t\t     (T\n\t\t\t      <MOVE ,PRSO ,HERE>\n\t\t\t      <TELL \"Hung.\" CR>)>)\n\t\t      (ELSE\n\t\t       <TELL \"This isn't a closet.\" CR>)>)\n\t       (ELSE\n\t\t<TELL\n\"It's not a picture, and it's not a telephone, so how can you?\" CR>)>>"
  },
  "V-SCORE": {
   "name": "V-SCORE",
   "file": "verbs.zil",
   "line": 2503,
   "endLine": 2506,
   "source": "<ROUTINE V-SCORE ()\n\t <TELL\n\"It's not so much a question of your score, but of whether or not you\nget the story.\" CR>>"
  },
  "V-DANCE": {
   "name": "V-DANCE",
   "file": "verbs.zil",
   "line": 2508,
   "endLine": 2541,
   "source": "<ROUTINE V-DANCE (\"AUX\" OW)\n\t <COND (<AND <NOT <EQUAL? ,WINNER ,PLAYER>>\n\t\t     <EQUAL? ,PRSO <> ,ME ,PLAYER>>\n\t\t<SET OW ,WINNER>\n\t\t<SETG WINNER ,PLAYER>\n\t\t<PERFORM ,V?DANCE .OW>\n\t\t<SETG WINNER .OW>\n\t\t<RTRUE>)\n\t       (<NOT <IN-BALLROOM? ,WINNER>>\n\t\t<TELL ,YOU-ARENT \"even in the Ballroom.\" CR>)\n\t       (<NOT ,PRSO>\n\t\t<TELL\n\"You dance by yourself for a while.\" CR>)\n\t       (<FSET? ,PRSO ,PERSON>\n\t\t<COND (<IN-MOTION? ,PERSON>\n\t\t       <TELL\nCD ,PRSO \" seems to be too busy to dance right now.\" CR>)\n\t\t      (<OR <AND <NOT ,DANCE-WITH-FEMALE?>\n\t\t\t\t<NOT ,DANCE-WITH-MALE?>>\n\t\t\t   <AND ,DANCE-WITH-FEMALE? <FSET? ,PRSO ,FEMALE>>\n\t\t\t   <AND ,DANCE-WITH-MALE? <NOT <FSET? ,PRSO ,FEMALE>>>>\n\t\t       <COND (<FSET? ,PRSO ,FEMALE>\n\t\t\t      <SETG DANCE-WITH-FEMALE? T>)\n\t\t\t     (ELSE\n\t\t\t      <SETG DANCE-WITH-MALE? T>)>\n\t\t       <TELL\n\"You and \" D ,PRSO \" dance for a while.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\nCD ,PRSO \" doesn't want to dance with you.\" CR>)>)\n\t       (ELSE\n\t\t<TELL\n\"Dancing with \" A ,PRSO \", eh? Some see that as a sign of impending mental\ncollapse.\" CR>)>>"
  },
  "V-WAVE": {
   "name": "V-WAVE",
   "file": "verbs.zil",
   "line": 2546,
   "endLine": 2565,
   "source": "<ROUTINE V-WAVE ()\n\t <COND (<AND <EQUAL? ,HERE ,BALLROOM-9>\n\t\t     <IN? ,VERONICA ,BALLROOM-8>\n\t\t     <EQUAL? ,PRSO <> ,GLOBAL-MICHAEL ,GLOBAL-VERONICA>>\n\t\t<THIS-IS-S-HE ,MICHAEL>\n\t\t<TELL\n'MICHAEL \" waves you over again.\" CR>)\n\t       (<NOT ,PRSO>\n\t\t<TELL \"Calling a taxi, eh?\" CR>)\n\t       (<FSET? ,PRSO ,PERSON>\n\t\t<COND (<NOT <NEARBY? ,PRSO>>\n\t\t       <TELL-ISNT-HERE ,PRSO>)\n\t\t      (<PROB 50>\n\t\t       <TELL\nCD ,PRSO \" waves back, puzzled.\" CR>)\n\t\t      (T\n\t\t       <TELL\nCD ,PRSO \" doesn't seem overly interested.\" CR>)>)\n\t       (ELSE\n\t\t<TELL \"Waving at \" A ,PRSO \" again, eh?\" CR>)>>"
  },
  "NEARBY?": {
   "name": "NEARBY?",
   "file": "verbs.zil",
   "line": 2567,
   "endLine": 2572,
   "source": "<ROUTINE NEARBY? (PER)\n\t <COND (<IN? .PER ,HERE> <RTRUE>)\n\t       (<AND <IN-BALLROOM? .PER>\n\t\t     <IN-BALLROOM? ,PLAYER>>\n\t\t<RTRUE>)\n\t       (<CORRIDOR-LOOK .PER> <RTRUE>)>>"
  },
  "V-WHAT-IS-WAS": {
   "name": "V-WHAT-IS-WAS",
   "file": "verbs.zil",
   "line": 2574,
   "endLine": 2576,
   "source": "<ROUTINE V-WHAT-IS-WAS ()\n\t <TELL-DONT-KNOW>\n\t <CRLF>>"
  },
  "V-DIAGNOSE": {
   "name": "V-DIAGNOSE",
   "file": "verbs.zil",
   "line": 2578,
   "endLine": 2591,
   "source": "<ROUTINE V-DIAGNOSE ()\n\t <COND (<EQUAL? ,DRINK-COUNT 0>\n\t\t<TELL ,YOU-ARE \"healthy and sober.\">)\n\t       (<EQUAL? ,DRINK-COUNT 1>\n\t\t<TELL \"You've had one drink. The effect has been minimal.\">)\n\t       (ELSE\n\t\t<TELL\n\"You've had \" <GET ,NUMBERS <COND (<G? ,DRINK-COUNT 3> 4) (T ,DRINK-COUNT)>>\n\" drinks. I would think twice\nabout driving home if I were you. You might call a taxi instead.\">)>\n\t <COND (<FSET? ,DOG ,RMUNGBIT>\n\t\t<TELL \" You've been bitten by a dog, but I think he had\na rabies tag, so you're safe.\">)>\n\t <CRLF>>"
  },
  "V-REVEAL": {
   "name": "V-REVEAL",
   "file": "verbs.zil",
   "line": 2593,
   "endLine": 2600,
   "source": "<ROUTINE V-REVEAL ()\n\t <COND (<FSET? ,PRSI ,PERSON>\n\t\t<TELL\n\"Your revelation of \" D ,PRSO \" does not seem to interest \" D ,PRSI \".\" CR>)\n\t       (ELSE\n\t\t<TELL\n,YOU-MUST \"be pretty anxious to talk about it, if you're telling \"\nTHE ,PRSI \".\" CR>)>>"
  },
  "V-$REVEAL": {
   "name": "V-$REVEAL",
   "file": "verbs.zil",
   "line": 2602,
   "endLine": 2603,
   "source": "<ROUTINE V-$REVEAL ()\n\t <RTRUE>>"
  },
  "V-$DISCOVER": {
   "name": "V-$DISCOVER",
   "file": "verbs.zil",
   "line": 2605,
   "endLine": 2619,
   "source": "<ROUTINE V-$DISCOVER ()\n\t <COND (<IN? ,CORPSE ,PLAYER>\n\t\t<SETG PLAYER-SEEN-WITH-BODY? T>)>\n\t <COND (<EQUAL? ,PRSI ,PLAYER ,VERONICA> <RTRUE>)\n\t       (<NOT <FSET? ,PRSI ,TOLD>>\n\t\t<REVEAL-MURDER ,PRSI>\n\t\t<COND (<IN? ,PRSI ,HERE>\n\t\t       <TELL\nCD ,PRSI \" sees the body and recoils in horror. \\\"That's \" 'VERONICA \"!\\\" \"\nHE/SHE ,PRSI \" exclaims in shock and surprise.\" CR>)>\n\t\t<RTRUE>)\n\t       (<AND <IN? ,PRSI ,HERE>\n\t\t     <NOT <EQUAL? ,PRSI ,DETECTIVE ,DUFFY>>>\n\t\t<TELL\nCD ,PRSI \" stares, horrified, at the body.\" CR>)>>"
  },
  "V-ORDER": {
   "name": "V-ORDER",
   "file": "verbs.zil",
   "line": 2621,
   "endLine": 2627,
   "source": "<ROUTINE V-ORDER ()\n\t <COND (<IN? ,BARTENDER ,HERE>\n\t\t<PERFORM ,V?ASK-FOR ,BARTENDER ,PRSO>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<TELL\n,THERE-IS \"no one here to give you \" A ,PRSO \".\" CR>)>>"
  },
  "V-POUR-ON": {
   "name": "V-POUR-ON",
   "file": "verbs.zil",
   "line": 2629,
   "endLine": 2640,
   "source": "<ROUTINE V-POUR-ON ()\n\t <COND (<FSET? ,PRSO ,DRINKBIT>\n\t\t<COND (<FSET? ,PRSI ,PERSON>\n\t\t       <TELL\nCTHE ,PRSI \" gets away from you and \" THE ,PRSO \" pours on the ground.\" CR>)\n\t\t      (T\n\t\t       <TELL\nCTHE ,PRSI \" is now wet with some of \">\n\t\t       <TELL-PRSO>)>)\n\t       (T\n\t\t<PERFORM ,V?DROP ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "PRE-WEAR": {
   "name": "PRE-WEAR",
   "file": "verbs.zil",
   "line": 2642,
   "endLine": 2648,
   "source": "<ROUTINE PRE-WEAR ()\n\t <COND (<EQUAL? ,PRSO ,GUNBELT ,YOUR-COAT ,MASK>\n\t\t<RFALSE>)\n\t       (<EQUAL? ,PRSO ,ALICIA-COAT ,FAIRY-MASK>\n\t\t<IT-DOESNT-FIT>)\n\t       (ELSE\n\t\t<TELL-YOU-CANT \"wear that\">)>>"
  },
  "IT-DOESNT-FIT": {
   "name": "IT-DOESNT-FIT",
   "file": "verbs.zil",
   "line": 2650,
   "endLine": 2650,
   "source": "<ROUTINE IT-DOESNT-FIT () <TELL \"It doesn't fit.\" CR>>"
  },
  "V-WEAR": {
   "name": "V-WEAR",
   "file": "verbs.zil",
   "line": 2652,
   "endLine": 2657,
   "source": "<ROUTINE V-WEAR ()\n\t <COND (<FSET? ,PRSO ,WEARBIT>\n\t\t<TELL \"You already are wearing the \" D ,PRSO \".\" CR>)\n\t       (T\n\t\t<FSET ,PRSO ,WEARBIT>\n\t\t<TELL \"Okay.\" CR>)>>"
  },
  "V-TAKE-OFF": {
   "name": "V-TAKE-OFF",
   "file": "verbs.zil",
   "line": 2659,
   "endLine": 2667,
   "source": "<ROUTINE V-TAKE-OFF ()\n\t <COND (<FSET? ,PRSO ,WEARBIT>\n\t\t<FCLEAR ,PRSO ,WEARBIT>\n\t\t<TELL \"Okay, you're no longer wearing the \" D ,PRSO \".\" CR>)\n\t       (<EQUAL? <META-LOC ,PRSO> ,PLAYER>\n\t\t<TELL ,YOU-ARENT \"wearing that.\" CR>)\n\t       (ELSE\n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-COUNT": {
   "name": "V-COUNT",
   "file": "verbs.zil",
   "line": 2669,
   "endLine": 2673,
   "source": "<ROUTINE V-COUNT ()\n\t <TELL\n\"I don't think it's important, and as I recall, you failed \\\"Math for\nJournalists.\\\" Certainly your expense accounts reveal little mathematical\nability (but a lot of creativity).\" CR>>"
  },
  "V-FLUSH": {
   "name": "V-FLUSH",
   "file": "verbs.zil",
   "line": 2675,
   "endLine": 2676,
   "source": "<ROUTINE V-FLUSH ()\n\t <TELL-YOU-CANT \"flush that\">>"
  },
  "V-TIP": {
   "name": "V-TIP",
   "file": "verbs.zil",
   "line": 2678,
   "endLine": 2679,
   "source": "<ROUTINE V-TIP ()\n\t <TELL \"How gauche.\" CR>>"
  },
  "V-WRITE": {
   "name": "V-WRITE",
   "file": "verbs.zil",
   "line": 2681,
   "endLine": 2682,
   "source": "<ROUTINE V-WRITE ()\n\t <TELL \"Trying to deface \" THE ,PRSO \", huh?\" CR>>"
  },
  "V-LEAP": {
   "name": "V-LEAP",
   "file": "verbs.zil",
   "line": 2684,
   "endLine": 2685,
   "source": "<ROUTINE V-LEAP ()\n\t <TELL \"Jumping for joy, eh?\" CR>>"
  },
  "V-BURN": {
   "name": "V-BURN",
   "file": "verbs.zil",
   "line": 2687,
   "endLine": 2696,
   "source": "<ROUTINE V-BURN ()\n\t <COND (<NOT ,PRSI>\n\t\t<COND (<EQUAL? ,HERE ,BALLROOM-8>\n\t\t       <PERFORM ,V?PUT ,PRSO ,FIREPLACE>)\n\t\t      (ELSE\n\t\t       <TELL ,THERE-IS \"no fire\">\n\t\t       <TELL-HERE>)>\n\t\t<RTRUE>)\n\t       (<NOT <FSET? ,PRSO ,BURNBIT>>\n\t\t<TELL \"That won't burn.\" CR>)>>"
  },
  "V-IS": {
   "name": "V-IS",
   "file": "verbs.zil",
   "line": 2698,
   "endLine": 2699,
   "source": "<ROUTINE V-IS ()\n\t <TELL \"Oh?\" CR>>"
  },
  "V-INTERVIEW": {
   "name": "V-INTERVIEW",
   "file": "verbs.zil",
   "line": 2705,
   "endLine": 2707,
   "source": "<ROUTINE V-INTERVIEW ()\n\t <PERFORM ,V?ASK-ABOUT ,PRSO ,PRSO>\n\t <RTRUE>>"
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
   "value": "<ITABLE NONE % <COND (<GASSIGNED? PREDGEN> 150) (ELSE 300)>>"
  },
  "C-INTS": {
   "name": "C-INTS",
   "kind": "global",
   "file": "clock.zil",
   "line": 9,
   "value": "300"
  },
  "C-INTLEN": {
   "name": "C-INTLEN",
   "kind": "constant",
   "file": "clock.zil",
   "line": 11,
   "value": "6"
  },
  "C-ENABLED?": {
   "name": "C-ENABLED?",
   "kind": "constant",
   "file": "clock.zil",
   "line": 13,
   "value": "0"
  },
  "C-TICK": {
   "name": "C-TICK",
   "kind": "constant",
   "file": "clock.zil",
   "line": 15,
   "value": "1"
  },
  "C-RTN": {
   "name": "C-RTN",
   "kind": "constant",
   "file": "clock.zil",
   "line": 17,
   "value": "2"
  },
  "CLOCK-WAIT": {
   "name": "CLOCK-WAIT",
   "kind": "global",
   "file": "clock.zil",
   "line": 37,
   "value": "<>"
  },
  "DEBUG": {
   "name": "DEBUG",
   "kind": "global",
   "file": "debug.zil",
   "line": 1,
   "value": "<>"
  },
  "HDEBUG": {
   "name": "HDEBUG",
   "kind": "global",
   "file": "debug.zil",
   "line": 2,
   "value": "<>"
  },
  "GDEBUG": {
   "name": "GDEBUG",
   "kind": "global",
   "file": "debug.zil",
   "line": 3,
   "value": "<>"
  },
  "EDEBUG": {
   "name": "EDEBUG",
   "kind": "global",
   "file": "debug.zil",
   "line": 4,
   "value": "<>"
  },
  "SHADOW": {
   "name": "SHADOW",
   "kind": "global",
   "file": "debug.zil",
   "line": 5,
   "value": "<>"
  },
  "GOSSIP": {
   "name": "GOSSIP",
   "kind": "global",
   "file": "debug.zil",
   "line": 6,
   "value": "<>"
  },
  "IDEBUG": {
   "name": "IDEBUG",
   "kind": "global",
   "file": "debug.zil",
   "line": 7,
   "value": "<>"
  },
  "SCORE": {
   "name": "SCORE",
   "kind": "global",
   "file": "events.zil",
   "line": 6,
   "value": "21"
  },
  "MOVES": {
   "name": "MOVES",
   "kind": "global",
   "file": "events.zil",
   "line": 7,
   "value": "0"
  },
  "PRESENT-TIME": {
   "name": "PRESENT-TIME",
   "kind": "global",
   "file": "events.zil",
   "line": 9,
   "value": "540"
  },
  "PARTY-OVER": {
   "name": "PARTY-OVER",
   "kind": "global",
   "file": "events.zil",
   "line": 395,
   "value": "<>"
  },
  "OVER-COUNT": {
   "name": "OVER-COUNT",
   "kind": "global",
   "file": "events.zil",
   "line": 396,
   "value": "0"
  },
  "OVER-TABLE": {
   "name": "OVER-TABLE",
   "kind": "global",
   "file": "events.zil",
   "line": 398,
   "value": "<LTABLE \"Guests are starting to leave.\" \"Some guests get their coats and depart.\" \"Most of the guests have left now. A few more are tossing down the last\nof their drinks as they depart.\" \"A few stragglers continue their exhausted revelry, but the party is\nclearly over.\" <>>"
  },
  "DIR-STRINGS": {
   "name": "DIR-STRINGS",
   "kind": "global",
   "file": "goal.zil",
   "line": 7,
   "value": "<PTABLE P?NORTH \"north\" P?SOUTH \"south\" P?EAST \"east\" P?WEST \"west\" P?NW \"northwest\" P?NE \"northeast\" P?SW \"southwest\" P?SE \"southeast\" P?DOWN \"downstairs\" P?UP \"upstairs\" P?IN \"in\" P?OUT \"out\">"
  },
  "HALL-LINE": {
   "name": "HALL-LINE",
   "kind": "global",
   "file": "goal.zil",
   "line": 25,
   "value": "<PTABLE 0 HALLWAY-1 P?EAST P?WEST HALLWAY-2 P?EAST P?WEST HALLWAY-3 P?EAST P?WEST HALLWAY-4 P?NORTH P?SOUTH HALLWAY-5 P?EAST P?WEST HALLWAY-8 P?EAST P?WEST HALLWAY-9 P?EAST P?WEST HALLWAY-10 P?EAST P?WEST HALLWAY-11 P?NORTH P?SOUTH HALLWAY-12 P?NORTH P?SOUTH HALLWAY-13 P?NORTH P?SOUTH HALLWAY-14 P?NORTH P?SOUTH HALLWAY-15 P?NORTH P?SOUTH DINING-ROOM P?EAST P?WEST KITCHEN P?NORTH P?SOUTH BACK-ENTRY 0>"
  },
  "BALLROOM-LINE": {
   "name": "BALLROOM-LINE",
   "kind": "global",
   "file": "goal.zil",
   "line": 43,
   "value": "<PTABLE 24 BALLROOM-2 P?EAST P?WEST BALLROOM-3 P?SOUTH P?NORTH BALLROOM-6 P?SOUTH P?NORTH BALLROOM-9 P?WEST P?EAST BALLROOM-8 P?WEST P?EAST BALLROOM-7 P?NORTH P?SOUTH BALLROOM-4 P?EAST P?WEST BALLROOM-5 P?NORTH P?SOUTH BALLROOM-2 0>"
  },
  "EAST-HALL-LINE": {
   "name": "EAST-HALL-LINE",
   "kind": "global",
   "file": "goal.zil",
   "line": 54,
   "value": "<PTABLE 0 HALLWAY-16 P?EAST P?WEST HALLWAY-17 P?EAST P?WEST HALLWAY-19 0>"
  },
  "GARAGE-LINE": {
   "name": "GARAGE-LINE",
   "kind": "global",
   "file": "goal.zil",
   "line": 59,
   "value": "<PTABLE 0 HALLWAY-6 P?NORTH P?SOUTH HALLWAY-7 P?NORTH P?SOUTH WALKWAY P?WEST P?EAST GARAGE 0>"
  },
  "OUTSIDE-LINE": {
   "name": "OUTSIDE-LINE",
   "kind": "global",
   "file": "goal.zil",
   "line": 65,
   "value": "<PTABLE 24 GARDEN P?NW P?SE NORTH-OF-HOUSE P?WEST P?EAST WEST-OF-GARAGE P?SOUTH P?NORTH WEST-OF-HOUSE P?SOUTH P?WEST CIRCLE P?EAST P?SOUTH OUTSIDE P?NORTH P?SOUTH PATIO P?NORTH P?EAST BACK-PORCH P?WEST P?NE GARDEN 0>"
  },
  "TRANSFER-TABLE": {
   "name": "TRANSFER-TABLE",
   "kind": "global",
   "file": "goal.zil",
   "line": 76,
   "value": "<PTABLE ;\"transfers for hall-line\" 0 0 HALLWAY-12 BALLROOM-7 HALLWAY-11 HALLWAY-16 HALLWAY-5 HALLWAY-6 HALLWAY-1 WEST-OF-HOUSE ;\"transfers for ballroom-line\" BALLROOM-7 HALLWAY-12 0 0 BALLROOM-7 HALLWAY-12 BALLROOM-7 HALLWAY-12 BALLROOM-7 HALLWAY-12 ;\"transfers for east-hall-line\" HALLWAY-16 HALLWAY-11 HALLWAY-16 HALLWAY-11 0 0 HALLWAY-16 HALLWAY-11 HALLWAY-16 HALLWAY-11 ;\"transfers for garage-line\" HALLWAY-6 HALLWAY-5 HALLWAY-6 HALLWAY-5 HALLWAY-6 HALLWAY-5 0 0 WALKWAY GARDEN ;\"transfers for outside-line\" WEST-OF-HOUSE HALLWAY-1 WEST-OF-HOUSE HALLWAY-1 WEST-OF-HOUSE HALLWAY-1 GARDEN WALKWAY 0 0>"
  },
  "COR-1": {
   "name": "COR-1",
   "kind": "global",
   "file": "goal.zil",
   "line": 115,
   "value": "<PTABLE P?WEST P?EAST HALLWAY-1 HALLWAY-2 HALLWAY-3 HALLWAY-4 0>"
  },
  "COR-2": {
   "name": "COR-2",
   "kind": "global",
   "file": "goal.zil",
   "line": 119,
   "value": "<PTABLE P?SOUTH P?NORTH HALLWAY-4 HALLWAY-5 HALLWAY-6 HALLWAY-7 0>"
  },
  "COR-4": {
   "name": "COR-4",
   "kind": "global",
   "file": "goal.zil",
   "line": 123,
   "value": "<PTABLE P?WEST P?EAST HALLWAY-5 HALLWAY-8 HALLWAY-9 HALLWAY-10 HALLWAY-11 0>"
  },
  "COR-8": {
   "name": "COR-8",
   "kind": "global",
   "file": "goal.zil",
   "line": 127,
   "value": "<PTABLE P?SOUTH P?NORTH HALLWAY-16 HALLWAY-11 HALLWAY-12 HALLWAY-13 HALLWAY-14 HALLWAY-15 0>"
  },
  "COR-16": {
   "name": "COR-16",
   "kind": "global",
   "file": "goal.zil",
   "line": 132,
   "value": "<PTABLE P?WEST P?EAST HALLWAY-16 HALLWAY-17 HALLWAY-19 0>"
  },
  "COR-32": {
   "name": "COR-32",
   "kind": "global",
   "file": "goal.zil",
   "line": 136,
   "value": "<PTABLE P?EAST P?WEST BALLROOM-1 HALLWAY-14 0>"
  },
  "COR-64": {
   "name": "COR-64",
   "kind": "global",
   "file": "goal.zil",
   "line": 140,
   "value": "<PTABLE P?EAST P?WEST BALLROOM-4 HALLWAY-13 0>"
  },
  "COR-128": {
   "name": "COR-128",
   "kind": "global",
   "file": "goal.zil",
   "line": 144,
   "value": "<PTABLE P?EAST P?WEST BALLROOM-7 HALLWAY-12 0>"
  },
  "COR-256": {
   "name": "COR-256",
   "kind": "global",
   "file": "goal.zil",
   "line": 148,
   "value": "<PTABLE P?WEST P?EAST BALLROOM-6 PATIO 0>"
  },
  "CHARACTER-TABLE": {
   "name": "CHARACTER-TABLE",
   "kind": "global",
   "file": "goal.zil",
   "line": 263,
   "value": "<TABLE PLAYER MICHAEL VERONICA ALICIA RICHARD COL-MARSTON LINDA SEN-ASHER COCHRANE OSTMANN BUTLER BARTENDER DETECTIVE DUFFY>"
  },
  "PLAYER-C": {
   "name": "PLAYER-C",
   "kind": "constant",
   "file": "goal.zil",
   "line": 268,
   "value": "0"
  },
  "MICHAEL-C": {
   "name": "MICHAEL-C",
   "kind": "constant",
   "file": "goal.zil",
   "line": 269,
   "value": "1"
  },
  "VERONICA-C": {
   "name": "VERONICA-C",
   "kind": "constant",
   "file": "goal.zil",
   "line": 270,
   "value": "2"
  },
  "ALICIA-C": {
   "name": "ALICIA-C",
   "kind": "constant",
   "file": "goal.zil",
   "line": 271,
   "value": "3"
  },
  "RICHARD-C": {
   "name": "RICHARD-C",
   "kind": "constant",
   "file": "goal.zil",
   "line": 272,
   "value": "4"
  },
  "COL-MARSTON-C": {
   "name": "COL-MARSTON-C",
   "kind": "constant",
   "file": "goal.zil",
   "line": 273,
   "value": "5"
  },
  "LINDA-C": {
   "name": "LINDA-C",
   "kind": "constant",
   "file": "goal.zil",
   "line": 274,
   "value": "6"
  },
  "SEN-ASHER-C": {
   "name": "SEN-ASHER-C",
   "kind": "constant",
   "file": "goal.zil",
   "line": 275,
   "value": "7"
  },
  "COCHRANE-C": {
   "name": "COCHRANE-C",
   "kind": "constant",
   "file": "goal.zil",
   "line": 276,
   "value": "8"
  },
  "OSTMANN-C": {
   "name": "OSTMANN-C",
   "kind": "constant",
   "file": "goal.zil",
   "line": 277,
   "value": "9"
  },
  "BUTLER-C": {
   "name": "BUTLER-C",
   "kind": "constant",
   "file": "goal.zil",
   "line": 278,
   "value": "10"
  },
  "BARTENDER-C": {
   "name": "BARTENDER-C",
   "kind": "constant",
   "file": "goal.zil",
   "line": 279,
   "value": "11"
  },
  "DETECTIVE-C": {
   "name": "DETECTIVE-C",
   "kind": "constant",
   "file": "goal.zil",
   "line": 280,
   "value": "12"
  },
  "DUFFY-C": {
   "name": "DUFFY-C",
   "kind": "constant",
   "file": "goal.zil",
   "line": 281,
   "value": "13"
  },
  "GOAL-TABLES": {
   "name": "GOAL-TABLES",
   "kind": "global",
   "file": "goal.zil",
   "line": 293,
   "value": "<TABLE <TABLE <> <> <> 1 <> <> 5 0> <TABLE <> <> <> 1 <> G-MICHAEL 5 0> ;\"1\" <TABLE <> <> <> 1 <> G-VERONICA 5 0> ;\"2\" <TABLE <> <> <> 1 <> G-ALICIA 5 0> ;\"3\" <TABLE <> <> <> 1 <> G-RICHARD 5 0> ;\"4\" <TABLE <> <> <> 1 <> G-COL-MARSTON 5 0> ;\"5\" <TABLE <> <> <> 1 <> G-LINDA 5 0> ;\"6\" <TABLE <> <> <> 1 <> G-SEN-ASHER 5 0> ;\"7\" <TABLE <> <> <> 1 <> G-COCHRANE 5 0> ;\"8\" <TABLE <> <> <> 1 <> G-OSTMANN 5 0> ;\"9\" <TABLE <> <> <> 1 <> G-BUTLER 5 0> ;\"10\" <TABLE <> <> <> 1 <> G-BARTENDER 5 0> ;\"11\" <TABLE <> <> <> 1 <> G-DETECTIVE 5 0> ;\"12\" <TABLE <> <> <> 1 <> G-DUFFY 5 0> ;\"13\">"
  },
  "CHARACTER-MAX": {
   "name": "CHARACTER-MAX",
   "kind": "constant",
   "file": "goal.zil",
   "line": 309,
   "value": "13"
  },
  "GOAL-F": {
   "name": "GOAL-F",
   "kind": "constant",
   "file": "goal.zil",
   "line": 313,
   "value": "0"
  },
  "GOAL-S": {
   "name": "GOAL-S",
   "kind": "constant",
   "file": "goal.zil",
   "line": 314,
   "value": "1"
  },
  "GOAL-I": {
   "name": "GOAL-I",
   "kind": "constant",
   "file": "goal.zil",
   "line": 315,
   "value": "2"
  },
  "GOAL-ENABLE": {
   "name": "GOAL-ENABLE",
   "kind": "constant",
   "file": "goal.zil",
   "line": 316,
   "value": "3"
  },
  "GOAL-QUEUED": {
   "name": "GOAL-QUEUED",
   "kind": "constant",
   "file": "goal.zil",
   "line": 318,
   "value": "4"
  },
  "GOAL-FUNCTION": {
   "name": "GOAL-FUNCTION",
   "kind": "constant",
   "file": "goal.zil",
   "line": 320,
   "value": "5"
  },
  "ATTENTION-SPAN": {
   "name": "ATTENTION-SPAN",
   "kind": "constant",
   "file": "goal.zil",
   "line": 321,
   "value": "6"
  },
  "ATTENTION": {
   "name": "ATTENTION",
   "kind": "constant",
   "file": "goal.zil",
   "line": 322,
   "value": "7"
  },
  "G-REACHED": {
   "name": "G-REACHED",
   "kind": "constant",
   "file": "goal.zil",
   "line": 326,
   "value": "1"
  },
  "G-ENROUTE": {
   "name": "G-ENROUTE",
   "kind": "constant",
   "file": "goal.zil",
   "line": 327,
   "value": "2"
  },
  "G-IMPATIENT": {
   "name": "G-IMPATIENT",
   "kind": "constant",
   "file": "goal.zil",
   "line": 328,
   "value": "3"
  },
  "G-ALREADY": {
   "name": "G-ALREADY",
   "kind": "constant",
   "file": "goal.zil",
   "line": 329,
   "value": "4"
  },
  "MOVEMENT-GOALS": {
   "name": "MOVEMENT-GOALS",
   "kind": "global",
   "file": "goal.zil",
   "line": 400,
   "value": "<TABLE ;\"PLAYER\" <TABLE 0 0 0> ;\"MICHAEL\" <TABLE 0 0 0> ;\"VERONICA\" <TABLE 0 0 0> ;\"ALICIA\" <TABLE 0 0 0> ;\"RICHARD\" <TABLE 0 20 -3 SUN-ROOM 15 -3 BALLROOM-9 0> ;\"COL-MARSTON\" <TABLE 0 40 -3 MORNING-ROOM 20 -5 LIVING-ROOM 0> ;\"LINDA\" <TABLE 0 20 -2 SUN-ROOM 15 -3 BALLROOM-9 0> ;\"SEN-ASHER\" <TABLE 0 30 -2 BALLROOM-9 5 -2 LIVING-ROOM 10 -2 SITTING-ROOM 0> ;\"COCHRANE\" <TABLE 0 4 -2 BALLROOM-9 0> ;\"OSTMANN\" <TABLE 0 0 0> ;\"BUTLER\" <TABLE 0 0 0> ;\"BARTENDER\" <TABLE 0 0 0> ;\"DETECTIVE\" <TABLE 0 0 0> ;\"DUFFY\" <TABLE 0 0 0>>"
  },
  "DETECTIVE-SCRIPT": {
   "name": "DETECTIVE-SCRIPT",
   "kind": "global",
   "file": "goal.zil",
   "line": 456,
   "value": "<TABLE 0 3 -1 OFFICE 18 -3 MEDIA-ROOM 10 -3 HALLWAY-7 8 -2 LIVING-ROOM 10 -2 BALLROOM-8 0>"
  },
  "DUFFY-SCRIPT": {
   "name": "DUFFY-SCRIPT",
   "kind": "global",
   "file": "goal.zil",
   "line": 465,
   "value": "<TABLE 0 3 -1 OFFICE 20 -3 MEDIA-ROOM 12 -3 HALLWAY-7 10 -3 LIVING-ROOM 12 -3 BALLROOM-8 0>"
  },
  "MICHAEL-LOOP": {
   "name": "MICHAEL-LOOP",
   "kind": "global",
   "file": "goal.zil",
   "line": 474,
   "value": "<TABLE 0 5 -2 BALLROOM-1 5 -2 BALLROOM-9 5 -2 BALLROOM-7 5 -2 BALLROOM-9 5 -2 BALLROOM-3 5 -2 BALLROOM-9 5 -2 BALLROOM-8 0>"
  },
  "BUTLER-LOOP": {
   "name": "BUTLER-LOOP",
   "kind": "global",
   "file": "goal.zil",
   "line": 485,
   "value": "<TABLE 0 10 -1 EAST-COAT-CLOSET 10 -5 KITCHEN 8 -2 BALLROOM-9 8 -1 LIVING-ROOM 10 -1 HALL 0>"
  },
  "COCHRANE-LOOP": {
   "name": "COCHRANE-LOOP",
   "kind": "global",
   "file": "goal.zil",
   "line": 494,
   "value": "<TABLE 0 6 -4 BALLROOM-1 6 -4 BALLROOM-9 0>"
  },
  "OSTMANN-LOOP": {
   "name": "OSTMANN-LOOP",
   "kind": "global",
   "file": "goal.zil",
   "line": 500,
   "value": "<TABLE 0 12 -4 BALLROOM-3 9 -2 BALLROOM-7 15 -2 HALLWAY-15 10 -1 BALLROOM-9 0>"
  },
  "MG-ROOM": {
   "name": "MG-ROOM",
   "kind": "constant",
   "file": "goal.zil",
   "line": 532,
   "value": "0"
  },
  "MG-TIME": {
   "name": "MG-TIME",
   "kind": "constant",
   "file": "goal.zil",
   "line": 533,
   "value": "1"
  },
  "MG-VARIATION": {
   "name": "MG-VARIATION",
   "kind": "constant",
   "file": "goal.zil",
   "line": 534,
   "value": "2"
  },
  "MG-LENGTH": {
   "name": "MG-LENGTH",
   "kind": "constant",
   "file": "goal.zil",
   "line": 535,
   "value": "<* 3 2>"
  },
  "MG-NEXT": {
   "name": "MG-NEXT",
   "kind": "constant",
   "file": "goal.zil",
   "line": 536,
   "value": "4"
  },
  "WHERE-TABLES": {
   "name": "WHERE-TABLES",
   "kind": "global",
   "file": "goal.zil",
   "line": 890,
   "value": "<TABLE ;\"PLA MIC VER ALI RIC MAR LIN ASH COC OST BUT BAR DET DUF\" <TABLE 500 500 500 0 500 500 500 500 500 540 500 540 0 0> ;\"PLAYER\" <TABLE 500 540 540 0 500 500 500 500 500 500 500 500 0 0> ;\"MICHAEL\" <TABLE 500 540 540 0 500 500 500 500 500 500 500 500 0 0> ;\"VERONICA\" <TABLE 0 0 0 0 0 0 0 0 0 0 0 0 0 0> ;\"ALICIA\" <TABLE 500 500 500 0 500 500 500 500 500 500 500 500 0 0> ;\"RICHARD\" <TABLE 500 500 500 0 500 500 500 500 500 500 500 500 0 0> ;\"COL. M.\" <TABLE 500 500 500 0 500 500 500 500 500 500 500 500 0 0> ;\"LINDA\" <TABLE 500 500 500 0 500 500 500 500 500 500 500 500 0 0> ;\"SEN. A.\" <TABLE 500 500 500 0 500 500 500 500 500 500 500 500 0 0> ;\"COCHRANE\" <TABLE 540 500 500 0 500 500 500 500 500 500 500 500 0 0> ;\"OSTMANN\" <TABLE 500 500 500 0 500 500 500 500 500 500 500 500 0 0> ;\"BUTLER\" <TABLE 540 500 500 0 500 500 500 500 500 500 500 500 0 0> ;\"BARTENDER\" <TABLE 0 0 0 0 0 0 0 0 0 0 0 0 0 0> ;\"DETECTIVE\" <TABLE 0 0 0 0 0 0 0 0 0 0 0 0 0 0> ;\"DUFFY\">"
  },
  "SERIAL": {
   "name": "SERIAL",
   "kind": "constant",
   "file": "suspect.zil",
   "line": 44,
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
  "LAST-PLAYER-LOC": {
   "name": "LAST-PLAYER-LOC",
   "kind": "global",
   "file": "main.zil",
   "line": 168,
   "value": "<>"
  },
  "L-PRSA": {
   "name": "L-PRSA",
   "kind": "global",
   "file": "main.zil",
   "line": 207,
   "value": "<>"
  },
  "L-PRSO": {
   "name": "L-PRSO",
   "kind": "global",
   "file": "main.zil",
   "line": 209,
   "value": "<>"
  },
  "L-PRSI": {
   "name": "L-PRSI",
   "kind": "global",
   "file": "main.zil",
   "line": 211,
   "value": "<>"
  },
  "NOW-PRSI": {
   "name": "NOW-PRSI",
   "kind": "global",
   "file": "main.zil",
   "line": 221,
   "value": "<>"
  },
  "PRSA": {
   "name": "PRSA",
   "kind": "global",
   "file": "parser.zil",
   "line": 13,
   "value": "0"
  },
  "PRSI": {
   "name": "PRSI",
   "kind": "global",
   "file": "parser.zil",
   "line": 15,
   "value": "0"
  },
  "PRSO": {
   "name": "PRSO",
   "kind": "global",
   "file": "parser.zil",
   "line": 17,
   "value": "0"
  },
  "P-TABLE": {
   "name": "P-TABLE",
   "kind": "global",
   "file": "parser.zil",
   "line": 19,
   "value": "0"
  },
  "P-ONEOBJ": {
   "name": "P-ONEOBJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 21,
   "value": "0"
  },
  "P-SYNTAX": {
   "name": "P-SYNTAX",
   "kind": "global",
   "file": "parser.zil",
   "line": 23,
   "value": "0"
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
   "line": 29,
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
   "line": 33,
   "value": "0"
  },
  "P-LEXV": {
   "name": "P-LEXV",
   "kind": "global",
   "file": "parser.zil",
   "line": 35,
   "value": "<ITABLE BYTE 120>"
  },
  "P-INBUF": {
   "name": "P-INBUF",
   "kind": "global",
   "file": "parser.zil",
   "line": 38,
   "value": "<ITABLE BYTE 100>"
  },
  "P-CONT": {
   "name": "P-CONT",
   "kind": "global",
   "file": "parser.zil",
   "line": 41,
   "value": "<>"
  },
  "P-IT-OBJECT": {
   "name": "P-IT-OBJECT",
   "kind": "global",
   "file": "parser.zil",
   "line": 43,
   "value": "<>"
  },
  "P-IT-LOC": {
   "name": "P-IT-LOC",
   "kind": "global",
   "file": "parser.zil",
   "line": 44,
   "value": "<>"
  },
  "P-HIM-HER": {
   "name": "P-HIM-HER",
   "kind": "global",
   "file": "parser.zil",
   "line": 46,
   "value": "<>"
  },
  "P-HIM-HER-LOC": {
   "name": "P-HIM-HER-LOC",
   "kind": "global",
   "file": "parser.zil",
   "line": 47,
   "value": "<>"
  },
  "P-OFLAG": {
   "name": "P-OFLAG",
   "kind": "global",
   "file": "parser.zil",
   "line": 60,
   "value": "<>"
  },
  "P-MERGED": {
   "name": "P-MERGED",
   "kind": "global",
   "file": "parser.zil",
   "line": 62,
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
   "line": 66,
   "value": "<>"
  },
  "P-AADJ": {
   "name": "P-AADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 68,
   "value": "<>"
  },
  "P-PHRLEN": {
   "name": "P-PHRLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 71,
   "value": "3"
  },
  "P-ORPHLEN": {
   "name": "P-ORPHLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 73,
   "value": "7"
  },
  "P-RTLEN": {
   "name": "P-RTLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 75,
   "value": "3"
  },
  "P-LEXWORDS": {
   "name": "P-LEXWORDS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 78,
   "value": "1"
  },
  "P-LEXSTART": {
   "name": "P-LEXSTART",
   "kind": "constant",
   "file": "parser.zil",
   "line": 81,
   "value": "1"
  },
  "P-LEXELEN": {
   "name": "P-LEXELEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 84,
   "value": "2"
  },
  "P-WORDLEN": {
   "name": "P-WORDLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 86,
   "value": "4"
  },
  "P-PSOFF": {
   "name": "P-PSOFF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 89,
   "value": "4"
  },
  "P-P1OFF": {
   "name": "P-P1OFF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 92,
   "value": "5"
  },
  "P-P1BITS": {
   "name": "P-P1BITS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 95,
   "value": "3"
  },
  "P-ITBLLEN": {
   "name": "P-ITBLLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 97,
   "value": "9"
  },
  "P-ITBL": {
   "name": "P-ITBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 99,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-OTBL": {
   "name": "P-OTBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 101,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-VTBL": {
   "name": "P-VTBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 103,
   "value": "<TABLE 0 0 0 0>"
  },
  "P-OVTBL": {
   "name": "P-OVTBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 105,
   "value": "<TABLE 0 0 0 0>"
  },
  "P-NCN": {
   "name": "P-NCN",
   "kind": "global",
   "file": "parser.zil",
   "line": 107,
   "value": "0"
  },
  "P-VERB": {
   "name": "P-VERB",
   "kind": "constant",
   "file": "parser.zil",
   "line": 109,
   "value": "0"
  },
  "P-VERBN": {
   "name": "P-VERBN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 111,
   "value": "1"
  },
  "P-PREP1": {
   "name": "P-PREP1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 113,
   "value": "2"
  },
  "P-PREP1N": {
   "name": "P-PREP1N",
   "kind": "constant",
   "file": "parser.zil",
   "line": 115,
   "value": "3"
  },
  "P-PREP2": {
   "name": "P-PREP2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 117,
   "value": "4"
  },
  "P-PREP2N": {
   "name": "P-PREP2N",
   "kind": "constant",
   "file": "parser.zil",
   "line": 119,
   "value": "5"
  },
  "P-NC1": {
   "name": "P-NC1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 121,
   "value": "6"
  },
  "P-NC1L": {
   "name": "P-NC1L",
   "kind": "constant",
   "file": "parser.zil",
   "line": 123,
   "value": "7"
  },
  "P-NC2": {
   "name": "P-NC2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 125,
   "value": "8"
  },
  "P-NC2L": {
   "name": "P-NC2L",
   "kind": "constant",
   "file": "parser.zil",
   "line": 127,
   "value": "9"
  },
  "QUOTE-FLAG": {
   "name": "QUOTE-FLAG",
   "kind": "global",
   "file": "parser.zil",
   "line": 129,
   "value": "<>"
  },
  "P-NUMBER": {
   "name": "P-NUMBER",
   "kind": "global",
   "file": "parser.zil",
   "line": 448,
   "value": "0"
  },
  "P-EXCHANGE": {
   "name": "P-EXCHANGE",
   "kind": "global",
   "file": "parser.zil",
   "line": 449,
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
  "SEEMS-TO-BE": {
   "name": "SEEMS-TO-BE",
   "kind": "global",
   "file": "parser.zil",
   "line": 762,
   "value": "\"There seems to be \""
  },
  "SORRY-I-DONT": {
   "name": "SORRY-I-DONT",
   "kind": "global",
   "file": "parser.zil",
   "line": 764,
   "value": "\"Sorry, I don't understand. Please rephrase that.\""
  },
  "P-CCTBL": {
   "name": "P-CCTBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 856,
   "value": "<TABLE 0 0 0 0>"
  },
  "CC-SBPTR": {
   "name": "CC-SBPTR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 859,
   "value": "0"
  },
  "CC-SEPTR": {
   "name": "CC-SEPTR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 860,
   "value": "1"
  },
  "CC-DBPTR": {
   "name": "CC-DBPTR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 861,
   "value": "2"
  },
  "CC-DEPTR": {
   "name": "CC-DEPTR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 862,
   "value": "3"
  },
  "P-GWIMBIT": {
   "name": "P-GWIMBIT",
   "kind": "global",
   "file": "parser.zil",
   "line": 929,
   "value": "0"
  },
  "P-NAM": {
   "name": "P-NAM",
   "kind": "global",
   "file": "parser.zil",
   "line": 986,
   "value": "<>"
  },
  "P-XNAM": {
   "name": "P-XNAM",
   "kind": "global",
   "file": "parser.zil",
   "line": 988,
   "value": "<>"
  },
  "P-ADJ": {
   "name": "P-ADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 990,
   "value": "<>"
  },
  "P-XADJ": {
   "name": "P-XADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 992,
   "value": "<>"
  },
  "P-ADJN": {
   "name": "P-ADJN",
   "kind": "global",
   "file": "parser.zil",
   "line": 994,
   "value": "<>"
  },
  "P-XADJN": {
   "name": "P-XADJN",
   "kind": "global",
   "file": "parser.zil",
   "line": 996,
   "value": "<>"
  },
  "P-PRSO": {
   "name": "P-PRSO",
   "kind": "global",
   "file": "parser.zil",
   "line": 998,
   "value": "<ITABLE NONE 50>"
  },
  "P-PRSI": {
   "name": "P-PRSI",
   "kind": "global",
   "file": "parser.zil",
   "line": 1000,
   "value": "<ITABLE NONE 50>"
  },
  "P-BUTS": {
   "name": "P-BUTS",
   "kind": "global",
   "file": "parser.zil",
   "line": 1002,
   "value": "<ITABLE NONE 50>"
  },
  "P-MERGE": {
   "name": "P-MERGE",
   "kind": "global",
   "file": "parser.zil",
   "line": 1004,
   "value": "<ITABLE NONE 50>"
  },
  "P-OCLAUSE": {
   "name": "P-OCLAUSE",
   "kind": "global",
   "file": "parser.zil",
   "line": 1006,
   "value": "<ITABLE NONE 50>"
  },
  "P-MATCHLEN": {
   "name": "P-MATCHLEN",
   "kind": "global",
   "file": "parser.zil",
   "line": 1008,
   "value": "0"
  },
  "P-GETFLAGS": {
   "name": "P-GETFLAGS",
   "kind": "global",
   "file": "parser.zil",
   "line": 1010,
   "value": "0"
  },
  "P-ALL": {
   "name": "P-ALL",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1012,
   "value": "1"
  },
  "P-ONE": {
   "name": "P-ONE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1014,
   "value": "2"
  },
  "P-INHIBIT": {
   "name": "P-INHIBIT",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1016,
   "value": "4"
  },
  "P-CSPTR": {
   "name": "P-CSPTR",
   "kind": "global",
   "file": "parser.zil",
   "line": 1018,
   "value": "<>"
  },
  "P-CEPTR": {
   "name": "P-CEPTR",
   "kind": "global",
   "file": "parser.zil",
   "line": 1019,
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
  "P-MOBY-FLAG": {
   "name": "P-MOBY-FLAG",
   "kind": "global",
   "file": "parser.zil",
   "line": 1210,
   "value": "<>"
  },
  "P-MOBY-FOUND": {
   "name": "P-MOBY-FOUND",
   "kind": "global",
   "file": "parser.zil",
   "line": 1211,
   "value": "<>"
  },
  "P-AND": {
   "name": "P-AND",
   "kind": "global",
   "file": "parser.zil",
   "line": 1212,
   "value": "<>"
  },
  "P-SRCBOT": {
   "name": "P-SRCBOT",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1282,
   "value": "2"
  },
  "P-SRCTOP": {
   "name": "P-SRCTOP",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1284,
   "value": "0"
  },
  "P-SRCALL": {
   "name": "P-SRCALL",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1286,
   "value": "1"
  },
  "LOAD-ALLOWED": {
   "name": "LOAD-ALLOWED",
   "kind": "global",
   "file": "people.zil",
   "line": 7,
   "value": "100"
  },
  "I-DONT-KNOW": {
   "name": "I-DONT-KNOW",
   "kind": "global",
   "file": "people.zil",
   "line": 35,
   "value": "\"\"I don't know \""
  },
  "ISNT-HERE": {
   "name": "ISNT-HERE",
   "kind": "global",
   "file": "people.zil",
   "line": 36,
   "value": "\" isn't here.\""
  },
  "PLAYER-HIDING": {
   "name": "PLAYER-HIDING",
   "kind": "global",
   "file": "people.zil",
   "line": 123,
   "value": "<>"
  },
  "MICHAEL-SEEN": {
   "name": "MICHAEL-SEEN",
   "kind": "global",
   "file": "people.zil",
   "line": 341,
   "value": "0"
  },
  "THREE-STOOGES-IN-OFFICE?": {
   "name": "THREE-STOOGES-IN-OFFICE?",
   "kind": "global",
   "file": "people.zil",
   "line": 527,
   "value": "<>"
  },
  "THREE-CROWD": {
   "name": "THREE-CROWD",
   "kind": "global",
   "file": "people.zil",
   "line": 725,
   "value": "\", and the three of them crowd into the room.\""
  },
  "GANG-BEEN-TO-OFFICE?": {
   "name": "GANG-BEEN-TO-OFFICE?",
   "kind": "global",
   "file": "people.zil",
   "line": 727,
   "value": "<>"
  },
  "LET-ME": {
   "name": "LET-ME",
   "kind": "global",
   "file": "people.zil",
   "line": 789,
   "value": "\" \"Let me unlock this door...\" \""
  },
  "I-HAD-THEM": {
   "name": "I-HAD-THEM",
   "kind": "global",
   "file": "people.zil",
   "line": 790,
   "value": "\" \"I had them! I unlocked the wine cellar only an hour\nago; Smythe needed to get to it! My keys are gone!\" \""
  },
  "WAIT-A-MINUTE": {
   "name": "WAIT-A-MINUTE",
   "kind": "global",
   "file": "people.zil",
   "line": 792,
   "value": "\" \"Wait a minute! This door isn't\nlocked! Something's going on here!\" \""
  },
  "OFFICE-EXPEDITION?": {
   "name": "OFFICE-EXPEDITION?",
   "kind": "global",
   "file": "people.zil",
   "line": 832,
   "value": "<>"
  },
  "ARGUMENT-POSTPONE": {
   "name": "ARGUMENT-POSTPONE",
   "kind": "global",
   "file": "people.zil",
   "line": 872,
   "value": "5"
  },
  "ARGUMENT-COUNT": {
   "name": "ARGUMENT-COUNT",
   "kind": "global",
   "file": "people.zil",
   "line": 873,
   "value": "0"
  },
  "ARGUMENT-TABLE": {
   "name": "ARGUMENT-TABLE",
   "kind": "global",
   "file": "people.zil",
   "line": 875,
   "value": "<TABLE \"Some guests are discussing this year's horse sales. Col. Marston\nmaintains that no stallion went for more than one\nhundred thousand dollars, while Cochrane contends that he's wrong.\" \"Michael joins in the discussion. \"I recall a black stallion that\nwent for a high price last year. It was probably over a hundred thousand.\"\nCol. Marston glares at him.\" \"Col. Marston says, \"I have a good memory for figures. The top price last\nyear was ninety two thousand. I even remember the horse, it was a chestnut,\nabout fifteen hands. Beautiful animal!\" Michael nods, apparently convinced.\nCochrane glances at Michael, feeling betrayed. \"Nonsense,\" he says, angrily.\" \"Cochrane takes another gulp of his drink. \"You're just\ngetting senile, Colonel. It was a black stallion, and I remember who bought\nit. It was Jeffries! So there!\" He makes a gesture of\nfinality, almost spilling his drink on Marston, who is beginning to get\nangry himself.\" \"Michael steps between them. \"Look here,\" he says, \"No need to fight.\nWe've got all the auction records in the office. Veronica\ngets everything published. We can settle\nthis like gentlemen. Okay?\" Cochrane seems mollified, and\nMarston comments under his breath, \"Some of us aren't gentlemen.\"\nThey head off towards the office.\" <>>"
  },
  "MURDER-PUBLIC?": {
   "name": "MURDER-PUBLIC?",
   "kind": "global",
   "file": "people.zil",
   "line": 905,
   "value": "<>"
  },
  "VERONICA-SDESC": {
   "name": "VERONICA-SDESC",
   "kind": "global",
   "file": "people.zil",
   "line": 918,
   "value": "\"Veronica\""
  },
  "IGNORES-YOU": {
   "name": "IGNORES-YOU",
   "kind": "global",
   "file": "people.zil",
   "line": 969,
   "value": "\" ignores you\""
  },
  "YELL-TIME": {
   "name": "YELL-TIME",
   "kind": "global",
   "file": "people.zil",
   "line": 1034,
   "value": "<>"
  },
  "STOPS-YOU": {
   "name": "STOPS-YOU",
   "kind": "global",
   "file": "people.zil",
   "line": 1081,
   "value": "\" stops you from tampering with evidence.\""
  },
  "IN-GUNBELT": {
   "name": "IN-GUNBELT",
   "kind": "global",
   "file": "people.zil",
   "line": 1193,
   "value": "\" in your gunbelt.\""
  },
  "ALICIA-SEEN": {
   "name": "ALICIA-SEEN",
   "kind": "global",
   "file": "people.zil",
   "line": 1515,
   "value": "0"
  },
  "CALLING-POLICE": {
   "name": "CALLING-POLICE",
   "kind": "global",
   "file": "people.zil",
   "line": 1753,
   "value": "\" I'm calling the police!\"\""
  },
  "FLEEING?": {
   "name": "FLEEING?",
   "kind": "global",
   "file": "people.zil",
   "line": 1762,
   "value": "<>"
  },
  "ALICIA-HERE?": {
   "name": "ALICIA-HERE?",
   "kind": "global",
   "file": "people.zil",
   "line": 1819,
   "value": "<>"
  },
  "ARRIVES": {
   "name": "ARRIVES",
   "kind": "global",
   "file": "people.zil",
   "line": 1824,
   "value": "\" arrives at the \""
  },
  "ALICIA-WAITED?": {
   "name": "ALICIA-WAITED?",
   "kind": "global",
   "file": "people.zil",
   "line": 1926,
   "value": "<>"
  },
  "MICHAEL-TO-GARAGE?": {
   "name": "MICHAEL-TO-GARAGE?",
   "kind": "global",
   "file": "people.zil",
   "line": 1973,
   "value": "<>"
  },
  "RICHARD-SDESC": {
   "name": "RICHARD-SDESC",
   "kind": "global",
   "file": "people.zil",
   "line": 1997,
   "value": "\"Richard\""
  },
  "MARSTON-SEEN-TRUST-DOCUMENTS?": {
   "name": "MARSTON-SEEN-TRUST-DOCUMENTS?",
   "kind": "global",
   "file": "people.zil",
   "line": 2153,
   "value": "<>"
  },
  "LIST-BURNING?": {
   "name": "LIST-BURNING?",
   "kind": "global",
   "file": "people.zil",
   "line": 2380,
   "value": "<>"
  },
  "BOOP-CNT": {
   "name": "BOOP-CNT",
   "kind": "global",
   "file": "people.zil",
   "line": 2417,
   "value": "1"
  },
  "COCHRANE-SDESC": {
   "name": "COCHRANE-SDESC",
   "kind": "global",
   "file": "people.zil",
   "line": 2690,
   "value": "\"Cochrane\""
  },
  "COCHRANE-SEEN-AGREEMENT?": {
   "name": "COCHRANE-SEEN-AGREEMENT?",
   "kind": "global",
   "file": "people.zil",
   "line": 2708,
   "value": "<>"
  },
  "COCHRANE-LOOKS-FOR-OSTMANN?": {
   "name": "COCHRANE-LOOKS-FOR-OSTMANN?",
   "kind": "global",
   "file": "people.zil",
   "line": 2860,
   "value": "<>"
  },
  "OSTMANN-SEEN-AGREEMENT?": {
   "name": "OSTMANN-SEEN-AGREEMENT?",
   "kind": "global",
   "file": "people.zil",
   "line": 2924,
   "value": "<>"
  },
  "REAL-ESTATE-BOARD": {
   "name": "REAL-ESTATE-BOARD",
   "kind": "global",
   "file": "people.zil",
   "line": 2935,
   "value": "\" the Real Estate Board\""
  },
  "COCHRANE-VS-OSTMANN": {
   "name": "COCHRANE-VS-OSTMANN",
   "kind": "global",
   "file": "people.zil",
   "line": 3122,
   "value": "<LTABLE 0 \"ostentatiously avoiding each other.\" \"arguing about something.\" \"trying to avoid each other.\" \"glaring at each other.\">"
  },
  "NEW-ARRIVAL": {
   "name": "NEW-ARRIVAL",
   "kind": "global",
   "file": "people.zil",
   "line": 3238,
   "value": "<>"
  },
  "HEY-BARTENDER": {
   "name": "HEY-BARTENDER",
   "kind": "global",
   "file": "people.zil",
   "line": 3381,
   "value": "\"\"Hello. What'll it be?\"\""
  },
  "DRINK-COUNT": {
   "name": "DRINK-COUNT",
   "kind": "global",
   "file": "people.zil",
   "line": 3537,
   "value": "0"
  },
  "FROB": {
   "name": "FROB",
   "kind": "global",
   "file": "people.zil",
   "line": 3614,
   "value": "<>"
  },
  "LAST-FROB": {
   "name": "LAST-FROB",
   "kind": "global",
   "file": "people.zil",
   "line": 3615,
   "value": "<>"
  },
  "OFFICE-FROBS": {
   "name": "OFFICE-FROBS",
   "kind": "global",
   "file": "people.zil",
   "line": 3638,
   "value": "<LTABLE 0 LARGE-DESK SMALL-DESK FILE-CABINET TELEPHONE TRASH OFFICE-JUNK COMPUTER DISK>"
  },
  "PLAYER-MOVED-BODY?": {
   "name": "PLAYER-MOVED-BODY?",
   "kind": "global",
   "file": "people.zil",
   "line": 3649,
   "value": "<>"
  },
  "PLAYER-SEEN-WITH-BODY?": {
   "name": "PLAYER-SEEN-WITH-BODY?",
   "kind": "global",
   "file": "people.zil",
   "line": 3650,
   "value": "<>"
  },
  "DETECTIVE-BEEN-TO-OFFICE?": {
   "name": "DETECTIVE-BEEN-TO-OFFICE?",
   "kind": "global",
   "file": "people.zil",
   "line": 3651,
   "value": "<>"
  },
  "DETECTIVE-SEEN-BULLET?": {
   "name": "DETECTIVE-SEEN-BULLET?",
   "kind": "global",
   "file": "people.zil",
   "line": 3652,
   "value": "<>"
  },
  "DETECTIVE-SEEN-BULLET-PRINTS?": {
   "name": "DETECTIVE-SEEN-BULLET-PRINTS?",
   "kind": "global",
   "file": "people.zil",
   "line": 3653,
   "value": "<>"
  },
  "DETECTIVE-SEEN-CORPSE?": {
   "name": "DETECTIVE-SEEN-CORPSE?",
   "kind": "global",
   "file": "people.zil",
   "line": 3655,
   "value": "<>"
  },
  "DETECTIVE-SEEN-ROPE?": {
   "name": "DETECTIVE-SEEN-ROPE?",
   "kind": "global",
   "file": "people.zil",
   "line": 3656,
   "value": "<>"
  },
  "DETECTIVE-SEEN-COAT?": {
   "name": "DETECTIVE-SEEN-COAT?",
   "kind": "global",
   "file": "people.zil",
   "line": 3657,
   "value": "<>"
  },
  "DETECTIVE-SEEN-GLASS?": {
   "name": "DETECTIVE-SEEN-GLASS?",
   "kind": "global",
   "file": "people.zil",
   "line": 3658,
   "value": "<>"
  },
  "DETECTIVE-SEEN-HAIR?": {
   "name": "DETECTIVE-SEEN-HAIR?",
   "kind": "global",
   "file": "people.zil",
   "line": 3659,
   "value": "<>"
  },
  "DETECTIVE-SEEN-CARD?": {
   "name": "DETECTIVE-SEEN-CARD?",
   "kind": "global",
   "file": "people.zil",
   "line": 3660,
   "value": "<>"
  },
  "DETECTIVE-SEEN-AGREEMENT?": {
   "name": "DETECTIVE-SEEN-AGREEMENT?",
   "kind": "global",
   "file": "people.zil",
   "line": 3661,
   "value": "<>"
  },
  "DETECTIVE-SEEN-TRUST-DOCUMENTS?": {
   "name": "DETECTIVE-SEEN-TRUST-DOCUMENTS?",
   "kind": "global",
   "file": "people.zil",
   "line": 3662,
   "value": "<>"
  },
  "DETECTIVE-SEEN-LIST?": {
   "name": "DETECTIVE-SEEN-LIST?",
   "kind": "global",
   "file": "people.zil",
   "line": 3663,
   "value": "<>"
  },
  "GLASS-ANALYZED?": {
   "name": "GLASS-ANALYZED?",
   "kind": "global",
   "file": "people.zil",
   "line": 3665,
   "value": "<>"
  },
  "GLASS-ANALYZED-FOR-PRINTS?": {
   "name": "GLASS-ANALYZED-FOR-PRINTS?",
   "kind": "global",
   "file": "people.zil",
   "line": 3666,
   "value": "<>"
  },
  "DETECTIVE-TOLD-ABOUT-RAIN?": {
   "name": "DETECTIVE-TOLD-ABOUT-RAIN?",
   "kind": "global",
   "file": "people.zil",
   "line": 3667,
   "value": "<>"
  },
  "DETECTIVE-CONVINCED": {
   "name": "DETECTIVE-CONVINCED",
   "kind": "constant",
   "file": "people.zil",
   "line": 3669,
   "value": "12"
  },
  "DETECTIVE-SEEN": {
   "name": "DETECTIVE-SEEN",
   "kind": "global",
   "file": "people.zil",
   "line": 3670,
   "value": "0"
  },
  "JUNK-COUNT": {
   "name": "JUNK-COUNT",
   "kind": "global",
   "file": "people.zil",
   "line": 4057,
   "value": "0"
  },
  "JUNK-STRINGS": {
   "name": "JUNK-STRINGS",
   "kind": "global",
   "file": "people.zil",
   "line": 4058,
   "value": "<LTABLE \"\"Well, thank you, but I don't see what this has to do with the\ncase.\"\" \"\"Why are you trying to waste my time with this?\"\" \"\"If you keep this up, I'll have you up on 'obstruction of justice.'\"\" \"\"I refuse to be bothered with this idiocy! I have work to do!\"\">"
  },
  "GLASS-ANALYSIS-P": {
   "name": "GLASS-ANALYSIS-P",
   "kind": "global",
   "file": "people.zil",
   "line": 4214,
   "value": "\"\"The glass was analyzed for fingerprints. This was difficult as the\nsurface was covered with the sugary residue of an alcoholic beverage\nknown as a 'Singapore Sling.' However, partial prints were recovered from\na dry area. These were compared with prints of Veronica Ashcroft taken\nby Sergeant Duffy at the beginning of his investigation. It is our conclusion\nthat the prints on the glass are not those of Veronica Ashcroft.\"\""
  },
  "GLASS-ANALYSIS-Q": {
   "name": "GLASS-ANALYSIS-Q",
   "kind": "global",
   "file": "people.zil",
   "line": 4223,
   "value": "\"\"The glass was analyzed for fingerprints. This was difficult as the\nsurface was covered with the sugary residue of an alcoholic beverage\nknown as a 'Singapore Sling.' There are several badly smudged partial\nprints. However, it was impossible to reach any conclusions based on them.\nWe believe that someone handled the fragment after the prints were\ndeposited, resulting in the smudging.\"\""
  },
  "TARGET": {
   "name": "TARGET",
   "kind": "global",
   "file": "people.zil",
   "line": 4424,
   "value": "<>"
  },
  "DUFFY-SNARFED": {
   "name": "DUFFY-SNARFED",
   "kind": "global",
   "file": "people.zil",
   "line": 4525,
   "value": "<>"
  },
  "DUFFY-SEEN-CORPSE?": {
   "name": "DUFFY-SEEN-CORPSE?",
   "kind": "global",
   "file": "people.zil",
   "line": 4621,
   "value": "<>"
  },
  "HALL-LINE-C": {
   "name": "HALL-LINE-C",
   "kind": "constant",
   "file": "places.zil",
   "line": 8,
   "value": "0"
  },
  "BALLROOM-LINE-C": {
   "name": "BALLROOM-LINE-C",
   "kind": "constant",
   "file": "places.zil",
   "line": 9,
   "value": "1"
  },
  "EAST-HALL-LINE-C": {
   "name": "EAST-HALL-LINE-C",
   "kind": "constant",
   "file": "places.zil",
   "line": 10,
   "value": "2"
  },
  "GARAGE-LINE-C": {
   "name": "GARAGE-LINE-C",
   "kind": "constant",
   "file": "places.zil",
   "line": 11,
   "value": "3"
  },
  "OUTSIDE-LINE-C": {
   "name": "OUTSIDE-LINE-C",
   "kind": "constant",
   "file": "places.zil",
   "line": 12,
   "value": "4"
  },
  "LINES": {
   "name": "LINES",
   "kind": "constant",
   "file": "places.zil",
   "line": 14,
   "value": "5"
  },
  "AMBULANCE-COMING": {
   "name": "AMBULANCE-COMING",
   "kind": "global",
   "file": "places.zil",
   "line": 125,
   "value": "\"The ambulance will be along soon\""
  },
  "THERE-IS": {
   "name": "THERE-IS",
   "kind": "global",
   "file": "places.zil",
   "line": 309,
   "value": "\"There is \""
  },
  "SLAPSTICK?": {
   "name": "SLAPSTICK?",
   "kind": "global",
   "file": "places.zil",
   "line": 673,
   "value": "T"
  },
  "ENTANGLED?": {
   "name": "ENTANGLED?",
   "kind": "global",
   "file": "places.zil",
   "line": 674,
   "value": "<>"
  },
  "PLAYER-FOLLOWED-VERONICA?": {
   "name": "PLAYER-FOLLOWED-VERONICA?",
   "kind": "global",
   "file": "places.zil",
   "line": 689,
   "value": "<>"
  },
  "ENTANGLED-YUKS": {
   "name": "ENTANGLED-YUKS",
   "kind": "global",
   "file": "places.zil",
   "line": 727,
   "value": "<LTABLE \"You try to extricate yourself from the undignified tangle, but only\nsucceed in confusing matters more.\" \"Smythe almost succeeds in reaching his feet, but the guest pulls him\ndown again by trying to pull his coat back on.\" \"You succeed in regaining your feet.\">"
  },
  "HAVE-DRAWERS-OPEN": {
   "name": "HAVE-DRAWERS-OPEN",
   "kind": "global",
   "file": "places.zil",
   "line": 990,
   "value": "\" have their drawers open.\""
  },
  "PLAYER-BEEN-TO-OFFICE?": {
   "name": "PLAYER-BEEN-TO-OFFICE?",
   "kind": "global",
   "file": "places.zil",
   "line": 992,
   "value": "<>"
  },
  "RIDICULOUS": {
   "name": "RIDICULOUS",
   "kind": "global",
   "file": "places.zil",
   "line": 1488,
   "value": "\"You would look ridiculous carrying it.\""
  },
  "DOING-WELL": {
   "name": "DOING-WELL",
   "kind": "global",
   "file": "places.zil",
   "line": 1607,
   "value": "\" They are doing quite well.\""
  },
  "ALARM-COUNT": {
   "name": "ALARM-COUNT",
   "kind": "global",
   "file": "places.zil",
   "line": 1913,
   "value": "0"
  },
  "ON-DANCE-FLOOR?": {
   "name": "ON-DANCE-FLOOR?",
   "kind": "global",
   "file": "places.zil",
   "line": 2039,
   "value": "<>"
  },
  "MICHAEL-GREETING?": {
   "name": "MICHAEL-GREETING?",
   "kind": "global",
   "file": "places.zil",
   "line": 2345,
   "value": "<>"
  },
  "COSTUMES": {
   "name": "COSTUMES",
   "kind": "global",
   "file": "places.zil",
   "line": 2391,
   "value": "<LTABLE 0 \"a man in street clothes wearing a square white plastic mask\" \"a woman disguised as a peanut butter sandwich\" \"a man who looks like Cardinal Richelieu\" \"three people dressed as mice wearing dark glasses\" \"a Pac-man\" \"a giant spider\" \"a short, cuddly-looking robot\" \"a grue\" \"a six-foot tall invisible rabbit\">"
  },
  "BAND-PLAYING?": {
   "name": "BAND-PLAYING?",
   "kind": "global",
   "file": "places.zil",
   "line": 2464,
   "value": "<>"
  },
  "RECORD-PLAYING?": {
   "name": "RECORD-PLAYING?",
   "kind": "global",
   "file": "places.zil",
   "line": 2465,
   "value": "<>"
  },
  "RECORDS": {
   "name": "RECORDS",
   "kind": "global",
   "file": "places.zil",
   "line": 2505,
   "value": "<LTABLE 0 \"Karma Chameleon\" \"Stairway to Heaven\" \"Light My Fire\" \"Pretty Woman\">"
  },
  "TUNES": {
   "name": "TUNES",
   "kind": "global",
   "file": "places.zil",
   "line": 2512,
   "value": "<LTABLE 0 \"Michelle\" \"Singing in the Rain\" \"I Left My Heart in San Francisco\" \"Mona Lisa\" \"My Way\" \"Tennessee Waltz\">"
  },
  "DOG-FRIENDLY?": {
   "name": "DOG-FRIENDLY?",
   "kind": "global",
   "file": "places.zil",
   "line": 2719,
   "value": "<>"
  },
  "MICHAEL-DEAD?": {
   "name": "MICHAEL-DEAD?",
   "kind": "global",
   "file": "places.zil",
   "line": 2909,
   "value": "<>"
  },
  "SAW-RAIN-SLACK-OFF?": {
   "name": "SAW-RAIN-SLACK-OFF?",
   "kind": "global",
   "file": "things.zil",
   "line": 214,
   "value": "<>"
  },
  "RAIN-STATE": {
   "name": "RAIN-STATE",
   "kind": "global",
   "file": "things.zil",
   "line": 243,
   "value": "2"
  },
  "REPEATING-YOURSELF": {
   "name": "REPEATING-YOURSELF",
   "kind": "global",
   "file": "things.zil",
   "line": 585,
   "value": "\"\"You're repeating yourself.\"\""
  },
  "JACK-ASKED?": {
   "name": "JACK-ASKED?",
   "kind": "global",
   "file": "things.zil",
   "line": 587,
   "value": "<>"
  },
  "NUMBERS": {
   "name": "NUMBERS",
   "kind": "global",
   "file": "things.zil",
   "line": 656,
   "value": "<LTABLE \"one\" \"two\" \"three\" \"too many\">"
  },
  "THEY-ARE-ALREADY": {
   "name": "THEY-ARE-ALREADY",
   "kind": "global",
   "file": "things.zil",
   "line": 778,
   "value": "\"They are already \""
  },
  "CURTAINS-ARE": {
   "name": "CURTAINS-ARE",
   "kind": "global",
   "file": "things.zil",
   "line": 779,
   "value": "\"Okay, the curtains are \""
  },
  "VERBOSE": {
   "name": "VERBOSE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 34,
   "value": "<>"
  },
  "SUPER-BRIEF": {
   "name": "SUPER-BRIEF",
   "kind": "global",
   "file": "verbs.zil",
   "line": 35,
   "value": "<>"
  },
  "DESCRIPTIONS": {
   "name": "DESCRIPTIONS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 74,
   "value": "\" descriptions.\""
  },
  "P-SPACE": {
   "name": "P-SPACE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 76,
   "value": "1"
  },
  "CONSULT": {
   "name": "CONSULT",
   "kind": "global",
   "file": "verbs.zil",
   "line": 144,
   "value": "\" Consult your manual or Reference Card if necessary.\""
  },
  "Y-INBUF": {
   "name": "Y-INBUF",
   "kind": "global",
   "file": "verbs.zil",
   "line": 177,
   "value": "<ITABLE BYTE 12>"
  },
  "Y-LEXV": {
   "name": "Y-LEXV",
   "kind": "global",
   "file": "verbs.zil",
   "line": 178,
   "value": "<ITABLE BYTE 10>"
  },
  "UEXIT": {
   "name": "UEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 294,
   "value": "1"
  },
  "NEXIT": {
   "name": "NEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 295,
   "value": "2"
  },
  "FEXIT": {
   "name": "FEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 296,
   "value": "3"
  },
  "CEXIT": {
   "name": "CEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 297,
   "value": "4"
  },
  "DEXIT": {
   "name": "DEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 298,
   "value": "5"
  },
  "REXIT": {
   "name": "REXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 300,
   "value": "0"
  },
  "NEXITSTR": {
   "name": "NEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 301,
   "value": "0"
  },
  "FEXITFCN": {
   "name": "FEXITFCN",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 302,
   "value": "0"
  },
  "CEXITFLAG": {
   "name": "CEXITFLAG",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 303,
   "value": "1"
  },
  "CEXITSTR": {
   "name": "CEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 304,
   "value": "1"
  },
  "DEXITOBJ": {
   "name": "DEXITOBJ",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 305,
   "value": "1"
  },
  "DEXITSTR": {
   "name": "DEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 306,
   "value": "1"
  },
  "OHERE": {
   "name": "OHERE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 328,
   "value": "<>"
  },
  "HO-HUM": {
   "name": "HO-HUM",
   "kind": "global",
   "file": "verbs.zil",
   "line": 371,
   "value": "<LTABLE 0 \" doesn't help.\" \" has no effect.\">"
  },
  "INDENTS": {
   "name": "INDENTS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 405,
   "value": "<TABLE \"\" \"  \" \"    \" \"      \" \"        \" \"          \">"
  },
  "FUMBLE-NUMBER": {
   "name": "FUMBLE-NUMBER",
   "kind": "global",
   "file": "verbs.zil",
   "line": 413,
   "value": "7"
  },
  "YOU-CANT-SEE": {
   "name": "YOU-CANT-SEE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 457,
   "value": "\"You can't see \""
  },
  "QCONTEXT": {
   "name": "QCONTEXT",
   "kind": "global",
   "file": "verbs.zil",
   "line": 540,
   "value": "<>"
  },
  "QCONTEXT-ROOM": {
   "name": "QCONTEXT-ROOM",
   "kind": "global",
   "file": "verbs.zil",
   "line": 541,
   "value": "<>"
  },
  "WHO-CARES": {
   "name": "WHO-CARES",
   "kind": "global",
   "file": "verbs.zil",
   "line": 590,
   "value": "<LTABLE 0 \" doesn't appear interested\" \" doesn't care\" \" lets out a loud yawn\" \" seems to be getting impatient\">"
  },
  "YUKS": {
   "name": "YUKS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 597,
   "value": "<LTABLE 0 \"That's ridiculous!\" \"Nuts!\" \"What a screwball!\" \"You're off your rocker!\" \"You can't be serious!\">"
  },
  "LISTENING": {
   "name": "LISTENING",
   "kind": "global",
   "file": "verbs.zil",
   "line": 763,
   "value": "\" is listening.\""
  },
  "YOU-DONT": {
   "name": "YOU-DONT",
   "kind": "global",
   "file": "verbs.zil",
   "line": 764,
   "value": "\"You don't \""
  },
  "GO-THAT-WAY": {
   "name": "GO-THAT-WAY",
   "kind": "global",
   "file": "verbs.zil",
   "line": 849,
   "value": "\"go that way\""
  },
  "OFFENDED": {
   "name": "OFFENDED",
   "kind": "global",
   "file": "verbs.zil",
   "line": 941,
   "value": "<LTABLE 0 \"You ought to be ashamed of yourself!\" \"Hey, save that talk for the locker room!\" \"Step outside and say that!\" \"So's your old man!\">"
  },
  "TRYING-DESTROY": {
   "name": "TRYING-DESTROY",
   "kind": "global",
   "file": "verbs.zil",
   "line": 968,
   "value": "\"Trying to destroy\""
  },
  "YOU-MUST": {
   "name": "YOU-MUST",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1052,
   "value": "\"You must \""
  },
  "WHAT-DO-YOU-MEAN": {
   "name": "WHAT-DO-YOU-MEAN",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1208,
   "value": "\"What do you mean? She's dead!\""
  },
  "RICHARD-SEEN-CORPSE?": {
   "name": "RICHARD-SEEN-CORPSE?",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1210,
   "value": "<>"
  },
  "MICHAEL-SEEN-CORPSE?": {
   "name": "MICHAEL-SEEN-CORPSE?",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1211,
   "value": "<>"
  },
  "HAVE-TO": {
   "name": "HAVE-TO",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1305,
   "value": "\"You'll have to \""
  },
  "ITS-ALREADY": {
   "name": "ITS-ALREADY",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1583,
   "value": "\"It's already \""
  },
  "YOU-DONT-HAVE": {
   "name": "YOU-DONT-HAVE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2172,
   "value": "\"You don't have \""
  },
  "YOU-SHOULD": {
   "name": "YOU-SHOULD",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2212,
   "value": "\"You should \""
  },
  "WHO-WAIT": {
   "name": "WHO-WAIT",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2227,
   "value": "0"
  },
  "DO-YOU-WANT-TO": {
   "name": "DO-YOU-WANT-TO",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2278,
   "value": "\"Do you want to \""
  },
  "ALREADY-HERE": {
   "name": "ALREADY-HERE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2307,
   "value": "\" already here!\""
  },
  "TOO-BAD": {
   "name": "TOO-BAD",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2331,
   "value": "\"Too bad, but \""
  },
  "P-WALK-DIR": {
   "name": "P-WALK-DIR",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2417,
   "value": "<>"
  },
  "DANCE-WITH-FEMALE?": {
   "name": "DANCE-WITH-FEMALE?",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2543,
   "value": "<>"
  },
  "DANCE-WITH-MALE?": {
   "name": "DANCE-WITH-MALE?",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2544,
   "value": "<>"
  },
  "YOU-ARE": {
   "name": "YOU-ARE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2702,
   "value": "\"You are \""
  },
  "YOU-ARENT": {
   "name": "YOU-ARENT",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2703,
   "value": "\"You aren't \""
  }
 },
 "syntax": {
  "$DEBUG": {
   "verb": "$DEBUG",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$DEBUG",
     "objects": 0,
     "particles": [],
     "action": "V-$DEBUG",
     "preaction": null,
     "file": "debug.zil",
     "line": 9
    }
   ]
  },
  "$HANDLE": {
   "verb": "$HANDLE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$HANDLE",
     "objects": 0,
     "particles": [],
     "action": "V-$HANDLE",
     "preaction": null,
     "file": "debug.zil",
     "line": 10
    }
   ]
  },
  "$NEXT": {
   "verb": "$NEXT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$NEXT",
     "objects": 0,
     "particles": [],
     "action": "V-$NEXT",
     "preaction": null,
     "file": "debug.zil",
     "line": 11
    }
   ]
  },
  "$GOAL": {
   "verb": "$GOAL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$GOAL",
     "objects": 0,
     "particles": [],
     "action": "V-$GOAL",
     "preaction": null,
     "file": "debug.zil",
     "line": 12
    }
   ]
  },
  "$TRS": {
   "verb": "$TRS",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$TRS",
     "objects": 0,
     "particles": [],
     "action": "V-$TANDY",
     "preaction": null,
     "file": "debug.zil",
     "line": 13
    }
   ]
  },
  "$WHERE": {
   "verb": "$WHERE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$WHERE",
     "objects": 0,
     "particles": [],
     "action": "V-$WHERE",
     "preaction": null,
     "file": "debug.zil",
     "line": 14
    },
    {
     "pattern": "$WHERE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-$WHERE",
     "preaction": null,
     "file": "debug.zil",
     "line": 15
    },
    {
     "pattern": "$WHERE OBJECT OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-$WHERE",
     "preaction": null,
     "file": "debug.zil",
     "line": 16
    }
   ]
  },
  "$TABLE": {
   "verb": "$TABLE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$TABLE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-$TABLE",
     "preaction": null,
     "file": "debug.zil",
     "line": 17
    }
   ]
  },
  "$FOLLOW": {
   "verb": "$FOLLOW",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$FOLLOW OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-$FOLLOW",
     "preaction": null,
     "file": "debug.zil",
     "line": 18
    }
   ]
  },
  "$ESTABLISH": {
   "verb": "$ESTABLISH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$ESTABLISH OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-$ESTABLISH",
     "preaction": null,
     "file": "debug.zil",
     "line": 19
    }
   ]
  },
  "$SCORE": {
   "verb": "$SCORE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$SCORE",
     "objects": 0,
     "particles": [],
     "action": "V-$SCORE",
     "preaction": null,
     "file": "debug.zil",
     "line": 20
    }
   ]
  },
  "$TOLD": {
   "verb": "$TOLD",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$TOLD",
     "objects": 0,
     "particles": [],
     "action": "V-$TOLD",
     "preaction": null,
     "file": "debug.zil",
     "line": 21
    }
   ]
  },
  "$IT": {
   "verb": "$IT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$IT",
     "objects": 0,
     "particles": [],
     "action": "V-$IT",
     "preaction": null,
     "file": "debug.zil",
     "line": 22
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
     "line": 30
    },
    {
     "pattern": "$VERIFY OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-$VERIFY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 31
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
     "line": 33
    },
    {
     "pattern": "ACCUSE OBJECT (FIND PERSON) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ACCUSE",
     "preaction": "PRE-ACCUSE",
     "file": "syntax.zil",
     "line": 34
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
     "preaction": null,
     "file": "syntax.zil",
     "line": 40
    },
    {
     "pattern": "ANALYZE OBJECT FOR OBJECT",
     "objects": 2,
     "particles": [
      "FOR"
     ],
     "action": "V-ANALYZE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 41
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
     "line": 46
    },
    {
     "pattern": "ANSWER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-REPLY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 47
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
     "line": 51
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
     "line": 52
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
     "line": 55
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
     "line": 56
    },
    {
     "pattern": "ASK FOR OBJECT (ON-GROUND IN-ROOM ;HAVE)",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-ASK-CONTEXT-FOR",
     "preaction": "PRE-ASK-CONTEXT-FOR",
     "file": "syntax.zil",
     "line": 58
    },
    {
     "pattern": "ASK OBJECT (FIND PERSON) ABOUT OBJECT (HELD CARRIED ;HAVE)",
     "objects": 2,
     "particles": [
      "ABOUT"
     ],
     "action": "V-ASK-ABOUT",
     "preaction": "PRE-ASK-ABOUT",
     "file": "syntax.zil",
     "line": 60
    },
    {
     "pattern": "ASK OBJECT (FIND PERSON) FOR OBJECT (ON-GROUND IN-ROOM ;HAVE)",
     "objects": 2,
     "particles": [
      "FOR"
     ],
     "action": "V-ASK-FOR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 62
    },
    {
     "pattern": "ASK OBJECT (FIND PERSON) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-ASK-FOR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 64
    }
   ]
  },
  "ORDER": {
   "verb": "ORDER",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ORDER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-ORDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 67
    }
   ]
  },
  "ATTACK": {
   "verb": "ATTACK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ATTACK OBJECT (FIND PERSON) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-SLAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 70
    },
    {
     "pattern": "ATTACK OBJECT (FIND PERSON) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 71
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
     "line": 77
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
     "line": 83
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
     "line": 84
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
     "line": 85
    }
   ]
  },
  "BURN": {
   "verb": "BURN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "BURN OBJECT (FIND BURNBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-BURN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 90
    },
    {
     "pattern": "BURN OBJECT (FIND BURNBIT) (HELD CARRIED ON-GROUND IN-ROOM) IN OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-BURN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 92
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
     "line": 97
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
     "preaction": "PRE-PHONE",
     "file": "syntax.zil",
     "line": 98
    },
    {
     "pattern": "CALL OBJECT ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PHONE",
     "preaction": "PRE-PHONE",
     "file": "syntax.zil",
     "line": 99
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
     "line": 100
    },
    {
     "pattern": "CALL UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-PHONE",
     "preaction": "PRE-PHONE",
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
     "pattern": "CLIMB OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLIMB-FOO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 104
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
     "line": 105
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
     "pattern": "CLIMB UP OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-CLIMB-UP",
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
     "file": "syntax.zil",
     "line": 110
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
     "line": 114
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
     "line": 115
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
     "line": 117
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
     "line": 127
    },
    {
     "pattern": "CURSE OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [],
     "action": "V-CURSES",
     "preaction": null,
     "file": "syntax.zil",
     "line": 128
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
     "line": 129
    }
   ]
  },
  "CUT": {
   "verb": "CUT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CUT OBJECT WITH OBJECT (FIND WEAPONBIT) (CARRIED HELD HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-CUT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 132
    }
   ]
  },
  "DANCE": {
   "verb": "DANCE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DANCE",
     "objects": 0,
     "particles": [],
     "action": "V-DANCE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 134
    },
    {
     "pattern": "DANCE WITH OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-DANCE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 135
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
     "line": 147
    }
   ]
  },
  "DRINK": {
   "verb": "DRINK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DRINK OBJECT (FIND DRINKBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE)",
     "objects": 1,
     "particles": [],
     "action": "V-DRINK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 150
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
     "line": 154
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
     "line": 155
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
     "line": 156
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
     "line": 157
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
     "line": 162
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
  "EXAMINE": {
   "verb": "EXAMINE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EXAMINE OBJECT (HELD CARRIED IN-ROOM ON-GROUND)",
     "objects": 1,
     "particles": [],
     "action": "V-EXAMINE",
     "preaction": "PRE-EXAMINE",
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
     "pattern": "FIND OBJECT (HELD CARRIED ;HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-FIND",
     "preaction": "PRE-FIND",
     "file": "syntax.zil",
     "line": 185
    },
    {
     "pattern": "FIND OBJECT OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-FIND",
     "preaction": "PRE-FIND",
     "file": "syntax.zil",
     "line": 186
    },
    {
     "pattern": "FIND OBJECT AT OBJECT",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-FIND",
     "preaction": "PRE-FIND",
     "file": "syntax.zil",
     "line": 187
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
     "line": 189
    }
   ]
  },
  "FLUSH": {
   "verb": "FLUSH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FLUSH OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-FLUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 192
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
     "line": 195
    },
    {
     "pattern": "FOLLOW OBJECT (FIND PERSON) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 196
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
     "line": 197
    }
   ]
  },
  "GIVE": {
   "verb": "GIVE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "GIVE OBJECT (MANY HELD CARRIED) TO OBJECT (FIND PERSON) (ON-GROUND)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-GIVE",
     "preaction": "PRE-GIVE",
     "file": "syntax.zil",
     "line": 200
    },
    {
     "pattern": "GIVE OBJECT (FIND PERSON) (ON-GROUND) OBJECT (MANY HELD CARRIED)",
     "objects": 2,
     "particles": [],
     "action": "V-SGIVE",
     "preaction": "PRE-SGIVE",
     "file": "syntax.zil",
     "line": 203
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
     "line": 207
    },
    {
     "pattern": "GOODBYE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-GOODBYE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 208
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
     "line": 211
    }
   ]
  },
  "HANG": {
   "verb": "HANG",
   "synonyms": [],
   "productions": [
    {
     "pattern": "HANG UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-HANG-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 214
    },
    {
     "pattern": "HANG OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-HANG-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 215
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
     "line": 220
    },
    {
     "pattern": "HELLO OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-HELLO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 221
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
     "line": 223
    },
    {
     "pattern": "HELP OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [],
     "action": "V-HELP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 224
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
     "preaction": "PRE-HIDE",
     "file": "syntax.zil",
     "line": 227
    },
    {
     "pattern": "HIDE BEHIND OBJECT",
     "objects": 1,
     "particles": [
      "BEHIND"
     ],
     "action": "V-HIDE-BEHIND",
     "preaction": "PRE-HIDE",
     "file": "syntax.zil",
     "line": 228
    },
    {
     "pattern": "HIDE IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-HIDE-INSIDE",
     "preaction": "PRE-HIDE",
     "file": "syntax.zil",
     "line": 229
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
     "line": 230
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
     "line": 231
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
     "line": 232
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
     "line": 235
    }
   ]
  },
  "INTERVIEW": {
   "verb": "INTERVIEW",
   "synonyms": [],
   "productions": [
    {
     "pattern": "INTERVIEW OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-INTERVIEW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 237
    }
   ]
  },
  "JUMP": {
   "verb": "JUMP",
   "synonyms": [],
   "productions": [
    {
     "pattern": "JUMP IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 242
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
     "line": 246
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
     "line": 249
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
     "line": 250
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
     "line": 254
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
     "line": 257
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
     "line": 258
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
     "line": 259
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
     "line": 261
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
     "line": 262
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
     "line": 265
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
     "preaction": "PRE-LEAVE",
     "file": "syntax.zil",
     "line": 271
    },
    {
     "pattern": "LEAVE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-LEAVE",
     "preaction": "PRE-LEAVE",
     "file": "syntax.zil",
     "line": 272
    }
   ]
  },
  "LIGHT": {
   "verb": "LIGHT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LIGHT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 274
    }
   ]
  },
  "LISTEN": {
   "verb": "LISTEN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LISTEN",
     "objects": 0,
     "particles": [],
     "action": "V-LISTEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 280
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
     "pattern": "MAKE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-MAKE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 312
    },
    {
     "pattern": "MAKE OBJECT OBJECT",
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
     "line": 318
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
     "line": 323
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
     "line": 325
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
     "line": 327
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
     "line": 331
    }
   ]
  },
  "PICK": {
   "verb": "PICK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PICK OBJECT (FIND DOORBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (ON-GROUND IN-ROOM HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-PICK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 335
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
     "line": 338
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
     "preaction": null,
     "file": "syntax.zil",
     "line": 349
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-POUR-ON",
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
     "action": "V-POUR-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 352
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
     "line": 355
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
     "line": 356
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
     "pattern": "PUSH OBJECT UNDER OBJECT",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 361
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
     "line": 364
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
     "line": 366
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
     "line": 367
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
     "line": 368
    },
    {
     "pattern": "PUT ON OBJECT (HELD CARRIED HAVE)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-WEAR",
     "preaction": "PRE-WEAR",
     "file": "syntax.zil",
     "line": 369
    }
   ]
  },
  "WEAR": {
   "verb": "WEAR",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WEAR OBJECT (HELD CARRIED HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-WEAR",
     "preaction": "PRE-WEAR",
     "file": "syntax.zil",
     "line": 371
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
     "action": "V-TAKE-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 372
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
     "line": 375
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
     "line": 378
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
     "line": 379
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
     "line": 380
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
     "line": 383
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
     "line": 394
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
     "line": 396
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
     "line": 398
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
     "line": 401
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
     "line": 407
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
     "line": 413
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
     "line": 416
    },
    {
     "pattern": "SAY OBJECT (HELD CARRIED ;HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-TELL-ME-ABOUT",
     "preaction": "PRE-TELL-ME-ABOUT",
     "file": "syntax.zil",
     "line": 417
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
     "line": 419
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
     "line": 421
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
     "line": 423
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
     "line": 425
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
     "line": 428
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
     "line": 430
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
     "line": 436
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
     "line": 437
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
     "line": 439
    }
   ]
  },
  "SHOW": {
   "verb": "SHOW",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SHOW OBJECT (FIND PERSON) OBJECT (HELD CARRIED ON-GROUND)",
     "objects": 2,
     "particles": [],
     "action": "V-SSHOW",
     "preaction": "PRE-SSHOW",
     "file": "syntax.zil",
     "line": 455
    },
    {
     "pattern": "SHOW OBJECT (HELD CARRIED ON-GROUND) TO OBJECT (FIND PERSON)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-SHOW",
     "preaction": "PRE-SHOW",
     "file": "syntax.zil",
     "line": 457
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
     "line": 460
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
     "line": 461
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
     "line": 462
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
     "line": 468
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
     "line": 469
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
     "line": 474
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
     "line": 478
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
     "line": 483
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
     "line": 485
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
     "line": 490
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
     "line": 504
    },
    {
     "pattern": "TAKE OBJECT (IN-ROOM) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-TAKEOUT",
     "preaction": "PRE-TAKEOUT",
     "file": "syntax.zil",
     "line": 506
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
     "line": 508
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
     "line": 511
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
     "line": 514
    },
    {
     "pattern": "TAKE OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-SHOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 517
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
     "line": 520
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
     "line": 521
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
     "line": 522
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
     "line": 523
    },
    {
     "pattern": "TAKE OFF OBJECT",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-TAKE-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 524
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
     "line": 529
    },
    {
     "pattern": "TELL OBJECT (FIND PERSON) ABOUT OBJECT",
     "objects": 2,
     "particles": [
      "ABOUT"
     ],
     "action": "V-TELL-ME",
     "preaction": "PRE-TELL-ME",
     "file": "syntax.zil",
     "line": 530
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
     "line": 534
    },
    {
     "pattern": "THANKS OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-THANKS",
     "preaction": null,
     "file": "syntax.zil",
     "line": 535
    }
   ]
  },
  "THROW": {
   "verb": "THROW",
   "synonyms": [],
   "productions": [
    {
     "pattern": "THROW OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-THROW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 538
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) AT OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-THROW-AT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 539
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
     "line": 542
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
     "line": 544
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
     "line": 546
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
     "line": 548
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
     "line": 554
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
     "line": 557
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
     "line": 560
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
     "line": 563
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
     "line": 568
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
     "line": 571
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
     "line": 574
    },
    {
     "pattern": "TURN OFF OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 576
    },
    {
     "pattern": "TURN ON OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 578
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
     "line": 580
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
     "line": 584
    },
    {
     "pattern": "UNLOCK OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-UNLOCK",
     "preaction": "PRE-UNLOCK",
     "file": "syntax.zil",
     "line": 585
    }
   ]
  },
  "UNMASK": {
   "verb": "UNMASK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "UNMASK",
     "objects": 0,
     "particles": [],
     "action": "V-UNMASK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 589
    },
    {
     "pattern": "UNMASK OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [],
     "action": "V-UNMASK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 590
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
     "line": 592
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
     "line": 594
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
     "line": 597
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
     "line": 599
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
     "line": 603
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
     "line": 605
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
     "line": 608
    },
    {
     "pattern": "RELEASE OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [],
     "action": "V-UNTIE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 609
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
     "line": 612
    },
    {
     "pattern": "WAIT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WAIT-FOR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 613
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
     "line": 614
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
     "line": 615
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
     "line": 616
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
     "line": 619
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
     "line": 620
    }
   ]
  },
  "JOIN": {
   "verb": "JOIN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "JOIN OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WALK-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 622
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
     "line": 625
    },
    {
     "pattern": "WALK BEHIND OBJECT",
     "objects": 1,
     "particles": [
      "BEHIND"
     ],
     "action": "V-HIDE-BEHIND",
     "preaction": "PRE-HIDE",
     "file": "syntax.zil",
     "line": 627
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
     "line": 628
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
     "line": 629
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
     "line": 630
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
     "line": 631
    },
    {
     "pattern": "WALK OVER OBJECT",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-WALK-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 632
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
     "line": 633
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
     "line": 634
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
     "line": 635
    }
   ]
  },
  "WATCH": {
   "verb": "WATCH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WATCH OBJECT (HELD CARRIED ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-EXAMINE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 637
    }
   ]
  },
  "WAVE": {
   "verb": "WAVE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WAVE",
     "objects": 0,
     "particles": [],
     "action": "V-WAVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 639
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
     "line": 640
    },
    {
     "pattern": "WAVE TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-WAVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 641
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
     "line": 644
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
     "line": 645
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
     "line": 646
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
     "line": 648
    },
    {
     "pattern": "WHAT OBJECT OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-WHAT-IS-WAS",
     "preaction": null,
     "file": "syntax.zil",
     "line": 650
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
     "line": 652
    }
   ]
  },
  "WRITE": {
   "verb": "WRITE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WRITE WITH OBJECT",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-WRITE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 655
    },
    {
     "pattern": "WRITE ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-WRITE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 656
    },
    {
     "pattern": "WRITE ON OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "ON",
      "WITH"
     ],
     "action": "V-WRITE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 657
    },
    {
     "pattern": "WRITE IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-WRITE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 658
    },
    {
     "pattern": "WRITE IN OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "IN",
      "WITH"
     ],
     "action": "V-WRITE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 659
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
     "line": 665
    }
   ]
  },
  "CONTINUE": {
   "verb": "CONTINUE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CONTINUE",
     "objects": 0,
     "particles": [],
     "action": "V-CONTINUE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 668
    }
   ]
  },
  "IS": {
   "verb": "IS",
   "synonyms": [],
   "productions": [
    {
     "pattern": "IS OBJECT OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-IS",
     "preaction": null,
     "file": "syntax.zil",
     "line": 671
    }
   ]
  },
  "REVEAL": {
   "verb": "REVEAL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "REVEAL OBJECT TO OBJECT (FIND PERSON)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-REVEAL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 674
    }
   ]
  },
  "$REVEAL": {
   "verb": "$REVEAL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$REVEAL OBJECT TO OBJECT (FIND PERSON)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-$REVEAL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 676
    }
   ]
  },
  "$DISCOVER": {
   "verb": "$DISCOVER",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$DISCOVER OBJECT OBJECT (FIND PERSON)",
     "objects": 2,
     "particles": [],
     "action": "V-$DISCOVER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 677
    }
   ]
  },
  "TIP": {
   "verb": "TIP",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TIP OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [],
     "action": "V-TIP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 679
    }
   ]
  }
 },
 "vocab": {
  "$DEBUG": {
   "word": "$DEBUG",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "$HANDLE": {
   "word": "$HANDLE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "$NEXT": {
   "word": "$NEXT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "$GOAL": {
   "word": "$GOAL",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "$TRS": {
   "word": "$TRS",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "$WHERE": {
   "word": "$WHERE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "$TABLE": {
   "word": "$TABLE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "$FOLLOW": {
   "word": "$FOLLOW",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "$ESTABLISH": {
   "word": "$ESTABLISH",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "$SCORE": {
   "word": "$SCORE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "$TOLD": {
   "word": "$TOLD",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "$IT": {
   "word": "$IT",
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
  "ACCUSE": {
   "word": "ACCUSE",
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
     "of": "ACCUSE"
    },
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
     "of": "CUT"
    },
    {
     "kind": "particle",
     "of": "DANCE"
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
     "of": "STRIKE"
    },
    {
     "kind": "particle",
     "of": "TIE"
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
     "of": "WRITE"
    },
    {
     "kind": "word",
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
  "TO": {
   "word": "TO",
   "roles": [
    {
     "kind": "particle",
     "of": "ASK"
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
    },
    {
     "kind": "particle",
     "of": "WAVE"
    },
    {
     "kind": "particle",
     "of": "REVEAL"
    },
    {
     "kind": "particle",
     "of": "$REVEAL"
    }
   ]
  },
  "ORDER": {
   "word": "ORDER",
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
  "OFF": {
   "word": "OFF",
   "roles": [
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
  "IN": {
   "word": "IN",
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
     "of": "DROP"
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
     "of": "LOOK"
    },
    {
     "kind": "particle",
     "of": "PEEK"
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
     "kind": "particle",
     "of": "WRITE"
    },
    {
     "kind": "direction",
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
    }
   ]
  },
  "ON": {
   "word": "ON",
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
     "of": "CURSE"
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
    },
    {
     "kind": "particle",
     "of": "WRITE"
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
     "of": "HANG"
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
     "of": "WALK"
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
  "DANCE": {
   "word": "DANCE",
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
  "DIAGNOSE": {
   "word": "DIAGNOSE",
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
    },
    {
     "kind": "noun",
     "of": "GLOBAL-DRINK"
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
  "AT": {
   "word": "AT",
   "roles": [
    {
     "kind": "particle",
     "of": "FIND"
    },
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
     "of": "THROW"
    },
    {
     "kind": "particle",
     "of": "WAVE"
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
  "FLUSH": {
   "word": "FLUSH",
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
  "HANG": {
   "word": "HANG",
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
  "HELP": {
   "word": "HELP",
   "roles": [
    {
     "kind": "verb",
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
    }
   ]
  },
  "INTERVIEW": {
   "word": "INTERVIEW",
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
  "STAND": {
   "word": "STAND",
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
     "of": "SLAP"
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
  "WEAR": {
   "word": "WEAR",
   "roles": [
    {
     "kind": "verb",
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
    }
   ]
  },
  "REVIVE": {
   "word": "REVIVE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word-synonym",
     "of": "WAKE"
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
  "SHOW": {
   "word": "SHOW",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
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
  "FROM": {
   "word": "FROM",
   "roles": [
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
  "UNMASK": {
   "word": "UNMASK",
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
  "JOIN": {
   "word": "JOIN",
   "roles": [
    {
     "kind": "verb",
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
  "WATCH": {
   "word": "WATCH",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "DOG"
    }
   ]
  },
  "WAVE": {
   "word": "WAVE",
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
  "WRITE": {
   "word": "WRITE",
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
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "CONTINUE": {
   "word": "CONTINUE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
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
     "kind": "word",
     "of": null
    },
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "REVEAL": {
   "word": "REVEAL",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "$REVEAL": {
   "word": "$REVEAL",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "$DISCOVER": {
   "word": "$DISCOVER",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "TIP": {
   "word": "TIP",
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
    },
    {
     "kind": "adjective",
     "of": "NORTH-OFFICE-DOOR"
    },
    {
     "kind": "adjective",
     "of": "LIBRARY-DOOR"
    },
    {
     "kind": "adjective",
     "of": "NORTH-DOOR"
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
     "of": "SOUTH-OFFICE-DOOR"
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
     "of": "LH-DOOR"
    },
    {
     "kind": "adjective",
     "of": "EAST-CLOSET-DOOR"
    },
    {
     "kind": "adjective",
     "of": "EAST-BATH-DOOR"
    },
    {
     "kind": "adjective",
     "of": "MEDIA-OFFICE-DOOR"
    },
    {
     "kind": "adjective",
     "of": "EAST-DOOR"
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
     "of": "MH-DOOR"
    },
    {
     "kind": "adjective",
     "of": "WEST-CLOSET-DOOR"
    },
    {
     "kind": "adjective",
     "of": "MEDIA-OFFICE-DOOR"
    },
    {
     "kind": "adjective",
     "of": "WEST-DOOR"
    },
    {
     "kind": "adjective",
     "of": "WEST-BATH-DOOR"
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
  "G": {
   "word": "G",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "AGAIN"
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
  "WIPE": {
   "word": "WIPE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "BRUSH"
    }
   ]
  },
  "WASH": {
   "word": "WASH",
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
    }
   ]
  },
  "DIAL": {
   "word": "DIAL",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CALL"
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
  "HELL": {
   "word": "HELL",
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
  "SIP": {
   "word": "SIP",
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
  "SWIG": {
   "word": "SWIG",
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
  "SAMPLE": {
   "word": "SAMPLE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "EAT"
    },
    {
     "kind": "noun",
     "of": "STAIN-SAMPLE"
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
    },
    {
     "kind": "noun",
     "of": "HANDCUFFS"
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
  "MIX": {
   "word": "MIX",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "MAKE"
    }
   ]
  },
  "PRY": {
   "word": "PRY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "PICK"
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
  "DRAG": {
   "word": "DRAG",
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
  "TALK": {
   "word": "TALK",
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
  "CONFRONT": {
   "word": "CONFRONT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SHOW"
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
  "GRAB": {
   "word": "GRAB",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TAKE"
    }
   ]
  },
  "EXPLAIN": {
   "word": "EXPLAIN",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TELL"
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
  "VERSION": {
   "word": "VERSION",
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
  "AWAKE": {
   "word": "AWAKE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WAKE"
    }
   ]
  },
  "RESUSCITATE": {
   "word": "RESUSCITATE",
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
  "C": {
   "word": "C",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CONTINUE"
    }
   ]
  },
  "WAS": {
   "word": "WAS",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "IS"
    },
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "DISCLOSE": {
   "word": "DISCLOSE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "REVEAL"
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
  "ARE": {
   "word": "ARE",
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
  "AM": {
   "word": "AM",
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
  "HAVE": {
   "word": "HAVE",
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
  "OKAY": {
   "word": "OKAY",
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
    }
   ]
  },
  "THEM": {
   "word": "THEM",
   "roles": [
    {
     "kind": "noun",
     "of": "HIM-HER"
    }
   ]
  },
  "GROUP": {
   "word": "GROUP",
   "roles": [
    {
     "kind": "noun",
     "of": "HIM-HER"
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
  "REPORTER": {
   "word": "REPORTER",
   "roles": [
    {
     "kind": "noun",
     "of": "PLAYER"
    },
    {
     "kind": "noun",
     "of": "ME"
    },
    {
     "kind": "adjective",
     "of": "NOTEBOOK"
    },
    {
     "kind": "adjective",
     "of": "YOUR-COAT"
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
  "COWBOY": {
   "word": "COWBOY",
   "roles": [
    {
     "kind": "adjective",
     "of": "ME"
    },
    {
     "kind": "adjective",
     "of": "COWBOY-COSTUME"
    },
    {
     "kind": "adjective",
     "of": "MASK"
    }
   ]
  },
  "COWGIRL": {
   "word": "COWGIRL",
   "roles": [
    {
     "kind": "adjective",
     "of": "ME"
    },
    {
     "kind": "adjective",
     "of": "COWBOY-COSTUME"
    }
   ]
  },
  "COSTUME": {
   "word": "COSTUME",
   "roles": [
    {
     "kind": "noun",
     "of": "COWBOY-COSTUME"
    },
    {
     "kind": "noun",
     "of": "FAIRY-COSTUME"
    },
    {
     "kind": "noun",
     "of": "SHEIK-COSTUME"
    },
    {
     "kind": "noun",
     "of": "HAREM-COSTUME"
    },
    {
     "kind": "noun",
     "of": "BALLERINA-COSTUME"
    },
    {
     "kind": "noun",
     "of": "WEREWOLF-COSTUME"
    },
    {
     "kind": "noun",
     "of": "HARLEQUIN-COSTUME"
    },
    {
     "kind": "noun",
     "of": "EXPLORER-COSTUME"
    },
    {
     "kind": "noun",
     "of": "ASTRONAUT-COSTUME"
    },
    {
     "kind": "noun",
     "of": "VAMPIRE-COSTUME"
    },
    {
     "kind": "noun",
     "of": "GORILLA-COSTUME"
    },
    {
     "kind": "adjective",
     "of": "RECEIPT"
    },
    {
     "kind": "adjective",
     "of": "COSTUME-SHOP"
    }
   ]
  },
  "OUTFIT": {
   "word": "OUTFIT",
   "roles": [
    {
     "kind": "noun",
     "of": "COWBOY-COSTUME"
    }
   ]
  },
  "MY": {
   "word": "MY",
   "roles": [
    {
     "kind": "adjective",
     "of": "COWBOY-COSTUME"
    },
    {
     "kind": "adjective",
     "of": "YOUR-COAT"
    },
    {
     "kind": "adjective",
     "of": "MASK"
    }
   ]
  },
  "WESTERN": {
   "word": "WESTERN",
   "roles": [
    {
     "kind": "adjective",
     "of": "COWBOY-COSTUME"
    },
    {
     "kind": "adjective",
     "of": "GUNBELT"
    },
    {
     "kind": "adjective",
     "of": "MASK"
    }
   ]
  },
  "GUNBELT": {
   "word": "GUNBELT",
   "roles": [
    {
     "kind": "noun",
     "of": "GUNBELT"
    }
   ]
  },
  "HOLSTER": {
   "word": "HOLSTER",
   "roles": [
    {
     "kind": "noun",
     "of": "GUNBELT"
    }
   ]
  },
  "LOOP": {
   "word": "LOOP",
   "roles": [
    {
     "kind": "noun",
     "of": "GUNBELT"
    }
   ]
  },
  "LOOPS": {
   "word": "LOOPS",
   "roles": [
    {
     "kind": "noun",
     "of": "GUNBELT"
    }
   ]
  },
  "LEATHER": {
   "word": "LEATHER",
   "roles": [
    {
     "kind": "adjective",
     "of": "GUNBELT"
    }
   ]
  },
  "BELT": {
   "word": "BELT",
   "roles": [
    {
     "kind": "adjective",
     "of": "GUNBELT"
    }
   ]
  },
  "PEN": {
   "word": "PEN",
   "roles": [
    {
     "kind": "noun",
     "of": "PEN"
    }
   ]
  },
  "NOTEBOOK": {
   "word": "NOTEBOOK",
   "roles": [
    {
     "kind": "noun",
     "of": "NOTEBOOK"
    }
   ]
  },
  "NOTES": {
   "word": "NOTES",
   "roles": [
    {
     "kind": "noun",
     "of": "NOTEBOOK"
    }
   ]
  },
  "OVERCOAT": {
   "word": "OVERCOAT",
   "roles": [
    {
     "kind": "noun",
     "of": "YOUR-COAT"
    },
    {
     "kind": "noun",
     "of": "ALICIA-COAT"
    }
   ]
  },
  "COAT": {
   "word": "COAT",
   "roles": [
    {
     "kind": "noun",
     "of": "YOUR-COAT"
    },
    {
     "kind": "noun",
     "of": "ALICIA-COAT"
    },
    {
     "kind": "noun",
     "of": "DETECTIVE-COAT"
    },
    {
     "kind": "noun",
     "of": "DUFFY-COAT"
    }
   ]
  },
  "PLAYER": {
   "word": "PLAYER",
   "roles": [
    {
     "kind": "adjective",
     "of": "YOUR-COAT"
    },
    {
     "kind": "noun",
     "of": "RECORD-PLAYER"
    }
   ]
  },
  "WELLMAN": {
   "word": "WELLMAN",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-MICHAEL"
    },
    {
     "kind": "noun",
     "of": "MICHAEL"
    }
   ]
  },
  "SHEIK": {
   "word": "SHEIK",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-MICHAEL"
    },
    {
     "kind": "noun",
     "of": "MICHAEL"
    },
    {
     "kind": "adjective",
     "of": "SHEIK-COSTUME"
    }
   ]
  },
  "MICHAEL": {
   "word": "MICHAEL",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-MICHAEL"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-MICHAEL"
    },
    {
     "kind": "noun",
     "of": "MICHAEL"
    },
    {
     "kind": "adjective",
     "of": "MICHAEL"
    },
    {
     "kind": "adjective",
     "of": "SHEIK-COSTUME"
    }
   ]
  },
  "MIKE": {
   "word": "MIKE",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-MICHAEL"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-MICHAEL"
    },
    {
     "kind": "noun",
     "of": "MICHAEL"
    },
    {
     "kind": "adjective",
     "of": "MICHAEL"
    }
   ]
  },
  "MR": {
   "word": "MR",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-MICHAEL"
    },
    {
     "kind": "adjective",
     "of": "MICHAEL"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-RICHARD"
    },
    {
     "kind": "adjective",
     "of": "RICHARD"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-COCHRANE"
    },
    {
     "kind": "adjective",
     "of": "COCHRANE"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-OSTMANN"
    },
    {
     "kind": "adjective",
     "of": "OSTMANN"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-BUTLER"
    },
    {
     "kind": "adjective",
     "of": "BUTLER"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-BARTENDER"
    },
    {
     "kind": "adjective",
     "of": "BARTENDER"
    }
   ]
  },
  "VERONICA": {
   "word": "VERONICA",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-VERONICA"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-VERONICA"
    },
    {
     "kind": "noun",
     "of": "VERONICA"
    },
    {
     "kind": "adjective",
     "of": "VERONICA"
    },
    {
     "kind": "noun",
     "of": "CORPSE"
    },
    {
     "kind": "adjective",
     "of": "CORPSE"
    },
    {
     "kind": "adjective",
     "of": "FAIRY-COSTUME"
    },
    {
     "kind": "adjective",
     "of": "VERONICA-HAIR"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-MURDER"
    }
   ]
  },
  "TITANIA": {
   "word": "TITANIA",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-VERONICA"
    },
    {
     "kind": "noun",
     "of": "VERONICA"
    },
    {
     "kind": "noun",
     "of": "CORPSE"
    },
    {
     "kind": "noun",
     "of": "FAIRY-COSTUME"
    }
   ]
  },
  "QUEEN": {
   "word": "QUEEN",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-VERONICA"
    },
    {
     "kind": "noun",
     "of": "VERONICA"
    },
    {
     "kind": "adjective",
     "of": "CORPSE"
    }
   ]
  },
  "ASHCROFT": {
   "word": "ASHCROFT",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-VERONICA"
    },
    {
     "kind": "noun",
     "of": "VERONICA"
    },
    {
     "kind": "adjective",
     "of": "CORPSE"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-RICHARD"
    },
    {
     "kind": "noun",
     "of": "RICHARD"
    },
    {
     "kind": "adjective",
     "of": "TRUST"
    },
    {
     "kind": "adjective",
     "of": "PORTRAITS"
    }
   ]
  },
  "MRS": {
   "word": "MRS",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-VERONICA"
    },
    {
     "kind": "adjective",
     "of": "VERONICA"
    },
    {
     "kind": "adjective",
     "of": "CORPSE"
    }
   ]
  },
  "MS": {
   "word": "MS",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-VERONICA"
    },
    {
     "kind": "adjective",
     "of": "VERONICA"
    },
    {
     "kind": "adjective",
     "of": "CORPSE"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-ALICIA"
    },
    {
     "kind": "adjective",
     "of": "ALICIA"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-LINDA"
    },
    {
     "kind": "adjective",
     "of": "LINDA"
    }
   ]
  },
  "FAIRY": {
   "word": "FAIRY",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-VERONICA"
    },
    {
     "kind": "adjective",
     "of": "VERONICA"
    },
    {
     "kind": "adjective",
     "of": "CORPSE"
    },
    {
     "kind": "adjective",
     "of": "FAIRY-COSTUME"
    },
    {
     "kind": "adjective",
     "of": "FAIRY-MASK"
    }
   ]
  },
  "WIFE": {
   "word": "WIFE",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-VERONICA"
    },
    {
     "kind": "adjective",
     "of": "VERONICA"
    },
    {
     "kind": "adjective",
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
  "BODY": {
   "word": "BODY",
   "roles": [
    {
     "kind": "noun",
     "of": "CORPSE"
    }
   ]
  },
  "BULLET": {
   "word": "BULLET",
   "roles": [
    {
     "kind": "noun",
     "of": "BULLET"
    }
   ]
  },
  "OBJECT": {
   "word": "OBJECT",
   "roles": [
    {
     "kind": "noun",
     "of": "BULLET"
    }
   ]
  },
  "SILVER": {
   "word": "SILVER",
   "roles": [
    {
     "kind": "adjective",
     "of": "BULLET"
    }
   ]
  },
  "SMALL": {
   "word": "SMALL",
   "roles": [
    {
     "kind": "adjective",
     "of": "BULLET"
    },
    {
     "kind": "adjective",
     "of": "SMALL-DESK"
    }
   ]
  },
  "STAIN": {
   "word": "STAIN",
   "roles": [
    {
     "kind": "noun",
     "of": "STAIN"
    },
    {
     "kind": "adjective",
     "of": "STAIN-ANALYSIS"
    }
   ]
  },
  "RED": {
   "word": "RED",
   "roles": [
    {
     "kind": "adjective",
     "of": "STAIN"
    },
    {
     "kind": "adjective",
     "of": "VELVET-RIBBON"
    },
    {
     "kind": "adjective",
     "of": "LIQUID"
    }
   ]
  },
  "CLOTH": {
   "word": "CLOTH",
   "roles": [
    {
     "kind": "noun",
     "of": "STAIN-SAMPLE"
    }
   ]
  },
  "MASK": {
   "word": "MASK",
   "roles": [
    {
     "kind": "noun",
     "of": "FAIRY-MASK"
    },
    {
     "kind": "adjective",
     "of": "MASK-ANALYSIS"
    },
    {
     "kind": "noun",
     "of": "MASK"
    },
    {
     "kind": "noun",
     "of": "SHEIK-COSTUME"
    },
    {
     "kind": "noun",
     "of": "HAREM-COSTUME"
    },
    {
     "kind": "noun",
     "of": "BALLERINA-COSTUME"
    },
    {
     "kind": "noun",
     "of": "WEREWOLF-COSTUME"
    },
    {
     "kind": "noun",
     "of": "HARLEQUIN-COSTUME"
    },
    {
     "kind": "noun",
     "of": "EXPLORER-COSTUME"
    },
    {
     "kind": "noun",
     "of": "ASTRONAUT-COSTUME"
    },
    {
     "kind": "noun",
     "of": "VAMPIRE-COSTUME"
    },
    {
     "kind": "noun",
     "of": "GORILLA-COSTUME"
    }
   ]
  },
  "HAIR": {
   "word": "HAIR",
   "roles": [
    {
     "kind": "noun",
     "of": "HAIR"
    },
    {
     "kind": "noun",
     "of": "VERONICA-HAIR"
    },
    {
     "kind": "noun",
     "of": "ALICIA-HAIR"
    },
    {
     "kind": "noun",
     "of": "LINDA-HAIR"
    },
    {
     "kind": "adjective",
     "of": "HAIR-ANALYSIS"
    }
   ]
  },
  "DARK": {
   "word": "DARK",
   "roles": [
    {
     "kind": "adjective",
     "of": "HAIR"
    }
   ]
  },
  "ALICIA": {
   "word": "ALICIA",
   "roles": [
    {
     "kind": "adjective",
     "of": "ALICIA-HAIR"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-ALICIA"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-ALICIA"
    },
    {
     "kind": "noun",
     "of": "ALICIA"
    },
    {
     "kind": "adjective",
     "of": "ALICIA"
    },
    {
     "kind": "adjective",
     "of": "ALICIA-COAT"
    },
    {
     "kind": "adjective",
     "of": "ALICIA-CAR"
    },
    {
     "kind": "adjective",
     "of": "HAREM-COSTUME"
    }
   ]
  },
  "LINDA": {
   "word": "LINDA",
   "roles": [
    {
     "kind": "adjective",
     "of": "LINDA-HAIR"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-LINDA"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-LINDA"
    },
    {
     "kind": "noun",
     "of": "LINDA"
    },
    {
     "kind": "adjective",
     "of": "LINDA"
    },
    {
     "kind": "adjective",
     "of": "BALLERINA-COSTUME"
    }
   ]
  },
  "PULSE": {
   "word": "PULSE",
   "roles": [
    {
     "kind": "noun",
     "of": "PULSE"
    }
   ]
  },
  "BREATH": {
   "word": "BREATH",
   "roles": [
    {
     "kind": "noun",
     "of": "PULSE"
    }
   ]
  },
  "SIGNS": {
   "word": "SIGNS",
   "roles": [
    {
     "kind": "noun",
     "of": "PULSE"
    }
   ]
  },
  "VITAL": {
   "word": "VITAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "PULSE"
    }
   ]
  },
  "POLICE": {
   "word": "POLICE",
   "roles": [
    {
     "kind": "noun",
     "of": "POLICE"
    },
    {
     "kind": "adjective",
     "of": "POLICE-CAR"
    }
   ]
  },
  "COPS": {
   "word": "COPS",
   "roles": [
    {
     "kind": "noun",
     "of": "POLICE"
    }
   ]
  },
  "STATE": {
   "word": "STATE",
   "roles": [
    {
     "kind": "adjective",
     "of": "POLICE"
    }
   ]
  },
  "COUNTY": {
   "word": "COUNTY",
   "roles": [
    {
     "kind": "adjective",
     "of": "POLICE"
    }
   ]
  },
  "GIRL": {
   "word": "GIRL",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-ALICIA"
    },
    {
     "kind": "noun",
     "of": "ALICIA"
    }
   ]
  },
  "BARRON": {
   "word": "BARRON",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-ALICIA"
    },
    {
     "kind": "noun",
     "of": "ALICIA"
    }
   ]
  },
  "HAREM": {
   "word": "HAREM",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-ALICIA"
    },
    {
     "kind": "adjective",
     "of": "ALICIA"
    },
    {
     "kind": "adjective",
     "of": "HAREM-COSTUME"
    }
   ]
  },
  "MISS": {
   "word": "MISS",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-ALICIA"
    },
    {
     "kind": "adjective",
     "of": "ALICIA"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-LINDA"
    },
    {
     "kind": "adjective",
     "of": "LINDA"
    }
   ]
  },
  "WET": {
   "word": "WET",
   "roles": [
    {
     "kind": "adjective",
     "of": "ALICIA-COAT"
    }
   ]
  },
  "LABEL": {
   "word": "LABEL",
   "roles": [
    {
     "kind": "noun",
     "of": "LABEL"
    }
   ]
  },
  "CAR": {
   "word": "CAR",
   "roles": [
    {
     "kind": "noun",
     "of": "ALICIA-CAR"
    },
    {
     "kind": "noun",
     "of": "POLICE-CAR"
    },
    {
     "kind": "noun",
     "of": "MERCEDES"
    },
    {
     "kind": "noun",
     "of": "BMW"
    }
   ]
  },
  "LARIAT": {
   "word": "LARIAT",
   "roles": [
    {
     "kind": "noun",
     "of": "NOT-ROPE"
    },
    {
     "kind": "noun",
     "of": "ROPE"
    }
   ]
  },
  "LASSO": {
   "word": "LASSO",
   "roles": [
    {
     "kind": "noun",
     "of": "NOT-ROPE"
    },
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
     "of": "NOT-ROPE"
    },
    {
     "kind": "noun",
     "of": "ROPE"
    }
   ]
  },
  "WEREWOLF": {
   "word": "WEREWOLF",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-RICHARD"
    },
    {
     "kind": "noun",
     "of": "RICHARD"
    },
    {
     "kind": "adjective",
     "of": "WEREWOLF-COSTUME"
    }
   ]
  },
  "RICHARD": {
   "word": "RICHARD",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-RICHARD"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-RICHARD"
    },
    {
     "kind": "noun",
     "of": "RICHARD"
    },
    {
     "kind": "adjective",
     "of": "RICHARD"
    },
    {
     "kind": "adjective",
     "of": "WEREWOLF-COSTUME"
    }
   ]
  },
  "MARSTON": {
   "word": "MARSTON",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-COL-MARSTON"
    },
    {
     "kind": "noun",
     "of": "COL-MARSTON"
    },
    {
     "kind": "adjective",
     "of": "EXPLORER-COSTUME"
    }
   ]
  },
  "EXPLORER": {
   "word": "EXPLORER",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-COL-MARSTON"
    },
    {
     "kind": "noun",
     "of": "COL-MARSTON"
    },
    {
     "kind": "adjective",
     "of": "EXPLORER-COSTUME"
    }
   ]
  },
  "HUNTER": {
   "word": "HUNTER",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-COL-MARSTON"
    },
    {
     "kind": "noun",
     "of": "COL-MARSTON"
    },
    {
     "kind": "adjective",
     "of": "EXPLORER-COSTUME"
    }
   ]
  },
  "ROBERT": {
   "word": "ROBERT",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-COL-MARSTON"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-COL-MARSTON"
    },
    {
     "kind": "noun",
     "of": "COL-MARSTON"
    },
    {
     "kind": "adjective",
     "of": "COL-MARSTON"
    }
   ]
  },
  "COLONEL": {
   "word": "COLONEL",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-COL-MARSTON"
    },
    {
     "kind": "adjective",
     "of": "COL-MARSTON"
    }
   ]
  },
  "COL": {
   "word": "COL",
   "roles": [
    {
     "kind": "adjective",
     "of": "COL-MARSTON"
    }
   ]
  },
  "MEADE": {
   "word": "MEADE",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-LINDA"
    },
    {
     "kind": "noun",
     "of": "LINDA"
    }
   ]
  },
  "BALLERINA": {
   "word": "BALLERINA",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-LINDA"
    },
    {
     "kind": "noun",
     "of": "LINDA"
    },
    {
     "kind": "adjective",
     "of": "BALLERINA-COSTUME"
    }
   ]
  },
  "ASHER": {
   "word": "ASHER",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-SEN-ASHER"
    },
    {
     "kind": "noun",
     "of": "SEN-ASHER"
    },
    {
     "kind": "adjective",
     "of": "HARLEQUIN-COSTUME"
    }
   ]
  },
  "HARLEQUIN": {
   "word": "HARLEQUIN",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-SEN-ASHER"
    },
    {
     "kind": "noun",
     "of": "SEN-ASHER"
    },
    {
     "kind": "adjective",
     "of": "HARLEQUIN-COSTUME"
    }
   ]
  },
  "ALAN": {
   "word": "ALAN",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-SEN-ASHER"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-SEN-ASHER"
    },
    {
     "kind": "noun",
     "of": "SEN-ASHER"
    },
    {
     "kind": "adjective",
     "of": "SEN-ASHER"
    }
   ]
  },
  "AL": {
   "word": "AL",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-SEN-ASHER"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-SEN-ASHER"
    },
    {
     "kind": "noun",
     "of": "SEN-ASHER"
    },
    {
     "kind": "adjective",
     "of": "SEN-ASHER"
    }
   ]
  },
  "SENATOR": {
   "word": "SENATOR",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-SEN-ASHER"
    },
    {
     "kind": "adjective",
     "of": "SEN-ASHER"
    }
   ]
  },
  "SEN": {
   "word": "SEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-SEN-ASHER"
    },
    {
     "kind": "adjective",
     "of": "SEN-ASHER"
    },
    {
     "kind": "adjective",
     "of": "HARLEQUIN-COSTUME"
    }
   ]
  },
  "COCHRANE": {
   "word": "COCHRANE",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-COCHRANE"
    },
    {
     "kind": "noun",
     "of": "COCHRANE"
    },
    {
     "kind": "adjective",
     "of": "ASTRONAUT-COSTUME"
    }
   ]
  },
  "ASTRONAUT": {
   "word": "ASTRONAUT",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-COCHRANE"
    },
    {
     "kind": "noun",
     "of": "COCHRANE"
    },
    {
     "kind": "adjective",
     "of": "ASTRONAUT-COSTUME"
    }
   ]
  },
  "SPACEMAN": {
   "word": "SPACEMAN",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-COCHRANE"
    },
    {
     "kind": "noun",
     "of": "COCHRANE"
    }
   ]
  },
  "BILL": {
   "word": "BILL",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-COCHRANE"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-COCHRANE"
    },
    {
     "kind": "noun",
     "of": "COCHRANE"
    },
    {
     "kind": "adjective",
     "of": "COCHRANE"
    }
   ]
  },
  "WILLIAM": {
   "word": "WILLIAM",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-COCHRANE"
    },
    {
     "kind": "adjective",
     "of": "COCHRANE"
    }
   ]
  },
  "OSTMANN": {
   "word": "OSTMANN",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-OSTMANN"
    },
    {
     "kind": "noun",
     "of": "OSTMANN"
    },
    {
     "kind": "adjective",
     "of": "VAMPIRE-COSTUME"
    }
   ]
  },
  "VAMPIRE": {
   "word": "VAMPIRE",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-OSTMANN"
    },
    {
     "kind": "noun",
     "of": "OSTMANN"
    },
    {
     "kind": "adjective",
     "of": "VAMPIRE-COSTUME"
    }
   ]
  },
  "SAM": {
   "word": "SAM",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-OSTMANN"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-OSTMANN"
    },
    {
     "kind": "noun",
     "of": "OSTMANN"
    },
    {
     "kind": "adjective",
     "of": "OSTMANN"
    }
   ]
  },
  "SAMUEL": {
   "word": "SAMUEL",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-OSTMANN"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-OSTMANN"
    },
    {
     "kind": "noun",
     "of": "OSTMANN"
    },
    {
     "kind": "adjective",
     "of": "OSTMANN"
    }
   ]
  },
  "SMYTHE": {
   "word": "SMYTHE",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-BUTLER"
    },
    {
     "kind": "noun",
     "of": "BUTLER"
    },
    {
     "kind": "adjective",
     "of": "GORILLA-COSTUME"
    }
   ]
  },
  "BUTLER": {
   "word": "BUTLER",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-BUTLER"
    },
    {
     "kind": "noun",
     "of": "BUTLER"
    },
    {
     "kind": "adjective",
     "of": "GORILLA-COSTUME"
    }
   ]
  },
  "GORILLA": {
   "word": "GORILLA",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-BUTLER"
    },
    {
     "kind": "noun",
     "of": "BUTLER"
    },
    {
     "kind": "adjective",
     "of": "GORILLA-COSTUME"
    }
   ]
  },
  "GEORGE": {
   "word": "GEORGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-BUTLER"
    },
    {
     "kind": "adjective",
     "of": "BUTLER"
    }
   ]
  },
  "BASKET": {
   "word": "BASKET",
   "roles": [
    {
     "kind": "noun",
     "of": "TRASH-BASKET"
    },
    {
     "kind": "noun",
     "of": "WASTE-BASKET"
    }
   ]
  },
  "TRASH": {
   "word": "TRASH",
   "roles": [
    {
     "kind": "noun",
     "of": "TRASH-BASKET"
    },
    {
     "kind": "adjective",
     "of": "TRASH-BASKET"
    },
    {
     "kind": "noun",
     "of": "TRASH"
    }
   ]
  },
  "TRASHBASKET": {
   "word": "TRASHBASKET",
   "roles": [
    {
     "kind": "noun",
     "of": "TRASH-BASKET"
    }
   ]
  },
  "JACK": {
   "word": "JACK",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-BARTENDER"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-BARTENDER"
    },
    {
     "kind": "noun",
     "of": "BARTENDER"
    },
    {
     "kind": "adjective",
     "of": "BARTENDER"
    },
    {
     "kind": "adjective",
     "of": "PUMPKIN"
    },
    {
     "kind": "noun",
     "of": "JACK"
    }
   ]
  },
  "BARTENDER": {
   "word": "BARTENDER",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-BARTENDER"
    },
    {
     "kind": "noun",
     "of": "BARTENDER"
    }
   ]
  },
  "JOHNSON": {
   "word": "JOHNSON",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-BARTENDER"
    },
    {
     "kind": "noun",
     "of": "BARTENDER"
    }
   ]
  },
  "DOMINO": {
   "word": "DOMINO",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-BARTENDER"
    },
    {
     "kind": "noun",
     "of": "BARTENDER"
    }
   ]
  },
  "LIQUOR": {
   "word": "LIQUOR",
   "roles": [
    {
     "kind": "noun",
     "of": "DRINK"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-DRINK"
    }
   ]
  },
  "REFILL": {
   "word": "REFILL",
   "roles": [
    {
     "kind": "noun",
     "of": "DRINK"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-DRINK"
    }
   ]
  },
  "MIXED": {
   "word": "MIXED",
   "roles": [
    {
     "kind": "adjective",
     "of": "DRINK"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-DRINK"
    }
   ]
  },
  "COLD": {
   "word": "COLD",
   "roles": [
    {
     "kind": "adjective",
     "of": "DRINK"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-DRINK"
    }
   ]
  },
  "DETECTIVE": {
   "word": "DETECTIVE",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-DETECTIVE"
    },
    {
     "kind": "noun",
     "of": "DETECTIVE"
    }
   ]
  },
  "ANALYSIS": {
   "word": "ANALYSIS",
   "roles": [
    {
     "kind": "noun",
     "of": "HAIR-ANALYSIS"
    },
    {
     "kind": "noun",
     "of": "MASK-ANALYSIS"
    },
    {
     "kind": "noun",
     "of": "STAIN-ANALYSIS"
    },
    {
     "kind": "noun",
     "of": "NULL-ANALYSIS"
    },
    {
     "kind": "noun",
     "of": "GLASS-ANALYSIS"
    }
   ]
  },
  "IRRELEVANT": {
   "word": "IRRELEVANT",
   "roles": [
    {
     "kind": "adjective",
     "of": "NULL-ANALYSIS"
    }
   ]
  },
  "BROKEN": {
   "word": "BROKEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLASS-ANALYSIS"
    },
    {
     "kind": "adjective",
     "of": "GLASS"
    }
   ]
  },
  "GLASS": {
   "word": "GLASS",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLASS-ANALYSIS"
    },
    {
     "kind": "noun",
     "of": "SLIDING-DOOR"
    },
    {
     "kind": "adjective",
     "of": "SLIDING-DOOR"
    },
    {
     "kind": "noun",
     "of": "GLASS"
    }
   ]
  },
  "TRENCHCOAT": {
   "word": "TRENCHCOAT",
   "roles": [
    {
     "kind": "noun",
     "of": "DETECTIVE-COAT"
    }
   ]
  },
  "DUFFY": {
   "word": "DUFFY",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-DUFFY"
    },
    {
     "kind": "noun",
     "of": "DUFFY"
    }
   ]
  },
  "SGT": {
   "word": "SGT",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-DUFFY"
    },
    {
     "kind": "adjective",
     "of": "DUFFY"
    }
   ]
  },
  "SERGEANT": {
   "word": "SERGEANT",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-DUFFY"
    },
    {
     "kind": "adjective",
     "of": "DUFFY"
    }
   ]
  },
  "RAINCOAT": {
   "word": "RAINCOAT",
   "roles": [
    {
     "kind": "noun",
     "of": "DUFFY-COAT"
    }
   ]
  },
  "TRANSPARENT": {
   "word": "TRANSPARENT",
   "roles": [
    {
     "kind": "adjective",
     "of": "DUFFY-COAT"
    }
   ]
  },
  "PUMPKIN": {
   "word": "PUMPKIN",
   "roles": [
    {
     "kind": "noun",
     "of": "PUMPKIN"
    }
   ]
  },
  "O'LANTERN": {
   "word": "O'LANTERN",
   "roles": [
    {
     "kind": "noun",
     "of": "PUMPKIN"
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
     "of": "LH-DOOR"
    },
    {
     "kind": "noun",
     "of": "MH-DOOR"
    },
    {
     "kind": "noun",
     "of": "MORNING-ROOM-DOOR"
    },
    {
     "kind": "noun",
     "of": "SITTING-ROOM-DOOR"
    },
    {
     "kind": "noun",
     "of": "WEST-CLOSET-DOOR"
    },
    {
     "kind": "noun",
     "of": "EAST-CLOSET-DOOR"
    },
    {
     "kind": "noun",
     "of": "EAST-BATH-DOOR"
    },
    {
     "kind": "noun",
     "of": "MEDIA-ROOM-DOOR"
    },
    {
     "kind": "noun",
     "of": "MEDIA-OFFICE-DOOR"
    },
    {
     "kind": "noun",
     "of": "NORTH-OFFICE-DOOR"
    },
    {
     "kind": "noun",
     "of": "SOUTH-OFFICE-DOOR"
    },
    {
     "kind": "noun",
     "of": "LIBRARY-DOOR"
    },
    {
     "kind": "noun",
     "of": "BACK-DOOR"
    },
    {
     "kind": "noun",
     "of": "NORTH-DOOR"
    },
    {
     "kind": "noun",
     "of": "WEST-DOOR"
    },
    {
     "kind": "noun",
     "of": "WEST-BATH-DOOR"
    },
    {
     "kind": "noun",
     "of": "LINEN-CLOSET-DOOR"
    },
    {
     "kind": "noun",
     "of": "GARAGE-DOOR"
    },
    {
     "kind": "noun",
     "of": "WALKWAY-DOOR"
    },
    {
     "kind": "noun",
     "of": "SUN-ROOM-DOOR"
    },
    {
     "kind": "noun",
     "of": "EAST-DOOR"
    },
    {
     "kind": "noun",
     "of": "FRENCH-DOOR"
    },
    {
     "kind": "noun",
     "of": "SLIDING-DOOR"
    },
    {
     "kind": "noun",
     "of": "BARN-DOOR"
    }
   ]
  },
  "FRONT": {
   "word": "FRONT",
   "roles": [
    {
     "kind": "adjective",
     "of": "FRONT-DOOR"
    },
    {
     "kind": "adjective",
     "of": "DOORBELL"
    }
   ]
  },
  "DOORBELL": {
   "word": "DOORBELL",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-DOORBELL"
    },
    {
     "kind": "noun",
     "of": "DOORBELL"
    }
   ]
  },
  "BELL": {
   "word": "BELL",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-DOORBELL"
    },
    {
     "kind": "noun",
     "of": "DOORBELL"
    }
   ]
  },
  "RIBBON": {
   "word": "RIBBON",
   "roles": [
    {
     "kind": "noun",
     "of": "VELVET-RIBBON"
    },
    {
     "kind": "noun",
     "of": "OFFICE-JUNK"
    }
   ]
  },
  "VELVET": {
   "word": "VELVET",
   "roles": [
    {
     "kind": "adjective",
     "of": "VELVET-RIBBON"
    }
   ]
  },
  "ENTRY": {
   "word": "ENTRY",
   "roles": [
    {
     "kind": "adjective",
     "of": "LH-DOOR"
    },
    {
     "kind": "adjective",
     "of": "MH-DOOR"
    }
   ]
  },
  "HALL": {
   "word": "HALL",
   "roles": [
    {
     "kind": "adjective",
     "of": "LH-DOOR"
    },
    {
     "kind": "adjective",
     "of": "MH-DOOR"
    },
    {
     "kind": "adjective",
     "of": "WEST-DOOR"
    },
    {
     "kind": "adjective",
     "of": "EAST-DOOR"
    },
    {
     "kind": "noun",
     "of": "HALLWAY"
    }
   ]
  },
  "SECRETARY": {
   "word": "SECRETARY",
   "roles": [
    {
     "kind": "noun",
     "of": "WRITING-DESK"
    }
   ]
  },
  "DESK": {
   "word": "DESK",
   "roles": [
    {
     "kind": "noun",
     "of": "WRITING-DESK"
    },
    {
     "kind": "noun",
     "of": "LARGE-DESK"
    },
    {
     "kind": "noun",
     "of": "SMALL-DESK"
    }
   ]
  },
  "WRITING": {
   "word": "WRITING",
   "roles": [
    {
     "kind": "adjective",
     "of": "WRITING-DESK"
    }
   ]
  },
  "WALNUT": {
   "word": "WALNUT",
   "roles": [
    {
     "kind": "adjective",
     "of": "WRITING-DESK"
    },
    {
     "kind": "adjective",
     "of": "DINING-ROOM-TABLE"
    }
   ]
  },
  "SEAT": {
   "word": "SEAT",
   "roles": [
    {
     "kind": "noun",
     "of": "WINDOW-SEAT"
    }
   ]
  },
  "WINDOW": {
   "word": "WINDOW",
   "roles": [
    {
     "kind": "adjective",
     "of": "WINDOW-SEAT"
    },
    {
     "kind": "noun",
     "of": "SLIDING-DOOR"
    },
    {
     "kind": "noun",
     "of": "WINDOW"
    }
   ]
  },
  "MORNING": {
   "word": "MORNING",
   "roles": [
    {
     "kind": "adjective",
     "of": "MORNING-ROOM-DOOR"
    }
   ]
  },
  "TABLE": {
   "word": "TABLE",
   "roles": [
    {
     "kind": "noun",
     "of": "END-TABLE"
    },
    {
     "kind": "noun",
     "of": "SIDE-TABLE"
    },
    {
     "kind": "noun",
     "of": "DINING-ROOM-TABLE"
    }
   ]
  },
  "END": {
   "word": "END",
   "roles": [
    {
     "kind": "adjective",
     "of": "END-TABLE"
    }
   ]
  },
  "SITTING": {
   "word": "SITTING",
   "roles": [
    {
     "kind": "adjective",
     "of": "SITTING-ROOM-DOOR"
    }
   ]
  },
  "CLOSET": {
   "word": "CLOSET",
   "roles": [
    {
     "kind": "adjective",
     "of": "WEST-CLOSET-DOOR"
    },
    {
     "kind": "adjective",
     "of": "EAST-CLOSET-DOOR"
    },
    {
     "kind": "adjective",
     "of": "LINEN-CLOSET-DOOR"
    }
   ]
  },
  "HAMPER": {
   "word": "HAMPER",
   "roles": [
    {
     "kind": "noun",
     "of": "HAMPER"
    }
   ]
  },
  "LARGE": {
   "word": "LARGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "HAMPER"
    },
    {
     "kind": "adjective",
     "of": "LARGE-DESK"
    },
    {
     "kind": "adjective",
     "of": "FIREPLACE"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-SOFA"
    }
   ]
  },
  "WICKER": {
   "word": "WICKER",
   "roles": [
    {
     "kind": "adjective",
     "of": "HAMPER"
    }
   ]
  },
  "GUEST": {
   "word": "GUEST",
   "roles": [
    {
     "kind": "noun",
     "of": "GUEST"
    }
   ]
  },
  "DEVIL": {
   "word": "DEVIL",
   "roles": [
    {
     "kind": "noun",
     "of": "GUEST"
    }
   ]
  },
  "PARTY": {
   "word": "PARTY",
   "roles": [
    {
     "kind": "adjective",
     "of": "GUEST"
    },
    {
     "kind": "noun",
     "of": "PARTY"
    }
   ]
  },
  "BATH": {
   "word": "BATH",
   "roles": [
    {
     "kind": "adjective",
     "of": "EAST-BATH-DOOR"
    },
    {
     "kind": "noun",
     "of": "SHOWER"
    }
   ]
  },
  "MEDIA": {
   "word": "MEDIA",
   "roles": [
    {
     "kind": "adjective",
     "of": "MEDIA-ROOM-DOOR"
    }
   ]
  },
  "ROOM": {
   "word": "ROOM",
   "roles": [
    {
     "kind": "adjective",
     "of": "MEDIA-ROOM-DOOR"
    },
    {
     "kind": "adjective",
     "of": "SUN-ROOM-DOOR"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-ROOM"
    }
   ]
  },
  "TV": {
   "word": "TV",
   "roles": [
    {
     "kind": "noun",
     "of": "TELEVISION"
    }
   ]
  },
  "TELEVISION": {
   "word": "TELEVISION",
   "roles": [
    {
     "kind": "noun",
     "of": "TELEVISION"
    }
   ]
  },
  "PROJECTION": {
   "word": "PROJECTION",
   "roles": [
    {
     "kind": "adjective",
     "of": "TELEVISION"
    }
   ]
  },
  "VCR": {
   "word": "VCR",
   "roles": [
    {
     "kind": "noun",
     "of": "VCR"
    }
   ]
  },
  "RECORD": {
   "word": "RECORD",
   "roles": [
    {
     "kind": "noun",
     "of": "VCR"
    },
    {
     "kind": "adjective",
     "of": "RECORD-PLAYER"
    }
   ]
  },
  "VIDEO": {
   "word": "VIDEO",
   "roles": [
    {
     "kind": "adjective",
     "of": "VCR"
    }
   ]
  },
  "CASSETTE": {
   "word": "CASSETTE",
   "roles": [
    {
     "kind": "adjective",
     "of": "VCR"
    }
   ]
  },
  "BOOKCASE": {
   "word": "BOOKCASE",
   "roles": [
    {
     "kind": "noun",
     "of": "BOOKCASE"
    },
    {
     "kind": "noun",
     "of": "BOOKCASES"
    }
   ]
  },
  "SHELVES": {
   "word": "SHELVES",
   "roles": [
    {
     "kind": "noun",
     "of": "BOOKCASE"
    },
    {
     "kind": "noun",
     "of": "TRASH"
    },
    {
     "kind": "noun",
     "of": "BOOKCASES"
    }
   ]
  },
  "SHELF": {
   "word": "SHELF",
   "roles": [
    {
     "kind": "noun",
     "of": "BOOKCASE"
    },
    {
     "kind": "noun",
     "of": "TRASH"
    },
    {
     "kind": "noun",
     "of": "BOOKCASES"
    }
   ]
  },
  "VIDEOTAPE": {
   "word": "VIDEOTAPE",
   "roles": [
    {
     "kind": "noun",
     "of": "VIDEOTAPE"
    }
   ]
  },
  "TAPES": {
   "word": "TAPES",
   "roles": [
    {
     "kind": "noun",
     "of": "VIDEOTAPE"
    }
   ]
  },
  "OFFICE": {
   "word": "OFFICE",
   "roles": [
    {
     "kind": "adjective",
     "of": "MEDIA-OFFICE-DOOR"
    },
    {
     "kind": "adjective",
     "of": "NORTH-OFFICE-DOOR"
    },
    {
     "kind": "adjective",
     "of": "SOUTH-OFFICE-DOOR"
    }
   ]
  },
  "CONNECTING": {
   "word": "CONNECTING",
   "roles": [
    {
     "kind": "adjective",
     "of": "MEDIA-OFFICE-DOOR"
    }
   ]
  },
  "CABINET": {
   "word": "CABINET",
   "roles": [
    {
     "kind": "noun",
     "of": "FILE-CABINET"
    },
    {
     "kind": "noun",
     "of": "CHINA-CABINET"
    }
   ]
  },
  "FILE": {
   "word": "FILE",
   "roles": [
    {
     "kind": "adjective",
     "of": "FILE-CABINET"
    },
    {
     "kind": "adjective",
     "of": "SALE-FOLDER"
    },
    {
     "kind": "adjective",
     "of": "TRUST-FOLDER"
    }
   ]
  },
  "FILES": {
   "word": "FILES",
   "roles": [
    {
     "kind": "adjective",
     "of": "FILE-CABINET"
    }
   ]
  },
  "PAPERS": {
   "word": "PAPERS",
   "roles": [
    {
     "kind": "noun",
     "of": "TRASH"
    },
    {
     "kind": "noun",
     "of": "TRUST-DOCUMENTS"
    }
   ]
  },
  "PAPER": {
   "word": "PAPER",
   "roles": [
    {
     "kind": "adjective",
     "of": "TRASH"
    },
    {
     "kind": "noun",
     "of": "INVESTOR-LIST"
    },
    {
     "kind": "adjective",
     "of": "INVESTOR-LIST"
    }
   ]
  },
  "TONER": {
   "word": "TONER",
   "roles": [
    {
     "kind": "noun",
     "of": "OFFICE-JUNK"
    }
   ]
  },
  "PRIZES": {
   "word": "PRIZES",
   "roles": [
    {
     "kind": "noun",
     "of": "OFFICE-JUNK"
    }
   ]
  },
  "PRIZE": {
   "word": "PRIZE",
   "roles": [
    {
     "kind": "noun",
     "of": "OFFICE-JUNK"
    }
   ]
  },
  "COMPUTER": {
   "word": "COMPUTER",
   "roles": [
    {
     "kind": "noun",
     "of": "COMPUTER"
    }
   ]
  },
  "PERSONAL": {
   "word": "PERSONAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "COMPUTER"
    }
   ]
  },
  "DISKS": {
   "word": "DISKS",
   "roles": [
    {
     "kind": "noun",
     "of": "DISK"
    }
   ]
  },
  "FLOPPIES": {
   "word": "FLOPPIES",
   "roles": [
    {
     "kind": "noun",
     "of": "DISK"
    }
   ]
  },
  "DISK": {
   "word": "DISK",
   "roles": [
    {
     "kind": "noun",
     "of": "DISK"
    }
   ]
  },
  "FLOPPY": {
   "word": "FLOPPY",
   "roles": [
    {
     "kind": "adjective",
     "of": "DISK"
    }
   ]
  },
  "SALE": {
   "word": "SALE",
   "roles": [
    {
     "kind": "noun",
     "of": "SALE"
    },
    {
     "kind": "adjective",
     "of": "SALE-FOLDER"
    },
    {
     "kind": "adjective",
     "of": "SALE-AGREEMENT"
    }
   ]
  },
  "FARM": {
   "word": "FARM",
   "roles": [
    {
     "kind": "adjective",
     "of": "SALE"
    },
    {
     "kind": "adjective",
     "of": "HOUSE"
    }
   ]
  },
  "FOLDER": {
   "word": "FOLDER",
   "roles": [
    {
     "kind": "noun",
     "of": "SALE-FOLDER"
    },
    {
     "kind": "noun",
     "of": "TRUST-FOLDER"
    }
   ]
  },
  "MANILA": {
   "word": "MANILA",
   "roles": [
    {
     "kind": "adjective",
     "of": "SALE-FOLDER"
    }
   ]
  },
  "PURCHASE": {
   "word": "PURCHASE",
   "roles": [
    {
     "kind": "adjective",
     "of": "SALE-FOLDER"
    },
    {
     "kind": "adjective",
     "of": "SALE-AGREEMENT"
    }
   ]
  },
  "AGREEMENT": {
   "word": "AGREEMENT",
   "roles": [
    {
     "kind": "noun",
     "of": "SALE-AGREEMENT"
    }
   ]
  },
  "TRUST": {
   "word": "TRUST",
   "roles": [
    {
     "kind": "noun",
     "of": "TRUST"
    },
    {
     "kind": "adjective",
     "of": "TRUST-FOLDER"
    },
    {
     "kind": "adjective",
     "of": "TRUST-DOCUMENTS"
    }
   ]
  },
  "FAMILY": {
   "word": "FAMILY",
   "roles": [
    {
     "kind": "adjective",
     "of": "TRUST"
    }
   ]
  },
  "DOCUMENTS": {
   "word": "DOCUMENTS",
   "roles": [
    {
     "kind": "noun",
     "of": "TRUST-DOCUMENTS"
    }
   ]
  },
  "SHEAF": {
   "word": "SHEAF",
   "roles": [
    {
     "kind": "noun",
     "of": "TRUST-DOCUMENTS"
    }
   ]
  },
  "LIST": {
   "word": "LIST",
   "roles": [
    {
     "kind": "noun",
     "of": "INVESTOR-LIST"
    }
   ]
  },
  "SHEET": {
   "word": "SHEET",
   "roles": [
    {
     "kind": "noun",
     "of": "INVESTOR-LIST"
    }
   ]
  },
  "INVESTOR": {
   "word": "INVESTOR",
   "roles": [
    {
     "kind": "adjective",
     "of": "INVESTOR-LIST"
    }
   ]
  },
  "FIREPLACE": {
   "word": "FIREPLACE",
   "roles": [
    {
     "kind": "noun",
     "of": "LR-FIREPLACE"
    },
    {
     "kind": "noun",
     "of": "FIREPLACE"
    }
   ]
  },
  "FIRE": {
   "word": "FIRE",
   "roles": [
    {
     "kind": "noun",
     "of": "LR-FIREPLACE"
    },
    {
     "kind": "noun",
     "of": "FIREPLACE"
    }
   ]
  },
  "CHIMNEY": {
   "word": "CHIMNEY",
   "roles": [
    {
     "kind": "noun",
     "of": "LR-FIREPLACE"
    },
    {
     "kind": "noun",
     "of": "FIREPLACE"
    }
   ]
  },
  "FORMAL": {
   "word": "FORMAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "LR-FIREPLACE"
    },
    {
     "kind": "adjective",
     "of": "MANTEL"
    }
   ]
  },
  "ORNATE": {
   "word": "ORNATE",
   "roles": [
    {
     "kind": "adjective",
     "of": "LR-FIREPLACE"
    },
    {
     "kind": "adjective",
     "of": "MANTEL"
    }
   ]
  },
  "MARBLE": {
   "word": "MARBLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "LR-FIREPLACE"
    }
   ]
  },
  "PORTRAIT": {
   "word": "PORTRAIT",
   "roles": [
    {
     "kind": "noun",
     "of": "PORTRAITS"
    }
   ]
  },
  "PICTURE": {
   "word": "PICTURE",
   "roles": [
    {
     "kind": "noun",
     "of": "PORTRAITS"
    }
   ]
  },
  "FACES": {
   "word": "FACES",
   "roles": [
    {
     "kind": "noun",
     "of": "PORTRAITS"
    }
   ]
  },
  "STERN": {
   "word": "STERN",
   "roles": [
    {
     "kind": "adjective",
     "of": "PORTRAITS"
    }
   ]
  },
  "MANTEL": {
   "word": "MANTEL",
   "roles": [
    {
     "kind": "noun",
     "of": "MANTEL"
    }
   ]
  },
  "RUG": {
   "word": "RUG",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-RUG"
    }
   ]
  },
  "ORIENTAL": {
   "word": "ORIENTAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-RUG"
    }
   ]
  },
  "LIBRARY": {
   "word": "LIBRARY",
   "roles": [
    {
     "kind": "adjective",
     "of": "LIBRARY-DOOR"
    }
   ]
  },
  "SIDE": {
   "word": "SIDE",
   "roles": [
    {
     "kind": "adjective",
     "of": "SIDE-TABLE"
    },
    {
     "kind": "adjective",
     "of": "SIDEBOARD"
    }
   ]
  },
  "CHAIR": {
   "word": "CHAIR",
   "roles": [
    {
     "kind": "noun",
     "of": "CHAIR"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-CHAIR"
    }
   ]
  },
  "ARMCHAIR": {
   "word": "ARMCHAIR",
   "roles": [
    {
     "kind": "noun",
     "of": "CHAIR"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-CHAIR"
    }
   ]
  },
  "HIGH": {
   "word": "HIGH",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHAIR"
    }
   ]
  },
  "OVERSTUFFED": {
   "word": "OVERSTUFFED",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHAIR"
    }
   ]
  },
  "ARM": {
   "word": "ARM",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHAIR"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-CHAIR"
    }
   ]
  },
  "VICTORIAN": {
   "word": "VICTORIAN",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHAIR"
    }
   ]
  },
  "BOOK": {
   "word": "BOOK",
   "roles": [
    {
     "kind": "noun",
     "of": "DEATHMASK-BOOK"
    }
   ]
  },
  "PAPERBACK": {
   "word": "PAPERBACK",
   "roles": [
    {
     "kind": "adjective",
     "of": "DEATHMASK-BOOK"
    }
   ]
  },
  "PLANTS": {
   "word": "PLANTS",
   "roles": [
    {
     "kind": "noun",
     "of": "PLANTS"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-PLANTS"
    }
   ]
  },
  "PLANT": {
   "word": "PLANT",
   "roles": [
    {
     "kind": "noun",
     "of": "PLANTS"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-PLANTS"
    }
   ]
  },
  "POTS": {
   "word": "POTS",
   "roles": [
    {
     "kind": "noun",
     "of": "PLANTS"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-PLANTS"
    }
   ]
  },
  "POT": {
   "word": "POT",
   "roles": [
    {
     "kind": "noun",
     "of": "PLANTS"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-PLANTS"
    }
   ]
  },
  "CHANDELIER": {
   "word": "CHANDELIER",
   "roles": [
    {
     "kind": "noun",
     "of": "CHANDELIER"
    }
   ]
  },
  "CRYSTAL": {
   "word": "CRYSTAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHANDELIER"
    },
    {
     "kind": "adjective",
     "of": "CHINA-CABINET"
    }
   ]
  },
  "BOARD": {
   "word": "BOARD",
   "roles": [
    {
     "kind": "noun",
     "of": "SIDEBOARD"
    }
   ]
  },
  "CHINA": {
   "word": "CHINA",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHINA-CABINET"
    }
   ]
  },
  "BACK": {
   "word": "BACK",
   "roles": [
    {
     "kind": "adjective",
     "of": "BACK-DOOR"
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
  "MERCEDES": {
   "word": "MERCEDES",
   "roles": [
    {
     "kind": "noun",
     "of": "MERCEDES"
    },
    {
     "kind": "adjective",
     "of": "MERCEDES"
    },
    {
     "kind": "adjective",
     "of": "MERCEDES-TRUNK"
    }
   ]
  },
  "280SL": {
   "word": "280SL",
   "roles": [
    {
     "kind": "noun",
     "of": "MERCEDES"
    }
   ]
  },
  "BMW": {
   "word": "BMW",
   "roles": [
    {
     "kind": "noun",
     "of": "BMW"
    },
    {
     "kind": "adjective",
     "of": "BMW"
    },
    {
     "kind": "adjective",
     "of": "BMW-TRUNK"
    }
   ]
  },
  "320I": {
   "word": "320I",
   "roles": [
    {
     "kind": "noun",
     "of": "BMW"
    }
   ]
  },
  "TRUNK": {
   "word": "TRUNK",
   "roles": [
    {
     "kind": "noun",
     "of": "BMW-TRUNK"
    },
    {
     "kind": "noun",
     "of": "MERCEDES-TRUNK"
    }
   ]
  },
  "BMW'S": {
   "word": "BMW'S",
   "roles": [
    {
     "kind": "adjective",
     "of": "BMW-TRUNK"
    }
   ]
  },
  "TOOLCHEST": {
   "word": "TOOLCHEST",
   "roles": [
    {
     "kind": "noun",
     "of": "TOOL-CHEST"
    }
   ]
  },
  "CHEST": {
   "word": "CHEST",
   "roles": [
    {
     "kind": "noun",
     "of": "TOOL-CHEST"
    }
   ]
  },
  "BATTERED": {
   "word": "BATTERED",
   "roles": [
    {
     "kind": "adjective",
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
    }
   ]
  },
  "CROWBAR": {
   "word": "CROWBAR",
   "roles": [
    {
     "kind": "noun",
     "of": "CROWBAR"
    }
   ]
  },
  "ALARM": {
   "word": "ALARM",
   "roles": [
    {
     "kind": "noun",
     "of": "BURGLAR-ALARM"
    }
   ]
  },
  "BURGLAR": {
   "word": "BURGLAR",
   "roles": [
    {
     "kind": "adjective",
     "of": "BURGLAR-ALARM"
    }
   ]
  },
  "BALLROOM": {
   "word": "BALLROOM",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-BALLROOM"
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
  "BAND": {
   "word": "BAND",
   "roles": [
    {
     "kind": "noun",
     "of": "LOCAL-BAND"
    }
   ]
  },
  "MUSIC": {
   "word": "MUSIC",
   "roles": [
    {
     "kind": "noun",
     "of": "MUSIC"
    }
   ]
  },
  "FIELDSTONE": {
   "word": "FIELDSTONE",
   "roles": [
    {
     "kind": "adjective",
     "of": "FIREPLACE"
    }
   ]
  },
  "DOGHOUSE": {
   "word": "DOGHOUSE",
   "roles": [
    {
     "kind": "noun",
     "of": "DOGHOUSE"
    }
   ]
  },
  "HOUSE": {
   "word": "HOUSE",
   "roles": [
    {
     "kind": "noun",
     "of": "DOGHOUSE"
    },
    {
     "kind": "noun",
     "of": "HOUSE"
    }
   ]
  },
  "DOG": {
   "word": "DOG",
   "roles": [
    {
     "kind": "adjective",
     "of": "DOGHOUSE"
    },
    {
     "kind": "noun",
     "of": "DOG"
    }
   ]
  },
  "DOBERMAN": {
   "word": "DOBERMAN",
   "roles": [
    {
     "kind": "noun",
     "of": "DOG"
    },
    {
     "kind": "adjective",
     "of": "DOG"
    }
   ]
  },
  "PINSCHER": {
   "word": "PINSCHER",
   "roles": [
    {
     "kind": "noun",
     "of": "DOG"
    }
   ]
  },
  "GUARD": {
   "word": "GUARD",
   "roles": [
    {
     "kind": "adjective",
     "of": "DOG"
    }
   ]
  },
  "HALLWAY": {
   "word": "HALLWAY",
   "roles": [
    {
     "kind": "adjective",
     "of": "NORTH-DOOR"
    },
    {
     "kind": "noun",
     "of": "HALLWAY"
    }
   ]
  },
  "LINEN": {
   "word": "LINEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "LINEN-CLOSET-DOOR"
    }
   ]
  },
  "DOORS": {
   "word": "DOORS",
   "roles": [
    {
     "kind": "noun",
     "of": "GARAGE-DOOR"
    },
    {
     "kind": "noun",
     "of": "FRENCH-DOOR"
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
  "WALKWAY": {
   "word": "WALKWAY",
   "roles": [
    {
     "kind": "adjective",
     "of": "WALKWAY-DOOR"
    }
   ]
  },
  "SUN": {
   "word": "SUN",
   "roles": [
    {
     "kind": "adjective",
     "of": "SUN-ROOM-DOOR"
    }
   ]
  },
  "FRENCH": {
   "word": "FRENCH",
   "roles": [
    {
     "kind": "adjective",
     "of": "FRENCH-DOOR"
    }
   ]
  },
  "SLIDING": {
   "word": "SLIDING",
   "roles": [
    {
     "kind": "adjective",
     "of": "SLIDING-DOOR"
    }
   ]
  },
  "BARN": {
   "word": "BARN",
   "roles": [
    {
     "kind": "adjective",
     "of": "BARN-DOOR"
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
  "HE": {
   "word": "HE",
   "roles": [
    {
     "kind": "noun",
     "of": "IT"
    }
   ]
  },
  "SHE": {
   "word": "SHE",
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
  "INTNUM": {
   "word": "INTNUM",
   "roles": [
    {
     "kind": "noun",
     "of": "INTNUM"
    }
   ]
  },
  "WEATHER": {
   "word": "WEATHER",
   "roles": [
    {
     "kind": "noun",
     "of": "WEATHER"
    }
   ]
  },
  "SKY": {
   "word": "SKY",
   "roles": [
    {
     "kind": "noun",
     "of": "WEATHER"
    }
   ]
  },
  "RAIN": {
   "word": "RAIN",
   "roles": [
    {
     "kind": "noun",
     "of": "WEATHER"
    }
   ]
  },
  "CLOUDS": {
   "word": "CLOUDS",
   "roles": [
    {
     "kind": "noun",
     "of": "WEATHER"
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
  "CUFFS": {
   "word": "CUFFS",
   "roles": [
    {
     "kind": "noun",
     "of": "HANDCUFFS"
    }
   ]
  },
  "WATER": {
   "word": "WATER",
   "roles": [
    {
     "kind": "noun",
     "of": "WATER"
    }
   ]
  },
  "TELEPHONE": {
   "word": "TELEPHONE",
   "roles": [
    {
     "kind": "noun",
     "of": "TELEPHONE"
    }
   ]
  },
  "PRINT": {
   "word": "PRINT",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-FINGERPRINTS"
    }
   ]
  },
  "PRINTS": {
   "word": "PRINTS",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-FINGERPRINTS"
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
  "TAP": {
   "word": "TAP",
   "roles": [
    {
     "kind": "noun",
     "of": "SINK"
    }
   ]
  },
  "STALL": {
   "word": "STALL",
   "roles": [
    {
     "kind": "noun",
     "of": "SHOWER"
    }
   ]
  },
  "SHOWER": {
   "word": "SHOWER",
   "roles": [
    {
     "kind": "adjective",
     "of": "SHOWER"
    }
   ]
  },
  "TOILET": {
   "word": "TOILET",
   "roles": [
    {
     "kind": "noun",
     "of": "TOILET"
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
  "CORRIDOR": {
   "word": "CORRIDOR",
   "roles": [
    {
     "kind": "noun",
     "of": "HALLWAY"
    }
   ]
  },
  "FLOOR": {
   "word": "FLOOR",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-ROOM"
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
    }
   ]
  },
  "DEATH": {
   "word": "DEATH",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-MURDER"
    }
   ]
  },
  "DEAD": {
   "word": "DEAD",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-MURDER"
    }
   ]
  },
  "THEFT": {
   "word": "THEFT",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-EMBEZZLEMENT"
    }
   ]
  },
  "EMBEZZLEMENT": {
   "word": "EMBEZZLEMENT",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-EMBEZZLEMENT"
    }
   ]
  },
  "HORSE": {
   "word": "HORSE",
   "roles": [
    {
     "kind": "noun",
     "of": "HORSE"
    }
   ]
  },
  "GRUE": {
   "word": "GRUE",
   "roles": [
    {
     "kind": "noun",
     "of": "HORSE"
    }
   ]
  },
  "HORSES": {
   "word": "HORSES",
   "roles": [
    {
     "kind": "noun",
     "of": "HORSE"
    }
   ]
  },
  "LURKING": {
   "word": "LURKING",
   "roles": [
    {
     "kind": "adjective",
     "of": "HORSE"
    }
   ]
  },
  "GOBLET": {
   "word": "GOBLET",
   "roles": [
    {
     "kind": "noun",
     "of": "GLASS"
    }
   ]
  },
  "LIQUID": {
   "word": "LIQUID",
   "roles": [
    {
     "kind": "noun",
     "of": "LIQUID"
    }
   ]
  },
  "FILM": {
   "word": "FILM",
   "roles": [
    {
     "kind": "noun",
     "of": "LIQUID"
    }
   ]
  },
  "SWEET": {
   "word": "SWEET",
   "roles": [
    {
     "kind": "adjective",
     "of": "LIQUID"
    }
   ]
  },
  "RECEIPT": {
   "word": "RECEIPT",
   "roles": [
    {
     "kind": "noun",
     "of": "RECEIPT"
    }
   ]
  },
  "SHOP": {
   "word": "SHOP",
   "roles": [
    {
     "kind": "noun",
     "of": "COSTUME-SHOP"
    }
   ]
  },
  "UNLIMITED": {
   "word": "UNLIMITED",
   "roles": [
    {
     "kind": "adjective",
     "of": "COSTUME-SHOP"
    }
   ]
  },
  "JACKSON": {
   "word": "JACKSON",
   "roles": [
    {
     "kind": "noun",
     "of": "JACKSON"
    }
   ]
  },
  "EDITOR": {
   "word": "EDITOR",
   "roles": [
    {
     "kind": "noun",
     "of": "JACKSON"
    }
   ]
  },
  "EARL": {
   "word": "EARL",
   "roles": [
    {
     "kind": "adjective",
     "of": "JACKSON"
    }
   ]
  },
  "DAVIS": {
   "word": "DAVIS",
   "roles": [
    {
     "kind": "adjective",
     "of": "JACKSON"
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
  "BUSINESS": {
   "word": "BUSINESS",
   "roles": [
    {
     "kind": "adjective",
     "of": "CARD"
    }
   ]
  },
  "CRUMPLED": {
   "word": "CRUMPLED",
   "roles": [
    {
     "kind": "adjective",
     "of": "CARD"
    }
   ]
  },
  "WASTEBASKET": {
   "word": "WASTEBASKET",
   "roles": [
    {
     "kind": "noun",
     "of": "WASTE-BASKET"
    }
   ]
  },
  "WASTE": {
   "word": "WASTE",
   "roles": [
    {
     "kind": "adjective",
     "of": "WASTE-BASKET"
    }
   ]
  },
  "DISCUSSION": {
   "word": "DISCUSSION",
   "roles": [
    {
     "kind": "noun",
     "of": "DISCUSSION"
    }
   ]
  },
  "ARGUMENT": {
   "word": "ARGUMENT",
   "roles": [
    {
     "kind": "noun",
     "of": "DISCUSSION"
    }
   ]
  },
  "HEATED": {
   "word": "HEATED",
   "roles": [
    {
     "kind": "adjective",
     "of": "DISCUSSION"
    }
   ]
  },
  "TAXI": {
   "word": "TAXI",
   "roles": [
    {
     "kind": "noun",
     "of": "TAXI"
    }
   ]
  },
  "CAB": {
   "word": "CAB",
   "roles": [
    {
     "kind": "noun",
     "of": "TAXI"
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
  "D'OEUVRES": {
   "word": "D'OEUVRES",
   "roles": [
    {
     "kind": "noun",
     "of": "FOOD"
    }
   ]
  },
  "OEUVRES": {
   "word": "OEUVRES",
   "roles": [
    {
     "kind": "noun",
     "of": "FOOD"
    }
   ]
  },
  "MUNCHIES": {
   "word": "MUNCHIES",
   "roles": [
    {
     "kind": "noun",
     "of": "FOOD"
    }
   ]
  },
  "FOOD": {
   "word": "FOOD",
   "roles": [
    {
     "kind": "noun",
     "of": "FOOD"
    }
   ]
  },
  "HORS": {
   "word": "HORS",
   "roles": [
    {
     "kind": "adjective",
     "of": "FOOD"
    }
   ]
  },
  "SHRIMP": {
   "word": "SHRIMP",
   "roles": [
    {
     "kind": "adjective",
     "of": "FOOD"
    }
   ]
  },
  "SANDWICHES": {
   "word": "SANDWICHES",
   "roles": [
    {
     "kind": "adjective",
     "of": "FOOD"
    }
   ]
  },
  "LAWN": {
   "word": "LAWN",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-CHAIR"
    }
   ]
  },
  "COUCH": {
   "word": "COUCH",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-SOFA"
    }
   ]
  },
  "SOFA": {
   "word": "SOFA",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-SOFA"
    }
   ]
  },
  "CURTAINS": {
   "word": "CURTAINS",
   "roles": [
    {
     "kind": "noun",
     "of": "CURTAINS"
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
  "KEYS": {
   "word": "KEYS",
   "roles": [
    {
     "kind": "noun",
     "of": "KEY"
    }
   ]
  },
  "STAIR": {
   "word": "STAIR",
   "roles": [
    {
     "kind": "noun",
     "of": "STAIR"
    }
   ]
  },
  "STAIRS": {
   "word": "STAIRS",
   "roles": [
    {
     "kind": "noun",
     "of": "STAIR"
    }
   ]
  }
 },
 "files": [
  "clock.zil",
  "debug.zil",
  "events.zil",
  "goal.zil",
  "m3.zil",
  "macros.zil",
  "main.zil",
  "p.zil",
  "parser.zil",
  "people.zil",
  "places.zil",
  "rchk.zil",
  "suspect.zil",
  "syntax.zil",
  "things.zil",
  "verbs.zil"
 ]
};
