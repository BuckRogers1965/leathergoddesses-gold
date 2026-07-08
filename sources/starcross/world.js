window.WORLD = {
 "game": "Leather Goddesses of Phobos (X1)",
 "directions": [
  "NORTH",
  "EAST",
  "WEST",
  "SOUTH",
  "UP",
  "DOWN",
  "IN",
  "OUT",
  "LAND",
  "CROSS"
 ],
 "rooms": {
  "SPACESHIP-BRIDGE": {
   "name": "SPACESHIP-BRIDGE",
   "file": "dungeon.zil",
   "line": 92,
   "endLine": 102,
   "desc": "Bridge",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "BRIDGE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "COUCH",
    "WINDOW",
    "AIRLOCK",
    "AIRLOCK-INNER",
    "ALARM",
    "MISSION-STATUS",
    "CONTROLS"
   ],
   "pseudo": [
    "OBJECT",
    "OBJECT-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "BRIDGE-EXITS",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "BRIDGE-EXITS",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "BRIDGE-EXITS",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "BRIDGE-EXITS",
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "ADVENTURER",
    "REGISTRATION",
    "RED-BUTTON",
    "DETECTOR",
    "BUTTON",
    "SEAT-BELT",
    "COMPUTER",
    "INSTRUCTIONS"
   ],
   "source": "<ROOM SPACESHIP-BRIDGE\n      (IN ROOMS)\n      (DESC \"Bridge\")\n      (WEST PER BRIDGE-EXITS) ;\"SPACESHIP-QUARTERS\"\n      (EAST PER BRIDGE-EXITS) ;\"SPACESHIP-STORES\"\n      (SOUTH PER BRIDGE-EXITS) ;\"SPACESHIP-AIRLOCK\"\n      (OUT PER BRIDGE-EXITS)  ;\"SPACESHIP-AIRLOCK\"\n      (FLAGS RLANDBIT ONBIT)\n      (ACTION BRIDGE-FCN)\n      (GLOBAL COUCH WINDOW AIRLOCK AIRLOCK-INNER ALARM MISSION-STATUS CONTROLS)\n      (PSEUDO \"OBJECT\" OBJECT-PSEUDO)>",
   "referencedBy": [
    "I-ALARM",
    "ALARM-FCN",
    "PORTHOLE-FCN",
    "I-TRIP",
    "I-VIEW",
    "TENTACLE-APPEARS",
    "FIND-ROOM",
    "AIRLOCK-FCN",
    "SHIP-FCN",
    "COUCH-FCN",
    "ON-ARTIFACT?",
    "JIGS-UP"
   ]
  },
  "SPACESHIP-QUARTERS": {
   "name": "SPACESHIP-QUARTERS",
   "file": "dungeon.zil",
   "line": 372,
   "endLine": 380,
   "desc": "Living Quarters",
   "ldesc": "This nook is your spartan living quarters,\ncontaining only a bunk and a bureau. The only exit is to starboard.",
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
    "ALARM"
   ],
   "pseudo": [
    "BUREAU",
    "BUREAU-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "SPACESHIP-BRIDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "BUNK",
    "TAPE-PLAYER"
   ],
   "source": "<ROOM SPACESHIP-QUARTERS\n      (IN ROOMS)\n      (LDESC \"This nook is your spartan living quarters,\ncontaining only a bunk and a bureau. The only exit is to starboard.\")\n      (DESC \"Living Quarters\")\n      (EAST TO SPACESHIP-BRIDGE)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL ALARM)\n      (PSEUDO \"BUREAU\" BUREAU-PSEUDO)>",
   "referencedBy": [
    "I-ALARM",
    "BRIDGE-EXITS",
    "SHIP-FCN",
    "ON-ARTIFACT?",
    "GO"
   ]
  },
  "SPACESHIP-STORES": {
   "name": "SPACESHIP-STORES",
   "file": "dungeon.zil",
   "line": 390,
   "endLine": 396,
   "desc": "Storage",
   "ldesc": "This cubicle is used for storage. The only exit is to port.",
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
    "ALARM"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "SPACESHIP-BRIDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "SPACESUIT",
    "SAFETY-LINE"
   ],
   "source": "<ROOM SPACESHIP-STORES\n      (IN ROOMS)\n      (LDESC \"This cubicle is used for storage. The only exit is to port.\")\n      (DESC \"Storage\")\n      (WEST TO SPACESHIP-BRIDGE)\n      (GLOBAL ALARM)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": [
    "I-ALARM",
    "BRIDGE-EXITS",
    "SHIP-FCN",
    "ON-ARTIFACT?",
    "JIGS-UP",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "SPACESHIP-AIRLOCK": {
   "name": "SPACESHIP-AIRLOCK",
   "file": "dungeon.zil",
   "line": 433,
   "endLine": 443,
   "desc": "Airlock",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "AIRLOCK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AIRLOCK",
    "AIRLOCK-INNER",
    "AIRLOCK-OUTER",
    "ALARM",
    "SAFETY-HOOK"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "SPACESHIP-BRIDGE",
     "kind": "conditional",
     "condition": "AIRLOCK-INNER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SPACESHIP-BRIDGE",
     "kind": "conditional",
     "condition": "AIRLOCK-INNER IS OPEN",
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
     "per": "AIRLOCK-EXIT-FCN",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "AIRLOCK-EXIT-FCN",
     "message": null,
     "dir": "OUT"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "AIRLOCK-EXIT-FCN",
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM SPACESHIP-AIRLOCK\n      (IN ROOMS)\n      (DESC \"Airlock\")\n      (NORTH TO SPACESHIP-BRIDGE IF AIRLOCK-INNER IS OPEN)\n      (IN TO SPACESHIP-BRIDGE IF AIRLOCK-INNER IS OPEN)\n      (NORTH PER AIRLOCK-EXIT-FCN)\n      (OUT PER AIRLOCK-EXIT-FCN)\n      (UP PER AIRLOCK-EXIT-FCN)\n      (FLAGS RLANDBIT ONBIT)\n      (ACTION AIRLOCK-FCN)\n      (GLOBAL AIRLOCK AIRLOCK-INNER AIRLOCK-OUTER ALARM SAFETY-HOOK)>",
   "referencedBy": [
    "I-ALARM",
    "BRIDGE-EXITS",
    "ADVENTURER-FCN",
    "I-TRIP",
    "I-VIEW",
    "TENTACLE-APPEARS",
    "AIRLOCK-DOORS-FCN",
    "DEEP-SPACE-FCN",
    "SHIP-FCN",
    "IN-AIRLOCK?",
    "ON-ARTIFACT?"
   ]
  },
  "DEEP-SPACE": {
   "name": "DEEP-SPACE",
   "file": "dungeon.zil",
   "line": 451,
   "endLine": 457,
   "desc": "Outside Ship",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "SPACEBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DEEP-SPACE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AIRLOCK-OUTER",
    "SAFETY-HOOK"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "SPACESHIP-AIRLOCK",
     "kind": "conditional",
     "condition": "AIRLOCK-OUTER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [],
   "source": "<ROOM DEEP-SPACE\t;\"where you go if you leave ship in space\"\n      (IN ROOMS)\n      (DESC \"Outside Ship\")\n      (IN TO SPACESHIP-AIRLOCK IF AIRLOCK-OUTER IS OPEN)\n      (FLAGS SPACEBIT ONBIT)\n      (ACTION DEEP-SPACE-FCN)\n      (GLOBAL AIRLOCK-OUTER SAFETY-HOOK)>",
   "referencedBy": [
    "ADVENTURER-FCN",
    "I-BURN",
    "I-TRIP",
    "TENTACLE-APPEARS",
    "AIRLOCK-EXIT-FCN",
    "AIRLOCK-FCN",
    "SHIP-FCN",
    "ON-ARTIFACT?"
   ]
  },
  "OUTER-SPACE": {
   "name": "OUTER-SPACE",
   "file": "dungeon.zil",
   "line": 459,
   "endLine": 463,
   "desc": "Floating in Space",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "SPACEBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "OUTER-SPACE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [],
   "contents": [],
   "source": "<ROOM OUTER-SPACE\t;\"where you go if you leave artifact in space\"\n      (IN ROOMS)\n      (DESC \"Floating in Space\")\n      (FLAGS SPACEBIT ONBIT)\n      (ACTION OUTER-SPACE-FCN)>",
   "referencedBy": [
    "BRODY",
    "YELLOW-DOCK-EDGE-FCN",
    "I-SUFFOCATE",
    "ON-ARTIFACT?"
   ]
  },
  "RED-DOCK": {
   "name": "RED-DOCK",
   "file": "dungeon.zil",
   "line": 524,
   "endLine": 534,
   "desc": "Red Dock",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "SPACEBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "RED-DOCK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "RED-OUTER",
    "SAFETY-HOOK"
   ],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "25"
    ]
   },
   "exits": [
    {
     "to": "SPACESHIP-AIRLOCK",
     "kind": "conditional",
     "condition": "AIRLOCK-OUTER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "SPACESHIP-AIRLOCK",
     "kind": "conditional",
     "condition": "AIRLOCK-OUTER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "RED-LOCK",
     "kind": "conditional",
     "condition": "RED-OUTER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "RED-LOCK",
     "kind": "conditional",
     "condition": "RED-OUTER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [
    "RELIEF",
    "BUMP-2",
    "BUMP"
   ],
   "source": "<ROOM RED-DOCK\n      (IN ROOMS)\n      (DESC \"Red Dock\")\n      (FLAGS RLANDBIT SPACEBIT ONBIT)\n      (DOWN TO SPACESHIP-AIRLOCK IF AIRLOCK-OUTER IS OPEN)\n      (SOUTH TO SPACESHIP-AIRLOCK IF AIRLOCK-OUTER IS OPEN)\n      (UP TO RED-LOCK IF RED-OUTER IS OPEN)\n      (IN TO RED-LOCK IF RED-OUTER IS OPEN)\n      (ACTION RED-DOCK-FCN)\n      (GLOBAL RED-OUTER SAFETY-HOOK)\n      (VALUE 25)>",
   "referencedBy": [
    "AIRLOCK-EXIT-FCN",
    "SHIP-FCN",
    "RELIEF-FCN",
    "INTNUM-FCN",
    "RED-DOORS-FCN",
    "ON-ARTIFACT?"
   ]
  },
  "RED-LOCK": {
   "name": "RED-LOCK",
   "file": "dungeon.zil",
   "line": 536,
   "endLine": 545,
   "desc": "Red Airlock",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "SPACEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "RED-LOCK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "RED-OUTER",
    "RED-INNER"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RED-DOCK",
     "kind": "conditional",
     "condition": "RED-OUTER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "RED-DOCK",
     "kind": "conditional",
     "condition": "RED-OUTER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "RED-THREE",
     "kind": "conditional",
     "condition": "RED-INNER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "RED-THREE",
     "kind": "conditional",
     "condition": "RED-INNER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [],
   "source": "<ROOM RED-LOCK\n      (IN ROOMS)\n      (DESC \"Red Airlock\")\n      (FLAGS RLANDBIT ONBIT SPACEBIT)\n      (OUT TO RED-DOCK IF RED-OUTER IS OPEN)\n      (DOWN TO RED-DOCK IF RED-OUTER IS OPEN)\n      (UP TO RED-THREE IF RED-INNER IS OPEN)\n      (IN TO RED-THREE IF RED-INNER IS OPEN)\n      (ACTION RED-LOCK-FCN)\n      (GLOBAL RED-OUTER RED-INNER)>",
   "referencedBy": [
    "RED-DOORS-FCN",
    "IN-AIRLOCK?",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "BLUE-DOCK": {
   "name": "BLUE-DOCK",
   "file": "dungeon.zil",
   "line": 607,
   "endLine": 621,
   "desc": "Blue Dock",
   "ldesc": "You are viewing this area, color-coded in blue, through the first of several\ntransparent bubbles connecting the dock with a large spherical object tethered\nby silvery ropes. The blue airlock dome is behind you, and the spherical\nspaceship is aft of here. There is a hook by the airlock.",
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
    "BLUE-OUTER",
    "SAFETY-HOOK"
   ],
   "pseudo": [
    "BUBBLE",
    "BUBBLE-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "BUBBLE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "BUBBLE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "BLUE-LOCK",
     "kind": "conditional",
     "condition": "BLUE-OUTER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "BLUE-LOCK",
     "kind": "conditional",
     "condition": "BLUE-OUTER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [],
   "source": "<ROOM BLUE-DOCK\n      (IN ROOMS)\n      (LDESC\n\"You are viewing this area, color-coded in blue, through the first of several\ntransparent bubbles connecting the dock with a large spherical object tethered\nby silvery ropes. The blue airlock dome is behind you, and the spherical\nspaceship is aft of here. There is a hook by the airlock.\")\n      (DESC \"Blue Dock\")\n      (FLAGS RLANDBIT ONBIT)\n      (DOWN TO BUBBLE-ROOM)\n      (SOUTH TO BUBBLE-ROOM)\n      (UP TO BLUE-LOCK IF BLUE-OUTER IS OPEN)\n      (IN TO BLUE-LOCK IF BLUE-OUTER IS OPEN)\n      (GLOBAL BLUE-OUTER SAFETY-HOOK)\n      (PSEUDO \"BUBBLE\" BUBBLE-PSEUDO)>",
   "referencedBy": [
    "SHIP-FCN",
    "BLUE-DOORS-FCN",
    "ON-ARTIFACT?"
   ]
  },
  "BUBBLE-ROOM": {
   "name": "BUBBLE-ROOM",
   "file": "dungeon.zil",
   "line": 623,
   "endLine": 635,
   "desc": "Bubbles",
   "ldesc": "This is a series of plastic bubbles connecting the blue airlock\nwith a spherical spaceship docked aft of here. The bubbles are made of\na thick material which is nonetheless transparent.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "BUBBLE-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "BUBBLE",
    "BUBBLE-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "BLUE-DOCK",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SPHERE-SHIP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "SPHERE-SHIP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [],
   "source": "<ROOM BUBBLE-ROOM\n      (IN ROOMS)\n      (DESC \"Bubbles\")\n      (LDESC\n\"This is a series of plastic bubbles connecting the blue airlock\nwith a spherical spaceship docked aft of here. The bubbles are made of\na thick material which is nonetheless transparent.\")\n      (NORTH TO BLUE-DOCK)\n      (SOUTH TO SPHERE-SHIP)\n      (IN TO SPHERE-SHIP)\n      (ACTION BUBBLE-ROOM-FCN)\n      (FLAGS RLANDBIT ONBIT)\n      (PSEUDO \"BUBBLE\" BUBBLE-PSEUDO)>",
   "referencedBy": [
    "SHIP-FCN"
   ]
  },
  "SPHERE-SHIP": {
   "name": "SPHERE-SHIP",
   "file": "dungeon.zil",
   "line": 637,
   "endLine": 649,
   "desc": "Spherical Ship",
   "ldesc": "You are within a huge bubble, transparent from this side. The interior is\ncrisscrossed with wire webbing, so that an agile creature could move around\nusing only the wires. Objects are stuck in the wires in various out-of-reach\nplaces. The whole impression is of a rather untidy spiderweb. The connection\nto the artifact is at the forward end of the sphere.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "SPHERE-SHIP-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "BUBBLE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BUBBLE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "SPIDER"
   ],
   "source": "<ROOM SPHERE-SHIP\n      (IN ROOMS)\n      (DESC \"Spherical Ship\")\n      (LDESC\n\"You are within a huge bubble, transparent from this side. The interior is\ncrisscrossed with wire webbing, so that an agile creature could move around\nusing only the wires. Objects are stuck in the wires in various out-of-reach\nplaces. The whole impression is of a rather untidy spiderweb. The connection\nto the artifact is at the forward end of the sphere.\")\n      (NORTH TO BUBBLE-ROOM)\n      (OUT TO BUBBLE-ROOM)\n      (ACTION SPHERE-SHIP-FCN)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": [
    "I-SPIDER",
    "SHIP-FCN"
   ]
  },
  "BLUE-LOCK": {
   "name": "BLUE-LOCK",
   "file": "dungeon.zil",
   "line": 679,
   "endLine": 688,
   "desc": "Blue Airlock",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "BLUE-LOCK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BLUE-OUTER",
    "BLUE-INNER"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "BLUE-DOCK",
     "kind": "conditional",
     "condition": "BLUE-OUTER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "BLUE-DOCK",
     "kind": "conditional",
     "condition": "BLUE-OUTER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "BLUE-THREE",
     "kind": "conditional",
     "condition": "BLUE-INNER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "BLUE-THREE",
     "kind": "conditional",
     "condition": "BLUE-INNER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM BLUE-LOCK\n      (IN ROOMS)\n      (DESC \"Blue Airlock\")\n      (FLAGS RLANDBIT ONBIT)\n      (OUT TO BLUE-DOCK IF BLUE-OUTER IS OPEN)\n      (DOWN TO BLUE-DOCK IF BLUE-OUTER IS OPEN)\n      (IN TO BLUE-THREE IF BLUE-INNER IS OPEN)\n      (UP TO BLUE-THREE IF BLUE-INNER IS OPEN)\n      (ACTION BLUE-LOCK-FCN)\n      (GLOBAL BLUE-OUTER BLUE-INNER)>",
   "referencedBy": [
    "BLUE-DOORS-FCN",
    "IN-AIRLOCK?"
   ]
  },
  "YELLOW-DOCK": {
   "name": "YELLOW-DOCK",
   "file": "dungeon.zil",
   "line": 706,
   "endLine": 715,
   "desc": "Yellow Dock",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "SPACEBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "YELLOW-DOCK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "YELLOW-OUTER",
    "SAFETY-HOOK"
   ],
   "pseudo": [
    "ALIEN",
    "SCORCHED-PSEUDO",
    "BODY",
    "SCORCHED-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "YELLOW-LOCK",
     "kind": "conditional",
     "condition": "YELLOW-OUTER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "YELLOW-LOCK",
     "kind": "conditional",
     "condition": "YELLOW-OUTER IS OPEN",
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
     "per": "YELLOW-DOCK-EXITS",
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM YELLOW-DOCK\n      (IN ROOMS)\n      (DESC \"Yellow Dock\")\n      (FLAGS RLANDBIT SPACEBIT ONBIT)\n      (UP TO YELLOW-LOCK IF YELLOW-OUTER IS OPEN)\n      (IN TO YELLOW-LOCK IF YELLOW-OUTER IS OPEN)\n      (WEST PER YELLOW-DOCK-EXITS)\n      (ACTION YELLOW-DOCK-FCN)\n      (GLOBAL YELLOW-OUTER SAFETY-HOOK)\n      (PSEUDO \"ALIEN\" SCORCHED-PSEUDO \"BODY\" SCORCHED-PSEUDO)>",
   "referencedBy": [
    "ADVENTURER-FCN",
    "YELLOW-DOORS-FCN",
    "ON-ARTIFACT?"
   ]
  },
  "YELLOW-DOCK-EDGE": {
   "name": "YELLOW-DOCK-EDGE",
   "file": "dungeon.zil",
   "line": 717,
   "endLine": 725,
   "desc": "Among Debris",
   "ldesc": "You are among the blackened and twisted metal left by a huge explosion. The\ntentacle housings have been destroyed. To starboard is the airlock dome.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "SPACEBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "YELLOW-DOCK-EDGE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "YELLOW-DOCK",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "SCORCHED-ALIEN"
   ],
   "source": "<ROOM YELLOW-DOCK-EDGE\n      (IN ROOMS)\n      (DESC \"Among Debris\")\n      (LDESC\n\"You are among the blackened and twisted metal left by a huge explosion. The\ntentacle housings have been destroyed. To starboard is the airlock dome.\")\n      (FLAGS RLANDBIT SPACEBIT ONBIT)\n      (EAST TO YELLOW-DOCK)\n      (ACTION YELLOW-DOCK-EDGE-FCN)>",
   "referencedBy": [
    "ADVENTURER-FCN",
    "YELLOW-DOCK-FCN",
    "YELLOW-DOCK-EXITS"
   ]
  },
  "YELLOW-LOCK": {
   "name": "YELLOW-LOCK",
   "file": "dungeon.zil",
   "line": 727,
   "endLine": 736,
   "desc": "Yellow Airlock",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "YELLOW-LOCK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "YELLOW-OUTER",
    "YELLOW-INNER"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "YELLOW-DOCK",
     "kind": "conditional",
     "condition": "YELLOW-OUTER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "YELLOW-THREE",
     "kind": "conditional",
     "condition": "YELLOW-INNER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "YELLOW-THREE",
     "kind": "conditional",
     "condition": "YELLOW-INNER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "YELLOW-DOCK",
     "kind": "conditional",
     "condition": "YELLOW-OUTER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "ROD-RACK"
   ],
   "source": "<ROOM YELLOW-LOCK\n      (IN ROOMS)\n      (DESC \"Yellow Airlock\")\n      (FLAGS RLANDBIT)\n      (OUT TO YELLOW-DOCK IF YELLOW-OUTER IS OPEN)\n      (IN TO YELLOW-THREE IF YELLOW-INNER IS OPEN)\n      (UP TO YELLOW-THREE IF YELLOW-INNER IS OPEN)\n      (DOWN TO YELLOW-DOCK IF YELLOW-OUTER IS OPEN)\n      (ACTION YELLOW-LOCK-FCN)\n      (GLOBAL YELLOW-OUTER YELLOW-INNER)>",
   "referencedBy": [
    "YELLOW-DOORS-FCN",
    "IN-AIRLOCK?"
   ]
  },
  "GREEN-DOCK": {
   "name": "GREEN-DOCK",
   "file": "dungeon.zil",
   "line": 774,
   "endLine": 785,
   "desc": "Green Dock",
   "ldesc": "A plastic umbilical leads away to port from the green airlock. There is\na hook next to the airlock.",
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
    "GREEN-OUTER",
    "SAFETY-HOOK"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "UMBILICAL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "UMBILICAL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "GREEN-LOCK",
     "kind": "conditional",
     "condition": "GREEN-OUTER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "GREEN-LOCK",
     "kind": "conditional",
     "condition": "GREEN-OUTER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [],
   "source": "<ROOM GREEN-DOCK\n      (IN ROOMS)\n      (LDESC\n\"A plastic umbilical leads away to port from the green airlock. There is\na hook next to the airlock.\")\n      (DESC \"Green Dock\")\n      (FLAGS RLANDBIT ONBIT)\n      (WEST TO UMBILICAL)\n      (DOWN TO UMBILICAL)\n      (UP TO GREEN-LOCK IF GREEN-OUTER IS OPEN)\n      (IN TO GREEN-LOCK IF GREEN-OUTER IS OPEN)\n      (GLOBAL GREEN-OUTER SAFETY-HOOK)>",
   "referencedBy": [
    "GREEN-DOORS-FCN",
    "ON-ARTIFACT?"
   ]
  },
  "GREEN-LOCK": {
   "name": "GREEN-LOCK",
   "file": "dungeon.zil",
   "line": 787,
   "endLine": 796,
   "desc": "Green Airlock",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "GREEN-LOCK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GREEN-OUTER",
    "GREEN-INNER"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "GREEN-DOCK",
     "kind": "conditional",
     "condition": "GREEN-OUTER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "GREEN-DOCK",
     "kind": "conditional",
     "condition": "GREEN-OUTER IS OPEN",
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
     "per": "GREEN-LOCK-EXIT",
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM GREEN-LOCK\n      (IN ROOMS)\n      (DESC \"Green Airlock\")\n      (FLAGS RLANDBIT ONBIT)\n      (OUT TO GREEN-DOCK IF GREEN-OUTER IS OPEN)\n      (DOWN TO GREEN-DOCK IF GREEN-OUTER IS OPEN)\n      (UP PER GREEN-LOCK-EXIT)\n      ;(IN PER GREEN-LOCK-EXIT) ;\"FIX THIS IF COMPILER EVER RECOMPILED...\"\n      (ACTION GREEN-LOCK-FCN)\n      (GLOBAL GREEN-OUTER GREEN-INNER)>",
   "referencedBy": [
    "GREEN-DOORS-FCN",
    "IN-AIRLOCK?"
   ]
  },
  "RED-ONE": {
   "name": "RED-ONE",
   "file": "dungeon.zil",
   "line": 818,
   "endLine": 829,
   "desc": "Red Hall",
   "ldesc": "The red hall ends here. A smaller corridor curves away on both sides.\nThe light is dim and the plants are stunted.",
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
    "PLANTERS"
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
     "message": "The hall ends here.",
     "dir": "NORTH"
    },
    {
     "to": "RED-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "GREEN-ONE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BLUE-ONE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM RED-ONE\n      (IN ROOMS)\n      (LDESC\n\"The red hall ends here. A smaller corridor curves away on both sides.\nThe light is dim and the plants are stunted.\")\n      (DESC \"Red Hall\")\n      (NORTH \"The hall ends here.\")\n      (SOUTH TO RED-TWO)\n      (EAST TO GREEN-ONE)\n      (WEST TO BLUE-ONE)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL PLANTERS)>",
   "referencedBy": []
  },
  "RED-TWO": {
   "name": "RED-TWO",
   "file": "dungeon.zil",
   "line": 831,
   "endLine": 842,
   "desc": "Red Hall",
   "ldesc": "This is a long, dim corridor that intersects what looks like a ring corridor.\nThe overheads are not very bright here, and the plant growth is feeble.",
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
    "PLANTERS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RED-ONE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "RED-THREE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "GREEN-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BLUE-RED-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM RED-TWO\n      (IN ROOMS)\n      (LDESC\n\"This is a long, dim corridor that intersects what looks like a ring corridor.\nThe overheads are not very bright here, and the plant growth is feeble.\")\n      (DESC \"Red Hall\")\n      (NORTH TO RED-ONE)\n      (SOUTH TO RED-THREE)\n      (EAST TO GREEN-TWO)\n      (WEST TO BLUE-RED-TWO)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL PLANTERS)>",
   "referencedBy": []
  },
  "RED-THREE": {
   "name": "RED-THREE",
   "file": "dungeon.zil",
   "line": 844,
   "endLine": 858,
   "desc": "Red Hall",
   "ldesc": "This is a wide room with corridors leading in four directions and a ladder\ndown to the airlock. The lighting is poor, as though the lights were worn out.\nHalfway up the walls are planters full of wilted plants.",
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
    "RED-INNER",
    "PLANTERS",
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RED-LOCK",
     "kind": "conditional",
     "condition": "RED-INNER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "RED-LOCK",
     "kind": "conditional",
     "condition": "RED-INNER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "RED-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "RED-FOUR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "VILLAGE-NW-EDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BLUE-THREE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM RED-THREE\n      (IN ROOMS)\n      (LDESC\n\"This is a wide room with corridors leading in four directions and a ladder\ndown to the airlock. The lighting is poor, as though the lights were worn out.\nHalfway up the walls are planters full of wilted plants.\")\n      (DESC \"Red Hall\")\n      (DOWN TO RED-LOCK IF RED-INNER IS OPEN)\n      (OUT TO RED-LOCK IF RED-INNER IS OPEN)\n      (NORTH TO RED-TWO)\n      (SOUTH TO RED-FOUR)\n      (EAST TO VILLAGE-NW-EDGE)\n      (WEST TO BLUE-THREE)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL RED-INNER PLANTERS STAIRS)>",
   "referencedBy": [
    "RED-DOORS-FCN",
    "JIGS-UP",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "RED-FOUR": {
   "name": "RED-FOUR",
   "file": "dungeon.zil",
   "line": 860,
   "endLine": 871,
   "desc": "Red Hall",
   "ldesc": "This is part of a long hall with failing lights. It intersects with another\ncorridor at right angles. The plant boxes here are empty.",
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
    "PLANTERS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RED-THREE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "RED-FIVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "VILLAGE-SW-EDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BLUE-RED-FOUR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM RED-FOUR\n      (IN ROOMS)\n      (LDESC\n\"This is part of a long hall with failing lights. It intersects with another\ncorridor at right angles. The plant boxes here are empty.\")\n      (DESC \"Red Hall\")\n      (NORTH TO RED-THREE)\n      (SOUTH TO RED-FIVE)\n      (EAST TO VILLAGE-SW-EDGE)\n      (WEST TO BLUE-RED-FOUR)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL PLANTERS)>",
   "referencedBy": []
  },
  "RED-FIVE": {
   "name": "RED-FIVE",
   "file": "dungeon.zil",
   "line": 873,
   "endLine": 884,
   "desc": "Red Hall",
   "ldesc": "This is the end of the red hall where it T's with the aft-most ring corridor.\nThe lighting is poor and the plant boxes here are empty and battered.",
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
    "PLANTERS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RED-FOUR",
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
     "message": "The hall ends here.",
     "dir": "SOUTH"
    },
    {
     "to": "GREEN-FIVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BLUE-FIVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM RED-FIVE\n      (IN ROOMS)\n      (LDESC\n\"This is the end of the red hall where it T's with the aft-most ring corridor.\nThe lighting is poor and the plant boxes here are empty and battered.\")\n      (DESC \"Red Hall\")\n      (NORTH TO RED-FOUR)\n      (SOUTH \"The hall ends here.\")\n      (EAST TO GREEN-FIVE)\n      (WEST TO BLUE-FIVE)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL PLANTERS)>",
   "referencedBy": []
  },
  "BLUE-ONE": {
   "name": "BLUE-ONE",
   "file": "dungeon.zil",
   "line": 886,
   "endLine": 896,
   "desc": "Blue Hall",
   "ldesc": "The fore end of the blue hall meets a ring corridor here.",
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
    "PLANTERS"
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
     "message": "The blue hall ends here.",
     "dir": "NORTH"
    },
    {
     "to": "BLUE-ONE-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "RED-ONE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "YELLOW-ONE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM BLUE-ONE\n      (IN ROOMS)\n      (LDESC\n\"The fore end of the blue hall meets a ring corridor here.\")\n      (DESC \"Blue Hall\")\n      (NORTH \"The blue hall ends here.\")\n      (SOUTH TO BLUE-ONE-TWO)\n      (EAST TO RED-ONE)\n      (WEST TO YELLOW-ONE)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL PLANTERS)>",
   "referencedBy": []
  },
  "BLUE-ONE-TWO": {
   "name": "BLUE-ONE-TWO",
   "file": "dungeon.zil",
   "line": 898,
   "endLine": 908,
   "desc": "Blue Hall",
   "ldesc": "This is near the fore end of the blue hall, where a small exit leads to\nport. The main corridor continues fore and aft.",
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
    "PLANTERS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "BLUE-ONE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BLUE-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "OBSERVATORY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM BLUE-ONE-TWO\n      (IN ROOMS)\n      (DESC \"Blue Hall\")\n      (LDESC\n\"This is near the fore end of the blue hall, where a small exit leads to\nport. The main corridor continues fore and aft.\")\n      (NORTH TO BLUE-ONE)\n      (SOUTH TO BLUE-TWO)\n      (WEST TO OBSERVATORY)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL PLANTERS)>",
   "referencedBy": []
  },
  "OBSERVATORY": {
   "name": "OBSERVATORY",
   "file": "dungeon.zil",
   "line": 910,
   "endLine": 916,
   "desc": "Observatory",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "OBSERVATORY-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "BLUE-ONE-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BLUE-ONE-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "SLIDE-PROJECTOR",
    "LASER-BEAM",
    "MODEL"
   ],
   "source": "<ROOM OBSERVATORY\n      (IN ROOMS)\n      (DESC \"Observatory\")\n      (EAST TO BLUE-ONE-TWO)\n      (OUT TO BLUE-ONE-TWO)\n      (FLAGS RLANDBIT ONBIT)\n      (ACTION OBSERVATORY-FCN)>",
   "referencedBy": []
  },
  "BLUE-TWO": {
   "name": "BLUE-TWO",
   "file": "dungeon.zil",
   "line": 967,
   "endLine": 978,
   "desc": "Blue Hall",
   "ldesc": "The junction of a wide fore-aft corridor and a smaller ring corridor. There is\nsome dirt on the floor, freshly scattered.",
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
    "PLANTERS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "BLUE-ONE-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BLUE-THREE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "BLUE-RED-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "YELLOW-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM BLUE-TWO\n      (IN ROOMS)\n      (LDESC \n\"The junction of a wide fore-aft corridor and a smaller ring corridor. There is\nsome dirt on the floor, freshly scattered.\")\n      (DESC \"Blue Hall\")\n      (NORTH TO BLUE-ONE-TWO)\n      (SOUTH TO BLUE-THREE)\n      (EAST TO BLUE-RED-TWO)\n      (WEST TO YELLOW-TWO)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL PLANTERS)>",
   "referencedBy": []
  },
  "BLUE-RED-TWO": {
   "name": "BLUE-RED-TWO",
   "file": "dungeon.zil",
   "line": 980,
   "endLine": 989,
   "desc": "Room on Ring Two",
   "ldesc": "The ring corridor here has an exit forward to a large open area. There is\nfresh dirt scattered about, and an acrid smell.",
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
     "to": "ZOO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BLUE-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "RED-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM BLUE-RED-TWO\n      (IN ROOMS)\n      (LDESC\n\"The ring corridor here has an exit forward to a large open area. There is\nfresh dirt scattered about, and an acrid smell.\")\n      (DESC \"Room on Ring Two\")\n      (NORTH TO ZOO)\n      (WEST TO BLUE-TWO)\n      (EAST TO RED-TWO)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": []
  },
  "BLUE-THREE": {
   "name": "BLUE-THREE",
   "file": "dungeon.zil",
   "line": 991,
   "endLine": 1005,
   "desc": "Blue Hall",
   "ldesc": "A ring corridor joins the blue hall here. There is an entrance (presumably\nfor the blue docking area) below, and also a way up.",
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
    "BLUE-INNER",
    "PLANTERS",
    "LADDER"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "BLUE-LOCK",
     "kind": "conditional",
     "condition": "BLUE-INNER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "BLUE-LOCK",
     "kind": "conditional",
     "condition": "BLUE-INNER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "METAL-BAND-EXIT",
     "message": null,
     "dir": "UP"
    },
    {
     "to": "BLUE-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BLUE-34",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "RED-THREE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "YELLOW-THREE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM BLUE-THREE\n      (IN ROOMS)\n      (DESC \"Blue Hall\")\n      (LDESC\n\"A ring corridor joins the blue hall here. There is an entrance (presumably\nfor the blue docking area) below, and also a way up.\")\n      (DOWN TO BLUE-LOCK IF BLUE-INNER IS OPEN)\n      (OUT TO BLUE-LOCK IF BLUE-INNER IS OPEN)\n      (UP PER METAL-BAND-EXIT)\n      (NORTH TO BLUE-TWO)\n      (SOUTH TO BLUE-34)\n      (EAST TO RED-THREE)\n      (WEST TO YELLOW-THREE)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL BLUE-INNER PLANTERS LADDER)>",
   "referencedBy": [
    "BLUE-DOORS-FCN"
   ]
  },
  "BLUE-FOUR": {
   "name": "BLUE-FOUR",
   "file": "dungeon.zil",
   "line": 1007,
   "endLine": 1018,
   "desc": "Blue Hall",
   "ldesc": "Another junction, the ring corridor curving away to port and starboard.\nThe hall is damaged and bare rock protrudes in spots.",
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
    "PLANTERS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "BLUE-34",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BLUE-FIVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "BLUE-RED-FOUR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "YELLOW-FOUR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM BLUE-FOUR\n      (IN ROOMS)\n      (LDESC\n\"Another junction, the ring corridor curving away to port and starboard.\nThe hall is damaged and bare rock protrudes in spots.\")\n      (DESC \"Blue Hall\")\n      (NORTH TO BLUE-34)\n      (SOUTH TO BLUE-FIVE)\n      (EAST TO BLUE-RED-FOUR)\n      (WEST TO YELLOW-FOUR)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL PLANTERS)>",
   "referencedBy": []
  },
  "BLUE-FIVE": {
   "name": "BLUE-FIVE",
   "file": "dungeon.zil",
   "line": 1020,
   "endLine": 1031,
   "desc": "Blue Hall",
   "ldesc": "The blue corridor goes no further aft, but a ring corridor leads away\nto port and starboard.",
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
    "PLANTERS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "BLUE-FOUR",
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
     "message": "The hall ends here.",
     "dir": "SOUTH"
    },
    {
     "to": "RED-FIVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "YELLOW-FIVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM BLUE-FIVE\n      (IN ROOMS)\n      (LDESC\n\"The blue corridor goes no further aft, but a ring corridor leads away\nto port and starboard.\")\n      (DESC \"Blue Hall\")\n      (NORTH TO BLUE-FOUR)\n      (SOUTH \"The hall ends here.\")\n      (EAST TO RED-FIVE)\n      (WEST TO YELLOW-FIVE)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL PLANTERS)>",
   "referencedBy": []
  },
  "YELLOW-ONE": {
   "name": "YELLOW-ONE",
   "file": "dungeon.zil",
   "line": 1033,
   "endLine": 1044,
   "desc": "Yellow Hall",
   "ldesc": "This is the fore end of the yellow hall. The planters hold dry, dead\nplants. The usual ring corridor joins the main hall.",
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
    "PLANTERS"
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
     "message": "The hall ends here.",
     "dir": "NORTH"
    },
    {
     "to": "YELLOW-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "BLUE-ONE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "GREEN-YELLOW-ONE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM YELLOW-ONE\n      (IN ROOMS)\n      (LDESC\n\"This is the fore end of the yellow hall. The planters hold dry, dead\nplants. The usual ring corridor joins the main hall.\")\n      (DESC \"Yellow Hall\")\n      (NORTH \"The hall ends here.\")\n      (SOUTH TO YELLOW-TWO)\n      (EAST TO BLUE-ONE)\n      (WEST TO GREEN-YELLOW-ONE)\n      (FLAGS RLANDBIT)\n      (GLOBAL PLANTERS)>",
   "referencedBy": []
  },
  "YELLOW-TWO": {
   "name": "YELLOW-TWO",
   "file": "dungeon.zil",
   "line": 1046,
   "endLine": 1057,
   "desc": "Yellow Hall",
   "ldesc": "A junction between the yellow hall and a brightly-lit ring corridor. The\nplanters have been removed.",
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
    "PLANTERS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "YELLOW-ONE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "YELLOW-THREE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "BLUE-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "GREEN-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM YELLOW-TWO\n      (IN ROOMS)\n      (LDESC\n\"A junction between the yellow hall and a brightly-lit ring corridor. The\nplanters have been removed.\")\n      (DESC \"Yellow Hall\")\n      (NORTH TO YELLOW-ONE)\n      (SOUTH TO YELLOW-THREE)\n      (EAST TO BLUE-TWO)\n      (WEST TO GREEN-TWO)\n      (FLAGS RLANDBIT)\n      (GLOBAL PLANTERS)>",
   "referencedBy": []
  },
  "YELLOW-THREE": {
   "name": "YELLOW-THREE",
   "file": "dungeon.zil",
   "line": 1059,
   "endLine": 1072,
   "desc": "Yellow Hall",
   "ldesc": "This is the intersection between the yellow hall and a large ring corridor.\nThe airlock for the yellow dock is down from here. The plant boxes are empty.",
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
    "YELLOW-INNER",
    "PLANTERS",
    "LADDER"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "YELLOW-LOCK",
     "kind": "conditional",
     "condition": "YELLOW-INNER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "YELLOW-LOCK",
     "kind": "conditional",
     "condition": "YELLOW-INNER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "YELLOW-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "YELLOW-FOUR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "BLUE-THREE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "VILLAGE-NE-EDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM YELLOW-THREE\n      (IN ROOMS)\n      (LDESC\n\"This is the intersection between the yellow hall and a large ring corridor.\nThe airlock for the yellow dock is down from here. The plant boxes are empty.\")\n      (DESC \"Yellow Hall\")\n      (DOWN TO YELLOW-LOCK IF YELLOW-INNER IS OPEN)\n      (OUT TO YELLOW-LOCK IF YELLOW-INNER IS OPEN)\n      (NORTH TO YELLOW-TWO)\n      (SOUTH TO YELLOW-FOUR)\n      (EAST TO BLUE-THREE)\n      (WEST TO VILLAGE-NE-EDGE)\n      (FLAGS RLANDBIT)\n      (GLOBAL YELLOW-INNER PLANTERS LADDER)>",
   "referencedBy": [
    "YELLOW-DOORS-FCN"
   ]
  },
  "YELLOW-FOUR": {
   "name": "YELLOW-FOUR",
   "file": "dungeon.zil",
   "line": 1074,
   "endLine": 1085,
   "desc": "Yellow Hall",
   "ldesc": "This is a wide hall whose maintenance has been neglected. The planters are\nuntended. A ring corridor leads port and starboard.",
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
    "PLANTERS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "YELLOW-THREE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "YELLOW-FOUR-FIVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "BLUE-FOUR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "VILLAGE-SE-EDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM YELLOW-FOUR\n      (IN ROOMS)\n      (LDESC\n\"This is a wide hall whose maintenance has been neglected. The planters are\nuntended. A ring corridor leads port and starboard.\")\n      (DESC \"Yellow Hall\")\n      (NORTH TO YELLOW-THREE)\n      (SOUTH TO YELLOW-FOUR-FIVE)\n      (EAST TO BLUE-FOUR)\n      (WEST TO VILLAGE-SE-EDGE)\n      (FLAGS RLANDBIT)\n      (GLOBAL PLANTERS)>",
   "referencedBy": []
  },
  "YELLOW-FOUR-FIVE": {
   "name": "YELLOW-FOUR-FIVE",
   "file": "dungeon.zil",
   "line": 1087,
   "endLine": 1097,
   "desc": "Yellow Hall",
   "ldesc": "The yellow corridor continues fore and aft, but a well-lit passage leads\nstarboard.",
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
    "PLANTERS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "YELLOW-FOUR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "YELLOW-FIVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "FF-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM YELLOW-FOUR-FIVE\n      (IN ROOMS)\n      (LDESC\n\"The yellow corridor continues fore and aft, but a well-lit passage leads\nstarboard.\")\n      (DESC \"Yellow Hall\")\n      (NORTH TO YELLOW-FOUR)\n      (SOUTH TO YELLOW-FIVE)\n      (EAST TO FF-ROOM)\n      (FLAGS RLANDBIT)\n      (GLOBAL PLANTERS)>",
   "referencedBy": []
  },
  "YELLOW-FIVE": {
   "name": "YELLOW-FIVE",
   "file": "dungeon.zil",
   "line": 1099,
   "endLine": 1110,
   "desc": "Yellow Hall",
   "ldesc": "The yellow hall ends here and a ring corridor curves away to port and\nstarboard.",
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
    "PLANTERS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "YELLOW-FOUR-FIVE",
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
     "message": "The corridor comes to an end here.",
     "dir": "SOUTH"
    },
    {
     "to": "BLUE-FIVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "GREEN-FIVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM YELLOW-FIVE\n      (IN ROOMS)\n      (LDESC\n\"The yellow hall ends here and a ring corridor curves away to port and\nstarboard.\")\n      (DESC \"Yellow Hall\")\n      (NORTH TO YELLOW-FOUR-FIVE)\n      (SOUTH \"The corridor comes to an end here.\")\n      (EAST TO BLUE-FIVE)\n      (WEST TO GREEN-FIVE)\n      (FLAGS RLANDBIT)\n      (GLOBAL PLANTERS)>",
   "referencedBy": []
  },
  "GREEN-ONE": {
   "name": "GREEN-ONE",
   "file": "dungeon.zil",
   "line": 1112,
   "endLine": 1122,
   "desc": "Green Hall",
   "ldesc": "The green hall ends here at a ring corridor. The planters are well-tended.",
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
    "PLANTERS"
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
     "message": "The hall ends here.",
     "dir": "NORTH"
    },
    {
     "to": "GREEN-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "GREEN-YELLOW-ONE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "RED-ONE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM GREEN-ONE\n      (IN ROOMS)\n      (LDESC\n\"The green hall ends here at a ring corridor. The planters are well-tended.\")\n      (DESC \"Green Hall\")\n      (NORTH \"The hall ends here.\")\n      (SOUTH TO GREEN-TWO)\n      (EAST TO GREEN-YELLOW-ONE)\n      (WEST TO RED-ONE)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL PLANTERS)>",
   "referencedBy": []
  },
  "GREEN-TWO": {
   "name": "GREEN-TWO",
   "file": "dungeon.zil",
   "line": 1124,
   "endLine": 1134,
   "desc": "Green Hall",
   "ldesc": "The green hall joins a ring corridor here. The plants here look healthy.",
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
    "PLANTERS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "GREEN-ONE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "VILLAGE-N-EDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "YELLOW-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "RED-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM GREEN-TWO\n      (IN ROOMS)\n      (LDESC\n\"The green hall joins a ring corridor here. The plants here look healthy.\")\n      (DESC \"Green Hall\")\n      (NORTH TO GREEN-ONE)\n      (SOUTH TO VILLAGE-N-EDGE)\n      (EAST TO YELLOW-TWO)\n      (WEST TO RED-TWO)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL PLANTERS)>",
   "referencedBy": []
  },
  "VILLAGE": {
   "name": "VILLAGE",
   "file": "dungeon.zil",
   "line": 1136,
   "endLine": 1149,
   "desc": "Village Center",
   "ldesc": "This section of the hall is filled with primitive huts of various sizes.\nThey are so close they almost form a single large warren with many entrances.\nThe only way to continue down the corridor is through this warren. Many aliens\nare milling about, of all sizes and colors of fur.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "VILLAGE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-CHIEF",
    "ALIENS",
    "SPEAR",
    "HUTS"
   ],
   "pseudo": [
    "WIFE",
    "WIFE-PSEUDO",
    "CHILD",
    "CHILD-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "ENTER-WARREN",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "VILLAGE-NW-EDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM VILLAGE\n      (IN ROOMS)\n      (LDESC\n\"This section of the hall is filled with primitive huts of various sizes.\nThey are so close they almost form a single large warren with many entrances.\nThe only way to continue down the corridor is through this warren. Many aliens\nare milling about, of all sizes and colors of fur.\")\n      (DESC \"Village Center\")\n      (EAST PER ENTER-WARREN)\n      (WEST TO VILLAGE-NW-EDGE)\n      (FLAGS RLANDBIT ONBIT)\n      (ACTION VILLAGE-FCN)\n      (GLOBAL GLOBAL-CHIEF ALIENS SPEAR HUTS)\n      (PSEUDO \"WIFE\" WIFE-PSEUDO \"CHILD\" CHILD-PSEUDO)>",
   "referencedBy": [
    "VILLAGE-FCN",
    "I-CHIEF-APPEARS",
    "CHIEF-FCN",
    "MAZE-FCN",
    "I-CHIEF"
   ]
  },
  "MAZE": {
   "name": "MAZE",
   "file": "dungeon.zil",
   "line": 1155,
   "endLine": 1173,
   "desc": "In the Warren",
   "ldesc": "This is an earth and reed burrow within the warren. There are many aliens\nhere, going about their business. The younger ones stare at you and make\nfunny noises. There are passages all over the place, and a constant traffic\nin and out.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MAZE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-CHIEF",
    "ALIENS",
    "SPEAR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "MAZE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "MAZE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "MAZE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "MAZE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "MAZE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "MAZE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MAZE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MAZE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM MAZE\n      (IN ROOMS)\n      (LDESC\n\"This is an earth and reed burrow within the warren. There are many aliens\nhere, going about their business. The younger ones stare at you and make\nfunny noises. There are passages all over the place, and a constant traffic\nin and out.\")\n      (DESC \"In the Warren\")\n      (UP TO MAZE)\n      (DOWN TO MAZE)\n      (IN TO MAZE)\n      (OUT TO MAZE)\n      (SOUTH TO MAZE)\n      (WEST TO MAZE)\n      (EAST TO MAZE)\n      (NORTH TO MAZE)\n      (ACTION MAZE-FCN)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL GLOBAL-CHIEF ALIENS SPEAR)>",
   "referencedBy": [
    "MOVE-MOUSE",
    "ENTER-WARREN",
    "CHIEF-FCN",
    "MAZE-FCN",
    "I-CHIEF"
   ]
  },
  "GREEN-THREE": {
   "name": "GREEN-THREE",
   "file": "dungeon.zil",
   "line": 1175,
   "endLine": 1191,
   "desc": "Center of the Warren",
   "ldesc": "This burrow is deep within the warren and the aliens seem to avoid it.\nAn exit to port leads back into the warren. The walls are covered with\ncrude but vibrant paintings depicting a huge spider, a gigantic mouse,\nman-sized lizards, and in the center, a being in a space suit. You realize\nthat this room is the center of the green hall's junction with the ring\ncorridor. In fact, a ladder leads down to the green airlock.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "GREEN-THREE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIRS",
    "GREEN-INNER",
    "GLOBAL-CHIEF",
    "PLANTERS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "MAZE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "MAZE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "GREEN-LOCK",
     "kind": "conditional",
     "condition": "GREEN-INNER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "GREEN-LOCK",
     "kind": "conditional",
     "condition": "GREEN-INNER IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM GREEN-THREE\n      (IN ROOMS)\n      (LDESC\n\"This burrow is deep within the warren and the aliens seem to avoid it.\nAn exit to port leads back into the warren. The walls are covered with\ncrude but vibrant paintings depicting a huge spider, a gigantic mouse,\nman-sized lizards, and in the center, a being in a space suit. You realize\nthat this room is the center of the green hall's junction with the ring\ncorridor. In fact, a ladder leads down to the green airlock.\")\n      (DESC \"Center of the Warren\")\n      (IN TO MAZE)\n      (WEST TO MAZE)\n      (OUT TO GREEN-LOCK IF GREEN-INNER IS OPEN)\n      (DOWN TO GREEN-LOCK IF GREEN-INNER IS OPEN)\n      (ACTION GREEN-THREE-FCN)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL STAIRS GREEN-INNER GLOBAL-CHIEF PLANTERS)>",
   "referencedBy": [
    "GREEN-DOORS-FCN",
    "CHIEF-FCN",
    "I-CHIEF",
    "GREEN-LOCK-EXIT"
   ]
  },
  "GREEN-FOUR": {
   "name": "GREEN-FOUR",
   "file": "dungeon.zil",
   "line": 1195,
   "endLine": 1207,
   "desc": "Village Suburbs",
   "ldesc": "A primitive village has been built here, almost choking the passage off. The\nvillage extends forward, becoming even more closely built to form a palisade\nbuilt of mud and wood which completely blocks the corridor.",
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
    "GLOBAL-CHIEF",
    "ALIENS",
    "SPEAR",
    "PLANTERS",
    "PALISADE"
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
     "message": "The corridor is blocked by a mud and wood palisade.",
     "dir": "NORTH"
    },
    {
     "to": "VILLAGE-S-EDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "VILLAGE-SE-EDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "VILLAGE-SW-EDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM GREEN-FOUR\n      (IN ROOMS)\n      (LDESC\n\"A primitive village has been built here, almost choking the passage off. The\nvillage extends forward, becoming even more closely built to form a palisade\nbuilt of mud and wood which completely blocks the corridor.\")\n      (DESC \"Village Suburbs\")\n      (NORTH \"The corridor is blocked by a mud and wood palisade.\")\n      (SOUTH TO VILLAGE-S-EDGE)\n      (EAST TO VILLAGE-SE-EDGE)\n      (WEST TO VILLAGE-SW-EDGE)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL GLOBAL-CHIEF ALIENS SPEAR PLANTERS PALISADE)>",
   "referencedBy": []
  },
  "VILLAGE-N-EDGE": {
   "name": "VILLAGE-N-EDGE",
   "file": "dungeon.zil",
   "line": 1250,
   "endLine": 1259,
   "desc": "Outskirts of Village",
   "ldesc": "This is the edge of an inhabited area. Crude hovels are scattered here and\nthere, becoming denser as you move aft.",
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
    "GLOBAL-CHIEF",
    "ALIENS",
    "SPEAR",
    "PLANTERS",
    "PALISADE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "GREEN-TWO",
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
     "message": "The corridor is blocked by a wood and mud palisade.",
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM VILLAGE-N-EDGE\n      (IN ROOMS)\n      (LDESC\n\"This is the edge of an inhabited area. Crude hovels are scattered here and\nthere, becoming denser as you move aft.\")\n      (DESC \"Outskirts of Village\")\n      (NORTH TO GREEN-TWO)\n      (SOUTH \"The corridor is blocked by a wood and mud palisade.\")\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL GLOBAL-CHIEF ALIENS SPEAR PLANTERS PALISADE)>",
   "referencedBy": []
  },
  "VILLAGE-NW-EDGE": {
   "name": "VILLAGE-NW-EDGE",
   "file": "dungeon.zil",
   "line": 1261,
   "endLine": 1268,
   "desc": "Outskirts of Village",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "VILLAGE-NW-EDGE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-CHIEF",
    "ALIENS",
    "SPEAR",
    "PLANTERS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RED-THREE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "VILLAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM VILLAGE-NW-EDGE\n      (IN ROOMS)\n      (DESC \"Outskirts of Village\")\n      (WEST TO RED-THREE)\n      (EAST TO VILLAGE)\n      (ACTION VILLAGE-NW-EDGE-FCN)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL GLOBAL-CHIEF ALIENS SPEAR PLANTERS)>",
   "referencedBy": [
    "I-CHIEF-APPEARS"
   ]
  },
  "VILLAGE-NE-EDGE": {
   "name": "VILLAGE-NE-EDGE",
   "file": "dungeon.zil",
   "line": 1270,
   "endLine": 1280,
   "desc": "Outskirts of Village",
   "ldesc": "This is the fringe of a populated area lying to port. The corridor is filled\nwith primitive huts, and is being used for the cultivation of grain. It seems\nthat the inhabitants heard you coming and have fled.",
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
    "GLOBAL-CHIEF",
    "HUTS",
    "PLANTERS",
    "PALISADE"
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
     "message": "The corridor is blocked by a wood and mud palisade.",
     "dir": "WEST"
    },
    {
     "to": "YELLOW-THREE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM VILLAGE-NE-EDGE\n      (IN ROOMS)\n      (LDESC\n\"This is the fringe of a populated area lying to port. The corridor is filled\nwith primitive huts, and is being used for the cultivation of grain. It seems\nthat the inhabitants heard you coming and have fled.\" )\n      (DESC \"Outskirts of Village\")\n      (WEST \"The corridor is blocked by a wood and mud palisade.\")\n      (EAST TO YELLOW-THREE)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL GLOBAL-CHIEF HUTS PLANTERS PALISADE)>",
   "referencedBy": []
  },
  "VILLAGE-SW-EDGE": {
   "name": "VILLAGE-SW-EDGE",
   "file": "dungeon.zil",
   "line": 1282,
   "endLine": 1291,
   "desc": "Outskirts of Village",
   "ldesc": "This is the edge of an inhabited area lying to starboard. Some odd vegetables\nare growing here, but the inhabitants, if any, have scattered.",
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
    "GLOBAL-CHIEF",
    "PLANTERS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RED-FOUR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "GREEN-FOUR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM VILLAGE-SW-EDGE\n      (IN ROOMS)\n      (LDESC\n\"This is the edge of an inhabited area lying to starboard. Some odd vegetables\nare growing here, but the inhabitants, if any, have scattered.\")\n      (DESC \"Outskirts of Village\")\n      (WEST TO RED-FOUR)\n      (EAST TO GREEN-FOUR)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL GLOBAL-CHIEF PLANTERS)>",
   "referencedBy": []
  },
  "VILLAGE-SE-EDGE": {
   "name": "VILLAGE-SE-EDGE",
   "file": "dungeon.zil",
   "line": 1293,
   "endLine": 1303,
   "desc": "Outskirts of Village",
   "ldesc": "This is the fringe of an inhabited area lying to port. The corridor is filled\nwith cultivated plantings, although the farmers have apparently fled before\nyou.",
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
    "GLOBAL-CHIEF",
    "PLANTERS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "GREEN-FOUR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "YELLOW-FOUR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM VILLAGE-SE-EDGE\n      (IN ROOMS)\n      (LDESC\n\"This is the fringe of an inhabited area lying to port. The corridor is filled\nwith cultivated plantings, although the farmers have apparently fled before\nyou.\")\n      (DESC \"Outskirts of Village\")\n      (WEST TO GREEN-FOUR)\n      (EAST TO YELLOW-FOUR)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL GLOBAL-CHIEF PLANTERS)>",
   "referencedBy": []
  },
  "VILLAGE-S-EDGE": {
   "name": "VILLAGE-S-EDGE",
   "file": "dungeon.zil",
   "line": 1305,
   "endLine": 1314,
   "desc": "Outskirts of Village",
   "ldesc": "This is the aft edge of a settled area. The corridor has a dirt floor here,\nand several well-used paths lead forward.",
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
    "GLOBAL-CHIEF",
    "PLANTERS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "GREEN-FOUR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "GREEN-FIVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM VILLAGE-S-EDGE\n      (IN ROOMS)\n      (LDESC\n\"This is the aft edge of a settled area. The corridor has a dirt floor here,\nand several well-used paths lead forward.\")\n      (DESC \"Outskirts of Village\")\n      (NORTH TO GREEN-FOUR)\n      (SOUTH TO GREEN-FIVE)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL GLOBAL-CHIEF PLANTERS)>",
   "referencedBy": []
  },
  "GREEN-FIVE": {
   "name": "GREEN-FIVE",
   "file": "dungeon.zil",
   "line": 1316,
   "endLine": 1327,
   "desc": "Green Hall",
   "ldesc": "This is the aft end of the green hall, well-tended and brightly lit,\nwhere a typical ring corridor crosses.",
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
    "PLANTERS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "VILLAGE-S-EDGE",
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
     "message": "The corridor comes to an end here.",
     "dir": "SOUTH"
    },
    {
     "to": "YELLOW-FIVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "RED-FIVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM GREEN-FIVE\n      (IN ROOMS)\n      (LDESC \n\"This is the aft end of the green hall, well-tended and brightly lit,\nwhere a typical ring corridor crosses.\")\n      (DESC \"Green Hall\")\n      (NORTH TO VILLAGE-S-EDGE)\n      (SOUTH \"The corridor comes to an end here.\")\n      (EAST TO YELLOW-FIVE)\n      (WEST TO RED-FIVE)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL PLANTERS)>",
   "referencedBy": []
  },
  "FF-ROOM": {
   "name": "FF-ROOM",
   "file": "dungeon.zil",
   "line": 1449,
   "endLine": 1456,
   "desc": "Laboratory",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "FF-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "PROJECTOR",
    "BEAM"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "YELLOW-FOUR-FIVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "YELLOW-FOUR-FIVE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "RED-DISK",
    "BLUE-DISK",
    "FF-DIAL",
    "FORCE-FIELD-2",
    "PROJECTOR",
    "BEAM"
   ],
   "source": "<ROOM FF-ROOM\n      (IN ROOMS)\n      (DESC \"Laboratory\")\n      (FLAGS RLANDBIT ONBIT)\n      (OUT TO YELLOW-FOUR-FIVE)\n      (WEST TO YELLOW-FOUR-FIVE)\n      (ACTION FF-ROOM-FCN)\n      (GLOBAL PROJECTOR BEAM)>",
   "referencedBy": [
    "FF-DIAL-FCN",
    "JUNK-OUTSIDE"
   ]
  },
  "BLUE-RED-FOUR": {
   "name": "BLUE-RED-FOUR",
   "file": "dungeon.zil",
   "line": 1483,
   "endLine": 1492,
   "desc": "Room on Ring Four",
   "ldesc": "You are between the red and blue halls on a ring corridor. The corridor looks\ndamaged to port. The illumination dims to starboard.",
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
     "to": "RED-FOUR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BLUE-FOUR",
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
     "message": "There is no exit visible on the aft wall.",
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "MOUSE"
   ],
   "source": "<ROOM BLUE-RED-FOUR\n      (IN ROOMS)\n      (DESC \"Room on Ring Four\")\n      (LDESC\n\"You are between the red and blue halls on a ring corridor. The corridor looks\ndamaged to port. The illumination dims to starboard.\")\n      (EAST TO RED-FOUR)\n      (WEST TO BLUE-FOUR)\n      (SOUTH \"There is no exit visible on the aft wall.\")\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": []
  },
  "GARAGE": {
   "name": "GARAGE",
   "file": "dungeon.zil",
   "line": 1494,
   "endLine": 1505,
   "desc": "Garage",
   "ldesc": "This is the garage for Maintenance Mice. There are several stalls in\nwhich non-functional mice are rusting away. Other stalls are empty.\nThere is a chute into which trash could be dumped, and a large bin nearby.\nA maintenance-mouse-sized door is in the forward wall.",
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
    "CHUTE",
    "HOLE-PSEUDO",
    "DOOR",
    "DOOR-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "BLUE-RED-FOUR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BLUE-RED-FOUR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "TRASH-BIN"
   ],
   "source": "<ROOM GARAGE\n      (IN ROOMS)\n      (DESC \"Garage\")\n      (LDESC\n\"This is the garage for Maintenance Mice. There are several stalls in\nwhich non-functional mice are rusting away. Other stalls are empty.\nThere is a chute into which trash could be dumped, and a large bin nearby.\nA maintenance-mouse-sized door is in the forward wall.\")\n      (NORTH TO BLUE-RED-FOUR)\n      (OUT TO BLUE-RED-FOUR)\n      (FLAGS RLANDBIT ONBIT)\n      (PSEUDO \"CHUTE\" HOLE-PSEUDO \"DOOR\" DOOR-PSEUDO)>",
   "referencedBy": [
    "MOUSE-FCN",
    "I-MOUSE"
   ]
  },
  "THRONE-ROOM": {
   "name": "THRONE-ROOM",
   "file": "dungeon.zil",
   "line": 1531,
   "endLine": 1545,
   "desc": "Control Room",
   "ldesc": "This was the control room of the ship which originally carried the\nnow-primitive aliens to the artifact. The control panel was obviously\ndestroyed by a fire or explosion long ago, although the lights here still\nglow dimly.|\nOutside you can see the surface of the artifact. Gazing longingly at that\nview are the empty eyesockets of a skeleton, the skeleton of an alien weasel.\nIt is dressed in the shreds of a space suit and sitting in the control couch.\nScattered around the couch are fresh offerings of fruit and vegetables.",
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
    "COUCH",
    "WINDOW",
    "CONTROLS",
    "TOTEMS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "CARGO-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "SKELETON",
    "VIOLET-KEY"
   ],
   "source": "<ROOM THRONE-ROOM\n      (IN ROOMS)\n      (DESC \"Control Room\")\n      (FLAGS RLANDBIT ONBIT)\n      (LDESC\n\"This was the control room of the ship which originally carried the\nnow-primitive aliens to the artifact. The control panel was obviously\ndestroyed by a fire or explosion long ago, although the lights here still\nglow dimly.|\nOutside you can see the surface of the artifact. Gazing longingly at that\nview are the empty eyesockets of a skeleton, the skeleton of an alien weasel.\nIt is dressed in the shreds of a space suit and sitting in the control couch.\nScattered around the couch are fresh offerings of fruit and vegetables.\")\n      (SOUTH TO CARGO-ROOM)\n      (GLOBAL COUCH WINDOW CONTROLS TOTEMS)>",
   "referencedBy": [
    "CONTROLS-FCN",
    "PORTHOLE-FCN",
    "MAZE-FCN",
    "SKELETON-FCN"
   ]
  },
  "CARGO-ROOM": {
   "name": "CARGO-ROOM",
   "file": "dungeon.zil",
   "line": 1564,
   "endLine": 1576,
   "desc": "Cargo Hold",
   "ldesc": "This was once the cargo hold of a spaceship, and is filled with fetishes of\nwood and clay, totems in the shape of strange beasts, and a great deal of\nwithered fruit and grain. Openings lead fore and aft, and the umbilical\ntube is to starboard. There is dim illumination from ancient glow bulbs.",
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
    "TOTEMS",
    "VEGGIES"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "THRONE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "GUARD-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "UMBILICAL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "SMOKED-GLASS"
   ],
   "source": "<ROOM CARGO-ROOM\n      (IN ROOMS)\n      (DESC \"Cargo Hold\")\n      (FLAGS RLANDBIT ONBIT)\n      (LDESC\n\"This was once the cargo hold of a spaceship, and is filled with fetishes of\nwood and clay, totems in the shape of strange beasts, and a great deal of\nwithered fruit and grain. Openings lead fore and aft, and the umbilical\ntube is to starboard. There is dim illumination from ancient glow bulbs.\")\n      (NORTH TO THRONE-ROOM)\n      (SOUTH TO GUARD-ROOM)\n      (EAST TO UMBILICAL)\n      (GLOBAL TOTEMS VEGGIES)>",
   "referencedBy": []
  },
  "GUARD-ROOM": {
   "name": "GUARD-ROOM",
   "file": "dungeon.zil",
   "line": 1578,
   "endLine": 1587,
   "desc": "Guard Room",
   "ldesc": "Once a guard room or barracks, this room is now dusty and unused. The\nonly exit is back the way you came. A large door that may have led\nto the engine room is fused shut, as if by enormous heat.",
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
    "DOOR",
    "DOOR-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "CARGO-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM GUARD-ROOM\n      (IN ROOMS)\n      (DESC \"Guard Room\")\n      (FLAGS RLANDBIT ONBIT)\n      (LDESC\n\"Once a guard room or barracks, this room is now dusty and unused. The\nonly exit is back the way you came. A large door that may have led\nto the engine room is fused shut, as if by enormous heat.\")\n      (NORTH TO CARGO-ROOM)\n      (PSEUDO \"DOOR\" DOOR-PSEUDO)>",
   "referencedBy": []
  },
  "UMBILICAL": {
   "name": "UMBILICAL",
   "file": "dungeon.zil",
   "line": 1589,
   "endLine": 1599,
   "desc": "Umbilical",
   "ldesc": "You are in a plastic umbilical about two meters in diameter which\nconnects the green airlock to starboard with a spaceship about ten\nmeters to port. The plastic is cloudy, obscuring your view of the outside.",
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
     "to": "CARGO-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "GREEN-DOCK",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "GREEN-DOCK",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM UMBILICAL\n      (IN ROOMS)\n      (DESC \"Umbilical\")\n      (FLAGS RLANDBIT ONBIT)\n      (LDESC\n\"You are in a plastic umbilical about two meters in diameter which\nconnects the green airlock to starboard with a spaceship about ten\nmeters to port. The plastic is cloudy, obscuring your view of the outside.\")\n      (WEST TO CARGO-ROOM)\n      (UP TO GREEN-DOCK)\n      (EAST TO GREEN-DOCK)>",
   "referencedBy": [
    "SHIP-FCN"
   ]
  },
  "ZOO": {
   "name": "ZOO",
   "file": "dungeon.zil",
   "line": 1605,
   "endLine": 1618,
   "desc": "Zoo",
   "ldesc": "This is a port-to-starboard corridor lined with small cages. The bars of the\ncages are bands of force, detectable only by the slight shimmer they produce\nin the air, and are non-working on most of the cages. A few cages are still\non, and contain the dried up carcasses of strange animals.",
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
    "CAGES"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "BLUE-RED-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "GRUE-CAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "NEST-CAGE",
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
     "message": "You can't pass the (still-working) bars of this cage.",
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM ZOO\n      (IN ROOMS)\n      (LDESC\n\"This is a port-to-starboard corridor lined with small cages. The bars of the\ncages are bands of force, detectable only by the slight shimmer they produce\nin the air, and are non-working on most of the cages. A few cages are still\non, and contain the dried up carcasses of strange animals.\")\n      (DESC \"Zoo\")\n      (SOUTH TO BLUE-RED-TWO)\n      (WEST TO GRUE-CAGE)\n      (EAST TO NEST-CAGE)\n      (NORTH \"You can't pass the (still-working) bars of this cage.\")\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL CAGES)>",
   "referencedBy": []
  },
  "GRUE-CAGE": {
   "name": "GRUE-CAGE",
   "file": "dungeon.zil",
   "line": 1620,
   "endLine": 1634,
   "desc": "Broken Cage",
   "ldesc": "This cage was apparently forced by its inhabitants before the general\ndeterioration of the zoo equipment. The force projectors are ripped\nout of their mountings and smashed against the bulkhead, and the whole\ncage is scratched and dented as though many enraged creatures pounded\non it violently for many weeks. There is a somewhat chewed sign to one\nside of the cage.",
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
    "CAGES"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "ZOO",
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
     "message": "The zoo area ends here.",
     "dir": "WEST"
    },
    {
     "to": "IN-GRUE-CAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "GRUE-SIGN"
   ],
   "source": "<ROOM GRUE-CAGE\n      (IN ROOMS)\n      (LDESC\n\"This cage was apparently forced by its inhabitants before the general\ndeterioration of the zoo equipment. The force projectors are ripped\nout of their mountings and smashed against the bulkhead, and the whole\ncage is scratched and dented as though many enraged creatures pounded\non it violently for many weeks. There is a somewhat chewed sign to one\nside of the cage.\")\n      (DESC \"Broken Cage\")\n      (EAST TO ZOO)\n      (WEST \"The zoo area ends here.\")\n      (NORTH TO IN-GRUE-CAGE)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL CAGES)>",
   "referencedBy": []
  },
  "IN-GRUE-CAGE": {
   "name": "IN-GRUE-CAGE",
   "file": "dungeon.zil",
   "line": 1636,
   "endLine": 1644,
   "desc": "Inside Grue Cage",
   "ldesc": "The amount of damage done to this cage is impressive. The creatures\nimprisoned here didn't like it one bit, and whoever put them here\nobviously underestimated their nastiness.",
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
     "to": "GRUE-CAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM IN-GRUE-CAGE\n      (IN ROOMS)\n      (LDESC \n\"The amount of damage done to this cage is impressive. The creatures\nimprisoned here didn't like it one bit, and whoever put them here\nobviously underestimated their nastiness.\")\n      (DESC \"Inside Grue Cage\")\n      (SOUTH TO GRUE-CAGE)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": []
  },
  "NEST-CAGE": {
   "name": "NEST-CAGE",
   "file": "dungeon.zil",
   "line": 1669,
   "endLine": 1676,
   "desc": "Nesting Cage",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "NEST-CAGE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "SPEAR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "ZOO",
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
     "message": "The zoo area comes to an end here.",
     "dir": "EAST"
    }
   ],
   "contents": [
    "NEST",
    "RAT-ANT"
   ],
   "source": "<ROOM NEST-CAGE\n      (IN ROOMS)\n      (DESC \"Nesting Cage\")\n      (WEST TO ZOO)\n      (EAST \"The zoo area comes to an end here.\")\n      (ACTION NEST-CAGE-FCN)\n      (GLOBAL SPEAR)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": [
    "NEST-CAGE-FCN",
    "NEST-FCN",
    "I-NEST",
    "SPEAR-F"
   ]
  },
  "GREEN-YELLOW-ONE": {
   "name": "GREEN-YELLOW-ONE",
   "file": "dungeon.zil",
   "line": 1713,
   "endLine": 1722,
   "desc": "Room on Ring One",
   "ldesc": "A passage leads aft from this point on the ring corridor.",
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
     "to": "YELLOW-ONE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "GREEN-ONE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
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
     "to": "COMPUTER-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [],
   "source": "<ROOM GREEN-YELLOW-ONE\n      (IN ROOMS)\n      (LDESC\n\"A passage leads aft from this point on the ring corridor.\")\n      (DESC \"Room on Ring One\")\n      (EAST TO YELLOW-ONE)\n      (WEST TO GREEN-ONE)\n      (SOUTH TO COMPUTER-ROOM)\n      (IN TO COMPUTER-ROOM)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": []
  },
  "COMPUTER-ROOM": {
   "name": "COMPUTER-ROOM",
   "file": "dungeon.zil",
   "line": 1724,
   "endLine": 1730,
   "desc": "Computer Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "COMPUTER-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "GREEN-YELLOW-ONE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "GREEN-YELLOW-ONE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "ENV-COMPUTER",
    "ON-OFF-SWITCH",
    "PANEL",
    "ENUNCIATOR"
   ],
   "source": "<ROOM COMPUTER-ROOM\n      (IN ROOMS)\n      (DESC \"Computer Room\")\n      (OUT TO GREEN-YELLOW-ONE)\n      (NORTH TO GREEN-YELLOW-ONE)\n      (ACTION COMPUTER-ROOM-FCN)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": []
  },
  "WEAPONS-DECK": {
   "name": "WEAPONS-DECK",
   "file": "dungeon.zil",
   "line": 1805,
   "endLine": 1816,
   "desc": "Weapons Deck",
   "ldesc": "This was the armory of the artifact. A massive bulkhead has been burned\naway, giving free access to the weaponry. Unfortunately, it appears that the\nvast stock of futuristic armaments has been mostly destroyed. Gigantic\nprojectors are scorched and shattered, strange battle armor is reduced to\nsplinters, and wall racks for small arms are mostly empty.",
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
     "to": "BLUE-34",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BLUE-34",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "ZAP-GUN"
   ],
   "source": "<ROOM WEAPONS-DECK\n      (IN ROOMS)\n      (DESC \"Weapons Deck\")\n      (LDESC\n\"This was the armory of the artifact. A massive bulkhead has been burned\naway, giving free access to the weaponry. Unfortunately, it appears that the\nvast stock of futuristic armaments has been mostly destroyed. Gigantic\nprojectors are scorched and shattered, strange battle armor is reduced to\nsplinters, and wall racks for small arms are mostly empty.\")\n      (EAST TO BLUE-34)\n      (OUT TO BLUE-34)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": []
  },
  "BLUE-34": {
   "name": "BLUE-34",
   "file": "dungeon.zil",
   "line": 1818,
   "endLine": 1831,
   "desc": "Melted Spot",
   "ldesc": "At this point the corridor is twisted and the walls are half-melted.\nTitanic energies have been used here, apparently to blast through an\narmored hatch that shielded the area to port. There is little left of\nthe hatch now, and the way is open.",
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
    "PLANTERS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "WEAPONS-DECK",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "BLUE-THREE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BLUE-FOUR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "WEAPONS-DECK",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [],
   "source": "<ROOM BLUE-34\n      (IN ROOMS)\n      (DESC \"Melted Spot\")\n      (LDESC\n\"At this point the corridor is twisted and the walls are half-melted.\nTitanic energies have been used here, apparently to blast through an\narmored hatch that shielded the area to port. There is little left of\nthe hatch now, and the way is open.\")\n      (WEST TO WEAPONS-DECK)\n      (NORTH TO BLUE-THREE)\n      (SOUTH TO BLUE-FOUR)\n      (IN TO WEAPONS-DECK)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL PLANTERS)>",
   "referencedBy": []
  },
  "BASE-OF-TREE": {
   "name": "BASE-OF-TREE",
   "file": "dungeon.zil",
   "line": 1845,
   "endLine": 1860,
   "desc": "Base of Tree",
   "ldesc": "You are in a primeval forest, near the base of a giant tree. The trunk is\nthick, perhaps 40 meters in diameter, and the height is incredible. The\nforest is dense, so you can't see exactly how tall it is, but extending all\nthe way to the axis isn't out of the question. The bark is so rough that\nclimbing would be no problem.",
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
    "TREE",
    "VEGGIES"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "UP-A-TREE-EXIT",
     "message": null,
     "dir": "UP"
    },
    {
     "to": "SCRUB-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "FOREST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "FOREST",
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
     "message": "You have reached the aft end of the cylinder.",
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM BASE-OF-TREE\n      (IN ROOMS)\n      (DESC \"Base of Tree\")\n      (LDESC\n\"You are in a primeval forest, near the base of a giant tree. The trunk is\nthick, perhaps 40 meters in diameter, and the height is incredible. The\nforest is dense, so you can't see exactly how tall it is, but extending all\nthe way to the axis isn't out of the question. The bark is so rough that\nclimbing would be no problem.\")\n      (UP PER UP-A-TREE-EXIT)\n      (NORTH TO SCRUB-2)\n      (EAST TO FOREST)\n      (WEST TO FOREST)\n      (SOUTH \"You have reached the aft end of the cylinder.\")\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL TREE VEGGIES)>",
   "referencedBy": [
    "UP-A-TREE-FCN",
    "TREETOP-FCN",
    "I-NIGHT",
    "BOMBS-AWAY"
   ]
  },
  "UP-A-TREE": {
   "name": "UP-A-TREE",
   "file": "dungeon.zil",
   "line": 1862,
   "endLine": 1874,
   "desc": "Up a Tree",
   "ldesc": "You are climbing a gigantic tree, one that would make the largest\nsequoia blush with envy. Fortunately the bark is rough and climbing\nis easy. The gravity lessens as you near the axis of rotation, which\nalso helps.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "UP-A-TREE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TREE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "TREETOP-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "BASE-OF-TREE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM UP-A-TREE\n      (IN ROOMS)\n      (DESC \"Up a Tree\")\n      (LDESC\n\"You are climbing a gigantic tree, one that would make the largest\nsequoia blush with envy. Fortunately the bark is rough and climbing\nis easy. The gravity lessens as you near the axis of rotation, which\nalso helps.\")\n      (UP TO TREETOP-ROOM)\n      (DOWN TO BASE-OF-TREE)\n      (ACTION UP-A-TREE-FCN)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL TREE)>",
   "referencedBy": [
    "MOVE-MOUSE",
    "UP-A-TREE-EXIT",
    "I-NIGHT",
    "ITAKE"
   ]
  },
  "TREETOP-ROOM": {
   "name": "TREETOP-ROOM",
   "file": "dungeon.zil",
   "line": 1876,
   "endLine": 1892,
   "desc": "Top of Tree",
   "ldesc": "You are at the top of a giant tree, just below a huge crystalline bubble\nfull of machinery and controls which lies at the axis of rotation at the aft\nend of the cylinder. Out of reach above you is a hatch which leads into the\nbubble. Beside the hatch is a silver slot. Gravity has almost disappeared\nhere as you near the axis.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "TREETOP-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TREE",
    "DRIVE-BUBBLE",
    "DRIVE-BUBBLE-HATCH"
   ],
   "pseudo": [
    "SLOT",
    "OUT-OF-REACH",
    "SPOT",
    "OUT-OF-REACH"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The hatch is out of reach above you.",
     "dir": "UP"
    },
    {
     "to": "UP-A-TREE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM TREETOP-ROOM\n      (IN ROOMS)\n      (DESC \"Top of Tree\")\n      (LDESC\n\"You are at the top of a giant tree, just below a huge crystalline bubble\nfull of machinery and controls which lies at the axis of rotation at the aft\nend of the cylinder. Out of reach above you is a hatch which leads into the\nbubble. Beside the hatch is a silver slot. Gravity has almost disappeared\nhere as you near the axis.\")\n      (UP \"The hatch is out of reach above you.\")\n      (DOWN TO UP-A-TREE)\n      (FLAGS RLANDBIT ONBIT)\n      (ACTION TREETOP-FCN)\n      (GLOBAL TREE DRIVE-BUBBLE DRIVE-BUBBLE-HATCH)\n      (PSEUDO\n       \"SLOT\" OUT-OF-REACH\n       \"SPOT\" OUT-OF-REACH)>",
   "referencedBy": [
    "I-NIGHT",
    "ITAKE"
   ]
  },
  "DRIVE-BUBBLE-ENTRANCE": {
   "name": "DRIVE-BUBBLE-ENTRANCE",
   "file": "dungeon.zil",
   "line": 1905,
   "endLine": 1913,
   "desc": "Drive Bubble Entrance",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DRIVE-BUBBLE-ENTRANCE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TREE",
    "DRIVE-BUBBLE-HATCH",
    "DRIVE-BUBBLE",
    "KNOBS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DRIVE-BUBBLE-ROOM",
     "kind": "conditional",
     "condition": "DRIVE-BUBBLE-HATCH IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "TREETOP-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "ON-DRIVE-BUBBLE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [
    "SILVER-SLOT"
   ],
   "source": "<ROOM DRIVE-BUBBLE-ENTRANCE\n      (IN ROOMS)\n      (DESC \"Drive Bubble Entrance\")\n      (IN TO DRIVE-BUBBLE-ROOM IF DRIVE-BUBBLE-HATCH IS OPEN)\n      (DOWN TO TREETOP-ROOM)\n      (UP TO ON-DRIVE-BUBBLE)\n      (ACTION DRIVE-BUBBLE-ENTRANCE-FCN)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL TREE DRIVE-BUBBLE-HATCH DRIVE-BUBBLE KNOBS)>",
   "referencedBy": [
    "TREETOP-FCN",
    "I-NIGHT",
    "BOMBS-AWAY",
    "KNOBS-F",
    "ITAKE"
   ]
  },
  "ON-DRIVE-BUBBLE": {
   "name": "ON-DRIVE-BUBBLE",
   "file": "dungeon.zil",
   "line": 1915,
   "endLine": 1928,
   "desc": "On Drive Bubble",
   "ldesc": "You are floating near and clinging to a large crystalline bubble covering\nthe aft end of the axis of rotation of the artifact. There is no weight here.\nSmall knobs resembling handholds cover the bubble; you could use them to\nclimb back down. Far away at the fore end of the axis you can see another\nbubble very similar to this one.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RAIRBIT",
    "ONBIT",
    "RMUNGBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ON-DRIVE-BUBBLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DRIVE-BUBBLE",
    "CONTROL-BUBBLE",
    "KNOBS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DRIVE-BUBBLE-ENTRANCE",
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
     "message": "There is only air there.",
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM ON-DRIVE-BUBBLE\n      (IN ROOMS)\n      (LDESC\n\"You are floating near and clinging to a large crystalline bubble covering\nthe aft end of the axis of rotation of the artifact. There is no weight here.\nSmall knobs resembling handholds cover the bubble; you could use them to\nclimb back down. Far away at the fore end of the axis you can see another\nbubble very similar to this one.\")\n      (DESC \"On Drive Bubble\")\n      (DOWN TO DRIVE-BUBBLE-ENTRANCE)\n      (UP \"There is only air there.\")\n      (ACTION ON-DRIVE-BUBBLE-FCN)\n      (FLAGS RAIRBIT ONBIT RMUNGBIT)\n      (GLOBAL DRIVE-BUBBLE CONTROL-BUBBLE KNOBS)>",
   "referencedBy": [
    "I-NIGHT",
    "BOMBS-AWAY",
    "JATO"
   ]
  },
  "DRIVE-BUBBLE-ROOM": {
   "name": "DRIVE-BUBBLE-ROOM",
   "file": "dungeon.zil",
   "line": 1930,
   "endLine": 1938,
   "desc": "Drive Bubble",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RAIRBIT",
    "ONBIT",
    "RMUNGBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DRIVE-BUBBLE-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DRIVE-BUBBLE-HATCH",
    "DRIVE-BUBBLE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "AXIS-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "AXIS-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "DRIVE-BUBBLE-ENTRANCE",
     "kind": "conditional",
     "condition": "DRIVE-BUBBLE-HATCH IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "WHITE-SLOT",
    "WHITE-KEY"
   ],
   "source": "<ROOM DRIVE-BUBBLE-ROOM\n      (IN ROOMS)\n      (DESC \"Drive Bubble\")\n      (UP TO AXIS-1)\n      (NORTH TO AXIS-1)\n      (OUT TO DRIVE-BUBBLE-ENTRANCE IF DRIVE-BUBBLE-HATCH IS OPEN)\n      (ACTION DRIVE-BUBBLE-ROOM-FCN)\n      (FLAGS RAIRBIT ONBIT RMUNGBIT)\n      (GLOBAL DRIVE-BUBBLE-HATCH DRIVE-BUBBLE)>",
   "referencedBy": [
    "WHITE-KEY-FCN",
    "JATO"
   ]
  },
  "AXIS-1": {
   "name": "AXIS-1",
   "file": "dungeon.zil",
   "line": 1977,
   "endLine": 1987,
   "desc": "Floating in Air",
   "ldesc": "You are floating at the axis of rotation of the cylinder, near the\ndrive bubble. There are enormous trees \"below.\" There is no gravity here.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RAIRBIT",
    "ONBIT",
    "RMUNGBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "AXIS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DRIVE-BUBBLE",
    "CONTROL-BUBBLE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "AXIS-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "DRIVE-BUBBLE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM AXIS-1\n      (IN ROOMS)\n      (DESC \"Floating in Air\")\n      (LDESC\n\"You are floating at the axis of rotation of the cylinder, near the\ndrive bubble. There are enormous trees \\\"below.\\\" There is no gravity here.\")\n      (NORTH TO AXIS-2)\n      (SOUTH TO DRIVE-BUBBLE-ROOM)\n      (ACTION AXIS-FCN)\n      (FLAGS RAIRBIT ONBIT RMUNGBIT)\n      (GLOBAL DRIVE-BUBBLE CONTROL-BUBBLE)>",
   "referencedBy": [
    "ON-DRIVE-BUBBLE-FCN",
    "I-NIGHT",
    "BOMBS-AWAY",
    "JATO"
   ]
  },
  "AXIS-2": {
   "name": "AXIS-2",
   "file": "dungeon.zil",
   "line": 1989,
   "endLine": 1999,
   "desc": "Floating in Air",
   "ldesc": "You are floating at the axis of rotation of the cylinder.\nThere is grassland \"below.\" There is no gravity here.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RAIRBIT",
    "ONBIT",
    "RMUNGBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "AXIS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DRIVE-BUBBLE",
    "CONTROL-BUBBLE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "AXIS-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "AXIS-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM AXIS-2\n      (IN ROOMS)\n      (DESC \"Floating in Air\")\n      (LDESC\n\"You are floating at the axis of rotation of the cylinder.\nThere is grassland \\\"below.\\\" There is no gravity here.\")\n      (NORTH TO AXIS-3)\n      (SOUTH TO AXIS-1)\n      (ACTION AXIS-FCN)\n      (FLAGS RAIRBIT ONBIT RMUNGBIT)\n      (GLOBAL DRIVE-BUBBLE CONTROL-BUBBLE)>",
   "referencedBy": [
    "I-NIGHT",
    "BOMBS-AWAY",
    "JATO"
   ]
  },
  "AXIS-3": {
   "name": "AXIS-3",
   "file": "dungeon.zil",
   "line": 2001,
   "endLine": 2011,
   "desc": "Floating in Air",
   "ldesc": "You are floating at the axis of rotation of the cylinder.\nThere is a metal band \"below.\" There is no gravity here.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RAIRBIT",
    "ONBIT",
    "RMUNGBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "AXIS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DRIVE-BUBBLE",
    "CONTROL-BUBBLE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "ON-CONTROL-BUBBLE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "AXIS-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM AXIS-3\n      (IN ROOMS)\n      (DESC \"Floating in Air\")\n      (LDESC\n\"You are floating at the axis of rotation of the cylinder.\nThere is a metal band \\\"below.\\\" There is no gravity here.\")\n      (NORTH TO ON-CONTROL-BUBBLE)\n      (SOUTH TO AXIS-2)\n      (ACTION AXIS-FCN)\n      (FLAGS RAIRBIT ONBIT RMUNGBIT)\n      (GLOBAL DRIVE-BUBBLE CONTROL-BUBBLE)>",
   "referencedBy": [
    "I-NIGHT",
    "BOMBS-AWAY",
    "ON-CONTROL-BUBBLE-FCN",
    "JATO"
   ]
  },
  "FOREST": {
   "name": "FOREST",
   "file": "dungeon.zil",
   "line": 2013,
   "endLine": 2025,
   "desc": "Dense Forest",
   "ldesc": "This is the forest primeval, conifers and cycads in rank profusion.\nHere and there huge trees thrust upward through the forest canopy.\nOne particularly large tree is to port of here.",
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
    "VEGGIES",
    "TREE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "SCRUB",
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
     "message": "You have reached the aft end of the cylinder.",
     "dir": "SOUTH"
    },
    {
     "to": "BASE-OF-TREE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "BASE-OF-TREE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM FOREST\n      (IN ROOMS)\n      (DESC \"Dense Forest\")\n      (LDESC\n\"This is the forest primeval, conifers and cycads in rank profusion.\nHere and there huge trees thrust upward through the forest canopy.\nOne particularly large tree is to port of here.\")\n      (NORTH TO SCRUB)\n      (SOUTH \"You have reached the aft end of the cylinder.\")\n      (WEST TO BASE-OF-TREE)\n      (EAST TO BASE-OF-TREE)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL VEGGIES TREE)>",
   "referencedBy": [
    "I-NIGHT",
    "BOMBS-AWAY"
   ]
  },
  "SCRUB": {
   "name": "SCRUB",
   "file": "dungeon.zil",
   "line": 2027,
   "endLine": 2041,
   "desc": "Thin Forest",
   "ldesc": "This is an area of small trees and shrubs blending into a more imposing\nforest aft and into grassland forward. Strangely, there is a metal\nhatch cover nearby among the shrubbery.",
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
    "METAL-DOOR",
    "TREE",
    "VEGGIES"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "GRASSLAND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "FOREST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "SCRUB-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SCRUB-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "REPAIR-ROOM",
     "kind": "conditional",
     "condition": "METAL-DOOR IS OPEN",
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
     "message": "There are no large trees here.",
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM SCRUB\n      (IN ROOMS)\n      (DESC \"Thin Forest\")\n      (LDESC\n\"This is an area of small trees and shrubs blending into a more imposing\nforest aft and into grassland forward. Strangely, there is a metal\nhatch cover nearby among the shrubbery.\")\n      (NORTH TO GRASSLAND)\n      (SOUTH TO FOREST)\n      (WEST TO SCRUB-2)\n      (EAST TO SCRUB-2)\n      (DOWN TO REPAIR-ROOM IF METAL-DOOR IS OPEN)\n      (UP \"There are no large trees here.\")\n      (GLOBAL METAL-DOOR TREE VEGGIES)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": [
    "TREE-FCN",
    "SEES-HUNTERS?",
    "BOMBS-AWAY"
   ]
  },
  "SCRUB-2": {
   "name": "SCRUB-2",
   "file": "dungeon.zil",
   "line": 2043,
   "endLine": 2055,
   "desc": "Thin Forest",
   "ldesc": "This is an area of small trees and shrubs blending into a more imposing\nforest aft and into grassland forward.",
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
    "TREE",
    "VEGGIES"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "GRASSLAND-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BASE-OF-TREE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "SCRUB",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SCRUB",
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
     "message": "There are no large trees here.",
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM SCRUB-2\n      (IN ROOMS)\n      (DESC \"Thin Forest\")\n      (LDESC\n\"This is an area of small trees and shrubs blending into a more imposing\nforest aft and into grassland forward.\")\n      (NORTH TO GRASSLAND-2)\n      (SOUTH TO BASE-OF-TREE)\n      (WEST TO SCRUB)\n      (EAST TO SCRUB)\n      (UP \"There are no large trees here.\")\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL TREE VEGGIES)>",
   "referencedBy": [
    "TREE-FCN",
    "SEES-HUNTERS?",
    "BOMBS-AWAY"
   ]
  },
  "GRASSLAND": {
   "name": "GRASSLAND",
   "file": "dungeon.zil",
   "line": 2057,
   "endLine": 2082,
   "desc": "Grassland",
   "ldesc": "You are standing on the floor of an enormous cylinder, kilometers in\nlength and hundreds of meters across. Above you and all around is revealed\na micro-geography of trees, grassland, and manufactured structures. The\ncylinder is divided into various bands, of which this is approximately the\ncentral one. Things cling to the floor (or ceiling) above you, as each band\ncontinues all the way around the cylinder.\n|\nYou are in the midst of a grassy plain, a sort of savannah with warm\nbreezes and tall grasses. An exit leads down to the outer deck. Looking\nforward, a metal floor circles the cylinder, and extends all the way to\nthe forward end of the cylinder, which is a sheer metal wall with a\ncrystal bubble at the axis. Looking aft, the grassland becomes more and\nmore densely forested. The aft end of the cylinder is totally obscured\nby impossibly tall trees. A herd of creatures not unlike unicorns crops\ngrass in the distance.",
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
    "ALIENS",
    "UNICORNS",
    "DISTANT-BUBBLE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "METAL-BAND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SCRUB",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "GRASSLAND-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "GRASSLAND-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "BLUE-THREE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM GRASSLAND\n      (IN ROOMS)\n      (DESC \"Grassland\")\n      (LDESC\n\"You are standing on the floor of an enormous cylinder, kilometers in\nlength and hundreds of meters across. Above you and all around is revealed\na micro-geography of trees, grassland, and manufactured structures. The\ncylinder is divided into various bands, of which this is approximately the\ncentral one. Things cling to the floor (or ceiling) above you, as each band\ncontinues all the way around the cylinder.\n|\nYou are in the midst of a grassy plain, a sort of savannah with warm\nbreezes and tall grasses. An exit leads down to the outer deck. Looking\nforward, a metal floor circles the cylinder, and extends all the way to\nthe forward end of the cylinder, which is a sheer metal wall with a\ncrystal bubble at the axis. Looking aft, the grassland becomes more and\nmore densely forested. The aft end of the cylinder is totally obscured\nby impossibly tall trees. A herd of creatures not unlike unicorns crops\ngrass in the distance.\")\n      (NORTH TO METAL-BAND)\n      (SOUTH TO SCRUB)\n      (EAST TO GRASSLAND-2)\n      (WEST TO GRASSLAND-2)\n      (DOWN TO BLUE-THREE)\n      (GLOBAL ALIENS UNICORNS DISTANT-BUBBLE)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": [
    "METAL-BAND-EXIT",
    "SEES-HUNTERS?",
    "I-HUNTERS",
    "UNICORNS-FCN",
    "BOMBS-AWAY"
   ]
  },
  "GRASSLAND-2": {
   "name": "GRASSLAND-2",
   "file": "dungeon.zil",
   "line": 2084,
   "endLine": 2099,
   "desc": "Grassland",
   "ldesc": "A grassy plain circles this band of the cylinder, the vegetation\nmerging into dense forest as you look aft, and stopping abruptly at bare\nmetal as you look forward. The plain arches above you, giving an aerial\nview of the other side and the entry through which you came. The forest\nobscures the aft end of the cylinder. A herd of creatures not unlike\nunicorns crops grass nearby.",
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
    "ALIENS",
    "UNICORNS",
    "DISTANT-BUBBLE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "METAL-BAND-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SCRUB-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "GRASSLAND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "GRASSLAND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM GRASSLAND-2\n      (IN ROOMS)\n      (DESC \"Grassland\")\n      (LDESC\n\"A grassy plain circles this band of the cylinder, the vegetation\nmerging into dense forest as you look aft, and stopping abruptly at bare\nmetal as you look forward. The plain arches above you, giving an aerial\nview of the other side and the entry through which you came. The forest\nobscures the aft end of the cylinder. A herd of creatures not unlike\nunicorns crops grass nearby.\")\n      (NORTH TO METAL-BAND-2)\n      (SOUTH TO SCRUB-2)\n      (EAST TO GRASSLAND)\n      (WEST TO GRASSLAND)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL ALIENS UNICORNS DISTANT-BUBBLE)>",
   "referencedBy": [
    "ALIENS-FCN",
    "SEES-HUNTERS?",
    "I-HUNTERS",
    "BOMBS-AWAY"
   ]
  },
  "METAL-BAND": {
   "name": "METAL-BAND",
   "file": "dungeon.zil",
   "line": 2116,
   "endLine": 2127,
   "desc": "Metal Floor",
   "ldesc": "The floor of the cylinder is bare metal here, merging into grassland aft\nand eventually running into a sheer wall at the forward end of the artifact.",
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
    "CONTROL-BUBBLE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "FORE-END",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "GRASSLAND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "METAL-BAND-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "METAL-BAND-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM METAL-BAND\n      (IN ROOMS)\n      (DESC \"Metal Floor\")\n      (LDESC\n\"The floor of the cylinder is bare metal here, merging into grassland aft\nand eventually running into a sheer wall at the forward end of the artifact.\")\n      (NORTH TO FORE-END)\n      (SOUTH TO GRASSLAND)\n      (EAST TO METAL-BAND-2)\n      (WEST TO METAL-BAND-2)\n      (GLOBAL CONTROL-BUBBLE)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": [
    "SEES-HUNTERS?",
    "BOMBS-AWAY"
   ]
  },
  "METAL-BAND-2": {
   "name": "METAL-BAND-2",
   "file": "dungeon.zil",
   "line": 2129,
   "endLine": 2140,
   "desc": "Metal Floor",
   "ldesc": "The metal floor continues all the way around the cylinder. Aft the\ngrassland begins, and forward the cylinder ends in a smooth vertical wall.",
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
    "CONTROL-BUBBLE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "FORE-END-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "GRASSLAND-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "METAL-BAND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "METAL-BAND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM METAL-BAND-2\n      (IN ROOMS)\n      (DESC \"Metal Floor\")\n      (LDESC\n\"The metal floor continues all the way around the cylinder. Aft the\ngrassland begins, and forward the cylinder ends in a smooth vertical wall.\")\n      (NORTH TO FORE-END-2)\n      (SOUTH TO GRASSLAND-2)\n      (EAST TO METAL-BAND)\n      (WEST TO METAL-BAND)\n      (GLOBAL CONTROL-BUBBLE)\n      (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": [
    "SEES-HUNTERS?",
    "BOMBS-AWAY"
   ]
  },
  "FORE-END": {
   "name": "FORE-END",
   "file": "dungeon.zil",
   "line": 2157,
   "endLine": 2170,
   "desc": "Fore End",
   "ldesc": "You are at the fore end of the cylinder. A smooth, unscalable wall extends\nup all around the circumference. At the axis, high above, is a clear bubble.\nFrom this distance you can't see into it, but it's about 100 meters in\ndiameter.",
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
    "DISTANT-BUBBLE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "METAL-BAND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "FORE-END-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "FORE-END-2",
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
     "message": "The fore wall is smooth and featureless.",
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM FORE-END\n      (IN ROOMS)\n      (DESC \"Fore End\")\n      (LDESC\n\"You are at the fore end of the cylinder. A smooth, unscalable wall extends\nup all around the circumference. At the axis, high above, is a clear bubble.\nFrom this distance you can't see into it, but it's about 100 meters in\ndiameter.\")\n      (SOUTH TO METAL-BAND)\n      (EAST TO FORE-END-2)\n      (WEST TO FORE-END-2)\n      (UP \"The fore wall is smooth and featureless.\")\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL DISTANT-BUBBLE)>",
   "referencedBy": [
    "SEES-HUNTERS?",
    "BOMBS-AWAY",
    "WALL-F"
   ]
  },
  "FORE-END-2": {
   "name": "FORE-END-2",
   "file": "dungeon.zil",
   "line": 2172,
   "endLine": 2185,
   "desc": "Fore End",
   "ldesc": "You are at the forward end of the interior. A vertical wall extends up all\naround the circumference. At the axis, high above, is a crystal bubble. From\nthis distance you can't discern its contents, but it's about 100 meters in\ndiameter.",
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
    "DISTANT-BUBBLE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "METAL-BAND-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "FORE-END",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "FORE-END",
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
     "message": "The fore wall is smooth and featureless.",
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM FORE-END-2\n      (IN ROOMS)\n      (DESC \"Fore End\")\n      (LDESC\n\"You are at the forward end of the interior. A vertical wall extends up all\naround the circumference. At the axis, high above, is a crystal bubble. From\nthis distance you can't discern its contents, but it's about 100 meters in\ndiameter.\")\n      (SOUTH TO METAL-BAND-2)\n      (EAST TO FORE-END)\n      (WEST TO FORE-END)\n      (UP \"The fore wall is smooth and featureless.\")\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL DISTANT-BUBBLE)>",
   "referencedBy": [
    "SEES-HUNTERS?",
    "BOMBS-AWAY",
    "WALL-F"
   ]
  },
  "ON-CONTROL-BUBBLE": {
   "name": "ON-CONTROL-BUBBLE",
   "file": "dungeon.zil",
   "line": 2189,
   "endLine": 2202,
   "desc": "On Control Bubble",
   "ldesc": "You are floating outside a 100 meter crystal bubble which protrudes from\nthe fore end of the cylinder. Inside, you can make out shadowy mechanisms\nand odd constructions. There are odd knobs of some sort which you could use\nto pull yourself down the bubble. At the other end of the cylinder you can\nsee the drive bubble in the midst of enormous trees.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RAIRBIT",
    "ONBIT",
    "RMUNGBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ON-CONTROL-BUBBLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CONTROL-BUBBLE",
    "DRIVE-BUBBLE",
    "KNOBS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "CONTROL-BUBBLE-ENTRANCE",
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
     "message": "There is only air there.",
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM ON-CONTROL-BUBBLE\n      (IN ROOMS)\n      (LDESC\n\"You are floating outside a 100 meter crystal bubble which protrudes from\nthe fore end of the cylinder. Inside, you can make out shadowy mechanisms\nand odd constructions. There are odd knobs of some sort which you could use\nto pull yourself down the bubble. At the other end of the cylinder you can\nsee the drive bubble in the midst of enormous trees.\")\n      (DESC \"On Control Bubble\")\n      (DOWN TO CONTROL-BUBBLE-ENTRANCE)\n      (UP \"There is only air there.\")\n      (ACTION ON-CONTROL-BUBBLE-FCN)\n      (FLAGS RAIRBIT ONBIT RMUNGBIT)\n      (GLOBAL CONTROL-BUBBLE DRIVE-BUBBLE KNOBS)>",
   "referencedBy": [
    "I-NIGHT",
    "BOMBS-AWAY",
    "JATO"
   ]
  },
  "CONTROL-BUBBLE-ENTRANCE": {
   "name": "CONTROL-BUBBLE-ENTRANCE",
   "file": "dungeon.zil",
   "line": 2204,
   "endLine": 2211,
   "desc": "Control Bubble Entrance",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CONTROL-BUBBLE-ENTRANCE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CONTROL-BUBBLE",
    "DRIVE-BUBBLE",
    "CONTROL-BUBBLE-HATCH",
    "KNOBS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "CONTROL-BUBBLE-ROOM",
     "kind": "conditional",
     "condition": "CONTROL-BUBBLE-HATCH IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "ON-CONTROL-BUBBLE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [
    "GOLD-SLOT"
   ],
   "source": "<ROOM CONTROL-BUBBLE-ENTRANCE\n      (IN ROOMS)\n      (DESC \"Control Bubble Entrance\")\n      (IN TO CONTROL-BUBBLE-ROOM IF CONTROL-BUBBLE-HATCH IS OPEN)\n      (UP TO ON-CONTROL-BUBBLE)\n      (ACTION CONTROL-BUBBLE-ENTRANCE-FCN)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL CONTROL-BUBBLE DRIVE-BUBBLE CONTROL-BUBBLE-HATCH KNOBS)>",
   "referencedBy": [
    "I-NIGHT",
    "BOMBS-AWAY",
    "KNOBS-F",
    "ITAKE"
   ]
  },
  "CONTROL-BUBBLE-ROOM": {
   "name": "CONTROL-BUBBLE-ROOM",
   "file": "dungeon.zil",
   "line": 2231,
   "endLine": 2238,
   "desc": "Control Bubble",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RAIRBIT",
    "ONBIT",
    "RMUNGBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CONTROL-BUBBLE-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CONTROL-BUBBLE",
    "CONTROL-BUBBLE-HATCH"
   ],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "25"
    ]
   },
   "exits": [
    {
     "to": "CONTROL-BUBBLE-ENTRANCE",
     "kind": "conditional",
     "condition": "CONTROL-BUBBLE-HATCH IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "CLEAR-SLOT"
   ],
   "source": "<ROOM CONTROL-BUBBLE-ROOM\n      (IN ROOMS)\n      (DESC \"Control Bubble\")\n      (OUT TO CONTROL-BUBBLE-ENTRANCE IF CONTROL-BUBBLE-HATCH IS OPEN)\n      (ACTION CONTROL-BUBBLE-ROOM-FCN)\n      (FLAGS RAIRBIT ONBIT RMUNGBIT)\n      (GLOBAL CONTROL-BUBBLE CONTROL-BUBBLE-HATCH)\n      (VALUE 25)>",
   "referencedBy": [
    "JATO",
    "CONTROL-SLOT-FCN"
   ]
  },
  "REPAIR-ROOM": {
   "name": "REPAIR-ROOM",
   "file": "emerg.zil",
   "line": 97,
   "endLine": 104,
   "desc": "Repair Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "REPAIR-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIRS",
    "METAL-DOOR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "SCRUB",
     "kind": "conditional",
     "condition": "METAL-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "SCRUB",
     "kind": "conditional",
     "condition": "METAL-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [
    "CARD",
    "YELLOW-SLOT",
    "RED-SLOT"
   ],
   "source": "<ROOM REPAIR-ROOM\n      (IN ROOMS)\n      (DESC \"Repair Room\")\n      (OUT TO SCRUB IF METAL-DOOR IS OPEN)\n      (UP TO SCRUB IF METAL-DOOR IS OPEN)\n      (ACTION REPAIR-ROOM-FCN)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL STAIRS METAL-DOOR)>",
   "referencedBy": []
  }
 },
 "objects": {
  "GLOBAL-OBJECTS": {
   "name": "GLOBAL-OBJECTS",
   "file": "dungeon.zil",
   "line": 14,
   "endLine": 16,
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
    "SEARCHBIT",
    "TRANSBIT",
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
    "LOCAL-GLOBALS",
    "INTNUM",
    "IT",
    "GROUND",
    "DEBRIS",
    "HANDS",
    "ME",
    "ARTIFACT",
    "COURSE",
    "UM08",
    "UM12",
    "UM24",
    "UM28",
    "UM31",
    "UM52",
    "UM70",
    "UM91",
    "AB40",
    "AX87",
    "AX32",
    "AX01",
    "AX71",
    "US75",
    "MARS",
    "SHIP",
    "GLOBAL-MOUSE",
    "GRUE",
    "WALL"
   ],
   "source": "<OBJECT GLOBAL-OBJECTS\n\t(FLAGS RMUNGBIT INVISIBLE TOUCHBIT SURFACEBIT TRYTAKEBIT\n\t       SEARCHBIT TRANSBIT WEARBIT)>",
   "referencedBy": [
    "GLOBAL-CHECK",
    "PRE-PUT",
    "IDROP",
    "V-FIND"
   ]
  },
  "LOCAL-GLOBALS": {
   "name": "LOCAL-GLOBALS",
   "file": "dungeon.zil",
   "line": 18,
   "endLine": 18,
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
    "PLANTERS",
    "STAIRS",
    "MISSION-STATUS",
    "ALARM",
    "COUCH",
    "CONTROLS",
    "WINDOW",
    "SAFETY-HOOK",
    "AIRLOCK",
    "AIRLOCK-OUTER",
    "AIRLOCK-INNER",
    "RED-OUTER",
    "RED-INNER",
    "BLUE-OUTER",
    "BLUE-INNER",
    "YELLOW-OUTER",
    "YELLOW-INNER",
    "GREEN-OUTER",
    "GREEN-INNER",
    "GLOBAL-CHIEF",
    "ALIENS",
    "PALISADE",
    "TREE",
    "DRIVE-BUBBLE-HATCH",
    "UNICORNS",
    "METAL-DOOR",
    "DISTANT-BUBBLE",
    "CONTROL-BUBBLE-HATCH",
    "DRIVE-BUBBLE",
    "CONTROL-BUBBLE",
    "SPEAR",
    "HUTS",
    "VEGGIES",
    "CAGES",
    "TOTEMS",
    "KNOBS"
   ],
   "source": "<OBJECT LOCAL-GLOBALS (IN GLOBAL-OBJECTS) (SYNONYM ZZMGCK)>",
   "referencedBy": [
    "IDROP"
   ]
  },
  "ROOMS": {
   "name": "ROOMS",
   "file": "dungeon.zil",
   "line": 21,
   "endLine": 21,
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
    "ROOM?",
    "JUNK-INSIDE",
    "FIND-ROOM",
    "GWIM",
    "GLOBAL-CHECK",
    "DESCRIBE-ROOM",
    "FIRSTER"
   ]
  },
  "INTNUM": {
   "name": "INTNUM",
   "file": "dungeon.zil",
   "line": 23,
   "endLine": 27,
   "desc": "number",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "INTNUM"
   ],
   "adjectives": [],
   "action": "INTNUM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT INTNUM\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM INTNUM)\n\t(DESC \"number\")\n\t(ACTION INTNUM-FCN)>",
   "referencedBy": [
    "V-R",
    "V-THETA",
    "V-PHI",
    "FF-DIAL-FCN",
    "INTNUM-FCN",
    "BUMP-FCN"
   ]
  },
  "PSEUDO-OBJECT": {
   "name": "PSEUDO-OBJECT",
   "file": "dungeon.zil",
   "line": 29,
   "endLine": 31,
   "desc": "pseudo",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": "INTNUM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PSEUDO-OBJECT\n\t(DESC \"pseudo\")\n\t(ACTION INTNUM-FCN)>",
   "referencedBy": [
    "HOLE-PSEUDO",
    "GLOBAL-CHECK",
    "V-FIND"
   ]
  },
  "IT": {
   "name": "IT",
   "file": "dungeon.zil",
   "line": 33,
   "endLine": 37,
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
   "source": "<OBJECT IT\t;\"was IT\"\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM IT THAT THIS HIM)\n\t(DESC \"random object\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "PERFORM",
    "ITAKE-CHECK"
   ]
  },
  "PLANTERS": {
   "name": "PLANTERS",
   "file": "dungeon.zil",
   "line": 39,
   "endLine": 45,
   "desc": "planter",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PLANTERS",
    "PLANT",
    "BOX",
    "BOXES"
   ],
   "adjectives": [
    "DEAD"
   ],
   "action": "PLANTER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PLANTERS\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM PLANTERS PLANT BOX BOXES)\n\t(ADJECTIVE DEAD)\n\t(DESC \"planter\")\n\t(FLAGS NDESCBIT)\n\t(ACTION PLANTER-FCN)>",
   "referencedBy": []
  },
  "STAIRS": {
   "name": "STAIRS",
   "file": "dungeon.zil",
   "line": 47,
   "endLine": 51,
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
    "LADDER",
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
   "source": "<OBJECT STAIRS\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM STAIRS STEPS LADDER STAIRWAY)\n\t(DESC \"stairs\")\n\t(FLAGS NDESCBIT CLIMBBIT)>",
   "referencedBy": []
  },
  "GROUND": {
   "name": "GROUND",
   "file": "dungeon.zil",
   "line": 53,
   "endLine": 57,
   "desc": "ground",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "GROUND",
    "EARTH",
    "FLOOR",
    "DIRT"
   ],
   "adjectives": [],
   "action": "GROUND-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GROUND\t;\"was GROUND\"\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM GROUND EARTH FLOOR DIRT)\n\t(DESC \"ground\")\n\t(ACTION GROUND-FCN)>",
   "referencedBy": [
    "GROUND-FCN",
    "JATO"
   ]
  },
  "DEBRIS": {
   "name": "DEBRIS",
   "file": "dungeon.zil",
   "line": 59,
   "endLine": 63,
   "desc": "debris",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "GARBAGE",
    "DEBRIS",
    "LEAVES"
   ],
   "adjectives": [],
   "action": "DEBRIS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DEBRIS\t;\"was GROUND\"\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM GARBAGE DEBRIS LEAVES)\n\t(DESC \"debris\")\n\t(ACTION DEBRIS-FCN)>",
   "referencedBy": []
  },
  "HANDS": {
   "name": "HANDS",
   "file": "dungeon.zil",
   "line": 65,
   "endLine": 70,
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
   "source": "<OBJECT HANDS\t;\"was HANDS\"\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM PAIR HANDS)\n\t(ADJECTIVE BARE)\n\t(DESC \"pair of hands\")\n\t(FLAGS NDESCBIT TOOLBIT)>",
   "referencedBy": [
    "NEST-FCN",
    "ZAP-GUN-FCN",
    "ITAKE-CHECK",
    "IKILL",
    "V-FIND"
   ]
  },
  "ADVENTURER": {
   "name": "ADVENTURER",
   "file": "dungeon.zil",
   "line": 72,
   "endLine": 77,
   "desc": "cretin",
   "ldesc": null,
   "fdesc": null,
   "loc": "SPACESHIP-BRIDGE",
   "flags": [
    "VILLAIN",
    "NDESCBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "ADVENTURER"
   ],
   "adjectives": [],
   "action": "ADVENTURER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ADVENTURER\t;\"was ADVENTURER\"\n\t(IN SPACESHIP-BRIDGE)\n\t(SYNONYM ADVENTURER)\n\t(DESC \"cretin\")\n\t(FLAGS VILLAIN NDESCBIT INVISIBLE )\n\t(ACTION ADVENTURER-FCN)>",
   "referencedBy": [
    "BUNK-FCN",
    "ADVENTURER-FCN",
    "I-BURN",
    "I-SPIDER",
    "SPIDER-FCN",
    "GIVE-TO-CHIEF",
    "I-CHIEF-APPEARS",
    "BROWN-KEY-FCN",
    "I-CHIEF",
    "GO",
    "PARSER",
    "SYNTAX-CHECK",
    "GET-OBJECT",
    "ITAKE-CHECK",
    "PRINT-CONT",
    "GOTO"
   ]
  },
  "ME": {
   "name": "ME",
   "file": "dungeon.zil",
   "line": 79,
   "endLine": 84,
   "desc": "you",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "VILLAIN"
   ],
   "synonyms": [
    "ME",
    "MYSELF",
    "SELF",
    "WE"
   ],
   "adjectives": [],
   "action": "CRETIN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ME\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ME MYSELF SELF WE)\n\t(DESC \"you\")\n\t(FLAGS VILLAIN)\n\t(ACTION CRETIN)>",
   "referencedBy": [
    "CRETIN",
    "COMPUTER-FCN",
    "ZAP-GUN-FCN",
    "V-FIND"
   ]
  },
  "REGISTRATION": {
   "name": "REGISTRATION",
   "file": "dungeon.zil",
   "line": 104,
   "endLine": 118,
   "desc": "registration",
   "ldesc": null,
   "fdesc": null,
   "loc": "SPACESHIP-BRIDGE",
   "flags": [
    "NDESCBIT",
    "READBIT"
   ],
   "synonyms": [
    "REGISTRATION"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "   Mining Class Ship \"Starcross\"|\n      Registered out of Ceres|\n      Registration 47291AA-4X|\n|\n     Designed by David Lebling|\nConstructed in 2178, Luna City Docks|\n     by Frobozzco Astronautics|\n         and Infocom, Inc.|\n"
    ]
   },
   "contents": [],
   "source": "<OBJECT REGISTRATION\n\t(IN SPACESHIP-BRIDGE)\n\t(SYNONYM REGISTRATION)\n\t(DESC \"registration\")\n\t(FLAGS NDESCBIT READBIT)\n\t(TEXT\n\"   Mining Class Ship \\\"Starcross\\\"|\n      Registered out of Ceres|\n      Registration 47291AA-4X|\n|\n     Designed by David Lebling|\nConstructed in 2178, Luna City Docks|\n     by Frobozzco Astronautics|\n         and Infocom, Inc.|\n\")>",
   "referencedBy": []
  },
  "MISSION-STATUS": {
   "name": "MISSION-STATUS",
   "file": "dungeon.zil",
   "line": 120,
   "endLine": 125,
   "desc": "status",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "STATUS",
    "SITUATION",
    "REPORT"
   ],
   "adjectives": [
    "STATUS",
    "MISSION"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MISSION-STATUS\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM STATUS SITUATION REPORT)\n\t(ADJECTIVE STATUS MISSION)\n\t(DESC \"status\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "COMPUTER-FCN"
   ]
  },
  "ARTIFACT": {
   "name": "ARTIFACT",
   "file": "dungeon.zil",
   "line": 127,
   "endLine": 132,
   "desc": "artifact",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "ARTIFACT"
   ],
   "adjectives": [],
   "action": "ARTIFACT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ARTIFACT\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ARTIFACT)\n\t(DESC \"artifact\")\n\t(ACTION ARTIFACT-FCN)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "COMPUTER-FCN"
   ]
  },
  "ALARM": {
   "name": "ALARM",
   "file": "dungeon.zil",
   "line": 134,
   "endLine": 139,
   "desc": "alarm",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "ALARM",
    "BELL"
   ],
   "adjectives": [],
   "action": "ALARM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ALARM\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM ALARM BELL)\n\t(DESC \"alarm\")\n\t(FLAGS NDESCBIT)\n\t(ACTION ALARM-FCN)>",
   "referencedBy": [
    "COMPUTER-FCN"
   ]
  },
  "RED-BUTTON": {
   "name": "RED-BUTTON",
   "file": "dungeon.zil",
   "line": 141,
   "endLine": 147,
   "desc": "red button",
   "ldesc": null,
   "fdesc": null,
   "loc": "SPACESHIP-BRIDGE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "RED"
   ],
   "action": "ALARM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RED-BUTTON\n\t(IN SPACESHIP-BRIDGE)\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE RED)\n\t(DESC \"red button\")\n\t(FLAGS NDESCBIT)\n\t(ACTION ALARM-FCN)>",
   "referencedBy": []
  },
  "DETECTOR": {
   "name": "DETECTOR",
   "file": "dungeon.zil",
   "line": 149,
   "endLine": 155,
   "desc": "mass detector",
   "ldesc": null,
   "fdesc": null,
   "loc": "SPACESHIP-BRIDGE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "DETECTOR",
    "SCREEN"
   ],
   "adjectives": [
    "MASS",
    "READOUT"
   ],
   "action": "DETECTOR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DETECTOR\n\t(IN SPACESHIP-BRIDGE)\n\t(SYNONYM DETECTOR SCREEN)\n\t(ADJECTIVE MASS READOUT)\n\t(DESC \"mass detector\")\n\t(FLAGS NDESCBIT)\n\t(ACTION DETECTOR-FCN)>",
   "referencedBy": []
  },
  "BUTTON": {
   "name": "BUTTON",
   "file": "dungeon.zil",
   "line": 157,
   "endLine": 163,
   "desc": "blue button",
   "ldesc": null,
   "fdesc": null,
   "loc": "SPACESHIP-BRIDGE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "BLUE"
   ],
   "action": "BUTTON-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BUTTON\n\t(IN SPACESHIP-BRIDGE)\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE BLUE)\n\t(DESC \"blue button\")\n\t(FLAGS NDESCBIT)\n\t(ACTION BUTTON-FCN)>",
   "referencedBy": []
  },
  "CHART": {
   "name": "CHART",
   "file": "dungeon.zil",
   "line": 165,
   "endLine": 174,
   "desc": "mass detector output",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "CHART",
    "MAP",
    "OUTPUT"
   ],
   "adjectives": [
    "ANOMALY",
    "MASS",
    "DETECTOR"
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
     "The output shows major mass concentrations in the vicinity, each with\na code designation and the appropriate R, Theta, and Phi to describe its\nlocation relative to yours."
    ]
   },
   "contents": [],
   "source": "<OBJECT CHART\n\t(SYNONYM CHART MAP OUTPUT)\n\t(ADJECTIVE ANOMALY MASS DETECTOR)\n\t(DESC \"mass detector output\")\n\t(FLAGS TAKEBIT READBIT)\n\t(SIZE 1)\n\t(TEXT\n\"The output shows major mass concentrations in the vicinity, each with\na code designation and the appropriate R, Theta, and Phi to describe its\nlocation relative to yours.\")>",
   "referencedBy": [
    "MASS-FCN",
    "BUTTON-FCN"
   ]
  },
  "COURSE": {
   "name": "COURSE",
   "file": "dungeon.zil",
   "line": 176,
   "endLine": 181,
   "desc": "course",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "COURSE",
    "PROGRAM"
   ],
   "adjectives": [
    "NEW",
    "NAVIGATIONAL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT COURSE\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM COURSE PROGRAM)\n\t(ADJECTIVE NEW NAVIGATIONAL)\n\t(DESC \"course\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "COMPUTER-FCN"
   ]
  },
  "UM08": {
   "name": "UM08",
   "file": "dungeon.zil",
   "line": 212,
   "endLine": 218,
   "desc": "mass UM08",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "UM08"
   ],
   "adjectives": [
    "MASS"
   ],
   "action": "MASS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT UM08\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM UM08)\n\t(ADJECTIVE MASS)\n\t(DESC \"mass UM08\")\n\t(FLAGS NDESCBIT)\n\t(ACTION MASS-FCN)>",
   "referencedBy": [
    "GO"
   ]
  },
  "UM12": {
   "name": "UM12",
   "file": "dungeon.zil",
   "line": 220,
   "endLine": 226,
   "desc": "mass UM12",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "UM12"
   ],
   "adjectives": [
    "MASS"
   ],
   "action": "MASS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT UM12\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM UM12)\n\t(ADJECTIVE MASS)\n\t(DESC \"mass UM12\")\n\t(FLAGS NDESCBIT)\n\t(ACTION MASS-FCN)>",
   "referencedBy": [
    "GO"
   ]
  },
  "UM24": {
   "name": "UM24",
   "file": "dungeon.zil",
   "line": 228,
   "endLine": 234,
   "desc": "mass UM24",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "UM24"
   ],
   "adjectives": [
    "MASS"
   ],
   "action": "MASS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT UM24\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM UM24)\n\t(ADJECTIVE MASS)\n\t(DESC \"mass UM24\")\n\t(FLAGS NDESCBIT)\n\t(ACTION MASS-FCN)>",
   "referencedBy": [
    "GO"
   ]
  },
  "UM28": {
   "name": "UM28",
   "file": "dungeon.zil",
   "line": 236,
   "endLine": 242,
   "desc": "mass UM28",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "UM28"
   ],
   "adjectives": [
    "MASS"
   ],
   "action": "MASS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT UM28\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM UM28)\n\t(ADJECTIVE MASS)\n\t(DESC \"mass UM28\")\n\t(FLAGS NDESCBIT)\n\t(ACTION MASS-FCN)>",
   "referencedBy": [
    "GO"
   ]
  },
  "UM31": {
   "name": "UM31",
   "file": "dungeon.zil",
   "line": 244,
   "endLine": 250,
   "desc": "mass UM31",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "UM31"
   ],
   "adjectives": [
    "MASS"
   ],
   "action": "MASS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT UM31\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM UM31)\n\t(ADJECTIVE MASS)\n\t(DESC \"mass UM31\")\n\t(FLAGS NDESCBIT)\n\t(ACTION MASS-FCN)>",
   "referencedBy": [
    "GO"
   ]
  },
  "UM52": {
   "name": "UM52",
   "file": "dungeon.zil",
   "line": 252,
   "endLine": 258,
   "desc": "mass UM52",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "UM52"
   ],
   "adjectives": [
    "MASS"
   ],
   "action": "MASS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT UM52\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM UM52)\n\t(ADJECTIVE MASS)\n\t(DESC \"mass UM52\")\n\t(FLAGS NDESCBIT)\n\t(ACTION MASS-FCN)>",
   "referencedBy": [
    "GO"
   ]
  },
  "UM70": {
   "name": "UM70",
   "file": "dungeon.zil",
   "line": 260,
   "endLine": 266,
   "desc": "mass UM70",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "UM70"
   ],
   "adjectives": [
    "MASS"
   ],
   "action": "MASS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT UM70\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM UM70)\n\t(ADJECTIVE MASS)\n\t(DESC \"mass UM70\")\n\t(FLAGS NDESCBIT)\n\t(ACTION MASS-FCN)>",
   "referencedBy": [
    "GO"
   ]
  },
  "UM91": {
   "name": "UM91",
   "file": "dungeon.zil",
   "line": 268,
   "endLine": 274,
   "desc": "mass UM91",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "UM91"
   ],
   "adjectives": [
    "MASS"
   ],
   "action": "MASS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT UM91\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM UM91)\n\t(ADJECTIVE MASS)\n\t(DESC \"mass UM91\")\n\t(FLAGS NDESCBIT)\n\t(ACTION MASS-FCN)>",
   "referencedBy": [
    "GO"
   ]
  },
  "AB40": {
   "name": "AB40",
   "file": "dungeon.zil",
   "line": 276,
   "endLine": 282,
   "desc": "mass AB40",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "AB40",
    "CERES"
   ],
   "adjectives": [
    "MASS"
   ],
   "action": "MASS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT AB40\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM AB40 CERES)\n\t(ADJECTIVE MASS)\n\t(DESC \"mass AB40\")\n\t(FLAGS NDESCBIT)\n\t(ACTION MASS-FCN)>",
   "referencedBy": [
    "GO"
   ]
  },
  "AX87": {
   "name": "AX87",
   "file": "dungeon.zil",
   "line": 284,
   "endLine": 290,
   "desc": "mass AX87",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "AX87"
   ],
   "adjectives": [
    "MASS"
   ],
   "action": "MASS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT AX87\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM AX87)\n\t(ADJECTIVE MASS)\n\t(DESC \"mass AX87\")\n\t(FLAGS NDESCBIT)\n\t(ACTION MASS-FCN)>",
   "referencedBy": [
    "GO"
   ]
  },
  "AX32": {
   "name": "AX32",
   "file": "dungeon.zil",
   "line": 292,
   "endLine": 298,
   "desc": "mass AX32",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "AX32"
   ],
   "adjectives": [
    "MASS"
   ],
   "action": "MASS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT AX32\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM AX32)\n\t(ADJECTIVE MASS)\n\t(DESC \"mass AX32\")\n\t(FLAGS NDESCBIT)\n\t(ACTION MASS-FCN)>",
   "referencedBy": [
    "GO"
   ]
  },
  "AX01": {
   "name": "AX01",
   "file": "dungeon.zil",
   "line": 300,
   "endLine": 306,
   "desc": "mass AX01",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "AX01"
   ],
   "adjectives": [
    "MASS"
   ],
   "action": "MASS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT AX01\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM AX01)\n\t(ADJECTIVE MASS)\n\t(DESC \"mass AX01\")\n\t(FLAGS NDESCBIT)\n\t(ACTION MASS-FCN)>",
   "referencedBy": [
    "GO"
   ]
  },
  "AX71": {
   "name": "AX71",
   "file": "dungeon.zil",
   "line": 308,
   "endLine": 314,
   "desc": "mass AX71",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "AX71"
   ],
   "adjectives": [
    "MASS"
   ],
   "action": "MASS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT AX71\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM AX71)\n\t(ADJECTIVE MASS)\n\t(DESC \"mass AX71\")\n\t(FLAGS NDESCBIT)\n\t(ACTION MASS-FCN)>",
   "referencedBy": [
    "GO"
   ]
  },
  "US75": {
   "name": "US75",
   "file": "dungeon.zil",
   "line": 316,
   "endLine": 322,
   "desc": "ship US75",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "US75"
   ],
   "adjectives": [
    "MASS",
    "SHIP"
   ],
   "action": "MASS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT US75\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM US75)\n\t(ADJECTIVE MASS SHIP)\n\t(DESC \"ship US75\")\n\t(FLAGS NDESCBIT)\n\t(ACTION MASS-FCN)>",
   "referencedBy": [
    "GO"
   ]
  },
  "MARS": {
   "name": "MARS",
   "file": "dungeon.zil",
   "line": 324,
   "endLine": 330,
   "desc": "Mars",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "MARS"
   ],
   "adjectives": [
    "PLANET",
    "MASS"
   ],
   "action": "MASS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MARS\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM MARS)\n\t(ADJECTIVE PLANET MASS)\n\t(DESC \"Mars\")\n\t(FLAGS NDESCBIT)\n\t(ACTION MASS-FCN)>",
   "referencedBy": [
    "GO"
   ]
  },
  "SHIP": {
   "name": "SHIP",
   "file": "dungeon.zil",
   "line": 332,
   "endLine": 338,
   "desc": "ship",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "SHIP",
    "SPACES",
    "STARCROSS"
   ],
   "adjectives": [
    "SPACE"
   ],
   "action": "SHIP-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SHIP\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM SHIP SPACES STARCROSS)\n\t(ADJECTIVE SPACE)\n\t(DESC \"ship\")\n\t(FLAGS NDESCBIT)\n\t(ACTION SHIP-FCN)>",
   "referencedBy": []
  },
  "COUCH": {
   "name": "COUCH",
   "file": "dungeon.zil",
   "line": 340,
   "endLine": 347,
   "desc": "control couch",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "VEHBIT",
    "FURNITURE",
    "NDESCBIT",
    "CLIMBBIT"
   ],
   "synonyms": [
    "COUCH",
    "SEAT"
   ],
   "adjectives": [
    "CONTROL",
    "CRASH"
   ],
   "action": "COUCH-FCN",
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
   "source": "<OBJECT COUCH\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM COUCH SEAT)\n\t(ADJECTIVE CONTROL CRASH)\n\t(DESC \"control couch\")\n\t(FLAGS VEHBIT FURNITURE NDESCBIT CLIMBBIT)\n\t(ACTION COUCH-FCN)\n\t(CAPACITY 100)>",
   "referencedBy": [
    "AIRLOCK-DOORS-FCN",
    "COUCH-FCN",
    "SEAT-BELT-FCN"
   ]
  },
  "SEAT-BELT": {
   "name": "SEAT-BELT",
   "file": "dungeon.zil",
   "line": 349,
   "endLine": 355,
   "desc": "seat belt",
   "ldesc": null,
   "fdesc": null,
   "loc": "SPACESHIP-BRIDGE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BELT",
    "SEATBELT"
   ],
   "adjectives": [
    "SEAT"
   ],
   "action": "SEAT-BELT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SEAT-BELT\n\t(IN SPACESHIP-BRIDGE)\n\t(SYNONYM BELT SEATBELT)\n\t(ADJECTIVE SEAT)\n\t(DESC \"seat belt\")\n\t(FLAGS NDESCBIT)\n\t(ACTION SEAT-BELT-FCN)>",
   "referencedBy": []
  },
  "CONTROLS": {
   "name": "CONTROLS",
   "file": "dungeon.zil",
   "line": 357,
   "endLine": 362,
   "desc": "control",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "CONTROL",
    "PANEL",
    "CONSOLE"
   ],
   "adjectives": [],
   "action": "CONTROLS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CONTROLS\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM CONTROL PANEL CONSOLE)\n\t(DESC \"control\")\n\t(FLAGS NDESCBIT)\n\t(ACTION CONTROLS-FCN)>",
   "referencedBy": []
  },
  "WINDOW": {
   "name": "WINDOW",
   "file": "dungeon.zil",
   "line": 364,
   "endLine": 370,
   "desc": "window",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "VEHBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "WINDOW",
    "PORT",
    "PORTHOLE",
    "VIEWPORT"
   ],
   "adjectives": [
    "VIEW"
   ],
   "action": "PORTHOLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WINDOW\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM WINDOW PORT PORTHOLE VIEWPORT)\n\t(ADJECTIVE VIEW)\n\t(DESC \"window\")\n\t(FLAGS VEHBIT NDESCBIT)\n\t(ACTION PORTHOLE-FCN)>",
   "referencedBy": [
    "OBJECT-PSEUDO"
   ]
  },
  "BUNK": {
   "name": "BUNK",
   "file": "dungeon.zil",
   "line": 382,
   "endLine": 388,
   "desc": "bunk",
   "ldesc": null,
   "fdesc": null,
   "loc": "SPACESHIP-QUARTERS",
   "flags": [
    "VEHBIT",
    "FURNITURE",
    "NDESCBIT",
    "CLIMBBIT"
   ],
   "synonyms": [
    "BUNK",
    "BED",
    "COT"
   ],
   "adjectives": [],
   "action": "BUNK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "1000"
    ]
   },
   "contents": [],
   "source": "<OBJECT BUNK\n\t(IN SPACESHIP-QUARTERS)\n\t(SYNONYM BUNK BED COT)\n\t(DESC \"bunk\")\n\t(FLAGS VEHBIT FURNITURE NDESCBIT CLIMBBIT)\n\t(ACTION BUNK-FCN)\n\t(CAPACITY 1000)>",
   "referencedBy": [
    "BUNK-FCN",
    "GO"
   ]
  },
  "SPACESUIT": {
   "name": "SPACESUIT",
   "file": "dungeon.zil",
   "line": 398,
   "endLine": 406,
   "desc": "space suit",
   "ldesc": null,
   "fdesc": "Hanging on a rack is your space suit.",
   "loc": "SPACESHIP-STORES",
   "flags": [
    "TAKEBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "SPACES",
    "SUIT"
   ],
   "adjectives": [
    "SPACE",
    "PRESSURE",
    "MY",
    "GOOD"
   ],
   "action": "SPACESUIT-FCN",
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
   "source": "<OBJECT SPACESUIT\n\t(IN SPACESHIP-STORES)\n\t(SYNONYM SPACES SUIT)\n\t(ADJECTIVE SPACE PRESSURE MY GOOD)\n\t(FDESC \"Hanging on a rack is your space suit.\")\n\t(DESC \"space suit\")\n\t(FLAGS TAKEBIT TRYTAKEBIT)\n\t(SIZE 20)\n\t(ACTION SPACESUIT-FCN)>",
   "referencedBy": [
    "ADVENTURER-FCN",
    "HOLE-PSEUDO",
    "THROW-AWAY",
    "SPACESUIT-FCN",
    "SAFETY-LINE-FCN",
    "CORIOLIS",
    "VILLAGE-FCN",
    "GIVE-TO-CHIEF",
    "I-CHIEF-APPEARS",
    "CHIEF-FCN",
    "BROWN-KEY-FCN",
    "WIFE-PSEUDO",
    "CHILD-PSEUDO",
    "I-CHIEF",
    "UP-A-TREE-EXIT",
    "TREETOP-FCN",
    "BOMBS-AWAY",
    "JIGS-UP",
    "PRE-BOARD",
    "V-SMELL",
    "RIPOFF"
   ]
  },
  "JUNK-SPACESUIT": {
   "name": "JUNK-SPACESUIT",
   "file": "dungeon.zil",
   "line": 408,
   "endLine": 415,
   "desc": "tattered suit",
   "ldesc": null,
   "fdesc": null,
   "loc": "CHIEF",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "SPACES",
    "SUIT"
   ],
   "adjectives": [
    "TATTERED",
    "ALIEN"
   ],
   "action": "JUNK-SPACESUIT-FCN",
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
   "source": "<OBJECT JUNK-SPACESUIT\n\t(IN CHIEF)\n\t(SYNONYM SPACES SUIT)\n\t(ADJECTIVE TATTERED ALIEN)\n\t(DESC \"tattered suit\")\n\t(FLAGS NDESCBIT TRYTAKEBIT TAKEBIT)\n\t(SIZE 20)\n\t(ACTION JUNK-SPACESUIT-FCN)>",
   "referencedBy": [
    "VILLAGE-FCN",
    "GIVE-TO-CHIEF",
    "CHIEF-FCN",
    "UP-A-TREE-EXIT",
    "PRE-BOARD"
   ]
  },
  "SAFETY-LINE": {
   "name": "SAFETY-LINE",
   "file": "dungeon.zil",
   "line": 417,
   "endLine": 424,
   "desc": "safety line",
   "ldesc": null,
   "fdesc": null,
   "loc": "SPACESHIP-STORES",
   "flags": [
    "TAKEBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "LINE",
    "ROPE"
   ],
   "adjectives": [
    "SAFETY"
   ],
   "action": "SAFETY-LINE-FCN",
   "descfcn": "SAFETY-LINE-FCN",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SAFETY-LINE\n\t(IN SPACESHIP-STORES)\n\t(SYNONYM LINE ROPE)\n\t(ADJECTIVE SAFETY)\n\t(DESC \"safety line\")\n\t(FLAGS TAKEBIT TRYTAKEBIT)\n\t(ACTION SAFETY-LINE-FCN)\n\t(DESCFCN SAFETY-LINE-FCN)>",
   "referencedBy": [
    "ADVENTURER-FCN",
    "HOLE-PSEUDO",
    "THROW-AWAY",
    "SAFETY-LINE-FCN",
    "CORIOLIS",
    "TREETOP-FCN",
    "BOMBS-AWAY",
    "DESCRIBE-OBJECT",
    "RIPOFF"
   ]
  },
  "SAFETY-HOOK": {
   "name": "SAFETY-HOOK",
   "file": "dungeon.zil",
   "line": 426,
   "endLine": 431,
   "desc": "hook",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "HOOK"
   ],
   "adjectives": [
    "SAFETY"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SAFETY-HOOK\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM HOOK)\n\t(ADJECTIVE SAFETY)\n\t(DESC \"hook\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "SAFETY-LINE-FCN"
   ]
  },
  "AIRLOCK": {
   "name": "AIRLOCK",
   "file": "dungeon.zil",
   "line": 445,
   "endLine": 449,
   "desc": "airlock",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "AIRLOCK"
   ],
   "adjectives": [],
   "action": "AIRLOCK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT AIRLOCK\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM AIRLOCK)\n\t(DESC \"airlock\")\n\t(ACTION AIRLOCK-FCN)>",
   "referencedBy": [
    "AIRLOCK-FCN",
    "AIRLOCK-DOORS-FCN"
   ]
  },
  "AIRLOCK-OUTER": {
   "name": "AIRLOCK-OUTER",
   "file": "dungeon.zil",
   "line": 465,
   "endLine": 471,
   "desc": "outer door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "DOORBIT"
   ],
   "synonyms": [
    "DOOR",
    "BULKHEAD"
   ],
   "adjectives": [
    "OUTER"
   ],
   "action": "AIRLOCK-DOORS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT AIRLOCK-OUTER\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM DOOR BULKHEAD)\n\t(ADJECTIVE OUTER)\n\t(DESC \"outer door\")\n\t(FLAGS NDESCBIT DOORBIT)\n\t(ACTION AIRLOCK-DOORS-FCN)>",
   "referencedBy": [
    "AIRLOCK-EXIT-FCN",
    "AIRLOCK-FCN",
    "AIRLOCK-DOORS-FCN",
    "DEEP-SPACE-FCN",
    "JIGS-UP"
   ]
  },
  "AIRLOCK-INNER": {
   "name": "AIRLOCK-INNER",
   "file": "dungeon.zil",
   "line": 473,
   "endLine": 479,
   "desc": "inner door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "DOORBIT"
   ],
   "synonyms": [
    "DOOR",
    "BULKHEAD"
   ],
   "adjectives": [
    "INNER"
   ],
   "action": "AIRLOCK-DOORS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT AIRLOCK-INNER\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM DOOR BULKHEAD)\n\t(ADJECTIVE INNER)\n\t(DESC \"inner door\")\n\t(FLAGS NDESCBIT DOORBIT)\n\t(ACTION AIRLOCK-DOORS-FCN)>",
   "referencedBy": [
    "BRIDGE-FCN",
    "I-ALARM",
    "BRIDGE-EXITS",
    "AIRLOCK-FCN",
    "AIRLOCK-DOORS-FCN",
    "JIGS-UP"
   ]
  },
  "COMPUTER": {
   "name": "COMPUTER",
   "file": "dungeon.zil",
   "line": 481,
   "endLine": 487,
   "desc": "computer",
   "ldesc": null,
   "fdesc": null,
   "loc": "SPACESHIP-BRIDGE",
   "flags": [
    "NDESCBIT",
    "VICBIT"
   ],
   "synonyms": [
    "COMPUTER",
    "POWER"
   ],
   "adjectives": [
    "NAVIGATIONAL",
    "FROBOZZCO"
   ],
   "action": "COMPUTER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT COMPUTER\n\t(IN SPACESHIP-BRIDGE)\n\t(SYNONYM COMPUTER POWER)\n\t(ADJECTIVE NAVIGATIONAL FROBOZZCO)\n\t(DESC \"computer\")\n\t(FLAGS NDESCBIT VICBIT)\n\t(ACTION COMPUTER-FCN)>",
   "referencedBy": [
    "V-R",
    "V-THETA",
    "V-PHI",
    "CONTROLS-FCN",
    "COMPUTER-FCN"
   ]
  },
  "INSTRUCTIONS": {
   "name": "INSTRUCTIONS",
   "file": "dungeon.zil",
   "line": 489,
   "endLine": 509,
   "desc": "instruction sheet",
   "ldesc": null,
   "fdesc": "Taped to the wall is a slightly faded instruction sheet for the computer.",
   "loc": "SPACESHIP-BRIDGE",
   "flags": [
    "READBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "SHEET",
    "INSTRUCTIONS",
    "PAPER"
   ],
   "adjectives": [
    "FADED"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "|\n\"Your Frobozzco FB-69105 Computer|\n|\nFor your safety, this voice-activated computer will not respond unless\ndirectly addressed by the operator. Prefix all commands with the word\n'computer,' as in 'Computer, Set course for Mars.'  Navigational\ncommands may also be given in terms of the R, theta, and phi of the\ndestination, as in 'Computer, R is 100. Theta is 200. Phi is 300.'\nFollowing these instructions will ensure full satisfaction from your new\nFrobozzco Computer.\"|\n"
    ]
   },
   "contents": [],
   "source": "<OBJECT INSTRUCTIONS\n\t(IN SPACESHIP-BRIDGE)\n\t(SYNONYM SHEET INSTRUCTIONS PAPER)\n\t(ADJECTIVE FADED)\n\t(FDESC\n\"Taped to the wall is a slightly faded instruction sheet for the computer.\")\n\t(DESC \"instruction sheet\")\n\t(FLAGS READBIT TAKEBIT)\n\t(TEXT\n\n\"|\n\\\"Your Frobozzco FB-69105 Computer|\n|\nFor your safety, this voice-activated computer will not respond unless\ndirectly addressed by the operator. Prefix all commands with the word\n'computer,' as in 'Computer, Set course for Mars.'  Navigational\ncommands may also be given in terms of the R, theta, and phi of the\ndestination, as in 'Computer, R is 100. Theta is 200. Phi is 300.'\nFollowing these instructions will ensure full satisfaction from your new\nFrobozzco Computer.\\\"|\n\")>",
   "referencedBy": []
  },
  "TAPE-PLAYER": {
   "name": "TAPE-PLAYER",
   "file": "dungeon.zil",
   "line": 511,
   "endLine": 518,
   "desc": "tape library",
   "ldesc": null,
   "fdesc": null,
   "loc": "SPACESHIP-QUARTERS",
   "flags": [
    "TAKEBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "RECORDER",
    "PLAYER",
    "VCR",
    "LIBRARY"
   ],
   "adjectives": [
    "TAPE",
    "TAPES",
    "VIDEO",
    "AUDIO"
   ],
   "action": "TAPE-FCN",
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
   "source": "<OBJECT TAPE-PLAYER\n\t(IN SPACESHIP-QUARTERS)\n\t(SYNONYM RECORDER PLAYER VCR LIBRARY)\n\t(ADJECTIVE TAPE TAPES VIDEO AUDIO)\n\t(DESC \"tape library\")\n\t(FLAGS TAKEBIT TRYTAKEBIT)\n\t(ACTION TAPE-FCN)\n\t(SIZE 10)>",
   "referencedBy": [
    "TAPE-FCN",
    "I-SPIDER",
    "SPIDER-FCN"
   ]
  },
  "BLACK-KEY": {
   "name": "BLACK-KEY",
   "file": "dungeon.zil",
   "line": 547,
   "endLine": 553,
   "desc": "black rod",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "KEYBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "KEY",
    "RODS",
    "ROD"
   ],
   "adjectives": [
    "BLACK",
    "CRYSTAL"
   ],
   "action": "BLACK-KEY-FCN",
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
   "source": "<OBJECT BLACK-KEY\n\t(SYNONYM KEY RODS ROD)\n\t(ADJECTIVE BLACK CRYSTAL)\n\t(DESC \"black rod\")\n\t(FLAGS TAKEBIT KEYBIT TRANSBIT)\n\t(ACTION BLACK-KEY-FCN)\n\t(VALUE 25)>",
   "referencedBy": [
    "BLACK-KEY-FCN",
    "BUMP-FCN",
    "BLACK-SLOT-FCN",
    "SLIDE-PROJECTOR-FCN"
   ]
  },
  "RED-OUTER": {
   "name": "RED-OUTER",
   "file": "dungeon.zil",
   "line": 555,
   "endLine": 561,
   "desc": "red outer door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT"
   ],
   "synonyms": [
    "DOOR",
    "AIRLOCK",
    "BULKHEAD"
   ],
   "adjectives": [
    "RED",
    "OUTER"
   ],
   "action": "RED-DOORS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RED-OUTER\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM DOOR AIRLOCK BULKHEAD)\n\t(ADJECTIVE RED OUTER)\n\t(DESC \"red outer door\")\n\t(FLAGS DOORBIT)\n\t(ACTION RED-DOORS-FCN)>",
   "referencedBy": [
    "RED-LOCK-FCN",
    "RED-DOCK-FCN",
    "BLACK-KEY-FCN",
    "RED-DOORS-FCN"
   ]
  },
  "RELIEF": {
   "name": "RELIEF",
   "file": "dungeon.zil",
   "line": 563,
   "endLine": 574,
   "desc": "metal relief",
   "ldesc": "A round metal sculpture or relief covers part of the airlock door. It is\nmade up of thousands of tiny hexagonal columns which extend various lengths\nfrom the surface, making a three-dimensional representation. You can examine\nit more closely to see the details.",
   "fdesc": null,
   "loc": "RED-DOCK",
   "flags": [
    "OPENBIT",
    "CONTBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "RELIEF",
    "SCULPTURE",
    "SURFACE",
    "BUMPS"
   ],
   "adjectives": [
    "METAL",
    "SILVER"
   ],
   "action": "RELIEF-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RELIEF\n\t(IN RED-DOCK)\n\t(SYNONYM RELIEF SCULPTURE SURFACE BUMPS)\n\t(ADJECTIVE METAL SILVER)\n\t(DESC \"metal relief\")\n\t(LDESC\n\"A round metal sculpture or relief covers part of the airlock door. It is\nmade up of thousands of tiny hexagonal columns which extend various lengths\nfrom the surface, making a three-dimensional representation. You can examine\nit more closely to see the details.\")\n\t(FLAGS OPENBIT CONTBIT SEARCHBIT)\n\t(ACTION RELIEF-FCN)>",
   "referencedBy": [
    "BLACK-KEY-FCN",
    "BUMP-FCN"
   ]
  },
  "BUMP-2": {
   "name": "BUMP-2",
   "file": "dungeon.zil",
   "line": 576,
   "endLine": 582,
   "desc": "eighth, ninth, or tenth bumps",
   "ldesc": null,
   "fdesc": null,
   "loc": "RED-DOCK",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUMP",
    "COLUMN"
   ],
   "adjectives": [
    "METAL",
    "EIGHTH",
    "NINTH",
    "TENTH",
    "CENTER",
    "OUTER",
    "LAST"
   ],
   "action": "BUMP-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BUMP-2\n\t(IN RED-DOCK)\n\t(SYNONYM BUMP COLUMN)\n\t(ADJECTIVE METAL EIGHTH NINTH TENTH CENTER OUTER LAST)\n\t(DESC \"eighth, ninth, or tenth bumps\")\n\t(FLAGS NDESCBIT)\n\t(ACTION BUMP-FCN)>",
   "referencedBy": [
    "BUMP-FCN"
   ]
  },
  "BUMP": {
   "name": "BUMP",
   "file": "dungeon.zil",
   "line": 584,
   "endLine": 590,
   "desc": "first, second, third, fourth, fifth, sixth, or seventh bumps",
   "ldesc": null,
   "fdesc": null,
   "loc": "RED-DOCK",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUMP",
    "COLUMN"
   ],
   "adjectives": [
    "METAL",
    "FIRST",
    "SECOND",
    "THIRD",
    "FOURTH",
    "FIFTH",
    "SIXTH",
    "SEVENTH"
   ],
   "action": "BUMP-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BUMP\n\t(IN RED-DOCK)\n\t(SYNONYM BUMP COLUMN)\n\t(ADJECTIVE METAL FIRST SECOND THIRD FOURTH FIFTH SIXTH SEVENTH)\n\t(DESC \"first, second, third, fourth, fifth, sixth, or seventh bumps\")\n\t(FLAGS NDESCBIT)\n\t(ACTION BUMP-FCN)>",
   "referencedBy": [
    "RELIEF-FCN",
    "INTNUM-FCN",
    "BUMP-FCN",
    "GET-OBJECT"
   ]
  },
  "BABY-BUMP": {
   "name": "BABY-BUMP",
   "file": "dungeon.zil",
   "line": 592,
   "endLine": 597,
   "desc": "small bump",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUMP",
    "COLUMN",
    "HEXAGON"
   ],
   "adjectives": [
    "SMALL",
    "LONG",
    "NEW",
    "TINY"
   ],
   "action": "BUMP-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BABY-BUMP\n\t(SYNONYM BUMP COLUMN HEXAGON)\n\t(ADJECTIVE SMALL LONG NEW TINY)\n\t(DESC \"small bump\")\n\t(FLAGS NDESCBIT)\n\t(ACTION BUMP-FCN)>",
   "referencedBy": [
    "RELIEF-FCN",
    "BUMP-FCN"
   ]
  },
  "RED-INNER": {
   "name": "RED-INNER",
   "file": "dungeon.zil",
   "line": 599,
   "endLine": 605,
   "desc": "red inner door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT"
   ],
   "synonyms": [
    "AIRLOCK",
    "DOOR",
    "BULKHEAD"
   ],
   "adjectives": [
    "RED",
    "INNER"
   ],
   "action": "RED-DOORS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RED-INNER\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM AIRLOCK DOOR BULKHEAD)\n\t(ADJECTIVE RED INNER)\n\t(DESC \"red inner door\")\n\t(FLAGS DOORBIT)\n\t(ACTION RED-DOORS-FCN)>",
   "referencedBy": [
    "RED-LOCK-FCN",
    "RED-DOORS-FCN"
   ]
  },
  "SPIDER": {
   "name": "SPIDER",
   "file": "dungeon.zil",
   "line": 651,
   "endLine": 663,
   "desc": "giant spider",
   "ldesc": "Crouched in the center of the sphere, where the wires converge, is a\ncreature resembling a giant spider. A closer look reveals that it is not\nan insect, but rather a multi-legged, endoskeletal mammal. It has huge eyes\nand impressive grinding teeth. It grips the wires with many tiny fingers, and\ngazes at you with almost hypnotic intensity.",
   "fdesc": null,
   "loc": "SPHERE-SHIP",
   "flags": [
    "VILLAIN",
    "OPENBIT",
    "CONTBIT",
    "VICBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "SPIDER",
    "GURTHARK",
    "BESNAP"
   ],
   "adjectives": [
    "GIANT"
   ],
   "action": "SPIDER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "TRANSLATOR"
   ],
   "source": "<OBJECT SPIDER\n\t(IN SPHERE-SHIP)\n\t(SYNONYM SPIDER GURTHARK BESNAP)\n\t(ADJECTIVE GIANT)\n\t(DESC \"giant spider\")\n\t(FLAGS VILLAIN OPENBIT CONTBIT VICBIT SEARCHBIT)\n\t(LDESC\n\"Crouched in the center of the sphere, where the wires converge, is a\ncreature resembling a giant spider. A closer look reveals that it is not\nan insect, but rather a multi-legged, endoskeletal mammal. It has huge eyes\nand impressive grinding teeth. It grips the wires with many tiny fingers, and\ngazes at you with almost hypnotic intensity.\")\n\t(ACTION SPIDER-FCN)>",
   "referencedBy": [
    "TAPE-FCN",
    "I-SPIDER",
    "TRANSLATOR-FCN",
    "SPIDER-FCN"
   ]
  },
  "YELLOW-KEY": {
   "name": "YELLOW-KEY",
   "file": "dungeon.zil",
   "line": 665,
   "endLine": 670,
   "desc": "yellow rod",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "KEYBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "KEY",
    "RODS",
    "ROD",
    "OBJECT"
   ],
   "adjectives": [
    "YELLOW",
    "CRYSTAL"
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
   "source": "<OBJECT YELLOW-KEY\n\t(SYNONYM KEY RODS ROD OBJECT)\n\t(ADJECTIVE YELLOW CRYSTAL)\n\t(DESC \"yellow rod\")\n\t(VALUE 25)\n\t(FLAGS TAKEBIT KEYBIT TRANSBIT)>",
   "referencedBy": [
    "SPIDER-FCN",
    "YELLOW-SLOT-F"
   ]
  },
  "TRANSLATOR": {
   "name": "TRANSLATOR",
   "file": "dungeon.zil",
   "line": 672,
   "endLine": 677,
   "desc": "translator",
   "ldesc": null,
   "fdesc": null,
   "loc": "SPIDER",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "TRANSLATOR",
    "OBJECT"
   ],
   "adjectives": [],
   "action": "TRANSLATOR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TRANSLATOR\n\t(IN SPIDER)\n\t(SYNONYM TRANSLATOR OBJECT)\n\t(DESC \"translator\")\n\t(ACTION TRANSLATOR-FCN)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "BLUE-OUTER": {
   "name": "BLUE-OUTER",
   "file": "dungeon.zil",
   "line": 690,
   "endLine": 696,
   "desc": "blue outer door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT"
   ],
   "synonyms": [
    "DOOR",
    "AIRLOCK"
   ],
   "adjectives": [
    "BLUE",
    "OUTER",
    "BULKHEAD"
   ],
   "action": "BLUE-DOORS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BLUE-OUTER\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM DOOR AIRLOCK)\n\t(ADJECTIVE BLUE OUTER BULKHEAD)\n\t(DESC \"blue outer door\")\n\t(FLAGS DOORBIT)\n\t(ACTION BLUE-DOORS-FCN)>",
   "referencedBy": [
    "BLUE-LOCK-FCN",
    "BLUE-DOORS-FCN"
   ]
  },
  "BLUE-INNER": {
   "name": "BLUE-INNER",
   "file": "dungeon.zil",
   "line": 698,
   "endLine": 704,
   "desc": "blue inner door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT"
   ],
   "synonyms": [
    "AIRLOCK",
    "DOOR",
    "BULKHEAD"
   ],
   "adjectives": [
    "BLUE",
    "INNER"
   ],
   "action": "BLUE-DOORS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BLUE-INNER\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM AIRLOCK DOOR BULKHEAD)\n\t(ADJECTIVE BLUE INNER)\n\t(DESC \"blue inner door\")\n\t(FLAGS DOORBIT)\n\t(ACTION BLUE-DOORS-FCN)>",
   "referencedBy": [
    "BLUE-LOCK-FCN",
    "BLUE-DOORS-FCN"
   ]
  },
  "YELLOW-OUTER": {
   "name": "YELLOW-OUTER",
   "file": "dungeon.zil",
   "line": 738,
   "endLine": 744,
   "desc": "yellow outer door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT"
   ],
   "synonyms": [
    "AIRLOCK",
    "DOOR",
    "BULKHEAD"
   ],
   "adjectives": [
    "YELLOW",
    "OUTER"
   ],
   "action": "YELLOW-DOORS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT YELLOW-OUTER\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM AIRLOCK DOOR BULKHEAD)\n\t(ADJECTIVE YELLOW OUTER)\n\t(DESC \"yellow outer door\")\n\t(FLAGS DOORBIT)\n\t(ACTION YELLOW-DOORS-FCN)>",
   "referencedBy": [
    "YELLOW-LOCK-FCN",
    "YELLOW-DOORS-FCN"
   ]
  },
  "SCORCHED-ALIEN": {
   "name": "SCORCHED-ALIEN",
   "file": "dungeon.zil",
   "line": 746,
   "endLine": 755,
   "desc": "scorched alien",
   "ldesc": "Entangled in the wreckage is the scorched body of a creature resembling a\nlarge reptile, almost a miniature allosaurus, clad in the remains of a space\nsuit.",
   "fdesc": null,
   "loc": "YELLOW-DOCK-EDGE",
   "flags": [
    "VILLAIN",
    "OPENBIT",
    "CONTBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "ALIEN",
    "REPTILE"
   ],
   "adjectives": [
    "SCORCHED"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "PINK-KEY"
   ],
   "source": "<OBJECT SCORCHED-ALIEN\n\t(IN YELLOW-DOCK-EDGE)\n\t(SYNONYM ALIEN REPTILE)\n\t(ADJECTIVE SCORCHED)\n\t(LDESC\n\"Entangled in the wreckage is the scorched body of a creature resembling a\nlarge reptile, almost a miniature allosaurus, clad in the remains of a space\nsuit.\")\n\t(DESC \"scorched alien\")\n\t(FLAGS VILLAIN OPENBIT CONTBIT SEARCHBIT)>",
   "referencedBy": [
    "YELLOW-DOCK-FCN"
   ]
  },
  "PINK-KEY": {
   "name": "PINK-KEY",
   "file": "dungeon.zil",
   "line": 757,
   "endLine": 764,
   "desc": "pink rod",
   "ldesc": null,
   "fdesc": "Clutched in the reptile's claw is a pink rod.",
   "loc": "SCORCHED-ALIEN",
   "flags": [
    "TAKEBIT",
    "KEYBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "KEY",
    "RODS",
    "ROD"
   ],
   "adjectives": [
    "PINK",
    "CRYSTAL"
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
   "source": "<OBJECT PINK-KEY\n\t(IN SCORCHED-ALIEN)\n\t(SYNONYM KEY RODS ROD)\n\t(ADJECTIVE PINK CRYSTAL)\n\t(DESC \"pink rod\")\n\t(FLAGS TAKEBIT KEYBIT TRANSBIT)\n\t(VALUE 25)\n\t(FDESC \"Clutched in the reptile's claw is a pink rod.\")>",
   "referencedBy": [
    "CONTROL-SLOT-FCN",
    "SLOTS-AND-SPOTS"
   ]
  },
  "YELLOW-INNER": {
   "name": "YELLOW-INNER",
   "file": "dungeon.zil",
   "line": 766,
   "endLine": 772,
   "desc": "yellow inner door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT"
   ],
   "synonyms": [
    "AIRLOCK",
    "DOOR",
    "BULKHEAD"
   ],
   "adjectives": [
    "YELLOW",
    "INNER"
   ],
   "action": "YELLOW-DOORS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT YELLOW-INNER\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM AIRLOCK DOOR BULKHEAD)\n\t(ADJECTIVE YELLOW INNER)\n\t(DESC \"yellow inner door\")\n\t(FLAGS DOORBIT)\n\t(ACTION YELLOW-DOORS-FCN)>",
   "referencedBy": [
    "YELLOW-LOCK-FCN",
    "YELLOW-DOORS-FCN"
   ]
  },
  "GREEN-OUTER": {
   "name": "GREEN-OUTER",
   "file": "dungeon.zil",
   "line": 798,
   "endLine": 804,
   "desc": "green outer door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT"
   ],
   "synonyms": [
    "DOOR",
    "AIRLOCK",
    "BULKHEAD"
   ],
   "adjectives": [
    "GREEN",
    "OUTER"
   ],
   "action": "GREEN-DOORS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GREEN-OUTER\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM DOOR AIRLOCK BULKHEAD)\n\t(ADJECTIVE GREEN OUTER)\n\t(DESC \"green outer door\")\n\t(FLAGS DOORBIT)\n\t(ACTION GREEN-DOORS-FCN)>",
   "referencedBy": [
    "GREEN-LOCK-FCN",
    "GREEN-DOORS-FCN"
   ]
  },
  "GREEN-INNER": {
   "name": "GREEN-INNER",
   "file": "dungeon.zil",
   "line": 806,
   "endLine": 812,
   "desc": "green inner door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "DOOR",
    "AIRLOCK",
    "BULKHEAD"
   ],
   "adjectives": [
    "GREEN",
    "INNER"
   ],
   "action": "GREEN-DOORS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GREEN-INNER\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM DOOR AIRLOCK BULKHEAD)\n\t(ADJECTIVE GREEN INNER)\n\t(DESC \"green inner door\")\n\t(FLAGS DOORBIT OPENBIT)\n\t(ACTION GREEN-DOORS-FCN)>",
   "referencedBy": [
    "GREEN-LOCK-FCN",
    "GREEN-DOORS-FCN",
    "GREEN-LOCK-EXIT"
   ]
  },
  "SMOKED-GLASS": {
   "name": "SMOKED-GLASS",
   "file": "dungeon.zil",
   "line": 918,
   "endLine": 927,
   "desc": "black visor fragment",
   "ldesc": null,
   "fdesc": "A large fragment of black smoked glass from the chief's\nhelmet visor lies on the floor.",
   "loc": "CARGO-ROOM",
   "flags": [
    "TAKEBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "FRAGMENT",
    "PIECE"
   ],
   "adjectives": [
    "SMOKED",
    "BLACK",
    "GLASS",
    "VISOR"
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
   "source": "<OBJECT SMOKED-GLASS\n\t(IN CARGO-ROOM)\n\t(SYNONYM FRAGMENT PIECE)\n\t(ADJECTIVE SMOKED BLACK GLASS VISOR)\n\t(FDESC\n\"A large fragment of black smoked glass from the chief's\nhelmet visor lies on the floor.\")\n\t(DESC \"black visor fragment\")\n\t(FLAGS TAKEBIT TRANSBIT)\n\t(SIZE 2)>",
   "referencedBy": [
    "SLIDE-PROJECTOR-FCN"
   ]
  },
  "CLEAR-KEY": {
   "name": "CLEAR-KEY",
   "file": "dungeon.zil",
   "line": 929,
   "endLine": 938,
   "desc": "clear rod",
   "ldesc": null,
   "fdesc": "A dazzling rainbow of colors bathes a clear crystal rod which rests\nin the light path.",
   "loc": "SLIDE-PROJECTOR",
   "flags": [
    "INVISIBLE",
    "TRYTAKEBIT",
    "TAKEBIT",
    "KEYBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "KEY",
    "RODS",
    "ROD",
    "RAINBOW"
   ],
   "adjectives": [
    "CLEAR"
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
   "source": "<OBJECT CLEAR-KEY\n\t(IN SLIDE-PROJECTOR)\n\t(SYNONYM KEY RODS ROD RAINBOW)\n\t(ADJECTIVE CLEAR)\n\t(DESC \"clear rod\")\n\t(FDESC\n\"A dazzling rainbow of colors bathes a clear crystal rod which rests\nin the light path.\")\n\t(VALUE 25)\n\t(FLAGS INVISIBLE TRYTAKEBIT TAKEBIT KEYBIT TRANSBIT)>",
   "referencedBy": [
    "CONTROL-BUBBLE-ROOM-FCN",
    "OBSERVATORY-FCN",
    "SLIDE-PROJECTOR-FCN",
    "CONTROL-SLOT-FCN",
    "SLOTS-AND-SPOTS",
    "V-LOOK-SAFELY"
   ]
  },
  "SLIDE-PROJECTOR": {
   "name": "SLIDE-PROJECTOR",
   "file": "dungeon.zil",
   "line": 940,
   "endLine": 950,
   "desc": "holographic projector",
   "ldesc": null,
   "fdesc": "A holographic projector is on one wall.",
   "loc": "OBSERVATORY",
   "flags": [
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "PROJECTOR",
    "LASER"
   ],
   "adjectives": [
    "SLIDE",
    "IMAGE",
    "HOLOGRAPHIC"
   ],
   "action": "SLIDE-PROJECTOR-FCN",
   "descfcn": null,
   "contfcn": "SLIDE-PROJECTOR-FCN",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "10"
    ]
   },
   "contents": [
    "CLEAR-KEY"
   ],
   "source": "<OBJECT SLIDE-PROJECTOR\n\t(IN OBSERVATORY)\n\t(SYNONYM PROJECTOR LASER)\n\t(ADJECTIVE SLIDE IMAGE HOLOGRAPHIC)\n\t(DESC \"holographic projector\")\n\t(FDESC\n\"A holographic projector is on one wall.\")\n\t(FLAGS CONTBIT OPENBIT)\n\t(ACTION SLIDE-PROJECTOR-FCN)\n\t(CONTFCN SLIDE-PROJECTOR-FCN)\n\t(CAPACITY 10)>",
   "referencedBy": [
    "OBSERVATORY-FCN",
    "SLIDE-PROJECTOR-FCN"
   ]
  },
  "LASER-BEAM": {
   "name": "LASER-BEAM",
   "file": "dungeon.zil",
   "line": 952,
   "endLine": 958,
   "desc": "light beam",
   "ldesc": null,
   "fdesc": null,
   "loc": "OBSERVATORY",
   "flags": [
    "NDESCBIT",
    "VILLAIN"
   ],
   "synonyms": [
    "BEAM",
    "ENERGY",
    "LIGHT"
   ],
   "adjectives": [
    "LASER",
    "LIGHT"
   ],
   "action": "LASER-BEAM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LASER-BEAM\n\t(IN OBSERVATORY)\n\t(SYNONYM BEAM ENERGY LIGHT)\n\t(ADJECTIVE LASER LIGHT)\n\t(DESC \"light beam\")\n\t(ACTION LASER-BEAM-FCN)\n\t(FLAGS NDESCBIT VILLAIN)>",
   "referencedBy": []
  },
  "MODEL": {
   "name": "MODEL",
   "file": "dungeon.zil",
   "line": 960,
   "endLine": 965,
   "desc": "model",
   "ldesc": null,
   "fdesc": null,
   "loc": "OBSERVATORY",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "MODEL",
    "SYSTEM",
    "PLANET"
   ],
   "adjectives": [
    "SOLAR"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MODEL\n\t(IN OBSERVATORY)\n\t(SYNONYM MODEL SYSTEM PLANET)\n\t(ADJECTIVE SOLAR)\n\t(DESC \"model\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "CHIEF": {
   "name": "CHIEF",
   "file": "dungeon.zil",
   "line": 1209,
   "endLine": 1215,
   "desc": "weasel chieftain",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "VILLAIN",
    "CONTBIT",
    "OPENBIT",
    "VICBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "ALIEN",
    "CHIEF",
    "CHIEFTAIN"
   ],
   "adjectives": [
    "GREY",
    "WEASEL"
   ],
   "action": "CHIEF-FCN",
   "descfcn": "CHIEF-FCN",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "JUNK-SPACESUIT",
    "BROWN-KEY"
   ],
   "source": "<OBJECT CHIEF\n\t(SYNONYM ALIEN CHIEF CHIEFTAIN)\n\t(ADJECTIVE GREY WEASEL)\n\t(DESC \"weasel chieftain\")\n\t(FLAGS VILLAIN CONTBIT OPENBIT VICBIT SEARCHBIT)\n\t(DESCFCN CHIEF-FCN)\n\t(ACTION CHIEF-FCN)>",
   "referencedBy": [
    "SPACESUIT-FCN",
    "JUNK-SPACESUIT-FCN",
    "VILLAGE-NW-EDGE-FCN",
    "VILLAGE-FCN",
    "GIVE-TO-CHIEF",
    "I-CHIEF-APPEARS",
    "ALIENS-FCN",
    "ZAP-ALIENS",
    "CHIEF-FCN",
    "BROWN-KEY-FCN",
    "WIFE-PSEUDO",
    "CHILD-PSEUDO",
    "MAZE-FCN",
    "I-CHIEF"
   ]
  },
  "GLOBAL-CHIEF": {
   "name": "GLOBAL-CHIEF",
   "file": "dungeon.zil",
   "line": 1217,
   "endLine": 1223,
   "desc": "weasel chieftain",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "VILLAIN",
    "CONTBIT",
    "OPENBIT",
    "VICBIT",
    "SEARCHBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "ALIEN",
    "CHIEF",
    "CHIEFTAIN"
   ],
   "adjectives": [
    "GREY",
    "WEASEL"
   ],
   "action": "CHIEF-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-CHIEF\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM ALIEN CHIEF CHIEFTAIN)\n\t(ADJECTIVE GREY WEASEL)\n\t(DESC \"weasel chieftain\")\n\t(FLAGS VILLAIN CONTBIT OPENBIT VICBIT SEARCHBIT INVISIBLE)\n\t(ACTION CHIEF-FCN)>",
   "referencedBy": [
    "I-CHIEF-APPEARS"
   ]
  },
  "BROWN-KEY": {
   "name": "BROWN-KEY",
   "file": "dungeon.zil",
   "line": 1225,
   "endLine": 1232,
   "desc": "brown rod",
   "ldesc": null,
   "fdesc": null,
   "loc": "CHIEF",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT",
    "TAKEBIT",
    "KEYBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "KEY",
    "RODS",
    "ROD"
   ],
   "adjectives": [
    "CHIEFS",
    "BROWN",
    "CRYSTAL"
   ],
   "action": "BROWN-KEY-FCN",
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
   "source": "<OBJECT BROWN-KEY\n\t(IN CHIEF)\n\t(SYNONYM KEY RODS ROD)\n\t(ADJECTIVE CHIEFS BROWN CRYSTAL)\n\t(DESC \"brown rod\")\n\t(VALUE 25)\n\t(FLAGS NDESCBIT TRYTAKEBIT TAKEBIT KEYBIT TRANSBIT)\n\t(ACTION BROWN-KEY-FCN)>",
   "referencedBy": [
    "I-CHIEF-APPEARS",
    "CHIEF-FCN",
    "BROWN-KEY-FCN",
    "WIFE-PSEUDO",
    "CHILD-PSEUDO",
    "I-CHIEF",
    "CONTROL-SLOT-FCN",
    "SLOTS-AND-SPOTS"
   ]
  },
  "ALIENS": {
   "name": "ALIENS",
   "file": "dungeon.zil",
   "line": 1234,
   "endLine": 1240,
   "desc": "alien tribesmen",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "VILLAIN",
    "VICBIT"
   ],
   "synonyms": [
    "ALIENS",
    "ALIEN",
    "WEASEL"
   ],
   "adjectives": [
    "GREY",
    "HUNTER",
    "TRIBESMAN"
   ],
   "action": "ALIENS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ALIENS\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM ALIENS ALIEN WEASEL)\n\t(ADJECTIVE GREY HUNTER TRIBESMAN)\n\t(DESC \"alien tribesmen\")\n\t(FLAGS VILLAIN VICBIT)\n\t(ACTION ALIENS-FCN)>",
   "referencedBy": [
    "ALIENS-FCN",
    "SPEAR-F"
   ]
  },
  "PALISADE": {
   "name": "PALISADE",
   "file": "dungeon.zil",
   "line": 1242,
   "endLine": 1248,
   "desc": "palisade",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "VILLAIN",
    "CLIMBBIT"
   ],
   "synonyms": [
    "PALISADE",
    "WALL"
   ],
   "adjectives": [
    "MUD",
    "WOOD"
   ],
   "action": "PALISADE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PALISADE\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM PALISADE WALL)\n\t(ADJECTIVE MUD WOOD)\n\t(DESC \"palisade\")\n\t(FLAGS VILLAIN CLIMBBIT)\n\t(ACTION PALISADE-FCN)>",
   "referencedBy": []
  },
  "GLOBAL-MOUSE": {
   "name": "GLOBAL-MOUSE",
   "file": "dungeon.zil",
   "line": 1333,
   "endLine": 1342,
   "desc": "maintenance mouse",
   "ldesc": "There is a maintenance mouse here, cheerfully scouring the\narea for dirt and discarded junk.",
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "CONTBIT",
    "SURFACEBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "MOUSE",
    "SWEEPER",
    "RECEPTACLE"
   ],
   "adjectives": [
    "MAINTENANCE"
   ],
   "action": "MOUSE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "1000"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-MOUSE\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM MOUSE SWEEPER RECEPTACLE)\n\t(ADJECTIVE MAINTENANCE)\n\t(DESC \"maintenance mouse\")\n\t(FLAGS CONTBIT SURFACEBIT TRANSBIT)\n\t(LDESC \"There is a maintenance mouse here, cheerfully scouring the\narea for dirt and discarded junk.\")\n\t(ACTION MOUSE-FCN)\n\t(CAPACITY 1000)>",
   "referencedBy": [
    "MOUSE-FCN"
   ]
  },
  "MOUSE": {
   "name": "MOUSE",
   "file": "dungeon.zil",
   "line": 1344,
   "endLine": 1353,
   "desc": "maintenance mouse",
   "ldesc": null,
   "fdesc": null,
   "loc": "BLUE-RED-FOUR",
   "flags": [
    "VEHBIT",
    "CONTBIT",
    "SURFACEBIT",
    "OPENBIT",
    "TRANSBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "MOUSE",
    "SWEEPER",
    "RECEPTACLE",
    "TRAY"
   ],
   "adjectives": [
    "MAINTENANCE"
   ],
   "action": "MOUSE-FCN",
   "descfcn": "MOUSE-FCN",
   "contfcn": "MOUSE-CONT",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "1000"
    ]
   },
   "contents": [],
   "source": "<OBJECT MOUSE\n\t(IN BLUE-RED-FOUR)\n\t(SYNONYM MOUSE SWEEPER RECEPTACLE TRAY)\n\t(ADJECTIVE MAINTENANCE)\n\t(DESC \"maintenance mouse\")\n\t(FLAGS VEHBIT CONTBIT SURFACEBIT OPENBIT TRANSBIT SEARCHBIT)\n\t(DESCFCN MOUSE-FCN)\n\t(ACTION MOUSE-FCN)\n\t(CONTFCN MOUSE-CONT)\n\t(CAPACITY 1000)>",
   "referencedBy": [
    "MOUSE-GOODIES",
    "MOUSE-FCN",
    "I-MOUSE",
    "MOVE-MOUSE",
    "DISK-FCN",
    "PRE-BOARD"
   ]
  },
  "MOUSE-HOLE": {
   "name": "MOUSE-HOLE",
   "file": "dungeon.zil",
   "line": 1355,
   "endLine": 1361,
   "desc": "mouse hole",
   "ldesc": "There is a barely visible mouse hole in the wall here.",
   "fdesc": null,
   "loc": null,
   "flags": [
    "DOORBIT"
   ],
   "synonyms": [
    "HOLE",
    "DOOR"
   ],
   "adjectives": [
    "MOUSE"
   ],
   "action": "HOLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MOUSE-HOLE\n\t(SYNONYM HOLE DOOR)\n\t(ADJECTIVE MOUSE)\n\t(DESC \"mouse hole\")\n\t(FLAGS DOORBIT)\n\t(LDESC \"There is a barely visible mouse hole in the wall here.\")\n\t(ACTION HOLE-FCN)>",
   "referencedBy": [
    "I-MOUSE"
   ]
  },
  "RED-DISK": {
   "name": "RED-DISK",
   "file": "dungeon.zil",
   "line": 1370,
   "endLine": 1381,
   "desc": "red disk",
   "ldesc": "There is a thin red disk the size of a manhole cover here.",
   "fdesc": "A thin red disk the size of a manhole cover hangs on the wall.",
   "loc": "FF-ROOM",
   "flags": [
    "TAKEBIT",
    "TRYTAKEBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT",
    "VEHBIT"
   ],
   "synonyms": [
    "DISK",
    "DISKS"
   ],
   "adjectives": [
    "RED",
    "THIN"
   ],
   "action": "DISK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "10"
    ],
    "CAPACITY": [
     "200"
    ]
   },
   "contents": [],
   "source": "<OBJECT RED-DISK\n\t(IN FF-ROOM)\n\t(SYNONYM DISK DISKS)\n\t(ADJECTIVE RED THIN)\n\t(FDESC\n\"A thin red disk the size of a manhole cover hangs on the wall.\")\n\t(LDESC \"There is a thin red disk the size of a manhole cover here.\")\n\t(DESC \"red disk\")\n\t(FLAGS TAKEBIT TRYTAKEBIT SURFACEBIT CONTBIT OPENBIT VEHBIT)\n\t(ACTION DISK-FCN)\n\t(SIZE 10)\n\t(CAPACITY 200)>",
   "referencedBy": [
    "I-MOUSE",
    "FF-FCN",
    "JUNK-INSIDE",
    "JUNK-OUTSIDE",
    "DISK-FCN",
    "DISKS-OFF?",
    "DISK-SWITCH",
    "OTHER-DISK",
    "BOMBS-AWAY",
    "RIPOFF"
   ]
  },
  "BLUE-DISK": {
   "name": "BLUE-DISK",
   "file": "dungeon.zil",
   "line": 1383,
   "endLine": 1394,
   "desc": "blue disk",
   "ldesc": "There is a thin blue disk the size of a manhole cover here.",
   "fdesc": "A thin blue disk the size of a manhole cover hangs on the wall.",
   "loc": "FF-ROOM",
   "flags": [
    "TAKEBIT",
    "TRYTAKEBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT",
    "VEHBIT"
   ],
   "synonyms": [
    "DISK",
    "DISKS"
   ],
   "adjectives": [
    "BLUE",
    "THIN"
   ],
   "action": "DISK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "200"
    ],
    "SIZE": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT BLUE-DISK\n\t(IN FF-ROOM)\n\t(SYNONYM DISK DISKS)\n\t(ADJECTIVE BLUE THIN)\n\t(FDESC\n\"A thin blue disk the size of a manhole cover hangs on the wall.\")\n\t(LDESC \"There is a thin blue disk the size of a manhole cover here.\")\n\t(DESC \"blue disk\")\n\t(FLAGS TAKEBIT TRYTAKEBIT SURFACEBIT CONTBIT OPENBIT VEHBIT)\n\t(ACTION DISK-FCN)\n\t(CAPACITY 200)\n\t(SIZE 10)>",
   "referencedBy": [
    "I-MOUSE",
    "FF-FCN",
    "JUNK-INSIDE",
    "JUNK-OUTSIDE",
    "DISK-FCN",
    "DISKS-OFF?",
    "OTHER-DISK",
    "BOMBS-AWAY",
    "RIPOFF"
   ]
  },
  "FF-DIAL": {
   "name": "FF-DIAL",
   "file": "dungeon.zil",
   "line": 1396,
   "endLine": 1402,
   "desc": "dial",
   "ldesc": null,
   "fdesc": null,
   "loc": "FF-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "DIAL"
   ],
   "adjectives": [
    "CONTROL"
   ],
   "action": "FF-DIAL-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FF-DIAL\n\t(IN FF-ROOM)\n\t(SYNONYM DIAL)\n\t(ADJECTIVE CONTROL)\n\t(DESC \"dial\")\n\t(FLAGS NDESCBIT)\n\t(ACTION FF-DIAL-FCN)>",
   "referencedBy": []
  },
  "FORCE-FIELD-1": {
   "name": "FORCE-FIELD-1",
   "file": "dungeon.zil",
   "line": 1404,
   "endLine": 1410,
   "desc": "silver sphere",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT",
    "VEHBIT"
   ],
   "synonyms": [
    "FIELD",
    "SPHERE",
    "BALL",
    "GLOBE"
   ],
   "adjectives": [
    "FORCE",
    "SILVER"
   ],
   "action": "FF-FCN",
   "descfcn": "FF-FCN",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "BLUE-KEY"
   ],
   "source": "<OBJECT FORCE-FIELD-1\n\t(SYNONYM FIELD SPHERE BALL GLOBE)\n\t(ADJECTIVE FORCE SILVER)\n\t(DESC \"silver sphere\")\n\t(DESCFCN FF-FCN)\n\t(FLAGS NDESCBIT CONTBIT OPENBIT VEHBIT)\n\t(ACTION FF-FCN)>",
   "referencedBy": [
    "GLOBE-SIZE",
    "FF-FCN",
    "BLUE-KEY-FCN",
    "JUNK-INSIDE",
    "DISK-FCN",
    "RIPOFF"
   ]
  },
  "FORCE-FIELD-2": {
   "name": "FORCE-FIELD-2",
   "file": "dungeon.zil",
   "line": 1412,
   "endLine": 1419,
   "desc": "silver sphere",
   "ldesc": null,
   "fdesc": null,
   "loc": "FF-ROOM",
   "flags": [
    "NDESCBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT",
    "VEHBIT"
   ],
   "synonyms": [
    "FIELD",
    "SPHERE",
    "BALL",
    "GLOBE"
   ],
   "adjectives": [
    "FORCE",
    "SILVER"
   ],
   "action": "FF-FCN",
   "descfcn": "FF-FCN",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FORCE-FIELD-2\n\t(IN FF-ROOM)\n\t(SYNONYM FIELD SPHERE BALL GLOBE)\n\t(ADJECTIVE FORCE SILVER)\n\t(DESC \"silver sphere\")\n\t(DESCFCN FF-FCN)\n\t(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT VEHBIT)\n\t(ACTION FF-FCN)>",
   "referencedBy": [
    "FF-FCN",
    "GO"
   ]
  },
  "FF-BOWL-2": {
   "name": "FF-BOWL-2",
   "file": "dungeon.zil",
   "line": 1421,
   "endLine": 1423,
   "desc": "bowl",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [
    "FIELD"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FF-BOWL-2\n\t(SYNONYM FIELD)\n\t(DESC \"bowl\")>",
   "referencedBy": [
    "FF-FCN",
    "DISK-FCN"
   ]
  },
  "FORCE-FIELD-3": {
   "name": "FORCE-FIELD-3",
   "file": "dungeon.zil",
   "line": 1425,
   "endLine": 1431,
   "desc": "silver sphere",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT",
    "VEHBIT"
   ],
   "synonyms": [
    "FIELD",
    "SPHERE",
    "BALL",
    "GLOBE"
   ],
   "adjectives": [
    "FORCE",
    "SILVER"
   ],
   "action": "FF-FCN",
   "descfcn": "FF-FCN",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FORCE-FIELD-3\n\t(SYNONYM FIELD SPHERE BALL GLOBE)\n\t(ADJECTIVE FORCE SILVER)\n\t(DESC \"silver sphere\")\n\t(DESCFCN FF-FCN)\n\t(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT VEHBIT)\n\t(ACTION FF-FCN)>",
   "referencedBy": [
    "FF-FCN"
   ]
  },
  "FF-BOWL-3": {
   "name": "FF-BOWL-3",
   "file": "dungeon.zil",
   "line": 1433,
   "endLine": 1435,
   "desc": "bowl",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [
    "FIELD"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FF-BOWL-3\n\t(SYNONYM FIELD)\n\t(DESC \"bowl\")>",
   "referencedBy": [
    "FF-FCN",
    "DISK-FCN"
   ]
  },
  "FORCE-FIELD-4": {
   "name": "FORCE-FIELD-4",
   "file": "dungeon.zil",
   "line": 1437,
   "endLine": 1443,
   "desc": "silver sphere",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT",
    "VEHBIT"
   ],
   "synonyms": [
    "FIELD",
    "SPHERE",
    "BALL",
    "GLOBE"
   ],
   "adjectives": [
    "FORCE",
    "SILVER"
   ],
   "action": "FF-FCN",
   "descfcn": "FF-FCN",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FORCE-FIELD-4\n\t(SYNONYM FIELD SPHERE BALL GLOBE)\n\t(ADJECTIVE FORCE SILVER)\n\t(DESC \"silver sphere\")\n\t(DESCFCN FF-FCN)\n\t(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT VEHBIT)\n\t(ACTION FF-FCN)>",
   "referencedBy": [
    "FF-FCN"
   ]
  },
  "FF-BOWL-4": {
   "name": "FF-BOWL-4",
   "file": "dungeon.zil",
   "line": 1445,
   "endLine": 1447,
   "desc": "bowl",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [
    "FIELD"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FF-BOWL-4\n\t(SYNONYM FIELD)\n\t(DESC \"bowl\")>",
   "referencedBy": [
    "FF-FCN",
    "DISK-FCN"
   ]
  },
  "PROJECTOR": {
   "name": "PROJECTOR",
   "file": "dungeon.zil",
   "line": 1458,
   "endLine": 1464,
   "desc": "projector",
   "ldesc": null,
   "fdesc": null,
   "loc": "FF-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PROJECTOR",
    "APPARATUS"
   ],
   "adjectives": [
    "FORMIDABLE"
   ],
   "action": "PROJECTOR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PROJECTOR\n\t(IN FF-ROOM)\n\t(SYNONYM PROJECTOR APPARATUS)\n\t(ADJECTIVE FORMIDABLE)\n\t(DESC \"projector\")\n\t(ACTION PROJECTOR-FCN)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "BEAM": {
   "name": "BEAM",
   "file": "dungeon.zil",
   "line": 1466,
   "endLine": 1472,
   "desc": "beam of energy",
   "ldesc": null,
   "fdesc": null,
   "loc": "FF-ROOM",
   "flags": [
    "NDESCBIT",
    "VILLAIN"
   ],
   "synonyms": [
    "BEAM"
   ],
   "adjectives": [
    "ENERGY"
   ],
   "action": "BEAM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BEAM\n\t(IN FF-ROOM)\n\t(SYNONYM BEAM)\n\t(ADJECTIVE ENERGY)\n\t(DESC \"beam of energy\")\n\t(ACTION BEAM-FCN)\n\t(FLAGS NDESCBIT VILLAIN)>",
   "referencedBy": []
  },
  "BLUE-KEY": {
   "name": "BLUE-KEY",
   "file": "dungeon.zil",
   "line": 1474,
   "endLine": 1481,
   "desc": "blue rod",
   "ldesc": null,
   "fdesc": null,
   "loc": "FORCE-FIELD-1",
   "flags": [
    "TRYTAKEBIT",
    "TAKEBIT",
    "KEYBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "KEY",
    "RODS",
    "ROD"
   ],
   "adjectives": [
    "BLUE",
    "CRYSTAL"
   ],
   "action": "BLUE-KEY-FCN",
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
   "source": "<OBJECT BLUE-KEY\n\t(IN FORCE-FIELD-1)\n\t(SYNONYM KEY RODS ROD)\n\t(ADJECTIVE BLUE CRYSTAL)\n\t(DESC \"blue rod\")\n\t(ACTION BLUE-KEY-FCN)\n\t(VALUE 25)\n\t(FLAGS TRYTAKEBIT TAKEBIT KEYBIT TRANSBIT)>",
   "referencedBy": [
    "GLOBE-SIZE",
    "FF-FCN",
    "JUNK-INSIDE",
    "DISK-FCN",
    "CONTROL-SLOT-FCN",
    "SLOTS-AND-SPOTS",
    "RIPOFF"
   ]
  },
  "TRASH-BIN": {
   "name": "TRASH-BIN",
   "file": "dungeon.zil",
   "line": 1507,
   "endLine": 1518,
   "desc": "trash bin",
   "ldesc": "There is a trash bin full of junk of all sorts here. Someone appears to have\nbeen dumping things for years (decades? centuries?) and never cleaning them\nout.",
   "fdesc": null,
   "loc": "GARAGE",
   "flags": [
    "RLANDBIT",
    "OPENBIT",
    "CONTBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "BIN"
   ],
   "adjectives": [
    "TRASH",
    "JUNK"
   ],
   "action": "TRASH-BIN-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "1000"
    ]
   },
   "contents": [],
   "source": "<OBJECT TRASH-BIN\n\t(IN GARAGE)\n\t(SYNONYM BIN)\n\t(ADJECTIVE TRASH JUNK)\n\t(DESC \"trash bin\")\n\t(FLAGS RLANDBIT OPENBIT CONTBIT SEARCHBIT)\n\t(LDESC\n\"There is a trash bin full of junk of all sorts here. Someone appears to have\nbeen dumping things for years (decades? centuries?) and never cleaning them\nout.\")\n\t(ACTION TRASH-BIN-FCN)\n\t(CAPACITY 1000)>",
   "referencedBy": [
    "I-MOUSE",
    "TRASH-BIN-FCN",
    "FIRSTER"
   ]
  },
  "GREEN-KEY": {
   "name": "GREEN-KEY",
   "file": "dungeon.zil",
   "line": 1520,
   "endLine": 1525,
   "desc": "green rod",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "KEYBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "KEY",
    "RODS",
    "ROD"
   ],
   "adjectives": [
    "GREEN",
    "CRYSTAL"
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
   "source": "<OBJECT GREEN-KEY\n\t(SYNONYM KEY RODS ROD)\n\t(ADJECTIVE GREEN CRYSTAL)\n\t(DESC \"green rod\")\n\t(VALUE 25)\n\t(FLAGS TAKEBIT KEYBIT TRANSBIT)>",
   "referencedBy": [
    "TRASH-BIN-FCN",
    "CONTROL-SLOT-FCN",
    "SLOTS-AND-SPOTS"
   ]
  },
  "SKELETON": {
   "name": "SKELETON",
   "file": "dungeon.zil",
   "line": 1547,
   "endLine": 1554,
   "desc": "alien skeleton",
   "ldesc": null,
   "fdesc": null,
   "loc": "THRONE-ROOM",
   "flags": [
    "TAKEBIT",
    "NDESCBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "SKELETON"
   ],
   "adjectives": [
    "ALIEN"
   ],
   "action": "SKELETON-FCN",
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
   "source": "<OBJECT SKELETON\n\t(IN THRONE-ROOM)\n\t(SYNONYM SKELETON)\n\t(ADJECTIVE ALIEN)\n\t(DESC \"alien skeleton\")\n\t(FLAGS TAKEBIT NDESCBIT TRYTAKEBIT)\n\t(ACTION SKELETON-FCN)\n\t(SIZE 10)>",
   "referencedBy": []
  },
  "VIOLET-KEY": {
   "name": "VIOLET-KEY",
   "file": "dungeon.zil",
   "line": 1556,
   "endLine": 1562,
   "desc": "violet rod",
   "ldesc": null,
   "fdesc": null,
   "loc": "THRONE-ROOM",
   "flags": [
    "INVISIBLE",
    "TAKEBIT",
    "KEYBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "KEY",
    "RODS",
    "ROD"
   ],
   "adjectives": [
    "VIOLET",
    "PURPLE",
    "CRYSTAL"
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
   "source": "<OBJECT VIOLET-KEY\n\t(IN THRONE-ROOM)\n\t(SYNONYM KEY RODS ROD)\n\t(ADJECTIVE VIOLET PURPLE CRYSTAL)\n\t(DESC \"violet rod\")\n\t(VALUE 25)\n\t(FLAGS INVISIBLE TAKEBIT KEYBIT TRANSBIT)>",
   "referencedBy": [
    "VILLAGE-FCN",
    "SKELETON-FCN",
    "GREEN-LOCK-EXIT",
    "GREEN-THREE-FCN",
    "ALIEN-GUARDS",
    "CONTROL-SLOT-FCN",
    "SLOTS-AND-SPOTS"
   ]
  },
  "GRUE-SIGN": {
   "name": "GRUE-SIGN",
   "file": "dungeon.zil",
   "line": 1646,
   "endLine": 1660,
   "desc": "chewed sign",
   "ldesc": null,
   "fdesc": null,
   "loc": "GRUE-CAGE",
   "flags": [
    "NDESCBIT",
    "READBIT"
   ],
   "synonyms": [
    "SIGN"
   ],
   "adjectives": [
    "CHEWED"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The sign, a liquid crystal display, is oddly in English:|\n|\n\"     Common Grues (Grue Vulgaris)|\n|\nThe common grue, an inhabitant of the dark underground passages of a\nforgotten planet, is here exhibited for your pleasure in a typical family\ngroup. Note particularly the slavering fangs which reach such impressive\nsize in the adults. Feeding the grues is not recommended.\""
    ]
   },
   "contents": [],
   "source": "<OBJECT GRUE-SIGN\n\t(IN GRUE-CAGE)\n\t(SYNONYM SIGN)\n\t(ADJECTIVE CHEWED)\n\t(DESC \"chewed sign\")\n\t(FLAGS NDESCBIT READBIT)\n\t(TEXT\n\"The sign, a liquid crystal display, is oddly in English:|\n|\n\\\"     Common Grues (Grue Vulgaris)|\n|\nThe common grue, an inhabitant of the dark underground passages of a\nforgotten planet, is here exhibited for your pleasure in a typical family\ngroup. Note particularly the slavering fangs which reach such impressive\nsize in the adults. Feeding the grues is not recommended.\\\"\")>",
   "referencedBy": []
  },
  "GRUE": {
   "name": "GRUE",
   "file": "dungeon.zil",
   "line": 1662,
   "endLine": 1667,
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
  "NEST": {
   "name": "NEST",
   "file": "dungeon.zil",
   "line": 1678,
   "endLine": 1686,
   "desc": "nest",
   "ldesc": null,
   "fdesc": null,
   "loc": "NEST-CAGE",
   "flags": [
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT",
    "VILLAIN",
    "SEARCHBIT"
   ],
   "synonyms": [
    "NEST"
   ],
   "adjectives": [
    "MUD"
   ],
   "action": "NEST-FCN",
   "descfcn": null,
   "contfcn": "NEST-CONT",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "1000"
    ]
   },
   "contents": [
    "RED-KEY"
   ],
   "source": "<OBJECT NEST\n\t(IN NEST-CAGE)\n\t(SYNONYM NEST)\n\t(ADJECTIVE MUD)\n\t(DESC \"nest\")\n\t(FLAGS NDESCBIT OPENBIT CONTBIT VILLAIN SEARCHBIT)\n\t(ACTION NEST-FCN)\n\t(CONTFCN NEST-CONT)\n\t(CAPACITY 1000)>",
   "referencedBy": [
    "NEST-CAGE-FCN",
    "RAT-ANT-FCN",
    "NEST-FCN",
    "I-NEST"
   ]
  },
  "SMASHED-NEST": {
   "name": "SMASHED-NEST",
   "file": "dungeon.zil",
   "line": 1688,
   "endLine": 1695,
   "desc": "smashed nest",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT",
    "VILLAIN",
    "SEARCHBIT"
   ],
   "synonyms": [
    "NEST"
   ],
   "adjectives": [
    "SMASHED"
   ],
   "action": "NEST-FCN",
   "descfcn": null,
   "contfcn": "SMASHED-NEST-CONT",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "1000"
    ]
   },
   "contents": [],
   "source": "<OBJECT SMASHED-NEST\n\t(SYNONYM NEST)\n\t(ADJECTIVE SMASHED)\n\t(DESC \"smashed nest\")\n\t(FLAGS NDESCBIT OPENBIT CONTBIT VILLAIN SEARCHBIT)\n\t(ACTION NEST-FCN)\n\t(CONTFCN SMASHED-NEST-CONT)\n\t(CAPACITY 1000)>",
   "referencedBy": [
    "NEST-CAGE-FCN",
    "RAT-ANT-FCN",
    "NEST-FCN",
    "I-NEST"
   ]
  },
  "RED-KEY": {
   "name": "RED-KEY",
   "file": "dungeon.zil",
   "line": 1697,
   "endLine": 1703,
   "desc": "red rod",
   "ldesc": null,
   "fdesc": null,
   "loc": "NEST",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT",
    "TAKEBIT",
    "KEYBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "KEY",
    "RODS",
    "ROD"
   ],
   "adjectives": [
    "RED",
    "CRYSTAL"
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
   "source": "<OBJECT RED-KEY\n\t(IN NEST)\n\t(SYNONYM KEY RODS ROD)\n\t(ADJECTIVE RED CRYSTAL)\n\t(DESC \"red rod\")\n\t(VALUE 25)\n\t(FLAGS NDESCBIT TRYTAKEBIT TAKEBIT KEYBIT TRANSBIT)>",
   "referencedBy": [
    "NEST-CAGE-FCN",
    "NEST-FCN",
    "RED-SLOT-F"
   ]
  },
  "RAT-ANT": {
   "name": "RAT-ANT",
   "file": "dungeon.zil",
   "line": 1705,
   "endLine": 1711,
   "desc": "rat-ant",
   "ldesc": null,
   "fdesc": null,
   "loc": "NEST-CAGE",
   "flags": [
    "NDESCBIT",
    "VICBIT",
    "VILLAIN"
   ],
   "synonyms": [
    "ANT",
    "RAT-ANT"
   ],
   "adjectives": [
    "RAT"
   ],
   "action": "RAT-ANT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RAT-ANT\n\t(IN NEST-CAGE)\n\t(SYNONYM ANT RAT-ANT)\n\t(ADJECTIVE RAT)\n\t(DESC \"rat-ant\")\n\t(FLAGS NDESCBIT VICBIT VILLAIN)\n\t(ACTION RAT-ANT-FCN)>",
   "referencedBy": [
    "RAT-ANT-FCN",
    "SPEAR-F"
   ]
  },
  "ENV-COMPUTER": {
   "name": "ENV-COMPUTER",
   "file": "dungeon.zil",
   "line": 1732,
   "endLine": 1737,
   "desc": "computer",
   "ldesc": null,
   "fdesc": null,
   "loc": "COMPUTER-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "COMPUTER"
   ],
   "adjectives": [],
   "action": "SWITCH-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ENV-COMPUTER\n\t(IN COMPUTER-ROOM)\n\t(SYNONYM COMPUTER)\n\t(DESC \"computer\")\n\t(FLAGS NDESCBIT)\n\t(ACTION SWITCH-FCN)>",
   "referencedBy": []
  },
  "ON-OFF-SWITCH": {
   "name": "ON-OFF-SWITCH",
   "file": "dungeon.zil",
   "line": 1739,
   "endLine": 1745,
   "desc": "on-off switch",
   "ldesc": null,
   "fdesc": null,
   "loc": "COMPUTER-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "SWITCH",
    "POWER"
   ],
   "adjectives": [
    "ON",
    "OFF"
   ],
   "action": "SWITCH-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ON-OFF-SWITCH\n\t(IN COMPUTER-ROOM)\n\t(SYNONYM SWITCH POWER)\n\t(ADJECTIVE ON OFF)\n\t(DESC \"on-off switch\")\n\t(FLAGS NDESCBIT)\n\t(ACTION SWITCH-FCN)>",
   "referencedBy": []
  },
  "PANEL": {
   "name": "PANEL",
   "file": "dungeon.zil",
   "line": 1747,
   "endLine": 1754,
   "desc": "access panel",
   "ldesc": null,
   "fdesc": null,
   "loc": "COMPUTER-ROOM",
   "flags": [
    "CONTBIT",
    "NDESCBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "PANEL"
   ],
   "adjectives": [
    "ACCESS"
   ],
   "action": "PANEL-FCN",
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
    "SLOT"
   ],
   "source": "<OBJECT PANEL\n\t(IN COMPUTER-ROOM)\n\t(SYNONYM PANEL)\n\t(ADJECTIVE ACCESS)\n\t(DESC \"access panel\")\n\t(FLAGS CONTBIT NDESCBIT SEARCHBIT)\n\t(CAPACITY 100)\n\t(ACTION PANEL-FCN)>",
   "referencedBy": [
    "PANEL-FCN",
    "COMPUTER-ROOM-FCN"
   ]
  },
  "SLOT": {
   "name": "SLOT",
   "file": "dungeon.zil",
   "line": 1756,
   "endLine": 1761,
   "desc": "slot",
   "ldesc": null,
   "fdesc": null,
   "loc": "PANEL",
   "flags": [
    "CONTBIT",
    "OPENBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "SLOT",
    "HOLE"
   ],
   "adjectives": [],
   "action": "SLOT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SLOT\n\t(IN PANEL)\n\t(SYNONYM SLOT HOLE)\n\t(DESC \"slot\")\n\t(FLAGS CONTBIT OPENBIT SEARCHBIT)\n\t(ACTION SLOT-FCN)>",
   "referencedBy": [
    "PANEL-FCN",
    "SLOT-FCN",
    "SLOT-DOOR",
    "CONTROL-SLOT-FCN",
    "CARD-F",
    "SWITCH-FCN"
   ]
  },
  "CARD": {
   "name": "CARD",
   "file": "dungeon.zil",
   "line": 1763,
   "endLine": 1770,
   "desc": "metal and ceramic square",
   "ldesc": null,
   "fdesc": null,
   "loc": "REPAIR-ROOM",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "CARD",
    "SQUARE"
   ],
   "adjectives": [
    "COMPUTER",
    "METAL",
    "CERAMIC"
   ],
   "action": "CARD-F",
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
   "source": "<OBJECT CARD\n\t(IN REPAIR-ROOM)\n\t(SYNONYM CARD SQUARE)\n\t(ADJECTIVE COMPUTER METAL CERAMIC)\n\t(DESC \"metal and ceramic square\")\n\t(FLAGS TAKEBIT)\n\t(ACTION CARD-F)\n\t(SIZE 3)>",
   "referencedBy": [
    "PANEL-FCN",
    "SLOT-FCN",
    "I-MELTDOWN",
    "CONTROL-SLOT-FCN",
    "CARD-F",
    "SWITCH-FCN"
   ]
  },
  "GOLD-KEY": {
   "name": "GOLD-KEY",
   "file": "dungeon.zil",
   "line": 1772,
   "endLine": 1777,
   "desc": "gold rod",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "KEYBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "KEY",
    "RODS",
    "ROD"
   ],
   "adjectives": [
    "GOLD",
    "CRYSTAL"
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
   "source": "<OBJECT GOLD-KEY\n\t(SYNONYM KEY RODS ROD)\n\t(ADJECTIVE GOLD CRYSTAL)\n\t(DESC \"gold rod\")\n\t(VALUE 25)\n\t(FLAGS TAKEBIT KEYBIT TRANSBIT)>",
   "referencedBy": [
    "GOLD-SLOT-FCN",
    "CONTROL-BUBBLE-ENTRANCE-FCN",
    "SWITCH-FCN"
   ]
  },
  "ZAP-GUN": {
   "name": "ZAP-GUN",
   "file": "dungeon.zil",
   "line": 1783,
   "endLine": 1795,
   "desc": "ray gun",
   "ldesc": null,
   "fdesc": "Mounted in a wall-rack is a genuine-looking ray gun, large and formidable,\nwith a long, ugly barrel. It's difficult to tell whether or not the gun is\nfully charged.",
   "loc": "WEAPONS-DECK",
   "flags": [
    "TAKEBIT",
    "WEAPONBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "GUN",
    "BARREL",
    "RAYGUN"
   ],
   "adjectives": [
    "RAY"
   ],
   "action": "ZAP-GUN-FCN",
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
   "contents": [
    "SILVER-KEY"
   ],
   "source": "<OBJECT ZAP-GUN\n\t(IN WEAPONS-DECK)\n\t(SYNONYM GUN BARREL RAYGUN)\n\t(ADJECTIVE RAY)\n\t(DESC \"ray gun\")\n\t(FDESC\n\"Mounted in a wall-rack is a genuine-looking ray gun, large and formidable,\nwith a long, ugly barrel. It's difficult to tell whether or not the gun is\nfully charged.\")\n\t(FLAGS TAKEBIT WEAPONBIT CONTBIT)\n\t(ACTION ZAP-GUN-FCN)\n\t(CAPACITY 5)\n\t(SIZE 10)>",
   "referencedBy": [
    "TRANSLATOR-FCN",
    "SPACESUIT-FCN",
    "ZAP-ALIENS",
    "CAN-ZAP?",
    "ZAP-GUN-FCN",
    "PRE-ZAP"
   ]
  },
  "SILVER-KEY": {
   "name": "SILVER-KEY",
   "file": "dungeon.zil",
   "line": 1797,
   "endLine": 1803,
   "desc": "silver rod",
   "ldesc": null,
   "fdesc": null,
   "loc": "ZAP-GUN",
   "flags": [
    "TRYTAKEBIT",
    "TAKEBIT",
    "KEYBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "KEY",
    "RODS",
    "ROD"
   ],
   "adjectives": [
    "SILVER",
    "CRYSTAL"
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
   "source": "<OBJECT SILVER-KEY\n\t(IN ZAP-GUN)\n\t(SYNONYM KEY RODS ROD)\n\t(ADJECTIVE SILVER CRYSTAL)\n\t(DESC \"silver rod\")\n\t(VALUE 25)\n\t(FLAGS TRYTAKEBIT TAKEBIT KEYBIT TRANSBIT)>",
   "referencedBy": [
    "CAN-ZAP?",
    "ZAP-GUN-FCN",
    "DRIVE-BUBBLE-ENTRANCE-FCN",
    "SILVER-SLOT-FCN"
   ]
  },
  "TREE": {
   "name": "TREE",
   "file": "dungeon.zil",
   "line": 1837,
   "endLine": 1843,
   "desc": "tree",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "CLIMBBIT"
   ],
   "synonyms": [
    "TREE"
   ],
   "adjectives": [
    "HUGE",
    "SMALL",
    "ENORMOUS"
   ],
   "action": "TREE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TREE\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM TREE)\n\t(ADJECTIVE HUGE SMALL ENORMOUS)\n\t(DESC \"tree\")\n\t(ACTION TREE-FCN)\n\t(FLAGS NDESCBIT CLIMBBIT)>",
   "referencedBy": []
  },
  "SILVER-SLOT": {
   "name": "SILVER-SLOT",
   "file": "dungeon.zil",
   "line": 1894,
   "endLine": 1903,
   "desc": "silver slot",
   "ldesc": null,
   "fdesc": null,
   "loc": "DRIVE-BUBBLE-ENTRANCE",
   "flags": [
    "OPENBIT",
    "CONTBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "SLOT",
    "SPOT",
    "HOLE"
   ],
   "adjectives": [
    "SILVER"
   ],
   "action": "SILVER-SLOT-FCN",
   "descfcn": null,
   "contfcn": "SILVER-SLOT-CONT",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "KEY": [
     "TO",
     "SILVER-KEY"
    ],
    "CAPACITY": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT SILVER-SLOT\n\t(IN DRIVE-BUBBLE-ENTRANCE)\n\t(SYNONYM SLOT SPOT HOLE)\n\t(ADJECTIVE SILVER)\n\t(DESC \"silver slot\")\n\t(FLAGS OPENBIT CONTBIT NDESCBIT)\n\t(ACTION SILVER-SLOT-FCN)\n\t(CONTFCN SILVER-SLOT-CONT)\n\t(KEY TO SILVER-KEY)\n\t(CAPACITY 5)>",
   "referencedBy": [
    "DRIVE-BUBBLE-ENTRANCE-FCN",
    "SILVER-SLOT-FCN"
   ]
  },
  "WHITE-SLOT": {
   "name": "WHITE-SLOT",
   "file": "dungeon.zil",
   "line": 1940,
   "endLine": 1948,
   "desc": "white slot",
   "ldesc": null,
   "fdesc": null,
   "loc": "DRIVE-BUBBLE-ROOM",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "SLOT",
    "PANEL",
    "HOLE"
   ],
   "adjectives": [
    "WHITE"
   ],
   "action": "WHITE-SLOT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "KEY": [
     "TO",
     "WHITE-KEY"
    ],
    "CAPACITY": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT WHITE-SLOT\n\t(IN DRIVE-BUBBLE-ROOM)\n\t(SYNONYM SLOT PANEL HOLE)\n\t(ADJECTIVE WHITE)\n\t(DESC \"white slot\")\n\t(KEY TO WHITE-KEY)\n\t(FLAGS NDESCBIT CONTBIT OPENBIT SEARCHBIT)\n\t(ACTION WHITE-SLOT-FCN)\n\t(CAPACITY 10)>",
   "referencedBy": [
    "DRIVE-BUBBLE-ROOM-FCN",
    "WHITE-KEY-FCN",
    "WHITE-SLOT-FCN",
    "SPEED-SELECT-FCN"
   ]
  },
  "BLACK-SLOT": {
   "name": "BLACK-SLOT",
   "file": "dungeon.zil",
   "line": 1950,
   "endLine": 1957,
   "desc": "black slot",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "SLOT",
    "PANEL",
    "HOLE"
   ],
   "adjectives": [
    "BLACK"
   ],
   "action": "BLACK-SLOT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "KEY": [
     "TO",
     "BLACK-KEY"
    ],
    "CAPACITY": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT BLACK-SLOT\n\t(SYNONYM SLOT PANEL HOLE)\n\t(ADJECTIVE BLACK)\n\t(DESC \"black slot\")\n\t(KEY TO BLACK-KEY)\n\t(FLAGS NDESCBIT CONTBIT OPENBIT SEARCHBIT)\n\t(ACTION BLACK-SLOT-FCN)\n\t(CAPACITY 10)>",
   "referencedBy": [
    "WHITE-KEY-FCN"
   ]
  },
  "WHITE-KEY": {
   "name": "WHITE-KEY",
   "file": "dungeon.zil",
   "line": 1959,
   "endLine": 1968,
   "desc": "white rod",
   "ldesc": null,
   "fdesc": "Floating near a white slot in the wall is a white rod.",
   "loc": "DRIVE-BUBBLE-ROOM",
   "flags": [
    "TAKEBIT",
    "KEYBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "KEY",
    "RODS",
    "ROD"
   ],
   "adjectives": [
    "WHITE",
    "CRYSTAL"
   ],
   "action": "WHITE-KEY-FCN",
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
   "source": "<OBJECT WHITE-KEY\n\t(IN DRIVE-BUBBLE-ROOM)\n\t(SYNONYM KEY RODS ROD)\n\t(ADJECTIVE WHITE CRYSTAL)\n\t(DESC \"white rod\")\n\t(FDESC\n\"Floating near a white slot in the wall is a white rod.\")\n\t(ACTION WHITE-KEY-FCN)\n\t(VALUE 25)\n\t(FLAGS TAKEBIT KEYBIT TRANSBIT)>",
   "referencedBy": [
    "DRIVE-BUBBLE-ROOM-FCN",
    "WHITE-KEY-FCN",
    "WHITE-SLOT-FCN",
    "SPEED-SELECT-FCN"
   ]
  },
  "DRIVE-BUBBLE-HATCH": {
   "name": "DRIVE-BUBBLE-HATCH",
   "file": "dungeon.zil",
   "line": 1970,
   "endLine": 1975,
   "desc": "hatch",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "DOORBIT"
   ],
   "synonyms": [
    "HATCH",
    "DOOR"
   ],
   "adjectives": [],
   "action": "HATCH-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DRIVE-BUBBLE-HATCH\n      (IN LOCAL-GLOBALS)\n      (SYNONYM HATCH DOOR)\n      (DESC \"hatch\")\n      (FLAGS NDESCBIT DOORBIT)\n      (ACTION HATCH-DOOR-F)>",
   "referencedBy": [
    "DRIVE-BUBBLE-ENTRANCE-FCN",
    "DRIVE-BUBBLE-ROOM-FCN",
    "SILVER-SLOT-CONT",
    "SILVER-SLOT-FCN"
   ]
  },
  "UNICORNS": {
   "name": "UNICORNS",
   "file": "dungeon.zil",
   "line": 2101,
   "endLine": 2107,
   "desc": "unicorn",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "UNICORN"
   ],
   "adjectives": [
    "HERD"
   ],
   "action": "UNICORNS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT UNICORNS\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"unicorn\")\n\t(SYNONYM UNICORN)\n\t(ADJECTIVE HERD)\n\t(ACTION UNICORNS-FCN)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "METAL-DOOR": {
   "name": "METAL-DOOR",
   "file": "dungeon.zil",
   "line": 2109,
   "endLine": 2114,
   "desc": "metal hatch",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "DOORBIT"
   ],
   "synonyms": [
    "DOOR",
    "HATCH",
    "COVER"
   ],
   "adjectives": [
    "METAL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT METAL-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"metal hatch\")\n\t(SYNONYM DOOR HATCH COVER)\n\t(ADJECTIVE METAL)\n\t(FLAGS NDESCBIT CONTBIT DOORBIT)>",
   "referencedBy": []
  },
  "WALL": {
   "name": "WALL",
   "file": "dungeon.zil",
   "line": 2142,
   "endLine": 2148,
   "desc": "wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "CLIMBBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "WALL"
   ],
   "adjectives": [
    "SMOOTH"
   ],
   "action": "WALL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WALL\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"wall\")\n\t(SYNONYM WALL)\n\t(ADJECTIVE SMOOTH)\n\t(FLAGS CLIMBBIT NDESCBIT)\n\t(ACTION WALL-F)>",
   "referencedBy": []
  },
  "DISTANT-BUBBLE": {
   "name": "DISTANT-BUBBLE",
   "file": "dungeon.zil",
   "line": 2150,
   "endLine": 2155,
   "desc": "bubble",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "BUBBLE"
   ],
   "adjectives": [
    "CRYSTAL",
    "CLEAR"
   ],
   "action": "DISTANT-BUBBLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DISTANT-BUBBLE\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"bubble\")\n\t(SYNONYM BUBBLE)\n\t(ADJECTIVE CRYSTAL CLEAR)\n\t(ACTION DISTANT-BUBBLE-F)>",
   "referencedBy": []
  },
  "GOLD-SLOT": {
   "name": "GOLD-SLOT",
   "file": "dungeon.zil",
   "line": 2213,
   "endLine": 2222,
   "desc": "gold slot",
   "ldesc": null,
   "fdesc": null,
   "loc": "CONTROL-BUBBLE-ENTRANCE",
   "flags": [
    "OPENBIT",
    "CONTBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "SLOT",
    "HOLE"
   ],
   "adjectives": [
    "GOLD"
   ],
   "action": "GOLD-SLOT-FCN",
   "descfcn": null,
   "contfcn": "GOLD-SLOT-CONT",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "KEY": [
     "TO",
     "GOLD-KEY"
    ],
    "CAPACITY": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT GOLD-SLOT\n\t(IN CONTROL-BUBBLE-ENTRANCE)\n\t(SYNONYM SLOT HOLE)\n\t(ADJECTIVE GOLD)\n\t(DESC \"gold slot\")\n\t(FLAGS OPENBIT CONTBIT NDESCBIT)\n\t(KEY TO GOLD-KEY)\n\t(CONTFCN GOLD-SLOT-CONT)\n\t(ACTION GOLD-SLOT-FCN)\n\t(CAPACITY 5)>",
   "referencedBy": [
    "GOLD-SLOT-FCN",
    "CONTROL-BUBBLE-ENTRANCE-FCN"
   ]
  },
  "CONTROL-BUBBLE-HATCH": {
   "name": "CONTROL-BUBBLE-HATCH",
   "file": "dungeon.zil",
   "line": 2224,
   "endLine": 2229,
   "desc": "hatch",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "DOORBIT"
   ],
   "synonyms": [
    "HATCH",
    "DOOR"
   ],
   "adjectives": [],
   "action": "HATCH-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CONTROL-BUBBLE-HATCH\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM HATCH DOOR)\n\t(DESC \"hatch\")\n\t(FLAGS NDESCBIT DOORBIT)\n\t(ACTION HATCH-DOOR-F)>",
   "referencedBy": [
    "GOLD-SLOT-CONT",
    "GOLD-SLOT-FCN",
    "CONTROL-BUBBLE-ENTRANCE-FCN",
    "CONTROL-BUBBLE-ROOM-FCN"
   ]
  },
  "DRIVE-BUBBLE": {
   "name": "DRIVE-BUBBLE",
   "file": "dungeon.zil",
   "line": 2240,
   "endLine": 2246,
   "desc": "drive bubble",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUBBLE"
   ],
   "adjectives": [
    "DRIVE"
   ],
   "action": "DRIVE-BUBBLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "DRIVE-CONTROLS"
   ],
   "source": "<OBJECT DRIVE-BUBBLE\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM BUBBLE)\n\t(ADJECTIVE DRIVE)\n\t(DESC \"drive bubble\")\n\t(ACTION DRIVE-BUBBLE-FCN)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "DRIVE-BUBBLE-ENTRANCE-FCN",
    "ON-DRIVE-BUBBLE-FCN",
    "BOMBS-AWAY",
    "JATO"
   ]
  },
  "CONTROL-BUBBLE": {
   "name": "CONTROL-BUBBLE",
   "file": "dungeon.zil",
   "line": 2248,
   "endLine": 2254,
   "desc": "control bubble",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUBBLE"
   ],
   "adjectives": [
    "CONTROL",
    "FRONT",
    "FORE"
   ],
   "action": "CONTROL-BUBBLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CONTROL-BUBBLE\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM BUBBLE)\n\t(ADJECTIVE CONTROL FRONT FORE)\n\t(DESC \"control bubble\")\n\t(ACTION CONTROL-BUBBLE-FCN)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "CONTROL-BUBBLE-ENTRANCE-FCN",
    "BOMBS-AWAY",
    "ON-CONTROL-BUBBLE-FCN",
    "JATO"
   ]
  },
  "BROWN-SLOT": {
   "name": "BROWN-SLOT",
   "file": "dungeon.zil",
   "line": 2258,
   "endLine": 2266,
   "desc": "brown slot",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "OPENBIT",
    "CONTBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "SLOT",
    "HOLE"
   ],
   "adjectives": [
    "BROWN"
   ],
   "action": "CONTROL-SLOT-FCN",
   "descfcn": null,
   "contfcn": "CONTROL-SLOT-FCN",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "KEY": [
     "TO",
     "BROWN-KEY"
    ],
    "CAPACITY": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT BROWN-SLOT\n\t(SYNONYM SLOT HOLE)\n\t(ADJECTIVE BROWN)\n\t(DESC \"brown slot\")\n\t(ACTION CONTROL-SLOT-FCN)\n\t(CONTFCN CONTROL-SLOT-FCN)\n\t(KEY TO BROWN-KEY)\n\t(FLAGS OPENBIT CONTBIT NDESCBIT)\n\t(CAPACITY 10)>",
   "referencedBy": [
    "CONTROL-SLOT-FCN",
    "SLOTS-AND-SPOTS"
   ]
  },
  "PINK-SLOT": {
   "name": "PINK-SLOT",
   "file": "dungeon.zil",
   "line": 2268,
   "endLine": 2276,
   "desc": "pink slot",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "SLOT",
    "HOLE"
   ],
   "adjectives": [
    "PINK"
   ],
   "action": "CONTROL-SLOT-FCN",
   "descfcn": null,
   "contfcn": "CONTROL-SLOT-FCN",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "KEY": [
     "TO",
     "PINK-KEY"
    ],
    "CAPACITY": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT PINK-SLOT\n\t(SYNONYM SLOT HOLE)\n\t(ADJECTIVE PINK)\n\t(DESC \"pink slot\")\n\t(ACTION CONTROL-SLOT-FCN)\n\t(CONTFCN CONTROL-SLOT-FCN)\n\t(KEY TO PINK-KEY)\n\t(FLAGS NDESCBIT OPENBIT CONTBIT)\n\t(CAPACITY 10)>",
   "referencedBy": [
    "CONTROL-SLOT-FCN",
    "SLOTS-AND-SPOTS"
   ]
  },
  "GREEN-SLOT": {
   "name": "GREEN-SLOT",
   "file": "dungeon.zil",
   "line": 2278,
   "endLine": 2286,
   "desc": "green slot",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "SLOT",
    "HOLE"
   ],
   "adjectives": [
    "GREEN"
   ],
   "action": "CONTROL-SLOT-FCN",
   "descfcn": null,
   "contfcn": "CONTROL-SLOT-FCN",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "KEY": [
     "TO",
     "GREEN-KEY"
    ],
    "CAPACITY": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT GREEN-SLOT\n\t(SYNONYM SLOT HOLE)\n\t(ADJECTIVE GREEN)\n\t(DESC \"green slot\")\n\t(ACTION CONTROL-SLOT-FCN)\n\t(KEY TO GREEN-KEY)\n\t(CONTFCN CONTROL-SLOT-FCN)\n\t(FLAGS NDESCBIT OPENBIT CONTBIT)\n\t(CAPACITY 10)>",
   "referencedBy": [
    "CONTROL-SLOT-FCN",
    "SLOTS-AND-SPOTS"
   ]
  },
  "BLUE-SLOT": {
   "name": "BLUE-SLOT",
   "file": "dungeon.zil",
   "line": 2288,
   "endLine": 2296,
   "desc": "blue slot",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "SLOT",
    "HOLE"
   ],
   "adjectives": [
    "BLUE"
   ],
   "action": "CONTROL-SLOT-FCN",
   "descfcn": null,
   "contfcn": "CONTROL-SLOT-FCN",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "KEY": [
     "TO",
     "BLUE-KEY"
    ],
    "CAPACITY": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT BLUE-SLOT\n\t(SYNONYM SLOT HOLE)\n\t(ADJECTIVE BLUE)\n\t(DESC \"blue slot\")\n\t(ACTION CONTROL-SLOT-FCN)\n\t(KEY TO BLUE-KEY)\n\t(CONTFCN CONTROL-SLOT-FCN)\n\t(FLAGS NDESCBIT OPENBIT CONTBIT)\n\t(CAPACITY 10)>",
   "referencedBy": [
    "CONTROL-SLOT-FCN",
    "SLOTS-AND-SPOTS"
   ]
  },
  "VIOLET-SLOT": {
   "name": "VIOLET-SLOT",
   "file": "dungeon.zil",
   "line": 2298,
   "endLine": 2306,
   "desc": "violet slot",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "SLOT",
    "HOLE"
   ],
   "adjectives": [
    "VIOLET",
    "PURPLE"
   ],
   "action": "CONTROL-SLOT-FCN",
   "descfcn": null,
   "contfcn": "CONTROL-SLOT-FCN",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "KEY": [
     "TO",
     "VIOLET-KEY"
    ],
    "CAPACITY": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT VIOLET-SLOT\n\t(SYNONYM SLOT HOLE)\n\t(ADJECTIVE VIOLET PURPLE)\n\t(DESC \"violet slot\")\n\t(ACTION CONTROL-SLOT-FCN)\n\t(KEY TO VIOLET-KEY)\n\t(CONTFCN CONTROL-SLOT-FCN)\n\t(FLAGS NDESCBIT OPENBIT CONTBIT)\n\t(CAPACITY 10)>",
   "referencedBy": [
    "CONTROL-SLOT-FCN",
    "SLOTS-AND-SPOTS"
   ]
  },
  "VIEW-SELECT": {
   "name": "VIEW-SELECT",
   "file": "dungeon.zil",
   "line": 2308,
   "endLine": 2314,
   "desc": "pink screen",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "OPENBIT",
    "CONTBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "SCREEN"
   ],
   "adjectives": [
    "PINK"
   ],
   "action": "VIEW-SELECT-FCN",
   "descfcn": "VIEW-SELECT-FCN",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "ZOOM-IN",
    "ZOOM-OUT"
   ],
   "source": "<OBJECT VIEW-SELECT\n\t(SYNONYM SCREEN)\n\t(ADJECTIVE PINK)\n\t(DESC \"pink screen\")\n\t(ACTION VIEW-SELECT-FCN)\n\t(DESCFCN VIEW-SELECT-FCN)\n\t(FLAGS OPENBIT CONTBIT NDESCBIT)>",
   "referencedBy": [
    "CONTROL-BUBBLE-ROOM-FCN",
    "CONTROL-SLOT-FCN",
    "TARGET-SELECT-FCN",
    "SPEED-SELECT-FCN",
    "COURSE-SELECT-FCN",
    "EXECUTE-BUTTON-FCN"
   ]
  },
  "ZOOM-IN": {
   "name": "ZOOM-IN",
   "file": "dungeon.zil",
   "line": 2316,
   "endLine": 2322,
   "desc": "small pink square",
   "ldesc": null,
   "fdesc": null,
   "loc": "VIEW-SELECT",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "SQUARE"
   ],
   "adjectives": [
    "SMALL",
    "PINK"
   ],
   "action": "VIEW-SELECT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ZOOM-IN\n\t(IN VIEW-SELECT)\n\t(SYNONYM SQUARE)\n\t(ADJECTIVE SMALL PINK)\n\t(DESC \"small pink square\")\n\t(ACTION VIEW-SELECT-FCN)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "VIEW-SELECT-FCN"
   ]
  },
  "ZOOM-OUT": {
   "name": "ZOOM-OUT",
   "file": "dungeon.zil",
   "line": 2324,
   "endLine": 2330,
   "desc": "large pink square",
   "ldesc": null,
   "fdesc": null,
   "loc": "VIEW-SELECT",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "SQUARE"
   ],
   "adjectives": [
    "LARGE",
    "PINK"
   ],
   "action": "VIEW-SELECT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ZOOM-OUT\n\t(IN VIEW-SELECT)\n\t(SYNONYM SQUARE)\n\t(ADJECTIVE LARGE PINK)\n\t(DESC \"large pink square\")\n\t(ACTION VIEW-SELECT-FCN)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "VIEW-SELECT-FCN"
   ]
  },
  "TARGET-SELECT": {
   "name": "TARGET-SELECT",
   "file": "dungeon.zil",
   "line": 2332,
   "endLine": 2337,
   "desc": "brown spot",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON",
    "SPOT"
   ],
   "adjectives": [
    "BROWN"
   ],
   "action": "TARGET-SELECT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TARGET-SELECT\n\t(SYNONYM BUTTON SPOT)\n\t(ADJECTIVE BROWN)\n\t(DESC \"brown spot\")\n\t(FLAGS NDESCBIT)\n\t(ACTION TARGET-SELECT-FCN)>",
   "referencedBy": [
    "CONTROL-SLOT-FCN"
   ]
  },
  "SPEED-SELECT": {
   "name": "SPEED-SELECT",
   "file": "dungeon.zil",
   "line": 2339,
   "endLine": 2344,
   "desc": "green spot",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON",
    "SPOT"
   ],
   "adjectives": [
    "GREEN"
   ],
   "action": "SPEED-SELECT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SPEED-SELECT\n\t(SYNONYM BUTTON SPOT)\n\t(ADJECTIVE GREEN)\n\t(DESC \"green spot\")\n\t(FLAGS NDESCBIT)\n\t(ACTION SPEED-SELECT-FCN)>",
   "referencedBy": [
    "CONTROL-SLOT-FCN"
   ]
  },
  "EXECUTE-BUTTON": {
   "name": "EXECUTE-BUTTON",
   "file": "dungeon.zil",
   "line": 2346,
   "endLine": 2351,
   "desc": "blue spot",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON",
    "SPOT"
   ],
   "adjectives": [
    "BLUE"
   ],
   "action": "EXECUTE-BUTTON-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT EXECUTE-BUTTON\n\t(SYNONYM BUTTON SPOT)\n\t(ADJECTIVE BLUE)\n\t(DESC \"blue spot\")\n\t(FLAGS NDESCBIT)\n\t(ACTION EXECUTE-BUTTON-FCN)>",
   "referencedBy": [
    "CONTROL-SLOT-FCN"
   ]
  },
  "COURSE-SELECT": {
   "name": "COURSE-SELECT",
   "file": "dungeon.zil",
   "line": 2353,
   "endLine": 2358,
   "desc": "violet spot",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON",
    "SPOT"
   ],
   "adjectives": [
    "VIOLET",
    "PURPLE"
   ],
   "action": "COURSE-SELECT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT COURSE-SELECT\n\t(SYNONYM BUTTON SPOT)\n\t(ADJECTIVE VIOLET PURPLE)\n\t(DESC \"violet spot\")\n\t(FLAGS NDESCBIT)\n\t(ACTION COURSE-SELECT-FCN)>",
   "referencedBy": [
    "CONTROL-SLOT-FCN"
   ]
  },
  "CLEAR-SLOT": {
   "name": "CLEAR-SLOT",
   "file": "dungeon.zil",
   "line": 2360,
   "endLine": 2369,
   "desc": "crystal slot",
   "ldesc": null,
   "fdesc": null,
   "loc": "CONTROL-BUBBLE-ROOM",
   "flags": [
    "OPENBIT",
    "CONTBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "SLOT",
    "HOLE"
   ],
   "adjectives": [
    "CLEAR",
    "CRYSTAL"
   ],
   "action": "CONTROL-SLOT-FCN",
   "descfcn": null,
   "contfcn": "CONTROL-SLOT-FCN",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "KEY": [
     "TO",
     "CLEAR-KEY"
    ],
    "CAPACITY": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT CLEAR-SLOT\n\t(IN CONTROL-BUBBLE-ROOM)\n\t(SYNONYM SLOT HOLE)\n\t(ADJECTIVE CLEAR CRYSTAL)\n\t(DESC \"crystal slot\")\n\t(ACTION CONTROL-SLOT-FCN)\n\t(KEY TO CLEAR-KEY)\n\t(CONTFCN CONTROL-SLOT-FCN)\n\t(FLAGS OPENBIT CONTBIT NDESCBIT)\n\t(CAPACITY 10)>",
   "referencedBy": [
    "CONTROL-BUBBLE-ROOM-FCN",
    "CONTROL-SLOT-FCN",
    "SLOTS-AND-SPOTS"
   ]
  },
  "ROD-RACK": {
   "name": "ROD-RACK",
   "file": "dungeon.zil",
   "line": 2371,
   "endLine": 2382,
   "desc": "metal basket",
   "ldesc": null,
   "fdesc": "Discarded here is a metal basket with a small pocket.",
   "loc": "YELLOW-LOCK",
   "flags": [
    "TAKEBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "RACK",
    "CARTON",
    "BASKET",
    "POCKET"
   ],
   "adjectives": [
    "METAL",
    "SMALL"
   ],
   "action": "ROD-RACK-FCN",
   "descfcn": null,
   "contfcn": "ROD-RACK-FCN",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "120"
    ],
    "SIZE": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT ROD-RACK\n\t(IN YELLOW-LOCK)\n\t(SYNONYM RACK CARTON BASKET POCKET)\n\t(ADJECTIVE METAL SMALL)\n\t(DESC \"metal basket\")\n\t(FDESC\n\"Discarded here is a metal basket with a small pocket.\")\n\t(ACTION ROD-RACK-FCN)\n\t(CONTFCN ROD-RACK-FCN)\n\t(FLAGS TAKEBIT OPENBIT CONTBIT)\n\t(CAPACITY 120)\n\t(SIZE 10)>",
   "referencedBy": [
    "ROD-RACK-FCN"
   ]
  },
  "SPEAR": {
   "name": "SPEAR",
   "file": "dungeon.zil",
   "line": 2384,
   "endLine": 2388,
   "desc": "spear",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "SPEAR",
    "SPEARS"
   ],
   "adjectives": [],
   "action": "SPEAR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SPEAR\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"spear\")\n\t(SYNONYM SPEAR SPEARS)\n\t(ACTION SPEAR-F)>",
   "referencedBy": [
    "PRE-TAKE"
   ]
  },
  "HUTS": {
   "name": "HUTS",
   "file": "dungeon.zil",
   "line": 2390,
   "endLine": 2394,
   "desc": "hut",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "HUTS",
    "HUT"
   ],
   "adjectives": [],
   "action": "HUTS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HUTS\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"hut\")\n\t(SYNONYM HUTS HUT)\n\t(ACTION HUTS-F)>",
   "referencedBy": []
  },
  "VEGGIES": {
   "name": "VEGGIES",
   "file": "dungeon.zil",
   "line": 2396,
   "endLine": 2400,
   "desc": "vegetation",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "GRASS",
    "SHRUB",
    "CONIFER",
    "CYCAD"
   ],
   "adjectives": [],
   "action": "VEGGIES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT VEGGIES\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"vegetation\")\n\t(SYNONYM GRASS SHRUB CONIFER CYCAD)\n\t(ACTION VEGGIES-F)>",
   "referencedBy": []
  },
  "DRIVE-CONTROLS": {
   "name": "DRIVE-CONTROLS",
   "file": "dungeon.zil",
   "line": 2402,
   "endLine": 2406,
   "desc": "control",
   "ldesc": null,
   "fdesc": null,
   "loc": "DRIVE-BUBBLE",
   "flags": [],
   "synonyms": [
    "DIALS",
    "INDICATORS",
    "GAUGES",
    "BUTTON"
   ],
   "adjectives": [],
   "action": "DRIVE-CONTROLS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DRIVE-CONTROLS\n\t(IN DRIVE-BUBBLE)\n\t(DESC \"control\")\n\t(SYNONYM DIALS INDICATORS GAUGES BUTTON)\n\t(ACTION DRIVE-CONTROLS-F)>",
   "referencedBy": []
  },
  "CAGES": {
   "name": "CAGES",
   "file": "dungeon.zil",
   "line": 2408,
   "endLine": 2412,
   "desc": "cage",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "CAGE",
    "CAGES",
    "BARS"
   ],
   "adjectives": [],
   "action": "CAGES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CAGES\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"cage\")\n\t(SYNONYM CAGE CAGES BARS)\n\t(ACTION CAGES-F)>",
   "referencedBy": []
  },
  "TOTEMS": {
   "name": "TOTEMS",
   "file": "dungeon.zil",
   "line": 2414,
   "endLine": 2418,
   "desc": "funeral offering",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "FRUITS",
    "GRAIN",
    "TOTEMS",
    "FETISH"
   ],
   "adjectives": [],
   "action": "TOTEMS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TOTEMS\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"funeral offering\")\n\t(SYNONYM FRUITS GRAIN TOTEMS FETISH)\n\t(ACTION TOTEMS-F)>",
   "referencedBy": []
  },
  "KNOBS": {
   "name": "KNOBS",
   "file": "dungeon.zil",
   "line": 2420,
   "endLine": 2425,
   "desc": "knob",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "TAKEBIT",
    "TRYTAKEBIT",
    "CLIMBBIT"
   ],
   "synonyms": [
    "KNOB",
    "KNOBS",
    "PROTRUSION",
    "HANDHOLD"
   ],
   "adjectives": [],
   "action": "KNOBS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT KNOBS\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"knob\")\n\t(SYNONYM KNOB KNOBS PROTRUSION HANDHOLD)\n\t(FLAGS TAKEBIT TRYTAKEBIT CLIMBBIT)\n\t(ACTION KNOBS-F)>",
   "referencedBy": []
  },
  "ENUNCIATOR": {
   "name": "ENUNCIATOR",
   "file": "emerg.zil",
   "line": 60,
   "endLine": 67,
   "desc": "enunciator panel",
   "ldesc": "An enunciator panel is prominent along one wall here.",
   "fdesc": null,
   "loc": "COMPUTER-ROOM",
   "flags": [
    "INVISIBLE"
   ],
   "synonyms": [
    "PANEL",
    "LIGHT",
    "LIGHTS",
    "SYMBOL"
   ],
   "adjectives": [
    "ENUNCIATOR",
    "RED",
    "YELLOW",
    "BLUE",
    "GREEN"
   ],
   "action": "ENUNCIATOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ENUNCIATOR\n\t(IN COMPUTER-ROOM)\n\t(DESC \"enunciator panel\")\n\t(LDESC \"An enunciator panel is prominent along one wall here.\")\n\t(SYNONYM PANEL LIGHT LIGHTS SYMBOL)\n\t(ADJECTIVE ENUNCIATOR RED YELLOW BLUE GREEN)\n\t(FLAGS INVISIBLE)\n\t(ACTION ENUNCIATOR-F)>",
   "referencedBy": [
    "SWITCH-FCN"
   ]
  },
  "YELLOW-SLOT": {
   "name": "YELLOW-SLOT",
   "file": "emerg.zil",
   "line": 117,
   "endLine": 125,
   "desc": "yellow slot",
   "ldesc": null,
   "fdesc": null,
   "loc": "REPAIR-ROOM",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "SLOT",
    "HOLE"
   ],
   "adjectives": [
    "YELLOW"
   ],
   "action": "YELLOW-SLOT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "KEY": [
     "TO",
     "YELLOW-KEY"
    ],
    "CAPACITY": [
     "6"
    ]
   },
   "contents": [],
   "source": "<OBJECT YELLOW-SLOT\n\t(IN REPAIR-ROOM)\n\t(DESC \"yellow slot\")\n\t(SYNONYM SLOT HOLE)\n\t(ADJECTIVE YELLOW)\n\t(FLAGS NDESCBIT CONTBIT OPENBIT)\n\t(KEY TO YELLOW-KEY)\n\t(CAPACITY 6)\n\t(ACTION YELLOW-SLOT-F)>",
   "referencedBy": [
    "YELLOW-SLOT-F"
   ]
  },
  "RED-SLOT": {
   "name": "RED-SLOT",
   "file": "emerg.zil",
   "line": 139,
   "endLine": 147,
   "desc": "red slot",
   "ldesc": null,
   "fdesc": null,
   "loc": "REPAIR-ROOM",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "SLOT",
    "HOLE"
   ],
   "adjectives": [
    "RED",
    "FIRST",
    "SECOND",
    "THIRD"
   ],
   "action": "RED-SLOT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "KEY": [
     "TO",
     "RED-KEY"
    ],
    "CAPACITY": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT RED-SLOT\n\t(IN REPAIR-ROOM)\n\t(DESC \"red slot\")\n\t(SYNONYM SLOT HOLE)\n\t(ADJECTIVE RED FIRST SECOND THIRD)\n\t(FLAGS NDESCBIT CONTBIT OPENBIT)\n\t(KEY TO RED-KEY)\n\t(CAPACITY 5)\n\t(ACTION RED-SLOT-F)>",
   "referencedBy": [
    "RED-SLOT-F"
   ]
  }
 },
 "routines": {
  "BRIDGE-FCN": {
   "name": "BRIDGE-FCN",
   "file": "actions.zil",
   "line": 8,
   "endLine": 24,
   "source": "<ROUTINE BRIDGE-FCN (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is the control room of the Starcross. There are exits labelled\n(arbitrarily) \\\"Port,\\\" \\\"Starboard,\\\" and \\\"Out.\\\" The latter exit has\na heavy bulkhead which is \" <COND (<FSET? ,AIRLOCK-INNER ,OPENBIT>\n\t\t\t\t   \"open.\")\n\t\t\t\t  (T \"closed.\")>>\n\t\t<CRLF>\n\t\t<TELL\n\"Your ship's computer does the routine tasks of navigation and life support.\nA control couch is mounted before a control panel and a large viewport. The\nship's registration is affixed nearby.\" CR>\n\t\t<TELL\n\"Your mass detector, essential in the search for black holes, sits to one\nside. On the detector are a red button, a blue button, and a small screen\non which something is displayed.\" CR>)>>"
  },
  "DETECTOR-FCN": {
   "name": "DETECTOR-FCN",
   "file": "actions.zil",
   "line": 26,
   "endLine": 30,
   "source": "<ROUTINE DETECTOR-FCN ()\n\t <COND (<VERB? EXAMINE READ>\n\t\t<TELL \"The display reads: \\\"\">\n\t\t<PRINTD ,MASS>\n\t\t<TELL \".\\\"\" CR>)>>"
  },
  "I-ALARM": {
   "name": "I-ALARM",
   "file": "actions.zil",
   "line": 35,
   "endLine": 61,
   "source": "<ROUTINE I-ALARM (\"AUX\" (HEAR? <>))\n\t <COND (,ALARM?\n\t\t<COND (<NOT ,MASS>\n\t\t       <SETG MASSNUM <RANDOM 8>>\n\t\t       <SETG MASS <GET ,MASSES ,MASSNUM>>)>\n\t\t<ENABLE <QUEUE I-ALARM 1>>\n\t\t<COND (<EQUAL? ,HERE ,SPACESHIP-BRIDGE\n\t\t\t       ,SPACESHIP-QUARTERS ,SPACESHIP-STORES>\n\t\t       <SET HEAR? T>)\n\t\t      (<AND <==? ,HERE ,SPACESHIP-AIRLOCK>\n\t\t\t    <FSET? ,AIRLOCK-INNER ,OPENBIT>>\n\t\t       <SET HEAR? T>)>\n\t\t<COND (.HEAR?\n\t\t       <TELL\n\"The alarm bell on the mass detector is ringing stridently.\" CR>)>\n\t\t<COND (<==? ,MOVES 15>\n\t\t       <SETG ALARM? <>>\n\t\t       <SETG COMPUTER-ON T>\n\t\t       <COND (.HEAR?\n\t\t\t      <TELL\n\"\\\"If you won't turn it off, I will. I can't take the noise any more.\\\"\" CR>)>)\n\t\t      (<AND .HEAR? <==? ,MOVES 10>>\n\t\t       <SETG COMPUTER-ON T>\n\t\t       <TELL\n\"An expressionless but nonetheless surly voice issues from the computer:\n\\\"Please turn that alarm off! We'll both have headaches if you don't.\\\"\" CR>)>\n\t\t<RTRUE>)>>"
  },
  "ALARM-FCN": {
   "name": "ALARM-FCN",
   "file": "actions.zil",
   "line": 63,
   "endLine": 84,
   "source": "<ROUTINE ALARM-FCN ()\n\t <COND (<VERB? LISTEN>\n\t\t<TELL \"The alarm is \">\n\t\t<COND (,ALARM? <TELL \"ringing.\">)(T <TELL \"off.\">)>\n\t\t<CRLF>)\n\t       (<NOT <==? ,HERE ,SPACESHIP-BRIDGE>>\n\t\t<TELL \"The alarm is on the bridge, not here.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"The alarm is \">\n\t\t<COND (,ALARM? <TELL \"ringing.\">)(T <TELL \"off.\">)>\n\t\t<CRLF>)\n\t       (<VERB? LAMP-OFF PUSH>\n\t\t<COND (,ALARM?\n\t\t       <SETG ALARM? <>>\n\t\t       <TELL\n\"The alarm goes silent.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"The alarm's already off. Your ears must be ringing.\" CR>)>)\n\t       (<VERB? LAMP-ON>\n\t\t<TELL\n\"Only the mass detector can turn the alarm on.\" CR>)>>"
  },
  "MASS-FCN": {
   "name": "MASS-FCN",
   "file": "actions.zil",
   "line": 86,
   "endLine": 97,
   "source": "<ROUTINE MASS-FCN ()\n\t <COND (<VERB? SET>\n\t\t<COND (<KVETCH> <RTRUE>)\n\t\t      (ELSE\n\t\t       <TELL\n\"The computer must be used to set courses, as navigation is fully\nautomated.\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (<HELD? ,CHART>\n\t\t       <TELL\n\"It's still here on the output.\" CR>)\n\t\t      (ELSE <TELL \"You don't have the output.\" CR>)>)>>"
  },
  "BUNK-FCN": {
   "name": "BUNK-FCN",
   "file": "actions.zil",
   "line": 99,
   "endLine": 103,
   "source": "<ROUTINE BUNK-FCN (\"OPTIONAL\" (RARG <>))\n\t <COND (<AND <==? .RARG ,M-BEG>\n\t\t     <VERB? WALK>\n\t\t     <IN? ,ADVENTURER ,BUNK>>\n\t\t<TELL \"You must get up first!\" CR>)>>"
  },
  "BUTTON-FCN": {
   "name": "BUTTON-FCN",
   "file": "actions.zil",
   "line": 105,
   "endLine": 113,
   "source": "<ROUTINE BUTTON-FCN ()\n\t <COND (<VERB? PUSH>\n\t\t<COND (<FSET? ,CHART ,TOUCHBIT>\n\t\t       <TELL \"Nothing happens.\" CR>)\n\t\t      (T\n\t\t       <MOVE ,CHART ,HERE>\n\t\t       <FSET ,CHART ,TOUCHBIT>\n\t\t       <TELL\n\"The mass detector produces some output.\" CR>)>)>>"
  },
  "V-R": {
   "name": "V-R",
   "file": "actions.zil",
   "line": 115,
   "endLine": 126,
   "source": "<ROUTINE V-R ()\n\t <COND (<==? ,WINNER ,COMPUTER>\n\t\t<COND (<==? ,PRSO ,INTNUM>\n\t\t       <COND (<OR <0? ,P-NUMBER> <G? ,P-NUMBER 360>>\n\t\t\t      <NOT-IN-RANGE \"R\">\n\t\t\t      <RTRUE>)\n\t\t\t     (T <OK-TELL ,R-VALUE \"R\">)>\n\t\t       <SETG R-VALUE ,P-NUMBER>\n\t\t       <COURSE-SET>)\n\t\t      (T <NON-NUMERIC \"R\">)>)\n\t       (ELSE\n\t\t<EXPLAIN-COORDINATES>)>>"
  },
  "V-THETA": {
   "name": "V-THETA",
   "file": "actions.zil",
   "line": 128,
   "endLine": 138,
   "source": "<ROUTINE V-THETA ()\n\t <COND (<==? ,WINNER ,COMPUTER>\n\t\t<COND (<==? ,PRSO ,INTNUM>\n\t\t       <COND (<OR <0? ,P-NUMBER> <G? ,P-NUMBER 360>>\n\t\t\t      <NOT-IN-RANGE \"theta\">\n\t\t\t      <RTRUE>)\n\t\t\t     (T <OK-TELL ,THETA-VALUE \"Theta\">)>\n\t\t       <SETG THETA-VALUE ,P-NUMBER>\n\t\t       <COURSE-SET>)\n\t\t      (T <NON-NUMERIC \"theta\">)>)\n\t       (ELSE <EXPLAIN-COORDINATES>)>>"
  },
  "V-PHI": {
   "name": "V-PHI",
   "file": "actions.zil",
   "line": 140,
   "endLine": 150,
   "source": "<ROUTINE V-PHI ()\n\t <COND (<==? ,WINNER ,COMPUTER>\n\t\t<COND (<==? ,PRSO ,INTNUM>\n\t\t       <COND (<OR <0? ,P-NUMBER> <G? ,P-NUMBER 360>>\n\t\t\t      <NOT-IN-RANGE \"phi\">\n\t\t\t      <RTRUE>)\n\t\t\t     (T <OK-TELL ,PHI-VALUE \"Phi\">)>\n\t\t       <SETG PHI-VALUE ,P-NUMBER>\n\t\t       <COURSE-SET>)\n\t\t      (T <NON-NUMERIC \"phi\">)>)\n\t       (ELSE <EXPLAIN-COORDINATES>)>>"
  },
  "OK-TELL": {
   "name": "OK-TELL",
   "file": "actions.zil",
   "line": 152,
   "endLine": 156,
   "source": "<ROUTINE OK-TELL (VAL STR)\n\t <TELL \"\\\"\">\n\t <COND (.VAL\n\t\t<TELL \"Changing your mind, eh? \">)>\n\t <TELL .STR \" set.\">>"
  },
  "NOT-IN-RANGE": {
   "name": "NOT-IN-RANGE",
   "file": "actions.zil",
   "line": 158,
   "endLine": 160,
   "source": "<ROUTINE NOT-IN-RANGE (STR)\n\t <TELL\n\"\\\"That value for \" .STR \" is out of range.\\\"\" CR>>"
  },
  "NON-NUMERIC": {
   "name": "NON-NUMERIC",
   "file": "actions.zil",
   "line": 162,
   "endLine": 164,
   "source": "<ROUTINE NON-NUMERIC (STR)\n\t <TELL\n\"\\\"You must give me a numerical value for \" .STR \".\\\"\" CR>>"
  },
  "EXPLAIN-COORDINATES": {
   "name": "EXPLAIN-COORDINATES",
   "file": "actions.zil",
   "line": 166,
   "endLine": 171,
   "source": "<ROUTINE EXPLAIN-COORDINATES ()\n\t <COND (<KVETCH> <RTRUE>)\n\t       (ELSE\n\t\t<TELL\n\"Set a course by telling the computer the R, theta, and phi values of\nyour destination.\" CR>)>>"
  },
  "KVETCH": {
   "name": "KVETCH",
   "file": "actions.zil",
   "line": 173,
   "endLine": 178,
   "source": "<ROUTINE KVETCH ()\n\t <SETG COMPUTER-COUNT <+ ,COMPUTER-COUNT 1>>\n\t <COND (<==? ,COMPUTER-COUNT 3>\n\t\t<SETG COMPUTER-COUNT 0>\n\t\t<TELL\n\"Please consult the manual for the proper computer operating procedure.\" CR>)>>"
  },
  "COURSE-SET": {
   "name": "COURSE-SET",
   "file": "actions.zil",
   "line": 186,
   "endLine": 210,
   "source": "<ROUTINE COURSE-SET ()\n\t <COND (<AND ,R-VALUE ,THETA-VALUE ,PHI-VALUE>\n\t\t<SETG GOT-INSTRUCTIONS T>\n\t\t<SETG DESTINATION <>>\n\t\t<SETG LOST <>>\n\t\t<TELL\n\"\\\" Lights blink furiously for a moment. The computer speaks: \">\n\t\t<SETG GIVE-UP <FIND-DESTINATION ,KNOWN-LOCS ,KNOWNS>>\n\t\t<COND (,GIVE-UP\n\t\t       <TELL\n\"\\\"Navigational program for \" D ,GIVE-UP \" is ready. Giving up,\nhuh? Figures, just when we get a good strike. \">)\n\t\t      (<AND <SETG DESTINATION\n\t\t\t\t  <FIND-DESTINATION ,MASS-LOCS ,MASSES>>\n\t\t\t    <==? ,DESTINATION ,MASS>>\n\t\t       <TELL\n\"\\\"Sequence for intercept of mass concentration is programmed and ready. \">)\n\t\t      (ELSE\n\t\t       <SETG LOST T>\n\t\t       <TELL\n\"\\\"I know my instruments aren't as good as the mass detector, but I see\nnothing at that location. Well, if you say so. \">)>\n\t       <TELL \"Please confirm new navigational\nprogram. I'm waiting...\\\"\" CR>)\n\t (T <TELL \" Waiting for additional values.\\\"\" CR>)>>"
  },
  "FIND-DESTINATION": {
   "name": "FIND-DESTINATION",
   "file": "actions.zil",
   "line": 218,
   "endLine": 226,
   "source": "<ROUTINE FIND-DESTINATION (X M \"AUX\" (C 0) (N <GET .X 0>))\n\t <REPEAT ()\n\t\t <SET C <+ .C 1>>\n\t\t <COND (<AND <==? <GET .X 1> ,R-VALUE>\n\t\t\t     <==? <GET .X 2> ,THETA-VALUE>\n\t\t\t     <==? <GET .X 3> ,PHI-VALUE>>\n\t\t\t<RETURN <GET .M .C>>)>\n\t\t <COND (<==? .C .N> <RETURN <>>)>\n\t\t <SET X <REST .X 6>>>>"
  },
  "KNOWN-COURSE": {
   "name": "KNOWN-COURSE",
   "file": "actions.zil",
   "line": 228,
   "endLine": 241,
   "source": "<ROUTINE KNOWN-COURSE (D SET? \"AUX\" X N (C 0))\n\t <SET X ,KNOWN-LOCS>\n\t <SET N <GET .X 0>>\n\t <REPEAT ()\n\t\t <SET C <+ .C 1>>\n\t\t <COND (<==? <GET ,KNOWNS .C> .D>\n\t\t\t<COND (.SET?\n\t\t\t       <SETG R-VALUE <GET .X 1>>\n\t\t\t       <SETG THETA-VALUE <GET .X 2>>\n\t\t\t       <SETG PHI-VALUE <GET .X 3>>\n\t\t\t       <RETURN .D>)\n\t\t\t      (ELSE <RETURN .X>)>)>\n\t\t <COND (<==? .C .N> <RETURN <>>)>\n\t\t <SET X <REST .X 6>>>>"
  },
  "REPORT-LOCATION": {
   "name": "REPORT-LOCATION",
   "file": "actions.zil",
   "line": 248,
   "endLine": 254,
   "source": "<ROUTINE REPORT-LOCATION (M ML N)\n\t <TELL \"\\\"Coordinates for \" D .M\n\t       \": R is \" N <GET .ML .N>\n\t       \", theta is \" N <GET .ML <+ .N 1>>\n\t       \", phi is \" N <GET .ML <+ .N 2>>\n\t       \".\\\"\"\n\t       CR>>"
  },
  "CONTROLS-FCN": {
   "name": "CONTROLS-FCN",
   "file": "actions.zil",
   "line": 256,
   "endLine": 290,
   "source": "<ROUTINE CONTROLS-FCN ()\n\t <COND (<==? ,HERE ,THRONE-ROOM>\n\t\t<COND (<VERB? EXAMINE> <AS-ADVERTISED>)\n\t\t      (T <TELL\n\"The controls look in no way operational.\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"This is a standard control panel for this class of single-passenger mining\nship. Most controls are for emergencies only, as the Starcross is normally\ncontrolled by verbal instructions to the computer.\">\n\t\t<COND (<NOT <IN? ,COMPUTER ,HERE>>\n\t\t       <TELL \" This set of controls is non-functional.\">)>\n\t\t<CRLF>\n\t\t<RTRUE>)\n\t       (<VERB? RUB SET LAMP-ON LAMP-OFF PLAY>\n\t\t<COND (<NOT <IN? ,COMPUTER ,HERE>>\n\t\t       <TELL\n\"The controls are no longer functional.\" CR>)\n\t\t      (,COMPUTER-ON\n\t\t       <COND (,GOT-INSTRUCTIONS\n\t\t\t      <TELL\n\"As you reach for the controls, the computer blares: \\\"Warning! Warning!\nCourse is set! Remember what happened last time you played with the controls\nin mid-course...\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"The computer's voice intrudes. \\\"Do you really want to touch the controls\njust now? Not to impugn your piloting ability, but shouldn't I execute any\ncourse corrections? I'm very good at it, you know.\\\"\" CR>)>)\n\t\t      (ELSE\n\t\t       <SETG COMPUTER-ON T>\n\t\t       <TELL\n\"The computer comes on and chides, \\\"Manual operation when the ship's\ncomputer is functional is not recommended. Ship's controls are not\ncurrently enabled.\\\"\" CR>)>)>>"
  },
  "BRIDGE-EXITS": {
   "name": "BRIDGE-EXITS",
   "file": "actions.zil",
   "line": 292,
   "endLine": 297,
   "source": "<ROUTINE BRIDGE-EXITS ()\n\t <COND (<==? ,PRSO ,P?WEST> ,SPACESHIP-QUARTERS)\n\t       (<==? ,PRSO ,P?EAST> ,SPACESHIP-STORES)\n\t       (<EQUAL? ,PRSO ,P?OUT ,P?SOUTH>\n\t\t<COND (<FSET? ,AIRLOCK-INNER ,OPENBIT> ,SPACESHIP-AIRLOCK)\n\t\t      (T <ITS-CLOSED ,AIRLOCK-INNER>)>)>>"
  },
  "OPEN-CLOSE": {
   "name": "OPEN-CLOSE",
   "file": "actions.zil",
   "line": 299,
   "endLine": 313,
   "source": "<ROUTINE OPEN-CLOSE (OBJ STROPN STRCLS)\n\t <COND (<VERB? OPEN>\n\t\t<COND (<FSET? .OBJ ,OPENBIT>\n\t\t       <TELL <PICK-ONE ,DUMMY>>)\n\t\t      (ELSE\n\t\t       <TELL .STROPN>\n\t\t       <FSET .OBJ ,OPENBIT>)>\n\t\t<CRLF>)\n\t       (<VERB? CLOSE>\n\t\t<COND (<FSET? .OBJ ,OPENBIT>\n\t\t       <TELL .STRCLS>\n\t\t       <FCLEAR .OBJ ,OPENBIT>\n\t\t       T)\n\t\t      (ELSE <TELL <PICK-ONE ,DUMMY> CR>)>\n\t\t<CRLF>)>>"
  },
  "OBJECT-PSEUDO": {
   "name": "OBJECT-PSEUDO",
   "file": "actions.zil",
   "line": 320,
   "endLine": 323,
   "source": "<ROUTINE OBJECT-PSEUDO ()\n\t <COND (<VERB? EXAMINE>\n\t\t<PERFORM ,V?LOOK-INSIDE ,WINDOW>\n\t\t<RTRUE>)>>"
  },
  "PORTHOLE-FCN": {
   "name": "PORTHOLE-FCN",
   "file": "actions.zil",
   "line": 325,
   "endLine": 333,
   "source": "<ROUTINE PORTHOLE-FCN ()\n\t <COND (<VERB? THROUGH>\n\t\t<TELL \"There is glass in that porthole, dummy!\" CR>)\n\t       (<VERB? LOOK-INSIDE EXAMINE>\n\t\t<COND (<==? ,HERE ,SPACESHIP-BRIDGE>\n\t\t       <DESCRIBE-SPACE>)\n\t\t      (<==? ,HERE ,THRONE-ROOM>\n\t\t       <TELL\n\"You see the green dock, and the stars wheeling by above.\" CR>)>)>>"
  },
  "V-THROUGH": {
   "name": "V-THROUGH",
   "file": "actions.zil",
   "line": 335,
   "endLine": 347,
   "source": "<ROUTINE V-THROUGH (\"OPTIONAL\" (OBJ <>) \"AUX\" M)\n\t#DECL ((OBJ) <OR OBJECT FALSE> (M) <PRIMTYPE VECTOR>)\n\t<COND (<AND <NOT .OBJ> <FSET? ,PRSO ,VEHBIT>>\n\t       <PERFORM ,V?BOARD ,PRSO>\n\t       <RTRUE>)\n\t      (<AND <NOT .OBJ> <NOT <FSET? ,PRSO ,TAKEBIT>>>\n\t       <TELL \"You hit your head against the \"\n\t\t\t    D ,PRSO\n\t\t\t    \" as you attempt this feat.\" CR>)\n\t      (.OBJ <TELL \"You can't do that!\" CR>)\n\t      (<IN? ,PRSO ,WINNER>\n\t       <TELL \"That would involve quite a contortion!\" CR>)\n\t      (ELSE <TELL <PICK-ONE ,YUKS> CR>)>>"
  },
  "ROOM?": {
   "name": "ROOM?",
   "file": "actions.zil",
   "line": 349,
   "endLine": 355,
   "source": "<ROUTINE ROOM? (OBJ \"AUX\" NOBJ)\n\t <REPEAT ()\n\t\t <SET NOBJ <LOC .OBJ>>\n\t\t <COND (<NOT .NOBJ> <RFALSE>)\n\t\t       (<==? .NOBJ ,WINNER> <RFALSE>)\n\t\t       (<==? .NOBJ ,ROOMS> <RETURN .OBJ>)>\n\t\t <SET OBJ .NOBJ>>>"
  },
  "GRUE-FUNCTION": {
   "name": "GRUE-FUNCTION",
   "file": "actions.zil",
   "line": 357,
   "endLine": 370,
   "source": "<ROUTINE GRUE-FUNCTION ()\n    <COND (<VERB? EXAMINE>\n\t   <TELL\n\"The grue is a sinister, lurking presence in the dark places of the\nearth. Its favorite diet is spacers, but its insatiable appetite is\ntempered by its fear of light. No grue has ever been seen by the light\nof day, and few have survived its fearsome jaws to tell the tale.\" CR>)\n\t  (<VERB? FIND>\n\t   <TELL\n\"There is no grue here, but I'm sure there is at least one lurking\nin the darkness nearby. I'd stay in lighted areas if I were you!\" CR>)\n\t  (<VERB? LISTEN>\n\t   <TELL\n\"It makes no sound but is always lurking in the darkness nearby.\" CR>)>>"
  },
  "GROUND-FCN": {
   "name": "GROUND-FCN",
   "file": "actions.zil",
   "line": 372,
   "endLine": 377,
   "source": "<ROUTINE GROUND-FCN ()\n\t <COND (<AND <VERB? PUT> <==? ,PRSI ,GROUND>>\n\t\t<PERFORM ,V?DROP ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? DIG>\n\t\t<TELL \"The ground is too hard for digging here.\" CR>)>>"
  },
  "DEBRIS-FCN": {
   "name": "DEBRIS-FCN",
   "file": "actions.zil",
   "line": 379,
   "endLine": 384,
   "source": "<ROUTINE DEBRIS-FCN ()\n\t <COND (<AND ,DOCKED?\n\t\t     ,SEEN-MOUSE?\n\t\t     <VERB? TAKE EXAMINE>>\n\t\t<TELL\n\"You should leave debris for the maintenance mice.\" CR>)>>"
  },
  "ADVENTURER-FCN": {
   "name": "ADVENTURER-FCN",
   "file": "actions.zil",
   "line": 386,
   "endLine": 411,
   "source": "<ROUTINE ADVENTURER-FCN ()\n\t <COND (<==? ,ADVENTURER ,WINNER>\n\t\t<COND (<AND ,THAT-END\n\t\t\t    ,THIS-END\n\t\t\t    <IN? ,SPACESUIT ,WINNER>\n\t\t\t    <VERB? WALK>\n\t\t\t    <NOT <AND <EQUAL? ,HERE ,YELLOW-DOCK>\n\t\t\t\t      <EQUAL? ,PRSO ,P?WEST>>>\n\t\t\t    <NOT <AND <EQUAL? ,HERE ,YELLOW-DOCK-EDGE>\n\t\t\t\t      <EQUAL? ,PRSO ,P?EAST>>>\n\t\t\t    <NOT <AND <EQUAL? ,HERE\n\t\t\t\t\t      ,SPACESHIP-AIRLOCK>\n\t\t\t\t      <EQUAL? ,PRSO ,P?SOUTH ,P?OUT P?DOWN>>>\n\t\t\t    <NOT <AND <EQUAL? ,HERE ,DEEP-SPACE>\n\t\t\t\t      <EQUAL? ,PRSO ,P?IN>>>>\n\t\t       <TELL\n\"The safety line prevents you from leaving, as it is only about\nfive meters long. You must detach it to leave.\" CR>)\n\t\t      (<AND ,THAT-END\n\t\t\t    <NOT ,THIS-END>\n\t\t\t    <VERB? WALK>\n\t\t\t    <IN? ,SAFETY-LINE ,WINNER>>\n\t\t       <MOVE ,SAFETY-LINE ,HERE>\n\t\t       <TELL\n\"You leave the half-secured safety line behind.\" CR>\n\t\t       <>)>)>>"
  },
  "CRETIN": {
   "name": "CRETIN",
   "file": "actions.zil",
   "line": 413,
   "endLine": 429,
   "source": "<ROUTINE CRETIN ()\n\t <COND (<VERB? GIVE>\n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? EAT> <TELL \"Auto-cannibalism is not the answer.\" CR>)\n\t       (<VERB? KILL MUNG>\n\t\t<COND (<==? ,PRSO ,ME>\n\t\t       <JIGS-UP\n\"If you insist...Poof, you're dead!\">)\n\t\t      (ELSE <TELL \"What a silly idea!\" CR>)>)\n\t       (<VERB? TAKE>\n\t\t<TELL \"How romantic!\" CR>)\n\t       (<VERB? DISEMBARK>\n\t\t<TELL \"You'll have to do that on your own.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"That's hard unless your eyes are prehensile.\"\n\t\t      CR>)>>"
  },
  "FIND-IN": {
   "name": "FIND-IN",
   "file": "actions.zil",
   "line": 431,
   "endLine": 436,
   "source": "<ROUTINE FIND-IN (WHERE WHAT \"AUX\" W)\n\t <SET W <FIRST? .WHERE>>\n\t <COND (<NOT .W> <RFALSE>)>\n\t <REPEAT ()\n\t\t <COND (<FSET? .W .WHAT> <RETURN .W>)\n\t\t       (<NOT <SET W <NEXT? .W>>> <RETURN <>>)>>>"
  },
  "FIND-TARGET": {
   "name": "FIND-TARGET",
   "file": "actions.zil",
   "line": 438,
   "endLine": 456,
   "source": "<ROUTINE FIND-TARGET (TARGET \"AUX\" P TX L ROOM)\n\t <COND (<IN? .TARGET ,HERE> ,HERE)\n\t       (ELSE\n\t\t<SET P 0>\n\t\t<REPEAT ()\n\t\t\t<COND (<0? <SET P <NEXTP ,HERE .P>>>\n\t\t\t       <RETURN <>>)\n\t\t\t      (<NOT <L? .P ,LOW-DIRECTION>>\n\t\t\t       <SET TX <GETPT ,HERE .P>>\n\t\t\t       <SET L <PTSIZE .TX>>\n\t\t\t       <COND (<OR <EQUAL? .L ,UEXIT>\n\t\t\t\t\t  <AND <EQUAL? .L ,CEXIT>\n\t\t\t\t\t       <VALUE <GETB .TX ,CEXITFLAG>>>\n\t\t\t\t\t  <AND <EQUAL? .L ,DEXIT>\n\t\t\t\t\t       <FSET? <GETB .TX ,DEXITOBJ>\n\t\t\t\t\t\t      ,OPENBIT>>>\n\t\t\t\t      <SET ROOM <GETB .TX 0>>\n\t\t\t\t      <COND (<IN? .TARGET .ROOM>\n\t\t\t\t\t     <RETURN .ROOM>)>)>)>>)>>"
  },
  "COMPUTER-FCN": {
   "name": "COMPUTER-FCN",
   "file": "actions.zil",
   "line": 460,
   "endLine": 641,
   "source": "<ROUTINE COMPUTER-FCN (\"AUX\" N)\n\t <COND (<==? ,WINNER ,COMPUTER>\n\t\t<COND (<NOT ,COMPUTER-ON>\n\t\t       <SETG COMPUTER-ON T>\n\t\t       <TELL \"The computer turns itself on.\" CR>)>\n\t\t<COND (<OR <VERB? WALK-TO>\n\t\t\t   <AND <VERB? SET> <==? ,PRSO ,COURSE>>>\n\t\t       <COND (<VERB? WALK-TO> <SETG PRSI ,PRSO>)>\n\t\t       <COND (,DOCKED?\n\t\t\t      <TELL ,ROPES-OFF CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (,ORBIT-MATCHED\n\t\t\t      <TELL\n\"\\\"We just got here! I think we should look around first!\\\"\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (,COUNTDOWN\n\t\t\t      <TELL ,BURN-COMING CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (,COURSE-SELECTED\n\t\t\t      <TELL ,IN-TRANSIT CR>\n\t\t\t      <RTRUE>)>\n\t\t       <COND (<KNOWN-COURSE ,PRSI T>\n\t\t\t      <TELL \"\\\"Course being set for \" D ,PRSI \".\">\n\t\t\t      <COURSE-SET>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"The computer sounds surly. \\\"I told you to buy those additional I/O options.\nYou know as well as I do that I can't talk to that stupid mass detector, so\nyou'll just have to tell me the coordinates from its output. Maybe next time\nyou'll listen.\\\"\" CR>)>)\n\t\t      (<VERB? R THETA PHI>\n\t\t       <COND (<G? ,VIEW-COUNT 0>\n\t\t\t      <TELL\n\"\\\"We just got here. You wouldn't be scared, would you?\\\"\" CR>)\n\t\t\t     (<G? ,TRIP-COUNT 0>\n\t\t\t      <TELL ,IN-TRANSIT CR>)\n\t\t\t     (,DOCKED?\n\t\t\t      <TELL ,ROPES-OFF CR>)\n\t\t\t     (,COUNTDOWN\n\t\t\t      <TELL ,BURN-COMING CR>)\n\t\t\t     (T <>)>)\n\t\t      (<VERB? NO>\n\t\t       <SETG GOT-INSTRUCTIONS <>>\n\t\t       <SETG R-VALUE <>>\n\t\t       <SETG THETA-VALUE <>>\n\t\t       <SETG PHI-VALUE <>>\n\t\t       <SETG GIVE-UP <>>\n\t\t       <SETG LOST <>>\n\t\t       <TELL \"\\\"Okay.\\\"\" CR>)\n\t\t      (<VERB? YES>\n\t\t       <COND (<AND ,PRSO <NOT <==? ,PRSO ,COURSE>>>\n\t\t\t      <TELL \"\\\"You can't confirm that!\\\"\" CR>)\n\t\t\t     (,GOT-INSTRUCTIONS\n\t\t\t      <SETG GOT-INSTRUCTIONS <>>\n\t\t\t      <SETG COUNTDOWN T>\n\t\t\t      <ENABLE <QUEUE I-BURN 3>>\n\t\t\t      <TELL\n\"\\\"Thank you. New navigational program will initiate in fifteen seconds.\nThere will be a course correction burn of \" N <+ 30 <RANDOM 30>> \" seconds\nduration. I advise you to fasten your seat belt.\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"No pending program. Confirmation ignored.\\\"\" CR>)>)\n\t\t      (<VERB? LAND>\n\t\t       <COND (,PRSO\n\t\t\t      <COND (<==? ,PRSO ,ARTIFACT>\n\t\t\t\t     <PERFORM ,V?LAND>\n\t\t\t\t     <RTRUE>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <PERFORM ,V?SET ,COURSE ,PRSO>\n\t\t\t\t     <RTRUE>)>)\n\t\t\t     (,DOCKED? <TELL\n\"\\\"Error. I am already landed. Program cancelled.\\\"\" CR>)\n\t\t\t     (<G? ,VIEW-COUNT 0>\n\t\t\t      <TELL\n\"\\\"Working...working...program aborted. The object is spinning too fast for a\nsafe landing. I can maintain current synchronized course indefinitely.\\\"\" CR>)\n\t\t\t     (ELSE <TELL\n\"\\\"Program cancelled. There is nothing nearby to land on.\\\"\" CR>)>)\n\t\t      (<VERB? EXAMINE>\n\t\t       <COND (<EQUAL? ,PRSO ,MISSION-STATUS ,COURSE>\n\t\t\t      <PERFORM ,V?REPORT ,MISSION-STATUS>\n\t\t\t      <RTRUE>)\n\t\t\t     (ELSE <TELL\n\"\\\"Your eyes are better than mine for that.\\\"\" CR>)>)\n\t\t      (<VERB? HELLO> <TELL \"\\\"Hello, astronaut.\\\"\" CR>)\n\t\t      (<VERB? FIND>\n\t\t       <COND (<==? ,PRSO ,ME>\n\t\t\t      <PERFORM ,V?REPORT ,MISSION-STATUS>\n\t\t\t      <RTRUE>)\n\t\t\t     (<SET N <KNOWN-COURSE ,PRSO <>>>\n\t\t\t      <REPORT-LOCATION ,PRSO .N 1>)\n\t\t\t     (ELSE\n\t\t\t      <TELL \"\\\"I don't know where that is.\\\"\" CR>)>)\n\t\t      (<OR <AND <VERB? REPORT>\n\t\t\t\t<==? ,PRSO ,MISSION-STATUS>>\n\t\t\t   <AND <VERB? SGIVE GIVE>\n\t\t\t\t<EQUAL? ,MISSION-STATUS ,PRSO ,PRSI>>>\n\t\t       <COND (,LOST\n\t\t\t      <TELL\n\"\\\"We're on our way somewhere unpromising, that's all I can tell you.\\\"\" CR>)\n\t\t\t     (,GIVE-UP\n\t\t\t      <TELL\n\"\\\"You've given up and are heading for \" D ,GIVE-UP \", remember?\\\"\" CR>)\n\t\t\t     (,DOCKED?\n\t\t\t      <TELL\n\"\\\"We've docked with this odd object. I think those tentacles may have\nbroken something; I don't feel too well.\\\"\" CR>)\n\t\t\t     (<G? ,VIEW-COUNT 0>\n\t\t\t      <TELL\n\"\\\"We're on a parallel course with a strange, rotating artifact.\\\"\" CR>)\n\t\t\t     (<G? ,TRIP-COUNT 0>\n\t\t\t      <TELL\n\"\\\"We're heading towards that newly reported unknown mass.\">\n\t\t\t      <COND (<G? ,TRIP-COUNT 2>\n\t\t\t\t     <TELL\n\" We are being scanned by radiation emanating from that mass.\">)>\n\t\t\t      <TELL \"\\\"\" CR>)\n\t\t\t     (,COUNTDOWN\n\t\t\t      <TELL\n\"\\\"Counting down to course correction.\\\"\" CR>)\n\t\t\t     (,GOT-INSTRUCTIONS\n\t\t\t      <TELL\n\"\\\"Waiting for confirmation of new course.\\\"\" CR>)\n\t\t\t     (<AND <0? ,R-VALUE>\n\t\t\t\t   <0? ,THETA-VALUE>\n\t\t\t\t   <0? ,PHI-VALUE>>\n\t\t\t      <TELL\n\"\\\"The mass detector has reported discovery of a new mass concentration.\nOther than that, things have been pretty dull around here.\\\"\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"\\\"We have a partially specified new course:\">\n\t\t\t      <COND (<NOT <0? ,R-VALUE>>\n\t\t\t\t     <TELL \" R is \" N ,R-VALUE \".\">)>\n\t\t\t      <COND (<NOT <0? ,THETA-VALUE>>\n\t\t\t\t     <TELL \" Theta is \" N ,THETA-VALUE \".\">)>\n\t\t\t      <COND (<NOT <0? ,PHI-VALUE>>\n\t\t\t\t     <TELL \" Phi is \" N ,PHI-VALUE \".\\\"\">)>\n\t\t\t      <CRLF>)>)\n\t\t      (<AND <VERB? LAMP-OFF> <==? ,PRSO ,ALARM>>\n\t\t       <COND (<NOT ,ALARM?>\n\t\t\t      <TELL \"\\\"It's not on...\\\"\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"\\\"And about time...\\\"\" CR>\n\t\t\t      <SETG ALARM? <>>\n\t\t\t      <QUEUE I-ALARM 0>)>)\n\t\t      (<VERB? WAIT>\n\t\t       <TELL\n\"\\\"I can wait quite easily. Probably more easily than you.\\\"\" CR>)\n\t\t      (<AND <VERB? KILL ATTACK MUNG> <==? ,PRSO ,ME>>\n\t\t       <TELL\n\"\\\"That is not among my capabilities. Sigh.\\\"\" CR>)\n\t\t      (<PROB 25>\n\t\t       <TELL\n\"\\\"That is not among my capabilities. Perhaps if you were to invest in\na few upgrades I could do some of these things, but no...\\\"\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"\\\"I'm only a navigational computer. That is not one of my functions.\\\"\" CR>)>)\n\t       (<VERB? HELLO>\n\t\t<TELL\n\"\\\"I haven't the patience for small talk.\\\"\" CR>)\n\t       (<VERB? LAMP-ON>\n\t\t<COND (,COMPUTER-ON\n\t\t       <ALREADY \"on\" ,COMPUTER>)\n\t\t      (ELSE\n\t\t       <SETG COMPUTER-ON T>\n\t\t       <TELL \"The computer comes on.\" CR>)>)\n\t       (<VERB? LAMP-OFF>\n\t\t<COND (,COMPUTER-ON\n\t\t       <SETG COMPUTER-ON <>>\n\t\t       <TELL\n\"\\\"If you insist, but my programming impels me to come back on if\nanything important happens.\\\"\" CR>)\n\t\t      (ELSE <ALREADY \"off\" ,COMPUTER>)>)\n\t       (<VERB? GIVE>\n\t\t<TELL\n\"\\\"I might be able to take that if you had bought the extensors I asked for,\nbut no...\\\"\" CR>)\n\t       (<AND <VERB? TELL> <NOT ,P-CONT>>\n\t\t<TELL \"\\\"Yes?\\\"\" CR>)>>"
  },
  "I-BURN": {
   "name": "I-BURN",
   "file": "actions.zil",
   "line": 654,
   "endLine": 673,
   "source": "<ROUTINE I-BURN ()\n\t <SETG COUNTDOWN <>>\n\t <ROB ,DEEP-SPACE>\n\t <TELL\n\"The ship's thrusters spin it into a proper attitude, and then the engines\nbegin their course correction burn. There are significant G's and not\na little vibration.\" CR>\n\t <COND (,SEAT-BELT?\n\t\t<TELL \"Fortunately, you are securely belted in.\" CR>\n\t\t<SETG COURSE-SELECTED T>\n\t\t<ENABLE <QUEUE I-TRIP 3>>)\n\t       (ELSE\n\t\t<SETG R-VALUE 0>\n\t\t<SETG THETA-VALUE 0>\n\t\t<SETG PHI-VALUE 0>\n\t\t<SETG GOT-INSTRUCTIONS <>>\n\t\t<SETG WINNER ,ADVENTURER>\n\t\t<JIGS-UP\n\"The G forces drive you against the rear bulkhead (which is unpadded,\nof course). You are crushed to death.\">)>>"
  },
  "I-TRIP": {
   "name": "I-TRIP",
   "file": "actions.zil",
   "line": 689,
   "endLine": 742,
   "source": "<ROUTINE I-TRIP ()\n\t <TELL \"Time passes as you journey towards your destination.\" CR>\n\t <SETG TRIP-COUNT <+ ,TRIP-COUNT 1>>\n\t <COND (,GIVE-UP\n\t\t<TELL\n\"|\nYou arrive at \" D ,GIVE-UP \" safe and sound. It would be tedious to continue,\nas \" D ,GIVE-UP \" has no prospects as a locale for quantum black holes, so\nthis is the end.|\n\">\n\t\t<FINISH>\n\t\t<RTRUE>)>\n\t <COND (<EQUAL? ,HERE\n\t\t\t,SPACESHIP-BRIDGE ,SPACESHIP-AIRLOCK ,DEEP-SPACE>\n\t\t<COND (<OR ,LOST <NOT <==? ,DESTINATION ,MASS>>>\n\t\t       <TELL \"There is nothing interesting visible ahead.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL <GET ,TRIP-DESCS ,TRIP-COUNT> CR>)>)>\n\t <COND (<==? ,TRIP-COUNT 5>\n\t\t<COND (,LOST\n\t\t       <TELL\n\"You have reached your destination. The computer speaks: \\\"There's\nnothing here, as I predicted. You never listen do you? This trip is over;\nSee if I'll ever work with you again...\\\"|\n|\" CR>\n\t\t       <FINISH>)\n\t\t      (<==? ,DESTINATION ,MASS>\n\t\t       <TELL\n\"There is a brief burn as the ship matches course with the artifact. You\nare hanging in space about half a kilometer away from the waist of the object.\nThe Starcross's engines shut down. The computer speaks: \\\"Program completed.\nWe are being scanned by low level radiation. Awaiting instructions.\\\"\" CR>\n\t\t       <SETG VIEW-COUNT 1>\n\t\t       <ENABLE <QUEUE I-VIEW 2>>\n\t\t       <SETG ORBIT-MATCHED T>)\n\t\t      (ELSE\n\t\t       <TELL\n\"Ahead is a nondescript nickel-iron asteroid, rather a small one too.\nObviously, you have picked the wrong destination.|\n|\" CR>\n\t\t       <FINISH>)>)\n\t       (ELSE\n\t\t<COND (<AND <NOT ,LOST>\n\t\t\t    <==? ,DESTINATION ,MASS>>\n\t\t       <COND (<==? ,TRIP-COUNT 3>\n\t\t\t      <TELL\n\"The computer says, \\\"Telescopic observations reveal the object ahead to\nbe extremely regular in shape. This is not your usual asteroid.\\\"\" CR>)\n\t\t\t     (<==? ,TRIP-COUNT 4>\n\t\t\t      <TELL\n\"The computer remarks: \\\"I detect low-level scanning taking place. The\nradiation is not dangerous. I think we may be getting into something\nmore than we expected here.\\\"\" CR>)>)>\n\t\t<ENABLE <QUEUE I-TRIP 3>>)>>"
  },
  "I-VIEW": {
   "name": "I-VIEW",
   "file": "actions.zil",
   "line": 747,
   "endLine": 755,
   "source": "<ROUTINE I-VIEW ()\n\t <COND (<EQUAL? ,HERE ,SPACESHIP-BRIDGE ,SPACESHIP-AIRLOCK>\n\t\t<TELL\n\"As the object rotates below, the features of a different area become\nvisible through the viewport.\" CR>\n\t\t<TELL <GET ,VIEW-TABLE <MOD <- ,VIEW-COUNT 1> 4>> CR>)>\n\t <SETG VIEW-COUNT <+ ,VIEW-COUNT 1>>\n\t <COND (<==? ,VIEW-COUNT 5> <TENTACLE-APPEARS>)\n\t       (ELSE <ENABLE <QUEUE I-VIEW 2>>)>>"
  },
  "TENTACLE-APPEARS": {
   "name": "TENTACLE-APPEARS",
   "file": "actions.zil",
   "line": 765,
   "endLine": 805,
   "source": "<ROUTINE TENTACLE-APPEARS ()\n\t <ENABLE <QUEUE I-MOUSE 1>>\n\t <ENABLE <QUEUE I-BAD-AIR <+ 75 <RANDOM 50>>>>\n\t <TELL\n\"Suddenly an odd protrusion near the red dome splits open and a huge\narticulated metal tentacle issues from it at great speed.\">\n\t <COND (<EQUAL? ,HERE ,DEEP-SPACE>\n\t\t<CRLF>\n\t\t<JIGS-UP\n\"The tentacle grabs the Starcross, spinning you off into the depths of\nspace!\">)\n\t       (<EQUAL? ,HERE ,SPACESHIP-BRIDGE ,SPACESHIP-AIRLOCK>\n\t\t<TELL\n\" It approaches the ship and delicately wraps itself around the hull.\"> <COND (,SEAT-BELT?\n\t\t\t  <TELL\n\t        \" You are slammed against your seat\">)\n\t\t\t (ELSE\n\t\t\t  <TELL\n\t\t\" You are smashed against the bulkhead\">)>\n\t\t   <TELL \" as the tentacle accelerates the Starcross to the\nartifact's speed of rotation. Inexorably, your ship is drawn toward the dome.\nWhen you are a few tens of meters away, three smaller tentacles issue forth\nand grapple the ship solidly to the surface of the artifact. The large\ntentacle retreats into its housing, which closes.|\">\n<COND (,SEAT-BELT?\n       <TELL\n\"|\nYou are disoriented: now that you are attached to the artifact, which is\nrotating, \\\"up\\\" and \\\"down\\\" have taken on new meanings. Your sense\nof balance tells you that your ship is clinging to the underside of some\nenormous object, and if you aren't careful you will fall! \\\"Up\\\" now\nrefers to the center of the object, \\\"down\\\" to the immensities of space.\" CR>)\n      (ELSE\n       <JIGS-UP \"Unfortunately, the accelerations involved were tremendous,\nand being smashed into the walls didn't help your condition either.\">)>)\n\t       (ELSE\n\t\t<JIGS-UP\n\"Something has grabbed the ship! You are slammed against the bulkhead!\nAfter a great deal of buffeting, there is a metallic clang and the ship is\nat rest, but unfortunately, so are you.\">)>\n\t <SETG DOCKED? T>>"
  },
  "TAPE-FCN": {
   "name": "TAPE-FCN",
   "file": "actions.zil",
   "line": 811,
   "endLine": 840,
   "source": "<ROUTINE TAPE-FCN ()\n\t <COND (<VERB? TAKE>\n\t\t<COND (<IN? ,TAPE-PLAYER ,SPIDER>\n\t\t       <TELL \"The spider refuses to part with it.\" CR>)\n\t\t      (ELSE <RFALSE>)>)\n\t       (<NOT <IN? ,TAPE-PLAYER ,WINNER>>\n\t\t<DONT-HAVE ,TAPE-PLAYER>)\n\t       (<VERB? LAMP-ON>\n\t\t<COND (,TAPE-ON\n\t\t       <ALREADY \"on\" ,TAPE-PLAYER>)\n\t\t      (ELSE\n\t\t       <SETG TAPE-ON T>\n\t\t       <TELL \"The \" D ,PRSO \" comes on.\" CR>)>)\n\t       (<VERB? LAMP-OFF>\n\t\t<COND (,TAPE-ON\n\t\t       <SETG TAPE-ON <>>\n\t\t       <TELL \"The \" D ,PRSO \" is now off.\" CR>)\n\t\t      (ELSE <ALREADY \"off\" ,TAPE-PLAYER>)>)\n\t       (<VERB? PLAY WEAR>\n\t\t<COND (<NOT ,TAPE-ON>\n\t\t       <TELL \"First, you must turn on the tape player.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"The player picks a recently referenced selection: \">\n\t\t       <TELL <PICK-ONE ,TAPES> CR>)>)\n\t       (<VERB? LISTEN>\n\t\t<COND (,TAPE-ON\n\t\t       <TELL\n\"The tape player continues with the previous selection.\" CR>)\n\t\t      (ELSE <TELL \"The player isn't on.\" CR>)>)>>"
  },
  "MOUSE-CONT": {
   "name": "MOUSE-CONT",
   "file": "actions.zil",
   "line": 855,
   "endLine": 861,
   "source": "<ROUTINE MOUSE-CONT ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL\n\"The maintenance mouse buzzes briefly, then rotates its \\\"ears\\\" in your\ndirection as you take the \" D ,PRSO \". It seems profoundly puzzled at\nyour behavior.\" CR>\n\t\t<RFALSE>)>>"
  },
  "MOUSE-GOODIES": {
   "name": "MOUSE-GOODIES",
   "file": "actions.zil",
   "line": 863,
   "endLine": 868,
   "source": "<ROUTINE MOUSE-GOODIES ()\n\t <COND (<FIRST? ,MOUSE>\n\t\t<TELL \" It has already collected \">\n\t\t<PRINT-CONTENTS ,MOUSE>\n\t\t<TELL \".\">)>\n\t <RTRUE>>"
  },
  "MOUSE-FCN": {
   "name": "MOUSE-FCN",
   "file": "actions.zil",
   "line": 870,
   "endLine": 928,
   "source": "<ROUTINE MOUSE-FCN (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-OBJDESC>\n\t\t<COND (<IN? ,MOUSE ,GARAGE>\n\t\t       <TELL\n\"There is a maintenance mouse here.\">)\n\t\t      (,SEEN-MOUSE?\n\t\t       <TELL\n\"There is a maintenance mouse here, cheerfully scouring the area for garbage.\">\n\t\t       <MOUSE-GOODIES>)\n\t\t      (ELSE\n\t\t       <SETG SEEN-MOUSE? T>\n\t\t       <TELL\n\"A small metal contraption about a meter long and half a meter high\nenters the room.\" ,LONG-MOUSE>)>\n\t\t<CRLF>)\n\t       (<AND <NOT <IN? ,MOUSE ,HERE>>\n\t\t     <OR <EQUAL? ,GLOBAL-MOUSE ,PRSO ,PRSI>\n\t\t\t <EQUAL? ,MOUSE ,PRSO ,PRSI> ;\"CHOMPING AGAIN\">>\n\t\t<COND (<VERB? FOLLOW>\n\t\t       <COND (<NOT ,LIT>\n\t\t\t      <TELL \"It's too dark to follow the mouse.\" CR>)\n\t\t\t     (,GARAGED?\n\t\t\t      <TELL \"You can't go through the hole.\" CR>)\n\t\t\t     (,MFOLLOW\n\t\t\t      <DO-WALK ,MFOLLOW> <RTRUE>)\n\t\t\t     (ELSE\n\t\t\t      <TELL \"You've lost him.\" CR>)>)\n\t\t      (ELSE <TELL \"There is no mouse here.\" CR>)>)\n\t       (<VERB? FOLLOW>\n\t\t<TELL \"He's right here!\" CR>)\n\t       (<AND <VERB? ZAP> <CAN-ZAP?>>\n\t\t<DISABLE <INT I-MOUSE>>\n\t\t<REMOVE ,MOUSE>\n\t\t<TELL \"The mouse is obliterated, squealing piteously.\" CR>)\n\t       (<VERB? MUNG>\n\t\t<TELL \"The maintenance mouse is unscathed.\" CR>)\n\t       (<VERB? EMPTY>\n\t\t<COND (<ROB ,MOUSE ,WINNER>\n\t\t       <TELL \"You get some booty!\" CR>)>)\n\t       (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<COND (<VERB? EXAMINE>\n\t\t       <TELL\n\"The maintenance mouse is a boxy machine with a large receptacle on top in\nwhich garbage it collects can be stored. It is buzzing around cleaning the\narea, diligently polishing the floor, and waving its \\\"ears\\\" (small dish\nantennae) about.\" CR>)>\n\t\t<COND (<FIRST? ,MOUSE>\n\t\t       <TELL \"The receptacle on the mouse's back contains: \">\n\t\t       <PRINT-CONTENTS ,MOUSE>\n\t\t       <TELL \".\" CR>)\n\t\t      (ELSE <TELL \"The receptacle is empty.\" CR>)>)\n\t       (<VERB? LOOK-UNDER> <TELL \"There is no dirt there.\" CR>)\n\t       (<VERB? BOARD>\n\t\t<TELL\n\"The mouse buzzes piteously from the overload until you get back off.\nIt only wants to collect small pieces of debris.\" CR>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<TELL\n\"The mouse has no lid, just an open receptacle on its back.\" CR>)>>"
  },
  "OUT-OF-HOLE": {
   "name": "OUT-OF-HOLE",
   "file": "actions.zil",
   "line": 935,
   "endLine": 944,
   "source": "<ROUTINE OUT-OF-HOLE ()\n\t <COND (<AND ,SEEN-MOUSE? ,LIT>\n\t\t<TELL\n\"A maintenance mouse\" ,HOLE-SHUTS \".\"  CR>)\n\t       (ELSE\n\t\t<SETG SEEN-MOUSE? T>\n\t\t<TELL\n\"A small metal contraption\" ,HOLE-SHUTS \". The device stops in its tracks and\nbuzzes briefly, allowing you a closer look.\" ,LONG-MOUSE CR>)>\n\t <RTRUE>>"
  },
  "I-MOUSE": {
   "name": "I-MOUSE",
   "file": "actions.zil",
   "line": 955,
   "endLine": 1031,
   "source": "<ROUTINE I-MOUSE (\"AUX\" (OLDM <LOC ,MOUSE>) (HERE? <IN? ,MOUSE ,HERE>)\n\t\t  ROBBED?)\n\t <ENABLE <QUEUE I-MOUSE 2>>\n\t <REMOVE ,MOUSE-HOLE>\n\t <SETG GARAGED? <>>\n\t <SET ROBBED? <ROB <LOC ,MOUSE> ,MOUSE>>\n\t <COND (<AND .ROBBED? .HERE? <NOT <IN? ,MOUSE ,GARAGE>>>\n\t\t<COND (,LIT\n\t\t       <TELL\n\"The maintenance mouse, buzzing happily, picks up some refuse.\" CR>)\n\t\t      (ELSE <TELL \"You hear a cheerful buzzing nearby.\" CR>)>)>\n\t <COND (<IN? ,MOUSE ,GARAGE>\n\t\t<COND (<FIRST? ,MOUSE>\n\t\t       <ROB ,MOUSE ,TRASH-BIN>\n\t\t       <COND (<IN? ,BLUE-DISK ,TRASH-BIN>\n\t\t\t      <MOVE ,BLUE-DISK ,GARAGE>)>\n\t\t       <COND (<IN? ,RED-DISK ,TRASH-BIN>\n\t\t\t      <MOVE ,RED-DISK ,GARAGE>)>\n\t\t       <COND (<AND .HERE? ,LIT>\n\t\t\t      <TELL\n\"The mouse rolls up to the trash bin and dumps some stuff into it.\" CR>)>)>\n\t\t<COND (<PROB 40>\n\t\t       <COND (<AND .HERE? ,LIT>\n\t\t\t      <TELL\n\"The mouse leaves as unobtrusively as it arrived.\" CR>)>\n\t\t       <MOVE ,MOUSE ,MOUSE-LOC>\n\t\t       <COND (<==? ,MOUSE-LOC ,HERE>\n\t\t\t      <MOVE ,MOUSE-HOLE ,HERE>\n\t\t\t      <OUT-OF-HOLE>)>)>\n\t\t.HERE?)\n\t       (<AND .HERE? <PROB 30>>\n\t\t<COND (,LIT\n\t\t       <TELL\n\"The maintenance mouse sits in the middle of the room, buzzing\ncontentedly.\" CR>)\n\t\t       (ELSE <TELL \"There is buzzing nearby.\" CR>)>)\n\t       (<AND <FIRST? ,MOUSE> <PROB 15>>\n\t\t<SETG MOUSE-LOC <LOC ,MOUSE>>\n\t\t<MOVE ,MOUSE ,GARAGE>\n\t\t<SETG GARAGED? T>\n\t\t<COND (<==? ,HERE ,GARAGE>\n\t\t       <COND (,LIT\n\t\t\t      <TELL\n\"A maintenance mouse enters the garage, preparing to dump a load of\ntrash.\" CR>)>)\n\t\t      (.HERE?\n\t\t       <MOVE ,MOUSE-HOLE .HERE?>\n\t\t       <COND (,LIT\n\t\t       <TELL\n\"The mouse disappears into a heretofore unnoticed hole in the wall, which\ncloses and becomes nearly invisible.\" CR>)>)>)\n\t       (ELSE\n\t\t<MOVE-MOUSE>\n\t\t<SET ROBBED? <ROB <LOC ,MOUSE> ,MOUSE>>\n\t\t<COND (<NOT <IN? ,MOUSE ,HERE>>\n\t\t       <COND (<AND .HERE? ,LIT>\n\t\t\t      <TELL\n\"The maintenance mouse glides happily away, looking for new dirt to\nconquer.\" CR>\n\t\t\t      <RTRUE>)>)\n\t\t      (<AND <NOT ,SEEN-MOUSE?> ,LIT>\n\t\t       <MOUSE-FCN ,M-OBJDESC>)\n\t\t      (,LIT\n\t\t       <TELL\n\"A maintenance mouse buzzes into the room, intent on trash.\">\n\t\t       <MOUSE-GOODIES>\n\t\t       <CRLF>)>\n\t\t<SET HERE? <IN? ,MOUSE ,HERE>>\n\t\t<COND (<NOT ,LIT> T)\n\t\t      (.ROBBED?\n\t\t       <COND (.HERE?\n\t\t\t      <TELL\n\"The mouse collects some discarded items.\" CR>)>)\n\t\t      (.HERE?\n\t\t       <TELL\n\"The mouse is diligently cleaning the floor and looking for garbage.\" CR>)>)>\n\t <IN? ,MOUSE ,HERE>>"
  },
  "MOVE-MOUSE": {
   "name": "MOVE-MOUSE",
   "file": "actions.zil",
   "line": 1033,
   "endLine": 1060,
   "source": "<ROUTINE MOVE-MOUSE (\"AUX\" (H <LOC ,MOUSE>) (P 0) TX L (D <>))\n\t <REPEAT ()\n\t\t <COND (<L? <SET P <NEXTP .H .P>> ,LOW-DIRECTION>\n\t\t\t<COND (.D\n\t\t\t       <COND (<EQUAL? .D ,UP-A-TREE>\n\t\t\t\t      <COND (<IN? ,MOUSE ,HERE>\n\t\t\t\t\t     <TELL\n\"The mouse tries to climb a tree, but fails dismally.\" CR>)>\n\t\t\t\t      <RFALSE>)\n\t\t\t\t     (<EQUAL? .D ,MAZE>\n\t\t\t\t      <COND (<IN? ,MOUSE ,HERE>\n\t\t\t\t\t     <TELL\n\"The mouse tries to enter the warren, but is prodded away by several\naliens.\" CR>)>\n\t\t\t\t      <RFALSE>)\n\t\t\t\t     (ELSE\n\t\t\t\t      <MOVE ,MOUSE .D>)>)>\n\t\t\t<RTRUE>)\n\t\t       (ELSE\n\t\t\t<SET TX <GETPT .H .P>>\n\t\t\t<SET L <PTSIZE .TX>>\n\t\t\t<COND (<OR <EQUAL? .L ,UEXIT>\n\t\t\t\t   <AND <EQUAL? .L ,CEXIT>\n\t\t\t\t\t<VALUE <GETB .TX ,CEXITFLAG>>>>\n\t\t\t       <COND (<OR <NOT .D> <PROB 50>>\n\t\t\t\t      <COND (<IN? ,MOUSE ,HERE>\n\t\t\t\t\t     <SETG MFOLLOW .P>)>\n\t\t\t\t      <SET D <GETB .TX ,REXIT>>)>)>)>>>"
  },
  "DOOR-PSEUDO": {
   "name": "DOOR-PSEUDO",
   "file": "actions.zil",
   "line": 1069,
   "endLine": 1072,
   "source": "<ROUTINE DOOR-PSEUDO ()\n\t <COND (<VERB? THROUGH>\n\t\t<TELL \"Please specify a direction.\" CR>)\n\t       (<VERB? EXAMINE> <AS-ADVERTISED>)>>"
  },
  "HOLE-FCN": {
   "name": "HOLE-FCN",
   "file": "actions.zil",
   "line": 1074,
   "endLine": 1082,
   "source": "<ROUTINE HOLE-FCN ()\n\t <COND (<VERB? OPEN>\n\t\t<TELL\n\"There is no apparent way to open the mouse hole. You can barely even see\nthe seam between it and the wall.\" CR>)\n\t       (<VERB? MUNG>\n\t\t<TELL\n\"This has no effect except making it even less obvious where the\nhole is.\" CR>)>>"
  },
  "TRASH-BIN-FCN": {
   "name": "TRASH-BIN-FCN",
   "file": "actions.zil",
   "line": 1086,
   "endLine": 1119,
   "source": "<ROUTINE TRASH-BIN-FCN ()\n\t <COND (<VERB? LOOK-INSIDE EXAMINE>\n\t\t<TELL\n\"The bin is filled with all sorts of flotsam and jetsam. Bones, clothing,\nand broken spears are just some of the items visible on the top layer.\">\n\t\t<COND (<FIRST? ,TRASH-BIN>\n\t\t       <TELL \" The bin also contains: \">\n\t\t       <PRINT-CONTENTS ,TRASH-BIN>\n\t\t       <TELL \".\">)>\n\t\t<CRLF>)\n\t       (<VERB? SHAKE>\n\t\t<TELL \"The bin is solidly affixed to the floor.\" CR>)\n\t       (<VERB? REACH EMPTY>\n\t\t<TELL\n\"There's a lot of stuff inside the bin.\" CR>)\n\t       (<VERB? SEARCH DIG THROUGH>\n\t\t<COND (<FSET? ,GREEN-KEY ,TOUCHBIT>\n\t\t       <TELL\n\"You find nothing else of interest.\" CR>)\n\t\t      (<==? ,TRASH-COUNT 0>\n\t\t       <TELL\n\"You have searched through part of the bin, but have found nothing of\ninterest.\" CR>\n\t\t       <SETG TRASH-COUNT 25>)\n\t\t      (<PROB ,TRASH-COUNT>\n\t\t       <MOVE ,GREEN-KEY ,TRASH-BIN>\n\t\t       <FSET ,GREEN-KEY ,TOUCHBIT>\n\t\t       <THIS-IS-IT ,GREEN-KEY>\n\t\t       <TELL\n\"Ahah, there's something! It appears to be a green crystal rod.\" CR>)\n\t\t      (ELSE\n\t\t       <SETG TRASH-COUNT <+ ,TRASH-COUNT 25>>\n\t\t       <TELL\n\"You continue sifting through the junk; nothing of interest turns up.\" CR>)>)>>"
  },
  "HOLE-PSEUDO": {
   "name": "HOLE-PSEUDO",
   "file": "actions.zil",
   "line": 1121,
   "endLine": 1137,
   "source": "<ROUTINE HOLE-PSEUDO ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The chute seems bottomless and warm air rises from it.\" CR>)\n\t       (<AND <VERB? DROP> <==? ,PRSI ,PSEUDO-OBJECT>>\n\t\t<COND (<IDROP>\n\t\t       <COND (<AND <EQUAL? ,PRSO ,SPACESUIT ,SAFETY-LINE>\n\t\t\t\t   <APPLY <GETP ,PRSO ,P?ACTION>>>\n\t\t\t      <RTRUE>)>\n\t\t       <REMOVE ,PRSO>\n\t\t       <TELL\n\"The \" D ,PRSO \" falls down the chute and disappears.\" CR>)\n\t\t      (ELSE <RTRUE>)>)\n\t       (<VERB? CLIMB-DOWN THROUGH>\n\t\t<JIGS-UP\n\"The chute leads straight to the input hopper of a fusion reactor which gets\nsome of its power from trash. It's now getting some of its power from you.\">)>>"
  },
  "SPHERE-SHIP-FCN": {
   "name": "SPHERE-SHIP-FCN",
   "file": "actions.zil",
   "line": 1143,
   "endLine": 1145,
   "source": "<ROUTINE SPHERE-SHIP-FCN (RARG)\n\t <COND (<==? .RARG ,M-ENTER>\n\t\t<ENABLE <QUEUE I-SPIDER 1>>)>>"
  },
  "BUBBLE-ROOM-FCN": {
   "name": "BUBBLE-ROOM-FCN",
   "file": "actions.zil",
   "line": 1147,
   "endLine": 1149,
   "source": "<ROUTINE BUBBLE-ROOM-FCN (RARG)\n\t <COND (<==? .RARG ,M-ENTER>\n\t\t<DISABLE <INT I-SPIDER>>)>>"
  },
  "BUBBLE-PSEUDO": {
   "name": "BUBBLE-PSEUDO",
   "file": "actions.zil",
   "line": 1151,
   "endLine": 1155,
   "source": "<ROUTINE BUBBLE-PSEUDO ()\n\t <COND (<VERB? MUNG>\n\t\t<TELL \"The bubble is made of indestructible plastic.\" CR>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<TELL \"You can see the dock area quite clearly.\" CR>)>>"
  },
  "I-SPIDER": {
   "name": "I-SPIDER",
   "file": "actions.zil",
   "line": 1157,
   "endLine": 1177,
   "source": "<ROUTINE I-SPIDER ()\n\t <COND (<OR <NOT <IN? ,SPIDER ,SPHERE-SHIP>>\n\t\t    <NOT <IN? ,ADVENTURER ,SPHERE-SHIP>>>\n\t\t<RFALSE>)>\n\t <ENABLE <QUEUE I-SPIDER 1>>\n\t <COND (<NOT ,REFERRED?>\n\t\t<COND (<IN? ,TAPE-PLAYER ,SPIDER>\n\t\t       <TELL\n\"The spider, oblivious to all else, is fiddling with the tape player.\nEvery so often, he makes a happy little noise.\" CR>)\n\t\t      (<NOT ,TALKED?>\n\t\t       <COND (<PROB 25>\n\t\t\t      <SPIDER-GREETING>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"The spider watches you with multifaceted eyes.\" CR>)>)\n\t\t      (ELSE\n\t\t       <TELL\n\"The spider sidles along the wires towards you. \">\n\t\t       <TELL \"He asks \" <PICK-ONE ,SPIDER-QUESTIONS> CR>)>)\n\t       (ELSE <SETG REFERRED? <>>)>>"
  },
  "TRANSLATOR-FCN": {
   "name": "TRANSLATOR-FCN",
   "file": "actions.zil",
   "line": 1190,
   "endLine": 1191,
   "source": "<ROUTINE TRANSLATOR-FCN ()\n\t <COND (<VERB? ZAP> <PERFORM ,V?ZAP ,ZAP-GUN ,SPIDER> <RTRUE>)>>"
  },
  "SPIDER-FCN": {
   "name": "SPIDER-FCN",
   "file": "actions.zil",
   "line": 1193,
   "endLine": 1255,
   "source": "<ROUTINE SPIDER-FCN ()\n\t <SETG REFERRED? T>\n\t <COND (<==? ,SPIDER ,WINNER>\n\t\t<COND (<NOT ,TALKED?>\n\t\t       <SPIDER-GREETING>)>\n\t\t<COND (<IN? ,TAPE-PLAYER ,SPIDER>\n\t\t       <TELL ,ENGROSSED CR>)\n\t\t      (<VERB? EXAMINE FIND IS-IN FOLLOW>\n\t\t       <TELL\n\"\\\"I can't help you there, I'm afraid. I'm quite a stay-at-home, I haven't\nleft my ship for ages; nothing interesting out there any more. Those furry\nones were interesting for a while but they're stagnant now.\\\"\" CR>)\n\t\t      (<AND <VERB? TAKE> <==? ,PRSO ,TAPE-PLAYER>>\n\t\t       <SETG WINNER ,ADVENTURER>\n\t\t       <PERFORM ,V?GIVE ,PRSO ,SPIDER>\n\t\t       <RTRUE>)\n\t\t      (<VERB? TAKE DROP ATTACK KILL MUNG>\n\t\t       <TELL\n\"\\\"I couldn't do that. You're just joking, of course. You humans have a\nstrange idea of humor.\" CR>)\n\t\t      (<VERB? GIVE SGIVE>\n\t\t       <TELL\n\"\\\"No, thank you.\\\" He seems offended that you would ask for an outright\ngift.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"\\\"I see. Thank you.\\\" He seems quite pleased.\" CR>)>)\n\t       (<VERB? EXAMINE> <TELL <GETP ,SPIDER ,P?LDESC> CR>)\n\t       (<VERB? MUNG ZAP>\n\t\t<JIGS-UP\n\"Bad idea. The spider tears you apart with two of its arms.\">)\n\t       (<IN? ,TAPE-PLAYER ,SPIDER>\n\t\t<SETG P-CONT <>>\n\t\t<TELL ,ENGROSSED CR>)\n\t       (<VERB? HELLO TELL>\n\t\t<COND (<NOT ,TALKED?>\n\t\t       <SPIDER-GREETING>\n\t\t       <COND (<VERB? TELL> <RFALSE>)\n\t\t\t     (ELSE <SETG P-CONT <>> <RTRUE>)>)\n\t\t      (<VERB? HELLO>\n\t\t       <TELL \"\\\"Hello, again.\\\"\" CR>)>)\n\t       (<VERB? GIVE>\n\t\t<COND (<==? ,PRSO ,TAPE-PLAYER>\n\t\t       <SETG TALKED? T>\n\t\t       <MOVE ,YELLOW-KEY ,HERE>\n\t\t       <MOVE ,PRSO ,SPIDER>\n\t\t       <FSET ,PRSO ,NDESCBIT>\n\t\t       <FCLEAR ,PRSO ,TAKEBIT>\n\t\t       <PUTP ,SPIDER ,P?LDESC\n\"There is a giant spider here, listening to a tape player.\">\n\t\t       <TELL\n\"The spider examines the tape player and discovers the controls. A random\nsong begins playing. Agitated, he fiddles with the controls again, and a\nlecture begins. He becomes even more agitated. \\\"What a wonderful gift,\nhuman! This will alleviate my boredom for a while. Your culture is young,\nbut you have amassed enough of interest to keep me sane for a few more years.\nI thank you.\\\" He fishes in a pouch and comes up with something. \\\"Perhaps\nyou may find some use for this; I long ago grew bored with such baubles.\\\" He\ntosses a yellow crystal rod at your feet.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"He takes the \" D ,PRSO \" politely, looks it over for a moment, and gives\nit back. \\\"No, thank you,\\\" he sighs.\" CR>)>)>>"
  },
  "SPIDER-GREETING": {
   "name": "SPIDER-GREETING",
   "file": "actions.zil",
   "line": 1260,
   "endLine": 1275,
   "source": "<ROUTINE SPIDER-GREETING ()\n\t <SETG TALKED? T>\n\t <TELL\n\"The spider draws forth an object from a wire clump. He fiddles with it and\na voice issues from it: \\\"Greetings, creature from Earth. Are you afraid of\nme? Come closer, I won't harm you.\\\"|\n|\nThe spider tells you his name is \\\"Gurthark-tun-Besnap,\\\" (or something\nmore-or-less that). Like yourself, he landed here to explore. He failed to\ncontrol the artifact before it left his system, and has been stranded here\nfor centuries. He sighs. \\\"It's getting a little boring. The other inhabitants\nof this place are not too stimulating. The computer was some company until it\nmalfunctioned. When we began to approach your system, I got excited! A whole\nnew culture to learn! The end of boredom, for a while at least. I fed your\nlanguage to my translator, from your radio broadcasts, and have eagerly\nawaited your arrival.\\\" He grins broadly, a fairly horrific sight.\" CR>>"
  },
  "GLOBE-SIZE": {
   "name": "GLOBE-SIZE",
   "file": "actions.zil",
   "line": 1281,
   "endLine": 1292,
   "source": "<ROUTINE GLOBE-SIZE (N)\n\t <TELL \"The silvery globe is the size of \">\n\t <COND (<==? .N 1>\n\t\t<TELL \"an orange\">\n\t\t<COND (<IN? ,BLUE-KEY ,FORCE-FIELD-1>\n\t\t       <TELL\n\". Imbedded in the silver globe is a blue crystal rod\">)>)\n\t       (<==? .N 2> <TELL \"a basketball\">)\n\t       (<==? .N 3> <TELL \"a beachball\">)\n\t       (T\n\t\t<TELL \"four feet and seems embedded in the floor\">)>\n\t <TELL \".\">>"
  },
  "FF-FCN": {
   "name": "FF-FCN",
   "file": "actions.zil",
   "line": 1294,
   "endLine": 1381,
   "source": "<ROUTINE FF-FCN (\"OPTIONAL\" (RARG <>) \"AUX\" F)\n\t <COND (<==? .RARG ,M-OBJDESC>\n\t\t<GLOBE-SIZE ,FF-STRENGTH>\n\t\t<CRLF>\n\t\t<COND (<FIRST? ,FF-HERE>\n\t\t       <PRINT-CONT ,FF-HERE <> 0>)>\n\t\t<RTRUE>)\n\t       (<VERB? TAKE>\n\t\t<TELL \"The globe won't budge no matter how hard you try.\" CR>)\n\t       (<VERB? RUB PUSH>\n\t\t<TELL\n\"The globe feels neither hot nor cold. The globe doesn't move no matter how\nhard you press.\" CR>)\n\t       (<VERB? CLIMB-UP CLIMB-ON BOARD>\n\t\t<TELL\n\"Climbing it gives you a strange feeling, so you get back down.\" CR>)\n\t       (<VERB? PUT-UNDER>\n\t\t<COND (<AND <NOT <FSET? ,PRSO ,TOUCHBIT>>\n\t\t\t    <NOT <TRYTAKE>>>\n\t\t       <RTRUE>)\n\t\t      (<==? ,FF-STRENGTH 4>\n\t\t       <TELL\n\"The globe is now touching the floor (in fact encompassing part of the\nfloor), so you can't put anything under it.\" CR>)\n\t\t      (,UNDER-GLOBE\n\t\t       <TELL\n\"The \" D ,UNDER-GLOBE \" is already under the globe.\" CR>)\n\t\t      (<FSET? ,PRSO ,TAKEBIT>\n\t\t       <COND (<EQUAL? ,PRSO ,RED-DISK ,BLUE-DISK>\n\t\t\t      <PERFORM ,V?DROP ,PRSO>)\n\t\t\t     (ELSE <MOVE ,PRSO ,HERE>)>\n\t\t       <SETG UNDER-GLOBE ,PRSO>\n\t\t       <FSET ,PRSO ,NDESCBIT>\n\t\t       <TELL\n\"The \" D ,PRSO \" slides under the globe.\" CR>)\n\t\t      (ELSE <TELL \"Be serious!\" CR>)>)\n\t       (<VERB? PUT-ON>\n\t\t<COND (<NOT <TRYTAKE>> <RTRUE>)\n\t\t      (<SET F <FIRST? ,FF-HERE>>\n\t\t       <COND (<==? .F ,BLUE-KEY>\n\t\t\t      <TELL\n\"The blue rod sticks out of the globe, preventing you from placing the \"\nD ,PRSO \" there.\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"The \" D .F \" is already on the globe, rather precariously balanced.\" CR>)>)\n\t\t      (ELSE\n\t\t       <MOVE ,PRSO ,FF-HERE>\n\t\t       <TELL\n\"The \" D ,PRSO \" is now on the globe.\" CR>)>)\n\t       (<VERB? ZAP>\n\t\t<COND (<CAN-ZAP?>\n\t\t       <COND (<OR ,UNDER-GLOBE <ROB ,FF-HERE>>\n\t\t\t      <TELL\n\"The blast destroys some carelessly stored objects.\" CR>)>\n\t\t       <COND (,UNDER-GLOBE\n\t\t\t      <REMOVE ,UNDER-GLOBE>\n\t\t\t      <SETG UNDER-GLOBE <>>)>\n\t\t       <TELL\n\"The blast washes over the globe, which grows brighter and brighter as it\noverloads, then with a sinister shiver, it disappears!\">\n\t\t       <COND (<IN? ,BLUE-KEY ,FORCE-FIELD-1>\n\t\t\t      <COND (<==? ,FF-HERE ,FORCE-FIELD-1>\n\t\t\t\t     <REMOVE ,BLUE-KEY>\n\t\t\t\t     <TELL\n\" The blue rod is destroyed by the blast!\">)\n\t\t\t\t    (<AND <EQUAL? ,WAS-UNDER-GLOBE\n\t\t\t\t\t     \t  ,RED-DISK ,BLUE-DISK>\n\t\t\t\t\t  <NOT <DISKS-OFF? ,WAS-UNDER-GLOBE>>>\n\t\t\t\t     <SETG P-NUMBER 4>\n\t\t\t\t     <JUNK-INSIDE 4 2 T>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <MOVE ,BLUE-KEY ,HERE>\n\t\t\t\t     <TELL\n\" A blue rod drops to the floor from the globe's center!\">)>)>\n\t\t       <TELL \" Moments later, the projector builds up\nenough energy to restore the globe, and it reappears.\" CR>\n\t\t       <COND (<OR <ROB ,FORCE-FIELD-1 ,HERE>\n\t\t\t\t  <ROB ,FORCE-FIELD-2 ,HERE>\n\t\t\t\t  <ROB ,FORCE-FIELD-3 ,HERE>\n\t\t\t\t  <ROB ,FORCE-FIELD-4 ,HERE>\n\t\t\t\t  ;<ROB ,FF-BOWL-1 ,HERE>\n\t\t\t\t  <ROB ,FF-BOWL-2 ,HERE>\n\t\t\t\t  <ROB ,FF-BOWL-3 ,HERE>\n\t\t\t\t  <ROB ,FF-BOWL-4 ,HERE>>\n\t\t\t      <TELL\n\"(The rod wasn't the only thing which dropped.)\" CR>)>\n\t\t       <RTRUE>)>)>>"
  },
  "FF-ROOM-FCN": {
   "name": "FF-ROOM-FCN",
   "file": "actions.zil",
   "line": 1392,
   "endLine": 1409,
   "source": "<ROUTINE FF-ROOM-FCN (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a glaringly lit room filled with strange devices, most completely\nincomprehensible. For example, a huge projector of some sort points menacingly\nat a silvery globe floating in midair in the center of the room. \">\n\t\t<GLOBE-SIZE ,FF-STRENGTH>\n\t\t<TELL\n\" Beneath the projector is a dial with four positions.\" CR>\n\t\t<COND (,UNDER-GLOBE\n\t\t       <TELL\n\"Lying beneath the globe is a \" D ,UNDER-GLOBE \".\" CR>)>\n\t\t<RTRUE>)\n\t       (<AND <==? .RARG ,M-BEG>\n\t\t     <VERB? TAKE>\n\t\t     <==? ,PRSO ,UNDER-GLOBE>>\n\t\t<SETG UNDER-GLOBE <>>\n\t\t<RFALSE>)>>"
  },
  "BLUE-KEY-FCN": {
   "name": "BLUE-KEY-FCN",
   "file": "actions.zil",
   "line": 1411,
   "endLine": 1416,
   "source": "<ROUTINE BLUE-KEY-FCN ()\n\t <COND (<AND <VERB? TAKE>\n\t\t     <IN? ,PRSO ,FORCE-FIELD-1>\n\t\t     <NOT <FSET? ,PRSO ,TOUCHBIT>>>\n\t\t<TELL\n\"The blue rod is solidly held by the silvery globe.\" CR>)>>"
  },
  "FF-DIAL-FCN": {
   "name": "FF-DIAL-FCN",
   "file": "actions.zil",
   "line": 1418,
   "endLine": 1452,
   "source": "<ROUTINE FF-DIAL-FCN (\"AUX\" OLD)\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The dial has four positions. It is currently set to \" <GET ,NUMTAB ,FF-STRENGTH> \".\" CR>)\n\t       (<AND <VERB? SET> <==? ,PRSI ,INTNUM>>\n\t\t<COND (<==? ,FF-STRENGTH ,P-NUMBER>\n\t\t       <TELL \"That's where it's set now!\" CR>)\n\t\t      (<OR <G? ,P-NUMBER 4> <L? ,P-NUMBER 1>>\n\t\t       <TELL\n\"The dial is clearly labelled with the numbers 1 to 4.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"The globe flickers out for an instant and then reappears, \">\n\t\t       <COND (<G? ,P-NUMBER ,FF-STRENGTH> <TELL \"expanded\">)\n\t\t\t     (ELSE <TELL \"shrunken\">)>\n\t\t       <TELL \". \">\n\t\t       <GLOBE-SIZE ,P-NUMBER>\n\t\t       <CRLF>\n\t\t       <COND (<AND <==? ,FF-STRENGTH 4> ,WAS-UNDER-GLOBE>\n\t\t\t      <SETG UNDER-GLOBE ,WAS-UNDER-GLOBE>\n\t\t\t      <FCLEAR ,WAS-UNDER-GLOBE ,INVISIBLE>\n\t\t\t      <SETG WAS-UNDER-GLOBE <>>)\n\t\t\t     (<AND <==? ,P-NUMBER 4> ,UNDER-GLOBE>\n\t\t\t      <SETG WAS-UNDER-GLOBE ,UNDER-GLOBE>\n\t\t\t      <FSET ,WAS-UNDER-GLOBE ,INVISIBLE>\n\t\t\t      <SETG UNDER-GLOBE <>>)>\n\t\t       <SET OLD ,FF-HERE>\n\t\t       <REMOVE ,FF-HERE>\n\t\t       <SETG FF-HERE <GET ,FF-TABLE <- ,P-NUMBER 1>>>\n\t\t       <MOVE ,FF-HERE ,FF-ROOM>\n\t\t       <COND (<G? ,P-NUMBER ,FF-STRENGTH>\n\t\t\t      <JUNK-INSIDE ,P-NUMBER ,FF-STRENGTH>)\n\t\t\t     (ELSE\n\t\t\t      <JUNK-OUTSIDE ,P-NUMBER ,FF-STRENGTH>)>\n\t\t       <SETG FF-STRENGTH ,P-NUMBER>)>)>>"
  },
  "V-FALL": {
   "name": "V-FALL",
   "file": "actions.zil",
   "line": 1454,
   "endLine": 1454,
   "source": "<ROUTINE V-FALL () <TELL \"Fallen.\" CR>>"
  },
  "JUNK-INSIDE": {
   "name": "JUNK-INSIDE",
   "file": "actions.zil",
   "line": 1456,
   "endLine": 1486,
   "source": "<ROUTINE JUNK-INSIDE (NEW OLD \"OPTIONAL\" (KEY? <>) \"AUX\" DEST RO RI)\n\t <SET DEST <GET ,FF-FALLS <- .NEW 1>>>\n\t <COND (<AND <==? ,P-NUMBER 4>\n\t\t     <OR <==? ,WAS-UNDER-GLOBE ,BLUE-DISK>\n\t\t\t <==? ,WAS-UNDER-GLOBE ,RED-DISK>>>\n\t\t<SET DEST ,WAS-UNDER-GLOBE>)>\n\t <SET RO <ROB <GET ,FF-TABLE <- .OLD 1>> .DEST>>\n\t <COND (<SET RI <GET ,FF-FALLS <- .OLD 1>>>\n\t\t<SET RI <ROB .RI .DEST>>)>\n\t <COND (<OR .RO .RI .KEY?>\n\t\t<COND (<AND <==? ,P-NUMBER 4>\n\t\t\t    <EQUAL? ,WAS-UNDER-GLOBE ,BLUE-DISK ,RED-DISK>\n\t\t\t    <NOT <DISKS-OFF? ,WAS-UNDER-GLOBE>>>\n\t\t       <TELL\n\"You hear the hum of the transporter disk activating.\" CR>\n\t\t       <COND (.RI <PERFORM ,V?FALL .RI ,WAS-UNDER-GLOBE>)>\n\t\t       <COND (.RO <PERFORM ,V?FALL .RO ,WAS-UNDER-GLOBE>)>\n\t\t       <COND (.KEY?\n\t\t\t      <MOVE ,BLUE-KEY ,WAS-UNDER-GLOBE>\n\t\t\t      <PERFORM ,V?FALL ,BLUE-KEY ,WAS-UNDER-GLOBE>)>\n\t\t       <COND (<AND <IN? ,BLUE-KEY ,FORCE-FIELD-1>\n\t\t\t\t   <IN? <LOC <OTHER-DISK ,WAS-UNDER-GLOBE>>\n\t\t\t\t\t,ROOMS>>\n\t\t\t      <SCORE-OBJ ,BLUE-KEY>\n\t\t\t      <FSET ,BLUE-KEY ,TOUCHBIT>\n\t\t\t      <MOVE ,BLUE-KEY <OTHER-DISK ,WAS-UNDER-GLOBE>>)>\n\t\t       <RTRUE>)\n\t\t      (ELSE\n\t\t       <TELL\n\"You hear something fall inside the sphere.\" CR>)>)>\n\t <RTRUE>>"
  },
  "JUNK-OUTSIDE": {
   "name": "JUNK-OUTSIDE",
   "file": "actions.zil",
   "line": 1490,
   "endLine": 1505,
   "source": "<ROUTINE JUNK-OUTSIDE (NEW OLD \"AUX\" R)\n\t <COND (<SET R <ROB <GET ,FF-TABLE <- .OLD 1>> ,FF-ROOM>>\n\t\t<TELL\n,SPHERE-SHRINKS D .R \" falls to the new surface and then\nslides to the floor.\" CR>)>\n\t <COND (<SET R <ROB <GET ,FF-FALLS <- .OLD 1>> ,FF-ROOM>>\n\t\t<TELL\n,SPHERE-SHRINKS D .R \" falls\">\n\t\t<COND (<EQUAL? ,UNDER-GLOBE ,RED-DISK ,BLUE-DISK>\n\t\t       <TELL \". \"> \n\t\t       <MOVE .R ,WINNER> ;\"Kludge: make DROP work\"\n\t\t       <PERFORM ,V?DROP .R ,UNDER-GLOBE>)\n\t\t      (ELSE\n\t\t       <TELL \" onto the floor.\">)>\n\t\t<CRLF>)>\n\t <RTRUE>>"
  },
  "DISK-FCN": {
   "name": "DISK-FCN",
   "file": "actions.zil",
   "line": 1507,
   "endLine": 1618,
   "source": "<ROUTINE DISK-FCN (\"AUX\" THERE OTHER)\n\t <COND (<AND <VERB? TAKE> <EQUAL? ,PRSO ,RED-DISK ,BLUE-DISK>>\n\t\t<COND (<ROB ,PRSO ,HERE>\n\t\t       <TELL \"The stuff on the disk falls to the ground.\" CR>)>\n\t\t<DISK-SWITCH ,PRSO <>>\n\t\t<RFALSE>)\n\t       (<AND <VERB? DROP>\n\t\t     <EQUAL? ,PRSO ,RED-DISK ,BLUE-DISK>\n\t\t     <FSET? ,HERE ,RLANDBIT>\n\t\t     <NOT ,PRSI>>\n\t\t<DISK-SWITCH ,PRSO T>\n\t\t<MOVE ,PRSO ,HERE>\n\t\t<TELL\n\"The \" D ,PRSO \" drops to the ground. There is an almost inaudible click\nas it comes to rest.\" CR>)\n\t       (<AND <VERB? STAND-ON STEP-ON BOARD CLIMB-ON>\n\t\t     <EQUAL? ,PRSO ,RED-DISK ,BLUE-DISK>>\n\t\t<SET OTHER <OTHER-DISK ,PRSO>>\n\t\t<COND (<HELD? ,PRSO> <TELL \"You're holding it!\" CR>)\n\t\t      (<IN? ,PRSO ,MOUSE>\n\t\t       <TELL \"The mouse skitters out of the way.\" CR>)\n\t\t      (<DISKS-OFF? ,PRSO> <TELL \"Nothing happens.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"There is a loud click as you step on the disk, and then a moment of\ndisorientation.\" CR>\n\t\t       <DISK-SWITCH ,RED-DISK <>>\n\t\t       <DISK-SWITCH ,BLUE-DISK <>>\n\t\t       <SET THERE <FIND-ROOM .OTHER>>\n\t\t       <COND (<EQUAL? .OTHER\n\t\t\t\t      ,UNDER-GLOBE ,WAS-UNDER-GLOBE>\n\t\t\t      <JIGS-UP\n\"You reappear amidst the sphere. Unfortunately, parts of you are inside it\nand parts of you are outside it. Very untidy.\">\n\t\t\t      <RTRUE>)>\n\t\t       <COND (<IN? .OTHER ,PRSO>\n\t\t\t      <REMOVE ,RED-DISK>\n\t\t\t      <REMOVE ,BLUE-DISK>\n\t\t\t      <JIGS-UP\n\"There is a tremendous explosion as the disk tries to transport the other\ndisk into itself. You are, unfortunately, intimately part of the explosion.\">\n\t\t\t      <RTRUE>)>\n\t\t       <ROB ,PRSO .OTHER>\n\t\t       <COND (<==? ,HERE .THERE>\n\t\t\t      <TELL\n\"You reappear in the same room, but on the other disk!\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <CRLF>\n\t\t\t      <GOTO .THERE>)>)>)\n\t       (<AND <VERB? PUT-ON FALL>\n\t\t     <EQUAL? ,PRSI ,RED-DISK ,BLUE-DISK>>\n\t\t<COND (<NOT <FSET? ,PRSI ,TOUCHBIT>>\n\t\t       <TELL \"It's on the wall!\" CR>\n\t\t       <RTRUE>)\n\t\t      (<VERB? PUT-ON>\n\t\t       <COND (<NOT <TRYTAKE>> <RTRUE>)>)>\n\t\t<MOVE ,PRSO ,PRSI>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<SET OTHER <OTHER-DISK ,PRSI>>\n\t\t<COND (<DISKS-OFF? ,PRSI> <TELL \"Nothing happens.\" CR>)\n\t\t      (<EQUAL? ,PRSO .OTHER>\n\t\t       <REMOVE ,RED-DISK>\n\t\t       <REMOVE ,BLUE-DISK>\n\t\t       <COND (<==? ,PRSI ,WAS-UNDER-GLOBE>\n\t\t\t      <SETG WAS-UNDER-GLOBE <>>\n\t\t\t      <ROB ,FF-BOWL-2>\n\t\t\t      <ROB ,FF-BOWL-3>\n\t\t\t      <ROB ,FF-BOWL-4>\n\t\t\t      <COND (<IN? ,BLUE-KEY ,FORCE-FIELD-1>\n\t\t\t\t     <REMOVE ,BLUE-KEY>)>\n\t\t\t      <TELL\n\"You hear a muffled explosion.\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <SETG UNDER-GLOBE <>>\n\t\t\t      <SETG WAS-UNDER-GLOBE <>>\n\t\t\t      <TELL\n\"The \" D ,PRSI \" activates as the \" D ,PRSO \" touches it. It disappears\nfor a fraction of a second, then a flash of light fills the room as both\ndisks explode!\" CR>)>)\n\t\t      (ELSE\n\t\t       <MOVE ,PRSO .OTHER>\n\t\t       <COND (<IN? .OTHER ,PRSI>\n\t\t\t      <REMOVE ,RED-DISK>\n\t\t\t      <REMOVE ,BLUE-DISK>\n\t\t\t      <TELL\n\"There is a tremendous explosion as the disk tries to transport the other\ndisk into itself.\" CR>\n\t\t\t      <RTRUE>)>\n\t\t       <ROB ,PRSI .OTHER>\n\t\t       <DISK-SWITCH ,RED-DISK <>>\n\t\t       <DISK-SWITCH ,BLUE-DISK <>>\n\t\t       <COND (<AND <IN? .OTHER ,HERE>\n\t\t\t\t   <NOT <==? .OTHER ,WAS-UNDER-GLOBE>>>\n\t\t\t      <COND (<AND <==? ,PRSI ,WAS-UNDER-GLOBE>\n\t\t\t\t\t  <==? ,P-NUMBER 4>>\n\t\t\t\t     <TELL\n\"There is a loud click, and then the \" D ,PRSO \" appears resting comfortably\non the \" D <OTHER-DISK ,PRSI> \".\">\n\t\t\t\t     <COND (<IN? ,BLUE-KEY ,FORCE-FIELD-1>\n\t\t\t\t\t    <TELL\n\" The blue rod must have been in range of the disk, because it appeared as\nwell!\">)>\n\t\t\t\t     <CRLF>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL\n\"There is a loud click from the \" D ,PRSI \", and the \" D ,PRSO \" disappears\nfor a fraction of a second, then reappears resting comfortably on the \"\n\t\t\t      D .OTHER \".\" CR>)>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"There is a loud click from the \" D ,PRSI \" and the \" D ,PRSO\n\" disappears!\" CR>)>)>)>>"
  },
  "DISKS-OFF?": {
   "name": "DISKS-OFF?",
   "file": "actions.zil",
   "line": 1622,
   "endLine": 1633,
   "source": "<ROUTINE DISKS-OFF? (DISK \"AUX\" OTHER)\n\t <SET OTHER <OTHER-DISK .DISK>>\n\t <COND (<OR <NOT <FSET? ,RED-DISK ,TOUCHBIT>>\n\t\t    <NOT <FSET? ,BLUE-DISK ,TOUCHBIT>>>\n\t\t<RTRUE>)\n\t       (<AND <==? .DISK ,RED-DISK> <NOT ,RED-DISK-ON>>\n\t\t<RTRUE>)\n\t       (<AND <==? .DISK ,BLUE-DISK> <NOT ,BLUE-DISK-ON>>\n\t\t<RTRUE>)\n\t       (<AND <NOT <FSET? <LOC .OTHER> ,RLANDBIT>>\n\t\t     <NOT <IN? .OTHER .DISK>>>\n\t\t<RTRUE>)>>"
  },
  "FIND-ROOM": {
   "name": "FIND-ROOM",
   "file": "actions.zil",
   "line": 1635,
   "endLine": 1640,
   "source": "<ROUTINE FIND-ROOM (X)\n\t <REPEAT ()\n\t\t <COND (<NOT .X> ;\"this can't happen, of course\"\n\t\t\t<RETURN ,SPACESHIP-BRIDGE>)\n\t\t       (<IN? .X ,ROOMS> <RETURN .X>)>\n\t\t <SET X <LOC .X>>>>"
  },
  "DISK-SWITCH": {
   "name": "DISK-SWITCH",
   "file": "actions.zil",
   "line": 1642,
   "endLine": 1645,
   "source": "<ROUTINE DISK-SWITCH (WHICH NEW)\n\t<FSET .WHICH ,TOUCHBIT>\n\t<COND (<==? .WHICH ,RED-DISK> <SETG RED-DISK-ON .NEW>)\n\t      (ELSE <SETG BLUE-DISK-ON .NEW>)>>"
  },
  "OTHER-DISK": {
   "name": "OTHER-DISK",
   "file": "actions.zil",
   "line": 1647,
   "endLine": 1649,
   "source": "<ROUTINE OTHER-DISK (DISK)\n\t <COND (<==? .DISK ,RED-DISK> ,BLUE-DISK)\n\t       (ELSE ,RED-DISK)>>"
  },
  "PROJECTOR-FCN": {
   "name": "PROJECTOR-FCN",
   "file": "actions.zil",
   "line": 1653,
   "endLine": 1664,
   "source": "<ROUTINE PROJECTOR-FCN ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"It is a formidable looking apparatus that beams some sort of beam\ndirectly at the silvery globe.\" CR>)\n\t       (<AND <VERB? ZAP> <CAN-ZAP?>>\n\t\t<TELL\n\"The projector, of the sturdiest construction, is unscathed.\" CR>)\n\t       (<VERB? MUNG>\n\t\t<TELL\n\"The projector is made of extremely tough plastic (yes, plastic)\nand is unscathed.\" CR>)>>"
  },
  "BEAM-FCN": {
   "name": "BEAM-FCN",
   "file": "actions.zil",
   "line": 1666,
   "endLine": 1676,
   "source": "<ROUTINE BEAM-FCN ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The beam transfers some sort of energy to the globe. It is impossible to\ntell any more.\" CR>)\n\t       (<AND <VERB? ZAP> <CAN-ZAP?>>\n\t\t<TELL\n\"The beam is pure energy, and is therefore unscathed.\" CR>)\n\t       (<VERB? MUNG>\n\t\t<TELL\n\"The beam seems impervious to that.\" CR>)>>"
  },
  "AIRLOCK-EXIT-FCN": {
   "name": "AIRLOCK-EXIT-FCN",
   "file": "actions.zil",
   "line": 1680,
   "endLine": 1689,
   "source": "<ROUTINE AIRLOCK-EXIT-FCN ()\n\t <COND (<NOT <FSET? ,AIRLOCK-OUTER ,OPENBIT>>\n\t\t<ITS-CLOSED ,AIRLOCK-OUTER>)\n\t       (,DOCKED?\n\t\t<TELL\n\"You exit gingerly, climbing \\\"up\\\" to the surface of the artifact, where\nyour magnetic boots hold you securely as you hang \\\"upside-down.\\\"\" CR>\n\t\t<CRLF>\n\t\t,RED-DOCK)\n\t       (ELSE ,DEEP-SPACE)>>"
  },
  "AIRLOCK-FCN": {
   "name": "AIRLOCK-FCN",
   "file": "actions.zil",
   "line": 1691,
   "endLine": 1711,
   "source": "<ROUTINE AIRLOCK-FCN (\"OPTIONAL\" (RARG ,M-BEG))\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is the airlock of the Starcross. The inner door is\n\" <DDESC ,AIRLOCK-INNER> \", and the outer door is \"\n<DDESC ,AIRLOCK-OUTER> \". Neither door has a viewport.\">\n\t\t<COND (<FSET? ,AIRLOCK-OUTER ,OPENBIT>\n\t\t       <TELL \" Just outside the airlock is a hook.\">)>\n\t\t<CRLF>)\n\t       (<==? .RARG ,M-BEG>\n\t\t<COND (<AND <VERB? THROUGH> <==? ,PRSO ,AIRLOCK>>\n\t\t       <COND (<==? ,HERE ,SPACESHIP-BRIDGE>\n\t\t\t      <DO-WALK ,P?OUT>)\n\t\t\t     (<==? ,HERE ,DEEP-SPACE>\n\t\t\t      <DO-WALK ,P?IN>)\n\t\t\t     (ELSE <TELL \"You are in it.\" CR>)>\n\t\t       <RTRUE>)\n\t\t      (<AND <VERB? OPEN CLOSE>\n\t\t\t    <==? ,HERE ,SPACESHIP-BRIDGE>>\n\t\t       <PERFORM ,PRSA ,AIRLOCK-INNER>\n\t\t       <RTRUE>)>)>>"
  },
  "RED-LOCK-FCN": {
   "name": "RED-LOCK-FCN",
   "file": "actions.zil",
   "line": 1713,
   "endLine": 1718,
   "source": "<ROUTINE RED-LOCK-FCN (\"OPTIONAL\" (RARG ,M-BEG))\n\t <COND (<==? .RARG ,M-ENTER>\n\t\t<SETG IN-ARTIFACT? T>\n\t\t<RFALSE>)\n\t       (<==? .RARG ,M-LOOK>\n\t\t<DESCRIBE-LOCK \"red\" ,RED-INNER ,RED-OUTER>)>>"
  },
  "BLUE-LOCK-FCN": {
   "name": "BLUE-LOCK-FCN",
   "file": "actions.zil",
   "line": 1720,
   "endLine": 1722,
   "source": "<ROUTINE BLUE-LOCK-FCN (\"OPTIONAL\" (RARG ,M-BEG))\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<DESCRIBE-LOCK \"blue\" ,BLUE-INNER ,BLUE-OUTER>)>>"
  },
  "GREEN-LOCK-FCN": {
   "name": "GREEN-LOCK-FCN",
   "file": "actions.zil",
   "line": 1724,
   "endLine": 1726,
   "source": "<ROUTINE GREEN-LOCK-FCN (\"OPTIONAL\" (RARG ,M-BEG))\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<DESCRIBE-LOCK \"green\" ,GREEN-INNER ,GREEN-OUTER>)>>"
  },
  "YELLOW-LOCK-FCN": {
   "name": "YELLOW-LOCK-FCN",
   "file": "actions.zil",
   "line": 1728,
   "endLine": 1737,
   "source": "<ROUTINE YELLOW-LOCK-FCN (\"OPTIONAL\" (RARG ,M-BEG))\n\t <COND (<==? .RARG ,M-ENTER>\n\t\t<SETG IN-ARTIFACT? T>\n\t\t<RFALSE>)\n\t       (<==? .RARG ,M-LOOK>\n\t\t<DESCRIBE-LOCK \"yellow\" ,YELLOW-INNER ,YELLOW-OUTER>\n\t\t<COND (,ALWAYS-LIT\n\t\t       <TELL\n\"The room is lit by an emergency lighting system.\" CR>)>\n\t\t<RTRUE>)>>"
  },
  "DESCRIBE-LOCK": {
   "name": "DESCRIBE-LOCK",
   "file": "actions.zil",
   "line": 1739,
   "endLine": 1743,
   "source": "<ROUTINE DESCRIBE-LOCK (COLOR INNER OUTER)\n\t <TELL\n\"This is the main airlock of the \" .COLOR \" docking port. The inner door\nleading up to the interior is \" <DDESC .INNER> \", and the outer door leading\ndown to the surface is \" <DDESC .OUTER> \".\" CR>>"
  },
  "DDESC": {
   "name": "DDESC",
   "file": "actions.zil",
   "line": 1745,
   "endLine": 1745,
   "source": "<ROUTINE DDESC (D) <COND (<FSET? .D ,OPENBIT> \"open\")(T \"closed\")>>"
  },
  "AIRLOCK-DOORS-FCN": {
   "name": "AIRLOCK-DOORS-FCN",
   "file": "actions.zil",
   "line": 1747,
   "endLine": 1815,
   "source": "<ROUTINE AIRLOCK-DOORS-FCN (\"AUX\" DIR)\n\t <COND (<VERB? THROUGH>\n\t\t<COND (<==? ,HERE ,SPACESHIP-AIRLOCK>\n\t\t       <COND (<==? ,PRSO ,AIRLOCK-INNER>\n\t\t\t      <SET DIR ,P?WEST>)\n\t\t\t     (ELSE <SET DIR ,P?UP>)>)\n\t\t      (<==? ,PRSO ,AIRLOCK-INNER>\n\t\t       <SET DIR ,P?EAST>)\n\t\t      (ELSE <SET DIR ,P?DOWN>)>\n\t\t<DO-WALK .DIR>\n\t\t<RTRUE>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<COND (<AND ,PRSO ,PRSI <==? ,PRSO ,AIRLOCK>>\n\t\t       <PERFORM ,PRSA ,PRSI>\n\t\t       <RTRUE>)\n\t\t      (<==? ,PRSO ,AIRLOCK-INNER>\n\t\t       <COND (<VERB? OPEN>\n\t\t\t      <COND (<IN? ,WINNER ,COUCH>\n\t\t\t\t     <TELL\n\"You'll have to get out of the couch first.\" CR>)\n\t\t\t\t    (<FSET? ,PRSO ,OPENBIT>\n\t\t\t\t     <ALREADY \"open\">)\n\t\t\t\t    (<FSET? ,AIRLOCK-OUTER ,OPENBIT>\n\t\t\t\t     <TELL\n\"Fortunately the safety interlock prevents you from evacuating the\nspaceship by opening both doors of the airlock at once.\" CR>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <DOOR-OPENS>)>)\n\t\t\t     (<IN? ,WINNER ,COUCH>\n\t\t\t      <TELL\n\"You'll have to get out of the couch first.\" CR>)\n\t\t\t     (<NOT <FSET? ,PRSO ,OPENBIT>>\n\t\t\t      <ALREADY \"closed\">)\n\t\t\t     (ELSE\n\t\t\t      <DOOR-CLOSES>)>)\n\t\t      (<VERB? OPEN> ;\"must be outer door, then\"\n\t\t       <COND (<FSET? ,PRSO ,OPENBIT>\n\t\t\t      <ALREADY \"open\">)\n\t\t\t     (<FSET? ,AIRLOCK-INNER ,OPENBIT>\n\t\t\t      <TELL\n\"A safety interlock prevents you from opening both doors of the airlock\nsimultaneously.\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <FSET ,PRSO ,OPENBIT>\n\t\t\t      <VACUUM-HERE>\n\t\t\t      <COND (<NOT ,DOCKED?>\n\t\t\t\t     <TELL\n\" Outside the airlock is deep space. Beside the airlock is a safety hook\nto prevent you from drifting away into space.\">)>\n\t\t\t      <CRLF>\n\t\t\t      <COND (<NOT ,SUIT-ON?>\n\t\t\t\t     <JIGS-UP ,ACADEMY-DEATH>)>\n\t\t\t      T)>)\n\t\t      (<NOT <FSET? ,PRSO ,OPENBIT>>\n\t\t       <ALREADY \"closed\">)\n\t\t      (ELSE\n\t\t       <FCLEAR ,PRSO ,OPENBIT>\n\t\t       <AIR-HERE>)>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<COND (<NOT <FSET? ,PRSO ,OPENBIT>>\n\t\t       <TELL\n\"The \" D ,PRSO \" is closed and there is no viewport.\" CR>)\n\t\t      (<==? ,PRSO ,AIRLOCK-INNER>\n\t\t       <TELL \"You see the bridge.\" CR>)\n\t\t      (,DOCKED?\n\t\t       <TELL\n\"You see the red docking area of the artifact, including\na dome with an airlock.\" CR>)\n\t\t      (ELSE <DESCRIBE-SPACE>)>)>>"
  },
  "DOOR-OPENS": {
   "name": "DOOR-OPENS",
   "file": "actions.zil",
   "line": 1817,
   "endLine": 1819,
   "source": "<ROUTINE DOOR-OPENS ()\n\t <FSET ,PRSO ,OPENBIT>\n\t <TELL \"The \" D ,PRSO \" opens.\" CR>>"
  },
  "DOOR-CLOSES": {
   "name": "DOOR-CLOSES",
   "file": "actions.zil",
   "line": 1821,
   "endLine": 1823,
   "source": "<ROUTINE DOOR-CLOSES ()\n\t <FCLEAR ,PRSO ,OPENBIT>\n\t <TELL \"The \" D ,PRSO \" closes.\" CR>>"
  },
  "DEEP-SPACE-FCN": {
   "name": "DEEP-SPACE-FCN",
   "file": "actions.zil",
   "line": 1825,
   "endLine": 1862,
   "source": "<ROUTINE DEEP-SPACE-FCN (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are floating outside the Starcross. The airlock door\nis \" <COND (<FSET? ,AIRLOCK-OUTER ,OPENBIT> \"open\")\n\t\t(T \"closed\")>>\n\t\t       <COND (,THAT-END\n\t\t\t      <TELL \". One end of your safety line is\nattached to a hook next to the airlock.\">)\n\t\t\t     (ELSE\n\t\t\t      <TELL \". There is a hook next to the airlock.\">)>\n\t\t       <TELL\n\" This is deep space, outside the plane of the ecliptic and far beyond the\norbit of Earth. The sun seems small but still intolerably bright to look at\ndirectly.\" CR>\n\t\t       <DESCRIBE-SPACE>)\n\t       (<==? .RARG ,M-END>\n\t\t<COND (<OR <NOT ,THIS-END> <NOT ,THAT-END>>\n\t\t       <TELL\n\"You have left the Starcross in deep space without a safety\nline, a good way to drift into space and eventually run out of air.\" CR>\n\t\t       <COND (<PROB 40>\n\t\t\t      <TELL\n\"So far you've been lucky and not drifted very far.\" CR>)\n\t\t\t     (ELSE <JIGS-UP\n\"In fact, this is exactly what has happened to you.\">)>\n\t\t       <RTRUE>)>)\n\t       (<==? .RARG ,M-BEG>\n\t\t<COND (<VERB? THROW> <THROW-AWAY>)\n\t\t      (<AND <VERB? REACH-FOR>\n\t\t\t    <EQUAL? ,PRSO ,AIRLOCK-OUTER>>\n\t\t       <COND (<FSET? ,AIRLOCK-OUTER ,OPENBIT>\n\t\t\t      <TELL\n\"Just in time you pull yourself back into the airlock.|\" CR>\n\t\t\t      <GOTO ,SPACESHIP-AIRLOCK>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"You grab for the hatch, but can't find a handhold!\" CR>)>)>)>>"
  },
  "OUTER-SPACE-FCN": {
   "name": "OUTER-SPACE-FCN",
   "file": "actions.zil",
   "line": 1864,
   "endLine": 1875,
   "source": "<ROUTINE OUTER-SPACE-FCN (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are floating in space above the artifact, giving you a panoramic view of\nits surface. Unfortunately you will soon run out of air, which will ruin the\nexperience.\" CR>)\n\t       (<==? .RARG ,M-BEG>\n\t\t<COND (<VERB? THROW> <THROW-AWAY>)\n\t\t      (<AND <VERB? ZAP> <CAN-ZAP?>>\n\t\t       <JIGS-UP\n\"The force of the blast slows your recession from the artifact, but not\nenough. You continue to drift away, and eventually run out of air.\">)>)>>"
  },
  "THROW-AWAY": {
   "name": "THROW-AWAY",
   "file": "actions.zil",
   "line": 1877,
   "endLine": 1884,
   "source": "<ROUTINE THROW-AWAY ()\n\t <COND (<IDROP>\n\t\t<COND (<AND <EQUAL? ,PRSO ,SPACESUIT ,SAFETY-LINE>\n\t\t\t    <APPLY <GETP ,PRSO ,P?ACTION>>>\n\t\t       <RTRUE>)>\n\t\t<REMOVE ,PRSO>\n\t\t<TELL \"The \" D ,PRSO \" sails away into space.\" CR>)\n\t       (ELSE <RTRUE>)>>"
  },
  "DESCRIBE-SPACE": {
   "name": "DESCRIBE-SPACE",
   "file": "actions.zil",
   "line": 1889,
   "endLine": 1903,
   "source": "<ROUTINE DESCRIBE-SPACE ()\n\t <COND (,DOCKED?\n\t\t<TELL\n,COLOR-CODED \"Your ship is tethered securely next to a large dome\nwith an airlock. The surface looks metallic.\" CR>)\n\t       (<G? ,VIEW-COUNT 0>\n\t\t<TELL <GET ,VIEW-TABLE <MOD <+ ,VIEW-COUNT 2> 4>>\n\t\t      CR>)\n\t       (<G? ,TRIP-COUNT 0>\n\t\t<COND (<OR ,LOST <NOT <==? ,DESTINATION ,MASS>>>\n\t\t       <TELL\n\t\t\t\"There is nothing interesting visible.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL <GET ,TRIP-DESCS ,TRIP-COUNT> CR>)>)\n\t       (ELSE <TELL \"You see the emptiness of space.\" CR>)>>"
  },
  "SHIP-FCN": {
   "name": "SHIP-FCN",
   "file": "actions.zil",
   "line": 1905,
   "endLine": 1923,
   "source": "<ROUTINE SHIP-FCN ()\n\t <COND (<VERB? EXAMINE>\n\t\t<COND (<OR <EQUAL? ,HERE\n\t\t\t\t   ,SPACESHIP-BRIDGE\n\t\t\t\t   ,SPACESHIP-AIRLOCK ,SPACESHIP-STORES>\n\t\t\t   <EQUAL? ,HERE ,SPACESHIP-QUARTERS ,RED-DOCK\n\t\t\t\t   ,DEEP-SPACE>>\n\t\t       <TELL \"The Starcross looks the same as always.\" CR>)\n\t\t      (<==? ,HERE ,BLUE-DOCK ,BUBBLE-ROOM ,SPHERE-SHIP>\n\t\t       <TELL \"This ship looks like a huge crystalline bubble.\" CR>)\n\t\t      (<==? ,HERE ,UMBILICAL>\n\t\t       <TELL\n\"It looks like something out of a Buck Rogers movie.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"The Starcross is where you left it, presumably.\" CR>)>)\n\t       (<AND <VERB? BOARD THROUGH> <==? ,HERE ,RED-DOCK>>\n\t\t<DO-WALK ,P?SOUTH>\n\t\t<RTRUE>)>>"
  },
  "ARTIFACT-FCN": {
   "name": "ARTIFACT-FCN",
   "file": "actions.zil",
   "line": 1925,
   "endLine": 1929,
   "source": "<ROUTINE ARTIFACT-FCN ()\n\t <COND (<NOT ,DOCKED?> <TELL \"What artifact?\" CR>)\n\t       (<VERB? EXAMINE FIND>\n\t\t<COND (,IN-ARTIFACT? <TELL \"It's all around!\" CR>)\n\t\t      (ELSE <TELL \"It's right here.!\" CR>)>)>>"
  },
  "SPACESUIT-FCN": {
   "name": "SPACESUIT-FCN",
   "file": "actions.zil",
   "line": 1933,
   "endLine": 1975,
   "source": "<ROUTINE SPACESUIT-FCN ()\n\t <COND (<AND <VERB? ZAP> <IN? ,SPACESUIT ,CHIEF>>\n\t\t<PERFORM ,V?ZAP ,ZAP-GUN ,CHIEF>\n\t\t<RTRUE>)\n\t       (<VERB? WEAR BOARD>\n\t\t<COND (,SUIT-ON? <TELL \"You are already wearing it.\" CR>)\n\t\t      (<NOT <TRYTAKE>> <RTRUE>)\n\t\t      (ELSE\n\t\t       <SETG SUIT-ON? T>\n\t\t       <FSET ,SPACESUIT ,WEARBIT>\n\t\t       <MOVE ,SPACESUIT ,WINNER>\n\t\t       <TELL\n\"You are now wearing the space suit, breathing internal oxygen.\" CR>)>)\n\t       (<VERB? TAKE-OFF DISEMBARK>\n\t\t<COND (,SUIT-ON?\n\t\t       <SETG SUIT-ON? <>>\n\t\t       <SETG THIS-END <>>\n\t\t       <FCLEAR ,SPACESUIT ,WEARBIT>\n\t\t       <COND (<FSET? ,HERE ,SPACEBIT>\n\t\t\t      <JIGS-UP\n\"That was a silly thing to do, as there is no air here. You\ndie of all sorts of asphyxiation.\">)\n\t\t\t     (<==? ,POISON-COUNT 4>\n\t\t\t      <JIGS-UP\n\"The air is foul and unbreathable, and you pass out almost instantly\nafter removing the space suit.\">)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"You have removed the space suit.\">\n\t\t\t      <COND (<ON-ARTIFACT?>\n\t\t\t\t     <DESCRIBE-AIR \" The air here is \">)\n\t\t\t\t    (ELSE <CRLF>)>)>)\n\t\t      (ELSE <TELL \"You aren't wearing it.\" CR>)>)\n\t       (<VERB? DROP GIVE THROW PUT>\n\t\t<COND (,SUIT-ON?\n\t\t       <TELL \"You'll have to take it off first!\" CR>)\n\t\t      (ELSE\n\t\t       <SETG THIS-END <>>\n\t\t       <RFALSE>)>)\n\t       (<AND <IN? ,SPACESUIT ,CHIEF> <VERB? TAKE POINT>>\n\t\t<TELL\n\"The chief jumps back, annoyed. He assumes you are trying to go back on\nyour word.\" CR>)>>"
  },
  "JUNK-SPACESUIT-FCN": {
   "name": "JUNK-SPACESUIT-FCN",
   "file": "actions.zil",
   "line": 1977,
   "endLine": 1997,
   "source": "<ROUTINE JUNK-SPACESUIT-FCN ()\n\t <COND (<AND <IN? ,PRSO ,CHIEF> <VERB? TAKE WEAR BOARD>>\n\t\t<TELL\n\"The chief jumps back, annoyed. He points at you and makes a long speech\nin his own language.\" CR>)\n\t       (<VERB? WEAR BOARD>\n\t\t<COND (<FSET? ,PRSO ,WEARBIT>\n\t\t       <TELL \"You are already wearing it.\" CR>)\n\t\t      (ELSE\n\t\t       <FSET ,PRSO ,WEARBIT>\n\t\t       <MOVE ,PRSO ,WINNER>\n\t\t       <TELL\n\"You are now wearing the tattered old suit, which smells of alien.\" CR>)>)\n\t       (<VERB? TAKE-OFF DISEMBARK>\n\t\t<COND (<FSET? ,PRSO ,WEARBIT>\n\t\t       <FCLEAR ,PRSO ,WEARBIT>\n\t\t       <TELL\n\"You are no longer wearing the tattered suit.\" CR>)\n\t\t      (ELSE <TELL \"You aren't wearing it.\" CR>)>)\n\t       (<AND <VERB? DROP GIVE> <FSET? ,PRSO ,WEARBIT>>\n\t\t<TELL \"You'll have to take it off first!\" CR>)>>"
  },
  "SAFETY-LINE-FCN": {
   "name": "SAFETY-LINE-FCN",
   "file": "actions.zil",
   "line": 2002,
   "endLine": 2078,
   "source": "<ROUTINE SAFETY-LINE-FCN (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-OBJDESC>\n\t\t<TELL \"A safety line\">\n\t\t<COND (<AND ,THIS-END <NOT <IN? ,SPACESUIT ,WINNER>>>\n\t\t       <SETG THIS-END <>>)>\n\t\t<COND (<NOT <FSET? ,SAFETY-LINE ,TOUCHBIT>>\n\t\t       <TELL \" hangs on the wall.\" CR>\n\t\t       <RTRUE>)\n\t\t      (,THIS-END\n\t\t       <TELL \" (attached to your space suit\">\n\t\t       <COND (,THAT-END\n\t\t\t      <TELL \" and a hook\">)>\n\t\t       <TELL \")\">)\n\t\t      (,THAT-END\n\t\t       <TELL \" (attached to a hook)\">)>\n\t\t<TELL \" is here.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (,THIS-END\n\t\t       <TELL\n\"One end of the line is attached to your space suit\">\n\t\t       <COND (,THAT-END\n\t\t\t      <TELL \", and one end to a hook\">)>\n\t\t       <TELL \".\" CR>)\n\t\t      (,THAT-END\n\t\t       <TELL \"One end of the line is attached to a hook.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL \"The line is not attached to anything.\" CR>)>)\n\t       (<VERB? TIE UNTIE>\n\t\t<COND (<NOT <IN? ,SAFETY-LINE ,WINNER>>\n\t\t       <DONT-HAVE ,SAFETY-LINE>)\n\t\t      (<VERB? TIE>\n\t\t       <COND (<==? ,PRSI ,SPACESUIT>\n\t\t\t      <COND (<NOT <HELD? ,SPACESUIT>>\n\t\t\t\t     <DONT-HAVE ,SPACESUIT>\n\t\t\t\t     <RTRUE>)\n\t\t\t\t    (,THIS-END\n\t\t\t\t     <ALREADY \"tied\" ,SPACESUIT>\n\t\t\t\t     <RTRUE>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <SETG THIS-END ,SPACESUIT>)>)\n\t\t\t     (<==? ,PRSI ,SAFETY-HOOK>\n\t\t\t      <COND (,THAT-END\n\t\t\t\t     <ALREADY \"tied\" ,SAFETY-HOOK>\n\t\t\t\t     <RTRUE>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <SETG THAT-END ,SAFETY-HOOK>)>)\n\t\t\t     (,PRSI\n\t\t\t      <TELL\n\"You can't attach the safety line to that.\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (ELSE\n\t\t\t      <TELL \"You must tell what to attach it to.\" CR>\n\t\t\t      <RTRUE>)>\n\t\t       <TELL \"Attached to the \" D ,PRSI \".\" CR>)\n\t\t      (<VERB? UNTIE>\n\t\t       <COND (,PRSI\n\t\t\t      <COND (<==? ,PRSI ,THAT-END>\n\t\t\t\t     <SETG THAT-END <>>)\n\t\t\t\t    (<==? ,PRSI ,THIS-END>\n\t\t\t\t     <SETG THIS-END <>>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <TELL \"It's not attached to the \" D ,PRSI \".\" CR>\n\t\t\t\t     <RTRUE>)>\n\t\t\t      <TELL \"Detached from the \" D ,PRSI \".\" CR>)\n\t\t\t     (,THAT-END\n\t\t\t      <TELL \"Detached from the \" D ,THAT-END \".\" CR>\n\t\t\t      <SETG THAT-END <>>)\n\t\t\t     (,THIS-END\n\t\t\t      <TELL \"Detached from the \" D ,THIS-END \".\" CR>\n\t\t\t      <SETG THIS-END <>>)\n\t\t\t     (ELSE\n\t\t\t      <TELL \"It's not attached to anything.\" CR>)>)>\n\t\t<RTRUE>)\n\t       (<VERB? PUT DROP THROW GIVE PUT-ON TAKE>\n\t\t<COND (<OR ,THIS-END ,THAT-END>\n\t\t       <TELL\n\"You should detach it first.\" CR>)>)>>"
  },
  "CORIOLIS": {
   "name": "CORIOLIS",
   "file": "actions.zil",
   "line": 2082,
   "endLine": 2092,
   "source": "<ROUTINE CORIOLIS ()\n\t <COND (<VERB? DROP THROW>\n\t\t<COND (<IDROP>\n\t\t       <COND (<AND <EQUAL? ,PRSO ,SPACESUIT ,SAFETY-LINE>\n\t\t\t\t   <APPLY <GETP ,PRSO ,P?ACTION>>>\n\t\t\t      <RTRUE>)>\n\t\t       <REMOVE ,PRSO>\n\t\t       <TELL\n\"As the \" D ,PRSO \" leaves your hand, it is thrown into space by the rotation\nof the artifact.\" CR>)\n\t\t      (ELSE <RTRUE>)>)>>"
  },
  "RED-DOCK-FCN": {
   "name": "RED-DOCK-FCN",
   "file": "actions.zil",
   "line": 2094,
   "endLine": 2109,
   "source": "<ROUTINE RED-DOCK-FCN (RARG)\n\t <COND (<==? .RARG ,M-BEG> <CORIOLIS>)\n\t       (<==? .RARG ,M-ENTER>\n\t\t<SETG IN-ARTIFACT? <>>\n\t\t<RFALSE>)\n\t       (<==? .RARG ,M-LOOK>\n\t\t<TELL\n,COLOR-CODED \"All around are strange protrusions, one of which could be a\nhook for a safety line. The surface here is metallic, but gets stony further\nfrom the dock. On one side (\\\"Down\\\") is your ship, tethered to the surface\nof the artifact by thick silvery ropes. On the other (\\\"Up\\\") is a large dome\nwith an airlock\">\n\t\t<COND (<FSET? ,RED-OUTER ,OPENBIT>\n\t\t       <TELL\n\", which is open.\" CR>)\n\t\t      (T <TELL \".\" CR>)>)>>"
  },
  "BLACK-KEY-FCN": {
   "name": "BLACK-KEY-FCN",
   "file": "actions.zil",
   "line": 2111,
   "endLine": 2119,
   "source": "<ROUTINE BLACK-KEY-FCN ()\n\t <COND (<AND <VERB? TAKE>\n\t\t     <IN? ,BLACK-KEY ,RELIEF>>\n\t\t<FSET ,RED-OUTER ,OPENBIT>\n\t\t<MOVE ,BLACK-KEY ,WINNER>\n\t\t<SCORE-OBJ ,BLACK-KEY>\n\t\t<SETG DOOR-SOLVED? T>\n\t\t<TELL\n\"When you take the black rod, the airlock door opens!\" CR>)>>"
  },
  "RELIEF-FCN": {
   "name": "RELIEF-FCN",
   "file": "actions.zil",
   "line": 2121,
   "endLine": 2137,
   "source": "<ROUTINE RELIEF-FCN ()\n\t <COND (<VERB? EXAMINE>\n\t\t<COND (<NOT <IN? ,BUMP ,RED-DOCK>>\n\t\t       <TELL\n\"The relief is no longer a relief. It is completely flattened out.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"A closer examination reveals that there are exactly ten circular bumps or\ncolumns on the sculpture: the first is large and centrally located, the\nsecond through tenth are smaller and scattered at various distances and\norientations. As you go outward from the large bump in the center there are\nfour small bumps, two rather large ones, two medium-sized ones, and finally\na small one which sticks out quite far.\" CR>\n\t\t<COND (<IN? ,BABY-BUMP ,HERE>\n\t\t       <TELL\n\"There is also a tiny bump\" ,ABOUT-SAME CR>)>)>\n\t\tT)>>"
  },
  "INTNUM-FCN": {
   "name": "INTNUM-FCN",
   "file": "actions.zil",
   "line": 2139,
   "endLine": 2143,
   "source": "<ROUTINE INTNUM-FCN ()\n\t <COND (<==? ,HERE ,RED-DOCK>\n\t\t<COND (<==? ,PRSO ,INTNUM>\n\t\t       <PERFORM ,PRSA ,BUMP ,PRSI>\n\t\t       <RTRUE>)>)>>"
  },
  "ORDINAL": {
   "name": "ORDINAL",
   "file": "actions.zil",
   "line": 2145,
   "endLine": 2156,
   "source": "<ROUTINE ORDINAL (WRD)\n\t <COND (<EQUAL? .WRD ,W?FIRST ,W?CENTER> 1)\n\t       (<==? .WRD ,W?SECOND> 2)\n\t       (<==? .WRD ,W?THIRD> 3)\n\t       (<==? .WRD ,W?FOURTH> 4)\n\t       (<==? .WRD ,W?FIFTH> 5)\n\t       (<==? .WRD ,W?SIXTH> 6)\n\t       (<==? .WRD ,W?SEVENTH> 7)\n\t       (<==? .WRD ,W?EIGHTH> 8)\n\t       (<==? .WRD ,W?NINTH> 9)\n\t       (<EQUAL? .WRD ,W?TENTH ,W?OUTER ,W?LAST> 10)\n\t       (T 0)>>"
  },
  "BUMP-FCN": {
   "name": "BUMP-FCN",
   "file": "actions.zil",
   "line": 2158,
   "endLine": 2199,
   "source": "<ROUTINE BUMP-FCN (\"AUX\" N)\n\t <COND (<AND <VERB? PUSH RUB>\n\t\t     <EQUAL? ,PRSO ,BUMP ,BUMP-2 ,BABY-BUMP>>\n\t\t<COND (<AND <EQUAL? ,PRSO ,BUMP ,BUMP-2>\n\t\t\t    <EQUAL? ,PRSI <> ,INTNUM>>\n\t\t       <COND (<EQUAL? ,PRSI ,INTNUM> T)\n\t\t\t     (<NOT ,P-ADJECTIVE>\n\t\t\t      <TELL \"You didn't say which one.\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (<SET N <ORDINAL ,P-ADJECTIVE>>\n\t\t\t      <SETG P-NUMBER .N>)\n\t\t\t     (T\n\t\t\t      <TELL \"Lose, lose!\" CR>\n\t\t\t      <RTRUE>)>)>\n\t\t<COND (<OR <==? ,PRSO ,BABY-BUMP>\n\t\t\t   <AND <==? ,P-NUMBER 11>\n\t\t\t\t<IN? ,BABY-BUMP ,HERE>>>\n\t\t       <REMOVE ,BABY-BUMP>\n\t\t       <REMOVE ,BUMP>\n\t\t       <REMOVE ,BUMP-2>\n\t\t       <MOVE ,BLACK-KEY ,RELIEF>\n\t\t       <PUTP ,RELIEF ,P?LDESC\n\"The door is covered by a smooth pattern of silver hexagons.\">\n\t\t       <TELL\n\"The sculpture flattens out completely, except at the former location of the\ntiny bump, where a hexagonal rod of black crystal is extruded.\" CR>)\n\t\t      (<0? ,P-NUMBER>\n\t\t       <TELL \"You must specify which one.\" CR>)\n\t\t      (<AND <==? ,P-NUMBER 4>\n\t\t\t    <NOT <IN? ,BABY-BUMP ,HERE>>>\n\t\t       <MOVE ,BABY-BUMP ,HERE>\n\t\t       <TELL\n\"A tiny column made up of only one hexagon appears at\" ,ABOUT-SAME CR>)\n\t\t      (ELSE\n\t\t       <REMOVE ,BABY-BUMP>\n\t\t       <REMOVE ,BUMP>\n\t\t       <REMOVE ,BUMP-2>\n\t\t       <PUTP ,RELIEF ,P?LDESC\n\"The door is covered by a smooth pattern of silver hexagons.\">\n\t\t       <TELL\n\"All of the hexagons extend to full length, then retract into the surface,\nleaving the sculpture completely smooth.\" CR>)>)>>"
  },
  "RED-DOORS-FCN": {
   "name": "RED-DOORS-FCN",
   "file": "actions.zil",
   "line": 2204,
   "endLine": 2221,
   "source": "<ROUTINE RED-DOORS-FCN (\"AUX\" DIR)\n\t <COND (<VERB? THROUGH>\n\t\t<COND (<==? ,HERE ,RED-LOCK>\n\t\t       <COND (<==? ,PRSO ,RED-INNER>\n\t\t\t      <SET DIR ,P?UP>)\n\t\t\t     (ELSE <SET DIR ,P?DOWN>)>)\n\t\t      (<==? ,PRSO ,RED-INNER>\n\t\t       <SET DIR ,P?DOWN>)\n\t\t      (ELSE <SET DIR ,P?UP>)>\n\t\t<DO-WALK .DIR>\n\t\t<RTRUE>)\n\t       (,DOOR-SOLVED?\n\t\t<COND (<VERB? OPEN CLOSE>\n\t\t       <AIRLOCK-OPEN ,RED-INNER ,RED-OUTER ,RED-DOCK>)\n\t\t      (<VERB? LOOK-INSIDE>\n\t\t       <AIRLOCK-LOOK ,RED-INNER ,RED-THREE ,RED-DOCK>)>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<TELL \"The airlock door won't budge.\" CR>)>>"
  },
  "BLUE-DOORS-FCN": {
   "name": "BLUE-DOORS-FCN",
   "file": "actions.zil",
   "line": 2223,
   "endLine": 2237,
   "source": "<ROUTINE BLUE-DOORS-FCN (\"AUX\" DIR)\n\t <COND (<VERB? THROUGH>\n\t\t<COND (<==? ,HERE ,BLUE-LOCK>\n\t\t       <COND (<==? ,PRSO ,BLUE-INNER>\n\t\t\t      <SET DIR ,P?UP>)\n\t\t\t     (ELSE <SET DIR ,P?DOWN>)>)\n\t\t      (<==? ,PRSO ,BLUE-INNER>\n\t\t       <SET DIR ,P?DOWN>)\n\t\t      (ELSE <SET DIR ,P?UP>)>\n\t\t<DO-WALK .DIR>\n\t\t<RTRUE>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<AIRLOCK-OPEN ,BLUE-INNER ,BLUE-OUTER ,BLUE-DOCK>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<AIRLOCK-LOOK ,BLUE-INNER ,BLUE-THREE ,BLUE-DOCK>)>>"
  },
  "YELLOW-DOORS-FCN": {
   "name": "YELLOW-DOORS-FCN",
   "file": "actions.zil",
   "line": 2241,
   "endLine": 2264,
   "source": "<ROUTINE YELLOW-DOORS-FCN (\"AUX\" DIR)\n\t <COND (<NOT ,LIT> <TELL \"It is too dark here to see.\" CR>)\n\t       (<VERB? THROUGH>\n\t\t<COND (<==? ,HERE ,YELLOW-LOCK>\n\t\t       <COND (<==? ,PRSO ,YELLOW-INNER>\n\t\t\t      <SET DIR ,P?UP>)\n\t\t\t     (ELSE <SET DIR ,P?DOWN>)>)\n\t\t      (<==? ,PRSO ,YELLOW-INNER>\n\t\t       <SET DIR ,P?DOWN>)\n\t\t      (ELSE <SET DIR ,P?UP>)>\n\t\t<DO-WALK .DIR>\n\t\t<RTRUE>)\n\t       (<AND <==? ,PRSO ,YELLOW-OUTER>\n\t\t     <VERB? OPEN PUSH>\n\t\t     <NOT ,YELLOW-OPEN?>\n\t\t     <NOT <FSET? ,YELLOW-INNER ,OPENBIT>>>\n\t\t<TELL\n\"The door appears to be jammed. There may be debris outside blocking\nit. Perhaps if you pushed again.\" CR>\n\t\t<SETG YELLOW-OPEN? T>)\n\t       (<VERB? OPEN CLOSE PUSH>\n\t\t<AIRLOCK-OPEN ,YELLOW-INNER ,YELLOW-OUTER ,YELLOW-DOCK>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<AIRLOCK-LOOK ,YELLOW-INNER ,YELLOW-THREE ,YELLOW-DOCK>)>>"
  },
  "YELLOW-DOCK-FCN": {
   "name": "YELLOW-DOCK-FCN",
   "file": "actions.zil",
   "line": 2266,
   "endLine": 2282,
   "source": "<ROUTINE YELLOW-DOCK-FCN (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"This dock area is severely scorched and damaged where other docks have rope\nhousings. There was apparently a major explosion here, or possibly a\nchemically fueled rocket attempted to leave without taking proper precautions.\nThere is a hook beside the airlock.\" CR>\n\t\t<COND (<IN? ,SCORCHED-ALIEN ,YELLOW-DOCK-EDGE>\n\t\t       <TELL\n\"Entangled in debris at the edge of the dock, to port, is what might be a\nbody. It is out of reach from here.\" CR>)>\n\t\t<RTRUE>)\n\t       (<==? .RARG ,M-BEG>\n\t\t<BRODY>)\n\t       (<==? .RARG ,M-ENTER>\n\t\t<SETG IN-ARTIFACT? <>>\n\t\t<RFALSE>)>>"
  },
  "BRODY": {
   "name": "BRODY",
   "file": "actions.zil",
   "line": 2286,
   "endLine": 2299,
   "source": "<ROUTINE BRODY ()\n\t <COND (<VERB? LEAP>\n\t\t<COND (<AND ,THIS-END ,THAT-END>\n\t\t       <TELL\n\"You sail into space as far as your safety line allows, and\nthen back again.\" CR>)\n\t\t      (ELSE\n\t\t       <ENABLE <QUEUE I-SUFFOCATE 5>>\n\t\t       <TELL\n\"You fly into space like a super-hero. Unfortunately, you keep going\nindefinitely, and eventually you will run out of air.\" CR>\n\t\t       <CRLF>\n\t\t       <GOTO ,OUTER-SPACE>)>)\n\t       (ELSE <CORIOLIS>)>>"
  },
  "YELLOW-DOCK-EXITS": {
   "name": "YELLOW-DOCK-EXITS",
   "file": "actions.zil",
   "line": 2301,
   "endLine": 2315,
   "source": "<ROUTINE YELLOW-DOCK-EXITS ()\n\t <COND (<AND ,THIS-END ,THAT-END>\n\t\t<TELL\n\"You crawl across dock area, your magnetic boots overcoming the effect\nof centripetal force. The metal area they can cling to ends before you reach\nthe edge of the dock, but thanks to your safety line you make it successfully\nto the tangle of debris.\" CR>\n\t\t<CRLF>\n\t\t,YELLOW-DOCK-EDGE)\n\t       (ELSE\n\t\t<TELL\n\"You crawl across the dock area, your magnetic boots holding you safe.\nUnfortunately, the metallic area ends short of the tangle of debris. If you\nwent further, you would be thrown into space by centripetal force.\" CR>\n\t\t<RFALSE>)>>"
  },
  "YELLOW-DOCK-EDGE-FCN": {
   "name": "YELLOW-DOCK-EDGE-FCN",
   "file": "actions.zil",
   "line": 2317,
   "endLine": 2330,
   "source": "<ROUTINE YELLOW-DOCK-EDGE-FCN (RARG)\n\t <COND (<==? .RARG ,M-BEG>\n\t\t<BRODY>)\n\t       (<==? .RARG ,M-END>\n\t\t<COND (<AND ,THIS-END ,THAT-END> <RFALSE>)\n\t\t      (ELSE\n\t\t       <ENABLE <QUEUE I-SUFFOCATE 5>>\n\t\t       <TELL\n\"Now that you are no longer moored by the safety line, centripetal force\nthrows you into space in a lovely trajectory which (as a matter of academic\ninterest) looks curved from your perspective as the artifact rapidly rotates\naway under you.\" CR>\n\t\t       <CRLF>\n\t\t       <GOTO ,OUTER-SPACE>)>)>>"
  },
  "I-SUFFOCATE": {
   "name": "I-SUFFOCATE",
   "file": "actions.zil",
   "line": 2332,
   "endLine": 2335,
   "source": "<ROUTINE I-SUFFOCATE ()\n\t <COND (<==? ,HERE ,OUTER-SPACE>\n\t\t<JIGS-UP\n\"You run out of air, dying an unpleasant death \\\"above\\\" the artifact.\">)>>"
  },
  "SCORCHED-PSEUDO": {
   "name": "SCORCHED-PSEUDO",
   "file": "actions.zil",
   "line": 2337,
   "endLine": 2339,
   "source": "<ROUTINE SCORCHED-PSEUDO ()\n\t <COND (<VERB? TAKE EXAMINE>\n\t\t<TELL \"It's too far away.\" CR>)>>"
  },
  "GREEN-DOORS-FCN": {
   "name": "GREEN-DOORS-FCN",
   "file": "actions.zil",
   "line": 2341,
   "endLine": 2355,
   "source": "<ROUTINE GREEN-DOORS-FCN (\"AUX\" DIR)\n\t <COND (<VERB? THROUGH>\n\t\t<COND (<==? ,HERE ,GREEN-LOCK>\n\t\t       <COND (<==? ,PRSO ,GREEN-INNER>\n\t\t\t      <SET DIR ,P?UP>)\n\t\t\t     (ELSE <SET DIR ,P?DOWN>)>)\n\t\t      (<==? ,PRSO ,GREEN-INNER>\n\t\t       <SET DIR ,P?DOWN>)\n\t\t      (ELSE <SET DIR ,P?UP>)>\n\t\t<DO-WALK .DIR>\n\t\t<RTRUE>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<AIRLOCK-OPEN ,GREEN-INNER ,GREEN-OUTER ,GREEN-DOCK>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<AIRLOCK-LOOK ,GREEN-INNER ,GREEN-THREE ,GREEN-DOCK>)>>"
  },
  "AIRLOCK-OPEN": {
   "name": "AIRLOCK-OPEN",
   "file": "actions.zil",
   "line": 2357,
   "endLine": 2393,
   "source": "<ROUTINE AIRLOCK-OPEN (INNER OUTER OUTLOC)\n\t <COND (<==? ,PRSO .INNER>\n\t\t<COND (<VERB? OPEN PUSH>\n\t\t       <COND (<FSET? ,PRSO ,OPENBIT>\n\t\t\t      <ALREADY \"open\">)\n\t\t\t     (<FSET? .OUTER ,OPENBIT>\n\t\t\t      <TELL\n\"It refuses to open and a bright light flashes incessantly until\nyou remove your hand from the door.\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <DOOR-OPENS>)>)\n\t\t      (<NOT <FSET? ,PRSO ,OPENBIT>>\n\t\t       <ALREADY \"closed\">)\n\t\t      (ELSE\n\t\t       <DOOR-CLOSES>)>)\n\t       (<VERB? OPEN PUSH> ;\"must be outer door, then\"\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <ALREADY \"open\">)\n\t\t      (<FSET? .INNER ,OPENBIT>\n\t\t       <TELL\n\"A bright light over the door flashes menacingly until you remove your\nhand.\" CR>)\n\t\t      (ELSE\n\t\t       <FSET ,PRSO ,OPENBIT>\n\t\t       <COND (<FSET? .OUTLOC ,SPACEBIT>\n\t\t\t      <VACUUM-HERE>\n\t\t\t      <CRLF>\n\t\t\t      <COND (<NOT ,SUIT-ON?>\n\t\t\t\t     <CRLF>\n\t\t\t\t     <JIGS-UP ,ACADEMY-DEATH>)>)\n\t\t\t     (T <DOOR-OPENS>)>\n\t\t       T)>)\n\t       (<NOT <FSET? ,PRSO ,OPENBIT>>\n\t\t<ALREADY \"closed\">)\n\t       (ELSE\n\t\t<FCLEAR ,PRSO ,OPENBIT>\n\t\t<AIR-HERE>)>>"
  },
  "IN-AIRLOCK?": {
   "name": "IN-AIRLOCK?",
   "file": "actions.zil",
   "line": 2399,
   "endLine": 2401,
   "source": "<ROUTINE IN-AIRLOCK? ()\n\t <OR <EQUAL? ,HERE ,RED-LOCK ,GREEN-LOCK ,YELLOW-LOCK>\n\t     <EQUAL? ,HERE ,BLUE-LOCK ,SPACESHIP-AIRLOCK>>>"
  },
  "AIR-HERE": {
   "name": "AIR-HERE",
   "file": "actions.zil",
   "line": 2403,
   "endLine": 2408,
   "source": "<ROUTINE AIR-HERE ()\n\t <TELL \"The outer door closes\">\n\t <COND (<IN-AIRLOCK?>\n\t\t<FCLEAR ,HERE ,SPACEBIT>\n\t\t<TELL \" and air rushes into the airlock\">)>\n\t <TELL \".\" CR>>"
  },
  "VACUUM-HERE": {
   "name": "VACUUM-HERE",
   "file": "actions.zil",
   "line": 2410,
   "endLine": 2415,
   "source": "<ROUTINE VACUUM-HERE ()\n\t <TELL \"The outer door opens\">\n\t <COND (<IN-AIRLOCK?>\n\t\t<FSET ,HERE ,SPACEBIT>\n\t\t<TELL \" and air rushes out of the airlock\">)>\n\t <TELL \".\">>"
  },
  "AIRLOCK-LOOK": {
   "name": "AIRLOCK-LOOK",
   "file": "actions.zil",
   "line": 2417,
   "endLine": 2423,
   "source": "<ROUTINE AIRLOCK-LOOK (INNER INNEXT OUTNEXT)\n\t <COND (<NOT <FSET? ,PRSO ,OPENBIT>>\n\t\t<TELL\n\"The \" D ,PRSO \" is closed and there is no viewport.\" CR>)\n\t       (<==? ,PRSO .INNER>\n\t\t<GO&LOOK .INNEXT>)\n\t       (ELSE <GO&LOOK .OUTNEXT>)>>"
  },
  "GO&LOOK": {
   "name": "GO&LOOK",
   "file": "actions.zil",
   "line": 2425,
   "endLine": 2437,
   "source": "<ROUTINE GO&LOOK (RM \"AUX\" OHERE OLIT (OSEEN <>))\n\t #DECL ((RM) OBJECT)\n\t <SET OHERE ,HERE>\n\t <COND (<FSET? .OHERE ,TOUCHBIT>\n\t\t<SET OSEEN T>)>\n\t <SET OLIT ,LIT>\n\t <SETG HERE .RM>\n\t <SETG LIT <LIT? .RM>>\n\t <PERFORM ,V?LOOK>\n\t <COND (<NOT .OSEEN> <FCLEAR .OHERE ,TOUCHBIT>)>\n\t <SETG HERE .OHERE>\n\t <SETG LIT .OLIT>\n\t T>"
  },
  "COUCH-FCN": {
   "name": "COUCH-FCN",
   "file": "actions.zil",
   "line": 2439,
   "endLine": 2463,
   "source": "<ROUTINE COUCH-FCN (\"OPTIONAL\" (RARG <>))\n\t <COND (<NOT <==? ,HERE ,SPACESHIP-BRIDGE>>\n\t\t<COND (<VERB? CLIMB-ON CLIMB-DOWN BOARD>\n\t\t       <TELL \"That seat is taken....\" CR>)\n\t\t      (T <EX-CHECK>)>)\n\t       (<AND <VERB? EXAMINE> <==? .RARG ,M-BEG> <==? ,PRSO ,COUCH>>\n\t\t<DESCRIBE-SEAT-BELT>\n\t\t<RTRUE>)\n\t       (<==? .RARG ,M-BEG>\n\t\t<COND (<VERB? WALK>\n\t\t       <TELL \"You'll have to stand up first.\" CR>)\n\t\t      (<AND <VERB? STAND DISEMBARK> ,SEAT-BELT?>\n\t\t       <TELL\n\t\t\t\"You must unfasten your seat belt first.\" CR>)\n\t\t      (<VERB? CLIMB-ON CLIMB-DOWN>\n\t\t       <PERFORM ,V?BOARD ,COUCH>\n\t\t       <RTRUE>)\n\t\t      (<AND <VERB? TAKE-OFF> <==? ,PRSO ,COUCH>>\n\t\t       <PERFORM ,V?DISEMBARK ,COUCH>\n\t\t       <RTRUE>)\n\t\t      (<VERB? TAKE>\n\t\t       <TELL \"You can't reach it.\" CR>\n\t\t       <RTRUE>)>)\n\t       (<==? .RARG ,M-ENTER>\n\t\t<DESCRIBE-SEAT-BELT>)>>"
  },
  "DESCRIBE-SEAT-BELT": {
   "name": "DESCRIBE-SEAT-BELT",
   "file": "actions.zil",
   "line": 2465,
   "endLine": 2468,
   "source": "<ROUTINE DESCRIBE-SEAT-BELT ()\n\t <TELL \"The couch has a seat belt which is currently \">\n\t <COND (,SEAT-BELT? <TELL \"fastened.\" CR>)\n\t       (ELSE <TELL \"unfastened.\" CR>)>>"
  },
  "SEAT-BELT-FCN": {
   "name": "SEAT-BELT-FCN",
   "file": "actions.zil",
   "line": 2470,
   "endLine": 2483,
   "source": "<ROUTINE SEAT-BELT-FCN ()\n\t <COND (<NOT <IN? ,WINNER ,COUCH>>\n\t\t<TELL \"You must sit down first.\" CR>)\n\t       (<VERB? TIE WEAR LOCK>\n\t\t<COND (,SEAT-BELT? <TELL \"It's already fastened.\" CR>)\n\t\t      (ELSE <SETG SEAT-BELT? T> <TELL \"Click.\" CR>)>)\n\t       (<VERB? UNTIE TAKE-OFF OPEN UNLOCK REMOVE>\n\t\t<COND (<NOT ,SEAT-BELT?>\n\t\t       <TELL \"It's already unfastened.\" CR>)\n\t\t      (ELSE <SETG SEAT-BELT? <>> <TELL \"Click.\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"The seat belt is \">\n\t\t<COND (,SEAT-BELT? <TELL \"fastened.\" CR>)\n\t\t      (ELSE <TELL \"unfastened.\" CR>)>)>>"
  },
  "BUREAU-PSEUDO": {
   "name": "BUREAU-PSEUDO",
   "file": "actions.zil",
   "line": 2485,
   "endLine": 2487,
   "source": "<ROUTINE BUREAU-PSEUDO ()\n\t <COND (<VERB? OPEN LOOK-INSIDE>\n\t\t<TELL \"There is nothing in the bureau but some clothes.\" CR>)>>"
  },
  "VILLAGE-NW-EDGE-FCN": {
   "name": "VILLAGE-NW-EDGE-FCN",
   "file": "actions.zil",
   "line": 2496,
   "endLine": 2527,
   "source": "<ROUTINE VILLAGE-NW-EDGE-FCN (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is the edge of a populated area, growing denser as you move starboard.\nPrimitive huts line the corridor, which is blocked ahead by a palisade built of\nmud and wood. An open gate, guarded by several spear-bearing aliens, leads\ninto the structure. A small crowd of aliens has gathered to watch you.\" CR>\n\t\t<COND (<NOT ,ALIENS-DESCRIBED?>\n\t\t       <SETG ALIENS-DESCRIBED? T>\n\t\t       <DESCRIBE-WEASELS>\n\t\t       <ENABLE <QUEUE I-CHIEF-APPEARS <+ 3 <RANDOM 3>>>>)>\n\t\t<COND (,ALIENS-FRIENDLY?\n\t\t       <TELL\n\"They gesture in a way intended to show friendship (they bare\ntheir huge razor-sharp teeth).\" CR>\n\t\t       <COND (<NOT ,HUSTLED?>\n\t\t\t      <TELL\n\"The smaller ones are hustled away, but almost immediately begin to sneak\nback.\" CR>)>)\n\t\t      (ELSE\n\t\t       <TELL\n\"They stare at you with mingled awe and belligerence.\" CR>\n\t\t       <COND (<NOT ,HUSTLED?>\n\t\t\t      <TELL\n\"The smaller ones are hustled away, leaving only the better-armed members\nof the tribe.\" CR>)>)>\n\t\t<SETG HUSTLED? T>\n\t\t<RTRUE>)\n\t       (<==? .RARG ,M-BEG>\n\t\t<COND (<OR <AND <VERB? GIVE> <==? ,PRSI ,CHIEF>>\n\t\t\t   <AND <VERB? DROP> <IN? ,CHIEF ,HERE>>>\n\t\t       <GIVE-TO-CHIEF>)>)>>"
  },
  "PALISADE-FCN": {
   "name": "PALISADE-FCN",
   "file": "actions.zil",
   "line": 2529,
   "endLine": 2536,
   "source": "<ROUTINE PALISADE-FCN ()\n\t <COND (<AND <VERB? ZAP> <CAN-ZAP?>>\n\t\t<SETG ALIENS-FRIENDLY? <>>\n\t\t<TELL\n\"The palisade smolders a bit, but is otherwise undamaged.\" CR>)\n\t       (<VERB? CLIMB-UP CLIMB-ON>\n\t\t<TELL\n\"The palisade is unclimbable.\" CR>)>>"
  },
  "VILLAGE-FCN": {
   "name": "VILLAGE-FCN",
   "file": "actions.zil",
   "line": 2538,
   "endLine": 2555,
   "source": "<ROUTINE VILLAGE-FCN (RARG)\n\t <COND (<==? .RARG ,M-BEG>\n\t\t<COND (<AND <VERB? WALK>\n\t\t\t    <IN? ,SPACESUIT ,CHIEF>\n\t\t\t    <==? ,PRSO ,P?EAST>\n\t\t\t    <NOT <IN? ,CHIEF ,VILLAGE>>\n\t\t\t    <L? ,CHFOLLOW 2>>\n\t\t       <PERFORM ,V?FOLLOW ,CHIEF>\n\t\t       <RTRUE>)\n\t\t      (<FSET? ,VIOLET-KEY ,TOUCHBIT>\n\t\t       <JIGS-UP\n\"Startled aliens recognize you as the desecrator of their sacred place!\nThey attack and overwhelm you by their sheer numbers.\">)>)\n\t       (<==? .RARG ,M-ENTER>\n\t\t<COND (<IN? ,SPACESUIT ,VILLAGE>\n\t\t       <REMOVE ,JUNK-SPACESUIT>\n\t\t       <MOVE ,SPACESUIT ,CHIEF>)>\n\t\t<RFALSE>)>>"
  },
  "ENTER-WARREN": {
   "name": "ENTER-WARREN",
   "file": "actions.zil",
   "line": 2557,
   "endLine": 2562,
   "source": "<ROUTINE ENTER-WARREN ()\n\t <COND (,ALIENS-FRIENDLY? ,MAZE)\n\t       (ELSE\n\t\t<TELL\n\"Hostile weasels bar your way.\" CR>\n\t\t<RFALSE>)>>"
  },
  "GIVE-TO-CHIEF": {
   "name": "GIVE-TO-CHIEF",
   "file": "actions.zil",
   "line": 2564,
   "endLine": 2597,
   "source": "<ROUTINE GIVE-TO-CHIEF ()\n\t <COND (<==? ,PRSO ,SPACESUIT>\n\t\t<COND (,SUIT-ON? <RFALSE>)>\n\t\t<MOVE ,JUNK-SPACESUIT ,HERE>\n\t\t<FCLEAR ,JUNK-SPACESUIT ,NDESCBIT>\n\t\t<MOVE ,SPACESUIT ,CHIEF>\n\t\t<FSET ,SPACESUIT ,NDESCBIT>\n\t\t<SETG THIS-END <>>\n\t\t<SETG THAT-END <>>\n\t\t<SETG SUIT-ON? <>>\n\t\t<TELL\n\"The chieftain removes his suit and dons yours. He is clearly delighted with\nthe gift, and his people are truly impressed by his new wardrobe. He moves\nabout, pointing at various objects (including some of his lesser wives and\nchildren) and glancing at you quizzically.\" CR>\n\t\t<ENABLE <QUEUE I-CHIEF 2>>\n\t\t<COND (,POINTED?\n\t\t       <TELL\n\"He tries (somewhat sheepishly) to conceal the brown rod in the space suit,\nhoping you won't notice it.\" CR>)>\n\t\t<RTRUE>)\n\t       (<NOT ,ALIENS-FRIENDLY?>\n\t\t<TELL \"He snarls at you, exposing razor-sharp teeth.\" CR>)\n\t       (<IN? ,SPACESUIT ,ADVENTURER>\n\t\t<TELL\n\"The chief refuses your gift but gazes hungrily at your space suit.\" CR>)\n\t       (<IN? ,SPACESUIT ,CHIEF>\n\t\t<TELL\n\"The chief considers the space suit to have been enough, and graciously\nrefuses the gift.\" CR>)\n\t       (ELSE\n\t\t<TELL\n\"The chief looks pleased by the offer (as a token of your submission, no\ndoubt), but turns it down.\" CR>)>>"
  },
  "I-CHIEF-APPEARS": {
   "name": "I-CHIEF-APPEARS",
   "file": "actions.zil",
   "line": 2601,
   "endLine": 2632,
   "source": "<ROUTINE I-CHIEF-APPEARS ()\n\t <COND (<==? ,HERE ,VILLAGE>\n\t\t<FCLEAR ,GLOBAL-CHIEF ,INVISIBLE>\n\t\t<MOVE ,CHIEF ,HERE>\n\t\t<TELL\n\"From down a passage between the hovels appears a large, almost\nall-grey alien.\" CR>\n\t\t<COND (<IN? ,SPACESUIT ,CHIEF>\n\t\t       <TELL\n\"He is wearing a human space suit and grinning cheerfully.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"He is dressed in the tattered remains of a space suit of alien manufacture.\nOnly the helmet and scraps of the body material remain.\" CR>)>\n\t\t<COND (<IN? ,BROWN-KEY ,CHIEF>\n\t\t       <TELL\n\"Around his neck hangs a brown crystal rod!\" CR>)>\n\t\t<TELL \"The crowd parts to let him through.\" CR>\n\t\t<COND (<IN? ,SPACESUIT ,ADVENTURER>\n\t\t       <TELL\n\"He looks at you in awe, staring at your space suit. He points to it,\nand then at himself, and brandishes his spear menacingly.\" CR>)\n\t\t      (,ALIENS-FRIENDLY?\n\t\t       <TELL \"He greets you warmly.\" CR>)>\n\t\t<ENABLE <QUEUE I-CHIEF 2>>)\n\t       (ELSE\n\t\t<COND (<NOT ,ACTIVITY?>\n\t\t       <SETG ACTIVITY? T>\n\t\t       <COND (<EQUAL? ,HERE ,VILLAGE ,VILLAGE-NW-EDGE>\n\t\t\t      <TELL\n\"There seems to be activity in the village center.\" CR>)>)>\n\t\t<ENABLE <QUEUE I-CHIEF-APPEARS 1>>)>>"
  },
  "DESCRIBE-WEASELS": {
   "name": "DESCRIBE-WEASELS",
   "file": "actions.zil",
   "line": 2636,
   "endLine": 2640,
   "source": "<ROUTINE DESCRIBE-WEASELS ()\n\t <TELL\n\"They resemble human-sized weasels. Their bodies are thin, flexible, and\ncovered with several colors of hair. There are all sizes and ages, and the\nstronger ones are armed with spears, knives, and other nasty hardware.\" CR>>"
  },
  "ALIENS-FCN": {
   "name": "ALIENS-FCN",
   "file": "actions.zil",
   "line": 2642,
   "endLine": 2673,
   "source": "<ROUTINE ALIENS-FCN ()\n\t <COND (<AND <IN? ,CHIEF ,HERE> <NOT <VERB? ZAP ATTACK>>>\n\t\t<COND (<==? ,ALIENS ,WINNER>\n\t\t       <SETG WINNER ,CHIEF>\n\t\t       <PERFORM ,PRSA ,PRSO ,PRSI>)\n\t\t      (<==? ,PRSO ,CHIEF>\n\t\t       <PERFORM ,PRSA ,CHIEF ,PRSI>)\n\t\t      (<==? ,PRSI ,CHIEF>\n\t\t       <PERFORM ,PRSA ,PRSO ,CHIEF>)\n\t\t      (ELSE <TELL \"You are ignored.\" CR>)>\n\t\t<RTRUE>)\n\t       (<VERB? SMILE>\n\t\t<COND (,ALIENS-FRIENDLY? <TELL \"It smiles back.\" CR>)\n\t\t      (T <TELL \"It snarls at you.\" CR>)>)\n\t       (<VERB? TELL>\n\t\t<SETG P-CONT <>>\n\t\t<TELL \"The aliens pay no heed.\" CR>)\n\t       (<==? ,HERE ,GRASSLAND-2>\n\t\t<COND (<G? ,HUNTER-COUNT 0>\n\t\t       <COND (<NOT <VERB? FIND EXAMINE>>\n\t\t\t      <SPOILED-HUNT>\n\t\t\t      <COND (<VERB? ZAP>\n\t\t\t\t     <CRLF>\n\t\t\t\t     <ZAP-ALIENS>\n\t\t\t\t     <TELL \"The hunting party scatters.\" CR>)>\n\t\t\t      <RTRUE>)>)\n\t\t      (ELSE <TELL \"There are no aliens here.\" CR>)>)\n\t       (<VERB? ZAP> <ZAP-ALIENS>)\n\t       (<VERB? FOLLOW> <TELL \"They aren't going anywhere.\" CR>)\n\t       (<VERB? ATTACK KILL MUNG THROW>\n\t\t<SETG ALIENS-FRIENDLY? <>>\n\t\t<TELL \"The weasels shy away in fright.\" CR>)>>"
  },
  "ZAP-ALIENS": {
   "name": "ZAP-ALIENS",
   "file": "actions.zil",
   "line": 2675,
   "endLine": 2699,
   "source": "<ROUTINE ZAP-ALIENS (\"OPTIONAL\" (ZAP-CHIEF? <>))\n\t <SETG ALIENS-FRIENDLY? <>>\n\t <COND (<0? ,ZAP-CNT>\n\t\t<TELL\n\"Nothing happens. Emboldened, the aliens surround you.\" CR>)\n\t       (<FIRST? ,ZAP-GUN>\n\t\t<ZAP-GUN-FCN>\n\t\t<TELL \"The aliens are impressed and terrified.\" CR>)\n\t       (ELSE\n\t\t<SETG ZAP-CNT <- ,ZAP-CNT 1>>\n\t\t<COND (<AND .ZAP-CHIEF? <IN? ,CHIEF ,HERE>>\n\t\t       <TELL \"The chief is\">\n\t\t       <DISABLE <INT I-CHIEF>>\n\t\t       <REMOVE ,CHIEF>)\n\t\t      (ELSE <TELL \"Many aliens are\">)>\n\t\t<TELL\n\" disintegrated, in the best tradition of the 1930s pulps. The remainder of\nthe tribe attacks you, seeking revenge. You fire the ray gun at them. \">\n\t\t<COND (<G? ,ZAP-CNT 0>\n\t\t       <TELL\n\"It fires \" <GET ,ZAP-STRS <- ,ZAP-CNT 1>> \". Each time\nmany aliens are dispatched, but more appear.\" CR>)\n\t\t      (ELSE <TELL \"Nothing happens.\" CR>)>\n\t\t<SETG ZAP-CNT 0>\n\t\t<JIGS-UP \"Ultimately, you are overwhelmed.\">)>>"
  },
  "CHIEF-FCN": {
   "name": "CHIEF-FCN",
   "file": "actions.zil",
   "line": 2703,
   "endLine": 2763,
   "source": "<ROUTINE CHIEF-FCN (\"OPTIONAL\" (RARG <>) \"AUX\" SUIT?)\n\t <COND (<==? .RARG ,M-OBJDESC>\n\t\t<TELL \"The chief alien\">\n\t\t<COND (<SET SUIT? <IN? ,JUNK-SPACESUIT ,CHIEF>>\n\t\t       <TELL\n\", wearing a tattered space suit\">)\n\t\t      (<SET SUIT? <IN? ,SPACESUIT ,CHIEF>>\n\t\t       <TELL\n\", wearing your space suit\">)>\n\t\t<COND (<IN? ,BROWN-KEY ,CHIEF>\n\t\t       <TELL \" and a brown crystal rod,\">)\n\t\t      (.SUIT? <TELL \",\">)>\n\t\t<TELL \" is here.\" CR>)\n\t       (<VERB? FOLLOW>\n\t\t<COND (<IN? ,CHIEF ,HERE>\n\t\t       <TELL\n\"You can't follow him until he leaves...\" CR>)\n\t\t      (<L? ,CHFOLLOW 2>\n\t\t       <SETG CHFOLLOW 0>\n\t\t       <SETG CHPATH <- ,CHPATH 1>>\n\t\t       <COND (<0? ,CHPATH>\n\t\t\t      <ENABLE <QUEUE I-CHIEF 1>>\n\t\t\t      <MOVE ,CHIEF ,GREEN-THREE>\n\t\t\t      <GOTO ,GREEN-THREE>)\n\t\t\t     (ELSE\n\t\t\t      <MOVE ,CHIEF ,MAZE>\n\t\t\t      <GOTO ,MAZE>)>)\n\t\t      (<==? ,HERE ,VILLAGE>\n\t\t       <DO-WALK ,P?EAST>\n\t\t       <RTRUE>)\n\t\t      (ELSE\n\t\t       <TELL\n\"You have lost track of him in the maze of twists and turns.\" CR>)>\n\t\t<RTRUE>)\n\t       (<NOT <IN? ,CHIEF ,HERE>>\n\t\t<TELL \"There is no chief here.\" CR>)\n\t       (<OR <VERB? TELL HELLO>\n\t\t    <AND <==? ,CHIEF ,WINNER> <IN? ,CHIEF ,HERE>>>\n\t\t<SETG P-CONT <>>\n\t\t<TELL\n\"The chief listens intently, then responds in his own language, probably\nsaying something like \\\"That's Greek to me.\\\"\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"The chief is a perfect example of barbarian dignity and splendor.\">\n\t\t<COND (<IN? ,SPACESUIT ,CHIEF>\n\t\t       <TELL \" He is wearing your space suit with the same\ndignity and aplomb which which a dandy would wear his evening clothes.\">)\n\t\t      (<IN? ,BROWN-KEY ,CHIEF>\n\t\t       <TELL\n\" Tied around his neck with a string is a brown crystal rod.\">)>\n\t\t<CRLF>)\n\t       (<VERB? SMILE>\n\t\t<COND (,ALIENS-FRIENDLY? <TELL \"He smiles back.\" CR>)\n\t\t      (T <TELL \"He snarls at you.\" CR>)>)\n\t       (<VERB? ZAP> <ZAP-ALIENS T>)\n\t       (<VERB? ATTACK MUNG>\n\t\t<SETG ALIENS-FRIENDLY? <>>\n\t\t<RFALSE>)\n\t       (<VERB? POINT> <TELL \"The chief seems puzzled.\" CR>)\n\t       (<VERB? GIVE> <GIVE-TO-CHIEF>)>>"
  },
  "BROWN-KEY-FCN": {
   "name": "BROWN-KEY-FCN",
   "file": "actions.zil",
   "line": 2767,
   "endLine": 2790,
   "source": "<ROUTINE BROWN-KEY-FCN ()\n\t <COND (<IN? ,BROWN-KEY ,CHIEF>\n\t\t<COND (<AND <VERB? ZAP> <CAN-ZAP?>>\n\t\t       <PERFORM ,V?ZAP ,CHIEF>\n\t\t       <RTRUE>)\n\t\t      (<VERB? TAKE>\n\t\t       <TELL\n\"The chief jumps back and waves his spear at you angrily!\" CR>)\n\t\t      (<VERB? POINT>\n\t\t       <SETG POINTED? T>\n\t\t       <COND (<IN? ,SPACESUIT ,CHIEF>\n\t\t\t      <FCLEAR ,BROWN-KEY ,NDESCBIT>\n\t\t\t      <SCORE-OBJ ,BROWN-KEY>\n\t\t\t      <MOVE ,BROWN-KEY ,ADVENTURER>\n\t\t\t      <SETG ALIENS-FRIENDLY? T>\n\t\t\t      <TELL\n\"The chief hesitates, understanding you all too well, then reluctantly\nremoves the rod from its string and hands it to you.\" CR>)\n\t\t\t     (<IN? ,SPACESUIT ,ADVENTURER>\n\t\t\t      <TELL\n\"The chief looks at you shrewdly, then points at your space suit.\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"The chief is offended.\" CR>)>)>)>>"
  },
  "WIFE-PSEUDO": {
   "name": "WIFE-PSEUDO",
   "file": "actions.zil",
   "line": 2792,
   "endLine": 2803,
   "source": "<ROUTINE WIFE-PSEUDO ()\n\t <COND (<AND <VERB? ZAP> <CAN-ZAP?>>\n\t\t<SETG ALIENS-FRIENDLY? <>>\n\t\t<TELL\n\"She is vaporized by the blast! Fortunately, the chief, has\nmany wives, and this was a lesser one.\" CR>)\n\t       (<VERB? TAKE POINT>\n\t\t<COND (<NOT <IN? ,BROWN-KEY ,CHIEF>> <RFALSE>)\n\t\t      (<IN? ,SPACESUIT ,CHIEF>\n\t\t       <TELL\n\"She snarls at her husband and grimaces at you. The chief waves his hands as\nif to say \\\"Never mind.\\\"\" CR>)>)>>"
  },
  "CHILD-PSEUDO": {
   "name": "CHILD-PSEUDO",
   "file": "actions.zil",
   "line": 2805,
   "endLine": 2815,
   "source": "<ROUTINE CHILD-PSEUDO ()\n\t <COND (<AND <VERB? ZAP> <CAN-ZAP?>>\n\t\t<SETG ALIENS-FRIENDLY? <>>\n\t\t<TELL\n\"The agile young weasel dodges the blast, laughing at you.\" CR>)\n\t       (<VERB? TAKE POINT>\n\t\t<COND (<NOT <IN? ,BROWN-KEY ,CHIEF>> <RFALSE>)\n\t\t      (<IN? ,SPACESUIT ,CHIEF>\n\t\t       <TELL\n\"The child sticks its tongue at you and scampers off. Other young weasels\ncaper about, making noises that sound much like laughter.\" CR>)>)>>"
  },
  "MAZE-FCN": {
   "name": "MAZE-FCN",
   "file": "actions.zil",
   "line": 2817,
   "endLine": 2836,
   "source": "<ROUTINE MAZE-FCN (RARG)\n\t <FCLEAR ,MAZE ,TOUCHBIT>\n\t <COND (<IN? ,CHIEF ,VILLAGE>\n\t\t<QUEUE I-CHIEF 0>\n\t\t<REMOVE ,CHIEF>)>\n\t <COND (<==? .RARG ,M-BEG>\n\t\t<COND (<AND <VERB? WALK> <PROB 5>>\n\t\t       <GOTO ,VILLAGE>)\n\t\t      (<VERB? DROP>\n\t\t       <TELL\n\"As soon as you drop the \" D ,PRSO \", one of the smaller creatures rushes\nover and grabs it! He charges out of the room, squeaking with glee.\" CR>\n\t\t       <COND (<PROB 25>\n\t\t\t      <TELL\n\"With a roar, an older weasel grabs the young one before it escapes and cuffs\nit soundly about the ears. The elder creature hands you back the \" D ,PRSO \",\ngrinning and grunting in a friendly way.\" CR>)\n\t\t\t     (ELSE <REMOVE ,PRSO>)>)>)\n\t       (<==? .RARG ,M-ENTER>\n\t\t<ROB ,HERE ,THRONE-ROOM>)>>"
  },
  "I-CHIEF": {
   "name": "I-CHIEF",
   "file": "actions.zil",
   "line": 2842,
   "endLine": 2890,
   "source": "<ROUTINE I-CHIEF (\"AUX\" (OLDP <LOC ,CHIEF>))\n\t <COND (<AND <IN? ,CHIEF ,VILLAGE>\n\t\t     <IN? ,BROWN-KEY ,CHIEF>\n\t\t     <NOT <G? ,CHWAIT 10>>>\n\t\t<SETG CHWAIT <+ ,CHWAIT 1>>\n\t\t<COND (<IN? ,CHIEF ,HERE>\n\t\t       <TELL\n\"The chief gestures impatiently at \">\n\t\t       <COND (<OR <IN? ,SPACESUIT ,ADVENTURER>\n\t\t\t\t  <IN? ,SPACESUIT ,HERE>>\n\t\t\t      <TELL \"your space suit.\">)\n\t\t\t     (<IN? ,SPACESUIT ,CHIEF>\n\t\t\t      <TELL \"various objects.\">)\n\t\t\t     (ELSE <TELL \"you.\">)>\n\t\t       <CRLF>)>\n\t\t<ENABLE <QUEUE I-CHIEF 2>>\n\t\t<RTRUE>)\n\t       (<IN? ,CHIEF ,GREEN-THREE>\n\t\t<TELL\n\"The chief grins, exposing his pointy teeth, and points portentiously at\nthe ladder. He curls up on the dirt floor and waits, watching you with\ninterest.\" CR>\n\t\t<DISABLE <INT I-CHIEF>>\n\t\t<RTRUE>)>\n\t <REMOVE ,CHIEF>\n\t <SETG CHFOLLOW <+ ,CHFOLLOW 1>>\n\t <COND (<G? ,CHWAIT 10> ;\"chief tired of waiting\"\n\t\t<COND (<IN? ,WINNER .OLDP>\n\t\t       <TELL\n\"The chief appears insulted and disappears into the warren. The others appear\nto be upset.\" CR>)>\n\t\t<SETG ALIENS-FRIENDLY? <>>\n\t\t<SETG CHFOLLOW 2>\n\t\t<RTRUE> ;\"chomped. don't reenable\")>\n\t <COND (<IN? ,WINNER .OLDP>\n\t\t<SETG CHFOLLOW 0>\n\t        <COND (<==? .OLDP ,VILLAGE>\n\t\t       <SETG CHPATH <+ 5 <RANDOM 5>>>)>\n\t\t<TELL <PICK-ONE ,CHIEF-MOVES> CR>)\n\t       (<IN? ,WINNER ,MAZE>\n\t\t<COND (<PROB 5>\n\t\t       <MOVE ,CHIEF ,MAZE>\n\t\t       <SETG CHFOLLOW 0>\n\t\t       <TELL\n\"The chief enters the room and seems surprised but pleased to see you.\" CR>)\n\t\t      (ELSE <SETG CHWAIT <+ ,CHWAIT 1>>)>)>\n\t <ENABLE <QUEUE I-CHIEF\n\t\t\t<COND (<PROB 75> 1)(ELSE 2)>>>\n\t <RTRUE>>"
  },
  "SKELETON-FCN": {
   "name": "SKELETON-FCN",
   "file": "actions.zil",
   "line": 2898,
   "endLine": 2917,
   "source": "<ROUTINE SKELETON-FCN ()\n\t <COND (<VERB? TAKE RUB MOVE>\n\t\t<COND (<FSET? ,VIOLET-KEY ,INVISIBLE>\n\t\t       <MOVE ,VIOLET-KEY ,THRONE-ROOM>\n\t\t       <FCLEAR ,VIOLET-KEY ,INVISIBLE>\n\t\t       <THIS-IS-IT ,VIOLET-KEY>\n\t\t       <TELL\n\"When you touch the skeleton, its arm falls off the armrest. Something\nslides out of the space suit and onto the floor.\" CR>)\n\t\t      (ELSE\n\t\t       <SETG ALIENS-FRIENDLY? <>>\n\t\t       <JIGS-UP\n\"This time, the skeleton falls apart with a horrendous clatter. A head peeks\nthrough the door. It's a weasel! He roars, and soon dozens of the aliens\nsurround you. The rest, alas, is too gory to describe.\">)>)\n\t       (<AND <VERB? ZAP> <CAN-ZAP?>>\n\t\t<SETG ALIENS-FRIENDLY? <>>\n\t\t<JIGS-UP\n\"The skeleton is destroyed by the blast! The aliens, hearing it, rush in and\nskewer you for desecrating their sacred place.\">)>>"
  },
  "ITS-CLOSED": {
   "name": "ITS-CLOSED",
   "file": "actions.zil",
   "line": 2921,
   "endLine": 2924,
   "source": "<ROUTINE ITS-CLOSED (OBJ)\n\t <TELL \"The \" D .OBJ \" is closed.\" CR>\n\t <THIS-IS-IT .OBJ>\n\t <RFALSE>>"
  },
  "GREEN-LOCK-EXIT": {
   "name": "GREEN-LOCK-EXIT",
   "file": "actions.zil",
   "line": 2926,
   "endLine": 2935,
   "source": "<ROUTINE GREEN-LOCK-EXIT ()\n\t <COND (<NOT <FSET? ,GREEN-INNER ,OPENBIT>>\n\t\t<ITS-CLOSED ,GREEN-INNER>)\n\t       (<FSET? ,VIOLET-KEY ,INVISIBLE> ,GREEN-THREE)\n\t       (,CAUGHT?\n\t\t<TELL \"Outraged aliens bar your way.\" CR>\n\t\t<RFALSE>)\n\t       (ELSE\n\t\t<ALIEN-GUARDS>\n\t\t<RFALSE>)>>"
  },
  "GREEN-THREE-FCN": {
   "name": "GREEN-THREE-FCN",
   "file": "actions.zil",
   "line": 2937,
   "endLine": 2941,
   "source": "<ROUTINE GREEN-THREE-FCN (RARG)\n\t <COND (<==? .RARG ,M-ENTER>\n\t\t<COND (<NOT <FSET? ,VIOLET-KEY ,INVISIBLE>>\n\t\t       <ALIEN-GUARDS>\n\t\t       <RFATAL>)>)>>"
  },
  "ALIEN-GUARDS": {
   "name": "ALIEN-GUARDS",
   "file": "actions.zil",
   "line": 2943,
   "endLine": 2952,
   "source": "<ROUTINE ALIEN-GUARDS ()\n\t <SETG CAUGHT? T>\n\t <SETG ALIENS-FRIENDLY? <>>\n\t <REMOVE ,VIOLET-KEY>\n\t <JIGS-UP\n\"As you re-enter the warren an alien approaches, spear in hand. Initially he\nlooks friendly but becomes suspicious and rushes past you into the ship. There\nis a loud roar as he realizes you have desecrated the altar! Other aliens\nsurround you, spears at the ready.\">\n\t <RFATAL>>"
  },
  "NEST-CAGE-FCN": {
   "name": "NEST-CAGE-FCN",
   "file": "actions.zil",
   "line": 2954,
   "endLine": 2986,
   "source": "<ROUTINE NEST-CAGE-FCN (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"The force projectors here aren't working, but the cage is nonetheless\ninhabited by many creatures who resemble crosses between a rat and an ant.\nThey are multi-legged with chitinous shells and pincers around their mouths,\nbut they have long ratlike tails and sparse tufts of hair. Some of them are\narmed with tiny spears and walk precariously on their hind legs.\">\n\t\t<COND (<IN? ,NEST ,NEST-CAGE>\n\t\t       <TELL\n\" In one corner is a very large mud and stick nest.\">\n\t\t       <COND (<FIRST? ,NEST>\n\t\t\t      <TELL\n\" The nest is constructed of all sorts of odds and ends, including \">\n\t\t\t      <PRINT-CONTENTS ,NEST>\n\t\t\t      <TELL \".\">\n\t\t\t      <COND (<IN? ,RED-KEY ,NEST>\n\t\t\t\t     <TELL\n\" The rod is embedded in the mud near one of the entrances of the nest.\">)>)>)\n\t\t      (<IN? ,SMASHED-NEST ,NEST-CAGE>\n\t\t       <TELL\n\" In one corner is a ruined nest which has been broken into many\nsmaller pieces.\">\n\t\t       <COND (<FIRST? ,SMASHED-NEST>\n\t\t\t      <TELL\n\" Resting among the fragments of the nest can be seen \">\n\t\t\t      <PRINT-CONTENTS ,SMASHED-NEST>\n\t\t\t      <TELL \".\">)>)>\n\t\t<COND (,RATS-MAD?\n\t\t       <TELL\n\" The rat-ants are extremely agitated by your presence, and a detail\nfollows you just out of reach, hissing and clicking their mandibles.\">)>\n\t\t<CRLF>)>>"
  },
  "RAT-ANT-FCN": {
   "name": "RAT-ANT-FCN",
   "file": "actions.zil",
   "line": 2990,
   "endLine": 3021,
   "source": "<ROUTINE RAT-ANT-FCN ()\n\t <COND (<VERB? TELL>\n\t\t<TELL \"The rat-ant ignores you.\" CR>\n\t\t<SETG P-CONT <>>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"They look like a cross between a rat and an ant. They have chitinous shells,\nmandibles, and exhibit an ant-like social order. They also have hair, bear\nlive young, and are roughly the size of rats. They have a crude intelligence,\nevidenced by the spears of the warrior caste. The cage has many rat-ants of\nvarying sizes, ages, and social roles.\" CR>)\n\t       (<AND <VERB? ZAP> <CAN-ZAP?>>\n\t\t<SETG RATS-MAD? T>\n\t\t<TELL\n\"Several rat-ant warriors are reduced to ash, but many more rush out to\nreplace them, and these look mad!\" CR>)\n\t       (<VERB? MUNG>\n\t\t<SETG RATS-MAD? T>\n\t\t<TELL\n\"The rat-ants become ferocious, rushing about clicking their mandibles\nand squeaking.\" CR>)\n\t       (<AND <VERB? GIVE> <==? ,PRSI ,RAT-ANT>>\n\t\t<FSET ,PRSO ,NDESCBIT>\n\t\t<MOVE ,PRSO <COND (<IN? ,NEST ,HERE> ,NEST)\n\t\t\t\t  (<IN? ,SMASHED-NEST ,HERE> ,SMASHED-NEST)\n\t\t\t\t  (T\n\t\t\t\t   <TELL\n\"The rat-ants ignore you in their grief.\" CR>\n\t\t\t\t   <RTRUE>)>>\n\t\t<TELL\n\"A rat-ant takes the \" D ,PRSO \" and incorporates it into the nest.\" CR>)>>"
  },
  "NEST-FCN": {
   "name": "NEST-FCN",
   "file": "actions.zil",
   "line": 3023,
   "endLine": 3072,
   "source": "<ROUTINE NEST-FCN (\"AUX\" (TOOL <>))\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The nest is a jerry-built construction of odds and ends precariously stuck\ntogether. Rat-ants swarm all over it.\" CR>)\n\t       (<VERB? KICK>\n\t\t<TELL\n\"Rat-ants nip at your toes and prevent it.\" CR>)\n\t       (<OR <AND <VERB? MUNG>\n\t\t\t <==? ,PRSO ,NEST>\n\t\t\t ,PRSI>\n\t\t    <AND <VERB? THROW>\n\t\t\t <==? ,PRSI ,NEST>\n\t\t\t ,PRSO>>\n\t\t<COND (<VERB? MUNG> <SET TOOL ,PRSI>)\n\t\t      (ELSE <SET TOOL ,PRSO>)>\n\t\t<COND (<==? .TOOL ,HANDS>\n\t\t       <TELL\n\"Rat-ants snap at you with their nasty sharp mandibles.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<NOT <IN? .TOOL ,WINNER>>\n\t\t       <DONT-HAVE .TOOL>\n\t\t       <RTRUE>)\n\t\t      (<G? <GETP .TOOL ,P?SIZE> 5>\n\t\t       <FSET .TOOL ,NDESCBIT>\n\t\t       <MOVE .TOOL ,SMASHED-NEST>\n\t\t       <COND (<IN? ,RED-KEY ,NEST>\n\t\t\t      <FSET ,RED-KEY ,TOUCHBIT>\n\t\t\t      <FSET ,RED-KEY ,NDESCBIT>\n\t\t\t      <MOVE ,RED-KEY ,SMASHED-NEST>)>\n\t\t       <MOVE ,SMASHED-NEST ,NEST-CAGE>\n\t\t       <ROB ,NEST ,SMASHED-NEST T>\n\t\t       <REMOVE ,NEST>\n\t\t       <ENABLE <QUEUE I-NEST 15>>\n\t\t       <TELL\n\"The nest smashes into fragments and the rat-ants stop dead in their tracks!\nThey frantically evacuate the nest and immediately begin constructing a new\nnest at the opposite end of the cage. Rat-ant babies are being carried across\nthe cage, and warriors watch you suspiciously.\" CR>)\n\t\t      (ELSE\n\t\t       <FSET .TOOL ,NDESCBIT>\n\t\t       <MOVE .TOOL ,NEST>\n\t\t       <TELL\n\"The \" D .TOOL \" doesn't damage the nest very much, and in fact a\nrat-ant quickly incorporates it into the nest.\" CR>)>)\n\t       (<VERB? ZAP>\n\t\t<REMOVE ,NEST>\n\t\t<DISABLE <INT I-NEST>>\n\t\t<TELL\n\"The nest and all it contains is destroyed.\" CR>)>>"
  },
  "I-NEST": {
   "name": "I-NEST",
   "file": "actions.zil",
   "line": 3074,
   "endLine": 3083,
   "source": "<ROUTINE I-NEST ()\n\t <MOVE ,NEST ,NEST-CAGE>\n\t <ROB ,SMASHED-NEST ,NEST T>\n\t <ROB ,NEST-CAGE ,NEST T>\n\t <REMOVE ,SMASHED-NEST>\n\t <COND (<==? ,HERE ,NEST-CAGE>\n\t\t<TELL\n\"The rat-ants have completed their new nest, frugally incorporating all\nthe materials from the old nest. They leave a few guards to\nwatch you while the others retire inside for a well-earned rest.\" CR>)>>"
  },
  "NEST-CONT": {
   "name": "NEST-CONT",
   "file": "actions.zil",
   "line": 3085,
   "endLine": 3090,
   "source": "<ROUTINE NEST-CONT ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL\n\"As you reach for the \" D ,PRSO \", a rat-ant pokes its head out of the nest\nand snaps at you with its needle-sharp mandibles. You draw back just in\ntime.\" CR>)>>"
  },
  "SMASHED-NEST-CONT": {
   "name": "SMASHED-NEST-CONT",
   "file": "actions.zil",
   "line": 3092,
   "endLine": 3095,
   "source": "<ROUTINE SMASHED-NEST-CONT ()\n\t <COND (<VERB? TAKE>\n\t\t<FCLEAR ,PRSO ,NDESCBIT>\n\t\t<>)>>"
  },
  "PANEL-FCN": {
   "name": "PANEL-FCN",
   "file": "actions.zil",
   "line": 3102,
   "endLine": 3113,
   "source": "<ROUTINE PANEL-FCN ()\n\t <COND (<AND <VERB? OPEN>\n\t\t     <NOT <FSET? ,PANEL ,OPENBIT>>>\n\t\t<FSET ,PANEL ,OPENBIT>\n\t\t<TELL\n\"Opening the access panel reveals rack upon rack of metallic cards.\">\n\t\t<COND (<IN? ,CARD ,SLOT>\n\t\t       <TELL\n\" All the slots have cards in them.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\" There is one slot that has no card in it.\" CR>)>)>>"
  },
  "SLOT-FCN": {
   "name": "SLOT-FCN",
   "file": "actions.zil",
   "line": 3115,
   "endLine": 3133,
   "source": "<ROUTINE SLOT-FCN ()\n\t <COND (<VERB? PUT>\n\t\t<COND (<==? ,PRSO ,CARD>\n\t\t       <COND (<IN? ,CARD ,SLOT>\n\t\t\t      <TELL \"It's already there.\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <MOVE ,CARD ,SLOT>\n\t\t\t      <TELL\n\"The card slides snugly into the slot.\">\n\t\t\t      <COND (,SWITCH-ON?\n\t\t\t\t     <SETG FRIED? T>\n\t\t\t\t     <ENABLE <QUEUE I-MELTDOWN 2>>\n\t\t\t\t     <TELL\n\" Almost immediately the smell of burning components assaults your nostrils,\nand smoke pours from the card.\">)>\n\t\t       <CRLF>\n\t\t       <RTRUE>)>)\n\t\t      (ELSE\n\t\t       <WONT-FIT>)>)>>"
  },
  "I-MELTDOWN": {
   "name": "I-MELTDOWN",
   "file": "actions.zil",
   "line": 3135,
   "endLine": 3142,
   "source": "<ROUTINE I-MELTDOWN ()\n\t <COND (,SWITCH-ON?\n\t\t<SETG MELTED? T>\n\t\t<SETG SWITCH-ON? <>>\n\t\t<REMOVE ,CARD>\n\t\t<TELL\n\"The computer has now been completely fried by this electrical fire.\nCongratulations!\" CR>)>>"
  },
  "CAN-ZAP?": {
   "name": "CAN-ZAP?",
   "file": "actions.zil",
   "line": 3153,
   "endLine": 3158,
   "source": "<ROUTINE CAN-ZAP? ()\n\t <COND (<OR <0? ,ZAP-CNT> <IN? ,SILVER-KEY ,ZAP-GUN>>\n\t\t<RFALSE>)\n\t       (ELSE\n\t\t<SETG ZAP-CNT <- ,ZAP-CNT 1>>\n\t\t<RTRUE>)>>"
  },
  "ZAP-GUN-FCN": {
   "name": "ZAP-GUN-FCN",
   "file": "actions.zil",
   "line": 3160,
   "endLine": 3250,
   "source": "<ROUTINE ZAP-GUN-FCN (\"AUX\" I)\n\t <SET I <FIRST? ,ZAP-GUN>>\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"It looks like the heavy duty model. It's got quite a bit of heft to it, and\nyou really need two hands to aim it properly. The barrel is long and festooned\nwith strange knobs and antennae. There is a charge indicator which is\nunfortunately unreadable.\" CR>)\n\t       (<VERB? OPEN> <TELL \"You can't open that.\" CR>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<COND (.I\n\t\t       <FSET ,ZAP-GUN ,OPENBIT>\n\t\t       <TELL \"In the barrel is a \" D .I \"!\" CR>\n\t\t       <SCORE-OBJ .I>\n\t\t       <RTRUE>)\n\t\t      (ELSE <TELL \"There is nothing inside the barrel.\" CR>)>)\n\t       (<AND <VERB? SHAKE> .I>\n\t\t<TELL \"It rattles loudly.\" CR>)\n\t       (<AND <VERB? PUT> <==? ,ZAP-GUN ,PRSI>>\n\t\t<COND (.I <TELL \"There is already something inside it.\" CR>)\n\t\t      (<NOT <FSET? ,PRSO ,KEYBIT>>\n\t\t       <WONT-FIT>)>)\n\t       (<VERB? POINT>\n\t\t<TELL \"Why don't you just fire it instead?\" CR>)\n\t       (<VERB? MUNG ATTACK>\n\t\t<TELL\n\"Firing the ray gun is more efficient than smashing things with it.\" CR>)\n\t       (<VERB? ZAP>\n\t\t<COND (<NOT <IN? ,ZAP-GUN ,WINNER>>\n\t\t       <TELL \"You are firing it by mental force, I assume?\" CR>\n\t\t       <RTRUE>)\n\t\t      (<==? ,ZAP-CNT 0>\n\t\t       <TELL \"\\\"Click.\\\"\" CR>\n\t\t       <RTRUE>)>\n\t\t<SETG ZAP-CNT <- ,ZAP-CNT 1>>\n\t\t<COND (.I\n\t\t       <REMOVE .I>\n\t\t       <FSET ,ZAP-GUN ,OPENBIT>\n\t\t       <COND (<NOT <0? ,ZAP-CNT>>\n\t\t\t      <SETG ZAP-CNT <- ,ZAP-CNT 1>>)>\n\t\t       <TELL\n\"A giant blast\">\n\t\t       <COND (<==? .I ,SILVER-KEY>\n\t\t\t      <TELL \" of silvery rays\">)>\n\t\t       <TELL \" issues from the barrel, but it doesn't\ngo very far. In fact, there is a secondary explosion about a foot from\nthe barrel, scattering dust motes in the air. There is almost no\nrecoil: instead the gun vibrated almost painfully. This felt like a\nmisfire.\" CR>)\n\t\t      (<FSET? ,HERE ,RAIRBIT> <JATO>)\n\t\t      (<NOT ,PRSI>\n\t\t       <TELL\n\"A giant blast of searing orange rays issues from the barrel, and the\nrecoil knocks you flat on your back. Fortunately no one was standing\nin front of you or it would have been curtains.\" CR>)\n\t\t      (<EQUAL? ,PRSI ,ME ,HANDS>\n\t\t       <ROB ,WINNER>\n\t\t       <JIGS-UP\n\"If you say so... The blast destroys you and your possessions so quickly\nthere is no point in even describing the carnage.\">)\n\t\t      (<==? ,PRSI ,ZAP-GUN>\n\t\t       <TELL\n\"That would involve a higher technology than even the builders of the\nray gun possessed.\" CR>)\n\t\t      (<FSET? ,PRSI ,VILLAIN>\n\t\t       <REMOVE ,PRSI>\n\t\t       <TELL\n\"A mighty wash of orange rays and smoke covers the \" D ,PRSI \". The powerful\nblast knocks you down as the poor \" D ,PRSI \" is utterly disintegrated.\" CR>)\n\t\t      (<IN? ,PRSI ,WINNER>\n\t\t       <ROB ,WINNER>\n\t\t       <TELL\n\"A huge explosion of orange rays destroys the \" D ,PRSI \" utterly.\" CR>\n\t\t       <JIGS-UP\n\"Unfortunately, that requires firing so close that the blast destroys\nyou and your possessions as well.\">)\n\t\t      (<OR <FSET? ,PRSI ,TAKEBIT> <FSET? ,PRSI ,VICBIT>>\n\t\t       <REMOVE ,PRSI>\n\t\t       <TELL\n\"There is a horrendous explosion from the ray gun, and a huge gout of orange\nrays envelops the \" D ,PRSI \". You are knocked spinning by the recoil, and\nwhen you recover, you see no sign of the \" D ,PRSI \" but a tiny drift of\ndust.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"An explosion of orange rays sweeps over the \" D ,PRSI \", but when the\nsmoke clears, it is still there (though perhaps a bit singed).\" CR>)>)\n\t       (<AND <VERB? KILL MUNG ATTACK>\n\t\t     <==? ,ZAP-GUN ,PRSI>>\n\t\t<PERFORM ,V?ZAP ,PRSI ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "TREE-FCN": {
   "name": "TREE-FCN",
   "file": "actions.zil",
   "line": 3256,
   "endLine": 3259,
   "source": "<ROUTINE TREE-FCN ()\n\t <COND (<VERB? CLIMB-UP CLIMB-ON CLIMB-FOO> <DO-WALK ,P?UP> <RTRUE>)\n\t       (<EQUAL? ,HERE ,SCRUB ,SCRUB-2> <RFALSE>)\n\t       (<VERB? CLIMB-DOWN> <DO-WALK ,P?DOWN> <RTRUE>)>>"
  },
  "UP-A-TREE-EXIT": {
   "name": "UP-A-TREE-EXIT",
   "file": "actions.zil",
   "line": 3261,
   "endLine": 3266,
   "source": "<ROUTINE UP-A-TREE-EXIT ()\n\t <COND (<OR <IN? ,SPACESUIT ,WINNER>\n\t\t    <IN? ,JUNK-SPACESUIT ,WINNER>>\n\t\t<TELL \"You can't climb with that bulky suit.\" CR>\n\t\t<RFALSE>)\n\t       (ELSE ,UP-A-TREE)>>"
  },
  "UP-A-TREE-FCN": {
   "name": "UP-A-TREE-FCN",
   "file": "actions.zil",
   "line": 3268,
   "endLine": 3279,
   "source": "<ROUTINE UP-A-TREE-FCN (RARG)\n\t <COND (<==? .RARG ,M-BEG>\n\t\t<COND (<VERB? DROP THROW>\n\t\t       <MOVE ,PRSO ,BASE-OF-TREE>\n\t\t       <TELL\n\"The \" D ,PRSO \" drops out of sight.\" CR>)\n\t\t      (<VERB? FLY>\n\t\t       <JIGS-UP\n\"You aren't a bird, so you plummet rather than soar.\">)\n\t\t      (<VERB? LEAP>\n\t\t       <JIGS-UP\n\"Gravity is low here, but not that low, so your jump is fatal.\">)>)>>"
  },
  "TREETOP-FCN": {
   "name": "TREETOP-FCN",
   "file": "actions.zil",
   "line": 3281,
   "endLine": 3301,
   "source": "<ROUTINE TREETOP-FCN (RARG)\n\t <COND (<==? .RARG ,M-BEG>\n\t\t<COND (<VERB? DROP THROW>\n\t\t       <COND (<IDROP>\n\t\t\t      <COND (<AND <EQUAL? ,PRSO\n\t\t\t\t\t\t  ,SPACESUIT ,SAFETY-LINE>\n\t\t\t\t\t  <APPLY <GETP ,PRSO ,P?ACTION>>>\n\t\t\t\t     <RTRUE>)>\n\t\t\t      <MOVE ,PRSO ,BASE-OF-TREE>\n\t\t\t      <TELL\n\"The \" D ,PRSO \" drops out of sight.\" CR>)\n\t\t\t     (ELSE <RTRUE>)>)\n\t\t      (<VERB? FLY>\n\t\t       <JIGS-UP\n\"You aren't a bird, so you plummet rather than soar.\">)\n\t\t      (<VERB? LEAP>\n\t\t       <TELL\n\"Gravity is almost non-existent here, so your jump easily carries\nyou to the hatch of the drive bubble.\" CR>\n\t\t       <CRLF>\n\t\t       <GOTO ,DRIVE-BUBBLE-ENTRANCE>)>)>>"
  },
  "DRIVE-BUBBLE-ENTRANCE-FCN": {
   "name": "DRIVE-BUBBLE-ENTRANCE-FCN",
   "file": "actions.zil",
   "line": 3303,
   "endLine": 3322,
   "source": "<ROUTINE DRIVE-BUBBLE-ENTRANCE-FCN (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are floating (clinging?) outside the drive bubble, a crystalline\nhalf-sphere covering the aft end of the artifact's axis of rotation.\nSmall knobs like handholds lead up the surface of the bubble, away from the\nend of the cylinder. The drive bubble is transparent and through it you can\nsee the controls for the main engines of the artifact, which must be aft of\nhere. The only way in is a hatch which is \">\n\t\t<COND (<FSET? ,DRIVE-BUBBLE-HATCH ,OPENBIT>\n\t\t       <TELL \"open.\">)\n\t\t      (ELSE <TELL \"closed.\">)>\n\t\t<TELL \" Beside the hatch is a silver slot\">\n\t\t<COND (<IN? ,SILVER-KEY ,SILVER-SLOT>\n\t\t       <TELL \" containing a silver rod\">)>\n\t\t<TELL \".\" CR>)\n\t       (<==? .RARG ,M-BEG>\n\t\t<COND (<VERB? DROP THROW> <BOMBS-AWAY>)\n\t\t      (ELSE\n\t\t       <SWAN-DIVE ,DRIVE-BUBBLE>)>)>>"
  },
  "SWAN-DIVE": {
   "name": "SWAN-DIVE",
   "file": "actions.zil",
   "line": 3324,
   "endLine": 3331,
   "source": "<ROUTINE SWAN-DIVE (BUB)\n\t <COND (<OR <VERB? LEAP>\n\t\t    <AND <VERB? PUSH> <==? ,PRSO .BUB>>>\n\t\t<JIGS-UP\n\"Gravity is very light here and you practically zoom into the air.\nUnfortunately gravity is not entirely non-existent, so eventually you begin\nto fall, faster and faster, in a lovely curve produced by the rotation of the\nartifact. You make a gorgeous but fatal swan dive into the surface.\">)>>"
  },
  "DRIVE-BUBBLE-FCN": {
   "name": "DRIVE-BUBBLE-FCN",
   "file": "actions.zil",
   "line": 3333,
   "endLine": 3334,
   "source": "<ROUTINE DRIVE-BUBBLE-FCN ()\n\t <COND (<VERB? CLIMB-UP CLIMB-ON BOARD> <DO-WALK ,P?UP> <RTRUE>)>>"
  },
  "CONTROL-BUBBLE-FCN": {
   "name": "CONTROL-BUBBLE-FCN",
   "file": "actions.zil",
   "line": 3336,
   "endLine": 3337,
   "source": "<ROUTINE CONTROL-BUBBLE-FCN ()\n\t <COND (<VERB? CLIMB-UP CLIMB-ON BOARD> <DO-WALK ,P?UP> <RTRUE>)>>"
  },
  "OUT-OF-REACH": {
   "name": "OUT-OF-REACH",
   "file": "actions.zil",
   "line": 3339,
   "endLine": 3339,
   "source": "<ROUTINE OUT-OF-REACH () <TELL \"It's out of reach above you.\" CR>>"
  },
  "DRIVE-BUBBLE-ROOM-FCN": {
   "name": "DRIVE-BUBBLE-ROOM-FCN",
   "file": "actions.zil",
   "line": 3341,
   "endLine": 3363,
   "source": "<ROUTINE DRIVE-BUBBLE-ROOM-FCN (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"The drive bubble is on the axis of rotation at the aft end of the artifact,\nso there is no \\\"gravity\\\" here. It is transparent and you can see the tips\nof the tallest trees of the forest beyond. Far off, at the opposite end of\nthe axis, is another bubble much like this one. \">\n\t\t<COND (<IN? ,WHITE-KEY ,WHITE-SLOT>\n\t\t       <TELL\n\"The room's gray walls are covered with traceries of white outlining\ncontrols, buttons, dials, and indicators. In addition, a black slot\nsurrounded by an ominous dead-black circle is next to a white slot\ncontaining a white rod.\">)\n\t\t      (ELSE\n\t\t       <TELL\n\"The room is a featureless gray except for one small white slot.\">)>\n\t\t<TELL \" One way out is the hatch, which is \">\n\t\t<COND (<FSET? ,DRIVE-BUBBLE-HATCH ,OPENBIT>\n\t\t       <TELL \"open.\">)\n\t\t      (ELSE <TELL \"closed.\">)>\n\t\t<CRLF>)\n\t       (<==? .RARG ,M-BEG>\n\t\t<BUBBLE-BOUNCE>)>>"
  },
  "BUBBLE-BOUNCE": {
   "name": "BUBBLE-BOUNCE",
   "file": "actions.zil",
   "line": 3365,
   "endLine": 3373,
   "source": "<ROUTINE BUBBLE-BOUNCE ()\n\t <COND (<AND <VERB? WALK> <EQUAL? ,PRSO ,P?UP ,P?NORTH>>\n\t\t       <TELL\n\"You can't walk in that direction, as there is no gravity here. You could\njump, perhaps...\" CR>)\n\t\t      (<VERB? LEAP>\n\t\t       <TELL\n\"You push off the floor, and because there is no weight you zoom into the air\nand rebound against the transparent surface of the bubble!\" CR>)>>"
  },
  "WHITE-KEY-FCN": {
   "name": "WHITE-KEY-FCN",
   "file": "actions.zil",
   "line": 3375,
   "endLine": 3394,
   "source": "<ROUTINE WHITE-KEY-FCN ()\n\t <COND (<AND <VERB? TAKE> <IN? ,WHITE-KEY ,WHITE-SLOT>>\n\t\t<REMOVE ,BLACK-SLOT>\n\t\t<FCLEAR ,WHITE-KEY ,NDESCBIT>\n\t\t<MOVE ,WHITE-KEY ,WINNER>\n\t\t<TELL\n\"When you remove the rod, the displays fade and the wall becomes\nfeatureless gray, except for the white slot.\" CR>)\n\t       (<AND <VERB? PUT>\n\t\t     <TRYTAKE>\n\t\t     <==? ,PRSO ,WHITE-KEY>\n\t\t     <==? ,PRSI ,WHITE-SLOT>>\n\t\t<FSET ,WHITE-KEY ,TOUCHBIT>\n\t\t<FSET ,WHITE-KEY ,NDESCBIT>\n\t\t<MOVE ,BLACK-SLOT ,DRIVE-BUBBLE-ROOM>\n\t\t<MOVE ,WHITE-KEY ,WHITE-SLOT>\n\t\t<TELL\n\"As you insert the rod, the walls come alive with a white tracery of controls,\ndials, and gauges. In addition, a black slot surrounded by an ominous\ndead-black circle appears.\" CR>)>>"
  },
  "ON-DRIVE-BUBBLE-FCN": {
   "name": "ON-DRIVE-BUBBLE-FCN",
   "file": "actions.zil",
   "line": 3396,
   "endLine": 3398,
   "source": "<ROUTINE ON-DRIVE-BUBBLE-FCN (RARG)\n\t <COND (<==? .RARG ,M-BEG>\n\t\t<ON-BUBBLE-FCN ,DRIVE-BUBBLE ,AXIS-1>)>>"
  },
  "SILVER-SLOT-CONT": {
   "name": "SILVER-SLOT-CONT",
   "file": "actions.zil",
   "line": 3400,
   "endLine": 3401,
   "source": "<ROUTINE SILVER-SLOT-CONT ()\n\t <HATCH-CLOSE ,DRIVE-BUBBLE-HATCH>>"
  },
  "GOLD-SLOT-CONT": {
   "name": "GOLD-SLOT-CONT",
   "file": "actions.zil",
   "line": 3403,
   "endLine": 3404,
   "source": "<ROUTINE GOLD-SLOT-CONT ()\n\t <HATCH-CLOSE ,CONTROL-BUBBLE-HATCH>>"
  },
  "HATCH-CLOSE": {
   "name": "HATCH-CLOSE",
   "file": "actions.zil",
   "line": 3406,
   "endLine": 3413,
   "source": "<ROUTINE HATCH-CLOSE (HATCH \"AUX\" CONT)\n\t <COND (<VERB? TAKE>\n\t\t<SET CONT <FIRST? .HATCH>>\n\t\t<COND (<TRYTAKE>\n\t\t       <TELL\n\"The \" D .HATCH \" closes silently.\" CR>\n\t\t       <FCLEAR .CONT ,NDESCBIT>\n\t\t       <FCLEAR .HATCH ,OPENBIT>)>)>>"
  },
  "SILVER-SLOT-FCN": {
   "name": "SILVER-SLOT-FCN",
   "file": "actions.zil",
   "line": 3415,
   "endLine": 3416,
   "source": "<ROUTINE SILVER-SLOT-FCN ()\n\t <SLOT-DOOR ,SILVER-SLOT ,SILVER-KEY ,DRIVE-BUBBLE-HATCH>>"
  },
  "GOLD-SLOT-FCN": {
   "name": "GOLD-SLOT-FCN",
   "file": "actions.zil",
   "line": 3418,
   "endLine": 3419,
   "source": "<ROUTINE GOLD-SLOT-FCN ()\n\t <SLOT-DOOR ,GOLD-SLOT ,GOLD-KEY ,CONTROL-BUBBLE-HATCH>>"
  },
  "SLOT-DOOR": {
   "name": "SLOT-DOOR",
   "file": "actions.zil",
   "line": 3421,
   "endLine": 3435,
   "source": "<ROUTINE SLOT-DOOR (SLOT KEY DOOR)\n\t <COND (<VERB? PUT>\n\t\t<COND (<==? ,PRSO .KEY>\n\t\t       <COND (<NOT <FSET? .DOOR ,OPENBIT>>\n\t\t\t      <FSET .DOOR ,OPENBIT>\n\t\t\t      <FSET .KEY ,NDESCBIT>\n\t\t\t      <MOVE .KEY .SLOT>\n\t\t\t      <TELL\n\"The \" D ,PRSO \" slides into the slot and the \" D .DOOR \" opens.\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <ALREADY \"open\">)>)\n\t\t      (<FSET? ,PRSO ,KEYBIT>\n\t\t       <WRONG-KEY>)\n\t\t      (ELSE\n\t\t       <WONT-FIT>)>)>>"
  },
  "WHITE-SLOT-FCN": {
   "name": "WHITE-SLOT-FCN",
   "file": "actions.zil",
   "line": 3437,
   "endLine": 3448,
   "source": "<ROUTINE WHITE-SLOT-FCN ()\n\t <COND (<VERB? PUT>\n\t\t<COND (<NOT <TRYTAKE>> <RTRUE>)\n\t\t      (<NOT <FSET? ,PRSO ,KEYBIT>>\n\t\t       <TELL \"You can't do that.\" CR>)\n\t\t      (<==? ,PRSO ,WHITE-KEY>\n\t\t       <RFALSE>)\n\t\t      (<IN? ,WHITE-KEY ,WHITE-SLOT>\n\t\t       <TELL\n\"The white crystal rod is already in the slot.\" CR>)\n\t\t      (<FSET? ,PRSO ,KEYBIT>\n\t\t       <WRONG-KEY>)>)>>"
  },
  "BLACK-SLOT-FCN": {
   "name": "BLACK-SLOT-FCN",
   "file": "actions.zil",
   "line": 3450,
   "endLine": 3465,
   "source": "<ROUTINE BLACK-SLOT-FCN ()\n\t <COND (<VERB? PUT>\n\t\t<COND (<NOT <TRYTAKE>> <RTRUE>)\n\t\t      (<NOT <FSET? ,PRSO ,KEYBIT>>\n\t\t       <TELL \"You can't do that.\" CR>)\n\t\t      (<==? ,PRSO ,BLACK-KEY>\n\t\t       <TELL\n\"As the rod slides easily into the slot, the lights go out in the bubble.\nOutside, you can see dead black night settling over everything. An\nexpressionless voice speaks inside your head: \\\"Emergency shutoff mechanism\nactivated...\\\" The voice gets quieter and quieter, and finally silence rules\nover all.|\n\">\n\t\t       <FINISH>)\n\t\t      (<FSET? ,PRSO ,KEYBIT>\n\t\t       <WRONG-KEY>)>)>>"
  },
  "CONTROL-BUBBLE-ENTRANCE-FCN": {
   "name": "CONTROL-BUBBLE-ENTRANCE-FCN",
   "file": "actions.zil",
   "line": 3469,
   "endLine": 3487,
   "source": "<ROUTINE CONTROL-BUBBLE-ENTRANCE-FCN (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are floating outside a 100 meter crystal dome which protrudes from the\nfore end of the cylinder. Inside, you can discern shadowy mechanisms and odd\nconstructions. Near you is an entrance which is \">\n\t\t<COND (<FSET? ,CONTROL-BUBBLE-HATCH ,OPENBIT>\n\t\t       <TELL \"open.\">)\n\t\t      (ELSE <TELL \"closed.\">)>\n\t\t<TELL\n\" A small slot surrounded by gold crystal is next to the hatch.\">\n\t\t<COND (<IN? ,GOLD-KEY ,GOLD-SLOT>\n\t\t       <TELL \" The slot contains a gold rod.\">)>\n\t\t<TELL \" Small knobs\nwhich might make good handholds dot the surface of the bubble from the axis\nto the hatch.\" CR>)\n\t       (<==? .RARG ,M-BEG>\n\t\t<COND (<VERB? DROP THROW> <BOMBS-AWAY>)\n\t\t      (ELSE <SWAN-DIVE ,CONTROL-BUBBLE>)>)>>"
  },
  "CONTROL-BUBBLE-ROOM-FCN": {
   "name": "CONTROL-BUBBLE-ROOM-FCN",
   "file": "actions.zil",
   "line": 3489,
   "endLine": 3517,
   "source": "<ROUTINE CONTROL-BUBBLE-ROOM-FCN (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"This room must be the main control room of the artifact. The control bubble\nitself is transparent and you can look out upon the interior of the artifact.\nFar off, hidden among the tallest trees of the forest, is the matching drive\nbubble. One way out is the hatch, which is \">\n\t\t<COND (<FSET? ,CONTROL-BUBBLE-HATCH ,OPENBIT>\n\t\t       <TELL \"open.\">)\n\t\t      (ELSE <TELL \"closed.\">)>\n\t\t<CRLF>\n\t\t<TELL \"The walls are gray \">\n\t\t<COND (<IN? ,CLEAR-KEY ,CLEAR-SLOT>\n\t\t       <TELL \"except for five small\ncolor-coded slots (pink, brown, violet, green, and blue) \">\n\t\t       <COND (<IN? ,CLEAR-SLOT ,HERE>\n\t\t\t      <TELL \"surrounding\na small clear one.\">)\n\t\t\t     (ELSE <TELL \"arranged in a pentagon.\">)>)\n\t\t      (ELSE\n\t\t       <TELL \"except for a single small slot\nsurrounded by clear crystal.\">)>\n\t\t<CRLF>\n\t\t<SLOTS-AND-SPOTS>\n\t\t<COND (<IN? ,VIEW-SELECT ,HERE>\n\t\t       <APPLY <GETP ,VIEW-SELECT ,P?ACTION> ,M-OBJDESC>)>\n\t\t<RTRUE>)\n\t       (<==? .RARG ,M-BEG>\n\t\t<BUBBLE-BOUNCE>)>>"
  },
  "PLANTER-FCN": {
   "name": "PLANTER-FCN",
   "file": "actions.zil",
   "line": 3519,
   "endLine": 3523,
   "source": "<ROUTINE PLANTER-FCN ()\n\t <COND (<VERB? EXAMINE>\n\t\t<AS-ADVERTISED>)\n\t       (<VERB? DIG>\n\t\t<TELL \"You find nothing of interest.\" CR>)>>"
  },
  "METAL-BAND-EXIT": {
   "name": "METAL-BAND-EXIT",
   "file": "actions.zil",
   "line": 3525,
   "endLine": 3536,
   "source": "<ROUTINE METAL-BAND-EXIT ()\n\t <COND (<NOT <FSET? ,GRASSLAND ,TOUCHBIT>>\n\t\t<ENABLE <QUEUE I-HUNTERS 2>>)>\n\t <TELL\n\"You climb a vertical shaft for a considerable distance. The shaft opens\ninto a gigantic space which obviously occupies most of the interior of the\nartifact. The area is \" <COND (,NIGHT? \"dimly\")\n\t\t\t\t\t\t\t(T \"brightly\")>\n\t\t\t\t\t\t  \" lit and has\nan interesting geography...|\n\" CR>\n\t ,GRASSLAND>"
  },
  "SEES-HUNTERS?": {
   "name": "SEES-HUNTERS?",
   "file": "actions.zil",
   "line": 3548,
   "endLine": 3551,
   "source": "<ROUTINE SEES-HUNTERS? ()\n\t <OR <EQUAL? ,HERE ,GRASSLAND ,GRASSLAND-2 ,FORE-END>\n\t     <EQUAL? ,HERE ,METAL-BAND ,METAL-BAND-2 ,FORE-END-2>\n\t     <EQUAL? ,HERE ,SCRUB ,SCRUB-2>>>"
  },
  "I-HUNTERS": {
   "name": "I-HUNTERS",
   "file": "actions.zil",
   "line": 3553,
   "endLine": 3574,
   "source": "<ROUTINE I-HUNTERS ()\n\t <COND (<0? ,HUNTER-COUNT>\n\t\t<COND (<AND <PROB 40> <SEES-HUNTERS?>>\n\t\t       <SETG HUNTER-COUNT 1>)\n\t              (T <ENABLE <QUEUE I-HUNTERS 2>>)>)>\n\t <COND (<NOT <0? ,HUNTER-COUNT>>\n\t\t<COND (<SEES-HUNTERS?>\n\t\t       <TELL \"There is activity \">\n\t\t       <COND (<EQUAL? ,HERE ,GRASSLAND>\n\t\t\t      <TELL \"above, across the cylinder: \">)\n\t\t\t     (<EQUAL? ,HERE ,GRASSLAND-2>\n\t\t\t      <TELL \"nearby: \">)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"on the grassy plain: \">)>\n\t\t       <TELL <GET ,HUNTER-TABLE ,HUNTER-COUNT> CR>)>\n\t\t<COND (<L? ,HUNTER-COUNT <GET ,HUNTER-TABLE 0>>\n\t\t       <SETG HUNTER-COUNT <+ ,HUNTER-COUNT 1>>\n\t\t       <ENABLE <QUEUE I-HUNTERS 2>>)\n\t\t      (ELSE\n\t\t       <SETG HUNTER-COUNT 0>\n\t\t       <ENABLE <QUEUE I-HUNTERS 200>>)>)>>"
  },
  "UNICORNS-FCN": {
   "name": "UNICORNS-FCN",
   "file": "actions.zil",
   "line": 3576,
   "endLine": 3596,
   "source": "<ROUTINE UNICORNS-FCN ()\n\t <COND (<VERB? EXAMINE>\n\t\t<COND (<==? ,HERE ,GRASSLAND>\n\t\t       <TELL\n\"They are over on the other side of the cylinder.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"They are nearby, cropping grass.\" CR>)>)\n\t       (<VERB? FOLLOW> <TELL \"They aren't going anywhere.\" CR>)\n\t       (<VERB? ZAP>\n\t\t<COND (<CAN-ZAP?>\n\t\t       <TELL\n\"Many unicorns are incinerated; the rest scatter in terror, then slowly\nform back into a herd some distance away.\" CR>\n\t\t       <SPOILED-HUNT>)>)\n\t       (ELSE\n\t\t<TELL\n\"The creatures move off as you approach, so you can't get very close to\nthem.\" CR>\n\t\t<SPOILED-HUNT>\n\t\t<RFALSE>)>>"
  },
  "SPOILED-HUNT": {
   "name": "SPOILED-HUNT",
   "file": "actions.zil",
   "line": 3598,
   "endLine": 3606,
   "source": "<ROUTINE SPOILED-HUNT ()\n\t <COND (<AND <G? ,HUNTER-COUNT 0>\n\t\t     <L? ,HUNTER-COUNT 4>>\n\t\t<SETG HUNTER-COUNT 0>\n\t\t<ENABLE <QUEUE I-HUNTERS 200>>\n\t\t<TELL\n\"You have disturbed the hunters, who are annoyed, and the unicorns, who are\nnow more wary. The hunt is spoiled.\" CR>)>\n\t <RTRUE>>"
  },
  "I-NIGHT": {
   "name": "I-NIGHT",
   "file": "actions.zil",
   "line": 3610,
   "endLine": 3626,
   "source": "<ROUTINE I-NIGHT ()\n\t <ENABLE <QUEUE I-NIGHT 128>>\n\t <COND (<OR <SEES-HUNTERS?>\n\t\t    <EQUAL? ,HERE ,FOREST ,BASE-OF-TREE ,UP-A-TREE>\n\t\t    <EQUAL? ,HERE\n\t\t\t    ,TREETOP-ROOM ,DRIVE-BUBBLE-ENTRANCE\n\t\t\t    ,CONTROL-BUBBLE-ENTRANCE>\n\t\t    <EQUAL? ,HERE ,AXIS-1 ,AXIS-2 ,AXIS-3>\n\t\t    <EQUAL? ,HERE ,ON-DRIVE-BUBBLE ,ON-CONTROL-BUBBLE>>\n\t\t<COND (,NIGHT?\n\t\t       <TELL\n\"The lights come on: it is now full daylight.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"The lights dim: it is now nighttime. There is still enough light to\nsee by; it's like a clear, moonlit night back on earth.\" CR>)>)>\n\t\t<SETG NIGHT? <NOT ,NIGHT?>>>"
  },
  "BOMBS-AWAY": {
   "name": "BOMBS-AWAY",
   "file": "actions.zil",
   "line": 3628,
   "endLine": 3659,
   "source": "<ROUTINE BOMBS-AWAY (\"AUX\" A B)\n\t <COND (<EQUAL? ,PRSO ,RED-DISK ,BLUE-DISK>\n\t\t<DISK-SWITCH ,PRSO T>)>\n\t <COND (<NOT <IDROP>> <RTRUE>)\n\t       (<AND <EQUAL? ,PRSO ,SPACESUIT ,SAFETY-LINE>\n\t\t     <APPLY <GETP ,PRSO ,P?ACTION>>>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSI ,DRIVE-BUBBLE ,CONTROL-BUBBLE>\n\t\t<MOVE ,PRSO\n\t\t      <COND (<==? ,PRSI ,DRIVE-BUBBLE> ,FOREST)\n\t\t\t    (ELSE ,FORE-END)>>\n\t\t<TELL\n\"Throwing the \" D ,PRSO \" provides some impulse away from the \" D ,PRSI \",\nbut air resistance slows you quickly.\" CR>)\n\t       (ELSE\n\t\t<COND (<EQUAL? ,HERE\n\t\t\t       ,ON-DRIVE-BUBBLE\n\t\t\t       ,DRIVE-BUBBLE-ENTRANCE>\n\t\t       <SET A ,FOREST> <SET B ,BASE-OF-TREE>)\n\t\t      (<==? ,HERE ,AXIS-1>\n\t\t       <SET A ,SCRUB> <SET B ,SCRUB-2>)\n\t\t      (<==? ,HERE ,AXIS-2>\n\t\t       <SET A ,GRASSLAND> <SET B ,GRASSLAND-2>)\n\t\t      (<==? ,HERE ,AXIS-3>\n\t\t       <SET A ,METAL-BAND> <SET B ,METAL-BAND-2>)\n\t\t      (<EQUAL? ,HERE\n\t\t\t       ,ON-CONTROL-BUBBLE\n\t\t\t       ,CONTROL-BUBBLE-ENTRANCE>\n\t\t       <SET A ,FORE-END> <SET B ,FORE-END-2>)>\n\t\t<MOVE ,PRSO <COND (<PROB 50> .A) (ELSE .B)>>\n\t\t<TELL\n\"The \" D ,PRSO \" sails away, drifting in a long arc towards the ground.\" CR>)>>"
  },
  "ON-BUBBLE-FCN": {
   "name": "ON-BUBBLE-FCN",
   "file": "actions.zil",
   "line": 3661,
   "endLine": 3670,
   "source": "<ROUTINE ON-BUBBLE-FCN (BUB DEST)\n\t <COND (<VERB? DROP THROW> <BOMBS-AWAY>)\n\t       (<OR <VERB? LEAP>\n\t\t    <AND <VERB? PUSH> <==? ,PRSO .BUB>>>\n\t\t<TELL\n\"You push against the surface of the bubble, and because there is no weight\nhere, you shoot into the air and away along the axis!\" CR>\n\t\t<CRLF>\n\t\t<GOTO .DEST>\n\t\t<RTRUE>)>>"
  },
  "ON-CONTROL-BUBBLE-FCN": {
   "name": "ON-CONTROL-BUBBLE-FCN",
   "file": "actions.zil",
   "line": 3672,
   "endLine": 3674,
   "source": "<ROUTINE ON-CONTROL-BUBBLE-FCN (RARG)\n\t <COND (<==? .RARG ,M-BEG>\n\t\t<ON-BUBBLE-FCN ,CONTROL-BUBBLE ,AXIS-3>)>>"
  },
  "AXIS-FCN": {
   "name": "AXIS-FCN",
   "file": "actions.zil",
   "line": 3676,
   "endLine": 3687,
   "source": "<ROUTINE AXIS-FCN (\"OPTIONAL\" (RARG <>))\n\t <COND (<==? .RARG ,M-BEG>\n\t\t<COND (<VERB? WALK>\n\t\t       <TELL\n\"You are floating in midair near the axis of rotation. Given this fact,\nit's hard to see how you are going to walk anywhere.\" CR>)\n\t\t      (<VERB? DROP THROW>\n\t\t       <BOMBS-AWAY>)\n\t\t      (<VERB? LEAP>\n\t\t       <TELL\n\"That was a good idea when you had something to push against. Here it\nhas no effect.\" CR>)>)>>"
  },
  "JATO": {
   "name": "JATO",
   "file": "actions.zil",
   "line": 3689,
   "endLine": 3732,
   "source": "<ROUTINE JATO (\"AUX\" TARGET)\n\t <SET TARGET ,PRSI>\n\t <COND (<NOT <EQUAL? .TARGET ,DRIVE-BUBBLE ,CONTROL-BUBBLE ,GROUND>>\n\t\t<SET TARGET\n\t\t     <COND (<PROB 40> ,DRIVE-BUBBLE)\n\t\t\t   (<PROB 40> ,CONTROL-BUBBLE)\n\t\t\t   (ELSE ,GROUND)>>)>\n\t <TELL\n\"A blast of orange flame issues from the gun, and the recoil propels you at\nan impressive speed through the air.\">\n\t <COND (<EQUAL? ,HERE ,DRIVE-BUBBLE-ROOM ,CONTROL-BUBBLE-ROOM>\n\t\t<TELL\n\" You hit the bulkhead rather hard. Ouch!\" CR>)\n\t       (<EQUAL? .TARGET ,DRIVE-BUBBLE ,CONTROL-BUBBLE>\n\t\t<TELL\n\" Eventually, air resistance slows you down, but you are still in the\nweightless area near the center of the cylinder.\" CR>\n\t\t<COND (<==? .TARGET ,DRIVE-BUBBLE>\n\t\t       <CRLF>\n\t\t       <COND (<==? ,HERE ,ON-DRIVE-BUBBLE> <GOTO ,AXIS-1>)\n\t\t\t     (<==? ,HERE ,AXIS-1> <GOTO ,AXIS-2>)\n\t\t\t     (<==? ,HERE ,AXIS-2> <GOTO ,AXIS-3>)\n\t\t\t     (<==? ,HERE ,AXIS-3>\n\t\t\t      <GOTO ,ON-CONTROL-BUBBLE>)\n\t\t\t     (<==? ,HERE ,ON-CONTROL-BUBBLE>\n\t\t\t      <TELL\n\"You are still outside the control bubble.\" CR>)>)\n\t\t      (ELSE\n\t\t       <CRLF>\n\t\t       <COND (<==? ,HERE ,ON-DRIVE-BUBBLE>\n\t\t\t      <TELL\n\"You are still outside the drive bubble.\" CR>)\n\t\t\t     (<==? ,HERE ,AXIS-1>\n\t\t\t      <GOTO ,ON-DRIVE-BUBBLE>)\n\t\t\t     (<==? ,HERE ,AXIS-2> <GOTO ,AXIS-1>)\n\t\t\t     (<==? ,HERE ,AXIS-3> <GOTO ,AXIS-2>)\n\t\t\t     (<==? ,HERE ,ON-CONTROL-BUBBLE>\n\t\t\t      <GOTO ,AXIS-3>)>)>\n\t\t<RTRUE>)\n\t       (<==? .TARGET ,GROUND>\n\t\t<JIGS-UP\n\" You are now some distance from the axis of the cylinder. Air resistance and\ncentripetal force take hold and you start to fall in a lovely arc that ends\nas you splatter against the ground.\">)>>"
  },
  "OBSERVATORY-FCN": {
   "name": "OBSERVATORY-FCN",
   "file": "actions.zil",
   "line": 3734,
   "endLine": 3756,
   "source": "<ROUTINE OBSERVATORY-FCN (RARG \"AUX\" X)\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<SET X <FIRST? ,SLIDE-PROJECTOR>>\n\t\t<TELL\n\"This is the interior part of the artifact's observatory, with an\nexit to starboard. There are no telescopes or other instruments visible\">\n\t\t<COND (<OR <NOT .X> <FSET? .X ,KEYBIT>>\n\t\t       <TELL\n\", but in the center of the room is an image of space in the vicinity.\nExamining the image, you see a tiny model of the solar system. The sun is\na bright dot in the center; Jupiter and Saturn are easily discovered.\">\n\t\t       <COND (.X\n\t\t\t      <TELL\n\t\t      \" The colors of the dots are not what you would\nexpect, though,\">\n\t\t\t      <COND (<IN? ,CLEAR-KEY ,SLIDE-PROJECTOR>\n\t\t\t\t     <TELL\n\t       \" and range throughout the spectrum.\">)\n\t\t\t\t    (<FSET? .X ,KEYBIT>\n\t\t\t\t     <TELL\n\t       \" as they are filtered through a \" D .X \".\">)>)>)\n\t\t      (ELSE <TELL \", only a holographic projector.\">)>\n\t\t<CRLF>)>>"
  },
  "SLIDE-PROJECTOR-FCN": {
   "name": "SLIDE-PROJECTOR-FCN",
   "file": "actions.zil",
   "line": 3758,
   "endLine": 3814,
   "source": "<ROUTINE SLIDE-PROJECTOR-FCN (\"AUX\" X)\n\t <COND (<VERB? EXAMINE>\n\t\t<SET X <FIRST? ,SLIDE-PROJECTOR>>\n\t\t<COND (<AND .X <NOT <FSET? .X ,KEYBIT>>>\n\t\t       <TELL\n\"The projector is a type of laser, currently blocked by a \" D .X \" from\nprojecting any light.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"The projector is a type of laser, producing a continuous holographic\nview of space outside the artifact. The light issues from the front of\nthe projector, and is blindingly bright.\" CR>)>)\n\t       (<VERB? LOOK-SAFELY>\n\t\t<COND (<EQUAL? ,PRSI ,SMOKED-GLASS ,BLACK-KEY>\n\t\t       <TELL\n\"The light is very bright, but the \" D ,PRSI \" filters it enough so that\nyou are not blinded.\" CR>\n\t\t       <COND (<IN? ,CLEAR-KEY ,SLIDE-PROJECTOR>\n\t\t\t      <FCLEAR ,CLEAR-KEY ,INVISIBLE>\n\t\t\t      <TELL\n\"Inside the projector is a clear crystal rod, which has a prismatic effect\non the light being emitted.\" CR>)>)\n\t\t      (ELSE\n\t\t       <JIGS-UP\n\"The light is filtered somewhat by the rod, but not enough, and you are\nblinded. You blunder about for a while, end up in a dark place, and are set\nupon by grues.\">)>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<JIGS-UP\n\"The light being emitted is so bright that your retina is scorched and you\nare blinded. You blunder about for a while, end up in a dark place, and are\nset upon by grues.\">)\n\t       (<AND <VERB? TAKE> <IN? ,PRSO ,SLIDE-PROJECTOR>>\n\t\t<MOVE ,PRSO ,WINNER>\n\t\t<TELL \"Taken. \">\n\t\t<COND (<FSET? ,PRSO ,KEYBIT>\n\t\t       <SCORE-OBJ ,PRSO>\n\t\t       <TELL\n\"The image displayed is now clear and correctly colored.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"The displayed image becomes visible again.\" CR>)>)\n\t       (<AND <VERB? PUT> <==? ,PRSI ,SLIDE-PROJECTOR>>\n\t\t<COND (<FIRST? ,PRSI>\n\t\t       <TELL \"There is already something there.\" CR>)\n\t\t      (<==? ,PRSO ,CLEAR-KEY>\n\t\t       <MOVE ,PRSO ,PRSI>\n\t\t       <TELL\n\"The displayed image is now prismatic and multi-colored.\" CR>)\n\t\t      (<FSET? ,PRSO ,KEYBIT>\n\t\t       <MOVE ,PRSO ,PRSI>\n\t\t       <TELL\n\"The displayed image is now filtered through a \" D ,PRSO \", and becomes\nthat color.\" CR>)\n\t\t      (ELSE <WONT-FIT>)>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<TELL \"You can't do that to the \" D ,PRSO \".\" CR>)>>"
  },
  "LASER-BEAM-FCN": {
   "name": "LASER-BEAM-FCN",
   "file": "actions.zil",
   "line": 3816,
   "endLine": 3825,
   "source": "<ROUTINE LASER-BEAM-FCN ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The beam projects a view of some outside location.\" CR>)\n\t       (<AND <VERB? ZAP> <CAN-ZAP?>>\n\t\t<TELL\n\"Zapping a light beam is a waste of time.\" CR>)\n\t       (<VERB? MUNG>\n\t\t<TELL\n\"The image vanishes while the beam is broken.\" CR>)>>"
  },
  "CANT-DAMAGE": {
   "name": "CANT-DAMAGE",
   "file": "actions.zil",
   "line": 3827,
   "endLine": 3829,
   "source": "<ROUTINE CANT-DAMAGE ()\n\t <TELL\n\"It's hard to see how you expect to damage a \" D ,PRSO \".\" CR>>"
  },
  "CONTROL-SLOT-FCN": {
   "name": "CONTROL-SLOT-FCN",
   "file": "actions.zil",
   "line": 3831,
   "endLine": 3950,
   "source": "<ROUTINE CONTROL-SLOT-FCN (\"AUX\" F)\n\t <COND (<VERB? PUT>\n\t\t<COND (<OR <NOT <FSET? ,PRSO ,KEYBIT>> <FIRST? ,PRSI>>\n\t\t       <WONT-FIT>\n\t\t       <RTRUE>)\n\t\t      (<SET F <GETP ,PRSI ,P?KEY>>\n\t\t       <COND (<OR <NOT ,SWITCH-ON?>\n\t\t\t\t  <NOT <IN? ,CARD ,SLOT>>>\n\t\t\t      <TELL\n\"The \" D ,PRSI \" rejects the \" D ,PRSO \", and the slot flashes as if\nindicating a fault somewhere in the system.\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (<NOT <==? ,PRSO .F>>\n\t\t\t      <WRONG-KEY>\n\t\t\t      <RTRUE>)>)>\n\t\t<MOVE ,PRSO ,PRSI>\n\t\t<FSET ,PRSO ,NDESCBIT>\n\t\t<COND (<AND <==? ,PRSO ,CLEAR-KEY>\n\t\t\t    <==? ,PRSI ,CLEAR-SLOT>>\n\t\t       <MOVE ,BROWN-SLOT ,HERE>\n\t\t       <MOVE ,PINK-SLOT ,HERE>\n\t\t       <MOVE ,GREEN-SLOT ,HERE>\n\t\t       <MOVE ,BLUE-SLOT ,HERE>\n\t\t       <MOVE ,VIOLET-SLOT ,HERE>\n\t\t       <MOVE ,CLEAR-KEY ,CLEAR-SLOT>\n\t\t       <TELL\n\"As you insert the clear rod, five other slots appear evenly ranged around\nthe clear one. These are colored brown, green, blue, violet and pink\nrespectively.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<AND <==? ,PRSO ,BROWN-KEY>\n\t\t\t    <==? ,PRSI ,BROWN-SLOT>>\n\t\t       <SET F ,TARGET-SELECT>)\n\t\t      (<AND <==? ,PRSO ,PINK-KEY>\n\t\t\t    <==? ,PRSI ,PINK-SLOT>>\n\t\t       <SET F ,VIEW-SELECT>)\n\t\t      (<AND <==? ,PRSO ,GREEN-KEY>\n\t\t\t    <==? ,PRSI ,GREEN-SLOT>>\n\t\t       <SET F ,SPEED-SELECT>)\n\t\t      (<AND <==? ,PRSO ,BLUE-KEY>\n\t\t\t    <==? ,PRSI ,BLUE-SLOT>>\n\t\t       <SET F ,EXECUTE-BUTTON>)\n\t\t      (<AND <==? ,PRSO ,VIOLET-KEY>\n\t\t\t    <==? ,PRSI ,VIOLET-SLOT>>\n\t\t       <SET F ,COURSE-SELECT>)\n\t\t      (ELSE <RFALSE>)>\n\t\t<MOVE .F ,HERE>\n\t\t<TELL\n\"When the \" D ,PRSO \" is inserted into the \" D ,PRSI \", a ghostly image\nappears on the wall alongside it\">\n\t\t<COND (<IN? ,CLEAR-SLOT ,CONTROL-BUBBLE-ROOM>\n\t\t       <REMOVE ,CLEAR-SLOT>\n\t\t       <TELL\n\", but the clear slot and its contents fade from view.\" CR>)\n\t\t      (ELSE <TELL \".\" CR>)>\n\t\t<COND (<EQUAL? .F ,VIEW-SELECT>\n\t\t       <PERFORM ,V?EXAMINE .F>)\n\t\t      (ELSE\n\t\t       <TELL\n\"The image is a \" D .F \" which almost seems to project out of the wall.\" CR>)>\n\t\t<RTRUE>)\n\t       (<VERB? TAKE TAKE-OFF>\n\t\t<COND (<AND <==? ,PRSO ,CLEAR-KEY>\n\t\t\t    <IN? ,PRSO ,CLEAR-SLOT>>\n\t\t       <SETG VIEW-STATUS 0>\n\t\t       <SETG TARGET 0>\n\t\t       <SETG COURSE-SHAPE 0>\n\t\t       <SETG SPEED-VALUE 0>\n\t\t       <REMOVE ,VIEW-SELECT>\n\t\t       <REMOVE ,TARGET-SELECT>\n\t\t       <REMOVE ,SPEED-SELECT>\n\t\t       <REMOVE ,COURSE-SELECT>\n\t\t       <REMOVE ,EXECUTE-BUTTON>\n\t\t       <REMOVE ,BROWN-SLOT>\n\t\t       <REMOVE ,PINK-SLOT>\n\t\t       <REMOVE ,GREEN-SLOT>\n\t\t       <REMOVE ,BLUE-SLOT>\n\t\t       <REMOVE ,VIOLET-SLOT>\n\t\t       <MOVE ,CLEAR-KEY ,WINNER>\n\t\t       <TELL\n\"When you remove the clear rod, the room returns to its original\nfeatureless state.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<AND <==? ,PRSO ,BROWN-KEY>\n\t\t\t    <IN? ,PRSO ,BROWN-SLOT>>\n\t\t       <SETG TARGET 0>\n\t\t       <SET F ,TARGET-SELECT>)\n\t\t      (<AND <==? ,PRSO ,PINK-KEY>\n\t\t\t    <IN? ,PRSO ,PINK-SLOT>>\n\t\t       <SETG VIEW-STATUS 0>\n\t\t       <SETG TARGET 0>\n\t\t       <SETG COURSE-SHAPE 0>\n\t\t       <SETG SPEED-VALUE 0>\n\t\t       <SET F ,VIEW-SELECT>)\n\t\t      (<AND <==? ,PRSO ,GREEN-KEY>\n\t\t\t    <IN? ,PRSO ,GREEN-SLOT>>\n\t\t       <SETG SPEED-VALUE 0>\n\t\t       <SET F ,SPEED-SELECT>)\n\t\t      (<AND <==? ,PRSO ,BLUE-KEY>\n\t\t\t    <IN? ,PRSO ,BLUE-SLOT>>\n\t\t       <SET F ,EXECUTE-BUTTON>)\n\t\t      (<AND <==? ,PRSO ,VIOLET-KEY>\n\t\t\t    <IN? ,PRSO ,VIOLET-SLOT>>\n\t\t       <SETG COURSE-SHAPE 0>\n\t\t       <SET F ,COURSE-SELECT>)\n\t\t      (ELSE <RFALSE>)>\n\t\t<REMOVE .F>\n\t\t<MOVE ,PRSO ,WINNER>\n\t\t<FCLEAR ,PRSO ,NDESCBIT>\n\t\t<TELL \"The \" D .F \" fades from view as you take the \" D ,PRSO>\n\t\t<COND (<OR <IN? ,BROWN-KEY ,BROWN-SLOT>\n\t\t\t   <IN? ,BLUE-KEY ,BLUE-SLOT>\n\t\t\t   <IN? ,GREEN-KEY ,GREEN-SLOT>\n\t\t\t   <IN? ,PINK-KEY ,PINK-SLOT>\n\t\t\t   <IN? ,VIOLET-KEY ,VIOLET-SLOT>>\n\t\t       <TELL \".\" CR>)\n\t\t      (ELSE\n\t\t       <MOVE ,CLEAR-SLOT ,CONTROL-BUBBLE-ROOM>\n\t\t       <TELL\n\", and a moment later the clear slot and its contents reappear.\" CR>)>)>>"
  },
  "SLOTS-AND-SPOTS": {
   "name": "SLOTS-AND-SPOTS",
   "file": "actions.zil",
   "line": 3955,
   "endLine": 4002,
   "source": "<ROUTINE SLOTS-AND-SPOTS (\"AUX\" (CNT 0) (OFF 0) SCNT TBL)\n\t <COND (<NOT <IN? ,CLEAR-KEY ,CLEAR-SLOT>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<COND (<IN? ,CLEAR-SLOT ,HERE>\n\t\t       <TELL\n\"A clear rod is in the clear slot. Of the surrounding slots, \">)\n\t\t      (ELSE\n\t\t       <TELL \"Of the colored slots, \">)>\n\t\t<COND (<IN? ,PINK-KEY ,PINK-SLOT>\n\t\t       <TELL \"the pink one contains a pink rod and \">)>\n\t\t<COND (<IN? ,BROWN-KEY ,BROWN-SLOT>\n\t\t       <SET CNT <+ .CNT 1>>)>\n\t\t<COND (<IN? ,GREEN-KEY ,GREEN-SLOT>\n\t\t       <SET CNT <+ .CNT 1>>)>\n\t\t<COND (<IN? ,BLUE-KEY ,BLUE-SLOT>\n\t\t       <SET CNT <+ .CNT 1>>)>\n\t\t<COND (<IN? ,VIOLET-KEY ,VIOLET-SLOT>\n\t\t       <SET CNT <+ .CNT 1>>)>\n\t\t<COND (<0? .CNT>\n\t\t       <COND (<IN? ,PINK-KEY ,PINK-SLOT>\n\t\t\t      <TELL \"the others\">)\n\t\t\t     (T\n\t\t\t      <TELL \"all\">)>\n\t\t       <TELL \" are empty.\" CR>\n\t\t       <RTRUE>)>\n\t\t<TELL \"the \">\n\t\t<SET TBL ,SLOT-TABLE>\n\t\t<SET SCNT .CNT>\n\t\t<REPEAT ()\n\t\t\t<COND (<0? <GET .TBL .OFF>>\n\t\t\t       <RETURN>)\n\t\t\t      (<IN? <GET .TBL .OFF> <GET .TBL <+ .OFF 1>>>\n\t\t\t       <TELL <GET .TBL <+ .OFF 2>>>\n\t\t\t       <COND (<G? .CNT 2> <TELL \", \">)\n\t\t\t\t     (<==? .CNT 2> <TELL \" and \">)>\n\t\t\t       <COND (<L? <SET CNT <- .CNT 1>> 1>\n\t\t\t\t      <RETURN>)>)>\n\t\t\t<SET OFF <+ .OFF 3>>>\n\t\t<TELL \" rod\">\n\t\t<COND (<==? .SCNT 1>\n\t\t       <TELL \" is\">)\n\t\t      (T <TELL \"s are\">)>\n\t\t<TELL \" in place in the like-colored slot\">\n\t\t<COND (<==? .SCNT 1>\n\t\t       <TELL \". Alongside it is a spot\">)\n\t\t      (T <TELL \"s. Alongside each of those are spots\">)>\n\t\t<TELL \" of the same color.\" CR>)>>"
  },
  "VIEW-SELECT-FCN": {
   "name": "VIEW-SELECT-FCN",
   "file": "actions.zil",
   "line": 4030,
   "endLine": 4067,
   "source": "<ROUTINE VIEW-SELECT-FCN (\"OPTIONAL\" (RARG <>))\n\t <COND (<OR <==? .RARG ,M-OBJDESC> <VERB? EXAMINE>>\n\t\t<TELL\n\"The pink screen includes a small square, a large square, and a display\nshowing nearby space. This view shows \"\n<GET ,VIEW-SCREEN-VIEWS ,VIEW-STATUS> \".\">\n\t\t<COND (<AND <==? ,VIEW-STATUS 1>\n\t\t\t    <NOT <0? ,TARGET>>>\n\t\t       <TELL \" The symbol representing \"\n\t\t\t     <GET ,TARGETS ,TARGET>\n\t\t\t     \" is lit.\">\n\t\t       <COND (<NOT <0? ,COURSE-SHAPE>>\n\t\t\t      <TELL\n\" A line on the display connects the position of the artifact with\nthat of \" <GET ,TARGETS ,TARGET> \", and terminating \" <GET ,COURSES ,COURSE-SHAPE> <GET ,TARGETS ,TARGET> \".\">\n\t\t\t      <COND (<NOT <0? ,SPEED-VALUE>>\n\t\t\t\t     <TELL \" The line is made of dots,\nblinking \" <GET ,SPEEDS ,SPEED-VALUE> \", starting with the dot at the\nartifact and ending at the one next to \" <GET ,TARGETS ,TARGET> \".\">)>)>)>\n\t\t<CRLF>)\n\t       (<VERB? RUB PUSH>\n\t\t<COND (<==? ,PRSO ,ZOOM-IN>\n\t\t       <COND (<G? ,VIEW-STATUS 0>\n\t\t\t      <SETG VIEW-STATUS <- ,VIEW-STATUS 1>>\n\t\t\t      <TELL \"The view screen now shows \"\n\t\t\t\t    <GET ,VIEW-SCREEN-VIEWS ,VIEW-STATUS>\n\t\t\t\t    \".\"\n\t\t\t\t    CR>)\n\t\t\t     (ELSE <TELL \"The view is unchanged.\" CR>)>)\n\t\t      (<==? ,PRSO ,ZOOM-OUT>\n\t\t       <COND (<L? ,VIEW-STATUS 4>\n\t\t\t      <SETG VIEW-STATUS <+ ,VIEW-STATUS 1>>\n\t\t\t      <TELL \"The view screen now shows \"\n\t\t\t\t    <GET ,VIEW-SCREEN-VIEWS ,VIEW-STATUS>\n\t\t\t\t    \".\" CR>)\n\t\t\t     (ELSE <TELL \"The view is unchanged.\" CR>)>)\n\t\t      (ELSE <TELL\n\"The display flashes briefly.\" CR>)>)>>"
  },
  "TARGET-SELECT-FCN": {
   "name": "TARGET-SELECT-FCN",
   "file": "actions.zil",
   "line": 4069,
   "endLine": 4081,
   "source": "<ROUTINE TARGET-SELECT-FCN ()\n\t <COND (<VERB? RUB PUSH>\n\t\t<COND (<AND <IN? ,VIEW-SELECT ,HERE>\n\t\t\t    <==? ,VIEW-STATUS 1>>\n\t\t       <SETG TARGET <MOD <+ ,TARGET 1> 7>>\n\t\t       <COND (<0? ,TARGET>\n\t\t\t      <TELL\n\"Now nothing is highlighted on the view screen.\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"The view screen now shows \" <GET ,TARGETS ,TARGET> \" brightly\nhighlighted.\" CR>)>)\n\t\t      (ELSE <SPOT-FLASH>)>)>>"
  },
  "SPEED-SELECT-FCN": {
   "name": "SPEED-SELECT-FCN",
   "file": "actions.zil",
   "line": 4083,
   "endLine": 4101,
   "source": "<ROUTINE SPEED-SELECT-FCN ()\n\t <COND (<VERB? RUB PUSH>\n\t\t<COND (<IN? ,VIEW-SELECT ,HERE>\n\t\t       <COND (<AND <NOT <0? ,COURSE-SHAPE>>\n\t\t\t\t   <NOT <0? ,TARGET>>>\n\t\t\t      <COND (<NOT <IN? ,WHITE-KEY ,WHITE-SLOT>>\n\t\t\t\t     <TELL\n\"The line on the display flashes brightly, insistently, for about five\nseconds, and then returns to its former state.\" CR>\n\t\t\t\t     <RTRUE>)>\n\t\t\t      <SETG SPEED-VALUE <MOD <+ ,SPEED-VALUE 1> 3>>\n\t\t\t      <COND (<NOT <0? ,SPEED-VALUE>>\n\t\t\t\t     <TELL\n\"The line on the display now consists of dots which flash \" <GET ,SPEEDS ,SPEED-VALUE> \", one at a time, starting with a dot at the artifact and concluding at \" <GET ,TARGETS ,TARGET> \".\" CR>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <TELL\n\"The line on the display is now a solid line.\" CR>)>)\n\t\t\t     (ELSE <SPOT-FLASH>)>)\n\t\t      (ELSE <SPOT-FLASH>)>)>>"
  },
  "COURSE-SELECT-FCN": {
   "name": "COURSE-SELECT-FCN",
   "file": "actions.zil",
   "line": 4103,
   "endLine": 4117,
   "source": "<ROUTINE COURSE-SELECT-FCN ()\n\t <COND (<VERB? RUB PUSH>\n\t\t<COND (<IN? ,VIEW-SELECT ,HERE>\n\t\t       <SETG COURSE-SHAPE <MOD <+ ,COURSE-SHAPE 1> 5>>\n\t\t       <COND (<NOT <0? ,TARGET>>\n\t\t\t      <COND (<NOT <0? ,COURSE-SHAPE>>\n\t\t\t\t     <TELL\n\"The highlighted image of \" <GET ,TARGETS ,TARGET> \" now is connected to\nthat of the artifact. The line terminates \" <GET ,COURSES ,COURSE-SHAPE>\n<GET ,TARGETS ,TARGET> \".\" CR>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <TELL\n\"A line no longer connects the artifact and \" <GET ,TARGETS ,TARGET> \".\" CR>)>)\n\t\t\t     (ELSE <SPOT-FLASH>)>)\n\t\t      (ELSE <SPOT-FLASH>)>)>>"
  },
  "EXECUTE-BUTTON-FCN": {
   "name": "EXECUTE-BUTTON-FCN",
   "file": "actions.zil",
   "line": 4119,
   "endLine": 4135,
   "source": "<ROUTINE EXECUTE-BUTTON-FCN (\"OPTIONAL\" (RARG <>))\n\t <COND (<VERB? PUSH RUB>\n\t\t<COND (<IN? ,VIEW-SELECT ,HERE>\n\t\t       <COND (<AND <NOT <0? ,COURSE-SHAPE>>\n\t\t\t\t   <NOT <0? ,TARGET>>\n\t\t\t\t   <NOT <0? ,SPEED-VALUE>>\n\t\t\t\t   <==? ,VIEW-STATUS 1>>\n\t\t\t      <COND (<G? ,CONTROL-SCORE 0>\n\t\t\t\t     <SCORE-UPD ,CONTROL-SCORE>\n\t\t\t\t     <SETG CONTROL-SCORE 0>\n\t\t\t\t     <TELL\n\"All the displays flash once. There is a sensation of movement\nas the artifact positions itself to follow the course you have set.\" CR>\n\t\t\t\t     <WIN-GAME>)\n\t\t\t\t    (ELSE <SPOT-FLASH>)>)\n\t\t\t     (ELSE <SPOT-FLASH>)>)\n\t\t      (ELSE <SPOT-FLASH>)>)>>"
  },
  "SPOT-FLASH": {
   "name": "SPOT-FLASH",
   "file": "actions.zil",
   "line": 4137,
   "endLine": 4137,
   "source": "<ROUTINE SPOT-FLASH () <TELL \"The spot flashes briefly.\" CR>>"
  },
  "WIN-GAME": {
   "name": "WIN-GAME",
   "file": "actions.zil",
   "line": 4141,
   "endLine": 4174,
   "source": "<ROUTINE WIN-GAME ()\n\t <CRLF>\n\t <COND (<==? ,TARGET 4>\n\t\t<COND (<EQUAL? ,COURSE-SHAPE 3 4>\n\t\t       <SCORE-UPD 25>\n\t\t       <SETG WON-FLAG T>\n\t\t       <TELL\n\"The artifact, under your assured control, moves serenely toward Earth, where\nthe knowledge it contains will immeasureably benefit mankind. Within a few\nyears, there could be human ships flying out to the stars, and all because of\nyour daring and cunning...|\n|\nA holographic projection of a humanoid figure appears before you. The being,\ntall and thin, swathed in shimmering robes, speaks in your own language.\n\\\"Congratulations, you who have passed our test. You have succeeded where\nothers failed. Your race shall benefit thereby.\\\" He smiles. \\\"I expect to\nsee you in person, someday.\\\" The projection fades.|\n\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"The artifact approaches Earth, where the plaudits of humanity await you.\nUnfortunately, the course you have chosen \"\n\t\t\t\t <COND (<==? ,COURSE-SHAPE 1> \"rams you\ninto the planet and you earn the hatred of mankind, not its praises.\")\n      \t\t\t\t       (ELSE \"loops you\naround the Earth and back into interstellar space, never to return.\")>>\n\t\t       <CRLF>)>)\n\t       (ELSE\n\t\t<TELL\n\"The artifact moves confidently towards \" <GET ,TARGETS ,TARGET> \",\nbut its computer system is smart enough to know where you came from, so\nit realizes that you have made the wrong choice. All systems shut down,\nand silence settles over all.\" CR>)>\n\t <FINISH>>"
  },
  "ON-ARTIFACT?": {
   "name": "ON-ARTIFACT?",
   "file": "actions.zil",
   "line": 4176,
   "endLine": 4183,
   "source": "<ROUTINE ON-ARTIFACT? ()\n\t <COND (<OR <EQUAL? ,HERE ,SPACESHIP-BRIDGE ,SPACESHIP-STORES\n\t\t\t    ,SPACESHIP-QUARTERS>\n\t\t    <EQUAL? ,HERE ,SPACESHIP-AIRLOCK ,DEEP-SPACE ,RED-DOCK>\n\t\t    <EQUAL? ,HERE ,BLUE-DOCK ,YELLOW-DOCK ,GREEN-DOCK>\n\t\t    <EQUAL? ,HERE ,OUTER-SPACE>>\n\t\t<RFALSE>)\n\t       (ELSE <RTRUE>)>>"
  },
  "CARD-F": {
   "name": "CARD-F",
   "file": "actions.zil",
   "line": 4185,
   "endLine": 4193,
   "source": "<ROUTINE CARD-F ()\n\t <COND (<IN? ,CARD ,SLOT>\n\t\t<COND (<AND <VERB? ZAP> <CAN-ZAP?>>\n\t\t       <SETG SWITCH-ON? <>>\n\t\t       <SETG MELTED? T>\n\t\t       <RFALSE>)\n\t\t      (<AND <VERB? TAKE> ,SWITCH-ON?>\n\t\t       <TELL\n\t\t\t\"You get a giant shock as you try to take it.\" CR>)>)>>"
  },
  "ROD-RACK-FCN": {
   "name": "ROD-RACK-FCN",
   "file": "actions.zil",
   "line": 4195,
   "endLine": 4213,
   "source": "<ROUTINE ROD-RACK-FCN ()\n\t <COND (<AND <VERB? TAKE> <IN? ,PRSO ,ROD-RACK>>\n\t\t<TELL\n\"When you take the \" D ,PRSO \", the hole it was in closes up as though it\nhad never existed.\" CR>\n\t\t<MOVE ,PRSO ,WINNER>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUT> <==? ,PRSI ,ROD-RACK>>\n\t\t<COND (<IN? ,PRSO ,ROD-RACK>\n\t\t       <TELL \"It's already there.\" CR>)\n\t\t      (<NOT <TRYTAKE>> <RTRUE>)\n\t\t      (<FSET? ,PRSO ,KEYBIT>\n\t\t       <MOVE ,PRSO ,ROD-RACK>\n\t\t       <SCORE-OBJ ,PRSO>\n\t\t       <TELL\n\"The \" D ,PRSO \" is inserted, and immediately another hole opens\nbeside it.\" CR>)\n\t\t      (ELSE\n\t\t       <WONT-FIT>)>)>>"
  },
  "HATCH-DOOR-F": {
   "name": "HATCH-DOOR-F",
   "file": "actions.zil",
   "line": 4215,
   "endLine": 4217,
   "source": "<ROUTINE HATCH-DOOR-F ()\n\t <COND (<VERB? OPEN CLOSE>\n\t\t<TELL \"You can't manually open or close the hatch.\" CR>)>>"
  },
  "SPEAR-F": {
   "name": "SPEAR-F",
   "file": "actions.zil",
   "line": 4219,
   "endLine": 4227,
   "source": "<ROUTINE SPEAR-F (\"AUX\" OBJ)\n\t <COND (<==? ,HERE ,NEST-CAGE> <SET OBJ ,RAT-ANT>)\n\t       (T <SET OBJ ,ALIENS>)>\n\t <COND (<VERB? TAKE>\n\t\t<TELL\n\"Every \" D .OBJ \" regards you with suspicion and won't give you a weapon.\" CR>)\n\t       (<VERB? ZAP>\n\t\t<PERFORM ,V?ZAP .OBJ>\n\t\t<RTRUE>)>>"
  },
  "HUTS-F": {
   "name": "HUTS-F",
   "file": "actions.zil",
   "line": 4229,
   "endLine": 4233,
   "source": "<ROUTINE HUTS-F ()\n\t <COND (<VERB? ZAP>\n\t\t<TELL \"A few huts are destroyed; many remain.\" CR>\n\t\t<SETG ALIENS-FRIENDLY? <>>)\n\t       (T <EX-CHECK>)>>"
  },
  "AS-ADVERTISED": {
   "name": "AS-ADVERTISED",
   "file": "actions.zil",
   "line": 4235,
   "endLine": 4236,
   "source": "<ROUTINE AS-ADVERTISED ()\n\t <TELL \"The \" D ,PRSO \" is as described.\" CR>>"
  },
  "WALL-F": {
   "name": "WALL-F",
   "file": "actions.zil",
   "line": 4238,
   "endLine": 4241,
   "source": "<ROUTINE WALL-F ()\n\t <COND (<AND <EQUAL? ,HERE ,FORE-END ,FORE-END-2>\n\t\t     <VERB? CLIMB-FOO CLIMB-UP CLIMB-ON>>\n\t\t<TELL \"The wall is unscalable!\" CR>)>>"
  },
  "DISTANT-BUBBLE-F": {
   "name": "DISTANT-BUBBLE-F",
   "file": "actions.zil",
   "line": 4243,
   "endLine": 4247,
   "source": "<ROUTINE DISTANT-BUBBLE-F ()\n\t <COND (<VERB? LOOK-INSIDE>\n\t\t<TELL \"No details are visible.\" CR>)\n\t       (ELSE\n\t\t<EX-CHECK>)>>"
  },
  "EX-CHECK": {
   "name": "EX-CHECK",
   "file": "actions.zil",
   "line": 4249,
   "endLine": 4250,
   "source": "<ROUTINE EX-CHECK ()\n\t <COND (<VERB? EXAMINE> <AS-ADVERTISED>)>>"
  },
  "VEGGIES-F": {
   "name": "VEGGIES-F",
   "file": "actions.zil",
   "line": 4252,
   "endLine": 4254,
   "source": "<ROUTINE VEGGIES-F ()\n\t <COND (<VERB? EAT> <TELL \"Yechh!\" CR>)\n\t       (T <EX-CHECK>)>>"
  },
  "DRIVE-CONTROLS-F": {
   "name": "DRIVE-CONTROLS-F",
   "file": "actions.zil",
   "line": 4256,
   "endLine": 4260,
   "source": "<ROUTINE DRIVE-CONTROLS-F ()\n\t <COND (<EX-CHECK> <RTRUE>)\n\t       (<VERB? ZAP> <RFALSE>)\n\t       (T <TELL\n\"You can't do anything with them.\" CR>)>>"
  },
  "CAGES-F": {
   "name": "CAGES-F",
   "file": "actions.zil",
   "line": 4262,
   "endLine": 4263,
   "source": "<ROUTINE CAGES-F ()\n\t <EX-CHECK>>"
  },
  "TOTEMS-F": {
   "name": "TOTEMS-F",
   "file": "actions.zil",
   "line": 4265,
   "endLine": 4268,
   "source": "<ROUTINE TOTEMS-F ()\n\t <COND (<EX-CHECK> <RTRUE>)\n\t       (<VERB? EAT> <VEGGIES-F>)\n\t       (T <TELL \"It would be impolite to fool with these.\" CR>)>>"
  },
  "KNOBS-F": {
   "name": "KNOBS-F",
   "file": "actions.zil",
   "line": 4270,
   "endLine": 4278,
   "source": "<ROUTINE KNOBS-F ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL \"It is firmly attached.\" CR>)\n\t       (<VERB? REACH CLIMB-UP CLIMB-DOWN CLIMB-FOO CLIMB-ON>\n\t\t<COND (<EQUAL? ,HERE ,DRIVE-BUBBLE-ENTRANCE\n\t\t\t       ,CONTROL-BUBBLE-ENTRANCE>\n\t\t       <DO-WALK ,P?UP>)\n\t\t      (T <DO-WALK ,P?DOWN>)>\n\t\t<RTRUE>)>>"
  },
  "DEMON": {
   "name": "DEMON",
   "file": "clock.zil",
   "line": 22,
   "endLine": 25,
   "source": "<ROUTINE DEMON (RTN TICK \"AUX\" CINT)\n\t #DECL ((RTN) ATOM (TICK) FIX (CINT) <PRIMTYPE VECTOR>)\n\t <PUT <SET CINT <INT .RTN T>> ,C-TICK .TICK>\n\t .CINT>"
  },
  "QUEUE": {
   "name": "QUEUE",
   "file": "clock.zil",
   "line": 27,
   "endLine": 30,
   "source": "<ROUTINE QUEUE (RTN TICK \"AUX\" CINT)\n\t #DECL ((RTN) ATOM (TICK) FIX (CINT) <PRIMTYPE VECTOR>)\n\t <PUT <SET CINT <INT .RTN>> ,C-TICK .TICK>\n\t .CINT>"
  },
  "INT": {
   "name": "INT",
   "file": "clock.zil",
   "line": 32,
   "endLine": 45,
   "source": "<ROUTINE INT (RTN \"OPTIONAL\" (DEMON <>) E C INT)\n\t #DECL ((RTN) ATOM (DEMON) <OR ATOM FALSE> (E C INT) <PRIMTYPE\n\t\t\t\t\t\t\t      VECTOR>)\n\t <SET E <REST ,C-TABLE ,C-TABLELEN>>\n\t <SET C <REST ,C-TABLE ,C-INTS>>\n\t <REPEAT ()\n\t\t <COND (<==? .C .E>\n\t\t\t<SETG C-INTS <- ,C-INTS ,C-INTLEN>>\n\t\t\t<AND .DEMON <SETG C-DEMONS <- ,C-DEMONS ,C-INTLEN>>>\n\t\t\t<SET INT <REST ,C-TABLE ,C-INTS>>\n\t\t\t<PUT .INT ,C-RTN .RTN>\n\t\t\t<RETURN .INT>)\n\t\t       (<==? <GET .C ,C-RTN> .RTN> <RETURN .C>)>\n\t\t <SET C <REST .C ,C-INTLEN>>>>"
  },
  "CLOCKER": {
   "name": "CLOCKER",
   "file": "clock.zil",
   "line": 49,
   "endLine": 64,
   "source": "<ROUTINE CLOCKER (\"AUX\" C E TICK (FLG <>))\n\t #DECL ((C E) <PRIMTYPE VECTOR> (TICK) FIX (FLG) <OR FALSE ATOM>)\n\t <COND (,CLOCK-WAIT <SETG CLOCK-WAIT <>> <RFALSE>)>\n\t <SET C <REST ,C-TABLE <COND (,P-WON ,C-INTS) (T ,C-DEMONS)>>>\n\t <SET E <REST ,C-TABLE ,C-TABLELEN>>\n\t <REPEAT ()\n\t\t <COND (<==? .C .E> <RETURN .FLG>)\n\t\t       (<NOT <0? <GET .C ,C-ENABLED?>>>\n\t\t\t<SET TICK <GET .C ,C-TICK>>\n\t\t\t<COND (<0? .TICK>)\n\t\t\t      (T\n\t\t\t       <PUT .C ,C-TICK <- .TICK 1>>\n\t\t\t       <COND (<AND <NOT <G? .TICK 1>>\n\t\t\t\t\t   <APPLY <GET .C ,C-RTN>>>\n\t\t\t\t      <SET FLG T>)>)>)>\n\t\t <SET C <REST .C ,C-INTLEN>>>>"
  },
  "SWITCH-FCN": {
   "name": "SWITCH-FCN",
   "file": "emerg.zil",
   "line": 8,
   "endLine": 40,
   "source": "<ROUTINE SWITCH-FCN ()\n\t <COND (<VERB? LAMP-ON TURN THROW>\n\t\t<COND (,MELTED?\n\t\t       <TELL\n\"There is a sickening wheeze, but nothing else happens.\" CR>)\n\t\t      (,SWITCH-ON?\n\t\t       <TELL \"It's already on.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"The lights in the room come on and there is a deafening FOOOOM! noise as the\ncomputer starts up.\" CR>\n\t\t       <SETG SWITCH-ON? T>\n\t\t       <COND (<AND <IN? ,CARD ,SLOT> <NOT ,FRIED?>>\n\t\t\t      <COND (,GOT-KEY?\n\t\t\t\t     <TELL\n\"The main display blinks and displays the word \\\"Ready\\\".\" CR>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <SETG GOT-KEY? T>\n\t\t\t\t     <MOVE ,GOLD-KEY ,HERE>\n\t\t\t\t     <FCLEAR ,ENUNCIATOR ,INVISIBLE>\n\t\t\t\t     <TELL\n\"The main display blinks twice, a bell rings, and a gold rod falls from the\noutput hopper onto the floor! A moment later, a previously unseen enunciator\npanel comes on.\" CR>\n\t\t\t\t     <PERFORM ,V?EXAMINE ,ENUNCIATOR>\n\t\t\t\t     <RTRUE>)>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"Lights blink on the main display and the word \\\"Fault\\\" appears.\" CR>)>)>)\n\t       (<VERB? LAMP-OFF>\n\t\t<SETG SWITCH-ON? <>>\n\t\t<FSET ,ENUNCIATOR ,INVISIBLE>\n\t\t<TELL \"The computer is off.\" CR>)>>"
  },
  "COMPUTER-ROOM-FCN": {
   "name": "COMPUTER-ROOM-FCN",
   "file": "emerg.zil",
   "line": 42,
   "endLine": 58,
   "source": "<ROUTINE COMPUTER-ROOM-FCN (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is the main computer room. The builders of this ship were obviously\nstill wedded to large mainframes: this one fills the room and is thirty\nmeters high. There is an overlarge switch at about eye-level and an access\npanel below it, which is \">\n\t\t<COND (<FSET? ,PANEL ,OPENBIT>\n\t\t       <TELL \"open\">)\n\t\t      (ELSE <TELL \"closed\">)>\n\t\t<TELL \". The power seems to be \">\n\t\t<COND (,SWITCH-ON? <TELL \"on.\" CR>)\n\t\t      (ELSE <TELL \"off.\" CR>)>\n\t\t\n\t\t<COND (,FRIED? <TELL\n\"There is a strong smell of burning components.\" CR>)>\n\t\t<RTRUE>)>>"
  },
  "ENUNCIATOR-F": {
   "name": "ENUNCIATOR-F",
   "file": "emerg.zil",
   "line": 69,
   "endLine": 83,
   "source": "<ROUTINE ENUNCIATOR-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<COND (,SWITCH-ON?\n\t\t       <TELL\n\"The panel has three banks of four colored lights: red, yellow, green, and\nblue. The first is labelled with a symbol of the emission of rays: of the\nlights underneath, the red one is flashing and the yellow one is brightly\nlit. The second bank is labelled with a stylized docking port and the third\nwith an airlock. Of these two banks, the first yellow one is brightly lit and\nthe other yellow one is flashing. The panel also contains six other lights,\neach bearing a stylized picture. The first four, all dark, represent\nnavigation, engine, library, and defenses. A fifth, picturing a cage, is\nbrightly lit. The sixth is \"\n<GET ,AIR-FLASH ,AIR-COUNT> \". It\" ,REPAIR-PANEL CR>)\n\t\t      (ELSE <TELL \"The panel is dark.\" CR>)>)>>"
  },
  "REPAIR-ROOM-FCN": {
   "name": "REPAIR-ROOM-FCN",
   "file": "emerg.zil",
   "line": 106,
   "endLine": 115,
   "source": "<ROUTINE REPAIR-ROOM-FCN (RARG)\n\t <COND (<==? .RARG ,M-LOOK>\n\t\t<TELL\n\"This room is taken up by two large pieces of machinery. The leftmost has a\nsymbol depicting the emission of rays beside a yellow slot. The other\nmachine\" ,REPAIR-PANEL \" Beside it are three diagrams; under each one is a\nred slot. The first diagram shows four single dots equally spaced around a\nsix-dot cluster. The second shows two eight-dot clusters in close proximity.\nThe third has three single dots equally spaced around a seven-dot cluster.\nThe only exit is up some stairs.\" CR>)>>"
  },
  "YELLOW-SLOT-F": {
   "name": "YELLOW-SLOT-F",
   "file": "emerg.zil",
   "line": 127,
   "endLine": 134,
   "source": "<ROUTINE YELLOW-SLOT-F ()\n\t <COND (<AND <VERB? PUT> <==? ,PRSI ,YELLOW-SLOT>>\n\t\t<COND (<==? ,PRSO ,YELLOW-KEY>\n\t\t       <SETG ALWAYS-LIT T>\n\t\t       <RIGHT-KEY>\n\t\t       <CRLF>)\n\t\t      (<FSET? ,PRSO ,KEYBIT> <WRONG-KEY>)\n\t\t      (ELSE <WONT-FIT>)>)>>"
  },
  "WONT-FIT": {
   "name": "WONT-FIT",
   "file": "emerg.zil",
   "line": 136,
   "endLine": 137,
   "source": "<ROUTINE WONT-FIT ()\n\t <TELL \"The \" D ,PRSO \" doesn't fit in the \" D ,PRSI \".\" CR>>"
  },
  "RED-SLOT-F": {
   "name": "RED-SLOT-F",
   "file": "emerg.zil",
   "line": 149,
   "endLine": 169,
   "source": "<ROUTINE RED-SLOT-F (\"AUX\" NUM)\n\t <COND (<AND <VERB? PUT> <==? ,PRSI ,RED-SLOT>>\n\t\t<SET NUM <ORDINAL ,P-ADJECTIVE>>\n\t\t<COND (<OR <G? .NUM 3> <EQUAL? .NUM 0>>\n\t\t       <TELL \"You must specify which red slot.\" CR>)\n\t\t      (<NOT <==? ,PRSO ,RED-KEY>>\n\t\t       <WRONG-KEY>)\n\t\t      (T\n\t\t       <REMOVE ,RED-KEY>\n\t\t       <RIGHT-KEY>\n\t\t       <TELL\n\" You hear a subdued hum of machinery coming to life.\" CR>\n\t\t       <COND (<==? .NUM 2>\n\t\t\t      <ENABLE <QUEUE I-FRESH-AIR 30>>\n\t\t\t      <DISABLE <INT I-BAD-AIR>>)\n\t\t\t     (T\n\t\t\t      <ENABLE <QUEUE I-POISON-AIR 20>>\n\t\t\t      <DISABLE <INT I-BAD-AIR>>\n\t\t\t      <COND (<==? .NUM 3>\n\t\t\t\t     <SETG AMMONIA? T>)>\n\t\t\t      <RTRUE>)>)>)>>"
  },
  "RIGHT-KEY": {
   "name": "RIGHT-KEY",
   "file": "emerg.zil",
   "line": 171,
   "endLine": 174,
   "source": "<ROUTINE RIGHT-KEY ()\n\t <REMOVE ,PRSO>\n\t <TELL\n\"The \" D ,PRSO \" disappears into the slot.\">>"
  },
  "WRONG-KEY": {
   "name": "WRONG-KEY",
   "file": "emerg.zil",
   "line": 176,
   "endLine": 179,
   "source": "<ROUTINE WRONG-KEY ()\n\t <REMOVE ,PRSO>\n\t <TELL\n\"The \" D ,PRSO \" slides into the slot and disappears.\" CR>>"
  },
  "I-FRESH-AIR": {
   "name": "I-FRESH-AIR",
   "file": "emerg.zil",
   "line": 181,
   "endLine": 192,
   "source": "<ROUTINE I-FRESH-AIR ()\n\t <SETG POISON-COUNT 0>\n\t <COND (<0? ,AIR-COUNT> <RTRUE>)\n\t       (<L? <SETG AIR-COUNT <- ,AIR-COUNT 1>> 1>\n\t\t<COND (<AND <NOT ,SUIT-ON?> ,IN-ARTIFACT?>\n\t\t       <TELL\n\"The air seems fine now.\" CR>)>\n\t\t<RTRUE>)>\n\t <COND (<AND <NOT ,SUIT-ON?> ,IN-ARTIFACT?>\n\t\t<DESCRIBE-AIR \n\"The air seems a bit better, but is still \">)>\n\t <QUEUE I-FRESH-AIR 20>>"
  },
  "I-POISON-AIR": {
   "name": "I-POISON-AIR",
   "file": "emerg.zil",
   "line": 196,
   "endLine": 207,
   "source": "<ROUTINE I-POISON-AIR ()\n\t <COND (<G? <SETG POISON-COUNT <+ ,POISON-COUNT 1>> 3>\n\t\t<COND (<NOT ,IN-ARTIFACT?>\n\t\t       <ENABLE <QUEUE I-POISON-AIR 1>>)\n\t\t      (,SUIT-ON?\n\t\t       <JIGS-UP ,STUPID-AIRGONE-MESSAGE>)\n\t\t      (T <JIGS-UP\n\"You are overcome by noxious gases and slump to the floor, dead.\">)>)\n\t       (T\n\t\t<COND (<AND <NOT ,SUIT-ON?> ,IN-ARTIFACT?>\n\t\t       <DESCRIBE-AIR \"The air here has become \">)>\n\t\t<QUEUE I-POISON-AIR 30>)>>"
  },
  "I-BAD-AIR": {
   "name": "I-BAD-AIR",
   "file": "emerg.zil",
   "line": 214,
   "endLine": 227,
   "source": "<ROUTINE I-BAD-AIR ()\n\t <COND (<G? <SETG AIR-COUNT <+ ,AIR-COUNT 1>> 3>\n\t\t<SETG POISON-COUNT 4>\n\t\t<COND (<NOT ,IN-ARTIFACT?>\n\t\t       <ENABLE <QUEUE I-BAD-AIR 1>>)\n\t\t      (<NOT ,SUIT-ON?>\n\t\t       <JIGS-UP\n\"You gasp for air, but there is none left, and slump to the floor, dead.\">)\n\t\t      (T\n\t\t       <JIGS-UP ,STUPID-AIRGONE-MESSAGE>)>)\n\t       (T\n\t\t<COND (<AND <NOT ,SUIT-ON?> ,IN-ARTIFACT?>\n\t\t       <DESCRIBE-AIR \"You notice that the air has become \">)>\n\t\t<QUEUE I-BAD-AIR 40>)>>"
  },
  "DESCRIBE-AIR": {
   "name": "DESCRIBE-AIR",
   "file": "emerg.zil",
   "line": 231,
   "endLine": 247,
   "source": "<ROUTINE DESCRIBE-AIR (STR)\n\t <COND (<==? ,POISON-COUNT 4>\n\t\t<COND (<==? ,AIR-COUNT 4>\n\t\t       <JIGS-UP\n\"You gasp for air, but there is none left, and slump to the floor, dead.\">)\n\t\t      (T\n\t\t       <JIGS-UP\n\"You are overcome by noxious gases and slump to the floor, dead.\">)>)\n\t       (<G? ,POISON-COUNT 0>\n\t\t<TELL .STR\n\t\t      <GET ,POISON-AIRS ,POISON-COUNT>\n\t\t      <GET <COND (,AMMONIA? ,AMMONIA-TABLE)\n\t\t\t         (T ,METHANE-TABLE)>\n\t\t\t   ,POISON-COUNT>\n\t\t      CR>)\n\t       (T\n\t\t<TELL .STR <GET ,LIGHT-AIRS ,AIR-COUNT> CR>)>>"
  },
  "ZPROB": {
   "name": "ZPROB",
   "file": "macros.zil",
   "line": 96,
   "endLine": 99,
   "source": "<ROUTINE ZPROB\n\t (BASE)\n\t <COND (,LUCKY <G? .BASE <RANDOM 100>>)\n\t       (ELSE <G? .BASE <RANDOM 300>>)>>"
  },
  "PICK-ONE": {
   "name": "PICK-ONE",
   "file": "macros.zil",
   "line": 101,
   "endLine": 102,
   "source": "<ROUTINE PICK-ONE (FROB)\n\t <GET .FROB <RANDOM <GET .FROB 0>>>>"
  },
  "GO": {
   "name": "GO",
   "file": "main.zil",
   "line": 27,
   "endLine": 69,
   "source": "<ROUTINE GO () \n\t <PUTB ,P-LEXV 0 59>\n;\"put interrupts on clock chain\"\n\t ;<QUEUE I-LAMP 200>\n\t <ENABLE <QUEUE I-NIGHT 128>>\n\t <ENABLE <QUEUE I-ALARM 1>>\n;\"set up and go\"\n\t <SETG LIT T>\n\t <SETG WINNER ,ADVENTURER>\n\t <SETG HERE ,SPACESHIP-QUARTERS>\n\t <MOVE ,ADVENTURER ,BUNK>\n\t <SETG FF-HERE ,FORCE-FIELD-2>\n\t <PUT ,MASSES 1 ,UM08>\n\t <PUT ,MASSES 2 ,UM12>\n\t <PUT ,MASSES 3 ,UM24>\n\t <PUT ,MASSES 4 ,UM28>\n\t <PUT ,MASSES 5 ,UM31>\n\t <PUT ,MASSES 6 ,UM52>\n\t <PUT ,MASSES 7 ,UM70>\n\t <PUT ,MASSES 8 ,UM91>\n\t <PUT ,KNOWNS 1 ,AB40>\n\t <PUT ,KNOWNS 2 ,AX87>\n\t <PUT ,KNOWNS 3 ,AX32>\n\t <PUT ,KNOWNS 4 ,AX01>\n\t <PUT ,KNOWNS 5 ,AX71>\n\t <PUT ,KNOWNS 6 ,US75>\n\t <PUT ,KNOWNS 7 ,MARS>\n\t <SETG P-IT-LOC ,HERE>\n\t <SETG P-IT-OBJECT <>>\n\t <COND (<NOT <FSET? ,HERE ,TOUCHBIT>>\n\t\t<V-VERSION>\n\t\t<CRLF>\n\t\t<TELL\n\"You are sound asleep in your bunk aboard the deep-space black hole\nprospecting ship \\\"Starcross,\\\" operating out of Ceres. Just as your\nsleep becomes deep and comfortable, an alarm bell begins ringing! It's\nthe mass detector! Instantly you awake. This hasn't been a profitable\ntrip so far, and you don't even have the cash for repairs. This could\nbe the break you've been waiting for.\n|\" CR>)>\n\t <V-LOOK>\n\t <MAIN-LOOP>\n\t <AGAIN>>    "
  },
  "MAIN-LOOP": {
   "name": "MAIN-LOOP",
   "file": "main.zil",
   "line": 72,
   "endLine": 134,
   "source": "<ROUTINE MAIN-LOOP (\"AUX\" ICNT OCNT NUM CNT OBJ TBL V PTBL OBJ1 TMP) \n   #DECL ((CNT OCNT ICNT NUM) FIX (V) <OR 'T FIX FALSE> (OBJ) <OR FALSE OBJECT>\n\t  (OBJ1) OBJECT (TBL) TABLE (PTBL) <OR FALSE ATOM>)\n   <REPEAT ()\n     <SET CNT 0>\n     <SET OBJ <>>\n     <SET PTBL T>\n     <COND (<SETG P-WON <PARSER>>\n\t    <SET ICNT <GET ,P-PRSI ,P-MATCHLEN>>\n\t    <SET NUM\n\t\t <COND (<0? <SET OCNT <GET ,P-PRSO ,P-MATCHLEN>>> .OCNT)\n\t\t       (<G? .OCNT 1>\n\t\t\t<SET TBL ,P-PRSO>\n\t\t\t<COND (<0? .ICNT> <SET OBJ <>>)\n\t\t\t      (T <SET OBJ <GET ,P-PRSI 1>>)>\n\t\t\t.OCNT)\n\t\t       (<G? .ICNT 1>\n\t\t\t<SET PTBL <>>\n\t\t\t<SET TBL ,P-PRSI>\n\t\t\t<SET OBJ <GET ,P-PRSO 1>>\n\t\t\t.ICNT)\n\t\t       (T 1)>>\n\t    <COND (<AND <NOT .OBJ> <1? .ICNT>> <SET OBJ <GET ,P-PRSI 1>>)>\n\t    <COND (<==? ,PRSA ,V?WALK> <SET V <PERFORM ,PRSA ,PRSO>>)\n\t\t  (<0? .NUM>\n\t\t   <COND (<0? <BAND <GETB ,P-SYNTAX ,P-SBITS> ,P-SONUMS>>\n\t\t\t  <SET V <PERFORM ,PRSA>>\n\t\t\t  <SETG PRSO <>>)\n\t\t\t (T\n\t\t\t  <TELL \"There isn't anything to \">\n\t\t\t  <SET TMP <GET ,P-ITBL ,P-VERBN>>\n\t\t\t  <COND (,P-OFLAG\n\t\t\t\t <PRINTB <GET .TMP 0>>)\n\t\t\t\t(T\n\t\t\t\t <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>)>\n\t\t\t  <TELL \"!\" CR>\n\t\t\t  <SET V <>>)>)\n\t\t  (T\n\t\t   <REPEAT ()\n\t\t\t   <COND (<G? <SET CNT <+ .CNT 1>> .NUM> <RETURN>)\n\t\t\t\t (T\n\t\t\t\t  <COND (.PTBL <SET OBJ1 <GET ,P-PRSO .CNT>>)\n\t\t\t\t\t(T <SET OBJ1 <GET ,P-PRSI .CNT>>)>\n\t\t\t\t  <COND (<G? .NUM 1>\n\t\t\t\t\t <PRINTD .OBJ1>\n\t\t\t\t\t <TELL \": \">)>\n\t\t\t\t  <SETG PRSO <COND (.PTBL .OBJ1) (T .OBJ)>>\n\t\t\t\t  <SETG PRSI <COND (.PTBL .OBJ) (T .OBJ1)>>\n\t\t\t\t  <SET V <PERFORM ,PRSA ,PRSO ,PRSI>>\n\t\t\t\t  <COND (<==? .V ,M-FATAL> <RETURN>)>)>>)>\n\t    <COND (<NOT <==? ,PRSA ,V?AGAIN>>\n\t\t   <SETG L-PRSA ,PRSA>\n\t\t   <SETG L-PRSO ,PRSO>\n\t\t   <SETG L-PRSI ,PRSI>)>\n\t    <SETG MOVES <+ ,MOVES 1>>\n\t    <COND (<==? .V ,M-FATAL> <SETG P-CONT <>>)>)\n\t   (T\n\t    <SETG P-CONT <>>)>\n     <COND (<NOT ,NOT-AGAIN> <RETURN .V>)\n\t   (,P-WON\n\t    <COND (<VERB? TELL BRIEF SUPER-BRIEF VERBOSE SAVE VERSION\n\t\t\t  QUIT RESTART SCORE SCRIPT UNSCRIPT RESTORE> T)\n\t\t  (T <SET V <CLOCKER>>)>)>>>"
  },
  "PERFORM": {
   "name": "PERFORM",
   "file": "main.zil",
   "line": 142,
   "endLine": 178,
   "source": "<ROUTINE PERFORM (A \"OPTIONAL\" (O <>) (I <>) \"AUX\" V OA OO OI) \n\t#DECL ((A) FIX (O) <OR FALSE OBJECT FIX> (I) <OR FALSE OBJECT> (V) ANY)\n\t<SET OA ,PRSA>\n\t<SET OO ,PRSO>\n\t<SET OI ,PRSI>\n\t<COND (<AND <EQUAL? ,IT .I .O>\n\t\t    <NOT <EQUAL? ,P-IT-LOC ,HERE>>>\n\t       <TELL \"I don't see what you are referring to.\" CR>\n\t       <RFATAL>)>\n\t<COND (<==? .O ,IT> <SET O ,P-IT-OBJECT>)>\n\t<COND (<==? .I ,IT> <SET I ,P-IT-OBJECT>)>\n\t<SETG PRSA .A>\n\t<SETG PRSO .O>\n\t<COND (<AND ,PRSO <NOT <VERB? WALK>>>\n\t       <SETG P-IT-OBJECT ,PRSO>\n\t       <SETG P-IT-LOC ,HERE>)>\n\t<SETG PRSI .I>\n\t<COND (<SET V <APPLY <GETP ,WINNER ,P?ACTION>>> .V)\n\t      (<SET V <APPLY <GETP <LOC ,WINNER> ,P?ACTION> ,M-BEG>> .V)\n\t      (<SET V <APPLY <GET ,PREACTIONS .A>>> .V)\n\t      (<AND .I <SET V <APPLY <GETP .I ,P?ACTION>>>> .V)\n\t      (<AND .O\n\t\t    <NOT <==? .A ,V?WALK>>\n\t\t    <LOC .O>\n\t\t    <SET V <APPLY <GETP <LOC .O> ,P?CONTFCN>>>>\n\t       .V)\n\t      (<AND .O\n\t\t    <NOT <==? .A ,V?WALK>>\n\t\t    <SET V <APPLY <GETP .O ,P?ACTION>>>>\n\t       .V)\n\t      (<SET V <APPLY <GET ,ACTIONS .A>>> .V)>\n\t<COND (<NOT <==? .V ,M-FATAL>>\n\t       <SET V <APPLY <GETP <LOC ,WINNER> ,P?ACTION> ,M-END>>)>\n\t<SETG PRSA .OA>\n\t<SETG PRSO .OO>\n\t<SETG PRSI .OI>\n\t.V>  "
  },
  "TABLE-COPY": {
   "name": "TABLE-COPY",
   "file": "parser.zil",
   "line": 136,
   "endLine": 140,
   "source": "<ROUTINE TABLE-COPY (SRC DEST CNT)\n\t <SET CNT <* .CNT 2>>\n\t <REPEAT ()\n\t\t <COND (<DLESS? CNT 0> <RETURN>)\n\t\t       (T <PUTB .DEST .CNT <GETB .SRC .CNT>>)>>>"
  },
  "PARSER": {
   "name": "PARSER",
   "file": "parser.zil",
   "line": 147,
   "endLine": 316,
   "source": "<ROUTINE PARSER (\"AUX\" (PTR ,P-LEXSTART) WORD (VAL 0) (VERB <>)\n\t\t       LEN (DIR <>) (NW 0) (LW 0) NUM SCNT (CNT -1)) \n\t<REPEAT ()\n\t\t<COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN> <RETURN>)\n\t\t      (T <PUT ,P-ITBL .CNT 0>)>>\n\t<SETG P-NUMBER <>>\n\t<SETG P-ADVERB <>>\n\t<SETG P-ADJECTIVE <>>\n\t<SETG P-MERGED <>>\n\t<PUT ,P-PRSO ,P-MATCHLEN 0>\n\t<PUT ,P-PRSI ,P-MATCHLEN 0>\n\t<PUT ,P-BUTS ,P-MATCHLEN 0>\n\t<COND (<AND <NOT ,QUOTE-FLAG> <N==? ,WINNER ,ADVENTURER>>\n\t       <SETG WINNER ,ADVENTURER>\n\t       <COND (<NOT <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t      <SETG HERE <LOC ,WINNER>>)>)>\n\t<COND (,P-CONT\n\t       <SET PTR ,P-CONT>\n\t       <SETG P-CONT <>>\n\t       <COND (<NOT <VERB? TELL>> <CRLF>)>)\n\t      (T\n\t       <SETG WINNER ,ADVENTURER>\n\t       <SETG QUOTE-FLAG <>>\n\t       <COND (<NOT <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t      <SETG HERE <LOC ,WINNER>>)>\n\t       <COND (<==? ,NOT-AGAIN 2>\n\t\t      <TABLE-COPY ,P-INBUF ,A-INBUF 50 ;100>\n\t\t      <TABLE-COPY ,P-LEXV ,A-LEXV 60 ;120>)>\n\t       <SET SCNT ,P-SPACE>\n\t       <REPEAT ()\n\t\t       <COND (<L? <SET SCNT <- .SCNT 1>> 0> <RETURN>)\n\t\t\t     (T <CRLF>)>>\n\t       <TELL \">\">\n\t       <READ ,P-INBUF ,P-LEXV>)>\n\t<SETG P-LEN <GETB ,P-LEXV ,P-LEXWORDS>>\n\t<COND (<0? ,P-LEN> <TELL \"I beg your pardon?\" CR> <RFALSE>)>\n\t<SET LEN ,P-LEN>\n\t<SETG P-DIR <>>\n\t<SETG P-NCN 0>\n\t<SETG P-GETFLAGS 0>\t\n\t;\"3/25/83: Next statement added.\"\n\t<PUT ,P-ITBL ,P-VERBN 0>\n\t<COND (<==? ,NOT-AGAIN 2>\n\t       <SETG A-PTR ,A-PTR2>\n\t       <COND (<NOT <==? .PTR ,P-LEXSTART>>\n\t       \t      <TABLE-COPY ,P-INBUF ,A-INBUF 50 ;100>\n\t\t      <TABLE-COPY ,P-LEXV ,A-LEXV 60 ;120>)>)\n\t      (<==? ,NOT-AGAIN 1> <SETG NOT-AGAIN 2>)>\n\t<SETG A-PTR2 .PTR>\n\t<REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <SETG QUOTE-FLAG <>>\n\t\t       <RETURN>)\n\t\t      (<OR <SET WORD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WORD <NUMBER? .PTR>>>\n\t\t       <COND (<AND <==? .WORD ,W?TO>\n\t\t\t\t   <EQUAL? .VERB ,ACT?TELL>>\n\t\t\t      <SET WORD ,W?QUOTE>)\n\t\t\t     (<AND <==? .WORD ,W?THEN>\n\t\t\t\t   <NOT .VERB>>\n\t\t\t      <PUT ,P-ITBL ,P-VERB ,ACT?TELL>\n\t\t\t      <PUT ,P-ITBL ,P-VERBN 0>\n\t\t\t      <SET WORD ,W?QUOTE>)>\n\t\t       <COND ;(<AND <EQUAL? .WORD ,W?PERIOD>\n\t\t\t\t   <EQUAL? .LW ,W?MRS ,W?MR ,W?MS>>\n\t\t\t      <SET LW 0>)\n\t\t\t     (<OR <EQUAL? .WORD ,W?THEN ,W?PERIOD>\n\t\t\t\t  <EQUAL? .WORD ,W?QUOTE>> \n\t\t\t      <COND (<EQUAL? .WORD ,W?QUOTE>\n\t\t\t\t     <COND (,QUOTE-FLAG\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>)\n\t\t\t\t\t   (T <SETG QUOTE-FLAG T>)>)>\n\t\t\t      <OR <0? ,P-LEN>\n\t\t\t\t  <SETG P-CONT <+ .PTR ,P-LEXELEN>>>\n\t\t\t      <PUTB ,P-LEXV ,P-LEXWORDS ,P-LEN>\n\t\t\t      <RETURN>)\n\t\t\t     (<AND <SET VAL\n\t\t\t\t\t<WT? .WORD\n\t\t\t\t\t     ,PS?DIRECTION\n\t\t\t\t\t     ,P1?DIRECTION>>\n\t\t\t\t   <OR <==? .LEN 1>\n\t\t\t\t       <AND <==? .LEN 2> <==? .VERB ,ACT?WALK>>\n\t\t\t\t       <AND <EQUAL? <SET NW\n\t\t\t\t\t\t     <GET ,P-LEXV\n\t\t\t\t\t\t\t  <+ .PTR ,P-LEXELEN>>>\n\t\t\t\t\t            ,W?THEN\n\t\t\t\t\t            ,W?QUOTE>\n\t\t\t\t\t    <==? .VERB ,ACT?WALK>\n\t\t\t\t\t    <G? .LEN 2>>\n\t\t\t\t       <AND <EQUAL? .NW ,W?PERIOD>\n\t\t\t\t\t    <EQUAL? .VERB ,ACT?WALK <>>\n\t\t\t\t\t    <G? .LEN 1>>\n\t\t\t\t       <AND ,QUOTE-FLAG\n\t\t\t\t\t    <==? .LEN 2>\n\t\t\t\t\t    <EQUAL? .NW ,W?QUOTE>>\n\t\t\t\t       <AND <G? .LEN 2>\n\t\t\t\t\t    <==? .VERB ,ACT?WALK>\n\t\t\t\t\t    <EQUAL? .NW ,W?COMMA ,W?AND>>>>\n\t\t\t      <SET DIR .VAL>\n\t\t\t      <COND (<EQUAL? .NW ,W?COMMA ,W?AND>\n\t\t\t\t     <PUT ,P-LEXV\n\t\t\t\t\t  <+ .PTR ,P-LEXELEN>\n\t\t\t\t\t  ,W?THEN>)>\n\t\t\t      <COND (<NOT <G? .LEN 2>>\n\t\t\t\t     <SETG QUOTE-FLAG <>>\n\t\t\t\t     <RETURN>)>)\n\t\t\t     (<AND <SET VAL <WT? .WORD ,PS?VERB ,P1?VERB>>\n\t\t\t\t   <NOT .VERB>>\n\t\t\t      <SET VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERBN ,P-VTBL>\n\t\t\t      <PUT ,P-VTBL 0 .WORD>\n\t\t\t      <PUTB ,P-VTBL 2 <GETB ,P-LEXV\n\t\t\t\t\t\t    <SET NUM\n\t\t\t\t\t\t\t <+ <* .PTR 2> 2>>>>\n\t\t\t      <PUTB ,P-VTBL 3 <GETB ,P-LEXV <+ .NUM 1>>>)\n\t\t\t     (<OR <SET VAL <WT? .WORD ,PS?PREPOSITION 0>>\n\t\t\t\t  <AND <OR <EQUAL? .WORD ,W?ALL ,W?ONE ,W?A>\n\t\t\t\t\t   <WT? .WORD ,PS?ADJECTIVE>\n\t\t\t\t\t   <WT? .WORD ,PS?OBJECT>>\n\t\t\t\t       <SET VAL 0>>>\n\t\t\t      <COND (<AND <G? ,P-LEN 0>\n\t\t\t\t\t  <==? <GET ,P-LEXV\n\t\t\t\t\t\t    <+ .PTR ,P-LEXELEN>>\n\t\t\t\t\t       ,W?OF>\n\t\t\t\t\t  ;<NOT <EQUAL? .VERB ,ACT?ACCUSE>>\n\t\t\t\t\t  <0? .VAL>\n\t\t\t\t\t  <NOT\n\t\t\t\t\t   <EQUAL? .WORD ,W?ALL ,W?ONE ,W?A>>>)\n\t\t\t\t    (<AND <NOT <0? .VAL>>\n\t\t\t\t          <OR <0? ,P-LEN>\n\t\t\t\t\t      <EQUAL? <GET ,P-LEXV <+ .PTR 2>>\n\t\t\t\t\t\t      ,W?THEN ,W?PERIOD>>>\n\t\t\t\t     <COND (<L? ,P-NCN 2>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1 .VAL>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1N .WORD>)>)\n\t\t\t\t    (<==? ,P-NCN 2>\n\t\t\t\t     <TELL\n\"I found too many nouns in that sentence.\" CR>\n\t\t\t\t     <RFALSE>)\n\t\t\t\t    (T\n\t\t\t\t     <SETG P-NCN <+ ,P-NCN 1>>\n\t\t\t\t     <OR <SET PTR <CLAUSE .PTR .VAL .WORD>>\n\t\t\t\t\t <RFALSE>>\n\t\t\t\t     <COND (<L? .PTR 0>\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>\n\t\t\t\t\t    <RETURN>)>)>)\n\t\t\t     ;(<OR <EQUAL? .WORD ,W?CAREFULLY ,W?QUIETLY>\n\t\t\t\t  <EQUAL? .WORD ,W?SLOWLY ,W?QUICKLY\n\t\t\t\t\t        ,W?BRIEFLY>>\n\t\t\t      <SETG P-ADVERB .WORD>)\n\t\t\t     (<WT? .WORD ,PS?BUZZ-WORD>)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T\n\t\t       <UNKNOWN-WORD .PTR>\n\t\t       <RFALSE>)>\n\t\t<SET LW .WORD>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>\n\t<COND (.DIR \n\t       <SETG PRSA ,V?WALK>\n\t       <SETG PRSO .DIR>\n\t       <SETG P-WALK-DIR .DIR>\n\t       <RETURN T>)>\n\t<SETG P-WALK-DIR <>>\n\t<COND (,P-OFLAG <ORPHAN-MERGE>)>\n\t;<COND (<==? <GET ,P-ITBL ,P-VERB> 0> <PUT ,P-ITBL ,P-VERB ,ACT?CALL>)>\n\t<COND (<AND <SYNTAX-CHECK> <SNARF-OBJECTS> <TAKE-CHECK> <MANY-CHECK>>\n\t       T)>>"
  },
  "WT?": {
   "name": "WT?",
   "file": "parser.zil",
   "line": 326,
   "endLine": 332,
   "source": "<ROUTINE WT? (PTR BIT \"OPTIONAL\" (B1 5) \"AUX\" (OFFST ,P-P1OFF) TYP) \n\t<COND (<BTST <SET TYP <GETB .PTR ,P-PSOFF>> .BIT>\n\t       <COND (<G? .B1 4> <RTRUE>)\n\t\t     (T\n\t\t      <SET TYP <BAND .TYP ,P-P1BITS>>\n\t\t      <COND (<NOT <==? .TYP .B1>> <SET OFFST <+ .OFFST 1>>)>\n\t\t      <GETB .PTR .OFFST>)>)>>"
  },
  "CLAUSE": {
   "name": "CLAUSE",
   "file": "parser.zil",
   "line": 335,
   "endLine": 405,
   "source": "<ROUTINE CLAUSE (PTR VAL WORD \"AUX\" OFF NUM (ANDFLG <>) (FIRST?? T) NW (LW 0)) \n\t#DECL ((PTR VAL OFF NUM) FIX (WORD NW) <OR FALSE FIX TABLE>\n\t       (ANDFLG FIRST??) <OR ATOM FALSE>)\n\t<SET OFF <* <- ,P-NCN 1> 2>>\n\t<COND (<NOT <==? .VAL 0>>\n\t       <PUT ,P-ITBL <SET NUM <+ ,P-PREP1 .OFF>> .VAL>\n\t       <PUT ,P-ITBL <+ .NUM 1> .WORD>\n\t       <SET PTR <+ .PTR ,P-LEXELEN>>)\n\t      (T <SETG P-LEN <+ ,P-LEN 1>>)>\n\t<COND (<0? ,P-LEN> <SETG P-NCN <- ,P-NCN 1>> <RETURN -1>)>\n\t<PUT ,P-ITBL <SET NUM <+ ,P-NC1 .OFF>> <REST ,P-LEXV <* .PTR 2>>>\n\t<COND (<EQUAL? <GET ,P-LEXV .PTR> ,W?THE ,W?A ,W?AN>\n\t       <PUT ,P-ITBL .NUM <REST <GET ,P-ITBL .NUM> 4>>)>\n\t<REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <PUT ,P-ITBL <+ .NUM 1> <REST ,P-LEXV <* .PTR 2>>>\n\t\t       <RETURN -1>)>\n\t\t<COND (<OR <SET WORD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WORD <NUMBER? .PTR>>>\n\t\t       <COND (<0? ,P-LEN> <SET NW 0>)\n\t\t\t     (T <SET NW <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>>)>\n\t\t       ;<COND (<AND <==? .WORD ,W?OF>\n\t\t\t\t   <==? <GET ,P-ITBL ,P-VERB> ,ACT?ACCUSE>>\n\t\t\t      <PUT ,P-LEXV .PTR ,W?WITH>\n\t\t\t      <SET WORD ,W?WITH>)>\n\t\t       <COND ;(<AND <EQUAL? .WORD ,W?PERIOD>\n\t\t\t\t   <EQUAL? .LW ,W?MRS ,W?MR ,W?MS>>\n\t\t\t      <SET LW 0>)\n\t\t\t     (<EQUAL? .WORD ,W?AND ,W?COMMA> <SET ANDFLG T>)\n\t\t\t     (<EQUAL? .WORD ,W?ALL ,W?ONE>\n\t\t\t      <COND (<==? .NW ,W?OF>\n\t\t\t\t     <SETG P-LEN <- ,P-LEN 1>>\n\t\t\t\t     <SET PTR <+ .PTR ,P-LEXELEN>>)>)\n\t\t\t     (<OR <EQUAL? .WORD ,W?THEN ,W?PERIOD>\n\t\t\t\t  <AND <WT? .WORD ,PS?PREPOSITION>\n\t\t\t\t       <NOT .FIRST??>>>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 1>>\n\t\t\t      <PUT ,P-ITBL\n\t\t\t\t   <+ .NUM 1>\n\t\t\t\t   <REST ,P-LEXV <* .PTR 2>>>\n\t\t\t      <RETURN <- .PTR ,P-LEXELEN>>)\n\t\t\t     (<AND .ANDFLG\n\t\t\t\t   <OR <WT? .WORD ,PS?DIRECTION>\n\t\t\t\t       <WT? .WORD ,PS?VERB>>>\n\t\t\t      <SET PTR <- .PTR 4>>\n\t\t\t      <PUT ,P-LEXV <+ .PTR 2> ,W?THEN>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 2>>)\n\t\t\t     (<WT? .WORD ,PS?OBJECT>\n\t\t\t      <COND (<AND <WT? .WORD\n\t\t\t\t\t       ,PS?ADJECTIVE\n\t\t\t\t\t       ,P1?ADJECTIVE>\n\t\t\t\t\t  <NOT <==? .NW 0>>\n\t\t\t\t\t  <WT? .NW ,PS?OBJECT>>)\n\t\t\t\t    (<AND <NOT .ANDFLG>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?BUT ,W?EXCEPT>>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t\t     <PUT ,P-ITBL\n\t\t\t\t\t  <+ .NUM 1>\n\t\t\t\t\t  <REST ,P-LEXV <* <+ .PTR 2> 2>>>\n\t\t\t\t     <RETURN .PTR>)\n\t\t\t\t    (T <SET ANDFLG <>>)>)\n\t\t\t     (<OR <WT? .WORD ,PS?ADJECTIVE>\n\t\t\t\t  <WT? .WORD ,PS?BUZZ-WORD>>)\n\t\t\t     (<WT? .WORD ,PS?PREPOSITION> T)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T <UNKNOWN-WORD .PTR> <RFALSE>)>\n\t\t<SET LW .WORD>\n\t\t<SET FIRST?? <>>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>> "
  },
  "NUMBER?": {
   "name": "NUMBER?",
   "file": "parser.zil",
   "line": 407,
   "endLine": 429,
   "source": "<ROUTINE NUMBER? (PTR \"AUX\" CNT BPTR CHR (SUM 0) (TIM <>))\n\t <SET CNT <GETB <REST ,P-LEXV <* .PTR 2>> 2>>\n\t <SET BPTR <GETB <REST ,P-LEXV <* .PTR 2>> 3>>\n\t <REPEAT ()\n\t\t <COND (<L? <SET CNT <- .CNT 1>> 0> <RETURN>)\n\t\t       (T\n\t\t\t<SET CHR <GETB ,P-INBUF .BPTR>>\n\t\t\t<COND (<==? .CHR 58>\n\t\t\t       <SET TIM .SUM>\n\t\t\t       <SET SUM 0>)\n\t\t\t      (<G? .SUM 10000> <RFALSE>)\n\t\t\t      (<AND <L? .CHR 58> <G? .CHR 47>>\n\t\t\t       <SET SUM <+ <* .SUM 10> <- .CHR 48>>>)\n\t\t\t      (T <RFALSE>)>\n\t\t\t<SET BPTR <+ .BPTR 1>>)>>\n\t <PUT ,P-LEXV .PTR ,W?INTNUM>\n\t <COND (<G? .SUM 1000> <RFALSE>)\n\t       (.TIM\n\t\t<COND (<L? .TIM 8> <SET TIM <+ .TIM 12>>)\n\t\t      (<G? .TIM 23> <RFALSE>)>\n\t\t<SET SUM <+ .SUM <* .TIM 60>>>)>\n\t <SETG P-NUMBER .SUM>\n\t ,W?INTNUM>"
  },
  "ORPHAN-MERGE": {
   "name": "ORPHAN-MERGE",
   "file": "parser.zil",
   "line": 434,
   "endLine": 486,
   "source": "<ROUTINE ORPHAN-MERGE (\"AUX\" (CNT -1) TEMP VERB BEG END (ADJ <>) WRD) \n   #DECL ((CNT TEMP VERB) FIX (BEG END) <PRIMTYPE VECTOR> (WRD) TABLE)\n   <SETG P-OFLAG <>>\n   <COND\n    (<AND <NOT <0? <SET VERB <GET ,P-ITBL ,P-VERB>>>>\n\t  <NOT <==? .VERB <GET ,P-OTBL ,P-VERB>>>>\n     <RFALSE>)\n    (<==? ,P-NCN 2>\n     <RFALSE>)\n    (<==? <GET ,P-OTBL ,P-NC1> 1>\n     <COND (<OR <==? <SET TEMP <GET ,P-ITBL ,P-PREP1>> <GET ,P-OTBL ,P-PREP1>>\n\t\t<0? .TEMP>>\n\t    <PUT ,P-OTBL ,P-NC1 <GET ,P-ITBL ,P-NC1>>\n\t    <PUT ,P-OTBL ,P-NC1L <GET ,P-ITBL ,P-NC1L>>)\n\t   (T <RFALSE>)>)\n    (<==? <GET ,P-OTBL ,P-NC2> 1>\n     <COND (<OR <==? <SET TEMP <GET ,P-ITBL ,P-PREP1>> <GET ,P-OTBL ,P-PREP2>>\n\t\t<0? .TEMP>>\n\t    <PUT ,P-OTBL ,P-NC2 <GET ,P-ITBL ,P-NC1>>\n\t    <PUT ,P-OTBL ,P-NC2L <GET ,P-ITBL ,P-NC1L>>\n\t    <SETG P-NCN 2>)\n\t   (T <RFALSE>)>)\n    (,P-ACLAUSE\n     <COND\n      (<NOT <==? ,P-NCN 1>> <SETG P-ACLAUSE <>> <RFALSE>)\n      (T\n       <SET BEG <GET ,P-ITBL ,P-NC1>>\n       <SET END <GET ,P-ITBL ,P-NC1L>>\n       <REPEAT ()\n\t       <COND (<==? .BEG .END>\n\t\t      <COND (.ADJ\n\t\t\t     <ACLAUSE-WIN .ADJ>\n\t\t\t     <RETURN>)\n\t\t\t    (T\n\t\t\t     <SETG P-ACLAUSE <>>\n\t\t\t     <RFALSE>)>)\n\t\t     (<AND <NOT .ADJ>\n\t\t\t   <BTST <GETB <SET WRD <GET .BEG 0>> ,P-PSOFF>\n\t\t\t         ,PS?ADJECTIVE>>\n\t\t      <SET ADJ .WRD>)\n\t\t     (<OR <BTST <GETB .WRD ,P-PSOFF> ,PS?OBJECT>\n\t\t\t  <==? .WRD ,W?ONE>>\n\t\t      <COND (<NOT <EQUAL? .WRD ,P-ANAM ,W?ONE>> <RFALSE>)\n\t\t\t    (T\n\t\t\t     <ACLAUSE-WIN .ADJ>\n\t\t\t     <RETURN>)>)>\n\t       <SET BEG <REST .BEG ,P-WORDLEN>>>)>)>\n   <REPEAT ()\n\t   <COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN>\n\t\t  <SETG P-MERGED T>\n\t\t  <RTRUE>)\n\t\t (T <PUT ,P-ITBL .CNT <GET ,P-OTBL .CNT>>)>>\n   T>"
  },
  "ACLAUSE-WIN": {
   "name": "ACLAUSE-WIN",
   "file": "parser.zil",
   "line": 488,
   "endLine": 494,
   "source": "<ROUTINE ACLAUSE-WIN (ADJ)\n\t <SETG P-CCSRC ,P-OTBL>\n\t <CLAUSE-COPY ,P-ACLAUSE <+ ,P-ACLAUSE 1> .ADJ>\n\t <AND <NOT <==? <GET ,P-OTBL ,P-NC2> 0>>\n\t      <SETG P-NCN 2>>\n\t <SETG P-ACLAUSE <>>\n\t <RTRUE>>"
  },
  "WORD-PRINT": {
   "name": "WORD-PRINT",
   "file": "parser.zil",
   "line": 499,
   "endLine": 504,
   "source": "<ROUTINE WORD-PRINT (CNT BUF)\n\t <REPEAT ()\n\t\t <COND (<DLESS? CNT 0> <RETURN>)\n\t\t       (ELSE\n\t\t\t<PRINTC <GETB ,P-INBUF .BUF>>\n\t\t\t<SET BUF <+ .BUF 1>>)>>>"
  },
  "UNKNOWN-WORD": {
   "name": "UNKNOWN-WORD",
   "file": "parser.zil",
   "line": 506,
   "endLine": 513,
   "source": "<ROUTINE UNKNOWN-WORD (PTR \"AUX\" BUF) \n\t#DECL ((PTR BUF) FIX)\n\t<TELL \"I don't know the word '\">\n\t<WORD-PRINT <GETB <REST ,P-LEXV <SET BUF <* .PTR 2>>> 2>\n\t\t    <GETB <REST ,P-LEXV .BUF> 3>>\n\t<TELL \"'.\" CR>\n\t<SETG QUOTE-FLAG <>>\n\t<SETG P-OFLAG <>>>"
  },
  "CANT-USE": {
   "name": "CANT-USE",
   "file": "parser.zil",
   "line": 515,
   "endLine": 522,
   "source": "<ROUTINE CANT-USE (PTR \"AUX\" BUF) \n\t#DECL ((PTR BUF) FIX)\n\t<TELL \"I can't use the word '\">\n\t<WORD-PRINT <GETB <REST ,P-LEXV <SET BUF <* .PTR 2>>> 2>\n\t\t    <GETB <REST ,P-LEXV .BUF> 3>>\n\t<TELL \"' here.\" CR>\n\t<SETG QUOTE-FLAG <>>\n\t<SETG P-OFLAG <>>>"
  },
  "SYNTAX-CHECK": {
   "name": "SYNTAX-CHECK",
   "file": "parser.zil",
   "line": 551,
   "endLine": 617,
   "source": "<ROUTINE SYNTAX-CHECK (\"AUX\" SYN LEN NUM OBJ (DRIVE1 <>) (DRIVE2 <>) PREP VERB TMP) \n\t#DECL ((DRIVE1 DRIVE2) <OR FALSE <PRIMTYPE VECTOR>>\n\t       (SYN) <PRIMTYPE VECTOR> (LEN NUM VERB PREP) FIX\n\t       (OBJ) <OR FALSE OBJECT>)\n\t<COND (<0? <SET VERB <GET ,P-ITBL ,P-VERB>>>\n\t       <TELL \"I can't find a verb in that sentence!\" CR>\n\t       <RFALSE>)>\n\t<SET SYN <GET ,VERBS <- 255 .VERB>>>\n\t<SET LEN <GETB .SYN 0>>\n\t<SET SYN <REST .SYN>>\n\t<REPEAT ()\n\t\t<SET NUM <BAND <GETB .SYN ,P-SBITS> ,P-SONUMS>>\n\t\t<COND (<AND <NOT <L? .NUM 1>>\n\t\t\t    <0? ,P-NCN>\n\t\t\t    <OR <0? <SET PREP <GET ,P-ITBL ,P-PREP1>>>\n\t\t\t\t<==? .PREP <GETB .SYN ,P-SPREP1>>>>\n\t\t       <SET DRIVE1 .SYN>)\n\t\t      (<==? <GETB .SYN ,P-SPREP1> <GET ,P-ITBL ,P-PREP1>>\n\t\t       <COND (<AND <==? .NUM 2> <==? ,P-NCN 1>>\n\t\t\t      <SET DRIVE2 .SYN>)\n\t\t\t     (<==? <GETB .SYN ,P-SPREP2> <GET ,P-ITBL ,P-PREP2>>\n\t\t\t      <SYNTAX-FOUND .SYN>\n\t\t\t      <RTRUE>)>)>\n\t\t<COND (<DLESS? LEN 1>\n\t\t       <COND (<OR .DRIVE1 .DRIVE2> <RETURN>)\n\t\t\t     (T\n\t\t\t      <TELL \"I don't understand that sentence.\" CR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T <SET SYN <REST .SYN ,P-SYNLEN>>)>>\n\t<COND (<AND .DRIVE1\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE1 ,P-SFWIM1>\n\t\t\t       <GETB .DRIVE1 ,P-SLOC1>\n\t\t\t       <GETB .DRIVE1 ,P-SPREP1>>>>\n\t       <PUT ,P-PRSO ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSO 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE1>)\n\t      (<AND .DRIVE2\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE2 ,P-SFWIM2>\n\t\t\t       <GETB .DRIVE2 ,P-SLOC2>\n\t\t\t       <GETB .DRIVE2 ,P-SPREP2>>>>\n\t       <PUT ,P-PRSI ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSI 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE2>)\n\t      (<EQUAL? .VERB ,ACT?FIND>\n\t       <TELL \"I can't answer that question.\" CR>\n\t       <RFALSE>)\n\t      (<NOT <==? ,WINNER ,ADVENTURER>>\n\t       <CANT-ORPHAN>)\n\t      (T\n\t       <ORPHAN .DRIVE1 .DRIVE2>\n\t       <TELL \"What do you want to \">\n\t       <SET TMP <GET ,P-OTBL ,P-VERBN>>\n\t       <COND (<==? .TMP 0> <TELL \"tell\">)\n\t\t     (<0? <GETB ,P-VTBL 2>>\n\t\t      <PRINTB <GET .TMP 0>>)\n\t\t     (T\n\t\t      <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>\n\t\t      <PUTB ,P-VTBL 2 0>)>\n\t       <COND (.DRIVE2\n\t\t      <CLAUSE-PRINT ,P-NC1 ,P-NC1L>)>\n\t       <SETG P-OFLAG T>\n\t       <PREP-PRINT <COND (.DRIVE1 <GETB .DRIVE1 ,P-SPREP1>)\n\t\t\t\t (T <GETB .DRIVE2 ,P-SPREP2>)>>\n\t       <TELL \"?\" CR>\n\t       <RFALSE>)>> "
  },
  "CANT-ORPHAN": {
   "name": "CANT-ORPHAN",
   "file": "parser.zil",
   "line": 619,
   "endLine": 621,
   "source": "<ROUTINE CANT-ORPHAN ()\n\t <TELL \"\\\"That command was incomplete.  Why don't you try again?\\\"\" CR>\n\t <RFALSE>>"
  },
  "ORPHAN": {
   "name": "ORPHAN",
   "file": "parser.zil",
   "line": 623,
   "endLine": 637,
   "source": "<ROUTINE ORPHAN (D1 D2 \"AUX\" (CNT -1)) \n\t#DECL ((D1 D2) <OR FALSE <PRIMTYPE VECTOR>>)\n\t<PUT ,P-OCLAUSE ,P-MATCHLEN 0>\n\t<SETG P-CCSRC ,P-ITBL>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT ,P-ITBLLEN> <RETURN>)\n\t\t      (T <PUT ,P-OTBL .CNT <GET ,P-ITBL .CNT>>)>>\n\t<COND (<==? ,P-NCN 2> <CLAUSE-COPY ,P-NC2 ,P-NC2L>)>\n\t<COND (<NOT <L? ,P-NCN 1>> <CLAUSE-COPY ,P-NC1 ,P-NC1L>)>\n\t<COND (.D1\n\t       <PUT ,P-OTBL ,P-PREP1 <GETB .D1 ,P-SPREP1>>\n\t       <PUT ,P-OTBL ,P-NC1 1>)\n\t      (.D2\n\t       <PUT ,P-OTBL ,P-PREP2 <GETB .D2 ,P-SPREP2>>\n\t       <PUT ,P-OTBL ,P-NC2 1>)>> "
  },
  "CLAUSE-PRINT": {
   "name": "CLAUSE-PRINT",
   "file": "parser.zil",
   "line": 639,
   "endLine": 640,
   "source": "<ROUTINE CLAUSE-PRINT (BPTR EPTR) \n\t<BUFFER-PRINT <GET ,P-ITBL .BPTR> <GET ,P-ITBL .EPTR> T>>    "
  },
  "BUFFER-PRINT": {
   "name": "BUFFER-PRINT",
   "file": "parser.zil",
   "line": 642,
   "endLine": 668,
   "source": "<ROUTINE BUFFER-PRINT (BEG END CP \"AUX\" (NOSP <>) WRD (FIRST?? T) (PN <>))\n\t #DECL ((BEG END) <PRIMTYPE VECTOR> (CP) <OR FALSE ATOM>)\n\t <REPEAT ()\n\t\t<COND (<==? .BEG .END> <RETURN>)\n\t\t      (T\n\t\t       <COND (.NOSP <SET NOSP <>>)\n\t\t\t     (T <TELL \" \">)>\n\t\t       <COND (<==? <SET WRD <GET .BEG 0>> ,W?PERIOD> <SET NOSP T>)\n\t\t\t     ;(<==? .WRD ,W?MRS> <TELL \"Mrs.\"> <SET PN T>)\n\t\t\t     ;(<==? .WRD ,W?MS> <TELL \"Ms.\"> <SET PN T>)\n\t\t\t     ;(<==? .WRD ,W?MR> <TELL \"Mr.\"> <SET PN T>)\n\t\t\t     ;(<OR <EQUAL? .WRD YOUR-WORDS>\n\t\t\t\t   <EQUAL? .WRD ETC>>\n\t\t\t      <CAPITALIZE .BEG>\n\t\t\t      <SET PN T>)\n\t\t\t     (T\n\t\t\t      <COND (<AND .FIRST?? <NOT .PN> .CP>\n\t\t\t\t     <TELL \"the \">)>\n\t\t\t      <COND (,P-OFLAG <PRINTB .WRD>)\n\t\t\t\t    (<AND <==? .WRD ,W?IT>\n\t\t\t\t\t  <==? ,P-IT-LOC ,HERE>>\n\t\t\t\t     <PRINTD ,P-IT-OBJECT>)\n\t\t\t\t    (T\n\t\t\t\t     <WORD-PRINT <GETB .BEG 2>\n\t\t\t\t\t\t <GETB .BEG 3>>)>\n\t\t\t      <SET FIRST?? <>>)>)>\n\t\t<SET BEG <REST .BEG ,P-WORDLEN>>>>"
  },
  "CAPITALIZE": {
   "name": "CAPITALIZE",
   "file": "parser.zil",
   "line": 670,
   "endLine": 672,
   "source": "<ROUTINE CAPITALIZE (PTR)\n\t <PRINTC <- <GETB ,P-INBUF <GETB .PTR 3>> 32>>\n\t <WORD-PRINT <- <GETB .PTR 2> 1> <+ <GETB .PTR 3> 1>>>"
  },
  "PREP-PRINT": {
   "name": "PREP-PRINT",
   "file": "parser.zil",
   "line": 674,
   "endLine": 680,
   "source": "<ROUTINE PREP-PRINT (PREP \"AUX\" WRD) \n\t#DECL ((PREP) FIX)\n\t<COND (<NOT <0? .PREP>>\n\t       <TELL \" \">\n\t       <SET WRD <PREP-FIND .PREP>>\n\t       <COND ;(<==? .WRD ,W?AGAINST> <TELL \"against\">)\n\t\t     (T <PRINTB .WRD>)>)>>    "
  },
  "CLAUSE-COPY": {
   "name": "CLAUSE-COPY",
   "file": "parser.zil",
   "line": 682,
   "endLine": 703,
   "source": "<ROUTINE CLAUSE-COPY (BPTR EPTR \"OPTIONAL\" (INSRT <>) \"AUX\" BEG END) \n\t#DECL ((BPTR EPTR) FIX (BEG END) <PRIMTYPE VECTOR>\n\t       (INSRT) <OR FALSE TABLE>)\n\t<SET BEG <GET ,P-CCSRC .BPTR>>\n\t<SET END <GET ,P-CCSRC .EPTR>>\n\t<PUT ,P-OTBL\n\t     .BPTR\n\t     <REST ,P-OCLAUSE\n\t\t   <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN> 2>>>\n\t<REPEAT ()\n\t\t<COND (<==? .BEG .END>\n\t\t       <PUT ,P-OTBL\n\t\t\t    .EPTR\n\t\t\t    <REST ,P-OCLAUSE\n\t\t\t\t  <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN>\n\t\t\t\t     2>>>\n\t\t       <RETURN>)\n\t\t      (T\n\t\t       <COND (<AND .INSRT <==? ,P-ANAM <GET .BEG 0>>>\n\t\t\t      <CLAUSE-ADD .INSRT>)>\n\t\t       <CLAUSE-ADD <GET .BEG 0>>)>\n\t\t<SET BEG <REST .BEG ,P-WORDLEN>>>>  "
  },
  "CLAUSE-ADD": {
   "name": "CLAUSE-ADD",
   "file": "parser.zil",
   "line": 705,
   "endLine": 710,
   "source": "<ROUTINE CLAUSE-ADD (WRD \"AUX\" PTR) \n\t#DECL ((WRD) TABLE (PTR) FIX)\n\t<SET PTR <+ <GET ,P-OCLAUSE ,P-MATCHLEN> 2>>\n\t<PUT ,P-OCLAUSE <- .PTR 1> .WRD>\n\t<PUT ,P-OCLAUSE .PTR 0>\n\t<PUT ,P-OCLAUSE ,P-MATCHLEN .PTR>>   "
  },
  "PREP-FIND": {
   "name": "PREP-FIND",
   "file": "parser.zil",
   "line": 712,
   "endLine": 718,
   "source": "<ROUTINE PREP-FIND (PREP \"AUX\" (CNT 0) SIZE) \n\t#DECL ((PREP CNT SIZE) FIX)\n\t<SET SIZE <* <GET ,PREPOSITIONS 0> 2>>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT .SIZE> <RFALSE>)\n\t\t      (<==? <GET ,PREPOSITIONS .CNT> .PREP>\n\t\t       <RETURN <GET ,PREPOSITIONS <- .CNT 1>>>)>>>  "
  },
  "SYNTAX-FOUND": {
   "name": "SYNTAX-FOUND",
   "file": "parser.zil",
   "line": 720,
   "endLine": 723,
   "source": "<ROUTINE SYNTAX-FOUND (SYN) \n\t#DECL ((SYN) <PRIMTYPE VECTOR>)\n\t<SETG P-SYNTAX .SYN>\n\t<SETG PRSA <GETB .SYN ,P-SACTION>>>   "
  },
  "GWIM": {
   "name": "GWIM",
   "file": "parser.zil",
   "line": 727,
   "endLine": 747,
   "source": "<ROUTINE GWIM (GBIT LBIT PREP \"AUX\" OBJ) \n\t#DECL ((GBIT LBIT) FIX (OBJ) OBJECT)\n\t<COND (<==? .GBIT ,RMUNGBIT>\n\t       <RETURN ,ROOMS>)>\n\t<SETG P-GWIMBIT .GBIT>\n\t<SETG P-SLOCBITS .LBIT>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<COND (<GET-OBJECT ,P-MERGE <>>\n\t       <SETG P-GWIMBIT 0>\n\t       <COND (<==? <GET ,P-MERGE ,P-MATCHLEN> 1>\n\t\t      <SET OBJ <GET ,P-MERGE 1>>\n\t\t      <COND (<AND <FSET? .OBJ ,VEHBIT>\n\t\t\t\t  <EQUAL? .PREP ,PR?DOWN>>\n\t\t\t     <SET PREP ,PR?ON>)>\n\t\t      <TELL \"(\">\n\t\t      <COND (<NOT <0? .PREP>>\n\t\t\t     <PRINTB <PREP-FIND .PREP>>\n\t\t\t     <TELL \" the \">)>\n\t\t      <TELL D .OBJ \")\" CR>\n\t\t      .OBJ)>)\n\t      (T <SETG P-GWIMBIT 0> <RFALSE>)>>   "
  },
  "SNARF-OBJECTS": {
   "name": "SNARF-OBJECTS",
   "file": "parser.zil",
   "line": 749,
   "endLine": 763,
   "source": "<ROUTINE SNARF-OBJECTS (\"AUX\" PTR) \n\t#DECL ((PTR) <OR FIX <PRIMTYPE VECTOR>>)\n\t<COND (<NOT <==? <SET PTR <GET ,P-ITBL ,P-NC1>> 0>>\n\t       <SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC1>>\n\t       <OR <SNARFEM .PTR <GET ,P-ITBL ,P-NC1L> ,P-PRSO> <RFALSE>>\n\t       <OR <0? <GET ,P-BUTS ,P-MATCHLEN>>\n\t\t   <SETG P-PRSO <BUT-MERGE ,P-PRSO>>>)>\n\t<COND (<NOT <==? <SET PTR <GET ,P-ITBL ,P-NC2>> 0>>\n\t       <SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC2>>\n\t       <OR <SNARFEM .PTR <GET ,P-ITBL ,P-NC2L> ,P-PRSI> <RFALSE>>\n\t       <COND (<NOT <0? <GET ,P-BUTS ,P-MATCHLEN>>>\n\t\t      <COND (<==? <GET ,P-PRSI ,P-MATCHLEN> 1>\n\t\t\t     <SETG P-PRSO <BUT-MERGE ,P-PRSO>>)\n\t\t\t    (T <SETG P-PRSI <BUT-MERGE ,P-PRSI>>)>)>)>\n\t<RTRUE>>  "
  },
  "BUT-MERGE": {
   "name": "BUT-MERGE",
   "file": "parser.zil",
   "line": 765,
   "endLine": 779,
   "source": "<ROUTINE BUT-MERGE (TBL \"AUX\" LEN BUTLEN (CNT 1) (MATCHES 0) OBJ NTBL) \n\t#DECL ((TBL NTBL) TABLE (LEN BUTLEN MATCHES) FIX (OBJ) OBJECT)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<REPEAT ()\n\t\t<COND (<DLESS? LEN 0> <RETURN>)\n\t\t      (<ZMEMQ <SET OBJ <GET .TBL .CNT>> ,P-BUTS>)\n\t\t      (T\n\t\t       <PUT ,P-MERGE <+ .MATCHES 1> .OBJ>\n\t\t       <SET MATCHES <+ .MATCHES 1>>)>\n\t\t<SET CNT <+ .CNT 1>>>\n\t<PUT ,P-MERGE ,P-MATCHLEN .MATCHES>\n\t<SET NTBL ,P-MERGE>\n\t<SETG P-MERGE .TBL>\n\t.NTBL>    "
  },
  "SNARFEM": {
   "name": "SNARFEM",
   "file": "parser.zil",
   "line": 810,
   "endLine": 863,
   "source": "<ROUTINE SNARFEM (PTR EPTR TBL \"AUX\" (BUT <>) LEN WV WORD NW) \n   #DECL ((TBL) TABLE (PTR EPTR) <PRIMTYPE VECTOR> (ANDFLG) <OR ATOM FALSE>\n\t  (BUT) <OR FALSE TABLE> (WV) <OR FALSE FIX>)\n   <SETG P-GETFLAGS 0>\n   <SETG P-CSPTR .PTR>\n   <SETG P-CEPTR .EPTR>\n   <PUT ,P-BUTS ,P-MATCHLEN 0>\n   <PUT .TBL ,P-MATCHLEN 0>\n   <SET WORD <GET .PTR 0>>\n   <REPEAT ()\n\t   <COND (<==? .PTR .EPTR> <RETURN <GET-OBJECT <OR .BUT .TBL>>>)\n\t\t (T\n\t\t  <SET NW <GET .PTR ,P-LEXELEN>>\n\t\t  <COND (<EQUAL? .WORD ,W?ALL>\n\t\t\t <SETG P-GETFLAGS ,P-ALL>\n\t\t\t <COND (<==? .NW ,W?OF>\n\t\t\t\t<SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t(<EQUAL? .WORD ,W?BUT ,W?EXCEPT>\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t <SET BUT ,P-BUTS>\n\t\t\t <PUT .BUT ,P-MATCHLEN 0>)\n\t\t\t(<EQUAL? .WORD ,W?A ,W?ONE>\n\t\t\t <COND (<NOT ,P-ADJ>\n\t\t\t\t<SETG P-GETFLAGS ,P-ONE>\n\t\t\t\t<COND (<==? .NW ,W?OF>\n\t\t\t\t       <SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t       (T\n\t\t\t\t<SETG P-NAM ,P-ONEOBJ>\n\t\t\t\t<OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t\t<AND <0? .NW> <RTRUE>>)>)\n\t\t\t(<AND <EQUAL? .WORD ,W?AND ,W?COMMA>\n\t\t\t      <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t T)\n\t\t\t(<AND <WT? .WORD ,PS?PREPOSITION>\n\t\t\t      <==? .PTR ,P-CSPTR>>\n\t\t\t <SETG P-CSPTR <REST ,P-CSPTR ,P-WORDLEN>>)\n\t\t\t(<WT? .WORD ,PS?BUZZ-WORD>)\n\t\t\t(<EQUAL? .WORD ,W?AND ,W?COMMA>)\n\t\t\t(<==? .WORD ,W?OF>\n\t\t\t <COND (<0? ,P-GETFLAGS>\n\t\t\t\t<SETG P-GETFLAGS ,P-INHIBIT>)>)\n\t\t\t(<AND <SET WV <WT? .WORD ,PS?ADJECTIVE ,P1?ADJECTIVE>>\n\t\t\t      <ADJ-CHECK>>\n\t\t\t ;\"Used to check for P-ADJ being <> as well\"\n\t\t\t <SETG P-ADJ .WV>\n\t\t\t <SETG P-ADJN .WORD>\n\t\t\t <SETG P-ADJECTIVE .WORD>)\n\t\t\t(<WT? .WORD ,PS?OBJECT ,P1?OBJECT>\n\t\t\t <SETG P-NAM .WORD>\n\t\t\t <SETG P-ONEOBJ .WORD>)>)>\n\t   <COND (<NOT <==? .PTR .EPTR>>\n\t\t  <SET PTR <REST .PTR ,P-WORDLEN>>\n\t\t  <SET WORD .NW>)>>>   "
  },
  "ADJ-CHECK": {
   "name": "ADJ-CHECK",
   "file": "parser.zil",
   "line": 865,
   "endLine": 873,
   "source": "<ROUTINE ADJ-CHECK ()\n\t <COND (<NOT ,P-ADJ> <RTRUE>)\n\t       (<OR <EQUAL? ,P-ADJ ,A?FIRST ,A?SECOND ,A?THIRD>\n\t\t    <EQUAL? ,P-ADJ ,A?FOURTH ,A?FIFTH ,A?SIXTH>\n\t\t    <EQUAL? ,P-ADJ ,A?SEVENTH ,A?EIGHTH ,A?NINTH>\n\t\t    <EQUAL? ,P-ADJ ,A?TENTH ,A?SMALL ,A?LARGE>\n\t\t    <EQUAL? ,P-ADJ ,A?INNER ,A?OUTER>>\n\t\t<RFALSE>)\n\t       (T <RTRUE>)>>"
  },
  "GET-OBJECT": {
   "name": "GET-OBJECT",
   "file": "parser.zil",
   "line": 889,
   "endLine": 984,
   "source": "<ROUTINE GET-OBJECT (TBL\n\t\t    \"OPTIONAL\" (VRB T)\n\t\t    \"AUX\" LEN XBITS TLEN (GCHECK <>) (OLEN 0))\n\t#DECL ((TBL) TABLE (XBITS TLEN LEN) FIX (GWIM) <OR FALSE FIX>\n\t       (VRB GCHECK) <OR ATOM FALSE>)\n\t<SET XBITS ,P-SLOCBITS>\n\t<SET TLEN <GET .TBL ,P-MATCHLEN>>\n\t<COND (<BTST ,P-GETFLAGS ,P-INHIBIT> <RTRUE>)>\n\t<COND (<AND <NOT ,P-NAM> ,P-ADJ <WT? ,P-ADJN ,PS?OBJECT ,P1?OBJECT>>\n\t       <SETG P-NAM ,P-ADJN>\n\t       <SETG P-ADJECTIVE <>>\n\t       <SETG P-ADJ <>>)>\n\t<COND (<AND <NOT ,P-NAM>\n\t\t    <NOT ,P-ADJ>\n\t\t    <NOT <==? ,P-GETFLAGS ,P-ALL>>\n\t\t    <0? ,P-GWIMBIT>>\n\t       <COND (.VRB\n\t\t      <TELL \"I think that sentence was missing a noun.\" CR>)>\n\t       <RFALSE>)>\n\t<COND (<OR <NOT <==? ,P-GETFLAGS ,P-ALL>> <0? ,P-SLOCBITS>>\n\t       <SETG P-SLOCBITS -1>)>\n\t<SETG P-TABLE .TBL>\n\t<PROG ()\n\t      <COND (.GCHECK <GLOBAL-CHECK .TBL>)\n\t\t    (T\n\t\t     <COND (,LIT <DO-SL ,HERE ,SOG ,SIR>)>\n\t\t     <DO-SL ,ADVENTURER ,SH ,SC>)>\n\t      <SET LEN <- <GET .TBL ,P-MATCHLEN> .TLEN>>\n\t      <COND (<BTST ,P-GETFLAGS ,P-ALL>)\n\t\t    (<AND <BTST ,P-GETFLAGS ,P-ONE>\n\t\t\t  <NOT <0? .LEN>>>\n\t\t     <COND (<NOT <==? .LEN 1>>\n\t\t\t    <PUT .TBL 1 <GET .TBL <RANDOM .LEN>>>\n\t\t\t    <TELL \"(How about the \">\n\t\t\t    <PRINTD <GET .TBL 1>>\n\t\t\t    <TELL \"?)\" CR>)>\n\t\t     <PUT .TBL ,P-MATCHLEN 1>)\n\t\t    (<OR <G? .LEN 1>\n\t\t\t <AND <0? .LEN> <NOT <==? ,P-SLOCBITS -1>>>>\n\t\t     <COND (<==? ,P-SLOCBITS -1>\n\t\t\t    <SETG P-SLOCBITS .XBITS>\n\t\t\t    <SET OLEN .LEN>\n\t\t\t    <PUT .TBL\n\t\t\t\t ,P-MATCHLEN\n\t\t\t\t <- <GET .TBL ,P-MATCHLEN> .LEN>>\n\t\t\t    <AGAIN>)\n\t\t\t   (T\n\t\t\t    <COND (<0? .LEN> <SET LEN .OLEN>)>\n\t\t\t    <COND (<NOT <==? ,WINNER ,ADVENTURER>>\n\t\t\t\t   <CANT-ORPHAN>\n\t\t\t\t   <RFALSE>)\n\t\t\t\t  (<AND <==? ,P-NAM ,W?BUMP>\n\t\t\t\t\t<==? ,P-NCN 2>\n\t\t\t\t\t,P-NUMBER>\n\t\t\t\t   <PUT .TBL ,P-MATCHLEN 1>\n\t\t\t\t   <PUT .TBL 1 ,BUMP>\n\t\t\t\t   <RETURN>)\n\t\t\t\t  (<AND .VRB ,P-NAM>\n\t\t\t\t   <WHICH-PRINT .TLEN .LEN .TBL>\n\t\t\t\t   <SETG P-ACLAUSE\n\t\t\t\t\t <COND (<==? .TBL ,P-PRSO> ,P-NC1)\n\t\t\t\t\t       (T ,P-NC2)>>\n\t\t\t\t   <SETG P-AADJ ,P-ADJ>\n\t\t\t\t   <SETG P-ANAM ,P-NAM>\n\t\t\t\t   <ORPHAN <> <>>\n\t\t\t\t   <SETG P-OFLAG T>)\n\t\t\t\t  (.VRB\n\t\t\t\t   <TELL \"You must supply a noun!\" CR>)>\n\t\t\t    <SETG P-NAM <>>\n\t\t\t    <SETG P-ADJ <>>\n\t\t\t    <RFALSE>)>)\n\t\t    (<AND <0? .LEN> .GCHECK>\n\t\t     <COND (.VRB\n\t\t\t    <COND (,LIT\n\t\t\t\t   <TELL \"You can't see any\">\n\t\t\t\t   <COND (,P-OFLAG\n\t\t\t\t\t  <COND (<AND ,P-ADJ ,P-NAM>\n\t\t\t\t\t\t <TELL \" such\">)>\n\t\t\t\t\t  <COND (,P-NAM\n\t\t\t\t\t\t <TELL \" \">\n\t\t\t\t\t\t <PRINTB ,P-NAM>)>)\n\t\t\t\t\t (T\n\t\t\t\t\t  <BUFFER-PRINT ,P-CSPTR\n\t\t\t\t\t\t\t,P-CEPTR\n\t\t\t\t\t\t\t<>>)>\n\t\t\t\t   <TELL \" here.\" CR>)\n\t\t\t\t  (T\n\t\t\t\t   <TELL \"It's too dark to see.\" CR>)>)>\n\t\t     <SETG P-NAM <>>\n\t\t     <SETG P-ADJ <>>\n\t\t     <RFALSE>)\n\t\t    (<0? .LEN> <SET GCHECK T> <AGAIN>)>\n\t      <SETG P-ADJ <>>\n\t      <SETG P-NAM <>>\n\t      <SETG P-SLOCBITS .XBITS>\n\t      <RTRUE>>>   "
  },
  "WHICH-PRINT": {
   "name": "WHICH-PRINT",
   "file": "parser.zil",
   "line": 986,
   "endLine": 1005,
   "source": "<ROUTINE WHICH-PRINT (TLEN LEN TBL \"AUX\" OBJ RLEN)\n\t <SET RLEN .LEN>\n\t <TELL \"Which \">\n         <PRINTB ,P-NAM>\n\t <COND (<EQUAL? ,P-NAM ,W?BUMP W?COLUMN>\n\t\t<TELL \" of the ten do you mean?\" CR>\n\t\t<RTRUE>)>\n\t <TELL \" do you mean, \">\n\t <REPEAT ()\n\t\t <SET TLEN <+ .TLEN 1>>\n\t\t <SET OBJ <GET .TBL .TLEN>>\n\t\t <TELL \"the \">\n\t\t <TELL D .OBJ>\n\t\t <COND (<==? .LEN 2>\n\t\t        <COND (<NOT <==? .RLEN 2>> <TELL \",\">)>\n\t\t        <TELL \" or \">)\n\t\t       (<G? .LEN 2> <TELL \", \">)>\n\t\t <COND (<L? <SET LEN <- .LEN 1>> 1>\n\t\t        <TELL \"?\" CR>\n\t\t        <RETURN>)>>>"
  },
  "GLOBAL-CHECK": {
   "name": "GLOBAL-CHECK",
   "file": "parser.zil",
   "line": 1008,
   "endLine": 1041,
   "source": "<ROUTINE GLOBAL-CHECK (TBL \"AUX\" LEN RMG RMGL (CNT 0) OBJ OBITS FOO) \n\t#DECL ((TBL) TABLE (RMG) <OR FALSE TABLE> (RMGL CNT) FIX (OBJ) OBJECT)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<SET OBITS ,P-SLOCBITS>\n\t<COND (<SET RMG <GETPT ,HERE ,P?GLOBAL>>\n\t       <SET RMGL <- <PTSIZE .RMG> 1>>\n\t       <REPEAT ()\n\t\t       <COND (<THIS-IT? <SET OBJ <GETB .RMG .CNT>> .TBL>\n\t\t\t      <OBJ-FOUND .OBJ .TBL>)>\n\t\t       <COND (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<SET RMG <GETPT ,HERE ,P?PSEUDO>>\n\t       <SET RMGL <- </ <PTSIZE .RMG> 4> 1>>\n\t       <SET CNT 0>\n\t       <REPEAT ()\n\t\t       <COND (<==? ,P-NAM <GET .RMG <* .CNT 2>>>\n\t\t\t      <PUTP ,PSEUDO-OBJECT\n\t\t\t\t    ,P?ACTION\n\t\t\t\t    <GET .RMG <+ <* .CNT 2> 1>>>\n\t\t\t      <SET FOO\n\t\t\t\t   <BACK <GETPT ,PSEUDO-OBJECT ,P?ACTION> 5>>\n\t\t\t      <PUT .FOO 0 <GET ,P-NAM 0>>\n\t\t\t      <PUT .FOO 1 <GET ,P-NAM 1>>\n\t\t\t      <OBJ-FOUND ,PSEUDO-OBJECT .TBL>\n\t\t\t      <RETURN>)\n\t\t             (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<==? <GET .TBL ,P-MATCHLEN> .LEN>\n\t       <SETG P-SLOCBITS -1>\n\t       <SETG P-TABLE .TBL>\n\t       <DO-SL ,GLOBAL-OBJECTS 1 1>\n\t       <SETG P-SLOCBITS .OBITS>\n\t       <COND (<0? <GET .TBL ,P-MATCHLEN>>\n\t\t      <COND (<OR <EQUAL? ,PRSA ,V?LOOK-INSIDE ,V?SEARCH>\n\t\t\t\t <EQUAL? ,PRSA ,V?EXAMINE ,V?FIND ,V?THROUGH>>\n\t\t\t     <DO-SL ,ROOMS 1 1>)>)>)>>"
  },
  "DO-SL": {
   "name": "DO-SL",
   "file": "parser.zil",
   "line": 1043,
   "endLine": 1052,
   "source": "<ROUTINE DO-SL (OBJ BIT1 BIT2) \n\t#DECL ((OBJ) OBJECT (BIT1 BIT2) FIX)\n\t<COND (<BTST ,P-SLOCBITS <+ .BIT1 .BIT2>>\n\t       <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCALL>)\n\t      (T\n\t       <COND (<BTST ,P-SLOCBITS .BIT1>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCTOP>)\n\t\t     (<BTST ,P-SLOCBITS .BIT2>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCBOT>)\n\t\t     (T <RTRUE>)>)>>  "
  },
  "SEARCH-LIST": {
   "name": "SEARCH-LIST",
   "file": "parser.zil",
   "line": 1060,
   "endLine": 1088,
   "source": "<ROUTINE SEARCH-LIST (OBJ TBL LVL \"AUX\" FLS NOBJ) \n\t#DECL ((OBJ NOBJ) <OR FALSE OBJECT> (TBL) TABLE (LVL) FIX (FLS) ANY)\n\t<COND (<SET OBJ <FIRST? .OBJ>>\n\t       <REPEAT ()\n\t\t       <COND (<AND <NOT <==? .LVL ,P-SRCBOT>>\n\t\t\t\t   <GETPT .OBJ ,P?SYNONYM>\n\t\t\t\t   <THIS-IT? .OBJ .TBL>>\n\t\t\t      <OBJ-FOUND .OBJ .TBL>)>\n\t\t       <COND (<AND <NOT <FSET? .OBJ ,INVISIBLE>>\n\t\t\t\t   <OR <NOT <==? .LVL ,P-SRCTOP>>\n\t\t\t\t       <FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t       <FSET? .OBJ ,SURFACEBIT>>\n\t\t\t\t   <SET NOBJ <FIRST? .OBJ>>\n\t\t\t\t   <OR <FSET? .OBJ ,OPENBIT>\n\t\t\t\t       <FSET? .OBJ ,TRANSBIT>>>\n\t\t\t      <COND (<AND <==? .LVL ,P-SRCTOP>\n\t\t\t\t\t  <FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t\t  <==? ,P-GETFLAGS ,P-ALL>>\n\t\t\t\t     T)\n\t\t\t\t    (T\n\t\t\t\t     <SET FLS\n\t\t\t\t        <SEARCH-LIST .OBJ\n\t\t\t\t\t\t     .TBL\n\t\t\t\t\t\t<COND (<FSET? .OBJ ,SURFACEBIT>\n\t\t\t\t\t\t       ,P-SRCALL)\n\t\t\t\t\t\t      (<FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t\t\t       ,P-SRCALL)\n\t\t\t\t\t\t      (T ,P-SRCTOP)>>>)>)>\n\t\t       <COND (<SET OBJ <NEXT? .OBJ>>) (T <RETURN>)>>)>> "
  },
  "OBJ-FOUND": {
   "name": "OBJ-FOUND",
   "file": "parser.zil",
   "line": 1090,
   "endLine": 1094,
   "source": "<ROUTINE OBJ-FOUND (OBJ TBL \"AUX\" PTR) \n\t#DECL ((OBJ) OBJECT (TBL) TABLE (PTR) FIX)\n\t<SET PTR <GET .TBL ,P-MATCHLEN>>\n\t<PUT .TBL <+ .PTR 1> .OBJ>\n\t<PUT .TBL ,P-MATCHLEN <+ .PTR 1>>> "
  },
  "TAKE-CHECK": {
   "name": "TAKE-CHECK",
   "file": "parser.zil",
   "line": 1096,
   "endLine": 1098,
   "source": "<ROUTINE TAKE-CHECK () \n\t<AND <ITAKE-CHECK ,P-PRSO <GETB ,P-SYNTAX ,P-SLOC1>>\n\t     <ITAKE-CHECK ,P-PRSI <GETB ,P-SYNTAX ,P-SLOC2>>>> "
  },
  "ITAKE-CHECK": {
   "name": "ITAKE-CHECK",
   "file": "parser.zil",
   "line": 1100,
   "endLine": 1130,
   "source": "<ROUTINE ITAKE-CHECK (TBL IBITS \"AUX\" PTR OBJ TAKEN) \n\t #DECL ((TBL) TABLE (IBITS PTR) FIX (OBJ) OBJECT\n\t\t(TAKEN) <OR FALSE FIX ATOM>)\n\t <COND (<AND <SET PTR <GET .TBL ,P-MATCHLEN>>\n\t\t     <OR <BTST .IBITS ,SHAVE>\n\t\t\t <BTST .IBITS ,STAKE>>>\n\t\t<REPEAT ()\n\t\t\t<COND (<L? <SET PTR <- .PTR 1>> 0> <RETURN>)\n\t\t\t      (T\n\t\t\t       <SET OBJ <GET .TBL <+ .PTR 1>>>\n\t\t\t       <COND (<==? .OBJ ,IT> <SET OBJ ,P-IT-OBJECT>)>\n\t\t\t       <COND (<AND <NOT <HELD? .OBJ>>\n\t\t\t\t\t   <NOT <==? .OBJ ,HANDS>>>\n\t\t\t\t      <SETG PRSO .OBJ>\n\t\t\t\t      <COND (<FSET? .OBJ ,TRYTAKEBIT>\n\t\t\t\t\t     <SET TAKEN T>)\n\t\t\t\t\t    (<NOT <==? ,WINNER ,ADVENTURER>>\n\t\t\t\t\t     <SET TAKEN <>>)\n\t\t\t\t\t    (<AND <BTST .IBITS ,STAKE>\n\t\t\t\t\t\t  <==? <ITAKE <>> T>>\n\t\t\t\t\t     <SET TAKEN <>>)\n\t\t\t\t\t    (T <SET TAKEN T>)>\n\t\t\t\t      <COND (<AND .TAKEN <BTST .IBITS ,SHAVE>>\n\t\t\t\t\t     <TELL \"You don't have the \">\n\t\t\t\t\t     <PRINTD .OBJ>\n\t\t\t\t\t     <TELL \".\" CR>\n\t\t\t\t\t     <RFALSE>)\n\t\t\t\t\t    (<AND <NOT .TAKEN>\n\t\t\t\t\t\t  <==? ,WINNER ,ADVENTURER>>\n\t\t\t\t\t     <TELL \"(Taken)\" CR>)>)>)>>)\n\t       (T)>>  "
  },
  "HELD?": {
   "name": "HELD?",
   "file": "parser.zil",
   "line": 1132,
   "endLine": 1136,
   "source": "<ROUTINE HELD? (CAN)\n\t <REPEAT ()\n\t\t <SET CAN <LOC .CAN>>\n\t\t <COND (<NOT .CAN> <RFALSE>)\n\t\t       (<==? .CAN ,WINNER> <RTRUE>)>>>"
  },
  "MANY-CHECK": {
   "name": "MANY-CHECK",
   "file": "parser.zil",
   "line": 1138,
   "endLine": 1158,
   "source": "<ROUTINE MANY-CHECK (\"AUX\" (LOSS <>) TMP) \n\t#DECL ((LOSS) <OR FALSE FIX>)\n\t<COND (<AND <G? <GET ,P-PRSO ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC1> ,SMANY>>>\n\t       <SET LOSS 1>)\n\t      (<AND <G? <GET ,P-PRSI ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC2> ,SMANY>>>\n\t       <SET LOSS 2>)>\n\t<COND (.LOSS\n\t       <TELL \"I can't use multiple \">\n\t       <COND (<==? .LOSS 2> <TELL \"in\">)>\n\t       <TELL \"direct objects with '\">\n\t       <SET TMP <GET ,P-ITBL ,P-VERBN>>\n\t       <COND (<0? .TMP> <TELL \"tell\">)\n\t\t     (,P-OFLAG\n\t\t      <PRINTB <GET .TMP 0>>)\n\t\t     (T\n\t\t      <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>)>\n\t       <TELL \"'.\" CR>\n\t       <RFALSE>)\n\t      (T)>>  "
  },
  "ZMEMQ": {
   "name": "ZMEMQ",
   "file": "parser.zil",
   "line": 1160,
   "endLine": 1166,
   "source": "<ROUTINE ZMEMQ (ITM TBL \"OPTIONAL\" (SIZE -1) \"AUX\" (CNT 1)) \n\t<COND (<NOT .TBL> <RFALSE>)>\n\t<COND (<NOT <L? .SIZE 0>> <SET CNT 0>)\n\t      (ELSE <SET SIZE <GET .TBL 0>>)>\n\t<REPEAT ()\n\t\t<COND (<==? .ITM <GET .TBL .CNT>> <RTRUE>)\n\t\t      (<IGRTR? CNT .SIZE> <RFALSE>)>>>    "
  },
  "ZMEMQB": {
   "name": "ZMEMQB",
   "file": "parser.zil",
   "line": 1168,
   "endLine": 1172,
   "source": "<ROUTINE ZMEMQB (ITM TBL SIZE \"AUX\" (CNT 0)) \n\t#DECL ((ITM) ANY (TBL) TABLE (SIZE CNT) FIX)\n\t<REPEAT ()\n\t\t<COND (<==? .ITM <GETB .TBL .CNT>> <RTRUE>)\n\t\t      (<IGRTR? CNT .SIZE> <RFALSE>)>>>  "
  },
  "LIT?": {
   "name": "LIT?",
   "file": "parser.zil",
   "line": 1176,
   "endLine": 1191,
   "source": "<ROUTINE LIT? (RM \"AUX\" OHERE (LIT <>)) \n\t#DECL ((RM OHERE) OBJECT (LIT) <OR ATOM FALSE>)\n\t<SETG P-GWIMBIT ,ONBIT>\n\t<SET OHERE ,HERE>\n\t<SETG HERE .RM>\n\t<COND (<OR <FSET? .RM ,ONBIT> ,ALWAYS-LIT> <SET LIT T>)\n\t      (T\n\t       <PUT ,P-MERGE ,P-MATCHLEN 0>\n\t       <SETG P-TABLE ,P-MERGE>\n\t       <SETG P-SLOCBITS -1>\n\t       <COND (<==? .OHERE .RM> <DO-SL ,WINNER 1 1>)>\n\t       <DO-SL .RM 1 1>\n\t       <COND (<G? <GET ,P-TABLE ,P-MATCHLEN> 0> <SET LIT T>)>)>\n\t<SETG HERE .OHERE>\n\t<SETG P-GWIMBIT 0>\n\t.LIT> "
  },
  "PRSO-PRINT": {
   "name": "PRSO-PRINT",
   "file": "parser.zil",
   "line": 1193,
   "endLine": 1197,
   "source": "<ROUTINE PRSO-PRINT (\"AUX\" PTR)\n\t <COND (<OR ,P-MERGED\n\t\t    <==? <GET <SET PTR <GET ,P-ITBL ,P-NC1>> 0> ,W?IT>>\n\t\t<TELL \" \" D ,PRSO>)\n\t       (T <BUFFER-PRINT .PTR <GET ,P-ITBL ,P-NC1L> <>>)>>"
  },
  "PRSI-PRINT": {
   "name": "PRSI-PRINT",
   "file": "parser.zil",
   "line": 1199,
   "endLine": 1203,
   "source": "<ROUTINE PRSI-PRINT (\"AUX\" PTR)\n\t <COND (<OR ,P-MERGED\n\t\t    <==? <GET <SET PTR <GET ,P-ITBL ,P-NC2>> 0> ,W?IT>>\n\t\t<TELL \" \" D ,PRSO>)\n\t       (T <BUFFER-PRINT .PTR <GET ,P-ITBL ,P-NC2L> <>>)>>"
  },
  "THIS-IT?": {
   "name": "THIS-IT?",
   "file": "parser.zil",
   "line": 1205,
   "endLine": 1218,
   "source": "<ROUTINE THIS-IT? (OBJ TBL \"AUX\" SYNS) \n <COND (<FSET? .OBJ ,INVISIBLE> <RFALSE>)\n       (<AND ,P-NAM\n\t     <NOT <ZMEMQ ,P-NAM\n\t\t\t <SET SYNS <GETPT .OBJ ,P?SYNONYM>>\n\t\t\t <- </ <PTSIZE .SYNS> 2> 1>>>>\n\t<RFALSE>)\n       (<AND ,P-ADJ\n\t     <OR <NOT <SET SYNS <GETPT .OBJ ,P?ADJECTIVE>>>\n\t\t <NOT <ZMEMQB ,P-ADJ .SYNS <- <PTSIZE .SYNS> 1>>>>>\n\t<RFALSE>)\n       (<AND <NOT <0? ,P-GWIMBIT>> <NOT <FSET? .OBJ ,P-GWIMBIT>>>\n\t<RFALSE>)>\n <RTRUE>>"
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
  "V-LOOK": {
   "name": "V-LOOK",
   "file": "verbs.zil",
   "line": 32,
   "endLine": 34,
   "source": "<ROUTINE V-LOOK ()\n\t <COND (<DESCRIBE-ROOM T>\n\t\t<DESCRIBE-OBJECTS T>)>>"
  },
  "V-FIRST-LOOK": {
   "name": "V-FIRST-LOOK",
   "file": "verbs.zil",
   "line": 36,
   "endLine": 38,
   "source": "<ROUTINE V-FIRST-LOOK ()\n\t <COND (<DESCRIBE-ROOM>\n\t\t<COND (<NOT ,SUPER-BRIEF> <DESCRIBE-OBJECTS>)>)>>"
  },
  "V-EXAMINE": {
   "name": "V-EXAMINE",
   "file": "verbs.zil",
   "line": 40,
   "endLine": 48,
   "source": "<ROUTINE V-EXAMINE ()\n\t <COND (<GETP ,PRSO ,P?TEXT>\n\t\t<TELL <GETP ,PRSO ,P?TEXT> CR>)\n\t       (<OR <FSET? ,PRSO ,CONTBIT>\n\t\t    <FSET? ,PRSO ,DOORBIT>>\n\t\t<V-LOOK-INSIDE>)\n\t       (ELSE\n\t\t<TELL \"I see nothing special about the \"\n\t\t      D ,PRSO \".\" CR>)>>"
  },
  "DESCRIBE-ROOM": {
   "name": "DESCRIBE-ROOM",
   "file": "verbs.zil",
   "line": 52,
   "endLine": 76,
   "source": "<ROUTINE DESCRIBE-ROOM (\"OPTIONAL\" (LOOK? <>) \"AUX\" V? STR AV)\n\t <SET V? <OR .LOOK? ,VERBOSE>>\n\t <COND (<NOT ,LIT>\n\t\t<TELL\n\"It is pitch black. You are likely to be eaten by a grue.\" CR>\n\t\t<RETURN <>>)>\n\t <COND (<NOT <FSET? ,HERE ,TOUCHBIT>>\n\t\t<FSET ,HERE ,TOUCHBIT>\n\t\t<SET V? T>)>\n\t <COND (<IN? ,HERE ,ROOMS> <TELL D ,HERE CR>)>\n\t <COND (<OR .LOOK? <NOT ,SUPER-BRIEF>>\n\t\t<SET AV <LOC ,WINNER>>\n\t\t<COND (<FSET? .AV ,VEHBIT>\n\t\t       <TELL \"(You are in the \" D .AV \".)\" CR>)>\n\t\t<COND (<AND .V? <APPLY <GETP ,HERE ,P?ACTION> ,M-LOOK>>\n\t\t       <RTRUE>)\n\t\t      (<AND .V? <SET STR <GETP ,HERE ,P?LDESC>>>\n\t\t       <TELL .STR CR>)\n\t\t      (T <APPLY <GETP ,HERE ,P?ACTION> ,M-FLASH>)>\n\t\t<COND (<AND <NOT <==? ,HERE .AV>> <FSET .AV ,VEHBIT>>\n\t\t       <APPLY <GETP .AV ,P?ACTION> ,M-LOOK>)>)>\n\t <COND (<AND <NOT <FSET? ,HERE ,ONBIT>> ,ALWAYS-LIT>\n\t\t<TELL\n\"The room is lit by an emergency lighting system.\" CR>)>\n\t T>"
  },
  "DESCRIBE-OBJECTS": {
   "name": "DESCRIBE-OBJECTS",
   "file": "verbs.zil",
   "line": 78,
   "endLine": 83,
   "source": "<ROUTINE DESCRIBE-OBJECTS (\"OPTIONAL\" (V? <>))\n\t <COND (,LIT\n\t\t<COND (<FIRST? ,HERE>\n\t\t       <PRINT-CONT ,HERE <SET V? <OR .V? ,VERBOSE>> -1>)>)\n\t       (ELSE\n\t\t<TELL \"I can't see anything in the dark.\" CR>)>>"
  },
  "DESCRIBE-OBJECT": {
   "name": "DESCRIBE-OBJECT",
   "file": "verbs.zil",
   "line": 88,
   "endLine": 114,
   "source": "<ROUTINE DESCRIBE-OBJECT (OBJ V? LEVEL \"AUX\" (STR <>) AV)\n\t <COND (<AND <0? .LEVEL>\n\t\t     <APPLY <GETP .OBJ ,P?DESCFCN> ,M-OBJDESC>>\n\t\t<RTRUE>)\n\t       (<AND <0? .LEVEL>\n\t\t     <OR <AND <NOT <FSET? .OBJ ,TOUCHBIT>>\n\t\t\t      <SET STR <GETP .OBJ ,P?FDESC>>>\n\t\t\t <SET STR <GETP .OBJ ,P?LDESC>>>>\n\t\t<TELL .STR>)\n\t       (<0? .LEVEL>\n\t\t<TELL \"There is a \" D .OBJ \" here.\">)\n\t       (ELSE\n\t\t<TELL <GET ,INDENTS .LEVEL>>\n\t\t<TELL \"A \" D .OBJ>\n\t\t<COND (<FSET? .OBJ ,WEARBIT> <TELL \" (being worn)\">)\n\t\t      (<==? .OBJ ,SAFETY-LINE>\n\t\t       <COND (<AND ,THIS-END ,THAT-END>\n\t\t\t      <TELL \" (connecting the suit and a hook)\">)\n\t\t\t     (,THIS-END <TELL \" (tied to the suit)\">)\n\t\t\t     (,THAT-END <TELL \" (tied to a hook)\">)>)>)>\n\t <COND (<AND <0? .LEVEL>\n\t\t     <SET AV <LOC ,WINNER>>\n\t\t     <FSET? .AV ,VEHBIT>>\n\t\t<TELL \" (outside the \" D .AV \")\">)>\n\t <CRLF>\n\t <COND (<AND <SEE-INSIDE? .OBJ> <FIRST? .OBJ>>\n\t\t<PRINT-CONT .OBJ .V? .LEVEL>)>>"
  },
  "PRINT-CONT": {
   "name": "PRINT-CONT",
   "file": "verbs.zil",
   "line": 116,
   "endLine": 162,
   "source": "<ROUTINE PRINT-CONT (OBJ \"OPTIONAL\" (V? <>) (LEVEL 0)\n\t\t     \"AUX\" Y 1ST? AV STR (PV? <>) (INV? <>))\n\t #DECL ((OBJ) OBJECT (LEVEL) FIX)\n\t <COND (<NOT <SET Y <FIRST? .OBJ>>> <RTRUE>)>\n\t <COND (<AND <SET AV <LOC ,WINNER>> <FSET? .AV ,VEHBIT>>\n\t\tT)\n\t       (ELSE <SET AV <>>)>\n\t <SET 1ST? T>\n\t <COND (<EQUAL? ,WINNER .OBJ <LOC .OBJ>>\n\t\t<SET INV? T>)\n\t       (ELSE\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT .Y> <RETURN <NOT .1ST?>>)\n\t\t\t      (<==? .Y .AV> <SET PV? T>)\n\t\t\t      (<==? .Y ,WINNER>)\n\t\t\t      (<AND <NOT <FSET? .Y ,INVISIBLE>>\n\t\t\t\t    <NOT <FSET? .Y ,TOUCHBIT>>\n\t\t\t\t    <SET STR <GETP .Y ,P?FDESC>>>\n\t\t\t       <COND (<NOT <FSET? .Y ,NDESCBIT>>\n\t\t\t\t      <TELL .STR CR>)>\n\t\t\t       <COND (<AND <SEE-INSIDE? .Y>\n\t\t\t\t\t   <NOT <GETP <LOC .Y> ,P?DESCFCN>>\n\t\t\t\t\t   <FIRST? .Y>>\n\t\t\t\t      <PRINT-CONT .Y .V? 0>)>)>\n\t\t\t<SET Y <NEXT? .Y>>>)>\n\t <SET Y <FIRST? .OBJ>>\n\t <REPEAT ()\n\t\t <COND (<NOT .Y>\n\t\t\t<COND (<AND .PV? .AV <FIRST? .AV>>\n\t\t\t       <PRINT-CONT .AV .V? .LEVEL>)>\n\t\t\t<RETURN <NOT .1ST?>>)\n\t\t       (<EQUAL? .Y .AV ,ADVENTURER>)\n\t\t       (<AND <NOT <FSET? .Y ,INVISIBLE>>\n\t\t\t     <OR .INV?\n\t\t\t\t <FSET? .Y ,TOUCHBIT>\n\t\t\t\t <NOT <GETP .Y ,P?FDESC>>>>\n\t\t\t<COND (<NOT <FSET? .Y ,NDESCBIT>>\n\t\t\t       <COND (.1ST?\n\t\t\t\t      <COND (<FIRSTER .OBJ .LEVEL>\n\t\t\t\t\t     <COND (<L? .LEVEL 0>\n\t\t\t\t\t\t    <SET LEVEL 0>)>)>\n\t\t\t\t      <SET LEVEL <+ 1 .LEVEL>>\n\t\t\t\t      <SET 1ST? <>>)>\n\t\t\t       <DESCRIBE-OBJECT .Y .V? .LEVEL>)\n\t\t\t      (<AND <FIRST? .Y> <SEE-INSIDE? .Y>>\n\t\t\t       <PRINT-CONT .Y .V? .LEVEL>)>)>\n\t\t <SET Y <NEXT? .Y>>>>"
  },
  "FIRSTER": {
   "name": "FIRSTER",
   "file": "verbs.zil",
   "line": 164,
   "endLine": 181,
   "source": "<ROUTINE FIRSTER (OBJ LEVEL)\n\t <COND (<==? .OBJ ,WINNER>\n\t\t<TELL \"You are carrying:\" CR>)\n\t       (<NOT <IN? .OBJ ,ROOMS>>\n\t\t<COND (<G? .LEVEL 0>\n\t\t       <TELL <GET ,INDENTS .LEVEL>>)>\n\t\t<COND (<==? .OBJ ,TRASH-BIN>\n\t\t       <TELL\n\"Among the trash near the top of the bin you see:\" CR>)\n\t\t      (<FSET? .OBJ ,SURFACEBIT>\n\t\t       <TELL\n\"Sitting on the \" D .OBJ \" is:\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"The \" D .OBJ \" contains:\" CR>)>)\n\t       (<FSET? .OBJ ,RMUNGBIT>\n\t\t<TELL\n\"Floating nearby is: \" CR>)>>"
  },
  "SCORE-UPD": {
   "name": "SCORE-UPD",
   "file": "verbs.zil",
   "line": 191,
   "endLine": 194,
   "source": "<ROUTINE SCORE-UPD (NUM)\n\t #DECL ((NUM) FIX)\n\t <SETG SCORE <+ ,SCORE .NUM>>\n\t T>"
  },
  "SCORE-OBJ": {
   "name": "SCORE-OBJ",
   "file": "verbs.zil",
   "line": 196,
   "endLine": 201,
   "source": "<ROUTINE SCORE-OBJ (OBJ)\n\t #DECL ((OBJ) OBJECT (TEMP) FIX)\n\t <COND (<G? <GETP .OBJ ,P?VALUE> 0>\n\t\t<FSET .OBJ ,TOUCHBIT>\n\t\t<SCORE-UPD <GETP .OBJ ,P?VALUE>>\n\t\t<PUTP .OBJ ,P?VALUE 0>)>>"
  },
  "V-SCORE": {
   "name": "V-SCORE",
   "file": "verbs.zil",
   "line": 205,
   "endLine": 226,
   "source": "<ROUTINE V-SCORE (\"OPTIONAL\" (ASK? T))\n\t #DECL ((ASK?) <OR ATOM FALSE>)\n\t <TELL \"Your score \">\n\t <COND (.ASK? <TELL \"would be \">) (ELSE <TELL \"is \">)>\n\t <TELL N ,SCORE>\n\t <TELL \" (total of \">\n\t <TELL N ,SCORE-MAX>\n\t <TELL \" points), in \">\n\t <TELL N ,MOVES>\n\t <COND (<1? ,MOVES> <TELL \" move.\">) (ELSE <TELL \" moves.\">)>\n\t <CRLF>\n\t <TELL \"This score gives you the rank of \">\n\t <COND (,WON-FLAG <TELL \"Galactic Overlord\">)\n\t       (<G? ,SCORE 360> <TELL \"Cluster Admiral\">)\n\t       (<G? ,SCORE 320> <TELL \"System Captain\">)\n\t       (<G? ,SCORE 240> <TELL \"Planetary Commodore\">)\n\t       (<G? ,SCORE 160> <TELL \"Lieutenant\">)\n\t       (<G? ,SCORE 80> <TELL \"Ensign\">)\n\t       (<G? ,SCORE 40> <TELL \"Space Cadet\">)\n\t       (T <TELL \"Beginner\">)>\n\t <TELL \".\" CR>\n\t ,SCORE>"
  },
  "FINISH": {
   "name": "FINISH",
   "file": "verbs.zil",
   "line": 228,
   "endLine": 230,
   "source": "<ROUTINE FINISH ()\n\t <V-SCORE>\n\t <QUIT>>"
  },
  "V-QUIT": {
   "name": "V-QUIT",
   "file": "verbs.zil",
   "line": 232,
   "endLine": 241,
   "source": "<ROUTINE V-QUIT (\"OPTIONAL\" (ASK? T) \"AUX\" SCOR)\n\t #DECL ((ASK?) <OR ATOM <PRIMTYPE LIST>> (SCOR) FIX)\n\t <V-SCORE>\n\t <COND (<OR <AND .ASK?\n\t\t\t <TELL\n\"Do you wish to leave the game? (Y is affirmative): \">\n\t\t\t <YES?>>\n\t\t    <NOT .ASK?>>\n\t\t<QUIT>)\n\t       (ELSE <TELL \"Ok.\" CR>)>>"
  },
  "YES?": {
   "name": "YES?",
   "file": "verbs.zil",
   "line": 243,
   "endLine": 249,
   "source": "<ROUTINE YES? ()\n\t <PRINTI \">\">\n\t <READ ,P-INBUF ,P-LEXV>\n\t <COND (<EQUAL? <GET ,P-LEXV 1> ,W?YES ,W?Y>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "V-VERSION": {
   "name": "V-VERSION",
   "file": "verbs.zil",
   "line": 251,
   "endLine": 265,
   "source": "<ROUTINE V-VERSION (\"AUX\" (CNT 17))\n\t <TELL\n\"STARCROSS|\nInfocom interactive fiction - a science-fiction story|\nCopyright (c) 1982 by Infocom, Inc.  All rights reserved.|\nSTARCROSS is a registered trademark of Infocom, Inc.|\nRelease \">\n\t <PRINTN <BAND <GET 0 1> *3777*>>\n\t <TELL \" / Serial number \">\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> 23>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<PRINTC <GETB 0 .CNT>>)>>\n\t <CRLF>>"
  },
  "V-AGAIN": {
   "name": "V-AGAIN",
   "file": "verbs.zil",
   "line": 283,
   "endLine": 306,
   "source": "<ROUTINE V-AGAIN (\"AUX\" CONT LEXV INBUF V)\n\t <SET LEXV <TABLE 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n\t\t    \t  0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n\t\t    \t  0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0>>\n\t <SET INBUF <TABLE 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n\t\t    \t   0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n\t\t    \t   0 0 0 0 0 0 0 0 0 0>>\n\t <COND (<0? ,P-LEN> <SET CONT <>>)\n\t       (T <SET CONT ,P-CONT>)>\n\t <TABLE-COPY ,P-LEXV .LEXV 60 ;120>\n\t <TABLE-COPY ,P-INBUF .INBUF 50 ;100>\n\t <TABLE-COPY ,A-LEXV ,P-LEXV 60 ;120>\n\t <TABLE-COPY ,A-INBUF ,P-INBUF 50 ;100>\n\t <SETG P-CONT ,A-PTR>\n\t <SETG NOT-AGAIN <>>\n\t <SET V <MAIN-LOOP>>\n\t <SETG NOT-AGAIN 1>\n\t <SETG PRSA ,V?AGAIN>\n\t <COND (<==? .V ,M-FATAL>\n\t\t<SETG P-CONT <>>)\n\t       (T <SETG P-CONT .CONT>)>\n\t <TABLE-COPY .LEXV ,P-LEXV 60 ;120>\n\t <TABLE-COPY .INBUF ,P-INBUF 50 ;100>\n\t <RETURN .V>>"
  },
  "JIGS-UP": {
   "name": "JIGS-UP",
   "file": "verbs.zil",
   "line": 315,
   "endLine": 378,
   "source": "<ROUTINE JIGS-UP (DESC \"OPTIONAL\" (PLAYER? <>))\n \t <TELL .DESC CR>\n\t <PROG ()\n\t       <SCORE-UPD -10>\n\t       <TELL \"\n|    ****  You have died  ****\n|\n|\">\n\t         <SETG DEATHS <+ ,DEATHS 1>>\n\t\t <COND (<==? ,DEATHS 4>\n\t\t\t<COND (,DOCKED?\n\t\t\t       <TELL\n\"The expressionless voice seems despairing. \\\"Four failures. They would not\nbe pleased. Such promising candidates, too. If only...\\\"\nThe voice trails off into background hiss. Nothing more happens, ever.\" CR>)\n\t\t\t      (ELSE\n\t\t\t       <TELL\n\"This time, you aren't given another chance.\" CR>)>\n\t\t\t<FINISH>)\n\t\t       (<G? ,POISON-COUNT 3>\n\t\t\t<TELL\n\"An expressionless voice seems to be trying to express outrage, but not\nsuccessfully. \\\"The candidate has not made the necessary repairs in time.\nThis is a disaster. All are now dead, and repairs are\nnot possible. They would not approve. This area will be marked, that is\ncertain.\\\" Everything fades to black, and silence reigns.\" CR>\n\t\t\t<FINISH>)>\n\t\t <RANDOMIZE-OBJECTS>\n\t\t <COND (<FSET? ,RED-THREE ,TOUCHBIT>\n\t\t\t<MOVE ,WINNER ,RED-THREE>)\n\t\t       (ELSE\n\t\t\t<SETG IN-ARTIFACT? <>>\n\t\t\t<FCLEAR ,AIRLOCK-OUTER ,OPENBIT>\n\t\t\t<FCLEAR ,AIRLOCK-INNER ,OPENBIT>\n\t\t\t<MOVE ,WINNER ,SPACESHIP-BRIDGE>\n\t\t\t<MOVE ,SPACESUIT ,SPACESHIP-STORES>)>\n\t\t <COND (,DOCKED?\n\t\t\t<TELL\n\"You hear, if that is the right word, an expressionless voice. It seems\nto be inside your head.  \\\"This is not promising. The candidate does not\ndeserve another chance, but the instructions are explicit. There are not\neven any more docking ports. They would be disappointed if they knew.\\\"\nYou wake to a brief glimpse of a pallet (on which you are lying) surrounded\nby metallic threads. The whole apparatus begins to vibrate and you feel very\ndizzy. As you lose consciousness, you realize that you can't see the rest of\nyour body. There is a feeling of dislocation, and then...\" CR>)\n\t\t       (ELSE\n\t\t\t<TELL\n\"You wake to find yourself alive, on board the \\\"Starcross.\\\" It appears\nyou have been given another chance.\" CR>)>\n\t\t <SETG LIT T>\n\t\t <FCLEAR ,SPACESUIT ,WEARBIT>\n\t\t <SETG SUIT-ON? <>>\n\t\t <SETG THIS-END <>>\n\t\t <SETG THAT-END <>>\n\t\t <SETG P-CONT <>>\n\t\t <SETG COUNTDOWN <>>\n\t\t <SETG R-VALUE 0>\n\t\t <SETG PHI-VALUE 0>\n\t\t <SETG THETA-VALUE 0>\n\t\t <SETG LOST <>>\n\t\t <SETG GIVE-UP <>>\n\t\t <KILL-INTERRUPTS>\n\t\t <RFATAL>>>"
  },
  "RANDOMIZE-OBJECTS": {
   "name": "RANDOMIZE-OBJECTS",
   "file": "verbs.zil",
   "line": 380,
   "endLine": 392,
   "source": "<ROUTINE RANDOMIZE-OBJECTS (\"AUX\" (R <>) F N L)\n\t <SET N <FIRST? ,WINNER>>\n\t <REPEAT ()\n\t\t <SET F .N>\n\t\t <COND (<NOT .F> <RETURN>)>\n\t\t <SET N <NEXT? .F>>\n\t\t <COND (<FSET? ,RED-THREE ,TOUCHBIT>\n\t\t\t<COND (<FSET? .F ,KEYBIT> <MOVE .F ,HERE>)\n\t\t\t      (ELSE <MOVE .F ,RED-LOCK>)>)\n\t\t       (ELSE\n\t\t\t<COND (<FSET? .F ,KEYBIT> <MOVE .F ,HERE>)\n\t\t\t      (ELSE\n\t\t\t       <MOVE .F ,SPACESHIP-STORES>)>)>>>"
  },
  "KILL-INTERRUPTS": {
   "name": "KILL-INTERRUPTS",
   "file": "verbs.zil",
   "line": 394,
   "endLine": 396,
   "source": "<ROUTINE KILL-INTERRUPTS ()\n\t <DISABLE <INT I-BURN>>\n\t <RTRUE>>"
  },
  "V-RESTORE": {
   "name": "V-RESTORE",
   "file": "verbs.zil",
   "line": 398,
   "endLine": 403,
   "source": "<ROUTINE V-RESTORE ()\n\t <COND (<RESTORE>\n\t\t<TELL \"Ok.\" CR>\n\t\t<V-FIRST-LOOK>)\n\t       (T\n\t\t<TELL \"Failed.\" CR>)>>"
  },
  "V-SAVE": {
   "name": "V-SAVE",
   "file": "verbs.zil",
   "line": 405,
   "endLine": 409,
   "source": "<ROUTINE V-SAVE ()\n\t <COND (<SAVE>\n\t        <TELL \"Ok.\" CR>)\n\t       (T\n\t\t<TELL \"Failed.\" CR>)>>"
  },
  "V-RESTART": {
   "name": "V-RESTART",
   "file": "verbs.zil",
   "line": 411,
   "endLine": 417,
   "source": "<ROUTINE V-RESTART ()\n\t <V-SCORE T>\n\t <TELL \"Do you wish to restart? (Y is affirmative): \">\n\t <COND (<YES?>\n\t\t<TELL \"Restarting.\" CR>\n\t\t<RESTART>\n\t\t<TELL \"Failed.\" CR>)>>"
  },
  "V-WALK-AROUND": {
   "name": "V-WALK-AROUND",
   "file": "verbs.zil",
   "line": 433,
   "endLine": 434,
   "source": "<ROUTINE V-WALK-AROUND ()\n\t <TELL \"Use directions for movement here.\" CR>>"
  },
  "V-LAUNCH": {
   "name": "V-LAUNCH",
   "file": "verbs.zil",
   "line": 436,
   "endLine": 437,
   "source": "<ROUTINE V-LAUNCH ()\n\t <TELL \"You can't launch that!\" CR>>"
  },
  "GO-NEXT": {
   "name": "GO-NEXT",
   "file": "verbs.zil",
   "line": 439,
   "endLine": 442,
   "source": "<ROUTINE GO-NEXT (TBL \"AUX\" VAL)\n\t #DECL ((TBL) TABLE (VAL) ANY)\n\t <COND (<SET VAL <LKP ,HERE .TBL>>\n\t\t<GOTO .VAL>)>>"
  },
  "LKP": {
   "name": "LKP",
   "file": "verbs.zil",
   "line": 444,
   "endLine": 452,
   "source": "<ROUTINE LKP (ITM TBL \"AUX\" (CNT 0) (LEN <GET .TBL 0>))\n\t #DECL ((ITM) ANY (TBL) TABLE (CNT LEN) FIX)\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> .LEN>\n\t\t\t<RFALSE>)\n\t\t       (<==? <GET .TBL .CNT> .ITM>\n\t\t\t<COND (<==? .CNT .LEN> <RFALSE>)\n\t\t\t      (T\n\t\t\t       <RETURN <GET .TBL <+ .CNT 1>>>)>)>>>"
  },
  "V-WALK": {
   "name": "V-WALK",
   "file": "verbs.zil",
   "line": 454,
   "endLine": 493,
   "source": "<ROUTINE V-WALK (\"AUX\" PT PTS STR OBJ RM)\n\t <COND (<NOT ,P-WALK-DIR>\n\t\t<PERFORM ,V?WALK-TO ,PRSO>\n\t\t<RTRUE>)\n\t       (<SET PT <GETPT ,HERE ,PRSO>>\n\t\t<COND (<==? <SET PTS <PTSIZE .PT>> ,UEXIT>\n\t\t       <GOTO <GETB .PT ,REXIT>>)\n\t\t      (<==? .PTS ,NEXIT>\n\t\t       <TELL <GET .PT ,NEXITSTR> CR>\n\t\t       <RFATAL>)\n\t\t      (<==? .PTS ,FEXIT>\n\t\t       <COND (<SET RM <APPLY <GET .PT ,FEXITFCN>>>\n\t\t\t      <GOTO .RM>)\n\t\t\t     (T\n\t\t\t      <RFATAL>)>)\n\t\t      (<==? .PTS ,CEXIT>\n\t\t       <COND (<VALUE <GETB .PT ,CEXITFLAG>>\n\t\t\t      <GOTO <GETB .PT ,REXIT>>)\n\t\t\t     (<SET STR <GET .PT ,CEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <TELL \"You can't go that way.\" CR>\n\t\t\t      <RFATAL>)>)\n\t\t      (<==? .PTS ,DEXIT>\n\t\t       <COND (<FSET? <SET OBJ <GETB .PT ,DEXITOBJ>> ,OPENBIT>\n\t\t\t      <GOTO <GETB .PT ,REXIT>>)\n\t\t\t     (<SET STR <GET .PT ,DEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <TELL \"The \" D .OBJ \" is closed.\" CR>\n\t\t\t      <THIS-IS-IT .OBJ>\n\t\t\t      <RFATAL>)>)>)\n\t       (<AND <NOT ,LIT> <PROB 75>>\n\t\t<JIGS-UP\n\"Oh, no! You have walked into the slavering fangs of a lurking grue!\">)\n\t       (T\n\t\t<TELL \"You can't go that way.\" CR>\n\t\t<RFATAL>)>>"
  },
  "THIS-IS-IT": {
   "name": "THIS-IS-IT",
   "file": "verbs.zil",
   "line": 495,
   "endLine": 497,
   "source": "<ROUTINE THIS-IS-IT (OBJ)\n\t <SETG P-IT-OBJECT .OBJ>\n\t <SETG P-IT-LOC ,HERE>>"
  },
  "V-INVENTORY": {
   "name": "V-INVENTORY",
   "file": "verbs.zil",
   "line": 499,
   "endLine": 501,
   "source": "<ROUTINE V-INVENTORY ()\n\t <COND (<FIRST? ,WINNER> <PRINT-CONT ,WINNER>)\n\t       (T <TELL \"You are empty handed.\" CR>)>>"
  },
  "PRE-TAKE": {
   "name": "PRE-TAKE",
   "file": "verbs.zil",
   "line": 513,
   "endLine": 525,
   "source": "<ROUTINE PRE-TAKE ()\n\t <COND (<IN? ,PRSO ,WINNER> <TELL \"You already have it.\" CR>)\n\t       (<AND <FSET? <LOC ,PRSO> ,CONTBIT>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<TELL \"I can't reach that.\" CR>\n\t\t<RTRUE>)\n\t       (<AND ,PRSI <NOT <==? ,PRSO ,SPEAR>>>\n\t\t<COND (<NOT <==? ,PRSI <LOC ,PRSO>>>\n\t\t       <TELL \"It's not in that!\" CR>)\n\t\t      (T\n\t\t       <SETG PRSI <>>\n\t\t       <RFALSE>)>)\n\t       (<==? ,PRSO <LOC ,WINNER>> <TELL \"You are in it, loser!\" CR>)>>"
  },
  "V-TAKE": {
   "name": "V-TAKE",
   "file": "verbs.zil",
   "line": 527,
   "endLine": 529,
   "source": "<ROUTINE V-TAKE ()\n\t <COND (<==? <ITAKE> T>\n\t\t<TELL \"Taken.\" CR>)>>"
  },
  "TRYTAKE": {
   "name": "TRYTAKE",
   "file": "verbs.zil",
   "line": 534,
   "endLine": 540,
   "source": "<ROUTINE TRYTAKE ()\n\t <COND (<IN? ,PRSO ,WINNER> <RTRUE>)\n\t       (<AND <FSET? ,PRSO ,TRYTAKEBIT>\n\t\t     <GETP ,PRSO ,P?ACTION>>\n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<IN? ,PRSO ,WINNER>)\n\t       (ELSE <ITAKE>)>>"
  },
  "ITAKE": {
   "name": "ITAKE",
   "file": "verbs.zil",
   "line": 542,
   "endLine": 584,
   "source": "<ROUTINE ITAKE (\"OPTIONAL\" (VB T) \"AUX\" CNT OBJ WLOC)\n\t #DECL ((VB) <OR ATOM FALSE> (CNT) FIX (OBJ) OBJECT)\n\t <COND (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t\t<COND (.VB\n\t\t       <TELL <PICK-ONE ,YUKS> CR>)>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? <LOC ,PRSO> ,WINNER>>\n\t\t     <G? <+ <WEIGHT ,PRSO> <WEIGHT ,WINNER>> ,LOAD-ALLOWED>>\n\t\t<COND (.VB\n\t\t       <TELL \"Your load is too heavy.\" CR>)>\n\t\t<RFATAL>)\n\t       (<AND <G? <SET CNT <CCOUNT ,WINNER>> ,FUMBLE-NUMBER>\n\t\t     <PROB <* .CNT ,FUMBLE-PROB>>>\n\t\t<SET OBJ <FIRST? ,WINNER>>\n\t\t<SET OBJ <NEXT? .OBJ>>\n\t\t;\"This must go!  Chomping compiler strikes again\"\n\t\t<TELL\n\"Oh, no. The \" D .OBJ \" slips from your arms while taking the \"\nD ,PRSO \" and both tumble to the floor.\" CR>\n\t\t<SET WLOC <LOC ,WINNER>>\n\t\t<COND (<==? ,PRSO ,UNDER-GLOBE>\n\t\t       <SETG UNDER-GLOBE <>>\n\t\t       <FCLEAR ,PRSO ,NDESCBIT>)>\n\t\t<COND (<OR <FSET? .WLOC ,RMUNGBIT>\n\t\t\t   <EQUAL? .WLOC\n\t\t\t\t   ,UP-A-TREE\n\t\t\t\t   ,TREETOP-ROOM\n\t\t\t\t   ,DRIVE-BUBBLE-ENTRANCE>\n\t\t\t   <EQUAL? .WLOC\n\t\t\t\t   ,CONTROL-BUBBLE-ENTRANCE>>\n\t\t       <PERFORM ,V?DROP .OBJ>\n\t\t       <MOVE ,PRSO ,WINNER>\n\t\t       <PERFORM ,V?DROP ,PRSO>)\n\t\t      (ELSE\n\t\t       <MOVE .OBJ .WLOC>\n\t\t       <MOVE ,PRSO .WLOC>)>\n\t\t<RFATAL>)\n\t       (T\n\t\t<MOVE ,PRSO ,WINNER>\n\t\t<FCLEAR ,PRSO ,NDESCBIT>\n\t\t<SCORE-OBJ ,PRSO>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<RTRUE>)>>"
  },
  "PRE-PUT": {
   "name": "PRE-PUT",
   "file": "verbs.zil",
   "line": 594,
   "endLine": 597,
   "source": "<ROUTINE PRE-PUT ()\n\t <COND (<OR <IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t    <NOT <FSET? ,PRSO ,TAKEBIT>>>\n\t\t<TELL \"Nice try.\" CR>)>>"
  },
  "V-PUT": {
   "name": "V-PUT",
   "file": "verbs.zil",
   "line": 599,
   "endLine": 623,
   "source": "<ROUTINE V-PUT ()\n\t <COND (<OR <FSET? ,PRSI ,OPENBIT>\n\t\t    <OPENABLE? ,PRSI>\n\t\t    <FSET? ,PRSI ,VEHBIT>>)\n\t       (T\n\t\t<TELL \"I can't do that.\" CR>\n\t\t<RTRUE>)>\n\t <COND (<NOT <FSET? ,PRSI ,OPENBIT>>\n\t\t<TELL \"The \" D ,PRSI \" isn't open.\" CR>)\n\t       (<==? ,PRSI ,PRSO>\n\t\t<TELL \"How can you do that?\" CR>)\n\t       (<IN? ,PRSO ,PRSI>\n\t\t<TELL \"The \" D ,PRSO \" is already in the \" D ,PRSI \".\" CR>)\n\t       (<G? <- <+ <WEIGHT ,PRSI> <WEIGHT ,PRSO>>\n\t\t       <GETP ,PRSI ,P?SIZE>>\n\t\t    <GETP ,PRSI ,P?CAPACITY>>\n\t\t<TELL \"There's no room.\" CR>)\n\t       (<AND <NOT <HELD? ,PRSO>>\n\t\t     <NOT <TRYTAKE>>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<SCORE-OBJ ,PRSO>\n\t\t<MOVE ,PRSO ,PRSI>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<TELL \"Done.\" CR>)>>"
  },
  "PRE-DROP": {
   "name": "PRE-DROP",
   "file": "verbs.zil",
   "line": 625,
   "endLine": 628,
   "source": "<ROUTINE PRE-DROP ()\n\t <COND (<==? ,PRSO <LOC ,WINNER>>\n\t\t<PERFORM ,V?DISEMBARK ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "PRE-SZAP": {
   "name": "PRE-SZAP",
   "file": "verbs.zil",
   "line": 632,
   "endLine": 634,
   "source": "<ROUTINE PRE-SZAP ()\n\t <PERFORM ,V?ZAP ,PRSI ,PRSO>\n\t <RTRUE>>"
  },
  "PRE-ZAP": {
   "name": "PRE-ZAP",
   "file": "verbs.zil",
   "line": 638,
   "endLine": 645,
   "source": "<ROUTINE PRE-ZAP ()\n\t <COND (,PRSI <RFALSE>)\n\t       (<FSET? ,PRSO ,WEAPONBIT> <RFALSE>)\n\t       (<IN? ,ZAP-GUN ,WINNER>\n\t\t<PERFORM ,V?ZAP ,ZAP-GUN ,PRSO>\n\t\t<RTRUE>)\n\t       (ELSE <TELL\n\"You have nothing to shoot the \" D ,PRSO \" with.\" CR>)>>"
  },
  "DONT-HAVE": {
   "name": "DONT-HAVE",
   "file": "verbs.zil",
   "line": 647,
   "endLine": 648,
   "source": "<ROUTINE DONT-HAVE (OBJ)\n\t <TELL \"You don't have the \" D .OBJ \".\" CR>>"
  },
  "V-ZAP": {
   "name": "V-ZAP",
   "file": "verbs.zil",
   "line": 650,
   "endLine": 656,
   "source": "<ROUTINE V-ZAP ()\n\t <COND (<NOT <IN? ,PRSO ,WINNER>>\n\t\t<DONT-HAVE ,PRSO>)\n\t       (<NOT <FSET? ,PRSO ,WEAPONBIT>>\n\t\t<TELL \"You can't use a \" D ,PRSO \" as a ray gun!\" CR>)\n\t       (<NOT ,PRSI> <TELL \"At what?\" CR>)\n\t       (ELSE <TELL \"Nothing happens.\" CR>)>>"
  },
  "V-SZAP": {
   "name": "V-SZAP",
   "file": "verbs.zil",
   "line": 658,
   "endLine": 659,
   "source": "<ROUTINE V-SZAP ()\n\t <TELL \"ZAPPP!!\" CR>>"
  },
  "PRE-GIVE": {
   "name": "PRE-GIVE",
   "file": "verbs.zil",
   "line": 661,
   "endLine": 664,
   "source": "<ROUTINE PRE-GIVE ()\n\t <COND (<NOT <HELD? ,PRSO>>\n\t\t<TELL \n\"That's easy for you to say since you don't even have it.\" CR>)>>"
  },
  "PRE-SGIVE": {
   "name": "PRE-SGIVE",
   "file": "verbs.zil",
   "line": 666,
   "endLine": 668,
   "source": "<ROUTINE PRE-SGIVE ()\n\t <PERFORM ,V?GIVE ,PRSI ,PRSO>\n\t <RTRUE>>"
  },
  "V-GIVE": {
   "name": "V-GIVE",
   "file": "verbs.zil",
   "line": 670,
   "endLine": 673,
   "source": "<ROUTINE V-GIVE ()\n\t <COND (<NOT <FSET? ,PRSI ,VICBIT>>\n\t\t<TELL \"You can't give a \" D ,PRSO \" to a \" D ,PRSI \"!\" CR>)\n\t       (<IDROP> <TELL \"Given.\" CR>)>>"
  },
  "V-SGIVE": {
   "name": "V-SGIVE",
   "file": "verbs.zil",
   "line": 675,
   "endLine": 676,
   "source": "<ROUTINE V-SGIVE ()\n\t <TELL \"FOOOO!!\" CR>>"
  },
  "V-DROP": {
   "name": "V-DROP",
   "file": "verbs.zil",
   "line": 678,
   "endLine": 678,
   "source": "<ROUTINE V-DROP () <COND (<IDROP> <TELL \"Dropped.\" CR>)>>"
  },
  "V-THROW": {
   "name": "V-THROW",
   "file": "verbs.zil",
   "line": 680,
   "endLine": 680,
   "source": "<ROUTINE V-THROW () <COND (<IDROP> <TELL \"Thrown.\" CR>)>>"
  },
  "IDROP": {
   "name": "IDROP",
   "file": "verbs.zil",
   "line": 682,
   "endLine": 693,
   "source": "<ROUTINE IDROP ()\n\t <COND (<EQUAL? <LOC ,PRSO> ,GLOBAL-OBJECTS ,LOCAL-GLOBALS>\n\t\t<TELL \"You can't throw that.\" CR>\n\t\t<RFALSE>)\n\t       (<NOT <HELD? ,PRSO>>\n\t\t<TELL \"You're not carrying the \" D ,PRSO \".\" CR>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? ,PRSO ,WINNER>>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<TELL \"The \" D ,PRSO \" is closed.\" CR>\n\t\t<RFALSE>)\n\t       (T <MOVE ,PRSO <LOC ,WINNER>> <RTRUE>)>>"
  },
  "ALREADY": {
   "name": "ALREADY",
   "file": "verbs.zil",
   "line": 697,
   "endLine": 702,
   "source": "<ROUTINE ALREADY (ON-OFF \"OPTIONAL\" (OBJ <>))\n\t <COND (.OBJ\n\t\t<TELL \"The \" D .OBJ \" is \">)\n\t       (ELSE\n\t\t<TELL \"It's \">)>\n\t <TELL \"already \" .ON-OFF \".\" CR>>"
  },
  "V-OPEN": {
   "name": "V-OPEN",
   "file": "verbs.zil",
   "line": 704,
   "endLine": 726,
   "source": "<ROUTINE V-OPEN (\"AUX\" F STR)\n\t <COND (<NOT <FSET? ,PRSO ,CONTBIT>>\n\t\t<TELL\n\"You must be very clever to do that to the \" D ,PRSO \".\" CR>)\n\t       (<OR <FSET? ,PRSO ,DOORBIT>\n\t\t    <NOT <==? <GETP ,PRSO ,P?CAPACITY> 0>>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT> <ALREADY \"open\">)\n\t\t      (T\n\t\t       <FSET ,PRSO ,OPENBIT>\n\t\t       <COND (<FSET? ,PRSO ,DOORBIT>\n\t\t\t      <TELL \"The \" D ,PRSO \" is now open.\" CR>)\n\t\t\t     (<OR <NOT <FIRST? ,PRSO>> <FSET? ,PRSO ,TRANSBIT>>\n\t\t\t      <TELL \"Opened.\" CR>)\n\t\t\t     (<AND <SET F <FIRST? ,PRSO>>\n\t\t\t\t   <NOT <NEXT? .F>>\n\t\t\t\t   <SET STR <GETP .F ,P?FDESC>>>\n\t\t\t      <TELL \"The \" D ,PRSO \" opens.\" CR>\n\t\t\t      <TELL .STR CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"Opening the \" D ,PRSO \" reveals \">\n\t\t\t      <PRINT-CONTENTS ,PRSO>\n\t\t\t      <TELL \".\" CR>)>)>)\n\t       (T <TELL \"The \" D ,PRSO \" cannot be opened.\" CR>)>>"
  },
  "PRINT-CONTENTS": {
   "name": "PRINT-CONTENTS",
   "file": "verbs.zil",
   "line": 728,
   "endLine": 739,
   "source": "<ROUTINE PRINT-CONTENTS (OBJ \"AUX\" F N (1ST? T))\n\t #DECL ((OBJ) OBJECT (F N) <OR FALSE OBJECT>)\n\t <COND (<SET F <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<SET N <NEXT? .F>>\n\t\t\t<COND (.1ST? <SET 1ST? <>>)\n\t\t\t      (ELSE\n\t\t\t       <TELL \", \">\n\t\t\t       <COND (<NOT .N> <TELL \"and \">)>)>\n\t\t\t<TELL \"a \" D .F>\n\t\t\t<SET F .N>\n\t\t\t<COND (<NOT .F> <RETURN>)>>)>>"
  },
  "V-CLOSE": {
   "name": "V-CLOSE",
   "file": "verbs.zil",
   "line": 741,
   "endLine": 752,
   "source": "<ROUTINE V-CLOSE ()\n\t <COND (<NOT <FSET? ,PRSO ,CONTBIT>>\n\t\t<TELL \"You must tell me how to do that to a \" D ,PRSO \".\" CR>)\n\t       (<AND <NOT <FSET? ,PRSO ,SURFACEBIT>>\n\t\t     <OR <NOT <==? <GETP ,PRSO ,P?CAPACITY> 0>>\n\t\t\t <FSET? ,PRSO ,DOORBIT>>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <FCLEAR ,PRSO ,OPENBIT>\n\t\t       <TELL \"Closed.\" CR>)\n\t\t      (T <ALREADY \"closed\">)>)\n\t       (ELSE\n\t\t<TELL \"You cannot close that.\" CR>)>>"
  },
  "CCOUNT": {
   "name": "CCOUNT",
   "file": "verbs.zil",
   "line": 754,
   "endLine": 760,
   "source": "<ROUTINE CCOUNT (OBJ \"AUX\" (CNT 0) X)\n\t <COND (<SET X <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<SET CNT <+ .CNT 1>>\n\t\t\t<COND (<NOT <SET X <NEXT? .X>>>\n\t\t\t       <RETURN>)>>)>\n\t .CNT>"
  },
  "WEIGHT": {
   "name": "WEIGHT",
   "file": "verbs.zil",
   "line": 764,
   "endLine": 771,
   "source": "<ROUTINE WEIGHT\n\t (OBJ \"AUX\" CONT (WT 0))\n\t #DECL ((OBJ) OBJECT (CONT) <OR FALSE OBJECT> (WT) FIX)\n\t <COND (<SET CONT <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<SET WT <+ .WT <WEIGHT .CONT>>>\n\t\t\t<COND (<NOT <SET CONT <NEXT? .CONT>>> <RETURN>)>>)>\n\t <+ .WT <GETP .OBJ ,P?SIZE>>>"
  },
  "V-SCRIPT": {
   "name": "V-SCRIPT",
   "file": "verbs.zil",
   "line": 778,
   "endLine": 780,
   "source": "<ROUTINE V-SCRIPT ()\n\t<PUT 0 8 <BOR <GET 0 8> 1>>\n\t<TELL \"Here begins\" ,COPR-NOTICE CR>>"
  },
  "V-UNSCRIPT": {
   "name": "V-UNSCRIPT",
   "file": "verbs.zil",
   "line": 782,
   "endLine": 785,
   "source": "<ROUTINE V-UNSCRIPT ()\n\t<TELL \"Here ends\" ,COPR-NOTICE CR>\n\t<PUT 0 8 <BAND <GET 0 8> -2>>\n\t<RTRUE>>"
  },
  "PRE-MOVE": {
   "name": "PRE-MOVE",
   "file": "verbs.zil",
   "line": 787,
   "endLine": 789,
   "source": "<ROUTINE PRE-MOVE\n\t ()\n\t <COND (<HELD? ,PRSO> <TELL \"I don't juggle objects!\" CR>)>>"
  },
  "V-MOVE": {
   "name": "V-MOVE",
   "file": "verbs.zil",
   "line": 791,
   "endLine": 794,
   "source": "<ROUTINE V-MOVE ()\n\t <COND (<FSET? ,PRSO ,TAKEBIT>\n\t\t<TELL \"Moving the \" D ,PRSO \" reveals nothing.\" CR>)\n\t       (T <TELL \"You can't move the \" D ,PRSO \".\" CR>)>>"
  },
  "V-LAMP-ON": {
   "name": "V-LAMP-ON",
   "file": "verbs.zil",
   "line": 796,
   "endLine": 808,
   "source": "<ROUTINE V-LAMP-ON\n\t ()\n\t <COND (<FSET? ,PRSO ,LIGHTBIT>\n\t\t<COND (<FSET? ,PRSO ,ONBIT> <ALREADY \"on\">)\n\t\t      (ELSE\n\t\t       <FSET ,PRSO ,ONBIT>\n\t\t       <TELL \"The \" D ,PRSO \" is now on.\" CR>\n\t\t       <COND (<NOT ,LIT>\n\t\t\t      <SETG LIT <LIT? ,HERE>>\n\t\t\t      <V-LOOK>)>)>)\n\t       (T\n\t\t<TELL \"You can't turn that on.\" CR>)>\n\t <RTRUE>>"
  },
  "V-LAMP-OFF": {
   "name": "V-LAMP-OFF",
   "file": "verbs.zil",
   "line": 810,
   "endLine": 823,
   "source": "<ROUTINE V-LAMP-OFF\n\t ()\n\t <COND (<FSET? ,PRSO ,LIGHTBIT>\n\t\t<COND (<NOT <FSET? ,PRSO ,ONBIT>>\n\t\t       <ALREADY \"off\">)\n\t\t      (ELSE\n\t\t       <FCLEAR ,PRSO ,ONBIT>\n\t\t       <COND (,LIT\n\t\t\t      <SETG LIT <LIT? ,HERE>>)>\n\t\t       <TELL \"The \" D ,PRSO \" is now off.\" CR>\n\t\t       <COND (<NOT <SETG LIT <LIT? ,HERE>>>\n\t\t\t      <TELL \"It is now pitch black.\" CR>)>)>)\n\t       (ELSE <TELL \"You can't turn that off.\" CR>)>\n\t <RTRUE>>"
  },
  "V-WAIT": {
   "name": "V-WAIT",
   "file": "verbs.zil",
   "line": 825,
   "endLine": 832,
   "source": "<ROUTINE V-WAIT (\"OPTIONAL\" (NUM 3))\n\t #DECL ((NUM) FIX)\n\t <TELL \"Time passes...\" CR>\n\t <REPEAT ()\n\t\t <COND (<L? <SET NUM <- .NUM 1>> 0> <RETURN>)\n\t\t       (<CLOCKER> <RETURN>)>\n\t\t <SETG MOVES <+ ,MOVES 1>>>\n\t <SETG CLOCK-WAIT T>>"
  },
  "PRE-BOARD": {
   "name": "PRE-BOARD",
   "file": "verbs.zil",
   "line": 834,
   "endLine": 847,
   "source": "<ROUTINE PRE-BOARD (\"AUX\" AV)\n\t <SET AV <LOC ,WINNER>>\n\t <COND (<FSET? ,PRSO ,VEHBIT>\n\t\t<COND (<FSET? .AV ,VEHBIT>\n\t\t       <TELL \"You are already in it!\" CR>)\n\t\t      (T <RFALSE>)>)\n\t       (<EQUAL? ,PRSO ,SPACESUIT ,JUNK-SPACESUIT ,MOUSE>\n\t\t<RFALSE>)\n\t       (T\n\t\t<TELL \"I suppose you have a theory on boarding a \"\n\t\t      D\n\t\t      ,PRSO\n\t\t      \".\" CR>)>\n\t <RFATAL>>"
  },
  "V-BOARD": {
   "name": "V-BOARD",
   "file": "verbs.zil",
   "line": 849,
   "endLine": 854,
   "source": "<ROUTINE V-BOARD (\"AUX\" AV)\n\t #DECL ((AV) OBJECT)\n\t <TELL \"You are now in the \" D ,PRSO \".\" CR>\n\t <MOVE ,WINNER ,PRSO>\n\t <APPLY <GETP ,PRSO ,P?ACTION> ,M-ENTER>\n\t <RTRUE>>"
  },
  "V-DISEMBARK": {
   "name": "V-DISEMBARK",
   "file": "verbs.zil",
   "line": 856,
   "endLine": 863,
   "source": "<ROUTINE V-DISEMBARK\n\t ()\n\t <COND (<NOT <==? <LOC ,WINNER> ,PRSO>>\n\t\t<TELL \"You're not in that!\" CR>\n\t\t<RFATAL>)\n\t       (T\n\t\t<TELL \"You are on your own feet again.\" CR>\n\t\t<MOVE ,WINNER ,HERE>)>>"
  },
  "GOTO": {
   "name": "GOTO",
   "file": "verbs.zil",
   "line": 865,
   "endLine": 885,
   "source": "<ROUTINE GOTO (RM \"OPTIONAL\" (V? T) \"AUX\" (WLOC <LOC ,WINNER>) OLIT)\n\t #DECL ((RM WLOC) OBJECT)\n\t <SET OLIT ,LIT>\n\t <MOVE ,WINNER .RM>\n\t <SETG MFOLLOW <>> ;\"we moved, so can't follow him\"\n\t <SETG CHFOLLOW <>> ;\"ditto\"\n\t <SETG HERE .RM>\n\t <SETG LIT <LIT? ,HERE>>\n\t <COND (<AND <NOT .OLIT>\n\t\t     <NOT ,LIT>\n\t\t     <PROB 75>>\n\t\t<JIGS-UP\n\"Oh, no! A lurking grue slithered into the room and devoured you!\">\n\t\t<RTRUE>)>\n\t <COND (<==? <APPLY <GETP ,HERE ,P?ACTION> ,M-ENTER> 2>\n\t\t<RTRUE>)>\n\t <COND (<NOT <==? ,ADVENTURER ,WINNER>>\n\t\t<TELL \"The \" D ,WINNER \" leaves the room.\" CR>)\n\t       (.V? <V-FIRST-LOOK>)>\n\t <SCORE-OBJ .RM>\n\t <RTRUE>>"
  },
  "V-DRINK": {
   "name": "V-DRINK",
   "file": "verbs.zil",
   "line": 887,
   "endLine": 888,
   "source": "<ROUTINE V-DRINK ()\n\t <V-EAT>>"
  },
  "V-EAT": {
   "name": "V-EAT",
   "file": "verbs.zil",
   "line": 890,
   "endLine": 894,
   "source": "<ROUTINE V-EAT ()\n\t <TELL \"I don't think that the \"\n\t\t      D\n\t\t      ,PRSO\n\t\t      \" would agree with you.\" CR>>"
  },
  "V-CURSES": {
   "name": "V-CURSES",
   "file": "verbs.zil",
   "line": 896,
   "endLine": 904,
   "source": "<ROUTINE V-CURSES ()\n\t <COND (,PRSO\n\t\t<COND (<FSET? ,PRSO ,VILLAIN>\n\t\t       <TELL \"Insults won't help you.\" CR>)\n\t\t      (T\n\t\t       <TELL \"What a loony!\" CR>)>)\n\t       (T\n\t\t<TELL\n\"Such language in a high-class establishment like this!\" CR>)>>"
  },
  "V-LISTEN": {
   "name": "V-LISTEN",
   "file": "verbs.zil",
   "line": 906,
   "endLine": 907,
   "source": "<ROUTINE V-LISTEN ()\n\t <TELL \"The \" D ,PRSO \" makes no sound.\" CR>>"
  },
  "V-FOLLOW": {
   "name": "V-FOLLOW",
   "file": "verbs.zil",
   "line": 909,
   "endLine": 910,
   "source": "<ROUTINE V-FOLLOW ()\n\t <TELL \"You're nuts!\" CR>>"
  },
  "V-LEAP": {
   "name": "V-LEAP",
   "file": "verbs.zil",
   "line": 912,
   "endLine": 932,
   "source": "<ROUTINE V-LEAP (\"AUX\" TX S)\n\t #DECL ((T) <OR FALSE TABLE>)\n\t <COND (,PRSO\n\t\t<COND (<IN? ,PRSO ,HERE>\n\t\t       <COND (<FSET? ,PRSO ,VILLAIN>\n\t\t\t      <TELL \"The \"\n\t\t\t\t    D\n\t\t\t\t    ,PRSO\n\t\t\t\t    \" is too big to jump over.\" CR>)\n\t\t\t     (T <V-SKIP>)>)\n\t\t      (T <TELL \"That would be a good trick.\" CR>)>)\n\t       (<SET TX <GETPT ,HERE ,P?DOWN>>\n\t\t<SET S <PTSIZE .TX>>\n\t\t<COND (<OR <==? .S 2>\t\t\t\t\t ;NEXIT\n\t\t\t   <AND <==? .S 4>\t\t\t\t ;CEXIT\n\t\t\t\t<NOT <VALUE <GETB .TX 1>>>>>\n\t\t       <TELL\n\"This was not a safe place to try jumping.\" CR>\n\t\t       <JIGS-UP \"You should have looked before you leaped.\">)\n\t\t      (T <V-SKIP>)>)\n\t       (ELSE <V-SKIP>)>>"
  },
  "V-SKIP": {
   "name": "V-SKIP",
   "file": "verbs.zil",
   "line": 934,
   "endLine": 934,
   "source": "<ROUTINE V-SKIP () <TELL <PICK-ONE ,WHEEEEE> CR>>"
  },
  "V-LEAVE": {
   "name": "V-LEAVE",
   "file": "verbs.zil",
   "line": 936,
   "endLine": 936,
   "source": "<ROUTINE V-LEAVE () <DO-WALK ,P?OUT>>"
  },
  "V-HELLO": {
   "name": "V-HELLO",
   "file": "verbs.zil",
   "line": 940,
   "endLine": 944,
   "source": "<ROUTINE V-HELLO ()\n\t <COND (,PRSO\n\t\t<TELL\n\"Only schizophrenics say \\\"Hello\\\" to a \" D ,PRSO \".\" CR>)\n\t       (ELSE <TELL <PICK-ONE ,HELLOS> CR>)>>"
  },
  "PRE-READ": {
   "name": "PRE-READ",
   "file": "verbs.zil",
   "line": 956,
   "endLine": 960,
   "source": "<ROUTINE PRE-READ ()\n\t ;<COND (<NOT ,LIT> <TELL \"It is impossible to read in the dark.\" CR>)\n\t       (<AND ,PRSI <NOT <FSET? ,PRSI ,TRANSBIT>>>\n\t\t<TELL \"How does one look through a \" D ,PRSI \"?\" CR>)>\n\t <RFALSE>>"
  },
  "V-READ": {
   "name": "V-READ",
   "file": "verbs.zil",
   "line": 962,
   "endLine": 965,
   "source": "<ROUTINE V-READ ()\n\t <COND (<NOT <FSET? ,PRSO ,READBIT>>\n\t\t<TELL \"How can I read a \" D ,PRSO \"?\" CR>)\n\t       (ELSE <TELL <GETP ,PRSO ,P?TEXT> CR>)>>"
  },
  "V-LOOK-UNDER": {
   "name": "V-LOOK-UNDER",
   "file": "verbs.zil",
   "line": 967,
   "endLine": 967,
   "source": "<ROUTINE V-LOOK-UNDER () <TELL \"There is nothing but dust there.\" CR>>"
  },
  "V-LOOK-BEHIND": {
   "name": "V-LOOK-BEHIND",
   "file": "verbs.zil",
   "line": 969,
   "endLine": 969,
   "source": "<ROUTINE V-LOOK-BEHIND () <V-LOOK-UNDER>>"
  },
  "V-LOOK-INSIDE": {
   "name": "V-LOOK-INSIDE",
   "file": "verbs.zil",
   "line": 971,
   "endLine": 994,
   "source": "<ROUTINE V-LOOK-INSIDE\n\t ()\n\t <COND (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"The \"\n\t\t\t     D\n\t\t\t     ,PRSO\n\t\t\t     \" is open, but I can't tell what's beyond it.\">)\n\t\t      (ELSE <TELL \"The \" D ,PRSO \" is closed.\">)>\n\t\t<CRLF>)\n\t       (<FSET? ,PRSO ,CONTBIT>\n\t\t<COND (<FSET? ,PRSO ,VICBIT>\n\t\t       <TELL \"There is nothing special to be seen.\" CR>)\n\t\t      (<SEE-INSIDE? ,PRSO>\n\t\t       <COND (<AND <FIRST? ,PRSO> <PRINT-CONT ,PRSO>>\n\t\t\t      <RTRUE>)\n\t\t\t     (<FSET? ,PRSO ,SURFACEBIT>\n\t\t\t      <TELL \"There is nothing on the \" D ,PRSO \".\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"The \" D ,PRSO \" is empty.\" CR>)>)\n\t\t      (ELSE <TELL \"The \" D ,PRSO \" is closed.\" CR>)>)\n\t       (<FSET? ,PRSO ,TRANSBIT>\n\t\t<TELL \"You can see dimly through the \" D ,PRSO \".\" CR>)\n\t       (ELSE <TELL \"I don't know how to look inside a \" D ,PRSO \".\" CR>)>>"
  },
  "SEE-INSIDE?": {
   "name": "SEE-INSIDE?",
   "file": "verbs.zil",
   "line": 996,
   "endLine": 998,
   "source": "<ROUTINE SEE-INSIDE? (OBJ)\n\t <AND <NOT <FSET? .OBJ ,INVISIBLE>>\n\t      <OR <FSET? .OBJ ,TRANSBIT> <FSET? .OBJ ,OPENBIT>>>>"
  },
  "PRE-TURN": {
   "name": "PRE-TURN",
   "file": "verbs.zil",
   "line": 1000,
   "endLine": 1004,
   "source": "<ROUTINE PRE-TURN\n\t ()\n\t <COND (<NOT <FSET? ,PRSO ,TURNBIT>> <TELL \"You can't turn that!\" CR>)\n\t       (<NOT <FSET? ,PRSI ,TOOLBIT>>\n\t\t<TELL \"You can't turn it with a \" D ,PRSI \".\" CR>)>>"
  },
  "V-TURN": {
   "name": "V-TURN",
   "file": "verbs.zil",
   "line": 1006,
   "endLine": 1006,
   "source": "<ROUTINE V-TURN () <TELL \"That doesn't work.\" CR>>"
  },
  "V-LOCK": {
   "name": "V-LOCK",
   "file": "verbs.zil",
   "line": 1008,
   "endLine": 1008,
   "source": "<ROUTINE V-LOCK () <V-TURN>>"
  },
  "V-PICK": {
   "name": "V-PICK",
   "file": "verbs.zil",
   "line": 1010,
   "endLine": 1010,
   "source": "<ROUTINE V-PICK () <V-TURN>>"
  },
  "V-UNLOCK": {
   "name": "V-UNLOCK",
   "file": "verbs.zil",
   "line": 1012,
   "endLine": 1012,
   "source": "<ROUTINE V-UNLOCK () <V-TURN>>"
  },
  "V-KILL": {
   "name": "V-KILL",
   "file": "verbs.zil",
   "line": 1014,
   "endLine": 1015,
   "source": "<ROUTINE V-KILL ()\n\t <IKILL \"kill\">>"
  },
  "IKILL": {
   "name": "IKILL",
   "file": "verbs.zil",
   "line": 1017,
   "endLine": 1037,
   "source": "<ROUTINE IKILL (STR)\n\t <COND (<NOT ,PRSO> <TELL \"There is nothing here to \" .STR \".\" CR>)\n\t       (<AND <NOT <FSET? ,PRSO ,VILLAIN>>\n\t\t     <NOT <FSET? ,PRSO ,VICBIT>>>\n\t\t<TELL \"I've known strange people, but fighting a \"\n\t\t      D\n\t\t      ,PRSO\n\t\t      \"?\" CR>)\n\t       (<OR <NOT ,PRSI> <==? ,PRSI ,HANDS>>\n\t\t<FUTILE .STR>)\n\t       (<NOT <FSET? ,PRSI ,WEAPONBIT>>\n\t\t<TELL \"Trying to \"\n\t\t      .STR\n\t\t      \" the \"\n\t\t      D\n\t\t      ,PRSO\n\t\t      \" with a \"\n\t\t      D\n\t\t      ,PRSI\n\t\t      \" is futile.\" CR>)\n\t       (ELSE <TELL \"You can't.\" CR>)>>"
  },
  "V-ATTACK": {
   "name": "V-ATTACK",
   "file": "verbs.zil",
   "line": 1039,
   "endLine": 1039,
   "source": "<ROUTINE V-ATTACK () <IKILL \"attack\">>"
  },
  "V-KICK": {
   "name": "V-KICK",
   "file": "verbs.zil",
   "line": 1041,
   "endLine": 1041,
   "source": "<ROUTINE V-KICK () <HACK-HACK \"Kicking the \">>"
  },
  "V-WAVE": {
   "name": "V-WAVE",
   "file": "verbs.zil",
   "line": 1043,
   "endLine": 1043,
   "source": "<ROUTINE V-WAVE () <HACK-HACK \"Waving the \">>"
  },
  "V-RAISE": {
   "name": "V-RAISE",
   "file": "verbs.zil",
   "line": 1045,
   "endLine": 1045,
   "source": "<ROUTINE V-RAISE () <HACK-HACK \"Playing in this way with the \">>"
  },
  "V-LOWER": {
   "name": "V-LOWER",
   "file": "verbs.zil",
   "line": 1047,
   "endLine": 1047,
   "source": "<ROUTINE V-LOWER () <HACK-HACK \"Playing in this way with the \">>"
  },
  "V-RUB": {
   "name": "V-RUB",
   "file": "verbs.zil",
   "line": 1049,
   "endLine": 1049,
   "source": "<ROUTINE V-RUB () <HACK-HACK \"Fiddling with the \">>"
  },
  "V-PUSH": {
   "name": "V-PUSH",
   "file": "verbs.zil",
   "line": 1051,
   "endLine": 1051,
   "source": "<ROUTINE V-PUSH () <HACK-HACK \"Pushing the \">>"
  },
  "PRE-MUNG": {
   "name": "PRE-MUNG",
   "file": "verbs.zil",
   "line": 1053,
   "endLine": 1057,
   "source": "<ROUTINE PRE-MUNG ()\n\t <COND (<NOT <FSET? ,PRSO ,VICBIT>>\n\t\t<HACK-HACK \"Trying to destroy the \">)\n\t       (<NOT ,PRSI>\n\t\t<FUTILE \"destroy\">)>>"
  },
  "FUTILE": {
   "name": "FUTILE",
   "file": "verbs.zil",
   "line": 1059,
   "endLine": 1061,
   "source": "<ROUTINE FUTILE (STR)\n\t <TELL\n\"Trying to \" .STR \" a \" D ,PRSO \" with your bare hands is futile.\" CR>>"
  },
  "V-MUNG": {
   "name": "V-MUNG",
   "file": "verbs.zil",
   "line": 1063,
   "endLine": 1068,
   "source": "<ROUTINE V-MUNG ()\n\t <COND (<FSET? ,PRSO ,KEYBIT>\n\t\t<REMOVE ,PRSO>\n\t\t<TELL\n\"It shatters and disappears.\" CR>)\n\t       (T <TELL \"You can't.\" CR>)>>"
  },
  "HACK-HACK": {
   "name": "HACK-HACK",
   "file": "verbs.zil",
   "line": 1070,
   "endLine": 1072,
   "source": "<ROUTINE HACK-HACK\n\t (STR)\n\t <TELL .STR D ,PRSO <PICK-ONE ,HO-HUM> CR>>"
  },
  "WORD-TYPE": {
   "name": "WORD-TYPE",
   "file": "verbs.zil",
   "line": 1080,
   "endLine": 1085,
   "source": "<ROUTINE WORD-TYPE\n\t (OBJ WORD \"AUX\" SYNS)\n\t #DECL ((OBJ) OBJECT (WORD SYNS) TABLE)\n\t <ZMEMQ .WORD\n\t\t<SET SYNS <GETPT .OBJ ,P?SYNONYM>>\n\t\t<- </ <PTSIZE .SYNS> 2> 1>>>"
  },
  "V-KNOCK": {
   "name": "V-KNOCK",
   "file": "verbs.zil",
   "line": 1087,
   "endLine": 1091,
   "source": "<ROUTINE V-KNOCK\n\t ()\n\t <COND (<WORD-TYPE ,PRSO ,W?DOOR>\n\t\t<TELL \"Nobody's home.\" CR>)\n\t       (ELSE <TELL \"Why knock on a \" D ,PRSO \"?\" CR>)>>"
  },
  "V-FROBOZZ": {
   "name": "V-FROBOZZ",
   "file": "verbs.zil",
   "line": 1093,
   "endLine": 1096,
   "source": "<ROUTINE V-FROBOZZ\n\t ()\n\t <TELL\n\"The FROBOZZ Corporation sponsored this expedition.\" CR>>"
  },
  "V-YELL": {
   "name": "V-YELL",
   "file": "verbs.zil",
   "line": 1098,
   "endLine": 1098,
   "source": "<ROUTINE V-YELL () <TELL \"Aarrrrggggggghhhhhhhh!\" CR>>"
  },
  "V-PLUG": {
   "name": "V-PLUG",
   "file": "verbs.zil",
   "line": 1100,
   "endLine": 1100,
   "source": "<ROUTINE V-PLUG () <TELL \"This has no effect.\" CR>>"
  },
  "V-SHAKE": {
   "name": "V-SHAKE",
   "file": "verbs.zil",
   "line": 1104,
   "endLine": 1118,
   "source": "<ROUTINE V-SHAKE (\"AUX\" X)\n\t <COND (<FSET? ,PRSO ,VILLAIN>\n\t\t<TELL \"This seems to have no effect.\" CR>)\n\t       (<AND <NOT <FSET? ,PRSO ,OPENBIT>>\n\t\t     <FIRST? ,PRSO>>\n\t\t<TELL \"It sounds like there is something inside the \"\n\t\t      D\n\t\t      ,PRSO\n\t\t      \".\"\n\t\t      CR>)\n\t (<AND <FSET? ,PRSO ,OPENBIT> <FIRST? ,PRSO>>\n\t  <REPEAT ()\n\t\t  <COND (<SET X <FIRST? ,PRSO>> <MOVE .X ,PRSO>)\n\t\t\t(ELSE <RETURN>)>>\n\t  <TELL \"All of the objects spill onto the floor.\" CR>)>>"
  },
  "V-DIG": {
   "name": "V-DIG",
   "file": "verbs.zil",
   "line": 1120,
   "endLine": 1120,
   "source": "<ROUTINE V-DIG () <TELL \"What a silly idea!\" CR>>"
  },
  "V-SMELL": {
   "name": "V-SMELL",
   "file": "verbs.zil",
   "line": 1122,
   "endLine": 1125,
   "source": "<ROUTINE V-SMELL ()\n\t <COND (,SUIT-ON?\n\t\t<SETG PRSO ,SPACESUIT>)>\n\t <TELL \"It smells just like a \" D ,PRSO \".\" CR>>"
  },
  "GLOBAL-IN?": {
   "name": "GLOBAL-IN?",
   "file": "verbs.zil",
   "line": 1127,
   "endLine": 1129,
   "source": "<ROUTINE GLOBAL-IN? (OBJ1 OBJ2 \"AUX\" TX)\n\t <COND (<SET TX <GETPT .OBJ2 ,P?GLOBAL>>\n\t\t<ZMEMQB .OBJ1 .TX <- <PTSIZE .TX> 1>>)>>"
  },
  "HERE??": {
   "name": "HERE??",
   "file": "verbs.zil",
   "line": 1131,
   "endLine": 1132,
   "source": "<ROUTINE HERE?? (OBJ)\n\t <OR <IN? .OBJ ,HERE> <GLOBAL-IN? .OBJ ,HERE>>>"
  },
  "V-SWIM": {
   "name": "V-SWIM",
   "file": "verbs.zil",
   "line": 1134,
   "endLine": 1140,
   "source": "<ROUTINE V-SWIM ()\n\t <COND (<FSET? ,HERE ,RAIRBIT>\n\t\t<TELL\n\"Waving your limbs doesn't help much. You move a little, but some stronger\nimpulse is needed.\" CR>)\n\t       (ELSE\n\t\t<TELL \"You can't swim here!\" CR>)>>"
  },
  "V-UNTIE": {
   "name": "V-UNTIE",
   "file": "verbs.zil",
   "line": 1142,
   "endLine": 1142,
   "source": "<ROUTINE V-UNTIE () <TELL \"Unfasten it how?\" CR>>"
  },
  "PRE-TIE": {
   "name": "PRE-TIE",
   "file": "verbs.zil",
   "line": 1144,
   "endLine": 1147,
   "source": "<ROUTINE PRE-TIE\n\t ()\n\t <COND (<==? ,PRSI ,WINNER>\n\t\t<TELL \"You can't tie it to yourself.\" CR>)>>"
  },
  "V-TIE": {
   "name": "V-TIE",
   "file": "verbs.zil",
   "line": 1149,
   "endLine": 1149,
   "source": "<ROUTINE V-TIE () <TELL \"You can't tie the \" D ,PRSO \" to that.\" CR>>"
  },
  "V-ALARM": {
   "name": "V-ALARM",
   "file": "verbs.zil",
   "line": 1151,
   "endLine": 1155,
   "source": "<ROUTINE V-ALARM ()\n\t <COND (<FSET? ,PRSO ,VILLAIN>\n\t\t<TELL \"He's wide awake, or haven't you noticed...\" CR>)\n\t       (ELSE\n\t\t<TELL \"The \" D ,PRSO \" isn't sleeping.\" CR>)>>"
  },
  "V-ZORK": {
   "name": "V-ZORK",
   "file": "verbs.zil",
   "line": 1157,
   "endLine": 1157,
   "source": "<ROUTINE V-ZORK () <TELL \"I see no Zork here.\" CR>>"
  },
  "V-COMMAND": {
   "name": "V-COMMAND",
   "file": "verbs.zil",
   "line": 1161,
   "endLine": 1165,
   "source": "<ROUTINE V-COMMAND ()\n\t <COND (<FSET? ,PRSO ,VICBIT>\n\t\t<TELL \"The \" D ,PRSO \" pays no attention.\" CR>)\n\t       (ELSE\n\t\t<TELL \"You cannot talk to that!\" CR>)>>"
  },
  "V-CLIMB-ON": {
   "name": "V-CLIMB-ON",
   "file": "verbs.zil",
   "line": 1167,
   "endLine": 1174,
   "source": "<ROUTINE V-CLIMB-ON ()\n\t <COND (<AND <FSET? ,PRSO ,FURNITURE> <FSET? ,PRSO ,VEHBIT>>\n\t\t<PERFORM ,V?BOARD ,PRSO>\n\t\t<RTRUE>)\n\t       (<FSET? ,PRSO ,VEHBIT>\n\t\t<V-CLIMB-UP ,P?UP T>)\n\t       (T\n\t\t<TELL \"You can't climb onto the \" D ,PRSO \".\" CR>)>>"
  },
  "V-CLIMB-FOO": {
   "name": "V-CLIMB-FOO",
   "file": "verbs.zil",
   "line": 1176,
   "endLine": 1176,
   "source": "<ROUTINE V-CLIMB-FOO () <V-CLIMB-UP ,P?UP T>>"
  },
  "V-CLIMB-UP": {
   "name": "V-CLIMB-UP",
   "file": "verbs.zil",
   "line": 1178,
   "endLine": 1185,
   "source": "<ROUTINE V-CLIMB-UP (\"OPTIONAL\" (DIR ,P?UP) (OBJ <>) \"AUX\" X)\n\t #DECL ((DIR) FIX (OBJ) <OR ATOM FALSE> (X) TABLE)\n\t <COND (<GETPT ,HERE .DIR>\n\t\t<DO-WALK .DIR>\n\t\t<RTRUE>)\n\t       (<NOT .OBJ>\n\t\t<TELL \"You can't go that way.\" CR>)\n\t       (ELSE <TELL \"Bizarre!\" CR>)>>"
  },
  "V-CLIMB-DOWN": {
   "name": "V-CLIMB-DOWN",
   "file": "verbs.zil",
   "line": 1187,
   "endLine": 1191,
   "source": "<ROUTINE V-CLIMB-DOWN ()\n\t <COND (<AND <FSET? ,PRSO ,FURNITURE> <FSET? ,PRSO ,VEHBIT>>\n\t\t<V-CLIMB-ON>\n\t\t<RTRUE>)\n\t       (T <V-CLIMB-UP ,P?DOWN>)>>"
  },
  "V-PUT-UNDER": {
   "name": "V-PUT-UNDER",
   "file": "verbs.zil",
   "line": 1193,
   "endLine": 1194,
   "source": "<ROUTINE V-PUT-UNDER ()\n\t <TELL \"You can't do that.\" CR>>"
  },
  "V-ENTER": {
   "name": "V-ENTER",
   "file": "verbs.zil",
   "line": 1196,
   "endLine": 1197,
   "source": "<ROUTINE V-ENTER ()\n\t <DO-WALK ,P?IN>>"
  },
  "V-EXIT": {
   "name": "V-EXIT",
   "file": "verbs.zil",
   "line": 1199,
   "endLine": 1200,
   "source": "<ROUTINE V-EXIT ()\n\t <DO-WALK ,P?OUT>>"
  },
  "V-SEARCH": {
   "name": "V-SEARCH",
   "file": "verbs.zil",
   "line": 1202,
   "endLine": 1203,
   "source": "<ROUTINE V-SEARCH ()\n\t <TELL \"You find nothing unusual.\" CR>>"
  },
  "V-FIND": {
   "name": "V-FIND",
   "file": "verbs.zil",
   "line": 1205,
   "endLine": 1220,
   "source": "<ROUTINE V-FIND (\"AUX\" (L <LOC ,PRSO>))\n\t <COND (<EQUAL? ,PRSO ,ME ,HANDS>\n\t\t<TELL \"You're around here somewhere...\" CR>)\n\t       (<EQUAL? .L ,GLOBAL-OBJECTS>\n\t\t<TELL \"You find it.\" CR>)\n\t       (<IN? ,PRSO ,WINNER>\n\t\t<TELL \"You have it.\" CR>)\n\t       (<OR <IN? ,PRSO ,HERE>\n\t\t    <==? ,PRSO ,PSEUDO-OBJECT>>\n\t\t<TELL \"It's right here.\" CR>)\n\t       (<FSET? .L ,VILLAIN>\n\t\t<TELL \"The \" D .L \" has it.\" CR>)\n\t       (<FSET? .L ,CONTBIT>\n\t\t<TELL \"It's in the \" D .L \".\" CR>)\n\t       (ELSE\n\t\t<TELL \"Beats me.\" CR>)>>"
  },
  "V-TELL": {
   "name": "V-TELL",
   "file": "verbs.zil",
   "line": 1222,
   "endLine": 1229,
   "source": "<ROUTINE V-TELL ()\n\t <COND (<FSET? ,PRSO ,VICBIT>\n\t\t<SETG WINNER ,PRSO>)\n\t       (T\n\t\t<TELL \"You can't talk to the \" D ,PRSO \"!\" CR>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<SETG P-CONT <>>\n\t\t<RFATAL>)>>"
  },
  "V-ANSWER": {
   "name": "V-ANSWER",
   "file": "verbs.zil",
   "line": 1231,
   "endLine": 1235,
   "source": "<ROUTINE V-ANSWER ()\n\t <TELL \"Nobody is awaiting your answer.\" CR>\n\t <SETG P-CONT <>>\n\t <SETG QUOTE-FLAG <>>\n\t <RTRUE>>"
  },
  "V-REPLY": {
   "name": "V-REPLY",
   "file": "verbs.zil",
   "line": 1237,
   "endLine": 1241,
   "source": "<ROUTINE V-REPLY ()\n\t <TELL \"It is doubtful that the \" D ,PRSO \" is interested.\" CR>\n\t <SETG P-CONT <>>\n\t <SETG QUOTE-FLAG <>>\n\t <RTRUE>>"
  },
  "V-IS-IN": {
   "name": "V-IS-IN",
   "file": "verbs.zil",
   "line": 1243,
   "endLine": 1250,
   "source": "<ROUTINE V-IS-IN ()\n\t <COND (<IN? ,PRSO ,PRSI>\n\t\t<TELL \"Yes, it is \">\n\t\t<COND (<FSET? ,PRSI ,SURFACEBIT>\n\t\t       <TELL \"on\">)\n\t\t      (T <TELL \"in\">)>\n\t\t<TELL \" the \" D ,PRSI \".\" CR>)\n\t       (T <TELL \"No, it isn't.\" CR>)>>"
  },
  "V-KISS": {
   "name": "V-KISS",
   "file": "verbs.zil",
   "line": 1252,
   "endLine": 1253,
   "source": "<ROUTINE V-KISS ()\n\t <TELL \"I'd sooner kiss a pig.\" CR>>"
  },
  "V-RAPE": {
   "name": "V-RAPE",
   "file": "verbs.zil",
   "line": 1255,
   "endLine": 1256,
   "source": "<ROUTINE V-RAPE ()\n\t <TELL \"What a (ahem!) strange idea.\" CR>>"
  },
  "V-DIAGNOSE": {
   "name": "V-DIAGNOSE",
   "file": "verbs.zil",
   "line": 1258,
   "endLine": 1265,
   "source": "<ROUTINE V-DIAGNOSE ()\n\t <TELL \"You are in perfect health.\" CR>\n\t <COND (<NOT <0? ,DEATHS>>\n\t\t<TELL \"You have been killed \">\n\t\t<COND (<1? ,DEATHS> <TELL \"once.\">)\n\t\t      (<==? ,DEATHS 2> <TELL \"twice.\">)\n\t\t      (T <TELL \"three times.\">)>\n\t\t<CRLF>)>>"
  },
  "V-SAY": {
   "name": "V-SAY",
   "file": "verbs.zil",
   "line": 1267,
   "endLine": 1275,
   "source": "<ROUTINE V-SAY (\"AUX\" V)\n\t <COND (<SET V <FIND-IN ,HERE ,VICBIT>>\n\t\t<SETG P-CONT <>>\n\t\t<TELL \"You must address the \" D .V \" directly.\" CR>)\n\t       (ELSE\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<SETG P-CONT <>>\n\t\t<TELL\n\"Talking to yourself is a sign of impending mental collapse.\" CR>)>>"
  },
  "V-WEAR": {
   "name": "V-WEAR",
   "file": "verbs.zil",
   "line": 1277,
   "endLine": 1278,
   "source": "<ROUTINE V-WEAR ()\n\t <TELL \"You can't wear that, and besides, it wouldn't fit.\" CR>>"
  },
  "V-REMOVE": {
   "name": "V-REMOVE",
   "file": "verbs.zil",
   "line": 1280,
   "endLine": 1282,
   "source": "<ROUTINE V-REMOVE ()\n\t <COND (<FSET? ,PRSO ,WEARBIT> <PERFORM ,V?TAKE-OFF ,PRSO> <RTRUE>)\n\t       (ELSE <PERFORM ,V?TAKE ,PRSO> <RTRUE>)>>"
  },
  "V-TAKE-OFF": {
   "name": "V-TAKE-OFF",
   "file": "verbs.zil",
   "line": 1284,
   "endLine": 1286,
   "source": "<ROUTINE V-TAKE-OFF ()\n\t <COND (<FSET? ,PRSO ,VEHBIT> <V-DISEMBARK>)\n\t       (T <TELL \"You aren't wearing that.\" CR>)>>"
  },
  "V-STEP-ON": {
   "name": "V-STEP-ON",
   "file": "verbs.zil",
   "line": 1288,
   "endLine": 1289,
   "source": "<ROUTINE V-STEP-ON ()\n\t <TELL \"That's a silly thing to do.\" CR>>"
  },
  "V-PUT-ON": {
   "name": "V-PUT-ON",
   "file": "verbs.zil",
   "line": 1291,
   "endLine": 1292,
   "source": "<ROUTINE V-PUT-ON ()\n\t <PERFORM ,V?PUT ,PRSO ,PRSI>>"
  },
  "V-LAND": {
   "name": "V-LAND",
   "file": "verbs.zil",
   "line": 1294,
   "endLine": 1295,
   "source": "<ROUTINE V-LAND ()\n\t <TELL \"Such complicated tasks are best left to computers.\" CR>>"
  },
  "ROB": {
   "name": "ROB",
   "file": "verbs.zil",
   "line": 1297,
   "endLine": 1305,
   "source": "<ROUTINE ROB (WHO \"OPTIONAL\" (WHERE <>) (HIDE? <>) \"AUX\" N X (ROBBED? <>))\n\t <SET X <FIRST? .WHO>>\n\t <REPEAT ()\n\t\t <COND (<NOT .X> <RETURN .ROBBED?>)>\n\t\t <SET N <NEXT? .X>>\n\t\t <COND (<RIPOFF .X .WHERE>\n\t\t\t<COND (.HIDE? <FSET .X ,NDESCBIT>)>\n\t\t\t<SET ROBBED? .X>)>\n\t\t <SET X .N>>>"
  },
  "RIPOFF": {
   "name": "RIPOFF",
   "file": "verbs.zil",
   "line": 1307,
   "endLine": 1324,
   "source": "<ROUTINE RIPOFF (X WHERE)\n\t <COND (<AND <==? .X ,BLUE-KEY>\n\t\t     <IN? ,BLUE-KEY ,FORCE-FIELD-1>>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? .X .WHERE>>\n\t\t     <NOT <FSET? .X ,INVISIBLE>>\n\t\t     <FSET? .X ,TOUCHBIT>\n\t\t     <FSET? .X ,TAKEBIT>>\n\t\t<COND (<==? .X ,UNDER-GLOBE>\n\t\t       <FCLEAR .X ,NDESCBIT>\n\t\t       <SETG UNDER-GLOBE <>>)>\n\t\t<COND (<EQUAL? .X ,RED-DISK ,BLUE-DISK>\n\t\t       <DISK-SWITCH .X <>>)>\n\t\t<COND (<AND <EQUAL? .X ,SPACESUIT ,SAFETY-LINE> ,THAT-END>\n\t\t       <RTRUE>)>\n\t\t<COND (.WHERE <MOVE .X .WHERE>)\n\t\t      (ELSE <REMOVE .X>)>\n\t\t<RTRUE>)>>"
  },
  "V-STAND": {
   "name": "V-STAND",
   "file": "verbs.zil",
   "line": 1326,
   "endLine": 1331,
   "source": "<ROUTINE V-STAND ()\n\t <COND (<FSET? <LOC ,WINNER> ,VEHBIT>\n\t\t<PERFORM ,V?DISEMBARK <LOC ,WINNER>>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<TELL \"You are already standing, I think.\" CR>)>>"
  },
  "V-NO": {
   "name": "V-NO",
   "file": "verbs.zil",
   "line": 1333,
   "endLine": 1334,
   "source": "<ROUTINE V-NO ()\n\t <TELL \"You sound rather negative.\" CR>>"
  },
  "V-YES": {
   "name": "V-YES",
   "file": "verbs.zil",
   "line": 1336,
   "endLine": 1337,
   "source": "<ROUTINE V-YES ()\n\t <TELL \"You sound rather positive.\" CR>>"
  },
  "V-POINT": {
   "name": "V-POINT",
   "file": "verbs.zil",
   "line": 1339,
   "endLine": 1339,
   "source": "<ROUTINE V-POINT () <TELL \"It's usually impolite to point.\" CR>>"
  },
  "V-SET": {
   "name": "V-SET",
   "file": "verbs.zil",
   "line": 1341,
   "endLine": 1342,
   "source": "<ROUTINE V-SET ()\n\t <TELL \"Setting a \" D ,PRSO \" is a strange concept.\" CR>>"
  },
  "V-PLAY": {
   "name": "V-PLAY",
   "file": "verbs.zil",
   "line": 1344,
   "endLine": 1345,
   "source": "<ROUTINE V-PLAY ()\n\t <TELL \"Playing a \" D ,PRSO \"?\" CR>>"
  },
  "V-$VERIFY": {
   "name": "V-$VERIFY",
   "file": "verbs.zil",
   "line": 1347,
   "endLine": 1350,
   "source": "<ROUTINE V-$VERIFY ()\n\t <TELL \"Verifying game...\" CR>\n\t <COND (<VERIFY> <TELL \"Game correct.\" CR>)\n\t       (T <TELL CR \"** Game File Failure **\" CR>)>>"
  },
  "V-STAND-ON": {
   "name": "V-STAND-ON",
   "file": "verbs.zil",
   "line": 1352,
   "endLine": 1353,
   "source": "<ROUTINE V-STAND-ON ()\n\t <TELL \"Standing on a \" D ,PRSO \" seems like a waste of time.\" CR>>"
  },
  "V-REPORT": {
   "name": "V-REPORT",
   "file": "verbs.zil",
   "line": 1355,
   "endLine": 1357,
   "source": "<ROUTINE V-REPORT ()\n\t <TELL\n\"Report?!? Wait until you've accomplished something...\" CR>>"
  },
  "V-LOOK-SAFELY": {
   "name": "V-LOOK-SAFELY",
   "file": "verbs.zil",
   "line": 1359,
   "endLine": 1366,
   "source": "<ROUTINE V-LOOK-SAFELY ()\n\t <COND (<FSET? ,PRSI ,TRANSBIT>\n\t\t<TELL \"The \" D ,PRSO \" looks as before\">\n\t\t<COND (<NOT <==? ,PRSI ,CLEAR-KEY>>\n\t\t       <TELL \", only tinged by the\ncolor of the \" D ,PRSI>)>\n\t\t<TELL \".\" CR>)\n\t       (ELSE <TELL \"The \" D ,PRSI \" isn't transparent.\" CR>)>>"
  },
  "V-REACH": {
   "name": "V-REACH",
   "file": "verbs.zil",
   "line": 1368,
   "endLine": 1372,
   "source": "<ROUTINE V-REACH ()\n\t <COND (<FIRST? ,PRSO>\n\t\t<TELL \"There is something\">)\n\t       (ELSE <TELL \"There is nothing\">)>\n\t <TELL \" inside the \" D ,PRSO \".\" CR>>"
  },
  "V-REACH-FOR": {
   "name": "V-REACH-FOR",
   "file": "verbs.zil",
   "line": 1374,
   "endLine": 1380,
   "source": "<ROUTINE V-REACH-FOR ()\n\t <COND (<FSET? ,PRSO ,TAKEBIT>\n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<RTRUE>)\n\t       (<IN? ,PRSO ,HERE>\n\t\t<TELL \"It's here! Now what?\" CR>)\n\t       (ELSE <TELL \"It is out of reach.\" CR>)>>"
  },
  "DO-WALK": {
   "name": "DO-WALK",
   "file": "verbs.zil",
   "line": 1382,
   "endLine": 1384,
   "source": "<ROUTINE DO-WALK (DIR)\n\t <SETG P-WALK-DIR .DIR>\n\t <PERFORM ,V?WALK .DIR>>"
  },
  "V-WALK-TO": {
   "name": "V-WALK-TO",
   "file": "verbs.zil",
   "line": 1386,
   "endLine": 1390,
   "source": "<ROUTINE V-WALK-TO ()\n\t <COND (<OR <IN? ,PRSO ,HERE>\n\t\t    <GLOBAL-IN? ,PRSO ,HERE>>\n\t\t<TELL \"It's here!\" CR>)\n\t       (T <TELL \"You should supply a direction!\" CR>)>>"
  },
  "V-FLY": {
   "name": "V-FLY",
   "file": "verbs.zil",
   "line": 1392,
   "endLine": 1393,
   "source": "<ROUTINE V-FLY ()\n\t <TELL \"Humans are not usually equipped for flying.\" CR>>"
  },
  "V-SMILE": {
   "name": "V-SMILE",
   "file": "verbs.zil",
   "line": 1395,
   "endLine": 1396,
   "source": "<ROUTINE V-SMILE ()\n\t <TELL \"How pleasant!\" CR>>"
  },
  "V-EMPTY": {
   "name": "V-EMPTY",
   "file": "verbs.zil",
   "line": 1398,
   "endLine": 1399,
   "source": "<ROUTINE V-EMPTY ()\n\t <TELL \"There's nothing to empty.\" CR>>"
  }
 },
 "globals": {
  "ALARM?": {
   "name": "ALARM?",
   "kind": "global",
   "file": "actions.zil",
   "line": 6,
   "value": "T"
  },
  "MASS": {
   "name": "MASS",
   "kind": "global",
   "file": "actions.zil",
   "line": 32,
   "value": "<>"
  },
  "MASSNUM": {
   "name": "MASSNUM",
   "kind": "global",
   "file": "actions.zil",
   "line": 33,
   "value": "<>"
  },
  "R-VALUE": {
   "name": "R-VALUE",
   "kind": "global",
   "file": "actions.zil",
   "line": 180,
   "value": "<>"
  },
  "THETA-VALUE": {
   "name": "THETA-VALUE",
   "kind": "global",
   "file": "actions.zil",
   "line": 181,
   "value": "<>"
  },
  "PHI-VALUE": {
   "name": "PHI-VALUE",
   "kind": "global",
   "file": "actions.zil",
   "line": 182,
   "value": "<>"
  },
  "COMPUTER-COUNT": {
   "name": "COMPUTER-COUNT",
   "kind": "global",
   "file": "actions.zil",
   "line": 184,
   "value": "0"
  },
  "GIVE-UP": {
   "name": "GIVE-UP",
   "kind": "global",
   "file": "actions.zil",
   "line": 212,
   "value": "<>"
  },
  "LOST": {
   "name": "LOST",
   "kind": "global",
   "file": "actions.zil",
   "line": 213,
   "value": "<>"
  },
  "DESTINATION": {
   "name": "DESTINATION",
   "kind": "global",
   "file": "actions.zil",
   "line": 214,
   "value": "<>"
  },
  "GOT-INSTRUCTIONS": {
   "name": "GOT-INSTRUCTIONS",
   "kind": "global",
   "file": "actions.zil",
   "line": 215,
   "value": "<>"
  },
  "COUNTDOWN": {
   "name": "COUNTDOWN",
   "kind": "global",
   "file": "actions.zil",
   "line": 216,
   "value": "<>"
  },
  "DUMMY": {
   "name": "DUMMY",
   "kind": "global",
   "file": "actions.zil",
   "line": 315,
   "value": "<LTABLE \"Look around.\" \"You think it isn't?\" \"I think you've already done that.\">"
  },
  "COMPUTER-ON": {
   "name": "COMPUTER-ON",
   "kind": "global",
   "file": "actions.zil",
   "line": 458,
   "value": "T"
  },
  "IN-TRANSIT": {
   "name": "IN-TRANSIT",
   "kind": "global",
   "file": "actions.zil",
   "line": 643,
   "value": "\"\"We're in the midst of a trip. Are you still asleep?\"\""
  },
  "BURN-COMING": {
   "name": "BURN-COMING",
   "kind": "global",
   "file": "actions.zil",
   "line": 646,
   "value": "\"\"I'm too busy, I've got a burn coming. You'd better brace yourself.\"\""
  },
  "ROPES-OFF": {
   "name": "ROPES-OFF",
   "kind": "global",
   "file": "actions.zil",
   "line": 649,
   "value": "\"\"I wouldn't try leaving unless you can get those ropes off me.\"\""
  },
  "SEAT-BELT?": {
   "name": "SEAT-BELT?",
   "kind": "global",
   "file": "actions.zil",
   "line": 652,
   "value": "<>"
  },
  "COURSE-SELECTED": {
   "name": "COURSE-SELECTED",
   "kind": "global",
   "file": "actions.zil",
   "line": 675,
   "value": "<>"
  },
  "TRIP-COUNT": {
   "name": "TRIP-COUNT",
   "kind": "global",
   "file": "actions.zil",
   "line": 677,
   "value": "0"
  },
  "TRIP-DESCS": {
   "name": "TRIP-DESCS",
   "kind": "global",
   "file": "actions.zil",
   "line": 679,
   "value": "<LTABLE \"You are headed towards a bright starlike object.\" \"The starlike object now shows some shape.\" \"You are approaching a huge, cylindrical asteroid.\" \"The asteroid is unnaturally smooth, but there are surface features on it.\" \"Filling space before you is an enormous artifact, more than 5 km long\nand about a kilometer in diameter. Regularly spaced around its waist are\nbumps and other odd protrusions. You cannot see the aft end but the fore\nend sports a glass or crystal dome almost 100 meters across.\">"
  },
  "VIEW-COUNT": {
   "name": "VIEW-COUNT",
   "kind": "global",
   "file": "actions.zil",
   "line": 744,
   "value": "0"
  },
  "ORBIT-MATCHED": {
   "name": "ORBIT-MATCHED",
   "kind": "global",
   "file": "actions.zil",
   "line": 745,
   "value": "<>"
  },
  "VIEW-TABLE": {
   "name": "VIEW-TABLE",
   "kind": "global",
   "file": "actions.zil",
   "line": 757,
   "value": "<TABLE \"There is an area with a blue dome below. Near the dome is a spherical object\nwhich just might be a spaceship. It is held down by silvery ropes.\" \"This area has a yellow dome. The surface of the object here looks damaged\nand scorched, and is littered with tangled debris.\" \"This area has a green dome and a long, silvery spaceship tethered nearby.\" \"Below is an area with a red dome which has no ship near it.\">"
  },
  "DOCKED?": {
   "name": "DOCKED?",
   "kind": "global",
   "file": "actions.zil",
   "line": 807,
   "value": "<>"
  },
  "TAPE-ON": {
   "name": "TAPE-ON",
   "kind": "global",
   "file": "actions.zil",
   "line": 809,
   "value": "<>"
  },
  "TAPES": {
   "name": "TAPES",
   "kind": "global",
   "file": "actions.zil",
   "line": 842,
   "value": "<LTABLE \"A lecture on the history of Brazil in the 2030's begins.\" \"This is a discussion of contemporary trends in literature.\" \"Bach's \"The Well-Tempered Clavier\" is played.\" \"\"Fantasia,\" complete with holo-projection, begins.\" \"A list of the works of Edgar Rice Burroughs is read off.\" \"This is Pynchon's \"Gravity's Rainbow.\"\" \"Vernon's \"Origins of the Third World War\" plays.\" \"The classic computer mystery \"Deadline\" is displayed.\">"
  },
  "LONG-MOUSE": {
   "name": "LONG-MOUSE",
   "kind": "global",
   "file": "actions.zil",
   "line": 930,
   "value": "\" Its guidance system (two dish antennae at the front)\ncircles quizzically. A power antenna juts from the rear. On top is a small\ntray. It cleans the floor as it goes, humming contentedly. All in all, it\nlooks like nothing so much as a mechanical mouse.\""
  },
  "HOLE-SHUTS": {
   "name": "HOLE-SHUTS",
   "kind": "global",
   "file": "actions.zil",
   "line": 946,
   "value": "\" emerges from a hitherto unnoticed hole in the wall. The hole slides shut and\nbecomes practically invisible\""
  },
  "SEEN-MOUSE?": {
   "name": "SEEN-MOUSE?",
   "kind": "global",
   "file": "actions.zil",
   "line": 950,
   "value": "<>"
  },
  "MOUSE-LOC": {
   "name": "MOUSE-LOC",
   "kind": "global",
   "file": "actions.zil",
   "line": 951,
   "value": "<>"
  },
  "GARAGED?": {
   "name": "GARAGED?",
   "kind": "global",
   "file": "actions.zil",
   "line": 952,
   "value": "<>"
  },
  "MFOLLOW": {
   "name": "MFOLLOW",
   "kind": "global",
   "file": "actions.zil",
   "line": 953,
   "value": "<>"
  },
  "TRASH-COUNT": {
   "name": "TRASH-COUNT",
   "kind": "global",
   "file": "actions.zil",
   "line": 1084,
   "value": "0"
  },
  "SPIDER-QUESTIONS": {
   "name": "SPIDER-QUESTIONS",
   "kind": "global",
   "file": "actions.zil",
   "line": 1179,
   "value": "<LTABLE \"you a question about Earth, a rather abstruse one.\" \"who won the World Cup this year.\" \"if you have read any good books lately.\" \"what your astrological sign is.\" \"your views on the Luna City Manifesto.\">"
  },
  "REFERRED?": {
   "name": "REFERRED?",
   "kind": "global",
   "file": "actions.zil",
   "line": 1187,
   "value": "<>"
  },
  "TALKED?": {
   "name": "TALKED?",
   "kind": "global",
   "file": "actions.zil",
   "line": 1188,
   "value": "<>"
  },
  "ENGROSSED": {
   "name": "ENGROSSED",
   "kind": "global",
   "file": "actions.zil",
   "line": 1257,
   "value": "\"Gurthark, engrossed in the tape library, pays no attention to you.\""
  },
  "FF-STRENGTH": {
   "name": "FF-STRENGTH",
   "kind": "global",
   "file": "actions.zil",
   "line": 1383,
   "value": "2"
  },
  "FF-HERE": {
   "name": "FF-HERE",
   "kind": "global",
   "file": "actions.zil",
   "line": 1384,
   "value": "<>"
  },
  "FF-TABLE": {
   "name": "FF-TABLE",
   "kind": "global",
   "file": "actions.zil",
   "line": 1385,
   "value": "<TABLE FORCE-FIELD-1 FORCE-FIELD-2 FORCE-FIELD-3 FORCE-FIELD-4>"
  },
  "FF-FALLS": {
   "name": "FF-FALLS",
   "kind": "global",
   "file": "actions.zil",
   "line": 1387,
   "value": "<TABLE <> FF-BOWL-2 FF-BOWL-3 FF-BOWL-4>"
  },
  "UNDER-GLOBE": {
   "name": "UNDER-GLOBE",
   "kind": "global",
   "file": "actions.zil",
   "line": 1389,
   "value": "<>"
  },
  "WAS-UNDER-GLOBE": {
   "name": "WAS-UNDER-GLOBE",
   "kind": "global",
   "file": "actions.zil",
   "line": 1390,
   "value": "<>"
  },
  "SPHERE-SHRINKS": {
   "name": "SPHERE-SHRINKS",
   "kind": "global",
   "file": "actions.zil",
   "line": 1488,
   "value": "\"When the sphere shrinks, the \""
  },
  "NUMTAB": {
   "name": "NUMTAB",
   "kind": "global",
   "file": "actions.zil",
   "line": 1651,
   "value": "<LTABLE \"1\" \"2\" \"3\" \"4\">"
  },
  "COLOR-CODED": {
   "name": "COLOR-CODED",
   "kind": "global",
   "file": "actions.zil",
   "line": 1886,
   "value": "\"This is a docking port color-coded in red. \""
  },
  "SUIT-ON?": {
   "name": "SUIT-ON?",
   "kind": "global",
   "file": "actions.zil",
   "line": 1931,
   "value": "<>"
  },
  "THAT-END": {
   "name": "THAT-END",
   "kind": "global",
   "file": "actions.zil",
   "line": 1999,
   "value": "<>"
  },
  "THIS-END": {
   "name": "THIS-END",
   "kind": "global",
   "file": "actions.zil",
   "line": 2000,
   "value": "<>"
  },
  "DOOR-SOLVED?": {
   "name": "DOOR-SOLVED?",
   "kind": "global",
   "file": "actions.zil",
   "line": 2080,
   "value": "<>"
  },
  "ABOUT-SAME": {
   "name": "ABOUT-SAME",
   "kind": "global",
   "file": "actions.zil",
   "line": 2201,
   "value": "\" a distance somewhat nearer the center than the first large bump.\""
  },
  "YELLOW-OPEN?": {
   "name": "YELLOW-OPEN?",
   "kind": "global",
   "file": "actions.zil",
   "line": 2239,
   "value": "<>"
  },
  "IN-ARTIFACT?": {
   "name": "IN-ARTIFACT?",
   "kind": "global",
   "file": "actions.zil",
   "line": 2284,
   "value": "<>"
  },
  "ACADEMY-DEATH": {
   "name": "ACADEMY-DEATH",
   "kind": "global",
   "file": "actions.zil",
   "line": 2395,
   "value": "\"Didn't they teach you anything in the Academy? You\ncan't breathe vacuum! The process of dying in this way is very painful but\nat least relatively short.\""
  },
  "ALIENS-FRIENDLY?": {
   "name": "ALIENS-FRIENDLY?",
   "kind": "global",
   "file": "actions.zil",
   "line": 2493,
   "value": "T"
  },
  "ALIENS-DESCRIBED?": {
   "name": "ALIENS-DESCRIBED?",
   "kind": "global",
   "file": "actions.zil",
   "line": 2494,
   "value": "<>"
  },
  "HUSTLED?": {
   "name": "HUSTLED?",
   "kind": "global",
   "file": "actions.zil",
   "line": 2599,
   "value": "<>"
  },
  "ACTIVITY?": {
   "name": "ACTIVITY?",
   "kind": "global",
   "file": "actions.zil",
   "line": 2634,
   "value": "<>"
  },
  "ZAP-STRS": {
   "name": "ZAP-STRS",
   "kind": "global",
   "file": "actions.zil",
   "line": 2701,
   "value": "<TABLE \"once\" \"twice\" \"three times\">"
  },
  "POINTED?": {
   "name": "POINTED?",
   "kind": "global",
   "file": "actions.zil",
   "line": 2765,
   "value": "<>"
  },
  "CHFOLLOW": {
   "name": "CHFOLLOW",
   "kind": "global",
   "file": "actions.zil",
   "line": 2838,
   "value": "2"
  },
  "CHWAIT": {
   "name": "CHWAIT",
   "kind": "global",
   "file": "actions.zil",
   "line": 2839,
   "value": "0"
  },
  "CHPATH": {
   "name": "CHPATH",
   "kind": "global",
   "file": "actions.zil",
   "line": 2840,
   "value": "0"
  },
  "CHIEF-MOVES": {
   "name": "CHIEF-MOVES",
   "kind": "global",
   "file": "actions.zil",
   "line": 2892,
   "value": "<LTABLE \"The chief slips through an opening and disappears.\" \"Dodging several youngsters, the chief enters a hovel.\" \"The chief slips through a crowd, which parts deferentially.\" \"Glancing back at you, the chief leaves the room.\">"
  },
  "CAUGHT?": {
   "name": "CAUGHT?",
   "kind": "global",
   "file": "actions.zil",
   "line": 2919,
   "value": "<>"
  },
  "RATS-MAD?": {
   "name": "RATS-MAD?",
   "kind": "global",
   "file": "actions.zil",
   "line": 2988,
   "value": "<>"
  },
  "MELTED?": {
   "name": "MELTED?",
   "kind": "global",
   "file": "actions.zil",
   "line": 3097,
   "value": "<>"
  },
  "FRIED?": {
   "name": "FRIED?",
   "kind": "global",
   "file": "actions.zil",
   "line": 3098,
   "value": "<>"
  },
  "SWITCH-ON?": {
   "name": "SWITCH-ON?",
   "kind": "global",
   "file": "actions.zil",
   "line": 3099,
   "value": "<>"
  },
  "GOT-KEY?": {
   "name": "GOT-KEY?",
   "kind": "global",
   "file": "actions.zil",
   "line": 3100,
   "value": "<>"
  },
  "ZAP-CNT": {
   "name": "ZAP-CNT",
   "kind": "global",
   "file": "actions.zil",
   "line": 3148,
   "value": "3"
  },
  "ZAP-NUMS": {
   "name": "ZAP-NUMS",
   "kind": "global",
   "file": "actions.zil",
   "line": 3149,
   "value": "<LTABLE \"one\" \"two\" \"three\" \"four\">"
  },
  "HUNTER-COUNT": {
   "name": "HUNTER-COUNT",
   "kind": "global",
   "file": "actions.zil",
   "line": 3538,
   "value": "0"
  },
  "HUNTER-TABLE": {
   "name": "HUNTER-TABLE",
   "kind": "global",
   "file": "actions.zil",
   "line": 3539,
   "value": "<LTABLE \"Weasel-like aliens in a hunting party enter the grassland.\" \"Weasels are stalking the unicorn herd.\" \"The weasels attack the herd; one straggler is confused and the weasels\nconverge. Speared, the unicorn falls dead.\" \"Weasels are butchering a unicorn.\" \"Weasel-like aliens are departing after a unicorn hunt.\">"
  },
  "NIGHT?": {
   "name": "NIGHT?",
   "kind": "global",
   "file": "actions.zil",
   "line": 3608,
   "value": "<>"
  },
  "SLOT-TABLE": {
   "name": "SLOT-TABLE",
   "kind": "global",
   "file": "actions.zil",
   "line": 4004,
   "value": "<TABLE BLUE-KEY BLUE-SLOT \"blue\" GREEN-KEY GREEN-SLOT \"green\" VIOLET-KEY VIOLET-SLOT \"violet\" BROWN-KEY BROWN-SLOT \"brown\" 0>"
  },
  "VIEW-STATUS": {
   "name": "VIEW-STATUS",
   "kind": "global",
   "file": "actions.zil",
   "line": 4011,
   "value": "0"
  },
  "VIEW-SCREEN-VIEWS": {
   "name": "VIEW-SCREEN-VIEWS",
   "kind": "global",
   "file": "actions.zil",
   "line": 4012,
   "value": "<TABLE \"an empty area with a stylized depiction of the artifact itself\" \"the inner solar system, from the sun out to Jupiter\" \"the entire solar system, including the cometary halo\" \"the region near the solar system, not including nearby stars\" \"the local interstellar region, including a few nearer stars\">"
  },
  "COURSE-SHAPE": {
   "name": "COURSE-SHAPE",
   "kind": "global",
   "file": "actions.zil",
   "line": 4019,
   "value": "0"
  },
  "TARGET": {
   "name": "TARGET",
   "kind": "global",
   "file": "actions.zil",
   "line": 4020,
   "value": "0"
  },
  "COURSES": {
   "name": "COURSES",
   "kind": "global",
   "file": "actions.zil",
   "line": 4021,
   "value": "<LTABLE \"in the center of \" \"in a parabola looping around \" \"in an ellipse surrounding \" \"in a circle around \">"
  },
  "TARGETS": {
   "name": "TARGETS",
   "kind": "global",
   "file": "actions.zil",
   "line": 4026,
   "value": "<LTABLE \"the Sun\" \"Mercury\" \"Venus\" \"Earth\" \"Mars\" \"Jupiter\">"
  },
  "SPEEDS": {
   "name": "SPEEDS",
   "kind": "global",
   "file": "actions.zil",
   "line": 4027,
   "value": "<LTABLE \"slowly\" \"rapidly\">"
  },
  "SPEED-VALUE": {
   "name": "SPEED-VALUE",
   "kind": "global",
   "file": "actions.zil",
   "line": 4028,
   "value": "0"
  },
  "CONTROL-SCORE": {
   "name": "CONTROL-SCORE",
   "kind": "global",
   "file": "actions.zil",
   "line": 4139,
   "value": "25"
  },
  "C-TABLELEN": {
   "name": "C-TABLELEN",
   "kind": "constant",
   "file": "clock.zil",
   "line": 6,
   "value": "180"
  },
  "C-TABLE": {
   "name": "C-TABLE",
   "kind": "global",
   "file": "clock.zil",
   "line": 8,
   "value": "<ITABLE NONE 180>"
  },
  "C-DEMONS": {
   "name": "C-DEMONS",
   "kind": "global",
   "file": "clock.zil",
   "line": 10,
   "value": "180"
  },
  "C-INTS": {
   "name": "C-INTS",
   "kind": "global",
   "file": "clock.zil",
   "line": 12,
   "value": "180"
  },
  "C-INTLEN": {
   "name": "C-INTLEN",
   "kind": "constant",
   "file": "clock.zil",
   "line": 14,
   "value": "6"
  },
  "C-ENABLED?": {
   "name": "C-ENABLED?",
   "kind": "constant",
   "file": "clock.zil",
   "line": 16,
   "value": "0"
  },
  "C-TICK": {
   "name": "C-TICK",
   "kind": "constant",
   "file": "clock.zil",
   "line": 18,
   "value": "1"
  },
  "C-RTN": {
   "name": "C-RTN",
   "kind": "constant",
   "file": "clock.zil",
   "line": 20,
   "value": "2"
  },
  "CLOCK-WAIT": {
   "name": "CLOCK-WAIT",
   "kind": "global",
   "file": "clock.zil",
   "line": 47,
   "value": "<>"
  },
  "LOAD-ALLOWED": {
   "name": "LOAD-ALLOWED",
   "kind": "global",
   "file": "dungeon.zil",
   "line": 12,
   "value": "100"
  },
  "MASSES": {
   "name": "MASSES",
   "kind": "global",
   "file": "dungeon.zil",
   "line": 183,
   "value": "<LTABLE UM08 UM12 UM24 UM28 UM31 UM52 UM70 UM91>"
  },
  "MASS-LOCS": {
   "name": "MASS-LOCS",
   "kind": "global",
   "file": "dungeon.zil",
   "line": 186,
   "value": "<TABLE 8 ;\"number of objects in table\" ;\"R THETA PHI\" 150 210 17 100 345 107 100 285 87 250 45 178 150 105 67 175 165 35 100 135 101 50 15 121>"
  },
  "KNOWNS": {
   "name": "KNOWNS",
   "kind": "global",
   "file": "dungeon.zil",
   "line": 198,
   "value": "<LTABLE AB40 AX87 AX32 AX01 AX71 US75 MARS>"
  },
  "KNOWN-LOCS": {
   "name": "KNOWN-LOCS",
   "kind": "global",
   "file": "dungeon.zil",
   "line": 201,
   "value": "<TABLE 7 ;\"number of objects in table\" ;\"R THETA PHI\" 250 300 22 125 75 102 125 240 105 200 240 134 125 180 47 175 135 34 250 120 12>"
  },
  "RED-DISK-ON": {
   "name": "RED-DISK-ON",
   "kind": "global",
   "file": "dungeon.zil",
   "line": 1367,
   "value": "<>"
  },
  "BLUE-DISK-ON": {
   "name": "BLUE-DISK-ON",
   "kind": "global",
   "file": "dungeon.zil",
   "line": 1368,
   "value": "<>"
  },
  "AIR-FLASH": {
   "name": "AIR-FLASH",
   "kind": "global",
   "file": "emerg.zil",
   "line": 85,
   "value": "<TABLE \"flickering dimly\" \"flashing slowly\" \"flashing rapidly\" \"also brightly lit\" \"also brightly lit\">"
  },
  "REPAIR-PANEL": {
   "name": "REPAIR-PANEL",
   "kind": "global",
   "file": "emerg.zil",
   "line": 92,
   "value": "\" bears a symbol in three parts: the first two parts, in black, are a\nsolid block and a fluid level. The third, in red, is a series of parallel\nwavy lines.\""
  },
  "POISON-COUNT": {
   "name": "POISON-COUNT",
   "kind": "global",
   "file": "emerg.zil",
   "line": 194,
   "value": "0"
  },
  "STUPID-AIRGONE-MESSAGE": {
   "name": "STUPID-AIRGONE-MESSAGE",
   "kind": "global",
   "file": "emerg.zil",
   "line": 209,
   "value": "\"Suddenly, everything begins going dark, as though the artifact was\nshutting down. A thrumming vibration stops; one you didn't even notice\nuntil it ceased.\""
  },
  "AIR-COUNT": {
   "name": "AIR-COUNT",
   "kind": "global",
   "file": "emerg.zil",
   "line": 229,
   "value": "0"
  },
  "AMMONIA-TABLE": {
   "name": "AMMONIA-TABLE",
   "kind": "global",
   "file": "emerg.zil",
   "line": 249,
   "value": "<TABLE \"foo\" \"glass cleaner.\" \"ammonia.\" \"ammonia.\">"
  },
  "METHANE-TABLE": {
   "name": "METHANE-TABLE",
   "kind": "global",
   "file": "emerg.zil",
   "line": 255,
   "value": "<TABLE \"foo\" \"charcoal.\" \"coal gas.\" \"coal gas.\">"
  },
  "AMMONIA?": {
   "name": "AMMONIA?",
   "kind": "global",
   "file": "emerg.zil",
   "line": 261,
   "value": "<>"
  },
  "POISON-AIRS": {
   "name": "POISON-AIRS",
   "kind": "global",
   "file": "emerg.zil",
   "line": 263,
   "value": "<TABLE \"foo\" \"quite pungent, smelling vaguely of \" \"quite hard to breathe, permeated with the smell of \" \"almost unbreathable, and heavy with the smell of \">"
  },
  "LIGHT-AIRS": {
   "name": "LIGHT-AIRS",
   "kind": "global",
   "file": "emerg.zil",
   "line": 269,
   "value": "<TABLE \"quite breathable and slightly sweet.\" \"quite thin.\" \"quite hard to breathe.\" \"almost unbreathable.\">"
  },
  "BIGFIX": {
   "name": "BIGFIX",
   "kind": "global",
   "file": "starcross.zil",
   "line": 12,
   "value": "10000"
  },
  "P-WON": {
   "name": "P-WON",
   "kind": "global",
   "file": "main.zil",
   "line": 7,
   "value": "<>"
  },
  "M-FATAL": {
   "name": "M-FATAL",
   "kind": "constant",
   "file": "main.zil",
   "line": 9,
   "value": "2"
  },
  "M-HANDLED": {
   "name": "M-HANDLED",
   "kind": "constant",
   "file": "main.zil",
   "line": 11,
   "value": "1"
  },
  "M-NOT-HANDLED": {
   "name": "M-NOT-HANDLED",
   "kind": "constant",
   "file": "main.zil",
   "line": 13,
   "value": "<>"
  },
  "M-BEG": {
   "name": "M-BEG",
   "kind": "constant",
   "file": "main.zil",
   "line": 15,
   "value": "1"
  },
  "M-END": {
   "name": "M-END",
   "kind": "constant",
   "file": "main.zil",
   "line": 17,
   "value": "<>"
  },
  "M-ENTER": {
   "name": "M-ENTER",
   "kind": "constant",
   "file": "main.zil",
   "line": 19,
   "value": "2"
  },
  "M-LOOK": {
   "name": "M-LOOK",
   "kind": "constant",
   "file": "main.zil",
   "line": 21,
   "value": "3"
  },
  "M-FLASH": {
   "name": "M-FLASH",
   "kind": "constant",
   "file": "main.zil",
   "line": 23,
   "value": "4"
  },
  "M-OBJDESC": {
   "name": "M-OBJDESC",
   "kind": "constant",
   "file": "main.zil",
   "line": 25,
   "value": "5"
  },
  "L-PRSA": {
   "name": "L-PRSA",
   "kind": "global",
   "file": "main.zil",
   "line": 136,
   "value": "<>"
  },
  "L-PRSO": {
   "name": "L-PRSO",
   "kind": "global",
   "file": "main.zil",
   "line": 138,
   "value": "<>"
  },
  "L-PRSI": {
   "name": "L-PRSI",
   "kind": "global",
   "file": "main.zil",
   "line": 140,
   "value": "<>"
  },
  "ALWAYS-LIT": {
   "name": "ALWAYS-LIT",
   "kind": "global",
   "file": "parser.zil",
   "line": 13,
   "value": "<>"
  },
  "GWIM-DISABLE": {
   "name": "GWIM-DISABLE",
   "kind": "global",
   "file": "parser.zil",
   "line": 15,
   "value": "<>"
  },
  "PRSA": {
   "name": "PRSA",
   "kind": "global",
   "file": "parser.zil",
   "line": 17,
   "value": "0"
  },
  "PRSI": {
   "name": "PRSI",
   "kind": "global",
   "file": "parser.zil",
   "line": 19,
   "value": "0"
  },
  "PRSO": {
   "name": "PRSO",
   "kind": "global",
   "file": "parser.zil",
   "line": 21,
   "value": "0"
  },
  "P-ADVERB": {
   "name": "P-ADVERB",
   "kind": "global",
   "file": "parser.zil",
   "line": 23,
   "value": "<>"
  },
  "P-ADJECTIVE": {
   "name": "P-ADJECTIVE",
   "kind": "global",
   "file": "parser.zil",
   "line": 25,
   "value": "<>"
  },
  "P-SPACE": {
   "name": "P-SPACE",
   "kind": "global",
   "file": "parser.zil",
   "line": 27,
   "value": "1"
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
  "A-LEXV": {
   "name": "A-LEXV",
   "kind": "global",
   "file": "parser.zil",
   "line": 52,
   "value": "<ITABLE BYTE 120>"
  },
  "A-INBUF": {
   "name": "A-INBUF",
   "kind": "global",
   "file": "parser.zil",
   "line": 53,
   "value": "<ITABLE BYTE 100>"
  },
  "A-PTR": {
   "name": "A-PTR",
   "kind": "global",
   "file": "parser.zil",
   "line": 54,
   "value": "0"
  },
  "A-PTR2": {
   "name": "A-PTR2",
   "kind": "global",
   "file": "parser.zil",
   "line": 55,
   "value": "0"
  },
  "NOT-AGAIN": {
   "name": "NOT-AGAIN",
   "kind": "global",
   "file": "parser.zil",
   "line": 56,
   "value": "2"
  },
  "P-CONT": {
   "name": "P-CONT",
   "kind": "global",
   "file": "parser.zil",
   "line": 59,
   "value": "<>"
  },
  "P-IT-OBJECT": {
   "name": "P-IT-OBJECT",
   "kind": "global",
   "file": "parser.zil",
   "line": 61,
   "value": "<>"
  },
  "P-IT-LOC": {
   "name": "P-IT-LOC",
   "kind": "global",
   "file": "parser.zil",
   "line": 62,
   "value": "<>"
  },
  "P-OFLAG": {
   "name": "P-OFLAG",
   "kind": "global",
   "file": "parser.zil",
   "line": 66,
   "value": "<>"
  },
  "P-MERGED": {
   "name": "P-MERGED",
   "kind": "global",
   "file": "parser.zil",
   "line": 68,
   "value": "<>"
  },
  "P-ACLAUSE": {
   "name": "P-ACLAUSE",
   "kind": "global",
   "file": "parser.zil",
   "line": 70,
   "value": "<>"
  },
  "P-ANAM": {
   "name": "P-ANAM",
   "kind": "global",
   "file": "parser.zil",
   "line": 72,
   "value": "<>"
  },
  "P-AADJ": {
   "name": "P-AADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 74,
   "value": "<>"
  },
  "P-PHRLEN": {
   "name": "P-PHRLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 77,
   "value": "3"
  },
  "P-ORPHLEN": {
   "name": "P-ORPHLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 79,
   "value": "7"
  },
  "P-RTLEN": {
   "name": "P-RTLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 81,
   "value": "3"
  },
  "P-LEXWORDS": {
   "name": "P-LEXWORDS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 84,
   "value": "1"
  },
  "P-LEXSTART": {
   "name": "P-LEXSTART",
   "kind": "constant",
   "file": "parser.zil",
   "line": 87,
   "value": "1"
  },
  "P-LEXELEN": {
   "name": "P-LEXELEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 90,
   "value": "2"
  },
  "P-WORDLEN": {
   "name": "P-WORDLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 92,
   "value": "4"
  },
  "P-PSOFF": {
   "name": "P-PSOFF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 95,
   "value": "4"
  },
  "P-P1OFF": {
   "name": "P-P1OFF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 98,
   "value": "5"
  },
  "P-P1BITS": {
   "name": "P-P1BITS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 101,
   "value": "3"
  },
  "P-ITBLLEN": {
   "name": "P-ITBLLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 103,
   "value": "9"
  },
  "P-ITBL": {
   "name": "P-ITBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 105,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-OTBL": {
   "name": "P-OTBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 107,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-VTBL": {
   "name": "P-VTBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 109,
   "value": "<TABLE 0 0 0 0>"
  },
  "P-NCN": {
   "name": "P-NCN",
   "kind": "global",
   "file": "parser.zil",
   "line": 111,
   "value": "0"
  },
  "P-VERB": {
   "name": "P-VERB",
   "kind": "constant",
   "file": "parser.zil",
   "line": 113,
   "value": "0"
  },
  "P-VERBN": {
   "name": "P-VERBN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 115,
   "value": "1"
  },
  "P-PREP1": {
   "name": "P-PREP1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 117,
   "value": "2"
  },
  "P-PREP1N": {
   "name": "P-PREP1N",
   "kind": "constant",
   "file": "parser.zil",
   "line": 119,
   "value": "3"
  },
  "P-PREP2": {
   "name": "P-PREP2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 121,
   "value": "4"
  },
  "P-PREP2N": {
   "name": "P-PREP2N",
   "kind": "constant",
   "file": "parser.zil",
   "line": 123,
   "value": "5"
  },
  "P-NC1": {
   "name": "P-NC1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 125,
   "value": "6"
  },
  "P-NC1L": {
   "name": "P-NC1L",
   "kind": "constant",
   "file": "parser.zil",
   "line": 127,
   "value": "7"
  },
  "P-NC2": {
   "name": "P-NC2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 129,
   "value": "8"
  },
  "P-NC2L": {
   "name": "P-NC2L",
   "kind": "constant",
   "file": "parser.zil",
   "line": 131,
   "value": "9"
  },
  "QUOTE-FLAG": {
   "name": "QUOTE-FLAG",
   "kind": "global",
   "file": "parser.zil",
   "line": 133,
   "value": "<>"
  },
  "P-WALK-DIR": {
   "name": "P-WALK-DIR",
   "kind": "global",
   "file": "parser.zil",
   "line": 319,
   "value": "<>"
  },
  "P-NUMBER": {
   "name": "P-NUMBER",
   "kind": "global",
   "file": "parser.zil",
   "line": 431,
   "value": "0"
  },
  "P-SLOCBITS": {
   "name": "P-SLOCBITS",
   "kind": "global",
   "file": "parser.zil",
   "line": 529,
   "value": "0"
  },
  "P-SYNLEN": {
   "name": "P-SYNLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 531,
   "value": "8"
  },
  "P-SBITS": {
   "name": "P-SBITS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 533,
   "value": "0"
  },
  "P-SPREP1": {
   "name": "P-SPREP1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 535,
   "value": "1"
  },
  "P-SPREP2": {
   "name": "P-SPREP2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 537,
   "value": "2"
  },
  "P-SFWIM1": {
   "name": "P-SFWIM1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 539,
   "value": "3"
  },
  "P-SFWIM2": {
   "name": "P-SFWIM2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 541,
   "value": "4"
  },
  "P-SLOC1": {
   "name": "P-SLOC1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 543,
   "value": "5"
  },
  "P-SLOC2": {
   "name": "P-SLOC2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 545,
   "value": "6"
  },
  "P-SACTION": {
   "name": "P-SACTION",
   "kind": "constant",
   "file": "parser.zil",
   "line": 547,
   "value": "7"
  },
  "P-SONUMS": {
   "name": "P-SONUMS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 549,
   "value": "3"
  },
  "P-GWIMBIT": {
   "name": "P-GWIMBIT",
   "kind": "global",
   "file": "parser.zil",
   "line": 725,
   "value": "0"
  },
  "P-NAM": {
   "name": "P-NAM",
   "kind": "global",
   "file": "parser.zil",
   "line": 781,
   "value": "<>"
  },
  "P-ADJ": {
   "name": "P-ADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 783,
   "value": "<>"
  },
  "P-ADJN": {
   "name": "P-ADJN",
   "kind": "global",
   "file": "parser.zil",
   "line": 785,
   "value": "<>"
  },
  "P-PRSO": {
   "name": "P-PRSO",
   "kind": "global",
   "file": "parser.zil",
   "line": 787,
   "value": "<ITABLE NONE 50>"
  },
  "P-PRSI": {
   "name": "P-PRSI",
   "kind": "global",
   "file": "parser.zil",
   "line": 789,
   "value": "<ITABLE NONE 50>"
  },
  "P-BUTS": {
   "name": "P-BUTS",
   "kind": "global",
   "file": "parser.zil",
   "line": 791,
   "value": "<ITABLE NONE 50>"
  },
  "P-MERGE": {
   "name": "P-MERGE",
   "kind": "global",
   "file": "parser.zil",
   "line": 793,
   "value": "<ITABLE NONE 50>"
  },
  "P-OCLAUSE": {
   "name": "P-OCLAUSE",
   "kind": "global",
   "file": "parser.zil",
   "line": 795,
   "value": "<ITABLE NONE 50>"
  },
  "P-MATCHLEN": {
   "name": "P-MATCHLEN",
   "kind": "global",
   "file": "parser.zil",
   "line": 797,
   "value": "0"
  },
  "P-GETFLAGS": {
   "name": "P-GETFLAGS",
   "kind": "global",
   "file": "parser.zil",
   "line": 799,
   "value": "0"
  },
  "P-ALL": {
   "name": "P-ALL",
   "kind": "constant",
   "file": "parser.zil",
   "line": 801,
   "value": "1"
  },
  "P-ONE": {
   "name": "P-ONE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 803,
   "value": "2"
  },
  "P-INHIBIT": {
   "name": "P-INHIBIT",
   "kind": "constant",
   "file": "parser.zil",
   "line": 805,
   "value": "4"
  },
  "P-CSPTR": {
   "name": "P-CSPTR",
   "kind": "global",
   "file": "parser.zil",
   "line": 807,
   "value": "<>"
  },
  "P-CEPTR": {
   "name": "P-CEPTR",
   "kind": "global",
   "file": "parser.zil",
   "line": 808,
   "value": "<>"
  },
  "SH": {
   "name": "SH",
   "kind": "constant",
   "file": "parser.zil",
   "line": 875,
   "value": "128"
  },
  "SC": {
   "name": "SC",
   "kind": "constant",
   "file": "parser.zil",
   "line": 877,
   "value": "64"
  },
  "SIR": {
   "name": "SIR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 879,
   "value": "32"
  },
  "SOG": {
   "name": "SOG",
   "kind": "constant",
   "file": "parser.zil",
   "line": 881,
   "value": "16"
  },
  "STAKE": {
   "name": "STAKE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 883,
   "value": "8"
  },
  "SMANY": {
   "name": "SMANY",
   "kind": "constant",
   "file": "parser.zil",
   "line": 885,
   "value": "4"
  },
  "SHAVE": {
   "name": "SHAVE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 887,
   "value": "2"
  },
  "P-SRCBOT": {
   "name": "P-SRCBOT",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1054,
   "value": "2"
  },
  "P-SRCTOP": {
   "name": "P-SRCTOP",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1056,
   "value": "0"
  },
  "P-SRCALL": {
   "name": "P-SRCALL",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1058,
   "value": "1"
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
  "LIT": {
   "name": "LIT",
   "kind": "global",
   "file": "verbs.zil",
   "line": 50,
   "value": "<>"
  },
  "MOVES": {
   "name": "MOVES",
   "kind": "global",
   "file": "verbs.zil",
   "line": 187,
   "value": "0"
  },
  "SCORE": {
   "name": "SCORE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 188,
   "value": "0"
  },
  "WON-FLAG": {
   "name": "WON-FLAG",
   "kind": "global",
   "file": "verbs.zil",
   "line": 189,
   "value": "<>"
  },
  "SCORE-MAX": {
   "name": "SCORE-MAX",
   "kind": "global",
   "file": "verbs.zil",
   "line": 203,
   "value": "400"
  },
  "DEATHS": {
   "name": "DEATHS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 312,
   "value": "0"
  },
  "LUCKY": {
   "name": "LUCKY",
   "kind": "global",
   "file": "verbs.zil",
   "line": 313,
   "value": "1"
  },
  "REXIT": {
   "name": "REXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 419,
   "value": "0"
  },
  "UEXIT": {
   "name": "UEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 420,
   "value": "1"
  },
  "NEXIT": {
   "name": "NEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 421,
   "value": "2"
  },
  "FEXIT": {
   "name": "FEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 422,
   "value": "3"
  },
  "CEXIT": {
   "name": "CEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 423,
   "value": "4"
  },
  "DEXIT": {
   "name": "DEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 424,
   "value": "5"
  },
  "NEXITSTR": {
   "name": "NEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 426,
   "value": "0"
  },
  "FEXITFCN": {
   "name": "FEXITFCN",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 427,
   "value": "0"
  },
  "CEXITFLAG": {
   "name": "CEXITFLAG",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 428,
   "value": "1"
  },
  "CEXITSTR": {
   "name": "CEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 429,
   "value": "1"
  },
  "DEXITOBJ": {
   "name": "DEXITOBJ",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 430,
   "value": "1"
  },
  "DEXITSTR": {
   "name": "DEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 431,
   "value": "1"
  },
  "INDENTS": {
   "name": "INDENTS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 503,
   "value": "<TABLE \"\" \"  \" \"    \" \"      \" \"        \" \"          \">"
  },
  "FUMBLE-NUMBER": {
   "name": "FUMBLE-NUMBER",
   "kind": "global",
   "file": "verbs.zil",
   "line": 531,
   "value": "7"
  },
  "FUMBLE-PROB": {
   "name": "FUMBLE-PROB",
   "kind": "global",
   "file": "verbs.zil",
   "line": 532,
   "value": "8"
  },
  "YUKS": {
   "name": "YUKS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 586,
   "value": "<LTABLE \"A valiant attempt.\" \"You can't be serious.\" \"Not bloody likely.\" \"An interesting idea...\" \"What a concept!\">"
  },
  "COPR-NOTICE": {
   "name": "COPR-NOTICE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 773,
   "value": "\" a transcript of interaction with STARCROSS.|\nSTARCROSS is a registered trademark of Infocom, Inc.|\nCopyright (c) 1982 Infocom, Inc.  All rights reserved.|\""
  },
  "HS": {
   "name": "HS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 938,
   "value": "0"
  },
  "HELLOS": {
   "name": "HELLOS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 946,
   "value": "<LTABLE \"Hello.\" \"Nice weather we're having.\" \"Goodbye.\">"
  },
  "WHEEEEE": {
   "name": "WHEEEEE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 951,
   "value": "<LTABLE \"Have you tried skipping from star to star, too?\" \"Are you enjoying yourself?\" \"Wheeeeeeeeee!!!!!\">"
  },
  "HO-HUM": {
   "name": "HO-HUM",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1074,
   "value": "<LTABLE \" isn't notably helpful.\" \" does nothing.\" \" has no effect.\">"
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
     "line": 27
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
     "line": 29
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
     "line": 32
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
     "line": 34
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
     "line": 37
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
     "line": 40
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
     "line": 42
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
     "line": 44
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
     "line": 46
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
     "line": 48
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
     "line": 50
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
     "line": 52
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
     "line": 58
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
     "line": 60
    },
    {
     "pattern": "ANSWER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-REPLY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 61
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
     "line": 64
    }
   ]
  },
  "ATTACK": {
   "verb": "ATTACK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ATTACK OBJECT (FIND VILLAIN) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 66
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
     "line": 73
    }
   ]
  },
  "CLIMB": {
   "verb": "CLIMB",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CLIMB ON OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-CLIMB-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 76
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
     "line": 77
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
     "line": 78
    },
    {
     "pattern": "CLIMB OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLIMB-FOO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 79
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
     "line": 80
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
     "line": 83
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
     "line": 84
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
     "line": 85
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
     "line": 88
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
     "line": 92
    },
    {
     "pattern": "CURSE OBJECT (FIND VILLAIN)",
     "objects": 1,
     "particles": [],
     "action": "V-CURSES",
     "preaction": null,
     "file": "syntax.zil",
     "line": 93
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
     "line": 96
    },
    {
     "pattern": "DIG WITH OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-DIG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 100
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
     "line": 105
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
     "line": 108
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
     "line": 113
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
     "line": 114
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
     "line": 115
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
     "line": 116
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
     "line": 119
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
     "line": 124
    },
    {
     "pattern": "ENTER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 125
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
     "line": 126
    },
    {
     "pattern": "EXIT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 127
    }
   ]
  },
  "EXAMINE": {
   "verb": "EXAMINE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EXAMINE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-EXAMINE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 129
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
     "line": 130
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
     "line": 132
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
     "line": 136
    }
   ]
  },
  "FIRE": {
   "verb": "FIRE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FIRE OBJECT WITH OBJECT (FIND WEAPONBIT) (HELD)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-SZAP",
     "preaction": "PRE-SZAP",
     "file": "syntax.zil",
     "line": 140
    },
    {
     "pattern": "FIRE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-ZAP",
     "preaction": "PRE-ZAP",
     "file": "syntax.zil",
     "line": 141
    },
    {
     "pattern": "FIRE OBJECT (FIND WEAPONBIT) (HELD) AT OBJECT",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-ZAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 142
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
     "line": 146
    },
    {
     "pattern": "FOLLOW OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 147
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
     "line": 150
    },
    {
     "pattern": "FLY OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FLY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 151
    }
   ]
  },
  "GIVE": {
   "verb": "GIVE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "GIVE OBJECT (MANY HELD HAVE ;CARRIED ;ON-GROUND ;IN-ROOM) TO OBJECT (FIND VICBIT) (ON-GROUND)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-GIVE",
     "preaction": "PRE-GIVE",
     "file": "syntax.zil",
     "line": 153
    },
    {
     "pattern": "GIVE OBJECT (FIND VICBIT) (ON-GROUND) OBJECT (MANY HELD HAVE)",
     "objects": 2,
     "particles": [],
     "action": "V-SGIVE",
     "preaction": "PRE-SGIVE",
     "file": "syntax.zil",
     "line": 158
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
     "line": 164
    },
    {
     "pattern": "HELLO OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-HELLO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 165
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
     "line": 170
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
     "line": 171
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
     "line": 172
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
     "line": 173
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
     "line": 174
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
     "line": 175
    },
    {
     "pattern": "JUMP TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
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
  "KILL": {
   "verb": "KILL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "KILL OBJECT (FIND VILLAIN) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-KILL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 181
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
     "line": 182
    }
   ]
  },
  "KISS": {
   "verb": "KISS",
   "synonyms": [],
   "productions": [
    {
     "pattern": "KISS OBJECT (FIND VILLAIN) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-KISS",
     "preaction": null,
     "file": "syntax.zil",
     "line": 189
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
     "line": 191
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
     "line": 192
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
     "line": 193
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
     "line": 196
    },
    {
     "pattern": "LAND OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-LAND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 197
    },
    {
     "pattern": "LAND ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LAND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 198
    },
    {
     "pattern": "LAND WITH OBJECT",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-LAND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 199
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
     "line": 202
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
     "line": 204
    },
    {
     "pattern": "LEAVE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-DROP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 205
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
     "line": 207
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
     "line": 208
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
     "line": 210
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
     "line": 216
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
     "line": 217
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
     "line": 218
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
     "line": 219
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
     "line": 220
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
     "line": 221
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
     "line": 222
    },
    {
     "pattern": "LOOK IN OBJECT (HELD CARRIED ON-GROUND IN-ROOM MANY) WITH OBJECT",
     "objects": 2,
     "particles": [
      "IN",
      "WITH"
     ],
     "action": "V-LOOK-SAFELY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 223
    },
    {
     "pattern": "LOOK AT OBJECT (HELD CARRIED ON-GROUND IN-ROOM MANY) WITH OBJECT",
     "objects": 2,
     "particles": [
      "AT",
      "WITH"
     ],
     "action": "V-LOOK-SAFELY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 224
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
     "line": 225
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
     "line": 228
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
     "line": 229
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
     "line": 230
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
     "line": 231
    }
   ]
  },
  "EMPTY": {
   "verb": "EMPTY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EMPTY OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-EMPTY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 235
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
     "line": 237
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
     "line": 239
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
     "line": 242
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
     "line": 244
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
     "line": 245
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
     "line": 246
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
     "line": 250
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
     "line": 251
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
     "line": 254
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
     "line": 259
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
     "line": 267
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
     "line": 270
    },
    {
     "pattern": "OPEN OBJECT (FIND DOORBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (ON-GROUND IN-ROOM HELD CARRIED)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-OPEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 274
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
     "line": 280
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
     "line": 281
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
     "line": 283
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
     "line": 288
    }
   ]
  },
  "POKE": {
   "verb": "POKE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "POKE OBJECT (FIND VILLAIN) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": "PRE-MUNG",
     "file": "syntax.zil",
     "line": 291
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
     "line": 298
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
     "line": 299
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
     "line": 300
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
     "line": 301
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
     "line": 302
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
     "line": 305
    },
    {
     "pattern": "PUT OBJECT (HELD MANY HAVE TAKE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 306
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
     "line": 307
    },
    {
     "pattern": "PUT OBJECT (HELD MANY HAVE TAKE) UNDER OBJECT",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 308
    },
    {
     "pattern": "PUT ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-WEAR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 309
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
     "line": 312
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
     "line": 313
    }
   ]
  },
  "RAPE": {
   "verb": "RAPE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "RAPE OBJECT (FIND VICBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-RAPE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 316
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
     "line": 319
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
     "line": 320
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
     "line": 322
    },
    {
     "pattern": "READ OBJECT (FIND READBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "syntax.zil",
     "line": 325
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
     "line": 332
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
     "line": 333
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
     "line": 336
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
     "line": 337
    }
   ]
  },
  "SHAKE": {
   "verb": "SHAKE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SHAKE OBJECT (HAVE TAKE)",
     "objects": 1,
     "particles": [],
     "action": "V-SHAKE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 339
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
     "line": 341
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
     "line": 343
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
     "line": 346
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
     "line": 349
    }
   ]
  },
  "STRIKE": {
   "verb": "STRIKE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "STRIKE OBJECT (FIND VICBIT) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED ON-GROUND IN-ROOM HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 351
    },
    {
     "pattern": "STRIKE OBJECT (FIND VICBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 356
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
     "line": 360
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
     "line": 361
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
     "line": 364
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
     "line": 367
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
     "line": 368
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
     "line": 369
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
     "line": 370
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
     "line": 375
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEBIT) (IN-ROOM CARRIED) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 380
    },
    {
     "pattern": "TAKE OFF OBJECT (FIND WEARBIT) (HELD CARRIED)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-TAKE-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 385
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
     "line": 386
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
     "line": 389
    },
    {
     "pattern": "REMOVE OBJECT FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-TAKE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 390
    }
   ]
  },
  "TELL": {
   "verb": "TELL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TELL OBJECT (FIND VICBIT) (IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-TELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 392
    }
   ]
  },
  "SMILE": {
   "verb": "SMILE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SMILE AT OBJECT (FIND VILLAIN)",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-SMILE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 395
    },
    {
     "pattern": "SMILE",
     "objects": 0,
     "particles": [],
     "action": "V-SMILE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 396
    }
   ]
  },
  "SAY": {
   "verb": "SAY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SAY TO OBJECT (FIND VICBIT) (IN-ROOM)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-TELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 399
    },
    {
     "pattern": "SAY",
     "objects": 0,
     "particles": [],
     "action": "V-SAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 400
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
     "line": 403
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
     "line": 408
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
     "line": 414
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
     "line": 415
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
     "line": 416
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-THROW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 417
    }
   ]
  },
  "HOOK": {
   "verb": "HOOK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "HOOK OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-TIE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 420
    },
    {
     "pattern": "HOOK OBJECT (HELD CARRIED) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-TIE",
     "preaction": "PRE-TIE",
     "file": "syntax.zil",
     "line": 421
    }
   ]
  },
  "TURN": {
   "verb": "TURN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TURN OBJECT (FIND TURNBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (ON-GROUND IN-ROOM HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TURN",
     "preaction": "PRE-TURN",
     "file": "syntax.zil",
     "line": 424
    },
    {
     "pattern": "TURN ON OBJECT (FIND LIGHTBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 429
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
     "line": 432
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
     "line": 435
    }
   ]
  },
  "SET": {
   "verb": "SET",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SET OBJECT (ON-GROUND IN-ROOM) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-SET",
     "preaction": null,
     "file": "syntax.zil",
     "line": 442
    },
    {
     "pattern": "SET OBJECT (ON-GROUND IN-ROOM) FOR OBJECT",
     "objects": 2,
     "particles": [
      "FOR"
     ],
     "action": "V-SET",
     "preaction": null,
     "file": "syntax.zil",
     "line": 443
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
     "line": 446
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
     "line": 452
    },
    {
     "pattern": "UNTIE OBJECT (ON-GROUND IN-ROOM HELD CARRIED) FROM OBJECT (HELD CARRIED)",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-UNTIE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 455
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
     "line": 462
    }
   ]
  },
  "WAKE": {
   "verb": "WAKE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WAKE OBJECT (FIND VICBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-ALARM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 464
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
     "line": 465
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
     "line": 468
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
     "line": 469
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
     "line": 470
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
     "line": 471
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
     "line": 472
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
     "line": 473
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
     "line": 474
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
     "line": 477
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
     "line": 478
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
     "line": 481
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
     "line": 484
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
     "line": 487
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
     "line": 489
    },
    {
     "pattern": "YES OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-YES",
     "preaction": null,
     "file": "syntax.zil",
     "line": 490
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
     "line": 493
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
     "line": 502
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
     "line": 503
    }
   ]
  },
  "R": {
   "verb": "R",
   "synonyms": [],
   "productions": [
    {
     "pattern": "R OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-R",
     "preaction": null,
     "file": "syntax.zil",
     "line": 505
    }
   ]
  },
  "THETA": {
   "verb": "THETA",
   "synonyms": [],
   "productions": [
    {
     "pattern": "THETA OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-THETA",
     "preaction": null,
     "file": "syntax.zil",
     "line": 507
    }
   ]
  },
  "PHI": {
   "verb": "PHI",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PHI OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-PHI",
     "preaction": null,
     "file": "syntax.zil",
     "line": 509
    }
   ]
  },
  "REPORT": {
   "verb": "REPORT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "REPORT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-REPORT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 514
    }
   ]
  },
  "$FALL": {
   "verb": "$FALL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$FALL OBJECT OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-FALL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 516
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
  "$VERIFY": {
   "word": "$VERIFY",
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
  "AGAIN": {
   "word": "AGAIN",
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
     "of": "JUMP"
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
     "of": "SAY"
    },
    {
     "kind": "particle",
     "of": "HOOK"
    },
    {
     "kind": "particle",
     "of": "TURN"
    },
    {
     "kind": "particle",
     "of": "SET"
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
     "of": "DIG"
    },
    {
     "kind": "particle",
     "of": "FIRE"
    },
    {
     "kind": "particle",
     "of": "KILL"
    },
    {
     "kind": "particle",
     "of": "LAND"
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
     "of": "PLUG"
    },
    {
     "kind": "particle",
     "of": "POKE"
    },
    {
     "kind": "particle",
     "of": "READ"
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
  "BOARD": {
   "word": "BOARD",
   "roles": [
    {
     "kind": "verb",
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
     "of": "LAND"
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
     "of": "IS"
    },
    {
     "kind": "adjective",
     "of": "ON-OFF-SWITCH"
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
     "of": "DROP"
    },
    {
     "kind": "particle",
     "of": "KNOCK"
    },
    {
     "kind": "particle",
     "of": "DESTROY"
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
     "of": "TAKE"
    },
    {
     "kind": "direction",
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
    }
   ]
  },
  "ACROSS": {
   "word": "ACROSS",
   "roles": [
    {
     "kind": "particle",
     "of": "JUMP"
    }
   ]
  },
  "FROM": {
   "word": "FROM",
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
     "of": "REMOVE"
    },
    {
     "kind": "particle",
     "of": "UNTIE"
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
     "of": "PUSH"
    },
    {
     "kind": "particle",
     "of": "TAKE"
    },
    {
     "kind": "particle",
     "of": "TURN"
    },
    {
     "kind": "adjective",
     "of": "ON-OFF-SWITCH"
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
    },
    {
     "kind": "direction",
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
     "of": "REACH"
    },
    {
     "kind": "particle",
     "of": "SET"
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
  "EMPTY": {
   "word": "EMPTY",
   "roles": [
    {
     "kind": "verb",
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
  "PLAY": {
   "word": "PLAY",
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
     "kind": "adjective",
     "of": "SLIDE-PROJECTOR"
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
  "HOOK": {
   "word": "HOOK",
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
     "of": "SAFETY-HOOK"
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
  "SET": {
   "word": "SET",
   "roles": [
    {
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
  "R": {
   "word": "R",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "THETA": {
   "word": "THETA",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "PHI": {
   "word": "PHI",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "REPORT": {
   "word": "REPORT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "MISSION-STATUS"
    }
   ]
  },
  "$FALL": {
   "word": "$FALL",
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
  "FORE": {
   "word": "FORE",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "NORTH"
    },
    {
     "kind": "adjective",
     "of": "CONTROL-BUBBLE"
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
  "SIT": {
   "word": "SIT",
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
     "of": "CLIMB"
    }
   ]
  },
  "LIE": {
   "word": "LIE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CLIMB"
    }
   ]
  },
  "LAY": {
   "word": "LAY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CLIMB"
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
  "RELEASE": {
   "word": "RELEASE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "DROP"
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
  "TASTE": {
   "word": "TASTE",
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
  "LEAP": {
   "word": "LEAP",
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
  "RAP": {
   "word": "RAP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "KNOCK"
    }
   ]
  },
  "DOCK": {
   "word": "DOCK",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "LAND"
    }
   ]
  },
  "INTERCEPT": {
   "word": "INTERCEPT",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "LAND"
    }
   ]
  },
  "RENDEZVOUS": {
   "word": "RENDEZVOUS",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "LAND"
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
  "TIE": {
   "word": "TIE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "HOOK"
    }
   ]
  },
  "FASTEN": {
   "word": "FASTEN",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "HOOK"
    }
   ]
  },
  "SECURE": {
   "word": "SECURE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "HOOK"
    }
   ]
  },
  "ATTACH": {
   "word": "ATTACH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "HOOK"
    }
   ]
  },
  "BUCKLE": {
   "word": "BUCKLE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "HOOK"
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
  "PLOT": {
   "word": "PLOT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SET"
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
  "DETACH": {
   "word": "DETACH",
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
  "UNBUCKLE": {
   "word": "UNBUCKLE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "UNTIE"
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
  "DON": {
   "word": "DON",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WEAR"
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
  "Y": {
   "word": "Y",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "YES"
    }
   ]
  },
  "CONFIRM": {
   "word": "CONFIRM",
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
  "CANCEL": {
   "word": "CANCEL",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "NO"
    }
   ]
  },
  "RANGE": {
   "word": "RANGE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "R"
    }
   ]
  },
  "ANGLE": {
   "word": "ANGLE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "THETA"
    }
   ]
  },
  "ELEVATION": {
   "word": "ELEVATION",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "PHI"
    }
   ]
  },
  "CROSS": {
   "word": "CROSS",
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
  "OUR": {
   "word": "OUR",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
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
  "PLANTERS": {
   "word": "PLANTERS",
   "roles": [
    {
     "kind": "noun",
     "of": "PLANTERS"
    }
   ]
  },
  "PLANT": {
   "word": "PLANT",
   "roles": [
    {
     "kind": "noun",
     "of": "PLANTERS"
    }
   ]
  },
  "BOX": {
   "word": "BOX",
   "roles": [
    {
     "kind": "noun",
     "of": "PLANTERS"
    }
   ]
  },
  "BOXES": {
   "word": "BOXES",
   "roles": [
    {
     "kind": "noun",
     "of": "PLANTERS"
    }
   ]
  },
  "DEAD": {
   "word": "DEAD",
   "roles": [
    {
     "kind": "adjective",
     "of": "PLANTERS"
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
  "LADDER": {
   "word": "LADDER",
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
  "DIRT": {
   "word": "DIRT",
   "roles": [
    {
     "kind": "noun",
     "of": "GROUND"
    }
   ]
  },
  "GARBAGE": {
   "word": "GARBAGE",
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
  "LEAVES": {
   "word": "LEAVES",
   "roles": [
    {
     "kind": "noun",
     "of": "DEBRIS"
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
  "REGISTRATION": {
   "word": "REGISTRATION",
   "roles": [
    {
     "kind": "noun",
     "of": "REGISTRATION"
    }
   ]
  },
  "STATUS": {
   "word": "STATUS",
   "roles": [
    {
     "kind": "noun",
     "of": "MISSION-STATUS"
    },
    {
     "kind": "adjective",
     "of": "MISSION-STATUS"
    }
   ]
  },
  "SITUATION": {
   "word": "SITUATION",
   "roles": [
    {
     "kind": "noun",
     "of": "MISSION-STATUS"
    }
   ]
  },
  "MISSION": {
   "word": "MISSION",
   "roles": [
    {
     "kind": "adjective",
     "of": "MISSION-STATUS"
    }
   ]
  },
  "ARTIFACT": {
   "word": "ARTIFACT",
   "roles": [
    {
     "kind": "noun",
     "of": "ARTIFACT"
    }
   ]
  },
  "ALARM": {
   "word": "ALARM",
   "roles": [
    {
     "kind": "noun",
     "of": "ALARM"
    }
   ]
  },
  "BELL": {
   "word": "BELL",
   "roles": [
    {
     "kind": "noun",
     "of": "ALARM"
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
     "of": "BUTTON"
    },
    {
     "kind": "noun",
     "of": "TARGET-SELECT"
    },
    {
     "kind": "noun",
     "of": "SPEED-SELECT"
    },
    {
     "kind": "noun",
     "of": "EXECUTE-BUTTON"
    },
    {
     "kind": "noun",
     "of": "COURSE-SELECT"
    },
    {
     "kind": "noun",
     "of": "DRIVE-CONTROLS"
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
     "of": "RED-OUTER"
    },
    {
     "kind": "adjective",
     "of": "RED-INNER"
    },
    {
     "kind": "adjective",
     "of": "RED-DISK"
    },
    {
     "kind": "adjective",
     "of": "RED-KEY"
    },
    {
     "kind": "adjective",
     "of": "ENUNCIATOR"
    },
    {
     "kind": "adjective",
     "of": "RED-SLOT"
    }
   ]
  },
  "DETECTOR": {
   "word": "DETECTOR",
   "roles": [
    {
     "kind": "noun",
     "of": "DETECTOR"
    },
    {
     "kind": "adjective",
     "of": "CHART"
    }
   ]
  },
  "SCREEN": {
   "word": "SCREEN",
   "roles": [
    {
     "kind": "noun",
     "of": "DETECTOR"
    },
    {
     "kind": "noun",
     "of": "VIEW-SELECT"
    }
   ]
  },
  "MASS": {
   "word": "MASS",
   "roles": [
    {
     "kind": "adjective",
     "of": "DETECTOR"
    },
    {
     "kind": "adjective",
     "of": "CHART"
    },
    {
     "kind": "adjective",
     "of": "UM08"
    },
    {
     "kind": "adjective",
     "of": "UM12"
    },
    {
     "kind": "adjective",
     "of": "UM24"
    },
    {
     "kind": "adjective",
     "of": "UM28"
    },
    {
     "kind": "adjective",
     "of": "UM31"
    },
    {
     "kind": "adjective",
     "of": "UM52"
    },
    {
     "kind": "adjective",
     "of": "UM70"
    },
    {
     "kind": "adjective",
     "of": "UM91"
    },
    {
     "kind": "adjective",
     "of": "AB40"
    },
    {
     "kind": "adjective",
     "of": "AX87"
    },
    {
     "kind": "adjective",
     "of": "AX32"
    },
    {
     "kind": "adjective",
     "of": "AX01"
    },
    {
     "kind": "adjective",
     "of": "AX71"
    },
    {
     "kind": "adjective",
     "of": "US75"
    },
    {
     "kind": "adjective",
     "of": "MARS"
    }
   ]
  },
  "READOUT": {
   "word": "READOUT",
   "roles": [
    {
     "kind": "adjective",
     "of": "DETECTOR"
    }
   ]
  },
  "BLUE": {
   "word": "BLUE",
   "roles": [
    {
     "kind": "adjective",
     "of": "BUTTON"
    },
    {
     "kind": "adjective",
     "of": "BLUE-OUTER"
    },
    {
     "kind": "adjective",
     "of": "BLUE-INNER"
    },
    {
     "kind": "adjective",
     "of": "BLUE-DISK"
    },
    {
     "kind": "adjective",
     "of": "BLUE-KEY"
    },
    {
     "kind": "adjective",
     "of": "BLUE-SLOT"
    },
    {
     "kind": "adjective",
     "of": "EXECUTE-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "ENUNCIATOR"
    }
   ]
  },
  "CHART": {
   "word": "CHART",
   "roles": [
    {
     "kind": "noun",
     "of": "CHART"
    }
   ]
  },
  "MAP": {
   "word": "MAP",
   "roles": [
    {
     "kind": "noun",
     "of": "CHART"
    }
   ]
  },
  "OUTPUT": {
   "word": "OUTPUT",
   "roles": [
    {
     "kind": "noun",
     "of": "CHART"
    }
   ]
  },
  "ANOMALY": {
   "word": "ANOMALY",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHART"
    }
   ]
  },
  "COURSE": {
   "word": "COURSE",
   "roles": [
    {
     "kind": "noun",
     "of": "COURSE"
    }
   ]
  },
  "PROGRAM": {
   "word": "PROGRAM",
   "roles": [
    {
     "kind": "noun",
     "of": "COURSE"
    }
   ]
  },
  "NEW": {
   "word": "NEW",
   "roles": [
    {
     "kind": "adjective",
     "of": "COURSE"
    },
    {
     "kind": "adjective",
     "of": "BABY-BUMP"
    }
   ]
  },
  "NAVIGATIONAL": {
   "word": "NAVIGATIONAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "COURSE"
    },
    {
     "kind": "adjective",
     "of": "COMPUTER"
    }
   ]
  },
  "UM08": {
   "word": "UM08",
   "roles": [
    {
     "kind": "noun",
     "of": "UM08"
    }
   ]
  },
  "UM12": {
   "word": "UM12",
   "roles": [
    {
     "kind": "noun",
     "of": "UM12"
    }
   ]
  },
  "UM24": {
   "word": "UM24",
   "roles": [
    {
     "kind": "noun",
     "of": "UM24"
    }
   ]
  },
  "UM28": {
   "word": "UM28",
   "roles": [
    {
     "kind": "noun",
     "of": "UM28"
    }
   ]
  },
  "UM31": {
   "word": "UM31",
   "roles": [
    {
     "kind": "noun",
     "of": "UM31"
    }
   ]
  },
  "UM52": {
   "word": "UM52",
   "roles": [
    {
     "kind": "noun",
     "of": "UM52"
    }
   ]
  },
  "UM70": {
   "word": "UM70",
   "roles": [
    {
     "kind": "noun",
     "of": "UM70"
    }
   ]
  },
  "UM91": {
   "word": "UM91",
   "roles": [
    {
     "kind": "noun",
     "of": "UM91"
    }
   ]
  },
  "AB40": {
   "word": "AB40",
   "roles": [
    {
     "kind": "noun",
     "of": "AB40"
    }
   ]
  },
  "CERES": {
   "word": "CERES",
   "roles": [
    {
     "kind": "noun",
     "of": "AB40"
    }
   ]
  },
  "AX87": {
   "word": "AX87",
   "roles": [
    {
     "kind": "noun",
     "of": "AX87"
    }
   ]
  },
  "AX32": {
   "word": "AX32",
   "roles": [
    {
     "kind": "noun",
     "of": "AX32"
    }
   ]
  },
  "AX01": {
   "word": "AX01",
   "roles": [
    {
     "kind": "noun",
     "of": "AX01"
    }
   ]
  },
  "AX71": {
   "word": "AX71",
   "roles": [
    {
     "kind": "noun",
     "of": "AX71"
    }
   ]
  },
  "US75": {
   "word": "US75",
   "roles": [
    {
     "kind": "noun",
     "of": "US75"
    }
   ]
  },
  "SHIP": {
   "word": "SHIP",
   "roles": [
    {
     "kind": "adjective",
     "of": "US75"
    },
    {
     "kind": "noun",
     "of": "SHIP"
    }
   ]
  },
  "MARS": {
   "word": "MARS",
   "roles": [
    {
     "kind": "noun",
     "of": "MARS"
    }
   ]
  },
  "PLANET": {
   "word": "PLANET",
   "roles": [
    {
     "kind": "adjective",
     "of": "MARS"
    },
    {
     "kind": "noun",
     "of": "MODEL"
    }
   ]
  },
  "SPACES": {
   "word": "SPACES",
   "roles": [
    {
     "kind": "noun",
     "of": "SHIP"
    },
    {
     "kind": "noun",
     "of": "SPACESUIT"
    },
    {
     "kind": "noun",
     "of": "JUNK-SPACESUIT"
    }
   ]
  },
  "STARCROSS": {
   "word": "STARCROSS",
   "roles": [
    {
     "kind": "noun",
     "of": "SHIP"
    }
   ]
  },
  "SPACE": {
   "word": "SPACE",
   "roles": [
    {
     "kind": "adjective",
     "of": "SHIP"
    },
    {
     "kind": "adjective",
     "of": "SPACESUIT"
    }
   ]
  },
  "COUCH": {
   "word": "COUCH",
   "roles": [
    {
     "kind": "noun",
     "of": "COUCH"
    }
   ]
  },
  "SEAT": {
   "word": "SEAT",
   "roles": [
    {
     "kind": "noun",
     "of": "COUCH"
    },
    {
     "kind": "adjective",
     "of": "SEAT-BELT"
    }
   ]
  },
  "CONTROL": {
   "word": "CONTROL",
   "roles": [
    {
     "kind": "adjective",
     "of": "COUCH"
    },
    {
     "kind": "noun",
     "of": "CONTROLS"
    },
    {
     "kind": "adjective",
     "of": "FF-DIAL"
    },
    {
     "kind": "adjective",
     "of": "CONTROL-BUBBLE"
    }
   ]
  },
  "CRASH": {
   "word": "CRASH",
   "roles": [
    {
     "kind": "adjective",
     "of": "COUCH"
    }
   ]
  },
  "BELT": {
   "word": "BELT",
   "roles": [
    {
     "kind": "noun",
     "of": "SEAT-BELT"
    }
   ]
  },
  "SEATBELT": {
   "word": "SEATBELT",
   "roles": [
    {
     "kind": "noun",
     "of": "SEAT-BELT"
    }
   ]
  },
  "PANEL": {
   "word": "PANEL",
   "roles": [
    {
     "kind": "noun",
     "of": "CONTROLS"
    },
    {
     "kind": "noun",
     "of": "PANEL"
    },
    {
     "kind": "noun",
     "of": "WHITE-SLOT"
    },
    {
     "kind": "noun",
     "of": "BLACK-SLOT"
    },
    {
     "kind": "noun",
     "of": "ENUNCIATOR"
    }
   ]
  },
  "CONSOLE": {
   "word": "CONSOLE",
   "roles": [
    {
     "kind": "noun",
     "of": "CONTROLS"
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
  "PORTHOLE": {
   "word": "PORTHOLE",
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
  "BUNK": {
   "word": "BUNK",
   "roles": [
    {
     "kind": "noun",
     "of": "BUNK"
    }
   ]
  },
  "BED": {
   "word": "BED",
   "roles": [
    {
     "kind": "noun",
     "of": "BUNK"
    }
   ]
  },
  "COT": {
   "word": "COT",
   "roles": [
    {
     "kind": "noun",
     "of": "BUNK"
    }
   ]
  },
  "SUIT": {
   "word": "SUIT",
   "roles": [
    {
     "kind": "noun",
     "of": "SPACESUIT"
    },
    {
     "kind": "noun",
     "of": "JUNK-SPACESUIT"
    }
   ]
  },
  "PRESSURE": {
   "word": "PRESSURE",
   "roles": [
    {
     "kind": "adjective",
     "of": "SPACESUIT"
    }
   ]
  },
  "MY": {
   "word": "MY",
   "roles": [
    {
     "kind": "adjective",
     "of": "SPACESUIT"
    }
   ]
  },
  "GOOD": {
   "word": "GOOD",
   "roles": [
    {
     "kind": "adjective",
     "of": "SPACESUIT"
    }
   ]
  },
  "TATTERED": {
   "word": "TATTERED",
   "roles": [
    {
     "kind": "adjective",
     "of": "JUNK-SPACESUIT"
    }
   ]
  },
  "ALIEN": {
   "word": "ALIEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "JUNK-SPACESUIT"
    },
    {
     "kind": "noun",
     "of": "SCORCHED-ALIEN"
    },
    {
     "kind": "noun",
     "of": "CHIEF"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-CHIEF"
    },
    {
     "kind": "noun",
     "of": "ALIENS"
    },
    {
     "kind": "adjective",
     "of": "SKELETON"
    }
   ]
  },
  "LINE": {
   "word": "LINE",
   "roles": [
    {
     "kind": "noun",
     "of": "SAFETY-LINE"
    }
   ]
  },
  "ROPE": {
   "word": "ROPE",
   "roles": [
    {
     "kind": "noun",
     "of": "SAFETY-LINE"
    }
   ]
  },
  "SAFETY": {
   "word": "SAFETY",
   "roles": [
    {
     "kind": "adjective",
     "of": "SAFETY-LINE"
    },
    {
     "kind": "adjective",
     "of": "SAFETY-HOOK"
    }
   ]
  },
  "AIRLOCK": {
   "word": "AIRLOCK",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRLOCK"
    },
    {
     "kind": "noun",
     "of": "RED-OUTER"
    },
    {
     "kind": "noun",
     "of": "RED-INNER"
    },
    {
     "kind": "noun",
     "of": "BLUE-OUTER"
    },
    {
     "kind": "noun",
     "of": "BLUE-INNER"
    },
    {
     "kind": "noun",
     "of": "YELLOW-OUTER"
    },
    {
     "kind": "noun",
     "of": "YELLOW-INNER"
    },
    {
     "kind": "noun",
     "of": "GREEN-OUTER"
    },
    {
     "kind": "noun",
     "of": "GREEN-INNER"
    }
   ]
  },
  "DOOR": {
   "word": "DOOR",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRLOCK-OUTER"
    },
    {
     "kind": "noun",
     "of": "AIRLOCK-INNER"
    },
    {
     "kind": "noun",
     "of": "RED-OUTER"
    },
    {
     "kind": "noun",
     "of": "RED-INNER"
    },
    {
     "kind": "noun",
     "of": "BLUE-OUTER"
    },
    {
     "kind": "noun",
     "of": "BLUE-INNER"
    },
    {
     "kind": "noun",
     "of": "YELLOW-OUTER"
    },
    {
     "kind": "noun",
     "of": "YELLOW-INNER"
    },
    {
     "kind": "noun",
     "of": "GREEN-OUTER"
    },
    {
     "kind": "noun",
     "of": "GREEN-INNER"
    },
    {
     "kind": "noun",
     "of": "MOUSE-HOLE"
    },
    {
     "kind": "noun",
     "of": "DRIVE-BUBBLE-HATCH"
    },
    {
     "kind": "noun",
     "of": "METAL-DOOR"
    },
    {
     "kind": "noun",
     "of": "CONTROL-BUBBLE-HATCH"
    }
   ]
  },
  "BULKHEAD": {
   "word": "BULKHEAD",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRLOCK-OUTER"
    },
    {
     "kind": "noun",
     "of": "AIRLOCK-INNER"
    },
    {
     "kind": "noun",
     "of": "RED-OUTER"
    },
    {
     "kind": "noun",
     "of": "RED-INNER"
    },
    {
     "kind": "adjective",
     "of": "BLUE-OUTER"
    },
    {
     "kind": "noun",
     "of": "BLUE-INNER"
    },
    {
     "kind": "noun",
     "of": "YELLOW-OUTER"
    },
    {
     "kind": "noun",
     "of": "YELLOW-INNER"
    },
    {
     "kind": "noun",
     "of": "GREEN-OUTER"
    },
    {
     "kind": "noun",
     "of": "GREEN-INNER"
    }
   ]
  },
  "OUTER": {
   "word": "OUTER",
   "roles": [
    {
     "kind": "adjective",
     "of": "AIRLOCK-OUTER"
    },
    {
     "kind": "adjective",
     "of": "RED-OUTER"
    },
    {
     "kind": "adjective",
     "of": "BUMP-2"
    },
    {
     "kind": "adjective",
     "of": "BLUE-OUTER"
    },
    {
     "kind": "adjective",
     "of": "YELLOW-OUTER"
    },
    {
     "kind": "adjective",
     "of": "GREEN-OUTER"
    }
   ]
  },
  "INNER": {
   "word": "INNER",
   "roles": [
    {
     "kind": "adjective",
     "of": "AIRLOCK-INNER"
    },
    {
     "kind": "adjective",
     "of": "RED-INNER"
    },
    {
     "kind": "adjective",
     "of": "BLUE-INNER"
    },
    {
     "kind": "adjective",
     "of": "YELLOW-INNER"
    },
    {
     "kind": "adjective",
     "of": "GREEN-INNER"
    }
   ]
  },
  "COMPUTER": {
   "word": "COMPUTER",
   "roles": [
    {
     "kind": "noun",
     "of": "COMPUTER"
    },
    {
     "kind": "noun",
     "of": "ENV-COMPUTER"
    },
    {
     "kind": "adjective",
     "of": "CARD"
    }
   ]
  },
  "POWER": {
   "word": "POWER",
   "roles": [
    {
     "kind": "noun",
     "of": "COMPUTER"
    },
    {
     "kind": "noun",
     "of": "ON-OFF-SWITCH"
    }
   ]
  },
  "FROBOZZCO": {
   "word": "FROBOZZCO",
   "roles": [
    {
     "kind": "adjective",
     "of": "COMPUTER"
    }
   ]
  },
  "SHEET": {
   "word": "SHEET",
   "roles": [
    {
     "kind": "noun",
     "of": "INSTRUCTIONS"
    }
   ]
  },
  "INSTRUCTIONS": {
   "word": "INSTRUCTIONS",
   "roles": [
    {
     "kind": "noun",
     "of": "INSTRUCTIONS"
    }
   ]
  },
  "PAPER": {
   "word": "PAPER",
   "roles": [
    {
     "kind": "noun",
     "of": "INSTRUCTIONS"
    }
   ]
  },
  "FADED": {
   "word": "FADED",
   "roles": [
    {
     "kind": "adjective",
     "of": "INSTRUCTIONS"
    }
   ]
  },
  "RECORDER": {
   "word": "RECORDER",
   "roles": [
    {
     "kind": "noun",
     "of": "TAPE-PLAYER"
    }
   ]
  },
  "PLAYER": {
   "word": "PLAYER",
   "roles": [
    {
     "kind": "noun",
     "of": "TAPE-PLAYER"
    }
   ]
  },
  "VCR": {
   "word": "VCR",
   "roles": [
    {
     "kind": "noun",
     "of": "TAPE-PLAYER"
    }
   ]
  },
  "LIBRARY": {
   "word": "LIBRARY",
   "roles": [
    {
     "kind": "noun",
     "of": "TAPE-PLAYER"
    }
   ]
  },
  "TAPE": {
   "word": "TAPE",
   "roles": [
    {
     "kind": "adjective",
     "of": "TAPE-PLAYER"
    }
   ]
  },
  "TAPES": {
   "word": "TAPES",
   "roles": [
    {
     "kind": "adjective",
     "of": "TAPE-PLAYER"
    }
   ]
  },
  "VIDEO": {
   "word": "VIDEO",
   "roles": [
    {
     "kind": "adjective",
     "of": "TAPE-PLAYER"
    }
   ]
  },
  "AUDIO": {
   "word": "AUDIO",
   "roles": [
    {
     "kind": "adjective",
     "of": "TAPE-PLAYER"
    }
   ]
  },
  "KEY": {
   "word": "KEY",
   "roles": [
    {
     "kind": "noun",
     "of": "BLACK-KEY"
    },
    {
     "kind": "noun",
     "of": "YELLOW-KEY"
    },
    {
     "kind": "noun",
     "of": "PINK-KEY"
    },
    {
     "kind": "noun",
     "of": "CLEAR-KEY"
    },
    {
     "kind": "noun",
     "of": "BROWN-KEY"
    },
    {
     "kind": "noun",
     "of": "BLUE-KEY"
    },
    {
     "kind": "noun",
     "of": "GREEN-KEY"
    },
    {
     "kind": "noun",
     "of": "VIOLET-KEY"
    },
    {
     "kind": "noun",
     "of": "RED-KEY"
    },
    {
     "kind": "noun",
     "of": "GOLD-KEY"
    },
    {
     "kind": "noun",
     "of": "SILVER-KEY"
    },
    {
     "kind": "noun",
     "of": "WHITE-KEY"
    }
   ]
  },
  "RODS": {
   "word": "RODS",
   "roles": [
    {
     "kind": "noun",
     "of": "BLACK-KEY"
    },
    {
     "kind": "noun",
     "of": "YELLOW-KEY"
    },
    {
     "kind": "noun",
     "of": "PINK-KEY"
    },
    {
     "kind": "noun",
     "of": "CLEAR-KEY"
    },
    {
     "kind": "noun",
     "of": "BROWN-KEY"
    },
    {
     "kind": "noun",
     "of": "BLUE-KEY"
    },
    {
     "kind": "noun",
     "of": "GREEN-KEY"
    },
    {
     "kind": "noun",
     "of": "VIOLET-KEY"
    },
    {
     "kind": "noun",
     "of": "RED-KEY"
    },
    {
     "kind": "noun",
     "of": "GOLD-KEY"
    },
    {
     "kind": "noun",
     "of": "SILVER-KEY"
    },
    {
     "kind": "noun",
     "of": "WHITE-KEY"
    }
   ]
  },
  "ROD": {
   "word": "ROD",
   "roles": [
    {
     "kind": "noun",
     "of": "BLACK-KEY"
    },
    {
     "kind": "noun",
     "of": "YELLOW-KEY"
    },
    {
     "kind": "noun",
     "of": "PINK-KEY"
    },
    {
     "kind": "noun",
     "of": "CLEAR-KEY"
    },
    {
     "kind": "noun",
     "of": "BROWN-KEY"
    },
    {
     "kind": "noun",
     "of": "BLUE-KEY"
    },
    {
     "kind": "noun",
     "of": "GREEN-KEY"
    },
    {
     "kind": "noun",
     "of": "VIOLET-KEY"
    },
    {
     "kind": "noun",
     "of": "RED-KEY"
    },
    {
     "kind": "noun",
     "of": "GOLD-KEY"
    },
    {
     "kind": "noun",
     "of": "SILVER-KEY"
    },
    {
     "kind": "noun",
     "of": "WHITE-KEY"
    }
   ]
  },
  "BLACK": {
   "word": "BLACK",
   "roles": [
    {
     "kind": "adjective",
     "of": "BLACK-KEY"
    },
    {
     "kind": "adjective",
     "of": "SMOKED-GLASS"
    },
    {
     "kind": "adjective",
     "of": "BLACK-SLOT"
    }
   ]
  },
  "CRYSTAL": {
   "word": "CRYSTAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "BLACK-KEY"
    },
    {
     "kind": "adjective",
     "of": "YELLOW-KEY"
    },
    {
     "kind": "adjective",
     "of": "PINK-KEY"
    },
    {
     "kind": "adjective",
     "of": "BROWN-KEY"
    },
    {
     "kind": "adjective",
     "of": "BLUE-KEY"
    },
    {
     "kind": "adjective",
     "of": "GREEN-KEY"
    },
    {
     "kind": "adjective",
     "of": "VIOLET-KEY"
    },
    {
     "kind": "adjective",
     "of": "RED-KEY"
    },
    {
     "kind": "adjective",
     "of": "GOLD-KEY"
    },
    {
     "kind": "adjective",
     "of": "SILVER-KEY"
    },
    {
     "kind": "adjective",
     "of": "WHITE-KEY"
    },
    {
     "kind": "adjective",
     "of": "DISTANT-BUBBLE"
    },
    {
     "kind": "adjective",
     "of": "CLEAR-SLOT"
    }
   ]
  },
  "RELIEF": {
   "word": "RELIEF",
   "roles": [
    {
     "kind": "noun",
     "of": "RELIEF"
    }
   ]
  },
  "SCULPTURE": {
   "word": "SCULPTURE",
   "roles": [
    {
     "kind": "noun",
     "of": "RELIEF"
    }
   ]
  },
  "SURFACE": {
   "word": "SURFACE",
   "roles": [
    {
     "kind": "noun",
     "of": "RELIEF"
    }
   ]
  },
  "BUMPS": {
   "word": "BUMPS",
   "roles": [
    {
     "kind": "noun",
     "of": "RELIEF"
    }
   ]
  },
  "METAL": {
   "word": "METAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "RELIEF"
    },
    {
     "kind": "adjective",
     "of": "BUMP-2"
    },
    {
     "kind": "adjective",
     "of": "BUMP"
    },
    {
     "kind": "adjective",
     "of": "CARD"
    },
    {
     "kind": "adjective",
     "of": "METAL-DOOR"
    },
    {
     "kind": "adjective",
     "of": "ROD-RACK"
    }
   ]
  },
  "SILVER": {
   "word": "SILVER",
   "roles": [
    {
     "kind": "adjective",
     "of": "RELIEF"
    },
    {
     "kind": "adjective",
     "of": "FORCE-FIELD-1"
    },
    {
     "kind": "adjective",
     "of": "FORCE-FIELD-2"
    },
    {
     "kind": "adjective",
     "of": "FORCE-FIELD-3"
    },
    {
     "kind": "adjective",
     "of": "FORCE-FIELD-4"
    },
    {
     "kind": "adjective",
     "of": "SILVER-KEY"
    },
    {
     "kind": "adjective",
     "of": "SILVER-SLOT"
    }
   ]
  },
  "BUMP": {
   "word": "BUMP",
   "roles": [
    {
     "kind": "noun",
     "of": "BUMP-2"
    },
    {
     "kind": "noun",
     "of": "BUMP"
    },
    {
     "kind": "noun",
     "of": "BABY-BUMP"
    }
   ]
  },
  "COLUMN": {
   "word": "COLUMN",
   "roles": [
    {
     "kind": "noun",
     "of": "BUMP-2"
    },
    {
     "kind": "noun",
     "of": "BUMP"
    },
    {
     "kind": "noun",
     "of": "BABY-BUMP"
    }
   ]
  },
  "EIGHTH": {
   "word": "EIGHTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "BUMP-2"
    }
   ]
  },
  "NINTH": {
   "word": "NINTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "BUMP-2"
    }
   ]
  },
  "TENTH": {
   "word": "TENTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "BUMP-2"
    }
   ]
  },
  "CENTER": {
   "word": "CENTER",
   "roles": [
    {
     "kind": "adjective",
     "of": "BUMP-2"
    }
   ]
  },
  "LAST": {
   "word": "LAST",
   "roles": [
    {
     "kind": "adjective",
     "of": "BUMP-2"
    }
   ]
  },
  "FIRST": {
   "word": "FIRST",
   "roles": [
    {
     "kind": "adjective",
     "of": "BUMP"
    },
    {
     "kind": "adjective",
     "of": "RED-SLOT"
    }
   ]
  },
  "SECOND": {
   "word": "SECOND",
   "roles": [
    {
     "kind": "adjective",
     "of": "BUMP"
    },
    {
     "kind": "adjective",
     "of": "RED-SLOT"
    }
   ]
  },
  "THIRD": {
   "word": "THIRD",
   "roles": [
    {
     "kind": "adjective",
     "of": "BUMP"
    },
    {
     "kind": "adjective",
     "of": "RED-SLOT"
    }
   ]
  },
  "FOURTH": {
   "word": "FOURTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "BUMP"
    }
   ]
  },
  "FIFTH": {
   "word": "FIFTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "BUMP"
    }
   ]
  },
  "SIXTH": {
   "word": "SIXTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "BUMP"
    }
   ]
  },
  "SEVENTH": {
   "word": "SEVENTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "BUMP"
    }
   ]
  },
  "HEXAGON": {
   "word": "HEXAGON",
   "roles": [
    {
     "kind": "noun",
     "of": "BABY-BUMP"
    }
   ]
  },
  "SMALL": {
   "word": "SMALL",
   "roles": [
    {
     "kind": "adjective",
     "of": "BABY-BUMP"
    },
    {
     "kind": "adjective",
     "of": "TREE"
    },
    {
     "kind": "adjective",
     "of": "ZOOM-IN"
    },
    {
     "kind": "adjective",
     "of": "ROD-RACK"
    }
   ]
  },
  "LONG": {
   "word": "LONG",
   "roles": [
    {
     "kind": "adjective",
     "of": "BABY-BUMP"
    }
   ]
  },
  "TINY": {
   "word": "TINY",
   "roles": [
    {
     "kind": "adjective",
     "of": "BABY-BUMP"
    }
   ]
  },
  "SPIDER": {
   "word": "SPIDER",
   "roles": [
    {
     "kind": "noun",
     "of": "SPIDER"
    }
   ]
  },
  "GURTHARK": {
   "word": "GURTHARK",
   "roles": [
    {
     "kind": "noun",
     "of": "SPIDER"
    }
   ]
  },
  "BESNAP": {
   "word": "BESNAP",
   "roles": [
    {
     "kind": "noun",
     "of": "SPIDER"
    }
   ]
  },
  "GIANT": {
   "word": "GIANT",
   "roles": [
    {
     "kind": "adjective",
     "of": "SPIDER"
    }
   ]
  },
  "OBJECT": {
   "word": "OBJECT",
   "roles": [
    {
     "kind": "noun",
     "of": "YELLOW-KEY"
    },
    {
     "kind": "noun",
     "of": "TRANSLATOR"
    }
   ]
  },
  "YELLOW": {
   "word": "YELLOW",
   "roles": [
    {
     "kind": "adjective",
     "of": "YELLOW-KEY"
    },
    {
     "kind": "adjective",
     "of": "YELLOW-OUTER"
    },
    {
     "kind": "adjective",
     "of": "YELLOW-INNER"
    },
    {
     "kind": "adjective",
     "of": "ENUNCIATOR"
    },
    {
     "kind": "adjective",
     "of": "YELLOW-SLOT"
    }
   ]
  },
  "TRANSLATOR": {
   "word": "TRANSLATOR",
   "roles": [
    {
     "kind": "noun",
     "of": "TRANSLATOR"
    }
   ]
  },
  "REPTILE": {
   "word": "REPTILE",
   "roles": [
    {
     "kind": "noun",
     "of": "SCORCHED-ALIEN"
    }
   ]
  },
  "SCORCHED": {
   "word": "SCORCHED",
   "roles": [
    {
     "kind": "adjective",
     "of": "SCORCHED-ALIEN"
    }
   ]
  },
  "PINK": {
   "word": "PINK",
   "roles": [
    {
     "kind": "adjective",
     "of": "PINK-KEY"
    },
    {
     "kind": "adjective",
     "of": "PINK-SLOT"
    },
    {
     "kind": "adjective",
     "of": "VIEW-SELECT"
    },
    {
     "kind": "adjective",
     "of": "ZOOM-IN"
    },
    {
     "kind": "adjective",
     "of": "ZOOM-OUT"
    }
   ]
  },
  "GREEN": {
   "word": "GREEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "GREEN-OUTER"
    },
    {
     "kind": "adjective",
     "of": "GREEN-INNER"
    },
    {
     "kind": "adjective",
     "of": "GREEN-KEY"
    },
    {
     "kind": "adjective",
     "of": "GREEN-SLOT"
    },
    {
     "kind": "adjective",
     "of": "SPEED-SELECT"
    },
    {
     "kind": "adjective",
     "of": "ENUNCIATOR"
    }
   ]
  },
  "FRAGMENT": {
   "word": "FRAGMENT",
   "roles": [
    {
     "kind": "noun",
     "of": "SMOKED-GLASS"
    }
   ]
  },
  "PIECE": {
   "word": "PIECE",
   "roles": [
    {
     "kind": "noun",
     "of": "SMOKED-GLASS"
    }
   ]
  },
  "SMOKED": {
   "word": "SMOKED",
   "roles": [
    {
     "kind": "adjective",
     "of": "SMOKED-GLASS"
    }
   ]
  },
  "GLASS": {
   "word": "GLASS",
   "roles": [
    {
     "kind": "adjective",
     "of": "SMOKED-GLASS"
    }
   ]
  },
  "VISOR": {
   "word": "VISOR",
   "roles": [
    {
     "kind": "adjective",
     "of": "SMOKED-GLASS"
    }
   ]
  },
  "RAINBOW": {
   "word": "RAINBOW",
   "roles": [
    {
     "kind": "noun",
     "of": "CLEAR-KEY"
    }
   ]
  },
  "CLEAR": {
   "word": "CLEAR",
   "roles": [
    {
     "kind": "adjective",
     "of": "CLEAR-KEY"
    },
    {
     "kind": "adjective",
     "of": "DISTANT-BUBBLE"
    },
    {
     "kind": "adjective",
     "of": "CLEAR-SLOT"
    }
   ]
  },
  "PROJECTOR": {
   "word": "PROJECTOR",
   "roles": [
    {
     "kind": "noun",
     "of": "SLIDE-PROJECTOR"
    },
    {
     "kind": "noun",
     "of": "PROJECTOR"
    }
   ]
  },
  "LASER": {
   "word": "LASER",
   "roles": [
    {
     "kind": "noun",
     "of": "SLIDE-PROJECTOR"
    },
    {
     "kind": "adjective",
     "of": "LASER-BEAM"
    }
   ]
  },
  "IMAGE": {
   "word": "IMAGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "SLIDE-PROJECTOR"
    }
   ]
  },
  "HOLOGRAPHIC": {
   "word": "HOLOGRAPHIC",
   "roles": [
    {
     "kind": "adjective",
     "of": "SLIDE-PROJECTOR"
    }
   ]
  },
  "BEAM": {
   "word": "BEAM",
   "roles": [
    {
     "kind": "noun",
     "of": "LASER-BEAM"
    },
    {
     "kind": "noun",
     "of": "BEAM"
    }
   ]
  },
  "ENERGY": {
   "word": "ENERGY",
   "roles": [
    {
     "kind": "noun",
     "of": "LASER-BEAM"
    },
    {
     "kind": "adjective",
     "of": "BEAM"
    }
   ]
  },
  "LIGHT": {
   "word": "LIGHT",
   "roles": [
    {
     "kind": "noun",
     "of": "LASER-BEAM"
    },
    {
     "kind": "adjective",
     "of": "LASER-BEAM"
    },
    {
     "kind": "noun",
     "of": "ENUNCIATOR"
    }
   ]
  },
  "MODEL": {
   "word": "MODEL",
   "roles": [
    {
     "kind": "noun",
     "of": "MODEL"
    }
   ]
  },
  "SYSTEM": {
   "word": "SYSTEM",
   "roles": [
    {
     "kind": "noun",
     "of": "MODEL"
    }
   ]
  },
  "SOLAR": {
   "word": "SOLAR",
   "roles": [
    {
     "kind": "adjective",
     "of": "MODEL"
    }
   ]
  },
  "CHIEF": {
   "word": "CHIEF",
   "roles": [
    {
     "kind": "noun",
     "of": "CHIEF"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-CHIEF"
    }
   ]
  },
  "CHIEFTAIN": {
   "word": "CHIEFTAIN",
   "roles": [
    {
     "kind": "noun",
     "of": "CHIEF"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-CHIEF"
    }
   ]
  },
  "GREY": {
   "word": "GREY",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHIEF"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-CHIEF"
    },
    {
     "kind": "adjective",
     "of": "ALIENS"
    }
   ]
  },
  "WEASEL": {
   "word": "WEASEL",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHIEF"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-CHIEF"
    },
    {
     "kind": "noun",
     "of": "ALIENS"
    }
   ]
  },
  "CHIEFS": {
   "word": "CHIEFS",
   "roles": [
    {
     "kind": "adjective",
     "of": "BROWN-KEY"
    }
   ]
  },
  "BROWN": {
   "word": "BROWN",
   "roles": [
    {
     "kind": "adjective",
     "of": "BROWN-KEY"
    },
    {
     "kind": "adjective",
     "of": "BROWN-SLOT"
    },
    {
     "kind": "adjective",
     "of": "TARGET-SELECT"
    }
   ]
  },
  "ALIENS": {
   "word": "ALIENS",
   "roles": [
    {
     "kind": "noun",
     "of": "ALIENS"
    }
   ]
  },
  "HUNTER": {
   "word": "HUNTER",
   "roles": [
    {
     "kind": "adjective",
     "of": "ALIENS"
    }
   ]
  },
  "TRIBESMAN": {
   "word": "TRIBESMAN",
   "roles": [
    {
     "kind": "adjective",
     "of": "ALIENS"
    }
   ]
  },
  "PALISADE": {
   "word": "PALISADE",
   "roles": [
    {
     "kind": "noun",
     "of": "PALISADE"
    }
   ]
  },
  "WALL": {
   "word": "WALL",
   "roles": [
    {
     "kind": "noun",
     "of": "PALISADE"
    },
    {
     "kind": "noun",
     "of": "WALL"
    }
   ]
  },
  "MUD": {
   "word": "MUD",
   "roles": [
    {
     "kind": "adjective",
     "of": "PALISADE"
    },
    {
     "kind": "adjective",
     "of": "NEST"
    }
   ]
  },
  "WOOD": {
   "word": "WOOD",
   "roles": [
    {
     "kind": "adjective",
     "of": "PALISADE"
    }
   ]
  },
  "MOUSE": {
   "word": "MOUSE",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-MOUSE"
    },
    {
     "kind": "noun",
     "of": "MOUSE"
    },
    {
     "kind": "adjective",
     "of": "MOUSE-HOLE"
    }
   ]
  },
  "SWEEPER": {
   "word": "SWEEPER",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-MOUSE"
    },
    {
     "kind": "noun",
     "of": "MOUSE"
    }
   ]
  },
  "RECEPTACLE": {
   "word": "RECEPTACLE",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-MOUSE"
    },
    {
     "kind": "noun",
     "of": "MOUSE"
    }
   ]
  },
  "MAINTENANCE": {
   "word": "MAINTENANCE",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-MOUSE"
    },
    {
     "kind": "adjective",
     "of": "MOUSE"
    }
   ]
  },
  "TRAY": {
   "word": "TRAY",
   "roles": [
    {
     "kind": "noun",
     "of": "MOUSE"
    }
   ]
  },
  "HOLE": {
   "word": "HOLE",
   "roles": [
    {
     "kind": "noun",
     "of": "MOUSE-HOLE"
    },
    {
     "kind": "noun",
     "of": "SLOT"
    },
    {
     "kind": "noun",
     "of": "SILVER-SLOT"
    },
    {
     "kind": "noun",
     "of": "WHITE-SLOT"
    },
    {
     "kind": "noun",
     "of": "BLACK-SLOT"
    },
    {
     "kind": "noun",
     "of": "GOLD-SLOT"
    },
    {
     "kind": "noun",
     "of": "BROWN-SLOT"
    },
    {
     "kind": "noun",
     "of": "PINK-SLOT"
    },
    {
     "kind": "noun",
     "of": "GREEN-SLOT"
    },
    {
     "kind": "noun",
     "of": "BLUE-SLOT"
    },
    {
     "kind": "noun",
     "of": "VIOLET-SLOT"
    },
    {
     "kind": "noun",
     "of": "CLEAR-SLOT"
    },
    {
     "kind": "noun",
     "of": "YELLOW-SLOT"
    },
    {
     "kind": "noun",
     "of": "RED-SLOT"
    }
   ]
  },
  "DISK": {
   "word": "DISK",
   "roles": [
    {
     "kind": "noun",
     "of": "RED-DISK"
    },
    {
     "kind": "noun",
     "of": "BLUE-DISK"
    }
   ]
  },
  "DISKS": {
   "word": "DISKS",
   "roles": [
    {
     "kind": "noun",
     "of": "RED-DISK"
    },
    {
     "kind": "noun",
     "of": "BLUE-DISK"
    }
   ]
  },
  "THIN": {
   "word": "THIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "RED-DISK"
    },
    {
     "kind": "adjective",
     "of": "BLUE-DISK"
    }
   ]
  },
  "DIAL": {
   "word": "DIAL",
   "roles": [
    {
     "kind": "noun",
     "of": "FF-DIAL"
    }
   ]
  },
  "FIELD": {
   "word": "FIELD",
   "roles": [
    {
     "kind": "noun",
     "of": "FORCE-FIELD-1"
    },
    {
     "kind": "noun",
     "of": "FORCE-FIELD-2"
    },
    {
     "kind": "noun",
     "of": "FF-BOWL-2"
    },
    {
     "kind": "noun",
     "of": "FORCE-FIELD-3"
    },
    {
     "kind": "noun",
     "of": "FF-BOWL-3"
    },
    {
     "kind": "noun",
     "of": "FORCE-FIELD-4"
    },
    {
     "kind": "noun",
     "of": "FF-BOWL-4"
    }
   ]
  },
  "SPHERE": {
   "word": "SPHERE",
   "roles": [
    {
     "kind": "noun",
     "of": "FORCE-FIELD-1"
    },
    {
     "kind": "noun",
     "of": "FORCE-FIELD-2"
    },
    {
     "kind": "noun",
     "of": "FORCE-FIELD-3"
    },
    {
     "kind": "noun",
     "of": "FORCE-FIELD-4"
    }
   ]
  },
  "BALL": {
   "word": "BALL",
   "roles": [
    {
     "kind": "noun",
     "of": "FORCE-FIELD-1"
    },
    {
     "kind": "noun",
     "of": "FORCE-FIELD-2"
    },
    {
     "kind": "noun",
     "of": "FORCE-FIELD-3"
    },
    {
     "kind": "noun",
     "of": "FORCE-FIELD-4"
    }
   ]
  },
  "GLOBE": {
   "word": "GLOBE",
   "roles": [
    {
     "kind": "noun",
     "of": "FORCE-FIELD-1"
    },
    {
     "kind": "noun",
     "of": "FORCE-FIELD-2"
    },
    {
     "kind": "noun",
     "of": "FORCE-FIELD-3"
    },
    {
     "kind": "noun",
     "of": "FORCE-FIELD-4"
    }
   ]
  },
  "FORCE": {
   "word": "FORCE",
   "roles": [
    {
     "kind": "adjective",
     "of": "FORCE-FIELD-1"
    },
    {
     "kind": "adjective",
     "of": "FORCE-FIELD-2"
    },
    {
     "kind": "adjective",
     "of": "FORCE-FIELD-3"
    },
    {
     "kind": "adjective",
     "of": "FORCE-FIELD-4"
    }
   ]
  },
  "APPARATUS": {
   "word": "APPARATUS",
   "roles": [
    {
     "kind": "noun",
     "of": "PROJECTOR"
    }
   ]
  },
  "FORMIDABLE": {
   "word": "FORMIDABLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "PROJECTOR"
    }
   ]
  },
  "BIN": {
   "word": "BIN",
   "roles": [
    {
     "kind": "noun",
     "of": "TRASH-BIN"
    }
   ]
  },
  "TRASH": {
   "word": "TRASH",
   "roles": [
    {
     "kind": "adjective",
     "of": "TRASH-BIN"
    }
   ]
  },
  "JUNK": {
   "word": "JUNK",
   "roles": [
    {
     "kind": "adjective",
     "of": "TRASH-BIN"
    }
   ]
  },
  "SKELETON": {
   "word": "SKELETON",
   "roles": [
    {
     "kind": "noun",
     "of": "SKELETON"
    }
   ]
  },
  "VIOLET": {
   "word": "VIOLET",
   "roles": [
    {
     "kind": "adjective",
     "of": "VIOLET-KEY"
    },
    {
     "kind": "adjective",
     "of": "VIOLET-SLOT"
    },
    {
     "kind": "adjective",
     "of": "COURSE-SELECT"
    }
   ]
  },
  "PURPLE": {
   "word": "PURPLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "VIOLET-KEY"
    },
    {
     "kind": "adjective",
     "of": "VIOLET-SLOT"
    },
    {
     "kind": "adjective",
     "of": "COURSE-SELECT"
    }
   ]
  },
  "SIGN": {
   "word": "SIGN",
   "roles": [
    {
     "kind": "noun",
     "of": "GRUE-SIGN"
    }
   ]
  },
  "CHEWED": {
   "word": "CHEWED",
   "roles": [
    {
     "kind": "adjective",
     "of": "GRUE-SIGN"
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
  "NEST": {
   "word": "NEST",
   "roles": [
    {
     "kind": "noun",
     "of": "NEST"
    },
    {
     "kind": "noun",
     "of": "SMASHED-NEST"
    }
   ]
  },
  "SMASHED": {
   "word": "SMASHED",
   "roles": [
    {
     "kind": "adjective",
     "of": "SMASHED-NEST"
    }
   ]
  },
  "ANT": {
   "word": "ANT",
   "roles": [
    {
     "kind": "noun",
     "of": "RAT-ANT"
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
  "RAT": {
   "word": "RAT",
   "roles": [
    {
     "kind": "adjective",
     "of": "RAT-ANT"
    }
   ]
  },
  "SWITCH": {
   "word": "SWITCH",
   "roles": [
    {
     "kind": "noun",
     "of": "ON-OFF-SWITCH"
    }
   ]
  },
  "ACCESS": {
   "word": "ACCESS",
   "roles": [
    {
     "kind": "adjective",
     "of": "PANEL"
    }
   ]
  },
  "SLOT": {
   "word": "SLOT",
   "roles": [
    {
     "kind": "noun",
     "of": "SLOT"
    },
    {
     "kind": "noun",
     "of": "SILVER-SLOT"
    },
    {
     "kind": "noun",
     "of": "WHITE-SLOT"
    },
    {
     "kind": "noun",
     "of": "BLACK-SLOT"
    },
    {
     "kind": "noun",
     "of": "GOLD-SLOT"
    },
    {
     "kind": "noun",
     "of": "BROWN-SLOT"
    },
    {
     "kind": "noun",
     "of": "PINK-SLOT"
    },
    {
     "kind": "noun",
     "of": "GREEN-SLOT"
    },
    {
     "kind": "noun",
     "of": "BLUE-SLOT"
    },
    {
     "kind": "noun",
     "of": "VIOLET-SLOT"
    },
    {
     "kind": "noun",
     "of": "CLEAR-SLOT"
    },
    {
     "kind": "noun",
     "of": "YELLOW-SLOT"
    },
    {
     "kind": "noun",
     "of": "RED-SLOT"
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
  "SQUARE": {
   "word": "SQUARE",
   "roles": [
    {
     "kind": "noun",
     "of": "CARD"
    },
    {
     "kind": "noun",
     "of": "ZOOM-IN"
    },
    {
     "kind": "noun",
     "of": "ZOOM-OUT"
    }
   ]
  },
  "CERAMIC": {
   "word": "CERAMIC",
   "roles": [
    {
     "kind": "adjective",
     "of": "CARD"
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
     "of": "GOLD-SLOT"
    }
   ]
  },
  "GUN": {
   "word": "GUN",
   "roles": [
    {
     "kind": "noun",
     "of": "ZAP-GUN"
    }
   ]
  },
  "BARREL": {
   "word": "BARREL",
   "roles": [
    {
     "kind": "noun",
     "of": "ZAP-GUN"
    }
   ]
  },
  "RAYGUN": {
   "word": "RAYGUN",
   "roles": [
    {
     "kind": "noun",
     "of": "ZAP-GUN"
    }
   ]
  },
  "RAY": {
   "word": "RAY",
   "roles": [
    {
     "kind": "adjective",
     "of": "ZAP-GUN"
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
  "HUGE": {
   "word": "HUGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "TREE"
    }
   ]
  },
  "ENORMOUS": {
   "word": "ENORMOUS",
   "roles": [
    {
     "kind": "adjective",
     "of": "TREE"
    }
   ]
  },
  "SPOT": {
   "word": "SPOT",
   "roles": [
    {
     "kind": "noun",
     "of": "SILVER-SLOT"
    },
    {
     "kind": "noun",
     "of": "TARGET-SELECT"
    },
    {
     "kind": "noun",
     "of": "SPEED-SELECT"
    },
    {
     "kind": "noun",
     "of": "EXECUTE-BUTTON"
    },
    {
     "kind": "noun",
     "of": "COURSE-SELECT"
    }
   ]
  },
  "WHITE": {
   "word": "WHITE",
   "roles": [
    {
     "kind": "adjective",
     "of": "WHITE-SLOT"
    },
    {
     "kind": "adjective",
     "of": "WHITE-KEY"
    }
   ]
  },
  "HATCH": {
   "word": "HATCH",
   "roles": [
    {
     "kind": "noun",
     "of": "DRIVE-BUBBLE-HATCH"
    },
    {
     "kind": "noun",
     "of": "METAL-DOOR"
    },
    {
     "kind": "noun",
     "of": "CONTROL-BUBBLE-HATCH"
    }
   ]
  },
  "UNICORN": {
   "word": "UNICORN",
   "roles": [
    {
     "kind": "noun",
     "of": "UNICORNS"
    }
   ]
  },
  "HERD": {
   "word": "HERD",
   "roles": [
    {
     "kind": "adjective",
     "of": "UNICORNS"
    }
   ]
  },
  "COVER": {
   "word": "COVER",
   "roles": [
    {
     "kind": "noun",
     "of": "METAL-DOOR"
    }
   ]
  },
  "SMOOTH": {
   "word": "SMOOTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "WALL"
    }
   ]
  },
  "BUBBLE": {
   "word": "BUBBLE",
   "roles": [
    {
     "kind": "noun",
     "of": "DISTANT-BUBBLE"
    },
    {
     "kind": "noun",
     "of": "DRIVE-BUBBLE"
    },
    {
     "kind": "noun",
     "of": "CONTROL-BUBBLE"
    }
   ]
  },
  "DRIVE": {
   "word": "DRIVE",
   "roles": [
    {
     "kind": "adjective",
     "of": "DRIVE-BUBBLE"
    }
   ]
  },
  "FRONT": {
   "word": "FRONT",
   "roles": [
    {
     "kind": "adjective",
     "of": "CONTROL-BUBBLE"
    }
   ]
  },
  "LARGE": {
   "word": "LARGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "ZOOM-OUT"
    }
   ]
  },
  "RACK": {
   "word": "RACK",
   "roles": [
    {
     "kind": "noun",
     "of": "ROD-RACK"
    }
   ]
  },
  "CARTON": {
   "word": "CARTON",
   "roles": [
    {
     "kind": "noun",
     "of": "ROD-RACK"
    }
   ]
  },
  "BASKET": {
   "word": "BASKET",
   "roles": [
    {
     "kind": "noun",
     "of": "ROD-RACK"
    }
   ]
  },
  "POCKET": {
   "word": "POCKET",
   "roles": [
    {
     "kind": "noun",
     "of": "ROD-RACK"
    }
   ]
  },
  "SPEAR": {
   "word": "SPEAR",
   "roles": [
    {
     "kind": "noun",
     "of": "SPEAR"
    }
   ]
  },
  "SPEARS": {
   "word": "SPEARS",
   "roles": [
    {
     "kind": "noun",
     "of": "SPEAR"
    }
   ]
  },
  "HUTS": {
   "word": "HUTS",
   "roles": [
    {
     "kind": "noun",
     "of": "HUTS"
    }
   ]
  },
  "HUT": {
   "word": "HUT",
   "roles": [
    {
     "kind": "noun",
     "of": "HUTS"
    }
   ]
  },
  "GRASS": {
   "word": "GRASS",
   "roles": [
    {
     "kind": "noun",
     "of": "VEGGIES"
    }
   ]
  },
  "SHRUB": {
   "word": "SHRUB",
   "roles": [
    {
     "kind": "noun",
     "of": "VEGGIES"
    }
   ]
  },
  "CONIFER": {
   "word": "CONIFER",
   "roles": [
    {
     "kind": "noun",
     "of": "VEGGIES"
    }
   ]
  },
  "CYCAD": {
   "word": "CYCAD",
   "roles": [
    {
     "kind": "noun",
     "of": "VEGGIES"
    }
   ]
  },
  "DIALS": {
   "word": "DIALS",
   "roles": [
    {
     "kind": "noun",
     "of": "DRIVE-CONTROLS"
    }
   ]
  },
  "INDICATORS": {
   "word": "INDICATORS",
   "roles": [
    {
     "kind": "noun",
     "of": "DRIVE-CONTROLS"
    }
   ]
  },
  "GAUGES": {
   "word": "GAUGES",
   "roles": [
    {
     "kind": "noun",
     "of": "DRIVE-CONTROLS"
    }
   ]
  },
  "CAGE": {
   "word": "CAGE",
   "roles": [
    {
     "kind": "noun",
     "of": "CAGES"
    }
   ]
  },
  "CAGES": {
   "word": "CAGES",
   "roles": [
    {
     "kind": "noun",
     "of": "CAGES"
    }
   ]
  },
  "BARS": {
   "word": "BARS",
   "roles": [
    {
     "kind": "noun",
     "of": "CAGES"
    }
   ]
  },
  "FRUITS": {
   "word": "FRUITS",
   "roles": [
    {
     "kind": "noun",
     "of": "TOTEMS"
    }
   ]
  },
  "GRAIN": {
   "word": "GRAIN",
   "roles": [
    {
     "kind": "noun",
     "of": "TOTEMS"
    }
   ]
  },
  "TOTEMS": {
   "word": "TOTEMS",
   "roles": [
    {
     "kind": "noun",
     "of": "TOTEMS"
    }
   ]
  },
  "FETISH": {
   "word": "FETISH",
   "roles": [
    {
     "kind": "noun",
     "of": "TOTEMS"
    }
   ]
  },
  "KNOB": {
   "word": "KNOB",
   "roles": [
    {
     "kind": "noun",
     "of": "KNOBS"
    }
   ]
  },
  "KNOBS": {
   "word": "KNOBS",
   "roles": [
    {
     "kind": "noun",
     "of": "KNOBS"
    }
   ]
  },
  "PROTRUSION": {
   "word": "PROTRUSION",
   "roles": [
    {
     "kind": "noun",
     "of": "KNOBS"
    }
   ]
  },
  "HANDHOLD": {
   "word": "HANDHOLD",
   "roles": [
    {
     "kind": "noun",
     "of": "KNOBS"
    }
   ]
  },
  "LIGHTS": {
   "word": "LIGHTS",
   "roles": [
    {
     "kind": "noun",
     "of": "ENUNCIATOR"
    }
   ]
  },
  "SYMBOL": {
   "word": "SYMBOL",
   "roles": [
    {
     "kind": "noun",
     "of": "ENUNCIATOR"
    }
   ]
  },
  "ENUNCIATOR": {
   "word": "ENUNCIATOR",
   "roles": [
    {
     "kind": "adjective",
     "of": "ENUNCIATOR"
    }
   ]
  }
 },
 "files": [
  "actions.zil",
  "clock.zil",
  "crufty.zil",
  "dungeon.zil",
  "emerg.zil",
  "load.zil",
  "macros.zil",
  "main.zil",
  "parser.zil",
  "sf.zil",
  "starcross.zil",
  "syntax.zil",
  "verbs.zil"
 ]
};
